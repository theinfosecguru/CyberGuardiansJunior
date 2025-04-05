/**
 * Copyright (c) 2025 OryxForge Labs LLC
 * CyberGuardians Junior - Cybersecurity Educational App for Children
 * All rights reserved.
 */


import React from 'react';
import { Button } from '/src/components/ui/button';
import Link from 'next/link';

export default function LearningModuleCard({ 
  title, 
  description, 
  icon, 
  bgColor, 
  slug,
  isPremium = false
}: {
  title: string;
  description: string;
  icon: string;
  bgColor: string;
  slug: string;
  isPremium?: boolean;
}) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
      <div className={`h-40 ${bgColor} flex items-center justify-center relative`}>
        <span className="text-4xl">{icon}</span>
        {isPremium && (
          <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
            Premium
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        <Button variant="cyber" size="sm">
          <Link href={`/learning-modules/${slug}`}>Start Learning</Link>
        </Button>
      </div>
    </div>
  );
}
