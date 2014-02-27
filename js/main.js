//Initialize function
var init = function () {
    // TODO:: Do your initialization job
    console.log("init() called");

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
            tizen.application.getCurrentApplication().exit();
    });
};
$(document).ready(init);

function notificationMe() {
	/*
	try {
		var appControl = new tizen.ApplicationControl(
				"http://tizen.org/appcontrol/operation/view","http://tizen.org");
		var notificationDict = {
				content : "Está na hora de você tomar sua água.", 
				vibration : true,
				appControl : appControl
		};

		var notification = new tizen.StatusNotification("SIMPLE", 
				"Hora de tomar água!", notificationDict);
		
		tizen.notification.removeAll();
		tizen.notification.post(notification);
	}catch (err) {
		console.log (err.name + ": " + err.message);
	}
	
	try {
		var notifications = tizen.notification.getAll();
		if( notifications.length > 0){
			var myId = notifications[0].id;
			var myNotification = tizen.notification.get(myId);
			console.log(myNotification);

			$("#notification").empty();
			var text =  "<p style='color: white'><b>"+myNotification.title+"</b></p>";
				text += "<p style='color: white'>"+myNotification.content+"</p>";
			
			$("#notification").html(text);
			$("#notification").show(300);
			
		}
	}catch (err) {
		console.log (err.name + ": " + err.message);
	}
	*/
	try {
		tizen.alarm.removeAll();
		//var alarm = new tizen.AlarmRelative(5);
		var appControl = new tizen.ApplicationControl("http://tizen.org/appcontrol/operation/view");
		var alarm = new tizen.AlarmAbsolute(new Date(2014, 1, 27, 9, 38));
		tizen.alarm.add(alarm, tizen.application.getCurrentApplication().appInfo.id, appControl);	
		alert(alarm.getNextScheduledDate()+" - "+tizen.alarm.getAll().length);
	} catch(err) {
		console.log(err);
	}
}
