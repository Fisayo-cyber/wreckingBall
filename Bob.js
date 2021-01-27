class Bob {
    constructor(pointX, pointY, radius) {
        this.radius = radius
        this.body = Matter.Bodies.circle(pointX, pointY, radius)
        World.add(world, this.body)
    }

    display() {
        fill("pink")
        circle(this.body.position.x, this.body.position.y, this.radius*2)
        
    }
}