(function () {
  var names = [
    "Yaakov",
    "John",
    "Jen",
    "Jason",
    "Paul",
    "Frank",
    "Larry",
    "Paula",
    "Laura",
    "Jim",
  ];

  //loop through all the names
  for (var i in names) {
    //select lowercase of firtletter from name array
    var firstLetter = names[i].charAt(0).toLowerCase();

    //call byeSpeaker for letters that begin with "j" else call helloSpeaker
    if (firstLetter === "j") {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})();
