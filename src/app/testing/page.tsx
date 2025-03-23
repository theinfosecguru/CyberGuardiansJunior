/**
 * Copyright (c) 2025 OryxForge Labs LLC
 * CyberGuardians Junior - Cybersecurity Educational App for Children
 * All rights reserved.
 */


import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function TestPlanPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="text-6xl mr-6 mb-4 md:mb-0">🧪</div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">CyberGuardians Junior Test Plan</h1>
              <p className="text-lg opacity-90">
                Comprehensive testing strategy to ensure functionality, usability, and responsiveness
                across all features of the application.
              </p>
            </div>
          </div>
        </div>

        {/* Test Plan Overview */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Test Plan Overview</h2>
          <p className="text-lg mb-6">
            This test plan outlines the approach for testing the CyberGuardians Junior cybersecurity 
            educational app. The testing will focus on three key areas: functionality, usability, 
            and responsive design.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-3xl mb-3">⚙️</div>
              <h3 className="text-lg font-bold mb-2">Functionality Testing</h3>
              <p>
                Verifying that all features work correctly according to specifications, 
                including learning modules, gamification, lab simulations, and parent portal.
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="text-3xl mb-3">👤</div>
              <h3 className="text-lg font-bold mb-2">Usability Testing</h3>
              <p>
                Ensuring the application is intuitive, engaging, and accessible for the 
                target audience of children aged 8-14 years.
              </p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="text-lg font-bold mb-2">Responsive Design Testing</h3>
              <p>
                Confirming the application works well across different devices and screen sizes, 
                from desktop computers to tablets and smartphones.
              </p>
            </div>
          </div>
        </div>

        {/* Functionality Testing */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Functionality Testing</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-3">Learning Modules</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <span className="text-sm">✓</span>
                    </div>
                    <p>Verify all learning module content loads correctly</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <span className="text-sm">✓</span>
                    </div>
                    <p>Test navigation between modules and lessons</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <span className="text-sm">✓</span>
                    </div>
                    <p>Confirm interactive elements respond correctly to user input</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <span className="text-sm">✓</span>
                    </div>
                    <p>Validate quiz functionality and scoring</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <span className="text-sm">✓</span>
                    </div>
                    <p>Check progress tracking and completion status</p>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">Gamification System</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <span className="text-sm">✓</span>
                    </div>
                    <p>Test XP point accumulation for completed activities</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <span className="text-sm">✓</span>
                    </div>
                    <p>Verify badge awarding system</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <span className="text-sm">✓</span>
                    </div>
                    <p>Confirm leaderboard functionality and updates</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <span className="text-sm">✓</span>
                    </div>
                    <p>Test avatar customization and selection</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <span className="text-sm">✓</span>
                    </div>
                    <p>Validate level progression system</p>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">Lab Simulations</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <span className="text-sm">✓</span>
                    </div>
                    <p>Test Phishing Email Lab interactive elements</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <span className="text-sm">✓</span>
                    </div>
                    <p>Verify Password Dojo functionality</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <span className="text-sm">✓</span>
                    </div>
                    <p>Confirm feedback mechanisms for correct/incorrect answers</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <span className="text-sm">✓</span>
                    </div>
                    <p>Test progress tracking within lab simulations</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <span className="text-sm">✓</span>
                    </div>
                    <p>Validate XP rewards for completing lab activities</p>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">Parent and Educator Portal</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <span className="text-sm">✓</span>
                    </div>
                    <p>Test parent login functionality</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <span className="text-sm">✓</span>
                    </div>
                    <p>Verify child progress tracking displays</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <span className="text-sm">✓</span>
                    </div>
                    <p>Confirm discussion guides content and accessibility</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <span className="text-sm">✓</span>
                    </div>
                    <p>Test family challenge functionality</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <span className="text-sm">✓</span>
                    </div>
                    <p>Validate educator resources section</p>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">Real-World Scenarios</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <span className="text-sm">✓</span>
                    </div>
                    <p>Test interactive stories navigation and decision points</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <span className="text-sm">✓</span>
                    </div>
                    <p>Verify podcast player functionality</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <span className="text-sm">✓</span>
                    </div>
                    <p>Confirm transcript display for podcasts</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <span className="text-sm">✓</span>
                    </div>
                    <p>Test XP rewards for completing scenarios</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <span className="text-sm">✓</span>
                    </div>
                    <p>Validate discussion questions functionality</p>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">Accessibility and Security</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <span className="text-sm">✓</span>
                    </div>
                    <p>Test text-to-speech functionality</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <span className="text-sm">✓</span>
                    </div>
                    <p>Verify colorblind mode display</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <span className="text-sm">✓</span>
                    </div>
                    <p>Confirm dyslexia-friendly font rendering</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <span className="text-sm">✓</span>
                    </div>
                    <p>Test parental consent gate functionality</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <span className="text-sm">✓</span>
                    </div>
                    <p>Validate security headers and CSP implementation</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Usability Testing */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Usability Testing</h2>
          
          <div className="space-y-6">
            <p>
              Usability testing will focus on ensuring the application is intuitive, engaging, and 
              appropriate for children aged 8-14 years. This will include:
            </p>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">User Interface Evaluation</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                    <span className="text-sm">✓</span>
                  </div>
                  <p>Assess navigation intuitiveness for the target age group</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                    <span className="text-sm">✓</span>
                  </div>
                  <p>Evaluate visual design appeal and age-appropriateness</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                    <span className="text-sm">✓</span>
                  </div>
                  <p>Test readability of text content for different age levels</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                    <span className="text-sm">✓</span>
                  </div>
                  <p>Verify button sizes and interactive elements are appropriate for children</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Content Comprehension</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                    <span className="text-sm">✓</span>
                  </div>
                  <p>Evaluate clarity of instructions and educational content</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                    <span className="text-sm">✓</span>
                  </div>
                  <p>Test comprehension of cybersecurity concepts for the target age group</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                    <span className="text-sm">✓</span>
                  </div>
                  <p>Assess effectiveness of interactive elements in reinforcing learning</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                    <span className="text-sm">✓</span>
                  </div>
                  <p>Verify feedback mechanisms help children understand concepts</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Engagement and Motivation</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                    <span className="text-sm">✓</span>
                  </div>
                  <p>Evaluate effectiveness of gamification elements in maintaining interest</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                    <span className="text-sm">✓</span>
                  </div>
                  <p>Test progression pacing and reward frequency</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                    <span className="text-sm">✓</span>
                  </div>
                  <p>Assess variety and interest level of activities</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                    <span className="text-sm">✓</span>
                  </div>
                  <p>Verify children want to continue using the application</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Responsive Design Testing */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Responsive Design Testing</h2>
          
          <div className="space-y-6">
            <p>
              Responsive design testing will ensure the application works well across different devices 
              and screen sizes. This will include:
            </p>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Device Testing</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2">Desktop Computers</h4>
                  <ul className="space-y-1 text-sm">
                    <li>Large screens (1920x1080+)</li>
                    <li>Standard screens (1366x768)</li>
                    <li>Different aspect ratios</li>
                    <li>Mouse and keyboard navigation</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2">Tablets</h4>
                  <ul className="space-y-1 text-sm">
                    <li>iPad (various sizes)</li>
                    <li>Android tablets</li>
                    <li>Portrait and landscape orientation</li>
                    <li>Touch interaction</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2">Smartphones</h4>
                  <ul className="space-y-1 text-sm">
                    <li>iPhone (various sizes)</li>
                    <li>Android phones</li>
                    <li>Small screens (320px width)</li>
                    <li>Touch and gesture navigation</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Responsive Elements to Test</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-purple-100 p-1 rounded-full mr-3 mt-1">
                    <span className="text-sm">✓</span>
                  </div>
                  <p>Navigation menu adaptation across screen sizes</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-100 p-1 rounded-full mr-3 mt-1">
                    <span className="text-sm">✓</span>
                  </div>
                  <p>Content layout and readability on different devices</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-100 p-1 rounded-full mr-3 mt-1">
                    <span className="text-sm">✓</span>
                  </div>
                  <p>Interactive elements sizing and touch targets</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-100 p-1 rounded-full mr-3 mt-1">
                    <span className="text-sm">✓</span>
                  </div>
                  <p>Image and media scaling</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-100 p-1 rounded-full mr-3 mt-1">
                    <span className="text-sm">✓</span>
                  </div>
                  <p>Form elements and input fields</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-100 p-1 rounded-full mr-3 mt-1">
                    <span className="text-sm">✓</span>
                  </div>
                  <p>Game and interactive simulation adaptability</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Browser Compatibility</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-purple-100 p-1 rounded-full mr-3 mt-1">
                    <span className="text-sm">✓</span>
                  </div>
                  <p>Chrome (desktop and mobile)</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-100 p-1 rounded-full mr-3 mt-1">
                    <span className="text-sm">✓</span>
                  </div>
                  <p>Safari (desktop and mobile)</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-100 p-1 rounded-full mr-3 mt-1">
                    <span className="text-sm">✓</span>
                  </div>
                  <p>Firefox (desktop)</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-100 p-1 rounded-full mr-3 mt-1">
                    <span className="text-sm">✓</span>
                  </div>
                  <p>Edge (desktop)</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Test Execution Plan */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Test Execution Plan</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Testing Approach</h3>
              <ol className="space-y-3 list-decimal pl-5">
                <li>
                  <p className="font-medium">Automated Testing</p>
                  <p className="text-gray-600">Implement unit tests for core components and functionality</p>
                </li>
                <li>
                  <p className="font-medium">Manual Testing</p>
                  <p className="text-gray-600">Conduct comprehensive manual testing of all features and user flows</p>
                </li>
                <li>
                  <p className="font-medium">User Testing</p>
                  <p className="text-gray-600">Gather feedback from a small group of target users (children and parents)</p>
                </li>
                <li>
                  <p className="font-medium">Accessibility Audit</p>
                  <p className="text-gray-600">Verify compliance with accessibility standards using automated tools and manual checks</p>
                </li>
                <li>
                  <p className="font-medium">Security Testing</p>
                  <p className="text-gray-600">Conduct security assessment to ensure compliance with best practices</p>
                </li>
              </ol>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Test Documentation</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <span className="text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-medium">Test Cases</p>
                    <p className="text-sm text-gray-600">Detailed test cases for each feature and component</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <span className="text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-medium">Test Results</p>
                    <p className="text-sm text-gray-600">Documentation of test execution results and findings</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <span className="text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-medium">Bug Reports</p>
                    <p className="text-sm text-gray-600">Detailed reports of any issues found during testing</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <span className="text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-medium">Test Summary</p>
                    <p className="text-sm text-gray-600">Overall summary of test results and recommendations</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">Ready for Testing</h2>
              <p className="text-lg opacity-90">
                The test plan is complete and ready for execution. Once testing is complete,
                we'll move forward with deployment of the CyberGuardians Junior application.
              </p>
            </div>
            <Button variant="game" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Begin Testing
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
