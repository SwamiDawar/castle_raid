class Slingshot {
    constructor(bodyA, pointB){
        var options ={
            bodyA: bodyA,
            pointB: pointB,
            length: 10,
            stiffness: 0.04
        }
        this.pointB = pointB;
        this.Sling = Constraint.create(options);
        World.add(world, this.Sling);
    }
    fly(){
        this.Sling.bodyA = null;
    }
    reset(body){
        this.Sling.bodyA = body;
    }
    display(){
        if(this.Sling.bodyA){
            var posA = this.Sling.bodyA.position;
            var posB = this.pointB;
            strokeWeight(3);
            line(posA.x, posA.y, posB.x, posB.y);
        }
   
    }
}
