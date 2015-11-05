
angular.module('MyApp', [])


.controller('MyController', function (Person,FunAssigments) {
  var self = this;

  self.arrayAssigments = [];
  self.Student = new Person('Julio', []);


     //self.Assigment = new Car('Honda', 'Accord');
    self.getGradeTotal = function(){
      var scoreFinal = self.Student.aveScore();
      var finalGrade = FunAssigments.getGrade(scoreFinal);
      return finalGrade;
      console.log('getGradeTotal:' +  finalGrade);
    } 
    self.addScore = function  (name,score) {
      //self.auxAssigment = new Assigment(name, score);
      //self.arrayAssigments.push(self.auxAssigment);


      self.arrayAssigments.push({'name':name, 'score':score, 'grade': FunAssigments.getGrade(score)});

      //console.log(calculateAverangeScore(self.arrayAssigments));
      self.Student.setScores(self.arrayAssigments)
      console.log(self.arrayAssigments);
      console.log(self.Student);
      console.log(self.Student.Assigments[0]);
      console.log(self.Student.aveScore());
      console.log(FunAssigments.getGrade(score))
    }

});