$(document).ready(function() {
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
          $("button#green").addClass("disappear");
  });

  $("button#yellow").click(function() {
      $("body").removeClass();
      $("body").addClass("yellow-background");
      $("button#yellow").addClass("disappear");
      $("button#yellow").removeClass("button#yellow");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
    $("button#red").addClass("disappear");
  });
  $("button#blippo").click(function() {
    $("body").removeClass();
    $("body").addClass("blippo-background");
    $("button#blippo").addClass("disappear");
  });
});
