document.querySelector('#go').addEventListener('touchstart', function(){
	document.querySelector('#go').style.opacity = '0.2';
	socket.emit('eventServer', "forward");
    
});
document.querySelector('#go').addEventListener('touchend', function(){
	document.querySelector('#go').style.opacity = '1';
	socket.emit('eventServer', "stop");
});
document.querySelector('#stop').addEventListener('touchstart', function(){
	document.querySelector('#stop').style.opacity = '0.2';
	socket.emit('eventServer', "backward");
});
document.querySelector('#stop').addEventListener('touchend', function(){
	document.querySelector('#stop').style.opacity = '1';
	socket.emit('eventServer', "stop");
});