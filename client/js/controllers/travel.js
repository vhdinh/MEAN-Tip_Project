Tip_app.controller('TravelController', function($scope,$http,$location, LoginFactory, TipFactory) {
    $scope.user = LoginFactory.user

    $scope.logout = function(){
        LoginFactory.logout()
    }

   
// get location
    $.getJSON("http://ip-api.com/json/?callback=?", function(data) {
        table_body = "";
        // console.log("Hi", data)
        table_body += data.city
         $scope.locate = data.city
    })

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

    $scope.happyPrice_bus = function(){
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
            $scope.price.service = "Bus"
            $scope.price.mood = "Good"

            TipFactory.happyPrice($scope.price, function(output){
                $scope.prices = output
                play_audio() 
            })   
    }
    $scope.happyPrice_cab = function(){
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
            $scope.price.service = "Cab"
            $scope.price.mood = "Good"
            TipFactory.happyPrice($scope.price, function(output){
                $scope.prices = output
                play_audio() 
            })   
    }

    $scope.happyPrice_chauffeur = function(){
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
            $scope.price.service = "Chauffeur"
            $scope.price.mood = "Good"

            TipFactory.happyPrice($scope.price, function(output){
                $scope.prices = output
                play_audio() 
            })   
    }


    $scope.happyPrice_gas = function(){
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
            $scope.price.service = "Gas"
            $scope.price.mood = "Good"
            TipFactory.happyPrice($scope.price, function(output){
                $scope.prices = output
                play_audio() 
            })   
    }



    $scope.sadPrice_bus = function(){
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
        $scope.price.service = "Bus"
        $scope.price.mood = "Bad"
        TipFactory.sadPrice($scope.price, function(output){
            $scope.prices = output
                        play_audio_sad()

        })
    }

    $scope.sadPrice_cab = function(){
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
        $scope.price.service = "Cab"
        $scope.price.mood = "Bad"
        TipFactory.sadPrice($scope.price, function(output){
            $scope.prices = output
                        play_audio_sad()

        })
    }

    $scope.sadPrice_chauffeur = function(){
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
        $scope.price.service = "Chauffeur"
        $scope.price.mood = "Bad"
        TipFactory.sadPrice($scope.price, function(output){
            $scope.prices = output
                        play_audio_sad()

        })
    }

    $scope.sadPrice_gas = function(){
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
        $scope.price.service = "Gas"
        $scope.price.mood = "Bad"
        TipFactory.sadPrice($scope.price, function(output){
            $scope.prices = output
                        play_audio_sad()

        })
    }

    $scope.dontCarePrice_bus = function(){
        // console.log("DontCare Price = ", $scope.price)
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
        $scope.price.service = "Bus"
        $scope.price.mood = "Don't Care"
        TipFactory.dontCare($scope.price, function(output){
            $scope.prices = output
            play_audio_meh()
        })

    }

    $scope.dontCarePrice_cab = function(){
        // console.log("DontCare Price = ", $scope.price)
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
        $scope.price.service = "Cab"
        $scope.price.mood = "Don't Care"
        TipFactory.dontCare($scope.price, function(output){
            $scope.prices = output
            play_audio_meh()
        })

    }

    $scope.dontCarePrice_chauffeur = function(){
        // console.log("DontCare Price = ", $scope.price)
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
        $scope.price.service = "Chauffeur"
        $scope.price.mood = "Don't Care"
        TipFactory.dontCare($scope.price, function(output){
            $scope.prices = output
            play_audio_meh()
        })

    }

    $scope.dontCarePrice_gas = function(){
        // console.log("DontCare Price = ", $scope.price)
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
        $scope.price.service = "Gas"
        $scope.price.mood = "Don't Care"
        TipFactory.dontCare($scope.price, function(output){
            $scope.prices = output
            play_audio_meh()
        })

    }

});