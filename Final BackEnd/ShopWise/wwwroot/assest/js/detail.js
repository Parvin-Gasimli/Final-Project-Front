//Details counter

//
//Modal Cart  increase
$( ".spinner-prev" ).click(function() {
    var prev = parseInt($(".spinner input").val());
    console.log(prev);
    if(prev == 1){
         $(".spinner input").val('1');
  
        }
        else{
          var prevVal = prev - 1;
          $(".spinner input").val(prevVal);
      
        }
  });
  
  
  // Modal Cart decrease
  
  $( ".spinner-next" ).click(function() {
    var next = parseInt($(".spinner input").val());
    // console.log(next);
    if(next >= 100){
         $(".spinner input").val('100');
  
        }
        else{
          var nextVal = next + 1;
          $(".spinner input").val(nextVal);
      
        }
  });
    
  //input's limite
  
  $( ".number-spinner" ).on("change", function(){
    var inputValue = parseInt($(".spinner input").val());
    if(inputValue >= 100){
      $( ".number-spinner" ).val("100");
    }
    else if(inputValue <= 0){
      $( ".number-spinner" ).val("0");
    }
  });
  
  
  ///Detail's tab button control
  
  //On description Off review
  $( "#desc" ).click(function() {
  
    if(!$(this).hasClass( "active" )){
      $(this).addClass("active");
      $("#review").removeClass("active");
      $(".reviews").addClass("d-none");
      $(".write-comment").addClass("d-none");
      $(".description").removeClass("d-none");
    }
  });
  
  //On review Off description
  
  $( "#review" ).click(function() {
  
    if(!$(this).hasClass( "active" )){
      $(this).addClass("active");
      $("#desc").removeClass("active");
      $(".description").addClass("d-none");
      $(".reviews").removeClass("d-none");
      $(".write-comment").removeClass("d-none");
    }
  });
  
  
  
  //starts control
  
  
  //Default image Detail
  $(".imgBox img").attr("src", $(".mini-image-box li:first-child img").attr("src"));
  //Get default product color
  var defaultPrdColor = $('.mini-image-box li:first-child img').data("img-color");
  //Set default color to button
  $('.detail-prd-color').find('.'+defaultPrdColor).children().css({"opacity":"1"});
  
  $(".mini-img").click(function(){
    var value = $(this).attr("src");
    $(".imgBox img").attr("src",value);
  
    var btnBox = $(`.detail-prd-color`);
  
    var classValue = '.' + $(this).data("img-color");
    var btn = btnBox.find(classValue);
  
    $(".detail-prd-color span i").css({"opacity":"0"});
  
    btn.children().css({"opacity":"1"});
  
  
  });
  
  ///Change pictures by color control - Detail
  $('.detail-prd-color span').click(function(){
    $(".detail-prd-color span i").css({"opacity":"0"});
    var color = $(this).data("btn-color");
  
    if(color == "white"){
    $(this).find("i").css({"opacity":"1","color":"black"});
    }
    $(this).find("i").css({"opacity":"1"});
  
  
    var currentImage = $(`[data-img-color="${color}"]`);
    var currentImageSrc = currentImage.attr("src");
    $(".imgBox img").attr("src", currentImageSrc);
  
    
  })
  
  ///Change detail product size
  $('.detail-prd-size ul li').click(function(){
    $('.detail-prd-size ul li').removeClass("active");
    $(this).addClass("active");
  })
