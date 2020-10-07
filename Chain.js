class Chain {

    constructor(A,B){

var options={
    bodyA: A.body,
bodyB: B.body,
length: 0.3,
stiffness:0.5
}

this.chain=Constraint.create(options);
World.add(world,this.chain)

    }
display(){

    var pointA= this.chain.bodyA.position;
    var pointB= this.chain.bodyB.position;
    stroke("brown")
    strokeWeight(5);
    line(pointA.x,pointA.y,pointB.x,pointB.y);

}







}