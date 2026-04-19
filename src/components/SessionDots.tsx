interface Props {
  sessions: number
  cycleSize?: number
}

export function SessionDots({ sessions, cycleSize = 4 }: Props) {
  const filled = sessions % cycleSize

  return (
    <div style={{ display: 'flex', gap: 6 }}>
      {Array.from({ length: cycleSize }).map((_, i) => (
        <div
          key={i}
          style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            border: '0.5px solid var(--color-border-secondary)',
            background: i < filled
              ? 'var(--color-text-secondary)'
              : 'transparent',
            transition: 'background 0.2s',
          }}
        />
      ))}
    </div>
  )
}