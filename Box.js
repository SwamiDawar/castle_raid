class Box {
  constructor(x, y, width, height){
      var options = {
        isStatic: false
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visibility = 255;
      World.add(world, this.body);
  }
  display(){
    push()
    if(this.body.speed < 3){
      var pos = this.body.position;
      rectMode(CENTER);
      strokeWeight(3);
      fill("white");
      rect(pos.x, pos.y, this.width, this.height);
    }
    else{
      World.remove(world, this.body);
    }
  }
}