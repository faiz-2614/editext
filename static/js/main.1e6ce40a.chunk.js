(this.webpackJsonpeditext=this.webpackJsonpeditext||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(4),r=n.n(s),l=(n(9),n(2)),o=(n(10),n(0));var i=function(e){return Object(o.jsx)("div",{children:Object(o.jsx)("nav",{className:"navbar navbar-light bg-".concat("light"===e.mode?"dark":"light"),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsxs)("a",{className:"navbar-brand",href:"#",children:[Object(o.jsx)("img",{src:"../../edittext.png",alt:"",width:"24",height:"24",className:"d-inline-block align-text-top"}),"EdiText"]}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"light":"dark"),children:[Object(o.jsx)("input",{className:"form-check-input",onClick:e.changeBackGround,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(o.jsxs)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:["Enable ","light"===e.mode?"dark":"light"," Mode"]})]})]})})})};var b=function(e){var t=Object(c.useState)(""),n=Object(l.a)(t,2),a=n[0],s=n[1];return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsx)("label",{htmlFor:"exampleFormControlTextarea1",className:"form-label center mt-3",children:Object(o.jsx)("h1",{children:"Enter Text"})}),Object(o.jsx)("textarea",{className:"form-control m-6",onChange:function(e){s(e.target.value)},id:"exampleFormControlTextarea1",value:a,rows:"10"}),Object(o.jsx)("button",{type:"button",onClick:function(){var t=a.toUpperCase();s(t),e.showAlert("Converted To UpperCase!","success")},className:"btn btn-dark m-2 btn-lg mt-3",children:"Convert To UpperCase"}),Object(o.jsx)("button",{type:"button",onClick:function(){var t=a.toLowerCase();s(t),e.showAlert("Converted To LowerCase!","success")},className:"btn btn-dark m-2 btn-lg mt-3",children:"Convert To LowerCase"}),Object(o.jsx)("button",{type:"button",onClick:function(){s(""),e.showAlert("Cleared Text!","success")},className:"btn btn-dark m-2 btn-lg mt-3",children:"Clear Text"}),Object(o.jsx)("button",{type:"button",onClick:function(){var t=a.split(/[ ]+/);s(t.join(" ")),e.showAlert("Removed Extra Spaces!","success")},className:"btn btn-dark m-2 btn-lg mt-3",children:"Remove Extra Space"})]}),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("strong",{className:"mx-3",children:["No of Words:",a.split(/\s+/).filter((function(e){return 0!==e.length})).length," "]}),Object(o.jsxs)("strong",{className:"mx-3",children:["No of Characters:",a.length]})]})]})};var d=function(e){return Object(o.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(o.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(o.jsx)("strong",{children:e.alert.type}),": ",e.alert.message]})})};var h=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(null),r=Object(l.a)(s,2),h=r[0],j=r[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{mode:n,changeBackGround:function(){"light"===n?(a("dark"),document.body.style.backgroundColor="grey"):(a("light"),document.body.style.backgroundColor="white")}}),Object(o.jsx)(d,{alert:h}),Object(o.jsx)(b,{mode:n,showAlert:function(e,t){j({message:e,type:t}),setTimeout((function(){j(null)}),1500)}})]})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),j()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.1e6ce40a.chunk.js.map