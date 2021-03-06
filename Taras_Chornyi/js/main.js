// ===== Scroll to Home =====

var linkNav = document.querySelectorAll('[href="#about"]'),
    speedScroll = 0.8;

for (var i = 0; i < linkNav.length; i++) {
  linkNav[i].addEventListener('click',

  function(event) {
    event.preventDefault();

    var scroll = window.pageYOffset,
        element = this.href.replace(/[^#]*(.*)/, '#about');
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

// ===== Scroll to About =====

var linkNav = document.querySelectorAll('[href="#skills"]'),
    speedScroll = 0.8;

for (var i = 0; i < linkNav.length; i++) {
  linkNav[i].addEventListener('click',

  function(event) {
    event.preventDefault();

    var scroll = window.pageYOffset,
        element = this.href.replace(/[^#]*(.*)/, '#skills');
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

// ===== Scroll to Technology =====

var linkNav = document.querySelectorAll('[href="#portfolio"]'),
    speedScroll = 0.8;

for (var i = 0; i < linkNav.length; i++) {
  linkNav[i].addEventListener('click',

  function(event) {
    event.preventDefault();

    var scroll = window.pageYOffset,
        element = this.href.replace(/[^#]*(.*)/, '#portfolio');
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

// ===== Scroll to Video =====

var linkNav = document.querySelectorAll('[href="#contact"]'),
    speedScroll = 0.8;

for (var i = 0; i < linkNav.length; i++) {
  linkNav[i].addEventListener('click',

  function(event) {
    event.preventDefault();

    var scroll = window.pageYOffset,
        element = this.href.replace(/[^#]*(.*)/, '#contact');
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
