var socket = io('http://192.168.1.78:8000');
socket.emit('eventConnection', ("Подключился клиент: " + IP + " - " + Date()));