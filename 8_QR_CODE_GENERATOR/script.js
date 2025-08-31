const qrinput=document.getElementById('qr-input')
const qrimg=document.getElementById('qr-img')
const qrbutton=document.getElementById('qr-button');
qrbutton.addEventListener('click',function(){
  const inputValue=qrinput.value;
  if(!inputValue){
    alert("please enter a valid url")
    return;
  }
  else{
    qrimg.src=`https:api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`
  }
    
})