//Initialize function
var init = function () {
    // TODO:: Do your initialization job
    console.log("init() called");

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back") {
        	alert(tizen.application);
            tizen.application.getCurrentApplication().exit();
        }
    });
    

    notificationMe = function () {
    	try {
    		console.log(tizen.application);
    		window.tizen.alarm.removeAll();
    		var appControl = new window.tizen.ApplicationControl("http://tizen.org/appcontrol/operation/view");
    		var alarm = new window.tizen.AlarmAbsolute(new Date(2014, 1, 27, 10, 20));
    		window.tizen.alarm.add(alarm, tizen.application.getCurrentApplication().appInfo.id, appControl);
    		alert('Prepare to Tizen Alert');
    		alert(alarm.getNextScheduledDate()+" - "+window.tizen.alarm.getAll().length);
    	} catch(err) {
    		alert(err.name+" : "+err.message);
    	}
    }

};
$(document).ready(init);
