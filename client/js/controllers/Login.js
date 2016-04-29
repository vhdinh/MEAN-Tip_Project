Tip_app.controller('LoginController', function($scope,$http,$location, LoginFactory, TipFactory) {
    $scope.locate;
    $scope.alert = "";

    $scope.user = LoginFactory.getUser()

    // getting location

    $.getJSON("http://ip-api.com/json/?callback=?", function(data) {
    $scope.locate = data.city
    })


    $scope.login= function(user2){
        if(!user2){
            $scope.alert = "FIELDS CANNOT BE BLANK"
        }
        else if(!user2.username || !user2.password){
            $scope.alert = "ALL FIELDS MUST BE COMPLETED"
        }
        else{
            LoginFactory.login(user2, function(data){
                if(data == undefined){
                    $scope.alert="Invalid Login"
                }
                else{
                    for(key in data){
                        if('alert' in data){
                            var name = 'alert'
                            
                            $scope.alert = data[name]
                            // $location.url('/login')
                        }
                        else{
                            $location.url('/main')
                        }
                    }
                }
            }
        )}
    }


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

});