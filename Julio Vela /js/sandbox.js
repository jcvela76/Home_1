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
});


my_array = [0,1,2,3,4,5]

function delete_index(array,index){
	new_array = [[]];
	for (var i = 0; i  < array.length ; i++) {
		if (index != i)
		{
			new_array.push(array[i])
		}
		
	};
	return new_array;
}
console.log(delete_index(my_array,2))