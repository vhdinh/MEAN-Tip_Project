Tip_app.controller('HotelController', function($scope,$http,$location, LoginFactory, TipFactory) {

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


    $scope.happyPrice_bellman = function(){
            ranran = Math.floor((Math.random() * 4) + 1);
            audio = new Audio("rich"+ ranran+ ".mp3");
            audio.play()
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
            $scope.price.service = "Bellman"
            $scope.price.mood = "Good"

            TipFactory.happyPrice($scope.price, function(output){
                $scope.prices = output
                // $scope.price = {}
            })   
    }
    $scope.happyPrice_concierge = function(){
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
            $scope.price.service = "Concierge"
            $scope.price.mood = "Good"

            TipFactory.happyPrice($scope.price, function(output){
                $scope.prices = output
                // $scope.price = {}
            })   
    }

    $scope.happyPrice_housekeeping = function(){
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
            $scope.price.service = "Housekeeping"
            $scope.price.mood = "Good"

            TipFactory.happyPrice($scope.price, function(output){
                $scope.prices = output
                // $scope.price = {}
            })   
    }


    $scope.happyPrice_roomService = function(){
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
            $scope.price.service = "Room Service"
            $scope.price.mood = "Good"

            TipFactory.happyPrice($scope.price, function(output){
                $scope.prices = output
                // $scope.price = {}
            })   
    }

    $scope.happyPrice_valet = function(){
            ranran = Math.floor((Math.random() * 4) + 1);
            audio = new Audio("rich"+ ranran+ ".mp3");
            audio.play()
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
            $scope.price.service = "Valet"
            $scope.price.mood = "Good"

            TipFactory.happyPrice($scope.price, function(output){
                $scope.prices = output
                // $scope.price = {}
            })   
    }


    $scope.sadPrice_bellman = function(){
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
        $scope.price.service = "Bellman"
        $scope.price.mood = "Bad"
        TipFactory.sadPrice($scope.price, function(output){
            $scope.prices = output
        })
    }

    $scope.sadPrice_concierge = function(){
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

    $scope.sadPrice_housekeeping = function(){
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
        $scope.price.service = "Housekeeping"
        $scope.price.mood = "Bad"
        TipFactory.sadPrice($scope.price, function(output){
            $scope.prices = output
        })
    }

    $scope.sadPrice_roomService = function(){
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
        $scope.price.service = "Room Service"
        $scope.price.mood = "Bad"
        TipFactory.sadPrice($scope.price, function(output){
            $scope.prices = output
        })
    }

    $scope.sadPrice_valet = function(){
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
        $scope.price.service = "Valet"
        $scope.price.mood = "Bad"
        TipFactory.sadPrice($scope.price, function(output){
            $scope.prices = output
        })
    }


    $scope.dontCarePrice_bellman = function(){
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
        $scope.price.service = "Bellman"
        $scope.price.mood = "Don't Care"
        TipFactory.dontCare($scope.price, function(output){
            $scope.prices = output
        })

    }

    $scope.dontCarePrice_concierge = function(){
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

    $scope.dontCarePrice_housekeeping = function(){
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

    $scope.dontCarePrice_roomService = function(){
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
        $scope.price.service = "Room Service"
        $scope.price.mood = "Don't Care"
        TipFactory.dontCare($scope.price, function(output){
            $scope.prices = output
        })

    }

    $scope.dontCarePrice_valet = function(){
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
        $scope.price.service = "Valet"
        $scope.price.mood = "Don't Care"
        TipFactory.dontCare($scope.price, function(output){
            $scope.prices = output
        })

    }


});