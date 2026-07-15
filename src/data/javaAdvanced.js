export const gettersSetters = [
  {
    id: 'getters-setters-intro',
    module: 'Getters & Setters',
    moduleIndex: 6,
    language: 'java',
    title: 'Understanding Getters & Setters',
    description: 'Learn how to protect your data using encapsulation with getter and setter methods.',
    sections: [
      {
        type: 'text',
        title: 'Why Use Getters and Setters?',
        content: `In Java, **Encapsulation** is a fundamental concept where we hide the data (variables) and only allow access through methods. This prevents other classes from accidentally changing our data in ways we don't want.\n\n• **Getter**: A method used to *read* the value of a private variable.\n• **Setter**: A method used to *update* or *change* the value of a private variable.`,
      },
      {
        type: 'editor',
        title: 'Example: Simple Person Class',
        defaultCode: `public class Person {
    private String name; // Private variable - hidden from outside

    // Getter method
    public String getName() {
        return name;
    }

    // Setter method
    public void setName(String newName) {
        this.name = newName;
    }

    public static void main(String[] args) {
        Person p = new Person();
        p.setName("Victor"); // Setting value
        System.out.println("Person Name: " + p.getName()); // Getting value
    }
}`,
      },
      {
        type: 'info',
        variant: 'tip',
        title: 'Key Differences',
        content: `1. **Getters** always have a return type (like String or int) and usually start with "get".\n2. **Setters** are usually 'void' because they don't return anything; they just take a parameter to update the variable and usually start with "set".`,
      }
    ],
  },
  {
    id: 'getters-setters-diff',
    module: 'Getters & Setters',
    moduleIndex: 6,
    language: 'java',
    title: 'Differentiating Getters & Setters',
    description: 'A clear comparison between the two method types with a practical example.',
    sections: [
      {
        type: 'text',
        title: 'Comparison Table',
        content: `| Feature | Getter Method | Setter Method |\n| :--- | :--- | :--- |\n| **Purpose** | To retrieve (read) a private value | To modify (write) a private value |\n| **Return Type** | Returns a value (int, String, etc.) | Usually 'void' (returns nothing) |\n| **Parameters** | Usually has no parameters | Always takes at least one parameter |\n| **Naming** | Starts with 'get' | Starts with 'set' |`,
      },
      {
        type: 'editor',
        title: 'Example: The Balance Class',
        defaultCode: `public class Account {
    private double balance;

    // GETTER: Returns the value of balance
    public double getBalance() {
        return this.balance;
    }

    // SETTER: Updates the value of balance with validation
    public void setBalance(double amount) {
        if (amount >= 0) {
            this.balance = amount;
        } else {
            System.out.println("Error: Balance cannot be negative!");
        }
    }

    public static void main(String[] args) {
        Account myAcc = new Account();
        myAcc.setBalance(1500.50); // Write
        System.out.println("Balance: " + myAcc.getBalance()); // Read
    }
}`,
      },
    ],
  },
]
