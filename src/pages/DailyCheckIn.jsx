import { useState } from 'react'

function DailyCheckIn({ onComplete, onCancel }) {
  const [step, setStep] = useState(1)
  const [responses, setResponses] = useState({
    mood: '',
    goal: '',
    connection: ''
  })

  const updateResponse = (field, value) => {
    setResponses(prev => ({ ...prev, [field]: value }))
  }

  const canProceed = () => {
    switch (step) {
      case 1: return responses.mood !== ''
      case 2: return responses.goal !== ''
      case 3: return responses.connection !== ''
      default: return false
    }
  }

  const moodOptions = [
    { value: 'really_good', emoji: '😊', label: 'Really good' },
    { value: 'pretty_good', emoji: '🙂', label: 'Pretty good' },
    { value: 'okay', emoji: '😐', label: 'Okay' },
    { value: 'not_great', emoji: '😔', label: 'Not great' },
    { value: 'struggling', emoji: '😞', label: 'Struggling' },
  ]

  const goalOptions = [
    { value: 'yes', emoji: '✅', label: 'Yes!' },
    { value: 'kind_of', emoji: '🔄', label: 'Kind of' },
    { value: 'not_today', emoji: '❌', label: 'Not today' },
  ]

  const connectionOptions = [
    { value: 'yes', emoji: '👥', label: 'Yes' },
    { value: 'just_online', emoji: '💬', label: 'Just online' },
    { value: 'not_today', emoji: '🙅', label: 'Not today' },
  ]

  const getMoodMessage = () => {
    switch (responses.mood) {
      case 'really_good': return "That's wonderful — hold onto that! 💛"
      case 'pretty_good': return "Good to hear. Keep going! 🌱"
      case 'okay': return "Okay days are valid days. You showed up. 💛"
      case 'not_great': return "Thanks for checking in even on a hard day. That matters. 💛"
      case 'struggling': return "Thank you for being honest. You're not alone in this. 💛"
      default: return ''
    }
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
          Daily Check-in
        </span>
        <span style={{ fontSize: '0.85rem', color: '#6b6b6b' }}>
          {step} of 3
        </span>
      </div>

      {/* Progress bar */}
      <div style={{ height: '6px', background: '#e0dbd3', borderRadius: '3px', marginBottom: '32px' }}>
        <div style={{
          height: '100%',
          background: '#7a9e87',
          borderRadius: '3px',
          width: `${(step / 3) * 100}%`,
          transition: 'width 0.3s ease'
        }} />
      </div>

      {/* Step 1 — Mood */}
      {step === 1 && (
        <div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#2d2d2d', marginBottom: '8px' }}>
            How are you feeling today? 🌤️
          </h2>
          <p style={{ fontSize: '0.9rem', color: '#6b6b6b', marginBottom: '28px', lineHeight: '1.5' }}>
            No wrong answers — just check in with yourself.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {moodOptions.map(option => (
              <button
                key={option.value}
                onClick={() => updateResponse('mood', option.value)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '16px',
                  padding: '16px 20px', textAlign: 'left',
                  background: responses.mood === option.value ? '#e8f0ea' : '#ffffff',
                  border: responses.mood === option.value ? '2px solid #7a9e87' : '2px solid #e0dbd3',
                  borderRadius: '12px', cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                <span style={{ fontSize: '1.6rem' }}>{option.emoji}</span>
                <span style={{
                  fontSize: '1rem', fontWeight: '600',
                  color: responses.mood === option.value ? '#7a9e87' : '#2d2d2d'
                }}>
                  {option.label}
                </span>
              </button>
            ))}
          </div>

          {/* Mood message */}
          {responses.mood && (
            <div style={{
              background: '#fdf3e7', borderRadius: '10px',
              padding: '14px', marginTop: '20px',
              border: '1px solid #d4913a'
            }}>
              <p style={{ fontSize: '0.9rem', color: '#d4913a', fontWeight: '500' }}>
                {getMoodMessage()}
              </p>
            </div>
          )}

          {/* Struggling support nudge */}
          {responses.mood === 'struggling' && (
            <div style={{
              background: '#fff5f5', borderRadius: '10px',
              padding: '14px', marginTop: '10px',
              border: '1px solid #c0392b'
            }}>
              <p style={{ fontSize: '0.85rem', color: '#c0392b', fontWeight: '500', lineHeight: '1.5' }}>
                If you need support right now, the <strong>Need Help?</strong> button at the top of the app is always there. 💛
              </p>
            </div>
          )}
        </div>
      )}

      {/* Step 2 — Goal */}
      {step === 2 && (
        <div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#2d2d2d', marginBottom: '8px' }}>
            Did you work toward your goal today? 🎯
          </h2>
          <p style={{ fontSize: '0.9rem', color: '#6b6b6b', marginBottom: '28px', lineHeight: '1.5' }}>
            Even a small step counts.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {goalOptions.map(option => (
              <button
                key={option.value}
                onClick={() => updateResponse('goal', option.value)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '16px',
                  padding: '16px 20px', textAlign: 'left',
                  background: responses.goal === option.value ? '#e8f0ea' : '#ffffff',
                  border: responses.goal === option.value ? '2px solid #7a9e87' : '2px solid #e0dbd3',
                  borderRadius: '12px', cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                <span style={{ fontSize: '1.6rem' }}>{option.emoji}</span>
                <span style={{
                  fontSize: '1rem', fontWeight: '600',
                  color: responses.goal === option.value ? '#7a9e87' : '#2d2d2d'
                }}>
                  {option.label}
                </span>
              </button>
            ))}
          </div>

          {responses.goal === 'not_today' && (
            <div style={{
              background: '#fdf3e7', borderRadius: '10px',
              padding: '14px', marginTop: '20px',
              border: '1px solid #d4913a'
            }}>
              <p style={{ fontSize: '0.85rem', color: '#d4913a', fontWeight: '500', lineHeight: '1.5' }}>
                That's okay — tomorrow is another chance. Your goal is still there when you're ready. 💛
              </p>
            </div>
          )}

          {responses.goal === 'yes' && (
            <div style={{
              background: '#e8f0ea', borderRadius: '10px',
              padding: '14px', marginTop: '20px',
            }}>
              <p style={{ fontSize: '0.85rem', color: '#7a9e87', fontWeight: '500' }}>
                That's worth celebrating! 🌟
              </p>
            </div>
          )}
        </div>
      )}

      {/* Step 3 — Connection */}
      {step === 3 && (
        <div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#2d2d2d', marginBottom: '8px' }}>
            Did you connect with someone today? 👥
          </h2>
          <p style={{ fontSize: '0.9rem', color: '#6b6b6b', marginBottom: '28px', lineHeight: '1.5' }}>
            Any kind of real connection counts.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {connectionOptions.map(option => (
              <button
                key={option.value}
                onClick={() => updateResponse('connection', option.value)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '16px',
                  padding: '16px 20px', textAlign: 'left',
                  background: responses.connection === option.value ? '#e8f0ea' : '#ffffff',
                  border: responses.connection === option.value ? '2px solid #7a9e87' : '2px solid #e0dbd3',
                  borderRadius: '12px', cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                <span style={{ fontSize: '1.6rem' }}>{option.emoji}</span>
                <span style={{
                  fontSize: '1rem', fontWeight: '600',
                  color: responses.connection === option.value ? '#7a9e87' : '#2d2d2d'
                }}>
                  {option.label}
                </span>
              </button>
            ))}
          </div>

          {responses.connection === 'not_today' && (
            <div style={{
              background: '#fdf3e7', borderRadius: '10px',
              padding: '14px', marginTop: '20px',
              border: '1px solid #d4913a'
            }}>
              <p style={{ fontSize: '0.85rem', color: '#d4913a', fontWeight: '500', lineHeight: '1.5' }}>
              "Your squad is there. Reaching out to one person — even just to say hey — counts. 💛"              </p>
            </div>
          )}

          {responses.connection === 'just_online' && (
            <div style={{
              background: '#fdf3e7', borderRadius: '10px',
              padding: '14px', marginTop: '20px',
              border: '1px solid #d4913a'
            }}>
              <p style={{ fontSize: '0.85rem', color: '#d4913a', fontWeight: '500', lineHeight: '1.5' }}>
                Online connection is a start! When you're ready, your squad is there for in-person too. 💛
              </p>
            </div>
          )}

          {/* Complete button on last step */}
          {responses.connection && (
            <button
              onClick={() => onComplete(responses)}
              style={{
                width: '100%', marginTop: '28px',
                background: '#7a9e87', color: 'white',
                border: 'none', borderRadius: '10px',
                padding: '14px', fontSize: '1rem',
                fontWeight: '700', cursor: 'pointer',
              }}
            >
              Done! 💛
            </button>
          )}
        </div>
      )}

      {/* Next button */}
      {step < 3 && (
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

export default DailyCheckIn