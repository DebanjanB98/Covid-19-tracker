(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[14,22],{100:function(e,t,n){"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var r,i,o;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(i=r;0!==i--;)if(!e(t[i],n[i]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(o=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(i=r;0!==i--;)if(!Object.prototype.hasOwnProperty.call(n,o[i]))return!1;for(i=r;0!==i--;){var a=o[i];if(!e(t[a],n[a]))return!1}return!0}return t!==t&&n!==n}},106:function(e,t,n){var r=n(107),i=n(108),o=n(109),a=n(111);e.exports=function(e,t){return r(e)||i(e,t)||o(e,t)||a()},e.exports.default=e.exports,e.exports.__esModule=!0},107:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},108:function(e,t){e.exports=function(e,t){var n=e&&("undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,i,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(c){s=!0,i=c}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}},e.exports.default=e.exports,e.exports.__esModule=!0},109:function(e,t,n){var r=n(110);e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},110:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.default=e.exports,e.exports.__esModule=!0},111:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},114:function(e,t,n){"use strict";var r=n(113),i=n(136),o=n(2),a=(n(131),n(132),n(20));t.a=function(e){var t=e.children,n=e.message,s=e.hold,c=void 0!==s&&s,l=e.childProps,u=void 0===l?{}:l,d=Object(o.useCallback)((function(e){return e.stopPropagation()}),[]);return Object(a.jsx)(i.a,{className:"Tooltip",content:"string"===typeof n?Object(a.jsx)("p",{className:"message",dangerouslySetInnerHTML:{__html:n.split("\n").map((function(e){return"<div>".concat(e,"</div>")})).join("")}}):n,arrow:!1,animation:"shift-away",touch:!c||["hold",300],children:Object(a.jsx)("div",Object(r.a)(Object(r.a)({onClick:d},u),{},{children:t}))})}},121:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(106),i=n.n(r),o=n(55),a=n.n(o),s=n(2),c=n(96);function l(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];"string"===typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var u={};function d(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"string"===typeof t[0]&&u[t[0]]||("string"===typeof t[0]&&(u[t[0]]=new Date),l.apply(void 0,t))}function f(e,t,n){e.loadNamespaces(t,(function(){if(e.isInitialized)n();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),n()}))}}))}function j(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return d("i18n.languages were undefined or empty",t.languages),!0;var r=t.languages[0],i=!!t.options&&t.options.fallbackLng,o=t.languages[t.languages.length-1];if("cimode"===r.toLowerCase())return!0;var a=function(e,n){var r=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===r||2===r};return!(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!a(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(r,e)||(!t.services.backendConnector.backend||!(!a(r,e)||i&&!a(o,e))))}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.i18n,r=Object(s.useContext)(c.a)||{},o=r.i18n,a=r.defaultNS,l=n||o||Object(c.d)();if(l&&!l.reportNamespaces&&(l.reportNamespaces=new c.b),!l){d("You will need to pass in an i18next instance by using initReactI18next");var u=function(e){return Array.isArray(e)?e[e.length-1]:e},b=[u,{},!1];return b.t=u,b.i18n={},b.ready=!1,b}l.options.react&&void 0!==l.options.react.wait&&d("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var p=h(h(h({},Object(c.c)()),l.options.react),t),O=p.useSuspense,v=e||a||l.options&&l.options.defaultNS;v="string"===typeof v?[v]:v||["translation"],l.reportNamespaces.addUsedNamespaces&&l.reportNamespaces.addUsedNamespaces(v);var g=(l.isInitialized||l.initializedStoreOnce)&&v.every((function(e){return j(e,l,p)}));function m(){return l.getFixedT(null,"fallback"===p.nsMode?v:v[0])}var x=Object(s.useState)(m),y=i()(x,2),w=y[0],k=y[1],N=Object(s.useRef)(!0);Object(s.useEffect)((function(){var e=p.bindI18n,t=p.bindI18nStore;function n(){N.current&&k(m)}return N.current=!0,g||O||f(l,v,(function(){N.current&&k(m)})),e&&l&&l.on(e,n),t&&l&&l.store.on(t,n),function(){N.current=!1,e&&l&&e.split(" ").forEach((function(e){return l.off(e,n)})),t&&l&&t.split(" ").forEach((function(e){return l.store.off(e,n)}))}}),[l,v.join()]);var C=Object(s.useRef)(!0);Object(s.useEffect)((function(){N.current&&!C.current&&k(m),C.current=!1}),[l]);var S=[w,l,g];if(S.t=w,S.i18n=l,S.ready=g,g)return S;if(!g&&!O)return S;throw new Promise((function(e){f(l,v,(function(){e()}))}))}},141:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return s}));var r=n(104),i=n(20),o=function(){return Object(i.jsxs)("div",{className:"Icons",children:[Object(i.jsx)(r.n,{size:16}),Object(i.jsx)("span",{children:"7D"})]})},a=function(){return Object(i.jsxs)("div",{className:"Icons",children:[Object(i.jsx)(r.m,{size:16}),Object(i.jsx)("span",{children:"1L"})]})},s=function(){return Object(i.jsx)("div",{className:"Icons",children:Object(i.jsx)(r.l,{size:16})})}},183:function(e,t,n){"use strict";var r=n(2),i=n(102),o=i.a?window:null,a=function(e){return!!e.addEventListener},s=function(e){return!!e.on},c=function(e,t,n,c){void 0===n&&(n=o),Object(r.useEffect)((function(){if(t&&n)return a(n)?Object(i.d)(n,e,t,c):s(n)&&n.on(e,t,c),function(){a(n)?Object(i.c)(n,e,t,c):s(n)&&n.off(e,t,c)}}),[e,t,n,JSON.stringify(c)])},l=function(e,t,n,o){void 0===t&&(t=i.b),void 0===n&&(n={}),void 0===o&&(o=[e]);var a=n.event,s=void 0===a?"keydown":a,l=n.target,u=n.options,d=Object(r.useMemo)((function(){var n,r="function"===typeof(n=e)?n:"string"===typeof n?function(e){return e.key===n}:n?function(){return!0}:function(){return!1};return function(e){if(r(e))return t(e)}}),o);c(s,d,l,u)},u=function(e){var t=Object(r.useState)([!1,null]),n=t[0],i=t[1];return l(e,(function(e){return i([!0,e])}),{event:"keydown"},[n]),l(e,(function(e){return i([!1,e])}),{event:"keyup"},[n]),n},d=n(151);t.a=function(e,t,n,r){void 0===r&&(r=u);var i=r(e),o=i[0],a=i[1];Object(d.a)((function(){!o&&n?n(a):o&&t&&t(a)}),[o])}},186:function(e,t,n){"use strict";var r=n(113),i=n(54),o=n(114),a=n(10),s=n(25),c=n(104),l=n(101),u=n.n(l),d=n(100),f=n.n(d),j=n(117),b=n(2),h=n(121),p=n(102),O=function(e){(function(e){return"touches"in e})(e)&&e.touches.length<2&&e.preventDefault&&e.preventDefault()},v=function(e,t){var n=void 0===t?{}:t,r=n.isPreventDefault,i=void 0===r||r,o=n.delay,a=void 0===o?300:o,s=Object(b.useRef)(),c=Object(b.useRef)(),l=Object(b.useCallback)((function(t){i&&t.target&&(Object(p.d)(t.target,"touchend",O,{passive:!1}),c.current=t.target),s.current=setTimeout((function(){return e(t)}),a)}),[e,a,i]),u=Object(b.useCallback)((function(){s.current&&clearTimeout(s.current),i&&c.current&&Object(p.c)(c.current,"touchend",O)}),[i]);return{onMouseDown:function(e){return l(e)},onTouchStart:function(e){return l(e)},onMouseUp:u,onMouseLeave:u,onTouchEnd:u}},g=n(20);function m(e){var t,n,l=e.handleSort,d=e.sortData,f=e.setSortData,p=e.statistic,O=Object(h.a)().t,m=Object(b.useRef)(!1),x=v((function(){d.sortColumn===p&&(m.current=!0,f(Object(j.a)(d,(function(e){e.delta=!d.delta}))))}),{isPreventDefault:!1}),y=Object(b.useCallback)((function(e){m.current?m.current=!1:l(e)}),[l]),w=a.x[p];return Object(g.jsxs)("div",Object(r.a)(Object(r.a)({className:u()("cell","heading"),onClick:y.bind(this,p)},x),{},{children:[d.sortColumn===p&&Object(g.jsx)("div",{className:u()("sort-icon",Object(i.a)({},"is-".concat(p),d.delta)),children:d.isAscending?Object(g.jsx)(c.s,{size:12}):Object(g.jsx)(c.t,{size:12})}),(null===w||void 0===w||null===(t=w.tableConfig)||void 0===t?void 0:t.notes)&&Object(g.jsx)(o.a,{message:O(w.tableConfig.notes),children:Object(g.jsx)(c.k,{size:14})}),Object(g.jsx)("div",{children:O(Object(s.m)((null===w||void 0===w||null===(n=w.tableConfig)||void 0===n?void 0:n.displayName)||w.displayName))})]}))}var x=function(e,t){return!!f()(e.sortData,t.sortData)};t.a=Object(b.memo)(m,x)},210:function(e,t,n){var r=n(211),i=["getDistricts"];e.exports=function(){var e=new Worker(n.p+"ece08537062c28a2a7c1.worker.js",{name:"[hash].worker.js"});return r(e,i),e}},211:function(e,t){e.exports=function(e,t){var n=0,r={};e.addEventListener("message",(function(t){var n=t.data;if("RPC"===n.type)if(n.id){var i=r[n.id];i&&(delete r[n.id],n.error?i[1](Object.assign(Error(n.error.message),n.error)):i[0](n.result))}else{var o=document.createEvent("Event");o.initEvent(n.method,!1,!1),o.data=n.params,e.dispatchEvent(o)}})),t.forEach((function(t){e[t]=function(){var i=arguments;return new Promise((function(o,a){var s=++n;r[s]=[o,a],e.postMessage({type:"RPC",id:s,method:t,params:[].slice.call(i)})}))}}))}},212:function(e,t,n){"use strict";var r=n(2),i=n.n(r),o=n(24),a=n.n(o);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,o=e.size,a=void 0===o?24:o,l=c(e,["color","size"]);return i.a.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),i.a.createElement("polyline",{points:"11 17 6 12 11 7"}),i.a.createElement("polyline",{points:"18 17 13 12 18 7"}))}));l.propTypes={color:a.a.string,size:a.a.oneOfType([a.a.string,a.a.number])},l.displayName="ChevronsLeft",t.a=l},213:function(e,t,n){"use strict";var r=n(2),i=n.n(r),o=n(24),a=n.n(o);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,o=e.size,a=void 0===o?24:o,l=c(e,["color","size"]);return i.a.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),i.a.createElement("polyline",{points:"15 18 9 12 15 6"}))}));l.propTypes={color:a.a.string,size:a.a.oneOfType([a.a.string,a.a.number])},l.displayName="ChevronLeft",t.a=l},214:function(e,t,n){"use strict";var r=n(2),i=n.n(r),o=n(24),a=n.n(o);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,o=e.size,a=void 0===o?24:o,l=c(e,["color","size"]);return i.a.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),i.a.createElement("polyline",{points:"9 18 15 12 9 6"}))}));l.propTypes={color:a.a.string,size:a.a.oneOfType([a.a.string,a.a.number])},l.displayName="ChevronRight",t.a=l},215:function(e,t,n){"use strict";var r=n(2),i=n.n(r),o=n(24),a=n.n(o);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,o=e.size,a=void 0===o?24:o,l=c(e,["color","size"]);return i.a.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),i.a.createElement("polyline",{points:"13 17 18 12 13 7"}),i.a.createElement("polyline",{points:"6 17 11 12 6 7"}))}));l.propTypes={color:a.a.string,size:a.a.oneOfType([a.a.string,a.a.number])},l.displayName="ChevronsRight",t.a=l},287:function(e,t,n){"use strict";n.r(t);var r=n(51),i=n(186),o=n(162),a=n(141),s=n(10),c=n(104),l=n(101),u=n.n(l),d=n(2),f=n(20),j=function(){var e=Object(d.useState)(0),t=Object(r.a)(e,2),n=t[0],i=t[1];return Object(d.useEffect)((function(){var e=window.setTimeout((function(){i((function(e){return e===s.y.length-1?0:e+1})),window.clearTimeout(e)}),1e3)}),[n]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:u()("is-".concat(s.y[n])),children:Object(f.jsx)(c.t,{size:14})}),Object(f.jsx)("p",{children:"Sorted by Delta [Long press]"})]})},b=n(114),h=n(155),p=n(25),O=n(100),v=n.n(O),g=n(117),m=n(212),x=n(213),y=n(214),w=n(215),k=n(121),N=n(52),C=n(105),S=n(249),D=n(137),T=n(183),z=n(210),E=n.n(z),P=Object(d.lazy)((function(){return Object(p.k)((function(){return n.e(44).then(n.bind(null,284))}))}));function L(e){var t=this,n=e.data,l=(e.date,e.regionHighlighted),O=e.setRegionHighlighted,v=e.expandTable,z=e.setExpandTable,L=e.hideDistrictData,A=e.hideDistrictTestData,M=e.hideVaccinated,R=e.lastDataDate,I=e.noDistrictDataStates,_=Object(k.a)().t,H=Object(S.a)("sortData",{sortColumn:"confirmed",isAscending:!1,delta:!1}),U=Object(r.a)(H,2),B=U[0],W=U[1],J=Object(d.useState)(0),V=Object(r.a)(J,2),F=V[0],G=V[1],K=Object(d.useState)(!1),Y=Object(r.a)(K,2),$=Y[0],q=Y[1],Q=Object(D.a)(),X=Object(r.a)(Q,2),Z=X[0],ee=X[1].width,te=Object(d.useCallback)((function(e){B.sortColumn!==e?W(Object(g.a)(B,(function(t){"regionName"!==B.sortColumn&&"regionName"!==e||(t.isAscending=!B.isAscending),t.sortColumn=e}))):W(Object(g.a)(B,(function(e){e.isAscending=!B.isAscending})))}),[B,W]),ne=Object(C.useTrail)(5,{from:{transform:"translate3d(0, 10px, 0)",opacity:0},to:{transform:"translate3d(0, 0px, 0)",opacity:1},config:C.config.wobbly}),re=Object(d.useState)(),ie=Object(r.a)(re,2),oe=ie[0],ae=ie[1],se=Object(d.useState)("States"),ce=Object(r.a)(se,2),le=ce[0],ue=ce[1],de=Object(d.useState)(!1),fe=Object(r.a)(de,2),je=fe[0],be=fe[1],he=Object(d.useState)(!1),pe=Object(r.a)(he,2),Oe=pe[0],ve=pe[1],ge=Object(d.useCallback)((function(e,t,n){var r=s.x[t];return"total"==n&&(null===r||void 0===r?void 0:r.onlyDelta7)&&(n="delta7"),(null===r||void 0===r?void 0:r.showDelta)&&"total"===n&&$&&(n="delta7"),Object(p.h)(e,n,t,{expiredDate:R,normalizedByPopulationPer:je?"lakh":null})}),[je,R,$]),me=Object(d.useMemo)((function(){return je?Object.keys(oe||{}).filter((function(e){return Object(p.h)(oe[e],"total","population")>0})).reduce((function(e,t){return e[t]=oe[t],e}),{}):oe}),[je,oe]),xe=Math.ceil(Object.keys(me||{}).length/s.e),ye=Object(d.useCallback)((function(e,t){if("regionName"!==B.sortColumn){var r=s.x[B.sortColumn],i=B.delta&&(null===r||void 0===r?void 0:r.showDelta)?"delta":"total",o=ge((null===me||void 0===me?void 0:me[e])||n[e],B.sortColumn,i),a=ge((null===me||void 0===me?void 0:me[t])||n[t],B.sortColumn,i);return B.isAscending?o-a:a-o}var c,l,u=(null===me||void 0===me||null===(c=me[e])||void 0===c?void 0:c.districtName)||s.w[e],d=(null===me||void 0===me||null===(l=me[t])||void 0===l?void 0:l.districtName)||s.w[t];return B.isAscending?u.localeCompare(d):d.localeCompare(u)}),[me,ge,B.delta,B.isAscending,B.sortColumn,n]),we=Object(d.useCallback)((function(){ue((function(e){return"States"===e?"Districts":"States"}))}),[]);Object(d.useEffect)((function(){var e=E()();e.getDistricts(n),e.addEventListener("message",(function(t){"RPC"!==t.data.type&&(ae(t.data),e.terminate())}))}),[le,n]),Object(d.useEffect)((function(){G((function(e){return Math.max(0,Math.min(e,xe-1))}))}),[xe]);var ke=function(e){1===Math.abs(e)?G(Math.min(Math.max(0,F+e),xe-1)):e<0?G(0):e>0&&G(xe-1)},Ne=Object(C.useTransition)(Oe,{from:h.f,enter:h.e,leave:h.f}),Ce=(v?s.z:s.y).filter((function(e){var t,n;return("States"===le||"tested"!==(null===(t=s.x[e])||void 0===t?void 0:t.category)||!A)&&("vaccinated"!==(null===(n=s.x[e])||void 0===n?void 0:n.category)||!M)})),Se="Districts"===le&&!L;return Object(d.useEffect)((function(){Se||G(0)}),[Se]),Object(T.a)("?",(function(){ve(!Oe)})),Object(f.jsxs)("div",{className:"Table",children:[Object(f.jsxs)("div",{className:"table-top",children:[Object(f.jsxs)("div",{className:"table-top-left",children:[Object(f.jsx)(b.a,{message:"Toggle between states/districts",hold:!0,children:Object(f.jsx)(C.animated.div,{className:u()("toggle","option-toggle",{"is-highlighted":Se,disabled:L}),onClick:we,style:ne[0],children:Object(f.jsx)(a.b,{})})}),Object(f.jsx)(b.a,{message:"Per lakh people",hold:!0,children:Object(f.jsx)(C.animated.div,{className:u()("toggle","lakh-toggle",{"is-highlighted":je}),onClick:be.bind(this,!je),style:ne[1],children:Object(f.jsx)(a.c,{})})}),Object(f.jsx)(b.a,{message:"Last 7 day values",hold:!0,children:Object(f.jsx)(C.animated.div,{className:u()("toggle","delta-toggle",{"is-highlighted":$}),style:ne[2],onClick:q.bind(this,!$),children:Object(f.jsx)(a.a,{})})}),Object(f.jsx)(C.animated.div,{className:u()("toggle","info-toggle",{"is-highlighted":Oe}),onClick:ve.bind(this,!Oe),style:ne[3],children:Object(f.jsx)(c.o,{size:14})})]}),Object(f.jsx)(b.a,{message:"".concat(v?"Collapse":"Expand"," table"),hold:!0,children:Object(f.jsx)(C.animated.div,{className:u()("toggle","expand-table-toggle",{"is-highlighted":v}),style:ne[4],onClick:z.bind(this,!v),children:Object(f.jsx)(c.f,{size:16})})})]}),Ne((function(e,t){return t&&Object(f.jsxs)(C.animated.div,{className:"table-helper",style:e,children:[Object(f.jsxs)("div",{className:"helper-top",children:[Object(f.jsxs)("div",{className:"helper-left",children:[Object(f.jsxs)("div",{className:"info-item",children:[Object(f.jsx)("div",{children:Object(f.jsx)(c.l,{size:14})}),Object(f.jsx)("p",{children:_("Toggle between States/Districts")})]}),Object(f.jsxs)("div",{className:"info-item",children:[Object(f.jsx)("div",{children:Object(f.jsx)(c.m,{size:16})}),Object(f.jsx)("p",{children:_("Per Lakh People")})]}),Object(f.jsxs)("div",{className:"info-item",children:[Object(f.jsx)("div",{children:Object(f.jsx)(c.n,{size:16})}),Object(f.jsx)("p",{children:_("Last 7 day values")})]}),Object(f.jsxs)("div",{className:"info-item sort",children:[Object(f.jsx)("div",{children:Object(f.jsx)(c.t,{size:14})}),Object(f.jsx)("p",{children:_("Sorted by Descending")})]}),Object(f.jsxs)("div",{className:"info-item sort",children:[Object(f.jsx)("div",{children:Object(f.jsx)(c.s,{size:14})}),Object(f.jsx)("p",{children:_("Sorted by Ascending")})]}),Object(f.jsx)("div",{className:"info-item sort",children:Object(f.jsx)(j,{})}),Object(f.jsxs)("div",{className:"info-item notes",children:[Object(f.jsx)("div",{children:Object(f.jsx)(c.k,{size:15})}),Object(f.jsx)("p",{children:_("Notes")})]})]}),Object(f.jsxs)("div",{className:"helper-right",children:[Object(f.jsx)("div",{className:"info-item",children:Object(f.jsx)("p",{children:_("Units")})}),Object.entries({"1K":3,"1L":5,"1Cr":7}).map((function(e){var t=Object(r.a)(e,2),n=t[0],i=t[1];return Object(f.jsxs)("div",{className:"info-item abbr",children:[Object(f.jsx)("h5",{children:n}),Object(f.jsxs)("p",{children:["10",Object(f.jsx)("sup",{children:i})]})]},n)}))]})]}),Object(f.jsxs)("h5",{className:"text",children:[_("Compiled from State Govt. numbers"),","," ",Object(f.jsxs)(N.b,{to:"/about",children:[_("know more"),"!"]})]})]})})),Object(f.jsx)("div",{className:"table-container",ref:Z,children:Object(f.jsxs)("div",{className:"table fadeInUp",style:{gridTemplateColumns:"repeat(".concat(Ce.length+1,", auto)")},children:[Object(f.jsxs)("div",{className:"row heading",children:[Object(f.jsxs)("div",{className:"cell heading",onClick:te.bind(this,"regionName"),children:[Object(f.jsx)("div",{children:_(Se?"District":"State/UT")}),"regionName"===B.sortColumn&&Object(f.jsx)("div",{className:"sort-icon",children:B.isAscending?Object(f.jsx)(c.s,{size:12}):Object(f.jsx)(c.t,{size:12})})]}),Ce.map((function(e){return Object(f.jsx)(i.a,{statistic:e,sortData:B,setSortData:W,handleSort:te.bind(t,e)},e)}))]}),!Se&&Object.keys(n).filter((function(e){return"TT"!==e&&!(e===s.E&&je)})).sort((function(e,t){return ye(e,t)})).map((function(e){return Object(f.jsx)(P,{data:n[e],noDistrictData:I[e],stateCode:e,regionHighlighted:l,setRegionHighlighted:O,expandTable:v,tableStatistics:Ce,getTableStatistic:ge,tableWidth:ee},e)})),Se&&!me&&Object(f.jsx)(o.a,{}),Se&&me&&Object.keys(me).sort((function(e,t){return ye(e,t)})).slice(F*s.e,(F+1)*s.e).map((function(e){var t=I[me[e].stateCode];return Object(f.jsx)(P,{data:me[e],districtName:me[e].districtName,regionHighlighted:l,setRegionHighlighted:O,expandTable:v,tableStatistics:Ce,getTableStatistic:ge,noDistrictData:t},e)})),Object(f.jsx)(P,{data:n.TT,stateCode:"TT",regionHighlighted:l,setRegionHighlighted:O,expandTable:v,tableStatistics:Ce,getTableStatistic:ge},"TT")]})}),Se&&Object(f.jsxs)("div",{className:"paginate",children:[Object(f.jsx)("div",{className:u()("left",{disabled:0===F}),onClick:ke.bind(this,-2),children:Object(f.jsx)(m.a,{size:16})}),Object(f.jsx)("div",{className:u()("left",{disabled:0===F}),onClick:ke.bind(this,-1),children:Object(f.jsx)(x.a,{size:16})}),Object(f.jsx)("h5",{children:"".concat(F+1," / ").concat(xe)}),Object(f.jsx)("div",{className:u()("right",{disabled:F===xe-1}),onClick:ke.bind(this,1),children:Object(f.jsx)(y.a,{size:16})}),Object(f.jsx)("div",{className:u()("right",{disabled:F===xe-1}),onClick:ke.bind(this,2),children:Object(f.jsx)(w.a,{size:16})})]})]})}var A=function(e,t){var n,r,i,o;return!!v()(null===(n=e.regionHighlighted)||void 0===n?void 0:n.districtName,null===(r=t.regionHighlighted)||void 0===r?void 0:r.districtName)&&(!!v()(null===(i=e.regionHighlighted)||void 0===i?void 0:i.stateCode,null===(o=t.regionHighlighted)||void 0===o?void 0:o.stateCode)&&(!!v()(e.date,t.date)&&(!!v()(e.hideDistrictData,t.hideDistrictData)&&(!!v()(e.hideDistrictTestData,t.hideDistrictTestData)&&(!!v()(e.hideVaccinated,t.hideVaccinated)&&(!!v()(e.expandTable,t.expandTable)&&(!!v()(e.lastDataDate,t.lastDataDate)&&(!!v()(e.data.TT.total.confirmed,t.data.TT.total.confirmed)&&!!v()(e.noDistrictDataStates,t.noDistrictDataStates)))))))))};t.default=Object(d.memo)(L,A)}}]);
//# sourceMappingURL=14.fc3904e6.chunk.js.map