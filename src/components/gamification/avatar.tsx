/**
 * Copyright (c) 2025 OryxForge Labs LLC
 * CyberGuardians Junior - Cybersecurity Educational App for Children
 * All rights reserved.
 */


import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AvatarComponent({ 
  name, 
  icon, 
  isUnlocked = false,
  isSelected = false,
  xpRequired = 0
}: {
  name: string;
  icon: string;
  isUnlocked?: boolean;
  isSelected?: boolean;
  xpRequired?: number;
}) {
  return (
    <div 
      className={`
        ${isUnlocked ? 'bg-purple-50' : 'bg-gray-100 opacity-60'} 
        ${isSelected ? 'ring-2 ring-purple-500' : ''} 
        p-4 rounded-lg text-center 
        ${isUnlocked ? 'cursor-pointer hover:bg-purple-100' : ''}
      `}
    >
      <div className="text-3xl mb-2">{icon}</div>
      <p className="text-sm font-medium">{name}</p>
      
      {!isUnlocked && xpRequired > 0 && (
        <div className="mt-1 text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded inline-block">
          {xpRequired} XP
        </div>
      )}
      
      {isSelected && (
        <div className="mt-1 text-xs bg-purple-200 text-purple-700 px-2 py-0.5 rounded inline-block">
          Selected
        </div>
      )}
    </div>
  );
}
