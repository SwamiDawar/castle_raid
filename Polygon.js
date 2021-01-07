class Polygon {
  constructor(x, y, width, height){
      var options = {
        isStatic: false
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("polygon.png");
      World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    rectMode(CENTER);
    strokeWeight(3);
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.width, this.height);
    rect(pos.x, pos.y, this.width, this.height);
  }
}