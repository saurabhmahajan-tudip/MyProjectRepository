var app = angular.module("main", ["ngRoute"]);
app.config(function($routeProvider) { 
    $routeProvider
    .when("/", {
        templateUrl : "login.html"
    })
    .when("/Home",{
    	templateUrl :"login.html"
    })
    .when("/Register", {
        templateUrl : "reg.html"
    })
    .when("/Contact",{
    	templateUrl :"Contact.html"
    })
    .when("/Main",{
    	templateUrl:"Main.html"
    });
});