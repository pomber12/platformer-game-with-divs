var character =document.getElementById("character");
var block=document.getElementById("block");
let score=0;



function jump(){

          if(character.classList!="animate")
          {
           character.classList.add("animate");
          }
          setTimeout(function(){character.classList.remove("animate");},600)

}


var checkDead=setInterval(function(){
  var characterTop=parseInt
  (window.getComputedStyle(character).getPropertyValue("top"));
  
  if(checkDead!=true){
  score +=1;
  document.getElementById("ScoreP").innerHTML=("Your score is: "+score);
  }
  else if(checkDead!=true){
      setInterval(function(){style="#block{animation:block 2s infinite linear;}";},60);}
  
  else{ document.getElementById("ScoreP").display="none";}


  var blockLeft=parseInt
  (window.getComputedStyle(block).getPropertyValue("left"));
  if(blockLeft<20&&blockLeft>0&&characterTop>=130)
  {     block.style.animation="none";   
        block.style.display="none";
        alert("U lose");
     
  }

},20);