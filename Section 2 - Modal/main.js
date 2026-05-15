//Services and modal section
// Services animation
let t3 = gsap.timeline({
  defaults: {
    duration: 0.4,
    ease: "power3.out",
  },
});
t3.from("#ServicesHeadText", { y: -80,opacity:0 })
  .from("#service", { y: -60, stagger: 0.08,opacity:0 }, "-=.2")
  .from("#ServicesButton", { x: -80,opacity:0 },"-=.2")
//modal animation
let modalBtn=document.querySelectorAll(".modalButton")[0];
let modalButtonBack=document.querySelectorAll(".modalButtonBack")[0];
let modalElement = document.querySelector("#Modal");
let t2=gsap.timeline({paused:true, defaults:{duration:0.3,ease: "back.out"}});
t2.fromTo("#Modal",
  {
    autoAlpha: 0,
    scale: 0.85,
    y: 40,
    filter: "blur(10px)"
  },
  {
    autoAlpha: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)"
  }
);
modalBtn.addEventListener("mousedown",(e)=>{
  e.stopPropagation();
  t2.play()
})
modalButtonBack.addEventListener("mousedown",()=>{
  t2.reverse()
})

window.addEventListener("mousedown",(e)=>{
  if(t2.progress()>0&&!modalElement.contains(e.target))
  {
    t2.reverse();
  }
})