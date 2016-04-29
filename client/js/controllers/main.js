Tip_app.controller('MainController', function($scope,$http,$location, LoginFactory, TipFactory) {
    $scope.locate;

    console.log("SCOPE location  - ", $scope.locate)

    $scope.user = LoginFactory.getUser()
    if(!$scope.user){
        $location.url('/login')
    }

    // getting location
    $.getJSON("http://ip-api.com/json/?callback=?", function(data) {
    $scope.locate = data.city
    })


    $scope.logout = function(){
        LoginFactory.logout()
    }


    play_audio = function(){
        var ranran = Math.floor((Math.random() * 5) + 1);
        var audio = new Audio("rich"+ ranran+ ".mp3");
            audio.play()
    }
    play_audio_sad = function(){
        var ranran = Math.floor((Math.random() * 2) + 1);
        var audio = new Audio("poor"+ ranran+ ".mp3");
            audio.play()
    }
    play_audio_meh = function(){
        var ranran = Math.floor((Math.random() * 4) + 1);
        var audio = new Audio("dontcare"+ ranran+ ".mp3");
            audio.play()
    }

    $scope.happyPrice = function(){
            console.log("SCOPE UER ID", $scope.user._id)
            var goodTip = Math.random() * (0.10) + 0.15
            var total =  1 + goodTip
            var totalPrice = $scope.price.price * total
            $scope.price.show = $scope.price.price
            $scope.price.tip = goodTip
            $scope.price.tipPercent = goodTip * 100
            $scope.price.tipAmount = goodTip * $scope.price.price
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
                play_audio()
            })   
    }

    $scope.sadPrice = function(){
        var badTip = Math.random() * (0.10) + 0.05;
        var total = 1 + badTip
        console.log("total", total)
        var totalPrice = $scope.price.price * total
        $scope.price.show = $scope.price.price;
        $scope.price.tip = badTip
        $scope.price.tipPercent = badTip * 100;
        $scope.price.tipAmount = badTip * $scope.price.price

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
            play_audio_sad()

        })
    }


    $scope.dontCarePrice = function(){

        var randomTip = Math.random() * (0.20) + 0.05;
        var total = 1 + randomTip;
        var totalPrice = $scope.price.price * total;
        $scope.price.show = $scope.price.price;
        $scope.price.tip = randomTip;
        $scope.price.tipPercent = randomTip * 100;
        $scope.price.tipAmount = randomTip * $scope.price.price

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
            play_audio_meh()
        })

    }
});