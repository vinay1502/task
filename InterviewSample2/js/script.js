var app = angular.module("MyApp", []);

app.controller("MyCtrl", ["$scope","$interval", function($scope,$interval) {
    
    var duration = 0;
    var sequenceIndex = 0;
    var lights = [
        {name:'G',duration:5},
        {name:'Y',duration:2},
        {name:'R',duration:5}
    ];

    $scope.isRedOn = false;
    $scope.isYellowOn = false;
    $scope.isGreenOn = false;

    
    function startRedLight() {
         $scope.isRedOn = true;

    }

    function startYellowLight() {
        $scope.isYellowOn = true;
    }

    function startGreenLight() {
        $scope.isGreenOn = true;
    }

    function startLights(light){
        resetLights();
        if(light === 'R'){
            startRedLight();
        }else if(light === 'Y'){
            startYellowLight();
        }else  if(light === 'G'){
            startGreenLight();
        }
    }

    $interval(function(){
        duration = duration+1;
        if(duration <= lights[sequenceIndex].duration){
            startLights(lights[sequenceIndex].name);
        }
        if(duration === lights[sequenceIndex].duration){
            sequenceIndex = sequenceIndex+1;
            duration = 0;
        }
        

        if(sequenceIndex >= lights.length){
            sequenceIndex = 0;
            duration = 0;
        }
       
    },1000)

   function resetLights(){
        $scope.isRedOn = false;
        $scope.isYellowOn = false;
        $scope.isGreenOn = false;
   }

}]);
