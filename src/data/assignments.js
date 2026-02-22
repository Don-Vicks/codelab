// Assignment data — Lessons 1–10
export const assignments = [
  {
    id: 'assignment-1',
    title: 'Assignment 1',
    subtitle:
      'Lessons 1–10: Programming Basics, Getting Started & Java Fundamentals',
    sections: [
      {
        type: 'obj',
        title: 'Section A — Objective Questions',
        instructions: 'Choose the correct answer for each question.',
        questions: [
          {
            id: 1,
            question: 'What is programming?',
            options: [
              'Designing graphics for apps',
              'Giving step-by-step instructions to a computer',
              'Fixing broken computers',
              'Installing software',
            ],
            answer: 1,
          },
          {
            id: 2,
            question: 'Every program follows what pattern?',
            options: [
              'Start → Stop → Restart',
              'Input → Process → Output',
              'Open → Close → Save',
              'Read → Delete → Write',
            ],
            answer: 1,
          },
          {
            id: 3,
            question: 'A mistake in your code is commonly called a:',
            options: ['Glitch', 'Crash', 'Bug', 'Virus'],
            answer: 2,
          },
          {
            id: 4,
            question: 'What is the most important skill in programming?',
            options: [
              'Typing fast',
              'Memorizing all the code',
              'Breaking big problems into smaller steps',
              'Using the latest laptop',
            ],
            answer: 2,
          },
          {
            id: 5,
            question: 'What does JVM stand for?',
            options: [
              'Java Visual Machine',
              'Java Virtual Machine',
              'Java Variable Manager',
              'Java Version Manager',
            ],
            answer: 1,
          },
          {
            id: 6,
            question: 'Which of these is Java used for?',
            options: [
              'Android apps',
              'Banking systems',
              'Minecraft',
              'All of the above',
            ],
            answer: 3,
          },
          {
            id: 7,
            question: 'What is the correct way to print text in Java?',
            options: [
              'print("Hello");',
              'System.out.println("Hello");',
              'echo "Hello";',
              'console.log("Hello");',
            ],
            answer: 1,
          },
          {
            id: 8,
            question: 'Every Java statement must end with:',
            options: ['A colon :', 'A period .', 'A semicolon ;', 'A comma ,'],
            answer: 2,
          },
          {
            id: 9,
            question: 'What is the entry point of every Java program?',
            options: [
              'public void start()',
              'public static void main(String[] args)',
              'static void run()',
              'public void begin()',
            ],
            answer: 1,
          },
          {
            id: 10,
            question: 'Java is case-sensitive. This means:',
            options: [
              'Java only uses lowercase letters',
              'Main and main are the same thing',
              'Main and main are different things',
              'You must always use capital letters',
            ],
            answer: 2,
          },
          {
            id: 11,
            question: 'Which of these is a valid single-line comment in Java?',
            options: [
              '<!-- This is a comment -->',
              '# This is a comment',
              '// This is a comment',
              '** This is a comment **',
            ],
            answer: 2,
          },
          {
            id: 12,
            question: 'What is the purpose of a compiler?',
            options: [
              'To delete bugs from your code',
              'To translate your code into something the computer understands',
              'To design the user interface',
              'To connect your computer to the internet',
            ],
            answer: 1,
          },
          {
            id: 13,
            question:
              'Which of the following correctly declares an integer variable with value 25?',
            options: [
              'int age = 25;',
              'integer age = 25;',
              'int = 25 age;',
              'num age = 25;',
            ],
            answer: 0,
          },
          {
            id: 14,
            question:
              'Which data type would you use to store the word "Hello"?',
            options: ['int', 'char', 'boolean', 'String'],
            answer: 3,
          },
          {
            id: 15,
            question: 'Which data type stores true or false?',
            options: ['int', 'String', 'boolean', 'double'],
            answer: 2,
          },
        ],
      },
      {
        type: 'coding',
        title: 'Section B — Write Your Code',
        instructions:
          'Write complete Java programs from scratch for each question. Your code must compile and run.',
        questions: [
          {
            id: 1,
            question:
              'Write a Java program that prints the following three lines:',
            expectedOutput: 'Hello, World!\nWelcome to Java\nI am a programmer',
            starterCode:
              'public class Main {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}',
          },
          {
            id: 2,
            question:
              'Write a Java program that stores your name, age, and favourite food in variables, then prints them on separate lines.',
            expectedOutput: 'Name: John\nAge: 20\nFavourite food: Jollof Rice',
            starterCode:
              'public class Main {\n    public static void main(String[] args) {\n        // Create your variables and print them here\n    }\n}',
          },
          {
            id: 3,
            question:
              'Write a Java program that creates one variable for each of these types: int, double, String, boolean, and char. Print all five variables with labels.',
            expectedOutput:
              'My age is: 20\nMy GPA is: 3.85\nMy name is: John\nI am a student: true\nMy grade is: A',
            starterCode:
              'public class Main {\n    public static void main(String[] args) {\n        // Create one variable of each type and print them\n    }\n}',
          },
        ],
      },
    ],
  },
]
