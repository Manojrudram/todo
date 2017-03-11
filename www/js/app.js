// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova'])
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

.controller('DashCtrl', function($scope, $ionicPopup, $ionicListDelegate,$window) {
       $scope.tasks = [];
        $scope.newTask = function(){
           $window.localStorage.clear(); 
          
        $ionicPopup.prompt({
            title:"New Task",
            template: "Enter task:",
            inputPlaceholder:"Please add your task",
            okText:'Create task'

        }).then(function(res){
          var pos = $scope.tasks.indexOf(res);
            if (res) 
             if (pos == -1) {
          $scope.tasks.push(res);
      }
      else {
         $scope.tasks.splice(pos, 1);
      }
           var localarray = [];  
       for (var i = 0; i < $scope.tasks.length; i++)  //loop for storing the id in local localStorage
      {
        $window.localStorage[i] = $scope.tasks[i];
        localarray[i] = $scope.tasks[i];
      }
  localStorage.setItem('data',JSON.stringify(localarray));
      $scope.output = JSON.parse(localStorage.getItem('data'));
      console.log($scope.output.length);
               
          //  alert(JSON.stringify($scope.tasks))

        })
        };
  /*  $scope.store=function(){
       var localarray = [];  
       for (var i = 0; i < $scope.tasks.length; i++)  //loop for storing the id in local localStorage
      {
        $window.localStorage[i] = $scope.tasks[i];
        localarray[i] = $scope.tasks[i];
      }
  localStorage.setItem('data',JSON.stringify(localarray));
      $scope.output = JSON.parse(localStorage.getItem('data'));
      console.log($scope.output.length);
    
   }*/
})