(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{Awhp:function(U,b,e){"use strict";var _=e("EFp3"),v=e.n(_),r=e("PQMj"),a=e.n(r)},DnfT:function(U,b,e){},FRQA:function(U,b,e){"use strict";var _=e("GNNt"),v=e("wEI+"),r=e("DnfT"),a=e.n(r),x=e("q1tI"),T=e.n(x),C=e("TSYQ"),i=e.n(C),R=e("jYQm"),B=function(A){var Y=Object(x.useContext)(R.a),Z=A.children,ne=A.contentWidth,P=A.className,t=A.style,V=Object(x.useContext)(v.a.ConfigContext),se=V.getPrefixCls,X=A.prefixCls||se("pro"),q=ne||Y.contentWidth,N="".concat(X,"-grid-content");return T.a.createElement("div",{className:i()(N,P,{wide:q==="Fixed"}),style:t},T.a.createElement("div",{className:"".concat(X,"-grid-content-children")},Z))};b.a=B},KrTs:function(U,b,e){"use strict";var _=e("rePB"),v=e("U8pU"),r=e("wx14"),a=e("q1tI"),x=e("8XRh"),T=e("TSYQ"),C=e.n(T),i=e("H84U"),R=e("0n0R"),B=e("ODXe");function H(s){var n=s.prefixCls,m=s.value,l=s.current,o=s.offset,M=o===void 0?0:o,O;return M&&(O={position:"absolute",top:"".concat(M,"00%"),left:0}),a.createElement("span",{style:O,className:C()("".concat(n,"-only-unit"),{current:l})},m)}function A(s,n,m){for(var l=s,o=0;(l+10)%10!==n;)l+=m,o+=m;return o}function Y(s){var n=s.prefixCls,m=s.count,l=s.value,o=Number(l),M=Math.abs(m),O=a.useState(o),I=Object(B.a)(O,2),L=I[0],g=I[1],k=a.useState(M),S=Object(B.a)(k,2),G=S[0],z=S[1],j=function(){g(o),z(M)};a.useEffect(function(){var p=setTimeout(function(){j()},1e3);return function(){clearTimeout(p)}},[o]);var h,W;if(L===o||Number.isNaN(o)||Number.isNaN(L))h=[a.createElement(H,Object(r.a)({},s,{key:o,current:!0}))],W={transition:"none"};else{h=[];for(var K=o+10,E=[],u=o;u<=K;u+=1)E.push(u);var y=E.findIndex(function(p){return p%10===L});h=E.map(function(p,c){var f=p%10;return a.createElement(H,Object(r.a)({},s,{key:p,value:f,offset:c-y,current:c===y}))});var d=G<M?1:-1;W={transform:"translateY(".concat(-A(L,o,d),"00%)")}}return a.createElement("span",{className:"".concat(n,"-only"),style:W,onTransitionEnd:j},h)}var Z=function(s,n){var m={};for(var l in s)Object.prototype.hasOwnProperty.call(s,l)&&n.indexOf(l)<0&&(m[l]=s[l]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,l=Object.getOwnPropertySymbols(s);o<l.length;o++)n.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(s,l[o])&&(m[l[o]]=s[l[o]]);return m},ne=function(n){var m=n.prefixCls,l=n.count,o=n.className,M=n.motionClassName,O=n.style,I=n.title,L=n.show,g=n.component,k=g===void 0?"sup":g,S=n.children,G=Z(n,["prefixCls","count","className","motionClassName","style","title","show","component","children"]),z=a.useContext(i.b),j=z.getPrefixCls,h=j("scroll-number",m),W=Object(r.a)(Object(r.a)({},G),{"data-show":L,style:O,className:C()(h,o,M),title:I}),K=l;if(l&&Number(l)%1==0){var E=String(l).split("");K=E.map(function(u,y){return a.createElement(Y,{prefixCls:h,count:Number(l),value:u,key:E.length-y})})}return O&&O.borderColor&&(W.style=Object(r.a)(Object(r.a)({},O),{boxShadow:"0 0 0 1px ".concat(O.borderColor," inset")})),S?Object(R.a)(S,function(u){return{className:C()("".concat(h,"-custom-component"),u==null?void 0:u.className,M)}}):a.createElement(k,W,K)},P=ne,t=e("09Wf");function V(s){return t.a.indexOf(s)!==-1}var se=function(n){var m,l=n.className,o=n.prefixCls,M=n.style,O=n.color,I=n.children,L=n.text,g=n.placement,k=g===void 0?"end":g,S=a.useContext(i.b),G=S.getPrefixCls,z=S.direction,j=G("ribbon",o),h=V(O),W=C()(j,"".concat(j,"-placement-").concat(k),(m={},Object(_.a)(m,"".concat(j,"-rtl"),z==="rtl"),Object(_.a)(m,"".concat(j,"-color-").concat(O),h),m),l),K={},E={};return O&&!h&&(K.background=O,E.color=O),a.createElement("div",{className:"".concat(j,"-wrapper")},I,a.createElement("div",{className:W,style:Object(r.a)(Object(r.a)({},K),M)},a.createElement("span",{className:"".concat(j,"-text")},L),a.createElement("div",{className:"".concat(j,"-corner"),style:E})))},X=se,q=function(s,n){var m={};for(var l in s)Object.prototype.hasOwnProperty.call(s,l)&&n.indexOf(l)<0&&(m[l]=s[l]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,l=Object.getOwnPropertySymbols(s);o<l.length;o++)n.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(s,l[o])&&(m[l[o]]=s[l[o]]);return m},N=function(n){var m,l,o=n.prefixCls,M=n.scrollNumberPrefixCls,O=n.children,I=n.status,L=n.text,g=n.color,k=n.count,S=k===void 0?null:k,G=n.overflowCount,z=G===void 0?99:G,j=n.dot,h=j===void 0?!1:j,W=n.size,K=W===void 0?"default":W,E=n.title,u=n.offset,y=n.style,d=n.className,p=n.showZero,c=p===void 0?!1:p,f=q(n,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","size","title","offset","style","className","showZero"]),$=a.useContext(i.b),ue=$.getPrefixCls,le=$.direction,D=ue("badge",o),oe=S>z?"".concat(z,"+"):S,ce=I!=null||g!=null,ie=oe==="0"||oe===0,J=h&&!ie,ee=J?"":oe,te=Object(a.useMemo)(function(){var F=ee==null||ee==="";return(F||ie&&!c)&&!J},[ee,ie,c,J]),_e=Object(a.useRef)(S);te||(_e.current=S);var w=_e.current,pe=Object(a.useRef)(ee);te||(pe.current=ee);var me=pe.current,de=Object(a.useRef)(J);te||(de.current=J);var ae=Object(a.useMemo)(function(){if(!u)return Object(r.a)({},y);var F={marginTop:u[1]};return le==="rtl"?F.left=parseInt(u[0],10):F.right=-parseInt(u[0],10),Object(r.a)(Object(r.a)({},F),y)},[le,u,y]),Ce=E!=null?E:typeof w=="string"||typeof w=="number"?w:void 0,be=te||!L?null:a.createElement("span",{className:"".concat(D,"-status-text")},L),ge=!w||Object(v.a)(w)!=="object"?void 0:Object(R.a)(w,function(F){return{style:Object(r.a)(Object(r.a)({},ae),F.style)}}),ve=C()((m={},Object(_.a)(m,"".concat(D,"-status-dot"),ce),Object(_.a)(m,"".concat(D,"-status-").concat(I),!!I),Object(_.a)(m,"".concat(D,"-status-").concat(g),V(g)),m)),fe={};g&&!V(g)&&(fe.background=g);var Ee=C()(D,(l={},Object(_.a)(l,"".concat(D,"-status"),ce),Object(_.a)(l,"".concat(D,"-not-a-wrapper"),!O),Object(_.a)(l,"".concat(D,"-rtl"),le==="rtl"),l),d);if(!O&&ce){var re=ae.color;return a.createElement("span",Object(r.a)({},f,{className:Ee,style:ae}),a.createElement("span",{className:ve,style:fe}),a.createElement("span",{style:{color:re},className:"".concat(D,"-status-text")},L))}return a.createElement("span",Object(r.a)({},f,{className:Ee}),O,a.createElement(x.b,{visible:!te,motionName:"".concat(D,"-zoom"),motionAppear:!1,motionDeadline:1e3},function(F){var Q,he=F.className,De=ue("scroll-number",M),ye=de.current,Me=C()((Q={},Object(_.a)(Q,"".concat(D,"-dot"),ye),Object(_.a)(Q,"".concat(D,"-count"),!ye),Object(_.a)(Q,"".concat(D,"-count-sm"),K==="small"),Object(_.a)(Q,"".concat(D,"-multiple-words"),!ye&&me&&me.toString().length>1),Object(_.a)(Q,"".concat(D,"-status-").concat(I),!!I),Object(_.a)(Q,"".concat(D,"-status-").concat(g),V(g)),Q)),Oe=Object(r.a)({},ae);return g&&!V(g)&&(Oe=Oe||{},Oe.background=g),a.createElement(P,{prefixCls:De,show:!te,motionClassName:he,className:Me,count:me,title:Ce,style:Oe,key:"scrollNumber"},ge)}),be)};N.Ribbon=X;var Pe=b.a=N},Lgec:function(U,b,e){"use strict";var _=e("T2oS"),v=e("W9HT"),r=e("q1tI"),a=e.n(r);b.a=function(){return a.a.createElement("div",{style:{paddingTop:100,textAlign:"center"}},a.a.createElement(v.a,{size:"large"}))}},PJQY:function(U,b,e){"use strict";e.r(b);var _=e("Znn+"),v=e("ZTPi"),r=e("tJVT"),a=e("/zsF"),x=e("PArb"),T=e("k1fw"),C=e("IzEo"),i=e("bx4M"),R=e("jCWc"),B=e("kPKH"),H=e("14J3"),A=e("BMrR"),Y=e("MXD1"),Z=e("CFYs"),ne=e("oBTY"),P=e("q1tI"),t=e.n(P),V=e("FRQA"),se=e("9kvl"),X=e("WHYC"),q=e("V3tC"),N=e("ysNt"),Pe=e("Lgec"),s=e("fkVW"),n=e("m3uQ"),m=e("U/Lg"),l=e("b2iA"),o=q.a.statistic,M=N.c.tutorial,O=M.descLinks,I=M.descTexts,L=M.genUtilUI,g=M.genLinkUI,k=[{keywords:"\u3010\u5B50\u57DF\u540D\u3001\u65C1\u7AD9\u3001C\u6BB5\uFF0C\u7EFC\u5408\u67E5\u8BE2\u3011",desc:[].concat(Object(ne.a)(I([])),Object(ne.a)(O([])))}],S=[{keywords:"\u3010\u793E\u5DE5\u5E93\u67E5\u8BE2\u3011",desc:O([{href:"http://site3.sjk.space/sgk1.php",name:"\u793E\u5DE5\u5E93\u514D\u8D39\u67E5\u8BE2",rate:"\u4F4E\u4EF7\u503C\uFF0C\u8BD5\u9A8C\u6027\u4F5C\u54C1\u3002\u4E0D\u6307\u671B\u80FD\u67E5\u51FA \u771F\u6B63\u6709\u4EF7\u503C\u7684\u4E1C\u897F \uFF0C\u53EA\u662F\u4E00\u4E2A\u5C55\u793A",opt:{outdated:!0}}])}],G=function(u){var y=u.total,d=u.remain,p=u.strokeColor,c=u.desc;return t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},t.a.createElement(Z.a,{type:"circle",percent:d/y*100,format:function($){return t.a.createElement("div",{style:{fontSize:"48px",color:"black"}},d)},strokeColor:p,strokeWidth:16,width:200,style:{}}),t.a.createElement("div",{style:{marginTop:"1.5em",marginBottom:"1em",fontSize:"18px"}},c)))},z=function(u){var y=u.title,d=u.num;return t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},t.a.createElement("span",{style:{fontSize:"20px"}},y),t.a.createElement("span",{style:{color:"orange",marginTop:"0.5em",fontSize:"22px"}},d)))},j=function(u){var y=u.dataArr,d=Object(X.j)();return t.a.createElement(m.a,{style:{height:"550px",width:"100%"},onEvents:{click:function(c){var f=c.data;console.log("params",c),d.push({pathname:N.e,state:{vulnType_data:f}})}},opts:{renderer:"svg"},option:{tooltip:{trigger:"item"},legend:{top:"5%",left:"center"},series:[{name:"\u6F0F\u6D1E\u7C7B\u578B",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},label:{show:!1,position:"center"},emphasis:{label:{show:!1,fontSize:"40",fontWeight:"bold"}},labelLine:{show:!1},data:y}]}})},h;(function(E){E.\u5F53\u6B21="\u5F53\u6B21",E.\u5386\u53F2="\u5386\u53F2"})(h||(h={}));var W=function(u){var y,d=u.allInfo,p=Object(X.j)();return t.a.createElement(t.a.Fragment,null,t.a.createElement(P.Suspense,{fallback:t.a.createElement(Pe.a,null)},t.a.createElement(i.a,null,t.a.createElement(A.a,null),t.a.createElement(A.a,{gutter:24,style:{background:"#FFFFFF"}},!1,d.vulnGlance&&function(){var c=[l.a.trans_VulnGlance_diffServity(d.vulnGlance.high,"\u9AD8\u5371\u6F0F\u6D1E","#F69696"),l.a.trans_VulnGlance_diffServity(d.vulnGlance.medium,"\u4E2D\u5371\u6F0F\u6D1E","#FCC77D"),l.a.trans_VulnGlance_diffServity(d.vulnGlance.low,"\u4F4E\u5371\u6F0F\u6D1E","#67CDED")];return console.log("arr",c),c.map(function(f){return t.a.createElement(B.a,{xl:8,style:{display:"flex",justifyContent:"center",alignItems:"center"}},t.a.createElement(P.Suspense,{fallback:null},t.a.createElement("div",{style:{width:"400px",position:"relative",display:"flex",flexDirection:"column",alignItems:"center"}},t.a.createElement(j,{dataArr:f==null?void 0:f.child}),t.a.createElement("div",{style:{width:"80px",height:"80px",position:"absolute",left:0,right:0,top:0,bottom:0,margin:"auto",display:"flex",justifyContent:"center",alignItems:"center"}},t.a.createElement("h1",{style:{fontSize:"40px",marginBottom:"unset"}},f==null?void 0:f.total)),t.a.createElement("h3",{style:{fontWeight:"bold",marginTop:"-2em"}},f==null?void 0:f.desc))))})}()))),t.a.createElement(P.Suspense,{fallback:null},t.a.createElement(i.a,{style:{marginTop:"0.5em"}},t.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center",background:"#FFFFFF"}},d.baseInfo&&[{title:"\u6B63\u5728\u626B\u63CF",num:d.baseInfo.taskScanning},{title:"\u626B\u63CF\u7B49\u5F85\u4E2D",num:d.baseInfo.taskWaiting},{title:"\u626B\u63CF\u5B9E\u65BD\u603B\u6570",num:d.baseInfo.taskInvoked},{title:"\u73B0\u5B58\u6F0F\u6D1E\u6570",num:d.baseInfo.existVulnSum},{title:"\u603B\u8D44\u4EA7\u6570",num:d.baseInfo.assetsSum}].map(function(c){return t.a.createElement("div",{onClick:function($){switch(c.title){case"\u6B63\u5728\u626B\u63CF":p.push({pathname:N.b});break;case"\u626B\u63CF\u7B49\u5F85\u4E2D":p.push({pathname:N.b});break;case"\u626B\u63CF\u5B9E\u65BD\u603B\u6570":p.push({pathname:N.b});break;case"\u73B0\u5B58\u6F0F\u6D1E\u6570":p.push({pathname:N.e});break;case"\u603B\u8D44\u4EA7\u6570":p.push({pathname:"/HardwareBox/targets/targetsList.html"});break;default:throw new Error("\u60C5\u51B5\u4E0D\u5B58\u5728")}},style:{cursor:"pointer"}},t.a.createElement(P.Suspense,{fallback:null},t.a.createElement(z,{title:c.title,num:c.num})))})))),t.a.createElement(P.Suspense,{fallback:null},t.a.createElement(i.a,{style:{marginTop:"0.5em"}},t.a.createElement(A.a,{gutter:24,style:{marginTop:24}},t.a.createElement(B.a,{xl:12},t.a.createElement(P.Suspense,{fallback:null},t.a.createElement(i.a,{title:t.a.createElement("div",{style:{fontWeight:"bold",display:"flex",justifyContent:"space-between"}},"\u8D44\u4EA7\u8584\u5F31\u70B9\u6392\u884C"),size:"small"},d.vulnRank_byAssets&&d.vulnRank_byAssets.map(function(c){return{url:c.targetUrl,vulns:Object(T.a)({},c)}}).map(function(c){return t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",cursor:"pointer"},onClick:function($){p.push({pathname:"/HardwareBox/targets/targetsList.html"})}},t.a.createElement("div",null,c.url),t.a.createElement(s.a,{vulns:c.vulns})))}))),t.a.createElement(P.Suspense,{fallback:null},t.a.createElement(i.a,{style:{marginTop:"16px"},title:t.a.createElement("div",{style:{fontWeight:"bold",display:"flex",justifyContent:"space-between"}},"\u8D44\u4EA7\u7EC4\u8584\u5F31\u70B9\u6392\u884C"),size:"small"},d.vulnRank_byAssetsGroup&&d.vulnRank_byAssetsGroup.map(function(c){return{url:c.group_name,vulns:Object(T.a)({},c)}}).map(function(c){return t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",cursor:"pointer"},onClick:function($){p.push({pathname:"/HardwareBox/targets/TargetGroup_List.html"})}},t.a.createElement("div",null,c.url),t.a.createElement(s.a,{vulns:c.vulns})))})))),t.a.createElement(B.a,{xl:12},t.a.createElement(P.Suspense,{fallback:null},t.a.createElement(i.a,{title:t.a.createElement("div",{style:{fontWeight:"bold",display:"flex",justifyContent:"space-between"}},"\u9AD8\u53D1\u6F0F\u6D1E\u6392\u884C"),size:"small"},d.vulnRank_byVulnType&&((y=l.a.trans_VulnType_Rank(d.vulnRank_byVulnType))===null||y===void 0?void 0:y.map(function(c,f,$){return t.a.createElement("div",{style:{cursor:"pointer"},onClick:function(le){p.push({pathname:N.e})}},t.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}},t.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"}},t.a.createElement(n.a,{vuln_level:c.vuln_level}),c.type_name),t.a.createElement("span",{style:{color:"#FB4250"}}," ",c.num)),f<$.length-1&&t.a.createElement(x.a,{style:{margin:"8px 0"}}))})))))))))},K=function(u){var y=u.dispatch,d=u.listAndkanBan.list,p=u.isLoading,c=Object(P.useState)(!0),f=Object(r.a)(c,2),$=f[0],ue=f[1],le=Object(P.useState)(h.\u5F53\u6B21),D=Object(r.a)(le,2),oe=D[0],ce=D[1],ie=Object(P.useState)("\u5F53\u6B21"),J=Object(r.a)(ie,2),ee=J[0],te=J[1],_e=Object(P.useState)("\u5F53\u6B21"),w=Object(r.a)(_e,2),pe=w[0],me=w[1],de=Object(P.useState)({}),ae=Object(r.a)(de,2),Ce=ae[0],be=ae[1],ge=Object(P.useState)({}),ve=Object(r.a)(ge,2),fe=ve[0],Ee=ve[1];return Object(P.useEffect)(function(){q.a.statistic(!0).then(function(re){Ee(re)}),q.a.statistic(!1).then(function(re){be(re)})},[]),t.a.createElement(V.a,null,t.a.createElement(t.a.Fragment,null,t.a.createElement(v.a,{activeKey:oe,type:"card",size:"large",animated:!0,onChange:function(F){ce(F)}},t.a.createElement(v.a.TabPane,{tab:"\u5F53\u6B21",key:h.\u5F53\u6B21},t.a.createElement(i.a,{size:"small",title:"\u5F53\u6B21"},t.a.createElement(W,{allInfo:Ce}))),t.a.createElement(v.a.TabPane,{tab:"\u5386\u53F2",key:h.\u5386\u53F2},t.a.createElement(i.a,{size:"small",title:"\u5386\u53F2"},t.a.createElement(W,{allInfo:fe}))))))};b.default=Object(se.c)(function(E){var u=E.listAndkanBan,y=E.loading;return{listAndkanBan:u,loading:y.models.listAndserver}})(K)},PQMj:function(U,b,e){},b2iA:function(U,b,e){"use strict";e.d(b,"a",function(){return a});var _=e("k1fw"),v=e("fWQN"),r=e("mtLc"),a=function(){function x(){Object(v.a)(this,x)}return Object(r.a)(x,null,[{key:"trans_VulnType_Rank",value:function(C){return C.map(function(i){var R={1:"info",2:"low",3:"medium",4:"high"};return{vuln_level:R[i.severity],type_name:i.type_name,num:i.sum}})}},{key:"trans_VulnGlance_diffServity",value:function(C){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"--",R=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"#67CDED";return C==null?void 0:C.reduce(function(B,H){var A=B.total+1,Y=B.child.find(function(Z){return Z.name===H.type_name});return Y?Y.value+=1:B.child.push({name:H.type_name,value:1,otherData:{vulnType_id:H.vuln_type_id}}),Object(_.a)(Object(_.a)({},B),{},{total:A,remain:A,child:B.child})},{total:0,remain:0,desc:i,color:R,child:[]})}}]),x}()},bRQS:function(U,b,e){"use strict";var _=e("VTBJ"),v=e("q1tI"),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},a=r,x=e("6VBw"),T=function(R,B){return v.createElement(x.a,Object(_.a)(Object(_.a)({},R),{},{ref:B,icon:a}))};T.displayName="CheckOutlined";var C=b.a=v.forwardRef(T)},fkVW:function(U,b,e){"use strict";e.d(b,"a",function(){return x});var _=e("Awhp"),v=e("KrTs"),r=e("q1tI"),a=e.n(r),x=function(C){var i=C.vulns;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null,i&&a.a.createElement(a.a.Fragment,null,i.high>0&&a.a.createElement(v.a,{count:i.high,style:{background:"#E74B51"}}),i.medium>0&&a.a.createElement(v.a,{count:i.medium,style:{background:"#FBB85B",marginLeft:"2px"}}),i.low>0&&a.a.createElement(v.a,{count:i.low,style:{background:"#4FC5EA",marginLeft:"2px"}}),i.info>0&&a.a.createElement(v.a,{count:i.info,style:{background:"#52B86A",marginLeft:"2px"}}))))}},jYQm:function(U,b,e){"use strict";var _=e("q1tI"),v=e.n(_),r=Object(_.createContext)({});b.a=r},m3uQ:function(U,b,e){"use strict";e.d(b,"a",function(){return T});var _=e("q1tI"),v=e.n(_),r=e("7mwJ"),a=e("fyZN");function x(C){switch(C){case"high":return"#E74B51";case"medium":return"#FBB85B";case"low":return"#4FC5EA";case"info":return"#52B86A";default:return""}}var T=function(i){var R=i.vuln_level;return v.a.createElement(v.a.Fragment,null,v.a.createElement("div",{style:{minWidth:"5em",color:x(R||"")}},v.a.createElement(r.a,{style:{fontSize:"16px"}}),v.a.createElement("div",{style:{fontSize:"12px"}},a.a.capitalizeFirstLetter(R||""))))}}}]);
