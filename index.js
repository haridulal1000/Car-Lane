let canvas=document.getElementById('viewPort');
let context=canvas.getContext('2d');
let frameCount=0;
let point=0;
canvas.setAttribute('width',width);
canvas.setAttribute('height',height);
let player;
let obstacles=[];
let animation;
function setup(){
player=new Player();
console.log(player);
loop();
}
function draw(){
    context.fillStyle='white';
    context.fillRect(0,0,width,height);
    player.show();
    player.update();
    for(let i=obstacles.length-1;i>=0;i--){
      obstacles[i].show();
      obstacles[i].update();
      if(player.collides(obstacles[i])){
         //console.log('collision');
      }
      if(obstacles[i].pointUp(player)){
         point++;
         console.log('Point Up : '+point);
      }
      if(obstacles[i].edge()){
         obstacles.splice(i,1);
      }
    }
   if(frameCount%obstacleFrequency===0){
      obstacles.push(new Obstacle());
   }
   frameCount++;
   if(frameCount%200===0){
      obstacleSpeed+=obstacleSpeed*0.2;
   }
   
loop();
}
function loop(){
   animation= window.requestAnimationFrame(draw);
}
setup();
window.addEventListener('keydown',function(e){
   if(e.key==='a'){
      player.steerLeft();
   }
   if(e.key==='d'){
      player.steerRight();
   }
})