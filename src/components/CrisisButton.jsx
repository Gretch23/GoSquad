import { useState } from 'react'

function CrisisButton() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <button className="crisis-btn" onClick={() => setShowModal(true)}>
        Need Help?
      </button>

      {showModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.5)', zIndex: 999,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '20px'
        }}>
          <div style={{
            background: 'white', borderRadius: '16px',
            padding: '28px', maxWidth: '380px', width: '100%'
          }}>
            <h2 style={{ marginBottom: '8px', fontSize: '1.2rem' }}>
              You're not alone 💛
            </h2>
            <p style={{ color: '#6b6b6b', fontSize: '0.9rem', marginBottom: '20px', lineHeight: '1.5' }}>
              If you're struggling right now, real support is available.
            </p>

            <a href="tel:988" style={{
              display: 'block', background: '#c0392b', color: 'white',
              borderRadius: '10px', padding: '14px', textAlign: 'center',
              fontWeight: '700', fontSize: '1rem', textDecoration: 'none',
              marginBottom: '10px'
            }}>
              📞 Call or Text 988
            </a>

            <a href="sms:741741&body=HELLO" style={{
              display: 'block', background: '#f9f6f1', color: '#2d2d2d',
              borderRadius: '10px', padding: '14px', textAlign: 'center',
              fontWeight: '600', fontSize: '0.95rem', textDecoration: 'none',
              border: '1px solid #e0dbd3', marginBottom: '20px'
            }}>
              💬 Text HOME to 741741
            </a>

            <button
              onClick={() => setShowModal(false)}
              style={{
                width: '100%', background: 'none', border: 'none',
                color: '#6b6b6b', fontSize: '0.9rem', cursor: 'pointer',
                padding: '8px'
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default CrisisButton