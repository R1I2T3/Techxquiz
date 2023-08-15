import {Quiz}  from "./script.js";
const questions=[
    {
        question:"Where java was created",
        answers:[
            {text:"Sun Microsystem",correct:"true"},
            {text:"Oracle",correct:"false"},
            {text:"Microsoft",correct:"false"},
            {text:"None of the Above",correct:"false"},
        ]
    },
    {
        question:"What type of language java is",
        answers:[
            {text:"Procedure oriented",correct:"false"},
            {text:"markup",correct:"false"},
            {text:"Object oriented",correct:"true"},
            {text:"Markup",correct:"false"},
        ]
    },
    {
        question:" How many keywords in are in java ____________",
        answers:[
            {text:"51",correct:"true"},
            {text:"80",correct:"false"},
            {text:"500",correct:"false"},
            {text:" 35",correct:"false"},
        ]
    },
    {
        question:"Which of the below is valid way to instantiate an array in java?",
        answers:[
            {text:"int myArray [] = {1, 3, 5};",correct:"false"},
            {text:"int myArray [] [] = {1,2,3,4};",correct:"false"},
            {text:"int [] myArray = (5, 4, 3);",correct:"true"},
            {text:"int [] myArray = {“1”, “2”, “3”};",correct:"false"},
        ]
    },
    {
        question:"Which of the below are reserved keyword in Java?",
        answers:[
            {text:"array",correct:"false"},
            {text:"goto",correct:"false"},
            {text:"null",correct:"false"},
            {text:"int",correct:"true"},
        ]
    },
    {
        question:"What are the valid statements for static keyword in Java?",
        answers:[
            {text:"We can have static block in a class.",correct:"true"},
            {text:"The static block in a class is executed every time an object of class is created.",correct:"false"},
            {text:"We can have static method implementations in interface.",correct:"false"},
            {text:"We can define static block inside a method.",correct:"false"},
        ]
    },
    {
        question:" Select all the core concepts of OOPS.",
        answers:[
            {text:"Abstraction",correct:"false"},
            {text:"Inheritance",correct:"false"},
            {text:"Interface",correct:"false"},
            {text:"All of the above",correct:"true"},
        ]
    },
    {
        question:"Which of the following can be a variable name in Java?",
        answers:[
            {text:"bool",correct:"false"},
            {text:"true",correct:"false"},
            {text:"friend",correct:"false"},
            {text:"import",correct:"false"},
        ]
    },
    {
        question:"Which of the following statements are true for inheritance in Java?",
        answers:[
            {text:" The “extend” keyword is used to extend a class in java.",correct:"false"},
            {text:"You can extend multiple classes in java.",correct:"false"},
            {text:"Private members of the superclass are accessible to the subclass.",correct:"false"},
            {text:"We can’t extend Final classes in java.",correct:"true"},
        ]
    },
    {
        question:"Which of the below are unchecked exceptions in java?",
        answers:[
            {text:"RuntimeException",correct:"false"},
            {text:"ClassCastException",correct:"false"},
            {text:"NullPointerException",correct:"false"},
            {text:"All of the above",correct:"true"},
        ]
    },

];
let q=new Quiz(questions)
q.StartQuiz();