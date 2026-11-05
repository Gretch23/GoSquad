import { useState } from 'react'

const EMOTION_OPTIONS = [
  { value: 'joy', emoji: '😊', label: 'Joy', positive: true },
  { value: 'interest', emoji: '🧐', label: 'Interest', positive: true },
  { value: 'belonging', emoji: '🤝', label: 'Belonging', positive: true },
  { value: 'anger', emoji: '😠', label: 'Anger', positive: false },
  { value: 'fear', emoji: '😨', label: 'Fear', positive: false },
  { value: 'sadness', emoji: '😢', label: 'Sadness', positive: false },
]

const DIFFERENTIAL_SCALES = [
  { id: 'connection', left: 'Disconnected', right: 'Connected' },
  { id: 'support', left: 'Lonely', right: 'Supported' },
  { id: 'mattering', left: 'No one noticed me', right: 'I mattered' },
  { id: 'visibility', left: 'Invisible', right: 'Seen' },
]

// Simulated weekly data for now - will come from Supabase later
const SIMULATED_WEEK = [
  { day: 'Mon', checkedIn: true, connected: true, goalProgress: true },
  { day: 'Tue', checkedIn: true, connected: false, goalProgress: true },
  { day: 'Wed', checkedIn: false, connected: false, goalProgress: false },
  { day: 'Thu', checkedIn: true, connected: true, goalProgress: false },
  { day: 'Fri', checkedIn: true, connected: true, goalProgress: true },
  { day: 'Sat', checkedIn: false, connected: false, goalProgress: false },
  { day: 'Sun', checkedIn: true, connected: false, goalProgress: true },
]

function DotScale({ scaleId, left, right, value, onChange }) {
  const dots = [1, 2, 3, 4, 5, 6]

  const getDotColor = (dot) => {
    if (value === null) return '#e0dbd3'
    if (dot <= value) {
      // Color gradient from muted left to sage green right
      const progress = dot / 6
      if (progress <= 0.33) return '#c5b9b0'
      if (progress <= 0.5) return '#b8c4b8'
      if (progress <= 0.67) return '#9ab89a'
      return '#7a9e87'
    }
    return '#e0dbd3'
  }

  return (
    <div style={{ marginBottom: '24px' }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', marginBottom: '10px'
      }}>
        <span style={{ fontSize: '0.8rem', color: '#6b6b6b', fontWeight: '600', maxWidth: '35%' }}>
          {left}
        </span>
        <span style={{ fontSize: '0.8rem', color: '#7a9e87', fontWeight: '600', maxWidth: '35%', textAlign: 'right' }}>
          {right}
        </span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '6px' }}>
        {dots.map(dot => (
          <button
            key={dot}
            onClick={() => onChange(scaleId, dot)}
            style={{
              flex: 1,
              height: '36px',
              borderRadius: '8px',
              border: value === dot ? '2px solid #7a9e87' : '2px solid transparent',
              background: getDotColor(dot),
              cursor: 'pointer',
              transition: 'all 0.15s ease',
              transform: value === dot ? 'scale(1.1)' : 'scale(1)',
            }}
          />
        ))}
      </div>
    </div>
  )
}

function WeeklySnapshot({ onComplete, onCancel, weeklyData = SIMULATED_WEEK }) {
  const [step, setStep] = useState(1)
  const [selectedEmotions, setSelectedEmotions] = useState([])
  const [scaleValues, setScaleValues] = useState({
    connection: null,
    support: null,
    mattering: null,
    visibility: null,
  })
  const [reflection, setReflection] = useState('')

  const toggleEmotion = (value) => {
    if (selectedEmotions.includes(value)) {
      setSelectedEmotions(selectedEmotions.filter(e => e !== value))
    } else if (selectedEmotions.length < 2) {
      setSelectedEmotions([...selectedEmotions, value])
    }
  }

  const updateScale = (scaleId, value) => {
    setScaleValues(prev => ({ ...prev, [scaleId]: value }))
  }

  const allScalesFilled = Object.values(scaleValues).every(v => v !== null)

  const canProceed = () => {
    switch (step) {
      case 1: return selectedEmotions.length === 2
      case 2: return allScalesFilled
      case 3: return true
      default: return false
    }
  }

  // Summary stats
  const daysCheckedIn = weeklyData.filter(d => d.checkedIn).length
  const daysConnected = weeklyData.filter(d => d.connected).length
  const daysGoalProgress = weeklyData.filter(d => d.goalProgress).length

  const getWeekMessage = () => {
    if (daysConnected >= 4) return "You connected with people most days this week — that's huge. 💛"
    if (daysConnected >= 2) return "You made some real connections this week. Keep building on that. 🌱"
    return "Connection was harder to find this week. Your squad is there when you're ready. 💛"
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f9f6f1',
      maxWidth: '430px',
      margin: '0 auto',
      padding: '24px 20px 40px',
    }}>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px' }}>
        <button
          onClick={onCancel}
          style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem', color: '#6b6b6b' }}
        >
          ←
        </button>
        <span style={{ fontWeight: '700', color: '#7a9e87', fontSize: '1rem' }}>
          Weekly Snapshot
        </span>
        <span style={{ fontSize: '0.85rem', color: '#6b6b6b' }}>
          {step} of 4
        </span>
      </div>

      {/* Progress bar */}
      <div style={{ height: '6px', background: '#e0dbd3', borderRadius: '3px', marginBottom: '32px' }}>
        <div style={{
          height: '100%',
          background: '#d4913a',
          borderRadius: '3px',
          width: `${(step / 4) * 100}%`,
          transition: 'width 0.3s ease'
        }} />
      </div>

      {/* Step 1 — Emotions */}
      {step === 1 && (
        <div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#2d2d2d', marginBottom: '8px' }}>
            How was your week, really? 🌤️
          </h2>
          <p style={{ fontSize: '0.9rem', color: '#6b6b6b', marginBottom: '8px', lineHeight: '1.5' }}>
            Think about your mood over the past week. Select the <strong>two</strong> that stand out most.
          </p>
          <p style={{ fontSize: '0.85rem', color: '#7a9e87', fontWeight: '500', marginBottom: '24px' }}>
            {selectedEmotions.length}/2 selected
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
            {EMOTION_OPTIONS.map(option => {
              const isSelected = selectedEmotions.includes(option.value)
              const isDisabled = selectedEmotions.length >= 2 && !isSelected
              return (
                <button
                  key={option.value}
                  onClick={() => toggleEmotion(option.value)}
                  style={{
                    padding: '16px 8px',
                    background: isSelected
                      ? option.positive ? '#e8f0ea' : '#fff0f0'
                      : '#ffffff',
                    border: isSelected
                      ? `2px solid ${option.positive ? '#7a9e87' : '#c0392b'}`
                      : '2px solid #e0dbd3',
                    borderRadius: '12px',
                    cursor: isDisabled ? 'not-allowed' : 'pointer',
                    opacity: isDisabled ? 0.4 : 1,
                    textAlign: 'center',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <div style={{ fontSize: '1.8rem', marginBottom: '6px' }}>{option.emoji}</div>
                  <div style={{
                    fontSize: '0.8rem', fontWeight: '600',
                    color: isSelected
                      ? option.positive ? '#7a9e87' : '#c0392b'
                      : '#2d2d2d'
                  }}>
                    {option.label}
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* Step 2 — Semantic differential scales */}
      {step === 2 && (
        <div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#2d2d2d', marginBottom: '8px' }}>
            Where did you land this week? 🧭
          </h2>
          <p style={{ fontSize: '0.9rem', color: '#6b6b6b', marginBottom: '28px', lineHeight: '1.5' }}>
            Tap where you feel you are between each pair.
          </p>

          {DIFFERENTIAL_SCALES.map(scale => (
            <DotScale
              key={scale.id}
              scaleId={scale.id}
              left={scale.left}
              right={scale.right}
              value={scaleValues[scale.id]}
              onChange={updateScale}
            />
          ))}
        </div>
      )}

      {/* Step 3 — Your week at a glance */}
      {step === 3 && (
        <div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#2d2d2d', marginBottom: '8px' }}>
            Your week at a glance 📊
          </h2>
          <p style={{ fontSize: '0.9rem', color: '#6b6b6b', marginBottom: '24px', lineHeight: '1.5' }}>
            Here's what your daily check-ins showed this week.
          </p>

          {/* Day grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '6px', marginBottom: '20px' }}>
            {weeklyData.map((day, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '0.7rem', color: '#6b6b6b', fontWeight: '600', marginBottom: '6px' }}>
                  {day.day}
                </div>
                <div style={{
                  width: '100%', paddingBottom: '100%', position: 'relative',
                  borderRadius: '8px',
                  background: day.checkedIn ? '#e8f0ea' : '#f0ede9',
                  border: `2px solid ${day.checkedIn ? '#7a9e87' : '#e0dbd3'}`,
                }}>
                  <span style={{
                    position: 'absolute', top: '50%', left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: '0.9rem'
                  }}>
                    {day.checkedIn ? '✓' : ''}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
            {[
              { label: 'Check-ins', value: daysCheckedIn, emoji: '✅', color: '#7a9e87' },
              { label: 'Connected', value: daysConnected, emoji: '👥', color: '#d4913a' },
              { label: 'Goal days', value: daysGoalProgress, emoji: '🎯', color: '#7a9e87' },
            ].map((stat, i) => (
              <div key={i} style={{
                flex: 1, background: '#ffffff',
                borderRadius: '12px', padding: '14px',
                border: '1px solid #e0dbd3', textAlign: 'center'
              }}>
                <div style={{ fontSize: '1.4rem', marginBottom: '4px' }}>{stat.emoji}</div>
                <div style={{ fontSize: '1.4rem', fontWeight: '800', color: stat.color }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.7rem', color: '#6b6b6b', fontWeight: '600' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Week message */}
          <div style={{
            background: '#e8f0ea', borderRadius: '12px',
            padding: '16px', marginBottom: '24px'
          }}>
            <p style={{ fontSize: '0.9rem', color: '#7a9e87', fontWeight: '500', lineHeight: '1.5' }}>
              {getWeekMessage()}
            </p>
          </div>

          {/* Reflection */}
          <p style={{ fontSize: '0.95rem', fontWeight: '700', color: '#2d2d2d', marginBottom: '8px' }}>
            💭 What do you notice about your week? <span style={{ fontWeight: '400', color: '#6b6b6b' }}>(optional)</span>
          </p>
          <textarea
            placeholder="e.g. I connected more when I had a plan ahead of time..."
            value={reflection}
            onChange={e => setReflection(e.target.value)}
            style={{
              width: '100%', minHeight: '90px', padding: '14px',
              borderRadius: '10px', border: '2px solid #e0dbd3',
              fontSize: '0.9rem', fontFamily: 'inherit',
              resize: 'none', outline: 'none',
              background: '#ffffff', color: '#2d2d2d',
              lineHeight: '1.5'
            }}
          />
        </div>
      )}

      {/* Step 4 — Closing */}
      {step === 4 && (
        <div style={{ textAlign: 'center', paddingTop: '20px' }}>
          <div style={{ fontSize: '3.5rem', marginBottom: '20px' }}>💛</div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#2d2d2d', marginBottom: '12px' }}>
            Thanks for checking in with yourself.
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#6b6b6b', lineHeight: '1.6', marginBottom: '8px' }}>
            That takes courage.
          </p>
          <p style={{ fontSize: '0.95rem', color: '#6b6b6b', lineHeight: '1.6', marginBottom: '32px' }}>
            Your snapshot is saved. Come back next week to see how things shift.
          </p>

          {/* Selected emotions summary */}
          <div style={{
            background: '#ffffff', borderRadius: '12px',
            padding: '16px', marginBottom: '16px',
            border: '1px solid #e0dbd3', textAlign: 'left'
          }}>
            <p style={{ fontSize: '0.8rem', fontWeight: '600', color: '#6b6b6b', marginBottom: '10px' }}>
              This week you felt:
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              {selectedEmotions.map(e => {
                const option = EMOTION_OPTIONS.find(o => o.value === e)
                return (
                  <div key={e} style={{
                    background: option.positive ? '#e8f0ea' : '#fff0f0',
                    borderRadius: '10px', padding: '10px 16px',
                    textAlign: 'center', flex: 1
                  }}>
                    <div style={{ fontSize: '1.4rem' }}>{option.emoji}</div>
                    <div style={{ fontSize: '0.8rem', fontWeight: '600', color: '#2d2d2d', marginTop: '4px' }}>
                      {option.label}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <button
            onClick={() => onComplete({ selectedEmotions, scaleValues, reflection })}
            className="btn-primary"
          >
            Back to my dashboard
          </button>
        </div>
      )}

      {/* Next button */}
      {step < 4 && (
        <button
          onClick={() => setStep(step + 1)}
          disabled={!canProceed()}
          style={{
            width: '100%', marginTop: '32px',
            background: canProceed() ? '#7a9e87' : '#e0dbd3',
            color: canProceed() ? 'white' : '#6b6b6b',
            border: 'none', borderRadius: '10px',
            padding: '14px', fontSize: '1rem',
            fontWeight: '700', cursor: canProceed() ? 'pointer' : 'default',
            transition: 'all 0.15s ease'
          }}
        >
          Next →
        </button>
      )}
    </div>
  )
}

export default WeeklySnapshot