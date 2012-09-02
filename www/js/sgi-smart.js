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
	$('#tomar-foto').bind('click', function(event, ui){
		navigator.camera.getPicture(pictureSuccess, error, { sourceType: Camera.PictureSourceType.PHOTOLIBRARY, destinationType: Camera.DestinationType.FILE_URI });
	});
	$('#upload-info').bind('click', function(event, ui){
		
	});
};

$(document).bind('pageinit', function(){
	$.mobile.page.prototype.options.addBackBtn = true;
	document.addEventListener('deviceready', deviceready, false);
});