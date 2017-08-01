var app = angular.module("Neiex", ['ngRoute']);
app.config(function ($routeProvider) {
	//Search Page
	$routeProvider.when('/search', {
		templateUrl: "views/search.html",
		controller: 'SearchCtrl'
	});
	//Blank Page
	$routeProvider.when('/blank', {
		templateUrl: "views/blank.html"
	});
	//Post Project
	$routeProvider.when('/postProject', {
		templateUrl: "views/postProject.html"
	});
	//Profile Page
	$routeProvider.when('/profile', {
		templateUrl: "views/profileEntrepreneur.html",
		controller: 'ProfileCtrl'
	});
	//Signup Page
	$routeProvider.when('/signup', {
		templateUrl: "views/signUp.html",
		controller: 'SignupCtrl'
	});
	//Default page
	$routeProvider.otherwise({
		redirectTo: '/blank'
	});
});
//Controller for Search Page
app.controller('SearchCtrl', function ($location, $scope) {
	$scope.bodyClick = function () {
		$location.path('/blank');
	}
});
//Controller for Profile Page
app.controller('ProfileCtrl', function ($location, $scope) {
	//Body click
	$scope.bodyClick = function () {
		$location.path('/blank');
	};
	//User Settings Function
	$scope.userSettings = function () {
		$scope.userProfileOptions = 'settings';
		//Default Profile Setting Display
		$scope.userSettingsOptions = 'profile';
	};
	//Profile Settings Show Function
	$scope.profileSettings = function () {
		$scope.userSettingsOptions = 'profile';
	};
	//Account Settings Show Function
	$scope.accountSettings = function () {
		$scope.userSettingsOptions = 'account';
	};
});
app.controller('SignupCtrl', function ($scope) {
	$scope.signup_entre = function () {
		$scope.signup_options = 'signup_entre_view';
	}
});