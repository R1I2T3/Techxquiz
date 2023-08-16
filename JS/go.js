import {Quiz} from "./script.js"
const questions=[
    {
        question:" Which of the following is true about dynamic type declaration of a variable in Go?",
        answers:[
            {text:"A dynamic type variable declaration requires compiler to interpret the type of variable based on value passed to it.",correct:"false"},
            {text:"Compiler don't need a variable to have type statically as a necessary requirement.",correct:"false"},
            {text:"Both",correct:"true"},
            {text:"None of the Above",correct:"false"},
        ]
    },
    {
        question:"Which of the following is not a integer type in Go?",
        answers:[
            {text:"uint8",correct:"false"},
            {text:"uint16",correct:"false"},
            {text:"uint32",correct:"false"},
            {text:"complex",correct:"true"},
        ]
    },
    {
        question:"Which of the following is correct about value expression in Go?",
        answers:[
            {text:"The term value refers to a data value that is stored at some address in memory.",correct:"false"},
            {text:"An value is an expression that cannot have a value assigned to it which means an rvalue may appear on the right- but not left-hand side of an assignment.",correct:"false"},
            {text:"All of the above",correct:"true"},
            {text:" None of the mentioned",correct:"false"},
        ]
    },
    {
        question:"Which of the following is correct about structures in Go?",
        answers:[
            {text:"structure is another user defined data type available in Go programming, which allows you to combine data items of different kinds.",correct:"false"},
            {text:"Structures are used to represent a record",correct:"false"},
            {text:"To define a structure, you must use type and struct statements.",correct:"false"},
            {text:"All of the above.",correct:"true"},
        ]
    },
    {
        question:"WWhich of the following function returns the total number of elements present in a slice?",
        answers:[
            {text:"ten()",correct:"false"},
            {text:"size()",correct:"true"},
            {text:"cap()",correct:"false"},
            {text:"None of the above",correct:"false"},
        ]
    },
    {
        question:"n which of the following method of parameter passing, changes made to the parameter inside the function have no effect on the argument?",
        answers:[
            {text:"call by reference",correct:"false"},
            {text:"call by value",correct:"true"},
            {text:"both",correct:"false"},
            {text:"None",correct:"false"},
        ]
    },
    {
        question:"Which is not correct way of declaration in go lang?",
        answers:[
            {text:"var c int=6",correct:"false"},
            {text:"c int =8",correct:"true"},
            {text:"x:=6",correct:"false"},
            {text:"None of the mentioned",correct:"false"},
        ]
    },
    {
        question:"What is purpose of defer keyword",
        answers:[
            {text:"To delay the execution",correct:"true"},
            {text:"To repeatedly function many time",correct:"false"},
            {text:"TO declare global variable",correct:"false"},
            {text:"none",correct:"false"},
        ]
    },
    {
        question:"Which of the following is valid to new instance of struct?",
        answers:[
            {text:"p:=new person{//required fields};",correct:"true"},
            {text:"p:=make(person,1)",correct:"false"},
            {text:"p:=person[//fields]",correct:"false"},
            {text:"None of the above",correct:"false"},
        ]
    },
    {
        question:"Which is false about go lang?",
        answers:[
            {text:"It is designed by google",correct:"false"},
            {text:"IT is statically typed",correct:"false"},
            {text:"It is similar to java",correct:"true"},
            {text:"All of the above",correct:"false"},
        ]
    },

];
let q=new Quiz(questions)
q.StartQuiz();