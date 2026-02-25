const WANDBOX_API = 'https://wandbox.org/api/compile.json'
async function executeJavaCode(sourceCode) {
  let code = sourceCode.replace(/public\s+class\s+Main/, 'class Main')
  try {
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
    const data = await response.json()
    console.log('Response:', data)
  } catch (e) {
    console.error('Error:', e)
  }
}
executeJavaCode(
  'public class Main { public static void main(String[] args) { System.out.println("Hello"); } }',
)
