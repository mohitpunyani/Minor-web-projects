const textareaEl=document.getElementById("textarea");
const totalcounterEl=document.getElementById("total-counter");
const remainingcounterEl=document.getElementById("remaining-counter");

// add event method have two paramters 1.event handler  2.function

textareaEl.addEventListener("keyup",()=>{
    // console.log("key is pressed");
    updateCounter();
})
function updateCounter(){
    totalcounterEl.innerText=textareaEl.value.length;
    // textareaEl.ariaValueMax.length;
    remainingcounterEl.innerText=textareaEl.getAttribute("maxlength")-textareaEl.value.length;
}