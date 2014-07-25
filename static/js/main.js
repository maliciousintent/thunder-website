/*jshint browser:true, indent:2, laxcomma:true, loopfunc: true */
/*global NodeList, HTMLCollection */

(function () {

  'use strict';

  NodeList.prototype.forEach = Array.prototype.forEach;
  HTMLCollection.prototype.forEach = Array.prototype.forEach;

  NodeList.prototype.on = function (event, listener) {
    this.forEach(function (el) {
      el.addEventListener(event, listener);
    });
  };

  var showSignup;
  var hideSignup;

  showSignup = function () {
    document.querySelector('section#signup').style.display = 'block';
    document.querySelector('.mask-signup').style.display = 'block';
    setTimeout(function () {
      document.querySelector('#app').classList.add('hidden');
      document.querySelector('section#signup').classList.add('visible');
      document.querySelector('.mask-signup').classList.add('visible');
      document.querySelector('section#signup button.close').classList.add('visible');
    }, 100);
  };

  hideSignup = function () {
    document.querySelector('#app').classList.remove('hidden');
    document.querySelector('section#signup').classList.remove('visible');
    document.querySelector('.mask-signup').classList.remove('visible');
    document.querySelector('section#signup button.close').classList.remove('visible');
    setTimeout(function () {
      document.querySelector('section#signup').style.display = 'none';
      document.querySelector('.mask-signup').style.display = 'none';
      document.querySelector('section#signup input#email').value = '';
    }, 500);
  }

  document.querySelectorAll('button.signup').on('click', showSignup);
  document.querySelectorAll('button.close').on('click', hideSignup);
  document.querySelector('section#signup form').addEventListener('submit', hideSignup);
  document.querySelector('.mask-signup').addEventListener('click', hideSignup);


  var resizeHandler = function () {
    document.querySelector('section#landing').style.height = document.querySelector('body').getBoundingClientRect().height + 'px';
    var imageH = document.querySelector('.preview img').getBoundingClientRect().height;
    document.querySelector('.preview').style.height = Math.round(imageH - imageH * 0.283333) + 'px';
  };

  window.addEventListener('resize', function () {
    resizeHandler();
  });
  resizeHandler();

  document.addEventListener('scroll', function () {
    var scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    document.querySelector('#scrolldown').style.opacity = (200 - scrollTop) / 100;
  });

})();
