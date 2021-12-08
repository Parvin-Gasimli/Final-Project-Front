$(function() {
 
    $(".sliders").slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: true,
    });
    
    $(".filter li").on('click', function(){
      var filter = $(this).data('filter');
      $(".sliders").slick('slickUnfilter');
      
      if(filter == 'red'){
        $(".sliders").slick('slickFilter','.red');
      }
      else if(filter == 'yellow'){
        $(".sliders").slick('slickFilter','.yellow');
      }
      else if(filter == 'blue'){
        $(".sliders").slick('slickFilter','.blue');
      }
      else if(filter == 'all'){
        
        $(".slider").slick('slickUnfilter');
      }
      
    })
    
  });
  