import { useState } from 'react'
import Dashboard from './pages/Dashboard'
import Squad from './pages/Squad'
import Trainings from './pages/Trainings'
import Onboarding from './pages/Onboarding'
import GoalSetting from './pages/GoalSetting'
import SquadInvite from './pages/SquadInvite'
import TrainingModule, { GettingOutThereModule } from './pages/TrainingModule'
import CrisisButton from './components/CrisisButton'
import './App.css'

function App() {
  const [activePage, setActivePage] = useState('dashboard')
  const [onboardingComplete, setOnboardingComplete] = useState(false)
  const [userInterests, setUserInterests] = useState([])
  const [currentGoal, setCurrentGoal] = useState(null)
  const [settingGoal, setSettingGoal] = useState(false)
  const [squadMembers, setSquadMembers] = useState([])
  const [inviting, setInviting] = useState(false)
  const [activeModule, setActiveModule] = useState(null)

  const handleOnboardingComplete = (selectedInterests) => {
    setUserInterests(selectedInterests)
    setOnboardingComplete(true)
  }

  const handleGoalSet = (goal) => {
    setCurrentGoal(goal)
    setSettingGoal(false)
    setActivePage('dashboard')
  }

  const handleInviteSent = (member) => {
    setSquadMembers(prev => [...prev, member])
    setInviting(false)
    setActivePage('squad')
  }

  const handleSetGoalFromTraining = () => {
    setActiveModule(null)
    setSettingGoal(true)
    setActivePage('dashboard')
  }

  if (!onboardingComplete) {
    return <Onboarding onComplete={handleOnboardingComplete} />
  }

  if (settingGoal) {
    return (
      <GoalSetting
        userInterests={userInterests}
        onGoalSet={handleGoalSet}
        onCancel={() => setSettingGoal(false)}
      />
    )
  }

  if (inviting) {
    return (
      <SquadInvite
        currentSquadCount={squadMembers.length}
        onInviteSent={handleInviteSent}
        onCancel={() => setInviting(false)}
      />
    )
  }

  if (activeModule) {
    return (
      <TrainingModule
        module={activeModule}
        userInterests={userInterests}
        onSetGoal={handleSetGoalFromTraining}
        onClose={() => setActiveModule(null)}
      />
    )
  }

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard': return (
        <Dashboard
          userInterests={userInterests}
          currentGoal={currentGoal}
          onSetGoal={() => setSettingGoal(true)}
          onInvite={() => setInviting(true)}
        />
      )
      case 'squad': return (
        <Squad
          userInterests={userInterests}
          squadMembers={squadMembers}
          onInvite={() => setInviting(true)}
        />
      )
      case 'trainings': return (
        <Trainings
          userInterests={userInterests}
          onSetGoal={handleSetGoalFromTraining}
          onStartModule={setActiveModule}
        />
      )
      default: return (
        <Dashboard
          userInterests={userInterests}
          currentGoal={currentGoal}
          onSetGoal={() => setSettingGoal(true)}
          onInvite={() => setInviting(true)}
        />
      )
    }
  }

  return (
    <div className="app-shell">
      <header className="app-header">
        <span className="app-logo">🟡 The GoSquad!</span>
        <CrisisButton />
      </header>

      <main className="app-main">
        {renderPage()}
      </main>

      <nav className="bottom-nav">
        <button
          className={activePage === 'dashboard' ? 'nav-btn active' : 'nav-btn'}
          onClick={() => setActivePage('dashboard')}
        >
          <span>🏠</span>
          <span>Home</span>
        </button>
        <button
          className={activePage === 'squad' ? 'nav-btn active' : 'nav-btn'}
          onClick={() => setActivePage('squad')}
        >
          <span>👥</span>
          <span>My Squad</span>
        </button>
        <button
          className={activePage === 'trainings' ? 'nav-btn active' : 'nav-btn'}
          onClick={() => setActivePage('trainings')}
        >
          <span>📚</span>
          <span>Trainings</span>
        </button>
      </nav>
    </div>
  )
}

export default App