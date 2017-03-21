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
	  
	   globalPeriod = updatePeriod(globalDate, globalDayType, globalTime);
	   $("#period").html(globalPeriod);

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

//period is broken
function updatePeriod ( date, daytype, time ) {

	switch(daytype.value) {
	    case 0:
	        return AandBDaySchedule( time , daytype);
	    case 1:
	        return AandBDaySchedule( time , daytype);
	    case 2:
	        return XDaySchedule( time , daytype );
	    case 3:
	    	return "No School";
		case 4:
			return "Modified Schedule";
	    default:
	        return "No School";
	}
}


function AandBDaySchedule( time , daytype)
{
	var hour = time [0];
	var minute = time [1];
	
	if ((hour == 9) || ((hour == 10) && (minute <= 30))){
		return daytype.firstPeriod;
	}
	
	else if (((hour == 10) && (minute >= 34)) || (hour == 11) || ((hour == 12) && (minute <= 04))){
		return daytype.secondPeriod;
	}
	else if ((hour == 12) && ((minute > 07) || (minute <= 38))){
		return daytype.lunch1;
	}
		
	else if (((hour == 12) && (minute >= 42)) || ((hour == 01) && ( minute <= 12))){
		return daytype.lunch2;
	}
		
	else if (((hour == 01) && (minute >= 16)) || ((hour == 02) && (minute <= 46))){
		return daytype.fourthPeriod;
	}
		
	else if (((hour == 02) && (minute >= 50)) || ((hour == 03) && (minute <= 35))){
		return daytype.fifthPeriod;
	}
	else if ((hour <= 9) || ((hour == 03) && (minute >= 35))){
		return "School's Out";
	}
	else {
		return "Passing Period";
	}
}

function XDaySchedule ( time , daytype )
{
	if ((time[0] == 9) && (time[1] <= 40)){
		return daytype.firstPeriod;
	}
	
	else if (((time[0] == 9) && (time[1] >= 44)) || ((time[0] == 1) && (time[1] <= 24))){
		return daytype.secondPeriod;
	}
	
	else if (((time[0] == 10) && (time[1] >= 28)) || ((time[0] == 11) && (time[1] <= 07))){
		return daytype.thirdPeriod;
	}
	
	else if (((time[0] == 11) && (time[1] >= 12)) || ((time[0] == 11) && (time[1] <= 52))){
		return daytype.fourthPeriod;
	}
	
	else if (((time[0] == 11) && (time[1] >= 56)) || ((time[0] == 12) && (time[1] <= 26))){
		return daytype.lunch1;
	}
	
	else if (((time[0] == 12) && (time[1] >= 30)) || ((time[0] == 01))){
		return daytype.lunch2;
	}
	
	else if (((time[0] == 01) && (time[1] >= 04)) || ((time[0] == 01) && (time[1] <= 44))){
		return daytype.fifthPeriod;
	}
	
	else if (((time[0] == 01) && (time[1] >= 48)) || ((time[0] == 02) && (time[1] <= 28))){
		return daytype.sixthPeriod;
	}
	
	else if (((time[0] == 02) && (time[1] >= 32)) || ((time[0] == 03) && (time[1] <= 12))){
		return daytype.seventhPeriod;
	}
	else if ((time[0] <= 9) || ((time[0] == 03) && (time[1] >= 13))){
		return "School's Out";
	}
	else {
		return "Passing Period";
	}
	
}

function updateDayType (){
	var newDate = new Date();
	newDate.setDate(newDate.getDate()); 
	var ScheduleCheck = (newDate.getMonth() + 1) + '/' + newDate.getDate();

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
	  return DayType.NoSchool;
	}
	//Summer Break Check
	else if ( ScheduleCheck[0] == '7' 
	    || ScheduleCheck[0] == '8'
	    ){
	 return DayType.NoSchool;
	}
	
	// Modified Schedule
	else if ( ScheduleCheck == '8/29'   
			|| ScheduleCheck == '8/30'   
			|| ScheduleCheck == '1/21'   // Exhibition
			){
	  return DayType.Modified;
	} 
	
	//abnormal A day check
	else if ( ScheduleCheck == '9/6'   
			|| ScheduleCheck == '9/8'   
			){
		return DayType.A;
	}
	else if ( ScheduleCheck == '9/7'   
			|| ScheduleCheck == '9/9'   
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




var DayType =
{
	A : {value: 0, 
			name: "A Day", 
			firstPeriod: "1st Period", 
			secondPeriod: "2nd Period", 
			lunch1: "3A", 
			lunch2: "3B", 
			fourthPeriod: "4th Period", 
			fifthPeriod: "5th Period",
			message: "<span class='dayTypeLetter'>A</span> day." }, 
			
	B : {value: 1, 
			name: "B Day", 
			firstPeriod: "6th Period",
			secondPeriod: "7th Period", 
			lunch1: "3A", 
			lunch2: "3B", 
			fourthPeriod: "8th Period", 
			fifthPeriod: "5th Period",
			message: "<span class='dayTypeLetter'>B</span> day." }, 
			
	X : {value: 2, 
			name: "X Day", 
			firstPeriod: "1st Period", 
			secondPeriod: "2nd Period", 
			thirdPeriod: "6th Period", 
			fourthPeriod: "7th Period", 
			lunch1: "3A", 
			lunch2: "3B",  
			fifthPeriod: "4th Period", 
			sixthPeriod: "8th Period" , 
			seventhPeriod: "5th Period", 
			message: "<span class='dayTypeLetter'>X</span> day."}, 
			
	NoSchool : {value: 3, 
			name: "No School", 
			message: "No School" }, 
	Modified : {value: 4,
			name: "Modified Schedule", 
			message: "Modified Schedule" }
};

var BlockPeriodTimes = 
{
	block1 : {
		startHour: 9,
		startMin: 0,
		endHour: 10,
		endMin: 30
	},
	passing1: {
		startHour: 10,
		startMin: 30,
		endHour: 10,
		endMin: 34
	},
	block2 : {
		startHour: 10,
		startMin: 34,
		endHour: 12,
		endMin: 4
	},
	passing2: {
		startHour: 12,
		startMin: 4,
		endHour: 12,
		endMin: 8
	},
	lunch1: {
		startHour: 12,
		startMin: 8,
		endHour: 12,
		endMin: 38
	},
	passing3: {
		startHour: 12,
		startMin: 38,
		endHour: 12,
		endMin: 42
	},
	lunch2: {
		startHour: 12,
		startMin: 42,
		endHour: 1,
		endMin: 12
	},
	passing4: {
		startHour: 1,
		startMin: 12,
		endHour: 1,
		endMin: 16
	},
	block3: {
		startHour: 1,
		startMin: 16,
		endHour: 2,
		endMin: 46
	},
	passing5: {
		startHour: 2,
		startMin: 46,
		endHour: 2,
		endMin: 50
	},
	block4: {
		startHour: 2,
		startMin: 50,
		endHour: 3,
		endMin: 35
	},
};