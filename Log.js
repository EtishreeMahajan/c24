class Log{
    constructor(x,y,height,angle){
      var option={
          restitution:0.5,
          density: 1.5,
          friction: 1
      }
      this.body = Bodies.rectangle(x,y,20,height,option);
      this.body.angle = angle;
      this.width = 20;
      this.height = height;
      World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        pos.x = mouseX;
        pos.y = mouseY;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        rect(0,0,50,50);
        pop();
    }
}