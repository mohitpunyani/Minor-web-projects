const hourE1=document.getElementById("hours");
const minuteE2=document.getElementById("minutes");
const secondE3=document.getElementById("seconds");
const am=document.getElementById("ampm")
// we want to update the time 
function updateclock(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm="AM";
    if(h>12){
        h=h-12;
        ampm="PM";
}

h=h<10 ?"0"+h:h;
m=m<10 ?"0"+m:m;
s=s<10 ?"0"+s:s;
hourE1.innerText=h;
minuteE2.innerText=m;
secondE3.innerText=s;
am.innerText=ampm;
setTimeout(()=>{
    updateclock()
},1000)
}
updateclock();

