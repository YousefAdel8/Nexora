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