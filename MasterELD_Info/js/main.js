// ===== Scroll to Home =====

var linkNav = document.querySelectorAll('[href="#home"]'),
    speedScroll = 0.1;

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

// ===== Scroll to Instruction =====

var linkNav = document.querySelectorAll('[href="#instruction"]'),
    speedScroll = 0.1;

for (var i = 0; i < linkNav.length; i++) {
  linkNav[i].addEventListener('click',

  function(event) {
    event.preventDefault();

    var scroll = window.pageYOffset,
        element = this.href.replace(/[^#]*(.*)/, '#instruction');
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

var linkNav = document.querySelectorAll('[href="#video"]'),
    speedScroll = 0.1;

for (var i = 0; i < linkNav.length; i++) {
  linkNav[i].addEventListener('click',

  function(event) {
    event.preventDefault();

    var scroll = window.pageYOffset,
        element = this.href.replace(/[^#]*(.*)/, '#video');
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

// ===== Scroll to Upgrade =====

var linkNav = document.querySelectorAll('[href="#upgrade"]'),
    speedScroll = 0.1;

for (var i = 0; i < linkNav.length; i++) {
  linkNav[i].addEventListener('click',

  function(event) {
    event.preventDefault();

    var scroll = window.pageYOffset,
        element = this.href.replace(/[^#]*(.*)/, '#upgrade');
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

// ===== Scroll to Contact =====

var linkNav = document.querySelectorAll('[href="#contact"]'),
    speedScroll = 0.1;

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
