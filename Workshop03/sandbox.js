
angular.module('MyApp', [])


.controller('MyController', function (Person,funAssigments) {
  var self = this;

  self.clean = "clean";
  self.explicit = "explicit";

  self.everyArray = [{"title":"song 1","select":false},
                    {"title":"song 2","select":false},
                    {"title":"song 3","select":false},
                    {"title":"song 4","select":false},
                  ];
  self.popsArray = [{"title":"pop 1","select":false},
                    {"title":"pop 1","select":false}
                  ];
  self.rockArray = [{"title":"rock 1","select":false},
                    {"title":"rock 2","select":false},
                    {"title":"rock 3","select":false}
                  ];
  self.rapArray = [{"title":"rap 1","select":false},
                    {"title":"rock 2","select":false}
                  ];



  self.Student = new Person('Julio',0, []);

  self.add_list = function(title,explicit){
    self.Student.addSongPerson({"title":title,"type":explicit})

    console.log(title +'  '+explicit);
  }
     //self.Assigment = new Car('Honda', 'Accord');

    self.submitList = function  () {
      //self.genreArray = genre;
      console.log( self.Student.songs);
    }


    self.genreArray = self.everyArray;
    self.valExplicit = self.clean;
});