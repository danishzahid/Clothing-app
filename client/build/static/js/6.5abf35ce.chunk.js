(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{123:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(22),c=t(12),l=(t(103),t(104),t(28)),u=t(7),o=t(8);function d(){var n=Object(u.a)(["\n  padding-left: 12px;\n  cursor: pointer;\n"]);return d=function(){return n},n}function m(){var n=Object(u.a)(["\n  display: flex;\n\n  span {\n    margin: 0 10px;\n  }\n\n  div {\n    cursor: pointer;\n  }\n"]);return m=function(){return n},n}function p(){var n=Object(u.a)(["\n  width: 23%;\n\n  @media screen and (max-width: 800px) {\n    width: 22%;\n  }\n"]);return p=function(){return n},n}function f(){var n=Object(u.a)(["\n  width: 23%;\n  padding-right: 15px;\n\n  img {\n    width: 100%;\n    height: 100%;\n  }\n"]);return f=function(){return n},n}function s(){var n=Object(u.a)(["\n  width: 100%;\n  display: flex;\n  min-height: 100px;\n  border-bottom: 1px solid darkgrey;\n  padding: 15px 0;\n  font-size: 20px;\n  align-items: center;\n\n  @media screen and (max-width: 800px) {\n    font-size: 18px;\n  }\n"]);return s=function(){return n},n}var v=o.c.div(s()),x=o.c.div(f()),h=o.c.span(p()),b=Object(o.c)(h)(m());b.displayName="QuantityContainer";var g=o.c.div(d());g.displayName="RemoveButtonContainer";var E=Object(i.b)(null,function(n){return{clearItem:function(e){return n(Object(l.c)(e))},addItem:function(e){return n(Object(l.a)(e))},removeItem:function(e){return n(Object(l.d)(e))}}})(function(n){var e=n.cartItem,t=n.clearItem,r=n.addItem,i=n.removeItem,c=e.name,l=e.imageUrl,u=e.price,o=e.quantity;return a.a.createElement(v,null,a.a.createElement(x,null,a.a.createElement("img",{src:l,alt:"item"})),a.a.createElement(h,null,c),a.a.createElement(b,null,a.a.createElement("div",{onClick:function(){return i(e)}},"\u276e"),a.a.createElement("span",null,o),a.a.createElement("div",{onClick:function(){return r(e)}},"\u276f")),a.a.createElement(h,null,u),a.a.createElement(g,{onClick:function(){return t(e)}},"\u2715"))}),w=t(30);function j(){var n=Object(u.a)(["\n  text-align: center;\n  margin-top: 40px;\n  font-size: 24px;\n  color: red;\n"]);return j=function(){return n},n}function O(){var n=Object(u.a)(["\n  margin-top: 30px;\n  margin-left: auto;\n  font-size: 36px;\n"]);return O=function(){return n},n}function y(){var n=Object(u.a)(["\n  text-transform: capitalize;\n  width: 23%;\n\n  &:last-child {\n    width: 8%;\n  }\n\n  @media screen and (max-width: 800px) {\n    width: 22%\n\n    &:last-child {\n      width: 12%;\n    }\n  }\n"]);return y=function(){return n},n}function I(){var n=Object(u.a)(["\n  width: 100%;\n  height: 40px;\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid darkgrey;\n"]);return I=function(){return n},n}function k(){var n=Object(u.a)(["\n  width: 55%;\n  min-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 50px auto 0;\n\n  button {\n    margin-left: auto;\n    margin-top: 50px;\n  }\n\n  @media screen and (max-width: 800px) {\n    width: 90%;\n  }\n"]);return k=function(){return n},n}var C=o.c.div(k()),z=o.c.div(I()),P=o.c.div(y()),J=o.c.div(O());o.c.div(j());t.d(e,"CheckoutPage",function(){return N});var N=function(n){var e=n.cartItems,t=n.total;return a.a.createElement(C,null,a.a.createElement(z,null,a.a.createElement(P,null,a.a.createElement("span",null,"Product")),a.a.createElement(P,null,a.a.createElement("span",null,"Description")),a.a.createElement(P,null,a.a.createElement("span",null,"Quantity")),a.a.createElement(P,null,a.a.createElement("span",null,"Price")),a.a.createElement(P,null,a.a.createElement("span",null,"Remove"))),e.map(function(n){return a.a.createElement(E,{key:n.id,cartItem:n})}),a.a.createElement(J,null,"TOTAL: $",t))},Q=Object(c.b)({cartItems:w.b,total:w.d});e.default=Object(i.b)(Q)(N)}}]);
//# sourceMappingURL=6.5abf35ce.chunk.js.map