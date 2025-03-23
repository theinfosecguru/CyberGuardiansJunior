/**
 * Copyright (c) 2025 OryxForge Labs LLC
 * CyberGuardians Junior - Cybersecurity Educational App for Children
 * All rights reserved.
 */


import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function SocialMediaSpyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Story Header */}
        <div className="bg-blue-500 text-white rounded-xl p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="text-6xl mr-6 mb-4 md:mb-0">👤</div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Social Media Spy</h1>
              <p className="text-lg opacity-90">
                An interactive story about spotting and stopping fake profiles from stealing personal data.
              </p>
            </div>
          </div>
        </div>

        {/* Story Introduction */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">The Mystery Friend Request</h2>
          
          <div className="prose max-w-none">
            <p className="text-lg">
              You're scrolling through your social media feed when you get a notification: 
              <strong> "Alex Johnson wants to be friends."</strong>
            </p>
            
            <p>
              You don't recognize the name, but the profile picture shows a kid about your age 
              with a cool skateboard. The profile says they go to a school in a nearby town and 
              they like the same video games as you.
            </p>
            
            <p>
              You notice they only have 15 friends, and their account was created last week. 
              Their posts are mostly memes and game screenshots.
            </p>
            
            <div className="bg-blue-50 p-4 rounded-lg my-6">
              <h3 className="font-bold mb-2">What would you do?</h3>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg border border-blue-200 hover:bg-blue-50 cursor-pointer">
                  <p>Accept the friend request - they seem to like the same things as me!</p>
                </div>
                
                <div className="bg-white p-3 rounded-lg border border-blue-200 hover:bg-blue-50 cursor-pointer">
                  <p>Ignore the request - I don't know this person.</p>
                </div>
                
                <div className="bg-white p-3 rounded-lg border border-blue-200 hover:bg-blue-50 cursor-pointer">
                  <p>Do some investigating before deciding.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Story Continuation - Investigation Path */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">The Investigation</h2>
          
          <div className="prose max-w-none">
            <p>
              You decide to do some investigating before accepting the request. Smart move! 
              Here's what you find:
            </p>
            
            <ul className="space-y-2">
              <li>The school mentioned in their profile doesn't exist in that town.</li>
              <li>When you reverse image search their profile picture, you find it's a stock photo used on multiple websites.</li>
              <li>Their posts about the video games have some basic errors that a real fan wouldn't make.</li>
              <li>None of your real friends are connected to this person.</li>
            </ul>
            
            <p className="mt-4">
              This is starting to look suspicious. You remember learning about fake profiles in your 
              cybersecurity lessons. These are sometimes created by people trying to:
            </p>
            
            <ul className="space-y-2">
              <li>Collect personal information about kids</li>
              <li>Trick people into clicking dangerous links</li>
              <li>Build trust before asking for money or gifts</li>
              <li>Access a wider network of friends</li>
            </ul>
            
            <div className="bg-blue-50 p-4 rounded-lg my-6">
              <h3 className="font-bold mb-2">What would you do now?</h3>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg border border-blue-200 hover:bg-blue-50 cursor-pointer">
                  <p>Block and report the account as suspicious.</p>
                </div>
                
                <div className="bg-white p-3 rounded-lg border border-blue-200 hover:bg-blue-50 cursor-pointer">
                  <p>Message them to ask why they're using a fake photo.</p>
                </div>
                
                <div className="bg-white p-3 rounded-lg border border-blue-200 hover:bg-blue-50 cursor-pointer">
                  <p>Tell a parent or trusted adult about what you found.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Story Resolution */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Taking Action</h2>
          
          <div className="prose max-w-none">
            <p>
              You decide to tell a parent or trusted adult about what you found, and together you 
              block and report the suspicious account. Great job!
            </p>
            
            <p>
              A few days later, you hear that several kids from different schools received similar 
              friend requests. The accounts were trying to collect personal information and send links 
              to malicious websites.
            </p>
            
            <p>
              By investigating before accepting the request, you protected yourself and helped 
              others stay safe too!
            </p>
            
            <div className="bg-green-50 p-4 rounded-lg my-6">
              <h3 className="font-bold mb-2">What You Learned:</h3>
              <ul className="space-y-2">
                <li>Be cautious about friend requests from people you don't know in real life.</li>
                <li>Look for warning signs of fake profiles: new accounts, few friends, stock photos, inconsistent information.</li>
                <li>Use tools like reverse image search to verify profile pictures.</li>
                <li>Always tell a trusted adult about suspicious online activity.</li>
                <li>Blocking and reporting fake accounts helps protect everyone.</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg my-6">
              <h3 className="font-bold mb-2">Bonus Challenge:</h3>
              <p>
                With a parent or guardian, review your own social media privacy settings. Make sure you:
              </p>
              <ul className="space-y-1">
                <li>Know all your connections in real life</li>
                <li>Have your accounts set to private</li>
                <li>Don't share personal information like your address, phone number, or school name</li>
                <li>Have a plan for what to do if you receive suspicious messages or requests</li>
              </ul>
            </div>
          </div>
        </div>

        {/* XP Reward */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-6 text-white mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold mb-1">Story Complete!</h2>
              <p>You've learned how to identify and handle suspicious social media profiles.</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
              <div className="text-2xl font-bold">+25 XP</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button variant="outline" className="border-gray-300">
            <Link href="/real-world-scenarios">← Back to Scenarios</Link>
          </Button>
          <Button variant="cyber">
            <Link href="/real-world-scenarios/wifi-warrior">Next Story: Wi-Fi Warrior →</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
