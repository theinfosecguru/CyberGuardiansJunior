/**
 * Copyright (c) 2025 OryxForge Labs LLC
 * CyberGuardians Junior - Cybersecurity Educational App for Children
 * All rights reserved.
 */


/**
 * Copyright (c) 2025 OryxForge Labs LLC
 * CyberGuardians Junior - Cybersecurity Educational App for Children
 * All rights reserved.
 */

import React from 'react';
import { ModuleCard } from '@/components/learning/module-card';

export default function LearningModulesPage() {
  const modules = [
    {
      id: 'cyber-basics',
      title: 'Cyber Basics',
      description: 'Learn the fundamentals of cybersecurity and how to stay safe online.',
      level: 'Beginner',
      xpReward: 100,
      image: '/images/modules/cyber-basics.png',
      lessons: 5,
      estimatedTime: '2 hours'
    },
    {
      id: 'threat-landscape',
      title: 'Threat Landscape',
      description: 'Discover the different types of cyber threats and how to recognize them.',
      level: 'Intermediate',
      xpReward: 150,
      image: '/images/modules/threat-landscape.png',
      lessons: 4,
      estimatedTime: '1.5 hours'
    },
    {
      id: 'digital-footprint',
      title: 'Digital Footprint',
      description: 'Understand how your online activities create a digital footprint and how to manage it.',
      level: 'Intermediate',
      xpReward: 125,
      image: '/images/modules/digital-footprint.png',
      lessons: 3,
      estimatedTime: '1 hour'
    },
    {
      id: 'password-security',
      title: 'Password Security',
      description: 'Learn how to create and manage strong passwords to protect your accounts.',
      level: 'Beginner',
      xpReward: 100,
      image: '/images/modules/password-security.png',
      lessons: 3,
      estimatedTime: '45 minutes'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Learning Modules</h1>
      <p className="text-lg text-center mb-8">
        Explore our interactive learning modules to become a cybersecurity expert!
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module) => (
          <ModuleCard key={module.id} module={module} />
        ))}
      </div>
    </div>
  );
}
