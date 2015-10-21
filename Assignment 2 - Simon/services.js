angular.module('MyApp')

.factory('Color', function() {

	function Color(color, active) {
		this.color = color || "blue";
		this.active = active ;
		
	}

	Color.prototype.getColor = function() {
		return this.color;
	};
	Color.prototype.getValidation = function() {
		return this.active;
	};

	Color.prototype.passColor = function(){
		this.active = false;
	}


	return Color;
})

// .value('COLOR_PLAY',[new Color("Blue",true),
// 					    {"color":"red","active":true},
// 					    {"color":"orange","active":true},
// 					    {"color":"yellow","active":true}
// 					    ])

.service('funAssigments', function(){
	var self = this


	self.selectRandon = function(array_select){
		var longitud = array_select.length;
		var x = Math.floor((Math.random() * longitud ) +1 );
		var element_random = array_select[x-1];
		return element_random;
	}


})

