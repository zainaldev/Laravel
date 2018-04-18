//event pada saat link di klik
$('.page-scroll').on('click', function(){

//ambil isi href
var href = $(this).attr('href');
//tangkap elemen

var elemenHref =$(href);


//console.log(elemenHref);
$('body').animate({
	scrollTop: elemenHref.offset().top -50
},1250)

});


//about
$(window).on('load',function(){
	$('.pkiri').addClass('pmuncul');
	$('.pkanan').addClass('pmuncul');

});

//paralax

$(window).scroll(function(){
	var wScroll =$(this).scrollTop();

	$('.jumbotron img').css({
		'transform' :'translate(0px,'+ wScroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' :'translate(0px,'+ wScroll/2 +'%)'
	});

	$('.jumbotron p').css({
		'transform' :'translate(0px,'+ wScroll/1.2 +'%)'
	});

	//portfolio

	if( wScroll > $('.portfolio').offset().top - 250){
		$('.portfolio .thumbnail').each(function(i) {
			setTimeout(function(){
				
		 $('.portfolio .thumbnail').eq(i).addClass('muncul');
			}, 300 * (i+1));
		});
		// $('.portfolio .thumbnail').addClass('muncul');
	} 


});