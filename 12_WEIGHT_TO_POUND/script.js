const input=document.querySelector('#input')
const output=document.querySelector('#output');
console.log(input)
console.log(output)
input.addEventListener('input',()=>{
    let val=input.value;
    let out=val*2.2;
    output.innerHTML=out.toFixed(2)
})