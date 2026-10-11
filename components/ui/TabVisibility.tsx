'use client'

import { useEffect } from 'react'

const AWAY_TITLE = "Don't Miss Your Study Opportunity! | Sage Roots"
const DEFAULT_TITLE = 'Sage Roots International | Global Education Consultancy'

export default function TabVisibility() {
  useEffect(() => {
    if (typeof document === 'undefined') return
    if (!('visibilityState' in document)) return

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        document.title = AWAY_TITLE
      } else {
        document.title = DEFAULT_TITLE
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  return null
}
