/**
 * Copyright (c) 2025 OryxForge Labs LLC
 * CyberGuardians Junior - Cybersecurity Educational App for Children
 * All rights reserved.
 */


import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CybersecurityLabPage() {
  const simulations = [
    {
      title: 'Phishing Email Lab',
      description: 'Learn to identify suspicious emails by analyzing real-world examples.',
      icon: '📧',
      bgColor: 'bg-blue-100',
      slug: 'phishing-email-lab',
      difficulty: 'Beginner',
      duration: '15 min'
    },
    {
      title: 'Password Dojo',
      description: 'Create strong passwords using emojis, phrases, and special characters.',
      icon: '🔑',
      bgColor: 'bg-purple-100',
      slug: 'password-dojo',
      difficulty: 'Beginner',
      duration: '10 min'
    },
    {
      title: 'Network Defender',
      description: 'Stop cyber attacks in a 3D virtual network environment.',
      icon: '🌐',
      bgColor: 'bg-green-100',
      slug: 'network-defender',
      difficulty: 'Intermediate',
      duration: '20 min',
      isPremium: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="text-6xl mr-6 mb-4 md:mb-0">🔬</div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Cybersecurity Lab</h1>
              <p className="text-lg opacity-90">
                Practice your cybersecurity skills in our interactive sandbox environment.
                Try to spot phishing attempts, create strong passwords, and defend networks!
              </p>
            </div>
          </div>
        </div>

        {/* Lab Introduction */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Welcome to the Lab!</h2>
          <p className="text-lg mb-6">
            The Cybersecurity Lab is where you can practice what you've learned in a safe environment.
            Each simulation gives you hands-on experience with different cybersecurity challenges.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-3xl mb-3">🔍</div>
              <h3 className="text-lg font-bold mb-2">Analyze</h3>
              <p>Examine suspicious content and identify security threats.</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="text-3xl mb-3">🛠️</div>
              <h3 className="text-lg font-bold mb-2">Practice</h3>
              <p>Apply security techniques in realistic scenarios.</p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="text-lg font-bold mb-2">Master</h3>
              <p>Earn badges and XP for completing lab challenges.</p>
            </div>
          </div>
        </div>

        {/* Simulations List */}
        <div className="space-y-6 mb-12">
          <h2 className="text-2xl font-bold mb-6">Available Simulations</h2>
          
          {simulations.map((simulation, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className={`${simulation.bgColor} p-6 flex items-center justify-center md:w-1/6`}>
                  <span className="text-4xl">{simulation.icon}</span>
                </div>
                <div className="p-6 md:w-4/6">
                  <div className="flex items-center mb-2">
                    <h3 className="text-xl font-bold mr-2">{simulation.title}</h3>
                    {simulation.isPremium && (
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                        Premium
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-4">{simulation.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-4">⏱️ {simulation.duration}</span>
                    <span>🔰 {simulation.difficulty}</span>
                  </div>
                </div>
                <div className="p-6 bg-gray-50 flex items-center justify-center md:w-1/6">
                  <Button 
                    variant="cyber" 
                    size="sm"
                    disabled={simulation.isPremium}
                  >
                    <Link href={`/cybersecurity-lab/${simulation.slug}`}>
                      Start Lab
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lab Safety Tips */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Lab Safety Tips</h2>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-cyan-100 p-2 rounded-full mr-4 mt-1">
                <span className="text-xl">✅</span>
              </div>
              <div>
                <h3 className="text-lg font-medium">These are simulations</h3>
                <p className="text-gray-600">All phishing emails and security threats in our labs are simulated and safe.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-cyan-100 p-2 rounded-full mr-4 mt-1">
                <span className="text-xl">✅</span>
              </div>
              <div>
                <h3 className="text-lg font-medium">Practice makes perfect</h3>
                <p className="text-gray-600">Don't worry if you make mistakes. You can retry simulations as many times as you need.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-cyan-100 p-2 rounded-full mr-4 mt-1">
                <span className="text-xl">✅</span>
              </div>
              <div>
                <h3 className="text-lg font-medium">Apply what you learn</h3>
                <p className="text-gray-600">The skills you practice here will help you stay safe online in the real world.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Upgrade Banner */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl p-8 text-white mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">Unlock Premium Simulations</h2>
              <p className="text-lg opacity-90">
                Get access to advanced lab simulations like Network Defender, Encryption Puzzles, and more!
              </p>
            </div>
            <Button variant="game" size="lg" className="bg-white text-yellow-600 hover:bg-gray-100">
              <Link href="/premium">Upgrade to Premium</Link>
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
