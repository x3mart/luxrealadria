(this.webpackJsonpacres=this.webpackJsonpacres||[]).push([[3],{2:function(e,t,n){"use strict";n.d(t,"U",(function(){return c})),n.d(t,"T",(function(){return a})),n.d(t,"N",(function(){return s})),n.d(t,"M",(function(){return r})),n.d(t,"O",(function(){return i})),n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return o})),n.d(t,"X",(function(){return u})),n.d(t,"W",(function(){return j})),n.d(t,"S",(function(){return d})),n.d(t,"R",(function(){return b})),n.d(t,"Q",(function(){return O})),n.d(t,"P",(function(){return h})),n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return f})),n.d(t,"L",(function(){return x})),n.d(t,"K",(function(){return p})),n.d(t,"f",(function(){return g})),n.d(t,"e",(function(){return _})),n.d(t,"j",(function(){return v})),n.d(t,"i",(function(){return E})),n.d(t,"V",(function(){return S})),n.d(t,"t",(function(){return C})),n.d(t,"s",(function(){return A})),n.d(t,"B",(function(){return N})),n.d(t,"A",(function(){return T})),n.d(t,"x",(function(){return L})),n.d(t,"w",(function(){return I})),n.d(t,"D",(function(){return y})),n.d(t,"C",(function(){return G})),n.d(t,"v",(function(){return R})),n.d(t,"u",(function(){return P})),n.d(t,"r",(function(){return k})),n.d(t,"q",(function(){return F})),n.d(t,"p",(function(){return U})),n.d(t,"o",(function(){return w})),n.d(t,"l",(function(){return D})),n.d(t,"k",(function(){return z})),n.d(t,"z",(function(){return H})),n.d(t,"y",(function(){return B})),n.d(t,"H",(function(){return M})),n.d(t,"G",(function(){return W})),n.d(t,"J",(function(){return Y})),n.d(t,"I",(function(){return V})),n.d(t,"F",(function(){return J})),n.d(t,"E",(function(){return K})),n.d(t,"h",(function(){return q})),n.d(t,"g",(function(){return Q})),n.d(t,"n",(function(){return X})),n.d(t,"m",(function(){return $}));var c="SIGNUP_SUCCESS",a="SIGNUP_FAIL",s="LOGIN_SUCCESS",r="LOGIN_FAIL",i="LOGOUT_SUCCESS",l="AUTHENTICATED_SUCCESS",o="AUTHENTICATED_FAIL",u="USER_LOADED_SUCCESS",j="USER_LOADED_FAIL",d="PASSWORD_RESET_SUCCESS",b="PASSWORD_RESET_FAIL",O="PASSWORD_RESET_CONFIRM_SUCCESS",h="PASSWORD_RESET_CONFIRM_FAIL",m="ACTIVATION_SUCCESS",f="ACTIVATION_FAIL",x="GOOGLE_AUTH_SUCCESS",p="GOOGLE_AUTH_FAIL",g="FACEBOOK_AUTH_SUCCESS",_="FACEBOOK_AUTH_FAIL",v="GET_ALL_FILTERS_SUCCESS",E="GET_ALL_FILTERS_FAIL",S="UPDATE_VALUES_SUCCESS",C="GET_HOMEPAGE_SUCCESS",A="GET_HOMEPAGE_FAIL",N="GET_PROPERTIES_PAGE_SUCCESS",T="GET_PROPERTIES_PAGE_FAIL",L="GET_LOGIN_PAGE_SUCCESS",I="GET_LOGIN_PAGE_FAIL",y="GET_REGISTER_PAGE_SUCCESS",G="GET_REGISTER_PAGE_FAIL",R="GET_LEGAL_PAGE_SUCCESS",P="GET_LEGAL_PAGE_FAIL",k="GET_ERROR_PAGE_SUCCESS",F="GET_ERROR_PAGE_FAIL",U="GET_ARTICLES_PAGE_SUCCESS",w="GET_ARTICLES_PAGE_FAIL",D="GET_ALL_PROPERTIES_SUCCESS",z="GET_ALL_PROPERTIES_FAIL",H="GET_PROPERTIES_BY_PAGE_SUCCESS",B="GET_PROPERTIES_BY_PAGE_FAIL",M="GET_SINGLE_PROPERTY_SUCCESS",W="GET_SINGLE_PROPERTY_FAIL",Y="GET_SORTED_LIST_SUCCESS",V="GET_SORTED_LIST_FAIL",J="GET_SINGLE_ARTICLE_SUCCESS",K="GET_SINGLE_ARTICLE_FAIL",q="GET_ALL_ARTICLES_SUCCESS",Q="GET_ALL_ARTICLES_FAIL",X="GET_ARTICLES_BY_PAGE_SUCCESS",$="GET_ARTICLES_BY_PAGE_FAIL"},35:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u}));var c=n(17),a=n.n(c),s=n(21),r=n(25),i=n.n(r),l=n(2),o=function(){return function(){var e=Object(s.a)(a.a.mark((function e(t){var n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{"Content-Type":"application/json",Accept:"application/json"}},e.prev=1,e.next=4,i.a.get("".concat("http://luxrealadria.com","/api/dataforfilters/"),n);case 4:c=e.sent,t({type:l.j,payload:c.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:l.i,payload:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},u=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:l.V,payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},54:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n.n(a),r=n(24),i=n.n(r),l=n(5),o=n(6),u=(n(54),n(16)),j=n(20),d=n(46),b=n(47),O=n(3),h=n(2),m={access:localStorage.getItem("access"),refresh:localStorage.getItem("refresh"),isAuthenticated:null,user:null,error:""},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case h.d:return Object(O.a)(Object(O.a)({},e),{},{isAuthenticated:!0});case h.N:case h.L:case h.f:return localStorage.setItem("access",c.access),localStorage.setItem("refresh",c.refresh),Object(O.a)(Object(O.a)({},e),{},{isAuthenticated:!0,access:c.access,refresh:c.refresh});case h.U:return Object(O.a)(Object(O.a)({},e),{},{isAuthenticated:!1});case h.X:return Object(O.a)(Object(O.a)({},e),{},{user:c});case h.c:return Object(O.a)(Object(O.a)({},e),{},{isAuthenticated:!1});case h.W:return Object(O.a)(Object(O.a)({},e),{},{user:null});case h.K:case h.e:case h.M:case h.T:case h.O:return localStorage.removeItem("access"),localStorage.removeItem("refresh"),Object(O.a)(Object(O.a)({},e),{},{access:null,refresh:null,isAuthenticated:!1,user:null,error:c});case h.S:case h.R:case h.Q:case h.P:case h.b:case h.a:return Object(O.a)({},e);default:return e}},x={home:[]},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case h.t:return Object(O.a)(Object(O.a)({},e),{},{home:c});case h.s:return Object(O.a)({},e);default:return e}},g={filters:[],values:[{title:"category__title",name:"\u0422\u0438\u043f",value:""},{title:"region__title",name:"\u0420\u0435\u0433\u0438\u043e\u043d",value:""},{title:"statuses__title",name:"\u0421\u0442\u0430\u0442\u0443\u0441",value:""},{title:"purpose__title",name:"\u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435",value:""},{title:"rooms",name:"\u0421\u043f\u0430\u043b\u044c\u043d\u0438",value:""},{title:"closets",name:"\u0421\u0430\u043d\u0443\u0437\u043b\u044b",value:""},{title:"price_range",name:"\u0414\u0438\u0430\u043f\u0430\u0437\u043e\u043d \u0446\u0435\u043d",value:""}],error:null},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case h.j:return Object(O.a)(Object(O.a)({},e),{},{filters:c});case h.V:return Object(O.a)(Object(O.a)({},e),{},{values:e.values.map((function(e){return e.title===c.title?c:e}))});case h.i:return Object(O.a)(Object(O.a)({},e),{},{error:c});default:return e}},v={listing:{},listings:[],error:null},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case h.l:case h.J:case h.z:return Object(O.a)(Object(O.a)({},e),{},{listings:c});case h.H:return Object(O.a)(Object(O.a)({},e),{},{listing:c});case h.k:case h.y:case h.G:case h.I:return Object(O.a)(Object(O.a)({},e),{},{error:c});default:return e}},S={article:{},articles:[],error:null},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case h.h:case h.n:return Object(O.a)(Object(O.a)({},e),{},{articles:c});case h.F:return Object(O.a)(Object(O.a)({},e),{},{article:c});case h.g:case h.m:case h.E:return Object(O.a)(Object(O.a)({},e),{},{error:c});default:return e}},A={properties_page:{},login_page:{},register_page:{},legal_page:{},error_page:{},articles_page:{}},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case h.B:return Object(O.a)(Object(O.a)({},e),{},{properties_page:c});case h.x:return Object(O.a)(Object(O.a)({},e),{},{login_page:c});case h.D:return Object(O.a)(Object(O.a)({},e),{},{register_page:c});case h.v:return Object(O.a)(Object(O.a)({},e),{},{legal_page:c});case h.r:return Object(O.a)(Object(O.a)({},e),{},{error_page:c});case h.p:return Object(O.a)(Object(O.a)({},e),{},{articles_page:c});case h.A:case h.w:case h.C:case h.u:case h.q:case h.o:return Object(O.a)({},e);default:return e}},T=Object(j.combineReducers)({auth:f,home:p,filters:_,listings:E,articles:C,pages:N}),L=[b.a],I=Object(j.createStore)(T,{},Object(d.composeWithDevTools)(j.applyMiddleware.apply(void 0,L))),y=n(19),G=n(8),R=n(9),P=n(11),k=n(10),F=function(e){Object(P.a)(n,e);var t=Object(k.a)(n);function n(){var e;Object(G.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).getNextSibling=function(e,t){var n=e.nextElementSibling;if(!t)return n;for(;n;){if(n.matches(t))return n;n=n.nextElementSibling}},e.triggerChild=function(t){var n="";null!==(n=void 0!==e.getNextSibling(t.target,".submenu")?e.getNextSibling(t.target,".submenu"):null)&&void 0!==n&&""!==n&&(n.classList=n.classList.contains("d-block")?"submenu":"submenu d-block")},e}return Object(R.a)(n,[{key:"render",value:function(){var e=this.props,t=e.contact,n=e.action;return Object(c.jsx)("div",{className:"aside-scroll",children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{className:"menu-item",children:Object(c.jsxs)(l.b,{to:"/",onClick:n,children:[" ","\u0413\u043b\u0430\u0432\u043d\u0430\u044f"," "]})}),Object(c.jsx)("li",{className:"menu-item",children:Object(c.jsxs)(l.b,{to:"/listing",onClick:n,children:[" ","\u041d\u0435\u0434\u0432\u0438\u0436\u0438\u043c\u043e\u0441\u0442\u044c"," "]})}),Object(c.jsx)("li",{className:"menu-item",children:Object(c.jsxs)(l.b,{to:"/articles",onClick:n,children:[" ","\u041f\u043e\u043b\u0435\u0437\u043d\u044b\u0435 \u0441\u0442\u0430\u0442\u044c\u0438"," "]})}),Object(c.jsxs)("li",{className:"menu-item $menu-item-has-children ",onClick:this.triggerChild,children:[Object(c.jsxs)(l.b,{onClick:function(e){return e.preventDefault()},to:"/",children:[" ","\u041e \u043d\u0430\u0441"," "]}),Object(c.jsx)("ul",{className:"submenu",role:"menu",children:Object(c.jsxs)("li",{className:"menu-item",children:[Object(c.jsxs)(l.b,{to:"/legal",onClick:n,children:[" ","\u041f\u0440\u0430\u0432\u043e\u0432\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"," "]}),Object(c.jsxs)(l.b,{to:"/contacts",onClick:n,children:[" ","\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"," "]})]})})]}),Object(c.jsx)("li",{className:"menu-section-title",children:"\u0421\u043e\u0446\u0441\u0435\u0442\u0438"}),Object(c.jsx)("ul",{children:t&&t.socials&&t.socials.map((function(e){return Object(c.jsxs)("li",{className:"menu-item",children:[" ",Object(c.jsxs)(l.b,{to:e.link,children:[" ",Object(c.jsx)("i",{className:e.icon}),e.title]})," "]},e.id)}))}),Object(c.jsx)("li",{className:"menu-section-title",children:"\u041c\u0435\u0441\u0441\u0435\u043d\u0434\u0436\u0435\u0440\u044b"}),Object(c.jsx)("ul",{children:t&&t.messengers&&t.messengers.map((function(e){return Object(c.jsxs)("li",{className:"menu-item",children:[" ",Object(c.jsxs)(l.b,{to:e.link,children:[" ",Object(c.jsx)("i",{className:e.icon}),e.title]})," "]},e.id)}))})]})})}}]),n}(a.Component),U=n(26),w=function(e){Object(P.a)(n,e);var t=Object(k.a)(n);function n(e){var c;return Object(G.a)(this,n),(c=t.call(this,e)).state={navtoggle:!1},c.navtoggleClass=c.navtoggleClass.bind(Object(U.a)(c)),c}return Object(R.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",(function(){e.setState({isTop:window.scrollY>49})}),!1)}},{key:"navtoggleClass",value:function(){this.setState({navtoggle:!this.state.navtoggle})}},{key:"render",value:function(){return Object(c.jsx)(a.Fragment,{})}}]),n}(a.Component),D=n(23),z=n.n(D),H=function(e){var t=e.contacts;return Object(c.jsx)("div",{className:"top-header",children:Object(c.jsxs)("div",{className:"top-header-inner",children:[Object(c.jsxs)("ul",{className:"social-media",children:[t&&t.socials&&t.socials.map((function(e){return Object(c.jsxs)("li",{children:[" ",Object(c.jsxs)("a",{href:e.link,target:"_blank",rel:"noreferrer",className:"h-100",children:[" ",Object(c.jsx)("i",{className:"".concat(e.icon)})]})]},e.id)})),t&&t.email&&Object(c.jsxs)("li",{children:[" ",Object(c.jsxs)("a",{href:"mailto:".concat(t.email),target:"_blank",rel:"noreferrer",children:[" ",Object(c.jsx)("i",{className:"fas fa-envelope pr-2"}),t.email]})]})]}),Object(c.jsx)("ul",{className:"top-header-nav",children:Object(c.jsxs)("li",{children:[" ",Object(c.jsx)(l.b,{to:"/admin/",children:" \u0412\u0445\u043e\u0434 \u0434\u043b\u044f \u0430\u0433\u0435\u043d\u0442\u043e\u0432"})," "]})})]})})},B=function(e){var t=e.logo,n=e.className,s=Object(a.useState)(!1),r=Object(y.a)(s,2),i=r[0],l=r[1];return Object(a.useEffect)((function(){t&&t.img&&l(!0)}),[t]),Object(c.jsx)("div",{className:"logo-wrapper".concat(n?" "+n:""),children:t&&i?Object(c.jsx)("img",{src:t.img,alt:t.name}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"main-text",children:t&&t.name?t.name:"LuxRealAdria"}),Object(c.jsx)("div",{className:"sub-text",children:t&&t.subtext?t.subtext:"Real Estate Agency"})]})})},M=function(e){Object(P.a)(n,e);var t=Object(k.a)(n);function n(){return Object(G.a)(this,n),t.apply(this,arguments)}return Object(R.a)(n,[{key:"render",value:function(){return Object(c.jsxs)(a.Fragment,{children:[Object(c.jsx)(l.b,{className:"navbar-brand",to:"/",children:Object(c.jsx)(B,{})}),Object(c.jsxs)("ul",{className:"navbar-nav",children:[Object(c.jsx)("li",{className:"menu-item",children:Object(c.jsx)(l.b,{to:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),Object(c.jsx)("li",{className:"menu-item",children:Object(c.jsx)(l.b,{to:"/listing",children:"\u041d\u0435\u0434\u0432\u0438\u0436\u0438\u043c\u043e\u0441\u0442\u044c"})}),Object(c.jsx)("li",{className:"menu-item",children:Object(c.jsx)(l.b,{to:"/articles",children:"\u041f\u043e\u043b\u0435\u0437\u043d\u044b\u0435 \u0441\u0442\u0430\u0442\u044c\u0438"})}),Object(c.jsxs)("li",{className:"menu-item menu-item-has-children",children:[Object(c.jsx)(l.b,{to:"#",children:"\u041e \u043d\u0430\u0441"}),Object(c.jsxs)("ul",{className:"submenu",children:[Object(c.jsxs)("li",{className:"menu-item",children:[" ",Object(c.jsx)(l.b,{to:"/legal",children:"\u041f\u0440\u0430\u0432\u043e\u0432\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"})," "]}),Object(c.jsxs)("li",{className:"menu-item",children:[" ",Object(c.jsx)(l.b,{to:"/contacts",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})," "]})]})]})]})]})}}]),n}(a.Component),W=function(e){var t=e.navtoggleClass,n=e.contacts,a=function(){return n&&n.phone_basic?Object(c.jsx)("div",{children:Object(c.jsx)("a",{href:"tel:".concat(n.phone_basic),style:{color:"#000000",fontSize:20},children:n.phone_basic})}):Object(c.jsx)("div",{})},s=function(){return n&&n.messengers?Object(c.jsx)("div",{className:"pr-2",children:n&&n.messengers&&n.messengers.map((function(e){return Object(c.jsx)("a",{href:e.link,style:{color:"#000000",fontSize:20},children:Object(c.jsx)("i",{className:"".concat(e.icon," pr-2")})},e.id)}))}):Object(c.jsx)("div",{})};return Object(c.jsxs)("nav",{className:"navbar",children:[Object(c.jsx)(M,{}),Object(c.jsxs)("div",{className:"header-controls",children:[Object(c.jsxs)("ul",{className:"header-controls-inner d-none d-lg-flex",children:[Object(c.jsx)("li",{children:Object(c.jsx)(s,{})}),Object(c.jsx)("li",{children:Object(c.jsx)(a,{})})]}),Object(c.jsxs)("div",{className:"aside-toggler aside-trigger",onClick:t,children:[Object(c.jsx)("span",{}),Object(c.jsx)("span",{}),Object(c.jsx)("span",{})]})]})]})},Y=function(e){Object(P.a)(n,e);var t=Object(k.a)(n);function n(){return Object(G.a)(this,n),t.apply(this,arguments)}return Object(R.a)(n,[{key:"render",value:function(){var e=this.props.home_page,t=this.state.isTop?"sticky":"";return Object(c.jsxs)(a.Fragment,{children:[Object(c.jsxs)("aside",{className:z()("main-aside",{open:this.state.navtoggle}),children:[Object(c.jsx)("div",{className:"aside-title",children:Object(c.jsxs)("div",{className:"aside-controls aside-trigger",children:[Object(c.jsx)("h4",{children:"Menu"}),Object(c.jsxs)("div",{className:"close-btn close-dark",onClick:this.navtoggleClass,children:[Object(c.jsx)("span",{}),Object(c.jsx)("span",{})]})]})}),Object(c.jsx)(F,{})]}),Object(c.jsx)("div",{className:"aside-overlay aside-trigger",onClick:this.navtoggleClass}),Object(c.jsxs)("header",{className:"main-header header-fw can-sticky header-1 ".concat(t),children:[Object(c.jsx)(H,{contacts:e.contact}),Object(c.jsx)(W,{navtoggleClass:this.navtoggleClass,contacts:e.contact})]})]})}}]),n}(w),V=Object(u.b)((function(e){return{home_page:e.home.home}}))(Y),J=function(e){Object(P.a)(n,e);var t=Object(k.a)(n);function n(){return Object(G.a)(this,n),t.apply(this,arguments)}return Object(R.a)(n,[{key:"render",value:function(){var e=this.state.isTop,t=e?"sticky":"",n=this.props.home_page;return Object(c.jsxs)(a.Fragment,{children:[Object(c.jsxs)("aside",{className:z()("main-aside",{open:this.state.navtoggle}),children:[Object(c.jsx)("div",{className:"aside-title",children:Object(c.jsxs)("div",{className:"aside-controls aside-trigger",children:[Object(c.jsx)("h4",{children:"\u041c\u0435\u043d\u044e"}),Object(c.jsxs)("div",{className:"close-btn close-dark",onClick:this.navtoggleClass,children:[Object(c.jsx)("span",{}),Object(c.jsx)("span",{})]})]})}),n&&Object(c.jsx)(F,{contact:n.contact,action:this.navtoggleClass})]}),Object(c.jsx)("div",{className:"aside-overlay aside-trigger",onClick:this.navtoggleClass}),Object(c.jsxs)("header",{className:"main-header header-fw can-sticky ".concat(t),children:[Object(c.jsx)(H,{}),Object(c.jsx)(W,{navtoggleClass:this.navtoggleClass,user:this.props.user})]}),Object(c.jsx)("div",{style:{height:e?"127px":"0px"}})]})}}]),n}(w),K=Object(u.b)((function(e){return{home_page:e.home.home}}))(J),q=function(e){Object(P.a)(n,e);var t=Object(k.a)(n);function n(){return Object(G.a)(this,n),t.apply(this,arguments)}return Object(R.a)(n,[{key:"render",value:function(){var e=this.props.home_page;return Object(c.jsxs)(a.Fragment,{children:[Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("div",{className:"row",children:Object(c.jsxs)("div",{className:"col-lg-6 col-md-6 col-sm-12 d-flex align-items-center",children:[Object(c.jsx)("div",{className:"footer-logo text-white mr-5",children:Object(c.jsx)(B,{className:"text-white"})}),Object(c.jsx)("div",{dangerouslySetInnerHTML:{__html:e.footer_text}})]})}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col-lg-6 col-md-6 col-sm-12 footer-widget",children:Object(c.jsxs)("ul",{className:"social-media",children:[e.contact&&e.contact.socials&&e.contact.socials.map((function(e){return Object(c.jsxs)("li",{children:[" ",Object(c.jsx)(l.b,{to:e.link,children:Object(c.jsx)("i",{className:"".concat(e.icon," pr-2")})})]},e.id)})),e.contact&&e.contact.email&&Object(c.jsxs)("li",{children:[" ",Object(c.jsxs)(l.b,{to:"mailto:".concat(e.contact.email),children:[" ",Object(c.jsx)("i",{className:"fas fa-envelope"})," "]})," "]})]})})})]}),Object(c.jsx)("div",{className:"footer-bottom",children:Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col-lg-7",children:Object(c.jsxs)("p",{className:"m-0",children:["\xa9 2021 - ",Object(c.jsx)(l.b,{to:"/",children:"LuxRealAdria"})]})})})})})]})}}]),n}(a.Component),Q=Object(u.b)((function(e){return{home_page:e.home.home}}))(q),X=function(e){Object(P.a)(n,e);var t=Object(k.a)(n);function n(){return Object(G.a)(this,n),t.apply(this,arguments)}return Object(R.a)(n,[{key:"render",value:function(){return Object(c.jsx)("footer",{className:"acr-footer footer-dark",children:Object(c.jsx)(Q,{})})}}]),n}(a.Component),$=n(35),Z=n(17),ee=n.n(Z),te=n(21),ne=n(25),ce=n.n(ne);function ae(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var se=Object(u.b)(null,{load_homepage:function(){return function(){var e=Object(te.a)(ee.a.mark((function e(t){var n,c;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{"Content-Type":"application/json",Accept:"application/json"}},e.prev=1,e.next=4,ce.a.get("".concat("http://luxrealadria.com","/api/homepage/"),n);case 4:c=e.sent,t({type:h.t,payload:c.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:h.s});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},get_all_filters:$.a})((function(e){var t=e.load_homepage,n=e.get_all_filters,s=e.children,r=function(){var e=Object(a.useState)(ae()),t=Object(y.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){function e(){c(ae())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n}().width,i=Object(a.useState)(Object(c.jsx)(V,{})),l=Object(y.a)(i,2),o=l[0],u=l[1];return Object(a.useEffect)((function(){u(r<1200?Object(c.jsx)(K,{}):Object(c.jsx)(V,{}))}),[r]),Object(a.useEffect)((function(){t(),n()}),[]),Object(c.jsxs)(a.Fragment,{children:[o,s,Object(c.jsx)(X,{})]})})),re=s.a.lazy((function(){return n.e(14).then(n.bind(null,144))})),ie=s.a.lazy((function(){return Promise.all([n.e(1),n.e(0),n.e(2),n.e(15)]).then(n.bind(null,148))})),le=s.a.lazy((function(){return n.e(6).then(n.bind(null,152))})),oe=s.a.lazy((function(){return n.e(10).then(n.bind(null,151))})),ue=s.a.lazy((function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,153))})),je=s.a.lazy((function(){return n.e(7).then(n.bind(null,154))})),de=s.a.lazy((function(){return n.e(8).then(n.bind(null,155))})),be=s.a.lazy((function(){return Promise.all([n.e(1),n.e(2),n.e(12)]).then(n.bind(null,149))})),Oe=s.a.lazy((function(){return Promise.all([n.e(1),n.e(0),n.e(16),n.e(13)]).then(n.bind(null,150))})),he=s.a.lazy((function(){return n.e(9).then(n.bind(null,156))})),me=function(){return Object(c.jsx)(u.a,{store:I,children:Object(c.jsx)(l.a,{children:Object(c.jsxs)(a.Suspense,{fallback:Object(c.jsx)("div",{}),children:[Object(c.jsx)(re,{}),Object(c.jsxs)(o.d,{children:[Object(c.jsx)(o.b,{exact:!0,path:"/coming-soon",component:ue}),Object(c.jsx)(o.b,{path:["/articles","/articles/:id","/listing","/listing/:id","/legal","/contacts","/"],children:Object(c.jsx)(se,{children:Object(c.jsxs)(o.d,{children:[Object(c.jsx)(o.b,{exact:!0,path:"/",component:ie}),Object(c.jsx)(o.b,{exact:!0,path:"/articles",component:le}),Object(c.jsx)(o.b,{exact:!0,path:"/articles/:id",component:oe}),Object(c.jsx)(o.b,{exact:!0,path:"/listing",component:be}),Object(c.jsx)(o.b,{exact:!0,path:"/listing/:id",component:Oe}),Object(c.jsx)(o.b,{path:"/legal",component:de}),Object(c.jsx)(o.b,{path:"/contacts",component:he}),Object(c.jsx)(o.b,{component:je})]})})})]})]})})})},fe=function(e){e&&e instanceof Function&&n.e(17).then(n.bind(null,146)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};n(78),n(79),n(80),n(81),n(82),n(83),n(84),n(85),n(86),n(87);i.a.render(Object(c.jsx)(l.a,{children:Object(c.jsx)(me,{})}),document.getElementById("root")),fe()}},[[88,4,5]]]);
//# sourceMappingURL=main.98cf6a4c.chunk.js.map