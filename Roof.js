class Roof{
    constructor(){
        var options={
            isStatic:true
        }
        this.body = Bodies.rectangle(300,100,300,20,options)
        World.add(myWorld,this.body)
    }
    display(){
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,300,20)
    }
}