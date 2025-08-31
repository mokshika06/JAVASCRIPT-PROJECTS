setInterval(()=>{
    date=new Date();
     hours=date.getHours();
     minutes=date.getMinutes();
     seconds=date.getSeconds();
    hrotation=30*hours+minutes/2;
    mrotation =6*minutes;
    srotation=6*seconds;
    const hourhand = document.querySelector('.hourhand');
    const minutehand = document.querySelector('.minutehand');
    const secondhand = document.querySelector('.secondhand');
    hourhand.style.transform=`rotate(${hrotation}deg)`
    minutehand.style.transform=`rotate(${mrotation}deg)`
    secondhand.style.transform=`rotate(${srotation}deg)`

},1000)