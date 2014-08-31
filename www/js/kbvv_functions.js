var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );

jQuery(function($) {
	$('#check_for_a_beer').click( function(){ 
		var delay_time = 3000;
		$('#beer_result_wrap').show();
		$('.overlayBG').show();
					
		$(".loading").show();
		$('.loading').html('<img src="images/loader.gif" alt="Wait" />');
		setTimeout( function() {
		   $(".loading").hide();
		},delay_time);


		var beer_start1 = 0;
		var beer_start2 = 16;
		var beer_stop = 6;

		var current_date = new Date();
		var current_hours = current_date.getHours();
		var current_minutes = current_date.getMinutes();

		
		
		// Meldungen fuer 0-5 Uhr
		if(current_hours == 0) {
			$("#close_beer_result").delay(delay_time).fadeIn("normal");
			$("#beer_result_good").delay(delay_time).fadeIn("normal");
			$("#beer_result_good").html("<span class='icon fa-check'></span><br />Sicher!<br /><p style='color: #888; font-size: 24px;'>Die Nacht ist noch jung!</p>");
			// playing sound:
			playSuccessSound();
		}
		else if(current_hours == 1) {
			$("#close_beer_result").delay(delay_time).fadeIn("normal");
			$("#beer_result_good").delay(delay_time).fadeIn("normal");
			$("#beer_result_good").html("<span class='icon fa-check'></span><br />Jap!<br /><p style='color: #888; font-size: 24px;'>Lieber Pils-Bier als Shakespeare.</p>");
			// playing sound:
			playSuccessSound();
		}
		else if(current_hours == 2) {
			$("#close_beer_result").delay(delay_time).fadeIn("normal");
			$("#beer_result_good").delay(delay_time).fadeIn("normal");
			$("#beer_result_good").html("<span class='icon fa-check'></span><br />øl tid!<br /><p style='color: #888; font-size: 24px;'>Lieber Bockbier als Ziegenmilch.</p>");
			// playing sound:
			playSuccessSound();
		}
		else if(current_hours == 3) {
			$("#close_beer_result").delay(delay_time).fadeIn("normal");
			$("#beer_result_good").delay(delay_time).fadeIn("normal");
			$("#beer_result_good").html("<span class='icon fa-check'></span><br />Immer weiter!<br /><p style='color: #888; font-size: 22px;'>Ich kann ohne Dich nicht heben, sagte er zum Bierkrug.</p>");
			// playing sound:
			playSuccessSound();
		}
		else if(current_hours == 4) {
			$("#close_beer_result").delay(delay_time).fadeIn("normal");
			$("#beer_result_good").delay(delay_time).fadeIn("normal");
			$("#beer_result_good").html("<span class='icon fa-check'></span><br />Läuft!<br /><br /><p style='color: #888; font-size: 24px;'>Eins geht noch!</p>");
			// playing sound:
			playSuccessSound();
		}
		else if(current_hours == 5) {
			$("#close_beer_result").delay(delay_time).fadeIn("normal");
			$("#beer_result_good").delay(delay_time).fadeIn("normal");
			$("#beer_result_good").html("<span class='icon fa-check'></span><br />OK, aber...<br /><br /><p style='color: #888; font-size: 24px;'>Letzte Order!</p>");
			// playing sound:
			playSuccessSound();
		}
		else if(current_hours == 6) {
			$("#close_beer_result").delay(delay_time).fadeIn("normal");
			$("#beer_result_bad").delay(delay_time).fadeIn("normal");
			$("#beer_result_bad").html("<span class='icon fa-times-circle'></span><br />Nein!<br /><p style='color: #888; font-size: 24px;'>Geh ins Bett!</p>");
			// playing sound:
			playFailSound();
		}

		//Meldung von 7-16 uhr
		else if(current_hours > beer_stop && current_hours < 15){
			var wartezeit = beer_start2-current_hours;
			$("#close_beer_result").delay(delay_time).fadeIn("normal");
			$("#beer_result_bad").delay(delay_time).fadeIn("normal");
			$("#beer_result_bad").html("<span class='icon fa-times-circle'></span><br />Leider nein!<br /><p style='color: #888; font-size: 24px;'>Du musst noch ca. "+wartezeit+" Stunden warten!</p>");
			// playing sound:
			playFailSound();
			//console.log("zwischen 6-16 uhr --> NICHT OK!!");   
		}
		
		//Meldungen von 15-0 uhr
		else if(current_hours == 15) {
			var wartezeit = 60-current_minutes;
			$("#close_beer_result").delay(delay_time).fadeIn("normal");
			$("#beer_result_bad").delay(delay_time).fadeIn("normal");
			$("#beer_result_bad").html("<span class='icon fa-times-circle'></span><br />Noch nicht!<br /><p style='color: #888; font-size: 24px;'>... aber stell' schon mal kalt - nur noch "+wartezeit+" Minuten!</p>");
			// playing sound:
			playFailSound();
		}
		else if(current_hours == 16) {
			$("#close_beer_result").delay(delay_time).fadeIn("normal");
			$("#beer_result_good").delay(delay_time).fadeIn("normal");
			$("#beer_result_good").html("<span class='icon fa-check'></span><br />Endlich!<br /><br /><p style='color: #888; font-size: 24px;'>Genieß' dein <span class='icon fa-beer'></span></p>");
			// playing sound:
			playSuccessSound();
		}
		else if(current_hours == 17) {
			$("#close_beer_result").delay(delay_time).fadeIn("normal");
			$("#beer_result_good").delay(delay_time).fadeIn("normal");
			$("#beer_result_good").html("<span class='icon fa-check'></span><br />In Ordnung!<br /><p style='color: #888; font-size: 24px;'>Niemals vergessen - sechs Bier sind ein Essen!</p>");
			// playing sound:
			playSuccessSound();
		}
		else if(current_hours == 18) {
			$("#close_beer_result").delay(delay_time).fadeIn("normal");
			$("#beer_result_good").delay(delay_time).fadeIn("normal");
			$("#beer_result_good").html("<span class='icon fa-check'></span><br />Gewiss doch!<br /><p style='color: #888; font-size: 24px;'>Bier gibt keine Rotwein-Flecken.</p>");
			// playing sound:
			playSuccessSound();
		}
		else if(current_hours == 19) {
			$("#close_beer_result").delay(delay_time).fadeIn("normal");
			$("#beer_result_good").delay(delay_time).fadeIn("normal");
			$("#beer_result_good").html("<span class='icon fa-check'></span><br />Natürlich!<br /><p style='color: #888; font-size: 24px;'>Man soll ja viel trinken...</p>");
			// playing sound:
			playSuccessSound();
		}
		else if(current_hours == 20) {
			$("#close_beer_result").delay(delay_time).fadeIn("normal");
			$("#beer_result_good").delay(delay_time).fadeIn("normal");
			$("#beer_result_good").html("<span class='icon fa-check'></span><br />Jawoll!<br /><p style='color: #888; font-size: 24px;'>Froh beim Bier, das lieben wir.</p>");
			// playing sound:
			playSuccessSound();
		}
		else if(current_hours == 21) {
			$("#close_beer_result").delay(delay_time).fadeIn("normal");
			$("#beer_result_good").delay(delay_time).fadeIn("normal");
			$("#beer_result_good").html("<span class='icon fa-check'></span><br />Yes!<br /><br /><p style='color: #888; font-size: 24px;'>Lass' laufen.</p>");
			// playing sound
			playSuccessSound();
		}
		else if(current_hours == 22) {
			$("#close_beer_result").delay(delay_time).fadeIn("normal");
			$("#beer_result_good").delay(delay_time).fadeIn("normal");
			$("#beer_result_good").html("<span class='icon fa-check'></span><br />Auf jeden!<br /><p style='color: #888; font-size: 24px;'>Mit des Bieres Hochgenus wächst des Bauches Radius!</p>");
			// playing sound
			playSuccessSound();
		}
		else if(current_hours == 23) {
			$("#close_beer_result").delay(delay_time).fadeIn("normal");
			$("#beer_result_good").delay(delay_time).fadeIn("normal");
			$("#beer_result_good").html("<span class='icon fa-check'></span><br />Geht klar!<br /><p style='color: #888; font-size: 24px;'>Man soll das Bier nicht vor dem Kater loben.</p>");
			// playing sound:
			playSuccessSound();
		}
		
		return false;
	});        

	$("#close_beer_result").click(function() {
		$('#beer_result_wrap').fadeOut("slow");
		$('#beer_result_bad').fadeOut("normal");
		$('#beer_result_good').fadeOut("normal");
		$('#close_beer_result').fadeOut("normal");
		$('.overlayBG').hide();
	});
	
	
	
	// Show Calendar input form
	$('#cal_entry').click( function(){
		var app = document.URL.indexOf( 'http://' ) === -1 && document.URL.indexOf( 'https://' ) === -1;
		if ( app ) {
			// PhoneGap application -- open calendar popup
			$('#cal_location').fadeIn("slow");
			$('.overlayBG').show();
			$('#send_location').delay(400).fadeIn("slow");
		} else {
			// iOS -- Fehler
			if(iOS=== true) {
				$('#toast_msg').html("<span class='icon fa-times'></span> Die Kalender-Funktion ist in iOS z.Zt. nicht verfügbar.");
				$('.toast').fadeIn(400).delay(4000).fadeOut(400); 
				$('#toast_progress').delay(400).animate({ width: '0', left: '0' }, 4000, 'swing').css('width','100%');
			}
			else {
				// Web / Browser
				$('#toast_msg').html("<span class='icon fa-times'></span> Die Kalender-Funktion ist in der Web-Version nicht verfügbar. Lad' dir die App herunter!");
				$('.toast').fadeIn(400).delay(4000).fadeOut(400); 
				$('#toast_progress').delay(400).animate({ width: '0', left: '0' }, 4000, 'swing').css('width','100%');
			}
			
		} 
	});
	// Send to calendar_events-function
	$('#send_location').click( function(){ 
		var location = $("#cal_input_location").val();
		calendar_events(location);
		$('#cal_location').fadeOut("slow");
		$('.overlayBG').hide();
	});
	// Send form also from "Enter"
	$('#cal_input_location').keypress(function (e) {
	 var key = e.which;
	 if(key == 13)  // the enter key code
	  {
		var location = $("#cal_input_location").val();
		calendar_events(location);
		$('#cal_location').fadeOut("slow");
		$('.overlayBG').hide();
		return false;  
	  }
	});
	// Cancel / close send location form
	$("#close_cal_location").click(function() {
		$('#cal_location').fadeOut("slow");
		$('.overlayBG').hide();               
	});
    
    // Volume onload - initial set volume icons
    if(localStorage.getItem("kbvv_volume") === null) {
        console.log("Initial volume ON");
        $("#icon_volume_on").show();
        $(".text_volume").html("Sound ist <span class='text_volume_on'>On</span>.");
    }
    else {
        console.log("Initial volume OFF");
        $("#icon_volume_off").show();
        $(".text_volume").html("Sound ist <span class='text_volume_off'>Off</span>.");
    };
    // Mute / unmute sound volume
    $("#volume").click(function() {
		if(iOS=== true)
		{
			$('#toast_msg').html("<span class='icon fa-times'></span> Die Mute-Funktion ist in iOS z.Zt. nicht verfügbar.");
			$('.toast').fadeIn(400).delay(4000).fadeOut(400); 
			$('#toast_progress').delay(400).animate({ width: '0', left: '0' }, 4000, 'swing').css('width','100%');
		}
        if(localStorage.getItem("kbvv_volume") === null) {
            console.log("volume was clicked - es gibt kein localstorage 'kbvv_volume' also wird es gesetzt --> auf VOLUME OFF!!!");
            localStorage.setItem("kbvv_volume", "off");
            $("#icon_volume_on").hide();
            $("#icon_volume_off").show();
            $(".text_volume").html("Sound ist <span class='text_volume_off'>Off</span>.");
        }
        else {
            console.log("volume was clicked - localstorage key 'kbvv_volume' gibt es (off) also wird es removed --> auf VOLUME ON!!!");
            localStorage.removeItem("kbvv_volume");
            $("#icon_volume_off").hide();
            $("#icon_volume_on").show();
            $(".text_volume").html("Sound ist <span class='text_volume_on'>On</span>.");
        }
    });
    
    
    // Countdown
    var note = $('#note'),
        ts = new Date(),
        newYear = true;
    
    var current_hours = ts.getHours();
    if(current_hours >= 16) {
        var tomorrow = ts.getDate()+1;
        ts.setDate(tomorrow);
    }
    ts.setHours(16);
    ts.setMinutes(0);
    ts.setSeconds(0);
    
    if((new Date()) > ts){
        ts = (new Date()).getTime() + 10*24*60*60*1000;
        newYear = false;
    }
    $('#countdown_show').countdown({
        timestamp	: ts,
        callback	: function(days, hours, minutes, seconds){

            var message = "";

            message += days + " day" + ( days==1 ? '':'s' ) + ", ";
            message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
            message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
            message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";

            if(newYear){
                message += "left until 16!";
            }
            else {
                message += "left to 10 days from now!";
            }
            note.html(message);
        }
    });
    $("#countdown").click(function() {
        $('#countdown_show').toggle();
        $('#countdown_hint').toggle();            
    });
    
        
	
	// HSV easteregg
	(function () {
	  var count = 0;
	  $('#beer_big').click(function () {
		count += 1;
		if (count == 10) {
			$('#toast_msg').html("Nur der HSV! <span class='icon fa-circle' style='color:blue;'></span> <span class='icon fa-circle' style='color:white;'></span> <span class='icon fa-circle' style='color:black;'></span>");
			$('.toast').fadeIn(400).delay(4000).fadeOut(400).css('background','red'); 
			$('#toast_progress').delay(400).animate({ width: '0', left: '0' }, 4000, 'swing').css('width','100%');
			count = 0;
		}
	  });
	})();

});


// Play Random Success
function playSuccessSound(){
	var success_sounds = ["success_sound1","success_sound2","success_sound3","success_sound4","success_sound5","success_sound6","success_sound7","success_sound8","success_sound9","success_sound10"];
	random_success_sound = success_sounds[Math.floor(Math.random() * success_sounds.length)];
	setTimeout(function(){
		//HTML5
		var success_sound = $("#"+random_success_sound+"")[0];
		success_sound.play();
        if (localStorage.getItem("kbvv_volume") === null) {
            success_sound.volume=1;
        }
        else {
            success_sound.volume=0;
        }
		//Android
		playAudio('file:///android_asset/www/sounds/'+random_success_sound+'.mp3');
	}, 3000);
}

// Play Random Fail
function playFailSound(){
	var fail_sounds = ["fail_sound1","fail_sound2","fail_sound3"];
	random_fail_sound = fail_sounds[Math.floor(Math.random() * fail_sounds.length)];
	setTimeout(function(){
		//HTML5
		var fail_sound = $("#"+random_fail_sound+"")[0];
		fail_sound.play();
        if (localStorage.getItem("kbvv_volume") === null) {
            fail_sound.volume=1;
        }
        else {
            fail_sound.volume=0;
        }
		//Android
		playAudio('file:///android_asset/www/sounds/'+random_fail_sound+'.mp3');
	}, 3000);
}

// Play audio
function playAudio(url) {
    // Play the audio file at url
    var my_media = new Media(url,
        // success callback
        function () {
            console.log("playAudio():Audio Success");
        },
        // error callback
        function (err) {
            console.log("playAudio():Audio Error: " + err);
        }
    );
    // Play audio
    my_media.play();
    // Check for Mute in localStorage
    if (localStorage.getItem("kbvv_volume") === null) {
        my_media.setVolume('1.0');
    }
    else { 
        my_media.setVolume('0.0');
    }
}


// Calendar
function calendar_events(location){
    
    var current_date = new Date();
    var current_year = current_date.getFullYear();
    var current_month = current_date.getMonth();
    var current_day = current_date.getDate();
    var current_hours = current_date.getHours();

    if(current_hours >= 16){
        var current_day = current_day+1;
        var cal_success_msg = "Top, du wirst morgen um 16 Uhr an dein Bierchen erinnert <span class='icon fa-check'></span>";
    }
    else {
        var cal_success_msg = "Top, du wirst heute um 16 Uhr an dein Bierchen erinnert <span class='icon fa-check'></span>";
    }
    
    var startDate = new Date(current_year,current_month,current_day,16,0,0,0,0);
    var endDate = new Date(current_year,current_month,current_day,16,10,0,0,0);
    var title = "Wohlverdientes Feierabend-Bier";
    if (typeof location === 'undefined') {
        var cal_location = "Kiez";
    }
    else {
        var cal_location = location;
    }
    var notes = "Denke daran regelmäßig mit der App 'Kein Bier vor vier' zu prüfen, ob du noch trinken darfst!";
    // making a toast msg
    var success = function(message) { 
		$('#toast_msg').html(cal_success_msg);
		$('.toast').fadeIn(400).delay(4000).fadeOut(400); 
		$('#toast_progress').delay(400).animate({ width: '0', left: '0' }, 4000, 'swing').css('width','100%');
		//alert(cal_success_msg);
	};
    var error = function(message) {
		$('#toast_msg').html("Error: " + message);
		$('.toast').fadeIn(400).delay(4000).fadeOut(400); 
		$('#toast_progress').delay(400).animate({ width: '0', left: '0' }, 4000, 'swing').css('width','100%');
		 // alert("Error: " + message); 
	};
//  window.plugins.calendar.createCalendar(calendarName,success,error);
    window.plugins.calendar.createEvent(title,cal_location,notes,startDate,endDate,success,error);
 }


// Instagram
var loadButton = document.getElementById('load-more');
var feed = new Instafeed({
    get: 'tagged',
    tagName: 'keinbiervorvier',
    clientId: '2e36754a64964f3f804e7cc20f00d93c',
    useHttp: true,
    template: '<img src="{{image}}" class="instagram_image box style1" />',
    resolution: 'low_resolution',
    limit: 2,

      // every time we load more, run this function
      after: function() {
        // disable button if no more results to load
        if (!this.hasNext()) {
          loadButton.setAttribute('disabled', 'disabled');
        }
      },
});

// bind the load more button
loadButton.addEventListener('click', function() {
  feed.next();
});


feed.run();


//change color and state for active Menu Items onScroll
$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 1) {
        $('article').each(function(i) {
            if ($(this).position().top <= windscroll + 53) {
                $('nav a.active').removeClass('active');
                $('nav a').eq(i).addClass('active');
            }
        });

    }

}).scroll();

//Eigene Werbung
function WerbeSlideSwitch() {
	var $active = $('#werbe_slideshow .werbe_slideshow_active');
	if ( $active.length == 0 ) $active = $('#werbe_slideshow .eigene_werbung:last');
	var $next =  $active.next().length ? $active.next()
			: $('#werbe_slideshow .eigene_werbung:first');
	$active.addClass('last-active');
	$next.css({opacity: 0.0}).addClass('werbe_slideshow_active').animate({opacity: 1.0}, 1000, function() {
		$active.removeClass('werbe_slideshow_active last-active');
	});
}

$(function() {
	setInterval( "WerbeSlideSwitch()", 5000 );
});
