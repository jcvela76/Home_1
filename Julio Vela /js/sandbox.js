//initial app
angular.module('MyApp', [])

.controller('MyController', function(){
	var self = this;
	self.headerTitle = "Welcome Angular 2015";

	self.personalArray = [];
	self.workArray = [];
	self.tripArray = [];


self.itemObjectSelection = '';
self.errorDetect = false;

	self.addItem = function(){

		if (self.itemObjectSelection.length > 0){
			self.itemsArray.push(self.itemObjectSelection);
			self.itemObjectSelection ='';
			self.errorDetect = false;
		}	
		else{
			self.errorDetect = true;
		}
		
	}


	self.redValue = {
    	class: 'red',
    	class_div_1: 'red_div_1',
    	class_div_2: 'red_div_2'
	  };

	 self.greenValue = {
	    class: 'green',
	    class_div_1: 'green_div_1',
	    class_div_2: 'green_div_2'
	  };

	 self.blueValue = {
	    class: 'blue',
	    class_div_1: 'blue_div_1',
	    class_div_1: 'blue_div_2'

	  };
	self.yellowValue = {
    	class: 'yellow',
    	class_div_1: 'yellow_div_1',
    	class_div_2: 'yellow_div_2'
	  };

	 self.orangeValue = {
	    class: 'orange',
	    class_div_1: 'orange_div_1',
	    class_div_2: 'orange_div_2'
	  };

	 self.grayValue = {
	    class: 'gray',
	    class_div_1: 'gray_div_1',
	    class_div_2: 'gray_div_2'
	  };  
	self.userObjectSelection = self.grayValue;
	self.itemsArray = self.personalArray;
});


