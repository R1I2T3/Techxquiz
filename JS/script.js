class Quiz{
    questions;
    questionElement=document.getElementById('Question')
    answerButton=document.getElementById('Answer')
    answerButton1=document.getElementById('Answer')
    next=document.getElementById("next-btn")
    currentQuestionIndex=0;
    score=0;
    constructor(questions){
        this.questions=questions;
        this.nextQuestion()
    }
    StartQuiz(){
        this.next.innerHTML="Next";
        this.showQuestion()
    }
    showQuestion() {
        this.resetState()
        let currentQuestion=this.questions[this.currentQuestionIndex]
        let QuestionNo=this.currentQuestionIndex+1;
        this.questionElement.innerHTML=QuestionNo+". "+currentQuestion.question
        currentQuestion.answers.forEach(answer=>{
            var btn=document.createElement("button");
            btn.innerText= answer.text;
            btn.classList.add("btn")
            this.answerButton.appendChild(btn);
            if (answer.correct) {
                btn.dataset.correct=answer.correct
            }
            btn.addEventListener("click",this.selectAnswer)
        });
    }
    resetState(){
        this.next.style.display="none";
        var answer=this.answerButton
        while (answer.firstChild) {
            answer.removeChild(answer.firstChild)
        }
    }
    static total_score=0
    selectAnswer(e) {
        var score=0;
        var answerButton=document.getElementById('Answer')
        var next=document.getElementById("next-btn")
        const selectedButton= e.target;
        const isCorrect=selectedButton.dataset.correct==="true";
        var s=0;
        if(isCorrect){
            selectedButton.classList.add("correct");
            s++;
            Quiz.total_score+=s;
        }
        else{
            selectedButton.classList.add("incorrect");
            s=s;
        }
        this.answerButton
        Array.from(answerButton.children).forEach(button=>{
            if(button.dataset.correct==='true'){
                button.classList.add("correct");
                
            }
            button.disabled=true;
        });
        console.log(Quiz.total_score)
        next.style.display="block";
    }
    nextQuestion(){
    var isEnd=true;
    this.next.addEventListener("click",()=>{
        if(this.currentQuestionIndex<this.questions.length){
            this.handleNextButton()
        }
        else{
            let home=document.getElementById("home");
            home.style.display="block";
            home.style.color="white"
    }
})
}
    handleNextButton() {
        this.currentQuestionIndex++;
        if(this.currentQuestionIndex<this.questions.length){
            this.showQuestion();
        }
        else{
            this.score=Number.parseInt(document.getElementsByClassName("score").innerHTML)
            this.showScore();
        }
    }
    showScore() {
        this.resetState();
        console.log(this.score)
        this.questionElement.innerHTML=`Score scored by participant will be: ${Quiz.total_score*10} out of ${10*10}!`
        this.next.innerHTML="Play Again"
        this.next.style.display="block"
}
}
export{Quiz};