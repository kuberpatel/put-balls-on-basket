$(document).ready(function () {
  const ballColors = [
    "red",
    "blue",
    "yellow",
    "lightgrey",
    "pink",
    "black",
    "orange",
    "green",
    "purple",
    "magenta",
    "firebrick",
    "crimson",
  ];

  const basketWidth = $("#basket").width();
  const basketHeight = $("#basket").height();
  const ballSize = 60; //ball size(50px) + margin (5px on each side )
  const maxBallsPerRow = Math.floor(basketWidth / ballSize);
  const maxRows = Math.floor(basketHeight / ballSize);
  const maxBalls = maxBallsPerRow * maxRows;

  $("#start").click(function () {
    $("#basket").empty(); //Clear the basket before stacking new balls

    //ball stacking process

    for (let i = 0; i < maxBalls; i++) {
      const randomColor =
        ballColors[Math.floor(Math.random() * ballColors.length)];
      const newBall = $(
        '<div class="ball" style="background-color: ' +
          randomColor +
          ' "></div>'
      );
      $("#basket").append(newBall); // Append the new ball to the basket
    }
  });
});
