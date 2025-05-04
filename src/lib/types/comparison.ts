/**
 * Types for the cost comparison components
 */

export interface ComparisonItem {
  category: string;
  inHouse: string;
  agency: string;
  aiVertise: string;
  savings: string;
}

export interface ComparisonSectionProps {
  isVisible?: boolean;
  isStatic?: boolean;
  title?: string;
  subtitle?: string;
  comparisonData: ComparisonItem[];
  showCta?: boolean;
} 