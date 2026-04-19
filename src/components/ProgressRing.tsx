import { CIRCUMFERENCE } from '../utils/constants'

interface Props {
  remaining: number
  total: number
  color: string
  idle: boolean
}

export function ProgressRing({ remaining, total, color, idle }: Props) {
  const progress = remaining / total
  const offset = CIRCUMFERENCE * (1 - progress)

  return (
    <svg
      width="180"
      height="180"
      viewBox="0 0 180 180"
      style={{ transform: 'rotate(-90deg)' }}
    >
      <circle
        cx="90" cy="90" r="80"
        fill="none"
        stroke="var(--color-border-tertiary)"
        strokeWidth={8}
      />
      <circle
        cx="90" cy="90" r="80"
        fill="none"
        stroke={idle ? 'var(--color-border-tertiary)' : color}
        strokeWidth={8}
        strokeLinecap="round"
        strokeDasharray={CIRCUMFERENCE}
        strokeDashoffset={offset}
        style={{ transition: 'stroke-dashoffset 0.5s linear, stroke 0.4s' }}
      />
    </svg>
  )
}