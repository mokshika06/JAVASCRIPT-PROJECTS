const count=document.querySelector('#count')
const inc=document.querySelector('#inc');
const dec=document.querySelector('#dec')
const rset=document.querySelector('#res')
// console.log(count,inc,dec,rset)
let counter=0;
inc.addEventListener('click',()=>{
    counter++;
    count.innerHTML=counter
})
dec.addEventListener('click',()=>{
    counter--;
    count.innerHTML=counter;
})
rset.addEventListener('click',()=>{
    counter=0;
    count.innerHTML=counter;

})