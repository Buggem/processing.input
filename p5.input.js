window.keysHeld = [];
window.theKey = "";
window.keysLog = [];
window.aKeyPressed = false;

/*String.prototype.replaceAll = function (stringToFind, stringToReplace) {
    if (stringToFind === stringToReplace) return this;
    var temp = this;
    // debug line
    // console.log((stringToFind.length > 0) + " and " + temp.includes(stringToFind))
    temp = (((stringToFind.length > 0) && temp.includes(stringToFind)) ? (temp.split(stringToFind).join(stringToReplace)) : (temp))
    return temp;
};*/

window.isHeld = function(_k) {
	return window.keysHeld.includes(_k);
};
window.getKeysHeldAsString = function(d) {
	return keysHeld.join(d);	
};
document.addEventListener('keydown', function (e) {
	window.theKey = e.key;
	window.keysLog.push(e.key);
	if(isHeld(e.key)) {
		return;
	}
	window.aKeyPressed = true;
	window.keysHeld = window.keysHeld.filter(key => (e.key !== key));
	
	window.keysHeld.push(e.key);
	// testing 
	// console.log(window.keysHeld);
}
);
document.addEventListener('keyup', function (e) {
	window.theKey = e.key;
	window.keysHeld = window.keysHeld.filter(key => (e.key !== key));
	if(window.keysHeld.length <= 0) { window.aKeyPressed = false; }
	// testing 
	//console.log(keysHeld);
}
);
