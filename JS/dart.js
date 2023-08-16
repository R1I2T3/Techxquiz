import {Quiz} from "./script.js"
const questions=[
    {
        question:"What is Dart programming language?",
        answers:[
            {text:"A programming language used for web development",correct:"false"},
            {text:"A programming language used for mobile app development",correct:"false"},
            {text:"A programming language used for game development",correct:"false"},
            {text:"Both a and b",correct:"true"},
        ]
    },
    {
        question:"Which of the following is a characteristic of Dart programming language?",
        answers:[
            {text:"Statically typed",correct:"false"},
            {text:"Dynamically typed",correct:"false"},
            {text:"both a nd b",correct:"true"},
            {text:"None of the above",correct:"false"},
        ]
    },
    {
        question:"Which of the following is not a feature of Dart programming language?",
        answers:[
            {text:"Asynchronous programming support",correct:"false"},
            {text:"Garbage collection",correct:"false"},
            {text:" Functional programming support",correct:"false"},
            {text:"Multithreading",correct:"true"},
        ]
    },
    {
        question:"Which of the following is the correct syntax for defining a variable in Dart?",
        answers:[
            {text: "var x = 5;",correct:"false"},
            {text:"x=5",correct:"false"},
            {text:"int x=5",correct:"false"},
            {text:"Both a and c",correct:"true"},
        ]
    },
    {
        question:"What is the purpose of the “final” keyword in Dart?",
        answers:[
            {text:"To define a constant variable",correct:"false"},
            {text:" To define a variable that cannot be changed after its initial assignment",correct:"true"},
            {text:" To define a variable that can only be accessed within its scope",correct:"false"},
            {text:"To define a variable that can be accessed from any scope",correct:"false"},
        ]
    },
    {
        question:" What is the purpose of the “const” keyword in Dart?",
        answers:[
            {text:"To define a constant variable",correct:"true"},
            {text:"To define a variable that cannot be changed after its initial assignment",correct:"false"},
            {text:"To define a variable that can only be accessed within its scope",correct:"false"},
            {text:"To define a variable that can be accessed from any scope",correct:"false"},
        ]
    },
    {
        question:" Which of the following is the correct syntax for defining a function in Dart?",
        answers:[
            {text:"function foo() {}",correct:"false"},
            {text:"void foo(){}",correct:"true"},
            {text:"def foo() {}",correct:"false"},
            {text:"None of the mentioned",correct:"false"},
        ]
    },
    {
        question:"What is the purpose of the “async” keyword in Dart?",
        answers:[
            {text:"To define a function that returns a Future",correct:"true"},
            {text:" To define a function that can be run in a separate isolate",correct:"false"},
            {text:"o define a function that can be run in a separate thread",correct:"false"},
            {text:"To define a function that can be run concurrently with other functions",correct:"false"},
        ]
    },
    {
        question:"Which of the following is the correct syntax for a for loop in Dart??",
        answers:[
            {text:"for (var i = 0; i < 10; i++) {}",correct:"true"},
            {text:" for (i = 0; i < 10; i++) {}",correct:"false"},
            {text:"for (var i; i < 10; i++) {}",correct:"false"},
            {text:"for (i = 0; i < 10)",correct:"false"},
        ]
    },
    {
        question:"Which of the following is not a feature of Dart??",
        answers:[
            {text:"Type inference",correct:"false"},
            {text:"Asynchronous programming",correct:"false"},
            {text:"Garbage collection",correct:"false"},
            {text:"Block-level scope",correct:"true"},
        ]
    },

];
let q=new Quiz(questions)
q.StartQuiz();