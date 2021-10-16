$(function(){
         //Preloader section Starts 
        $(window).on("load", function(){
            $("#preloader").fadeOut(1000);
        })
        //Preloader section Ends
        /* Top Header New Slider Js Start */
   $('.top_header_news').slick({
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    autoplay:true,
 });
 /* Top Header New Slider Js End */
    $(window).on("scroll", function(){ 
        //Back To Top Starts 
        if(scrollPosition > 600){
            $("#backToTop").fadeIn(1000);
        }else{
            $("#backToTop").fadeOut(1000);
        }

    })
    $("#backToTop").on("click", function(){
        $("html,body").animate({
            scrollTop:0
        },3000);
    })
        //Back To Top Ends
        //Banner Slider Activation

    $('#banner').slick({
        fade: true,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 1000,
        prevArrow: '<i class="fas fa-chevron-right banner_slider_icon"></i>',
        nextArrow: '<i class="fas fa-chevron-left banner_slider_icon"></i>',
    }); 
    // featured categories slider
    $(".ftr_slider").slick({
        slidesToShow: 10,
        slidesToScroll: 1,
        prevArrow: '<i class="fas fa-arrow-left  ftr_slider_icon"></i>',
        nextArrow: '<i class="fas fa-arrow-right ftr_slider_icon"></i>',
    })
})
// wow js plugin
new WOW().init();