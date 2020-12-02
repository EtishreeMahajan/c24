class Pig{
    constructor(x,y){
      var option={
          restitution:0.8,
          density: 1,
          friction: 0.5
      }
      this.body = Bodies.rectangle(x,y,40,40,option);
      this.width = 50;
      this.height = 50;
      World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("green");
        rect(0,0,50,50);
        pop();
    }
}