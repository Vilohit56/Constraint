class Chain{
    constructor(bodyA, bodyB) {
    var options = {
        bodyA: bodyA,
        bodyB: bodyB,
        stiffness: 0.04,
        length: 4
    }
    this.Chain = Constraint.create(options);
    World.add(world,this.chain)
}
}