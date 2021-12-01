const pluses = document.querySelector(".plus");
const CategoryItem = document.querySelector(".CategoryItem")
if(pluses){
    pluses.addEventListener("click", function (e) {
        e.preventDefault();
     
        console.log(CategoryItem.style.height);
        if (CategoryItem.style.height == "612px") {
            CategoryItem.style.height = "693px"
            CategoryItem.style.transition = '0.2s linear'
        } else {
            CategoryItem.style.height = "612px"
         
        }
    })
}
//Subscribe Close butoons js
const Close = document.querySelector(".close");
if(Close){
    Close.addEventListener("click", function (e) {
        e.preventDefault()
        const div = document.querySelector(".modal-dialog")
        div.style.display = "none";
    })
}
//atibute

const TabNavigations = Array.from(document.querySelectorAll(".nav .fil_btn"))
const TabContext2 = Array.from(document.querySelectorAll("#nav-tabContent .tab-pane"))

const ClearActive = () => {
    TabNavigations.forEach(TabNavigation=> {
        TabNavigation.classList.remove("active")
    });
    TabContext2.forEach(TabContexts => {
        TabContexts.classList.remove("active")
    });
}

TabNavigations.forEach(TabNavigation=> {
    TabNavigation.onclick = function () {
        ClearActive();
        const datatargetId = TabNavigation.getAttribute("data-target");
        const targetContext = document.getElementById(datatargetId);
        TabNavigation.classList.add("active")
        targetContext.classList.add("active")
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



// //Zoom
// $("#zoomModal").on('shown.bs.modal', function (){
//     $("#zoompro").elevateZoom({
//         gallery: "gallery",
//         galleryActiveClass: "active",
        
//         easing: true,
//         zoomType: 'inner',
//         cursor: 'crosshair',
//     });
// });

// $("#zoompro2").elevateZoom({
//     gallery: "gallery",
//     galleryActiveClass: "active",
//     easing: true,
//     zoomType: 'inner',
//     cursor: 'crosshair',
// });

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
let plus = document.querySelector(".quantity__plus");
let minus = document.querySelector(".quantity__minus");
let input = document.querySelector(".quantity__qtn");
if(plus){
    plus.addEventListener('click', function(){
        input.value = parseInt(input.value) + 1;   
    })
    
    minus.addEventListener('click', function(){
        if(parseInt(input.value) > 1){
            input.value = parseInt(input.value) - 1;   
        }else{
            input.value = parseInt(input.value) - 0; 
        }   
    })
}


