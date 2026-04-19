import type { Status } from '../types'

interface Props { status: Status }

const STYLES: Record<Status, React.CSSProperties> = {
  idle: {
    borderColor: 'var(--color-border-tertiary)',
    color: 'var(--color-text-secondary)',
    background: 'var(--color-background-secondary)',
  },
  running: {
    borderColor: '#1D9E75',
    color: '#0F6E56',
    background: '#E1F5EE',
  },
  paused: {
    borderColor: '#BA7517',
    color: '#854F0B',
    background: '#FAEEDA',
  },
}

const LABELS: Record<Status, string> = {
  idle: 'Ready',
  running: 'Running',
  paused: 'Paused',
}

export function StatusBadge({ status }: Props) {
  return (
    <span style={{
      fontSize: 12,
      padding: '4px 12px',
      borderRadius: 'var(--border-radius-md)',
      border: '0.5px solid',
      transition: 'all 0.2s',
      ...STYLES[status],
    }}>
      {LABELS[status]}
    </span>
  )
}