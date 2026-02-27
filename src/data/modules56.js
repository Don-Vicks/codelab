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
        type: 'info',
        variant: 'tip',
        title: "Don't Memorize These Yet",
        content:
          "You'll understand why access modifiers matter when you learn about encapsulation and larger projects. For now, just know they exist and that most of your code will use `public` and `private`.",
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
        content: `\`public static void main(String[] args)\`\n\n• **public** — This method can be accessed from anywhere. The JVM needs to call it from outside, so it must be public.\n\n• **static** — This method belongs to the CLASS, not to an object. The JVM calls it before any objects are created, so it must be static.\n\n• **void** — This method doesn't return any value. It just runs and finishes.\n\n• **main** — The name of the method. It MUST be called "main" — the JVM looks for this exact name.\n\n• **String[] args** — Don't worry about this part for now. It's a way to pass extra information to your program when you run it from a terminal. You can safely ignore it until you need it.`,
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
        content: `\`\`\`\naccessModifier returnType methodName(parameters) {\n    // method body\n    return value;  // if returnType is not void\n}\n\`\`\`\n\nLet's translate some examples into plain English:\n• \`void sayHello()\` — "A method called sayHello that takes nothing and gives nothing back"\n• \`int add(int a, int b)\` — "A method called add that takes two numbers and gives back a number"\n• \`String greet(String name)\` — "A method called greet that takes a name and gives back text"`,
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
      {
        type: 'editor',
        title: 'Variable Scope',
        defaultCode: `public class Main {\n    // Class-level variable (Global/Class scope)\n    static int globalCount = 100;\n    \n    static void demoMethod() {\n        // Local variable inside a method\n        int localToMethod = 50;\n        System.out.println("Inside demoMethod: global = " + globalCount + ", local = " + localToMethod);\n        // We CANNOT access 'localToMain' here!\n    }\n    \n    public static void main(String[] args) {\n        // Local variable inside main\n        int localToMain = 10;\n        System.out.println("Before method call: localToMain = " + localToMain);\n        \n        demoMethod();\n        \n        // The variable 'localToMethod' doesn't exist here!\n        // System.out.println(localToMethod); // This will cause an error!\n        \n        if (localToMain > 5) {\n            // Block-level scope\n            int blockVar = 55;\n            System.out.println("Inside block: " + blockVar);\n        }\n        // We CANNOT access 'blockVar' here!\n    }\n}`,
      },
      {
        type: 'editor',
        title: 'Lab Task: Calculator App',
        defaultCode: `// Create 4 methods for add, subtract, multiply, divide.\n// Call them from main.\npublic class Calculator {\n    // Define methods here\n    \n    public static void main(String[] args) {\n        // Call methods and print results\n        \n    }\n}`,
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
        content: `An **array** is a container that holds a **fixed number** of values of the **same type**. Think of it like a **row of numbered lockers** — each locker holds one item, and you access it by its number (starting from 0).\n\n• Arrays have a **fixed size** — set when you create them\n• Array indices start at **0**, not 1\n• All elements must be the **same data type**`,
      },
      {
        type: 'editor',
        title: 'Working with Arrays',
        defaultCode: `public class Main {\n    public static void main(String[] args) {\n        // Creating arrays\n        int[] numbers = {10, 20, 30, 40, 50};\n        String[] names = {"Alice", "Bob", "Charlie"};\n        \n        // Accessing elements (index starts at 0!)\n        System.out.println("First number: " + numbers[0]);\n        System.out.println("Third name: " + names[2]);\n        \n        // Array length\n        System.out.println("Array size: " + numbers.length);\n        \n        // Modifying elements\n        numbers[1] = 25;\n        System.out.println("Modified: " + numbers[1]);\n        \n        // Looping through an array\n        System.out.println("\\nAll numbers:");\n        for (int i = 0; i < numbers.length; i++) {\n            System.out.println("  Index " + i + ": " + numbers[i]);\n        }\n        \n        // For-each loop (simpler way)\n        System.out.println("\\nAll names:");\n        for (String name : names) {\n            System.out.println("  - " + name);\n        }\n    }\n}`,
      },
      {
        type: 'editor',
        title: 'Multidimensional Arrays (2D Arrays)',
        defaultCode: `// 2D arrays are arrays of arrays! Like a grid or a spreadsheet.\npublic class MatrixDemo {\n    public static void main(String[] args) {\n        // Creating a 2D array (3 rows, 3 columns)\n        int[][] matrix = {\n            {1, 2, 3},\n            {4, 5, 6},\n            {7, 8, 9}\n        };\n        \n        // Accessing an element: matrix[rowIndex][colIndex]\n        System.out.println("Element at row 1, col 2 is: " + matrix[1][2]); // Note: indices start at 0! So row 1 is the 2nd row, col 2 is the 3rd column = 6.\n        \n        // Using nested loops to print the matrix\n        System.out.println("\\nFull Matrix:");\n        for (int i = 0; i < matrix.length; i++) {\n            for (int j = 0; j < matrix[i].length; j++) {\n                System.out.print(matrix[i][j] + " ");\n            }\n            System.out.println(); // newline after each row\n        }\n    }\n}`,
      },
      {
        type: 'editor',
        title: 'The Arrays Utility Class',
        defaultCode: `import java.util.Arrays;\n\npublic class ArrayUtilsDemo {\n    public static void main(String[] args) {\n        int[] numbers = {50, 10, 40, 20, 30};\n        \n        // 1. Arrays.toString() - Print arrays easily without loops!\n        System.out.println("Original array: " + Arrays.toString(numbers));\n        \n        // 2. Arrays.sort() - Sort elements in ascending order\n        Arrays.sort(numbers);\n        System.out.println("Sorted array: " + Arrays.toString(numbers));\n        \n        // 3. Arrays.binarySearch() - Find the index of an element (array MUST be sorted!)\n        int index = Arrays.binarySearch(numbers, 40);\n        System.out.println("Index of 40: " + index);\n        \n        // 4. Arrays.copyOf() - Create a copy with a new length\n        int[] expanded = Arrays.copyOf(numbers, 7);\n        System.out.println("Expanded array: " + Arrays.toString(expanded)); // Pads with 0s\n    }\n}`,
      },
      {
        type: 'info',
        variant: 'warning',
        title: 'ArrayIndexOutOfBoundsException',
        content:
          "If you try to access an index that doesn't exist (e.g., index 5 in a 5-element array), Java will crash with this error. Remember: indices go from 0 to length-1!",
      },
      {
        type: 'editor',
        title: 'Lab Task: Array Operations',
        defaultCode: `// Store 5 grades in an array. Calculate sum and average.\npublic class ArrayOps {\n    public static void main(String[] args) {\n        int[] grades = {85, 90, 78, 92, 88};\n        int sum = 0;\n        \n        // Your code here\n        \n    }\n}`,
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
        content: `A \`String\` is a sequence of characters. In Java, Strings are **objects**, not primitive types. They're also **immutable** — once created, they cannot be changed.\n\nThis means when you call \`text.toUpperCase()\`, it doesn't change the original \`text\` variable — it creates a **brand new String** with the result. The original stays exactly the same.\n\n### The String Pool\nJava uses a special memory area called the **String Pool** to save memory. When you create a String like \`String s1 = "Hello";\`, Java puts "Hello" in the pool. If you create another \`String s2 = "Hello";\`, Java just points \`s2\` to the existing "Hello" in the pool instead of creating a new object.`,
      },
      {
        type: 'editor',
        title: 'In-Depth String Methods',
        defaultCode: `public class Main {\n    public static void main(String[] args) {\n        String text = "Java Programming";\n        \n        // 1. Length & Characters\n        System.out.println("Length: " + text.length()); // 16\n        System.out.println("Character at index 5: " + text.charAt(5)); // 'P'\n        \n        // 2. Searching & Slicing\n        System.out.println("Index of 'Pro': " + text.indexOf("Pro")); // 5\n        System.out.println("Substring (from index 5): " + text.substring(5)); // "Programming"\n        System.out.println("Substring (index 0 to 4): " + text.substring(0, 4)); // "Java"\n        \n        // 3. Modifying (Returns a NEW String, doesn't change original!)\n        String loud = text.toUpperCase();\n        System.out.println("Uppercase: " + loud);\n        System.out.println("Original text is unchanged: " + text);\n        System.out.println("Trim (removes edge spaces): " + "  messy  ".trim());\n        \n        // 4. Comparison methods (Always use these instead of ==)\n        String a = "hello";\n        String b = "Hello";\n        System.out.println("\\na.equals(b)? " + a.equals(b)); // false (case-sensitive)\n        System.out.println("a.equalsIgnoreCase(b)? " + a.equalsIgnoreCase(b)); // true\n        System.out.println("a.compareTo(b): " + a.compareTo(b)); // > 0 because 'h' > 'H' in ASCII\n    }\n}`,
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
    id: 'stringbuilder',
    module: 'Working with Data',
    moduleIndex: 6,
    title: 'StringBuilder',
    description:
      'The mutable alternative to Strings. Use this when you need to modify text frequently!',
    sections: [
      {
        type: 'text',
        title: 'Why StringBuilder?',
        content: `Because \`String\` is **immutable**, every time you modify a String (like using \`+\` in a loop), Java creates a brand new String object and throws away the old one. If you do this thousands of times, it slows down your program and wastes memory!\n\n\`StringBuilder\` is **mutable**. It acts like a resizable text buffer. You can append, insert, or delete characters directly inside it without creating new objects every time.`,
      },
      {
        type: 'editor',
        title: 'StringBuilder Methods',
        defaultCode: `public class Main {\n    public static void main(String[] args) {\n        // 1. Create a StringBuilder\n        StringBuilder sb = new StringBuilder("Java");\n        \n        // 2. Append (add to the end)\n        sb.append(" is");\n        sb.append(" awesome!");\n        System.out.println("After append: " + sb);\n        \n        // 3. Insert (add in the middle at a specific index)\n        sb.insert(5, "truly ");\n        System.out.println("After insert: " + sb);\n        \n        // 4. Delete and DeleteCharAt\n        sb.delete(5, 11); // deletes "truly "\n        System.out.println("After delete: " + sb);\n        sb.deleteCharAt(4); // deletes space after Java\n        System.out.println("After deleteCharAt: " + sb);\n        \n        // 5. Replace and Reverse\n        sb.replace(0, 4, "Python");\n        System.out.println("After replace: " + sb);\n        sb.reverse();\n        System.out.println("After reverse: " + sb);\n        \n        // 6. Convert back to an immutable String when done\n        String finalResult = sb.toString();\n    }\n}`,
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
        title: 'In-Depth ArrayList Methods',
        defaultCode: `import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> fruits = new ArrayList<>();\n        \n        // 1. Adding elements: add(element) or add(index, element)\n        fruits.add("Apple");\n        fruits.add("Banana");\n        fruits.add(1, "Cherry"); // Inserts at index 1, shifts Banana down\n        System.out.println("After adding: " + fruits);\n        System.out.println("Size: " + fruits.size());\n        \n        // 2. Accessing & Modifying: get(index) and set(index, newElement)\n        System.out.println("Element at index 0: " + fruits.get(0));\n        fruits.set(0, "Avocado"); // Replaces Apple\n        System.out.println("After set: " + fruits);\n        \n        // 3. Removing elements: remove(index) or remove(Object)\n        fruits.remove("Banana");\n        System.out.println("After removing Banana: " + fruits);\n        \n        // 4. Searching: contains(Object) and indexOf(Object)\n        System.out.println("Contains Cherry? " + fruits.contains("Cherry"));\n        System.out.println("Index of Cherry: " + fruits.indexOf("Cherry"));\n        \n        // 5. Using Wrapper Classes for primitives\n        ArrayList<Integer> scores = new ArrayList<>();\n        scores.add(95);\n        scores.add(80);\n        \n        // 6. Clearing all elements: clear() and isEmpty()\n        scores.clear();\n        System.out.println("Scores after clear (empty? " + scores.isEmpty() + "): " + scores);\n    }\n}`,
      },
      {
        type: 'info',
        variant: 'tip',
        title: 'Wrapper Classes',
        content:
          "ArrayList works with objects, not primitives. Since `int`, `double`, and `boolean` aren't objects, you use their object versions instead: `Integer` for int, `Double` for double, `Boolean` for boolean. Java converts between them automatically — this is called autoboxing.",
      },
    ],
  },
]
