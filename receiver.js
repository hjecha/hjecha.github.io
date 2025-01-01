
socket.addEventListener('message', function(e) {
	var msg = JSON.parse(e.data);
	if(msg.title === 'GivePlayerId') PlayerId = msg.id;
	else NowScene.Recv(msg);
});
