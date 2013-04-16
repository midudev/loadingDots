(function($)
{
  $.fn.loadingdots = function( options )
  {
    var settings = $.extend( {}, { dots: 3, duration : 100 }, options );
    var i = 0;

    return this.each( function()
    {
      var dots = $( this ).html( '<span class="dot"></span><span class="dot"></span><span class="dot"></span>' ).find( '.dot' );
      dots.each( bucle );
    });

    function bucle() {
      var $el = $( this ), cycle;
      timing = i * settings.duration;
      i++;
      (cycle = function() {
         $el.delay( timing )
              .fadeTo( 'slow', 0.4 )
              .delay( timing )
              .fadeTo( 'slow', 0, cycle );
      })();
    }

  };
})(jQuery);