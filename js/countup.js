// JavaScript Document
$(document).ready(function(){
countNum = [];

for( var i = 0; i < 100; i++ ){
  countNum.push(i);
}

console.log(countNum);
});

$(window).on('load' , function(){
  n = 0;
setInterval (function(){
  $(".count").text( countNum[n] );
  n++;
  if( n > 100 ){
    clearInterval();
  }
},10);
});