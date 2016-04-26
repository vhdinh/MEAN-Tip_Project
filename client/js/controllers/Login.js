Tip_app.controller('LoginController', function($scope,$http,$location, LoginFactory, TipFactory) {
    $scope.locate;
    $scope.alert = "";
    console.log("SCOPE ALERT  - ", $scope.alert)
    $scope.user = LoginFactory.getUser()
    console.log("SCORE USER", $scope.user)
    // if(jQuery.isEmptyObject($scope.user)){
    //     $location.url('/login')
    // }


    $scope.login= function(user2){
        console.log('user tryng to log in ',user2)
        LoginFactory.login(user2, function(data){
            $scope.user = data;

            console.log("CONTROLLER - data ", data)
            $location.url('/main',data)
        })
    }




// get location
    $.getJSON("http://ip-api.com/json/?callback=?", function(data) {
    table_body = "";
    // console.log("Hi", data)
    table_body += data.city
     $scope.locate = data.city
})


    $scope.signup = function(user){
       LoginFactory.signup(user, function(data){
        console.log("DATATAT", Object.keys(data))
                $scope.user = data;
                $scope.user = {};

                if($scope.alert.length < 1){
                    $location.url('/main')
                }
            })

    }


    $scope.logout = function(){
        $scope.user = {}
        $location.url('/login')
    }

    $scope.happyPrice = function(){
            var audio = new Audio('money.mp3');
            audio.play();
            $scope.user = LoginFactory.getUser()
            var goodTip = Math.random() * (0.10) + 0.15
            var total =  1 + goodTip
            var totalPrice = $scope.price.price * total
            $scope.price.show = $scope.price.price
            $scope.price.tip = goodTip
            $scope.price.tipPercent = goodTip * 100
            $scope.price.total = total
            $scope.price.totalPrice = totalPrice
            curr_us = {
                _id : $scope.user._id
            }
            $scope.price.user = curr_us
            $scope.price.location = $scope.locate
            $scope.price.service = "General"
            $scope.price.mood = "Good"
            

            console.log("OVERALL ", $scope.price)

            TipFactory.happyPrice($scope.price, function(output){
                $scope.prices = output
                // $scope.price = {}
            })   
       
    }


    $scope.sadPrice = function(){
        $scope.user = LoginFactory.getUser()
        var badTip = Math.random() * (0.10) + 0.05;
        var total = 1 + badTip
        console.log("total", total)
        var totalPrice = $scope.price.price * total
        $scope.price.show = $scope.price.price;
        $scope.price.tip = badTip
        $scope.price.tipPercent = badTip * 100;
        $scope.price.total = total
        $scope.price.totalPrice = totalPrice
        curr_us = {
            _id : $scope.user._id
        }
        $scope.price.user = curr_us
        $scope.price.location = $scope.locate
        $scope.price.service = "General"
        $scope.price.mood = "Bad"
        console.log("OVERALL TOTAL: ", $scope.price)
        TipFactory.sadPrice($scope.price, function(output){
            $scope.prices = output
        })
    }


    $scope.dontCarePrice = function(){
        $scope.user = LoginFactory.getUser()
        // console.log("DontCare Price = ", $scope.price)
        var randomTip = Math.random() * (0.20) + 0.05;
        var total = 1 + randomTip;
        var totalPrice = $scope.price.price * total;
        $scope.price.show = $scope.price.price;
        $scope.price.tip = randomTip;
        $scope.price.tipPercent = randomTip * 100;
        $scope.price.total = total;
        $scope.price.totalPrice = totalPrice
        curr_us = {
            _id : $scope.user._id
        }
        $scope.price.user = curr_us
        $scope.price.location = $scope.locate
        $scope.price.service = "General"
        $scope.price.mood = "Don't Care"
        console.log("Total Price", $scope.price)
        TipFactory.dontCare($scope.price, function(output){
            $scope.prices = output
        })

    }
});