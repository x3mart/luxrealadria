(this.webpackJsonpacres=this.webpackJsonpacres||[]).push([[7],{154:function(e,t,r){"use strict";r.r(t);var n=r(19),o=r(0),a=r(1),c=r(90),i=r.n(c),u=r(94),l=r(5),s=function(e){var t=e.page;return Object(o.jsxs)("div",{className:"section bg-norepeat bg-bottom",style:{backgroundImage:"url(/assets/img/misc/bldg.png)",overflowX:"hidden"},children:[Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"section-404",children:Object(o.jsxs)("div",{className:"section-404-text mb-0",children:[Object(o.jsx)("h1",{className:"title",children:t.title}),Object(o.jsx)("p",{className:"subtitle",children:t.text}),Object(o.jsx)(l.b,{to:"/",className:"btn-custom",children:"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"})]})})}),Object(o.jsxs)("div",{className:"acr-clouds",children:[Object(o.jsx)("div",{className:"cloud-one",style:{backgroundImage:"url(/assets/img/misc/cloud1.png)"}}),Object(o.jsx)("div",{className:"cloud-two",style:{backgroundImage:"url(/assets/img/misc/cloud2.png)"}}),Object(o.jsx)("div",{className:"cloud-three",style:{backgroundImage:"url(/assets/img/misc/cloud3.png)"}}),Object(o.jsx)("div",{className:"cloud-four",style:{backgroundImage:"url(/assets/img/misc/cloud4.png)"}}),Object(o.jsx)("div",{className:"cloud-five",style:{backgroundImage:"url(/assets/img/misc/cloud5.png)"}})]})]})},p=r(16),f=r(96);t.default=Object(p.b)((function(e){return{error_page:e.pages.error_page}}),{load_error_page:f.b})((function(e){var t=e.load_error_page,r=e.error_page,c=Object(a.useState)({}),l=Object(n.a)(c,2),p=l[0],f=l[1],d=Object(a.useState)(""),b=Object(n.a)(d,2),y=b[0],h=b[1],m=Object(a.useState)(""),v=Object(n.a)(m,2),j=v[0],O=v[1];return Object(a.useEffect)((function(){t()}),[]),Object(a.useEffect)((function(){r&&(f(r),h(r.wallpaper),O(r.title))}),[r]),Object(o.jsxs)(a.Fragment,{children:[Object(o.jsxs)(i.a,{children:[Object(o.jsx)("title",{children:"LuxRealAdria | 404"}),Object(o.jsx)("meta",{name:"description",content:"#"})]}),p&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(u.a,{title:j,wallpaper:y}),Object(o.jsx)(s,{page:p})]})]})}))},89:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1)),o=i(r(18)),a=i(r(24)),c=r(92);function i(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b,y,h,m=function(e){function t(){return l(this,t),p(this,f(t).apply(this,arguments))}var r,o,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),r=t,(o=[{key:"componentDidMount",value:function(){this.temporaryElement=document.createElement("div"),this.handleChildrens()}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.handleChildrens()}},{key:"componentWillUnmount",value:function(){this.temporaryElement&&a.default.unmountComponentAtNode(this.temporaryElement)}},{key:"extractChildren",value:function(){var e=this.context.extract,t=this.props.children;t&&e&&e(t)}},{key:"handleChildrens",value:function(){var e=this,t=this.props.children;if(!this.context.extract&&t){var r=n.default.createElement("div",{className:"react-head-temp"},t);a.default.render(r,this.temporaryElement,(function(){var t=e.temporaryElement.innerHTML;if(e.lastChildStr!==t){e.lastChildStr=t;var r=e.temporaryElement.querySelector(".react-head-temp");if(null!==r){var n=Array.prototype.slice.call(r.children),o=document.head,a=o.innerHTML;(n=(n=n.filter((function(e){return-1===a.indexOf(e.outerHTML)}))).map((function(e){return e.cloneNode(!0)}))).forEach((function(e){var t=e.tagName.toLowerCase();if("title"===t){var r=(0,c.getDuplicateTitle)();r&&(0,c.removeChild)(o,r)}else if("meta"===t){var n=(0,c.getDuplicateMeta)(e);n&&(0,c.removeChild)(o,n)}else if("link"===t&&"canonical"===e.rel){var a=(0,c.getDuplicateCanonical)(e);a&&(0,c.removeChild)(o,a)}})),(0,c.appendChild)(document.head,n)}}}))}}},{key:"render",value:function(){return this.extractChildren(),null}}])&&s(r.prototype,o),i&&s(r,i),t}(n.Component);b=m,y="contextTypes",h={extract:o.default.func},y in b?Object.defineProperty(b,y,{value:h,enumerable:!0,configurable:!0,writable:!0}):b[y]=h;var v=m;t.default=v,e.exports=t.default},90:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MetaTagsContext",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"MetaTags",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"ReactTitle",{enumerable:!0,get:function(){return a.default}}),t.default=void 0;var n=c(r(91)),o=c(r(89)),a=c(r(93));function c(e){return e&&e.__esModule?e:{default:e}}var i=o.default;t.default=i},91:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=r(1),a=(n=r(18))&&n.__esModule?n:{default:n};function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(){return i(this,t),l(this,s(t).apply(this,arguments))}var r,n,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),r=t,(n=[{key:"getChildContext",value:function(){return{extract:this.props.extract}}},{key:"render",value:function(){return o.Children.only(this.props.children)}}])&&u(r.prototype,n),a&&u(r,a),t}(o.Component);!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(f,"childContextTypes",{extract:a.default.func});var d=f;t.default=d,e.exports=t.default},92:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterAndArrangeTags=function(e){var t=null,r=null,n=[],c=[];return e.forEach((function(e){var o=e.type,a=e.props;"title"===o?t=e:"link"===o&&"canonical"===a.rel?r=e:"meta"===o?n.push(e):c.push(e)})),[t].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(function(e){var t={};a.forEach((function(e){t[e]=[]}));for(var r=[],n=function(n){var c=e[n],i=c.props.id;(i?!t.id[i]:0===o.filter((function(e){var r=c.props[e],n=t[e][r];return n&&!n.props.id})).length)&&(r.unshift(c),a.forEach((function(e){var r=c.props[e];r&&(t[e][r]=c)})))},c=e.length-1;c>=0;c--)n(c);return r}(n)),[r],c)},t.getDuplicateTitle=function(){return document.head.querySelectorAll("title")},t.getDuplicateCanonical=function(){return document.head.querySelectorAll('link[rel="canonical"]')},t.getDuplicateMeta=function(e){var t=document.head,r=e.id;if(r)return r&&t.querySelector("#".concat(r));return n.reduce((function(r,n){var o,a=e.getAttribute(n);return a?r.concat((o=t.querySelectorAll("[".concat(n,' = "').concat(a,'"]')),(o=Array.prototype.slice.call(o||[])).filter((function(e){return!e.id})))):r}),[])},t.appendChild=function(e,t){void 0===t.length&&(t=[t]);for(var r=document.createDocumentFragment(),n=0,o=t.length;n<o;n++)r.appendChild(t[n]);e.appendChild(r)},t.removeChild=function(e,t){void 0===t.length&&(t=[t]);for(var r=0,n=t.length;r<n;r++)e.removeChild(t[r])};var n=["property","name","itemprop"],o=n.concat(["itemProp"]),a=o.concat(["id"])},93:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1)),o=c(r(18)),a=c(r(89));function c(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d,b,y,h=function(e){function t(){return u(this,t),s(this,p(t).apply(this,arguments))}var r,o,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),r=t,(o=[{key:"render",value:function(){return n.default.createElement(a.default,null,n.default.createElement("title",null,this.props.title))}}])&&l(r.prototype,o),c&&l(r,c),t}(n.Component);d=h,b="propTypes",y={title:o.default.string},b in d?Object.defineProperty(d,b,{value:y,enumerable:!0,configurable:!0,writable:!0}):d[b]=y;var m=h;t.default=m,e.exports=t.default},94:function(e,t,r){"use strict";var n=r(0),o=(r(1),r(5));t.a=function(e){var t=e.wallpaper,r=e.title;return Object(n.jsx)("div",{className:"subheader bg-cover bg-center dark-overlay",style:{backgroundImage:"url("+t+")"},children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"subheader-inner",children:[Object(n.jsx)("h1",{className:"text-white",children:r}),Object(n.jsx)("nav",{"aria-label":"breadcrumb",children:Object(n.jsxs)("ol",{className:"breadcrumb",children:[Object(n.jsx)("li",{className:"breadcrumb-item",children:Object(n.jsxs)(o.b,{to:"/",children:[" ",Object(n.jsx)("i",{className:"fas fa-home"})," "]})}),Object(n.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:r})]})})]})})})}},96:function(e,t,r){"use strict";r.d(t,"d",(function(){return l})),r.d(t,"c",(function(){return s})),r.d(t,"b",(function(){return p})),r.d(t,"a",(function(){return f}));var n=r(17),o=r.n(n),a=r(21),c=r(25),i=r.n(c),u=r(2),l=function(){return function(){var e=Object(a.a)(o.a.mark((function e(t){var r,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={headers:{"Content-Type":"application/json",Accept:"application/json"}},e.prev=1,e.next=4,i.a.get("".concat("http://luxrealadria.com","/api/propertypage/"),r);case 4:n=e.sent,t({type:u.B,payload:n.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:u.A});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},s=function(){return function(){var e=Object(a.a)(o.a.mark((function e(t){var r,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={headers:{"Content-Type":"application/json",Accept:"application/json"}},e.prev=1,e.next=4,i.a.get("".concat("http://luxrealadria.com","/api/legalinfo/"),r);case 4:n=e.sent,t({type:u.v,payload:n.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:u.u});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},p=function(){return function(){var e=Object(a.a)(o.a.mark((function e(t){var r,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={headers:{"Content-Type":"application/json",Accept:"application/json"}},e.prev=1,e.next=4,i.a.get("".concat("http://luxrealadria.com","/api/errorpage/"),r);case 4:n=e.sent,t({type:u.r,payload:n.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:u.q});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},f=function(){return function(){var e=Object(a.a)(o.a.mark((function e(t){var r,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={headers:{"Content-Type":"application/json",Accept:"application/json"}},e.prev=1,e.next=4,i.a.get("".concat("http://luxrealadria.com","/api/usefullarticles/"),r);case 4:n=e.sent,t({type:u.p,payload:n.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:u.o});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=7.ab78a533.chunk.js.map