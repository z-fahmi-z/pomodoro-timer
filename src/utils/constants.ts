import type { Mode, ModeConfig } from '../types'

export const CIRCUMFERENCE = 2 * Math.PI * 80

export const MODES: Record<Mode, ModeConfig> = {
  pomodoro: { label: 'Focus',       secs: 25 * 60, color: '#1D9E75' },
  short:    { label: 'Short break', secs:  5 * 60, color: '#378ADD' },
  long:     { label: 'Long break',  secs: 15 * 60, color: '#7F77DD' },
}