gsap.set(".NexoraIcon", { autoAlpha: 0, y: -80 });
gsap.set(".nav-item", { autoAlpha: 0, y: -60 });
gsap.set(".Text1", { autoAlpha: 0, x: -80 });
gsap.set(".HeadLine", { autoAlpha: 0, x: -80 });
gsap.set(".Text2", { autoAlpha: 0, x: -80 });
gsap.set(".Button", { autoAlpha: 0, x: -80 });
gsap.set(".Brands", { autoAlpha: 0, x: -80 });

let tl = gsap.timeline({
  defaults: {
    duration: 0.4,
    ease: "power3.out",
  },
});
tl.to(".NexoraIcon", { y: 0,autoAlpha:1 })
  .to(".nav-item", { y: 0, stagger: 0.08,autoAlpha:1 }, "-=.2")
  .to(".Text1", { x: 0,autoAlpha:1 },"-=.2")
  .to(".HeadLine", { x: 0,autoAlpha:1 },"-=.2")
  .to(".Text2", { x: 0,autoAlpha:1 },"-=.2")
  .to(".Button", { x: 0,autoAlpha:1 },"-=.2")
  .to(".Brands", { x: 0,autoAlpha:1 },"-=.2");

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
