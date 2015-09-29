
var myMod = angular.module('MyApp', []);

myMod.controller('MyController', function () {
  var self = this;

  self.headerTitle = 'Hello World';
  self.subText = 'Welcome to George\'s Application';
  
  self.counter = 0;
  self.increaseCount = function() {
    self.counter++;
  };

  // self.username = 'George';

  self.simpleArray = ['Item1', 'Item2', 'Item3'];

  self.objectArray = [{name: 'George'}, {name: 'Tom'}, {name: 'Harry'}];

  self.myObject = {
    fname: 'George',
    lname: 'Dagher',
    year: 2015
  };

  self.redValue = {
    class: 'red'
  };

  self.greenValue = {
    class: 'green'
  };

  self.blueValue = {
    class: 'blue'
  };

  // self.redObject = {
  //   red: self.checkRed
  // };

  // self.user = {
  //   name: {
  //     fname: 'George'
  //   }
  // }


  // $scope.headerTitle = 'Hello World';
  // $scope.subText = 'Welcome to George\'s Application';
});