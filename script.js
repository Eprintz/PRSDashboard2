$(document).ready(function () {
    $(".clac").addClass("none");
    $("#calculator").addClass("none");

var calcactive = 0;
$("#al2").click(function(){
$("body").append("<div class='app'id='calculator'><div id='result'>93</div><div class='calcbutton'id='calcpowers'>x <sup>y</sup></div><div class='calcbutton'id='calcsqrt'>&radic;<span>&nbsp;&nbsp;</span></sup></div><div class='calcbutton'id='modulo'>%</div><div class='calcbutton'id='clear'>C</div><div class='calcnumber'id='num1'>1</div><div class='calcnumber'id='num2'>2</div><div class='calcnumber'id='num3'>3</div><div class='calcbutton'id='divide'>&divide;</div><div class='calcnumber'id='num4'>4</div><div class='calcnumber'id='num5'>5</div><div class='calcnumber'id='num6'>6</div><div class='calcbutton'id='multiply'>*</div><div class='calcnumber'id='num7'>7</div><div class='calcnumber'id='num8'>8</div><div class='calcnumber'id='num9'>9</div><div class='calcbutton'id='subtract'>-</div><div class='calcbutton'id='negative'>-x</div><div class='calcnumber'id='num0'>0</div><div class='calcbutton'id='point'>.</div><div class='calcbutton'id='equals'>=</div></div>");
if(calcactive==0){
$( "#calculator" ).animate({opacity: 0.95}, 500),"easeInOutCubic";
$("#calculator").css("display","inline-block");
$("#al2 img").css("transform","rotate(315deg)");
calcactive=1;
}
else if(calcactive==1){
$( "#calculator" ).animate({opacity: 0}, 500),"easeInOutCubic";
setTimeout(function(){
$("#calculator").css("display","none");
}, 500);
$("#al2 img").css("transform","rotate(0deg)");
calcactive=0;
}
});
//Creates tasks upon task add button click

//Calculator Code
var calcnumber = 0;
var activenumber = 0;
function getcalcnumber(){
$("#num1").click(function(){
calcnumber=1;
});
$("#num2").click(function(){
calcnumber=2;
});
$("#num3").click(function(){
calcnumber=3;
});
$("#num4").click(function(){
calcnumber=4;
});
$("#num5").click(function(){
calcnumber=5;
});
$("#num6").click(function(){
calcnumber=6;
});
$("#num7").click(function(){
calcnumber=7;
});
$("#num8").click(function(){
calcnumber=8;
});
$("#num9").click(function(){
calcnumber=9;
});
$("#num0").click(function(){
calcnumber=0;
});
$("#calcresult").html(calcnumber);
}
getcalcnumber();
var calcoperation = "none";
function calculate(){
$("#calcresult").html(calcnumber);
$("#calcoperation").html("");
}
calculate();
$("#clear").click(function(){
getcalcnumber();
});
$("#divide").click(function(){
getcalcnumber();
});
$("#X").click(function(){
    $(".clac").addClass("none");
    $("#calculator").addClass("none");
});
$("#calcIcon").click(function(){
    $(".clac").removeClass("none");
    $("#calculator").removeClass("none");
    $("#appoverlay").animate({opacity:'0'}, "300");
$("#appoverlay").animate({opacity:'0'}, "300");
$(".appbutton").css("transform","rotate(0deg)");
setTimeout(function(){
$("#appoverlay").css("display","none");
}, 300);
appoverlayactive -=1;
});
});
