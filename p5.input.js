var keysHeld = "";
var theKey = "";
var keysLog = "";
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
  return keysHeld.includes(_k);
}
document.addEventListener('keydown', function (e) {
	theKey = e.key;
	keysLog+= e.key;
	if(isHeld(e.key)) {
		return;
	}
	aKeyPressed = true;
  keysHeld = keysHeld.replaceAll(e.key, "");

  keysHeld += e.key;
  // testing 
	//console.log(keysHeld);
}
);
document.addEventListener('keyup', function (e) {
  theKey = e.key;
  keysHeld = keysHeld.replaceAll(e.key, "");
	if(keysHeld.length <= 0) { aKeyPressed = false; }
	// testing 
	//console.log(keysHeld);
}
);
