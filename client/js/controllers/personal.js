Tip_app.controller('PersonalController', function($scope,$http,$location, LoginFactory, TipFactory) {
    
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


    $scope.happyPrice_barber = function(){
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
            $scope.price.service = "Barber"
            $scope.price.mood = "Good"

            TipFactory.happyPrice($scope.price, function(output){
                $scope.prices = output
                play_audio() 
            })   
    }
    $scope.happyPrice_manicure = function(){
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
            $scope.price.service = "Manicure"
            $scope.price.mood = "Good"

            TipFactory.happyPrice($scope.price, function(output){
                $scope.prices = output
                play_audio() 
            })   
    }

    $scope.happyPrice_massage = function(){
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
            $scope.price.service = "Massage"
            $scope.price.mood = "Good"

            TipFactory.happyPrice($scope.price, function(output){
                $scope.prices = output
                play_audio() 
            })   
    }


    $scope.happyPrice_shoes = function(){
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
            $scope.price.service = "Shoe-Shining"
            $scope.price.mood = "Good"

            TipFactory.happyPrice($scope.price, function(output){
                $scope.prices = output
                play_audio() 
            })   
    }

    $scope.happyPrice_spa = function(){
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
            $scope.price.service = "Spa"
            $scope.price.mood = "Good"

            TipFactory.happyPrice($scope.price, function(output){
                $scope.prices = output
               play_audio() 
            })   
    }


    $scope.sadPrice_barber = function(){
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
        $scope.price.service = "Barber"
        $scope.price.mood = "Bad"
        TipFactory.sadPrice($scope.price, function(output){
            $scope.prices = output
                        play_audio_sad()

        })
    }

    $scope.sadPrice_manicure = function(){
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
        $scope.price.service = "Manicure"
        $scope.price.mood = "Bad"
        TipFactory.sadPrice($scope.price, function(output){
            $scope.prices = output
                        play_audio_sad()

        })
    }

    $scope.sadPrice_massage = function(){
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
        $scope.price.service = "Massage"
        $scope.price.mood = "Bad"
        TipFactory.sadPrice($scope.price, function(output){
            $scope.prices = output
                        play_audio_sad()

        })
    }

    $scope.sadPrice_shoes = function(){
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
        $scope.price.service = "Shoe-Shining"
        $scope.price.mood = "Bad"
        TipFactory.sadPrice($scope.price, function(output){
            $scope.prices = output
                        play_audio_sad()

        })
    }

    $scope.sadPrice_spa = function(){
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
        $scope.price.service = "Spa"
        $scope.price.mood = "Bad"
        TipFactory.sadPrice($scope.price, function(output){
            $scope.prices = output
                        play_audio_sad()

        })
    }


    $scope.dontCarePrice_barber = function(){
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
        $scope.price.service = "Barber"
        $scope.price.mood = "Don't Care"
        TipFactory.dontCare($scope.price, function(output){
            $scope.prices = output
        })

    }

    $scope.dontCarePrice_manicure = function(){
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
        $scope.price.service = "Manicure"
        $scope.price.mood = "Don't Care"
        TipFactory.dontCare($scope.price, function(output){
            $scope.prices = output
        })

    }

    $scope.dontCarePrice_massage = function(){
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
        $scope.price.service = "Massage"
        $scope.price.mood = "Don't Care"
        TipFactory.dontCare($scope.price, function(output){
            $scope.prices = output
        })

    }

    $scope.dontCarePrice_shoes = function(){
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
        $scope.price.service = "Shoe-Shining"
        $scope.price.mood = "Don't Care"
        TipFactory.dontCare($scope.price, function(output){
            $scope.prices = output
        })

    }

    $scope.dontCarePrice_spa = function(){
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
        $scope.price.service = "Spa"
        $scope.price.mood = "Don't Care"
        TipFactory.dontCare($scope.price, function(output){
            $scope.prices = output
        })

    }


});