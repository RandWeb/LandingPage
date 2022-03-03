
let itemBoxes = document.querySelectorAll('.process__item--box');
itemBoxes.forEach((item)=>{
    item.addEventListener('click',()=>{
        RemoveActiveClasses();
        item.classList.add('process__active');
    });
});

function RemoveActiveClasses(){
    itemBoxes.forEach((item)=>{
        item.classList.remove('process__active');
    });
}
