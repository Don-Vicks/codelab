import CodeEditor from './CodeEditor.jsx'

export default function LessonView({
  lesson,
  onNavigate,
  prevLesson,
  nextLesson,
}) {
  if (!lesson) return null

  return (
    <div className='max-w-[860px] mx-auto px-4 sm:px-7 py-6 sm:py-8 pb-20 animate-fade-in-up'>
      {/* Breadcrumb */}
      <div className='flex items-center gap-2 text-xs text-zinc-500 mb-5'>
        <span className='text-brand-400'>{lesson.module}</span>
        <span>›</span>
        <span>{lesson.title}</span>
      </div>

      {/* Header */}
      <div className='mb-8'>
        <span className='inline-flex items-center gap-1.5 bg-brand-500/10 text-brand-400 px-3 py-1 rounded-full text-xs font-semibold mb-3 border border-brand-500/20'>
          📖 Lesson
        </span>
        <h1 className='text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-3 tracking-tight'>
          {lesson.title}
        </h1>
        <p className='text-lg text-zinc-400 leading-relaxed'>
          {lesson.description}
        </p>
      </div>

      {/* Sections */}
      {lesson.sections.map((section, i) => (
        <div key={i} className='mb-9'>
          {section.type === 'text' && (
            <div>
              {section.title && (
                <h2 className='text-xl font-bold text-white mb-3 pb-2 border-b border-surface-border'>
                  {section.title}
                </h2>
              )}
              <div className='text-zinc-400 leading-[1.8] space-y-3'>
                {section.content.split('\n\n').map((para, j) => (
                  <p key={j} className='whitespace-pre-line'>
                    {para.split(/(`[^`]+`)/).map((part, k) =>
                      part.startsWith('`') && part.endsWith('`') ? (
                        <code
                          key={k}
                          className='bg-surface-tertiary px-1.5 py-0.5 rounded text-sm text-brand-300 font-mono border border-surface-border'
                        >
                          {part.slice(1, -1)}
                        </code>
                      ) : part.startsWith('**') && part.endsWith('**') ? (
                        <strong key={k} className='text-zinc-200 font-semibold'>
                          {part.slice(2, -2)}
                        </strong>
                      ) : (
                        <span key={k}>{part}</span>
                      ),
                    )}
                  </p>
                ))}
              </div>
            </div>
          )}

          {section.type === 'concept-cards' && (
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
              {section.cards.map((card, j) => (
                <div
                  key={j}
                  className='bg-surface-secondary border border-surface-border rounded-lg p-4 hover:border-zinc-500 transition-all'
                >
                  <div className='text-2xl mb-2 grayscale opacity-80'>
                    {card.icon}
                  </div>
                  <h4 className='text-sm font-semibold text-zinc-200 mb-1'>
                    {card.title}
                  </h4>
                  <p className='text-xs text-zinc-500 leading-relaxed'>
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {section.type === 'editor' && (
            <div>
              {section.title && (
                <h3 className='text-lg font-semibold text-zinc-200 mb-3'>
                  {section.title}
                </h3>
              )}
              <CodeEditor
                defaultCode={section.defaultCode}
                language={lesson.language}
              />
            </div>
          )}

          {section.type === 'info' && (
            <div
              className={`rounded border-l-2 px-5 py-4 ${
                section.variant === 'tip'
                  ? 'border-emerald-500 bg-surface-secondary'
                  : section.variant === 'warning'
                    ? 'border-amber-500 bg-surface-secondary'
                    : 'border-brand-500 bg-surface-secondary'
              }`}
            >
              <div
                className={`text-xs font-bold tracking-wider uppercase mb-1.5 ${
                  section.variant === 'tip'
                    ? 'text-emerald-500'
                    : section.variant === 'warning'
                      ? 'text-amber-500'
                      : 'text-brand-500'
                }`}
              >
                {section.title}
              </div>
              <p className='text-sm text-zinc-400 leading-relaxed'>
                {section.content.split(/(`[^`]+`)/).map((part, k) =>
                  part.startsWith('`') && part.endsWith('`') ? (
                    <code
                      key={k}
                      className='bg-surface-tertiary px-1.5 py-0.5 rounded text-xs text-zinc-300 font-mono border border-surface-border'
                    >
                      {part.slice(1, -1)}
                    </code>
                  ) : (
                    <span key={k}>{part}</span>
                  ),
                )}
              </p>
            </div>
          )}

          {section.type === 'table' && (
            <div className='overflow-x-auto rounded border border-surface-border mb-5'>
              <table className='w-full border-collapse text-sm'>
                <thead>
                  <tr>
                    {section.headers.map((h, j) => (
                      <th
                        key={j}
                        className='bg-surface-secondary px-4 py-2.5 text-left text-xs font-semibold text-zinc-300 border-b border-surface-border'
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.rows.map((row, j) => (
                    <tr
                      key={j}
                      className='border-b border-surface-border last:border-b-0'
                    >
                      {row.map((cell, k) => (
                        <td key={k} className='px-4 py-2.5 text-zinc-400'>
                          {cell.startsWith('`') && cell.endsWith('`') ? (
                            <code className='bg-surface-tertiary px-2 py-0.5 rounded font-mono text-zinc-300 text-xs border border-surface-border'>
                              {cell.slice(1, -1)}
                            </code>
                          ) : (
                            cell
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ))}

      {/* Navigation */}
      <div className='flex flex-col sm:flex-row justify-between gap-4 mt-12 pt-6 border-t border-surface-border'>
        {prevLesson ? (
          <button
            onClick={() => onNavigate(prevLesson.id)}
            className='flex items-center gap-2 px-5 py-3 bg-surface-secondary border border-surface-border rounded-lg text-zinc-400 text-sm hover:bg-surface-tertiary hover:text-white transition-all'
          >
            ← {prevLesson.title}
          </button>
        ) : (
          <div />
        )}
        {nextLesson && (
          <button
            onClick={() => onNavigate(nextLesson.id)}
            className='flex items-center gap-2 px-5 py-3 bg-brand-600 border border-brand-600 rounded-lg text-white text-sm font-medium hover:bg-brand-500 transition-all sm:ml-auto'
          >
            {nextLesson.title} →
          </button>
        )}
      </div>
    </div>
  )
}
