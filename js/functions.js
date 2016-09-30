/**!
 * resize only width
 * */
var resizeByWidth = true;

var prevWidth = -1;
$(window).resize(function () {
	var currentWidth = $('body').outerWidth();
	resizeByWidth = prevWidth != currentWidth;
	if(resizeByWidth){
		$(window).trigger('resizeByWidth');
		prevWidth = currentWidth;
	}
});
/*resize only width end*/

/**!
 * device detected
 * */
var DESKTOP = device.desktop();
//console.log('DESKTOP: ', DESKTOP);
var MOBILE = device.mobile();
//console.log('MOBILE: ', MOBILE);
var TABLET = device.tablet();
//console.log('MOBILE: ', MOBILE);
/*device detected end*/

/**!
 *  placeholder
 *  */
function placeholderInit(){
	$('[placeholder]').placeholder();
}
/*placeholder end*/

/**!
 * print
 * */
function printShow() {
	$('.view-print').on('click', function (e) {
		e.preventDefault();
		window.print();
	})
}
/*print end*/

/**!
 * sliders
 * */
function slidersInit() {
	//visual slider
	var $bannerSliders = $('.banners-slider');

	if($bannerSliders.length) {
		$bannerSliders.each(function() {
			var $currentSlider = $(this);

			$currentSlider.slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				// infinite: true,
				dots: true,
				arrows: false
			});
		});
	}
}
/*sliders end*/

/**!
 * equal height main blocks
 * */
function equalHeightMainBlocks() {
	$(window).on('load resize', function () {
		var $equalElement = $(".equal-element-js");

		if ( !$equalElement.length ) return false;

		imagesLoaded($equalElement, function () {
			if ($('.sidebar').outerHeight(true) > $('.wrapper').outerHeight(true)) {
				var amount = Math.max.apply(Math, $equalElement.map(function () {
					return $(this).outerHeight(true);
				}).get());

				$equalElement.css("cssText", "height: " + amount + "px !important;");
			}
		});
	})
}
/*equal height main blocks end*/

/**!
 * footer at bottom
 * */
function footerBottom(){
	var $footer = $('.footer');
	if($footer.length){
		var $tplSpacer = $('<div class="spacer" />');
		$tplSpacer.insertAfter($('.main'));
		$(window).on('load resizeByWidth', function () {
			var footerOuterHeight = $footer.outerHeight();
			$footer.css({
				'margin-top': -footerOuterHeight
			});
			$tplSpacer.css({
				'height': footerOuterHeight
			});
		})
	}
}
/*footer at bottom end*/

/** ready/load/resize document **/

$(document).ready(function(){
	placeholderInit();
	printShow();
	slidersInit();

	equalHeightMainBlocks();
	footerBottom();
});