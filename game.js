//These are all variables that the game starts off with, and can be modified throughout different actions in the game.

//agreed to start game
agreed = false;
//Plan has been explained
manexplainedplan = false;
//current room
currentroom = "cell";
//dialog active with person
dialogActive = false;
//inventory
hasKey = false;
hasUniform = false;
hasWeapon = false;


$(document).ready(function() {

  //Inputting actions
  $("form").submit(function() {
    var input = $("#actionbar").val();

    //help
    if (input == "help"){
      $("#help").clone().insertBefore("#placeholder").fadeIn(1000);
    }

    //game
    else if (input == "talk to man" && currentroom == "cell"){
      $("<p>You talk to the man. He says he's trying to make a plan to break out and asks if you're in. <i> yes </i> or <i> no</i>?</p>").hide().insertBefore("#placeholder").fadeIn(1000);
      dialogActive = true;
    }

    else if (input == "yes" && currentroom == "cell"){
      if(dialogActive == true){
        $("<p>Welcome to prison break.</p>").hide().insertBefore("#placeholder").fadeIn(1000);
        $("<p>24 hours later...</p>").hide().insertBefore("#placeholder").fadeIn(5000);
        $("<p>The man explains his plans to you. In short, he needs you to collect a <b>key</b>, a <b>uniform</b> and a <b>weapon</b> from around the gulag.</p>").hide().insertBefore("#placeholder").fadeIn(5000);
        dialogActive = false;
        manexplainedplan = true;
      }
    }

    else if (input == "no" && currentroom == "cell"){
      if(dialogActive == true){
        $("<p> You and the man sit in silence.</p>").hide().insertBefore("#placeholder").fadeIn(1000);
        dialogActive = false;
      }
    }

    else if (input == "hint about key"){
      if(manexplainedplan == true){
          $("<p>You recall the man mentioned seeing a key in the <b>lunchroom</b>").hide().insertBefore("#placeholder").fadeIn(1000);
      }
    }

    else if (input == "go to lunchroom"){
      if(manexplainedplan == true){
          $("<p>You are in the lunchroom</p>").hide().insertBefore("#placeholder").fadeIn(1000);
      }
  }

    //scroll to botom and clear action bar
    $("#main").scrollTop($("#main")[0].scrollHeight);
    $("#actionbar").val("");
  });
});
