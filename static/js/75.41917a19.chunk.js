"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[75],{5240:function(t,e,n){n.d(e,{Z:function(){return m}});var r,a,c,u,s=n(168),o=n(6444),i=n(501),p=o.ZP.ul(r||(r=(0,s.Z)([""]))),f=(0,o.ZP)(i.rU)(a||(a=(0,s.Z)([""]))),l=o.ZP.img(c||(c=(0,s.Z)([""]))),v=o.ZP.h2(u||(u=(0,s.Z)([""]))),h=n(6871),d=n(184);var m=function(t){var e=t.items,n=(0,h.TH)();return(0,d.jsx)(p,{children:e.map((function(t){var e=t.id,r=t.title,a=t.poster_path;return(0,d.jsx)("li",{children:(0,d.jsxs)(f,{to:"/movies/".concat(e),state:{from:n},children:[(0,d.jsx)(l,{src:"https://image.tmdb.org/t/p/w300".concat(a),alt:r}),(0,d.jsx)(v,{children:r})]})},e)}))})}},6075:function(t,e,n){n.r(e);var r=n(885),a=n(2791),c=n(5240),u=n(273),s=n(184);e.default=function(){var t=(0,a.useState)([]),e=(0,r.Z)(t,2),n=e[0],o=e[1];return(0,a.useEffect)((function(){(0,u.Df)().then((function(t){var e;return o(null!==(e=null===t||void 0===t?void 0:t.results)&&void 0!==e?e:[])}))}),[]),(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{children:"Popular now"}),(0,s.jsx)(c.Z,{items:n})]})}},273:function(t,e,n){n.d(e,{Df:function(){return i},IR:function(){return f},M1:function(){return d},Pg:function(){return v},tx:function(){return g}});var r=n(5861),a=n(7757),c=n.n(a),u=n(4569),s=n.n(u),o="f0766e9050bf27a2816eaba7638d5b74";function i(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s().get("trending/movie/day?api_key=".concat(o));case 3:return e=t.sent,n=e.data,t.abrupt("return",n);case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function f(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function t(e){var n,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new URLSearchParams({api_key:o,query:e,page:1}),t.prev=1,t.next=4,s().get("search/movie?".concat(n));case 4:return r=t.sent,a=r.data,t.abrupt("return",a);case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function v(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s().get("movie/".concat(e,"?api_key=").concat(o));case 3:return n=t.sent,r=n.data,t.abrupt("return",r);case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function d(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s().get("movie/".concat(e,"/credits?api_key=").concat(o));case 3:return n=t.sent,r=n.data,t.abrupt("return",r);case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function g(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s().get("movie/".concat(e,"/reviews?api_key=").concat(o));case 3:return n=t.sent,r=n.data,t.abrupt("return",r);case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}s().defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=75.41917a19.chunk.js.map