/**
 * Lib to display alerts in specific positions of the page.
 * @author gabriel.scarvalho310@gmail.com
 * */
(function($) {
    var Plugin = function(options) {

        $p = {};
        $p.prototype = {};

        $p.prototype.enums = {
            'addOrder': ['top', 'bottom']
        };
        /**
         * Keep the identifier of the spaces on the screen.
         */
        $p.prototype.registeredNames = [];

        $p.prototype.defaults = {
            'top-left': {
                'id': 'corner-alert-top-left',
                'top': '20px',
                'left': '20px',
                'right': 'unset',
                'bottom': 'unset',
                'addOrder': 'bottom',
                'extra-class': ''
            },
            'top-right': {
                'id': 'corner-alert-top-right',
                'top': '20px',
                'left': 'unset',
                'right': '20px',
                'bottom': 'unset',
                'addOrder': 'bottom',
                'extra-class': ''
            },
            'bottom-left': {
                'id': 'corner-alert-bottom-left',
                'top': 'unset',
                'left': '20px',
                'right': 'unset',
                'bottom': '20px',
                'addOrder': 'top',
                'extra-class': ''
            },
            'bottom-right': {
                'id': 'corner-alert-bottom-right',
                'top': 'unset',
                'left': 'unset',
                'right': '20px',
                'bottom': '20px',
                'addOrder': 'top',
                'extra-class': ''
            }

        };

        /**
         * Creates each place to put the alerts.
         * */
        $p.prototype.init = function() {

            for (var property in $p.options) {

                $p.prototype.registeredNames.push(property);

                var elmAttr = $p.options[property];

                var template = $("<div>", {
                    'id': elmAttr['id'],
                    'class': 'corner-alerts-container ' + elmAttr['extra-class']
                });

                $('body').append(template);
                $('body').find($('#' + elmAttr['id'])).
                css({
                    'top': elmAttr['top'],
                    'left': elmAttr['left'],
                    'right': elmAttr['right'],
                    'bottom': elmAttr['bottom'],
                    'display': 'none'
                });
                $p.options[property]['size'] = 0;


            }
        };

        /**
         * Creates the element hidden if it doesnot exists.
         * @var position where in the page it will be displayed.
         * accepted values: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
         * @var elm the jQuery dom element.
         * */
        $p.createOrReplace = function (position, elm) {
            elm.hide();
            elm.attr('data-corner-alert-visible', false);
            
            if (!$p.options[position]) {
                throw new Error("Invalid Option '" + position + "' to create corner alert. Registered values are: " + $p.prototype.registeredNames);
            }

            var parentData = $p.options[position];
            var $parent = $('#' + parentData['id']);

            if (parentData['addOrder'] === 'bottom') {
                $parent.append(elm);

            } else if (parentData['addOrder'] === 'top') {
                $parent.prepend(elm);

            } else {
                throw new Error('Invalid addOrder param: "' + parentData['addOrder'] + '", valid values are: ' + $p.prototype.enums['addOrder']);
            }
        };

        /**
         * Display an alert.
         * @var position where in the page it will be displayed.
         * accepted values: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
         * @var elm the jQuery dom element.
         **/
        $p.show = function(position, elm) {

            $p.createOrReplace(position, elm);
           
            var parentData = $p.options[position];
            var $parent = $('#' + parentData['id']);

            $parent.show();
            $parent.find(elm).show();
            $parent.find(elm).attr('data-corner-alert-visible', true);
        };

        $p.hide = function(position, elm) {

            
            $p.createOrReplace(position, elm);

            if (!$p.options[position]) {
                throw new Error("Invalid Option '" + position + "' to create corner alert. Registered values are: " + $p.prototype.registeredNames);
            }

            var parentData = $p.options[position];
            var $parent = $('#' + parentData['id']);

            
            $parent.find(elm).hide();
            $parent.find(elm).attr('data-corner-alert-visible', false);

            if (! $parent.find('[data-corner-alert-visible="true"]').length ) {
                $parent.hide();
            }

        };

        return $p;
    };



    var $this = new Plugin();

    $.fn.cornerAlertsInit = function(options) {

        $this.options = $.extend({}, $this.prototype.defaults, options);

        $this.prototype.init();

        return $this;
    };


    $.fn.cornerAlert = function(position, action) {

        if (!$this.options) {
            console.info('corner-alert was not initialized - using default values.');
            console.info('Use: $("body").cornerAlertsInit(options); to initialize with your specifications.');
            $('body').cornerAlertsInit();
        }

        if (action === 'show') {
            $this.show(position, this);
        } else if (action === 'hide') {
            $this.hide(position, this);
        } else {
            throw new Error('Invalid action: "' + action + '" expected are: hide, show');
        }

    }


}(jQuery));