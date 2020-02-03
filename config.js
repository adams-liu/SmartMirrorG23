/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 12,
	units: "metric",
	// serverOnly:  true/false/"local" ,
			     // local for armv6l processors, default 
			     //   starts serveronly and then starts chrome browser
			     // false, default for all  NON-armv6l devices
			     // true, force serveronly mode, because you want to.. no UI on this device







	modules: [
		{
			module: "alert",
		},
	
		{
			module: "updatenotification",
			position: "top_bar"
		},
 

		{
			module: "clock",
			position: "top_left"
		},
		
		
		
		


		{
			module: "calendar",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "https://calendar.google.com/calendar/ical/adamstest2000%40gmail.com/private-cc67123a1fe35af08d8850d0e0586ea7/basic.ics"
					}
				]
			}
		},
		
		

		{
  module: "MMM-NowPlayingOnSpotify",
  position: "bottom_right",

  config: {
  showCoverArt:false,
    clientID: "3c1664761e7148a0a808b397569b93fc",
    clientSecret: "5d0acb9be2fa466480278b65d2e562f3",
    accessToken: "BQAvurgvpYsqjlJ5dGKKzstFQ2V4qwa3JVe84XnpKjCebKC0gTvDpPn4A-T0UVOi9S2UTh6EWbnb5v96tg9O5gSa4C8tfuJ46boP9uev0kMOoHj2apsUOzgXRyzo38y0Z78alYsMmPOabyst84w5tW2OEtKOLcXGr9oWvTaNAFIHYg",
    refreshToken: "AQCjsn39aLnfVh1JKyprvwnfEBWufupHsRkRTApPpqbCEw6nYsButKsH3JjtReZX8L4EKTXBYZy7swNslcmDP9LCY4StHZTJBMjlDkwec6PlWrJIIy7sPf7osT1BBuO-EWs"
  }
},


/*
		{
			module: "compliments",
			position: "lower_third"
		},
*/


// Current Weather

		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Kingston,ON",
				useLocationAsHeader: true,
				locationID: "5992500",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "4f50bb3a259ec2351894cc2d53ac1719"
				
			}
		},


	
		{
			module: "newsfeed",
			position: "lower_third",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		
/// Alexa Control	
   {
        module: 'MMM-AlexaControl',
        position: 'middle_center',
        config:{
        		pages:3,
            image: false,
            pm2ProcessName: "mm",
            vcgencmd: true
        }
    },	
	
	
// Page indicator
	
	 {
        module: 'MMM-page-indicator',
        position: 'bottom_bar',
       
        config: {
            //pages: 3,
        }
    }	,
 
     
// Change pages module 
    {
        module: 'MMM-pages',
        config: {
        		 
        		 modules:[[ "weatherforecast", "newsfeed"],[ "calendar", "MMM-NowPlayingOnSpotify" ]],
             fixed: ["clock", "currentweather", "MMM-page-indicator"],
        			 
        		 devices: {
    						devices: [{
    							
        					name: 'Page 2',  
        					port: 11102,              
        					handler: `_this.sendSocketNotification("PAGE_CHANGED", 1)`
    						}, 
    						
    						{
        					name: 'Page 3',  
        					port: 11103,              
        					handler: `_this.sendSocketNotification("PAGE_CHANGED", 2)`
    						}	  
							]}
        			         			 
        			 }
            			 
    }
	
	]

};



/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
