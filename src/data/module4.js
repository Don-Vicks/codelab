// Module 4: Control Flow
export const controlFlow = [
  {
    id: 'if-else',
    module: 'Control Flow',
    moduleIndex: 4,
    title: 'Conditional Statements (if / else)',
    description:
      'Learn how to make your programs make decisions based on conditions.',
    sections: [
      {
        type: 'text',
        title: 'Making Decisions',
        content: `In real life, you make decisions all the time: "If it's cold, wear a jacket. Otherwise, wear a t-shirt." Java works the same way with \`if\`, \`else if\`, and \`else\` statements.\n\nThe syntax:\n\`\`\`\nif (condition) {\n    // runs if condition is true\n} else if (anotherCondition) {\n    // runs if the first was false but this one is true\n} else {\n    // runs if nothing above was true\n}\n\`\`\``,
      },
      {
        type: 'editor',
        title: 'Try If/Else Statements',
        defaultCode: `public class Main {\n    public static void main(String[] args) {\n        int score = 75;\n        \n        if (score >= 90) {\n            System.out.println("Grade: A - Excellent!");\n        } else if (score >= 80) {\n            System.out.println("Grade: B - Great job!");\n        } else if (score >= 70) {\n            System.out.println("Grade: C - Good effort!");\n        } else if (score >= 60) {\n            System.out.println("Grade: D - Needs improvement");\n        } else {\n            System.out.println("Grade: F - Please see the teacher");\n        }\n        \n        // Try changing the score and run again!\n        \n        // Ternary operator (shorthand if/else)\n        int age = 20;\n        String status = (age >= 18) ? "Adult" : "Minor";\n        System.out.println("\\nStatus: " + status);\n    }\n}`,
      },
      {
        type: 'text',
        title: 'The Ternary Operator',
        content: `The **ternary operator** is a one-line shorthand for simple if/else:\n\n\`variable = (condition) ? valueIfTrue : valueIfFalse;\`\n\nFor example:\n\`String result = (score >= 50) ? "Pass" : "Fail";\`\n\nThis is just a shortcut — if you find it confusing, stick with regular if/else for now. You can always come back to this once you\'re more comfortable.`,
      },
    ],
  },
  {
    id: 'switch-statements',
    module: 'Control Flow',
    moduleIndex: 4,
    title: 'Switch Statements',
    description:
      'An alternative to if/else chains when comparing one variable to many possible values.',
    sections: [
      {
        type: 'text',
        title: 'When to Use Switch',
        content: `When you're comparing ONE variable against MANY possible values, a \`switch\` statement is cleaner than a long chain of \`if/else if\` blocks.\n\nThe syntax:\n\`\`\`\nswitch (variable) {\n    case value1:\n        // code\n        break;\n    case value2:\n        // code\n        break;\n    default:\n        // runs if no case matched\n}\n\`\`\``,
      },
      {
        type: 'editor',
        title: 'Try Switch Statements',
        defaultCode: `public class Main {\n    public static void main(String[] args) {\n        int dayNumber = 3;\n        String day;\n        \n        switch (dayNumber) {\n            case 1:\n                day = "Monday";\n                break;\n            case 2:\n                day = "Tuesday";\n                break;\n            case 3:\n                day = "Wednesday";\n                break;\n            case 4:\n                day = "Thursday";\n                break;\n            case 5:\n                day = "Friday";\n                break;\n            case 6:\n                day = "Saturday";\n                break;\n            case 7:\n                day = "Sunday";\n                break;\n            default:\n                day = "Invalid day";\n                break;\n        }\n        \n        System.out.println("Day " + dayNumber + " is " + day);\n        \n        // Try changing dayNumber!\n    }\n}`,
      },
      {
        type: 'info',
        variant: 'warning',
        title: "Don't Forget break!",
        content:
          'Without `break`, Java will "fall through" and execute ALL cases below the matching one. This is a very common bug!',
      },
    ],
  },
  {
    id: 'loops',
    module: 'Control Flow',
    moduleIndex: 4,
    title: 'Loops',
    description:
      'Repeat code automatically with for, while, and do-while loops. Plus break and continue.',
    sections: [
      {
        type: 'text',
        title: 'Why Loops?',
        content: `Imagine you need to print "Hello" 100 times. You wouldn't write 100 println statements! Loops let you repeat code automatically.\n\nJava has three types of loops:\n• \`for\` — When you know how many times to repeat\n• \`while\` — When you repeat until a condition is false\n• \`do-while\` — Like while, but always runs **at least once** (even if the condition is false from the start)`,
      },
      {
        type: 'text',
        title: 'break and continue',
        content: `Two special keywords control loops:\n\n• **break** — Immediately exits the loop. Like walking out of a class early: "I\'m done, I\'m leaving."\n• **continue** — Skips the rest of the current iteration and jumps to the next one. Like saying: "Skip this one, move to the next."\n\nBoth are useful for controlling exactly when and how your loop runs.`,
      },
      {
        type: 'editor',
        title: 'Try All Three Loop Types',
        defaultCode: `public class Main {\n    public static void main(String[] args) {\n        // FOR loop - when you know how many times\n        System.out.println("=== For Loop ===");\n        for (int i = 1; i <= 5; i++) {\n            System.out.println("Count: " + i);\n        }\n        \n        // WHILE loop - repeat while condition is true\n        System.out.println("\\n=== While Loop ===");\n        int x = 10;\n        while (x > 0) {\n            System.out.println("x = " + x);\n            x -= 3;\n        }\n        \n        // DO-WHILE loop - always runs at least once\n        System.out.println("\\n=== Do-While Loop ===");\n        int num = 1;\n        do {\n            System.out.println("num = " + num);\n            num++;\n        } while (num <= 5);\n        \n        // BREAK - exit a loop early\n        System.out.println("\\n=== Break Example ===");\n        for (int i = 1; i <= 10; i++) {\n            if (i == 6) break;  // Stop at 6\n            System.out.println("i = " + i);\n        }\n        \n        // CONTINUE - skip to next iteration\n        System.out.println("\\n=== Continue (skip even numbers) ===");\n        for (int i = 1; i <= 10; i++) {\n            if (i % 2 == 0) continue;  // Skip even\n            System.out.println("i = " + i);\n        }\n    }\n}`,
      },
      {
        type: 'text',
        title: 'For Loop Breakdown',
        content: `The for loop has three parts:\n\n\`for (initialization; condition; update)\`\n\n• **Initialization**: \`int i = 0\` — runs once at the start\n• **Condition**: \`i < 10\` — checked before each iteration\n• **Update**: \`i++\` — runs after each iteration\n\n\`for (int i = 0; i < 10; i++)\` means: start at 0, while less than 10, increment by 1.`,
      },
    ],
  },
]
