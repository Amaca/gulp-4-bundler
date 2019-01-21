/* jshint esversion: 6 */

let body,
	header,
	html,
	isSafari,
	isIE11;

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
	isSafari = /constructor/i.test(window.HTMLElement) || (function(p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);
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
window.onload = () => {
	init();
	oldBrowsers();
};
