var generate = document.getElementById('generate');
var clear = document.getElementById('clear');
var canvas = document.getElementById('main');
var context = canvas.getContext('2d');

window.onload=function(){
  generate.onclick = generateHandler;
  clear.onclick=clearHandler;
}

 var generateHandler = function(){
   clearHandler();
  var number = parseInt(document.getElementById('number').value);
  var space = canvas.width*0.03/(number+1);
  var width = canvas.width*0.97/number;
  if(number>0 && number<21){
  for( var i=0;i<number;i++){
    for(var j=0;j<number;j++){
      //画方格
      context.fillStyle="#F5B1B1";
      context.fillRect(space+i*width+i*space,space+j*width+j*space,width,width);
     //画数字
     context.fillStyle='#92A8D1';
     context.textAlign='center';
      context.font=(width/3).toString()+'px'+' Arial';
      context.fillText(number*j+i+1,space+i*width+i*space+0.5*width,space+j*width+j*space+0.6*width);
}
    }
  }
  else{
    alert('plaese enter an integer between 1 to 20!')
  }
}


  var  clearHandler=function(){
      context.fillStyle='#92A8D1';
      context.fillRect(0,0,600,600);
    }
