$(document).ready(function(){
	
//Sticky Navigation		
    $("#navigation").sticky({topSpacing:0});


//Leaving Page Fade Out
	$('a.external').click(function(){
	"use strict";
	  var url = $(this).attr('href');		
			
			
	  		$('.mask').fadeIn(250, function(){
			"use strict";			
			    document.location.href = url;
		  	});
			$("#loader").fadeIn("slow");			
	
	  return false;
	});
		
});
  

//Back To Top
	$(function() {
	"use strict";
		$('a#back-top').click(function () {
			$('html, body').stop().animate({
				scrollTop: 0
			}, 1500,'easeInOutExpo');
		});
		
		
		
	});


//Navigation Scrolling
	$(function() {
	"use strict";
		$('.nav a, .nav li a, #home-center a, a.move').bind('click',function(event){
		var $anchor = $(this);
	
		$('html, body').stop().animate({
		scrollTop: $($anchor.attr('href')).offset().top -44
		}, 1500,'easeInOutExpo');
		
		event.preventDefault();
		});
	});


	
 
//PrettyPhoto
	$(function(){
	"use strict";
		$("a[data-gal^='prettyPhoto']").prettyPhoto({
			  opacity: 0.5,
			  social_tools: "",
			  deeplinking: false
		});
	});		



//Parallax	
$(window).bind('load', function () {
"use strict";
	parallaxInit();						  
});

	function parallaxInit() {
	"use strict";
		$('#twitter-parallax').parallax("30%", 0.1);
		$('#quote-parallax').parallax("30%", 0.1);
		$('#contact-parallax').parallax("30%", 0.1);
		$('#home.parallax').parallax("30%", 0.1);
		$('#project-header.parallax').parallax("30%", 0.1);
		/*add as necessary*/
	}	



  
  
//BxSlider
$(document).ready(function(){
"use strict";
	
	var onMobile = false;
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) { onMobile = true; }
	
	$('.fullwidth-slider').bxSlider({
		mode: "fade",
		speed: 1000,
		pager: false,
		
		onSlideBefore: function($slideElement) {
			($slideElement).find('.slide-caption').fadeOut().animate({top:'100px'},{queue:false, easing: 'easeOutQuad', duration: 550});
			($slideElement).find('.slide-caption').hide().animate({top:'-100px'});
		},
		onSlideAfter: function($slideElement) {
			($slideElement).find('.slide-caption').fadeIn().animate({top:'0'},{queue:false, easing: 'easeOutQuad', duration: 450});
		},
		
	});
	
	$('.bx-wrapper .bx-controls-direction a').attr('data-500','top:83%; opacity: 0;').attr('data-start','top:50%; opacity: 1;');
	
	
	if( ( onMobile === false ) && ( $('.parallax-slider').length ) ) {
	
		skrollr.init({
			edgeStrategy: 'set',
			smoothScrolling: false,
			forceHeight: false
		});
		
	}	

	
	$('.text-slide-vertical').bxSlider({
		controls: false,
		adaptiveHeight: true, 
		pager: false,		
		auto:true,
		mode:'fade',
		pause: 3000,
	});
	

	
});  
  
  
  
//Navigation Dropdown
	$('.nav a.colapse-menu1').click(function () { $(".nav-collapse").collapse("hide") });
	
	$('body').on('touchstart.dropdown', '.dropdown-menu', function (e) { e.stopPropagation(); });



$(document).ready(function(){
"use strict";

//Elements Fading
	$('.element_from_top').each(function () {
	"use strict";
		$(this).appear(function() {
		"use strict";
		  $(this).delay(150).animate({opacity:1,top:"0px"},1000);
		});	
	});
	
	$('.element_from_bottom').each(function () {
	"use strict";
		$(this).appear(function() {
		  $(this).delay(150).animate({opacity:1,bottom:"0px"},1000);
		});	
	});
	
	
	$('.element_from_left').each(function () {
	"use strict";
		$(this).appear(function() {
		  $(this).delay(150).animate({opacity:1,left:"0px"},1000);
		});	
	});
	
	
	$('.element_from_right').each(function () {
	"use strict";
		$(this).appear(function() {
		  $(this).delay(150).animate({opacity:1,right:"0px"},1000);
		});	
	});
	
	$('.element_fade_in').each(function () {
	"use strict";
		$(this).appear(function() {
		  $(this).delay(150).animate({opacity:1,right:"0px"},1000);
		});	
	});




//Animated Counters
	$('.counters').each(function () {
		$(".timer .count").appear(function() {
		var counter = $(this).html();
		$(this).countTo({
			from: 0,
			to: counter,
			speed: 2000,
			refreshInterval: 60,
			});
		});
	});
	

//Fading Out AlertBox
	$('.shortcode_alertbox').find('.box_close').click(function(){
	"use strict";
		$(this).parents('.alertboxes').animate({opacity:0},300).animate({height:"0px"});
	});



});



  jQuery(document).ready(function($){     
  "use strict";
// Portfolio Isotope
	var container = $('#portfolio-wrap');	
	

	container.isotope({
		animationEngine : 'best-available',
	  	animationOptions: {
	     	duration: 200,
	     	queue: false
	   	},
		layoutMode: 'fitRows'
	});	

	$('#filters a').click(function(){
	"use strict";
		$('#filters a').removeClass('active');
		$(this).addClass('active');
		var selector = $(this).attr('data-filter');
	  	container.isotope({ filter: selector });
        setProjects();		
	  	return false;
	});
		
		
		function splitColumns() { 
		"use strict";
			var winWidth = $(window).width(), 
				columnNumb = 1;
			
			
			if (winWidth > 1024) {
				columnNumb = 4;
			} else if (winWidth > 900) {
				columnNumb = 2;
			} else if (winWidth > 479) {
				columnNumb = 2;
			} else if (winWidth < 479) {
				columnNumb = 1;
			}
			
			return columnNumb;
		}		
		
		function setColumns() { 
			var winWidth = $(window).width(), 
				columnNumb = splitColumns(), 
				postWidth = Math.floor(winWidth / columnNumb);
			
			container.find('.portfolio-item').each(function () { 
				$(this).css( { 
					width : postWidth + 'px' 
				});
			});
		}		
		
		function setProjects() { 
		"use strict";
			setColumns();
			container.isotope('reLayout');
		}		
		
		container.imagesLoaded(function () { 
			setColumns();
		});
		
	
		$(window).bind('resize', function () {
"use strict";		
			setProjects();			
		});

});



//Progress Bars
	$('.bar li').each(function () {
	"use strict";
		$(this).appear(function() {
		  $(this).animate({opacity:1,left:"0px"},1200);
		  var b = $(this).find("span").attr("data-width");
		  $(this).find("span").animate({
			width: b + "%"
		  }, 1700, "easeOutCirc");
		});	
	});







//FullScreen Slider
$(function (){
"use strict";
	$('#fullscreen-slider').maximage({
		cycleOptions: {
			fx: 'fade',
			speed: 1000, // Has to match the speed for CSS transitions in jQuery.maximage.css (lines 30 - 33)
			timeout: 5000,
			prev: '#slider_left',
			next: '#slider_right',
			pause: 0,
			before: function(last,current){
				jQuery('.slide-content').fadeOut().animate({top:'100px'},{queue:false, easing: 'easeOutQuad', duration: 550});
				jQuery('.slide-content').fadeOut().animate({top:'-100px'});
			},
			after: function(last,current){
				jQuery('.slide-content').fadeIn().animate({top:'0'},{queue:false, easing: 'easeOutQuad', duration: 450});
			}	
			
			
					
		},
		
		
		
		onFirstImageLoaded: function(){
		"use strict";
			jQuery('#cycle-loader').delay(800).hide();
			jQuery('#fullscreen-slider').delay(800).fadeIn('slow');
			jQuery('.slide-content').fadeIn().animate({top:'0'});
			jQuery('.slide-content a').bind('click',function(event){
				var $anchor = $(this);				
				jQuery('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top -44
				}, 1500,'easeInOutExpo');				
				event.preventDefault();
				});			
		}
	});

	jQuery('video,object').maximage('maxcover');

	
});





$(window).load(function() {
"use strict";
	
	
	

	
	
	// Project Page Expander
	
	(function(){
	"use strict";
	  
		  var container = $( "#project-page-holder" );
		  var $items = $('#portfolio-wrap .open-project-link');
		  index = $items.length;
		  $('#portfolio-wrap .open-project-link').click(function(){
	
		  if ($(this).hasClass('active')){
		  } else 
		  { lastIndex = index;
		  index = $(this).index();
		  $items.removeClass('active');
		  $(this).addClass('active');
	
		  var myUrl = $(this).find('.open-project').attr("href") + " .item-data"; 
	
		  
		   
		  
		  
		  $('#project-page-data').animate({opacity:0}, 400,function(){
				
				
				
				$("#project-page-data").load(myUrl,function(e){  
					var $helper = $('.helper');
					var height = $helper.height();
					
					
						$('#project-page-data').css("min-height", height);
							
						$('.project-slider').css({'height' : ''});	
						$('#maximage').css({'height' : ''});	
						
						
						
							$('#maximage').maximage({
								cycleOptions: {
									fx: 'fade',
									speed: 1000, // Has to match the speed for CSS transitions in jQuery.maximage.css (lines 30 - 33)
									timeout: 6000,
									prev: '#arrow_left',
									next: '#arrow_right',
									pause: 1,
								},
							});
						

						
						
						
						
				});
				
				$('#project-page-data').delay(400).animate({opacity:1}, 400);
	
		  });
		  
		  
		  $('html, body').animate({ scrollTop: $(".portfolio-bottom").offset().top -40}, 900);
		  
		  
		  //Project Page Open
		  
		  
			
			  $('#project-page-holder').slideUp(600, function(){
					
				  $('#project-page-data').css('visibility', 'visible');}).delay(1100).slideDown(1000,function(){				  
				  
						$('#project-page-data').fadeIn('slow',function(){initBxModal();});
						$('.element_fade_in').each(function () {
							$(this).appear(function() {
							  $(this).delay(100).animate({opacity:1,right:"0px"},1000);
							});	
						});
					  
				  });
				
			  
		  }
	
		  return false;       
		  
		  });
	
		  //Project Page Close
		
		  $(document).on('click', '#project_close', function(event) {
		  "use strict";
		  
				
		  $('#project-page-data').animate({opacity:0}, 400,function(){		
				
				$('#project-page-holder').delay(400).slideUp(400);
				
		  });
				
				$('html, body').delay(1000).animate({ scrollTop: $(".portfolio-top").offset().top - 70}, 800);
				$items.removeClass('active') ;
		  
				return false;
				
		  });
	
	})();

    
});


$(window).load(function() { 
"use strict";
	document.getElementById("all").click();
});



