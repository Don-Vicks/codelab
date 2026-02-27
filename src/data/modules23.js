// Module 2: Java Fundamentals
export const javaFundamentals = [
  {
    id: 'syntax-structure',
    module: 'Java Fundamentals',
    moduleIndex: 2,
    title: 'Java Syntax & Structure',
    description:
      'Learn the rules and structure of Java code — statements, blocks, comments, and naming conventions.',
    sections: [
      {
        type: 'text',
        title: 'The Rules of Java',
        content: `Every language has grammar rules. Java's rules are called **syntax**. If you break them, your code won't compile. Here are the key rules:\n\n• Every statement ends with a **semicolon** \`;\`\n• Code blocks are wrapped in **curly braces** \`{}\`\n• Java is **case-sensitive** — \`main\` and \`Main\` are different\n• Class names start with an **uppercase** letter: \`MyClass\`\n• Variable/method names start with a **lowercase** letter: \`myVariable\``,
      },
      {
        type: 'text',
        title: 'Comments — Leaving Notes in Your Code',
        content: `Comments are notes for humans — the compiler ignores them completely. Use them to explain your code:\n\n• **Single-line comment**: \`// This is a comment\`\n• **Multi-line comment**: \`/* This is a multi-line comment */\`\n• **Javadoc comment**: \`/** Used to generate documentation */\``,
      },
      {
        type: 'editor',
        title: 'Comments in Action',
        defaultCode: `public class Main {\n    public static void main(String[] args) {\n        // This is a single-line comment\n        System.out.println("Comments are ignored by Java!");\n        \n        /* This is a\n           multi-line comment.\n           It can span several lines. */\n        System.out.println("But this code runs!");\n        \n        // Try adding your own comment below:\n        System.out.println("Hello from my code!");\n    }\n}`,
      },
      {
        type: 'info',
        variant: 'tip',
        title: 'Best Practice',
        content:
          'Write comments to explain WHY you did something, not WHAT the code does. Good code should be readable on its own. Comments are for the tricky parts.',
      },
    ],
  },
  {
    id: 'variables-data-types',
    module: 'Java Fundamentals',
    moduleIndex: 2,
    title: 'Variables & Data Types',
    description:
      'Learn how to store different kinds of data — numbers, text, true/false values, and more.',
    sections: [
      {
        type: 'text',
        title: 'What is a Variable?',
        content: `A variable is a **named container** that holds a value. In Java, you must declare what **type** of data a variable will hold before using it.\n\nThe syntax is: \`type name = value;\`\n\nFor example: \`int age = 20;\` creates a variable named "age" that holds the integer 20.`,
      },
      {
        type: 'text',
        title: 'Java Data Types',
        content: `Java has two categories of data types:\n\n**Primitive Types** (built into the language):\n• \`int\` — Whole numbers: 1, 42, -100\n• \`double\` — Decimal numbers: 3.14, -0.5\n• \`float\` — Decimal numbers with less precision than double (add \`f\`): 3.14f\n• \`char\` — Single character: 'A', 'z', '9'\n• \`boolean\` — True or false: true, false\n• \`long\` — Very large whole numbers\n• \`byte\` — Small numbers (-128 to 127)\n• \`short\` — Medium numbers (-32768 to 32767)\n\n**Reference Types**:\n• \`String\` — Text: "Hello World" (note the capital S!)\n• Arrays, Objects, and more (we'll cover these later)`,
      },
      {
        type: 'editor',
        title: 'Try Different Data Types',
        defaultCode: `public class Main {\n    public static void main(String[] args) {\n        // Integer (whole numbers)\n        int age = 20;\n        System.out.println("Age: " + age);\n        \n        // Double (decimal numbers)\n        double gpa = 3.85;\n        System.out.println("GPA: " + gpa);\n        \n        // String (text)\n        String name = "John";\n        System.out.println("Name: " + name);\n        \n        // Boolean (true/false)\n        boolean isStudent = true;\n        System.out.println("Is Student: " + isStudent);\n        \n        // Char (single character)\n        char grade = 'A';\n        System.out.println("Grade: " + grade);\n    }\n}`,
      },
      {
        type: 'info',
        variant: 'warning',
        title: 'Common Mistake',
        content:
          'String uses double quotes "hello" but char uses single quotes \'A\'. Mixing these up will cause an error!',
      },
      {
        type: 'text',
        title: 'Declaring vs Initializing',
        content: `You can **declare** a variable (create it) and **initialize** it (give it a value) separately:\n\n\`\`\`\nint score;         // Declaration (no value yet)\nscore = 95;        // Initialization (now it has a value)\n\nint score = 95;    // Declaration + Initialization in one line\n\`\`\`\n\nYou can also declare multiple variables of the same type on one line:\n\n\`int x = 5, y = 10, z = 15;\``,
      },
      {
        type: 'editor',
        title: 'Lab Task 2B: Student Information Manager',
        defaultCode: `// Store and print a student's name, age, GPA, isGraduating, and grade.\npublic class StudentInfo {\n    public static void main(String[] args) {\n        // Declare variables and initialize them\n        \n        // Print them out\n        System.out.println("Student Information");\n        System.out.println("-------------------");\n    }\n}`,
      },
    ],
  },
  {
    id: 'type-casting',
    module: 'Java Fundamentals',
    moduleIndex: 2,
    title: 'Type Casting',
    description:
      'Learn how to convert data from one type to another — widening, narrowing, and when Java does it automatically.',
    sections: [
      {
        type: 'text',
        title: 'What is Type Casting?',
        content: `**Type casting** is converting a value from one data type to another. For example, converting an \`int\` to a \`double\`, or a \`double\` to an \`int\`.\n\nThere are two types:\n\n• **Widening (Automatic)** — Going from a smaller type to a larger type. Java does this automatically because no data is lost. Think of it like pouring water from a small cup into a big bucket — nothing spills.\n  \`byte → short → int → long → float → double\`\n\n• **Narrowing (Manual)** — Going from a larger type to a smaller type. You must do this explicitly because data might be lost. It's like pouring from a bucket into a cup — some water overflows.\n  \`double → float → long → int → short → byte\``,
      },
      {
        type: 'editor',
        title: 'Type Casting Examples',
        defaultCode: `public class Main {\n    public static void main(String[] args) {\n        // WIDENING (automatic) - small to large\n        int myInt = 42;\n        double myDouble = myInt;  // Automatic: int → double\n        System.out.println("int value: " + myInt);\n        System.out.println("double value: " + myDouble);\n        \n        System.out.println("---");\n        \n        // NARROWING (manual) - large to small\n        double price = 9.99;\n        int rounded = (int) price;  // Manual: double → int\n        System.out.println("double value: " + price);\n        System.out.println("int value: " + rounded);\n        // Notice: the decimal part is LOST, not rounded!\n        \n        System.out.println("---");\n        \n        // String to int conversion\n        String numberText = "123";\n        int number = Integer.parseInt(numberText);\n        System.out.println("Converted: " + number);\n    }\n}`,
      },
      {
        type: 'info',
        variant: 'warning',
        title: 'Data Loss!',
        content:
          'When narrowing, decimal parts are TRUNCATED (cut off), not rounded. (int) 9.99 gives you 9, not 10!',
      },
    ],
  },
  {
    id: 'user-input-scanner',
    module: 'Java Fundamentals',
    moduleIndex: 2,
    title: 'User Input with Scanner',
    description:
      "Learn how to accept input from the user using Java's Scanner class — read numbers, text, and more.",
    sections: [
      {
        type: 'text',
        title: 'Reading User Input',
        content: `So far, all our programs just print output. But real programs need **input** from users. Java provides the \`Scanner\` class for reading input from the keyboard.\n\nTo use Scanner, you need to:\n1. **Import** it: \`import java.util.Scanner;\`\n2. **Create** a Scanner object: \`Scanner scanner = new Scanner(System.in);\`\n3. **Use** its methods to read data\n\n**Note:** Since this website\'s Playground can\'t accept live keyboard input, the example below simulates it. On your own computer with an IDE, Scanner would pause and wait for you to type.`,
      },
      {
        type: 'text',
        title: 'Scanner Methods',
        content: `Scanner has different methods for reading different data types:\n\n• \`nextLine()\` — Reads a full line of text (String)\n• \`next()\` — Reads a single word (String)\n• \`nextInt()\` — Reads an integer (int)\n• \`nextDouble()\` — Reads a decimal number (double)\n• \`nextBoolean()\` — Reads true/false (boolean)\n• \`nextFloat()\` — Reads a float`,
      },
      {
        type: 'editor',
        title:
          "Scanner Example (since we can't type input here, we hardcode values)",
        defaultCode: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        // In a real program, Scanner reads from keyboard.\n        // Here we demonstrate the pattern:\n        \n        // Creating a Scanner that reads from a String\n        // (simulating user input "John 20 3.85")\n        String simulatedInput = "John\\n20\\n3.85";\n        Scanner scanner = new Scanner(simulatedInput);\n        \n        // Reading a String\n        System.out.print("Enter your name: ");\n        String name = scanner.nextLine();\n        System.out.println("Hello, " + name + "!");\n        \n        // Reading an int\n        System.out.print("Enter your age: ");\n        int age = scanner.nextInt();\n        System.out.println("You are " + age + " years old.");\n        \n        // Reading a double\n        System.out.print("Enter your GPA: ");\n        double gpa = scanner.nextDouble();\n        System.out.println("Your GPA is: " + gpa);\n        \n        scanner.close();\n        System.out.println("\\n--- How to write this in your IDE ---");\n        System.out.println("Scanner sc = new Scanner(System.in);");\n        System.out.println("String name = sc.nextLine();");\n        System.out.println("int age = sc.nextInt();");\n    }\n}`,
      },
      {
        type: 'info',
        variant: 'tip',
        title: 'In Your IDE',
        content:
          'When you use `Scanner scanner = new Scanner(System.in);` in IntelliJ or Eclipse, the program will pause and wait for you to type. Try it on your computer!',
      },
      {
        type: 'info',
        variant: 'warning',
        title: 'Common Bug: nextLine() after nextInt()',
        content:
          "After calling nextInt(), there's a leftover newline character. If you call nextLine() right after, it reads that empty line. Fix: add an extra scanner.nextLine() to consume it.",
      },
    ],
  },
  {
    id: 'best-practices-errors',
    module: 'Java Fundamentals',
    moduleIndex: 2,
    title: 'Best Practices & Common Errors',
    description:
      'Learn good coding standards, naming conventions, and how to spot common Java errors before they happen.',
    sections: [
      {
        type: 'text',
        title: 'Naming Conventions',
        content: `Writing code that works is only half the job. The other half is writing code that people can read! Professional Java developers follow these naming rules:\n\n• **Classes**: Use \`PascalCase\` (e.g., \`FirstProgram\`, \`StudentInfo\`). The first letter of every word is capitalized.\n• **Variables & Methods**: Use \`camelCase\` (e.g., \`studentAge\`, \`calculateTotal()\`). The first letter is lowercase, but subsequent words are capitalized.\n• **Constants**: Use \`UPPER_SNAKE_CASE\` (e.g., \`MAX_SIZE\`, \`PI\`).\n\nAlso, always use **meaningful names**. \`studentAge\` is much better than \`a\`.`,
      },
      {
        type: 'text',
        title: 'Common Errors & Debugging',
        content: `As you write Java, you will encounter errors. Don't panic! It's part of the process. Here are the most common types:\n\n**Compilation Errors (Syntax Errors)**:\nThese happen before your program even runs. The compiler catches them.\n• Missing semicolon \`;\` at the end of a statement.\n• Mismatched curly brackets \`{}\`.\n• Using an undefined variable.\n• Your file name doesn't match your \`public class\` name (e.g., file is \`main.java\` but class is \`public class FirstProgram\`).\n\n**Runtime Errors**:\nThese happen while your program is running.\n• **InputMismatchException**: You asked for an \`int\` (e.g., using \`nextInt()\`), but the user typed a String like "hello".\n• Arithmetic exceptions, like dividing by zero.\n\n**Logical Errors**:\nYour program runs, but gives the wrong output.\n• Wrong operator precedence (e.g., \`a + b * c\` when you meant \`(a + b) * c\`).\n• Using the wrong data type.`,
      },
      {
        type: 'info',
        variant: 'tip',
        title: 'Golden Rule of Debugging',
        content:
          'When you get an error message, read it! Java usually tells you exactly which line caused the problem and what kind of error it is.',
      },
    ],
  },
]

// Module 3: Operators
export const operators = [
  {
    id: 'arithmetic-operators',
    module: 'Operators',
    moduleIndex: 3,
    title: 'Arithmetic Operators',
    description:
      'Learn how to perform math in Java — addition, subtraction, multiplication, division, and modulus.',
    sections: [
      {
        type: 'text',
        title: 'Math in Java',
        content: `Arithmetic operators let you perform mathematical operations on numbers. They work just like the math you already know!`,
      },
      {
        type: 'table',
        headers: ['Operator', 'Name', 'Example', 'Result'],
        rows: [
          ['`+`', 'Addition', '5 + 3', '8'],
          ['`-`', 'Subtraction', '10 - 4', '6'],
          ['`*`', 'Multiplication', '6 * 7', '42'],
          ['`/`', 'Division', '15 / 4', '3 (integer division!)'],
          ['`%`', 'Modulus (remainder)', '17 % 5', '2'],
          ['`++`', 'Increment', 'x++ or ++x', 'x + 1'],
          ['`--`', 'Decrement', 'x-- or --x', 'x - 1'],
        ],
      },
      {
        type: 'info',
        variant: 'tip',
        title: 'When is Modulus (%) useful?',
        content:
          "Modulus gives you the remainder after division. It's great for checking if a number is even or odd: `number % 2 == 0` means even, `number % 2 != 0` means odd. You'll use this a lot!",
      },
      {
        type: 'editor',
        title: 'Try Arithmetic Operators',
        defaultCode: `public class Main {\n    public static void main(String[] args) {\n        int a = 15, b = 4;\n        \n        System.out.println("a + b = " + (a + b));  // 19\n        System.out.println("a - b = " + (a - b));  // 11\n        System.out.println("a * b = " + (a * b));  // 60\n        System.out.println("a / b = " + (a / b));  // 3 (not 3.75!)\n        System.out.println("a % b = " + (a % b));  // 3 (remainder)\n        \n        // Integer division vs double division\n        System.out.println("\\n--- Integer vs Double Division ---");\n        System.out.println("15 / 4 = " + (15 / 4));       // 3\n        System.out.println("15.0 / 4 = " + (15.0 / 4));   // 3.75\n        \n        // Increment and Decrement\n        System.out.println("\\n--- Increment / Decrement ---");\n        int count = 10;\n        count++;\n        System.out.println("After count++: " + count);  // 11\n        count--;\n        System.out.println("After count--: " + count);  // 10\n    }\n}`,
      },
      {
        type: 'info',
        variant: 'warning',
        title: 'Integer Division Trap',
        content:
          '15 / 4 = 3 (not 3.75!) in Java because both are integers. To get decimals, make at least one number a double: 15.0 / 4 = 3.75',
      },
    ],
  },
  {
    id: 'relational-comparison',
    module: 'Operators',
    moduleIndex: 3,
    title: 'Comparison Operators',
    description:
      'Learn how to compare values — is something greater, less, or equal?',
    sections: [
      {
        type: 'text',
        title: 'Comparing Values',
        content: `Relational operators compare two values and return a **boolean** result (\`true\` or \`false\`). They're essential for making decisions in your code.`,
      },
      {
        type: 'table',
        headers: ['Operator', 'Meaning', 'Example', 'Result'],
        rows: [
          ['`==`', 'Equal to', '5 == 5', 'true'],
          ['`!=`', 'Not equal to', '5 != 3', 'true'],
          ['`>`', 'Greater than', '10 > 5', 'true'],
          ['`<`', 'Less than', '3 < 7', 'true'],
          ['`>=`', 'Greater than or equal', '5 >= 5', 'true'],
          ['`<=`', 'Less than or equal', '4 <= 3', 'false'],
        ],
      },
      {
        type: 'editor',
        title: 'Try Comparison Operators',
        defaultCode: `public class Main {\n    public static void main(String[] args) {\n        int x = 10, y = 20;\n        \n        System.out.println("x == y: " + (x == y));  // false\n        System.out.println("x != y: " + (x != y));  // true\n        System.out.println("x > y: " + (x > y));    // false\n        System.out.println("x < y: " + (x < y));    // true\n        System.out.println("x >= 10: " + (x >= 10)); // true\n        System.out.println("y <= 15: " + (y <= 15)); // false\n        \n        // Using in a condition\n        int age = 18;\n        if (age >= 18) {\n            System.out.println("\\nYou are an adult!");\n        }\n    }\n}`,
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
    id: 'logical-operators',
    module: 'Operators',
    moduleIndex: 3,
    title: 'Logical Operators',
    description: 'Combine multiple conditions with AND, OR, and NOT operators.',
    sections: [
      {
        type: 'text',
        title: 'Combining Conditions',
        content: `Logical operators let you combine multiple boolean expressions into one. Think of them in plain English:\n\n• \`&&\` (AND) — "Both conditions must be true"\n• \`||\` (OR) — "At least one condition must be true"\n• \`!\` (NOT) — "Flip the condition (true becomes false, false becomes true)"`,
      },
      {
        type: 'table',
        headers: ['Operator', 'Name', 'Example', 'Meaning'],
        rows: [
          ['`&&`', 'AND', 'a > 5 && a < 10', 'Both must be true'],
          ['`||`', 'OR', 'a == 1 || a == 2', 'At least one must be true'],
          ['`!`', 'NOT', '!(a > 5)', 'Reverses the result'],
        ],
      },
      {
        type: 'editor',
        title: 'Try Logical Operators',
        defaultCode: `public class Main {\n    public static void main(String[] args) {\n        int age = 25;\n        boolean hasLicense = true;\n        \n        // AND: both must be true\n        if (age >= 18 && hasLicense) {\n            System.out.println("You can drive!");\n        }\n        \n        // OR: at least one must be true\n        String day = "Saturday";\n        if (day.equals("Saturday") || day.equals("Sunday")) {\n            System.out.println("It's the weekend!");\n        }\n        \n        // NOT: reverses the condition\n        boolean isRaining = false;\n        if (!isRaining) {\n            System.out.println("No rain — go outside!");\n        }\n        \n        // Combining multiple\n        int score = 85;\n        if (score >= 80 && score <= 100) {\n            System.out.println("Grade: A");\n        }\n    }\n}`,
      },
      {
        type: 'text',
        title: 'Short-Circuit Evaluation',
        content: `Java is smart — it uses **short-circuit evaluation**:\n\n• With \`&&\`: If the first condition is **false**, Java doesn't even check the second one (because the result is already false).\n• With \`||\`: If the first condition is **true**, Java doesn't check the second one (because the result is already true).\n\nThis can prevent errors. For example:\n\`if (name != null && name.length() > 0)\` — If name is null, Java stops and doesn't try to call .length() (which would crash).`,
      },
    ],
  },
  {
    id: 'assignment-bitwise',
    module: 'Operators',
    moduleIndex: 3,
    title: 'Assignment & Bitwise Operators',
    description:
      'Shorthand assignment operators and a peek at bitwise operations.',
    sections: [
      {
        type: 'text',
        title: 'Assignment Operators',
        content: `Assignment operators are **shortcuts** for common operations. Instead of writing \`x = x + 5\`, you can write \`x += 5\`.`,
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
          ['`%=`', 'x %= 3', 'x = x % 3'],
        ],
      },
      {
        type: 'editor',
        title: 'Try Assignment Operators',
        defaultCode: `public class Main {\n    public static void main(String[] args) {\n        int x = 20;\n        System.out.println("Start: x = " + x);\n        \n        x += 10;  // x = x + 10 = 30\n        System.out.println("After x += 10: " + x);\n        \n        x -= 5;   // x = x - 5 = 25\n        System.out.println("After x -= 5: " + x);\n        \n        x *= 2;   // x = x * 2 = 50\n        System.out.println("After x *= 2: " + x);\n        \n        x /= 10;  // x = x / 10 = 5\n        System.out.println("After x /= 10: " + x);\n        \n        x %= 3;   // x = x % 3 = 2\n        System.out.println("After x %= 3: " + x);\n    }\n}`,
      },
      {
        type: 'text',
        title: 'Bitwise Operators (Advanced)',
        content: `Bitwise operators work on the **binary** (0s and 1s) representation of numbers. **You won't need these as a beginner** — they're listed here just so you know they exist. Feel free to skip this section and come back to it later.\n\n• \`&\` — Bitwise AND\n• \`|\` — Bitwise OR\n• \`^\` — Bitwise XOR (exclusive or)\n• \`~\` — Bitwise NOT (complement)\n• \`<<\` — Left shift\n• \`>>\` — Right shift\n\nFocus on arithmetic, comparison, and logical operators first — those are the ones you'll use daily!`,
      },
    ],
  },
  {
    id: 'operator-precedence',
    module: 'Operators',
    moduleIndex: 3,
    title: 'Operator Precedence',
    description:
      'Understand the order in which Java evaluates different operators in a single expression.',
    sections: [
      {
        type: 'text',
        title: 'The Order of Operations',
        content: `When you have multiple operators in one line of code, which one happens first? Java follows strict rules called **Operator Precedence**, similar to BODMAS/PEMDAS in math.`,
      },
      {
        type: 'table',
        headers: ['Order', 'Operator Type', 'Symbols'],
        rows: [
          ['1 (Highest)', 'Parentheses', '\`()\`'],
          ['2', 'Multiplicative', '\`*\`, \`/\`, \`%\`'],
          ['3', 'Additive', '\`+\`, \`-\`'],
          ['4', 'Relational', '\`>\`, \`<\`, \`>=\`, \`<=\`'],
          ['5', 'Equality', '\`==\`, \`!=\`'],
          ['6', 'Logical AND', '\`&&\`'],
          ['7', 'Logical OR', '\`||\`'],
          ['8 (Lowest)', 'Assignment', '\`=\`, \`+=\`, \`-=\`, etc.'],
        ],
      },
      {
        type: 'editor',
        title: 'Precedence in Action',
        defaultCode: `public class Main {\n    public static void main(String[] args) {\n        // Multiplication happens before addition\n        int result1 = 10 - 2 + 5;      // (10 - 2) + 5 = 13 (evaluated left-to-right)\n        int result2 = 10 - (2 + 5);    // 10 - 7 = 3 (parentheses first)\n        \n        System.out.println("10 - 2 + 5 = " + result1);\n        System.out.println("10 - (2 + 5) = " + result2);\n        \n        int math1 = 5 + 3 * 2;         // 5 + 6 = 11\n        int math2 = (5 + 3) * 2;       // 8 * 2 = 16\n        \n        System.out.println("5 + 3 * 2 = " + math1);\n        System.out.println("(5 + 3) * 2 = " + math2);\n        \n        // Logical precedence\n        boolean check = true || false && false;\n        // AND (&&) has higher precedence than OR (||)\n        // So it evaluates false && false first (which is false)\n        // Then evaluates true || false (which is true)\n        \n        System.out.println("true || false && false = " + check);\n    }\n}`,
      },
      {
        type: 'info',
        variant: 'tip',
        title: 'When in doubt, use parentheses!',
        content:
          'Even if you memorize the precedence rules, adding parentheses like \`(a + b) * c\` makes your code much easier for other humans to read and guarantees the order of evaluation.',
      },
    ],
  },
]
