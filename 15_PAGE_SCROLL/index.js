const scrollbar=document.querySelector('.scrollbar')
window.addEventListener('scroll',()=>{
    console.log(window.scrollY);
    let percentage=(window.scrollY/(document.body.scrollHeight-window.innerHeight))*100;
    scrollbar.style.width=percentage+'%'
})