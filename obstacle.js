function Obstacle(){
    this.index=Math.round(random(0,2));
    this.xVel=0;
    this.yVel=5;
    this.x=this.index*laneWidth+laneWidth/2;
    this.y=-100;
    this.width=100;
    this.height=150;
    this.show=function(){
        context.fillStyle='green';
        context.fillRect(this.x-this.width/2,this.y-this.height/2,this.width,this.height);
    }
    this.update=function(){
        this.y+=this.yVel;
    }
    this.edge=function(){
        if(this.y>width){
            return true;
        }
        return false;
    }
}