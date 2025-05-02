import React from 'react';
import { 
  BlogCoffeeShopIcon,
  BlogRestaurantIcon,
  BlogFashionIcon,
  BlogAiTechIcon,
  BlogPrivacyIcon,
  BlogSocialMediaIcon,
  BlogMetaverseIcon,
  BlogAnalyticsIcon,
  BlogStrategyIcon,
  BlogDefaultIcon
} from '@/components/blog/BlogCaseStudyIcons';

import {
  FacebookAdsIcon,
  AiAdvertisingIcon,
  ProgrammaticIcon,
  PrivacyIcon,
  SocialMediaAdsIcon,
  MetaverseIcon,
  EcommerceIcon,
  AiContentIcon,
  UkLandscapeIcon,
  TelegramIcon
} from '@/components/blog/AnimatedBlogIcons';

interface BlogContent {
  id: string;
  title: string;
  category?: string;
}

/**
 * Get the appropriate icon component for a blog post based on its content
 */
export function getBlogIcon(post: BlogContent): React.ReactNode {
  // Direct matching for specific blog posts by ID with new animated icons
  if (post.id === 'effective-facebook-ads') {
    return <FacebookAdsIcon />;
  } else if (post.id === 'ai-in-digital-advertising') {
    return <AiAdvertisingIcon />;
  } else if (post.id === 'programmatic-advertising-ai') {
    return <ProgrammaticIcon />;
  } else if (post.id === 'privacy-first-advertising') {
    return <PrivacyIcon />;
  } else if (post.id === 'social-media-ai-ads') {
    return <SocialMediaAdsIcon />;
  } else if (post.id === 'metaverse-marketing-opportunities') {
    return <MetaverseIcon />;
  } else if (post.id === 'ecommerce-personalization') {
    return <EcommerceIcon />;
  } else if (post.id === 'social-media-ai-content') {
    return <AiContentIcon />;
  } else if (post.id === 'uk-advertising-landscape-2024') {
    return <UkLandscapeIcon />;
  } else if (post.id.includes('telegram') || post.id.includes('channel-selection')) {
    return <TelegramIcon />;
  } else if (post.id.includes('urban-beans-case-study')) {
    return <BlogCoffeeShopIcon />;
  } else if (post.id.includes('taste-of-italy-case-study')) {
    return <BlogRestaurantIcon />;
  } else if (post.id.includes('chic-trends-case-study')) {
    return <BlogFashionIcon />;
  }
  
  // Then check title and category for more generic matches
  const title = post.title.toLowerCase();
  const category = (post.category || '').toLowerCase();
  
  if (title.includes('facebook') || title.includes('meta ads')) {
    return <FacebookAdsIcon />;
  } else if (title.includes('social media') || category.includes('social')) {
    return <SocialMediaAdsIcon />;
  } else if (title.includes('analytics') || title.includes('data') || category.includes('analytics')) {
    return <BlogAnalyticsIcon />;
  } else if (title.includes('strategy') || title.includes('plan') || category.includes('strategy')) {
    return <BlogStrategyIcon />;
  } else if (title.includes('privacy') || title.includes('security') || category.includes('privacy')) {
    return <PrivacyIcon />;
  } else if (title.includes('ecommerce') || title.includes('fashion') || category.includes('ecommerce') || category.includes('retail')) {
    return <EcommerceIcon />;
  } else if (title.includes('restaurant') || title.includes('food') || category.includes('restaurant') || category.includes('food')) {
    return <BlogRestaurantIcon />; 
  } else if (title.includes('ai') || title.includes('intelligence') || category.includes('ai') || category.includes('tech')) {
    return <AiAdvertisingIcon />;
  } else if (title.includes('metaverse') || title.includes('virtual') || category.includes('metaverse') || category.includes('vr')) {
    return <MetaverseIcon />;
  } else if (title.includes('content') || category.includes('content')) {
    return <AiContentIcon />;
  } else if (title.includes('telegram') || title.includes('channel')) {
    return <TelegramIcon />;
  }
  
  // Default to document icon for articles without a specific match
  return <BlogDefaultIcon />;
}

/**
 * Get stats for case studies if applicable
 */
export function getBlogStats(post: BlogContent): { value: string; label: string } | undefined {
  if (post.id.includes('urban-beans-case-study')) {
    return { value: '+143%', label: 'increase in foot traffic' };
  } else if (post.id.includes('taste-of-italy-case-study')) {
    return { value: '+87%', label: 'boost in weekend reservations' };
  } else if (post.id.includes('chic-trends-case-study')) {
    return { value: '+215%', label: 'return on ad spend' };
  }
  
  return undefined;
} 