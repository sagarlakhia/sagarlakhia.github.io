var app=angular.module('single-page-app',['ngRoute']);


app.config(function($routeProvider){


      $routeProvider
          .when('/',{
                templateUrl: 'home.html'
          })
          .when('/projects',{
                templateUrl: 'projects.html'
          })
          
           .when('/skills',{
                templateUrl: 'skills.html'
          })
          
          .when('/message',{
              templateUrl: 'message.html'
        });


});

app.controller('cfgController',function($scope){

    /*      
    Here you can handle controller for specific route as well.
    */
});


	
	  app.controller('TopController', ['$scope', '$location', '$anchorScroll',
	    function ($scope, $location, $anchorScroll) {
	      $scope.gotoTop = function() {
	        // set the location.hash to the id of
	        // the element you wish to scroll to.
	        $location.hash('top');

	        // call $anchorScroll()
	        $anchorScroll();
	      };
	    }]);
