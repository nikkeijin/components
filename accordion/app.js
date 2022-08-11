$(document).ready(function(){
	
	$(".accordion .accordion-body").hide();

	$(".accordion .accordion-head").click(function(){
        
		$(this).next(".accordion-body").slideToggle("slow")
		.siblings(".accordion-body:visible").slideUp("slow");

		$(this).toggleClass("active");
		$(this).siblings(".accordion-head").removeClass("active");
        
	});

});