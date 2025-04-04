/**
 * Copyright (c) 2025 OryxForge Labs LLC
 * CyberGuardians Junior - Cybersecurity Educational App for Children
 * All rights reserved.
 */


import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function PhishingEmailLabPage() {
  // Sample phishing emails for the simulation
  const phishingEmails = [
    {
      id: 1,
      sender: 'netflix-support@netfl1x-account.com',
      subject: 'Your Netflix account has been suspended',
      preview: 'We need to verify your payment information immediately...',
      content: `Dear Valued Customer,

We regret to inform you that your Netflix account has been temporarily suspended due to a problem with your last payment. To continue enjoying your favorite shows and movies, please verify your payment information immediately by clicking the button below.

If you do not update your payment information within 24 hours, your account will be permanently deleted.

[UPDATE PAYMENT INFORMATION]

Thank you for your prompt attention to this matter.

The Netflix Team`,
      redFlags: [
        'Suspicious sender email (netfl1x-account.com instead of netflix.com)',
        'Creates urgency with threat of account deletion',
        'Generic greeting ("Valued Customer" instead of your name)',
        'Asks you to click on a suspicious link',
        'Poor grammar and formatting'
      ],
      isPhishing: true
    },
    {
      id: 2,
      sender: 'support@roblox.com',
      subject: 'Your Roblox password has been reset',
      preview: 'We received a request to reset your Roblox password...',
      content: `Hi there,

We received a request to reset your Roblox password. If you did not make this request, you can safely ignore this email.

If you did request a password reset, click the button below to create a new password. This link will expire in 24 hours.

[RESET PASSWORD]

For security reasons, this link can only be used once. If you need to reset your password again, please visit roblox.com/login and select "Forgot Password".

Thanks,
Roblox Support Team`,
      redFlags: [],
      isPhishing: false
    },
    {
      id: 3,
      sender: 'prize-notification@amazonsweeps.net',
      subject: 'CONGRATULATIONS! You have won a $1,000 Amazon Gift Card!',
      preview: 'You have been randomly selected as our lucky winner...',
      content: `CONGRATULATIONS!!!

You have been randomly selected as our lucky winner of a $1,000 Amazon Gift Card!

To claim your prize, you must respond within 24 HOURS and provide the following information:

- Full Name
- Home Address
- Phone Number
- Credit Card Number (for verification purposes only)

Click here to claim your prize now: [CLAIM PRIZE]

Don't miss out on this amazing opportunity!

Amazon Sweepstakes Team`,
      redFlags: [
        'Suspicious sender domain (amazonsweeps.net is not an official Amazon domain)',
        'Too good to be true offer',
        'Excessive punctuation and capitalization',
        'Requests personal and financial information',
        'Creates false urgency with 24-hour deadline',
        'You never entered any Amazon sweepstakes'
      ],
      isPhishing: true
    }
  ];

  // State would be managed with React hooks in a real implementation
  const currentEmailIndex = 0;
  const currentEmail = phishingEmails[currentEmailIndex];
  const showAnswer = false;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Lab Header */}
        <div className="bg-blue-500 text-white rounded-xl p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="text-6xl mr-6 mb-4 md:mb-0">📧</div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Phishing Email Lab</h1>
              <p className="text-lg opacity-90">
                Learn to identify suspicious emails by analyzing real-world examples.
                Can you spot the phishing attempts?
              </p>
            </div>
          </div>
        </div>

        {/* Lab Instructions */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">How This Lab Works</h2>
          <p className="mb-4">
            You'll be shown several emails. Your job is to determine which ones are legitimate 
            and which ones are phishing attempts trying to steal your information.
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg mb-4">
            <h3 className="font-bold mb-2">Instructions:</h3>
            <ol className="list-decimal pl-5 space-y-1">
              <li>Read each email carefully</li>
              <li>Look for suspicious elements (sender address, grammar, urgency, etc.)</li>
              <li>Decide if it's a real email or a phishing attempt</li>
              <li>Click "It's Phishing" or "It's Safe" to make your choice</li>
              <li>Learn from the explanation to improve your detection skills</li>
            </ol>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
            <p className="font-medium">Remember: In real life, never click on links in suspicious emails!</p>
          </div>
        </div>

        {/* Email Simulation */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          {/* Email Header */}
          <div className="bg-gray-100 p-4 border-b">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-2 text-gray-500 font-medium">From:</div>
              <div className="col-span-10">{currentEmail.sender}</div>
              
              <div className="col-span-2 text-gray-500 font-medium">Subject:</div>
              <div className="col-span-10 font-medium">{currentEmail.subject}</div>
              
              <div className="col-span-2 text-gray-500 font-medium">To:</div>
              <div className="col-span-10">you@email.com</div>
            </div>
          </div>
          
          {/* Email Body */}
          <div className="p-6">
            <div className="whitespace-pre-line">
              {currentEmail.content}
            </div>
          </div>
        </div>

        {/* Decision Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          <Button 
            variant="outline" 
            size="lg"
            className="border-green-500 text-green-500 hover:bg-green-50 px-8"
          >
            It's Safe
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-red-500 text-red-500 hover:bg-red-50 px-8"
          >
            It's Phishing
          </Button>
        </div>

        {/* Answer Explanation (would be conditionally rendered) */}
        {showAnswer && (
          <div className={`bg-${currentEmail.isPhishing ? 'red' : 'green'}-50 rounded-xl shadow-md p-8 mb-8`}>
            <h2 className="text-2xl font-bold mb-4">
              {currentEmail.isPhishing 
                ? '🚨 This is a phishing email!' 
                : '✅ This is a legitimate email!'}
            </h2>
            
            {currentEmail.isPhishing ? (
              <div>
                <p className="mb-4">Here are the red flags that indicate this is a phishing attempt:</p>
                <ul className="list-disc pl-5 space-y-2">
                  {currentEmail.redFlags.map((flag, index) => (
                    <li key={index}>{flag}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <p>
                This email appears to be legitimate. It comes from an official domain, doesn't create 
                false urgency, and doesn't ask for sensitive information in an unusual way.
              </p>
            )}
            
            <div className="mt-6">
              <Button variant="cyber">Next Email</Button>
            </div>
          </div>
        )}

        {/* Progress Tracker */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium">Your Progress</span>
            <span>Email 1 of 3</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div className="bg-blue-500 h-4 rounded-full" style={{ width: '33.3%' }}></div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button variant="outline" className="border-gray-300">
            <Link href="/cybersecurity-lab">← Back to Lab</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
