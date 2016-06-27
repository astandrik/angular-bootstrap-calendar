/**
 * angular-bootstrap-calendar - A pure AngularJS bootstrap themed responsive calendar that can display events and has views for year, month, week and day
 * @version v0.20.2
 * @link https://github.com/mattlewis92/angular-bootstrap-calendar
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"), (function webpackLoadOptionalExternalModule() { try { return require("interact.js"); } catch(e) {} }()), require("moment"));
	else if(typeof define === 'function' && define.amd)
		define(["angular", "interact", "moment"], factory);
	else if(typeof exports === 'object')
		exports["angularBootstrapCalendarModuleName"] = factory(require("angular"), (function webpackLoadOptionalExternalModule() { try { return require("interact.js"); } catch(e) {} }()), require("moment"));
	else
		root["angularBootstrapCalendarModuleName"] = factory(root["angular"], root["interact"], root["moment"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_51__, __WEBPACK_EXTERNAL_MODULE_53__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(8);

	var angular = __webpack_require__(12);

	function requireAll(r) {
	  r.keys().forEach(r);
	}

	var templates = {};

	if (true) {

	  var templatesContext = __webpack_require__(13);

	  templatesContext.keys().forEach(function(templateName) {
	    var templateNameWithoutPrefix = templateName.replace('./', '');
	    var cacheTemplateName = 'mwl/' + templateNameWithoutPrefix;
	    var configTemplateName = templateNameWithoutPrefix.replace('.html', '');
	    templates[configTemplateName] = {
	      cacheTemplateName: cacheTemplateName,
	      template: templatesContext(templateName)
	    };
	  });

	}

	module.exports = angular
	  .module('mwl.calendar', [])
	  .config(["calendarConfig", function(calendarConfig) {
	    angular.forEach(templates, function(template, templateName) {
	      if (!calendarConfig.templates[templateName]) {
	        calendarConfig.templates[templateName] = template.cacheTemplateName;
	      }
	    });
	  }])
	  .run(["$templateCache", "$interpolate", function($templateCache, $interpolate) {

	    angular.forEach(templates, function(template) {
	      if (!$templateCache.get(template.cacheTemplateName)) {
	        var templateContents = template.template
	          .replace('{{', $interpolate.startSymbol())
	          .replace('}}', $interpolate.endSymbol());
	        $templateCache.put(template.cacheTemplateName, templateContents);
	      }
	    });

	  }]).name;

	requireAll(__webpack_require__(24));
	requireAll(__webpack_require__(40));
	requireAll(__webpack_require__(45));


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./calendar.html": 14,
		"./calendarAllView.html": 15,
		"./calendarDayView.html": 16,
		"./calendarHourList.html": 17,
		"./calendarMonthCell.html": 18,
		"./calendarMonthCellEvents.html": 19,
		"./calendarMonthView.html": 20,
		"./calendarSlideBox.html": 21,
		"./calendarWeekView.html": 22,
		"./calendarYearView.html": 23
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 13;


/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "<div\r\n  class=\"cal-context\"\r\n  ng-switch=\"vm.view\"\r\n  ng-if=\"vm.templatesLoaded\">\r\n\r\n  <div class=\"alert alert-danger\" ng-switch-default>The value passed to the view attribute of the calendar is not set</div>\r\n\r\n  <div class=\"alert alert-danger\" ng-hide=\"vm.viewDate\">The value passed to view-date attribute of the calendar is not set</div>\r\n\r\n  <mwl-calendar-all\r\n    events=\"vm.events\"\r\n    start-date=\"vm.startDate\"\r\n    end-date=\"vm.endDate\"\r\n    on-event-click=\"vm.onEventClick\"\r\n    on-event-times-changed=\"vm.onEventTimesChanged\"\r\n    on-edit-event-click=\"vm.onEditEventClick\"\r\n    on-delete-event-click=\"vm.onDeleteEventClick\"\r\n    on-timespan-click=\"vm.onTimespanClick\"\r\n    edit-event-html=\"vm.editEventHtml\"\r\n    delete-event-html=\"vm.deleteEventHtml\"\r\n    cell-is-open=\"vm.cellIsOpen\"\r\n    cell-modifier=\"vm.cellModifier\"\r\n    slide-box-disabled=\"vm.slideBoxDisabled\"\r\n    ng-switch-when=\"all\">\r\n  </mwl-calendar-all>\r\n\r\n  <mwl-calendar-year\r\n    events=\"vm.events\"\r\n    view-date=\"vm.viewDate\"\r\n    on-event-click=\"vm.onEventClick\"\r\n    on-event-times-changed=\"vm.onEventTimesChanged\"\r\n    on-edit-event-click=\"vm.onEditEventClick\"\r\n    on-delete-event-click=\"vm.onDeleteEventClick\"\r\n    on-timespan-click=\"vm.onTimespanClick\"\r\n    edit-event-html=\"vm.editEventHtml\"\r\n    delete-event-html=\"vm.deleteEventHtml\"\r\n    cell-is-open=\"vm.cellIsOpen\"\r\n    cell-modifier=\"vm.cellModifier\"\r\n    slide-box-disabled=\"vm.slideBoxDisabled\"\r\n    ng-switch-when=\"year\">\r\n  </mwl-calendar-year>\r\n\r\n  <mwl-calendar-month\r\n    events=\"vm.events\"\r\n    view-date=\"vm.viewDate\"\r\n    on-event-click=\"vm.onEventClick\"\r\n    on-event-times-changed=\"vm.onEventTimesChanged\"\r\n    on-edit-event-click=\"vm.onEditEventClick\"\r\n    on-delete-event-click=\"vm.onDeleteEventClick\"\r\n    on-timespan-click=\"vm.onTimespanClick\"\r\n    edit-event-html=\"vm.editEventHtml\"\r\n    delete-event-html=\"vm.deleteEventHtml\"\r\n    cell-is-open=\"vm.cellIsOpen\"\r\n    cell-modifier=\"vm.cellModifier\"\r\n    slide-box-disabled=\"vm.slideBoxDisabled\"\r\n    ng-switch-when=\"month\">\r\n  </mwl-calendar-month>\r\n\r\n  <mwl-calendar-week\r\n    events=\"vm.events\"\r\n    view-date=\"vm.viewDate\"\r\n    on-event-click=\"vm.onEventClick\"\r\n    on-event-times-changed=\"vm.onEventTimesChanged\"\r\n    day-view-start=\"vm.dayViewStart\"\r\n    day-view-end=\"vm.dayViewEnd\"\r\n    day-view-split=\"vm.dayViewSplit\"\r\n    day-view-event-chunk-size=\"vm.dayViewEventChunkSize\"\r\n    on-timespan-click=\"vm.onTimespanClick\"\r\n    on-date-range-select=\"vm.onDateRangeSelect\"\r\n    ng-switch-when=\"week\">\r\n  </mwl-calendar-week>\r\n\r\n  <mwl-calendar-day\r\n    events=\"vm.events\"\r\n    view-date=\"vm.viewDate\"\r\n    on-event-click=\"vm.onEventClick\"\r\n    on-event-times-changed=\"vm.onEventTimesChanged\"\r\n    on-timespan-click=\"vm.onTimespanClick\"\r\n    on-date-range-select=\"vm.onDateRangeSelect\"\r\n    day-view-start=\"vm.dayViewStart\"\r\n    day-view-end=\"vm.dayViewEnd\"\r\n    day-view-split=\"vm.dayViewSplit\"\r\n    day-view-event-chunk-size=\"vm.dayViewEventChunkSize\"\r\n    on-edit-event-click=\"vm.onEditEventClick\"\r\n    on-delete-event-click=\"vm.onDeleteEventClick\"\r\n    edit-event-html=\"vm.editEventHtml\"\r\n    delete-event-html=\"vm.deleteEventHtml\"\r\n    ng-switch-when=\"day\">\r\n  </mwl-calendar-day>\r\n</div>\r\n";

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "<div class=\"cal-all-box\">\r\n    <div class=\"row cal-before-eventlist\">\r\n      <div\r\n        class=\"span3 col-md-3 col-xs-6 cal-cell year-cell {{ day.cssClass }}\"\r\n        ng-repeat=\"year in vm.view\"\r\n        ng-init=\"yearIndex = vm.view.indexOf(month)\"\r\n        ng-click=\"vm.yearClicked(year, false, $event)\"\r\n        ng-class=\"{pointer: month.events.length > 0, 'cal-day-today': month.isToday}\">\r\n        <span\r\n          style=\"display: block; height:40px; text-align: center\"\r\n          class=\"pull-left\"\r\n          data-cal-date\r\n          ng-click=\"vm.calendarCtrl.dateClicked(year.date)\"\r\n          ng-bind=\"year.label\">\r\n        </span>\r\n        <small\r\n          class=\"cal-events-num badge badge-important pull-right\"\r\n          ng-show=\"year.badgeTotal > 0\"\r\n          ng-bind=\"year.badgeTotal\">\r\n        </small>\r\n      </div>\r\n    </div>\r\n</div>\r\n";

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "<div class=\"cal-week-box cal-all-day-events-box\" ng-if=\"vm.allDayEvents.length > 0\">\r\n  <div class=\"cal-day-panel clearfix\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n        <div class=\"cal-row-fluid\">\r\n          <div\r\n            class=\"cal-cell-6 day-highlight dh-event-{{ event.type }}\"\r\n            data-event-class\r\n            ng-repeat=\"event in vm.allDayEvents track by event.$id\">\r\n            <strong>\r\n              <span ng-bind=\"event.startsAt | calendarDate:'datetime':true\"></span>\r\n              <span ng-if=\"event.endsAt\">\r\n                - <span ng-bind=\"event.endsAt | calendarDate:'datetime':true\"></span>\r\n              </span>\r\n            </strong>\r\n            <a\r\n              href=\"javascript:;\"\r\n              class=\"event-item\"\r\n              ng-bind-html=\"vm.calendarEventTitle.dayView(event) | calendarTrustAsHtml\">\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"cal-day-box\">\r\n  <div class=\"cal-day-panel clearfix\" ng-style=\"{height: vm.dayViewHeight + 'px'}\">\r\n\r\n    <mwl-calendar-hour-list\r\n      day-view-start=\"vm.dayViewStart\"\r\n      day-view-end=\"vm.dayViewEnd\"\r\n      day-view-split=\"vm.dayViewSplit\"\r\n      on-timespan-click=\"vm.onTimespanClick\"\r\n      on-date-range-select=\"vm.onDateRangeSelect\"\r\n      on-event-times-changed=\"vm.onEventTimesChanged\"\r\n      view-date=\"vm.viewDate\">\r\n    </mwl-calendar-hour-list>\r\n\r\n    <div\r\n      class=\"pull-left day-event day-highlight\"\r\n      ng-repeat=\"event in vm.nonAllDayEvents track by event.$id\"\r\n      ng-class=\"'dh-event-' + event.type + ' ' + event.cssClass\"\r\n      ng-style=\"{top: event.top + 'px', left: event.left + 60 + 'px', height: event.height + 'px'}\"\r\n      mwl-draggable=\"event.draggable === true\"\r\n      axis=\"'xy'\"\r\n      snap-grid=\"{y: vm.dayViewEventChunkSize || 30, x: 50}\"\r\n      on-drag=\"vm.eventDragged(event, y / 30)\"\r\n      on-drag-end=\"vm.eventDragComplete(event, y / 30)\"\r\n      mwl-resizable=\"event.resizable === true && event.endsAt\"\r\n      resize-edges=\"{top: true, bottom: true}\"\r\n      on-resize=\"vm.eventResized(event, edge, y / 30)\"\r\n      on-resize-end=\"vm.eventResizeComplete(event, edge, y / 30)\">\r\n\r\n      <span class=\"cal-hours\">\r\n        <span ng-show=\"event.top == 0\"><span ng-bind=\"(event.tempStartsAt || event.startsAt) | calendarDate:'day':true\"></span>, </span>\r\n        <span ng-bind=\"(event.tempStartsAt || event.startsAt) | calendarDate:'time':true\"></span>\r\n      </span>\r\n      <a href=\"javascript:;\" class=\"event-item\" ng-click=\"vm.onEventClick({calendarEvent: event})\">\r\n        <span ng-bind-html=\"vm.calendarEventTitle.dayView(event) | calendarTrustAsHtml\"></span>\r\n      </a>\r\n\r\n      <a\r\n        href=\"javascript:;\"\r\n        class=\"event-item-edit\"\r\n        ng-if=\"vm.editEventHtml && event.editable !== false\"\r\n        ng-bind-html=\"vm.editEventHtml | calendarTrustAsHtml\"\r\n        ng-click=\"vm.onEditEventClick({calendarEvent: event})\">\r\n      </a>\r\n\r\n      <a\r\n        href=\"javascript:;\"\r\n        class=\"event-item-delete\"\r\n        ng-if=\"vm.deleteEventHtml && event.deletable !== false\"\r\n        ng-bind-html=\"vm.deleteEventHtml | calendarTrustAsHtml\"\r\n        ng-click=\"vm.onDeleteEventClick({calendarEvent: event})\">\r\n      </a>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n";

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "<div class=\"cal-day-panel-hour\">\r\n\r\n  <div class=\"cal-day-hour\" ng-repeat=\"hour in vm.hours track by $index\">\r\n\r\n    <div\r\n      class=\"cal-day-hour-part\"\r\n      ng-class=\"{ 'cal-day-hour-part-selected': vm.dateRangeSelect &&\r\n                vm.dateRangeSelect.startDate <= vm.getClickedDate(hour.date, vm.dayViewSplit * $index) &&\r\n                vm.getClickedDate(hour.date, vm.dayViewSplit * $index) < vm.dateRangeSelect.endDate }\"\r\n      ng-repeat=\"chunk in vm.hourChunks track by chunk\"\r\n      ng-click=\"vm.onTimespanClick({calendarDate: vm.getClickedDate(hour.date, vm.dayViewSplit * $index)})\"\r\n      mwl-droppable\r\n      on-drop=\"vm.eventDropped(dropData.event, vm.getClickedDate(hour.date, vm.dayViewSplit * $index))\"\r\n      mwl-drag-select=\"!!vm.onDateRangeSelect\"\r\n      on-drag-select-start=\"vm.onDragSelectStart(vm.getClickedDate(hour.date, vm.dayViewSplit * $index))\"\r\n      on-drag-select-move=\"vm.onDragSelectMove(vm.getClickedDate(hour.date, vm.dayViewSplit * ($index + 1)))\"\r\n      on-drag-select-end=\"vm.onDragSelectEnd(vm.getClickedDate(hour.date, vm.dayViewSplit * ($index + 1)))\"\r\n      ng-if=\"!vm.dayWidth\">\r\n      <div class=\"cal-day-hour-part-time\">\r\n        <strong ng-bind=\"hour.label\" ng-show=\"$first\"></strong>\r\n      </div>\r\n    </div>\r\n\r\n    <div\r\n      class=\"cal-day-hour-part\"\r\n      ng-repeat=\"chunk in vm.hourChunks track by chunk\"\r\n      ng-if=\"vm.dayWidth\">\r\n      <div class=\"cal-day-hour-part-time\">\r\n        <strong ng-bind=\"hour.label\" ng-show=\"$first\"></strong>\r\n        &nbsp;\r\n      </div>\r\n      <div\r\n        class=\"cal-day-hour-part-spacer\"\r\n        ng-repeat=\"dayIndex in [0, 1, 2, 3, 4, 5, 6]\"\r\n        ng-style=\"{width: vm.dayWidth + 'px'}\"\r\n        ng-class=\"{ 'cal-day-hour-part-selected': vm.dateRangeSelect &&\r\n                vm.dateRangeSelect.startDate <= vm.getClickedDate(hour.date, vm.dayViewSplit * $parent.$index, dayIndex) &&\r\n                vm.getClickedDate(hour.date, vm.dayViewSplit * $parent.$index, dayIndex) < vm.dateRangeSelect.endDate }\"\r\n        ng-click=\"vm.onTimespanClick({calendarDate: vm.getClickedDate(hour.date, vm.dayViewSplit * $parent.$index, dayIndex)})\"\r\n        mwl-droppable\r\n        on-drop=\"vm.eventDropped(dropData.event, vm.getClickedDate(hour.date, vm.dayViewSplit * $parent.$index, dayIndex))\"\r\n        mwl-drag-select=\"!!vm.onDateRangeSelect\"\r\n        on-drag-select-start=\"vm.onDragSelectStart(vm.getClickedDate(hour.date, vm.dayViewSplit * $parent.$index, dayIndex), dayIndex)\"\r\n        on-drag-select-move=\"vm.onDragSelectMove(vm.getClickedDate(hour.date, vm.dayViewSplit * ($parent.$index + 1), vm.dateRangeSelect.dayIndex))\"\r\n        on-drag-select-end=\"vm.onDragSelectEnd(vm.getClickedDate(hour.date, vm.dayViewSplit * ($parent.$index + 1), vm.dateRangeSelect.dayIndex))\">\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n";

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "<div\r\n  mwl-droppable\r\n  on-drop=\"vm.handleEventDrop(dropData.event, day.date, dropData.draggedFromDate)\"\r\n  class=\"cal-month-day {{ day.cssClass }}\"\r\n  ng-class=\"{\r\n    'cal-day-outmonth': !day.inMonth,\r\n    'cal-day-inmonth': day.inMonth,\r\n    'cal-day-weekend': day.isWeekend,\r\n    'cal-day-past': day.isPast,\r\n    'cal-day-today': day.isToday,\r\n    'cal-day-future': day.isFuture\r\n  }\">\r\n\r\n  <small\r\n    class=\"cal-events-num badge badge-important pull-left\"\r\n    ng-show=\"day.badgeTotal > 0\"\r\n    ng-bind=\"day.badgeTotal\">\r\n  </small>\r\n\r\n  <span\r\n    class=\"pull-right\"\r\n    data-cal-date\r\n    ng-click=\"vm.calendarCtrl.dateClicked(day.date)\"\r\n    ng-bind=\"day.label\">\r\n  </span>\r\n\r\n  <div class=\"cal-day-tick\" ng-show=\"dayIndex === vm.openDayIndex && vm.view[vm.openDayIndex].events.length > 0 && !vm.slideBoxDisabled\">\r\n    <i class=\"glyphicon glyphicon-chevron-up\"></i>\r\n    <i class=\"fa fa-chevron-up\"></i>\r\n  </div>\r\n\r\n  <ng-include src=\":: vm.calendarConfig.templates.calendarMonthCellEvents\"></ng-include>\r\n\r\n  <div id=\"cal-week-box\" ng-if=\"$first && rowHovered\">\r\n    <span ng-bind=\"vm.calendarConfig.i18nStrings.weekNumber.replace('{week}', day.date.clone().add(1, 'day').isoWeek())\"></span>\r\n  </div>\r\n\r\n</div>\r\n";

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "<div class=\"events-list\" ng-show=\"day.events.length > 0\">\r\n  <a\r\n    ng-repeat=\"event in day.events | orderBy:'startsAt' track by event.$id\"\r\n    href=\"javascript:;\"\r\n    ng-click=\"$event.stopPropagation(); vm.onEventClick({calendarEvent: event})\"\r\n    class=\"pull-left event\"\r\n    ng-class=\"'event-' + event.type + ' ' + event.cssClass\"\r\n    ng-mouseenter=\"vm.highlightEvent(event, true)\"\r\n    ng-mouseleave=\"vm.highlightEvent(event, false)\"\r\n    tooltip-append-to-body=\"true\"\r\n    uib-tooltip-html=\"vm.calendarEventTitle.monthViewTooltip(event) | calendarTrustAsHtml\"\r\n    mwl-draggable=\"event.draggable === true\"\r\n    drop-data=\"{event: event, draggedFromDate: day.date.toDate()}\">\r\n  </a>\r\n</div>\r\n";

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "<div class=\"cal-row-fluid cal-row-head\">\r\n\r\n  <div class=\"cal-cell1\" ng-repeat=\"day in vm.weekDays track by $index\" ng-bind=\"day\"></div>\r\n\r\n</div>\r\n<div class=\"cal-month-box\">\r\n\r\n  <div\r\n    ng-repeat=\"rowOffset in vm.monthOffsets track by rowOffset\"\r\n    ng-mouseenter=\"rowHovered = true\"\r\n    ng-mouseleave=\"rowHovered = false\">\r\n    <div class=\"cal-row-fluid cal-before-eventlist\">\r\n      <div\r\n        ng-repeat=\"day in vm.view | calendarLimitTo:7:rowOffset track by $index\"\r\n        ng-init=\"dayIndex = vm.view.indexOf(day)\"\r\n        class=\"cal-cell1 cal-cell {{ day.highlightClass }}\"\r\n        ng-click=\"vm.dayClicked(day, false, $event)\"\r\n        ng-class=\"{pointer: day.events.length > 0}\">\r\n        <ng-include src=\":: vm.calendarConfig.templates.calendarMonthCell\"></ng-include>\r\n      </div>\r\n    </div>\r\n\r\n    <mwl-calendar-slide-box\r\n      is-open=\"vm.openRowIndex === $index && vm.view[vm.openDayIndex].events.length > 0 && !vm.slideBoxDisabled\"\r\n      events=\"vm.view[vm.openDayIndex].events\"\r\n      on-event-click=\"vm.onEventClick\"\r\n      edit-event-html=\"vm.editEventHtml\"\r\n      on-edit-event-click=\"vm.onEditEventClick\"\r\n      delete-event-html=\"vm.deleteEventHtml\"\r\n      on-delete-event-click=\"vm.onDeleteEventClick\"\r\n      cell=\"vm.view[vm.openDayIndex]\">\r\n    </mwl-calendar-slide-box>\r\n\r\n  </div>\r\n\r\n</div>\r\n";

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "<div class=\"cal-slide-box\" uib-collapse=\"vm.isCollapsed\" mwl-collapse-fallback=\"vm.isCollapsed\">\r\n  <div class=\"cal-slide-content cal-event-list\">\r\n    <ul class=\"unstyled list-unstyled\">\r\n\r\n      <li\r\n        ng-repeat=\"event in vm.events | orderBy:'startsAt' track by event.$id\"\r\n        ng-class=\"event.cssClass\"\r\n        mwl-draggable=\"event.draggable === true\"\r\n        drop-data=\"{event: event}\">\r\n        <span class=\"pull-left event\" ng-class=\"'event-' + event.type\"></span>\r\n        &nbsp;\r\n        <a\r\n          href=\"javascript:;\"\r\n          class=\"event-item\"\r\n          ng-click=\"vm.onEventClick({calendarEvent: event})\">\r\n          <span ng-bind-html=\"isMonthView ? vm.calendarEventTitle.monthView(event) : vm.calendarEventTitle.yearView(event) | calendarTrustAsHtml\"></span>\r\n        </a>\r\n\r\n        <a\r\n          href=\"javascript:;\"\r\n          class=\"event-item-edit\"\r\n          ng-if=\"vm.editEventHtml && event.editable !== false\"\r\n          ng-bind-html=\"vm.editEventHtml | calendarTrustAsHtml\"\r\n          ng-click=\"vm.onEditEventClick({calendarEvent: event})\">\r\n        </a>\r\n\r\n        <a\r\n          href=\"javascript:;\"\r\n          class=\"event-item-delete\"\r\n          ng-if=\"vm.deleteEventHtml && event.deletable !== false\"\r\n          ng-bind-html=\"vm.deleteEventHtml | calendarTrustAsHtml\"\r\n          ng-click=\"vm.onDeleteEventClick({calendarEvent: event})\">\r\n        </a>\r\n      </li>\r\n\r\n    </ul>\r\n  </div>\r\n</div>\r\n";

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "<div class=\"cal-week-box\" ng-class=\"{'cal-day-box': vm.showTimes}\">\r\n  <div class=\"cal-row-fluid cal-row-head\">\r\n\r\n    <div\r\n      class=\"cal-cell1\"\r\n      ng-repeat=\"day in vm.view.days track by $index\"\r\n      ng-class=\"{\r\n        'cal-day-weekend': day.isWeekend,\r\n        'cal-day-past': day.isPast,\r\n        'cal-day-today': day.isToday,\r\n        'cal-day-future': day.isFuture}\"\r\n      mwl-element-dimensions=\"vm.dayColumnDimensions\"\r\n      mwl-droppable\r\n      on-drop=\"vm.eventDropped(dropData.event, day.date)\">\r\n\r\n      <span ng-bind=\"day.weekDayLabel\"></span>\r\n      <br>\r\n      <small>\r\n        <span\r\n          data-cal-date\r\n          ng-click=\"vm.calendarCtrl.dateClicked(day.date)\"\r\n          class=\"pointer\"\r\n          ng-bind=\"day.dayLabel\">\r\n        </span>\r\n      </small>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"cal-day-panel clearfix\" ng-style=\"{height: vm.showTimes ? (vm.dayViewHeight + 'px') : 'auto'}\">\r\n\r\n    <mwl-calendar-hour-list\r\n      day-view-start=\"vm.dayViewStart\"\r\n      day-view-end=\"vm.dayViewEnd\"\r\n      day-view-split=\"vm.dayViewSplit\"\r\n      day-width=\"vm.dayColumnDimensions.width\"\r\n      view-date=\"vm.viewDate\"\r\n      on-timespan-click=\"vm.onTimespanClick\"\r\n      on-date-range-select=\"vm.onDateRangeSelect\"\r\n      ng-if=\"vm.showTimes\">\r\n    </mwl-calendar-hour-list>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n        <div\r\n          class=\"cal-row-fluid\"\r\n          ng-repeat=\"event in vm.view.events track by event.$id\">\r\n          <div\r\n            ng-class=\"'cal-cell' + (vm.showTimes ? 1 : event.daySpan) + (vm.showTimes ? '' : ' cal-offset' + event.dayOffset) + ' day-highlight dh-event-' + event.type + ' ' + event.cssClass\"\r\n            ng-style=\"{\r\n              top: vm.showTimes ? ((event.top + 2) + 'px') : 'auto',\r\n              position: vm.showTimes ? 'absolute' : 'inherit',\r\n              width: vm.showTimes ? (vm.dayColumnDimensions.width + 'px') : '',\r\n              left: vm.showTimes ? (vm.dayColumnDimensions.width * event.dayOffset) + 15 + 'px' : ''\r\n            }\"\r\n            data-event-class\r\n            mwl-draggable=\"event.draggable === true\"\r\n            axis=\"vm.showTimes ? 'xy' : 'x'\"\r\n            snap-grid=\"vm.showTimes ? {x: vm.dayColumnDimensions.width, y: vm.dayViewEventChunkSize || 30} : {x: vm.dayColumnDimensions.width}\"\r\n            on-drag=\"vm.tempTimeChanged(event, y / 30)\"\r\n            on-drag-end=\"vm.weekDragged(event, x / vm.dayColumnDimensions.width, y / 30)\"\r\n            mwl-resizable=\"event.resizable === true && event.endsAt && !vm.showTimes\"\r\n            resize-edges=\"{left: true, right: true}\"\r\n            on-resize-end=\"vm.weekResized(event, edge, x / vm.dayColumnDimensions.width)\">\r\n            <strong ng-bind=\"(event.tempStartsAt || event.startsAt) | calendarDate:'time':true\" ng-show=\"vm.showTimes\"></strong>\r\n            <a\r\n              href=\"javascript:;\"\r\n              ng-click=\"vm.onEventClick({calendarEvent: event})\"\r\n              class=\"event-item\"\r\n              ng-bind-html=\"vm.calendarEventTitle.weekView(event) | calendarTrustAsHtml\"\r\n              uib-tooltip-html=\"vm.calendarEventTitle.weekViewTooltip(event) | calendarTrustAsHtml\"\r\n              tooltip-placement=\"left\"\r\n              tooltip-append-to-body=\"true\">\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n";

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "<div class=\"cal-year-box\">\r\n  <div ng-repeat=\"rowOffset in [0, 4, 8] track by rowOffset\">\r\n    <div class=\"row cal-before-eventlist\">\r\n      <div\r\n        class=\"span3 col-md-3 col-xs-6 cal-cell {{ day.cssClass }}\"\r\n        ng-repeat=\"month in vm.view | calendarLimitTo:4:rowOffset track by $index\"\r\n        ng-init=\"monthIndex = vm.view.indexOf(month)\"\r\n        ng-click=\"vm.monthClicked(month, false, $event)\"\r\n        ng-class=\"{pointer: month.events.length > 0, 'cal-day-today': month.isToday}\"\r\n        mwl-droppable\r\n        on-drop=\"vm.handleEventDrop(dropData.event, month.date)\">\r\n\r\n        <span\r\n          class=\"pull-right\"\r\n          data-cal-date\r\n          ng-click=\"vm.calendarCtrl.dateClicked(month.date)\"\r\n          ng-bind=\"month.label\">\r\n        </span>\r\n\r\n        <small\r\n          class=\"cal-events-num badge badge-important pull-left\"\r\n          ng-show=\"month.badgeTotal > 0\"\r\n          ng-bind=\"month.badgeTotal\">\r\n        </small>\r\n\r\n        <div\r\n          class=\"cal-day-tick\"\r\n          ng-show=\"monthIndex === vm.openMonthIndex && vm.view[vm.openMonthIndex].events.length > 0 && !vm.slideBoxDisabled\">\r\n          <i class=\"glyphicon glyphicon-chevron-up\"></i>\r\n          <i class=\"fa fa-chevron-up\"></i>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <mwl-calendar-slide-box\r\n      is-open=\"vm.openRowIndex === $index && vm.view[vm.openMonthIndex].events.length > 0 && !vm.slideBoxDisabled\"\r\n      events=\"vm.view[vm.openMonthIndex].events\"\r\n      on-event-click=\"vm.onEventClick\"\r\n      edit-event-html=\"vm.editEventHtml\"\r\n      on-edit-event-click=\"vm.onEditEventClick\"\r\n      delete-event-html=\"vm.deleteEventHtml\"\r\n      on-delete-event-click=\"vm.onDeleteEventClick\"\r\n      cell=\"vm.view[vm.openMonthIndex]\">\r\n    </mwl-calendar-slide-box>\r\n\r\n  </div>\r\n\r\n</div>\r\n";

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./mwlCalendar.js": 25,
		"./mwlCalendarAll.js": 26,
		"./mwlCalendarDay.js": 27,
		"./mwlCalendarHourList.js": 28,
		"./mwlCalendarMonth.js": 29,
		"./mwlCalendarSlideBox.js": 30,
		"./mwlCalendarWeek.js": 31,
		"./mwlCalendarYear.js": 32,
		"./mwlCollapseFallback.js": 33,
		"./mwlDateModifier.js": 34,
		"./mwlDragSelect.js": 35,
		"./mwlDraggable.js": 36,
		"./mwlDroppable.js": 37,
		"./mwlElementDimensions.js": 38,
		"./mwlResizable.js": 39
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 24;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(12);

	angular
	  .module('mwl.calendar')
	  .controller('MwlCalendarCtrl', ["$scope", "$log", "$timeout", "$attrs", "$locale", "moment", "calendarTitle", "calendarHelper", function($scope, $log, $timeout, $attrs, $locale, moment, calendarTitle, calendarHelper) {

	    var vm = this;

	    vm.events = vm.events || [];
	    vm.changeView = function(view, newDay) {
	      vm.view = view;
	      vm.viewDate = newDay;
	    };

	    vm.dateClicked = function(date) {

	      var rawDate = moment(date).toDate();

	      var nextView = {
	        all: 'year',
	        year: 'month',
	        month: 'day',
	        week: 'day'
	      };

	      if (vm.onViewChangeClick({calendarDate: rawDate, calendarNextView: nextView[vm.view]}) !== false) {
	        vm.changeView(nextView[vm.view], rawDate);
	      }

	    };

	    var previousDate = moment(vm.viewDate);
	    var previousView = vm.view;

	    function eventIsValid(event) {
	      if (!event.startsAt) {
	        $log.warn('Bootstrap calendar: ', 'Event is missing the startsAt field', event);
	      } else if (!angular.isDate(event.startsAt)) {
	        $log.warn('Bootstrap calendar: ', 'Event startsAt should be a javascript date object. Do `new Date(event.startsAt)` to fix it.', event);
	      }

	      if (event.endsAt) {
	        if (!angular.isDate(event.endsAt)) {
	          $log.warn('Bootstrap calendar: ', 'Event endsAt should be a javascript date object. Do `new Date(event.endsAt)` to fix it.', event);
	        }
	        if (moment(event.startsAt).isAfter(moment(event.endsAt))) {
	          $log.warn('Bootstrap calendar: ', 'Event cannot start after it finishes', event);
	        }
	      }

	      return true;
	    }

	    function refreshCalendar() {

	      if (calendarTitle[vm.view] && angular.isDefined($attrs.viewTitle)) {
	        vm.viewTitle = calendarTitle[vm.view](vm.viewDate);
	      }

	      vm.events = vm.events.filter(eventIsValid).map(function(event, index) {
	        Object.defineProperty(event, '$id', {enumerable: false, configurable: true, value: index});
	        return event;
	      });

	      //if on-timespan-click="calendarDay = calendarDate" is set then don't update the view as nothing needs to change
	      var currentDate = moment(vm.viewDate);
	      var shouldUpdate = true;
	      if (
	        previousDate.clone().startOf(vm.view).isSame(currentDate.clone().startOf(vm.view)) &&
	        !previousDate.isSame(currentDate) &&
	        vm.view === previousView
	      ) {
	        shouldUpdate = false;
	      }
	      previousDate = currentDate;
	      previousView = vm.view;

	      if (shouldUpdate) {
	        // a $timeout is required as $broadcast is synchronous so if a new events array is set the calendar won't update
	        $timeout(function() {
	          $scope.$broadcast('calendar.refreshView');
	        });
	      }
	    }

	    calendarHelper.loadTemplates().then(function() {
	      vm.templatesLoaded = true;

	      var eventsWatched = false;

	      //Refresh the calendar when any of these variables change.
	      $scope.$watchGroup([
	        'vm.viewDate',
	        'vm.view',
	        'vm.cellIsOpen',
	        function() {
	          return moment.locale() + $locale.id; //Auto update the calendar when the locale changes
	        }
	      ], function() {
	        if (!eventsWatched) {
	          eventsWatched = true;
	          //need to deep watch events hence why it isn't included in the watch group
	          $scope.$watch('vm.events', refreshCalendar, true); //this will call refreshCalendar when the watcher starts (i.e. now)
	        } else {
	          refreshCalendar();
	        }
	      });

	    }).catch(function(err) {
	      $log.error('Could not load all calendar templates', err);
	    });

	  }])
	  .directive('mwlCalendar', ["calendarConfig", function(calendarConfig) {

	    return {
	      templateUrl: calendarConfig.templates.calendar,
	      restrict: 'E',
	      scope: {
	        events: '=',
	        view: '=',
	        viewTitle: '=?',
	        viewDate: '=',
	        startDate: '=',
	        endDate: '=',
	        editEventHtml: '=?',
	        deleteEventHtml: '=?',
	        cellIsOpen: '=?',
	        slideBoxDisabled: '=?',
	        onEventClick: '&',
	        onEventTimesChanged: '&',
	        onEditEventClick: '&',
	        onDeleteEventClick: '&',
	        onTimespanClick: '&',
	        onDateRangeSelect: '&?',
	        onViewChangeClick: '&',
	        cellModifier: '&',
	        dayViewStart: '@',
	        dayViewEnd: '@',
	        dayViewSplit: '@',
	        dayViewEventChunkSize: '@'
	      },
	      controller: 'MwlCalendarCtrl as vm',
	      bindToController: true
	    };

	  }]);


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(12);

	angular
	  .module('mwl.calendar')
	  .controller('MwlCalendarAllCtrl', ["$scope", "moment", "calendarHelper", function($scope, moment, calendarHelper) {

	    var vm = this;
	    vm.openMonthIndex = null;

	    $scope.$on('calendar.refreshView', function() {
	      vm.view = calendarHelper.getAllView(vm.events, vm.startDate, vm.endDate, vm.cellModifier);

	      //Auto open the calendar to the current day if set
	      if (vm.cellIsOpen && vm.openMonthIndex === null) {
	        vm.openMonthIndex = null;
	        vm.view.forEach(function(month) {
	          if (moment(vm.viewDate).startOf('month').isSame(month.date)) {
	            vm.monthClicked(month, true);
	          }
	        });
	      }

	    });

	    vm.monthClicked = function(month, monthClickedFirstRun, $event) {

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
	      if (monthIndex === vm.openMonthIndex) { //the month has been clicked and is already open
	        vm.openMonthIndex = null; //close the open month
	        vm.cellIsOpen = false;
	      } else {
	        vm.openMonthIndex = monthIndex;
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

	  }])
	  .directive('mwlCalendarAll', ["calendarConfig", function(calendarConfig) {

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

	  }]);


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(12);

	angular
	  .module('mwl.calendar')
	  .controller('MwlCalendarDayCtrl', ["$scope", "moment", "calendarHelper", "calendarEventTitle", function($scope, moment, calendarHelper, calendarEventTitle) {

	    var vm = this;

	    vm.calendarEventTitle = calendarEventTitle;

	    function refreshView() {
	      vm.dayViewSplit = vm.dayViewSplit || 30;
	      vm.dayViewHeight = calendarHelper.getDayViewHeight(
	        vm.dayViewStart,
	        vm.dayViewEnd,
	        vm.dayViewSplit
	      );

	      var events = calendarHelper.getDayView(
	        vm.events,
	        vm.viewDate,
	        vm.dayViewStart,
	        vm.dayViewEnd,
	        vm.dayViewSplit
	      );

	      vm.allDayEvents = events.filter(function(event) {
	        return event.allDay;
	      });

	      vm.nonAllDayEvents = events.filter(function(event) {
	        return !event.allDay;
	      });

	    }

	    $scope.$on('calendar.refreshView', refreshView);

	    $scope.$watchGroup([
	      'vm.dayViewStart',
	      'vm.dayViewEnd',
	      'vm.dayViewSplit'
	    ], refreshView);

	    vm.eventDragComplete = function(event, minuteChunksMoved) {
	      var minutesDiff = minuteChunksMoved * vm.dayViewSplit;
	      var newStart = moment(event.startsAt).add(minutesDiff, 'minutes');
	      var newEnd = moment(event.endsAt).add(minutesDiff, 'minutes');
	      delete event.tempStartsAt;

	      vm.onEventTimesChanged({
	        calendarEvent: event,
	        calendarNewEventStart: newStart.toDate(),
	        calendarNewEventEnd: event.endsAt ? newEnd.toDate() : null
	      });
	    };

	    vm.eventDragged = function(event, minuteChunksMoved) {
	      var minutesDiff = minuteChunksMoved * vm.dayViewSplit;
	      event.tempStartsAt = moment(event.startsAt).add(minutesDiff, 'minutes').toDate();
	    };

	    vm.eventResizeComplete = function(event, edge, minuteChunksMoved) {
	      var minutesDiff = minuteChunksMoved * vm.dayViewSplit;
	      var start = moment(event.startsAt);
	      var end = moment(event.endsAt);
	      if (edge === 'start') {
	        start.add(minutesDiff, 'minutes');
	      } else {
	        end.add(minutesDiff, 'minutes');
	      }
	      delete event.tempStartsAt;

	      vm.onEventTimesChanged({
	        calendarEvent: event,
	        calendarNewEventStart: start.toDate(),
	        calendarNewEventEnd: end.toDate()
	      });
	    };

	    vm.eventResized = function(event, edge, minuteChunksMoved) {
	      var minutesDiff = minuteChunksMoved * vm.dayViewSplit;
	      if (edge === 'start') {
	        event.tempStartsAt = moment(event.startsAt).add(minutesDiff, 'minutes').toDate();
	      }
	    };

	  }])
	  .directive('mwlCalendarDay', ["calendarConfig", function(calendarConfig) {

	    return {
	      templateUrl: calendarConfig.templates.calendarDayView,
	      restrict: 'E',
	      require: '^mwlCalendar',
	      scope: {
	        events: '=',
	        viewDate: '=',
	        onEventClick: '=',
	        onEventTimesChanged: '=',
	        onTimespanClick: '=',
	        onDateRangeSelect: '=',
	        dayViewStart: '=',
	        dayViewEnd: '=',
	        dayViewSplit: '=',
	        dayViewEventChunkSize: '=',
	        onEditEventClick: '=',
	        onDeleteEventClick: '=',
	        editEventHtml: '=',
	        deleteEventHtml: '='
	      },
	      controller: 'MwlCalendarDayCtrl as vm',
	      bindToController: true
	    };

	  }]);


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(12);

	angular
	  .module('mwl.calendar')
	  .controller('MwlCalendarHourListCtrl', ["$scope", "$attrs", "moment", "calendarConfig", "calendarHelper", function($scope, $attrs, moment, calendarConfig, calendarHelper) {
	    var vm = this;
	    var dayViewStart, dayViewEnd;

	    function updateDays() {
	      dayViewStart = moment(vm.dayViewStart || '00:00', 'HH:mm');
	      dayViewEnd = moment(vm.dayViewEnd || '23:00', 'HH:mm');
	      vm.dayViewSplit = parseInt(vm.dayViewSplit);
	      vm.hours = [];
	      var dayCounter = moment(vm.viewDate)
	        .clone();

	      if ($attrs.dayWidth) {
	        dayCounter = dayCounter.startOf('week');
	      }

	      dayCounter
	        .hours(dayViewStart.hours())
	        .minutes(dayViewStart.minutes())
	        .seconds(dayViewStart.seconds());

	      for (var i = 0; i <= dayViewEnd.diff(dayViewStart, 'hours'); i++) {
	        vm.hours.push({
	          label: calendarHelper.formatDate(dayCounter, calendarConfig.dateFormats.hour),
	          date: dayCounter.clone()
	        });
	        dayCounter.add(1, 'hour');
	      }
	      vm.hourChunks = [];
	      for (var j = 0; j < (60 / vm.dayViewSplit); j++) {
	        vm.hourChunks.push(j);
	      }
	    }

	    var originalLocale = moment.locale();

	    $scope.$on('calendar.refreshView', function() {

	      if (originalLocale !== moment.locale()) {
	        originalLocale = moment.locale();
	        updateDays();
	      }

	    });

	    $scope.$watchGroup([
	      'vm.dayViewStart',
	      'vm.dayViewEnd',
	      'vm.dayViewSplit',
	      'vm.viewDate'
	    ], function() {
	      updateDays();
	    });

	    vm.eventDropped = function(event, date) {
	      var newStart = moment(date);
	      var newEnd = calendarHelper.adjustEndDateFromStartDiff(event.startsAt, newStart, event.endsAt);

	      vm.onEventTimesChanged({
	        calendarEvent: event,
	        calendarDate: date,
	        calendarNewEventStart: newStart.toDate(),
	        calendarNewEventEnd: newEnd ? newEnd.toDate() : null
	      });
	    };

	    vm.getClickedDate = function(baseDate, minutes, days) {
	      return moment(baseDate).clone().add(minutes, 'minutes').add(days || 0, 'days').toDate();
	    };

	    vm.onDragSelectStart = function(date, dayIndex) {
	      if (!vm.dateRangeSelect) {
	        vm.dateRangeSelect = {
	          active: true,
	          startDate: date,
	          endDate: date,
	          dayIndex: dayIndex
	        };
	      }
	    };

	    vm.onDragSelectMove = function(date) {
	      if (vm.dateRangeSelect) {
	        vm.dateRangeSelect.endDate = date;
	      }
	    };

	    vm.onDragSelectEnd = function(date) {
	      vm.dateRangeSelect.endDate = date;
	      if (vm.dateRangeSelect.endDate > vm.dateRangeSelect.startDate) {
	        vm.onDateRangeSelect({calendarRangeStartDate: vm.dateRangeSelect.startDate, calendarRangeEndDate: vm.dateRangeSelect.endDate});
	      }
	      delete vm.dateRangeSelect;
	    };

	  }])
	  .directive('mwlCalendarHourList', ["calendarConfig", function(calendarConfig) {

	    return {
	      restrict: 'E',
	      templateUrl: calendarConfig.templates.calendarHourList,
	      controller: 'MwlCalendarHourListCtrl as vm',
	      scope: {
	        viewDate: '=',
	        dayViewStart: '=',
	        dayViewEnd: '=',
	        dayViewSplit: '=',
	        dayWidth: '=?',
	        onTimespanClick: '=',
	        onDateRangeSelect: '=',
	        onEventTimesChanged: '='
	      },
	      bindToController: true
	    };

	  }]);


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(12);

	angular
	  .module('mwl.calendar')
	  .controller('MwlCalendarMonthCtrl', ["$scope", "moment", "calendarHelper", "calendarConfig", "calendarEventTitle", function($scope, moment, calendarHelper, calendarConfig, calendarEventTitle) {

	    var vm = this;
	    vm.calendarConfig = calendarConfig;
	    vm.calendarEventTitle = calendarEventTitle;
	    vm.openRowIndex = null;

	    $scope.$on('calendar.refreshView', function() {

	      vm.weekDays = calendarHelper.getWeekDayNames();

	      vm.view = calendarHelper.getMonthView(vm.events, vm.viewDate, vm.cellModifier);
	      var rows = Math.floor(vm.view.length / 7);
	      vm.monthOffsets = [];
	      for (var i = 0; i < rows; i++) {
	        vm.monthOffsets.push(i * 7);
	      }

	      //Auto open the calendar to the current day if set
	      if (vm.cellIsOpen && vm.openRowIndex === null) {
	        vm.openDayIndex = null;
	        vm.view.forEach(function(day) {
	          if (day.inMonth && moment(vm.viewDate).startOf('day').isSame(day.date)) {
	            vm.dayClicked(day, true);
	          }
	        });
	      }

	    });

	    vm.dayClicked = function(day, dayClickedFirstRun, $event) {

	      if (!dayClickedFirstRun) {
	        vm.onTimespanClick({
	          calendarDate: day.date.toDate(),
	          calendarCell: day,
	          $event: $event
	        });
	        if ($event && $event.defaultPrevented) {
	          return;
	        }
	      }

	      vm.openRowIndex = null;
	      var dayIndex = vm.view.indexOf(day);
	      if (dayIndex === vm.openDayIndex) { //the day has been clicked and is already open
	        vm.openDayIndex = null; //close the open day
	        vm.cellIsOpen = false;
	      } else {
	        vm.openDayIndex = dayIndex;
	        vm.openRowIndex = Math.floor(dayIndex / 7);
	        vm.cellIsOpen = true;
	      }

	    };

	    vm.highlightEvent = function(event, shouldAddClass) {

	      vm.view.forEach(function(day) {
	        delete day.highlightClass;
	        if (shouldAddClass) {
	          var dayContainsEvent = day.events.indexOf(event) > -1;
	          if (dayContainsEvent) {
	            day.highlightClass = 'day-highlight dh-event-' + event.type;
	          }
	        }
	      });

	    };

	    vm.handleEventDrop = function(event, newDayDate, draggedFromDate) {

	      var newStart = moment(event.startsAt)
	        .date(moment(newDayDate).date())
	        .month(moment(newDayDate).month())
	        .year(moment(newDayDate).year());

	      var newEnd = calendarHelper.adjustEndDateFromStartDiff(event.startsAt, newStart, event.endsAt);

	      vm.onEventTimesChanged({
	        calendarEvent: event,
	        calendarDate: newDayDate,
	        calendarNewEventStart: newStart.toDate(),
	        calendarNewEventEnd: newEnd ? newEnd.toDate() : null,
	        calendarDraggedFromDate: draggedFromDate
	      });
	    };

	  }])
	  .directive('mwlCalendarMonth', ["calendarConfig", function(calendarConfig) {

	    return {
	      templateUrl: calendarConfig.templates.calendarMonthView,
	      restrict: 'E',
	      require: '^mwlCalendar',
	      scope: {
	        events: '=',
	        viewDate: '=',
	        onEventClick: '=',
	        onEditEventClick: '=',
	        onDeleteEventClick: '=',
	        onEventTimesChanged: '=',
	        editEventHtml: '=',
	        deleteEventHtml: '=',
	        cellIsOpen: '=',
	        onTimespanClick: '=',
	        cellModifier: '=',
	        slideBoxDisabled: '='
	      },
	      controller: 'MwlCalendarMonthCtrl as vm',
	      link: function(scope, element, attrs, calendarCtrl) {
	        scope.vm.calendarCtrl = calendarCtrl;
	      },
	      bindToController: true
	    };

	  }]);


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(12);

	angular
	  .module('mwl.calendar')
	  .controller('MwlCalendarSlideBoxCtrl', ["$scope", "$timeout", "calendarConfig", "calendarEventTitle", function($scope, $timeout, calendarConfig, calendarEventTitle) {

	    var vm = this;
	    vm.calendarConfig = calendarConfig;
	    vm.calendarEventTitle = calendarEventTitle;

	    vm.isCollapsed = true;
	    $scope.$watch('vm.isOpen', function(isOpen) {
	      //events must be populated first to set the element height before animation will work
	      $timeout(function() {
	        vm.isCollapsed = !isOpen;
	      });
	    });

	  }])
	  .directive('mwlCalendarSlideBox', ["calendarConfig", function(calendarConfig) {

	    return {
	      restrict: 'E',
	      templateUrl: calendarConfig.templates.calendarSlideBox,
	      replace: true,
	      controller: 'MwlCalendarSlideBoxCtrl as vm',
	      require: ['^?mwlCalendarMonth', '^?mwlCalendarYear'],
	      link: function(scope, elm, attrs, ctrls) {
	        scope.isMonthView = !!ctrls[0];
	        scope.isYearView = !!ctrls[1];
	      },
	      scope: {
	        isOpen: '=',
	        events: '=',
	        onEventClick: '=',
	        editEventHtml: '=',
	        onEditEventClick: '=',
	        deleteEventHtml: '=',
	        onDeleteEventClick: '=',
	        cell: '='
	      },
	      bindToController: true
	    };

	  }]);


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(12);

	angular
	  .module('mwl.calendar')
	  .controller('MwlCalendarWeekCtrl', ["$scope", "moment", "calendarHelper", "calendarConfig", "calendarEventTitle", function($scope, moment, calendarHelper, calendarConfig, calendarEventTitle) {

	    var vm = this;

	    vm.showTimes = calendarConfig.showTimesOnWeekView;
	    vm.calendarEventTitle = calendarEventTitle;

	    $scope.$on('calendar.refreshView', function() {
	      vm.dayViewSplit = vm.dayViewSplit || 30;
	      vm.dayViewHeight = calendarHelper.getDayViewHeight(
	        vm.dayViewStart,
	        vm.dayViewEnd,
	        vm.dayViewSplit
	      );
	      if (vm.showTimes) {
	        vm.view = calendarHelper.getWeekViewWithTimes(
	          vm.events,
	          vm.viewDate,
	          vm.dayViewStart,
	          vm.dayViewEnd,
	          vm.dayViewSplit
	        );
	      } else {
	        vm.view = calendarHelper.getWeekView(vm.events, vm.viewDate);
	      }
	    });

	    vm.weekDragged = function(event, daysDiff, minuteChunksMoved) {

	      var newStart = moment(event.startsAt).add(daysDiff, 'days');
	      var newEnd = moment(event.endsAt).add(daysDiff, 'days');

	      if (minuteChunksMoved) {
	        var minutesDiff = minuteChunksMoved * vm.dayViewSplit;
	        newStart = newStart.add(minutesDiff, 'minutes');
	        newEnd = newEnd.add(minutesDiff, 'minutes');
	      }

	      delete event.tempStartsAt;

	      vm.onEventTimesChanged({
	        calendarEvent: event,
	        calendarNewEventStart: newStart.toDate(),
	        calendarNewEventEnd: event.endsAt ? newEnd.toDate() : null
	      });
	    };

	    vm.eventDropped = function(event, date) {
	      var daysDiff = moment(date).diff(moment(event.startsAt), 'days');
	      vm.weekDragged(event, daysDiff);
	    };

	    vm.weekResized = function(event, edge, daysDiff) {

	      var start = moment(event.startsAt);
	      var end = moment(event.endsAt);
	      if (edge === 'start') {
	        start.add(daysDiff, 'days');
	      } else {
	        end.add(daysDiff, 'days');
	      }

	      vm.onEventTimesChanged({
	        calendarEvent: event,
	        calendarNewEventStart: start.toDate(),
	        calendarNewEventEnd: end.toDate()
	      });

	    };

	    vm.tempTimeChanged = function(event, minuteChunksMoved) {
	      var minutesDiff = minuteChunksMoved * vm.dayViewSplit;
	      event.tempStartsAt = moment(event.startsAt).add(minutesDiff, 'minutes').toDate();
	    };

	  }])
	  .directive('mwlCalendarWeek', ["calendarConfig", function(calendarConfig) {

	    return {
	      templateUrl: calendarConfig.templates.calendarWeekView,
	      restrict: 'E',
	      require: '^mwlCalendar',
	      scope: {
	        events: '=',
	        viewDate: '=',
	        onEventClick: '=',
	        onEventTimesChanged: '=',
	        dayViewStart: '=',
	        dayViewEnd: '=',
	        dayViewSplit: '=',
	        dayViewEventChunkSize: '=',
	        onTimespanClick: '=',
	        onDateRangeSelect: '='
	      },
	      controller: 'MwlCalendarWeekCtrl as vm',
	      link: function(scope, element, attrs, calendarCtrl) {
	        scope.vm.calendarCtrl = calendarCtrl;
	      },
	      bindToController: true
	    };

	  }]);


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(12);

	angular
	  .module('mwl.calendar')
	  .controller('MwlCalendarYearCtrl', ["$scope", "moment", "calendarHelper", function($scope, moment, calendarHelper) {

	    var vm = this;
	    vm.openMonthIndex = null;

	    $scope.$on('calendar.refreshView', function() {
	      vm.view = calendarHelper.getYearView(vm.events, vm.viewDate, vm.cellModifier);

	      //Auto open the calendar to the current day if set
	      if (vm.cellIsOpen && vm.openMonthIndex === null) {
	        vm.openMonthIndex = null;
	        vm.view.forEach(function(month) {
	          if (moment(vm.viewDate).startOf('month').isSame(month.date)) {
	            vm.monthClicked(month, true);
	          }
	        });
	      }

	    });

	    vm.monthClicked = function(month, monthClickedFirstRun, $event) {

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
	      if (monthIndex === vm.openMonthIndex) { //the month has been clicked and is already open
	        vm.openMonthIndex = null; //close the open month
	        vm.cellIsOpen = false;
	      } else {
	        vm.openMonthIndex = monthIndex;
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

	  }])
	  .directive('mwlCalendarYear', ["calendarConfig", function(calendarConfig) {

	    return {
	      templateUrl: calendarConfig.templates.calendarYearView,
	      restrict: 'E',
	      require: '^mwlCalendar',
	      scope: {
	        events: '=',
	        viewDate: '=',
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
	      controller: 'MwlCalendarYearCtrl as vm',
	      link: function(scope, element, attrs, calendarCtrl) {
	        scope.vm.calendarCtrl = calendarCtrl;
	      },
	      bindToController: true
	    };

	  }]);


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(12);

	angular
	  .module('mwl.calendar')
	  .controller('MwlCollapseFallbackCtrl', ["$scope", "$attrs", "$element", function($scope, $attrs, $element) {

	    $scope.$watch($attrs.mwlCollapseFallback, function(shouldCollapse) {
	      if (shouldCollapse) {
	        $element.addClass('ng-hide');
	      } else {
	        $element.removeClass('ng-hide');
	      }
	    });

	  }])
	  .directive('mwlCollapseFallback', ["$injector", function($injector) {

	    if ($injector.has('uibCollapseDirective')) {
	      return {};
	    }

	    return {
	      restrict: 'A',
	      controller: 'MwlCollapseFallbackCtrl'
	    };

	  }]);


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(12);

	angular
	  .module('mwl.calendar')
	  .controller('MwlDateModifierCtrl', ["$element", "$attrs", "$scope", "moment", function($element, $attrs, $scope, moment) {

	    var vm = this;

	    function onClick() {
	      if (angular.isDefined($attrs.setToToday)) {
	        vm.date = new Date();
	      } else if (angular.isDefined($attrs.increment)) {
	        vm.date = moment(vm.date).add(1, vm.increment).toDate();
	      } else if (angular.isDefined($attrs.decrement)) {
	        vm.date = moment(vm.date).subtract(1, vm.decrement).toDate();
	      }
	      $scope.$apply();
	    }

	    $element.bind('click', onClick);

	    $scope.$on('$destroy', function() {
	      $element.unbind('click', onClick);
	    });

	  }])
	  .directive('mwlDateModifier', function() {

	    return {
	      restrict: 'A',
	      controller: 'MwlDateModifierCtrl as vm',
	      scope: {
	        date: '=',
	        increment: '=',
	        decrement: '='
	      },
	      bindToController: true
	    };

	  });


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(12);

	angular
	  .module('mwl.calendar')
	  .controller('MwlDragSelectCtrl', ["$scope", "$element", "$parse", "$attrs", function($scope, $element, $parse, $attrs) {

	    function handleMouseEvent(callbackName) {
	      return function(event) {
	        if (callbackName) {
	          $parse(callbackName)($scope);
	          $scope.$apply();
	        }
	        event.preventDefault();
	      };
	    }

	    var onMouseDown = handleMouseEvent($attrs.onDragSelectStart);
	    var onMouseMove = handleMouseEvent($attrs.onDragSelectMove);
	    var onMouseUp = handleMouseEvent($attrs.onDragSelectEnd);

	    function enableMouseListeners() {
	      $element.on('mousedown', onMouseDown);
	      $element.on('mousemove', onMouseMove);
	      $element.on('mouseup', onMouseUp);
	    }

	    function disableMouseListeners() {
	      $element.off('mousedown', onMouseDown);
	      $element.off('mousemove', onMouseMove);
	      $element.off('mouseup', onMouseUp);
	    }

	    $scope.$watch($attrs.mwlDragSelect, function(isEnabled) {
	      if (isEnabled) {
	        enableMouseListeners();
	      } else {
	        disableMouseListeners();
	      }
	    });

	    $scope.$on('$destroy', function() {
	      disableMouseListeners();
	    });

	  }])
	  .directive('mwlDragSelect', function() {

	    return {
	      restrict: 'A',
	      controller: 'MwlDragSelectCtrl'
	    };

	  });


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(12);

	angular
	  .module('mwl.calendar')
	  .controller('MwlDraggableCtrl', ["$element", "$scope", "$window", "$parse", "$attrs", "$timeout", "interact", function($element, $scope, $window, $parse, $attrs, $timeout, interact) {

	    if (!interact) {
	      return;
	    }

	    var snap, snapGridDimensions;
	    if ($attrs.snapGrid) {
	      snapGridDimensions = $parse($attrs.snapGrid)($scope);
	      snap = {
	        targets: [
	          interact.createSnapGrid(snapGridDimensions)
	        ]
	      };
	    }

	    function translateElement(elm, transformValue) {
	      return elm
	        .css('-ms-transform', transformValue)
	        .css('-webkit-transform', transformValue)
	        .css('transform', transformValue);
	    }

	    interact($element[0]).draggable({
	      snap: snap,
	      onstart: function(event) {
	        angular.element(event.target).addClass('dragging-active');
	        event.target.dropData = $parse($attrs.dropData)($scope);
	        event.target.style.pointerEvents = 'none';
	        if ($attrs.onDragStart) {
	          $parse($attrs.onDragStart)($scope);
	          $scope.$apply();
	        }
	      },
	      onmove: function(event) {

	        var elm = angular.element(event.target);
	        var x = (parseFloat(elm.attr('data-x')) || 0) + (event.dx || 0);
	        var y = (parseFloat(elm.attr('data-y')) || 0) + (event.dy || 0);

	        switch ($parse($attrs.axis)($scope)) {
	          case 'x':
	            y = 0;
	            break;

	          case 'y':
	            x = 0;
	            break;

	          default:
	        }

	        if ($window.getComputedStyle(elm[0]).position === 'static') {
	          elm.css('position', 'relative');
	        }

	        translateElement(elm, 'translate(' + x + 'px, ' + y + 'px)')
	          .css('z-index', 50)
	          .attr('data-x', x)
	          .attr('data-y', y);

	        if ($attrs.onDrag) {
	          $parse($attrs.onDrag)($scope, {x: x, y: y});
	          $scope.$apply();
	        }

	      },
	      onend: function(event) {

	        var elm = angular.element(event.target);
	        var x = elm.attr('data-x');
	        var y = elm.attr('data-y');

	        event.target.style.pointerEvents = 'auto';
	        if ($attrs.onDragEnd) {
	          $parse($attrs.onDragEnd)($scope, {x: x, y: y});
	          $scope.$apply();
	        }

	        $timeout(function() {
	          translateElement(elm, '')
	            .css('z-index', 'auto')
	            .removeAttr('data-x')
	            .removeAttr('data-y')
	            .removeClass('dragging-active');
	        });

	      }
	    });

	    $scope.$watch($attrs.mwlDraggable, function(enabled) {
	      interact($element[0]).draggable({
	        enabled: enabled
	      });
	    });

	    $scope.$on('$destroy', function() {
	      interact($element[0]).unset();
	    });

	  }])
	  .directive('mwlDraggable', function() {

	    return {
	      restrict: 'A',
	      controller: 'MwlDraggableCtrl'
	    };

	  });


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(12);

	angular
	  .module('mwl.calendar')
	  .controller('MwlDroppableCtrl', ["$element", "$scope", "$parse", "$attrs", "interact", function($element, $scope, $parse, $attrs, interact) {

	    if (!interact) {
	      return;
	    }

	    var DROP_ACTIVE_CLASS = $attrs.dropActiveClass || 'drop-active';

	    interact($element[0]).dropzone({
	      ondragenter: function(event) {
	        angular.element(event.target).addClass(DROP_ACTIVE_CLASS);
	      },
	      ondragleave: function(event) {
	        angular.element(event.target).removeClass(DROP_ACTIVE_CLASS);
	      },
	      ondropdeactivate: function(event) {
	        angular.element(event.target).removeClass(DROP_ACTIVE_CLASS);
	      },
	      ondrop: function(event) {
	        if (event.relatedTarget.dropData) {
	          $parse($attrs.onDrop)($scope, {dropData: event.relatedTarget.dropData});
	          $scope.$apply();
	        }
	      }
	    });

	    $scope.$on('$destroy', function() {
	      interact($element[0]).unset();
	    });

	  }])
	  .directive('mwlDroppable', function() {

	    return {
	      restrict: 'A',
	      controller: 'MwlDroppableCtrl'
	    };

	  });


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(12);

	angular
	  .module('mwl.calendar')
	  .controller('MwlElementDimensionsCtrl', ["$element", "$scope", "$parse", "$attrs", "$window", function($element, $scope, $parse, $attrs, $window) {

	    function setDimensions() {
	      $parse($attrs.mwlElementDimensions).assign($scope, {
	        width: $element[0].offsetWidth,
	        height: $element[0].offsetHeight
	      });
	      $scope.$applyAsync();
	    }

	    var win = angular.element($window);

	    win.bind('resize', setDimensions);

	    setDimensions();

	    $scope.$on('$destroy', function() {
	      win.unbind('resize', setDimensions);
	    });

	  }])
	  .directive('mwlElementDimensions', function() {

	    return {
	      restrict: 'A',
	      controller: 'MwlElementDimensionsCtrl'
	    };

	  });


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(12);

	angular
	  .module('mwl.calendar')
	  .controller('MwlResizableCtrl', ["$element", "$scope", "$parse", "$attrs", "$timeout", "interact", function($element, $scope, $parse, $attrs, $timeout, interact) {

	    if (!interact) {
	      return;
	    }

	    var snap, snapGridDimensions;
	    if ($attrs.snapGrid) {
	      snapGridDimensions = $parse($attrs.snapGrid)($scope);
	      snap = {
	        targets: [
	          interact.createSnapGrid(snapGridDimensions)
	        ]
	      };
	    }

	    var originalDimensions = {};
	    var originalDimensionsStyle = {};
	    var resizeEdge;

	    function getUnitsResized(edge, elm) {
	      var unitsResized = {};
	      unitsResized.edge = edge;
	      if (edge === 'start') {
	        unitsResized.x = elm.data('x');
	        unitsResized.y = elm.data('y');
	      } else if (edge === 'end') {
	        unitsResized.x = parseFloat(elm.css('width').replace('px', '')) - originalDimensions.width;
	        unitsResized.y = parseFloat(elm.css('height').replace('px', '')) - originalDimensions.height;
	      }
	      return unitsResized;
	    }

	    interact($element[0]).resizable({
	      edges: $parse($attrs.resizeEdges)($scope),
	      snap: snap,
	      onstart: function(event) {

	        resizeEdge = 'end';
	        var elm = angular.element(event.target);
	        originalDimensions.height = elm[0].offsetHeight;
	        originalDimensions.width = elm[0].offsetWidth;
	        originalDimensionsStyle.height = elm.css('height');
	        originalDimensionsStyle.width = elm.css('width');

	      },
	      onmove: function(event) {

	        if (event.rect.width > 0 && event.rect.height > 0) {
	          var elm = angular.element(event.target);
	          var x = parseFloat(elm.data('x') || 0);
	          var y = parseFloat(elm.data('y') || 0);

	          elm.css({
	            width: event.rect.width + 'px',
	            height: event.rect.height + 'px'
	          });

	          // translate when resizing from top or left edges
	          x += event.deltaRect.left;
	          y += event.deltaRect.top;

	          elm.css('transform', 'translate(' + x + 'px,' + y + 'px)');

	          elm.data('x', x);
	          elm.data('y', y);

	          if (event.deltaRect.left !== 0 || event.deltaRect.top !== 0) {
	            resizeEdge = 'start';
	          }

	          if ($attrs.onResize) {
	            $parse($attrs.onResize)($scope, getUnitsResized(resizeEdge, elm));
	            $scope.$apply();
	          }

	        }

	      },
	      onend: function(event) {

	        var elm = angular.element(event.target);
	        var unitsResized = getUnitsResized(resizeEdge, elm);

	        $timeout(function() {
	          elm
	            .data('x', null)
	            .data('y', null)
	            .css({
	              transform: '',
	              width: originalDimensionsStyle.width,
	              height: originalDimensionsStyle.height
	            });
	        });

	        if ($attrs.onResizeEnd) {
	          $parse($attrs.onResizeEnd)($scope, unitsResized);
	          $scope.$apply();
	        }

	      }
	    });

	    $scope.$watch($attrs.mwlResizable, function(enabled) {
	      interact($element[0]).resizable({
	        enabled: enabled
	      });
	    });

	    $scope.$on('$destroy', function() {
	      interact($element[0]).unset();
	    });

	  }])
	  .directive('mwlResizable', function() {

	    return {
	      restrict: 'A',
	      controller: 'MwlResizableCtrl'
	    };

	  });


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./calendarDate.js": 41,
		"./calendarLimitTo.js": 42,
		"./calendarTruncateEventTitle.js": 43,
		"./calendarTrustAsHtml.js": 44
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 40;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(12);

	angular
	  .module('mwl.calendar')
	  .filter('calendarDate', ["calendarHelper", "calendarConfig", function(calendarHelper, calendarConfig) {

	    function calendarDate(date, format, getFromConfig) {

	      if (getFromConfig === true) {
	        format = calendarConfig.dateFormats[format];
	      }

	      return calendarHelper.formatDate(date, format);

	    }

	    // This is stateful because the locale can change as well
	    // as calendarConfig.dateFormats which would change the value outside of this filter
	    calendarDate.$stateful = true;

	    return calendarDate;

	  }]);


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(12);

	angular
	  .module('mwl.calendar')
	  .filter('calendarLimitTo', ["limitToFilter", function(limitToFilter) {

	    if (angular.version.minor >= 4) { //1.4+ supports the begin attribute
	      return limitToFilter;
	    }

	    //Copied from the angular source. Only 1.4 has the begin functionality.
	    return function(input, limit, begin) {
	      if (Math.abs(Number(limit)) === Infinity) {
	        limit = Number(limit);
	      } else {
	        limit = parseInt(limit);
	      }
	      if (isNaN(limit)) {
	        return input;
	      }

	      if (angular.isNumber(input)) {
	        input = input.toString();
	      }
	      if (!angular.isArray(input) && !angular.isString(input)) {
	        return input;
	      }

	      begin = (!begin || isNaN(begin)) ? 0 : parseInt(begin);
	      begin = (begin < 0 && begin >= -input.length) ? input.length + begin : begin;

	      if (limit >= 0) {
	        return input.slice(begin, begin + limit);
	      } else if (begin === 0) {
	        return input.slice(limit, input.length);
	      } else {
	        return input.slice(Math.max(0, begin + limit), begin);
	      }
	    };

	  }]);


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(12);

	angular
	  .module('mwl.calendar')
	  .filter('calendarTruncateEventTitle', function() {

	    return function(string, length, boxHeight) {
	      if (!string) {
	        return '';
	      }

	      //Only truncate if if actually needs truncating
	      if (string.length >= length && string.length / 20 > boxHeight / 30) {
	        return string.substr(0, length) + '...';
	      } else {
	        return string;
	      }
	    };

	  });


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(12);

	angular
	  .module('mwl.calendar')
	  .filter('calendarTrustAsHtml', ["$sce", function($sce) {

	    return function(text) {
	      return $sce.trustAsHtml(text);
	    };

	  }]);


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./calendarConfig.js": 46,
		"./calendarEventTitle.js": 47,
		"./calendarHelper.js": 48,
		"./calendarTitle.js": 49,
		"./interact.js": 50,
		"./moment.js": 52
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 45;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(12);

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
	          year: 'YYYY',
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


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(12);

	angular
	  .module('mwl.calendar')
	  .factory('calendarEventTitle', ["calendarDateFilter", "calendarTruncateEventTitleFilter", function(calendarDateFilter, calendarTruncateEventTitleFilter) {

	    function yearView(event) {
	      return event.title + ' (' + calendarDateFilter(event.startsAt, 'datetime', true) + ')';
	    }

	    function monthView(event) {
	      return event.title + ' (' + calendarDateFilter(event.startsAt, 'time', true) + ')';
	    }

	    function monthViewTooltip(event) {
	      return calendarDateFilter(event.startsAt, 'time', true) + ' - ' + event.title;
	    }

	    function weekView(event) {
	      return event.title;
	    }

	    function weekViewTooltip(event) {
	      return event.title;
	    }

	    function dayView(event) {
	      return event.allDay ? event.title : calendarTruncateEventTitleFilter(event.title, 20, event.height);
	    }

	    return {
	      yearView: yearView,
	      monthView: monthView,
	      monthViewTooltip: monthViewTooltip,
	      weekView: weekView,
	      weekViewTooltip: weekViewTooltip,
	      dayView: dayView
	    };

	  }]);


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(12);

	angular
	  .module('mwl.calendar')
	  .factory('calendarHelper', ["$q", "$templateRequest", "dateFilter", "moment", "calendarConfig", function($q, $templateRequest, dateFilter, moment, calendarConfig) {

	    function formatDate(date, format) {
	      if (calendarConfig.dateFormatter === 'angular') {
	        return dateFilter(moment(date).toDate(), format);
	      } else if (calendarConfig.dateFormatter === 'moment') {
	        return moment(date).format(format);
	      } else {
	        throw new Error('Unknown date formatter: ' + calendarConfig.dateFormatter);
	      }
	    }

	    function adjustEndDateFromStartDiff(oldStart, newStart, oldEnd) {
	      if (!oldEnd) {
	        return oldEnd;
	      }
	      var diffInSeconds = moment(newStart).diff(moment(oldStart));
	      return moment(oldEnd).add(diffInSeconds);
	    }

	    function getRecurringEventPeriod(eventPeriod, recursOn, containerPeriodStart) {

	      var eventStart = moment(eventPeriod.start);
	      var eventEnd = moment(eventPeriod.end);
	      var periodStart = moment(containerPeriodStart);

	      if (recursOn) {

	        switch (recursOn) {
	          case 'year':
	            eventStart.set({
	              year: periodStart.year()
	            });
	            break;

	          case 'month':
	            eventStart.set({
	              year: periodStart.year(),
	              month: periodStart.month()
	            });
	            break;

	          default:
	            throw new Error('Invalid value (' + recursOn + ') given for recurs on. Can only be year or month.');
	        }

	        eventEnd = adjustEndDateFromStartDiff(eventPeriod.start, eventStart, eventEnd);

	      }

	      return {start: eventStart, end: eventEnd};

	    }

	    function eventIsInPeriod(event, periodStart, periodEnd) {

	      periodStart = moment(periodStart);
	      periodEnd = moment(periodEnd);

	      var eventPeriod = getRecurringEventPeriod({start: event.startsAt, end: event.endsAt || event.startsAt}, event.recursOn, periodStart);
	      var eventStart = eventPeriod.start;
	      var eventEnd = eventPeriod.end;

	      return (eventStart.isAfter(periodStart) && eventStart.isBefore(periodEnd)) ||
	        (eventEnd.isAfter(periodStart) && eventEnd.isBefore(periodEnd)) ||
	        (eventStart.isBefore(periodStart) && eventEnd.isAfter(periodEnd)) ||
	        eventStart.isSame(periodStart) ||
	        eventEnd.isSame(periodEnd);

	    }

	    function filterEventsInPeriod(events, startPeriod, endPeriod) {
	      return events.filter(function(event) {
	        return eventIsInPeriod(event, startPeriod, endPeriod);
	      });
	    }

	    function getEventsInPeriod(calendarDate, period, allEvents) {
	      var startPeriod = moment(calendarDate).startOf(period);
	      var endPeriod = moment(calendarDate).endOf(period);
	      return filterEventsInPeriod(allEvents, startPeriod, endPeriod);
	    }

	    function getBadgeTotal(events) {
	      return events.filter(function(event) {
	        return event.incrementsBadgeTotal !== false;
	      }).length;
	    }

	    function getWeekDayNames() {
	      var weekdays = [];
	      var count = 0;
	      while (count < 7) {
	        weekdays.push(formatDate(moment().weekday(count++), calendarConfig.dateFormats.weekDay));
	      }
	      return weekdays;
	    }

	    function getYearView(events, viewDate, cellModifier) {

	      var view = [];
	      var eventsInPeriod = getEventsInPeriod(viewDate, 'year', events);
	      var month = moment(viewDate).startOf('year');
	      var count = 0;
	      while (count < 12) {
	        var startPeriod = month.clone();
	        var endPeriod = startPeriod.clone().endOf('month');
	        var periodEvents = filterEventsInPeriod(eventsInPeriod, startPeriod, endPeriod);
	        var cell = {
	          label: formatDate(startPeriod, calendarConfig.dateFormats.month),
	          isToday: startPeriod.isSame(moment().startOf('month')),
	          events: periodEvents,
	          date: startPeriod,
	          badgeTotal: getBadgeTotal(periodEvents)
	        };

	        cellModifier({calendarCell: cell});
	        view.push(cell);
	        month.add(1, 'month');
	        count++;
	      }

	      return view;

	    }

	    function getAllView(events, start, end, cellModifier) {

	      var view = [];
	      var startYear = moment(start.toString());
	      var endYear = moment(end.toString());
	      while(startYear < endYear) {
	        var eventsInPeriod = getEventsInPeriod(startYear, 'year', events);
	        var cell = {
	          label: formatDate(startYear, calendarConfig.dateFormats.year),
	          isToday: startYear.isSame(moment().startOf('year')),
	          date: startYear.clone(),
	          events: eventsInPeriod,
	          badgeTotal: getBadgeTotal(eventsInPeriod)
	        };
	        cellModifier({calendarCell: cell});
	        view.push(cell);
	        startYear.add(1, 'year');
	      }
	      return view;

	    }


	    function getMonthView(events, viewDate, cellModifier) {

	      var startOfMonth = moment(viewDate).startOf('month');
	      var day = startOfMonth.clone().startOf('week');
	      var endOfMonthView = moment(viewDate).endOf('month').endOf('week');
	      var eventsInPeriod;
	      if (calendarConfig.displayAllMonthEvents) {
	        eventsInPeriod = filterEventsInPeriod(events, day, endOfMonthView);
	      } else {
	        eventsInPeriod = filterEventsInPeriod(events, startOfMonth, startOfMonth.clone().endOf('month'));
	      }
	      var view = [];
	      var today = moment().startOf('day');

	      while (day.isBefore(endOfMonthView)) {

	        var inMonth = day.month() === moment(viewDate).month();
	        var monthEvents = [];
	        if (inMonth || calendarConfig.displayAllMonthEvents) {
	          monthEvents = filterEventsInPeriod(eventsInPeriod, day, day.clone().endOf('day'));
	        }

	        var cell = {
	          label: day.date(),
	          date: day.clone(),
	          inMonth: inMonth,
	          isPast: today.isAfter(day),
	          isToday: today.isSame(day),
	          isFuture: today.isBefore(day),
	          isWeekend: [0, 6].indexOf(day.day()) > -1,
	          events: monthEvents,
	          badgeTotal: getBadgeTotal(monthEvents)
	        };

	        cellModifier({calendarCell: cell});

	        view.push(cell);

	        day.add(1, 'day');
	      }

	      return view;

	    }

	    function getWeekView(events, viewDate) {

	      var startOfWeek = moment(viewDate).startOf('week');
	      var endOfWeek = moment(viewDate).endOf('week');
	      var dayCounter = startOfWeek.clone();
	      var days = [];
	      var today = moment().startOf('day');
	      while (days.length < 7) {
	        days.push({
	          weekDayLabel: formatDate(dayCounter, calendarConfig.dateFormats.weekDay),
	          date: dayCounter.clone(),
	          dayLabel: formatDate(dayCounter, calendarConfig.dateFormats.day),
	          isPast: dayCounter.isBefore(today),
	          isToday: dayCounter.isSame(today),
	          isFuture: dayCounter.isAfter(today),
	          isWeekend: [0, 6].indexOf(dayCounter.day()) > -1
	        });
	        dayCounter.add(1, 'day');
	      }

	      var eventsSorted = filterEventsInPeriod(events, startOfWeek, endOfWeek).map(function(event) {

	        var weekViewStart = moment(startOfWeek).startOf('day');
	        var weekViewEnd = moment(endOfWeek).startOf('day');

	        var eventPeriod = getRecurringEventPeriod({
	          start: moment(event.startsAt).startOf('day'),
	          end: moment(event.endsAt || event.startsAt).startOf('day')
	        }, event.recursOn, weekViewStart);

	        var eventStart = eventPeriod.start;
	        var eventEnd = eventPeriod.end;

	        var offset;
	        if (eventStart.isBefore(weekViewStart) || eventStart.isSame(weekViewStart)) {
	          offset = 0;
	        } else {
	          offset = eventStart.diff(weekViewStart, 'days');
	        }

	        if (eventEnd.isAfter(weekViewEnd)) {
	          eventEnd = weekViewEnd;
	        }

	        if (eventStart.isBefore(weekViewStart)) {
	          eventStart = weekViewStart;
	        }

	        event.daySpan = moment(eventEnd).diff(eventStart, 'days') + 1;
	        event.dayOffset = offset;

	        return event;
	      });

	      return {days: days, events: eventsSorted};

	    }

	    function getDayView(events, viewDate, dayViewStart, dayViewEnd, dayViewSplit) {

	      var dayStartHour = moment(dayViewStart || '00:00', 'HH:mm').hours();
	      var dayEndHour = moment(dayViewEnd || '23:00', 'HH:mm').hours();
	      var hourHeight = (60 / dayViewSplit) * 30;
	      var calendarStart = moment(viewDate).startOf('day').add(dayStartHour, 'hours');
	      var calendarEnd = moment(viewDate).startOf('day').add(dayEndHour + 1, 'hours');
	      var calendarHeight = (dayEndHour - dayStartHour + 1) * hourHeight;
	      var hourHeightMultiplier = hourHeight / 60;
	      var buckets = [];
	      var eventsInPeriod = filterEventsInPeriod(
	        events,
	        moment(viewDate).startOf('day').toDate(),
	        moment(viewDate).endOf('day').toDate()
	      );

	      return eventsInPeriod.map(function(event) {
	        if (moment(event.startsAt).isBefore(calendarStart)) {
	          event.top = 0;
	        } else {
	          event.top = (moment(event.startsAt).startOf('minute').diff(calendarStart.startOf('minute'), 'minutes') * hourHeightMultiplier) - 2;
	        }

	        if (moment(event.endsAt || event.startsAt).isAfter(calendarEnd)) {
	          event.height = calendarHeight - event.top;
	        } else {
	          var diffStart = event.startsAt;
	          if (moment(event.startsAt).isBefore(calendarStart)) {
	            diffStart = calendarStart.toDate();
	          }
	          if (!event.endsAt) {
	            event.height = 30;
	          } else {
	            event.height = moment(event.endsAt).diff(moment(diffStart), 'minutes') * hourHeightMultiplier;
	          }
	        }

	        if (event.top - event.height > calendarHeight) {
	          event.height = 0;
	        }

	        event.left = 0;

	        return event;
	      }).filter(function(event) {
	        return event.height > 0;
	      }).map(function(event) {

	        var cannotFitInABucket = true;
	        buckets.forEach(function(bucket, bucketIndex) {
	          var canFitInThisBucket = true;

	          bucket.filter(function(bucketItem) {
	            return !bucketItem.allDay;
	          }).forEach(function(bucketItem) {
	            if (eventIsInPeriod(event, bucketItem.startsAt, bucketItem.endsAt || bucketItem.startsAt) ||
	              eventIsInPeriod(bucketItem, event.startsAt, event.endsAt || event.startsAt)) {
	              canFitInThisBucket = false;
	            }
	          });

	          if (canFitInThisBucket && cannotFitInABucket) {
	            cannotFitInABucket = false;
	            event.left = bucketIndex * 150;
	            buckets[bucketIndex].push(event);
	          }

	        });

	        if (cannotFitInABucket) {
	          event.left = buckets.length * 150;
	          buckets.push([event]);
	        }

	        return event;

	      });

	    }

	    function getWeekViewWithTimes(events, viewDate, dayViewStart, dayViewEnd, dayViewSplit) {
	      var weekView = getWeekView(events, viewDate);
	      var newEvents = [];
	      weekView.days.forEach(function(day) {
	        var dayEvents = weekView.events.filter(function(event) {
	          return moment(event.startsAt).startOf('day').isSame(moment(day.date).startOf('day'));
	        });
	        var newDayEvents = getDayView(
	          dayEvents,
	          day.date,
	          dayViewStart,
	          dayViewEnd,
	          dayViewSplit
	        );
	        newEvents = newEvents.concat(newDayEvents);
	      });
	      weekView.events = newEvents;
	      return weekView;
	    }

	    function getDayViewHeight(dayViewStart, dayViewEnd, dayViewSplit) {
	      var dayViewStartM = moment(dayViewStart || '00:00', 'HH:mm');
	      var dayViewEndM = moment(dayViewEnd || '23:00', 'HH:mm');
	      var hourHeight = (60 / dayViewSplit) * 30;
	      return ((dayViewEndM.diff(dayViewStartM, 'hours') + 1) * hourHeight) + 2;
	    }

	    function loadTemplates() {

	      var templatePromises = Object.keys(calendarConfig.templates).map(function(key) {
	        var templateUrl = calendarConfig.templates[key];
	        return $templateRequest(templateUrl);
	      });

	      return $q.all(templatePromises);

	    }

	    return {
	      getWeekDayNames: getWeekDayNames,
	      getYearView: getYearView,
	      getAllView: getAllView,
	      getMonthView: getMonthView,
	      getWeekView: getWeekView,
	      getDayView: getDayView,
	      getWeekViewWithTimes: getWeekViewWithTimes,
	      getDayViewHeight: getDayViewHeight,
	      adjustEndDateFromStartDiff: adjustEndDateFromStartDiff,
	      formatDate: formatDate,
	      loadTemplates: loadTemplates,
	      eventIsInPeriod: eventIsInPeriod //expose for testing only
	    };

	  }]);


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(12);

	angular
	  .module('mwl.calendar')
	  .factory('calendarTitle', ["moment", "calendarConfig", "calendarHelper", function(moment, calendarConfig, calendarHelper) {

	    function day(viewDate) {
	      return calendarHelper.formatDate(viewDate, calendarConfig.titleFormats.day);
	    }

	    function week(viewDate) {
	      return calendarConfig.titleFormats.week
	        .replace('{week}', moment(viewDate).isoWeek())
	        .replace('{year}', moment(viewDate).startOf('week').format('YYYY'));
	    }

	    function month(viewDate) {
	      return calendarHelper.formatDate(viewDate, calendarConfig.titleFormats.month);
	    }

	    function year(viewDate) {
	      return calendarHelper.formatDate(viewDate, calendarConfig.titleFormats.year);
	    }

	    return {
	      day: day,
	      week: week,
	      month: month,
	      year: year
	    };

	  }]);


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(12);
	var interact;
	try {
	  interact = __webpack_require__(51);
	} catch (e) {
	  /* istanbul ignore next */
	  interact = null;
	}

	angular
	  .module('mwl.calendar')
	  .constant('interact', interact);


/***/ },
/* 51 */
/***/ function(module, exports) {

	if(typeof __WEBPACK_EXTERNAL_MODULE_51__ === 'undefined') {var e = new Error("Cannot find module \"undefined\""); e.code = 'MODULE_NOT_FOUND'; throw e;}
	module.exports = __WEBPACK_EXTERNAL_MODULE_51__;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(12);
	var moment = __webpack_require__(53);

	angular
	  .module('mwl.calendar')
	  .constant('moment', moment);


/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_53__;

/***/ }
/******/ ])
});
;