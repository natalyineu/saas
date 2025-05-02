/**
 * Base interface for all content items (blog posts, success stories, etc.)
 */
export interface ContentItem {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  readTime: string;
  author: string;
  heroImage?: string;
  content?: string;
  tags?: string[];
}

/**
 * Format a date string consistently across the application
 * @param dateString The date string to format (various formats accepted)
 * @returns A consistently formatted date string (e.g., "April 15, 2023")
 */
export function formatDate(dateString: string): string {
  // Handle empty dates
  if (!dateString) return '';
  
  // Try to parse the date string
  const date = new Date(dateString.replace(',', ''));
  
  // Check if the date is valid
  if (isNaN(date.getTime())) {
    // Return the original string if we can't parse it
    return dateString;
  }
  
  // Format the date consistently
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Sort content items by date (newest first)
 */
export function sortContentByDate<T extends ContentItem>(items: T[]): T[] {
  return [...items].sort((a, b) => {
    // Try to convert the dates to timestamps for comparison
    const dateA = new Date(a.date.replace(',', '')).getTime();
    const dateB = new Date(b.date.replace(',', '')).getTime();
    
    // If both dates are valid, compare them (newest first)
    if (!isNaN(dateA) && !isNaN(dateB)) {
      return dateB - dateA;
    }
    
    // Otherwise, fallback to string comparison
    return a.date < b.date ? 1 : -1;
  });
} 