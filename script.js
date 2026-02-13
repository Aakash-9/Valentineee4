/* NO messages */
const msgs=[
 "Think again 🤔",
 "Are you sure? 😢",
 "Really really sure? 🥺",
 "Last chance 💔",
 "You are breaking my heart 💔",
 "Please say yes ❤️"
];

let i=0,scale=1;

const yes=document.getElementById("yesBtn");
const no=document.getElementById("noBtn");
const msg=document.getElementById("msg");
const video=document.getElementById("video");
const music=document.getElementById("music");

/* IMPORTANT — Disable video autoplay completely */
video.pause();
video.currentTime=0;
video.removeAttribute("autoplay");

/* Page switch */
function show(id){
 document.querySelectorAll(".page").forEach(p=>{
   p.classList.remove("active");
   p.style.pointerEvents="none";
 });
 const page=document.getElementById(id);
 page.classList.add("active");
 page.style.pointerEvents="auto";
}

/* NO click */
no.onclick=()=>{
 msg.textContent=msgs[i];
 if(i<msgs.length-1) i++;
 scale+=0.25;
 yes.style.transform=`scale(${scale})`;
};

/* YES click */
yes.onclick=()=>{
 show("page2");
};

/* Surprise page */
function goPhoto(){
 show("page3");
}

/* VIDEO PAGE — ONLY PLAY HERE */
function playVideo(){
 show("page4");

 // stop music
 if(music){
   music.pause();
   music.currentTime=0;
 }

 // STRICT CONTROL
 video.pause();
 video.currentTime=0;

 setTimeout(()=>{
   video.play().catch(()=>{});
 },200);
}

/* Floating hearts */
const container=document.querySelector(".hearts-container");
setInterval(()=>{
 const h=document.createElement("div");
 h.className="heart";
 h.textContent=["💖","💕","💗","💓","💝"][Math.floor(Math.random()*5)];
 h.style.left=Math.random()*100+"%";
 container.appendChild(h);
 setTimeout(()=>h.remove(),10000);
},900);
