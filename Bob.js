class Bob{
    constructor(x,y){
        var options={
            restitution:1,
            friction:0.3,
            density:0.8
        }
        this.body = Bodies.circle(x,y,20,options);
        this.radius = 50;
        World.add(myWorld,this.body);
    }
    display(){
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,20,20)
    }
}