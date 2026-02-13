const video = document.getElementById("video");

/* Disable any autoplay */
video.pause();
video.currentTime = 0;

/* Go to READY page */
function showReady(){
  document.getElementById("page1").classList.add("hidden");
  document.getElementById("page2").classList.remove("hidden");
}

/* Play video ONLY here */
function playVideo(){
  document.getElementById("page2").classList.add("hidden");
  document.getElementById("page3").classList.remove("hidden");

  video.pause();
  video.currentTime = 0;

  setTimeout(()=>{
    video.play().catch(()=>{});
  },200);
}

/* Floating hearts */
const container = document.querySelector(".hearts-container");
setInterval(()=>{
  const h=document.createElement("div");
  h.className="heart";
  h.textContent=["💖","💕","💗","💓","💝"][Math.floor(Math.random()*5)];
  h.style.left=Math.random()*100+"%";
  container.appendChild(h);
  setTimeout(()=>h.remove(),10000);
},900);
