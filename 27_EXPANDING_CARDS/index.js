const cards= document.querySelectorAll('.inner-containrer');

function removeActiveClasses(){
    cards.forEach(card=>{
        card.classList.remove('active')
    })
}
cards.forEach(card=>{
    card.addEventListener('click',()=>{
        removeActiveClasses();
        card.classList.add("active");
    })
})