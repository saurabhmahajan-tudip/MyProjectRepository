var app = angular.module("myApp", ["ngRoute"]);
//Routing
app.config(function($routeProvider) { 
    $routeProvider
    .when("/", {
        templateUrl : "login.html"
    })
    .when("/Login",{
    	templateUrl :"login.html"
    })
    .when("/Register", {
        templateUrl : "reg.html"
    })
    .when("/Contact",{
    	templateUrl :"Contact.html"
    })
    .when("/Main",{
    	templateUrl:"Main.html",
        controller:"MainCtrl"
    })
    .when("/recepMain",{
        templateUrl:"recepMain.html"
    })
    .when("/addVisitor",{
        templateUrl:"addvisitor.html"
    })
    .when("/addReceptionist",{
        templateUrl:"addreceptionist.html"
    })
    .when("/viewData",{
        templateUrl:"viewData.html",
        controller:"viewCtrl"
    })
    .when("/viewDataReceptionist",{
        templateUrl:"viewDataRecep.html",
        controller:"viewRecepCtrl"
    })
    .when("/About",{
        templateUrl:"About.html"
    });
});
//Login
app.controller('validatectrl', function($scope,$location,$http) {
    $scope.login = function (user) {
        if($scope.username == "Admin" && $scope.password =="Tudip123")
        {
            alert("Admin access");
            localStorage.setItem("user","Admin");
            location.href="#Main";
        }
        else if($scope.username != "Admin" && $scope.password !="Tudip123"){
            $http({
                method : 'POST',
                url : 'PHP/login.php',
                data : {
                    uname:$scope.username,
                    pwd:$scope.password
                },
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }).success(function(data){
                if (data==" 0"){
                    localStorage.setItem("user",$scope.username);
                    window.location = "#recepMain";
                }
                else
                    alert('Wrong credential,try again');
                });
        }
        else{
        alert("Not a user?? please register");
          }  
      }
});
//Add Receptionist
app.controller('addrecepctrl', function($scope,$http) {
    $scope.adduser = function () {
        var pwd=$scope.upwd;
        var rpwd=$scope.reupwd;
        if( pwd == rpwd)
        {
        $http({
            method : 'POST',
            url : 'PHP/insertRecep.php',
            data : {
             name:$scope.recepname,
             mail:$scope.recepmail,
             mobno:$scope.contact,
             uname:$scope.uname,
             pwd:$scope.upwd
         },
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).success(function(data){
            if (data=="0") 
            window.location = "#Main";
     else
            alert('Error');
        });
    }
    else
    {
        alert("Passwords Dont Match");
    }
    
    }
});
//Add Visitor Info
app.controller('visitctrl', function($scope,$http) {
    $scope.addVisitor = function () {
        var intime=document.getElementById("intime").value;
        var iduser=localStorage.getItem("user");
         $http({
            method : 'POST',
            url : 'PHP/insert.php',
            data : {
             name:$scope.visitorname,
             mail:$scope.mail,
             mobno:$scope.mobno,
             intime:intime,
             id:iduser
            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).success(function(data){
            if (data=="0") {
            window.location = "#recepMain";}
     else
            alert('Wrong credential,try again');
        });
    }   
});

//View Visitor Data
app.controller("viewCtrl",function($scope,$http)
{  
     var iduser=localStorage.getItem("user");
    $scope.viewData=function()
    {
         $http({
            method : 'POST',
            url : 'PHP/viewData.php',
            data:{
                id:iduser
            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).success(function(data){
            if (data!="") { 
             alert("Retrieve successfully")
             $scope.records=data;
    }
          else {
             alert('Wrong credential,try again');
         }
       });
   }
   //Update Visitor Data
   $scope.updateVisitorData=function()
   {
        var vname=(this.vals.vname);
        var vmail=(this.vals.vmail);
        var contact=(this.vals.cno);
        var intime=(this.vals.intime);
        var outtime=document.getElementById("outtime").value;
        var id=localStorage.getItem("user");
    $http({
            method : 'POST',
            url : 'PHP/updateVisitor.php',
            data : {
             name:vname,
             mail:vmail,
             mobno:contact,
             intime:intime,
             outtime:outtime,
             id:id
         },
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).success(function(data){
            if (data=="0"){
                alert('Updated');
                window.location = "#recepMain";}
     else
            alert('Error');
        });
    }
    //Delete receptionist Data
    $scope.deleteData=function()
   {
     var vname=(this.vals.vname);
    $http({
            method : 'POST',
            url : 'PHP/deleteVisitor.php',
            data : {
             name:vname
         },
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).success(function(data){
            if (data=="0") 
            window.location = "#recepMain";
     else
            alert('Error');
        });
    }
});
//View Receptionist Data
app.controller("viewRecepCtrl",function($scope,$http)
{  
    $scope.viewRecepData=function()
    {
         $http({
            method : 'GET',
            url : 'PHP/viewDataRecep.php',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).success(function(data,output){
            if (data!="") { 
             alert("Retrieve successfully")
             $scope.visRecords=data;
         }
          else {
             alert('Wrong credential,try again');
         }
       });
   }
   // Update Receptionist Data
   $scope.updateData=function(index)
   {
        var srno=(this.vals.srno);
        console.log(srno);
        var recepname=(this.vals.recepname);
        console.log(recepname);
        var recepmail=(this.vals.recepmail);
        console.log(recepmail);
        var contact=(this.vals.mobno);
        var uname=(this.vals.uname);
        var upwd=(this.vals.password);
        alert(srno+","+recepname+","+recepmail+","+contact+","+uname+","+upwd);
    $http({
            method : 'POST',
            url : 'PHP/UpdateRecep.php',
            data : {
                srno:srno,
             name:recepname,
             mail:recepmail,
             mobno:contact,
             uname:uname,
             pwd:upwd
         },
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).success(function(data){
            if (data=="0"){
                alert('Updated');
                window.location = "#Main";}
     else
            alert('Error');
        });
    }
    //Delete Receptionist
    $scope.deleteData=function(index)
   {
     var recepname=this.vals.recepname;
    $http({
            method : 'POST',
            url : 'PHP/deleteRecep.php',
            data : {
             name:recepname
         },
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).success(function(data){
            if (data=="0") 
            window.location = "#Main";
     else
            alert('Error');
        });
    }
});
//Store name of user logged in in localStorage for effective understanding of who is logged in & making Changes.
app.controller('recepCtrl', function($scope,$location,$http) {
    var name=localStorage.getItem("user");
    document.getElementById("user").innerHTML=name;
    });
//Store Credentials of Admin
app.controller('MainCtrl', function($scope,$location,$http) {
    var name=localStorage.getItem("user");
    document.getElementById("user").innerHTML=name;
    });
