import { GettingOutThereModule } from './TrainingModule'

function Trainings({ userInterests, onSetGoal, onStartModule }) {
  return (
    <div>
      <h1 className="page-title">Trainings 📚</h1>
      <p className="page-subtitle">Short, useful stuff — at your own pace.</p>

      {/* For You */}
      <p style={{ fontWeight: '600', marginBottom: '12px', color: '#7a9e87' }}>For You</p>

      <div className="card">
        <p className="card-title">🌱 Getting Out There</p>
        <p className="card-body">Why community participation matters and how to take the first step.</p>
        <button className="btn-primary" onClick={() => onStartModule(GettingOutThereModule)}>Start</button>
      </div>

      <div className="card">
        <p className="card-title">🤝 How Friendships Actually Grow</p>
        <p className="card-body">The truth about how long friendship takes — and why that's actually good news.</p>
        <button className="btn-primary" disabled style={{ opacity: 0.5 }}>Coming soon</button>
      </div>

      <div className="card">
        <p className="card-title">👥 Who's Got Your Back?</p>
        <p className="card-body">How to choose the right people for your squad — quality over quantity.</p>
        <button className="btn-primary" disabled style={{ opacity: 0.5 }}>Coming soon</button>
      </div>

      <div className="card">
        <p className="card-title">🎯 Setting Goals That Stick</p>
        <p className="card-body">Goal setting strategies that actually work for real life.</p>
        <button className="btn-primary" disabled style={{ opacity: 0.5 }}>Coming soon</button>
      </div>

      <div className="card">
        <p className="card-title">💬 Reaching Out</p>
        <p className="card-body">How to make the first move — even when it feels awkward.</p>
        <button className="btn-primary" disabled style={{ opacity: 0.5 }}>Coming soon</button>
      </div>

      <div className="card">
        <p className="card-title">🚧 When Plans Fall Through</p>
        <p className="card-body">Handling "no" without it derailing your momentum.</p>
        <button className="btn-primary" disabled style={{ opacity: 0.5 }}>Coming soon</button>
      </div>

      <div className="card">
        <p className="card-title">✨ What Lights You Up?</p>
        <p className="card-body">Not sure what you're into? This module helps you explore your interests and find what brings you joy.</p>
        <button className="btn-primary" disabled style={{ opacity: 0.5 }}>Coming soon</button>
      </div>

      {/* For Your Squad */}
      <p style={{ fontWeight: '600', margin: '20px 0 12px', color: '#7a9e87' }}>For Your Squad</p>

      <div className="card">
        <p className="card-title">💛 How to Show Up</p>
        <p className="card-body">What authentic support actually looks like — and what it doesn't.</p>
        <button className="btn-secondary" disabled style={{ opacity: 0.5 }}>Coming soon</button>
      </div>

      <div className="card">
        <p className="card-title">🗣️ Checking In for Real</p>
        <p className="card-body">Moving beyond "how are you" to support that actually helps.</p>
        <button className="btn-secondary" disabled style={{ opacity: 0.5 }}>Coming soon</button>
      </div>

      <div className="card">
        <p className="card-title">🔋 Supporting Without Burning Out</p>
        <p className="card-body">How to say no sometimes and still be a great squad member.</p>
        <button className="btn-secondary" disabled style={{ opacity: 0.5 }}>Coming soon</button>
      </div>
    </div>
  )
}

export default Trainings