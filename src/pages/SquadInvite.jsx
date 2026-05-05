import { useState } from 'react'

const DECLINE_MESSAGES = [
  "I can't right now, but I'm rooting for you! 💛",
  "Thanks for thinking of me — keep going! 🌟",
  "I'm cheering you on from the sidelines!",
  "You've got this — I believe in you! 💪",
  "I'm not able to join right now, but I'm in your corner!",
  "Keep doing your thing — you're awesome! ✨",
  "Thanks for thinking of me. You've got great things ahead!",
  "I can't make it work right now, but don't stop! 💛",
  "Rooting for you always, even from a distance! 🌟",
  "I'm not in the right headspace right now, but I'm thinking of you! 💛",
]

const RELATIONSHIP_OPTIONS = [
  { value: 'friend', label: '💛 Close friend' },
  { value: 'family', label: '👨‍👩‍👧 Family member' },
  { value: 'connect', label: '🤝 We get along really well' },
  { value: 'reliable', label: '🌟 They show up for me' },
]

function SquadInvite({ onInviteSent, onCancel, currentSquadCount }) {
  const [step, setStep] = useState(1)
  const [inviteSent, setInviteSent] = useState(false)
  const [sentMember, setSentMember] = useState(null)
  const [invite, setInvite] = useState({
    name: '',
    phone: '',
    relationship: '',
  })

  const updateInvite = (field, value) => {
    setInvite(prev => ({ ...prev, [field]: value }))
  }

  const canProceed = () => {
    switch (step) {
      case 1: return invite.name.trim().length > 0 && invite.phone.trim().length > 0
      case 2: return invite.relationship !== ''
      case 3: return true
      default: return false
    }
  }

  const handleSend = () => {
    const member = {
      ...invite,
      status: 'invited',
      id: Date.now(),
      visibilitySettings: {
        interests: true,
        wins: true,
        currentGoal: false,
        checkIns: false,
      }
    }
    setSentMember(member)
    setInviteSent(true)
    onInviteSent(member)
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
          Invite a Squad Member
        </span>
      </div>

      {/* Squad count warning */}
      {currentSquadCount >= 5 && currentSquadCount < 7 && (
        <div style={{
          background: '#fdf3e7', border: '1px solid #d4913a',
          borderRadius: '10px', padding: '14px', marginBottom: '20px'
        }}>
          <p style={{ fontSize: '0.85rem', color: '#d4913a', fontWeight: '500' }}>
            💡 You have {currentSquadCount} squad members. Remember — it's about the right people, not the most people.
          </p>
        </div>
      )}

      {/* Progress bar */}
      <div style={{
        height: '6px', background: '#e0dbd3', borderRadius: '3px', marginBottom: '32px'
      }}>
        <div style={{
          height: '100%',
          background: '#7a9e87',
          borderRadius: '3px',
          width: `${(step / 3) * 100}%`,
          transition: 'width 0.3s ease'
        }} />
      </div>

      {/* Step 1 — Name and phone */}
      {step === 1 && (
        <div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '8px', color: '#2d2d2d' }}>
            Who do you want to invite? 👥
          </h2>
          <p style={{ fontSize: '0.9rem', color: '#6b6b6b', marginBottom: '24px', lineHeight: '1.5' }}>
            Think about someone who shows up for you. Not sure who to pick? Check out the "Who's Got Your Back?" training first.
          </p>

          <div style={{ marginBottom: '16px' }}>
            <label style={{
              display: 'block', fontSize: '0.85rem',
              fontWeight: '600', color: '#2d2d2d', marginBottom: '8px'
            }}>
              Their name
            </label>
            <input
              type="text"
              placeholder="e.g. Jordan"
              value={invite.name}
              onChange={e => updateInvite('name', e.target.value)}
              style={{
                width: '100%', padding: '14px',
                borderRadius: '10px', border: '2px solid #e0dbd3',
                fontSize: '0.95rem', fontFamily: 'inherit',
                outline: 'none', background: '#ffffff',
                color: '#2d2d2d',
              }}
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{
              display: 'block', fontSize: '0.85rem',
              fontWeight: '600', color: '#2d2d2d', marginBottom: '8px'
            }}>
              Their phone number
            </label>
            <input
              type="tel"
              placeholder="e.g. 215-555-0123"
              value={invite.phone}
              onChange={e => updateInvite('phone', e.target.value)}
              style={{
                width: '100%', padding: '14px',
                borderRadius: '10px', border: '2px solid #e0dbd3',
                fontSize: '0.95rem', fontFamily: 'inherit',
                outline: 'none', background: '#ffffff',
                color: '#2d2d2d',
              }}
            />
          </div>
        </div>
      )}

      {/* Step 2 — Relationship type */}
      {step === 2 && (
        <div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '8px', color: '#2d2d2d' }}>
            How would you describe {invite.name}? 💭
          </h2>
          <p style={{ fontSize: '0.9rem', color: '#6b6b6b', marginBottom: '24px', lineHeight: '1.5' }}>
            This helps us personalize their invitation.
          </p>
          {RELATIONSHIP_OPTIONS.map(option => (
            <button
              key={option.value}
              onClick={() => updateInvite('relationship', option.value)}
              style={{
                display: 'block', width: '100%', textAlign: 'left',
                padding: '16px', marginBottom: '10px',
                background: invite.relationship === option.value ? '#e8f0ea' : '#ffffff',
                border: invite.relationship === option.value ? '2px solid #7a9e87' : '2px solid #e0dbd3',
                borderRadius: '10px', cursor: 'pointer',
                fontSize: '1rem', fontWeight: '600',
                color: invite.relationship === option.value ? '#7a9e87' : '#2d2d2d',
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}

      {/* Step 3 — Review and send */}
      {step === 3 && (
        <div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '8px', color: '#2d2d2d' }}>
            Ready to invite {invite.name}? 🎉
          </h2>
          <p style={{ fontSize: '0.9rem', color: '#6b6b6b', marginBottom: '24px', lineHeight: '1.5' }}>
            Here's what they'll receive.
          </p>

          {/* Preview of invite message */}
          <div style={{
            background: '#ffffff', border: '1px solid #e0dbd3',
            borderRadius: '12px', padding: '20px', marginBottom: '24px'
          }}>
            <p style={{ fontSize: '0.85rem', fontWeight: '700', color: '#7a9e87', marginBottom: '12px' }}>
              📱 Their invitation will say:
            </p>
            <p style={{ fontSize: '0.9rem', color: '#2d2d2d', lineHeight: '1.6' }}>
              <strong>You've been invited to someone's GoSquad!</strong>
            </p>
            <p style={{ fontSize: '0.9rem', color: '#2d2d2d', lineHeight: '1.6', marginTop: '8px' }}>
              Your relationship matters to them — and getting this invitation means you're someone they trust to show up.
            </p>
            <p style={{ fontSize: '0.9rem', color: '#2d2d2d', lineHeight: '1.6', marginTop: '8px' }}>
              From time to time, they might need a little encouragement or a nudge to get out there. The GoSquad helps them set goals, connect with people they care about, and do more of what brings them joy.
            </p>
            <p style={{ fontSize: '0.9rem', color: '#7a9e87', fontWeight: '700', lineHeight: '1.6', marginTop: '8px' }}>
              They want you in their corner. 💛
            </p>
          </div>

          {/* Privacy note */}
          <div style={{
            background: '#e8f0ea', borderRadius: '10px',
            padding: '14px', marginBottom: '24px'
          }}>
            <p style={{ fontSize: '0.85rem', color: '#7a9e87', fontWeight: '500', lineHeight: '1.5' }}>
              🔒 If {invite.name} joins your squad, you'll be able to choose what they can see about you — your goals, check-ins, and wins. We'll let you know when they join so you can set that up.
            </p>
          </div>

          <button
            onClick={handleSend}
            className="btn-primary"
          >
            Send Invite to {invite.name} 💛
          </button>
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
   {/* Confirmation screen */}
   {inviteSent && sentMember && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: '#f9f6f1', zIndex: 999,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '32px 20px',
          maxWidth: '430px', margin: '0 auto',
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🎉</div>
            <h2 style={{
              fontSize: '1.4rem', fontWeight: '800',
              color: '#2d2d2d', marginBottom: '12px'
            }}>
              Your invite is on its way to {sentMember.name}!
            </h2>
            <p style={{
              fontSize: '0.9rem', color: '#6b6b6b',
              lineHeight: '1.6', marginBottom: '24px'
            }}>
              If they join your squad, you'll be able to choose what they can see about you — your goals, check-ins, and wins.
            </p>
            <div style={{
              background: '#e8f0ea', borderRadius: '12px',
              padding: '16px', marginBottom: '28px', textAlign: 'left'
            }}>
              <p style={{
                fontSize: '0.85rem', color: '#7a9e87',
                fontWeight: '600', lineHeight: '1.5'
              }}>
                🔔 We'll let you know when {sentMember.name} joins so you can set up their access.
              </p>
            </div>
            <button
              onClick={onCancel}
              className="btn-primary"
            >
              Got it! 💛
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default SquadInvite