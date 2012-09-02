error = function(error){
	alert('code: '    + error.code    + '\n' +
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
	navigator.geolocation.watchPosition(geoSuccess, error, { maximumAge: 3000, timeout: 15000, enableHighAccuracy: true });
	$('#tomar-foto').bind('click', function(event, ui){
		navigator.camera.getPicture(pictureSuccess, error, { quality: 25, destinationType: Camera.DestinationType.FILE_URI });
	});
};

$(document).bind('pageinit', function(){
	document.addEventListener('deviceready', deviceready, false);
});