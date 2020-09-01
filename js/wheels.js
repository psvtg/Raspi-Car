var lastwheels = 1500;
var ay = 0;
if (window.DeviceMotionEvent == undefined) {
	document.getElementById("no").style.display = "block";
	document.getElementById("yes").style.display = "none";
}
else{
	window.ondevicemotion = function(event) {
		ay = event.accelerationIncludingGravity.y;
		wheels = Math.round(1500+ay*100);
		if ( ((wheels - lastwheels) >= 15) || ((wheels - lastwheels) <= -15)) {
			lastwheels = wheels;
			socket.emit('eventServer', wheels + "w");
			document.getElementById("go").innerHTML =  wheels;
		}
	}
}
