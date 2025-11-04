var Ma=Object.create;var pr=Object.defineProperty;var Pa=Object.getOwnPropertyDescriptor;var La=Object.getOwnPropertyNames;var Ra=Object.getPrototypeOf,Ia=Object.prototype.hasOwnProperty;var Da=(t,h,e)=>h in t?pr(t,h,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[h]=e;var Fa=(t,h)=>()=>(h||t((h={exports:{}}).exports,h),h.exports);var Ba=(t,h,e,n)=>{if(h&&typeof h=="object"||typeof h=="function")for(let o of La(h))!Ia.call(t,o)&&o!==e&&pr(t,o,{get:()=>h[o],enumerable:!(n=Pa(h,o))||n.enumerable});return t};var Na=(t,h,e)=>(e=t!=null?Ma(Ra(t)):{},Ba(h||!t||!t.__esModule?pr(e,"default",{value:t,enumerable:!0}):e,t));var dt=(t,h,e)=>Da(t,typeof h!="symbol"?h+"":h,e);var jr=Fa((hr,ii)=>{(function(t,h){typeof hr=="object"&&typeof ii!="undefined"?ii.exports=h():typeof define=="function"&&define.amd?define(h):(t=typeof globalThis!="undefined"?globalThis:t||self).interact=h()})(hr,(function(){"use strict";function t(r,i){var a=Object.keys(r);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(r);i&&(d=d.filter((function(p){return Object.getOwnPropertyDescriptor(r,p).enumerable}))),a.push.apply(a,d)}return a}function h(r){for(var i=1;i<arguments.length;i++){var a=arguments[i]!=null?arguments[i]:{};i%2?t(Object(a),!0).forEach((function(d){s(r,d,a[d])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(d){Object.defineProperty(r,d,Object.getOwnPropertyDescriptor(a,d))}))}return r}function e(r){return e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},e(r)}function n(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")}function o(r,i){for(var a=0;a<i.length;a++){var d=i[a];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(r,x(d.key),d)}}function c(r,i,a){return i&&o(r.prototype,i),a&&o(r,a),Object.defineProperty(r,"prototype",{writable:!1}),r}function s(r,i,a){return(i=x(i))in r?Object.defineProperty(r,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[i]=a,r}function l(r,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(i&&i.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),i&&f(r,i)}function u(r){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},u(r)}function f(r,i){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,d){return a.__proto__=d,a},f(r,i)}function m(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function v(r){var i=(function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch{return!1}})();return function(){var a,d=u(r);if(i){var p=u(this).constructor;a=Reflect.construct(d,arguments,p)}else a=d.apply(this,arguments);return(function(g,b){if(b&&(typeof b=="object"||typeof b=="function"))return b;if(b!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return m(g)})(this,a)}}function y(){return y=typeof Reflect!="undefined"&&Reflect.get?Reflect.get.bind():function(r,i,a){var d=(function(g,b){for(;!Object.prototype.hasOwnProperty.call(g,b)&&(g=u(g))!==null;);return g})(r,i);if(d){var p=Object.getOwnPropertyDescriptor(d,i);return p.get?p.get.call(arguments.length<3?r:a):p.value}},y.apply(this,arguments)}function x(r){var i=(function(a,d){if(typeof a!="object"||a===null)return a;var p=a[Symbol.toPrimitive];if(p!==void 0){var g=p.call(a,d||"default");if(typeof g!="object")return g;throw new TypeError("@@toPrimitive must return a primitive value.")}return(d==="string"?String:Number)(a)})(r,"string");return typeof i=="symbol"?i:i+""}var O=function(r){return!(!r||!r.Window)&&r instanceof r.Window},S=void 0,A=void 0;function L(r){S=r;var i=r.document.createTextNode("");i.ownerDocument!==r.document&&typeof r.wrap=="function"&&r.wrap(i)===i&&(r=r.wrap(r)),A=r}function C(r){return O(r)?r:(r.ownerDocument||r).defaultView||A.window}typeof window!="undefined"&&window&&L(window);var T=function(r){return!!r&&e(r)==="object"},M=function(r){return typeof r=="function"},_={window:function(r){return r===A||O(r)},docFrag:function(r){return T(r)&&r.nodeType===11},object:T,func:M,number:function(r){return typeof r=="number"},bool:function(r){return typeof r=="boolean"},string:function(r){return typeof r=="string"},element:function(r){if(!r||e(r)!=="object")return!1;var i=C(r)||A;return/object|function/.test(typeof Element=="undefined"?"undefined":e(Element))?r instanceof Element||r instanceof i.Element:r.nodeType===1&&typeof r.nodeName=="string"},plainObject:function(r){return T(r)&&!!r.constructor&&/function Object\b/.test(r.constructor.toString())},array:function(r){return T(r)&&r.length!==void 0&&M(r.splice)}};function P(r){var i=r.interaction;if(i.prepared.name==="drag"){var a=i.prepared.axis;a==="x"?(i.coords.cur.page.y=i.coords.start.page.y,i.coords.cur.client.y=i.coords.start.client.y,i.coords.velocity.client.y=0,i.coords.velocity.page.y=0):a==="y"&&(i.coords.cur.page.x=i.coords.start.page.x,i.coords.cur.client.x=i.coords.start.client.x,i.coords.velocity.client.x=0,i.coords.velocity.page.x=0)}}function D(r){var i=r.iEvent,a=r.interaction;if(a.prepared.name==="drag"){var d=a.prepared.axis;if(d==="x"||d==="y"){var p=d==="x"?"y":"x";i.page[p]=a.coords.start.page[p],i.client[p]=a.coords.start.client[p],i.delta[p]=0}}}var K={id:"actions/drag",install:function(r){var i=r.actions,a=r.Interactable,d=r.defaults;a.prototype.draggable=K.draggable,i.map.drag=K,i.methodDict.drag="draggable",d.actions.drag=K.defaults},listeners:{"interactions:before-action-move":P,"interactions:action-resume":P,"interactions:action-move":D,"auto-start:check":function(r){var i=r.interaction,a=r.interactable,d=r.buttons,p=a.options.drag;if(p&&p.enabled&&(!i.pointerIsDown||!/mouse|pointer/.test(i.pointerType)||(d&a.options.drag.mouseButtons)!=0))return r.action={name:"drag",axis:p.lockAxis==="start"?p.startAxis:p.lockAxis},!1}},draggable:function(r){return _.object(r)?(this.options.drag.enabled=r.enabled!==!1,this.setPerAction("drag",r),this.setOnEvents("drag",r),/^(xy|x|y|start)$/.test(r.lockAxis)&&(this.options.drag.lockAxis=r.lockAxis),/^(xy|x|y)$/.test(r.startAxis)&&(this.options.drag.startAxis=r.startAxis),this):_.bool(r)?(this.options.drag.enabled=r,this):this.options.drag},beforeMove:P,move:D,defaults:{startAxis:"xy",lockAxis:"xy"},getCursor:function(){return"move"},filterEventType:function(r){return r.search("drag")===0}},J=K,U={init:function(r){var i=r;U.document=i.document,U.DocumentFragment=i.DocumentFragment||ae,U.SVGElement=i.SVGElement||ae,U.SVGSVGElement=i.SVGSVGElement||ae,U.SVGElementInstance=i.SVGElementInstance||ae,U.Element=i.Element||ae,U.HTMLElement=i.HTMLElement||U.Element,U.Event=i.Event,U.Touch=i.Touch||ae,U.PointerEvent=i.PointerEvent||i.MSPointerEvent},document:null,DocumentFragment:null,SVGElement:null,SVGSVGElement:null,SVGElementInstance:null,Element:null,HTMLElement:null,Event:null,Touch:null,PointerEvent:null};function ae(){}var H=U,G={init:function(r){var i=H.Element,a=r.navigator||{};G.supportsTouch="ontouchstart"in r||_.func(r.DocumentTouch)&&H.document instanceof r.DocumentTouch,G.supportsPointerEvent=a.pointerEnabled!==!1&&!!H.PointerEvent,G.isIOS=/iP(hone|od|ad)/.test(a.platform),G.isIOS7=/iP(hone|od|ad)/.test(a.platform)&&/OS 7[^\d]/.test(a.appVersion),G.isIe9=/MSIE 9/.test(a.userAgent),G.isOperaMobile=a.appName==="Opera"&&G.supportsTouch&&/Presto/.test(a.userAgent),G.prefixedMatchesSelector="matches"in i.prototype?"matches":"webkitMatchesSelector"in i.prototype?"webkitMatchesSelector":"mozMatchesSelector"in i.prototype?"mozMatchesSelector":"oMatchesSelector"in i.prototype?"oMatchesSelector":"msMatchesSelector",G.pEventTypes=G.supportsPointerEvent?H.PointerEvent===r.MSPointerEvent?{up:"MSPointerUp",down:"MSPointerDown",over:"mouseover",out:"mouseout",move:"MSPointerMove",cancel:"MSPointerCancel"}:{up:"pointerup",down:"pointerdown",over:"pointerover",out:"pointerout",move:"pointermove",cancel:"pointercancel"}:null,G.wheelEvent=H.document&&"onmousewheel"in H.document?"mousewheel":"wheel"},supportsTouch:null,supportsPointerEvent:null,isIOS7:null,isIOS:null,isIe9:null,isOperaMobile:null,prefixedMatchesSelector:null,pEventTypes:null,wheelEvent:null},ee=G;function ue(r,i){if(r.contains)return r.contains(i);for(;i;){if(i===r)return!0;i=i.parentNode}return!1}function We(r,i){for(;_.element(r);){if(Oe(r,i))return r;r=fe(r)}return null}function fe(r){var i=r.parentNode;if(_.docFrag(i)){for(;(i=i.host)&&_.docFrag(i););return i}return i}function Oe(r,i){return A!==S&&(i=i.replace(/\/deep\//g," ")),r[ee.prefixedMatchesSelector](i)}var Ce=function(r){return r.parentNode||r.host};function ke(r,i){for(var a,d=[],p=r;(a=Ce(p))&&p!==i&&a!==p.ownerDocument;)d.unshift(p),p=a;return d}function Xe(r,i,a){for(;_.element(r);){if(Oe(r,i))return!0;if((r=fe(r))===a)return Oe(r,i)}return!1}function Je(r){return r.correspondingUseElement||r}function Ue(r){var i=r instanceof H.SVGElement?r.getBoundingClientRect():r.getClientRects()[0];return i&&{left:i.left,right:i.right,top:i.top,bottom:i.bottom,width:i.width||i.right-i.left,height:i.height||i.bottom-i.top}}function at(r){var i,a=Ue(r);if(!ee.isIOS7&&a){var d={x:(i=(i=C(r))||A).scrollX||i.document.documentElement.scrollLeft,y:i.scrollY||i.document.documentElement.scrollTop};a.left+=d.x,a.right+=d.x,a.top+=d.y,a.bottom+=d.y}return a}function ct(r){for(var i=[];r;)i.push(r),r=fe(r);return i}function rt(r){return!!_.string(r)&&(H.document.querySelector(r),!0)}function re(r,i){for(var a in i)r[a]=i[a];return r}function ft(r,i,a){return r==="parent"?fe(a):r==="self"?i.getRect(a):We(a,r)}function et(r,i,a,d){var p=r;return _.string(p)?p=ft(p,i,a):_.func(p)&&(p=p.apply(void 0,d)),_.element(p)&&(p=at(p)),p}function Ne(r){return r&&{x:"x"in r?r.x:r.left,y:"y"in r?r.y:r.top}}function ne(r){return!r||"x"in r&&"y"in r||((r=re({},r)).x=r.left||0,r.y=r.top||0,r.width=r.width||(r.right||0)-r.x,r.height=r.height||(r.bottom||0)-r.y),r}function Ee(r,i,a){r.left&&(i.left+=a.x),r.right&&(i.right+=a.x),r.top&&(i.top+=a.y),r.bottom&&(i.bottom+=a.y),i.width=i.right-i.left,i.height=i.bottom-i.top}function Me(r,i,a){var d=a&&r.options[a];return Ne(et(d&&d.origin||r.options.origin,r,i,[r&&i]))||{x:0,y:0}}function Ae(r,i){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(k){return!0},d=arguments.length>3?arguments[3]:void 0;if(d=d||{},_.string(r)&&r.search(" ")!==-1&&(r=nt(r)),_.array(r))return r.forEach((function(k){return Ae(k,i,a,d)})),d;if(_.object(r)&&(i=r,r=""),_.func(i)&&a(r))d[r]=d[r]||[],d[r].push(i);else if(_.array(i))for(var p=0,g=i;p<g.length;p++){var b=g[p];Ae(r,b,a,d)}else if(_.object(i))for(var w in i)Ae(nt(w).map((function(k){return"".concat(r).concat(k)})),i[w],a,d);return d}function nt(r){return r.trim().split(/ +/)}var pt=function(r,i){return Math.sqrt(r*r+i*i)},bt=["webkit","moz"];function Ct(r,i){r.__set||(r.__set={});var a=function(p){if(bt.some((function(g){return p.indexOf(g)===0})))return 1;typeof r[p]!="function"&&p!=="__set"&&Object.defineProperty(r,p,{get:function(){return p in r.__set?r.__set[p]:r.__set[p]=i[p]},set:function(g){r.__set[p]=g},configurable:!0})};for(var d in i)a(d);return r}function Et(r,i){r.page=r.page||{},r.page.x=i.page.x,r.page.y=i.page.y,r.client=r.client||{},r.client.x=i.client.x,r.client.y=i.client.y,r.timeStamp=i.timeStamp}function Pt(r){r.page.x=0,r.page.y=0,r.client.x=0,r.client.y=0}function Yt(r){return r instanceof H.Event||r instanceof H.Touch}function qe(r,i,a){return r=r||"page",(a=a||{}).x=i[r+"X"],a.y=i[r+"Y"],a}function ot(r,i){return i=i||{x:0,y:0},ee.isOperaMobile&&Yt(r)?(qe("screen",r,i),i.x+=window.scrollX,i.y+=window.scrollY):qe("page",r,i),i}function st(r){return _.number(r.pointerId)?r.pointerId:r.identifier}function $t(r,i,a){var d=i.length>1?Ft(i):i[0];ot(d,r.page),(function(p,g){g=g||{},ee.isOperaMobile&&Yt(p)?qe("screen",p,g):qe("client",p,g)})(d,r.client),r.timeStamp=a}function _t(r){var i=[];return _.array(r)?(i[0]=r[0],i[1]=r[1]):r.type==="touchend"?r.touches.length===1?(i[0]=r.touches[0],i[1]=r.changedTouches[0]):r.touches.length===0&&(i[0]=r.changedTouches[0],i[1]=r.changedTouches[1]):(i[0]=r.touches[0],i[1]=r.touches[1]),i}function Ft(r){for(var i={pageX:0,pageY:0,clientX:0,clientY:0,screenX:0,screenY:0},a=0;a<r.length;a++){var d=r[a];for(var p in i)i[p]+=d[p]}for(var g in i)i[g]/=r.length;return i}function At(r){if(!r.length)return null;var i=_t(r),a=Math.min(i[0].pageX,i[1].pageX),d=Math.min(i[0].pageY,i[1].pageY),p=Math.max(i[0].pageX,i[1].pageX),g=Math.max(i[0].pageY,i[1].pageY);return{x:a,y:d,left:a,top:d,right:p,bottom:g,width:p-a,height:g-d}}function mt(r,i){var a=i+"X",d=i+"Y",p=_t(r),g=p[0][a]-p[1][a],b=p[0][d]-p[1][d];return pt(g,b)}function ge(r,i){var a=i+"X",d=i+"Y",p=_t(r),g=p[1][a]-p[0][a],b=p[1][d]-p[0][d];return 180*Math.atan2(b,g)/Math.PI}function j(r){return _.string(r.pointerType)?r.pointerType:_.number(r.pointerType)?[void 0,void 0,"touch","pen","mouse"][r.pointerType]:/touch/.test(r.type||"")||r instanceof H.Touch?"touch":"mouse"}function $(r){var i=_.func(r.composedPath)?r.composedPath():r.path;return[Je(i?i[0]:r.target),Je(r.currentTarget)]}var pe=(function(){function r(i){n(this,r),this.immediatePropagationStopped=!1,this.propagationStopped=!1,this._interaction=i}return c(r,[{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}]),r})();Object.defineProperty(pe.prototype,"interaction",{get:function(){return this._interaction._proxy},set:function(){}});var ve=function(r,i){for(var a=0;a<i.length;a++){var d=i[a];r.push(d)}return r},le=function(r){return ve([],r)},_e=function(r,i){for(var a=0;a<r.length;a++)if(i(r[a],a,r))return a;return-1},W=function(r,i){return r[_e(r,i)]},Z=(function(r){l(a,r);var i=v(a);function a(d,p,g){var b;n(this,a),(b=i.call(this,p._interaction)).dropzone=void 0,b.dragEvent=void 0,b.relatedTarget=void 0,b.draggable=void 0,b.propagationStopped=!1,b.immediatePropagationStopped=!1;var w=g==="dragleave"?d.prev:d.cur,k=w.element,z=w.dropzone;return b.type=g,b.target=k,b.currentTarget=k,b.dropzone=z,b.dragEvent=p,b.relatedTarget=p.target,b.draggable=p.interactable,b.timeStamp=p.timeStamp,b}return c(a,[{key:"reject",value:function(){var d=this,p=this._interaction.dropState;if(this.type==="dropactivate"||this.dropzone&&p.cur.dropzone===this.dropzone&&p.cur.element===this.target)if(p.prev.dropzone=this.dropzone,p.prev.element=this.target,p.rejected=!0,p.events.enter=null,this.stopImmediatePropagation(),this.type==="dropactivate"){var g=p.activeDrops,b=_e(g,(function(k){var z=k.dropzone,E=k.element;return z===d.dropzone&&E===d.target}));p.activeDrops.splice(b,1);var w=new a(p,this.dragEvent,"dropdeactivate");w.dropzone=this.dropzone,w.target=this.target,this.dropzone.fire(w)}else this.dropzone.fire(new a(p,this.dragEvent,"dragleave"))}},{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}]),a})(pe);function Ie(r,i){for(var a=0,d=r.slice();a<d.length;a++){var p=d[a],g=p.dropzone,b=p.element;i.dropzone=g,i.target=b,g.fire(i),i.propagationStopped=i.immediatePropagationStopped=!1}}function Y(r,i){for(var a=(function(g,b){for(var w=[],k=0,z=g.interactables.list;k<z.length;k++){var E=z[k];if(E.options.drop.enabled){var R=E.options.drop.accept;if(!(_.element(R)&&R!==b||_.string(R)&&!Oe(b,R)||_.func(R)&&!R({dropzone:E,draggableElement:b})))for(var q=0,Q=E.getAllElements();q<Q.length;q++){var X=Q[q];X!==b&&w.push({dropzone:E,element:X,rect:E.getRect(X)})}}}return w})(r,i),d=0;d<a.length;d++){var p=a[d];p.rect=p.dropzone.getRect(p.element)}return a}function Ke(r,i,a){for(var d=r.dropState,p=r.interactable,g=r.element,b=[],w=0,k=d.activeDrops;w<k.length;w++){var z=k[w],E=z.dropzone,R=z.element,q=z.rect,Q=E.dropCheck(i,a,p,g,R,q);b.push(Q?R:null)}var X=(function(te){for(var de,ce,me,Pe=[],He=0;He<te.length;He++){var Se=te[He],Re=te[de];if(Se&&He!==de)if(Re){var St=Ce(Se),it=Ce(Re);if(St!==Se.ownerDocument)if(it!==Se.ownerDocument)if(St!==it){Pe=Pe.length?Pe:ke(Re);var Mt=void 0;if(Re instanceof H.HTMLElement&&Se instanceof H.SVGElement&&!(Se instanceof H.SVGSVGElement)){if(Se===it)continue;Mt=Se.ownerSVGElement}else Mt=Se;for(var Dt=ke(Mt,Re.ownerDocument),jt=0;Dt[jt]&&Dt[jt]===Pe[jt];)jt++;var Xi=[Dt[jt-1],Dt[jt],Pe[jt]];if(Xi[0])for(var zi=Xi[0].lastChild;zi;){if(zi===Xi[1]){de=He,Pe=Dt;break}if(zi===Xi[2])break;zi=zi.previousSibling}}else me=Re,(parseInt(C(ce=Se).getComputedStyle(ce).zIndex,10)||0)>=(parseInt(C(me).getComputedStyle(me).zIndex,10)||0)&&(de=He);else de=He}else de=He}return de})(b);return d.activeDrops[X]||null}function Ye(r,i,a){var d=r.dropState,p={enter:null,leave:null,activate:null,deactivate:null,move:null,drop:null};return a.type==="dragstart"&&(p.activate=new Z(d,a,"dropactivate"),p.activate.target=null,p.activate.dropzone=null),a.type==="dragend"&&(p.deactivate=new Z(d,a,"dropdeactivate"),p.deactivate.target=null,p.deactivate.dropzone=null),d.rejected||(d.cur.element!==d.prev.element&&(d.prev.dropzone&&(p.leave=new Z(d,a,"dragleave"),a.dragLeave=p.leave.target=d.prev.element,a.prevDropzone=p.leave.dropzone=d.prev.dropzone),d.cur.dropzone&&(p.enter=new Z(d,a,"dragenter"),a.dragEnter=d.cur.element,a.dropzone=d.cur.dropzone)),a.type==="dragend"&&d.cur.dropzone&&(p.drop=new Z(d,a,"drop"),a.dropzone=d.cur.dropzone,a.relatedTarget=d.cur.element),a.type==="dragmove"&&d.cur.dropzone&&(p.move=new Z(d,a,"dropmove"),a.dropzone=d.cur.dropzone)),p}function Qe(r,i){var a=r.dropState,d=a.activeDrops,p=a.cur,g=a.prev;i.leave&&g.dropzone.fire(i.leave),i.enter&&p.dropzone.fire(i.enter),i.move&&p.dropzone.fire(i.move),i.drop&&p.dropzone.fire(i.drop),i.deactivate&&Ie(d,i.deactivate),a.prev.dropzone=p.dropzone,a.prev.element=p.element}function Fe(r,i){var a=r.interaction,d=r.iEvent,p=r.event;if(d.type==="dragmove"||d.type==="dragend"){var g=a.dropState;i.dynamicDrop&&(g.activeDrops=Y(i,a.element));var b=d,w=Ke(a,b,p);g.rejected=g.rejected&&!!w&&w.dropzone===g.cur.dropzone&&w.element===g.cur.element,g.cur.dropzone=w&&w.dropzone,g.cur.element=w&&w.element,g.events=Ye(a,0,b)}}var tt={id:"actions/drop",install:function(r){var i=r.actions,a=r.interactStatic,d=r.Interactable,p=r.defaults;r.usePlugin(J),d.prototype.dropzone=function(g){return(function(b,w){if(_.object(w)){if(b.options.drop.enabled=w.enabled!==!1,w.listeners){var k=Ae(w.listeners),z=Object.keys(k).reduce((function(R,q){return R[/^(enter|leave)/.test(q)?"drag".concat(q):/^(activate|deactivate|move)/.test(q)?"drop".concat(q):q]=k[q],R}),{}),E=b.options.drop.listeners;E&&b.off(E),b.on(z),b.options.drop.listeners=z}return _.func(w.ondrop)&&b.on("drop",w.ondrop),_.func(w.ondropactivate)&&b.on("dropactivate",w.ondropactivate),_.func(w.ondropdeactivate)&&b.on("dropdeactivate",w.ondropdeactivate),_.func(w.ondragenter)&&b.on("dragenter",w.ondragenter),_.func(w.ondragleave)&&b.on("dragleave",w.ondragleave),_.func(w.ondropmove)&&b.on("dropmove",w.ondropmove),/^(pointer|center)$/.test(w.overlap)?b.options.drop.overlap=w.overlap:_.number(w.overlap)&&(b.options.drop.overlap=Math.max(Math.min(1,w.overlap),0)),"accept"in w&&(b.options.drop.accept=w.accept),"checker"in w&&(b.options.drop.checker=w.checker),b}return _.bool(w)?(b.options.drop.enabled=w,b):b.options.drop})(this,g)},d.prototype.dropCheck=function(g,b,w,k,z,E){return(function(R,q,Q,X,te,de,ce){var me=!1;if(!(ce=ce||R.getRect(de)))return!!R.options.drop.checker&&R.options.drop.checker(q,Q,me,R,de,X,te);var Pe=R.options.drop.overlap;if(Pe==="pointer"){var He=Me(X,te,"drag"),Se=ot(q);Se.x+=He.x,Se.y+=He.y;var Re=Se.x>ce.left&&Se.x<ce.right,St=Se.y>ce.top&&Se.y<ce.bottom;me=Re&&St}var it=X.getRect(te);if(it&&Pe==="center"){var Mt=it.left+it.width/2,Dt=it.top+it.height/2;me=Mt>=ce.left&&Mt<=ce.right&&Dt>=ce.top&&Dt<=ce.bottom}return it&&_.number(Pe)&&(me=Math.max(0,Math.min(ce.right,it.right)-Math.max(ce.left,it.left))*Math.max(0,Math.min(ce.bottom,it.bottom)-Math.max(ce.top,it.top))/(it.width*it.height)>=Pe),R.options.drop.checker&&(me=R.options.drop.checker(q,Q,me,R,de,X,te)),me})(this,g,b,w,k,z,E)},a.dynamicDrop=function(g){return _.bool(g)?(r.dynamicDrop=g,a):r.dynamicDrop},re(i.phaselessTypes,{dragenter:!0,dragleave:!0,dropactivate:!0,dropdeactivate:!0,dropmove:!0,drop:!0}),i.methodDict.drop="dropzone",r.dynamicDrop=!1,p.actions.drop=tt.defaults},listeners:{"interactions:before-action-start":function(r){var i=r.interaction;i.prepared.name==="drag"&&(i.dropState={cur:{dropzone:null,element:null},prev:{dropzone:null,element:null},rejected:null,events:null,activeDrops:[]})},"interactions:after-action-start":function(r,i){var a=r.interaction,d=(r.event,r.iEvent);if(a.prepared.name==="drag"){var p=a.dropState;p.activeDrops=[],p.events={},p.activeDrops=Y(i,a.element),p.events=Ye(a,0,d),p.events.activate&&(Ie(p.activeDrops,p.events.activate),i.fire("actions/drop:start",{interaction:a,dragEvent:d}))}},"interactions:action-move":Fe,"interactions:after-action-move":function(r,i){var a=r.interaction,d=r.iEvent;if(a.prepared.name==="drag"){var p=a.dropState;Qe(a,p.events),i.fire("actions/drop:move",{interaction:a,dragEvent:d}),p.events={}}},"interactions:action-end":function(r,i){if(r.interaction.prepared.name==="drag"){var a=r.interaction,d=r.iEvent;Fe(r,i),Qe(a,a.dropState.events),i.fire("actions/drop:end",{interaction:a,dragEvent:d})}},"interactions:stop":function(r){var i=r.interaction;if(i.prepared.name==="drag"){var a=i.dropState;a&&(a.activeDrops=null,a.events=null,a.cur.dropzone=null,a.cur.element=null,a.prev.dropzone=null,a.prev.element=null,a.rejected=!1)}}},getActiveDrops:Y,getDrop:Ke,getDropEvents:Ye,fireDropEvents:Qe,filterEventType:function(r){return r.search("drag")===0||r.search("drop")===0},defaults:{enabled:!1,accept:null,overlap:"pointer"}},Ve=tt;function Ge(r){var i=r.interaction,a=r.iEvent,d=r.phase;if(i.prepared.name==="gesture"){var p=i.pointers.map((function(z){return z.pointer})),g=d==="start",b=d==="end",w=i.interactable.options.deltaSource;if(a.touches=[p[0],p[1]],g)a.distance=mt(p,w),a.box=At(p),a.scale=1,a.ds=0,a.angle=ge(p,w),a.da=0,i.gesture.startDistance=a.distance,i.gesture.startAngle=a.angle;else if(b||i.pointers.length<2){var k=i.prevEvent;a.distance=k.distance,a.box=k.box,a.scale=k.scale,a.ds=0,a.angle=k.angle,a.da=0}else a.distance=mt(p,w),a.box=At(p),a.scale=a.distance/i.gesture.startDistance,a.angle=ge(p,w),a.ds=a.scale-i.gesture.scale,a.da=a.angle-i.gesture.angle;i.gesture.distance=a.distance,i.gesture.angle=a.angle,_.number(a.scale)&&a.scale!==1/0&&!isNaN(a.scale)&&(i.gesture.scale=a.scale)}}var $e={id:"actions/gesture",before:["actions/drag","actions/resize"],install:function(r){var i=r.actions,a=r.Interactable,d=r.defaults;a.prototype.gesturable=function(p){return _.object(p)?(this.options.gesture.enabled=p.enabled!==!1,this.setPerAction("gesture",p),this.setOnEvents("gesture",p),this):_.bool(p)?(this.options.gesture.enabled=p,this):this.options.gesture},i.map.gesture=$e,i.methodDict.gesture="gesturable",d.actions.gesture=$e.defaults},listeners:{"interactions:action-start":Ge,"interactions:action-move":Ge,"interactions:action-end":Ge,"interactions:new":function(r){r.interaction.gesture={angle:0,distance:0,scale:1,startAngle:0,startDistance:0}},"auto-start:check":function(r){if(!(r.interaction.pointers.length<2)){var i=r.interactable.options.gesture;if(i&&i.enabled)return r.action={name:"gesture"},!1}}},defaults:{},getCursor:function(){return""},filterEventType:function(r){return r.search("gesture")===0}},je=$e;function Te(r,i,a,d,p,g,b){if(!i)return!1;if(i===!0){var w=_.number(g.width)?g.width:g.right-g.left,k=_.number(g.height)?g.height:g.bottom-g.top;if(b=Math.min(b,Math.abs((r==="left"||r==="right"?w:k)/2)),w<0&&(r==="left"?r="right":r==="right"&&(r="left")),k<0&&(r==="top"?r="bottom":r==="bottom"&&(r="top")),r==="left"){var z=w>=0?g.left:g.right;return a.x<z+b}if(r==="top"){var E=k>=0?g.top:g.bottom;return a.y<E+b}if(r==="right")return a.x>(w>=0?g.right:g.left)-b;if(r==="bottom")return a.y>(k>=0?g.bottom:g.top)-b}return!!_.element(d)&&(_.element(i)?i===d:Xe(d,i,p))}function he(r){var i=r.iEvent,a=r.interaction;if(a.prepared.name==="resize"&&a.resizeAxes){var d=i;a.interactable.options.resize.square?(a.resizeAxes==="y"?d.delta.x=d.delta.y:d.delta.y=d.delta.x,d.axes="xy"):(d.axes=a.resizeAxes,a.resizeAxes==="x"?d.delta.y=0:a.resizeAxes==="y"&&(d.delta.x=0))}}var we,Le,xe={id:"actions/resize",before:["actions/drag"],install:function(r){var i=r.actions,a=r.browser,d=r.Interactable,p=r.defaults;xe.cursors=(function(g){return g.isIe9?{x:"e-resize",y:"s-resize",xy:"se-resize",top:"n-resize",left:"w-resize",bottom:"s-resize",right:"e-resize",topleft:"se-resize",bottomright:"se-resize",topright:"ne-resize",bottomleft:"ne-resize"}:{x:"ew-resize",y:"ns-resize",xy:"nwse-resize",top:"ns-resize",left:"ew-resize",bottom:"ns-resize",right:"ew-resize",topleft:"nwse-resize",bottomright:"nwse-resize",topright:"nesw-resize",bottomleft:"nesw-resize"}})(a),xe.defaultMargin=a.supportsTouch||a.supportsPointerEvent?20:10,d.prototype.resizable=function(g){return(function(b,w,k){return _.object(w)?(b.options.resize.enabled=w.enabled!==!1,b.setPerAction("resize",w),b.setOnEvents("resize",w),_.string(w.axis)&&/^x$|^y$|^xy$/.test(w.axis)?b.options.resize.axis=w.axis:w.axis===null&&(b.options.resize.axis=k.defaults.actions.resize.axis),_.bool(w.preserveAspectRatio)?b.options.resize.preserveAspectRatio=w.preserveAspectRatio:_.bool(w.square)&&(b.options.resize.square=w.square),b):_.bool(w)?(b.options.resize.enabled=w,b):b.options.resize})(this,g,r)},i.map.resize=xe,i.methodDict.resize="resizable",p.actions.resize=xe.defaults},listeners:{"interactions:new":function(r){r.interaction.resizeAxes="xy"},"interactions:action-start":function(r){(function(i){var a=i.iEvent,d=i.interaction;if(d.prepared.name==="resize"&&d.prepared.edges){var p=a,g=d.rect;d._rects={start:re({},g),corrected:re({},g),previous:re({},g),delta:{left:0,right:0,width:0,top:0,bottom:0,height:0}},p.edges=d.prepared.edges,p.rect=d._rects.corrected,p.deltaRect=d._rects.delta}})(r),he(r)},"interactions:action-move":function(r){(function(i){var a=i.iEvent,d=i.interaction;if(d.prepared.name==="resize"&&d.prepared.edges){var p=a,g=d.interactable.options.resize.invert,b=g==="reposition"||g==="negate",w=d.rect,k=d._rects,z=k.start,E=k.corrected,R=k.delta,q=k.previous;if(re(q,E),b){if(re(E,w),g==="reposition"){if(E.top>E.bottom){var Q=E.top;E.top=E.bottom,E.bottom=Q}if(E.left>E.right){var X=E.left;E.left=E.right,E.right=X}}}else E.top=Math.min(w.top,z.bottom),E.bottom=Math.max(w.bottom,z.top),E.left=Math.min(w.left,z.right),E.right=Math.max(w.right,z.left);for(var te in E.width=E.right-E.left,E.height=E.bottom-E.top,E)R[te]=E[te]-q[te];p.edges=d.prepared.edges,p.rect=E,p.deltaRect=R}})(r),he(r)},"interactions:action-end":function(r){var i=r.iEvent,a=r.interaction;if(a.prepared.name==="resize"&&a.prepared.edges){var d=i;d.edges=a.prepared.edges,d.rect=a._rects.corrected,d.deltaRect=a._rects.delta}},"auto-start:check":function(r){var i=r.interaction,a=r.interactable,d=r.element,p=r.rect,g=r.buttons;if(p){var b=re({},i.coords.cur.page),w=a.options.resize;if(w&&w.enabled&&(!i.pointerIsDown||!/mouse|pointer/.test(i.pointerType)||(g&w.mouseButtons)!=0)){if(_.object(w.edges)){var k={left:!1,right:!1,top:!1,bottom:!1};for(var z in k)k[z]=Te(z,w.edges[z],b,i._latestPointer.eventTarget,d,p,w.margin||xe.defaultMargin);k.left=k.left&&!k.right,k.top=k.top&&!k.bottom,(k.left||k.right||k.top||k.bottom)&&(r.action={name:"resize",edges:k})}else{var E=w.axis!=="y"&&b.x>p.right-xe.defaultMargin,R=w.axis!=="x"&&b.y>p.bottom-xe.defaultMargin;(E||R)&&(r.action={name:"resize",axes:(E?"x":"")+(R?"y":"")})}return!r.action&&void 0}}}},defaults:{square:!1,preserveAspectRatio:!1,axis:"xy",margin:NaN,edges:null,invert:"none"},cursors:null,getCursor:function(r){var i=r.edges,a=r.axis,d=r.name,p=xe.cursors,g=null;if(a)g=p[d+a];else if(i){for(var b="",w=0,k=["top","bottom","left","right"];w<k.length;w++){var z=k[w];i[z]&&(b+=z)}g=p[b]}return g},filterEventType:function(r){return r.search("resize")===0},defaultMargin:null},se=xe,I={id:"actions",install:function(r){r.usePlugin(je),r.usePlugin(se),r.usePlugin(J),r.usePlugin(Ve)}},N=0,B={request:function(r){return we(r)},cancel:function(r){return Le(r)},init:function(r){if(we=r.requestAnimationFrame,Le=r.cancelAnimationFrame,!we)for(var i=["ms","moz","webkit","o"],a=0;a<i.length;a++){var d=i[a];we=r["".concat(d,"RequestAnimationFrame")],Le=r["".concat(d,"CancelAnimationFrame")]||r["".concat(d,"CancelRequestAnimationFrame")]}we=we&&we.bind(r),Le=Le&&Le.bind(r),we||(we=function(p){var g=Date.now(),b=Math.max(0,16-(g-N)),w=r.setTimeout((function(){p(g+b)}),b);return N=g+b,w},Le=function(p){return clearTimeout(p)})}},F={defaults:{enabled:!1,margin:60,container:null,speed:300},now:Date.now,interaction:null,i:0,x:0,y:0,isScrolling:!1,prevTime:0,margin:0,speed:0,start:function(r){F.isScrolling=!0,B.cancel(F.i),r.autoScroll=F,F.interaction=r,F.prevTime=F.now(),F.i=B.request(F.scroll)},stop:function(){F.isScrolling=!1,F.interaction&&(F.interaction.autoScroll=null),B.cancel(F.i)},scroll:function(){var r=F.interaction,i=r.interactable,a=r.element,d=r.prepared.name,p=i.options[d].autoScroll,g=V(p.container,i,a),b=F.now(),w=(b-F.prevTime)/1e3,k=p.speed*w;if(k>=1){var z={x:F.x*k,y:F.y*k};if(z.x||z.y){var E=ie(g);_.window(g)?g.scrollBy(z.x,z.y):g&&(g.scrollLeft+=z.x,g.scrollTop+=z.y);var R=ie(g),q={x:R.x-E.x,y:R.y-E.y};(q.x||q.y)&&i.fire({type:"autoscroll",target:a,interactable:i,delta:q,interaction:r,container:g})}F.prevTime=b}F.isScrolling&&(B.cancel(F.i),F.i=B.request(F.scroll))},check:function(r,i){var a;return(a=r.options[i].autoScroll)==null?void 0:a.enabled},onInteractionMove:function(r){var i=r.interaction,a=r.pointer;if(i.interacting()&&F.check(i.interactable,i.prepared.name))if(i.simulation)F.x=F.y=0;else{var d,p,g,b,w=i.interactable,k=i.element,z=i.prepared.name,E=w.options[z].autoScroll,R=V(E.container,w,k);if(_.window(R))b=a.clientX<F.margin,d=a.clientY<F.margin,p=a.clientX>R.innerWidth-F.margin,g=a.clientY>R.innerHeight-F.margin;else{var q=Ue(R);b=a.clientX<q.left+F.margin,d=a.clientY<q.top+F.margin,p=a.clientX>q.right-F.margin,g=a.clientY>q.bottom-F.margin}F.x=p?1:b?-1:0,F.y=g?1:d?-1:0,F.isScrolling||(F.margin=E.margin,F.speed=E.speed,F.start(i))}}};function V(r,i,a){return(_.string(r)?ft(r,i,a):r)||C(a)}function ie(r){return _.window(r)&&(r=window.document.body),{x:r.scrollLeft,y:r.scrollTop}}var oe={id:"auto-scroll",install:function(r){var i=r.defaults,a=r.actions;r.autoScroll=F,F.now=function(){return r.now()},a.phaselessTypes.autoscroll=!0,i.perAction.autoScroll=F.defaults},listeners:{"interactions:new":function(r){r.interaction.autoScroll=null},"interactions:destroy":function(r){r.interaction.autoScroll=null,F.stop(),F.interaction&&(F.interaction=null)},"interactions:stop":F.stop,"interactions:action-move":function(r){return F.onInteractionMove(r)}}},ze=oe;function be(r,i){var a=!1;return function(){return a||(A.console.warn(i),a=!0),r.apply(this,arguments)}}function Be(r,i){return r.name=i.name,r.axis=i.axis,r.edges=i.edges,r}function De(r){return _.bool(r)?(this.options.styleCursor=r,this):r===null?(delete this.options.styleCursor,this):this.options.styleCursor}function yt(r){return _.func(r)?(this.options.actionChecker=r,this):r===null?(delete this.options.actionChecker,this):this.options.actionChecker}var Lt={id:"auto-start/interactableMethods",install:function(r){var i=r.Interactable;i.prototype.getAction=function(a,d,p,g){var b=(function(w,k,z,E,R){var q=w.getRect(E),Q=k.buttons||{0:1,1:4,3:8,4:16}[k.button],X={action:null,interactable:w,interaction:z,element:E,rect:q,buttons:Q};return R.fire("auto-start:check",X),X.action})(this,d,p,g,r);return this.options.actionChecker?this.options.actionChecker(a,d,b,this,g,p):b},i.prototype.ignoreFrom=be((function(a){return this._backCompatOption("ignoreFrom",a)}),"Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."),i.prototype.allowFrom=be((function(a){return this._backCompatOption("allowFrom",a)}),"Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."),i.prototype.actionChecker=yt,i.prototype.styleCursor=De}};function Ot(r,i,a,d,p){return i.testIgnoreAllow(i.options[r.name],a,d)&&i.options[r.name].enabled&&lt(i,a,r,p)?r:null}function zt(r,i,a,d,p,g,b){for(var w=0,k=d.length;w<k;w++){var z=d[w],E=p[w],R=z.getAction(i,a,r,E);if(R){var q=Ot(R,z,E,g,b);if(q)return{action:q,interactable:z,element:E}}}return{action:null,interactable:null,element:null}}function Bt(r,i,a,d,p){var g=[],b=[],w=d;function k(E){g.push(E),b.push(w)}for(;_.element(w);){g=[],b=[],p.interactables.forEachMatch(w,k);var z=zt(r,i,a,g,b,d,p);if(z.action&&!z.interactable.options[z.action.name].manualStart)return z;w=fe(w)}return{action:null,interactable:null,element:null}}function Rt(r,i,a){var d=i.action,p=i.interactable,g=i.element;d=d||{name:null},r.interactable=p,r.element=g,Be(r.prepared,d),r.rect=p&&d.name?p.getRect(g):null,Di(r,a),a.fire("autoStart:prepared",{interaction:r})}function lt(r,i,a,d){var p=r.options,g=p[a.name].max,b=p[a.name].maxPerElement,w=d.autoStart.maxInteractions,k=0,z=0,E=0;if(!(g&&b&&w))return!1;for(var R=0,q=d.interactions.list;R<q.length;R++){var Q=q[R],X=Q.prepared.name;if(Q.interacting()&&(++k>=w||Q.interactable===r&&((z+=X===a.name?1:0)>=g||Q.element===i&&(E++,X===a.name&&E>=b))))return!1}return w>0}function qt(r,i){return _.number(r)?(i.autoStart.maxInteractions=r,this):i.autoStart.maxInteractions}function Qt(r,i,a){var d=a.autoStart.cursorElement;d&&d!==r&&(d.style.cursor=""),r.ownerDocument.documentElement.style.cursor=i,r.style.cursor=i,a.autoStart.cursorElement=i?r:null}function Di(r,i){var a=r.interactable,d=r.element,p=r.prepared;if(r.pointerType==="mouse"&&a&&a.options.styleCursor){var g="";if(p.name){var b=a.options[p.name].cursorChecker;g=_.func(b)?b(p,a,d,r._interacting):i.actions.map[p.name].getCursor(p)}Qt(r.element,g||"",i)}else i.autoStart.cursorElement&&Qt(i.autoStart.cursorElement,"",i)}var Fi={id:"auto-start/base",before:["actions"],install:function(r){var i=r.interactStatic,a=r.defaults;r.usePlugin(Lt),a.base.actionChecker=null,a.base.styleCursor=!0,re(a.perAction,{manualStart:!1,max:1/0,maxPerElement:1,allowFrom:null,ignoreFrom:null,mouseButtons:1}),i.maxInteractions=function(d){return qt(d,r)},r.autoStart={maxInteractions:1/0,withinInteractionLimit:lt,cursorElement:null}},listeners:{"interactions:down":function(r,i){var a=r.interaction,d=r.pointer,p=r.event,g=r.eventTarget;a.interacting()||Rt(a,Bt(a,d,p,g,i),i)},"interactions:move":function(r,i){(function(a,d){var p=a.interaction,g=a.pointer,b=a.event,w=a.eventTarget;p.pointerType!=="mouse"||p.pointerIsDown||p.interacting()||Rt(p,Bt(p,g,b,w,d),d)})(r,i),(function(a,d){var p=a.interaction;if(p.pointerIsDown&&!p.interacting()&&p.pointerWasMoved&&p.prepared.name){d.fire("autoStart:before-start",a);var g=p.interactable,b=p.prepared.name;b&&g&&(g.options[b].manualStart||!lt(g,p.element,p.prepared,d)?p.stop():(p.start(p.prepared,g,p.element),Di(p,d)))}})(r,i)},"interactions:stop":function(r,i){var a=r.interaction,d=a.interactable;d&&d.options.styleCursor&&Qt(a.element,"",i)}},maxInteractions:qt,withinInteractionLimit:lt,validateAction:Ot},ai=Fi,Bi={id:"auto-start/dragAxis",listeners:{"autoStart:before-start":function(r,i){var a=r.interaction,d=r.eventTarget,p=r.dx,g=r.dy;if(a.prepared.name==="drag"){var b=Math.abs(p),w=Math.abs(g),k=a.interactable.options.drag,z=k.startAxis,E=b>w?"x":b<w?"y":"xy";if(a.prepared.axis=k.lockAxis==="start"?E[0]:k.lockAxis,E!=="xy"&&z!=="xy"&&z!==E){a.prepared.name=null;for(var R=d,q=function(X){if(X!==a.interactable){var te=a.interactable.options.drag;if(!te.manualStart&&X.testIgnoreAllow(te,R,d)){var de=X.getAction(a.downPointer,a.downEvent,a,R);if(de&&de.name==="drag"&&(function(ce,me){if(!me)return!1;var Pe=me.options.drag.startAxis;return ce==="xy"||Pe==="xy"||Pe===ce})(E,X)&&ai.validateAction(de,X,R,d,i))return X}}};_.element(R);){var Q=i.interactables.forEachMatch(R,q);if(Q){a.prepared.name="drag",a.interactable=Q,a.element=R;break}R=fe(R)}}}}}};function oi(r){var i=r.prepared&&r.prepared.name;if(!i)return null;var a=r.interactable.options;return a[i].hold||a[i].delay}var gi={id:"auto-start/hold",install:function(r){var i=r.defaults;r.usePlugin(ai),i.perAction.hold=0,i.perAction.delay=0},listeners:{"interactions:new":function(r){r.interaction.autoStartHoldTimer=null},"autoStart:prepared":function(r){var i=r.interaction,a=oi(i);a>0&&(i.autoStartHoldTimer=setTimeout((function(){i.start(i.prepared,i.interactable,i.element)}),a))},"interactions:move":function(r){var i=r.interaction,a=r.duplicate;i.autoStartHoldTimer&&i.pointerWasMoved&&!a&&(clearTimeout(i.autoStartHoldTimer),i.autoStartHoldTimer=null)},"autoStart:before-start":function(r){var i=r.interaction;oi(i)>0&&(i.prepared.name=null)}},getHoldDuration:oi},rr=gi,mi={id:"auto-start",install:function(r){r.usePlugin(ai),r.usePlugin(rr),r.usePlugin(Bi)}},yi=function(r){return/^(always|never|auto)$/.test(r)?(this.options.preventDefault=r,this):_.bool(r)?(this.options.preventDefault=r?"always":"never",this):this.options.preventDefault};function nr(r){var i=r.interaction,a=r.event;i.interactable&&i.interactable.checkAndPreventDefault(a)}var vi={id:"core/interactablePreventDefault",install:function(r){var i=r.Interactable;i.prototype.preventDefault=yi,i.prototype.checkAndPreventDefault=function(a){return(function(d,p,g){var b=d.options.preventDefault;if(b!=="never")if(b!=="always"){if(p.events.supportsPassive&&/^touch(start|move)$/.test(g.type)){var w=C(g.target).document,k=p.getDocOptions(w);if(!k||!k.events||k.events.passive!==!1)return}/^(mouse|pointer|touch)*(down|start)/i.test(g.type)||_.element(g.target)&&Oe(g.target,"input,select,textarea,[contenteditable=true],[contenteditable=true] *")||g.preventDefault()}else g.preventDefault()})(this,r,a)},r.interactions.docEvents.push({type:"dragstart",listener:function(a){for(var d=0,p=r.interactions.list;d<p.length;d++){var g=p[d];if(g.element&&(g.element===a.target||ue(g.element,a.target)))return void g.interactable.checkAndPreventDefault(a)}}})},listeners:["down","move","up","cancel"].reduce((function(r,i){return r["interactions:".concat(i)]=nr,r}),{})};function si(r,i){if(i.phaselessTypes[r])return!0;for(var a in i.map)if(r.indexOf(a)===0&&r.substr(a.length)in i.phases)return!0;return!1}function Ht(r){var i={};for(var a in r){var d=r[a];_.plainObject(d)?i[a]=Ht(d):_.array(d)?i[a]=le(d):i[a]=d}return i}var ci=(function(){function r(i){n(this,r),this.states=[],this.startOffset={left:0,right:0,top:0,bottom:0},this.startDelta=void 0,this.result=void 0,this.endResult=void 0,this.startEdges=void 0,this.edges=void 0,this.interaction=void 0,this.interaction=i,this.result=Zt(),this.edges={left:!1,right:!1,top:!1,bottom:!1}}return c(r,[{key:"start",value:function(i,a){var d,p,g=i.phase,b=this.interaction,w=(function(z){var E=z.interactable.options[z.prepared.name],R=E.modifiers;return R&&R.length?R:["snap","snapSize","snapEdges","restrict","restrictEdges","restrictSize"].map((function(q){var Q=E[q];return Q&&Q.enabled&&{options:Q,methods:Q._methods}})).filter((function(q){return!!q}))})(b);this.prepareStates(w),this.startEdges=re({},b.edges),this.edges=re({},this.startEdges),this.startOffset=(d=b.rect,p=a,d?{left:p.x-d.left,top:p.y-d.top,right:d.right-p.x,bottom:d.bottom-p.y}:{left:0,top:0,right:0,bottom:0}),this.startDelta={x:0,y:0};var k=this.fillArg({phase:g,pageCoords:a,preEnd:!1});return this.result=Zt(),this.startAll(k),this.result=this.setAll(k)}},{key:"fillArg",value:function(i){var a=this.interaction;return i.interaction=a,i.interactable=a.interactable,i.element=a.element,i.rect||(i.rect=a.rect),i.edges||(i.edges=this.startEdges),i.startOffset=this.startOffset,i}},{key:"startAll",value:function(i){for(var a=0,d=this.states;a<d.length;a++){var p=d[a];p.methods.start&&(i.state=p,p.methods.start(i))}}},{key:"setAll",value:function(i){var a=i.phase,d=i.preEnd,p=i.skipModifiers,g=i.rect,b=i.edges;i.coords=re({},i.pageCoords),i.rect=re({},g),i.edges=re({},b);for(var w=p?this.states.slice(p):this.states,k=Zt(i.coords,i.rect),z=0;z<w.length;z++){var E,R=w[z],q=R.options,Q=re({},i.coords),X=null;(E=R.methods)!=null&&E.set&&this.shouldDo(q,d,a)&&(i.state=R,X=R.methods.set(i),Ee(i.edges,i.rect,{x:i.coords.x-Q.x,y:i.coords.y-Q.y})),k.eventProps.push(X)}re(this.edges,i.edges),k.delta.x=i.coords.x-i.pageCoords.x,k.delta.y=i.coords.y-i.pageCoords.y,k.rectDelta.left=i.rect.left-g.left,k.rectDelta.right=i.rect.right-g.right,k.rectDelta.top=i.rect.top-g.top,k.rectDelta.bottom=i.rect.bottom-g.bottom;var te=this.result.coords,de=this.result.rect;if(te&&de){var ce=k.rect.left!==de.left||k.rect.right!==de.right||k.rect.top!==de.top||k.rect.bottom!==de.bottom;k.changed=ce||te.x!==k.coords.x||te.y!==k.coords.y}return k}},{key:"applyToInteraction",value:function(i){var a=this.interaction,d=i.phase,p=a.coords.cur,g=a.coords.start,b=this.result,w=this.startDelta,k=b.delta;d==="start"&&re(this.startDelta,b.delta);for(var z=0,E=[[g,w],[p,k]];z<E.length;z++){var R=E[z],q=R[0],Q=R[1];q.page.x+=Q.x,q.page.y+=Q.y,q.client.x+=Q.x,q.client.y+=Q.y}var X=this.result.rectDelta,te=i.rect||a.rect;te.left+=X.left,te.right+=X.right,te.top+=X.top,te.bottom+=X.bottom,te.width=te.right-te.left,te.height=te.bottom-te.top}},{key:"setAndApply",value:function(i){var a=this.interaction,d=i.phase,p=i.preEnd,g=i.skipModifiers,b=this.setAll(this.fillArg({preEnd:p,phase:d,pageCoords:i.modifiedCoords||a.coords.cur.page}));if(this.result=b,!b.changed&&(!g||g<this.states.length)&&a.interacting())return!1;if(i.modifiedCoords){var w=a.coords.cur.page,k={x:i.modifiedCoords.x-w.x,y:i.modifiedCoords.y-w.y};b.coords.x+=k.x,b.coords.y+=k.y,b.delta.x+=k.x,b.delta.y+=k.y}this.applyToInteraction(i)}},{key:"beforeEnd",value:function(i){var a=i.interaction,d=i.event,p=this.states;if(p&&p.length){for(var g=!1,b=0;b<p.length;b++){var w=p[b];i.state=w;var k=w.options,z=w.methods,E=z.beforeEnd&&z.beforeEnd(i);if(E)return this.endResult=E,!1;g=g||!g&&this.shouldDo(k,!0,i.phase,!0)}g&&a.move({event:d,preEnd:!0})}}},{key:"stop",value:function(i){var a=i.interaction;if(this.states&&this.states.length){var d=re({states:this.states,interactable:a.interactable,element:a.element,rect:null},i);this.fillArg(d);for(var p=0,g=this.states;p<g.length;p++){var b=g[p];d.state=b,b.methods.stop&&b.methods.stop(d)}this.states=null,this.endResult=null}}},{key:"prepareStates",value:function(i){this.states=[];for(var a=0;a<i.length;a++){var d=i[a],p=d.options,g=d.methods,b=d.name;this.states.push({options:p,methods:g,index:a,name:b})}return this.states}},{key:"restoreInteractionCoords",value:function(i){var a=i.interaction,d=a.coords,p=a.rect,g=a.modification;if(g.result){for(var b=g.startDelta,w=g.result,k=w.delta,z=w.rectDelta,E=0,R=[[d.start,b],[d.cur,k]];E<R.length;E++){var q=R[E],Q=q[0],X=q[1];Q.page.x-=X.x,Q.page.y-=X.y,Q.client.x-=X.x,Q.client.y-=X.y}p.left-=z.left,p.right-=z.right,p.top-=z.top,p.bottom-=z.bottom}}},{key:"shouldDo",value:function(i,a,d,p){return!(!i||i.enabled===!1||p&&!i.endOnly||i.endOnly&&!a||d==="start"&&!i.setStart)}},{key:"copyFrom",value:function(i){this.startOffset=i.startOffset,this.startDelta=i.startDelta,this.startEdges=i.startEdges,this.edges=i.edges,this.states=i.states.map((function(a){return Ht(a)})),this.result=Zt(re({},i.result.coords),re({},i.result.rect))}},{key:"destroy",value:function(){for(var i in this)this[i]=null}}]),r})();function Zt(r,i){return{rect:i,coords:r,delta:{x:0,y:0},rectDelta:{left:0,right:0,top:0,bottom:0},eventProps:[],changed:!0}}function It(r,i){var a=r.defaults,d={start:r.start,set:r.set,beforeEnd:r.beforeEnd,stop:r.stop},p=function(g){var b=g||{};for(var w in b.enabled=b.enabled!==!1,a)w in b||(b[w]=a[w]);var k={options:b,methods:d,name:i,enable:function(){return b.enabled=!0,k},disable:function(){return b.enabled=!1,k}};return k};return i&&typeof i=="string"&&(p._defaults=a,p._methods=d),p}function Kt(r){var i=r.iEvent,a=r.interaction.modification.result;a&&(i.modifiers=a.eventProps)}var Ni={id:"modifiers/base",before:["actions"],install:function(r){r.defaults.perAction.modifiers=[]},listeners:{"interactions:new":function(r){var i=r.interaction;i.modification=new ci(i)},"interactions:before-action-start":function(r){var i=r.interaction,a=r.interaction.modification;a.start(r,i.coords.start.page),i.edges=a.edges,a.applyToInteraction(r)},"interactions:before-action-move":function(r){var i=r.interaction,a=i.modification,d=a.setAndApply(r);return i.edges=a.edges,d},"interactions:before-action-end":function(r){var i=r.interaction,a=i.modification,d=a.beforeEnd(r);return i.edges=a.startEdges,d},"interactions:action-start":Kt,"interactions:action-move":Kt,"interactions:action-end":Kt,"interactions:after-action-start":function(r){return r.interaction.modification.restoreInteractionCoords(r)},"interactions:after-action-move":function(r){return r.interaction.modification.restoreInteractionCoords(r)},"interactions:stop":function(r){return r.interaction.modification.stop(r)}}},bi=Ni,_i={base:{preventDefault:"auto",deltaSource:"page"},perAction:{enabled:!1,origin:{x:0,y:0}},actions:{}},li=(function(r){l(a,r);var i=v(a);function a(d,p,g,b,w,k,z){var E;n(this,a),(E=i.call(this,d)).relatedTarget=null,E.screenX=void 0,E.screenY=void 0,E.button=void 0,E.buttons=void 0,E.ctrlKey=void 0,E.shiftKey=void 0,E.altKey=void 0,E.metaKey=void 0,E.page=void 0,E.client=void 0,E.delta=void 0,E.rect=void 0,E.x0=void 0,E.y0=void 0,E.t0=void 0,E.dt=void 0,E.duration=void 0,E.clientX0=void 0,E.clientY0=void 0,E.velocity=void 0,E.speed=void 0,E.swipe=void 0,E.axes=void 0,E.preEnd=void 0,w=w||d.element;var R=d.interactable,q=(R&&R.options||_i).deltaSource,Q=Me(R,w,g),X=b==="start",te=b==="end",de=X?m(E):d.prevEvent,ce=X?d.coords.start:te?{page:de.page,client:de.client,timeStamp:d.coords.cur.timeStamp}:d.coords.cur;return E.page=re({},ce.page),E.client=re({},ce.client),E.rect=re({},d.rect),E.timeStamp=ce.timeStamp,te||(E.page.x-=Q.x,E.page.y-=Q.y,E.client.x-=Q.x,E.client.y-=Q.y),E.ctrlKey=p.ctrlKey,E.altKey=p.altKey,E.shiftKey=p.shiftKey,E.metaKey=p.metaKey,E.button=p.button,E.buttons=p.buttons,E.target=w,E.currentTarget=w,E.preEnd=k,E.type=z||g+(b||""),E.interactable=R,E.t0=X?d.pointers[d.pointers.length-1].downTime:de.t0,E.x0=d.coords.start.page.x-Q.x,E.y0=d.coords.start.page.y-Q.y,E.clientX0=d.coords.start.client.x-Q.x,E.clientY0=d.coords.start.client.y-Q.y,E.delta=X||te?{x:0,y:0}:{x:E[q].x-de[q].x,y:E[q].y-de[q].y},E.dt=d.coords.delta.timeStamp,E.duration=E.timeStamp-E.t0,E.velocity=re({},d.coords.velocity[q]),E.speed=pt(E.velocity.x,E.velocity.y),E.swipe=te||b==="inertiastart"?E.getSwipe():null,E}return c(a,[{key:"getSwipe",value:function(){var d=this._interaction;if(d.prevEvent.speed<600||this.timeStamp-d.prevEvent.timeStamp>150)return null;var p=180*Math.atan2(d.prevEvent.velocityY,d.prevEvent.velocityX)/Math.PI;p<0&&(p+=360);var g=112.5<=p&&p<247.5,b=202.5<=p&&p<337.5;return{up:b,down:!b&&22.5<=p&&p<157.5,left:g,right:!g&&(292.5<=p||p<67.5),angle:p,speed:d.prevEvent.speed,velocity:{x:d.prevEvent.velocityX,y:d.prevEvent.velocityY}}}},{key:"preventDefault",value:function(){}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}}]),a})(pe);Object.defineProperties(li.prototype,{pageX:{get:function(){return this.page.x},set:function(r){this.page.x=r}},pageY:{get:function(){return this.page.y},set:function(r){this.page.y=r}},clientX:{get:function(){return this.client.x},set:function(r){this.client.x=r}},clientY:{get:function(){return this.client.y},set:function(r){this.client.y=r}},dx:{get:function(){return this.delta.x},set:function(r){this.delta.x=r}},dy:{get:function(){return this.delta.y},set:function(r){this.delta.y=r}},velocityX:{get:function(){return this.velocity.x},set:function(r){this.velocity.x=r}},velocityY:{get:function(){return this.velocity.y},set:function(r){this.velocity.y=r}}});var qi=c((function r(i,a,d,p,g){n(this,r),this.id=void 0,this.pointer=void 0,this.event=void 0,this.downTime=void 0,this.downTarget=void 0,this.id=i,this.pointer=a,this.event=d,this.downTime=p,this.downTarget=g})),Hi=(function(r){return r.interactable="",r.element="",r.prepared="",r.pointerIsDown="",r.pointerWasMoved="",r._proxy="",r})({}),xi=(function(r){return r.start="",r.move="",r.end="",r.stop="",r.interacting="",r})({}),ji=0,Wi=(function(){function r(i){var a=this,d=i.pointerType,p=i.scopeFire;n(this,r),this.interactable=null,this.element=null,this.rect=null,this._rects=void 0,this.edges=null,this._scopeFire=void 0,this.prepared={name:null,axis:null,edges:null},this.pointerType=void 0,this.pointers=[],this.downEvent=null,this.downPointer={},this._latestPointer={pointer:null,event:null,eventTarget:null},this.prevEvent=null,this.pointerIsDown=!1,this.pointerWasMoved=!1,this._interacting=!1,this._ending=!1,this._stopped=!0,this._proxy=void 0,this.simulation=null,this.doMove=be((function(E){this.move(E)}),"The interaction.doMove() method has been renamed to interaction.move()"),this.coords={start:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},prev:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},cur:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},delta:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},velocity:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0}},this._id=ji++,this._scopeFire=p,this.pointerType=d;var g=this;this._proxy={};var b=function(E){Object.defineProperty(a._proxy,E,{get:function(){return g[E]}})};for(var w in Hi)b(w);var k=function(E){Object.defineProperty(a._proxy,E,{value:function(){return g[E].apply(g,arguments)}})};for(var z in xi)k(z);this._scopeFire("interactions:new",{interaction:this})}return c(r,[{key:"pointerMoveTolerance",get:function(){return 1}},{key:"pointerDown",value:function(i,a,d){var p=this.updatePointer(i,a,d,!0),g=this.pointers[p];this._scopeFire("interactions:down",{pointer:i,event:a,eventTarget:d,pointerIndex:p,pointerInfo:g,type:"down",interaction:this})}},{key:"start",value:function(i,a,d){return!(this.interacting()||!this.pointerIsDown||this.pointers.length<(i.name==="gesture"?2:1)||!a.options[i.name].enabled)&&(Be(this.prepared,i),this.interactable=a,this.element=d,this.rect=a.getRect(d),this.edges=this.prepared.edges?re({},this.prepared.edges):{left:!0,right:!0,top:!0,bottom:!0},this._stopped=!1,this._interacting=this._doPhase({interaction:this,event:this.downEvent,phase:"start"})&&!this._stopped,this._interacting)}},{key:"pointerMove",value:function(i,a,d){this.simulation||this.modification&&this.modification.endResult||this.updatePointer(i,a,d,!1);var p,g,b=this.coords.cur.page.x===this.coords.prev.page.x&&this.coords.cur.page.y===this.coords.prev.page.y&&this.coords.cur.client.x===this.coords.prev.client.x&&this.coords.cur.client.y===this.coords.prev.client.y;this.pointerIsDown&&!this.pointerWasMoved&&(p=this.coords.cur.client.x-this.coords.start.client.x,g=this.coords.cur.client.y-this.coords.start.client.y,this.pointerWasMoved=pt(p,g)>this.pointerMoveTolerance);var w,k,z,E=this.getPointerIndex(i),R={pointer:i,pointerIndex:E,pointerInfo:this.pointers[E],event:a,type:"move",eventTarget:d,dx:p,dy:g,duplicate:b,interaction:this};b||(w=this.coords.velocity,k=this.coords.delta,z=Math.max(k.timeStamp/1e3,.001),w.page.x=k.page.x/z,w.page.y=k.page.y/z,w.client.x=k.client.x/z,w.client.y=k.client.y/z,w.timeStamp=z),this._scopeFire("interactions:move",R),b||this.simulation||(this.interacting()&&(R.type=null,this.move(R)),this.pointerWasMoved&&Et(this.coords.prev,this.coords.cur))}},{key:"move",value:function(i){i&&i.event||Pt(this.coords.delta),(i=re({pointer:this._latestPointer.pointer,event:this._latestPointer.event,eventTarget:this._latestPointer.eventTarget,interaction:this},i||{})).phase="move",this._doPhase(i)}},{key:"pointerUp",value:function(i,a,d,p){var g=this.getPointerIndex(i);g===-1&&(g=this.updatePointer(i,a,d,!1));var b=/cancel$/i.test(a.type)?"cancel":"up";this._scopeFire("interactions:".concat(b),{pointer:i,pointerIndex:g,pointerInfo:this.pointers[g],event:a,eventTarget:d,type:b,curEventTarget:p,interaction:this}),this.simulation||this.end(a),this.removePointer(i,a)}},{key:"documentBlur",value:function(i){this.end(i),this._scopeFire("interactions:blur",{event:i,type:"blur",interaction:this})}},{key:"end",value:function(i){var a;this._ending=!0,i=i||this._latestPointer.event,this.interacting()&&(a=this._doPhase({event:i,interaction:this,phase:"end"})),this._ending=!1,a===!0&&this.stop()}},{key:"currentAction",value:function(){return this._interacting?this.prepared.name:null}},{key:"interacting",value:function(){return this._interacting}},{key:"stop",value:function(){this._scopeFire("interactions:stop",{interaction:this}),this.interactable=this.element=null,this._interacting=!1,this._stopped=!0,this.prepared.name=this.prevEvent=null}},{key:"getPointerIndex",value:function(i){var a=st(i);return this.pointerType==="mouse"||this.pointerType==="pen"?this.pointers.length-1:_e(this.pointers,(function(d){return d.id===a}))}},{key:"getPointerInfo",value:function(i){return this.pointers[this.getPointerIndex(i)]}},{key:"updatePointer",value:function(i,a,d,p){var g,b,w,k=st(i),z=this.getPointerIndex(i),E=this.pointers[z];return p=p!==!1&&(p||/(down|start)$/i.test(a.type)),E?E.pointer=i:(E=new qi(k,i,a,null,null),z=this.pointers.length,this.pointers.push(E)),$t(this.coords.cur,this.pointers.map((function(R){return R.pointer})),this._now()),g=this.coords.delta,b=this.coords.prev,w=this.coords.cur,g.page.x=w.page.x-b.page.x,g.page.y=w.page.y-b.page.y,g.client.x=w.client.x-b.client.x,g.client.y=w.client.y-b.client.y,g.timeStamp=w.timeStamp-b.timeStamp,p&&(this.pointerIsDown=!0,E.downTime=this.coords.cur.timeStamp,E.downTarget=d,Ct(this.downPointer,i),this.interacting()||(Et(this.coords.start,this.coords.cur),Et(this.coords.prev,this.coords.cur),this.downEvent=a,this.pointerWasMoved=!1)),this._updateLatestPointer(i,a,d),this._scopeFire("interactions:update-pointer",{pointer:i,event:a,eventTarget:d,down:p,pointerInfo:E,pointerIndex:z,interaction:this}),z}},{key:"removePointer",value:function(i,a){var d=this.getPointerIndex(i);if(d!==-1){var p=this.pointers[d];this._scopeFire("interactions:remove-pointer",{pointer:i,event:a,eventTarget:null,pointerIndex:d,pointerInfo:p,interaction:this}),this.pointers.splice(d,1),this.pointerIsDown=!1}}},{key:"_updateLatestPointer",value:function(i,a,d){this._latestPointer.pointer=i,this._latestPointer.event=a,this._latestPointer.eventTarget=d}},{key:"destroy",value:function(){this._latestPointer.pointer=null,this._latestPointer.event=null,this._latestPointer.eventTarget=null}},{key:"_createPreparedEvent",value:function(i,a,d,p){return new li(this,i,this.prepared.name,a,this.element,d,p)}},{key:"_fireEvent",value:function(i){var a;(a=this.interactable)==null||a.fire(i),(!this.prevEvent||i.timeStamp>=this.prevEvent.timeStamp)&&(this.prevEvent=i)}},{key:"_doPhase",value:function(i){var a=i.event,d=i.phase,p=i.preEnd,g=i.type,b=this.rect;if(b&&d==="move"&&(Ee(this.edges,b,this.coords.delta[this.interactable.options.deltaSource]),b.width=b.right-b.left,b.height=b.bottom-b.top),this._scopeFire("interactions:before-action-".concat(d),i)===!1)return!1;var w=i.iEvent=this._createPreparedEvent(a,d,p,g);return this._scopeFire("interactions:action-".concat(d),i),d==="start"&&(this.prevEvent=w),this._fireEvent(w),this._scopeFire("interactions:after-action-".concat(d),i),!0}},{key:"_now",value:function(){return Date.now()}}]),r})();function wi(r){di(r.interaction)}function di(r){if(!(function(a){return!(!a.offset.pending.x&&!a.offset.pending.y)})(r))return!1;var i=r.offset.pending;return Si(r.coords.cur,i),Si(r.coords.delta,i),Ee(r.edges,r.rect,i),i.x=0,i.y=0,!0}function ar(r){var i=r.x,a=r.y;this.offset.pending.x+=i,this.offset.pending.y+=a,this.offset.total.x+=i,this.offset.total.y+=a}function Si(r,i){var a=r.page,d=r.client,p=i.x,g=i.y;a.x+=p,a.y+=g,d.x+=p,d.y+=g}xi.offsetBy="";var ki={id:"offset",before:["modifiers","pointer-events","actions","inertia"],install:function(r){r.Interaction.prototype.offsetBy=ar},listeners:{"interactions:new":function(r){r.interaction.offset={total:{x:0,y:0},pending:{x:0,y:0}}},"interactions:update-pointer":function(r){return(function(i){i.pointerIsDown&&(Si(i.coords.cur,i.offset.total),i.offset.pending.x=0,i.offset.pending.y=0)})(r.interaction)},"interactions:before-action-start":wi,"interactions:before-action-move":wi,"interactions:before-action-end":function(r){var i=r.interaction;if(di(i))return i.move({offset:!0}),i.end(),!1},"interactions:stop":function(r){var i=r.interaction;i.offset.total.x=0,i.offset.total.y=0,i.offset.pending.x=0,i.offset.pending.y=0}}},Ci=ki,Yi=(function(){function r(i){n(this,r),this.active=!1,this.isModified=!1,this.smoothEnd=!1,this.allowResume=!1,this.modification=void 0,this.modifierCount=0,this.modifierArg=void 0,this.startCoords=void 0,this.t0=0,this.v0=0,this.te=0,this.targetOffset=void 0,this.modifiedOffset=void 0,this.currentOffset=void 0,this.lambda_v0=0,this.one_ve_v0=0,this.timeout=void 0,this.interaction=void 0,this.interaction=i}return c(r,[{key:"start",value:function(i){var a=this.interaction,d=ei(a);if(!d||!d.enabled)return!1;var p=a.coords.velocity.client,g=pt(p.x,p.y),b=this.modification||(this.modification=new ci(a));if(b.copyFrom(a.modification),this.t0=a._now(),this.allowResume=d.allowResume,this.v0=g,this.currentOffset={x:0,y:0},this.startCoords=a.coords.cur.page,this.modifierArg=b.fillArg({pageCoords:this.startCoords,preEnd:!0,phase:"inertiastart"}),this.t0-a.coords.cur.timeStamp<50&&g>d.minSpeed&&g>d.endSpeed)this.startInertia();else{if(b.result=b.setAll(this.modifierArg),!b.result.changed)return!1;this.startSmoothEnd()}return a.modification.result.rect=null,a.offsetBy(this.targetOffset),a._doPhase({interaction:a,event:i,phase:"inertiastart"}),a.offsetBy({x:-this.targetOffset.x,y:-this.targetOffset.y}),a.modification.result.rect=null,this.active=!0,a.simulation=this,!0}},{key:"startInertia",value:function(){var i=this,a=this.interaction.coords.velocity.client,d=ei(this.interaction),p=d.resistance,g=-Math.log(d.endSpeed/this.v0)/p;this.targetOffset={x:(a.x-g)/p,y:(a.y-g)/p},this.te=g,this.lambda_v0=p/this.v0,this.one_ve_v0=1-d.endSpeed/this.v0;var b=this.modification,w=this.modifierArg;w.pageCoords={x:this.startCoords.x+this.targetOffset.x,y:this.startCoords.y+this.targetOffset.y},b.result=b.setAll(w),b.result.changed&&(this.isModified=!0,this.modifiedOffset={x:this.targetOffset.x+b.result.delta.x,y:this.targetOffset.y+b.result.delta.y}),this.onNextFrame((function(){return i.inertiaTick()}))}},{key:"startSmoothEnd",value:function(){var i=this;this.smoothEnd=!0,this.isModified=!0,this.targetOffset={x:this.modification.result.delta.x,y:this.modification.result.delta.y},this.onNextFrame((function(){return i.smoothEndTick()}))}},{key:"onNextFrame",value:function(i){var a=this;this.timeout=B.request((function(){a.active&&i()}))}},{key:"inertiaTick",value:function(){var i,a,d,p,g,b,w,k=this,z=this.interaction,E=ei(z).resistance,R=(z._now()-this.t0)/1e3;if(R<this.te){var q,Q=1-(Math.exp(-E*R)-this.lambda_v0)/this.one_ve_v0;this.isModified?(i=0,a=0,d=this.targetOffset.x,p=this.targetOffset.y,g=this.modifiedOffset.x,b=this.modifiedOffset.y,q={x:Ei(w=Q,i,d,g),y:Ei(w,a,p,b)}):q={x:this.targetOffset.x*Q,y:this.targetOffset.y*Q};var X={x:q.x-this.currentOffset.x,y:q.y-this.currentOffset.y};this.currentOffset.x+=X.x,this.currentOffset.y+=X.y,z.offsetBy(X),z.move(),this.onNextFrame((function(){return k.inertiaTick()}))}else z.offsetBy({x:this.modifiedOffset.x-this.currentOffset.x,y:this.modifiedOffset.y-this.currentOffset.y}),this.end()}},{key:"smoothEndTick",value:function(){var i=this,a=this.interaction,d=a._now()-this.t0,p=ei(a).smoothEndDuration;if(d<p){var g={x:Ze(d,0,this.targetOffset.x,p),y:Ze(d,0,this.targetOffset.y,p)},b={x:g.x-this.currentOffset.x,y:g.y-this.currentOffset.y};this.currentOffset.x+=b.x,this.currentOffset.y+=b.y,a.offsetBy(b),a.move({skipModifiers:this.modifierCount}),this.onNextFrame((function(){return i.smoothEndTick()}))}else a.offsetBy({x:this.targetOffset.x-this.currentOffset.x,y:this.targetOffset.y-this.currentOffset.y}),this.end()}},{key:"resume",value:function(i){var a=i.pointer,d=i.event,p=i.eventTarget,g=this.interaction;g.offsetBy({x:-this.currentOffset.x,y:-this.currentOffset.y}),g.updatePointer(a,d,p,!0),g._doPhase({interaction:g,event:d,phase:"resume"}),Et(g.coords.prev,g.coords.cur),this.stop()}},{key:"end",value:function(){this.interaction.move(),this.interaction.end(),this.stop()}},{key:"stop",value:function(){this.active=this.smoothEnd=!1,this.interaction.simulation=null,B.cancel(this.timeout)}}]),r})();function ei(r){var i=r.interactable,a=r.prepared;return i&&i.options&&a.name&&i.options[a.name].inertia}var $i={id:"inertia",before:["modifiers","actions"],install:function(r){var i=r.defaults;r.usePlugin(Ci),r.usePlugin(bi),r.actions.phases.inertiastart=!0,r.actions.phases.resume=!0,i.perAction.inertia={enabled:!1,resistance:10,minSpeed:100,endSpeed:10,allowResume:!0,smoothEndDuration:300}},listeners:{"interactions:new":function(r){var i=r.interaction;i.inertia=new Yi(i)},"interactions:before-action-end":function(r){var i=r.interaction,a=r.event;return(!i._interacting||i.simulation||!i.inertia.start(a))&&null},"interactions:down":function(r){var i=r.interaction,a=r.eventTarget,d=i.inertia;if(d.active)for(var p=a;_.element(p);){if(p===i.element){d.resume(r);break}p=fe(p)}},"interactions:stop":function(r){var i=r.interaction.inertia;i.active&&i.stop()},"interactions:before-action-resume":function(r){var i=r.interaction.modification;i.stop(r),i.start(r,r.interaction.coords.cur.page),i.applyToInteraction(r)},"interactions:before-action-inertiastart":function(r){return r.interaction.modification.setAndApply(r)},"interactions:action-resume":Kt,"interactions:action-inertiastart":Kt,"interactions:after-action-inertiastart":function(r){return r.interaction.modification.restoreInteractionCoords(r)},"interactions:after-action-resume":function(r){return r.interaction.modification.restoreInteractionCoords(r)}}};function Ei(r,i,a,d){var p=1-r;return p*p*i+2*p*r*a+r*r*d}function Ze(r,i,a,d){return-a*(r/=d)*(r-2)+i}var xt=$i;function Or(r,i){for(var a=0;a<i.length;a++){var d=i[a];if(r.immediatePropagationStopped)break;d(r)}}var zr=(function(){function r(i){n(this,r),this.options=void 0,this.types={},this.propagationStopped=!1,this.immediatePropagationStopped=!1,this.global=void 0,this.options=re({},i||{})}return c(r,[{key:"fire",value:function(i){var a,d=this.global;(a=this.types[i.type])&&Or(i,a),!i.propagationStopped&&d&&(a=d[i.type])&&Or(i,a)}},{key:"on",value:function(i,a){var d=Ae(i,a);for(i in d)this.types[i]=ve(this.types[i]||[],d[i])}},{key:"off",value:function(i,a){var d=Ae(i,a);for(i in d){var p=this.types[i];if(p&&p.length)for(var g=0,b=d[i];g<b.length;g++){var w=b[g],k=p.indexOf(w);k!==-1&&p.splice(k,1)}}}},{key:"getRect",value:function(i){return null}}]),r})(),Vn=(function(){function r(i){n(this,r),this.currentTarget=void 0,this.originalEvent=void 0,this.type=void 0,this.originalEvent=i,Ct(this,i)}return c(r,[{key:"preventOriginalDefault",value:function(){this.originalEvent.preventDefault()}},{key:"stopPropagation",value:function(){this.originalEvent.stopPropagation()}},{key:"stopImmediatePropagation",value:function(){this.originalEvent.stopImmediatePropagation()}}]),r})();function Ai(r){return _.object(r)?{capture:!!r.capture,passive:!!r.passive}:{capture:!!r,passive:!1}}function Ki(r,i){return r===i||(typeof r=="boolean"?!!i.capture===r&&!i.passive:!!r.capture==!!i.capture&&!!r.passive==!!i.passive)}var Gn={id:"events",install:function(r){var i,a=[],d={},p=[],g={add:b,remove:w,addDelegate:function(E,R,q,Q,X){var te=Ai(X);if(!d[q]){d[q]=[];for(var de=0;de<p.length;de++){var ce=p[de];b(ce,q,k),b(ce,q,z,!0)}}var me=d[q],Pe=W(me,(function(He){return He.selector===E&&He.context===R}));Pe||(Pe={selector:E,context:R,listeners:[]},me.push(Pe)),Pe.listeners.push({func:Q,options:te})},removeDelegate:function(E,R,q,Q,X){var te,de=Ai(X),ce=d[q],me=!1;if(ce)for(te=ce.length-1;te>=0;te--){var Pe=ce[te];if(Pe.selector===E&&Pe.context===R){for(var He=Pe.listeners,Se=He.length-1;Se>=0;Se--){var Re=He[Se];if(Re.func===Q&&Ki(Re.options,de)){He.splice(Se,1),He.length||(ce.splice(te,1),w(R,q,k),w(R,q,z,!0)),me=!0;break}}if(me)break}}},delegateListener:k,delegateUseCapture:z,delegatedEvents:d,documents:p,targets:a,supportsOptions:!1,supportsPassive:!1};function b(E,R,q,Q){if(E.addEventListener){var X=Ai(Q),te=W(a,(function(de){return de.eventTarget===E}));te||(te={eventTarget:E,events:{}},a.push(te)),te.events[R]||(te.events[R]=[]),W(te.events[R],(function(de){return de.func===q&&Ki(de.options,X)}))||(E.addEventListener(R,q,g.supportsOptions?X:X.capture),te.events[R].push({func:q,options:X}))}}function w(E,R,q,Q){if(E.addEventListener&&E.removeEventListener){var X=_e(a,(function(St){return St.eventTarget===E})),te=a[X];if(te&&te.events)if(R!=="all"){var de=!1,ce=te.events[R];if(ce){if(q==="all"){for(var me=ce.length-1;me>=0;me--){var Pe=ce[me];w(E,R,Pe.func,Pe.options)}return}for(var He=Ai(Q),Se=0;Se<ce.length;Se++){var Re=ce[Se];if(Re.func===q&&Ki(Re.options,He)){E.removeEventListener(R,q,g.supportsOptions?He:He.capture),ce.splice(Se,1),ce.length===0&&(delete te.events[R],de=!0);break}}}de&&!Object.keys(te.events).length&&a.splice(X,1)}else for(R in te.events)te.events.hasOwnProperty(R)&&w(E,R,"all")}}function k(E,R){for(var q=Ai(R),Q=new Vn(E),X=d[E.type],te=$(E)[0],de=te;_.element(de);){for(var ce=0;ce<X.length;ce++){var me=X[ce],Pe=me.selector,He=me.context;if(Oe(de,Pe)&&ue(He,te)&&ue(He,de)){var Se=me.listeners;Q.currentTarget=de;for(var Re=0;Re<Se.length;Re++){var St=Se[Re];Ki(St.options,q)&&St.func(Q)}}}de=fe(de)}}function z(E){return k(E,!0)}return(i=r.document)==null||i.createElement("div").addEventListener("test",null,{get capture(){return g.supportsOptions=!0},get passive(){return g.supportsPassive=!0}}),r.events=g,g}},or={methodOrder:["simulationResume","mouseOrPen","hasPointer","idle"],search:function(r){for(var i=0,a=or.methodOrder;i<a.length;i++){var d=a[i],p=or[d](r);if(p)return p}return null},simulationResume:function(r){var i=r.pointerType,a=r.eventType,d=r.eventTarget,p=r.scope;if(!/down|start/i.test(a))return null;for(var g=0,b=p.interactions.list;g<b.length;g++){var w=b[g],k=d;if(w.simulation&&w.simulation.allowResume&&w.pointerType===i)for(;k;){if(k===w.element)return w;k=fe(k)}}return null},mouseOrPen:function(r){var i,a=r.pointerId,d=r.pointerType,p=r.eventType,g=r.scope;if(d!=="mouse"&&d!=="pen")return null;for(var b=0,w=g.interactions.list;b<w.length;b++){var k=w[b];if(k.pointerType===d){if(k.simulation&&!Mr(k,a))continue;if(k.interacting())return k;i||(i=k)}}if(i)return i;for(var z=0,E=g.interactions.list;z<E.length;z++){var R=E[z];if(!(R.pointerType!==d||/down/i.test(p)&&R.simulation))return R}return null},hasPointer:function(r){for(var i=r.pointerId,a=0,d=r.scope.interactions.list;a<d.length;a++){var p=d[a];if(Mr(p,i))return p}return null},idle:function(r){for(var i=r.pointerType,a=0,d=r.scope.interactions.list;a<d.length;a++){var p=d[a];if(p.pointers.length===1){var g=p.interactable;if(g&&(!g.options.gesture||!g.options.gesture.enabled))continue}else if(p.pointers.length>=2)continue;if(!p.interacting()&&i===p.pointerType)return p}return null}};function Mr(r,i){return r.pointers.some((function(a){return a.id===i}))}var Xn=or,sr=["pointerDown","pointerMove","pointerUp","updatePointer","removePointer","windowBlur"];function Pr(r,i){return function(a){var d=i.interactions.list,p=j(a),g=$(a),b=g[0],w=g[1],k=[];if(/^touch/.test(a.type)){i.prevTouchTime=i.now();for(var z=0,E=a.changedTouches;z<E.length;z++){var R=E[z],q={pointer:R,pointerId:st(R),pointerType:p,eventType:a.type,eventTarget:b,curEventTarget:w,scope:i},Q=Lr(q);k.push([q.pointer,q.eventTarget,q.curEventTarget,Q])}}else{var X=!1;if(!ee.supportsPointerEvent&&/mouse/.test(a.type)){for(var te=0;te<d.length&&!X;te++)X=d[te].pointerType!=="mouse"&&d[te].pointerIsDown;X=X||i.now()-i.prevTouchTime<500||a.timeStamp===0}if(!X){var de={pointer:a,pointerId:st(a),pointerType:p,eventType:a.type,curEventTarget:w,eventTarget:b,scope:i},ce=Lr(de);k.push([de.pointer,de.eventTarget,de.curEventTarget,ce])}}for(var me=0;me<k.length;me++){var Pe=k[me],He=Pe[0],Se=Pe[1],Re=Pe[2];Pe[3][r](He,a,Se,Re)}}}function Lr(r){var i=r.pointerType,a=r.scope,d={interaction:Xn.search(r),searchDetails:r};return a.fire("interactions:find",d),d.interaction||a.interactions.new({pointerType:i})}function cr(r,i){var a=r.doc,d=r.scope,p=r.options,g=d.interactions.docEvents,b=d.events,w=b[i];for(var k in d.browser.isIOS&&!p.events&&(p.events={passive:!1}),b.delegatedEvents)w(a,k,b.delegateListener),w(a,k,b.delegateUseCapture,!0);for(var z=p&&p.events,E=0;E<g.length;E++){var R=g[E];w(a,R.type,R.listener,z)}}var Jn={id:"core/interactions",install:function(r){for(var i={},a=0;a<sr.length;a++){var d=sr[a];i[d]=Pr(d,r)}var p,g=ee.pEventTypes;function b(){for(var w=0,k=r.interactions.list;w<k.length;w++){var z=k[w];if(z.pointerIsDown&&z.pointerType==="touch"&&!z._interacting)for(var E=function(){var Q=q[R];r.documents.some((function(X){return ue(X.doc,Q.downTarget)}))||z.removePointer(Q.pointer,Q.event)},R=0,q=z.pointers;R<q.length;R++)E()}}(p=H.PointerEvent?[{type:g.down,listener:b},{type:g.down,listener:i.pointerDown},{type:g.move,listener:i.pointerMove},{type:g.up,listener:i.pointerUp},{type:g.cancel,listener:i.pointerUp}]:[{type:"mousedown",listener:i.pointerDown},{type:"mousemove",listener:i.pointerMove},{type:"mouseup",listener:i.pointerUp},{type:"touchstart",listener:b},{type:"touchstart",listener:i.pointerDown},{type:"touchmove",listener:i.pointerMove},{type:"touchend",listener:i.pointerUp},{type:"touchcancel",listener:i.pointerUp}]).push({type:"blur",listener:function(w){for(var k=0,z=r.interactions.list;k<z.length;k++)z[k].documentBlur(w)}}),r.prevTouchTime=0,r.Interaction=(function(w){l(z,w);var k=v(z);function z(){return n(this,z),k.apply(this,arguments)}return c(z,[{key:"pointerMoveTolerance",get:function(){return r.interactions.pointerMoveTolerance},set:function(E){r.interactions.pointerMoveTolerance=E}},{key:"_now",value:function(){return r.now()}}]),z})(Wi),r.interactions={list:[],new:function(w){w.scopeFire=function(z,E){return r.fire(z,E)};var k=new r.Interaction(w);return r.interactions.list.push(k),k},listeners:i,docEvents:p,pointerMoveTolerance:1},r.usePlugin(vi)},listeners:{"scope:add-document":function(r){return cr(r,"add")},"scope:remove-document":function(r){return cr(r,"remove")},"interactable:unset":function(r,i){for(var a=r.interactable,d=i.interactions.list.length-1;d>=0;d--){var p=i.interactions.list[d];p.interactable===a&&(p.stop(),i.fire("interactions:destroy",{interaction:p}),p.destroy(),i.interactions.list.length>2&&i.interactions.list.splice(d,1))}}},onDocSignal:cr,doOnInteractions:Pr,methodNames:sr},Qn=Jn,Ut=(function(r){return r[r.On=0]="On",r[r.Off=1]="Off",r})(Ut||{}),Zn=(function(){function r(i,a,d,p){n(this,r),this.target=void 0,this.options=void 0,this._actions=void 0,this.events=new zr,this._context=void 0,this._win=void 0,this._doc=void 0,this._scopeEvents=void 0,this._actions=a.actions,this.target=i,this._context=a.context||d,this._win=C(rt(i)?this._context:i),this._doc=this._win.document,this._scopeEvents=p,this.set(a)}return c(r,[{key:"_defaults",get:function(){return{base:{},perAction:{},actions:{}}}},{key:"setOnEvents",value:function(i,a){return _.func(a.onstart)&&this.on("".concat(i,"start"),a.onstart),_.func(a.onmove)&&this.on("".concat(i,"move"),a.onmove),_.func(a.onend)&&this.on("".concat(i,"end"),a.onend),_.func(a.oninertiastart)&&this.on("".concat(i,"inertiastart"),a.oninertiastart),this}},{key:"updatePerActionListeners",value:function(i,a,d){var p,g=this,b=(p=this._actions.map[i])==null?void 0:p.filterEventType,w=function(k){return(b==null||b(k))&&si(k,g._actions)};(_.array(a)||_.object(a))&&this._onOff(Ut.Off,i,a,void 0,w),(_.array(d)||_.object(d))&&this._onOff(Ut.On,i,d,void 0,w)}},{key:"setPerAction",value:function(i,a){var d=this._defaults;for(var p in a){var g=p,b=this.options[i],w=a[g];g==="listeners"&&this.updatePerActionListeners(i,b.listeners,w),_.array(w)?b[g]=le(w):_.plainObject(w)?(b[g]=re(b[g]||{},Ht(w)),_.object(d.perAction[g])&&"enabled"in d.perAction[g]&&(b[g].enabled=w.enabled!==!1)):_.bool(w)&&_.object(d.perAction[g])?b[g].enabled=w:b[g]=w}}},{key:"getRect",value:function(i){return i=i||(_.element(this.target)?this.target:null),_.string(this.target)&&(i=i||this._context.querySelector(this.target)),at(i)}},{key:"rectChecker",value:function(i){var a=this;return _.func(i)?(this.getRect=function(d){var p=re({},i.apply(a,d));return"width"in p||(p.width=p.right-p.left,p.height=p.bottom-p.top),p},this):i===null?(delete this.getRect,this):this.getRect}},{key:"_backCompatOption",value:function(i,a){if(rt(a)||_.object(a)){for(var d in this.options[i]=a,this._actions.map)this.options[d][i]=a;return this}return this.options[i]}},{key:"origin",value:function(i){return this._backCompatOption("origin",i)}},{key:"deltaSource",value:function(i){return i==="page"||i==="client"?(this.options.deltaSource=i,this):this.options.deltaSource}},{key:"getAllElements",value:function(){var i=this.target;return _.string(i)?Array.from(this._context.querySelectorAll(i)):_.func(i)&&i.getAllElements?i.getAllElements():_.element(i)?[i]:[]}},{key:"context",value:function(){return this._context}},{key:"inContext",value:function(i){return this._context===i.ownerDocument||ue(this._context,i)}},{key:"testIgnoreAllow",value:function(i,a,d){return!this.testIgnore(i.ignoreFrom,a,d)&&this.testAllow(i.allowFrom,a,d)}},{key:"testAllow",value:function(i,a,d){return!i||!!_.element(d)&&(_.string(i)?Xe(d,i,a):!!_.element(i)&&ue(i,d))}},{key:"testIgnore",value:function(i,a,d){return!(!i||!_.element(d))&&(_.string(i)?Xe(d,i,a):!!_.element(i)&&ue(i,d))}},{key:"fire",value:function(i){return this.events.fire(i),this}},{key:"_onOff",value:function(i,a,d,p,g){_.object(a)&&!_.array(a)&&(p=d,d=null);var b=Ae(a,d,g);for(var w in b){w==="wheel"&&(w=ee.wheelEvent);for(var k=0,z=b[w];k<z.length;k++){var E=z[k];si(w,this._actions)?this.events[i===Ut.On?"on":"off"](w,E):_.string(this.target)?this._scopeEvents[i===Ut.On?"addDelegate":"removeDelegate"](this.target,this._context,w,E,p):this._scopeEvents[i===Ut.On?"add":"remove"](this.target,w,E,p)}}return this}},{key:"on",value:function(i,a,d){return this._onOff(Ut.On,i,a,d)}},{key:"off",value:function(i,a,d){return this._onOff(Ut.Off,i,a,d)}},{key:"set",value:function(i){var a=this._defaults;for(var d in _.object(i)||(i={}),this.options=Ht(a.base),this._actions.methodDict){var p=d,g=this._actions.methodDict[p];this.options[p]={},this.setPerAction(p,re(re({},a.perAction),a.actions[p])),this[g](i[p])}for(var b in i)b!=="getRect"?_.func(this[b])&&this[b](i[b]):this.rectChecker(i.getRect);return this}},{key:"unset",value:function(){if(_.string(this.target))for(var i in this._scopeEvents.delegatedEvents)for(var a=this._scopeEvents.delegatedEvents[i],d=a.length-1;d>=0;d--){var p=a[d],g=p.selector,b=p.context,w=p.listeners;g===this.target&&b===this._context&&a.splice(d,1);for(var k=w.length-1;k>=0;k--)this._scopeEvents.removeDelegate(this.target,this._context,i,w[k][0],w[k][1])}else this._scopeEvents.remove(this.target,"all")}}]),r})(),ea=(function(){function r(i){var a=this;n(this,r),this.list=[],this.selectorMap={},this.scope=void 0,this.scope=i,i.addListeners({"interactable:unset":function(d){var p=d.interactable,g=p.target,b=_.string(g)?a.selectorMap[g]:g[a.scope.id],w=_e(b,(function(k){return k===p}));b.splice(w,1)}})}return c(r,[{key:"new",value:function(i,a){a=re(a||{},{actions:this.scope.actions});var d=new this.scope.Interactable(i,a,this.scope.document,this.scope.events);return this.scope.addDocument(d._doc),this.list.push(d),_.string(i)?(this.selectorMap[i]||(this.selectorMap[i]=[]),this.selectorMap[i].push(d)):(d.target[this.scope.id]||Object.defineProperty(i,this.scope.id,{value:[],configurable:!0}),i[this.scope.id].push(d)),this.scope.fire("interactable:new",{target:i,options:a,interactable:d,win:this.scope._win}),d}},{key:"getExisting",value:function(i,a){var d=a&&a.context||this.scope.document,p=_.string(i),g=p?this.selectorMap[i]:i[this.scope.id];if(g)return W(g,(function(b){return b._context===d&&(p||b.inContext(i))}))}},{key:"forEachMatch",value:function(i,a){for(var d=0,p=this.list;d<p.length;d++){var g=p[d],b=void 0;if((_.string(g.target)?_.element(i)&&Oe(i,g.target):i===g.target)&&g.inContext(i)&&(b=a(g)),b!==void 0)return b}}}]),r})(),ta=(function(){function r(){var i=this;n(this,r),this.id="__interact_scope_".concat(Math.floor(100*Math.random())),this.isInitialized=!1,this.listenerMaps=[],this.browser=ee,this.defaults=Ht(_i),this.Eventable=zr,this.actions={map:{},phases:{start:!0,move:!0,end:!0},methodDict:{},phaselessTypes:{}},this.interactStatic=(function(d){var p=function g(b,w){var k=d.interactables.getExisting(b,w);return k||((k=d.interactables.new(b,w)).events.global=g.globalEvents),k};return p.getPointerAverage=Ft,p.getTouchBBox=At,p.getTouchDistance=mt,p.getTouchAngle=ge,p.getElementRect=at,p.getElementClientRect=Ue,p.matchesSelector=Oe,p.closest=We,p.globalEvents={},p.version="1.10.27",p.scope=d,p.use=function(g,b){return this.scope.usePlugin(g,b),this},p.isSet=function(g,b){return!!this.scope.interactables.get(g,b&&b.context)},p.on=be((function(g,b,w){if(_.string(g)&&g.search(" ")!==-1&&(g=g.trim().split(/ +/)),_.array(g)){for(var k=0,z=g;k<z.length;k++){var E=z[k];this.on(E,b,w)}return this}if(_.object(g)){for(var R in g)this.on(R,g[R],b);return this}return si(g,this.scope.actions)?this.globalEvents[g]?this.globalEvents[g].push(b):this.globalEvents[g]=[b]:this.scope.events.add(this.scope.document,g,b,{options:w}),this}),"The interact.on() method is being deprecated"),p.off=be((function(g,b,w){if(_.string(g)&&g.search(" ")!==-1&&(g=g.trim().split(/ +/)),_.array(g)){for(var k=0,z=g;k<z.length;k++){var E=z[k];this.off(E,b,w)}return this}if(_.object(g)){for(var R in g)this.off(R,g[R],b);return this}var q;return si(g,this.scope.actions)?g in this.globalEvents&&(q=this.globalEvents[g].indexOf(b))!==-1&&this.globalEvents[g].splice(q,1):this.scope.events.remove(this.scope.document,g,b,w),this}),"The interact.off() method is being deprecated"),p.debug=function(){return this.scope},p.supportsTouch=function(){return ee.supportsTouch},p.supportsPointerEvent=function(){return ee.supportsPointerEvent},p.stop=function(){for(var g=0,b=this.scope.interactions.list;g<b.length;g++)b[g].stop();return this},p.pointerMoveTolerance=function(g){return _.number(g)?(this.scope.interactions.pointerMoveTolerance=g,this):this.scope.interactions.pointerMoveTolerance},p.addDocument=function(g,b){this.scope.addDocument(g,b)},p.removeDocument=function(g){this.scope.removeDocument(g)},p})(this),this.InteractEvent=li,this.Interactable=void 0,this.interactables=new ea(this),this._win=void 0,this.document=void 0,this.window=void 0,this.documents=[],this._plugins={list:[],map:{}},this.onWindowUnload=function(d){return i.removeDocument(d.target)};var a=this;this.Interactable=(function(d){l(g,d);var p=v(g);function g(){return n(this,g),p.apply(this,arguments)}return c(g,[{key:"_defaults",get:function(){return a.defaults}},{key:"set",value:function(b){return y(u(g.prototype),"set",this).call(this,b),a.fire("interactable:set",{options:b,interactable:this}),this}},{key:"unset",value:function(){y(u(g.prototype),"unset",this).call(this);var b=a.interactables.list.indexOf(this);b<0||(a.interactables.list.splice(b,1),a.fire("interactable:unset",{interactable:this}))}}]),g})(Zn)}return c(r,[{key:"addListeners",value:function(i,a){this.listenerMaps.push({id:a,map:i})}},{key:"fire",value:function(i,a){for(var d=0,p=this.listenerMaps;d<p.length;d++){var g=p[d].map[i];if(g&&g(a,this,i)===!1)return!1}}},{key:"init",value:function(i){return this.isInitialized?this:(function(a,d){return a.isInitialized=!0,_.window(d)&&L(d),H.init(d),ee.init(d),B.init(d),a.window=d,a.document=d.document,a.usePlugin(Qn),a.usePlugin(Gn),a})(this,i)}},{key:"pluginIsInstalled",value:function(i){var a=i.id;return a?!!this._plugins.map[a]:this._plugins.list.indexOf(i)!==-1}},{key:"usePlugin",value:function(i,a){if(!this.isInitialized)return this;if(this.pluginIsInstalled(i))return this;if(i.id&&(this._plugins.map[i.id]=i),this._plugins.list.push(i),i.install&&i.install(this,a),i.listeners&&i.before){for(var d=0,p=this.listenerMaps.length,g=i.before.reduce((function(w,k){return w[k]=!0,w[Rr(k)]=!0,w}),{});d<p;d++){var b=this.listenerMaps[d].id;if(b&&(g[b]||g[Rr(b)]))break}this.listenerMaps.splice(d,0,{id:i.id,map:i.listeners})}else i.listeners&&this.listenerMaps.push({id:i.id,map:i.listeners});return this}},{key:"addDocument",value:function(i,a){if(this.getDocIndex(i)!==-1)return!1;var d=C(i);a=a?re({},a):{},this.documents.push({doc:i,options:a}),this.events.documents.push(i),i!==this.document&&this.events.add(d,"unload",this.onWindowUnload),this.fire("scope:add-document",{doc:i,window:d,scope:this,options:a})}},{key:"removeDocument",value:function(i){var a=this.getDocIndex(i),d=C(i),p=this.documents[a].options;this.events.remove(d,"unload",this.onWindowUnload),this.documents.splice(a,1),this.events.documents.splice(a,1),this.fire("scope:remove-document",{doc:i,window:d,scope:this,options:p})}},{key:"getDocIndex",value:function(i){for(var a=0;a<this.documents.length;a++)if(this.documents[a].doc===i)return a;return-1}},{key:"getDocOptions",value:function(i){var a=this.getDocIndex(i);return a===-1?null:this.documents[a].options}},{key:"now",value:function(){return(this.window.Date||Date).now()}}]),r})();function Rr(r){return r&&r.replace(/\/.*$/,"")}var Ir=new ta,wt=Ir.interactStatic,ia=typeof globalThis!="undefined"?globalThis:window;Ir.init(ia);var ra=Object.freeze({__proto__:null,edgeTarget:function(){},elements:function(){},grid:function(r){var i=[["x","y"],["left","top"],["right","bottom"],["width","height"]].filter((function(d){var p=d[0],g=d[1];return p in r||g in r})),a=function(d,p){for(var g=r.range,b=r.limits,w=b===void 0?{left:-1/0,right:1/0,top:-1/0,bottom:1/0}:b,k=r.offset,z=k===void 0?{x:0,y:0}:k,E={range:g,grid:r,x:null,y:null},R=0;R<i.length;R++){var q=i[R],Q=q[0],X=q[1],te=Math.round((d-z.x)/r[Q]),de=Math.round((p-z.y)/r[X]);E[Q]=Math.max(w.left,Math.min(w.right,te*r[Q]+z.x)),E[X]=Math.max(w.top,Math.min(w.bottom,de*r[X]+z.y))}return E};return a.grid=r,a.coordFields=i,a}}),na={id:"snappers",install:function(r){var i=r.interactStatic;i.snappers=re(i.snappers||{},ra),i.createSnapGrid=i.snappers.grid}},aa=na,oa={start:function(r){var i=r.state,a=r.rect,d=r.edges,p=r.pageCoords,g=i.options,b=g.ratio,w=g.enabled,k=i.options,z=k.equalDelta,E=k.modifiers;b==="preserve"&&(b=a.width/a.height),i.startCoords=re({},p),i.startRect=re({},a),i.ratio=b,i.equalDelta=z;var R=i.linkedEdges={top:d.top||d.left&&!d.bottom,left:d.left||d.top&&!d.right,bottom:d.bottom||d.right&&!d.top,right:d.right||d.bottom&&!d.left};if(i.xIsPrimaryAxis=!(!d.left&&!d.right),i.equalDelta){var q=(R.left?1:-1)*(R.top?1:-1);i.edgeSign={x:q,y:q}}else i.edgeSign={x:R.left?-1:1,y:R.top?-1:1};if(w!==!1&&re(d,R),E!=null&&E.length){var Q=new ci(r.interaction);Q.copyFrom(r.interaction.modification),Q.prepareStates(E),i.subModification=Q,Q.startAll(h({},r))}},set:function(r){var i=r.state,a=r.rect,d=r.coords,p=i.linkedEdges,g=re({},d),b=i.equalDelta?sa:ca;if(re(r.edges,p),b(i,i.xIsPrimaryAxis,d,a),!i.subModification)return null;var w=re({},a);Ee(p,w,{x:d.x-g.x,y:d.y-g.y});var k=i.subModification.setAll(h(h({},r),{},{rect:w,edges:p,pageCoords:d,prevCoords:d,prevRect:w})),z=k.delta;return k.changed&&(b(i,Math.abs(z.x)>Math.abs(z.y),k.coords,k.rect),re(d,k.coords)),k.eventProps},defaults:{ratio:"preserve",equalDelta:!1,modifiers:[],enabled:!1}};function sa(r,i,a){var d=r.startCoords,p=r.edgeSign;i?a.y=d.y+(a.x-d.x)*p.y:a.x=d.x+(a.y-d.y)*p.x}function ca(r,i,a,d){var p=r.startRect,g=r.startCoords,b=r.ratio,w=r.edgeSign;if(i){var k=d.width/b;a.y=g.y+(k-p.height)*w.y}else{var z=d.height*b;a.x=g.x+(z-p.width)*w.x}}var la=It(oa,"aspectRatio"),Dr=function(){};Dr._defaults={};var Ui=Dr;function ti(r,i,a){return _.func(r)?et(r,i.interactable,i.element,[a.x,a.y,i]):et(r,i.interactable,i.element)}var Vi={start:function(r){var i=r.rect,a=r.startOffset,d=r.state,p=r.interaction,g=r.pageCoords,b=d.options,w=b.elementRect,k=re({left:0,top:0,right:0,bottom:0},b.offset||{});if(i&&w){var z=ti(b.restriction,p,g);if(z){var E=z.right-z.left-i.width,R=z.bottom-z.top-i.height;E<0&&(k.left+=E,k.right+=E),R<0&&(k.top+=R,k.bottom+=R)}k.left+=a.left-i.width*w.left,k.top+=a.top-i.height*w.top,k.right+=a.right-i.width*(1-w.right),k.bottom+=a.bottom-i.height*(1-w.bottom)}d.offset=k},set:function(r){var i=r.coords,a=r.interaction,d=r.state,p=d.options,g=d.offset,b=ti(p.restriction,a,i);if(b){var w=(function(k){return!k||"left"in k&&"top"in k||((k=re({},k)).left=k.x||0,k.top=k.y||0,k.right=k.right||k.left+k.width,k.bottom=k.bottom||k.top+k.height),k})(b);i.x=Math.max(Math.min(w.right-g.right,i.x),w.left+g.left),i.y=Math.max(Math.min(w.bottom-g.bottom,i.y),w.top+g.top)}},defaults:{restriction:null,elementRect:null,offset:null,endOnly:!1,enabled:!1}},da=It(Vi,"restrict"),Fr={top:1/0,left:1/0,bottom:-1/0,right:-1/0},Br={top:-1/0,left:-1/0,bottom:1/0,right:1/0};function Nr(r,i){for(var a=0,d=["top","left","bottom","right"];a<d.length;a++){var p=d[a];p in r||(r[p]=i[p])}return r}var Ti={noInner:Fr,noOuter:Br,start:function(r){var i,a=r.interaction,d=r.startOffset,p=r.state,g=p.options;g&&(i=Ne(ti(g.offset,a,a.coords.start.page))),i=i||{x:0,y:0},p.offset={top:i.y+d.top,left:i.x+d.left,bottom:i.y-d.bottom,right:i.x-d.right}},set:function(r){var i=r.coords,a=r.edges,d=r.interaction,p=r.state,g=p.offset,b=p.options;if(a){var w=re({},i),k=ti(b.inner,d,w)||{},z=ti(b.outer,d,w)||{};Nr(k,Fr),Nr(z,Br),a.top?i.y=Math.min(Math.max(z.top+g.top,w.y),k.top+g.top):a.bottom&&(i.y=Math.max(Math.min(z.bottom+g.bottom,w.y),k.bottom+g.bottom)),a.left?i.x=Math.min(Math.max(z.left+g.left,w.x),k.left+g.left):a.right&&(i.x=Math.max(Math.min(z.right+g.right,w.x),k.right+g.right))}},defaults:{inner:null,outer:null,offset:null,endOnly:!1,enabled:!1}},ua=It(Ti,"restrictEdges"),pa=re({get elementRect(){return{top:0,left:0,bottom:1,right:1}},set elementRect(r){}},Vi.defaults),ha=It({start:Vi.start,set:Vi.set,defaults:pa},"restrictRect"),fa={width:-1/0,height:-1/0},ga={width:1/0,height:1/0},ma=It({start:function(r){return Ti.start(r)},set:function(r){var i=r.interaction,a=r.state,d=r.rect,p=r.edges,g=a.options;if(p){var b=ne(ti(g.min,i,r.coords))||fa,w=ne(ti(g.max,i,r.coords))||ga;a.options={endOnly:g.endOnly,inner:re({},Ti.noInner),outer:re({},Ti.noOuter)},p.top?(a.options.inner.top=d.bottom-b.height,a.options.outer.top=d.bottom-w.height):p.bottom&&(a.options.inner.bottom=d.top+b.height,a.options.outer.bottom=d.top+w.height),p.left?(a.options.inner.left=d.right-b.width,a.options.outer.left=d.right-w.width):p.right&&(a.options.inner.right=d.left+b.width,a.options.outer.right=d.left+w.width),Ti.set(r),a.options=g}},defaults:{min:null,max:null,endOnly:!1,enabled:!1}},"restrictSize"),lr={start:function(r){var i,a=r.interaction,d=r.interactable,p=r.element,g=r.rect,b=r.state,w=r.startOffset,k=b.options,z=k.offsetWithOrigin?(function(q){var Q=q.interaction.element,X=Ne(et(q.state.options.origin,null,null,[Q])),te=X||Me(q.interactable,Q,q.interaction.prepared.name);return te})(r):{x:0,y:0};if(k.offset==="startCoords")i={x:a.coords.start.page.x,y:a.coords.start.page.y};else{var E=et(k.offset,d,p,[a]);(i=Ne(E)||{x:0,y:0}).x+=z.x,i.y+=z.y}var R=k.relativePoints;b.offsets=g&&R&&R.length?R.map((function(q,Q){return{index:Q,relativePoint:q,x:w.left-g.width*q.x+i.x,y:w.top-g.height*q.y+i.y}})):[{index:0,relativePoint:null,x:i.x,y:i.y}]},set:function(r){var i=r.interaction,a=r.coords,d=r.state,p=d.options,g=d.offsets,b=Me(i.interactable,i.element,i.prepared.name),w=re({},a),k=[];p.offsetWithOrigin||(w.x-=b.x,w.y-=b.y);for(var z=0,E=g;z<E.length;z++)for(var R=E[z],q=w.x-R.x,Q=w.y-R.y,X=0,te=p.targets.length;X<te;X++){var de=p.targets[X],ce=void 0;(ce=_.func(de)?de(q,Q,i._proxy,R,X):de)&&k.push({x:(_.number(ce.x)?ce.x:q)+R.x,y:(_.number(ce.y)?ce.y:Q)+R.y,range:_.number(ce.range)?ce.range:p.range,source:de,index:X,offset:R})}for(var me={target:null,inRange:!1,distance:0,range:0,delta:{x:0,y:0}},Pe=0;Pe<k.length;Pe++){var He=k[Pe],Se=He.range,Re=He.x-w.x,St=He.y-w.y,it=pt(Re,St),Mt=it<=Se;Se===1/0&&me.inRange&&me.range!==1/0&&(Mt=!1),me.target&&!(Mt?me.inRange&&Se!==1/0?it/Se<me.distance/me.range:Se===1/0&&me.range!==1/0||it<me.distance:!me.inRange&&it<me.distance)||(me.target=He,me.distance=it,me.range=Se,me.inRange=Mt,me.delta.x=Re,me.delta.y=St)}return me.inRange&&(a.x=me.target.x,a.y=me.target.y),d.closest=me,me},defaults:{range:1/0,targets:null,offset:null,offsetWithOrigin:!0,origin:null,relativePoints:null,endOnly:!1,enabled:!1}},ya=It(lr,"snap"),Gi={start:function(r){var i=r.state,a=r.edges,d=i.options;if(!a)return null;r.state={options:{targets:null,relativePoints:[{x:a.left?0:1,y:a.top?0:1}],offset:d.offset||"self",origin:{x:0,y:0},range:d.range}},i.targetFields=i.targetFields||[["width","height"],["x","y"]],lr.start(r),i.offsets=r.state.offsets,r.state=i},set:function(r){var i=r.interaction,a=r.state,d=r.coords,p=a.options,g=a.offsets,b={x:d.x-g[0].x,y:d.y-g[0].y};a.options=re({},p),a.options.targets=[];for(var w=0,k=p.targets||[];w<k.length;w++){var z=k[w],E=void 0;if(E=_.func(z)?z(b.x,b.y,i):z){for(var R=0,q=a.targetFields;R<q.length;R++){var Q=q[R],X=Q[0],te=Q[1];if(X in E||te in E){E.x=E[X],E.y=E[te];break}}a.options.targets.push(E)}}var de=lr.set(r);return a.options=p,de},defaults:{range:1/0,targets:null,offset:null,endOnly:!1,enabled:!1}},va=It(Gi,"snapSize"),dr={aspectRatio:la,restrictEdges:ua,restrict:da,restrictRect:ha,restrictSize:ma,snapEdges:It({start:function(r){var i=r.edges;return i?(r.state.targetFields=r.state.targetFields||[[i.left?"left":"right",i.top?"top":"bottom"]],Gi.start(r)):null},set:Gi.set,defaults:re(Ht(Gi.defaults),{targets:void 0,range:void 0,offset:{x:0,y:0}})},"snapEdges"),snap:ya,snapSize:va,spring:Ui,avoid:Ui,transform:Ui,rubberband:Ui},ba={id:"modifiers",install:function(r){var i=r.interactStatic;for(var a in r.usePlugin(bi),r.usePlugin(aa),i.modifiers=dr,dr){var d=dr[a],p=d._defaults,g=d._methods;p._methods=g,r.defaults.perAction[a]=p}}},_a=ba,qr=(function(r){l(a,r);var i=v(a);function a(d,p,g,b,w,k){var z;if(n(this,a),Ct(m(z=i.call(this,w)),g),g!==p&&Ct(m(z),p),z.timeStamp=k,z.originalEvent=g,z.type=d,z.pointerId=st(p),z.pointerType=j(p),z.target=b,z.currentTarget=null,d==="tap"){var E=w.getPointerIndex(p);z.dt=z.timeStamp-w.pointers[E].downTime;var R=z.timeStamp-w.tapTime;z.double=!!w.prevTap&&w.prevTap.type!=="doubletap"&&w.prevTap.target===z.target&&R<500}else d==="doubletap"&&(z.dt=p.timeStamp-w.tapTime,z.double=!0);return z}return c(a,[{key:"_subtractOrigin",value:function(d){var p=d.x,g=d.y;return this.pageX-=p,this.pageY-=g,this.clientX-=p,this.clientY-=g,this}},{key:"_addOrigin",value:function(d){var p=d.x,g=d.y;return this.pageX+=p,this.pageY+=g,this.clientX+=p,this.clientY+=g,this}},{key:"preventDefault",value:function(){this.originalEvent.preventDefault()}}]),a})(pe),Oi={id:"pointer-events/base",before:["inertia","modifiers","auto-start","actions"],install:function(r){r.pointerEvents=Oi,r.defaults.actions.pointerEvents=Oi.defaults,re(r.actions.phaselessTypes,Oi.types)},listeners:{"interactions:new":function(r){var i=r.interaction;i.prevTap=null,i.tapTime=0},"interactions:update-pointer":function(r){var i=r.down,a=r.pointerInfo;!i&&a.hold||(a.hold={duration:1/0,timeout:null})},"interactions:move":function(r,i){var a=r.interaction,d=r.pointer,p=r.event,g=r.eventTarget;r.duplicate||a.pointerIsDown&&!a.pointerWasMoved||(a.pointerIsDown&&ur(r),Vt({interaction:a,pointer:d,event:p,eventTarget:g,type:"move"},i))},"interactions:down":function(r,i){(function(a,d){for(var p=a.interaction,g=a.pointer,b=a.event,w=a.eventTarget,k=a.pointerIndex,z=p.pointers[k].hold,E=ct(w),R={interaction:p,pointer:g,event:b,eventTarget:w,type:"hold",targets:[],path:E,node:null},q=0;q<E.length;q++){var Q=E[q];R.node=Q,d.fire("pointerEvents:collect-targets",R)}if(R.targets.length){for(var X=1/0,te=0,de=R.targets;te<de.length;te++){var ce=de[te].eventable.options.holdDuration;ce<X&&(X=ce)}z.duration=X,z.timeout=setTimeout((function(){Vt({interaction:p,eventTarget:w,pointer:g,event:b,type:"hold"},d)}),X)}})(r,i),Vt(r,i)},"interactions:up":function(r,i){ur(r),Vt(r,i),(function(a,d){var p=a.interaction,g=a.pointer,b=a.event,w=a.eventTarget;p.pointerWasMoved||Vt({interaction:p,eventTarget:w,pointer:g,event:b,type:"tap"},d)})(r,i)},"interactions:cancel":function(r,i){ur(r),Vt(r,i)}},PointerEvent:qr,fire:Vt,collectEventTargets:Hr,defaults:{holdDuration:600,ignoreFrom:null,allowFrom:null,origin:{x:0,y:0}},types:{down:!0,move:!0,up:!0,cancel:!0,tap:!0,doubletap:!0,hold:!0}};function Vt(r,i){var a=r.interaction,d=r.pointer,p=r.event,g=r.eventTarget,b=r.type,w=r.targets,k=w===void 0?Hr(r,i):w,z=new qr(b,d,p,g,a,i.now());i.fire("pointerEvents:new",{pointerEvent:z});for(var E={interaction:a,pointer:d,event:p,eventTarget:g,targets:k,type:b,pointerEvent:z},R=0;R<k.length;R++){var q=k[R];for(var Q in q.props||{})z[Q]=q.props[Q];var X=Me(q.eventable,q.node);if(z._subtractOrigin(X),z.eventable=q.eventable,z.currentTarget=q.node,q.eventable.fire(z),z._addOrigin(X),z.immediatePropagationStopped||z.propagationStopped&&R+1<k.length&&k[R+1].node!==z.currentTarget)break}if(i.fire("pointerEvents:fired",E),b==="tap"){var te=z.double?Vt({interaction:a,pointer:d,event:p,eventTarget:g,type:"doubletap"},i):z;a.prevTap=te,a.tapTime=te.timeStamp}return z}function Hr(r,i){var a=r.interaction,d=r.pointer,p=r.event,g=r.eventTarget,b=r.type,w=a.getPointerIndex(d),k=a.pointers[w];if(b==="tap"&&(a.pointerWasMoved||!k||k.downTarget!==g))return[];for(var z=ct(g),E={interaction:a,pointer:d,event:p,eventTarget:g,type:b,path:z,targets:[],node:null},R=0;R<z.length;R++){var q=z[R];E.node=q,i.fire("pointerEvents:collect-targets",E)}return b==="hold"&&(E.targets=E.targets.filter((function(Q){var X,te;return Q.eventable.options.holdDuration===((X=a.pointers[w])==null||(te=X.hold)==null?void 0:te.duration)}))),E.targets}function ur(r){var i=r.interaction,a=r.pointerIndex,d=i.pointers[a].hold;d&&d.timeout&&(clearTimeout(d.timeout),d.timeout=null)}var xa=Object.freeze({__proto__:null,default:Oi});function wa(r){var i=r.interaction;i.holdIntervalHandle&&(clearInterval(i.holdIntervalHandle),i.holdIntervalHandle=null)}var Sa={id:"pointer-events/holdRepeat",install:function(r){r.usePlugin(Oi);var i=r.pointerEvents;i.defaults.holdRepeatInterval=0,i.types.holdrepeat=r.actions.phaselessTypes.holdrepeat=!0},listeners:["move","up","cancel","endall"].reduce((function(r,i){return r["pointerEvents:".concat(i)]=wa,r}),{"pointerEvents:new":function(r){var i=r.pointerEvent;i.type==="hold"&&(i.count=(i.count||0)+1)},"pointerEvents:fired":function(r,i){var a=r.interaction,d=r.pointerEvent,p=r.eventTarget,g=r.targets;if(d.type==="hold"&&g.length){var b=g[0].eventable.options.holdRepeatInterval;b<=0||(a.holdIntervalHandle=setTimeout((function(){i.pointerEvents.fire({interaction:a,eventTarget:p,type:"hold",pointer:d,event:d},i)}),b))}}})},ka=Sa,Ca={id:"pointer-events/interactableTargets",install:function(r){var i=r.Interactable;i.prototype.pointerEvents=function(d){return re(this.events.options,d),this};var a=i.prototype._backCompatOption;i.prototype._backCompatOption=function(d,p){var g=a.call(this,d,p);return g===this&&(this.events.options[d]=p),g}},listeners:{"pointerEvents:collect-targets":function(r,i){var a=r.targets,d=r.node,p=r.type,g=r.eventTarget;i.interactables.forEachMatch(d,(function(b){var w=b.events,k=w.options;w.types[p]&&w.types[p].length&&b.testIgnoreAllow(k,d,g)&&a.push({node:d,eventable:w,props:{interactable:b}})}))},"interactable:new":function(r){var i=r.interactable;i.events.getRect=function(a){return i.getRect(a)}},"interactable:set":function(r,i){var a=r.interactable,d=r.options;re(a.events.options,i.pointerEvents.defaults),re(a.events.options,d.pointerEvents||{})}}},Ea=Ca,Aa={id:"pointer-events",install:function(r){r.usePlugin(xa),r.usePlugin(ka),r.usePlugin(Ea)}},Ta=Aa,Oa={id:"reflow",install:function(r){var i=r.Interactable;r.actions.phases.reflow=!0,i.prototype.reflow=function(a){return(function(d,p,g){for(var b=d.getAllElements(),w=g.window.Promise,k=w?[]:null,z=function(){var R=b[E],q=d.getRect(R);if(!q)return 1;var Q,X=W(g.interactions.list,(function(ce){return ce.interacting()&&ce.interactable===d&&ce.element===R&&ce.prepared.name===p.name}));if(X)X.move(),k&&(Q=X._reflowPromise||new w((function(ce){X._reflowResolve=ce})));else{var te=ne(q),de=(function(ce){return{coords:ce,get page(){return this.coords.page},get client(){return this.coords.client},get timeStamp(){return this.coords.timeStamp},get pageX(){return this.coords.page.x},get pageY(){return this.coords.page.y},get clientX(){return this.coords.client.x},get clientY(){return this.coords.client.y},get pointerId(){return this.coords.pointerId},get target(){return this.coords.target},get type(){return this.coords.type},get pointerType(){return this.coords.pointerType},get buttons(){return this.coords.buttons},preventDefault:function(){}}})({page:{x:te.x,y:te.y},client:{x:te.x,y:te.y},timeStamp:g.now()});Q=(function(ce,me,Pe,He,Se){var Re=ce.interactions.new({pointerType:"reflow"}),St={interaction:Re,event:Se,pointer:Se,eventTarget:Pe,phase:"reflow"};Re.interactable=me,Re.element=Pe,Re.prevEvent=Se,Re.updatePointer(Se,Se,Pe,!0),Pt(Re.coords.delta),Be(Re.prepared,He),Re._doPhase(St);var it=ce.window,Mt=it.Promise,Dt=Mt?new Mt((function(jt){Re._reflowResolve=jt})):void 0;return Re._reflowPromise=Dt,Re.start(He,me,Pe),Re._interacting?(Re.move(St),Re.end(Se)):(Re.stop(),Re._reflowResolve()),Re.removePointer(Se,Se),Dt})(g,d,R,p,de)}k&&k.push(Q)},E=0;E<b.length&&!z();E++);return k&&w.all(k).then((function(){return d}))})(this,a,r)}},listeners:{"interactions:stop":function(r,i){var a=r.interaction;a.pointerType==="reflow"&&(a._reflowResolve&&a._reflowResolve(),(function(d,p){d.splice(d.indexOf(p),1)})(i.interactions.list,a))}}},za=Oa;if(wt.use(vi),wt.use(Ci),wt.use(Ta),wt.use(xt),wt.use(_a),wt.use(mi),wt.use(I),wt.use(ze),wt.use(za),wt.default=wt,(typeof ii=="undefined"?"undefined":e(ii))==="object"&&ii)try{ii.exports=wt}catch{}return wt.default=wt,wt}))});var Un=Na(jr(),1);function an(t){return typeof t=="undefined"||t===null}function qa(t){return typeof t=="object"&&t!==null}function Ha(t){return Array.isArray(t)?t:an(t)?[]:[t]}function ja(t,h){var e,n,o,c;if(h)for(c=Object.keys(h),e=0,n=c.length;e<n;e+=1)o=c[e],t[o]=h[o];return t}function Wa(t,h){var e="",n;for(n=0;n<h;n+=1)e+=t;return e}function Ya(t){return t===0&&Number.NEGATIVE_INFINITY===1/t}var $a=an,Ka=qa,Ua=Ha,Va=Wa,Ga=Ya,Xa=ja,ht={isNothing:$a,isObject:Ka,toArray:Ua,repeat:Va,isNegativeZero:Ga,extend:Xa};function on(t,h){var e="",n=t.reason||"(unknown reason)";return t.mark?(t.mark.name&&(e+='in "'+t.mark.name+'" '),e+="("+(t.mark.line+1)+":"+(t.mark.column+1)+")",!h&&t.mark.snippet&&(e+=`

`+t.mark.snippet),n+" "+e):n}function Pi(t,h){Error.call(this),this.name="YAMLException",this.reason=t,this.mark=h,this.message=on(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Pi.prototype=Object.create(Error.prototype);Pi.prototype.constructor=Pi;Pi.prototype.toString=function(h){return this.name+": "+on(this,h)};var kt=Pi;function fr(t,h,e,n,o){var c="",s="",l=Math.floor(o/2)-1;return n-h>l&&(c=" ... ",h=n-l+c.length),e-n>l&&(s=" ...",e=n+l-s.length),{str:c+t.slice(h,e).replace(/\t/g,"\u2192")+s,pos:n-h+c.length}}function gr(t,h){return ht.repeat(" ",h-t.length)+t}function Ja(t,h){if(h=Object.create(h||null),!t.buffer)return null;h.maxLength||(h.maxLength=79),typeof h.indent!="number"&&(h.indent=1),typeof h.linesBefore!="number"&&(h.linesBefore=3),typeof h.linesAfter!="number"&&(h.linesAfter=2);for(var e=/\r?\n|\r|\0/g,n=[0],o=[],c,s=-1;c=e.exec(t.buffer);)o.push(c.index),n.push(c.index+c[0].length),t.position<=c.index&&s<0&&(s=n.length-2);s<0&&(s=n.length-1);var l="",u,f,m=Math.min(t.line+h.linesAfter,o.length).toString().length,v=h.maxLength-(h.indent+m+3);for(u=1;u<=h.linesBefore&&!(s-u<0);u++)f=fr(t.buffer,n[s-u],o[s-u],t.position-(n[s]-n[s-u]),v),l=ht.repeat(" ",h.indent)+gr((t.line-u+1).toString(),m)+" | "+f.str+`
`+l;for(f=fr(t.buffer,n[s],o[s],t.position,v),l+=ht.repeat(" ",h.indent)+gr((t.line+1).toString(),m)+" | "+f.str+`
`,l+=ht.repeat("-",h.indent+m+3+f.pos)+`^
`,u=1;u<=h.linesAfter&&!(s+u>=o.length);u++)f=fr(t.buffer,n[s+u],o[s+u],t.position-(n[s]-n[s+u]),v),l+=ht.repeat(" ",h.indent)+gr((t.line+u+1).toString(),m)+" | "+f.str+`
`;return l.replace(/\n$/,"")}var Qa=Ja,Za=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],eo=["scalar","sequence","mapping"];function to(t){var h={};return t!==null&&Object.keys(t).forEach(function(e){t[e].forEach(function(n){h[String(n)]=e})}),h}function io(t,h){if(h=h||{},Object.keys(h).forEach(function(e){if(Za.indexOf(e)===-1)throw new kt('Unknown option "'+e+'" is met in definition of "'+t+'" YAML type.')}),this.options=h,this.tag=t,this.kind=h.kind||null,this.resolve=h.resolve||function(){return!0},this.construct=h.construct||function(e){return e},this.instanceOf=h.instanceOf||null,this.predicate=h.predicate||null,this.represent=h.represent||null,this.representName=h.representName||null,this.defaultStyle=h.defaultStyle||null,this.multi=h.multi||!1,this.styleAliases=to(h.styleAliases||null),eo.indexOf(this.kind)===-1)throw new kt('Unknown kind "'+this.kind+'" is specified for "'+t+'" YAML type.')}var gt=io;function Wr(t,h){var e=[];return t[h].forEach(function(n){var o=e.length;e.forEach(function(c,s){c.tag===n.tag&&c.kind===n.kind&&c.multi===n.multi&&(o=s)}),e[o]=n}),e}function ro(){var t={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},h,e;function n(o){o.multi?(t.multi[o.kind].push(o),t.multi.fallback.push(o)):t[o.kind][o.tag]=t.fallback[o.tag]=o}for(h=0,e=arguments.length;h<e;h+=1)arguments[h].forEach(n);return t}function yr(t){return this.extend(t)}yr.prototype.extend=function(h){var e=[],n=[];if(h instanceof gt)n.push(h);else if(Array.isArray(h))n=n.concat(h);else if(h&&(Array.isArray(h.implicit)||Array.isArray(h.explicit)))h.implicit&&(e=e.concat(h.implicit)),h.explicit&&(n=n.concat(h.explicit));else throw new kt("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");e.forEach(function(c){if(!(c instanceof gt))throw new kt("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(c.loadKind&&c.loadKind!=="scalar")throw new kt("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(c.multi)throw new kt("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),n.forEach(function(c){if(!(c instanceof gt))throw new kt("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var o=Object.create(yr.prototype);return o.implicit=(this.implicit||[]).concat(e),o.explicit=(this.explicit||[]).concat(n),o.compiledImplicit=Wr(o,"implicit"),o.compiledExplicit=Wr(o,"explicit"),o.compiledTypeMap=ro(o.compiledImplicit,o.compiledExplicit),o};var sn=yr,cn=new gt("tag:yaml.org,2002:str",{kind:"scalar",construct:function(t){return t!==null?t:""}}),ln=new gt("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(t){return t!==null?t:[]}}),dn=new gt("tag:yaml.org,2002:map",{kind:"mapping",construct:function(t){return t!==null?t:{}}}),un=new sn({explicit:[cn,ln,dn]});function no(t){if(t===null)return!0;var h=t.length;return h===1&&t==="~"||h===4&&(t==="null"||t==="Null"||t==="NULL")}function ao(){return null}function oo(t){return t===null}var pn=new gt("tag:yaml.org,2002:null",{kind:"scalar",resolve:no,construct:ao,predicate:oo,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function so(t){if(t===null)return!1;var h=t.length;return h===4&&(t==="true"||t==="True"||t==="TRUE")||h===5&&(t==="false"||t==="False"||t==="FALSE")}function co(t){return t==="true"||t==="True"||t==="TRUE"}function lo(t){return Object.prototype.toString.call(t)==="[object Boolean]"}var hn=new gt("tag:yaml.org,2002:bool",{kind:"scalar",resolve:so,construct:co,predicate:lo,represent:{lowercase:function(t){return t?"true":"false"},uppercase:function(t){return t?"TRUE":"FALSE"},camelcase:function(t){return t?"True":"False"}},defaultStyle:"lowercase"});function uo(t){return 48<=t&&t<=57||65<=t&&t<=70||97<=t&&t<=102}function po(t){return 48<=t&&t<=55}function ho(t){return 48<=t&&t<=57}function fo(t){if(t===null)return!1;var h=t.length,e=0,n=!1,o;if(!h)return!1;if(o=t[e],(o==="-"||o==="+")&&(o=t[++e]),o==="0"){if(e+1===h)return!0;if(o=t[++e],o==="b"){for(e++;e<h;e++)if(o=t[e],o!=="_"){if(o!=="0"&&o!=="1")return!1;n=!0}return n&&o!=="_"}if(o==="x"){for(e++;e<h;e++)if(o=t[e],o!=="_"){if(!uo(t.charCodeAt(e)))return!1;n=!0}return n&&o!=="_"}if(o==="o"){for(e++;e<h;e++)if(o=t[e],o!=="_"){if(!po(t.charCodeAt(e)))return!1;n=!0}return n&&o!=="_"}}if(o==="_")return!1;for(;e<h;e++)if(o=t[e],o!=="_"){if(!ho(t.charCodeAt(e)))return!1;n=!0}return!(!n||o==="_")}function go(t){var h=t,e=1,n;if(h.indexOf("_")!==-1&&(h=h.replace(/_/g,"")),n=h[0],(n==="-"||n==="+")&&(n==="-"&&(e=-1),h=h.slice(1),n=h[0]),h==="0")return 0;if(n==="0"){if(h[1]==="b")return e*parseInt(h.slice(2),2);if(h[1]==="x")return e*parseInt(h.slice(2),16);if(h[1]==="o")return e*parseInt(h.slice(2),8)}return e*parseInt(h,10)}function mo(t){return Object.prototype.toString.call(t)==="[object Number]"&&t%1===0&&!ht.isNegativeZero(t)}var fn=new gt("tag:yaml.org,2002:int",{kind:"scalar",resolve:fo,construct:go,predicate:mo,represent:{binary:function(t){return t>=0?"0b"+t.toString(2):"-0b"+t.toString(2).slice(1)},octal:function(t){return t>=0?"0o"+t.toString(8):"-0o"+t.toString(8).slice(1)},decimal:function(t){return t.toString(10)},hexadecimal:function(t){return t>=0?"0x"+t.toString(16).toUpperCase():"-0x"+t.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),yo=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function vo(t){return!(t===null||!yo.test(t)||t[t.length-1]==="_")}function bo(t){var h,e;return h=t.replace(/_/g,"").toLowerCase(),e=h[0]==="-"?-1:1,"+-".indexOf(h[0])>=0&&(h=h.slice(1)),h===".inf"?e===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:h===".nan"?NaN:e*parseFloat(h,10)}var _o=/^[-+]?[0-9]+e/;function xo(t,h){var e;if(isNaN(t))switch(h){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===t)switch(h){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===t)switch(h){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(ht.isNegativeZero(t))return"-0.0";return e=t.toString(10),_o.test(e)?e.replace("e",".e"):e}function wo(t){return Object.prototype.toString.call(t)==="[object Number]"&&(t%1!==0||ht.isNegativeZero(t))}var gn=new gt("tag:yaml.org,2002:float",{kind:"scalar",resolve:vo,construct:bo,predicate:wo,represent:xo,defaultStyle:"lowercase"}),mn=un.extend({implicit:[pn,hn,fn,gn]}),yn=mn,vn=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),bn=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function So(t){return t===null?!1:vn.exec(t)!==null||bn.exec(t)!==null}function ko(t){var h,e,n,o,c,s,l,u=0,f=null,m,v,y;if(h=vn.exec(t),h===null&&(h=bn.exec(t)),h===null)throw new Error("Date resolve error");if(e=+h[1],n=+h[2]-1,o=+h[3],!h[4])return new Date(Date.UTC(e,n,o));if(c=+h[4],s=+h[5],l=+h[6],h[7]){for(u=h[7].slice(0,3);u.length<3;)u+="0";u=+u}return h[9]&&(m=+h[10],v=+(h[11]||0),f=(m*60+v)*6e4,h[9]==="-"&&(f=-f)),y=new Date(Date.UTC(e,n,o,c,s,l,u)),f&&y.setTime(y.getTime()-f),y}function Co(t){return t.toISOString()}var _n=new gt("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:So,construct:ko,instanceOf:Date,represent:Co});function Eo(t){return t==="<<"||t===null}var xn=new gt("tag:yaml.org,2002:merge",{kind:"scalar",resolve:Eo}),wr=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function Ao(t){if(t===null)return!1;var h,e,n=0,o=t.length,c=wr;for(e=0;e<o;e++)if(h=c.indexOf(t.charAt(e)),!(h>64)){if(h<0)return!1;n+=6}return n%8===0}function To(t){var h,e,n=t.replace(/[\r\n=]/g,""),o=n.length,c=wr,s=0,l=[];for(h=0;h<o;h++)h%4===0&&h&&(l.push(s>>16&255),l.push(s>>8&255),l.push(s&255)),s=s<<6|c.indexOf(n.charAt(h));return e=o%4*6,e===0?(l.push(s>>16&255),l.push(s>>8&255),l.push(s&255)):e===18?(l.push(s>>10&255),l.push(s>>2&255)):e===12&&l.push(s>>4&255),new Uint8Array(l)}function Oo(t){var h="",e=0,n,o,c=t.length,s=wr;for(n=0;n<c;n++)n%3===0&&n&&(h+=s[e>>18&63],h+=s[e>>12&63],h+=s[e>>6&63],h+=s[e&63]),e=(e<<8)+t[n];return o=c%3,o===0?(h+=s[e>>18&63],h+=s[e>>12&63],h+=s[e>>6&63],h+=s[e&63]):o===2?(h+=s[e>>10&63],h+=s[e>>4&63],h+=s[e<<2&63],h+=s[64]):o===1&&(h+=s[e>>2&63],h+=s[e<<4&63],h+=s[64],h+=s[64]),h}function zo(t){return Object.prototype.toString.call(t)==="[object Uint8Array]"}var wn=new gt("tag:yaml.org,2002:binary",{kind:"scalar",resolve:Ao,construct:To,predicate:zo,represent:Oo}),Mo=Object.prototype.hasOwnProperty,Po=Object.prototype.toString;function Lo(t){if(t===null)return!0;var h=[],e,n,o,c,s,l=t;for(e=0,n=l.length;e<n;e+=1){if(o=l[e],s=!1,Po.call(o)!=="[object Object]")return!1;for(c in o)if(Mo.call(o,c))if(!s)s=!0;else return!1;if(!s)return!1;if(h.indexOf(c)===-1)h.push(c);else return!1}return!0}function Ro(t){return t!==null?t:[]}var Sn=new gt("tag:yaml.org,2002:omap",{kind:"sequence",resolve:Lo,construct:Ro}),Io=Object.prototype.toString;function Do(t){if(t===null)return!0;var h,e,n,o,c,s=t;for(c=new Array(s.length),h=0,e=s.length;h<e;h+=1){if(n=s[h],Io.call(n)!=="[object Object]"||(o=Object.keys(n),o.length!==1))return!1;c[h]=[o[0],n[o[0]]]}return!0}function Fo(t){if(t===null)return[];var h,e,n,o,c,s=t;for(c=new Array(s.length),h=0,e=s.length;h<e;h+=1)n=s[h],o=Object.keys(n),c[h]=[o[0],n[o[0]]];return c}var kn=new gt("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:Do,construct:Fo}),Bo=Object.prototype.hasOwnProperty;function No(t){if(t===null)return!0;var h,e=t;for(h in e)if(Bo.call(e,h)&&e[h]!==null)return!1;return!0}function qo(t){return t!==null?t:{}}var Cn=new gt("tag:yaml.org,2002:set",{kind:"mapping",resolve:No,construct:qo}),Sr=yn.extend({implicit:[_n,xn],explicit:[wn,Sn,kn,Cn]}),Xt=Object.prototype.hasOwnProperty,Ji=1,En=2,An=3,Qi=4,mr=1,Ho=2,Yr=3,jo=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,Wo=/[\x85\u2028\u2029]/,Yo=/[,\[\]\{\}]/,Tn=/^(?:!|!!|![a-z\-]+!)$/i,On=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function $r(t){return Object.prototype.toString.call(t)}function Nt(t){return t===10||t===13}function ni(t){return t===9||t===32}function Tt(t){return t===9||t===32||t===10||t===13}function pi(t){return t===44||t===91||t===93||t===123||t===125}function $o(t){var h;return 48<=t&&t<=57?t-48:(h=t|32,97<=h&&h<=102?h-97+10:-1)}function Ko(t){return t===120?2:t===117?4:t===85?8:0}function Uo(t){return 48<=t&&t<=57?t-48:-1}function Kr(t){return t===48?"\0":t===97?"\x07":t===98?"\b":t===116||t===9?"	":t===110?`
`:t===118?"\v":t===102?"\f":t===114?"\r":t===101?"\x1B":t===32?" ":t===34?'"':t===47?"/":t===92?"\\":t===78?"\x85":t===95?"\xA0":t===76?"\u2028":t===80?"\u2029":""}function Vo(t){return t<=65535?String.fromCharCode(t):String.fromCharCode((t-65536>>10)+55296,(t-65536&1023)+56320)}var zn=new Array(256),Mn=new Array(256);for(ri=0;ri<256;ri++)zn[ri]=Kr(ri)?1:0,Mn[ri]=Kr(ri);var ri;function Go(t,h){this.input=t,this.filename=h.filename||null,this.schema=h.schema||Sr,this.onWarning=h.onWarning||null,this.legacy=h.legacy||!1,this.json=h.json||!1,this.listener=h.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=t.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function Pn(t,h){var e={name:t.filename,buffer:t.input.slice(0,-1),position:t.position,line:t.line,column:t.position-t.lineStart};return e.snippet=Qa(e),new kt(h,e)}function ye(t,h){throw Pn(t,h)}function Zi(t,h){t.onWarning&&t.onWarning.call(null,Pn(t,h))}var Ur={YAML:function(h,e,n){var o,c,s;h.version!==null&&ye(h,"duplication of %YAML directive"),n.length!==1&&ye(h,"YAML directive accepts exactly one argument"),o=/^([0-9]+)\.([0-9]+)$/.exec(n[0]),o===null&&ye(h,"ill-formed argument of the YAML directive"),c=parseInt(o[1],10),s=parseInt(o[2],10),c!==1&&ye(h,"unacceptable YAML version of the document"),h.version=n[0],h.checkLineBreaks=s<2,s!==1&&s!==2&&Zi(h,"unsupported YAML version of the document")},TAG:function(h,e,n){var o,c;n.length!==2&&ye(h,"TAG directive accepts exactly two arguments"),o=n[0],c=n[1],Tn.test(o)||ye(h,"ill-formed tag handle (first argument) of the TAG directive"),Xt.call(h.tagMap,o)&&ye(h,'there is a previously declared suffix for "'+o+'" tag handle'),On.test(c)||ye(h,"ill-formed tag prefix (second argument) of the TAG directive");try{c=decodeURIComponent(c)}catch{ye(h,"tag prefix is malformed: "+c)}h.tagMap[o]=c}};function Gt(t,h,e,n){var o,c,s,l;if(h<e){if(l=t.input.slice(h,e),n)for(o=0,c=l.length;o<c;o+=1)s=l.charCodeAt(o),s===9||32<=s&&s<=1114111||ye(t,"expected valid JSON character");else jo.test(l)&&ye(t,"the stream contains non-printable characters");t.result+=l}}function Vr(t,h,e,n){var o,c,s,l;for(ht.isObject(e)||ye(t,"cannot merge mappings; the provided source object is unacceptable"),o=Object.keys(e),s=0,l=o.length;s<l;s+=1)c=o[s],Xt.call(h,c)||(h[c]=e[c],n[c]=!0)}function hi(t,h,e,n,o,c,s,l,u){var f,m;if(Array.isArray(o))for(o=Array.prototype.slice.call(o),f=0,m=o.length;f<m;f+=1)Array.isArray(o[f])&&ye(t,"nested arrays are not supported inside keys"),typeof o=="object"&&$r(o[f])==="[object Object]"&&(o[f]="[object Object]");if(typeof o=="object"&&$r(o)==="[object Object]"&&(o="[object Object]"),o=String(o),h===null&&(h={}),n==="tag:yaml.org,2002:merge")if(Array.isArray(c))for(f=0,m=c.length;f<m;f+=1)Vr(t,h,c[f],e);else Vr(t,h,c,e);else!t.json&&!Xt.call(e,o)&&Xt.call(h,o)&&(t.line=s||t.line,t.lineStart=l||t.lineStart,t.position=u||t.position,ye(t,"duplicated mapping key")),o==="__proto__"?Object.defineProperty(h,o,{configurable:!0,enumerable:!0,writable:!0,value:c}):h[o]=c,delete e[o];return h}function kr(t){var h;h=t.input.charCodeAt(t.position),h===10?t.position++:h===13?(t.position++,t.input.charCodeAt(t.position)===10&&t.position++):ye(t,"a line break is expected"),t.line+=1,t.lineStart=t.position,t.firstTabInLine=-1}function ut(t,h,e){for(var n=0,o=t.input.charCodeAt(t.position);o!==0;){for(;ni(o);)o===9&&t.firstTabInLine===-1&&(t.firstTabInLine=t.position),o=t.input.charCodeAt(++t.position);if(h&&o===35)do o=t.input.charCodeAt(++t.position);while(o!==10&&o!==13&&o!==0);if(Nt(o))for(kr(t),o=t.input.charCodeAt(t.position),n++,t.lineIndent=0;o===32;)t.lineIndent++,o=t.input.charCodeAt(++t.position);else break}return e!==-1&&n!==0&&t.lineIndent<e&&Zi(t,"deficient indentation"),n}function ir(t){var h=t.position,e;return e=t.input.charCodeAt(h),!!((e===45||e===46)&&e===t.input.charCodeAt(h+1)&&e===t.input.charCodeAt(h+2)&&(h+=3,e=t.input.charCodeAt(h),e===0||Tt(e)))}function Cr(t,h){h===1?t.result+=" ":h>1&&(t.result+=ht.repeat(`
`,h-1))}function Xo(t,h,e){var n,o,c,s,l,u,f,m,v=t.kind,y=t.result,x;if(x=t.input.charCodeAt(t.position),Tt(x)||pi(x)||x===35||x===38||x===42||x===33||x===124||x===62||x===39||x===34||x===37||x===64||x===96||(x===63||x===45)&&(o=t.input.charCodeAt(t.position+1),Tt(o)||e&&pi(o)))return!1;for(t.kind="scalar",t.result="",c=s=t.position,l=!1;x!==0;){if(x===58){if(o=t.input.charCodeAt(t.position+1),Tt(o)||e&&pi(o))break}else if(x===35){if(n=t.input.charCodeAt(t.position-1),Tt(n))break}else{if(t.position===t.lineStart&&ir(t)||e&&pi(x))break;if(Nt(x))if(u=t.line,f=t.lineStart,m=t.lineIndent,ut(t,!1,-1),t.lineIndent>=h){l=!0,x=t.input.charCodeAt(t.position);continue}else{t.position=s,t.line=u,t.lineStart=f,t.lineIndent=m;break}}l&&(Gt(t,c,s,!1),Cr(t,t.line-u),c=s=t.position,l=!1),ni(x)||(s=t.position+1),x=t.input.charCodeAt(++t.position)}return Gt(t,c,s,!1),t.result?!0:(t.kind=v,t.result=y,!1)}function Jo(t,h){var e,n,o;if(e=t.input.charCodeAt(t.position),e!==39)return!1;for(t.kind="scalar",t.result="",t.position++,n=o=t.position;(e=t.input.charCodeAt(t.position))!==0;)if(e===39)if(Gt(t,n,t.position,!0),e=t.input.charCodeAt(++t.position),e===39)n=t.position,t.position++,o=t.position;else return!0;else Nt(e)?(Gt(t,n,o,!0),Cr(t,ut(t,!1,h)),n=o=t.position):t.position===t.lineStart&&ir(t)?ye(t,"unexpected end of the document within a single quoted scalar"):(t.position++,o=t.position);ye(t,"unexpected end of the stream within a single quoted scalar")}function Qo(t,h){var e,n,o,c,s,l;if(l=t.input.charCodeAt(t.position),l!==34)return!1;for(t.kind="scalar",t.result="",t.position++,e=n=t.position;(l=t.input.charCodeAt(t.position))!==0;){if(l===34)return Gt(t,e,t.position,!0),t.position++,!0;if(l===92){if(Gt(t,e,t.position,!0),l=t.input.charCodeAt(++t.position),Nt(l))ut(t,!1,h);else if(l<256&&zn[l])t.result+=Mn[l],t.position++;else if((s=Ko(l))>0){for(o=s,c=0;o>0;o--)l=t.input.charCodeAt(++t.position),(s=$o(l))>=0?c=(c<<4)+s:ye(t,"expected hexadecimal character");t.result+=Vo(c),t.position++}else ye(t,"unknown escape sequence");e=n=t.position}else Nt(l)?(Gt(t,e,n,!0),Cr(t,ut(t,!1,h)),e=n=t.position):t.position===t.lineStart&&ir(t)?ye(t,"unexpected end of the document within a double quoted scalar"):(t.position++,n=t.position)}ye(t,"unexpected end of the stream within a double quoted scalar")}function Zo(t,h){var e=!0,n,o,c,s=t.tag,l,u=t.anchor,f,m,v,y,x,O=Object.create(null),S,A,L,C;if(C=t.input.charCodeAt(t.position),C===91)m=93,x=!1,l=[];else if(C===123)m=125,x=!0,l={};else return!1;for(t.anchor!==null&&(t.anchorMap[t.anchor]=l),C=t.input.charCodeAt(++t.position);C!==0;){if(ut(t,!0,h),C=t.input.charCodeAt(t.position),C===m)return t.position++,t.tag=s,t.anchor=u,t.kind=x?"mapping":"sequence",t.result=l,!0;e?C===44&&ye(t,"expected the node content, but found ','"):ye(t,"missed comma between flow collection entries"),A=S=L=null,v=y=!1,C===63&&(f=t.input.charCodeAt(t.position+1),Tt(f)&&(v=y=!0,t.position++,ut(t,!0,h))),n=t.line,o=t.lineStart,c=t.position,fi(t,h,Ji,!1,!0),A=t.tag,S=t.result,ut(t,!0,h),C=t.input.charCodeAt(t.position),(y||t.line===n)&&C===58&&(v=!0,C=t.input.charCodeAt(++t.position),ut(t,!0,h),fi(t,h,Ji,!1,!0),L=t.result),x?hi(t,l,O,A,S,L,n,o,c):v?l.push(hi(t,null,O,A,S,L,n,o,c)):l.push(S),ut(t,!0,h),C=t.input.charCodeAt(t.position),C===44?(e=!0,C=t.input.charCodeAt(++t.position)):e=!1}ye(t,"unexpected end of the stream within a flow collection")}function es(t,h){var e,n,o=mr,c=!1,s=!1,l=h,u=0,f=!1,m,v;if(v=t.input.charCodeAt(t.position),v===124)n=!1;else if(v===62)n=!0;else return!1;for(t.kind="scalar",t.result="";v!==0;)if(v=t.input.charCodeAt(++t.position),v===43||v===45)mr===o?o=v===43?Yr:Ho:ye(t,"repeat of a chomping mode identifier");else if((m=Uo(v))>=0)m===0?ye(t,"bad explicit indentation width of a block scalar; it cannot be less than one"):s?ye(t,"repeat of an indentation width identifier"):(l=h+m-1,s=!0);else break;if(ni(v)){do v=t.input.charCodeAt(++t.position);while(ni(v));if(v===35)do v=t.input.charCodeAt(++t.position);while(!Nt(v)&&v!==0)}for(;v!==0;){for(kr(t),t.lineIndent=0,v=t.input.charCodeAt(t.position);(!s||t.lineIndent<l)&&v===32;)t.lineIndent++,v=t.input.charCodeAt(++t.position);if(!s&&t.lineIndent>l&&(l=t.lineIndent),Nt(v)){u++;continue}if(t.lineIndent<l){o===Yr?t.result+=ht.repeat(`
`,c?1+u:u):o===mr&&c&&(t.result+=`
`);break}for(n?ni(v)?(f=!0,t.result+=ht.repeat(`
`,c?1+u:u)):f?(f=!1,t.result+=ht.repeat(`
`,u+1)):u===0?c&&(t.result+=" "):t.result+=ht.repeat(`
`,u):t.result+=ht.repeat(`
`,c?1+u:u),c=!0,s=!0,u=0,e=t.position;!Nt(v)&&v!==0;)v=t.input.charCodeAt(++t.position);Gt(t,e,t.position,!1)}return!0}function Gr(t,h){var e,n=t.tag,o=t.anchor,c=[],s,l=!1,u;if(t.firstTabInLine!==-1)return!1;for(t.anchor!==null&&(t.anchorMap[t.anchor]=c),u=t.input.charCodeAt(t.position);u!==0&&(t.firstTabInLine!==-1&&(t.position=t.firstTabInLine,ye(t,"tab characters must not be used in indentation")),!(u!==45||(s=t.input.charCodeAt(t.position+1),!Tt(s))));){if(l=!0,t.position++,ut(t,!0,-1)&&t.lineIndent<=h){c.push(null),u=t.input.charCodeAt(t.position);continue}if(e=t.line,fi(t,h,An,!1,!0),c.push(t.result),ut(t,!0,-1),u=t.input.charCodeAt(t.position),(t.line===e||t.lineIndent>h)&&u!==0)ye(t,"bad indentation of a sequence entry");else if(t.lineIndent<h)break}return l?(t.tag=n,t.anchor=o,t.kind="sequence",t.result=c,!0):!1}function ts(t,h,e){var n,o,c,s,l,u,f=t.tag,m=t.anchor,v={},y=Object.create(null),x=null,O=null,S=null,A=!1,L=!1,C;if(t.firstTabInLine!==-1)return!1;for(t.anchor!==null&&(t.anchorMap[t.anchor]=v),C=t.input.charCodeAt(t.position);C!==0;){if(!A&&t.firstTabInLine!==-1&&(t.position=t.firstTabInLine,ye(t,"tab characters must not be used in indentation")),n=t.input.charCodeAt(t.position+1),c=t.line,(C===63||C===58)&&Tt(n))C===63?(A&&(hi(t,v,y,x,O,null,s,l,u),x=O=S=null),L=!0,A=!0,o=!0):A?(A=!1,o=!0):ye(t,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),t.position+=1,C=n;else{if(s=t.line,l=t.lineStart,u=t.position,!fi(t,e,En,!1,!0))break;if(t.line===c){for(C=t.input.charCodeAt(t.position);ni(C);)C=t.input.charCodeAt(++t.position);if(C===58)C=t.input.charCodeAt(++t.position),Tt(C)||ye(t,"a whitespace character is expected after the key-value separator within a block mapping"),A&&(hi(t,v,y,x,O,null,s,l,u),x=O=S=null),L=!0,A=!1,o=!1,x=t.tag,O=t.result;else if(L)ye(t,"can not read an implicit mapping pair; a colon is missed");else return t.tag=f,t.anchor=m,!0}else if(L)ye(t,"can not read a block mapping entry; a multiline key may not be an implicit key");else return t.tag=f,t.anchor=m,!0}if((t.line===c||t.lineIndent>h)&&(A&&(s=t.line,l=t.lineStart,u=t.position),fi(t,h,Qi,!0,o)&&(A?O=t.result:S=t.result),A||(hi(t,v,y,x,O,S,s,l,u),x=O=S=null),ut(t,!0,-1),C=t.input.charCodeAt(t.position)),(t.line===c||t.lineIndent>h)&&C!==0)ye(t,"bad indentation of a mapping entry");else if(t.lineIndent<h)break}return A&&hi(t,v,y,x,O,null,s,l,u),L&&(t.tag=f,t.anchor=m,t.kind="mapping",t.result=v),L}function is(t){var h,e=!1,n=!1,o,c,s;if(s=t.input.charCodeAt(t.position),s!==33)return!1;if(t.tag!==null&&ye(t,"duplication of a tag property"),s=t.input.charCodeAt(++t.position),s===60?(e=!0,s=t.input.charCodeAt(++t.position)):s===33?(n=!0,o="!!",s=t.input.charCodeAt(++t.position)):o="!",h=t.position,e){do s=t.input.charCodeAt(++t.position);while(s!==0&&s!==62);t.position<t.length?(c=t.input.slice(h,t.position),s=t.input.charCodeAt(++t.position)):ye(t,"unexpected end of the stream within a verbatim tag")}else{for(;s!==0&&!Tt(s);)s===33&&(n?ye(t,"tag suffix cannot contain exclamation marks"):(o=t.input.slice(h-1,t.position+1),Tn.test(o)||ye(t,"named tag handle cannot contain such characters"),n=!0,h=t.position+1)),s=t.input.charCodeAt(++t.position);c=t.input.slice(h,t.position),Yo.test(c)&&ye(t,"tag suffix cannot contain flow indicator characters")}c&&!On.test(c)&&ye(t,"tag name cannot contain such characters: "+c);try{c=decodeURIComponent(c)}catch{ye(t,"tag name is malformed: "+c)}return e?t.tag=c:Xt.call(t.tagMap,o)?t.tag=t.tagMap[o]+c:o==="!"?t.tag="!"+c:o==="!!"?t.tag="tag:yaml.org,2002:"+c:ye(t,'undeclared tag handle "'+o+'"'),!0}function rs(t){var h,e;if(e=t.input.charCodeAt(t.position),e!==38)return!1;for(t.anchor!==null&&ye(t,"duplication of an anchor property"),e=t.input.charCodeAt(++t.position),h=t.position;e!==0&&!Tt(e)&&!pi(e);)e=t.input.charCodeAt(++t.position);return t.position===h&&ye(t,"name of an anchor node must contain at least one character"),t.anchor=t.input.slice(h,t.position),!0}function ns(t){var h,e,n;if(n=t.input.charCodeAt(t.position),n!==42)return!1;for(n=t.input.charCodeAt(++t.position),h=t.position;n!==0&&!Tt(n)&&!pi(n);)n=t.input.charCodeAt(++t.position);return t.position===h&&ye(t,"name of an alias node must contain at least one character"),e=t.input.slice(h,t.position),Xt.call(t.anchorMap,e)||ye(t,'unidentified alias "'+e+'"'),t.result=t.anchorMap[e],ut(t,!0,-1),!0}function fi(t,h,e,n,o){var c,s,l,u=1,f=!1,m=!1,v,y,x,O,S,A;if(t.listener!==null&&t.listener("open",t),t.tag=null,t.anchor=null,t.kind=null,t.result=null,c=s=l=Qi===e||An===e,n&&ut(t,!0,-1)&&(f=!0,t.lineIndent>h?u=1:t.lineIndent===h?u=0:t.lineIndent<h&&(u=-1)),u===1)for(;is(t)||rs(t);)ut(t,!0,-1)?(f=!0,l=c,t.lineIndent>h?u=1:t.lineIndent===h?u=0:t.lineIndent<h&&(u=-1)):l=!1;if(l&&(l=f||o),(u===1||Qi===e)&&(Ji===e||En===e?S=h:S=h+1,A=t.position-t.lineStart,u===1?l&&(Gr(t,A)||ts(t,A,S))||Zo(t,S)?m=!0:(s&&es(t,S)||Jo(t,S)||Qo(t,S)?m=!0:ns(t)?(m=!0,(t.tag!==null||t.anchor!==null)&&ye(t,"alias node should not have any properties")):Xo(t,S,Ji===e)&&(m=!0,t.tag===null&&(t.tag="?")),t.anchor!==null&&(t.anchorMap[t.anchor]=t.result)):u===0&&(m=l&&Gr(t,A))),t.tag===null)t.anchor!==null&&(t.anchorMap[t.anchor]=t.result);else if(t.tag==="?"){for(t.result!==null&&t.kind!=="scalar"&&ye(t,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+t.kind+'"'),v=0,y=t.implicitTypes.length;v<y;v+=1)if(O=t.implicitTypes[v],O.resolve(t.result)){t.result=O.construct(t.result),t.tag=O.tag,t.anchor!==null&&(t.anchorMap[t.anchor]=t.result);break}}else if(t.tag!=="!"){if(Xt.call(t.typeMap[t.kind||"fallback"],t.tag))O=t.typeMap[t.kind||"fallback"][t.tag];else for(O=null,x=t.typeMap.multi[t.kind||"fallback"],v=0,y=x.length;v<y;v+=1)if(t.tag.slice(0,x[v].tag.length)===x[v].tag){O=x[v];break}O||ye(t,"unknown tag !<"+t.tag+">"),t.result!==null&&O.kind!==t.kind&&ye(t,"unacceptable node kind for !<"+t.tag+'> tag; it should be "'+O.kind+'", not "'+t.kind+'"'),O.resolve(t.result,t.tag)?(t.result=O.construct(t.result,t.tag),t.anchor!==null&&(t.anchorMap[t.anchor]=t.result)):ye(t,"cannot resolve a node with !<"+t.tag+"> explicit tag")}return t.listener!==null&&t.listener("close",t),t.tag!==null||t.anchor!==null||m}function as(t){var h=t.position,e,n,o,c=!1,s;for(t.version=null,t.checkLineBreaks=t.legacy,t.tagMap=Object.create(null),t.anchorMap=Object.create(null);(s=t.input.charCodeAt(t.position))!==0&&(ut(t,!0,-1),s=t.input.charCodeAt(t.position),!(t.lineIndent>0||s!==37));){for(c=!0,s=t.input.charCodeAt(++t.position),e=t.position;s!==0&&!Tt(s);)s=t.input.charCodeAt(++t.position);for(n=t.input.slice(e,t.position),o=[],n.length<1&&ye(t,"directive name must not be less than one character in length");s!==0;){for(;ni(s);)s=t.input.charCodeAt(++t.position);if(s===35){do s=t.input.charCodeAt(++t.position);while(s!==0&&!Nt(s));break}if(Nt(s))break;for(e=t.position;s!==0&&!Tt(s);)s=t.input.charCodeAt(++t.position);o.push(t.input.slice(e,t.position))}s!==0&&kr(t),Xt.call(Ur,n)?Ur[n](t,n,o):Zi(t,'unknown document directive "'+n+'"')}if(ut(t,!0,-1),t.lineIndent===0&&t.input.charCodeAt(t.position)===45&&t.input.charCodeAt(t.position+1)===45&&t.input.charCodeAt(t.position+2)===45?(t.position+=3,ut(t,!0,-1)):c&&ye(t,"directives end mark is expected"),fi(t,t.lineIndent-1,Qi,!1,!0),ut(t,!0,-1),t.checkLineBreaks&&Wo.test(t.input.slice(h,t.position))&&Zi(t,"non-ASCII line breaks are interpreted as content"),t.documents.push(t.result),t.position===t.lineStart&&ir(t)){t.input.charCodeAt(t.position)===46&&(t.position+=3,ut(t,!0,-1));return}if(t.position<t.length-1)ye(t,"end of the stream or a document separator is expected");else return}function Ln(t,h){t=String(t),h=h||{},t.length!==0&&(t.charCodeAt(t.length-1)!==10&&t.charCodeAt(t.length-1)!==13&&(t+=`
`),t.charCodeAt(0)===65279&&(t=t.slice(1)));var e=new Go(t,h),n=t.indexOf("\0");for(n!==-1&&(e.position=n,ye(e,"null byte is not allowed in input")),e.input+="\0";e.input.charCodeAt(e.position)===32;)e.lineIndent+=1,e.position+=1;for(;e.position<e.length-1;)as(e);return e.documents}function os(t,h,e){h!==null&&typeof h=="object"&&typeof e=="undefined"&&(e=h,h=null);var n=Ln(t,e);if(typeof h!="function")return n;for(var o=0,c=n.length;o<c;o+=1)h(n[o])}function ss(t,h){var e=Ln(t,h);if(e.length!==0){if(e.length===1)return e[0];throw new kt("expected a single document in the stream, but found more")}}var cs=os,ls=ss,Rn={loadAll:cs,load:ls},In=Object.prototype.toString,Dn=Object.prototype.hasOwnProperty,Er=65279,ds=9,Li=10,us=13,ps=32,hs=33,fs=34,vr=35,gs=37,ms=38,ys=39,vs=42,Fn=44,bs=45,er=58,_s=61,xs=62,ws=63,Ss=64,Bn=91,Nn=93,ks=96,qn=123,Cs=124,Hn=125,vt={};vt[0]="\\0";vt[7]="\\a";vt[8]="\\b";vt[9]="\\t";vt[10]="\\n";vt[11]="\\v";vt[12]="\\f";vt[13]="\\r";vt[27]="\\e";vt[34]='\\"';vt[92]="\\\\";vt[133]="\\N";vt[160]="\\_";vt[8232]="\\L";vt[8233]="\\P";var Es=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],As=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function Ts(t,h){var e,n,o,c,s,l,u;if(h===null)return{};for(e={},n=Object.keys(h),o=0,c=n.length;o<c;o+=1)s=n[o],l=String(h[s]),s.slice(0,2)==="!!"&&(s="tag:yaml.org,2002:"+s.slice(2)),u=t.compiledTypeMap.fallback[s],u&&Dn.call(u.styleAliases,l)&&(l=u.styleAliases[l]),e[s]=l;return e}function Os(t){var h,e,n;if(h=t.toString(16).toUpperCase(),t<=255)e="x",n=2;else if(t<=65535)e="u",n=4;else if(t<=4294967295)e="U",n=8;else throw new kt("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+e+ht.repeat("0",n-h.length)+h}var zs=1,Ri=2;function Ms(t){this.schema=t.schema||Sr,this.indent=Math.max(1,t.indent||2),this.noArrayIndent=t.noArrayIndent||!1,this.skipInvalid=t.skipInvalid||!1,this.flowLevel=ht.isNothing(t.flowLevel)?-1:t.flowLevel,this.styleMap=Ts(this.schema,t.styles||null),this.sortKeys=t.sortKeys||!1,this.lineWidth=t.lineWidth||80,this.noRefs=t.noRefs||!1,this.noCompatMode=t.noCompatMode||!1,this.condenseFlow=t.condenseFlow||!1,this.quotingType=t.quotingType==='"'?Ri:zs,this.forceQuotes=t.forceQuotes||!1,this.replacer=typeof t.replacer=="function"?t.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function Xr(t,h){for(var e=ht.repeat(" ",h),n=0,o=-1,c="",s,l=t.length;n<l;)o=t.indexOf(`
`,n),o===-1?(s=t.slice(n),n=l):(s=t.slice(n,o+1),n=o+1),s.length&&s!==`
`&&(c+=e),c+=s;return c}function br(t,h){return`
`+ht.repeat(" ",t.indent*h)}function Ps(t,h){var e,n,o;for(e=0,n=t.implicitTypes.length;e<n;e+=1)if(o=t.implicitTypes[e],o.resolve(h))return!0;return!1}function tr(t){return t===ps||t===ds}function Ii(t){return 32<=t&&t<=126||161<=t&&t<=55295&&t!==8232&&t!==8233||57344<=t&&t<=65533&&t!==Er||65536<=t&&t<=1114111}function Jr(t){return Ii(t)&&t!==Er&&t!==us&&t!==Li}function Qr(t,h,e){var n=Jr(t),o=n&&!tr(t);return(e?n:n&&t!==Fn&&t!==Bn&&t!==Nn&&t!==qn&&t!==Hn)&&t!==vr&&!(h===er&&!o)||Jr(h)&&!tr(h)&&t===vr||h===er&&o}function Ls(t){return Ii(t)&&t!==Er&&!tr(t)&&t!==bs&&t!==ws&&t!==er&&t!==Fn&&t!==Bn&&t!==Nn&&t!==qn&&t!==Hn&&t!==vr&&t!==ms&&t!==vs&&t!==hs&&t!==Cs&&t!==_s&&t!==xs&&t!==ys&&t!==fs&&t!==gs&&t!==Ss&&t!==ks}function Rs(t){return!tr(t)&&t!==er}function Mi(t,h){var e=t.charCodeAt(h),n;return e>=55296&&e<=56319&&h+1<t.length&&(n=t.charCodeAt(h+1),n>=56320&&n<=57343)?(e-55296)*1024+n-56320+65536:e}function jn(t){var h=/^\n* /;return h.test(t)}var Wn=1,_r=2,Yn=3,$n=4,ui=5;function Is(t,h,e,n,o,c,s,l){var u,f=0,m=null,v=!1,y=!1,x=n!==-1,O=-1,S=Ls(Mi(t,0))&&Rs(Mi(t,t.length-1));if(h||s)for(u=0;u<t.length;f>=65536?u+=2:u++){if(f=Mi(t,u),!Ii(f))return ui;S=S&&Qr(f,m,l),m=f}else{for(u=0;u<t.length;f>=65536?u+=2:u++){if(f=Mi(t,u),f===Li)v=!0,x&&(y=y||u-O-1>n&&t[O+1]!==" ",O=u);else if(!Ii(f))return ui;S=S&&Qr(f,m,l),m=f}y=y||x&&u-O-1>n&&t[O+1]!==" "}return!v&&!y?S&&!s&&!o(t)?Wn:c===Ri?ui:_r:e>9&&jn(t)?ui:s?c===Ri?ui:_r:y?$n:Yn}function Ds(t,h,e,n,o){t.dump=(function(){if(h.length===0)return t.quotingType===Ri?'""':"''";if(!t.noCompatMode&&(Es.indexOf(h)!==-1||As.test(h)))return t.quotingType===Ri?'"'+h+'"':"'"+h+"'";var c=t.indent*Math.max(1,e),s=t.lineWidth===-1?-1:Math.max(Math.min(t.lineWidth,40),t.lineWidth-c),l=n||t.flowLevel>-1&&e>=t.flowLevel;function u(f){return Ps(t,f)}switch(Is(h,l,t.indent,s,u,t.quotingType,t.forceQuotes&&!n,o)){case Wn:return h;case _r:return"'"+h.replace(/'/g,"''")+"'";case Yn:return"|"+Zr(h,t.indent)+en(Xr(h,c));case $n:return">"+Zr(h,t.indent)+en(Xr(Fs(h,s),c));case ui:return'"'+Bs(h)+'"';default:throw new kt("impossible error: invalid scalar style")}})()}function Zr(t,h){var e=jn(t)?String(h):"",n=t[t.length-1]===`
`,o=n&&(t[t.length-2]===`
`||t===`
`),c=o?"+":n?"":"-";return e+c+`
`}function en(t){return t[t.length-1]===`
`?t.slice(0,-1):t}function Fs(t,h){for(var e=/(\n+)([^\n]*)/g,n=(function(){var f=t.indexOf(`
`);return f=f!==-1?f:t.length,e.lastIndex=f,tn(t.slice(0,f),h)})(),o=t[0]===`
`||t[0]===" ",c,s;s=e.exec(t);){var l=s[1],u=s[2];c=u[0]===" ",n+=l+(!o&&!c&&u!==""?`
`:"")+tn(u,h),o=c}return n}function tn(t,h){if(t===""||t[0]===" ")return t;for(var e=/ [^ ]/g,n,o=0,c,s=0,l=0,u="";n=e.exec(t);)l=n.index,l-o>h&&(c=s>o?s:l,u+=`
`+t.slice(o,c),o=c+1),s=l;return u+=`
`,t.length-o>h&&s>o?u+=t.slice(o,s)+`
`+t.slice(s+1):u+=t.slice(o),u.slice(1)}function Bs(t){for(var h="",e=0,n,o=0;o<t.length;e>=65536?o+=2:o++)e=Mi(t,o),n=vt[e],!n&&Ii(e)?(h+=t[o],e>=65536&&(h+=t[o+1])):h+=n||Os(e);return h}function Ns(t,h,e){var n="",o=t.tag,c,s,l;for(c=0,s=e.length;c<s;c+=1)l=e[c],t.replacer&&(l=t.replacer.call(e,String(c),l)),(Wt(t,h,l,!1,!1)||typeof l=="undefined"&&Wt(t,h,null,!1,!1))&&(n!==""&&(n+=","+(t.condenseFlow?"":" ")),n+=t.dump);t.tag=o,t.dump="["+n+"]"}function rn(t,h,e,n){var o="",c=t.tag,s,l,u;for(s=0,l=e.length;s<l;s+=1)u=e[s],t.replacer&&(u=t.replacer.call(e,String(s),u)),(Wt(t,h+1,u,!0,!0,!1,!0)||typeof u=="undefined"&&Wt(t,h+1,null,!0,!0,!1,!0))&&((!n||o!=="")&&(o+=br(t,h)),t.dump&&Li===t.dump.charCodeAt(0)?o+="-":o+="- ",o+=t.dump);t.tag=c,t.dump=o||"[]"}function qs(t,h,e){var n="",o=t.tag,c=Object.keys(e),s,l,u,f,m;for(s=0,l=c.length;s<l;s+=1)m="",n!==""&&(m+=", "),t.condenseFlow&&(m+='"'),u=c[s],f=e[u],t.replacer&&(f=t.replacer.call(e,u,f)),Wt(t,h,u,!1,!1)&&(t.dump.length>1024&&(m+="? "),m+=t.dump+(t.condenseFlow?'"':"")+":"+(t.condenseFlow?"":" "),Wt(t,h,f,!1,!1)&&(m+=t.dump,n+=m));t.tag=o,t.dump="{"+n+"}"}function Hs(t,h,e,n){var o="",c=t.tag,s=Object.keys(e),l,u,f,m,v,y;if(t.sortKeys===!0)s.sort();else if(typeof t.sortKeys=="function")s.sort(t.sortKeys);else if(t.sortKeys)throw new kt("sortKeys must be a boolean or a function");for(l=0,u=s.length;l<u;l+=1)y="",(!n||o!=="")&&(y+=br(t,h)),f=s[l],m=e[f],t.replacer&&(m=t.replacer.call(e,f,m)),Wt(t,h+1,f,!0,!0,!0)&&(v=t.tag!==null&&t.tag!=="?"||t.dump&&t.dump.length>1024,v&&(t.dump&&Li===t.dump.charCodeAt(0)?y+="?":y+="? "),y+=t.dump,v&&(y+=br(t,h)),Wt(t,h+1,m,!0,v)&&(t.dump&&Li===t.dump.charCodeAt(0)?y+=":":y+=": ",y+=t.dump,o+=y));t.tag=c,t.dump=o||"{}"}function nn(t,h,e){var n,o,c,s,l,u;for(o=e?t.explicitTypes:t.implicitTypes,c=0,s=o.length;c<s;c+=1)if(l=o[c],(l.instanceOf||l.predicate)&&(!l.instanceOf||typeof h=="object"&&h instanceof l.instanceOf)&&(!l.predicate||l.predicate(h))){if(e?l.multi&&l.representName?t.tag=l.representName(h):t.tag=l.tag:t.tag="?",l.represent){if(u=t.styleMap[l.tag]||l.defaultStyle,In.call(l.represent)==="[object Function]")n=l.represent(h,u);else if(Dn.call(l.represent,u))n=l.represent[u](h,u);else throw new kt("!<"+l.tag+'> tag resolver accepts not "'+u+'" style');t.dump=n}return!0}return!1}function Wt(t,h,e,n,o,c,s){t.tag=null,t.dump=e,nn(t,e,!1)||nn(t,e,!0);var l=In.call(t.dump),u=n,f;n&&(n=t.flowLevel<0||t.flowLevel>h);var m=l==="[object Object]"||l==="[object Array]",v,y;if(m&&(v=t.duplicates.indexOf(e),y=v!==-1),(t.tag!==null&&t.tag!=="?"||y||t.indent!==2&&h>0)&&(o=!1),y&&t.usedDuplicates[v])t.dump="*ref_"+v;else{if(m&&y&&!t.usedDuplicates[v]&&(t.usedDuplicates[v]=!0),l==="[object Object]")n&&Object.keys(t.dump).length!==0?(Hs(t,h,t.dump,o),y&&(t.dump="&ref_"+v+t.dump)):(qs(t,h,t.dump),y&&(t.dump="&ref_"+v+" "+t.dump));else if(l==="[object Array]")n&&t.dump.length!==0?(t.noArrayIndent&&!s&&h>0?rn(t,h-1,t.dump,o):rn(t,h,t.dump,o),y&&(t.dump="&ref_"+v+t.dump)):(Ns(t,h,t.dump),y&&(t.dump="&ref_"+v+" "+t.dump));else if(l==="[object String]")t.tag!=="?"&&Ds(t,t.dump,h,c,u);else{if(l==="[object Undefined]")return!1;if(t.skipInvalid)return!1;throw new kt("unacceptable kind of an object to dump "+l)}t.tag!==null&&t.tag!=="?"&&(f=encodeURI(t.tag[0]==="!"?t.tag.slice(1):t.tag).replace(/!/g,"%21"),t.tag[0]==="!"?f="!"+f:f.slice(0,18)==="tag:yaml.org,2002:"?f="!!"+f.slice(18):f="!<"+f+">",t.dump=f+" "+t.dump)}return!0}function js(t,h){var e=[],n=[],o,c;for(xr(t,e,n),o=0,c=n.length;o<c;o+=1)h.duplicates.push(e[n[o]]);h.usedDuplicates=new Array(c)}function xr(t,h,e){var n,o,c;if(t!==null&&typeof t=="object")if(o=h.indexOf(t),o!==-1)e.indexOf(o)===-1&&e.push(o);else if(h.push(t),Array.isArray(t))for(o=0,c=t.length;o<c;o+=1)xr(t[o],h,e);else for(n=Object.keys(t),o=0,c=n.length;o<c;o+=1)xr(t[n[o]],h,e)}function Ws(t,h){h=h||{};var e=new Ms(h);e.noRefs||js(t,e);var n=t;return e.replacer&&(n=e.replacer.call({"":n},"",n)),Wt(e,0,n,!0,!0)?e.dump+`
`:""}var Ys=Ws,$s={dump:Ys};function Ar(t,h){return function(){throw new Error("Function yaml."+t+" is removed in js-yaml 4. Use yaml."+h+" instead, which is now safe by default.")}}var Ks=gt,Us=sn,Vs=un,Gs=mn,Xs=yn,Js=Sr,Qs=Rn.load,Zs=Rn.loadAll,ec=$s.dump,tc=kt,ic={binary:wn,float:gn,map:dn,null:pn,pairs:kn,set:Cn,timestamp:_n,bool:hn,int:fn,merge:xn,omap:Sn,seq:ln,str:cn},rc=Ar("safeLoad","load"),nc=Ar("safeLoadAll","loadAll"),ac=Ar("safeDump","dump"),oc={Type:Ks,Schema:Us,FAILSAFE_SCHEMA:Vs,JSON_SCHEMA:Gs,CORE_SCHEMA:Xs,DEFAULT_SCHEMA:Js,load:Qs,loadAll:Zs,dump:ec,YAMLException:tc,types:ic,safeLoad:rc,safeLoadAll:nc,safeDump:ac},Kn=oc;window.interact||(window.interact=Un.default);window.jsyaml||(window.jsyaml=Kn);var sc="0.9.5";console.info(`%c drag-and-drop-card %c v${sc} `,"color:#fff;background:#03a9f4;font-weight:700;padding:2px 6px;border-radius:3px 0 0 3px","color:#03303a;background:#bdeaff;padding:2px 6px;border-radius:0 3px 3px 0");var cc=(t,...h)=>console.debug(`[drag-and-drop-card] ${t}`,...h);console.info("%c drag-and-drop-card loaded","color:#03a9f4;font-weight:700;");var Tr=()=>new Promise(t=>requestAnimationFrame(()=>t())),lc=()=>new Promise(t=>window.requestIdleCallback?requestIdleCallback(()=>t()):setTimeout(t,0)),Jt=class t extends HTMLElement{constructor(){super();dt(this,"__booting",!1);dt(this,"_gridCanvas",null);dt(this,"_gridCtx",null);dt(this,"_gridCols",0);dt(this,"_gridRows",0);dt(this,"_gridCellSize",0);dt(this,"_gridDown",!1);dt(this,"_gridStartCol",-1);dt(this,"_gridStartRow",-1);dt(this,"_gridHoverCol",-1);dt(this,"_gridHoverRow",-1);dt(this,"_gridCurrCol",-1);dt(this,"_gridCurrRow",-1);dt(this,"_gridDirty",!1);dt(this,"_gridRAF",0);dt(this,"_gridTile",null);dt(this,"__gridPrevEditMode");dt(this,"__gridRO",null);dt(this,"__gridPollT",null);this.shadowRoot||this.attachShadow({mode:"open"}),this.__rebuiltCards=new WeakSet}_updateTabsA11y_(){var o;let e=this.tabsBar;if(!e)return;e.setAttribute("role","tablist"),e.querySelectorAll(".ddc-tab").forEach((c,s)=>{let l=c.classList.contains("active");c.setAttribute("role","tab"),c.setAttribute("aria-selected",String(l)),c.setAttribute("tabindex",l?"0":"-1"),c.dataset.index=String(s)}),this.__tabsKeyHandler||(this.__tabsKeyHandler=c=>{if(!["ArrowLeft","ArrowRight","Home","End"].includes(c.key))return;let l=Array.from(e.querySelectorAll(".ddc-tab"));if(!l.length)return;c.preventDefault();let u=l.findIndex(y=>y===document.activeElement),f=l.findIndex(y=>y.classList.contains("active")),m=u>=0?u:f>=0?f:0;c.key==="ArrowRight"&&(m=Math.min(l.length-1,m+1)),c.key==="ArrowLeft"&&(m=Math.max(0,m-1)),c.key==="Home"&&(m=0),c.key==="End"&&(m=l.length-1);let v=l[m];if(v){try{v.focus({preventScroll:!1})}catch{}v.click()}},e.addEventListener("keydown",this.__tabsKeyHandler)),this.__tabsScrollHandler||(this.__tabsScrollHandler=()=>{var c;return(c=this._updateTabOverflowShadows_)==null?void 0:c.call(this)},e.addEventListener("scroll",this.__tabsScrollHandler,{passive:!0})),(o=this._updateTabOverflowShadows_)==null||o.call(this)}_getCurrentDashboardUrlPath_(){let n=(window.location.pathname||"/").replace(/^\/+/,"").split("/")[0]||"lovelace";return n==="lovelace"?null:n}async _ensureCardIdSeededInStorage_(){var n;if((n=this.config)!=null&&n.id)return this.config.id;let e=crypto!=null&&crypto.randomUUID?crypto.randomUUID():"ddc_"+Math.random().toString(36).slice(2);this.config={...this.config,id:e};try{let o=this._getCurrentDashboardUrlPath_(),c=await this.hass.callWS(o?{type:"lovelace/config",url_path:o}:{type:"lovelace/config"}),s=this._findThisCardPathRecursive_(c,x=>(x==null?void 0:x.type)==="custom:drag-and-drop-card"&&(!x.id||x.id===e));if(!s)return e;let{viewIndex:l,cardIndex:u,parentPath:f}=s,m=c.views[l],y={...this._getCardByPath_(m,f,u),id:e};this._setCardByPath_(m,f,u,y),await this.hass.callWS(o?{type:"lovelace/config/save",url_path:o,config:c}:{type:"lovelace/config/save",config:c})}catch{}return e}async _persistThisCardConfigToStorage_(){var y,x;await this._ensureCardIdSeededInStorage_();let e={type:"custom:drag-and-drop-card",id:(y=this.config)==null?void 0:y.id,...this._config},n=this._getCurrentDashboardUrlPath_(),o=await this.hass.callWS(n?{type:"lovelace/config",url_path:n}:{type:"lovelace/config"}),c=this._findThisCardPathRecursive_(o,O=>{var S;return(O==null?void 0:O.type)==="custom:drag-and-drop-card"&&(O==null?void 0:O.id)===((S=this.config)==null?void 0:S.id)});if(!c)throw new Error("Card not found in Lovelace config");let{viewIndex:s,cardIndex:l,parentPath:u}=c,f=o.views[s],v={...this._getCardByPath_(f,u,l),...e};this._setCardByPath_(f,u,l,v),await this.hass.callWS(n?{type:"lovelace/config/save",url_path:n,config:o}:{type:"lovelace/config/save",config:o}),this.config=v,(x=this.requestUpdate)==null||x.call(this)}_findThisCardPathRecursive_(e,n){let o=(e==null?void 0:e.views)||[];for(let c=0;c<o.length;c++){let s=this._findInCardTree_(o[c],n);if(s)return{viewIndex:c,...s}}return null}_findInCardTree_(e,n,o=[]){var s;let c=(e==null?void 0:e.cards)||[];for(let l=0;l<c.length;l++){let u=c[l];if(n(u))return{cardIndex:l,parentPath:o};if((s=u==null?void 0:u.cards)!=null&&s.length){let f=this._findInCardTree_(u,n,o.concat(l));if(f)return f}}return null}_getCardByPath_(e,n,o){let c=e;for(let s of n||[])c=c.cards[s];return c.cards[o]}_setCardByPath_(e,n,o,c){let s=e;for(let l of n||[])s=s.cards[l];s.cards[o]=c}_ensureToolbarStyles_(){try{if(this.shadowRoot.querySelector("#ddc-toolbar-styles"))return;let n=document.createElement("style");n.id="ddc-toolbar-styles",n.textContent=`/* ===== Edit toolbar ===== */
  .ddc-toolbar{
    position: sticky; top:0; z-index: 50;
    display:grid; grid-template-columns: 1fr auto 1fr; align-items:center;
    gap: 12px; padding: 10px 14px;
    backdrop-filter: blur(8px);
    background: color-mix(in oklab, var(--card-background-color, rgba(0,0,0,.45)) 80%, transparent);
    border-bottom: 1px solid var(--divider-color, rgba(255,255,255,.08));
    box-shadow: 0 2px 10px rgba(0,0,0,.25);
  }
  .ddc-t-group{ display:flex; align-items:center; gap:8px; flex-wrap: wrap; }
  .ddc-toolbar > .ddc-t-group:first-child{ justify-self: start; }
  .ddc-toolbar > .ddc-t-group:nth-child(3){ justify-self: center; }
  .ddc-toolbar > .ddc-t-group:last-child{ justify-self: end; }

  .ddc-t-btn{
    display:inline-flex; align-items:center; gap:8px;
    height:34px; padding:0 12px; border-radius:10px;
    font: inherit; line-height: 1; cursor:pointer;
    background: var(--ha-card-background, rgba(255,255,255,.06));
    border: 1px solid color-mix(in oklab, currentColor 12%, transparent);
    color: var(--primary-text-color, #e5e7eb);
    transition: transform .08s ease, background .15s ease, border-color .15s ease;
  }
  .ddc-t-btn:hover{ transform: translateY(-1px); background: rgba(255,255,255,.1); }
  .ddc-t-btn:active{ transform: translateY(0); }
  .ddc-t-btn ha-icon{ --mdc-icon-size:18px; }
  .ddc-t-btn .label{ white-space:nowrap; }

  .ddc-t-btn.primary{
    background: var(--primary-color);
    color: var(--text-primary-color, #fff);
    border-color: color-mix(in oklab, var(--primary-color) 75%, #000);
  }
  .ddc-t-btn.danger{
    background: var(--error-color, #ef4444);
    color:#fff;
    border-color: color-mix(in oklab, var(--error-color) 75%, #000);
  }
  .ddc-t-btn.ghost{
    background: transparent;
    border-color: transparent;
    color: var(--secondary-text-color, #cbd5e1);
  }

  .ddc-t-sep{ width:1px; height:28px; background: var(--divider-color, rgba(255,255,255,.12)); }

  .ddc-t-status{
    display:inline-flex; align-items:center; gap:8px;
    padding:6px 12px; border-radius:999px;
    background: rgba(255,255,255,.06);
    border: 1px solid color-mix(in oklab, currentColor 12%, transparent);
    font-size:.875rem;
  }
  .ddc-t-dot{ width:10px; height:10px; border-radius:50%; background:#22c55e; }
  .ddc-t-dot.dirty{ background:#f59e0b; animation: ddc-pulse 1.5s ease-in-out infinite; }
  .ddc-t-dot.error{ background:#ef4444; }
  @keyframes ddc-pulse{ 0%,100%{ transform:scale(1)} 50%{ transform:scale(1.4)} }

  /* Compact (icon-only) when narrow */
  .ddc-toolbar.compact .ddc-t-btn .label{ display:none; }
  /* Super-narrow: stack rows */
  @media (max-width: 840px){
    .ddc-toolbar{ grid-template-columns: 1fr; row-gap: 10px; }
    .ddc-toolbar .ddc-t-sep{ display:none; }
    .ddc-toolbar > .ddc-t-group{ justify-self: stretch; }
  }`,this.shadowRoot.appendChild(n)}catch(e){console.warn("Toolbar style inject failed",e)}}_ensureSettingsStyles_(){if(this.shadowRoot.querySelector("#ddc-settings-styles"))return;let e=document.createElement("style");e.id="ddc-settings-styles",e.textContent=`
  .dialog.modern { max-width: 1920px; width: min(92vw, 1080px); border-radius: 14px; overflow: hidden; }
  .dlg-head { display:flex; justify-content:space-between; align-items:center; padding:14px 18px; background:var(--primary-color); color:#fff; }
  .dlg-head h3 { margin:0; font-size:1.1rem; font-weight:700; }
  .icon-btn { border:0; background:transparent; color:inherit; cursor:pointer; display:grid; place-items:center; }
  .settings-body { display:grid; gap:16px; padding:16px; max-height:70vh; overflow:auto; grid-template-columns: 1fr; }
  @media (min-width: 720px){ .settings-body { grid-template-columns: 1fr 1fr; } }
  .card { background:var(--ha-card-background, #fff); border-radius:12px; box-shadow:0 1px 6px rgba(0,0,0,.08); padding:12px 14px; display:flex; flex-direction:column; gap:10px; }
  .card h4 { margin:0; font-size:1rem; font-weight:700; color:var(--primary-text-color); }
  .row { display:flex; align-items:center; gap:12px; }
  .row label { flex:1; font-size:.95rem; }
  .row input[type="text"], .row input[type="number"], .row select { flex:1; padding:8px; border:1px solid var(--divider-color, rgba(0,0,0,.2)); border-radius:8px; background:var(--card-background-color, #fff); }
  .range-wrap { display:flex; align-items:center; gap:12px; }
  .range-wrap input[type="range"] { flex:1; }
  .range-wrap output { width:64px; text-align:right; color:var(--secondary-text-color); font-weight:600; }
  .chips { display:flex; gap:8px; flex-wrap:wrap; }
  .chip { border:1px solid var(--divider-color, rgba(0,0,0,.25)); padding:6px 10px; border-radius:999px; background:transparent; cursor:pointer; font-size:.9rem; }
  .chip[aria-pressed="true"] { background:var(--primary-color); color:#fff; border-color:transparent; }
  .preview { border:1px dashed var(--divider-color, rgba(0,0,0,.25)); border-radius:10px; padding:10px; }
  /* ---- Grid demo ---- */
  .grid-demo{
    --g: 100px;                               /* cell size injected via JS */
    --line-minor: rgba(255,255,255,.10);
    --line-major: rgba(255,255,255,.22);
    --bg-fade   : linear-gradient(180deg, transparent 0%, rgba(0,0,0,.04) 100%);

    position: relative;
    height: 180px;
    border-radius: 14px;
    border: 1px solid var(--divider-color, rgba(0,0,0,.18));
    overflow: hidden;
    background:
      /* subtle base */
      var(--bg-fade),
      /* major lines every 5 cells (thicker) - horizontal */
      repeating-linear-gradient(
        to bottom,
        var(--line-major) 0 2px,
        transparent 2px calc(var(--g) * 5)
      ),
      /* major lines every 5 cells (thicker) - vertical */
      repeating-linear-gradient(
        to right,
        var(--line-major) 0 2px,
        transparent 2px calc(var(--g) * 5)
      ),
      /* minor lines each cell - horizontal */
      repeating-linear-gradient(
        to bottom,
        var(--line-minor) 0 1px,
        transparent 1px var(--g)
      ),
      /* minor lines each cell - vertical */
      repeating-linear-gradient(
        to right,
        var(--line-minor) 0 1px,
        transparent 1px var(--g)
      );
    background-color: rgba(0,0,0,.02);
  }

  .grid-meta-badge{
    position: absolute; top: 8px; right: 8px;
    padding: 6px 10px;
    background: color-mix(in oklab, var(--ha-card-background, #111) 80%, transparent);
    border: 1px solid var(--divider-color, rgba(0,0,0,.24));
    border-radius: 999px;
    font-size: .86rem;
    letter-spacing:.2px;
    display:flex; align-items:center; gap:8px;
    backdrop-filter: blur(4px);
    pointer-events:none;
  }

    /* --- NEW nicer headers / captions / swatches / tooltips --- */

    .caption { margin:0 0 8px 0; color:var(--secondary-text-color); font-size:.9rem; }

    .swatches { display:flex; gap:8px; flex-wrap:wrap; }
    .swatch { width:28px; height:28px; border-radius:6px; border:1px solid rgba(0,0,0,.15); cursor:pointer; position:relative; }
    .swatch[aria-pressed="true"]::after { content:""; position:absolute; inset:-3px; border:2px solid var(--primary-color); border-radius:8px; }

    .inline-help { display:inline-flex; align-items:center; gap:6px; color:var(--secondary-text-color); font-size:.9rem; }
    .inline-help ha-icon { opacity:.8; }

    .input-file { display:flex; gap:10px; align-items:center; }
    .input-file input[type="file"] { display:none; }
    .input-file .file-btn { border:1px solid var(--divider-color,rgba(0,0,0,.25)); border-radius:8px; padding:8px 12px; cursor:pointer; background:var(--ha-card-background,#fff); }
    .thumb { width:64px; height:42px; border-radius:6px; background-size:cover; background-position:center; border:1px solid rgba(0,0,0,.12); }

    .divider { height:1px; background:var(--divider-color, rgba(0,0,0,.12)); margin:8px 0; opacity:.7; }

    .section-head { display:flex; align-items:center; gap:8px; margin:0 0 8px 0; padding-bottom:6px; border-bottom:1px solid var(--divider-color, rgba(0,0,0,.12)); }
    .section-head ha-icon { opacity:.9; }
    .setting { display:flex; flex-direction:column; gap:6px; margin:8px 0; }
    .setting .row { display:flex; align-items:center; gap:12px; }
    .setting .title { display:flex; align-items:center; gap:8px; min-width:220px; }
    .setting .title ha-icon { opacity:.9; }
    .setting .control { display:flex; align-items:center; gap:10px; flex:1; }
    .setting .hint { margin-left:32px; color:var(--secondary-text-color); font-size:.88rem; line-height:1.35; }
    .setting .suffix { opacity:.6; margin-left:4px; }
    .range-wrap { display:flex; align-items:center; gap:12px; flex:1; }
    .range-wrap output { width:64px; text-align:right; color:var(--secondary-text-color); font-weight:600; }

    /* --- Tabs manager UI --- */
    .tabs-card .tab-row { display:flex; align-items:center; gap:10px; padding:6px 0; border-bottom:1px solid var(--divider-color, rgba(0,0,0,.08)); }
    .tabs-card .tab-row:last-child { border-bottom:0; }
    .tabs-card .tab-name { flex:1; display:flex; align-items:center; gap:8px; }
    .tabs-card .tab-name input { flex:1; padding:6px 8px; border:1px solid var(--divider-color, rgba(0,0,0,.25)); border-radius:8px; background:var(--ha-card-background, #fff); }
    .tabs-card .tab-actions { display:flex; align-items:center; gap:8px; }
    .icon-btn.danger { color: var(--error-color, #b00020); }

    /* gradient swatches */
    .gradients { display:flex; gap:8px; flex-wrap:wrap; }
    .gradient { width:44px; height:28px; border-radius:8px; border:1px solid rgba(0,0,0,.15); cursor:pointer; position:relative; }
    .gradient[aria-pressed="true"]::after { content:""; position:absolute; inset:-3px; border:2px solid var(--primary-color); border-radius:10px; }

    /* Section hierarchy */
    .section-head {
      display:flex; align-items:center; gap:10px; margin:6px 0 6px;
    }
    .section-head ha-icon { opacity:.85; }
    .section-head h4 {
      margin:0;
      font-size:1.1rem;          /* larger than setting labels */
      font-weight:700;
      letter-spacing:.2px;
    }

    /* Setting rows */
    .setting { padding:10px 0; }
    .setting .row {
      display:flex; align-items:center; gap:14px;
    }
    .setting .title {
      flex:0 0 240px;            /* left column width */
      display:flex; align-items:center; gap:8px;
      font-weight:600;
    }
    .setting .title label, .setting .title span { font-size:.98rem; }
    .setting .control { flex:1; display:flex; align-items:center; gap:10px; }

    /* Hints and captions */
    .caption { margin:0 0 4px; color:var(--secondary-text-color); font-size:.92rem; }
    .hint    { margin:6px 0 0;  color:var(--secondary-text-color); font-size:.88rem; }

    /* Dividers */
    .divider {
      height:1px;
      background:linear-gradient(
        to right,
        transparent,
        var(--divider-color, rgba(0,0,0,.12)),
        transparent
      );
      margin:12px 0;
    }

    /* Inputs */
    .modern select,
    .modern input[type="text"],
    .modern input[type="number"] {
      padding:8px 10px;
      border:1px solid var(--divider-color,rgba(0,0,0,.25));
      border-radius:10px;
      background:var(--ha-card-background,#fff);
    }

    /* Slider + output */
    .range-wrap { display:flex; align-items:center; gap:10px; width:100%; }
    .range-wrap input[type="range"] { flex:1; }
    .range-wrap output {
      min-width:64px; text-align:right; font-variant-numeric:tabular-nums;
      color:var(--secondary-text-color);
    }

    /* Chips row spacing */
    .chips { display:flex; gap:8px; flex-wrap:wrap; }

    /* ----- Hard category separators ----- */
    section.card {
      border-bottom: 2px solid var(--divider-strong, rgba(255,255,255,.15));
      margin-bottom: 20px;
      padding-bottom: 24px;
    }

    section.card:last-of-type {
      border-bottom: none;
      margin-bottom: 0;
      padding-bottom: 0;
    }

    section.card:hover > .section-head h4 {
      color: var(--accent-color, var(--primary-color));
      transition: color .25s ease;
    }

    .section-head {
      background: linear-gradient(90deg, var(--accent-color, #2563eb) 0%, transparent 70%);
      padding: 4px 10px;
      border-radius: 6px;
    }
    .section-head h4 {
      color: #fff;
    }

    /* Tighten the empty space after Background image and between sections */
    section.card .setting:last-child { margin-bottom: 0; padding-bottom: 0; }
    section.card { margin-bottom: 16px; padding-bottom: 20px; }
    .section-head { margin-top: 4px; }

    /* Place Tabs section right after Appearance without big gaps */
    .tabs-card { margin-top: 8px; }

    /* File inputs: clearer Upload/Delete buttons */
    .input-file { display:flex; align-items:center; gap:12px; flex-wrap:wrap; }
    .file-btn, #ddc-clear-bg {
      height: 36px; padding: 0 14px; border-radius: 10px; font-weight: 700;
      border: 1px solid transparent; cursor: pointer;
    }
    .file-btn {
      background: var(--primary-color); color: var(--text-primary-color, #fff);
    }
    #ddc-clear-bg {
      background: var(--error-color, #ef4444); color:#fff;
    }
    #ddc-clear-bg:hover { filter: brightness(1.05); }
    .file-btn:hover { filter: brightness(1.05); }

    /* BG option controls */
    .bg-opts { display:grid; grid-template-columns: 220px 1fr; gap:10px 12px; margin-top:8px; }
    .bg-opts label { display:flex; align-items:center; gap:8px; font-weight:600; }
    .bg-opts select, .bg-opts input[type="range"] {
      width: 100%; padding:8px 10px; border:1px solid var(--divider-color,rgba(0,0,0,.25));
      border-radius:10px; background:var(--ha-card-background,#1e1e1e);
    }
    .bg-opts output { min-width:52px; text-align:right; color:var(--secondary-text-color); }

    /* Background image preview thumb */
    .thumb {
      width: 72px; height: 42px; border-radius: 8px;
      background-size: cover; background-position: center center;
      border: 1px solid var(--divider-color, rgba(0,0,0,.25));
    }

    /* ---- Render the background image via a pseudo element so opacity doesn't fade content ---- */
    .ddc-canvas { position: relative; z-index: 0; }
    .ddc-canvas::before{
      content:""; position:absolute; inset:0; z-index:0; pointer-events:none;
      background-image: var(--ddc-bg-image, none);
      background-repeat: var(--ddc-bg-repeat, no-repeat);
      background-size: var(--ddc-bg-size, cover);
      background-position: var(--ddc-bg-position, center center);
      background-attachment: var(--ddc-bg-attachment, scroll);
      opacity: var(--ddc-bg-opacity, 1);
    }
    .ddc-canvas > * { position: relative; z-index: 1; }

    /* Tabs manager polish */
    .tab-row {
      display:flex; align-items:center; gap:10px;
      margin-bottom:10px; padding:8px;
      border:1px solid var(--divider-color, rgba(255,255,255,.12));
      border-radius:8px; background:var(--ha-card-background, rgba(255,255,255,.04));
    }
    .tab-row:hover { background: var(--ha-card-background, rgba(255,255,255,.08)); }

    .tab-name { flex:1; display:flex; align-items:center; gap:8px; }
    .tab-name input {
      background: var(--ha-card-background, #1f1f1f);
      border:1px solid var(--divider-color, rgba(255,255,255,.12));
      color: var(--primary-text-color);
      padding:6px 8px; border-radius:6px;
    }

    .tab-icon-wrap { position:relative; display:flex; align-items:center; gap:6px; }
    .tab-icon-wrap ha-icon { opacity:.9; }

    .mode-chips {
      display:flex; gap:6px;
    }
    .mode-chips .chip {
      border-radius:10px; padding:4px 8px; font-weight:600;
      background: var(--ha-card-background, #222); border:1px solid var(--divider-color, rgba(255,255,255,.12));
    }
    .mode-chips .chip[aria-pressed="true"] {
      background: var(--primary-color); color: #fff; border-color: transparent;
    }

  .grid-meta-badge ha-icon{ opacity:.9; }
  .color-pair { display:flex; gap:8px; }
  .color-pair input[type="color"] { width:44px; height:36px; border:0; background:transparent; padding:0; }
  .footer { display:flex; justify-content:flex-end; gap:10px; padding:12px 16px; border-top:1px solid var(--divider-color, rgba(0,0,0,.12)); }
  .btn.primary { background:var(--primary-color); color:#fff; border:0; border-radius:8px; padding:8px 16px; font-weight:600; cursor:pointer; }
  .btn.secondary { background:transparent; border:1px solid var(--divider-color, rgba(0,0,0,.25)); border-radius:8px; padding:8px 16px; cursor:pointer; }
  `,this.shadowRoot.appendChild(e)}_setHeaderVisible_(e=!0){var n,o,c,s,l;try{(((n=this._deepQueryAll)==null?void 0:n.call(this,"app-header, ha-top-app-bar, ha-top-app-bar-fixed, mwc-top-app-bar-fixed, ha-header-bar, app-toolbar, ha-toolbar"))||[]).forEach(y=>{y&&(y.dataset.ddcPrevDisplayHeader===void 0&&(y.dataset.ddcPrevDisplayHeader=y.style.display||"",y.dataset.ddcPrevMinH=y.style.minHeight||"",y.dataset.ddcPrevH=y.style.height||"",y.dataset.ddcPrevVis=y.style.visibility||""),e?(y.style.display=y.dataset.ddcPrevDisplayHeader||"",y.style.minHeight=y.dataset.ddcPrevMinH||"",y.style.height=y.dataset.ddcPrevH||"",y.style.visibility=y.dataset.ddcPrevVis||"",y.removeAttribute("hidden")):(y.style.display="none",y.style.minHeight="0",y.style.height="0",y.style.visibility="hidden",y.setAttribute("hidden","")))}),(((o=this._deepQueryAll)==null?void 0:o.call(this,'[slot="actionItems"], ha-icon-button, ha-button-menu, assist-button, search-input, ha-quick-bar, ha-mwc-menu'))||[]).forEach(y=>{y&&(y.dataset.ddcPrevDisplayAction===void 0&&(y.dataset.ddcPrevDisplayAction=y.style.display||"",y.dataset.ddcPrevVisAction=y.style.visibility||""),e?(y.style.display=y.dataset.ddcPrevDisplayAction||"",y.style.visibility=y.dataset.ddcPrevVisAction||""):(y.style.display="none",y.style.visibility="hidden"))}),[...((c=this._deepQueryAll)==null?void 0:c.call(this,"ha-app-layout"))||[],...((s=this._deepQueryAll)==null?void 0:s.call(this,"home-assistant-main"))||[],document.documentElement,document.body].filter(Boolean).forEach(y=>{if(y)if(y.dataset.ddcPrevHdrVars===void 0&&(y.dataset.ddcPrevHdrVars=JSON.stringify({mdc:y.style.getPropertyValue("--mdc-top-app-bar-height")||"",app:y.style.getPropertyValue("--app-header-height")||"",hdr:y.style.getPropertyValue("--header-height")||"",hah:y.style.getPropertyValue("--ha-header-height")||"",pad:y.style&&(y.style.paddingTop||"")||""})),e)try{let x=JSON.parse(y.dataset.ddcPrevHdrVars||"{}");y.style.setProperty("--mdc-top-app-bar-height",x.mdc||""),y.style.setProperty("--app-header-height",x.app||""),y.style.setProperty("--header-height",x.hdr||""),y.style.setProperty("--ha-header-height",x.hah||""),x.pad!==void 0&&(y.style.paddingTop=x.pad||"")}catch{}else{y.style.setProperty("--mdc-top-app-bar-height","0px"),y.style.setProperty("--app-header-height","0px"),y.style.setProperty("--header-height","0px"),y.style.setProperty("--ha-header-height","0px");try{y.style.paddingTop="0px"}catch{}}}),(((l=this._deepQueryAll)==null?void 0:l.call(this,"#contentContainer"))||[]).forEach(y=>{y&&(y.dataset.ddcPrevContentPadTop===void 0&&(y.dataset.ddcPrevContentPadTop=y.style&&(y.style.paddingTop||"")||""),y.style.paddingTop=e?y.dataset.ddcPrevContentPadTop||"":"0px")})}catch{}}_setSidebarVisible_(e=!0){var n,o;try{(((n=this._deepQueryAll)==null?void 0:n.call(this,"ha-sidebar"))||[]).forEach(l=>{l&&(l.dataset.ddcPrevDisplaySidebar===void 0&&(l.dataset.ddcPrevDisplaySidebar=l.style.display||""),l.style.display=e?l.dataset.ddcPrevDisplaySidebar||"":"none")}),(((o=this._deepQueryAll)==null?void 0:o.call(this,"ha-drawer"))||[]).forEach(l=>{if(l){l.dataset.ddcPrevDrawerWidth===void 0&&(l.dataset.ddcPrevDrawerWidth=l.style.getPropertyValue("--mdc-drawer-width")||""),e?l.style.setProperty("--mdc-drawer-width",l.dataset.ddcPrevDrawerWidth||""):l.style.setProperty("--mdc-drawer-width","0px");try{!e&&typeof l.close=="function"&&l.close()}catch{}}})}catch{}}_applyHaChromeVisibility_(){var e;try{let n=!!this.editMode||((e=this._isInHaEditorPreview)==null?void 0:e.call(this));n||!this.hideHaHeader?this._setHeaderVisible_(!0):this._setHeaderVisible_(!1),n||!this.hideHaSidebar?this._setSidebarVisible_(!0):this._setSidebarVisible_(!1)}catch{}}_applyBackgroundImageFromConfig(){var c;try{let s=navigator.userAgent||"";if(/iPad|iPhone|iPod/.test(s)&&n&&typeof n.src=="string"&&n.src.startsWith("data:")&&n.src.length>3e5){console.warn("[drag-and-drop-card] Skipping large inline background on iOS for stability.");return}}catch{}let e=this._config||{},n=e.background_image||e.bg_image||null,o=this.cardContainer;if(o)if(n&&n.src){let s=String(n.src).trim(),l=n.repeat===!0||n.repeat==="repeat"?"repeat":"no-repeat",u=Math.max(0,Math.min(1,Number((c=n.opacity)!=null?c:1))),f=n.size||"cover",m=n.position||"center center",v=n.attachment||"scroll",y=n.filter||"none";o.style.setProperty("--ddc-bg-image",s?`url("${s.replace(/"/g,'"')}")`:"none"),o.style.setProperty("--ddc-bg-repeat",l),o.style.setProperty("--ddc-bg-opacity",String(u)),o.style.setProperty("--ddc-bg-size",f),o.style.setProperty("--ddc-bg-position",m),o.style.setProperty("--ddc-bg-attachment",v),o.style.setProperty("--ddc-bg-filter",y),o.classList.add("has-bg-image")}else o.style.removeProperty("--ddc-bg-image"),o.style.removeProperty("--ddc-bg-repeat"),o.style.removeProperty("--ddc-bg-opacity"),o.style.removeProperty("--ddc-bg-size"),o.style.removeProperty("--ddc-bg-position"),o.style.removeProperty("--ddc-bg-attachment"),o.style.removeProperty("--ddc-bg-filter"),o.classList.remove("has-bg-image")}_applyBackgroundFromConfig(){var e,n,o,c,s,l,u,f;try{let m=((e=this._config)==null?void 0:e.background_mode)||((o=(n=this._config)==null?void 0:n.background_image)!=null&&o.src?"image":"none");if((c=this._destroyParticles_)==null||c.call(this),(s=this._destroyYouTube_)==null||s.call(this),m!=="image"){let v=this.cardContainer;v&&(v.style.removeProperty("--ddc-bg-image"),v.style.removeProperty("--ddc-bg-repeat"),v.style.removeProperty("--ddc-bg-opacity"),v.style.removeProperty("--ddc-bg-size"),v.style.removeProperty("--ddc-bg-position"),v.style.removeProperty("--ddc-bg-attachment"),v.style.removeProperty("--ddc-bg-filter"),v.classList.remove("has-bg-image"))}if(m==="image"){(l=this._applyBackgroundImageFromConfig)==null||l.call(this);return}if(m==="particles"){let v=((u=this._config)==null?void 0:u.background_particles)||{};this._attachParticlesBackground_(v);return}if(m==="youtube"){let v=((f=this._config)==null?void 0:f.background_youtube)||{};this._attachYouTubeBackground_(v);return}}catch(m){console.warn("[drag-and-drop-card] _applyBackgroundFromConfig failed:",m)}}_ensureBgHost_(){let e=this.cardContainer;if(!e)return null;let n=e.querySelector("#ddcBgHost");return n?n.innerHTML="":(n=document.createElement("div"),n.className="ddc-bg-host",n.id="ddcBgHost",n.setAttribute("aria-hidden","true"),e.prepend(n)),n}async _loadScriptOnce_(e){if(!e)throw new Error("script src required");if(this.__scriptCache||(this.__scriptCache=new Map),this.__scriptCache.has(e))return this.__scriptCache.get(e);let n=new Promise((o,c)=>{let s=document.createElement("script");s.src=e,s.async=!0,s.onload=()=>o(!0),s.onerror=()=>c(new Error("failed to load "+e)),document.head.appendChild(s)});return this.__scriptCache.set(e,n),n}_getRenderRoot_(){return this.renderRoot||this.shadowRoot||this}_withScopedDocument_(e){let n=this._getRenderRoot_();if(!n||n===document||!n.querySelector)return e();let o=document,c=o.getElementById.bind(o),s=o.querySelector?o.querySelector.bind(o):null;o.getElementById=l=>{try{let u=window.CSS&&CSS.escape?CSS.escape(String(l)):String(l);return n.querySelector("#"+u)||c(l)}catch{return c(l)}},s&&(o.querySelector=l=>{try{return n.querySelector(l)||s(l)}catch{return s(l)}});try{return e()}finally{o.getElementById=c,s&&(o.querySelector=s)}}async _ensureParticles_(){if(window.particlesJS)return!0;if(!this.__particlesLoadPromise){let e=n=>new Promise((o,c)=>{let s=document.createElement("script");s.src=n,s.async=!0,s.onload=()=>o(!0),s.onerror=()=>c(new Error("Failed to load "+n)),document.head.appendChild(s)});this.__particlesLoadPromise=e("/local/particles.min.js").catch(()=>e("https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js")).then(()=>!!window.particlesJS).catch(()=>!1)}return this.__particlesLoadPromise}_attachParticlesBackground_(e={}){var f,m;let n=(f=this._ensureBgHost_)==null?void 0:f.call(this);if(!n)return;try{(m=this._destroyParticles_)==null||m.call(this)}catch{}n.innerHTML="";let o=document.createElement("div");o.id="ddcParticles",o.className="particles-js",o.style.position="absolute",o.style.inset="0",n.appendChild(o);let c={particles:{number:{value:70,density:{enable:!0,value_area:900}},color:{value:"#ffffff"},shape:{type:"circle"},opacity:{value:.4},size:{value:3,random:!0},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.3,width:1},move:{enable:!0,speed:2,out_mode:"out"}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1},onclick:{enable:!1},resize:!0},modes:{repulse:{distance:100},push:{particles_nb:4}}},retina_detect:!0},s=!!e.pointer_events,l=e.config||JSON.parse(JSON.stringify(c));s?(l.interactivity.events.onhover={enable:!0,mode:"repulse"},l.interactivity.events.onclick={enable:!0,mode:"push"},n.style.pointerEvents="auto"):n.style.pointerEvents="none",(async()=>{var x;if(!await((x=this._ensureParticles_)==null?void 0:x.call(this))||!window.particlesJS)return;await(typeof requestAnimationFrame=="function"?new Promise(O=>requestAnimationFrame(()=>O())):Promise.resolve()),await(typeof requestAnimationFrame=="function"?new Promise(O=>requestAnimationFrame(()=>O())):Promise.resolve());let y=l;if(e.config_url)try{y=await(await fetch(e.config_url,{cache:"no-store"})).json()}catch(O){console.warn("[drag-and-drop-card] Failed to fetch particles config; falling back to defaults",O),y=l}this._withScopedDocument_(()=>{if(!Array.isArray(window.pJSDom))try{window.pJSDom=[]}catch{}window.particlesJS("ddcParticles",y)}),Array.isArray(window.pJSDom)&&window.pJSDom.length&&(this.__particlesInst=window.pJSDom[window.pJSDom.length-1])})(),this.__particlesHost=n}_destroyParticles_(){try{Array.isArray(window.pJSDom)||(window.pJSDom=[]),window.pJSDom.length&&(window.pJSDom.forEach(e=>{var n,o,c,s,l,u,f,m;try{(s=(c=(o=(n=e.pJS)==null?void 0:n.fn)==null?void 0:o.vendors)==null?void 0:c.destroy)==null||s.call(c)}catch{}try{(m=(f=(u=(l=e.pJS)==null?void 0:l.fn)==null?void 0:u.vendors)==null?void 0:f.destroypJS)==null||m.call(f)}catch{}}),window.pJSDom.length=0)}catch{}this.__particlesHost&&(this.__particlesHost.innerHTML=""),this.__particlesHost=null,this.__particlesInst=null}_parseYouTubeId_(e){if(!e)return null;let n=String(e).trim(),o=n.match(/(?:youtube\.com\/.*[?&]v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([A-Za-z0-9_-]{11})/)||n.match(/^([A-Za-z0-9_-]{11})$/);return o?o[1]:null}async _ensureYouTube_(){var e;return(e=window.YT)!=null&&e.Player?!0:(this.__ytReadyPromise||(this.__ytReadyPromise=new Promise(n=>{var s;let o=()=>n(!0);if((s=window.YT)!=null&&s.Player)return o();window.onYouTubeIframeAPIReady=o;let c=document.createElement("script");c.src="https://www.youtube.com/iframe_api",c.async=!0,c.onerror=()=>n(!1),document.head.appendChild(c)})),this.__ytReadyPromise)}_attachYouTubeIframeDirect_(e,n,{start:o,end:c,mute:s=!0,loop:l=!0}={}){var v;let u=new URLSearchParams({autoplay:"1",mute:s?"1":"0",controls:"0",playsinline:"1",rel:"0",modestbranding:"1",iv_load_policy:"3",loop:l?"1":"0"});l&&u.set("playlist",n),Number.isFinite(o)&&u.set("start",String(o)),Number.isFinite(c)&&u.set("end",String(c));let f=`https://www.youtube.com/embed/${n}?${u.toString()}`,m=document.createElement("iframe");m.src=f,m.setAttribute("frameborder","0"),m.setAttribute("allow","autoplay; encrypted-media; picture-in-picture; fullscreen"),m.setAttribute("allowfullscreen","true"),m.style.position="absolute",m.style.inset="0",m.style.width="100%",m.style.height="100%",e.appendChild(m),this.__ytWrap=e,(v=this._layoutYtBackground_)==null||v.call(this)}_attachYouTubeBackground_(e={}){this.__ytSize=e.size||"cover",this.__ytPosition=e.position||"center",this.__ytOpacity=e.opacity!=null?Math.max(0,Math.min(1,Number(e.opacity))):1,this.__ytAttachment=e.attachment||"scroll";let n=String(this.__ytPosition).toLowerCase(),o=.5,c=.5;n.includes("left")?o=0:n.includes("right")&&(o=1),n.includes("top")?c=0:n.includes("bottom")&&(c=1),(n==="center"||n==="centre"||n==="middle")&&(o=.5,c=.5),this.__ytAx=o,this.__ytAy=c;let s=this._ensureBgHost_();if(!s)return;let l=this._parseYouTubeId_(e.video_id||e.url);if(!l){console.warn("[drag-and-drop-card] No YouTube video id");return}let u=document.createElement("div");u.className="yt-bg",this.__ytAttachment==="fixed"?(u.style.position="fixed",u.style.left="0",u.style.top="0",u.style.width="100%",u.style.height="100%"):(u.style.position="absolute",u.style.inset="0"),u.style.opacity=String(this.__ytOpacity),u.style.filter="none",u.style.pointerEvents="none",s.appendChild(u);let f=document.createElement("div");f.id="ddcYtFrame",f.style.position="absolute",f.style.left="0",f.style.top="0",f.style.width="100%",f.style.height="100%",u.appendChild(f);let m=Number.isFinite(e.start)?Number(e.start):void 0,v=Number.isFinite(e.end)?Number(e.end):void 0,y=e.mute!==!1,x=e.loop!==!1;(async()=>{if(!await this._ensureYouTube_()||!(window.YT&&window.YT.Player)){if(this._attachYouTubeIframeDirect_(u,l,{start:m,end:v,mute:y,loop:x}),!this.__ytResizeObs){this.__ytResizeObs=new ResizeObserver(()=>{var A;return(A=this._layoutYtBackground_)==null?void 0:A.call(this)});try{this.__ytResizeObs.observe(this.cardContainer)}catch{}window.addEventListener("resize",this.__ytOnWinResize=()=>{var A;return(A=this._layoutYtBackground_)==null?void 0:A.call(this)})}return}if(this.__ytPlayer=new window.YT.Player(f,{width:"100%",height:"100%",videoId:l,playerVars:{autoplay:1,controls:0,disablekb:1,fs:0,iv_load_policy:3,modestbranding:1,rel:0,playsinline:1,loop:x?1:0,playlist:x?l:void 0,start:m,end:v},events:{onReady:A=>{var L;try{y&&A.target.mute(),A.target.playVideo()}catch{}(L=this._layoutYtBackground_)==null||L.call(this)},onStateChange:A=>{if(A.data===window.YT.PlayerState.ENDED&&x)try{let L=Number.isFinite(m)?m:0,C=window.performance&&performance.now?performance.now():Date.now();(!this.__ytLastLoopAt||C-this.__ytLastLoopAt>1500)&&(this.__ytLastLoopAt=C,A.target.seekTo(L,!0),A.target.playVideo())}catch{}}}}),!this.__ytResizeObs){this.__ytResizeObs=new ResizeObserver(()=>{var A;return(A=this._layoutYtBackground_)==null?void 0:A.call(this)});try{this.__ytResizeObs.observe(this.cardContainer)}catch{}window.addEventListener("resize",this.__ytOnWinResize=()=>{var A;return(A=this._layoutYtBackground_)==null?void 0:A.call(this)})}})(),this.__ytWrap=u}_layoutYtBackground_(){var e,n,o,c,s,l,u,f;try{if(!this.__ytWrap)return;let m=this.__scaleOuter||this.cardContainer,v=0,y=0;try{v=parseFloat((n=(e=this.cardContainer)==null?void 0:e.style)==null?void 0:n.width)||((o=this.cardContainer)==null?void 0:o.scrollWidth)||((c=this.cardContainer)==null?void 0:c.offsetWidth)||0,y=parseFloat((l=(s=this.cardContainer)==null?void 0:s.style)==null?void 0:l.height)||((u=this.cardContainer)==null?void 0:u.scrollHeight)||((f=this.cardContainer)==null?void 0:f.offsetHeight)||0}catch{}let x,O;try{if(String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"){let G=m.getBoundingClientRect();if(x=G.width,v>0){let ee=Math.min(x/v,1);O=y*ee}else O=G.height}else x=v||m.getBoundingClientRect().width,O=y||m.getBoundingClientRect().height}catch{let H=m.getBoundingClientRect();x=H.width,O=H.height}let S=this.__ytAttachment==="fixed",A=S&&window.innerWidth||x,L=S&&window.innerHeight||O;if(!x||!O)return;let C=this.__ytSize||"cover",T=16/9,M=S?A/L:x/O,_,P,D=0,K=0;C==="100% 100%"||C==="fill"||C==="stretch"?(_=S?A:x,P=S?L:O,D=0,K=0):C==="contain"?M>T?(P=S?L:O,_=(S?L:O)*T,K=0,D=(x-_)/2):(_=S?A:x,P=(S?A:x)/T,D=0,K=(O-P)/2):M>T?(_=S?A:x,P=(S?A:x)/T,D=0,K=(O-P)/2):(P=S?L:O,_=(S?L:O)*T,K=0,D=(x-_)/2),this.__ytWrap.style.overflow="hidden";let J=this.__ytAx!=null?this.__ytAx:.5,U=this.__ytAy!=null?this.__ytAy:.5;D=((S?A:x)-_)*J,K=((S?L:O)-P)*U;let ae=this.__ytWrap.querySelector("iframe")||this.__ytWrap;ae.style.width=`${_}px`,ae.style.height=`${P}px`,ae.style.left=`${D}px`,ae.style.top=`${K}px`}catch{}}_destroyYouTube_(){var e,n,o;try{(n=(e=this.__ytPlayer)==null?void 0:e.destroy)==null||n.call(e)}catch{}if(this.__ytPlayer=null,this.__ytResizeObs){try{this.__ytResizeObs.disconnect()}catch{}this.__ytResizeObs=null}this.__ytOnWinResize&&(window.removeEventListener("resize",this.__ytOnWinResize),this.__ytOnWinResize=null),(o=this.__ytWrap)!=null&&o.parentNode&&this.__ytWrap.parentNode.removeChild(this.__ytWrap),this.__ytWrap=null}_evaluateVisibility_(e){try{let n=this.hass||this._hass;if(!Array.isArray(e)||e.length===0)return!0;let o=c=>{var l,u,f,m,v;if(!c||typeof c!="object")return!0;let s=c.condition||c.type||"state";if(s==="and"||s==="or"){let y=Array.isArray(c.conditions)?c.conditions:[];return y.length===0?!0:s==="and"?y.every(x=>o(x)):y.some(x=>o(x))}if(s==="state"){let y=c.entity;if(!y)return!0;let x=(l=n==null?void 0:n.states)==null?void 0:l[y];if(!x)return!1;let O=String((u=x.state)!=null?u:"");return c.state!==void 0?(Array.isArray(c.state)?c.state:[c.state]).some(A=>String(A)===O):c.state_not!==void 0?!(Array.isArray(c.state_not)?c.state_not:[c.state_not]).some(A=>String(A)===O):!0}if(s==="numeric_state"){let y=c.entity;if(!y)return!0;let x=(f=n==null?void 0:n.states)==null?void 0:f[y];if(!x)return!1;let O=parseFloat(x.state);return!(isNaN(O)||c.above!==void 0&&!(O>Number(c.above))||c.below!==void 0&&!(O<Number(c.below)))}if(s==="screen"){let y=c.media_query||c.query;if(!y||typeof y!="string")return!0;try{return window.matchMedia(y).matches}catch{return!0}}if(s==="user"){let y=Array.isArray(c.users)?c.users:c.user?[c.user]:[];if(!y.length)return!0;let x=((m=n==null?void 0:n.user)==null?void 0:m.id)||((v=n==null?void 0:n.user)==null?void 0:v.id)||null;return x?y.includes(x):!0}return!0};return e.every(c=>o(c))}catch(n){return console.warn("[ddc:visibility] evaluate error",n),!0}}_applyVisibility_(){var e;try{let n=((e=this.cardContainer)==null?void 0:e.children)||[],o=this._normalizeTabId(this.activeTab);for(let c of n){if(!c||!c.firstElementChild||this._normalizeTabId(c.dataset.tabId)!==o)continue;let u=(this._extractCardConfig(c.firstElementChild)||{}).visibility,f=this.editMode?!0:this._evaluateVisibility_(u);c.style.display=f?"":"none"}}catch(n){console.warn("[ddc:visibility] apply error",n)}}async _onKeyDown_(e){var l,u,f,m,v,y,x,O,S,A;if(!this.editMode||this._isTypingTarget_(e.target))return;let n=Number(this.gridSize||10),o=e.altKey?1:e.shiftKey?n*5:n,c=0,s=0;switch(e.key){case"ArrowLeft":c=-o;break;case"ArrowRight":c=o;break;case"ArrowUp":s=-o;break;case"ArrowDown":s=o;break}if(c||s){e.preventDefault(),this._moveSelectionBy_(c,s,{liveSnap:!e.altKey});return}if(e.key==="Delete"||e.key==="Backspace"){let L=this._selection&&this._selection.size?Array.from(this._selection):[];if(!L.length)return;e.preventDefault(),L.forEach(C=>C.remove()),(l=this._clearSelection)==null||l.call(this),(u=this._resizeContainer)==null||u.call(this),(f=this._queueSave)==null||f.call(this,"delete-key"),(m=this._ensurePlaceholderIfEmpty)==null||m.call(this);return}if((e.ctrlKey||e.metaKey)&&(e.key==="d"||e.key==="D")){e.preventDefault(),await this._duplicateSelection_();return}if((e.ctrlKey||e.metaKey)&&e.key==="]"){e.preventDefault(),this._selection&&((y=(v=this._selection).forEach)==null||y.call(v,L=>{var C;return(C=this._adjustZ)==null?void 0:C.call(this,L,1)})),(x=this._queueSave)==null||x.call(this,"z-up");return}if((e.ctrlKey||e.metaKey)&&e.key==="["){e.preventDefault(),this._selection&&((S=(O=this._selection).forEach)==null||S.call(O,L=>{var C;return(C=this._adjustZ)==null?void 0:C.call(this,L,-1)})),(A=this._queueSave)==null||A.call(this,"z-down");return}}async _duplicateSelection_(){var n,o,c,s,l,u,f,m,v,y,x,O;if(!this._selection||!this._selection.size)return;let e=Array.from(this._selection);for(let S of e)try{let A=((n=this._extractCardConfig)==null?void 0:n.call(this,S.firstElementChild))||{},L=await((o=this._createCard)==null?void 0:o.call(this,A)),C=(c=this._makeWrapper)==null?void 0:c.call(this,L);if(!L||!C)continue;C.style.width=S.style.width,C.style.height=S.style.height;let T=Number(this.gridSize||10),M=(parseFloat(S.getAttribute("data-x"))||0)+T,_=(parseFloat(S.getAttribute("data-y"))||0)+T;(s=this._setCardPosition)==null||s.call(this,C,M,_),C.style.zIndex=String((((l=this._highestZ)==null?void 0:l.call(this))||0)+1);try{let P=(u=S.dataset)==null?void 0:u.tabId;P&&(C.dataset.tabId=P)}catch{}(f=this.cardContainer)==null||f.appendChild(C);try{(m=this._addTabSelectorToChip)==null||m.call(this,C,C.dataset.tabId)}catch{}try{(v=this._rebuildOnce)==null||v.call(this,C.firstElementChild)}catch{}try{(y=this._initCardInteract)==null||y.call(this,C)}catch{}}catch{}try{(x=this._resizeContainer)==null||x.call(this)}catch{}try{(O=this._queueSave)==null||O.call(this,"duplicate")}catch{}}_moveSelectionBy_(e,n,{liveSnap:o=!0}={}){var m,v,y,x,O;if(!this._selection||!this._selection.size)return;let c=Array.from(this._selection),s=Number(this.gridSize||10),l=(m=this._isContainerFixed)==null?void 0:m.call(this),u=((v=this._getContainerSize)==null?void 0:v.call(this))||{w:1/0,h:1/0},f=c.map(S=>{let A=parseFloat(S.getAttribute("data-x-raw"))||parseFloat(S.getAttribute("data-x"))||0,L=parseFloat(S.getAttribute("data-y-raw"))||parseFloat(S.getAttribute("data-y"))||0,C=parseFloat(S.style.width)||S.getBoundingClientRect().width,T=parseFloat(S.style.height)||S.getBoundingClientRect().height,M=A+e,_=L+n;l&&(M=Math.max(0,Math.min(M,Math.max(0,u.w-C))),_=Math.max(0,Math.min(_,Math.max(0,u.h-T))));let P=o?Math.round(M/s)*s:M,D=o?Math.round(_/s)*s:_;return{el:S,rawX:M,rawY:_,snapX:P,snapY:D,w:C,h:T}});if(this.disableOverlap&&typeof this._pushCardsOutOfTheWay=="function")try{this._pushCardsOutOfTheWay(f,e,n,o,s)}catch{}for(let S of f){S.el.setAttribute("data-x-raw",String(S.rawX)),S.el.setAttribute("data-y-raw",String(S.rawY));try{(y=this._setCardPosition)==null||y.call(this,S.el,S.snapX,S.snapY)}catch{}}try{(x=this._resizeContainer)==null||x.call(this)}catch{}try{(O=this._queueSave)==null||O.call(this,"nudge")}catch{}}_syncTabsWidth_(){try{if(String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto")return;let n=this.tabsBar;if(!n)return;if(this.tabsPosition==="left"){n.style.width="",n.style.maxWidth="";return}let o=this.cardContainer||this.__scaleOuter;if(!o)return;let c=0;try{let s=o.getBoundingClientRect();c=s&&s.width?s.width:0}catch{}if(c<=0&&this.__scaleOuter&&this.__scaleOuter!==o)try{let s=this.__scaleOuter.getBoundingClientRect();c=s&&s.width?s.width:0}catch{}c>0&&(n.style.width=`${c}px`,n.style.maxWidth=`${c}px`)}catch{}}_isTypingTarget_(e){var c,s,l,u;if(!e||e===window||e===document)return!1;let n=(c=e.closest)==null?void 0:c.call(e,'input, textarea, [contenteditable="true"], ha-textfield, mwc-textfield');if(!n)return!1;let o=((l=(s=n.tagName)==null?void 0:s.toLowerCase)==null?void 0:l.call(s))||"";return o==="input"||o==="textarea"||((u=n.hasAttribute)==null?void 0:u.call(n,"contenteditable"))}_scheduleReflowAndScale(){this.__reflowRAF||(this.__reflowRAF=requestAnimationFrame(()=>{var e,n,o;this.__reflowRAF=null;try{(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="dynamic"&&((e=this._resizeContainer)==null||e.call(this))}catch{}try{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(n=this._applyAutoFillNoScale)==null||n.call(this):(o=this._applyAutoScale)==null||o.call(this)}catch{}}))}__ddcBindPointerListeners(){if(!this.__ddcPtrBound){this.__ddcPtrBound=!0,this.__onDDCPointerDown=e=>{var n,o;try{if(e.button!==void 0&&e.button!==0)return;let c=((n=e.composedPath)==null?void 0:n.call(e))||[],s=null;for(let l of c)if(l&&l.classList&&l.classList.contains("card-wrapper")){s=l;break}if(!s)return;this.__ddcDragging=!0,this.__scaleOuter&&(this.__prevOverflow=this.__scaleOuter.style.overflow,this.__scaleOuter.style.overflow="visible"),(o=this._scheduleReflowAndScale)==null||o.call(this)}catch{}},this.__onDDCPointerMove=e=>{var n;try{if(!this.__ddcDragging)return;(n=this._scheduleReflowAndScale)==null||n.call(this)}catch{}},this.__onDDCPointerUp=e=>{var n,o;try{if(!this.__ddcDragging)return;this.__ddcDragging=!1,this.__scaleOuter&&(this.__scaleOuter.style.overflow=this.__prevOverflow||"");try{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(n=this._applyAutoFillNoScale)==null||n.call(this):(o=this._applyAutoScale)==null||o.call(this)}catch{}}catch{}};try{this.addEventListener("pointerdown",this.__onDDCPointerDown,{passive:!0})}catch{}try{this.addEventListener("pointermove",this.__onDDCPointerMove,{passive:!0})}catch{}try{window.addEventListener("pointerup",this.__onDDCPointerUp,{passive:!0})}catch{}try{window.addEventListener("pointercancel",this.__onDDCPointerUp,{passive:!0})}catch{}}}_renderEditToolbar_(){this.shadowRoot.querySelectorAll(".ddc-toolbar").forEach(y=>y.remove()),this._ensureToolbarStyles_();let e=document.createElement("div");e.className="ddc-toolbar";let n=document.createElement("div");n.className="ddc-t-group",n.append(this._mkBtn_("add_card","mdi:plus-box","Add card (A)","primary"),this._mkBtn_("snap_toggle","mdi:magnet","Toggle snap (G)"),this._mkBtn_("align_grid","mdi:grid","Align to grid"));let o=document.createElement("div");o.className="ddc-t-group";let c=document.createElement("div");c.className="ddc-t-status";let s=document.createElement("div");s.className="ddc-t-dot"+(this.__dirty?" dirty":"");let l=document.createElement("span");l.textContent=this.__dirty?"Unsaved changes":`Saved${this.__lastSavedAt?" \xB7 "+this.__lastSavedAt:""}`,c.append(s,l),o.appendChild(c);let u=document.createElement("div");u.className="ddc-t-group",u.append(this._mkBtn_("reload","mdi:refresh","Reload (R)","ghost"),this._mkBtn_("open_hads","mdi:alpha-h-box-outline","Open HACS/HADS","ghost"),this._mkBtn_("apply","mdi:content-save","Apply / Save (S)","primary"),this._mkBtn_("exit_edit","mdi:logout-variant","Exit edit (Esc)","danger"));let f=document.createElement("div");f.className="ddc-t-group ddc-t-row",f.append(n);let m=document.createElement("div");m.className="ddc-t-group ddc-t-row",m.append(o);let v=document.createElement("div");v.className="ddc-t-group ddc-t-row",v.append(u),e.append(f,document.createElement("div")).lastChild.className="ddc-t-sep",e.append(m,document.createElement("div")).lastChild.className="ddc-t-sep",e.append(v),e.addEventListener("click",y=>{let x=y.target.closest("[data-action]");x&&this._onToolbarAction_(x.dataset.action,{button:x,bar:e,dot:s,txt:l})}),this.shadowRoot.appendChild(e);try{this.__toolbarRO&&this.__toolbarRO.disconnect(),this.__toolbarRO=new ResizeObserver(y=>{for(let x of y)e.classList.toggle("compact",x.contentRect.width<980)}),this.__toolbarRO.observe(e)}catch{}this.__toolbarKeyHandler=y=>{if(!(!this.editMode&&!this.isEditing)){if(y.key==="a"||y.key==="A")return this._onToolbarAction_("add_card");if(y.key==="s"||y.key==="S")return this._onToolbarAction_("apply");if(y.key==="r"||y.key==="R")return this._onToolbarAction_("reload");if(y.key==="g"||y.key==="G")return this._onToolbarAction_("snap_toggle");if(y.key==="Escape")return this._onToolbarAction_("exit_edit")}},window.addEventListener("keydown",this.__toolbarKeyHandler)}async _onToolbarAction_(e,n={}){var o,c,s,l,u,f,m,v,y,x,O;switch(e){case"add_card":(o=this._openAddCardDialog_)!=null&&o.call(this)||(c=this._addNewCard_)!=null&&c.call(this)||((s=this._openEntityPicker_)==null||s.call(this));break;case"snap_toggle":{this.dragLiveSnap=!this.dragLiveSnap,(l=this._initInteract)==null||l.call(this),(u=this._toast_)==null||u.call(this,`Live snap ${this.dragLiveSnap?"ON":"OFF"}`);break}case"align_grid":(f=this._alignAllToGrid_)==null||f.call(this,this.gridSize);break;case"reload":(m=this._reloadLayout_)==null||m.call(this);break;case"open_hads":(v=this._openHACS_)!=null&&v.call(this)||window.open("/hacs","_blank")||window.open("/hacsfiles","_blank");break;case"apply":{let S=()=>{this._setDirty_(!1),n!=null&&n.txt&&(n.txt.textContent=`Saved \xB7 ${this.__lastSavedAt}`),n!=null&&n.dot&&n.dot.classList.remove("dirty","error")},A=()=>{n!=null&&n.dot&&n.dot.classList.add("error")};try{this._saveLayoutNow_?await this._saveLayoutNow_():this._persistThisCardConfigToStorage_?await this._persistThisCardConfigToStorage_():(y=this._queueSave)==null||y.call(this,"toolbar-apply",!0),this.__lastSavedAt=new Date().toLocaleTimeString(),S()}catch(L){console.warn(L),A()}break}case"exit_edit":if((x=this._toggleEditMode)!=null&&x.call(this,!1)||(O=this._exitEditMode_)!=null&&O.call(this)||(this.isEditing=!1),this.__toolbarKeyHandler&&(window.removeEventListener("keydown",this.__toolbarKeyHandler),this.__toolbarKeyHandler=null),this.__toolbarRO){try{this.__toolbarRO.disconnect()}catch{}this.__toolbarRO=null}this.shadowRoot.querySelectorAll(".ddc-toolbar").forEach(S=>S.remove());break}}_ensureScaleWrapper(){let e=this.cardContainer;if(!e||this.__scaleOuter&&this.__scaleOuter.contains(e))return;let n=document.createElement("div");n.className="ddc-scale-outer",Object.assign(n.style,{position:"relative",width:"100%",overflow:"hidden"}),e.parentNode&&(e.parentNode.insertBefore(n,e),n.appendChild(e)),Object.assign(e.style,{position:"absolute",top:"0",left:"0",transformOrigin:"top left"}),this.__scaleOuter=n}_hasCardModDeep(e){try{if(!e||typeof e!="object")return!1;if(e.card_mod||e.type==="custom:mod-card")return!0;if(e.card)return this._hasCardModDeep(e.card);if(Array.isArray(e.cards)){for(let n of e.cards)if(this._hasCardModDeep(n))return!0}return!1}catch{return!1}}_rebuildOnce(e){try{if(!e||(this.__rebuiltCards||(this.__rebuiltCards=new WeakSet),this.__rebuiltCards.has(e)))return;this.__rebuiltCards.add(e),e.dispatchEvent(new Event("ll-rebuild",{bubbles:!0,composed:!0}))}catch{}}_deepQueryAll(e,n=document){let o=[],c=s=>{if(!s)return;if(s.querySelectorAll)try{s.querySelectorAll(e).forEach(f=>o.push(f))}catch{}let l=document.createTreeWalker(s,NodeFilter.SHOW_ELEMENT,null),u=s;for(;u;){let f=u.shadowRoot;f&&c(f),u=l.nextNode()}};return c(n),o}_syncEditorsStorageKey(){try{let e=this.storageKey||"";this._deepQueryAll("#storage_key").forEach(o=>{try{o&&o.tagName==="INPUT"&&o.value!==e&&(o.value=e,o.dispatchEvent(new Event("input",{bubbles:!0})),o.dispatchEvent(new Event("change",{bubbles:!0})))}catch{}})}catch{}}static _genKey(){var n,o;return`layout_${((o=(n=globalThis.crypto)==null?void 0:n.randomUUID)==null?void 0:o.call(n))||`${Date.now().toString(36)}_${Math.random().toString(36).slice(2,8)}`}`}static getStubConfig(){return{type:"custom:drag-and-drop-card",storage_key:this._genKey(),grid:10,drag_live_snap:!1,auto_save:!0,auto_save_debounce:800,container_size_mode:"dynamic",hero_image:"https://i.postimg.cc/CxsWQgwp/Chat-GPT-Image-Sep-5-2025-09-26-16-AM.png"}}static getConfigElement(){let e=document.createElement("div");e.innerHTML=`
    <style>
      :host, .ddc-editor { font-family: var(--paper-font-body1_-_font-family, Roboto, system-ui, sans-serif); color: var(--primary-text-color); }

      .ddc-editor { display: grid; grid-template-columns: 220px 1fr; gap: 10px 16px; align-items: center; box-sizing: border-box; padding: 8px 4px; }
      .section { grid-column: 1 / -1; margin: 10px 0 2px; font-weight: 600; opacity: 0.9; }
      .row-spacer { grid-column: 1 / -1; height: 2px; background: var(--divider-color); opacity: .2; border-radius: 2px; }

      .label { align-self: flex-start; padding-top: 6px; font-weight: 600; opacity: .9; }
      .helper { grid-column: 2 / 3; font-size: .85rem; opacity: .7; margin-top: -6px; }

      .inline { display: inline-flex; align-items: center; gap: 8px; }
      .two-col { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; }

      .actions { grid-column: 1 / -1; display: flex; gap: 8px; justify-content: flex-end; margin-top: 8px; }
      .actions ha-button[disabled] { opacity: .6; }

      /* Subtle pulse for enabled Apply button */
      @keyframes ddcPulse {
        0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0,0,0,0); }
        50% { transform: scale(1.035); box-shadow: 0 0 12px 2px rgba(255,255,255,.22); }
      }
      #applyBtn:not([disabled]) { animation: ddcPulse 1.8s ease-in-out infinite; }

      /* Make HA inputs fill width nicely */
      ha-textfield, ha-select { width: 100%; }

      /* Checkbox rows: keep left column reserved so alignment stays consistent */
      .left-empty { visibility: hidden; }

</style>

     <div class="ddc-editor">
      <div class="section">Layout & Behavior</div>

      <div class="label">Storage key</div>
      <ha-textfield id="storage_key" label="Storage key" placeholder="my_unique_layout_key"></ha-textfield>
      <div class="helper">Unique key for saving layout positions. Auto-generated if empty.</div>

      <div class="label">Grid size</div>
      <ha-textfield id="grid" label="Grid (px)" type="number" min="4" max="32" step="1" value="10"></ha-textfield>
      <div class="helper">Pixel size of each grid cell. Affects snap and default card size.</div>

      <div class="label">Snap while dragging</div>
      <ha-formfield label="Snap to grid during drag (live)">
        <ha-checkbox id="liveSnap"></ha-checkbox>
      </ha-formfield>
      <div class="helper">If on, elements snap to grid while dragging. If off, snap occurs on drop.</div>

      <div class="label">Auto-save</div>
      <div class="two-col">
        <ha-formfield label="Auto-save changes">
          <ha-checkbox id="autoSave"></ha-checkbox>
        </ha-formfield>
        <ha-textfield id="autoSaveDebounce" label="Debounce (ms)" type="number" min="0" step="50" value="800"></ha-textfield>
      </div>
      <div class="helper">When enabled, layout changes are saved automatically after a short delay.</div>

      <div class="row-spacer"></div>
      <div class="section">Appearance</div>

      <div class="label">Container background</div>
      <ha-textfield id="containerBg" label="CSS color/gradient" placeholder="transparent, #232f3e, linear-gradient(...)" helper=""></ha-textfield>
      <div class="helper">Examples: <code>transparent</code>, <code>#232f3e</code>, <code>linear-gradient(...)</code>.</div>

      <div class="label">Card background</div>
      <ha-textfield id="cardBg" label="CSS color/gradient" placeholder="var(--ha-card-background) or #ffffffcc"></ha-textfield>
      <div class="helper">Background for each card in the layout; can use theme vars.</div>

      <div class="label">Debug logs</div>
      <ha-formfield label="Enable console debug">
        <ha-checkbox id="debug"></ha-checkbox>
      </ha-formfield>

      <div class="label">Disable overlap</div>
      <ha-formfield label="Prevent cards from overlapping">
        <ha-checkbox id="noOverlap"></ha-checkbox>
      </ha-formfield>

      <div class="label">Auto-resize cards</div>
      <ha-formfield label="Scale layout to fit parent (view mode)">
        <ha-checkbox id="autoResize"></ha-checkbox>
      </ha-formfield>

      <div class="label">Animate cards</div>
      <ha-formfield label="Animate cards on tab switch">
        <ha-checkbox id="animateCards"></ha-checkbox>
      </ha-formfield>
      <div class="helper">If enabled, cards will fly in when switching tabs or on refresh.</div>


      <div class="row-spacer"></div>
      <div class="section">Container Size</div>

      <div class="label">Mode</div>
      <ha-select id="sizeMode" label="Container size mode">
        <mwc-list-item value="dynamic">Dynamic (auto)</mwc-list-item>
        <mwc-list-item value="fixed_custom">Fixed (custom)</mwc-list-item>
        <mwc-list-item value="preset">Preset</mwc-list-item>
      </ha-select>

      <div class="label">Fixed size</div>
      <div class="inline" id="sizeCustom" style="display:none">
        <ha-textfield id="sizeW" type="number" label="W" min="100" step="10"></ha-textfield>
        <ha-textfield id="sizeH" type="number" label="H" min="100" step="10"></ha-textfield>
      </div>

      <div class="label">Preset</div>
      <div class="inline" id="sizePresetWrap" style="display:none">
        <ha-select id="sizePreset" label="Preset"></ha-select>
        <ha-select id="sizeOrientation" label="Orientation">
          <mwc-list-item value="auto">Auto</mwc-list-item>
          <mwc-list-item value="landscape">Landscape</mwc-list-item>
          <mwc-list-item value="portrait">Portrait</mwc-list-item>
        </ha-select>
      </div>

      <div class="actions">
        <ha-button id="revertBtn">Revert</ha-button>
        <ha-button id="applyBtn" raised disabled>Apply</ha-button>
      </div>
    </div>
  `;let n=()=>{let m=u();s.disabled=!m},o=()=>{let m=e.getConfig();e.dispatchEvent(new CustomEvent("config-changed",{detail:{config:m}})),n()},c=()=>{var v,y,x,O;let m=(O=(x=(v=e.querySelector("#sizeMode"))==null?void 0:v.value)!=null?x:(y=e.querySelector("#ddc-setting-sizeMode"))==null?void 0:y.value)!=null?O:"dynamic";e.querySelector("#sizeCustom").style.display=m==="fixed_custom"?"inline-flex":"none",e.querySelector("#sizePresetWrap").style.display=m==="preset"?"inline-flex":"none"},s=e.querySelector("#applyBtn"),l=e.querySelector("#revertBtn");["#sizeMode","#sizePreset","#sizeOrientation"].forEach(m=>{let v=e.querySelector(m);if(v){try{v.fixedMenuPosition=!0}catch{}v.addEventListener("closed",y=>y.stopPropagation())}}),e.setConfig=(m={})=>{var x,O,S,A,L,C,T,M;e._config={type:m.type||"custom:drag-and-drop-card",...m},e._config.storage_key||(e._config.storage_key=`layout_${((x=crypto==null?void 0:crypto.randomUUID)==null?void 0:x.call(crypto))||Date.now().toString(36)}`,e.__autokeyPending=!0),e.querySelector("#storage_key").value=e._config.storage_key||"",e.querySelector("#grid").value=(O=e._config.grid)!=null?O:10,e.querySelector("#liveSnap").checked=!!e._config.drag_live_snap,e.querySelector("#autoSave").checked=e._config.auto_save!==!1,e.querySelector("#autoSaveDebounce").value=(S=e._config.auto_save_debounce)!=null?S:800,e.querySelector("#containerBg").value=(A=e._config.container_background)!=null?A:"transparent",e.querySelector("#cardBg").value=(L=e._config.card_background)!=null?L:"var(--ha-card-background, var(--card-background-color))",e.querySelector("#debug").checked=!!e._config.debug,e.querySelector("#noOverlap").checked=!!e._config.disable_overlap,e.querySelector("#autoResize").checked=!!e._config.auto_resize_cards,e.querySelector("#animateCards").checked=!!e._config.animate_cards;let v=e.querySelector("#sizeMode")||e.querySelector("#ddc-setting-sizeMode");v&&(v.value=e._config.container_size_mode||"dynamic"),e.querySelector("#sizeW").value=(C=e._config.container_fixed_width)!=null?C:"",e.querySelector("#sizeH").value=(T=e._config.container_fixed_height)!=null?T:"",e.querySelector("#sizeOrientation").value=e._config.container_preset_orientation||"auto";let y=e.querySelector("#sizePreset");if(!y.__filled){let _=(((M=this._sizePresets)==null?void 0:M.call(this))||[]).reduce((P,D)=>{var K;return(P[K=D.group||"other"]||(P[K]=[])).push(D),P},{});y.innerHTML="";for(let[P,D]of Object.entries(_)){let K=document.createElement("optgroup");K.label=P.replace(/(^.|-.?)/g,U=>U.toUpperCase()),D.forEach(U=>{let ae=document.createElement("mwc-list-item");ae.value=U.key,ae.textContent=`${U.label} (${U.w}\xD7${U.h})`,K.appendChild(ae)});let J=document.createElement("mwc-list-item");J.setAttribute("disabled",""),J.textContent=`\u2014 ${K.label} \u2014`,y.appendChild(J),Array.from(K.children).forEach(U=>y.appendChild(U))}y.__filled=!0}e._config.container_preset&&(y.value=e._config.container_preset),c(),n(),e.__autokeyPending&&(e.__autokeyPending=!1,o())},e.getConfig=()=>{var v,y,x,O;let m={...e._config||{}};return m.storage_key=e.querySelector("#storage_key").value||"",m.grid=Number(e.querySelector("#grid").value||10),m.drag_live_snap=!!e.querySelector("#liveSnap").checked,m.auto_save=!!e.querySelector("#autoSave").checked,m.auto_save_debounce=Number(e.querySelector("#autoSaveDebounce").value||800),m.container_background=e.querySelector("#containerBg").value||"transparent",m.card_background=e.querySelector("#cardBg").value||"var(--ha-card-background, var(--card-background-color))",m.debug=!!e.querySelector("#debug").checked,m.disable_overlap=!!e.querySelector("#noOverlap").checked,m.auto_resize_cards=!!e.querySelector("#autoResize").checked,m.animate_cards=!!e.querySelector("#animateCards").checked,m.container_size_mode=(O=(x=(v=e.querySelector("#sizeMode"))==null?void 0:v.value)!=null?x:(y=e.querySelector("#ddc-setting-sizeMode"))==null?void 0:y.value)!=null?O:"dynamic",m.container_fixed_width=Number(e.querySelector("#sizeW").value||0)||void 0,m.container_fixed_height=Number(e.querySelector("#sizeH").value||0)||void 0,m.container_preset=e.querySelector("#sizePreset").value||void 0,m.container_preset_orientation=e.querySelector("#sizeOrientation").value||"auto",m};let u=()=>{let m=e.getConfig(),v=e._config||{};try{return JSON.stringify(m)!==JSON.stringify(v)}catch{return!0}},f=(m,v="input")=>{var y;return(y=e.querySelector(m))==null?void 0:y.addEventListener(v,()=>{m==="#sizeMode"&&c(),n()})};return f("#storage_key"),f("#grid"),f("#liveSnap","change"),f("#autoSave","change"),f("#autoSaveDebounce"),f("#containerBg"),f("#cardBg"),f("#debug","change"),f("#noOverlap","change"),f("#autoResize","change"),f("#animateCards","change"),f("#sizeMode","change"),f("#ddc-setting-sizeMode","change"),f("#sizeW"),f("#sizeH"),f("#sizePreset","selected"),f("#sizeOrientation","selected"),s==null||s.addEventListener("click",()=>{o()}),l==null||l.addEventListener("click",()=>e.setConfig(e._config)),e}static _sizePresets(){return[{key:"iphone-14-pro",label:"iPhone 14 Pro",w:393,h:852,group:"phone"},{key:"iphone-14-pro-max",label:"iPhone 14 Pro Max",w:430,h:932,group:"phone"},{key:"iphone-se-2",label:"iPhone SE (2/3rd gen)",w:375,h:667,group:"phone"},{key:"pixel-7",label:"Pixel 7",w:412,h:915,group:"phone"},{key:"galaxy-s8",label:"Galaxy S8",w:360,h:740,group:"phone"},{key:"galaxy-s20-ultra",label:"Galaxy S20 Ultra",w:412,h:915,group:"phone"},{key:"ipad-9-7",label:'iPad 9.7"',w:768,h:1024,group:"tablet"},{key:"ipad-11-pro",label:'iPad Pro 11"',w:834,h:1194,group:"tablet"},{key:"ipad-12-9-pro",label:'iPad Pro 12.9"',w:1024,h:1366,group:"tablet"},{key:"surface-go-3",label:"Surface Go 3",w:800,h:1280,group:"tablet"},{key:"hd",label:"HD",w:1366,h:768,group:"desktop"},{key:"wxga-plus",label:"WXGA+",w:1440,h:900,group:"desktop"},{key:"fhd",label:"Full HD",w:1920,h:1080,group:"desktop"},{key:"qhd",label:"2K / QHD",w:2560,h:1440,group:"desktop"},{key:"uhd-4k",label:"4K UHD",w:3840,h:2160,group:"desktop"}]}_isContainerFixed(){return this.containerSizeMode==="fixed_custom"||this.containerSizeMode==="preset"||this.containerSizeMode==="fixed"}_resolveFixedSize(){if(this.containerSizeMode==="fixed_custom"){let e=Math.max(100,Number(this.containerFixedWidth||0)),n=Math.max(100,Number(this.containerFixedHeight||0));return{w:e,h:n}}if(this.containerSizeMode==="preset"){let e=t._sizePresets().find(c=>c.key===this.containerPreset)||t._sizePresets().find(c=>c.key==="fhd");if(!e)return{w:1920,h:1080};let n=e.w,o=e.h;return this.containerPresetOrient==="portrait"&&n>o&&([n,o]=[o,n]),this.containerPresetOrient==="landscape"&&o>n&&([n,o]=[o,n]),{w:n,h:o}}return null}_applyContainerSizingFromConfig(e=!1){var o,c;let n=this.cardContainer;if(n)if(this._isContainerFixed()){let{w:s,h:l}=this._resolveFixedSize();n.style.width=`${s}px`,n.style.height=`${l}px`,n.style.overflow="hidden",e||(o=this._dbgPush)==null||o.call(this,"size","Applied fixed size",{w:s,h:l,mode:this.containerSizeMode,preset:this.containerPreset,orient:this.containerPresetOrient}),this._clampAllCardsInside()}else n.style.overflow="hidden",e||(c=this._dbgPush)==null||c.call(this,"size","Applied dynamic size"),this._resizeContainer()}_getContainerSize(){let e=this.cardContainer;if(!e)return{w:0,h:0};let n=parseFloat(getComputedStyle(e).width)||e.getBoundingClientRect().width,o=parseFloat(getComputedStyle(e).height)||e.getBoundingClientRect().height;return{w:n,h:o}}_clampAllCardsInside(){if(!this._isContainerFixed())return;let{w:e,h:n}=this._getContainerSize();this.cardContainer.querySelectorAll(".card-wrapper").forEach(c=>{let s=parseFloat(c.getAttribute("data-x"))||0,l=parseFloat(c.getAttribute("data-y"))||0,u=parseFloat(c.style.width)||c.getBoundingClientRect().width,f=parseFloat(c.style.height)||c.getBoundingClientRect().height,m=Math.max(0,Math.min(s,Math.max(0,e-u))),v=Math.max(0,Math.min(l,Math.max(0,n-f))),y=Math.min(u,e),x=Math.min(f,n);(y!==u||x!==f)&&(c.style.width=`${y}px`,c.style.height=`${x}px`);let O=Math.max(0,Math.min(m,Math.max(0,e-y))),S=Math.max(0,Math.min(v,Math.max(0,n-x)));this._setCardPosition(c,O,S)})}_computeHaSidebarGutters_(){var o;let e=56;try{let c=document.querySelector("home-assistant"),s=c==null?void 0:c.shadowRoot,l=s==null?void 0:s.querySelector("ha-drawer, app-drawer, ha-sidebar, .drawer, .menu"),u=(o=l==null?void 0:l.getBoundingClientRect)==null?void 0:o.call(l);Math.max(document.documentElement.clientWidth||0,window.innerWidth||0)<=870?e=0:u!=null&&u.width&&(e=Math.max(0,Math.min(256,Math.round(u.width))))}catch{}let n=0;try{this.style.setProperty("--ddc-left-gutter",`${e}px`),this.style.setProperty("--ddc-right-gutter",`${n}px`)}catch{}}_applyGridVars(){var n;let e=`${this.gridSize||10}px`;this.style.setProperty("--ddc-grid-size",e),(n=this.cardContainer)==null||n.style.setProperty("--ddc-grid-size",e)}_dbgInit(){if(!this.__dbgReady){this.__dbgReady=!0,this._dbgBuffer=[],this._dbgMax=400;try{window.DDC=this}catch{}}}_dbgPush(e,n,o=null){let c={t:new Date().toISOString(),kind:e,msg:n,extra:o};this._dbgBuffer.push(c),this._dbgBuffer.length>this._dbgMax&&this._dbgBuffer.shift(),this.debug&&console.debug(`%c[ddc:${e}]%c ${n}`,"color:#03a9f4","color:unset",o!=null?o:"")}_dbgDump(){return[...this._dbgBuffer]}_safe(e){return String(e).replace(/[&<>"']/g,n=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[n])}setConfig(e={}){var s,l,u,f,m,v,y,x,O,S,A,L,C,T,M,_,P,D,K,J,U,ae,H,G,ee,ue,We;let n=this.storageKey;this.config={...e},(!this.config.storage_key||this.config.storage_key==="")&&(this.config.storage_key=this.constructor._genKey()),this.storageKey=this.config.storage_key,e.storage_key||(this.storageKey?e={...e,storage_key:this.storageKey}:(this.storageKey=`layout_${((s=crypto==null?void 0:crypto.randomUUID)==null?void 0:s.call(crypto))||Date.now().toString(36)}`,e={...e,storage_key:this.storageKey})),this._config=e,this.storageKey=e.storage_key,this._syncEditorsStorageKey(),this.storageKey=e.storage_key||void 0,this._syncEditorsStorageKey(),this.gridSize=Number((l=e.grid)!=null?l:10),this.dragLiveSnap=!!e.drag_live_snap,this.autoSave=e.auto_save!==!1,this.autoSaveDebounce=Number((u=e.auto_save_debounce)!=null?u:800),this.editModePin=this.editModePin!=null?this.editModePin:(m=(f=e.edit_mode_pin)!=null?f:e.editModePin)!=null?m:"",this.containerBackground=(v=e.container_background)!=null?v:"transparent",this.cardBackground=(y=e.card_background)!=null?y:"var(--ha-card-background, var(--card-background-color))",this.hideHaHeader=!!((O=(x=e.hide_HA_Header)!=null?x:e.hide_ha_header)!=null&&O),this.hideHaSidebar=!!((A=(S=e.hide_HA_Sidebar)!=null?S:e.hide_ha_sidebar)!=null&&A),this.debug=!!e.debug,this.editMode=!1,this._backendOK=!1,this.disableOverlap=!!e.disable_overlap,this.containerSizeMode=e.container_size_mode||"dynamic",this.autoResizeCards=!!e.auto_resize_cards,this.animateCards=!!e.animate_cards,this.screenSaverEnabled=!!((L=e.screen_saver_enabled)!=null&&L);let o=Number(e.screen_saver_delay);this.screenSaverDelay=Number.isFinite(o)&&o>0?o:5*6e4,this.autoResizeCards||String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(C=this._startScaleWatch)==null||C.call(this):(T=this._stopScaleWatch)==null||T.call(this),(M=this._applyAutoScale)==null||M.call(this),this.containerFixedWidth=Number((_=e.container_fixed_width)!=null?_:0)||null,this.containerFixedHeight=Number((P=e.container_fixed_height)!=null?P:0)||null,this.containerPreset=e.container_preset||"fullhd",this.containerPresetOrient=e.container_preset_orientation||"auto",this.heroImage=(e==null?void 0:e.hero_image)||"https://i.postimg.cc/CxsWQgwp/Chat-GPT-Image-Sep-5-2025-09-26-16-AM.png",this.tabs=Array.isArray(e.tabs)?e.tabs:[],this.tabsPosition=e.tabs_position==="left"?"left":"top",this.defaultTab=e.default_tab||((K=(D=this.tabs[0])==null?void 0:D.id)!=null?K:"default"),this.hideTabsWhenSingle=e.hide_tabs_when_single!==!1,this.activeTab=this.defaultTab;try{let fe=localStorage.getItem(`ddc_lasttab_${this.storageKey}`);fe&&this.tabs.some(Oe=>Oe.id===fe)&&(this.activeTab=fe)}catch{}this.rootEl&&this.rootEl.classList.toggle("ddc-tabs-left-layout",this.tabsPosition==="left"),this.cardContainer&&this._applyContainerSizingFromConfig(!1);let c=n!==this.storageKey;if(this.editMode&&!this.__booting&&!c)try{this._isInHaEditorPreview()||this._queueSave("config-change")}catch{}this._applyGridVars();try{(J=this._applyBackgroundImageFromConfig)==null||J.call(this)}catch{}try{(U=this._applyHaChromeVisibility_)==null||U.call(this)}catch{}this._ensureOverlayZFix();try{(ae=this._updateScreensaverSettings)==null||ae.call(this)}catch{}if(this._selection=new Set,this.__groupDrag=null,this.__editorCache=new Map,this.__stubCache=new Map,this._dbgInit(),this._dbgPush("init","Card configured",{storageKey_raw:e.storage_key,storageKey_slug:this.storageKey,autoSave:this.autoSave,grid:this.gridSize}),this.style.setProperty("--ddc-bg",this.containerBackground),this.style.setProperty("--ddc-card-bg",this.cardBackground),!window.jsyaml){let fe=document.createElement("script");fe.src="https://cdnjs.cloudflare.com/ajax/libs/js-yaml/4.1.0/js-yaml.min.js",document.head.appendChild(fe)}if(!window.interact){let fe=document.createElement("script");fe.src="https://cdn.jsdelivr.net/npm/interactjs/dist/interact.min.js",fe.onload=()=>this._initInteract(),document.head.appendChild(fe)}if(this._helpersPromise=typeof window.loadCardHelpers=="function"?window.loadCardHelpers().catch(()=>null):Promise.resolve(null),!this._built){this._built=!0,this.shadowRoot.innerHTML=`
        <style>


.ddc-root{
  position:relative;
  /* JS will keep this in sync with your \u201CGrid (px)\u201D */
  --ddc-grid-size: 10px;
  /* Good contrast on light/dark themes */
  --ddc-grid-color: color-mix(in srgb, var(--primary-text-color) 22%, transparent);

  /* Container we query for width */
  container-type: inline-size;
  container-name: ddc-root;
}

/* ===== DDC Toolbar and tabs when auto sieze is off ===== */

/* Center toolbar & tabs to viewport when auto-resize is OFF in dynamic mode */
/* === Centered, nav-aware UI when auto-resize is OFF in dynamic mode === */
:host([ddc-fixed-ui]) .ddc-toolbar,
:host([ddc-fixed-ui]) .ddc-tabs {
  position: fixed;
  /* Keep clear of HA's left navigation bar; computed in JS, fallback 56px desktop / 0 mobile */
  left: calc(var(--ddc-left-gutter, 56px) + 50%);
  transform: translateX(-50%);
  width: var(--ddc-ui-width, auto);
  max-width: calc(100vw - var(--ddc-left-gutter, 56px) - var(--ddc-right-gutter, 0px));
  box-sizing: border-box;
  z-index: 1002; /* above canvas, below dialogs */
  pointer-events: auto;
}

/* Vertical placement */
:host([ddc-fixed-ui]) .ddc-toolbar { top: 0; }
:host([ddc-fixed-ui]) .ddc-tabs { top: var(--ddc-toolbar-height, 0px); }

/* Make tabs horizontally scrollable when narrow */
:host([ddc-fixed-ui]) .ddc-tabs {
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  white-space: nowrap;
  scrollbar-width: thin;
}

/* Keep inner list no-wrap; match your existing inner wrapper class if different */
:host([ddc-fixed-ui]) .ddc-tabs .scroll-wrap,
:host([ddc-fixed-ui]) .ddc-tabs .tabs-inner {
  display: inline-flex;
  white-space: nowrap;
}

/* Mobile: sticky works better inside HA's scroll containers */
@media (max-width: 768px) {
  :host([ddc-fixed-ui]) .ddc-tabs {
    position: sticky;
    left: auto;
    transform: none;
    width: 100%;
    max-width: 100vw;
    margin-left: 0;
  }
}
/* ===== DDC Toolbar and tabs when auto sieze is off END ===== */


/* ===== DDC Toolbar \u2014 Minimal Redesign (pills with accent tint) ===== */


/* scope to either version */
.ddc-toolbar.streamlined.v2,
.ddc-toolbar.streamlined.v3{
  --ddc-bg: color-mix(in oklab, var(--card-background-color, #0d0f12) 88%, transparent);
  --ddc-border: color-mix(in oklab, #fff 14%, transparent);
  --ddc-soft: color-mix(in oklab, #fff 7%, transparent);
  --ddc-shadow: 0 10px 30px rgba(0,0,0,.25), 0 2px 8px rgba(0,0,0,.22);

  /* section accent colors */
  --sec-primary: #3b82f6;
  --sec-clip:    #a855f7;
  --sec-share:   #4fb6ff;
  --sec-utils:   #10b981;
  --sec-status:  #ef4444;

  --btn-h: 36px;
  --btn-r: 12px;
  --btn-gap: 8px;

  /* animation vars */
  --ddc-ease: cubic-bezier(.2,.7,.2,1);
  --ddc-dur: 260ms;
  --open-h: 0px; /* JS sets this to scrollHeight */

  position: sticky; top: 0; z-index: 3;
  background: var(--ddc-bg);
  border-bottom: 1px solid var(--ddc-border);
  backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
  box-shadow: var(--ddc-shadow);
  padding: 12px 14px 10px;

  /* never exceed the root\u2019s width */
  max-width: 100%;

  /* GRID (kept ready) */
  display: none;
  grid-template-columns: repeat(4, minmax(0,1fr)) auto; /* Status at the end */
  grid-template-areas:
    "primary clip share utils status"
    "layouts layouts layouts layouts status";
  column-gap: 18px;
  row-gap: 10px;
  align-items: start;

  /* Visibility is animated \u2014 NOT display */
  opacity: 0;
  transform: translateY(-6px);
  max-height: 0;              /* collapse when closed */
  overflow: hidden;             /* avoid scrollbars during anim */
  pointer-events: none;       /* inert when closed */
  visibility: hidden;         /* keep out of a11y focus when closed */

  transition:
    opacity var(--ddc-dur) var(--ddc-ease),
    transform var(--ddc-dur) var(--ddc-ease),
    max-height var(--ddc-dur) var(--ddc-ease),
    visibility 0s linear var(--ddc-dur); /* becomes hidden after fade-out */

  /* make this element respond to its own width, too */
  container-type: inline-size;
  container-name: ddc;
}

/* OPEN state (set by JS) */
.ddc-toolbar.streamlined.v2.is-open,
.ddc-toolbar.streamlined.v3.is-open{
  opacity: 1;
  transform: translateY(0);
  max-height: var(--open-h);  /* expand to measured height */
  pointer-events: auto;
  visibility: visible;
  transition:
    opacity var(--ddc-dur) var(--ddc-ease),
    transform var(--ddc-dur) var(--ddc-ease),
    max-height var(--ddc-dur) var(--ddc-ease),
    visibility 0s; /* visible immediately */
}

/* Always hide when closed, no matter what other rules say */
.ddc-toolbar.streamlined.v2:not(.is-open):not([data-force-open="1"]),
.ddc-toolbar.streamlined.v3:not(.is-open):not([data-force-open="1"]) {
  display: none !important;
}

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce){
  .ddc-toolbar.streamlined.v2,
  .ddc-toolbar.streamlined.v3{
    transition: none;
  }
}

/* map areas (HTML unchanged) */
.ddc-toolbar.streamlined.v2 .sec-primary{ grid-area: primary; }
.ddc-toolbar.streamlined.v2 .sec-clip   { grid-area: clip; }
.ddc-toolbar.streamlined.v2 .sec-share  { grid-area: share; }
.ddc-toolbar.streamlined.v2 .sec-utils  { grid-area: utils; }
.ddc-toolbar.streamlined.v2 .sec-status { grid-area: status; }
.ddc-toolbar.streamlined.v2 .sec-layouts{ grid-area: layouts; }
.ddc-toolbar.streamlined.v2 .ddc-spacer,
.ddc-toolbar.streamlined.v2 .ddc-vsep{ display:none; }

/* === ONE-PILL PER SECTION: header + buttons inside === */
.ddc-toolbar.streamlined.v2 .ddc-sec,
.ddc-toolbar.streamlined.v3 .ddc-sec{
  --pill-accent: #6b7280;            /* default; overridden per-section below */

  display: flex; flex-direction: column; gap: 10px; min-width: 0;
  padding: 12px 14px;
  border-radius: 16px;

  /* accent-tinted background & border */
  background:
    linear-gradient(180deg,
      color-mix(in oklab, var(--pill-accent) 12%, transparent),
      transparent),
    color-mix(in oklab, var(--primary-background-color, #0e1116) 22%, transparent);
  border: 1px solid color-mix(in oklab, var(--pill-accent) 26%, transparent);
  box-shadow: inset 0 1px 2px rgba(255,255,255,.04);
}

/* per-section tint */
.ddc-toolbar.streamlined.v2 .sec-primary{ --pill-accent: var(--sec-primary); }
.ddc-toolbar.streamlined.v2 .sec-clip   { --pill-accent: var(--sec-clip); }
.ddc-toolbar.streamlined.v2 .sec-share  { --pill-accent: var(--sec-share); }
.ddc-toolbar.streamlined.v2 .sec-utils  { --pill-accent: var(--sec-utils); }
.ddc-toolbar.streamlined.v2 .sec-status { --pill-accent: var(--sec-status); }
.ddc-toolbar.streamlined.v2 .sec-layouts{ --pill-accent: var(--sec-clip); } /* layouts gets a gentle purple tint */

/* header inside the pill */
.ddc-toolbar.streamlined.v2 .ddc-sec-head{
  background: transparent; border: 0; padding: 0; border-radius: 0;
  color: var(--accent, #9aa0a6);
  display: inline-flex; align-items: center; gap: 10px;
  font-weight: 700; font-size: .92rem; letter-spacing: .2px;
}
.ddc-toolbar.streamlined.v2 .sec-primary .ddc-sec-head{ --accent: var(--sec-primary); color: var(--sec-primary); }
.ddc-toolbar.streamlined.v2 .sec-clip    .ddc-sec-head{ --accent: var(--sec-clip);    color: var(--sec-clip); }
.ddc-toolbar.streamlined.v2 .sec-share   .ddc-sec-head{ --accent: var(--sec-share);   color: var(--sec-share); }
.ddc-toolbar.streamlined.v2 .sec-utils   .ddc-sec-head{ --accent: var(--sec-utils);   color: var(--sec-utils); }
.ddc-toolbar.streamlined.v2 .sec-status  .ddc-sec-head{ --accent: var(--sec-status);  color: var(--sec-status); }
.ddc-toolbar.streamlined.v2 .sec-layouts .ddc-sec-head{ --accent: var(--sec-clip);    color: var(--sec-clip); }

.ddc-toolbar.streamlined.v2 .ddc-sec-dot{
  width: 8px; height: 8px; border-radius: 50%; background: currentColor; opacity: .95;
}

/* row of actions inside the pill */
.ddc-toolbar.streamlined.v2 .ddc-row{ display: flex; flex-wrap: wrap; align-items: center; gap: var(--btn-gap); margin: 0; }

/* buttons (reset native look + style) */
.ddc-toolbar.streamlined.v2 .btn{
  appearance:none; -webkit-appearance:none;
  display:inline-flex; align-items:center; gap:8px;
  height:var(--btn-h); padding:8px 12px; border-radius:var(--btn-r);
  background: color-mix(in oklab, var(--primary-background-color, #0e1116) 14%, transparent);
  border:1px solid var(--ddc-border);
  color: var(--primary-text-color, #e5e7eb);
  cursor:pointer; font:inherit; white-space:nowrap;
  transition: transform .08s, background .16s, border-color .16s, box-shadow .16s;
  flex: 1 1 220px;           /* equal-ish width buttons and wrap nicely */
  min-width: 160px;
}
.ddc-toolbar.streamlined.v2 .btn ha-icon{ --mdc-icon-size:18px; width:18px; height:18px; display:inline-block; }
.ddc-toolbar.streamlined.v2 .btn:hover{ transform: translateY(-1px); background: color-mix(in oklab, var(--primary-background-color) 22%, transparent); }
.ddc-toolbar.streamlined.v2 .btn:active{ transform: translateY(0); }
.ddc-toolbar.streamlined.v2 .btn:focus-visible{ outline:none; box-shadow:0 0 0 2px color-mix(in oklab, #fff 15%, transparent); }
.ddc-toolbar.streamlined.v2 .btn.secondary{ background:transparent; }
.ddc-toolbar.streamlined.v2 .btn.info{
  background: color-mix(in oklab, var(--sec-share) 92%, transparent); color:#0b2537;
  border-color: color-mix(in oklab, var(--sec-share) 55%, transparent);
}
.ddc-toolbar.streamlined.v2 .btn.danger{
  background: color-mix(in oklab, #ff5d5d 92%, transparent); color:#2b0b0b;
  border-color: color-mix(in oklab, #ff5d5d 55%, transparent);
}

/* >>> Make "Add Card" extra prominent */
.ddc-toolbar.streamlined.v2 .btn.cta-add{
  --glow: color-mix(in oklab, var(--sec-primary) 65%, #fff 0%);
  height: 40px; padding: 10px 14px; border-radius: 14px;
  font-weight: 800; letter-spacing: .2px;
  background: linear-gradient(135deg, var(--sec-primary), color-mix(in oklab, var(--sec-primary) 60%, #fff 0%));
  color:#fff;
  border-color: color-mix(in oklab, var(--sec-primary) 55%, #000);
  box-shadow: 0 10px 24px rgba(59,130,246,.34), 0 0 0 2px color-mix(in oklab, var(--sec-primary) 22%, transparent) inset;
  flex-basis: 100%;  /* spans full row when wrapping */
}
.ddc-toolbar.streamlined.v2 .btn.cta-add::after{
  content:""; position:absolute; inset:-4px; border-radius:16px;
  border:2px solid color-mix(in oklab, var(--sec-primary) 45%, transparent);
  opacity:.6; pointer-events:none;
}

/* status: dot above text, HIGH-CONTRAST text */
.ddc-toolbar.streamlined.v2 .ddc-t-status{
  display:flex; flex-direction: column; align-items:center; justify-content:center;
  gap: 4px; text-align: center;
  min-width: 120px; height: auto; padding: 10px 12px; border-radius: 999px;
  background: color-mix(in oklab, var(--primary-background-color, #0b0d10) 28%, transparent);
  border: 1px solid color-mix(in oklab, #ffffff 28%, transparent);
  color: #f8fbff;  /* brighter default */
  font-size: .9rem; line-height: 1.25; font-weight: 700;
  text-shadow: 0 1px 1px rgba(0,0,0,.45);
}
.ddc-toolbar.streamlined.v2 .ddc-t-status .ddc-t-text{ color: #f8fbff; }
.ddc-toolbar.streamlined.v2 .ddc-t-dot{ width: 12px; height: 12px; border-radius:50%; background:#22c55e; }
.ddc-toolbar.streamlined.v2 .ddc-t-status.warn  .ddc-t-dot{ background:#f59e0b; }
.ddc-toolbar.streamlined.v2 .ddc-t-status.error .ddc-t-dot{ background:#ef4444; }
@keyframes ddc-pulse{ 0%,100%{ transform:scale(1)} 50%{ transform:scale(1.35)} }

/* store badge (optional) */
.ddc-toolbar.streamlined.v2 .store-badge{
  display:inline-flex; align-items:center; height:var(--btn-h);
  border:1px solid var(--ddc-border); border-radius:999px; padding:6px 10px; font-size:.85rem;
  background: color-mix(in oklab, #ffc107 22%, transparent); color:#1a1200;
  flex: 1 1 220px; min-width: 160px;
}

/* Layouts: inline switcher styling */
.ddc-toolbar.streamlined.v2 .sec-layouts .ddc-row.center{ display:flex; justify-content:center; gap:12px; flex-wrap: wrap; }
.ddc-toolbar.streamlined.v2 .sec-layouts .layout-host{ display:inline-flex; align-items:center; gap:10px; color:#cfd6de; }
.ddc-toolbar.streamlined.v2 .sec-layouts .ddc-switcher-inline{
  display:inline-flex; align-items:center; gap:10px; flex-wrap: wrap;
  padding:8px 10px; border-radius:12px;
  background: color-mix(in oklab, var(--primary-background-color, #0e1116) 14%, transparent);
  border: 1px solid color-mix(in oklab, #ffffff 14%, transparent);
}
.ddc-toolbar.streamlined.v2 .sec-layouts .ddc-switcher-inline .label{
  color:#cfd6de; font-size:.9rem; letter-spacing:.2px;
}
.ddc-toolbar.streamlined.v2 .sec-layouts .ddc-switcher-inline button,
.ddc-toolbar.streamlined.v2 .sec-layouts .ddc-switcher-inline .btn{
  appearance:none; -webkit-appearance:none;
  display:inline-flex; align-items:center; gap:8px;
  height:32px; padding:6px 10px; border-radius:10px;
  background: color-mix(in oklab, var(--primary-background-color, #0e1116) 10%, transparent);
  border:1px solid color-mix(in oklab, #ffffff 12%, transparent);
  color: var(--primary-text-color, #e5e7eb);
  cursor:pointer; font:inherit; white-space:nowrap;
  transition: transform .08s, background .16s, border-color .16s, box-shadow .16s;
}

/* JS shim to override default hidden state purely for measuring/animating */
.ddc-toolbar.streamlined.v2[data-force-open="1"],
.ddc-toolbar.streamlined.v3[data-force-open="1"]{
  display: grid !important;
}

/* ===== STACK WHEN ROOT IS NARROW (uses .ddc-root width) ===== */
@container ddc-root (max-width: 900px){
  .ddc-toolbar.streamlined.v2,
  .ddc-toolbar.streamlined.v3{
    position: static !important;     /* turn off sticky */
    top: auto !important;
    inset: auto !important;
    z-index: auto !important;

    max-width: 100%;                  /* never exceed .ddc-root */
    margin: 8px 0 12px 0;             /* breathing room above card */
    box-shadow: 0 4px 12px rgba(0,0,0,.18); /* lighter shadow on mobile */
  }
}



  .ddc-toolbar.streamlined.v2 > .ddc-sec,
  .ddc-toolbar.streamlined.v3 > .ddc-sec{
    display: block;
    width: 100%;
    margin: 0 0 12px 0;
    grid-area: auto !important;  /* neutralize named areas */
  }

  .ddc-toolbar.streamlined.v2 .ddc-row,
  .ddc-toolbar.streamlined.v3 .ddc-row{
    display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px; width: 100%;
  }

  .ddc-toolbar.streamlined.v2 .ddc-row > .btn,
  .ddc-toolbar.streamlined.v3 .ddc-row > .btn,
  .ddc-toolbar.streamlined.v2 .ddc-row > .store-badge,
  .ddc-toolbar.streamlined.v3 .ddc-row > .store-badge{
    flex: 1 1 calc(50% - 8px);
    min-width: 160px;
  }

  .ddc-toolbar.streamlined.v2 .ddc-row > .btn.cta-add,
  .ddc-toolbar.streamlined.v3 .ddc-row > .btn.cta-add{
    flex-basis: 100%;
  }

  .ddc-toolbar.streamlined.v2 .btn,
  .ddc-toolbar.streamlined.v3 .btn{ height: 44px; }
}

@container ddc-root (max-width: 560px){
  .ddc-toolbar.streamlined.v2,
  .ddc-toolbar.streamlined.v3{
    position: static !important;
    top: auto !important;
    inset: auto !important;
    z-index: auto !important;
    max-width: 100%;
  }
}

/* Fallback for environments without container queries */
@supports not (container-type: inline-size){
  @media (max-width: 900px){
    .ddc-toolbar.streamlined.v2,
    .ddc-toolbar.streamlined.v3{
      display: block;
      padding: 10px;
    }
    .ddc-toolbar.streamlined.v2 > .ddc-sec,
    .ddc-toolbar.streamlined.v3 > .ddc-sec{
      display: block; width: 100%; margin: 0 0 12px 0; grid-area: auto !important;
    }
    .ddc-toolbar.streamlined.v2 .ddc-row,
    .ddc-toolbar.streamlined.v3 .ddc-row{
      display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px; width: 100%;
    }
    .ddc-toolbar.streamlined.v2 .ddc-row > .btn,
    .ddc-toolbar.streamlined.v3 .ddc-row > .btn,
    .ddc-toolbar.streamlined.v2 .ddc-row > .store-badge,
    .ddc-toolbar.streamlined.v3 .ddc-row > .store-badge{
      flex: 1 1 calc(50% - 8px); min-width: 160px;
    }
    @media (max-width: 560px){
      .ddc-toolbar.streamlined.v2 .ddc-row > .btn,
      .ddc-toolbar.streamlined.v3 .ddc-row > .btn,
      .ddc-toolbar.streamlined.v2 .ddc-row > .store-badge,
      .ddc-toolbar.streamlined.v3 .ddc-row > .store-badge{
        flex: 1 1 100%;
      }
    }
  }
}

/* Optional: make sure all children use border-box inside the toolbar */
.ddc-toolbar.streamlined.v2 * ,
.ddc-toolbar.streamlined.v3 * { box-sizing: border-box; }

/* === SIMPLE RESPONSIVE STACKING FOR MOBILE (NO CONTAINER Q) === */
/* ===== FORCE STACK ON NARROW \u2014 driven by .ddc-root width ============ */
/* At <= 900px root width: stack pills; inside each pill use 2-up buttons */
@container ddc-root (max-width: 900px){
  .ddc-toolbar.streamlined.v2.is-open:has(.btn[style*="inline-block"]),
  .ddc-toolbar.streamlined.v3.is-open:has(.btn[style*="inline-block"]),
  .ddc-toolbar.streamlined.v2[data-force-open="1"]:has(.btn[style*="inline-block"]),
  .ddc-toolbar.streamlined.v3[data-force-open="1"]:has(.btn[style*="inline-block"]),
  .ddc-toolbar.streamlined.v2.is-open:has(.store-badge[style*="inline-block"]),
  .ddc-toolbar.streamlined.v3.is-open:has(.store-badge[style*="inline-block"]),
  .ddc-toolbar.streamlined.v2[data-force-open="1"]:has(.store-badge[style*="inline-block"]),
  .ddc-toolbar.streamlined.v3[data-force-open="1"]:has(.store-badge[style*="inline-block"]) {
    display: block !important; /* only when open/measuring */
  }
}


  .ddc-toolbar.streamlined.v2:has(.btn[style*="inline-block"]) > .ddc-sec,
  .ddc-toolbar.streamlined.v3:has(.btn[style*="inline-block"]) > .ddc-sec,
  .ddc-toolbar.streamlined.v2:has(.store-badge[style*="inline-block"]) > .ddc-sec,
  .ddc-toolbar.streamlined.v3:has(.store-badge[style*="inline-block"]) > .ddc-sec{
    display:block !important;
    width: 100% !important;
    max-width: 100% !important;
    margin: 0 0 12px 0;
    grid-area: auto !important; /* neutralize named areas */
  }

  /* equal buttons: hard 2-up */
  .ddc-toolbar.streamlined.v2 .ddc-row,
  .ddc-toolbar.streamlined.v3  .ddc-row{
    --btn-min: 0px;
    grid-template-columns: repeat(2, 1fr);
  }

  /* bigger touch targets */
  .ddc-toolbar.streamlined.v2 .btn,
  .ddc-toolbar.streamlined.v3  .btn{ height: 44px; }
}

/* At <= 560px root width: buttons full-width (1 per row) */
@container ddc-root (max-width: 560px){
  .ddc-toolbar.streamlined.v2 .ddc-row,
  .ddc-toolbar.streamlined.v3  .ddc-row{
    grid-template-columns: 1fr;
  }
}

/* ===== DDC Toolbar \u2014 END ===== */





      /* ------- Rest of your styles remain unchanged ------- */

      .card-container{
        position: relative;
        transform-origin: top left;
        padding: 10px;
        border: 1px solid var(--divider-color);
        background: var(--ddc-bg, transparent);
        width: auto; height: auto; border-radius: 12px; overflow: hidden;
        isolation: isolate; z-index: 0; -webkit-touch-callout: none;
        user-select: none;
      }
      .card-container::before{
        content:'';
        position:absolute; inset:0;
        background-image:
          linear-gradient(var(--ddc-grid-color, rgba(120,120,120,.25)) 1px, transparent 1px),
          linear-gradient(90deg, var(--ddc-grid-color, rgba(120,120,120,.25)) 1px, transparent 1px);
        background-size: var(--ddc-grid-size) var(--ddc-grid-size);
        background-origin: content-box;
        background-clip: content-box;
        pointer-events:none;
        opacity:0;
        transition: opacity .15s;
        z-index:1;
      }
      .card-container.grid-on::before{ opacity:.28; }

      .card-container::after{
        content:'';
        position:absolute; inset:0;
        pointer-events:none;
        z-index:0;
        opacity: var(--ddc-bg-opacity, 1);
        background-image: var(--ddc-bg-image, none);
        background-repeat: var(--ddc-bg-repeat, no-repeat);
        background-size: var(--ddc-bg-size, cover);
        background-position: var(--ddc-bg-position, center center);
        background-attachment: var(--ddc-bg-attachment, scroll);
        filter: var(--ddc-bg-filter, none);
      }

      /* Dynamic background host (particles.js / YouTube) */
      .card-container .ddc-bg-host{
        position: absolute;
        inset: 0;
        z-index: 0;               /* under grid (::before, z=1) and cards (z=2) */
        overflow: hidden;
        pointer-events: none;     /* don\u2019t block card drag/drop */
        opacity: var(--ddc-bg-opacity, 1);
      }

      .card-container .ddc-bg-host > *{
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
      }

      /* When an image background is active, we don\u2019t need the dynamic host */
      .card-container.has-bg-image .ddc-bg-host{ display: none; }

      .card-wrapper{
        position:absolute;
        left: 0; top: 0;
        box-sizing: border-box;
        border:2px solid transparent;
        background:var(--ddc-card-bg, var(--card-background-color));
        cursor:grab;
        overflow:auto;
        border-radius:14px;
        box-shadow:var(--ha-card-box-shadow,0 2px 12px rgba(0,0,0,.18));
        will-change:transform,width,height,box-shadow; touch-action:auto;
        z-index:2;
      }
      .card-wrapper.dragging{ cursor:grabbing; touch-action: none; }
      .card-wrapper.editing.selected{
        border-color:var(--primary-color,#03a9f4);
        box-shadow:0 0 0 2px var(--primary-color,#03a9f4)!important;
      }

      /* CARD WRAPPER FOR BSCKGORUND COLORS START */

      /* Make the inner card and its header fully transparent
        so the wrapper\u2019s gradient is the only background shown. */
      .card-wrapper > * {
        /* Critical: do NOT give the card a background via this variable.
          Some headers read --ha-card-background when header-color is unset. */
        --ha-card-background: transparent !important;

        /* Many cards also set a background on the host element; neutralize it. */
        background: transparent !important;
      }

      /* Ensure <ha-card> itself doesn't repaint a body background */
      .card-wrapper ha-card {
        background: transparent !important;
      }

      /* Make header strips transparent regardless of how they are implemented */
      .card-wrapper ::part(header),
      .card-wrapper ::part(card-header),
      .card-wrapper .card-header {
        background: transparent !important;
        box-shadow: none !important;
        border-bottom: none !important;
      }

      /* CARD WRAPPER FOR BSCKGORUND COLORS END */

      /* ---- empty-state of the card ---- */
      .btn.cta-empty{
        position:relative;
        padding:12px 16px;
        font-weight:600;
        border-radius:14px;
        display:inline-flex !important;
        align-items:center;
        gap:8px;
        box-shadow:0 6px 18px rgba(3,169,244,.25);
      }
      .btn.cta-empty::after{
        content:"";
        position:absolute; inset:-4px;
        border-radius:16px;
        border:2px solid rgba(3,169,244,.35);
        animation: ddc-cta-pulse 1.8s ease-out infinite;
        pointer-events:none;
      }
      @keyframes ddc-cta-pulse{
        0%   { opacity:.85; transform:scale(.98); }
        70%  { opacity:0;   transform:scale(1.12); }
        100% { opacity:0;   transform:scale(1.18); }
      }

      /* pleasant buttons: info (light blue) & warning (orange) */
      .btn.info:hover{ filter: brightness(1.06); transform: translateY(-1px); box-shadow:0 4px 14px rgba(0,0,0,.18) }
      .btn.info:active{ transform: translateY(0) }
      .btn.warning:hover{ filter: brightness(1.07); transform: translateY(-1px); box-shadow:0 4px 14px rgba(0,0,0,.18) }
      .btn.warning:active{ transform: translateY(0) }

      /* ---- chip ---- */
      .chip{
        position:absolute;
        bottom:48px; left:50%; transform:translateX(-50%);
        display:flex; gap:6px; flex-wrap:wrap;
        opacity:0; transition:opacity .15s;
        z-index:30; pointer-events: none;
      }
      .card-wrapper.editing .chip{ opacity:1; pointer-events: auto; }
      .chip .mini{
        display:flex; align-items:center; justify-content:center;
        width:32px; height:32px;
        background:linear-gradient(135deg, rgba(24,25,27,.7) 0%, rgba(40,41,43,.9) 100%);
        color:#fff; border:1px solid rgba(255,255,255,.18); border-radius:8px; cursor:pointer;
        box-shadow:0 2px 4px rgba(0,0,0,.25);
        transition:background .15s, transform .1s, box-shadow .15s;
      }
      .chip .mini span{ display:none; }
      .chip .mini:hover{
        transform:translateY(-1px);
        background:linear-gradient(135deg, rgba(24,25,27,.85) 0%, rgba(40,41,43,1) 100%);
        box-shadow:0 3px 8px rgba(0,0,0,.4);
      }
      .chip .mini ha-icon{ --mdc-icon-size:20px; width:20px; height:20px; }
      .chip .mini.danger{
        background:linear-gradient(135deg, rgba(236,72,72,.9) 0%, rgba(255,105,97,1) 100%);
        border-color:rgba(255,255,255,.22);
      }
      .chip .mini.danger:hover{
        background:linear-gradient(135deg, rgba(236,72,72,1) 0%, rgba(255,105,97,1) 100%);
      }
      .chip .mini.pill{ padding:0; }

      /* Edit highlight */
      .card-wrapper.editing{ border-color:var(--primary-color,#03a9f4); touch-action: none; overflow: hidden; }
      .card-wrapper.editing::after{
        content:""; position:absolute; inset:0; border:1px dashed var(--primary-color,#03a9f4);
        border-radius:12px; pointer-events:none; opacity:.35; z-index:5; box-sizing:border-box;
      }

      .shield{position:absolute; inset:0; z-index:10; background:transparent; pointer-events:none}
      .card-wrapper.editing .shield, .card-wrapper.dragging .shield{pointer-events:auto; cursor:grab}

      .resize-handle{
        display:none; position:absolute; bottom: 6px; right: 6px; width:40px; height:40px;
        background: #27BEF5 !important; color:#fff; border-top-left-radius:40px;
        cursor:se-resize; z-index:9999; box-shadow:0 3px 8px rgba(0,0,0,.28);
        display:flex; align-items:center; justify-content:center;
        transition:background .15s, transform .1s, box-shadow .15s;
        border-bottom-right-radius:5px;
      }
      .resize-handle:hover{ transform:scale(1.05); box-shadow:0 6px 16px rgba(0,0,0,.35); filter:brightness(1.05); }
      .card-wrapper.editing .resize-handle{ display:flex }
      .resize-handle ha-icon{ --mdc-icon-size:20px; width:20px; height:20px; pointer-events:none; color: #fff !important; }

      /* Delete handle */
      .delete-handle{
        display:none; position:absolute; top:0; left:0; width:40px; height:40px;
        background: linear-gradient(135deg, rgba(236,72,72,.98) 0%, rgba(255,85,85,1) 100%) !important;
        color: #fff !important;
        box-shadow:0 3px 8px rgba(0,0,0,.28); cursor:pointer; align-items:center; justify-content:center;
        transition:background .15s, transform .1s, box-shadow .15s;
        border-bottom-right-radius:10px;

      }
      .delete-handle:hover{ transform:scale(1.05); box-shadow:0 6px 16px rgba(0,0,0,.35); filter:brightness(1.05); }
      .card-wrapper.editing .delete-handle{ display:flex }
      .delete-handle ha-icon{ --mdc-icon-size:20px; width:20px; height:20px; pointer-events:none; color: #fff !important;}

      /* modal */
      .modal{ position:fixed; inset:0; background:rgba(0,0,0,.45); display:flex; align-items:center; justify-content:center; z-index:9000 }
      .dialog{
        width:min(1220px,96%); max-height:min(90vh, 900px); display:flex; flex-direction:column;
        background:var(--card-background-color); border-radius:20px; padding:0; border:1px solid var(--divider-color); overflow:visible;
      }
      .dlg-head{
        display:flex; align-items:center; gap:12px; padding:12px 16px; border-bottom:1px solid var(--divider-color);
        background:
          radial-gradient(1200px 120px at 20% -40px, rgba(3,169,244,.21), transparent 60%),
          radial-gradient(900px 110px at 80% -40px, rgba(0,150,136,.18), transparent 60%);
      }
      .dlg-head h3{ margin:0; font-size:1.1rem; letter-spacing:.2px }
      .dlg-foot{ display:flex; gap:10px; justify-content:flex-end; padding:12px; border-top:1px solid var(--divider-color); background:var(--primary-background-color) }
      .btn:disabled{ opacity:.6; cursor:not-allowed }

      .visually-hidden{position:absolute!important;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;}

          /* picker layout */
          .layout{display:grid;height:min(84vh,820px);grid-template-columns:260px 1fr}
          #leftPane{
            border-right:1px solid var(--divider-color);
            overflow:auto;
            background:var(--primary-background-color);
            /*
             * Remove contain:content so that fixed-position menus from
             * custom card editors can correctly position themselves
             * relative to the viewport. CSS containment can interfere
             * with anchoring of overlays.
             */
            contain:none;
          }
          /*
           * Allow content like dropdown menus from custom card editors to
           * overflow the right pane without being clipped. Using overflow
           * visible instead of hidden prevents menus from being positioned
           * far away or requiring excessive scrolling when they open.
           */
          #rightPane{
            /* Allow the right-hand editor pane to scroll vertically when
             * content from custom card editors exceeds the available space.
             * We hide horizontal overflow to avoid layout shifts. */
            overflow-y:auto;
            overflow-x:hidden;
            background:var(--primary-background-color);
          }
          .rightGrid{
            display:grid;grid-template-columns:540px 1fr;grid-template-rows:auto auto 1fr;gap:12px;padding:12px;height:100%;box-sizing:border-box;position:relative;
          }
          .sec{
            border:1px solid var(--divider-color);
            border-radius:12px;
            background:var(--card-background-color);
            overflow:visible;
            position:relative;
            /* Remove content containment on sections to prevent the
             * creation of an artificial containing block which can
             * disrupt dropdown positioning. */
            contain:none;
          }
          .sec .hd{display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border-bottom:1px solid var(--divider-color);font-weight:600;position: relative;z-index: 10}
          .sec .bd{padding:12px;overflow:visible}       
          .tabs{display:flex;gap:6px;margin-left:auto}
          .tab{
            font-size:.85rem;padding:6px 10px;border-radius:10px;border:1px solid var(--divider-color);
            background:var(--primary-background-color);color:var(--primary-text-color);cursor:pointer
          }
          .tab.active{background:var(--primary-color);color:#fff;border-color:var(--primary-color)}
          .cm-editor{height: 100%}
          /* --- FIX: YAML/Visual editor: ensure the entire content is visible --- */
          /*
           * The YAML editor previously had a fixed height which caused the
           * bottom of longer configurations to be clipped. Removing the fixed
           * height allows the section to flex based on available space within
           * the grid row. A min-height of zero lets it collapse when there
           * isn't much content, while overflow:auto enables scrolling when
           * content exceeds the visible area.
           */
          #yamlSec {
            min-height: 0;
            height: auto !important;
            overflow: auto;
          }
          #yamlSec .bd {
            /* allow the YAML editor to use the full available space instead of a fixed max height */
            overflow: auto;
            max-height: none;
            /* Fill the available grid row height (1fr) so that scrolling
             * happens inside this section rather than expanding the editor
             * beyond the modal boundary. A min-height of zero ensures the
             * section can shrink when little content is present. */
            height: 100%;
            min-height: 0;
          }
          /* --- make Visual editor area scrollable, like YAML --- */
          #optionsSec {
            min-height: 0;
            overflow: auto;
          }
          #optionsSec .bd {
            position: relative;
            overflow: auto;
            height: auto;
            max-height: none;
            min-height: 0;
          }
          #editorHost {
            display: block;
            min-height: 0;
          }

          #quickFillSec { 
            display: flex; 
            flex-direction: column; 
            min-height: 0; 
          }
          #quickFillSec .bd { 
            overflow: auto;          /* scroll inside the card */
            max-height: 320px;       /* keep it contained; tweak as you wish */
          }

          /* ha-code-editor / CodeMirror height: allow growth but set a sensible minimum
           * so that very short snippets don't collapse. Using min-height
           * instead of a fixed height allows the editor to expand when the
           * parent container grows. The !important flag ensures that the
           * component\u2019s inline styles from HA won\u2019t override this sizing.
           */
          ha-code-editor {
            display: block;
            min-height: 260px;
            height: auto !important;
          }
          .CodeMirror {
            min-height: 260px;
            height: auto !important;
          }

          /* host that wraps the editor should also allow scroll if content grows */
          #yamlHost { 
            overflow: visible; 
            height: auto;
          }

          /* CodeMirror */
          .CodeMirror{
            height:260px;border:1px solid var(--divider-color);border-radius:12px;
            background:var(--primary-background-color);color:var(--primary-text-color);
            z-index:6;
          }

          /* YAML editor safety / visibility */
          #yamlSec{ z-index:5; }
          #yamlHost, #yamlHost * { touch-action: auto; }
          ha-code-editor, ha-code-editor * { touch-action: auto; }
          ha-code-editor{ display:block; height:260px; z-index:6; }

          /* loading spinners */
          .spin-center{
            position:absolute;inset:0;display:flex;align-items:center;justify-content:center;pointer-events: none; /* let clicks pass through to tabs and controls */
          }


          /* marquee selection rectangle */
          .marquee{
            position:absolute; border:1px dashed var(--primary-color);
            background: color-mix(in srgb, var(--primary-color) 10%, transparent);
            pointer-events:none; z-index:50;
          }

          /* placeholder tile */
          .ddc-placeholder-inner{
            position: relative;
            display:flex; align-items:center; justify-content:center;
            width:100%; height:100%;
            border-radius:16px;
            overflow: hidden;
            /* cool gradient derived from HA primary color */
            background:
              radial-gradient(120% 120% at 100% 0%,
                color-mix(in srgb, var(--primary-color) 18%, #000 0%) 0%,
                transparent 60%),
              linear-gradient(135deg,
                color-mix(in srgb, var(--primary-color) 70%, #000 0%) 0%,
                color-mix(in srgb, var(--primary-color) 35%, #000 0%) 100%);
          }

          /* subtle shine */
          .ddc-placeholder-inner::after{
            content:"";
            position:absolute; inset:0;
            background: radial-gradient(120% 90% at 0% 100%, rgba(255,255,255,.15), transparent 60%);
            pointer-events:none;
          }

          /* center stack */
          .ddc-hero{
            position:absolute; inset:0;
            display:flex; flex-direction:column; align-items:center; justify-content:center;
            gap:16px; text-align:center; padding:24px;
            color:rgba(255,255,255,.98);
            text-shadow:0 1px 2px rgba(0,0,0,.35);
            user-select:none; pointer-events:none; /* click goes to shield below */
          }

          .ddc-hero img{
            width:128px; height:128px; object-fit:contain; opacity:.95; filter: drop-shadow(0 4px 14px rgba(0,0,0,.25));
          }

          .ddc-hero .ddc-title{
            font-weight:800; font-size:1.25rem; letter-spacing:.2px;
          }

          .ddc-hero .ddc-sub{
            font-weight:600; opacity:.95;
          }

          /* --- hold-to-edit ring (cursor progress) --- */
          .ddc-press-ring{
            position:fixed; z-index:100000; width:44px; height:44px; pointer-events:none;
            margin-left:-22px; margin-top:-22px;
            filter: drop-shadow(0 2px 6px rgba(0,0,0,.35));
          }
          .ddc-press-ring svg{width:44px;height:44px}
          .ddc-press-ring .pr-bg{stroke: rgba(255,255,255,.45); stroke-width:4; fill:none}
          .ddc-press-ring .pr-fg{stroke: var(--primary-color); stroke-width:4; fill:none; stroke-linecap:round}
          .ddc-press-ring .pr-dot{fill: var(--primary-color); opacity:.95}

          /* --- edit-mode ripple transition --- */
          .ddc-ripple-veil{
            position:absolute; inset:0; pointer-events:none; z-index:80; overflow:hidden;
            mix-blend-mode: screen;
          }
          .ddc-ripple-veil::before{
            content:""; position:absolute; left: var(--rip-x, 50%); top: var(--rip-y, 50%);
            width:0px; height:0px; transform: translate(-50%,-50%);
            border-radius:50%;
            background:
              radial-gradient(closest-side, rgba(3,169,244,.55), rgba(3,169,244,.25) 45%, rgba(0,0,0,0) 65%),
              radial-gradient(closest-side, rgba(0,150,136,.35), rgba(0,150,136,.15) 50%, rgba(0,0,0,0) 70%);
            filter: blur(12px);
            animation: ddc-ripple-grow 900ms ease-out forwards;
          }
          .ddc-ripple-veil::after{
            content:""; position:absolute; inset:-20%;
            background:
              repeating-linear-gradient(115deg, rgba(3,169,244,.09) 0 12px, rgba(0,0,0,0) 12px 24px);
            opacity:0;
            animation: ddc-ripple-scan 900ms ease-out forwards;
          }
          @keyframes ddc-ripple-grow{
            0%   { width:0; height:0; opacity:.9 }
            60%  { width:150vmax; height:150vmax; opacity:.9 }
            100% { width:170vmax; height:170vmax; opacity:0 }
          }
          @keyframes ddc-ripple-scan{
            0%   { transform:scale(.96) rotate(0deg); opacity:0 }
            40%  { opacity:.7 }
            100% { transform:scale(1.06) rotate(2deg); opacity:0 }
          }


/* ===== DDC TABS \u2014 Minimal Redesign (pills with accent tint) ===== */
    
/* ====================================================================
   CHROME-LIKE TABS \u2022 spaced + concave bottoms (sticky, CSS-only)
   ==================================================================== */

/*
 * Tabs bar: stick below the toolbar when edit mode is active.
 * The top offset uses a CSS custom property --ddc-toolbar-height set via
 * JavaScript when toggling edit mode.  This ensures that in both
 * dynamic and auto modes the tabs bar always sits directly beneath
 * the toolbar whenever it is visible.  When the toolbar is hidden,
 * --ddc-toolbar-height defaults to 0 so the tabs bar sticks to the
 * very top of the viewport.  We also include env(safe-area-inset-top)
 * to respect devices with notches/safe areas.
 */
.ddc-tabs {
  --bg: var(--card-background-color, #16181c);
  --fg: var(--primary-text-color, #e6e8ea);
  --accent: var(--primary-color, #6aa4ff);
  --hair: color-mix(in oklab, var(--fg) 16%, transparent);

  --h: 42px;
  --gap: 16px;
  --r-top: 14px;
  --padX: 18px;

  position: sticky;
  top: calc(max(env(safe-area-inset-top, 0px), 0px) + var(--ddc-toolbar-height, 0px));
  z-index: 100;

  display: flex;
  align-items: flex-end;
  column-gap: var(--gap);
  padding: 0 12px;
  width: 100%;
  box-sizing: border-box;

  background: var(--bg);
  border-bottom: 2px solid color-mix(in oklab, var(--accent) 55%, transparent);

  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x proximity;
  scrollbar-gutter: stable;

  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0,
    #000 16px,
    #000 calc(100% - 16px),
    transparent 100%
  );
  mask-image: linear-gradient(
    to right,
    transparent 0,
    #000 16px,
    #000 calc(100% - 16px),
    transparent 100%
  );
}

.ddc-tabs::-webkit-scrollbar {
  height: 8px;
}
.ddc-tabs::-webkit-scrollbar-thumb {
  background: color-mix(in oklab, var(--fg) 30%, transparent);
  border-radius: 999px;
}
.ddc-tabs::-webkit-scrollbar-track {
  background: transparent;
}

/* ---------- TAB (Chrome-like shape) ---------- */
/* ====================================================================
   CHROME-LIKE TABS \u2022 centered + concave bottoms (sticky, CSS-only)
   ==================================================================== */
/* ====================================================================
   CHROME-LIKE TABS \u2022 centered \u2022 concave bottoms \u2022 light active
   Markup stays: <div class="ddc-tabs"> \u2026 .ddc-tab(.active) \u2026 </div>
   ==================================================================== */

/* ---------- BAR (sticky baseline) ---------- */
.ddc-tabs{
  /* Theme tokens (HA-aware) */
  --bg: var(--card-background-color, #16181c);
  --fg: var(--primary-text-color, #e6e8ea);
  --accent: var(--primary-color, #6aa4ff);
  --hair: color-mix(in oklab, var(--fg) 16%, transparent);

  /* Geometry knobs */
  --h: 42px;       /* tab height */
  --gap: 18px;     /* space between tabs */
  --r-top: 14px;   /* top radius */
  --cut: 22px;     /* concave cut depth at bottom corners (18\u201326 good) */
  --padX: 18px;    /* horizontal padding */

  position: sticky;
  top: calc(max(env(safe-area-inset-top,0px), 0px) + var(--ddc-toolbar-height, 0px));
  z-index: 100;

  display: flex;
  align-items: flex-end;
  justify-content: center;          /* center when there\u2019s room */
  column-gap: var(--gap);
  padding: 0 12px;
  width: 100%;
  box-sizing: border-box;

  background: var(--bg);
  border-bottom: 2px solid color-mix(in oklab, var(--accent) 55%, transparent);

  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x proximity;
  scrollbar-gutter: stable;

  /* discoverable overflow edges */
  -webkit-mask-image: linear-gradient(to right, transparent 0, #000 16px, #000 calc(100% - 16px), transparent 100%);
          mask-image: linear-gradient(to right, transparent 0, #000 16px, #000 calc(100% - 16px), transparent 100%);
}
.ddc-tabs::-webkit-scrollbar{ height: 8px; }
.ddc-tabs::-webkit-scrollbar-thumb{ background: color-mix(in oklab, var(--fg) 30%, transparent); border-radius: 999px; }
.ddc-tabs::-webkit-scrollbar-track{ background: transparent; }

/* ---------- TAB (concave corners painted; no masks required) ---------- */
.ddc-tab{
  -webkit-tap-highlight-color: transparent;
  position: relative;
  flex: 0 0 auto;
  align-self: flex-end;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  height: var(--h);
  min-width: clamp(120px, 18ch, 280px);
  padding: 0 var(--padX);
  scroll-snap-align: start;

  font: 600 13.5px/1 system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans";
  letter-spacing: .2px;
  color: color-mix(in oklab, var(--fg) 92%, transparent);
  cursor: pointer;
  user-select: none;

  /* Fill with \u201Ccarved\u201D concave bottom corners:
     we paint the BAR color into the corner arcs, which visually cuts inward */
  background:
    radial-gradient(120% 140% at 0 100%,     var(--bg) 0 calc(var(--cut)), transparent calc(var(--cut) + 1px)) left  bottom / var(--cut) calc(var(--cut) + 6px) no-repeat,
    radial-gradient(120% 140% at 100% 100%,  var(--bg) 0 calc(var(--cut)), transparent calc(var(--cut) + 1px)) right bottom / var(--cut) calc(var(--cut) + 6px) no-repeat,
    linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02));

  /* Border drawn as inset so it follows the carve perfectly */
  box-shadow:
    0 0 0 1px var(--hair) inset,
    0 2px 8px rgba(0,0,0,.22);

  border: none;
  border-top-left-radius: var(--r-top);
  border-top-right-radius: var(--r-top);

  /* sit slightly above the baseline so the concave is visible */
  transform: translateY(4px);
  transition:
    transform .16s cubic-bezier(.2,.6,.2,1),
    box-shadow .18s ease,
    color .16s ease,
    background-color .18s ease,
    filter .18s ease;
}

/* icon + label */
.ddc-tab ha-icon{ --mdc-icon-size: 18px; opacity: .95; }
.ddc-tab .ddc-tab-label{ max-width: 100%; overflow: hidden; text-overflow: ellipsis; }

/* Hover: gentle raise and slightly clearer edge */
.ddc-tab:hover{
  transform: translateY(2px);
  box-shadow:
    0 0 0 1px color-mix(in oklab, var(--fg) 24%, transparent) inset,
    0 6px 12px rgba(0,0,0,.18);
}

/* Pressed */
.ddc-tab:active{ transform: translateY(4px) scale(.99); }

/* Focus ring */
.ddc-tab:focus-visible{
  outline: none;
  box-shadow:
    0 0 0 2px color-mix(in oklab, var(--accent) 60%, transparent),
    0 0 0 6px color-mix(in oklab, var(--fg) 18%, transparent),
    0 2px 8px rgba(0,0,0,.22);
}

/* ---------- ACTIVE (lighter background, connected to bar) ---------- */
.ddc-tab.active{
  z-index: 2;
  transform: translateY(0);
  color: var(--fg);

  /* lighter body like your reference */
  background:
    radial-gradient(120% 140% at 0 100%,     var(--bg) 0 calc(var(--cut)), transparent calc(var(--cut) + 1px)) left  bottom / var(--cut) calc(var(--cut) + 6px) no-repeat,
    radial-gradient(120% 140% at 100% 100%,  var(--bg) 0 calc(var(--cut)), transparent calc(var(--cut) + 1px)) right bottom / var(--cut) calc(var(--cut) + 6px) no-repeat,
    linear-gradient(180deg,
      color-mix(in oklab, #fff 20%, var(--bg) 80%),
      color-mix(in oklab, #fff 10%, var(--bg) 90%));
  box-shadow:
    0 0 0 1px color-mix(in oklab, var(--fg) 26%, transparent) inset,
    0 10px 16px rgba(0,0,0,.16),
    0 2px 0 0 var(--bg);   /* hide the blue baseline under the active tab */
}

/* Optional small accent tick under the active tab */
.ddc-tab::after{
  content:"";
  position:absolute; left: 24px; right: 24px; bottom: -2px;
  height: 2px; border-radius: 2px;
  background: color-mix(in oklab, var(--accent) 72%, transparent);
  opacity: 0; transition: opacity .18s ease;
}
.ddc-tab.active::after{ opacity: 1; }

/* Disabled */
.ddc-tab[disabled], .ddc-tab[aria-disabled="true"]{
  opacity:.55; cursor:not-allowed; filter: saturate(.75);
}

/* Dark-mode base (kept HA-aware) */
@media (prefers-color-scheme: dark){
  .ddc-tabs{
    --bg: var(--card-background-color, #0f1216);
    --fg: var(--primary-text-color, #e6e8ea);
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce){
  .ddc-tab{ transition: none !important; }
}

/* Fallback for older engines */
@supports not (scrollbar-gutter: stable){
  .ddc-tabs{ padding-inline-end: 16px; }
}





/* ===== DDC Tabs \u2014END ==================== */


        /* Fly\u2011in animation for card wrappers. When the animate_cards
           configuration option is enabled, card wrappers will animate
           into view using this keyframe sequence. Cards translate
           upward while fading in to produce a quick, pleasant fly\u2011in. */
        @keyframes ddc-card-fly-in{
          0%   { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        /* Apply the fly\u2011in animation to visible cards. The animation
           duration and easing mirror other UI animations for cohesion. */
        .card-wrapper.ddc-fly-in{
          animation: ddc-card-fly-in 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
              

        
/* === GRID SELECT PATCH START (styles) === */
.ddc-grid-canvas {
  position: absolute;
  inset: 0;
  pointer-events: auto;     /* receives events only on empty space since it's behind cards */
  z-index: 5;               /* above visual grid, but behind draggable cards */
}
/* === GRID SELECT PATCH END (styles) === */
</style>
        <div class="ddc-root">
        
<div class="toolbar ddc-toolbar streamlined v2" role="toolbar" aria-label="Layout editor">

  <!-- Add & Save -->
  <section class="ddc-sec sec-primary" aria-label="Add & Save">
    <header class="ddc-sec-head">
      <span class="ddc-sec-dot" aria-hidden="true"></span>
      <span class="ddc-sec-title">Add &amp; Save</span>
    </header>
    <div class="ddc-row">
      <button class="btn primary cta-add" id="addCardBtn" style="display:none" data-tooltip="Add card">
        <ha-icon icon="mdi:plus"></ha-icon><span class="label">Add Card</span>
      </button>
      <button class="btn secondary" id="applyLayoutBtn" style="display:none" data-tooltip="Save">
        <ha-icon icon="mdi:content-save"></ha-icon><span class="label">Save</span>
      </button>
    </div>
  </section>

  <!-- Clipboard -->
  <section class="ddc-sec sec-clip" aria-label="Clipboard">
    <header class="ddc-sec-head">
      <span class="ddc-sec-dot" aria-hidden="true"></span>
      <span class="ddc-sec-title">Clipboard</span>
    </header>
    <div class="ddc-row">
      <button class="btn secondary" id="copyBtn" style="display:none" data-tooltip="Copy">
        <ha-icon icon="mdi:content-copy"></ha-icon><span class="label">Copy</span>
      </button>
      <button class="btn secondary" id="pasteBtn" style="display:none" data-tooltip="Paste">
        <ha-icon icon="mdi:content-paste"></ha-icon><span class="label">Paste</span>
      </button>
    </div>
  </section>

  <!-- Import & Share -->
  <section class="ddc-sec sec-share" aria-label="Import & Share">
    <header class="ddc-sec-head">
      <span class="ddc-sec-dot" aria-hidden="true"></span>
      <span class="ddc-sec-title">Import &amp; Share</span>
    </header>
    <div class="ddc-row">
      <button class="btn secondary" id="importBtn" style="display:none" data-tooltip="Import YAML">
        <ha-icon icon="mdi:upload"></ha-icon><span class="label">Import</span>
      </button>
      <button class="btn secondary" id="exportBtn" style="display:none" data-tooltip="Export YAML">
        <ha-icon icon="mdi:download"></ha-icon><span class="label">Export</span>
      </button>
      <button class="btn info hads" id="exploreBtn" style="display:none" data-tooltip="Open HADS">
        <ha-icon icon="mdi:storefront-outline"></ha-icon><span class="label">Open HADS</span>
      </button>
      <button class="btn danger" id="exitEditBtn" style="display:none" data-tooltip="Exit edit mode">
        <ha-icon icon="mdi:exit-run"></ha-icon><span class="label">Exit Edit Mode</span>
      </button>
    </div>
  </section>
  

  <!-- Utilities -->
  <section class="ddc-sec sec-utils" aria-label="Utilities">
    <header class="ddc-sec-head">
      <span class="ddc-sec-dot" aria-hidden="true"></span>
      <span class="ddc-sec-title">Utilities</span>
    </header>
    <div class="ddc-row">
      <button class="btn secondary" id="reloadBtn" style="display:none" data-tooltip="Reload">
        <ha-icon icon="mdi:refresh"></ha-icon><span class="label">Reload</span>
      </button>
      <button class="btn secondary" id="diagBtn" style="display:none" data-tooltip="Diagnostics">
        <ha-icon icon="mdi:play-circle-outline"></ha-icon><span class="label">Diagnostics</span>
      </button>
      <button class="btn secondary" id="settingsBtn" style="display:none" data-tooltip="Card Settings">
        <ha-icon icon="mdi:cog"></ha-icon><span class="label">Card Settings</span>
      </button>
    </div>
  </section>

  <!-- Status -->
  <section class="ddc-sec sec-status" aria-label="Status">
    <header class="ddc-sec-head">
      <span class="ddc-sec-dot" aria-hidden="true"></span>
      <span class="ddc-sec-title">Status</span>
    </header>
    <div class="ddc-row">
      <span class="ddc-t-status ok" id="ddcStatus" style="display:none" aria-live="polite">
        <span class="ddc-t-dot" id="ddcDot" aria-hidden="true"></span>
        <span class="ddc-t-text" id="ddcStatusText">storage: backend \xB7 OK</span>
      </span>
      <span class="store-badge" id="storeBadge" title="Where layout is persisted" style="display:none">storage: backend \xB7 OK</span>
    </div>
  </section>

</div>


          <!-- Tabs & card container -->
          <div class="ddc-tabs" id="tabsBar" style="display:none"></div>
          <div class="card-container" id="cardContainer">
            <!-- host for particles.js / YouTube backgrounds -->
            <div class="ddc-bg-host" id="ddcBgHost" aria-hidden="true"></div>
          </div>



      `,this.cardContainer=this.shadowRoot.querySelector("#cardContainer");try{(H=this._applyBackgroundFromConfig)==null||H.call(this)}catch{}try{(G=this._updateScreensaverSettings)==null||G.call(this)}catch{}this.addButton=this.shadowRoot.querySelector("#addCardBtn"),this.reloadBtn=this.shadowRoot.querySelector("#reloadBtn"),this.diagBtn=this.shadowRoot.querySelector("#diagBtn"),this.exitEditBtn=this.shadowRoot.querySelector("#exitEditBtn"),this.storeBadge=this.shadowRoot.querySelector("#storeBadge"),this.exportBtn=this.shadowRoot.querySelector("#exportBtn"),this.importBtn=this.shadowRoot.querySelector("#importBtn"),this.exploreBtn=this.shadowRoot.querySelector("#exploreBtn"),this.applyLayoutBtn=this.shadowRoot.querySelector("#applyLayoutBtn"),this.copyBtn=this.shadowRoot.querySelector("#copyBtn"),this.pasteBtn=this.shadowRoot.querySelector("#pasteBtn"),this.settingsBtn=this.shadowRoot.querySelector("#settingsBtn"),this.tabsBar=this.shadowRoot.querySelector("#tabsBar"),this.rootEl=this.shadowRoot.querySelector(".ddc-root");try{this._renderTabs(),this._applyActiveTab()}catch{}this._applyGridVars(),this.addButton.addEventListener("click",()=>{this.editMode||this._toggleEditMode(!0),this._openCardManager()}),this.reloadBtn.addEventListener("click",()=>this._initialLoad(!0)),this.diagBtn.addEventListener("click",()=>this._openDiagnostics()),this.exitEditBtn.addEventListener("click",()=>this._toggleEditMode(!1)),this.exportBtn.addEventListener("click",()=>this._exportDesign()),this.importBtn.addEventListener("click",()=>this._importDesign()),this.applyLayoutBtn.addEventListener("click",()=>this._saveLayout(!1)),this.copyBtn&&this.copyBtn.addEventListener("click",()=>this._copySelection()),this.pasteBtn&&this.pasteBtn.addEventListener("click",()=>this._pasteClipboard()),this.settingsBtn&&this.settingsBtn.addEventListener("click",()=>this._openDashboardSettings()),window.addEventListener("keydown",fe=>{var Oe;if(this.editMode){if((fe.ctrlKey||fe.metaKey)&&(fe.key==="s"||fe.key==="S")&&(fe.preventDefault(),this._saveLayout(!1)),!this.__ddcResizeObs&&this.autoResizeCards){this.__ddcResizeObs=new ResizeObserver(()=>{var Ce;return(Ce=this._applyAutoScale)==null?void 0:Ce.call(this)});try{this.__ddcResizeObs.observe(this)}catch{}try{this.__ddcResizeObs.observe(this.cardContainer)}catch{}try{this.parentElement&&this.__ddcResizeObs.observe(this.parentElement)}catch{}try{this.offsetParent&&this.__ddcResizeObs.observe(this.offsetParent)}catch{}window.addEventListener("resize",this.__ddcOnWinResize=()=>{var Ce;return(Ce=this._applyAutoScale)==null?void 0:Ce.call(this)})}(Oe=this._applyAutoScale)==null||Oe.call(this)}}),this.exploreBtn.addEventListener("click",()=>window.open("https://hads.smarti.dev/","_blank","noopener,noreferrer")),this._applyContainerSizingFromConfig(!0),(ee=this._applyAutoScale)==null||ee.call(this),this._installLongPressToEnterEdit(),(ue=this._startScaleWatch)==null||ue.call(this),window.addEventListener("keydown",fe=>{var Oe;if(fe.key==="Escape"&&this.editMode&&this._toggleEditMode(!1),!this.__ddcResizeObs&&this.autoResizeCards){this.__ddcResizeObs=new ResizeObserver(()=>{var Ce;return(Ce=this._applyAutoScale)==null?void 0:Ce.call(this)});try{this.__ddcResizeObs.observe(this)}catch{}try{this.__ddcResizeObs.observe(this.cardContainer)}catch{}window.addEventListener("resize",this.__ddcOnWinResize=()=>{var Ce;return(Ce=this._applyAutoScale)==null?void 0:Ce.call(this)})}(Oe=this._applyAutoScale)==null||Oe.call(this)}),this._installSelectionMarquee(),this.cardContainer.addEventListener("mousedown",fe=>{this.editMode&&(fe.target.closest(".card-wrapper")||!fe.shiftKey&&!fe.ctrlKey&&!fe.metaKey&&this._clearSelection())})}try{this._isInHaEditorPreview()||this._queueSave("config-change")}catch{}this._updateStoreBadge(),this.cardContainer&&this._toggleEditMode(!1),this.__cfgReady=!0,c&&this.__booted?this._initialLoad(!0):!this.__booted&&this.__probed?(this.__booted=!0,this._initialLoad()):(this._applyContainerSizingFromConfig(!0),(We=this._applyAutoScale)==null||We.call(this),this._resizeContainer())}_startInitialAutosize(){var e,n;try{if(this.__autoInitStarted)return;this.__autoInitStarted=!0;let o=!1,c=()=>{o||(o=!0,requestAnimationFrame(()=>{var y;o=!1;try{(y=this._applyAutoScale)==null||y.call(this)}catch{}}))};requestAnimationFrame(()=>{c(),requestAnimationFrame(c)}),setTimeout(c,0);try{(n=(e=document.fonts)==null?void 0:e.ready)==null||n.then(c)}catch{}let s=String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase(),l=this.cardContainer||this.querySelector("#cardContainer");if(!l)return;let u={childList:!0,subtree:!0,attributes:!0,attributeFilter:["style","class"]},f={childList:!0,subtree:!0},m=this.autoResizeCards||s==="auto",v=new MutationObserver(()=>c());v.observe(l,m?u:f),this.__autoInitMO=v,setTimeout(()=>{try{v.disconnect()}catch{}this.__autoInitMO=null},2e3)}catch{}}connectedCallback(){var e,n,o,c,s;try{this._installGridObservers_(),this._updateGridButtonsVisibility()}catch{}(e=this._startInitialAutosize)==null||e.call(this);try{(n=this._applyHaChromeVisibility_)==null||n.call(this),this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var u;return(u=this._applyAutoFillNoScale)==null?void 0:u.call(this)})});try{(o=this._ensureScreenSaverStyles)==null||o.call(this),(c=this._updateScreensaverSettings)==null||c.call(this)}catch{}}catch{this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var u;return(u=this._applyAutoFillNoScale)==null?void 0:u.call(this)})})}if(this.__keyHandlerBound||(this.__keyHandler=l=>this._onKeyDown_(l),window.addEventListener("keydown",this.__keyHandler),this.__keyHandlerBound=!0,this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var u;return(u=this._applyAutoFillNoScale)==null?void 0:u.call(this)})})),this.__boundExitEdit||(this.__boundExitEdit=()=>this._toggleEditMode(!1),this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var u;return(u=this._applyAutoFillNoScale)==null?void 0:u.call(this)})})),window.addEventListener("pagehide",this.__boundExitEdit),window.addEventListener("beforeunload",this.__boundExitEdit),this.__onVis=()=>{document.visibilityState==="hidden"&&this._toggleEditMode(!1),this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var u;return(u=this._applyAutoFillNoScale)==null?void 0:u.call(this)})})},document.addEventListener("visibilitychange",this.__onVis),this._toggleEditMode(!1),!this.__visObs){let l=new IntersectionObserver(u=>{u.some(f=>f.isIntersecting)&&(requestAnimationFrame(()=>this._applyAutoScale&&this._applyAutoScale()),l.observe(this),this.__visObs=l)});this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var f;return(f=this._applyAutoFillNoScale)==null?void 0:f.call(this)})})}this.__ddcOnWinResize=this.__ddcOnWinResize||(()=>{var l,u;if(this.hasAttribute("ddc-fixed-ui"))try{(l=this._computeHaSidebarGutters_)==null||l.call(this)}catch{}(u=this._applyAutoScale)==null||u.call(this)});try{let l=String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase();this.autoResizeCards||l==="auto"?window.addEventListener("resize",this.__ddcOnWinResize):window.removeEventListener("resize",this.__ddcOnWinResize)}catch{}try{(s=this.__ddcBindPointerListeners)==null||s.call(this),this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var u;return(u=this._applyAutoFillNoScale)==null?void 0:u.call(this)})})}catch{this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var u;return(u=this._applyAutoFillNoScale)==null?void 0:u.call(this)})})}this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var u;return(u=this._applyAutoFillNoScale)==null?void 0:u.call(this)})})}disconnectedCallback(){var e,n,o,c,s,l,u;try{this._uninstallGridObservers_()}catch{}try{(e=this._setHeaderVisible_)==null||e.call(this,!0),(n=this._setSidebarVisible_)==null||n.call(this,!0)}catch{}try{(o=this._applyHaChromeVisibility_)==null||o.call(this)}catch{}this.__keyHandlerBound&&this.__keyHandler&&(window.removeEventListener("keydown",this.__keyHandler),this.__keyHandlerBound=!1,this.__keyHandler=null),this.__keyHandlerBound||(this.__keyHandler=f=>this._onKeyDown_(f),window.addEventListener("keydown",this.__keyHandler),this.__keyHandlerBound=!0);try{(c=this._destroyParticles_)==null||c.call(this)}catch{}try{(s=this._destroyYouTube_)==null||s.call(this)}catch{}window.removeEventListener("pagehide",this.__boundExitEdit),window.removeEventListener("beforeunload",this.__boundExitEdit),document.removeEventListener("visibilitychange",this.__onVis);try{this._screensaverTimer&&(clearTimeout(this._screensaverTimer),this._screensaverTimer=null),this._clockInterval&&(clearInterval(this._clockInterval),this._clockInterval=null),this._screensaverActivityHandler&&(this._screensaverEvents||[]).forEach(m=>{document.removeEventListener(m,this._screensaverActivityHandler,!0)}),this.screenSaverOverlay&&this.screenSaverOverlay.parentNode&&this.screenSaverOverlay.parentNode.removeChild(this.screenSaverOverlay)}catch{}try{(l=this.__ddcResizeObs)==null||l.disconnect()}catch{}if(this.__ddcResizeObs=null,(u=this._stopScaleWatch)==null||u.call(this),this.__ddcOnWinResize&&(window.removeEventListener("resize",this.__ddcOnWinResize),this.__ddcOnWinResize=null),this.__lpInstalled&&this.__lpHandlers){let f=this.cardContainer;f==null||f.removeEventListener("mousedown",this.__lpHandlers.mouseDown),window.removeEventListener("mousemove",this.__lpHandlers.mouseMove),window.removeEventListener("mouseup",this.__lpHandlers.mouseUp),window.removeEventListener("contextmenu",this.__lpHandlers.contextMenu),f==null||f.removeEventListener("touchstart",this.__lpHandlers.touchStart),window.removeEventListener("touchmove",this.__lpHandlers.touchMove),window.removeEventListener("touchend",this.__lpHandlers.touchEnd),window.removeEventListener("touchcancel",this.__lpHandlers.touchCancel),this.__lpInstalled=!1,this.__lpHandlers=null}try{this.__visObs&&this.__visObs.disconnect()}catch{}this.__visObs=null,this.__ddcOnWinResize&&window.removeEventListener("resize",this.__ddcOnWinResize);try{this.__ddcPtrBound&&(this.removeEventListener("pointerdown",this.__onDDCPointerDown),this.removeEventListener("pointermove",this.__onDDCPointerMove),window.removeEventListener("pointerup",this.__onDDCPointerUp),window.removeEventListener("pointercancel",this.__onDDCPointerUp),this.__ddcPtrBound=!1)}catch{}}set hass(e){var o;this._hass=e,cc("set hass"),!this.__probed&&e&&(this.__probed=!0,this._probeBackend().then(()=>{this.__probed=!0,!this.__booted&&this.__cfgReady&&(this.__booted=!0,this._initialLoad(!0))}));let n=((o=this.cardContainer)==null?void 0:o.children)||[];for(let c of n){let s=c.firstElementChild;s&&s.hass!==e&&(s.hass=e)}try{this._applyVisibility_()}catch{}}get hass(){return this._hass}async _initialLoad(e=!1){var n,o,c,s,l,u,f,m,v,y,x,O,S,A,L,C,T,M,_;if(!this.__booting){this.__booting=!0;try{this._loading=!0,e&&this.cardContainer&&(this.cardContainer.innerHTML=""),this._dbgPush("boot","Initial load start",{force:e});let P=[],D=null;if(this._backendOK&&this.storageKey)try{D=await this._loadLayoutFromBackend(this.storageKey)}catch(H){this._dbgPush("boot","Backend load failed",{error:String(H)})}if(!D&&this.storageKey){let H=null;try{H=JSON.parse(localStorage.getItem(`ddc_local_${this.storageKey}`)||"null")}catch{}if(H)if(this._dbgPush("boot","Found local snapshot",{bytes:JSON.stringify(H).length}),this._backendOK)try{await this._saveLayoutToBackend(this.storageKey,H),this._dbgPush("boot","Migrated local -> backend"),D=H}catch(G){this._dbgPush("boot","Migration failed, staying local",{error:String(G)}),D=H}else D=H}!D&&((o=(n=this._config)==null?void 0:n.cards)!=null&&o.length)&&(this._dbgPush("boot","Using embedded config"),D={cards:this._config.cards});let K={...this._config||{}};if(D!=null&&D.options){let{storage_key:H,...G}=D.options;this._applyImportedOptions(G,!0)}else typeof(D==null?void 0:D.grid)=="number"&&this._applyImportedOptions({grid:D.grid},!0);let J=["storage_key","grid","drag_live_snap","auto_save","auto_save_debounce","container_background","card_background","debug","disable_overlap","container_size_mode","container_fixed_width","container_fixed_height","container_preset","container_preset_orientation","tabs","tabs_position","default_tab","hide_tabs_when_single","auto_resize_cards"],U={};for(let H of J)K[H]!==void 0&&(U[H]=K[H]);Object.keys(U).length&&this._applyImportedOptions(U,!0);let ae=!1;if((c=D==null?void 0:D.cards)!=null&&c.length){for(let H of D.cards){if(!(H!=null&&H.card)||typeof H.card=="object"&&Object.keys(H.card).length===0){let ue=this._makePlaceholderAt(((s=H.position)==null?void 0:s.x)||0,((l=H.position)==null?void 0:l.y)||0,((u=H.size)==null?void 0:u.width)||200,((f=H.size)==null?void 0:f.height)||200);this.cardContainer.appendChild(ue);try{this._rebuildOnce(ue.firstElementChild)}catch{}ae=!0;continue}let G=await this._createCard(H.card),ee=this._makeWrapper(G);this.editMode&&ee.classList.add("editing"),ee.dataset.tabId=this._normalizeTabId(H.tabId||H.tab_id||this.defaultTab),this._setCardPosition(ee,((m=H.position)==null?void 0:m.x)||0,((v=H.position)==null?void 0:v.y)||0),ee.style.width=`${(x=(y=H.size)==null?void 0:y.width)!=null?x:14*this.gridSize}px`,ee.style.height=`${(S=(O=H.size)==null?void 0:O.height)!=null?S:10*this.gridSize}px`,H.z!=null&&(ee.style.zIndex=String(H.z)),this.cardContainer.appendChild(ee);try{this._rebuildOnce(ee.firstElementChild)}catch{}this._initCardInteract(ee),ae=!0}this._resizeContainer(),(A=this._applyAutoScale)==null||A.call(this),this._dbgPush("boot","Layout applied",{count:D.cards.length})}ae||(this._showEmptyPlaceholder(),(L=this._applyAutoScale)==null||L.call(this),this._dbgPush("boot","No saved layout found; showing placeholder")),this._updateStoreBadge(),this._syncEmptyStateUI(),e&&(this._cardModProcessed=!1),setTimeout(()=>{this._processCardModOnce()},100);try{P.forEach(H=>{try{H.dispatchEvent(new Event("ll-rebuild",{bubbles:!0,composed:!0}))}catch{}})}catch{}}finally{this._loading=!1,this.__booting=!1,this.__dirty=!1,(C=this._updateApplyBtn)==null||C.call(this);try{this._renderTabs(),this._applyActiveTab()}catch{}try{this._applyVisibility_()}catch{}try{let P=(M=(T=this.cardContainer)==null?void 0:T.querySelector)==null?void 0:M.call(T,"#ddcBgHost");(!P||!P.firstChild)&&((_=this._applyBackgroundFromConfig)==null||_.call(this))}catch{}}}}_normalizeTabId(e){let n=Array.isArray(this.tabs)?this.tabs.map(o=>o.id):[];return n.length?e&&n.includes(e)?e:this.defaultTab||n[0]:this.defaultTab||"default"}_renderTabs(){var o,c,s,l;let e=this.tabsBar;if(!e)return;let n=Array.isArray(this.tabs)?this.tabs:[];if(!n.length||n.length===1&&this.hideTabsWhenSingle){e.style.display="none";return}e.style.display="",e.className="ddc-tabs "+(this.tabsPosition==="left"?"ddc-tabs-left":""),e.innerHTML="";try{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&(e.style.width="100%",e.style.maxWidth="100%")}catch{}for(let u of n){let f=document.createElement("button");f.className="ddc-tab"+(u.id===this.activeTab?" active":""),f.dataset.tabId=u.id,f.title=u.label||u.id,f.innerHTML=`${u.icon?`<ha-icon icon="${u.icon}"></ha-icon>`:""}<span class="ddc-tab-label">${(o=u.label)!=null?o:u.id}</span>`,f.addEventListener("click",()=>{var m,v,y;if(this.activeTab!==u.id){this.activeTab=u.id;try{localStorage.setItem(`ddc_lasttab_${this.storageKey}`,u.id)}catch{}this._applyActiveTab(),this._renderTabs();try{this._applyVisibility_()}catch{}try{let x=(v=(m=this.cardContainer)==null?void 0:m.querySelector)==null?void 0:v.call(m,"#ddcBgHost");(!x||!x.firstChild)&&((y=this._applyBackgroundFromConfig)==null||y.call(this))}catch{}}}),e.appendChild(f)}this.rootEl&&this.rootEl.classList.toggle("ddc-tabs-left-layout",this.tabsPosition==="left");try{(c=this._updateTabsA11y_)==null||c.call(this)}catch{}try{(s=this._syncTabsWidth_)==null||s.call(this)}catch{}try{let u=(l=e.querySelector)==null?void 0:l.call(e,".ddc-tab.active");u&&e.scrollWidth>e.clientWidth&&u.scrollIntoView({behavior:"auto",block:"nearest",inline:"nearest"})}catch{}}_applyActiveTab(){var o,c,s,l,u;let e=this._normalizeTabId(this.activeTab);(((c=(o=this.cardContainer)==null?void 0:o.querySelectorAll)==null?void 0:c.call(o,".card-wrapper"))||[]).forEach(f=>{let m=f.dataset.tabId?this._normalizeTabId(f.dataset.tabId):this.defaultTab;if(!this.tabs||!this.tabs.length){f.style.display="",f.inert=!1,f.classList.remove("ddc-hidden");return}m===e?(f.style.display="",f.inert=!1,f.classList.remove("ddc-hidden")):(f.style.display="none",f.inert=!0,f.classList.add("ddc-hidden"),f.classList.remove("ddc-selected"))});try{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(s=this._applyAutoFillNoScale)==null||s.call(this):(l=this._applyAutoScale)==null||l.call(this)}catch{}try{this._clearSelection()}catch{}try{this.animateCards&&((u=this._animateCards)==null||u.call(this))}catch{}}_animateCards(){var e,n,o,c;try{let s=((n=(e=this.cardContainer)==null?void 0:e.querySelectorAll)==null?void 0:n.call(e,".card-wrapper"))||[],l=(c=(o=window.matchMedia)==null?void 0:o.call(window,"(prefers-reduced-motion: reduce)"))==null?void 0:c.matches,u=800,f=.8,v=u*.3,y=u-v;s.forEach(x=>{var _,P,D;let O=(_=window.getComputedStyle)==null?void 0:_.call(window,x);if(x.style.display==="none"||O&&O.display==="none"||x.classList.contains("ddc-hidden"))return;let A=O&&O.transform&&O.transform!=="none"?O.transform:"",L=100*f,C=`${A} translate3d(0, ${L}%, 0)`,T=`${A} translate3d(0, 0, 0)`,M=Math.random()*(y*Math.min(f,2));if(l){try{x.animate([{opacity:0},{opacity:1}],{duration:u*.15,delay:M,easing:"linear",fill:"backwards"})}catch{x.style.opacity="0",setTimeout(()=>{x.style.transition=`opacity ${u*.15}ms linear`,x.style.opacity="1"},M)}return}try{x.style.willChange="opacity, transform";let K="cubic-bezier(0.4, 0, 0.2, 1)";x.animate([{opacity:0},{opacity:1}],{duration:v,delay:M,easing:"linear",fill:"backwards"}),(D=(P=x.animate([{transform:C},{transform:T}],{duration:v,delay:M,easing:K,fill:"backwards"})).addEventListener)==null||D.call(P,"finish",()=>{x.style.willChange=""})}catch{x.style.opacity="0",x.style.transform=C,x.style.willChange="opacity, transform",setTimeout(()=>{x.style.transition=`opacity ${v}ms linear, transform ${v}ms cubic-bezier(0.4,0,0.2,1)`,x.style.opacity="1",x.style.transform=T,setTimeout(()=>{x.style.transition="",x.style.willChange=""},v+60)},M)}})}catch(s){console.warn("[ddc:animate] animation error",s)}}_addTabSelectorToChip(e,n=null){if(!this.tabs||!this.tabs.length)return;let o=e.querySelector(".chip");if(!o)return;let c=o.querySelector("select.ddc-chip-tab");c||(c=document.createElement("select"),c.className="ddc-chip-tab",c.style.marginLeft="6px",c.title="Assign to tab",o.appendChild(c)),c.innerHTML="";for(let l of this.tabs){let u=document.createElement("option");u.value=l.id,u.textContent=l.label||l.id,c.appendChild(u)}let s=this._normalizeTabId(n||e.dataset.tabId||this.activeTab||this.defaultTab);c.value=s,e.dataset.tabId=s,c.onchange=()=>{var l,u,f;e.dataset.tabId=this._normalizeTabId(c.value),this._applyActiveTab();try{this._applyVisibility_()}catch{}try{let m=(u=(l=this.cardContainer)==null?void 0:l.querySelector)==null?void 0:u.call(l,"#ddcBgHost");(!m||!m.firstChild)&&((f=this._applyBackgroundFromConfig)==null||f.call(this))}catch{}try{this._queueSave("tab-change")}catch{}}}_toggleEditMode(e=null){var x,O,S,A,L,C,T,M,_,P,D,K,J,U,ae,H,G;try{(x=this.__clearPressTimer)==null||x.call(this)}catch{}let n=e===null?!this.editMode:!!e,o=!this.editMode&&n;try{let ee=this.config&&this.config.edit_mode_pin!=null?String(this.config.edit_mode_pin):"",We=((this.editModePin!=null?String(this.editModePin):"")||ee).trim();if(n&&!this.editMode&&We){let fe=window.prompt("Enter PIN / password to open Edit Mode:");if(fe===null)return;if(String(fe).trim()!==We){(O=this._toast)==null||O.call(this,"Incorrect PIN/password.");return}}}catch{}let c=this.renderRoot||this.shadowRoot||this,s=(S=c==null?void 0:c.querySelector)==null?void 0:S.call(c,".ddc-toolbar.streamlined.v2, .ddc-toolbar.streamlined.v3"),l=(ee,ue)=>{try{ee&&(ee.style.display=ue)}catch{}},u="inline-block",f="none",m=()=>{l(this.addButton,u),l(this.reloadBtn,u),l(this.diagBtn,u),l(this.exitEditBtn,u),l(this.exportBtn,u),l(this.importBtn,u),l(this.exploreBtn,u),l(this.storeBadge,u),l(this.applyLayoutBtn,u),l(this.copyBtn,u),l(this.pasteBtn,u),l(this.settingsBtn,u)},v=()=>{l(this.addButton,f),l(this.reloadBtn,f),l(this.diagBtn,f),l(this.exitEditBtn,f),l(this.exportBtn,f),l(this.importBtn,f),l(this.exploreBtn,f),l(this.storeBadge,f),l(this.applyLayoutBtn,f),l(this.copyBtn,f),l(this.pasteBtn,f),l(this.settingsBtn,f)};if(s)if(n)s.setAttribute("data-force-open","1"),s.style.display="grid",m(),requestAnimationFrame(()=>{let ue=s.scrollHeight||0;s.style.setProperty("--open-h",ue+"px"),s.classList.add("is-open")});else{s.setAttribute("data-force-open","1"),s.style.display="grid";let ue=s.scrollHeight||0;s.style.setProperty("--open-h",ue+"px"),requestAnimationFrame(()=>{s.classList.remove("is-open")}),setTimeout(()=>{v(),s.removeAttribute("data-force-open")},260)}else n?m():v();if(this.editMode=n,(A=this._syncEmptyStateUI)==null||A.call(this),(L=this.cardContainer)==null||L.classList.toggle("grid-on",this.editMode),(((T=(C=this.cardContainer)==null?void 0:C.querySelectorAll)==null?void 0:T.call(C,".card-wrapper"))||[]).forEach(ee=>{ee.classList.toggle("editing",this.editMode);let ue=ee.querySelector(".resize-handle");ue&&(ue.style.display=this.editMode?"flex":"none"),!ee.dataset.placeholder&&window.interact&&window.interact(ee).draggable(this.editMode).resizable(this.editMode),ee.style.touchAction=this.editMode?"none":"auto"}),this.editMode||(M=this._clearSelection)==null||M.call(this),this.editMode||(_=this.cardContainer)==null||_.querySelectorAll(".card-wrapper.dragging").forEach(ee=>ee.classList.remove("dragging")),o){let ee=(P=this.__lastHoldX)!=null?P:null,ue=(D=this.__lastHoldY)!=null?D:null;(K=this._playEditRipple)==null||K.call(this,ee,ue)}try{(J=this._applyHaChromeVisibility_)==null||J.call(this)}catch{}try{let ee=((ae=(U=this.shadowRoot)==null?void 0:U.querySelector)==null?void 0:ae.call(U,".ddc-root"))||((G=(H=this.renderRoot)==null?void 0:H.querySelector)==null?void 0:G.call(H,".ddc-root"))||null;if(ee){let ue=0;if(n&&s)try{ue=s.scrollHeight||s.offsetHeight||0}catch{}ee.style.setProperty("--ddc-toolbar-height",ue+"px")}}catch{}}_isInHaEditorPreview(){let e=this;for(;e;){let n=e.nodeType===1&&e.localName?e.localName.toLowerCase():"";if(n==="hui-card-editor"||n==="hui-dialog-edit-card"||n==="hui-card-preview"||n==="ha-dialog"||n==="mwc-dialog")return!0;let o=e.getRootNode&&e.getRootNode();e=e.parentElement||o&&o.host||null}return!1}_installLongPressToEnterEdit(){if(this.__lpInstalled)return;this.__lpInstalled=!0;let e=this.cardContainer;if(!e)return;let n=800,o=18,c=_=>!!_&&typeof _=="object"&&_.nodeType===1,s=(_,P)=>{try{return!!(_&&P&&typeof _.contains=="function"&&c(P)&&_.contains(P))}catch{return!1}},l=_=>s(this.cardContainer,_),u=_=>{var K,J,U;let P=(J=(K=_.target)==null?void 0:K.closest)==null?void 0:J.call(K,".card-wrapper");if(c(P)&&l(P)&&!P.classList.contains("ddc-placeholder"))return!0;let D=typeof _.composedPath=="function"?_.composedPath():[];for(let ae of D)if(c(ae)&&l(ae)&&(U=ae.classList)!=null&&U.contains("card-wrapper")&&!ae.classList.contains("ddc-placeholder"))return!0;return!1},f=(_,P)=>{let D=document.createElement("div");D.className="ddc-press-ring",document.body.appendChild(D),Object.assign(D.style,{position:"fixed",left:`${_}px`,top:`${P}px`,zIndex:"100000",width:"44px",height:"44px",pointerEvents:"none",marginLeft:"-22px",marginTop:"-22px",filter:"drop-shadow(0 2px 6px rgba(0,0,0,.35))"}),D.innerHTML=`
      <svg viewBox="0 0 44 44" aria-hidden="true" style="width:44px;height:44px">
        <circle cx="22" cy="22" r="18" style="stroke:rgba(255,255,255,.45);stroke-width:4;fill:none"></circle>
        <circle class="pr-fg" cx="22" cy="22" r="18" style="stroke:var(--primary-color);stroke-width:4;fill:none;stroke-linecap:round"></circle>
        <circle cx="22" cy="22" r="2" style="fill:var(--primary-color);opacity:.95"></circle>
      </svg>`;let K=D.querySelector(".pr-fg"),J=18,U=2*Math.PI*J;return K.style.strokeDasharray=`${U}`,K.style.strokeDashoffset=`${U}`,requestAnimationFrame(()=>{K.style.transition=`stroke-dashoffset ${n}ms linear`,K.style.strokeDashoffset="0"}),{el:D,move(ae,H){D.style.left=`${ae}px`,D.style.top=`${H}px`},remove(){try{D.remove()}catch{}}}},m=null,v=null,y=0,x=0,O=null,S=()=>{m&&clearTimeout(m),m=null,v==null||v.remove(),v=null};this.__clearPressTimer=S;let A=_=>{_.pointerType==="mouse"&&_.button!==0||this._isInHaEditorPreview()||!l(_.target)||u(_)||(O=_.pointerId,y=_.clientX,x=_.clientY,this.__lastHoldX=y,this.__lastHoldY=x,v=f(y,x),m=setTimeout(()=>{var D;S();let P=!this.editMode;this._toggleEditMode(P),(D=this._toast)==null||D.call(this,`Edit mode ${P?"enabled":"disabled"}`)},n))},L=_=>{m==null||_.pointerId!==O||(v==null||v.move(_.clientX,_.clientY),(Math.abs(_.clientX-y)>o||Math.abs(_.clientY-x)>o)&&S())},C=_=>{_.pointerId===O&&(S(),O=null)},T=_=>{if(m)return _.preventDefault(),_.stopPropagation(),!1},M=_=>{var D;if(this._isInHaEditorPreview()||!l(_.target)||u(_))return;let P=!this.editMode;this._toggleEditMode(P),(D=this._toast)==null||D.call(this,`Edit mode ${P?"enabled":"disabled"}`)};e.addEventListener("pointerdown",A),window.addEventListener("pointermove",L,{passive:!0}),window.addEventListener("pointerup",C,{passive:!0}),window.addEventListener("pointercancel",C,{passive:!0}),window.addEventListener("contextmenu",T),e.addEventListener("dblclick",M),this.__lpHandlers={onPointerDown:A,onPointerMove:L,onPointerUpOrCancel:C,onContextMenu:T,onDblClick:M}}_isLayoutEmpty(){let e=this.cardContainer;return e?e.querySelectorAll(".card-wrapper:not(.ddc-placeholder)").length===0:!0}_syncEmptyStateUI(){let e=this._isLayoutEmpty();if(this.addButton){let o=this.editMode||e;this.addButton.style.display=o?"inline-block":"none",this.addButton.classList.toggle("cta-empty",!this.editMode&&e)}let n=o=>o&&(o.style.display=this.editMode?"inline-block":"none");n(this.reloadBtn),n(this.diagBtn),n(this.exitEditBtn),n(this.exportBtn),n(this.importBtn),n(this.exploreBtn),n(this.storeBadge),n(this.applyLayoutBtn)}_updateApplyBtn(){this.applyLayoutBtn&&(this.applyLayoutBtn.disabled=!this.__dirty)}_markDirty(e=""){var n;this.__dirty=!0,this._updateApplyBtn(),(n=this._dbgPush)==null||n.call(this,"dirty","Marked dirty",{reason:e})}_playEditRipple(e=null,n=null){let o=this.cardContainer;if(!o)return;let c=o.getBoundingClientRect(),s=e==null?c.left+c.width/2:e,l=n==null?c.top+c.height/2:n,u=s-c.left,f=l-c.top,m=document.createElement("div");m.className="ddc-ripple-veil",m.style.setProperty("--rip-x",`${u}px`),m.style.setProperty("--rip-y",`${f}px`),o.appendChild(m),setTimeout(()=>m.remove(),450)}_initInteract(){this.cardContainer.querySelectorAll(".card-wrapper").forEach(n=>this._initCardInteract(n))}_initCardInteract(e){if(!window.interact||e.dataset.placeholder)return;let n=this.gridSize,o=!!this.dragLiveSnap,s=[window.interact.modifiers.restrictRect({restriction:"parent",endOnly:!0})];if(this.dragLiveSnap){let l=window.interact.snappers.grid({x:this.gridSize,y:this.gridSize});s.push(window.interact.modifiers.snap({targets:[l],range:1/0,offset:"startCoords"}))}window.interact(e).draggable({enabled:this.editMode,inertia:!1,modifiers:s,listeners:{start:l=>{this._selection.has(e)||(!(l!=null&&l.shiftKey)&&!(l!=null&&l.ctrlKey)&&!(l!=null&&l.metaKey)&&this._clearSelection(),this._toggleSelection(e,!0));let u=Array.from(this._selection);this.__groupDrag={leader:e,members:u,startRaw:new Map(u.map(m=>[m,{x:parseFloat(m.getAttribute("data-x-raw"))||parseFloat(m.getAttribute("data-x"))||0,y:parseFloat(m.getAttribute("data-y-raw"))||parseFloat(m.getAttribute("data-y"))||0,w:parseFloat(m.style.width)||m.getBoundingClientRect().width,h:parseFloat(m.style.height)||m.getBoundingClientRect().height}]))},this.__collisionOriginals=new Map,this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)").forEach(m=>{let v=parseFloat(m.getAttribute("data-x-raw"))||parseFloat(m.getAttribute("data-x"))||0,y=parseFloat(m.getAttribute("data-y-raw"))||parseFloat(m.getAttribute("data-y"))||0;this.__collisionOriginals.set(m,{x:v,y})}),u.forEach(m=>{m.classList.add("dragging"),m.getAttribute("data-x-raw")===null&&m.setAttribute("data-x-raw",m.getAttribute("data-x")||"0"),m.getAttribute("data-y-raw")===null&&m.setAttribute("data-y-raw",m.getAttribute("data-y")||"0")})},move:l=>{if(!this.__groupDrag)return;let u=this.gridSize,f=!!this.dragLiveSnap,m=this.__groupDrag.leader,v=this.__groupDrag.startRaw.get(m),y=(parseFloat(m.getAttribute("data-x-raw"))||v.x)+l.dx,x=(parseFloat(m.getAttribute("data-y-raw"))||v.y)+l.dy,O=y-v.x,S=x-v.y,A=this.__groupDrag.members.map(L=>{let C=this.__groupDrag.startRaw.get(L),T=C.x+O,M=C.y+S,_=f?Math.round(T/u)*u:T,P=f?Math.round(M/u)*u:M;return{el:L,rawX:T,rawY:M,snapX:_,snapY:P,w:C.w,h:C.h}});this.disableOverlap&&this._pushCardsOutOfTheWay(A,O,S,f,u),m.setAttribute("data-x-raw",String(y)),m.setAttribute("data-y-raw",String(x));for(let L of A)L.el.setAttribute("data-x-raw",String(L.rawX)),L.el.setAttribute("data-y-raw",String(L.rawY)),this._setCardPosition(L.el,L.snapX,L.snapY);this._resizeContainer()},end:l=>{if(!this.__groupDrag)return;let u=this.gridSize,f=this.__groupDrag.members.map(m=>{let v=parseFloat(m.getAttribute("data-x-raw"))||parseFloat(m.getAttribute("data-x"))||0,y=parseFloat(m.getAttribute("data-y-raw"))||parseFloat(m.getAttribute("data-y"))||0,x=Math.round(v/u)*u,O=Math.round(y/u)*u,S=parseFloat(m.style.width)||m.getBoundingClientRect().width,A=parseFloat(m.style.height)||m.getBoundingClientRect().height;return{el:m,rawX:v,rawY:y,snapX:x,snapY:O,w:S,h:A}});this.disableOverlap&&this._pushCardsOutOfTheWay(f,0,0,!1,u);for(let m of f)this._setCardPosition(m.el,m.snapX,m.snapY),m.el.setAttribute("data-x-raw",String(m.snapX)),m.el.setAttribute("data-y-raw",String(m.snapY));for(let m of this.__groupDrag.members)m.classList.remove("dragging");this._resizeContainer(),this._isContainerFixed()&&this._clampAllCardsInside(),this._queueSave(this.__groupDrag.members.length>1?"group-drag-end":"drag-end"),this.__groupDrag=null,this.__collisionOriginals=null}}}),window.interact(e).resizable({enabled:this.editMode,edges:{right:".resize-handle",bottom:".resize-handle"},inertia:!1,listeners:{move:l=>{let u=this.gridSize,f=!!this.dragLiveSnap,m=parseFloat(e.style.width)||e.getBoundingClientRect().width,v=parseFloat(e.style.height)||e.getBoundingClientRect().height,{width:y,height:x}=l.rect,O=f?Math.max(u,Math.round(y/u)*u):y,S=f?Math.max(u,Math.round(x/u)*u):x,A=parseFloat(e.getAttribute("data-x"))||0,L=parseFloat(e.getAttribute("data-y"))||0,C=O,T=S;if(this._isContainerFixed()){let{w:_,h:P}=this._getContainerSize();C=Math.min(O,Math.max(this.gridSize,_-A)),T=Math.min(S,Math.max(this.gridSize,P-L))}let M=[this._rectFor(e,A,L,C,T)];this.disableOverlap&&this._anyCollisionFor(M,new Set([e]))||(e.style.width=`${C}px`,e.style.height=`${T}px`,this._resizeContainer())},end:()=>{let l=this.gridSize,u=parseFloat(e.style.width)||e.getBoundingClientRect().width,f=parseFloat(e.style.height)||e.getBoundingClientRect().height,m=Math.max(l,Math.round(u/l)*l),v=Math.max(l,Math.round(f/l)*l),y=parseFloat(e.getAttribute("data-x"))||0,x=parseFloat(e.getAttribute("data-y"))||0;if(this._isContainerFixed()){let{w:S,h:A}=this._getContainerSize();m=Math.min(m,Math.max(l,S-y)),v=Math.min(v,Math.max(l,A-x))}let O=[this._rectFor(e,y,x,m,v)];this.disableOverlap&&this._anyCollisionFor(O,new Set([e]))||(e.style.width=`${m}px`,e.style.height=`${v}px`),this._resizeContainer(),this._isContainerFixed()&&this._clampAllCardsInside(),this._queueSave("resize-end")}}}),e.addEventListener("mousedown",l=>{this.editMode&&(l.target.closest(".resize-handle")||l.target.closest(".delete-handle")||l.target.closest(".chip")||(l.shiftKey||l.ctrlKey||l.metaKey?(l.stopPropagation(),this._toggleSelection(e)):this._selection.has(e)||(this._clearSelection(),this._toggleSelection(e,!0))))})}async _createCard(e){let o=(await this._helpersPromise||await window.loadCardHelpers()).createCardElement(e);if(o.hass=this.hass,e.type==="custom:mod-card"&&(await new Promise(c=>setTimeout(c,0)),o.setConfig&&typeof o.setConfig=="function"))try{o.setConfig(e)}catch{}return o}_makeWrapper(e){let n=document.createElement("div");n.classList.add("card-wrapper"),n.dataset.tabId=this._normalizeTabId(this.activeTab||this.defaultTab),this.editMode&&n.classList.add("editing"),n.style.zIndex||(n.style.zIndex=String(this._highestZ()+1));let o=document.createElement("div");o.className="chip",o.innerHTML=`
      <button class="mini" data-act="edit" title="Edit" aria-label="Edit">
        <ha-icon icon="mdi:pencil"></ha-icon><span>Edit</span>
      </button>
      <button class="mini" data-act="duplicate" title="Duplicate" aria-label="Duplicate">
        <ha-icon icon="mdi:content-copy"></ha-icon><span>Duplicate</span>
      </button>
      <button class="mini pill" data-act="front" title="Bring forward" aria-label="Bring forward">
        <ha-icon icon="mdi:arrange-bring-forward"></ha-icon>
      </button>
      <button class="mini pill" data-act="back" title="Send backward" aria-label="Send backward">
        <ha-icon icon="mdi:arrange-send-backward"></ha-icon>
      </button>
      <button class="mini pill" data-act="front-most" title="Bring to front" aria-label="Bring to front">
        <ha-icon icon="mdi:arrange-bring-to-front"></ha-icon>
      </button>
      <button class="mini pill" data-act="back-most" title="Send to back" aria-label="Send to back">
        <ha-icon icon="mdi:arrange-send-to-back"></ha-icon>
      </button>
    `;let c=document.createElement("div");c.className="delete-handle",c.innerHTML='<ha-icon icon="mdi:close-thick"></ha-icon>',c.addEventListener("click",u=>{var f,m;u.stopPropagation(),this._selection.size>1&&this._selection.has(n)?(Array.from(this._selection).forEach(y=>y.remove()),this._clearSelection(),this._resizeContainer(),this._queueSave("delete-multi"),(f=this._ensurePlaceholderIfEmpty)==null||f.call(this)):(n.remove(),this._resizeContainer(),this._queueSave("delete"),(m=this._ensurePlaceholderIfEmpty)==null||m.call(this))});try{this._addTabSelectorToChip(n,n.dataset.tabId)}catch{}o.addEventListener("click",async u=>{var m,v,y,x,O;u.stopPropagation();let f=(y=(v=(m=u.target)==null?void 0:m.closest("button"))==null?void 0:v.dataset)==null?void 0:y.act;if(f){if(f==="delete")this._selection.size>1&&this._selection.has(n)?(Array.from(this._selection).forEach(A=>A.remove()),this._clearSelection(),this._resizeContainer(),this._queueSave("delete-multi"),this._ensurePlaceholderIfEmpty()):(n.remove(),this._resizeContainer(),this._queueSave("delete"),this._ensurePlaceholderIfEmpty());else if(f==="duplicate"||f==="copy"){let S=this._selection.size>1&&this._selection.has(n)?Array.from(this._selection):[n];for(let A of S){let L=this._extractCardConfig(A.firstElementChild)||{},C=await this._createCard(L),T=this._makeWrapper(C);T.style.width=A.style.width,T.style.height=A.style.height;let M=(parseFloat(A.getAttribute("data-x"))||0)+this.gridSize,_=(parseFloat(A.getAttribute("data-y"))||0)+this.gridSize;this._setCardPosition(T,M,_),T.style.zIndex=String(this._highestZ()+1);try{let P=(x=A.dataset)==null?void 0:x.tabId;P&&(T.dataset.tabId=P)}catch{}this.cardContainer.appendChild(T);try{(O=this._addTabSelectorToChip)==null||O.call(this,T,T.dataset.tabId)}catch{}try{this._rebuildOnce(T.firstElementChild)}catch{}this._initCardInteract(T)}this._resizeContainer(),this._queueSave("duplicate")}else if(f==="front")this._adjustZ(n,1);else if(f==="back")this._adjustZ(n,-1);else if(f==="front-most"){let S=this._selection.size>1&&this._selection.has(n)?Array.from(this._selection):[n];S.sort((L,C)=>{let T=parseInt(L.style.zIndex||"1",10),M=parseInt(C.style.zIndex||"1",10);return T-M});let A=this._highestZ();for(let L of S)A+=1,L.style.zIndex=String(A);this._queueSave("z-change")}else if(f==="back-most"){let S=this._selection.size>1&&this._selection.has(n)?Array.from(this._selection):[n];S.sort((C,T)=>{let M=parseInt(C.style.zIndex||"1",10);return parseInt(T.style.zIndex||"1",10)-M});let A=1/0;this.cardContainer.querySelectorAll(".card-wrapper").forEach(C=>{let T=parseInt(C.style.zIndex||"1",10);T<A&&(A=T)}),isFinite(A)||(A=1);let L=A;for(let C of S)L-=1,C.style.zIndex=String(Math.max(1,L));this._queueSave("z-change")}else if(f==="edit"){let S=this._extractCardConfig(n.firstElementChild)||{};await this._openSmartPicker("edit",S,async A=>{var T,M,_;let L=n.firstElementChild,C=await this._createCard(A);try{n.dataset.cfg=JSON.stringify(A),(T=this._hasCardModDeep)!=null&&T.call(this,A)?n.dataset.needsCardMod="true":delete n.dataset.needsCardMod}catch{}n.replaceChild(C,L),await Tr();try{if(C.hass=this.hass,(M=C.requestUpdate)==null||M.call(C),C.updateComplete)try{await C.updateComplete}catch{}}catch{}try{this._rebuildOnce(C)}catch{}try{C.dispatchEvent(new Event("ll-rebuild",{bubbles:!0,composed:!0}))}catch{}(_=this._resizeContainer)==null||_.call(this);try{clearTimeout(this._saveTimer),await this._saveLayout(!0)}catch(P){console.warn("Save before reload failed",P)}window.location.reload()})}}});let s=document.createElement("div");s.className="shield";let l=document.createElement("div");l.classList.add("resize-handle"),this.editMode||(l.style.display="none"),l.title="Resize",l.innerHTML='<ha-icon icon="mdi:resize-bottom-right"></ha-icon>';try{let u=e._config||e.config;u&&typeof u=="object"&&Object.keys(u).length&&(n.dataset.cfg=JSON.stringify(u),this._hasCardModDeep(u)&&(n.dataset.needsCardMod="true"))}catch{}n.append(e,s,o,c,l);try{this._rebuildOnce(e)}catch{}return n}_makePlaceholderAt(e=0,n=0,o=400,c=400){let s=document.createElement("div");s.classList.add("card-wrapper","ddc-placeholder"),s.dataset.placeholder="1",this.editMode&&s.classList.add("editing"),this._setCardPosition(s,e,n),s.style.width=`${o}px`,s.style.height=`${c}px`,s.style.zIndex=String(this._highestZ()+1);let l=document.createElement("div");l.className="ddc-placeholder-inner",l.setAttribute("aria-hidden","true");let u=document.createElement("div");u.className="ddc-hero";let f=this.heroImage;if(f){let x=document.createElement("img");x.src=f,x.alt="",u.appendChild(x)}let m=document.createElement("div");m.className="ddc-title",m.textContent="Drag & Drop Card";let v=document.createElement("div");v.className="ddc-sub",v.textContent="Hold me / double click me to enter Edit mode",u.append(m,v),l.appendChild(u),s.addEventListener("dblclick",x=>{x.stopPropagation(),this._toggleEditMode(!0)});let y=document.createElement("div");return y.className="shield",s.append(l,y),s}_processCardModOnce(){var n;if(this._cardModProcessed)return;this._cardModProcessed=!0,(((n=this.cardContainer)==null?void 0:n.querySelectorAll('[data-needs-card-mod="true"]'))||[]).forEach(o=>{let c=o.firstElementChild;if(!c)return;let s=c._config||c.config;if(s){if(s.type==="custom:mod-card")setTimeout(()=>{if(c.updateComplete)c.updateComplete.then(()=>{c.requestUpdate()});else if(c.setConfig)try{c.setConfig({...s})}catch{}},100);else if(s.card_mod&&c.setConfig)try{c.setConfig({...s})}catch{}}})}_showEmptyPlaceholder(){if(this.cardContainer.querySelector(".ddc-placeholder"))return;let e=this._makePlaceholderAt(0,0,200,200);this.cardContainer.appendChild(e),this._resizeContainer(),this._syncEmptyStateUI()}_hideEmptyPlaceholder(){this.cardContainer.querySelectorAll(".ddc-placeholder").forEach(e=>e.remove())}_ensurePlaceholderIfEmpty(){var n;this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)").length===0&&this._showEmptyPlaceholder(),(n=this._applyAutoScale)==null||n.call(this),this._syncEmptyStateUI()}_adjustZ(e,n){let c=parseInt(e.style.zIndex||"1",10)+n;c=Math.max(1,Math.min(9999,c)),e.style.zIndex=String(c),this._queueSave("z-change")}_highestZ(){let e=0;return this.cardContainer.querySelectorAll(".card-wrapper").forEach(n=>{let o=parseInt(n.style.zIndex||"0",10);o>e&&(e=o)}),e}_setCardPosition(e,n,o){let c=Math.round(n),s=Math.round(o);e.style.transform=`translate3d(${c}px, ${s}px, 0)`,e.setAttribute("data-x",String(c)),e.setAttribute("data-y",String(s)),e.setAttribute("data-x-raw",String(c)),e.setAttribute("data-y-raw",String(s))}_computeDesignSize(){let e=this.cardContainer;if(!e)return{w:1,h:1};if(this._isContainerFixed()){let{w:l,h:u}=this._resolveFixedSize();return{w:Math.max(1,l),h:Math.max(1,u)}}let n=0,o=0,c=Array.from(e.querySelectorAll(".card-wrapper"));if(!c.length){let l=e.getBoundingClientRect();return{w:Math.max(1,l.width||1),h:Math.max(1,l.height||1)}}for(let l of c){let u=parseFloat(l.getAttribute("data-x-raw")||l.getAttribute("data-x")||"0")||0,f=parseFloat(l.getAttribute("data-y-raw")||l.getAttribute("data-y")||"0")||0,m=parseFloat(l.style.width)||l.getBoundingClientRect().width||0,v=parseFloat(l.style.height)||l.getBoundingClientRect().height||0,y=u+m,x=f+v;y>n&&(n=y),x>o&&(o=x)}let s=Math.max(1,this.gridSize||10);return n=Math.ceil(n/s)*s,o=Math.ceil(o/s)*s,{w:Math.max(1,n),h:Math.max(1,o)}}_startScaleWatch(){if(!this.autoResizeCards||this.__scaleRAF)return;let e=()=>{var c,s;if(!this.autoResizeCards){this.__scaleRAF=null;return}let n=this.getBoundingClientRect(),o=Math.max(1,n.width||0);o!==this.__lastScaleW&&(this.__lastScaleW=o,String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(c=this._applyAutoFillNoScale)==null||c.call(this):(s=this._applyAutoScale)==null||s.call(this)),this.__scaleRAF=requestAnimationFrame(e)};this.__scaleRAF=requestAnimationFrame(e)}_stopScaleWatch(){if(this.__scaleRAF){try{cancelAnimationFrame(this.__scaleRAF)}catch{}this.__scaleRAF=null}}_applyAutoScale(){var u,f,m,v,y,x,O,S,A,L,C,T,M,_,P,D,K,J,U,ae,H;let e="dynamic";try{if(e=String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase(),e==="auto"){(u=this._applyAutoFillNoScale)==null||u.call(this),this.removeAttribute("ddc-fixed-ui"),(m=(f=this.style)==null?void 0:f.removeProperty)==null||m.call(f,"--ddc-ui-width");return}}catch{}let n=this.cardContainer;if(!n)return;try{(this.autoResizeCards||e==="auto")&&typeof this._ensureScaleWrapper=="function"&&this._ensureScaleWrapper()}catch{}if(!this.autoResizeCards){let G=typeof this._computeDesignSize=="function"?this._computeDesignSize():{w:n.offsetWidth||1,h:n.offsetHeight||1};if(e==="dynamic"){try{(v=this._computeHaSidebarGutters_)==null||v.call(this)}catch{}this.setAttribute("ddc-fixed-ui",""),(x=(y=this.style)==null?void 0:y.setProperty)==null||x.call(y,"--ddc-ui-width",`${G.w}px`)}else this.removeAttribute("ddc-fixed-ui"),(S=(O=this.style)==null?void 0:O.removeProperty)==null||S.call(O,"--ddc-ui-width");let ee=`${G.w}px`,ue=`${G.h}px`,We=n.style.width===ee,fe=n.style.height===ue,Oe=n.style.transform==="scale(1)";if(!(We&&fe&&Oe)&&(n.style.width=ee,n.style.height=ue,n.style.transform="scale(1)",n.style.transformOrigin="top left",n.style.position="absolute",n.style.top="0",n.style.left="0",this.__scaleOuter)){let Ce=this.parentElement&&((L=(A=this.parentElement).getBoundingClientRect)==null?void 0:L.call(A).width)||this.offsetParent&&((T=(C=this.offsetParent).getBoundingClientRect)==null?void 0:T.call(C).width)||this.getBoundingClientRect&&this.getBoundingClientRect().width||this.offsetWidth||G.w,ke=`${Math.max(1,Ce)}px`,Xe=`${Math.max(1,G.h)}px`;this.__scaleOuter.style.width!==ke&&(this.__scaleOuter.style.width=ke),this.__scaleOuter.style.height!==Xe&&(this.__scaleOuter.style.height=Xe)}try{(M=this._syncTabsWidth_)==null||M.call(this)}catch{}return}this.removeAttribute("ddc-fixed-ui"),(P=(_=this.style)==null?void 0:_.removeProperty)==null||P.call(_,"--ddc-ui-width");let o=typeof this._computeDesignSize=="function"?this._computeDesignSize():{w:n.offsetWidth||1,h:n.offsetHeight||1},c=this.parentElement&&((K=(D=this.parentElement).getBoundingClientRect)==null?void 0:K.call(D).width)||this.offsetParent&&((U=(J=this.offsetParent).getBoundingClientRect)==null?void 0:U.call(J).width)||this.getBoundingClientRect&&this.getBoundingClientRect().width||this.offsetWidth||o.w,s=Math.max(1,c),l=Math.min(s/Math.max(1,o.w),1);this.__scaleOuter&&(this.__scaleOuter.style.width=`${s}px`,this.__scaleOuter.style.height=`${Math.max(1,o.h*l)}px`),n.style.width=`${o.w}px`,n.style.height=`${o.h}px`,n.style.transform=`scale(${l})`,n.style.transformOrigin="top left",n.style.position="absolute",n.style.top="0",n.style.left="0";try{(ae=this._syncTabsWidth_)==null||ae.call(this)}catch{}try{(H=this._layoutYtBackground_)==null||H.call(this)}catch{}}_applyAutoFillNoScale(){var e,n,o,c,s,l;if(!this.__applyingAutoFill){this.__applyingAutoFill=!0;try{try{(e=this._ensureScaleWrapper)==null||e.call(this)}catch{}let u=this.__scaleOuter||((o=(n=this.shadowRoot)==null?void 0:n.querySelector)==null?void 0:o.call(n,".ddc-scale-outer"))||this,f=this.cardContainer||((s=(c=this.shadowRoot)==null?void 0:c.querySelector)==null?void 0:s.call(c,"#cardContainer"));if(!u||!f)return;u.style.overflow="hidden",u.style.overflowX="auto",u.style.overflowY="hidden",u.style.width="100%";let m=u.getBoundingClientRect(),v=Math.max(1,Math.round(m.width||0)),y=Math.max(1,Math.round(m.height||0));if(y<150){let P=Math.max(0,Math.round(m.top||0)),D=Math.max(1,window.innerHeight||document.documentElement.clientHeight||0),K=Math.max(1,D-P-8);Math.abs(K-y)>4&&(u.style.height=K+"px",m=u.getBoundingClientRect(),v=Math.max(1,Math.round(m.width||0)),y=Math.max(1,Math.round(m.height||0)))}let x=0,O=0,S=Array.from(f.querySelectorAll(".card-wrapper"));if(S.length){let P=f.getBoundingClientRect();for(let D of S){let K=D.getBoundingClientRect(),J=K.left-P.left+K.width,U=K.top-P.top+K.height;J>x&&(x=J),U>O&&(O=U)}}else x=f.scrollWidth||f.offsetWidth||v,O=f.scrollHeight||f.offsetHeight||y;let A=Number(this.gridSize||1)||1,L=Math.max(1,Math.round(Math.ceil(x/A)*A)),C=Math.max(1,Math.round(Math.ceil(O/A)*A)),T=v>L?v:L,M=y>C?y:C;if(f.style.transform="none",f.style.transformOrigin="left top",f.style.width=`${T}px`,f.style.height=`${M}px`,u){let P=0;try{let J=u.getBoundingClientRect();P=Math.max(0,Math.round(J.top||0))}catch{}let D=Math.max(1,window.innerHeight||document.documentElement.clientHeight||0),K=Math.max(1,D-P-8);u.style.height=`${M}px`}f.style.position=f.style.position||"absolute",f.style.top=f.style.top||"0",f.style.left=f.style.left||"0";let _=this.tabsBar;_&&this.tabsPosition!=="left"&&(_.style.width="100%",_.style.maxWidth="100%")}finally{try{(l=this._layoutYtBackground_)==null||l.call(this)}catch{}requestAnimationFrame(()=>{this.__applyingAutoFill=!1})}}}_resizeContainer(){var s;let e=this.cardContainer;if(!e||this._isContainerFixed())return;let n=Array.from(e.querySelectorAll(".card-wrapper")),o=0,c=0;n.forEach(l=>{let u=l.getBoundingClientRect(),f=e.getBoundingClientRect(),m=u.left-f.left+u.width,v=u.top-f.top+u.height;o=Math.max(o,m),c=Math.max(c,v)}),e.style.width=`${Math.ceil(o/this.gridSize)*this.gridSize||100}px`,e.style.height=`${Math.ceil(c/this.gridSize)*this.gridSize||100}px`;try{(s=this._syncTabsWidth_)==null||s.call(this)}catch{}}_pushCardsOutOfTheWay(e,n,o,c,s){if(!this.__collisionOriginals)return;let l=new Set(e.map(C=>C.el)),u=Array.from(this.cardContainer.querySelectorAll(".card-wrapper")).filter(C=>!C.dataset.placeholder),f=this._isContainerFixed(),{w:m,h:v}=this._getContainerSize();for(let C of u){if(l.has(C))continue;let T=this.__collisionOriginals.get(C);if(T){C.setAttribute("data-x-raw",String(T.x)),C.setAttribute("data-y-raw",String(T.y));let M=c?Math.round(T.x/s)*s:T.x,_=c?Math.round(T.y/s)*s:T.y;this._setCardPosition(C,M,_)}}let y=e.map(C=>({x:C.snapX,y:C.snapY,w:C.w,h:C.h})),x=new Map,O=new Map;for(let C of u){let T=parseFloat(C.style.width)||C.getBoundingClientRect().width,M=parseFloat(C.style.height)||C.getBoundingClientRect().height;O.set(C,{w:T,h:M})}let S=n>0?1:n<0?-1:0,A=o>0?1:o<0?-1:0,L=Math.abs(n)>=Math.abs(o);for(let C of u){if(l.has(C))continue;let T=this.__collisionOriginals.get(C);if(!T)continue;let{x:M,y:_}=T,{w:P,h:D}=O.get(C),K=!1;for(let J of y)if(this._rectsOverlap({x:J.x,y:J.y,w:J.w,h:J.h},{x:M,y:_,w:P,h:D})){K=!0,L&&S!==0?M=S>0?J.x+J.w:J.x-P:!L&&A!==0?_=A>0?J.y+J.h:J.y-D:M=J.x+J.w;break}if(K){let J=0,U=L?S!==0?S*s:s:0,ae=L?0:A!==0?A*s:s;for(;J<100;){let H={x:M,y:_,w:P,h:D},G=!1;for(let ee of y)if(this._rectsOverlap(H,ee)){G=!0;break}if(!G){for(let[,ee]of x)if(this._rectsOverlap(H,ee)){G=!0;break}}if(!G&&f&&(M<0||_<0||M+P>m||_+D>v)&&(G=!0),!G)break;M+=U,_+=ae,J++}f&&(M=Math.max(0,Math.min(M,Math.max(0,m-P))),_=Math.max(0,Math.min(_,Math.max(0,v-D))))}x.set(C,{x:M,y:_,w:P,h:D}),y.push({x:M,y:_,w:P,h:D})}for(let[C,T]of x){C.setAttribute("data-x-raw",String(T.x)),C.setAttribute("data-y-raw",String(T.y));let M=c?Math.round(T.x/s)*s:T.x,_=c?Math.round(T.y/s)*s:T.y;this._setCardPosition(C,M,_)}}_rectFor(e,n=null,o=null,c=null,s=null){let l=n!=null?n:parseFloat(e.getAttribute("data-x"))||0,u=o!=null?o:parseFloat(e.getAttribute("data-y"))||0,f=c!=null?c:parseFloat(e.style.width)||e.getBoundingClientRect().width||0,m=s!=null?s:parseFloat(e.style.height)||e.getBoundingClientRect().height||0;return{x:l,y:u,w:f,h:m,el:e}}_rectsOverlap(e,n,o=.5){return!(e.x+e.w<=n.x+o||n.x+n.w<=e.x+o||e.y+e.h<=n.y+o||n.y+n.h<=e.y+o)}_anyCollisionFor(e,n){let o=Array.from(this.cardContainer.querySelectorAll(".card-wrapper")).filter(s=>!n.has(s)&&!s.dataset.placeholder);if(!o.length)return!1;let c=o.map(s=>this._rectFor(s));for(let s of e)for(let l of c)if(this._rectsOverlap(s,l))return!0;return!1}_extractCardConfig(e){var o;if(!e)return{};let n=e._config||e.config;if(n&&typeof n=="object"&&Object.keys(n).length)return n;try{let c=e.closest?e.closest(".card-wrapper"):null,s=(o=c==null?void 0:c.dataset)==null?void 0:o.cfg;if(s){let l=JSON.parse(s);if(l&&typeof l=="object")return l}}catch{}return{}}async _openCardManager(){await this._openSmartPicker("add")}_catalog(){return[{id:"favorites",name:"Favorites",items:[]},{id:"recent",name:"Recent",items:[]},{id:"basics",name:"Basics",items:[{type:"entities",name:"Entities",icon:"mdi:format-list-bulleted"},{type:"entity",name:"Entity",icon:"mdi:checkbox-blank-circle-outline"},{type:"tile",name:"Tile",icon:"mdi:view-grid-outline"},{type:"button",name:"Button",icon:"mdi:gesture-tap-button"},{type:"glance",name:"Glance",icon:"mdi:eye-outline"},{type:"markdown",name:"Markdown",icon:"mdi:language-markdown"},{type:"custom_card",name:"Custom Card",icon:"mdi:puzzle-outline"}]},{id:"sensors",name:"Sensors",items:[{type:"sensor",name:"Sensor",icon:"mdi:antenna"},{type:"gauge",name:"Gauge",icon:"mdi:gauge"},{type:"history-graph",name:"History graph",icon:"mdi:chart-line"},{type:"statistics-graph",name:"Statistics graph",icon:"mdi:chart-bar"}]},{id:"visual",name:"Visual",items:[{type:"picture-entity",name:"Picture entity",icon:"mdi:image-outline"},{type:"picture-glance",name:"Picture glance",icon:"mdi:image-multiple-outline"},{type:"weather-forecast",name:"Weather",icon:"mdi:weather-partly-cloudy"},{type:"map",name:"Map",icon:"mdi:map"},{type:"iframe",name:"iFrame",icon:"mdi:application"}]},{id:"controls",name:"Controls",items:[{type:"light",name:"Light",icon:"mdi:lightbulb-outline"},{type:"thermostat",name:"Thermostat",icon:"mdi:thermostat"},{type:"media-control",name:"Media control",icon:"mdi:play-circle-outline"},{type:"alarm-panel",name:"Alarm panel",icon:"mdi:shield-home-outline"},{type:"area",name:"Area",icon:"mdi:map-marker"}]}]}async _getEditorElementForType(e,n){try{console.info("[ddc:editor] Requesting editor element",{type:e,cfg:n})}catch{}let o=await this._helpersPromise||await window.loadCardHelpers();try{typeof e=="string"&&e&&!e.startsWith("custom:")&&e!=="custom_card"&&await this._ensureCardModuleLoaded(e,n)}catch{}if(typeof e=="string"&&e==="entity")try{return await this._getEntityCardEditor(n||{})}catch(m){console.warn("[ddc:editor] Custom entity editor failed",m)}let c=async()=>{try{if(o.getCardElementClass)return await o.getCardElementClass(e);let m;if(n&&typeof n=="object")m={type:e,...n};else{let y;try{y=await this._getStubConfigForType(e)}catch{}m=y&&typeof y=="object"?{...y}:{type:e}}let v=o.createCardElement(m);return(v==null?void 0:v.constructor)||null}catch{return null}};try{let m=await c();if(m){if(typeof m.getConfigElement=="function"){let v=await m.getConfigElement();if(v){try{console.info("[ddc:editor] Found static class editor",{type:e})}catch{}return v}}if(typeof m.getConfigForm=="function")try{let v=await m.getConfigForm();if(v&&v.schema){try{await customElements.whenDefined("ha-form")}catch{}let y=document.createElement("ha-form");y.hass=this.hass,y.schema=Array.isArray(v.schema)?v.schema.map(x=>({...x})):v.schema,typeof v.computeLabel=="function"&&(y.computeLabel=v.computeLabel.bind(m)),typeof v.computeHelper=="function"&&(y.computeHelper=v.computeHelper.bind(m)),y.data={...n},y.addEventListener("value-changed",x=>{});try{console.info("[ddc:editor] Generated form editor via getConfigForm",{type:e})}catch{}return y}}catch{}}}catch{}if(typeof e=="string"&&(e.startsWith("custom:")||e==="custom_card"))try{let m;try{m=await this._getStubConfigForType(e)}catch{}let v=m&&typeof m=="object"?{...m}:{type:e},y=o.createCardElement(v);if(y.hass=this.hass,typeof y.getConfigElement=="function"){let x=await y.getConfigElement();if(x){try{console.info("[ddc:editor] Found instance-level editor",{type:e})}catch{}return x}}}catch{}let s=String(e).replace(/^custom:/,""),u=(Array.isArray(window.customCards)?window.customCards:[]).find(m=>(m==null?void 0:m.type)===s||(m==null?void 0:m.type)===e||(m==null?void 0:m.type)===`custom:${s}`),f=[];u!=null&&u.editor&&f.push(u.editor),f.push(`${s}-editor`,`${s}-config-editor`),s&&typeof s=="string"&&f.push(`hui-${s}-card-editor`);for(let m of f)if(!(!m||typeof m!="string"))for(let v of[0,100,300,700,1500,3e3])try{if(customElements.get(m)||await Promise.race([customElements.whenDefined(m),new Promise(y=>setTimeout(y,v))]),customElements.get(m)){try{console.info("[ddc:editor] Found editor by tag",{type:e,tag:m})}catch{}return document.createElement(m)}}catch{}return null}async _ensureCardModuleLoaded(e,n){try{let o=await this._helpersPromise||await window.loadCardHelpers(),c;if(n&&typeof n=="object")c={type:e,...n};else{let u;try{u=await this._getStubConfigForType(e)}catch{}c=u&&typeof u=="object"?{...u}:{type:e}}let s=o.createCardElement(c);s.hass=this.hass;let l=document.createElement("div");l.style.cssText="position:fixed;left:-9999px;top:-9999px;opacity:0;pointer-events:none;",l.appendChild(s),document.body.appendChild(l),await new Promise(u=>requestAnimationFrame(u)),l.remove();try{console.info("[ddc:editor] Warmed card module",{type:e})}catch{}}catch{}}_ensureOverlayZFix(){if(document.querySelector("style[data-ddc-overlay-fix]"))return;let e=document.createElement("style");e.setAttribute("data-ddc-overlay-fix",""),e.textContent=`
      /* Make common HA overlays float above our modal */
      vaadin-combo-box-overlay,
      vaadin-overlay-backdrop,
      mwc-menu-surface,
      .mdc-menu-surface--open {
        z-index: 1000000 !important;
      }
    `,document.head.appendChild(e)}_customCardsFromRegistry(){return(Array.isArray(window.customCards)?window.customCards:[]).map(n=>{var o;return{type:(o=n==null?void 0:n.type)!=null&&o.startsWith("custom:")?n.type:`custom:${n==null?void 0:n.type}`,name:(n==null?void 0:n.name)||(n==null?void 0:n.type)||"Custom card",icon:"mdi:puzzle-outline",description:(n==null?void 0:n.description)||"",editorTag:(n==null?void 0:n.editor)||null}}).filter(n=>typeof n.type=="string"&&n.type.startsWith("custom:"))}_schemaForType(e){let n=c=>c,o=[];return{entities:n({fields:[{key:"entities",type:"entities",multi:!0,domains:o,label:"Entities"}]}),entity:n({fields:[{key:"entity",type:"entity",multi:!1,domains:o,label:"Entity"}]}),sensor:n({fields:[{key:"entity",type:"entity",multi:!1,domains:["sensor"],label:"Sensor"},{key:"name",type:"text",label:"Name (optional)"}]}),gauge:n({fields:[{key:"entity",type:"entity",multi:!1,domains:["sensor","number","input_number"],label:"Numeric entity"},{key:"min",type:"number",label:"Min",step:"any"},{key:"max",type:"number",label:"Max",step:"any"}]}),"history-graph":n({fields:[{key:"entities",type:"entities",multi:!0,domains:o,label:"Entities (multiselect)"},{key:"hours_to_show",type:"number",label:"Hours to show",default:24}]}),"statistics-graph":n({fields:[{key:"entities",type:"entities",multi:!0,domains:["sensor","number","input_number"],label:"Entities (multiselect)"},{key:"chart_type",type:"select",options:["line","bar"],label:"Chart type",default:"line"},{key:"statistic",type:"select",options:["mean","min","max","sum"],label:"Statistic",default:"mean"}]}),glance:n({fields:[{key:"entities",type:"entities",multi:!0,domains:o,label:"Entities (multiselect)"}]}),"picture-glance":n({fields:[{key:"entities",type:"entities",multi:!0,domains:o,label:"Entities (multiselect)"},{key:"image",type:"text",label:"Image URL (optional)"}]}),"picture-entity":n({fields:[{key:"entity",type:"entity",multi:!1,domains:o,label:"Entity"},{key:"image",type:"text",label:"Image URL (optional)"}]}),"weather-forecast":n({fields:[{key:"entity",type:"entity",multi:!1,domains:["weather"],label:"Weather entity"}]}),map:n({fields:[{key:"entities",type:"entities",multi:!0,domains:["device_tracker","person"],label:"Trackers / people (multiselect)"},{key:"default_zoom",type:"number",label:"Default zoom",default:14}]}),"media-control":n({fields:[{key:"entity",type:"entity",multi:!1,domains:["media_player"],label:"Media player"}]}),light:n({fields:[{key:"entity",type:"entity",multi:!1,domains:["light"],label:"Light"}]}),thermostat:n({fields:[{key:"entity",type:"entity",multi:!1,domains:["climate"],label:"Climate"}]}),"alarm-panel":n({fields:[{key:"entity",type:"entity",multi:!1,domains:["alarm_control_panel"],label:"Alarm"}]}),markdown:n({fields:[{key:"content",type:"textarea",label:"Markdown"}]}),tile:n({fields:[{key:"entity",type:"entity",multi:!1,domains:o,label:"Entity"}]}),button:n({fields:[{key:"entity",type:"entity",multi:!1,domains:o,label:"Entity (optional)"}]}),iframe:n({fields:[{key:"url",type:"text",label:"URL"}]}),area:n({fields:[{key:"area",type:"text",label:"Area ID"}]})}[e]||{fields:[]}}async _getEntityCardEditor(e={}){let n=document.createElement("div");n.style.display="flex",n.style.flexDirection="column",n.style.gap="12px",n.style.padding="8px 0",n.style.overflow="visible",n._cfg={type:"entity",...e||{}};let o=()=>{let T={type:"entity"};["entity","name","icon","attribute","unit","state_color","theme"].forEach(M=>{let _=n._cfg[M];_!==void 0&&_!==""&&_!==null&&(T[M]=_)}),n.dispatchEvent(new CustomEvent("config-changed",{detail:{config:T}}))},c=document.createElement("div");c.style.display="flex",c.style.flexDirection="column",c.style.gap="4px";let s=document.createElement("span");s.textContent="Entity",s.style.fontSize=".8rem",s.style.opacity="0.8";let l=document.createElement("ha-entity-picker");l.setAttribute("label","Select entity"),l.addEventListener("value-changed",T=>{var _,P,D;T.stopPropagation();let M=(D=T.detail&&((_=T.detail.value)!=null?_:T.detail))!=null?D:(P=T.target)==null?void 0:P.value;n._cfg.entity=M||"";try{u()}catch{}o()}),c.appendChild(s),c.appendChild(l),n.appendChild(c);let u=()=>{},f=document.createElement("div");f.style.display="grid",f.style.gridTemplateColumns="1fr 1fr",f.style.columnGap="12px",f.style.rowGap="12px";let m=(T,M)=>{let _=document.createElement("div");_.style.display="flex",_.style.flexDirection="column",_.style.gap="4px";let P=document.createElement("span");P.textContent=T,P.style.fontSize=".8rem",P.style.opacity="0.8",_.appendChild(P),_.appendChild(M),f.appendChild(_)},v;customElements.get("ha-textfield")?(v=document.createElement("ha-textfield"),v.setAttribute("label","Name"),v.addEventListener("input",()=>{n._cfg.name=v.value||void 0,o()})):(v=document.createElement("input"),v.type="text",v.placeholder="Name",v.addEventListener("input",()=>{n._cfg.name=v.value||void 0,o()}),Object.assign(v.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})),m("Name",v);let y;customElements.get("ha-icon-picker")?(y=document.createElement("ha-icon-picker"),y.setAttribute("label","Icon"),y.addEventListener("value-changed",T=>{var M;T.stopPropagation(),n._cfg.icon=((M=T.detail)==null?void 0:M.value)||void 0,o()}),Object.assign(y.style,{position:"relative",zIndex:"1000"})):customElements.get("ha-textfield")?(y=document.createElement("ha-textfield"),y.setAttribute("label","Icon"),y.addEventListener("input",()=>{n._cfg.icon=y.value||void 0,o()})):(y=document.createElement("input"),y.type="text",y.placeholder="mdi:icon",y.addEventListener("input",()=>{n._cfg.icon=y.value||void 0,o()}),Object.assign(y.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})),m("Icon",y);let x;if(u=()=>{var U,ae;let T=[],M=(U=n._cfg)==null?void 0:U.entity,_=n._hass;if(M&&_&&_.states&&_.states[M]&&_.states[M].attributes)try{T=Object.keys(_.states[M].attributes||{}).filter(H=>H&&typeof H=="string"),T.sort()}catch{}let P=x&&typeof x.value!="undefined"?x.value:void 0,D=((x==null?void 0:x.tagName)||"").toLowerCase(),K={min_color_temp_kelvin:"Minimum color temperature (Kelvin)",max_color_temp_kelvin:"Maximum color temperature (Kelvin)",min_color_temp_mireds:"Minimum color temperature (mireds)",max_color_temp_mireds:"Maximum color temperature (mireds)",min_mireds:"Minimum color temperature (mireds)",max_mireds:"Maximum color temperature (mireds)",effect_list:"Available effects",color_mode:"Color mode",brightness:"Brightness",hs_color:"Hs color",rgb_color:"Rgb color",xy_color:"Xy color",entity_id:"Entity ID",friendly_name:"Friendly name",icon:"Icon"},J=H=>K[H]?K[H]:H.split("_").map(G=>G&&(G.toLowerCase()==="kelvin"?"Kelvin":G.toLowerCase()==="mireds"?"mireds":G.charAt(0).toUpperCase()+G.slice(1))).join(" ");if(D==="ha-combo-box"){let H=T.map(G=>({value:G,label:J(G)}));H.unshift({value:"",label:""}),x.items=H,P&&T.includes(P)?x.value=P:x.value=""}else if(D==="ha-select"){x.innerHTML="";let H=document.createElement("mwc-list-item");H.setAttribute("value",""),H.textContent="",x.appendChild(H);for(let G of T){let ee=document.createElement("mwc-list-item");ee.setAttribute("value",G),ee.textContent=J(G),x.appendChild(ee)}P&&T.includes(P)?x.value=P:x.value="",(ae=x.requestUpdate)==null||ae.call(x)}else if(D==="select"){x.innerHTML="";let H=document.createElement("option");H.value="",H.textContent="",x.appendChild(H);for(let G of T){let ee=document.createElement("option");ee.value=G,ee.textContent=J(G),x.appendChild(ee)}P&&T.includes(P)&&(x.value=P)}},customElements.get("ha-combo-box"))x=document.createElement("ha-combo-box"),x.setAttribute("label","Attribute"),x.setAttribute("item-label-path","label"),x.setAttribute("item-value-path","value"),x.setAttribute("allow-custom-value","false"),x.addEventListener("value-changed",T=>{var _,P;T.stopPropagation();let M=(P=(_=T.detail)==null?void 0:_.value)!=null?P:x.value;n._cfg.attribute=M||void 0,o()});else if(customElements.get("ha-select"))x=document.createElement("ha-select"),x.setAttribute("label","Attribute"),x.addEventListener("selected",T=>{T.stopPropagation(),n._cfg.attribute=x.value||void 0,o()}),Object.assign(x.style,{position:"relative",zIndex:"1000"});else{x=document.createElement("select");let T=document.createElement("option");T.value="",T.textContent="",x.appendChild(T),x.addEventListener("change",M=>{M.stopPropagation(),n._cfg.attribute=x.value||void 0,o()}),Object.assign(x.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),Object.assign(x.style,{position:"relative",zIndex:"1000"})}u(),m("Attribute",x);let O;customElements.get("ha-textfield")?(O=document.createElement("ha-textfield"),O.setAttribute("label","Unit"),O.addEventListener("input",()=>{n._cfg.unit=O.value||void 0,o()})):(O=document.createElement("input"),O.type="text",O.placeholder="Unit",O.addEventListener("input",()=>{n._cfg.unit=O.value||void 0,o()}),Object.assign(O.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})),m("Unit",O);let S;if(customElements.get("ha-select"))S=document.createElement("ha-select"),S.setAttribute("label","Theme (optional)"),S.addEventListener("selected",T=>{T.stopPropagation(),n._cfg.theme=S.value||void 0,o()});else{S=document.createElement("select");let T=document.createElement("option");T.value="",T.textContent="",S.appendChild(T),S.addEventListener("change",M=>{M.stopPropagation(),n._cfg.theme=S.value||void 0,o()}),Object.assign(S.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})}m("Theme (optional)",S);let A;customElements.get("ha-switch")?(A=document.createElement("ha-switch"),A.addEventListener("change",()=>{n._cfg.state_color=!!A.checked,o()})):(A=document.createElement("input"),A.type="checkbox",A.addEventListener("change",()=>{n._cfg.state_color=!!A.checked,o()}));let L=document.createElement("div");L.style.display="flex",L.style.alignItems="center",L.style.gap="8px";let C=document.createElement("span");return C.textContent="Show state color",C.style.fontSize=".8rem",C.style.opacity="0.8",L.appendChild(C),L.appendChild(A),f.appendChild(L),n.appendChild(f),n.setConfig=(T={})=>{n._cfg={type:"entity",...T||{}};let M=n._cfg;if(l&&("value"in l&&(l.value=M.entity||""),l.setAttribute&&l.setAttribute("value",M.entity||"")),v&&(v.value=M.name||""),y&&(y.value=M.icon||""),x){try{u()}catch{}x.value=M.attribute||""}O&&(O.value=M.unit||""),S&&(S.value=M.theme||""),A&&"checked"in A&&(A.checked=!!M.state_color)},Object.defineProperty(n,"hass",{get(){return this._hass},set(T){var M;if(this._hass=T,l){try{l.hass=T}catch{}customElements.get("ha-entity-picker")||customElements.whenDefined("ha-entity-picker").then(()=>{var _;try{l.hass=this._hass,(_=l.requestUpdate)==null||_.call(l)}catch{}}).catch(()=>{})}if(y){try{y.hass=T}catch{}customElements.get("ha-icon-picker")||customElements.whenDefined("ha-icon-picker").then(()=>{var _;try{y.hass=this._hass,(_=y.requestUpdate)==null||_.call(y)}catch{}}).catch(()=>{})}if(S){let _=[];T&&T.themes&&(T.themes.themes?_=Object.keys(T.themes.themes):typeof T.themes=="object"&&(_=Object.keys(T.themes).filter(K=>K!=="default_theme")));let P=S.value,D=(S.tagName||"").toLowerCase();if(D==="ha-select"){S.innerHTML="";let K=document.createElement("mwc-list-item");K.setAttribute("value",""),K.textContent="",S.appendChild(K);for(let J of _){let U=document.createElement("mwc-list-item");U.setAttribute("value",J),U.textContent=J,S.appendChild(U)}P&&_.includes(P)?S.value=P:P||(S.value=""),(M=S.requestUpdate)==null||M.call(S)}else if(D==="select"){S.innerHTML="";let K=document.createElement("option");K.value="",K.textContent="",S.appendChild(K);for(let J of _){let U=document.createElement("option");U.value=J,U.textContent=J,S.appendChild(U)}P&&Array.from(S.options).some(J=>J.value===P)&&(S.value=P)}}try{u()}catch{}}}),n.setConfig(e||{}),n}_shapeBySchema(e,n={}){let o=this._schemaForType(e)||{fields:[]},c={...n,type:e};for(let s of o.fields){let l=c[s.key];if(s.type==="entities"){let f=(Array.isArray(l)?l:l!=null&&l!==""?[l]:[]).filter(Boolean);f.length?c[s.key]=f:delete c[s.key]}else if(s.type==="entity")Array.isArray(l)&&(l=l[0]),l==null||l===""?delete c[s.key]:c[s.key]=String(l);else if(s.type==="number")if(l==null||l==="")delete c[s.key];else{let u=Number(l);Number.isFinite(u)?c[s.key]=u:delete c[s.key]}else(s.type==="select"||s.type==="text"||s.type==="textarea")&&(l==null||l===""?delete c[s.key]:c[s.key]=l)}return c}_statesList(e){var c;let n=Object.keys(((c=this.hass)==null?void 0:c.states)||{});if(!e||!e.length)return n;if(!this.__domainIndex||this.__domainIndex._gen!==n.length){let s={};for(let l of n){let u=l.split(".")[0];(s[u]||(s[u]=[])).push(l)}this.__domainIndex={_gen:n.length,map:s}}let o=[];for(let s of e)this.__domainIndex.map[s]&&o.push(...this.__domainIndex.map[s]);return o}_isNumericEntity(e){var c,s;let n=(s=(c=this.hass)==null?void 0:c.states)==null?void 0:s[e];if(!n)return!1;let o=Number(n.state);return Number.isFinite(o)}_getFaves(){try{return new Set(JSON.parse(localStorage.getItem("ddc_faves")||"[]"))}catch{return new Set}}_setFaves(e){try{localStorage.setItem("ddc_faves",JSON.stringify(Array.from(e)))}catch{}}_getRecent(){try{return JSON.parse(localStorage.getItem("ddc_recent_types")||"[]")}catch{return[]}}_pushRecent(e){try{let n=this._getRecent().filter(o=>o!==e);n.unshift(e),n.length>10&&(n.length=10),localStorage.setItem("ddc_recent_types",JSON.stringify(n))}catch{}}async _ensureCodeMirror(){if(!this.__cmReady){if(!document.querySelector("link[data-cm-core]")){let e=document.createElement("link");e.rel="stylesheet",e.href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.css",e.setAttribute("data-cm-core",""),document.head.appendChild(e)}await new Promise(e=>{if(window.CodeMirror)return e();let n=document.createElement("script");n.src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.js",n.onload=e,document.head.appendChild(n)}),await new Promise(e=>{var o,c;if((c=(o=window.CodeMirror)==null?void 0:o.mimeModes)!=null&&c.yaml)return e();let n=document.createElement("script");n.src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/yaml/yaml.min.js",n.onload=e,document.head.appendChild(n)}),this.__cmReady=!0}}async _mountYamlEditor(e,n,o,c){let s=f=>window.jsyaml?window.jsyaml.dump(f):JSON.stringify(f,null,2),l=f=>window.jsyaml?window.jsyaml.load(f):JSON.parse(f);e.innerHTML="";let u=s(n);if(customElements.get("ha-code-editor")){let f=document.createElement("ha-code-editor");f.mode="yaml",f.hass=this.hass,f.value=u,f.style.display="block",f.style.height="260px",e.appendChild(f);let m=!1;return f.addEventListener("value-changed",v=>{var x,O,S;if(m)return;let y=(S=(O=(x=v.detail)==null?void 0:x.value)!=null?O:f.value)!=null?S:"";try{o(l(y))}catch(A){c==null||c(A)}}),{setValue:v=>{var x;let y=s(v);((x=f.value)!=null?x:"")!==y&&(m=!0,f.value=y,m=!1)}}}try{await this._ensureCodeMirror();let f=window.CodeMirror(e,{value:u,mode:"yaml",lineNumbers:!0,lineWrapping:!0,indentUnit:2,tabSize:2}),m=!1;return f.on("change",()=>{if(m)return;let v=f.getValue();try{o(l(v))}catch(y){c==null||c(y)}}),{setValue:v=>{let y=s(v);f.getValue()!==y&&(m=!0,f.setValue(y),m=!1)}}}catch{let f=document.createElement("textarea");return f.style.width="100%",f.style.height="260px",f.value=u,f.addEventListener("input",()=>{try{o(l(f.value))}catch(m){c==null||c(m)}}),e.appendChild(f),{setValue:m=>{let v=s(m);f.value!==v&&(f.value=v)}}}}_createVirtualList({container:e,items:n,rowHeight:o=36,renderRow:c}){e.style.position="relative",e.style.overflow="auto";let s=document.createElement("div");s.style.height=`${n.length*o}px`,e.innerHTML="",e.appendChild(s);let l=new Map,u=()=>{let f=e.scrollTop,m=e.clientHeight,v=Math.max(0,Math.floor(f/o)-6),y=Math.min(n.length-1,Math.ceil((f+m)/o)+6);for(let[x,O]of l)(x<v||x>y)&&(O.remove(),l.delete(x));for(let x=v;x<=y;x++){if(l.has(x))continue;let O=c(n[x],x);O.style.position="absolute",O.style.left="0",O.style.right="0",O.style.top=`${x*o}px`,l.set(x,O),e.appendChild(O)}};return e.addEventListener("scroll",u,{passive:!0}),new ResizeObserver(u).observe(e),u(),{refresh(f){if(f){n=f,s.style.height=`${n.length*o}px`;for(let[,m]of l)m.remove();l.clear()}u()}}}async _openSmartPicker(e="add",n=null,o=null){let c=()=>s.remove(),s=document.createElement("div");s.className="modal",s.innerHTML=`
      <div class="dialog" role="dialog" aria-modal="true">
        <div class="dlg-head">
          <h3>${e==="edit"?"Edit card":"Add a card"}</h3>
          <div style="display:flex;gap:10px;flex:1">
            <input id="search" placeholder="Search cards (name or type)\u2026" aria-label="search" style="flex:1;padding:10px 12px;border-radius:12px;border:1px solid var(--divider-color);background:var(--primary-background-color);color:var(--primary-text-color)">
          </div>
          <button class="btn secondary" id="cancelBtn"><ha-icon icon="mdi:close"></ha-icon><span style="margin-left:6px">Cancel</span></button>
          <button class="btn" id="addBtn" disabled>${e==="edit"?'<ha-icon icon="mdi:content-save"></ha-icon><span style="margin-left:6px">Update</span>':'<ha-icon icon="mdi:plus"></ha-icon><span style="margin-left:6px">Add</span>'}
          </button>
        </div>
        <div id="layoutGrid" class="layout">
          <div class="pane" id="leftPane"></div>
          <div class="pane" id="rightPane">
            <div class="rightGrid">
              <div class="sec" id="quickFillSec" style="grid-column:1;grid-row:1">
                <div class="hd">Quick fill <span style="opacity:.7;font-size:.85rem">card-aware</span></div>
                <div class="bd" id="quickFill"></div>
              </div>

              <div class="sec" style="grid-column:2;grid-row:1 / span 3;min-height:0;position:relative">
                <div class="hd">Preview</div>
                <div class="spin-center" id="previewSpin" hidden>
                  <ha-circular-progress indeterminate></ha-circular-progress>
                </div>
                <div class="bd" style="min-height:0"><div id="cardHost"></div></div>
              </div>

              <div class="sec" id="optionsSec" style="grid-column:1;grid-row:2;min-height:0;position:relative">
                <div class="hd">
                  <span>Card options (official editor)</span>
                  <div id="optTabs" class="tabs">
                    <button id="tabVisual" class="tab active" aria-selected="true">Visual</button>
                    <button id="tabYaml" class="tab">YAML</button>
                    <!-- DDC: Visibility tab allows configuring when the card should be shown -->
                    <button id="tabVis" class="tab">Visibility</button>
                  </div>
                </div>
                <div class="spin-center" id="editorSpin" hidden>
                  <ha-circular-progress indeterminate></ha-circular-progress>
                </div>
                <div class="bd" style="min-height:0">
                  <div id="editorHost"></div>
                  <div id="err" class="err" hidden style="color:var(--error-color);font-size:.9rem"></div>
                </div>
              </div>

              <div class="sec" id="yamlSec" style="grid-column:1;grid-row:3;min-height:0">
                <div class="hd">YAML editor</div>
                <div class="bd" style="min-height:0">
                  <div id="yamlHost"></div>
                  <div id="yamlErr" class="err" hidden style="color:var(--error-color);font-size:.9rem;margin-top:8px"></div>
                </div>
              </div>

              <!-- DDC: Visibility section shares the same grid row as YAML. It is hidden by default and shown when the Visibility tab is selected. -->
              <div class="sec" id="visSec" style="grid-column:1;grid-row:3;min-height:0;display:none">
                <div class="hd">Visibility</div>
                <div class="bd" style="min-height:0">
                  <div id="visHost"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="dlg-foot">
          <span style="flex:1;opacity:.75;font-size:.85rem">Tip: use <ha-icon icon="mdi:star-outline"></ha-icon> to favorite cards you use often</span>
          <button class="btn secondary" id="footCancel"><ha-icon icon="mdi:close"></ha-icon><span style="margin-left:6px">Cancel</span></button>
          <button class="btn" id="footAdd" disabled>${e==="edit"?'<ha-icon icon="mdi:content-save"></ha-icon><span style="margin-left:6px">Update</span>':'<ha-icon icon="mdi:plus"></ha-icon><span style="margin-left:6px">Add</span>'}
          </button>
        </div>
      </div>`,this.shadowRoot.appendChild(s);let l=s.querySelector("#leftPane"),u=s.querySelector("#addBtn"),f=s.querySelector("#footAdd"),m=s.querySelector("#cancelBtn"),v=s.querySelector("#footCancel"),y=s.querySelector("#search"),x=s.querySelector("#cardHost"),O=s.querySelector("#editorHost"),S=s.querySelector("#editorSpin"),A=s.querySelector("#quickFill"),L=s.querySelector("#yamlHost"),C=s.querySelector("#yamlErr"),T=s.querySelector("#yamlSec"),M=s.querySelector("#tabVisual"),_=s.querySelector("#tabYaml"),P=s.querySelector("#tabVis"),D=s.querySelector("#visSec"),K=s.querySelector("#visHost"),J=s.querySelector("#err"),U=s.querySelector("#previewSpin"),ae=j=>{u.disabled=f.disabled=!j},H=j=>{j?(J.hidden=!1,J.textContent=j):(J.hidden=!0,J.textContent="")},G=this._getFaves(),ee=this._getRecent(),ue=this._catalog(),We=ue.find(j=>j.id==="favorites"),fe=ue.find(j=>j.id==="recent"),Oe=ue.flatMap(j=>j.items||[]);We.items=Oe.filter(j=>G.has(j.type)),fe.items=ee.map(j=>Oe.find($=>$.type===j)).filter(Boolean);let Ce=this._customCardsFromRegistry();Ce.length&&ue.push({id:"custom",name:"Custom (installed)",items:Ce});let ke=s.querySelector("#quickFillSec");ke&&(ke.style.display="none");let Xe=s.querySelector("#optionsSec .hd"),Je,Ue,at=()=>{if(!Ue)return;let j=Ee&&G.has(Ee),$=Ue.querySelector("ha-icon");$&&$.setAttribute("icon",j?"mdi:star":"mdi:star-outline")},ct=j=>{if(Je){let $=Oe.find(ve=>ve.type===j),pe=$?$.name:j||"";Je.textContent=pe}at()};if(Xe&&!Xe.querySelector(".sel-info")){let j=Xe.querySelector("span");j&&(j.style.display="none"),Je=document.createElement("span"),Je.className="sel-info",Je.style.flex="1",Je.style.fontWeight="bold",Je.style.paddingRight="8px",Xe.insertBefore(Je,Xe.firstChild),Ue=document.createElement("button"),Ue.className="icon-btn",Ue.setAttribute("title","Favorite"),Object.assign(Ue.style,{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"28px",height:"28px",borderRadius:"6px",border:"1px solid var(--divider-color)",background:"var(--primary-background-color)",padding:"0",marginLeft:"4px",cursor:"pointer"}),Ue.innerHTML='<ha-icon icon="mdi:star-outline"></ha-icon>',Xe.appendChild(Ue),Ue.addEventListener("click",$=>{$.stopPropagation(),Ee&&(G.has(Ee)?G.delete(Ee):G.add(Ee),this._setFaves(G),at(),et())})}let rt="visual",re=j=>{let $=j==="yaml",pe=j==="vis",ve=!$&&!pe;M.classList.toggle("active",ve),M.setAttribute("aria-selected",String(ve)),_.classList.toggle("active",$),_.setAttribute("aria-selected",String($)),P&&(P.classList.toggle("active",pe),P.setAttribute("aria-selected",String(pe))),O.parentElement.style.display=ve?"":"none",T.style.display=$?"":"none",D&&(D.style.display=pe?"":"none"),$?T.scrollIntoView({behavior:"smooth",block:"start"}):pe&&D&&D.scrollIntoView({behavior:"smooth",block:"start"}),rt=$?"yaml":pe?"vis":"visual"};M.addEventListener("click",async()=>{var j;if(re("visual"),!Ae)await st(ne);else try{(j=Ae.setConfig)==null||j.call(Ae,ne)}catch{}}),_.addEventListener("click",()=>re("yaml")),P&&P.addEventListener("click",()=>{re("vis");try{qe(ne)}catch{}}),re("visual");let ft=()=>{let j=y.value.trim().toLowerCase();return ue.map($=>({...$,items:($.items||[]).filter(pe=>!j||pe.name.toLowerCase().includes(j)||pe.type.toLowerCase().includes(j))})).filter($=>$.items&&$.items.length||$.id==="favorites"||$.id==="recent")},et=()=>{let j=ft();l.innerHTML="",j.forEach($=>{let pe=document.createElement("div");pe.style.padding="12px",pe.style.borderBottom="1px solid var(--divider-color)";let ve=document.createElement("h4");if(ve.textContent=$.name,ve.style.margin="0 0 10px 0",ve.style.fontSize=".92rem",ve.style.opacity=".85",pe.appendChild(ve),!$.items.length&&($.id==="favorites"||$.id==="recent")){let le=document.createElement("div");le.style.opacity=".6",le.style.fontSize=".85rem",le.textContent=$.id==="favorites"?"No favorites yet.":"No recent items yet.",pe.appendChild(le)}else $.items.forEach(le=>{let _e=document.createElement("button");_e.innerHTML=`<span style="display:inline-flex;align-items:center;gap:8px">
              <ha-icon icon="${le.icon}"></ha-icon><span>${le.name}</span>
            </span>`,Object.assign(_e.style,{display:"block",width:"100%",textAlign:"left",border:"none",background:"transparent",padding:"8px",borderRadius:"10px",cursor:"pointer"}),_e.addEventListener("click",async()=>{Ne(_e),await Ft(le.type)}),pe.appendChild(_e)});l.appendChild(pe)})},Ne=j=>{l.querySelectorAll("button").forEach($=>{$.classList.remove("active"),$.style.background="transparent",$.style.color=""}),j&&(j.classList.add("active"),j.style.background="rgba(3,169,244,.12)",j.style.color="var(--primary-color)")},ne=null,Ee=null,Me=null,Ae=null,nt=null,pt=0,bt=null,Ct="",Et=(j,$)=>{var W;let pe=this._schemaForType(j);if(A.innerHTML="",!pe.fields.length){A.innerHTML='<div style="opacity:.7;font-size:.9rem">No quick fill for this card \u2014 use the editors below.</div>';return}let ve=Object.keys(((W=this.hass)==null?void 0:W.states)||{}),le=document.createElement("div"),_e=(Z,Ie,Y,Ke)=>{let Ye=document.createElement("div");Object.assign(Ye.style,{padding:"8px 10px",border:"1px solid var(--divider-color)",borderRadius:"10px",cursor:"pointer",userSelect:"none",display:"flex",alignItems:"center",gap:"8px"}),Ye.innerHTML=`<ha-icon icon="mdi:checkbox-blank-outline"></ha-icon><span>${Z}</span>`,Ie.includes(Z)&&(Ye.style.background="rgba(3,169,244,.12)",Ye.style.borderColor="var(--primary-color)",Ye.querySelector("ha-icon").setAttribute("icon","mdi:checkbox-marked")),Ye.addEventListener("click",async()=>{let Qe=Ie.indexOf(Z);Qe>=0?Ie.splice(Qe,1):Ie.push(Z);let Fe=Ie.includes(Z);Ye.style.background=Fe?"rgba(3,169,244,.12)":"",Ye.style.borderColor=Fe?"var(--primary-color)":"var(--divider-color)",Ye.querySelector("ha-icon").setAttribute("icon",Fe?"mdi:checkbox-marked":"mdi:checkbox-blank-outline"),ne=this._shapeBySchema(j,{...ne,[Ke]:[...Ie]}),ot(ne),Me==null||Me.setValue(ne)}),Y.appendChild(Ye)};pe.fields.forEach(Z=>{var Ke,Ye,Qe,Fe,tt,Ve,Ge,$e,je;let Ie=document.createElement("div");Object.assign(Ie.style,{display:"flex",gap:"8px",alignItems:"center",marginBottom:"8px"});let Y=document.createElement("label");if(Y.textContent=Z.label||Z.key,Y.style.minWidth="130px",Z.type==="entities"){let Te=document.createElement("div");Te.style.flex="1";let he=document.createElement("input");Object.assign(he,{placeholder:"Filter entities\u2026"}),Object.assign(he.style,{width:"100%",padding:"8px 10px",borderRadius:"10px",border:"1px solid var(--divider-color)",background:"var(--card-background-color)",color:"var(--primary-text-color)"});let we=document.createElement("div");Object.assign(we.style,{maxHeight:"220px",overflow:"auto",marginTop:"8px",border:"1px solid var(--divider-color)",borderRadius:"10px",padding:"6px"});let Le=Z.domains&&Z.domains.length?this._statesList(Z.domains):ve,xe=Array.isArray($[Z.key])?[...$[Z.key]]:$[Z.key]?[$[Z.key]]:[],se=N=>{let B=document.createElement("div");Object.assign(B.style,{padding:"6px 10px",margin:"4px 0",border:"1px solid var(--divider-color)",borderRadius:"10px",cursor:"pointer",display:"flex",alignItems:"center",gap:"8px",background:""});let F=document.createElement("ha-icon");F.setAttribute("icon","mdi:checkbox-blank-outline"),F.style.setProperty("--mdc-icon-size","18px");let V=document.createElement("span");V.textContent=N,V.style.whiteSpace="nowrap",V.style.overflow="hidden",V.style.textOverflow="ellipsis",B.append(F,V);let ie=()=>{let oe=xe.includes(N);B.style.background=oe?"rgba(3,169,244,.12)":"",B.style.borderColor=oe?"var(--primary-color)":"var(--divider-color)",F.setAttribute("icon",oe?"mdi:checkbox-marked":"mdi:checkbox-blank-outline")};return ie(),B.addEventListener("click",()=>{let oe=xe.indexOf(N);oe>=0?xe.splice(oe,1):xe.push(N),ne=this._shapeBySchema(j,{...ne,[Z.key]:[...xe]}),ot(ne),Me==null||Me.setValue(ne),ie()}),B},I=Le;this._createVirtualList({container:we,items:I,rowHeight:36,renderRow:se}),he.addEventListener("input",()=>{let N=he.value.trim().toLowerCase();I=Le.filter(B=>!N||B.toLowerCase().includes(N)),this._createVirtualList({container:we,items:I,rowHeight:36,renderRow:se})}),Te.append(he,we),Ie.append(Y,Te),ne=this._shapeBySchema(j,{...$,[Z.key]:xe})}if(Z.type==="entity"){let Te=document.createElement("div");Te.style.flex="1",Te.style.position="relative";let he=document.createElement("input");he.setAttribute("list","ddc_entlist_"+Z.key),Object.assign(he.style,{width:"100%",padding:"8px 10px 8px 36px",borderRadius:"10px",border:"1px solid var(--divider-color)"}),he.placeholder=`Select ${((Ke=Z.label)==null?void 0:Ke.toLowerCase())||"entity"}\u2026`;let we=document.createElement("ha-icon");we.setAttribute("icon","mdi:magnify"),Object.assign(we.style,{position:"absolute",left:"10px",top:"8px",width:"18px",height:"18px","--mdc-icon-size":"18px",opacity:".7"});let Le=document.createElement("datalist");Le.id="ddc_entlist_"+Z.key;let xe=Z.domains&&Z.domains.length?this._statesList(Z.domains):Object.keys(((Ye=this.hass)==null?void 0:Ye.states)||{});Le.innerHTML=xe.map(se=>`<option value="${se}">`).join(""),he.value=Array.isArray($[Z.key])?$[Z.key][0]||"":$[Z.key]||"",he.addEventListener("change",async()=>{ne=this._shapeBySchema(j,{...ne,[Z.key]:he.value||void 0}),ot(ne),Me==null||Me.setValue(ne)}),Te.append(we,he,Le),Ie.append(Y,Te)}if(Z.type==="number"){let Te=document.createElement("div");Te.style.flex="1",Te.style.position="relative";let he=document.createElement("input");he.type="number",Z.step&&(he.step=Z.step),Object.assign(he.style,{width:"100%",padding:"8px 10px 8px 36px",borderRadius:"10px",border:"1px solid var(--divider-color)"});let we=document.createElement("ha-icon");we.setAttribute("icon","mdi:counter"),Object.assign(we.style,{position:"absolute",left:"10px",top:"8px","--mdc-icon-size":"18px",width:"18px",height:"18px",opacity:".7"}),he.value=(Fe=(Qe=$[Z.key])!=null?Qe:Z.default)!=null?Fe:"",he.addEventListener("input",async()=>{let Le=he.value===""?void 0:Number(he.value);ne=this._shapeBySchema(j,{...ne,[Z.key]:isNaN(Le)?void 0:Le}),ot(ne),Me==null||Me.setValue(ne)}),Te.append(we,he),Ie.append(Y,Te)}if(Z.type==="select"){let Te=document.createElement("div");Te.style.flex="1",Te.style.position="relative";let he=document.createElement("select");Object.assign(he.style,{width:"100%",padding:"8px 10px 8px 36px",borderRadius:"10px",border:"1px solid var(--divider-color)"});let we=document.createElement("ha-icon");we.setAttribute("icon","mdi:format-list-bulleted"),Object.assign(we.style,{position:"absolute",left:"10px",top:"8px","--mdc-icon-size":"18px",width:"18px",height:"18px",opacity:".7"}),(Z.options||[]).forEach(Le=>{let xe=document.createElement("option");xe.value=Le,he.appendChild(xe)}),he.value=(Ge=(tt=$[Z.key])!=null?tt:Z.default)!=null?Ge:((Ve=Z.options)==null?void 0:Ve[0])||"",he.addEventListener("change",async()=>{ne=this._shapeBySchema(j,{...ne,[Z.key]:he.value}),ot(ne),Me==null||Me.setValue(ne)}),Te.append(we,he),Ie.append(Y,Te)}if(Z.type==="text"){let Te=document.createElement("div");Te.style.flex="1",Te.style.position="relative";let he=document.createElement("input");he.type="text",Object.assign(he.style,{width:"100%",padding:"8px 10px 8px 36px",borderRadius:"10px",border:"1px solid var(--divider-color)"});let we=document.createElement("ha-icon");we.setAttribute("icon","mdi:text"),Object.assign(we.style,{position:"absolute",left:"10px",top:"8px","--mdc-icon-size":"18px",width:"18px",height:"18px",opacity:".7"}),he.value=($e=$[Z.key])!=null?$e:"",he.addEventListener("input",async()=>{ne=this._shapeBySchema(j,{...ne,[Z.key]:he.value||void 0}),ot(ne),Me==null||Me.setValue(ne)}),Te.append(we,he),Ie.append(Y,Te)}if(Z.type==="textarea"){let Te=document.createElement("textarea");Object.assign(Te.style,{flex:"1",minHeight:"120px",padding:"8px 10px",borderRadius:"10px",border:"1px solid var(--divider-color)"}),Te.value=(je=$[Z.key])!=null?je:"",Te.addEventListener("input",async()=>{ne=this._shapeBySchema(j,{...ne,[Z.key]:Te.value||""}),ot(ne),Me==null||Me.setValue(ne)}),Ie.append(Y,Te)}le.appendChild(Ie)}),A.innerHTML="",A.appendChild(le)},Pt=new WeakMap,Yt=j=>{if(!K)return;let $=Array.isArray(j==null?void 0:j.visibility)?j.visibility.map(_e=>({..._e})):[],pe=()=>qe(ne),ve=()=>{var _e;$=$.filter(W=>W&&typeof W=="object"&&W.condition),ne={...ne,visibility:$};try{Me==null||Me.setValue(ne)}catch{}try{(_e=Ae==null?void 0:Ae.setConfig)==null||_e.call(Ae,ne)}catch{}ot(ne)},le=()=>{if(K.innerHTML="",!$||!$.length){let W=document.createElement("div");W.style.opacity=".7",W.style.fontSize=".9rem",W.style.marginBottom="8px",W.textContent="No conditions defined \u2013 this card is always visible.",K.appendChild(W)}$.forEach((W,Z)=>{let Ie=document.createElement("div");Object.assign(Ie.style,{display:"flex",flexDirection:"column",gap:"6px",marginBottom:"12px",border:"1px solid var(--divider-color)",borderRadius:"8px",padding:"8px"});let Y=document.createElement("div");Object.assign(Y.style,{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"4px"});let Ke=document.createElement("div");Ke.style.display="flex",Ke.style.alignItems="center",Ke.style.gap="6px";let Ye=document.createElement("ha-icon"),Qe="mdi:filter",Fe=W.condition||"state";Fe==="numeric_state"?Qe="mdi:numeric":Fe==="screen"?Qe="mdi:monitor":Fe==="user"?Qe="mdi:account":Fe==="state"&&(Qe="mdi:state-machine"),Ye.setAttribute("icon",Qe);let tt=document.createElement("span");tt.style.fontWeight="bold",tt.style.textTransform="capitalize",tt.textContent=Fe==="numeric_state"?"Entity numeric state":Fe==="state"?"Entity state":Fe==="screen"?"Screen":"User",Ke.appendChild(Ye),Ke.appendChild(tt),Y.appendChild(Ke);let Ve=document.createElement("button");Ve.setAttribute("title","Remove condition"),Ve.innerHTML='<ha-icon icon="mdi:trash-can-outline"></ha-icon>',Object.assign(Ve.style,{border:"none",background:"transparent",cursor:"pointer",padding:"4px",display:"inline-flex",alignItems:"center"}),Ve.style.position="relative",Ve.style.zIndex="1000",Ve.addEventListener("click",Le=>{Le.preventDefault(),Le.stopPropagation();let xe=$.indexOf(W);xe>-1&&$.splice(xe,1),ne.visibility=$,le(),ve()}),Y.appendChild(Ve),Ie.appendChild(Y);let Ge=document.createElement("div");Ge.style.display="flex",Ge.style.gap="8px";let $e=document.createElement("label");$e.textContent="Type",$e.style.fontSize=".85rem",$e.style.marginRight="4px";let je=document.createElement("select");["state","numeric_state","screen","user"].forEach(Le=>{let xe=document.createElement("option");xe.value=Le,xe.textContent=Le.replace("_"," "),je.appendChild(xe)}),je.value=Fe,je.addEventListener("change",()=>{W.condition=je.value,delete W.entity,delete W.state,delete W.state_not,delete W.above,delete W.below,delete W.media_query,delete W.users,le(),ve()}),Ge.appendChild($e),Ge.appendChild(je),Ie.appendChild(Ge);let Te=document.createElement("div");Object.assign(Te.style,{display:"flex",flexWrap:"wrap",gap:"8px",alignItems:"center"});let he=(Le,xe)=>{let se=document.createElement("div");se.style.display="flex",se.style.flexDirection="column",se.style.gap="4px",se.style.minWidth="150px";let I=document.createElement("span");I.textContent=Le,I.style.fontSize=".75rem",se.appendChild(I),se.appendChild(xe),Te.appendChild(se)};(()=>{var Le,xe;if(Te.innerHTML="",W.condition==="state"){let se;customElements.get("ha-entity-picker")?(se=document.createElement("ha-entity-picker"),se.hass=this.hass,se.setAttribute("label","Select entity"),se.removeAttribute("hide-clear-icon"),se.value=W.entity||"",se.addEventListener("value-changed",B=>{B.stopPropagation(),W.entity=B.detail.value||"",ve()})):(se=document.createElement("input"),se.value=W.entity||"",se.addEventListener("input",()=>{W.entity=se.value.trim(),ve()}),Object.assign(se.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})),he("Entity",se);let I;if(customElements.get("ha-select")){I=document.createElement("ha-select");let B=document.createElement("mwc-list-item");B.setAttribute("value","state"),B.textContent="State is equal to";let F=document.createElement("mwc-list-item");F.setAttribute("value","state_not"),F.textContent="State is not equal to",I.appendChild(B),I.appendChild(F),I.value=W.state_not!=null?"state_not":"state",I.addEventListener("selected",V=>{V.stopPropagation();let ie=W.state_not!=null?W.state_not:W.state;I.value==="state_not"?(W.state_not=ie,delete W.state):(W.state=ie,delete W.state_not),ve()})}else I=document.createElement("select"),I.innerHTML='<option value="state">State is equal to</option><option value="state_not">State is not equal to</option>',I.value=W.state_not!=null?"state_not":"state",Object.assign(I.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),I.addEventListener("change",B=>{B.stopPropagation();let F=W.state_not!=null?W.state_not:W.state;I.value==="state_not"?(W.state_not=F,delete W.state):(W.state=F,delete W.state_not),ve()});he("Match type",I);let N;customElements.get("ha-textfield")?(N=document.createElement("ha-textfield"),N.value=(W.state_not!=null?W.state_not:W.state)||"",N.setAttribute("label",""),N.addEventListener("input",B=>{B.stopPropagation();let F=I.value;W[F]=N.value;let V=F==="state"?"state_not":"state";delete W[V],ve()})):(N=document.createElement("input"),N.value=(W.state_not!=null?W.state_not:W.state)||"",Object.assign(N.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),N.addEventListener("input",B=>{B.stopPropagation();let F=I.value;W[F]=N.value;let V=F==="state"?"state_not":"state";delete W[V],ve()})),he("State",N)}else if(W.condition==="numeric_state"){let se;customElements.get("ha-entity-picker")?(se=document.createElement("ha-entity-picker"),se.hass=this.hass,se.setAttribute("label","Select entity"),se.removeAttribute("hide-clear-icon"),se.value=W.entity||"",se.addEventListener("value-changed",B=>{B.stopPropagation(),W.entity=B.detail.value||"",ve()})):(se=document.createElement("input"),se.value=W.entity||"",se.addEventListener("input",()=>{W.entity=se.value.trim(),ve()}),Object.assign(se.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})),he("Entity",se);let I;customElements.get("ha-textfield")?(I=document.createElement("ha-textfield"),I.setAttribute("type","number"),I.value=W.above!=null?W.above:"",I.addEventListener("input",B=>{B.stopPropagation();let F=I.value;F===""||isNaN(Number(F))?delete W.above:W.above=Number(F),ve()})):(I=document.createElement("input"),I.type="number",I.value=W.above!=null?W.above:"",Object.assign(I.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),I.addEventListener("input",()=>{let B=I.value;B===""||isNaN(Number(B))?delete W.above:W.above=Number(B),ve()})),he("Above",I);let N;customElements.get("ha-textfield")?(N=document.createElement("ha-textfield"),N.setAttribute("type","number"),N.value=W.below!=null?W.below:"",N.addEventListener("input",B=>{B.stopPropagation();let F=N.value;F===""||isNaN(Number(F))?delete W.below:W.below=Number(F),ve()})):(N=document.createElement("input"),N.type="number",N.value=W.below!=null?W.below:"",Object.assign(N.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),N.addEventListener("input",()=>{let B=N.value;B===""||isNaN(Number(B))?delete W.below:W.below=Number(B),ve()})),he("Below",N)}else if(W.condition==="screen"){let se=document.createElement("select"),I=[{label:"Custom",value:""},{label:"Mobile (max-width: 599px)",value:"(max-width: 599px)"},{label:"Tablet (600px - 991px)",value:"(min-width: 600px) and (max-width: 991px)"},{label:"Desktop (min-width: 992px)",value:"(min-width: 992px)"}];if(I.forEach(N=>{let B=document.createElement("option");B.value=N.value,B.textContent=N.label,se.appendChild(B)}),se.value=(xe=(Le=I.find(N=>N.value===(W.media_query||"")))==null?void 0:Le.value)!=null?xe:"",se.addEventListener("change",()=>{W.media_query=se.value,ve()}),he("Screen size",se),se.value===""){let N=document.createElement("input");N.placeholder="e.g. (min-width: 1280px)",N.value=W.media_query||"",N.addEventListener("input",()=>{W.media_query=N.value,ve()}),he("Custom query",N)}}else if(W.condition==="user"){let se;customElements.get("ha-user-picker")?(se=document.createElement("ha-user-picker"),se.hass=this.hass,se.value=Array.isArray(W.users)?W.users:[],se.addEventListener("value-changed",I=>{W.users=Array.isArray(I.detail.value)?I.detail.value:[I.detail.value],ve()})):(se=document.createElement("input"),se.value=Array.isArray(W.users)?W.users.join(","):"",se.addEventListener("input",()=>{W.users=se.value.split(",").map(I=>I.trim()).filter(Boolean),ve()})),he("Users",se)}})(),Ie.appendChild(Te),K.appendChild(Ie)});let _e=document.createElement("button");_e.className="btn",_e.innerHTML='<ha-icon icon="mdi:plus"></ha-icon><span style="margin-left:6px">Add condition</span>',Object.assign(_e.style,{marginTop:"8px"}),_e.addEventListener("click",()=>{$.push({condition:"state",entity:"",state:""}),ne.visibility=$,le(),ve()}),K.appendChild(_e)};le()},qe=j=>{if(!K)return;let $=Array.isArray(j==null?void 0:j.visibility)?j.visibility:[],pe=null,ve=async()=>{if(pe)return pe;try{if(this.hass&&typeof this.hass.callWS=="function")try{let Z=await this.hass.callWS({type:"config/auth/list"});if(Array.isArray(Z))return pe=Z,Z}catch{}if(this.hass&&typeof this.hass.callApi=="function")try{let Z=await this.hass.callApi("get","users");if(Array.isArray(Z))return pe=Z,Z}catch{}let W=[];if(this.hass&&this.hass.users&&Array.isArray(this.hass.users)&&W.push(...this.hass.users),this.hass&&this.hass.userData&&Array.isArray(this.hass.userData.users)&&W.push(...this.hass.userData.users),this.hass&&this.hass.authorizedUsers&&Array.isArray(this.hass.authorizedUsers)&&W.push(...this.hass.authorizedUsers),W.length){let Z=new Map;W.forEach(Y=>{let Ke=Y.id||Y.user_id||Y.uid||Y.name||"";Z.has(Ke)||Z.set(Ke,Y)});let Ie=Array.from(Z.values());return pe=Ie,Ie}}catch{}return pe=[],[]},le=()=>{var W;$=$.filter(Z=>Z&&typeof Z=="object"&&Z.condition),ne.visibility=$;try{Me==null||Me.setValue(ne)}catch{}try{(W=Ae==null?void 0:Ae.setConfig)==null||W.call(Ae,ne)}catch{}ot(ne)},_e=()=>{K.innerHTML="";let W=document.createElement("div");W.style.opacity=".75",W.style.fontSize=".85rem",W.style.marginBottom="12px",W.textContent="The card will be shown when ALL conditions below are fulfilled. If no conditions are set, the card will always be shown.",K.appendChild(W);let Z=(Y,Ke)=>{Y.forEach((Fe,tt)=>{Ie(Fe,Y,tt,Ke)});let Ye=document.createElement("div");Ye.style.marginTop="8px";let Qe=document.createElement("button");Qe.className="btn",Qe.innerHTML='<ha-icon icon="mdi:plus"></ha-icon><span style="margin-left:6px">Add condition</span>',Object.assign(Qe.style,{display:"flex",alignItems:"center",gap:"6px",padding:"6px 12px",border:"none",borderRadius:"20px",background:"var(--primary-color)",color:"var(--text-primary-color, #fff)",cursor:"pointer",fontWeight:"500"}),Qe.addEventListener("click",Fe=>{Fe.stopPropagation();let tt=Ye.querySelector(".add-menu");if(tt){tt.remove();return}let Ve=document.createElement("div");Ve.className="add-menu",Object.assign(Ve.style,{position:"relative",marginTop:"4px",border:"1px solid var(--divider-color)",borderRadius:"8px",background:"var(--card-background-color, var(--secondary-background-color))",boxShadow:"0 2px 4px rgba(0,0,0,0.2)"}),[{type:"numeric_state",label:"Entity numeric state",icon:"mdi:numeric"},{type:"state",label:"Entity state",icon:"mdi:state-machine"},{type:"screen",label:"Screen",icon:"mdi:monitor"},{type:"user",label:"User",icon:"mdi:account"},{type:"and",label:"And",icon:"mdi:logic-and"},{type:"or",label:"Or",icon:"mdi:logic-or"}].forEach($e=>{let je=document.createElement("div");je.style.display="flex",je.style.alignItems="center",je.style.gap="8px",je.style.padding="6px 12px",je.style.cursor="pointer",je.addEventListener("mouseenter",()=>je.style.background="var(--hover-color, #444)"),je.addEventListener("mouseleave",()=>je.style.background=""),je.addEventListener("click",()=>{Ve.remove();let we;$e.type==="and"||$e.type==="or"?we={condition:$e.type,conditions:[]}:$e.type==="state"?we={condition:"state",entity:"",state:""}:$e.type==="numeric_state"?we={condition:"numeric_state",entity:""}:$e.type==="screen"?we={condition:"screen",media_query:""}:$e.type==="user"&&(we={condition:"user",users:[]}),Y.push(we),Pt.set(we,!0),le(),_e()});let Te=document.createElement("ha-icon");Te.setAttribute("icon",$e.icon),je.appendChild(Te);let he=document.createElement("span");he.textContent=$e.label,je.appendChild(he),Ve.appendChild(je)}),Ye.appendChild(Ve)}),Ye.appendChild(Qe),Ke.appendChild(Ye)},Ie=(Y,Ke,Ye,Qe)=>{let Fe=Y.condition||"state",tt=Pt.get(Y);tt===void 0&&(tt=$.length===1);let Ve=document.createElement("div");Object.assign(Ve.style,{display:"flex",flexDirection:"column",border:"1px solid var(--divider-color)",borderLeft:"3px solid var(--primary-color)",borderRadius:"12px",padding:"16px",marginBottom:"20px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",boxShadow:"var(--ha-card-box-shadow, 0 2px 6px rgba(0, 0, 0, 0.15))"});let Ge=document.createElement("div");Ge.style.display="flex",Ge.style.alignItems="center",Ge.style.justifyContent="space-between",Ge.style.marginBottom="8px",Ge.style.borderBottom="1px solid var(--divider-color)",Ge.style.paddingBottom="4px",Ge.style.position="relative";let $e=document.createElement("div");$e.style.display="flex",$e.style.alignItems="center",$e.style.gap="6px";let je=document.createElement("button");je.innerHTML=`<ha-icon icon="${tt?"mdi:chevron-down":"mdi:chevron-right"}"></ha-icon>`,Object.assign(je.style,{border:"none",background:"transparent",cursor:"pointer",padding:"4px",display:"inline-flex",alignItems:"center"}),je.addEventListener("click",xe=>{xe.stopPropagation(),Pt.set(Y,!tt),_e()}),$e.appendChild(je);let Te=document.createElement("ha-icon"),he="mdi:filter";Fe==="numeric_state"?he="mdi:numeric":Fe==="screen"?he="mdi:monitor":Fe==="user"?he="mdi:account":Fe==="state"?he="mdi:state-machine":Fe==="and"?he="mdi:logic-and":Fe==="or"&&(he="mdi:logic-or"),Te.setAttribute("icon",he),$e.appendChild(Te);let we=document.createElement("span");we.style.fontWeight="600",we.style.fontSize="0.95rem",we.style.textTransform="capitalize",we.textContent=Fe==="numeric_state"?"Entity numeric state":Fe==="state"?"Entity state":Fe==="screen"?"Screen":Fe==="user"?"User":Fe==="and"?"And":"Or",$e.appendChild(we),Ge.appendChild($e);let Le=document.createElement("button");if(Le.setAttribute("title","Remove condition"),Le.innerHTML='<ha-icon icon="mdi:trash-can-outline"></ha-icon>',Object.assign(Le.style,{border:"none",background:"transparent",cursor:"pointer",padding:"4px",display:"inline-flex",alignItems:"center"}),Le.style.position="relative",Le.style.zIndex="1000",Le.addEventListener("click",xe=>{xe.preventDefault(),xe.stopPropagation();let se=Ke.indexOf(Y);se>-1&&Ke.splice(se,1),le(),_e()}),Ge.appendChild(Le),Ve.appendChild(Ge),Fe!=="and"&&Fe!=="or"){if(tt){let xe=document.createElement("div");Object.assign(xe.style,{display:"flex",flexDirection:"column",gap:"14px",alignItems:"stretch"});let se=(I,N)=>{let B=document.createElement("div");B.style.display="flex",B.style.flexDirection="column",B.style.gap="4px";let F=document.createElement("span");F.textContent=I,F.style.fontSize=".75rem",B.appendChild(F),B.appendChild(N),xe.appendChild(B);let V=(N.tagName||"").toLowerCase();(V==="input"||V==="select")&&Object.assign(N.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})};if(Y.condition==="state"){let I=document.createElement("ha-entity-picker");I.value=Y.entity||"",I.hass=this.hass,I.setAttribute("label","Select entity"),I.addEventListener("value-changed",F=>{Y.entity=F.detail.value||"",le()}),customElements.get("ha-entity-picker")||customElements.whenDefined("ha-entity-picker").then(()=>{_e()}).catch(()=>{}),se("Entity",I);let N;if(customElements.get("ha-select")){N=document.createElement("ha-select");let F=document.createElement("mwc-list-item");F.setAttribute("value","state"),F.textContent="State is equal to";let V=document.createElement("mwc-list-item");V.setAttribute("value","state_not"),V.textContent="State is not equal to",N.appendChild(F),N.appendChild(V),N.value=Y.state_not!=null?"state_not":"state",N.addEventListener("selected",ie=>{ie.stopPropagation();let oe=Y.state_not!=null?Y.state_not:Y.state;N.value==="state_not"?(Y.state_not=oe,delete Y.state):(Y.state=oe,delete Y.state_not),le()})}else N=document.createElement("select"),N.innerHTML='<option value="state">State is equal to</option><option value="state_not">State is not equal to</option>',N.value=Y.state_not!=null?"state_not":"state",N.addEventListener("change",F=>{F.stopPropagation();let V=Y.state_not!=null?Y.state_not:Y.state;N.value==="state_not"?(Y.state_not=V,delete Y.state):(Y.state=V,delete Y.state_not),le()}),Object.assign(N.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"});se("Match type",N);let B;customElements.get("ha-textfield")?(B=document.createElement("ha-textfield"),B.value=(Y.state_not!=null?Y.state_not:Y.state)||"",B.setAttribute("label",""),B.addEventListener("input",F=>{F.stopPropagation();let V=N.value;Y[V]=B.value;let ie=V==="state"?"state_not":"state";delete Y[ie],le()})):(B=document.createElement("input"),B.value=(Y.state_not!=null?Y.state_not:Y.state)||"",Object.assign(B.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),B.addEventListener("input",F=>{F.stopPropagation();let V=N.value;Y[V]=B.value;let ie=V==="state"?"state_not":"state";delete Y[ie],le()})),se("State",B)}else if(Y.condition==="numeric_state"){let I=document.createElement("ha-entity-picker");I.value=Y.entity||"",I.hass=this.hass,I.setAttribute("label","Select entity"),I.removeAttribute("hide-clear-icon"),I.addEventListener("value-changed",F=>{Y.entity=F.detail.value||"",le()}),customElements.get("ha-entity-picker")||customElements.whenDefined("ha-entity-picker").then(()=>{_e()}).catch(()=>{}),se("Entity",I);let N;customElements.get("ha-textfield")?(N=document.createElement("ha-textfield"),N.setAttribute("type","number"),N.value=Y.above!=null?Y.above:"",N.addEventListener("input",F=>{F.stopPropagation();let V=N.value;V===""||isNaN(Number(V))?delete Y.above:Y.above=Number(V),le()})):(N=document.createElement("input"),N.type="number",N.value=Y.above!=null?Y.above:"",Object.assign(N.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),N.addEventListener("input",()=>{let F=N.value;F===""||isNaN(Number(F))?delete Y.above:Y.above=Number(F),le()})),se("Above",N);let B;customElements.get("ha-textfield")?(B=document.createElement("ha-textfield"),B.setAttribute("type","number"),B.value=Y.below!=null?Y.below:"",B.addEventListener("input",F=>{F.stopPropagation();let V=B.value;V===""||isNaN(Number(V))?delete Y.below:Y.below=Number(V),le()})):(B=document.createElement("input"),B.type="number",B.value=Y.below!=null?Y.below:"",Object.assign(B.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),B.addEventListener("input",()=>{let F=B.value;F===""||isNaN(Number(F))?delete Y.below:Y.below=Number(F),le()})),se("Below",B)}else if(Y.condition==="screen"){let I=[{label:"Mobile",query:"(max-width: 599px)"},{label:"Tablet (min: 768px)",query:"(min-width: 768px)"},{label:"Desktop (min: 1024px)",query:"(min-width: 1024px)"},{label:"Wide (min: 1280px)",query:"(min-width: 1280px)"}];Array.isArray(Y.media_query_list)||(Y.media_query_list=[]);let N=document.createElement("div");N.style.display="flex",N.style.flexDirection="column",N.style.gap="4px",I.forEach(B=>{let F=document.createElement("label");F.style.display="flex",F.style.alignItems="center",F.style.gap="6px";let V=document.createElement("input");V.type="checkbox",V.checked=Y.media_query_list.includes(B.query),V.addEventListener("change",()=>{V.checked?Y.media_query_list.push(B.query):Y.media_query_list=Y.media_query_list.filter(oe=>oe!==B.query),Y.media_query=Y.media_query_list.join(","),le()});let ie=document.createElement("span");ie.textContent=B.label,F.appendChild(V),F.appendChild(ie),N.appendChild(F)}),se("Screen sizes",N)}else if(Y.condition==="user"){let I;if(customElements.get("ha-user-picker"))I=document.createElement("ha-user-picker"),I.hass=this.hass,I.setAttribute("label","Select user"),I.value=Array.isArray(Y.users)?Y.users:[],I.addEventListener("value-changed",N=>{let B=N.detail.value;Y.users=Array.isArray(B)?B:[B],le()});else{I=document.createElement("div"),I.style.display="flex",I.style.flexDirection="column",I.style.gap="4px";let N=document.createElement("span");N.style.opacity="0.7",N.style.fontSize=".85rem",N.textContent="Loading users\u2026",I.appendChild(N);let B=Array.isArray(Y.users)?Y.users:[];ve().then(F=>{if(I.innerHTML="",Array.isArray(F)&&F.length)F.forEach(V=>{let ie=V.id||V.user_id||V.uid||V.name||"",oe=V.name||ie,ze=document.createElement("label");ze.style.display="flex",ze.style.alignItems="center",ze.style.gap="6px",ze.style.padding="4px 0";let be=document.createElement("input");be.type="checkbox",be.checked=B.includes(ie)||B.includes(oe),be.addEventListener("change",()=>{let De=Array.isArray(Y.users)?Y.users.slice():[];be.checked?De.includes(ie)||De.push(ie):De=De.filter(yt=>yt!==ie&&yt!==oe),Y.users=De,le()});let Be=document.createElement("span");Be.textContent=oe,ze.appendChild(be),ze.appendChild(Be),I.appendChild(ze)});else{let V=document.createElement("input");V.value=Array.isArray(Y.users)?Y.users.join(","):"",Object.assign(V.style,{padding:"6px 10px",borderRadius:"6px",border:"1px solid var(--divider-color)",background:"var(--card-background-color, var(--secondary-background-color))",color:"var(--primary-text-color, inherit)"});let ie=()=>{Y.users=V.value.split(",").map(oe=>oe.trim()).filter(Boolean),le()};V.addEventListener("change",ie),V.addEventListener("blur",ie),I.appendChild(V)}})}se("Users",I)}Ve.appendChild(xe)}}else if(tt){Array.isArray(Y.conditions)||(Y.conditions=[]);let xe=document.createElement("div");xe.style.marginLeft="16px",Z(Y.conditions,xe),Ve.appendChild(xe)}Qe.appendChild(Ve)};Z($,K)};_e()},ot=j=>{if(((j==null?void 0:j.type)||"")==="custom_card"){Ct=JSON.stringify(j||{}),x.innerHTML='<div style="opacity:.6;font-size:.9rem;padding:8px">Preview not available for the custom card placeholder. Use the YAML editor.</div>',U.hidden=!0;return}let $=JSON.stringify(j||{});$!==Ct&&(Ct=$,bt&&clearTimeout(bt),bt=setTimeout(async()=>{let pe=++pt;U.hidden=!1,x.innerHTML="",await Tr();try{let ve=await this._helpersPromise||await window.loadCardHelpers();if(pe!==pt)return;let le=ve.createCardElement(j);if(le.hass=this.hass,pe!==pt)return;x.appendChild(le)}catch{}finally{pe===pt&&(U.hidden=!0)}},150))},st=async j=>{var ve;let $=++pt;S.hidden=!1,O.innerHTML="",await lc();let pe=j.type||Ee;if(nt=await this._getEditorElementForType(pe,j),pe==="custom_card"){let le=document.createElement("div");return le.style.opacity=".7",le.style.fontSize=".9rem",le.textContent="Custom card placeholder: use the YAML editor to paste the card type and options.",O.appendChild(le),Ae=null,rt!=="yaml"&&re("yaml"),ae(!0),S.hidden=!0,!1}if(!nt){let le=document.createElement("div");return le.style.opacity=".7",le.style.fontSize=".9rem",le.textContent="This card does not support a visual editor. Please use the YAML tab to configure it.",$===pt&&(O.appendChild(le),S.hidden=!0),Ae=null,ae(!0),rt!=="visual"&&re("yaml"),!1}try{nt.hass=this.hass,nt.isConnected||O.appendChild(nt),await Promise.resolve();try{nt.setConfig(j)}catch{}try{let _e=await this._helpersPromise||await window.loadCardHelpers(),W=_e.getCardElementClass?await _e.getCardElementClass(j.type||Ee):null;if(W!=null&&W.getStubConfig){let Z=Object.keys(((ve=this.hass)==null?void 0:ve.states)||{}),Ie=Ke=>Z.filter(Ye=>Ye.startsWith(Ke+".")),Y=await W.getStubConfig(this.hass,Z,Ie);Y&&(j=this._shapeBySchema(j.type||Ee,{...Y}))}}catch{}await Promise.resolve();try{nt.setConfig(j)}catch{}Ae&&this.__onEditorChange&&(Ae.removeEventListener("config-changed",this.__onEditorChange),Ae.removeEventListener("value-changed",this.__onEditorChange));let le=async _e=>{var Ie,Y,Ke;let W=(Ke=(Ie=_e.detail)==null?void 0:Ie.config)!=null?Ke:(Y=_e.detail)==null?void 0:Y.value;if(!W)return;let Z=W.type||Ee;Ee=Z,ne=this._shapeBySchema(Z,W),H(""),ae(!0),Et(Ee,ne),ot(ne),Me==null||Me.setValue(ne)};return this.__onEditorChange=le,nt.addEventListener("config-changed",le),nt.addEventListener("value-changed",le),Ae=nt,rt!=="yaml"&&re("visual"),ae(!0),!0}finally{$===pt&&(S.hidden=!0)}},$t=async j=>{Me=await this._mountYamlEditor(L,j,async $=>{var pe,ve;try{let le=($==null?void 0:$.type)||Ee,_e=this._shapeBySchema(le,$||{}),W=le!==Ee;if(Ee=le,ne=_e,C.hidden=!0,C.textContent="",ae(!0),W){if(Et(Ee,ne),Ae){try{(pe=Ae.setConfig)==null||pe.call(Ae,ne)}catch{}rt!=="yaml"&&re("visual")}try{qe(ne)}catch{}}else{try{(ve=Ae==null?void 0:Ae.setConfig)==null||ve.call(Ae,ne)}catch{}ot(ne);try{qe(ne)}catch{}}}catch(le){C.hidden=!1,C.textContent=`Invalid config: ${String((le==null?void 0:le.message)||le)}`,ae(!1)}},$=>{C.hidden=!1,C.textContent=`Invalid YAML: ${String(($==null?void 0:$.message)||$)}`,ae(!1)})},_t=async j=>{if(this.__stubCache.has(j))return{...this.__stubCache.get(j)};let $=await this._getStubConfigForType(j);return this.__stubCache.set(j,{...$}),{...$}},Ft=async j=>{C.hidden=!0,C.textContent="",H(""),Ee=j;try{typeof ct=="function"&&ct(j)}catch{}let $=e==="edit"&&n&&n.type===j?{...n}:await _t(j);ne=this._shapeBySchema(j,$),Ae=null,Et(j,ne),await $t(ne),await Tr(),ot(ne);try{qe(ne)}catch{}try{let pe=await st(ne);re(pe?"visual":"yaml")}catch{re("yaml")}ae(!0)},At=async()=>{if(!ne)return;let j=this._shapeBySchema(Ee,ne);e==="edit"&&typeof o=="function"?await o(j):(await this._addPickedCardToLayout(j),this._pushRecent((j||{}).type)),c()};m.addEventListener("click",c),v.addEventListener("click",c),u.addEventListener("click",At),f.addEventListener("click",At),s.addEventListener("keydown",j=>{j.key==="Escape"&&c(),j.key==="Enter"&&!u.disabled&&At()});let mt=null;y.addEventListener("input",()=>{mt&&clearTimeout(mt),mt=setTimeout(et,120)}),et(),await Ft((()=>{var pe;return(((pe=this._getRecent)==null?void 0:pe.call(this))||[]).find(Boolean)||"entities"})()),ae(!0),e==="edit"&&n&&(await Ft(n.type||"entities"),ae(!0))}async _getStubConfigForType(e){var m;let n=await this._helpersPromise||await window.loadCardHelpers(),o=null;if(e==="custom_card")return null;try{n.getCardElementClass&&(o=await n.getCardElementClass(e))}catch{}let c=Object.keys(((m=this.hass)==null?void 0:m.states)||{}),s=v=>c.filter(y=>y.startsWith(v+".")),l={type:e};if(o!=null&&o.getStubConfig)try{let v=await o.getStubConfig(this.hass,c,s);if(e!=="entity")return v;v&&typeof v=="object"&&(l={...l,...v})}catch{}let u=c[0],f=s("sensor")[0]||u;if(["entity","sensor","button","gauge","tile","light","thermostat","media-control","alarm-panel","picture-entity","weather-forecast","map"].includes(e)){let v={sensor:f,gauge:s("sensor").find(this._isNumericEntity.bind(this))||f,"media-control":s("media_player")[0]||u,light:s("light")[0]||u,thermostat:s("climate")[0]||u,"alarm-panel":s("alarm_control_panel")[0]||u,"weather-forecast":s("weather")[0]||u,map:s("device_tracker")[0]||s("person")[0]||u}[e]||f||u;["entity","sensor","button","gauge","tile","light","thermostat","media-control","alarm-panel","picture-entity"].includes(e)?l.entity=v:e==="weather-forecast"?(l.entity=v,l.show_current=!0,l.show_forecast=!0,l.forecast_type="daily"):e==="map"&&(l.entities=[v].filter(Boolean),l.theme_mode="auto")}if(["entities","glance","picture-glance","history-graph","statistics-graph"].includes(e)){let v=y=>(y!=null&&y.length?c.filter(x=>y.includes(x.split(".")[0])):c).slice(0,3);e==="statistics-graph"?l.entities=v(["sensor","number","input_number"]):l.entities=v()}if(e==="markdown"&&(l.content="Markdown card"),e==="sensor"&&(l.graph="line"),e==="button"&&(l.show_name=!0,l.show_icon=!0),e==="tile"&&(l.features_position="bottom",l.vertical=!1),e==="picture-glance"&&(l.title=l.title||"Glance",l.image=l.image||"https://demo.home-assistant.io/stub_config/kitchen.png"),e==="picture-entity"&&(l.image=l.image||"https://demo.home-assistant.io/stub_config/bedroom.png"),e==="iframe"&&(l.url=l.url||"https://www.home-assistant.io",l.aspect_ratio=l.aspect_ratio||"50%"),e==="alarm-panel"&&(l.states=l.states||["arm_home","arm_away"]),e==="area")try{let v=this.hass&&this.hass.areas?Object.values(this.hass.areas):[];v.length?l.area=v[0].area_id||v[0].name||v[0].id:l.area=u?u.split(".")[0]:"default_area",l.display_type="picture",l.alert_classes=l.alert_classes||["moisture","motion"],l.sensor_classes=l.sensor_classes||["temperature","humidity"],l.features_position="bottom"}catch{}return l}_getNextAvailablePosition(){let e=Array.from(this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)")),n=new Set,o=this.gridSize;e.forEach(l=>{let u=parseFloat(l.getAttribute("data-x"))||0,f=parseFloat(l.getAttribute("data-y"))||0,m=parseFloat(getComputedStyle(l).width)||100,v=parseFloat(getComputedStyle(l).height)||100,y=Math.floor(u/o),x=Math.floor(f/o),O=Math.floor((u+m)/o),S=Math.floor((f+v)/o);for(let A=y;A<O;A++)for(let L=x;L<S;L++)n.add(`${A}-${L}`)});let c=0,s=0;for(;n.has(`${c}-${s}`);)c+=6,c>60&&(c=0,s+=6);return{x:c*o,y:s*o}}async _addPickedCardToLayout(e){this._hideEmptyPlaceholder();let n=await this._createCard(e),o=this._makeWrapper(n),c=this._getNextAvailablePosition();this._setCardPosition(o,c.x,c.y),o.style.width=`${14*this.gridSize}px`,o.style.height=`${10*this.gridSize}px`,o.style.zIndex=String(this._highestZ()+1),this.cardContainer.appendChild(o);try{this._rebuildOnce(o.firstElementChild)}catch{}this._initCardInteract(o),this._resizeContainer(),this._queueSave("add"),this._toast("Card added to layout."),this._syncEmptyStateUI();try{this._applyVisibility_()}catch{}}_toggleSelection(e,n=null){let o=n==null?!this._selection.has(e):!!n;o?this._selection.add(e):this._selection.delete(e),e.classList.toggle("selected",o)}_clearSelection(){for(let e of this._selection)e.classList.remove("selected");this._selection.clear()}_copySelection(){var e,n,o;try{let c=this._selection?Array.from(this._selection):[];if(!c.length){(e=this._toast)==null||e.call(this,"Nothing selected to copy.");return}let s=1/0,l=1/0,u=[];for(let f of c){if(f.dataset.placeholder)continue;let m=parseFloat(f.getAttribute("data-x"))||0,v=parseFloat(f.getAttribute("data-y"))||0;m<s&&(s=m),v<l&&(l=v)}for(let f of c){if(f.dataset.placeholder)continue;let m=this._extractCardConfig(f.firstElementChild)||{},v=parseFloat(f.getAttribute("data-x"))||0,y=parseFloat(f.getAttribute("data-y"))||0,x=f.style.width||`${f.getBoundingClientRect().width}px`,O=f.style.height||`${f.getBoundingClientRect().height}px`;u.push({cfg:m,dx:v-s,dy:y-l,width:x,height:O})}window.__DDC_CLIPBOARD__={items:u},(n=this._toast)==null||n.call(this,`Copied ${u.length} card${u.length===1?"":"s"}.`)}catch(c){console.warn("[drag-and-drop-card] Copy failed",c),(o=this._toast)==null||o.call(this,"Copy failed.")}}async _pasteClipboard(){var e,n,o,c;try{let s=window.__DDC_CLIPBOARD__;if(!s||!Array.isArray(s.items)||!s.items.length){(e=this._toast)==null||e.call(this,"Clipboard is empty.");return}let l=s.items,u=1,f;do{let y=this.gridSize*u,x=this.gridSize*u;f=l.map(O=>{let S=parseFloat(O.width)||0,A=parseFloat(O.height)||0;return{x:y+(O.dx||0),y:x+(O.dy||0),w:S,h:A}}),u+=1}while(this._anyCollisionFor(f,new Set));let m=this.gridSize*(u-1),v=this.gridSize*(u-1);for(let y of l){let x=y.cfg||{},O=await this._createCard(x),S=this._makeWrapper(O);S.style.width=y.width,S.style.height=y.height;let A=m+(y.dx||0),L=v+(y.dy||0);this._setCardPosition(S,A,L),S.style.zIndex=String(this._highestZ()+1);try{let C=this._normalizeTabId(this.activeTab||this.defaultTab);C&&(S.dataset.tabId=C)}catch{}this.cardContainer.appendChild(S);try{this._rebuildOnce(S.firstElementChild)}catch{}this._initCardInteract(S)}this._resizeContainer(),this._applyActiveTab(),(n=this._queueSave)==null||n.call(this,"paste"),(o=this._toast)==null||o.call(this,`Pasted ${l.length} card${l.length===1?"":"s"}.`)}catch(s){console.warn("[drag-and-drop-card] Paste failed",s),(c=this._toast)==null||c.call(this,"Paste failed.")}}_installSelectionMarquee(){let e=this.cardContainer,n=0,o=0,c=null,s=!1,l=y=>{let x=e.getBoundingClientRect(),O="touches"in y&&y.touches[0]?y.touches[0].clientX:y.clientX,S="touches"in y&&y.touches[0]?y.touches[0].clientY:y.clientY;return{x:O-x.left,y:S-x.top}},u=(y,x)=>{let O=Math.min(y,n),S=Math.max(y,n),A=Math.min(x,o),L=Math.max(x,o);c.style.left=`${O}px`,c.style.top=`${A}px`,c.style.width=`${S-O}px`,c.style.height=`${L-A}px`;let C=c.getBoundingClientRect(),T=e.querySelectorAll(".card-wrapper:not(.ddc-placeholder)");this._clearSelection(),T.forEach(M=>{let _=M.getBoundingClientRect();!(_.right<C.left||_.left>C.right||_.bottom<C.top||_.top>C.bottom)&&this._toggleSelection(M,!0)})},f=y=>{if(!this.editMode||y.target.closest(".card-wrapper"))return;s=!0;let x=l(y);n=x.x,o=x.y,c=document.createElement("div"),c.className="marquee",c.style.left=`${n}px`,c.style.top=`${o}px`,e.appendChild(c),y.preventDefault()},m=y=>{!s||!c||u(l(y).x,l(y).y)},v=()=>{s&&(s=!1,c&&c.remove(),c=null)};e.addEventListener("mousedown",f),window.addEventListener("mousemove",m),window.addEventListener("mouseup",v),e.addEventListener("touchstart",y=>{this.editMode&&(y.target.closest(".card-wrapper")||f(y))},{passive:!1}),window.addEventListener("touchmove",y=>{m(y)},{passive:!0}),window.addEventListener("touchend",v),window.addEventListener("touchcancel",v)}async _openDiagnostics(){var u,f;let e=document.createElement("div");e.className="modal";let n=this.storageKey||"(none)",o=this._backendOK&&!!this.storageKey,c=m=>m.slice(-200).map(v=>`<div style="font-family:monospace;font-size:.85rem;line-height:1.3">
        <span style="opacity:.6">${v.t}</span>
        <b style="margin-left:6px;color:#03a9f4">[${v.kind}]</b>
        <span style="margin-left:6px">${this._safe(v.msg)}</span>
        ${v.extra?`<pre style="margin:4px 0 0 0;white-space:pre-wrap;background:var(--card-background-color);border:1px solid var(--divider-color);border-radius:8px;padding:6px;max-height:160px;overflow:auto">${this._safe(JSON.stringify(v.extra,null,2))}</pre>`:""}
      </div>`).join("");e.innerHTML=`
      <div class="dialog" style="max-width:1100px;width:min(1100px,95%);height:min(90vh,860px)">
        <div class="dlg-head">
          <h3>Drag & Drop \u2014 Diagnostics</h3>
          <button class="btn secondary" id="closeDiag"><ha-icon icon="mdi:close"></ha-icon><span style="margin-left:6px">Close</span></button>
        </div>
        <div style="display:block;overflow:auto;padding:12px">
          <div class="section" style="border:1px solid var(--divider-color);border-radius:12px;background:var(--card-background-color);margin-bottom:10px">
            <div class="hd" style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border-bottom:1px solid var(--divider-color);font-weight:600">Status</div>
            <div class="bd" style="padding:12px">
              <div style="display:grid;grid-template-columns:220px 1fr;gap:6px;align-items:center">
                <div>Storage key (raw \u2192 slug)</div><div><code>${this._safe(((u=this._config)==null?void 0:u.storage_key)||"")}</code> \u2192 <code>${this._safe(n)}</code></div>
                <div>Backend reachable</div><div><b>${this._backendOK?"YES":"NO"}</b></div>
                <div>Persist target</div><div><b>${o?"Host (backend)":"Browser (localStorage)"}</b></div>
                <div>Auto-save</div><div>${this.autoSave?`ON (${this.autoSaveDebounce} ms)`:"OFF"}</div>
                <div>Cards mounted</div><div>${((f=this.cardContainer)==null?void 0:f.querySelectorAll(".card-wrapper:not(.ddc-placeholder)").length)||0}</div>
              </div>
              <div style="margin-top:10px;display:flex;gap:8px;flex-wrap:wrap">
                <button class="btn" id="testRoundtrip"><ha-icon icon="mdi:sync"></ha-icon><span style="margin-left:6px">Test backend round-trip</span></button>
                <button class="btn secondary" id="exportJson"><ha-icon icon="mdi:download"></ha-icon><span style="margin-left:6px">Export JSON</span></button>
                <button class="btn secondary" id="importJson"><ha-icon icon="mdi:upload"></ha-icon><span style="margin-left:6px">Import JSON</span></button>
                <button class="btn" id="forceSave"><ha-icon icon="mdi:content-save"></ha-icon><span style="margin-left:6px">Force save now</span></button>
                <button class="btn secondary" id="refreshKeys"><ha-icon icon="mdi:refresh"></ha-icon><span style="margin-left:6px">Refresh backend keys</span></button>
              </div>
            </div>
          </div>
          <div class="section" style="border:1px solid var(--divider-color);border-radius:12px;background:var(--card-background-color)">
            <div class="hd" style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border-bottom:1px solid var(--divider-color);font-weight:600">Logs (latest)</div>
            <div class="bd" id="logArea" style="padding:12px;max-height:420px;overflow:auto">${c(this._dbgDump())}</div>
          </div>
        </div>
      </div>`;let s=()=>e.remove();e.querySelector("#closeDiag").addEventListener("click",s),this.shadowRoot.appendChild(e);let l=()=>{let m=e.querySelector("#logArea"),v=y=>y.slice(-200).map(x=>`<div style="font-family:monospace;font-size:.85rem;line-height:1.3">
          <span style="opacity:.6">${x.t}</span>
          <b style="margin-left:6px;color:#03a9f4">[${x.kind}]</b>
          <span style="margin-left:6px">${this._safe(x.msg)}</span>
          ${x.extra?`<pre style="margin:4px 0 0 0;white-space:pre-wrap;background:var(--card-background-color);border:1px solid var(--divider-color);border-radius:8px;padding:6px;max-height:160px;overflow:auto">${this._safe(JSON.stringify(x.extra,null,2))}</pre>`:""}
        </div>`).join("");m.innerHTML=v(this._dbgDump()),m.scrollTop=m.scrollHeight};e.querySelector("#refreshKeys").addEventListener("click",async()=>{try{this._dbgPush("probe","Manual refresh"),await this._probeBackend()}finally{l()}}),e.querySelector("#forceSave").addEventListener("click",async()=>{await this._saveLayout(!1),l()}),e.querySelector("#exportJson").addEventListener("click",()=>{let v=Array.from(this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)")).map(S=>{let A=parseFloat(S.getAttribute("data-x"))||0,L=parseFloat(S.getAttribute("data-y"))||0,C=parseFloat(S.style.width)||S.getBoundingClientRect().width,T=parseFloat(S.style.height)||S.getBoundingClientRect().height,M=parseInt(S.style.zIndex||"1",10),_=this._extractCardConfig(S.firstElementChild),P=S.dataset.tabId||this.defaultTab;return{card:_,position:{x:A,y:L},size:{width:C,height:T},z:M,tabId:P}}),y={version:2,options:this._exportableOptions(),cards:v},x=new Blob([JSON.stringify(y,null,2)],{type:"application/json"}),O=document.createElement("a");O.href=URL.createObjectURL(x),O.download=`ddc_${this.storageKey||"layout"}.json`,O.click(),URL.revokeObjectURL(O.href)}),e.querySelector("#importJson").addEventListener("click",async()=>{let m=document.createElement("input");m.type="file",m.accept="application/json",m.onchange=async()=>{var O,S,A,L,C,T,M,_,P,D,K,J,U;let v=(O=m.files)==null?void 0:O[0];if(!v)return;let y=await v.text();try{let ae=JSON.parse(y);if(this._dbgPush("import","Loaded file",{bytes:y.length}),this.cardContainer.innerHTML="",(S=ae.cards)!=null&&S.length)for(let H of ae.cards)if(!(H!=null&&H.card)||typeof H.card=="object"&&Object.keys(H.card).length===0){let G=this._makePlaceholderAt(((A=H.position)==null?void 0:A.x)||0,((L=H.position)==null?void 0:L.y)||0,((C=H.size)==null?void 0:C.width)||200,((T=H.size)==null?void 0:T.height)||200);this.cardContainer.appendChild(G)}else{let G=await this._createCard(H.card),ee=this._makeWrapper(G);this._setCardPosition(ee,((M=H.position)==null?void 0:M.x)||0,((_=H.position)==null?void 0:_.y)||0),ee.dataset.tabId=this._normalizeTabId(H.tabId||H.tab_id||this.defaultTab),this._setCardPosition(ee,((P=H.position)==null?void 0:P.x)||0,((D=H.position)==null?void 0:D.y)||0),ee.style.width=`${((K=H.size)==null?void 0:K.width)||140}px`,ee.style.height=`${((J=H.size)==null?void 0:J.height)||100}px`,this.cardContainer.appendChild(ee);try{this._rebuildOnce(ee.firstElementChild)}catch{}this._initCardInteract(ee)}else this._showEmptyPlaceholder(),(U=this._applyAutoScale)==null||U.call(this);this._resizeContainer(),await this._saveLayout(!1)}catch(ae){this._dbgPush("import","Parse failed",{error:String(ae)})}let x=new Event("ddc-logrefresh");window.dispatchEvent(x)},m.click()}),e.querySelector("#testRoundtrip").addEventListener("click",async()=>{if(!this._backendOK)return this._dbgPush("test","Backend not reachable, aborting"),l();let m=(this.storageKey||"ddc_test")+"_selftest",v={t:Date.now(),msg:"roundtrip"};try{await this._saveLayoutToBackend(m,v);let y=await this._loadLayoutFromBackend(m);this._dbgPush("test","Round-trip result",{wrote:v,read:y})}catch(y){this._dbgPush("test","Round-trip failed",{error:String(y)})}l()}),l()}_openDashboardSettings(){var W,Z,Ie,Y,Ke,Ye,Qe,Fe,tt,Ve,Ge,$e,je,Te,he,we,Le,xe,se;let e=document.createElement("div");e.className="modal",this._ensureSettingsStyles_(),e.innerHTML=`
<div class="dialog modern" role="dialog" aria-modal="true">
  <div class="dlg-head">
    <h3>Dashboard Settings</h3>
    <button class="icon-btn" id="ddc-settings-close" title="Close" aria-label="Close dialog">
      <ha-icon icon="mdi:close"></ha-icon>
    </button>
  </div>

  <div class="settings-body">

    <!-- Layout -->
    <section class="card" aria-labelledby="layout-head">
      <div class="section-head">
        <ha-icon icon="mdi:view-grid-plus-outline" aria-hidden="true"></ha-icon>
        <h4 id="layout-head">Layout</h4>
      </div>
      <p class="caption">Control grid density, canvas sizing, and card behavior.</p>

      <!-- GRID SIZE -->
      <div class="setting" role="group" aria-labelledby="lbl-grid-size">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:grid" aria-hidden="true"></ha-icon>
            <label id="lbl-grid-size" for="ddc-setting-gridSize">Grid size</label>
          </div>
          <div class="control">
            <div class="range-wrap">
              <input type="range" id="ddc-setting-gridSize" min="1" max="400" step="1" />
              <output id="ddc-grid-out" for="ddc-setting-gridSize">100 px</output>
            </div>
          </div>
        </div>
        <div class="hint">Cards snap every <b>N</b> pixels. Lower values give a denser grid for finer placement.</div>
      </div>

      <!-- GRID PREVIEW -->
      <div class="preview">
        <div class="grid-demo" id="ddc-grid-demo">
          <div class="grid-meta-badge" id="ddc-grid-meta"></div>
        </div>
      </div>

      <!-- QUICK CANVAS SIZES -->
      <div class="setting" role="group" aria-labelledby="lbl-quick-sizes">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:move-resize" aria-hidden="true"></ha-icon>
            <span id="lbl-quick-sizes">Quick canvas sizes</span>
          </div>
          <div class="control chips" role="group" aria-label="Quick sizes">
            <button class="chip" data-w="1280" data-h="720">Tablet (1280\xD7720)</button>
            <button class="chip" data-w="1920" data-h="1080" aria-pressed="true">Desktop (1920\xD71080)</button>
            <button class="chip" data-w="2560" data-h="1440">WQHD (2560\xD71440)</button>
          </div>
        </div>
        <div class="hint">Applies a fixed custom canvas size instantly. Switch back to Dynamic or Preset below if needed.</div>
      </div>

      <!-- AUTO RESIZE -->
      <div class="setting" role="group" aria-labelledby="lbl-auto-resize">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:resize" aria-hidden="true"></ha-icon>
            <label id="lbl-auto-resize" for="ddc-setting-autoResize">Auto resize cards</label>
          </div>
          <div class="control">
            <ha-switch id="ddc-setting-autoResize"></ha-switch>
          </div>
        </div>
        <div class="hint">Scale the layout with the viewport. Off = fixed canvas size.</div>
      </div>

      <!-- LIVE SNAP -->
      <div class="setting" role="group" aria-labelledby="lbl-live-snap">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:drag-variant" aria-hidden="true"></ha-icon>
            <label id="lbl-live-snap" for="ddc-setting-dragSnap">Live snap while dragging</label>
          </div>
          <div class="control">
            <ha-switch id="ddc-setting-dragSnap"></ha-switch>
          </div>
        </div>
        <div class="hint">While dragging, cards snap to the nearest grid lines in real time.</div>
      </div>

      <!-- OVERLAP -->
      <div class="setting" role="group" aria-labelledby="lbl-prevent-overlap">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:animation" aria-hidden="true"></ha-icon>
            <label id="lbl-prevent-overlap" for="ddc-setting-disableOverlap">Prevent overlap</label>
          </div>
          <div class="control">
            <ha-switch id="ddc-setting-disableOverlap"></ha-switch>
          </div>
        </div>
        <div class="hint">Blocks placements that would overlap another card.</div>
      </div>

      <div class="divider" role="separator" aria-hidden="true"></div>

      <!-- SIZE MODE -->
      <div class="setting" role="group" aria-labelledby="lbl-size-mode">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:move-resize" aria-hidden="true"></ha-icon>
            <label id="lbl-size-mode" for="ddc-setting-sizeMode">Container size mode</label>
          </div>
          <div class="control">
            <select id="ddc-setting-sizeMode">
              <option value="dynamic">Dynamic</option>
              <option value="preset">Preset</option>
              <option value="auto">Auto</option>
              <option value="fixed_custom">Fixed (custom)</option>
            </select>
          </div>
        </div>
        <div class="hint">Dynamic fits the available space (reflows grid). Auto scales the whole grid to fit, preserving positions. Preset uses common screen sizes. Fixed lets you specify width &amp; height.</div>
      </div>

      <!-- SIZE EXTRAS (injected) -->
      <div id="ddc-setting-sizeExtras" class="setting" aria-live="polite"></div>

      <!-- ORIENTATION -->
      <div class="setting" role="group" aria-labelledby="lbl-orientation">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:phone-rotate-landscape" aria-hidden="true"></ha-icon>
            <label id="lbl-orientation" for="ddc-setting-orient">Orientation</label>
          </div>
          <div class="control">
            <select id="ddc-setting-orient">
              <option value="auto">Auto</option>
              <option value="landscape">Landscape</option>
              <option value="portrait">Portrait</option>
            </select>
          </div>
        </div>
        <div class="hint">For presets and fixed sizes, choose a preferred orientation. Auto adapts to the screen.</div>
      </div>

      <div class="divider" role="separator" aria-hidden="true"></div>

      <!-- AUTOSAVE -->
      <div class="setting" role="group" aria-labelledby="lbl-autosave">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:content-save" aria-hidden="true"></ha-icon>
            <label id="lbl-autosave" for="ddc-setting-autoSave">Auto save</label>
          </div>
          <div class="control">
            <ha-switch id="ddc-setting-autoSave"></ha-switch>
          </div>
        </div>
        <div class="hint">Automatically persist layout changes after you drag or edit.</div>
      </div>

      <!-- AUTOSAVE DELAY -->
      <div class="setting" role="group" aria-labelledby="lbl-autosave-delay">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:timer-outline" aria-hidden="true"></ha-icon>
            <label id="lbl-autosave-delay" for="ddc-setting-autoSaveDebounce">Auto save delay (ms)</label>
          </div>
          <div class="control">
            <input type="number" id="ddc-setting-autoSaveDebounce" min="100" max="10000" step="50" />
          </div>
        </div>
        <div class="hint">Wait time after the last change before saving. Lower = more frequent saves.</div>
      </div>

      <!-- EDIT MODE PIN/PASSWORD -->
      <div class="setting" role="group" aria-labelledby="lbl-edit-pin">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:lock-outline" aria-hidden="true"></ha-icon>
            <label id="lbl-edit-pin" for="ddc-setting-editPin">Edit mode PIN / password</label>
          </div>
          <div class="control">
            <input type="password" id="ddc-setting-editPin" placeholder="Leave blank to disable" />
          </div>
        </div>
        <div class="hint">If set, this code is required to enter Edit Mode.</div>
      </div>
    </section>

    <!-- Appearance -->
    <section class="card" aria-labelledby="appearance-head">
      <div class="section-head">
        <ha-icon icon="mdi:palette-swatch" aria-hidden="true"></ha-icon>
        <h4 id="appearance-head">Appearance</h4>
      </div>
      <p class="caption">Choose backgrounds and colors. Use theme vars like <code>var(--ha-card-background)</code>.</p>

      <!-- CONTAINER BG -->
      <div class="setting" role="group" aria-labelledby="lbl-container-bg">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:palette-swatch" aria-hidden="true"></ha-icon>
            <label id="lbl-container-bg" for="ddc-setting-containerBg">Container background</label>
          </div>
          <div class="control">
            <div class="stack">
              <div class="color-pair">
                <input type="color" id="ddc-color-containerBg" />
                <input type="text" id="ddc-setting-containerBg" placeholder="transparent \xB7 #123456 \xB7 var(--ha-card-background)" />
              </div>
              <div class="swatches" id="ddc-swatches-containerBg"></div>
              <div class="gradients" id="ddc-gradients-containerBg"></div>
            </div>
          </div>
        </div>
        <div class="hint">Accepts plain colors or theme variables.</div>
      </div>

      <!-- CARD BG -->
      <div class="setting" role="group" aria-labelledby="lbl-card-bg">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:palette-swatch" aria-hidden="true"></ha-icon>
            <label id="lbl-card-bg" for="ddc-setting-cardBg">Card background</label>
          </div>
          <div class="control">
            <div class="stack">
              <div class="color-pair">
                <input type="color" id="ddc-color-cardBg" />
                <input type="text" id="ddc-setting-cardBg" placeholder="#121212 \xB7 var(--ha-card-background)" />
              </div>
              <div class="swatches" id="ddc-swatches-cardBg"></div>
              <div class="gradients" id="ddc-gradients-cardBg"></div>
            </div>
          </div>
        </div>
        <div class="hint">Affects the background of each draggable card container.</div>
      </div>

      <div class="divider" role="separator" aria-hidden="true"></div>

      <!-- BACKGROUND MODE -->
      <div class="setting" role="group" aria-labelledby="lbl-bg-mode">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:layers-triple" aria-hidden="true"></ha-icon>
            <label id="lbl-bg-mode" for="ddc-bg-mode">Background type</label>
          </div>
          <div class="control">
            <select id="ddc-bg-mode">
              <option value="none">None</option>
              <option value="image">Image</option>
              <option value="particles">Animated (particles.js)</option>
              <option value="youtube">YouTube video</option>
            </select>
          </div>
        </div>
        <div class="hint">Choose what renders behind your cards.</div>
      </div>

      <!-- BACKGROUND: IMAGE -->
      <div class="setting" data-bg-section="image" role="group" aria-labelledby="lbl-bg-image">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:image-outline" aria-hidden="true"></ha-icon>
            <label id="lbl-bg-image" for="ddc-setting-bgImg">Background image</label>
          </div>
          <div class="control">
            <div class="stack">
              <div class="input-file">
                <label class="file-btn" for="ddc-file-bg">Upload image</label>
                <input id="ddc-file-bg" type="file" accept="image/*" />
                <div class="thumb" id="ddc-bg-thumb"></div>
                <button type="button" class="btn secondary" id="ddc-clear-bg">Delete</button>
              </div>

              <div class="row">
                <label for="ddc-setting-bgImg">or URL</label>
                <input type="text" id="ddc-setting-bgImg" placeholder="https://\u2026 or /local/\u2026" />
              </div>

              <div class="bg-opts">
                <label for="ddc-bg-repeat"><ha-icon icon="mdi:repeat"></ha-icon> Repeat</label>
                <select id="ddc-bg-repeat">
                  <option value="no-repeat">No repeat</option>
                  <option value="repeat">Repeat</option>
                  <option value="repeat-x">Repeat X</option>
                  <option value="repeat-y">Repeat Y</option>
                </select>

                <label for="ddc-bg-size"><ha-icon icon="mdi:arrow-expand-all"></ha-icon> Size</label>
                <select id="ddc-bg-size">
                  <option value="cover">Cover</option>
                  <option value="contain">Contain</option>
                  <option value="auto">Auto</option>
                  <option value="100% 100%">Fill (stretch)</option>
                </select>

                <label for="ddc-bg-position"><ha-icon icon="mdi:crosshairs-gps"></ha-icon> Position</label>
                <select id="ddc-bg-position">
                  <option value="center center">Center</option>
                  <option value="top center">Top</option>
                  <option value="bottom center">Bottom</option>
                  <option value="left center">Left</option>
                  <option value="right center">Right</option>
                  <option value="top left">Top left</option>
                  <option value="top right">Top right</option>
                  <option value="bottom left">Bottom left</option>
                  <option value="bottom right">Bottom right</option>
                </select>

                <label for="ddc-bg-attachment"><ha-icon icon="mdi:pin"></ha-icon> Attachment</label>
                <select id="ddc-bg-attachment">
                  <option value="scroll">Scroll</option>
                  <option value="fixed">Fixed</option>
                </select>

                <label for="ddc-bg-opacity"><ha-icon icon="mdi:opacity"></ha-icon> Opacity</label>
                <div class="range-wrap">
                  <input type="range" id="ddc-bg-opacity" min="0" max="100" step="1" />
                  <output id="ddc-bg-opacity-out">100%</output>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hint">Uploads are saved inline as data-URLs. For large files, host under <code>/local/</code> and paste the URL.</div>
      </div>

      <!-- BACKGROUND: PARTICLES -->
      <div class="setting" data-bg-section="particles" role="group" aria-labelledby="lbl-bg-particles" hidden>
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:blur" aria-hidden="true"></ha-icon>
            <label id="lbl-bg-particles" for="ddc-particles-url">Particles.js</label>
          </div>
          <div class="control">
            <div class="stack">
              <label for="ddc-particles-url">Config JSON URL (optional)</label>
              <input type="text" id="ddc-particles-url" placeholder="/local/particles.json or https://\u2026" />
              <div class="hint">If empty, a sensible default is used. For HACS, prefer hosting the library + JSON under <code>/config/www</code> (served as <code>/local/\u2026</code>).</div>

              <label class="row" for="ddc-particles-pointer" style="gap:8px">
                <ha-switch id="ddc-particles-pointer"></ha-switch>
                <span>Enable pointer interactivity (hover/click)</span>
              </label>
              <div class="hint">Leave off if you want guaranteed unobstructed dragging.</div>
            </div>
          </div>
        </div>
      </div>

      <!-- BACKGROUND: YOUTUBE -->
      <div class="setting" data-bg-section="youtube" role="group" aria-labelledby="lbl-bg-youtube" hidden>
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:youtube" aria-hidden="true"></ha-icon>
            <label id="lbl-bg-youtube" for="ddc-youtube-url">YouTube background</label>
          </div>
          <div class="control">
            <div class="stack">
              <label for="ddc-youtube-url">YouTube URL or video ID</label>
              <input type="text" id="ddc-youtube-url" placeholder="https://youtu.be/\u2026 or dQw4w9WgXcQ" />

              <div class="row" style="gap:12px">
                <label for="ddc-youtube-start" class="grow">
                  <span>Start (s)</span>
                  <input type="number" id="ddc-youtube-start" min="0" step="1" />
                </label>
                <label for="ddc-youtube-end" class="grow">
                  <span>End (s)</span>
                  <input type="number" id="ddc-youtube-end" min="1" step="1" />
                </label>
              </div>

              <div class="row" style="gap:18px; align-items:center">
                <label for="ddc-youtube-mute" class="row" style="gap:8px">
                  <ha-switch id="ddc-youtube-mute" checked></ha-switch>
                  <span>Mute</span>
                </label>
                <label for="ddc-youtube-loop" class="row" style="gap:8px">
                  <ha-switch id="ddc-youtube-loop" checked></ha-switch>
                  <span>Loop</span>
                </label>
              </div>

              <div class="row" style="gap:12px">
                <label for="ddc-youtube-size" class="grow">
                  <ha-icon icon="mdi:arrow-expand-all" aria-hidden="true"></ha-icon>
                  <span>Size</span>
                  <select id="ddc-youtube-size">
                    <option value="cover">Cover</option>
                    <option value="contain">Contain</option>
                    <option value="auto">Auto</option>
                    <option value="100% 100%">Fill (stretch)</option>
                  </select>
                </label>

                <label for="ddc-youtube-position" class="grow">
                  <ha-icon icon="mdi:crosshairs-gps" aria-hidden="true"></ha-icon>
                  <span>Position</span>
                  <select id="ddc-youtube-position">
                    <option value="top left">Top left</option>
                    <option value="top">Top</option>
                    <option value="top right">Top right</option>
                    <option value="left">Left</option>
                    <option value="center">Center</option>
                    <option value="right">Right</option>
                    <option value="bottom left">Bottom left</option>
                    <option value="bottom">Bottom</option>
                    <option value="bottom right">Bottom right</option>
                  </select>
                </label>

                <label for="ddc-youtube-attachment" class="grow">
                  <ha-icon icon="mdi:image-lock" aria-hidden="true"></ha-icon>
                  <span>Attachment</span>
                  <select id="ddc-youtube-attachment">
                    <option value="scroll">Scroll</option>
                    <option value="fixed">Fixed</option>
                  </select>
                </label>
              </div>

              <label for="ddc-youtube-opacity">
                <ha-icon icon="mdi:opacity" aria-hidden="true"></ha-icon> Opacity
              </label>
              <div class="range-wrap">
                <input type="range" id="ddc-youtube-opacity" min="0" max="100" step="1" value="100" />
                <output id="ddc-youtube-opacity-out">100%</output>
              </div>

              <div class="hint">Video plays muted, fills the canvas (\u201Ccover\u201D), sits under the grid and cards, and ignores pointer events so dragging remains smooth.</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Behaviour -->
    <section class="card" aria-labelledby="behaviour-head">
      <div class="section-head">
        <ha-icon icon="mdi:tune" aria-hidden="true"></ha-icon>
        <h4 id="behaviour-head">Behaviour</h4>
      </div>
      <p class="caption">Animation, logging, and Home Assistant chrome visibility.</p>

      <!-- ANIMATE -->
      <div class="setting" role="group" aria-labelledby="lbl-animate">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:play-box" aria-hidden="true"></ha-icon>
            <label id="lbl-animate" for="ddc-setting-animate">Animate cards</label>
          </div>
          <div class="control">
            <ha-switch id="ddc-setting-animate"></ha-switch>
          </div>
        </div>
        <div class="hint">Smooth transitions when moving and resizing cards.</div>
      </div>

      <!-- DEBUG -->
      <div class="setting" role="group" aria-labelledby="lbl-debug">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:bug-play-outline" aria-hidden="true"></ha-icon>
            <label id="lbl-debug" for="ddc-setting-debug">Enable debug logging</label>
          </div>
          <div class="control">
            <ha-switch id="ddc-setting-debug"></ha-switch>
          </div>
        </div>
        <div class="hint">Extra console logs for troubleshooting layout issues.</div>
      </div>

      <!-- HIDE HEADER -->
      <div class="setting" role="group" aria-labelledby="lbl-hide-hdr">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:page-layout-header" aria-hidden="true"></ha-icon>
            <label id="lbl-hide-hdr" for="ddc-setting-hideHdr">Hide HA Header</label>
            <ha-icon class="suffix" icon="mdi:thumbs-up-down" title="Preference" aria-hidden="true"></ha-icon>
          </div>
          <div class="control">
            <ha-switch id="ddc-setting-hideHdr"></ha-switch>
          </div>
        </div>
        <div class="hint">Removes the top app bar (Search / Assist / Edit). It auto-shows in Edit mode.</div>
      </div>

      <!-- HIDE SIDEBAR -->
      <div class="setting" role="group" aria-labelledby="lbl-hide-sbar">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:page-layout-sidebar-left" aria-hidden="true"></ha-icon>
            <label id="lbl-hide-sbar" for="ddc-setting-hideSbar">Hide HA Sidebar</label>
            <ha-icon class="suffix" icon="mdi:thumbs-up-down" title="Preference" aria-hidden="true"></ha-icon>
          </div>
          <div class="control">
            <ha-switch id="ddc-setting-hideSbar"></ha-switch>
          </div>
        </div>
        <div class="hint">Hides the left navigation drawer to maximize canvas space.</div>
      </div>
    </section>

    <!-- Screen Saver -->
    <section class="card" aria-labelledby="screensaver-head">
      <div class="section-head">
        <ha-icon icon="mdi:clock-outline" aria-hidden="true"></ha-icon>
        <h4 id="screensaver-head">Screen saver</h4>
      </div>
      <p class="caption">Show a digital clock after inactivity.</p>

      <!-- Enable -->
      <div class="setting" role="group" aria-labelledby="lbl-ss-enable">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:power" aria-hidden="true"></ha-icon>
            <label id="lbl-ss-enable" for="ddc-setting-screenSaverEnabled">Enable screen saver</label>
          </div>
          <div class="control">
            <ha-switch id="ddc-setting-screenSaverEnabled"></ha-switch>
          </div>
        </div>
        <div class="hint">Activate a screen saver overlay with time and date.</div>
      </div>

      <!-- Delay -->
      <div class="setting" role="group" aria-labelledby="lbl-ss-delay">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:timer-outline" aria-hidden="true"></ha-icon>
            <label id="lbl-ss-delay" for="ddc-setting-screenSaverDelay">Activation delay</label>
          </div>
          <div class="control">
            <div class="range-wrap">
              <input type="range" id="ddc-setting-screenSaverDelay" min="1" max="20" step="1" />
              <output id="ddc-screenSaverDelayOut" for="ddc-setting-screenSaverDelay">5 min</output>
            </div>
          </div>
        </div>
        <div class="hint">Delay (in minutes) before the screen saver activates.</div>
      </div>
    </section>

    <!-- Tabs -->
    <section class="card tabs-card" aria-labelledby="tabs-head">
      <div class="section-head">
        <ha-icon icon="mdi:tab" aria-hidden="true"></ha-icon>
        <h4 id="tabs-head">Tabs</h4>
      </div>
      <p class="caption">Create, rename, delete, and choose the default tab. Cards use <code>tabId</code> to decide where they appear.</p>

      <!-- Current tabs list -->
      <div id="ddc-tabs-list" class="setting" aria-live="polite"></div>

      <!-- Add new tab -->
      <div class="setting" role="group" aria-labelledby="lbl-add-tab">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:tab-plus" aria-hidden="true"></ha-icon>
            <label id="lbl-add-tab" for="ddc-new-tab-name">Add tab</label>
          </div>
          <div class="control">
            <div class="row">
              <input type="text" id="ddc-new-tab-name" placeholder="e.g. Lights" class="grow" />
              <button class="btn primary" id="ddc-add-tab-btn">Add</button>
            </div>
          </div>
        </div>
        <div class="hint">Tab IDs must be unique. The label defaults to the ID if left empty.</div>
      </div>
    </section>

  </div>

  <div class="footer">
    <button class="btn secondary" id="ddc-settings-cancel">Cancel</button>
    <button class="btn primary" id="ddc-settings-save">Save</button>
  </div>
</div>

`;let n=this.shadowRoot.querySelector(".modal");if(n){try{n.remove()}catch{}this.__settingsModal===n&&(this.__settingsModal=null)}if(this.__settingsModal){try{this.__settingsModal.remove()}catch{}this.__settingsModal=null}this.__settingsModal=e,this.shadowRoot.appendChild(e);let o=e.querySelector("#ddc-setting-autoResize"),c=e.querySelector("#ddc-setting-gridSize"),s=e.querySelector("#ddc-setting-animate"),l=e.querySelector("#ddc-setting-hideHdr"),u=e.querySelector("#ddc-setting-hideSbar"),f=e.querySelector("#ddc-setting-dragSnap"),m=e.querySelector("#ddc-setting-autoSave"),v=e.querySelector("#ddc-setting-autoSaveDebounce"),y=e.querySelector("#ddc-setting-sizeMode"),x=e.querySelector("#ddc-setting-orient"),O=e.querySelector("#ddc-setting-disableOverlap"),S=e.querySelector("#ddc-setting-editPin"),A=e.querySelector("#ddc-setting-containerBg"),L=e.querySelector("#ddc-setting-cardBg"),C=e.querySelector("#ddc-setting-bgImg"),T=e.querySelector("#ddc-bg-repeat"),M=e.querySelector("#ddc-bg-size"),_=e.querySelector("#ddc-bg-position"),P=e.querySelector("#ddc-bg-attachment"),D=e.querySelector("#ddc-bg-opacity"),K=e.querySelector("#ddc-bg-opacity-out"),J=e.querySelector("#ddc-setting-debug"),U=e.querySelector("#ddc-setting-screenSaverEnabled"),ae=e.querySelector("#ddc-setting-screenSaverDelay"),H=e.querySelector("#ddc-screenSaverDelayOut"),G=e.querySelector("#ddc-bg-mode"),ee=e.querySelector('[data-bg-section="image"]'),ue=e.querySelector('[data-bg-section="particles"]'),We=e.querySelector('[data-bg-section="youtube"]'),fe=e.querySelector("#ddc-particles-url"),Oe=e.querySelector("#ddc-particles-pointer"),Ce=e.querySelector("#ddc-youtube-url"),ke=e.querySelector("#ddc-youtube-start"),Xe=e.querySelector("#ddc-youtube-end"),Je=e.querySelector("#ddc-youtube-mute"),Ue=e.querySelector("#ddc-youtube-loop"),at=e.querySelector("#ddc-youtube-size"),ct=e.querySelector("#ddc-youtube-position"),rt=e.querySelector("#ddc-youtube-attachment"),re=e.querySelector("#ddc-youtube-opacity"),ft=e.querySelector("#ddc-youtube-opacity-out"),et=((W=this._config)==null?void 0:W.background_image)||{},Ne=((Z=this._config)==null?void 0:Z.background_mode)||((Y=(Ie=this._config)==null?void 0:Ie.background_image)!=null&&Y.src?"image":"none");G&&(G.value=String(Ne));let ne=((Ke=this._config)==null?void 0:Ke.background_particles)||{};fe&&(fe.value=ne.config_url||""),Oe&&(Oe.checked=!!ne.pointer_events);let Ee=((Ye=this._config)==null?void 0:Ye.background_youtube)||{},Me=Ee.url||Ee.video_id||"";if(Ce&&(Ce.value=Me),ke&&(ke.value=(Qe=Ee.start)!=null?Qe:""),Xe&&(Xe.value=(Fe=Ee.end)!=null?Fe:""),Je&&(Je.checked=Ee.mute!==!1),Ue&&(Ue.checked=Ee.loop!==!1),at&&(at.value=String(Ee.size||"cover")),ct&&(ct.value=String(Ee.position||"center")),rt&&(rt.value=String(Ee.attachment||"scroll")),re){let I=Math.round((Ee.opacity!=null?Ee.opacity:1)*100);re.value=String(I),ft&&(ft.textContent=I+"%"),re.addEventListener("input",()=>{let N=Math.max(0,Math.min(100,parseInt(re.value||"100",10)));ft&&(ft.textContent=N+"%")})}let Ae=()=>{let I=(G==null?void 0:G.value)||"none";ee&&(ee.style.display=I==="image"?"":"none"),ue&&(ue.style.display=I==="particles"?"":"none"),We&&(We.style.display=I==="youtube"?"":"none")};if(G==null||G.addEventListener("change",Ae),Ae(),o&&(o.checked=!!this.autoResizeCards),c&&(c.value=String(this.gridSize||100)),s&&(s.checked=!!this.animateCards),l&&(l.checked=!!this.hideHaHeader),u&&(u.checked=!!this.hideHaSidebar),f&&(f.checked=!!this.dragLiveSnap),m&&(m.checked=!!this.autoSave),v&&(v.value=String((tt=this.autoSaveDebounce)!=null?tt:800)),y&&(y.value=String(this.containerSizeMode||"dynamic")),x&&(x.value=String(this.containerPresetOrient||"auto")),O&&(O.checked=!!this.disableOverlap),A&&(A.value=String(this.containerBackground||"")),L&&(L.value=String(this.cardBackground||"")),C){let I=(($e=(Ve=this._config)==null?void 0:Ve.background_image)!=null?$e:(Ge=this._config)==null?void 0:Ge.bg_image)||{};C.value=I.src?String(I.src):""}if(J&&(J.checked=!!this.debug),T&&(T.value=String(et.repeat||"no-repeat")),M&&(M.value=String(et.size||"cover")),_&&(_.value=String(et.position||"center center")),P&&(P.value=String(et.attachment||"scroll")),D){let I=Math.round((et.opacity!=null?et.opacity:1)*100);D.value=String(I),K&&(K.textContent=`${I}%`),D.addEventListener("input",()=>{let N=Math.max(0,Math.min(100,parseInt(D.value||"100",10)));K.textContent=`${N}%`,this.style.setProperty("--ddc-bg-opacity",String(N/100))})}if(U&&(U.checked=!!this.screenSaverEnabled,U.addEventListener("change",()=>{this.screenSaverEnabled=U.checked,typeof this._updateScreensaverSettings=="function"&&this._updateScreensaverSettings()})),ae){let I=this.screenSaverDelay!=null?Number(this.screenSaverDelay):3e5,N=Math.round(I/6e4);(!Number.isFinite(N)||N<1)&&(N=5),N>20&&(N=20),ae.value=String(N),H&&(H.textContent=`${N} min`),ae.addEventListener("input",()=>{let B=parseInt(ae.value||"1",10),F=Math.max(1,Math.min(20,isNaN(B)?1:B));H&&(H.textContent=`${F} min`),this.screenSaverDelay=F*6e4,typeof this._updateScreensaverSettings=="function"&&this._updateScreensaverSettings()})}try{if(S){let I=this.config&&this.config.edit_mode_pin!=null?String(this.config.edit_mode_pin):"",N=this.editModePin!=null?String(this.editModePin):"";S.value=N||I||"",S.disabled=!1,S.readOnly=!1}}catch{}let nt=e.querySelector("#ddc-setting-gridSize"),pt=e.querySelector("#ddc-grid-out"),bt=e.querySelector("#ddc-grid-demo"),Ct=e.querySelector("#ddc-grid-meta"),Et=()=>{if(!bt||!Ct)return;let I=bt.getBoundingClientRect(),N=Math.max(1,parseInt(nt.value||"100",10)),B=Math.max(1,Math.floor(I.width/N)),F=Math.max(1,Math.floor(I.height/N));Ct.innerHTML=`
        <ha-icon icon="mdi:grid"></ha-icon>
        <span>${N}px \xB7 ${B}\xD7${F}</span>
      `},Pt=()=>{let I=Math.max(1,parseInt(nt.value||"100",10));pt&&(pt.textContent=`${I} px`),bt&&bt.style.setProperty("--g",`${I}px`),Et()};if(nt&&(nt.value||(nt.value=String(this.gridSize||100)),nt.addEventListener("input",Pt),Pt()),bt){let I=new ResizeObserver(()=>Et());I.observe(bt),(Te=(je=this.__ddcGridRO)==null?void 0:je.disconnect)==null||Te.call(je),this.__ddcGridRO=I}e.querySelectorAll(".chip").forEach(I=>{I.addEventListener("click",()=>{var V,ie;e.querySelectorAll(".chip").forEach(oe=>oe.setAttribute("aria-pressed","false")),I.setAttribute("aria-pressed","true");let N=parseInt(I.dataset.w,10),B=parseInt(I.dataset.h,10),F=e.querySelector("#ddc-setting-sizeMode");F.value="fixed_custom",(ie=(V=typeof y!="undefined"&&y)==null?void 0:V.dispatchEvent)==null||ie.call(V,new Event("change")),setTimeout(()=>{var be,Be,De;(be=e.querySelector("#ddc-setting-custW"))==null||be.setAttribute("value",String(N)),(De=(Be=e.querySelector("#ddc-setting-custW"))==null?void 0:Be.dispatchEvent)==null||De.call(Be,new Event("change"));let oe=e.querySelector("#ddc-setting-custW");oe&&(oe.value=String(N));let ze=e.querySelector("#ddc-setting-custH");ze&&(ze.value=String(B))},0)})});let Yt=["#ffffff","#f5f7fa","#ebeff5","#121212","#1f2937","#334155","var(--card-background-color)","var(--ha-card-background)","transparent"],qe=(I,N,B)=>{let F=e.querySelector(I),V=e.querySelector(N),ie=e.querySelector(B);!F||!V||(F.innerHTML="",Yt.forEach((oe,ze)=>{let be=document.createElement("button");be.type="button",be.className="swatch",be.title=oe,be.style.background=oe.startsWith("var(")?getComputedStyle(this).getPropertyValue(oe.slice(4,-1)).trim()||"#fff":oe,be.setAttribute("aria-pressed","false"),be.addEventListener("click",()=>{F.querySelectorAll(".swatch").forEach(Be=>Be.setAttribute("aria-pressed","false")),be.setAttribute("aria-pressed","true"),V.value=oe,/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(oe)&&ie&&(ie.value=oe)}),F.appendChild(be),String(V.value).trim()===oe&&be.setAttribute("aria-pressed","true")}))};qe("#ddc-swatches-containerBg","#ddc-setting-containerBg","#ddc-color-containerBg"),qe("#ddc-swatches-cardBg","#ddc-setting-cardBg","#ddc-color-cardBg"),[["#ddc-color-containerBg","#ddc-setting-containerBg"],["#ddc-color-cardBg","#ddc-setting-cardBg"]].forEach(([I,N])=>{let B=e.querySelector(I),F=e.querySelector(N);if(!B||!F)return;let V=(String(F.value||"").match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)||[])[0];V&&(B.value=V),B.addEventListener("input",()=>{F.value=B.value}),F.addEventListener("change",()=>{let ie=(String(F.value||"").match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)||[])[0];ie&&(B.value=ie)})});let ot=e.querySelector("#ddc-file-bg"),st=e.querySelector("#ddc-setting-bgImg"),$t=e.querySelector("#ddc-bg-thumb"),_t=I=>{$t&&($t.style.backgroundImage=I?`url(${I})`:"none")};st!=null&&st.value&&_t(st.value),ot==null||ot.addEventListener("change",async()=>{var F;let I=(F=ot.files)==null?void 0:F[0];if(!I)return;let N=/iPad|iPhone|iPod/.test(navigator.userAgent),B=URL.createObjectURL(I);_t(B),this.style.setProperty("--ddc-bg-image",`url("${B}")`),st&&(st.value=""),(async()=>{if(!N)try{let V=new Image;V.src=B,await V.decode();let ie=Math.min(1920/V.naturalWidth,1080/V.naturalHeight,1),oe=Math.round(V.naturalWidth*ie),ze=Math.round(V.naturalHeight*ie),be=document.createElement("canvas");be.width=oe,be.height=ze,be.getContext("2d",{alpha:!1}).drawImage(V,0,0,oe,ze);let De=be.toDataURL("image/jpeg",.7);De&&De.length<3e5&&st&&(st.value=De)}catch{}})()}),(he=e.querySelector("#ddc-clear-bg"))==null||he.addEventListener("click",()=>{var B,F;st&&(st.value=""),_t("");let{background_image:I,...N}=this._config||{};this._config=N,this.style.setProperty("--ddc-bg-image","none"),(B=this._applyBackgroundFromConfig)==null||B.call(this),(F=this._persistThisCardConfigToStorage_)==null||F.call(this)}),e.addEventListener("click",I=>{I.target===e&&(I.stopPropagation(),_e())});let Ft=I=>{I.key==="Escape"&&(I.stopPropagation(),_e())};document.addEventListener("keydown",Ft,{once:!0}),setTimeout(()=>{var I;return(I=e.querySelector("#ddc-setting-gridSize"))==null?void 0:I.focus()},0);try{let I=e.querySelector("#ddc-setting-sizeExtras"),N=()=>{var F,V;if(!I)return;I.innerHTML="";let B=(y==null?void 0:y.value)||"dynamic";if(B==="fixed_custom"){let ie=document.createElement("label");ie.style.display="flex",ie.style.flexDirection="column",ie.style.fontSize=".95rem",ie.style.marginBottom="10px";let oe=document.createElement("span");oe.textContent="Custom width (px)",oe.style.marginBottom="4px";let ze=document.createElement("input");ze.type="number",ze.id="ddc-setting-custW",ze.min="100",ze.max="10000",ze.step="10",ze.style.padding="6px",ze.style.border="1px solid var(--divider-color,rgba(0,0,0,.3))",ze.style.borderRadius="6px",ze.value=String((F=this.containerFixedWidth)!=null?F:800),ie.appendChild(oe),ie.appendChild(ze);let be=document.createElement("label");be.style.display="flex",be.style.flexDirection="column",be.style.fontSize=".95rem",be.style.marginBottom="10px";let Be=document.createElement("span");Be.textContent="Custom height (px)",Be.style.marginBottom="4px";let De=document.createElement("input");De.type="number",De.id="ddc-setting-custH",De.min="100",De.max="10000",De.step="10",De.style.padding="6px",De.style.border="1px solid var(--divider-color,rgba(0,0,0,.3))",De.style.borderRadius="6px",De.value=String((V=this.containerFixedHeight)!=null?V:600),be.appendChild(Be),be.appendChild(De),I.appendChild(ie),I.appendChild(be)}else if(B==="preset"){let ie=document.createElement("label");ie.style.display="flex",ie.style.flexDirection="column",ie.style.fontSize=".95rem",ie.style.marginBottom="10px";let oe=document.createElement("span");oe.textContent="Preset size",oe.style.marginBottom="4px";let ze=document.createElement("select");ze.id="ddc-setting-preset",ze.style.padding="6px",ze.style.border="1px solid var(--divider-color,rgba(0,0,0,.3))",ze.style.borderRadius="6px",(typeof t!="undefined"&&t._sizePresets?t._sizePresets():[]).forEach(Be=>{let De=document.createElement("option");De.value=Be.key,De.textContent=`${Be.label||Be.key} (${Be.w}\xD7${Be.h})`,ze.appendChild(De)}),ze.value=String(this.containerPreset||"fhd"),ie.appendChild(oe),ie.appendChild(ze),I.appendChild(ie)}};N(),y==null||y.addEventListener("change",N)}catch(I){console.warn("[drag-and-drop-card] Failed to build container size extras",I)}let At=()=>{var N,B,F,V,ie;return((ie=(V=(B=(N=this._config)==null?void 0:N.options)==null?void 0:B.tabs)!=null?V:(F=this._config)==null?void 0:F.tabs)!=null?ie:[]).map(oe=>{var ze,be,Be,De,yt,Lt,Ot;return typeof oe=="string"?{id:oe,label:oe,icon:"",label_mode:"both",__raw:{id:oe,label:oe}}:{id:(Be=(be=(ze=oe.id)!=null?ze:oe.key)!=null?be:oe.label)!=null?Be:"tab",label:(yt=(De=oe.label)!=null?De:oe.id)!=null?yt:"Tab",icon:(Lt=oe.icon)!=null?Lt:"",label_mode:(Ot=oe.label_mode)!=null?Ot:"both",__raw:oe}})},mt=async(I,N)=>{var F,V,ie;let B=I.map(oe=>({...oe.__raw,id:oe.id,label:oe.label,icon:oe.icon||"",label_mode:oe.label_mode||"both"}));(F=this._config)!=null&&F.options?this._config.options={...this._config.options||{},tabs:B,default_tab:N!=null?N:(V=this._config.options)==null?void 0:V.default_tab}:(this._config.tabs=B,N&&(this._config.default_tab=N));try{await this._persistThisCardConfigToStorage_()}catch(oe){console.warn("[drag-and-drop-card] Could not persist tabs",oe)}(ie=this.requestUpdate)==null||ie.call(this)},ge=()=>{var I,N,B,F;return((N=(I=this._config)==null?void 0:I.options)==null?void 0:N.default_tab)||((B=this._config)==null?void 0:B.default_tab)||((F=At()[0])==null?void 0:F.id)},j=e.querySelector("#ddc-tabs-list"),$=()=>{let I=At(),N=ge();if(j.innerHTML="",!I.length){let B=document.createElement("div");B.className="hint",B.textContent="No tabs yet. Add one below.",j.appendChild(B);return}I.forEach((B,F)=>{let V=document.createElement("div");V.className="tab-row";let ie=document.createElement("input");ie.type="radio",ie.name="ddc-default-tab",ie.value=B.id,ie.checked=B.id===N,ie.title="Set as default tab",ie.addEventListener("change",async()=>{await mt(I,B.id)});let oe=document.createElement("div");oe.className="tab-name";let ze=document.createElement("ha-icon");ze.setAttribute("icon",B.icon||"mdi:tab");let be=document.createElement("input");be.value=B.icon||"",be.placeholder="mdi:home",be.title="Tab icon (mdi:...)",be.style.width="160px",be.addEventListener("change",async()=>{B.icon=be.value.trim(),ze.setAttribute("icon",B.icon||"mdi:tab"),I[F]=B,await mt(I,N)});let Be=document.createElement("input");Be.value=B.label,Be.placeholder="Tab name",Be.style.flex="1",Be.addEventListener("change",async()=>{B.label=Be.value.trim()||B.id,I[F]=B,await mt(I,N)});let De=document.createElement("div");De.className="tab-icon-wrap",De.appendChild(ze),De.appendChild(be),oe.appendChild(De),oe.appendChild(Be);let yt=document.createElement("div");yt.className="mode-chips";let Lt=(Bt,Rt)=>{let lt=document.createElement("button");return lt.type="button",lt.className="chip",lt.textContent=Rt,lt.setAttribute("aria-pressed",String((B.label_mode||"both")===Bt)),lt.addEventListener("click",async()=>{yt.querySelectorAll(".chip").forEach(qt=>qt.setAttribute("aria-pressed","false")),lt.setAttribute("aria-pressed","true"),B.label_mode=Bt,I[F]=B,await mt(I,N)}),lt};yt.appendChild(Lt("icon","Icon")),yt.appendChild(Lt("text","Text")),yt.appendChild(Lt("both","Both"));let Ot=document.createElement("div");Ot.className="tab-actions";let zt=document.createElement("button");zt.className="icon-btn danger",zt.innerHTML='<ha-icon icon="mdi:trash-can-outline"></ha-icon>',zt.title="Delete tab",zt.addEventListener("click",async()=>{var lt,qt;let Bt=At().filter(Qt=>Qt.id!==B.id),Rt=N;B.id===N&&(Rt=(lt=Bt[0])==null?void 0:lt.id),await mt(Bt,Rt);try{(qt=this._reassignCardsToTab_)==null||qt.call(this,B.id,Rt)}catch{}$()}),Ot.appendChild(yt),Ot.appendChild(zt),V.appendChild(ie),V.appendChild(oe),V.appendChild(Ot),j.appendChild(V)})};$(),(we=e.querySelector("#ddc-add-tab-btn"))==null||we.addEventListener("click",async()=>{let I=e.querySelector("#ddc-new-tab-name"),N=((I==null?void 0:I.value)||"").trim();if(!N)return;let B=At(),F=N.replace(/\s+/g,"-").toLowerCase(),V=2;for(;B.some(ie=>ie.id===F);)F=`${F}-${V++}`;B.push({id:F,label:N,icon:"",label_mode:"both",__raw:{id:F,label:N}}),await mt(B,ge()),I.value="",$()});let pe=e.querySelector("#ddc-clear-bg");pe&&pe.addEventListener("click",()=>{var B,F,V;let I=e.querySelector("#ddc-setting-bgImg"),N=e.querySelector("#ddc-bg-thumb");I&&(I.value=""),N&&(N.style.backgroundImage="none");try{if((B=this._config)!=null&&B.background_image){let{background_image:ie,...oe}=this._config;this._config=oe}(F=this._applyBackgroundImageFromConfig)==null||F.call(this),(V=this._persistThisCardConfigToStorage_)==null||V.call(this)}catch(ie){console.warn("[drag-and-drop-card] Failed to clear background image",ie)}});let ve=["linear-gradient(135deg, #1e3a8a, #0ea5e9)","linear-gradient(135deg, #111827, #1f2937)","linear-gradient(135deg, #0f766e, #22c55e)","linear-gradient(135deg, #7c3aed, #06b6d4)","linear-gradient(135deg, #f97316, #f43f5e)","linear-gradient(135deg, #eab308, #22d3ee)","radial-gradient(circle at 30% 20%, #2dd4bf, #1e293b)","radial-gradient(circle at 70% 80%, #f59e0b, #7c3aed)"],le=(I,N)=>{let B=e.querySelector(I),F=e.querySelector(N);!B||!F||(B.innerHTML="",ve.forEach(V=>{let ie=document.createElement("button");ie.type="button",ie.className="gradient",ie.style.background=V,ie.setAttribute("aria-pressed","false"),ie.title=V,ie.addEventListener("click",()=>{B.querySelectorAll(".gradient").forEach(oe=>oe.setAttribute("aria-pressed","false")),ie.setAttribute("aria-pressed","true"),F.value=V;try{this.containerBackground=V,this.style.setProperty("--ddc-bg",V)}catch{}}),B.appendChild(ie),String(F.value).trim()===V&&ie.setAttribute("aria-pressed","true")}))};le("#ddc-gradients-containerBg","#ddc-setting-containerBg"),le("#ddc-gradients-cardBg","#ddc-setting-cardBg");let _e=()=>{var I,N;try{(N=(I=this.__ddcGridRO)==null?void 0:I.disconnect)==null||N.call(I),this.__ddcGridRO=null}catch{}try{e.remove()}catch{}this.__settingsModal===e&&(this.__settingsModal=null)};(Le=e.querySelector("#ddc-settings-close"))==null||Le.addEventListener("click",I=>{I.stopPropagation(),_e()}),(xe=e.querySelector("#ddc-settings-cancel"))==null||xe.addEventListener("click",I=>{I.stopPropagation(),_e()}),(se=e.querySelector("#ddc-settings-save"))==null||se.addEventListener("click",I=>{var Ht,ci,Zt,It,Kt,Ni,bi,_i,li,qi,Hi,xi,ji,Wi,wi;I.stopPropagation();let N=!!(o!=null&&o.checked),B=parseInt((c==null?void 0:c.value)||"0",10),F=!!(s!=null&&s.checked),V=!!(l!=null&&l.checked),ie=!!(u!=null&&u.checked),oe=!!(f!=null&&f.checked),ze=!!(m!=null&&m.checked),be=parseInt((v==null?void 0:v.value)||"0",10),Be=(y==null?void 0:y.value)||"dynamic",De=(x==null?void 0:x.value)||"auto",yt=!!(O!=null&&O.checked),Lt=((A==null?void 0:A.value)||"").trim(),Ot=((L==null?void 0:L.value)||"").trim(),zt=((C==null?void 0:C.value)||"").trim(),Bt=!!(J!=null&&J.checked),Rt=((S==null?void 0:S.value)||"").trim(),lt=(G==null?void 0:G.value)||"none",qt=((fe==null?void 0:fe.value)||"").trim(),Qt=!!(Oe!=null&&Oe.checked),Di=((Ce==null?void 0:Ce.value)||"").trim(),Fi=parseInt((ke==null?void 0:ke.value)||"",10),ai=parseInt((Xe==null?void 0:Xe.value)||"",10),Bi=!!(Je!=null&&Je.checked),oi=!!(Ue!=null&&Ue.checked),gi=(at==null?void 0:at.value)||"cover",rr=(ct==null?void 0:ct.value)||"center",mi=re?Math.max(0,Math.min(100,parseInt(re.value||"100",10)))/100:1,yi=(rt==null?void 0:rt.value)||"scroll",nr=!!(U!=null&&U.checked),vi=parseInt((ae==null?void 0:ae.value)||"1",10),si=(Number.isFinite(vi)?vi:1)*6e4;try{if(this.autoResizeCards=N,!this.autoResizeCards&&this.__ddcResizeObs){try{this.__ddcResizeObs.disconnect()}catch{}this.__ddcResizeObs=null,this.__ddcOnWinResize&&(window.removeEventListener("resize",this.__ddcOnWinResize),this.__ddcOnWinResize=null)}if(this.autoResizeCards&&!this.__ddcResizeObs){this.__ddcResizeObs=new ResizeObserver(()=>{var Ze;return(Ze=this._applyAutoScale)==null?void 0:Ze.call(this)});try{this.__ddcResizeObs.observe(this)}catch{}try{this.__ddcResizeObs.observe(this.cardContainer)}catch{}window.addEventListener("resize",this.__ddcOnWinResize=()=>{var Ze;return(Ze=this._applyAutoScale)==null?void 0:Ze.call(this)})}this.autoResizeCards||String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(Ht=this._startScaleWatch)==null||Ht.call(this):(ci=this._stopScaleWatch)==null||ci.call(this),(Zt=this._applyAutoScale)==null||Zt.call(this),!isNaN(B)&&B>0&&B!==this.gridSize&&(this.gridSize=B,(It=this._applyGridVars)==null||It.call(this),(Kt=this._resizeContainer)==null||Kt.call(this)),this.editModePin=Rt,this._config={...this._config||{},edit_mode_pin:Rt};let di=oe!==this.dragLiveSnap;this.dragLiveSnap=oe,di&&((Ni=this._initInteract)==null||Ni.call(this)),this.autoSave=ze,!isNaN(be)&&be>0&&(this.autoSaveDebounce=be);let ar=Be!==this.containerSizeMode;this.containerSizeMode=Be;let Si=De!==this.containerPresetOrient;if(this.containerPresetOrient=De,(ar||Si)&&((bi=this._resizeContainer)==null||bi.call(this)),Be==="fixed_custom"){let Ze=parseInt(((_i=e.querySelector("#ddc-setting-custW"))==null?void 0:_i.value)||"0",10),xt=parseInt(((li=e.querySelector("#ddc-setting-custH"))==null?void 0:li.value)||"0",10);!isNaN(Ze)&&Ze>0&&(this.containerFixedWidth=Ze),!isNaN(xt)&&xt>0&&(this.containerFixedHeight=xt),(qi=this._resizeContainer)==null||qi.call(this)}else if(Be==="preset"){let Ze=(Hi=e.querySelector("#ddc-setting-preset"))==null?void 0:Hi.value;Ze&&(this.containerPreset=Ze),(xi=this._resizeContainer)==null||xi.call(this)}if(this.disableOverlap=yt,Lt&&(this.containerBackground=Lt,this.style.setProperty("--ddc-bg",this.containerBackground)),Ot&&(this.cardBackground=Ot,this.style.setProperty("--ddc-card-bg",this.cardBackground)),zt){let Ze=this._config&&this._config.background_image||{};this._config={...this._config,background_image:{...Ze,src:zt}}}else{let{background_image:Ze,...xt}=this._config||{};this._config=xt}this.debug=Bt,this.animateCards=F,this.hideHaHeader=V,this.hideHaSidebar=ie,(ji=this._applyHaChromeVisibility_)==null||ji.call(this);let ki=this._config&&this._config.background_image||{},Ci=(T==null?void 0:T.value)||"no-repeat",Yi=(M==null?void 0:M.value)||"cover",ei=(_==null?void 0:_.value)||"center center",$i=(P==null?void 0:P.value)||"scroll",Ei=D?Math.max(0,Math.min(100,parseInt(D.value||"100",10)))/100:1;if(this._config=this._config||{},this._config.background_mode=lt,lt!=="image"&&!zt){let{background_image:Ze,...xt}=this._config||{};this._config=xt}if(lt==="particles")this._config.background_particles={config_url:qt||void 0,pointer_events:Qt||void 0};else{let{background_particles:Ze,...xt}=this._config||{};this._config=xt}if(lt==="youtube")this._config.background_youtube={url:Di||void 0,start:Number.isFinite(Fi)?Fi:void 0,end:Number.isFinite(ai)?ai:void 0,mute:Bi!==!0?Bi:void 0,loop:oi!==!0?oi:void 0,size:gi&&gi!="cover"?gi:void 0,position:rr||void 0,attachment:yi&&yi!=="scroll"?yi:void 0,opacity:mi!=null&&mi!==1?mi:void 0};else{let{background_youtube:Ze,...xt}=this._config||{};this._config=xt}if(this.screenSaverEnabled=nr,this.screenSaverDelay=si,(Wi=this._updateScreensaverSettings)==null||Wi.call(this),zt)this._config={...this._config,background_image:{...ki,src:zt,repeat:Ci,size:Yi,position:ei,attachment:$i,opacity:Ei}};else if(ki.src)this._config={...this._config,background_image:{...ki,repeat:Ci,size:Yi,position:ei,attachment:$i,opacity:Ei}};else{let{background_image:Ze,...xt}=this._config||{};this._config=xt}(wi=this._applyBackgroundFromConfig)==null||wi.call(this);try{this._config||(this._config={}),this._config.grid=this.gridSize,this._config.auto_resize_cards=!!this.autoResizeCards,this._config.drag_live_snap=!!this.dragLiveSnap,this._config.auto_save=!!this.autoSave,this._config.auto_save_debounce=this.autoSaveDebounce,this._config.container_size_mode=this.containerSizeMode,this._config.container_preset_orientation=this.containerPresetOrient,this._config.container_fixed_width=this.containerFixedWidth,this._config.container_fixed_height=this.containerFixedHeight,this._config.container_preset=this.containerPreset,this._config.disable_overlap=!!this.disableOverlap,this._config.container_background=this.containerBackground,this._config.card_background=this.cardBackground,this._config.debug=!!this.debug,this._config.animate_cards=!!this.animateCards,this._config.hide_HA_Header=!!this.hideHaHeader,this._config.hide_HA_Sidebar=!!this.hideHaSidebar,this._config.screen_saver_enabled=!!this.screenSaverEnabled,this._config.screen_saver_delay=this.screenSaverDelay}catch(Ze){console.warn("[drag-and-drop-card] Failed to update config",Ze)}this._persistThisCardConfigToStorage_().catch(Ze=>{console.warn("[drag-and-drop-card] Storage save failed (is this a YAML dashboard?)",Ze)})}catch(di){console.warn("[drag-and-drop-card] Failed to apply settings",di)}_e()})}_exportableOptions(){var s,l,u;let e=this._config||{},n=(f,m)=>Object.fromEntries(m.map(v=>[v,f==null?void 0:f[v]]).filter(([,v])=>v!==void 0)),o=e.background_mode||((s=e.background_image)!=null&&s.src?"image":e.background_youtube?"youtube":e.background_particles?"particles":"none"),c={storage_key:this.storageKey||void 0,grid:this.gridSize,drag_live_snap:!!this.dragLiveSnap,auto_save:!!this.autoSave,auto_save_debounce:this.autoSaveDebounce,disable_overlap:!!this.disableOverlap,debug:!!this.debug,edit_mode_pin:this.editModePin||void 0,container_size_mode:this.containerSizeMode,container_preset_orientation:this.containerPresetOrient,container_fixed_width:(l=this.containerFixedWidth)!=null?l:void 0,container_fixed_height:(u=this.containerFixedHeight)!=null?u:void 0,container_preset:this.containerPreset,auto_resize_cards:!!this.autoResizeCards,container_background:this.containerBackground,card_background:this.cardBackground,animate_cards:!!this.animateCards,hide_HA_Header:!!this.hideHaHeader,hide_HA_Sidebar:!!this.hideHaSidebar,tabs:this.tabs,tabs_position:this.tabsPosition,default_tab:this.defaultTab,hide_tabs_when_single:!!this.hideTabsWhenSingle,background_mode:o,background_image:e.background_image?n(e.background_image,["src","repeat","size","position","attachment","opacity"]):void 0,background_particles:e.background_particles?n(e.background_particles,["config_url","pointer_events"]):void 0,background_youtube:e.background_youtube?n(e.background_youtube,["url","start","end","mute","loop","size","position","attachment","opacity"]):void 0,screen_saver_enabled:!!this.screenSaverEnabled,screen_saver_delay:this.screenSaverDelay};return Object.keys(c).forEach(f=>c[f]===void 0&&delete c[f]),c}_applyImportedOptions(e={},n=!0){var o,c,s,l,u,f,m,v;if(e&&Object.prototype.hasOwnProperty.call(e,"storage_key")&&this._isInHaEditorPreview())try{let y={type:"custom:drag-and-drop-card",...this._config||{}};this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:y},bubbles:!0,composed:!0}))}catch{}if(this._config={...this._config||{},...e},"storage_key"in e&&(this.storageKey=e.storage_key||void 0),this._syncEditorsStorageKey(),"grid"in e&&(this.gridSize=Number(e.grid)||10),"drag_live_snap"in e&&(this.dragLiveSnap=!!e.drag_live_snap),"auto_save"in e&&(this.autoSave=!!e.auto_save),"auto_save_debounce"in e&&(this.autoSaveDebounce=Number(e.auto_save_debounce)||800),"container_background"in e&&(this.containerBackground=(o=e.container_background)!=null?o:"transparent"),"card_background"in e&&(this.cardBackground=(c=e.card_background)!=null?c:"var(--ha-card-background, var(--card-background-color))"),"debug"in e&&(this.debug=!!e.debug),"disable_overlap"in e&&(this.disableOverlap=!!e.disable_overlap),"container_size_mode"in e&&(this.containerSizeMode=e.container_size_mode||"dynamic"),"container_fixed_width"in e&&(this.containerFixedWidth=Number(e.container_fixed_width)||null),"container_fixed_height"in e&&(this.containerFixedHeight=Number(e.container_fixed_height)||null),"container_preset"in e&&(this.containerPreset=e.container_preset||"fhd"),"container_preset_orientation"in e&&(this.containerPresetOrient=e.container_preset_orientation||"auto"),"auto_resize_cards"in e&&(this.autoResizeCards=!!e.auto_resize_cards,this.autoResizeCards||String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(s=this._startScaleWatch)==null||s.call(this):(l=this._stopScaleWatch)==null||l.call(this),(u=this._applyAutoScale)==null||u.call(this)),"screen_saver_enabled"in e&&(this.screenSaverEnabled=!!e.screen_saver_enabled),"screen_saver_delay"in e){let y=Number(e.screen_saver_delay);this.screenSaverDelay=Number.isFinite(y)&&y>0?y:this.screenSaverDelay}("screen_saver_enabled"in e||"screen_saver_delay"in e)&&typeof this._updateScreensaverSettings=="function"&&this._updateScreensaverSettings(),this.style.setProperty("--ddc-bg",this.containerBackground),this.style.setProperty("--ddc-card-bg",this.cardBackground),this._applyGridVars(),n&&(this._applyContainerSizingFromConfig(!0),(f=this._applyAutoScale)==null||f.call(this),this._resizeContainer(),(m=this._updateStoreBadge)==null||m.call(this),(v=this._applyAutoScale)==null||v.call(this))}_exportDesign(){let n=Array.from(this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)")).map(u=>{let f=parseFloat(u.getAttribute("data-x"))||0,m=parseFloat(u.getAttribute("data-y"))||0,v=parseFloat(u.style.width)||u.getBoundingClientRect().width,y=parseFloat(u.style.height)||u.getBoundingClientRect().height,x=parseInt(u.style.zIndex||"1",10),O=this._extractCardConfig(u.firstElementChild),S=u.dataset.tabId||this.defaultTab;return{card:O,position:{x:f,y:m},size:{width:v,height:y},z:x,tabId:S}}),o={version:2,options:this._exportableOptions(),cards:n};this._config&&this._config.card_mod&&(o.options=o.options||{},o.options.card_mod=this._config.card_mod);let c=`DragAndDrop_Design_${this.storageKey||"layout"}.json`,s=new Blob([JSON.stringify(o,null,2)],{type:"application/json"}),l=document.createElement("a");l.href=URL.createObjectURL(s),l.download=c,l.click(),URL.revokeObjectURL(l.href),this._toast("Design exported.")}_importDesign(){let e=document.createElement("input");e.type="file",e.accept="application/json";let n=!0,o=!1,c=["grid","drag_live_snap","auto_save","auto_save_debounce","debug","disable_overlap","card_mod","storage_key","animate_cards","auto_resize_cards","container_background","card_background","container_size_mode","container_fixed_width","container_fixed_height","container_preset","container_preset_orientation","tabs","tabs_position","default_tab","hide_tabs_when_single","hide_HA_Header","hide_HA_Sidebar","background_mode","background_image","background_particles","background_youtube","screen_saver_enabled","screen_saver_delay"];e.onchange=async()=>{var u,f,m,v,y,x,O,S,A,L,C,T,M,_,P,D,K,J,U,ae,H,G,ee,ue,We,fe,Oe,Ce,ke,Xe,Je,Ue,at,ct,rt,re,ft,et,Ne,ne,Ee,Me,Ae,nt,pt,bt,Ct,Et,Pt,Yt;let s=(u=e.files)==null?void 0:u[0];if(!s)return;let l=await s.text();try{let qe=JSON.parse(l),ot=this.storageKey||((f=this._config)==null?void 0:f.storage_key)||null,st=!!(qe.options&&Array.isArray(qe.options.tabs)),$t=Array.isArray(qe.cards)&&qe.cards.some(ge=>(ge==null?void 0:ge.tabId)||(ge==null?void 0:ge.tab_id)),_t=[];st?_t=qe.options.tabs:$t?_t=Array.from(new Set(qe.cards.map(j=>(j==null?void 0:j.tabId)||(j==null?void 0:j.tab_id)).filter(Boolean))).map(j=>({id:j,label:j})):_t=[{id:"default",label:"Layout"}];let Ft=((m=qe.options)==null?void 0:m.tabs_position)==="left"?"left":this.tabsPosition||"top",At=((v=qe.options)==null?void 0:v.default_tab)||((y=_t[0])==null?void 0:y.id)||"default",mt=((x=qe.options)==null?void 0:x.hide_tabs_when_single)!==void 0?!!qe.options.hide_tabs_when_single:!0;if(qe.options){let ge={...qe.options};if(o||delete ge.storage_key,n){let j=this._config||{type:"custom:drag-and-drop-card"};for(let $ of c)$==="storage_key"&&!o||!($ in ge)&&$ in j&&delete j[$];try{this.cardContainer&&(this.cardContainer.style.background="",this.cardContainer.style.width="",this.cardContainer.style.height=""),(S=(O=this.style)==null?void 0:O.removeProperty)==null||S.call(O,"--ddc-container-bg"),(L=(A=this.style)==null?void 0:A.removeProperty)==null||L.call(A,"--ddc-card-bg")}catch{}if(this._config={...j,...ge},"card_mod"in ge||delete this._config.card_mod,"animate_cards"in ge&&(this.animateCards=!!ge.animate_cards),"auto_resize_cards"in ge&&(this.autoResizeCards=!!ge.auto_resize_cards),"hide_HA_Header"in ge||"hide_HA_Sidebar"in ge)try{(C=this._applyHaChromeVisibility_)==null||C.call(this)}catch{}if("background_mode"in ge||"background_image"in ge||"background_particles"in ge||"background_youtube"in ge)try{(T=this._applyBackgroundFromConfig)==null||T.call(this)}catch{}if(o&&ge.storage_key&&(this.storageKey=ge.storage_key),this._opts){this._opts={...this._opts,...ge};for(let $ of c)$ in ge||delete this._opts[$]}(M=this._applyOptionsToDom)==null||M.call(this,this._config),(_=this.requestUpdate)==null||_.call(this)}else this._applyImportedOptions(ge,!0),ge.card_mod!==void 0&&(this._config=this._config||{},this._config.card_mod=ge.card_mod,(P=this.requestUpdate)==null||P.call(this))}else if(typeof qe.grid=="number"){let ge={grid:qe.grid};n?this._config={...this._config||{},...ge}:this._applyImportedOptions(ge,!0),(D=this.requestUpdate)==null||D.call(this)}(!Array.isArray(this.tabs)||!this.tabs.length)&&(this.tabs=_t),this.tabsPosition||(this.tabsPosition=Ft),this.defaultTab||(this.defaultTab=At),this.hideTabsWhenSingle===void 0&&(this.hideTabsWhenSingle=mt),(U=(J=(K=this.rootEl)==null?void 0:K.classList)==null?void 0:J.toggle)==null||U.call(J,"ddc-tabs-left-layout",this.tabsPosition==="left");try{let ge=((ae=this._config)==null?void 0:ae.storage_key)||this.storageKey||null,j=(H=qe.options)!=null?H:typeof qe.grid=="number"?{grid:qe.grid}:{},$={...j,tabs:(ee=(G=j.tabs)!=null?G:this.tabs)!=null?ee:[],tabs_position:(We=(ue=j.tabs_position)!=null?ue:this.tabsPosition)!=null?We:"top",default_tab:(Je=(fe=j.default_tab)!=null?fe:this.defaultTab)!=null?Je:((Ce=(Oe=j.tabs)==null?void 0:Oe[0])==null?void 0:Ce.id)||((Xe=(ke=this.tabs)==null?void 0:ke[0])==null?void 0:Xe.id)||"default",hide_tabs_when_single:(at=j.hide_tabs_when_single)!=null?at:(Ue=this.hideTabsWhenSingle)!=null?Ue:!0};if(o||delete $.storage_key,!ge)console.warn("[ddc:import] No storage_key on this card; aborting YAML persist.");else{let pe=await((ct=this._persistOptionsToYaml)==null?void 0:ct.call(this,$,{forceTargetKey:String(ge),noDownload:!0,replace:!0,wipeUnknownKeys:!0})),ve=!!(pe&&pe.yamlSaved);(rt=console.debug)==null||rt.call(console,"[ddc:import] YAML persist result:",ve)}try{let pe={type:"custom:drag-and-drop-card",...this._config||{}};pe.tabs=$.tabs,pe.tabs_position=$.tabs_position,pe.default_tab=$.default_tab,pe.hide_tabs_when_single=!!$.hide_tabs_when_single,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:pe},bubbles:!0,composed:!0}))}catch{}}catch(ge){console.warn("[ddc:import] YAML persist failed:",ge)}if(this.cardContainer.innerHTML="",Array.isArray(qe.cards)&&qe.cards.length)for(let ge of qe.cards){let j=((re=ge.position)==null?void 0:re.x)||0,$=((ft=ge.position)==null?void 0:ft.y)||0,pe=((et=ge.size)==null?void 0:et.width)||140,ve=((Ne=ge.size)==null?void 0:Ne.height)||100,le=ge.z,_e=this._normalizeTabId(ge.tabId||ge.tab_id||this.defaultTab);if(!(ge!=null&&ge.card)||typeof ge.card=="object"&&!Object.keys(ge.card).length){let Ie=this._makePlaceholderAt(j,$,pe,ve);Ie.dataset.tabId=_e,this.cardContainer.appendChild(Ie);continue}let W=await this._createCard(ge.card),Z=this._makeWrapper(W);Z.dataset.tabId=_e,this._setCardPosition(Z,j,$),Z.style.width=`${pe}px`,Z.style.height=`${ve}px`,le!=null&&(Z.style.zIndex=String(le)),this.cardContainer.appendChild(Z);try{this._rebuildOnce(Z.firstElementChild)}catch{}this._initCardInteract(Z)}else this._showEmptyPlaceholder(),(ne=this._applyAutoScale)==null||ne.call(this);(Ee=this._applyOptionsToDom)==null||Ee.call(this,this._config),this._resizeContainer();try{(nt=(Ae=(Me=this.rootEl)==null?void 0:Me.classList)==null?void 0:Ae.toggle)==null||nt.call(Ae,"ddc-tabs-left-layout",this.tabsPosition==="left"),(pt=this._renderTabs)==null||pt.call(this),(bt=this._applyActiveTab)==null||bt.call(this)}catch{}try{this._saveTimer&&clearTimeout(this._saveTimer),await this._saveLayout(!0),(Ct=this._toast)==null||Ct.call(this,"Design imported & saved. Reloading..."),window.location.reload()}catch(ge){console.warn("[ddc:import] saveLayout failed",ge),(Et=this._markDirty)==null||Et.call(this,"import"),(Pt=this._toast)==null||Pt.call(this,"Design imported \u2014 click Apply to save.")}}catch(qe){console.error("Import failed",qe),(Yt=this._toast)==null||Yt.call(this,"Import failed \u2014 invalid file.")}},e.click()}_getLovelace(){var s,l;let e=0,n=this;for(;n&&e++<20;){let u=(s=n.getRootNode)==null?void 0:s.call(n),f=u==null?void 0:u.host;if((f==null?void 0:f.tagName)==="HUI-ROOT")return f.lovelace;n=f||n.parentElement}let o=new Set,c=[document];for(;c.length;){let u=c.shift();if(!(!u||o.has(u))){if(o.add(u),((l=u.host)==null?void 0:l.tagName)==="HUI-ROOT")return u.host.lovelace;if(u.tagName==="HUI-ROOT")return u.lovelace;if(u.shadowRoot&&c.push(u.shadowRoot),u.children)for(let f of u.children)c.push(f)}}}_scanDdcCards(e){let n=[],o=(s,l,u)=>{(u==null?void 0:u.type)==="custom:drag-and-drop-card"&&n.push({view:s,path:[...l],card:u})},c=(s,l,u)=>{if(s){if(Array.isArray(s)){s.forEach((f,m)=>c(f,l,u.concat(m)));return}if(typeof s=="object"){"type"in s&&o(l,u,s);for(let[f,m]of Object.entries(s))f==="views"&&Array.isArray(m)?m.forEach((v,y)=>c(v,y,["views",y])):(Array.isArray(m)||m&&typeof m=="object")&&c(m,l,u.concat(f))}}};return c(e,-1,[]),n}async _persistOptionsToYaml(e,{prevKey:n=null,patchAllInCurrentViewIfNoKey:o=!1}={}){var c,s,l,u,f,m,v,y,x;try{let O=this._getLovelace();if(!O)return console.debug("[ddc:import] persist: no lovelace root"),!1;if(typeof O.saveConfig!="function")return console.debug("[ddc:import] persist: dashboard not in Storage mode"),!1;let S=JSON.parse(JSON.stringify(O.config)),A=this._scanDdcCards(S),L=(c=O.current_view)!=null?c:0;console.debug("[ddc:import] persist: found DDC cards",A.map(P=>({view:P.view,path:P.path.join("."),storage_key:P.card.storage_key||null})));let C=(s=e==null?void 0:e.storage_key)!=null?s:null,T=[];n&&T.push(n),C&&T.push(C),this.storageKey&&T.push(this.storageKey),(l=this._config)!=null&&l.storage_key&&T.push(this._config.storage_key);let M=A.filter(P=>P.card.storage_key&&T.includes(P.card.storage_key));if(!M.length){let P=A.filter(D=>D.view===L);P.length===1&&(M=P)}if(!M.length&&A.length===1&&(M=A),!M.length)return console.debug("[ddc:import] persist: no target. Provide a unique storage_key on this card and import again.",{prevKey:n,newKey:C,storageKey:this.storageKey}),!1;let _={type:"custom:drag-and-drop-card",...e};"storage_key"in _&&delete _.storage_key,"storageKey"in _&&delete _.storageKey;for(let P of M){let D=S;for(let U of P.path)D=D[U];let K=(x=(y=(m=(u=D==null?void 0:D.storage_key)!=null?u:D==null?void 0:D.storageKey)!=null?m:(f=D==null?void 0:D.options)==null?void 0:f.storage_key)!=null?y:(v=D==null?void 0:D.options)==null?void 0:v.storageKey)!=null?x:null,J=!!(n&&C&&K===n&&C!==n);Object.assign(D,_),J?D.storage_key=String(C):K&&(D.storage_key=String(K)),"storageKey"in D&&delete D.storageKey}return console.debug("[ddc:import] persist \u2192 saving",{patched:M.length,keysTried:T,patch}),await O.saveConfig(S),!0}catch(O){return console.warn("[ddc:import] persist error",O),!1}}_queueSave(e="auto"){this._markDirty(e),this.autoSave&&(this._loading||this.editMode&&(this._dbgPush("autosave","Queued",{reason:e,debounce:this.autoSaveDebounce}),clearTimeout(this._saveTimer),this._saveTimer=setTimeout(()=>this._saveLayout(!0),this.autoSaveDebounce)))}async _saveLayout(e=!0){let o=Array.from(this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)")).map(s=>{let l=parseFloat(s.getAttribute("data-x"))||0,u=parseFloat(s.getAttribute("data-y"))||0,f=parseFloat(s.style.width)||s.getBoundingClientRect().width,m=parseFloat(s.style.height)||s.getBoundingClientRect().height,v=parseInt(s.style.zIndex||"1",10),y=this._extractCardConfig(s.firstElementChild),x=s.dataset.tabId||this.defaultTab;return{card:y,position:{x:l,y:u},size:{width:f,height:m},z:v,tabId:x}}),c={version:2,options:this._exportableOptions(),cards:o};try{localStorage.setItem(`ddc_local_${this.storageKey||"default"}`,JSON.stringify(c))}catch{}if(!this.storageKey){e||this._toast("Saved locally (no storage_key set)."),this.__dirty=!1,this._updateApplyBtn();return}try{await this._saveLayoutToBackend(this.storageKey,c),e||this._toast("Layout saved."),this.__dirty=!1,this._updateApplyBtn()}catch(s){console.error("Backend save failed",s),this._dbgPush("save","Backend save failed",{error:String(s)}),e||this._toast("Backend save failed \u2014 kept local copy.")}}async _probeBackend(){this._backendOK=!1;let e=performance.now();try{this._dbgPush("probe","GET /api/dragdrop_storage (list keys)");let n=await this.hass.callApi("get","dragdrop_storage"),o=Math.round(performance.now()-e);this._dbgPush("probe",`OK (${o} ms)`,n),this._backendOK=!!n}catch(n){let o=Math.round(performance.now()-e);this._dbgPush("probe",`FAILED (${o} ms)`,{error:String(n)}),this._backendOK=!1}this._updateStoreBadge()}async _loadLayoutFromBackend(e){let n=`dragdrop_storage/${encodeURIComponent(e)}`,o=performance.now();try{this._dbgPush("load",`GET /api/${n}`);let c=await this.hass.callApi("get",n),s=Math.round(performance.now()-o);return this._dbgPush("load",`OK (${s} ms)`,{bytes:JSON.stringify(c||"").length}),c}catch(c){let s=Math.round(performance.now()-o);return this._dbgPush("load",`FAILED (${s} ms)`,{error:String(c)}),null}}async _saveLayoutToBackend(e,n){let o=`dragdrop_storage/${encodeURIComponent(e)}`,c=JSON.stringify(n).length,s=performance.now();try{this._dbgPush("save",`POST /api/${o}`,{bytes:c});let l=await this.hass.callApi("post",o,n),u=Math.round(performance.now()-s);return this._dbgPush("save",`OK (${u} ms)`,l),l}catch(l){let u=Math.round(performance.now()-s);throw this._dbgPush("save",`FAILED (${u} ms)`,{error:String(l),bytes:c}),l}}_updateStoreBadge(){let e=this.storeBadge;if(!e)return;let n=this._backendOK&&!!this.storageKey;e.textContent=n?"storage: backend - OK":"storage: local. Your Changes are NOT being SAVED. You need to download the Drag and Drop Card backend integration",e.style.background=n?"rgba(76,175,80,.15)":"rgba(255,193,7,.15)",e.style.borderColor=n?"rgba(76,175,80,.45)":"rgba(255,193,7,.45)"}_ensureScreenSaverStyles(){var e;if(!((e=this.shadowRoot)!=null&&e.querySelector("#ddc-screensaver-styles")))try{let n=document.createElement("style");n.id="ddc-screensaver-styles",n.textContent=`
        .screensaver-overlay {
          /* Cover the entire viewport, not just the card container */
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.92);
          color: #fff;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.8s ease-in;
          z-index: 100000; /* extremely high to overlay everything */
        }
        .screensaver-overlay.active {
          opacity: 1;
          pointer-events: auto;
          transition: opacity 0.3s ease-out;
        }
        /* Wrapper to center content nicely in the viewport */
        .screensaver-overlay .screensaver-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .screensaver-overlay .screensaver-clock {
          font-size: 5rem;
          font-family: monospace;
          letter-spacing: 0.1em;
          font-weight: 700;
          line-height: 1.2;
          margin: 0;
          text-align: center;
          text-shadow: 0 0 10px rgba(255,255,255,0.8);
        }
        .screensaver-overlay .screensaver-date {
          font-size: 2rem;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          font-weight: 400;
          margin-top: 0.8rem;
          text-align: center;
          opacity: 0.9;
        }

        /* Calendar styles */
        .screensaver-overlay .screensaver-calendar {
          margin-top: 1.5rem;
          width: 100%;
          max-width: 600px;
          color: #fff;
        }
        .screensaver-overlay .screensaver-calendar .calendar-header {
          font-size: 2.2rem;
          font-weight: 600;
          text-align: center;
          margin-bottom: 0.7rem;
          padding-bottom: 0.3rem;
          border-bottom: 2px solid rgba(255,255,255,0.2);
        }
        .screensaver-overlay .screensaver-calendar .calendar-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 0.3rem;
        }
        .screensaver-overlay .screensaver-calendar .calendar-grid div {
          text-align: center;
          padding: 0.35rem 0;
          font-size: 1.0rem;
          border-radius: 4px;
        }
        .screensaver-overlay .screensaver-calendar .calendar-grid div.header {
          font-weight: 600;
          opacity: 0.8;
          text-transform: uppercase;
        }
        .screensaver-overlay .screensaver-calendar .calendar-grid div.today {
          background: rgba(255, 255, 255, 0.3);
          font-weight: 700;
          color: #000;
          border-radius: 6px;
        }
        .screensaver-overlay .screensaver-calendar .calendar-grid div.other-month {
          opacity: 0.4;
        }

        .screensaver-overlay .screensaver-calendar .calendar-grid div.weekend {
          /* Slightly accent weekends */
          color: #ffb074;
        }
      `,this.shadowRoot.appendChild(n)}catch(n){console.warn("[drag-and-drop-card] Failed to inject screensaver styles",n)}}_ensureScreenSaverGlobalStyles(){if(!document.head.querySelector("#ddc-screensaver-global-styles"))try{let e=document.createElement("style");e.id="ddc-screensaver-global-styles",e.textContent=`
        .screensaver-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.92);
          color: #fff;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.8s ease-in;
          z-index: 100000;
        }
        .screensaver-overlay.active {
          opacity: 1;
          pointer-events: auto;
          transition: opacity 0.3s ease-out;
        }
        .screensaver-overlay .screensaver-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .screensaver-overlay .screensaver-clock {
          font-size: 5rem;
          font-family: monospace;
          letter-spacing: 0.1em;
          font-weight: 700;
          line-height: 1.2;
          margin: 0;
          text-align: center;
          text-shadow: 0 0 10px rgba(255,255,255,0.8);
        }
        .screensaver-overlay .screensaver-date {
          font-size: 2rem;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          font-weight: 400;
          margin-top: 0.8rem;
          text-align: center;
          opacity: 0.9;
        }
        .screensaver-overlay .screensaver-calendar {
          margin-top: 1.5rem;
          width: 100%;
          max-width: 600px;
          color: #fff;
        }
        .screensaver-overlay .screensaver-calendar .calendar-header {
          font-size: 2.2rem;
          font-weight: 600;
          text-align: center;
          margin-bottom: 0.7rem;
          padding-bottom: 0.3rem;
          border-bottom: 2px solid rgba(255,255,255,0.2);
        }
        .screensaver-overlay .screensaver-calendar .calendar-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 0.3rem;
        }
        .screensaver-overlay .screensaver-calendar .calendar-grid div {
          text-align: center;
          padding: 0.35rem 0;
          font-size: 1.0rem;
          border-radius: 4px;
        }
        .screensaver-overlay .screensaver-calendar .calendar-grid div.header {
          font-weight: 600;
          opacity: 0.8;
          text-transform: uppercase;
        }
        .screensaver-overlay .screensaver-calendar .calendar-grid div.today {
          background: rgba(255, 255, 255, 0.3);
          font-weight: 700;
          color: #000;
          border-radius: 6px;
        }
        .screensaver-overlay .screensaver-calendar .calendar-grid div.other-month {
          opacity: 0.4;
        }
        .screensaver-overlay .screensaver-calendar .calendar-grid div.weekend {
          color: #ffb074;
        }
      `,document.head.appendChild(e)}catch(e){console.warn("[drag-and-drop-card] Failed to inject global screensaver styles",e)}}_ensureScreenSaverOverlay(){var o;if(this._ensureScreenSaverGlobalStyles(),!this._screenSaverOverlayId){let c=((o=this.config)==null?void 0:o.id)||`ddc_${Math.random().toString(36).slice(2)}`;this._screenSaverOverlayId=`ddc-screensaver-overlay-${c}`}let e=this._screenSaverOverlayId;if(this.screenSaverOverlay&&this.screenSaverOverlay.parentNode===document.body)return;if(this.screenSaverOverlay&&!this.screenSaverOverlay.parentNode){document.body.appendChild(this.screenSaverOverlay);return}let n=document.createElement("div");n.className="screensaver-overlay",n.id=e,n.innerHTML=`
      <div class="screensaver-content" id="${e}-content">
        <div class="screensaver-clock" id="${e}-clock"></div>
        <div class="screensaver-date" id="${e}-date"></div>
        <div class="screensaver-calendar" id="${e}-calendar"></div>
      </div>
    `,n.addEventListener("click",()=>this._deactivateScreenSaver()),n.addEventListener("keydown",()=>this._deactivateScreenSaver()),this.screenSaverOverlay=n,document.body.appendChild(n)}_attachScreensaverListeners(){if(this._screensaverActivityHandler)return;let e=()=>this._resetScreensaverTimer();this._screensaverActivityHandler=e,this._screensaverEvents=["mousemove","mousedown","click","keydown","wheel","scroll","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointercancel"],this._screensaverEvents.forEach(n=>{document.addEventListener(n,e,!0)})}_resetScreensaverTimer(){if(this._screensaverTimer&&(clearTimeout(this._screensaverTimer),this._screensaverTimer=null),!this.screenSaverEnabled)return;this.screensaverActive&&this._deactivateScreenSaver();let e=Number(this.screenSaverDelay)||5*6e4;this._screensaverTimer=setTimeout(()=>{this._activateScreenSaver()},e)}_activateScreenSaver(){if(this.screenSaverEnabled&&(this._ensureScreenSaverOverlay(),!!this.screenSaverOverlay)){this.screensaverActive=!0,this.screenSaverOverlay.classList.add("active");try{this.tabsBar&&(this.__savedTabsDisplay=this.tabsBar.style.display,this.tabsBar.style.display="none")}catch{}this._updateScreenSaverClock(),this._clockInterval&&clearInterval(this._clockInterval),this._clockInterval=setInterval(()=>this._updateScreenSaverClock(),1e3)}}_deactivateScreenSaver(){if(this.screensaverActive){this.screensaverActive=!1,this.screenSaverOverlay&&this.screenSaverOverlay.classList.remove("active"),this._clockInterval&&(clearInterval(this._clockInterval),this._clockInterval=null);try{this.tabsBar&&(this.__savedTabsDisplay!=null?this.tabsBar.style.display=this.__savedTabsDisplay:this.tabsBar.style.display="")}catch{}this._resetScreensaverTimer()}}_updateScreenSaverClock(){let e=this.screenSaverOverlay,n=e==null?void 0:e.querySelector(".screensaver-clock"),o=e==null?void 0:e.querySelector(".screensaver-date"),c=new Date;n&&(n.textContent=c.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"})),o&&(o.textContent=c.toLocaleDateString([],{weekday:"long",year:"numeric",month:"long",day:"numeric"}));try{this._updateScreenSaverCalendar()}catch{}}_updateScreenSaverCalendar(){var O;let e=(O=this.screenSaverOverlay)==null?void 0:O.querySelector(".screensaver-calendar");if(!e)return;let n=new Date,o=void 0,c=n.getFullYear(),s=n.getMonth(),l=n.toLocaleDateString(o,{month:"long"}),u=[];for(let S=0;S<7;S++){let A=new Date(1970,0,4+S);u.push(A.toLocaleDateString(o,{weekday:"short"}))}let f=new Date(c,s,1).getDay(),m=new Date(c,s+1,0).getDate(),v=new Date(c,s,0).getDate(),y=[];for(let S=0;S<f;S++)y.push({day:v-(f-1)+S,other:!0});for(let S=1;S<=m;S++){let A=S===n.getDate();y.push({day:S,today:A,other:!1})}for(;y.length<42;){let S=y.length-f-m+1;y.push({day:S,other:!0})}let x="";x+=`<div class="calendar-header">${l} ${c}</div>`,x+='<div class="calendar-grid">';for(let S=0;S<7;S++)x+=`<div class="header">${u[S]}</div>`;y.forEach((S,A)=>{let L=[];S.other&&L.push("other-month"),S.today&&L.push("today");let C=A%7;(C===0||C===6)&&L.push("weekend"),x+=`<div class="${L.join(" ")}">${S.day}</div>`}),x+="</div>",e.innerHTML=x}_updateScreensaverSettings(){this.screenSaverEnabled?(this._ensureScreenSaverOverlay(),this._attachScreensaverListeners(),this._resetScreensaverTimer()):(this._screensaverTimer&&(clearTimeout(this._screensaverTimer),this._screensaverTimer=null),this.screensaverActive&&this._deactivateScreenSaver())}_toast(e){let n=new Event("hass-notification");n.detail={message:e},window.dispatchEvent(n)}_huiRoot(){var e,n,o,c,s,l;try{let u=document.querySelector("home-assistant"),f=(e=u==null?void 0:u.shadowRoot)==null?void 0:e.querySelector("home-assistant-main"),m=((n=f==null?void 0:f.shadowRoot)==null?void 0:n.querySelector("ha-drawer"))||f,v=((o=m==null?void 0:m.shadowRoot)==null?void 0:o.querySelector("partial-panel-resolver"))||m,y=((c=v==null?void 0:v.shadowRoot)==null?void 0:c.querySelector("ha-panel-lovelace"))||((s=m==null?void 0:m.shadowRoot)==null?void 0:s.querySelector("ha-panel-lovelace"));return((l=y==null?void 0:y.shadowRoot)==null?void 0:l.querySelector("hui-root"))||null}catch{return null}}getCardSize(){return 3}};if(!customElements.get("drag-and-drop-card")){if(Object.assign(Jt.prototype,{_updateGridButtonsVisibility(){var n,o,c,s;let t=!!this.editMode,e=Number((s=(c=(n=this._config)==null?void 0:n.grid)!=null?c:(o=this._options)==null?void 0:o.grid)!=null?s:10)>20;if(!t||!e){this._destroyGridCanvas();return}this._buildOrUpdateGridCanvas()},_requestGridButtonsUpdateSoon(){clearTimeout(this._gridLayoutT),this._gridLayoutT=setTimeout(()=>this._updateGridButtonsVisibility(),50)},_buildOrUpdateGridCanvas(){var o,c,s,l;let t=this.cardContainer;if(!t||!t.isConnected)return;let h=Number((l=(s=(o=this._config)==null?void 0:o.grid)!=null?s:(c=this._options)==null?void 0:c.grid)!=null?l:10);if(this._gridCellSize=h,!this._gridCanvas){let u=document.createElement("canvas");u.className="ddc-grid-canvas",t.insertBefore(u,t.firstChild||null),this._gridCanvas=u,this._gridCtx=u.getContext("2d"),u.addEventListener("pointerdown",f=>this._onGridPointerDown(f),{passive:!0}),u.addEventListener("pointermove",f=>this._onGridPointerMove(f),{passive:!0}),u.addEventListener("pointerup",f=>this._onGridPointerUp(f),{passive:!0}),u.addEventListener("pointercancel",f=>this._onGridPointerCancel(f),{passive:!0}),u.addEventListener("lostpointercapture",f=>this._onGridPointerCancel(f),{passive:!0})}let e=t.getBoundingClientRect(),n=Math.max(1,window.devicePixelRatio||1);this._gridCanvas.width=Math.max(1,Math.round(e.width*n)),this._gridCanvas.height=Math.max(1,Math.round(e.height*n)),this._gridCanvas.style.width=e.width+"px",this._gridCanvas.style.height=e.height+"px",this._gridCols=Math.max(1,Math.floor(e.width/h)),this._gridRows=Math.max(1,Math.floor(e.height/h)),this._buildGridTile_(h,n),this._markGridDirty()},_destroyGridCanvas(){var t;cancelAnimationFrame(this._gridRAF),this._gridRAF=0,(t=this._gridCanvas)!=null&&t.parentElement&&this._gridCanvas.parentElement.removeChild(this._gridCanvas),this._gridCanvas=null,this._gridCtx=null,this._gridTile=null,this._gridDown=!1,this._gridHoverCol=this._gridHoverRow=-1},_buildGridTile_(t,h){let e=Math.min(10,t*.25),n=Math.max(1,Math.round(t*h)),o=n,c=document.createElement("canvas");c.width=n,c.height=o;let s=c.getContext("2d");s.scale(h,h);let l=0,u=0,f=t,m=t;s.clearRect(0,0,n,o),s.beginPath();let v=Math.min(e,f/2,m/2);s.moveTo(l+v,u),s.arcTo(l+f,u,l+f,u+m,v),s.arcTo(l+f,u+m,l,u+m,v),s.arcTo(l,u+m,l,u,v),s.arcTo(l,u,l+f,u,v),s.closePath(),s.fillStyle="rgba(255,255,255,0.08)",s.fill(),s.strokeStyle="rgba(255,255,255,0.12)",s.lineWidth=1,s.stroke(),this._gridTile=c},_markGridDirty(){this._gridDirty||(this._gridDirty=!0,this._gridRAF=requestAnimationFrame(()=>{this._gridDirty=!1,this._renderGridCanvas_()}))},_renderGridCanvas_(){let t=this._gridCanvas;if(!t)return;let h=this._gridCtx,e=Math.max(1,window.devicePixelRatio||1),n=this._gridCellSize||10;if(h.clearRect(0,0,t.width,t.height),this._gridTile){let o=h.createPattern(this._gridTile,"repeat");h.save(),h.scale(e,e),h.fillStyle=o,h.fillRect(0,0,t.width/e,t.height/e),h.restore()}if(this._gridHoverCol>=0&&this._gridHoverRow>=0){h.save(),h.scale(e,e),h.fillStyle="rgba(255,255,255,0.10)",h.strokeStyle="rgba(255,255,255,0.22)",h.lineWidth=1;let o=this._gridHoverCol*n,c=this._gridHoverRow*n,s=n,l=n;this._roundRect_(h,o,c,s,l,Math.min(10,n*.25)),h.fill(),h.stroke(),h.restore()}if(this._gridDown&&this._gridStartCol>=0&&this._gridStartRow>=0&&this._gridCurrCol>=0&&this._gridCurrRow>=0){let o=Math.min(this._gridStartCol,this._gridCurrCol),c=Math.max(this._gridStartCol,this._gridCurrCol),s=Math.min(this._gridStartRow,this._gridCurrRow),l=Math.max(this._gridStartRow,this._gridCurrRow),u=o*n,f=s*n,m=(c-o+1)*n,v=(l-s+1)*n;h.save(),h.scale(e,e),h.fillStyle="rgba(0, 160, 255, 0.22)",h.strokeStyle="rgba(0, 160, 255, 0.45)",h.lineWidth=2,this._roundRect_(h,u,f,m,v,Math.min(12,n*.3)),h.fill(),h.stroke(),h.restore()}},_roundRect_(t,h,e,n,o,c){let s=Math.min(c,n/2,o/2);t.beginPath(),t.moveTo(h+s,e),t.arcTo(h+n,e,h+n,e+o,s),t.arcTo(h+n,e+o,h,e+o,s),t.arcTo(h,e+o,h,e,s),t.arcTo(h,e,h+n,e,s),t.closePath()},_emptySpaceAt_(t,h){let e=document.elementFromPoint(t,h);return!e||!e.closest||!e.closest(".card-wrapper, .resize-handle, .ddc-chip, .shield")},_locToCell_(t,h){let e=this._gridCanvas;if(!e)return{col:-1,row:-1};let n=e.getBoundingClientRect(),o=t-n.left,c=h-n.top,s=this._gridCellSize||10,l=Math.min(this._gridCols-1,Math.max(0,Math.floor(o/s))),u=Math.min(this._gridRows-1,Math.max(0,Math.floor(c/s)));return{col:l,row:u}},_onGridPointerDown(t){var n,o;if(!this._emptySpaceAt_(t.clientX,t.clientY))return;let{col:h,row:e}=this._locToCell_(t.clientX,t.clientY);this._gridDown=!0,this._gridStartCol=h,this._gridStartRow=e,this._gridCurrCol=h,this._gridCurrRow=e,this._markGridDirty(),(o=(n=t.currentTarget).setPointerCapture)==null||o.call(n,t.pointerId)},_onGridPointerMove(t){let{col:h,row:e}=this._locToCell_(t.clientX,t.clientY);if((h!==this._gridHoverCol||e!==this._gridHoverRow)&&(this._gridHoverCol=h,this._gridHoverRow=e,this._markGridDirty()),!this._gridDown)return;let{col:n,row:o}=this._locToCell_(t.clientX,t.clientY);(n!==this._gridCurrCol||o!==this._gridCurrRow)&&(this._gridCurrCol=n,this._gridCurrRow=o,this._markGridDirty())},async _onGridPointerUp(t){if(!this._gridDown)return;this._gridDown=!1;let h=Math.min(this._gridStartCol,this._gridCurrCol),e=Math.max(this._gridStartCol,this._gridCurrCol),n=Math.min(this._gridStartRow,this._gridCurrRow),o=Math.max(this._gridStartRow,this._gridCurrRow);if((e-h+1)*(o-n+1)<2){this._markGridDirty();return}let s=this._gridCellSize||10,l=h*s,u=n*s,f=(e-h+1)*s,m=(o-n+1)*s;this._markGridDirty(),this._promptNewCardForRect_({x:l,y:u,w:f,h:m})},_onGridPointerCancel(){this._gridDown=!1,this._markGridDirty()},_installGridObservers_(){try{this.__gridRO&&this.__gridRO.disconnect(),this.__gridRO=new ResizeObserver(()=>this._requestGridButtonsUpdateSoon()),this.cardContainer&&this.__gridRO.observe(this.cardContainer)}catch{}clearInterval(this.__gridPollT),this.__gridPrevEditMode=void 0,this.__gridPollT=setInterval(()=>{let t=!!this.editMode;t!==this.__gridPrevEditMode&&(this.__gridPrevEditMode=t,this._updateGridButtonsVisibility())},300)},_uninstallGridObservers_(){var t,h;try{(h=(t=this.__gridRO)==null?void 0:t.disconnect)==null||h.call(t)}catch{}this.__gridRO=null,clearInterval(this.__gridPollT),this.__gridPollT=null},_gridRectToCardRect_({x:t,y:h,w:e,h:n}){let o=this.cardContainer,c=this._gridCanvas;if(!o||!c)return{x:t,y:h,w:e,h:n};let{sx:s,sy:l}=this._getContainerScale_(),u=getComputedStyle(o),f=parseFloat(u.paddingLeft)||0,m=parseFloat(u.paddingTop)||0,v=parseFloat(u.borderLeftWidth)||0,y=parseFloat(u.borderTopWidth)||0,x=o.scrollLeft||0,O=o.scrollTop||0,S=s?1/s:1,A=l?1/l:1,L=t*S+f+v+x,C=h*A+m+y+O,T=e*S,M=n*A;return{x:L,y:C,w:T,h:M}},_getContainerScale_(){let t=this.cardContainer;if(!t)return{sx:1,sy:1};let h=getComputedStyle(t).transform;if(!h||h==="none")return{sx:1,sy:1};let e=h.match(/matrix\(([^)]+)\)/);if(e){let[o,,,c]=e[1].split(",").map(s=>parseFloat(s.trim()));return{sx:isFinite(o)&&o?o:1,sy:isFinite(c)&&c?c:1}}let n=h.match(/matrix3d\(([^)]+)\)/);if(n){let o=n[1].split(",").map(c=>parseFloat(c.trim()));return{sx:isFinite(o[0])&&o[0]?o[0]:1,sy:isFinite(o[5])&&o[5]?o[5]:1}}return{sx:1,sy:1}},_canvasRectToContainerRect_({x:t,y:h,w:e,h:n}){let o=this.cardContainer,c=this._gridCanvas;if(!o||!c)return{x:t,y:h,w:e,h:n};let s=getComputedStyle(o),l=parseFloat(s.paddingLeft)||0,u=parseFloat(s.paddingTop)||0,{sx:f,sy:m}=this._getContainerScale_(),v=c.getBoundingClientRect(),y=o.getBoundingClientRect(),x=v.left+t,O=v.top+h,S=x-y.left,A=O-y.top;S-=l,A-=u,S+=o.scrollLeft||0,A+=o.scrollTop||0;let L=f?1/f:1,C=m?1/m:1,T=S*L,M=A*C,_=e*L,P=n*C;return{x:T,y:M,w:_,h:P}},async _promptNewCardForRect_({x:t,y:h,w:e,h:n}){var o,c,s,l;try{let u=this._gridCellSize||Number((l=(s=(o=this._config)==null?void 0:o.grid)!=null?s:(c=this._options)==null?void 0:c.grid)!=null?l:10),f=A=>Math.round(A/u)*u,m=f(t),v=f(h),y=Math.max(u,f(e)),x=Math.max(u,f(n)),O=typeof this._canvasRectToContainerRect_=="function"?this._canvasRectToContainerRect_({x:m,y:v,w:y,h:x}):{x:m,y:v,w:y,h:x},S={x:Math.round(O.x),y:Math.round(O.y),w:Math.round(O.w),h:Math.round(O.h)};this.__pendingAddRect=S,await this._openSmartPicker("add",null,null)}catch(u){console.warn("[ddc] _promptNewCardForRect_ failed",u)}}}),!Jt.prototype.__addPickedPatched){let t=Jt.prototype._addPickedCardToLayout;Jt.prototype._addPickedCardToLayout=async function(h){var e,n,o,c,s,l,u,f;if(this&&this.__pendingAddRect){let{x:m,y:v,w:y,h:x}=this.__pendingAddRect;this.__pendingAddRect=null;try{(e=this._hideEmptyPlaceholder)==null||e.call(this)}catch{}let O=await this._createCard(h),S=this._makeWrapper(O);this._setCardPosition(S,Math.round(m),Math.round(v)),S.style.width=`${Math.round(y)}px`,S.style.height=`${Math.round(x)}px`,S.style.zIndex=String(this._highestZ()+1),S.dataset.tabId=this._normalizeTabId(this.activeTab||this.defaultTab),this.cardContainer.appendChild(S);try{(n=this._rebuildOnce)==null||n.call(this,S.firstElementChild)}catch{}try{(o=this._initCardInteract)==null||o.call(this,S)}catch{}try{(c=this._resizeContainer)==null||c.call(this)}catch{}try{(s=this._queueSave)==null||s.call(this,"add")}catch{}try{(l=this._toast)==null||l.call(this,"Card added to selection.")}catch{}try{(u=this._syncEmptyStateUI)==null||u.call(this)}catch{}try{(f=this._applyVisibility_)==null||f.call(this)}catch{}return}return await t.call(this,h)},Jt.prototype.__addPickedPatched=!0}customElements.define("drag-and-drop-card",Jt)}(()=>{let t=new WeakSet,h=s=>{try{if(!(s instanceof Element))return!1;let l=s.localName||"";return l?!!(l==="ha-card"||l.endsWith("-card")):!1}catch{return!1}},e=s=>{try{if(!s||t.has(s))return;t.add(s),s.dispatchEvent(new Event("ll-rebuild",{bubbles:!0,composed:!0}))}catch{}},n=s=>{var l,u;try{if(!s)return;s instanceof Element&&h(s)&&e(s);let f=(u=(l=(s instanceof ShadowRoot,s)).querySelectorAll)==null?void 0:u.call(l,"*");if(!f)return;for(let m of f){h(m)&&e(m);let v=m.shadowRoot;if(v)try{n(v)}catch{}}}catch{}},o=s=>{try{if(!s||s.__ddcCardModIntegrated)return;s.__ddcCardModIntegrated=!0;let l=s.shadowRoot||s;n(l);let u=new MutationObserver(f=>{for(let m of f)if(!(!m.addedNodes||!m.addedNodes.length))for(let v of m.addedNodes)(v instanceof Element||v instanceof ShadowRoot)&&n(v)});u.observe(l,{childList:!0,subtree:!0}),s.__ddcCardModIntegratedObserver=u,setTimeout(()=>{try{n(l)}catch{}},250),setTimeout(()=>{try{n(l)}catch{}},1e3)}catch{}},c=()=>{try{document.querySelectorAll("drag-and-drop-card").forEach(o)}catch{}};if(window.customElements&&window.customElements.whenDefined)window.customElements.whenDefined("drag-and-drop-card").then(()=>{c();let s=window.customElements.get("drag-and-drop-card");if(s&&s.prototype){let u=s.prototype.connectedCallback;s.prototype.connectedCallback=function(){try{u&&u.call(this)}finally{o(this)}}}new MutationObserver(()=>c()).observe(document.documentElement,{childList:!0,subtree:!0})});else{let s=setInterval(c,1e3);setTimeout(()=>clearInterval(s),1e4)}})();(function(){let t="drag-and-drop-card",h=customElements.get(t);if(!h){console.warn("[ddc:augment] Could not find custom element",t);return}function e(){var S,A;try{let L=0,C=this;for(;C&&L++<20;){let _=(S=C.getRootNode)==null?void 0:S.call(C),P=_==null?void 0:_.host;if((P==null?void 0:P.tagName)==="HUI-ROOT")return P.lovelace;C=P||C.parentElement}let T=new Set,M=[document];for(;M.length;){let _=M.shift();if(!(!_||T.has(_))){if(T.add(_),((A=_.host)==null?void 0:A.tagName)==="HUI-ROOT")return _.host.lovelace;if(_.tagName==="HUI-ROOT")return _.lovelace;if(_.shadowRoot&&M.push(_.shadowRoot),_.children)for(let P of _.children)M.push(P)}}}catch{}}function n(S){let A=[],L=(T,M,_)=>{(_==null?void 0:_.type)==="custom:drag-and-drop-card"&&A.push({view:T,path:[...M],card:_})},C=(T,M,_)=>{if(T){if(Array.isArray(T)){T.forEach((P,D)=>C(P,M,_.concat(D)));return}if(typeof T=="object"){"type"in T&&L(M,_,T);for(let[P,D]of Object.entries(T))P==="views"&&Array.isArray(D)?D.forEach((K,J)=>C(K,J,["views",J])):(Array.isArray(D)||D&&typeof D=="object")&&C(D,M,_.concat(P))}}};return C(S,-1,[]),A}function o(S,A,L){let C=new Date().toISOString().replace(/[:.]/g,"-"),T=A.map(_=>{let P=S;for(let D of _.path)P=P[D];return{view:_.view,path:_.path,storage_key:P&&P.storage_key||null,before:P,patch:L}}),M={kind:"ddc-import-backup",created_at:C,count:T.length,items:T};try{let _=`ddc.backup.${C}`;localStorage.setItem(_,JSON.stringify(M));let P=Object.keys(localStorage).filter(D=>D.startsWith("ddc.backup.")).sort().reverse();for(let D of P.slice(10))localStorage.removeItem(D)}catch{}return{name:`ddc_backup_${C}.json`,data:M}}function c(S,A){try{let L=new Blob([JSON.stringify(A,null,2)],{type:"application/json"}),C=URL.createObjectURL(L),T=document.createElement("a");T.href=C,T.download=S,document.body.appendChild(T),T.click(),T.remove(),setTimeout(()=>URL.revokeObjectURL(C),1500)}catch(L){console.warn("[ddc:backup] download failed",L)}}function s(S){if(S)try{let A="ddc.recent.keys",L=JSON.parse(localStorage.getItem(A)||"[]");L.includes(S)||L.unshift(S),localStorage.setItem(A,JSON.stringify(L.slice(0,20)))}catch{}}function l(){try{return JSON.parse(localStorage.getItem("ddc.recent.keys")||"[]")}catch{return[]}}function u(){var A,L;let S=new Set;try{let C=Object.keys(localStorage).filter(T=>T.startsWith("ddc.backup.")).sort().reverse();for(let T of C)try{let M=JSON.parse(localStorage.getItem(T)||"null");if(M&&M.items)for(let _ of M.items){let P=((A=_==null?void 0:_.before)==null?void 0:A.storage_key)||((L=_==null?void 0:_.patch)==null?void 0:L.storage_key);P&&S.add(P)}}catch{}}catch{}return Array.from(S)}async function f(S,{forceTargetKey:A=null,onlyThisCard:L=!1,prevKey:C,noDownload:T}={}){var ue,We,fe,Oe,Ce;let M=((ue=this._getLovelace)==null?void 0:ue.call(this))||e.call(this);if(!M)return console.debug("[ddc:import] persist: no lovelace root"),!1;if(typeof M.saveConfig!="function")return console.debug("[ddc:import] persist: dashboard not in Storage mode"),!1;let _=ke=>typeof ke=="string"?ke.trim():null,P=_(A)||_((We=this==null?void 0:this._config)==null?void 0:We.storage_key)||_(this==null?void 0:this.storageKey)||_(C);if(!P)return console.warn("[ddc:import] persist: missing target storage_key on this card; aborting"),!1;let D=JSON.parse(JSON.stringify(M.config)),K=(this._scanDdcCards||n)(D);console.debug("[ddc:import] persist: found DDC cards",K.map(ke=>({view:ke.view,path:ke.path.join("."),storage_key:ke.card&&(ke.card.storage_key||ke.card.storageKey)||null})));let J=K.filter(ke=>{var Je,Ue,at,ct,rt,re,ft,et,Ne;return((Ne=(re=(at=_((Je=ke.card)==null?void 0:Je.storage_key))!=null?at:_((Ue=ke.card)==null?void 0:Ue.storageKey))!=null?re:_((rt=(ct=ke.card)==null?void 0:ct.options)==null?void 0:rt.storage_key))!=null?Ne:_((et=(ft=ke.card)==null?void 0:ft.options)==null?void 0:et.storageKey))===P});if(J.length!==1)return console.warn("[ddc:import] persist: expected exactly one target with key, got",J.length,{myKey:P}),!1;let U={type:"custom:drag-and-drop-card",...S||{}};"storage_key"in U&&delete U.storage_key,"storageKey"in U&&delete U.storageKey,U!=null&&U.options&&("storage_key"in U.options&&delete U.options.storage_key,"storageKey"in U.options&&delete U.options.storageKey);let ae=Array.isArray(U.cards)?U.cards:null;delete U.cards;try{let ke=o==null?void 0:o(M.config,J,U);ke&&(console.debug("[ddc:import] backup created",{file:ke.name,items:(fe=ke.data)==null?void 0:fe.count}),!T&&typeof c=="function"&&c(ke.name,ke.data))}catch(ke){console.debug("[ddc:import] backup skipped/error:",(ke==null?void 0:ke.message)||ke)}let H=J[0],G=D;for(let ke of H.path)G=G[ke];let ee=(Ce=(Oe=_(G==null?void 0:G.storage_key))!=null?Oe:_(G==null?void 0:G.storageKey))!=null?Ce:null;return Object.assign(G,U),ee?G.storage_key=ee:G.storage_key=P,"storageKey"in G&&delete G.storageKey,console.debug("[ddc:import] persist \u2192 saving",{patched:1,into_key:G.storage_key,ignored_file_key:_(S==null?void 0:S.storage_key)||_(S==null?void 0:S.storageKey)||null}),await M.saveConfig(D),{yamlSaved:!0,cardsForStorage:ae}}async function m(){var L;let S=C=>{if(!C)return[];if(Array.isArray(C))return C;if(Array.isArray(C==null?void 0:C.keys))return C.keys;if(Array.isArray(C==null?void 0:C.dashboards))return C.dashboards;if(Array.isArray(C==null?void 0:C.entries))return C.entries.map(T=>T.key||T.id||T.name).filter(Boolean);if(Array.isArray(C==null?void 0:C.items))return C.items.map(T=>T.key||T.id||T.name).filter(Boolean);if(typeof C=="object"){for(let T of Object.values(C))if(Array.isArray(T)&&T.every(M=>typeof M=="string"))return T}return[]};try{if((L=this==null?void 0:this.hass)!=null&&L.callApi){let C=await this.hass.callApi("get","dragdrop_storage"),T=S(C);if(T.length)return T}}catch(C){console.debug("[ddc:switcher] hass.callApi dragdrop_storage failed",C)}let A=["/api/dragdrop_storage","/api/dragdrop_storage/keys","/api/dragdrop_storage/list","/api/dragdrop_storage?all=1"];for(let C of A)try{let M=await(await fetch(C,{cache:"no-store"})).json(),_=S(M);if(_.length)return _}catch{}return[]}async function v(S){let A=M=>{if(!M)return null;if(M.options||M.cards)return M;if(typeof M.design=="object")return M.design;if(typeof M.payload=="object")return M.payload;try{if(typeof M=="string")return JSON.parse(M)}catch{}return null},L=async(M,_,P)=>{var D;try{if((D=this==null?void 0:this.hass)!=null&&D.callApi){let K=await this.hass.callApi(M,_,P),J=A(K);if(J)return J}}catch{}return null},C=async M=>{try{let _=await fetch(M,{cache:"no-store"}),P=_.headers.get("content-type")||"";if(P.includes("application/json")||P.includes("text/plain")){let D=await _.json().catch(()=>null)||await _.text().catch(()=>null),K=A(D);if(K)return K}}catch{}return null},T=encodeURIComponent(S);return await(L("get",`dragdrop_storage/${T}`)||C(`/api/dragdrop_storage/${T}`)||C(`/api/dragdrop_storage?key=${T}`)||L("post","dragdrop_storage/get",{key:S})||null)}async function y(S,{source:A="switcher",newKey:L=null}={}){var M,_,P,D,K,J,U,ae,H,G,ee,ue,We,fe,Oe,Ce,ke,Xe,Je,Ue,at,ct,rt,re,ft,et;if(!S||typeof S!="object")throw new Error("Invalid design payload");let C=this.storageKey||((M=this._config)==null?void 0:M.storage_key)||null;try{(_=this._dbgInit)==null||_.call(this),(P=this._dbgPush)==null||P.call(this,"import","Begin import (programmatic)",{source:A,newKey:L})}catch{}if(S.options){let{storage_key:Ne,...ne}=S.options;(D=this._applyImportedOptions)==null||D.call(this,ne,!0)}else typeof S.grid=="number"&&((K=this._applyImportedOptions)==null||K.call(this,{grid:S.grid},!0));let T=L||((J=S==null?void 0:S.options)==null?void 0:J.storage_key)||C;if(T){this.storageKey=T,this._config={...this._config||{},storage_key:T};try{(U=this._syncEditorsStorageKey)==null||U.call(this)}catch{}}try{let Ne=(ae=S.options)!=null?ae:typeof S.grid=="number"?{grid:S.grid}:{};await((H=this._persistOptionsToYaml)==null?void 0:H.call(this,{...Ne,storage_key:T},{prevKey:C,noDownload:A==="switcher"}))}catch(Ne){console.warn("[ddc:apply] persist failed",Ne)}try{if(this.cardContainer.innerHTML="",Array.isArray(S.cards)&&S.cards.length)for(let Ne of S.cards)if(!(Ne!=null&&Ne.card)||typeof Ne.card=="object"&&Object.keys(Ne.card).length===0){let ne=(fe=this._makePlaceholderAt)==null?void 0:fe.call(this,((G=Ne.position)==null?void 0:G.x)||0,((ee=Ne.position)==null?void 0:ee.y)||0,((ue=Ne.size)==null?void 0:ue.width)||200,((We=Ne.size)==null?void 0:We.height)||200);ne&&this.cardContainer.appendChild(ne)}else{let ne=await this._createCard(Ne.card),Ee=this._makeWrapper(ne);(ke=this._setCardPosition)==null||ke.call(this,Ee,((Oe=Ne.position)==null?void 0:Oe.x)||0,((Ce=Ne.position)==null?void 0:Ce.y)||0),Ee.style.width=`${((Xe=Ne.size)==null?void 0:Xe.width)||140}px`,Ee.style.height=`${((Je=Ne.size)==null?void 0:Je.height)||100}px`,Ne.z!=null&&(Ee.style.zIndex=String(Ne.z)),this.cardContainer.appendChild(Ee);try{(Ue=this._rebuildOnce)==null||Ue.call(this,Ee.firstElementChild)}catch{}(at=this._initCardInteract)==null||at.call(this,Ee)}else(ct=this._showEmptyPlaceholder)==null||ct.call(this);(rt=this._resizeContainer)==null||rt.call(this),(re=this._markDirty)==null||re.call(this,"import"),(ft=this._toast)==null||ft.call(this,A==="switcher"?`Loaded layout "${T}"`:"Design imported")}catch(Ne){console.error("[ddc:apply] rebuild failed",Ne),(et=this._toast)==null||et.call(this,"Import failed during rebuild.")}}function x(){var S,A;try{let L=this.shadowRoot||this.renderRoot||this,C=L.querySelector(".ddc-switcher-inline");if(!C)return;let T=((S=this._getLovelace)==null?void 0:S.call(this))||e.call(this),M=!1;try{let _=(A=L.getRootNode&&L.getRootNode())==null?void 0:A.host;M=!!(T&&(T.editMode===!0||_&&_.editMode===!0))}catch{}C.style.display=M?"inline-flex":"none"}catch{}}function O(){try{if(this._ddcSwitcherInstalled)return;let A=(this.shadowRoot||this.renderRoot||this).querySelector(".toolbar");if(!A)return;let L=document.createElement("div");L.className="ddc-switcher-inline",Object.assign(L.style,{display:"inline-flex",gap:"6px",alignItems:"center",marginLeft:"auto"});let C=document.createElement("span");C.textContent="Layout:",C.style.fontSize="12px",C.style.opacity="0.8";let T=document.createElement("select");Object.assign(T.style,{fontSize:"12px",padding:"4px 6px",borderRadius:"8px",border:"1px solid var(--divider-color, #999)",background:"var(--card-background-color, #fff)"}),T.title="Select stored layout (storage_key)",T.id="ddcKeySelect";let M=document.createElement("button");M.className="btn secondary",M.type="button",M.style.padding="6px 10px",M.innerHTML='<ha-icon icon="mdi:refresh"></ha-icon><span style="margin-left:6px">Refresh</span>',L.appendChild(C),L.appendChild(T),L.appendChild(M),A.appendChild(L),this._ddcSwitcherInstalled=!0;let _=async()=>{let P=this.storageKey||this._config&&this._config.storage_key||"",D=await m.call(this),K=u(),J=l(),U=ue=>Array.from(new Set(ue.filter(Boolean))),ae=U(D),H=U(K),G=U(J);if(T.innerHTML="",P&&!ae.includes(P)&&!H.includes(P)&&!G.includes(P)){let ue=document.createElement("option");ue.value=P,ue.textContent=`${P} (current)`,ue.selected=!0,T.appendChild(ue)}let ee=(ue,We)=>{if(!We.length)return;let fe=document.createElement("optgroup");fe.label=ue,We.forEach(Oe=>{let Ce=document.createElement("option");Ce.value=Oe,Ce.textContent=Oe,Oe===P&&(Ce.selected=!0),fe.appendChild(Ce)}),T.appendChild(fe)};if(ee("Server",ae),ee("Backups",H),ee("Recent",G),!T.children.length){let ue=document.createElement("option");ue.value="",ue.textContent="\u2014 none \u2014",ue.selected=!0,T.appendChild(ue)}x.call(this)};_(),M.addEventListener("click",_),T.addEventListener("change",async P=>{var K,J,U,ae,H,G,ee,ue;let D=String(P.target.value||"");if(D&&!this._ddcLoadingFromKey){this._ddcLoadingFromKey=!0;try{let We=await v.call(this,D);if(!We){(K=this._toast)==null||K.call(this,`No layout found for "${D}"`);return}await y.call(this,We,{source:"switcher",newKey:D}),(J=this._resizeContainer)==null||J.call(this),(U=this._toast)==null||U.call(this,`Loaded layout "${D}"`);let fe=String(((ae=this._config)==null?void 0:ae.storage_key)||this.storageKey||""),Oe=!1;try{let Ce=fe?{forceTargetKey:fe,noDownload:!0}:{noDownload:!0};Oe=await this._persistOptionsToYaml({storage_key:D},Ce)}catch(Ce){console.warn("[ddc:switcher] failed to persist storage_key to YAML",Ce),(H=this._toast)==null||H.call(this,"Failed to persist selected layout. Keeping current.");return}if(this.storageKey=D,this._config&&(this._config.storage_key=D),!Oe){console.warn("[ddc:switcher] persist returned false (likely YAML mode). Skipping reload.");return}try{this._saveTimer&&clearTimeout(this._saveTimer),await this._saveLayout(!0)}catch(Ce){console.warn("[ddc:switcher] saveLayout failed",Ce),(G=this._markDirty)==null||G.call(this,"switcher"),(ee=this._toast)==null||ee.call(this,"Layout loaded \u2014 click Apply to save.");return}window.location.reload(),window.location.reload()}catch(We){console.warn("[ddc:switcher] load/apply failed",We),(ue=this._toast)==null||ue.call(this,"Failed to load layout.")}finally{this._ddcLoadingFromKey=!1}}}),this._ddcVisTimer&&clearInterval(this._ddcVisTimer),this._ddcVisTimer=setInterval(()=>x.call(this),800),x.call(this)}catch(S){console.warn("[ddc:switcher] inline install failed",S)}}h.prototype._getLovelace||(h.prototype._getLovelace=e),h.prototype._scanDdcCards||(h.prototype._scanDdcCards=n),h.prototype._persistOptionsToYaml=f,h.prototype._applyDesignObject||(h.prototype._applyDesignObject=y);try{let S=Object.getOwnPropertyDescriptor(h.prototype,"hass");if(S&&(S.set||S.get)){let A=S.set;Object.defineProperty(h.prototype,"hass",{configurable:!0,enumerable:!0,set(L){A&&A.call(this,L);try{O.call(this)}catch{}},get:S.get||function(){return this._hass}})}else if(typeof h.prototype.setHass=="function"){let A=h.prototype.setHass;h.prototype.setHass=function(L){A&&A.call(this,L);try{O.call(this)}catch{}}}else{let A=h.prototype.updated||h.prototype.firstUpdated;h.prototype.updated=function(...L){A&&A.apply(this,L);try{O.call(this)}catch{}}}}catch(S){console.warn("[ddc:switcher] wrap hass setter failed",S)}})();
/*!
 * Drag & Drop Card (Proprietary)
 * Copyright (c) 2025 <SMARTI AS>
 * Use is governed by EULA.md. Third-party notices: THIRD_PARTY_NOTICES.md
 */
/*! Bundled license information:

js-yaml/dist/js-yaml.mjs:
  (*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT *)
*/
//# sourceMappingURL=drag-and-drop-card.js.map
