ngApp.controller('BodyController', ['$scope', '$http', function($scope, $http) {
  console.log('Inside navbar controller.');
  //test data
  var kittens = [
  {
    name: "Fuzzy",
    image:  "http://dreamatico.com/data_images/kitten/kitten-2.jpg",
    bio: "I am a cute kitten born on the wrong side of the tracks. My favorite toy is the fuzzy ball with the bell inside. That's how I got my nickname.",
    comments: [],
    likes: 3
  },
  {
    name: "Mittens",
    image: "https://www.valleyvet.com/images/worming-your-kitten.png",
    bio: "I am shy. I don't know why my name is Mittens and I think there was a mix up at birth. Nonetheless, I have made some friends here in this place but I would be ever grateful for a warm and cozy home with a fireplace and fluffy pillows.",
    comments: [],
    likes: 1
  },
  {
    name: "Janet",
    image: "http://img.thrfun.com/img/004/328/black_and_white_kitten_s.jpg",
    bio: "My unique blue eyes and dark coloration set me apart from many other run of the mill kittens. I was born to be great, but somehow ended up here in this shelter.",
    comments: [],
    likes: 2
  },
  {
    name: "Alley",
    image: "http://vignette3.wikia.nocookie.net/wikiality/images/3/31/Happy_kity.jpg/revision/latest?cb=20061216202527",
    bio: "Hi! I am the sweetest, happiest kitten you will ever meet. I got my name 'cause I was born in an alley. But some nice lady found me and my family and now I live here. I like to eat and play and most of all cuddle.",
    comments: [],
    likes: 10
  }
  ];

  $scope.kittens = kittens;

  $scope.newKitten = function() {
    console.log('showing new kitten form');
    $scope.showNewKittenForm = true;
  };

  $scope.createNewKitten = function(kittenName, kittenImgurl, kittenBio) {

    console.log('create new kitten clicked');

    var newKittenObj = {name: kittenName, image: kittenImgurl, bio: kittenBio, comments: [], likes: 0};
    console.log(newKittenObj);

    $scope.kittens.push(newKittenObj);

    console.log($scope.kittens);

    $scope.showNewKittenForm = false;
  };

}]);
