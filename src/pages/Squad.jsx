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

function Squad({ userInterests, squadMembers, onInvite }) {
  const [requestSent, setRequestSent] = useState(null)
  const [encouragementSent, setEncouragementSent] = useState(null)

  const sharedInterests = (memberInterests) => {
    if (!memberInterests || !userInterests) return []
    return userInterests.filter(i => memberInterests.includes(i))
  }

  return (
    <div>
      <h1 className="page-title">My Squad 👥</h1>
      <p className="page-subtitle">The people in your corner.</p>

      {/* Squad count */}
      {squadMembers.length > 0 && (
        <p style={{
          fontSize: '0.85rem', color: '#6b6b6b',
          marginBottom: '16px', fontWeight: '500'
        }}>
          {squadMembers.length} of 7 squad members
        </p>
      )}

      {/* Empty state */}
      {squadMembers.length === 0 && (
        <div className="card" style={{ borderLeft: '4px solid #d4913a' }}>
          <p className="card-title">Build your squad 💛</p>
          <p className="card-body" style={{ marginBottom: '12px' }}>
            Your squad are the people who show up for you. Start with someone you trust.
          </p>
          <p style={{
            fontSize: '0.8rem', color: '#7a9e87',
            fontWeight: '500', marginBottom: '12px'
          }}>
            Not sure who to invite? Check out "Who's Got Your Back?" in Trainings.
          </p>
          <button className="btn-primary" onClick={onInvite}>
            + Invite Someone
          </button>
        </div>
      )}

      {/* Squad members */}
      {squadMembers.map(member => {
        const shared = sharedInterests(member.interests)
        return (
          <div key={member.id} className="card">

            {/* Member header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
              <div>
                <p style={{ fontWeight: '700', fontSize: '1rem', color: '#2d2d2d' }}>
                  {member.name}
                </p>
                <span style={{
                  fontSize: '0.75rem', fontWeight: '600',
                  color: member.status === 'joined' ? '#7a9e87' : '#d4913a',
                  background: member.status === 'joined' ? '#e8f0ea' : '#fdf3e7',
                  borderRadius: '20px', padding: '2px 10px'
                }}>
                  {member.status === 'joined' ? '✅ Joined' : '⏳ Invited'}
                </span>
              </div>
            </div>

            {/* Declined message */}
            {member.status === 'declined' && (
              <div style={{
                background: '#f9f6f1', borderRadius: '10px',
                padding: '12px', marginBottom: '12px'
              }}>
                <p style={{ fontSize: '0.85rem', color: '#2d2d2d', fontWeight: '600', marginBottom: '4px' }}>
                  {member.name} isn't able to join your squad right now.
                </p>
                <p style={{ fontSize: '0.85rem', color: '#6b6b6b', lineHeight: '1.5' }}>
                  There are lots of reasons someone might not be ready — they could be overwhelmed, unsure about app invites, or just have a lot going on. It's not a reflection of your relationship.
                </p>
                <p style={{ fontSize: '0.85rem', color: '#7a9e87', fontWeight: '500', marginTop: '8px' }}>
                  If you feel comfortable, reaching out directly is always an option. 💛
                </p>
              </div>
            )}

            {/* Shared interests */}
            {member.status === 'joined' && shared.length > 0 && (
              <div style={{ marginBottom: '12px' }}>
                <p style={{ fontSize: '0.8rem', fontWeight: '600', color: '#6b6b6b', marginBottom: '6px' }}>
                  You both enjoy:
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {shared.map(id => (
                    <span key={id} style={{
                      background: '#e8f0ea', color: '#7a9e87',
                      borderRadius: '20px', padding: '3px 10px',
                      fontSize: '0.75rem', fontWeight: '600'
                    }}>
                      {INTEREST_LABELS[id]}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* No shared interests yet */}
            {member.status === 'invited' && (
              <p style={{ fontSize: '0.8rem', color: '#6b6b6b', marginBottom: '12px' }}>
                Shared interests will show up once {member.name} joins. 💛
              </p>
            )}

            {/* Action buttons */}
            {member.status === 'joined' && (
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={() => setEncouragementSent(member.id)}
                  style={{
                    flex: 1, padding: '10px',
                    background: encouragementSent === member.id ? '#e8f0ea' : '#ffffff',
                    border: encouragementSent === member.id ? '2px solid #7a9e87' : '2px solid #e0dbd3',
                    borderRadius: '10px', cursor: 'pointer',
                    fontSize: '0.8rem', fontWeight: '600',
                    color: encouragementSent === member.id ? '#7a9e87' : '#2d2d2d',
                  }}
                >
                  {encouragementSent === member.id ? '💛 Sent!' : '💛 Send encouragement'}
                </button>
                <button
                  onClick={() => setRequestSent(member.id)}
                  style={{
                    flex: 1, padding: '10px',
                    background: requestSent === member.id ? '#fdf3e7' : '#ffffff',
                    border: requestSent === member.id ? '2px solid #d4913a' : '2px solid #e0dbd3',
                    borderRadius: '10px', cursor: 'pointer',
                    fontSize: '0.8rem', fontWeight: '600',
                    color: requestSent === member.id ? '#d4913a' : '#2d2d2d',
                  }}
                >
                  {requestSent === member.id ? '🙋 Requested!' : '🙋 Request encouragement'}
                </button>
              </div>
            )}
          </div>
        )
      })}

      {/* Invite more button */}
      {squadMembers.length > 0 && squadMembers.length < 7 && (
        <button className="btn-primary" onClick={onInvite}>
          + Invite Someone
        </button>
      )}

      {/* Max reached */}
      {squadMembers.length >= 7 && (
        <div className="card" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.9rem', color: '#6b6b6b', lineHeight: '1.5' }}>
            Your squad is full! Remember — it's about the right people, not the most people. 💛
          </p>
        </div>
      )}
    </div>
  )
}

export default Squad