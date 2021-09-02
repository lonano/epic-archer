class ComputerArcher{
    constructor(x,y,w,h){
       var computer_options = {
           isStatic:true
       }
        this.body = Matter.Bodies.rectangle(x,y,w,h,computer_options);
        this.w = w;
        this.h = h;
        this.image = loadImage("assets/computerArcher.png")
        World.add(world,this.body);
        Matter.Body.setAngle(this.body,PI/2);
    }
display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.w,this.h);
    pop();
}
}