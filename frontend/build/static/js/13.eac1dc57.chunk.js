(this.webpackJsonpacres=this.webpackJsonpacres||[]).push([[13],{107:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));a(0);var n=function(e){if(e)return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}},108:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return p})),a.d(t,"c",(function(){return u})),a.d(t,"d",(function(){return d}));var n=a(19),r=a.n(n),s=a(22),c=a(27),i=a.n(c),l=a(2),o=function(){return function(){var e=Object(s.a)(r.a.mark((function e(t){var a,n,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("language"),n={headers:{"Accept-Language":a,"Content-Type":"application/json",Accept:"application/json"}},e.prev=2,e.next=5,i.a.get("".concat("https://luxrealadria.com","/api/properties/"),n);case 5:s=e.sent,t({type:l.l,payload:s.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),t({type:l.k});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(a){var n,s,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=localStorage.getItem("language"),s={headers:{"Accept-Language":n,"Content-Type":"application/json",Accept:"application/json"}},t.prev=2,t.next=5,i.a.get("".concat("https://luxrealadria.com","/api/properties/?page=").concat(e),s);case 5:c=t.sent,a({type:l.z,payload:c.data}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),a({type:l.y});case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}()},u=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(a){var n,s,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=localStorage.getItem("language"),s={headers:{"Accept-Language":n,"Content-Type":"application/json",Accept:"application/json"}},t.prev=2,t.next=5,i.a.get("".concat("https://luxrealadria.com","/api/properties/").concat(e,"/"),s);case 5:c=t.sent,a({type:l.H,payload:c.data}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),a({type:l.G});case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(a){var n,s,c,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=localStorage.getItem("language"),s={headers:{"Accept-Language":n,"Content-Type":"application/json",Accept:"application/json"}},c=function(e){var t="",a=e&&e.map((function(e){return"price_range"===e.title&&e.value?"max_price="+e.value:e.value?e.title+"="+e.value:""})).filter((function(e){return e}));return a.length>0&&(t="?"+a.join("&")),t}(e),t.prev=4,t.next=7,i.a.get("".concat("https://luxrealadria.com","/api/properties/").concat(c),s);case 7:o=t.sent,a({type:l.J,payload:o.data}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(4),a({type:l.I});case 14:case"end":return t.stop()}}),t,null,[[4,11]])})));return function(e){return t.apply(this,arguments)}}()}},152:function(e,t,a){"use strict";a.r(t);var n=a(14),r=a(15),s=a(17),c=a(16),i=a(0),l=a(1),o=a(92),p=a.n(o),u=a(18),d=a(107),j=function(e){var t=e.listing;return Object(i.jsx)(i.Fragment,{children:t&&Object(i.jsx)("div",{className:"subheader subheader-2 bg-cover bg-center dark-overlay",style:{backgroundImage:"url("+t.wallpaper+")"},children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"subheader-inner",children:[Object(i.jsx)("span",{className:"listing-badge rent",children:t.purpose&&t.purpose.title}),Object(i.jsx)("h1",{className:"text-white",children:t.name}),Object(i.jsxs)("h2",{className:"text-white",children:["\u20ac ",Object(d.a)(t.price)]}),t.address&&Object(i.jsxs)("span",{className:"listing-address",children:[" ",Object(i.jsx)("i",{className:"fas fa-map-marker-alt"})," ",t.address," "]})]})})})})},g=a(3),b=a(28),h=a(7),m=a(148),f=a(101),v=a.n(f),x=(a(142),a(25),a(102)),O=a.n(x),y=a(97),N=a(6),_=(m.a,m.a,m.a,m.a,function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={showmore:!1,nav1:null,nav2:null},r.showmoretoggle=r.showmoretoggle.bind(Object(b.a)(r)),r}return Object(r.a)(a,[{key:"showmoretoggle",value:function(){this.setState({showmore:!this.state.showmore})}},{key:"componentDidMount",value:function(){this.props.load_properties_page(),this.props.mainslide&&this.props.thumbslider&&v()(".gallery-thumb").magnificPopup({type:"image",gallery:{enabled:!0}}),this.setState({nav1:this.slider1,nav2:this.slider2})}},{key:"render",value:function(){var e=this,t=this.props.properties_page,a=this.props,n=a.mainslider,r=a.thumbslider,s=a.listing,c=a.recent,l=a.lang,o="/\u0434\u0435\u043d\u044c",p="/\u043c\u0435\u0441\u044f\u0446";return"ru"===l?(o="/\u0434\u0435\u043d\u044c",p="/\u043c\u0435\u0441\u044f\u0446","\u0412 \u0442\u0440\u0435\u043d\u0434\u0435"):"en"===l?(o=" per day",p=" per month","Trendy"):"mn"===l&&(o=" dnevno",p=" mjesecno","Trend"),Object(i.jsx)("div",{className:"section listing-wrapper",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"row",children:[Object(i.jsxs)("div",{className:"col-lg-8",children:[Object(i.jsxs)("div",{className:"listing-thumbnail",children:[Object(i.jsx)(O.a,Object(g.a)(Object(g.a)({className:"listing-thumbnail-slider-main col-12",asNavFor:this.state.nav2,ref:function(t){return e.slider1=t}},{slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0}),{},{children:n.map((function(e,t){return Object(i.jsx)("img",{src:e.img,alt:"listing"})}))})),Object(i.jsx)(O.a,Object(g.a)(Object(g.a)({className:"listing-thumbnail-slider-nav",asNavFor:this.state.nav1,ref:function(t){return e.slider2=t}},{slidesToShow:4,slidesToScroll:1,dots:!1,centerMode:!1,focusOnSelect:!0,autoplay:!0,responsive:[{breakpoint:768,settings:{slidesToShow:2}}]}),{},{children:r.map((function(e,t){return Object(i.jsx)("div",{className:"slider-thumbnail-item col-12",children:Object(i.jsx)("img",{src:e.img,alt:"listing"})},t)}))}))]}),Object(i.jsxs)("div",{className:"listing-content",children:[Object(i.jsx)("h4",{children:t&&t.property_description_title}),Object(i.jsx)("div",{dangerouslySetInnerHTML:{__html:s.description}})]}),Object(i.jsxs)("div",{className:"section section-padding acr-listing-features",children:[Object(i.jsx)("h4",{children:t&&t.features_title}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col-lg-6 col-md-6",children:Object(i.jsxs)("div",{className:"listing-feature-wrapper",children:[Object(i.jsxs)("div",{className:"listing-feature",children:[Object(i.jsx)("i",{className:"flaticon-picture"}),Object(i.jsx)("h6",{className:"listing-feature-label",children:t&&t.feature_titles&&t.feature_titles.type_title}),Object(i.jsx)("span",{className:"listing-feature-value",children:s&&s.category&&s.category.title&&s.category.title})]}),Object(i.jsxs)("div",{className:"listing-feature",children:[Object(i.jsx)("i",{className:"flaticon-ruler"}),Object(i.jsx)("h6",{className:"listing-feature-label",children:t&&t.feature_titles&&t.feature_titles.area_title}),Object(i.jsx)("span",{className:"listing-feature-value",children:s&&s.area&&s.area})]}),Object(i.jsxs)("div",{className:"listing-feature",children:[Object(i.jsx)("i",{className:"flaticon-key"}),Object(i.jsx)("h6",{className:"listing-feature-label",children:t&&t.feature_titles&&t.feature_titles.property_id_title}),Object(i.jsx)("span",{className:"listing-feature-value",children:s&&s.unique_id&&s.unique_id})]})]})}),Object(i.jsx)("div",{className:"col-lg-6 col-md-6",children:Object(i.jsxs)("div",{className:"listing-feature-wrapper",children:[Object(i.jsxs)("div",{className:"listing-feature",children:[Object(i.jsx)("i",{className:"flaticon-bathroom"}),Object(i.jsx)("h6",{className:"listing-feature-label",children:t&&t.feature_titles&&t.feature_titles.bathroom_title}),Object(i.jsx)("span",{className:"listing-feature-value",children:s&&s.closets&&s.closets})]}),Object(i.jsxs)("div",{className:"listing-feature",children:[Object(i.jsx)("i",{className:"flaticon-pillow"}),Object(i.jsx)("h6",{className:"listing-feature-label",children:t&&t.feature_titles&&t.feature_titles.bedroom_iitle}),Object(i.jsx)("span",{className:"listing-feature-value",children:s&&s.rooms&&s.rooms})]}),Object(i.jsxs)("div",{className:"listing-feature",children:[Object(i.jsx)("i",{className:"flaticon-mailbox"}),Object(i.jsx)("h6",{className:"listing-feature-label",children:t&&t.feature_titles&&t.feature_titles.region_title}),Object(i.jsx)("span",{className:"listing-feature-value",children:s&&s.region&&s.region.title&&s.region.title})]})]})})]})]}),s&&s.video&&Object(i.jsxs)("div",{className:"section pt-0",children:[Object(i.jsx)("h4",{children:"\u0412\u0438\u0434\u0435\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u0430"}),Object(i.jsx)("div",{className:"embed-responsive embed-responsive-21by9",children:Object(i.jsx)("iframe",{title:"video",className:"embed-responsive-item",src:"https://www.youtube.com/embed/".concat(s.video)})})]})]}),Object(i.jsx)("div",{className:"col-lg-4",children:Object(i.jsx)("div",{className:"sidebar sticky-sidebar",children:Object(i.jsxs)("div",{className:"sidebar-widget",children:[Object(i.jsx)("h5",{children:t&&t.new_property_title}),c&&c.map((function(e,t){return Object(i.jsxs)("div",{className:"listing listing-list",children:[Object(i.jsx)("div",{className:"listing-thumbnail",children:Object(i.jsx)(h.b,{to:"/listing/".concat(e.id),children:Object(i.jsx)("img",{src:e.tmb_wallpaper,alt:"listing"})})}),Object(i.jsxs)("div",{className:"listing-body",children:[Object(i.jsxs)("h6",{className:"listing-title",children:[" ",Object(i.jsx)(h.b,{to:"/listing/".concat(e.id),title:e.name,children:e.name})," "]}),Object(i.jsxs)("span",{className:"listing-price",children:["\u20ac".concat(e.price),"\u041f\u043e\u0441\u0443\u0442\u043e\u0447\u043d\u0430\u044f \u0430\u0440\u0435\u043d\u0434\u0430"==e.purpose.title||"Per Day Rent"==e.purpose.title||"Najam po danu"==e.purpose.title?o:"\u041f\u0440\u043e\u0434\u0430\u0436\u0430"==e.purpose.title||"For Sale"==e.purpose.title||"Na prodaju"==e.purpose.title?"":p]})]})]},t)}))]})})})]})})})}}]),a}(l.Component)),w=Object(N.b)((function(e){return{properties_page:e.pages.properties_page,lang:e.language.language}}),{load_properties_page:y.d})(_),k=a(5),S=a(108),A=Object(N.b)((function(e){return{home_page:e.home.home,listing:e.listings.listing,properties_page:e.pages.properties_page}}),{load_all_properties:S.a,load_properties_by_page:S.b,load_single_property:S.c})((function(e){var t=e.load_single_property,a=e.listing,n=e.home_page,r=(e.properties_page,e.load_all_properties,e.load_properties_by_page,Object(l.useState)({})),s=Object(u.a)(r,2),c=s[0],o=s[1],p=Object(l.useState)([]),d=Object(u.a)(p,2),g=d[0],b=d[1],h=Object(l.useState)([]),m=Object(u.a)(h,2),f=m[0],v=m[1],x=Object(k.g)();return Object(l.useEffect)((function(){var e=x.pathname.split("/")[x.pathname.split("/").length-1];t(e)}),[x]),Object(l.useEffect)((function(){a&&(o(a),a.property_gallary&&(b(a.property_gallary.map((function(e){return{img:e.image}}))),v(a.property_gallary.map((function(e){return{img:e.tmb_image}})))))}),[a]),Object(i.jsx)(l.Fragment,{children:c&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(j,{listing:c}),Object(i.jsx)(w,{listing:c,mainslider:g,thumbslider:f,recent:n.recently_added})]})})})),T=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(i.jsxs)(l.Fragment,{children:[Object(i.jsxs)(p.a,{children:[Object(i.jsx)("title",{children:"LuxRealAdria | \u041e\u0431\u044a\u0435\u043a\u0442"}),Object(i.jsx)("meta",{name:"description",content:"#"})]}),Object(i.jsx)(A,{})]})}}]),a}(l.Component);t.default=T},97:function(e,t,a){"use strict";a.d(t,"d",(function(){return o})),a.d(t,"c",(function(){return p})),a.d(t,"b",(function(){return u})),a.d(t,"a",(function(){return d}));var n=a(19),r=a.n(n),s=a(22),c=a(27),i=a.n(c),l=a(2),o=function(){return function(){var e=Object(s.a)(r.a.mark((function e(t){var a,n,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("language"),n={headers:{"Accept-Language":a,"Content-Type":"application/json",Accept:"application/json"}},e.prev=2,e.next=5,i.a.get("".concat("https://luxrealadria.com","/api/propertypage/"),n);case 5:s=e.sent,t({type:l.B,payload:s.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),t({type:l.A});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()},p=function(){return function(){var e=Object(s.a)(r.a.mark((function e(t){var a,n,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("language"),n={headers:{"Accept-Language":a,"Content-Type":"application/json",Accept:"application/json"}},e.prev=2,e.next=5,i.a.get("".concat("https://luxrealadria.com","/api/legalinfo/"),n);case 5:s=e.sent,t({type:l.v,payload:s.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),t({type:l.u});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()},u=function(){return function(){var e=Object(s.a)(r.a.mark((function e(t){var a,n,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("language"),n={headers:{"Accept-Language":a,"Content-Type":"application/json",Accept:"application/json"}},e.prev=2,e.next=5,i.a.get("".concat("https://luxrealadria.com","/api/errorpage/"),n);case 5:s=e.sent,t({type:l.r,payload:s.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),t({type:l.q});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()},d=function(){return function(){var e=Object(s.a)(r.a.mark((function e(t){var a,n,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("language"),n={headers:{"Accept-Language":a,"Content-Type":"application/json",Accept:"application/json"}},e.prev=2,e.next=5,i.a.get("".concat("https://luxrealadria.com","/api/usefullarticles/"),n);case 5:s=e.sent,t({type:l.p,payload:s.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),t({type:l.o});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=13.eac1dc57.chunk.js.map