/**
 * Copyright (c) 2025 OryxForge Labs LLC
 * CyberGuardians Junior - Cybersecurity Educational App for Children
 * All rights reserved.
 */


import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ThreatLandscapePage() {
  const lessons = [
    {
      title: 'Phishing explained',
      description: 'Learn about fake emails and messages designed to trick you.',
      icon: '🎣',
      slug: 'phishing-explained',
      duration: '12 min',
      xpReward: 10
    },
    {
      title: 'Ransomware dangers',
      description: 'Understand how ransomware locks your files and demands payment.',
      icon: '🔒',
      slug: 'ransomware-dangers',
      duration: '10 min',
      xpReward: 10
    },
    {
      title: 'Social engineering',
      description: 'Learn about stranger danger online and how people can trick you.',
      icon: '🕵️',
      slug: 'social-engineering',
      duration: '15 min',
      xpReward: 10
    },
    {
      title: 'Phish or Friend?',
      description: 'Quiz to identify suspicious messages and spot phishing attempts.',
      icon: '🎮',
      slug: 'phish-or-friend',
      duration: '8 min',
      xpReward: 20,
      isGame: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Module Header */}
        <div className="bg-red-500 text-white rounded-xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="text-6xl mr-6 mb-4 md:mb-0">🎣</div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Threat Landscape</h1>
              <p className="text-lg opacity-90">
                Discover different types of cyber threats that exist in the digital world.
                Learn about phishing, ransomware, and social engineering tactics.
              </p>
            </div>
          </div>
        </div>

        {/* Progress Tracker */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <h2 className="text-xl font-bold mb-4">Your Progress</h2>
          <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
            <div className="bg-red-500 h-4 rounded-full" style={{ width: '0%' }}></div>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>0/4 completed</span>
            <span>Earn up to 50 XP</span>
          </div>
        </div>

        {/* Lessons List */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-6">Lessons & Activities</h2>
          
          {lessons.map((lesson, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className={`${lesson.isGame ? 'bg-purple-100' : 'bg-red-100'} p-6 flex items-center justify-center md:w-1/6`}>
                  <span className="text-4xl">{lesson.icon}</span>
                </div>
                <div className="p-6 md:w-4/6">
                  <h3 className="text-xl font-bold mb-2">{lesson.title}</h3>
                  <p className="text-gray-600 mb-4">{lesson.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-4">⏱️ {lesson.duration}</span>
                    <span>🏆 {lesson.xpReward} XP</span>
                  </div>
                </div>
                <div className="p-6 bg-gray-50 flex items-center justify-center md:w-1/6">
                  <Button 
                    variant={lesson.isGame ? "game" : "cyber"} 
                    size="sm"
                  >
                    <Link href={`/learning-modules/threat-landscape/${lesson.slug}`}>
                      {lesson.isGame ? 'Play' : 'Start'}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Module Navigation */}
        <div className="mt-12 flex justify-between">
          <Button variant="outline" className="border-gray-300">
            <Link href="/learning-modules/cyber-basics">← Previous: Cyber Basics</Link>
          </Button>
          <Button variant="outline" className="border-cyan-500 text-cyan-500">
            <Link href="/learning-modules/defense-mechanisms">Next: Defense Mechanisms →</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
