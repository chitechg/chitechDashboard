//Set to wait until entire page is loaded before starting, to ensure eveyrthing syncs up. 

$(document).ready(function()
{
	//update every 
	var globalTime;
	var globalPeriod;
	
	refreshAt(00,00,00);
	
	var globalDate = updateDate();
	$('.date').html(globalDate);
	   
	var globalDayType = updateDayType();
	$('.dayType').html(globalDayType.message);
	
	
	//update display
	window.setInterval(function(){
		
	   globalTime = updateClock();
	   $("#clock").html(globalTime[4]);

	}, 1000);
   
});



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
  	
  	var clockVal = [currentHours, currentMinutes, currentSeconds, timeOfDay, currentTimeString];

  	return clockVal;

   	  	
 }

function updateDate () {
	//eventually calls to updateDayType
	//Date and Day Type script
	var monthNames = [ "Jan.", "Feb.", "March", "April", "May", "June",
	    "July", "August", "Sept.", "Oct.", "Nov.", "Dec." ];
	var dayNames= ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
	
	var newDate = new Date();
	newDate.setDate(newDate.getDate());  
	
	var todayDay = dayNames[newDate.getDay()];
	var todayDate = newDate.getDate();
	var todayMonth = monthNames[newDate.getMonth()];

	
	var currentDateString = todayDay + ", " + todayMonth + ' ' + todayDate + ' ';
	
	return currentDateString;
	
}

function updateDayType (){
	var newDate = new Date();
	newDate.setDate(newDate.getDate()); 
	var ScheduleCheck = (newDate.getMonth() + 1) + '/' + newDate.getDate();

	if ( ScheduleCheck == '1/1'   // New Year's Day
			|| ScheduleCheck == '8/25'  
			|| ScheduleCheck == '9/4'
			|| ScheduleCheck == '9/29'
			|| ScheduleCheck == '10/9'
			|| ScheduleCheck == '11/3'
			|| ScheduleCheck == '11/9'
			|| ScheduleCheck == '11/10'
			|| ScheduleCheck == '11/22'
			|| ScheduleCheck == '11/23'
			|| ScheduleCheck == '11/24'
			|| ScheduleCheck == '12/22'
			|| ScheduleCheck == '12/25'
			|| ScheduleCheck == '12/26'
			|| ScheduleCheck == '12/27'
			|| ScheduleCheck == '12/28'
			|| ScheduleCheck == '12/29'
			|| ScheduleCheck == '1/1'
			|| ScheduleCheck == '1/2'
			|| ScheduleCheck == '1/3'
			|| ScheduleCheck == '1/4'
			|| ScheduleCheck == '1/5'
			|| ScheduleCheck == '1/15'
			|| ScheduleCheck == '1/26'
			|| ScheduleCheck == '2/19'
			|| ScheduleCheck == '3/2'
			|| ScheduleCheck == '3/26'
			|| ScheduleCheck == '3/27'
			|| ScheduleCheck == '3/28'
			|| ScheduleCheck == '3/29'
			|| ScheduleCheck == '3/30'
			|| ScheduleCheck == '4/13'
			|| ScheduleCheck == '4/19'
			|| ScheduleCheck == '5/18'
			|| ScheduleCheck == '5/28'
			|| ScheduleCheck == '6/1'
			){
	  return DayType.NoSchool;
	}
	// Modified Schedule
	else if ( ScheduleCheck == '8/28'   
			|| ScheduleCheck == '8/29' 
			|| ScheduleCheck == '8/30' 
			|| ScheduleCheck == '10/11'
			|| ScheduleCheck == '12/22'   // Exhibition
			|| ScheduleCheck == '1/16'
			|| ScheduleCheck == '4/17'
			){
	  return DayType.Modified;
	} 
	
	//abnormal A day check
	else if ( ScheduleCheck == '8/31'   
			|| ScheduleCheck == '9/8'
			|| ScheduleCheck == '10/10'
			|| ScheduleCheck == '10/12'
			|| ScheduleCheck == '1/16'
			|| ScheduleCheck == '1/18'
			|| ScheduleCheck == '2/20'
			|| ScheduleCheck == '2/22'
			|| ScheduleCheck == '5/29'
			){
		return DayType.A;
	}
	else if ( ScheduleCheck == '9/1'   
			|| ScheduleCheck == '9/9'  
			|| ScheduleCheck == '10/11'
			|| ScheduleCheck == '10/13'
			|| ScheduleCheck == '1/17'
			|| ScheduleCheck == '1/19'
			|| ScheduleCheck == '2/21'
			|| ScheduleCheck == '2/23'
			|| ScheduleCheck == '4/20'
			|| ScheduleCheck == '5/30'
			){
		return DayType.B;
	}
	//A Day Check
	else if(newDate.getDay() == 1 || newDate.getDay() == 3)
	{
	  return DayType.A;
	} 
	
	//B Day Check
	else if(newDate.getDay() == 2 || newDate.getDay() == 4)
	{
	  return DayType.B;
	} 
	
	//X Day Check
	else if(newDate.getDay() == 5)
	{
	  return DayType.X;
	}
	
	//Weekend Check
	else if(newDate.getDay() == 0 || newDate.getDay() == 6)
	{
	  return DayType.NoSchool;
	} 
	//Summer Break Check
	else if ( ScheduleCheck[0] == '7' 
	    || ScheduleCheck[0] == '8'
	    ){
	 return DayType.NoSchool;
	}
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

var DayObject = 
{
	pDayType: DayType,
	pPeriod: Period,
}

var DayType =
{
	A : {value: 0, 
			name: "A Day",
			message: "<span class='dayTypeLetter'>A</span> day." }, 
			zeroPeriod: " ",
			firstPeriod: "1st Period",
			secondPeriod: "2nd Period",
			thirdPeriod: "3rd Period",
			fourthPeriod: "Lunch",
			fifthPeriod: "5th Period",
			sixthPeriod: "6th Period",
			
	B : {value: 1, 
			name: "B Day", 
			message: "<span class='dayTypeLetter'>B</span> day." }, 
			zeroPeriod: " ",
			firstPeriod: "7th Period",
			secondPeriod: "2nd Period",
			thirdPeriod: "3rd Period",
			fourthPeriod: "Lunch",
			fifthPeriod: "8th Period",
			sixthPeriod: "6th Period",
	X : {value: 2, 
			name: "X Day", 
			message: "<span class='dayTypeLetter'>X</span> day."}, 
			zeroPeriod: " ",
			firstPeriod: "1st Period",
			secondPeriod: "7th Period",
			thirdPeriod: "Enrichment",
			fourthPeriod: "Lunch A",
			fifthPeriod: "Lunch B",
			sixthPeriod: "5th Period",
			seventhPeriod: "8th Period",
			
	NoSchool : {value: 3, 
			name: "No School", 
			message: "No School" }, 
	Modified : {value: 4,
			name: "Modified Schedule", 
			message: "Modified Schedule" }
};

var Period =
{
	value: 0,
	name: "null",
	startHour: 0,
	startMinute: 0,
	endHour: 0,
	endMinute: 0,
}