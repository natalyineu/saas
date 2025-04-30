'use client';

import React, { useEffect, useState } from 'react';
import { cleanupBrowserExtensionAttributes } from '@/lib/utils/hydration-helper';

interface SuppressHydrationWarningProps {
  children: React.ReactNode;
}

/**
 * This component wraps elements to suppress hydration warnings that might occur
 * due to browser extensions (like Bitdefender) that add attributes like bis_skin_checked
 */
export default function SuppressHydrationWarning({ children }: SuppressHydrationWarningProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Clean up browser extension attributes
    const cleanup = cleanupBrowserExtensionAttributes();
    
    return cleanup;
  }, []);

  return (
    <div suppressHydrationWarning>
      {children}
    </div>
  );
} 