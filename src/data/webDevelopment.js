export const htmlFundamentals = [
  {
    id: 'html-intro',
    module: 'HTML Fundamentals',
    moduleIndex: 8,
    language: 'html',
    title: 'Creating a Webpage',
    description: 'Learn the basic structure of an HTML document and how browsers read it.',
    sections: [
      {
        type: 'text',
        title: 'What is HTML?',
        content: `HTML (HyperText Markup Language) is the backbone of every website. It tells the browser what content to display and how it\'s structured.\n\nA webpage is basically a document wrapped in **tags**. Every tag starts with \`<\` and ends with \`>\`. Most tags come in pairs: an opening tag \`<div>\` and a closing tag \`</div>\`.`,
      },
      {
        type: 'text',
        title: 'The Basic Structure',
        content: `Every HTML file follows a strict structure:\n\n• \`<!DOCTYPE html>\`: Tells the browser this is a modern HTML5 document.\n• \`<html>\`: The "root" that contains everything else.\n• \`<head>\`: Contains metadata (info about the page) like the title.\n• \`<body>\`: Contains the actual content you see on the screen.`,
      },
      {
        type: 'editor',
        title: 'Your First Webpage',
        defaultCode: `<!DOCTYPE html>
<html>
<head>
    <title>My First Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>Welcome to my first webpage. Web Development is fun!</p>
</body>
</html>`,
      },
    ],
  },
  {
    id: 'html-elements',
    module: 'HTML Fundamentals',
    moduleIndex: 8,
    language: 'html',
    title: 'Divs & Paragraphs',
    description: 'Master the most common layout and text elements in HTML.',
    sections: [
      {
        type: 'text',
        title: 'Paragraphs (<p>)',
        content: `The \`<p>\` tag is used for blocks of text. Browsers automatically add some space (margin) before and after each paragraph.\n\nExample:\n\`<p>This is a paragraph of text.</p>\``,
      },
      {
        type: 'text',
        title: 'The Div Element (<div>)',
        content: `The \`<div>\` (short for division) is a generic container. It has no special meaning on its own, but it is used to group other elements together for styling or layout purposes. It is the most used tag in modern web development!`,
      },
      {
        type: 'editor',
        title: 'Styling Containers',
        defaultCode: `<div style="background-color: #1e293b; padding: 20px; border-radius: 10px; color: white;">
    <h2>I am inside a Div</h2>
    <p>This paragraph is grouped with the heading inside the dark blue box.</p>
</div>

<p>This paragraph is outside the box.</p>`,
      },
    ],
  },
]

export const webForms = [
  {
    id: 'forms-basics',
    module: 'Interactive Forms',
    moduleIndex: 9,
    language: 'html',
    title: 'Forms & Input Fields',
    description: 'Learn how to collect data from users using forms and inputs.',
    sections: [
      {
        type: 'text',
        title: 'The <form> Tag',
        content: `Forms are used to collect user input. The \`<form>\` tag wraps all the input fields and buttons.\n\nKey attributes:\n• \`action\`: Where to send the data (usually a URL).\n• \`method\`: How to send it (usually GET or POST).`,
      },
      {
        type: 'text',
        title: 'Input Fields',
        content: `The \`<input>\` tag is the most versatile element. Its behavior changes based on the \`type\` attribute:\n\n• \`type="text"\`: Single-line text input.\n• \`type="email"\`: Validates that the input looks like an email address.\n• \`type="password"\`: Hides the characters as you type.\n• \`type="submit"\`: A button that sends the form.`,
      },
      {
        type: 'editor',
        title: 'Simple Contact Form',
        defaultCode: `<form>
    <div style="margin-bottom: 10px;">
        <label>Full Name:</label><br>
        <input type="text" placeholder="Enter your name">
    </div>
    
    <div style="margin-bottom: 10px;">
        <label>Email Address:</label><br>
        <input type="email" placeholder="email@example.com">
    </div>
    
    <input type="submit" value="Register Now">
</form>`,
      },
    ],
  },
]

export const javascriptValidation = [
  {
    id: 'js-validation-basics',
    module: 'JavaScript & Validation',
    moduleIndex: 10,
    language: 'javascript',
    title: 'Basic Form Validation',
    description: 'Use JavaScript to ensure users enter correct information BEFORE sending the form.',
    sections: [
      {
        type: 'text',
        title: 'Why Validate?',
        content: `Validation prevents "bad data" from reaching your server. It also helps users by giving them instant feedback if they made a mistake.\n\nIn JavaScript, we usually listen for the \`submit\` event and check if fields are empty or have the wrong format.`,
      },
      {
        type: 'editor',
        title: 'Validating Required Fields',
        defaultCode: `function validateForm() {
    const name = "John Doe"; // Imagine fetching this from input
    
    if (name.length < 3) {
        console.log("Error: Name must be at least 3 characters long.");
        return false;
    }
    
    console.log("Validation Success! Form submitted.");
    return true;
}

validateForm();`,
      },
    ],
  },
  {
    id: 'institutional-email-validation',
    module: 'JavaScript & Validation',
    moduleIndex: 10,
    language: 'javascript',
    title: 'Institutional Email Validation',
    description: 'Learn how to accept only university and institution-based emails using Regular Expressions.',
    sections: [
      {
        type: 'text',
        title: 'Restricting Domains',
        content: `Sometimes you only want users from specific organizations to sign up (e.g., only students with \`.edu\` emails).\n\nWe can use **Regular Expressions (Regex)** to check the ending of an email string.`,
      },
      {
        type: 'info',
        variant: 'tip',
        title: 'Institutional Domains',
        content: `Common educational domains include:\n• \`.edu\` (US Institutions)\n• \`.ac.uk\` (UK Universities)\n• \`.edu.ng\` (Nigerian Institutions)\n• \`.sch.id\` (Indonesian Schools)`,
      },
      {
        type: 'editor',
        title: 'Building a Domain Filter',
        defaultCode: `function isInstitutionalEmail(email) {
    // This regex checks for .edu, .ac.uk, or .org.ng endings
    const regex = /^[a-zA-Z0-9._%+-]+@.*(\.edu|\.ac\.uk|\.edu\.ng)$/;
    
    if (regex.test(email)) {
        return "✅ Valid Institutional Email";
    } else {
        return "❌ Error: Please use your university email address.";
    }
}

// Test cases
console.log(isInstitutionalEmail("student@oxford.ac.uk"));
console.log(isInstitutionalEmail("user@gmail.com"));
console.log(isInstitutionalEmail("professor@mit.edu"));`,
      },
      {
        type: 'text',
        title: 'Breaking down the Regex',
        content: `• \`^...\$: \` Checks the entire string from start to finish.\n• \`.*: \` Matches any number of characters (the domain name).\n• \`(\.edu|\.ac\.uk): \` Matches either .edu OR .ac.uk at the very end.`,
      },
    ],
  },
]
export const fullProjectExamples = [
  {
    id: 'full-registration-form',
    module: 'Full Project Examples',
    moduleIndex: 11,
    language: 'html',
    title: 'Complete Registration System',
    description: 'A full example combining HTML structure, CSS styling, and JavaScript validation into one functional page.',
    sections: [
      {
        type: 'text',
        title: 'Bringing it All Together',
        content: `So far you\'ve learned HTML, CSS basics, and JS logic. Now, let\'s combine them into a professional-looking registration form.\n\nThis example includes:\n• **HTML5 semantic structure**\n• **Embedded CSS** for a modern, dark-themed UI\n• **JavaScript** for live form validation and institutional email checks.`,
      },
      {
        type: 'editor',
        title: 'The "Student Portal" Registration',
        defaultCode: `<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background: #0f172a;
            color: #f8fafc;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 400px;
            margin: 0;
        }
        .card {
            background: #1e293b;
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.3);
            width: 100%;
            max-width: 400px;
            border: 1px solid #334155;
        }
        h2 { margin-top: 0; color: #38bdf8; }
        .input-group { margin-bottom: 1.5rem; }
        label { display: block; margin-bottom: 0.5rem; font-size: 0.875rem; color: #94a3b8; }
        input {
            width: 100%;
            padding: 0.75rem;
            background: #0f172a;
            border: 1px solid #334155;
            border-radius: 6px;
            color: white;
            box-sizing: border-box;
        }
        input:focus { border-color: #38bdf8; outline: none; }
        .btn {
            width: 100%;
            padding: 0.75rem;
            background: #0284c7;
            color: white;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 600;
        }
        .btn:hover { background: #0369a1; }
        #message { margin-top: 1rem; font-size: 0.875rem; text-align: center; }
        .error { color: #f87171; }
        .success { color: #4ade80; }
    </style>
</head>
<body>
    <div class="card">
        <h2>Student Portal</h2>
        <p style="color: #94a3b8; font-size: 0.875rem; margin-bottom: 1.5rem;">Join your university community.</p>
        
        <form id="regForm">
            <div class="input-group">
                <label>Full Name</label>
                <input type="text" id="name" placeholder="John Doe" required>
            </div>
            <div class="input-group">
                <label>University Email</label>
                <input type="email" id="email" placeholder="you@university.edu" required>
            </div>
            <button type="submit" class="btn">Create Account</button>
        </form>
        
        <div id="message"></div>
    </div>

    <script>
        document.getElementById('regForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const messageDiv = document.getElementById('message');
            
            // Regex for common institutional domains
            const regex = /^[a-zA-Z0-9._%+-]+@.*(\.edu|\.ac\.uk|\.edu\.ng)$/;
            
            if (!regex.test(email)) {
                messageDiv.className = 'error';
                messageDiv.innerText = '❌ Access Denied: Use a valid institutional email (.edu, .ac.uk, etc.)';
            } else {
                messageDiv.className = 'success';
                messageDiv.innerText = '🚀 Welcome! Your account is being created...';
                this.reset();
            }
        });
    </script>
</body>
</html>`,
      },
    ],
  },
]
