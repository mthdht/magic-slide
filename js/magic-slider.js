(function($) { //see point 3
    // the object slider with all the logic
    function Slider(element, data, options) {
        this.defaultOptions = {

        };
        this.options = $.extend({}, this.defaultOptions, options);
        this.element = element;
        this.slidesData = data;
    }

    // the plugin declaration using Slider object
    $.fn.slider = function(slidesData, options) { // see point 1, only 1 method
        var _ = this;

        this.each(function(index) {
            var currentElement = $(this);
            _[index] = new Slider(currentElement, slidesData, options);
        });

        return this;
    };

})(jQuery);