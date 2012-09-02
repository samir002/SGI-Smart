error = function(error){
	alert('code: '    + error.code    + '\n' +
	          'message: ' + error.message + '\n');
}

captureSuccess = function(mediaFiles){
	var i, path, len;
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
        path = mediaFiles[i].fullPath;
        $('#fotos').append(path + '\n');
    }
}

var geoSuccess = function(position) {
	position.coords.latitude;
	position.coords.longitude;
};

deviceready = function(){
	navigator.geolocation.getCurrentPosition(geoSuccess, error);
	
	$('#tomar-foto').bind('click', function(event, ui){
		navigator.notification.alert('Iniciando captura de imágenes');
		navigator.device.capture.captureImage(captureSuccess, error, {limit:4});
	});
}

$(document).bind('pageinit', function(){
	document.addEventListener('deviceready', deviceready, true);
});