let canvas=document.getElementById('viewPort');
let context=canvas.getContext('2d');
let scoreboard=document.getElementById('scoreboard');
let gameover=document.getElementById('gameOver');
let finalScore=document.getElementById('score');
let restartBtn=document.getElementById('restart');
let frameCount;
let point;
canvas.setAttribute('width',width);
canvas.setAttribute('height',height);
let player;
let obstacles;
let animation;
let gameState=1;

function setup(){
   point=0;
   frameCount=0;
   obstacles=[];
   scoreboard.style.display='block';
   scoreboard.innerHTML=`Score: ${point}`;
   canvas.style.display='block';
player=new Player();
// console.log(player);
obstacles.push(new Obstacle());
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
         console.log('collision');
         window.cancelAnimationFrame(animation);
         gameState=2;
         gameOver();
      }
      if(obstacles[i].pointUp(player)){
         point++;
         scoreboard.innerHTML=`Score: ${point}`;
         //console.log('Point Up : '+point);
      }
      if(obstacles[i].edge()){
         obstacles.splice(i,1);
      }
    }
   if(obstacles[obstacles.length-1].y>500){
      obstacles.push(new Obstacle());
   }
   frameCount++;
   if(frameCount%200===0){
      for(let i=0;i<obstacles.length;i++){
         obstacles[i].yVel+=1;
      }
      obstacleSpeed+=1;
   }
 if(gameState===1) {
loop();
 }
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
});
function start(){
   canvas.style.display='hidden';
}


function gameOver(){
   gameover.style.display='block';
   finalScore.innerHTML=`Your Score is: ${point}`;
   scoreboard.style.display='none';
   canvas.style.display='none';
}
restartBtn.addEventListener('click',function(){
   console.log('restart');
   gameState=1;
   gameover.style.display='none';
   setup();
})