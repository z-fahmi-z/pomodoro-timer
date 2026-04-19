import type { Status } from '../types'

interface Props {
  status: Status
  onPlay:  () => void
  onStop:  () => void
  onReset: () => void
}

const btnBase: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  border: '0.5px solid var(--color-border-secondary)',
  background: 'var(--color-background-primary)',
  cursor: 'pointer',
}

export function Controls({ status, onPlay, onStop, onReset }: Props) {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>

      {/* Reset */}
      <button onClick={onReset} title="Reset"
        style={{ ...btnBase, width: 40, height: 40 }}>
        <svg width="16" height="16" viewBox="0 0 24 24"
          fill="var(--color-text-secondary)">
          <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6s-2.69
            6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58
            8-8-3.58-8-8-8z"/>
        </svg>
      </button>

      {/* Play / Pause */}
      <button onClick={onPlay} title={status === 'running' ? 'Pause' : 'Play'}
        style={{ ...btnBase, width: 56, height: 56 }}>
        {status === 'running' ? (
          <svg width="20" height="20" viewBox="0 0 24 24"
            fill="var(--color-text-primary)">
            <rect x="6"  y="5" width="4" height="14" rx="1"/>
            <rect x="14" y="5" width="4" height="14" rx="1"/>
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24"
            fill="var(--color-text-primary)">
            <path d="M8 5v14l11-7z"/>
          </svg>
        )}
      </button>

      {/* Stop */}
      <button onClick={onStop} title="Stop"
        style={{ ...btnBase, width: 40, height: 40 }}>
        <svg width="16" height="16" viewBox="0 0 24 24"
          fill="var(--color-text-secondary)">
          <rect x="6" y="6" width="12" height="12" rx="1"/>
        </svg>
      </button>
    </div>
  )
}