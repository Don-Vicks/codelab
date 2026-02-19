export default function Header({ onToggleSidebar, onSelectView }) {
  return (
    <header className='sticky top-0 z-[100] h-16 bg-surface-primary border-b border-surface-border flex items-center justify-between px-6'>
      <div className='flex items-center gap-3'>
        <button
          onClick={onToggleSidebar}
          className='md:hidden text-zinc-400 text-xl p-1 rounded hover:bg-surface-tertiary hover:text-white transition-colors'
        >
          ☰
        </button>
        <div className='flex items-center gap-2.5'>
          <div className='w-9 h-9 bg-brand-600 rounded-md flex items-center justify-center text-xs font-extrabold text-white'>
            {'</>'}
          </div>
          <span className='font-bold text-zinc-100 text-lg hidden sm:inline tracking-tight'>
            CodeLab
          </span>
        </div>
      </div>
      <div className='flex items-center gap-3'>
        <button
          onClick={() => onSelectView('playground')}
          className='hidden sm:flex items-center gap-2 px-3 py-1.5 bg-surface-secondary border border-surface-border rounded-lg text-xs font-semibold text-zinc-300 hover:border-brand-500 hover:text-brand-400 transition-all'
        >
          <span>🧪</span>
          <span>Playground</span>
        </button>
        <span className='bg-surface-secondary border border-surface-border text-zinc-400 px-3 py-1 rounded-full text-[0.7rem] font-semibold tracking-wide uppercase'>
          Java
        </span>
      </div>
    </header>
  )
}
