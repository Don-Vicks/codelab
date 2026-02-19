// Module 0: Programming Basics
export const programmingBasics = [
  {
    id: 'what-is-programming',
    module: 'Programming Basics',
    moduleIndex: 0,
    title: 'What is Programming?',
    description:
      "Before we touch Java, let's understand what programming actually is — in the simplest way possible.",
    sections: [
      {
        type: 'text',
        title: 'So What Exactly is Programming?',
        content: `Imagine you\'re telling your younger sibling how to make Indomie noodles. You\'d say:\n\n1. Boil water\n2. Put the noodles in\n3. Wait 3 minutes\n4. Add the seasoning\n5. Serve\n\nThat\'s basically programming! You\'re giving step-by-step instructions. The only difference is that instead of telling a person, you\'re telling a **computer**.\n\nA computer is very fast but very dumb — it can only do exactly what you tell it. If you forget to say "add the seasoning", it will make bland noodles. Programming is just the act of writing these instructions in a language the computer understands.`,
      },
      {
        type: 'text',
        title: 'Why Should You Learn This?',
        content: `Everything you use daily runs on code:\n\n• WhatsApp — someone wrote code to send your messages\n• Instagram — code makes the feed, stories, and filters work\n• ATMs — code handles your money\n• Even your phone\'s calculator — code does the math\n\nLearning to code means you can **build things**, **solve problems**, and **get good jobs**. It\'s one of the most useful skills you can learn today.`,
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
            title: 'Compiler',
            description:
              'A tool that translates your code into something the computer understands',
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
    id: 'how-programs-work',
    module: 'Programming Basics',
    moduleIndex: 0,
    title: 'How Programs Work',
    description:
      'Understand the simple flow: you write code, the computer reads it, and something happens.',
    sections: [
      {
        type: 'text',
        title: 'The Simple Version',
        content: `Here\'s how every program works in 3 steps:\n\n1. **You write code** in a text file (like typing in a document)\n2. **The computer reads it** (translates it into something it understands)\n3. **Something happens** (text appears on screen, a calculation is done, etc.)\n\nThat\'s it. That\'s the whole process. Don\'t let anyone overcomplicate it.`,
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
        content: `Think about using Google Search:\n\n• **Input**: You type "weather today" into the search bar\n• **Process**: Google\'s code searches through billions of web pages\n• **Output**: You see the weather results on your screen\n\nEvery app works like this. Even a simple calculator: input numbers → process the math → output the answer.`,
      },
    ],
  },
  {
    id: 'core-concepts',
    module: 'Programming Basics',
    moduleIndex: 0,
    title: 'Core Concepts (Simple Version)',
    description:
      'The basic building blocks you\'ll find in every programming language. Think of these as the "vocabulary" of coding.',
    sections: [
      {
        type: 'text',
        title: 'The Building Blocks',
        content: `No matter what programming language you learn (Java, Python, JavaScript — any of them), they all use the same basic ideas. Once you understand these, learning any language becomes way easier.`,
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
            title: 'Functions / Methods',
            description:
              'A reusable chunk of code. Write it once, use it whenever you need it.',
          },
        ],
      },
      {
        type: 'text',
        title: 'Variables — Think of a Labeled Box',
        content: `A **variable** is like a labeled box. You give it a name and put something inside.\n\nImagine a box with "name" written on it, and inside you put "John". In code, that looks like:\n\n\`String name = "John";\`\n\nYou can change what\'s inside whenever you want. That\'s why it\'s called a "variable" — it can vary!`,
      },
      {
        type: 'text',
        title: 'Decisions — IF This, Do That',
        content: `Your code can make choices, just like you do:\n\n• IF it\'s hot → turn on the fan\n• IF you have money → buy food, OTHERWISE → cook at home\n• IF the password is correct → let them in\n\nEvery programming language lets you write these kinds of rules.`,
      },
    ],
  },
  {
    id: 'thinking-like-a-programmer',
    module: 'Programming Basics',
    moduleIndex: 0,
    title: 'Thinking Like a Programmer',
    description:
      'The most important skill — how to break big problems into small, simple steps.',
    sections: [
      {
        type: 'text',
        title: 'Break It Down!',
        content: `The #1 skill in programming is NOT typing fast or memorizing syntax. It\'s **breaking big problems into smaller ones**.\n\nLet\'s say your lecturer asks you to "build a calculator." That sounds scary. But break it down:\n\n1. Ask the user for the first number\n2. Ask them what operation they want (+, -, ×, ÷)\n3. Ask for the second number\n4. Do the math\n5. Show the answer\n\nSee? Each step on its own is simple. That\'s how programmers think.`,
      },
      {
        type: 'text',
        title: 'Write It Out in Plain English First',
        content: `Before writing any actual code, try writing what your program should do in plain English (or pidgin, or whatever you speak!).\n\nFor example, a program that checks if someone can vote:\n\n"Ask the person their age. If their age is 18 or more, tell them they can vote. If not, tell them they\'re too young."\n\nOnce you have this written out, turning it into code becomes much easier because you already know the logic!`,
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

// Module 1: Getting Started with Java
export const gettingStarted = [
  {
    id: 'what-is-java',
    module: 'Getting Started',
    moduleIndex: 1,
    title: 'What is Java?',
    description: "Why we're learning Java and what makes it special.",
    sections: [
      {
        type: 'text',
        title: 'Java in Simple Terms',
        content: `Java is a **programming language** — one of the most popular ones in the world. It was created in 1995 and is still used everywhere today.\n\nWhat makes Java special is that code you write in Java can run on almost any computer — Windows, Mac, Linux, phones, you name it. This is because Java has something called the **JVM (Java Virtual Machine)** that translates your code for whatever device it\'s running on.`,
      },
      {
        type: 'text',
        title: 'Where is Java Used?',
        content: `You interact with Java-powered things every day:\n\n• **Android apps** — Most Android apps are built with Java\n• **Banks** — Banking systems use Java because it\'s reliable\n• **Web applications** — Many websites run Java on the server\n• **Minecraft** — Yes, Minecraft is written in Java!\n\nLearning Java means you\'re learning something that\'s actually used in the real world.`,
      },
      {
        type: 'concept-cards',
        cards: [
          {
            icon: '☕',
            title: 'JDK',
            description:
              'Java Development Kit — the toolbox you need to write and run Java code',
          },
          {
            icon: '🏃',
            title: 'JRE',
            description:
              'Java Runtime Environment — lets your computer run Java programs',
          },
          {
            icon: '🖥️',
            title: 'JVM',
            description:
              'Java Virtual Machine — the clever bit that makes Java run on any device',
          },
        ],
      },
    ],
  },
  {
    id: 'setting-up',
    module: 'Getting Started',
    moduleIndex: 1,
    title: 'Setting Up',
    description:
      'The tools you can use to write Java — or just use this website!',
    sections: [
      {
        type: 'info',
        variant: 'tip',
        title: "You Don't Need to Install Anything!",
        content:
          "You can write and run Java code right here on this website using the Playground or the code editors in each lesson. If you don't have a laptop, you're covered. But if you want to set things up on your own computer later, read on.",
      },
      {
        type: 'text',
        title: 'If You Have a Laptop',
        content: `To run Java on your own computer, you need two things:\n\n1. **The JDK** — Download it for free from [adoptium.net](https://adoptium.net)\n2. **An IDE** (a fancy text editor for code) — see the recommendations at the bottom of this page\n\nBut again, for learning? This website is all you need. The Playground lets you write and run any Java code instantly.`,
      },
    ],
  },
  {
    id: 'first-program',
    module: 'Getting Started',
    moduleIndex: 1,
    title: 'Your First Java Program',
    description:
      "Let's write your very first program. It's just 5 lines of code!",
    sections: [
      {
        type: 'text',
        title: 'Hello, World!',
        content: `Every programmer\'s first program is "Hello, World!" — a simple program that just shows a message on screen. Let\'s write it together.`,
      },
      {
        type: 'editor',
        title: 'Click Run to see it work!',
        defaultCode: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}`,
      },
      {
        type: 'text',
        title: 'What Does Each Line Mean?',
        content: `Don\'t worry about memorizing this right now. Just get the general idea:\n\n• \`public class Main\` — This creates a "container" for your code called Main. All Java code goes inside a class like this.\n\n• \`public static void main(String[] args)\` — This is the **starting point**. When you click Run, Java looks for this line and starts here. Think of it as the front door of your program.\n\n• \`System.out.println("Hello, World!");\` — This **prints text** to the screen. Whatever you put inside the quotes will be displayed.\n\n• The curly braces \`{ }\` — These are like containers that group code together.\n\n• The semicolon \`;\` — This marks the **end of a statement**. It\'s like a period at the end of a sentence. Forget it and Java will complain!`,
      },
      {
        type: 'info',
        variant: 'warning',
        title: 'Two Things That Trip Up Beginners',
        content:
          'Java cares about UPPERCASE and lowercase. "System" is NOT the same as "system". Also, don\'t forget the semicolon ; at the end of lines — it\'s the #1 beginner mistake.',
      },
      {
        type: 'editor',
        title: 'Try It — Change the message to your name!',
        defaultCode: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("My name is ___");\n        System.out.println("I am learning Java!");\n        System.out.println("This is exciting!");\n    }\n}`,
      },
    ],
  },
]
