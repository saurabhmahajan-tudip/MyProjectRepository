/*var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                document.getElementById("demo").innerHTML = xhttp.responseText;
            }
        };
        xhttp.open("GET", "http://www.omdbapi.com?t="+mname, true);
        xhttp.send();*/

/* 
function loadDoc(mname) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      document.getElementById("demo").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET", "http://www.omdbapi.com?t="+mname, true);
  xhttp.send();
}
/*app.controller('validatectrl', function($scope,$location,$http) {
    $scope.login = function () {
        var data=$scope.username;
        alert(data);
        var config = {
            headers : {
                'Content-Type': 'html;'
            }
        }
        $http.get('http://www.omdbapi.com?t='+data,data,config)
        .then(function (response){
         console.log(JSON.stringify(response.data));
        });
    }    
}); */
/*app.controller('visitctrl', function($scope) {
    $scope.addVisitor = function () {
        var name=$scope.visitorname;
        var mail=$scope.mail;
        var mobno=$scope.mobno;
        alert("name"+name +";Mail:"+mail+";mobno:"+mobno+";Intime:-"+$scope.intime+";OutTime:" +$scope.outtime);
        location.href="#Main";
    }
});*/
  /*
         else{
            alert("Invalid Username and Password");
        }
        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }
        $http.post('http://dev.tudip.com/receptionist/login', data, config)
        .success(function (data, status, headers, config) {
         $scope.PostDataResponse = data;
        })
        .error(function (data, status, header, config) {
            $scope.ResponseDetails = "Data: " + data +
            "status: " + status +
            "headers: " + header +
            "config: " + config;
            alert("Error");
            location.href="#Main";
        });
    });*/
     //$scope.visitor = {};
            //window.alert("successfully!");
            //location.href="#Main";
           // });