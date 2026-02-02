"use client";

import { useState, useEffect } from "react";
import { extractAccentColor, extractAccentColors } from "@/lib/extractAccentColor";

interface UseAccentColorOptions {
  squareIconUrl?: string;
  logoUrl?: string;
  fallbackColor?: string;
}

interface UseAccentColorResult {
  color: string | null;
  confidence: "high" | "low" | null;
  source: "image" | "page-elements" | null;
  isLoading: boolean;
  error: Error | null;
}

/**
 * React hook to extract accent color from an image
 */
export function useAccentColor({
  squareIconUrl,
  logoUrl,
  fallbackColor,
}: UseAccentColorOptions): UseAccentColorResult {
  const [result, setResult] = useState<UseAccentColorResult>({
    color: fallbackColor ?? null,
    confidence: null,
    source: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    async function extract() {
      try {
        const extracted = await extractAccentColor(squareIconUrl, logoUrl);

        if (isMounted) {
          setResult({
            color: extracted.color ?? fallbackColor ?? null,
            confidence: extracted.confidence,
            source: extracted.source,
            isLoading: false,
            error: null,
          });
        }
      } catch (err) {
        if (isMounted) {
          setResult({
            color: fallbackColor ?? null,
            confidence: null,
            source: null,
            isLoading: false,
            error: err instanceof Error ? err : new Error("Failed to extract color"),
          });
        }
      }
    }

    if (squareIconUrl || logoUrl) {
      extract();
    } else {
      setResult({
        color: fallbackColor ?? null,
        confidence: null,
        source: null,
        isLoading: false,
        error: null,
      });
    }

    return () => {
      isMounted = false;
    };
  }, [squareIconUrl, logoUrl, fallbackColor]);

  return result;
}

interface UseAccentColorsResult {
  colors: Array<{
    hex: string;
    confidence: "high" | "low";
  }>;
  isLoading: boolean;
  error: Error | null;
}

/**
 * React hook to extract multiple accent colors from an image
 */
export function useAccentColors(
  squareIconUrl?: string,
  logoUrl?: string,
  maxColors: number = 5
): UseAccentColorsResult {
  const [result, setResult] = useState<UseAccentColorsResult>({
    colors: [],
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    async function extract() {
      try {
        const colors = await extractAccentColors(squareIconUrl, logoUrl, maxColors);

        if (isMounted) {
          setResult({
            colors: colors.map((c) => ({ hex: c.hex, confidence: c.confidence })),
            isLoading: false,
            error: null,
          });
        }
      } catch (err) {
        if (isMounted) {
          setResult({
            colors: [],
            isLoading: false,
            error: err instanceof Error ? err : new Error("Failed to extract colors"),
          });
        }
      }
    }

    if (squareIconUrl || logoUrl) {
      extract();
    } else {
      setResult({
        colors: [],
        isLoading: false,
        error: null,
      });
    }

    return () => {
      isMounted = false;
    };
  }, [squareIconUrl, logoUrl, maxColors]);

  return result;
}
