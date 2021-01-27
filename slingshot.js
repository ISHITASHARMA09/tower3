class SlingShot{
    constructor(bodyA, anchor){
        var options = {
            bodyA: bodyA,
            pointB: anchor,
            stiffness: 0.04,
            length: 10
        }
        this.anchor=anchor;
        this.sling = Constraint.create(options)
        World.add(world, this.sling);


        
    }


    fly(){
        this.sling.bodyA = null;
    }

     
    



    display(){
        if (this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.anchor;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
    
}