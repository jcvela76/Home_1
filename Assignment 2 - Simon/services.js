angular.module('MyApp')

.factory('Person', function() {

	function Person(name, Assigments) {
		this.name = name;
		this.Assigments = [];
		
	}

	Person.prototype.setScores = function(arrayAs) {
		this.Assigments = arrayAs;
	};

	Person.prototype.aveScore = function(){
		var count = 0;
		var ave = 0;
		

		if (this.Assigments.length > 0){

			for (var i = 0; i < this.Assigments.length; i++) {
			count += this.Assigments[i].score;
			
			};

			ave = count/this.Assigments.length
		}

		return ave
	}


	return Person;
})
.service('funAssigments', function(){
	var self = this

	self.calculateAverangeScore = function(arrayAs){

		var count = 0;
		var ave = 0;
		for (var i = 0; i < arrayAs.length; i++) {
			count += arrayAs[i];
			console.log('passing data')
		};

		ave = count/arrayAs.length


		return ave
	}


})