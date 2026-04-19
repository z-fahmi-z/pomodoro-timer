export type Mode = 'pomodoro' | 'short' | 'long'
export type Status = 'idle' | 'running' | 'paused'

export interface ModeConfig {
  label: string
  secs: number
  color: string
}

export interface TimerState {
  mode: Mode
  status: Status
  remaining: number
  total: number
  sessions: number
  totalMins: number
}