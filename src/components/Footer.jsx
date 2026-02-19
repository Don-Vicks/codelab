export default function Footer() {
  const ides = [
    {
      icon: '🧠',
      name: 'IntelliJ IDEA',
      description:
        'The most popular Java IDE. Has a free version. Very beginner friendly.',
      link: 'https://www.jetbrains.com/idea/download/',
    },
    {
      icon: '🌑',
      name: 'Eclipse',
      description:
        'Free and open-source. Used by many schools and universities.',
      link: 'https://www.eclipse.org/downloads/',
    },
    {
      icon: '💜',
      name: 'VS Code',
      description:
        'Lightweight and fast. Install the "Extension Pack for Java" to get started.',
      link: 'https://code.visualstudio.com/',
    },
    {
      icon: '🟧',
      name: 'NetBeans',
      description:
        'Free and simple. Great if you want something straightforward.',
      link: 'https://netbeans.apache.org/download/',
    },
  ]

  return (
    <footer className='bg-surface-primary border-t border-surface-border px-4 sm:px-7 pt-12 pb-6'>
      <div className='max-w-[900px] mx-auto'>
        <h3 className='text-xl font-bold text-white text-center mb-2'>
          💻 Recommended IDEs
        </h3>
        <p className='text-center text-zinc-500 mb-10 text-sm'>
          Want to write code on your own computer? Download one of these free
          tools.
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12'>
          {ides.map((ide, i) => (
            <div
              key={i}
              className='bg-surface-secondary border border-surface-border rounded-lg p-5 text-center hover:border-zinc-500 transition-all group'
            >
              <div className='text-3xl mb-4 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all'>
                {ide.icon}
              </div>
              <h4 className='text-sm font-semibold text-zinc-200 mb-2'>
                {ide.name}
              </h4>
              <p className='text-xs text-zinc-500 leading-relaxed mb-4 min-h-[40px]'>
                {ide.description}
              </p>
              <a
                href={ide.link}
                target='_blank'
                rel='noopener noreferrer'
                className='text-xs text-brand-400 font-medium hover:text-brand-300 uppercase tracking-wide'
              >
                Download →
              </a>
            </div>
          ))}
        </div>

        <div className='text-center pt-8 border-t border-surface-border text-zinc-600 text-xs space-y-2'>
          <p>
            Built by{' '}
            <a
              href='https://donvicks.dev'
              target='_blank'
              rel='noopener noreferrer'
              className='text-zinc-400 hover:text-brand-400 font-medium transition-colors'
            >
              Don Vicks
            </a>
          </p>
          <p>© {new Date().getFullYear()} CodeLab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
