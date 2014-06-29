function getEvent(e){
	var eventObj = ev?e:window.event;
	return eventObj;
}
var randomColor = '#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).slice(-6);