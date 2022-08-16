/* !accordion flag --------------------------------------------------- */
$(function() {
	var $accBtn = $('.collapse-toggle'),
		$accContents = $('.collapse-hidden');

	$accContents.hide();
	$accBtn.each(function() {
		var flag = "close";
		$(this).click(function(e) {
			e.preventDefault();
			$(this).prev().slideToggle();

			if (flag == "close"){
				$(this).text("Close");
				flag = "open";
			}
			else {
				$(this).text("More");
				flag = "close";
			}

		});
	});
});