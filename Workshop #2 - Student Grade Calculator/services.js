angular.module('MyApp')
.service('FunAssigments', function(){
	var self = this

	self.getGrade = function(score){
		console.log('getgrade');
	    var grade = '';
	    if (score > 90){
	      grade = 'A';

	    }
	    else if(score <= 90 && score >80){
	      grade = 'B';
	    }
	    else if(score <= 80 && score >70){
	      grade = 'C';
	    }
	    else if(score <= 70 && score >51){
	      grade = 'D';
	    }
	    else{
	      grade = 'F';
	    }
	    return grade
	 }

	

})
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
