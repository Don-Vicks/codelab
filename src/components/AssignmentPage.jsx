import { assignments } from '../data/assignments.js'
import AssignmentView from './AssignmentView.jsx'

export default function AssignmentPage() {
  return (
    <div className='min-h-screen bg-[#0a0e17] text-slate-200 font-sans'>
      {/* Simple header */}
      <header className='sticky top-0 z-50 bg-surface-secondary/80 backdrop-blur-md border-b border-surface-border'>
        <div className='max-w-[960px] mx-auto px-4 sm:px-7 h-14 flex items-center justify-between'>
          <a
            href='/'
            className='flex items-center gap-2.5 hover:opacity-80 transition-opacity'
          >
            <div className='w-8 h-8 bg-brand-600 rounded-md flex items-center justify-center text-xs font-bold text-white'>
              {'</>'}
            </div>
            <span className='font-bold text-zinc-100 text-[1.05rem] tracking-tight'>
              CodeLab
            </span>
          </a>
          <span className='text-xs text-zinc-500 font-medium bg-surface-tertiary px-3 py-1 rounded-full'>
            ASSIGNMENT
          </span>
        </div>
      </header>

      {/* Assignment content */}
      <main>
        <AssignmentView assignment={assignments[1]} />
      </main>

      {/* Simple footer */}
      <footer className='border-t border-surface-border py-6 text-center'>
        <p className='text-xs text-zinc-600'>
          CodeLab — Learn Programming Interactively
        </p>
      </footer>
    </div>
  )
}
