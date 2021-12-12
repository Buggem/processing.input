String keysHeld = "", keysLog = "", theKey = "";
int coded = CODED; // because caps are annoying
boolean aKeyPressed = false;

boolean isHeld(char _k) {
  return keysHeld.contains(str(_k));
}
void keyPressed() {
  keysLog+=key;
  theKey=key;
  aKeyPressed = true;
  if(key != coded) {
    keysHeld += str(key);
  }
  // testing println(keysHeld);
}
void keyReleased() {
  theKey=key;
  if(keysHeld.length() <= 0) {
    aKeyPressed = false;
  }
  if(key != coded) {
    keysHeld = keysHeld.replace(str(key), "");
  }
}
