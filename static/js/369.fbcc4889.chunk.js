"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[369],{6369:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r,a,c=n(885),u=n(2791),s=n(6871),o=n(273),i=n(168),p=n(6444),l=p.ZP.ul(r||(r=(0,i.Z)([""]))),f=p.ZP.li(a||(a=(0,i.Z)([""]))),h=n(184);var v=function(){var e,t=(0,u.useState)([]),n=(0,c.Z)(t,2),r=n[0],a=n[1],i=(0,s.UO)().movieId;return(0,u.useEffect)((function(){(0,o.tx)(i).then((function(e){var t;return a(null!==(t=null===e||void 0===e?void 0:e.results)&&void 0!==t?t:[])}))}),[i]),(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("div",{children:[r.length>0&&(0,h.jsx)(l,{children:r.map((function(e){var t=e.id,n=e.content,r=e.author;return(0,h.jsxs)(f,{children:[(0,h.jsx)("h3",{children:r}),(0,h.jsx)("p",{children:n})]},t)}))}),null!==(e=0===r.length)&&void 0!==e?e:(0,h.jsx)("p",{children:"There are no reviews for this movie yet."})]})})}},273:function(e,t,n){n.d(t,{Df:function(){return i},IR:function(){return l},M1:function(){return d},Pg:function(){return h},tx:function(){return m}});var r=n(5861),a=n(7757),c=n.n(a),u=n(4569),s=n.n(u),o="f0766e9050bf27a2816eaba7638d5b74";function i(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("trending/movie/day?api_key=".concat(o));case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function l(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams({api_key:o,query:t,page:1}),e.prev=1,e.next=4,s().get("search/movie?".concat(n));case 4:return r=e.sent,a=r.data,e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function h(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("movie/".concat(t,"?api_key=").concat(o));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function d(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("movie/".concat(t,"/credits?api_key=").concat(o));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function m(e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("movie/".concat(t,"/reviews?api_key=").concat(o));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}s().defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=369.fbcc4889.chunk.js.map