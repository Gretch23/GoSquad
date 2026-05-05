function Dashboard({ userInterests, currentGoal, onSetGoal, onInvite }) {
  const hasInterests = userInterests && userInterests.length > 0

  const interestLabels = {
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

  const withWhoLabel = {
    solo: '🙋 Solo',
    squad: '👥 With a squad member',
    someone: '🤝 With someone else',
  }

  return (
    <div>
      <h1 className="page-title">Hey there! 👋</h1>
      <p className="page-subtitle">Here's where you left off.</p>

      {/* Interests nudge */}
      {!hasInterests ? (
        <div className="card" style={{ borderLeft: '4px solid #d4913a' }}>
          <p className="card-title">✨ What lights you up?</p>
          <p className="card-body">
            Tell us what you're into so your squad can see what you have in common.
          </p>
          <button className="btn-secondary">Add your interests</button>
        </div>
      ) : (
        <div className="card">
          <p className="card-title">✨ Your Interests</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
            {userInterests.map(id => (
              <span key={id} style={{
                background: '#e8f0ea',
                color: '#7a9e87',
                borderRadius: '20px',
                padding: '4px 12px',
                fontSize: '0.8rem',
                fontWeight: '600'
              }}>
                {interestLabels[id]}
              </span>
            ))}
          </div>
          <p className="card-body" style={{ color: '#d4913a', fontWeight: '500' }}>
            💛 Your squad can't see what you have in common yet — invite someone to get started!
          </p>
        </div>
      )}

      {/* Current Goal */}
      <div className="card">
        <p className="card-title">🎯 My Current Goal</p>
        {currentGoal ? (
          <div>
            <p style={{
              fontSize: '1rem', fontWeight: '700',
              color: '#2d2d2d', marginBottom: '6px'
            }}>
              {currentGoal.activity}
            </p>
            <p style={{ fontSize: '0.85rem', color: '#6b6b6b', marginBottom: '4px' }}>
              {currentGoal.frequency} · {currentGoal.days.join(', ')}
            </p>
            <p style={{ fontSize: '0.85rem', color: '#6b6b6b', marginBottom: '16px' }}>
              {withWhoLabel[currentGoal.withWho]}
            </p>

            {currentGoal.shared && (
              <p style={{
                fontSize: '0.85rem', color: '#7a9e87',
                fontWeight: '600', marginBottom: '16px'
              }}>
                💛 Shared with your squad
              </p>
            )}

            {/* Three boxes */}
            <div style={{ display: 'flex', gap: '8px' }}>
              {[
                { label: '📣', sub: 'I shared it!' },
                { label: '✅', sub: 'I did it!' },
                { label: '🎉', sub: 'I celebrated!' },
              ].map((box, i) => (
                <button
                  key={i}
                  style={{
                    flex: 1, background: '#f9f6f1',
                    border: '2px solid #e0dbd3',
                    borderRadius: '10px', padding: '12px 6px',
                    cursor: 'pointer', textAlign: 'center'
                  }}
                >
                  <div style={{ fontSize: '1.4rem' }}>{box.label}</div>
                  <div style={{
                    fontSize: '0.7rem', fontWeight: '600',
                    color: '#6b6b6b', marginTop: '4px'
                  }}>
                    {box.sub}
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <p className="card-body" style={{ marginBottom: '4px' }}>
              You haven't set a goal yet.
            </p>
            <button className="btn-primary" onClick={onSetGoal}>
              Set a Goal
            </button>
          </div>
        )}
      </div>

      {/* Check In */}
      <div className="card">
        <p className="card-title">✅ Daily Check-in</p>
        <p className="card-body">How are you showing up today?</p>
        <button className="btn-secondary">Check In</button>
      </div>

      {/* Squad Activity */}
      <div className="card">
        <p className="card-title">👥 Squad Activity</p>
        <p className="card-body">
          Your squad hasn't sent any encouragement yet. Invite someone to get started.
        </p>
        <button className="btn-primary" onClick={onInvite}>Invite Squad Member</button>
      </div>

      {/* Wins */}
      <div className="card">
        <p className="card-title">🌟 Your Wins</p>
        <p className="card-body">
          Completed goals and celebrations will show up here.
        </p>
      </div>
    </div>
  )
}

export default Dashboard