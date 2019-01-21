(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

/* jshint esversion: 6 */
var body, header, html, isSafari, isIE11;
/*--------------------------------------------------
Init
--------------------------------------------------*/

function init() {
  html = document.documentElement;
  body = document.body;
  header = document.querySelector('.header');
}
/*--------------------------------------------------
Browsers
--------------------------------------------------*/


function oldBrowsers() {
  isSafari = /constructor/i.test(window.HTMLElement) || function (p) {
    return p.toString() === "[object SafariRemoteNotification]";
  }(!window['safari'] || safari.pushNotification);

  isIE11 = !!navigator.userAgent.match(/Trident.*rv[ :]*11\./);

  if (isIE11 === true) {
    html.classList.add('msie');
  }

  if (isSafari === true) {
    html.classList.add('safari');
  }
}
/*--------------------------------------------------
WIN LOAD
--------------------------------------------------*/


window.onload = function () {
  init();
  oldBrowsers();
};

},{}]},{},[1]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzcmMvanMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXHJcblxyXG5sZXQgYm9keSxcclxuXHRoZWFkZXIsXHJcblx0aHRtbCxcclxuXHRpc1NhZmFyaSxcclxuXHRpc0lFMTE7XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkluaXRcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5mdW5jdGlvbiBpbml0KCkge1xyXG5cdGh0bWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcblx0Ym9keSA9IGRvY3VtZW50LmJvZHk7XHJcblx0aGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkJyb3dzZXJzXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuZnVuY3Rpb24gb2xkQnJvd3NlcnMoKSB7XHJcblx0aXNTYWZhcmkgPSAvY29uc3RydWN0b3IvaS50ZXN0KHdpbmRvdy5IVE1MRWxlbWVudCkgfHwgKGZ1bmN0aW9uKHApIHsgcmV0dXJuIHAudG9TdHJpbmcoKSA9PT0gXCJbb2JqZWN0IFNhZmFyaVJlbW90ZU5vdGlmaWNhdGlvbl1cIjsgfSkoIXdpbmRvd1snc2FmYXJpJ10gfHwgc2FmYXJpLnB1c2hOb3RpZmljYXRpb24pO1xyXG5cdGlzSUUxMSA9ICEhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvVHJpZGVudC4qcnZbIDpdKjExXFwuLyk7XHJcblxyXG5cdGlmIChpc0lFMTEgPT09IHRydWUpIHtcclxuXHRcdGh0bWwuY2xhc3NMaXN0LmFkZCgnbXNpZScpO1xyXG5cdH1cclxuXHRpZiAoaXNTYWZhcmkgPT09IHRydWUpIHtcclxuXHRcdGh0bWwuY2xhc3NMaXN0LmFkZCgnc2FmYXJpJyk7XHJcblx0fVxyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbldJTiBMT0FEXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuXHRpbml0KCk7XHJcblx0b2xkQnJvd3NlcnMoKTtcclxufTtcclxuIl0sImZpbGUiOiJkb2NzXFxqc1xcbWFpbi5qcyJ9
