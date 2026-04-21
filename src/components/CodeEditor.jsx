import { java } from '@codemirror/lang-java'
import { EditorState } from '@codemirror/state'
import { oneDark } from '@codemirror/theme-one-dark'
import { EditorView, basicSetup } from 'codemirror'
import { useCallback, useEffect, useRef, useState } from 'react'
import { executeJavaCode } from '../utils/pistonApi.js'

export default function CodeEditor({ defaultCode, title, language = 'java' }) {
  const editorRef = useRef(null)
  const viewRef = useRef(null)
  const [output, setOutput] = useState(null)
  const [previewContent, setPreviewContent] = useState('')
  const [isError, setIsError] = useState(false)
  const [isRunning, setIsRunning] = useState(false)
  const [initialCode] = useState(defaultCode)

  const isWeb = ['html', 'css', 'javascript'].includes(language)

  useEffect(() => {
    if (!editorRef.current) return

    const state = EditorState.create({
      doc: initialCode,
      extensions: [
        basicSetup,
        // Only use java() if it's actually java
        language === 'java' ? java() : [],
        oneDark,
        EditorView.theme({
          '&': {
            backgroundColor: 'transparent',
            height: 'auto',
            minHeight: '120px',
          },
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
  }, [initialCode, language])

  const handleRun = useCallback(async () => {
    if (isRunning || !viewRef.current) return
    setIsRunning(true)
    setOutput(null)
    setPreviewContent('')

    const code = viewRef.current.state.doc.toString()

    if (isWeb) {
      // For web languages, we show a preview
      if (language === 'html') {
        setPreviewContent(code)
      } else if (language === 'javascript') {
        // Run JS and capture console.log
        try {
          let logs = []
          const originalLog = console.log
          console.log = (...args) => {
            logs.push(args.map((a) => (typeof a === 'object' ? JSON.stringify(a) : a)).join(' '))
          }
          new Function(code)()
          console.log = originalLog
          setOutput(logs.join('\n') || '(Code executed with no console output)')
          setIsError(false)
        } catch (err) {
          setOutput(err.message)
          setIsError(true)
        }
      }
      setIsRunning(false)
    } else {
      // For Java, use the API
      const result = await executeJavaCode(code)
      setOutput(result.output)
      setIsError(!result.success)
      setIsRunning(false)
    }
  }, [isRunning, isWeb, language])

  const handleReset = useCallback(() => {
    if (!viewRef.current) return
    viewRef.current.dispatch({
      changes: {
        from: 0,
        to: viewRef.current.state.doc.length,
        insert: initialCode,
      },
    })
    setOutput(null)
    setPreviewContent('')
    setIsError(false)
  }, [initialCode])

  return (
    <div className='rounded-lg overflow-hidden border border-surface-border mb-6'>
      {/* Header */}
      <div className='flex items-center justify-between px-4 py-2 bg-surface-secondary border-b border-surface-border'>
        <div className='flex items-center gap-2'>
          <span className='text-xs text-zinc-500 font-mono'>
            {title || (language === 'java' ? 'Main.java' : language === 'html' ? 'index.html' : 'script.js')}
          </span>
        </div>
        <div className='flex gap-2'>
          <button
            onClick={handleReset}
            className='px-3 py-1.5 text-xs text-zinc-400 border border-surface-border rounded hover:bg-surface-tertiary hover:text-zinc-200 transition-all font-sans'
          >
            Reset
          </button>
          <button
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white rounded transition-all font-sans ${
              isRunning ? 'bg-brand-700 opacity-70 cursor-not-allowed' : 'bg-brand-600 hover:bg-brand-500'
            }`}
          >
            {isRunning ? (
              <>
                <span className='w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin' />
                Running...
              </>
            ) : (
              <>{isWeb && language !== 'javascript' ? 'Preview' : 'Run Code'}</>
            )}
          </button>
        </div>
      </div>

      {/* Editor */}
      <div className='bg-surface-editor min-h-[120px]' ref={editorRef} />

      {/* Output / Preview */}
      <div className='bg-surface-output border-t border-surface-border'>
        <div className='px-4 py-1.5 border-b border-surface-border/50'>
          <div className='text-[0.65rem] font-bold tracking-widest uppercase text-zinc-600'>
            {previewContent ? 'Live Preview' : 'Output'}
          </div>
        </div>

        <div className='px-4 py-3 min-h-[48px]'>
          {previewContent ? (
            <div className='rounded bg-white p-4 h-full min-h-[100px]'>
              <iframe
                title='preview'
                srcDoc={previewContent}
                className='w-full border-none min-h-[100px]'
                sandbox='allow-scripts'
              />
            </div>
          ) : output !== null ? (
            <pre
              className={`font-mono text-sm whitespace-pre-wrap break-words leading-relaxed ${isError ? 'text-red-400' : 'text-brand-300'}`}
            >
              {output}
            </pre>
          ) : (
            <p className='text-zinc-700 text-sm italic'>
              Click "{isWeb && language !== 'javascript' ? 'Preview' : 'Run Code'}" to see the results...
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
