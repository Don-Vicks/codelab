const WANDBOX_API = 'https://wandbox.org/api/compile.json'

export async function executeJavaCode(sourceCode) {
  try {
    // Wandbox uses prog.java as filename, so we need to handle "public class"
    // by removing the public modifier to prevent Java compiler errors.
    let code = sourceCode
    code = code.replace(/public\s+class\s+(\w+)/g, 'class $1')

    const response = await fetch(WANDBOX_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        code: code,
        compiler: 'openjdk-jdk-21+35',
        save: false,
      }),
    })

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`)
    }

    const data = await response.json()

    // Check for compilation errors
    if (data.compiler_error && data.compiler_error.trim()) {
      // Clean up error messages — replace 'prog.java' with 'Main.java' for clarity
      const cleanError = data.compiler_error.replace(/prog\.java/g, 'Main.java')
      return {
        success: false,
        output: cleanError,
      }
    }

    // Check for runtime errors
    if (data.program_error && data.program_error.trim()) {
      return {
        success: false,
        output: data.program_error,
      }
    }

    // Success
    const output = data.program_output || ''
    return {
      success: true,
      output:
        output.trim() ||
        "(No output — your program ran but didn't print anything)",
    }
  } catch (error) {
    return {
      success: false,
      output: `Error: ${error.message}. Please check your internet connection and try again.`,
    }
  }
}

export async function executePythonCode(sourceCode) {
  try {
    const response = await fetch(WANDBOX_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        code: sourceCode,
        compiler: 'cpython-3.12.7',
        save: false,
      }),
    })

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`)
    }

    const data = await response.json()

    // Check for compilation/syntax errors
    if (data.compiler_error && data.compiler_error.trim()) {
      return {
        success: false,
        output: data.compiler_error,
      }
    }

    // Check for runtime errors
    if (data.program_error && data.program_error.trim()) {
      return {
        success: false,
        output: data.program_error,
      }
    }

    // Success
    const output = data.program_output || ''
    return {
      success: true,
      output:
        output.trim() ||
        "(No output — your program ran but didn't print anything)",
    }
  } catch (error) {
    return {
      success: false,
      output: `Error: ${error.message}. Please check your internet connection and try again.`,
    }
  }
}

export async function executeCode(sourceCode, language = 'java') {
  if (language === 'python') {
    return executePythonCode(sourceCode)
  }
  return executeJavaCode(sourceCode)
}
