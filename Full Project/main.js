gsap.registerPlugin(GSDevTools);
// GSDevTools.create();
// gsap.registerPlugin(ScrollTrigger);
/*
// Header Section 
let tl = gsap.timeline({
  defaults: {
    duration: 0.4,
    ease: "power3.out",
  },
});
tl.from(".NexoraIcon", { y: -80,opacity:0 })
  .from(".nav-item", { y: -60, stagger: 0.08,opacity:0 }, "-=.2")
  .from(".Text1", { x: -80,opacity:0 },"-=.2")
  .from(".HeadLine", { x: -80,opacity:0 },"-=.2")
  .from(".Text2", { x: -80,opacity:0 },"-=.2")
  .from(".headerButton", { x: -80,opacity:0 },"-=.2")
  .from(".Brands", { x: -80,opacity:0 },"-=.2");

let btn = document.querySelectorAll(".CTA")[0];
btn.addEventListener("mouseenter", () => {
  gsap.to(btn, { scale: 1.05 });
});

btn.addEventListener("mousedown", () => {
  gsap.to(btn, { scale: 0.95 });
});

btn.addEventListener("mouseup", () => {
  gsap.to(btn, { scale: 1.05 });
});

btn.addEventListener("mouseleave", () => {
  gsap.to(btn, { scale: 1 });
});

//Services and modal section
// Services animation
let t3 = gsap.timeline({
  defaults: {
    duration: 0.4,
    ease: "power3.out",
  },
});
tl.from("#ServicesHeadText", { y: -80,opacity:0 })
  .from("#service", { y: -60, stagger: 0.08,opacity:0 }, "-=.2")
  .from("#ServicesButton", { x: -80,opacity:0 },"-=.2")
//modal animation
let modalBtn=document.querySelectorAll(".modalButton")[0];
let modalButtonBack=document.querySelectorAll(".modalButtonBack")[0];
let modalElement = document.querySelector("#Modal");
let t2=gsap.timeline({paused:true ,duration:0.3,ease: "back.out",});
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
*/

// section 3 Our Last Work & Results
gsap.set(".Sec3Header", { autoAlpha: 0, y: -100 });
gsap.set(".Sec3Paragragh", { autoAlpha: 0, y: -50 });
gsap.set(".Sec3Item", { autoAlpha: 0, scale: 0, });
// Header
function CreateSec3HeaderAnimation() {
  const tl = gsap.timeline();
  tl.to(".Sec3Header", {
    y: 0,
    autoAlpha: 1,
    duration: 0.8,
    ease: "power3.out",
  });
  return tl;
}
// Paragragh
function CreateSec3ParagraghAnimation() {
  const tl = gsap.timeline();
  tl.to(".Sec3Paragragh", {
    y: 0,
    autoAlpha: 1,
    duration: 0.8,
    ease: "power3.out",
  });
  return tl;
}
// Items
function CreateSec3ItemsAnimation() {
  const tl = gsap.timeline();
  tl.to(".Sec3Item", {
    scale: 1,
    autoAlpha: 1,
    stagger: 0.3,
    ease: "back.out(1.7)",
  });
  return tl;
}

const Sec3MasterTL = gsap.timeline();
Sec3MasterTL.add(CreateSec3HeaderAnimation())
  .add(CreateSec3ParagraghAnimation(), "-=.3")
  .add(CreateSec3ItemsAnimation(), "-=.3");