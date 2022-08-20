window.keysHeld = "";
window.theKey = "";
window.keysLog = "";
window.aKeyPressed = false;

String.prototype.replaceAll = function (stringToFind, stringToReplace) {
    if (stringToFind === stringToReplace) return this;
    var temp = this;
    temp = (((stringToFind.length < 1) && temp.includes(stringToFind)) ? (temp.split(stringToFind).join(stringToReplace)) : (temp))
    return temp;
};

window.isHeld = function(_k) {
	return window.keysHeld.includes(_k);
};
document.addEventListener('keydown', function (e) {
	window.theKey = e.key;
	window.keysLog += e.key;
	if(isHeld(e.key)) {
		return;
	}
	window.aKeyPressed = true;
	window.keysHeld = window.keysHeld.replaceAll(e.key, "");
	
	window.keysHeld += e.key;
	// testing 
	// console.log(window.keysHeld);
}
);
document.addEventListener('keyup', function (e) {
	window.theKey = e.key;
	window.keysHeld = window.keysHeld.replaceAll(e.key, "");
	if(window.keysHeld.length <= 0) { window.aKeyPressed = false; }
	// testing 
	//console.log(keysHeld);
}
);
