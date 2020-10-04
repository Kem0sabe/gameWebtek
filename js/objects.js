class Object {
  //"abstract" class for making
  //general objects that are used in canvas
  constructor(x,y,width,height,radius,dx,dy,color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
  }
  move(canvas) { //function that moves object acording to velocity
    if (canvas != undefined) { //checks if canvas that we are in is given as input
      this.checkIfHitWall(canvas); //checks if obeject out of canvas and changes velocity if
      this.x += this.dx;
      this.y += this.dy;

    } else { //throws error
      console.log("Canvas not spesified, nothing moved");
    }
  }
  checkIfHitWall(canvas) { //standard for a general object
    const height = canvas.height;
    const width = canvas.width;
    if (width - this.x < 0) this.dx *= -1; //change direction
    if (height - this.y < 0) this.dy *= -1;
    if (this.x < 0) this.dx *= -1;
    if (this.y < 0) this.dy *= -1;
  }

}

class Square extends Object {
  constructor(x,y,width,height,dx,dy,color) {
    super(x,y,width,height,undefined,dx,dy,color);
  }
  draw(d2d) {
    d2d.drawRect(this.x,this.y,this.width,this.height,this.color);
  }
}



class Ball extends Object {

  constructor(x,y,radius,dx,dy,color) {
    super(x,y,undefined,undefined,radius,dx,dy,color);
  }
  draw(d2d) {
    d2d.drawCircle(this.x,this.y,this.radius,this.color);
  }
  checkIfHitWall(canvas) { //standard for a general object
    const height = canvas.height;
    const width = canvas.width;
    if (width - this.x < this.radius) this.dx *= -1; //change direction
    if (height - this.y < this.radius) this.dy *= -1;
    if (this.x < this.radius) this.dx *= -1;
    if (this.y < this.radius) this.dy *= -1;
  }

}
