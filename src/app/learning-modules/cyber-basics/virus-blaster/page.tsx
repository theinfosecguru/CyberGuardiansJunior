/**
 * Copyright (c) 2025 OryxForge Labs LLC
 * CyberGuardians Junior - Cybersecurity Educational App for Children
 * All rights reserved.
 */


import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function VirusBlasterGame() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Game Header */}
        <div className="bg-purple-600 text-white rounded-xl shadow-md p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="bg-purple-500 p-4 rounded-full mr-4">
              <span className="text-4xl">🎮</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold">Virus Blaster</h1>
              <div className="flex items-center text-sm text-purple-200 mt-2">
                <span className="mr-4">⏱️ 5 min</span>
                <span>🏆 20 XP</span>
              </div>
            </div>
          </div>
          
          <div className="prose max-w-none text-white">
            <p className="text-lg">
              Protect your device by blasting the viruses before they infect your system! 
              Tap or click on the viruses as they appear to destroy them.
            </p>
          </div>
        </div>

        {/* Game Canvas */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <div className="aspect-video bg-gray-900 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🎮</div>
                <h3 className="text-2xl font-bold text-white mb-4">Virus Blaster</h3>
                <p className="text-gray-400 mb-6">Tap viruses to protect your device!</p>
                <Button variant="game" size="lg" className="px-8">
                  Start Game
                </Button>
              </div>
            </div>
            
            {/* Game elements would be rendered here with JavaScript */}
            <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              Score: 0
            </div>
            <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              Time: 60s
            </div>
          </div>
          
          <div className="mt-6 bg-purple-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">How to Play:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Click or tap on viruses as they appear on your screen</li>
              <li>Each virus destroyed earns you points</li>
              <li>Don't let viruses stay on screen too long or they'll infect your system</li>
              <li>Special power-ups will appear occasionally - grab them for bonuses!</li>
            </ul>
          </div>
        </div>

        {/* Learning Section */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">What You're Learning</h2>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-purple-100 p-2 rounded-full mr-4 mt-1">
                <span className="text-xl">🦠</span>
              </div>
              <div>
                <h3 className="text-lg font-medium">Virus Recognition</h3>
                <p className="text-gray-600">Learning to identify different types of malware by their appearance and behavior.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-purple-100 p-2 rounded-full mr-4 mt-1">
                <span className="text-xl">⚡</span>
              </div>
              <div>
                <h3 className="text-lg font-medium">Quick Response</h3>
                <p className="text-gray-600">Understanding that fast action is important when dealing with cyber threats.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-purple-100 p-2 rounded-full mr-4 mt-1">
                <span className="text-xl">🛡️</span>
              </div>
              <div>
                <h3 className="text-lg font-medium">System Protection</h3>
                <p className="text-gray-600">Learning how antivirus software works to protect your devices.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button variant="outline" className="border-gray-300">
            <Link href="/learning-modules/cyber-basics">← Back to Cyber Basics</Link>
          </Button>
          <Button variant="cyber">
            <Link href="/learning-modules/threat-landscape">Next Module: Threat Landscape →</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
