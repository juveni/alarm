//Initialize function
var init = function () {
    // TODO:: Do your initialization job
    console.log("init() called");

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
            tizen.application.getCurrentApplication().exit();
    });
    
    function createAlarm() {
    	//tizen.alarm.removeAll();
		//var alarm = new tizen.AlarmRelative(tizen.alarm.PERIOD_MINUTE / 2, 2 * tizen.alarm.PERIOD_MINUTE);					
		//var appControl = new tizen.ApplicationControl("http://tizen.org/appcontrol/operation/view","http://www.tizen.org");					
		//tizen.alarm.add(alarm, "org.tizen.clock", appControl);
		//alert("Alarme criado com ID : "+alarm.id);
		/*
		try {						 			
		     var appControl = new tizen.ApplicationControl(
		                      "http://tizen.org/appcontrol/operation/create_content",
		                      null,
		                      "image/jpg",
		                      null);
		                      
		     var notificationDict = {
		                 content : "This is a simple notification.",
		                 iconPath : "images/image1.jpg",
		                 soundPath : "music/Over the horizon.mp3", 
		                 vibration : true, 
		                 appControl : appControl};
		      
		     var notification = new tizen.StatusNotification("SIMPLE", 
		                 "Hora de tomar água!", notificationDict);
		                      
		     tizen.notification.post(notification);
		} catch (err) {
		    alert(err.name + ": " + err.message);
		}
		*/
		
		
		var _notificationDict = {
			content : "Notificação de Teste.",
			iconPath : "images/image1.jpg"
		};
		
		var _notification = new tizen.StatusNotification("SIMPLE","Notificação", _notificationDict);
		tizen.notification.post(_notification);
											 
	}
};
$(document).ready(init);
