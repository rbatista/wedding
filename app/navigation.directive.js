(function () {
  'use strict';

  angular
    .module('weddingApp')
    .controller('Navigation', function ($window) {
      return {
        require: ['^myTabs'],
        link: activation
      };

      function activation(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
          scope.$apply();
        });
      };

  });
})



var navbar = $("#navigationbar ul");
      var navHeight = navbar.outerHeight() + 15;
      var menuItems = navbar.find("a");

      $(window).scroll(function(){
        // Get container scroll position
        var fromTop = $(this).scrollTop() + vm.navHeight;
        console.log('fromTop: ' + fromTop);

        // Get id of current scroll item
        for (var i = vm.itens.length - 1; i >= 0; i--) {
          if (vm.itens[i].link.length > 0 && $('#' + vm.itens[i].link).offset().top < fromTop) {
              console.log('current' + i);
              angular.element($('nav')).scope().navigationController.changeActiveMenu(i);
              break;
            }
        };
      });

      };