class Chain{
    constructor(body, point) {
        var options = {
            bodyA: body,
            pointB: point
        }
        this.chain = Constraint.create(options)
        World.add(world, this.chain)
    }

    display() {
        var posA = this.chain.bodyA.position;
        var posB = this.chain.pointB
        stroke("red")
        line(posA.x, posA.y, posB.x, posB.y)
    }
}