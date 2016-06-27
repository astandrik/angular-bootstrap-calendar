'use strict';

var angular = require('angular');

angular
  .module('mwl.calendar')
  .constant('calendarConfig', {
    allDateFormats: {
      angular: {
        date: {
          year: 'yyyy',
          hour: 'ha',
          day: 'd MMM',
          month: 'MMMM',
          weekDay: 'EEEE',
          time: 'HH:mm',
          datetime: 'MMM d, h:mm a'
        },
        title: {
          day: 'EEEE d MMMM, yyyy',
          week: 'Week {week} of {year}',
          month: 'MMMM yyyy',
          year: 'yyyy'
        }
      },
      moment: {
        date: {
          year: 'yyyy',
          hour: 'ha',
          day: 'D MMM',
          month: 'MMMM',
          weekDay: 'dddd',
          time: 'HH:mm',
          datetime: 'MMM D, h:mm a'
        },
        title: {
          day: 'dddd D MMMM, YYYY',
          week: 'Week {week} of {year}',
          month: 'MMMM YYYY',
          year: 'YYYY'
        }
      }
    },
    get dateFormats() {
      return this.allDateFormats[this.dateFormatter].date;
    },
    get titleFormats() {
      return this.allDateFormats[this.dateFormatter].title;
    },
    dateFormatter: 'angular',
    showTimesOnWeekView: false,
    displayAllMonthEvents: false,
    i18nStrings: {
      weekNumber: 'Week {week}'
    },
    templates: {}
  });
