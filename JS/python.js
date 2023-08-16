import {Quiz} from "./script.js"
const questions=[
    {
        question:"What is the maximum length of a Python identifier?",
        answers:[
            {text:"32",correct:"false"},
            {text:"16",correct:"false"},
            {text:"128",correct:"false"},
            {text:"No fixed length",correct:"true"},
        ]
    },
    {
        question:"What will be the output of the following code snippet?print(2**3 + (5 + 6)**(1 + 1))"
        ,
        answers:[
            {text:"129",correct:"true"},
            {text:"8",correct:"false"},
            {text:"121",correct:"false"},
            {text:"None of the above",correct:"false"},
        ]
    },
    {
        question:"How is a code block indicated in Python?",
        answers:[
            {text:"Indent",correct:"true"},
            {text:"Bracket",correct:"false"},
            {text:"key",correct:"false"},
            {text:" None of the above",correct:"false"},
        ]
    },
    {
        question:"Which of following is not part of python?",
        answers:[
            {text:"loops",correct:"false"},
            {text:"Dynamic typing",correct:"false"},
            {text:"pointers",correct:"true"},
            {text:"All of the above",correct:"false"},
        ]
    },
    {
        question:"Which of statement are used in exception handling",
        answers:[
            {text:"try",correct:"false"},
            {text:"except",correct:"false"},
            {text:"finally",correct:"false"},
            {text:"ALl of the above",correct:"true"},
        ]
    },
    {
        question:"Which loop is not part of python?",
        answers:[
            {text:"for",correct:"false"},
            {text:"While",correct:"false"},
            {text:"do while",correct:"true"},
            {text:"none of the above",correct:"false"},
        ]
    },
    {
        question:"What is proper way of declaring conditional in python?",
        answers:[
            {text:"if else if else",correct:"false"},
            {text:"if elif else",correct:"true"},
            {text:"both",correct:"false"},
            {text:"None of the mentioned",correct:"false"},
        ]
    },
    {
        question:"Which of the following convert date into time?",
        answers:[
            {text:"strptime()",correct:"true"},
            {text:"strftime()",correct:"false"},
            {text:"both",correct:"false"},
            {text:"None",correct:"false"},
        ]
    },
    {
        question:"As what datatype are the *args stored,when passed into a function?",
        answers:[
            {text:"tuple",correct:"true"},
            {text:"list",correct:"false"},
            {text:"Dictionary",correct:"false"},
            {text:"none of the above",correct:"false"},
        ]
    },
    {
        question:"As what data type *kwargs are passed into function?",
        answers:[
            {text:"List",correct:"false"},
            {text:"Tuple",correct:"false"},
            {text:"Set",correct:"false"},
            {text:"Dictionary",correct:"true"},
        ]
    },

];
let q=new Quiz(questions)
q.StartQuiz();