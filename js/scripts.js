var disiterator = 0;
var beatMeat = 1;
var appended = '<p>You displayed your meat.</p><p>But No one Beat.</p> <iframe width="0" height="0" src="https://youtube.com/embed/TmuYSU0ghKU?version=3&autoplay=1&loop=1&playlist=gUpdozvB3XA" frameborder="0" allow="" allowfullscreen></iframe>';
var boss = "../sounds/boss.wav";

function bossplay()
{
                  var bossound = document.getElementById("boss");

                bossound.play();

  }

$(document).ready(function() {
  $('#hitsound').on('ended', function() {
  $("#beatbutton").show();
  });
  $('#smashsound').on('ended', function() {
  $("#beatbutton").show();
  });

  $('#boss').on('ended', function() {
  $("#beatbutton").show();
  });

  $(".meattext").hide();


  $("button#meat").addClass("disappear");
  $("#beatbutton").click(function()

  {

    meatbeaten();

    $(".critical").play();

    });

    $(".SMASH").hide();

    $("button#green").click(function() {
      $("button#green").addClass("disappear");

      $("body").removeClass();
      $("body").addClass("green-background");

      disiterator++;

      checkiterator();
      });

      $("button#yellow").click(function() {

        $("body").removeClass();
        $("body").addClass("yellow-background");

        $("button#yellow").addClass("disappear");
        $("button#yellow").removeClass("button#yellow");
        disiterator++;
        checkiterator();

        });

        $("button#red").click(function() {

          $("body").removeClass();
          $("body").addClass("red-background");

          $("button#red").addClass("disappear");
          disiterator++;
          checkiterator();

          });

          $("button#blippo").click(function() {
            $("body").removeClass();
            $("body").addClass("blippo-background");

            $("button#blippo").addClass("disappear");

            disiterator++;

            checkiterator();

            });

            $("button#meat").click(function() {

              $("body").removeClass();
              $("body").addClass("meat");

              $("button#meat").addClass("disappear");
              $("button#meat").removeClass("show");

              $(".meattext").show();
              $(".meattext").append(appended);
              $(".meattext").append('<button id="beatbutton" class="beatmeatbutton" onclick="meatbeaten()">Beat?</button>');

              $(".jumbo").html("<h1>Fight with Meat</h1> <p>What are you running from?</p>");
              $(".jumbo").addClass("meattext2");


              });

              function checkiterator()
              {

                console.log(disiterator);

                if (disiterator === 4)
                {

                  $("button#meat").addClass("show");

                  disiterator++;

                }
              }


              function beatmeatsound() {

                $(".critical").play();

              }
              });

              function meatbeaten()
              {

                console.log(beatMeat);
                switch(beatMeat)
                {

                  case 1:

                  beatMeat++;
                  $("#beatbutton").hide();
                  var meatbeat = document.getElementById("hitsound");
                  meatbeat.play();







                  /* Play a sound and shake a little bit */


                  console.log(beatMeat);
                  break;

                  case 2:
                  $("#beatbutton").hide();
                  meatbeat = document.getElementById("hitsound");
                  beatMeat++;
                  meatbeat.play();
                  $("#meatbeaten").hide();

                  console.log(beatMeat);

                  /* Play a sound and shake the screen a little more */

                  break;

                  case 3:
                  meatbeat = document.getElementById("hitsound");
                  $("#beatbutton").hide();
                  smashsound.play();
                  beatMeat++;

                  console.log(beatMeat);

                  $(".beatbutton").hide();

                  /* Play a sound and shake the screen a little more, but permanently */

                  break;

                  case 4:
                  $("#beatbutton").hide();
                  var smashsound  = document.getElementById("smashsound");
                  smashsound.play();
                  var meatdie = document.getElementById("enemydie");
                  $('#smashsound').on('ended', function() {

                  meatdie.play();
});



                  $(".SMASH").show();

                  console.log(beatMeat);

                  beatMeat++;

                  /* Play a sound, shake the screen, and kill meat */

                  $(".beatbutton").hide();

                  break;

                }
              }
