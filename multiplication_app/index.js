// const num1=Math.random()
// the above  line create the random number between 0 to 1;

const num1=Math.ceil(Math.random()*10);
const num2=Math.ceil(Math.random()*10);

// let score=0;

// json.parse convert into number
// let score=JSON.parse(localStorage.getItem("score"));

const scoreEl=document.getElementById("score");

let score=JSON.parse(localStorage.getItem("score"));


if(!score){
    score=0;
}

scoreEl.innerText =`score :${score}`;
const questionEl=document.getElementById("question");

questionEl.innerText=`what is ${num1} multiply by ${num2} ?`;

const correctAns=num1*num2;

const inputEl=document.getElementById("input");
const formEl=document.getElementById("form");

formEl.addEventListener("submit",()=>{
    const userAns= +inputEl.value;
    // this userAns is in the form of string so to convert
    // string into number we have to put befor it
    // console.log(userAns,typeof userAns)
    if(userAns==correctAns){
        score++;
        // console.log(score);
        updatelocalstorage();
    }
    else{
        score--;
        // console.log(score);
        updatelocalstorage();
    }
});

// code to get the answer from the user.

// the above line 
// create random number between 0
// to 10

// console.log(num1);

// make a function to update and increase the score

function updatelocalstorage()
{
    // we have to convert this number into string 
    localStorage.setItem("score", JSON.stringify(score))
}