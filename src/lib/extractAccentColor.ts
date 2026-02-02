/**
 * Extracts the primary accent color from an image or falls back to page elements.
 *
 * Logic:
 * 1. Extract colors from image (square icon preferred, logo as fallback)
 * 2. Filter out whites, blacks, and grays
 * 3. Take the most used saturated color
 * 4. Fallback: scan <a> and <button> elements for accent colors
 * 5. Final fallback: return null
 */

interface RGB {
  r: number;
  g: number;
  b: number;
}

interface HSL {
  h: number;
  s: number;
  l: number;
}

interface ExtractedColor {
  hex: string;
  rgb: RGB;
  hsl: HSL;
  count: number;
  confidence: "high" | "low";
}

interface ExtractionResult {
  color: string | null;
  confidence: "high" | "low" | null;
  source: "image" | "page-elements" | null;
}

/**
 * Convert RGB to HSL
 */
function rgbToHsl(r: number, g: number, b: number): HSL {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

/**
 * Convert RGB to hex
 */
function rgbToHex(r: number, g: number, b: number): string {
  return (
    "#" +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("")
  );
}

/**
 * Parse a CSS color string to RGB
 */
function parseColorToRgb(color: string): RGB | null {
  // Handle hex
  if (color.startsWith("#")) {
    const hex = color.slice(1);
    if (hex.length === 3) {
      return {
        r: parseInt(hex[0] + hex[0], 16),
        g: parseInt(hex[1] + hex[1], 16),
        b: parseInt(hex[2] + hex[2], 16),
      };
    }
    if (hex.length === 6) {
      return {
        r: parseInt(hex.slice(0, 2), 16),
        g: parseInt(hex.slice(2, 4), 16),
        b: parseInt(hex.slice(4, 6), 16),
      };
    }
  }

  // Handle rgb/rgba
  const rgbMatch = color.match(
    /rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*[\d.]+)?\s*\)/
  );
  if (rgbMatch) {
    return {
      r: parseInt(rgbMatch[1], 10),
      g: parseInt(rgbMatch[2], 10),
      b: parseInt(rgbMatch[3], 10),
    };
  }

  return null;
}

/**
 * Check if a color is white, black, or gray (low saturation)
 */
function isNeutralColor(hsl: HSL): boolean {
  // Pure white or near white
  if (hsl.l >= 95) return true;
  // Pure black or near black
  if (hsl.l <= 5) return true;
  // Gray (saturation < 10%)
  if (hsl.s < 10) return true;
  return false;
}

/**
 * Check if a color has acceptable saturation
 */
function getColorConfidence(hsl: HSL): "high" | "low" | null {
  if (hsl.s > 30) return "high";
  if (hsl.s >= 10) return "low";
  return null;
}

/**
 * Extract colors from an image using canvas
 */
async function extractColorsFromImage(
  imageUrl: string
): Promise<ExtractedColor[]> {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = "anonymous";

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        resolve([]);
        return;
      }

      // Sample at a reasonable resolution for performance
      const maxSize = 100;
      const scale = Math.min(maxSize / img.width, maxSize / img.height, 1);
      canvas.width = Math.floor(img.width * scale);
      canvas.height = Math.floor(img.height * scale);

      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;

      // Count colors (quantized to reduce unique values)
      const colorCounts = new Map<string, { rgb: RGB; count: number }>();
      const quantize = (value: number) => Math.round(value / 16) * 16;

      for (let i = 0; i < pixels.length; i += 4) {
        const r = quantize(pixels[i]);
        const g = quantize(pixels[i + 1]);
        const b = quantize(pixels[i + 2]);
        const a = pixels[i + 3];

        // Skip transparent pixels
        if (a < 128) continue;

        const key = `${r},${g},${b}`;
        const existing = colorCounts.get(key);
        if (existing) {
          existing.count++;
        } else {
          colorCounts.set(key, { rgb: { r, g, b }, count: 1 });
        }
      }

      // Convert to array and filter
      const colors: ExtractedColor[] = [];
      for (const [, value] of colorCounts) {
        const hsl = rgbToHsl(value.rgb.r, value.rgb.g, value.rgb.b);

        // Skip neutral colors
        if (isNeutralColor(hsl)) continue;

        const confidence = getColorConfidence(hsl);
        if (!confidence) continue;

        colors.push({
          hex: rgbToHex(value.rgb.r, value.rgb.g, value.rgb.b),
          rgb: value.rgb,
          hsl,
          count: value.count,
          confidence,
        });
      }

      // Sort by count (most used first)
      colors.sort((a, b) => b.count - a.count);

      resolve(colors);
    };

    img.onerror = () => {
      resolve([]);
    };

    img.src = imageUrl;
  });
}

/**
 * Extract accent colors from page elements (<a> and <button>)
 */
function extractColorsFromPageElements(): ExtractedColor[] {
  if (typeof document === "undefined") return [];

  const elements = document.querySelectorAll("a, button");
  const colorCounts = new Map<string, { rgb: RGB; count: number }>();

  elements.forEach((el) => {
    const style = window.getComputedStyle(el);
    const colorsToCheck = [style.color, style.backgroundColor];

    colorsToCheck.forEach((color) => {
      const rgb = parseColorToRgb(color);
      if (!rgb) return;

      const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
      if (isNeutralColor(hsl)) return;

      const hex = rgbToHex(rgb.r, rgb.g, rgb.b);
      const existing = colorCounts.get(hex);
      if (existing) {
        existing.count++;
      } else {
        colorCounts.set(hex, { rgb, count: 1 });
      }
    });
  });

  const colors: ExtractedColor[] = [];
  for (const [hex, value] of colorCounts) {
    const hsl = rgbToHsl(value.rgb.r, value.rgb.g, value.rgb.b);
    const confidence = getColorConfidence(hsl);
    if (!confidence) continue;

    colors.push({
      hex,
      rgb: value.rgb,
      hsl,
      count: value.count,
      confidence,
    });
  }

  // Sort by count (most frequent first)
  colors.sort((a, b) => b.count - a.count);

  return colors;
}

/**
 * Main function: Extract accent color from image with fallbacks
 *
 * @param squareIconUrl - URL of the square icon (preferred)
 * @param logoUrl - URL of the logo (fallback if no square icon)
 * @returns ExtractionResult with color hex, confidence level, and source
 */
export async function extractAccentColor(
  squareIconUrl?: string,
  logoUrl?: string
): Promise<ExtractionResult> {
  // Step 1: Try square icon first
  if (squareIconUrl) {
    const colors = await extractColorsFromImage(squareIconUrl);
    if (colors.length > 0) {
      return {
        color: colors[0].hex,
        confidence: colors[0].confidence,
        source: "image",
      };
    }
  }

  // Step 2: Try logo as fallback
  if (logoUrl) {
    const colors = await extractColorsFromImage(logoUrl);
    if (colors.length > 0) {
      return {
        color: colors[0].hex,
        confidence: colors[0].confidence,
        source: "image",
      };
    }
  }

  // Step 3: Fallback to page elements
  const pageColors = extractColorsFromPageElements();
  if (pageColors.length > 0) {
    return {
      color: pageColors[0].hex,
      confidence: pageColors[0].confidence,
      source: "page-elements",
    };
  }

  // Step 4: Final fallback - no color found
  return {
    color: null,
    confidence: null,
    source: null,
  };
}

/**
 * Synchronous version for page elements only (useful for SSR fallback scenarios)
 */
export function extractAccentColorFromPage(): ExtractionResult {
  const pageColors = extractColorsFromPageElements();
  if (pageColors.length > 0) {
    return {
      color: pageColors[0].hex,
      confidence: pageColors[0].confidence,
      source: "page-elements",
    };
  }

  return {
    color: null,
    confidence: null,
    source: null,
  };
}

/**
 * Extract multiple accent colors (useful for generating palettes)
 */
export async function extractAccentColors(
  squareIconUrl?: string,
  logoUrl?: string,
  maxColors: number = 5
): Promise<ExtractedColor[]> {
  let colors: ExtractedColor[] = [];

  if (squareIconUrl) {
    colors = await extractColorsFromImage(squareIconUrl);
  }

  if (colors.length === 0 && logoUrl) {
    colors = await extractColorsFromImage(logoUrl);
  }

  if (colors.length === 0) {
    colors = extractColorsFromPageElements();
  }

  return colors.slice(0, maxColors);
}
