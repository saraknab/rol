/**
 * @author Guillermo Vargas
 */

$(document).ready(function() {
	$(".fancybox").fancybox({
		openEffect	: 'fade',
		closeEffect	: 'fade',
		width : 500,
		height : 300,
		nextEffect : 'fade',
		prevEffect : 'fade',
		helpers		: {
			title	: { type : 'inside' },
			buttons	: {}
		}
	});
});