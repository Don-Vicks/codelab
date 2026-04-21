export const examFoundations = [
  {
    id: 'exam-q1',
    module: 'Exam Solutions: Web Foundations',
    moduleIndex: 12,
    language: 'html',
    title: 'Q1: Navbars & Styles',
    description: 'Solution for creating a navbar with background image and using Class/ID selectors.',
    sections: [
      {
        type: 'text',
        title: 'Question 1(a) & 1(b)',
        content: `Create a simple website with a navigation menu, background image, and specific ID/Class selectors for headers and paragraphs.\n\nKey requirements:\n• Navigation menu\n• Background image\n• Header with ID\n• Paragraphs with Classes\n• CSS unique styles.`,
      },
      {
        type: 'editor',
        title: 'Solved Layout & Interaction',
        defaultCode: `<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            /* 1(a) Background image */
            background-image: url('https://images.unsplash.com/photo-1484417855510-d126004b2115?w=500&auto=format');
            background-size: cover;
            color: white;
            font-family: sans-serif;
            margin: 0;
        }
        /* 1(a) Navigation Menu */
        nav {
            background: rgba(0,0,0,0.7);
            padding: 1rem;
        }
        nav a { color: #38bdf8; margin-right: 15px; text-decoration: none; }
        
        /* 1(b) Unique Styles based on ID and Class */
        #main-header { color: #facc15; text-align: center; }
        .text-blue { color: #60a5fa; }
        .text-green { color: #4ade80; }
        .my-button { 
            background: #e11d48; 
            color: white; 
            padding: 10px 20px; 
            border: none;
            cursor: pointer;
        }
        
        #hover-box {
            width: 200px;
            height: 50px;
            background: #334155;
            margin-top: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: 0.3s;
        }
    </style>
</head>
<body>
    <nav>
        <a href="#">Home</a> <a href="#">About</a> <a href="#">Contact</a>
    </nav>
    
    <h1 id="main-header">Welcome to my Exam Solution</h1>
    
    <p class="text-blue">This is a paragraph with a blue class.</p>
    <p class="text-green">This is another paragraph with a green class.</p>
    
    <button class="my-button">Submit Task</button>

    <!-- 1(c) onmouseover Event -->
    <div id="hover-box" onmouseover="this.style.backgroundColor='#059669'; this.innerText='Mouse detected!'" 
                       onmouseout="this.style.backgroundColor='#334155'; this.innerText='Hover over me'">
        Hover over me
    </div>
</body>
</html>`,
      },
    ],
  },
  {
    id: 'exam-q2',
    module: 'Exam Solutions: Web Foundations',
    moduleIndex: 12,
    language: 'html',
    title: 'Q2: Tables, Media & CSS Types',
    description: 'Solution for HTML tables, video/audio elements, and types of CSS.',
    sections: [
      {
        type: 'text',
        title: 'Question 2(a) HTML Table',
        content: `Create an HTML table with 3 rows and 4 columns, styled with CSS.`,
      },
      {
        type: 'editor',
        title: 'Solved Styled Table',
        defaultCode: `<style>
    table { width: 100%; border-collapse: collapse; color: white; background: #1e293b; }
    th, td { border: 1px solid #475569; padding: 12px; text-align: left; }
    th { background: #334155; }
    tr:nth-child(even) { background: #0f172a; }
</style>

<table>
    <tr>
        <th>ID</th> <th>Name</th> <th>Course</th> <th>Grade</th>
    </tr>
    <tr>
        <td>101</td> <td>Alice</td> <td>Computer Science</td> <td>A</td>
    </tr>
    <tr>
        <td>102</td> <td>Bob</td> <td>Engineering</td> <td>B</td>
    </tr>
</table>`,
      },
      {
        type: 'text',
        title: 'Question 2(b) Video & Audio',
        content: `How to add video and audio elements to a webpage?`,
      },
      {
        type: 'editor',
        title: 'Media Snippets',
        defaultCode: `<h3>Video Example</h3>
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<h3>Audio Example</h3>
<audio controls>
  <source src="song.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>`,
      },
      {
        type: 'info',
        variant: 'tip',
        title: '2(c) Types of CSS Styling',
        content: `1. **Inline CSS**: Defined directly inside an HTML tag using the \`style\` attribute.\n   Example: \`<p style="color:red">Text</p>\`\n\n2. **Internal CSS (Embedded)**: Defined inside a \`<style>\` tag in the \`<head>\` section of an HTML document.\n\n3. **External CSS**: Defined in a separate \`.css\` file and linked using the \`<link>\` tag.`,
      },
    ],
  },
]

export const examLogic = [
  {
    id: 'exam-q3',
    module: 'Exam Solutions: JS Logic',
    moduleIndex: 13,
    language: 'html',
    title: 'Q3: Modulus & Arrays',
    description: 'Solution for user inputs, remainders, and prompt-based arrays.',
    sections: [
      {
        type: 'text',
        title: 'Question 3(a) Remainder Calculator',
        content: `Find the remainder of two numbers input by the user through an HTML form.`,
      },
      {
        type: 'editor',
        title: 'Modulus Logic Solver',
        defaultCode: `<!DOCTYPE html>
<html>
<body>
    <h3>Remainder Calculator</h3>
    <input type="number" id="num1" placeholder="First number">
    <input type="number" id="num2" placeholder="Second number">
    <button onclick="calcRemainder()">Calculate</button>
    <p id="res"></p>

    <script>
        function calcRemainder() {
            const a = document.getElementById('num1').value;
            const b = document.getElementById('num2').value;
            const remainder = a % b;
            document.getElementById('res').innerText = "The remainder is: " + remainder;
        }
    </script>
</body>
</html>`,
      },
      {
        type: 'text',
        title: 'Question 3(b) prompt() & Arrays',
        content: `Collect user input using \`prompt()\`, store in an array, and display them.`,
      },
      {
        type: 'editor',
        title: 'Solved Array Collector',
        defaultCode: `// Collect 3 inputs from user
let data = [];
for(let i = 0; i < 3; i++) {
    let input = prompt("Enter item #" + (i+1));
    data.push(input);
}

console.log("Your collected array is:");
data.forEach(item => console.log("- " + item));`,
      },
    ],
  },
  {
    id: 'exam-q4',
    module: 'Exam Solutions: JS Logic',
    moduleIndex: 13,
    language: 'javascript',
    title: 'Q4: Math, Dates & Grades',
    description: 'Solution for Date/Math functions and Grade Calculator using Switch.',
    sections: [
      {
        type: 'text',
        title: 'Question 4(a) Date & Math',
        content: `Demonstrate the use of Date and Math functions.`,
      },
      {
        type: 'editor',
        title: 'Functions Demo',
        defaultCode: `// DATE FUNCTIONS
const now = new Date();
console.log("Current Date: " + now.toDateString());
console.log("Current Year: " + now.getFullYear());

// MATH FUNCTIONS
console.log("PI Value: " + Math.PI);
console.log("Round 4.7: " + Math.round(4.7));
console.log("Power 2^3: " + Math.pow(2, 3));
console.log("Square Root 64: " + Math.sqrt(64));`,
      },
      {
        type: 'text',
        title: 'Question 4(b) Grade Calculator (Switch)',
        content: `Create a grade calculator that takes user input and outputs the grade using a \`switch\` statement.`,
      },
      {
        type: 'editor',
        title: 'Solved Switch Grade Calculator',
        defaultCode: `function calculateGrade(marks) {
    let grade;
    
    // In JavaScript, we can use switch(true) to evaluate ranges
    switch (true) {
        case (marks >= 70 && marks <= 100):
            grade = "A";
            break;
        case (marks >= 60):
            grade = "B";
            break;
        case (marks >= 50):
            grade = "C";
            break;
        case (marks >= 40):
            grade = "D";
            break;
        default:
            grade = "F";
            break;
    }
    
    return "Your Grade is: " + grade;
}

// Example usage
console.log(calculateGrade(75)); 
console.log(calculateGrade(55));`,
      },
    ],
  },
  {
    id: 'exam-q5-fixed',
    module: 'Exam Solutions: JS Logic',
    moduleIndex: 13,
    language: 'javascript',
    title: 'Q5: Fixing Loops',
    description: 'Fixing the odd number loop and demonstrating do...while vs for.',
    sections: [
      {
        type: 'text',
        title: 'Question 5(a) Fixing the Code',
        content: `Fix the provided script to correctly output odd numbers from 0-9.`,
      },
      {
        type: 'editor',
        title: 'Loop Fix Solver',
        defaultCode: `// The original code had a condition while(count > 10) 
// but count started at 2, so it never ran.
// Also it didn't check for odd numbers correctly.

let count = 0;
console.log("Odd numbers from 0-9:");

while (count <= 9) {
    if (count % 2 !== 0) {
        console.log(count);
    }
    count++;
}
console.log("Loop stopped!");`,
      },
      {
        type: 'text',
        title: 'Question 5(b) Loop Types',
        content: `Demonstrate do...while and for loops.`,
      },
      {
        type: 'editor',
        title: 'Loop Demo',
        defaultCode: `// FOR Loop (1 to 5)
console.log("--- For Loop ---");
for(let i = 1; i <= 5; i++) {
    console.log("Iteration " + i);
}

// DO...WHILE Loop (always runs once)
console.log("\n--- Do...While Loop ---");
let j = 10;
do {
    console.log("Current J: " + j);
    j++;
} while (j < 5); // Condition is false, but code ran once!`,
      },
    ],
  },
]

export const examAdvanced = [
  {
    id: 'exam-advanced-functions',
    module: 'Exam Solutions: Functions & Advanced',
    moduleIndex: 14,
    language: 'javascript',
    title: 'Q5 (Alt): Functions & Scope',
    description: 'Solution for defining functions, local vs global variables, and button clicks.',
    sections: [
      {
        type: 'info',
        variant: 'tip',
        title: 'What is a Function?',
        content: `A function is a **reusable block of code** designed to perform a specific task. It only executes when it is "called" or "invoked".`,
      },
      {
        type: 'editor',
        title: 'Solved: Invoke Hello Function',
        defaultCode: `function greetUser() {
    alert("Hello Mr Luwani Ishaya");
}

// HTML Button to call it:
// <button onclick="greetUser()">Say Hello</button>

greetUser(); // Manual invocation for demo`,
      },
      {
        type: 'info',
        variant: 'warning',
        title: 'Local vs Global Variables',
        content: `• **Global Variables**: Declared outside any function. Accessible from anywhere in the script.\n• **Local Variables**: Declared inside a function. Only available within that function.`,
      },
    ],
  },
  {
    id: 'exam-q6',
    module: 'Exam Solutions: Functions & Advanced',
    moduleIndex: 14,
    language: 'javascript',
    title: 'Q6: Logic & Validation',
    description: 'Solution for logical operators and email validation.',
    sections: [
      {
        type: 'text',
        title: 'Question 6(a) Logical Operators',
        content: `Demonstrate AND(&&), OR(||) and NOT(!).`,
      },
      {
        type: 'editor',
        title: 'Logic Solver',
        defaultCode: `let age = 20;
let hasID = true;

// AND (&&) - Both must be true
if (age >= 18 && hasID) {
    console.log("Access Granted: Both conditions met.");
}

// OR (||) - At least one must be true
let marks = 45;
if (marks >= 50 || marks === 45) {
    console.log("Pass: Condition partially met.");
}

// NOT (!) - Reverses the boolean
let isWorking = false;
if (!isWorking) {
    console.log("Status: Idling...");
}`,
      },
      {
        type: 'editor',
        title: 'Question 6(b) Email "@" Validation',
        defaultCode: `function validateEmail(email) {
    // Check if the '@' symbol is missing
    if (!email.includes('@')) {
        console.log("Error: Invalid email. Missing '@' symbol.");
        return false;
    }
    
    console.log("Email is valid. Submitting...");
    return true;
}

validateEmail("myname-example.com"); // Invalid
validateEmail("user@domain.com");    // Valid`,
      },
    ],
  },
  {
    id: 'exam-q7',
    module: 'Exam Solutions: Functions & Advanced',
    moduleIndex: 14,
    language: 'javascript',
    title: 'Q7: SIWES Level & Control',
    description: 'Solution for the Level challenge and break vs continue.',
    sections: [
      {
        type: 'text',
        title: 'Question 7(a) SIWES Level Output',
        content: `OutputLevels from 1-5, skipping Level 3 for SIWES.`,
      },
      {
        type: 'editor',
        title: 'Solved SIWES Challenge',
        defaultCode: `console.log("Level without SIWES");

for (let i = 1; i <= 5; i++) {
    // Level 3 is skipped
    if (i === 3) {
        continue; 
    }
    console.log("Level " + i);
}`,
      },
      {
        type: 'text',
        title: 'Question 7(b) Break vs Continue',
        content: `Demonstrate the difference between break and continue.`,
      },
      {
        type: 'editor',
        title: 'Break vs Continue Demo',
        defaultCode: `console.log("--- CONTINUE Example (skips 3) ---");
for(let k = 1; k <= 5; k++) {
    if(k === 3) continue;
    console.log(k);
}

console.log("\n--- BREAK Example (stops at 3) ---");
for(let m = 1; m <= 5; m++) {
    if(m === 3) break;
    console.log(m);
}`,
      },
    ],
  },
]
