"use strict";angular.module("gsapDemoApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"vm"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"vm"}).otherwise({redirectTo:"/"})}]),angular.module("gsapDemoApp").controller("MainCtrl",function(){function a(){var a=new TimelineMax;return a.to(f,1,{opacity:1,scale:1.5}).to(f,1,{left:"500px",ease:Bounce.easeOut}).to(f,2,{top:"150",rotationY:"360"},"+=0.5").to(f,2,{left:"-500px",rotation:"720"},"+=0.5").to(f,2,{top:"-10px",left:"200px"},"+=0.5").to(f,.5,{opacity:0},"-=1.5").to(f,.5,{opacity:1},"-=1"),a}function b(a){var b,c=a.split("");$.each(c,function(a,c){" "===c&&(c="&nbsp;");var d=$("<div/>",{id:"txt"+a}).addClass("txt").html(c).appendTo(g).css("display","inline-block").addClass("bigFontSize");b&&$(d).css("left",$(b).position().left+$(d).width()+"px"),b=d}),e=$(".txt"),TweenLite.set(g,{opacity:1})}function c(){b("November 5 Rocks!"),d.tl.pause()}var d=this;d.callDebugger=function(){};var e,f=angular.element("#yeomanPicture"),g=angular.element("#txtContainer");d.tl=new TimelineMax,d.play=function(){d.tl.play()},d.pause=function(){d.tl.pause()},d.resume=function(){d.tl.resume()},d.restart=function(){d.tl.restart()},d.reset=function(){d.tl.pause(0,!0)},d.tl.add(a()),c()}),angular.module("gsapDemoApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("gsapDemoApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<!--<div class="container text-center m-a-1">--><!--<button class="btn btn-info" ng-click="vm.callDebugger()">Debugger</button>--><!--</div>--> <div id="txtContainer"></div> <div class="jumbotron"> <p class="lead"> <img id="yeomanPicture" src="images/yeoman.c582c4d1.png" alt="I\'m Yeoman" style="opacity: 0" class="positionRelative"> </p> </div> <div class="text-center m-a-1"> <div class="btn-group m-a-1"> <a ng-click="vm.play()" class="btn btn-lg btn-success" href="javascript:void(0)"> <i class="glyphicon glyphicon-play"></i> </a> <a ng-click="vm.pause()" class="btn btn-lg btn-info" href="javascript:void(0)"> <i class="glyphicon glyphicon-pause"></i> </a> <a ng-click="vm.resume()" class="btn btn-lg btn-warning" href="javascript:void(0)">Resume</a> <a ng-click="vm.restart()" class="btn btn-lg btn-success" href="javascript:void(0)"> <i class="glyphicon glyphicon-repeat"></i> </a> <a ng-click="vm.reset()" class="btn btn-lg btn-danger" href="javascript:void(0)"> <i class="glyphicon glyphicon-stop"></i> </a> </div> <div class="m-a-1"> <p>Check-out the <strong>SVG</strong> by clicking <a href="http://codepen.io/arseneoaa/full/wGNpxR/">here</a></p> </div> </div>')}]);