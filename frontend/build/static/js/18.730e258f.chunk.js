(this.webpackJsonpacres=this.webpackJsonpacres||[]).push([[18],{139:function(e){e.exports=JSON.parse('[{"id":1,"gridimg":"assets/img/listings/1.jpg","listimg":"assets/img/listings-list/1.jpg","title":"Iris Watson, Frederick Nebraska 20620","authorimg":"assets/img/people/2.jpg","authorname":"Heather Mclayn","postdate":"March 3, 2020","monthlyprice":3500,"text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","beds":3,"bathrooms":2,"area":2499,"star":true,"sale":false,"pending":true,"rental":false,"recent":true},{"id":2,"gridimg":"assets/img/listings/2.jpg","listimg":"assets/img/listings-list/2.jpg","title":"Theodore Lowe, Azusa New York 39531","authorimg":"assets/img/people/1.jpg","authorname":"Randy Blue","postdate":"March 3, 2020","monthlyprice":3500,"text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","beds":3,"bathrooms":2,"area":2499,"star":true,"sale":true,"pending":false,"rental":false,"recent":true},{"id":3,"gridimg":"assets/img/listings/3.jpg","listimg":"assets/img/listings-list/3.jpg","title":"Iris Watson, Frederick Nebraska 20620","authorimg":"assets/img/people/2.jpg","authorname":"Heather Mclayn","postdate":"March 3, 2020","monthlyprice":3500,"text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","beds":3,"bathrooms":2,"area":2499,"star":false,"sale":false,"pending":true,"rental":false,"recent":true},{"id":4,"gridimg":"assets/img/listings/4.jpg","listimg":"assets/img/listings-list/4.jpg","title":"Iris Watson, Frederick Nebraska 20620","authorimg":"assets/img/people/2.jpg","authorname":"Heather Mclayn","postdate":"March 3, 2020","monthlyprice":3500,"text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","beds":3,"bathrooms":2,"area":2499,"star":false,"sale":true,"pending":false,"rental":false,"recent":true},{"id":5,"gridimg":"assets/img/listings/5.jpg","listimg":"assets/img/listings-list/5.jpg","title":"Iris Watson, Frederick Nebraska 20620","authorimg":"assets/img/people/2.jpg","authorname":"Heather Mclayn","postdate":"March 3, 2020","monthlyprice":3500,"text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","beds":3,"bathrooms":2,"area":2499,"star":false,"sale":true,"pending":false,"rental":false,"recent":false},{"id":6,"gridimg":"assets/img/listings/1.jpg","listimg":"assets/img/listings-list/6.jpg","title":"Iris Watson, Frederick Nebraska 20620","authorimg":"assets/img/people/4.jpg","authorname":"Mike Stanly","postdate":"March 3, 2020","monthlyprice":3500,"text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","beds":3,"bathrooms":2,"area":2499,"star":false,"sale":false,"pending":false,"rental":true,"recent":false},{"id":7,"gridimg":"assets/img/listings/6.jpg","listimg":"assets/img/listings-list/7.jpg","title":"Iris Watson, Frederick Nebraska 20620","authorimg":"assets/img/people/2.jpg","authorname":"Heather Mclayn","postdate":"March 3, 2020","monthlyprice":3500,"text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","beds":3,"bathrooms":2,"area":2499,"star":true,"sale":false,"pending":true,"rental":false,"recent":false},{"id":8,"gridimg":"assets/img/listings/7.jpg","listimg":"assets/img/listings-list/8.jpg","title":"Theodore Lowe, Azusa New York 39531","authorimg":"assets/img/people/1.jpg","authorname":"Randy Blue","postdate":"March 3, 2020","monthlyprice":3500,"text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","beds":3,"bathrooms":2,"area":2499,"star":true,"sale":true,"pending":false,"rental":false,"recent":false}]')},194:function(e){e.exports=JSON.parse('[{"id":1,"img":"assets/img/agents/1.jpg","name":"Randy Blue","post":"Expert at Company","text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,","star":true},{"id":2,"img":"assets/img/agents/2.jpg","name":"Rinda Flow","post":"Expert at Company","text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,","star":false},{"id":3,"img":"assets/img/agents/3.jpg","name":"Gina Mconihon","post":"Expert at Company","text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,","star":false},{"id":4,"img":"assets/img/agents/4.jpg","name":"Oliver Rasky","post":"Expert at Company","text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,","star":true}]')},217:function(e,t,s){"use strict";s.r(t);var i=s(1),a=s(3),n=s(10),r=s(11),l=s(5),c=s(8),m=s(129),g=s.n(m),d=(s(69),s(133)),o=(s(70),s(33)),p=s(17),h=s(194),j=s(139),u=s(149),b=s(46),x=s.n(b),y=s(144),f=function(e){Object(n.a)(s,e);var t=Object(r.a)(s);function s(){var e;return Object(i.a)(this,s),(e=t.call(this)).state={items:h,currentPage:1,itemsPerPage:4,loading:!1},e.handleClick=e.handleClick.bind(Object(o.a)(e)),e}return Object(a.a)(s,[{key:"handleClick",value:function(e){var t=this,s=e.target.closest(".pagination-content");s&&s.scrollIntoView(),this.setState({loading:!0}),setTimeout((function(){t.setState({currentPage:Number(e.target.getAttribute("data-page")),loading:!1})}),2e3)}},{key:"render",value:function(){for(var e=this,t=this.state,s=t.items,i=t.currentPage,a=t.itemsPerPage,n=i*a,r=n-a,m=s.slice(r,n).map((function(e,t){return Object(l.jsx)("div",{className:"col-lg-6",children:Object(l.jsxs)("div",{className:"acr-agent",children:[!0===e.star?Object(l.jsx)("div",{className:"listing-badge featured",children:Object(l.jsx)("i",{className:"fas fa-star"})}):"",Object(l.jsxs)("div",{className:"acr-dots-wrapper acr-agent-thumb",children:[Object(l.jsx)("div",{className:"acr-dots"}),Object(l.jsx)(p.b,{to:"/agent-details",children:Object(l.jsx)("img",{src:"/"+e.img,alt:"agent"})})]}),Object(l.jsxs)("div",{className:"acr-agent-body",children:[Object(l.jsxs)("h6",{children:[" ",Object(l.jsx)(p.b,{to:"/agent-details",children:e.name})," "]}),Object(l.jsx)("span",{children:e.post}),Object(l.jsx)("p",{children:e.text}),Object(l.jsx)(p.b,{to:"/agent-details",className:"btn-custom secondary btn-sm",children:"View Profile"})]})]})},t)})),g=[],d=1;d<=Math.ceil(s.length/a);d++)g.push(d);var o=g.map((function(t){var s=e.state.currentPage===t?"active":"";return Object(l.jsx)(c.Fragment,{children:g.length>1?Object(l.jsx)("li",{className:x()("page-item",{active:s}),children:Object(l.jsx)(p.b,{className:"page-link",to:"#","data-page":t,onClick:e.handleClick,children:t})}):""},t)}));return Object(l.jsx)("div",{className:"section pagination-content",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"col-lg-8",children:[Object(l.jsx)("div",{className:"row",children:!1===this.state.loading?m:Object(l.jsx)(y.a,{})}),g.length>1?Object(l.jsxs)("ul",{className:"pagination",children:[g.length>1&&1!==this.state.currentPage?Object(l.jsx)("li",{className:"page-item",children:Object(l.jsx)(p.b,{className:"page-link",to:"#","data-page":this.state.currentPage-1,onClick:this.handleClick,children:Object(l.jsx)("i",{className:"fas fa-chevron-left"})})}):"",o,g.length>1&&this.state.currentPage!==g.length?Object(l.jsx)("li",{className:"page-item",children:Object(l.jsx)(p.b,{className:"page-link",to:"#","data-page":parseInt(this.state.currentPage+1),onClick:this.handleClick,children:Object(l.jsx)("i",{className:"fas fa-chevron-right"})})}):""]}):""]}),Object(l.jsx)("div",{className:"col-lg-4",children:Object(l.jsxs)("div",{className:"sidebar",children:[Object(l.jsxs)("div",{className:"sidebar-widget",children:[Object(l.jsx)("h5",{children:"Recent Listings"}),j.filter((function(e){return!0===e.recent})).slice(0,4).map((function(e,t){return Object(l.jsxs)("div",{className:"listing listing-list",children:[Object(l.jsx)("div",{className:"listing-thumbnail",children:Object(l.jsx)(p.b,{to:"/listing-details-v1",children:Object(l.jsx)("img",{src:"/"+e.gridimg,alt:"listing"})})}),Object(l.jsxs)("div",{className:"listing-body",children:[Object(l.jsxs)("h6",{className:"listing-title",children:[" ",Object(l.jsx)(p.b,{to:"/listing-details-v1",title:e.title,children:e.title})," "]}),Object(l.jsxs)("span",{className:"listing-price",children:[(new Intl.NumberFormat).format(e.monthlyprice.toFixed(2)),"$ ",Object(l.jsx)("span",{children:"/month"})," "]})]})]},t)}))]}),Object(l.jsxs)("div",{className:"sidebar-widget sidebar-list",children:[Object(l.jsx)("h5",{children:"Popular Categories"}),Object(l.jsx)("ul",{children:u.b.map((function(e,t){return Object(l.jsx)("li",{children:Object(l.jsxs)(p.b,{to:"/blog-single",children:[" ",e.title," ",Object(l.jsxs)("span",{children:["(",e.count,")"]}),Object(l.jsx)("i",{className:"fas fa-chevron-right"})]})},t)}))})]})]})})]})})})}}]),s}(c.Component),O=function(e){Object(n.a)(s,e);var t=Object(r.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(a.a)(s,[{key:"render",value:function(){return Object(l.jsxs)(c.Fragment,{children:[Object(l.jsxs)(g.a,{children:[Object(l.jsx)("title",{children:"Acres - Real Estate React Template | Agent Archive"}),Object(l.jsx)("meta",{name:"description",content:"#"})]}),Object(l.jsx)(d.a,{breadcrumb:{pagename:"\u0421\u043f\u0438\u0441\u043e\u043a \u0430\u0433\u0435\u043d\u0442\u043e\u0432"}}),Object(l.jsx)(f,{})]})}}]),s}(c.Component);t.default=O}}]);
//# sourceMappingURL=18.730e258f.chunk.js.map