(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[8],{102:function(n,t,e){"use strict";e.d(t,"b",(function(){return a})),e.d(t,"a",(function(){return u})),e.d(t,"c",(function(){return o})),e.d(t,"d",(function(){return l}));var r=e(14),i=function(n){return n.shop},c=Object(r.a)([i],(function(n){return n.collections})),a=Object(r.a)([c],(function(n){return n?Object.keys(n).map((function(t){return n[t]})):[]})),u=function(n){return Object(r.a)([c],(function(t){return t?t[n]:null}))},o=Object(r.a)([i],(function(n){return n.isFetching})),l=Object(r.a)([i],(function(n){return!!n.collections}))},104:function(n,t,e){"use strict";var r=e(50),i=e(0),c=e.n(i),a=e(52);t.a=function(n){return function(t){var e=t.isLoading,i=Object(r.a)(t,["isLoading"]);return e?c.a.createElement(a.a,null):c.a.createElement(n,i)}}},105:function(n,t,e){"use strict";e(117);var r=e(0),i=e.n(r),c=e(22),a=e(23),u=(e(12),e(8)),o=e(9),l=e(49);function d(){var n=Object(u.a)(["\n  width: 10%;\n  text-align: right;\n"]);return d=function(){return n},n}function f(){var n=Object(u.a)(["\n  width: 90%;\n  margin-bottom: 15px;\n"]);return f=function(){return n},n}function s(){var n=Object(u.a)(["\n  width: 100%;\n  height: 5%;\n  display: flex;\n  justify-content: space-between;\n  font-size: 18px;\n"]);return s=function(){return n},n}function m(){var n=Object(u.a)(["\n  width: 100%;\n  height: 95%;\n  border-style: solid;\n  border-width: 1px;\n  background-size: cover;\n  background-position: center;\n  margin-bottom: 5px;\n  background-image: ",";\n"]);return m=function(){return n},n}function p(){var n=Object(u.a)(["\n  width: 80%;\n  opacity: 0.7;\n  position: absolute;\n  top: 255px;\n  display: none;\n  @media screen and (max-width: 800px) {\n    display: block;\n    opacity: 0.9;\n    min-width: unset;\n    padding: 0 10px;\n  }\n"]);return p=function(){return n},n}function b(){var n=Object(u.a)(["\n  width: 22vw;\n  display: flex;\n  flex-direction: column;\n  height: 350px;\n  align-items: center;\n  position: relative;\n  &:hover {\n    .image {\n      opacity: 0.8;\n    }\n    button {\n      opacity: 0.85;\n      display: flex;\n    }\n  }\n  @media screen and (max-width: 800px) {\n    width: 40vw;\n    &:hover {\n      .image {\n        opacity: unset;\n      }\n      button {\n        opacity: unset;\n      }\n    }\n  }\n"]);return b=function(){return n},n}var g=o.c.div(b()),v=Object(o.c)(l.a)(p()),h=o.c.div(m(),(function(n){var t=n.imageUrl;return"url(".concat(t,")")})),j=o.c.div(s()),x=o.c.span(f()),O=o.c.span(d());t.a=Object(c.b)(null,(function(n){return{addItem:function(t){return n(Object(a.a)(t))}}}))((function(n){var t=n.item,e=n.addItem,r=n.data,c=t.name,a=t.price,u=t.imageUrl;r&&console.log(r.id);return i.a.createElement(g,null,i.a.createElement(h,{className:"image",imageUrl:u}),i.a.createElement(j,null,i.a.createElement(x,null,c),i.a.createElement(O,null,a)),i.a.createElement(v,{onClick:function(){return e(t)},inverted:!0},"Add to cart"))}))},154:function(n,t,e){"use strict";e.r(t);var r=e(22),i=e(18),c=e(14),a=e(102),u=e(104),o=e(0),l=e.n(o),d=e(105),f=e(8),s=e(9);function m(){var n=Object(f.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-gap: 10px;\n  & > div {\n    margin-bottom: 30px;\n  }\n  @media screen and (max-width: 800px) {\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 15px;\n  }\n"]);return m=function(){return n},n}function p(){var n=Object(f.a)(["\n  font-size: 38px;\n  margin: 0 auto 30px;\n"]);return p=function(){return n},n}function b(){var n=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return b=function(){return n},n}var g=s.c.div(b()),v=s.c.h2(p()),h=s.c.div(m()),j=Object(r.b)((function(n,t){return{collection:Object(a.a)(t.match.params.collectionId)(n)}}))((function(n){var t=n.collection,e=t.title,r=t.items;return l.a.createElement(g,null,l.a.createElement(v,null,e),l.a.createElement(h,null,r.map((function(n){return l.a.createElement(d.a,{key:n.id,item:n})}))))})),x=Object(c.b)({isLoading:function(n){return!Object(a.d)(n)}}),O=Object(i.d)(Object(r.b)(x),u.a)(j);t.default=O}}]);
//# sourceMappingURL=8.910b41c3.chunk.js.map