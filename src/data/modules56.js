// Module 5: Classes & Methods
export const classesMethods = [
  {
    id: 'class-declaration',
    module: 'Classes & Methods',
    moduleIndex: 5,
    title: 'Class Declaration',
    description:
      'Understand the anatomy of a Java class — fields, access modifiers, and how classes organize code.',
    sections: [
      {
        type: 'text',
        title: 'What is a Class?',
        content: `A **class** is a blueprint for creating objects. Think of it like an architectural plan for a house — the plan describes what the house will look like, but it's not a house itself. You use the plan to **build** (create) actual houses (objects).\n\nIn Java, a class defines:\n• **Fields** (variables) — the data it holds\n• **Methods** (functions) — the actions it can perform`,
      },
      {
        type: 'text',
        title: 'Access Modifiers',
        content: `Access modifiers control who can see and use your class, fields, and methods:\n\n• \`public\` — Accessible from anywhere\n• \`private\` — Only accessible within the same class\n• \`protected\` — Accessible within the same package and subclasses\n• (default/no modifier) — Accessible within the same package only`,
      },
      {
        type: 'editor',
        title: 'Anatomy of a Class',
        defaultCode: `// A simple Student class\nclass Student {\n    // Fields (what data does a Student have?)\n    String name;\n    int age;\n    double gpa;\n    \n    // Method (what can a Student do?)\n    void introduce() {\n        System.out.println("Hi, I'm " + name);\n        System.out.println("Age: " + age + ", GPA: " + gpa);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        // Creating objects from the class\n        Student s1 = new Student();\n        s1.name = "Alice";\n        s1.age = 20;\n        s1.gpa = 3.8;\n        s1.introduce();\n        \n        System.out.println();\n        \n        Student s2 = new Student();\n        s2.name = "Bob";\n        s2.age = 22;\n        s2.gpa = 3.5;\n        s2.introduce();\n    }\n}`,
      },
    ],
  },
  {
    id: 'main-method',
    module: 'Classes & Methods',
    moduleIndex: 5,
    title: 'The main Method',
    description:
      'Understand every keyword in public static void main(String[] args) — the entry point of all Java programs.',
    sections: [
      {
        type: 'text',
        title: 'The Entry Point',
        content: `Every Java program starts at the \`main\` method. When you run a Java program, the JVM looks for this exact method signature and starts executing from there.\n\nLet's break down every single keyword:`,
      },
      {
        type: 'text',
        title: 'Breaking Down Each Keyword',
        content: `\`public static void main(String[] args)\`\n\n• **public** — This method can be accessed from anywhere. The JVM needs to call it from outside, so it must be public.\n\n• **static** — This method belongs to the CLASS, not to an object. The JVM calls it before any objects are created, so it must be static.\n\n• **void** — This method doesn't return any value. It just runs and finishes.\n\n• **main** — The name of the method. It MUST be called "main" — the JVM looks for this exact name.\n\n• **String[] args** — An array of Strings. These are **command-line arguments** — extra information you can pass when running the program.`,
      },
      {
        type: 'editor',
        title: 'The main Method & Command-Line Arguments',
        defaultCode: `public class Main {\n    // This is the entry point of EVERY Java program\n    public static void main(String[] args) {\n        System.out.println("=== The main method ===");\n        System.out.println("This is where Java starts executing!");\n        \n        // String[] args contains command-line arguments\n        System.out.println("\\nNumber of arguments: " + args.length);\n        \n        if (args.length > 0) {\n            System.out.println("Arguments received:");\n            for (String arg : args) {\n                System.out.println("  - " + arg);\n            }\n        } else {\n            System.out.println("No arguments passed.");\n            System.out.println("In a terminal, you'd run:");\n            System.out.println("  java Main hello world");\n        }\n    }\n}`,
      },
      {
        type: 'info',
        variant: 'tip',
        title: 'Remember',
        content:
          "You can have multiple classes in a project, but only ONE class needs a main method. That's the class you run to start the program.",
      },
    ],
  },
  {
    id: 'methods',
    module: 'Classes & Methods',
    moduleIndex: 5,
    title: 'Methods',
    description:
      'Learn to create reusable blocks of code — defining methods, parameters, return types, and method overloading.',
    sections: [
      {
        type: 'text',
        title: 'What are Methods?',
        content: `A **method** is a block of code that performs a specific task. You define it once, then **call** it whenever you need it. Methods help you:\n\n• **Avoid repeating code** — Write once, use many times\n• **Organize your code** — Break big problems into smaller methods\n• **Make code readable** — Method names describe what they do`,
      },
      {
        type: 'text',
        title: 'Method Syntax',
        content: `\`\`\`\naccessModifier returnType methodName(parameters) {\n    // method body\n    return value;  // if returnType is not void\n}\n\`\`\`\n\nExamples:\n• \`void sayHello()\` — takes nothing, returns nothing\n• \`int add(int a, int b)\` — takes two ints, returns an int\n• \`String greet(String name)\` — takes a String, returns a String`,
      },
      {
        type: 'editor',
        title: 'Creating and Using Methods',
        defaultCode: `public class Main {\n    // Method with no parameters, no return\n    static void sayHello() {\n        System.out.println("Hello there!");\n    }\n    \n    // Method with parameters and return value\n    static int add(int a, int b) {\n        return a + b;\n    }\n    \n    // Method with String return\n    static String greet(String name) {\n        return "Welcome, " + name + "!";\n    }\n    \n    // Method overloading (same name, different parameters)\n    static double add(double a, double b) {\n        return a + b;\n    }\n    \n    public static void main(String[] args) {\n        sayHello();\n        \n        int sum = add(10, 20);\n        System.out.println("10 + 20 = " + sum);\n        \n        System.out.println(greet("Alice"));\n        \n        // Method overloading in action\n        System.out.println("3.5 + 2.5 = " + add(3.5, 2.5));\n    }\n}`,
      },
      {
        type: 'text',
        title: 'Method Overloading',
        content: `**Method overloading** means having multiple methods with the **same name** but **different parameters**. Java knows which one to call based on the arguments you pass.\n\nFor example, \`add(int, int)\` and \`add(double, double)\` are two different methods with the same name. Java picks the right one automatically!`,
      },
    ],
  },
  {
    id: 'constructors-objects',
    module: 'Classes & Methods',
    moduleIndex: 5,
    title: 'Constructors & Objects',
    description:
      'Learn how to create objects properly using constructors — default, parameterized, and the this keyword.',
    sections: [
      {
        type: 'text',
        title: 'What is a Constructor?',
        content: `A **constructor** is a special method that runs automatically when you create a new object. Its job is to **initialize** the object's fields.\n\nRules:\n• Has the **same name** as the class\n• Has **no return type** (not even void)\n• Called automatically with the \`new\` keyword`,
      },
      {
        type: 'editor',
        title: 'Constructors in Action',
        defaultCode: `class Car {\n    String brand;\n    String color;\n    int year;\n    \n    // Default constructor (no parameters)\n    Car() {\n        brand = "Unknown";\n        color = "White";\n        year = 2024;\n    }\n    \n    // Parameterized constructor\n    Car(String brand, String color, int year) {\n        this.brand = brand;   // 'this' refers to the current object\n        this.color = color;\n        this.year = year;\n    }\n    \n    void display() {\n        System.out.println(year + " " + color + " " + brand);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        // Using default constructor\n        Car car1 = new Car();\n        car1.display();\n        \n        // Using parameterized constructor\n        Car car2 = new Car("Toyota", "Red", 2023);\n        car2.display();\n        \n        Car car3 = new Car("BMW", "Black", 2025);\n        car3.display();\n    }\n}`,
      },
      {
        type: 'text',
        title: 'The this Keyword',
        content: `The \`this\` keyword refers to the **current object**. It's useful when your parameter names are the same as your field names:\n\n\`\`\`\nCar(String brand) {\n    this.brand = brand;  // this.brand = the field, brand = the parameter\n}\n\`\`\`\n\nWithout \`this\`, Java wouldn't know if you mean the field or the parameter.`,
      },
    ],
  },
]

// Module 6: Working with Data
export const workingWithData = [
  {
    id: 'arrays',
    module: 'Working with Data',
    moduleIndex: 6,
    title: 'Arrays',
    description:
      'Store multiple values in a single variable — declaring, accessing, and iterating over arrays.',
    sections: [
      {
        type: 'text',
        title: 'What is an Array?',
        content: `An **array** is a container that holds a **fixed number** of values of the **same type**. Think of it like an array (row) of boxes, each with a number (index) starting from 0.\n\n• Arrays have a **fixed size** — set when you create them\n• Array indices start at **0**, not 1\n• All elements must be the **same data type**`,
      },
      {
        type: 'editor',
        title: 'Working with Arrays',
        defaultCode: `public class Main {\n    public static void main(String[] args) {\n        // Creating arrays\n        int[] numbers = {10, 20, 30, 40, 50};\n        String[] names = {"Alice", "Bob", "Charlie"};\n        \n        // Accessing elements (index starts at 0!)\n        System.out.println("First number: " + numbers[0]);\n        System.out.println("Third name: " + names[2]);\n        \n        // Array length\n        System.out.println("Array size: " + numbers.length);\n        \n        // Modifying elements\n        numbers[1] = 25;\n        System.out.println("Modified: " + numbers[1]);\n        \n        // Looping through an array\n        System.out.println("\\nAll numbers:");\n        for (int i = 0; i < numbers.length; i++) {\n            System.out.println("  Index " + i + ": " + numbers[i]);\n        }\n        \n        // For-each loop (simpler way)\n        System.out.println("\\nAll names:");\n        for (String name : names) {\n            System.out.println("  - " + name);\n        }\n    }\n}`,
      },
      {
        type: 'info',
        variant: 'warning',
        title: 'ArrayIndexOutOfBoundsException',
        content:
          "If you try to access an index that doesn't exist (e.g., index 5 in a 5-element array), Java will crash with this error. Remember: indices go from 0 to length-1!",
      },
    ],
  },
  {
    id: 'strings',
    module: 'Working with Data',
    moduleIndex: 6,
    title: 'Strings',
    description:
      'Master Java Strings — methods, immutability, concatenation, and StringBuilder.',
    sections: [
      {
        type: 'text',
        title: 'Strings in Java',
        content: `A \`String\` is a sequence of characters. In Java, Strings are **objects**, not primitive types. They're also **immutable** — once created, they cannot be changed (modifications create new String objects).`,
      },
      {
        type: 'editor',
        title: 'String Methods',
        defaultCode: `public class Main {\n    public static void main(String[] args) {\n        String text = "Hello, World!";\n        \n        // Common String methods\n        System.out.println("Length: " + text.length());\n        System.out.println("Upper: " + text.toUpperCase());\n        System.out.println("Lower: " + text.toLowerCase());\n        System.out.println("Char at 0: " + text.charAt(0));\n        System.out.println("Substring: " + text.substring(0, 5));\n        System.out.println("Contains 'World': " + text.contains("World"));\n        System.out.println("Index of 'W': " + text.indexOf("W"));\n        System.out.println("Replace: " + text.replace("World", "Java"));\n        System.out.println("Trim: " + "  spaces  ".trim());\n        \n        // String comparison (use .equals(), NOT ==)\n        String a = "hello";\n        String b = "hello";\n        System.out.println("\\na.equals(b): " + a.equals(b)); // true!\n        \n        // String concatenation\n        String first = "John";\n        String last = "Doe";\n        String full = first + " " + last;\n        System.out.println("Full name: " + full);\n    }\n}`,
      },
      {
        type: 'info',
        variant: 'warning',
        title: 'NEVER use == to compare Strings!',
        content:
          'Use `str1.equals(str2)` to compare String content. The `==` operator compares memory references, not the actual text!',
      },
    ],
  },
  {
    id: 'arraylist',
    module: 'Working with Data',
    moduleIndex: 6,
    title: 'ArrayList',
    description:
      'Dynamic arrays that can grow and shrink — the flexible alternative to fixed-size arrays.',
    sections: [
      {
        type: 'text',
        title: 'Why ArrayList?',
        content: `Regular arrays have a **fixed size**. Once you create an array of 5 elements, you can't add a 6th. \`ArrayList\` solves this — it's a **resizable array** that grows and shrinks as needed.\n\nTo use ArrayList:\n\`import java.util.ArrayList;\``,
      },
      {
        type: 'editor',
        title: 'ArrayList in Action',
        defaultCode: `import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        // Create an ArrayList of Strings\n        ArrayList<String> fruits = new ArrayList<>();\n        \n        // Add elements\n        fruits.add("Apple");\n        fruits.add("Banana");\n        fruits.add("Cherry");\n        fruits.add("Date");\n        System.out.println("Fruits: " + fruits);\n        System.out.println("Size: " + fruits.size());\n        \n        // Access elements\n        System.out.println("First: " + fruits.get(0));\n        \n        // Modify elements\n        fruits.set(1, "Blueberry");\n        System.out.println("After set: " + fruits);\n        \n        // Remove elements\n        fruits.remove("Date");\n        System.out.println("After remove: " + fruits);\n        \n        // Check if element exists\n        System.out.println("Has Apple? " + fruits.contains("Apple"));\n        \n        // Loop through ArrayList\n        System.out.println("\\nAll fruits:");\n        for (String fruit : fruits) {\n            System.out.println("  - " + fruit);\n        }\n        \n        // ArrayList of integers (use Integer, not int)\n        ArrayList<Integer> numbers = new ArrayList<>();\n        numbers.add(10);\n        numbers.add(20);\n        numbers.add(30);\n        System.out.println("\\nNumbers: " + numbers);\n    }\n}`,
      },
      {
        type: 'info',
        variant: 'tip',
        title: 'Wrapper Classes',
        content:
          "ArrayList can't hold primitives directly. Use wrapper classes instead: `Integer` for int, `Double` for double, `Boolean` for boolean, etc.",
      },
    ],
  },
]
