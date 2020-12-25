class Ground{
    constructor(){
        var options = {

            isStatic:true

        }

        this.body = Bodies.rectangle(300,205,600,20);
        this.width = width;
        this.height = height;
        World.add(world, this.body);

    }
    
    dispay(){

        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        fill("brown");
        rect(300,20,600,20);

    }
}