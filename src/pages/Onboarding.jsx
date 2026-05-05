import { useState } from 'react'

const INTERESTS = [
  {
    id: 'arts',
    emoji: '🎨',
    label: 'Arts & Making',
    description: 'Drawing, painting, writing, crafting'
  },
  {
    id: 'music',
    emoji: '🎵',
    label: 'Music',
    description: 'Listening, making music, live shows'
  },
  {
    id: 'nature',
    emoji: '🌿',
    label: 'Nature & Outdoors',
    description: 'Parks, hiking, camping, walking'
  },
  {
    id: 'gardening',
    emoji: '🌱',
    label: 'Gardening',
    description: 'Community gardens, growing things'
  },
  {
    id: 'exploring',
    emoji: '🗺️',
    label: 'Exploring',
    description: 'New neighborhoods, local spots, photography'
  },
  {
    id: 'games',
    emoji: '🎮',
    label: 'Games',
    description: 'Board games, cards, arcades'
  },
  {
    id: 'teamsports',
    emoji: '🏀',
    label: 'Team Sports',
    description: 'Basketball, soccer, volleyball'
  },
  {
    id: 'movement',
    emoji: '🚴',
    label: 'Individual Movement',
    description: 'Biking, running, gym, skating, yoga'
  },
  {
    id: 'reading',
    emoji: '📚',
    label: 'Reading & Learning',
    description: 'Books, libraries, podcasts'
  },
  {
    id: 'food',
    emoji: '🍽️',
    label: 'Food & Hangouts',
    description: 'Cookouts, coffee shops, trying new places'
  },
  {
    id: 'culture',
    emoji: '🌍',
    label: 'Community & Culture',
    description: 'Museums, local events, volunteering'
  },
  {
    id: 'spirituality',
    emoji: '🧘',
    label: 'Spirituality & Reflection',
    description: 'Meditation, worship, quiet practices'
  },
]

function Onboarding({ onComplete }) {
  const [selected, setSelected] = useState([])

  const toggleInterest = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter(i => i !== id))
    } else if (selected.length < 5) {
      setSelected([...selected, id])
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f9f6f1',
      maxWidth: '430px',
      margin: '0 auto',
      padding: '32px 20px 40px',
    }}>

      {/* Header */}
      <div style={{ marginBottom: '8px' }}>
        <span style={{ fontSize: '1.1rem', fontWeight: '700', color: '#7a9e87' }}>
          🟡 The GoSquad!
        </span>
      </div>

      {/* Title */}
      <h1 style={{
        fontSize: '1.6rem',
        fontWeight: '800',
        color: '#2d2d2d',
        marginBottom: '8px',
        marginTop: '24px'
      }}>
        What lights you up? ✨
      </h1>

      <p style={{
        fontSize: '0.95rem',
        color: '#6b6b6b',
        marginBottom: '8px',
        lineHeight: '1.5'
      }}>
        Pick up to 5 things that interest you — even if you haven't done them in a while.
      </p>

      <p style={{
        fontSize: '0.85rem',
        color: '#7a9e87',
        marginBottom: '24px',
        fontWeight: '500'
      }}>
        Not sure what you're into? That's ok — you're in the right place.
      </p>

      {/* Interest tiles */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '12px',
        marginBottom: '28px'
      }}>
        {INTERESTS.map(interest => {
          const isSelected = selected.includes(interest.id)
          return (
            <button
              key={interest.id}
              onClick={() => toggleInterest(interest.id)}
              style={{
                background: isSelected ? '#e8f0ea' : '#ffffff',
                border: isSelected ? '2px solid #7a9e87' : '2px solid #e0dbd3',
                borderRadius: '12px',
                padding: '16px 12px',
                textAlign: 'left',
                cursor: selected.length >= 5 && !isSelected ? 'not-allowed' : 'pointer',
                opacity: selected.length >= 5 && !isSelected ? 0.5 : 1,
                transition: 'all 0.15s ease',
              }}
            >
              <div style={{ fontSize: '1.8rem', marginBottom: '6px' }}>
                {interest.emoji}
              </div>
              <div style={{
                fontSize: '0.9rem',
                fontWeight: '700',
                color: isSelected ? '#7a9e87' : '#2d2d2d',
                marginBottom: '4px'
              }}>
                {interest.label}
              </div>
              <div style={{
                fontSize: '0.75rem',
                color: '#6b6b6b',
                lineHeight: '1.3'
              }}>
                {interest.description}
              </div>
            </button>
          )
        })}
      </div>

      {/* Selected count */}
      {selected.length > 0 && (
        <p style={{
          textAlign: 'center',
          fontSize: '0.85rem',
          color: '#7a9e87',
          fontWeight: '600',
          marginBottom: '16px'
        }}>
          {selected.length} of 5 selected
        </p>
      )}

      {/* Done button */}
      <button
        onClick={() => onComplete(selected)}
        disabled={selected.length === 0}
        style={{
          width: '100%',
          background: selected.length > 0 ? '#7a9e87' : '#e0dbd3',
          color: selected.length > 0 ? 'white' : '#6b6b6b',
          border: 'none',
          borderRadius: '10px',
          padding: '14px',
          fontSize: '1rem',
          fontWeight: '700',
          cursor: selected.length > 0 ? 'pointer' : 'default',
          marginBottom: '12px',
          transition: 'all 0.15s ease'
        }}
      >
        Let's go!
      </button>

      {/* Skip */}
      <button
        onClick={() => onComplete([])}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          color: '#6b6b6b',
          fontSize: '0.9rem',
          cursor: 'pointer',
          padding: '8px'
        }}
      >
        Skip for now
      </button>
    </div>
  )
}

export default Onboarding