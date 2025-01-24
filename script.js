// GSAP Animations for Scroll Effects
gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger for the "Intro" Section
gsap.fromTo(
  "#intro",
  {
    opacity: 0, // Start state
    y: 50,
  },
  {
    scrollTrigger: {
      trigger: "#intro",
      start: "top 75%", // Start when 75% of the section is in the viewport
      end: "bottom 25%", // End when 25% of the section is in the viewport
      scrub: true,
    },
    opacity: 1, // End state
    y: 0,
    ease: "power2.inOut",
  }
);

// ScrollTrigger for the "Facts" Section
gsap.fromTo(
  ".fact",
  {
    opacity: 0, // Start state
    y: 30,
  },
  {
    scrollTrigger: {
      trigger: "#facts",
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
    },
    opacity: 1, // End state
    y: 0,
    stagger: 0.2, // Add delay for each ".fact" card
    ease: "power1.out",
  }
);

// ScrollTrigger for "Legacy" Section
gsap.fromTo(
  "#legacy .highlight-card",
  {
    opacity: 0,
    y: 40,
    scale: 0.9,
  },
  {
    scrollTrigger: {
      trigger: "#legacy",
      start: "top 85%",
      end: "bottom 15%",
      scrub: true,
    },
    opacity: 1,
    y: 0,
    scale: 1,
    stagger: 0.3,
    ease: "elastic.out(1, 0.3)",
  }
);

// Scroll effect for the blurry transition from Header to Intro
gsap.to("header", {
  scrollTrigger: {
    trigger: "#intro",
    start: "top top",
    end: "center center",
    scrub: true,
  },
  filter: "blur(10px)",
  opacity: 0.5,
});

// Pin Header for a fixed effect while scrolling out
gsap.to("header", {
  scrollTrigger: {
    trigger: "header",
    start: "top top",
    end: "+=200", // Pin header for 200px
    scrub: true,
    pin: true,
  },
});
