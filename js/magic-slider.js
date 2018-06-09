(function($) { //see point 3
    // the object slider with all the logic
    function Slider(element, data, options) {
        this.defaultOptions = {
            // TODO: create all default options
        };
        this.options = $.extend({}, this.defaultOptions, options);
        this.element = element;
        this.slidesData = data;

        // TODO: create init method
        //this.init();
    }

    // tODO: create setOptions method
    /**
     * Change the options of slider and re-init it
     * @param options
     */
    Slider.prototype.setOptions = function (options) {

    };

    // TODO: create createSlide method
    /**
     * Create a slide based on data argument
     * @param slideData
     * @return Jquery DOM element
     */
    Slider.prototype.createSlide = function (slideData) {


    };

    // TODO: create createSlider method
    /**
     * Create the all DOM slider
     */
    Slider.prototype.createSlider = function () {

    };

    // TODO: create Slide method
    /**
     * Change the current slide with an other one
     * @param direction
     * @param from
     * @param to
     */
    Slider.prototype.slide = function (direction, from, to) {

    };

    // TODO: create next method
    /**
     * Show the next slide
     */
    Slider.prototype.next = function () {

    };

    // TODO: create prev method
    /**
     * Show the previous slide
     */
    Slider.prototype.prev = function () {

    };

    // TODO: create play method
    /**
     * Play the slider by showing the next slide continuously
     */
    Slider.prototype.play = function () {

    };

    // TODO: create pause method
    /**
     * Pause the slider
     */
    Slider.prototype.pause = function () {

    };

    // TODO: create eventsListeners method
    /**
     * Add the events listeners to next/prev button, right/left arrow keypress, slider bullets
     */
    Slider.prototype.eventsListeners = function () {

    };

    // TODO: create init method
    /**
     * Initialise the slider by creating slider DOM, events listener, play the slider (if in option)
     */
    Slider.prototype.init = function () {

    };



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