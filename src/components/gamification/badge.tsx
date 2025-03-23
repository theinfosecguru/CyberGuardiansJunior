/**
 * Copyright (c) 2025 OryxForge Labs LLC
 * CyberGuardians Junior - Cybersecurity Educational App for Children
 * All rights reserved.
 */


import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function BadgeComponent({ 
  name, 
  description, 
  icon, 
  isUnlocked = false,
  xpReward = 0
}: {
  name: string;
  description: string;
  icon: string;
  isUnlocked?: boolean;
  xpReward?: number;
}) {
  return (
    <div className={`${isUnlocked ? 'bg-yellow-50' : 'bg-gray-100 opacity-60'} p-4 rounded-lg text-center`}>
      <div className={`${isUnlocked ? 'bg-yellow-100' : 'bg-gray-200'} rounded-full p-4 mx-auto w-20 h-20 flex items-center justify-center mb-3`}>
        <span className="text-3xl">{icon}</span>
      </div>
      <h3 className="font-bold">{name}</h3>
      <p className="text-xs text-gray-500">{description}</p>
      {!isUnlocked && (
        <div className="mt-2 text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded inline-block">
          Locked
        </div>
      )}
      {isUnlocked && xpReward > 0 && (
        <div className="mt-2 text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded inline-block">
          +{xpReward} XP
        </div>
      )}
    </div>
  );
}
