import { modules } from '../data/index.js'

export default function Sidebar({
  currentLessonId,
  currentView,
  onSelectLesson,
  onSelectView,
  isOpen,
  onClose,
  isCollapsed,
  onToggleCollapse,
}) {
  let lessonCounter = 0

  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`fixed inset-0 bg-black/60 z-[150] transition-opacity md:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      <aside
        className={`fixed top-0 left-0 h-screen bg-surface-secondary border-r border-surface-border z-[200] flex flex-col transition-all duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 ${isCollapsed ? 'w-[80px]' : 'w-[300px]'}`}
      >
        {/* Header */}
        <div
          className={`p-5 pb-4 border-b border-surface-border flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'}`}
        >
          <div className='flex items-center justify-between w-full'>
            <button
              onClick={() => {
                onSelectView('home')
                onClose()
              }}
              className={`flex items-center gap-2.5 hover:opacity-80 transition-opacity ${isCollapsed ? 'justify-center w-full' : ''}`}
              title='Home'
            >
              <div className='w-8 h-8 bg-brand-600 rounded-md flex items-center justify-center text-xs font-bold text-white shrink-0'>
                {'</>'}
              </div>
              {!isCollapsed && (
                <span className='font-bold text-zinc-100 text-[1.05rem] tracking-tight'>
                  CodeLab
                </span>
              )}
            </button>
            {!isCollapsed && (
              <button
                onClick={onClose}
                className='md:hidden text-zinc-400 hover:text-white text-xl p-1 rounded hover:bg-surface-tertiary'
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {!isCollapsed && (
          <p className='text-xs text-zinc-500 mt-3 px-5 mb-1 truncate'>
            Learn Programming
          </p>
        )}

        {/* Playground link */}
        <div
          className={`px-3 pt-3 ${isCollapsed ? 'flex justify-center' : ''}`}
        >
          <button
            onClick={() => {
              onSelectView('playground')
              onClose()
            }}
            className={`flex items-center gap-2.5 rounded-md text-sm font-medium transition-all ${
              currentView === 'playground'
                ? 'bg-brand-600 text-white'
                : 'text-zinc-400 hover:bg-surface-tertiary hover:text-zinc-200'
            } ${isCollapsed ? 'p-2 justify-center' : 'w-full px-5 py-2'}`}
            title='Playground'
          >
            <span className='text-base shrink-0'>🧪</span>
            {!isCollapsed && 'Playground'}
          </button>
        </div>

        {/* Assignment link */}
        <div
          className={`px-3 pt-1 ${isCollapsed ? 'flex justify-center' : ''}`}
        >
          <a
            href='/assignment.html'
            className={`flex items-center gap-2.5 rounded-md text-sm font-medium transition-all text-zinc-400 hover:bg-surface-tertiary hover:text-zinc-200 ${isCollapsed ? 'p-2 justify-center' : 'w-full px-5 py-2'}`}
            title='Assignment'
          >
            <span className='text-base shrink-0'>📝</span>
            {!isCollapsed && 'Assignment'}
          </a>
        </div>

        {/* Navigation */}
        <nav className='flex-1 overflow-y-auto py-3'>
          {modules.map((mod, modIndex) => (
            <div key={modIndex} className='mb-2'>
              {!isCollapsed && (
                <div className='px-5 py-1.5 text-[0.65rem] font-bold tracking-widest uppercase text-zinc-500 truncate'>
                  {mod.title}
                </div>
              )}
              {isCollapsed && (
                <div className='flex justify-center py-2 border-t border-surface-border mt-1 first:border-0 first:mt-0'>
                  <span className='text-zinc-600 text-[0.65rem] uppercase font-bold'>
                    {mod.title.substring(0, 3)}
                  </span>
                </div>
              )}
              {mod.lessons.map((lesson) => {
                lessonCounter++
                const num = lessonCounter
                const isActive =
                  lesson.id === currentLessonId && currentView === 'lesson'
                return (
                  <button
                    key={lesson.id}
                    onClick={() => {
                      onSelectLesson(lesson.id)
                      onClose()
                    }}
                    className={`flex items-center gap-2.5 transition-all ${
                      isCollapsed
                        ? 'justify-center py-3 w-full border-l-2'
                        : 'w-full px-5 py-2 text-sm text-left border-l-2'
                    } ${
                      isActive
                        ? 'border-brand-500 bg-surface-tertiary text-zinc-100 font-medium'
                        : 'border-transparent text-zinc-400 hover:text-zinc-200 hover:bg-surface-tertiary/50'
                    }`}
                    title={lesson.title}
                  >
                    <span
                      className={`w-5 h-5 rounded flex items-center justify-center text-[0.65rem] font-mono shrink-0 ${
                        isActive
                          ? 'bg-brand-500 text-white'
                          : 'bg-surface-tertiary text-zinc-500'
                      }`}
                    >
                      {num}
                    </span>
                    {!isCollapsed && (
                      <span className='truncate'>{lesson.title}</span>
                    )}
                  </button>
                )
              })}
            </div>
          ))}
        </nav>

        {/* Desktop Collapse Toggle */}
        <div className='hidden md:flex p-3 border-t border-surface-border justify-end'>
          <button
            onClick={onToggleCollapse}
            className={`p-2 rounded text-zinc-400 hover:bg-surface-tertiary hover:text-white transition-all ${isCollapsed ? 'mx-auto' : ''}`}
            title={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
          >
            {isCollapsed ? '»' : '«'}
          </button>
        </div>
      </aside>
    </>
  )
}
