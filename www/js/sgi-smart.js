error = function(error){
	alert(error);
};

errorLog = function(error){
	console.log('code: '    + error.code    + '\n' +
	          'message: ' + error.message + '\n');
};

pictureSuccess = function(imagesrc){
	var fotos = $('#fotos');	
	$('<img />').attr('src', imagesrc).css('display','block').css('width','100%').appendTo(fotos);
};

var geoSuccess = function(position) {
	$('#latitud').val(position.coords.latitude);
	$('#longitud').val(position.coords.longitude);
};

deviceready = function(){
	navigator.geolocation.watchPosition(geoSuccess, errorLog, { maximumAge: 3000, timeout: 15000, enableHighAccuracy: true });
	$('#tomar-foto').unbind('tap').bind('tap', function(event, ui){
		navigator.camera.getPicture(pictureSuccess, error, { quality: 70, targetWidth: 1024, targetHeight: 1024, destinationType: Camera.DestinationType.FILE_URI });
	});
	$('#upload-info').unbind('tap').bind('tap', function(event, ui){
		
	});
};

$(document).ready(function(){
	$.mobile.page.prototype.options.addBackBtn = true;
	document.addEventListener('deviceready', deviceready, false);
});