"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[247],{247:function(e,t,n){n.r(t);var a=n(861),i=n(439),c=n(757),r=n.n(c),s=n(791),h=n(689),o=n(184),u={header:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjU0YzMxNmYxNjZiMmE1OTEzNzkxZThiM2Y2M2E0YSIsInN1YiI6IjY0NzBkZmZhYzVhZGE1MDBjMWEzNzhmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fljmrABHLVGUf2e0aWKvdHeTeR0ruZNkP26DhsQLuYM",accept:"application/json"}};t.default=function(){var e=(0,h.UO)().movieId,t="https://api.themoviedb.org/3/movie/".concat(e,"/credits?language=en-US&api_key=").concat("ef54c316f166b2a5913791e8b3f63a4a"),n=(0,s.useState)({}),c=(0,i.Z)(n,2),l=c[0].cast,p=c[1],f=(0,s.useState)(!0),d=(0,i.Z)(f,2),m=d[0],j=d[1];return(0,s.useEffect)((function(){function e(){return e=(0,a.Z)(r().mark((function e(){var n,a;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t),u);case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,p(a),j(!1);case 8:case"end":return e.stop()}}),e)}))),e.apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),null!==l&&void 0!==l&&l.length?(0,o.jsx)("ul",{children:l.map((function(e){var t=e.name,n=e.profile_path,a=e.character;return(0,o.jsxs)("li",{children:[(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/w500"+(n||"/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"),alt:t,width:100}),(0,o.jsx)("p",{children:t}),(0,o.jsx)("p",{children:a})]},t)}))}):m?(0,o.jsx)("p",{children:"Loading... Please, wait"}):(0,o.jsx)("p",{children:"We do not have any cast"})}}}]);
//# sourceMappingURL=247.073e7a32.chunk.js.map