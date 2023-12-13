const compschoice = document.getElementById('comp');
const userchoice = document.getElementById('user');
const finalresult = document.getElementById('result');
const possiblechoice = document.querySelectorAll('button');
let mychoice;
let systemchoice;
let result;
possiblechoice.forEach(possiblechoice=>possiblechoice.addEventListener('click',(e)=>{
        mychoice=e.target.id;
        userchoice.innerHTML=mychoice;
         generateRandomno();
}))

function generateRandomno(){
   const randomNumber = Math.floor(Math.random()*3)+1; //asl can use possiblechoice.length
   //console.log(randomNumber);
   if(randomNumber==1){
   systemchoice='stone';
   }
   if(randomNumber==2){
     systemchoice='paper';
   }
   if(randomNumber==3){
      systemchoice='scissor';
   }
   compschoice.innerHTML=systemchoice;
   //console.log(compschoice)
   getResult();
}
function getResult(){
    const compChoiceText = compschoice.innerHTML;
    const userChoiceText = userchoice.innerHTML;
    if(compChoiceText===userChoiceText){
        result= 'its a draw';
    }
    if(compChoiceText==='paper'&& userChoiceText==="stone"){
        result='you lost';
    }
    if(compChoiceText==='stone'&& userChoiceText==="paper"){
        result='you win';
    }
    if(compChoiceText==='scissor'&& userChoiceText==="stone"){
        result='you win';
    }
    if(compChoiceText==='stone'&& userChoiceText==="scissor"){
        result='you lost';
    }
    if(compChoiceText==='paper'&& userChoiceText==="scissor"){
        result='you win';
    }
    if(compChoiceText==='scissor'&& userChoiceText==="paper"){
        result='you lost';
    }
    finalresult.innerHTML=result;
}