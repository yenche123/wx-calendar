"use strict";var a=e(require("../plugins/lunar"));function e(e){return e&&e.__esModule?e:{default:e}}function n(r,e){var t,n=Object.keys(r);return Object.getOwnPropertySymbols&&(t=Object.getOwnPropertySymbols(r),e&&(t=t.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),n.push.apply(n,t)),n}function t(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?n(Object(t),!0).forEach(function(e){o(r,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))})}return r}function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}module.exports=[{name:"lunar",regist:function(e){return e.data.showLunar},handle:function(e){var r=e.year,t=e.month,n=e.day,e=new Date(r,t-1,n);return a.default.isOverDate(e)?null:a.default.lunar(r,t,n)}},{name:"marker",regist:function(e){return e.data.showMaker},handle:function(e,r){e="".concat(e.year,"_").concat(e.month,"_").concat(e.day);return r._dateMarkers.hasOwnProperty(e)?t({},r._dateMarkers[e]):null}}];