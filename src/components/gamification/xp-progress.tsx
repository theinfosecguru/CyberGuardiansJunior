/**
 * Copyright (c) 2025 OryxForge Labs LLC
 * CyberGuardians Junior - Cybersecurity Educational App for Children
 * All rights reserved.
 */


import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function XpProgressComponent({ 
  currentXp, 
  nextLevelXp,
  currentLevel,
  levelTitle
}: {
  currentXp: number;
  nextLevelXp: number;
  currentLevel: number;
  levelTitle: string;
}) {
  // Calculate percentage progress to next level
  const progressPercentage = (currentXp / nextLevelXp) * 100;
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Your Progress</h2>
      <p className="text-gray-600">Level {currentLevel} {levelTitle}</p>
      
      <div className="mt-4 w-full">
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>{currentXp} XP</span>
          <span>{nextLevelXp} XP needed for Level {currentLevel + 1}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div 
            className="bg-purple-600 h-4 rounded-full" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
