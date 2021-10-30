(this.webpackJsonpacres=this.webpackJsonpacres||[]).push([[17],{135:function(e,t,a){"use strict";a.d(t,"b",(function(){return n}));var c=a(8),s=a.n(c).a.createContext(null),n=function(e,t){return void 0===t&&(t=null),null!=e?String(e):t||null};t.a=s},143:function(e,t,a){"use strict";var c=a(8),s=a.n(c).a.createContext(null);s.displayName="NavContext",t.a=s},148:function(e,t,a){"use strict";var c=a(8),s=a.n(c).a.createContext(null);s.displayName="CardContext",t.a=s},163:function(e,t,a){"use strict";var c=a(18),s=a(26),n=a(46),i=a.n(n),r=a(8),l=a.n(r),o=a(147),d=["as","disabled","onKeyDown"];function j(e){return!e||"#"===e.trim()}var b=l.a.forwardRef((function(e,t){var a=e.as,n=void 0===a?"a":a,i=e.disabled,r=e.onKeyDown,b=Object(s.a)(e,d),m=function(e){var t=b.href,a=b.onClick;(i||j(t))&&e.preventDefault(),i?e.stopPropagation():a&&a(e)};return j(b.href)&&(b.role=b.role||"button",b.href=b.href||"#"),i&&(b.tabIndex=-1,b["aria-disabled"]=!0),l.a.createElement(n,Object(c.a)({ref:t},b,{onClick:m,onKeyDown:Object(o.a)((function(e){" "===e.key&&(e.preventDefault(),m(e))}),r)}))}));b.displayName="SafeAnchor";var m=b,h=a(154),u=(a(142),a(143)),O=a(135),x=["active","className","eventKey","onSelect","onClick","as"],v=l.a.forwardRef((function(e,t){var a=e.active,n=e.className,o=e.eventKey,d=e.onSelect,j=e.onClick,b=e.as,m=Object(s.a)(e,x),v=Object(O.b)(o,m.href),f=Object(r.useContext)(O.a),p=Object(r.useContext)(u.a),g=a;if(p){m.role||"tablist"!==p.role||(m.role="tab");var N=p.getControllerId(v),y=p.getControlledId(v);m["data-rb-event-key"]=v,m.id=N||m.id,m["aria-controls"]=y||m["aria-controls"],g=null==a&&null!=v?p.activeKey===v:a}"tab"===m.role&&(m.disabled&&(m.tabIndex=-1,m["aria-disabled"]=!0),m["aria-selected"]=g);var w=Object(h.a)((function(e){j&&j(e),null!=v&&(d&&d(v,e),f&&f(v,e))}));return l.a.createElement(b,Object(c.a)({},m,{ref:t,onClick:w,className:i()(n,g&&"active")}))}));v.defaultProps={disabled:!1};var f=v,p=a(134),g=["bsPrefix","disabled","className","href","eventKey","onSelect","as"],N={disabled:!1,as:m},y=l.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.disabled,r=e.className,o=e.href,d=e.eventKey,j=e.onSelect,b=e.as,m=Object(s.a)(e,g);return a=Object(p.a)(a,"nav-link"),l.a.createElement(f,Object(c.a)({},m,{href:o,ref:t,eventKey:d,as:b,disabled:n,onSelect:j,className:i()(r,a,n&&"disabled")}))}));y.displayName="NavLink",y.defaultProps=N;t.a=y},188:function(e){e.exports=JSON.parse("{}")},203:function(e,t,a){"use strict";a.r(t);var c=a(5),s=a(8),n=a.n(s),i=a(129),r=a.n(i),l=a(1),o=a(3),d=a(10),j=a(11),b=a(28),m=a(20),h=a(155),u=a.n(h),O=a(46),x=a.n(O),v=a(32),f=a(71),p=Object(v.b)((function(e){return{home_page:e.home.home,filters:e.filters.filters}}),{update_filters:f.b})((function(e){var t=e.filters,a=e.home_page,n=e.update_filters,i=Object(s.useState)(!1),r=Object(m.a)(i,2),l=r[0],o=r[1],d=Object(s.useState)([]),j=Object(m.a)(d,2),h=j[0],O=j[1],v=Object(s.useState)([]),f=Object(m.a)(v,2),p=f[0],g=f[1],N=Object(s.useState)([]),y=Object(m.a)(N,2),w=y[0],C=y[1],k=Object(s.useState)([]),_=Object(m.a)(k,2),S=_[0],P=_[1],E=Object(s.useState)([]),K=Object(m.a)(E,2),I=K[0],T=K[1],R=Object(s.useState)(0),q=Object(m.a)(R,2),A=q[0],H=q[1];Object(s.useEffect)((function(){a&&O(a)}),[a]),Object(s.useEffect)((function(){t&&(t.regions&&g(t.regions.map((function(e){return e.title}))),t.categories&&C(t.categories.map((function(e){return e.title}))),t.statuses&&P(t.statuses.map((function(e){return e.title}))),t.purposes&&T(t.purposes.map((function(e){return e.title}))))}),[t]);var L=function(e){var t="\u041b\u044e\u0431\u043e"!==e.target.value.slice(0,4)?e.target.value:"",a={title:e.target.title,name:e.target.name,value:t};n(a)};return Object(c.jsx)("div",{className:"banner dark-overlay bg-cover bg-center",style:{backgroundImage:"url("+h.wallpaper+")"},children:Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"banner-item",children:Object(c.jsxs)("div",{className:"banner-inner",children:[Object(c.jsxs)("div",{className:"banner-text",children:[Object(c.jsx)("h1",{className:"title text-white",children:h&&h.title}),Object(c.jsx)("p",{className:"subtitle text-white",children:h&&h.subtitle})]}),Object(c.jsxs)("div",{className:"acr-filter-form",children:[Object(c.jsxs)("form",{method:"post",children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-lg-3 col-md-6",children:Object(c.jsxs)("div",{className:"form-group acr-custom-select",children:[Object(c.jsx)("label",{children:"\u0420\u0435\u0433\u0438\u043e\u043d: "}),Object(c.jsx)(u.a,{onChange:L,title:"regions",name:"\u0420\u0435\u0433\u0438\u043e\u043d",data:t&&t.regions&&["\u041b\u044e\u0431\u043e\u0439 \u0440\u0435\u0433\u0438\u043e\u043d"].concat(Object(b.a)(p)),options:{placeholder:"\u041b\u044e\u0431\u043e\u0439 \u0440\u0435\u0433\u0438\u043e\u043d"}})]})}),Object(c.jsx)("div",{className:"col-lg-3 col-md-6",children:Object(c.jsxs)("div",{className:"form-group acr-custom-select",children:[Object(c.jsx)("label",{children:"\u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435: "}),Object(c.jsx)(u.a,{onChange:L,title:"purposes",name:"\u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435",data:t&&t.purposes&&["\u041b\u044e\u0431\u043e\u0435 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"].concat(Object(b.a)(I)),options:{placeholder:"\u041b\u044e\u0431\u043e\u0435 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"}})]})}),Object(c.jsx)("div",{className:"col-lg-4 col-md-6",children:Object(c.jsxs)("div",{className:"form-group acr-custom-select",children:[Object(c.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(c.jsx)("div",{children:"\u041e\u0442 \u20ac"}),Object(c.jsxs)("div",{children:["\u0414\u043e \u20ac",A]})]}),Object(c.jsx)("input",{type:"range",className:"form-range",min:1,max:2,step:"10000",id:"customRange3",value:A,onChange:function(e){return function(e){H(e.target.value)}(e)}})]})}),Object(c.jsx)("div",{className:"submit-btn col-lg-2 col-md-6",children:Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("button",{type:"submit",className:"btn-custom secondary btn-block",name:"button",children:"\u041f\u043e\u0438\u0441\u043a \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432"})})})]}),Object(c.jsx)("div",{className:x()("advanced-search",{"d-block":l}),children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-lg-3 col-md-6",children:Object(c.jsxs)("div",{className:"acr-custom-select form-group",children:[Object(c.jsx)("label",{children:"\u0421\u043f\u0430\u043b\u044c\u043d\u0438: "}),Object(c.jsx)(u.a,{onChange:L,title:"beds",name:"\u0421\u043f\u0430\u043b\u044c\u043d\u0438",data:t&&t.rooms&&["\u041b\u044e\u0431\u043e\u0435 \u043a\u043e\u043b-\u0432\u043e"].concat(Object(b.a)(t.rooms)),options:{placeholder:"\u041b\u044e\u0431\u043e\u0435 \u043a\u043e\u043b-\u0432\u043e"}})]})}),Object(c.jsx)("div",{className:"col-lg-3 col-md-6",children:Object(c.jsxs)("div",{className:"acr-custom-select form-group",children:[Object(c.jsx)("label",{children:"\u0421\u0430\u043d\u0443\u0437\u043b\u044b: "}),Object(c.jsx)(u.a,{onChange:L,title:"baths",name:"\u0421\u0430\u043d\u0443\u0437\u043b\u044b",data:t&&t.closets&&["\u041b\u044e\u0431\u043e\u0435 \u043a\u043e\u043b-\u0432\u043e"].concat(Object(b.a)(t.closets)),options:{placeholder:"\u041b\u044e\u0431\u043e\u0435 \u043a\u043e\u043b-\u0432\u043e"}})]})}),Object(c.jsx)("div",{className:"col-lg-3 col-md-6",children:Object(c.jsxs)("div",{className:"acr-custom-select form-group",children:[Object(c.jsx)("label",{children:"\u0422\u0438\u043f: "}),Object(c.jsx)(u.a,{onChange:L,title:"categories",name:"\u0422\u0438\u043f",data:t&&t.categories&&["\u041b\u044e\u0431\u043e\u0439 \u0442\u0438\u043f"].concat(Object(b.a)(w)),options:{placeholder:"\u041b\u044e\u0431\u043e\u0439 \u0442\u0438\u043f"}})]})}),Object(c.jsx)("div",{className:"col-lg-3 col-md-6",children:Object(c.jsxs)("div",{className:"form-group acr-custom-select",children:[Object(c.jsx)("label",{children:"\u0421\u0442\u0430\u0442\u0443\u0441: "}),Object(c.jsx)(u.a,{onChange:L,title:"statuses",name:"\u0421\u0442\u0430\u0442\u0443\u0441",data:t&&t.statuses&&["\u041b\u044e\u0431\u043e\u0439 \u0441\u0442\u0430\u0442\u0443\u0441"].concat(Object(b.a)(S)),options:{placeholder:"\u041b\u044e\u0431\u043e\u0439 \u0441\u0442\u0430\u0442\u0443\u0441"}})]})})]})})]}),Object(c.jsx)("div",{className:x()("advanced-search-trigger semi-circle",{active:l}),onClick:function(){o(!l)},children:Object(c.jsx)("i",{className:"fas fa-chevron-down"})})]})]})})})})})),g=a(17),N=Object(v.b)((function(e){return{home_page:e.home.home}}))((function(e){var t=e.home_page,a=Object(s.useState)([]),n=Object(m.a)(a,2),i=n[0],r=n[1];return Object(s.useEffect)((function(){t&&r(t.categories)}),[t]),Object(c.jsx)("div",{className:"section section-padding",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{className:"section-title-wrap section-header",children:[Object(c.jsx)("h5",{className:"custom-primary",children:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"}),Object(c.jsx)("h2",{className:"title",children:"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u043f\u043e \u0442\u0438\u043f\u0430\u043c"})]}),Object(c.jsx)("div",{className:"row",children:i&&i.map((function(e,t){return Object(c.jsx)("div",{className:"col-lg-4 col-md-6",children:Object(c.jsx)("div",{className:"acr-category",children:Object(c.jsxs)("div",{className:"acr-category-thumb",children:[Object(c.jsx)("i",{className:e.icon}),Object(c.jsx)(g.b,{to:"#",children:Object(c.jsx)("img",{src:e.image,alt:e.name})}),Object(c.jsxs)("div",{className:"acr-category-body",children:[Object(c.jsxs)("h5",{children:[" ",Object(c.jsx)(g.b,{to:"#",children:e.title})," "]}),Object(c.jsxs)("span",{children:[e.properties_count," \u041e\u0431\u044a\u0435\u043a\u0442\u043e\u0432"]})]})]})})},t)}))})]})})})),y=a(14),w=a(33),C=a(200),k=a(202),_=a(141),S=a.n(_),P=Object(c.jsx)(C.a,{children:"\u0421\u043f\u0430\u043b\u044c\u043d\u0438"}),E=Object(c.jsx)(C.a,{children:"\u0421\u0430\u043d\u0443\u0437\u043b\u044b"}),K=Object(c.jsx)(C.a,{children:"\u041a\u0432. \u043c\u0435\u0442\u0440\u043e\u0432"}),I=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var c;return Object(l.a)(this,a),(c=t.call(this,e)).next=c.next.bind(Object(w.a)(c)),c.previous=c.previous.bind(Object(w.a)(c)),c}return Object(o.a)(a,[{key:"next",value:function(){this.slider.slickNext()}},{key:"previous",value:function(){this.slider.slickPrev()}},{key:"render",value:function(){var e=this,t=this.props.home_page;return Object(c.jsx)("div",{className:"section section-padding listings",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{className:"section-title-wrap section-header flex-header",children:[Object(c.jsxs)("div",{className:"section-title-text",children:[Object(c.jsx)("h5",{className:"custom-primary",children:"\u041d\u0435\u0434\u0430\u0432\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435"}),Object(c.jsx)("h2",{className:"title",children:"\u041d\u043e\u0432\u044b\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f"})]}),Object(c.jsxs)("div",{className:"acr-arrows primary-arrows",children:[Object(c.jsx)("i",{className:"slider-prev fas fa-arrow-left slick-arrow",onClick:this.previous}),Object(c.jsx)("i",{className:"slider-next fas fa-arrow-right slick-arrow",onClick:this.next})]})]}),Object(c.jsx)(S.a,Object(y.a)(Object(y.a)({className:"listings-slider",ref:function(t){return e.slider=t}},{slidesToShow:3,slidesToScroll:1,arrows:!1,dots:!1,responsive:[{breakpoint:991,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:1}}]}),{},{children:t&&t.recently_added&&t.recently_added.map((function(e,t){return Object(c.jsx)("div",{className:"col-12",children:Object(c.jsxs)("div",{className:"listing",children:[Object(c.jsxs)("div",{className:"listing-thumbnail",children:[Object(c.jsx)(g.b,{to:"/listing/".concat(e.id),children:Object(c.jsx)("img",{src:e.tmb_wallpaper,alt:e.name,style:{width:"100%",height:"auto"}})}),Object(c.jsxs)("div",{className:"listing-badges",children:[e.is_trend?Object(c.jsx)("span",{className:"listing-badge rent",children:"\u0412 \u0442\u0440\u0435\u043d\u0434\u0435"}):"",e.statuses&&e.statuses.map((function(e){return Object(c.jsxs)("span",{className:"listing-badge",style:{backgroundColor:e.color},children:[" ",e.title]},e.id)}))]})]}),Object(c.jsxs)("div",{className:"listing-body",children:[Object(c.jsxs)("h5",{className:"listing-title",children:[" ",Object(c.jsx)(g.b,{to:"/listing/".concat(e.id),title:e.name,children:e.name})," "]}),Object(c.jsxs)("span",{className:"listing-price",children:["\u20ac".concat(e.price),Object(c.jsx)("span",{children:"\u041f\u043e\u0441\u0443\u0442\u043e\u0447\u043d\u0430\u044f \u0430\u0440\u0435\u043d\u0434\u0430"==e.purpose.title?"/\u0434\u0435\u043d\u044c":"\u041f\u0440\u043e\u0434\u0430\u0436\u0430"==e.purpose.title?"":"/\u043c\u0435\u0441\u044f\u0446"})," "]}),e.short_description&&Object(c.jsx)("div",{className:"listing-text",dangerouslySetInnerHTML:{__html:e.short_description}}),Object(c.jsxs)("div",{className:"acr-listing-icons",children:[Object(c.jsx)(k.a,{overlay:P,children:Object(c.jsxs)("div",{className:"acr-listing-icon",children:[Object(c.jsx)("i",{className:"flaticon-bedroom"}),Object(c.jsx)("span",{className:"acr-listing-icon-value",children:e.rooms})]})}),Object(c.jsx)(k.a,{overlay:E,children:Object(c.jsxs)("div",{className:"acr-listing-icon",children:[Object(c.jsx)("i",{className:"flaticon-bathroom"}),Object(c.jsx)("span",{className:"acr-listing-icon-value",children:e.closets})]})}),Object(c.jsx)(k.a,{overlay:K,children:Object(c.jsxs)("div",{className:"acr-listing-icon",children:[Object(c.jsx)("i",{className:"flaticon-ruler"}),Object(c.jsx)("span",{className:"acr-listing-icon-value",children:(new Intl.NumberFormat).format(e.area)})]})})]}),Object(c.jsx)("div",{className:"listing-gallery-wrapper",children:Object(c.jsx)(g.b,{to:"/listing/".concat(e.id),className:"btn-custom btn-sm secondary",children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"})})]})]})},t)}))}))]})})}}]),a}(s.Component),T=Object(v.b)((function(e){return{home_page:e.home.home}}))(I),R=Object(c.jsx)(C.a,{children:"\u0421\u043f\u0430\u043b\u044c\u043d\u0438"}),q=Object(c.jsx)(C.a,{children:"\u0421\u0430\u043d\u0443\u0437\u043b\u044b"}),A=Object(c.jsx)(C.a,{children:"\u041a\u0432. \u043c\u0435\u0442\u0440\u043e\u0432"}),H=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var c;return Object(l.a)(this,a),(c=t.call(this,e)).next=c.next.bind(Object(w.a)(c)),c.previous=c.previous.bind(Object(w.a)(c)),c}return Object(o.a)(a,[{key:"next",value:function(){this.slider.slickNext()}},{key:"previous",value:function(){this.slider.slickPrev()}},{key:"render",value:function(){var e=this,t=this.props.home_page;return Object(c.jsx)("div",{className:"section light-bg",children:Object(c.jsxs)("div",{className:"container top-listings",children:[Object(c.jsxs)("div",{className:"acr-arrows",children:[Object(c.jsx)("i",{className:"slider-prev fas fa-arrow-left slick-arrow",onClick:this.previous}),Object(c.jsx)("i",{className:"slider-next fas fa-arrow-right slick-arrow",onClick:this.next})]}),Object(c.jsxs)("div",{className:"section-title-wrap section-header",children:[Object(c.jsx)("h5",{className:"custom-primary",children:"\u0412 \u0442\u0440\u0435\u043d\u0434\u0435"}),Object(c.jsx)("h2",{className:"title",children:"\u041d\u0430\u0448\u0438 \u043b\u0443\u0447\u0448\u0438\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u044b"})]}),Object(c.jsx)(S.a,Object(y.a)(Object(y.a)({className:"top-listings-slider col-12",ref:function(t){return e.slider=t}},{slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!1,autoplay:!0,responsive:[{breakpoint:991,settings:{arrows:!1}}]}),{},{children:t&&t.trends&&t.trends.map((function(e,t){return Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"acr-top-listing-item bg-cover dark-overlay bg-center",style:{backgroundImage:"url("+e.wallpaper+")"},children:Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col-lg-6",children:Object(c.jsx)("div",{className:"acr-top-listing-body listing",children:Object(c.jsxs)("div",{className:"listing-body",children:[Object(c.jsxs)("h5",{className:"listing-title",children:[" ",Object(c.jsx)(g.b,{to:"/listing/".concat(e.id),title:e.name,children:e.name})," "]}),Object(c.jsxs)("span",{className:"listing-price",children:["\u20ac".concat(e.price),Object(c.jsx)("span",{children:"\u041f\u043e\u0441\u0443\u0442\u043e\u0447\u043d\u0430\u044f \u0430\u0440\u0435\u043d\u0434\u0430"==e.purpose.title?"/\u0434\u0435\u043d\u044c":"\u041f\u0440\u043e\u0434\u0430\u0436\u0430"==e.purpose.title?"":"/\u043c\u0435\u0441\u044f\u0446"})," "]}),e.short_description&&Object(c.jsx)("div",{className:"listing-text",dangerouslySetInnerHTML:{__html:e.short_description}}),Object(c.jsxs)("div",{className:"acr-listing-icons",children:[Object(c.jsx)(k.a,{overlay:R,children:Object(c.jsxs)("div",{className:"acr-listing-icon",children:[Object(c.jsx)("i",{className:"flaticon-bedroom"}),Object(c.jsx)("span",{className:"acr-listing-icon-value",children:e.rooms})]})}),Object(c.jsx)(k.a,{overlay:q,children:Object(c.jsxs)("div",{className:"acr-listing-icon",children:[Object(c.jsx)("i",{className:"flaticon-bathroom"}),Object(c.jsx)("span",{className:"acr-listing-icon-value",children:e.closets})]})}),e.area&&Object(c.jsx)(k.a,{overlay:A,children:Object(c.jsxs)("div",{className:"acr-listing-icon",children:[Object(c.jsx)("i",{className:"flaticon-ruler"}),Object(c.jsx)("span",{className:"acr-listing-icon-value",children:(new Intl.NumberFormat).format(e.area)})]})})]}),Object(c.jsx)("div",{className:"listing-gallery-wrapper",children:Object(c.jsx)(g.b,{to:"/listing/".concat(e.id),className:"btn-custom btn-sm secondary",children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"})})]})})})})})},t)}))}))]})})}}]),a}(s.Component),L=Object(v.b)((function(e){return{home_page:e.home.home}}))(H),D=a(18),F=a(26),M=a(145),B=a(134),J=a(135),U=n.a.createContext(null);U.displayName="AccordionContext";var z=U,G=["as","children","eventKey","onClick"];var Q=n.a.forwardRef((function(e,t){var a=e.as,c=void 0===a?"button":a,i=e.children,r=e.eventKey,l=e.onClick,o=Object(F.a)(e,G),d=function(e,t){var a=Object(s.useContext)(z),c=Object(s.useContext)(J.a);return function(s){c&&c(e===a?null:e,s),t&&t(s)}}(r,l);return"button"===c&&(o.type="button"),n.a.createElement(c,Object(D.a)({ref:t,onClick:d},o),i)})),V=a(189),W=["children","eventKey"],X=n.a.forwardRef((function(e,t){var a=e.children,c=e.eventKey,i=Object(F.a)(e,W),r=Object(s.useContext)(z);return n.a.createElement(J.a.Provider,{value:null},n.a.createElement(V.a,Object(D.a)({ref:t,in:r===c},i),n.a.createElement("div",null,n.a.Children.only(a))))}));X.displayName="AccordionCollapse";var Y=X,Z=["as","activeKey","bsPrefix","children","className","onSelect"],$=n.a.forwardRef((function(e,t){var a=Object(M.a)(e,{activeKey:"onSelect"}),c=a.as,s=void 0===c?"div":c,i=a.activeKey,r=a.bsPrefix,l=a.children,o=a.className,d=a.onSelect,j=Object(F.a)(a,Z),b=x()(o,Object(B.a)(r,"accordion"));return n.a.createElement(z.Provider,{value:i||null},n.a.createElement(J.a.Provider,{value:d||null},n.a.createElement(s,Object(D.a)({ref:t},j,{className:b}),l)))}));$.displayName="Accordion",$.Toggle=Q,$.Collapse=Y;var ee=$,te=/-(.)/g;var ae=["className","bsPrefix","as"],ce=function(e){return e[0].toUpperCase()+(t=e,t.replace(te,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function se(e,t){var a=void 0===t?{}:t,c=a.displayName,s=void 0===c?ce(e):c,i=a.Component,r=a.defaultProps,l=n.a.forwardRef((function(t,a){var c=t.className,s=t.bsPrefix,r=t.as,l=void 0===r?i||"div":r,o=Object(F.a)(t,ae),d=Object(B.a)(s,e);return n.a.createElement(l,Object(D.a)({ref:a,className:x()(c,d)},o))}));return l.defaultProps=r,l.displayName=s,l}var ne=function(e){return n.a.forwardRef((function(t,a){return n.a.createElement("div",Object(D.a)({},t,{ref:a,className:x()(t.className,e)}))}))},ie=a(148),re=["bsPrefix","className","variant","as"],le=n.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,s=e.variant,i=e.as,r=void 0===i?"img":i,l=Object(F.a)(e,re),o=Object(B.a)(a,"card-img");return n.a.createElement(r,Object(D.a)({ref:t,className:x()(s?o+"-"+s:o,c)},l))}));le.displayName="CardImg",le.defaultProps={variant:null};var oe=le,de=["bsPrefix","className","bg","text","border","body","children","as"],je=ne("h5"),be=ne("h6"),me=se("card-body"),he=se("card-title",{Component:je}),ue=se("card-subtitle",{Component:be}),Oe=se("card-link",{Component:"a"}),xe=se("card-text",{Component:"p"}),ve=se("card-header"),fe=se("card-footer"),pe=se("card-img-overlay"),ge=n.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,i=e.bg,r=e.text,l=e.border,o=e.body,d=e.children,j=e.as,b=void 0===j?"div":j,m=Object(F.a)(e,de),h=Object(B.a)(a,"card"),u=Object(s.useMemo)((function(){return{cardHeaderBsPrefix:h+"-header"}}),[h]);return n.a.createElement(ie.a.Provider,{value:u},n.a.createElement(b,Object(D.a)({ref:t},m,{className:x()(c,h,i&&"bg-"+i,r&&"text-"+r,l&&"border-"+l)}),o?n.a.createElement(me,null,d):d))}));ge.displayName="Card",ge.defaultProps={body:!1},ge.Img=oe,ge.Title=he,ge.Subtitle=ue,ge.Body=me,ge.Link=Oe,ge.Text=xe,ge.Header=ve,ge.Footer=fe,ge.ImgOverlay=pe;var Ne=ge,ye=a(163),we=(a(188),Object(v.b)((function(e){return{home_page:e.home.home}}))((function(e){var t=e.home_page;return Object(c.jsx)("div",{children:t&&t.faq&&t.faq.faq_items.length>0&&Object(c.jsx)("div",{className:"section",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{className:"section-title-wrap section-header",children:[Object(c.jsx)("h5",{className:"custom-primary",children:"\u0427\u0430\u0412\u043e"}),Object(c.jsx)("h2",{className:"title",children:"\u0427\u0430\u0441\u0442\u043e \u0437\u0430\u0434\u0430\u0432\u0430\u0435\u043c\u044b\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b"})]}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-lg-8 mb-lg-30",children:Object(c.jsx)(ee,{defaultActiveKey:"0",className:"with-gap",children:t&&t.faq&&t.faq.faq_items.map((function(e){return Object(c.jsxs)(Ne,{children:[Object(c.jsx)(ee.Collapse,{eventKey:e.id,className:"collapseparent",children:Object(c.jsx)(Ne.Body,{children:Object(c.jsx)("div",{dangerouslySetInnerHTML:{__html:e.answer}})})}),Object(c.jsx)(Ne.Header,{children:Object(c.jsx)(ee.Toggle,{as:ye.a,variant:"link",eventKey:e.id,children:e.question})})]},e.id)}))})}),Object(c.jsx)("div",{className:"col-lg-4 infographics-5",children:Object(c.jsxs)("div",{className:"acr-infographic-item",children:[Object(c.jsx)("i",{className:"flaticon-telephone"}),Object(c.jsxs)("div",{className:"acr-infographic-item-body",children:[Object(c.jsx)("h5",{children:"\u0412\u0441\u0435 \u043f\u0440\u043e\u0441\u0442\u043e!"}),Object(c.jsx)("p",{children:"\u0423 \u0432\u0430\u0441 \u0432\u043e\u0437\u043d\u0438\u043a\u043b\u0438 \u0432\u043e\u043f\u0440\u043e\u0441\u044b, \u0436\u0430\u043b\u043e\u0431\u044b, \u0438\u043b\u0438 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f? \u041f\u0440\u043e\u0441\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043d\u0438\u0442\u0435 \u043d\u0430\u043c."}),t&&t.contact&&t.contact.phone_basic&&Object(c.jsx)("a",{href:"tel:".concat(t.contact.phone_basic),className:"btn-custom secondary btn-sm",children:"\u041f\u043e\u0437\u0432\u043e\u043d\u0438\u0442\u044c"})]})]})})]})]})})})}))),Ce=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(c.jsxs)(s.Fragment,{children:[Object(c.jsx)(p,{}),Object(c.jsx)(N,{}),Object(c.jsx)(L,{}),Object(c.jsx)(T,{}),Object(c.jsx)(we,{})]})}}]),a}(s.Component);t.default=Object(v.b)(null)((function(){return Object(c.jsxs)(s.Fragment,{children:[Object(c.jsxs)(r.a,{children:[Object(c.jsx)("title",{children:"LuxRealAdria | \u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(c.jsx)("meta",{name:"description",content:"#"})]}),Object(c.jsx)(Ce,{})]})}))}}]);
//# sourceMappingURL=17.cac9d6e1.chunk.js.map