class Block {
    constructor(x, y, width, height) {
        this.width = width;
        this.height = height;

        var options = {
            restitution: 0.7,
            friction: 1
        }
        this.body = Bodies.rectangle(x, y, this.width, this.height, options)
        World.add(world, this.body)
        

    }

    display() {

        var pos = this.body.position // namespacing
        var angle = this.body.angle
        angleMode(RADIANS)
        push();
        stroke("red")
        strokeWeight(3)
        translate(pos.x, pos.y)
        rotate(angle)
        rectMode(CENTER) 
        rect(0, 0, this.width, this.height)
        pop();

    }
}