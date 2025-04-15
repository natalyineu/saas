'use client';

import React, { useState, useEffect } from 'react';

interface CountUpAnimationProps {
  end: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  separator?: string;
  className?: string;
}

const CountUpAnimation: React.FC<CountUpAnimationProps> = ({
  end,
  duration = 1500,
  decimals = 0,
  prefix = '',
  suffix = '',
  separator = ',',
  className = '',
}) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    // Don't animate if the component is not visible yet
    if (typeof window === 'undefined') return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentCount = Math.floor(progress * end);
      
      setCount(currentCount);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    
    const animationId = window.requestAnimationFrame(step);
    
    return () => {
      window.cancelAnimationFrame(animationId);
    };
  }, [end, duration]);
  
  const formatNumber = (num: number): string => {
    const fixedNum = num.toFixed(decimals);
    
    // Add thousand separators
    return fixedNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  };

  return (
    <span className={className}>
      {prefix}{formatNumber(count)}{suffix}
    </span>
  );
};

export default CountUpAnimation; 