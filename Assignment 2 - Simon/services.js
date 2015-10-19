angular.module('MyApp')

.factory('Color', function() {

	function Color(color, active) {
		this.color = color;
		this.active = true;
		
	}

	Color.prototype.getColor = function() {
		return this.color;
	};

	Color.prototype.passColor = function(){
		this.active = false;
	}


	return Color;
})

.constant('COLOR_PLAY',['blue','yellow','red','orange'])

.service('funAssigments', function(){
	var self = this
	

	self.createColor = function(color_play){
		var x = Math.floor((Math.random() * 4 ) +1 );
		var color_random = color_play[x-1];

		// for (var i = 0; i < arrayAs.length; i++) {
		// 	count += arrayAs[i];
		// 	console.log('passing data')
		// };
		
		return color_random
	}


})

