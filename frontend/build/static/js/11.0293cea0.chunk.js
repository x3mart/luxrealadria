(this.webpackJsonpacres=this.webpackJsonpacres||[]).push([[11],{100:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(8)),i=o(n(38)),a=o(n(47)),s=n(104);function o(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d,b,h,g=function(e){function t(){return l(this,t),p(this,m(t).apply(this,arguments))}var n,i,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),n=t,(i=[{key:"componentDidMount",value:function(){this.temporaryElement=document.createElement("div"),this.handleChildrens()}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.handleChildrens()}},{key:"componentWillUnmount",value:function(){this.temporaryElement&&a.default.unmountComponentAtNode(this.temporaryElement)}},{key:"extractChildren",value:function(){var e=this.context.extract,t=this.props.children;t&&e&&e(t)}},{key:"handleChildrens",value:function(){var e=this,t=this.props.children;if(!this.context.extract&&t){var n=r.default.createElement("div",{className:"react-head-temp"},t);a.default.render(n,this.temporaryElement,(function(){var t=e.temporaryElement.innerHTML;if(e.lastChildStr!==t){e.lastChildStr=t;var n=e.temporaryElement.querySelector(".react-head-temp");if(null!==n){var r=Array.prototype.slice.call(n.children),i=document.head,a=i.innerHTML;(r=(r=r.filter((function(e){return-1===a.indexOf(e.outerHTML)}))).map((function(e){return e.cloneNode(!0)}))).forEach((function(e){var t=e.tagName.toLowerCase();if("title"===t){var n=(0,s.getDuplicateTitle)();n&&(0,s.removeChild)(i,n)}else if("meta"===t){var r=(0,s.getDuplicateMeta)(e);r&&(0,s.removeChild)(i,r)}else if("link"===t&&"canonical"===e.rel){var a=(0,s.getDuplicateCanonical)(e);a&&(0,s.removeChild)(i,a)}})),(0,s.appendChild)(document.head,r)}}}))}}},{key:"render",value:function(){return this.extractChildren(),null}}])&&u(n.prototype,i),o&&u(n,o),t}(r.Component);d=g,b="contextTypes",h={extract:i.default.func},b in d?Object.defineProperty(d,b,{value:h,enumerable:!0,configurable:!0,writable:!0}):d[b]=h;var y=g;t.default=y,e.exports=t.default},101:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MetaTagsContext",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"MetaTags",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"ReactTitle",{enumerable:!0,get:function(){return a.default}}),t.default=void 0;var r=s(n(103)),i=s(n(100)),a=s(n(105));function s(e){return e&&e.__esModule?e:{default:e}}var o=i.default;t.default=o},103:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,i=n(8),a=(r=n(38))&&r.__esModule?r:{default:r};function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(){return o(this,t),l(this,u(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(r=[{key:"getChildContext",value:function(){return{extract:this.props.extract}}},{key:"render",value:function(){return i.Children.only(this.props.children)}}])&&c(n.prototype,r),a&&c(n,a),t}(i.Component);!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(m,"childContextTypes",{extract:a.default.func});var f=m;t.default=f,e.exports=t.default},104:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterAndArrangeTags=function(e){var t=null,n=null,r=[],s=[];return e.forEach((function(e){var i=e.type,a=e.props;"title"===i?t=e:"link"===i&&"canonical"===a.rel?n=e:"meta"===i?r.push(e):s.push(e)})),[t].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(function(e){var t={};a.forEach((function(e){t[e]=[]}));for(var n=[],r=function(r){var s=e[r],o=s.props.id;(o?!t.id[o]:0===i.filter((function(e){var n=s.props[e],r=t[e][n];return r&&!r.props.id})).length)&&(n.unshift(s),a.forEach((function(e){var n=s.props[e];n&&(t[e][n]=s)})))},s=e.length-1;s>=0;s--)r(s);return n}(r)),[n],s)},t.getDuplicateTitle=function(){return document.head.querySelectorAll("title")},t.getDuplicateCanonical=function(){return document.head.querySelectorAll('link[rel="canonical"]')},t.getDuplicateMeta=function(e){var t=document.head,n=e.id;if(n)return n&&t.querySelector("#".concat(n));return r.reduce((function(n,r){var i,a=e.getAttribute(r);return a?n.concat((i=t.querySelectorAll("[".concat(r,' = "').concat(a,'"]')),(i=Array.prototype.slice.call(i||[])).filter((function(e){return!e.id})))):n}),[])},t.appendChild=function(e,t){void 0===t.length&&(t=[t]);for(var n=document.createDocumentFragment(),r=0,i=t.length;r<i;r++)n.appendChild(t[r]);e.appendChild(n)},t.removeChild=function(e,t){void 0===t.length&&(t=[t]);for(var n=0,r=t.length;n<r;n++)e.removeChild(t[n])};var r=["property","name","itemprop"],i=r.concat(["itemProp"]),a=i.concat(["id"])},105:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(8)),i=s(n(38)),a=s(n(100));function s(e){return e&&e.__esModule?e:{default:e}}function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f,d,b,h=function(e){function t(){return c(this,t),u(this,p(t).apply(this,arguments))}var n,i,s;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),n=t,(i=[{key:"render",value:function(){return r.default.createElement(a.default,null,r.default.createElement("title",null,this.props.title))}}])&&l(n.prototype,i),s&&l(n,s),t}(r.Component);f=h,d="propTypes",b={title:i.default.string},d in f?Object.defineProperty(f,d,{value:b,enumerable:!0,configurable:!0,writable:!0}):f[d]=b;var g=h;t.default=g,e.exports=t.default},107:function(e,t,n){"use strict";var r=n(2),i=n(3),a=n(10),s=n(11),o=n(4),c=n(8),l=n(18),u=function(e){Object(a.a)(n,e);var t=Object(s.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(o.jsx)("div",{className:"subheader bg-cover bg-center dark-overlay",style:{backgroundImage:"url(/assets/img/subheader.jpg )"},children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"subheader-inner",children:[Object(o.jsx)("h1",{className:"text-white",children:this.props.breadcrumb.pagename}),Object(o.jsx)("nav",{"aria-label":"breadcrumb",children:Object(o.jsxs)("ol",{className:"breadcrumb",children:[Object(o.jsx)("li",{className:"breadcrumb-item",children:Object(o.jsxs)(l.b,{to:"/",children:[" ",Object(o.jsx)("i",{className:"fas fa-home"})," "]})}),Object(o.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:this.props.breadcrumb.pagename})]})})]})})})}}]),n}(c.Component);t.a=u},111:function(e){e.exports=JSON.parse('{"a":[{"id":1,"gridimg":"assets/img/blog/1.jpg","listimg":"assets/img/blog-list/1.jpg","authorimg":"assets/img/people/2.jpg","authorname":"Heather Mclayn","postdate":"March 3, 2020","title":"What agencies are looking for in an agent","text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s","tagslist":[{"title":"House"}],"totalcomment":7,"usercomment":[{"img":"assets/img/people/1.jpg"},{"img":"assets/img/people/5.jpg"}],"recent":true},{"id":2,"gridimg":"assets/img/blog/2.jpg","listimg":"assets/img/blog-list/2.jpg","authorimg":"assets/img/people/2.jpg","authorname":"Heather Mclayn","postdate":"March 3, 2020","title":"Changing the way we sell and buy real estate","text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s","tagslist":[{"title":"Real Estate"},{"title":"Building"}],"totalcomment":"","usercomment":[],"recent":true},{"id":3,"gridimg":"assets/img/blog/3.jpg","listimg":"assets/img/blog-list/3.jpg","authorimg":"assets/img/people/1.jpg","authorname":"Randy Blue","postdate":"March 13, 2020","title":"Families, its the best time to start buying","text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s","tagslist":[{"title":"Agency"}],"totalcomment":3,"usercomment":[{"img":"assets/img/people/3.jpg"},{"img":"assets/img/people/4.jpg"}],"recent":true},{"id":4,"gridimg":"assets/img/blog/4.jpg","listimg":"assets/img/blog-list/4.jpg","authorimg":"assets/img/people/2.jpg","authorname":"Heather Mclayn","postdate":"March 3, 2020","title":"Our all new duplex apartment is up for grabs","text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s","tagslist":[{"title":"Family"}],"totalcomment":"","usercomment":[],"recent":true},{"id":5,"gridimg":"assets/img/blog/5.jpg","listimg":"assets/img/blog-list/5.jpg","authorimg":"assets/img/people/1.jpg","authorname":"Randy Blue","postdate":"March 3, 2020","title":"Villa sales are going down this year, find out why","text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s","tagslist":[{"title":"Acres"}],"totalcomment":"","usercomment":[],"recent":false},{"id":6,"gridimg":"assets/img/blog/6.jpg","listimg":"assets/img/blog-list/6.jpg","authorimg":"assets/img/people/2.jpg","authorname":"Heather Mclayn","postdate":"March 3, 2020","title":"Flats in wisconsin are being held for rental","text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s","tagslist":[{"title":"Baths"},{"title":"Rooms"}],"totalcomment":3,"usercomment":[{"img":"assets/img/people/3.jpg"},{"img":"assets/img/people/4.jpg"}],"recent":false}],"b":[{"id":1,"title":"Living Rooms","count":24},{"id":2,"title":"Real Estate","count":16},{"id":3,"title":"Kitchens","count":32},{"id":4,"title":"Flats","count":22},{"id":5,"title":"Luxury","count":15},{"id":6,"title":"Bed Rooms","count":8}]}')},120:function(e,t,n){"use strict";var r=n(2),i=n(3),a=n(10),s=n(11),o=n(4),c=n(8),l=function(e){Object(a.a)(n,e);var t=Object(s.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(o.jsx)("div",{className:"pagination-loader",children:Object(o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",style:{margin:"auto",background:"#fff",display:"block",shapeRendering:"auto"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[Object(o.jsx)("g",{transform:"translate(80,50)",children:Object(o.jsx)("g",{transform:"rotate(0)",children:Object(o.jsxs)("circle",{cx:0,cy:0,r:6,fill:"#01bbbc",fillOpacity:1,children:[Object(o.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.875s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(o.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.875s"})]})})}),Object(o.jsx)("g",{transform:"translate(71.21320343559643,71.21320343559643)",children:Object(o.jsx)("g",{transform:"rotate(45)",children:Object(o.jsxs)("circle",{cx:0,cy:0,r:6,fill:"#01bbbc",fillOpacity:"0.875",children:[Object(o.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.75s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(o.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.75s"})]})})}),Object(o.jsx)("g",{transform:"translate(50,80)",children:Object(o.jsx)("g",{transform:"rotate(90)",children:Object(o.jsxs)("circle",{cx:0,cy:0,r:6,fill:"#01bbbc",fillOpacity:"0.75",children:[Object(o.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.625s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(o.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.625s"})]})})}),Object(o.jsx)("g",{transform:"translate(28.786796564403577,71.21320343559643)",children:Object(o.jsx)("g",{transform:"rotate(135)",children:Object(o.jsxs)("circle",{cx:0,cy:0,r:6,fill:"#01bbbc",fillOpacity:"0.625",children:[Object(o.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.5s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(o.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.5s"})]})})}),Object(o.jsx)("g",{transform:"translate(20,50.00000000000001)",children:Object(o.jsx)("g",{transform:"rotate(180)",children:Object(o.jsxs)("circle",{cx:0,cy:0,r:6,fill:"#01bbbc",fillOpacity:"0.5",children:[Object(o.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.375s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(o.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.375s"})]})})}),Object(o.jsx)("g",{transform:"translate(28.78679656440357,28.786796564403577)",children:Object(o.jsx)("g",{transform:"rotate(225)",children:Object(o.jsxs)("circle",{cx:0,cy:0,r:6,fill:"#01bbbc",fillOpacity:"0.375",children:[Object(o.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.25s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(o.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.25s"})]})})}),Object(o.jsx)("g",{transform:"translate(49.99999999999999,20)",children:Object(o.jsx)("g",{transform:"rotate(270)",children:Object(o.jsxs)("circle",{cx:0,cy:0,r:6,fill:"#01bbbc",fillOpacity:"0.25",children:[Object(o.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.125s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(o.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.125s"})]})})}),Object(o.jsx)("g",{transform:"translate(71.21320343559643,28.78679656440357)",children:Object(o.jsx)("g",{transform:"rotate(315)",children:Object(o.jsxs)("circle",{cx:0,cy:0,r:6,fill:"#01bbbc",fillOpacity:"0.125",children:[Object(o.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"0s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(o.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"0s"})]})})})]})})}}]),n}(c.Component);t.a=l},132:function(e,t,n){"use strict";var r=n(2),i=n(3),a=n(10),s=n(11),o=n(4),c=n(8),l=n(18),u=n(111);c.Component},197:function(e,t,n){"use strict";n.r(t);var r=n(2),i=n(3),a=n(10),s=n(11),o=n(4),c=n(8),l=n(101),u=n.n(l),p=(n(67),n(107)),m=(n(68),n(34)),f=n(18),d=n(111),b=(n(132),n(46)),h=n.n(b),g=n(120),y=function(e){Object(a.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).state={items:d.a,currentPage:1,itemsPerPage:5,loading:!1},e.handleClick=e.handleClick.bind(Object(m.a)(e)),e}return Object(i.a)(n,[{key:"handleClick",value:function(e){var t=this,n=e.target.closest(".pagination-content");n&&n.scrollIntoView(),this.setState({loading:!0}),setTimeout((function(){t.setState({currentPage:Number(e.target.getAttribute("data-page")),loading:!1})}),1e3)}},{key:"render",value:function(){for(var e=this,t=this.state,n=t.items,r=t.currentPage,i=t.itemsPerPage,a=r*i,s=a-i,l=n.slice(s,a).map((function(e,t){return Object(o.jsx)("article",{className:"post",children:Object(o.jsxs)("div",{className:"post-body",children:[Object(o.jsxs)("h5",{className:"post-title",children:[" ",Object(o.jsx)(f.b,{to:"/articles/1",children:e.title})," "]}),Object(o.jsx)("p",{className:"post-text",children:e.text}),Object(o.jsx)("div",{className:"post-controls",children:Object(o.jsx)(f.b,{to:"/articles/1",className:"btn-custom secondary btn-sm",children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"})})]})},t)})),u=[],p=1;p<=Math.ceil(n.length/i);p++)u.push(p);var m=u.map((function(t){var n=e.state.currentPage===t?"active":"";return Object(o.jsx)(c.Fragment,{children:u.length>1?Object(o.jsx)("li",{className:h()("page-item",{active:n}),children:Object(o.jsx)(f.b,{className:"page-link",to:"#","data-page":t,onClick:e.handleClick,children:t})}):""},t)}));return Object(o.jsx)("div",{className:"section posts pagination-content",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{children:[!1===this.state.loading?l:Object(o.jsx)(g.a,{}),u.length>1?Object(o.jsxs)("ul",{className:"pagination",children:[u.length>1&&1!==this.state.currentPage?Object(o.jsx)("li",{className:"page-item",children:Object(o.jsx)(f.b,{className:"page-link",to:"#","data-page":this.state.currentPage-1,onClick:this.handleClick,children:Object(o.jsx)("i",{className:"fas fa-chevron-left"})})}):"",m,u.length>1&&this.state.currentPage!==u.length?Object(o.jsx)("li",{className:"page-item",children:Object(o.jsx)(f.b,{className:"page-link",to:"#","data-page":parseInt(this.state.currentPage+1),onClick:this.handleClick,children:Object(o.jsx)("i",{className:"fas fa-chevron-right"})})}):""]}):""]})})})})}}]),n}(c.Component),j=function(e){Object(a.a)(n,e);var t=Object(s.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(o.jsxs)(c.Fragment,{children:[Object(o.jsxs)(u.a,{children:[Object(o.jsx)("title",{children:"LuxRealAdria | \u041f\u043e\u043b\u0435\u0437\u043d\u044b\u0435 \u0441\u0442\u0430\u0442\u044c\u0438"}),Object(o.jsx)("meta",{name:"description",content:"#"})]}),Object(o.jsx)(p.a,{breadcrumb:{pagename:"\u041f\u043e\u043b\u0435\u0437\u043d\u044b\u0435 \u0441\u0442\u0430\u0442\u044c\u0438"}}),Object(o.jsx)(y,{})]})}}]),n}(c.Component);t.default=j}}]);
//# sourceMappingURL=11.0293cea0.chunk.js.map