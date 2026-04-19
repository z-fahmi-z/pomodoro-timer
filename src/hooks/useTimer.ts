import { useCallback, useEffect, useRef, useState } from 'react'
import type { Mode, Status, TimerState } from '../types'
import { MODES } from '../utils/constants'

function initialState(mode: Mode): TimerState {
  return {
    mode,
    status: 'idle',
    remaining: MODES[mode].secs,
    total: MODES[mode].secs,
    sessions: 0,
    totalMins: 0,
  }
}

export function useTimer() {
  const [state, setState] = useState<TimerState>(() => initialState('pomodoro'))
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const clearTimer = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  // Tick every second while running
  useEffect(() => {
    if (state.status !== 'running') return

    intervalRef.current = setInterval(() => {
      setState(prev => {
        if (prev.remaining <= 0) {
          clearTimer()
          const finished = prev.mode === 'pomodoro'
          return {
            ...prev,
            status: 'idle' as Status,
            remaining: MODES[prev.mode].secs,
            sessions:  finished ? prev.sessions + 1 : prev.sessions,
            totalMins: finished ? prev.totalMins + 25 : prev.totalMins,
          }
        }
        return { ...prev, remaining: prev.remaining - 1 }
      })
    }, 1000)

    return clearTimer
  }, [state.status])

  const play = useCallback(() => {
    setState(prev => {
      if (prev.status === 'running') return { ...prev, status: 'paused' }
      return { ...prev, status: 'running' }
    })
  }, [])

  const pause = useCallback(() => {
    setState(prev =>
      prev.status === 'running' ? { ...prev, status: 'paused' } : prev
    )
  }, [])

  const stop = useCallback(() => {
    clearTimer()
    setState(prev => ({
      ...prev,
      status: 'idle',
      remaining: MODES[prev.mode].secs,
    }))
  }, [])

  const reset = useCallback(() => {
    clearTimer()
    setState(prev => ({
      ...prev,
      status: 'idle',
      remaining: MODES[prev.mode].secs,
      total: MODES[prev.mode].secs,
    }))
  }, [])

  const setMode = useCallback((mode: Mode) => {
    clearTimer()
    setState(prev => ({
      ...prev,
      mode,
      status: 'idle',
      remaining: MODES[mode].secs,
      total: MODES[mode].secs,
    }))
  }, [])

  return { state, play, pause, stop, reset, setMode }
}