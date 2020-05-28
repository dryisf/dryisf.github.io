(function ($) {
  var jumbotron = $('.jumbotron')
  var lead = jumbotron.find('.lead')
  lead.html(lead.text().replace(/./g, "<span>$&</span>"))

  var landingTl = new TimelineMax()
  landingTl
  .from(jumbotron.find('h1'), 1, { marginLeft: 20, autoAlpha: 0}, 0.5)
  .staggerFrom(jumbotron.find('.lead span'), 0.05, { autoAlpha: 0, repeat: -1, repeatDelay: 2, yoyo: true}, 0.05)

  var about = $('.about')
  var aboutTl = new TimelineMax()
  aboutTl
  .from(about.find('img'), 1, { marginRight: 50, autoAlpha: 0}, 0.5)
  .from(about.find('h1'), 1, {marginLeft: 20, autoAlpha: 0})
  .staggerFrom(about.find('p'), 1, {autoAlpha: 0}, 0.5)

  var ctrl = new ScrollMagic.Controller();

  var scene = new ScrollMagic.Scene({
    triggerElement: ".about",
    offset: -200,
    triggerHook: 0.5,
    reverse: false
  })
    .addIndicators({
      name: "about",
      colorTrigger: "black",
      colorStart: "black",
      colorEnd: "black",
      indent: 5
    })
    .setTween(aboutTl)
    .addTo(ctrl)

})(jQuery);