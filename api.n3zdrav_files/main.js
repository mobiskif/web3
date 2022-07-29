    $(document).ready(function() {

$(document).on('click', '.subitem', function(){
window.location.hash = $(this).find('a').attr('href');
return false;
})

$(document).on('click', '.parentListParse', function(){

if($(this).find('ul').css('display') == 'block'){
		$(this).find('ul').css({'display':'none'})
	}else {$(this).find('ul').css({'display':'block'})}

})


   $('.menu_left ul > li').click(function(e) {
            e.stopPropagation();
            var $el = $('ul',this);
            $(this).toggleClass('menu_left_active')
            $('.menu_left ul > li > ul').not($el).slideUp();
            $el.stop(true, true).slideToggle(400);
        });
            $('.menu_left ul > li > ul > li').click(function(e) {
            e.stopImmediatePropagation();  
        });


/*
  $(document).on('click', '.menu_left ul  li', function(e) {

            e.stopPropagation();
            var $el = $('ul',this);
            $(this).toggleClass('menu_left_active')
            $('.menu_left ul > li > ul').not($el).slideUp();
            $el.stop(true, true).slideToggle(400);


 });
            $(document).on('click', '.menu_left ul  li  ul  li', function(e) {

            e.stopImmediatePropagation();  

        });

*/





        $(".menu_left_title").click(function(){
          $(".menu_left").slideToggle("slow");
		$(".menu_left_api").slideToggle("slow");
        });

/*
        $('.filter_abc').click(function() {
          $(".filter_abc").toggleClass("active");
          $(".filter_abc_pop").toggleClass("filter_abc_pop_block");
      });    


		$('.filter_abc_content .close').click(function() {
          $(".filter_abc").toggleClass("active");
          $(".filter_abc_pop").toggleClass("filter_abc_pop_block");
      });
*/

$('.filter_abc').click(function() {
$('.filter_abc').addClass('active');
$('.filter_abc_pop').addClass('filter_abc_pop_block');
});

$('.filter_abc_content .close').click(function() {
          $(".filter_abc").removeClass("active");
          $(".filter_abc_pop").removeClass("filter_abc_pop_block");
});


$('.filter_desc').click(function() {
        $(".filter_desc").addClass("active");
        $(".filter_desc_pop").addClass("filter_desc_pop_block");
});    


$('.filter_desc_content  .close').click(function() {
          $(".filter_desc").removeClass("active");
          $(".filter_desc_pop").removeClass("filter_desc_pop_block");
});



  $('.clmCAL').click(function() {
	$('.clmCAL').removeClass('active');
  	$('.filter_calendar_content').removeClass('filter_calendar_pop_block');
	$(this).addClass("active");

	$(this).parents('li').find('.clmCAL').addClass('thisCAL');

   	$(".filter_calendar_pop").addClass("filter_calendar_pop_block");
  }); 

  $('.filter_calendar_pop .close').click(function() {
		$('.clmCAL').removeClass('active');
		$(".filter_calendar_pop").removeClass("filter_calendar_pop_block");
	})



/*
      $('.filter_calendar').click(function() {
        $(".filter_calendar").toggleClass("active");

        $(".filter_calendar_pop").toggleClass("filter_calendar_pop_block");
    });    
  */


      
        $(".button-search-click").click(function() {
          $(".head-icons-block").toggleClass("head-icons-block-search");
          $(".button-search-click").toggleClass("button-search");
          $(".top_flex").toggleClass("add");
        });
        

/*
        $(".faq_click").click(function () {
          $('.tab-content,.nav-tabs').toggleClass("faq_click_width");
          $('.menu_left_wrap').toggleClass("hidden-lg hidden-md hidden-sm hidden-xs");
        });

        $(".support_click").click(function () {
          $('.tab-content,.nav-tabs').toggleClass("support_click_width");
          $('.menu_left_wrap').toggleClass("hidden-lg hidden-md hidden-sm hidden-xs");
        });
        $(".tab_click").click(function () {
          $('.tab-content,.nav-tabs').removeClass("support_click_width");
          $('.menu_left_wrap').removeClass("hidden-lg hidden-md hidden-sm hidden-xs");
        });
  */ 

      $(".toggle_mobile_btn").click(function() {
        $(".toggle_mobile_btn").toggleClass("on");
        $("body").toggleClass("body_overflow");
        $("header").toggleClass("open_menu");
         });

$('.head_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: true,
  dots: true,
  prevArrow: $('.head_left'),
  nextArrow: $('.head_right'),
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
arrows: false,
      }
    }
  ]

});

$('.api_slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: true,
  dots: false,
  adaptiveHeight: true,
  rows: 0,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
arrows: false,
      }
    },
    {
      breakpoint: 767,
      settings: 'unslick'
    }
  ]
})
.on('setPosition', function (event, slick) {
  slick.$slides.css('height', slick.$slideTrack.height() + 'px');
});



$('.project_slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: true,
  dots: false,
  adaptiveHeight: true,
  rows: 0,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
arrows: false,
      }
    },
    {
      breakpoint: 767,
      settings: 'unslick'
    }
  ]
})
.on('setPosition', function (event, slick) {
  slick.$slides.css('height', slick.$slideTrack.height() + 'px');
});


    });


    $(document).ready(function(){
      $("#video-active").on(
        "timeupdate", 
        function(event){
          onTrackedVideoFrame(this.currentTime, this.duration);
        });
    });
    
    function onTrackedVideoFrame(currentTime, duration){
        $("#current").text(currentTime); //Change #current to currentTime
        $("#duration").text(duration)
    }