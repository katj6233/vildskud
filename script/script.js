var containerEl = document.querySelector(".billeder");
var mixer = mixitup(containerEl, {
  multifilter: {
    enable: true, // enable the multifilter extension for the mixer
    logicBetweenGroups: "or",
  },
});
