$(document).ready(function () {
  $(".navbar").hide()

  // fade in .navbar
  $(function () {
    $(window).scroll(function () {

      // set distance user needs to scroll before we start fadeIn
      if ($(this).scrollTop() > 10) {
        console.log('TROP HAUT !')
        $('.navbar').fadeIn(500)
      } else {
        $('.navbar').fadeOut(500)
      }
    })
  })

  new fullpage('#fullpage', {
    anchors: ['landing', 'about', 'projects'],
    autoScrolling: false,
    scrollBar: true,
    scrollingSpeed: 800
  })



  var landing = $('.landing-content')
  var lead = landing.find('.lead')
  lead.html(lead.text().replace(/./g, "<span>$&</span>"))

  var landingTl = new TimelineMax()
  landingTl
    .from(landing.find('h1'), 1, {
      marginLeft: 20,
      autoAlpha: 0
    }, 0.5)
    .staggerFrom(landing.find('.lead span'), 0.05, {
      autoAlpha: 0,
      repeat: -1,
      repeatDelay: 2,
      yoyo: true
    }, 0.05)
    .from(landing.find('.arrow-down'), 1, {
      marginLeft: 20,
      autoAlpha: 0
    }, 3.5)

  var about = $('.about')
  var aboutTl = new TimelineMax()
  aboutTl
    .from(about.find('img'), 1, {
      marginRight: 50,
      autoAlpha: 0
    }, 0.5)
    .from(about.find('h1'), 1, {
      marginLeft: 20,
      autoAlpha: 0
    })
    .staggerFrom(about.find('p'), 1, {
      autoAlpha: 0
    }, 0.5)

  var aboutCtrl = new ScrollMagic.Controller()

  var aboutScene = new ScrollMagic.Scene({
      triggerElement: ".about",
      offset: -200,
      triggerHook: 0.5,
      reverse: false
    })
    .setTween(aboutTl)
    .addTo(aboutCtrl)
});