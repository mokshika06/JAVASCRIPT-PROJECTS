const month=document.querySelector('.month')
const weekday=document.querySelector('.weekday')
const day=document.querySelector('.day')
const year=document.querySelector('.year')
window.addEventListener("DOMContentLoaded",()=>{
    const date=new Date();
    console.log(date);
    month.textContent=date.toLocaleDateString("en-US",{month:"long"})
    weekday.textContent=date.toLocaleDateString("en-US",{weekday:"long"})
    day.textContent=date.getDate();
    year.textContent=date.getFullYear();
})