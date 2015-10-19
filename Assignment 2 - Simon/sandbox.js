
angular.module('MyApp', [])


.controller('MyController', function ($scope,$timeout,$interval,Color,funAssigments,COLOR_PLAY) {
  var self = this;

  self.color_play = COLOR_PLAY;
  self.arrayColors = [];
  self.table = {
                  "blue":true
                ,
                  "yellow":true
                ,
                  "red":true
                ,
                  "orange":true
                
              }  


    self.view_star = true;

  

     //self.Assigment = new Car('Honda', 'Accord');

    self.addColor = function  () {
      self.view_star = false;
      self.index = 0;
      self.color_aux = new Color(funAssigments.createColor(self.color_play), false);
      self.arrayColors.push(self.color_aux);

        self.countdown = self.arrayColors.length;
        $interval(function(){
          console.log(self.arrayColors[self.index].getColor());
          self.arrayColors[self.index].active = true;

          var aux_s = "self.table" + self.arrayColors[self.index].getColor();

          aux_s = false;

          //console.log(self.arrayColors.length);
          self.countdown--;
          self.index++;

          if(self.index === self.arrayColors.length){
            self.view_star = true;
            console.log("finish process");
            console.log(self.table)
          }
          


        },1000,self.countdown)       
    }

  

});