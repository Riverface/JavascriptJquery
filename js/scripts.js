var disiterator = 0;

$(document).ready(function() {
              $(".meattext").hide();
    $("button#meat").addClass("disappear");

  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
    $("button#green").addClass("disappear");
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
            $(".meattext").html('<p>You displayed your meat.</p><p>But No one Beat.</p> <iframe width="0" height="0" src="https://www.youtube.com/embed/gUpdozvB3XA?version=3&autoplay=1&loop=1&playlist=gUpdozvB3XA" frameborder="0" allow="autoplay; loop; encrypted-media" allowfullscreen></iframe>');
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
          });
