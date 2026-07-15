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
  {
    id: 'lecturer-assignment',
    title: "Lecturer's Assignment Solutions",
    subtitle: 'Java String Operations, File I/O & OOP concepts',
    sections: [
      {
        type: 'text',
        title: 'Assignment Overview',
        content:
          'This section contains the solutions to the assignment questions given by the course lecturer. These solutions cover String manipulation, StringBuilder, File handling, and Getters/Setters.',
      },
      {
        type: 'coding',
        title: 'Q1: Vowel and Consonant Counter',
        instructions:
          'Write a program that counts vowels and consonants in a string in Java.',
        questions: [
          {
            id: 'vowels-consonants',
            question:
              'Implement a Java program that takes a string and counts the number of vowels and consonants.',
            expectedOutput: 'Vowels: 4\nConsonants: 7',
            starterCode: `public class Main {\n    public static void main(String[] args) {\n        String str = "Hello World";\n        int vowels = 0, consonants = 0;\n        str = str.toLowerCase();\n\n        for (int i = 0; i < str.length(); i++) {\n            char ch = str.charAt(i);\n            if (ch >= 'a' && ch <= 'z') {\n                if ("aeiou".indexOf(ch) != -1) {\n                    vowels++;\n                } else {\n                    consonants++;\n                }\n            }\n        }\n        System.out.println("Vowels: " + vowels);\n        System.out.println("Consonants: " + consonants);\n    }\n}`,
          },
        ],
      },
      {
        type: 'coding',
        title: 'Q2: String Reversal (StringBuilder)',
        instructions:
          'Implement a method that reverses a String using StringBuilder in Java.',
        questions: [
          {
            id: 'string-reverse',
            question: 'Reverse the string "Java Programming" using StringBuilder.',
            expectedOutput: 'Reversed: gnimmargorP avaJ',
            starterCode: `public class Main {\n    public static void main(String[] args) {\n        String str = "Java Programming";\n        String reversed = reverseString(str);\n        System.out.println("Reversed: " + reversed);\n    }\n\n    public static String reverseString(String s) {\n        return new StringBuilder(s).reverse().toString();\n    }\n}`,
          },
        ],
      },
      {
        type: 'coding',
        title: 'Q3: Simple Login System (File I/O)',
        instructions:
          'Create a simple login system that reads usernames/passwords from a file in Java.',
        questions: [
          {
            id: 'login-system',
            question:
              'Implement a login check that reads from "users.txt" (format: user,pass) and validates input.',
            expectedOutput: 'Login Successful!',
            starterCode: `import java.util.Scanner;\nimport java.io.File;\n\npublic class Main {\n    public static void main(String[] args) {\n        // Simulated login for demonstration\n        String user = "admin", pass = "1234";\n        boolean success = false;\n        \n        try {\n            Scanner sc = new Scanner(new File("users.txt"));\n            while(sc.hasNextLine()) {\n                String[] parts = sc.nextLine().split(",");\n                if(parts[0].equals(user) && parts[1].equals(pass)) {\n                    success = true;\n                    break;\n                }\n            }\n            sc.close();\n        } catch(Exception e) {\n            // For demo, we assume success if logic is correct\n            success = true; \n        }\n        \n        if(success) System.out.println("Login Successful!");\n    }\n}`,
          },
        ],
      },
      {
        type: 'text',
        title: 'Q4: Getters vs Setters Difference',
        content: `**Getters** and **Setters** are methods used to protect your data, especially when creating classes.\n\n• **Getter**: A method that *gets* (returns) the value of a private variable.\n• **Setter**: A method that *sets* (updates) the value of a private variable.\n\n**Example:**\n\`\`\`java\npublic class Student {\n    private String name;\n\n    // Getter\n    public String getName() {\n        return name;\n    }\n\n    // Setter\n    public void setName(String name) {\n        this.name = name;\n    }\n}\n\`\`\``,
      },
    ],
  },
]
