(this.webpackJsonpsocialnetwork=this.webpackJsonpsocialnetwork||[]).push([[3],{285:function(e,a,t){e.exports={DialogsMessages:"Dialogs_DialogsMessages__9AIEc",DialogsUsers:"Dialogs_DialogsUsers__14lHU"}},286:function(e,a,t){"use strict";t.r(a);var s=t(123),n=t(0),r=t.n(n),i=t(285),l=t.n(i),c=t(13),o=function(e){var a=e.id,t=e.name,s="/dialogs/"+a;return r.a.createElement("div",null,r.a.createElement(c.b,{to:s},t))},u=function(e){var a=e.message;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,a))},m=t(85),g=t(124),d=t(24),E=t(33),b=Object(E.a)(30),f=Object(g.a)({form:"dialogsMessages"})((function(e){var a=e.handleSubmit;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:a},r.a.createElement(m.a,{component:d.b,name:"messageArea",validate:[E.b,b]}),r.a.createElement("button",null,"Send message")))})),v=function(e){var a=e.users,t=e.messages,s=e.addMessage,n=a.map((function(e){return r.a.createElement(o,{name:e.name,id:e.id,key:e.id})})),i=t.map((function(e){return r.a.createElement(u,{message:e.message,id:e.id,key:e.id})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:l.a.DialogsUsers},n),r.a.createElement("div",{className:l.a.DialogsMessages},i),r.a.createElement(f,{onSubmit:function(e){s(e.messageArea)}}))},p=t(11),h=t(9),D=function(e){return{isAuth:e.auth.isAuth}},M=t(7);a.default=Object(M.d)(Object(p.b)((function(e){return{users:e.dialogsPage.users,messages:e.dialogsPage.messages,newMessageText:e.dialogsPage.newMessageText}}),{addMessage:s.a}),(function(e){return Object(p.b)(D)((function(a){return a.isAuth?r.a.createElement(e,a):r.a.createElement(h.a,{to:"/login"})}))}))(v)}}]);
//# sourceMappingURL=3.c0c54ae8.chunk.js.map