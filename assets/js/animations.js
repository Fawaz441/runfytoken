window.onload = function () {
  lax.init();
  lax.addDriver("scrollY", function () {
    return window.scrollY;
  });

  // Add animation bindings to elements
  // hero text
  lax.addElements(".hero-text", {
    scrollY: {
      // translateX: [
      //     ["elInY", "elCenterY", "elOutY"],
      //     [0, 0, '-screenWidth/5'],
      // ],
      // opacity: [
      //     ["elInY", "elCenterY", "elOutY"],
      //     [1, 1, 0],
      // ],
      // scale: [
      //     ["elInY", "elCenterY", "elOutY"],
      //     [1, 1, 1.5],
      // ]
    },
  });
  // hero buttons
  lax.addElements(".hero-buttons", {
    scrollY: {
      translateX: [
        ["elInY", "elCenterY", "elOutY"],
        [0, 0, "screenWidth/5"],
      ],
      opacity: [
        ["elInY", "elCenterY", "elOutY"],
        [1, 1, 0.2],
      ],
    },
  });
  // bonus container
  lax.addElements(".bonuscontainer", {
    scrollY: {
      scale: [
        ["elInY", "elCenterY", "elOutY"],
        [1, 1.05, 0.8],
      ],
    },
  });
  // white box
  lax.addElements(".white-box", {
    scrollY: {
      scale: [
        ["elInY", "elCenterY", "elOutY"],
        [0.4, 1, 1],
      ],
    },
  });

  // how it works text
  lax.addElements(
    ".what-is-text",
    {},
    {
      scrollY: {
        opacity: [
          ["elInY", "elCenterY", "elOutY"],
          [1, 1.05, 0.8],
        ],
      },
    }
  );
  lax.addElements(
    ".vision-mission",
    {},
    {
      scrollY: {
        translateY: [
          ["elInY", "elCenterY", "elOutY"],
          [-30, 0, 0],
        ],
      },
    }
  );
};
gsap.to(".runfy-description-1", {
  duration: 5,
  text: `Runfy is a 100% community-driven platform that empowers members to
            take control of their health and wellness.`,
  delay: 1,
  scrollTrigger: {
    trigger: ".runfy-description-1",
  },
});
gsap.to(".runfy-description-2", {
  duration: 5,
  text: `Runfy token promotes everything relating to health and fitness
                            while allowing users to earn as they keep fit. Our token $RUNF is the utility token of
                            the platform built on the BSC (Binance Smart Chain) which has one of the lowest
                            transaction fees.`,
  delay: 5,
  scrollTrigger: {
    trigger: ".runfy-description-2",
  },
});
gsap.to(".runfy-description-3", {
  duration: 5,
  text: `Conceptualized as smart technology, $RUNF Token aims to import
                            health and fitness into the crypto space whilst giving members the leverage to earn
                            money while keeping fit. Whatever your fitness goals may be, the Runfy team is here to
                            assist you.`,
  delay: 10,
  scrollTrigger: {
    trigger: ".runfy-description-3",
  },
});

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
