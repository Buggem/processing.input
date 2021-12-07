var keysHeld = "";
var aKeyPressed = false;

String.prototype.replaceAll = function (stringToFind, stringToReplace) {
    if (stringToFind === stringToReplace) return this;
    var temp = this;
    var index = temp.indexOf(stringToFind);
		while (index != -1) {
       temp = temp.replace(stringToFind, stringToReplace);
       index = temp.indexOf(stringToFind);
    }
    return temp;
};

function isHeld(_k) {
  return keysHeld.includes(_k.toUpperCase());
}
document.addEventListener('keydown', function (e) {
	if(isHeld(e.key)) {
		return;
	}
	aKeyPressed = true;
  keysHeld = keysHeld.replaceAll(e.key.toUpperCase(), "");

  keysHeld += e.key.toUpperCase();
  // testing 
	//console.log(keysHeld);
}
);
document.addEventListener('keyup', function (e) {
  keysHeld = keysHeld.replaceAll(e.key.toUpperCase(), "");
	if(keysHeld.length <= 0) { aKeyPressed = false; }
	// testing 
	//console.log(keysHeld);
}
);
