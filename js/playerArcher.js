class PlayerArcher{
    constructor(x,y,w,h){
       var player_options = {
           isStatic:true
       }
        this.body = Matter.Bodies.rectangle(x,y,w,h,player_options);
        this.w = w;
        this.h = h;
        this.image = loadImage("assets/playerArcher.png")
        World.add(world,this.body);
        Matter.Body.setAngle(this.body,-PI/2);
    }
display(){
    var pos = this.body.position;
    var angle = this.body.angle;


    if(keyIsDown(DOWN_ARROW)&&angle<-1.2){
angle+=0.1;
Matter.Body.setAngle(this.body,angle);
    }
    if(keyIsDown(UP_ARROW)&&angle>-1.9){
        angle-=0.1;
        Matter.Body.setAngle(this.body,angle);
    }
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.w,this.h);
    pop();
}
}