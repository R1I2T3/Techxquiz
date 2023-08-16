import {Quiz} from "./script.js"
const questions=[
    {
        question:"Which is not valid data type in Javascript",
        answers:[
            {text:"Undefined",correct:"false"},
            {text:"Boolean",correct:"false"},
            {text:"float",correct:"true"},
            {text:"Number",correct:"false"},
        ]
    },
    {
        question:"Which type of language is Javascript",
        answers:[
            {text:"programming",correct:"false"},
            {text:"Scripting",correct:"true"},
            {text:"markup",correct:"false"},
            {text:"None of the above",correct:"false"},
        ]
    },
    {
        question:"By which javascript code is used",
        answers:[
            {text:"classes",correct:"false"},
            {text:"Methods",correct:"true"},
            {text:"RMI",correct:"false"},
            {text:"Events",correct:"false"},
        ]
    },
    {
        question:"Which tag is used to write the javascript cod",
        answers:[
            {text:"<script>",correct:"true"},
            {text:"<sp>",correct:"false"},
            {text:"<javascript>",correct:"false"},
            {text:"<java>",correct:"false"},
        ]
    },
    {
        question:"Which of the following function of String object causes a string to be italic, as if it were in an <i> tag? ",
        answers:[
            {text:"fontsize",correct:"false"},
            {text:"fintcolor()",correct:"false"},
            {text:"fixed()",correct:"false"},
            {text:"italic()",correct:"true"},
        ]
    },
    {
        question:"Why so JavaScript and Java have similar name?",
        answers:[
            {text:" They both originated on the island of Java ",correct:"false"},
            {text:"JavaScript's syntax is loosely based on Java's ",correct:"true"},
            {text:"both",correct:"false"},
            {text:"none",correct:"false"},
        ]
    },
    {
        question:"Which tag is used for styling web page",
        answers:[
            {text:"<style>",correct:"true"},
            {text:"<css>",correct:"false"},
            {text:"<link:css>",correct:"false"},
            {text:"None",correct:"false"},
        ]
    },
    {
        question:"The escape sequence '\\f' stands for",
        answers:[
            {text:"Floating numbers",correct:"false"},
            {text:" Representation of functions that returns a value ",correct:"false"},
            {text:"from feed",correct:"true"},
            {text:"None",correct:"false"},
        ]
    },
    {
        question:"Purpose of designing the Javascript ",
        answers:[
            {text:"To Perform Server Side Scripting Operation ",correct:"false"},
            {text:"To add interactivity to HTML Pages ",correct:"true"},
            {text:"To Style HTML Pages ",correct:"false"},
            {text:"None”",correct:"false"},
        ]
    },
    {
        question:"Which of the following function of Array object removes the last element from an array and returns that element?",
        answers:[
            {text:"push()",correct:"false"},
            {text:"delete()",correct:"false"},
            {text:"pop()",correct:"true"},
            {text:"link()",correct:"false"},
        ]
    },

];
let q=new Quiz(questions)
q.StartQuiz();