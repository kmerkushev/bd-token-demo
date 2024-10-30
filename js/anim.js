// init controller
var controller = new ScrollMagic.Controller();


new ScrollMagic.Scene({
  reverse: false,
  triggerElement: "#issues__inner",
  triggerHook: 0.9, // show, when scrolled 10% into view
  offset: 200 // move trigger to center of element
})
.setClassToggle("#issues__h2", "issues__animation-to")
.addTo(controller);


new ScrollMagic.Scene({
  reverse: false,
  triggerElement: "#issues__inner",
  triggerHook: 0.9, // show, when scrolled 10% into view
  offset: 200 // move trigger to center of element
})
.setClassToggle("#issues__features", "issues__animation-to--delay")
.addTo(controller);


new ScrollMagic.Scene({
  reverse: false,
  triggerElement: "#banner",
  triggerHook: 0.9, // show, when scrolled 10% into view
  offset: 100 // move trigger to center of element
})
.setClassToggle("#banner", "banner__animation-to") // add class to reveal
.addTo(controller);


new ScrollMagic.Scene({
  reverse: false,
  triggerElement: "#eco",
  triggerHook: 0.9, // show, when scrolled 10% into view
  offset: 100 // move trigger to center of element
})
.setClassToggle("#eco", "eco__animation-to") // add class to reveal
.addTo(controller);



new ScrollMagic.Scene({
  reverse: false,
  triggerElement: "#adva__inner",
  triggerHook: 0.9, // show, when scrolled 10% into view
  offset: 200 // move trigger to center of element
})
.setClassToggle("#adva__h2", "adva__animation-to")
.addTo(controller);


new ScrollMagic.Scene({
  reverse: false,
  triggerElement: "#adva__inner",
  triggerHook: 0.9, // show, when scrolled 10% into view
  offset: 200 // move trigger to center of element
})
.setClassToggle("#adva__table", "adva__animation-to--delay")
.addTo(controller);




new ScrollMagic.Scene({
  reverse: false,
  triggerElement: "#feed__inner",
  triggerHook: 0.9, // show, when scrolled 10% into view
  offset: 200 // move trigger to center of element
})
.setClassToggle("#feed__h2", "feed__animation-to")
.addTo(controller);


new ScrollMagic.Scene({
  reverse: false,
  triggerElement: "#feed__inner",
  triggerHook: 0.9, // show, when scrolled 10% into view
  offset: 200 // move trigger to center of element
})
.setClassToggle("#feed__slider", "feed__animation-to--delay")
.addTo(controller);


new ScrollMagic.Scene({
  reverse: false,
  triggerElement: "#roadmap__inner",
  triggerHook: 0.9, // show, when scrolled 10% into view
  offset: 200 // move trigger to center of element
})
.setClassToggle("#roadmap__h2", "roadmap__animation-to")
.addTo(controller);


new ScrollMagic.Scene({
  reverse: false,
  triggerElement: "#roadmap__inner",
  triggerHook: 0.9, // show, when scrolled 10% into view
  offset: 200 // move trigger to center of element
})
.setClassToggle("#roadmap__wrapper", "roadmap__animation-to--delay")
.addTo(controller);



new ScrollMagic.Scene({
  reverse: false,
  triggerElement: "#tokenomics",
  triggerHook: 0.9, // show, when scrolled 10% into view
  offset: 300 // move trigger to center of element
})
.setClassToggle("#tokenomics", "toke__animation-to")
.addTo(controller);



new ScrollMagic.Scene({
  reverse: false,
  triggerElement: "#team__inner",
  triggerHook: 0.9, // show, when scrolled 10% into view
  offset: 200 // move trigger to center of element
})
.setClassToggle("#team__h2", "team__animation-to")
.addTo(controller);


new ScrollMagic.Scene({
  reverse: false,
  triggerElement: "#team__inner",
  triggerHook: 0.9, // show, when scrolled 10% into view
  offset: 200 // move trigger to center of element
})
.setClassToggle("#team__slider", "team__animation-to--delay")
.addTo(controller);



new ScrollMagic.Scene({
  reverse: false,
  triggerElement: "#banner-cta",
  triggerHook: 0.9, // show, when scrolled 10% into view
  offset: 300 // move trigger to center of element
})
.setClassToggle("#banner-cta", "banner-cta__animation-to")
.addTo(controller);


new ScrollMagic.Scene({
  reverse: false,
  triggerElement: "#faq__inner",
  triggerHook: 0.9, // show, when scrolled 10% into view
  offset: 200 // move trigger to center of element
})
.setClassToggle("#faq__h2", "faq__animation-to")
.addTo(controller);


new ScrollMagic.Scene({
  reverse: false,
  triggerElement: "#faq__inner",
  triggerHook: 0.9, // show, when scrolled 10% into view
  offset: 200 // move trigger to center of element
})
.setClassToggle("#faq__accordions", "faq__animation-to--delay")
.addTo(controller);




new ScrollMagic.Scene({
  reverse: false,
  triggerElement: "#partners__inner",
  triggerHook: 0.9, // show, when scrolled 10% into view
  offset: 200 // move trigger to center of element
})
.setClassToggle("#partners__h2", "partners__animation-to")
.addTo(controller);


new ScrollMagic.Scene({
  reverse: false,
  triggerElement: "#partners__inner",
  triggerHook: 0.9, // show, when scrolled 10% into view
  offset: 200 // move trigger to center of element
})
.setClassToggle("#partners__logos", "partners__animation-to--delay")
.addTo(controller);
