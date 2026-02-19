import { useCallback, useState } from 'react'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import HomePage from './components/HomePage.jsx'
import LessonView from './components/LessonView.jsx'
import Playground from './components/Playground.jsx'
import Sidebar from './components/Sidebar.jsx'
import { getAdjacentLessons, getLessonById } from './data/index.js'

function App() {
  // currentView: 'home' | 'lesson' | 'playground'
  const [currentView, setCurrentView] = useState('home')
  const [currentLessonId, setCurrentLessonId] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)

  const handleSelectLesson = useCallback((id) => {
    setCurrentLessonId(id)
    setCurrentView('lesson')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const handleSelectView = useCallback((view) => {
    setCurrentView(view)
    if (view !== 'lesson') setCurrentLessonId(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const currentLesson = currentLessonId ? getLessonById(currentLessonId) : null
  const { prev, next } = currentLessonId
    ? getAdjacentLessons(currentLessonId)
    : { prev: null, next: null }

  return (
    <div className='flex min-h-screen bg-[#0a0e17] text-slate-200 font-sans'>
      <Sidebar
        currentLessonId={currentLessonId}
        currentView={currentView}
        onSelectLesson={handleSelectLesson}
        onSelectView={handleSelectView}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        isCollapsed={isCollapsed}
        onToggleCollapse={() => setIsCollapsed((prev) => !prev)}
      />

      <div
        className={`flex-1 min-h-screen flex flex-col transition-[margin] duration-300 ${
          isCollapsed ? 'md:ml-[80px]' : 'md:ml-[300px]'
        }`}
      >
        <Header
          onToggleSidebar={() => setSidebarOpen((prev) => !prev)}
          onSelectView={handleSelectView}
        />

        <main className='flex-1'>
          {currentView === 'lesson' && currentLesson ? (
            <LessonView
              key={currentLessonId}
              lesson={currentLesson}
              onNavigate={handleSelectLesson}
              prevLesson={prev}
              nextLesson={next}
            />
          ) : currentView === 'playground' ? (
            <Playground />
          ) : (
            <HomePage
              onStartLesson={handleSelectLesson}
              onOpenPlayground={() => handleSelectView('playground')}
            />
          )}
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App
