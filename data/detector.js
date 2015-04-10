var l = document.links;
var rickroll = "dQw4w9WgXcQ";

for(var i=0; i<l.length; i++) {
  if(l[i].href.indexOf(rickroll) > -1) {
    var text = document.createTextNode(" (Rickroll detected)");
    l[i].appendChild(text);
  }
}

