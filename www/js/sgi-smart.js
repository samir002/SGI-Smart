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

geoSuccess = function(position) {
	$('#latitud').val(position.coords.latitude);
	$('#longitud').val(position.coords.longitude);
};

showMenu = function(){
	$.mobile.changePage($('#config'));
}

deviceready = function(){
	document.addEventListener("menubutton", showMenu, false);
	
	navigator.geolocation.watchPosition(geoSuccess, errorLog, { maximumAge: 3000, timeout: 15000, enableHighAccuracy: true });
	$('#tomar-foto').unbind('tap').bind('tap', function(event, ui){
		navigator.camera.getPicture(pictureSuccess, error, { quality: 75, targetWidth: 1024, targetHeight: 1024, destinationType: Camera.DestinationType.FILE_URI });
	});
	$('#reset-info').unbind('tap').bind('tap', function(event, ui){
		$(".visita").each(function(index){
			$(this)[0].selectedIndex = 0;
			$(this).selectmenu("refresh");
		});
		$('#fotos').empty();
	});
	$('#upload-info').unbind('tap').bind('tap', function(event, ui){
		
	});
};

$(document).ready(function(){
	
	str_pad = function (input, pad_length, pad_string, pad_type) {
	    var half = '', pad_to_go;
	 
	    var str_pad_repeater = function (s, len) {
	        var collect = '', i;
	 
	        while (collect.length < len) {
	            collect += s;
	        }
	        collect = collect.substr(0, len);
	 
	        return collect;
	    };
	 
	    input += '';
	    pad_string = pad_string !== undefined ? pad_string : ' ';
	 
	    if (pad_type != 'STR_PAD_LEFT' && pad_type != 'STR_PAD_RIGHT' && pad_type != 'STR_PAD_BOTH') {
	        pad_type = 'STR_PAD_RIGHT';
	    }
	    if ((pad_to_go = pad_length - input.length) > 0) {
	        if (pad_type == 'STR_PAD_LEFT') {
	            input = str_pad_repeater(pad_string, pad_to_go) + input;
	        } else if (pad_type == 'STR_PAD_RIGHT') {
	            input = input + str_pad_repeater(pad_string, pad_to_go);
	        } else if (pad_type == 'STR_PAD_BOTH') {
	            half = str_pad_repeater(pad_string, Math.ceil(pad_to_go / 2));
	            input = half + input + half;
	            input = input.substr(0, pad_length);
	        }
	    }
	 
	    return input;
	}
	
	$.support.cors = true;
	$.mobile.allowCrossDomainPages = true;
	$.mobile.page.prototype.options.addBackBtn = true;
	
	var selectchoiceday = $('#select-choice-day');
	for(var i = 1; i <= 31; i++){
		selectchoiceday.append("<option value='" + i + "'>" + str_pad(i, 2, '0', 'STR_PAD_LEFT') + "</option>");
	}
	var year = new Date().getFullYear();
	var selectchoiceyear = $('#select-choice-year');
	for(var i = year; i <= year + 1; i++){
		selectchoiceyear.append("<option value='" + i + "'>" + i + "</option>");
	}
	var selectchoicehour = $('#select-choice-hour');
	for(var i = 8; i <= 20; i++){
		selectchoicehour.append("<option value='" + i + "'>" + str_pad(i, 2, '0', 'STR_PAD_LEFT') + "</option>");
	}
	var selectchoiceminute = $('#select-choice-minute');
	for(var i = 0; i <= 50; i+=10){
		selectchoiceminute.append("<option value='" + i + "'>" + str_pad(i, 2, '0', 'STR_PAD_LEFT') + "</option>");
	}
	
	document.addEventListener('deviceready', deviceready, false);
});