$(document).ready(function() {
  //Save, load, Delete
  //Save
  document.getElementById("save").onclick = function() {save()};
  document.getElementById("load").onclick = function() {load()};
  document.getElementById("home").onclick = function(){openInfo(event, 'main')};
  document.getElementById("settings").onclick = function(){openInfo(event, 'Settings')};
  document.getElementById("contact").onclick = function(){openInfo(event, 'Contact Us')};

  function save(){
    mainContent = document.getElementById("main").innerHTML;
    localStorage.setItem("mainContent", mainContent);
    $("<h1><b>SAVED</b></h1>").hide().insertBefore("#placeholder").fadeIn(1000).fadeOut(1000);
    $("#main").scrollTop($("#main")[0].scrollHeight);
  }
  //Load
  function load(){
    document.getElementById("main").innerHTML = localStorage.getItem("mainContent");
    $("<h1><b>LOADED</b></h1>").hide().insertBefore("#placeholder").fadeIn(1000).fadeout(1000);
    $("#main").scrollTop($("#main")[0].scrollHeight);
  }


  //tabs
  function openInfo(evt, openInfo) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(openInfo).style.display = "block";
    evt.currentTarget.className += " active";
  }
});
