(this.webpackJsonpacres=this.webpackJsonpacres||[]).push([[19],{100:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(8)),o=a(n(38)),c=a(n(47)),i=n(104);function a(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b,y,m,h=function(e){function t(){return u(this,t),f(this,p(t).apply(this,arguments))}var n,o,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(o=[{key:"componentDidMount",value:function(){this.temporaryElement=document.createElement("div"),this.handleChildrens()}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.handleChildrens()}},{key:"componentWillUnmount",value:function(){this.temporaryElement&&c.default.unmountComponentAtNode(this.temporaryElement)}},{key:"extractChildren",value:function(){var e=this.context.extract,t=this.props.children;t&&e&&e(t)}},{key:"handleChildrens",value:function(){var e=this,t=this.props.children;if(!this.context.extract&&t){var n=r.default.createElement("div",{className:"react-head-temp"},t);c.default.render(n,this.temporaryElement,(function(){var t=e.temporaryElement.innerHTML;if(e.lastChildStr!==t){e.lastChildStr=t;var n=e.temporaryElement.querySelector(".react-head-temp");if(null!==n){var r=Array.prototype.slice.call(n.children),o=document.head,c=o.innerHTML;(r=(r=r.filter((function(e){return-1===c.indexOf(e.outerHTML)}))).map((function(e){return e.cloneNode(!0)}))).forEach((function(e){var t=e.tagName.toLowerCase();if("title"===t){var n=(0,i.getDuplicateTitle)();n&&(0,i.removeChild)(o,n)}else if("meta"===t){var r=(0,i.getDuplicateMeta)(e);r&&(0,i.removeChild)(o,r)}else if("link"===t&&"canonical"===e.rel){var c=(0,i.getDuplicateCanonical)(e);c&&(0,i.removeChild)(o,c)}})),(0,i.appendChild)(document.head,r)}}}))}}},{key:"render",value:function(){return this.extractChildren(),null}}])&&s(n.prototype,o),a&&s(n,a),t}(r.Component);b=h,y="contextTypes",m={extract:o.default.func},y in b?Object.defineProperty(b,y,{value:m,enumerable:!0,configurable:!0,writable:!0}):b[y]=m;var j=h;t.default=j,e.exports=t.default},101:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MetaTagsContext",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"MetaTags",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"ReactTitle",{enumerable:!0,get:function(){return c.default}}),t.default=void 0;var r=i(n(103)),o=i(n(100)),c=i(n(105));function i(e){return e&&e.__esModule?e:{default:e}}var a=o.default;t.default=a},103:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=n(8),c=(r=n(38))&&r.__esModule?r:{default:r};function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return a(this,t),u(this,s(t).apply(this,arguments))}var n,r,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),n=t,(r=[{key:"getChildContext",value:function(){return{extract:this.props.extract}}},{key:"render",value:function(){return o.Children.only(this.props.children)}}])&&l(n.prototype,r),c&&l(n,c),t}(o.Component);!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(p,"childContextTypes",{extract:c.default.func});var d=p;t.default=d,e.exports=t.default},104:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterAndArrangeTags=function(e){var t=null,n=null,r=[],i=[];return e.forEach((function(e){var o=e.type,c=e.props;"title"===o?t=e:"link"===o&&"canonical"===c.rel?n=e:"meta"===o?r.push(e):i.push(e)})),[t].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(function(e){var t={};c.forEach((function(e){t[e]=[]}));for(var n=[],r=function(r){var i=e[r],a=i.props.id;(a?!t.id[a]:0===o.filter((function(e){var n=i.props[e],r=t[e][n];return r&&!r.props.id})).length)&&(n.unshift(i),c.forEach((function(e){var n=i.props[e];n&&(t[e][n]=i)})))},i=e.length-1;i>=0;i--)r(i);return n}(r)),[n],i)},t.getDuplicateTitle=function(){return document.head.querySelectorAll("title")},t.getDuplicateCanonical=function(){return document.head.querySelectorAll('link[rel="canonical"]')},t.getDuplicateMeta=function(e){var t=document.head,n=e.id;if(n)return n&&t.querySelector("#".concat(n));return r.reduce((function(n,r){var o,c=e.getAttribute(r);return c?n.concat((o=t.querySelectorAll("[".concat(r,' = "').concat(c,'"]')),(o=Array.prototype.slice.call(o||[])).filter((function(e){return!e.id})))):n}),[])},t.appendChild=function(e,t){void 0===t.length&&(t=[t]);for(var n=document.createDocumentFragment(),r=0,o=t.length;r<o;r++)n.appendChild(t[r]);e.appendChild(n)},t.removeChild=function(e,t){void 0===t.length&&(t=[t]);for(var n=0,r=t.length;n<r;n++)e.removeChild(t[n])};var r=["property","name","itemprop"],o=r.concat(["itemProp"]),c=o.concat(["id"])},105:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(8)),o=i(n(38)),c=i(n(100));function i(e){return e&&e.__esModule?e:{default:e}}function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d,b,y,m=function(e){function t(){return l(this,t),s(this,f(t).apply(this,arguments))}var n,o,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){return r.default.createElement(c.default,null,r.default.createElement("title",null,this.props.title))}}])&&u(n.prototype,o),i&&u(n,i),t}(r.Component);d=m,b="propTypes",y={title:o.default.string},b in d?Object.defineProperty(d,b,{value:y,enumerable:!0,configurable:!0,writable:!0}):d[b]=y;var h=m;t.default=h,e.exports=t.default},198:function(e,t,n){"use strict";n.r(t);var r=n(2),o=n(3),c=n(10),i=n(11),a=n(4),l=n(8),u=n(101),s=n.n(u),f=n(15),p=n(18),d=n(121),b=n.n(d),y=[{img:"assets/img/coming-soon/1.jpg"},{img:"assets/img/coming-soon/2.jpg"},{img:"assets/img/coming-soon/3.jpg"}],m=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"acr-cs-container",children:[Object(a.jsxs)("div",{className:"acr-cs-content",children:[Object(a.jsx)("div",{className:"acr-cs-content-head",children:Object(a.jsx)("div",{className:"acr-cs-logo",children:Object(a.jsx)(p.b,{to:"/",children:Object(a.jsx)("img",{src:"/assets/img/logo.png",alt:"logo"})})})}),Object(a.jsxs)("div",{className:"acr-cs-content-body",children:[Object(a.jsxs)("div",{className:"acr-cs-text",children:[Object(a.jsx)("div",{className:"acr-dots-wrapper",children:Object(a.jsx)("div",{className:"acr-dots"})}),Object(a.jsxs)("h1",{className:"title",children:["A Home For All Is ",Object(a.jsx)("span",{className:"custom-primary",children:"Coming Soon"})," "]}),Object(a.jsx)("p",{className:"subtitle",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"})]}),Object(a.jsxs)("div",{className:"acr-cs-newsletter",children:[Object(a.jsxs)("form",{children:[Object(a.jsx)("input",{type:"text",placeholder:"Email Address",className:"form-control",name:"email-newsletter"}),Object(a.jsx)("button",{type:"submit",className:"btn-custom secondary",name:"button",children:"Subscribe"})]}),Object(a.jsx)("span",{children:"*We will notify you as soon as the website goes live."})]})]}),Object(a.jsxs)("div",{className:"acr-cs-content-footer",children:[Object(a.jsxs)("p",{children:[" Copyright \xa9 2020 ",Object(a.jsx)(p.b,{to:"#",children:"AndroThemes"})," All Rights Reserved. "]}),Object(a.jsxs)("ul",{className:"social-media",children:[Object(a.jsxs)("li",{children:[" ",Object(a.jsxs)(p.b,{to:"#",children:[" ",Object(a.jsx)("i",{className:"fab fa-facebook-f"})," "]})," "]}),Object(a.jsxs)("li",{children:[" ",Object(a.jsxs)(p.b,{to:"#",children:[" ",Object(a.jsx)("i",{className:"fab fa-instagram"})," "]})," "]}),Object(a.jsxs)("li",{children:[" ",Object(a.jsxs)(p.b,{to:"#",children:[" ",Object(a.jsx)("i",{className:"fab fa-twitter"})," "]})," "]}),Object(a.jsxs)("li",{children:[" ",Object(a.jsxs)(p.b,{to:"#",children:[" ",Object(a.jsx)("i",{className:"fab fa-linkedin-in"})," "]})," "]})]})]})]}),Object(a.jsx)("div",{className:"acr-cs-bg",children:Object(a.jsx)(b.a,Object(f.a)(Object(f.a)({className:"acr-cs-bg-slider"},{slidesToShow:1,slidesToScroll:1,arrows:!1,autoplay:!0,dots:!0,dotsClass:"d-flex slick-dots"}),{},{children:y.map((function(e,t){return Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:"acr-cs-bg-item bg-cover bg-center",style:{backgroundImage:"url(/"+e.img+")"}})},t)}))}))})]})}}]),n}(l.Component),h=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(l.Fragment,{children:[Object(a.jsxs)(s.a,{children:[Object(a.jsx)("title",{children:"LuxRealAdria | \u0421\u043a\u043e\u0440\u043e \u043e\u0442\u043a\u0440\u044b\u0442\u0438\u0435"}),Object(a.jsx)("meta",{name:"description",content:"#"})]}),Object(a.jsx)(m,{})]})}}]),n}(l.Component);t.default=h}}]);
//# sourceMappingURL=19.9204f3d6.chunk.js.map