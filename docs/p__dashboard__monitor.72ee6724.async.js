(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"1XEM":function(A,w,o){A.exports={tagCloud:"tagCloud___Blez5"}},CIdX:function(A,w,o){A.exports={waterWave:"waterWave___hvLJA",text:"text___3asSo",waterWaveCanvasWrapper:"waterWaveCanvasWrapper___2ndFj"}},"H+7v":function(A,w,o){A.exports={activeChart:"activeChart___15gpK",activeChartGrid:"activeChartGrid___3PL4c",activeChartLegend:"activeChartLegend___2Ieyc",dashedLine:"dashedLine___2fgZX",line:"line___2cxqk"}},Wnft:function(A,w,o){A.exports={mapChart:"mapChart___4fQJB",pieCard:"pieCard___1ETZj"}},a5Wf:function(A,w,o){"use strict";o.r(w);var gt=o("IzEo"),Q=o("bx4M"),yt=o("14J3"),re=o("BMrR"),Et=o("jCWc"),S=o("kPKH"),G=o("fWQN"),H=o("mtLc"),I=o("yKVA"),k=o("879j"),xt=o("aHsQ"),_=o("sGsY"),y=o("9kvl"),F=o("q1tI"),t=o.n(F),$e=o("FRQA"),Ne=o("ZhIB"),ve=o.n(Ne),f=o("yP6+"),ce=o("0Owb");function fe(m){var l=m.style;l.height="100%";var c=parseInt("".concat(getComputedStyle(m).height),10),e=parseInt("".concat(getComputedStyle(m).paddingTop),10)+parseInt("".concat(getComputedStyle(m).paddingBottom),10);return c-e}function pe(m){if(!m)return 0;var l=m,c=fe(l),e=l.parentNode;return e&&(c=fe(e)),c}function we(){return function(m){var l=function(c){Object(I.a)(a,c);var e=Object(k.a)(a);function a(){var r;Object(G.a)(this,a);for(var n=arguments.length,s=new Array(n),d=0;d<n;d++)s[d]=arguments[d];return r=e.call.apply(e,[this].concat(s)),r.state={computedHeight:0},r.root=null,r.handleRoot=function(u){r.root=u},r}return Object(H.a)(a,[{key:"componentDidMount",value:function(){var n=this.props.height;if(!n&&this.root){var s=pe(this.root);this.setState({computedHeight:s}),s<1&&(s=pe(this.root),this.setState({computedHeight:s}))}}},{key:"render",value:function(){var n=this.props.height,s=this.state.computedHeight,d=n||s;return t.a.createElement("div",{ref:this.handleRoot},d>0&&t.a.createElement(m,Object(ce.a)({},this.props,{height:d})))}}]),a}(t.a.Component);return l}}var ee=we,Pe=o("gPzx"),ge=f.Guide.Arc,Re=f.Guide.Html,ue=f.Guide.Line,Be=function(l){switch(l){case"2":return"\u5DEE";case"4":return"\u4E2D";case"6":return"\u826F";case"8":return"\u4F18";default:return""}};f.Shape.registerShape&&f.Shape.registerShape("point","pointer",{drawShape:function(l,c){var e=l.points[0];e=this.parsePoint(e);var a=this.parsePoint({x:0,y:0});return c.addShape("line",{attrs:{x1:a.x,y1:a.y,x2:e.x,y2:e.y,stroke:l.color,lineWidth:2,lineCap:"round"}}),c.addShape("circle",{attrs:{x:a.x,y:a.y,r:6,stroke:l.color,lineWidth:3,fill:"#fff"}})}});var Ge=function(l){var c=l.title,e=l.height,a=e===void 0?1:e,r=l.percent,n=l.forceFit,s=n===void 0?!0:n,d=l.formatter,u=d===void 0?Be:d,v=l.color,h=v===void 0?"#2F9CFF":v,i=l.bgColor,C=i===void 0?"#F0F2F5":i,M={value:{type:"linear",min:0,max:10,tickCount:6,nice:!0}},p=[{value:r/10}],E=function(){return`
  <div style="width: 300px;text-align: center;font-size: 12px!important;">
    <div style="font-size: 14px; color: rgba(0,0,0,0.43);margin: 0;">`.concat(c,`</div>
    <div style="font-size: 24px;color: rgba(0,0,0,0.85);margin: 0;">
      `).concat((p[0].value*10).toFixed(2),`%
    </div>
  </div>`)},D={fontSize:12,fill:"rgba(0, 0, 0, 0.65)",textAlign:"center"};return t.a.createElement(f.Chart,{height:a,data:p,scale:M,padding:[-16,0,16,0],forceFit:s},t.a.createElement(f.Coord,{type:"polar",startAngle:-1.25*Math.PI,endAngle:.25*Math.PI,radius:.8}),t.a.createElement(f.Axis,{name:"1",line:void 0}),t.a.createElement(f.Axis,{line:void 0,tickLine:void 0,subTickLine:void 0,name:"value",zIndex:Pe.a.cssStyle.zIndex.zIndex_2,label:{offset:-12,formatter:u,textStyle:D}}),t.a.createElement(f.Guide,null,t.a.createElement(ue,{start:[3,.905],end:[3,.85],lineStyle:{stroke:h,lineDash:void 0,lineWidth:2}}),t.a.createElement(ue,{start:[5,.905],end:[5,.85],lineStyle:{stroke:h,lineDash:void 0,lineWidth:3}}),t.a.createElement(ue,{start:[7,.905],end:[7,.85],lineStyle:{stroke:h,lineDash:void 0,lineWidth:3}}),t.a.createElement(ge,{start:[0,.965],end:[10,.965],style:{stroke:C,lineWidth:10}}),t.a.createElement(ge,{start:[0,.965],end:[p[0].value,.965],style:{stroke:h,lineWidth:10}}),t.a.createElement(Re,{position:["50%","95%"],html:E()})),t.a.createElement(f.Geom,{line:!1,type:"point",position:"value*1",shape:"pointer",color:h,active:!1}))},ye=ee()(Ge),V=o("k1fw"),He=o("iz+Y"),Ee=o.n(He),Ie=function(l){var c=l.height,e=c===void 0?1:c,a=l.data,r=a===void 0?[]:a,n=l.forceFit,s=n===void 0?!0:n,d=l.color,u=d===void 0?"rgba(24, 144, 255, 0.2)":d,v=l.borderColor,h=v===void 0?"#1089ff":v,i=l.scale,C=i===void 0?{x:{},y:{}}:i,M=l.borderWidth,p=M===void 0?2:M,E=l.line,D=l.xAxis,g=l.yAxis,z=l.animate,x=z===void 0?!0:z,b=[36,5,30,5],W={x:Object(V.a)({type:"cat",range:[0,1]},C.x),y:Object(V.a)({min:0},C.y)},X=["x*y",function(J,L){return{name:J,value:L}}],T=e+54;return t.a.createElement("div",{className:Ee.a.miniChart,style:{height:e}},t.a.createElement("div",{className:Ee.a.chartContent},e>0&&t.a.createElement(f.Chart,{animate:x,scale:W,height:T,forceFit:s,data:r,padding:b},t.a.createElement(f.Axis,Object(ce.a)({key:"axis-x",name:"x",label:null,line:null,tickLine:null,grid:null},D)),t.a.createElement(f.Axis,Object(ce.a)({key:"axis-y",name:"y",label:null,line:null,tickLine:null,grid:null},g)),t.a.createElement(f.Tooltip,{showTitle:!1,crosshairs:!1}),t.a.createElement(f.Geom,{type:"area",position:"x*y",color:u,tooltip:X,shape:"smooth",style:{fillOpacity:1}}),E?t.a.createElement(f.Geom,{type:"line",position:"x*y",shape:"smooth",color:h,size:p,tooltip:!1}):t.a.createElement("span",{style:{display:"none"}}))))},xe=ee()(Ie),Ct=o("/zsF"),ke=o("PArb"),Ce=o("jrin"),be=o("cQSq"),Ue=o.n(be),Je=o("9/5/"),Me=o.n(Je),Ze=o("Jssm"),Qe=o.n(Ze),Ve=o("TSYQ"),Ae=o.n(Ve),Xe=o("d9mD"),O=o.n(Xe),Ye=function(m){Object(I.a)(c,m);var l=Object(k.a)(c);function c(){var e;Object(G.a)(this,c);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return e=l.call.apply(l,[this].concat(r)),e.state={legendData:[],legendBlock:!1},e.chart=void 0,e.root=void 0,e.requestRef=0,e.resize=Me()(function(){var s=e.props.hasLegend,d=e.state.legendBlock;if(!s||!e.root){window.removeEventListener("resize",e.resize);return}e.root&&e.root.parentNode&&e.root.parentNode.clientWidth<=380?d||e.setState({legendBlock:!0}):d&&e.setState({legendBlock:!1})},300),e.getG2Instance=function(s){e.chart=s,requestAnimationFrame(function(){e.getLegendData(),e.resize()})},e.getLegendData=function(){if(!!e.chart){var s=e.chart.getAllGeoms()[0];if(!!s){var d=s.get("dataArray")||[],u=d.map(function(v){var h=v[0]._origin;return h.color=v[0].color,h.checked=!0,h});e.setState({legendData:u})}}},e.handleRoot=function(s){e.root=s},e.handleLegendClick=function(s,d){var u=s;u.checked=!u.checked;var v=e.state.legendData;v[d]=u;var h=v.filter(function(i){return i.checked}).map(function(i){return i.x});e.chart&&e.chart.filter("x",function(i){return h.indexOf("".concat(i))>-1}),e.setState({legendData:v})},e}return Object(H.a)(c,[{key:"componentDidMount",value:function(){var a=this;window.addEventListener("resize",function(){a.requestRef=requestAnimationFrame(function(){return a.resize()})},{passive:!0})}},{key:"componentDidUpdate",value:function(a){var r=this.props.data;r!==a.data&&this.getLegendData()}},{key:"componentWillUnmount",value:function(){this.requestRef&&window.cancelAnimationFrame(this.requestRef),window.removeEventListener("resize",this.resize),this.resize&&this.resize.cancel()}},{key:"render",value:function(){var a,r=this,n=this.props,s=n.valueFormat,d=n.subTitle,u=n.total,v=n.hasLegend,h=v===void 0?!1:v,i=n.className,C=n.style,M=n.height,p=M===void 0?0:M,E=n.forceFit,D=E===void 0?!0:E,g=n.percent,z=n.color,x=n.inner,b=x===void 0?.75:x,W=n.animate,X=W===void 0?!0:W,T=n.colors,J=n.lineWidth,L=J===void 0?1:J,Y=this.state,le=Y.legendData,se=Y.legendBlock,K=Ae()(O.a.pie,i,(a={},Object(Ce.a)(a,O.a.hasLegend,!!h),Object(Ce.a)(a,O.a.legendBlock,se),a)),P=this.props,he=P.data,te=P.selected,Z=te===void 0?!0:te,$=P.tooltip,ae=$===void 0?!0:$,R=he||[],N=Z,B=ae,de=T;R=R||[],N=N||!0,B=B||!0;var q,vt={x:{type:"cat",range:[0,1]},y:{min:0}};(g||g===0)&&(N=!1,B=!1,q=function(ne){return ne==="\u5360\u6BD4"?z||"rgba(24, 144, 255, 0.85)":"#F0F2F5"},R=[{x:"\u5360\u6BD4",y:parseFloat("".concat(g))},{x:"\u53CD\u6BD4",y:100-parseFloat("".concat(g))}]);var ft=["x*percent",function(j,ne){return{name:j,value:"".concat((ne*100).toFixed(2),"%")}}],pt=[12,0,12,0],Le=new be.DataView;return Le.source(R).transform({type:"percent",field:"y",dimension:"x",as:"percent"}),t.a.createElement("div",{ref:this.handleRoot,className:K,style:C},t.a.createElement(Qe.a,{maxFontSize:25},t.a.createElement("div",{className:O.a.chart},t.a.createElement(f.Chart,{scale:vt,height:p,forceFit:D,data:Le,padding:pt,animate:X,onGetG2Instance:this.getG2Instance},!!B&&t.a.createElement(f.Tooltip,{showTitle:!1}),t.a.createElement(f.Coord,{type:"theta",innerRadius:b}),t.a.createElement(f.Geom,{style:{lineWidth:L,stroke:"#fff"},tooltip:B?ft:void 0,type:"intervalStack",position:"percent",color:["x",g||g===0?q:de],selected:N})),(d||u)&&t.a.createElement("div",{className:O.a.total},d&&t.a.createElement("h4",{className:"pie-sub-title"},d),u&&t.a.createElement("div",{className:"pie-stat"},typeof u=="function"?u():u)))),h&&t.a.createElement("ul",{className:O.a.legend},le.map(function(j,ne){return t.a.createElement("li",{key:j.x,onClick:function(){return r.handleLegendClick(j,ne)}},t.a.createElement("span",{className:O.a.dot,style:{backgroundColor:j.checked?j.color:"#aaa"}}),t.a.createElement("span",{className:O.a.legendTitle},j.x),t.a.createElement(ke.a,{type:"vertical"}),t.a.createElement("span",{className:O.a.percent},"".concat((Number.isNaN(j.percent)?0:j.percent*100).toFixed(2),"%")),t.a.createElement("span",{className:O.a.value},s?s(j.y):j.y))})))}}]),c}(F.Component),oe=ee()(Ye),Se=o("tJVT"),Ke=o("1XEM"),qe=o.n(Ke),_e="https://gw.alipayobjects.com/zos/rmsportal/gWyeGLCdFFRavBGIDzWk.png",et=function(m){Object(I.a)(c,m);var l=Object(k.a)(c);function c(){var e;Object(G.a)(this,c);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return e=l.call.apply(l,[this].concat(r)),e.state={dv:null,height:0,width:0},e.requestRef=0,e.isUnmount=!1,e.root=void 0,e.imageMask=void 0,e.resize=function(){e.requestRef=requestAnimationFrame(function(){e.renderChart(e.props)})},e.saveRootRef=function(s){e.root=s},e.initTagCloud=function(){function s(d){return Object(V.a)(Object(V.a)({},d.style),{},{fillOpacity:d.opacity,fontSize:d.origin._origin.size,rotate:d.origin._origin.rotate,text:d.origin._origin.text,textAlign:"center",fontFamily:d.origin._origin.font,fill:d.color,textBaseline:"Alphabetic"})}f.Shape.registerShape("point","cloud",{drawShape:function(u,v){var h=s(u);return v.addShape("text",{attrs:Object(V.a)(Object(V.a)({},h),{},{x:u.x,y:u.y})})}})},e.renderChart=Me()(function(s){var d=s||e.props,u=d.data,v=d.height;if(!(u.length<1||!e.root)){var h=v,i=e.root.offsetWidth,C=function(){var p=new Ue.a.View().source(u),E=p.range("value"),D=Object(Se.a)(E,2),g=D[0],z=D[1];p.transform({type:"tag-cloud",fields:["name","value"],imageMask:e.imageMask,font:"Verdana",size:[i,h],padding:0,timeInterval:5e3,rotate:function(){return 0},fontSize:function(b){var W=Math.pow((b.value-g)/(z-g),2);return W*(17.5-5)+5}}),!e.isUnmount&&e.setState({dv:p,width:i,height:h})};e.imageMask?C():(e.imageMask=new Image,e.imageMask.crossOrigin="",e.imageMask.src=_e,e.imageMask.onload=C)}},200),e}return Object(H.a)(c,[{key:"componentDidMount",value:function(){var a=this;requestAnimationFrame(function(){a.initTagCloud(),a.renderChart(a.props)}),window.addEventListener("resize",this.resize,{passive:!0})}},{key:"componentDidUpdate",value:function(a){var r=this.props.data;a&&JSON.stringify(a.data)!==JSON.stringify(r)&&this.renderChart(this.props)}},{key:"componentWillUnmount",value:function(){this.isUnmount=!0,window.cancelAnimationFrame(this.requestRef),window.removeEventListener("resize",this.resize)}},{key:"render",value:function(){var a=this.props,r=a.className,n=a.height,s=this.state,d=s.dv,u=s.width,v=s.height;return t.a.createElement("div",{className:Ae()(qe.a.tagCloud,r),style:{width:"100%",height:n},ref:this.saveRootRef},d&&t.a.createElement(f.Chart,{width:u,height:v,data:d,padding:0,scale:{x:{nice:!1},y:{nice:!1}}},t.a.createElement(f.Tooltip,{showTitle:!1}),t.a.createElement(f.Coord,{reflect:"y"}),t.a.createElement(f.Geom,{type:"point",position:"x*y",color:"text",shape:"cloud",tooltip:["text*value",function(i,C){return{name:i,value:C}}]})))}}]),c}(F.Component),Fe=ee()(et),tt=o("CIdX"),me=o.n(tt),at=function(m){Object(I.a)(c,m);var l=Object(k.a)(c);function c(){var e;Object(G.a)(this,c);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return e=l.call.apply(l,[this].concat(r)),e.state={radio:1},e.timer=0,e.root=null,e.node=null,e.resize=function(){if(e.root){var s=e.props.height,d=s===void 0?1:s,u=e.root.parentNode,v=u.offsetWidth;e.setState({radio:v<d?v/d:1})}},e}return Object(H.a)(c,[{key:"componentDidMount",value:function(){var a=this;this.renderChart(),this.resize(),window.addEventListener("resize",function(){requestAnimationFrame(function(){return a.resize()})},{passive:!0})}},{key:"componentDidUpdate",value:function(a){var r=this.props.percent;a.percent!==r&&this.renderChart("update")}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.timer),this.node&&(this.node.innerHTML=""),window.removeEventListener("resize",this.resize)}},{key:"renderChart",value:function(a){var r=this.props,n=r.percent,s=r.color,d=s===void 0?"#1890FF":s,u=n/100,v=this;if(cancelAnimationFrame(this.timer),!this.node||u!==0&&!u)return;var h=this.node,i=h.getContext("2d");if(!i)return;var C=h.width,M=h.height,p=C/2,E=2,D=p-E;i.beginPath(),i.lineWidth=E*2;for(var g=C-E,z=g/8,x=.2,b=x,W=E,X=0,T=0,J=.005,L=[],Y=p-E,le=-(Math.PI/2),se=!0,K=le;K<le+2*Math.PI;K+=1/(8*Math.PI))L.push([p+Y*Math.cos(K),p+Y*Math.sin(K)]);var P=L.shift();i.strokeStyle=d,i.moveTo(P[0],P[1]);function he(){if(!!i){i.beginPath(),i.save();for(var Z=[],$=W;$<=W+g;$+=20/g){var ae=X+(W+$)/z,R=Math.sin(ae)*b,N=$,B=2*D*(1-T)+(p-D)-z*R;i.lineTo(N,B),Z.push([N,B])}var de=Z.shift();i.lineTo(W+g,M),i.lineTo(W,M),i.lineTo(de[0],de[1]);var q=i.createLinearGradient(0,0,0,M);q.addColorStop(0,"#ffffff"),q.addColorStop(1,d),i.fillStyle=q,i.fill(),i.restore()}}function te(){if(!!i){if(i.clearRect(0,0,C,M),se&&a!=="update")if(L.length){var Z=L.shift();i.lineTo(Z[0],Z[1]),i.stroke()}else se=!1,i.lineTo(P[0],P[1]),i.stroke(),L=[],i.globalCompositeOperation="destination-over",i.beginPath(),i.lineWidth=E,i.arc(p,p,Y,0,2*Math.PI,!0),i.beginPath(),i.save(),i.arc(p,p,p-3*E,0,2*Math.PI,!0),i.restore(),i.clip(),i.fillStyle=d;else{if(u>=.85){if(b>x/4){var $=x*.01;b-=$}}else if(u<=.1){if(b<x*1.5){var ae=x*.01;b+=ae}}else{if(b<=x){var R=x*.01;b+=R}if(b>=x){var N=x*.01;b-=N}}u-T>0&&(T+=J),u-T<0&&(T-=J),X+=.07,he()}v.timer=requestAnimationFrame(te)}}te()}},{key:"render",value:function(){var a=this,r=this.state.radio,n=this.props,s=n.percent,d=n.title,u=n.height,v=u===void 0?1:u;return t.a.createElement("div",{className:me.a.waterWave,ref:function(i){return a.root=i},style:{transform:"scale(".concat(r,")")}},t.a.createElement("div",{style:{width:v,height:v,overflow:"hidden"}},t.a.createElement("canvas",{className:me.a.waterWaveCanvasWrapper,ref:function(i){return a.node=i},width:v*2,height:v*2})),t.a.createElement("div",{className:me.a.text,style:{width:v}},d&&t.a.createElement("span",null,d),t.a.createElement("h4",null,s,"%")))}}]),c}(F.Component),We=ee()(at),nt=o("9og8"),rt=o("WmNS"),je=o.n(rt),ie=o("68d/"),ot=o("95SA"),it=["#eff3ff","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#084594"],De=function(m){Object(I.a)(c,m);var l=Object(k.a)(c);function c(){var e;Object(G.a)(this,c);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return e=l.call.apply(l,[this].concat(r)),e.state={data:null,grid:null,loading:!1},e}return Object(H.a)(c,[{key:"componentDidMount",value:function(){var e=Object(nt.a)(je.a.mark(function r(){var n,s,d,u;return je.a.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.all([fetch("https://gw.alipayobjects.com/os/bmw-prod/c5dba875-b6ea-4e88-b778-66a862906c93.json").then(function(i){return i.json()}),fetch("https://gw.alipayobjects.com/os/bmw-prod/8990e8b4-c58e-419b-afb9-8ea3daff2dd1.json").then(function(i){return i.json()})]);case 2:n=h.sent,s=Object(Se.a)(n,2),d=s[0],u=s[1],this.setState({data:d,grid:u,loading:!0});case 7:case"end":return h.stop()}},r,this)}));function a(){return e.apply(this,arguments)}return a}()},{key:"render",value:function(){var a=this.state,r=a.data,n=a.grid,s=a.loading;return s===!1?F.createElement(ot.a,null):F.createElement(ie.b,{map:{center:[110.19382669582967,50.258134],pitch:0,style:"blank",zoom:1},style:{position:"relative",width:"100%",height:"452px"}},n&&F.createElement(ie.a,{key:"1",source:{data:n,transforms:[{type:"hexagon",size:8e5,field:"capacity",method:"sum"}]},color:{values:"#ddd"},shape:{values:"hexagon"},style:{coverage:.7,opacity:.8}}),r&&[F.createElement(ie.c,{key:"2",options:{autoFit:!0},source:{data:r},scale:{values:{color:{field:"cum_conf",type:"quantile"},size:{field:"cum_conf",type:"log"}}},color:{field:"cum_conf",values:it},shape:{values:"circle"},active:{option:{color:"#0c2c84"}},size:{field:"cum_conf",values:[0,30]},style:{opacity:.8}}),F.createElement(ie.c,{key:"5",source:{data:r},color:{values:"#fff"},shape:{field:"Short_Name_ZH",values:"text"},filter:{field:"cum_conf",values:function(u){return u>2e3}},size:{values:12},style:{opacity:1,strokeOpacity:1,strokeWidth:0}})])}}]),c}(F.Component),bt={Pie:oe,WaterWave:We,Gauge:ye,MiniArea:xe,TagCloud:Fe,Map:De},Oe=o("oBTY"),lt=o("H+7v"),U=o.n(lt);function st(m){return m*1<10?"0".concat(m):m}function ze(){for(var m=[],l=0;l<24;l+=1)m.push({x:"".concat(st(l),":00"),y:Math.floor(Math.random()*200)+l*50});return m}var dt=function(m){Object(I.a)(c,m);var l=Object(k.a)(c);function c(){var e;Object(G.a)(this,c);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return e=l.call.apply(l,[this].concat(r)),e.state={activeData:ze()},e.timer=void 0,e.requestRef=void 0,e.loopData=function(){e.requestRef=requestAnimationFrame(function(){e.timer=window.setTimeout(function(){e.setState({activeData:ze()},function(){e.loopData()})},1e3)})},e}return Object(H.a)(c,[{key:"componentDidMount",value:function(){this.loopData()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timer),this.requestRef&&cancelAnimationFrame(this.requestRef)}},{key:"render",value:function(){var a=this.state.activeData,r=a===void 0?[]:a;return t.a.createElement("div",{className:U.a.activeChart},t.a.createElement(_.a,{title:"\u76EE\u6807\u8BC4\u4F30",value:"\u6709\u671B\u8FBE\u5230\u9884\u671F"}),t.a.createElement("div",{style:{marginTop:32}},t.a.createElement(xe,{animate:!1,line:!0,borderWidth:2,height:84,scale:{y:{tickCount:3}},yAxis:{tickLine:void 0,label:void 0,title:void 0,line:void 0},data:r})),r&&t.a.createElement("div",null,t.a.createElement("div",{className:U.a.activeChartGrid},t.a.createElement("p",null,Object(Oe.a)(r).sort()[r.length-1].y+200," \u4EBF\u5143"),t.a.createElement("p",null,Object(Oe.a)(r).sort()[Math.floor(r.length/2)].y," \u4EBF\u5143")),t.a.createElement("div",{className:U.a.dashedLine},t.a.createElement("div",{className:U.a.line})),t.a.createElement("div",{className:U.a.dashedLine},t.a.createElement("div",{className:U.a.line}))),r&&t.a.createElement("div",{className:U.a.activeChartLegend},t.a.createElement("span",null,"00:00"),t.a.createElement("span",null,r[Math.floor(r.length/2)].x),t.a.createElement("span",null,r[r.length-1].x)))}}]),c}(F.Component),ct=o("Wnft"),Te=o.n(ct),ut=_.a.Countdown,mt=Date.now()+1e3*60*60*24*2+1e3*30,ht=function(m){Object(I.a)(c,m);var l=Object(k.a)(c);function c(){return Object(G.a)(this,c),l.apply(this,arguments)}return Object(H.a)(c,[{key:"componentDidMount",value:function(){var a=this.props.dispatch;a({type:"dashboardAndmonitor/fetchTags"})}},{key:"render",value:function(){var a=this.props,r=a.dashboardAndmonitor,n=a.loading,s=r.tags;return t.a.createElement($e.a,null,t.a.createElement(t.a.Fragment,null,t.a.createElement(re.a,{gutter:24},t.a.createElement(S.a,{xl:18,lg:24,md:24,sm:24,xs:24,style:{marginBottom:24}},t.a.createElement(Q.a,{title:t.a.createElement(y.a,{id:"dashboardandmonitor.monitor.trading-activity",defaultMessage:"Real-Time Trading Activity"}),bordered:!1},t.a.createElement(re.a,null,t.a.createElement(S.a,{md:6,sm:12,xs:24},t.a.createElement(_.a,{title:t.a.createElement(y.a,{id:"dashboardandmonitor.monitor.total-transactions",defaultMessage:"Total transactions today"}),suffix:"\u5143",value:ve()(124543233).format("0,0")})),t.a.createElement(S.a,{md:6,sm:12,xs:24},t.a.createElement(_.a,{title:t.a.createElement(y.a,{id:"dashboardandmonitor.monitor.sales-target",defaultMessage:"Sales target completion rate"}),value:"92%"})),t.a.createElement(S.a,{md:6,sm:12,xs:24},t.a.createElement(ut,{title:t.a.createElement(y.a,{id:"dashboardandmonitor.monitor.remaining-time",defaultMessage:"Remaining time of activity"}),value:mt,format:"HH:mm:ss:SSS"})),t.a.createElement(S.a,{md:6,sm:12,xs:24},t.a.createElement(_.a,{title:t.a.createElement(y.a,{id:"dashboardandmonitor.monitor.total-transactions-per-second",defaultMessage:"Total transactions per second"}),suffix:"\u5143",value:ve()(234).format("0,0")}))),t.a.createElement("div",{className:Te.a.mapChart},t.a.createElement(De,null)))),t.a.createElement(S.a,{xl:6,lg:24,md:24,sm:24,xs:24},t.a.createElement(Q.a,{title:t.a.createElement(y.a,{id:"dashboardandmonitor.monitor.activity-forecast",defaultMessage:"Activity forecast"}),style:{marginBottom:24},bordered:!1},t.a.createElement(dt,null)),t.a.createElement(Q.a,{title:t.a.createElement(y.a,{id:"dashboardandmonitor.monitor.efficiency",defaultMessage:"Efficiency"}),style:{marginBottom:24},bodyStyle:{textAlign:"center"},bordered:!1},t.a.createElement(ye,{title:Object(y.d)({id:"dashboardandmonitor.monitor.ratio",defaultMessage:"Ratio"}),height:180,percent:87})))),t.a.createElement(re.a,{gutter:24},t.a.createElement(S.a,{xl:12,lg:24,sm:24,xs:24,style:{marginBottom:24}},t.a.createElement(Q.a,{title:t.a.createElement(y.a,{id:"dashboardandmonitor.monitor.proportion-per-category",defaultMessage:"Proportion Per Category"}),bordered:!1,className:Te.a.pieCard},t.a.createElement(re.a,{style:{padding:"16px 0"}},t.a.createElement(S.a,{span:8},t.a.createElement(oe,{animate:!1,percent:28,title:t.a.createElement(y.a,{id:"dashboardandmonitor.monitor.fast-food",defaultMessage:"Fast food"}),total:"28%",height:128,lineWidth:2})),t.a.createElement(S.a,{span:8},t.a.createElement(oe,{animate:!1,color:"#5DDECF",percent:22,title:t.a.createElement(y.a,{id:"dashboardandmonitor.monitor.western-food",defaultMessage:"Western food"}),total:"22%",height:128,lineWidth:2})),t.a.createElement(S.a,{span:8},t.a.createElement(oe,{animate:!1,color:"#2FC25B",percent:32,title:t.a.createElement(y.a,{id:"dashboardandmonitor.monitor.hot-pot",defaultMessage:"Hot pot"}),total:"32%",height:128,lineWidth:2}))))),t.a.createElement(S.a,{xl:6,lg:12,sm:24,xs:24,style:{marginBottom:24}},t.a.createElement(Q.a,{title:t.a.createElement(y.a,{id:"dashboardandmonitor.monitor.popular-searches",defaultMessage:"Popular Searches"}),loading:n,bordered:!1,bodyStyle:{overflow:"hidden"}},t.a.createElement(Fe,{data:s||[],height:161}))),t.a.createElement(S.a,{xl:6,lg:12,sm:24,xs:24,style:{marginBottom:24}},t.a.createElement(Q.a,{title:t.a.createElement(y.a,{id:"dashboardandmonitor.monitor.resource-surplus",defaultMessage:"Resource Surplus"}),bodyStyle:{textAlign:"center",fontSize:0},bordered:!1},t.a.createElement(We,{height:161,title:t.a.createElement(y.a,{id:"dashboardandmonitor.monitor.fund-surplus",defaultMessage:"Fund Surplus"}),percent:34}))))))}}]),c}(F.Component),Mt=w.default=Object(y.c)(function(m){var l=m.dashboardAndmonitor,c=m.loading;return{dashboardAndmonitor:l,loading:c.models.dashboardAndmonitor}})(ht)},d9mD:function(A,w,o){A.exports={pie:"pie___2nzPi",chart:"chart____y02v",hasLegend:"hasLegend___2tvLi",legend:"legend___aOylG",dot:"dot___3cUod",line:"line___3wzdx",legendTitle:"legendTitle___3d-qz",percent:"percent___1EUip",value:"value___3oEZu",title:"title___3EZr5",total:"total___2C3lg",legendBlock:"legendBlock___1RfCR"}},"iz+Y":function(A,w,o){A.exports={miniChart:"miniChart___27WlV",chartContent:"chartContent___2FNqq",chartLoading:"chartLoading___2DxhP"}}}]);
