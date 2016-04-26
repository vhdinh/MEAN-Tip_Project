Tip_app.controller('FoodController', function($scope,$http,$location, LoginFactory, TipFactory) {

    $scope.alert = "";
    // console.log("SCOPE ALERT  - ", $scope.alert)
    $scope.user = LoginFactory.getUser()
    // console.log("SCORE USER", $scope.user)
    if(jQuery.isEmptyObject($scope.user)){
        $location.url('/login')
    }

    $scope.logout = function(){
        $scope.user = {}
        $location.url('/login')
    }

   
// get location
    $.getJSON("http://ip-api.com/json/?callback=?", function(data) {
        table_body = "";
        // console.log("Hi", data)
        table_body += data.city
         $scope.locate = data.city
    })


    $scope.happyPrice = function(){
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
            $scope.price.service = "Barista"
            $scope.price.mood = "Good"

            TipFactory.happyPrice($scope.price, function(output){
                $scope.prices = output
                // $scope.price = {}
            })   
    }
    $scope.happyPrice_bar = function(){
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
            $scope.price.service = "Bartender"
            $scope.price.mood = "Good"

            TipFactory.happyPrice($scope.price, function(output){
                $scope.prices = output
                // $scope.price = {}
            })   
    }

    $scope.happyPrice_deliver = function(){
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
            $scope.price.service = "Delivery"
            $scope.price.mood = "Good"

            TipFactory.happyPrice($scope.price, function(output){
                $scope.prices = output
                // $scope.price = {}
            })   
    }


    $scope.happyPrice_takeout = function(){
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
            $scope.price.service = "Takeout"
            $scope.price.mood = "Good"

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
        $scope.price.service = "Barista"
        $scope.price.mood = "Bad"
        TipFactory.sadPrice($scope.price, function(output){
            $scope.prices = output
        })
    }

    $scope.sadPrice_bar = function(){
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
        $scope.price.service = "Bartender"
        $scope.price.mood = "Bad"
        TipFactory.sadPrice($scope.price, function(output){
            $scope.prices = output
        })
    }

    $scope.sadPrice_deliver = function(){
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
        $scope.price.service = "Delivery"
        $scope.price.mood = "Bad"
        TipFactory.sadPrice($scope.price, function(output){
            $scope.prices = output
        })
    }

    $scope.sadPrice_takeout = function(){
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
        $scope.price.service = "Takeout"
        $scope.price.mood = "Bad"
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
        $scope.price.service = "Barista"
        $scope.price.mood = "Don't Care"
        TipFactory.dontCare($scope.price, function(output){
            $scope.prices = output
        })

    }

    $scope.dontCarePrice_bar = function(){
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
        $scope.price.service = "Bartender"
        $scope.price.mood = "Don't Care"
        TipFactory.dontCare($scope.price, function(output){
            $scope.prices = output
        })

    }

    $scope.dontCarePrice_deliver = function(){
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
        $scope.price.service = "Delivery"
        $scope.price.mood = "Don't Care"
        TipFactory.dontCare($scope.price, function(output){
            $scope.prices = output
        })

    }

    $scope.dontCarePrice_takeout = function(){
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
        $scope.price.service = "Takeout"
        $scope.price.mood = "Don't Care"
        TipFactory.dontCare($scope.price, function(output){
            $scope.prices = output
        })

    }


});