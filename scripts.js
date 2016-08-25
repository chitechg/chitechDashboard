//Set to wait until entire page is loaded before starting, to ensure eveyrthing syncs up. 
//Refreshes every 1000ms AKA every second.

//Should be able to make this more efficient by having it refresh DayType and Date only after midnight

$(document).ready(function()
{
	
	refreshAt(13,18,0);
	
	window.setInterval(function(){
	
	   var globalDate = updateDate();
	   $('.date').html(globalDate);
	   
	   var globalDayType = updateDayType();
	   $('.dayType').html(globalDayType);
	   
	   var globalTime = updateClock();
	   $("#clock").html(globalTime[4]);
	  
	   var globalPeriod = updatePeriod(globalDate, globalDayType, globalTime);
	   $("#period").html(globalPeriod);

		daysOfPeaceNumberScript('1wUqPDTzXV8yn2Ti2WIYNL0hXl90PAqaQ0dyqhMix8Ew');

	}, 1000);
   
});

function updateDate () {
	//eventually calls to updateDayType
	//Date and Day Type script
	var monthNames = [ "January", "February", "March", "April", "May", "June",
	    "July", "August", "September", "October", "November", "December" ];
	var dayNames= ["Sun","Mon","Tues","Wed","Thurs","Fri","Satur"];
	
	var newDate = new Date();
	newDate.setDate(newDate.getDate());  
	
	var todayDay = dayNames[newDate.getDay()];
	var todayDate = newDate.getDate();
	var todayMonth = monthNames[newDate.getMonth()];
	var todayYear = newDate.getFullYear();
	
	
	var currentDateString = todayDay + ", " + todayMonth + ' ' + todayDate + ' ';
	
	return currentDateString;
	
}

function updateDayType (ScheduleCheck){
	var newDate = new Date();
	newDate.setDate(newDate.getDate()); 
	var ScheduleCheck = (newDate.getMonth() + 1) + '/' + newDate.getDate();

	var message;
	//105 days of school left after Winter break
	//No School Days for 2015-2016 School Year
	if ( ScheduleCheck == '1/1'   // New Year's Day
			|| ScheduleCheck == '8/24' 
			|| ScheduleCheck == '8/25' 
			|| ScheduleCheck == '8/26' 
			|| ScheduleCheck == '9/5'  
			|| ScheduleCheck == '10/7'  
			|| ScheduleCheck == '10/10' 
			|| ScheduleCheck == '11/4' 
			|| ScheduleCheck == '11/10' 
			|| ScheduleCheck == '11/11' 
			|| ScheduleCheck == '11/23' 
			|| ScheduleCheck == '11/24'
			|| ScheduleCheck == '11/25' 
			|| ScheduleCheck == '12/23' 
			|| ScheduleCheck == '12/24' 
			|| ScheduleCheck == '12/25' 
			|| ScheduleCheck == '12/26' 
			|| ScheduleCheck == '12/27' 
			|| ScheduleCheck == '12/28' 
			|| ScheduleCheck == '12/29' 
			|| ScheduleCheck == '12/30' 
			|| ScheduleCheck == '12/31' 
			|| ScheduleCheck == '1/2' 
			|| ScheduleCheck == '1/3' 
			|| ScheduleCheck == '1/4'
			|| ScheduleCheck == '1/5' 
			|| ScheduleCheck == '1/6' 
			|| ScheduleCheck == '1/16' 
			|| ScheduleCheck == '1/20' 
			|| ScheduleCheck == '2/1' 
			|| ScheduleCheck == '2/17' 
			|| ScheduleCheck == '2/20' 
			|| ScheduleCheck == '3/17' 
			|| ScheduleCheck == '4/10' 
			|| ScheduleCheck == '4/11' 
			|| ScheduleCheck == '4/12'
			|| ScheduleCheck == '4/13' 
			|| ScheduleCheck == '4/14' 
			|| ScheduleCheck == '4/17' 
			|| ScheduleCheck == '5/19' 
			|| ScheduleCheck == '5/29' 
			|| ScheduleCheck == '6/2' 
			|| ScheduleCheck == '6/16' 
			|| ScheduleCheck == '6/17' 
			|| ScheduleCheck == '6/18' 
			|| ScheduleCheck == '6/19' 
			|| ScheduleCheck == '6/20' 
			|| ScheduleCheck == '6/21' 
			|| ScheduleCheck == '6/22' 
			|| ScheduleCheck == '6/23'
			|| ScheduleCheck == '6/24' 
			|| ScheduleCheck == '6/25' 
			|| ScheduleCheck == '6/26' 
			|| ScheduleCheck == '6/27'
			|| ScheduleCheck == '6/28' 
			|| ScheduleCheck == '6/29' 
			|| ScheduleCheck == '6/30'
			|| ScheduleCheck == '6/31' 
			
			){
	  message = "No School";
	}
	//Summer Break Check
	else if ( ScheduleCheck[0] == '7' 
	    || ScheduleCheck[0] == '8'
	    ){
	  message = "No School";
	}
	
	// Modified Schedule
	else if ( ScheduleCheck == '8/29'   
			|| ScheduleCheck == '8/30'   
			|| ScheduleCheck == '1/21'   // Exhibition
			){
	  message = "Today has a Modified schedule";
	} 
	
	//abnormal A day check
	else if ( ScheduleCheck == '9/6'   
			|| ScheduleCheck == '9/8'   
			){
		message = "Today is an <span class='dayTypeLetter'>A</span> day.";
	}
	else if ( ScheduleCheck == '9/7'   
			|| ScheduleCheck == '9/9'   
			){
		message = "Today is an <span class='dayTypeLetter'>B</span> day.";
	}
	  else if(newDate.getDay() == 1 || newDate.getDay() == 3){
	  message = "Today is an <span class='dayTypeLetter'>A</span> day.";
	} else if(newDate.getDay() == 2 || newDate.getDay() == 4){
	  message = "Today is a <span class='dayTypeLetter'>B</span> day.";
	} else if(newDate.getDay() == 5){
	  message = "Today is an <span class='dayTypeLetter'>X</span> day.";
	} else if(newDate.getDay() == 0 || newDate.getDay() == 6){
	  message = "No School";
	} 
	
	return message;
}



function updateClock ( )
 	{
 	var currentTime = new Date ( );
  	var currentHours = currentTime.getHours ( );
  	var currentMinutes = (currentTime.getMinutes ( ));
  	var currentSeconds = currentTime.getSeconds ( );

  	// Pad the minutes and seconds with leading zeros, if required
  	currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  	currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

  	// Choose either "AM" or "PM" as appropriate
  	var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

  	// Convert the hours component to 12-hour format if needed
  	currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

  	// Convert an hours component of "0" to "12"
  	currentHours = ( currentHours == 0 ) ? 12 : currentHours;

  	// Compose the string for display
  	var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
  	
  	var clockVal = [currentHours, currentMinutes, currentSeconds, timeOfDay, currentTimeString]
  	
  	return clockVal;

   	  	
 }

function updatePeriod ( date, daytype, time ) {

	date;
	daytype;
	var hours = time[0]; //hours
	var minute = time[1]; //minutes
	var seceonds = time[2]; //seconds
	time[3]; //timeOfDate

	if (daytype == "Today is an <span class='dayTypeLetter'>A</span> day.") {
		if ((time[0] == 9) || ((time[0] == 10) && (time[1] <= 30))){
			return "1st Period";
		}
		
		if (((time[0] == 10) && (time[1] >= 34)) || (time[0] == 11) || ((time[0] == 12) && (time[1] <= 04))){
			return "2nd Period";
		}
		
		if ((time[0] == 12) && ((time[1] > 07) || (time[1] <= 38))){
			return "Period 3A";
		}
		
		if (((time[0] == 12) && (time[1] >= 42)) || ((time[0] == 01) && (time[1] <= 12))){
			return "Period 3B";
		}
		
		if (((time[0] == 01) && (time[1] >= 16)) || ((time[0] == 02) && (time[1] <= 46))){
			return "4th Period";
		}
		
		if (((time[0] == 02) && (time[1] >= 50)) || ((time[0] == 03) && (time[1] <= 35))){
			return "5th Period";
		}
		
	}
	
	else if (daytype == "Today is a <span class='dayTypeLetter'>B</span> day.") {
		if ((time[0] == 9) || ((time[0] == 10) && (time[1] <= 30))){
			return "6th Period";
		}
		
		if (((time[0] == 10) && (time[1] >= 34)) || (time[0] == 11) || ((time[0] == 12) && (time[1] <= 04))){
			return "7th Period";
		}
		
		if ((time[0] == 12) && ((time[1] > 07) || (time[1] <= 38))){
			return "Period 3A";
		}
		
		if (((time[0] == 12) && (time[1] >= 42)) || ((time[0] == 01) && (time[1] <= 12))){
			return "Period 3B";
		}
		
		if (((time[0] == 01) && (time[1] >= 16)) || ((time[0] == 02) && (time[1] <= 46))){
			return "8th Period";
		}
		
		if (((time[0] == 02) && (time[1] >= 50)) || ((time[0] == 03) && (time[1] <= 35))){
			return "5th Period";
		}
		
	}
	
	else if (daytype == "Today is an <span class='dayTypeLetter'>X</span> day.") {
		if ((time[0] == 9) && (time[1] <= 40)){
			return "1st Period";
		}
		
		if (((time[0] == 9) && (time[1] >= 44)) || ((time[0] == 1) && (time[1] <= 24))){
			return "2nd Period";
		}
		
		if (((time[0] == 10) && (time[1] >= 28)) || ((time[0] == 11) && (time[1] <= 07))){
			return "6th Period";
		}
		
		if (((time[0] == 11) && (time[1] >= 12)) || ((time[0] == 11) && (time[1] <= 52))){
			return "7th Period";
		}
		
		if (((time[0] == 11) && (time[1] >= 56)) || ((time[0] == 12) && (time[1] <= 26))){
			return "Period 3A";
		}
		
		if (((time[0] == 12) && (time[1] >= 30)) || ((time[0] == 01))){
			return "Period 3B";
		}
		
		if (((time[0] == 01) && (time[1] >= 04)) || ((time[0] == 01) && (time[1] <= 44))){
			return "4th Period";
		}
		
		if (((time[0] == 01) && (time[1] >= 48)) || ((time[0] == 02) && (time[1] <= 28))){
			return "4th Period";
		}
		
		if (((time[0] == 02) && (time[1] >= 32)) || ((time[0] == 03) && (time[1] <= 12))){
			return "5th Period";
		}
		
	}
	
	else if (daytype == "Today is a <span class='dayTypeLetter'>B</span> day." 
		|| daytype == "Today is an <span class='dayTypeLetter'>A</span> day.") {
		if ((time[0] <= 9) || ((time[0] == 03) && (time[1] >= 35))){
			return "School's Out";
		}
	}
	
	else if (daytype == "Today is an <span class='dayTypeLetter'>X</span> day."){
		if ((time[0] <= 9) || ((time[0] == 03) && (time[1] >= 12))){
			return "School's Out";
		}
	}
	
	else if (daytype == "No School"){
		return "No School"
	}
	
	return "Passing Period";
}

function daysOfPeaceNumberScript (spreadsheetID){
	
	     // ID of the Google Spreadsheet
	     //var spreadsheetID = "1wUqPDTzXV8yn2Ti2WIYNL0hXl90PAqaQ0dyqhMix8Ew";
	     
	     // Make sure it is public or set to Anyone with link can view 
	     var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";
	    
	     $.getJSON(url, function(data) {
	     
	    	var entry = data.feed.entry;
	    	var newDateDoP = new Date();
			newDateDoP.setDate(newDateDoP.getDate());
	      	
	      	var todayDateDoP = newDateDoP.getDate();
			var todayMonthDoP = newDateDoP.getMonth() + 1;
			var todayYearDoP = newDateDoP.getFullYear();
			
			var dateDoP = todayMonthDoP + '/' + todayDateDoP + '/' + todayYearDoP;

	      $(entry).each(function(){
	      	

	      	
	      	if(dateDoP == this.gsx$date.$t){
	      		var freshman = '<h2><span class="divider"></span>9<sup>th</sup> - <span class="9th Grade">' + this.gsx$nine.$t + '</span>';
		        var sophomore = '<span class="divider"></span>10<sup>th</sup> - <span class="10th Grade">' + this.gsx$ten.$t + '</span>';
		        var junior = '<span class="divider"></span>11<sup>th</sup> - <span class="11th Grade">' + this.gsx$eleven.$t + '</span>';
		        var senior = '<span class="divider"></span>12<sup>th</sup> - <span class="12th Grade">' + this.gsx$twelve.$t + '</span></h2>';
		        
		        var announce= freshman + sophomore + junior + senior;
	      	
	      		$('.daysOfPeaceNumbers').prepend( announce + '</h4>');
	      	}
	      	else{
				return;
	      	}
	      });
	    
	      	
	      		
	     
	     });
}


function refreshAt(hours, minutes, seconds) {
    var now = new Date();
    var then = new Date();

    if(now.getHours() > hours ||
       (now.getHours() == hours && now.getMinutes() > minutes) ||
        now.getHours() == hours && now.getMinutes() == minutes && now.getSeconds() >= seconds) {
        then.setDate(now.getDate() + 1);
    }
    then.setHours(hours);
    then.setMinutes(minutes);
    then.setSeconds(seconds);

    var timeout = (then.getTime() - now.getTime());
    setTimeout(function() { window.location.reload(true); }, timeout);
}