require("sdk/tabs").on("ready", detect);
var self = require("sdk/self");

function detect(tab)
{
  tab.attach({
    contentScriptFile: self.data.url("detector.js")
  });
} 
