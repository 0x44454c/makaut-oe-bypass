'use strict';
/**
 * @author: DelusionaL
 * Extension: Makaut Online Exam Bypass
 */
const script = document.createElement("script");
script.textContent = `
/* These bypasses tab focus events */
// At first Defines document properties
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

// Defines window properties
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

// Added some event listeners
const block = e => {
	e.preventDefault();
	e.stopPropagation();
	e.stopImmediatePropagation();
};
document.addEventListener('visibilitychange', block, true);
document.addEventListener('webkitvisibilitychange', block, true);
document.addEventListener('mozvisibilitychange', block, true);
document.addEventListener('hasFocus', block, true);
document.addEventListener('blur', block, true);
window.addEventListener('blur', block, true);
window.addEventListener('mouseleave', block, true);
/********************************/

/* These bypasses browser check events */
navigator.__defineGetter__('userAgent', function () {
	// return "Mozilla/5.0 (Linux; Android 10; Redmi Note 7S) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.72 Mobile Safari/537.36";
  //  return "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.43 Safari/537.36";
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

function imp(e) {
	e.stopImmediatePropagation();
};
document.addEventListener('contextmenu', imp, true);
document.addEventListener('paste', imp, true);
document.addEventListener('copy', imp, true);
document.addEventListener('cut', imp, true);
document.addEventListener('selectstart', imp, true);
document.addEventListener('mousedown', imp, true);
document.addEventListener('mousemove', imp, true);
// document.addEventListener('mouseenter', imp, true);
document.addEventListener('mouseon', imp, true);
// document.addEventListener('dragstart', imp, true);
// window.addEventListener('focusout', imp, true)

