function Player(){
    this.index=1;
    this.xVel=0;
    this.x=this.index*laneWidth+laneWidth/2;
    this.y=550;
    this.width=100;
    this.height=150;
    this.state=0;
    this.show=function(){
        context.fillStyle='red';
        context.fillRect(this.x-this.width/2,this.y-this.height/2,this.width,this.height);
    }
    this.update=function(){
        if(this.state===0){
            this.xVel=0;
        }
        this.x+=this.xVel;
        this.x=this.index*laneWidth+laneWidth/2;
        this.y
    }
    this.steerLeft=function(){
        console.log('steerLeft');
        if(this.index===0){
            return;
        }
        else{
            this.index--;
        }
    }
    this.steerRight=function(){
        console.log('steerRight');
        if(this.index===2){
            return;
        }
        else{
            this.index++;
        }
    }
    this.collides=function(obstacle){
        if( Math.abs(this.y-obstacle.y)<=(this.height/2+obstacle.height/2) && Math.abs(this.x-obstacle.x)<=(this.width/2+obstacle.width/2)){
            return true;
        }
        return false;
    }
}