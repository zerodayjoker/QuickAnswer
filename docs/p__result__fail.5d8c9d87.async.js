(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"/kpp":function(b,m,e){"use strict";var l=e("rePB"),_=e("wx14"),n=e("U8pU"),D=e("q1tI"),h=e.n(D),I=e("TSYQ"),g=e.n(I),U=e("o/2+"),u=e("H84U"),K=function(r,P){var i={};for(var O in r)Object.prototype.hasOwnProperty.call(r,O)&&P.indexOf(O)<0&&(i[O]=r[O]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var y=0,O=Object.getOwnPropertySymbols(r);y<O.length;y++)P.indexOf(O[y])<0&&Object.prototype.propertyIsEnumerable.call(r,O[y])&&(i[O[y]]=r[O[y]]);return i};function s(r){return typeof r=="number"?"".concat(r," ").concat(r," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(r)?"0 0 ".concat(r):r}var x=["xs","sm","md","lg","xl","xxl"],p=D.forwardRef(function(r,P){var i,O=D.useContext(u.b),y=O.getPrefixCls,J=O.direction,T=D.useContext(U.a),L=T.gutter,t=T.wrap,o=T.supportFlexGap,d=r.prefixCls,a=r.span,c=r.order,N=r.offset,W=r.push,A=r.pull,S=r.className,G=r.children,C=r.flex,Z=r.style,z=K(r,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),v=y("col",d),F={};x.forEach(function(j){var R,f={},Y=r[j];typeof Y=="number"?f.span=Y:Object(n.a)(Y)==="object"&&(f=Y||{}),delete z[j],F=Object(_.a)(Object(_.a)({},F),(R={},Object(l.a)(R,"".concat(v,"-").concat(j,"-").concat(f.span),f.span!==void 0),Object(l.a)(R,"".concat(v,"-").concat(j,"-order-").concat(f.order),f.order||f.order===0),Object(l.a)(R,"".concat(v,"-").concat(j,"-offset-").concat(f.offset),f.offset||f.offset===0),Object(l.a)(R,"".concat(v,"-").concat(j,"-push-").concat(f.push),f.push||f.push===0),Object(l.a)(R,"".concat(v,"-").concat(j,"-pull-").concat(f.pull),f.pull||f.pull===0),Object(l.a)(R,"".concat(v,"-rtl"),J==="rtl"),R))});var Q=g()(v,(i={},Object(l.a)(i,"".concat(v,"-").concat(a),a!==void 0),Object(l.a)(i,"".concat(v,"-order-").concat(c),c),Object(l.a)(i,"".concat(v,"-offset-").concat(N),N),Object(l.a)(i,"".concat(v,"-push-").concat(W),W),Object(l.a)(i,"".concat(v,"-pull-").concat(A),A),i),S,F),M={};if(L&&L[0]>0){var H=L[0]/2;M.paddingLeft=H,M.paddingRight=H}if(L&&L[1]>0&&!o){var V=L[1]/2;M.paddingTop=V,M.paddingBottom=V}return C&&(M.flex=s(C),t===!1&&!M.minWidth&&(M.minWidth=0)),D.createElement("div",Object(_.a)({},z,{style:Object(_.a)(Object(_.a)({},M),Z),className:Q,ref:P}),G)});p.displayName="Col",m.a=p},"1qqw":function(b,m,e){"use strict";e.r(m);var l=e("IzEo"),_=e("bx4M"),n=e("J+/v"),D=e("MoRW"),h=e("+L6B"),I=e("2/Rp"),g=e("2BaD"),U=e("UESt"),u=e("9kvl"),K=e("q1tI"),s=e.n(K),x=e("FRQA"),p=e("DF+m"),r=e.n(p),P=s.a.createElement(K.Fragment,null,s.a.createElement("div",{className:r.a.title},s.a.createElement(u.a,{id:"resultandfail.error.hint-title",defaultMessage:"The content you submitted has the following error:"})),s.a.createElement("div",{style:{marginBottom:16}},s.a.createElement(g.a,{style:{marginRight:8},className:r.a.error_icon}),s.a.createElement(u.a,{id:"resultandfail.error.hint-text1",defaultMessage:"Your account has been frozen"}),s.a.createElement("a",{style:{marginLeft:16}},s.a.createElement(u.a,{id:"resultandfail.error.hint-btn1",defaultMessage:"Thaw immediately"}),s.a.createElement(U.a,null))),s.a.createElement("div",null,s.a.createElement(g.a,{style:{marginRight:8},className:r.a.error_icon}),s.a.createElement(u.a,{id:"resultandfail.error.hint-text2",defaultMessage:"Your account is not yet eligible to apply"}),s.a.createElement("a",{style:{marginLeft:16}},s.a.createElement(u.a,{id:"resultandfail.error.hint-btn2",defaultMessage:"Upgrade immediately"}),s.a.createElement(U.a,null))));m.default=function(){return s.a.createElement(x.a,null,s.a.createElement(_.a,{bordered:!1},s.a.createElement(D.a,{status:"error",title:Object(u.d)({id:"resultandfail.error.title"}),subTitle:Object(u.d)({id:"resultandfail.error.description"}),extra:s.a.createElement(I.a,{type:"primary"},s.a.createElement(u.a,{id:"resultandfail.error.btn-text",defaultMessage:"Return to modify"})),style:{marginTop:48,marginBottom:16}},P)))}},"DF+m":function(b,m,e){b.exports={error_icon:"error_icon___3tajM",title:"title___1mmDs"}},DnfT:function(b,m,e){},FRQA:function(b,m,e){"use strict";var l=e("GNNt"),_=e("wEI+"),n=e("DnfT"),D=e.n(n),h=e("q1tI"),I=e.n(h),g=e("TSYQ"),U=e.n(g),u=e("jYQm"),K=function(x){var p=Object(h.useContext)(u.a),r=x.children,P=x.contentWidth,i=x.className,O=x.style,y=Object(h.useContext)(_.a.ConfigContext),J=y.getPrefixCls,T=x.prefixCls||J("pro"),L=P||p.contentWidth,t="".concat(T,"-grid-content");return I.a.createElement("div",{className:U()(t,i,{wide:L==="Fixed"}),style:O},I.a.createElement("div",{className:"".concat(T,"-grid-content-children")},r))};m.a=K},IzEo:function(b,m,e){"use strict";var l=e("EFp3"),_=e.n(l),n=e("lnY3"),D=e.n(n),h=e("Znn+"),I=e("14J3"),g=e("jCWc")},bx4M:function(b,m,e){"use strict";var l=e("rePB"),_=e("wx14"),n=e("q1tI"),D=e("TSYQ"),h=e.n(D),I=e("bT9E"),g=e("H84U"),U=function(t,o){var d={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&o.indexOf(a)<0&&(d[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,a=Object.getOwnPropertySymbols(t);c<a.length;c++)o.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(t,a[c])&&(d[a[c]]=t[a[c]]);return d},u=function(o){var d=o.prefixCls,a=o.className,c=o.hoverable,N=c===void 0?!0:c,W=U(o,["prefixCls","className","hoverable"]);return n.createElement(g.a,null,function(A){var S=A.getPrefixCls,G=S("card",d),C=h()("".concat(G,"-grid"),a,Object(l.a)({},"".concat(G,"-grid-hoverable"),N));return n.createElement("div",Object(_.a)({},W,{className:C}))})},K=u,s=function(t,o){var d={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&o.indexOf(a)<0&&(d[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,a=Object.getOwnPropertySymbols(t);c<a.length;c++)o.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(t,a[c])&&(d[a[c]]=t[a[c]]);return d},x=function(o){return n.createElement(g.a,null,function(d){var a=d.getPrefixCls,c=o.prefixCls,N=o.className,W=o.avatar,A=o.title,S=o.description,G=s(o,["prefixCls","className","avatar","title","description"]),C=a("card",c),Z=h()("".concat(C,"-meta"),N),z=W?n.createElement("div",{className:"".concat(C,"-meta-avatar")},W):null,v=A?n.createElement("div",{className:"".concat(C,"-meta-title")},A):null,F=S?n.createElement("div",{className:"".concat(C,"-meta-description")},S):null,Q=v||F?n.createElement("div",{className:"".concat(C,"-meta-detail")},v,F):null;return n.createElement("div",Object(_.a)({},G,{className:Z}),z,Q)})},p=x,r=e("ZTPi"),P=e("BMrR"),i=e("kPKH"),O=e("3Nzz"),y=function(t,o){var d={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&o.indexOf(a)<0&&(d[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,a=Object.getOwnPropertySymbols(t);c<a.length;c++)o.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(t,a[c])&&(d[a[c]]=t[a[c]]);return d};function J(t){var o=t.map(function(d,a){return n.createElement("li",{style:{width:"".concat(100/t.length,"%")},key:"action-".concat(a)},n.createElement("span",null,d))});return o}var T=n.forwardRef(function(t,o){var d,a,c=n.useContext(g.b),N=c.getPrefixCls,W=c.direction,A=n.useContext(O.b),S=function(k){var $;($=t.onTabChange)===null||$===void 0||$.call(t,k)},G=function(){var k;return n.Children.forEach(t.children,function($){$&&$.type&&$.type===K&&(k=!0)}),k},C=t.prefixCls,Z=t.className,z=t.extra,v=t.headStyle,F=v===void 0?{}:v,Q=t.bodyStyle,M=Q===void 0?{}:Q,H=t.title,V=t.loading,j=t.bordered,R=j===void 0?!0:j,f=t.size,Y=t.type,ee=t.cover,q=t.actions,X=t.tabList,oe=t.children,te=t.activeTabKey,se=t.defaultActiveTabKey,ie=t.tabBarExtraContent,de=t.hoverable,ae=t.tabProps,_e=ae===void 0?{}:ae,Ee=y(t,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),E=N("card",C),ve=M.padding===0||M.padding==="0px"?{padding:24}:void 0,B=n.createElement("div",{className:"".concat(E,"-loading-block")}),fe=n.createElement("div",{className:"".concat(E,"-loading-content"),style:ve},n.createElement(P.a,{gutter:8},n.createElement(i.a,{span:22},B)),n.createElement(P.a,{gutter:8},n.createElement(i.a,{span:8},B),n.createElement(i.a,{span:15},B)),n.createElement(P.a,{gutter:8},n.createElement(i.a,{span:6},B),n.createElement(i.a,{span:18},B)),n.createElement(P.a,{gutter:8},n.createElement(i.a,{span:13},B),n.createElement(i.a,{span:9},B)),n.createElement(P.a,{gutter:8},n.createElement(i.a,{span:4},B),n.createElement(i.a,{span:3},B),n.createElement(i.a,{span:16},B))),ne=te!==void 0,me=Object(_.a)(Object(_.a)({},_e),(d={},Object(l.a)(d,ne?"activeKey":"defaultActiveKey",ne?te:se),Object(l.a)(d,"tabBarExtraContent",ie),d)),re,le=X&&X.length?n.createElement(r.a,Object(_.a)({size:"large"},me,{className:"".concat(E,"-head-tabs"),onChange:S}),X.map(function(w){return n.createElement(r.a.TabPane,{tab:w.tab,disabled:w.disabled,key:w.key})})):null;(H||z||le)&&(re=n.createElement("div",{className:"".concat(E,"-head"),style:F},n.createElement("div",{className:"".concat(E,"-head-wrapper")},H&&n.createElement("div",{className:"".concat(E,"-head-title")},H),z&&n.createElement("div",{className:"".concat(E,"-extra")},z)),le));var Oe=ee?n.createElement("div",{className:"".concat(E,"-cover")},ee):null,ue=n.createElement("div",{className:"".concat(E,"-body"),style:M},V?fe:oe),Pe=q&&q.length?n.createElement("ul",{className:"".concat(E,"-actions")},J(q)):null,ye=Object(I.a)(Ee,["onTabChange"]),ce=f||A,Ce=h()(E,(a={},Object(l.a)(a,"".concat(E,"-loading"),V),Object(l.a)(a,"".concat(E,"-bordered"),R),Object(l.a)(a,"".concat(E,"-hoverable"),de),Object(l.a)(a,"".concat(E,"-contain-grid"),G()),Object(l.a)(a,"".concat(E,"-contain-tabs"),X&&X.length),Object(l.a)(a,"".concat(E,"-").concat(ce),ce),Object(l.a)(a,"".concat(E,"-type-").concat(Y),!!Y),Object(l.a)(a,"".concat(E,"-rtl"),W==="rtl"),a),Z);return n.createElement("div",Object(_.a)({ref:o},ye,{className:Ce}),re,Oe,ue,Pe)});T.Grid=K,T.Meta=p;var L=m.a=T},jCWc:function(b,m,e){"use strict";var l=e("EFp3"),_=e.n(l),n=e("1GLa")},jYQm:function(b,m,e){"use strict";var l=e("q1tI"),_=e.n(l),n=Object(l.createContext)({});m.a=n},kPKH:function(b,m,e){"use strict";var l=e("/kpp");m.a=l.a},lnY3:function(b,m,e){}}]);
