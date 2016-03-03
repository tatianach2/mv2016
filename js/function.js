$(document).ready(function() {
/***novedades***/
	/***gal-novedaes****/
	$('.fl-gal-nov-next').click(function() {
		sliderNov.goToNextSlide();
	});
	
	$('.fl-gal-nov-prev').click(function() {
		sliderNov.goToPrevSlide();
	});

	var sliderNov = $('.slider-galnov').bxSlider({
		controls: false,
		pager: false,
		auto: false
	});
	/*lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    });*/

	/**slideToggle novedades**/
	$('.galeria').click(function(){
		$('.gal-nov').slideToggle(400);
	});
/****restaurantes***/
	/****restaurantes***/
	$('.up-rte').click(function(event) {
		$('body').scrollTo('.banner-header', 600);
	});
	/*$('.nav-header').scrollTo('.section', 600)
		TweenMax.to(".nav-header", 0.4, {backgroundColor:'#fff', opacity:1, display:'block'});
	});*/
	$(window).scroll(function() {
	var topRestaurantes = $('#c-restaurantes').offset().top;
	var stick = $(window).scrollTop() - $(window).height();
	  if( stick -= 50 ){
	  	$('.nav-header').addClass('nav-bg-white');
	  }else{
	  	$('.nav-header').removeClass('nav-bg-white');
	  }
	   /*stick -= 50;*/
	});
	/***detalle restaurante***/

	/***columsn sticky**/  
	window.addEventListener("orientationchange", colLeftRestsize, false);
	window.addEventListener('resize',colLeftRestsize, false);
	function colLeftRestsize(){
	    var wh = window.innerHeight - 10;
	    $('.col-left-rest').css('height',wh);
	}
	colLeftRestsize();

	window.addEventListener("orientationchange", colCenterRestsize, false);
	window.addEventListener('resize',colCenterRestsize, false);
	function colCenterRestsize(){
	    var wh = window.innerHeight - 10;
	    $('.col-center-rest').css('height',wh);
	}
	colCenterRestsize();

	window.addEventListener("orientationchange", colRightRestsize, false);
	window.addEventListener('resize',colRightRestsize, false);
	function colRightRestsize(){
	    var wh = window.innerHeight - 10;
	    $('.col-right-rest').css('height',wh);
	}
	colRightRestsize();

	window.addEventListener("orientationchange", colLeftNovsize, false);
	window.addEventListener('resize',colLeftNovsize, false);
	function colLeftNovsize(){
	    var wh = window.innerHeight - 10;
	    $('.col-left-nov').css('height',wh);
	}
	colLeftNovsize();
	
	/***slides**/

	$('.fl-gal-rest-next').click(function() {
		sliderRest.goToNextSlide();
	});
	
	$('.fl-gal-rest-prev').click(function() {
		sliderRest.goToPrevSlide();
	});

	var sliderRest = $('.bxslider-rest').bxSlider({
	  pagerCustom: '#bx-pager-rest',
	  controls: false,
	});

	$('.bxslider-sedes').bxSlider({
	  pagerCustom: '#bx-pager-sedes',
	  controls: false,
	});

	$('.bxslider-bebidas').bxSlider({
	  pagerCustom: '#bx-pager-bebidas',
	  controls: false,
	});

	/****nav-right-col**/
	$('#n-descripcion, #n-curiosidades, #n-bebidas, #n-comentarios').click(function() {
		TweenMax.to(".gal-rest", 0.4, {marginTop:'-350', opacity:0, display:'none'});
		TweenMax.to(".nav-tabs-rest",0.5,{ marginTop:'50', delay:0.5});
		TweenMax.to(".btn-up",0.5,{ display:'block', opacity:1,delay:0.2});
		TweenMax.to("#scrollcontent",0.5,{ top:'15%', delay:0.2});
	});

	$('.nav-tabs-rest ul li:last-child').click(function() {
		TweenMax.to(".nav-tabs-rest ul li:last-child",0.4,{display:'none',opacity:0,});
		TweenMax.to(".gal-rest", 0.4, {marginTop:'48', opacity:1, display:'block'});

		TweenMax.to("#scrollcontent",0.5,{ top:'65%', });
	});

	$('#n-descripcion').scrollTo('#descripcion-r',{duration:'fast', offsetTop : '50'});
	$('#n-curiosidades').scrollTo('#curiosidades-r',{duration:'fast'});
	/***scroll rest**/

	$('#n-curiosidades').scrollTo('#curiosidades-r',800);

	$('#n-descripcion').click(function(event) {
		$('#scrollcontent').scrollTo('#descripcion-r', 600);
	});

	$('#n-curiosidades').click(function(event) {
		$('#scrollcontent').scrollTo('#curiosidades-r', 600);
	});

	$('#n-bebidas').click(function(event) {
		$('#scrollcontent').scrollTo('#bebidas-r', 600);
	});
	$('#n-comentarios').click(function(event) {
		$('#scrollcontent').scrollTo('#comentarios-r', 600);
	});

	$('.btn-video').click(function(event){
		$('this').fadeOut(300);
		$('.btn-gal').fadeIn(300);
		$('.gal-images').fadeOut(100);
		$('.gal-video').fadeIn(300);
	});

	$('.btn-gal').click(function(event){
		$('this').fadeOut(300);
		$('.btn-gal').fadeOut(300);
		$('.gal-images').fadeIn(100);
		$('.gal-video').fadeOut(300);
	});
	/***ubicacion***/
	$('.ver-mapa').click(function(){
		$('.content-pop-ubicacion, .bg-pop-ubicacion').fadeIn(300);
	});
	$('.equis-ubicacion').click(function(){
		$('.content-pop-ubicacion, .bg-pop-ubicacion').fadeOut(300);
	});
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

	/****finder***/
	$('.find-restaurant').click(function(){
		$('.nav-header li find-restaurant i.fa.fa-angle-down').animate({
			opacity:'0',
		});
		$('.content-finder').slideToggle();
	});


});