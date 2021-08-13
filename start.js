'use strict';
/**
 * @author: DelusionaL
 * Extension: Makaut Online Exam Bypass
 */

const script = document.createElement('script');
script.textContent = `
Object.defineProperty(document, 'visibilityState', {
	get() {
		return 'visible';
	}
});
Object.defineProperty(document, 'hidden', {
	get() {
		return false;
	}
});
Object.defineProperty(document, 'mozHidden', {
	get() {
		return false;
	}
});
Object.defineProperty(document, 'webkitHidden', {
	get() {
		return false;
	}
});

Object.defineProperty(window, 'visibilityState', {
	get() {
		return 'visible';
	}
});
Object.defineProperty(window, 'hidden', {
	get() {
		return false;
	}
});
Object.defineProperty(window, 'mozHidden', {
	get() {
		return false;
	}
});
Object.defineProperty(window, 'webkitHidden', {
	get() {
		return false;
	}
});

function block(e) {
	e.preventDefault();
	e.stopPropagation();
	e.stopImmediatePropagation();
}
document.addEventListener('visibilitychange', block, true);
document.addEventListener('webkitvisibilitychange', block, true);
document.addEventListener('mozvisibilitychange', block, true);
document.addEventListener('hasFocus', block, true);
document.addEventListener('blur', block, true);
window.addEventListener('blur', block, true);
window.addEventListener('mouseleave', block, true);

navigator.__defineGetter__('userAgent', function () {
	return "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4392.0 Safari/537.36"
});
if (!window.chrome){
	Object.defineProperty(window, 'chrome', {
		get(){
			return true;
		}
	})
}
if (!window.opera){
	Object.defineProperty(window, 'opera', {
		get(){
			return false;
		}
	})
}
`;

document.documentElement.appendChild(script);