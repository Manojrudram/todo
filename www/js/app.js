// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','firebase','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function() {
     var config = {
    apiKey: "AIzaSyAQPInops7SFoQ8noM-I6cs0BLOQUgEVOU",
    authDomain: "to-do-2bba1.firebaseapp.com",
    databaseURL: "https://to-do-2bba1.firebaseio.com",
    storageBucket: "to-do-2bba1.appspot.com",
    messagingSenderId: "288185014686"
  }
    firebase.initializeApp(config);
})

.controller("ExampleController", function($scope,$firebaseArray,$firebaseAuth, $firebase) {
 
    $scope.createEvent = function(title) {
       var ref = firebase.database().ref();
     var messagesRef = ref.child("messages");
    var data = $firebaseArray(messagesRef);
    
      data.$add({
        Todo : title
      }).then(function(ref){
        console.log(JSON.stringify(data))
      }
      ,function(err)
      {alert(err)});
    
    /*
    $cordovaCalendar.deleteEvent({
    title: 'Space Race',
    location: 'The Moon',
    notes: 'Bring sandwiches',
    startDate: new Date(2015, 0, 6, 18, 30, 0, 0, 0),
    endDate: new Date(2015, 1, 6, 12, 0, 0, 0, 0)
  }).then(function (result) {
    alert(result)
  }, function (err) {
   alert(err)
  });*/
    }
    });