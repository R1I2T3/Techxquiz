import {Quiz} from "/script.js"
const questions=[
    {
        question:"Compiler genrate ___ file",
        answers:[
            {text:"Executable",correct:"false"},
            {text:"Object-code",correct:"true"},
            {text:"Assembly code",correct:"false"},
            {text:"None of the Above",correct:"false"},
        ]
    },
    {
        question:"Which of the following is used in mode string to open the file in binary",
        answers:[
            {text:"a",correct:"false"},
            {text:"C",correct:"false"},
            {text:"b",correct:"true"},
            {text:"bin",correct:"false"},
        ]
    },
    {
        question:" All keywords in C are in ____________",
        answers:[
            {text:"LowerCase letters",correct:"true"},
            {text:"UpperCase letters",correct:"false"},
            {text:"CamelCase letters",correct:"false"},
            {text:" None of the mentioned",correct:"false"},
        ]
    },
    {
        question:"Which of the following is true for variable names in C?",
        answers:[
            {text:"They can contain alphanumeric characters as well as special characters",correct:"false"},
            {text:"It is not an error to declare a variable to be one of the keywords(like goto, static)",correct:"false"},
            {text:"Variable names cannot start with a digit",correct:"true"},
            {text:"Variable can be of any length",correct:"false"},
        ]
    },
    {
        question:"Which is valid C expression?",
        answers:[
            {text:"int my_num = 100,000;",correct:"false"},
            {text:"int my_num = 100000;",correct:"true"},
            {text:"int my num = 1000;",correct:"false"},
            {text:"int $my_num = 10000;",correct:"false"},
        ]
    },
    {
        question:"Which keyword is used to prevent any changes in the variable within a C program?",
        answers:[
            {text:"immutable",correct:"false"},
            {text:"mutable",correct:"false"},
            {text:"const",correct:"true"},
            {text:"volatile",correct:"false"},
        ]
    },
    {
        question:" What is the result of logical or relational expression in C?",
        answers:[
            {text:"True or False",correct:"false"},
            {text:"0 or 1",correct:"true"},
            {text:"0 if an expression is false and any positive number if an expression is true",correct:"false"},
            {text:"None of the mentioned",correct:"false"},
        ]
    },
    {
        question:"Which of the following cannot be a variable name in C?",
        answers:[
            {text:"volatile",correct:"true"},
            {text:"true",correct:"false"},
            {text:"friend",correct:"false"},
            {text:"export",correct:"false"},
        ]
    },
    {
        question:"Which of the following declaration is not supported by C language?",
        answers:[
            {text:"String str;",correct:"true"},
            {text:"char *str;",correct:"false"},
            {text:"float str = 3e2;",correct:"false"},
            {text:"Both “String str;” and “float str = 3e2;”",correct:"false"},
        ]
    },
    {
        question:"What is an example of iteration in C?",
        answers:[
            {text:"for",correct:"false"},
            {text:"while",correct:"false"},
            {text:"do-while",correct:"false"},
            {text:"All of the above",correct:"true"},
        ]
    },

];
let q=new Quiz(questions)
q.StartQuiz();