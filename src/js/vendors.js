/**
 * angular-input-match
 * ngModel validation for matching model attributes
 * @version v0.0.1-dev-2014-04-19
 * @link https://github.com/interval-braining/angular-input-match
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

if (typeof module !== "undefined" && typeof exports !== "undefined" && module.exports === exports){
  module.exports = 'directives.inputMatch';
}

(function (window, angular, undefined) {
"use strict";
// Source: src/angular_input_match.js
var inputMatch = angular.module('directives.inputMatch', []);
inputMatch.directive('match', function () {

  function link(scope, elem, attrs, ctrl) {
    if(!ctrl) { return; }

    scope.$watch(
      function() {
        return (ctrl.$pristine && angular.isUndefined(ctrl.$modelValue)) || scope.match === ctrl.$modelValue;
      },
      function(currentValue) {
        ctrl.$setValidity('match', currentValue);
      }
    );
  }

  return {
    link: link,
    require: '?ngModel',
    restrict: 'A',
    scope: { match: '=' }
  };
});
})(window, window.angular);
/*!
 * angular-translate - v2.6.0 - 2015-02-08
 * http://github.com/angular-translate/angular-translate
 * Copyright (c) 2015 ; Licensed MIT
 */
angular.module("pascalprecht.translate",["ng"]).run(["$translate",function(a){var b=a.storageKey(),c=a.storage(),d=function(){var d=a.preferredLanguage();angular.isString(d)?a.use(d):c.put(b,a.use())};c?c.get(b)?a.use(c.get(b))["catch"](d):d():angular.isString(a.preferredLanguage())&&a.use(a.preferredLanguage())}]),angular.module("pascalprecht.translate").provider("$translate",["$STORAGE_KEY","$windowProvider",function(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r={},s=[],t=a,u=[],v=!1,w="translate-cloak",x=!1,y=".",z=0,A="2.6.0",B=function(){var a,c,d=b.$get().navigator,e=["language","browserLanguage","systemLanguage","userLanguage"];if(angular.isArray(d.languages))for(a=0;a<d.languages.length;a++)if(c=d.languages[a],c&&c.length)return c;for(a=0;a<e.length;a++)if(c=d[e[a]],c&&c.length)return c;return null};B.displayName="angular-translate/service: getFirstBrowserLanguage";var C=function(){return(B()||"").split("-").join("_")};C.displayName="angular-translate/service: getLocale";var D=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},E=function(){return this.replace(/^\s+|\s+$/g,"")},F=function(a){for(var b=[],c=angular.lowercase(a),e=0,f=s.length;f>e;e++)b.push(angular.lowercase(s[e]));if(D(b,c)>-1)return a;if(d){var g;for(var h in d){var i=!1,j=Object.prototype.hasOwnProperty.call(d,h)&&angular.lowercase(h)===angular.lowercase(a);if("*"===h.slice(-1)&&(i=h.slice(0,-1)===a.slice(0,h.length-1)),(j||i)&&(g=d[h],D(b,angular.lowercase(g))>-1))return g}}var k=a.split("_");return k.length>1&&D(b,angular.lowercase(k[0]))>-1?k[0]:a},G=function(a,b){if(!a&&!b)return r;if(a&&!b){if(angular.isString(a))return r[a]}else angular.isObject(r[a])||(r[a]={}),angular.extend(r[a],H(b));return this};this.translations=G,this.cloakClassName=function(a){return a?(w=a,this):w};var H=function(a,b,c,d){var e,f,g,h;b||(b=[]),c||(c={});for(e in a)Object.prototype.hasOwnProperty.call(a,e)&&(h=a[e],angular.isObject(h)?H(h,b.concat(e),c,e):(f=b.length?""+b.join(y)+y+e:e,b.length&&e===d&&(g=""+b.join(y),c[g]="@:"+f),c[f]=h));return c};this.addInterpolation=function(a){return u.push(a),this},this.useMessageFormatInterpolation=function(){return this.useInterpolation("$translateMessageFormatInterpolation")},this.useInterpolation=function(a){return l=a,this},this.useSanitizeValueStrategy=function(a){return v=a,this},this.preferredLanguage=function(a){return I(a),this};var I=function(a){return a&&(c=a),c};this.translationNotFoundIndicator=function(a){return this.translationNotFoundIndicatorLeft(a),this.translationNotFoundIndicatorRight(a),this},this.translationNotFoundIndicatorLeft=function(a){return a?(o=a,this):o},this.translationNotFoundIndicatorRight=function(a){return a?(p=a,this):p},this.fallbackLanguage=function(a){return J(a),this};var J=function(a){return a?(angular.isString(a)?(f=!0,e=[a]):angular.isArray(a)&&(f=!1,e=a),angular.isString(c)&&D(e,c)<0&&e.push(c),this):f?e[0]:e};this.use=function(a){if(a){if(!r[a]&&!m)throw new Error("$translateProvider couldn't find translationTable for langKey: '"+a+"'");return g=a,this}return g};var K=function(a){return a?void(t=a):j?j+t:t};this.storageKey=K,this.useUrlLoader=function(a,b){return this.useLoader("$translateUrlLoader",angular.extend({url:a},b))},this.useStaticFilesLoader=function(a){return this.useLoader("$translateStaticFilesLoader",a)},this.useLoader=function(a,b){return m=a,n=b||{},this},this.useLocalStorage=function(){return this.useStorage("$translateLocalStorage")},this.useCookieStorage=function(){return this.useStorage("$translateCookieStorage")},this.useStorage=function(a){return i=a,this},this.storagePrefix=function(a){return a?(j=a,this):a},this.useMissingTranslationHandlerLog=function(){return this.useMissingTranslationHandler("$translateMissingTranslationHandlerLog")},this.useMissingTranslationHandler=function(a){return k=a,this},this.usePostCompiling=function(a){return x=!!a,this},this.determinePreferredLanguage=function(a){var b=a&&angular.isFunction(a)?a():C();return c=s.length?F(b):b,this},this.registerAvailableLanguageKeys=function(a,b){return a?(s=a,b&&(d=b),this):s},this.useLoaderCache=function(a){return a===!1?q=void 0:a===!0?q=!0:"undefined"==typeof a?q="$translationCache":a&&(q=a),this},this.directivePriority=function(a){return void 0===a?z:(z=a,this)},this.$get=["$log","$injector","$rootScope","$q",function(a,b,d,j){var s,y,B,C=b.get(l||"$translateDefaultInterpolation"),L=!1,M={},N={},O=function(a,b,d,f){if(angular.isArray(a)){var h=function(a){for(var c={},e=[],g=function(a){var e=j.defer(),g=function(b){c[a]=b,e.resolve([a,b])};return O(a,b,d,f).then(g,g),e.promise},h=0,i=a.length;i>h;h++)e.push(g(a[h]));return j.all(e).then(function(){return c})};return h(a)}var k=j.defer();a&&(a=E.apply(a));var l=function(){var a=c?N[c]:N[g];if(y=0,i&&!a){var b=s.get(t);if(a=N[b],e&&e.length){var d=D(e,b);y=0===d?1:0,D(e,c)<0&&e.push(c)}}return a}();return l?l.then(function(){$(a,b,d,f).then(k.resolve,k.reject)},k.reject):$(a,b,d,f).then(k.resolve,k.reject),k.promise},P=function(a){return o&&(a=[o,a].join(" ")),p&&(a=[a,p].join(" ")),a},Q=function(a){g=a,d.$emit("$translateChangeSuccess",{language:a}),i&&s.put(O.storageKey(),g),C.setLocale(g),angular.forEach(M,function(a,b){M[b].setLocale(g)}),d.$emit("$translateChangeEnd",{language:a})},R=function(a){if(!a)throw"No language key specified for loading.";var c=j.defer();d.$emit("$translateLoadingStart",{language:a}),L=!0;var e=q;"string"==typeof e&&(e=b.get(e));var f=angular.extend({},n,{key:a,$http:angular.extend({},{cache:e},n.$http)});return b.get(m)(f).then(function(b){var e={};d.$emit("$translateLoadingSuccess",{language:a}),angular.isArray(b)?angular.forEach(b,function(a){angular.extend(e,H(a))}):angular.extend(e,H(b)),L=!1,c.resolve({key:a,table:e}),d.$emit("$translateLoadingEnd",{language:a})},function(a){d.$emit("$translateLoadingError",{language:a}),c.reject(a),d.$emit("$translateLoadingEnd",{language:a})}),c.promise};if(i&&(s=b.get(i),!s.get||!s.put))throw new Error("Couldn't use storage '"+i+"', missing get() or put() method!");angular.isFunction(C.useSanitizeValueStrategy)&&C.useSanitizeValueStrategy(v),u.length&&angular.forEach(u,function(a){var d=b.get(a);d.setLocale(c||g),angular.isFunction(d.useSanitizeValueStrategy)&&d.useSanitizeValueStrategy(v),M[d.getInterpolationIdentifier()]=d});var S=function(a){var b=j.defer();return Object.prototype.hasOwnProperty.call(r,a)?b.resolve(r[a]):N[a]?N[a].then(function(a){G(a.key,a.table),b.resolve(a.table)},b.reject):b.reject(),b.promise},T=function(a,b,c,d){var e=j.defer();return S(a).then(function(f){if(Object.prototype.hasOwnProperty.call(f,b)){d.setLocale(a);var h=f[b];"@:"===h.substr(0,2)?T(a,h.substr(2),c,d).then(e.resolve,e.reject):e.resolve(d.interpolate(f[b],c)),d.setLocale(g)}else e.reject()},e.reject),e.promise},U=function(a,b,c,d){var e,f=r[a];if(f&&Object.prototype.hasOwnProperty.call(f,b)){if(d.setLocale(a),e=d.interpolate(f[b],c),"@:"===e.substr(0,2))return U(a,e.substr(2),c,d);d.setLocale(g)}return e},V=function(a){if(k){var c=b.get(k)(a,g);return void 0!==c?c:a}return a},W=function(a,b,c,d,f){var g=j.defer();if(a<e.length){var h=e[a];T(h,b,c,d).then(g.resolve,function(){W(a+1,b,c,d,f).then(g.resolve)})}else g.resolve(f?f:V(b));return g.promise},X=function(a,b,c,d){var f;if(a<e.length){var g=e[a];f=U(g,b,c,d),f||(f=X(a+1,b,c,d))}return f},Y=function(a,b,c,d){return W(B>0?B:y,a,b,c,d)},Z=function(a,b,c){return X(B>0?B:y,a,b,c)},$=function(a,b,c,d){var f=j.defer(),h=g?r[g]:r,i=c?M[c]:C;if(h&&Object.prototype.hasOwnProperty.call(h,a)){var l=h[a];"@:"===l.substr(0,2)?O(l.substr(2),b,c,d).then(f.resolve,f.reject):f.resolve(i.interpolate(l,b))}else{var m;k&&!L&&(m=V(a)),g&&e&&e.length?Y(a,b,i,d).then(function(a){f.resolve(a)},function(a){f.reject(P(a))}):k&&!L&&m?f.resolve(d?d:m):d?f.resolve(d):f.reject(P(a))}return f.promise},_=function(a,b,c){var d,f=g?r[g]:r,h=c?M[c]:C;if(f&&Object.prototype.hasOwnProperty.call(f,a)){var i=f[a];d="@:"===i.substr(0,2)?_(i.substr(2),b,c):h.interpolate(i,b)}else{var j;k&&!L&&(j=V(a)),g&&e&&e.length?(y=0,d=Z(a,b,h)):d=k&&!L&&j?j:P(a)}return d};if(O.preferredLanguage=function(a){return a&&I(a),c},O.cloakClassName=function(){return w},O.fallbackLanguage=function(a){if(void 0!==a&&null!==a){if(J(a),m&&e&&e.length)for(var b=0,c=e.length;c>b;b++)N[e[b]]||(N[e[b]]=R(e[b]));O.use(O.use())}return f?e[0]:e},O.useFallbackLanguage=function(a){if(void 0!==a&&null!==a)if(a){var b=D(e,a);b>-1&&(B=b)}else B=0},O.proposedLanguage=function(){return h},O.storage=function(){return s},O.use=function(a){if(!a)return g;var b=j.defer();d.$emit("$translateChangeStart",{language:a});var c=F(a);return c&&(a=c),r[a]||!m||N[a]?(b.resolve(a),Q(a)):(h=a,N[a]=R(a).then(function(c){return G(c.key,c.table),b.resolve(c.key),Q(c.key),h===a&&(h=void 0),c},function(a){h===a&&(h=void 0),d.$emit("$translateChangeError",{language:a}),b.reject(a),d.$emit("$translateChangeEnd",{language:a})})),b.promise},O.storageKey=function(){return K()},O.isPostCompilingEnabled=function(){return x},O.refresh=function(a){function b(){f.resolve(),d.$emit("$translateRefreshEnd",{language:a})}function c(){f.reject(),d.$emit("$translateRefreshEnd",{language:a})}if(!m)throw new Error("Couldn't refresh translation table, no loader registered!");var f=j.defer();if(d.$emit("$translateRefreshStart",{language:a}),a)r[a]?R(a).then(function(c){G(c.key,c.table),a===g&&Q(g),b()},c):c();else{var h=[],i={};if(e&&e.length)for(var k=0,l=e.length;l>k;k++)h.push(R(e[k])),i[e[k]]=!0;g&&!i[g]&&h.push(R(g)),j.all(h).then(function(a){angular.forEach(a,function(a){r[a.key]&&delete r[a.key],G(a.key,a.table)}),g&&Q(g),b()})}return f.promise},O.instant=function(a,b,d){if(null===a||angular.isUndefined(a))return a;if(angular.isArray(a)){for(var f={},h=0,i=a.length;i>h;h++)f[a[h]]=O.instant(a[h],b,d);return f}if(angular.isString(a)&&a.length<1)return a;a&&(a=E.apply(a));var j,l=[];c&&l.push(c),g&&l.push(g),e&&e.length&&(l=l.concat(e));for(var m=0,n=l.length;n>m;m++){var q=l[m];if(r[q]&&("undefined"!=typeof r[q][a]?j=_(a,b,d):(o||p)&&(j=P(a))),"undefined"!=typeof j)break}return j||""===j||(j=C.interpolate(a,b),k&&!L&&(j=V(a))),j},O.versionInfo=function(){return A},O.loaderCache=function(){return q},O.directivePriority=function(){return z},m&&(angular.equals(r,{})&&O.use(O.use()),e&&e.length))for(var ab=function(a){return G(a.key,a.table),d.$emit("$translateChangeEnd",{language:a.key}),a},bb=0,cb=e.length;cb>bb;bb++)N[e[bb]]=R(e[bb]).then(ab);return O}]}]),angular.module("pascalprecht.translate").factory("$translateDefaultInterpolation",["$interpolate",function(a){var b,c={},d="default",e=null,f={escaped:function(a){var b={};for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=angular.isNumber(a[c])?a[c]:angular.element("<div></div>").text(a[c]).html());return b}},g=function(a){var b;return b=angular.isFunction(f[e])?f[e](a):a};return c.setLocale=function(a){b=a},c.getInterpolationIdentifier=function(){return d},c.useSanitizeValueStrategy=function(a){return e=a,this},c.interpolate=function(b,c){return e&&(c=g(c)),a(b)(c||{})},c}]),angular.module("pascalprecht.translate").constant("$STORAGE_KEY","NG_TRANSLATE_LANG_KEY"),angular.module("pascalprecht.translate").directive("translate",["$translate","$q","$interpolate","$compile","$parse","$rootScope",function(a,b,c,d,e,f){var g=function(){return this.replace(/^\s+|\s+$/g,"")};return{restrict:"AE",scope:!0,priority:a.directivePriority(),compile:function(b,h){var i=h.translateValues?h.translateValues:void 0,j=h.translateInterpolation?h.translateInterpolation:void 0,k=b[0].outerHTML.match(/translate-value-+/i),l="^(.*)("+c.startSymbol()+".*"+c.endSymbol()+")(.*)",m="^(.*)"+c.startSymbol()+"(.*)"+c.endSymbol()+"(.*)";return function(b,n,o){b.interpolateParams={},b.preText="",b.postText="";var p={},q=function(a){if(angular.isFunction(q._unwatchOld)&&(q._unwatchOld(),q._unwatchOld=void 0),angular.equals(a,"")||!angular.isDefined(a)){var d=g.apply(n.text()).match(l);if(angular.isArray(d)){b.preText=d[1],b.postText=d[3],p.translate=c(d[2])(b.$parent);var e=n.text().match(m);angular.isArray(e)&&e[2]&&e[2].length&&(q._unwatchOld=b.$watch(e[2],function(a){p.translate=a,w()}))}else p.translate=n.text().replace(/^\s+|\s+$/g,"")}else p.translate=a;w()},r=function(a){o.$observe(a,function(b){p[a]=b,w()})},s=!0;o.$observe("translate",function(a){"undefined"==typeof a?q(""):""===a&&s||(p.translate=a,w()),s=!1});for(var t in o)o.hasOwnProperty(t)&&"translateAttr"===t.substr(0,13)&&r(t);if(o.$observe("translateDefault",function(a){b.defaultText=a}),i&&o.$observe("translateValues",function(a){a&&b.$parent.$watch(function(){angular.extend(b.interpolateParams,e(a)(b.$parent))})}),k){var u=function(a){o.$observe(a,function(c){var d=angular.lowercase(a.substr(14,1))+a.substr(15);b.interpolateParams[d]=c})};for(var v in o)Object.prototype.hasOwnProperty.call(o,v)&&"translateValue"===v.substr(0,14)&&"translateValues"!==v&&u(v)}var w=function(){for(var a in p)p.hasOwnProperty(a)&&x(a,p[a],b,b.interpolateParams,b.defaultText)},x=function(b,c,d,e,f){c?a(c,e,j,f).then(function(a){y(a,d,!0,b)},function(a){y(a,d,!1,b)}):y(c,d,!1,b)},y=function(b,c,e,f){if("translate"===f){e||"undefined"==typeof c.defaultText||(b=c.defaultText),n.html(c.preText+b+c.postText);var g=a.isPostCompilingEnabled(),i="undefined"!=typeof h.translateCompile,j=i&&"false"!==h.translateCompile;(g&&!i||j)&&d(n.contents())(c)}else{e||"undefined"==typeof c.defaultText||(b=c.defaultText);var k=o.$attr[f].substr(15);n.attr(k,b)}};b.$watch("interpolateParams",w,!0);var z=f.$on("$translateChangeSuccess",w);n.text().length&&q(""),w(),b.$on("$destroy",z)}}}}]),angular.module("pascalprecht.translate").directive("translateCloak",["$rootScope","$translate",function(a,b){return{compile:function(c){var d=function(){c.addClass(b.cloakClassName())},e=function(){c.removeClass(b.cloakClassName())},f=a.$on("$translateChangeEnd",function(){e(),f(),f=null});return d(),function(a,c,f){f.translateCloak&&f.translateCloak.length&&f.$observe("translateCloak",function(a){b(a).then(e,d)})}}}}]),angular.module("pascalprecht.translate").filter("translate",["$parse","$translate",function(a,b){var c=function(c,d,e){return angular.isObject(d)||(d=a(d)(this)),b.instant(c,d,e)};return c.$stateful=!0,c}]);
/*!
 * angular-translate - v2.6.0 - 2015-02-08
 * http://github.com/angular-translate/angular-translate
 * Copyright (c) 2015 ; Licensed MIT
 */
angular.module("pascalprecht.translate").factory("$translateStaticFilesLoader",["$q","$http",function(a,b){return function(c){if(!(c&&(angular.isArray(c.files)||angular.isString(c.prefix)&&angular.isString(c.suffix))))throw new Error("Couldn't load static files, no files and prefix or suffix specified!");c.files||(c.files=[{prefix:c.prefix,suffix:c.suffix}]);for(var d=function(d){if(!d||!angular.isString(d.prefix)||!angular.isString(d.suffix))throw new Error("Couldn't load static file, no prefix or suffix specified!");var e=a.defer();return b(angular.extend({url:[c.prefix,c.key,c.suffix].join(""),method:"GET",params:""},c.$http)).success(function(a){e.resolve(a)}).error(function(){e.reject(c.key)}),e.promise},e=a.defer(),f=[],g=c.files.length,h=0;g>h;h++)f.push(d({prefix:c.files[h].prefix,key:c.key,suffix:c.files[h].suffix}));return a.all(f).then(function(a){for(var b=a.length,c={},d=0;b>d;d++)for(var f in a[d])c[f]=a[d][f];e.resolve(c)},function(a){e.reject(a)}),e.promise}}]);
/**
 * Copyright (c) 2011-2014 Felix Gnass
 * Licensed under the MIT license
 */
(function(root, factory) {

  /* CommonJS */
  if (typeof exports == 'object')  module.exports = factory()

  /* AMD module */
  else if (typeof define == 'function' && define.amd) define(factory)

  /* Browser global */
  else root.Spinner = factory()
}
(this, function() {
  "use strict";

  var prefixes = ['webkit', 'Moz', 'ms', 'O'] /* Vendor prefixes */
    , animations = {} /* Animation rules keyed by their name */
    , useCssAnimations /* Whether to use CSS animations or setTimeout */

  /**
   * Utility function to create elements. If no tag name is given,
   * a DIV is created. Optionally properties can be passed.
   */
  function createEl(tag, prop) {
    var el = document.createElement(tag || 'div')
      , n

    for(n in prop) el[n] = prop[n]
    return el
  }

  /**
   * Appends children and returns the parent.
   */
  function ins(parent /* child1, child2, ...*/) {
    for (var i=1, n=arguments.length; i<n; i++)
      parent.appendChild(arguments[i])

    return parent
  }

  /**
   * Insert a new stylesheet to hold the @keyframe or VML rules.
   */
  var sheet = (function() {
    var el = createEl('style', {type : 'text/css'})
    ins(document.getElementsByTagName('head')[0], el)
    return el.sheet || el.styleSheet
  }())

  /**
   * Creates an opacity keyframe animation rule and returns its name.
   * Since most mobile Webkits have timing issues with animation-delay,
   * we create separate rules for each line/segment.
   */
  function addAnimation(alpha, trail, i, lines) {
    var name = ['opacity', trail, ~~(alpha*100), i, lines].join('-')
      , start = 0.01 + i/lines * 100
      , z = Math.max(1 - (1-alpha) / trail * (100-start), alpha)
      , prefix = useCssAnimations.substring(0, useCssAnimations.indexOf('Animation')).toLowerCase()
      , pre = prefix && '-' + prefix + '-' || ''

    if (!animations[name]) {
      sheet.insertRule(
        '@' + pre + 'keyframes ' + name + '{' +
        '0%{opacity:' + z + '}' +
        start + '%{opacity:' + alpha + '}' +
        (start+0.01) + '%{opacity:1}' +
        (start+trail) % 100 + '%{opacity:' + alpha + '}' +
        '100%{opacity:' + z + '}' +
        '}', sheet.cssRules.length)

      animations[name] = 1
    }

    return name
  }

  /**
   * Tries various vendor prefixes and returns the first supported property.
   */
  function vendor(el, prop) {
    var s = el.style
      , pp
      , i

    prop = prop.charAt(0).toUpperCase() + prop.slice(1)
    for(i=0; i<prefixes.length; i++) {
      pp = prefixes[i]+prop
      if(s[pp] !== undefined) return pp
    }
    if(s[prop] !== undefined) return prop
  }

  /**
   * Sets multiple style properties at once.
   */
  function css(el, prop) {
    for (var n in prop)
      el.style[vendor(el, n)||n] = prop[n]

    return el
  }

  /**
   * Fills in default values.
   */
  function merge(obj) {
    for (var i=1; i < arguments.length; i++) {
      var def = arguments[i]
      for (var n in def)
        if (obj[n] === undefined) obj[n] = def[n]
    }
    return obj
  }

  /**
   * Returns the line color from the given string or array.
   */
  function getColor(color, idx) {
    return typeof color == 'string' ? color : color[idx % color.length]
  }

  // Built-in defaults

  var defaults = {
    lines: 12,            // The number of lines to draw
    length: 7,            // The length of each line
    width: 5,             // The line thickness
    radius: 10,           // The radius of the inner circle
    rotate: 0,            // Rotation offset
    corners: 1,           // Roundness (0..1)
    color: '#000',        // #rgb or #rrggbb
    direction: 1,         // 1: clockwise, -1: counterclockwise
    speed: 1,             // Rounds per second
    trail: 100,           // Afterglow percentage
    opacity: 1/4,         // Opacity of the lines
    fps: 20,              // Frames per second when using setTimeout()
    zIndex: 2e9,          // Use a high z-index by default
    className: 'spinner', // CSS class to assign to the element
    top: '50%',           // center vertically
    left: '50%',          // center horizontally
    position: 'absolute'  // element position
  }

  /** The constructor */
  function Spinner(o) {
    this.opts = merge(o || {}, Spinner.defaults, defaults)
  }

  // Global defaults that override the built-ins:
  Spinner.defaults = {}

  merge(Spinner.prototype, {

    /**
     * Adds the spinner to the given target element. If this instance is already
     * spinning, it is automatically removed from its previous target b calling
     * stop() internally.
     */
    spin: function(target) {
      this.stop()

      var self = this
        , o = self.opts
        , el = self.el = css(createEl(0, {className: o.className}), {position: o.position, width: 0, zIndex: o.zIndex})

      css(el, {
        left: o.left,
        top: o.top
      })
        
      if (target) {
        target.insertBefore(el, target.firstChild||null)
      }

      el.setAttribute('role', 'progressbar')
      self.lines(el, self.opts)

      if (!useCssAnimations) {
        // No CSS animation support, use setTimeout() instead
        var i = 0
          , start = (o.lines - 1) * (1 - o.direction) / 2
          , alpha
          , fps = o.fps
          , f = fps/o.speed
          , ostep = (1-o.opacity) / (f*o.trail / 100)
          , astep = f/o.lines

        ;(function anim() {
          i++;
          for (var j = 0; j < o.lines; j++) {
            alpha = Math.max(1 - (i + (o.lines - j) * astep) % f * ostep, o.opacity)

            self.opacity(el, j * o.direction + start, alpha, o)
          }
          self.timeout = self.el && setTimeout(anim, ~~(1000/fps))
        })()
      }
      return self
    },

    /**
     * Stops and removes the Spinner.
     */
    stop: function() {
      var el = this.el
      if (el) {
        clearTimeout(this.timeout)
        if (el.parentNode) el.parentNode.removeChild(el)
        this.el = undefined
      }
      return this
    },

    /**
     * Internal method that draws the individual lines. Will be overwritten
     * in VML fallback mode below.
     */
    lines: function(el, o) {
      var i = 0
        , start = (o.lines - 1) * (1 - o.direction) / 2
        , seg

      function fill(color, shadow) {
        return css(createEl(), {
          position: 'absolute',
          width: (o.length+o.width) + 'px',
          height: o.width + 'px',
          background: color,
          boxShadow: shadow,
          transformOrigin: 'left',
          transform: 'rotate(' + ~~(360/o.lines*i+o.rotate) + 'deg) translate(' + o.radius+'px' +',0)',
          borderRadius: (o.corners * o.width>>1) + 'px'
        })
      }

      for (; i < o.lines; i++) {
        seg = css(createEl(), {
          position: 'absolute',
          top: 1+~(o.width/2) + 'px',
          transform: o.hwaccel ? 'translate3d(0,0,0)' : '',
          opacity: o.opacity,
          animation: useCssAnimations && addAnimation(o.opacity, o.trail, start + i * o.direction, o.lines) + ' ' + 1/o.speed + 's linear infinite'
        })

        if (o.shadow) ins(seg, css(fill('#000', '0 0 4px ' + '#000'), {top: 2+'px'}))
        ins(el, ins(seg, fill(getColor(o.color, i), '0 0 1px rgba(0,0,0,.1)')))
      }
      return el
    },

    /**
     * Internal method that adjusts the opacity of a single line.
     * Will be overwritten in VML fallback mode below.
     */
    opacity: function(el, i, val) {
      if (i < el.childNodes.length) el.childNodes[i].style.opacity = val
    }

  })


  function initVML() {

    /* Utility function to create a VML tag */
    function vml(tag, attr) {
      return createEl('<' + tag + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', attr)
    }

    // No CSS transforms but VML support, add a CSS rule for VML elements:
    sheet.addRule('.spin-vml', 'behavior:url(#default#VML)')

    Spinner.prototype.lines = function(el, o) {
      var r = o.length+o.width
        , s = 2*r

      function grp() {
        return css(
          vml('group', {
            coordsize: s + ' ' + s,
            coordorigin: -r + ' ' + -r
          }),
          { width: s, height: s }
        )
      }

      var margin = -(o.width+o.length)*2 + 'px'
        , g = css(grp(), {position: 'absolute', top: margin, left: margin})
        , i

      function seg(i, dx, filter) {
        ins(g,
          ins(css(grp(), {rotation: 360 / o.lines * i + 'deg', left: ~~dx}),
            ins(css(vml('roundrect', {arcsize: o.corners}), {
                width: r,
                height: o.width,
                left: o.radius,
                top: -o.width>>1,
                filter: filter
              }),
              vml('fill', {color: getColor(o.color, i), opacity: o.opacity}),
              vml('stroke', {opacity: 0}) // transparent stroke to fix color bleeding upon opacity change
            )
          )
        )
      }

      if (o.shadow)
        for (i = 1; i <= o.lines; i++)
          seg(i, -2, 'progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)')

      for (i = 1; i <= o.lines; i++) seg(i)
      return ins(el, g)
    }

    Spinner.prototype.opacity = function(el, i, val, o) {
      var c = el.firstChild
      o = o.shadow && o.lines || 0
      if (c && i+o < c.childNodes.length) {
        c = c.childNodes[i+o]; c = c && c.firstChild; c = c && c.firstChild
        if (c) c.opacity = val
      }
    }
  }

  var probe = css(createEl('group'), {behavior: 'url(#default#VML)'})

  if (!vendor(probe, 'transform') && probe.adj) initVML()
  else useCssAnimations = vendor(probe, 'animation')

  return Spinner

}));

!function(a){"use strict";function b(a,b){return a.module("angularSpinner",[]).provider("usSpinnerConfig",function(){var a={};return{setDefaults:function(b){a=b||a},$get:function(){return{config:a}}}}).factory("usSpinnerService",["$rootScope",function(a){var b={};return b.spin=function(b){a.$broadcast("us-spinner:spin",b)},b.stop=function(b){a.$broadcast("us-spinner:stop",b)},b}]).directive("usSpinner",["$window","usSpinnerConfig",function(c,d){return{scope:!0,link:function(e,f,g){function h(){e.spinner&&e.spinner.stop()}var i=b||c.Spinner;e.spinner=null,e.key=a.isDefined(g.spinnerKey)?g.spinnerKey:!1,e.startActive=a.isDefined(g.spinnerStartActive)?e.$eval(g.spinnerStartActive):e.key?!1:!0,e.spin=function(){e.spinner&&e.spinner.spin(f[0])},e.stop=function(){e.startActive=!1,h()},e.$watch(g.usSpinner,function(a){h(),a=a||{};for(var b in d.config)void 0===a[b]&&(a[b]=d.config[b]);e.spinner=new i(a),(!e.key||e.startActive)&&e.spinner.spin(f[0])},!0),e.$on("us-spinner:spin",function(a,b){b===e.key&&e.spin()}),e.$on("us-spinner:stop",function(a,b){b===e.key&&e.stop()}),e.$on("$destroy",function(){e.stop(),e.spinner=null})}}}])}"function"==typeof define&&define.amd?define(["angular","spin"],b):b(a.angular)}(window);
//# sourceMappingURL=angular-spinner.min.js.map
/**
 * Angularjs module 'lfCookies' exposing service with 2 methods: setCookie and getCookie
 *
 * Name: lf-cookies.js
 * Created by lfortes on 11/14/2014.
 */

(function () {
    'use strict';

    angular.module('lfCookies', []).factory('LFCookieService', [function() {

        /**
         * Sets a browser cookie
         * @param name
         * @param value
         * @param expirationDays
         */
        var setCookie = function (name, value, expirationDays) {
            var d = new Date();
            d.setTime(d.getTime() + (expirationDays*24*60*60*1000));
            var expires = 'expires='+d.toUTCString();
            document.cookie = name + "=" + value + "; " + expires;
        };

        /**
         * Retrieves a browser cookie
         * @param name
         * @returns {string}
         */
        var getCookie = function (name) {
            var cookieName = name + "=";
            var ca = document.cookie.split(';');
            for(var i=0; i<ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0)===' ') { c = c.substring(1); }
                if (c.indexOf(cookieName) !== -1) {
                    return c.substring(cookieName.length,c.length);
                }
            }
            return '';
        };

        return {
            /**
             *
              * @param name
             * @param value
             * @param expirationDays
             */
            setCookie: function(name, value, expirationDays) { setCookie(name, value, expirationDays); },

            /**
             * Retrieves a browser cookie
             * @param name
             * @returns {string}
             */
            getCookie: function(name) { return getCookie(name); }
        };
    }]);

})();
/**
 * @ngdoc service
 * @name lfFirebaseAuth.lfFirebaseAuthService
 * @description
 * authentication for the Firebase password authentication service.
 * Calling module must have defined a firebase URL, named 'FIREBASE_URL'
 *
 * @requires FIREBASE_URL a string constant with the firebase url.
 *
 * @filename: user-service.js
 * @author lfortes on 11/27/2014.
 *
 * */


(function () {
    'use strict';

    angular.module('lfFirebaseAuth', []).factory('lfFirebaseAuthService', ['FIREBASE_URL', '$rootScope', '$q', function(FIREBASE_URL, $rootScope, $q) {

        var authServiceError = {};
        var currentUser = {};
        var temporaryPassword = false;
        var BACKEND = new Firebase(FIREBASE_URL);

        var loginAfterCreateUser = function(user, login, callback) {
            BACKEND.authWithPassword(user, function(error, authData) {
                if (error === null) {
                    authServiceError = {};
                    var userData = user;
                    userData.id = authData.uid;
                    delete userData.password;
                    delete userData.repeatPassword;
                    delete userData.repeatEmail;
                    BACKEND.child('lfUsers').child(authData.uid).set(userData);
                    if (login) {
                        currentUser = userData;
                        $rootScope.$emit('USER_LOGGED_IN_EVENT');
                        window.localStorage.setItem('storeUser', angular.toJson(currentUser));
                    }
                    else {
                        BACKEND.unauth();
                        currentUser = {};
                    }
                    callback(true);
                }
                else {
                    authServiceError = error;
                    callback(false);
                }
            });
        };

        var getUserData = function(authData) {
            //TODO: get user from localStorage or backend
            var local = angular.fromJson(window.localStorage.getItem('storeUser'));
            if (local) {
                currentUser = local;
            }
            else {
                var sync = BACKEND.child('lfUsers').child(authData.uid);
                sync.on('value', function(snapshot) {
                    currentUser = snapshot.val();
                    $rootScope.$emit('USER_LOGGED_IN_EVENT');
                    window.localStorage.setItem('storeUser', angular.toJson(currentUser));
                });
            }
        };

        var processServerResponse = function(error) {
            if (error === null) {
                authServiceError = {};
                return true;
            }
            else {
                authServiceError = error;
                return false;
            }
        };

        return {
            /**
             * Adds a new user.  Returns promise with success and failure results.
             * Upon successful user creation, if login parameter is true, user is automatically signed in
             * and a 'USER_LOGGED_IN_EVENT' is emitted on $rootScope.
             * @param user {object} object with required 'mail' and 'password' fields. Other optional fields
             *        will be stored in the authentication server 'lfUsers' file. Fields 'repeatPassword' and 'repeatEmail, if present, are not stored.
             * @param login {boolean} true if should login after user is created, false if should not login
             */
            add: function(user, login) {
                return $q(function(resolve, reject) {
                    BACKEND.createUser(user, function(error) {
                        if (error === null) {
                            loginAfterCreateUser(user, login, function(userIn) {
                                if (userIn) { resolve('Success'); }
                                else { reject(authServiceError);}
                            });
                        } else {
                            authServiceError = error;
                            reject(error); 
                        }
                    });
                });

            },

            /**
             * Logs in an existing user.  Returns promise with success and failure results.
             * On successful login, it emits 'USER_LOGGED_IN_EVENT' on $rootScope
             * @param user {object} object with 'mail' and 'password' fields
             */
            login: function(user) {
                return $q(function(resolve, reject) {
                    BACKEND.authWithPassword(user, function(error, authData) {
                        if (error === null) {
                            // user authenticated with Firebase
                            getUserData(authData);
                            temporaryPassword = authData.password.isTemporaryPassword;
                            authServiceError = {};
                            resolve('logged in');
                        } else {
                            authServiceError = error;
                            reject(error);
                        }
                    });
                });
            },

            /**
             * Returns {boolean} true if user is logged in.
             * @returns {boolean}
             */
            isLoggedIn: function() {
                var authData = BACKEND.getAuth();
                if (authData) {
                    getUserData(authData);
                    return true;
                } else {
                    return false;
                }
            },

            /**
             * Logs out current user.
             */
            logout: function() {
                BACKEND.unauth();
                currentUser = {};
                localStorage.removeItem("storeUser");
            },

            /**
             * Returns an error object with 'message' and other properties, if error exists. Otherwise returns an empty object.
             * @returns {{}}
             */
            authServiceError: function() { return authServiceError; },

            /**
             * Returns logged in user.
             * @returns {{}}
             */
            user: function() { return currentUser; },

            /**
             * Resets user password. Returns promise with success and failure results.
             * @param user {object} object with 'email' property
             */
            resetPassword: function(user) {
                return $q(function(resolve, reject) {
                    BACKEND.resetPassword(user, function(error) {
                        var success = processServerResponse(error);
                        if (success) { resolve('Success'); }
                        else { reject(authServiceError); }
                    });
                });
            },

            /**
             * Returns true if current user password is temporary
             * @returns {boolean}
             */
            isTemporaryPassword: function() { return temporaryPassword; },

            /**
             * Changes user password. Returns promise with success and failure results.
             * @param user {object} object with 'email', 'oldPassword', and 'newPassword' properties.
             */
            changePassword: function(user) {
                return $q(function(resolve, reject) {
                    BACKEND.changePassword(user, function(error) {
                        var success = processServerResponse(error);
                        if (success) { resolve('Success'); }
                        else { reject(authServiceError); }
                    });
                });
            }

        };
    }]);

})();