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


    function animation () {
      var tl = new TimelineMax();
      tl.to(yeomanPicture, 1, {opacity:1, scale: 1.5})
        .to(yeomanPicture, 1, { left : "500px", ease: Bounce.easeOut})
        .to(yeomanPicture, 2, { top: "150", rotationY: "360"}, "+=0.5")
        .to(yeomanPicture, 2, { left: "-500px", rotation: "720"}, "+=0.5")
        .to(yeomanPicture, 2, { top: "-10px", left: "200px"}, "+=0.5")
        .to(yeomanPicture, 0.5, { opacity: 0 }, "-=1.5")
        .to(yeomanPicture, 0.5, { opacity: 1 }, "-=1")
      ;

      return tl;
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

      // set the txtContainer content as visible
      TweenLite.set(txtContainer, {opacity: 1});
    }


    ctrl.tl.add(animation());

    function initialization(){

      splitText("November 5 Rocks!");
      // Pause on start-up
      ctrl.tl.pause();
    }

    initialization();
  });
