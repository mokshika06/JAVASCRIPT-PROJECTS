// const add=document.getElementsByClassName('add')[0]
// const remove=document.getElementsByClassName('remove')[0];
// const list=document.getElementsByClassName('listt')[0];
// const input=document.getElementsByClassName('inputt')[0];
// function addTask(){
//   let li=document.createElement('li');
//   li.innerHTML(input.value)
//   listContainer.appendChild(li)
  
// }
const add = document.getElementsByClassName('add')[0];
const remove = document.getElementsByClassName('remove')[0];
const list = document.getElementsByClassName('listt')[0];
const input = document.getElementsByClassName('inputt')[0];

function addTask() {
  let li = document.createElement('li');
  li.innerHTML = input.value;
  list.appendChild(li);
  input.value = ""; // clear input after adding
}
remove.addEventListener('click', () => {
  if (list.lastChild) {
    list.removeChild(list.lastChild);
  }
});