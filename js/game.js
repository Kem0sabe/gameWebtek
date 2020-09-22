"use  strict";


class Game {
  constructor(canvas) {
    this.canvas = canvas; //setting canvas
    this.ctx = this.canvas.getContext("2d"); //setting context

    this.fps = 10; // setting frames per second
    this.running = false; //handy variable for statrting and stopping the render function
    this.start(); // starting TODO: remove this
  }
  render() {


    window.setTimeout(function() {
      t.render();
    },1000/this.fps);

  }
  start() {

    let t = this; // storing this variable since we cant refence in the settimoute
    window.setTimeout(t.render(),1000/this.fps);
    this.render();
  }
}
