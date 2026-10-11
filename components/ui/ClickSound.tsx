'use client'

import { useEffect } from 'react'

export default function ClickSound() {
  useEffect(() => {
    let audioCtx: AudioContext | null = null

    const getAudioContext = () => {
      if (!audioCtx || audioCtx.state === 'closed') {
        const AudioContextClass =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
        if (AudioContextClass) {
          audioCtx = new AudioContextClass()
        }
      }
      if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume().catch(() => {})
      }
      return audioCtx
    }

    const playSound = () => {
      try {
        const ctx = getAudioContext()
        if (!ctx) return

        const now = ctx.currentTime

        // Oscillator 1: Crisp pleasant pop
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()

        osc.type = 'sine'
        // Pitch drop from 880Hz to 320Hz gives a clean, satisfying tactile pop
        osc.frequency.setValueAtTime(880, now)
        osc.frequency.exponentialRampToValueAtTime(320, now + 0.045)

        // Envelope: Instant attack with quick exponential fade
        gain.gain.setValueAtTime(0.15, now)
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.045)

        osc.connect(gain)
        gain.connect(ctx.destination)

        osc.start(now)
        osc.stop(now + 0.048)

        // Oscillator 2: Subtle warm harmonic undertone
        const subOsc = ctx.createOscillator()
        const subGain = ctx.createGain()

        subOsc.type = 'triangle'
        subOsc.frequency.setValueAtTime(440, now)
        subOsc.frequency.exponentialRampToValueAtTime(180, now + 0.035)

        subGain.gain.setValueAtTime(0.08, now)
        subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.035)

        subOsc.connect(subGain)
        subGain.connect(ctx.destination)

        subOsc.start(now)
        subOsc.stop(now + 0.038)
      } catch {
        // AudioContext may be restricted by browser policy until interaction
      }
    }

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      // Check if target or any parent is interactive (button, link, input, card, etc.)
      const target = e.target as HTMLElement | null
      if (!target) return

      const isInteractive = Boolean(
        target.closest('button') ||
        target.closest('a') ||
        target.closest('[role="button"]') ||
        target.closest('[role="tab"]') ||
        target.closest('input') ||
        target.closest('select') ||
        target.closest('.cursor-pointer') ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'A'
      )

      // Always play on interactive elements or any direct click
      if (isInteractive || e.type === 'mousedown') {
        playSound()
      }
    }

    window.addEventListener('mousedown', handlePointerDown, { passive: true })

    return () => {
      window.removeEventListener('mousedown', handlePointerDown)
      if (audioCtx && audioCtx.state !== 'closed') {
        audioCtx.close().catch(() => {})
      }
    }
  }, [])

  return null
}
