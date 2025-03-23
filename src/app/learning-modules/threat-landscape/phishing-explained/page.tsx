/**
 * Copyright (c) 2025 OryxForge Labs LLC
 * CyberGuardians Junior - Cybersecurity Educational App for Children
 * All rights reserved.
 */


import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function PhishingExplainedPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Lesson Header */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="bg-red-100 p-4 rounded-full mr-4">
              <span className="text-4xl">🎣</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold">Phishing Explained</h1>
              <div className="flex items-center text-sm text-gray-500 mt-2">
                <span className="mr-4">⏱️ 12 min</span>
                <span>🏆 10 XP</span>
              </div>
            </div>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-lg">
              Phishing is when someone tries to trick you into giving away personal information 
              like passwords or credit card numbers by pretending to be someone you trust.
            </p>
          </div>
        </div>

        {/* Lesson Content */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">How Phishing Works</h2>
          
          <div className="space-y-8">
            <p>
              Imagine you're fishing with a rod and bait to catch fish. Phishing works in a similar way, 
              but instead of catching fish, cybercriminals are trying to "catch" your personal information!
            </p>
            
            {/* Email Phishing */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <span className="text-2xl">📧</span>
                </div>
                <h3 className="text-xl font-bold">Email Phishing</h3>
              </div>
              <p>
                The most common type of phishing happens through email. You might receive an email that looks 
                like it's from your bank, a popular website, or even your school. The email usually:
              </p>
              <ul className="list-disc pl-8 mt-2 space-y-1">
                <li>Creates a sense of urgency ("Your account will be deleted!")</li>
                <li>Asks you to click on a link</li>
                <li>Requests personal information</li>
              </ul>
              <div className="mt-4 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <p className="font-medium">Example: An email claiming to be from a gaming site saying 
                "Your account will be deleted unless you verify your password now!"</p>
              </div>
            </div>

            {/* SMS Phishing */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-xl font-bold">SMS Phishing (Smishing)</h3>
              </div>
              <p>
                Phishing can also happen through text messages. These are sometimes called "smishing" 
                (SMS + phishing). These messages might claim to be from delivery services, banks, or contests.
              </p>
              <div className="mt-4 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <p className="font-medium">Example: A text message saying "Congratulations! You've won a free 
                tablet. Click here to claim your prize now!"</p>
              </div>
            </div>

            {/* Voice Phishing */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <span className="text-2xl">📞</span>
                </div>
                <h3 className="text-xl font-bold">Voice Phishing (Vishing)</h3>
              </div>
              <p>
                Sometimes phishing happens over the phone. Someone might call pretending to be from 
                a company or even the government and ask for your personal information.
              </p>
              <div className="mt-4 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <p className="font-medium">Example: A caller claiming to be from tech support saying 
                "We've detected a virus on your computer. We need your password to fix it."</p>
              </div>
            </div>
          </div>
        </div>

        {/* How to Spot Phishing */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">How to Spot Phishing</h2>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-red-100 p-2 rounded-full mr-4 mt-1">
                <span className="text-xl">🔍</span>
              </div>
              <div>
                <h3 className="text-lg font-medium">Check the sender's email address</h3>
                <p className="text-gray-600">Real companies use official email domains. For example, 
                emails from Google will end with @google.com, not something like @google-support.com.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-red-100 p-2 rounded-full mr-4 mt-1">
                <span className="text-xl">❗</span>
              </div>
              <div>
                <h3 className="text-lg font-medium">Be suspicious of urgent requests</h3>
                <p className="text-gray-600">Phishing often creates a false sense of urgency to make you act quickly without thinking.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-red-100 p-2 rounded-full mr-4 mt-1">
                <span className="text-xl">🔗</span>
              </div>
              <div>
                <h3 className="text-lg font-medium">Hover over links before clicking</h3>
                <p className="text-gray-600">Place your mouse over a link (without clicking) to see where it really goes.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-red-100 p-2 rounded-full mr-4 mt-1">
                <span className="text-xl">🔒</span>
              </div>
              <div>
                <h3 className="text-lg font-medium">Never share passwords or personal info</h3>
                <p className="text-gray-600">Legitimate companies will never ask for your password via email or text.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quiz Section */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Quick Quiz</h2>
          
          <div className="space-y-6">
            <div>
              <p className="font-medium mb-3">1. What is phishing trying to steal from you?</p>
              <div className="space-y-2">
                <div className="bg-gray-100 p-3 rounded-lg hover:bg-red-50 cursor-pointer">
                  <p>A) Your computer</p>
                </div>
                <div className="bg-gray-100 p-3 rounded-lg hover:bg-red-50 cursor-pointer">
                  <p>B) Your personal information</p>
                </div>
                <div className="bg-gray-100 p-3 rounded-lg hover:bg-red-50 cursor-pointer">
                  <p>C) Your internet connection</p>
                </div>
              </div>
            </div>
            
            <div>
              <p className="font-medium mb-3">2. What is "smishing"?</p>
              <div className="space-y-2">
                <div className="bg-gray-100 p-3 rounded-lg hover:bg-red-50 cursor-pointer">
                  <p>A) Phishing through social media</p>
                </div>
                <div className="bg-gray-100 p-3 rounded-lg hover:bg-red-50 cursor-pointer">
                  <p>B) Phishing through text messages</p>
                </div>
                <div className="bg-gray-100 p-3 rounded-lg hover:bg-red-50 cursor-pointer">
                  <p>C) Phishing through smart devices</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <Button variant="cyber" size="lg">Check Answers</Button>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button variant="outline" className="border-gray-300">
            <Link href="/learning-modules/threat-landscape">← Back to Threat Landscape</Link>
          </Button>
          <Button variant="cyber">
            <Link href="/learning-modules/threat-landscape/ransomware-dangers">Next Lesson →</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
