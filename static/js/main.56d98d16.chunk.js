(this["webpackJsonpcurrency-conventer-react"]=this["webpackJsonpcurrency-conventer-react"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),u=n.n(c),a=n(4),o=n.n(a),s=(n(10),n(2)),i=(n(11),function(e){var t=e.name,n=e.body;return Object(r.jsxs)("p",{className:"form__paragraph",children:[t,n]})}),l=[{short:"USD",name:"U.S. Dollar",rate:3.76},{short:"EUR",name:"Euro",rate:4.54},{short:"GBP",name:"British Pound",rate:5.11}],j=(n(12),function(e){var t=e.currency,n=e.setCurrency;return Object(r.jsx)("select",{className:"form__select",value:t,onChange:function(e){var t=e.target;return n(t.value)},children:l.map((function(e){return Object(r.jsx)("option",{value:e.short,children:e.name},e.short)}))})}),m=(n(13),function(e){var t=e.amount,n=e.setAmount;return Object(r.jsx)("input",{value:t,onChange:function(e){var t=e.target;return n(t.value)},className:"form__input",step:"any",min:"0",placeholder:"Enter the amount",type:"number",required:!0})}),f=(n(14),function(e){var t=e.name;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("button",{className:"form__button",children:t})})}),b=(n(15),function(e){var t=e.title;return Object(r.jsx)("h1",{className:"form__header",children:t})}),h=(n(16),function(e){var t=e.children,n=e.calculateResult,c=e.currency,u=e.amount;return Object(r.jsx)("form",{onSubmit:function(e){e.preventDefault(),n(c,u)},className:"form",children:t})}),d=(n(17),function(e){var t=e.result;return Object(r.jsx)("p",{className:"form__result",children:!!t&&Object(r.jsxs)(r.Fragment,{children:[t.sourceAmount.toFixed(2),"\xa0PLN\xa0=\xa0",Object(r.jsxs)("strong",{children:[t.targetAmount.toFixed(2),"\xa0",t.currency]})]})})}),O=(n(18),function(){return Object(r.jsx)("footer",{className:"form__footer",children:"The rates are taken from the nbp.pl website from Table 010/A/NBP/2021 of 2021-01-17"})}),v=(n(19),function(){var e=Object(c.useState)(new Date),t=Object(s.a)(e,2),n=t[0],u=t[1];Object(c.useEffect)((function(){var e=setInterval((function(){u((function(e){return new Date}))}),1e3);return function(){clearInterval(e)}}),[]);var a=n.toLocaleDateString("en-US",{weekday:"long",day:"numeric",month:"long",hour:"numeric",minute:"numeric",second:"numeric"});return Object(r.jsxs)("p",{className:"form__clock",children:["Today is ",a]})});var x=function(){var e=Object(c.useState)(),t=Object(s.a)(e,2),n=t[0],u=t[1],a=Object(c.useState)(l[0].short),o=Object(s.a)(a,2),x=o[0],p=o[1],y=Object(c.useState)(""),g=Object(s.a)(y,2),_=g[0],N=g[1];return Object(r.jsxs)(h,{calculateResult:function(e,t){var n=l.find((function(t){return t.short===e})).rate;u({sourceAmount:+t,targetAmount:t/n,currency:e})},amount:_,currency:x,children:[Object(r.jsx)(v,{}),Object(r.jsx)(b,{title:"Currency conventer"}),Object(r.jsx)(i,{name:"Amount in PLN*:",body:Object(r.jsx)(m,{amount:_,setAmount:N})}),Object(r.jsx)(i,{name:"Valute:",body:Object(r.jsx)(j,{currency:x,setCurrency:p})}),Object(r.jsx)(f,{name:"Convert!"}),Object(r.jsx)(O,{}),Object(r.jsx)(d,{result:n})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,u=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),u(e),a(e)}))};o.a.render(Object(r.jsx)(u.a.StrictMode,{children:Object(r.jsx)(x,{})}),document.getElementById("root")),p()}],[[20,1,2]]]);
//# sourceMappingURL=main.56d98d16.chunk.js.map