/**
 * Copyright (c) 2025 OryxForge Labs LLC
 * CyberGuardians Junior - Cybersecurity Educational App for Children
 * All rights reserved.
 */


import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-cyan-600">CyberGuardians</span>
              <span className="ml-1 text-sm bg-purple-600 text-white px-2 py-0.5 rounded-md">Junior</span>
            </Link>
          </div>

          {/* Main Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/learning-modules" className="text-gray-700 hover:text-cyan-600 font-medium">
              Learning Modules
            </Link>
            <Link href="/cybersecurity-lab" className="text-gray-700 hover:text-cyan-600 font-medium">
              Cyber Lab
            </Link>
            <Link href="/real-world-scenarios" className="text-gray-700 hover:text-cyan-600 font-medium">
              Scenarios
            </Link>
            <Link href="/parent-portal" className="text-gray-700 hover:text-cyan-600 font-medium">
              Parent Portal
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" className="hidden md:inline-flex">
              <Link href="/auth/login">Log In</Link>
            </Button>
            <Button variant="cyber" size="sm">
              <Link href="/auth/register">Sign Up</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
