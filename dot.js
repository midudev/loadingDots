(function($)
{
  $.fn.loadingdots = function( options )
  {
    var settings, i;
    settings = $.extend( {}, { duration : 100 }, options );
    i = 0;

    return this.each( function()
    {
      $( this )
        .html( '<span class="dot"></span><span class="dot"></span><span class="dot"></span>' )
        .find( '.dot' )
        .each( bucle );
    });

    function bucle() {
      var $el = $( this ), cycle, timing;
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