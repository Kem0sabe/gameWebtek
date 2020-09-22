"use  strict"
//This is a library for drawing stuff in the canvas
//Initialise by passing in the canvas
class drawLib {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
  }
  drawRect(x,y,width,height,color = "black", transparency = 1) {
    //takes in (x,y) which is the center of the rectangle.
    //height and width are the dimmentions of the rectangle
    //color argument takes in a color
    //added optional argument tranparancy
    this.ctx.fillColor = color;
    this.ctx.fillRect(x,ygit,width,height);
  }
  drawImg(img,x,y,width,height) {
    //draws image in canvas with trivial parameters
    // commented out future
    /*this.ctx.translate(x+width/2,y+height);
    this.ctx.rotate(Math.PI*1.5);
    this.ctx.translate(x-width/2,y-height);
    this.ctx.drawImage(img,x,y,width,height);
    const img = new Image();
    img.src = "img/pipe.png";
    img.onload = function() {
      console.log(img.width,img.height);

      d2d.drawImg(img,0,0,img.width/2,img.height/2);
    }*/
    this.drawRect(x+width/2,y+height,5,5)
  }
  clear() {
    this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
  }
}

//merge issue fra gitlab
//tommel opp godkjenne?
