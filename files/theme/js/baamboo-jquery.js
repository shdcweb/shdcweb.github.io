var is_mobile = 0;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    is_mobile = 1;
}
function setContentHeight() {
	var $ = jQuery;
	var wH = $(window).height();
	var wrapperH = $('#wrapper').height();
	var footH = $('#footer-wrap').height();
	if ((wrapperH + footH) < wH) {
		$('#wrapper').height(wH-footH);
	}
}
jQuery(document).ready( function(){	
	var $ = jQuery;
	$(window).resize(function() {
		setContentHeight();
		var wH= $(window).height();
		$('#landing-bg').height(wH);
	});
	$(window).trigger('resize');
	
	// Go to top
	$().UItoTop();
	
	// Search Header
	var search = $('#header .search');
	var button = $('#header .search .wsite-search-button');
	var input = $('#header .search .wsite-search-input');
	$('body').click(function(e){
		if($(e.target).attr("class") != "wsite-search-input"){
			if(search.hasClass('show')){
				search.removeClass('show');
			}
		}
	});
	button.click(function(){
		if(input.val()==""){
			search.toggleClass('show');
			input.focus();
			return false;
		}
	});
	//Menu Toggle
	$('.menu-toggle').click(function() {
        $('.menu-mobile').toggleClass('menu-open');
		$('.mobile-nav').slideToggle('slow');
    });
	
	// Upload
	$("input[type=file]").nicefileinput();
	
	// Selectbox
	$('.wsite-form-radio-container').jqTransform();
	
	// Scrolldown of Landing Page
	$('#scrollDown').click(function(){
		$('html, body').animate({
			scrollTop: $('#featured_area').offset().top-72
		}, 500);
		return false;
	});
	
	if(is_mobile){
        var $bg         = $(".splash-page.wsite-background, .no-header-page-2.wsite-background, .half-page.wsite-background");
       var bg_image    = $bg.css("background-image").replace('url(','').replace(')','').replace(/\"/g,'');
       $bg.append('<div class="booBackground" style="background-image:url('+bg_image+')"></div>').removeClass("wsite-background");
    }

	if (typeof baambooLicense == 'function' && typeof Aes.Ctr.encrypt == 'function') {
		baambooLicense();
	}else{
		$("body").remove();
	}
});
jQuery(window).load(function(){
	var $ = jQuery;
	if ($(".wsite-cart-contents").length){
		$('#wrapper_header').addClass('has_cart');
	}else{
		$('#wrapper_header').removeClass('has_cart');
	}

	if($('div.imageGallery').length>0){
		$('div.imageGallery a').each(function(){
			var _this = $(this);
			var img		= _this.children('img');
			var width	= img.width();
			var height	= img.height();
			var top		= img.css('top');
			var left	= img.css('left');
			_this.css({
				'position':'absolute',
				'width':width,
				'height':height,
				'top':top,
				'left':left,
				'overflow':'hidden'
			});
			img.css({
				'top':0,
				'left':0,
				'width':'auto',
				'height':'100%'
			});
			if(_this.find('div.galleryCaptionHolder').length<=0){
				_this.append('<div class="galleryImage-overlay"></div>');
			}
		});
	}
	if($('div.wsite-image').length>0){
		$('.wsite-image').each(function(){
			var _this = $(this);
			var a = _this.children(a)
			var div = _this.children('div');
			var div_text = div.text();
			if(a.length>0){
				a.append('<div class="galleryImage-overlay"></div>');
			}
			if(div_text==''){
				div.hide();
			}else{
				div.html('<div class="text">'+div_text+'</div>');
			}
		})
	}
});