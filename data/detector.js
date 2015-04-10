var l = document.links;
var rickroll = "dQw4w9WgXcQ";

for(var i=0; i<l.length; i++) {
  if(l[i].href.indexOf(rickroll) > -1) {
    console.log("rickroll detected");
    var text = document.createElement("span");
    text.innerHTML = " (Rickroll detected)";
    l[i].parentNode.insertBefore(text, l[i].nextSibling);
  }
}

