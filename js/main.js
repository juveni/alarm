//Initialize function
var init = function () {
    // TODO:: Do your initialization job
    console.log("init() called");

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
            tizen.application.getCurrentApplication().exit();
    });
    

    notificationMe = function () {
    	try {
    		if(tizen)
    			alert("Tem Tizen");
    		if(tizen.alarm)
    			alert("Tem tizen alarm");
    		if(tizen.ApplicationControl)
    			alert("Tem tizen application Control");
    		if(window.tizen)
    			alert("Tem window Tizen");
    		if(window.tizen.alarm)
    			alert("Tem window tizen alarm");
    		if(window.tizen.ApplicationControl)
    			alert("Tem window tizen application Control");
    		//window.tizen.alarm.removeAll();
    		//var alarm = new tizen.AlarmRelative(5);
    		var appControl = new window.tizen.ApplicationControl("http://tizen.org/appcontrol/operation/view");
    		var alarm = new window.tizen.AlarmAbsolute(new Date(2014, 1, 27, 10, 00));
    		window.tizen.alarm.add(alarm, tizen.application.getCurrentApplication().appInfo.id, appControl);
    		alert('Prepare to Tizen Alert');
    		alert(alarm.getNextScheduledDate()+" - "+window.tizen.alarm.getAll().length);
    	} catch(err) {
    		alert(err.name+" : "+err.message);
    	}
    }

};
$(document).ready(init);
