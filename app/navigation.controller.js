(function () {
  'use strict';

  angular
    .module('weddingApp')
    .controller('NavigationController', navigationController);


  function navigationController() {
    var vm = this;

    vm.scrollingTo = 0;
    vm._prevent = false;
    vm.activeItem = 0;
    vm.itens = [
      { text: 'Sobre', link: 'header' },
      { text: 'História', link: 'stories' },
      { text: 'Eventos', link: 'events' },
      { text: 'Confirmar Presença', link: 'guest-confirmation' },
      { text: 'Álbuns', link: '' },
      { text: 'Mensagens', link: 'messages' },
      { text: 'Lista de presentes', link: 'wish-list' },
      { text: 'Dicas', link: '' },
    ];

    vm.goTo = goTo;
    vm.changeActiveMenu = changeActiveMenu;

    activate();

    function activate() {
      $('nav').affix({
        offset: {
          top: $('#header').height()
        }
      });

      $('body').scrollspy({
        target: 'nav'
      });

      colapseMenu();
    }

    function colapseMenu() {
      if ($('navbar-header button').attr('display') !== 'none') {
        $('nav ul').on('click', 'a', function() {
          $('#navigationbar').collapse('hide');
        });
      }
    }

    function goTo(element, index) {
      if (!element) {
        return;
      }

      var currentTop = $(window).scrollTop()
      var elementTop = $("#" + element).offset().top;
      var navHeight = $("nav").height()
      var headHeight = $('#header').height();

      if (currentTop < headHeight) {
        elementTop = elementTop - navHeight;
      }

      vm.scrollingTo = elementTop;
      vm._prevent = true;
      $('html body').animate({ scrollTop: elementTop }, 1500);

      changeActiveMenu(index);
    }

    function changeActiveMenu(index) {
      vm.activeItem = index;
    }

  }

})();

angular.element(document).ready(function() {

  var navbar = $("#navigationbar ul");
  var lastId = "";
  var navHeight = navbar.outerHeight() + 15;
  var menuItems = navbar.find("a");

  $(window).scroll(function(){
    var fromTop = $(this).scrollTop() + navHeight;

    var controllerElement = $('nav');
    var controllerScope = angular.element(controllerElement).scope();

    var _prevent = controllerScope.$$childHead.navigationController._prevent;
    var scrollingTo = controllerScope.$$childHead.navigationController.scrollingTo;
    var bottomTop = $(document).height() - $(window).height();
    if (scrollingTo > bottomTop) {
      scrollingTo = bottomTop;
    }

    if (_prevent) {
      if (Math.floor($(window).scrollTop()) === Math.floor(scrollingTo)) {
        controllerScope.$apply(function() {
          controllerScope.$$childHead.navigationController._prevent = false;
        });
      }
      return;
    }

    var itens = controllerScope.$$childHead.navigationController.itens;

    for (var i = itens.length - 1; i >= 0; i--) {
      if (itens[i].link.length > 0 && $('#' + itens[i].link).offset().top < fromTop) {
        controllerScope.$apply(function() {
          controllerScope.$$childHead.navigationController.activeItem = i;
        });
        break;
      }
    }
  });
});