import { java } from '@codemirror/lang-java'
import { EditorState } from '@codemirror/state'
import { oneDark } from '@codemirror/theme-one-dark'
import { EditorView, basicSetup } from 'codemirror'
import { useCallback, useEffect, useRef, useState } from 'react'
import { executeJavaCode } from '../utils/pistonApi.js'

const PLAYGROUND_DEFAULT = `public class Main {
    public static void main(String[] args) {
        // Write your Java code here!
        // Click "Run" to see the output below.
        
        System.out.println("Hello! Welcome to CodeLab!");
        System.out.println("Try changing this message and run again!");
    }
}`

export default function Playground() {
  const editorRef = useRef(null)
  const viewRef = useRef(null)
  const [output, setOutput] = useState(null)
  const [isError, setIsError] = useState(false)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    if (!editorRef.current) return
    const state = EditorState.create({
      doc: PLAYGROUND_DEFAULT,
      extensions: [
        basicSetup,
        java(),
        oneDark,
        EditorView.theme({
          '&': { backgroundColor: 'transparent', height: '100%' },
          '.cm-scroller': {
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '14px',
          },
          '.cm-gutters': {
            backgroundColor: 'transparent',
            borderRight: '1px solid #1e293b',
          },
        }),
        EditorView.lineWrapping,
      ],
    })
    const view = new EditorView({ state, parent: editorRef.current })
    viewRef.current = view
    return () => view.destroy()
  }, [])

  const handleRun = useCallback(async () => {
    if (isRunning || !viewRef.current) return
    setIsRunning(true)
    setOutput(null)
    const code = viewRef.current.state.doc.toString()
    const result = await executeJavaCode(code)
    setOutput(result.output)
    setIsError(!result.success)
    setIsRunning(false)
  }, [isRunning])

  const handleClear = useCallback(() => {
    setOutput(null)
    setIsError(false)
  }, [])

  return (
    <div className='max-w-[1000px] mx-auto px-4 sm:px-7 py-6 sm:py-8 pb-20'>
      {/* Header */}
      <div className='mb-6'>
        <span className='inline-flex items-center gap-1.5 bg-brand-500/10 text-brand-400 px-3 py-1 rounded-full text-xs font-semibold mb-3 border border-brand-500/20'>
          🧪 Playground
        </span>
        <h1 className='text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-2 tracking-tight'>
          Java Playground
        </h1>
        <p className='text-zinc-400 text-sm leading-relaxed'>
          Write any Java code you want and run it instantly. This is your free
          space to experiment, practice, and test things out!
        </p>
      </div>

      {/* Editor */}
      <div className='rounded-lg overflow-hidden border border-surface-border'>
        {/* Toolbar */}
        <div className='flex items-center justify-between px-4 py-2 bg-surface-secondary border-b border-surface-border'>
          <div className='flex items-center gap-2'>
            <span className='text-xs text-zinc-500 font-medium font-mono'>
              Main.java — Write your code here
            </span>
          </div>
          <div className='flex gap-2'>
            <button
              onClick={handleClear}
              className='px-3 py-1.5 text-xs text-zinc-400 border border-surface-border rounded hover:bg-surface-tertiary hover:text-zinc-200 transition-all font-sans'
            >
              Clear Output
            </button>
            <button
              onClick={handleRun}
              disabled={isRunning}
              className={`flex items-center gap-1.5 px-5 py-1.5 text-xs font-semibold text-white rounded transition-all font-sans ${
                isRunning
                  ? 'bg-brand-700 opacity-70 cursor-not-allowed'
                  : 'bg-brand-600 hover:bg-brand-500'
              }`}
            >
              {isRunning ? (
                <>
                  <span className='w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin' />
                  Running...
                </>
              ) : (
                <>Run Code</>
              )}
            </button>
          </div>
        </div>

        {/* Code area */}
        <div
          className='bg-surface-editor min-h-[350px] max-h-[500px] overflow-auto'
          ref={editorRef}
        />

        {/* Output */}
        <div className='bg-surface-output border-t border-surface-border px-4 py-3 min-h-[80px]'>
          <div className='text-[0.65rem] font-bold tracking-widest uppercase text-zinc-600 mb-2'>
            Output
          </div>
          {output !== null ? (
            <pre
              className={`font-mono text-sm whitespace-pre-wrap break-words leading-relaxed ${isError ? 'text-red-400' : 'text-brand-300'}`}
            >
              {output}
            </pre>
          ) : (
            <p className='text-zinc-700 text-sm italic'>
              Your output will appear here when you click "Run Code"...
            </p>
          )}
        </div>
      </div>

      {/* Tips */}
      <div className='mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3'>
        <div className='bg-surface-secondary border border-surface-border rounded-lg p-4'>
          <div className='text-lg mb-2 grayscale opacity-80'>💡</div>
          <h4 className='text-sm font-semibold text-zinc-200 mb-1'>
            Quick Tip
          </h4>
          <p className='text-xs text-zinc-500'>
            Your code must have a{' '}
            <code className='text-brand-300 bg-surface-tertiary px-1 rounded border border-surface-border'>
              public class Main
            </code>{' '}
            with a{' '}
            <code className='text-brand-300 bg-surface-tertiary px-1 rounded border border-surface-border'>
              main
            </code>{' '}
            method.
          </p>
        </div>
        <div className='bg-surface-secondary border border-surface-border rounded-lg p-4'>
          <div className='text-lg mb-2 grayscale opacity-80'>📝</div>
          <h4 className='text-sm font-semibold text-zinc-200 mb-1'>
            Print Output
          </h4>
          <p className='text-xs text-zinc-500'>
            Use{' '}
            <code className='text-brand-300 bg-surface-tertiary px-1 rounded border border-surface-border'>
              System.out.println()
            </code>{' '}
            to print text to the output.
          </p>
        </div>
        <div className='bg-surface-secondary border border-surface-border rounded-lg p-4'>
          <div className='text-lg mb-2 grayscale opacity-80'>🐛</div>
          <h4 className='text-sm font-semibold text-zinc-200 mb-1'>
            Got an Error?
          </h4>
          <p className='text-xs text-zinc-500'>
            Read the red error message carefully — it tells you which line has
            the problem!
          </p>
        </div>
      </div>
    </div>
  )
}
