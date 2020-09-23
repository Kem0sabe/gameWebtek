"use  strict"

window.onload = function() {


  const canvas = document.getElementById("gameCanvas"); // there is only one canvas
  canvas.width = 600;
  canvas.height = 600;


  //d2d = draw 2d, object that we use for drawing


  //d2d.drawRect(50,50,50,50,"grey");
  //d2d.drawRect(50,50,50,50,"black");
  //let c = canvas.getContext("2d");
  //c.fillRect(0,0,100,100)
  const g = new Game(canvas);




}
