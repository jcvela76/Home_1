//initial app
var myMod = angular.module('MyApp', []);

myMod.controller('MyController', function(){
	var self = this;
	self.headerTitle = "Welcome Angular 2015";




	self.redValue = {
    class: 'red'
	  };

	 self.greenValue = {
	    class: 'green'
	  };

	 self.blueValue = {
	    class: 'blue'
	  };
	self.yellowValue = {
    class: 'yellow'
	  };

	 self.orangeValue = {
	    class: 'orange'
	  };

	 self.grayValue = {
	    class: 'gray'
	  };  
	  self.userObjectSelection = self.grayValue;
});
