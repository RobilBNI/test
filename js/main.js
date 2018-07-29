// JavaScript Document *Ibrahim Najib

$( document ).ready(function() {
    'use strict';
	
	//TopSlider
	if ( $('#topslider').length > 0 ){
		$("#topslider").owlCarousel({
		items:1,	
		nav:true,
		smartSpeed:300,
		autoplay:true,
		loop:true,
		navText:['<span class="arrow-left"></span>','<span class="arrow-right"></span>'],
		});
		
		$( "#topslider .owl-nav" ).wrapInner( "<div class='container'></div>" );
		
	}
	
	//Fixed header
	if($(window).scrollTop() > 100) {
		$('header').addClass('fixed');
	}
    $(window).scroll(function(){
        if($(this).scrollTop() > 100) {
            $('header').addClass('fixed');
        } else{
			$('header').removeClass('fixed');
		}
    });
	
	if ( $( 'header' ).hasClass( "inner" ) ) {
		var paddingAmount = $('header').outerHeight() + $('.pagetitle').outerHeight();
		$('body').css('padding-top',paddingAmount);

    }
	
	
	
    function rightSpaceColc(){
        var rightSpace = ( $(window).outerWidth() - $( '.container' ).outerWidth() ) / 2 + 20;
	    $('.socialiconcontainer').css('padding-right',rightSpace);
    }
    rightSpaceColc();
	$(window).on('resize', function(){
		  rightSpaceColc();
	});
	
	//Top inner slider
	
	if ( $('.aboutcol .slider').length > 0 ){
		$(".aboutcol .slider").owlCarousel({
		items:3,	
		margin:30,
		
		responsive : {
			0 : {
				items : 1,
				autoplay:true,
				smartSpeed:500,
				loop:true,
			},
			400 : {
				items : 2,
				autoplay:true,
				smartSpeed:500,
				loop:true,
			},
			768 : {
				items : 3,
			}
		}
		});
	}
	
	if ( $('.partners .slider').length > 0 ){
		$(".partners .slider").owlCarousel({
		items:5,	
		
		
		responsive : {
			0 : {
				items : 2,
				autoplay:true,
				smartSpeed:500,
				loop:true,
			},
			400 : {
				items : 3,
				autoplay:true,
				smartSpeed:500,
				loop:true,
			},
			768 : {
				items : 5,
			}
		}
		});
	}
	
	if ( $('.silderTwoHome').length > 0 ){
		var owl = $(".silderTwoHome .slider").owlCarousel({
		items:1,	
		nav:false,
		smartSpeed:300,
		animateOut: 'slideOutDown',
    	animateIn: 'slideInDown',
		autoplay:true,
		loop:true,
		mouseDrag:false,
		touchDrag:false,
		navText:['<span class="arrow-down"></span>','<span class="arrow-up"></span>'],
		});
		owl.owlCarousel();
		
		$(".stwo-prev").click(function () {
			
			owl.data('owl.carousel').options.animateOut = 'slideOutUp';
			owl.data('owl.carousel').options.animateIn = 'slideInUp';
			owl.trigger( 'refresh.owl.carousel' );
			 setTimeout(function(){
			owl.trigger('prev.owl.carousel');
			 }, 100);
			
		});
		
		$(".stwo-next").click(function () {
			owl.data('owl.carousel').options.animateOut = 'slideOutDown';
			owl.data('owl.carousel').options.animateIn = 'slideInDown';
			owl.trigger( 'refresh.owl.carousel' );
			setTimeout(function(){
			owl.trigger('next.owl.carousel');
			 }, 100);
		});
		
		
		if ($(window).width() > 767) {
			var winwidth = $(window).width();
			var contwidth = $('.slider .container').outerWidth();
			var infobox = $('.infobox').outerWidth();
			var amountforleft = (winwidth - contwidth) /2 + infobox + 30 ;
			$('.controlArrows').css("left",amountforleft);
		}
		$(window).resize(function() {
			if ($(window).width() > 767) {
				var winwidth = $(window).width();
				var contwidth = $('.slider .container').outerWidth();
				var infobox = $('.infobox').outerWidth();
				var amountforleft = (winwidth - contwidth) /2 + infobox + 30 ;
				$('.controlArrows').css("left",amountforleft);
			}else{
				$('.controlArrows').css("left","50%");
			}
		});
		
		
	}
	
	
	// animate number

	if ( $("#waypoint").length > 0 ) {
		var waypoint = new Waypoint({
		  element: document.getElementById('waypoint'),
		  handler: function(direction) {
			var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
			$('.lines').each(function () { 
				var nubco = $(this).text();
			  $(this).animateNumber({ number: nubco, numberStep: comma_separator_number_step, easing: 'easeOutExpo'}, 2800); 
			  waypoint.destroy()
			});
		  }
		  ,
			offset: '100%'
		})
	}
	
	// Mob Menu
	jQuery.fn.clickToggle = function(a,b) {
	  function cb(){ [b,a][this._tog^=1].call(this); }
	  return this.on("click", cb);
	};
	
	$(".mobMenu").clickToggle(function() {   
			$(this).addClass('open');
			$('header .mainMenu').addClass('isopen');
		}, function() {
			$(this).removeClass('open');
			$('header .mainMenu').removeClass('isopen');
	});
	
	if ($(window).width() < 768) {
		$('.socialicons').appendTo('.mainMenu');
	}
	$(window).resize(function() {
		if ($(window).width() < 768) {
			$('.socialicons').appendTo('.mainMenu');
		} else{
			$('.socialicons').appendTo('.socialiconcontainer');
		}
	});
	
	//SameHeight
	if ( $('.OurPrograms .box .warp').length > 0 ){
		$('.OurPrograms .box .warp h1').responsiveEqualHeightGrid();
		$('.OurPrograms .box .warp').responsiveEqualHeightGrid();
	}
	if ( $('.blogcard').length > 0 ){
		$('.blogcard h3').responsiveEqualHeightGrid();
		$('.blogcard').responsiveEqualHeightGrid();
	} 
	if ( $('.foundertalk').length > 0 ){
		$('.foundertalk .sameheight').responsiveEqualHeightGrid();
	} 
	if ( $('.mission').length > 0 ){
		$('.mission .box').responsiveEqualHeightGrid();
	}
	if ( $('.family').length > 0 ){
		$('.family .box').responsiveEqualHeightGrid();
	}
	if ( $('.contactinfo').length > 0 ){
		$('.contactinfo .cover').responsiveEqualHeightGrid();
		$('.contactinfo .cover .box').responsiveEqualHeightGrid();
	}    
	
	
	/*if ( $('.partners .owl-item').length > 0 ){
		$('.partners .owl-item').responsiveEqualHeightGrid();
	}*/
	
	var headerHeight = $('header').height();
	var infoHeight = $('header .topSlider .info').outerHeight();
	
	var aboutcolHeight = $('.aboutcol').outerHeight();
	var amonutC = aboutcolHeight + infoHeight + headerHeight + 300;
	$('.shadow').css('min-height',amonutC);
	
	var topSliderHeight = $('.topSlider').outerHeight();
	var amonutA = topSliderHeight - ( infoHeight + headerHeight );
	var amonutB = (amonutA - aboutcolHeight) / 2;
	$('.aboutcol').css('top',amonutB);
	
	
	
	
	
		
}); // Document ready


function mapin(textin,latin,lngin){
// Google Map
		
			
				var map;
				var bounds = new google.maps.LatLngBounds();
				var mapOptions = {
					mapTypeId: 'roadmap',
					scrollwheel: false,
					styles:[{"elementType": "geometry","stylers": [{"color": "#063f62"}]},{"elementType": "labels.text.fill","stylers": [{"color": "#ffffff"}]},{"elementType": "labels.text.stroke","stylers": [{"color": "#ffffff"},{"visibility": "off"}]},{"featureType": "administrative.country","elementType": "geometry.stroke","stylers": [{"color": "#4b6878"}]},{"featureType": "administrative.land_parcel","elementType": "labels.text.fill","stylers": [{"color": "#64779e"}]},{"featureType": "administrative.province","elementType": "geometry.stroke","stylers": [{"color": "#4b6878"}]},{"featureType": "landscape.man_made","elementType": "geometry.stroke","stylers": [{"color": "#334e87"}]},{"featureType": "landscape.natural","elementType": "geometry","stylers": [{"color": "#023e58"}]},{"featureType": "poi","elementType": "geometry","stylers": [{"color": "#063f62"}]},{"featureType": "poi","elementType": "labels.text.fill","stylers": [{"color": "#6f9ba5"}]},{"featureType": "poi","elementType": "labels.text.stroke","stylers": [{"color": "#1d2c4d"}]},{"featureType": "poi.park","elementType": "geometry.fill","stylers": [{"color": "#063f62"}]},{"featureType": "poi.park","elementType": "labels.text.fill","stylers": [{"color": "#3C7680"}]},{"featureType": "road","elementType": "geometry","stylers": [{"color": "#2d697e"}]},{"featureType": "road","elementType": "labels.text.fill","stylers": [{"color": "#ffffff"}]},{"featureType": "road","elementType": "labels.text.stroke","stylers": [{"color": "#1d2c4d"},{"visibility": "off"}]},{"featureType": "road.arterial","stylers": [{"color": "#2c979e"}]},{"featureType": "road.arterial","elementType": "labels.text","stylers": [{"color": "#ffffff"},{"visibility": "on"}]},{"featureType": "road.arterial","elementType": "labels.text.fill","stylers": [{"color": "#ffffff"}]},{"featureType": "road.arterial","elementType": "labels.text.stroke","stylers": [{"visibility": "off"}]},{"featureType": "road.highway","elementType": "geometry","stylers": [{"color": "#2c979e"}]},{"featureType": "road.highway","elementType": "geometry.stroke","stylers": [{"color": "#255763"}]},{"featureType": "road.highway","elementType": "labels.text.fill","stylers": [{"color": "#ffffff"}]},{"featureType": "road.highway","elementType": "labels.text.stroke","stylers": [{"color": "#023e58"},{"visibility": "off"}]},{"featureType": "transit","elementType": "labels.text.fill","stylers": [{"color": "#98a5be"}]},{"featureType": "transit","elementType": "labels.text.stroke","stylers": [{"color": "#1d2c4d"}]},{"featureType": "transit.line","elementType": "geometry.fill","stylers": [{"color": "#283d6a"}]},{"featureType": "transit.station","elementType": "geometry","stylers": [{"color": "#3a4762"}]},{"featureType": "water","elementType": "geometry","stylers": [{"color": "#0e1626"}]},{"featureType": "water","elementType": "labels.text.fill","stylers": [{"color": "#4e6d70"}]}]
					
				};
								
				// Display a map on the page
				map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
				map.setTilt(45);
					
				// Multiple Markers
				var markers = [
					[textin, latin, lngin],
				];
				
				
				
				// Display multiple markers on a map
				var infoWindow = new google.maps.InfoWindow(), marker, i;
				
				// Loop through our array of markers & place each one on the map  
				for( i = 0; i < markers.length; i++ ) {
					var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
					bounds.extend(position);
					marker = new google.maps.Marker({
						icon: 'img/pin.png',
						position: position,
						map: map,
						title: markers[i][0]
					});
					
					
					
					// Automatically center the map fitting all markers on the screen
					map.fitBounds(bounds);
				}
			
				// Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
				var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
					this.setZoom(17);

					google.maps.event.removeListener(boundsListener);
				});
				
		
		
}