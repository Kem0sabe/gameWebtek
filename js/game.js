"use  strict";



class Game {
  constructor(canvas) {
    this.canvas = canvas; //setting canvas
    this.ctx = this.canvas.getContext("2d"); //setting context

    this.fps = 200; // setting frames per second
    this.running = false; //handy variable for statrting and stopping the render function

    this.player = { //object for holding the x,y positions of the player
      x: undefined,
      y: undefined,
      update: function(x,y) {
        this.x = x;
        this.y = y;
      }
    }
    this.ball = {
      x:undefined,
      y:undefined,
      dx: undefined,
      dy: undefined,
      update: function(canvas,player) {

        this.x += this.dx;
        this.y += this.dy;
      }
    }
    //add eventListener to update mouse position
    this.canvas.addEventListener("mousemove",this.updatePlayer.bind(this));

    this.start();

  }
  render() { //functon for drawing each new frame, idk why it is called render

    //TODO: declare d2d in constructor and make global
    this.updateBall();
    const d2d = new drawLib(this.canvas);
    d2d.clear();
    d2d.drawRect(this.player.x,this.canvas.height-50,100,25,"red");
  }
  start() {

    this.running = true;
    this.interval = setInterval( //starts callingthe render function after fps specs
      //named it this.interval ,which comes in handy if we need to stop it
      this.render.bind(this),
      1000/this.fps
    )


  }
  updatePlayer(e) {
    const cX = e.clientX - this.canvas.offsetLeft; //canvas relative x cordinates
    const cY = e.clientY - this.canvas.offsetTop;  //canvas relative y cordinates
    this.player.update(cX,cY);
  }
  updateBall() {
    //this should do something in alter version
  }

}
