error = function(error){
	alert('code: '    + error.code    + '\n' +
	          'message: ' + error.message + '\n');
};

pictureSuccess = function(imageData){
	var fotos = $('#fotos');	
	var img = $('<img>').css('display','block').attr('src', 'data:image/jpeg;base64,' + imageData);
	fotos.append(img);
};

var geoSuccess = function(position) {
	$('#latitud').val(position.coords.latitude);
	$('#longitud').val(position.coords.longitude);
};

deviceready = function(){
	navigator.geolocation.watchPosition(geoSuccess, error, { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true });
	$('#tomar-foto').bind('click', function(event, ui){
		navigator.camera.getPicture(pictureSuccess, error, { quality: 25, destinationType: Camera.DestinationType.DATA_URL });
	});
};

$(document).bind('pageinit', function(){
	document.addEventListener('deviceready', deviceready, false);
});