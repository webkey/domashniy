/**!
 * resize only width
 * */
var resizeByWidth = true;

var prevWidth = -1;
$(window).on('debouncedresize', function () {
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
 *  multiselect init
 * */
/*! add ui position add class */
function addPositionClass(position, feedback, obj){
	removePositionClass(obj);
	obj.css( position );
	obj
		.addClass( feedback.vertical )
		.addClass( feedback.horizontal );
}

/*! add ui position remove class */
function removePositionClass(obj){
	obj.removeClass('top');
	obj.removeClass('bottom');
	obj.removeClass('center');
	obj.removeClass('left');
	obj.removeClass('right');
}

function customSelect(select){
	if ( select.length ) {
		selectArray = new Array();
		select.each(function(selectIndex, selectItem){
			var placeholderText = $(selectItem).attr('data-placeholder');
			var flag = true;
			if ( placeholderText === undefined ) {
				placeholderText = $(selectItem).find(':selected').html();
				flag = false;
			}
			var classes = $(selectItem).attr('class');
			selectArray[selectIndex] = $(selectItem).multiselect({
				header: false,
				height: 'auto',
				minWidth: 50,
				selectedList: 1,
				classes: classes,
				multiple: false,
				noneSelectedText: placeholderText,
				show: ['fade', 100],
				hide: ['fade', 100],
				create: function(event){
					var select = $(this);
					var button = $(this).multiselect('getButton');
					var widget = $(this).multiselect('widget');
					button.wrapInner('<span class="select-inner"></span>');
					button.find('.ui-icon').append('<i class="arrow-select"></i>')
						.siblings('span').addClass('select-text');
					widget.find('.ui-multiselect-checkboxes li:last')
						.addClass('last')
						.siblings().removeClass('last');
					if ( flag ) {
						$(selectItem).multiselect('uncheckAll');
						$(selectItem)
							.multiselect('widget')
							.find('.ui-state-active')
							.removeClass('ui-state-active')
							.find('input')
							.removeAttr('checked');
					}
				},
				selectedText: function(number, total, checked){
					var checkedText = checked[0].title;
					return checkedText;
				},
				position: {
					my: 'left top',
					at: 'left bottom',
					using: function( position, feedback ) {
						addPositionClass(position, feedback, $(this));
					}
				}
			});
		});
		$(window).resize(selectResize);
	}
}

function selectResize(){
	if ( selectArray.length ) {
		$.each(selectArray, function(i, el){
			var checked = $(el).multiselect('getChecked');
			var flag = true;
			if ( !checked.length ) {
				flag = false
			}
			$(el).multiselect('refresh');
			if ( !flag ) {
				$(el).multiselect('uncheckAll');
				$(el)
					.multiselect('widget')
					.find('.ui-state-active')
					.removeClass('ui-state-active')
					.find('input')
					.removeAttr('checked');
			}
			$(el).multiselect('close');
		});
	}
}
/* multiselect init end */

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
 * main navigation
 * */
(function ($) {
	// external js:
	// 1) TweetMax VERSION: 1.19.0 (widgets.js);
	// 2) device.js 0.2.7 (widgets.js);
	// 3) resizeByWidth (resize only width);
	var MainNavigation = function (settings) {
		var options = $.extend({
			mainContainer: 'html',
			navContainer: null,
			navMenu: '.nav-list',
			btnMenu: '.btn-menu',
			navMenuItem: '.nav-list > li',
			navMenuAnchor: 'a',
			navDropMenu: '.js-nav-drop',
			staggerItems: null,
			overlayClass: '.nav-overlay',
			overlayAppend: 'body',
			overlayAlpha: 0.8,
			classNoClickDrop: '.no-click', // Класс, при наличии которого дроп не буте открываться по клику
			classReturn: null,
			overlayBoolean: false,
			animationSpeed: 300,
			animationSpeedOverlay: null,
			minWidthItem: 100
		},settings || {});

		var self = this,
			container = $(options.navContainer),
			_animateSpeed = options.animationSpeed;

		self.options = options;
		self.$mainContainer = $(options.mainContainer);            // Основной контейнер дом дерева. по умолчанию <html></html>
		self.$navMenu = $(options.navMenu);
		self.$btnMenu = $(options.btnMenu);                        // Кнопка открытия/закрытия меню для моб. верси;
		self.$navContainer = container;
		self.$navMenuItem = $(options.navMenuItem, container);     // Пункты навигации;
		self.$navMenuAnchor = $(options.navMenuAnchor, container); // Элемент, по которому производится событие (клик);
		self.$navDropMenu = $(options.navDropMenu, container);     // Дроп-меню всех уровней;
		self.$staggerItems = options.staggerItems || self.$navMenuItem;  //Элементы в стеке, к которым применяется анимация. По умолчанию navMenuItem;

		self._animateSpeed = _animateSpeed;
		self._classNoClick = options.classNoClickDrop;

		// overlay
		self._overlayBoolean = options.overlayBoolean;            // Добавить оверлей (по-умолчанию == false). Если не true, то не будет работать по клику вне навигации;
		self._overlayClass = options.overlayClass;                // Класс оверлея;
		self.overlayAppend = options.overlayAppend;               // Элемент ДОМ, вконец которого добавится оверлей, по умолчанию <body></body>;
		self.$overlay = $('<div class="' + self._overlayClass.substring(1) + '"></div>'); // Темплейт оверлея;
		self._overlayAlpha = options.overlayAlpha;
		self._animateSpeedOverlay = options.animationSpeedOverlay || _animateSpeed;
		self._minWidthItem = options.minWidthItem;

		self.desktop = device.desktop();

		self.modifiers = {
			active: 'active',
			opened: 'nav-opened',
			openStart: 'nav-opened-start'
		};

		self.createOverlay();
		self.toggleNav();
		self.clearStyles();
	};

	MainNavigation.prototype.navIsOpened = false;

	// init tween animation
	MainNavigation.prototype.overlayTween = new TimelineMax({paused: true});

	// overlay append to "overlayAppend"
	MainNavigation.prototype.createOverlay = function () {
		var self = this;
		if (!self._overlayBoolean) return false;

		var $overlay = self.$overlay;
		$overlay.appendTo(self.overlayAppend);

		TweenMax.set($overlay, {autoAlpha: 0});

		self.overlayTween.to($overlay, self._animateSpeedOverlay / 1000, {autoAlpha: self._overlayAlpha});
	};

	// show/hide overlay
	MainNavigation.prototype.showOverlay = function (close) {
		var self = this;
		if (!self._overlayBoolean) return false;

		var overlayTween = self.overlayTween;

		if (close === false) {
			overlayTween.reverse();
			return false;
		}

		if (overlayTween.progress() != 0 && !overlayTween.reversed()) {
			overlayTween.reverse();
			return false;
		}

		overlayTween.play();
	};

	// switch nav
	MainNavigation.prototype.toggleNav = function () {
		var self = this,
			$buttonMenu = self.$btnMenu;

		self.preparationAnimation();

		$buttonMenu.on('click', function (e) {
			if (self.navIsOpened) {
				self.closeNav();
			} else {
				self.openNav();
			}

			e.preventDefault();
		});

		$(document).on('click', self._overlayClass, function () {
			self.closeNav();
		});
	};

	// open nav
	MainNavigation.prototype.openNav = function() {
		var self = this,
			$html = self.$mainContainer,
			$navContainer = self.$navContainer,
			$buttonMenu = self.$btnMenu,
			_animationSpeed = self._animateSpeedOverlay,
			$staggerItems = self.$staggerItems;

		$buttonMenu.addClass(self.modifiers.active);
		$html.addClass(self.modifiers.openStart);

		$navContainer.css({
			'-webkit-transition-duration': '0s',
			'transition-duration': '0s'
		});

		var navTween = new TimelineMax();

		navTween
			.to($navContainer, _animationSpeed / 1000, {
				yPercent: 0, onComplete: function () {
					$html.addClass(self.modifiers.opened);
					TweenMax.staggerTo($staggerItems, 0.3, {autoAlpha:1, scale:1, ease:Cubic.easeInOut}, 0.08);
				}, ease:Cubic.easeInOut
			});

		self.showOverlay();

		self.navIsOpened = true;
	};

	// close nav
	MainNavigation.prototype.closeNav = function() {
		var self = this,
			$html = self.$mainContainer,
			$navContainer = self.$navContainer,
			$buttonMenu = self.$btnMenu,
			_animationSpeed = self._animateSpeedOverlay;

		$html.removeClass(self.modifiers.opened);
		$html.removeClass(self.modifiers.openStart);
		$buttonMenu.removeClass(self.modifiers.active);

		self.showOverlay(false);

		TweenMax.to($navContainer, _animationSpeed / 1000, {
			yPercent: 120, onComplete: function () {
				self.preparationAnimation();
			}
		});

		self.navIsOpened = false;
	};

	// preparation element before animation
	MainNavigation.prototype.preparationAnimation = function() {
		var self = this,
			$navContainer = self.$navContainer,
			$staggerItems = self.$staggerItems,
			$btnMenu = self.$btnMenu;

		if ($(window).outerWidth() < 1280) {
			TweenMax.set($navContainer, {yPercent: 120, onComplete: function () {
				$navContainer.show(0);
			}});
			TweenMax.set($staggerItems, {autoAlpha: 0, scale: 0.8});
		}
	};

	// clearing inline styles
	MainNavigation.prototype.clearStyles = function() {
		var self = this,
			$btnMenu = self.$btnMenu,
			$navContainer = self.$navContainer,
			$staggerItems = self.$staggerItems;

		//clear on horizontal resize
		$(window).on('resizeByWidth', function () {
			if (!$btnMenu.is(':visible')) {
				$navContainer.attr('style', '');
				$staggerItems.attr('style', '');
			} else {
				self.closeNav();
			}
		});
	};

	window.MainNavigation = MainNavigation;

}(jQuery));

function mainNavigationInit(){
	var $container = $('.nav');
	if(!$container.length){ return; }
	new MainNavigation({
		navContainer: $container,
		overlayAppend: '.wrapper',
		animationSpeed: 300,
		overlayBoolean: true,
		overlayAlpha: 0.75
	});
}
/*main navigation end*/

/**
 * add class on scroll to top
 * */
function headerShow(){
	// external js:
	// 1) resizeByWidth (resize only width);

	var $page = $('html'),
		minScrollTop = $('.header').outerHeight();

	var previousScrollTop = $(window).scrollTop();
	$(window).on('load scroll resizeByWidth', function () {
		var currentScrollTop = $(window).scrollTop();
		var showHeaderPanel = currentScrollTop < minScrollTop || currentScrollTop < previousScrollTop;

		$page.toggleClass('header-show', showHeaderPanel);

		previousScrollTop = currentScrollTop;
	});
}
/*add class on scroll to top end*/

/**
 * add class on scroll to top
 * */
function pageIsScrolled(){
	// external js:
	// 1) resizeByWidth (resize only width);

	var $page = $('html'),
		minScrollTop = $('.header').outerHeight();

	$(window).on('load scroll resizeByWidth', function () {
		var currentScrollTop = $(window).scrollTop();
		var showHeaderPanel = (currentScrollTop >= minScrollTop);

		$page.toggleClass('page-is-scrolled', showHeaderPanel);
	});
}
/*add class on scroll to top end*/

/**!
 * sliders
 * */
function slidersInit() {
	//banners slider
	var $bannerSliders = $('.banners-slider');

	if($bannerSliders.length) {
		$bannerSliders.each(function() {
			var $currentSlider = $(this);

			$currentSlider.slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true,
				arrows: false,
				adaptiveHeight: false,
				responsive: [
					{
						breakpoint: 980,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 4,
							adaptiveHeight: false
						}
					}, {
						breakpoint: 900,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 3
						}
					}, {
						breakpoint: 640,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2
						}
					}, {
						breakpoint: 480,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
				]
			});
		});
	}

	//promo slider
	var $promoSliders = $('.promo-slider');

	if($promoSliders.length) {
		$promoSliders.each(function() {
			var $currentSlider = $(this);

			$currentSlider.slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true,
				arrows: true
			});
		});
	}

	//shares slider
	var $sharesSliders = $('.shares-slider');

	if($sharesSliders.length) {
		$sharesSliders.each(function() {
			var $currentSlider = $(this);

			$currentSlider.slick({
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: false,
				arrows: true,
				responsive: [
					{
						breakpoint: 1280,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2
						}
					},
					{
						breakpoint: 640,
						settings: {
							autoplay: false,
							arrows: false,
							dots: false,
							draggable: false,
							swipe: false,
							touchMove: false
						}
					}
				]
			});
		});
	}
}
/*sliders end*/

/**
 * popup initial
 * */
function popupInitial(){
	$('.popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		tClose: 'Закрыть (Esc)',
		tLoading: 'Загрузка...',

		fixedContentPos: true,
		callbacks:{
			beforeClose: function() {
				$('.mfp-opened').removeClass('mfp-opened');
			}
		}
	});

	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',
		mainClass: 'mfp-fade',
		fixedContentPos: true,

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

	$('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: true,
		fixedContentPos: true,
		mainClass: 'mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});
}
/*popup initial end*/

/**!
 * accordion
 * */
(function ($) {
	var JsAccordion = function (settings) {
		var options = $.extend({
			accordionContainer: null,
			accordionItem: null,
			accordionContent: null,
			accordionHeader: 'h3',
			accordionWrap: null,
			indexInit: 0, // if "false", all accordion are closed
			animateSpeed: 300,
			scrollToTop: false, // if true, scroll to current accordion;
			clickOutside: false // if true, close current accordion's content on click outside accordion;
		}, settings || {});

		this.options = options;
		var container = $(options.accordionContainer);
		this.$accordionContainer = container;
		this.$accordionItem = $(options.accordionItem, container);
		this.$accordionHeader = $(options.accordionHeader, container);
		this.$accordionContent = options.accordionContent ?
			$(options.accordionContent, container) :
			this.$accordionHeader.next();

		this.scrollToTop = options.scrollToTop;
		this.clickOutside = options.clickOutside;
		this._indexInit = options.indexInit;
		this._animateSpeed = options.animateSpeed;

		this.modifiers = {
			activeAccordion: 'js-accordion_active',
			activeHeader: 'js-accordion__header_active',
			activeContent: 'js-accordion__content_active'
		};

		this.bindEvents();
		this.activeAccordion();
	};

	// it takes values current index of accordion's content
	JsAccordion.prototype.indexActive = 0;

	// it takes values false or current index of accordion's content
	JsAccordion.prototype.activeState = false;

	JsAccordion.prototype.bindEvents = function () {
		var self = this,
			$accordionContent = self.$accordionContent,
			animateSpeed = self._animateSpeed;

		self.$accordionHeader.on('click', function (e) {
			e.preventDefault();

			var $currentItem = $(this).closest(self.$accordionItem),
				$currentItemContent = $currentItem.find($accordionContent),
				currentIndex = $currentItem.index();

			if($accordionContent.is(':animated')) return false;

			self.indexActive = currentIndex;

			if(self.activeState === currentIndex){
				self.closeAccordionContent();
				return;
			}

			self.closeAccordionContent();

			$currentItemContent.slideToggle(animateSpeed, function () {
				self.scrollPosition();
			});

			e.stopPropagation();
		});

		$(document).click(function () {
			if (self.clickOutside) {
				self.closeAccordionContent();
			}
		});

		$accordionContent.on('click', function(e){
			e.stopPropagation();
		});
	};

	// show current accordion's content
	JsAccordion.prototype.activeAccordion = function () {
		var self = this;
		var indexInit = self._indexInit;

		if ( indexInit === false ) return false;

		self.$accordionItem.eq(indexInit).find(self.$accordionContent).fadeIn('slow');

		self.indexActive = indexInit;
		self.toggleActiveClass();
	};

	// close accordion's content
	JsAccordion.prototype.closeAccordionContent = function () {
		var self = this;
		self.$accordionContent.slideUp(self._animateSpeed);
		self.toggleActiveClass();
	};

	// change active class
	JsAccordion.prototype.toggleActiveClass = function () {
		var self = this,
			activeAccordion = self.modifiers.activeAccordion,
			activeHeader = self.modifiers.activeHeader,
			activeContent = self.modifiers.activeContent,
			$accordionItem = self.$accordionItem,
			$accordionHeader = self.$accordionHeader,
			$accordionContent = self.$accordionContent,
			indexActive = self.indexActive,
			activeState = self.activeState;

		$accordionItem.removeClass(activeAccordion);
		$accordionHeader.removeClass(activeHeader);
		$accordionContent.removeClass(activeContent);

		if (indexActive !== activeState) {
			$accordionItem.eq(indexActive).addClass(activeAccordion);
			$accordionHeader.eq(indexActive).addClass(activeHeader);
			$accordionContent.eq(indexActive).addClass(activeContent);
			self.activeState = indexActive;

			// console.log("indexActive1: ", self.indexActive);
			// console.log("activeState1: ", self.activeState);
			return false;
		}

		self.activeState = false;

		// console.log("indexActive2: ", self.indexActive);
		// console.log("activeState2: ", self.activeState);
	};

	JsAccordion.prototype.scrollPosition = function () {
		var self = this;
		if (self.scrollToTop) {
			$('html, body').animate({ scrollTop: self.$accordionItem.eq(self.indexActive).offset().top }, self._animateSpeed);
		}
	};

	window.JsAccordion = JsAccordion;
}(jQuery));
/*accordion end*/

/**
 * default accordion
 * */
function jsAccordion() {
	// accordion default
	var $accordion = $('.accordion-container');
	if($accordion.length){
		$accordion.each(function () {
			new JsAccordion({
				accordionContainer: $(this),
				accordionItem: '.accordion-content',
				accordionHeader: '.accordion-header',
				accordionContent: '.accordion-panel',
				animateSpeed: 300
			});
		})
	}
}
/*default accordion end*/

/**
 * shops accordion
 * */
function shopsAccordion() {
	var $container = $('.shops-item');

	if ($container.length) {

		var $hand = $('.shops-item__title a'),
			$content = $('.shops-item__extend');

		$hand.on('click', function (e) {
			e.preventDefault();
			$content.slideUp('fast');

			if ( $(this).hasClass('active') ) {

				$hand.removeClass('active');

				return false;

			}

			$(this).addClass('active').closest($container).find($content).stop().slideDown('fast');
		})
	}
}
/*shops accordion*/

/**
 * file input
 * */
function fileInput() {
	$('.upload-file').each(function () {
		$(this).filer({
			showThumbs: true,
			addMore: true,
			allowDuplicates: false
		});
	});
}
/*file input end end*/

/**
 * tab switcher
 * */
function tabSwitcher() {
	// external js:
	// 1) TweetMax VERSION: 1.19.0 (widgets.js);
	// 2) resizeByWidth (resize only width);

	var $main = $('.main');

	var $container = $('.js-tab-container');

	if ( !$container.length ) return false;

	if($main.length){
		var $anchor = $('.js-tab-anchor'),
			$content = $('.js-tab-content'),
			activeClass = 'active',
			animationSpeed = 0,
			animationHeightSpeed = 0.08;

		$.each($main, function () {
			var $this = $(this),
				$thisAnchor = $this.find($anchor),
				$thisContainer = $this.find($container),
				$thisContent = $this.find($content),
				initialDataAtr = $thisAnchor.eq(0).data('for'),
				activeDataAtr = false;

			// prepare traffic content
			function prepareTrafficContent() {
				$thisContainer.css({
					'display': 'block',
					'position': 'relative',
					'overflow': 'hidden'
				});

				$thisContent.css({
					'display': 'block',
					'position': 'absolute',
					'left': 0,
					'right': 0,
					'width': '100%',
					'z-index': -1
				});

				switchContent();
			}

			prepareTrafficContent();

			// toggle content
			$thisAnchor.on('click', function (e) {
				e.preventDefault();

				var $cur = $(this),
					dataFor = $cur.data('for');

				if (activeDataAtr === dataFor) return false;

				initialDataAtr = dataFor;

				switchContent();
			});

			// switch content
			function switchContent() {
				toggleContent();
				changeHeightContainer();
				toggleActiveClass();
			}

			// show active content and hide other
			function toggleContent() {

				$thisContainer.css('height', $thisContainer.outerHeight());

				$thisContent.css({
					'position': 'absolute',
					'left': 0,
					'right': 0
				});

				TweenMax.set($thisContent, {
					autoAlpha: 0,
					'z-index': -1
				});

				var $initialContent = $thisContent.filter('[data-id="' + initialDataAtr + '"]');

				$initialContent.css('z-index', 2);

				TweenMax.to($initialContent, animationSpeed, {
					autoAlpha: 1
				});
			}

			// change container's height
			function changeHeightContainer() {
				var $initialContent = $thisContent.filter('[data-id="' + initialDataAtr + '"]');

				TweenMax.to($thisContainer, animationHeightSpeed, {
					'height': $initialContent.outerHeight(),
					onComplete: function () {

						$thisContainer.css('height', 'auto');

						$initialContent.css({
							'position': 'relative',
							'left': 'auto',
							'right': 'auto'
						});
					}
				});
			}

			// toggle class active
			function toggleActiveClass(){
				$thisAnchor.removeClass(activeClass);
				$thisContent.removeClass(activeClass);

				// toggleStateThumb();

				if (initialDataAtr !== activeDataAtr) {

					activeDataAtr = initialDataAtr;

					$thisAnchor.filter('[data-for="' + initialDataAtr + '"]').addClass(activeClass);
					$thisContent.filter('[data-id="' + initialDataAtr + '"]').addClass(activeClass);

					return false;
				}

				activeDataAtr = false;
			}
		});
	}
}
/* tab switcher end */

/**
 * filter job
 * */
function filterJob() {
	$('.job-selects').on('change', 'select', function () {

		var $this = $(this),
			name = $this.attr('name'),
			classNoItem = 'filter-no-item';

		var tags = {};

		$this.closest('[data-id]').find('select').each(function () {
			tags [$(this).attr('name')] = $(this).val();
		});

		tags [name] = $this.val();

		var $filterItem = $this.closest('.js-tab-content').find('.accordion-content');

		var $noItemTemplate = $('<div />', {
			class: classNoItem,
			text: 'Извините, подходящих вакансий не найдено'
		});

		var dataFilters = concatObject(tags);

		$filterItem.parent().find('.'+ classNoItem).remove();
		$filterItem.show(0);

		if (dataFilters) {

			$filterItem.hide(0);
			$filterItem.filter(dataFilters).show(0);

			if (!$filterItem.is(':visible')) {
				$filterItem.parent().append($noItemTemplate.clone());
			}
		}
	});

	function concatObject(obj) {
		var arr = [];

		for ( var prop in obj ) {
			var thisKey = prop,
				thisProp = obj[ thisKey ];

			if (thisProp == 0) continue;

			arr.push('[data-property-' + thisKey + '="' + thisProp + '"]');
		}

		return arr.join('');
	}
}
/*filter job end*/

/**!
 * equal height
 * */
function equalHeightInit() {
	$(window).load(function () {
		// news list
		var $newsList = $('.news-list');
		if ($newsList.length) {
			$('.news-item__text', $newsList).equalHeight({
				useParent: true,
				parent: $newsList,
				resize: true
			});
		}
	})
}
/*equal height end*/

/*init js drop*/
function initJsDrops(){
	var jsDropWrappers = '.js-compactor-clone';
	var $jsDropWrapper = $(jsDropWrappers);

	$jsDropWrapper.on('click', '.js-compactor-btn', function (e) {
		e.preventDefault();

		var $currentJsDropWrapper = $(this).closest(jsDropWrappers);
		var currentWasOpened = $currentJsDropWrapper.hasClass('show-drop');

		$jsDropWrapper.removeClass('show-drop');
		if (!currentWasOpened) {
			$currentJsDropWrapper.addClass('show-drop');

			if($currentJsDropWrapper.closest('.header').length){
				$('html').removeClass('position');
			}
		}
		return false;
	});

	$jsDropWrapper.on('click', '.location-filter-drop', function (e) {
		e.stopPropagation();
		// return false;
	});

	$(document).click(function () {
		$jsDropWrapper.removeClass('show-drop');
	});
}
/*init js drop end*/

/*hide extra items*/

function compactor() {
	var $main = $('.location-filter');
	if (!$main.length) return false;

	var $itemsWrap = $('.location-filter-holder');
	var $itemsContainer = $('.location-filter-list');

	$(window).load(function () {
		$itemsContainer.contents().clone().appendTo('#location-filter-clone');
	});

	var $items = $itemsContainer.find('.location-filter-item');

	var itemsContainerWidth, lengthAllItems, actualTotalWidth, hideItemsLength;

	var minWidthItem = 165;

	var $cloneContainer = $('.js-compactor-clone');
	var $moreBtnTextMain = $cloneContainer.find('.js-compactor-btn-main');
	var $moreBtnTextAlt = $cloneContainer.find('.js-compactor-btn-alt');

	$(window).on('load resizeByWidth', function () {

		itemsContainerWidth = ($cloneContainer.is(':visible')) ? $itemsContainer.width() : $itemsContainer.width() - $cloneContainer.outerWidth();
		lengthAllItems = $items.length;

		actualTotalWidth = lengthAllItems * minWidthItem;
		hideItemsLength = ( itemsContainerWidth > actualTotalWidth ) ? 0 : Math.abs(Math.ceil((actualTotalWidth - itemsContainerWidth)/minWidthItem));

		// set the width of the visible items (in percent)
		$items.css('width', (1/(lengthAllItems - hideItemsLength)*100)+'%');
		// $cloneContainer.css('width', newWidthItem);

		// if(lengthAllItems == hideItemsLength + 1){
		if(lengthAllItems == hideItemsLength){
			$moreBtnTextAlt.attr('style','display: inline-block;');
			$moreBtnTextMain.attr('style','display: none;');
		} else {
			$moreBtnTextAlt.attr('style','display: none;');
			$moreBtnTextMain.attr('style','display: inline-block;');
		}

		// $main.toggleClass('show-clone', lengthAllItems * minWidthItem > itemsContainerWidth);
		$main.toggleClass('show-btn-more', hideItemsLength > 0);
		$main.toggleClass('hide-all-items', hideItemsLength === lengthAllItems);

		$('.location-filter-item').removeClass('compactor-cloned');

		for ( var i = 0; i <= hideItemsLength; i++ ) {
			// var indexCloned = lengthAllItems - i - 1;
			var indexCloned = lengthAllItems - i;
			$($items[indexCloned]).addClass('compactor-cloned');
			$($cloneContainer.find('.location-filter-item')[indexCloned]).addClass('compactor-cloned');
		}
	});
}
/*clone and collapse phones*/

/*clear filter*/
function clearFilter() {
	$('.btn-clear-form').on('click', function (e) {
		e.preventDefault();

		var $wrap = $('.location-filter-wrap');

		$(this).closest($wrap).find(':checked').prop( "checked", false );

	});
}
/*clear filter end*/

/**!
 * map init
 * */
// inline script
// var pinMap;
// var localObjects;

function shopsMap1(){
	// var mapId = 'shops-map';

	if (!$('#shops-map').length) return false;

	// function mapCenter(index){
	// 	var localObject = localObjects[index];
	//
	// 	return{
	// 		lat: localObject[0].lat + localObject[1].latBias,
	// 		lng: localObject[0].lng + localObject[1].lngBias
	// 	};
	// }

	var markers = [],
		elementById = [
			document.getElementById('shops-map')
		];

	var zoom = 11;

	var mapOptions = {
		zoom: zoom,
		// zoom: localObjects[0][3],
		center: {lat: 53.8963501, lng: 27.551555},
		// center: mapCenter(0),
		// styles: styleMap,
		mapTypeControl: false,
		scaleControl: false,
		scrollwheel: false
	};

	// var map0 = new google.maps.Map(elementById[0], mapOptions);

	// addMarker(0, map0);

	if($(elementById[0]).length){
		var map = new google.maps.Map(elementById[0], mapOptions);
		// addMarker(0, map);
		// addMarker(1, map);
		// addMarker(2, map);
		// addMarker(3, map);
		// addMarker(4, map);
		// addMarker(5, map);
		// addMarker(6, map);
	}

	/*aligned after resize*/
	// var resizeTimer0;
	// $(window).on('debouncedresize', function () {
	// 	clearTimeout(resizeTimer0);
	// 	resizeTimer0 = setTimeout(function () {
	// 		moveToLocation(map);
	// 	}, 500);
	// });

	/*move to location*/
	// function moveToLocation(map){
	// 	map.panTo({lat: 53.8963501, lng: 27.551555});
	// 	map.setZoom(zoom);
	// }

	var marker, i;
	var infoWindow = new google.maps.InfoWindow({
		maxWidth: 400
	});

	for (i = 0; i < localObjects.length; i++) {
		console.log("localObjects.length: ", localObjects.length);
		var object = localObjects[i];

		marker = new google.maps.Marker({
			position: object[0],
			map: map,
			icon: object[2],
			title: object[1].title
		});

		// marker = new google.maps.Marker({
		// 	position: new google.maps.LatLng(locations[i][1], locations[i][2]),
		// 	map: map,
		// 	icon: locations[i][3]
		// });

		google.maps.event.addListener(marker, 'click', (function(marker, i) {
			return function() {
				// infowindow.setContent(locations[i][0]);

				infoWindow.setContent(
					'<div class="map-popup">' +
					'<div class="map-popup__title">'+object[1].title+'</div>' +
					'<div class="map-popup__list">' +
					'<div class="map-popup__row work-time"><i class="depict-time"></i>'+object[1].time+'</div>' +
					'<div class="map-popup__row"><i class="depict-phone"></i>'+object[1].phone+'</div>' +
					'<div class="map-popup__row">'+object[1].tags+'</div>' +
					'<div class="map-popup__row">'+object[1].more+'</div>' +
					'</div>' +
					'</div>'
				);

				// infoWindow.close();

				infoWindow.open(map, marker);
			}
		})(marker, i));

		markers.push(marker);
	}

	function myClick(){
		google.maps.event.trigger(markers[0], 'click');
	}

	$('h1').on('click', function () {
		myClick();
	});
}
/*map init end*/

function shopsMap() {
	if (!$('#shops-map').length) return false;

	var markers = [];
	var zoom = 11;
	var pinMap = 'img/depict-map.png';
	var map;
	var center = {lat: 53.8963501, lng: 27.551555};

	function initialize() {

		var mapOptions = {
			zoom: zoom,
			center: center,
			mapTypeControl: false,
			scaleControl: false,
			scrollwheel: false
		};

		map = new google.maps.Map(document.getElementById("shops-map"), mapOptions);

		var marker, i;
		var infoWindow = new google.maps.InfoWindow();


		google.maps.event.addListener(map, 'click', function() {
			infoWindow.close();
		});


		for (i = 0; i < localObjects.length; i++) {

			marker = new google.maps.Marker({
				position: localObjects[i][0],
				map: map,
				icon: pinMap,
				title: localObjects[i][1].title
			});

			google.maps.event.addListener(marker, 'click', (function(marker, i) {

				return function() {
					infoWindow.setContent('<div class="map-popup">' +
						'<div class="map-popup__title">'+localObjects[i][1].title+'</div>' +
						'<div class="map-popup__list">' +
						'<div class="map-popup__row work-time"><i class="depict-time"></i>'+localObjects[i][1].time+'</div>' +
						'<div class="map-popup__row"><i class="depict-phone"></i>'+localObjects[i][1].phone+'</div>' +
						'<div class="map-popup__row">'+localObjects[i][1].tags+'</div>' +
						'<div class="map-popup__row">'+localObjects[i][1].more+'</div>' +
						'</div>' +
						'</div>');
					infoWindow.open(map, marker);
				}
			})(marker, i));

			markers.push(marker);
		}

		// Try HTML5 geolocation.
		// if (navigator.geolocation) {
		// 	navigator.geolocation.getCurrentPosition(function(position) {
		// 		var pos = {
		// 			lat: position.coords.latitude,
		// 			lng: position.coords.longitude
		// 		};
		//
		// 		infoWindow.setPosition(pos);
		// 		infoWindow.setContent('Location found.');
		// 		map.setCenter(pos);
		// 	}, function() {
		// 		handleLocationError(true, infoWindow, map.getCenter());
		// 	});
		// } else {
		// 	handleLocationError(false, infoWindow, map.getCenter());
		// }
	}

	google.maps.event.addDomListener(window, 'load', initialize);

	// function handleLocationError(browserHasGeolocation, infoWindow, pos) {
	// 	infoWindow.setPosition(pos);
	// 	infoWindow.setContent(browserHasGeolocation ?
	// 		'Error: The Geolocation service failed.' :
	// 		'Error: Your browser doesn\'t support geolocation.');
	// }

	/*aligned after resize*/
	var resizeTimer;
	$(window).on('debouncedresize', function () {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(function () {
			moveToLocation(center, zoom);
		}, 500);
	});

	/*move to location*/
	function moveToLocation(center, zoom){
		map.panTo(center);
		map.setZoom(zoom);
	}

	/*event show infoWindow*/
	function showInfoWindow(id){
		google.maps.event.trigger(markers[id], 'click');
	}

	/*event on click shops list*/
	var moveLocationTime;
	$('.shops-item__title a').on('click', function (e) {
		e.preventDefault();

		var index = $(this).data('lacation-index');

		moveToLocation(localObjects[index][0], 14);

		clearTimeout(moveLocationTime);
		moveLocationTime = setTimeout(function () {
			showInfoWindow(index)
		}, 200);
	});

	/*choose city*/
	$('.select-city').on('change', 'select', function () {

		var $this = $(this);

		var localLatDef = 53.528889;
		var locallngDef = 28.045;
		var localZoomDef = 6;

		var localLat = $this.find('option:selected').data('lat') || localLatDef;
		var localLng = $this.find('option:selected').data('lng') || locallngDef;
		var localZoom = $this.find('option:selected').data('zoom') || localZoomDef;
		var localGroup = $this.find('option:selected').data('city') || 'shops-all';

		moveToLocation({lat: localLat, lng: localLng}, localZoom);

		var $container = $('.shops-aside-holder');

		$container.find('.shops-aside-group').hide(0);
		$container.find('.'+ localGroup).show(0);

		if ( localGroup === 'shops-all' ) {
			$container.find('.shops-aside-group').show(0);
		}
	});
}

/*add shadow tape*/
function addShadowTape() {
	var shadowTop = $('.js-shadow-tape-top');

	$('.shops-aside-holder').scroll(function () {
		if ( $(this).scrollTop() > 0 ) {
			shadowTop.stop().fadeIn();
		} else {
			shadowTop.stop().fadeOut();
		}
	});
}
/*add shadow tape end*/

/**
 * toggle view shops
 * */
function toggleViewShops() {
	var $switcherHand = $('.shops-view-switcher a');
	var $container = $('.shops');
	var activeHand = 'active';
	var activeContainer = 'view-shops-active';

	if ( !$switcherHand.length ) return false;

	$switcherHand.on('click', function (e) {
		e.preventDefault();

		var $this = $(this);

		if ( $this.hasClass(activeHand) ) return false;

		$switcherHand.removeClass(activeHand);
		$container.removeClass(activeContainer);

		$this.addClass(activeHand);

		if ($this.index() === 0) {
			$container.addClass(activeContainer);
		}
	});

	$('.shops-aside-swiper').swipe({
		swipeLeft: function () {
			if ( $switcherHand.eq(1).hasClass(activeHand) ) return false;

			$switcherHand.eq(0).removeClass(activeHand);
			$switcherHand.eq(1).addClass(activeHand);

			$container.removeClass(activeContainer);
		},
		swipeRight: function () {
			if ( $switcherHand.eq(0).hasClass(activeHand) ) return false;

			$switcherHand.eq(1).removeClass(activeHand);
			$switcherHand.eq(0).addClass(activeHand);

			$container.addClass(activeContainer);
		}
	});
}
/*toggle view shops end*/

/**
 * sticky layout
 * */
function stickyLayout(){
	var topValue = $('.header').outerHeight();

	/*sidebar sticky*/
	var $sidebar = $(".sidebar");
	$sidebar.css('position','static');
	if ($sidebar.length) {
		var resizeTimerMenu;

		$(window).on('load resize', function () {
			if($(window).width() < 1280){
				// $sidebar.trigger("sticky_kit:detach").attr('style','');
				$sidebar.trigger("sticky_kit:detach").css('position','fixed');
				return;
			}

			clearTimeout(resizeTimerMenu);
			resizeTimerMenu = setTimeout(function () {
				$sidebar.stick_in_parent({
					parent: '.main',
					offset_top: topValue
				});
			}, 100);
		});
	}

	$('.menu__list').on('accordionChange', function () {
		$sidebar.trigger("sticky_kit:recalc");
	});
}
/*sticky layout end*/

/**!
 * footer at bottom
 * */
function footerBottom(){
	var $footer = $('.footer');
	if($footer.length){
		var $tplSpacer = $('<div />', {
			class: 'spacer'
		});

		$('.content').after($tplSpacer.clone());
		$('.main').after($tplSpacer.clone());

		$(window).on('load resizeByWidth', function () {
			var footerOuterHeight = $footer.find('.footer-holder').outerHeight();
			$footer.css({
				// 'margin-top': -footerOuterHeight
			});

			$('.spacer').css({
				'height': footerOuterHeight
			});
		})
	}
}
/*footer at bottom end*/

/**!
 * preloader
 * */
function preloadPage(){
	$('html').addClass('page-loaded');
}
/*preloader end*/

/** ready/load/resize document **/

$(window).load(function () {
	preloadPage();
});

$(document).ready(function(){
	placeholderInit();
	if(DESKTOP){
		customSelect($('select.cselect'));
	}
	printShow();
	mainNavigationInit();
	headerShow();
	pageIsScrolled();
	slidersInit();
	popupInitial();
	jsAccordion();
	shopsAccordion();
	fileInput();
	tabSwitcher();
	filterJob();
	equalHeightInit();
	initJsDrops();
	compactor();
	clearFilter();
	shopsMap();
	addShadowTape();
	toggleViewShops();
	// stickyLayout();

	footerBottom();
});