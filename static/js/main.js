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

  document.querySelectorAll('button.signup').on('click', function () {
    document.querySelector('section#signup').style.display = 'block';
    document.querySelector('.mask-signup').style.display = 'block';
    setTimeout(function () {
      document.querySelector('section#landing').classList.add('hidden');
      document.querySelector('section#signup').classList.add('visible');
      document.querySelector('.mask-signup').classList.add('visible');
      document.querySelector('section#signup button.close').classList.add('visible');
    }, 10);
  });

  document.querySelectorAll('button.close').on('click', function () {
    document.querySelector('section#landing').classList.remove('hidden');
    document.querySelector('section#signup').classList.remove('visible');
    document.querySelector('.mask-signup').classList.remove('visible');
    document.querySelector('section#signup button.close').classList.remove('visible');
    setTimeout(function () {
      document.querySelector('section#signup').style.display = 'none';
      document.querySelector('.mask-signup').style.display = 'none';
    }, 500);
  });

})();
