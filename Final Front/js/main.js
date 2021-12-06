const pluses = document.querySelector(".plus");
const CategoryItem = document.querySelector(".CategoryItem")
if (pluses) {
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

var Closebuton = document.getElementsByClassName("close")[0]
if (Closebuton!=null) {
    // console.log("hi");
    Closebuton.addEventListener("click", function (e) {
        // console.log("salam");
        e.preventDefault()
        var divs = document.getElementsByClassName("modal-dialog")[0]
        divs.style.display = "none";

    })
}

let modalArr = Array.from(document.querySelectorAll('.info_pro2'));
for (let modal of modalArr) {
    modal.addEventListener('click', function (e) {
        e.preventDefault();
        modal.classList.remove("show")
        modal.style.display = "block"

    })
}



//atibute

const TabNavigations = Array.from(document.querySelectorAll(".nav .fil_btn"))
const TabContext2 = Array.from(document.querySelectorAll("#nav-tabContent .tab-pane"))

const ClearActive = () => {
    TabNavigations.forEach(TabNavigation => {
        TabNavigation.classList.remove("active")
    });
    TabContext2.forEach(TabContexts => {
        TabContexts.classList.remove("active")
    });
}

TabNavigations.forEach(TabNavigation => {
    TabNavigation.onclick = function () {
        ClearActive();
        const datatargetId = TabNavigation.getAttribute("data-target");
        const targetContext = document.getElementById(datatargetId);
        TabNavigation.classList.add("active")
        targetContext.classList.add("active")
    }
})
    ;
// const Modalicon = document.querySelectorAll(".modalIcon")

// if(Modalicon){
//     Modalicon.addEventListener("click", function (e) {
//         e.preventDefault();
//         const dataTarget = document.getElementById("compareModal");
//         dataTarget.style.display = "block"

//     });
// }
// Faq item Answers
$('.faq__list-item').click(function () {
    $(this).children('.item-answer').slideToggle();
    $('.faq__list-item').not(this).children('.item-answer').hide();
    $(this).children('.item__faq').children('.item__faq-icon').children('.fa-plus').toggleClass('hide');
    $(this).children('.item__faq').children('.item__faq-icon').children('.fa-minus').toggleClass('hide');
    $('.faq__list-item').not(this).children('.item__faq').children('.item__faq-icon').children('.fa-plus').removeClass('hide');
    $('.faq__list-item').not(this).children('.item__faq').children('.item__faq-icon').children('.fa-minus').addClass('hide');

})

//checkout
$('.main__info-btn').click(function () {
    $(this).parent().parent().siblings().slideToggle();
})

$('.main__checkbox').click(function () {
    $(this).siblings('.main__form').slideToggle();
})



//back to top
$(window).on("scroll", function (event) {
    if ($(this).scrollTop() > 600) {
        $(".back-to-top").fadeIn(200);
    } else {
        $(".back-to-top").fadeOut(200);
    }
});

//Product list item in js Grid System grid addd col3 and list

$('.right__view-icon').on('click', function () {
    if ($(this).hasClass('grid')) {
        $('.shop-container').removeClass('list').addClass('grid');
        $(this).addClass('active').siblings().removeClass('active');
    }
    else if ($(this).hasClass('list')) {
        $('.shop-container').removeClass('grid').addClass('list');
        $(this).addClass('active').siblings().removeClass('active');
    }
    $(".shop-container").append('<div class="loading"><div class="mfp-preloader"></div></div>');
    setTimeout(function () {
        $('.loading').remove();
    }, 800);
});
//Product Color JS
$('.info__switch-color span').each(function () {
    var get_color = $(this).attr('data-color');
    $(this).css("background-color", get_color);
});

$('.info__switch-color span,.product_size_switch span').on("click", function () {
    $(this).siblings(this).removeClass('active').end().addClass('active');
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


    //search buttonss
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
close.forEach(function (item) {
    item.addEventListener('click', function () {
        $('.zoomContainer').remove();
    })
})



//Rate
// let star = document.querySelectorAll(".star__item");
// star.forEach(function (item) {
//     item.addEventListener('click', function () {
//         this.classList.add('fas');
//         this.previousElementSibling.classList.add('fas');
//         this.nextElementSibling.classList.remove('far');
//     })
// })



//Plus and Minus Product
let plus = document.querySelector(".quantity__plus");
let minus = document.querySelector(".quantity__minus");
let input = document.querySelector(".quantity__qtn");
if (plus) {
    plus.addEventListener('click', function () {
        input.value = parseInt(input.value) + 1;
    })

    minus.addEventListener('click', function () {
        if (parseInt(input.value) > 1) {
            input.value = parseInt(input.value) - 1;
        } else {
            input.value = parseInt(input.value) - 0;
        }
    })
}
//sticky Navbar Fixed

window.addEventListener("scroll", function () {
    const NavbarFix = document.querySelector("#secondnavbar")
    if (NavbarFix != null) {
        NavbarFix.classList.toggle("sticky", window.scrollY > 300)
    }
})





