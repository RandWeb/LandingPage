
var itemBox = document.getElementsByClassName("process__item--box");
console.log(itemBox);
itemBox.addEventListener('click',myfunc());
function myfunc(){
    console.log(itemBox);
}