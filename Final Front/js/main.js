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
const Close = document.querySelector(".close");
Close.addEventListener("click", function (e) {
    e.preventDefault()
    const div = document.querySelector(".modal-dialog")
    div.style.display = "none";
})
//atibute

const TabNavigations = Array.from(document.querySelectorAll(".nav li button"))
const TabContext2 = Array.from(document.querySelectorAll("nav-tabContent .fade"))

const ClearActive = () => {
    TabNavigations.forEach(TabNavigations => {
        TabNavigations.classList.remove("active")
    });
    TabContext2.forEach(TabContext => {
        TabContext.classList.remove("active")
    });
}

TabNavigations.forEach(TabNavigations => {
  
    TabNavigations.onclick = function () {
        ClearActive();
        const datatargetId = TabNavigations.getAttribute("data-target");
        const targetContext = document.getElementById(datatargetId);
        TabNavigations.classList.add("active")
        tabContent.classList.add("active")
    }
})
;



//back to top
$(window).on("scroll", function (event) {
    if ($(this).scrollTop() > 600) {
        $(".back-to-top").fadeIn(200);
    } else {
        $(".back-to-top").fadeOut(200);
    }
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
    $(".menu_search-item-search").click(function () {
        $(".search_wrap").addClass("show");
        $(".search_overlay").addClass("show");
    });

    $(".close-search").click(function (e) {
        e.stopPropagation()
        $(".search_wrap").removeClass("show");
        $(".search_overlay").removeClass("show");
    });











})(jQuery);
let close = document.querySelectorAll('.close-zoom');
close.forEach(function(item){
    item.addEventListener('click', function(){
        $('.zoomContainer').remove();
    })
})

// let modal = document.querySelectorAll('.modal-dialog');
//     modal.forEach(function(item){
//         item.addEventListener('click', function(){
//             $('.zoomContainer').remove();
//         })
//     })



//Zoom
$("#zoomModal").on('shown.bs.modal', function (){
    $("#zoompro").elevateZoom({
        gallery: "gallery",
        galleryActiveClass: "active",
        
        easing: true,
        zoomType: 'inner',
        cursor: 'crosshair',
    });
});

$("#zoompro2").elevateZoom({
    gallery: "gallery",
    galleryActiveClass: "active",
    easing: true,
    zoomType: 'inner',
    cursor: 'crosshair',
});

//Rate
let star = document.querySelectorAll(".star__item");
star.forEach(function(item){
    item.addEventListener('click', function(){
        this.classList.add('active');
        this.previousElementSibling.classList.add('active');
        this.nextElementSibling.classList.remove('active');
    })
})

// //Fancy Box
// $(".box__btn").on("click", function () {
//     // set gallery targets
//     var gallery = [{
//         href: "assets/images/product_img1.jpg"
//     }, {
//         href: "assets/images/product_img1-2.jpg"
//     }, {
//         href: "assets/images/product_img1-3.jpg"
//     }, {
//         href: "assets/images/product_img1-4.jpg"
//     }];
//     // triggers fancybox programmatically
//     $.fancybox(gallery, {
//         // API options here
//     });
//     return false; // prevents default and stops propagation 
// });



//Plus and Minus Product
let plusBtn = document.querySelector(".quantity__plus");
let minusBtn = document.querySelector(".quantity__minus");
let input = document.querySelector(".quantity__qtn");
plusBtn.addEventListener('click', function(){
    input.value = parseInt(input.value) + 1;   
})

minusBtn.addEventListener('click', function(){
    if(parseInt(input.value) > 1){
        input.value = parseInt(input.value) - 1;   
    }else{
        input.value = parseInt(input.value) - 0; 
    }   
})

