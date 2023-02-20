// ================theme setup

var icon =document.getElementById('icon');

icon.addEventListener('click',()=>{
    
    document.body.classList.toggle('dark-theme');

     if(icon.classList.contains('fa-moon')){
        icon.classList.replace('fa-moon','fa-sun');
        icon.style='block'
    }else{
        icon.style='none'
        icon.classList.replace('fa-sun','fa-moon');
    }
 })
// =====================navbar setup

const removeListEl=document.querySelector('.fa-bars');
let showIconEl=document.querySelector('.nav-bars');
 links=document.querySelector('.li');
 showIconEl.addEventListener('click',()=>{
    
    links.classList.toggle('display');

     if(removeListEl.classList.contains('fa-bars')){
        removeListEl.classList.replace('fa-bars','fa-xmark');
        links.style='block'
    }else{
        links.style='none'
        removeListEl.classList.replace('fa-xmark','fa-bars');
    }
 })

//==================img full size
const img = document.querySelector("img");
img.onclick =function(){
    this.classList.toggle("active");
} 