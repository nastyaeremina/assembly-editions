import { cookies } from 'next/headers';
import { marked } from 'marked';
import { isEmpty } from '../../helpers/helpers';
import { getSitemap } from '../../lib/contentful-sitemap';
import { NAVBAR_CONTENT_ID, TOP_BAR_CONTENT_ID } from '../../constants/constant';
import { getCommonContent } from '../../lib/contentful-common';
import NavbarComponent from './mainNavbar';
import { getExternalLinks } from '../../helpers/serverSideHelpers';

// Helper function to extract media URL from markdown
function extractMediaUrl(markdown) {
  const mediaRegex = /!\[.*?\]\((.*?)\)/; // Matches ![alt-text](url)
  const match = markdown.match(mediaRegex);
  return match ? match[1] : markdown; // Return URL if matched, otherwise return original text
}
function markdownToArray(markdown) {
  const sections = [];
  let currentSection = null;

  const tokens = marked.lexer(markdown);

  tokens.forEach((token, index) => {
    if (token.type === 'heading' && token.depth === 1) {
      if (currentSection) {
        sections.push(currentSection);
      }
      currentSection = { title: token.text, subsections: [] };
    } else if (token.type === 'heading' && token.depth === 2) {
      if (currentSection) {
        currentSection.subsections.push({
          title: token.text.trim(),
          items: []
        });
      }
    } else if (token.type === 'paragraph' && tokens[index - 1]?.type === 'heading' && tokens[index - 1]?.depth === 1) {
      // Standalone link under a # Heading
      if (currentSection) {
        currentSection.link = token.text.trim().replace(/(https?:\/\/)?www\.copilot\.com/, '');
      }
    } else if (token.type === 'paragraph' && tokens[index - 1]?.type === 'heading' && tokens[index - 1]?.depth === 2) {
      // Standalone link under a ## Subheading
      const lastSubsection = currentSection?.subsections[currentSection.subsections.length - 1];
      if (lastSubsection) {
        lastSubsection.link = extractMediaUrl(token.text.trim()).replace(/(https?:\/\/)?www\.copilot\.com/, '');
      }
    } else if (token.type === 'table') {
      const tableData = token.rows.map((row) => {
        const item = {};
        row.forEach((cell, i) => {
          item[token.header[i].text] = extractMediaUrl(cell.text.trim()).replace(/(https?:\/\/)?www\.copilot\.com/, '');
        });
        return item;
      });
      const lastSubsection = currentSection?.subsections[currentSection.subsections.length - 1];
      if (lastSubsection) {
        lastSubsection.items.push(...tableData);
      }
    }
  });

  if (currentSection) {
    sections.push(currentSection);
  }

  return sections;
}
/**
 * Fetches and prepares the top bar content, navbar items, and external links.
 *
 * @returns {Promise<{ topbarContent: { title: string, url: string } | null, navbarItems: any[], externalLinks: Record<string, any> }>}
 */
export async function getTopBarContent() {
  try {
    const [data, navbarData, externalLinks] = await Promise.all([
      getSitemap(TOP_BAR_CONTENT_ID),
      getCommonContent(NAVBAR_CONTENT_ID),
      getExternalLinks({ asMap: true })
    ]);

    const navbarItems = navbarData ? markdownToArray(navbarData) : [];

    let topbarContent = null;
    if (!isEmpty(data?.content)) {
      const contentList = data?.content?.split(/[\[\]\(\)]/);

      const item = {
        title: contentList?.[1].trim(),
        url: contentList?.[3]
      };
      topbarContent = item;
    }
    return { topbarContent, navbarItems, externalLinks: externalLinks ?? {} };
  } catch (error) {
    console.error('Error fetching top bar content:', error);
    return { topbarContent: null, navbarItems: [], externalLinks: {} };
  }
}

export default async function Navbar({ headerIndex }) {
  const cookie = cookies().get('current-portal-session');
  const { topbarContent, navbarItems, externalLinks } = await getTopBarContent();
  return (
    <>
      <NavbarComponent
        headerIndex={headerIndex}
        isAuthenticated={!isEmpty(cookie?.value)}
        topbarContent={topbarContent}
        navbarData={navbarItems}
        externalLinks={externalLinks}
      />
    </>
  );
}
