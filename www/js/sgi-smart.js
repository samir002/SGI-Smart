error = function(error){
	alert('code: '    + error.code    + '\n' +
	          'message: ' + error.message + '\n');
};

errorLog = function(error){
	console.log('code: '    + error.code    + '\n' +
	          'message: ' + error.message + '\n');
};

pictureSuccess = function(imagesrc){
	var fotos = $('#fotos');	
	$('<img />').attr('src', imagesrc).css('display','block').appendTo(fotos);
};

var geoSuccess = function(position) {
	$('#latitud').val(position.coords.latitude);
	$('#longitud').val(position.coords.longitude);
};

deviceready = function(){
	navigator.geolocation.watchPosition(geoSuccess, errorLog, { maximumAge: 3000, timeout: 15000, enableHighAccuracy: true });
	$('#tomar-foto').bind('tap', function(event, ui){
		navigator.camera.getPicture(pictureSuccess, error, { quality: 35, targetWidth: 720, destinationType: Camera.DestinationType.FILE_URI });
	}, false);
	$('#upload-info').bind('tap', function(event, ui){
		
	}, false);
};

$(document).bind('pageinit', function(){
	$.mobile.page.prototype.options.addBackBtn = true;
	document.addEventListener('deviceready', deviceready, false);
});