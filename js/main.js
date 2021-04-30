var sliderData = [
    {search:"New+Haven+CT", caption: "Photo caption: New Haven CT"},
    {search:"John+James+Audubon+Birds", caption: "Photo caption: John James Audubon Birds"},
    {search:"Georgia+O'Keeffe", caption: "Photo caption: Georgia O'Keeffe"},
    {search:"Alchemy", caption: "Photo caption: Alchemy"},
    {search:"Samuel+Prout", caption: "Photo caption: Samuel Prout"}
];


$(document).ready(function(){

    $('.bg-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-container'
    });

    $('.slider-container').slick({
        autoplay: true,
        autoplaySpeed: 10000,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.bg-slider',
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
    });

    updateSliderText(0);
    $(".slider-container").css("opacity",1);
    $(".bg-slider").css("opacity",1);

    $('.slider-container').on('beforeChange',function(event, slick, currentSlide, nextSlide) {
        updateSliderText(nextSlide);
    });

    $(".slider-item").on('mouseover',function() {
        $(".slider-item p").css("opacity",0);
        $(this).find("p").css("opacity",0.9);
    });


    $(".slider-item").on('click',function() {
        var num = $(this).find("p").eq(0).attr("rel");
        var term = sliderData[num].search.split("+").join(" ");
        // console.log(num + " | " + term);
        document.getElementById("search_term").value = term;
        $("#search_button").focus();
    });
    

    $(".slider-item").on('mouseout blur',function() {
        $(".slider-item p").css("opacity",0);
    });
  
    $.fn.bootstrapSwitch.defaults.size = 'small';
    $.fn.bootstrapSwitch.defaults.onColor = 'success';

    $("[name='has-images']").bootstrapSwitch({
        offText: "Online only",
        onText: "All items",
        offColor: "default",
        onColor: "success",
        size: "small",
    });

    $(".bootstrap-switch-undefined").removeClass("bootstrap-switch-undefined").addClass("bootstrap-switch-mini");

});

  function updateSliderText(num) {

    $(".slider-caption-text").html(sliderData[num].caption);
    $("#search_term").attr("placeholder",sliderData[num].search.split("+").join(" ") + " ");

  }

