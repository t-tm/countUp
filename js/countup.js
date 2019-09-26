// JavaScript Document
$(window).on('load' , function(){
  var countupNum = 0;
  //【※注】変数にsetIntervalを入れて、その変数名に対してclearIntervalを設定しないと止まらない。
  var numTimer = setInterval (function(){
    $(".count").text( countupNum );
    countupNum++;
    if( countupNum > 99 ){
      clearInterval(numTimer);
    }
  },10);
});