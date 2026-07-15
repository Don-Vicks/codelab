// Module 0: Programming Basics (Python Edition)
export const pythonProgrammingBasics = [
  {
    id: 'py-what-is-programming',
    module: 'Programming Basics',
    moduleIndex: 0,
    language: 'python',
    title: 'What is Programming?',
    description:
      "Before we touch Python, let's understand what programming actually is — in the simplest way possible.",
    sections: [
      {
        type: 'text',
        title: 'So What Exactly is Programming?',
        content: `Imagine you're telling your younger sibling how to make Indomie noodles. You'd say:\n\n1. Boil water\n2. Put the noodles in\n3. Wait 3 minutes\n4. Add the seasoning\n5. Serve\n\nThat's basically programming! You're giving step-by-step instructions. The only difference is that instead of telling a person, you're telling a **computer**.\n\nA computer is very fast but very dumb — it can only do exactly what you tell it. If you forget to say "add the seasoning", it will make bland noodles. Programming is just the act of writing these instructions in a language the computer understands.`,
      },
      {
        type: 'text',
        title: 'Why Should You Learn This?',
        content: `Everything you use daily runs on code:\n\n• WhatsApp — someone wrote code to send your messages\n• Instagram — code makes the feed, stories, and filters work\n• ATMs — code handles your money\n• Even your phone's calculator — code does the math\n\nLearning to code means you can **build things**, **solve problems**, and **get good jobs**. It's one of the most useful skills you can learn today.`,
      },
      {
        type: 'concept-cards',
        cards: [
          {
            icon: '📝',
            title: 'Code',
            description:
              'The instructions you write for the computer to follow',
          },
          {
            icon: '🔧',
            title: 'Interpreter',
            description:
              'A tool that reads your Python code line by line and executes it',
          },
          {
            icon: '⚡',
            title: 'Program',
            description:
              'The finished result — like an app that the computer can run',
          },
          {
            icon: '🐛',
            title: 'Bug',
            description:
              'A mistake in your code that makes it do the wrong thing',
          },
        ],
      },
    ],
  },
  {
    id: 'py-how-programs-work',
    module: 'Programming Basics',
    moduleIndex: 0,
    language: 'python',
    title: 'How Programs Work',
    description:
      'Understand the simple flow: you write code, the computer reads it, and something happens.',
    sections: [
      {
        type: 'text',
        title: 'The Simple Version',
        content: `Here's how every program works in 3 steps:\n\n1. **You write code** in a text file (like typing in a document)\n2. **The computer reads it** (translates it into something it understands)\n3. **Something happens** (text appears on screen, a calculation is done, etc.)\n\nThat's it. That's the whole process. Don't let anyone overcomplicate it.`,
      },
      {
        type: 'info',
        variant: 'tip',
        title: 'The Golden Rule of Programs',
        content:
          'Every program follows this pattern: take some INPUT (like typing your name), PROCESS it (do something with it), and produce OUTPUT (show a result on screen).',
      },
      {
        type: 'text',
        title: 'A Real-Life Example',
        content: `Think about using Google Search:\n\n• **Input**: You type "weather today" into the search bar\n• **Process**: Google's code searches through billions of web pages\n• **Output**: You see the weather results on your screen\n\nEvery app works like this. Even a simple calculator: input numbers → process the math → output the answer.`,
      },
    ],
  },
  {
    id: 'py-core-concepts',
    module: 'Programming Basics',
    moduleIndex: 0,
    language: 'python',
    title: 'Core Concepts of Programming',
    description:
      'The fundamental building blocks every programming language shares. Master these and learning any language becomes easy.',
    sections: [
      {
        type: 'text',
        title: 'The Building Blocks',
        content: `No matter what programming language you learn (Python, Java, JavaScript — any of them), they all use the same basic ideas. Once you understand these, learning any language becomes way easier.`,
      },
      {
        type: 'concept-cards',
        cards: [
          {
            icon: '📦',
            title: 'Variables',
            description:
              'Containers that hold data. Like naming a box "age" and putting the number 20 inside it.',
          },
          {
            icon: '🏷️',
            title: 'Data Types',
            description:
              'What kind of stuff your variable holds: a number? text? true or false?',
          },
          {
            icon: '➕',
            title: 'Operators',
            description:
              'Math and comparison symbols: add (+), subtract (-), check if equal (==)',
          },
          {
            icon: '🔀',
            title: 'Decisions',
            description:
              'Making the code choose: IF this is true, do this. OTHERWISE, do that.',
          },
          {
            icon: '🔁',
            title: 'Loops',
            description:
              'Repeating something: do this 10 times, or keep going until something happens.',
          },
          {
            icon: '🔧',
            title: 'Functions',
            description:
              'A reusable chunk of code. Write it once, use it whenever you need it.',
          },
        ],
      },
      {
        type: 'text',
        title: 'Variables — Think of a Labeled Box',
        content: `A **variable** is like a labeled box. You give it a name and put something inside.\n\nImagine writing "name" on a box, then putting the word "John" inside it. In Python, that's literally:\n\n\`name = "John"\`\n\nUnlike Java, Python doesn't need you to declare what type of data goes in the box. Python figures it out automatically!\n\nYou can change what's inside whenever you want. That's why it's called a "variable" — it can vary!`,
      },
      {
        type: 'text',
        title: 'Decisions — IF This, Do That',
        content: `Your code can make choices, just like you do:\n\n• IF it's hot → turn on the fan\n• IF you have money → buy food, OTHERWISE → cook at home\n• IF the password is correct → let them in\n\nEvery programming language lets you write these kinds of rules.`,
      },
    ],
  },
  {
    id: 'py-thinking-like-a-programmer',
    module: 'Programming Basics',
    moduleIndex: 0,
    language: 'python',
    title: 'Thinking Like a Programmer',
    description:
      'The most important skill — how to break big problems into small, simple steps.',
    sections: [
      {
        type: 'text',
        title: 'Break It Down!',
        content: `The #1 skill in programming is NOT typing fast or memorizing syntax. It's **breaking big problems into smaller ones**.\n\nLet's say your lecturer asks you to "build a calculator." That sounds scary. But break it down:\n\n1. Ask the user for the first number\n2. Ask them what operation they want (+, -, ×, ÷)\n3. Ask for the second number\n4. Do the math\n5. Show the answer\n\nSee? Each step on its own is simple. That's how programmers think.`,
      },
      {
        type: 'text',
        title: 'Write It Out in Plain English First',
        content: `Before writing any actual code, try writing what your program should do in plain English (or pidgin, or whatever you speak!).\n\n**Example 1 — Voting checker:**\n"Ask the person their age. If their age is 18 or more, tell them they can vote. If not, tell them they're too young."\n\n**Example 2 — Login system:**\n"Ask for a username and password. Check if they match what's stored. If yes, show the dashboard. If no, show an error and let them try again."\n\nOnce you have this written out, turning it into code becomes much easier because you already know the logic!`,
      },
      {
        type: 'info',
        variant: 'tip',
        title: "You Will Get Errors — That's Normal",
        content:
          "Every programmer makes mistakes. Even the best. When your code doesn't work, READ the error message. It usually tells you exactly what's wrong and on which line. Don't panic, just fix it and try again.",
      },
    ],
  },
]

// Module 1: Getting Started with Python
export const pythonGettingStarted = [
  {
    id: 'py-what-is-python',
    module: 'Getting Started',
    moduleIndex: 1,
    language: 'python',
    title: 'What is Python?',
    description: "Why we're learning Python and what makes it special.",
    sections: [
      {
        type: 'text',
        title: 'Python in Simple Terms',
        content: `Python is a **programming language** — one of the most popular and beginner-friendly languages in the world. It was created in 1991 by Guido van Rossum.\n\nWhat makes Python special is its **simplicity**. Python code reads almost like English, which makes it easy to learn and write. It follows the philosophy: **"There should be one — and preferably only one — obvious way to do it."**\n\nPython is also **interpreted**, meaning you don't need to compile your code first. You just write it and run it. No extra steps!\n\nAnother great feature is **Dynamic Typing**. Python automatically figures out what type of data your variable holds, so you don't need to declare types like in Java.`,
      },
      {
        type: 'text',
        title: 'Where is Python Used?',
        content: `You interact with Python-powered things every day:\n\n• **Instagram** — Instagram's backend is built with Python\n• **Netflix** — Python helps recommend what you should watch\n• **Spotify** — Music recommendations use Python\n• **AI & Machine Learning** — Most AI tools are built with Python\n• **Data Science** — Python is the #1 language for analyzing data\n\nLearning Python means you're learning something that's actually used in the real world.`,
      },
      {
        type: 'concept-cards',
        cards: [
          {
            icon: '🐍',
            title: 'Python',
            description:
              'A high-level, interpreted programming language known for its readability',
          },
          {
            icon: '⚡',
            title: 'Interpreted',
            description:
              'Python runs your code line by line — no compilation step needed',
          },
          {
            icon: '🔤',
            title: 'Dynamic Typing',
            description:
              'Python figures out data types automatically — no need to declare them',
          },
        ],
      },
    ],
  },
  {
    id: 'py-setting-up',
    module: 'Getting Started',
    moduleIndex: 1,
    language: 'python',
    title: 'Setting Up',
    description:
      'The tools you can use to write Python — or just use this website!',
    sections: [
      {
        type: 'info',
        variant: 'tip',
        title: "You Don't Need to Install Anything!",
        content:
          "You can write and run Python code right here on this website using the Playground or the code editors in each lesson. If you don't have a laptop, you're covered. But if you want to set things up on your own computer later, read on.",
      },
      {
        type: 'text',
        title: 'If You Have a Laptop',
        content: `To run Python on your own computer, you need:\n\n1. **Python** — Download it for free from [python.org](https://python.org) (make sure to check "Add to PATH" during installation on Windows)\n2. **An IDE** (a fancy text editor for code) — scroll down to the "Recommended IDEs" section at the very bottom of this page for our picks\n\nBut again, for learning? This website is all you need. The Playground lets you write and run any Python code instantly.`,
      },
    ],
  },
  {
    id: 'py-first-program',
    module: 'Getting Started',
    moduleIndex: 1,
    language: 'python',
    title: 'Your First Python Program',
    description:
      "Let's write your very first program. It's just 1 line of code!",
    sections: [
      {
        type: 'text',
        title: 'Hello, World!',
        content: `Every programmer's first program is "Hello, World!" — a simple program that just shows a message on screen. In Python, it's beautifully simple.`,
      },
      {
        type: 'editor',
        title: 'Click Run to see it work!',
        defaultCode: `print("Hello, World!")`,
      },
      {
        type: 'text',
        title: 'What Does Each Part Mean?',
        content: `Let's break it down:\n\n• \`print()\` — This is a **function** that displays text on the screen. Whatever you put inside the parentheses will be shown.\n\n• \`"Hello, World!"\` — This is a **string** (text). The quotes tell Python this is text, not code.\n\nThat's it! No class, no main method, no semicolons. Just one simple line. That's the beauty of Python.`,
      },
      {
        type: 'info',
        variant: 'tip',
        title: 'Python vs Java: First Program',
        content:
          'In Java, "Hello World" needs 5+ lines with class declarations and a main method. In Python, it\'s literally just `print("Hello, World!")`. Python handles all the boilerplate for you!',
      },
      {
        type: 'editor',
        title: 'Try It — Print multiple lines!',
        defaultCode: `print("My name is ___")
print("I am learning Python!")
print("This is exciting!")`,
      },
      {
        type: 'editor',
        title: 'Lab Task: Your First Python Program',
        defaultCode: `# Write a program that prints a welcome message.\n# Your code here\n`,
      },
    ],
  },
]

// Module 2: Python Fundamentals
export const pythonFundamentals = [
  {
    id: 'py-variables-data-types',
    module: 'Python Fundamentals',
    moduleIndex: 2,
    language: 'python',
    title: 'Variables & Data Types',
    description:
      'Learn how to store different kinds of data — numbers, text, true/false values, and more.',
    sections: [
      {
        type: 'text',
        title: 'What is a Variable?',
        content: `A variable is a **named container** that holds a value. In Python, you don't need to declare the type — just give it a name and a value!\n\nThe syntax is: \`name = value\`\n\nFor example: \`age = 20\` creates a variable named "age" that holds the number 20.\n\nNotice there's no \`int\`, no \`;\` at the end. Just the name, equals sign, and value.`,
      },
      {
        type: 'text',
        title: 'Python Data Types',
        content: `Python has several built-in data types:\n\n**Numeric Types**:\n• \`int\` — Whole numbers: 1, 42, -100\n• \`float\` — Decimal numbers: 3.14, -0.5\n• \`complex\` — Complex numbers: 3+4j\n\n**Text**:\n• \`str\` — Strings (text): "Hello World", 'Python'\n\n**Boolean**:\n• \`bool\` — True or False\n\n**Collections**:\n• \`list\` — Ordered, mutable collection: [1, 2, 3]\n• \`tuple\` — Ordered, immutable collection: (1, 2, 3)\n• \`dict\` — Key-value pairs: {"name": "John"}\n• \`set\` — Unique, unordered collection: {1, 2, 3}\n\n**None**:\n• \`NoneType\` — Represents "nothing": None`,
      },
      {
        type: 'editor',
        title: 'Try Different Data Types',
        defaultCode: `# Integer (whole numbers)
age = 20
print("Age:", age)
print("Type:", type(age))

# Float (decimal numbers)
gpa = 3.85
print("\\nGPA:", gpa)
print("Type:", type(gpa))

# String (text)
name = "John"
print("\\nName:", name)
print("Type:", type(name))

# Boolean (true/false)
is_student = True
print("\\nIs Student:", is_student)
print("Type:", type(is_student))

# None (nothing)
result = None
print("\\nResult:", result)
print("Type:", type(result))`,
      },
      {
        type: 'info',
        variant: 'warning',
        title: 'Python is Dynamic!',
        content:
          'Unlike Java, Python automatically determines the data type. You don\'t write `int age = 20` — just `age = 20`. You can even change the type later: `age = 20` then `age = "twenty"` is valid Python!',
      },
      {
        type: 'text',
        title: 'Variable Naming Rules',
        content: `Python has rules for naming variables:\n\n• Must start with a letter or underscore: \`my_var\`, \`_count\`\n• Can contain letters, numbers, and underscores: \`score2\`\n• Cannot start with a number: \`2name\` is invalid\n• Case-sensitive: \`name\` and \`Name\` are different\n• Cannot be a Python keyword: \`if\`, \`for\`, \`class\` are reserved\n\n**Best Practices**:\n• Use \`snake_case\`: \`student_age\`, \`total_score\`\n• Use meaningful names: \`age\` is better than \`a\`\n• Constants use UPPER_CASE: \`MAX_SIZE = 100\``,
      },
      {
        type: 'editor',
        title: 'Lab Task: Student Information',
        defaultCode: `# Store and print a student's name, age, GPA, is_graduating, and grade.\n# Your code here\n\nprint("Student Information")\nprint("-------------------")`,
      },
    ],
  },
  {
    id: 'py-strings',
    module: 'Python Fundamentals',
    moduleIndex: 2,
    language: 'python',
    title: 'Strings',
    description:
      'Master Python strings — methods, formatting, slicing, and more.',
    sections: [
      {
        type: 'text',
        title: 'Strings in Python',
        content: `A \`str\` is a sequence of characters. In Python, strings are **immutable** — once created, they cannot be changed.\n\nYou can create strings with single or double quotes:\n\`name = "John"\` or \`name = 'John'\`\n\nBoth work the same way! Use whichever you prefer, but be consistent.`,
      },
      {
        type: 'editor',
        title: 'In-Depth String Methods',
        defaultCode: `text = "Python Programming"

# 1. Length & Characters
print("Length:", len(text))
print("Character at index 6:", text[6])

# 2. Slicing (very powerful!)
print("First 6 chars:", text[:6])
print("From index 7:", text[7:])
print("Last 11 chars:", text[-11:])

# 3. Methods (Returns a NEW String, doesn't change original!)
print("\\nUppercase:", text.upper())
print("Lowercase:", text.lower())
print("Title Case:", text.title())
print("Replace:", text.replace("Python", "Java"))
print("Split:", text.split(" "))

# 4. Search methods
print("\\nFind 'Pro':", text.find("Pro"))
print("Count 'r':", text.count("r"))
print("Starts with 'Py':", text.startswith("Py"))
print("Ends with 'ing':", text.endswith("ing"))

# 5. Check methods
print("\\nIs digit?:", "123".isdigit())
print("Is alpha?:", "abc".isalpha())`,
      },
      {
        type: 'text',
        title: 'String Formatting (f-strings)',
        content: `Python has a powerful way to embed variables directly in strings using **f-strings**. Just put an \`f\` before the quote and use \`{variable}\` inside:\n\n\`\`\`\nname = "Alice"\nage = 20\nprint(f"Hello, {name}! You are {age} years old.")\n\`\`\`\n\nThis is much cleaner than concatenating with \`+\`!`,
      },
      {
        type: 'editor',
        title: 'Try f-strings',
        defaultCode: `name = "Alice"
age = 20
gpa = 3.85

# Old way (concatenation)
print("Hello, " + name + "! You are " + str(age) + " years old.")

# Modern way (f-strings) - Much better!
print(f"Hello, {name}! You are {age} years old.")
print(f"Your GPA is {gpa:.2f}")
print(f"Next year you'll be {age + 1}")

# Math inside f-strings
price = 49.99
quantity = 3
print(f"Total: \${price * quantity:.2f}")`,
      },
      {
        type: 'info',
        variant: 'warning',
        title: 'Strings are Immutable!',
        content:
          'You CANNOT change individual characters in a string. `text[0] = "J"` will cause an error. To "change" a string, you create a new one using methods like `.replace()` or slicing.',
      },
    ],
  },
  {
    id: 'py-user-input',
    module: 'Python Fundamentals',
    moduleIndex: 2,
    language: 'python',
    title: 'User Input',
    description:
      "Learn how to accept input from the user using Python's input() function.",
    sections: [
      {
        type: 'text',
        title: 'Reading User Input',
        content: `So far, all our programs just print output. But real programs need **input** from users. Python provides the \`input()\` function for this.\n\nThe syntax is: \`variable = input("prompt message")\`\n\nThis displays the prompt, waits for the user to type something and press Enter, then stores what they typed in the variable.\n\n**Note:** \`input()\` always returns a **string**. If you need a number, you must convert it using \`int()\` or \`float()\`.`,
      },
      {
        type: 'editor',
        title: 'input() Example (simulated since we can type here)',
        defaultCode: `# In a real program, input() reads from the keyboard.
# Here we demonstrate the pattern:

# Simulating user input (in a real program, this would pause and wait)
name = "John"       # In real code: name = input("Enter your name: ")
age = 20            # In real code: age = int(input("Enter your age: "))
gpa = 3.85          # In real code: gpa = float(input("Enter your GPA: "))

print(f"Hello, {name}!")
print(f"You are {age} years old.")
print(f"Your GPA is {gpa}")

print("\\n--- How to write this in your IDE ---")
print('name = input("Enter your name: ")')
print('age = int(input("Enter your age: "))')
print('gpa = float(input("Enter your GPA: "))')`,
      },
      {
        type: 'info',
        variant: 'tip',
        title: 'Converting Input to Numbers',
        content:
          'Since `input()` always returns a string, wrap it with `int()` for whole numbers or `float()` for decimals: `age = int(input("Age: "))`. If the user types something that isn\'t a number, Python will give an error — that\'s expected!',
      },
    ],
  },
  {
    id: 'py-type-casting',
    module: 'Python Fundamentals',
    moduleIndex: 2,
    language: 'python',
    title: 'Type Casting',
    description:
      'Learn how to convert data from one type to another — int(), float(), str(), and bool().',
    sections: [
      {
        type: 'text',
        title: 'What is Type Casting?',
        content: `**Type casting** is converting a value from one data type to another. Python provides built-in functions for this:\n\n• \`int()\` — Convert to integer\n• \`float()\` — Convert to float\n• \`str()\` — Convert to string\n• \`bool()\` — Convert to boolean\n• \`list()\` — Convert to list\n• \`tuple()\` — Convert to tuple`,
      },
      {
        type: 'editor',
        title: 'Type Casting Examples',
        defaultCode: `# String to Integer
num_text = "123"
num = int(num_text)
print(f"Converted: {num} (type: {type(num).__name__})")

# Integer to Float
whole = 42
decimal = float(whole)
print(f"Converted: {decimal} (type: {type(decimal).__name__})")

# Float to Integer (truncates, doesn't round!)
price = 9.99
rounded = int(price)
print(f"Converted: {rounded} (type: {type(rounded).__name__})")
print("Note: 9.99 becomes 9, not 10!")

# Number to String
score = 95
score_text = str(score)
print(f"Converted: {score_text} (type: {type(score_text).__name__})")

# Boolean conversions
print("\\nbool(0):", bool(0))
print("bool(1):", bool(1))
print('bool(""):', bool(""))
print('bool("hello"):', bool("hello"))
print("bool(None):", bool(None))`,
      },
      {
        type: 'info',
        variant: 'warning',
        title: 'Data Loss!',
        content:
          'When converting float to int, decimal parts are TRUNCATED (cut off), not rounded. `int(9.99)` gives you 9, not 10! Use `round()` if you want proper rounding.',
      },
    ],
  },
  {
    id: 'py-best-practices-errors',
    module: 'Python Fundamentals',
    moduleIndex: 2,
    language: 'python',
    title: 'Best Practices & Common Errors',
    description:
      'Learn good coding standards, naming conventions, and how to spot common Python errors.',
    sections: [
      {
        type: 'text',
        title: 'Naming Conventions',
        content: `Writing code that works is only half the job. The other half is writing code that people can read! Professional Python developers follow these naming rules:\n\n• **Variables & Functions**: Use \`snake_case\` (e.g., \`student_age\`, \`calculate_total()\`).\n• **Classes**: Use \`PascalCase\` (e.g., \`FirstProgram\`, \`StudentInfo\`).\n• **Constants**: Use \`UPPER_SNAKE_CASE\` (e.g., \`MAX_SIZE\`, \`PI\`).\n• **Private**: Prefix with underscore: \`_internal_var\`.\n\nAlso, always use **meaningful names**. \`student_age\` is much better than \`a\`.`,
      },
      {
        type: 'text',
        title: 'Common Errors & Debugging',
        content: `As you write Python, you will encounter errors. Don't panic! It's part of the process. Here are the most common types:\n\n**Syntax Errors**:\nThese happen before your program runs. Python catches them.\n• Missing colon \`:\` at the end of if/for/while/def/class statements\n• Indentation errors (Python uses indentation, not curly braces!)\n• Unmatched parentheses, brackets, or quotes\n\n**Runtime Errors**:\nThese happen while your program is running.\n• **NameError**: Using a variable that doesn't exist yet\n• **TypeError**: Doing something wrong with a data type (like adding a number to text)\n• **ZeroDivisionError**: Dividing by zero\n• **ValueError**: Converting invalid data (like \`int("hello")\`)\n\n**Logical Errors**:\nYour program runs, but gives the wrong output.\n• Wrong operator (e.g., using \`/\` instead of \`//\` for integer division)\n• Off-by-one errors in loops`,
      },
      {
        type: 'info',
        variant: 'tip',
        title: 'Golden Rule of Debugging',
        content:
          'When you get an error message, read it! Python usually tells you exactly which line caused the problem, what kind of error it is, and often suggests a fix. The last line of the traceback is the most important!',
      },
    ],
  },
]

// Module 3: Operators
export const pythonOperators = [
  {
    id: 'py-arithmetic-operators',
    module: 'Operators',
    moduleIndex: 3,
    language: 'python',
    title: 'Arithmetic Operators',
    description:
      'Learn how to perform math in Python — addition, subtraction, multiplication, division, and more.',
    sections: [
      {
        type: 'text',
        title: 'Math in Python',
        content: `Arithmetic operators let you perform mathematical operations on numbers. They work just like the math you already know!`,
      },
      {
        type: 'table',
        headers: ['Operator', 'Name', 'Example', 'Result'],
        rows: [
          ['`+`', 'Addition', '5 + 3', '8'],
          ['`-`', 'Subtraction', '10 - 4', '6'],
          ['`*`', 'Multiplication', '6 * 7', '42'],
          ['`/`', 'Division', '15 / 4', '3.75 (always float!)'],
          ['`//`', 'Floor Division', '15 // 4', '3 (rounds down)'],
          ['`%`', 'Modulus (remainder)', '17 % 5', '2'],
          ['`**`', 'Exponent', '2 ** 3', '8 (2³)'],
        ],
      },
      {
        type: 'info',
        variant: 'tip',
        title: 'Python Division is Different!',
        content:
          'In Python, `/` always returns a float (15 / 4 = 3.75). Use `//` for integer division (15 // 4 = 3). Python also has `**` for exponents (2 ** 3 = 8), which Java doesn\'t have!',
      },
      {
        type: 'editor',
        title: 'Try Arithmetic Operators',
        defaultCode: `a = 15
b = 4

print("a + b =", a + b)    # 19
print("a - b =", a - b)    # 11
print("a * b =", a * b)    # 60
print("a / b =", a / b)    # 3.75 (always float)
print("a // b =", a // b)  # 3 (floor division)
print("a % b =", a % b)    # 3 (remainder)
print("a ** b =", a ** b)  # 5079 (a to the power of b)

# Modulus is great for checking even/odd
print("\\n--- Even/Odd Check ---")
number = 7
if number % 2 == 0:
    print(f"{number} is even")
else:
    print(f"{number} is odd")`,
      },
    ],
  },
  {
    id: 'py-comparison-operators',
    module: 'Operators',
    moduleIndex: 3,
    language: 'python',
    title: 'Comparison Operators',
    description:
      'Learn how to compare values — is something greater, less, or equal?',
    sections: [
      {
        type: 'text',
        title: 'Comparing Values',
        content: `Comparison operators compare two values and return a **boolean** result (\`True\` or \`False\`). They're essential for making decisions in your code.`,
      },
      {
        type: 'table',
        headers: ['Operator', 'Meaning', 'Example', 'Result'],
        rows: [
          ['`==`', 'Equal to', '5 == 5', 'True'],
          ['`!=`', 'Not equal to', '5 != 3', 'True'],
          ['`>`', 'Greater than', '10 > 5', 'True'],
          ['`<`', 'Less than', '3 < 7', 'True'],
          ['`>=`', 'Greater or equal', '5 >= 5', 'True'],
          ['`<=`', 'Less or equal', '4 <= 3', 'False'],
        ],
      },
      {
        type: 'editor',
        title: 'Try Comparison Operators',
        defaultCode: `x = 10
y = 20

print("x == y:", x == y)  # False
print("x != y:", x != y)  # True
print("x > y:", x > y)    # False
print("x < y:", x < y)    # True
print("x >= 10:", x >= 10)  # True
print("y <= 15:", y <= 15)  # False

# Using in a condition
age = 18
if age >= 18:
    print("\\nYou are an adult!")

# Python also supports chained comparisons!
print("\\n--- Chained Comparisons ---")
score = 85
print(f"80 <= 85 <= 100: {80 <= score <= 100}")  # True!`,
      },
      {
        type: 'info',
        variant: 'warning',
        title: '= vs ==',
        content:
          'Single `=` is ASSIGNMENT (gives a value). Double `==` is COMPARISON (checks equality). This is the most common beginner mistake!',
      },
    ],
  },
  {
    id: 'py-logical-operators',
    module: 'Operators',
    moduleIndex: 3,
    language: 'python',
    title: 'Logical Operators',
    description: 'Combine multiple conditions with and, or, and not operators.',
    sections: [
      {
        type: 'text',
        title: 'Combining Conditions',
        content: `Logical operators let you combine multiple boolean expressions into one. Think of them in plain English:\n\n• \`and\` — "Both conditions must be true"\n• \`or\` — "At least one condition must be true"\n• \`not\` — "Flip the condition (True becomes False, False becomes True)"\n\nNote: Python uses words (\`and\`, \`or\`, \`not\`) instead of symbols (\`&&\`, \`||\`, \`!\`) like Java. This makes Python code more readable!`,
      },
      {
        type: 'table',
        headers: ['Operator', 'Name', 'Example', 'Meaning'],
        rows: [
          ['`and`', 'AND', 'a > 5 and a < 10', 'Both must be true'],
          ['`or`', 'OR', 'a == 1 or a == 2', 'At least one must be true'],
          ['`not`', 'NOT', 'not (a > 5)', 'Reverses the result'],
        ],
      },
      {
        type: 'editor',
        title: 'Try Logical Operators',
        defaultCode: `age = 25
has_license = True

# AND: both must be true
if age >= 18 and has_license:
    print("You can drive!")

# OR: at least one must be true
day = "Saturday"
if day == "Saturday" or day == "Sunday":
    print("It's the weekend!")

# NOT: reverses the condition
is_raining = False
if not is_raining:
    print("No rain — go outside!")

# Combining multiple
score = 85
if 80 <= score <= 100:
    print("Grade: A")

# Python allows chained comparisons (unique feature!)
print("\\n--- Chained Comparisons ---")
print(f"80 <= 85 <= 100: {80 <= 85 <= 100}")  # True`,
      },
    ],
  },
  {
    id: 'py-assignment-operators',
    module: 'Operators',
    moduleIndex: 3,
    language: 'python',
    title: 'Assignment Operators',
    description:
      'Shorthand assignment operators for common operations.',
    sections: [
      {
        type: 'text',
        title: 'Assignment Operators',
        content: `Assignment operators are **shortcuts** for common operations. Instead of writing \`x = x + 5\`, you can write \`x += 5\`.\n\n**Note:** Python does NOT have increment (\`++\`) or decrement (\`--\`) operators like Java. Use \`x += 1\` instead.`,
      },
      {
        type: 'table',
        headers: ['Operator', 'Example', 'Same As'],
        rows: [
          ['`=`', 'x = 10', 'Assign 10 to x'],
          ['`+=`', 'x += 5', 'x = x + 5'],
          ['`-=`', 'x -= 3', 'x = x - 3'],
          ['`*=`', 'x *= 2', 'x = x * 2'],
          ['`/=`', 'x /= 4', 'x = x / 4'],
          ['`//=`', 'x //= 3', 'x = x // 3'],
          ['`%=`', 'x %= 3', 'x = x % 3'],
          ['`**=`', 'x **= 2', 'x = x ** 2'],
        ],
      },
      {
        type: 'editor',
        title: 'Try Assignment Operators',
        defaultCode: `x = 20
print("Start: x =", x)

x += 10  # x = x + 10 = 30
print("After x += 10:", x)

x -= 5   # x = x - 5 = 25
print("After x -= 5:", x)

x *= 2   # x = x * 2 = 50
print("After x *= 2:", x)

x /= 10  # x = x / 10 = 5.0
print("After x /= 10:", x)

x //= 3  # x = x // 3 = 1.0
print("After x //= 3:", x)

# Python has **= for exponents (Java doesn't!)
y = 2
y **= 3  # y = y ** 3 = 8
print("\\ny **= 3:", y)`,
      },
    ],
  },
  {
    id: 'py-operator-precedence',
    module: 'Operators',
    moduleIndex: 3,
    language: 'python',
    title: 'Operator Precedence',
    description:
      'Understand the order in which Python evaluates different operators in a single expression.',
    sections: [
      {
        type: 'text',
        title: 'The Order of Operations',
        content: `When you have multiple operators in one line of code, which one happens first? Python follows strict rules called **Operator Precedence**, similar to BODMAS/PEMDAS in math.`,
      },
      {
        type: 'table',
        headers: ['Order', 'Operator Type', 'Symbols'],
        rows: [
          ['1 (Highest)', 'Parentheses', '`()`'],
          ['2', 'Exponent', '`**`'],
          ['3', 'Multiplicative', '`*`, `/`, `//`, `%`'],
          ['4', 'Additive', '`+`, `-`'],
          ['5', 'Relational', '`>`, `<`, `>=`, `<=`'],
          ['6', 'Equality', '`==`, `!=`'],
          ['7', 'Logical AND', '`and`'],
          ['8', 'Logical OR', '`or`'],
          ['9 (Lowest)', 'Assignment', '`=`, `+=`, `-=`, etc.'],
        ],
      },
      {
        type: 'editor',
        title: 'Precedence in Action',
        defaultCode: `# Multiplication happens before addition
result1 = 10 - 2 + 5      # (10 - 2) + 5 = 13
result2 = 10 - (2 + 5)    # 10 - 7 = 3

print("10 - 2 + 5 =", result1)
print("10 - (2 + 5) =", result2)

math1 = 5 + 3 * 2         # 5 + 6 = 11
math2 = (5 + 3) * 2       # 8 * 2 = 16

print("\\n5 + 3 * 2 =", math1)
print("(5 + 3) * 2 =", math2)

# Exponent has higher precedence than multiplication
exp1 = 2 ** 3 * 2         # 8 * 2 = 16
exp2 = 2 * 3 ** 2         # 2 * 9 = 18

print("\\n2 ** 3 * 2 =", exp1)
print("2 * 3 ** 2 =", exp2)`,
      },
      {
        type: 'info',
        variant: 'tip',
        title: 'When in doubt, use parentheses!',
        content:
          'Even if you memorize the precedence rules, adding parentheses like `(a + b) * c` makes your code much easier for other humans to read and guarantees the order of evaluation.',
      },
    ],
  },
]

// Module 4: Control Flow
export const pythonControlFlow = [
  {
    id: 'py-if-else',
    module: 'Control Flow',
    moduleIndex: 4,
    language: 'python',
    title: 'Conditional Statements (if / elif / else)',
    description:
      'Learn how to make your programs make decisions based on conditions.',
    sections: [
      {
        type: 'text',
        title: 'Making Decisions',
        content: `In real life, you make decisions all the time: "If it's cold, wear a jacket. Otherwise, wear a t-shirt." Python works the same way with \`if\`, \`elif\`, and \`else\` statements.\n\nThe syntax:\n\`\`\`python\nif condition:\n    # runs if condition is true\nelif another_condition:\n    # runs if the first was false but this one is true\nelse:\n    # runs if nothing above was true\n\`\`\`\n\n**Key difference from Java**: Python uses \`elif\` instead of \`else if\`, and requires a colon \`:\` at the end of each condition. Python also uses **indentation** instead of curly braces to group code blocks.`,
      },
      {
        type: 'editor',
        title: 'Try If/Elif/Else Statements',
        defaultCode: `score = 75

if score >= 90:
    print("Grade: A - Excellent!")
elif score >= 80:
    print("Grade: B - Great job!")
elif score >= 70:
    print("Grade: C - Good effort!")
elif score >= 60:
    print("Grade: D - Needs improvement")
else:
    print("Grade: F - Please see the teacher")

# Python also has a ternary operator (one-line if/else)
age = 20
status = "Adult" if age >= 18 else "Minor"
print(f"\\nStatus: {status}")`,
      },
      {
        type: 'text',
        title: 'Nested If Statements',
        content: `You can also put an \`if\` statement inside another \`if\` statement. This is called a **nested if statement**. It's useful when you need to check multiple conditions in a specific sequence.`,
      },
      {
        type: 'editor',
        title: 'Try Nested Ifs',
        defaultCode: `age = 20
weight = 60

# Checking blood donation eligibility
if age >= 18:
    if weight > 50:
        print("You are eligible to donate blood.")
    else:
        print("Wait! Your weight must be over 50kg.")
else:
    print("You must be at least 18 to donate blood.")

# You can combine conditions with 'and' to avoid nesting
if age >= 18 and weight > 50:
    print("\\nUsing 'and' — same result, cleaner code!")`,
      },
      {
        type: 'editor',
        title: 'Lab Task: Grading System',
        defaultCode: `# Write a program that takes a student's score and prints their grade.\n# A: >= 70, B: >= 60, C: >= 50, D: >= 45, F: < 45\nscore = 65\n# Your code here\n`,
      },
    ],
  },
  {
    id: 'py-loops',
    module: 'Control Flow',
    moduleIndex: 4,
    language: 'python',
    title: 'Loops',
    description:
      'Repeat code automatically with for and while loops. Plus break, continue, and range().',
    sections: [
      {
        type: 'text',
        title: 'Why Loops?',
        content: `Imagine you need to print "Hello" 100 times. You wouldn't write 100 print statements! Loops let you repeat code automatically.\n\nPython has two types of loops:\n• \`for\` — Iterates over a sequence (like a list, string, or range). Most commonly used.\n• \`while\` — Repeats while a condition is True\n\n**Note:** Python does NOT have a \`do-while\` loop like Java.`,
      },
      {
        type: 'text',
        title: 'The range() Function',
        content: `Python's \`range()\` function generates a sequence of numbers. It's commonly used with \`for\` loops:\n\n• \`range(5)\` → 0, 1, 2, 3, 4\n• \`range(1, 6)\` → 1, 2, 3, 4, 5\n• \`range(0, 10, 2)\` → 0, 2, 4, 6, 8 (step by 2)\n• \`range(10, 0, -1)\` → 10, 9, 8, ..., 1 (counting down)`,
      },
      {
        type: 'text',
        title: 'break and continue',
        content: `Two special keywords control loops:\n\n• **break** — Immediately exits the loop. Like walking out of a class early: "I'm done, I'm leaving."\n• **continue** — Skips the rest of the current iteration and jumps to the next one. Like saying: "Skip this one, move to the next."`,
      },
      {
        type: 'editor',
        title: 'Try For and While Loops',
        defaultCode: `# FOR loop - iterate over a range
print("=== For Loop ===")
for i in range(1, 6):
    print(f"Count: {i}")

# WHILE loop - repeat while condition is true
print("\\n=== While Loop ===")
x = 10
while x > 0:
    print(f"x = {x}")
    x -= 3

# BREAK - exit a loop early
print("\\n=== Break Example ===")
for i in range(1, 11):
    if i == 6:
        break  # Stop at 6
    print(f"i = {i}")

# CONTINUE - skip to next iteration
print("\\n=== Continue (skip even numbers) ===")
for i in range(1, 11):
    if i % 2 == 0:
        continue  # Skip even
    print(f"i = {i}")`,
      },
      {
        type: 'text',
        title: 'For Loop with Sequences',
        content: `Python's \`for\` loop is more versatile than Java's. You can iterate over any sequence — strings, lists, tuples, and more:\n\n\`\`\`python\n# Iterate over a string\nfor char in "Hello":\n    print(char)\n\n# Iterate over a list\nfruits = ["apple", "banana", "cherry"]\nfor fruit in fruits:\n    print(fruit)\n\n# Iterate with index using enumerate()\nfor index, fruit in enumerate(fruits):\n    print(f"{index}: {fruit}")\n\`\`\``,
      },
      {
        type: 'editor',
        title: 'Lab Task: Multiplication Table',
        defaultCode: `# Print the multiplication table for a number up to 12.\nnumber = 5\n# Use a for loop\n# Expected output format: 5 x 1 = 5\n`,
      },
    ],
  },
]

// Module 5: Functions & Objects
export const pythonFunctionsObjects = [
  {
    id: 'py-functions',
    module: 'Functions & Objects',
    moduleIndex: 5,
    language: 'python',
    title: 'Functions',
    description:
      'Learn to create reusable blocks of code — defining functions, parameters, return values, and more.',
    sections: [
      {
        type: 'text',
        title: 'What are Functions?',
        content: `A **function** is a block of code that performs a specific task. You define it once, then **call** it whenever you need it. Functions help you:\n\n• **Avoid repeating code** — Write once, use many times\n• **Organize your code** — Break big problems into smaller functions\n• **Make code readable** — Function names describe what they do`,
      },
      {
        type: 'text',
        title: 'Function Syntax',
        content: `\`\`\`python\ndef function_name(parameters):\n    # function body\n    return value  # optional\n\`\`\`\n\nLet's translate some examples into plain English:\n• \`def say_hello():\` — "A function called say_hello that takes nothing and gives nothing back"\n• \`def add(a, b):\` — "A function called add that takes two numbers and gives back a result"\n• \`def greet(name):\` — "A function called greet that takes a name and returns text"\n\n**Note the keyword \`def\`** (define) and the **colon** \`:\` at the end!`,
      },
      {
        type: 'editor',
        title: 'Creating and Using Functions',
        defaultCode: `# Function with no parameters, no return
def say_hello():
    print("Hello there!")

# Function with parameters and return value
def add(a, b):
    return a + b

# Function with default parameters
def greet(name, greeting="Welcome"):
    return f"{greeting}, {name}!"

# Function with multiple return values
def get_full_name(first, last):
    full = f"{first} {last}"
    return full, len(full)

# Using the functions
say_hello()

sum_result = add(10, 20)
print(f"10 + 20 = {sum_result}")

print(greet("Alice"))
print(greet("Bob", "Hey"))  # Override default

# Multiple return values
name, length = get_full_name("John", "Doe")
print(f"Name: {name}, Length: {length}")`,
      },
      {
        type: 'text',
        title: '*args and **kwargs',
        content: `Python has special syntax for flexible function parameters:\n\n• \`*args\` — Pass any number of positional arguments (as a tuple)\n• \`**kwargs\` — Pass any number of keyword arguments (as a dictionary)\n\nThis makes your functions more flexible!`,
      },
      {
        type: 'editor',
        title: 'Variable Scope',
        defaultCode: `# Global variable
global_count = 100

def demo_function():
    # Local variable inside a function
    local_to_function = 50
    print(f"Inside function: global = {global_count}, local = {local_to_function}")

demo_function()

# 'local_to_function' doesn't exist here!
# print(local_to_function)  # This would cause a NameError!

def demo_scope():
    x = 10  # This x is local to this function
    print(f"Inside function: x = {x}")

x = 99  # This x is different!
demo_scope()
print(f"Outside: x = {x}")  # 99, not 10!`,
      },
      {
        type: 'editor',
        title: 'Lab Task: Calculator Functions',
        defaultCode: `# Create 4 functions for add, subtract, multiply, divide.\ndef add(a, b):\n    pass\n\ndef subtract(a, b):\n    pass\n\ndef multiply(a, b):\n    pass\n\ndef divide(a, b):\n    pass\n\n# Call them and print results\nprint("5 + 3 =", add(5, 3))\nprint("10 - 4 =", subtract(10, 4))\nprint("6 * 7 =", multiply(6, 7))\nprint("15 / 4 =", divide(15, 4))`,
      },
    ],
  },
  {
    id: 'py-classes-objects',
    module: 'Functions & Objects',
    moduleIndex: 5,
    language: 'python',
    title: 'Classes & Objects',
    description:
      'Understand the anatomy of a Python class — attributes, methods, and how classes organize code.',
    sections: [
      {
        type: 'text',
        title: 'What is a Class?',
        content: `A **class** is a blueprint for creating objects. Think of it like an architectural plan for a house — the plan describes what the house will look like, but it's not a house itself. You use the plan to **build** (create) actual houses (objects).\n\nIn Python, a class defines:\n• **Attributes** (variables) — the data it holds\n• **Methods** (functions) — the actions it can perform\n\n**Key difference from Java**: Python doesn't have access modifiers (public/private/protected). Instead, it uses naming conventions — prefix with underscore \`_\` for "private" by convention.`,
      },
      {
        type: 'editor',
        title: 'Anatomy of a Class',
        defaultCode: `# A simple Student class
class Student:
    # The __init__ method is Python's constructor
    def __init__(self, name, age, gpa):
        self.name = name    # 'self' refers to the current object
        self.age = age
        self.gpa = gpa
    
    # A method
    def introduce(self):
        print(f"Hi, I'm {self.name}")
        print(f"Age: {self.age}, GPA: {self.gpa}")

# Creating objects from the class
s1 = Student("Alice", 20, 3.8)
s1.introduce()

print()

s2 = Student("Bob", 22, 3.5)
s2.introduce()`,
      },
      {
        type: 'text',
        title: 'The __init__ Method',
        content: `The \`__init__\` method is Python's **constructor**. It runs automatically when you create a new object. Its job is to **initialize** the object's attributes.\n\nRules:\n• It must be named exactly \`__init__\`\n• The first parameter is always \`self\` (refers to the new object being created)\n• It doesn't return anything\n\n**Key difference from Java**: Python doesn't have overloaded constructors. Use default parameter values instead.`,
      },
      {
        type: 'editor',
        title: 'Constructors with Default Values',
        defaultCode: `class Car:
    # Default parameter values instead of constructor overloading
    def __init__(self, brand="Unknown", color="White", year=2024):
        self.brand = brand
        self.color = color
        self.year = year
    
    def display(self):
        print(f"{self.year} {self.color} {self.brand}")

# All of these work!
car1 = Car()  # Uses all defaults
car1.display()

car2 = Car("Toyota", "Red", 2023)  # All custom
car2.display()

car3 = Car("BMW")  # Just brand, rest defaults
car3.display()`,
      },
    ],
  },
  {
    id: 'py-getters-setters',
    module: 'Functions & Objects',
    moduleIndex: 5,
    language: 'python',
    title: 'Getters & Setters (Properties)',
    description:
      'Learn how to protect your data using Python properties — the Pythonic way to do getters and setters.',
    sections: [
      {
        type: 'text',
        title: 'Why Use Getters and Setters?',
        content: `In Python, we use **properties** instead of traditional getters and setters. This allows us to control access to our data while keeping the syntax clean.\n\nPython's \`@property\` decorator lets you define methods that can be accessed like attributes — no need for \`.get_name()\` or \`.set_name()\` syntax!`,
      },
      {
        type: 'editor',
        title: 'Example: Simple Person Class',
        defaultCode: `class Person:
    def __init__(self, name):
        self._name = name  # Convention: _ means "private"
    
    # Getter using @property decorator
    @property
    def name(self):
        return self._name
    
    # Setter using @name.setter
    @name.setter
    def name(self, new_name):
        if len(new_name) < 2:
            print("Error: Name must be at least 2 characters!")
            return
        self._name = new_name

# Usage — looks like a normal attribute!
p = Person("Victor")
print(f"Name: {p.name}")  # Getter

p.name = "Alice"  # Setter
print(f"Name: {p.name}")

p.name = "X"  # This will show an error message
print(f"Name: {p.name}")  # Still "Alice"`,
      },
      {
        type: 'info',
        variant: 'tip',
        title: 'Key Differences from Java',
        content: `1. **Python** uses \`@property\` decorator — access looks like \`obj.name\`\n2. **Java** uses \`getName()\`/setName()\` methods — access looks like \`obj.getName()\`\n3. **Python** doesn't need \`get\`/\`set\` prefixes in method names\n4. **Python** properties can have validation built into the setter`,
      },
    ],
  },
  {
    id: 'py-lists',
    module: 'Functions & Objects',
    moduleIndex: 5,
    language: 'python',
    title: 'Lists & Tuples',
    description:
      'Store multiple values in a single variable — Python\'s powerful built-in collections.',
    sections: [
      {
        type: 'text',
        title: 'What is a List?',
        content: `A **list** is a collection that holds multiple values in order. Unlike Java arrays, Python lists:\n\n• Are **dynamic** — can grow and shrink\n• Can hold **mixed types** — [1, "hello", 3.14] is valid!\n• Use **square brackets** \`[]\`\n\n**Tuples** are similar but **immutable** (can't be changed after creation) and use **parentheses** \`()\`.`,
      },
      {
        type: 'editor',
        title: 'Working with Lists',
        defaultCode: `# Creating lists
numbers = [10, 20, 30, 40, 50]
names = ["Alice", "Bob", "Charlie"]
mixed = [1, "hello", 3.14, True]

# Accessing elements (index starts at 0!)
print("First number:", numbers[0])
print("Third name:", names[2])

# List length
print("List size:", len(numbers))

# Modifying elements
numbers[1] = 25
print("Modified:", numbers[1])

# List methods
fruits = ["apple", "banana"]
fruits.append("cherry")        # Add to end
fruits.insert(1, "blueberry")  # Add at index 1
print("\\nAfter adding:", fruits)

fruits.remove("banana")        # Remove by value
print("After removing:", fruits)

print("Index of cherry:", fruits.index("cherry"))
print("Contains apple:", "apple" in fruits)

# Looping through a list
print("\\nAll fruits:")
for fruit in fruits:
    print(f"  - {fruit}")

# Looping with index
print("\\nWith index:")
for i, fruit in enumerate(fruits):
    print(f"  {i}: {fruit}")`,
      },
      {
        type: 'editor',
        title: 'List Slicing (Powerful!)',
        defaultCode: `numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# Slicing: list[start:stop] (stop is exclusive!)
print("First 3:", numbers[:3])      # [0, 1, 2]
print("Last 3:", numbers[-3:])      # [7, 8, 9]
print("Middle:", numbers[3:7])      # [3, 4, 5, 6]
print("Every 2nd:", numbers[::2])   # [0, 2, 4, 6, 8]
print("Reversed:", numbers[::-1])   # [9, 8, 7, ..., 0]

# List comprehension (Python's superpower!)
squares = [x**2 for x in range(1, 6)]
print("\\nSquares:", squares)

evens = [x for x in range(20) if x % 2 == 0]
print("Evens:", evens)`,
      },
      {
        type: 'editor',
        title: 'Tuples',
        defaultCode: `# Tuples are immutable (can't change after creation)
coordinates = (10, 20)
colors = ("red", "green", "blue")

print("Coordinates:", coordinates)
print("Colors:", colors)

# Accessing (same as lists)
print("\\nFirst color:", colors[0])
print("All:", colors)

# Tuple unpacking (very Pythonic!)
x, y = coordinates
print(f"\\nx = {x}, y = {y}")

# Swapping variables (Python makes this easy!)
a, b = 5, 10
print(f"\\nBefore: a={a}, b={b}")
a, b = b, a
print(f"After: a={a}, b={b}")

# When to use tuples vs lists?
# Tuples: when data shouldn't change (coordinates, RGB values, dates)
# Lists: when data will change (shopping cart, to-do list)`,
      },
      {
        type: 'info',
        variant: 'warning',
        title: 'IndexError',
        content:
          "If you try to access an index that doesn't exist, Python will crash with an IndexError. Remember: indices go from 0 to len(list) - 1!",
      },
    ],
  },
  {
    id: 'py-dictionaries',
    module: 'Functions & Objects',
    moduleIndex: 5,
    language: 'python',
    title: 'Dictionaries',
    description:
      'Store data in key-value pairs — Python\'s most versatile data structure.',
    sections: [
      {
        type: 'text',
        title: 'What is a Dictionary?',
        content: `A **dictionary** (dict) stores data as **key-value pairs**. Think of it like a real dictionary: you look up a word (key) to find its definition (value).\n\nDictionaries:\n• Use **curly braces** \`{}\`\n• Keys must be **unique** and **immutable** (strings, numbers, tuples)\n• Values can be **anything** (any type)\n• Are **mutable** (can be changed after creation)`,
      },
      {
        type: 'editor',
        title: 'Working with Dictionaries',
        defaultCode: `# Creating a dictionary
student = {
    "name": "Alice",
    "age": 20,
    "gpa": 3.85,
    "is_student": True
}

# Accessing values
print("Name:", student["name"])
print("Age:", student.get("age"))
print("Default:", student.get("phone", "N/A"))  # Default if key missing

# Adding/Updating
student["email"] = "alice@example.com"  # Add new
student["gpa"] = 3.9                     # Update existing
print("\\nAfter updates:", student)

# Removing
del student["is_student"]
print("After delete:", student)

# Checking if key exists
print("\\nHas name?", "name" in student)
print("Has phone?", "phone" in student)

# Looping through a dictionary
print("\\nAll data:")
for key, value in student.items():
    print(f"  {key}: {value}")

# Just keys
print("\\nKeys:", list(student.keys()))

# Just values
print("Values:", list(student.values()))`,
      },
      {
        type: 'editor',
        title: 'Dictionary Comprehension',
        defaultCode: `# Dictionary comprehension (like list comprehension but for dicts)
squares = {x: x**2 for x in range(1, 6)}
print("Squares:", squares)

# Filtering
prices = {"apple": 1.5, "banana": 0.5, "cherry": 2.0, "date": 3.5}
expensive = {k: v for k, v in prices.items() if v > 1.5}
print("\\nExpensive items:", expensive)

# Nested dictionaries
students = {
    "alice": {"age": 20, "grade": "A"},
    "bob": {"age": 22, "grade": "B"}
}

print("\\nAlice's grade:", students["alice"]["grade"])`,
      },
    ],
  },
]
