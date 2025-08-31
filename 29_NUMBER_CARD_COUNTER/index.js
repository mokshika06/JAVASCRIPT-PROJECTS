const counter=document.querySelectorAll('.counter')
counter.forEach(counter=>{
    counter.innerHTML=0;
    let target=+counter.getAttribute('data-target');
    let inc=target/20
    let count=0;
    function incrementcounter(){
        if(count<target){
            count=count+inc;
            counter.innerHTML=count
            setInterval(incrementcounter,1)
        }
        else{
            counter.innerHTML=target;
        }
    }
    incrementcounter();
})