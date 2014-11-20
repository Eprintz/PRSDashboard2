$(document).ready(function(){
//Login
var username = "Login";
		$("#login").html(username);
		if(username="Login"){
			$("body").append
			('<div id="loginscreen"></div><div id="loginbox"><div class="logintitle">Login</div></div>');
			$("#loginbox").append
			('<form id="loginform"><textarea class="logintext"id="lt1"placeholder="Username"></textarea><textarea class="logintext"id="lt2"placeholder="Password"></textarea></form><div id="loginsubmit"class="submit">Login</div>');
			$("#loginbox").append
			('<div id="createaccount"><div class="logintitle"id="createbutton">Create Account</div></div>');
			var createformon = 0;
			$("#createbutton").click(function(){
				if(createformon==0){
				$("#loginbox").animate({height:"540px",marginBottom:"-220px"},"fast");
				$("#loginbox").append
				('<form id="createform"><textarea class="logintext"id="lt3"placeholder="Username"></textarea><textarea class="logintext"id="lt4"placeholder="Password"></textarea><div id="createsubmit"class="submit">Create</div></form>');
					createformon+=1;	
				}
				else if(createformon==1){
					$("#loginbox").animate({height:"320px",marginBottom:"0px"},"fast");
					$("#createform").remove();
					createformon-=1;
				}
			});
		}
$(document).on('click','#loginsubmit',function(){
        var username = $("#lt3").val();
		var password = $("#lt4").val();
		if(username !== "" && password !== ""){
			$("#loginscreen").remove();
			$("#loginbox").remove();
		}
		else{
			$("#loginsubmit").css("background-color","red");
		}
	});
 //Variable Declaration
    var date = new Date();
        var improveddate=date.getDay()+2;
    var usergrade = 9;
    var usercolor = "black";
    var daytype = "odd";
    var dayevents = "none";
    var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    var periods = ["Math", "Spanish", "English", "History",  "SL/Clubs", "PE", "Design", "Biology"];
    var colors = ["Orange", "Red", "Green", "Purple", "Teal", "Grey", "Brown", "Darkblue"];
//Applying Variables
    $("#date").append(monthNames[date.getMonth()]+" "+improveddate+" "+date.getFullYear());
        $("#calendartitle").html(monthNames[date.getMonth()]);
    var createdtasks = 0;
    var colorid = 1;
    $("#newtask").click(function(){
        $("#createdtasks").append
        ("<div class='task'><div class='color'id='c"+colorid+"'></div><textarea class='taskname'placeholder='Task Title'></textarea></div>");
        createdtasks+=1;
        colorid+=1;
        if(createdtasks==7){
            $("#createdtasks").css("overflow-y","scroll");
        }
    });
    $(document).on("mouseenter",".color",function(){
        $("#"+this.id).html("<div class='selector'id='s"+this.id+"'></div>");
        
    });
    $(document).on("mouseleave",".color",function(){
        $("#"+this.id).html("");
        
    });
     function redotopbar(){   
         
        $("#t1").html(periods[0]);
        $("#t2").html(periods[1]);
        $("#t3").html(periods[2]);
        $("#t4").html(periods[3]);
        $("#t5").html(periods[4]);
        $("#t6").html(periods[5]);
        $("#t7").html(periods[6]);
        $("#t8").html(periods[7]);
         
        $("#ch1").css("background-color",colors[0]);
        $("#ch2").css("background-color",colors[1]);
        $("#ch3").css("background-color",colors[2]);
        $("#ch4").css("background-color",colors[3]);
        $("#ch5").css("background-color",colors[4]);
        $("#ch6").css("background-color",colors[5]);
        $("#ch7").css("background-color",colors[6]);
        $("#ch8").css("background-color",colors[7]);
        
        $("#n1").css("background-color",colors[0]);
            if($("#n1").html()==""){
                $("#n1").css("background-color","transparent");
            }
        $("#n2").css("background-color",colors[1]);
            if($("#n2").html()==""){
                $("#n2").css("background-color","transparent");
            }
        $("#n3").css("background-color",colors[2]);
            if($("#n3").html()==""){
                $("#n3").css("background-color","transparent");
            }
        $("#n4").css("background-color",colors[3]);
            if($("#n4").html()==""){
                $("#n4").css("background-color","transparent");
            }
        $("#n5").css("background-color",colors[4]);
            if($("#n5").html()==""){
                $("#n5").css("background-color","transparent");
            }
        $("#n6").css("background-color",colors[5]);
            if($("#n6").html()==""){
                $("#n6").css("background-color","transparent");
            }
        $("#n7").css("background-color",colors[6]);
            if($("#n7").html()==""){
                $("#n7").css("background-color","transparent");
            }
        $("#n8").css("background-color",colors[7]);
            if($("#n8").html()==""){
                $("#n8").css("background-color","transparent");
            }

        $("#period1").css("background-color",colors[0]);
        $("#period2").css("background-color",colors[1]);
        $("#period3").css("background-color",colors[2]);
        $("#period4").css("background-color",colors[3]);
        $("#period5").css("background-color",colors[4]);
        $("#period6").css("background-color",colors[5]);
        $("#period7").css("background-color",colors[6]);
        $("#period8").css("background-color",colors[7]);

         //14.286% per hour 0.238% per minute
        $("#period1").css("width","20.238%");
        $("#period1").css("margin-right","1.19%");
        $("#period2").css("width","20.238%");
        $("#period2").css("margin-right","1.19%");
        $("#period3").css("width","21.42%");
        $("#period3").css("margin-right","14.28%");
        $("#period4").css("width","21.42%");
        $("#period4").css("margin-right","14.28%");
        $("#period5").css("width","20.238%");
        $("#period5").css("margin-right","1.19%");
        $("#period6").css("width","20.238%");
        $("#period6").css("margin-right","1.19%");
        $("#period7").css("width","21.42%");
        $("#period8").css("width","21.42%");
     }
    if(daytype=="odd"){
        redotopbar();
        $("#period2").css("display","none");
        $("#period4").css("display","none");
        $("#period6").css("display","none");
        $("#period8").css("display","none");
        
        $("#class2").css("opacity","0.3");
        $("#class4").css("opacity","0.3");
        $("#class6").css("opacity","0.3");
        $("#class8").css("opacity","0.3");
    }
    else if(daytype=="even"){
        redotopbar();
        $("#period1").css("display","none");
        $("#period3").css("display","none");
        $("#period5").css("display","none");
        $("#period7").css("display","none");
        
        $("#class1").css("opacity","0.3");
        $("#class3").css("opacity","0.3");
        $("#class5").css("opacity","0.3");
        $("#class7").css("opacity","0.3");
    }
/*----------------------------------------------------------------*/
/*Class Settings*/
    $("#settings").click(function(){
        $("#cn1").html(periods[0]);
        $("#cc1").html(colors[0]);
        $("#cn2").html(periods[1]);
        $("#cc2").html(colors[1]);
        $("#cn3").html(periods[2]);
        $("#cc3").html(colors[2]);
        $("#cn4").html(periods[3]);
        $("#cc4").html(colors[3]);
        $("#cn5").html(periods[4]);
        $("#cc5").html(colors[4]);
        $("#cn6").html(periods[5]);
        $("#cc6").html(colors[5]);
        $("#cn7").html(periods[6]);
        $("#cc7").html(colors[6]);
        $("#cn8").html(periods[7]);
        $("#cc8").html(colors[7]);
        $("#settingssubmit").click(function(){
            periods[0] = $("#cn1").val();
            colors[0] = $("#cc1").val();
            periods[1] = $("#cn2").val();
            colors[1] = $("#cc2").val();
            periods[2] = $("#cn3").val();
            colors[2] = $("#cc3").val();
            periods[3] = $("#cn4").val();
            colors[3] = $("#cc4").val();
            periods[4] = $("#cn5").val();
            colors[4] = $("#cc5").val();
            periods[5] = $("#cn6").val();
            colors[5] = $("#cc6").val();
            periods[6] = $("#cn7").val();
            colors[6] = $("#cc7").val();
            periods[7] = $("#cn8").val();
            colors[7] = $("#cc8").val();
            redotopbar();
        });
    });
});
