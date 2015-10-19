
angular.module('MyApp', [])


.controller('MyController', function ($scope,$timeout,$interval,Color,funAssigments,COLOR_PLAY) {
  var self = this;

  self.color_play = COLOR_PLAY;
  self.arrayColors = [];
  




  

     //self.Assigment = new Car('Honda', 'Accord');

    self.addColor = function  () {
      self.index = 0;
      self.color_aux = new Color(funAssigments.createColor(self.color_play), true);
      self.arrayColors.push(self.color_aux);

        self.countdown = self.arrayColors.length;
        $interval(function(){
          console.log(self.arrayColors[self.index]);
          console.log(self.arrayColors.length);
          self.countdown--;
          self.index++;

        },1000,self.countdown)       
    }

  

});