/**
 * Copyright (c) 2025 OryxForge Labs LLC
 * CyberGuardians Junior - Cybersecurity Educational App for Children
 * All rights reserved.
 */


import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CyberTalesPodcastPage() {
  const podcasts = [
    {
      title: 'Password Panic',
      description: 'A fun story about the importance of strong passwords.',
      audioUrl: '/audio/password-panic.mp3',
      duration: '5:12',
      transcript: `
        [Narrator] Welcome to Cyber Tales! Today's story is called "Password Panic."

        [Sound effect: Computer startup]

        [Narrator] Max was excited to play his favorite online game, Fortress Defenders. He had been saving up his in-game coins to buy a special limited edition shield.

        [Max] "Finally! After three weeks of missions, I have enough coins for the Ultra Rare Diamond Shield!"

        [Narrator] But when Max tried to log in...

        [Sound effect: Error beep]

        [Computer Voice] "Incorrect password. Please try again."

        [Max] "What? That's weird. Let me try again."

        [Sound effect: Error beep]

        [Computer Voice] "Incorrect password. Please try again."

        [Max] "Oh no! I can't get into my account!"

        [Narrator] Max ran to find his older sister, Zoe, who knew a lot about computers.

        [Max] "Zoe! Help! I can't log into my Fortress Defenders account! Someone might be stealing my special shield right now!"

        [Zoe] "Calm down, Max. Let's figure this out. What password did you use?"

        [Max] "It's easy to remember - just 'password123'."

        [Sound effect: Record scratch]

        [Zoe] "Oh Max! That's one of the easiest passwords to guess! You might have been hacked."

        [Narrator] Zoe explained that using simple passwords like "password123" or "12345" is like leaving your front door wide open. Hackers can easily guess these common passwords.

        [Zoe] "Let's contact the game support team to recover your account. And then we need to create a strong password."

        [Narrator] After talking to customer support, Max got his account back. Luckily, his shield was still there! Now it was time to create a better password.

        [Zoe] "A strong password should be long, with uppercase and lowercase letters, numbers, and symbols. But it should also be something you can remember."

        [Max] "That sounds hard to remember!"

        [Zoe] "Not if you use a passphrase! Think of a sentence that means something to you, then use the first letters and add some numbers and symbols."

        [Max] "Hmm... How about 'I love playing Fortress Defenders with my best friend Sam on Saturdays!'"

        [Zoe] "Perfect! So your password could be 'IlpFDwmbfSoS!2'."

        [Narrator] Max created his new strong password and wrote it down in a secret place only he knew about.

        [Max] "My account feels so much safer now!"

        [Narrator] A few weeks later, Max heard that many players with simple passwords had their accounts hacked. But thanks to his new strong password, Max's account stayed safe.

        [Zoe] "Remember, Max, a good password is your first line of defense in the cyber world!"

        [Max] "I'll never use 'password123' again!"

        [Narrator] The end! Remember, Cyber Heroes: create strong passwords and never share them with anyone except your parents or guardians!
      `,
      lessons: [
        'Simple passwords like "password123" are easy for hackers to guess',
        'Strong passwords include uppercase and lowercase letters, numbers, and symbols',
        'Passphrases can help you create and remember strong passwords',
        'Never share your passwords with friends'
      ]
    },
    {
      title: 'Phishing Adventure',
      description: 'A fun audio story about recognizing phishing attempts.',
      audioUrl: '/audio/phishing-adventure.mp3',
      duration: '5:45',
      transcript: `
        [Narrator] Welcome to Cyber Tales! Today's story is called "Phishing Adventure."

        [Sound effect: Email notification]

        [Narrator] Lily was doing homework on her tablet when she got an email. The subject line read: "URGENT: Your Game Account Will Be Deleted!"

        [Lily] "Oh no! Not my Pixel Pets account! I've spent months collecting all those rare pets!"

        [Narrator] Lily opened the email and read:

        [Email Voice] "Dear Valued Customer, Your Pixel Pets account will be deleted in 24 hours unless you verify your information. Click here to save your account!"

        [Narrator] Lily's finger hovered over the link. She was about to tap it when she remembered something her dad taught her about "phishing."

        [Lily] "Wait a minute. Dad said phishing is when someone tries to trick you into giving away personal information. I should check if this email is really from Pixel Pets."

        [Narrator] Lily looked more closely at the email. The sender's address was "pixelpets-secure@mail-verify.net" - not the official Pixel Pets domain. The email didn't use her username, just "Valued Customer." And there were a few spelling mistakes.

        [Lily] "This looks suspicious. I better show Dad."

        [Narrator] Lily found her dad in the kitchen.

        [Lily] "Dad, I got this email about my Pixel Pets account being deleted. But I think it might be phishing."

        [Dad] "Let me see... Good catch, Lily! This is definitely a phishing attempt. See how they're trying to scare you into clicking quickly without thinking? That's a big red flag."

        [Lily] "What would happen if I clicked the link?"

        [Dad] "It might take you to a fake website that looks like Pixel Pets. If you entered your username and password there, the scammers would steal your account. Or it could download malware onto your tablet."

        [Narrator] Lily's dad showed her how to report the phishing email and delete it safely.

        [Dad] "If you're ever worried about one of your accounts, don't click links in emails. Instead, open your web browser and go directly to the official website."

        [Narrator] The next day at school, Lily discovered that her friend Jake had received the same email and had clicked the link.

        [Jake] "They got my username and password, and now I can't log in to my account! All my rare pets are gone!"

        [Lily] "I'm sorry that happened, Jake. Maybe I can help you report it to Pixel Pets."

        [Narrator] Lily told Jake what she had learned about phishing. Together, they contacted Pixel Pets' real customer support and explained what happened.

        [Narrator] A week later, Jake got his account back, though some of his rarest pets were gone forever.

        [Jake] "Thanks for helping me, Lily. I'll be more careful about suspicious emails from now on."

        [Lily] "Remember: Think before you click!"

        [Narrator] The end! Remember, Cyber Heroes: Be suspicious of urgent emails asking for your information or telling you to click links. When in doubt, talk to a trusted adult!
      `,
      lessons: [
        'Phishing emails often create a false sense of urgency',
        'Check the sender's email address for suspicious domains',
        'Look for generic greetings like "Valued Customer" instead of your name',
        'Spelling and grammar mistakes are common in phishing emails',
        'Never click suspicious links - go directly to the official website instead'
      ]
    }
  ];

  // For a real implementation, we would use state to track the currently selected podcast
  const selectedPodcast = podcasts[0];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Header */}
        <div className="bg-purple-600 text-white rounded-xl p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="text-6xl mr-6 mb-4 md:mb-0">🎧</div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Cyber Tales Podcasts</h1>
              <p className="text-lg opacity-90">
                Short, engaging audio stories about cybersecurity concepts.
                Perfect for learning on the go!
              </p>
            </div>
          </div>
        </div>

        {/* Podcast Selection */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Choose a Podcast</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {podcasts.map((podcast, index) => (
              <div 
                key={index} 
                className={`p-4 rounded-lg cursor-pointer ${
                  podcast.title === selectedPodcast.title 
                    ? 'bg-purple-100 border-2 border-purple-500' 
                    : 'bg-gray-100 hover:bg-purple-50'
                }`}
              >
                <div className="flex items-center">
                  <div className="text-3xl mr-3">🎧</div>
                  <div>
                    <h3 className="font-bold">{podcast.title}</h3>
                    <p className="text-sm text-gray-600">{podcast.duration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Audio Player */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">{selectedPodcast.title}</h2>
            <span className="text-sm bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
              {selectedPodcast.duration}
            </span>
          </div>
          
          <p className="text-gray-600 mb-6">
            {selectedPodcast.description}
          </p>
          
          {/* Audio Player UI */}
          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <button className="bg-gray-200 p-2 rounded-full">
                <span className="text-xl">⏮️</span>
              </button>
              <button className="bg-purple-600 text-white p-4 rounded-full">
                <span className="text-2xl">▶️</span>
              </button>
              <button className="bg-gray-200 p-2 rounded-full">
                <span className="text-xl">⏭️</span>
              </button>
            </div>
            
            <div className="space-y-2">
              <div className="w-full bg-gray-300 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '30%' }}></div>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>1:34</span>
                <span>{selectedPodcast.duration}</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <Button variant="outline" className="border-purple-500 text-purple-500">
              Download Audio
            </Button>
          </div>
        </div>

        {/* Transcript */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Transcript</h2>
          
          <div className="bg-gray-50 p-6 rounded-lg whitespace-pre-line">
            {selectedPodcast.transcript}
          </div>
        </div>

        {/* Key Lessons */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Key Lessons</h2>
          
          <ul className="space-y-2">
            {selectedPodcast.lessons.map((lesson, index) => (
              <li key={index} className="flex items-start">
                <div className="bg-purple-100 p-1 rounded-full mr-3 mt-1">
                  <span className="text-sm">✓</span>
                </div>
                <p>{lesson}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Discussion Questions */}
        <div className="bg-purple-50 rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Discussion Questions</h2>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg">
              <p className="font-medium">What would you do if you received a suspicious email like Lily did?</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg">
              <p className="font-medium">Why is it dangerous to use simple passwords like "password123"?</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg">
              <p className="font-medium">Can you think of a strong passphrase you could use for an important account?</p>
            </div>
          </div>
          
          <div className="mt-6 text-sm text-purple-700">
            <p>Discuss these questions with a parent, teacher, or guardian!</p>
          </div>
        </div>

        {/* XP Reward */}
        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl p-6 text-white mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold mb-1">Podcast Complete!</h2>
              <p>You've learned valuable cybersecurity lessons through storytelling.</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
              <div className="text-2xl font-bold">+15 XP</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button variant="outline" className="border-gray-300">
            <Link href="/real-world-scenarios">← Back to Scenarios</Link>
          </Button>
          <Button variant="cyber">
            <Link href="/dashboard">Continue Learning</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
