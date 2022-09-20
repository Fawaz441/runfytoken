document.addEventListener("mousemove", (evt) => {
  const mouseX = evt.clientX;
  const mouseY = evt.clientY;

  gsap.set(".cursor", {
    x: mouseX,
    y: mouseY,
  });

  gsap.to(".shape", {
    x: mouseX,
    y: mouseY,
    stagger: -0.1,
  });
});

gsap.to(".preloader", {
  width: window.innerWidth,
  duration: 0.5,
});

gsap.to(".wrapper", {
  y: 0,
  delay: 0.5,
  opacity: 1,
});

gsap.to(".preloader", {
  width: 0,
  delay: 1,
});

gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(TextPlugin);

// hero animations
gsap.to(".hero-man", {
  duration: 1,
  y: -40,
  scrollTrigger: {
    trigger: "#what",
    toggleActions: "play reverse reverse reverse",
  },
});

gsap.to(".hero-bg", {
  duration: 1,
  y: -300,
  scrollTrigger: {
    trigger: "#what",
    toggleActions: "play reverse reverse reverse",
  },
});

gsap.to(".hero-rocks", {
  duration: 1,
  y: -60,
  scrollTrigger: {
    trigger: "#what",
    toggleActions: "play reverse reverse reverse",
  },
});

gsap.to(".hero-coins", {
  duration: 1,
  x: -100,
  scrollTrigger: {
    trigger: "#what",
    toggleActions: "play reverse reverse reverse",
  },
});

gsap.to(".hero-water", {
  duration: 1,
  x: -50,
  scrollTrigger: {
    trigger: "#what",
    toggleActions: "play reverse reverse reverse",
  },
});
// end hero animations

gsap.to(".runfy-description-1", {
  duration: 2,
  text: `Runfy is a 100% community-driven platform that empowers members to
  take control of their health and wellness.`,
  scrollTrigger: {
    trigger: ".runfy-description-1",
  },
});

gsap.to(".runfy-description-2", {
  duration: 2,
  delay: 2,
  text: `Runfy token promotes everything relating to health and fitness
  while allowing users to earn as they keep fit. Our token $RUNF is the utility token of
  the platform built on the BSC (Binance Smart Chain) which has one of the lowest
  transaction fees.`,
  scrollTrigger: {
    trigger: ".runfy-description-1",
  },
});

gsap.to(".runfy-description-3", {
  duration: 2,
  delay: 5,
  text: `Conceptualized as smart technology, $RUNF Token aims to import
  health and fitness into the crypto space whilst giving members the leverage to earn
  money while keeping fit. Whatever your fitness goals may be, the Runfy team is here to
  assist you.`,
  scrollTrigger: {
    trigger: ".runfy-description-1",
  },
});
