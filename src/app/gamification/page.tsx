/**
 * Copyright (c) 2025 OryxForge Labs LLC
 * CyberGuardians Junior - Cybersecurity Educational App for Children
 * All rights reserved.
 */


import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function GamificationPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="bg-purple-600 text-white rounded-xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="text-6xl mr-6 mb-4 md:mb-0">🏆</div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Rewards & Achievements</h1>
              <p className="text-lg opacity-90">
                Track your progress, earn badges, and customize your avatar as you become a Cyber Hero!
              </p>
            </div>
          </div>
        </div>

        {/* XP and Level Section */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">Your Progress</h2>
              <p className="text-gray-600">Level 3 Cyber Defender</p>
              
              <div className="mt-4 w-full md:w-80">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>250 XP</span>
                  <span>400 XP needed for Level 4</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div className="bg-purple-600 h-4 rounded-full" style={{ width: '62.5%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-100 p-6 rounded-full">
              <div className="text-6xl">👾</div>
            </div>
          </div>
        </div>

        {/* Badges Section */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Your Badges</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Badge 1 */}
            <div className="bg-yellow-50 p-4 rounded-lg text-center">
              <div className="bg-yellow-100 rounded-full p-4 mx-auto w-20 h-20 flex items-center justify-center mb-3">
                <span className="text-3xl">🔰</span>
              </div>
              <h3 className="font-bold">Cyber Rookie</h3>
              <p className="text-xs text-gray-500">Completed your first lesson</p>
            </div>
            
            {/* Badge 2 */}
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="bg-blue-100 rounded-full p-4 mx-auto w-20 h-20 flex items-center justify-center mb-3">
                <span className="text-3xl">🔑</span>
              </div>
              <h3 className="font-bold">Password Pro</h3>
              <p className="text-xs text-gray-500">Created a strong password</p>
            </div>
            
            {/* Badge 3 - Locked */}
            <div className="bg-gray-100 p-4 rounded-lg text-center opacity-60">
              <div className="bg-gray-200 rounded-full p-4 mx-auto w-20 h-20 flex items-center justify-center mb-3">
                <span className="text-3xl">🔍</span>
              </div>
              <h3 className="font-bold">Threat Spotter</h3>
              <p className="text-xs text-gray-500">Identify 5 phishing attempts</p>
              <div className="mt-2 text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded inline-block">
                Locked
              </div>
            </div>
            
            {/* Badge 4 - Locked */}
            <div className="bg-gray-100 p-4 rounded-lg text-center opacity-60">
              <div className="bg-gray-200 rounded-full p-4 mx-auto w-20 h-20 flex items-center justify-center mb-3">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="font-bold">Cyber Defender</h3>
              <p className="text-xs text-gray-500">Complete all basic security modules</p>
              <div className="mt-2 text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded inline-block">
                Locked
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <Button variant="outline" className="border-purple-500 text-purple-500">
              View All Badges
            </Button>
          </div>
        </div>

        {/* Avatar Customization */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Customize Your Avatar</h2>
          
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="bg-purple-100 p-8 rounded-lg text-center">
                <div className="text-8xl mb-4">👾</div>
                <p className="text-gray-600">Current Avatar</p>
              </div>
            </div>
            
            <div className="md:w-2/3 md:pl-8">
              <h3 className="text-xl font-bold mb-4">Available Avatars</h3>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-purple-50 p-4 rounded-lg text-center cursor-pointer hover:bg-purple-100">
                  <div className="text-3xl mb-2">🤖</div>
                  <p className="text-sm font-medium">Rookie Robot</p>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg text-center cursor-pointer hover:bg-purple-100">
                  <div className="text-3xl mb-2">😺</div>
                  <p className="text-sm font-medium">Cyber Cat</p>
                </div>
                
                <div className="bg-gray-100 p-4 rounded-lg text-center opacity-60">
                  <div className="text-3xl mb-2">🐢</div>
                  <p className="text-sm font-medium">Tech Turtle</p>
                  <div className="mt-1 text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded inline-block">
                    100 XP
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4">Accessories</h3>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-100 p-4 rounded-lg text-center opacity-60">
                  <div className="text-3xl mb-2">👓</div>
                  <p className="text-sm font-medium">Hacker Glasses</p>
                  <div className="mt-1 text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded inline-block">
                    200 XP
                  </div>
                </div>
                
                <div className="bg-gray-100 p-4 rounded-lg text-center opacity-60">
                  <div className="text-3xl mb-2">🛡️</div>
                  <p className="text-sm font-medium">Digital Shield</p>
                  <div className="mt-1 text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded inline-block">
                    300 XP
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Leaderboard */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
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
                <tr className="border-t">
                  <td className="px-4 py-3">1</td>
                  <td className="px-4 py-3 font-medium">CyberNinja42</td>
                  <td className="px-4 py-3">5</td>
                  <td className="px-4 py-3">450 XP</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">2</td>
                  <td className="px-4 py-3 font-medium">PixelDefender</td>
                  <td className="px-4 py-3">4</td>
                  <td className="px-4 py-3">380 XP</td>
                </tr>
                <tr className="border-t bg-purple-50">
                  <td className="px-4 py-3">3</td>
                  <td className="px-4 py-3 font-medium">You</td>
                  <td className="px-4 py-3">3</td>
                  <td className="px-4 py-3">320 XP</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">4</td>
                  <td className="px-4 py-3 font-medium">CodeMaster99</td>
                  <td className="px-4 py-3">3</td>
                  <td className="px-4 py-3">290 XP</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">5</td>
                  <td className="px-4 py-3 font-medium">SafetyFirst</td>
                  <td className="px-4 py-3">2</td>
                  <td className="px-4 py-3">210 XP</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 text-center">
            <Button variant="outline" className="border-purple-500 text-purple-500">
              View Full Leaderboard
            </Button>
          </div>
        </div>

        {/* CTF Challenge Promo */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">Weekly CTF Challenge</h2>
              <p className="text-lg opacity-90">
                Compete with friends in our Capture the Flag challenge! Solve cybersecurity puzzles and win exclusive rewards.
              </p>
              <p className="mt-2 text-sm bg-white/20 inline-block px-3 py-1 rounded-full">
                Next challenge starts in: 2 days 14 hours
              </p>
            </div>
            <Button variant="game" size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              <Link href="/ctf-challenge">Join Challenge</Link>
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button variant="outline" className="border-gray-300">
            <Link href="/dashboard">← Back to Dashboard</Link>
          </Button>
          <Button variant="cyber">
            <Link href="/learning-modules">Continue Learning</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
