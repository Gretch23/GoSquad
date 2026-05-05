import { useState } from 'react'

const INTEREST_LABELS = {
  arts: '🎨 Arts & Making',
  music: '🎵 Music',
  nature: '🌿 Nature & Outdoors',
  gardening: '🌱 Gardening',
  exploring: '🗺️ Exploring',
  games: '🎮 Games',
  teamsports: '🏀 Team Sports',
  movement: '🚴 Individual Movement',
  reading: '📚 Reading & Learning',
  food: '🍽️ Food & Hangouts',
  culture: '🌍 Community & Culture',
  spirituality: '🧘 Spirituality & Reflection',
}

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

function GoalSetting({ userInterests, onGoalSet, onCancel }) {
  const [step, setStep] = useState(1)
  const [goal, setGoal] = useState({
    interestArea: '',
    activity: '',
    frequency: '',
    doable: '',
    whyMatters: '',
    days: [],
    withWho: '',
    shared: false,
  })

  const updateGoal = (field, value) => {
    setGoal(prev => ({ ...prev, [field]: value }))
  }

  const toggleDay = (day) => {
    if (goal.days.includes(day)) {
      updateGoal('days', goal.days.filter(d => d !== day))
    } else {
      updateGoal('days', [...goal.days, day])
    }
  }

  const canProceed = () => {
    switch (step) {
      case 1: return goal.activity.trim().length > 0
      case 2: return goal.frequency !== ''
      case 3: return goal.doable !== ''
      case 4: return goal.days.length > 0
      case 5: return goal.withWho !== ''
      case 6: return true
      default: return false
    }
  }

  const handleFinish = (shared) => {
    updateGoal('shared', shared)
    onGoalSet({ ...goal, shared })
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
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '28px' }}>
        <button
          onClick={onCancel}
          style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem', marginRight: '12px' }}
        >
          ←
        </button>
        <span style={{ fontWeight: '700', color: '#7a9e87', fontSize: '1rem' }}>
          Set a Goal
        </span>
      </div>

      {/* Progress bar */}
      <div style={{
        height: '6px', background: '#e0dbd3', borderRadius: '3px', marginBottom: '32px'
      }}>
        <div style={{
          height: '100%',
          background: '#7a9e87',
          borderRadius: '3px',
          width: `${(step / 6) * 100}%`,
          transition: 'width 0.3s ease'
        }} />
      </div>

      {/* Step 1 — What do you want to do? */}
      {step === 1 && (
        <div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '8px', color: '#2d2d2d' }}>
            What do you want to do that brings you joy? 🌟
          </h2>
          <p style={{ fontSize: '0.9rem', color: '#6b6b6b', marginBottom: '24px', lineHeight: '1.5' }}>
            Think about something you enjoy or have always wanted to try.
          </p>

          {/* Interest area selector */}
          {userInterests && userInterests.length > 0 && (
            <div style={{ marginBottom: '16px' }}>
              <p style={{ fontSize: '0.85rem', fontWeight: '600', color: '#6b6b6b', marginBottom: '10px' }}>
                Connect to one of your interests (optional):
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                {userInterests.map(id => (
                  <button
                    key={id}
                    onClick={() => updateGoal('interestArea', goal.interestArea === id ? '' : id)}
                    style={{
                      background: goal.interestArea === id ? '#e8f0ea' : '#ffffff',
                      border: goal.interestArea === id ? '2px solid #7a9e87' : '2px solid #e0dbd3',
                      borderRadius: '20px',
                      padding: '6px 14px',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      color: goal.interestArea === id ? '#7a9e87' : '#2d2d2d',
                      cursor: 'pointer',
                    }}
                  >
                    {INTEREST_LABELS[id]}
                  </button>
                ))}
              </div>
            </div>
          )}

          {!userInterests || userInterests.length === 0 && (
            <div style={{
              background: '#fdf3e7', border: '1px solid #d4913a',
              borderRadius: '10px', padding: '14px', marginBottom: '16px'
            }}>
              <p style={{ fontSize: '0.85rem', color: '#d4913a', fontWeight: '500' }}>
                💡 Adding your interests helps connect your goals to what you love.
              </p>
            </div>
          )}

          <textarea
            placeholder="e.g. Go to a yoga class, visit the farmers market, try a new hiking trail..."
            value={goal.activity}
            onChange={e => updateGoal('activity', e.target.value)}
            style={{
              width: '100%', minHeight: '100px', padding: '14px',
              borderRadius: '10px', border: '2px solid #e0dbd3',
              fontSize: '0.95rem', fontFamily: 'inherit',
              resize: 'none', outline: 'none',
              background: '#ffffff', color: '#2d2d2d',
              lineHeight: '1.5'
            }}
          />
        </div>
      )}

      {/* Step 2 — How many times this week? */}
      {step === 2 && (
        <div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '8px', color: '#2d2d2d' }}>
            How many times this week? 📅
          </h2>
          <p style={{ fontSize: '0.9rem', color: '#6b6b6b', marginBottom: '24px', lineHeight: '1.5' }}>
            Start with something that feels easy to reach.
          </p>
          {['Once', 'Twice', 'Three or more times'].map(option => (
            <button
              key={option}
              onClick={() => updateGoal('frequency', option)}
              style={{
                display: 'block', width: '100%', textAlign: 'left',
                padding: '16px', marginBottom: '10px',
                background: goal.frequency === option ? '#e8f0ea' : '#ffffff',
                border: goal.frequency === option ? '2px solid #7a9e87' : '2px solid #e0dbd3',
                borderRadius: '10px', cursor: 'pointer',
                fontSize: '1rem', fontWeight: '600',
                color: goal.frequency === option ? '#7a9e87' : '#2d2d2d',
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}

      {/* Step 3 — Does this feel doable + why it matters */}
      {step === 3 && (
        <div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '8px', color: '#2d2d2d' }}>
            Does this feel doable? 🤔
          </h2>
          <p style={{ fontSize: '0.9rem', color: '#6b6b6b', marginBottom: '20px', lineHeight: '1.5' }}>
            Be honest with yourself — there's no wrong answer.
          </p>
          {['Yes, definitely', 'Kind of', 'Not sure yet'].map(option => (
            <button
              key={option}
              onClick={() => updateGoal('doable', option)}
              style={{
                display: 'block', width: '100%', textAlign: 'left',
                padding: '16px', marginBottom: '10px',
                background: goal.doable === option ? '#e8f0ea' : '#ffffff',
                border: goal.doable === option ? '2px solid #7a9e87' : '2px solid #e0dbd3',
                borderRadius: '10px', cursor: 'pointer',
                fontSize: '1rem', fontWeight: '600',
                color: goal.doable === option ? '#7a9e87' : '#2d2d2d',
              }}
            >
              {option}
            </button>
          ))}

          <div style={{ marginTop: '24px' }}>
            <p style={{ fontSize: '0.95rem', fontWeight: '700', color: '#2d2d2d', marginBottom: '8px' }}>
              💭 Why does this matter to you? <span style={{ fontWeight: '400', color: '#6b6b6b' }}>(optional)</span>
            </p>
            <textarea
              placeholder="e.g. I want to meet new people, I feel better when I move my body..."
              value={goal.whyMatters}
              onChange={e => updateGoal('whyMatters', e.target.value)}
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
        </div>
      )}

      {/* Step 4 — When this week? */}
      {step === 4 && (
        <div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '8px', color: '#2d2d2d' }}>
            When this week? 🗓️
          </h2>
          <p style={{ fontSize: '0.9rem', color: '#6b6b6b', marginBottom: '24px', lineHeight: '1.5' }}>
            Pick the day or days that work for you.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {DAYS.map(day => (
              <button
                key={day}
                onClick={() => toggleDay(day)}
                style={{
                  display: 'block', width: '100%', textAlign: 'left',
                  padding: '16px',
                  background: goal.days.includes(day) ? '#e8f0ea' : '#ffffff',
                  border: goal.days.includes(day) ? '2px solid #7a9e87' : '2px solid #e0dbd3',
                  borderRadius: '10px', cursor: 'pointer',
                  fontSize: '1rem', fontWeight: '600',
                  color: goal.days.includes(day) ? '#7a9e87' : '#2d2d2d',
                }}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 5 — Solo or with someone? */}
      {step === 5 && (
        <div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '8px', color: '#2d2d2d' }}>
            Going solo or with someone? 👥
          </h2>
          <p style={{ fontSize: '0.9rem', color: '#6b6b6b', marginBottom: '24px', lineHeight: '1.5' }}>
            Either is great — this just helps your squad show up for you.
          </p>
          {[
            { value: 'solo', label: '🙋 Solo', desc: 'Just me' },
            { value: 'squad', label: '👥 With a squad member', desc: 'Someone from my squad' },
            { value: 'someone', label: '🤝 With someone else', desc: 'A friend or family member' },
          ].map(option => (
            <button
              key={option.value}
              onClick={() => updateGoal('withWho', option.value)}
              style={{
                display: 'block', width: '100%', textAlign: 'left',
                padding: '16px', marginBottom: '10px',
                background: goal.withWho === option.value ? '#e8f0ea' : '#ffffff',
                border: goal.withWho === option.value ? '2px solid #7a9e87' : '2px solid #e0dbd3',
                borderRadius: '10px', cursor: 'pointer',
              }}
            >
              <div style={{ fontSize: '1rem', fontWeight: '700', color: goal.withWho === option.value ? '#7a9e87' : '#2d2d2d' }}>
                {option.label}
              </div>
              <div style={{ fontSize: '0.85rem', color: '#6b6b6b', marginTop: '2px' }}>
                {option.desc}
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Step 6 — Share with squad */}
      {step === 6 && (
        <div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '8px', color: '#2d2d2d' }}>
            Share with your squad? 💛
          </h2>
          <p style={{ fontSize: '0.9rem', color: '#6b6b6b', marginBottom: '8px', lineHeight: '1.5' }}>
            Goals are easier to reach when someone knows about them.
          </p>
          <p style={{ fontSize: '0.9rem', color: '#6b6b6b', marginBottom: '24px', lineHeight: '1.5' }}>
            Being intentional about sharing is part of what makes your squad your squad.
          </p>

          <div style={{
            background: '#e8f0ea', borderRadius: '12px',
            padding: '16px', marginBottom: '24px'
          }}>
            <p style={{ fontSize: '0.9rem', fontWeight: '700', color: '#2d2d2d', marginBottom: '4px' }}>
              Your goal:
            </p>
            <p style={{ fontSize: '0.95rem', color: '#7a9e87', fontWeight: '600' }}>
              {goal.activity}
            </p>
            <p style={{ fontSize: '0.85rem', color: '#6b6b6b', marginTop: '4px' }}>
              {goal.frequency} · {goal.days.join(', ')}
            </p>
          </div>

          <button
            onClick={() => handleFinish(true)}
            className="btn-primary"
          >
            💛 Yes, share with my squad
          </button>
          <button
            onClick={() => handleFinish(false)}
            className="btn-secondary"
            style={{ marginTop: '10px' }}
          >
            Keep it to myself for now
          </button>
        </div>
      )}

      {/* Next button */}
      {step < 6 && (
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

export default GoalSetting