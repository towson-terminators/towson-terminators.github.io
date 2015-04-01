$( document ).ready(function() {
	//console.log() works for printing stuff
	
	getTeams()
});

//Useful urls

//get all events for the current season in the maryland region
//http://api.vex.us.nallen.me/get_events?region=Maryland&season=current


//get all towson high school teams registered for the current season
//http://api.vex.us.nallen.me/get_teams?organisation=Towson%20High%20School&is_registered=1

//get all towson high school teams ever registered
//http://api.vex.us.nallen.me/get_teams?organisation=Towson%20High%20School

//get all awards for team
//http://api.vex.us.nallen.me/get_awards?team=<team number>

//get all matches played by a team this current season
//http://api.vex.us.nallen.me/get_matches?season=current&team=<team number>

function getTeams(){
 
	   

	    $.ajax({
	   		type: "GET",
		  dataType: "json",
		  url: "http://api.vex.us.nallen.me/get_teams?organisation=Towson%20High%20School&is_registered=1",
		  success: function( response ) {
	        console.log( response ); // server response
	  	  }
		});
// });
}