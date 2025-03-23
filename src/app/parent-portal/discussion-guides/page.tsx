/**
 * Copyright (c) 2025 OryxForge Labs LLC
 * CyberGuardians Junior - Cybersecurity Educational App for Children
 * All rights reserved.
 */


import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function DiscussionGuidesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="bg-teal-500 text-white rounded-xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="text-6xl mr-6 mb-4 md:mb-0">💬</div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Discussion Guides</h1>
              <p className="text-lg opacity-90">
                Conversation starters to help you discuss important cybersecurity topics with your child.
              </p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Why Conversations Matter</h2>
          <p className="text-lg mb-6">
            Talking with your child about online safety is one of the most effective ways to help them 
            develop good digital habits. These discussion guides provide age-appropriate conversation 
            starters to make these important talks easier and more engaging.
          </p>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Tips for Effective Conversations:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Choose a relaxed, distraction-free time to talk</li>
              <li>Listen more than you speak</li>
              <li>Ask open-ended questions</li>
              <li>Share your own experiences when appropriate</li>
              <li>Keep the conversation positive, not scary</li>
              <li>Make it an ongoing dialogue, not a one-time lecture</li>
            </ul>
          </div>
        </div>

        {/* Online Privacy Guide */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Online Privacy Conversations</h2>
          
          <div className="space-y-6">
            <p>
              Privacy is a fundamental aspect of online safety. These conversation starters will help 
              your child understand what information should be kept private and why it matters.
            </p>
            
            <div className="bg-teal-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Conversation Starters</h3>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-md border-l-4 border-teal-500">
                  <p className="font-medium mb-2">Question:</p>
                  <p>"What kind of information do you think is okay to share online, and what should be kept private?"</p>
                  <div className="mt-3 bg-gray-50 p-3 rounded">
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Discussion points:</span> Help your child understand that personal information like full name, address, phone number, school name, and passwords should be kept private. Photos that show where you live or go to school should also be private.
                    </p>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-md border-l-4 border-teal-500">
                  <p className="font-medium mb-2">Question:</p>
                  <p>"What would you do if a game or app asked for your home address or phone number?"</p>
                  <div className="mt-3 bg-gray-50 p-3 rounded">
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Discussion points:</span> Encourage your child to always ask a parent before entering any personal information online. Discuss why apps might ask for this information and when it might or might not be appropriate to share.
                    </p>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-md border-l-4 border-teal-500">
                  <p className="font-medium mb-2">Question:</p>
                  <p>"How can you tell if a website is safe to use?"</p>
                  <div className="mt-3 bg-gray-50 p-3 rounded">
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Discussion points:</span> Talk about looking for the lock icon in the address bar, checking that the URL starts with "https://", and being cautious of websites with lots of pop-ups or spelling errors.
                    </p>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-md border-l-4 border-teal-500">
                  <p className="font-medium mb-2">Question:</p>
                  <p>"What would you do if someone you don't know sends you a message online?"</p>
                  <div className="mt-3 bg-gray-50 p-3 rounded">
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Discussion points:</span> Discuss the importance of not responding to messages from strangers and telling a trusted adult about any uncomfortable online interactions.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-teal-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Activity Idea: Privacy Audit</h4>
                <p>
                  Together with your child, review the privacy settings on one of their favorite apps or games. 
                  Discuss what information the app collects and how to adjust settings to maximize privacy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Digital Citizenship Guide */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Digital Citizenship</h2>
          
          <div className="space-y-6">
            <p>
              Being a good digital citizen means using technology responsibly and treating others with respect online. 
              These conversation starters will help your child understand how to be a positive force in digital spaces.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Conversation Starters</h3>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-md border-l-4 border-blue-500">
                  <p className="font-medium mb-2">Question:</p>
                  <p>"How do you think people should treat each other online? Is it different from how we treat people in person?"</p>
                  <div className="mt-3 bg-gray-50 p-3 rounded">
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Discussion points:</span> Discuss how the same rules of kindness and respect apply both online and offline. Talk about how it can sometimes be easier to say unkind things online when you can't see the other person's reaction.
                    </p>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-md border-l-4 border-blue-500">
                  <p className="font-medium mb-2">Question:</p>
                  <p>"What would you do if you saw someone being mean to another person in a game or chat?"</p>
                  <div className="mt-3 bg-gray-50 p-3 rounded">
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Discussion points:</span> Talk about the importance of standing up for others and not participating in bullying behavior. Discuss options like reporting inappropriate behavior, supporting the person being targeted, or telling a trusted adult.
                    </p>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-md border-l-4 border-blue-500">
                  <p className="font-medium mb-2">Question:</p>
                  <p>"How do you think the things you post online now might affect you in the future?"</p>
                  <div className="mt-3 bg-gray-50 p-3 rounded">
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Discussion points:</span> Discuss the concept of a digital footprint and how information posted online can last for a long time. Talk about how future teachers, friends, or employers might see what they post.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-blue-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Activity Idea: Digital Footprint Review</h4>
                <p>
                  If your child has social media accounts, review them together and discuss what impression 
                  someone might get from viewing their profile. Talk about what makes a positive digital footprint.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cyberbullying Guide */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Cyberbullying Awareness</h2>
          
          <div className="space-y-6">
            <p>
              Cyberbullying can have serious emotional impacts. These conversation starters will help your child 
              recognize, prevent, and respond to cyberbullying situations.
            </p>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Conversation Starters</h3>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-md border-l-4 border-purple-500">
                  <p className="font-medium mb-2">Question:</p>
                  <p>"What do you think cyberbullying is? How is it different from bullying in person?"</p>
                  <div className="mt-3 bg-gray-50 p-3 rounded">
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Discussion points:</span> Define cyberbullying as using digital devices to repeatedly send, post, or share negative, harmful, or mean content about someone else. Discuss how cyberbullying can happen 24/7 and reach a wider audience than in-person bullying.
                    </p>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-md border-l-4 border-purple-500">
                  <p className="font-medium mb-2">Question:</p>
                  <p>"How would you feel if someone posted something mean about you online? What would you do?"</p>
                  <div className="mt-3 bg-gray-50 p-3 rounded">
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Discussion points:</span> Encourage empathy by discussing feelings. Talk about appropriate responses: not retaliating, saving evidence, blocking the person, and telling a trusted adult.
                    </p>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-md border-l-4 border-purple-500">
                  <p className="font-medium mb-2">Question:</p>
                  <p>"Why do you think some people might be mean to others online?"</p>
                  <div className="mt-3 bg-gray-50 p-3 rounded">
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Discussion points:</span> Discuss how people might say things online they wouldn't say in person, how anonymity can make people feel less accountable, and how some people might bully others because they themselves are having problems.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-purple-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Activity Idea: Support Plan</h4>
                <p>
                  Create a family plan for what to do if cyberbullying occurs. Include steps like saving evidence, 
                  reporting to the platform, telling trusted adults, and supporting each other emotionally.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Download Resources */}
        <div className="bg-gradient-to-r from-teal-500 to-green-500 rounded-xl p-8 text-white mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">Printable Resources</h2>
              <p className="text-lg opacity-90">
                Download our printable discussion guides and activity sheets to continue 
                these important conversations offline.
              </p>
            </div>
            <Button variant="game" size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
              Download PDF Guides
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button variant="outline" className="border-gray-300">
            <Link href="/parent-portal">← Back to Parent Portal</Link>
          </Button>
          <Button variant="cyber" className="bg-teal-600 hover:bg-teal-700">
            <Link href="/parent-portal/family-challenges">Family Challenges →</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
