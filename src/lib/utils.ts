/**
 * Copyright (c) 2025 OryxForge Labs LLC
 * CyberGuardians Junior - Cybersecurity Educational App for Children
 * All rights reserved.
 */


import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(input: string | number | Date): string {
  const date = new Date(input)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export function calculateXpForLevel(level: number): number {
  // Base XP required for level 1
  const baseXp = 100
  // XP growth factor per level
  const growthFactor = 1.5
  
  return Math.floor(baseXp * Math.pow(growthFactor, level - 1))
}

export function getLevelFromXp(xp: number): number {
  // Base XP required for level 1
  const baseXp = 100
  // XP growth factor per level
  const growthFactor = 1.5
  
  // Calculate level based on XP
  return Math.floor(Math.log(xp / baseXp) / Math.log(growthFactor)) + 1
}

export function getProgressToNextLevel(xp: number): number {
  const currentLevel = getLevelFromXp(xp)
  const currentLevelXp = calculateXpForLevel(currentLevel)
  const nextLevelXp = calculateXpForLevel(currentLevel + 1)
  
  return ((xp - currentLevelXp) / (nextLevelXp - currentLevelXp)) * 100
}

export function generateAvatarUrl(avatarPath: string): string {
  // Handle both relative and absolute paths
  if (avatarPath.startsWith('http')) {
    return avatarPath
  }
  
  // For local paths, ensure they start with /
  return avatarPath.startsWith('/') ? avatarPath : `/${avatarPath}`
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}
