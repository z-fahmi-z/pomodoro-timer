import { useTimer } from './hooks/useTimer'
import { MODES } from './utils/constants'
import { formatTime } from './utils/formatTime'
import { ModeTabs }    from './components/ModeTabs'
import { ProgressRing } from './components/ProgressRing'
import { Controls }    from './components/Controls'
import { SessionDots } from './components/SessionDots'
import { StatusBadge } from './components/StatusBadge'

export default function App() {
  const { state, play, stop, reset, setMode } = useTimer()
  const mode = MODES[state.mode]

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2rem 1rem',
      gap: '1.5rem',
      fontFamily: 'var(--font-sans)',
    }}>
      <ModeTabs current={state.mode} onChange={setMode} />

      <div style={{
        background: 'var(--color-background-primary)',
        border: '0.5px solid var(--color-border-tertiary)',
        borderRadius: 'var(--border-radius-lg)',
        padding: '2rem 3rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem',
        minWidth: 280,
      }}>
        <StatusBadge status={state.status} />

        <div style={{ position: 'relative', width: 180, height: 180 }}>
          <ProgressRing
            remaining={state.remaining}
            total={state.total}
            color={mode.color}
            idle={state.status === 'idle'}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
          }}>
            <span style={{
              fontSize: 36,
              fontWeight: 500,
              color: 'var(--color-text-primary)',
              letterSpacing: 2,
              fontVariantNumeric: 'tabular-nums',
            }}>
              {formatTime(state.remaining)}
            </span>
            <span style={{
              fontSize: 12,
              color: 'var(--color-text-secondary)',
              textTransform: 'uppercase',
              letterSpacing: 1,
            }}>
              {mode.label}
            </span>
          </div>
        </div>

        <Controls
          status={state.status}
          onPlay={play}
          onStop={stop}
          onReset={reset}
        />

        <SessionDots sessions={state.sessions} />
      </div>

      <div style={{ display: 'flex', gap: 24 }}>
        {[
          { label: 'Sessions', value: state.sessions },
          { label: 'Minutes',  value: state.totalMins },
        ].map(({ label, value }) => (
          <div key={label} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
          }}>
            <span style={{ fontSize: 20, fontWeight: 500,
              color: 'var(--color-text-primary)' }}>{value}</span>
            <span style={{ fontSize: 11, color: 'var(--color-text-secondary)',
              textTransform: 'uppercase', letterSpacing: 0.5 }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}