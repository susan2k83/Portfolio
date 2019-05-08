$(document).ready(function () {

    $("#about").click(function () {
      $("#aboutMeDiv").show();
      $("#about").hide();

    });
    $(".aboutArrow").click(function () {
      $("#aboutMeDiv").hide();
      location.reload();
      $("#about").show();

    });

    $("#applications").click(function () {
      $("#applications").hide();
      $(".parallax2").show();

    });
    $(".appArrow").click(function () {
      $(".parallax2").hide();
      location.reload();
      $("#applications").show();
    });

    $("#contact").click(function () {
      $("#contact").hide();
      $("#contact-info-div").show();

    });
    $(".contactArrow").click(function () {
      $("#contact-info-div").hide();
      location.reload();
      $("#contact").show();
    })

  });