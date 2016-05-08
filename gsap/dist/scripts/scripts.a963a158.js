'use strict';

/**
 * @ngdoc overview
 * @name gsapDemoApp
 * @description
 * # gsapDemoApp
 *
 * Main module of the application.
 */
angular
  .module('gsapDemoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

'use strict';

/**
 * @ngdoc function
 * @name gsapDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gsapDemoApp
 */
angular.module('gsapDemoApp')
  .controller('MainCtrl', function () {
    var ctrl = this;
    ctrl.callDebugger = function () {
      debugger;
    };

    var yeomanPicture = angular.element("#yeomanPicture");
    var txtContainer = angular.element("#txtContainer");
    var txt;
    ctrl.tl = new TimelineMax();

    // Play the animation
    ctrl.play = function () {
      ctrl.tl.play();
    } ;
    // Pause the animation
    ctrl.pause = function () {
      ctrl.tl.pause();
    } ;
    // Resume the animation
    ctrl.resume = function () {
      ctrl.tl.resume();
    } ;
    // Restart the animation
    ctrl.restart = function () {
      ctrl.tl.restart();
    } ;
    // Reset the animation
    ctrl.reset = function () {
      ctrl.tl.pause(0, true);
    } ;


    function showYoAndMoveIt () {
      var showAndMoveTl = new TimelineLite();
      showAndMoveTl.to(yeomanPicture, 1, {opacity:1, scale: 1.5})
        .to(yeomanPicture, 1, { left : "500px", ease: Bounce.easeOut})
        .to(yeomanPicture, 2, { top: "150", rotationY: "360"}, "+=0.5")
        .to(yeomanPicture, 2, { left: "-500px", rotation: "720"}, "+=0.5")
        .to(yeomanPicture, 2, { top: "-10px", left: "50px"}, "+=0.5")
        .to(yeomanPicture, 0.5, { opacity: 0 }, "-=1.5")
        .to(yeomanPicture, 0.5, { opacity: 1 }, "-=1")
      ;

      // Second part
      TweenLite.set(txtContainer, {perspective:500});
      var tl = new TimelineMax({repeat:2, repeatDelay:1, yoyo:true});
      tl.staggerFrom(txt, 2, {alpha:0}, 0.06, "textEffect");
      tl.staggerFrom(txt, 4, {rotationY:"-270deg", top:80, transformOrigin: "50% 50% -80", ease: Back.easeOut}, 0.06, "textEffect");
      tl.staggerTo(txt, 3, {rotationX:"360deg", color:"#90e500", transformOrigin:"50% 50% 10"}, 0.02);
    }


    // Functions used
    function splitText(phrase) {
      var prevLetter,
        sentence = phrase.split("");
      $.each(sentence, function(index, val) {
        if(val === " "){
          val = "&nbsp;";
        }
        var letter = $("<div/>", {
          id : "txt" + index
        }).addClass('txt').html(val).appendTo(txtContainer).css("display", "inline-block").addClass("bigFontSize");

        if(prevLetter) {
          $(letter).css("left", ($(prevLetter).position().left + $(letter).width()) + "px");
        };
        prevLetter = letter;
      });
      txt = $(".txt");

      // set the txtContainer content as invisible
      TweenLite.set(txtContainer, {opacity: 0});
    }


    ctrl.tl.add(showYoAndMoveIt(), "showAndMove");

    function initialization(){

      splitText("November 5 Rocks!");
      // Pause on start-up
      ctrl.tl.pause();
    }

    initialization();
  });

'use strict';

/**
 * @ngdoc function
 * @name gsapDemoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gsapDemoApp
 */
angular.module('gsapDemoApp')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
