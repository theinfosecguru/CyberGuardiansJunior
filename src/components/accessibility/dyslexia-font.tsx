/**
 * Copyright (c) 2025 OryxForge Labs LLC
 * CyberGuardians Junior - Cybersecurity Educational App for Children
 * All rights reserved.
 */


import React from 'react';

interface DyslexiaFontProps {
  children: React.ReactNode;
  enabled: boolean;
}

export default function DyslexiaFont({ 
  children,
  enabled = false
}: DyslexiaFontProps) {
  // In a real implementation, this would apply a dyslexia-friendly font
  // such as OpenDyslexic, Lexie Readable, or Comic Sans MS
  
  if (!enabled) {
    return <>{children}</>;
  }
  
  return (
    <div className="dyslexia-font">
      <style jsx>{`
        .dyslexia-font {
          font-family: 'Comic Sans MS', 'Comic Sans', cursive;
          letter-spacing: 0.05em;
          word-spacing: 0.1em;
          line-height: 1.5;
        }
      `}</style>
      {children}
    </div>
  );
}
