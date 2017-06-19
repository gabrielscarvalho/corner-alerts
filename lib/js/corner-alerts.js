(function($) {
	


	var Plugin = function (options) {

		$p = {};
		$p.prototype = {};
		$p.uniqueId = 0;
		$p.prototype.defaults = {
			'top-left' : {
				'id' : 'corner-alert-top-left',
				'top' : '20px',
				'left' : '20px',
				'right' : 'unset', 
				'bottom' : 'unset',
				'addOrder' : 'top',
				'extra-class' : ''
			},
			'top-right' : {
				'id' : 'corner-alert-top-right',
				'top' : '20px',
				'left' : 'unset', 
				'right' : '20px',
				'bottom' : 'unset',
				'addOrder' : 'top',
				'extra-class' : ''
			},
			'bottom-left' : {
				'id' : 'corner-alert-bottom-left',
				'top' : 'unset',
				'left' : '20px',
				'right' : 'unset', 
				'bottom' : '20px',
				'addOrder' : 'bottom',
				'extra-class' : ''
			},
			'bottom-right' : {
				'id' : 'corner-alert-bottom-right',
				'top' : 'unset',
				'left' : 'unset', 
				'right' : '20px',
				'bottom' : '20px',
				'addOrder' : 'bottom',
				'extra-class' : ''
			}			

		};

		/**
   		 * Creates each place to put the alerts.
   		 * */
   		 $p.prototype.init = function () {

   		 	for( var property in $p.options) {

   		 		var elmAttr = $p.options[property];

   		 		var template = $("<div>", {
   		 			'id' : elmAttr['id'],
   		 			'class' : 'corner-alerts-container ' + elmAttr['extra-class']
   		 		});

   		 		$('body').append(template);
   		 		$('body').find($('#'+elmAttr['id'])).append('IM HEEEERE: '+ elmAttr['id']);
   		 		$('body').find($('#'+elmAttr['id'])).
   		 		css({
   		 			'top' : elmAttr['top'],
   		 			'left' : elmAttr['left'],
   		 			'right' : elmAttr['right'],
   		 			'bottom' : elmAttr['bottom'],
   		 		});

   		 	}
   		 };

		/**
		 * Display an alert.
		 * @var position where in the page it will be displayed.
		 * accepted values: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
		 * @var addToListOrder how it will be added to the list - In the beggining (first) or end (last)
		 * accepted values: 'first'  | 'last'
		 * @var elm the jQuery dom element.
		 **/
		 $p.show = function(position, elm) {

		 };

		 $p.hide = function(position, elm) {

		 };

		 return $p;
		};



		var $this = new Plugin();

		$.fn.cornerAlerts = function(options) {

			$this.options = $.extend({}, $this.prototype.defaults , options);

			$this.prototype.init();
			console.log($this.options);

			return $this;
		};



	}(jQuery));