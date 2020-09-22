"use  strict";


class Game {
  constructor(canvas) {
    this.canvas = canvas; //setting canvas
    this.ctx = this.canvas.getContext("2d"); //setting context

    this.fps = 10; // setting frames per second
    this.running = false; //handy variable for statrting and stopping the render function
    this.start(); // starting TODO: remove this
    this.mouse = { //object for finding x and y values of the client mouse relative to canvas
      x: function() {
        return window.event.clientX - this.canvas.offsetTop;
      }
      y: function() {
        return window.event.clientY - this.canvas.offsetLeft;
      }
    }
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
