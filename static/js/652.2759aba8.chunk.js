"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[652],{3652:function(e,s,n){n.r(s),n.d(s,{default:function(){return D}});var a=n(2807),i=n(8687),t="Dialog_dialogs__rwEHo",c="Dialog_contacts__IpPo0",d="Dialog_messages__1rOv+",r="Dialog_newMessage__hU6jP",o=n(3504),l="Contact_contact__sBgfi",m="Contact_active__LY+qL",g=n(184),u=function(e){return e.isActive?m:l},x=function(e){return(0,g.jsx)("div",{className:u,children:(0,g.jsx)(o.OL,{to:"/dialogs/"+e.id,children:e.name})})},_="Sender_sender__Vcwqf",f=function(e){return(0,g.jsxs)("div",{className:_,children:[(0,g.jsx)("div",{children:(0,g.jsx)("img",{src:e.ava})}),e.messageText]})},j="Recipient_recipient__jj4VW",v=function(e){return(0,g.jsxs)("div",{className:j,children:[(0,g.jsx)("div",{children:e.messageText}),(0,g.jsx)("div",{children:(0,g.jsx)("img",{src:e.ava})})]})},h=(n(2791),n(6139)),p=n(704),b=n(2031),w=n(5304),T=(0,w.D)(100),N=(0,p.Z)({form:"dialog"})((function(e){return(0,g.jsxs)("form",{onSubmit:e.handleSubmit,children:[(0,g.jsx)(h.Z,{validate:[w.C,T],name:"newMessageText",component:b.gx}),(0,g.jsx)("button",{children:"Send"})]})})),M=function(e){var s=e.contacts.map((function(e){return(0,g.jsx)(x,{id:e.id,name:e.name},e.id)})),n=e.messages.map((function(e){return 1==e.self?(0,g.jsx)(v,{messageText:e.messageText,ava:"https://avatars.mds.yandex.net/get-zen_doc/1708007/pub_6043694a665e4413f3c4ad55_6043ad4d58285736ddaf8c1e/scale_1200"},e.id):(0,g.jsx)(f,{messageText:e.messageText,ava:"https://i.pinimg.com/originals/7b/ce/25/7bce255e224f6cc9b5d52e60ee587abb.jpg"},e.id)}));return(0,g.jsxs)("div",{className:t,children:[(0,g.jsx)("div",{className:c,children:s}),(0,g.jsx)("div",{className:d,children:n}),(0,g.jsx)("div",{className:r,children:(0,g.jsx)(N,{onSubmit:function(s){e.sendNewMessage(s.newMessageText)}})})]})},C=n(1487),D=(0,n(7781).qC)(C.e,(0,i.$j)((function(e){return{contacts:e.dialogs.contacts,newMessageText:e.dialogs.newMessageText,messages:e.dialogs.messages}}),(function(e){return{sendNewMessage:function(s){e((0,a._)(s))}}})))(M)}}]);
//# sourceMappingURL=652.2759aba8.chunk.js.map