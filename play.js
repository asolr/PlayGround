// JavaScript

function play(){
  var content = document.getElementById("playhtml").value;
  var code = document.getElementById("playjs").value;
  var playarea = document.getElementById("playarea");
  playarea.innerHTML = content + "<script>" + code + "<\/script>";
  eval(code);
  var playhelpjs = document.getElementById("playhelpjs");
  var playhelp = document.getElementById("playhelp");
  if(code.length > 2500) {
    playhelpjs.innerHTML = "(Seriously? " + code.length + ")";
  } else {
    playhelpjs.innerHTML = "(" + code.length + ")";
  }
  if(content.length > 10000) {
    playhelp.innerHTML = "(Seriously? " + content.length + ")";
  } else {
    playhelp.innerHTML = "(" + content.length + ")";
  }
}