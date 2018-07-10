// ===== Scroll to Home =====

var linkNav = document.querySelectorAll('[href="#home"]'),
    speedScroll = 0.5;

for (var i = 0; i < linkNav.length; i++) {
  linkNav[i].addEventListener('click',

  function(event) {
    event.preventDefault();

    var scroll = window.pageYOffset,
        element = this.href.replace(/[^#]*(.*)/, '#home');
        retreat = document.querySelector(element).getBoundingClientRect().top,
        start = null;
    requestAnimationFrame(step);

    function step(time) {
      if (start === null) start = time;

      var progress = time - start,
          calculation = (retreat < 0 ? Math.max(scroll - progress/speedScroll, scroll + retreat) : Math.min(scroll + progress/speedScroll, scroll + retreat));

      window.scrollTo(0,calculation);
      if (calculation != scroll + retreat) {
        requestAnimationFrame(step)
      } else {
        location.hash = element
      }
    }
  }, false);
}

// ===== Alert phone number =====

function myFunction() {
  alert("Hello! My name is Taras. My Phone number, Skype and Viber is +380 98 558 6024. Contact me.");
}
