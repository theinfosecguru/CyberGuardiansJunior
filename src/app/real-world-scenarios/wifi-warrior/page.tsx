/**
 * Copyright (c) 2025 OryxForge Labs LLC
 * CyberGuardians Junior - Cybersecurity Educational App for Children
 * All rights reserved.
 */


import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function WifiWarriorPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Story Header */}
        <div className="bg-green-500 text-white rounded-xl p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="text-6xl mr-6 mb-4 md:mb-0">📶</div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Wi-Fi Warrior</h1>
              <p className="text-lg opacity-90">
                An interactive story about staying safe on public Wi-Fi networks.
              </p>
            </div>
          </div>
        </div>

        {/* Story Introduction */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">The Library Wi-Fi Challenge</h2>
          
          <div className="prose max-w-none">
            <p className="text-lg">
              You're at the public library working on an important school project that's due tomorrow. 
              Your home internet is down, so you need to use the library's Wi-Fi to finish your research 
              and submit your assignment online.
            </p>
            
            <p>
              As you open your laptop, you see several Wi-Fi networks available:
            </p>
            
            <ul className="space-y-2">
              <li><strong>Library_Public</strong> - No password required</li>
              <li><strong>Library_Secure</strong> - Password required</li>
              <li><strong>FREE_LIBRARY_WIFI</strong> - No password required</li>
              <li><strong>Library_Guest</strong> - Password: "library123"</li>
            </ul>
            
            <div className="bg-green-50 p-4 rounded-lg my-6">
              <h3 className="font-bold mb-2">Which Wi-Fi network would you connect to?</h3>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg border border-green-200 hover:bg-green-50 cursor-pointer">
                  <p><strong>Library_Public</strong> - It's convenient with no password needed.</p>
                </div>
                
                <div className="bg-white p-3 rounded-lg border border-green-200 hover:bg-green-50 cursor-pointer">
                  <p><strong>Library_Secure</strong> - I'll ask the librarian for the password.</p>
                </div>
                
                <div className="bg-white p-3 rounded-lg border border-green-200 hover:bg-green-50 cursor-pointer">
                  <p><strong>FREE_LIBRARY_WIFI</strong> - It says "free" so it must be for visitors.</p>
                </div>
                
                <div className="bg-white p-3 rounded-lg border border-green-200 hover:bg-green-50 cursor-pointer">
                  <p><strong>Library_Guest</strong> - I can see the password is "library123".</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Story Continuation - Secure Choice */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Making the Secure Choice</h2>
          
          <div className="prose max-w-none">
            <p>
              You decide to ask the librarian about the secure Wi-Fi option. Smart move!
            </p>
            
            <p>
              The librarian explains that <strong>Library_Secure</strong> is the official network for library users. 
              She gives you the password and explains that this network is encrypted, which helps protect your information.
            </p>
            
            <p>
              She also warns you that <strong>FREE_LIBRARY_WIFI</strong> isn't actually run by the library - it might be 
              a "rogue network" set up by someone trying to steal information from people who connect to it.
            </p>
            
            <p>
              Now that you're connected to the secure network, you need to log in to your school account to submit your project. 
              You notice that the website address starts with "http://" instead of "https://".
            </p>
            
            <div className="bg-green-50 p-4 rounded-lg my-6">
              <h3 className="font-bold mb-2">What would you do?</h3>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg border border-green-200 hover:bg-green-50 cursor-pointer">
                  <p>Go ahead and log in - I'm on the secure library network so it's fine.</p>
                </div>
                
                <div className="bg-white p-3 rounded-lg border border-green-200 hover:bg-green-50 cursor-pointer">
                  <p>Try typing "https://" at the beginning of the web address instead.</p>
                </div>
                
                <div className="bg-white p-3 rounded-lg border border-green-200 hover:bg-green-50 cursor-pointer">
                  <p>Check with the librarian if this is the correct website.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Story Continuation - HTTPS */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">The HTTPS Difference</h2>
          
          <div className="prose max-w-none">
            <p>
              You try typing "https://" at the beginning of the web address. The page reloads and you 
              notice a small padlock icon appears in the address bar. Good thinking!
            </p>
            
            <p>
              Even on a secure Wi-Fi network, using websites with HTTPS adds an extra layer of protection. 
              HTTPS encrypts the data sent between your computer and the website, making it much harder for 
              anyone to intercept your username, password, or other private information.
            </p>
            
            <p>
              You safely log in to your school account and upload your project. While you're at the library, 
              you also want to check your email and maybe do some online shopping with your birthday gift card.
            </p>
            
            <div className="bg-green-50 p-4 rounded-lg my-6">
              <h3 className="font-bold mb-2">What else should you be careful about when using public Wi-Fi?</h3>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg border border-green-200 hover:bg-green-50 cursor-pointer">
                  <p>Avoid accessing sensitive accounts like banking or shopping sites.</p>
                </div>
                
                <div className="bg-white p-3 rounded-lg border border-green-200 hover:bg-green-50 cursor-pointer">
                  <p>Make sure to log out of all accounts when finished.</p>
                </div>
                
                <div className="bg-white p-3 rounded-lg border border-green-200 hover:bg-green-50 cursor-pointer">
                  <p>Both of the above are important precautions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Story Resolution */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Wi-Fi Warrior Success</h2>
          
          <div className="prose max-w-none">
            <p>
              You decide that both precautions are important. Even though you're on a secure network with HTTPS, 
              you choose to wait until you're home to do any online shopping or banking. You also make sure to 
              completely log out of your school account when you're done.
            </p>
            
            <p>
              As you're packing up to leave, another student sits down next to you and connects to the 
              <strong> FREE_LIBRARY_WIFI</strong> network. You remember what the librarian told you and decide to help.
            </p>
            
            <p>
              "Hey, just so you know, that's not the library's official Wi-Fi network," you explain. "It might be 
              set up by someone trying to see what websites people visit or steal passwords. The librarian can give 
              you the password for the secure network."
            </p>
            
            <p>
              The student thanks you and switches to the secure network. You've not only protected yourself but 
              helped someone else stay safe too!
            </p>
            
            <div className="bg-green-50 p-4 rounded-lg my-6">
              <h3 className="font-bold mb-2">What You Learned:</h3>
              <ul className="space-y-2">
                <li>Be cautious about which Wi-Fi networks you connect to - official, password-protected networks are usually safer.</li>
                <li>Watch out for "rogue" networks with similar names to legitimate networks.</li>
                <li>Always use HTTPS websites (with the padlock icon) when entering any personal information.</li>
                <li>Avoid accessing sensitive accounts (banking, shopping) on public Wi-Fi when possible.</li>
                <li>Always log out of accounts when using public computers or networks.</li>
                <li>Help others learn about Wi-Fi safety too!</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg my-6">
              <h3 className="font-bold mb-2">Advanced Protection Tip:</h3>
              <p>
                For even better protection on public Wi-Fi, some people use a VPN (Virtual Private Network). 
                A VPN creates a secure "tunnel" for all your internet traffic, adding an extra layer of encryption. 
                Ask a parent or guardian about setting up a VPN for when you need to use public Wi-Fi networks.
              </p>
            </div>
          </div>
        </div>

        {/* XP Reward */}
        <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-xl p-6 text-white mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold mb-1">Story Complete!</h2>
              <p>You've learned how to stay safe on public Wi-Fi networks.</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
              <div className="text-2xl font-bold">+25 XP</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button variant="outline" className="border-gray-300">
            <Link href="/real-world-scenarios">← Back to Scenarios</Link>
          </Button>
          <Button variant="cyber">
            <Link href="/real-world-scenarios/password-panic">Next: Cyber Tales Podcast →</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
