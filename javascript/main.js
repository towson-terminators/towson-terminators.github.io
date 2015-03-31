$( document ).ready(function() {
	//console.log() works for printing stuff
	//"http://api.vex.us.nallen.me/get_teams?organisation=Towson%20High%20School&is_registered=1"
	getTeams()
});

function getTeams(){
	// $.ajax({
	//     url: "http://api.vex.us.nallen.me/get_teams?organisation=Towson%20High%20School&is_registered=1",
	 
	//     // The name of the callback parameter, as specified by the YQL service
	//     jsonp: "callback",
	 
	//     // Tell jQuery we're expecting JSONP
	//     dataType: "jsonp",
	 
	//     // Tell YQL what we want and that we want JSON
	//     data: {
	//     //     q: "select title,abstract,url from search.news where query=\"cat\"",
	//         format: "json"
	//     },
	 
	   

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