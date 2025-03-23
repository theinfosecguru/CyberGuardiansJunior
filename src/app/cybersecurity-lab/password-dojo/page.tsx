/**
 * Copyright (c) 2025 OryxForge Labs LLC
 * CyberGuardians Junior - Cybersecurity Educational App for Children
 * All rights reserved.
 */


import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function PasswordDojoPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Lab Header */}
        <div className="bg-purple-600 text-white rounded-xl p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="text-6xl mr-6 mb-4 md:mb-0">🔑</div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Password Dojo</h1>
              <p className="text-lg opacity-90">
                Learn to create strong, memorable passwords that keep your accounts safe.
                Master the art of password creation!
              </p>
            </div>
          </div>
        </div>

        {/* Lab Instructions */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Password Power Training</h2>
          <p className="mb-4">
            Welcome to the Password Dojo! Here you'll learn how to create strong passwords 
            that are hard for hackers to crack but easy for you to remember.
          </p>
          
          <div className="bg-purple-50 p-4 rounded-lg mb-4">
            <h3 className="font-bold mb-2">What Makes a Strong Password?</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>At least 12 characters long</li>
              <li>Mix of uppercase and lowercase letters</li>
              <li>Includes numbers and special characters</li>
              <li>Not a common word or phrase</li>
              <li>Not personal information (birthday, pet name, etc.)</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
            <p className="font-medium">Remember: Never use the same password for multiple accounts!</p>
          </div>
        </div>

        {/* Password Strength Tester */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Password Strength Tester</h2>
          
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Enter a password to test its strength:
            </label>
            <input
              type="text"
              id="password"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
              placeholder="Type your password here..."
            />
          </div>
          
          <div className="mb-6">
            <h3 className="font-medium mb-2">Password Strength:</h3>
            <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
              <div className="bg-red-500 h-4 rounded-full" style={{ width: '20%' }}></div>
            </div>
            <p className="text-red-500 font-medium">Very Weak - Would be cracked instantly!</p>
          </div>
          
          <div className="bg-red-50 p-4 rounded-lg mb-6">
            <h3 className="font-bold mb-2">Password Weaknesses:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Too short (only 6 characters)</li>
              <li>Only lowercase letters</li>
              <li>Common dictionary word</li>
              <li>No numbers or special characters</li>
            </ul>
          </div>
          
          <Button variant="cyber">Test Strength</Button>
        </div>

        {/* Password Creation Techniques */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Password Creation Techniques</h2>
          
          <div className="space-y-6">
            {/* Technique 1 */}
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">The Phrase Method</h3>
              <p className="mb-3">
                Create a password using the first letters of a sentence or phrase you can remember.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="font-medium mb-1">Example:</p>
                <p className="mb-1">Phrase: "I love to play Minecraft with my best friend Alex on Saturdays!"</p>
                <p className="mb-1">Password: "IltpMwmbfAoS!"</p>
                <div className="mt-2 text-sm bg-green-100 text-green-800 px-2 py-1 rounded inline-block">
                  Very Strong
                </div>
              </div>
            </div>
            
            {/* Technique 2 */}
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">The Substitution Method</h3>
              <p className="mb-3">
                Replace letters with similar-looking numbers and symbols.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="font-medium mb-1">Example:</p>
                <p className="mb-1">Word: "Dinosaur"</p>
                <p className="mb-1">Password: "D1n0$@ur!"</p>
                <div className="mt-2 text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded inline-block">
                  Medium Strength (add more characters)
                </div>
              </div>
            </div>
            
            {/* Technique 3 */}
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">The Emoji Method</h3>
              <p className="mb-3">
                Use emoji words to create memorable but secure passwords.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="font-medium mb-1">Example:</p>
                <p className="mb-1">Concept: "Rocket to the moon and stars"</p>
                <p className="mb-1">Password: "🚀2the🌙&⭐s!"</p>
                <div className="mt-2 text-sm bg-green-100 text-green-800 px-2 py-1 rounded inline-block">
                  Very Strong
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Password Challenge */}
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl p-8 text-white mb-8">
          <h2 className="text-2xl font-bold mb-4">Password Challenge</h2>
          <p className="mb-6">
            Ready to test your skills? Create a strong password using one of the techniques 
            you've learned. Our password meter will tell you how strong it is!
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mb-6">
            <div className="mb-4">
              <label htmlFor="challenge-password" className="block text-sm font-medium text-white mb-1">
                Create your strong password:
              </label>
              <input
                type="text"
                id="challenge-password"
                className="w-full p-3 border border-purple-300 rounded-md text-gray-800"
                placeholder="Create a strong password..."
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-white mb-1">
                Which technique did you use?
              </label>
              <select className="w-full p-3 border border-purple-300 rounded-md text-gray-800">
                <option>The Phrase Method</option>
                <option>The Substitution Method</option>
                <option>The Emoji Method</option>
                <option>My Own Method</option>
              </select>
            </div>
            
            <Button variant="game" className="w-full">Submit Challenge</Button>
          </div>
        </div>

        {/* Password Manager Info */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Password Managers</h2>
          <p className="mb-4">
            With so many accounts, it can be hard to remember all your passwords. That's where 
            password managers can help! They securely store all your passwords so you only need 
            to remember one master password.
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Benefits of Password Managers:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Store all your passwords securely</li>
              <li>Generate strong, random passwords for you</li>
              <li>Auto-fill passwords on websites</li>
              <li>Alert you if your passwords are weak or reused</li>
            </ul>
            <p className="mt-3 text-sm">
              Note: Always talk to your parents before using a password manager!
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button variant="outline" className="border-gray-300">
            <Link href="/cybersecurity-lab">← Back to Lab</Link>
          </Button>
          <Button variant="cyber">
            <Link href="/cybersecurity-lab/phishing-email-lab">Try Phishing Email Lab →</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
