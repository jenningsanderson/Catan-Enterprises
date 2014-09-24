$(document).ready(function() {
	$('#full-width-header-graphic').bxSlider({
		auto: true,
		speed: 3000,
		height: 400,
		pager: false,
		adaptiveHeight: false,
		responsive: true,
		minSlides: 3,
		maxSlides: 5,
		slideWidth: 300,
		slideMargin: 0
	});

	//Make the site-header sticky
	$(".site-header").waypoint('sticky')

	
	//If subnavigation exists on the page, then add some logic to it:
	if( $(".sub-nav").length )  {

		//Hide the subnavigation
		$(".sub-nav").hide();

		$(".site-header").waypoint(function() {
			$(".sub-nav").toggle(1000);
		}, { offset: 150});

		//Now add the logic to each element in the list:
		$(".sub-nav-list-item").each(function( index ) {
  			
  			var link = $('a',this).attr('href');
  			var element = $(this)

  			$(link).waypoint(function(index){
  				$(".sub-nav-list-item").removeClass("active")
  				element.toggleClass('active')
  			},{offset: 150})

  			element.click(function(){
  				$('html,body').animate({scrollTop: $(link).offset().top-150}, 'medium');
  			})			
  		});
	}
});

