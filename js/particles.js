tsParticles.load("tsparticles", {

  particles: {
    number: {
      value: window.innerWidth < 768 ? 30 : 50, // 👈 mobile optimize
      density: { enable: true, area: 800 }
    },

    color: { value: "#ffffff" },

    links: {
      enable: false
    },

    move: {
      enable: true,
      speed: 0.6, // 👈 thoda smooth
      outModes: "out"
    },

    size: {
      value: 2
    },

    opacity: {
      value: 0.5
    }
  },

  interactivity: {
    events: {
      onHover: { enable: false },

      onClick: {
        enable: true,
        mode: "repulse"
      }
    },

    modes: {
      repulse: {
        distance: 120, // 👈 200 se kam kiya
        duration: 0.4
      }
    }
  }
});