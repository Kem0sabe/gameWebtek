"use  strict"

window.onload = function() {


  const canvas = document.getElementsByClassName("gameCanvas")[0]; // there is only one canvas
  //canvas.height = window.innerHeight/5;

  //d2d = draw 2d, object that we use for drawing

  const d2d = new drawLib(canvas);
  //d2d.drawRect(50,50,50,50,"grey");
  d2d.drawRect(0,0,50,50,"black");


  //const game = new Game(canvas);


}
