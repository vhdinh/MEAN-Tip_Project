Tip_app.controller('LoginController', function($scope,$http,$location, LoginFactory, TipFactory) {
    $scope.locate;
    $scope.alert = "";
    // console.log("SCOPE ALERT  - ", $scope.alert)

    $scope.user = LoginFactory.user



    $scope.login= function(user2){
        if(!user2){
            $scope.alert = "FIELDS CANNOT BE BLANK"
        }
        else if(!user2.username || !user2.password){
            $scope.alert = "ALL FIELDS MUST BE COMPLETED"
        }
        else{
            LoginFactory.login(user2, function(data){
                if('alert' in data){
                    var name = 'alert'
                    $scope.alert = data[name]
                }
                else{
                    $location.url('/main')
                }
            }
        )}
    }

// get location
    $.getJSON("http://ip-api.com/json/?callback=?", function(data) {
    table_body = "";
    // console.log("Hi", data)
    table_body += data.city
     $scope.locate = data.city
})


    $scope.signup = function(user){
        if(!user.username || !user.email || !user.firstname || !user.lastname || !user.password || !user.password2){
            $scope.alert = "All fields must be filled out!"
        }
        if(user.password != user.password2){
            $scope.alert = "PASSWORD DO NOT MATCH"
        }
        else{
           LoginFactory.signup(user, function(data){
                if('alert' in data){
                    var name = 'alert'
                    console.log("ALERT IN DATA - ", data)
                    $scope.alert = data[name]
                    $location.url('/signup')
                }
                else{
                    console.log("NO ALERT IN DATA - ", data)
                    $location.url('/main')
                }
            })
        }

    }

    $scope.logout = function(){
        LoginFactory.logout()
    }


    play_audio = function(){
        var ranran = Math.floor((Math.random() * 3) + 1);
        var audio = new Audio("rich"+ ranran+ ".mp3");
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

        })

    }
});