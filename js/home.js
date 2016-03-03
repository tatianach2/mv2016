	/***home***/
	/****reloj***/

	var $reloj = $('.content-reloj');

	setInterval(function(){
		var $time = moment();
		$('.reloj-hour').html( $time.format('h') );
		$('.reloj-minute').html( $time.format('mm') );
		$('.reloj-second').html( $time.format('ss') );
		$('.reloj-med').html( $time.format('a') );
	}, 100);

	/**slider-gal-reloj**/	

	var slider = $('.slider-reloj').bxSlider({
		controls: false,
		pager: false,
		auto: false
	});

	$('.fl-gal-reloj-next').click(function() {
		slider.goToNextSlide();
	});
	$('.fl-gal-reloj-prev').click(function() {
		slider.goToPrevSlide();
	});

	$('.btn-reloj').click(function(){
		$('.content-box-reloj-r').slideToggle(500);
	});

	/***slider-comentarios**/

	var sliderComentarios = $('.content-comentarios').bxSlider({
		autoControls: false,
		pager: false,
		controls:false,
		auto: false
	});
	$('.content-comentarios').bxSlider({
	  pagerCustom: '#bx-pager-comentarios',
	});

	$('.bxslider').bxSlider({
  		pagerCustom: '#bx-pager',
  		controls:false
	});
	$('.dots-comentarios li a span:nth-child(2)').click(function(){
		$('this').animate({
			borderColor:'transparent',
			backgroundColor:'#fcb315',
		});
	});

	/***novedades***/
	window.addEventListener("orientationchange", novedadsize, false);
	window.addEventListener('resize',novedadsize, false);
	function novedadsize(){
	    var wh = window.innerHeight - 100;
	    $('.novedad-img').css('height',wh);
	}
	novedadsize();

	/**parallax**/
	$('.pages').fullpage({
		anchors: ['firstPage', 'secondPage', '3rdPage','4rdPage', '5rdPage' ],
		navigation:true,
		navigationTooltips:false,
		navigationPosition: 'right',
		css3: true,
		resize : true,
		scrollOverflow: true,
		scrollingSpeed: 600,
		afterLoad: function(anchorLink, index){

			//section 1
			if(index == 1){
				$('.nav-header').first().animate({
					backgroundColor:'transparent',
					color:'#fff',
				},50).fadeIn(50);

				$('.nav-header').first().animate({
					color:'#fff',
				},200).fadeIn(200);

				$('#fp-nav ul li span').first().animate({
					background: 'red',
				},200).fadeIn(200);
			}
			//section 2
			if(index == 2){
				//moving content reloj
				$('.nav-header').first().animate({
					color:'#000',
					backgroundColor:'#fff',
				});
				$('#second-nav').first().animate({
					borderColor:'#898989',
					color:'#898989',
				});
				$('.content-box-reloj-h').first().animate({
					opacity:1,
					marginTop:'30',
				},200).fadeIn(200);
			}
			//section 3
			if(anchorLink == '3rdPage'){
				//header
				$('.nav-header').first().animate({
					color:'#fff',
					backgroundColor:'transparent',
				});
				$('#planes').find('h1').delay(100).first().animate({
					opacity:1,
					marginTop:'10',
				},800).fadeIn(500);

				TweenMax.to("#planes", 1.4, {marginTop:'10', opacity:1, delay: 0.4, ease:800});
				TweenMax.to(".content-planes ul li:first-child", 0.7, {marginTop:'10', opacity:1, delay: 0.4 });
				TweenMax.to(".content-planes ul li:nth-child(2)", 0.7, {marginTop:'10', opacity:1, delay: 0.6 });
				TweenMax.to(".content-planes ul li:nth-child(3)", 0.7, {marginTop:'10', opacity:1, delay: 0.8 });
				TweenMax.to(".content-planes ul li:nth-child(4)", 0.7, {marginTop:'10', opacity:1, delay: 1 });
				TweenMax.to(".content-planes ul li:last-child", 0.7, {marginTop:'10', opacity:1, delay: 1.2 });
				TweenMax.to(".content-planes .content-fl-nav-home", 0.7, {marginTop:'50', opacity:1, delay: 1.4 });

			}
			//section 4
			if(anchorLink == '4rdPage'){
				//header
				$('.nav-header').first().animate({
					color:'#000',
					backgroundColor:'#fff',
				});

				TweenMax.to(".novedad-img img", 0.5, {left:'0', opacity:1, position:'relative',delay: 0.2 });
				TweenMax.to(".txt-novedades, .fl-novedades", 0.5, { opacity:1,delay: 0.9 });
				
			}
			if(anchorLink == '5rdPage'){
				$('.nav-header').first().animate({
					backgroundColor:'#ebebeb',
					color:'#000',
				});

				TweenMax.to(".content-coments-home", 0.5, { marginTop:"0", opacity:1,delay: 0.5 });
			}
		}

	});
	
	/***navigation fl scroll***/

	$('#first-nav').click(function(e){
		e.preventDefault();
		$.fn.fullpage.moveSectionDown();
		$('.nav-header').removeClass('header-dark');
		$('.nav-header').addClass('header-white');
		console.log('test');
	});
	$('#second-nav').click(function(e){
		e.preventDefault();
		$.fn.fullpage.moveSectionDown();
		$('.nav-header').removeClass('header-white');
		$('.nav-header').addClass('header-dark');
		console.log('test');
	});
	$('#third-nav').click(function(e){
		e.preventDefault();
		$.fn.fullpage.moveSectionDown();
	});
	$('#four-nav').click(function(e){
		e.preventDefault();
		$.fn.fullpage.moveSectionDown();
	});

	