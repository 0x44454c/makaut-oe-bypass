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

console.log("%c😊 All the best! 😊", "font-size:150%;color:firebrick;font-weight:700;");
console.log("%c🛠️ Developed By DelusionaL 🛠️", "color:skyblue;font-weight:600;");