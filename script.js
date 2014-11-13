$(document).ready(function () {
//Overall Webpage Buttons On Click
var appoverlayactive = 0;
$(".appbutton").click(function(){
if(appoverlayactive == 0){
$("#appoverlay").css("display","block");
$("#appoverlay").animate({opacity:'1'}, "300");
$("#appoverlay").animate({opacity:'1'}, "300");
$(".appbutton").css("transform","rotate(90deg)");
appoverlayactive+=1;
}
else{
$("#appoverlay").animate({opacity:'0'}, "300");
$("#appoverlay").animate({opacity:'0'}, "300");
$(".appbutton").css("transform","rotate(0deg)");
setTimeout(function(){
$("#appoverlay").css("display","none");
}, 300);
appoverlayactive -=1;
}
});
var settingsbaractive = 0;
$("#settings").click(function(){
if(settingsbaractive == 0){
$("#settingsbar").css("display","block");
$("#body").animate({marginRight:'240px'}, "300");
$("#settingsbar").animate({opacity:'1'}, "300");
$("#settings").animate({marginRight:'240px'}, "100");
$("#settings").css("transform","rotate(270deg)");
settingsbaractive+=1;
}
else{
$("#body").animate({marginRight:'0px'}, "300");
$("#settingsbar").animate({opacity:'0'}, "300");
$("#settings").animate({marginRight:'0px'}, "100");
$("#settings").css("transform","rotate(0deg)");
setTimeout(function(){
$("#settingsbar").css("display","none");
}, 300);
settingsbaractive -=1;
}
});
//App creation
var tasksactive = 0;
$("#al1").click(function(){
$("body").append
("<div class='app'id='tasks'><div id='taskstitle'>Tasks</div><div id='createdtasks'></div><div id='newtask'>Create New Task<img src='Pictures/plus32.png'></div></div>");
if(tasksactive==0){
$( "#tasks" ).animate({opacity: 0.95}, 500);
$("#tasks").css("display","inline-block");
$("#al1 img").css("transform","rotate(315deg)");
tasksactive=1;
}
else if(tasksactive==1){
$( "#tasks" ).animate({opacity: 0}, 500);
setTimeout(function(){
$("#tasks").css("display","none");
}, 500);
$("#al1 img").css("transform","rotate(0deg)");
tasksactive=0;
}
});
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
var createdtasks = 0;
$("#newtask").click(function(){
$("#createdtasks").append
("<div class='task'><div class='color'id='c1'></div><textarea class='taskname'placeholder='Task Title'></textarea></div>");
createdtasks+=1;
if(createdtasks==7){
$("#createdtasks").css("overflow-y","scroll");
}
});
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
});
$("#app").click(function() {
$("#calculator").show();
});