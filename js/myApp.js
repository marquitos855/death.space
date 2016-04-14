
var app = angular.module("myApp", []);

app.directive("bang",function(){
  return {
       restrict : "AE",
       template : "<center><h3>SHOOT</h3></center>"
   };
});
