import { useState } from 'react'
import CodeEditor from './CodeEditor.jsx'

export default function AssignmentView({ assignment }) {
  // Student info
  const [studentName, setStudentName] = useState('')
  const [studentPhone, setStudentPhone] = useState('')
  const [started, setStarted] = useState(false)

  // Quiz state
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submittedAt, setSubmittedAt] = useState(null)

  if (!assignment) return null

  const objSection = assignment.sections.find((s) => s.type === 'obj')
  const codingSection = assignment.sections.find((s) => s.type === 'coding')

  const totalQuestions = objSection ? objSection.questions.length : 0
  const correctCount = objSection
    ? objSection.questions.filter((q) => selectedAnswers[q.id] === q.answer)
        .length
    : 0
  const percentage = totalQuestions
    ? Math.round((correctCount / totalQuestions) * 100)
    : 0

  const handleStart = () => {
    if (studentName.trim() && studentPhone.trim()) {
      setStarted(true)
    }
  }

  const handleSelect = (questionId, optionIndex) => {
    if (submitted) return
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionIndex }))
  }

  const handleSubmit = () => {
    setSubmitted(true)
    setSubmittedAt(new Date())
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleReset = () => {
    setSelectedAnswers({})
    setSubmitted(false)
    setSubmittedAt(null)
  }

  // ─── Student info form ───
  if (!started) {
    return (
      <div className='max-w-[480px] mx-auto px-4 sm:px-7 py-20 animate-fade-in-up'>
        <div className='bg-surface-secondary border border-surface-border rounded-xl p-8'>
          <div className='text-center mb-8'>
            <span className='inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-400 px-3 py-1 rounded-full text-xs font-semibold mb-4 border border-amber-500/20'>
              📝 Assignment
            </span>
            <h1 className='text-2xl sm:text-3xl font-extrabold text-white mb-2 tracking-tight'>
              {assignment.title}
            </h1>
            <p className='text-sm text-zinc-400'>{assignment.subtitle}</p>
          </div>

          <div className='space-y-4'>
            <div>
              <label className='block text-sm font-medium text-zinc-300 mb-1.5'>
                Full Name
              </label>
              <input
                type='text'
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder='Enter your full name'
                className='w-full px-4 py-3 bg-surface-primary border border-surface-border rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-brand-500 transition-colors text-sm'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-zinc-300 mb-1.5'>
                Phone Number
              </label>
              <input
                type='tel'
                value={studentPhone}
                onChange={(e) => setStudentPhone(e.target.value)}
                placeholder='Enter your phone number'
                className='w-full px-4 py-3 bg-surface-primary border border-surface-border rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-brand-500 transition-colors text-sm'
              />
            </div>
          </div>

          <div className='mt-4 p-3 rounded-md bg-surface-primary border border-surface-border'>
            <div className='text-xs text-zinc-500 space-y-1'>
              <p>• {totalQuestions} objective questions (multiple choice)</p>
              <p>
                • {codingSection ? codingSection.questions.length : 0} coding
                questions
              </p>
              <p>• Your score will be shown after you submit</p>
            </div>
          </div>

          <button
            onClick={handleStart}
            disabled={!studentName.trim() || !studentPhone.trim()}
            className={`w-full mt-6 py-3 rounded-lg text-white font-semibold transition-all ${
              studentName.trim() && studentPhone.trim()
                ? 'bg-brand-600 hover:bg-brand-500 cursor-pointer'
                : 'bg-zinc-700 cursor-not-allowed opacity-50'
            }`}
          >
            Start Assignment
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className='max-w-[860px] mx-auto px-4 sm:px-7 py-6 sm:py-8 pb-20 animate-fade-in-up'>
      {/* Header */}
      <div className='mb-8'>
        <span className='inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-400 px-3 py-1 rounded-full text-xs font-semibold mb-3 border border-amber-500/20'>
          📝 Assignment
        </span>
        <h1 className='text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-3 tracking-tight'>
          {assignment.title}
        </h1>
        <p className='text-lg text-zinc-400 leading-relaxed'>
          {assignment.subtitle}
        </p>
        <div className='mt-3 flex items-center gap-4 text-sm text-zinc-500'>
          <span>👤 {studentName}</span>
          <span>📱 {studentPhone}</span>
        </div>
      </div>

      {/* ─── Results Card (screenshot-friendly) ─── */}
      {submitted && (
        <div
          id='results-card'
          className='mb-8 rounded-xl border-2 overflow-hidden'
          style={{
            borderColor:
              percentage >= 70
                ? '#10b981'
                : percentage >= 50
                  ? '#f59e0b'
                  : '#ef4444',
          }}
        >
          {/* Card header */}
          <div
            className='px-6 py-4'
            style={{
              background:
                percentage >= 70
                  ? 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(16,185,129,0.05))'
                  : percentage >= 50
                    ? 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(245,158,11,0.05))'
                    : 'linear-gradient(135deg, rgba(239,68,68,0.15), rgba(239,68,68,0.05))',
            }}
          >
            <div className='flex items-center justify-between'>
              <div className='text-xs font-bold tracking-wider uppercase text-zinc-400'>
                CodeLab — {assignment.title} Result
              </div>
              <div className='text-xs text-zinc-500'>
                {submittedAt &&
                  submittedAt.toLocaleDateString('en-NG', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
              </div>
            </div>
          </div>

          {/* Card body */}
          <div className='px-6 py-5 bg-surface-secondary'>
            <div className='flex items-center justify-between flex-wrap gap-6'>
              {/* Student info */}
              <div>
                <div className='text-2xl font-bold text-white mb-1'>
                  {studentName}
                </div>
                <div className='text-sm text-zinc-500'>📱 {studentPhone}</div>
              </div>

              {/* Score */}
              <div className='text-center'>
                <div
                  className={`text-5xl font-extrabold tracking-tight ${
                    percentage >= 70
                      ? 'text-emerald-400'
                      : percentage >= 50
                        ? 'text-amber-400'
                        : 'text-red-400'
                  }`}
                >
                  {percentage}%
                </div>
                <div className='text-sm text-zinc-400 mt-1'>
                  {correctCount} / {totalQuestions} correct
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className='mt-4 pt-4 border-t border-surface-border flex items-center justify-between'>
              <div
                className={`text-sm font-semibold ${
                  percentage >= 70
                    ? 'text-emerald-400'
                    : percentage >= 50
                      ? 'text-amber-400'
                      : 'text-red-400'
                }`}
              >
                {percentage >= 70
                  ? '🎉 Great job!'
                  : percentage >= 50
                    ? '👍 Good effort!'
                    : '💪 Keep practicing!'}
              </div>
              <div className='text-xs text-zinc-600'>
                Screenshot this result card
              </div>
            </div>
          </div>
        </div>
      )}

      {submitted && (
        <button
          onClick={handleReset}
          className='mb-8 px-4 py-2 text-sm bg-surface-tertiary border border-surface-border rounded-md text-zinc-300 hover:bg-surface-secondary hover:text-white transition-all'
        >
          Try Again
        </button>
      )}

      {/* Section A: OBJ */}
      {objSection && (
        <div className='mb-12'>
          <h2 className='text-xl font-bold text-white mb-2 pb-2 border-b border-surface-border'>
            {objSection.title}
          </h2>
          <p className='text-sm text-zinc-500 mb-6'>
            {objSection.instructions}
          </p>

          <div className='space-y-6'>
            {objSection.questions.map((q) => {
              const isAnswered = selectedAnswers[q.id] !== undefined
              const isCorrect = selectedAnswers[q.id] === q.answer

              return (
                <div
                  key={q.id}
                  className={`bg-surface-secondary border rounded-lg p-5 transition-all ${
                    submitted && isAnswered
                      ? isCorrect
                        ? 'border-emerald-500/40'
                        : 'border-red-500/40'
                      : 'border-surface-border'
                  }`}
                >
                  <div className='flex gap-3 mb-4'>
                    <span className='w-7 h-7 rounded bg-surface-tertiary text-zinc-400 flex items-center justify-center text-xs font-mono shrink-0'>
                      {q.id}
                    </span>
                    <p className='text-zinc-200 font-medium leading-relaxed'>
                      {q.question}
                    </p>
                  </div>

                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 ml-10'>
                    {q.options.map((opt, idx) => {
                      const letter = String.fromCharCode(65 + idx)
                      const isSelected = selectedAnswers[q.id] === idx
                      const isThisCorrect = q.answer === idx

                      let optionClass =
                        'border-surface-border text-zinc-400 hover:border-zinc-500 hover:text-zinc-200'

                      if (isSelected && !submitted) {
                        optionClass =
                          'border-brand-500 text-brand-300 bg-brand-500/5'
                      } else if (submitted && isThisCorrect) {
                        optionClass =
                          'border-emerald-500/50 text-emerald-300 bg-emerald-500/5'
                      } else if (submitted && isSelected && !isThisCorrect) {
                        optionClass =
                          'border-red-500/50 text-red-300 bg-red-500/5'
                      }

                      return (
                        <button
                          key={idx}
                          onClick={() => handleSelect(q.id, idx)}
                          disabled={submitted}
                          className={`flex items-center gap-2.5 text-left px-4 py-3 rounded-md border text-sm transition-all ${optionClass} ${submitted ? 'cursor-default' : 'cursor-pointer'}`}
                        >
                          <span className='w-5 h-5 rounded bg-surface-tertiary text-[0.65rem] font-mono flex items-center justify-center shrink-0'>
                            {letter}
                          </span>
                          <span className='font-mono text-xs'>{opt}</span>
                        </button>
                      )
                    })}
                  </div>

                  {submitted && isAnswered && !isCorrect && (
                    <div className='mt-3 ml-10 text-xs text-emerald-400'>
                      Correct answer: {String.fromCharCode(65 + q.answer)}.{' '}
                      {q.options[q.answer]}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {!submitted && (
            <button
              onClick={handleSubmit}
              disabled={Object.keys(selectedAnswers).length < totalQuestions}
              className={`mt-8 px-8 py-3 rounded-md text-white font-semibold transition-all ${
                Object.keys(selectedAnswers).length >= totalQuestions
                  ? 'bg-brand-600 hover:bg-brand-500 cursor-pointer'
                  : 'bg-zinc-700 cursor-not-allowed opacity-50'
              }`}
            >
              Submit Answers ({Object.keys(selectedAnswers).length}/
              {totalQuestions})
            </button>
          )}
        </div>
      )}

      {/* Section B: Coding */}
      {codingSection && (
        <div>
          <h2 className='text-xl font-bold text-white mb-2 pb-2 border-b border-surface-border'>
            {codingSection.title}
          </h2>
          <p className='text-sm text-zinc-500 mb-6'>
            {codingSection.instructions}
          </p>

          <div className='space-y-8'>
            {codingSection.questions.map((q) => (
              <div
                key={q.id}
                className='bg-surface-secondary border border-surface-border rounded-lg p-5'
              >
                <div className='flex gap-3 mb-4'>
                  <span className='w-7 h-7 rounded bg-amber-500/10 text-amber-400 flex items-center justify-center text-xs font-mono shrink-0'>
                    {q.id}
                  </span>
                  <p className='text-zinc-200 font-medium leading-relaxed'>
                    {q.question}
                  </p>
                </div>

                {q.expectedOutput && (
                  <div className='ml-10 mb-4 bg-surface-primary border border-surface-border rounded-md p-3'>
                    <div className='text-[0.65rem] font-bold tracking-wider uppercase text-zinc-500 mb-1.5'>
                      Expected Output
                    </div>
                    <pre className='text-sm text-emerald-300 font-mono whitespace-pre-wrap'>
                      {q.expectedOutput}
                    </pre>
                  </div>
                )}

                <div className='ml-10'>
                  <CodeEditor defaultCode={q.starterCode} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
