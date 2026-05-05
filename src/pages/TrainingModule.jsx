import { useState } from 'react'

const GettingOutThereModule = {
  id: 'getting-out-there',
  title: '🌱 Getting Out There',
  totalScreens: 6,
  screens: [
    {
      id: 1,
      type: 'hook',
      graphic: (
        <svg viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '200px', margin: '0 auto', display: 'block' }}>
          {/* Door frame */}
          <rect x="60" y="20" width="80" height="130" rx="4" fill="none" stroke="#e0dbd3" strokeWidth="4"/>
          {/* Door */}
          <rect x="64" y="24" width="72" height="122" rx="3" fill="#e8f0ea" stroke="#7a9e87" strokeWidth="3"/>
          {/* Door handle */}
          <circle cx="124" cy="90" r="5" fill="#d4913a"/>
          {/* Light coming through */}
          <path d="M136 24 L180 10 L180 140 L136 146" fill="#fdf3e7" opacity="0.6"/>
          {/* Ground */}
          <line x1="40" y1="150" x2="160" y2="150" stroke="#e0dbd3" strokeWidth="3" strokeLinecap="round"/>
          {/* Small figure approaching */}
          <circle cx="40" cy="120" r="10" fill="#7a9e87" opacity="0.7"/>
          <line x1="40" y1="130" x2="40" y2="148" stroke="#7a9e87" strokeWidth="3" strokeLinecap="round"/>
          <line x1="40" y1="135" x2="32" y2="143" stroke="#7a9e87" strokeWidth="3" strokeLinecap="round"/>
          <line x1="40" y1="135" x2="48" y2="143" stroke="#7a9e87" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      ),
      headline: 'Doing the things you enjoy opens the door.',
      body: 'This is a short module about one of the simplest — and most powerful — ways to find your people.',
    },
    {
      id: 2,
      type: 'idea',
      graphic: (
        <svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '200px', margin: '0 auto', display: 'block' }}>
          {/* Two figures side by side */}
          {/* Figure 1 */}
          <circle cx="70" cy="50" r="14" fill="#7a9e87" opacity="0.8"/>
          <line x1="70" y1="64" x2="70" y2="100" stroke="#7a9e87" strokeWidth="4" strokeLinecap="round"/>
          <line x1="70" y1="75" x2="55" y2="88" stroke="#7a9e87" strokeWidth="3" strokeLinecap="round"/>
          <line x1="70" y1="75" x2="85" y2="85" stroke="#7a9e87" strokeWidth="3" strokeLinecap="round"/>
          <line x1="70" y1="100" x2="58" y2="118" stroke="#7a9e87" strokeWidth="3" strokeLinecap="round"/>
          <line x1="70" y1="100" x2="82" y2="118" stroke="#7a9e87" strokeWidth="3" strokeLinecap="round"/>
          {/* Figure 2 */}
          <circle cx="130" cy="50" r="14" fill="#d4913a" opacity="0.8"/>
          <line x1="130" y1="64" x2="130" y2="100" stroke="#d4913a" strokeWidth="4" strokeLinecap="round"/>
          <line x1="130" y1="75" x2="115" y2="85" stroke="#d4913a" strokeWidth="3" strokeLinecap="round"/>
          <line x1="130" y1="75" x2="145" y2="88" stroke="#d4913a" strokeWidth="3" strokeLinecap="round"/>
          <line x1="130" y1="100" x2="118" y2="118" stroke="#d4913a" strokeWidth="3" strokeLinecap="round"/>
          <line x1="130" y1="100" x2="142" y2="118" stroke="#d4913a" strokeWidth="3" strokeLinecap="round"/>
          {/* Shared activity - simple ball between them */}
          <circle cx="100" cy="88" r="10" fill="#e8f0ea" stroke="#7a9e87" strokeWidth="2"/>
          {/* Ground */}
          <line x1="40" y1="125" x2="160" y2="125" stroke="#e0dbd3" strokeWidth="2" strokeLinecap="round"/>
          {/* Heart above */}
          <path d="M95 30 C95 27 98 25 100 27 C102 25 105 27 105 30 C105 34 100 38 100 38 C100 38 95 34 95 30Z" fill="#d4913a" opacity="0.6"/>
        </svg>
      ),
      headline: 'You just have to show up.',
      body: 'People often think making friends means being outgoing, saying the right things, or knowing how to "work a room." But that\'s not really how it works.\n\nMost friendships happen naturally, when people spend time in the same space because they both love the same thing.\n\nYou don\'t have to be good at making friends. You just have to show up to something you enjoy — consistently. The rest is on the other side of the door.',
    },
    {
      id: 3,
      type: 'story',
      graphic: (
        <svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '200px', margin: '0 auto', display: 'block' }}>
          {/* Figure */}
          <circle cx="75" cy="60" r="14" fill="#7a9e87" opacity="0.8"/>
          <line x1="75" y1="74" x2="75" y2="110" stroke="#7a9e87" strokeWidth="4" strokeLinecap="round"/>
          <line x1="75" y1="85" x2="60" y2="98" stroke="#7a9e87" strokeWidth="3" strokeLinecap="round"/>
          <line x1="75" y1="85" x2="90" y2="95" stroke="#7a9e87" strokeWidth="3" strokeLinecap="round"/>
          <line x1="75" y1="110" x2="63" y2="128" stroke="#7a9e87" strokeWidth="3" strokeLinecap="round"/>
          <line x1="75" y1="110" x2="87" y2="128" stroke="#7a9e87" strokeWidth="3" strokeLinecap="round"/>
          {/* Speech bubble */}
          <rect x="95" y="30" width="90" height="65" rx="10" fill="#fdf3e7" stroke="#d4913a" strokeWidth="2"/>
          <path d="M95 55 L80 65 L100 62" fill="#fdf3e7" stroke="#d4913a" strokeWidth="2"/>
          {/* Lines suggesting text */}
          <line x1="108" y1="48" x2="172" y2="48" stroke="#d4913a" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
          <line x1="108" y1="58" x2="168" y2="58" stroke="#d4913a" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
          <line x1="108" y1="68" x2="172" y2="68" stroke="#d4913a" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
          <line x1="108" y1="78" x2="155" y2="78" stroke="#d4913a" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
          {/* Ground */}
          <line x1="40" y1="135" x2="160" y2="135" stroke="#e0dbd3" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      headline: "Jordan's story.",
      body: "Jordan hadn't been to the climbing gym in over a year. They almost didn't go back.\n\nBut they did — and didn't talk to anyone the first time. Or the second.\n\nThe third time, someone asked if they wanted to try a route together.\n\nThat was six months ago. They climb every week now.",
      isStory: true,
    },
    {
      id: 4,
      type: 'realtalk',
      graphic: (
        <svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '200px', margin: '0 auto', display: 'block' }}>
          {/* Figure taking a small step */}
          <circle cx="90" cy="55" r="14" fill="#7a9e87" opacity="0.8"/>
          <line x1="90" y1="69" x2="90" y2="105" stroke="#7a9e87" strokeWidth="4" strokeLinecap="round"/>
          <line x1="90" y1="80" x2="75" y2="93" stroke="#7a9e87" strokeWidth="3" strokeLinecap="round"/>
          <line x1="90" y1="80" x2="105" y2="90" stroke="#7a9e87" strokeWidth="3" strokeLinecap="round"/>
          {/* One leg forward, one back - mid step */}
          <line x1="90" y1="105" x2="75" y2="128" stroke="#7a9e87" strokeWidth="3" strokeLinecap="round"/>
          <line x1="90" y1="105" x2="108" y2="122" stroke="#7a9e87" strokeWidth="3" strokeLinecap="round"/>
          {/* Small step marker */}
          <path d="M108 122 L118 122" stroke="#d4913a" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 2"/>
          {/* Arrow suggesting forward motion */}
          <path d="M120 90 L135 90 L130 85 M135 90 L130 95" stroke="#d4913a" strokeWidth="2" strokeLinecap="round" fill="none"/>
          {/* Ground */}
          <line x1="40" y1="135" x2="165" y2="135" stroke="#e0dbd3" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      headline: "Here's the thing nobody says out loud.",
      body: "Starting is genuinely hard.\n\nIt might feel awkward to go somewhere new. You might worry about not knowing anyone, or not knowing what to say. That feeling is real — and it makes sense — and you're likely not the only one feeling it.\n\nBut it usually doesn't last as long as we think it will.\n\nMost people are just hoping someone will say hi first. That someone could be you — or it could be them. Either way, showing up is the hard part. Everything else is easier than you expect.",
    },
    {
      id: 5,
      type: 'reflection',
      graphic: (
        <svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '200px', margin: '0 auto', display: 'block' }}>
          {/* Journal */}
          <rect x="55" y="25" width="90" height="115" rx="6" fill="#ffffff" stroke="#e0dbd3" strokeWidth="3"/>
          <rect x="55" y="25" width="15" height="115" rx="4" fill="#e8f0ea" stroke="#7a9e87" strokeWidth="2"/>
          {/* Lines on journal */}
          <line x1="80" y1="55" x2="132" y2="55" stroke="#e0dbd3" strokeWidth="2" strokeLinecap="round"/>
          <line x1="80" y1="68" x2="132" y2="68" stroke="#e0dbd3" strokeWidth="2" strokeLinecap="round"/>
          <line x1="80" y1="81" x2="132" y2="81" stroke="#e0dbd3" strokeWidth="2" strokeLinecap="round"/>
          <line x1="80" y1="94" x2="120" y2="94" stroke="#e0dbd3" strokeWidth="2" strokeLinecap="round"/>
          {/* Pen */}
          <line x1="125" y1="100" x2="148" y2="123" stroke="#d4913a" strokeWidth="3" strokeLinecap="round"/>
          <path d="M148 123 L152 130 L145 126Z" fill="#d4913a"/>
          {/* Small star/sparkle */}
          <path d="M155 40 L157 46 L163 48 L157 50 L155 56 L153 50 L147 48 L153 46Z" fill="#d4913a" opacity="0.6"/>
        </svg>
      ),
      headline: 'Think of something you\'ve enjoyed doing — even once.',
      body: 'What was it? It doesn\'t have to be something you do now. Just something that felt good.',
      isReflection: true,
    },
    {
      id: 6,
      type: 'nudge',
      graphic: (
        <svg viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '200px', margin: '0 auto', display: 'block' }}>
          {/* Door frame */}
          <rect x="60" y="20" width="80" height="130" rx="4" fill="none" stroke="#e0dbd3" strokeWidth="4"/>
          {/* Door open wider */}
          <path d="M64 24 L64 146 L110 140 L110 30Z" fill="#e8f0ea" stroke="#7a9e87" strokeWidth="3"/>
          {/* More light coming through */}
          <path d="M110 30 L180 10 L180 150 L110 140" fill="#fdf3e7" opacity="0.8"/>
          {/* Sun/warmth suggestion */}
          <circle cx="155" cy="75" r="18" fill="#d4913a" opacity="0.2"/>
          <circle cx="155" cy="75" r="10" fill="#d4913a" opacity="0.3"/>
          {/* Door handle */}
          <circle cx="98" cy="90" r="5" fill="#d4913a"/>
          {/* Figure stepping through */}
          <circle cx="118" cy="75" r="11" fill="#7a9e87" opacity="0.9"/>
          <line x1="118" y1="86" x2="118" y2="115" stroke="#7a9e87" strokeWidth="3" strokeLinecap="round"/>
          <line x1="118" y1="95" x2="108" y2="105" stroke="#7a9e87" strokeWidth="3" strokeLinecap="round"/>
          <line x1="118" y1="95" x2="128" y2="103" stroke="#7a9e87" strokeWidth="3" strokeLinecap="round"/>
          <line x1="118" y1="115" x2="110" y2="130" stroke="#7a9e87" strokeWidth="3" strokeLinecap="round"/>
          <line x1="118" y1="115" x2="126" y2="130" stroke="#7a9e87" strokeWidth="3" strokeLinecap="round"/>
          {/* Ground */}
          <line x1="40" y1="150" x2="190" y2="150" stroke="#e0dbd3" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      ),
      headline: "That's your door! 🌱",
      body: "Ready to set a goal to open it?",
      isNudge: true,
    },
  ]
}

function TrainingModule({ module, userInterests, onSetGoal, onClose }) {
  const [currentScreen, setCurrentScreen] = useState(0)
  const [reflection, setReflection] = useState('')
  const screen = module.screens[currentScreen]
  const isLast = currentScreen === module.screens.length - 1
  const isFirst = currentScreen === 0

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

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f9f6f1',
      maxWidth: '430px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
    }}>

      {/* Header */}
      <div style={{
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 20px 0',
      }}>
        <button
          onClick={onClose}
          style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem', color: '#6b6b6b' }}
        >
          ←
        </button>
        <span style={{ fontSize: '0.85rem', color: '#6b6b6b', fontWeight: '500' }}>
          {currentScreen + 1} of {module.totalScreens}
        </span>
        <button
          onClick={onClose}
          style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.85rem', color: '#6b6b6b' }}
        >
          Exit
        </button>
      </div>

      {/* Progress bar */}
      <div style={{
        height: '4px', background: '#e0dbd3',
        margin: '12px 20px 0',
        borderRadius: '2px',
      }}>
        <div style={{
          height: '100%',
          background: '#7a9e87',
          borderRadius: '2px',
          width: `${((currentScreen + 1) / module.totalScreens) * 100}%`,
          transition: 'width 0.3s ease'
        }} />
      </div>

      {/* Content */}
      <div style={{
        flex: 1,
        padding: '24px 20px 100px',
        overflowY: 'auto',
      }}>

        {/* Story label */}
        {screen.isStory && (
          <div style={{
            display: 'inline-block',
            background: '#fdf3e7',
            border: '1px solid #d4913a',
            borderRadius: '20px',
            padding: '4px 14px',
            fontSize: '0.8rem',
            fontWeight: '600',
            color: '#d4913a',
            marginBottom: '16px',
          }}>
            💬 Someone's story
          </div>
        )}

        {/* Graphic */}
        <div style={{ marginBottom: '24px', marginTop: screen.isStory ? '0' : '8px' }}>
          {screen.graphic}
        </div>

        {/* Headline */}
        <h2 style={{
          fontSize: '1.4rem',
          fontWeight: '800',
          color: '#2d2d2d',
          marginBottom: '16px',
          lineHeight: '1.3',
        }}>
          {screen.headline}
        </h2>

        {/* Body */}
        {screen.body && (
          <div>
            {screen.body.split('\n\n').map((paragraph, i) => (
              <p key={i} style={{
                fontSize: '0.95rem',
                color: screen.isStory ? '#2d2d2d' : '#6b6b6b',
                lineHeight: '1.7',
                marginBottom: '14px',
                fontStyle: screen.isStory ? 'italic' : 'normal',
              }}>
                {paragraph}
              </p>
            ))}
          </div>
        )}

        {/* Reflection input */}
        {screen.isReflection && (
          <div style={{ marginTop: '8px' }}>
            <textarea
              placeholder="e.g. I used to love going to the farmers market on Saturday mornings..."
              value={reflection}
              onChange={e => setReflection(e.target.value)}
              style={{
                width: '100%', minHeight: '100px',
                padding: '14px', borderRadius: '10px',
                border: '2px solid #e0dbd3',
                fontSize: '0.9rem', fontFamily: 'inherit',
                resize: 'none', outline: 'none',
                background: '#ffffff', color: '#2d2d2d',
                lineHeight: '1.5', marginBottom: '12px',
              }}
            />
            <p style={{ fontSize: '0.8rem', color: '#7a9e87', fontWeight: '500', marginBottom: '16px' }}>
              No wrong answers. This is just for you.
            </p>

            {/* Interest reminder */}
            {userInterests && userInterests.length > 0 && (
              <div style={{
                background: '#e8f0ea', borderRadius: '10px',
                padding: '14px',
              }}>
                <p style={{ fontSize: '0.8rem', fontWeight: '600', color: '#7a9e87', marginBottom: '10px' }}>
                  💡 Need a reminder? Here are your interests:
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {userInterests.map(id => (
                    <span key={id} style={{
                      background: '#ffffff', color: '#7a9e87',
                      borderRadius: '20px', padding: '4px 10px',
                      fontSize: '0.75rem', fontWeight: '600',
                    }}>
                      {INTEREST_LABELS[id]}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Nudge screen CTA */}
        {screen.isNudge && (
          <div style={{ marginTop: '8px' }}>
            <button
              onClick={onSetGoal}
              className="btn-primary"
            >
              🎯 Set a Goal
            </button>
            <button
              onClick={onClose}
              style={{
                width: '100%', background: 'none',
                border: 'none', color: '#6b6b6b',
                fontSize: '0.9rem', cursor: 'pointer',
                padding: '12px', marginTop: '8px',
              }}
            >
              Maybe later
            </button>
          </div>
        )}
      </div>

      {/* Navigation */}
      {!screen.isNudge && (
        <div style={{
          position: 'fixed', bottom: 0,
          left: '50%', transform: 'translateX(-50%)',
          width: '100%', maxWidth: '430px',
          padding: '16px 20px',
          background: '#f9f6f1',
          borderTop: '1px solid #e0dbd3',
          display: 'flex', gap: '10px',
        }}>
          {!isFirst && (
            <button
              onClick={() => setCurrentScreen(currentScreen - 1)}
              style={{
                flex: 1, padding: '14px',
                background: '#ffffff',
                border: '2px solid #e0dbd3',
                borderRadius: '10px', cursor: 'pointer',
                fontSize: '0.95rem', fontWeight: '600',
                color: '#6b6b6b',
              }}
            >
              ← Back
            </button>
          )}
          <button
            onClick={() => setCurrentScreen(currentScreen + 1)}
            style={{
              flex: 2, padding: '14px',
              background: '#7a9e87',
              border: 'none',
              borderRadius: '10px', cursor: 'pointer',
              fontSize: '0.95rem', fontWeight: '700',
              color: '#ffffff',
            }}
          >
            {currentScreen === module.totalScreens - 2 ? 'Almost there →' : 'Next →'}
          </button>
        </div>
      )}
    </div>
  )
}

export { GettingOutThereModule }
export default TrainingModule