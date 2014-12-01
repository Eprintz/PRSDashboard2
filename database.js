$(document).ready(function(){
/*----------------------------------------------------------------------*/
/*Notification Tests*/
    var Notification = window.Notification || window.mozNotification || window.webkitNotification;

	Notification.requestPermission(function (permission) {
		// console.log(permission);
	});
//Login
var notification = new Notification('Task', {
    body: 'EXAMPLE TASK IS AN EXAMPLE',
    icon: '/Pictures/Icons/favicon-192x192.png'
});
/*----------------------------------------------------------------------*/
/*Login Screen*/
		if(username="Login"){
			$("body").append
			('<div id="loginscreen"class="screen"></div><div id="loginbox"class="box"><div class="logintitle">Login</div></div>');
			$("#loginbox").append
			('<form class="form"id="loginform"><paper-input label="Username" floatingLabel id="usernameinput"></paper-input><paper-input label="Password" id="passwordinput" floatingLabel ></paper-input><paper-button raised class="submit"id="loginsubmit">Login</paper-button></form>');
			$("#loginbox").append
			('<div id="createaccount"><div class="logintitle"id="createbutton">Create Account</div></div>');
			var createformon = 0;
			$("#createbutton").click(function(){
				if(createformon==0){
				$("#loginbox").animate({height:"36.5vw",marginBottom:"-14.5vw"},"fast");
				$("#loginbox").append
				('<form class="form"id="createform"><paper-input label="Username" floatingLabel></paper-input><paper-input label="Password" floatingLabel></paper-input><paper-button raised class="submit"id="loginsubmit">Create</paper-button></form>');
					createformon+=1;	
				}
				else if(createformon==1){
					$("#loginbox").animate({height:"22vw",marginBottom:"0vw"},"fast");
					$("#createform").remove();
					createformon-=1;
				}
			});
		}
$("#loginsubmit").click(function(){
    $("#loginscreen").animate({opacity:0},250);
    $("#loginbox").animate({opacity:0},250);
    setTimeout(function(){
        $("#loginscreen").remove();
         $("#loginbox").remove();
    },250);
});
/*----------------------------------------------------------------------*/
/*Setting Screen*/
$("#settings").click(function(){
    $("body").append('<div id="settingsscreen"class="screen"><div id="settingsbox"class="box"><paper-icon-button icon="close" class="close" id="settingsclose"></paper-icon-button><paper-input label="Period 1" id="p1name" floatingLabel inputValue="{{period1name}}"></paper-input><paper-input label="Period 2" id="p2name" floatingLabel inputValue="{{period2name}}"></paper-input><paper-input label="Period 3" id="p3name" floatingLabel inputValue="{{period3name}}"></paper-input><paper-input label="Period 4" id="p4name" floatingLabel inputValue="{{period4name}}"></paper-input><paper-input label="Period 5" id="p5name" floatingLabel inputValue="{{period5name}}"></paper-input><paper-input label="Period 6" id="p6name" floatingLabel inputValue="{{period6name}}"></paper-input><paper-input label="Period 7" id="p7name" floatingLabel inputValue="{{period7name}}"></paper-input><paper-input label="Period 8" id="p8name" floatingLabel inputValue="{{period8name}}"></paper-input><paper-button id="settingssave">Save</paper-button></div></div>');
    $("#settingsscreen").animate({opacity:1},250);
    $("#settingsbox").animate({opacity:1},250);
    $("#settingsclose").click(function(){
        $("#settingsscreen").animate({opacity:0},250);
        $("#settingsbox").animate({opacity:0},250);
        setTimeout(function(){
            $("#settingsscreen").remove();
        },250);
    });
     $("#settingssave").click(function(){
        redotopbar();
        $("#settingsscreen").animate({opacity:0},250);
        $("#settingsbox").animate({opacity:0},250);
        setTimeout(function(){
            $("#settingsscreen").remove();
        },250);
     });
    document.querySelector('#p1name').addEventListener('change',function(event) {
        periods[0] = event.target.value;
    });
    document.querySelector('#p2name').addEventListener('change',function(event) {
        periods[1] = event.target.value;
    });
    document.querySelector('#p3name').addEventListener('change',function(event) {
        periods[2] = event.target.value;
    });
    document.querySelector('#p4name').addEventListener('change',function(event) {
        periods[3] = event.target.value;
    });
    document.querySelector('#p5name').addEventListener('change',function(event) {
        periods[4] = event.target.value;
    });
    document.querySelector('#p6name').addEventListener('change',function(event) {
        periods[5] = event.target.value;
    });
    document.querySelector('#p7name').addEventListener('change',function(event) {
        periods[6] = event.target.value;
    });
    document.querySelector('#p8name').addEventListener('change',function(event) {
        periods[7] = event.target.value;
    });
});


/*----------------------------------------------------------------------*/
/*Action Menus*/
$(".create").mouseenter(function(){
    $("#documentwhole").animate({opacity:1,bottom: "70px"},300);
    $("#taskwhole").delay(50).animate({opacity:1,bottom: "120px"},300);
    $("#reminderwhole").delay(100).animate({opacity:1,bottom: "170px"},300);
    $("#emailwhole").delay(150).animate({opacity:1,bottom: "220px"},300);
    $("#groupwhole").delay(200).animate({opacity:1,bottom: "270px"},300);
    $("#projectwhole").delay(250).animate({opacity:1,bottom: "320px"},300);
});
$(".create").mouseleave(function(){
    $("#documentwhole").delay(250).animate({bottom: "0",opacity:0});
    $("#taskwhole").delay(200).animate({bottom: "0",opacity:0});
    $("#reminderwhole").delay(150).animate({bottom: "0",opacity:0});
    $("#emailwhole").delay(100).animate({bottom: "0",opacity:0});;
    $("#groupwhole").delay(50).animate({bottom: "0",opacity:0});
    $("#projectwhole").animate({bottom: "0",opacity:0});
});
/*----------------------------------------------------------------------*/
/*Get Username and Password*/
document.querySelector('#usernameinput').addEventListener('change', function(event) {
    var username = event.target.value;
  });
document.querySelector('#passwordinput').addEventListener('change', function(event) {
    var username = event.target.value;
  });
/*----------------------------------------------------------------------*/
/*Variable Declaration*/
    var date = new Date();
        var improveddate = date.getDate();
    var usergrade = 9;
    var daytype = "odd";
    var dayevents = "none";
    var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    var periods = ["Math", "Spanish", "English", "History",  "SL/Clubs", "PE", "Design", "Biology"];
    var colors = ["Orange", "Red", "Green", "Purple", "Teal", "Grey", "Brown", "Darkblue"];
    var usercolor = "black";
    var classnotifications = [0,0,0,0,0,0,0,0]
/*----------------------------------------------------------------------*/
/*Applying Variables*/
    var currentday = date.getDay()+1;
    var currentdate = date.getDate();
    var daysafter = 6-date.getDay();
    var daysbefore = 6-daysafter;
    var datesleft = 7;
    var daydates = [0,0,0,0,0,0,0]
    while(datesleft>0){
        daydates[datesleft] = currentdate+datesleft-daysbefore-1;
        $("#date"+datesleft).prepend("<div class='datenumber'>"+(daydates[datesleft])+"</div>");
        datesleft-=1;
    }
    function daysInMonth(month,year) {
    return new Date(year, month, 0).getDate();
}
    var daysinmonth = daysInMonth(date.getYear(), date.getMonth());
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
            if(classnotifications[0]==0){
                $("#n1").css("display","none");   
            }
            else{
                $("#n1").css("display","inline-bock");
                $("#n1").html(classnotifications[0]);
            }
        $("#n2").css("background-color",colors[1]);
             if(classnotifications[1]==0){
                    $("#n2").css("display","none");   
            }
            else{
                $("#n2").css("display","inline-bock");
                $("#n2").html(classnotifications[1]);
            }
        $("#n3").css("background-color",colors[2]);
            if(classnotifications[2]==0){
                $("#n3").css("display","none");   
            }
            else{
                $("#n3").css("display","inline-bock");
                $("#n3").html(classnotifications[2]);
            }
        $("#n4").css("background-color",colors[3]);
            if(classnotifications[3]==0){
                $("#n4").css("display","none");   
            }
            else{
                $("#n4").css("display","inline-bock");
                $("#n4").html(classnotifications[3]);
            }
        $("#n5").css("background-color",colors[4]);
            if(classnotifications[4]==0){
                $("#n5").css("display","none");   
            }
            else{
                $("#n5").css("display","inline-bock");
                $("#n5").html(classnotifications[0]);
            }
        $("#n6").css("background-color",colors[5]);
            if(classnotifications[5]==0){
                $("#n6").css("display","none");   
            }
            else{
                $("#n6").css("display","inline-bock");
                $("#n6").html(classnotifications[0]);
            }
        $("#n7").css("background-color",colors[6]);
            if(classnotifications[6]==0){
                $("#n7").css("display","none");   
            }
            else{
                $("#n7").css("display","inline-bock");
                $("#n7").html(classnotifications[0]);
            }
        $("#n8").css("background-color",colors[7]);
            if(classnotifications[7]==0){
                $("#n8").css("display","none");   
            }
            else{
                $("#n8").css("display","inline-bock");
                $("#n8").html(classnotifications[0]);
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
/*Task Creation and Functions*/
$("#task").click(function(){
    $("#dayview").append("<div class='multipurpose'id='taskcreation'><paper-icon-button icon='close'class='close'id='taskclose'></paper-icon-button><div class='multiheader' id='taskmultiheader'>Create Task</div><select id='taskclassselect'><option value='0'>"+periods[0]+"</option><option value='1'>"+periods[1]+"</option><option value='2'>"+periods[2]+"</option><option value='3'>"+periods[3]+"</option><option value='4'>"+periods[4]+"</option><option value='5'>"+periods[5]+"</option><option value='6'>"+periods[6]+"</option><option value='7'>"+periods[7]+"</option></select><select id='taskdayselect'><option value='1'>Sunday "+daydates[1]+"</option><option value='2'>Monday "+daydates[2]+"</option><option value='3'>Tuesday "+daydates[3]+"</option><option value='4'>Wednesday "+daydates[4]+"</option><option value='5'>Thursday "+daydates[5]+"</option><option value='6'>Friday "+daydates[6]+"</option><option value='7'>Saturday "+daydates[7]+"</option></select><paper-input label='Task Name' id='taskcreatename' floatingLabel inputValue='{{taskcreatename}}'></paper-input><paper-input label='Task Description' id='taskcreatedescription' inputValue='{{taskcreatename}}' floatingLabel></paper-input><paper-button id='taskcreate'>Create</paper-button></div>"); 
        $(".paperclass1").css("color",colors[0]);
        $(".paperclass2").css("color",colors[1]);
        $(".paperclass3").css("color",colors[2]);
        $(".paperclass4").css("color",colors[3]);
        $(".paperclass5").css("color",colors[4]);
        $(".paperclass6").css("color",colors[5]);
        $(".paperclass7").css("color",colors[6]);
        $(".paperclass8").css("color",colors[7]);
    $("#taskcreation").animate({marginBottom:"0px"},300); 
    $("#taskclose").click(function(){
        $("#taskcreation").animate({marginBottom:"-45vh"},300);
        setTimeout(function(){
            $("#taskcreation").remove();
        },320)
    });
    $("#task").dblclick(function(){
        $("#taskcreation").animate({marginBottom:"-45vh"},300);
        setTimeout(function(){
            $("#taskcreation").remove();
        },320)
    });
    var taskcreatename = "Task Name";
    var taskcreatedescription = "Task Description";
    document.querySelector('#taskcreatename').addEventListener('change',         function(event) {
    taskcreatename = event.target.value;
  });
document.querySelector('#taskcreatedescription').addEventListener('change', function(event) {
    taskcreatedescription = event.target.value;
  });
    $("#taskcreate").click(function(){
        var createdtaskclass = $("#taskclassselect").val();
        var createdtaskdate = $("#taskdayselect").val();
        $("#cd"+createdtaskdate).append("<core-tooltip position='right'><p>"+taskcreatename+"</p><div tip>"+taskcreatedescription+"</div></core-tooltip>");                     
        $("#cd"+createdtaskdate+" p").css("background-color",colors[createdtaskclass]);
        $("#taskcreation").animate({marginBottom:"-45vh"},300);
        setTimeout(function(){
            $("#taskcreation").remove();
        },320)
         classnotifications[2]=10;
        redotopbar();
    });
});

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
    if(Number(date.getHours())<0){
        $("body").addClass("night");
    }
    else{
        $("body").removeClass("night");
    }
});
