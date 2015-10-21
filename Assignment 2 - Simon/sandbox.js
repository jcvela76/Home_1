
angular.module('MyApp', [])


.controller('MyController', function ($scope,$timeout,$interval,Color,funAssigments) {
  var self = this;

  //self.color_play = COLOR_PLAY;
  self.arrayColors = [];

  self.color_1 = new Color("blue",false);
  self.color_2 = new Color("red",false);
  self.color_3 = new Color("orange",false);
  self.color_4 = new Color("yellow",false);

  self.table = [self.color_1,self.color_2,self.color_3,self.color_4] 


  self.view_star = true;
  self.pointer = 0;

    self.addColor = function  () {
      self.view_star = false;
      self.index = 0;

      self.arrayColors.push(funAssigments.selectRandon(self.table));

        self.countdown = self.arrayColors.length;
        $interval(function(){
          console.log(self.arrayColors[self.index].getColor());
          self.arrayColors[self.index].active = true;
          self.countdown--;

          $timeout(function() {
            console.log(self.index);
            console.log(self.arrayColors[self.index-1]);
            self.arrayColors[self.index-1].active = false;
          }, 1500) 

          self.index++;

          if(self.index === self.arrayColors.length){
            self.view_star = true;
            console.log("finish process");
          }
          
          

        },2000,self.countdown)       
    }

    self.choiseColor =function(sColor){
      console.log(sColor+'---'+self.pointer);
      self.pointer++;
    }

  

});