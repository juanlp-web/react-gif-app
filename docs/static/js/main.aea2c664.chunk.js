(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{18:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(7),r=n.n(c),i=n(2),s=n(9),o=(n(15),n(0)),u=function(t){var e=t.setcategories,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],u=c[1];return Object(o.jsx)("form",{onSubmit:function(t){t.preventDefault(),r.trim().length>2&&(e((function(t){return[r].concat(Object(s.a)(t))})),u(""))},children:Object(o.jsx)("input",{type:"text",value:r,onChange:function(t){u(t.target.value)}})})},j=n(10),d=n(6),l=n.n(d),f=n(8),b=function(){var t=Object(f.a)(l.a.mark((function t(e){var n,a,c,r,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"bBem1QwqYR0BrKewQd7NwDiGr6LfFktF","https://api.giphy.com/v1/gifs/search",n="".concat("https://api.giphy.com/v1/gifs/search","?q=").concat(e,"&api_key=").concat("bBem1QwqYR0BrKewQd7NwDiGr6LfFktF","&limit=10"),console.log(n),t.next=6,fetch(n);case 6:return a=t.sent,t.next=9,a.json();case 9:return c=t.sent,r=c.data,i=r.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(t){t.id;var e=t.title,n=t.url;return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("img",{src:n,alt:e}),Object(o.jsx)("p",{children:e})]})},m=function(t){var e=t.category,n=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){console.log(t),b(t).then((function(t){setTimeout((function(){r({data:t,loading:!1})}))}))}),[t]),c}(e),c=n.data,r=n.loading;return console.log(r),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h3",{children:e}),Object(o.jsxs)("div",{className:"card-grid animate__animated animate__flash",children:["  ",r?"Cargando":""," "]}),Object(o.jsx)("div",{className:"card-grid animate__animated animate__backInLeft",children:c.map((function(t){return Object(o.jsx)(p,Object(j.a)({},t),t.id)}))})]})},h=function(){var t=Object(a.useState)(["Dragon Ball"]),e=Object(i.a)(t,2),n=e[0],c=e[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{children:"GiftExpertApp"}),Object(o.jsx)(u,{setcategories:c}),Object(o.jsx)("hr",{}),Object(o.jsx)("ol",{children:n.map((function(t){return Object(o.jsx)(m,{category:t},t)}))})]})};n(18);r.a.render(Object(o.jsx)(h,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.aea2c664.chunk.js.map