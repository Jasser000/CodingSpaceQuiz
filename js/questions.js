// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: "Which function is often used to output values and print text?",
    answer: "printf()",
    options: [
      "output()",
      "printword()",
      "write()",
      "printf()"
    ]
  },
    {
    numb: 2,
    question: "What is a correct syntax to output \"Hey,CodingSpace\"in C?",
    answer: "printf(\"Hey,CodingSpace\");",
    options: [
      "System.out.printline(\"Hey,CodingSpace\");",
      "printf(\"Hey,CodingSpace\");",
      "cout<<\"Hey,CodingSpace\";",
      "Console.WriteLine(\"Hey,CodingSpace\");"
    ]
  },
  {
    numb: 3,
    question: "Which format specifier is often used to print integers?",
    answer: "%d",
    options: [
      "%s",
      "%d",
      "%c",
      "%f"
    ]
  },
    {
    numb: 4,
    question: "How do you insert COMMENTS in C code?",
    answer: "//This is a comment",
    options: [
      "//This is a comment",
      "--This is a comment",
      "#This is a comment",
      "/*This is a comment"
    ]
  },
    {
    numb: 5,
    question: "C Language is ",
    answer: "Low level Langauge",
    options: [
      "High level Language",
      "Middle level Language",
      "Low level Langauge",
      "None above"

    ]
  },
    {
    numb: 6,
    question: "Which of the following operator can be used to access value at address stored in a pointer variable?",
    answer: "*",
    options: [
      "*",
      "#",
      "&&",
      "@"
    ]
  },
    {
    numb: 7,
    question: "How can you create a variable with the numeric value 5?",
    answer: "int num=5;",
    options: [
      "num=5;",
      "int num=5;",
      "num=5 int;",
      "val num=5;"
    ]
  },
  {
    numb: 8,
    question: "How is an array initialized in C language?",
    answer: "int a[3]={1,2,3}",
    options: [
      "int a[3]={1,2,3}",
      "int a={1,2,3}",
      "int a[]= new int[3];",
      "int a(3)=[1,2,3];"
    ]
  },
  {
    numb: 9,
    question: "How are String represented in memory in C?",
    answer: "An array of characters",
    options: [
      "The object of some class",
      "An array of characters",
      "Same as other primitive data types",
      "LinkedList of characters"
    ]
  },
  {
    numb: 10,
    question: "What is the disadvantage of arrays in C?",
    answer: "The amount of memory to be allocated should be known beforehand",
    options: [
      "The amount of memory to be allocated should be known beforehand",
      "Elements of an array can be accessed in constant time",
      "Elements are stored in contiguous memory blocks",
      "Multtiple other data structures can be implemented using arrays"
    ]
  },
  {
    numb: 11,
    question: "What is the size of the int data type (in bytes) in C?",
    answer: "4",
    options: [
      "8",
      "2",
      "4",
      "1"
    ]
  },
  {
    numb: 12,
    question: "For x an int with a value of 6",
    answer: "The result of x/=3; is 2",
    options: [
      "The result of x/=3; is 2",
      "The result of x/=3; is 2.0",
      "The result of x/=3; is 3",
      "The result of x/=3; is 3.0",
    ]
  },
  {
    numb: 13,
    question: "For x a float with a value of 1",
    answer: "The result of x/=3; is 0.3333",
    options: [
      "The result of x/=3; is 0.3333",
      "The result of x/=3; is 3",
      "The result of x/=3; is 0",
      "The result of x/=3; is 1",
    ]
  },
  {
    numb: 14,
    question: "How can you create a variable with the floating number 2.8?",
    answer: "float num = 2.8;",
    options: [
      "num = 2.8 double;",
      "float num = 2.8;",
      "num = 2.8 float;",
      "val num = 2.8;"
    ]
  },
  {
    numb: 15,
    question: "Which operator can be used to compare two values?",
    answer: "==",
    options: [
      "><",
      "=",
      "<>",
      "=="
    ]
  },
  {
    numb: 16,
    question: "Which keyword can be used to make a variable unchangeable/read-only?",
    answer: "const",
    options: [
      "constant",
      "final",
      "const",
      "readonly"
    ]
  }, 
  {
    numb: 17,
    question: "What do we call the following? int myNumbers[] = {25, 50, 75, 100};",
    answer: "An array",
    options: [
      "A pointer",
      "A class",
      "An array",
      "None of the above"
    ]
  },
  {
    numb: 18,
    question: "How do you call a function in C?",
    answer: "myFunction();",
    options: [
      "myFunction[];",
      "myFunction();",
      "myFunction;",
      "(myFunction);"
    ]
  },
  {
    numb: 19,
    question: "How do you start writing an if statement in C?",
    answer: "if (x > y)",
    options: [
      "if x > y",
      "if (x > y)",
      "if x > y()",
      "if x > y then"
    ]
  },
  {
    numb: 20,
    question: "How do you start writing a while loop in C?",
    answer: "while (x < y)",
    options: [
      "while x < y",
      "while x < y then",
      "if x > y while",
      "while (x < y)"
    ]
  },
  {
    numb: 21,
    question: "Which keyword is used to return a value inside a function?",
    answer: "return",
    options: [
      "void",
      "get",
      "return",
      "break"
    ]
  },
  {
    numb: 22,
    question: "How do you start writing a for loop in C?",
    answer: "for (i = 0; i < 5; i++)",
    options: [
      "for (i = 0; while < 5; i++)",
      "for (i = 0; switch < 5; i++)",
      "for (x in y)",
      "for (i = 0; i < 5; i++)"
    ]
  },
  {
    numb: 23,
    question: "Which statement can be used to select one of many code blocks to be executed?",
    answer: "switch",
    options: [
      "when",
      "default",
      "switch",
      "break"
    ]
  },
  {
    numb: 24,
    question: "The function scanf is used to",
    answer: "Input a set of values",
    options: [
      "To take logical decisions",
      "Print a set of values",
      "Do mathematical manipulations",
      "Input a set of values"
    ]
  },
  {
    numb: 25,
    question: "If the function returns no value then it is called",
    answer: "Void function",
    options: [
      "Data type function",
      "Void function",
      "Main function",
      "Calling function"
    ]
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];