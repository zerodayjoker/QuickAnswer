(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{"0NbB":function(B,I,m){"use strict";var w=m("VTBJ"),O=m("q1tI"),b={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"}}]},name:"caret-down",theme:"outlined"},C=b,c=m("6VBw"),l=function(h,T){return O.createElement(c.a,Object(w.a)(Object(w.a)({},h),{},{ref:T,icon:C}))};l.displayName="CaretDownOutlined";var y=I.a=O.forwardRef(l)},"1Gbu":function(B,I,m){(function(w,O){B.exports=O(m("q1tI"))})(this,function(w){return function(O){function b(c){if(C[c])return C[c].exports;var l=C[c]={i:c,l:!1,exports:{}};return O[c].call(l.exports,l,l.exports,b),l.l=!0,l.exports}var C={};return b.m=O,b.c=C,b.i=function(c){return c},b.d=function(c,l,y){b.o(c,l)||Object.defineProperty(c,l,{configurable:!1,enumerable:!0,get:y})},b.n=function(c){var l=c&&c.__esModule?function(){return c.default}:function(){return c};return b.d(l,"a",l),l},b.o=function(c,l){return Object.prototype.hasOwnProperty.call(c,l)},b.p="",b(b.s=4)}([function(O,b,C){"use strict";function c(n){return n&&n.__esModule?n:{default:n}}function l(n,t){var r={};for(var d in n)0>t.indexOf(d)&&Object.prototype.hasOwnProperty.call(n,d)&&(r[d]=n[d]);return r}function y(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function g(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||typeof t!="object"&&typeof t!="function"?n:t}function h(n,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}function T(n,t){if(n.onChange!==t.onChange)return!0;for(var r=0;a.length>r;r+=1){var d=a[r];if(!window.G2.Util.isEqual(n[d],t[d]))return!0}return!1}var s=Object.assign||function(n){for(var t=1;arguments.length>t;t++){var r=arguments[t];for(var d in r)Object.prototype.hasOwnProperty.call(r,d)&&(n[d]=r[d])}return n},u=function(){function n(t,r){for(var d=0;r.length>d;d++){var E=r[d];E.enumerable=E.enumerable||!1,E.configurable=!0,"value"in E&&(E.writable=!0),Object.defineProperty(t,E.key,E)}}return function(t,r,d){return r&&n(t.prototype,r),d&&n(t,d),t}}(),x=C(2),p=c(x),f=C(1),o=c(f),v=C(3),i=c(v),a=["width","height","padding","xAis","yAxis","start","end","fillerStyle","backgroundStyle","scales","textStyle","handleStyle","backgroundChart"],e=function(n){function t(){y(this,t);var r=g(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.refHandle=function(d){r.container||(r.container=d)},r.reBuild=!1,r}return h(t,n),u(t,[{key:"componentDidMount",value:function(){this.createG2Instance().render()}},{key:"componentWillReceiveProps",value:function(d){var E=this.props,P=E.data,M=l(E,["data"]),_=d.data,D=l(d,["data"]);P!==_&&(this.slider.changeData(_),this.slider.repaint()),T(M,D)&&(this.reBuild=!0)}},{key:"componentDidUpdate",value:function(){this.reBuild&&(this.slider.destroy(),this.createG2Instance().render(),this.reBuild=!1)}},{key:"componentWillUnmount",value:function(){this.slider.destroy()}},{key:"createG2Instance",value:function(){return this.slider=new p.default(s({container:this.container},this.props))}},{key:"render",value:function(){return o.default.createElement("div",{ref:this.refHandle})}}]),t}(f.Component);b.default=function(n){function t(){return y(this,t),g(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return h(t,n),u(t,[{key:"render",value:function(){return o.default.createElement(i.default,null,o.default.createElement(e,this.props))}}]),t}(f.Component),O.exports=b.default},function(O,b){O.exports=w},function(O,b,C){(function(c,l){O.exports=l()})(0,function(){return function(c){function l(g){if(y[g])return y[g].exports;var h=y[g]={i:g,l:!1,exports:{}};return c[g].call(h.exports,h,h.exports,l),h.l=!0,h.exports}var y={};return l.m=c,l.c=y,l.d=function(g,h,T){l.o(g,h)||Object.defineProperty(g,h,{configurable:!1,enumerable:!0,get:T})},l.n=function(g){var h=g&&g.__esModule?function(){return g.default}:function(){return g};return l.d(h,"a",h),h},l.o=function(g,h){return Object.prototype.hasOwnProperty.call(g,h)},l.p="",l(l.s=0)}([function(c,l,y){var g=y(1);window&&!window.G2&&console.err("Please load the G2 script first!"),c.exports=g},function(c,l,y){var g=y(2),h=window&&window.G2,T=h.Chart,s=h.Util,u=h.G,x=h.Global,p=u.Canvas,f=s.DomUtil,o=function(i){return typeof i=="number"};c.exports=function(){function v(a){this._initProps(),s.deepMix(this,a);var e=this.container;if(!e)throw Error("Please specify the container for the Slider!");this.domContainer=s.isString(e)?document.getElementById(e):e,this.handleStyle=s.mix({width:this.height,height:this.height},this.handleStyle),this.width==="auto"&&window.addEventListener("resize",s.wrapBehavior(this,"_initForceFitEvent"))}var i=v.prototype;return i._initProps=function(){this.height=26,this.width="auto",this.padding=x.plotCfg.padding,this.container=null,this.xAxis=null,this.yAxis=null,this.fillerStyle={fill:"#BDCCED",fillOpacity:.3},this.backgroundStyle={stroke:"#CCD6EC",fill:"#CCD6EC",fillOpacity:.3,lineWidth:1},this.range=[0,100],this.layout="horizontal",this.textStyle={fill:"#545454"},this.handleStyle={img:"https://gw.alipayobjects.com/zos/rmsportal/QXtfhORGlDuRvLXFzpsQ.png",width:5},this.backgroundChart={type:["area"],color:"#CCD6EC"}},i._initForceFitEvent=function(){var a=setTimeout(s.wrapBehavior(this,"forceFit"),200);clearTimeout(this.resizeTimer),this.resizeTimer=a},i.forceFit=function(){if(this&&!this.destroyed){var a=f.getWidth(this.domContainer),e=this.height;if(a!==this.domWidth){var n=this.canvas;n.changeSize(a,e),this.bgChart&&this.bgChart.changeWidth(a),n.clear(),this._initWidth(),this._initSlider(),this._bindEvent(),n.draw()}}},i._initWidth=function(){var a;a=this.width==="auto"?f.getWidth(this.domContainer):this.width,this.domWidth=a;var e=s.toAllPadding(this.padding);this.layout==="horizontal"?(this.plotWidth=a-e[1]-e[3],this.plotPadding=e[3],this.plotHeight=this.height):this.layout==="vertical"&&(this.plotWidth=this.width,this.plotHeight=this.height-e[0]-e[2],this.plotPadding=e[0])},i.render=function(){this._initWidth(),this._initCanvas(),this._initBackground(),this._initSlider(),this._bindEvent(),this.canvas.draw()},i.changeData=function(a){this.data=a,this.repaint()},i.destroy=function(){clearTimeout(this.resizeTimer),this.rangeElement.off("sliderchange"),this.bgChart&&this.bgChart.destroy(),this.canvas.destroy();for(var a=this.domContainer;a.hasChildNodes();)a.removeChild(a.firstChild);window.removeEventListener("resize",s.getWrapBehavior(this,"_initForceFitEvent")),this.destroyed=!0},i.clear=function(){this.canvas.clear(),this.bgChart&&this.bgChart.destroy(),this.bgChart=null,this.scale=null,this.canvas.draw()},i.repaint=function(){this.clear(),this.render()},i._initCanvas=function(){var a=this.domWidth,e=this.height,n=new p({width:a,height:e,containerDOM:this.domContainer,capture:!1}),t=n.get("el");t.style.position="absolute",t.style.top=0,t.style.left=0,t.style.zIndex=3,this.canvas=n},i._initBackground=function(){var a,e=this.data,n=this.xAxis,t=this.yAxis,r=s.deepMix((a={},a[""+n]={range:[0,1]},a),this.scales);if(!e)throw Error("Please specify the data!");if(!n)throw Error("Please specify the xAxis!");if(!t)throw Error("Please specify the yAxis!");var d=this.backgroundChart,E=d.type,P=d.color;s.isArray(E)||(E=[E]);var M=s.toAllPadding(this.padding),_=new T({container:this.container,width:this.domWidth,height:this.height,padding:[0,M[1],0,M[3]],animate:!1});_.source(e),_.scale(r),_.axis(!1),_.tooltip(!1),_.legend(!1),s.each(E,function(D){_[D]().position(n+"*"+t).color(P).opacity(1)}),_.render(),this.bgChart=_,this.scale=this.layout==="horizontal"?_.getXScale():_.getYScales()[0],this.layout==="vertical"&&_.destroy()},i._initRange=function(){var a=this.startRadio,e=this.endRadio,n=this.start,t=this.end,r=this.scale,d=0,E=1;o(a)?d=a:n&&(d=r.scale(r.translate(n))),o(e)?E=e:t&&(E=r.scale(r.translate(t)));var P=this.minSpan,M=this.maxSpan,_=0;if(r.type==="time"||r.type==="timeCat"){var D=r.values;_=D[D.length-1]-D[0]}else r.isLinear&&(_=r.max-r.min);_&&P&&(this.minRange=P/_*100),_&&M&&(this.maxRange=M/_*100);var R=[100*d,100*E];return this.range=R,R},i._getHandleValue=function(a){var e=this.range,n=e[0]/100,t=e[1]/100,r=this.scale;return a==="min"?this.start?this.start:r.invert(n):this.end?this.end:r.invert(t)},i._initSlider=function(){var a=this.canvas,e=this._initRange(),n=this.scale,t=a.addGroup(g,{middleAttr:this.fillerStyle,range:e,minRange:this.minRange,maxRange:this.maxRange,layout:this.layout,width:this.plotWidth,height:this.plotHeight,backgroundStyle:this.backgroundStyle,textStyle:this.textStyle,handleStyle:this.handleStyle,minText:n.getText(this._getHandleValue("min")),maxText:n.getText(this._getHandleValue("max"))});this.layout==="horizontal"?t.translate(this.plotPadding,0):this.layout==="vertical"&&t.translate(0,this.plotPadding),this.rangeElement=t},i._bindEvent=function(){var a=this;a.rangeElement.on("sliderchange",function(e){var n=e.range;a._updateElement(n[0]/100,n[1]/100)})},i._updateElement=function(a,e){var n=this.scale,t=this.rangeElement,r=t.get("minTextElement"),d=t.get("maxTextElement"),E=n.invert(a),P=n.invert(e),M=n.getText(E),_=n.getText(P);r.attr("text",M),d.attr("text",_),this.start=M,this.end=_,this.onChange&&this.onChange({startText:M,endText:_,startValue:E,endValue:P,startRadio:a,endRadio:e})},v}()},function(c,l){function y(x,p){x.prototype=Object.create(p.prototype),x.prototype.constructor=x,x.__proto__=p}var g=window&&window.G2,h=g.Util,T=g.G,s=T.Group,u=h.DomUtil;c.exports=function(x){function p(){return x.apply(this,arguments)||this}y(p,x);var f=p.prototype;return f.getDefaultCfg=function(){return{range:null,middleAttr:null,backgroundElement:null,minHandleElement:null,maxHandleElement:null,middleHandleElement:null,currentTarget:null,layout:"vertical",width:null,height:null,pageX:null,pageY:null}},f._initHandle=function(o){var v,i,a,e=this.addGroup(),n=this.get("layout"),t=this.get("handleStyle"),r=t.img,d=t.width,E=t.height;if(n==="horizontal"){var P=t.width;a="ew-resize",i=e.addShape("Image",{attrs:{x:-P/2,y:0,width:P,height:E,img:r,cursor:a}}),v=e.addShape("Text",{attrs:h.mix({x:o==="min"?-(P/2+5):P/2+5,y:E/2,textAlign:o==="min"?"end":"start",textBaseline:"middle",text:this.get(o==="min"?"minText":"maxText"),cursor:a},this.get("textStyle"))})}else a="ns-resize",i=e.addShape("Image",{attrs:{x:0,y:-E/2,width:d,height:E,img:r,cursor:a}}),v=e.addShape("Text",{attrs:h.mix({x:d/2,y:o==="min"?E/2+5:-(E/2+5),textAlign:"center",textBaseline:"middle",text:this.get(o==="min"?"minText":"maxText"),cursor:a},this.get("textStyle"))});return this.set(o+"TextElement",v),this.set(o+"IconElement",i),e},f._initSliderBackground=function(){var o=this.addGroup();return o.initTransform(),o.translate(0,0),o.addShape("Rect",{attrs:h.mix({x:0,y:0,width:this.get("width"),height:this.get("height")},this.get("backgroundStyle"))}),o},f._beforeRenderUI=function(){var o=this._initSliderBackground(),v=this._initHandle("min"),i=this._initHandle("max"),a=this.addShape("rect",{attrs:this.get("middleAttr")});this.set("middleHandleElement",a),this.set("minHandleElement",v),this.set("maxHandleElement",i),this.set("backgroundElement",o),o.set("zIndex",0),a.set("zIndex",1),v.set("zIndex",2),i.set("zIndex",2),a.attr("cursor","move"),this.sort()},f._renderUI=function(){this.get("layout")==="horizontal"?this._renderHorizontal():this._renderVertical()},f._transform=function(o){var v=this.get("range"),i=v[0]/100,a=v[1]/100,e=this.get("width"),n=this.get("height"),t=this.get("minHandleElement"),r=this.get("maxHandleElement"),d=this.get("middleHandleElement");t.resetMatrix?(t.resetMatrix(),r.resetMatrix()):(t.initTransform(),r.initTransform()),o==="horizontal"?(d.attr({x:e*i,y:0,width:(a-i)*e,height:n}),t.translate(i*e,0),r.translate(a*e,0)):(d.attr({x:0,y:n*(1-a),width:e,height:(a-i)*n}),t.translate(0,(1-i)*n),r.translate(0,(1-a)*n))},f._renderHorizontal=function(){this._transform("horizontal")},f._renderVertical=function(){this._transform("vertical")},f._bindUI=function(){this.on("mousedown",h.wrapBehavior(this,"_onMouseDown"))},f._isElement=function(o,v){var i=this.get(v);return o===i?!0:i.isGroup?i.get("children").indexOf(o)>-1:!1},f._getRange=function(o,v){var i=o+v;return i=i>100?100:i,i=0>i?0:i},f._limitRange=function(o,v,i){i[0]=this._getRange(o,i[0]),(i[1]=i[0]+v)>100&&(i[1]=100,i[0]=i[1]-v)},f._updateStatus=function(o,v){var i=this.get(o==="x"?"width":"height");o=h.upperFirst(o);var a,e=this.get("range"),n=this.get("page"+o),t=this.get("currentTarget"),r=this.get("rangeStash"),d=this.get("layout"),E=d==="vertical"?-1:1,P=v["page"+o],M=P-n,_=M/i*100*E,D=this.get("minRange"),R=this.get("maxRange");e[1]>e[0]?(this._isElement(t,"minHandleElement")&&(e[0]=this._getRange(_,e[0]),D&&(e[1]-e[0]>D||this._limitRange(_,D,e)),R&&(R>e[1]-e[0]||this._limitRange(_,R,e))),this._isElement(t,"maxHandleElement")&&(e[1]=this._getRange(_,e[1]),D&&(e[1]-e[0]>D||this._limitRange(_,D,e)),R&&(R>e[1]-e[0]||this._limitRange(_,R,e)))):(this._isElement(t,"minHandleElement")||this._isElement(t,"maxHandleElement"))&&(e[0]=this._getRange(_,e[0]),e[1]=this._getRange(_,e[0])),this._isElement(t,"middleHandleElement")&&(a=r[1]-r[0],this._limitRange(_,a,e)),this.emit("sliderchange",{range:e}),this.set("page"+o,P),this._renderUI(),this.get("canvas").draw()},f._onMouseDown=function(o){var v=o.currentTarget,i=o.event,a=this.get("range");i.stopPropagation(),i.preventDefault(),this.set("pageX",i.pageX),this.set("pageY",i.pageY),this.set("currentTarget",v),this.set("rangeStash",[a[0],a[1]]),this._bindCanvasEvents()},f._bindCanvasEvents=function(){var o=this.get("canvas").get("containerDOM");this.onMouseMoveListener=u.addEventListener(o,"mousemove",h.wrapBehavior(this,"_onCanvasMouseMove")),this.onMouseUpListener=u.addEventListener(o,"mouseup",h.wrapBehavior(this,"_onCanvasMouseUp")),this.onMouseLeaveListener=u.addEventListener(o,"mouseleave",h.wrapBehavior(this,"_onCanvasMouseUp"))},f._onCanvasMouseMove=function(o){this.get("layout")==="horizontal"?this._updateStatus("x",o):this._updateStatus("y",o)},f._onCanvasMouseUp=function(){this._removeDocumentEvents()},f._removeDocumentEvents=function(){this.onMouseMoveListener.remove(),this.onMouseUpListener.remove(),this.onMouseLeaveListener.remove()},p}(s)}])})},function(O,b,C){"use strict";function c(s,u){if(!(s instanceof u))throw new TypeError("Cannot call a class as a function")}function l(s,u){if(!s)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!u||typeof u!="object"&&typeof u!="function"?s:u}function y(s,u){if(typeof u!="function"&&u!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof u);s.prototype=Object.create(u&&u.prototype,{constructor:{value:s,enumerable:!1,writable:!0,configurable:!0}}),u&&(Object.setPrototypeOf?Object.setPrototypeOf(s,u):s.__proto__=u)}Object.defineProperty(b,"__esModule",{value:!0});var g=function(){function s(u,x){for(var p=0;x.length>p;p++){var f=x[p];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(u,f.key,f)}}return function(u,x,p){return x&&s(u.prototype,x),p&&s(u,p),u}}(),h=C(1),T=function(s){return s&&s.__esModule?s:{default:s}}(h);b.default=function(s){function u(x){c(this,u);var p=l(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,x));return p.state={hasError:!1},p}return y(u,s),g(u,[{key:"componentDidCatch",value:function(p,f){this.setState({hasError:!0})}},{key:"unstable_handleError",value:function(p,f){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?T.default.createElement("h1",null,"Slider error."):this.props.children}}]),u}(T.default.Component)},function(O,b,C){C(0),O.exports=C(0)}])})},FVlm:function(B,I,m){B.exports={numberInfo:"numberInfo___UaaEB",suffix:"suffix____RiYG",numberInfoTitle:"numberInfoTitle___1p55z",numberInfoSubTitle:"numberInfoSubTitle___3E3Dh",numberInfoValue:"numberInfoValue___87JVx",subTotal:"subTotal___sq0f-",anticon:"anticon___1FWew",numberInfolight:"numberInfolight___YO5rJ"}},Hq6x:function(B,I,m){"use strict";var w=m("0Owb"),O=m("jrin"),b=m("PpiC"),C=m("ek7X"),c=m("0NbB"),l=m("q1tI"),y=m.n(l),g=m("TSYQ"),h=m.n(g),T=m("FVlm"),s=m.n(T),u=function(p){var f=p.theme,o=p.title,v=p.subTitle,i=p.total,a=p.subTotal,e=p.status,n=p.suffix,t=p.gap,r=Object(b.a)(p,["theme","title","subTitle","total","subTotal","status","suffix","gap"]);return y.a.createElement("div",Object(w.a)({className:h()(s.a.numberInfo,Object(O.a)({},s.a["numberInfo".concat(f)],f))},r),o&&y.a.createElement("div",{className:s.a.numberInfoTitle,title:typeof o=="string"?o:""},o),v&&y.a.createElement("div",{className:s.a.numberInfoSubTitle,title:typeof v=="string"?v:""},v),y.a.createElement("div",{className:s.a.numberInfoValue,style:t?{marginTop:t}:{}},y.a.createElement("span",null,i,n&&y.a.createElement("em",{className:s.a.suffix},n)),(e||a)&&y.a.createElement("span",{className:s.a.subTotal},a,e&&e==="up"?y.a.createElement(C.a,null):y.a.createElement(c.a,null))))};I.a=u},ek7X:function(B,I,m){"use strict";var w=m("VTBJ"),O=m("q1tI"),b={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"}}]},name:"caret-up",theme:"outlined"},C=b,c=m("6VBw"),l=function(h,T){return O.createElement(c.a,Object(w.a)(Object(w.a)({},h),{},{ref:T,icon:C}))};l.displayName="CaretUpOutlined";var y=I.a=O.forwardRef(l)},vvVX:function(B,I,m){"use strict";m.r(I);var w=m("IzEo"),O=m("bx4M"),b=m("Znn+"),C=m("ZTPi"),c=m("14J3"),l=m("BMrR"),y=m("jCWc"),g=m("kPKH"),h=m("9kvl"),T=m("q1tI"),s=m.n(T),u=m("ucLW"),x=m("Hq6x"),p=m("UXoT"),f=m.n(p),o=function(e){var n=e.data,t=e.currentTabKey;return s.a.createElement(l.a,{gutter:8,style:{width:138,margin:"8px 0"}},s.a.createElement(g.a,{span:12},s.a.createElement(x.a,{title:n.name,subTitle:s.a.createElement(h.a,{id:"dashboardandanalysis.analysis.conversion-rate",defaultMessage:"Conversion Rate"}),gap:2,total:"".concat(n.cvr*100,"%"),theme:t!==n.name?"light":void 0})),s.a.createElement(g.a,{span:12,style:{paddingTop:36}},s.a.createElement(u.g,{animate:!1,inner:.55,tooltip:!1,margin:[0,0,0,0],percent:n.cvr*100,height:64})))},v=C.a.TabPane,i=function(e){var n=e.activeKey,t=e.loading,r=e.offlineData,d=e.offlineChartData,E=e.handleTabChange;return s.a.createElement(O.a,{loading:t,className:f.a.offlineCard,bordered:!1,style:{marginTop:32}},s.a.createElement(C.a,{activeKey:n,onChange:E},r.map(function(P){return s.a.createElement(v,{tab:s.a.createElement(o,{data:P,currentTabKey:n}),key:P.name},s.a.createElement("div",{style:{padding:"0 24px"}},s.a.createElement(u.h,{height:400,data:d,titleMap:{y1:Object(h.d)({id:"dashboardandanalysis.analysis.traffic"}),y2:Object(h.d)({id:"dashboardandanalysis.analysis.payments"})}})))})))};I.default=i}}]);
