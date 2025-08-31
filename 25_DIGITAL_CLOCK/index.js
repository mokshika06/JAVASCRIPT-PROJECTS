const timer=document.querySelector('.timer')
function getTime(){
    const now =new Date();
    let h=now.getHours();
    let m=now.getMinutes();
    let s=now.getSeconds();
    h=h<10?"0"+h:h;
    m=m<10?"0"+m:m;
    s=s<10?"0"+s:s;
    const timestr=h+":"+m+":"+s;
    timer.textContent=timestr;
}
setInterval(getTime,1000)