ngApp.controller('NavbarController', ['$scope', '$http', function($scope, $http) {
  console.log('Inside navbar controller.');


  $scope.newKitten = function() {
    console.log('showing new kitten form');
    $scope.showNewKittenForm = true;
  };

  $scope.createNewKitten = function(name, imgurl, bio) {

    console.log('create new kitten clicked');

    console.log(name, imgurl, bio);

    $scope.showNewKittenForm = false;
  };

}]);
