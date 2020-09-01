var isAndroid = /(android)/i.test(navigator.userAgent);

if(isAndroid)
{
    if(screen.width < screen.height){
        //portrait mode on Android
        document.getElementById("portrait").style.display="block";
        document.getElementById("landscape").style.display="none";

    }
    else{
        //portrait mode on Android
        document.getElementById("portrait").style.display="none";
        document.getElementById("landscape").style.display="block";

    }
}
else {
    if(window.orientation == 0){
        //portrait mode iOS and other devices
        document.getElementById("portrait").style.display="block";
        document.getElementById("landscape").style.display="none";
    }
        else{
        //portrait mode on Android
        document.getElementById("portrait").style.display="none";
        document.getElementById("landscape").style.display="block";

    }
}

var supportsOrientationChange = "onorientationchange" in window,
    orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

window.addEventListener(orientationEvent, function() {

if(isAndroid) {
    if(screen.width < screen.height){
        //portrait mode on Android
        document.getElementById("portrait").style.display="block";
        document.getElementById("landscape").style.display="none";

    }
    else{
        //portrait mode on Android
        document.getElementById("portrait").style.display="none";
        document.getElementById("landscape").style.display="block";

    }
} 
else {
    if(window.orientation == 0){
        //portrait mode iOS and other devices
        document.getElementById("portrait").style.display="block";
        document.getElementById("landscape").style.display="none";
    }
        else{
        //portrait mode on Android
        document.getElementById("portrait").style.display="none";
        document.getElementById("landscape").style.display="block";
	}
}

}, false);