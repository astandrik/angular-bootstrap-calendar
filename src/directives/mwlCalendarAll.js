'use strict';

var angular = require('angular');

angular
  .module('mwl.calendar')
  .controller('MwlCalendarAllCtrl', function($scope, moment, calendarHelper) {

    var vm = this;
    vm.openYearIndex = null;

    $scope.$on('calendar.refreshView', function() {
      vm.view = calendarHelper.getAllView(vm.events, vm.startDate, vm.endDate, vm.cellModifier);
      var rows = Math.floor(vm.view.length / 5);
      vm.yearOffsets = [];
      for (var i = 0; i < rows; i++) {
        vm.yearOffsets.push(i * 5);
      }
      //Auto open the calendar to the current day if set
      if (vm.cellIsOpen && vm.openYearIndex === null) {
        vm.openYearIndex = null;
        vm.view.forEach(function(month) {
          if (moment(vm.viewDate).startOf('month').isSame(month.date)) {
            vm.monthClicked(month, true);
          }
        });
      }

    });

    vm.yearClicked = function(month, monthClickedFirstRun, $event) {

      if (!monthClickedFirstRun) {
        vm.onTimespanClick({
          calendarDate: month.date.toDate(),
          calendarCell: month,
          $event: $event
        });
        if ($event && $event.defaultPrevented) {
          return;
        }
      }

      vm.openRowIndex = null;
      var monthIndex = vm.view.indexOf(month);
      if (monthIndex === vm.openYearIndex) { //the month has been clicked and is already open
        vm.openYearIndex = null; //close the open month
        vm.cellIsOpen = false;
      } else {
        vm.openYearIndex = monthIndex;
        vm.openRowIndex = Math.floor(monthIndex / 4);
        vm.cellIsOpen = true;
      }

    };

    vm.handleEventDrop = function(event, newMonthDate) {
      var newStart = moment(event.startsAt)
        .month(moment(newMonthDate).month())
        .year(moment(newMonthDate).year());
      var newEnd = calendarHelper.adjustEndDateFromStartDiff(event.startsAt, newStart, event.endsAt);

      vm.onEventTimesChanged({
        calendarEvent: event,
        calendarDate: newMonthDate,
        calendarNewEventStart: newStart.toDate(),
        calendarNewEventEnd: newEnd ? newEnd.toDate() : null
      });
    };

  })
  .directive('mwlCalendarAll', function(calendarConfig) {

    return {
      templateUrl: calendarConfig.templates.calendarAllView,
      restrict: 'E',
      require: '^mwlCalendar',
      scope: {
        events: '=',
        startDate: '=',
        endDate: '=',
        onEventClick: '=',
        onEventTimesChanged: '=',
        onEditEventClick: '=',
        onDeleteEventClick: '=',
        editEventHtml: '=',
        deleteEventHtml: '=',
        cellIsOpen: '=',
        onTimespanClick: '=',
        cellModifier: '=',
        slideBoxDisabled: '='
      },
      controller: 'MwlCalendarAllCtrl as vm',
      link: function(scope, element, attrs, calendarCtrl) {
        scope.vm.calendarCtrl = calendarCtrl;
      },
      bindToController: true
    };

  });
