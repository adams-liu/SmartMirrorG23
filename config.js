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
		
		
		
// Traffic Module 
{
  module: 'MMM-MyCommute',
  position: 'bottom_left',
  config: {
    apikey: 'AIzaSyA2Il2EVnMDXVZOqtCgMFDgkEEnA23uE6U',
    origin: '45 Union St W, Kingston, ON',
    startTime: '00:00',
    endTime: '23:59',
    hideDays: [],
    destinations: [
      {
        destination: '14 Duncan St Toronto, ON M5H 3G8',
        label: 'Air Canada Centre',
        mode: 'walking',
        color: '#82E5AA'
      },
      {
        destination: '317 Dundas St W, Toronto, ON M5T 1G4',
        label: 'Art Gallery of Ontario',
        mode: 'transit'
      },
      {
        destination: '55 Mill St, Toronto, ON M5A 3C4',
        label: 'Distillery District',
        mode: 'bicycling'
      },
      {
        destination: '6301 Silver Dart Dr, Mississauga, ON L5P 1B2',
        label: 'Pearson Airport',
        avoid: 'tolls'
      }
    ]
  }
},

/// Stock API
{
  module: "MMM-AVStock",
  position: "bottom_right", //"bottom_bar" is better for `mode:ticker`
  config: {
    apiKey : "T5OCQD1GSI4BX98S", // https://www.alphavantage.co/
    timeFormat: "YYYY-MM-DD HH:mm:ss",
    symbols : ["aapl", "GOOGL", "TSLA", "amzn", "FB"],
    alias: ["APPLE", "GOOGLE", "TESLA", "AMAZON","FACEBOOK"], //Easy name of each symbol. When you use `alias`, the number of symbols and alias should be the same. If value is null or "", symbol string will be used by default.
    tickerDuration: 60, // Ticker will be cycled once per this second.
    chartDays: 90, //For `mode:series`, how much daily data will be taken. (max. 90)
    poolInterval : 1000*15, // (Changed in ver 1.1.0) - Only For Premium Account
    mode : "table", // "table", "ticker", "series"
    decimals: 4, // number o decimals for all values including decimals (prices, price changes, change%...)
    candleSticks : false, //show candle sticks if mode is Series
    coloredCandles : false, //colored bars: red and green for negative and positive candles
    premiumAccount: false, // To change poolInterval, set this to true - Only For Premium Account
  }
},

/// Sports Update
{
  module: "MMM-MyScoreboard",
  position: "bottom_left",
  classes: "default everyone",
  header: "My Scoreboard",
  config: {
    showLeagueSeparators: true,
    colored: true,
    viewStyle: "mediumLogos",
    sports: [
      {
        league: "NHL",
        groups: ["Atlantic"]
      },
      {
        league: "NBA",
        teams: ["TOR"],
        groups: ["Pacific", "Central"]
      },
      {
        league: "MLB",
        teams: ["TOR", "CHW", "NYY"]
      },
      {
        league: "NFL",
        teams: ["BUF", "NYJ", "NYG"]
      },
      {
        league: "CFL",
        teams: ["TOR", "MTL", "OTT"]
      },
      {
        league: "NCAAM_MM",
        label: "March Madness"
      }
    ]

  }
},

// Bible Verse
{
		module: 'MMM-DailyBibleVerse',
		position: 'bottom_bar',	// This can be any of the regions. Best result is in the bottom_bar as verses can take multiple lines in a day.
		config: {
			version: 'ESV', // This can be changed to any version you want that is offered by Bible Gateway. For a list, go here: https://www.biblegateway.com/versions/,
	    	size: 'small' // default value is medium, but can be changed. 
		}
	},

// Weekly Schedule
{
    module: "MMM-WeeklySchedule",
    position: "top_left",
    header: "Gwendolyn's classes",
    config: {
        schedule: {
            timeslots: [ "8:00", "10:00", "12:00", "14:00", "16:00" ],
            lessons: {
                mon: [ "Potions", "Defense against the Dark Arts", "Lunch Break", "Transfiguration" ],  
                tue: [ "", "Astronomy", "Lunch Break", "Charms", "History of Magic" ],
                wed: [ "Arithmancy", "Divination", "Lunch Break", "Muggle Studies", "Herbology" ],
                thu: [ "Care of Magical Creatures", "Care of Magical Creatures", "Lunch Break", "Transfiguration", "Charms" ],
                fri: [ "Potions", "Herbology", "Lunch Break", "Charms", "Defense against the Dark Arts" ],
                // no entries for saturday
                sun: [ "", "Quidditch Match", "Sunday Lunch" ]   // short day on sundays
            }
        },
        updateInterval: 1 * 60 * 60 * 1000, // every hour
        showNextDayAfter: "16:00"
    }
},		
/// Alexa Control	
   {
        module: 'MMM-AlexaControl',
        position: 'middle_center',
        config:{
        		pages:4,
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
        		 
        		 modules:[[ "weatherforecast", "newsfeed"],[ "calendar", "MMM-NowPlayingOnSpotify","MMM-MyScoreboard"],
        		 ["MMM-MyCommute","MMM-AVStock" ],["MMM-DailyBibleVerse","MMM-WeeklySchedule"]],
             fixed: ["clock", "currentweather", "MMM-page-indicator"],
        			 
        		 devices: {
    						devices: [
							{	
        					name: 'Page 1',  
        					port: 11101,              
        					handler: `_this.sendSocketNotification("PAGE_CHANGED", 0)`
    						},     						
    						
    						{
    							
        					name: 'Page 2',  
        					port: 11102,              
        					handler: `_this.sendSocketNotification("PAGE_CHANGED", 1)`
    						}, 
    						
    						{
        					name: 'Page 3',  
        					port: 11103,              
        					handler: `_this.sendSocketNotification("PAGE_CHANGED", 2)`
    						},	  
    						
    						
    						{
        					name: 'Page 4',  
        					port: 11104,              
        					handler: `_this.sendSocketNotification("PAGE_CHANGED", 3)`
    						}	  
							]}
        			         			 
        			 }
            			 
    }
	
	]

};



/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
