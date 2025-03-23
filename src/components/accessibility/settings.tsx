/**
 * Copyright (c) 2025 OryxForge Labs LLC
 * CyberGuardians Junior - Cybersecurity Educational App for Children
 * All rights reserved.
 */


import React from 'react';

interface AccessibilitySettingsProps {
  onSettingsChange: (settings: {
    textToSpeech: boolean;
    highContrast: boolean;
    dyslexicFont: boolean;
    largeText: boolean;
    reducedMotion: boolean;
  }) => void;
  currentSettings: {
    textToSpeech: boolean;
    highContrast: boolean;
    dyslexicFont: boolean;
    largeText: boolean;
    reducedMotion: boolean;
  };
}

export default function AccessibilitySettings({ 
  onSettingsChange,
  currentSettings
}: AccessibilitySettingsProps) {
  // In a real implementation, this would use state management
  // to handle user preferences and store them in localStorage
  
  const toggleSetting = (setting: keyof typeof currentSettings) => {
    const newSettings = {
      ...currentSettings,
      [setting]: !currentSettings[setting]
    };
    onSettingsChange(newSettings);
  };
  
  return (
    <div className="bg-white rounded-xl shadow-md p-8">
      <h2 className="text-2xl font-bold mb-6">Accessibility Settings</h2>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium">Text-to-Speech</h3>
            <p className="text-sm text-gray-500">Enable read-aloud functionality for content</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              className="sr-only peer"
              checked={currentSettings.textToSpeech}
              onChange={() => toggleSetting('textToSpeech')}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium">High Contrast Mode</h3>
            <p className="text-sm text-gray-500">Increase color contrast for better visibility</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              className="sr-only peer"
              checked={currentSettings.highContrast}
              onChange={() => toggleSetting('highContrast')}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium">Dyslexia-Friendly Font</h3>
            <p className="text-sm text-gray-500">Use a font designed for readers with dyslexia</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              className="sr-only peer"
              checked={currentSettings.dyslexicFont}
              onChange={() => toggleSetting('dyslexicFont')}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium">Large Text</h3>
            <p className="text-sm text-gray-500">Increase text size throughout the application</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              className="sr-only peer"
              checked={currentSettings.largeText}
              onChange={() => toggleSetting('largeText')}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium">Reduced Motion</h3>
            <p className="text-sm text-gray-500">Minimize animations and motion effects</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              className="sr-only peer"
              checked={currentSettings.reducedMotion}
              onChange={() => toggleSetting('reducedMotion')}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
    </div>
  );
}
