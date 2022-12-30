
// //mobile carousel

var totalItems = $('#testimonials .carousel-item').length;
var currentIndex = $('#testimonials div.active').index() + 1;

if(currentIndex==1){
  $('.slide-count').html('' + 1 + '/' + totalItems + '');
}

$('#bigCarousel').on('slid.bs.carousel', function() {
  currentIndex = $('div.active').index() + 1;
 $('.slide-count').html(''+currentIndex+'/'+totalItems+'');
 if(currentIndex> totalItems){
  $('.slide-count').html('' + 1 + '/' + totalItems + '');
}

});

$('.carousel').carousel({
  interval: 5000
});



  

  

// Set all carousel items text to the same height
function carouselNormalization() {
        
  window.heights = [], //create empty array to store height values
  window.tallest; //create variable to make note of the tallest slide
  
  function normalizeHeights() {
      jQuery('.multi-item-carousel .carousel-inner .carousel-item .item__inner .client-says').each(function() { 
          window.heights.push(jQuery(this).outerHeight());
      });
      window.tallest = Math.max.apply(null, window.heights);
      jQuery('.multi-item-carousel .carousel-inner .carousel-item .item__inner .client-says').each(function() {
          jQuery(this).css('min-height',tallest + 'px');
      });
  }
  normalizeHeights();


  
}

jQuery( document ).ready(function() {
  carouselNormalization();
});

