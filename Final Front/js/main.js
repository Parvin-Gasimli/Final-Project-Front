const plus = document.querySelector(".plus");
const CategoryItem = document.querySelector(".CategoryItem")
plus.addEventListener("click", function (e) {
    e.preventDefault();
    // CategoryItem.style.height = "600px"
    // CategoryItem.style.transition = '0.3s linear'
    console.log(CategoryItem.style.height);
    if (CategoryItem.style.height == "612px") {
        CategoryItem.style.height = "693px"
        CategoryItem.style.transition = '0.2s linear'
    } else {
        CategoryItem.style.height = "612px"
        console.log("salam");
    }
})

//Subscribe Close butoons js
const Close=document.querySelector(".close");
Close.addEventListener("click",function(e){
    e.preventDefault()
    const div=document.querySelector(".modal-dialog")
    div.style.display = "none";
})







$('.slider').slick({
    dots: true,
    prevArrow: '<i class="fas fa-chevron-left left"></i>',
    nextArrow: '<i class="fas fa-chevron-right right"></i>',
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 968,
            settings: {
                
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 520,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});





$('.slider1').slick({
    dots: true,
    prevArrow: '<i class="fas fa-chevron-left left"></i>',
    nextArrow: '<i class="fas fa-chevron-right right"></i>',
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 968,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 520,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
});

(function ($) {
    'use strict';
    //Loader run the  then open the page function
    $(window).on('load', function () {
        setTimeout(function () {
            $(".preloader").delay(700).fadeOut(700).addClass('loaded');
        }, 700);
    });


    $(window).on('load', function () {
        setTimeout(function () {
            $(".preloader").delay(700).fadeOut(700).addClass('loaded');
        }, 700);
    });

    $(window).on('load', function () {
        setTimeout(function () {
            $("#onload-popup").modal("show", {}, 500);
        }, 3200);


    });


    


    // //filter
    // $('.cards-links ul li').click(function() {
    //     // store anything commonly called in variables to speed up your code
    //     const $this = $(this);
    //     const $link = $this.children();
    //     $('.cards-links .nav-link').removeClass('active');
    //     $link.addClass('active');
    //     const linkItem = $this.data("filter");


    //     console.log(linkItem);


    //     if($( ".card-items .card" ).hasClass(linkItem)){
    //         const $items = $(".card-items");

    //       //   opacity off and on
    //         $('.card-items .card').addClass('anime-Opacity');




    //         console.log($items);

    //         $items.children('div:not(.' + linkItem + ')').hide();
    //           //   show all elements that do share ourClass
    //             $items.children('div.' + linkItem).show();
    //     }

    //   });
    $(".menu_search-item-search").click(function(){
        $(".search_wrap").addClass("show");
        $(".search_overlay").addClass("show");
    });
    
    $(".close-search").click(function(e){
        e.stopPropagation()
        $(".search_wrap").removeClass("show");
        $(".search_overlay").removeClass("show");    
    });




     






})(jQuery);
