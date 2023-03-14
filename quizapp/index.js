// create a object is javascript
const quizDB = [
    {
        question: "Q1:  What is the full form of html?",
        a: "Hello to my land",
        b: "Hey Text Markup Language",
        c :"HyperText Markup Language",
        d: "Hypertext makeup language",
        ans :"ans3"
    },
    {
        question :"Q2: Who is the world richest person ?",
        a: "Mohit punyani",
        b: "Elon musk",
        c: "Gautam adani",
        d: "jeff bezos",
        ans :"ans1"
    },
    {
        question : "Q3 :what's your long term vision ?",
        a : "earn money make india as a developed country and lives with simplicity",
        b : "spend more time as possible with my parents ?",
        c : "Do something awesome in this A.I world which was never happened ?",
        d : "all",
        ans:"ans4"
    },
]

    const option1=document.querySelector('#option1');
    const option2=document.querySelector('#option2');
    const option3=document.querySelector('#option3');
    const option4=document.querySelector('#option4');
    const submit=document.querySelector('#submit');

    const Score=document.querySelector('#score');

    const answers=document.querySelectorAll('.answer');

    // the above line gives the array.
    console.log("hello");

    let questioncount=0;
    let score=0;
    const loadquestion = ()=>

    {
        const questionlist=quizDB[questioncount];
        question.innerText=questionlist.question;
        option1.innerText=questionlist.a;
        option2.innerText=questionlist.b;
        option3.innerText=questionlist.c;
        option4.innerText=questionlist.d;

    }

    loadquestion();

    const getcheckedanswer = ()=>{
        let answer;
        answers.forEach((curAnsElem)=>
        {
            if(curAnsElem.checked){
                answer=curAnsElem.id;
            }
        })
        return answer;
    }
    submit.addEventListener('click',()=>{
        const checkedanswer=getcheckedanswer();
        // console.log(checkedanswer);
        if(checkedanswer==quizDB[questioncount].ans){
            score++;
            // console.log(score);
            Score.innerText =`${score}`;

        }
        questioncount++;
        if(questioncount<quizDB.length){
            loadquestion();
        }
        else{
            
        }
    })





