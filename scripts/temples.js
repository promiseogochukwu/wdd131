const yearEl=document.getElementById("currentyear");
if(yearEl){yearEl.textContent=new Date().getFullYear();}
const modEl=document.getElementById("lastModified");
if(modEl){modEl.textContent="Last Modified: "+document.lastModified;}
const menuBtn=document.getElementById("menu");
const nav=document.getElementById("primary-nav");
if(menuBtn&&nav){
 menuBtn.addEventListener("click",()=>{
  const isOpen=nav.classList.toggle("open");
  menuBtn.classList.toggle("open",isOpen);
  menuBtn.setAttribute("aria-expanded",String(isOpen));
 });
}