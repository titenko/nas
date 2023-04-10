$(document).ready(function() {
						   
	var hash = window.location.hash.substr(1);
	var href = $('.navbar a').each(function(){
		var href = $(this).attr('href');
		if(hash==href.substr(0,href.length-5)){
			var toLoad = hash+'.html #content';
			$('.blog-container').load(toLoad)
		}											
	});

	$('.navbar a').click(function(){
								  
		var toLoad = $(this).attr('href')+' .blog-container';
		$('.blog-container').hide('fast',loadContent);
		$('#load').remove();
		$('#wrapper').append('<span id="load">LOADING...</span>');
		$('#load').fadeIn('normal');
		window.location.hash = $(this).attr('href').substr(0,$(this).attr('href').length-5);
		function loadContent() {
			$('.blog-container').load(toLoad,'',showNewContent())
		}
		function showNewContent() {
			$('.blog-container').show('normal',hideLoader());
		}
		function hideLoader() {
			$('#load').fadeOut('normal');
		}
		return false;
		
	});

});
