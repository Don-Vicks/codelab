import { allLessons, modules } from '../data/index.js'

export default function HomePage({ onStartLesson, onOpenPlayground }) {
  return (
    <div>
      {/* Hero */}
      <div className='relative px-4 sm:px-7 py-20 sm:py-24 text-center overflow-hidden bg-surface-primary border-b border-surface-border'>
        <div className='relative z-10'>
          <span className='inline-flex items-center gap-2 bg-surface-secondary border border-surface-border px-3 py-1 rounded-full text-xs text-zinc-400 font-medium mb-6'>
            <span className='w-2 h-2 rounded-full bg-brand-500'></span>
            Free Interactive Programming Course
          </span>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 max-w-[800px] mx-auto tracking-tight'>
            Learn Programming <br className='hidden sm:block' />
            <span className='text-zinc-500'>the Easy Way.</span>
          </h1>
          <p className='text-lg sm:text-xl text-zinc-400 max-w-[600px] mx-auto mb-10 leading-relaxed'>
            Simple lessons that actually make sense. Write and run code right
            here in your browser — no downloads, no setup, no stress.
          </p>
          <div className='flex justify-center gap-4 flex-wrap'>
            <button
              onClick={() => onStartLesson(allLessons[0].id)}
              className='inline-flex items-center gap-2 px-8 py-3 bg-brand-600 rounded-md text-white font-semibold hover:bg-brand-500 transition-all'
            >
              Start Learning
            </button>
            <button
              onClick={onOpenPlayground}
              className='inline-flex items-center gap-2 px-8 py-3 border border-surface-border bg-surface-secondary rounded-md text-zinc-300 font-medium hover:bg-surface-tertiary transition-all'
            >
              Open Playground
            </button>
            <button
              onClick={() =>
                document
                  .getElementById('modules')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className='inline-flex items-center gap-2 px-8 py-3 border border-transparent text-zinc-500 font-medium hover:text-zinc-300 transition-all'
            >
              Browse Topics
            </button>
          </div>

          {/* Stats */}
          {/* Stats */}
          <div className='flex justify-center gap-12 sm:gap-24 mt-16 pt-10 border-t border-surface-border flex-wrap'>
            <div className='text-center'>
              <div className='text-3xl font-bold text-white tracking-tight'>
                {allLessons.length}
              </div>
              <div className='text-xs font-medium uppercase tracking-wider text-zinc-500 mt-1'>
                Lessons
              </div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-white tracking-tight'>
                {modules.length}
              </div>
              <div className='text-xs font-medium uppercase tracking-wider text-zinc-500 mt-1'>
                Modules
              </div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-white tracking-tight'>
                ∞
              </div>
              <div className='text-xs font-medium uppercase tracking-wider text-zinc-500 mt-1'>
                Code Runs
              </div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-white tracking-tight'>
                $0
              </div>
              <div className='text-xs font-medium uppercase tracking-wider text-zinc-500 mt-1'>
                Cost
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Module Grid */}
      <div id='modules' className='px-4 sm:px-7 py-20 max-w-[1000px] mx-auto'>
        <h2 className='text-2xl font-bold text-white mb-2'>Course Modules</h2>
        <p className='text-zinc-500 mb-10 text-base'>
          {allLessons.length} lessons across {modules.length} modules — from
          absolute zero to writing real programs
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {modules.map((mod, i) => (
            <button
              key={i}
              onClick={() => onStartLesson(mod.lessons[0].id)}
              className='text-left bg-surface-secondary border border-surface-border rounded-lg p-6 hover:border-zinc-600 transition-all group'
            >
              <div
                className={`w-10 h-10 rounded-md flex items-center justify-center text-xl mb-4 bg-surface-tertiary text-zinc-400 group-hover:text-white transition-colors`}
              >
                {mod.icon}
              </div>
              <h3 className='text-lg font-semibold text-zinc-200 mb-2 group-hover:text-white'>
                {mod.title}
              </h3>
              <p className='text-sm text-zinc-500 leading-relaxed mb-4'>
                {mod.lessons.length} lesson{mod.lessons.length > 1 ? 's' : ''}
              </p>
              <div className='text-xs text-zinc-500 font-medium group-hover:text-brand-400 transition-colors uppercase tracking-wide'>
                Start Module →
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
