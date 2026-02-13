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

/* Stop autoplay */
video.pause();
video.currentTime=0;

/* Page switch */
function show(id){
 document.querySelectorAll(".container").forEach(p=>p.classList.add("hidden"));
 document.getElementById(id).classList.remove("hidden");
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

/* Surprise */
function showReady(){
 show("page3");
}

/* Video play ONLY here */
function playVideo(){
 show("page4");
 video.pause();
 video.currentTime=0;
 setTimeout(()=>video.play(),200);
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
