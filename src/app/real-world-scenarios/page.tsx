/**
 * Copyright (c) 2025 OryxForge Labs LLC
 * CyberGuardians Junior - Cybersecurity Educational App for Children
 * All rights reserved.
 */


import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function RealWorldScenariosPage() {
  const scenarios = [
    {
      title: 'Social Media Spy',
      description: 'Stop a fake profile from stealing personal data.',
      icon: '👤',
      bgColor: 'bg-blue-100',
      slug: 'social-media-spy',
      duration: '15 min',
      type: 'Interactive Story'
    },
    {
      title: 'Wi-Fi Warrior',
      description: 'Learn how to secure public networks and stay safe online.',
      icon: '📶',
      bgColor: 'bg-green-100',
      slug: 'wifi-warrior',
      duration: '12 min',
      type: 'Interactive Story'
    },
    {
      title: 'Cyber Tales: Password Panic',
      description: 'Listen to a story about the importance of strong passwords.',
      icon: '🎧',
      bgColor: 'bg-purple-100',
      slug: 'password-panic',
      duration: '5 min',
      type: 'Podcast'
    },
    {
      title: 'Cyber Tales: Phishing Adventure',
      description: 'A fun audio story about recognizing phishing attempts.',
      icon: '🎧',
      bgColor: 'bg-purple-100',
      slug: 'phishing-adventure',
      duration: '5 min',
      type: 'Podcast'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="text-6xl mr-6 mb-4 md:mb-0">🌎</div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Real-World Scenarios</h1>
              <p className="text-lg opacity-90">
                Experience cybersecurity challenges through interactive stories and podcasts.
                Learn how to apply security concepts in everyday situations!
              </p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Learn Through Stories</h2>
          <p className="text-lg mb-6">
            Our real-world scenarios help you understand how cybersecurity concepts apply to 
            everyday situations. Through interactive stories and audio podcasts, you'll learn 
            how to recognize and respond to common security challenges.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-amber-50 p-6 rounded-lg">
              <div className="text-3xl mb-3">📖</div>
              <h3 className="text-lg font-bold mb-2">Interactive Stories</h3>
              <p>
                Follow along with our characters as they navigate cybersecurity challenges. 
                Make decisions that affect the outcome and learn from the consequences!
              </p>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-lg">
              <div className="text-3xl mb-3">🎧</div>
              <h3 className="text-lg font-bold mb-2">Cyber Tales Podcasts</h3>
              <p>
                Listen to short, engaging audio stories about cybersecurity concepts. 
                Perfect for learning on the go or as a family!
              </p>
            </div>
          </div>
        </div>

        {/* Scenarios List */}
        <div className="space-y-6 mb-12">
          <h2 className="text-2xl font-bold mb-6">Available Scenarios</h2>
          
          {scenarios.map((scenario, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className={`${scenario.bgColor} p-6 flex items-center justify-center md:w-1/6`}>
                  <span className="text-4xl">{scenario.icon}</span>
                </div>
                <div className="p-6 md:w-4/6">
                  <div className="flex items-center mb-2">
                    <h3 className="text-xl font-bold mr-2">{scenario.title}</h3>
                    <span className={`${scenario.type === 'Podcast' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'} text-xs px-2 py-1 rounded-full`}>
                      {scenario.type}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{scenario.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-4">⏱️ {scenario.duration}</span>
                  </div>
                </div>
                <div className="p-6 bg-gray-50 flex items-center justify-center md:w-1/6">
                  <Button 
                    variant={scenario.type === 'Podcast' ? "outline" : "cyber"} 
                    size="sm"
                    className={scenario.type === 'Podcast' ? "border-purple-500 text-purple-500" : ""}
                  >
                    <Link href={`/real-world-scenarios/${scenario.slug}`}>
                      {scenario.type === 'Podcast' ? 'Listen' : 'Start Story'}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Why Stories Matter</h2>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-amber-100 p-2 rounded-full mr-4 mt-1">
                <span className="text-xl">🧠</span>
              </div>
              <div>
                <h3 className="text-lg font-medium">Better Understanding</h3>
                <p className="text-gray-600">Stories help you understand complex concepts by showing how they apply in real situations.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-amber-100 p-2 rounded-full mr-4 mt-1">
                <span className="text-xl">🔄</span>
              </div>
              <div>
                <h3 className="text-lg font-medium">Practice Decision-Making</h3>
                <p className="text-gray-600">Interactive stories let you practice making security decisions without real-world risks.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-amber-100 p-2 rounded-full mr-4 mt-1">
                <span className="text-xl">🤔</span>
              </div>
              <div>
                <h3 className="text-lg font-medium">Critical Thinking</h3>
                <p className="text-gray-600">Scenarios encourage you to think critically about security situations you might encounter.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-amber-100 p-2 rounded-full mr-4 mt-1">
                <span className="text-xl">🎮</span>
              </div>
              <div>
                <h3 className="text-lg font-medium">Fun Learning</h3>
                <p className="text-gray-600">Stories make learning about cybersecurity more engaging and memorable.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Coming Soon */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-white mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">Coming Soon: VR Scenarios</h2>
              <p className="text-lg opacity-90">
                We're developing immersive virtual reality scenarios that will take your 
                cybersecurity learning to the next level!
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <div className="text-4xl mb-2">🥽</div>
              <p className="font-bold">VR Experience</p>
            </div>
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
