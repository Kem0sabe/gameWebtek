"use  strict";


//TODO: Make ball move and add restrictions
class Game {
  constructor(canvas) {
    this.canvas = canvas; //setting canvas
    this.ctx = this.canvas.getContext("2d"); //setting context
    this.d2d = new drawLib(this.canvas); //d2d = draw 2d, library for drawing object in canvas

    this.fps = 200; // setting frames per second
    this.running = false; //handy variable for statrting and stopping the render function

    this.player = { //object for holding the x,y positions of the player
      x: undefined,
      y: undefined,
      update: function(x,y) {
        this.x = x;
        this.y = y;
      },
      setDim: function(width,height) {
        this.width = width;
        this.height = height;
      }
    }
    this.player.update(this.canvas.width/2,this.canvas.height-50); //setplayer startpoint
    this.player.setDim(100,25)


    //add eventListener to update mouse position
    this.canvas.addEventListener("mousemove",this.updatePlayer.bind(this));
    //centering the player before starting
    this.ball = new Ball(this.player.x,this.player.y - 75,20,1,-2);





    this.start();

  }
  render() { //functon for drawing each new frame, idk why it is called render

    //TODO: declare d2d in constructor and make global
    this.checkIfBallHitPlayer();
    this.ball.move(this.canvas);

    this.d2d.clear();
    this.d2d.drawRect(this.player.x,this.player.y,this.player.width,this.player.height,"#F11EFF");
    this.d2d.drawCircle(this.ball.x,this.ball.y,this.ball.radius,"yellow");
  }
  start() {

    this.running = true;
    this.interval = setInterval( //starts callingthe render function after fps specs
      //named it this.interval ,which comes in handy if we need to stop it
      this.render.bind(this),
      1000/this.fps
    )


  }
  stop() {
    this.running = false
    clearInterval(this.interval)
  }
  updatePlayer(e) {
    const cX = e.clientX - this.canvas.offsetLeft; //canvas relative x cordinates
    const cY = this.canvas.height-50 //the y cordinates stays the same
    this.player.update(cX,cY);
  }
  checkIfBallHitPlayer() {

    if (this.ball.y + this.ball.radius > this.player.y - this.player.height/2) {
      if (this.ball.dy > 0) { //edge case to prevent ball from turning multiple times in same turn case
        console.log("sup");
        if (this.ball.x  < this.player.x + this.player.width/2 && this.ball.x  > this.player.x - this.player.width/2) {
          this.ball.dy *= -1;
        }
      }
    }
  }

}
