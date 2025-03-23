/**
 * Copyright (c) 2025 OryxForge Labs LLC
 * CyberGuardians Junior - Cybersecurity Educational App for Children
 * All rights reserved.
 */


import React from 'react';

interface TextToSpeechProps {
  text: string;
  autoPlay?: boolean;
  voice?: string;
  rate?: number;
  pitch?: number;
}

export default function TextToSpeech({ 
  text, 
  autoPlay = false,
  voice = 'default',
  rate = 1,
  pitch = 1
}: TextToSpeechProps) {
  // In a real implementation, this would use the Web Speech API
  // to provide text-to-speech functionality
  
  const speak = () => {
    // This would use the SpeechSynthesis interface in a real implementation
    console.log(`Speaking: ${text}`);
    
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      
      // Set voice if specified and available
      if (voice !== 'default') {
        const voices = window.speechSynthesis.getVoices();
        const selectedVoice = voices.find(v => v.name === voice);
        if (selectedVoice) {
          utterance.voice = selectedVoice;
        }
      }
      
      // Set rate and pitch
      utterance.rate = rate;
      utterance.pitch = pitch;
      
      // Speak the text
      window.speechSynthesis.speak(utterance);
    }
  };
  
  // If autoPlay is true, speak the text when the component mounts
  React.useEffect(() => {
    if (autoPlay) {
      speak();
    }
    
    // Clean up any ongoing speech when the component unmounts
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [text, autoPlay]);
  
  return (
    <button 
      onClick={speak}
      className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm hover:bg-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
      aria-label="Read text aloud"
    >
      <span className="mr-1">🔊</span> Read Aloud
    </button>
  );
}
