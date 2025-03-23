/**
 * Copyright (c) 2025 OryxForge Labs LLC
 * CyberGuardians Junior - Cybersecurity Educational App for Children
 * All rights reserved.
 */


import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function LeaderboardComponent({ 
  entries,
  userRank
}: {
  entries: {
    rank: number;
    username: string;
    level: number;
    xp: number;
    isCurrentUser?: boolean;
  }[];
  userRank: number;
}) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Weekly Leaderboard</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-2 text-left">Rank</th>
              <th className="px-4 py-2 text-left">Player</th>
              <th className="px-4 py-2 text-left">Level</th>
              <th className="px-4 py-2 text-left">XP This Week</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, index) => (
              <tr 
                key={index} 
                className={`border-t ${entry.isCurrentUser ? 'bg-purple-50' : ''}`}
              >
                <td className="px-4 py-3">{entry.rank}</td>
                <td className="px-4 py-3 font-medium">
                  {entry.isCurrentUser ? 'You' : entry.username}
                </td>
                <td className="px-4 py-3">{entry.level}</td>
                <td className="px-4 py-3">{entry.xp} XP</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-6 text-center">
        <Button variant="outline" className="border-purple-500 text-purple-500">
          View Full Leaderboard
        </Button>
      </div>
    </div>
  );
}
