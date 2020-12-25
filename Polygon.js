class Polygon{
    constructor(){

        var options = {

        'restitution': 0.8,
        'friction': 1.0,
        'density': 1.0

        }

        polygon = Bodies.circle(50,200,20);
        this.image = loadImage("polygon.png");
        World.add(world, polygon);

    }
    display(){

        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        this.image(this.image, 0, 0, this.width, this.height);
        pop();
        
    }
}