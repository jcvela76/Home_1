
angular.module('MyApp', [])

.controller('MyController', function () {
  var self = this;

  self.user = {
  	fname: 'Julio',
  	lname: 'Vela',
  	email: 'jcvela@gmail.com'
  };

  self.setEdit = function() {
  	self.isEditing = true;
  	self.copy = angular.copy(self.user);
  };

  self.cancelEdit = function() {
  	self.isEditing = false;
  };

  self.commitEdit = function() {
  	self.isEditing = false;
  	angular.extend(self.user, self.copy);
  };

});