class Water {
    constructor(x,y) {
        var options = {
          
            'restitution':0.1,
            'friction':0.001
        }
        this.rain = Bodies.circle(x,y,7,options)
        this.radius = 7;
        World.add(world, this.rain);
        
        World.add(world,this.rain);
    }
    updateY()      {
        if(this.rain.position.y>height) {
            Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
        }
    }
    showDrop()
	{
        var pos = this.rain.position;

        ellipseMode(CENTER);
        fill('blue')
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
  
}