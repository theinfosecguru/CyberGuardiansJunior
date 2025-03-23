/**
 * Copyright (c) 2025 OryxForge Labs LLC
 * CyberGuardians Junior - Cybersecurity Educational App for Children
 * All rights reserved.
 */


import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ParentPortalPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-500 to-green-500 text-white rounded-xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="text-6xl mr-6 mb-4 md:mb-0">👨‍👩‍👧‍👦</div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Parent & Educator Portal</h1>
              <p className="text-lg opacity-90">
                Stay involved in your child's cybersecurity education journey.
                Track progress, access discussion guides, and participate in family challenges.
              </p>
            </div>
          </div>
        </div>

        {/* Login Section */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Parent Login</h2>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                  placeholder="••••••••"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                
                <div className="text-sm">
                  <a href="#" className="text-teal-600 hover:text-teal-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              
              <div>
                <Button variant="cyber" className="w-full bg-teal-600 hover:bg-teal-700">
                  Sign In
                </Button>
              </div>
              
              <div className="text-center text-sm text-gray-600">
                Don't have an account?{' '}
                <a href="#" className="text-teal-600 hover:text-teal-500">
                  Register here
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Progress Tracking</h3>
            <p className="text-gray-600">
              Monitor your child's learning journey, view completed modules, and check quiz scores.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">💬</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Discussion Guides</h3>
            <p className="text-gray-600">
              Access conversation starters to discuss important cybersecurity topics with your child.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Family Challenges</h3>
            <p className="text-gray-600">
              Participate in family security audits and collaborative activities to secure your digital life.
            </p>
          </div>
        </div>

        {/* Demo Dashboard Preview */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Dashboard Preview</h2>
          
          <div className="bg-gray-100 p-6 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Child Progress Card */}
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-2 rounded-full mr-3">
                    <span className="text-xl">👧</span>
                  </div>
                  <div>
                    <h3 className="font-bold">Emma's Progress</h3>
                    <p className="text-sm text-gray-500">Level 3 Cyber Defender</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Cyber Basics</span>
                      <span className="font-medium">75% Complete</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Threat Landscape</span>
                      <span className="font-medium">50% Complete</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '50%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Defense Mechanisms</span>
                      <span className="font-medium">25% Complete</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Recent Activity Card */}
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-bold mb-3">Recent Activity</h3>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                      <span className="text-xs">🏆</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Earned "Password Pro" Badge</p>
                      <p className="text-xs text-gray-500">Yesterday at 4:30 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-2 mt-1">
                      <span className="text-xs">✅</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Completed "What is Malware?" Lesson</p>
                      <p className="text-xs text-gray-500">Yesterday at 4:15 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-purple-100 p-1 rounded-full mr-2 mt-1">
                      <span className="text-xs">🎮</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Played "Virus Blaster" Game</p>
                      <p className="text-xs text-gray-500">Yesterday at 3:45 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Discussion Guides Preview */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Discussion Guides</h2>
          
          <div className="space-y-6">
            <div className="bg-teal-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Online Privacy Conversations</h3>
              <p className="mb-4">
                Use these conversation starters to discuss online privacy with your child in an age-appropriate way.
              </p>
              
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-md">
                  <p className="font-medium">Question:</p>
                  <p>"What kind of information do you think is okay to share online, and what should be kept private?"</p>
                </div>
                
                <div className="bg-white p-3 rounded-md">
                  <p className="font-medium">Question:</p>
                  <p>"What would you do if a game or app asked for your home address or phone number?"</p>
                </div>
                
                <div className="bg-white p-3 rounded-md">
                  <p className="font-medium">Question:</p>
                  <p>"How can you tell if a website is safe to use?"</p>
                </div>
              </div>
              
              <div className="mt-4">
                <Button variant="outline" className="border-teal-500 text-teal-500">
                  View Full Guide
                </Button>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Digital Citizenship</h3>
              <p className="mb-4">
                Help your child understand how to be a responsible digital citizen with these discussion topics.
              </p>
              
              <div className="mt-4">
                <Button variant="outline" className="border-blue-500 text-blue-500">
                  View Full Guide
                </Button>
              </div>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Cyberbullying Awareness</h3>
              <p className="mb-4">
                Important conversations about recognizing, preventing, and responding to cyberbullying.
              </p>
              
              <div className="mt-4">
                <Button variant="outline" className="border-purple-500 text-purple-500">
                  View Full Guide
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Family Challenge Preview */}
        <div className="bg-gradient-to-r from-teal-500 to-green-500 rounded-xl p-8 text-white mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">Family Security Audit Challenge</h2>
              <p className="text-lg opacity-90">
                Work together with your child to check your home's digital security. 
                Complete tasks like reviewing Wi-Fi settings, updating passwords, and more!
              </p>
            </div>
            <Button variant="game" size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
              Start Family Challenge
            </Button>
          </div>
        </div>

        {/* Educator Resources */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Educator Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Classroom Activities</h3>
              <p className="mb-4">
                Ready-to-use cybersecurity activities designed for classroom settings.
              </p>
              <Button variant="outline" className="border-teal-500 text-teal-500">
                Browse Activities
              </Button>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Lesson Plans</h3>
              <p className="mb-4">
                Structured lesson plans that align with educational standards.
              </p>
              <Button variant="outline" className="border-teal-500 text-teal-500">
                View Lesson Plans
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button variant="outline" className="border-gray-300">
            <Link href="/">← Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
