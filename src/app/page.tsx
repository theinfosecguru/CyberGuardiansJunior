/**
 * Copyright (c) 2025 OryxForge Labs LLC
 * CyberGuardians Junior - Cybersecurity Educational App for Children
 * All rights reserved.
 */


import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-500 to-blue-600 py-20 px-4 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                CyberGuardians Junior
              </h1>
              <p className="text-xl md:text-2xl mb-6">Become a Cyber Hero!</p>
              <p className="text-lg mb-8">
                Join our exciting adventure to learn cybersecurity skills through
                fun games and activities. Protect the digital world and earn rewards!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="game" size="xl">
                  <Link href="/auth/register">Start Your Adventure</Link>
                </Button>
                <Button variant="outline" size="xl" className="bg-white/10 text-white border-white">
                  <Link href="/learning-modules">Explore Modules</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white/20 p-6 rounded-xl shadow-xl backdrop-blur-sm">
                {/* Placeholder for CyberBot mascot image */}
                <div className="bg-cyan-700 h-64 rounded-lg flex items-center justify-center">
                  <p className="text-2xl font-bold">CyberBot Mascot</p>
                </div>
                <div className="mt-4 p-4 bg-white/20 rounded-lg">
                  <p className="text-lg italic">
                    "Every click counts! Let's make the internet safer together!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-cyan-500 text-white rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Interactive Learning</h3>
              <p>
                Fun lessons on cyber basics, threats, defense mechanisms, and more!
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Rewards & Badges</h3>
              <p>
                Earn XP points, unlock cool badges, and customize your avatar!
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Cybersecurity Lab</h3>
              <p>
                Practice your skills in our sandbox with phishing simulations and password challenges!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Modules Preview */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Learning Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Module 1 */}
            <div className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-40 bg-cyan-100 flex items-center justify-center">
                <span className="text-4xl">🦠</span>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Cyber Basics</h3>
                <p className="text-gray-600 mb-4">
                  Learn about malware, passwords, and safe browsing.
                </p>
                <Button variant="cyber" size="sm">
                  <Link href="/learning-modules/cyber-basics">Start Learning</Link>
                </Button>
              </div>
            </div>

            {/* Module 2 */}
            <div className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-40 bg-red-100 flex items-center justify-center">
                <span className="text-4xl">🎣</span>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Threat Landscape</h3>
                <p className="text-gray-600 mb-4">
                  Discover phishing, ransomware, and social engineering.
                </p>
                <Button variant="cyber" size="sm">
                  <Link href="/learning-modules/threat-landscape">Start Learning</Link>
                </Button>
              </div>
            </div>

            {/* Module 3 */}
            <div className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-40 bg-blue-100 flex items-center justify-center">
                <span className="text-4xl">🛡️</span>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Defense Mechanisms</h3>
                <p className="text-gray-600 mb-4">
                  Learn about firewalls, encryption, and VPNs.
                </p>
                <Button variant="cyber" size="sm">
                  <Link href="/learning-modules/defense-mechanisms">Start Learning</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Portal Preview */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Parent & Educator Portal</h2>
              <p className="text-lg mb-6">
                Stay involved in your child's cybersecurity education journey.
                Track progress, access discussion guides, and participate in
                family security challenges.
              </p>
              <Button variant="outline" className="border-cyan-500 text-cyan-500 hover:bg-cyan-50">
                <Link href="/parent-portal">Learn More</Link>
              </Button>
            </div>
            <div className="md:w-1/2 bg-white p-6 rounded-xl shadow-md">
              <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                <p className="text-xl font-semibold text-gray-500">Parent Portal Preview</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Become a Cyber Hero?</h2>
          <p className="text-xl mb-8">
            Join CyberGuardians Junior today and start your exciting journey
            into the world of cybersecurity!
          </p>
          <Button variant="game" size="xl" className="bg-white text-purple-600 hover:bg-gray-100">
            <Link href="/auth/register">Get Started Now</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">CyberGuardians Junior</h3>
              <p>Making cybersecurity education fun and accessible for kids aged 8-14.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Features</h4>
              <ul className="space-y-2">
                <li><Link href="/learning-modules" className="hover:underline">Learning Modules</Link></li>
                <li><Link href="/cybersecurity-lab" className="hover:underline">Cybersecurity Lab</Link></li>
                <li><Link href="/real-world-scenarios" className="hover:underline">Real-World Scenarios</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/parent-portal" className="hover:underline">Parent Portal</Link></li>
                <li><Link href="/about" className="hover:underline">About Us</Link></li>
                <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:underline">Terms of Service</Link></li>
                <li><Link href="/coppa" className="hover:underline">COPPA Compliance</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} CyberGuardians Junior. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
