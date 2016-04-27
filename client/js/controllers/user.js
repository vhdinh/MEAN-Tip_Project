
Tip_app.controller('UserController', function($scope,$http,$location, $routeParams, LoginFactory,TipFactory) {
    $scope.locate;
    $scope.alert = "";
    console.log("SCOPE ALERT  - ", $scope.alert)
    $scope.user = LoginFactory.getUser()
    console.log("SCORE USER", $scope.user)
    if(jQuery.isEmptyObject($scope.user)){
        $location.url('/login')
    }


    TipFactory.getTips($scope.user, function(data){
    	$scope.tips = data
    })


    $scope.remove_Tip = function(tip){
        console.log("REMOVIng TIP", tip)
        TipFactory.removeTip(tip, function(data){
            $scope.tips = data
        })
    }

    $scope.logout = function(){
        $scope.user = {}
        $location.url('/login')
    }


        // sorting
        $scope.predicate = 'name';
        $scope.reverse = false;
        $scope.order = function(predicate) {
            $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
            $scope.predicate = predicate;
        };


});