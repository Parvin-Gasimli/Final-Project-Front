



$(document).ready(function(){

   
 
    $(".header__icon").click(function(){
        $(".list-item").toggleClass('show');
    });
    $(".menu1").click(function(){
        $(".nav1").slideToggle(-10000000);
    });
    $(".list_item").click(function(e){
        e.stopPropagation()
    });
    $(".text-capitalize").click(function(e){
        e.stopPropagation()
    });
    $(".menu2").click(function(){
        $(".nav2").slideToggle(-10000000);
    });
    $(".menu3").click(function(){
        $(".nav3").slideToggle(-10000000);
    });
    $(".menu4").click(function(){
        $(".nav4").slideToggle(-10000000);
    });
    $(".menu5").click(function(){
        $(".nav5").slideToggle(-10000000);
    });
    $(".bl1").click(function(){
        $(".list").slideToggle(-10000000);
    });
    $(".bl2").click(function(){
        $(".list_masonry").slideToggle(-10000000);
    });
    $(".bl3").click(function(){
        $(".list_sig").slideToggle(-10000000);
    });
    $(".bl4").click(function(){
        $(".list_l").slideToggle(-10000000);
    });
    $('.modal__main-check').click(function(){
        $('.modal__main-check').toggleClass('checked');
    });  

    $('.actions__remember').click(function(){
        $(this).toggleClass('checked');
    })

    $('.main__checkbox').click(function(){
        $(this).toggleClass('checked');
    })

    $('.payment__item-checkbox').click(function(){
        $(this).addClass('checked');
        $('.payment__item-checkbox').not(this).removeClass('checked');

        $(this).siblings().slideDown();
        $('.payment__item-checkbox').not(this).siblings().slideUp();
    })

    

    $(".countries-second").click(function(){
        $(".countries_nav").css("opacity","1");
        $(".countries_nav").css("transform","scale(1) translateY(0)");
        $(".countries_nav").css("z-index","99999");
        $(".countries_nav").slideToggle(-1000000);
        
    });
    $(".money-second").click(function(){
        $(".money_nav").css("opacity","1");
        $(".money_nav").css("transform","scale(1) translateY(0)");
        $(".money_nav").css("z-index","99999");
        $(".money_nav").slideToggle(-1000000);
        
    });
    
    //eroor js
        // let nation = document.querySelectorAll(".countries_item");
        // let op_itemshow = document.querySelector(".ddcontries");
        // console.log(nation);
        // nation.forEach(function (item) {
        //   item.addEventListener("click", function () {
        //     op_itemshow.innerHTML = this.innerHTML+'<i class="fas fa-angle-down"></i>';
        //   });
        // });
        
        // let nation2 = document.querySelectorAll(".money_item");
        // let op_itemshow2 = document.querySelector(".ddmoney");
        // console.log(nation2);
        // nation2.forEach(function (item2) {
        // item2.addEventListener("click", function () {
        //   op_itemshow2.innerHTML = this.innerHTML+'<i class="fas fa-angle-down"></i>';
        // });
        // });
    
        // let nation3 = document.querySelectorAll(".img_item");
        // let op_itemshow3 = document.querySelector(".head_img");
        // console.log(nation3);
        // nation3.forEach(function (item3) {
        //   item3.addEventListener("click", function () {
        //     op_itemshow3.innerHTML = this.innerHTML;
        //   });
        // });
    
   
        var btn = $('#button');
    
    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });
    
    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    });

 

    
})


AOS.init({

    offset: 120, 
    delay: 0,
    duration: 1400, 
    easing: 'ease', 
    once: false, 
    mirror: false, 
    anchorPlacement: 'top-bottom',
    });
