
Tip_app.controller('UserController', function($scope,$http,$location, $routeParams, LoginFactory,TipFactory) {
    
    $scope.user = LoginFactory.user

    $scope.logout = function(){
        LoginFactory.logout()
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


    $scope.displayNum = 10;
    $scope.increaseBy = function(num){
        $scope.displayNum +=num
    }
    $scope.decreaseBy = function(num){
        if($scope.displayNum >= 10){
            $scope.displayNum -=num
        }
    }

        // sorting
        $scope.predicate = 'createdAt';
        $scope.reverse = true;
        $scope.order = function(predicate) {
            $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
            $scope.predicate = predicate;
        };


});