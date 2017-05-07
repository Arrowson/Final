angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.schedule', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/schedule.html',
        controller: 'scheduleCtrl as sc'
      }
    }
  })

  .state('menu.presenters', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/presenters.html',
        controller: 'presentersCtrl as pc'
      }
    }
  })

  .state('menu.mySchedule', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mySchedule.html',
        controller: 'myScheduleCtrl as msc'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.eventPlaceholder', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/eventPlaceholder.html',
        controller: 'eventPlaceholderCtrl as epc'
      }
    }
  })

  .state('menu.presenter', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/presenter.html',
        controller: 'presenterCtrl as pc'
      }
    }
  })

  .state('menu.announcements', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/announcements.html',
        controller: 'announcementsCtrl as ac'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});