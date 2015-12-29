$(document).ready(function(){
	var site = $('#nav-site').val();
	var navs = $('.nav-li-main');
	$.each(navs, function(i, val) {
		if ($(val).hasClass(site)) {
			$(val).addClass('active');
			return;
		}
	});
});