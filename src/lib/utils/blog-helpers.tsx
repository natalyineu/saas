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
} from '@/components/blog/icons/case-study-index';

// Import from the new modular icon structure
import {
  FacebookAdsIcon,
  SocialMediaAdsIcon,
  AiContentIcon
} from '@/components/blog/icons/SocialMediaIcons';

import {
  AiAdvertisingIcon,
  ProgrammaticIcon,
  MetaverseIcon,
  EcommerceIcon,
  ConnectedTvIcon
} from '@/components/blog/icons/TechnologyIcons';

import {
  PrivacyIcon,
  UkLandscapeIcon
} from '@/components/blog/icons/SecurityIcons';

import {
  TelegramIcon,
  TelegramAIIcon
} from '@/components/blog/icons/MessagingIcons';

// Import the new icons we created
import {
  EmailMarketingIcon,
  VideoMarketingIcon,
  VoiceSearchIcon,
  InfluencerMarketingIcon,
  AttributionModelIcon
} from '@/components/blog/icons/NewArticleIcons';

// Import new platform-specific icons
import {
  PinterestIcon,
  YahooDspIcon,
  XandrIcon,
  GoogleSearchIcon
} from '@/components/blog/icons/MarketingPlatformIcons';

// Import regional and business icons
import {
  DashboardIcon,
  SingaporeIcon,
  AiAgentIcon,
  ChinaIcon,
  MediaMetricsIcon
} from '@/components/blog/icons/BusinessIcons';

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
  } else if (post.id === 'uk-advertising-landscape-2025') {
    return <UkLandscapeIcon />;
  } else if (post.id === 'connected-tv-ad-campaign') {
    return <ConnectedTvIcon />;
  } else if (post.id === 'ai-telegram-channel-strategy') {
    return <TelegramAIIcon />;
  } else if (post.id === 'telegram-ai-channel-selection') {
    return <TelegramIcon />;
  } else if (post.id === 'urban-beans-case-study') {
    return <BlogCoffeeShopIcon />;
  } else if (post.id === 'taste-of-italy-case-study') {
    return <BlogRestaurantIcon />;
  } else if (post.id === 'chic-trends-case-study') {
    return <BlogFashionIcon />;
  } 
  // Add the new blog post icon matches
  else if (post.id === 'email-marketing-automation') {
    return <EmailMarketingIcon />;
  } else if (post.id === 'video-marketing-strategy') {
    return <VideoMarketingIcon />;
  } else if (post.id === 'voice-search-optimization') {
    return <VoiceSearchIcon />;
  } else if (post.id === 'influencer-marketing-strategy') {
    return <InfluencerMarketingIcon />;
  } else if (post.id === 'marketing-attribution-models') {
    return <AttributionModelIcon />;
  }
  // Add the new platform-specific icons
  else if (post.id === 'pinterest-ad-campaign') {
    return <PinterestIcon />;
  } else if (post.id === 'yahoo-dsp-ad-campaign') {
    return <YahooDspIcon />;
  } else if (post.id === 'xandr-ad-campaign') {
    return <XandrIcon />;
  } else if (post.id === 'google-ads-search-campaign') {
    return <GoogleSearchIcon />;
  } 
  // Add regional and business specific icons
  else if (post.id === 'marketing-dashboard-benefits') {
    return <DashboardIcon />;
  } else if (post.id === 'marketing-in-singapore') {
    return <SingaporeIcon />;
  } else if (post.id === 'ai-marketing-agents') {
    return <AiAgentIcon />;
  } else if (post.id === 'digital-marketing-china') {
    return <ChinaIcon />;
  } else if (post.id === 'media-planning-metrics') {
    return <MediaMetricsIcon />;
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
    return <AiAgentIcon />; // Changed from AiAdvertisingIcon to AiAgentIcon for consistency
  } else if (title.includes('metaverse') || title.includes('virtual') || category.includes('metaverse') || category.includes('vr')) {
    return <MetaverseIcon />;
  } else if (title.includes('content') || category.includes('content')) {
    return <AiContentIcon />;
  } else if (title.includes('telegram') || title.includes('channel')) {
    return <TelegramIcon />;
  } else if (title.includes('tv') || title.includes('connected tv') || title.includes('ctv') || category.includes('tv')) {
    return <ConnectedTvIcon />;
  } else if (title.includes('uk') || title.includes('united kingdom') || title.includes('british')) {
    return <UkLandscapeIcon />;
  } else if (title.includes('pinterest') || category.includes('pinterest')) {
    return <PinterestIcon />;
  } else if (title.includes('yahoo') || title.includes('dsp') || category.includes('dsp')) {
    return <YahooDspIcon />;
  } else if (title.includes('xandr') || category.includes('xandr')) {
    return <XandrIcon />;
  } else if (title.includes('google') || title.includes('search campaign')) {
    return <GoogleSearchIcon />;
  } else if (title.includes('dashboard') || title.includes('metrics dashboard')) {
    return <DashboardIcon />;
  } else if (title.includes('singapore') || category.includes('singapore')) {
    return <SingaporeIcon />;
  } else if (title.includes('china') || category.includes('china')) {
    return <ChinaIcon />;
  } else if (title.includes('metrics') || title.includes('media planning')) {
    return <MediaMetricsIcon />;
  }
  // Add generic matching for new categories
  else if (title.includes('email') || title.includes('automation') || category.includes('email')) {
    return <EmailMarketingIcon />;
  } else if (title.includes('video') || category.includes('video')) {
    return <VideoMarketingIcon />;
  } else if (title.includes('voice') || title.includes('search') || category.includes('voice search')) {
    return <VoiceSearchIcon />;
  } else if (title.includes('influencer') || category.includes('influencer')) {
    return <InfluencerMarketingIcon />;
  } else if (title.includes('attribution') || title.includes('model') || category.includes('attribution')) {
    return <AttributionModelIcon />;
  }
  
  // Default to document icon for articles without a specific match
  return <BlogDefaultIcon />;
}

/**
 * Get stats for case studies if applicable
 */
export function getBlogStats(post: BlogContent): { value: string; label: string } | undefined {
  if (post.id === 'urban-beans-case-study') {
    return { value: '+143%', label: 'increase in foot traffic' };
  } else if (post.id === 'taste-of-italy-case-study') {
    return { value: '+87%', label: 'boost in weekend reservations' };
  } else if (post.id === 'chic-trends-case-study') {
    return { value: '+215%', label: 'return on ad spend' };
  }
  
  return undefined;
} 