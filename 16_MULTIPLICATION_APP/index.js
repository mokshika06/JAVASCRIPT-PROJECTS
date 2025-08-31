const score=document.querySelector('#score')  
const num1=document.querySelector('#num1');
const num2=document.querySelector('#num2')
const input=document.querySelector('#input')
const submit=document.querySelector('#submit');
// console.log(score,num1,num2,input,submit)
let count=0;
submit.addEventListener('click',function(){
    let val=input.value;
    val=val.trim();
    val=Number(val);
    let mult=document.querySelector('#num1').textContent*document.querySelector('#num2').textContent;
    if(document.querySelector('#input').value===''){
        alert('please enter the value')

    }
    else if(val===mult){
        count++;
        score.textContent=count;
        num1.textContent=Math.floor(Math.random()*20)
        num2.textContent=Math.floor(Math.random()*20);
        input.value=" "
    }
    else{
        num1.textContent=Math.floor(Math.random()*20)
        num2.textContent=Math.floor(Math.random()*20)
        input.value=" "

    }
})