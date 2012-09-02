error = function(error){
	alert('code: '    + error.code    + '\n' +
	          'message: ' + error.message + '\n');
};

captureSuccess = function(mediaFiles){
	var i, path, len;
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
        path = mediaFiles[i].fullPath;
        if(i > 0)
        	$('#fotos').val($('#fotos').val() + '\n' + path);
        else
        	$('#fotos').val($(path);
    }
};

var geoSuccess = function(position) {
	$('#latitud').val($(position.coords.latitude);
	$('#longitud').val($(position.coords.longitude);
};

deviceready = function(){
	navigator.geolocation.getCurrentPosition(geoSuccess, error, { maximumAge: 3000, timeout: 10000, enableHighAccuracy: true });
	
	$('#tomar-foto').bind('click', function(event, ui){
		navigator.device.capture.captureImage(captureSuccess, error, {limit:2});
	});
}

$(document).bind('pageinit', function(){
	document.addEventListener('deviceready', deviceready, true);
});