const body=document.body;
const themeBtn=document.getElementById("themeBtn");
const menuBtn=document.getElementById("menuBtn");
const nav=document.getElementById("nav");

themeBtn.addEventListener("click",()=>{
  body.classList.toggle("light");
  themeBtn.textContent=body.classList.contains("light")?"☀":"☾";
});

menuBtn.addEventListener("click",()=>nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const progress=document.querySelector(".progress");
window.addEventListener("scroll",()=>{
  const max=document.documentElement.scrollHeight-window.innerHeight;
  progress.style.width=(window.scrollY/max*100)+"%";
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add("show")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

document.getElementById("year").textContent=new Date().getFullYear();

document.getElementById("contactForm").addEventListener("submit",e=>{
  e.preventDefault();
  const name=document.getElementById("name").value.trim();
  const email=document.getElementById("email").value.trim();
  const message=document.getElementById("message").value.trim();
  const msg=document.getElementById("formMsg");
  if(!name||!email||!message)return;
  const subject=encodeURIComponent("Portfolio contact from "+name);
  const body=encodeURIComponent(message+"\n\nReply to: "+email);
  window.location.href=`mailto:shadmehedihasan@gmail.com?subject=${subject}&body=${body}`;
  msg.textContent="Opening your email app...";
});
