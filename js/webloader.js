WebLoader = {};

WebLoader.loadFile = function(url, callback) {
	console.log("loadFile..."+url);
	var xhr = new XMLHttpRequest();	
	xhr.open("GET", url, true);
	xhr.responseType = "arraybuffer";

	xhr.onload = function () {
		var arrayBuffer = xhr.response; // 注意:不是oReq.responseText
		if (arrayBuffer) {
			//var byteArray = new Uint8Array(arrayBuffer);
			console.log(arrayBuffer);
			callback(arrayBuffer);
			return;
		}
		callback(null);
	};

	xhr.onprogress = function () {
		console.log('LOADING....', xhr.status);
	};

	xhr.send();
};

ButtonKey = {};

ButtonKey.init = function(sender, button, key){
	button.onmousedown = function(e){
		sender.sendKey(key, "down");
		e.preventDefault();
	};

	button.onmouseup = function(e){
		sender.sendKey(key, "up");
		e.preventDefault();
	};
};