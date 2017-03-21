$(document).ready(function()
{


   
});

// function daysOfPeaceNumberScript (spreadsheetID){
	
// 	     // ID of the Google Spreadsheet
// 	     //var spreadsheetID = "1wUqPDTzXV8yn2Ti2WIYNL0hXl90PAqaQ0dyqhMix8Ew";
	     
// 	     // Make sure it is public or set to Anyone with link can view 
// 	     var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";
	    
// 	     $.getJSON(url, function(data) {
	     
// 	    	var entry = data.feed.entry;
// 	    	var newDateDoP = new Date();
// 			newDateDoP.setDate(newDateDoP.getDate());
	      	
// 	      	var todayDateDoP = newDateDoP.getDate();
// 			var todayMonthDoP = newDateDoP.getMonth() + 1;
// 			var todayYearDoP = newDateDoP.getFullYear();
			
// 			var dateDoP = todayMonthDoP + '/' + todayDateDoP + '/' + todayYearDoP;

// 	      $(entry).each(function(){
	      	

	      	
// 	      	if(dateDoP == this.gsx$date.$t){
// 	      		var freshman = '<h2><span class="divider"></span>9<sup>th</sup> - <span class="9th Grade">' + this.gsx$nine.$t + '</span>';
// 		        var sophomore = '<span class="divider"></span>10<sup>th</sup> - <span class="10th Grade">' + this.gsx$ten.$t + '</span>';
// 		        var junior = '<span class="divider"></span>11<sup>th</sup> - <span class="11th Grade">' + this.gsx$eleven.$t + '</span>';
// 		        var senior = '<span class="divider"></span>12<sup>th</sup> - <span class="12th Grade">' + this.gsx$twelve.$t + '</span></h2>';
		        
// 		        var announce= freshman + sophomore + junior + senior;
	      	
// 	      		$('.daysOfPeaceNumbers').prepend( announce + '</h4>');
// 	      	}
// 	      	else{
// 				return;
// 	      	}
// 	      });
	    
	      	
	      		
	     
// 	     });
// }
