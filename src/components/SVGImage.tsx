'use client';

import React from 'react';
import Image from 'next/image';

interface SVGImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function SVGImage({ src, alt, width, height, className = '' }: SVGImageProps) {
  return (
    <div 
      className={`relative ${className}`} 
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
      />
    </div>
  );
} 