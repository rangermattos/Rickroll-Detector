var arr = [], l = document.links;
var rickroll = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

for(var i=0; i<l.length; i++) {
  arr.push(l[i].href);
  if(l[i].href === rickroll) {
    console.log("rickroll detected");
    var text = document.createElement("span");
    text.innerHTML = "Rickroll detected";
    l[i].parentNode.insertBefore(text, l[i].nextSibling);
  }
}
