let a=document.getElementById("inputx")
let b=document.getElementById("para")
document.getElementById("myform").addEventListener("submit",show)
function show(c)
{
  let s=a.value;
  c.preventDefault();
  if(a.value)
  mylist.insertAdjacentHTML("beforeend",`<li>${s}  <button onClick="del(this)">delete</button> </li>`)
  console.log(a.value);
  a.value="";
  //a.focus()
}
function del(x)
{
  x.parentElement.remove()
}