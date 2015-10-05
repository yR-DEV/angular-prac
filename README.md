__Your mission, should you choose to accept it, is to build an Angular app with the
following features__.

This app requires basic styling of your choosing. Hand rolled CSS, Bootstrap, Semantic UI...

__Fork and clone this repo and build your app here. When you are done, submit a pull request
so an instructor can review your work and provide feedback.__

#### Technologies:

This is a client side app only. We will not use a backend or a database for this
exercise.

* Angular
* Bootstrap
* HTML / Jade (whatever you want)
* CSS

#### Features:

__Step One__

```
Given I am on the index page
When I click "New Kitten" in the navigation bar
Then a form is displayed
When I enter the name of the kitten
And I enter an image url for the kitten
And I enter a bio for that kitten
When I click the "Create Kitten" button
Then the kitten is listed on the index page
And the list displays a thumbnail of the kitten image
And the name of the kitten
```

__Step Two__
```
When I visit the index page
And I see a list of kittens
And the list displays an image of the kitten
And the list displays the name of the kitten
When I click on the image or the name of a kitten
Then I am taken to a kitten show page
```

__Step Three__

```
Given I am on a kitten show page
And I see a bigger image of the kitten
And I see the name of the kitten
And I see a bio for the kitten
When I click the "Comment" button
Then I can leave a comment about that kitten
```

__Step Four__

```
Given I am on the index page
And I see a list of kittens
And I click the "Show Comments" link for a kitten
Then the comments for that kitten are displayed below the kitten
And when I click "Add Comment" I can add a comment to that kitten
```

__Step Five__

```
Given I am on the index page
And I see a list of kittens
When I click the "Like" link for a kitten
Then number of likes for that kittens is increased by one
```

__Step Six__

```
Given I am on the index page
And I click "Sort by Name"
Then the kittens are displayed in alphabetical order by name
And when I click "Sort by Likes"
Then the kittens are displayed in order of most likes to fewest likes
```

#### Kitten Data

Using the kittens array below, create a `KittensService` that returns the array of kitten objects. Your service should return an object with an `all` function that can be called in the controller
to retrieve the array of kittens.

Then, add a `create` function to your service that adds new kittens to the kitten array.

`KittensService` should be in its own file and in a `services` directory. It is
ok to use a factory for this. Many factories are services.

See this [workshop](https://github.com/gSchool/angular-workshop-mid-level) for help here.

```
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
    bio: "Hi! I am the sweetest, happiest kitten you will ever meet. I got my name 'cause
    I was born in an alley. But some nice lady found me and my family and now I live here. I like to eat
    and play and most of all cuddle.",
    comments: [],
    likes: 10
  }
]

```

__Resources:__

[UI Router](https://github.com/gSchool/simple-ui-router-tutorial)

[Angular Workshop Reference](https://github.com/gSchool/angular-workshop-mid-level)

[Angular Assessment Rubric](https://docs.google.com/document/d/1-lpD3MItnAAJX2rT5ZSIzD-OfUMliZ3zXrimHmzCKeI/edit)
