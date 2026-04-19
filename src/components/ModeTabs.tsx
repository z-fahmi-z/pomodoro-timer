import type { Mode } from '../types'
import { MODES } from '../utils/constants'

interface Props {
  current: Mode
  onChange: (mode: Mode) => void
}

const KEYS = Object.keys(MODES) as Mode[]

export function ModeTabs({ current, onChange }: Props) {
  return (
    <div style={{
      display: 'flex',
      gap: 8,
      background: 'var(--color-background-secondary)',
      borderRadius: 'var(--border-radius-lg)',
      padding: 4,
    }}>
      {KEYS.map(mode => (
        <button
          key={mode}
          onClick={() => onChange(mode)}
          style={{
            border: current === mode
              ? '0.5px solid var(--color-border-tertiary)'
              : 'none',
            background: current === mode
              ? 'var(--color-background-primary)'
              : 'transparent',
            padding: '6px 16px',
            borderRadius: 'var(--border-radius-md)',
            fontSize: 13,
            fontWeight: 500,
            color: current === mode
              ? 'var(--color-text-primary)'
              : 'var(--color-text-secondary)',
            cursor: 'pointer',
          }}
        >
          {MODES[mode].label}
        </button>
      ))}
    </div>
  )
}