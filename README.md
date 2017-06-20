# corner-alerts

Helps you to display alerts in the corners of the page.


## Mode of use

1st Import required files:

```
	<script src=".../jquery.min.js"></script>
	<script src="lib/js/corner-alerts.js"></script>
	<link rel="stylesheet" href="lib/css/style.css"/>

```


2nd Create your alerts HTML as you wish.

```	
	<div id="test1" class="alert" >
		An alert that I can make whatever I want.
		<button class="close" onclick="$('#test1').cornerAlert('bottom-right', 'hide');">X</button>
	</div>

```

3nd Initiate the plugin

```
	$(document).ready(function(){ 
		$('body').cornerAlertsInit(options);
		$('#test1').cornerAlert('bottom-right', 'show');
		setInterval(function(){
			$('#test1').cornerAlert('bottom-right', 'hide');
		}, 5000);
	});

```


##Options

You can override any of these options and create new ones.

```
	{
			'top-left': { //identifier that is used in cornerAlert(string, 'hide' | 'show')
				'id': 'corner-alert-top-left', //unique id to place
				'top': '20px',  
				'left': '20px',
				'right': 'unset',
				'bottom': 'unset',
				'addOrder': 'bottom', // when adds a new data, will put in the bottom (as last)
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
				'addOrder': 'top',  // when adds a new data, will put in the top (as first)
				'extra-class': ''
			},
			'MY_CUSTOM_POSITION' : {
				'id': 'corner-alert-top-middle',
				'top': '10px',
				'left': '500px',
				'right': 'unset',
				'bottom': 'unset',
				'addOrder': 'top',  // when adds a new data, will put in the top (as first)
				'extra-class': ''
			}

		};
```
Then you can call

```
	$('#id').cornerAlerts('MY_CUSTOM_POSITION', 'show');

```





