/**
 * Utility functions for processing article content
 */

/**
 * Fixes header hierarchy in article content to ensure proper H2, H3, H4 sequence
 * Converts any H1 tags within content to H2, adjusts other headers accordingly
 */
export const fixArticleHeaders = (content) => {
  if (!content) return content;
  
  // Convert any H1 tags in content to H2 (since main article title is H1)
  let fixedContent = content.replace(/<h1>/g, '<h2>');
  fixedContent = fixedContent.replace(/<\/h1>/g, '</h2>');
  
  // Ensure proper header hierarchy - H2, H3, H4
  // The current content already has proper hierarchy with H2, H3, H4, etc.
  // So we just need to make sure no H1 exists in content section
  
  return fixedContent;
};

/**
 * Adds proper spacing between paragraphs in content
 */
export const addParagraphSpacing = (content) => {
  if (!content) return content;
  
  // Add margin bottom to paragraphs for better spacing
  // Replace <p> tags with margin
  let spacedContent = content.replace(/<p>/g, '<p class="mb-4">');
  
  // Add margin to other block elements as well
  spacedContent = spacedContent.replace(/<blockquote>/g, '<blockquote class="mb-4">');
  spacedContent = spacedContent.replace(/<h2>/g, '<h2 class="mb-4">');
  spacedContent = spacedContent.replace(/<h3>/g, '<h3 class="mb-4">');
  spacedContent = spacedContent.replace(/<h4>/g, '<h4 class="mb-4">');
  spacedContent = spacedContent.replace(/<ul>/g, '<ul class="mb-4">');
  spacedContent = spacedContent.replace(/<ol>/g, '<ol class="mb-4">');
  
  return spacedContent;
};

/**
 * Processes article content to fix headers and add spacing
 */
export const processArticleContent = (content) => {
  if (!content) return content;
  
  let processedContent = fixArticleHeaders(content);
  processedContent = addParagraphSpacing(processedContent);
  
  return processedContent;
};