"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[160],{160:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var r=n(439),a=n(861),s=n(757),c=n.n(s),i=n(791),u=n(87),o=n(689),l="Search_link__oBVAh",h="Search_list__T+97k",f="Search_searchButton__8Jp1t",p=n(184),v="https://api.themoviedb.org/3/search/movie?language=en-US&api_key=".concat("ef54c316f166b2a5913791e8b3f63a4a"),d={header:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjU0YzMxNmYxNjZiMmE1OTEzNzkxZThiM2Y2M2E0YSIsInN1YiI6IjY0NzBkZmZhYzVhZGE1MDBjMWEzNzhmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fljmrABHLVGUf2e0aWKvdHeTeR0ruZNkP26DhsQLuYM",accept:"application/json"}};function m(e){return x.apply(this,arguments)}function x(){return(x=(0,a.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v,"&query=").concat(t.trim(),"&page=1"),d);case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r.results);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var j=function(){var e,t,n=(0,i.useState)([]),s=(0,r.Z)(n,2),x=s[0],j=s[1],y=(0,u.lr)(""),b=(0,r.Z)(y,2),k=b[0],N=b[1],Z=null!==(e=k.get("movie"))&&void 0!==e?e:"",g=(0,o.TH)();function z(){return(z=(0,a.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==Z.trim()){e.next=5;break}return N({}),j([{name:"Enter movie title "}]),e.abrupt("return");case 5:return e.next=7,m(Z);case 7:n=e.sent,j(n);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,i.useEffect)((function(){var e;if(null!==g&&void 0!==g&&null!==(e=g.state)&&void 0!==e&&e.search){var t=function(){var e=(0,a.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v,"&query=").concat(n,"&page=1"),d);case 2:return t=e.sent,e.next=5,t.json();case 5:r=e.sent,j(null===r||void 0===r?void 0:r.results);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n=g.state.search.slice(g.state.search.indexOf("=")+1,g.state.search.length);t()}}),[null===g||void 0===g||null===(t=g.state)||void 0===t?void 0:t.search]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("form",{onSubmit:function(e){return z.apply(this,arguments)},children:[(0,p.jsxs)("label",{children:[(0,p.jsx)("h2",{children:"Search your favorite movies"}),(0,p.jsx)("input",{type:"text",placeholder:"search",onChange:function(e){N({movie:e.target.value})}})]}),(0,p.jsx)("button",{className:f,type:"submit",children:"search"})]}),(0,p.jsx)("ol",{className:h,children:x.length?x.map((function(e){var t=e.name,n=e.id,r=e.title;return(0,p.jsx)(u.rU,{to:"".concat(n),className:l,state:g,children:null!==r&&void 0!==r?r:t},n)})):(0,p.jsx)("p",{className:l,children:"Not found"})})]})};var y=function(){return(0,p.jsx)(j,{})}}}]);
//# sourceMappingURL=160.7a84b624.chunk.js.map