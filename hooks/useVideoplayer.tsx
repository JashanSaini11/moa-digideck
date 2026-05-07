'use client'

import { useEffect, useRef, useCallback } from 'react'

interface UseVideoPlayerOptions {
  isActive:    boolean   // is this slide currently visible?
  resetOnExit?: boolean  // restart from 0 when slide exits
}

/**
 * useVideoPlayer
 * – Plays video only when the slide is active (saves CPU on inactive slides)
 * – Pauses + optionally resets when slide exits
 * – Handles iOS autoplay restriction (must be muted + playsInline)
 * – Returns ref to attach to <video> element
 */
export function useVideoPlayer({
  isActive,
  resetOnExit = false,
}: UseVideoPlayerOptions) {
  const videoRef = useRef<HTMLVideoElement>(null)

  const play = useCallback(async () => {
    const v = videoRef.current
    if (!v) return
    v.muted = true              // required for autoplay policy
    v.playsInline = true        // required for iOS
    try {
      await v.play()
    } catch {
      // Autoplay blocked — silently ignore (video stays paused, poster shows)
    }
  }, [])

  const pause = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    v.pause()
    if (resetOnExit) v.currentTime = 0
  }, [resetOnExit])

  useEffect(() => {
    if (isActive) {
      play()
    } else {
      pause()
    }
  }, [isActive, play, pause])

  return videoRef
}