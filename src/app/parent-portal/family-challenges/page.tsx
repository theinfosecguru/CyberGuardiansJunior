/**
 * Copyright (c) 2025 OryxForge Labs LLC
 * CyberGuardians Junior - Cybersecurity Educational App for Children
 * All rights reserved.
 */


import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function FamilyChallengesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="bg-green-500 text-white rounded-xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="text-6xl mr-6 mb-4 md:mb-0">🔍</div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Family Security Challenges</h1>
              <p className="text-lg opacity-90">
                Work together with your child to improve your family's cybersecurity through fun, 
                collaborative challenges.
              </p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Learning Together</h2>
          <p className="text-lg mb-6">
            These family challenges are designed to help you and your child work together to improve 
            your home's digital security. Each challenge provides a hands-on opportunity to apply 
            cybersecurity concepts in real-world settings.
          </p>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Benefits of Family Challenges:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Reinforce cybersecurity concepts through practical application</li>
              <li>Create opportunities for meaningful conversations about online safety</li>
              <li>Empower children to take an active role in family security</li>
              <li>Make learning about cybersecurity a fun, shared experience</li>
              <li>Improve your family's actual digital security posture</li>
            </ul>
          </div>
        </div>

        {/* Home Wi-Fi Security Challenge */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <div className="flex items-center mb-6">
            <div className="bg-green-100 p-4 rounded-full mr-4">
              <span className="text-3xl">📶</span>
            </div>
            <h2 className="text-2xl font-bold">Home Wi-Fi Security Audit</h2>
          </div>
          
          <div className="space-y-6">
            <p>
              Your home Wi-Fi network is the gateway to all your connected devices. This challenge 
              helps you ensure it's properly secured against potential threats.
            </p>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Challenge Steps</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-3 mt-1">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Find your router's admin page</h4>
                    <p className="text-sm text-gray-600">
                      Together with your child, locate your Wi-Fi router and find its admin page by 
                      typing the router's IP address in a web browser (often 192.168.1.1 or 192.168.0.1).
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-3 mt-1">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Check your Wi-Fi password strength</h4>
                    <p className="text-sm text-gray-600">
                      Review your current Wi-Fi password. Is it strong enough? Use what your child has 
                      learned about password security to create a stronger one if needed.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-3 mt-1">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Update your router's firmware</h4>
                    <p className="text-sm text-gray-600">
                      Check if your router has any available firmware updates and apply them to 
                      ensure you have the latest security patches.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-3 mt-1">
                    <span className="text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Enable WPA3 encryption</h4>
                    <p className="text-sm text-gray-600">
                      Make sure your Wi-Fi network is using WPA3 encryption (or WPA2 if WPA3 isn't available). 
                      Avoid using the older, less secure WEP or WPA.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-3 mt-1">
                    <span className="text-sm font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Check connected devices</h4>
                    <p className="text-sm text-gray-600">
                      Review the list of devices connected to your network. Can you identify all of them? 
                      Remove any unknown or unauthorized devices.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-center">
                <Button variant="cyber" className="bg-green-600 hover:bg-green-700">
                  Start This Challenge
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Password Manager Challenge */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <div className="flex items-center mb-6">
            <div className="bg-blue-100 p-4 rounded-full mr-4">
              <span className="text-3xl">🔑</span>
            </div>
            <h2 className="text-2xl font-bold">Family Password Checkup</h2>
          </div>
          
          <div className="space-y-6">
            <p>
              Weak or reused passwords are one of the most common security vulnerabilities. This challenge 
              helps your family implement better password practices.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Challenge Steps</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-3 mt-1">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Make a list of important accounts</h4>
                    <p className="text-sm text-gray-600">
                      Together, make a list of your family's most important online accounts 
                      (email, banking, social media, school accounts, etc.).
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-3 mt-1">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Check for password reuse</h4>
                    <p className="text-sm text-gray-600">
                      Without sharing the actual passwords, discuss if any passwords are being 
                      reused across multiple accounts. Identify which accounts need unique passwords.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-3 mt-1">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Create stronger passwords</h4>
                    <p className="text-sm text-gray-600">
                      Use the techniques your child learned in the Password Dojo to create 
                      stronger passwords for important accounts.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-3 mt-1">
                    <span className="text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Enable two-factor authentication</h4>
                    <p className="text-sm text-gray-600">
                      For your most important accounts, enable two-factor authentication for an extra layer of security.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-3 mt-1">
                    <span className="text-sm font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Consider a password manager</h4>
                    <p className="text-sm text-gray-600">
                      Discuss the benefits of using a family password manager to securely store and generate strong passwords.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-center">
                <Button variant="cyber" className="bg-blue-600 hover:bg-blue-700">
                  Start This Challenge
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Device Security Challenge */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <div className="flex items-center mb-6">
            <div className="bg-purple-100 p-4 rounded-full mr-4">
              <span className="text-3xl">📱</span>
            </div>
            <h2 className="text-2xl font-bold">Device Security Checkup</h2>
          </div>
          
          <div className="space-y-6">
            <p>
              This challenge helps you secure all the devices in your home, from smartphones and tablets 
              to computers and smart home devices.
            </p>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Challenge Steps</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-3 mt-1">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Update all devices</h4>
                    <p className="text-sm text-gray-600">
                      Check for and install any available system updates, app updates, or security patches 
                      on all family devices.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-3 mt-1">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Review app permissions</h4>
                    <p className="text-sm text-gray-600">
                      Together, review the permissions granted to apps on your devices. Does that game 
                      really need access to your contacts or location?
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-3 mt-1">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Set up screen locks</h4>
                    <p className="text-sm text-gray-600">
                      Ensure all devices have appropriate screen locks (PIN, password, fingerprint, or face recognition).
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-3 mt-1">
                    <span className="text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Check privacy settings</h4>
                    <p className="text-sm text-gray-600">
                      Review and adjust privacy settings on devices and commonly used apps or services.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-3 mt-1">
                    <span className="text-sm font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Create a backup plan</h4>
                    <p className="text-sm text-gray-600">
                      Set up regular backups for important data on family devices to protect against 
                      ransomware or device loss.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-center">
                <Button variant="cyber" className="bg-purple-600 hover:bg-purple-700">
                  Start This Challenge
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Challenge Completion Certificate */}
        <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-xl p-8 text-white mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">Family Security Champion Certificate</h2>
              <p className="text-lg opacity-90">
                Complete all three family challenges to earn a special certificate and bonus XP 
                for your child's CyberGuardians account!
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
              <div className="text-4xl mb-2">🏆</div>
              <p className="font-bold">+100 XP Bonus</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button variant="outline" className="border-gray-300">
            <Link href="/parent-portal/discussion-guides">← Discussion Guides</Link>
          </Button>
          <Button variant="outline" className="border-teal-500 text-teal-500">
            <Link href="/parent-portal">Back to Parent Portal</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
