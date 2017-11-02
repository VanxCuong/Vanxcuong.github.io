$(function() {
	var vitri=$('#exp').offset().top;
	console.log(vitri);
	$('.nutdichuyen').click(function(event) {
		$('body,html').animate({
			scrollTop:vitri
		},800);
	});
})