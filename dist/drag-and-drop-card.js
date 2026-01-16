var Ma=Object.create;var vr=Object.defineProperty;var La=Object.getOwnPropertyDescriptor;var Pa=Object.getOwnPropertyNames;var Ra=Object.getPrototypeOf,Ia=Object.prototype.hasOwnProperty;var Da=(e,p,t)=>p in e?vr(e,p,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[p]=t;var Fa=(e,p)=>()=>(p||e((p={exports:{}}).exports,p),p.exports);var Ba=(e,p,t,n)=>{if(p&&typeof p=="object"||typeof p=="function")for(let o of Pa(p))!Ia.call(e,o)&&o!==t&&vr(e,o,{get:()=>p[o],enumerable:!(n=La(p,o))||n.enumerable});return e};var Na=(e,p,t)=>(t=e!=null?Ma(Ra(e)):{},Ba(p||!e||!e.__esModule?vr(t,"default",{value:e,enumerable:!0}):t,e));var pt=(e,p,t)=>Da(e,typeof p!="symbol"?p+"":p,t);var $r=Fa((br,ci)=>{(function(e,p){typeof br=="object"&&typeof ci!="undefined"?ci.exports=p():typeof define=="function"&&define.amd?define(p):(e=typeof globalThis!="undefined"?globalThis:e||self).interact=p()})(br,(function(){"use strict";function e(r,i){var a=Object.keys(r);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(r);i&&(d=d.filter((function(h){return Object.getOwnPropertyDescriptor(r,h).enumerable}))),a.push.apply(a,d)}return a}function p(r){for(var i=1;i<arguments.length;i++){var a=arguments[i]!=null?arguments[i]:{};i%2?e(Object(a),!0).forEach((function(d){s(r,d,a[d])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):e(Object(a)).forEach((function(d){Object.defineProperty(r,d,Object.getOwnPropertyDescriptor(a,d))}))}return r}function t(r){return t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},t(r)}function n(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")}function o(r,i){for(var a=0;a<i.length;a++){var d=i[a];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(r,w(d.key),d)}}function c(r,i,a){return i&&o(r.prototype,i),a&&o(r,a),Object.defineProperty(r,"prototype",{writable:!1}),r}function s(r,i,a){return(i=w(i))in r?Object.defineProperty(r,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[i]=a,r}function l(r,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(i&&i.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),i&&f(r,i)}function u(r){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},u(r)}function f(r,i){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,d){return a.__proto__=d,a},f(r,i)}function y(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function m(r){var i=(function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch{return!1}})();return function(){var a,d=u(r);if(i){var h=u(this).constructor;a=Reflect.construct(d,arguments,h)}else a=d.apply(this,arguments);return(function(g,x){if(x&&(typeof x=="object"||typeof x=="function"))return x;if(x!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return y(g)})(this,a)}}function v(){return v=typeof Reflect!="undefined"&&Reflect.get?Reflect.get.bind():function(r,i,a){var d=(function(g,x){for(;!Object.prototype.hasOwnProperty.call(g,x)&&(g=u(g))!==null;);return g})(r,i);if(d){var h=Object.getOwnPropertyDescriptor(d,i);return h.get?h.get.call(arguments.length<3?r:a):h.value}},v.apply(this,arguments)}function w(r){var i=(function(a,d){if(typeof a!="object"||a===null)return a;var h=a[Symbol.toPrimitive];if(h!==void 0){var g=h.call(a,d||"default");if(typeof g!="object")return g;throw new TypeError("@@toPrimitive must return a primitive value.")}return(d==="string"?String:Number)(a)})(r,"string");return typeof i=="symbol"?i:i+""}var S=function(r){return!(!r||!r.Window)&&r instanceof r.Window},_=void 0,T=void 0;function R(r){_=r;var i=r.document.createTextNode("");i.ownerDocument!==r.document&&typeof r.wrap=="function"&&r.wrap(i)===i&&(r=r.wrap(r)),T=r}function C(r){return S(r)?r:(r.ownerDocument||r).defaultView||T.window}typeof window!="undefined"&&window&&R(window);var O=function(r){return!!r&&t(r)==="object"},z=function(r){return typeof r=="function"},b={window:function(r){return r===T||S(r)},docFrag:function(r){return O(r)&&r.nodeType===11},object:O,func:z,number:function(r){return typeof r=="number"},bool:function(r){return typeof r=="boolean"},string:function(r){return typeof r=="string"},element:function(r){if(!r||t(r)!=="object")return!1;var i=C(r)||T;return/object|function/.test(typeof Element=="undefined"?"undefined":t(Element))?r instanceof Element||r instanceof i.Element:r.nodeType===1&&typeof r.nodeName=="string"},plainObject:function(r){return O(r)&&!!r.constructor&&/function Object\b/.test(r.constructor.toString())},array:function(r){return O(r)&&r.length!==void 0&&z(r.splice)}};function L(r){var i=r.interaction;if(i.prepared.name==="drag"){var a=i.prepared.axis;a==="x"?(i.coords.cur.page.y=i.coords.start.page.y,i.coords.cur.client.y=i.coords.start.client.y,i.coords.velocity.client.y=0,i.coords.velocity.page.y=0):a==="y"&&(i.coords.cur.page.x=i.coords.start.page.x,i.coords.cur.client.x=i.coords.start.client.x,i.coords.velocity.client.x=0,i.coords.velocity.page.x=0)}}function I(r){var i=r.iEvent,a=r.interaction;if(a.prepared.name==="drag"){var d=a.prepared.axis;if(d==="x"||d==="y"){var h=d==="x"?"y":"x";i.page[h]=a.coords.start.page[h],i.client[h]=a.coords.start.client[h],i.delta[h]=0}}}var F={id:"actions/drag",install:function(r){var i=r.actions,a=r.Interactable,d=r.defaults;a.prototype.draggable=F.draggable,i.map.drag=F,i.methodDict.drag="draggable",d.actions.drag=F.defaults},listeners:{"interactions:before-action-move":L,"interactions:action-resume":L,"interactions:action-move":I,"auto-start:check":function(r){var i=r.interaction,a=r.interactable,d=r.buttons,h=a.options.drag;if(h&&h.enabled&&(!i.pointerIsDown||!/mouse|pointer/.test(i.pointerType)||(d&a.options.drag.mouseButtons)!=0))return r.action={name:"drag",axis:h.lockAxis==="start"?h.startAxis:h.lockAxis},!1}},draggable:function(r){return b.object(r)?(this.options.drag.enabled=r.enabled!==!1,this.setPerAction("drag",r),this.setOnEvents("drag",r),/^(xy|x|y|start)$/.test(r.lockAxis)&&(this.options.drag.lockAxis=r.lockAxis),/^(xy|x|y)$/.test(r.startAxis)&&(this.options.drag.startAxis=r.startAxis),this):b.bool(r)?(this.options.drag.enabled=r,this):this.options.drag},beforeMove:L,move:I,defaults:{startAxis:"xy",lockAxis:"xy"},getCursor:function(){return"move"},filterEventType:function(r){return r.search("drag")===0}},N=F,H={init:function(r){var i=r;H.document=i.document,H.DocumentFragment=i.DocumentFragment||Q,H.SVGElement=i.SVGElement||Q,H.SVGSVGElement=i.SVGSVGElement||Q,H.SVGElementInstance=i.SVGElementInstance||Q,H.Element=i.Element||Q,H.HTMLElement=i.HTMLElement||H.Element,H.Event=i.Event,H.Touch=i.Touch||Q,H.PointerEvent=i.PointerEvent||i.MSPointerEvent},document:null,DocumentFragment:null,SVGElement:null,SVGSVGElement:null,SVGElementInstance:null,Element:null,HTMLElement:null,Event:null,Touch:null,PointerEvent:null};function Q(){}var B=H,V={init:function(r){var i=B.Element,a=r.navigator||{};V.supportsTouch="ontouchstart"in r||b.func(r.DocumentTouch)&&B.document instanceof r.DocumentTouch,V.supportsPointerEvent=a.pointerEnabled!==!1&&!!B.PointerEvent,V.isIOS=/iP(hone|od|ad)/.test(a.platform),V.isIOS7=/iP(hone|od|ad)/.test(a.platform)&&/OS 7[^\d]/.test(a.appVersion),V.isIe9=/MSIE 9/.test(a.userAgent),V.isOperaMobile=a.appName==="Opera"&&V.supportsTouch&&/Presto/.test(a.userAgent),V.prefixedMatchesSelector="matches"in i.prototype?"matches":"webkitMatchesSelector"in i.prototype?"webkitMatchesSelector":"mozMatchesSelector"in i.prototype?"mozMatchesSelector":"oMatchesSelector"in i.prototype?"oMatchesSelector":"msMatchesSelector",V.pEventTypes=V.supportsPointerEvent?B.PointerEvent===r.MSPointerEvent?{up:"MSPointerUp",down:"MSPointerDown",over:"mouseover",out:"mouseout",move:"MSPointerMove",cancel:"MSPointerCancel"}:{up:"pointerup",down:"pointerdown",over:"pointerover",out:"pointerout",move:"pointermove",cancel:"pointercancel"}:null,V.wheelEvent=B.document&&"onmousewheel"in B.document?"mousewheel":"wheel"},supportsTouch:null,supportsPointerEvent:null,isIOS7:null,isIOS:null,isIe9:null,isOperaMobile:null,prefixedMatchesSelector:null,pEventTypes:null,wheelEvent:null},U=V;function de(r,i){if(r.contains)return r.contains(i);for(;i;){if(i===r)return!0;i=i.parentNode}return!1}function _e(r,i){for(;b.element(r);){if(re(r,i))return r;r=Re(r)}return null}function Re(r){var i=r.parentNode;if(b.docFrag(i)){for(;(i=i.host)&&b.docFrag(i););return i}return i}function re(r,i){return T!==_&&(i=i.replace(/\/deep\//g," ")),r[U.prefixedMatchesSelector](i)}var ze=function(r){return r.parentNode||r.host};function pe(r,i){for(var a,d=[],h=r;(a=ze(h))&&h!==i&&a!==h.ownerDocument;)d.unshift(h),h=a;return d}function He(r,i,a){for(;b.element(r);){if(re(r,i))return!0;if((r=Re(r))===a)return re(r,i)}return!1}function Ye(r){return r.correspondingUseElement||r}function De(r){var i=r instanceof B.SVGElement?r.getBoundingClientRect():r.getClientRects()[0];return i&&{left:i.left,right:i.right,top:i.top,bottom:i.bottom,width:i.width||i.right-i.left,height:i.height||i.bottom-i.top}}function Ue(r){var i,a=De(r);if(!U.isIOS7&&a){var d={x:(i=(i=C(r))||T).scrollX||i.document.documentElement.scrollLeft,y:i.scrollY||i.document.documentElement.scrollTop};a.left+=d.x,a.right+=d.x,a.top+=d.y,a.bottom+=d.y}return a}function ot(r){for(var i=[];r;)i.push(r),r=Re(r);return i}function st(r){return!!b.string(r)&&(B.document.querySelector(r),!0)}function ae(r,i){for(var a in i)r[a]=i[a];return r}function ut(r,i,a){return r==="parent"?Re(a):r==="self"?i.getRect(a):_e(a,r)}function ct(r,i,a,d){var h=r;return b.string(h)?h=ut(h,i,a):b.func(h)&&(h=h.apply(void 0,d)),b.element(h)&&(h=Ue(h)),h}function Pe(r){return r&&{x:"x"in r?r.x:r.left,y:"y"in r?r.y:r.top}}function oe(r){return!r||"x"in r&&"y"in r||((r=ae({},r)).x=r.left||0,r.y=r.top||0,r.width=r.width||(r.right||0)-r.x,r.height=r.height||(r.bottom||0)-r.y),r}function $e(r,i,a){r.left&&(i.left+=a.x),r.right&&(i.right+=a.x),r.top&&(i.top+=a.y),r.bottom&&(i.bottom+=a.y),i.width=i.right-i.left,i.height=i.bottom-i.top}function ke(r,i,a){var d=a&&r.options[a];return Pe(ct(d&&d.origin||r.options.origin,r,i,[r&&i]))||{x:0,y:0}}function Me(r,i){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(E){return!0},d=arguments.length>3?arguments[3]:void 0;if(d=d||{},b.string(r)&&r.search(" ")!==-1&&(r=ft(r)),b.array(r))return r.forEach((function(E){return Me(E,i,a,d)})),d;if(b.object(r)&&(i=r,r=""),b.func(i)&&a(r))d[r]=d[r]||[],d[r].push(i);else if(b.array(i))for(var h=0,g=i;h<g.length;h++){var x=g[h];Me(r,x,a,d)}else if(b.object(i))for(var k in i)Me(ft(k).map((function(E){return"".concat(r).concat(E)})),i[k],a,d);return d}function ft(r){return r.trim().split(/ +/)}var gt=function(r,i){return Math.sqrt(r*r+i*i)},Bt=["webkit","moz"];function lt(r,i){r.__set||(r.__set={});var a=function(h){if(Bt.some((function(g){return h.indexOf(g)===0})))return 1;typeof r[h]!="function"&&h!=="__set"&&Object.defineProperty(r,h,{get:function(){return h in r.__set?r.__set[h]:r.__set[h]=i[h]},set:function(g){r.__set[h]=g},configurable:!0})};for(var d in i)a(d);return r}function At(r,i){r.page=r.page||{},r.page.x=i.page.x,r.page.y=i.page.y,r.client=r.client||{},r.client.x=i.client.x,r.client.y=i.client.y,r.timeStamp=i.timeStamp}function xt(r){r.page.x=0,r.page.y=0,r.client.x=0,r.client.y=0}function Wt(r){return r instanceof B.Event||r instanceof B.Touch}function Fe(r,i,a){return r=r||"page",(a=a||{}).x=i[r+"X"],a.y=i[r+"Y"],a}function mt(r,i){return i=i||{x:0,y:0},U.isOperaMobile&&Wt(r)?(Fe("screen",r,i),i.x+=window.scrollX,i.y+=window.scrollY):Fe("page",r,i),i}function Tt(r){return b.number(r.pointerId)?r.pointerId:r.identifier}function ii(r,i,a){var d=i.length>1?yt(i):i[0];mt(d,r.page),(function(h,g){g=g||{},U.isOperaMobile&&Wt(h)?Fe("screen",h,g):Fe("client",h,g)})(d,r.client),r.timeStamp=a}function Ot(r){var i=[];return b.array(r)?(i[0]=r[0],i[1]=r[1]):r.type==="touchend"?r.touches.length===1?(i[0]=r.touches[0],i[1]=r.changedTouches[0]):r.touches.length===0&&(i[0]=r.changedTouches[0],i[1]=r.changedTouches[1]):(i[0]=r.touches[0],i[1]=r.touches[1]),i}function yt(r){for(var i={pageX:0,pageY:0,clientX:0,clientY:0,screenX:0,screenY:0},a=0;a<r.length;a++){var d=r[a];for(var h in i)i[h]+=d[h]}for(var g in i)i[g]/=r.length;return i}function It(r){if(!r.length)return null;var i=Ot(r),a=Math.min(i[0].pageX,i[1].pageX),d=Math.min(i[0].pageY,i[1].pageY),h=Math.max(i[0].pageX,i[1].pageX),g=Math.max(i[0].pageY,i[1].pageY);return{x:a,y:d,left:a,top:d,right:h,bottom:g,width:h-a,height:g-d}}function Mt(r,i){var a=i+"X",d=i+"Y",h=Ot(r),g=h[0][a]-h[1][a],x=h[0][d]-h[1][d];return gt(g,x)}function ge(r,i){var a=i+"X",d=i+"Y",h=Ot(r),g=h[1][a]-h[0][a],x=h[1][d]-h[0][d];return 180*Math.atan2(x,g)/Math.PI}function j(r){return b.string(r.pointerType)?r.pointerType:b.number(r.pointerType)?[void 0,void 0,"touch","pen","mouse"][r.pointerType]:/touch/.test(r.type||"")||r instanceof B.Touch?"touch":"mouse"}function $(r){var i=b.func(r.composedPath)?r.composedPath():r.path;return[Ye(i?i[0]:r.target),Ye(r.currentTarget)]}var me=(function(){function r(i){n(this,r),this.immediatePropagationStopped=!1,this.propagationStopped=!1,this._interaction=i}return c(r,[{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}]),r})();Object.defineProperty(me.prototype,"interaction",{get:function(){return this._interaction._proxy},set:function(){}});var we=function(r,i){for(var a=0;a<i.length;a++){var d=i[a];r.push(d)}return r},ue=function(r){return we([],r)},Te=function(r,i){for(var a=0;a<r.length;a++)if(i(r[a],a,r))return a;return-1},Y=function(r,i){return r[Te(r,i)]},Z=(function(r){l(a,r);var i=m(a);function a(d,h,g){var x;n(this,a),(x=i.call(this,h._interaction)).dropzone=void 0,x.dragEvent=void 0,x.relatedTarget=void 0,x.draggable=void 0,x.propagationStopped=!1,x.immediatePropagationStopped=!1;var k=g==="dragleave"?d.prev:d.cur,E=k.element,P=k.dropzone;return x.type=g,x.target=E,x.currentTarget=E,x.dropzone=P,x.dragEvent=h,x.relatedTarget=h.target,x.draggable=h.interactable,x.timeStamp=h.timeStamp,x}return c(a,[{key:"reject",value:function(){var d=this,h=this._interaction.dropState;if(this.type==="dropactivate"||this.dropzone&&h.cur.dropzone===this.dropzone&&h.cur.element===this.target)if(h.prev.dropzone=this.dropzone,h.prev.element=this.target,h.rejected=!0,h.events.enter=null,this.stopImmediatePropagation(),this.type==="dropactivate"){var g=h.activeDrops,x=Te(g,(function(E){var P=E.dropzone,A=E.element;return P===d.dropzone&&A===d.target}));h.activeDrops.splice(x,1);var k=new a(h,this.dragEvent,"dropdeactivate");k.dropzone=this.dropzone,k.target=this.target,this.dropzone.fire(k)}else this.dropzone.fire(new a(h,this.dragEvent,"dragleave"))}},{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}]),a})(me);function Oe(r,i){for(var a=0,d=r.slice();a<d.length;a++){var h=d[a],g=h.dropzone,x=h.element;i.dropzone=g,i.target=x,g.fire(i),i.propagationStopped=i.immediatePropagationStopped=!1}}function K(r,i){for(var a=(function(g,x){for(var k=[],E=0,P=g.interactables.list;E<P.length;E++){var A=P[E];if(A.options.drop.enabled){var D=A.options.drop.accept;if(!(b.element(D)&&D!==x||b.string(D)&&!re(x,D)||b.func(D)&&!D({dropzone:A,draggableElement:x})))for(var q=0,X=A.getAllElements();q<X.length;q++){var G=X[q];G!==x&&k.push({dropzone:A,element:G,rect:A.getRect(G)})}}}return k})(r,i),d=0;d<a.length;d++){var h=a[d];h.rect=h.dropzone.getRect(h.element)}return a}function Qe(r,i,a){for(var d=r.dropState,h=r.interactable,g=r.element,x=[],k=0,E=d.activeDrops;k<E.length;k++){var P=E[k],A=P.dropzone,D=P.element,q=P.rect,X=A.dropCheck(i,a,h,g,D,q);x.push(X?D:null)}var G=(function(ie){for(var fe,le,be,Ie=[],Ke=0;Ke<ie.length;Ke++){var Ae=ie[Ke],Ne=ie[fe];if(Ae&&Ke!==fe)if(Ne){var Ct=ze(Ae),at=ze(Ne);if(Ct!==Ae.ownerDocument)if(at!==Ae.ownerDocument)if(Ct!==at){Ie=Ie.length?Ie:pe(Ne);var Rt=void 0;if(Ne instanceof B.HTMLElement&&Ae instanceof B.SVGElement&&!(Ae instanceof B.SVGSVGElement)){if(Ae===at)continue;Rt=Ae.ownerSVGElement}else Rt=Ae;for(var Nt=pe(Rt,Ne.ownerDocument),Yt=0;Nt[Yt]&&Nt[Yt]===Ie[Yt];)Yt++;var nr=[Nt[Yt-1],Nt[Yt],Ie[Yt]];if(nr[0])for(var Ii=nr[0].lastChild;Ii;){if(Ii===nr[1]){fe=Ke,Ie=Nt;break}if(Ii===nr[2])break;Ii=Ii.previousSibling}}else be=Ne,(parseInt(C(le=Ae).getComputedStyle(le).zIndex,10)||0)>=(parseInt(C(be).getComputedStyle(be).zIndex,10)||0)&&(fe=Ke);else fe=Ke}else fe=Ke}return fe})(x);return d.activeDrops[G]||null}function Ve(r,i,a){var d=r.dropState,h={enter:null,leave:null,activate:null,deactivate:null,move:null,drop:null};return a.type==="dragstart"&&(h.activate=new Z(d,a,"dropactivate"),h.activate.target=null,h.activate.dropzone=null),a.type==="dragend"&&(h.deactivate=new Z(d,a,"dropdeactivate"),h.deactivate.target=null,h.deactivate.dropzone=null),d.rejected||(d.cur.element!==d.prev.element&&(d.prev.dropzone&&(h.leave=new Z(d,a,"dragleave"),a.dragLeave=h.leave.target=d.prev.element,a.prevDropzone=h.leave.dropzone=d.prev.dropzone),d.cur.dropzone&&(h.enter=new Z(d,a,"dragenter"),a.dragEnter=d.cur.element,a.dropzone=d.cur.dropzone)),a.type==="dragend"&&d.cur.dropzone&&(h.drop=new Z(d,a,"drop"),a.dropzone=d.cur.dropzone,a.relatedTarget=d.cur.element),a.type==="dragmove"&&d.cur.dropzone&&(h.move=new Z(d,a,"dropmove"),a.dropzone=d.cur.dropzone)),h}function rt(r,i){var a=r.dropState,d=a.activeDrops,h=a.cur,g=a.prev;i.leave&&g.dropzone.fire(i.leave),i.enter&&h.dropzone.fire(i.enter),i.move&&h.dropzone.fire(i.move),i.drop&&h.dropzone.fire(i.drop),i.deactivate&&Oe(d,i.deactivate),a.prev.dropzone=h.dropzone,a.prev.element=h.element}function je(r,i){var a=r.interaction,d=r.iEvent,h=r.event;if(d.type==="dragmove"||d.type==="dragend"){var g=a.dropState;i.dynamicDrop&&(g.activeDrops=K(i,a.element));var x=d,k=Qe(a,x,h);g.rejected=g.rejected&&!!k&&k.dropzone===g.cur.dropzone&&k.element===g.cur.element,g.cur.dropzone=k&&k.dropzone,g.cur.element=k&&k.element,g.events=Ve(a,0,x)}}var nt={id:"actions/drop",install:function(r){var i=r.actions,a=r.interactStatic,d=r.Interactable,h=r.defaults;r.usePlugin(N),d.prototype.dropzone=function(g){return(function(x,k){if(b.object(k)){if(x.options.drop.enabled=k.enabled!==!1,k.listeners){var E=Me(k.listeners),P=Object.keys(E).reduce((function(D,q){return D[/^(enter|leave)/.test(q)?"drag".concat(q):/^(activate|deactivate|move)/.test(q)?"drop".concat(q):q]=E[q],D}),{}),A=x.options.drop.listeners;A&&x.off(A),x.on(P),x.options.drop.listeners=P}return b.func(k.ondrop)&&x.on("drop",k.ondrop),b.func(k.ondropactivate)&&x.on("dropactivate",k.ondropactivate),b.func(k.ondropdeactivate)&&x.on("dropdeactivate",k.ondropdeactivate),b.func(k.ondragenter)&&x.on("dragenter",k.ondragenter),b.func(k.ondragleave)&&x.on("dragleave",k.ondragleave),b.func(k.ondropmove)&&x.on("dropmove",k.ondropmove),/^(pointer|center)$/.test(k.overlap)?x.options.drop.overlap=k.overlap:b.number(k.overlap)&&(x.options.drop.overlap=Math.max(Math.min(1,k.overlap),0)),"accept"in k&&(x.options.drop.accept=k.accept),"checker"in k&&(x.options.drop.checker=k.checker),x}return b.bool(k)?(x.options.drop.enabled=k,x):x.options.drop})(this,g)},d.prototype.dropCheck=function(g,x,k,E,P,A){return(function(D,q,X,G,ie,fe,le){var be=!1;if(!(le=le||D.getRect(fe)))return!!D.options.drop.checker&&D.options.drop.checker(q,X,be,D,fe,G,ie);var Ie=D.options.drop.overlap;if(Ie==="pointer"){var Ke=ke(G,ie,"drag"),Ae=mt(q);Ae.x+=Ke.x,Ae.y+=Ke.y;var Ne=Ae.x>le.left&&Ae.x<le.right,Ct=Ae.y>le.top&&Ae.y<le.bottom;be=Ne&&Ct}var at=G.getRect(ie);if(at&&Ie==="center"){var Rt=at.left+at.width/2,Nt=at.top+at.height/2;be=Rt>=le.left&&Rt<=le.right&&Nt>=le.top&&Nt<=le.bottom}return at&&b.number(Ie)&&(be=Math.max(0,Math.min(le.right,at.right)-Math.max(le.left,at.left))*Math.max(0,Math.min(le.bottom,at.bottom)-Math.max(le.top,at.top))/(at.width*at.height)>=Ie),D.options.drop.checker&&(be=D.options.drop.checker(q,X,be,D,fe,G,ie)),be})(this,g,x,k,E,P,A)},a.dynamicDrop=function(g){return b.bool(g)?(r.dynamicDrop=g,a):r.dynamicDrop},ae(i.phaselessTypes,{dragenter:!0,dragleave:!0,dropactivate:!0,dropdeactivate:!0,dropmove:!0,drop:!0}),i.methodDict.drop="dropzone",r.dynamicDrop=!1,h.actions.drop=nt.defaults},listeners:{"interactions:before-action-start":function(r){var i=r.interaction;i.prepared.name==="drag"&&(i.dropState={cur:{dropzone:null,element:null},prev:{dropzone:null,element:null},rejected:null,events:null,activeDrops:[]})},"interactions:after-action-start":function(r,i){var a=r.interaction,d=(r.event,r.iEvent);if(a.prepared.name==="drag"){var h=a.dropState;h.activeDrops=[],h.events={},h.activeDrops=K(i,a.element),h.events=Ve(a,0,d),h.events.activate&&(Oe(h.activeDrops,h.events.activate),i.fire("actions/drop:start",{interaction:a,dragEvent:d}))}},"interactions:action-move":je,"interactions:after-action-move":function(r,i){var a=r.interaction,d=r.iEvent;if(a.prepared.name==="drag"){var h=a.dropState;rt(a,h.events),i.fire("actions/drop:move",{interaction:a,dragEvent:d}),h.events={}}},"interactions:action-end":function(r,i){if(r.interaction.prepared.name==="drag"){var a=r.interaction,d=r.iEvent;je(r,i),rt(a,a.dropState.events),i.fire("actions/drop:end",{interaction:a,dragEvent:d})}},"interactions:stop":function(r){var i=r.interaction;if(i.prepared.name==="drag"){var a=i.dropState;a&&(a.activeDrops=null,a.events=null,a.cur.dropzone=null,a.cur.element=null,a.prev.dropzone=null,a.prev.element=null,a.rejected=!1)}}},getActiveDrops:K,getDrop:Qe,getDropEvents:Ve,fireDropEvents:rt,filterEventType:function(r){return r.search("drag")===0||r.search("drop")===0},defaults:{enabled:!1,accept:null,overlap:"pointer"}},et=nt;function tt(r){var i=r.interaction,a=r.iEvent,d=r.phase;if(i.prepared.name==="gesture"){var h=i.pointers.map((function(P){return P.pointer})),g=d==="start",x=d==="end",k=i.interactable.options.deltaSource;if(a.touches=[h[0],h[1]],g)a.distance=Mt(h,k),a.box=It(h),a.scale=1,a.ds=0,a.angle=ge(h,k),a.da=0,i.gesture.startDistance=a.distance,i.gesture.startAngle=a.angle;else if(x||i.pointers.length<2){var E=i.prevEvent;a.distance=E.distance,a.box=E.box,a.scale=E.scale,a.ds=0,a.angle=E.angle,a.da=0}else a.distance=Mt(h,k),a.box=It(h),a.scale=a.distance/i.gesture.startDistance,a.angle=ge(h,k),a.ds=a.scale-i.gesture.scale,a.da=a.angle-i.gesture.angle;i.gesture.distance=a.distance,i.gesture.angle=a.angle,b.number(a.scale)&&a.scale!==1/0&&!isNaN(a.scale)&&(i.gesture.scale=a.scale)}}var Ge={id:"actions/gesture",before:["actions/drag","actions/resize"],install:function(r){var i=r.actions,a=r.Interactable,d=r.defaults;a.prototype.gesturable=function(h){return b.object(h)?(this.options.gesture.enabled=h.enabled!==!1,this.setPerAction("gesture",h),this.setOnEvents("gesture",h),this):b.bool(h)?(this.options.gesture.enabled=h,this):this.options.gesture},i.map.gesture=Ge,i.methodDict.gesture="gesturable",d.actions.gesture=Ge.defaults},listeners:{"interactions:action-start":tt,"interactions:action-move":tt,"interactions:action-end":tt,"interactions:new":function(r){r.interaction.gesture={angle:0,distance:0,scale:1,startAngle:0,startDistance:0}},"auto-start:check":function(r){if(!(r.interaction.pointers.length<2)){var i=r.interactable.options.gesture;if(i&&i.enabled)return r.action={name:"gesture"},!1}}},defaults:{},getCursor:function(){return""},filterEventType:function(r){return r.search("gesture")===0}},Xe=Ge;function Le(r,i,a,d,h,g,x){if(!i)return!1;if(i===!0){var k=b.number(g.width)?g.width:g.right-g.left,E=b.number(g.height)?g.height:g.bottom-g.top;if(x=Math.min(x,Math.abs((r==="left"||r==="right"?k:E)/2)),k<0&&(r==="left"?r="right":r==="right"&&(r="left")),E<0&&(r==="top"?r="bottom":r==="bottom"&&(r="top")),r==="left"){var P=k>=0?g.left:g.right;return a.x<P+x}if(r==="top"){var A=E>=0?g.top:g.bottom;return a.y<A+x}if(r==="right")return a.x>(k>=0?g.right:g.left)-x;if(r==="bottom")return a.y>(E>=0?g.bottom:g.top)-x}return!!b.element(d)&&(b.element(i)?i===d:He(d,i,h))}function ye(r){var i=r.iEvent,a=r.interaction;if(a.prepared.name==="resize"&&a.resizeAxes){var d=i;a.interactable.options.resize.square?(a.resizeAxes==="y"?d.delta.x=d.delta.y:d.delta.y=d.delta.x,d.axes="xy"):(d.axes=a.resizeAxes,a.resizeAxes==="x"?d.delta.y=0:a.resizeAxes==="y"&&(d.delta.x=0))}}var Ce,Be,Ee={id:"actions/resize",before:["actions/drag"],install:function(r){var i=r.actions,a=r.browser,d=r.Interactable,h=r.defaults;Ee.cursors=(function(g){return g.isIe9?{x:"e-resize",y:"s-resize",xy:"se-resize",top:"n-resize",left:"w-resize",bottom:"s-resize",right:"e-resize",topleft:"se-resize",bottomright:"se-resize",topright:"ne-resize",bottomleft:"ne-resize"}:{x:"ew-resize",y:"ns-resize",xy:"nwse-resize",top:"ns-resize",left:"ew-resize",bottom:"ns-resize",right:"ew-resize",topleft:"nwse-resize",bottomright:"nwse-resize",topright:"nesw-resize",bottomleft:"nesw-resize"}})(a),Ee.defaultMargin=a.supportsTouch||a.supportsPointerEvent?20:10,d.prototype.resizable=function(g){return(function(x,k,E){return b.object(k)?(x.options.resize.enabled=k.enabled!==!1,x.setPerAction("resize",k),x.setOnEvents("resize",k),b.string(k.axis)&&/^x$|^y$|^xy$/.test(k.axis)?x.options.resize.axis=k.axis:k.axis===null&&(x.options.resize.axis=E.defaults.actions.resize.axis),b.bool(k.preserveAspectRatio)?x.options.resize.preserveAspectRatio=k.preserveAspectRatio:b.bool(k.square)&&(x.options.resize.square=k.square),x):b.bool(k)?(x.options.resize.enabled=k,x):x.options.resize})(this,g,r)},i.map.resize=Ee,i.methodDict.resize="resizable",h.actions.resize=Ee.defaults},listeners:{"interactions:new":function(r){r.interaction.resizeAxes="xy"},"interactions:action-start":function(r){(function(i){var a=i.iEvent,d=i.interaction;if(d.prepared.name==="resize"&&d.prepared.edges){var h=a,g=d.rect;d._rects={start:ae({},g),corrected:ae({},g),previous:ae({},g),delta:{left:0,right:0,width:0,top:0,bottom:0,height:0}},h.edges=d.prepared.edges,h.rect=d._rects.corrected,h.deltaRect=d._rects.delta}})(r),ye(r)},"interactions:action-move":function(r){(function(i){var a=i.iEvent,d=i.interaction;if(d.prepared.name==="resize"&&d.prepared.edges){var h=a,g=d.interactable.options.resize.invert,x=g==="reposition"||g==="negate",k=d.rect,E=d._rects,P=E.start,A=E.corrected,D=E.delta,q=E.previous;if(ae(q,A),x){if(ae(A,k),g==="reposition"){if(A.top>A.bottom){var X=A.top;A.top=A.bottom,A.bottom=X}if(A.left>A.right){var G=A.left;A.left=A.right,A.right=G}}}else A.top=Math.min(k.top,P.bottom),A.bottom=Math.max(k.bottom,P.top),A.left=Math.min(k.left,P.right),A.right=Math.max(k.right,P.left);for(var ie in A.width=A.right-A.left,A.height=A.bottom-A.top,A)D[ie]=A[ie]-q[ie];h.edges=d.prepared.edges,h.rect=A,h.deltaRect=D}})(r),ye(r)},"interactions:action-end":function(r){var i=r.iEvent,a=r.interaction;if(a.prepared.name==="resize"&&a.prepared.edges){var d=i;d.edges=a.prepared.edges,d.rect=a._rects.corrected,d.deltaRect=a._rects.delta}},"auto-start:check":function(r){var i=r.interaction,a=r.interactable,d=r.element,h=r.rect,g=r.buttons;if(h){var x=ae({},i.coords.cur.page),k=a.options.resize;if(k&&k.enabled&&(!i.pointerIsDown||!/mouse|pointer/.test(i.pointerType)||(g&k.mouseButtons)!=0)){if(b.object(k.edges)){var E={left:!1,right:!1,top:!1,bottom:!1};for(var P in E)E[P]=Le(P,k.edges[P],x,i._latestPointer.eventTarget,d,h,k.margin||Ee.defaultMargin);E.left=E.left&&!E.right,E.top=E.top&&!E.bottom,(E.left||E.right||E.top||E.bottom)&&(r.action={name:"resize",edges:E})}else{var A=k.axis!=="y"&&x.x>h.right-Ee.defaultMargin,D=k.axis!=="x"&&x.y>h.bottom-Ee.defaultMargin;(A||D)&&(r.action={name:"resize",axes:(A?"x":"")+(D?"y":"")})}return!r.action&&void 0}}}},defaults:{square:!1,preserveAspectRatio:!1,axis:"xy",margin:NaN,edges:null,invert:"none"},cursors:null,getCursor:function(r){var i=r.edges,a=r.axis,d=r.name,h=Ee.cursors,g=null;if(a)g=h[d+a];else if(i){for(var x="",k=0,E=["top","bottom","left","right"];k<E.length;k++){var P=E[k];i[P]&&(x+=P)}g=h[x]}return g},filterEventType:function(r){return r.search("resize")===0},defaultMargin:null},ce=Ee,ne={id:"actions",install:function(r){r.usePlugin(Xe),r.usePlugin(ce),r.usePlugin(N),r.usePlugin(et)}},ee=0,J={request:function(r){return Ce(r)},cancel:function(r){return Be(r)},init:function(r){if(Ce=r.requestAnimationFrame,Be=r.cancelAnimationFrame,!Ce)for(var i=["ms","moz","webkit","o"],a=0;a<i.length;a++){var d=i[a];Ce=r["".concat(d,"RequestAnimationFrame")],Be=r["".concat(d,"CancelAnimationFrame")]||r["".concat(d,"CancelRequestAnimationFrame")]}Ce=Ce&&Ce.bind(r),Be=Be&&Be.bind(r),Ce||(Ce=function(h){var g=Date.now(),x=Math.max(0,16-(g-ee)),k=r.setTimeout((function(){h(g+x)}),x);return ee=g+x,k},Be=function(h){return clearTimeout(h)})}},M={defaults:{enabled:!1,margin:60,container:null,speed:300},now:Date.now,interaction:null,i:0,x:0,y:0,isScrolling:!1,prevTime:0,margin:0,speed:0,start:function(r){M.isScrolling=!0,J.cancel(M.i),r.autoScroll=M,M.interaction=r,M.prevTime=M.now(),M.i=J.request(M.scroll)},stop:function(){M.isScrolling=!1,M.interaction&&(M.interaction.autoScroll=null),J.cancel(M.i)},scroll:function(){var r=M.interaction,i=r.interactable,a=r.element,d=r.prepared.name,h=i.options[d].autoScroll,g=W(h.container,i,a),x=M.now(),k=(x-M.prevTime)/1e3,E=h.speed*k;if(E>=1){var P={x:M.x*E,y:M.y*E};if(P.x||P.y){var A=te(g);b.window(g)?g.scrollBy(P.x,P.y):g&&(g.scrollLeft+=P.x,g.scrollTop+=P.y);var D=te(g),q={x:D.x-A.x,y:D.y-A.y};(q.x||q.y)&&i.fire({type:"autoscroll",target:a,interactable:i,delta:q,interaction:r,container:g})}M.prevTime=x}M.isScrolling&&(J.cancel(M.i),M.i=J.request(M.scroll))},check:function(r,i){var a;return(a=r.options[i].autoScroll)==null?void 0:a.enabled},onInteractionMove:function(r){var i=r.interaction,a=r.pointer;if(i.interacting()&&M.check(i.interactable,i.prepared.name))if(i.simulation)M.x=M.y=0;else{var d,h,g,x,k=i.interactable,E=i.element,P=i.prepared.name,A=k.options[P].autoScroll,D=W(A.container,k,E);if(b.window(D))x=a.clientX<M.margin,d=a.clientY<M.margin,h=a.clientX>D.innerWidth-M.margin,g=a.clientY>D.innerHeight-M.margin;else{var q=De(D);x=a.clientX<q.left+M.margin,d=a.clientY<q.top+M.margin,h=a.clientX>q.right-M.margin,g=a.clientY>q.bottom-M.margin}M.x=h?1:x?-1:0,M.y=g?1:d?-1:0,M.isScrolling||(M.margin=A.margin,M.speed=A.speed,M.start(i))}}};function W(r,i,a){return(b.string(r)?ut(r,i,a):r)||C(a)}function te(r){return b.window(r)&&(r=window.document.body),{x:r.scrollLeft,y:r.scrollTop}}var se={id:"auto-scroll",install:function(r){var i=r.defaults,a=r.actions;r.autoScroll=M,M.now=function(){return r.now()},a.phaselessTypes.autoscroll=!0,i.perAction.autoScroll=M.defaults},listeners:{"interactions:new":function(r){r.interaction.autoScroll=null},"interactions:destroy":function(r){r.interaction.autoScroll=null,M.stop(),M.interaction&&(M.interaction=null)},"interactions:stop":M.stop,"interactions:action-move":function(r){return M.onInteractionMove(r)}}},Se=se;function he(r,i){var a=!1;return function(){return a||(T.console.warn(i),a=!0),r.apply(this,arguments)}}function ve(r,i){return r.name=i.name,r.axis=i.axis,r.edges=i.edges,r}function qe(r){return b.bool(r)?(this.options.styleCursor=r,this):r===null?(delete this.options.styleCursor,this):this.options.styleCursor}function We(r){return b.func(r)?(this.options.actionChecker=r,this):r===null?(delete this.options.actionChecker,this):this.options.actionChecker}var Je={id:"auto-start/interactableMethods",install:function(r){var i=r.Interactable;i.prototype.getAction=function(a,d,h,g){var x=(function(k,E,P,A,D){var q=k.getRect(A),X=E.buttons||{0:1,1:4,3:8,4:16}[E.button],G={action:null,interactable:k,interaction:P,element:A,rect:q,buttons:X};return D.fire("auto-start:check",G),G.action})(this,d,h,g,r);return this.options.actionChecker?this.options.actionChecker(a,d,x,this,g,h):x},i.prototype.ignoreFrom=he((function(a){return this._backCompatOption("ignoreFrom",a)}),"Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."),i.prototype.allowFrom=he((function(a){return this._backCompatOption("allowFrom",a)}),"Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."),i.prototype.actionChecker=We,i.prototype.styleCursor=qe}};function Ze(r,i,a,d,h){return i.testIgnoreAllow(i.options[r.name],a,d)&&i.options[r.name].enabled&&wt(i,a,r,h)?r:null}function Lt(r,i,a,d,h,g,x){for(var k=0,E=d.length;k<E;k++){var P=d[k],A=h[k],D=P.getAction(i,a,r,A);if(D){var q=Ze(D,P,A,g,x);if(q)return{action:q,interactable:P,element:A}}}return{action:null,interactable:null,element:null}}function Dt(r,i,a,d,h){var g=[],x=[],k=d;function E(A){g.push(A),x.push(k)}for(;b.element(k);){g=[],x=[],h.interactables.forEachMatch(k,E);var P=Lt(r,i,a,g,x,d,h);if(P.action&&!P.interactable.options[P.action.name].manualStart)return P;k=Re(k)}return{action:null,interactable:null,element:null}}function Pt(r,i,a){var d=i.action,h=i.interactable,g=i.element;d=d||{name:null},r.interactable=h,r.element=g,ve(r.prepared,d),r.rect=h&&d.name?h.getRect(g):null,bt(r,a),a.fire("autoStart:prepared",{interaction:r})}function wt(r,i,a,d){var h=r.options,g=h[a.name].max,x=h[a.name].maxPerElement,k=d.autoStart.maxInteractions,E=0,P=0,A=0;if(!(g&&x&&k))return!1;for(var D=0,q=d.interactions.list;D<q.length;D++){var X=q[D],G=X.prepared.name;if(X.interacting()&&(++E>=k||X.interactable===r&&((P+=G===a.name?1:0)>=g||X.element===i&&(A++,G===a.name&&A>=x))))return!1}return k>0}function qt(r,i){return b.number(r)?(i.autoStart.maxInteractions=r,this):i.autoStart.maxInteractions}function Ft(r,i,a){var d=a.autoStart.cursorElement;d&&d!==r&&(d.style.cursor=""),r.ownerDocument.documentElement.style.cursor=i,r.style.cursor=i,a.autoStart.cursorElement=i?r:null}function bt(r,i){var a=r.interactable,d=r.element,h=r.prepared;if(r.pointerType==="mouse"&&a&&a.options.styleCursor){var g="";if(h.name){var x=a.options[h.name].cursorChecker;g=b.func(x)?x(h,a,d,r._interacting):i.actions.map[h.name].getCursor(h)}Ft(r.element,g||"",i)}else i.autoStart.cursorElement&&Ft(i.autoStart.cursorElement,"",i)}var Kt={id:"auto-start/base",before:["actions"],install:function(r){var i=r.interactStatic,a=r.defaults;r.usePlugin(Je),a.base.actionChecker=null,a.base.styleCursor=!0,ae(a.perAction,{manualStart:!1,max:1/0,maxPerElement:1,allowFrom:null,ignoreFrom:null,mouseButtons:1}),i.maxInteractions=function(d){return qt(d,r)},r.autoStart={maxInteractions:1/0,withinInteractionLimit:wt,cursorElement:null}},listeners:{"interactions:down":function(r,i){var a=r.interaction,d=r.pointer,h=r.event,g=r.eventTarget;a.interacting()||Pt(a,Dt(a,d,h,g,i),i)},"interactions:move":function(r,i){(function(a,d){var h=a.interaction,g=a.pointer,x=a.event,k=a.eventTarget;h.pointerType!=="mouse"||h.pointerIsDown||h.interacting()||Pt(h,Dt(h,g,x,k,d),d)})(r,i),(function(a,d){var h=a.interaction;if(h.pointerIsDown&&!h.interacting()&&h.pointerWasMoved&&h.prepared.name){d.fire("autoStart:before-start",a);var g=h.interactable,x=h.prepared.name;x&&g&&(g.options[x].manualStart||!wt(g,h.element,h.prepared,d)?h.stop():(h.start(h.prepared,g,h.element),bt(h,d)))}})(r,i)},"interactions:stop":function(r,i){var a=r.interaction,d=a.interactable;d&&d.options.styleCursor&&Ft(a.element,"",i)}},maxInteractions:qt,withinInteractionLimit:wt,validateAction:Ze},ri=Kt,ur={id:"auto-start/dragAxis",listeners:{"autoStart:before-start":function(r,i){var a=r.interaction,d=r.eventTarget,h=r.dx,g=r.dy;if(a.prepared.name==="drag"){var x=Math.abs(h),k=Math.abs(g),E=a.interactable.options.drag,P=E.startAxis,A=x>k?"x":x<k?"y":"xy";if(a.prepared.axis=E.lockAxis==="start"?A[0]:E.lockAxis,A!=="xy"&&P!=="xy"&&P!==A){a.prepared.name=null;for(var D=d,q=function(G){if(G!==a.interactable){var ie=a.interactable.options.drag;if(!ie.manualStart&&G.testIgnoreAllow(ie,D,d)){var fe=G.getAction(a.downPointer,a.downEvent,a,D);if(fe&&fe.name==="drag"&&(function(le,be){if(!be)return!1;var Ie=be.options.drag.startAxis;return le==="xy"||Ie==="xy"||Ie===le})(A,G)&&ri.validateAction(fe,G,D,d,i))return G}}};b.element(D);){var X=i.interactables.forEachMatch(D,q);if(X){a.prepared.name="drag",a.interactable=X,a.element=D;break}D=Re(D)}}}}}};function ui(r){var i=r.prepared&&r.prepared.name;if(!i)return null;var a=r.interactable.options;return a[i].hold||a[i].delay}var Hi={id:"auto-start/hold",install:function(r){var i=r.defaults;r.usePlugin(ri),i.perAction.hold=0,i.perAction.delay=0},listeners:{"interactions:new":function(r){r.interaction.autoStartHoldTimer=null},"autoStart:prepared":function(r){var i=r.interaction,a=ui(i);a>0&&(i.autoStartHoldTimer=setTimeout((function(){i.start(i.prepared,i.interactable,i.element)}),a))},"interactions:move":function(r){var i=r.interaction,a=r.duplicate;i.autoStartHoldTimer&&i.pointerWasMoved&&!a&&(clearTimeout(i.autoStartHoldTimer),i.autoStartHoldTimer=null)},"autoStart:before-start":function(r){var i=r.interaction;ui(i)>0&&(i.prepared.name=null)}},getHoldDuration:ui},ji=Hi,Wi={id:"auto-start",install:function(r){r.usePlugin(ri),r.usePlugin(ji),r.usePlugin(ur)}},_i=function(r){return/^(always|never|auto)$/.test(r)?(this.options.preventDefault=r,this):b.bool(r)?(this.options.preventDefault=r?"always":"never",this):this.options.preventDefault};function pr(r){var i=r.interaction,a=r.event;i.interactable&&i.interactable.checkAndPreventDefault(a)}var pi={id:"core/interactablePreventDefault",install:function(r){var i=r.Interactable;i.prototype.preventDefault=_i,i.prototype.checkAndPreventDefault=function(a){return(function(d,h,g){var x=d.options.preventDefault;if(x!=="never")if(x!=="always"){if(h.events.supportsPassive&&/^touch(start|move)$/.test(g.type)){var k=C(g.target).document,E=h.getDocOptions(k);if(!E||!E.events||E.events.passive!==!1)return}/^(mouse|pointer|touch)*(down|start)/i.test(g.type)||b.element(g.target)&&re(g.target,"input,select,textarea,[contenteditable=true],[contenteditable=true] *")||g.preventDefault()}else g.preventDefault()})(this,r,a)},r.interactions.docEvents.push({type:"dragstart",listener:function(a){for(var d=0,h=r.interactions.list;d<h.length;d++){var g=h[d];if(g.element&&(g.element===a.target||de(g.element,a.target)))return void g.interactable.checkAndPreventDefault(a)}}})},listeners:["down","move","up","cancel"].reduce((function(r,i){return r["interactions:".concat(i)]=pr,r}),{})};function Ut(r,i){if(i.phaselessTypes[r])return!0;for(var a in i.map)if(r.indexOf(a)===0&&r.substr(a.length)in i.phases)return!0;return!1}function Vt(r){var i={};for(var a in r){var d=r[a];b.plainObject(d)?i[a]=Vt(d):b.array(d)?i[a]=ue(d):i[a]=d}return i}var xi=(function(){function r(i){n(this,r),this.states=[],this.startOffset={left:0,right:0,top:0,bottom:0},this.startDelta=void 0,this.result=void 0,this.endResult=void 0,this.startEdges=void 0,this.edges=void 0,this.interaction=void 0,this.interaction=i,this.result=ni(),this.edges={left:!1,right:!1,top:!1,bottom:!1}}return c(r,[{key:"start",value:function(i,a){var d,h,g=i.phase,x=this.interaction,k=(function(P){var A=P.interactable.options[P.prepared.name],D=A.modifiers;return D&&D.length?D:["snap","snapSize","snapEdges","restrict","restrictEdges","restrictSize"].map((function(q){var X=A[q];return X&&X.enabled&&{options:X,methods:X._methods}})).filter((function(q){return!!q}))})(x);this.prepareStates(k),this.startEdges=ae({},x.edges),this.edges=ae({},this.startEdges),this.startOffset=(d=x.rect,h=a,d?{left:h.x-d.left,top:h.y-d.top,right:d.right-h.x,bottom:d.bottom-h.y}:{left:0,top:0,right:0,bottom:0}),this.startDelta={x:0,y:0};var E=this.fillArg({phase:g,pageCoords:a,preEnd:!1});return this.result=ni(),this.startAll(E),this.result=this.setAll(E)}},{key:"fillArg",value:function(i){var a=this.interaction;return i.interaction=a,i.interactable=a.interactable,i.element=a.element,i.rect||(i.rect=a.rect),i.edges||(i.edges=this.startEdges),i.startOffset=this.startOffset,i}},{key:"startAll",value:function(i){for(var a=0,d=this.states;a<d.length;a++){var h=d[a];h.methods.start&&(i.state=h,h.methods.start(i))}}},{key:"setAll",value:function(i){var a=i.phase,d=i.preEnd,h=i.skipModifiers,g=i.rect,x=i.edges;i.coords=ae({},i.pageCoords),i.rect=ae({},g),i.edges=ae({},x);for(var k=h?this.states.slice(h):this.states,E=ni(i.coords,i.rect),P=0;P<k.length;P++){var A,D=k[P],q=D.options,X=ae({},i.coords),G=null;(A=D.methods)!=null&&A.set&&this.shouldDo(q,d,a)&&(i.state=D,G=D.methods.set(i),$e(i.edges,i.rect,{x:i.coords.x-X.x,y:i.coords.y-X.y})),E.eventProps.push(G)}ae(this.edges,i.edges),E.delta.x=i.coords.x-i.pageCoords.x,E.delta.y=i.coords.y-i.pageCoords.y,E.rectDelta.left=i.rect.left-g.left,E.rectDelta.right=i.rect.right-g.right,E.rectDelta.top=i.rect.top-g.top,E.rectDelta.bottom=i.rect.bottom-g.bottom;var ie=this.result.coords,fe=this.result.rect;if(ie&&fe){var le=E.rect.left!==fe.left||E.rect.right!==fe.right||E.rect.top!==fe.top||E.rect.bottom!==fe.bottom;E.changed=le||ie.x!==E.coords.x||ie.y!==E.coords.y}return E}},{key:"applyToInteraction",value:function(i){var a=this.interaction,d=i.phase,h=a.coords.cur,g=a.coords.start,x=this.result,k=this.startDelta,E=x.delta;d==="start"&&ae(this.startDelta,x.delta);for(var P=0,A=[[g,k],[h,E]];P<A.length;P++){var D=A[P],q=D[0],X=D[1];q.page.x+=X.x,q.page.y+=X.y,q.client.x+=X.x,q.client.y+=X.y}var G=this.result.rectDelta,ie=i.rect||a.rect;ie.left+=G.left,ie.right+=G.right,ie.top+=G.top,ie.bottom+=G.bottom,ie.width=ie.right-ie.left,ie.height=ie.bottom-ie.top}},{key:"setAndApply",value:function(i){var a=this.interaction,d=i.phase,h=i.preEnd,g=i.skipModifiers,x=this.setAll(this.fillArg({preEnd:h,phase:d,pageCoords:i.modifiedCoords||a.coords.cur.page}));if(this.result=x,!x.changed&&(!g||g<this.states.length)&&a.interacting())return!1;if(i.modifiedCoords){var k=a.coords.cur.page,E={x:i.modifiedCoords.x-k.x,y:i.modifiedCoords.y-k.y};x.coords.x+=E.x,x.coords.y+=E.y,x.delta.x+=E.x,x.delta.y+=E.y}this.applyToInteraction(i)}},{key:"beforeEnd",value:function(i){var a=i.interaction,d=i.event,h=this.states;if(h&&h.length){for(var g=!1,x=0;x<h.length;x++){var k=h[x];i.state=k;var E=k.options,P=k.methods,A=P.beforeEnd&&P.beforeEnd(i);if(A)return this.endResult=A,!1;g=g||!g&&this.shouldDo(E,!0,i.phase,!0)}g&&a.move({event:d,preEnd:!0})}}},{key:"stop",value:function(i){var a=i.interaction;if(this.states&&this.states.length){var d=ae({states:this.states,interactable:a.interactable,element:a.element,rect:null},i);this.fillArg(d);for(var h=0,g=this.states;h<g.length;h++){var x=g[h];d.state=x,x.methods.stop&&x.methods.stop(d)}this.states=null,this.endResult=null}}},{key:"prepareStates",value:function(i){this.states=[];for(var a=0;a<i.length;a++){var d=i[a],h=d.options,g=d.methods,x=d.name;this.states.push({options:h,methods:g,index:a,name:x})}return this.states}},{key:"restoreInteractionCoords",value:function(i){var a=i.interaction,d=a.coords,h=a.rect,g=a.modification;if(g.result){for(var x=g.startDelta,k=g.result,E=k.delta,P=k.rectDelta,A=0,D=[[d.start,x],[d.cur,E]];A<D.length;A++){var q=D[A],X=q[0],G=q[1];X.page.x-=G.x,X.page.y-=G.y,X.client.x-=G.x,X.client.y-=G.y}h.left-=P.left,h.right-=P.right,h.top-=P.top,h.bottom-=P.bottom}}},{key:"shouldDo",value:function(i,a,d,h){return!(!i||i.enabled===!1||h&&!i.endOnly||i.endOnly&&!a||d==="start"&&!i.setStart)}},{key:"copyFrom",value:function(i){this.startOffset=i.startOffset,this.startDelta=i.startDelta,this.startEdges=i.startEdges,this.edges=i.edges,this.states=i.states.map((function(a){return Vt(a)})),this.result=ni(ae({},i.result.coords),ae({},i.result.rect))}},{key:"destroy",value:function(){for(var i in this)this[i]=null}}]),r})();function ni(r,i){return{rect:i,coords:r,delta:{x:0,y:0},rectDelta:{left:0,right:0,top:0,bottom:0},eventProps:[],changed:!0}}function Ht(r,i){var a=r.defaults,d={start:r.start,set:r.set,beforeEnd:r.beforeEnd,stop:r.stop},h=function(g){var x=g||{};for(var k in x.enabled=x.enabled!==!1,a)k in x||(x[k]=a[k]);var E={options:x,methods:d,name:i,enable:function(){return x.enabled=!0,E},disable:function(){return x.enabled=!1,E}};return E};return i&&typeof i=="string"&&(h._defaults=a,h._methods=d),h}function Gt(r){var i=r.iEvent,a=r.interaction.modification.result;a&&(i.modifiers=a.eventProps)}var Yi={id:"modifiers/base",before:["actions"],install:function(r){r.defaults.perAction.modifiers=[]},listeners:{"interactions:new":function(r){var i=r.interaction;i.modification=new xi(i)},"interactions:before-action-start":function(r){var i=r.interaction,a=r.interaction.modification;a.start(r,i.coords.start.page),i.edges=a.edges,a.applyToInteraction(r)},"interactions:before-action-move":function(r){var i=r.interaction,a=i.modification,d=a.setAndApply(r);return i.edges=a.edges,d},"interactions:before-action-end":function(r){var i=r.interaction,a=i.modification,d=a.beforeEnd(r);return i.edges=a.startEdges,d},"interactions:action-start":Gt,"interactions:action-move":Gt,"interactions:action-end":Gt,"interactions:after-action-start":function(r){return r.interaction.modification.restoreInteractionCoords(r)},"interactions:after-action-move":function(r){return r.interaction.modification.restoreInteractionCoords(r)},"interactions:stop":function(r){return r.interaction.modification.stop(r)}}},wi=Yi,Si={base:{preventDefault:"auto",deltaSource:"page"},perAction:{enabled:!1,origin:{x:0,y:0}},actions:{}},hi=(function(r){l(a,r);var i=m(a);function a(d,h,g,x,k,E,P){var A;n(this,a),(A=i.call(this,d)).relatedTarget=null,A.screenX=void 0,A.screenY=void 0,A.button=void 0,A.buttons=void 0,A.ctrlKey=void 0,A.shiftKey=void 0,A.altKey=void 0,A.metaKey=void 0,A.page=void 0,A.client=void 0,A.delta=void 0,A.rect=void 0,A.x0=void 0,A.y0=void 0,A.t0=void 0,A.dt=void 0,A.duration=void 0,A.clientX0=void 0,A.clientY0=void 0,A.velocity=void 0,A.speed=void 0,A.swipe=void 0,A.axes=void 0,A.preEnd=void 0,k=k||d.element;var D=d.interactable,q=(D&&D.options||Si).deltaSource,X=ke(D,k,g),G=x==="start",ie=x==="end",fe=G?y(A):d.prevEvent,le=G?d.coords.start:ie?{page:fe.page,client:fe.client,timeStamp:d.coords.cur.timeStamp}:d.coords.cur;return A.page=ae({},le.page),A.client=ae({},le.client),A.rect=ae({},d.rect),A.timeStamp=le.timeStamp,ie||(A.page.x-=X.x,A.page.y-=X.y,A.client.x-=X.x,A.client.y-=X.y),A.ctrlKey=h.ctrlKey,A.altKey=h.altKey,A.shiftKey=h.shiftKey,A.metaKey=h.metaKey,A.button=h.button,A.buttons=h.buttons,A.target=k,A.currentTarget=k,A.preEnd=E,A.type=P||g+(x||""),A.interactable=D,A.t0=G?d.pointers[d.pointers.length-1].downTime:fe.t0,A.x0=d.coords.start.page.x-X.x,A.y0=d.coords.start.page.y-X.y,A.clientX0=d.coords.start.client.x-X.x,A.clientY0=d.coords.start.client.y-X.y,A.delta=G||ie?{x:0,y:0}:{x:A[q].x-fe[q].x,y:A[q].y-fe[q].y},A.dt=d.coords.delta.timeStamp,A.duration=A.timeStamp-A.t0,A.velocity=ae({},d.coords.velocity[q]),A.speed=gt(A.velocity.x,A.velocity.y),A.swipe=ie||x==="inertiastart"?A.getSwipe():null,A}return c(a,[{key:"getSwipe",value:function(){var d=this._interaction;if(d.prevEvent.speed<600||this.timeStamp-d.prevEvent.timeStamp>150)return null;var h=180*Math.atan2(d.prevEvent.velocityY,d.prevEvent.velocityX)/Math.PI;h<0&&(h+=360);var g=112.5<=h&&h<247.5,x=202.5<=h&&h<337.5;return{up:x,down:!x&&22.5<=h&&h<157.5,left:g,right:!g&&(292.5<=h||h<67.5),angle:h,speed:d.prevEvent.speed,velocity:{x:d.prevEvent.velocityX,y:d.prevEvent.velocityY}}}},{key:"preventDefault",value:function(){}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}}]),a})(me);Object.defineProperties(hi.prototype,{pageX:{get:function(){return this.page.x},set:function(r){this.page.x=r}},pageY:{get:function(){return this.page.y},set:function(r){this.page.y=r}},clientX:{get:function(){return this.client.x},set:function(r){this.client.x=r}},clientY:{get:function(){return this.client.y},set:function(r){this.client.y=r}},dx:{get:function(){return this.delta.x},set:function(r){this.delta.x=r}},dy:{get:function(){return this.delta.y},set:function(r){this.delta.y=r}},velocityX:{get:function(){return this.velocity.x},set:function(r){this.velocity.x=r}},velocityY:{get:function(){return this.velocity.y},set:function(r){this.velocity.y=r}}});var $i=c((function r(i,a,d,h,g){n(this,r),this.id=void 0,this.pointer=void 0,this.event=void 0,this.downTime=void 0,this.downTarget=void 0,this.id=i,this.pointer=a,this.event=d,this.downTime=h,this.downTarget=g})),Ki=(function(r){return r.interactable="",r.element="",r.prepared="",r.pointerIsDown="",r.pointerWasMoved="",r._proxy="",r})({}),ki=(function(r){return r.start="",r.move="",r.end="",r.stop="",r.interacting="",r})({}),Ui=0,Vi=(function(){function r(i){var a=this,d=i.pointerType,h=i.scopeFire;n(this,r),this.interactable=null,this.element=null,this.rect=null,this._rects=void 0,this.edges=null,this._scopeFire=void 0,this.prepared={name:null,axis:null,edges:null},this.pointerType=void 0,this.pointers=[],this.downEvent=null,this.downPointer={},this._latestPointer={pointer:null,event:null,eventTarget:null},this.prevEvent=null,this.pointerIsDown=!1,this.pointerWasMoved=!1,this._interacting=!1,this._ending=!1,this._stopped=!0,this._proxy=void 0,this.simulation=null,this.doMove=he((function(A){this.move(A)}),"The interaction.doMove() method has been renamed to interaction.move()"),this.coords={start:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},prev:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},cur:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},delta:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},velocity:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0}},this._id=Ui++,this._scopeFire=h,this.pointerType=d;var g=this;this._proxy={};var x=function(A){Object.defineProperty(a._proxy,A,{get:function(){return g[A]}})};for(var k in Ki)x(k);var E=function(A){Object.defineProperty(a._proxy,A,{value:function(){return g[A].apply(g,arguments)}})};for(var P in ki)E(P);this._scopeFire("interactions:new",{interaction:this})}return c(r,[{key:"pointerMoveTolerance",get:function(){return 1}},{key:"pointerDown",value:function(i,a,d){var h=this.updatePointer(i,a,d,!0),g=this.pointers[h];this._scopeFire("interactions:down",{pointer:i,event:a,eventTarget:d,pointerIndex:h,pointerInfo:g,type:"down",interaction:this})}},{key:"start",value:function(i,a,d){return!(this.interacting()||!this.pointerIsDown||this.pointers.length<(i.name==="gesture"?2:1)||!a.options[i.name].enabled)&&(ve(this.prepared,i),this.interactable=a,this.element=d,this.rect=a.getRect(d),this.edges=this.prepared.edges?ae({},this.prepared.edges):{left:!0,right:!0,top:!0,bottom:!0},this._stopped=!1,this._interacting=this._doPhase({interaction:this,event:this.downEvent,phase:"start"})&&!this._stopped,this._interacting)}},{key:"pointerMove",value:function(i,a,d){this.simulation||this.modification&&this.modification.endResult||this.updatePointer(i,a,d,!1);var h,g,x=this.coords.cur.page.x===this.coords.prev.page.x&&this.coords.cur.page.y===this.coords.prev.page.y&&this.coords.cur.client.x===this.coords.prev.client.x&&this.coords.cur.client.y===this.coords.prev.client.y;this.pointerIsDown&&!this.pointerWasMoved&&(h=this.coords.cur.client.x-this.coords.start.client.x,g=this.coords.cur.client.y-this.coords.start.client.y,this.pointerWasMoved=gt(h,g)>this.pointerMoveTolerance);var k,E,P,A=this.getPointerIndex(i),D={pointer:i,pointerIndex:A,pointerInfo:this.pointers[A],event:a,type:"move",eventTarget:d,dx:h,dy:g,duplicate:x,interaction:this};x||(k=this.coords.velocity,E=this.coords.delta,P=Math.max(E.timeStamp/1e3,.001),k.page.x=E.page.x/P,k.page.y=E.page.y/P,k.client.x=E.client.x/P,k.client.y=E.client.y/P,k.timeStamp=P),this._scopeFire("interactions:move",D),x||this.simulation||(this.interacting()&&(D.type=null,this.move(D)),this.pointerWasMoved&&At(this.coords.prev,this.coords.cur))}},{key:"move",value:function(i){i&&i.event||xt(this.coords.delta),(i=ae({pointer:this._latestPointer.pointer,event:this._latestPointer.event,eventTarget:this._latestPointer.eventTarget,interaction:this},i||{})).phase="move",this._doPhase(i)}},{key:"pointerUp",value:function(i,a,d,h){var g=this.getPointerIndex(i);g===-1&&(g=this.updatePointer(i,a,d,!1));var x=/cancel$/i.test(a.type)?"cancel":"up";this._scopeFire("interactions:".concat(x),{pointer:i,pointerIndex:g,pointerInfo:this.pointers[g],event:a,eventTarget:d,type:x,curEventTarget:h,interaction:this}),this.simulation||this.end(a),this.removePointer(i,a)}},{key:"documentBlur",value:function(i){this.end(i),this._scopeFire("interactions:blur",{event:i,type:"blur",interaction:this})}},{key:"end",value:function(i){var a;this._ending=!0,i=i||this._latestPointer.event,this.interacting()&&(a=this._doPhase({event:i,interaction:this,phase:"end"})),this._ending=!1,a===!0&&this.stop()}},{key:"currentAction",value:function(){return this._interacting?this.prepared.name:null}},{key:"interacting",value:function(){return this._interacting}},{key:"stop",value:function(){this._scopeFire("interactions:stop",{interaction:this}),this.interactable=this.element=null,this._interacting=!1,this._stopped=!0,this.prepared.name=this.prevEvent=null}},{key:"getPointerIndex",value:function(i){var a=Tt(i);return this.pointerType==="mouse"||this.pointerType==="pen"?this.pointers.length-1:Te(this.pointers,(function(d){return d.id===a}))}},{key:"getPointerInfo",value:function(i){return this.pointers[this.getPointerIndex(i)]}},{key:"updatePointer",value:function(i,a,d,h){var g,x,k,E=Tt(i),P=this.getPointerIndex(i),A=this.pointers[P];return h=h!==!1&&(h||/(down|start)$/i.test(a.type)),A?A.pointer=i:(A=new $i(E,i,a,null,null),P=this.pointers.length,this.pointers.push(A)),ii(this.coords.cur,this.pointers.map((function(D){return D.pointer})),this._now()),g=this.coords.delta,x=this.coords.prev,k=this.coords.cur,g.page.x=k.page.x-x.page.x,g.page.y=k.page.y-x.page.y,g.client.x=k.client.x-x.client.x,g.client.y=k.client.y-x.client.y,g.timeStamp=k.timeStamp-x.timeStamp,h&&(this.pointerIsDown=!0,A.downTime=this.coords.cur.timeStamp,A.downTarget=d,lt(this.downPointer,i),this.interacting()||(At(this.coords.start,this.coords.cur),At(this.coords.prev,this.coords.cur),this.downEvent=a,this.pointerWasMoved=!1)),this._updateLatestPointer(i,a,d),this._scopeFire("interactions:update-pointer",{pointer:i,event:a,eventTarget:d,down:h,pointerInfo:A,pointerIndex:P,interaction:this}),P}},{key:"removePointer",value:function(i,a){var d=this.getPointerIndex(i);if(d!==-1){var h=this.pointers[d];this._scopeFire("interactions:remove-pointer",{pointer:i,event:a,eventTarget:null,pointerIndex:d,pointerInfo:h,interaction:this}),this.pointers.splice(d,1),this.pointerIsDown=!1}}},{key:"_updateLatestPointer",value:function(i,a,d){this._latestPointer.pointer=i,this._latestPointer.event=a,this._latestPointer.eventTarget=d}},{key:"destroy",value:function(){this._latestPointer.pointer=null,this._latestPointer.event=null,this._latestPointer.eventTarget=null}},{key:"_createPreparedEvent",value:function(i,a,d,h){return new hi(this,i,this.prepared.name,a,this.element,d,h)}},{key:"_fireEvent",value:function(i){var a;(a=this.interactable)==null||a.fire(i),(!this.prevEvent||i.timeStamp>=this.prevEvent.timeStamp)&&(this.prevEvent=i)}},{key:"_doPhase",value:function(i){var a=i.event,d=i.phase,h=i.preEnd,g=i.type,x=this.rect;if(x&&d==="move"&&($e(this.edges,x,this.coords.delta[this.interactable.options.deltaSource]),x.width=x.right-x.left,x.height=x.bottom-x.top),this._scopeFire("interactions:before-action-".concat(d),i)===!1)return!1;var k=i.iEvent=this._createPreparedEvent(a,d,h,g);return this._scopeFire("interactions:action-".concat(d),i),d==="start"&&(this.prevEvent=k),this._fireEvent(k),this._scopeFire("interactions:after-action-".concat(d),i),!0}},{key:"_now",value:function(){return Date.now()}}]),r})();function Ci(r){Ei(r.interaction)}function Ei(r){if(!(function(a){return!(!a.offset.pending.x&&!a.offset.pending.y)})(r))return!1;var i=r.offset.pending;return fi(r.coords.cur,i),fi(r.coords.delta,i),$e(r.edges,r.rect,i),i.x=0,i.y=0,!0}function Gi(r){var i=r.x,a=r.y;this.offset.pending.x+=i,this.offset.pending.y+=a,this.offset.total.x+=i,this.offset.total.y+=a}function fi(r,i){var a=r.page,d=r.client,h=i.x,g=i.y;a.x+=h,a.y+=g,d.x+=h,d.y+=g}ki.offsetBy="";var Xi={id:"offset",before:["modifiers","pointer-events","actions","inertia"],install:function(r){r.Interaction.prototype.offsetBy=Gi},listeners:{"interactions:new":function(r){r.interaction.offset={total:{x:0,y:0},pending:{x:0,y:0}}},"interactions:update-pointer":function(r){return(function(i){i.pointerIsDown&&(fi(i.coords.cur,i.offset.total),i.offset.pending.x=0,i.offset.pending.y=0)})(r.interaction)},"interactions:before-action-start":Ci,"interactions:before-action-move":Ci,"interactions:before-action-end":function(r){var i=r.interaction;if(Ei(i))return i.move({offset:!0}),i.end(),!1},"interactions:stop":function(r){var i=r.interaction;i.offset.total.x=0,i.offset.total.y=0,i.offset.pending.x=0,i.offset.pending.y=0}}},Ai=Xi,Ji=(function(){function r(i){n(this,r),this.active=!1,this.isModified=!1,this.smoothEnd=!1,this.allowResume=!1,this.modification=void 0,this.modifierCount=0,this.modifierArg=void 0,this.startCoords=void 0,this.t0=0,this.v0=0,this.te=0,this.targetOffset=void 0,this.modifiedOffset=void 0,this.currentOffset=void 0,this.lambda_v0=0,this.one_ve_v0=0,this.timeout=void 0,this.interaction=void 0,this.interaction=i}return c(r,[{key:"start",value:function(i){var a=this.interaction,d=ai(a);if(!d||!d.enabled)return!1;var h=a.coords.velocity.client,g=gt(h.x,h.y),x=this.modification||(this.modification=new xi(a));if(x.copyFrom(a.modification),this.t0=a._now(),this.allowResume=d.allowResume,this.v0=g,this.currentOffset={x:0,y:0},this.startCoords=a.coords.cur.page,this.modifierArg=x.fillArg({pageCoords:this.startCoords,preEnd:!0,phase:"inertiastart"}),this.t0-a.coords.cur.timeStamp<50&&g>d.minSpeed&&g>d.endSpeed)this.startInertia();else{if(x.result=x.setAll(this.modifierArg),!x.result.changed)return!1;this.startSmoothEnd()}return a.modification.result.rect=null,a.offsetBy(this.targetOffset),a._doPhase({interaction:a,event:i,phase:"inertiastart"}),a.offsetBy({x:-this.targetOffset.x,y:-this.targetOffset.y}),a.modification.result.rect=null,this.active=!0,a.simulation=this,!0}},{key:"startInertia",value:function(){var i=this,a=this.interaction.coords.velocity.client,d=ai(this.interaction),h=d.resistance,g=-Math.log(d.endSpeed/this.v0)/h;this.targetOffset={x:(a.x-g)/h,y:(a.y-g)/h},this.te=g,this.lambda_v0=h/this.v0,this.one_ve_v0=1-d.endSpeed/this.v0;var x=this.modification,k=this.modifierArg;k.pageCoords={x:this.startCoords.x+this.targetOffset.x,y:this.startCoords.y+this.targetOffset.y},x.result=x.setAll(k),x.result.changed&&(this.isModified=!0,this.modifiedOffset={x:this.targetOffset.x+x.result.delta.x,y:this.targetOffset.y+x.result.delta.y}),this.onNextFrame((function(){return i.inertiaTick()}))}},{key:"startSmoothEnd",value:function(){var i=this;this.smoothEnd=!0,this.isModified=!0,this.targetOffset={x:this.modification.result.delta.x,y:this.modification.result.delta.y},this.onNextFrame((function(){return i.smoothEndTick()}))}},{key:"onNextFrame",value:function(i){var a=this;this.timeout=J.request((function(){a.active&&i()}))}},{key:"inertiaTick",value:function(){var i,a,d,h,g,x,k,E=this,P=this.interaction,A=ai(P).resistance,D=(P._now()-this.t0)/1e3;if(D<this.te){var q,X=1-(Math.exp(-A*D)-this.lambda_v0)/this.one_ve_v0;this.isModified?(i=0,a=0,d=this.targetOffset.x,h=this.targetOffset.y,g=this.modifiedOffset.x,x=this.modifiedOffset.y,q={x:Qi(k=X,i,d,g),y:Qi(k,a,h,x)}):q={x:this.targetOffset.x*X,y:this.targetOffset.y*X};var G={x:q.x-this.currentOffset.x,y:q.y-this.currentOffset.y};this.currentOffset.x+=G.x,this.currentOffset.y+=G.y,P.offsetBy(G),P.move(),this.onNextFrame((function(){return E.inertiaTick()}))}else P.offsetBy({x:this.modifiedOffset.x-this.currentOffset.x,y:this.modifiedOffset.y-this.currentOffset.y}),this.end()}},{key:"smoothEndTick",value:function(){var i=this,a=this.interaction,d=a._now()-this.t0,h=ai(a).smoothEndDuration;if(d<h){var g={x:Zi(d,0,this.targetOffset.x,h),y:Zi(d,0,this.targetOffset.y,h)},x={x:g.x-this.currentOffset.x,y:g.y-this.currentOffset.y};this.currentOffset.x+=x.x,this.currentOffset.y+=x.y,a.offsetBy(x),a.move({skipModifiers:this.modifierCount}),this.onNextFrame((function(){return i.smoothEndTick()}))}else a.offsetBy({x:this.targetOffset.x-this.currentOffset.x,y:this.targetOffset.y-this.currentOffset.y}),this.end()}},{key:"resume",value:function(i){var a=i.pointer,d=i.event,h=i.eventTarget,g=this.interaction;g.offsetBy({x:-this.currentOffset.x,y:-this.currentOffset.y}),g.updatePointer(a,d,h,!0),g._doPhase({interaction:g,event:d,phase:"resume"}),At(g.coords.prev,g.coords.cur),this.stop()}},{key:"end",value:function(){this.interaction.move(),this.interaction.end(),this.stop()}},{key:"stop",value:function(){this.active=this.smoothEnd=!1,this.interaction.simulation=null,J.cancel(this.timeout)}}]),r})();function ai(r){var i=r.interactable,a=r.prepared;return i&&i.options&&a.name&&i.options[a.name].inertia}var Ti={id:"inertia",before:["modifiers","actions"],install:function(r){var i=r.defaults;r.usePlugin(Ai),r.usePlugin(wi),r.actions.phases.inertiastart=!0,r.actions.phases.resume=!0,i.perAction.inertia={enabled:!1,resistance:10,minSpeed:100,endSpeed:10,allowResume:!0,smoothEndDuration:300}},listeners:{"interactions:new":function(r){var i=r.interaction;i.inertia=new Ji(i)},"interactions:before-action-end":function(r){var i=r.interaction,a=r.event;return(!i._interacting||i.simulation||!i.inertia.start(a))&&null},"interactions:down":function(r){var i=r.interaction,a=r.eventTarget,d=i.inertia;if(d.active)for(var h=a;b.element(h);){if(h===i.element){d.resume(r);break}h=Re(h)}},"interactions:stop":function(r){var i=r.interaction.inertia;i.active&&i.stop()},"interactions:before-action-resume":function(r){var i=r.interaction.modification;i.stop(r),i.start(r,r.interaction.coords.cur.page),i.applyToInteraction(r)},"interactions:before-action-inertiastart":function(r){return r.interaction.modification.setAndApply(r)},"interactions:action-resume":Gt,"interactions:action-inertiastart":Gt,"interactions:after-action-inertiastart":function(r){return r.interaction.modification.restoreInteractionCoords(r)},"interactions:after-action-resume":function(r){return r.interaction.modification.restoreInteractionCoords(r)}}};function Qi(r,i,a,d){var h=1-r;return h*h*i+2*h*r*a+r*r*d}function Zi(r,i,a,d){return-a*(r/=d)*(r-2)+i}var Oi=Ti;function zi(r,i){for(var a=0;a<i.length;a++){var d=i[a];if(r.immediatePropagationStopped)break;d(r)}}var Mi=(function(){function r(i){n(this,r),this.options=void 0,this.types={},this.propagationStopped=!1,this.immediatePropagationStopped=!1,this.global=void 0,this.options=ae({},i||{})}return c(r,[{key:"fire",value:function(i){var a,d=this.global;(a=this.types[i.type])&&zi(i,a),!i.propagationStopped&&d&&(a=d[i.type])&&zi(i,a)}},{key:"on",value:function(i,a){var d=Me(i,a);for(i in d)this.types[i]=we(this.types[i]||[],d[i])}},{key:"off",value:function(i,a){var d=Me(i,a);for(i in d){var h=this.types[i];if(h&&h.length)for(var g=0,x=d[i];g<x.length;g++){var k=x[g],E=h.indexOf(k);E!==-1&&h.splice(E,1)}}}},{key:"getRect",value:function(i){return null}}]),r})(),er=(function(){function r(i){n(this,r),this.currentTarget=void 0,this.originalEvent=void 0,this.type=void 0,this.originalEvent=i,lt(this,i)}return c(r,[{key:"preventOriginalDefault",value:function(){this.originalEvent.preventDefault()}},{key:"stopPropagation",value:function(){this.originalEvent.stopPropagation()}},{key:"stopImmediatePropagation",value:function(){this.originalEvent.stopImmediatePropagation()}}]),r})();function Xt(r){return b.object(r)?{capture:!!r.capture,passive:!!r.passive}:{capture:!!r,passive:!1}}function oi(r,i){return r===i||(typeof r=="boolean"?!!i.capture===r&&!i.passive:!!r.capture==!!i.capture&&!!r.passive==!!i.passive)}var it={id:"events",install:function(r){var i,a=[],d={},h=[],g={add:x,remove:k,addDelegate:function(A,D,q,X,G){var ie=Xt(G);if(!d[q]){d[q]=[];for(var fe=0;fe<h.length;fe++){var le=h[fe];x(le,q,E),x(le,q,P,!0)}}var be=d[q],Ie=Y(be,(function(Ke){return Ke.selector===A&&Ke.context===D}));Ie||(Ie={selector:A,context:D,listeners:[]},be.push(Ie)),Ie.listeners.push({func:X,options:ie})},removeDelegate:function(A,D,q,X,G){var ie,fe=Xt(G),le=d[q],be=!1;if(le)for(ie=le.length-1;ie>=0;ie--){var Ie=le[ie];if(Ie.selector===A&&Ie.context===D){for(var Ke=Ie.listeners,Ae=Ke.length-1;Ae>=0;Ae--){var Ne=Ke[Ae];if(Ne.func===X&&oi(Ne.options,fe)){Ke.splice(Ae,1),Ke.length||(le.splice(ie,1),k(D,q,E),k(D,q,P,!0)),be=!0;break}}if(be)break}}},delegateListener:E,delegateUseCapture:P,delegatedEvents:d,documents:h,targets:a,supportsOptions:!1,supportsPassive:!1};function x(A,D,q,X){if(A.addEventListener){var G=Xt(X),ie=Y(a,(function(fe){return fe.eventTarget===A}));ie||(ie={eventTarget:A,events:{}},a.push(ie)),ie.events[D]||(ie.events[D]=[]),Y(ie.events[D],(function(fe){return fe.func===q&&oi(fe.options,G)}))||(A.addEventListener(D,q,g.supportsOptions?G:G.capture),ie.events[D].push({func:q,options:G}))}}function k(A,D,q,X){if(A.addEventListener&&A.removeEventListener){var G=Te(a,(function(Ct){return Ct.eventTarget===A})),ie=a[G];if(ie&&ie.events)if(D!=="all"){var fe=!1,le=ie.events[D];if(le){if(q==="all"){for(var be=le.length-1;be>=0;be--){var Ie=le[be];k(A,D,Ie.func,Ie.options)}return}for(var Ke=Xt(X),Ae=0;Ae<le.length;Ae++){var Ne=le[Ae];if(Ne.func===q&&oi(Ne.options,Ke)){A.removeEventListener(D,q,g.supportsOptions?Ke:Ke.capture),le.splice(Ae,1),le.length===0&&(delete ie.events[D],fe=!0);break}}}fe&&!Object.keys(ie.events).length&&a.splice(G,1)}else for(D in ie.events)ie.events.hasOwnProperty(D)&&k(A,D,"all")}}function E(A,D){for(var q=Xt(D),X=new er(A),G=d[A.type],ie=$(A)[0],fe=ie;b.element(fe);){for(var le=0;le<G.length;le++){var be=G[le],Ie=be.selector,Ke=be.context;if(re(fe,Ie)&&de(Ke,ie)&&de(Ke,fe)){var Ae=be.listeners;X.currentTarget=fe;for(var Ne=0;Ne<Ae.length;Ne++){var Ct=Ae[Ne];oi(Ct.options,q)&&Ct.func(X)}}}fe=Re(fe)}}function P(A){return E(A,!0)}return(i=r.document)==null||i.createElement("div").addEventListener("test",null,{get capture(){return g.supportsOptions=!0},get passive(){return g.supportsPassive=!0}}),r.events=g,g}},dt={methodOrder:["simulationResume","mouseOrPen","hasPointer","idle"],search:function(r){for(var i=0,a=dt.methodOrder;i<a.length;i++){var d=a[i],h=dt[d](r);if(h)return h}return null},simulationResume:function(r){var i=r.pointerType,a=r.eventType,d=r.eventTarget,h=r.scope;if(!/down|start/i.test(a))return null;for(var g=0,x=h.interactions.list;g<x.length;g++){var k=x[g],E=d;if(k.simulation&&k.simulation.allowResume&&k.pointerType===i)for(;E;){if(E===k.element)return k;E=Re(E)}}return null},mouseOrPen:function(r){var i,a=r.pointerId,d=r.pointerType,h=r.eventType,g=r.scope;if(d!=="mouse"&&d!=="pen")return null;for(var x=0,k=g.interactions.list;x<k.length;x++){var E=k[x];if(E.pointerType===d){if(E.simulation&&!gi(E,a))continue;if(E.interacting())return E;i||(i=E)}}if(i)return i;for(var P=0,A=g.interactions.list;P<A.length;P++){var D=A[P];if(!(D.pointerType!==d||/down/i.test(h)&&D.simulation))return D}return null},hasPointer:function(r){for(var i=r.pointerId,a=0,d=r.scope.interactions.list;a<d.length;a++){var h=d[a];if(gi(h,i))return h}return null},idle:function(r){for(var i=r.pointerType,a=0,d=r.scope.interactions.list;a<d.length;a++){var h=d[a];if(h.pointers.length===1){var g=h.interactable;if(g&&(!g.options.gesture||!g.options.gesture.enabled))continue}else if(h.pointers.length>=2)continue;if(!h.interacting()&&i===h.pointerType)return h}return null}};function gi(r,i){return r.pointers.some((function(a){return a.id===i}))}var Li=dt,hr=["pointerDown","pointerMove","pointerUp","updatePointer","removePointer","windowBlur"];function Ir(r,i){return function(a){var d=i.interactions.list,h=j(a),g=$(a),x=g[0],k=g[1],E=[];if(/^touch/.test(a.type)){i.prevTouchTime=i.now();for(var P=0,A=a.changedTouches;P<A.length;P++){var D=A[P],q={pointer:D,pointerId:Tt(D),pointerType:h,eventType:a.type,eventTarget:x,curEventTarget:k,scope:i},X=Dr(q);E.push([q.pointer,q.eventTarget,q.curEventTarget,X])}}else{var G=!1;if(!U.supportsPointerEvent&&/mouse/.test(a.type)){for(var ie=0;ie<d.length&&!G;ie++)G=d[ie].pointerType!=="mouse"&&d[ie].pointerIsDown;G=G||i.now()-i.prevTouchTime<500||a.timeStamp===0}if(!G){var fe={pointer:a,pointerId:Tt(a),pointerType:h,eventType:a.type,curEventTarget:k,eventTarget:x,scope:i},le=Dr(fe);E.push([fe.pointer,fe.eventTarget,fe.curEventTarget,le])}}for(var be=0;be<E.length;be++){var Ie=E[be],Ke=Ie[0],Ae=Ie[1],Ne=Ie[2];Ie[3][r](Ke,a,Ae,Ne)}}}function Dr(r){var i=r.pointerType,a=r.scope,d={interaction:Li.search(r),searchDetails:r};return a.fire("interactions:find",d),d.interaction||a.interactions.new({pointerType:i})}function fr(r,i){var a=r.doc,d=r.scope,h=r.options,g=d.interactions.docEvents,x=d.events,k=x[i];for(var E in d.browser.isIOS&&!h.events&&(h.events={passive:!1}),x.delegatedEvents)k(a,E,x.delegateListener),k(a,E,x.delegateUseCapture,!0);for(var P=h&&h.events,A=0;A<g.length;A++){var D=g[A];k(a,D.type,D.listener,P)}}var Jn={id:"core/interactions",install:function(r){for(var i={},a=0;a<hr.length;a++){var d=hr[a];i[d]=Ir(d,r)}var h,g=U.pEventTypes;function x(){for(var k=0,E=r.interactions.list;k<E.length;k++){var P=E[k];if(P.pointerIsDown&&P.pointerType==="touch"&&!P._interacting)for(var A=function(){var X=q[D];r.documents.some((function(G){return de(G.doc,X.downTarget)}))||P.removePointer(X.pointer,X.event)},D=0,q=P.pointers;D<q.length;D++)A()}}(h=B.PointerEvent?[{type:g.down,listener:x},{type:g.down,listener:i.pointerDown},{type:g.move,listener:i.pointerMove},{type:g.up,listener:i.pointerUp},{type:g.cancel,listener:i.pointerUp}]:[{type:"mousedown",listener:i.pointerDown},{type:"mousemove",listener:i.pointerMove},{type:"mouseup",listener:i.pointerUp},{type:"touchstart",listener:x},{type:"touchstart",listener:i.pointerDown},{type:"touchmove",listener:i.pointerMove},{type:"touchend",listener:i.pointerUp},{type:"touchcancel",listener:i.pointerUp}]).push({type:"blur",listener:function(k){for(var E=0,P=r.interactions.list;E<P.length;E++)P[E].documentBlur(k)}}),r.prevTouchTime=0,r.Interaction=(function(k){l(P,k);var E=m(P);function P(){return n(this,P),E.apply(this,arguments)}return c(P,[{key:"pointerMoveTolerance",get:function(){return r.interactions.pointerMoveTolerance},set:function(A){r.interactions.pointerMoveTolerance=A}},{key:"_now",value:function(){return r.now()}}]),P})(Vi),r.interactions={list:[],new:function(k){k.scopeFire=function(P,A){return r.fire(P,A)};var E=new r.Interaction(k);return r.interactions.list.push(E),E},listeners:i,docEvents:h,pointerMoveTolerance:1},r.usePlugin(pi)},listeners:{"scope:add-document":function(r){return fr(r,"add")},"scope:remove-document":function(r){return fr(r,"remove")},"interactable:unset":function(r,i){for(var a=r.interactable,d=i.interactions.list.length-1;d>=0;d--){var h=i.interactions.list[d];h.interactable===a&&(h.stop(),i.fire("interactions:destroy",{interaction:h}),h.destroy(),i.interactions.list.length>2&&i.interactions.list.splice(d,1))}}},onDocSignal:fr,doOnInteractions:Ir,methodNames:hr},Qn=Jn,Jt=(function(r){return r[r.On=0]="On",r[r.Off=1]="Off",r})(Jt||{}),Zn=(function(){function r(i,a,d,h){n(this,r),this.target=void 0,this.options=void 0,this._actions=void 0,this.events=new Mi,this._context=void 0,this._win=void 0,this._doc=void 0,this._scopeEvents=void 0,this._actions=a.actions,this.target=i,this._context=a.context||d,this._win=C(st(i)?this._context:i),this._doc=this._win.document,this._scopeEvents=h,this.set(a)}return c(r,[{key:"_defaults",get:function(){return{base:{},perAction:{},actions:{}}}},{key:"setOnEvents",value:function(i,a){return b.func(a.onstart)&&this.on("".concat(i,"start"),a.onstart),b.func(a.onmove)&&this.on("".concat(i,"move"),a.onmove),b.func(a.onend)&&this.on("".concat(i,"end"),a.onend),b.func(a.oninertiastart)&&this.on("".concat(i,"inertiastart"),a.oninertiastart),this}},{key:"updatePerActionListeners",value:function(i,a,d){var h,g=this,x=(h=this._actions.map[i])==null?void 0:h.filterEventType,k=function(E){return(x==null||x(E))&&Ut(E,g._actions)};(b.array(a)||b.object(a))&&this._onOff(Jt.Off,i,a,void 0,k),(b.array(d)||b.object(d))&&this._onOff(Jt.On,i,d,void 0,k)}},{key:"setPerAction",value:function(i,a){var d=this._defaults;for(var h in a){var g=h,x=this.options[i],k=a[g];g==="listeners"&&this.updatePerActionListeners(i,x.listeners,k),b.array(k)?x[g]=ue(k):b.plainObject(k)?(x[g]=ae(x[g]||{},Vt(k)),b.object(d.perAction[g])&&"enabled"in d.perAction[g]&&(x[g].enabled=k.enabled!==!1)):b.bool(k)&&b.object(d.perAction[g])?x[g].enabled=k:x[g]=k}}},{key:"getRect",value:function(i){return i=i||(b.element(this.target)?this.target:null),b.string(this.target)&&(i=i||this._context.querySelector(this.target)),Ue(i)}},{key:"rectChecker",value:function(i){var a=this;return b.func(i)?(this.getRect=function(d){var h=ae({},i.apply(a,d));return"width"in h||(h.width=h.right-h.left,h.height=h.bottom-h.top),h},this):i===null?(delete this.getRect,this):this.getRect}},{key:"_backCompatOption",value:function(i,a){if(st(a)||b.object(a)){for(var d in this.options[i]=a,this._actions.map)this.options[d][i]=a;return this}return this.options[i]}},{key:"origin",value:function(i){return this._backCompatOption("origin",i)}},{key:"deltaSource",value:function(i){return i==="page"||i==="client"?(this.options.deltaSource=i,this):this.options.deltaSource}},{key:"getAllElements",value:function(){var i=this.target;return b.string(i)?Array.from(this._context.querySelectorAll(i)):b.func(i)&&i.getAllElements?i.getAllElements():b.element(i)?[i]:[]}},{key:"context",value:function(){return this._context}},{key:"inContext",value:function(i){return this._context===i.ownerDocument||de(this._context,i)}},{key:"testIgnoreAllow",value:function(i,a,d){return!this.testIgnore(i.ignoreFrom,a,d)&&this.testAllow(i.allowFrom,a,d)}},{key:"testAllow",value:function(i,a,d){return!i||!!b.element(d)&&(b.string(i)?He(d,i,a):!!b.element(i)&&de(i,d))}},{key:"testIgnore",value:function(i,a,d){return!(!i||!b.element(d))&&(b.string(i)?He(d,i,a):!!b.element(i)&&de(i,d))}},{key:"fire",value:function(i){return this.events.fire(i),this}},{key:"_onOff",value:function(i,a,d,h,g){b.object(a)&&!b.array(a)&&(h=d,d=null);var x=Me(a,d,g);for(var k in x){k==="wheel"&&(k=U.wheelEvent);for(var E=0,P=x[k];E<P.length;E++){var A=P[E];Ut(k,this._actions)?this.events[i===Jt.On?"on":"off"](k,A):b.string(this.target)?this._scopeEvents[i===Jt.On?"addDelegate":"removeDelegate"](this.target,this._context,k,A,h):this._scopeEvents[i===Jt.On?"add":"remove"](this.target,k,A,h)}}return this}},{key:"on",value:function(i,a,d){return this._onOff(Jt.On,i,a,d)}},{key:"off",value:function(i,a,d){return this._onOff(Jt.Off,i,a,d)}},{key:"set",value:function(i){var a=this._defaults;for(var d in b.object(i)||(i={}),this.options=Vt(a.base),this._actions.methodDict){var h=d,g=this._actions.methodDict[h];this.options[h]={},this.setPerAction(h,ae(ae({},a.perAction),a.actions[h])),this[g](i[h])}for(var x in i)x!=="getRect"?b.func(this[x])&&this[x](i[x]):this.rectChecker(i.getRect);return this}},{key:"unset",value:function(){if(b.string(this.target))for(var i in this._scopeEvents.delegatedEvents)for(var a=this._scopeEvents.delegatedEvents[i],d=a.length-1;d>=0;d--){var h=a[d],g=h.selector,x=h.context,k=h.listeners;g===this.target&&x===this._context&&a.splice(d,1);for(var E=k.length-1;E>=0;E--)this._scopeEvents.removeDelegate(this.target,this._context,i,k[E][0],k[E][1])}else this._scopeEvents.remove(this.target,"all")}}]),r})(),ea=(function(){function r(i){var a=this;n(this,r),this.list=[],this.selectorMap={},this.scope=void 0,this.scope=i,i.addListeners({"interactable:unset":function(d){var h=d.interactable,g=h.target,x=b.string(g)?a.selectorMap[g]:g[a.scope.id],k=Te(x,(function(E){return E===h}));x.splice(k,1)}})}return c(r,[{key:"new",value:function(i,a){a=ae(a||{},{actions:this.scope.actions});var d=new this.scope.Interactable(i,a,this.scope.document,this.scope.events);return this.scope.addDocument(d._doc),this.list.push(d),b.string(i)?(this.selectorMap[i]||(this.selectorMap[i]=[]),this.selectorMap[i].push(d)):(d.target[this.scope.id]||Object.defineProperty(i,this.scope.id,{value:[],configurable:!0}),i[this.scope.id].push(d)),this.scope.fire("interactable:new",{target:i,options:a,interactable:d,win:this.scope._win}),d}},{key:"getExisting",value:function(i,a){var d=a&&a.context||this.scope.document,h=b.string(i),g=h?this.selectorMap[i]:i[this.scope.id];if(g)return Y(g,(function(x){return x._context===d&&(h||x.inContext(i))}))}},{key:"forEachMatch",value:function(i,a){for(var d=0,h=this.list;d<h.length;d++){var g=h[d],x=void 0;if((b.string(g.target)?b.element(i)&&re(i,g.target):i===g.target)&&g.inContext(i)&&(x=a(g)),x!==void 0)return x}}}]),r})(),ta=(function(){function r(){var i=this;n(this,r),this.id="__interact_scope_".concat(Math.floor(100*Math.random())),this.isInitialized=!1,this.listenerMaps=[],this.browser=U,this.defaults=Vt(Si),this.Eventable=Mi,this.actions={map:{},phases:{start:!0,move:!0,end:!0},methodDict:{},phaselessTypes:{}},this.interactStatic=(function(d){var h=function g(x,k){var E=d.interactables.getExisting(x,k);return E||((E=d.interactables.new(x,k)).events.global=g.globalEvents),E};return h.getPointerAverage=yt,h.getTouchBBox=It,h.getTouchDistance=Mt,h.getTouchAngle=ge,h.getElementRect=Ue,h.getElementClientRect=De,h.matchesSelector=re,h.closest=_e,h.globalEvents={},h.version="1.10.27",h.scope=d,h.use=function(g,x){return this.scope.usePlugin(g,x),this},h.isSet=function(g,x){return!!this.scope.interactables.get(g,x&&x.context)},h.on=he((function(g,x,k){if(b.string(g)&&g.search(" ")!==-1&&(g=g.trim().split(/ +/)),b.array(g)){for(var E=0,P=g;E<P.length;E++){var A=P[E];this.on(A,x,k)}return this}if(b.object(g)){for(var D in g)this.on(D,g[D],x);return this}return Ut(g,this.scope.actions)?this.globalEvents[g]?this.globalEvents[g].push(x):this.globalEvents[g]=[x]:this.scope.events.add(this.scope.document,g,x,{options:k}),this}),"The interact.on() method is being deprecated"),h.off=he((function(g,x,k){if(b.string(g)&&g.search(" ")!==-1&&(g=g.trim().split(/ +/)),b.array(g)){for(var E=0,P=g;E<P.length;E++){var A=P[E];this.off(A,x,k)}return this}if(b.object(g)){for(var D in g)this.off(D,g[D],x);return this}var q;return Ut(g,this.scope.actions)?g in this.globalEvents&&(q=this.globalEvents[g].indexOf(x))!==-1&&this.globalEvents[g].splice(q,1):this.scope.events.remove(this.scope.document,g,x,k),this}),"The interact.off() method is being deprecated"),h.debug=function(){return this.scope},h.supportsTouch=function(){return U.supportsTouch},h.supportsPointerEvent=function(){return U.supportsPointerEvent},h.stop=function(){for(var g=0,x=this.scope.interactions.list;g<x.length;g++)x[g].stop();return this},h.pointerMoveTolerance=function(g){return b.number(g)?(this.scope.interactions.pointerMoveTolerance=g,this):this.scope.interactions.pointerMoveTolerance},h.addDocument=function(g,x){this.scope.addDocument(g,x)},h.removeDocument=function(g){this.scope.removeDocument(g)},h})(this),this.InteractEvent=hi,this.Interactable=void 0,this.interactables=new ea(this),this._win=void 0,this.document=void 0,this.window=void 0,this.documents=[],this._plugins={list:[],map:{}},this.onWindowUnload=function(d){return i.removeDocument(d.target)};var a=this;this.Interactable=(function(d){l(g,d);var h=m(g);function g(){return n(this,g),h.apply(this,arguments)}return c(g,[{key:"_defaults",get:function(){return a.defaults}},{key:"set",value:function(x){return v(u(g.prototype),"set",this).call(this,x),a.fire("interactable:set",{options:x,interactable:this}),this}},{key:"unset",value:function(){v(u(g.prototype),"unset",this).call(this);var x=a.interactables.list.indexOf(this);x<0||(a.interactables.list.splice(x,1),a.fire("interactable:unset",{interactable:this}))}}]),g})(Zn)}return c(r,[{key:"addListeners",value:function(i,a){this.listenerMaps.push({id:a,map:i})}},{key:"fire",value:function(i,a){for(var d=0,h=this.listenerMaps;d<h.length;d++){var g=h[d].map[i];if(g&&g(a,this,i)===!1)return!1}}},{key:"init",value:function(i){return this.isInitialized?this:(function(a,d){return a.isInitialized=!0,b.window(d)&&R(d),B.init(d),U.init(d),J.init(d),a.window=d,a.document=d.document,a.usePlugin(Qn),a.usePlugin(it),a})(this,i)}},{key:"pluginIsInstalled",value:function(i){var a=i.id;return a?!!this._plugins.map[a]:this._plugins.list.indexOf(i)!==-1}},{key:"usePlugin",value:function(i,a){if(!this.isInitialized)return this;if(this.pluginIsInstalled(i))return this;if(i.id&&(this._plugins.map[i.id]=i),this._plugins.list.push(i),i.install&&i.install(this,a),i.listeners&&i.before){for(var d=0,h=this.listenerMaps.length,g=i.before.reduce((function(k,E){return k[E]=!0,k[Fr(E)]=!0,k}),{});d<h;d++){var x=this.listenerMaps[d].id;if(x&&(g[x]||g[Fr(x)]))break}this.listenerMaps.splice(d,0,{id:i.id,map:i.listeners})}else i.listeners&&this.listenerMaps.push({id:i.id,map:i.listeners});return this}},{key:"addDocument",value:function(i,a){if(this.getDocIndex(i)!==-1)return!1;var d=C(i);a=a?ae({},a):{},this.documents.push({doc:i,options:a}),this.events.documents.push(i),i!==this.document&&this.events.add(d,"unload",this.onWindowUnload),this.fire("scope:add-document",{doc:i,window:d,scope:this,options:a})}},{key:"removeDocument",value:function(i){var a=this.getDocIndex(i),d=C(i),h=this.documents[a].options;this.events.remove(d,"unload",this.onWindowUnload),this.documents.splice(a,1),this.events.documents.splice(a,1),this.fire("scope:remove-document",{doc:i,window:d,scope:this,options:h})}},{key:"getDocIndex",value:function(i){for(var a=0;a<this.documents.length;a++)if(this.documents[a].doc===i)return a;return-1}},{key:"getDocOptions",value:function(i){var a=this.getDocIndex(i);return a===-1?null:this.documents[a].options}},{key:"now",value:function(){return(this.window.Date||Date).now()}}]),r})();function Fr(r){return r&&r.replace(/\/.*$/,"")}var Br=new ta,kt=Br.interactStatic,ia=typeof globalThis!="undefined"?globalThis:window;Br.init(ia);var ra=Object.freeze({__proto__:null,edgeTarget:function(){},elements:function(){},grid:function(r){var i=[["x","y"],["left","top"],["right","bottom"],["width","height"]].filter((function(d){var h=d[0],g=d[1];return h in r||g in r})),a=function(d,h){for(var g=r.range,x=r.limits,k=x===void 0?{left:-1/0,right:1/0,top:-1/0,bottom:1/0}:x,E=r.offset,P=E===void 0?{x:0,y:0}:E,A={range:g,grid:r,x:null,y:null},D=0;D<i.length;D++){var q=i[D],X=q[0],G=q[1],ie=Math.round((d-P.x)/r[X]),fe=Math.round((h-P.y)/r[G]);A[X]=Math.max(k.left,Math.min(k.right,ie*r[X]+P.x)),A[G]=Math.max(k.top,Math.min(k.bottom,fe*r[G]+P.y))}return A};return a.grid=r,a.coordFields=i,a}}),na={id:"snappers",install:function(r){var i=r.interactStatic;i.snappers=ae(i.snappers||{},ra),i.createSnapGrid=i.snappers.grid}},aa=na,oa={start:function(r){var i=r.state,a=r.rect,d=r.edges,h=r.pageCoords,g=i.options,x=g.ratio,k=g.enabled,E=i.options,P=E.equalDelta,A=E.modifiers;x==="preserve"&&(x=a.width/a.height),i.startCoords=ae({},h),i.startRect=ae({},a),i.ratio=x,i.equalDelta=P;var D=i.linkedEdges={top:d.top||d.left&&!d.bottom,left:d.left||d.top&&!d.right,bottom:d.bottom||d.right&&!d.top,right:d.right||d.bottom&&!d.left};if(i.xIsPrimaryAxis=!(!d.left&&!d.right),i.equalDelta){var q=(D.left?1:-1)*(D.top?1:-1);i.edgeSign={x:q,y:q}}else i.edgeSign={x:D.left?-1:1,y:D.top?-1:1};if(k!==!1&&ae(d,D),A!=null&&A.length){var X=new xi(r.interaction);X.copyFrom(r.interaction.modification),X.prepareStates(A),i.subModification=X,X.startAll(p({},r))}},set:function(r){var i=r.state,a=r.rect,d=r.coords,h=i.linkedEdges,g=ae({},d),x=i.equalDelta?sa:ca;if(ae(r.edges,h),x(i,i.xIsPrimaryAxis,d,a),!i.subModification)return null;var k=ae({},a);$e(h,k,{x:d.x-g.x,y:d.y-g.y});var E=i.subModification.setAll(p(p({},r),{},{rect:k,edges:h,pageCoords:d,prevCoords:d,prevRect:k})),P=E.delta;return E.changed&&(x(i,Math.abs(P.x)>Math.abs(P.y),E.coords,E.rect),ae(d,E.coords)),E.eventProps},defaults:{ratio:"preserve",equalDelta:!1,modifiers:[],enabled:!1}};function sa(r,i,a){var d=r.startCoords,h=r.edgeSign;i?a.y=d.y+(a.x-d.x)*h.y:a.x=d.x+(a.y-d.y)*h.x}function ca(r,i,a,d){var h=r.startRect,g=r.startCoords,x=r.ratio,k=r.edgeSign;if(i){var E=d.width/x;a.y=g.y+(E-h.height)*k.y}else{var P=d.height*x;a.x=g.x+(P-h.width)*k.x}}var la=Ht(oa,"aspectRatio"),Nr=function(){};Nr._defaults={};var tr=Nr;function si(r,i,a){return b.func(r)?ct(r,i.interactable,i.element,[a.x,a.y,i]):ct(r,i.interactable,i.element)}var ir={start:function(r){var i=r.rect,a=r.startOffset,d=r.state,h=r.interaction,g=r.pageCoords,x=d.options,k=x.elementRect,E=ae({left:0,top:0,right:0,bottom:0},x.offset||{});if(i&&k){var P=si(x.restriction,h,g);if(P){var A=P.right-P.left-i.width,D=P.bottom-P.top-i.height;A<0&&(E.left+=A,E.right+=A),D<0&&(E.top+=D,E.bottom+=D)}E.left+=a.left-i.width*k.left,E.top+=a.top-i.height*k.top,E.right+=a.right-i.width*(1-k.right),E.bottom+=a.bottom-i.height*(1-k.bottom)}d.offset=E},set:function(r){var i=r.coords,a=r.interaction,d=r.state,h=d.options,g=d.offset,x=si(h.restriction,a,i);if(x){var k=(function(E){return!E||"left"in E&&"top"in E||((E=ae({},E)).left=E.x||0,E.top=E.y||0,E.right=E.right||E.left+E.width,E.bottom=E.bottom||E.top+E.height),E})(x);i.x=Math.max(Math.min(k.right-g.right,i.x),k.left+g.left),i.y=Math.max(Math.min(k.bottom-g.bottom,i.y),k.top+g.top)}},defaults:{restriction:null,elementRect:null,offset:null,endOnly:!1,enabled:!1}},da=Ht(ir,"restrict"),qr={top:1/0,left:1/0,bottom:-1/0,right:-1/0},Hr={top:-1/0,left:-1/0,bottom:1/0,right:1/0};function jr(r,i){for(var a=0,d=["top","left","bottom","right"];a<d.length;a++){var h=d[a];h in r||(r[h]=i[h])}return r}var Pi={noInner:qr,noOuter:Hr,start:function(r){var i,a=r.interaction,d=r.startOffset,h=r.state,g=h.options;g&&(i=Pe(si(g.offset,a,a.coords.start.page))),i=i||{x:0,y:0},h.offset={top:i.y+d.top,left:i.x+d.left,bottom:i.y-d.bottom,right:i.x-d.right}},set:function(r){var i=r.coords,a=r.edges,d=r.interaction,h=r.state,g=h.offset,x=h.options;if(a){var k=ae({},i),E=si(x.inner,d,k)||{},P=si(x.outer,d,k)||{};jr(E,qr),jr(P,Hr),a.top?i.y=Math.min(Math.max(P.top+g.top,k.y),E.top+g.top):a.bottom&&(i.y=Math.max(Math.min(P.bottom+g.bottom,k.y),E.bottom+g.bottom)),a.left?i.x=Math.min(Math.max(P.left+g.left,k.x),E.left+g.left):a.right&&(i.x=Math.max(Math.min(P.right+g.right,k.x),E.right+g.right))}},defaults:{inner:null,outer:null,offset:null,endOnly:!1,enabled:!1}},ua=Ht(Pi,"restrictEdges"),pa=ae({get elementRect(){return{top:0,left:0,bottom:1,right:1}},set elementRect(r){}},ir.defaults),ha=Ht({start:ir.start,set:ir.set,defaults:pa},"restrictRect"),fa={width:-1/0,height:-1/0},ga={width:1/0,height:1/0},ma=Ht({start:function(r){return Pi.start(r)},set:function(r){var i=r.interaction,a=r.state,d=r.rect,h=r.edges,g=a.options;if(h){var x=oe(si(g.min,i,r.coords))||fa,k=oe(si(g.max,i,r.coords))||ga;a.options={endOnly:g.endOnly,inner:ae({},Pi.noInner),outer:ae({},Pi.noOuter)},h.top?(a.options.inner.top=d.bottom-x.height,a.options.outer.top=d.bottom-k.height):h.bottom&&(a.options.inner.bottom=d.top+x.height,a.options.outer.bottom=d.top+k.height),h.left?(a.options.inner.left=d.right-x.width,a.options.outer.left=d.right-k.width):h.right&&(a.options.inner.right=d.left+x.width,a.options.outer.right=d.left+k.width),Pi.set(r),a.options=g}},defaults:{min:null,max:null,endOnly:!1,enabled:!1}},"restrictSize"),gr={start:function(r){var i,a=r.interaction,d=r.interactable,h=r.element,g=r.rect,x=r.state,k=r.startOffset,E=x.options,P=E.offsetWithOrigin?(function(q){var X=q.interaction.element,G=Pe(ct(q.state.options.origin,null,null,[X])),ie=G||ke(q.interactable,X,q.interaction.prepared.name);return ie})(r):{x:0,y:0};if(E.offset==="startCoords")i={x:a.coords.start.page.x,y:a.coords.start.page.y};else{var A=ct(E.offset,d,h,[a]);(i=Pe(A)||{x:0,y:0}).x+=P.x,i.y+=P.y}var D=E.relativePoints;x.offsets=g&&D&&D.length?D.map((function(q,X){return{index:X,relativePoint:q,x:k.left-g.width*q.x+i.x,y:k.top-g.height*q.y+i.y}})):[{index:0,relativePoint:null,x:i.x,y:i.y}]},set:function(r){var i=r.interaction,a=r.coords,d=r.state,h=d.options,g=d.offsets,x=ke(i.interactable,i.element,i.prepared.name),k=ae({},a),E=[];h.offsetWithOrigin||(k.x-=x.x,k.y-=x.y);for(var P=0,A=g;P<A.length;P++)for(var D=A[P],q=k.x-D.x,X=k.y-D.y,G=0,ie=h.targets.length;G<ie;G++){var fe=h.targets[G],le=void 0;(le=b.func(fe)?fe(q,X,i._proxy,D,G):fe)&&E.push({x:(b.number(le.x)?le.x:q)+D.x,y:(b.number(le.y)?le.y:X)+D.y,range:b.number(le.range)?le.range:h.range,source:fe,index:G,offset:D})}for(var be={target:null,inRange:!1,distance:0,range:0,delta:{x:0,y:0}},Ie=0;Ie<E.length;Ie++){var Ke=E[Ie],Ae=Ke.range,Ne=Ke.x-k.x,Ct=Ke.y-k.y,at=gt(Ne,Ct),Rt=at<=Ae;Ae===1/0&&be.inRange&&be.range!==1/0&&(Rt=!1),be.target&&!(Rt?be.inRange&&Ae!==1/0?at/Ae<be.distance/be.range:Ae===1/0&&be.range!==1/0||at<be.distance:!be.inRange&&at<be.distance)||(be.target=Ke,be.distance=at,be.range=Ae,be.inRange=Rt,be.delta.x=Ne,be.delta.y=Ct)}return be.inRange&&(a.x=be.target.x,a.y=be.target.y),d.closest=be,be},defaults:{range:1/0,targets:null,offset:null,offsetWithOrigin:!0,origin:null,relativePoints:null,endOnly:!1,enabled:!1}},ya=Ht(gr,"snap"),rr={start:function(r){var i=r.state,a=r.edges,d=i.options;if(!a)return null;r.state={options:{targets:null,relativePoints:[{x:a.left?0:1,y:a.top?0:1}],offset:d.offset||"self",origin:{x:0,y:0},range:d.range}},i.targetFields=i.targetFields||[["width","height"],["x","y"]],gr.start(r),i.offsets=r.state.offsets,r.state=i},set:function(r){var i=r.interaction,a=r.state,d=r.coords,h=a.options,g=a.offsets,x={x:d.x-g[0].x,y:d.y-g[0].y};a.options=ae({},h),a.options.targets=[];for(var k=0,E=h.targets||[];k<E.length;k++){var P=E[k],A=void 0;if(A=b.func(P)?P(x.x,x.y,i):P){for(var D=0,q=a.targetFields;D<q.length;D++){var X=q[D],G=X[0],ie=X[1];if(G in A||ie in A){A.x=A[G],A.y=A[ie];break}}a.options.targets.push(A)}}var fe=gr.set(r);return a.options=h,fe},defaults:{range:1/0,targets:null,offset:null,endOnly:!1,enabled:!1}},va=Ht(rr,"snapSize"),mr={aspectRatio:la,restrictEdges:ua,restrict:da,restrictRect:ha,restrictSize:ma,snapEdges:Ht({start:function(r){var i=r.edges;return i?(r.state.targetFields=r.state.targetFields||[[i.left?"left":"right",i.top?"top":"bottom"]],rr.start(r)):null},set:rr.set,defaults:ae(Vt(rr.defaults),{targets:void 0,range:void 0,offset:{x:0,y:0}})},"snapEdges"),snap:ya,snapSize:va,spring:tr,avoid:tr,transform:tr,rubberband:tr},ba={id:"modifiers",install:function(r){var i=r.interactStatic;for(var a in r.usePlugin(wi),r.usePlugin(aa),i.modifiers=mr,mr){var d=mr[a],h=d._defaults,g=d._methods;h._methods=g,r.defaults.perAction[a]=h}}},_a=ba,Wr=(function(r){l(a,r);var i=m(a);function a(d,h,g,x,k,E){var P;if(n(this,a),lt(y(P=i.call(this,k)),g),g!==h&&lt(y(P),h),P.timeStamp=E,P.originalEvent=g,P.type=d,P.pointerId=Tt(h),P.pointerType=j(h),P.target=x,P.currentTarget=null,d==="tap"){var A=k.getPointerIndex(h);P.dt=P.timeStamp-k.pointers[A].downTime;var D=P.timeStamp-k.tapTime;P.double=!!k.prevTap&&k.prevTap.type!=="doubletap"&&k.prevTap.target===P.target&&D<500}else d==="doubletap"&&(P.dt=h.timeStamp-k.tapTime,P.double=!0);return P}return c(a,[{key:"_subtractOrigin",value:function(d){var h=d.x,g=d.y;return this.pageX-=h,this.pageY-=g,this.clientX-=h,this.clientY-=g,this}},{key:"_addOrigin",value:function(d){var h=d.x,g=d.y;return this.pageX+=h,this.pageY+=g,this.clientX+=h,this.clientY+=g,this}},{key:"preventDefault",value:function(){this.originalEvent.preventDefault()}}]),a})(me),Ri={id:"pointer-events/base",before:["inertia","modifiers","auto-start","actions"],install:function(r){r.pointerEvents=Ri,r.defaults.actions.pointerEvents=Ri.defaults,ae(r.actions.phaselessTypes,Ri.types)},listeners:{"interactions:new":function(r){var i=r.interaction;i.prevTap=null,i.tapTime=0},"interactions:update-pointer":function(r){var i=r.down,a=r.pointerInfo;!i&&a.hold||(a.hold={duration:1/0,timeout:null})},"interactions:move":function(r,i){var a=r.interaction,d=r.pointer,h=r.event,g=r.eventTarget;r.duplicate||a.pointerIsDown&&!a.pointerWasMoved||(a.pointerIsDown&&yr(r),Qt({interaction:a,pointer:d,event:h,eventTarget:g,type:"move"},i))},"interactions:down":function(r,i){(function(a,d){for(var h=a.interaction,g=a.pointer,x=a.event,k=a.eventTarget,E=a.pointerIndex,P=h.pointers[E].hold,A=ot(k),D={interaction:h,pointer:g,event:x,eventTarget:k,type:"hold",targets:[],path:A,node:null},q=0;q<A.length;q++){var X=A[q];D.node=X,d.fire("pointerEvents:collect-targets",D)}if(D.targets.length){for(var G=1/0,ie=0,fe=D.targets;ie<fe.length;ie++){var le=fe[ie].eventable.options.holdDuration;le<G&&(G=le)}P.duration=G,P.timeout=setTimeout((function(){Qt({interaction:h,eventTarget:k,pointer:g,event:x,type:"hold"},d)}),G)}})(r,i),Qt(r,i)},"interactions:up":function(r,i){yr(r),Qt(r,i),(function(a,d){var h=a.interaction,g=a.pointer,x=a.event,k=a.eventTarget;h.pointerWasMoved||Qt({interaction:h,eventTarget:k,pointer:g,event:x,type:"tap"},d)})(r,i)},"interactions:cancel":function(r,i){yr(r),Qt(r,i)}},PointerEvent:Wr,fire:Qt,collectEventTargets:Yr,defaults:{holdDuration:600,ignoreFrom:null,allowFrom:null,origin:{x:0,y:0}},types:{down:!0,move:!0,up:!0,cancel:!0,tap:!0,doubletap:!0,hold:!0}};function Qt(r,i){var a=r.interaction,d=r.pointer,h=r.event,g=r.eventTarget,x=r.type,k=r.targets,E=k===void 0?Yr(r,i):k,P=new Wr(x,d,h,g,a,i.now());i.fire("pointerEvents:new",{pointerEvent:P});for(var A={interaction:a,pointer:d,event:h,eventTarget:g,targets:E,type:x,pointerEvent:P},D=0;D<E.length;D++){var q=E[D];for(var X in q.props||{})P[X]=q.props[X];var G=ke(q.eventable,q.node);if(P._subtractOrigin(G),P.eventable=q.eventable,P.currentTarget=q.node,q.eventable.fire(P),P._addOrigin(G),P.immediatePropagationStopped||P.propagationStopped&&D+1<E.length&&E[D+1].node!==P.currentTarget)break}if(i.fire("pointerEvents:fired",A),x==="tap"){var ie=P.double?Qt({interaction:a,pointer:d,event:h,eventTarget:g,type:"doubletap"},i):P;a.prevTap=ie,a.tapTime=ie.timeStamp}return P}function Yr(r,i){var a=r.interaction,d=r.pointer,h=r.event,g=r.eventTarget,x=r.type,k=a.getPointerIndex(d),E=a.pointers[k];if(x==="tap"&&(a.pointerWasMoved||!E||E.downTarget!==g))return[];for(var P=ot(g),A={interaction:a,pointer:d,event:h,eventTarget:g,type:x,path:P,targets:[],node:null},D=0;D<P.length;D++){var q=P[D];A.node=q,i.fire("pointerEvents:collect-targets",A)}return x==="hold"&&(A.targets=A.targets.filter((function(X){var G,ie;return X.eventable.options.holdDuration===((G=a.pointers[k])==null||(ie=G.hold)==null?void 0:ie.duration)}))),A.targets}function yr(r){var i=r.interaction,a=r.pointerIndex,d=i.pointers[a].hold;d&&d.timeout&&(clearTimeout(d.timeout),d.timeout=null)}var xa=Object.freeze({__proto__:null,default:Ri});function wa(r){var i=r.interaction;i.holdIntervalHandle&&(clearInterval(i.holdIntervalHandle),i.holdIntervalHandle=null)}var Sa={id:"pointer-events/holdRepeat",install:function(r){r.usePlugin(Ri);var i=r.pointerEvents;i.defaults.holdRepeatInterval=0,i.types.holdrepeat=r.actions.phaselessTypes.holdrepeat=!0},listeners:["move","up","cancel","endall"].reduce((function(r,i){return r["pointerEvents:".concat(i)]=wa,r}),{"pointerEvents:new":function(r){var i=r.pointerEvent;i.type==="hold"&&(i.count=(i.count||0)+1)},"pointerEvents:fired":function(r,i){var a=r.interaction,d=r.pointerEvent,h=r.eventTarget,g=r.targets;if(d.type==="hold"&&g.length){var x=g[0].eventable.options.holdRepeatInterval;x<=0||(a.holdIntervalHandle=setTimeout((function(){i.pointerEvents.fire({interaction:a,eventTarget:h,type:"hold",pointer:d,event:d},i)}),x))}}})},ka=Sa,Ca={id:"pointer-events/interactableTargets",install:function(r){var i=r.Interactable;i.prototype.pointerEvents=function(d){return ae(this.events.options,d),this};var a=i.prototype._backCompatOption;i.prototype._backCompatOption=function(d,h){var g=a.call(this,d,h);return g===this&&(this.events.options[d]=h),g}},listeners:{"pointerEvents:collect-targets":function(r,i){var a=r.targets,d=r.node,h=r.type,g=r.eventTarget;i.interactables.forEachMatch(d,(function(x){var k=x.events,E=k.options;k.types[h]&&k.types[h].length&&x.testIgnoreAllow(E,d,g)&&a.push({node:d,eventable:k,props:{interactable:x}})}))},"interactable:new":function(r){var i=r.interactable;i.events.getRect=function(a){return i.getRect(a)}},"interactable:set":function(r,i){var a=r.interactable,d=r.options;ae(a.events.options,i.pointerEvents.defaults),ae(a.events.options,d.pointerEvents||{})}}},Ea=Ca,Aa={id:"pointer-events",install:function(r){r.usePlugin(xa),r.usePlugin(ka),r.usePlugin(Ea)}},Ta=Aa,Oa={id:"reflow",install:function(r){var i=r.Interactable;r.actions.phases.reflow=!0,i.prototype.reflow=function(a){return(function(d,h,g){for(var x=d.getAllElements(),k=g.window.Promise,E=k?[]:null,P=function(){var D=x[A],q=d.getRect(D);if(!q)return 1;var X,G=Y(g.interactions.list,(function(le){return le.interacting()&&le.interactable===d&&le.element===D&&le.prepared.name===h.name}));if(G)G.move(),E&&(X=G._reflowPromise||new k((function(le){G._reflowResolve=le})));else{var ie=oe(q),fe=(function(le){return{coords:le,get page(){return this.coords.page},get client(){return this.coords.client},get timeStamp(){return this.coords.timeStamp},get pageX(){return this.coords.page.x},get pageY(){return this.coords.page.y},get clientX(){return this.coords.client.x},get clientY(){return this.coords.client.y},get pointerId(){return this.coords.pointerId},get target(){return this.coords.target},get type(){return this.coords.type},get pointerType(){return this.coords.pointerType},get buttons(){return this.coords.buttons},preventDefault:function(){}}})({page:{x:ie.x,y:ie.y},client:{x:ie.x,y:ie.y},timeStamp:g.now()});X=(function(le,be,Ie,Ke,Ae){var Ne=le.interactions.new({pointerType:"reflow"}),Ct={interaction:Ne,event:Ae,pointer:Ae,eventTarget:Ie,phase:"reflow"};Ne.interactable=be,Ne.element=Ie,Ne.prevEvent=Ae,Ne.updatePointer(Ae,Ae,Ie,!0),xt(Ne.coords.delta),ve(Ne.prepared,Ke),Ne._doPhase(Ct);var at=le.window,Rt=at.Promise,Nt=Rt?new Rt((function(Yt){Ne._reflowResolve=Yt})):void 0;return Ne._reflowPromise=Nt,Ne.start(Ke,be,Ie),Ne._interacting?(Ne.move(Ct),Ne.end(Ae)):(Ne.stop(),Ne._reflowResolve()),Ne.removePointer(Ae,Ae),Nt})(g,d,D,h,fe)}E&&E.push(X)},A=0;A<x.length&&!P();A++);return E&&k.all(E).then((function(){return d}))})(this,a,r)}},listeners:{"interactions:stop":function(r,i){var a=r.interaction;a.pointerType==="reflow"&&(a._reflowResolve&&a._reflowResolve(),(function(d,h){d.splice(d.indexOf(h),1)})(i.interactions.list,a))}}},za=Oa;if(kt.use(pi),kt.use(Ai),kt.use(Ta),kt.use(Oi),kt.use(_a),kt.use(Wi),kt.use(ne),kt.use(Se),kt.use(za),kt.default=kt,(typeof ci=="undefined"?"undefined":t(ci))==="object"&&ci)try{ci.exports=kt}catch{}return kt.default=kt,kt}))});var Xn=Na($r(),1);function cn(e){return typeof e=="undefined"||e===null}function qa(e){return typeof e=="object"&&e!==null}function Ha(e){return Array.isArray(e)?e:cn(e)?[]:[e]}function ja(e,p){var t,n,o,c;if(p)for(c=Object.keys(p),t=0,n=c.length;t<n;t+=1)o=c[t],e[o]=p[o];return e}function Wa(e,p){var t="",n;for(n=0;n<p;n+=1)t+=e;return t}function Ya(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var $a=cn,Ka=qa,Ua=Ha,Va=Wa,Ga=Ya,Xa=ja,vt={isNothing:$a,isObject:Ka,toArray:Ua,repeat:Va,isNegativeZero:Ga,extend:Xa};function ln(e,p){var t="",n=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(t+='in "'+e.mark.name+'" '),t+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!p&&e.mark.snippet&&(t+=`

`+e.mark.snippet),n+" "+t):n}function Fi(e,p){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=p,this.message=ln(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Fi.prototype=Object.create(Error.prototype);Fi.prototype.constructor=Fi;Fi.prototype.toString=function(p){return this.name+": "+ln(this,p)};var Et=Fi;function _r(e,p,t,n,o){var c="",s="",l=Math.floor(o/2)-1;return n-p>l&&(c=" ... ",p=n-l+c.length),t-n>l&&(s=" ...",t=n+l-s.length),{str:c+e.slice(p,t).replace(/\t/g,"\u2192")+s,pos:n-p+c.length}}function xr(e,p){return vt.repeat(" ",p-e.length)+e}function Ja(e,p){if(p=Object.create(p||null),!e.buffer)return null;p.maxLength||(p.maxLength=79),typeof p.indent!="number"&&(p.indent=1),typeof p.linesBefore!="number"&&(p.linesBefore=3),typeof p.linesAfter!="number"&&(p.linesAfter=2);for(var t=/\r?\n|\r|\0/g,n=[0],o=[],c,s=-1;c=t.exec(e.buffer);)o.push(c.index),n.push(c.index+c[0].length),e.position<=c.index&&s<0&&(s=n.length-2);s<0&&(s=n.length-1);var l="",u,f,y=Math.min(e.line+p.linesAfter,o.length).toString().length,m=p.maxLength-(p.indent+y+3);for(u=1;u<=p.linesBefore&&!(s-u<0);u++)f=_r(e.buffer,n[s-u],o[s-u],e.position-(n[s]-n[s-u]),m),l=vt.repeat(" ",p.indent)+xr((e.line-u+1).toString(),y)+" | "+f.str+`
`+l;for(f=_r(e.buffer,n[s],o[s],e.position,m),l+=vt.repeat(" ",p.indent)+xr((e.line+1).toString(),y)+" | "+f.str+`
`,l+=vt.repeat("-",p.indent+y+3+f.pos)+`^
`,u=1;u<=p.linesAfter&&!(s+u>=o.length);u++)f=_r(e.buffer,n[s+u],o[s+u],e.position-(n[s]-n[s+u]),m),l+=vt.repeat(" ",p.indent)+xr((e.line+u+1).toString(),y)+" | "+f.str+`
`;return l.replace(/\n$/,"")}var Qa=Ja,Za=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],eo=["scalar","sequence","mapping"];function to(e){var p={};return e!==null&&Object.keys(e).forEach(function(t){e[t].forEach(function(n){p[String(n)]=t})}),p}function io(e,p){if(p=p||{},Object.keys(p).forEach(function(t){if(Za.indexOf(t)===-1)throw new Et('Unknown option "'+t+'" is met in definition of "'+e+'" YAML type.')}),this.options=p,this.tag=e,this.kind=p.kind||null,this.resolve=p.resolve||function(){return!0},this.construct=p.construct||function(t){return t},this.instanceOf=p.instanceOf||null,this.predicate=p.predicate||null,this.represent=p.represent||null,this.representName=p.representName||null,this.defaultStyle=p.defaultStyle||null,this.multi=p.multi||!1,this.styleAliases=to(p.styleAliases||null),eo.indexOf(this.kind)===-1)throw new Et('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var _t=io;function Kr(e,p){var t=[];return e[p].forEach(function(n){var o=t.length;t.forEach(function(c,s){c.tag===n.tag&&c.kind===n.kind&&c.multi===n.multi&&(o=s)}),t[o]=n}),t}function ro(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},p,t;function n(o){o.multi?(e.multi[o.kind].push(o),e.multi.fallback.push(o)):e[o.kind][o.tag]=e.fallback[o.tag]=o}for(p=0,t=arguments.length;p<t;p+=1)arguments[p].forEach(n);return e}function Sr(e){return this.extend(e)}Sr.prototype.extend=function(p){var t=[],n=[];if(p instanceof _t)n.push(p);else if(Array.isArray(p))n=n.concat(p);else if(p&&(Array.isArray(p.implicit)||Array.isArray(p.explicit)))p.implicit&&(t=t.concat(p.implicit)),p.explicit&&(n=n.concat(p.explicit));else throw new Et("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");t.forEach(function(c){if(!(c instanceof _t))throw new Et("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(c.loadKind&&c.loadKind!=="scalar")throw new Et("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(c.multi)throw new Et("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),n.forEach(function(c){if(!(c instanceof _t))throw new Et("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var o=Object.create(Sr.prototype);return o.implicit=(this.implicit||[]).concat(t),o.explicit=(this.explicit||[]).concat(n),o.compiledImplicit=Kr(o,"implicit"),o.compiledExplicit=Kr(o,"explicit"),o.compiledTypeMap=ro(o.compiledImplicit,o.compiledExplicit),o};var dn=Sr,un=new _t("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),pn=new _t("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),hn=new _t("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),fn=new dn({explicit:[un,pn,hn]});function no(e){if(e===null)return!0;var p=e.length;return p===1&&e==="~"||p===4&&(e==="null"||e==="Null"||e==="NULL")}function ao(){return null}function oo(e){return e===null}var gn=new _t("tag:yaml.org,2002:null",{kind:"scalar",resolve:no,construct:ao,predicate:oo,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function so(e){if(e===null)return!1;var p=e.length;return p===4&&(e==="true"||e==="True"||e==="TRUE")||p===5&&(e==="false"||e==="False"||e==="FALSE")}function co(e){return e==="true"||e==="True"||e==="TRUE"}function lo(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var mn=new _t("tag:yaml.org,2002:bool",{kind:"scalar",resolve:so,construct:co,predicate:lo,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function uo(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function po(e){return 48<=e&&e<=55}function ho(e){return 48<=e&&e<=57}function fo(e){if(e===null)return!1;var p=e.length,t=0,n=!1,o;if(!p)return!1;if(o=e[t],(o==="-"||o==="+")&&(o=e[++t]),o==="0"){if(t+1===p)return!0;if(o=e[++t],o==="b"){for(t++;t<p;t++)if(o=e[t],o!=="_"){if(o!=="0"&&o!=="1")return!1;n=!0}return n&&o!=="_"}if(o==="x"){for(t++;t<p;t++)if(o=e[t],o!=="_"){if(!uo(e.charCodeAt(t)))return!1;n=!0}return n&&o!=="_"}if(o==="o"){for(t++;t<p;t++)if(o=e[t],o!=="_"){if(!po(e.charCodeAt(t)))return!1;n=!0}return n&&o!=="_"}}if(o==="_")return!1;for(;t<p;t++)if(o=e[t],o!=="_"){if(!ho(e.charCodeAt(t)))return!1;n=!0}return!(!n||o==="_")}function go(e){var p=e,t=1,n;if(p.indexOf("_")!==-1&&(p=p.replace(/_/g,"")),n=p[0],(n==="-"||n==="+")&&(n==="-"&&(t=-1),p=p.slice(1),n=p[0]),p==="0")return 0;if(n==="0"){if(p[1]==="b")return t*parseInt(p.slice(2),2);if(p[1]==="x")return t*parseInt(p.slice(2),16);if(p[1]==="o")return t*parseInt(p.slice(2),8)}return t*parseInt(p,10)}function mo(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!vt.isNegativeZero(e)}var yn=new _t("tag:yaml.org,2002:int",{kind:"scalar",resolve:fo,construct:go,predicate:mo,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),yo=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function vo(e){return!(e===null||!yo.test(e)||e[e.length-1]==="_")}function bo(e){var p,t;return p=e.replace(/_/g,"").toLowerCase(),t=p[0]==="-"?-1:1,"+-".indexOf(p[0])>=0&&(p=p.slice(1)),p===".inf"?t===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:p===".nan"?NaN:t*parseFloat(p,10)}var _o=/^[-+]?[0-9]+e/;function xo(e,p){var t;if(isNaN(e))switch(p){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(p){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(p){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(vt.isNegativeZero(e))return"-0.0";return t=e.toString(10),_o.test(t)?t.replace("e",".e"):t}function wo(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||vt.isNegativeZero(e))}var vn=new _t("tag:yaml.org,2002:float",{kind:"scalar",resolve:vo,construct:bo,predicate:wo,represent:xo,defaultStyle:"lowercase"}),bn=fn.extend({implicit:[gn,mn,yn,vn]}),_n=bn,xn=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),wn=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function So(e){return e===null?!1:xn.exec(e)!==null||wn.exec(e)!==null}function ko(e){var p,t,n,o,c,s,l,u=0,f=null,y,m,v;if(p=xn.exec(e),p===null&&(p=wn.exec(e)),p===null)throw new Error("Date resolve error");if(t=+p[1],n=+p[2]-1,o=+p[3],!p[4])return new Date(Date.UTC(t,n,o));if(c=+p[4],s=+p[5],l=+p[6],p[7]){for(u=p[7].slice(0,3);u.length<3;)u+="0";u=+u}return p[9]&&(y=+p[10],m=+(p[11]||0),f=(y*60+m)*6e4,p[9]==="-"&&(f=-f)),v=new Date(Date.UTC(t,n,o,c,s,l,u)),f&&v.setTime(v.getTime()-f),v}function Co(e){return e.toISOString()}var Sn=new _t("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:So,construct:ko,instanceOf:Date,represent:Co});function Eo(e){return e==="<<"||e===null}var kn=new _t("tag:yaml.org,2002:merge",{kind:"scalar",resolve:Eo}),Tr=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function Ao(e){if(e===null)return!1;var p,t,n=0,o=e.length,c=Tr;for(t=0;t<o;t++)if(p=c.indexOf(e.charAt(t)),!(p>64)){if(p<0)return!1;n+=6}return n%8===0}function To(e){var p,t,n=e.replace(/[\r\n=]/g,""),o=n.length,c=Tr,s=0,l=[];for(p=0;p<o;p++)p%4===0&&p&&(l.push(s>>16&255),l.push(s>>8&255),l.push(s&255)),s=s<<6|c.indexOf(n.charAt(p));return t=o%4*6,t===0?(l.push(s>>16&255),l.push(s>>8&255),l.push(s&255)):t===18?(l.push(s>>10&255),l.push(s>>2&255)):t===12&&l.push(s>>4&255),new Uint8Array(l)}function Oo(e){var p="",t=0,n,o,c=e.length,s=Tr;for(n=0;n<c;n++)n%3===0&&n&&(p+=s[t>>18&63],p+=s[t>>12&63],p+=s[t>>6&63],p+=s[t&63]),t=(t<<8)+e[n];return o=c%3,o===0?(p+=s[t>>18&63],p+=s[t>>12&63],p+=s[t>>6&63],p+=s[t&63]):o===2?(p+=s[t>>10&63],p+=s[t>>4&63],p+=s[t<<2&63],p+=s[64]):o===1&&(p+=s[t>>2&63],p+=s[t<<4&63],p+=s[64],p+=s[64]),p}function zo(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var Cn=new _t("tag:yaml.org,2002:binary",{kind:"scalar",resolve:Ao,construct:To,predicate:zo,represent:Oo}),Mo=Object.prototype.hasOwnProperty,Lo=Object.prototype.toString;function Po(e){if(e===null)return!0;var p=[],t,n,o,c,s,l=e;for(t=0,n=l.length;t<n;t+=1){if(o=l[t],s=!1,Lo.call(o)!=="[object Object]")return!1;for(c in o)if(Mo.call(o,c))if(!s)s=!0;else return!1;if(!s)return!1;if(p.indexOf(c)===-1)p.push(c);else return!1}return!0}function Ro(e){return e!==null?e:[]}var En=new _t("tag:yaml.org,2002:omap",{kind:"sequence",resolve:Po,construct:Ro}),Io=Object.prototype.toString;function Do(e){if(e===null)return!0;var p,t,n,o,c,s=e;for(c=new Array(s.length),p=0,t=s.length;p<t;p+=1){if(n=s[p],Io.call(n)!=="[object Object]"||(o=Object.keys(n),o.length!==1))return!1;c[p]=[o[0],n[o[0]]]}return!0}function Fo(e){if(e===null)return[];var p,t,n,o,c,s=e;for(c=new Array(s.length),p=0,t=s.length;p<t;p+=1)n=s[p],o=Object.keys(n),c[p]=[o[0],n[o[0]]];return c}var An=new _t("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:Do,construct:Fo}),Bo=Object.prototype.hasOwnProperty;function No(e){if(e===null)return!0;var p,t=e;for(p in t)if(Bo.call(t,p)&&t[p]!==null)return!1;return!0}function qo(e){return e!==null?e:{}}var Tn=new _t("tag:yaml.org,2002:set",{kind:"mapping",resolve:No,construct:qo}),Or=_n.extend({implicit:[Sn,kn],explicit:[Cn,En,An,Tn]}),ei=Object.prototype.hasOwnProperty,ar=1,On=2,zn=3,or=4,wr=1,Ho=2,Ur=3,jo=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,Wo=/[\x85\u2028\u2029]/,Yo=/[,\[\]\{\}]/,Mn=/^(?:!|!!|![a-z\-]+!)$/i,Ln=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function Vr(e){return Object.prototype.toString.call(e)}function jt(e){return e===10||e===13}function di(e){return e===9||e===32}function zt(e){return e===9||e===32||e===10||e===13}function yi(e){return e===44||e===91||e===93||e===123||e===125}function $o(e){var p;return 48<=e&&e<=57?e-48:(p=e|32,97<=p&&p<=102?p-97+10:-1)}function Ko(e){return e===120?2:e===117?4:e===85?8:0}function Uo(e){return 48<=e&&e<=57?e-48:-1}function Gr(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"\x85":e===95?"\xA0":e===76?"\u2028":e===80?"\u2029":""}function Vo(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}var Pn=new Array(256),Rn=new Array(256);for(li=0;li<256;li++)Pn[li]=Gr(li)?1:0,Rn[li]=Gr(li);var li;function Go(e,p){this.input=e,this.filename=p.filename||null,this.schema=p.schema||Or,this.onWarning=p.onWarning||null,this.legacy=p.legacy||!1,this.json=p.json||!1,this.listener=p.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function In(e,p){var t={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return t.snippet=Qa(t),new Et(p,t)}function xe(e,p){throw In(e,p)}function sr(e,p){e.onWarning&&e.onWarning.call(null,In(e,p))}var Xr={YAML:function(p,t,n){var o,c,s;p.version!==null&&xe(p,"duplication of %YAML directive"),n.length!==1&&xe(p,"YAML directive accepts exactly one argument"),o=/^([0-9]+)\.([0-9]+)$/.exec(n[0]),o===null&&xe(p,"ill-formed argument of the YAML directive"),c=parseInt(o[1],10),s=parseInt(o[2],10),c!==1&&xe(p,"unacceptable YAML version of the document"),p.version=n[0],p.checkLineBreaks=s<2,s!==1&&s!==2&&sr(p,"unsupported YAML version of the document")},TAG:function(p,t,n){var o,c;n.length!==2&&xe(p,"TAG directive accepts exactly two arguments"),o=n[0],c=n[1],Mn.test(o)||xe(p,"ill-formed tag handle (first argument) of the TAG directive"),ei.call(p.tagMap,o)&&xe(p,'there is a previously declared suffix for "'+o+'" tag handle'),Ln.test(c)||xe(p,"ill-formed tag prefix (second argument) of the TAG directive");try{c=decodeURIComponent(c)}catch{xe(p,"tag prefix is malformed: "+c)}p.tagMap[o]=c}};function Zt(e,p,t,n){var o,c,s,l;if(p<t){if(l=e.input.slice(p,t),n)for(o=0,c=l.length;o<c;o+=1)s=l.charCodeAt(o),s===9||32<=s&&s<=1114111||xe(e,"expected valid JSON character");else jo.test(l)&&xe(e,"the stream contains non-printable characters");e.result+=l}}function Jr(e,p,t,n){var o,c,s,l;for(vt.isObject(t)||xe(e,"cannot merge mappings; the provided source object is unacceptable"),o=Object.keys(t),s=0,l=o.length;s<l;s+=1)c=o[s],ei.call(p,c)||(p[c]=t[c],n[c]=!0)}function vi(e,p,t,n,o,c,s,l,u){var f,y;if(Array.isArray(o))for(o=Array.prototype.slice.call(o),f=0,y=o.length;f<y;f+=1)Array.isArray(o[f])&&xe(e,"nested arrays are not supported inside keys"),typeof o=="object"&&Vr(o[f])==="[object Object]"&&(o[f]="[object Object]");if(typeof o=="object"&&Vr(o)==="[object Object]"&&(o="[object Object]"),o=String(o),p===null&&(p={}),n==="tag:yaml.org,2002:merge")if(Array.isArray(c))for(f=0,y=c.length;f<y;f+=1)Jr(e,p,c[f],t);else Jr(e,p,c,t);else!e.json&&!ei.call(t,o)&&ei.call(p,o)&&(e.line=s||e.line,e.lineStart=l||e.lineStart,e.position=u||e.position,xe(e,"duplicated mapping key")),o==="__proto__"?Object.defineProperty(p,o,{configurable:!0,enumerable:!0,writable:!0,value:c}):p[o]=c,delete t[o];return p}function zr(e){var p;p=e.input.charCodeAt(e.position),p===10?e.position++:p===13?(e.position++,e.input.charCodeAt(e.position)===10&&e.position++):xe(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}function ht(e,p,t){for(var n=0,o=e.input.charCodeAt(e.position);o!==0;){for(;di(o);)o===9&&e.firstTabInLine===-1&&(e.firstTabInLine=e.position),o=e.input.charCodeAt(++e.position);if(p&&o===35)do o=e.input.charCodeAt(++e.position);while(o!==10&&o!==13&&o!==0);if(jt(o))for(zr(e),o=e.input.charCodeAt(e.position),n++,e.lineIndent=0;o===32;)e.lineIndent++,o=e.input.charCodeAt(++e.position);else break}return t!==-1&&n!==0&&e.lineIndent<t&&sr(e,"deficient indentation"),n}function dr(e){var p=e.position,t;return t=e.input.charCodeAt(p),!!((t===45||t===46)&&t===e.input.charCodeAt(p+1)&&t===e.input.charCodeAt(p+2)&&(p+=3,t=e.input.charCodeAt(p),t===0||zt(t)))}function Mr(e,p){p===1?e.result+=" ":p>1&&(e.result+=vt.repeat(`
`,p-1))}function Xo(e,p,t){var n,o,c,s,l,u,f,y,m=e.kind,v=e.result,w;if(w=e.input.charCodeAt(e.position),zt(w)||yi(w)||w===35||w===38||w===42||w===33||w===124||w===62||w===39||w===34||w===37||w===64||w===96||(w===63||w===45)&&(o=e.input.charCodeAt(e.position+1),zt(o)||t&&yi(o)))return!1;for(e.kind="scalar",e.result="",c=s=e.position,l=!1;w!==0;){if(w===58){if(o=e.input.charCodeAt(e.position+1),zt(o)||t&&yi(o))break}else if(w===35){if(n=e.input.charCodeAt(e.position-1),zt(n))break}else{if(e.position===e.lineStart&&dr(e)||t&&yi(w))break;if(jt(w))if(u=e.line,f=e.lineStart,y=e.lineIndent,ht(e,!1,-1),e.lineIndent>=p){l=!0,w=e.input.charCodeAt(e.position);continue}else{e.position=s,e.line=u,e.lineStart=f,e.lineIndent=y;break}}l&&(Zt(e,c,s,!1),Mr(e,e.line-u),c=s=e.position,l=!1),di(w)||(s=e.position+1),w=e.input.charCodeAt(++e.position)}return Zt(e,c,s,!1),e.result?!0:(e.kind=m,e.result=v,!1)}function Jo(e,p){var t,n,o;if(t=e.input.charCodeAt(e.position),t!==39)return!1;for(e.kind="scalar",e.result="",e.position++,n=o=e.position;(t=e.input.charCodeAt(e.position))!==0;)if(t===39)if(Zt(e,n,e.position,!0),t=e.input.charCodeAt(++e.position),t===39)n=e.position,e.position++,o=e.position;else return!0;else jt(t)?(Zt(e,n,o,!0),Mr(e,ht(e,!1,p)),n=o=e.position):e.position===e.lineStart&&dr(e)?xe(e,"unexpected end of the document within a single quoted scalar"):(e.position++,o=e.position);xe(e,"unexpected end of the stream within a single quoted scalar")}function Qo(e,p){var t,n,o,c,s,l;if(l=e.input.charCodeAt(e.position),l!==34)return!1;for(e.kind="scalar",e.result="",e.position++,t=n=e.position;(l=e.input.charCodeAt(e.position))!==0;){if(l===34)return Zt(e,t,e.position,!0),e.position++,!0;if(l===92){if(Zt(e,t,e.position,!0),l=e.input.charCodeAt(++e.position),jt(l))ht(e,!1,p);else if(l<256&&Pn[l])e.result+=Rn[l],e.position++;else if((s=Ko(l))>0){for(o=s,c=0;o>0;o--)l=e.input.charCodeAt(++e.position),(s=$o(l))>=0?c=(c<<4)+s:xe(e,"expected hexadecimal character");e.result+=Vo(c),e.position++}else xe(e,"unknown escape sequence");t=n=e.position}else jt(l)?(Zt(e,t,n,!0),Mr(e,ht(e,!1,p)),t=n=e.position):e.position===e.lineStart&&dr(e)?xe(e,"unexpected end of the document within a double quoted scalar"):(e.position++,n=e.position)}xe(e,"unexpected end of the stream within a double quoted scalar")}function Zo(e,p){var t=!0,n,o,c,s=e.tag,l,u=e.anchor,f,y,m,v,w,S=Object.create(null),_,T,R,C;if(C=e.input.charCodeAt(e.position),C===91)y=93,w=!1,l=[];else if(C===123)y=125,w=!0,l={};else return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=l),C=e.input.charCodeAt(++e.position);C!==0;){if(ht(e,!0,p),C=e.input.charCodeAt(e.position),C===y)return e.position++,e.tag=s,e.anchor=u,e.kind=w?"mapping":"sequence",e.result=l,!0;t?C===44&&xe(e,"expected the node content, but found ','"):xe(e,"missed comma between flow collection entries"),T=_=R=null,m=v=!1,C===63&&(f=e.input.charCodeAt(e.position+1),zt(f)&&(m=v=!0,e.position++,ht(e,!0,p))),n=e.line,o=e.lineStart,c=e.position,bi(e,p,ar,!1,!0),T=e.tag,_=e.result,ht(e,!0,p),C=e.input.charCodeAt(e.position),(v||e.line===n)&&C===58&&(m=!0,C=e.input.charCodeAt(++e.position),ht(e,!0,p),bi(e,p,ar,!1,!0),R=e.result),w?vi(e,l,S,T,_,R,n,o,c):m?l.push(vi(e,null,S,T,_,R,n,o,c)):l.push(_),ht(e,!0,p),C=e.input.charCodeAt(e.position),C===44?(t=!0,C=e.input.charCodeAt(++e.position)):t=!1}xe(e,"unexpected end of the stream within a flow collection")}function es(e,p){var t,n,o=wr,c=!1,s=!1,l=p,u=0,f=!1,y,m;if(m=e.input.charCodeAt(e.position),m===124)n=!1;else if(m===62)n=!0;else return!1;for(e.kind="scalar",e.result="";m!==0;)if(m=e.input.charCodeAt(++e.position),m===43||m===45)wr===o?o=m===43?Ur:Ho:xe(e,"repeat of a chomping mode identifier");else if((y=Uo(m))>=0)y===0?xe(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):s?xe(e,"repeat of an indentation width identifier"):(l=p+y-1,s=!0);else break;if(di(m)){do m=e.input.charCodeAt(++e.position);while(di(m));if(m===35)do m=e.input.charCodeAt(++e.position);while(!jt(m)&&m!==0)}for(;m!==0;){for(zr(e),e.lineIndent=0,m=e.input.charCodeAt(e.position);(!s||e.lineIndent<l)&&m===32;)e.lineIndent++,m=e.input.charCodeAt(++e.position);if(!s&&e.lineIndent>l&&(l=e.lineIndent),jt(m)){u++;continue}if(e.lineIndent<l){o===Ur?e.result+=vt.repeat(`
`,c?1+u:u):o===wr&&c&&(e.result+=`
`);break}for(n?di(m)?(f=!0,e.result+=vt.repeat(`
`,c?1+u:u)):f?(f=!1,e.result+=vt.repeat(`
`,u+1)):u===0?c&&(e.result+=" "):e.result+=vt.repeat(`
`,u):e.result+=vt.repeat(`
`,c?1+u:u),c=!0,s=!0,u=0,t=e.position;!jt(m)&&m!==0;)m=e.input.charCodeAt(++e.position);Zt(e,t,e.position,!1)}return!0}function Qr(e,p){var t,n=e.tag,o=e.anchor,c=[],s,l=!1,u;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=c),u=e.input.charCodeAt(e.position);u!==0&&(e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,xe(e,"tab characters must not be used in indentation")),!(u!==45||(s=e.input.charCodeAt(e.position+1),!zt(s))));){if(l=!0,e.position++,ht(e,!0,-1)&&e.lineIndent<=p){c.push(null),u=e.input.charCodeAt(e.position);continue}if(t=e.line,bi(e,p,zn,!1,!0),c.push(e.result),ht(e,!0,-1),u=e.input.charCodeAt(e.position),(e.line===t||e.lineIndent>p)&&u!==0)xe(e,"bad indentation of a sequence entry");else if(e.lineIndent<p)break}return l?(e.tag=n,e.anchor=o,e.kind="sequence",e.result=c,!0):!1}function ts(e,p,t){var n,o,c,s,l,u,f=e.tag,y=e.anchor,m={},v=Object.create(null),w=null,S=null,_=null,T=!1,R=!1,C;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=m),C=e.input.charCodeAt(e.position);C!==0;){if(!T&&e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,xe(e,"tab characters must not be used in indentation")),n=e.input.charCodeAt(e.position+1),c=e.line,(C===63||C===58)&&zt(n))C===63?(T&&(vi(e,m,v,w,S,null,s,l,u),w=S=_=null),R=!0,T=!0,o=!0):T?(T=!1,o=!0):xe(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,C=n;else{if(s=e.line,l=e.lineStart,u=e.position,!bi(e,t,On,!1,!0))break;if(e.line===c){for(C=e.input.charCodeAt(e.position);di(C);)C=e.input.charCodeAt(++e.position);if(C===58)C=e.input.charCodeAt(++e.position),zt(C)||xe(e,"a whitespace character is expected after the key-value separator within a block mapping"),T&&(vi(e,m,v,w,S,null,s,l,u),w=S=_=null),R=!0,T=!1,o=!1,w=e.tag,S=e.result;else if(R)xe(e,"can not read an implicit mapping pair; a colon is missed");else return e.tag=f,e.anchor=y,!0}else if(R)xe(e,"can not read a block mapping entry; a multiline key may not be an implicit key");else return e.tag=f,e.anchor=y,!0}if((e.line===c||e.lineIndent>p)&&(T&&(s=e.line,l=e.lineStart,u=e.position),bi(e,p,or,!0,o)&&(T?S=e.result:_=e.result),T||(vi(e,m,v,w,S,_,s,l,u),w=S=_=null),ht(e,!0,-1),C=e.input.charCodeAt(e.position)),(e.line===c||e.lineIndent>p)&&C!==0)xe(e,"bad indentation of a mapping entry");else if(e.lineIndent<p)break}return T&&vi(e,m,v,w,S,null,s,l,u),R&&(e.tag=f,e.anchor=y,e.kind="mapping",e.result=m),R}function is(e){var p,t=!1,n=!1,o,c,s;if(s=e.input.charCodeAt(e.position),s!==33)return!1;if(e.tag!==null&&xe(e,"duplication of a tag property"),s=e.input.charCodeAt(++e.position),s===60?(t=!0,s=e.input.charCodeAt(++e.position)):s===33?(n=!0,o="!!",s=e.input.charCodeAt(++e.position)):o="!",p=e.position,t){do s=e.input.charCodeAt(++e.position);while(s!==0&&s!==62);e.position<e.length?(c=e.input.slice(p,e.position),s=e.input.charCodeAt(++e.position)):xe(e,"unexpected end of the stream within a verbatim tag")}else{for(;s!==0&&!zt(s);)s===33&&(n?xe(e,"tag suffix cannot contain exclamation marks"):(o=e.input.slice(p-1,e.position+1),Mn.test(o)||xe(e,"named tag handle cannot contain such characters"),n=!0,p=e.position+1)),s=e.input.charCodeAt(++e.position);c=e.input.slice(p,e.position),Yo.test(c)&&xe(e,"tag suffix cannot contain flow indicator characters")}c&&!Ln.test(c)&&xe(e,"tag name cannot contain such characters: "+c);try{c=decodeURIComponent(c)}catch{xe(e,"tag name is malformed: "+c)}return t?e.tag=c:ei.call(e.tagMap,o)?e.tag=e.tagMap[o]+c:o==="!"?e.tag="!"+c:o==="!!"?e.tag="tag:yaml.org,2002:"+c:xe(e,'undeclared tag handle "'+o+'"'),!0}function rs(e){var p,t;if(t=e.input.charCodeAt(e.position),t!==38)return!1;for(e.anchor!==null&&xe(e,"duplication of an anchor property"),t=e.input.charCodeAt(++e.position),p=e.position;t!==0&&!zt(t)&&!yi(t);)t=e.input.charCodeAt(++e.position);return e.position===p&&xe(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(p,e.position),!0}function ns(e){var p,t,n;if(n=e.input.charCodeAt(e.position),n!==42)return!1;for(n=e.input.charCodeAt(++e.position),p=e.position;n!==0&&!zt(n)&&!yi(n);)n=e.input.charCodeAt(++e.position);return e.position===p&&xe(e,"name of an alias node must contain at least one character"),t=e.input.slice(p,e.position),ei.call(e.anchorMap,t)||xe(e,'unidentified alias "'+t+'"'),e.result=e.anchorMap[t],ht(e,!0,-1),!0}function bi(e,p,t,n,o){var c,s,l,u=1,f=!1,y=!1,m,v,w,S,_,T;if(e.listener!==null&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,c=s=l=or===t||zn===t,n&&ht(e,!0,-1)&&(f=!0,e.lineIndent>p?u=1:e.lineIndent===p?u=0:e.lineIndent<p&&(u=-1)),u===1)for(;is(e)||rs(e);)ht(e,!0,-1)?(f=!0,l=c,e.lineIndent>p?u=1:e.lineIndent===p?u=0:e.lineIndent<p&&(u=-1)):l=!1;if(l&&(l=f||o),(u===1||or===t)&&(ar===t||On===t?_=p:_=p+1,T=e.position-e.lineStart,u===1?l&&(Qr(e,T)||ts(e,T,_))||Zo(e,_)?y=!0:(s&&es(e,_)||Jo(e,_)||Qo(e,_)?y=!0:ns(e)?(y=!0,(e.tag!==null||e.anchor!==null)&&xe(e,"alias node should not have any properties")):Xo(e,_,ar===t)&&(y=!0,e.tag===null&&(e.tag="?")),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):u===0&&(y=l&&Qr(e,T))),e.tag===null)e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);else if(e.tag==="?"){for(e.result!==null&&e.kind!=="scalar"&&xe(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),m=0,v=e.implicitTypes.length;m<v;m+=1)if(S=e.implicitTypes[m],S.resolve(e.result)){e.result=S.construct(e.result),e.tag=S.tag,e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);break}}else if(e.tag!=="!"){if(ei.call(e.typeMap[e.kind||"fallback"],e.tag))S=e.typeMap[e.kind||"fallback"][e.tag];else for(S=null,w=e.typeMap.multi[e.kind||"fallback"],m=0,v=w.length;m<v;m+=1)if(e.tag.slice(0,w[m].tag.length)===w[m].tag){S=w[m];break}S||xe(e,"unknown tag !<"+e.tag+">"),e.result!==null&&S.kind!==e.kind&&xe(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+S.kind+'", not "'+e.kind+'"'),S.resolve(e.result,e.tag)?(e.result=S.construct(e.result,e.tag),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):xe(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")}return e.listener!==null&&e.listener("close",e),e.tag!==null||e.anchor!==null||y}function as(e){var p=e.position,t,n,o,c=!1,s;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);(s=e.input.charCodeAt(e.position))!==0&&(ht(e,!0,-1),s=e.input.charCodeAt(e.position),!(e.lineIndent>0||s!==37));){for(c=!0,s=e.input.charCodeAt(++e.position),t=e.position;s!==0&&!zt(s);)s=e.input.charCodeAt(++e.position);for(n=e.input.slice(t,e.position),o=[],n.length<1&&xe(e,"directive name must not be less than one character in length");s!==0;){for(;di(s);)s=e.input.charCodeAt(++e.position);if(s===35){do s=e.input.charCodeAt(++e.position);while(s!==0&&!jt(s));break}if(jt(s))break;for(t=e.position;s!==0&&!zt(s);)s=e.input.charCodeAt(++e.position);o.push(e.input.slice(t,e.position))}s!==0&&zr(e),ei.call(Xr,n)?Xr[n](e,n,o):sr(e,'unknown document directive "'+n+'"')}if(ht(e,!0,-1),e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45?(e.position+=3,ht(e,!0,-1)):c&&xe(e,"directives end mark is expected"),bi(e,e.lineIndent-1,or,!1,!0),ht(e,!0,-1),e.checkLineBreaks&&Wo.test(e.input.slice(p,e.position))&&sr(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&dr(e)){e.input.charCodeAt(e.position)===46&&(e.position+=3,ht(e,!0,-1));return}if(e.position<e.length-1)xe(e,"end of the stream or a document separator is expected");else return}function Dn(e,p){e=String(e),p=p||{},e.length!==0&&(e.charCodeAt(e.length-1)!==10&&e.charCodeAt(e.length-1)!==13&&(e+=`
`),e.charCodeAt(0)===65279&&(e=e.slice(1)));var t=new Go(e,p),n=e.indexOf("\0");for(n!==-1&&(t.position=n,xe(t,"null byte is not allowed in input")),t.input+="\0";t.input.charCodeAt(t.position)===32;)t.lineIndent+=1,t.position+=1;for(;t.position<t.length-1;)as(t);return t.documents}function os(e,p,t){p!==null&&typeof p=="object"&&typeof t=="undefined"&&(t=p,p=null);var n=Dn(e,t);if(typeof p!="function")return n;for(var o=0,c=n.length;o<c;o+=1)p(n[o])}function ss(e,p){var t=Dn(e,p);if(t.length!==0){if(t.length===1)return t[0];throw new Et("expected a single document in the stream, but found more")}}var cs=os,ls=ss,Fn={loadAll:cs,load:ls},Bn=Object.prototype.toString,Nn=Object.prototype.hasOwnProperty,Lr=65279,ds=9,Bi=10,us=13,ps=32,hs=33,fs=34,kr=35,gs=37,ms=38,ys=39,vs=42,qn=44,bs=45,cr=58,_s=61,xs=62,ws=63,Ss=64,Hn=91,jn=93,ks=96,Wn=123,Cs=124,Yn=125,St={};St[0]="\\0";St[7]="\\a";St[8]="\\b";St[9]="\\t";St[10]="\\n";St[11]="\\v";St[12]="\\f";St[13]="\\r";St[27]="\\e";St[34]='\\"';St[92]="\\\\";St[133]="\\N";St[160]="\\_";St[8232]="\\L";St[8233]="\\P";var Es=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],As=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function Ts(e,p){var t,n,o,c,s,l,u;if(p===null)return{};for(t={},n=Object.keys(p),o=0,c=n.length;o<c;o+=1)s=n[o],l=String(p[s]),s.slice(0,2)==="!!"&&(s="tag:yaml.org,2002:"+s.slice(2)),u=e.compiledTypeMap.fallback[s],u&&Nn.call(u.styleAliases,l)&&(l=u.styleAliases[l]),t[s]=l;return t}function Os(e){var p,t,n;if(p=e.toString(16).toUpperCase(),e<=255)t="x",n=2;else if(e<=65535)t="u",n=4;else if(e<=4294967295)t="U",n=8;else throw new Et("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+t+vt.repeat("0",n-p.length)+p}var zs=1,Ni=2;function Ms(e){this.schema=e.schema||Or,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=vt.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=Ts(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.quotingType=e.quotingType==='"'?Ni:zs,this.forceQuotes=e.forceQuotes||!1,this.replacer=typeof e.replacer=="function"?e.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function Zr(e,p){for(var t=vt.repeat(" ",p),n=0,o=-1,c="",s,l=e.length;n<l;)o=e.indexOf(`
`,n),o===-1?(s=e.slice(n),n=l):(s=e.slice(n,o+1),n=o+1),s.length&&s!==`
`&&(c+=t),c+=s;return c}function Cr(e,p){return`
`+vt.repeat(" ",e.indent*p)}function Ls(e,p){var t,n,o;for(t=0,n=e.implicitTypes.length;t<n;t+=1)if(o=e.implicitTypes[t],o.resolve(p))return!0;return!1}function lr(e){return e===ps||e===ds}function qi(e){return 32<=e&&e<=126||161<=e&&e<=55295&&e!==8232&&e!==8233||57344<=e&&e<=65533&&e!==Lr||65536<=e&&e<=1114111}function en(e){return qi(e)&&e!==Lr&&e!==us&&e!==Bi}function tn(e,p,t){var n=en(e),o=n&&!lr(e);return(t?n:n&&e!==qn&&e!==Hn&&e!==jn&&e!==Wn&&e!==Yn)&&e!==kr&&!(p===cr&&!o)||en(p)&&!lr(p)&&e===kr||p===cr&&o}function Ps(e){return qi(e)&&e!==Lr&&!lr(e)&&e!==bs&&e!==ws&&e!==cr&&e!==qn&&e!==Hn&&e!==jn&&e!==Wn&&e!==Yn&&e!==kr&&e!==ms&&e!==vs&&e!==hs&&e!==Cs&&e!==_s&&e!==xs&&e!==ys&&e!==fs&&e!==gs&&e!==Ss&&e!==ks}function Rs(e){return!lr(e)&&e!==cr}function Di(e,p){var t=e.charCodeAt(p),n;return t>=55296&&t<=56319&&p+1<e.length&&(n=e.charCodeAt(p+1),n>=56320&&n<=57343)?(t-55296)*1024+n-56320+65536:t}function $n(e){var p=/^\n* /;return p.test(e)}var Kn=1,Er=2,Un=3,Vn=4,mi=5;function Is(e,p,t,n,o,c,s,l){var u,f=0,y=null,m=!1,v=!1,w=n!==-1,S=-1,_=Ps(Di(e,0))&&Rs(Di(e,e.length-1));if(p||s)for(u=0;u<e.length;f>=65536?u+=2:u++){if(f=Di(e,u),!qi(f))return mi;_=_&&tn(f,y,l),y=f}else{for(u=0;u<e.length;f>=65536?u+=2:u++){if(f=Di(e,u),f===Bi)m=!0,w&&(v=v||u-S-1>n&&e[S+1]!==" ",S=u);else if(!qi(f))return mi;_=_&&tn(f,y,l),y=f}v=v||w&&u-S-1>n&&e[S+1]!==" "}return!m&&!v?_&&!s&&!o(e)?Kn:c===Ni?mi:Er:t>9&&$n(e)?mi:s?c===Ni?mi:Er:v?Vn:Un}function Ds(e,p,t,n,o){e.dump=(function(){if(p.length===0)return e.quotingType===Ni?'""':"''";if(!e.noCompatMode&&(Es.indexOf(p)!==-1||As.test(p)))return e.quotingType===Ni?'"'+p+'"':"'"+p+"'";var c=e.indent*Math.max(1,t),s=e.lineWidth===-1?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-c),l=n||e.flowLevel>-1&&t>=e.flowLevel;function u(f){return Ls(e,f)}switch(Is(p,l,e.indent,s,u,e.quotingType,e.forceQuotes&&!n,o)){case Kn:return p;case Er:return"'"+p.replace(/'/g,"''")+"'";case Un:return"|"+rn(p,e.indent)+nn(Zr(p,c));case Vn:return">"+rn(p,e.indent)+nn(Zr(Fs(p,s),c));case mi:return'"'+Bs(p)+'"';default:throw new Et("impossible error: invalid scalar style")}})()}function rn(e,p){var t=$n(e)?String(p):"",n=e[e.length-1]===`
`,o=n&&(e[e.length-2]===`
`||e===`
`),c=o?"+":n?"":"-";return t+c+`
`}function nn(e){return e[e.length-1]===`
`?e.slice(0,-1):e}function Fs(e,p){for(var t=/(\n+)([^\n]*)/g,n=(function(){var f=e.indexOf(`
`);return f=f!==-1?f:e.length,t.lastIndex=f,an(e.slice(0,f),p)})(),o=e[0]===`
`||e[0]===" ",c,s;s=t.exec(e);){var l=s[1],u=s[2];c=u[0]===" ",n+=l+(!o&&!c&&u!==""?`
`:"")+an(u,p),o=c}return n}function an(e,p){if(e===""||e[0]===" ")return e;for(var t=/ [^ ]/g,n,o=0,c,s=0,l=0,u="";n=t.exec(e);)l=n.index,l-o>p&&(c=s>o?s:l,u+=`
`+e.slice(o,c),o=c+1),s=l;return u+=`
`,e.length-o>p&&s>o?u+=e.slice(o,s)+`
`+e.slice(s+1):u+=e.slice(o),u.slice(1)}function Bs(e){for(var p="",t=0,n,o=0;o<e.length;t>=65536?o+=2:o++)t=Di(e,o),n=St[t],!n&&qi(t)?(p+=e[o],t>=65536&&(p+=e[o+1])):p+=n||Os(t);return p}function Ns(e,p,t){var n="",o=e.tag,c,s,l;for(c=0,s=t.length;c<s;c+=1)l=t[c],e.replacer&&(l=e.replacer.call(t,String(c),l)),($t(e,p,l,!1,!1)||typeof l=="undefined"&&$t(e,p,null,!1,!1))&&(n!==""&&(n+=","+(e.condenseFlow?"":" ")),n+=e.dump);e.tag=o,e.dump="["+n+"]"}function on(e,p,t,n){var o="",c=e.tag,s,l,u;for(s=0,l=t.length;s<l;s+=1)u=t[s],e.replacer&&(u=e.replacer.call(t,String(s),u)),($t(e,p+1,u,!0,!0,!1,!0)||typeof u=="undefined"&&$t(e,p+1,null,!0,!0,!1,!0))&&((!n||o!=="")&&(o+=Cr(e,p)),e.dump&&Bi===e.dump.charCodeAt(0)?o+="-":o+="- ",o+=e.dump);e.tag=c,e.dump=o||"[]"}function qs(e,p,t){var n="",o=e.tag,c=Object.keys(t),s,l,u,f,y;for(s=0,l=c.length;s<l;s+=1)y="",n!==""&&(y+=", "),e.condenseFlow&&(y+='"'),u=c[s],f=t[u],e.replacer&&(f=e.replacer.call(t,u,f)),$t(e,p,u,!1,!1)&&(e.dump.length>1024&&(y+="? "),y+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),$t(e,p,f,!1,!1)&&(y+=e.dump,n+=y));e.tag=o,e.dump="{"+n+"}"}function Hs(e,p,t,n){var o="",c=e.tag,s=Object.keys(t),l,u,f,y,m,v;if(e.sortKeys===!0)s.sort();else if(typeof e.sortKeys=="function")s.sort(e.sortKeys);else if(e.sortKeys)throw new Et("sortKeys must be a boolean or a function");for(l=0,u=s.length;l<u;l+=1)v="",(!n||o!=="")&&(v+=Cr(e,p)),f=s[l],y=t[f],e.replacer&&(y=e.replacer.call(t,f,y)),$t(e,p+1,f,!0,!0,!0)&&(m=e.tag!==null&&e.tag!=="?"||e.dump&&e.dump.length>1024,m&&(e.dump&&Bi===e.dump.charCodeAt(0)?v+="?":v+="? "),v+=e.dump,m&&(v+=Cr(e,p)),$t(e,p+1,y,!0,m)&&(e.dump&&Bi===e.dump.charCodeAt(0)?v+=":":v+=": ",v+=e.dump,o+=v));e.tag=c,e.dump=o||"{}"}function sn(e,p,t){var n,o,c,s,l,u;for(o=t?e.explicitTypes:e.implicitTypes,c=0,s=o.length;c<s;c+=1)if(l=o[c],(l.instanceOf||l.predicate)&&(!l.instanceOf||typeof p=="object"&&p instanceof l.instanceOf)&&(!l.predicate||l.predicate(p))){if(t?l.multi&&l.representName?e.tag=l.representName(p):e.tag=l.tag:e.tag="?",l.represent){if(u=e.styleMap[l.tag]||l.defaultStyle,Bn.call(l.represent)==="[object Function]")n=l.represent(p,u);else if(Nn.call(l.represent,u))n=l.represent[u](p,u);else throw new Et("!<"+l.tag+'> tag resolver accepts not "'+u+'" style');e.dump=n}return!0}return!1}function $t(e,p,t,n,o,c,s){e.tag=null,e.dump=t,sn(e,t,!1)||sn(e,t,!0);var l=Bn.call(e.dump),u=n,f;n&&(n=e.flowLevel<0||e.flowLevel>p);var y=l==="[object Object]"||l==="[object Array]",m,v;if(y&&(m=e.duplicates.indexOf(t),v=m!==-1),(e.tag!==null&&e.tag!=="?"||v||e.indent!==2&&p>0)&&(o=!1),v&&e.usedDuplicates[m])e.dump="*ref_"+m;else{if(y&&v&&!e.usedDuplicates[m]&&(e.usedDuplicates[m]=!0),l==="[object Object]")n&&Object.keys(e.dump).length!==0?(Hs(e,p,e.dump,o),v&&(e.dump="&ref_"+m+e.dump)):(qs(e,p,e.dump),v&&(e.dump="&ref_"+m+" "+e.dump));else if(l==="[object Array]")n&&e.dump.length!==0?(e.noArrayIndent&&!s&&p>0?on(e,p-1,e.dump,o):on(e,p,e.dump,o),v&&(e.dump="&ref_"+m+e.dump)):(Ns(e,p,e.dump),v&&(e.dump="&ref_"+m+" "+e.dump));else if(l==="[object String]")e.tag!=="?"&&Ds(e,e.dump,p,c,u);else{if(l==="[object Undefined]")return!1;if(e.skipInvalid)return!1;throw new Et("unacceptable kind of an object to dump "+l)}e.tag!==null&&e.tag!=="?"&&(f=encodeURI(e.tag[0]==="!"?e.tag.slice(1):e.tag).replace(/!/g,"%21"),e.tag[0]==="!"?f="!"+f:f.slice(0,18)==="tag:yaml.org,2002:"?f="!!"+f.slice(18):f="!<"+f+">",e.dump=f+" "+e.dump)}return!0}function js(e,p){var t=[],n=[],o,c;for(Ar(e,t,n),o=0,c=n.length;o<c;o+=1)p.duplicates.push(t[n[o]]);p.usedDuplicates=new Array(c)}function Ar(e,p,t){var n,o,c;if(e!==null&&typeof e=="object")if(o=p.indexOf(e),o!==-1)t.indexOf(o)===-1&&t.push(o);else if(p.push(e),Array.isArray(e))for(o=0,c=e.length;o<c;o+=1)Ar(e[o],p,t);else for(n=Object.keys(e),o=0,c=n.length;o<c;o+=1)Ar(e[n[o]],p,t)}function Ws(e,p){p=p||{};var t=new Ms(p);t.noRefs||js(e,t);var n=e;return t.replacer&&(n=t.replacer.call({"":n},"",n)),$t(t,0,n,!0,!0)?t.dump+`
`:""}var Ys=Ws,$s={dump:Ys};function Pr(e,p){return function(){throw new Error("Function yaml."+e+" is removed in js-yaml 4. Use yaml."+p+" instead, which is now safe by default.")}}var Ks=_t,Us=dn,Vs=fn,Gs=bn,Xs=_n,Js=Or,Qs=Fn.load,Zs=Fn.loadAll,ec=$s.dump,tc=Et,ic={binary:Cn,float:vn,map:hn,null:gn,pairs:An,set:Tn,timestamp:Sn,bool:mn,int:yn,merge:kn,omap:En,seq:pn,str:un},rc=Pr("safeLoad","load"),nc=Pr("safeLoadAll","loadAll"),ac=Pr("safeDump","dump"),oc={Type:Ks,Schema:Us,FAILSAFE_SCHEMA:Vs,JSON_SCHEMA:Gs,CORE_SCHEMA:Xs,DEFAULT_SCHEMA:Js,load:Qs,loadAll:Zs,dump:ec,YAMLException:tc,types:ic,safeLoad:rc,safeLoadAll:nc,safeDump:ac},Gn=oc;window.interact||(window.interact=Xn.default);window.jsyaml||(window.jsyaml=Gn);var sc="0.9.5";console.info(`%c drag-and-drop-card %c v${sc} `,"color:#fff;background:#03a9f4;font-weight:700;padding:2px 6px;border-radius:3px 0 0 3px","color:#03303a;background:#bdeaff;padding:2px 6px;border-radius:0 3px 3px 0");var cc=(e,...p)=>console.debug(`[drag-and-drop-card] ${e}`,...p);console.info("%c drag-and-drop-card loaded","color:#03a9f4;font-weight:700;");var Rr=()=>new Promise(e=>requestAnimationFrame(()=>e())),lc=()=>new Promise(e=>window.requestIdleCallback?requestIdleCallback(()=>e()):setTimeout(e,0)),ti=class e extends HTMLElement{constructor(){super();pt(this,"__booting",!1);pt(this,"_gridCanvas",null);pt(this,"_gridCtx",null);pt(this,"_gridCols",0);pt(this,"_gridRows",0);pt(this,"_gridCellSize",0);pt(this,"_gridDown",!1);pt(this,"_gridStartCol",-1);pt(this,"_gridStartRow",-1);pt(this,"_gridHoverCol",-1);pt(this,"_gridHoverRow",-1);pt(this,"_gridCurrCol",-1);pt(this,"_gridCurrRow",-1);pt(this,"_gridDirty",!1);pt(this,"_gridRAF",0);pt(this,"_gridTile",null);pt(this,"__gridPrevEditMode");pt(this,"__gridRO",null);pt(this,"__gridPollT",null);this.shadowRoot||this.attachShadow({mode:"open"}),this.__rebuiltCards=new WeakSet}_updateTabsA11y_(){var o;let t=this.tabsBar;if(!t)return;t.setAttribute("role","tablist"),t.querySelectorAll(".ddc-tab").forEach((c,s)=>{let l=c.classList.contains("active");c.setAttribute("role","tab"),c.setAttribute("aria-selected",String(l)),c.setAttribute("tabindex",l?"0":"-1"),c.dataset.index=String(s)}),this.__tabsKeyHandler||(this.__tabsKeyHandler=c=>{if(!["ArrowLeft","ArrowRight","Home","End"].includes(c.key))return;let l=Array.from(t.querySelectorAll(".ddc-tab"));if(!l.length)return;c.preventDefault();let u=l.findIndex(v=>v===document.activeElement),f=l.findIndex(v=>v.classList.contains("active")),y=u>=0?u:f>=0?f:0;c.key==="ArrowRight"&&(y=Math.min(l.length-1,y+1)),c.key==="ArrowLeft"&&(y=Math.max(0,y-1)),c.key==="Home"&&(y=0),c.key==="End"&&(y=l.length-1);let m=l[y];if(m){try{m.focus({preventScroll:!1})}catch{}m.click()}},t.addEventListener("keydown",this.__tabsKeyHandler)),this.__tabsScrollHandler||(this.__tabsScrollHandler=()=>{var c;return(c=this._updateTabOverflowShadows_)==null?void 0:c.call(this)},t.addEventListener("scroll",this.__tabsScrollHandler,{passive:!0})),(o=this._updateTabOverflowShadows_)==null||o.call(this)}_getCurrentDashboardUrlPath_(){let n=(window.location.pathname||"/").replace(/^\/+/,"").split("/")[0]||"lovelace";return n==="lovelace"?null:n}async _ensureCardIdSeededInStorage_(){var n;if((n=this.config)!=null&&n.id)return this.config.id;let t=crypto!=null&&crypto.randomUUID?crypto.randomUUID():"ddc_"+Math.random().toString(36).slice(2);this.config={...this.config,id:t};try{let o=this._getCurrentDashboardUrlPath_(),c=await this.hass.callWS(o?{type:"lovelace/config",url_path:o}:{type:"lovelace/config"}),s=this._findThisCardPathRecursive_(c,w=>(w==null?void 0:w.type)==="custom:drag-and-drop-card"&&(!w.id||w.id===t));if(!s)return t;let{viewIndex:l,cardIndex:u,parentPath:f}=s,y=c.views[l],v={...this._getCardByPath_(y,f,u),id:t};this._setCardByPath_(y,f,u,v),await this.hass.callWS(o?{type:"lovelace/config/save",url_path:o,config:c}:{type:"lovelace/config/save",config:c})}catch{}return t}async _persistThisCardConfigToStorage_(){var v,w;await this._ensureCardIdSeededInStorage_();let t={type:"custom:drag-and-drop-card",id:(v=this.config)==null?void 0:v.id,...this._config},n=this._getCurrentDashboardUrlPath_(),o=await this.hass.callWS(n?{type:"lovelace/config",url_path:n}:{type:"lovelace/config"}),c=this._findThisCardPathRecursive_(o,S=>{var _;return(S==null?void 0:S.type)==="custom:drag-and-drop-card"&&(S==null?void 0:S.id)===((_=this.config)==null?void 0:_.id)});if(!c)throw new Error("Card not found in Lovelace config");let{viewIndex:s,cardIndex:l,parentPath:u}=c,f=o.views[s],m={...this._getCardByPath_(f,u,l),...t};this._setCardByPath_(f,u,l,m),await this.hass.callWS(n?{type:"lovelace/config/save",url_path:n,config:o}:{type:"lovelace/config/save",config:o}),this.config=m,(w=this.requestUpdate)==null||w.call(this)}_findThisCardPathRecursive_(t,n){let o=(t==null?void 0:t.views)||[];for(let c=0;c<o.length;c++){let s=this._findInCardTree_(o[c],n);if(s)return{viewIndex:c,...s}}return null}_findInCardTree_(t,n,o=[]){var s;let c=(t==null?void 0:t.cards)||[];for(let l=0;l<c.length;l++){let u=c[l];if(n(u))return{cardIndex:l,parentPath:o};if((s=u==null?void 0:u.cards)!=null&&s.length){let f=this._findInCardTree_(u,n,o.concat(l));if(f)return f}}return null}_getCardByPath_(t,n,o){let c=t;for(let s of n||[])c=c.cards[s];return c.cards[o]}_setCardByPath_(t,n,o,c){let s=t;for(let l of n||[])s=s.cards[l];s.cards[o]=c}_ensureToolbarStyles_(){try{if(this.shadowRoot.querySelector("#ddc-toolbar-styles"))return;let n=document.createElement("style");n.id="ddc-toolbar-styles",n.textContent=`/* ===== Edit toolbar ===== */
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
  }`,this.shadowRoot.appendChild(n)}catch(t){console.warn("Toolbar style inject failed",t)}}_ensureSettingsStyles_(){if(this.shadowRoot.querySelector("#ddc-settings-styles"))return;let t=document.createElement("style");t.id="ddc-settings-styles",t.textContent=`
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
  .row input[type="text"], .row input[type="number"], .row input[type="password"], .row select { flex:1; padding:8px; border:1px solid var(--divider-color, rgba(0,0,0,.2)); border-radius:8px; background:var(--card-background-color, #fff); }
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
    /* Make swatches more obvious as clickable targets by thickening their border */
    .swatch { width:28px; height:28px; border-radius:6px; border:2px solid rgba(0,0,0,.25); cursor:pointer; position:relative; }
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
    .gradient { width:44px; height:28px; border-radius:8px; border:2px solid rgba(0,0,0,.25); cursor:pointer; position:relative; }
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
    /* Inputs and selects within the modern dialog now have a more prominent outline for better visibility. */
    .modern select,
    .modern input[type="text"],
    .modern input[type="number"],
    .modern input[type="password"] {
      padding:8px 10px;
      border:2px solid var(--divider-color,rgba(0,0,0,.25));
      border-radius:10px;
      background:var(--ha-card-background,#fff);
    }

    /* Style for the "Add tab" text field to make it stand out */
    #ddc-new-tab-name {
      flex:1;
      padding:8px 10px;
      border:2px solid var(--primary-color);
      border-radius:10px;
      background:var(--ha-card-background,#fff);
      font-weight:600;
    }

    /* Style the manual grid size input alongside the slider */
    .range-wrap input[type="number"] {
      width:80px;
      padding:6px 8px;
      border:1px solid var(--divider-color, rgba(0,0,0,.25));
      border-radius:8px;
      background:var(--card-background-color, #fff);
      text-align:center;
    }

    /* Harmonise the appearance of background configuration sections (image, particles, YouTube) */
    .setting[data-bg-section] .stack {
      display:flex;
      flex-direction:column;
      gap:10px;
    }
    .setting[data-bg-section] .stack input[type="text"],
    .setting[data-bg-section] .stack input[type="number"],
    .setting[data-bg-section] .stack select {
      width:100%;
      padding:8px 10px;
      border:2px solid var(--divider-color, rgba(0,0,0,.25));
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

    .color-pair {
      display:flex;
      gap:8px;
      align-items:center;
    }
    .color-pair input[type="color"] {
      width:44px;
      height:36px;
      border:0;
      background:transparent;
      padding:0;
    }
    .color-pair input[type="text"] {
      flex:1;
    }

    .color-stack {
      display:flex;
      flex-direction:column;
      gap:8px;
    }

    .color-group {
      padding:8px 10px;
      border-radius:10px;
      border:1px solid var(--divider-color, rgba(0,0,0,.15));
      background:var(--ha-card-background, rgba(0,0,0,0.12));
    }

    .color-group-title {
      font-size:0.75rem;
      text-transform:uppercase;
      letter-spacing:.04em;
      opacity:.8;
      margin-bottom:4px;
      display:flex;
      justify-content:space-between;
    }

    .swatches,
    .gradients {
      display:flex;
      flex-wrap:wrap;
      gap:6px;
      margin-top:4px;
    }

  .footer { display:flex; justify-content:flex-end; gap:10px; padding:12px 16px; border-top:1px solid var(--divider-color, rgba(0,0,0,.12)); }
  .btn.primary { background:var(--primary-color); color:#fff; border:0; border-radius:8px; padding:8px 16px; font-weight:600; cursor:pointer; }
  .btn.secondary { background:transparent; border:1px solid var(--divider-color, rgba(0,0,0,.25)); border-radius:8px; padding:8px 16px; cursor:pointer; }
  `,this.shadowRoot.appendChild(t)}_setHeaderVisible_(t=!0){var n,o,c,s,l,u;try{(((n=this._deepQueryAll)==null?void 0:n.call(this,"app-header, ha-top-app-bar, ha-top-app-bar-fixed, mwc-top-app-bar-fixed, ha-header-bar, app-toolbar, ha-toolbar"))||[]).forEach(S=>{S&&(S.dataset.ddcPrevDisplayHeader===void 0&&(S.dataset.ddcPrevDisplayHeader=S.style.display||"",S.dataset.ddcPrevMinH=S.style.minHeight||"",S.dataset.ddcPrevH=S.style.height||"",S.dataset.ddcPrevVis=S.style.visibility||""),t?(S.style.display=S.dataset.ddcPrevDisplayHeader||"",S.style.minHeight=S.dataset.ddcPrevMinH||"",S.style.height=S.dataset.ddcPrevH||"",S.style.visibility=S.dataset.ddcPrevVis||"",S.removeAttribute("hidden")):(S.style.display="none",S.style.minHeight="0",S.style.height="0",S.style.visibility="hidden",S.setAttribute("hidden","")))}),(((o=this._deepQueryAll)==null?void 0:o.call(this,'[slot="actionItems"], ha-icon-button, ha-button-menu, assist-button, search-input, ha-quick-bar, ha-mwc-menu'))||[]).forEach(S=>{S&&(S.dataset.ddcPrevDisplayAction===void 0&&(S.dataset.ddcPrevDisplayAction=S.style.display||"",S.dataset.ddcPrevVisAction=S.style.visibility||""),t?(S.style.display=S.dataset.ddcPrevDisplayAction||"",S.style.visibility=S.dataset.ddcPrevVisAction||""):(S.style.display="none",S.style.visibility="hidden"))}),[...((c=this._deepQueryAll)==null?void 0:c.call(this,"ha-app-layout"))||[],...((s=this._deepQueryAll)==null?void 0:s.call(this,"home-assistant-main"))||[],document.documentElement,document.body].filter(Boolean).forEach(S=>{if(S)if(S.dataset.ddcPrevHdrVars===void 0&&(S.dataset.ddcPrevHdrVars=JSON.stringify({mdc:S.style.getPropertyValue("--mdc-top-app-bar-height")||"",app:S.style.getPropertyValue("--app-header-height")||"",hdr:S.style.getPropertyValue("--header-height")||"",hah:S.style.getPropertyValue("--ha-header-height")||"",pad:S.style&&(S.style.paddingTop||"")||""})),t)try{let _=JSON.parse(S.dataset.ddcPrevHdrVars||"{}");S.style.setProperty("--mdc-top-app-bar-height",_.mdc||""),S.style.setProperty("--app-header-height",_.app||""),S.style.setProperty("--header-height",_.hdr||""),S.style.setProperty("--ha-header-height",_.hah||""),_.pad!==void 0&&(S.style.paddingTop=_.pad||"")}catch{}else{S.style.setProperty("--mdc-top-app-bar-height","0px"),S.style.setProperty("--app-header-height","0px"),S.style.setProperty("--header-height","0px"),S.style.setProperty("--ha-header-height","0px");try{S.style.paddingTop="0px"}catch{}}}),(((l=this._deepQueryAll)==null?void 0:l.call(this,"#contentContainer"))||[]).forEach(S=>{S&&(S.dataset.ddcPrevContentPadTop===void 0&&(S.dataset.ddcPrevContentPadTop=S.style&&(S.style.paddingTop||"")||""),S.style.paddingTop=t?S.dataset.ddcPrevContentPadTop||"":"0px")}),(((u=this._deepQueryAll)==null?void 0:u.call(this,".main-title"))||[]).forEach(S=>{S&&(S.dataset.ddcPrevDisplayTitle===void 0&&(S.dataset.ddcPrevDisplayTitle=S.style.display||"",S.dataset.ddcPrevVisTitle=S.style.visibility||""),t?(S.style.display=S.dataset.ddcPrevDisplayTitle||"",S.style.visibility=S.dataset.ddcPrevVisTitle||""):(S.style.display="none",S.style.visibility="hidden"))})}catch{}}_setSidebarVisible_(t=!0){var n,o;try{(((n=this._deepQueryAll)==null?void 0:n.call(this,"ha-sidebar"))||[]).forEach(l=>{l&&(l.dataset.ddcPrevDisplaySidebar===void 0&&(l.dataset.ddcPrevDisplaySidebar=l.style.display||""),l.style.display=t?l.dataset.ddcPrevDisplaySidebar||"":"none")}),(((o=this._deepQueryAll)==null?void 0:o.call(this,"ha-drawer"))||[]).forEach(l=>{if(l){l.dataset.ddcPrevDrawerWidth===void 0&&(l.dataset.ddcPrevDrawerWidth=l.style.getPropertyValue("--mdc-drawer-width")||""),t?l.style.setProperty("--mdc-drawer-width",l.dataset.ddcPrevDrawerWidth||""):l.style.setProperty("--mdc-drawer-width","0px");try{!t&&typeof l.close=="function"&&l.close()}catch{}}})}catch{}}_applyHaChromeVisibility_(){var t;try{let n=!!this.editMode||((t=this._isInHaEditorPreview)==null?void 0:t.call(this));n||!this.hideHaHeader?this._setHeaderVisible_(!0):this._setHeaderVisible_(!1),n||!this.hideHaSidebar?this._setSidebarVisible_(!0):this._setSidebarVisible_(!1)}catch{}}_applyBackgroundImageFromConfig(){var c;try{let s=navigator.userAgent||"";if(/iPad|iPhone|iPod/.test(s)&&n&&typeof n.src=="string"&&n.src.startsWith("data:")&&n.src.length>3e5){console.warn("[drag-and-drop-card] Skipping large inline background on iOS for stability.");return}}catch{}let t=this._config||{},n=t.background_image||t.bg_image||null,o=this.cardContainer;if(o)if(n&&n.src){let s=String(n.src).trim(),l=n.repeat===!0||n.repeat==="repeat"?"repeat":"no-repeat",u=Math.max(0,Math.min(1,Number((c=n.opacity)!=null?c:1))),f=n.size||"cover",y=n.position||"center center",m=n.attachment||"scroll",v=n.filter||"none";o.style.setProperty("--ddc-bg-image",s?`url("${s.replace(/"/g,'"')}")`:"none"),o.style.setProperty("--ddc-bg-repeat",l),o.style.setProperty("--ddc-bg-opacity",String(u)),o.style.setProperty("--ddc-bg-size",f),o.style.setProperty("--ddc-bg-position",y),o.style.setProperty("--ddc-bg-attachment",m),o.style.setProperty("--ddc-bg-filter",v),o.classList.add("has-bg-image")}else o.style.removeProperty("--ddc-bg-image"),o.style.removeProperty("--ddc-bg-repeat"),o.style.removeProperty("--ddc-bg-opacity"),o.style.removeProperty("--ddc-bg-size"),o.style.removeProperty("--ddc-bg-position"),o.style.removeProperty("--ddc-bg-attachment"),o.style.removeProperty("--ddc-bg-filter"),o.classList.remove("has-bg-image")}_applyBackgroundFromConfig(){var t,n,o,c,s,l,u,f;try{let y=((t=this._config)==null?void 0:t.background_mode)||((o=(n=this._config)==null?void 0:n.background_image)!=null&&o.src?"image":"none");if((c=this._destroyParticles_)==null||c.call(this),(s=this._destroyYouTube_)==null||s.call(this),y!=="image"){let m=this.cardContainer;m&&(m.style.removeProperty("--ddc-bg-image"),m.style.removeProperty("--ddc-bg-repeat"),m.style.removeProperty("--ddc-bg-opacity"),m.style.removeProperty("--ddc-bg-size"),m.style.removeProperty("--ddc-bg-position"),m.style.removeProperty("--ddc-bg-attachment"),m.style.removeProperty("--ddc-bg-filter"),m.classList.remove("has-bg-image"))}if(y==="image"){(l=this._applyBackgroundImageFromConfig)==null||l.call(this);return}if(y==="particles"){let m=((u=this._config)==null?void 0:u.background_particles)||{};this._attachParticlesBackground_(m);return}if(y==="youtube"){let m=((f=this._config)==null?void 0:f.background_youtube)||{};this._attachYouTubeBackground_(m);return}}catch(y){console.warn("[drag-and-drop-card] _applyBackgroundFromConfig failed:",y)}}_ensureBgHost_(){let t=this.cardContainer;if(!t)return null;let n=t.querySelector("#ddcBgHost");return n?n.innerHTML="":(n=document.createElement("div"),n.className="ddc-bg-host",n.id="ddcBgHost",n.setAttribute("aria-hidden","true"),t.prepend(n)),n}async _loadScriptOnce_(t){if(!t)throw new Error("script src required");if(this.__scriptCache||(this.__scriptCache=new Map),this.__scriptCache.has(t))return this.__scriptCache.get(t);let n=new Promise((o,c)=>{let s=document.createElement("script");s.src=t,s.async=!0,s.onload=()=>o(!0),s.onerror=()=>c(new Error("failed to load "+t)),document.head.appendChild(s)});return this.__scriptCache.set(t,n),n}_getRenderRoot_(){return this.renderRoot||this.shadowRoot||this}_withScopedDocument_(t){let n=this._getRenderRoot_();if(!n||n===document||!n.querySelector)return t();let o=document,c=o.getElementById.bind(o),s=o.querySelector?o.querySelector.bind(o):null;o.getElementById=l=>{try{let u=window.CSS&&CSS.escape?CSS.escape(String(l)):String(l);return n.querySelector("#"+u)||c(l)}catch{return c(l)}},s&&(o.querySelector=l=>{try{return n.querySelector(l)||s(l)}catch{return s(l)}});try{return t()}finally{o.getElementById=c,s&&(o.querySelector=s)}}async _ensureParticles_(){if(window.particlesJS)return!0;if(!this.__particlesLoadPromise){let t=n=>new Promise((o,c)=>{let s=document.createElement("script");s.src=n,s.async=!0,s.onload=()=>o(!0),s.onerror=()=>c(new Error("Failed to load "+n)),document.head.appendChild(s)});this.__particlesLoadPromise=t("/local/particles.min.js").catch(()=>t("https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js")).then(()=>!!window.particlesJS).catch(()=>!1)}return this.__particlesLoadPromise}_attachParticlesBackground_(t={}){var f,y;let n=(f=this._ensureBgHost_)==null?void 0:f.call(this);if(!n)return;try{(y=this._destroyParticles_)==null||y.call(this)}catch{}n.innerHTML="";let o=document.createElement("div");o.id="ddcParticles",o.className="particles-js",o.style.position="absolute",o.style.inset="0",n.appendChild(o);let c={particles:{number:{value:30,density:{enable:!0,value_area:1200}},color:{value:"#ffffff"},shape:{type:"circle"},opacity:{value:.35},size:{value:2.5,random:!0},line_linked:{enable:!1,distance:150,color:"#ffffff",opacity:.3,width:1},move:{enable:!0,speed:.7,out_mode:"out"}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1},onclick:{enable:!1},resize:!0},modes:{repulse:{distance:100},push:{particles_nb:3}}},retina_detect:!1},s=!!t.pointer_events,l=t.config||JSON.parse(JSON.stringify(c));s?(l.interactivity.events.onhover={enable:!0,mode:"repulse"},l.interactivity.events.onclick={enable:!0,mode:"push"},n.style.pointerEvents="auto"):n.style.pointerEvents="none",(async()=>{var w;if(!await((w=this._ensureParticles_)==null?void 0:w.call(this))||!window.particlesJS)return;await(typeof requestAnimationFrame=="function"?new Promise(S=>requestAnimationFrame(()=>S())):Promise.resolve()),await(typeof requestAnimationFrame=="function"?new Promise(S=>requestAnimationFrame(()=>S())):Promise.resolve());let v=l;if(t.config_url)try{v=await(await fetch(t.config_url,{cache:"no-store"})).json()}catch(S){console.warn("[drag-and-drop-card] Failed to fetch particles config; falling back to defaults",S),v=l}this._withScopedDocument_(()=>{if(!Array.isArray(window.pJSDom))try{window.pJSDom=[]}catch{}window.particlesJS("ddcParticles",v)}),Array.isArray(window.pJSDom)&&window.pJSDom.length&&(this.__particlesInst=window.pJSDom[window.pJSDom.length-1])})(),this.__particlesHost=n}_destroyParticles_(){try{Array.isArray(window.pJSDom)||(window.pJSDom=[]),window.pJSDom.length&&(window.pJSDom.forEach(t=>{var n,o,c,s,l,u,f,y;try{(s=(c=(o=(n=t.pJS)==null?void 0:n.fn)==null?void 0:o.vendors)==null?void 0:c.destroy)==null||s.call(c)}catch{}try{(y=(f=(u=(l=t.pJS)==null?void 0:l.fn)==null?void 0:u.vendors)==null?void 0:f.destroypJS)==null||y.call(f)}catch{}}),window.pJSDom.length=0)}catch{}this.__particlesHost&&(this.__particlesHost.innerHTML=""),this.__particlesHost=null,this.__particlesInst=null}_parseYouTubeId_(t){if(!t)return null;let n=String(t).trim(),o=n.match(/(?:youtube\.com\/.*[?&]v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([A-Za-z0-9_-]{11})/)||n.match(/^([A-Za-z0-9_-]{11})$/);return o?o[1]:null}async _ensureYouTube_(){var t;return(t=window.YT)!=null&&t.Player?!0:(this.__ytReadyPromise||(this.__ytReadyPromise=new Promise(n=>{var s;let o=()=>n(!0);if((s=window.YT)!=null&&s.Player)return o();window.onYouTubeIframeAPIReady=o;let c=document.createElement("script");c.src="https://www.youtube.com/iframe_api",c.async=!0,c.onerror=()=>n(!1),document.head.appendChild(c)})),this.__ytReadyPromise)}_attachYouTubeIframeDirect_(t,n,{start:o,end:c,mute:s=!0,loop:l=!0}={}){var m;let u=new URLSearchParams({autoplay:"1",mute:s?"1":"0",controls:"0",playsinline:"1",rel:"0",modestbranding:"1",iv_load_policy:"3",loop:l?"1":"0"});l&&u.set("playlist",n),Number.isFinite(o)&&u.set("start",String(o)),Number.isFinite(c)&&u.set("end",String(c));let f=`https://www.youtube.com/embed/${n}?${u.toString()}`,y=document.createElement("iframe");y.src=f,y.setAttribute("frameborder","0"),y.setAttribute("allow","autoplay; encrypted-media; picture-in-picture; fullscreen"),y.setAttribute("allowfullscreen","true"),y.style.position="absolute",y.style.inset="0",y.style.width="100%",y.style.height="100%",t.appendChild(y),this.__ytWrap=t,(m=this._layoutYtBackground_)==null||m.call(this)}_attachYouTubeBackground_(t={}){this.__ytSize=t.size||"cover",this.__ytPosition=t.position||"center",this.__ytOpacity=t.opacity!=null?Math.max(0,Math.min(1,Number(t.opacity))):1,this.__ytAttachment=t.attachment||"scroll";let n=String(this.__ytPosition).toLowerCase(),o=.5,c=.5;n.includes("left")?o=0:n.includes("right")&&(o=1),n.includes("top")?c=0:n.includes("bottom")&&(c=1),(n==="center"||n==="centre"||n==="middle")&&(o=.5,c=.5),this.__ytAx=o,this.__ytAy=c;let s=this._ensureBgHost_();if(!s)return;let l=this._parseYouTubeId_(t.video_id||t.url);if(!l){console.warn("[drag-and-drop-card] No YouTube video id");return}let u=document.createElement("div");u.className="yt-bg",this.__ytAttachment==="fixed"?(u.style.position="fixed",u.style.left="0",u.style.top="0",u.style.width="100%",u.style.height="100%"):(u.style.position="absolute",u.style.inset="0"),u.style.opacity=String(this.__ytOpacity),u.style.filter="none",u.style.pointerEvents="none",s.appendChild(u);let f=document.createElement("div");f.id="ddcYtFrame",f.style.position="absolute",f.style.left="0",f.style.top="0",f.style.width="100%",f.style.height="100%",u.appendChild(f);let y=Number.isFinite(t.start)?Number(t.start):void 0,m=Number.isFinite(t.end)?Number(t.end):void 0,v=t.mute!==!1,w=t.loop!==!1;(async()=>{if(!await this._ensureYouTube_()||!(window.YT&&window.YT.Player)){if(this._attachYouTubeIframeDirect_(u,l,{start:y,end:m,mute:v,loop:w}),!this.__ytResizeObs){this.__ytResizeObs=new ResizeObserver(()=>{var T;return(T=this._layoutYtBackground_)==null?void 0:T.call(this)});try{this.__ytResizeObs.observe(this.cardContainer)}catch{}window.addEventListener("resize",this.__ytOnWinResize=()=>{var T;return(T=this._layoutYtBackground_)==null?void 0:T.call(this)})}return}if(this.__ytPlayer=new window.YT.Player(f,{width:"100%",height:"100%",videoId:l,playerVars:{autoplay:1,controls:0,disablekb:1,fs:0,iv_load_policy:3,modestbranding:1,rel:0,playsinline:1,loop:w?1:0,playlist:w?l:void 0,start:y,end:m},events:{onReady:T=>{var R;try{v&&T.target.mute(),T.target.playVideo()}catch{}(R=this._layoutYtBackground_)==null||R.call(this)},onStateChange:T=>{if(T.data===window.YT.PlayerState.ENDED&&w)try{let R=Number.isFinite(y)?y:0,C=window.performance&&performance.now?performance.now():Date.now();(!this.__ytLastLoopAt||C-this.__ytLastLoopAt>1500)&&(this.__ytLastLoopAt=C,T.target.seekTo(R,!0),T.target.playVideo())}catch{}}}}),!this.__ytResizeObs){this.__ytResizeObs=new ResizeObserver(()=>{var T;return(T=this._layoutYtBackground_)==null?void 0:T.call(this)});try{this.__ytResizeObs.observe(this.cardContainer)}catch{}window.addEventListener("resize",this.__ytOnWinResize=()=>{var T;return(T=this._layoutYtBackground_)==null?void 0:T.call(this)})}})(),this.__ytWrap=u}_layoutYtBackground_(){var t,n,o,c,s,l,u,f;try{if(!this.__ytWrap)return;let y=this.__scaleOuter||this.cardContainer,m=0,v=0;try{m=parseFloat((n=(t=this.cardContainer)==null?void 0:t.style)==null?void 0:n.width)||((o=this.cardContainer)==null?void 0:o.scrollWidth)||((c=this.cardContainer)==null?void 0:c.offsetWidth)||0,v=parseFloat((l=(s=this.cardContainer)==null?void 0:s.style)==null?void 0:l.height)||((u=this.cardContainer)==null?void 0:u.scrollHeight)||((f=this.cardContainer)==null?void 0:f.offsetHeight)||0}catch{}let w,S;try{if(String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"){let V=y.getBoundingClientRect();if(w=V.width,m>0){let U=Math.min(w/m,1);S=v*U}else S=V.height}else w=m||y.getBoundingClientRect().width,S=v||y.getBoundingClientRect().height}catch{let B=y.getBoundingClientRect();w=B.width,S=B.height}let _=this.__ytAttachment==="fixed",T=_&&window.innerWidth||w,R=_&&window.innerHeight||S;if(!w||!S)return;let C=this.__ytSize||"cover",O=16/9,z=_?T/R:w/S,b,L,I=0,F=0;C==="100% 100%"||C==="fill"||C==="stretch"?(b=_?T:w,L=_?R:S,I=0,F=0):C==="contain"?z>O?(L=_?R:S,b=(_?R:S)*O,F=0,I=(w-b)/2):(b=_?T:w,L=(_?T:w)/O,I=0,F=(S-L)/2):z>O?(b=_?T:w,L=(_?T:w)/O,I=0,F=(S-L)/2):(L=_?R:S,b=(_?R:S)*O,F=0,I=(w-b)/2),this.__ytWrap.style.overflow="hidden";let N=this.__ytAx!=null?this.__ytAx:.5,H=this.__ytAy!=null?this.__ytAy:.5;I=((_?T:w)-b)*N,F=((_?R:S)-L)*H;let Q=this.__ytWrap.querySelector("iframe")||this.__ytWrap;Q.style.width=`${b}px`,Q.style.height=`${L}px`,Q.style.left=`${I}px`,Q.style.top=`${F}px`}catch{}}_destroyYouTube_(){var t,n,o;try{(n=(t=this.__ytPlayer)==null?void 0:t.destroy)==null||n.call(t)}catch{}if(this.__ytPlayer=null,this.__ytResizeObs){try{this.__ytResizeObs.disconnect()}catch{}this.__ytResizeObs=null}this.__ytOnWinResize&&(window.removeEventListener("resize",this.__ytOnWinResize),this.__ytOnWinResize=null),(o=this.__ytWrap)!=null&&o.parentNode&&this.__ytWrap.parentNode.removeChild(this.__ytWrap),this.__ytWrap=null}_evaluateVisibility_(t){try{let n=this.hass||this._hass;if(!Array.isArray(t)||t.length===0)return!0;let o=c=>{var l,u,f,y,m;if(!c||typeof c!="object")return!0;let s=c.condition||c.type||"state";if(s==="and"||s==="or"){let v=Array.isArray(c.conditions)?c.conditions:[];return v.length===0?!0:s==="and"?v.every(w=>o(w)):v.some(w=>o(w))}if(s==="state"){let v=c.entity;if(!v)return!0;let w=(l=n==null?void 0:n.states)==null?void 0:l[v];if(!w)return!1;let S=String((u=w.state)!=null?u:"");return c.state!==void 0?(Array.isArray(c.state)?c.state:[c.state]).some(T=>String(T)===S):c.state_not!==void 0?!(Array.isArray(c.state_not)?c.state_not:[c.state_not]).some(T=>String(T)===S):!0}if(s==="numeric_state"){let v=c.entity;if(!v)return!0;let w=(f=n==null?void 0:n.states)==null?void 0:f[v];if(!w)return!1;let S=parseFloat(w.state);return!(isNaN(S)||c.above!==void 0&&!(S>Number(c.above))||c.below!==void 0&&!(S<Number(c.below)))}if(s==="screen"){let v=c.media_query||c.query;if(!v||typeof v!="string")return!0;try{return window.matchMedia(v).matches}catch{return!0}}if(s==="user"){let v=Array.isArray(c.users)?c.users:c.user?[c.user]:[];if(!v.length)return!0;let w=((y=n==null?void 0:n.user)==null?void 0:y.id)||((m=n==null?void 0:n.user)==null?void 0:m.id)||null;return w?v.includes(w):!0}return!0};return t.every(c=>o(c))}catch(n){return console.warn("[ddc:visibility] evaluate error",n),!0}}_applyVisibility_(){var t;try{let n=((t=this.cardContainer)==null?void 0:t.children)||[],o=this._normalizeTabId(this.activeTab);for(let c of n){if(!c||!c.firstElementChild||this._normalizeTabId(c.dataset.tabId)!==o)continue;let u=(this._extractCardConfig(c.firstElementChild)||{}).visibility,f=this.editMode?!0:this._evaluateVisibility_(u);c.style.display=f?"":"none"}}catch(n){console.warn("[ddc:visibility] apply error",n)}}async _onKeyDown_(t){var l,u,f,y,m,v,w,S,_,T;if(!this.editMode||this._isTypingTarget_(t.target))return;let n=Number(this.gridSize||10),o=t.altKey?1:t.shiftKey?n*5:n,c=0,s=0;switch(t.key){case"ArrowLeft":c=-o;break;case"ArrowRight":c=o;break;case"ArrowUp":s=-o;break;case"ArrowDown":s=o;break}if(c||s){t.preventDefault(),this._moveSelectionBy_(c,s,{liveSnap:!t.altKey});return}if(t.key==="Delete"||t.key==="Backspace"){let R=this._selection&&this._selection.size?Array.from(this._selection):[];if(!R.length)return;t.preventDefault(),R.forEach(C=>C.remove()),(l=this._clearSelection)==null||l.call(this),(u=this._resizeContainer)==null||u.call(this),(f=this._queueSave)==null||f.call(this,"delete-key"),(y=this._ensurePlaceholderIfEmpty)==null||y.call(this);return}if((t.ctrlKey||t.metaKey)&&(t.key==="d"||t.key==="D")){t.preventDefault(),await this._duplicateSelection_();return}if((t.ctrlKey||t.metaKey)&&t.key==="]"){t.preventDefault(),this._selection&&((v=(m=this._selection).forEach)==null||v.call(m,R=>{var C;return(C=this._adjustZ)==null?void 0:C.call(this,R,1)})),(w=this._queueSave)==null||w.call(this,"z-up");return}if((t.ctrlKey||t.metaKey)&&t.key==="["){t.preventDefault(),this._selection&&((_=(S=this._selection).forEach)==null||_.call(S,R=>{var C;return(C=this._adjustZ)==null?void 0:C.call(this,R,-1)})),(T=this._queueSave)==null||T.call(this,"z-down");return}}async _duplicateSelection_(){var n,o,c,s,l,u,f,y,m,v,w,S;if(!this._selection||!this._selection.size)return;let t=Array.from(this._selection);for(let _ of t)try{let T=((n=this._extractCardConfig)==null?void 0:n.call(this,_.firstElementChild))||{},R=await((o=this._createCard)==null?void 0:o.call(this,T)),C=(c=this._makeWrapper)==null?void 0:c.call(this,R);if(!R||!C)continue;C.style.width=_.style.width,C.style.height=_.style.height;let O=Number(this.gridSize||10),z=(parseFloat(_.getAttribute("data-x"))||0)+O,b=(parseFloat(_.getAttribute("data-y"))||0)+O;(s=this._setCardPosition)==null||s.call(this,C,z,b);let L=(((l=this._highestZ)==null?void 0:l.call(this))||0)+1;C.style.zIndex=String(Math.max(L,6));try{let I=(u=_.dataset)==null?void 0:u.tabId;I&&(C.dataset.tabId=I)}catch{}(f=this.cardContainer)==null||f.appendChild(C);try{(y=this._addTabSelectorToChip)==null||y.call(this,C,C.dataset.tabId)}catch{}try{(m=this._rebuildOnce)==null||m.call(this,C.firstElementChild)}catch{}try{(v=this._initCardInteract)==null||v.call(this,C)}catch{}}catch{}try{(w=this._resizeContainer)==null||w.call(this)}catch{}try{(S=this._queueSave)==null||S.call(this,"duplicate")}catch{}}_moveSelectionBy_(t,n,{liveSnap:o=!0}={}){var y,m,v,w,S;if(!this._selection||!this._selection.size)return;let c=Array.from(this._selection),s=Number(this.gridSize||10),l=(y=this._isContainerFixed)==null?void 0:y.call(this),u=((m=this._getContainerSize)==null?void 0:m.call(this))||{w:1/0,h:1/0},f=c.map(_=>{let T=parseFloat(_.getAttribute("data-x-raw"))||parseFloat(_.getAttribute("data-x"))||0,R=parseFloat(_.getAttribute("data-y-raw"))||parseFloat(_.getAttribute("data-y"))||0,C=parseFloat(_.style.width)||_.getBoundingClientRect().width,O=parseFloat(_.style.height)||_.getBoundingClientRect().height,z=T+t,b=R+n;l&&(z=Math.max(0,Math.min(z,Math.max(0,u.w-C))),b=Math.max(0,Math.min(b,Math.max(0,u.h-O))));let L=o?Math.round(z/s)*s:z,I=o?Math.round(b/s)*s:b;return{el:_,rawX:z,rawY:b,snapX:L,snapY:I,w:C,h:O}});if(this.disableOverlap&&typeof this._pushCardsOutOfTheWay=="function")try{this._pushCardsOutOfTheWay(f,t,n,o,s)}catch{}for(let _ of f){_.el.setAttribute("data-x-raw",String(_.rawX)),_.el.setAttribute("data-y-raw",String(_.rawY));try{(v=this._setCardPosition)==null||v.call(this,_.el,_.snapX,_.snapY)}catch{}}try{(w=this._resizeContainer)==null||w.call(this)}catch{}try{(S=this._queueSave)==null||S.call(this,"nudge")}catch{}}_syncTabsWidth_(){var t;try{if(String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto")return;let o=this.tabsBar;if(!o)return;try{let l=window.innerWidth||((t=document.documentElement)==null?void 0:t.clientWidth)||0;if(l&&l<=768){o.style.width="",o.style.maxWidth="";return}}catch{}if(this.tabsPosition==="left"){o.style.width="",o.style.maxWidth="";return}let c=this.cardContainer||this.__scaleOuter;if(!c)return;let s=0;try{let l=c.getBoundingClientRect();s=l&&l.width?l.width:0}catch{}if(s<=0&&this.__scaleOuter&&this.__scaleOuter!==c)try{let l=this.__scaleOuter.getBoundingClientRect();s=l&&l.width?l.width:0}catch{}s>0&&(o.style.width=`${s}px`,o.style.maxWidth=`${s}px`)}catch{}}_isTypingTarget_(t){var c,s,l,u;if(!t||t===window||t===document)return!1;let n=(c=t.closest)==null?void 0:c.call(t,'input, textarea, [contenteditable="true"], ha-textfield, mwc-textfield');if(!n)return!1;let o=((l=(s=n.tagName)==null?void 0:s.toLowerCase)==null?void 0:l.call(s))||"";return o==="input"||o==="textarea"||((u=n.hasAttribute)==null?void 0:u.call(n,"contenteditable"))}_scheduleReflowAndScale(){this.__reflowRAF||(this.__reflowRAF=requestAnimationFrame(()=>{var t,n,o;this.__reflowRAF=null;try{(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="dynamic"&&((t=this._resizeContainer)==null||t.call(this))}catch{}try{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(n=this._applyAutoFillNoScale)==null||n.call(this):(o=this._applyAutoScale)==null||o.call(this)}catch{}}))}__ddcBindPointerListeners(){if(!this.__ddcPtrBound){this.__ddcPtrBound=!0,this.__onDDCPointerDown=t=>{var n,o;try{if(t.button!==void 0&&t.button!==0)return;let c=((n=t.composedPath)==null?void 0:n.call(t))||[],s=null;for(let l of c)if(l&&l.classList&&l.classList.contains("card-wrapper")){s=l;break}if(!s)return;this.__ddcDragging=!0,this.__scaleOuter&&(this.__prevOverflow=this.__scaleOuter.style.overflow,this.__scaleOuter.style.overflow="visible"),(o=this._scheduleReflowAndScale)==null||o.call(this)}catch{}},this.__onDDCPointerMove=t=>{var n;try{if(!this.__ddcDragging)return;(n=this._scheduleReflowAndScale)==null||n.call(this)}catch{}},this.__onDDCPointerUp=t=>{var n,o;try{if(!this.__ddcDragging)return;this.__ddcDragging=!1,this.__scaleOuter&&(this.__scaleOuter.style.overflow=this.__prevOverflow||"");try{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(n=this._applyAutoFillNoScale)==null||n.call(this):(o=this._applyAutoScale)==null||o.call(this)}catch{}}catch{}};try{this.addEventListener("pointerdown",this.__onDDCPointerDown,{passive:!0})}catch{}try{this.addEventListener("pointermove",this.__onDDCPointerMove,{passive:!0})}catch{}try{window.addEventListener("pointerup",this.__onDDCPointerUp,{passive:!0})}catch{}try{window.addEventListener("pointercancel",this.__onDDCPointerUp,{passive:!0})}catch{}}}_renderEditToolbar_(){this.shadowRoot.querySelectorAll(".ddc-toolbar").forEach(v=>v.remove()),this._ensureToolbarStyles_();let t=document.createElement("div");t.className="ddc-toolbar";let n=document.createElement("div");n.className="ddc-t-group",n.append(this._mkBtn_("add_card","mdi:plus-box","Add card (A)","primary"),this._mkBtn_("snap_toggle","mdi:magnet","Toggle snap (G)"),this._mkBtn_("align_grid","mdi:grid","Align to grid"));let o=document.createElement("div");o.className="ddc-t-group";let c=document.createElement("div");c.className="ddc-t-status";let s=document.createElement("div");s.className="ddc-t-dot"+(this.__dirty?" dirty":"");let l=document.createElement("span");l.textContent=this.__dirty?"Unsaved changes":`Saved${this.__lastSavedAt?" \xB7 "+this.__lastSavedAt:""}`,c.append(s,l),o.appendChild(c);let u=document.createElement("div");u.className="ddc-t-group",u.append(this._mkBtn_("reload","mdi:refresh","Reload (R)","ghost"),this._mkBtn_("open_hads","mdi:alpha-h-box-outline","Open HACS/HADS","ghost"),this._mkBtn_("apply","mdi:content-save","Apply / Save (S)","primary"),this._mkBtn_("exit_edit","mdi:logout-variant","Exit edit (Esc)","danger"));let f=document.createElement("div");f.className="ddc-t-group ddc-t-row",f.append(n);let y=document.createElement("div");y.className="ddc-t-group ddc-t-row",y.append(o);let m=document.createElement("div");m.className="ddc-t-group ddc-t-row",m.append(u),t.append(f,document.createElement("div")).lastChild.className="ddc-t-sep",t.append(y,document.createElement("div")).lastChild.className="ddc-t-sep",t.append(m),t.addEventListener("click",v=>{let w=v.target.closest("[data-action]");w&&this._onToolbarAction_(w.dataset.action,{button:w,bar:t,dot:s,txt:l})}),this.shadowRoot.appendChild(t);try{this.__toolbarRO&&this.__toolbarRO.disconnect(),this.__toolbarRO=new ResizeObserver(v=>{for(let w of v)t.classList.toggle("compact",w.contentRect.width<980)}),this.__toolbarRO.observe(t)}catch{}this.__toolbarKeyHandler=v=>{if(!(!this.editMode&&!this.isEditing)){if(v.key==="a"||v.key==="A")return this._onToolbarAction_("add_card");if(v.key==="s"||v.key==="S")return this._onToolbarAction_("apply");if(v.key==="r"||v.key==="R")return this._onToolbarAction_("reload");if(v.key==="g"||v.key==="G")return this._onToolbarAction_("snap_toggle");if(v.key==="Escape")return this._onToolbarAction_("exit_edit")}},window.addEventListener("keydown",this.__toolbarKeyHandler)}async _onToolbarAction_(t,n={}){var o,c,s,l,u,f,y,m,v,w,S;switch(t){case"add_card":(o=this._openAddCardDialog_)!=null&&o.call(this)||(c=this._addNewCard_)!=null&&c.call(this)||((s=this._openEntityPicker_)==null||s.call(this));break;case"snap_toggle":{this.dragLiveSnap=!this.dragLiveSnap,(l=this._initInteract)==null||l.call(this),(u=this._toast_)==null||u.call(this,`Live snap ${this.dragLiveSnap?"ON":"OFF"}`);break}case"align_grid":(f=this._alignAllToGrid_)==null||f.call(this,this.gridSize);break;case"reload":(y=this._reloadLayout_)==null||y.call(this);break;case"open_hads":(m=this._openHACS_)!=null&&m.call(this)||window.open("/hacs","_blank")||window.open("/hacsfiles","_blank");break;case"apply":{let _=()=>{this._setDirty_(!1),n!=null&&n.txt&&(n.txt.textContent=`Saved \xB7 ${this.__lastSavedAt}`),n!=null&&n.dot&&n.dot.classList.remove("dirty","error")},T=()=>{n!=null&&n.dot&&n.dot.classList.add("error")};try{this._saveLayoutNow_?await this._saveLayoutNow_():this._persistThisCardConfigToStorage_?await this._persistThisCardConfigToStorage_():(v=this._queueSave)==null||v.call(this,"toolbar-apply",!0),this.__lastSavedAt=new Date().toLocaleTimeString(),_()}catch(R){console.warn(R),T()}break}case"exit_edit":if((w=this._toggleEditMode)!=null&&w.call(this,!1)||(S=this._exitEditMode_)!=null&&S.call(this)||(this.isEditing=!1),this.__toolbarKeyHandler&&(window.removeEventListener("keydown",this.__toolbarKeyHandler),this.__toolbarKeyHandler=null),this.__toolbarRO){try{this.__toolbarRO.disconnect()}catch{}this.__toolbarRO=null}this.shadowRoot.querySelectorAll(".ddc-toolbar").forEach(_=>_.remove());break}}_ensureScaleWrapper(){let t=this.cardContainer;if(!t||this.__scaleOuter&&this.__scaleOuter.contains(t))return;let n=document.createElement("div");n.className="ddc-scale-outer",Object.assign(n.style,{position:"relative",width:"100%",overflow:"hidden"}),t.parentNode&&(t.parentNode.insertBefore(n,t),n.appendChild(t)),Object.assign(t.style,{position:"absolute",top:"0",left:"0",transformOrigin:"top left"}),this.__scaleOuter=n}_hasCardModDeep(t){try{if(!t||typeof t!="object")return!1;if(t.card_mod||t.type==="custom:mod-card")return!0;if(t.card)return this._hasCardModDeep(t.card);if(Array.isArray(t.cards)){for(let n of t.cards)if(this._hasCardModDeep(n))return!0}return!1}catch{return!1}}_rebuildOnce(t){try{if(!t||(this.__rebuiltCards||(this.__rebuiltCards=new WeakSet),this.__rebuiltCards.has(t)))return;this.__rebuiltCards.add(t),t.dispatchEvent(new Event("ll-rebuild",{bubbles:!0,composed:!0}))}catch{}}_deepQueryAll(t,n=document){let o=[],c=s=>{if(!s)return;if(s.querySelectorAll)try{s.querySelectorAll(t).forEach(f=>o.push(f))}catch{}let l=document.createTreeWalker(s,NodeFilter.SHOW_ELEMENT,null),u=s;for(;u;){let f=u.shadowRoot;f&&c(f),u=l.nextNode()}};return c(n),o}_syncEditorsStorageKey(){try{let t=this.storageKey||"";this._deepQueryAll("#storage_key").forEach(o=>{try{o&&o.tagName==="INPUT"&&o.value!==t&&(o.value=t,o.dispatchEvent(new Event("input",{bubbles:!0})),o.dispatchEvent(new Event("change",{bubbles:!0})))}catch{}})}catch{}}static _genKey(){var n,o;return`layout_${((o=(n=globalThis.crypto)==null?void 0:n.randomUUID)==null?void 0:o.call(n))||`${Date.now().toString(36)}_${Math.random().toString(36).slice(2,8)}`}`}static get type(){return"drag-and-drop-card"}static get title(){return"Drag & Drop Card"}static get description(){return"Flexible grid layout card with drag\u2011and\u2011drop editing."}static get icon(){return"mdi:cursor-move"}static get group(){return"custom"}static getStubConfig(){return{type:"custom:drag-and-drop-card",storage_key:this._genKey(),grid:20,drag_live_snap:!0,auto_save:!0,auto_save_debounce:800,container_size_mode:"auto",container_background:"linear-gradient(135deg, #1e3a8a, #0ea5e9)",card_background:"linear-gradient(135deg, #111827, #1f2937)",debug:!1,disable_overlap:!1,auto_resize_cards:!0,background_mode:"none",animate_cards:!0,container_preset_orientation:"auto",edit_mode_pin:"",container_fixed_width:null,container_fixed_height:null,container_preset:"fullhd",card_shadow:!0,hide_HA_Header:!1,hide_HA_Sidebar:!1,screen_saver_enabled:!0,screen_saver_delay:15e5,tabs:[{id:"home",label:"Home",icon:"mdi:home",label_mode:"both"}],default_tab:"home"}}static getConfigElement(){let t=document.createElement("div");t.style.display="grid",t.style.gridTemplateColumns="1fr",t.style.rowGap="12px";let n=document.createElement("ha-textfield");n.id="storage_key",n.label="Storage key",n.placeholder="Auto-generated if left blank",t.appendChild(n);let o=document.createElement("div");return o.style.fontSize="0.85rem",o.style.opacity="0.7",o.textContent="Unique key for saving layout positions. Leave blank to auto\u2011generate.",t.appendChild(o),t.setConfig=(v={})=>{var w;t._config={type:v.type||"custom:drag-and-drop-card",...v},t._config.storage_key||(t._config.storage_key=`layout_${((w=crypto==null?void 0:crypto.randomUUID)==null?void 0:w.call(crypto))||Date.now().toString(36)}`),n.value=t._config.storage_key||""},t.getConfig=()=>{let v={...t._config||{}};return v.type="custom:drag-and-drop-card",v.storage_key=n.value||"",v},n.addEventListener("input",()=>{t.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t.getConfig()}}))}),t;let c=()=>{let v=y();u.disabled=!v},s=async()=>{var w,S;let v=el.getConfig();el.dispatchEvent(new CustomEvent("config-changed",{detail:{config:v}})),c();try{if(this.storageKey){let _=this._exportableOptions?this._exportableOptions():v;await this._saveOptionsToBackend(this.storageKey,_)}}catch{}try{await this._persistThisCardConfigToStorage_()}catch{try{let T=this._exportableOptions?this._exportableOptions():v;await((w=this._persistOptionsToYaml)==null?void 0:w.call(this,T,{patchAllInCurrentViewIfNoKey:!0}))}catch{}}try{(S=this._applyBackgroundFromConfig)==null||S.call(this)}catch{}},l=()=>{var w,S,_,T;let v=(T=(_=(w=el.querySelector("#sizeMode"))==null?void 0:w.value)!=null?_:(S=el.querySelector("#ddc-setting-sizeMode"))==null?void 0:S.value)!=null?T:"dynamic";el.querySelector("#sizeCustom").style.display=v==="fixed_custom"?"inline-flex":"none",el.querySelector("#sizePresetWrap").style.display=v==="preset"?"inline-flex":"none"},u=el.querySelector("#applyBtn"),f=el.querySelector("#revertBtn");["#sizeMode","#sizePreset","#sizeOrientation"].forEach(v=>{let w=el.querySelector(v);if(w){try{w.fixedMenuPosition=!0}catch{}w.addEventListener("closed",S=>S.stopPropagation())}}),el.setConfig=(v={})=>{var _,T,R,C,O,z,b,L;el._config={type:v.type||"custom:drag-and-drop-card",...v},el._config.storage_key||(el._config.storage_key=`layout_${((_=crypto==null?void 0:crypto.randomUUID)==null?void 0:_.call(crypto))||Date.now().toString(36)}`,el.__autokeyPending=!0),el.querySelector("#storage_key").value=el._config.storage_key||"",el.querySelector("#grid").value=(T=el._config.grid)!=null?T:10,el.querySelector("#liveSnap").checked=!!el._config.drag_live_snap,el.querySelector("#autoSave").checked=el._config.auto_save!==!1,el.querySelector("#autoSaveDebounce").value=(R=el._config.auto_save_debounce)!=null?R:800,el.querySelector("#containerBg").value=(C=el._config.container_background)!=null?C:"transparent",el.querySelector("#cardBg").value=(O=el._config.card_background)!=null?O:"var(--ha-card-background, var(--card-background-color))",el.querySelector("#debug").checked=!!el._config.debug,el.querySelector("#noOverlap").checked=!!el._config.disable_overlap,el.querySelector("#autoResize").checked=!!el._config.auto_resize_cards,el.querySelector("#animateCards").checked=!!el._config.animate_cards;let w=el.querySelector("#sizeMode")||el.querySelector("#ddc-setting-sizeMode");w&&(w.value=el._config.container_size_mode||"dynamic"),el.querySelector("#sizeW").value=(z=el._config.container_fixed_width)!=null?z:"",el.querySelector("#sizeH").value=(b=el._config.container_fixed_height)!=null?b:"",el.querySelector("#sizeOrientation").value=el._config.container_preset_orientation||"auto";let S=el.querySelector("#sizePreset");if(!S.__filled){let I=(((L=this._sizePresets)==null?void 0:L.call(this))||[]).reduce((F,N)=>{var H;return(F[H=N.group||"other"]||(F[H]=[])).push(N),F},{});S.innerHTML="";for(let[F,N]of Object.entries(I)){let H=document.createElement("optgroup");H.label=F.replace(/(^.|-.?)/g,B=>B.toUpperCase()),N.forEach(B=>{let V=document.createElement("mwc-list-item");V.value=B.key,V.textContent=`${B.label} (${B.w}\xD7${B.h})`,H.appendChild(V)});let Q=document.createElement("mwc-list-item");Q.setAttribute("disabled",""),Q.textContent=`\u2014 ${H.label} \u2014`,S.appendChild(Q),Array.from(H.children).forEach(B=>S.appendChild(B))}S.__filled=!0}el._config.container_preset&&(S.value=el._config.container_preset),l(),c(),el.__autokeyPending&&(el.__autokeyPending=!1,s())},el.getConfig=()=>{var w,S,_,T;let v={...el._config||{}};v.storage_key=el.querySelector("#storage_key").value||"",v.grid=Number(el.querySelector("#grid").value||10),v.drag_live_snap=!!el.querySelector("#liveSnap").checked,v.auto_save=!!el.querySelector("#autoSave").checked,v.auto_save_debounce=Number(el.querySelector("#autoSaveDebounce").value||800),v.container_background=el.querySelector("#containerBg").value||"transparent",v.card_background=el.querySelector("#cardBg").value||"var(--ha-card-background, var(--card-background-color))",v.debug=!!el.querySelector("#debug").checked,v.disable_overlap=!!el.querySelector("#noOverlap").checked,v.auto_resize_cards=!!el.querySelector("#autoResize").checked;try{let R=el.querySelector("#ddc-bg-mode"),C=el.querySelector("#ddc-setting-bgImg"),O=el.querySelector("#ddc-bg-repeat"),z=el.querySelector("#ddc-bg-size"),b=el.querySelector("#ddc-bg-position"),L=el.querySelector("#ddc-bg-attachment"),I=el.querySelector("#ddc-bg-opacity"),F=el.querySelector("#ddc-particles-url"),N=el.querySelector("#ddc-particles-pointer"),H=el.querySelector("#ddc-youtube-url"),Q=el.querySelector("#ddc-youtube-start"),B=el.querySelector("#ddc-youtube-end"),V=el.querySelector("#ddc-youtube-mute"),U=el.querySelector("#ddc-youtube-loop"),de=el.querySelector("#ddc-youtube-size"),_e=el.querySelector("#ddc-youtube-position"),Re=el.querySelector("#ddc-youtube-attachment"),re=el.querySelector("#ddc-youtube-opacity"),ze=(R==null?void 0:R.value)||"none";v.background_mode=ze;let pe=De=>Math.max(0,Math.min(1,De)),He=De=>{let Ue=parseFloat((De==null?void 0:De.value)||"100");return Number.isFinite(Ue)?pe(Ue/100):1},Ye=De=>Object.fromEntries(Object.entries(De).filter(([,Ue])=>Ue!=null&&Ue!==""));if(ze==="image"){let De=((C==null?void 0:C.value)||"").trim();v.background_image=Ye({src:De||void 0,repeat:(O==null?void 0:O.value)||"no-repeat",size:(z==null?void 0:z.value)||"cover",position:(b==null?void 0:b.value)||"center center",attachment:(L==null?void 0:L.value)||"scroll",opacity:He(I)})}if(ze==="particles"&&(v.background_particles=Ye({config_url:((F==null?void 0:F.value)||"").trim()||void 0,pointer_events:!!(N!=null&&N.checked)})),ze==="youtube"){let De=Ue=>{let ot=parseInt(((Ue==null?void 0:Ue.value)||"").trim(),10);return Number.isFinite(ot)?ot:void 0};v.background_youtube=Ye({url:((H==null?void 0:H.value)||"").trim()||void 0,start:De(Q),end:De(B),mute:!!(V!=null&&V.checked),loop:!!(U!=null&&U.checked),size:(de==null?void 0:de.value)||"cover",position:(_e==null?void 0:_e.value)||"center center",attachment:(Re==null?void 0:Re.value)||"scroll",opacity:He(re)})}ze!=="image"&&delete v.background_image,ze!=="particles"&&delete v.background_particles,ze!=="youtube"&&delete v.background_youtube}catch{}return v.animate_cards=!!el.querySelector("#animateCards").checked,v.container_size_mode=(T=(_=(w=el.querySelector("#sizeMode"))==null?void 0:w.value)!=null?_:(S=el.querySelector("#ddc-setting-sizeMode"))==null?void 0:S.value)!=null?T:"dynamic",v.container_fixed_width=Number(el.querySelector("#sizeW").value||0)||void 0,v.container_fixed_height=Number(el.querySelector("#sizeH").value||0)||void 0,v.container_preset=el.querySelector("#sizePreset").value||void 0,v.container_preset_orientation=el.querySelector("#sizeOrientation").value||"auto",v};let y=()=>{let v=el.getConfig(),w=el._config||{};try{return JSON.stringify(v)!==JSON.stringify(w)}catch{return!0}},m=(v,w="input")=>{var S;return(S=el.querySelector(v))==null?void 0:S.addEventListener(w,()=>{v==="#sizeMode"&&l(),c()})};return m("#storage_key"),m("#grid"),m("#liveSnap","change"),m("#autoSave","change"),m("#autoSaveDebounce"),m("#containerBg"),m("#cardBg"),m("#debug","change"),m("#noOverlap","change"),m("#autoResize","change"),m("#animateCards","change"),m("#sizeMode","change"),m("#ddc-setting-sizeMode","change"),m("#sizeW"),m("#sizeH"),m("#sizePreset","selected"),m("#sizeOrientation","selected"),u==null||u.addEventListener("click",()=>{s()}),f==null||f.addEventListener("click",()=>el.setConfig(el._config)),el}static _sizePresets(){return[{key:"iphone-14-pro",label:"iPhone 14 Pro",w:393,h:852,group:"phone"},{key:"iphone-14-pro-max",label:"iPhone 14 Pro Max",w:430,h:932,group:"phone"},{key:"iphone-se-2",label:"iPhone SE (2/3rd gen)",w:375,h:667,group:"phone"},{key:"pixel-7",label:"Pixel 7",w:412,h:915,group:"phone"},{key:"galaxy-s8",label:"Galaxy S8",w:360,h:740,group:"phone"},{key:"galaxy-s20-ultra",label:"Galaxy S20 Ultra",w:412,h:915,group:"phone"},{key:"ipad-9-7",label:'iPad 9.7"',w:768,h:1024,group:"tablet"},{key:"ipad-11-pro",label:'iPad Pro 11"',w:834,h:1194,group:"tablet"},{key:"ipad-12-9-pro",label:'iPad Pro 12.9"',w:1024,h:1366,group:"tablet"},{key:"surface-go-3",label:"Surface Go 3",w:800,h:1280,group:"tablet"},{key:"hd",label:"HD",w:1366,h:768,group:"desktop"},{key:"wxga-plus",label:"WXGA+",w:1440,h:900,group:"desktop"},{key:"fhd",label:"Full HD",w:1920,h:1080,group:"desktop"},{key:"qhd",label:"2K / QHD",w:2560,h:1440,group:"desktop"},{key:"uhd-4k",label:"4K UHD",w:3840,h:2160,group:"desktop"}]}_isContainerFixed(){return this.containerSizeMode==="fixed_custom"||this.containerSizeMode==="preset"||this.containerSizeMode==="fixed"}_resolveFixedSize(){if(this.containerSizeMode==="fixed_custom"){let t=Math.max(100,Number(this.containerFixedWidth||0)),n=Math.max(100,Number(this.containerFixedHeight||0));return{w:t,h:n}}if(this.containerSizeMode==="preset"){let t=e._sizePresets().find(c=>c.key===this.containerPreset)||e._sizePresets().find(c=>c.key==="fhd");if(!t)return{w:1920,h:1080};let n=t.w,o=t.h;return this.containerPresetOrient==="portrait"&&n>o&&([n,o]=[o,n]),this.containerPresetOrient==="landscape"&&o>n&&([n,o]=[o,n]),{w:n,h:o}}return null}_applyContainerSizingFromConfig(t=!1){var o,c;let n=this.cardContainer;if(n)if(this._isContainerFixed()){let{w:s,h:l}=this._resolveFixedSize();n.style.width=`${s}px`,n.style.height=`${l}px`,n.style.overflow="hidden",t||(o=this._dbgPush)==null||o.call(this,"size","Applied fixed size",{w:s,h:l,mode:this.containerSizeMode,preset:this.containerPreset,orient:this.containerPresetOrient}),this._clampAllCardsInside()}else n.style.overflow="hidden",t||(c=this._dbgPush)==null||c.call(this,"size","Applied dynamic size"),this._resizeContainer()}_getContainerSize(){let t=this.cardContainer;if(!t)return{w:0,h:0};let n=parseFloat(getComputedStyle(t).width)||t.getBoundingClientRect().width,o=parseFloat(getComputedStyle(t).height)||t.getBoundingClientRect().height;return{w:n,h:o}}_clampAllCardsInside(){if(!this._isContainerFixed())return;let{w:t,h:n}=this._getContainerSize();this.cardContainer.querySelectorAll(".card-wrapper").forEach(c=>{let s=parseFloat(c.getAttribute("data-x"))||0,l=parseFloat(c.getAttribute("data-y"))||0,u=parseFloat(c.style.width)||c.getBoundingClientRect().width,f=parseFloat(c.style.height)||c.getBoundingClientRect().height,y=Math.max(0,Math.min(s,Math.max(0,t-u))),m=Math.max(0,Math.min(l,Math.max(0,n-f))),v=Math.min(u,t),w=Math.min(f,n);(v!==u||w!==f)&&(c.style.width=`${v}px`,c.style.height=`${w}px`);let S=Math.max(0,Math.min(y,Math.max(0,t-v))),_=Math.max(0,Math.min(m,Math.max(0,n-w)));this._setCardPosition(c,S,_)})}_computeHaSidebarGutters_(){var o;let t=56;try{let c=document.querySelector("home-assistant"),s=c==null?void 0:c.shadowRoot,l=s==null?void 0:s.querySelector("ha-drawer, app-drawer, ha-sidebar, .drawer, .menu"),u=(o=l==null?void 0:l.getBoundingClientRect)==null?void 0:o.call(l);Math.max(document.documentElement.clientWidth||0,window.innerWidth||0)<=870?t=0:u!=null&&u.width&&(t=Math.max(0,Math.min(256,Math.round(u.width))))}catch{}let n=0;try{this.style.setProperty("--ddc-left-gutter",`${t}px`),this.style.setProperty("--ddc-right-gutter",`${n}px`)}catch{}}_applyGridVars(){var n;let t=`${this.gridSize||10}px`;this.style.setProperty("--ddc-grid-size",t),(n=this.cardContainer)==null||n.style.setProperty("--ddc-grid-size",t)}_dbgInit(){if(!this.__dbgReady){this.__dbgReady=!0,this._dbgBuffer=[],this._dbgMax=400;try{window.DDC=this}catch{}}}_dbgPush(t,n,o=null){let c={t:new Date().toISOString(),kind:t,msg:n,extra:o};this._dbgBuffer.push(c),this._dbgBuffer.length>this._dbgMax&&this._dbgBuffer.shift(),this.debug&&console.debug(`%c[ddc:${t}]%c ${n}`,"color:#03a9f4","color:unset",o!=null?o:"")}_dbgDump(){return[...this._dbgBuffer]}_safe(t){return String(t).replace(/[&<>"']/g,n=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[n])}setConfig(t={}){var l,u,f,y,m,v,w,S,_,T,R,C,O,z,b,L,I,F,N,H,Q,B,V,U,de,_e,Re;let n=this.storageKey;this.config={...t},(!this.config.storage_key||this.config.storage_key==="")&&(this.config.storage_key=this.constructor._genKey()),this.storageKey=this.config.storage_key,t.storage_key||(this.storageKey?t={...t,storage_key:this.storageKey}:(this.storageKey=`layout_${((l=crypto==null?void 0:crypto.randomUUID)==null?void 0:l.call(crypto))||Date.now().toString(36)}`,t={...t,storage_key:this.storageKey})),this._config=t,this.storageKey=t.storage_key,this._syncEditorsStorageKey(),this.storageKey=t.storage_key||void 0,this._syncEditorsStorageKey(),this.gridSize=Number((u=t.grid)!=null?u:10),this.dragLiveSnap=!!t.drag_live_snap,this.autoSave=t.auto_save!==!1,this.autoSaveDebounce=Number((f=t.auto_save_debounce)!=null?f:800),this.editModePin=this.editModePin!=null?this.editModePin:(m=(y=t.edit_mode_pin)!=null?y:t.editModePin)!=null?m:"",this.containerBackground=(v=t.container_background)!=null?v:"transparent",this.cardBackground=(w=t.card_background)!=null?w:"var(--ha-card-background, var(--card-background-color))",this.cardShadowEnabled=!!t.card_shadow,this.hideHaHeader=!!((_=(S=t.hide_HA_Header)!=null?S:t.hide_ha_header)!=null&&_),this.hideHaSidebar=!!((R=(T=t.hide_HA_Sidebar)!=null?T:t.hide_ha_sidebar)!=null&&R),this.debug=!!t.debug,this.editMode=!1,this._backendOK=!1,this.disableOverlap=!!t.disable_overlap,this.containerSizeMode=t.container_size_mode||"dynamic",String(this.containerSizeMode||"dynamic").toLowerCase()==="dynamic"?this.autoResizeCards=!0:this.autoResizeCards=t.auto_resize_cards!==!1,this.animateCards=!!t.animate_cards,this.screenSaverEnabled=!!((C=t.screen_saver_enabled)!=null&&C);let c=Number(t.screen_saver_delay);this.screenSaverDelay=Number.isFinite(c)&&c>0?c:5*6e4,this.autoResizeCards||String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(O=this._startScaleWatch)==null||O.call(this):(z=this._stopScaleWatch)==null||z.call(this),(b=this._applyAutoScale)==null||b.call(this),this.containerFixedWidth=Number((L=t.container_fixed_width)!=null?L:0)||null,this.containerFixedHeight=Number((I=t.container_fixed_height)!=null?I:0)||null,this.containerPreset=t.container_preset||"fullhd",this.containerPresetOrient=t.container_preset_orientation||"auto",this.heroImage=(t==null?void 0:t.hero_image)||"https://i.postimg.cc/CxsWQgwp/Chat-GPT-Image-Sep-5-2025-09-26-16-AM.png",this.tabs=Array.isArray(t.tabs)?t.tabs:[],this.tabsPosition=t.tabs_position==="left"?"left":"top",this.defaultTab=t.default_tab||((N=(F=this.tabs[0])==null?void 0:F.id)!=null?N:"default"),this.hideTabsWhenSingle=t.hide_tabs_when_single!==!1,this.activeTab=this.defaultTab;try{let re=localStorage.getItem(`ddc_lasttab_${this.storageKey}`);re&&this.tabs.some(ze=>ze.id===re)&&(this.activeTab=re)}catch{}this.rootEl&&this.rootEl.classList.toggle("ddc-tabs-left-layout",this.tabsPosition==="left"),this.cardContainer&&this._applyContainerSizingFromConfig(!1);let s=n!==this.storageKey;if(this.editMode&&!this.__booting&&!s)try{this._isInHaEditorPreview()||this._queueSave("config-change")}catch{}this._applyGridVars();try{(H=this._applyBackgroundImageFromConfig)==null||H.call(this)}catch{}try{(Q=this._applyHaChromeVisibility_)==null||Q.call(this)}catch{}this._ensureOverlayZFix();try{(B=this._updateScreensaverSettings)==null||B.call(this)}catch{}if(this._selection=new Set,this.__groupDrag=null,this.__editorCache=new Map,this.__stubCache=new Map,this._dbgInit(),this._dbgPush("init","Card configured",{storageKey_raw:t.storage_key,storageKey_slug:this.storageKey,autoSave:this.autoSave,grid:this.gridSize}),this.style.setProperty("--ddc-bg",this.containerBackground),this.style.setProperty("--ddc-card-bg",this.cardBackground),this.cardShadowEnabled&&this.style.setProperty("--ddc-card-shadow","0 8px 24px rgba(0,0,0,.35)"),!window.jsyaml){let re=document.createElement("script");re.src="https://cdnjs.cloudflare.com/ajax/libs/js-yaml/4.1.0/js-yaml.min.js",document.head.appendChild(re)}if(!window.interact){let re=document.createElement("script");re.src="https://cdn.jsdelivr.net/npm/interactjs/dist/interact.min.js",re.onload=()=>this._initInteract(),document.head.appendChild(re)}if(this._helpersPromise=typeof window.loadCardHelpers=="function"?window.loadCardHelpers().catch(()=>null):Promise.resolve(null),!this._built){this._built=!0,this.shadowRoot.innerHTML=`
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
  z-index: 3; /* above canvas, below dialogs */
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

/* Mobile: make toolbar & tabs full-width and not offset */
/* Mobile: tabs should not be centered with left/translate. Just full-width & scrollable */
@media (max-width: 768px) {
  .ddc-tabs {
    position: sticky;
    top: var(--ddc-toolbar-height, 0px);
    left: 0 !important;
    transform: none !important;
    width: 100% !important;
    max-width: 100vw !important;
    margin: 0;
    padding-inline: 0;
    justify-content: flex-start !important;
    /* make the whole strip scrollable, nothing faded away at edges */
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    -webkit-mask-image: none;
    mask-image: none;
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
.ddc-toolbar.streamlined.v2 .store-badge {
  display: inline-flex;
  align-items: center;
  height: var(--btn-h);
  border: 1px solid var(--ddc-border);
  border-radius: 999px;
  padding: 6px 10px;
  font-size: .85rem;
  background: color-mix(in oklab, #ffc107 22%, transparent);
  color: #fff; /* \u2190 white text */
  flex: 1 1 220px;
  min-width: 160px;
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
        /* Allow a custom drop shadow via --ddc-card-shadow. Fallback to the HA default if unset */
        box-shadow: var(--ddc-card-shadow, var(--ha-card-box-shadow,0 2px 12px rgba(0,0,0,.18)));
        will-change:transform,width,height,box-shadow; touch-action:auto;
        /*
         * Ensure cards are always layered above the interactive grid overlay.  The
         * selectable grid canvas uses a z-index of 5 (see .ddc-grid-canvas).  By
         * default the card wrappers were assigned a z-index of 2, causing
         * newly added cards to appear behind the overlay until enough cards
         * were added to raise the maximum z-index above 5.  Raising this
         * baseline to 6 ensures all cards start above the grid overlay and
         * remain interactive without requiring the user to add multiple cards.
         */
        z-index:6;
      }
      .card-wrapper.dragging{ cursor:grabbing; touch-action: none; }
      .card-wrapper.editing.selected{
        border-color:var(--primary-color,#03a9f4);
        box-shadow:0 0 0 2px var(--primary-color,#03a9f4)!important;
      }

      /* CARD WRAPPER FOR BSCKGORUND COLORS START */

      /* Make the inner card and its header fully transparent
        so the wrapper\u2019s gradient is the only background shown. */
      /*
       * Make the inner card and its header fully transparent so the wrapper\u2019s gradient is the only
       * background shown. However, exclude the card settings popup (.ddc-card-settings), the
       * resize handle, and the delete handle so those elements can define their own backgrounds.
       */
      .card-wrapper > *:not(.ddc-card-settings):not(.delete-handle):not(.resize-handle) {
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
        border-bottom-right-radius:10px; z-index: 9999 !important;

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
            color: var(--primary-text-color, #fff); /* \u{1F448} ensure readable text */
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
  z-index: 3;

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


/* Mobile: simple full-width tabs, no centering, no edge fade */
@media (max-width: 768px) {
  :host([ddc-fixed-ui]) .ddc-tabs,
  .ddc-tabs {
    position: sticky;
    top: calc(
      max(env(safe-area-inset-top, 0px), 0px) +
      var(--ddc-toolbar-height, 0px)
    );
    left: 0;
    transform: none;
    width: 100%;
    max-width: 100vw;
    margin: 0;

    justify-content: flex-start;     /* \u{1F448} stop centering on mobile */
    padding-left: 0;
    padding-right: 0;
    padding-inline-end: 0;

    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;

    /* \u{1F511} remove the mask so the first tabs are fully visible */
    -webkit-mask-image: none;
    mask-image: none;

    /* optional: avoid weird snapping on tiny screens */
    scroll-snap-type: none;
  }
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
  z-index: 3;

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



      `,this.cardContainer=this.shadowRoot.querySelector("#cardContainer");try{(V=this._applyBackgroundFromConfig)==null||V.call(this)}catch{}try{(U=this._updateScreensaverSettings)==null||U.call(this)}catch{}this.addButton=this.shadowRoot.querySelector("#addCardBtn"),this.reloadBtn=this.shadowRoot.querySelector("#reloadBtn"),this.diagBtn=this.shadowRoot.querySelector("#diagBtn"),this.exitEditBtn=this.shadowRoot.querySelector("#exitEditBtn"),this.storeBadge=this.shadowRoot.querySelector("#storeBadge"),this.exportBtn=this.shadowRoot.querySelector("#exportBtn"),this.importBtn=this.shadowRoot.querySelector("#importBtn"),this.exploreBtn=this.shadowRoot.querySelector("#exploreBtn"),this.applyLayoutBtn=this.shadowRoot.querySelector("#applyLayoutBtn"),this.copyBtn=this.shadowRoot.querySelector("#copyBtn"),this.pasteBtn=this.shadowRoot.querySelector("#pasteBtn"),this.settingsBtn=this.shadowRoot.querySelector("#settingsBtn"),this.tabsBar=this.shadowRoot.querySelector("#tabsBar"),this.rootEl=this.shadowRoot.querySelector(".ddc-root");try{this._renderTabs(),this._applyActiveTab()}catch{}this._applyGridVars(),this.addButton.addEventListener("click",()=>{this.editMode||this._toggleEditMode(!0),this._openCardManager()}),this.reloadBtn.addEventListener("click",()=>this._initialLoad(!0)),this.diagBtn.addEventListener("click",()=>this._openDiagnostics()),this.exitEditBtn.addEventListener("click",()=>this._toggleEditMode(!1)),this.exportBtn.addEventListener("click",()=>this._exportDesign()),this.importBtn.addEventListener("click",()=>this._importDesign()),this.applyLayoutBtn.addEventListener("click",()=>this._saveLayout(!1)),this.copyBtn&&this.copyBtn.addEventListener("click",()=>this._copySelection()),this.pasteBtn&&this.pasteBtn.addEventListener("click",()=>this._pasteClipboard()),this.settingsBtn&&this.settingsBtn.addEventListener("click",()=>this._openDashboardSettings()),window.addEventListener("keydown",re=>{var ze;if(this.editMode){if((re.ctrlKey||re.metaKey)&&(re.key==="s"||re.key==="S")&&(re.preventDefault(),this._saveLayout(!1)),!this.__ddcResizeObs&&this.autoResizeCards){this.__ddcResizeObs=new ResizeObserver(()=>{var pe;return(pe=this._applyAutoScale)==null?void 0:pe.call(this)});try{this.__ddcResizeObs.observe(this)}catch{}try{this.__ddcResizeObs.observe(this.cardContainer)}catch{}try{this.parentElement&&this.__ddcResizeObs.observe(this.parentElement)}catch{}try{this.offsetParent&&this.__ddcResizeObs.observe(this.offsetParent)}catch{}window.addEventListener("resize",this.__ddcOnWinResize=()=>{var pe;return(pe=this._applyAutoScale)==null?void 0:pe.call(this)})}(ze=this._applyAutoScale)==null||ze.call(this)}}),this.exploreBtn.addEventListener("click",()=>window.open("https://hads.smarti.dev/","_blank","noopener,noreferrer")),this._applyContainerSizingFromConfig(!0),(de=this._applyAutoScale)==null||de.call(this),this._installLongPressToEnterEdit(),(_e=this._startScaleWatch)==null||_e.call(this),window.addEventListener("keydown",re=>{var ze;if(re.key==="Escape"&&this.editMode&&this._toggleEditMode(!1),!this.__ddcResizeObs&&this.autoResizeCards){this.__ddcResizeObs=new ResizeObserver(()=>{var pe;return(pe=this._applyAutoScale)==null?void 0:pe.call(this)});try{this.__ddcResizeObs.observe(this)}catch{}try{this.__ddcResizeObs.observe(this.cardContainer)}catch{}window.addEventListener("resize",this.__ddcOnWinResize=()=>{var pe;return(pe=this._applyAutoScale)==null?void 0:pe.call(this)})}(ze=this._applyAutoScale)==null||ze.call(this)}),this._installSelectionMarquee(),this.cardContainer.addEventListener("mousedown",re=>{this.editMode&&(re.target.closest(".card-wrapper")||!re.shiftKey&&!re.ctrlKey&&!re.metaKey&&this._clearSelection())})}try{this._isInHaEditorPreview()||this._queueSave("config-change")}catch{}this._updateStoreBadge(),this.cardContainer&&this._toggleEditMode(!1),this.__cfgReady=!0,s&&this.__booted?this._initialLoad(!0):!this.__booted&&this.__probed?(this.__booted=!0,this._initialLoad()):(this._applyContainerSizingFromConfig(!0),(Re=this._applyAutoScale)==null||Re.call(this),this._resizeContainer())}_startInitialAutosize(){var t,n;try{if(this.__autoInitStarted)return;this.__autoInitStarted=!0;let o=!1,c=()=>{o||(o=!0,requestAnimationFrame(()=>{var v;o=!1;try{(v=this._applyAutoScale)==null||v.call(this)}catch{}}))};requestAnimationFrame(()=>{c(),requestAnimationFrame(c)}),setTimeout(c,0);try{(n=(t=document.fonts)==null?void 0:t.ready)==null||n.then(c)}catch{}let s=String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase(),l=this.cardContainer||this.querySelector("#cardContainer");if(!l)return;let u={childList:!0,subtree:!0,attributes:!0,attributeFilter:["style","class"]},f={childList:!0,subtree:!0},y=this.autoResizeCards||s==="auto",m=new MutationObserver(()=>c());m.observe(l,y?u:f),this.__autoInitMO=m,setTimeout(()=>{try{m.disconnect()}catch{}this.__autoInitMO=null},2e3)}catch{}}connectedCallback(){var t,n,o,c,s;try{this._installGridObservers_(),this._updateGridButtonsVisibility()}catch{}(t=this._startInitialAutosize)==null||t.call(this);try{(n=this._applyHaChromeVisibility_)==null||n.call(this),this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var u;return(u=this._applyAutoFillNoScale)==null?void 0:u.call(this)})});try{(o=this._ensureScreenSaverStyles)==null||o.call(this),(c=this._updateScreensaverSettings)==null||c.call(this)}catch{}}catch{this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var u;return(u=this._applyAutoFillNoScale)==null?void 0:u.call(this)})})}if(this.__keyHandlerBound||(this.__keyHandler=l=>this._onKeyDown_(l),window.addEventListener("keydown",this.__keyHandler),this.__keyHandlerBound=!0,this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var u;return(u=this._applyAutoFillNoScale)==null?void 0:u.call(this)})})),this.__boundExitEdit||(this.__boundExitEdit=()=>this._toggleEditMode(!1),this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var u;return(u=this._applyAutoFillNoScale)==null?void 0:u.call(this)})})),window.addEventListener("pagehide",this.__boundExitEdit),window.addEventListener("beforeunload",this.__boundExitEdit),this.__onVis=()=>{document.visibilityState==="hidden"&&this._toggleEditMode(!1),this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var u;return(u=this._applyAutoFillNoScale)==null?void 0:u.call(this)})})},document.addEventListener("visibilitychange",this.__onVis),this._toggleEditMode(!1),!this.__visObs){let l=new IntersectionObserver(u=>{u.some(f=>f.isIntersecting)&&(requestAnimationFrame(()=>this._applyAutoScale&&this._applyAutoScale()),l.observe(this),this.__visObs=l)});this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var f;return(f=this._applyAutoFillNoScale)==null?void 0:f.call(this)})})}this.__ddcOnWinResize=this.__ddcOnWinResize||(()=>{var l,u;if(this.hasAttribute("ddc-fixed-ui"))try{(l=this._computeHaSidebarGutters_)==null||l.call(this)}catch{}(u=this._applyAutoScale)==null||u.call(this)});try{let l=String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase();this.autoResizeCards||l==="auto"?window.addEventListener("resize",this.__ddcOnWinResize):window.removeEventListener("resize",this.__ddcOnWinResize)}catch{}try{(s=this.__ddcBindPointerListeners)==null||s.call(this),this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var u;return(u=this._applyAutoFillNoScale)==null?void 0:u.call(this)})})}catch{this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var u;return(u=this._applyAutoFillNoScale)==null?void 0:u.call(this)})})}this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var u;return(u=this._applyAutoFillNoScale)==null?void 0:u.call(this)})})}disconnectedCallback(){var t,n,o,c,s,l,u;try{this._uninstallGridObservers_()}catch{}try{(t=this._setHeaderVisible_)==null||t.call(this,!0),(n=this._setSidebarVisible_)==null||n.call(this,!0)}catch{}try{(o=this._applyHaChromeVisibility_)==null||o.call(this)}catch{}this.__keyHandlerBound&&this.__keyHandler&&(window.removeEventListener("keydown",this.__keyHandler),this.__keyHandlerBound=!1,this.__keyHandler=null),this.__keyHandlerBound||(this.__keyHandler=f=>this._onKeyDown_(f),window.addEventListener("keydown",this.__keyHandler),this.__keyHandlerBound=!0);try{(c=this._destroyParticles_)==null||c.call(this)}catch{}try{(s=this._destroyYouTube_)==null||s.call(this)}catch{}window.removeEventListener("pagehide",this.__boundExitEdit),window.removeEventListener("beforeunload",this.__boundExitEdit),document.removeEventListener("visibilitychange",this.__onVis);try{this._screensaverTimer&&(clearTimeout(this._screensaverTimer),this._screensaverTimer=null),this._clockInterval&&(clearInterval(this._clockInterval),this._clockInterval=null),this._screensaverActivityHandler&&(this._screensaverEvents||[]).forEach(y=>{document.removeEventListener(y,this._screensaverActivityHandler,!0)}),this.screenSaverOverlay&&this.screenSaverOverlay.parentNode&&this.screenSaverOverlay.parentNode.removeChild(this.screenSaverOverlay)}catch{}try{(l=this.__ddcResizeObs)==null||l.disconnect()}catch{}if(this.__ddcResizeObs=null,(u=this._stopScaleWatch)==null||u.call(this),this.__ddcOnWinResize&&(window.removeEventListener("resize",this.__ddcOnWinResize),this.__ddcOnWinResize=null),this.__lpInstalled&&this.__lpHandlers){let f=this.cardContainer;f==null||f.removeEventListener("mousedown",this.__lpHandlers.mouseDown),window.removeEventListener("mousemove",this.__lpHandlers.mouseMove),window.removeEventListener("mouseup",this.__lpHandlers.mouseUp),window.removeEventListener("contextmenu",this.__lpHandlers.contextMenu),f==null||f.removeEventListener("touchstart",this.__lpHandlers.touchStart),window.removeEventListener("touchmove",this.__lpHandlers.touchMove),window.removeEventListener("touchend",this.__lpHandlers.touchEnd),window.removeEventListener("touchcancel",this.__lpHandlers.touchCancel),this.__lpInstalled=!1,this.__lpHandlers=null}try{this.__visObs&&this.__visObs.disconnect()}catch{}this.__visObs=null,this.__ddcOnWinResize&&window.removeEventListener("resize",this.__ddcOnWinResize);try{this.__ddcPtrBound&&(this.removeEventListener("pointerdown",this.__onDDCPointerDown),this.removeEventListener("pointermove",this.__onDDCPointerMove),window.removeEventListener("pointerup",this.__onDDCPointerUp),window.removeEventListener("pointercancel",this.__onDDCPointerUp),this.__ddcPtrBound=!1)}catch{}}set hass(t){var o;this._hass=t,cc("set hass"),!this.__probed&&t&&(this.__probed=!0,this._probeBackend().then(()=>{this.__probed=!0,!this.__booted&&this.__cfgReady&&(this.__booted=!0,this._initialLoad(!0))}));let n=((o=this.cardContainer)==null?void 0:o.children)||[];for(let c of n){let s=c.firstElementChild;s&&s.hass!==t&&(s.hass=t)}try{this._applyVisibility_()}catch{}}get hass(){return this._hass}async _initialLoad(t=!1){var n,o,c,s,l,u,f,y,m,v,w,S,_,T,R,C,O,z,b;if(!this.__booting){this.__booting=!0;try{this._loading=!0,t&&this.cardContainer&&(this.cardContainer.innerHTML=""),this._dbgPush("boot","Initial load start",{force:t});let L=[],I=null;if(this._backendOK&&this.storageKey)try{I=await this._loadLayoutFromBackend(this.storageKey)}catch(B){this._dbgPush("boot","Backend load failed",{error:String(B)})}if(!I&&this.storageKey){let B=null;try{B=JSON.parse(localStorage.getItem(`ddc_local_${this.storageKey}`)||"null")}catch{}if(B)if(this._dbgPush("boot","Found local snapshot",{bytes:JSON.stringify(B).length}),this._backendOK)try{await this._saveLayoutToBackend(this.storageKey,B),this._dbgPush("boot","Migrated local -> backend"),I=B}catch(V){this._dbgPush("boot","Migration failed, staying local",{error:String(V)}),I=B}else I=B}!I&&((o=(n=this._config)==null?void 0:n.cards)!=null&&o.length)&&(this._dbgPush("boot","Using embedded config"),I={cards:this._config.cards});let F={...this._config||{}};if(I!=null&&I.options){let{storage_key:B,...V}=I.options;this._applyImportedOptions(V,!0)}else typeof(I==null?void 0:I.grid)=="number"&&this._applyImportedOptions({grid:I.grid},!0);let N=["storage_key","grid","drag_live_snap","auto_save","auto_save_debounce","container_background","card_background","card_shadow","debug","disable_overlap","container_size_mode","container_fixed_width","container_fixed_height","container_preset","container_preset_orientation","tabs","tabs_position","default_tab","hide_tabs_when_single","auto_resize_cards","background_mode","background_image","background_particles","background_youtube","screen_saver_enabled","screen_saver_delay"],H={};for(let B of N)F[B]!==void 0&&(H[B]=F[B]);Object.keys(H).length&&this._applyImportedOptions(H,!0);let Q=!1;if((c=I==null?void 0:I.cards)!=null&&c.length){for(let B of I.cards){if(!(B!=null&&B.card)||typeof B.card=="object"&&Object.keys(B.card).length===0){let de=this._makePlaceholderAt(((s=B.position)==null?void 0:s.x)||0,((l=B.position)==null?void 0:l.y)||0,((u=B.size)==null?void 0:u.width)||200,((f=B.size)==null?void 0:f.height)||200);this.cardContainer.appendChild(de);try{this._rebuildOnce(de.firstElementChild)}catch{}Q=!0;continue}let V=await this._createCard(B.card),U=this._makeWrapper(V);if(this.editMode&&U.classList.add("editing"),U.dataset.tabId=this._normalizeTabId(B.tabId||B.tab_id||this.defaultTab),this._setCardPosition(U,((y=B.position)==null?void 0:y.x)||0,((m=B.position)==null?void 0:m.y)||0),U.style.width=`${(w=(v=B.size)==null?void 0:v.width)!=null?w:14*this.gridSize}px`,U.style.height=`${(_=(S=B.size)==null?void 0:S.height)!=null?_:10*this.gridSize}px`,B.z!=null&&(U.style.zIndex=String(B.z)),B.overflow)try{U.style.overflow=B.overflow,U.dataset.overflow=B.overflow;let de=U.firstElementChild;de&&(de.style.overflow=B.overflow)}catch{}this.cardContainer.appendChild(U);try{this._rebuildOnce(U.firstElementChild)}catch{}this._initCardInteract(U),Q=!0}this._resizeContainer(),(T=this._applyAutoScale)==null||T.call(this),this._dbgPush("boot","Layout applied",{count:I.cards.length})}Q||(this._showEmptyPlaceholder(),(R=this._applyAutoScale)==null||R.call(this),this._dbgPush("boot","No saved layout found; showing placeholder")),this._updateStoreBadge(),this._syncEmptyStateUI(),t&&(this._cardModProcessed=!1),setTimeout(()=>{this._processCardModOnce()},100);try{L.forEach(B=>{try{B.dispatchEvent(new Event("ll-rebuild",{bubbles:!0,composed:!0}))}catch{}})}catch{}}finally{this._loading=!1,this.__booting=!1,this.__dirty=!1,(C=this._updateApplyBtn)==null||C.call(this);try{this._renderTabs(),this._applyActiveTab()}catch{}try{this._applyVisibility_()}catch{}try{let L=(z=(O=this.cardContainer)==null?void 0:O.querySelector)==null?void 0:z.call(O,"#ddcBgHost");(!L||!L.firstChild)&&((b=this._applyBackgroundFromConfig)==null||b.call(this))}catch{}}}}_normalizeTabId(t){let n=Array.isArray(this.tabs)?this.tabs.map(o=>o.id):[];return n.length?t&&n.includes(t)?t:this.defaultTab||n[0]:this.defaultTab||"default"}_renderTabs(){var o,c,s,l,u;let t=this.tabsBar;if(!t)return;let n=Array.isArray(this.tabs)?this.tabs:[];if(!n.length||n.length===1&&this.hideTabsWhenSingle){t.style.display="none";return}t.style.display="",t.className="ddc-tabs "+(this.tabsPosition==="left"?"ddc-tabs-left":""),t.innerHTML="";try{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&(t.style.width="100%",t.style.maxWidth="100%")}catch{}for(let f of n){let y=document.createElement("button");y.className="ddc-tab"+(f.id===this.activeTab?" active":""),y.dataset.tabId=f.id,y.title=f.label||f.id,y.innerHTML=`${f.icon?`<ha-icon icon="${f.icon}"></ha-icon>`:""}<span class="ddc-tab-label">${(o=f.label)!=null?o:f.id}</span>`,y.addEventListener("click",()=>{var m,v,w;if(this.activeTab!==f.id){this.activeTab=f.id;try{localStorage.setItem(`ddc_lasttab_${this.storageKey}`,f.id)}catch{}this._applyActiveTab(),this._renderTabs();try{this._applyVisibility_()}catch{}try{let S=(v=(m=this.cardContainer)==null?void 0:m.querySelector)==null?void 0:v.call(m,"#ddcBgHost");(!S||!S.firstChild)&&((w=this._applyBackgroundFromConfig)==null||w.call(this))}catch{}}}),t.appendChild(y)}this.rootEl&&this.rootEl.classList.toggle("ddc-tabs-left-layout",this.tabsPosition==="left");try{(c=this._updateTabsA11y_)==null||c.call(this)}catch{}try{(s=this._syncTabsWidth_)==null||s.call(this)}catch{}try{let f=(l=t.querySelector)==null?void 0:l.call(t,".ddc-tab.active");if(f&&t.scrollWidth>t.clientWidth){let y=0;try{y=window.innerWidth||((u=document.documentElement)==null?void 0:u.clientWidth)||0}catch{}(!y||y>768)&&f.scrollIntoView({behavior:"auto",block:"nearest",inline:"nearest"})}}catch{}}_applyActiveTab(){var o,c,s,l,u;let t=this._normalizeTabId(this.activeTab);(((c=(o=this.cardContainer)==null?void 0:o.querySelectorAll)==null?void 0:c.call(o,".card-wrapper"))||[]).forEach(f=>{let y=f.dataset.tabId?this._normalizeTabId(f.dataset.tabId):this.defaultTab;if(!this.tabs||!this.tabs.length){f.style.display="",f.inert=!1,f.classList.remove("ddc-hidden");return}y===t?(f.style.display="",f.inert=!1,f.classList.remove("ddc-hidden")):(f.style.display="none",f.inert=!0,f.classList.add("ddc-hidden"),f.classList.remove("ddc-selected"))});try{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(s=this._applyAutoFillNoScale)==null||s.call(this):(l=this._applyAutoScale)==null||l.call(this)}catch{}try{this._clearSelection()}catch{}try{this.animateCards&&((u=this._animateCards)==null||u.call(this))}catch{}}_animateCards(){var t,n,o,c;try{let s=((n=(t=this.cardContainer)==null?void 0:t.querySelectorAll)==null?void 0:n.call(t,".card-wrapper"))||[],l=(c=(o=window.matchMedia)==null?void 0:o.call(window,"(prefers-reduced-motion: reduce)"))==null?void 0:c.matches,u=800,f=.8,m=u*.3,v=u-m;s.forEach(w=>{var b,L,I;let S=(b=window.getComputedStyle)==null?void 0:b.call(window,w);if(w.style.display==="none"||S&&S.display==="none"||w.classList.contains("ddc-hidden"))return;let T=S&&S.transform&&S.transform!=="none"?S.transform:"",R=100*f,C=`${T} translate3d(0, ${R}%, 0)`,O=`${T} translate3d(0, 0, 0)`,z=Math.random()*(v*Math.min(f,2));if(l){try{w.animate([{opacity:0},{opacity:1}],{duration:u*.15,delay:z,easing:"linear",fill:"backwards"})}catch{w.style.opacity="0",setTimeout(()=>{w.style.transition=`opacity ${u*.15}ms linear`,w.style.opacity="1"},z)}return}try{w.style.willChange="opacity, transform";let F="cubic-bezier(0.4, 0, 0.2, 1)";w.animate([{opacity:0},{opacity:1}],{duration:m,delay:z,easing:"linear",fill:"backwards"}),(I=(L=w.animate([{transform:C},{transform:O}],{duration:m,delay:z,easing:F,fill:"backwards"})).addEventListener)==null||I.call(L,"finish",()=>{w.style.willChange=""})}catch{w.style.opacity="0",w.style.transform=C,w.style.willChange="opacity, transform",setTimeout(()=>{w.style.transition=`opacity ${m}ms linear, transform ${m}ms cubic-bezier(0.4,0,0.2,1)`,w.style.opacity="1",w.style.transform=O,setTimeout(()=>{w.style.transition="",w.style.willChange=""},m+60)},z)}})}catch(s){console.warn("[ddc:animate] animation error",s)}}_addTabSelectorToChip(t,n=null){if(!this.tabs||!this.tabs.length)return;let o=t.querySelector(".chip");if(!o)return;let c=o.querySelector("select.ddc-chip-tab");c||(c=document.createElement("select"),c.className="ddc-chip-tab",c.style.marginLeft="6px",c.title="Assign to tab",o.appendChild(c)),c.innerHTML="";for(let u of this.tabs){let f=document.createElement("option");f.value=u.id,f.textContent=u.label||u.id,c.appendChild(f)}let s=this._normalizeTabId(n||t.dataset.tabId||this.activeTab||this.defaultTab);c.value=s,t.dataset.tabId=s,c.onchange=()=>{var u,f,y;t.dataset.tabId=this._normalizeTabId(c.value),this._applyActiveTab();try{this._applyVisibility_()}catch{}try{let m=(f=(u=this.cardContainer)==null?void 0:u.querySelector)==null?void 0:f.call(u,"#ddcBgHost");(!m||!m.firstChild)&&((y=this._applyBackgroundFromConfig)==null||y.call(this))}catch{}try{this._queueSave("tab-change")}catch{}};let l=u=>u.stopPropagation();c.addEventListener("mousedown",l),c.addEventListener("pointerdown",l),c.addEventListener("touchstart",l)}_openCardSettingsMenu(t){if(!t)return;let n=t.querySelector(".ddc-card-settings");if(n){n.remove();return}let o=document.createElement("div");o.className="ddc-card-settings",Object.assign(o.style,{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:"10000",background:"var(--ha-card-background, var(--card-background-color, var(--primary-background-color, #1e1e1e)))",border:"1px solid var(--divider-color, rgba(0,0,0,.3))",borderRadius:"12px",padding:"14px",boxShadow:"0 10px 24px rgba(0,0,0,.4)",color:"var(--primary-text-color, #f5f5f5)",minWidth:"220px",display:"flex",flexDirection:"column",gap:"12px",fontSize:".875rem",opacity:"1",mixBlendMode:"normal"});let c=_=>_.stopPropagation();o.addEventListener("pointerdown",c,!0),o.addEventListener("mousedown",c,!0),o.addEventListener("touchstart",c,!0);let s=document.createElement("div");s.textContent="Card Settings",Object.assign(s.style,{fontWeight:"600",fontSize:"1rem",marginBottom:"4px",color:"var(--primary-text-color, #f5f5f5)"}),o.appendChild(s);let l=document.createElement("button");l.className="mini",Object.assign(l.style,{position:"absolute",top:"4px",right:"4px",border:"none",background:"transparent",color:"var(--secondary-text-color, #9ca3af)",cursor:"pointer",width:"24px",height:"24px",display:"flex",alignItems:"center",justifyContent:"center"}),l.setAttribute("title","Close"),l.setAttribute("aria-label","Close settings"),l.innerHTML='<ha-icon icon="mdi:close"></ha-icon>',l.addEventListener("click",_=>{_.stopPropagation(),o.remove()}),o.appendChild(l);let u=(_,T)=>{let R=document.createElement("div");R.style.display="flex",R.style.alignItems="center",R.style.gap="12px",R.style.width="100%";let C=document.createElement("span");return C.textContent=_,C.style.color="var(--secondary-text-color, #9ca3af)",C.style.fontWeight="500",C.style.whiteSpace="nowrap",T.style.flex="1 1 auto",R.appendChild(C),R.appendChild(T),R},f=_=>{Object.assign(_.style,{appearance:"none",padding:"6px 8px",border:"1px solid var(--divider-color, rgba(0,0,0,.25))",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--primary-background-color, #fff)))",color:"var(--primary-text-color, #000)",font:"inherit",lineHeight:"1.4",width:"100%"})};if(Array.isArray(this.tabs)&&this.tabs.length>1){let _=document.createElement("select");f(_);for(let O of this.tabs){let z=document.createElement("option");z.value=O.id,z.textContent=O.label||O.id,_.appendChild(z)}let T=t.dataset.tabId||this.defaultTab;_.value=this._normalizeTabId(T),_.addEventListener("change",()=>{var z;let O=_.value;t.dataset.tabId=this._normalizeTabId(O);try{(z=this._addTabSelectorToChip)==null||z.call(this,t,t.dataset.tabId)}catch{}try{this._applyActiveTab()}catch{}try{this._applyVisibility_()}catch{}try{this._queueSave("tab-change")}catch{}}),_.addEventListener("pointerdown",c),_.addEventListener("mousedown",c),_.addEventListener("touchstart",c);let R=u("Tab",_);o.appendChild(R);let C=document.createElement("div");C.textContent="Choose which tab this card appears on.",Object.assign(C.style,{fontSize:".75rem",color:"var(--secondary-text-color, #9ca3af)",marginTop:"2px"}),o.appendChild(C)}let y=document.createElement("select");f(y);let m=[{value:"",label:"Default"},{value:"visible",label:"Visible"},{value:"hidden",label:"Hidden"},{value:"auto",label:"Scroll"}];for(let _ of m){let T=document.createElement("option");T.value=_.value,T.textContent=_.label,y.appendChild(T)}let v=t.dataset.overflow||t.style.overflow||"";y.value=v||"",y.addEventListener("change",()=>{let _=y.value,T=t.firstElementChild;_?(t.style.setProperty("overflow",_,"important"),T&&T.style.setProperty("overflow",_,"important"),t.dataset.overflow=_):(t.style.removeProperty("overflow"),T&&T.style.removeProperty("overflow"),delete t.dataset.overflow);try{this._queueSave("overflow-change")}catch{}}),y.addEventListener("pointerdown",c),y.addEventListener("mousedown",c),y.addEventListener("touchstart",c);let w=u("Overflow",y);o.appendChild(w);let S=document.createElement("div");S.textContent="Control how card content behaves when it exceeds its bounds.",Object.assign(S.style,{fontSize:".75rem",color:"var(--secondary-text-color, #9ca3af)",marginTop:"2px"}),o.appendChild(S),t.appendChild(o)}_toggleEditMode(t=null){var w,S,_,T,R,C,O,z,b,L,I,F,N,H,Q,B,V;try{(w=this.__clearPressTimer)==null||w.call(this)}catch{}let n=t===null?!this.editMode:!!t,o=!this.editMode&&n;try{let U=this.config&&this.config.edit_mode_pin!=null?String(this.config.edit_mode_pin):"",_e=((this.editModePin!=null?String(this.editModePin):"")||U).trim();if(n&&!this.editMode&&_e){let Re=window.prompt("Enter PIN / password to open Edit Mode:");if(Re===null)return;if(String(Re).trim()!==_e){(S=this._toast)==null||S.call(this,"Incorrect PIN/password.");return}}}catch{}let c=this.renderRoot||this.shadowRoot||this,s=(_=c==null?void 0:c.querySelector)==null?void 0:_.call(c,".ddc-toolbar.streamlined.v2, .ddc-toolbar.streamlined.v3"),l=(U,de)=>{try{U&&(U.style.display=de)}catch{}},u="inline-block",f="none",y=()=>{l(this.addButton,u),l(this.reloadBtn,u),l(this.diagBtn,u),l(this.exitEditBtn,u),l(this.exportBtn,u),l(this.importBtn,u),l(this.exploreBtn,u),l(this.storeBadge,u),l(this.applyLayoutBtn,u),l(this.copyBtn,u),l(this.pasteBtn,u),l(this.settingsBtn,u)},m=()=>{l(this.addButton,f),l(this.reloadBtn,f),l(this.diagBtn,f),l(this.exitEditBtn,f),l(this.exportBtn,f),l(this.importBtn,f),l(this.exploreBtn,f),l(this.storeBadge,f),l(this.applyLayoutBtn,f),l(this.copyBtn,f),l(this.pasteBtn,f),l(this.settingsBtn,f)};if(s)if(n)s.setAttribute("data-force-open","1"),s.style.display="grid",y(),requestAnimationFrame(()=>{let de=s.scrollHeight||0;s.style.setProperty("--open-h",de+"px"),s.classList.add("is-open")});else{s.setAttribute("data-force-open","1"),s.style.display="grid";let de=s.scrollHeight||0;s.style.setProperty("--open-h",de+"px"),requestAnimationFrame(()=>{s.classList.remove("is-open")}),setTimeout(()=>{m(),s.removeAttribute("data-force-open")},260)}else n?y():m();this.editMode=n,(T=this._syncEmptyStateUI)==null||T.call(this),(R=this.cardContainer)==null||R.classList.toggle("grid-on",this.editMode);try{typeof this._resetScreensaverTimer=="function"&&this._resetScreensaverTimer()}catch{}if((((O=(C=this.cardContainer)==null?void 0:C.querySelectorAll)==null?void 0:O.call(C,".card-wrapper"))||[]).forEach(U=>{U.classList.toggle("editing",this.editMode);let de=U.querySelector(".resize-handle");de&&(de.style.display=this.editMode?"flex":"none"),!U.dataset.placeholder&&window.interact&&window.interact(U).draggable(this.editMode).resizable(this.editMode),U.style.touchAction=this.editMode?"none":"auto"}),this.editMode||(z=this._clearSelection)==null||z.call(this),this.editMode||(b=this.cardContainer)==null||b.querySelectorAll(".card-wrapper.dragging").forEach(U=>U.classList.remove("dragging")),o){let U=(L=this.__lastHoldX)!=null?L:null,de=(I=this.__lastHoldY)!=null?I:null;(F=this._playEditRipple)==null||F.call(this,U,de)}try{(N=this._applyHaChromeVisibility_)==null||N.call(this)}catch{}try{let U=((Q=(H=this.shadowRoot)==null?void 0:H.querySelector)==null?void 0:Q.call(H,".ddc-root"))||((V=(B=this.renderRoot)==null?void 0:B.querySelector)==null?void 0:V.call(B,".ddc-root"))||null;if(U){let de=0;if(n&&s)try{de=s.scrollHeight||s.offsetHeight||0}catch{}U.style.setProperty("--ddc-toolbar-height",de+"px"),!this.autoResizeCards&&this.cardContainer&&(n&&s?this.cardContainer.style.marginTop=de+"px":this.cardContainer.style.marginTop="")}}catch{}try{typeof this._resizeContainer=="function"&&this._resizeContainer(),typeof this._applyAutoScale=="function"&&this._applyAutoScale()}catch{}}_isInHaEditorPreview(){let t=this;for(;t;){let n=t.nodeType===1&&t.localName?t.localName.toLowerCase():"";if(n==="hui-card-editor"||n==="hui-dialog-edit-card"||n==="hui-card-preview"||n==="ha-dialog"||n==="mwc-dialog")return!0;let o=t.getRootNode&&t.getRootNode();t=t.parentElement||o&&o.host||null}return!1}_installLongPressToEnterEdit(){if(this.__lpInstalled)return;this.__lpInstalled=!0;let t=this.cardContainer;if(!t)return;let n=800,o=18,c=b=>!!b&&typeof b=="object"&&b.nodeType===1,s=(b,L)=>{try{return!!(b&&L&&typeof b.contains=="function"&&c(L)&&b.contains(L))}catch{return!1}},l=b=>s(this.cardContainer,b),u=b=>{var F,N,H;let L=(N=(F=b.target)==null?void 0:F.closest)==null?void 0:N.call(F,".card-wrapper");if(c(L)&&l(L)&&!L.classList.contains("ddc-placeholder"))return!0;let I=typeof b.composedPath=="function"?b.composedPath():[];for(let Q of I)if(c(Q)&&l(Q)&&(H=Q.classList)!=null&&H.contains("card-wrapper")&&!Q.classList.contains("ddc-placeholder"))return!0;return!1},f=(b,L)=>{let I=document.createElement("div");I.className="ddc-press-ring",document.body.appendChild(I),Object.assign(I.style,{position:"fixed",left:`${b}px`,top:`${L}px`,zIndex:"100000",width:"44px",height:"44px",pointerEvents:"none",marginLeft:"-22px",marginTop:"-22px",filter:"drop-shadow(0 2px 6px rgba(0,0,0,.35))"}),I.innerHTML=`
      <svg viewBox="0 0 44 44" aria-hidden="true" style="width:44px;height:44px">
        <circle cx="22" cy="22" r="18" style="stroke:rgba(255,255,255,.45);stroke-width:4;fill:none"></circle>
        <circle class="pr-fg" cx="22" cy="22" r="18" style="stroke:var(--primary-color);stroke-width:4;fill:none;stroke-linecap:round"></circle>
        <circle cx="22" cy="22" r="2" style="fill:var(--primary-color);opacity:.95"></circle>
      </svg>`;let F=I.querySelector(".pr-fg"),N=18,H=2*Math.PI*N;return F.style.strokeDasharray=`${H}`,F.style.strokeDashoffset=`${H}`,requestAnimationFrame(()=>{F.style.transition=`stroke-dashoffset ${n}ms linear`,F.style.strokeDashoffset="0"}),{el:I,move(Q,B){I.style.left=`${Q}px`,I.style.top=`${B}px`},remove(){try{I.remove()}catch{}}}},y=null,m=null,v=0,w=0,S=null,_=()=>{y&&clearTimeout(y),y=null,m==null||m.remove(),m=null};this.__clearPressTimer=_;let T=b=>{b.pointerType==="mouse"&&b.button!==0||this._isInHaEditorPreview()||!l(b.target)||u(b)||(S=b.pointerId,v=b.clientX,w=b.clientY,this.__lastHoldX=v,this.__lastHoldY=w,m=f(v,w),y=setTimeout(()=>{var I;_();let L=!this.editMode;this._toggleEditMode(L),(I=this._toast)==null||I.call(this,`Edit mode ${L?"enabled":"disabled"}`)},n))},R=b=>{y==null||b.pointerId!==S||(m==null||m.move(b.clientX,b.clientY),(Math.abs(b.clientX-v)>o||Math.abs(b.clientY-w)>o)&&_())},C=b=>{b.pointerId===S&&(_(),S=null)},O=b=>{if(y)return b.preventDefault(),b.stopPropagation(),!1},z=b=>{var I;if(this._isInHaEditorPreview()||!l(b.target)||u(b))return;let L=!this.editMode;this._toggleEditMode(L),(I=this._toast)==null||I.call(this,`Edit mode ${L?"enabled":"disabled"}`)};t.addEventListener("pointerdown",T),window.addEventListener("pointermove",R,{passive:!0}),window.addEventListener("pointerup",C,{passive:!0}),window.addEventListener("pointercancel",C,{passive:!0}),window.addEventListener("contextmenu",O),t.addEventListener("dblclick",z),this.__lpHandlers={onPointerDown:T,onPointerMove:R,onPointerUpOrCancel:C,onContextMenu:O,onDblClick:z}}_isLayoutEmpty(){let t=this.cardContainer;return t?t.querySelectorAll(".card-wrapper:not(.ddc-placeholder)").length===0:!0}_syncEmptyStateUI(){let t=this._isLayoutEmpty();if(this.addButton){let o=this.editMode||t;this.addButton.style.display=o?"inline-block":"none",this.addButton.classList.toggle("cta-empty",!this.editMode&&t)}let n=o=>o&&(o.style.display=this.editMode?"inline-block":"none");n(this.reloadBtn),n(this.diagBtn),n(this.exitEditBtn),n(this.exportBtn),n(this.importBtn),n(this.exploreBtn),n(this.storeBadge),n(this.applyLayoutBtn)}_updateApplyBtn(){this.applyLayoutBtn&&(this.applyLayoutBtn.disabled=!this.__dirty)}_markDirty(t=""){var n;this.__dirty=!0,this._updateApplyBtn(),(n=this._dbgPush)==null||n.call(this,"dirty","Marked dirty",{reason:t})}_playEditRipple(t=null,n=null){let o=this.cardContainer;if(!o)return;let c=o.getBoundingClientRect(),s=t==null?c.left+c.width/2:t,l=n==null?c.top+c.height/2:n,u=s-c.left,f=l-c.top,y=document.createElement("div");y.className="ddc-ripple-veil",y.style.setProperty("--rip-x",`${u}px`),y.style.setProperty("--rip-y",`${f}px`),o.appendChild(y),setTimeout(()=>y.remove(),450)}_initInteract(){this.cardContainer.querySelectorAll(".card-wrapper").forEach(n=>this._initCardInteract(n))}_initCardInteract(t){if(!window.interact||t.dataset.placeholder)return;let n=this.gridSize,o=!!this.dragLiveSnap,s=[window.interact.modifiers.restrictRect({restriction:"parent",endOnly:!0})],l=this.__pointerScaleX&&Math.abs(this.__pointerScaleX-1)>1e-6||this.__pointerScaleY&&Math.abs(this.__pointerScaleY-1)>1e-6;if(this.dragLiveSnap&&!l){let u=window.interact.snappers.grid({x:this.gridSize,y:this.gridSize});s.push(window.interact.modifiers.snap({targets:[u],range:1/0,offset:"startCoords"}))}window.interact(t).draggable({enabled:this.editMode,inertia:!1,modifiers:s,listeners:{start:u=>{this._selection.has(t)||(!(u!=null&&u.shiftKey)&&!(u!=null&&u.ctrlKey)&&!(u!=null&&u.metaKey)&&this._clearSelection(),this._toggleSelection(t,!0));let f=Array.from(this._selection);this.__groupDrag={leader:t,members:f,startRaw:new Map(f.map(m=>[m,{x:parseFloat(m.getAttribute("data-x-raw"))||parseFloat(m.getAttribute("data-x"))||0,y:parseFloat(m.getAttribute("data-y-raw"))||parseFloat(m.getAttribute("data-y"))||0,w:parseFloat(m.style.width)||m.getBoundingClientRect().width,h:parseFloat(m.style.height)||m.getBoundingClientRect().height}]))},this.__collisionOriginals=new Map,this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)").forEach(m=>{let v=parseFloat(m.getAttribute("data-x-raw"))||parseFloat(m.getAttribute("data-x"))||0,w=parseFloat(m.getAttribute("data-y-raw"))||parseFloat(m.getAttribute("data-y"))||0;this.__collisionOriginals.set(m,{x:v,y:w})}),f.forEach(m=>{m.classList.add("dragging"),m.getAttribute("data-x-raw")===null&&m.setAttribute("data-x-raw",m.getAttribute("data-x")||"0"),m.getAttribute("data-y-raw")===null&&m.setAttribute("data-y-raw",m.getAttribute("data-y")||"0")})},move:u=>{if(!this.__groupDrag)return;let f=this.gridSize,y=!!this.dragLiveSnap,m=this.__groupDrag.leader,v=this.__groupDrag.startRaw.get(m),w=this.__pointerScaleX||1,S=this.__pointerScaleY||1,_=(parseFloat(m.getAttribute("data-x-raw"))||v.x)+u.dx/w,T=(parseFloat(m.getAttribute("data-y-raw"))||v.y)+u.dy/S,R=_-v.x,C=T-v.y,O=this.__groupDrag.members.map(z=>{let b=this.__groupDrag.startRaw.get(z),L=b.x+R,I=b.y+C,F=y?Math.round(L/f)*f:L,N=y?Math.round(I/f)*f:I;return{el:z,rawX:L,rawY:I,snapX:F,snapY:N,w:b.w,h:b.h}});this.disableOverlap&&this._pushCardsOutOfTheWay(O,R,C,y,f),m.setAttribute("data-x-raw",String(_)),m.setAttribute("data-y-raw",String(T));for(let z of O)z.el.setAttribute("data-x-raw",String(z.rawX)),z.el.setAttribute("data-y-raw",String(z.rawY)),this._setCardPosition(z.el,z.snapX,z.snapY);this._resizeContainer()},end:u=>{if(!this.__groupDrag)return;let f=this.gridSize,y=this.__groupDrag.members.map(m=>{let v=parseFloat(m.getAttribute("data-x-raw"))||parseFloat(m.getAttribute("data-x"))||0,w=parseFloat(m.getAttribute("data-y-raw"))||parseFloat(m.getAttribute("data-y"))||0,S=Math.round(v/f)*f,_=Math.round(w/f)*f,T=parseFloat(m.style.width)||m.getBoundingClientRect().width,R=parseFloat(m.style.height)||m.getBoundingClientRect().height;return{el:m,rawX:v,rawY:w,snapX:S,snapY:_,w:T,h:R}});this.disableOverlap&&this._pushCardsOutOfTheWay(y,0,0,!1,f);for(let m of y)this._setCardPosition(m.el,m.snapX,m.snapY),m.el.setAttribute("data-x-raw",String(m.snapX)),m.el.setAttribute("data-y-raw",String(m.snapY));for(let m of this.__groupDrag.members)m.classList.remove("dragging");this._resizeContainer(),this._isContainerFixed()&&this._clampAllCardsInside(),this._queueSave(this.__groupDrag.members.length>1?"group-drag-end":"drag-end"),this.__groupDrag=null,this.__collisionOriginals=null}}}),window.interact(t).resizable({enabled:this.editMode,edges:{right:".resize-handle",bottom:".resize-handle"},inertia:!1,listeners:{move:u=>{let f=this.gridSize,y=!!this.dragLiveSnap,m=parseFloat(t.style.width)||t.getBoundingClientRect().width,v=parseFloat(t.style.height)||t.getBoundingClientRect().height,w=this.__pointerScaleX||1,S=this.__pointerScaleY||1,_=u.rect.width/w,T=u.rect.height/S,R=y?Math.max(f,Math.round(_/f)*f):_,C=y?Math.max(f,Math.round(T/f)*f):T,O=parseFloat(t.getAttribute("data-x"))||0,z=parseFloat(t.getAttribute("data-y"))||0,b=R,L=C;if(this._isContainerFixed()){let{w:F,h:N}=this._getContainerSize();b=Math.min(R,Math.max(this.gridSize,F-O)),L=Math.min(C,Math.max(this.gridSize,N-z))}let I=[this._rectFor(t,O,z,b,L)];this.disableOverlap&&this._anyCollisionFor(I,new Set([t]))||(t.style.width=`${b}px`,t.style.height=`${L}px`,this._resizeContainer())},end:()=>{let u=this.gridSize,f=parseFloat(t.style.width)||t.getBoundingClientRect().width,y=parseFloat(t.style.height)||t.getBoundingClientRect().height,m=Math.max(u,Math.round(f/u)*u),v=Math.max(u,Math.round(y/u)*u),w=parseFloat(t.getAttribute("data-x"))||0,S=parseFloat(t.getAttribute("data-y"))||0;if(this._isContainerFixed()){let{w:T,h:R}=this._getContainerSize();m=Math.min(m,Math.max(u,T-w)),v=Math.min(v,Math.max(u,R-S))}let _=[this._rectFor(t,w,S,m,v)];this.disableOverlap&&this._anyCollisionFor(_,new Set([t]))||(t.style.width=`${m}px`,t.style.height=`${v}px`),this._resizeContainer(),this._isContainerFixed()&&this._clampAllCardsInside(),this._queueSave("resize-end")}}}),t.addEventListener("mousedown",u=>{this.editMode&&(u.target.closest(".resize-handle")||u.target.closest(".delete-handle")||u.target.closest(".chip")||(u.shiftKey||u.ctrlKey||u.metaKey?(u.stopPropagation(),this._toggleSelection(t)):this._selection.has(t)||(this._clearSelection(),this._toggleSelection(t,!0))))})}async _createCard(t){let o=(await this._helpersPromise||await window.loadCardHelpers()).createCardElement(t);if(o.hass=this.hass,t.type==="custom:mod-card"&&(await new Promise(c=>setTimeout(c,0)),o.setConfig&&typeof o.setConfig=="function"))try{o.setConfig(t)}catch{}return o}_makeWrapper(t){let n=document.createElement("div");if(n.classList.add("card-wrapper"),n.dataset.tabId=this._normalizeTabId(this.activeTab||this.defaultTab),this.editMode&&n.classList.add("editing"),!n.style.zIndex){let f=this._highestZ()+1;n.style.zIndex=String(Math.max(f,6))}let o=document.createElement("div");o.className="chip",o.innerHTML=`
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
    `;let c=document.createElement("button");c.className="mini",c.dataset.act="settings",c.setAttribute("title","Settings"),c.setAttribute("aria-label","Settings"),c.innerHTML='<ha-icon icon="mdi:cog"></ha-icon><span>Settings</span>',o.appendChild(c);let s=document.createElement("div");s.className="delete-handle",s.innerHTML='<ha-icon icon="mdi:close-thick"></ha-icon>',s.addEventListener("click",f=>{var y,m;f.stopPropagation(),this._selection.size>1&&this._selection.has(n)?(Array.from(this._selection).forEach(w=>w.remove()),this._clearSelection(),this._resizeContainer(),this._queueSave("delete-multi"),(y=this._ensurePlaceholderIfEmpty)==null||y.call(this)):(n.remove(),this._resizeContainer(),this._queueSave("delete"),(m=this._ensurePlaceholderIfEmpty)==null||m.call(this))});try{this._addTabSelectorToChip(n,n.dataset.tabId)}catch{}o.addEventListener("click",async f=>{var m,v,w,S,_,T;f.stopPropagation();let y=(w=(v=(m=f.target)==null?void 0:m.closest("button"))==null?void 0:v.dataset)==null?void 0:w.act;if(y){if(y==="delete")this._selection.size>1&&this._selection.has(n)?(Array.from(this._selection).forEach(C=>C.remove()),this._clearSelection(),this._resizeContainer(),this._queueSave("delete-multi"),this._ensurePlaceholderIfEmpty()):(n.remove(),this._resizeContainer(),this._queueSave("delete"),this._ensurePlaceholderIfEmpty());else if(y==="duplicate"||y==="copy"){let R=this._selection.size>1&&this._selection.has(n)?Array.from(this._selection):[n];for(let C of R){let O=this._extractCardConfig(C.firstElementChild)||{},z=await this._createCard(O),b=this._makeWrapper(z);b.style.width=C.style.width,b.style.height=C.style.height;try{C.style&&C.style.overflow&&(b.style.overflow=C.style.overflow),C.dataset&&C.dataset.overflow&&(b.dataset.overflow=C.dataset.overflow);let F=C.firstElementChild,N=b.firstElementChild;F&&N&&F.style&&F.style.overflow&&(N.style.overflow=F.style.overflow)}catch{}let L=(parseFloat(C.getAttribute("data-x"))||0)+this.gridSize,I=(parseFloat(C.getAttribute("data-y"))||0)+this.gridSize;this._setCardPosition(b,L,I);{let F=this._highestZ()+1;b.style.zIndex=String(Math.max(F,6))}try{let F=(S=C.dataset)==null?void 0:S.tabId;F&&(b.dataset.tabId=F)}catch{}this.cardContainer.appendChild(b);try{(_=this._addTabSelectorToChip)==null||_.call(this,b,b.dataset.tabId)}catch{}try{this._rebuildOnce(b.firstElementChild)}catch{}this._initCardInteract(b)}this._resizeContainer(),this._queueSave("duplicate")}else if(y==="front")this._adjustZ(n,1);else if(y==="back")this._adjustZ(n,-1);else if(y==="front-most"){let R=this._selection.size>1&&this._selection.has(n)?Array.from(this._selection):[n];R.sort((O,z)=>{let b=parseInt(O.style.zIndex||"1",10),L=parseInt(z.style.zIndex||"1",10);return b-L});let C=this._highestZ();for(let O of R)C+=1,O.style.zIndex=String(C);this._queueSave("z-change")}else if(y==="back-most"){let R=this._selection.size>1&&this._selection.has(n)?Array.from(this._selection):[n];R.sort((z,b)=>{let L=parseInt(z.style.zIndex||"1",10);return parseInt(b.style.zIndex||"1",10)-L});let C=1/0;this.cardContainer.querySelectorAll(".card-wrapper").forEach(z=>{let b=parseInt(z.style.zIndex||"1",10);b<C&&(C=b)}),isFinite(C)||(C=1);let O=C;for(let z of R)O-=1,z.style.zIndex=String(Math.max(6,O));this._queueSave("z-change")}else if(y==="edit"){let R=this._extractCardConfig(n.firstElementChild)||{};await this._openSmartPicker("edit",R,async C=>{var b,L,I;let O=n.firstElementChild,z=await this._createCard(C);try{n.dataset.cfg=JSON.stringify(C),(b=this._hasCardModDeep)!=null&&b.call(this,C)?n.dataset.needsCardMod="true":delete n.dataset.needsCardMod}catch{}n.replaceChild(z,O),await Rr();try{if(z.hass=this.hass,(L=z.requestUpdate)==null||L.call(z),z.updateComplete)try{await z.updateComplete}catch{}}catch{}try{this._rebuildOnce(z)}catch{}try{z.dispatchEvent(new Event("ll-rebuild",{bubbles:!0,composed:!0}))}catch{}(I=this._resizeContainer)==null||I.call(this);try{clearTimeout(this._saveTimer),await this._saveLayout(!0)}catch(F){console.warn("Save before reload failed",F)}window.location.reload()})}else if(y==="settings")try{(T=this._openCardSettingsMenu)==null||T.call(this,n)}catch{}}});let l=document.createElement("div");l.className="shield";let u=document.createElement("div");u.classList.add("resize-handle"),this.editMode||(u.style.display="none"),u.title="Resize",u.innerHTML='<ha-icon icon="mdi:resize-bottom-right"></ha-icon>';try{let f=t._config||t.config;f&&typeof f=="object"&&Object.keys(f).length&&(n.dataset.cfg=JSON.stringify(f),this._hasCardModDeep(f)&&(n.dataset.needsCardMod="true"))}catch{}n.append(t,l,o,s,u);try{this._rebuildOnce(t)}catch{}return n.addEventListener("dblclick",f=>{if(this.editMode&&!(f.target.closest(".resize-handle")||f.target.closest(".delete-handle")||f.target.closest(".chip"))){f.stopPropagation();try{let y=n.querySelector('.chip button[data-act="edit"]');y&&y.click()}catch{}}}),n}_makePlaceholderAt(t=0,n=0,o=400,c=400){let s=document.createElement("div");s.classList.add("card-wrapper","ddc-placeholder"),s.dataset.placeholder="1",this.editMode&&s.classList.add("editing"),this._setCardPosition(s,t,n),s.style.width=`${o}px`,s.style.height=`${c}px`,s.style.zIndex=String(this._highestZ()+1);let l=document.createElement("div");l.className="ddc-placeholder-inner",l.setAttribute("aria-hidden","true");let u=document.createElement("div");u.className="ddc-hero";let f=this.heroImage;if(f){let w=document.createElement("img");w.src=f,w.alt="",u.appendChild(w)}let y=document.createElement("div");y.className="ddc-title",y.textContent="Drag & Drop Card";let m=document.createElement("div");m.className="ddc-sub",m.textContent="Hold me / double click me to enter Edit mode",u.append(y,m),l.appendChild(u),s.addEventListener("dblclick",w=>{w.stopPropagation(),this._toggleEditMode(!0)});let v=document.createElement("div");return v.className="shield",s.append(l,v),s}_processCardModOnce(){var n;if(this._cardModProcessed)return;this._cardModProcessed=!0,(((n=this.cardContainer)==null?void 0:n.querySelectorAll('[data-needs-card-mod="true"]'))||[]).forEach(o=>{let c=o.firstElementChild;if(!c)return;let s=c._config||c.config;if(s){if(s.type==="custom:mod-card")setTimeout(()=>{if(c.updateComplete)c.updateComplete.then(()=>{c.requestUpdate()});else if(c.setConfig)try{c.setConfig({...s})}catch{}},100);else if(s.card_mod&&c.setConfig)try{c.setConfig({...s})}catch{}}})}_showEmptyPlaceholder(){var c,s,l;if(this.cardContainer.querySelector(".ddc-placeholder"))return;let t=200,n=200,o=this._makePlaceholderAt(0,0,t,n);this.cardContainer.appendChild(o),this._resizeContainer();try{let u=(c=this.getBoundingClientRect)==null?void 0:c.call(this),f=(l=(s=this.cardContainer)==null?void 0:s.getBoundingClientRect)==null?void 0:l.call(s);if(u&&f){let y=(u.width-t)/2,m=(u.height-n)/2,v=y-(f.left-u.left),w=m-(f.top-u.top);(!Number.isFinite(v)||v<0)&&(v=0),(!Number.isFinite(w)||w<0)&&(w=0),this._setCardPosition(o,v,w)}}catch{}this._syncEmptyStateUI()}_hideEmptyPlaceholder(){this.cardContainer.querySelectorAll(".ddc-placeholder").forEach(t=>t.remove())}_ensurePlaceholderIfEmpty(){var n;this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)").length===0&&this._showEmptyPlaceholder(),(n=this._applyAutoScale)==null||n.call(this),this._syncEmptyStateUI()}_adjustZ(t,n){let c=parseInt(t.style.zIndex||"1",10)+n;c=Math.max(1,Math.min(9999,c)),t.style.zIndex=String(c),this._queueSave("z-change")}_highestZ(){let t=5;return this.cardContainer.querySelectorAll(".card-wrapper").forEach(n=>{let o=parseInt(n.style.zIndex||"0",10);o>t&&(t=o)}),t}_setCardPosition(t,n,o){let c=Math.round(n),s=Math.round(o);t.style.transform=`translate3d(${c}px, ${s}px, 0)`,t.setAttribute("data-x",String(c)),t.setAttribute("data-y",String(s))}_computeDesignSize(){let t=this.cardContainer;if(!t)return{w:1,h:1};if(this._isContainerFixed()){let{w:l,h:u}=this._resolveFixedSize();return{w:Math.max(1,l),h:Math.max(1,u)}}let n=0,o=0,c=Array.from(t.querySelectorAll(".card-wrapper"));if(!c.length){let l=t.getBoundingClientRect();return{w:Math.max(1,l.width||1),h:Math.max(1,l.height||1)}}for(let l of c){let u=parseFloat(l.getAttribute("data-x-raw")||l.getAttribute("data-x")||"0")||0,f=parseFloat(l.getAttribute("data-y-raw")||l.getAttribute("data-y")||"0")||0,y=parseFloat(l.style.width)||l.getBoundingClientRect().width||0,m=parseFloat(l.style.height)||l.getBoundingClientRect().height||0,v=u+y,w=f+m;v>n&&(n=v),w>o&&(o=w)}let s=Math.max(1,this.gridSize||10);return n=Math.ceil(n/s)*s,o=Math.ceil(o/s)*s,{w:Math.max(1,n),h:Math.max(1,o)}}_startScaleWatch(){if(!this.autoResizeCards||this.__scaleRAF)return;let t=()=>{var l,u,f;if(!this.autoResizeCards){this.__scaleRAF=null;return}let n=1;try{let y=(l=this.getBoundingClientRect)==null?void 0:l.call(this);n=Math.max(1,y&&y.width||this.offsetWidth||1)}catch{n=Math.max(1,this.offsetWidth||1)}let o=this.__lastScaleW||0,c=Math.abs(n-o);(!o||c>=20)&&(this.__lastScaleW=n,String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(u=this._applyAutoFillNoScale)==null||u.call(this):(f=this._applyAutoScale)==null||f.call(this)),this.__scaleRAF=requestAnimationFrame(t)};this.__scaleRAF=requestAnimationFrame(t)}_stopScaleWatch(){if(this.__scaleRAF){try{cancelAnimationFrame(this.__scaleRAF)}catch{}this.__scaleRAF=null}}_applyAutoScale(){var u,f,y,m,v,w,S,_,T,R,C,O,z,b,L,I,F,N,H,Q,B,V;let t="dynamic";try{if(t=String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase(),t==="auto"){(u=this._applyAutoFillNoScale)==null||u.call(this),this.removeAttribute("ddc-fixed-ui"),(y=(f=this.style)==null?void 0:f.removeProperty)==null||y.call(f,"--ddc-ui-width");return}}catch{}let n=this.cardContainer;if(!n)return;try{(this.autoResizeCards||t==="auto")&&typeof this._ensureScaleWrapper=="function"&&this._ensureScaleWrapper()}catch{}if(!this.autoResizeCards){let U=typeof this._computeDesignSize=="function"?this._computeDesignSize():{w:n.offsetWidth||1,h:n.offsetHeight||1};if(t==="dynamic"){try{(m=this._computeHaSidebarGutters_)==null||m.call(this)}catch{}this.removeAttribute("ddc-fixed-ui"),(w=(v=this.style)==null?void 0:v.removeProperty)==null||w.call(v,"--ddc-ui-width")}else this.removeAttribute("ddc-fixed-ui"),(_=(S=this.style)==null?void 0:S.removeProperty)==null||_.call(S,"--ddc-ui-width");let de=`${U.w}px`,_e=`${U.h}px`,Re=n.style.width===de,re=n.style.height===_e,ze=n.style.transform==="scale(1)";if(!(Re&&re&&ze)&&(n.style.width=de,n.style.height=_e,n.style.transform="scale(1)",n.style.transformOrigin="top left",n.style.position="absolute",n.style.top="0",n.style.left="0",this.__pointerScaleX=1,this.__pointerScaleY=1,this.__scaleOuter)){let pe=this.parentElement&&((R=(T=this.parentElement).getBoundingClientRect)==null?void 0:R.call(T).width)||this.offsetParent&&((O=(C=this.offsetParent).getBoundingClientRect)==null?void 0:O.call(C).width)||this.getBoundingClientRect&&this.getBoundingClientRect().width||this.offsetWidth||U.w,He=`${Math.max(1,pe)}px`,Ye=`${Math.max(1,U.h)}px`;this.__scaleOuter.style.width!==He&&(this.__scaleOuter.style.width=He),this.__scaleOuter.style.height!==Ye&&(this.__scaleOuter.style.height=Ye)}try{(z=this._syncTabsWidth_)==null||z.call(this)}catch{}return}this.removeAttribute("ddc-fixed-ui"),(L=(b=this.style)==null?void 0:b.removeProperty)==null||L.call(b,"--ddc-ui-width");let o=typeof this._computeDesignSize=="function"?this._computeDesignSize():{w:n.offsetWidth||1,h:n.offsetHeight||1},c=this.parentElement&&((F=(I=this.parentElement).getBoundingClientRect)==null?void 0:F.call(I).width)||this.offsetParent&&((H=(N=this.offsetParent).getBoundingClientRect)==null?void 0:H.call(N).width)||this.getBoundingClientRect&&this.getBoundingClientRect().width||this.offsetWidth||o.w,s=Math.max(1,c),l=s/Math.max(1,o.w);this.__scaleOuter&&(this.__scaleOuter.style.width=`${s}px`,this.__scaleOuter.style.height=`${Math.max(1,o.h*l)}px`),n.style.width=`${o.w}px`,n.style.height=`${o.h}px`,n.style.transform=`scale(${l})`,n.style.transformOrigin="top left",n.style.position="absolute",n.style.top="0",n.style.left="0",this.__pointerScaleX=l||1,this.__pointerScaleY=l||1;try{(Q=this._syncTabsWidth_)==null||Q.call(this)}catch{}try{(B=this._layoutYtBackground_)==null||B.call(this)}catch{}try{(V=this._requestGridButtonsUpdateSoon)==null||V.call(this)}catch{}}_applyAutoFillNoScale(){var t,n,o,c,s,l,u;if(!this.__applyingAutoFill){this.__applyingAutoFill=!0;try{try{(t=this._ensureScaleWrapper)==null||t.call(this)}catch{}let f=this.__scaleOuter||((o=(n=this.shadowRoot)==null?void 0:n.querySelector)==null?void 0:o.call(n,".ddc-scale-outer"))||this,y=this.cardContainer||((s=(c=this.shadowRoot)==null?void 0:c.querySelector)==null?void 0:s.call(c,"#cardContainer"));if(!f||!y)return;f.style.overflow="hidden",f.style.overflowX="auto",f.style.overflowY="hidden",f.style.width="100%";let m=f.getBoundingClientRect(),v=Math.max(1,Math.round(m.width||0)),w=Math.max(1,Math.round(m.height||0));if(w<150){let I=Math.max(0,Math.round(m.top||0)),F=Math.max(1,window.innerHeight||document.documentElement.clientHeight||0),N=Math.max(1,F-I-8);Math.abs(N-w)>4&&(f.style.height=N+"px",m=f.getBoundingClientRect(),v=Math.max(1,Math.round(m.width||0)),w=Math.max(1,Math.round(m.height||0)))}let S=0,_=0,T=Array.from(y.querySelectorAll(".card-wrapper"));if(T.length){let I=y.getBoundingClientRect();for(let F of T){let N=F.getBoundingClientRect(),H=N.left-I.left+N.width,Q=N.top-I.top+N.height;H>S&&(S=H),Q>_&&(_=Q)}}else S=y.scrollWidth||y.offsetWidth||v,_=y.scrollHeight||y.offsetHeight||w;let R=Number(this.gridSize||1)||1,C=Math.max(1,Math.round(Math.ceil(S/R)*R)),O=Math.max(1,Math.round(Math.ceil(_/R)*R)),z=v>C?v:C,b=w>O?w:O;if(y.style.transform="none",y.style.transformOrigin="left top",this.__pointerScaleX=1,this.__pointerScaleY=1,y.style.width=`${z}px`,y.style.height=`${b}px`,f){let I=0;try{let H=f.getBoundingClientRect();I=Math.max(0,Math.round(H.top||0))}catch{}let F=Math.max(1,window.innerHeight||document.documentElement.clientHeight||0),N=Math.max(1,F-I-8);f.style.height=`${b}px`}y.style.position=y.style.position||"absolute",y.style.top=y.style.top||"0",y.style.left=y.style.left||"0";let L=this.tabsBar;L&&this.tabsPosition!=="left"&&(L.style.width="100%",L.style.maxWidth="100%")}finally{try{(l=this._layoutYtBackground_)==null||l.call(this)}catch{}try{(u=this._requestGridButtonsUpdateSoon)==null||u.call(this)}catch{}requestAnimationFrame(()=>{this.__applyingAutoFill=!1})}}}_resizeContainer(){var s,l;let t=this.cardContainer;if(!t||this._isContainerFixed())return;let n=Array.from(t.querySelectorAll(".card-wrapper")),o=0,c=0;n.forEach(u=>{let f=u.getBoundingClientRect(),y=t.getBoundingClientRect(),m=f.left-y.left+f.width,v=f.top-y.top+f.height;o=Math.max(o,m),c=Math.max(c,v)}),t.style.width=`${Math.ceil(o/this.gridSize)*this.gridSize||100}px`,t.style.height=`${Math.ceil(c/this.gridSize)*this.gridSize||100}px`;try{(s=this._syncTabsWidth_)==null||s.call(this)}catch{}try{(l=this._requestGridButtonsUpdateSoon)==null||l.call(this)}catch{}}_pushCardsOutOfTheWay(t,n,o,c,s){if(!this.__collisionOriginals)return;let l=new Set(t.map(C=>C.el)),u=Array.from(this.cardContainer.querySelectorAll(".card-wrapper")).filter(C=>!C.dataset.placeholder),f=this._isContainerFixed(),{w:y,h:m}=this._getContainerSize();for(let C of u){if(l.has(C))continue;let O=this.__collisionOriginals.get(C);if(O){C.setAttribute("data-x-raw",String(O.x)),C.setAttribute("data-y-raw",String(O.y));let z=c?Math.round(O.x/s)*s:O.x,b=c?Math.round(O.y/s)*s:O.y;this._setCardPosition(C,z,b)}}let v=t.map(C=>({x:C.snapX,y:C.snapY,w:C.w,h:C.h})),w=new Map,S=new Map;for(let C of u){let O=parseFloat(C.style.width)||C.getBoundingClientRect().width,z=parseFloat(C.style.height)||C.getBoundingClientRect().height;S.set(C,{w:O,h:z})}let _=n>0?1:n<0?-1:0,T=o>0?1:o<0?-1:0,R=Math.abs(n)>=Math.abs(o);for(let C of u){if(l.has(C))continue;let O=this.__collisionOriginals.get(C);if(!O)continue;let{x:z,y:b}=O,{w:L,h:I}=S.get(C),F=!1;for(let N of v)if(this._rectsOverlap({x:N.x,y:N.y,w:N.w,h:N.h},{x:z,y:b,w:L,h:I})){F=!0,R&&_!==0?z=_>0?N.x+N.w:N.x-L:!R&&T!==0?b=T>0?N.y+N.h:N.y-I:z=N.x+N.w;break}if(F){let N=0,H=R?_!==0?_*s:s:0,Q=R?0:T!==0?T*s:s;for(;N<100;){let B={x:z,y:b,w:L,h:I},V=!1;for(let U of v)if(this._rectsOverlap(B,U)){V=!0;break}if(!V){for(let[,U]of w)if(this._rectsOverlap(B,U)){V=!0;break}}if(!V&&f&&(z<0||b<0||z+L>y||b+I>m)&&(V=!0),!V)break;z+=H,b+=Q,N++}f&&(z=Math.max(0,Math.min(z,Math.max(0,y-L))),b=Math.max(0,Math.min(b,Math.max(0,m-I))))}w.set(C,{x:z,y:b,w:L,h:I}),v.push({x:z,y:b,w:L,h:I})}for(let[C,O]of w){C.setAttribute("data-x-raw",String(O.x)),C.setAttribute("data-y-raw",String(O.y));let z=c?Math.round(O.x/s)*s:O.x,b=c?Math.round(O.y/s)*s:O.y;this._setCardPosition(C,z,b)}}_rectFor(t,n=null,o=null,c=null,s=null){let l=n!=null?n:parseFloat(t.getAttribute("data-x"))||0,u=o!=null?o:parseFloat(t.getAttribute("data-y"))||0,f=c!=null?c:parseFloat(t.style.width)||t.getBoundingClientRect().width||0,y=s!=null?s:parseFloat(t.style.height)||t.getBoundingClientRect().height||0;return{x:l,y:u,w:f,h:y,el:t}}_rectsOverlap(t,n,o=.5){return!(t.x+t.w<=n.x+o||n.x+n.w<=t.x+o||t.y+t.h<=n.y+o||n.y+n.h<=t.y+o)}_anyCollisionFor(t,n){let o=Array.from(this.cardContainer.querySelectorAll(".card-wrapper")).filter(s=>!n.has(s)&&!s.dataset.placeholder);if(!o.length)return!1;let c=o.map(s=>this._rectFor(s));for(let s of t)for(let l of c)if(this._rectsOverlap(s,l))return!0;return!1}_extractCardConfig(t){var o;if(!t)return{};let n=t._config||t.config;if(n&&typeof n=="object"&&Object.keys(n).length)try{return typeof structuredClone=="function"?structuredClone(n):JSON.parse(JSON.stringify(n))}catch{return{...n}}try{let c=t.closest?t.closest(".card-wrapper"):null,s=(o=c==null?void 0:c.dataset)==null?void 0:o.cfg;if(s){let l=JSON.parse(s);if(l&&typeof l=="object")return l}}catch{}return{}}async _openCardManager(){await this._openSmartPicker("add")}_catalog(){return[{id:"favorites",name:"Favorites",items:[]},{id:"recent",name:"Recent",items:[]},{id:"basics",name:"Basics",items:[{type:"entities",name:"Entities",icon:"mdi:format-list-bulleted"},{type:"entity",name:"Entity",icon:"mdi:checkbox-blank-circle-outline"},{type:"tile",name:"Tile",icon:"mdi:view-grid-outline"},{type:"button",name:"Button",icon:"mdi:gesture-tap-button"},{type:"glance",name:"Glance",icon:"mdi:eye-outline"},{type:"markdown",name:"Markdown",icon:"mdi:language-markdown"},{type:"custom_card",name:"Custom Card",icon:"mdi:puzzle-outline"}]},{id:"sensors",name:"Sensors",items:[{type:"sensor",name:"Sensor",icon:"mdi:antenna"},{type:"gauge",name:"Gauge",icon:"mdi:gauge"},{type:"history-graph",name:"History graph",icon:"mdi:chart-line"},{type:"statistics-graph",name:"Statistics graph",icon:"mdi:chart-bar"}]},{id:"visual",name:"Visual",items:[{type:"picture-entity",name:"Picture entity",icon:"mdi:image-outline"},{type:"picture-glance",name:"Picture glance",icon:"mdi:image-multiple-outline"},{type:"weather-forecast",name:"Weather",icon:"mdi:weather-partly-cloudy"},{type:"map",name:"Map",icon:"mdi:map"},{type:"iframe",name:"iFrame",icon:"mdi:application"}]},{id:"controls",name:"Controls",items:[{type:"light",name:"Light",icon:"mdi:lightbulb-outline"},{type:"thermostat",name:"Thermostat",icon:"mdi:thermostat"},{type:"media-control",name:"Media control",icon:"mdi:play-circle-outline"},{type:"alarm-panel",name:"Alarm panel",icon:"mdi:shield-home-outline"},{type:"area",name:"Area",icon:"mdi:map-marker"}]}]}async _getEditorElementForType(t,n){try{console.info("[ddc:editor] Requesting editor element",{type:t,cfg:n})}catch{}let o=await this._helpersPromise||await window.loadCardHelpers();try{typeof t=="string"&&t&&!t.startsWith("custom:")&&t!=="custom_card"&&await this._ensureCardModuleLoaded(t,n)}catch{}if(typeof t=="string"&&t==="entity")try{return await this._getEntityCardEditor(n||{})}catch(y){console.warn("[ddc:editor] Custom entity editor failed",y)}let c=async()=>{try{if(o.getCardElementClass)return await o.getCardElementClass(t);let y;if(n&&typeof n=="object")y={type:t,...n};else{let v;try{v=await this._getStubConfigForType(t)}catch{}y=v&&typeof v=="object"?{...v}:{type:t}}let m=o.createCardElement(y);return(m==null?void 0:m.constructor)||null}catch{return null}};try{let y=await c();if(y){if(typeof y.getConfigElement=="function"){let m=await y.getConfigElement();if(m){try{console.info("[ddc:editor] Found static class editor",{type:t})}catch{}return m}}if(typeof y.getConfigForm=="function")try{let m=await y.getConfigForm();if(m&&m.schema){try{await customElements.whenDefined("ha-form")}catch{}let v=document.createElement("ha-form");v.hass=this.hass,v.schema=Array.isArray(m.schema)?m.schema.map(w=>({...w})):m.schema,typeof m.computeLabel=="function"&&(v.computeLabel=m.computeLabel.bind(y)),typeof m.computeHelper=="function"&&(v.computeHelper=m.computeHelper.bind(y)),v.data={...n},v.addEventListener("value-changed",w=>{});try{console.info("[ddc:editor] Generated form editor via getConfigForm",{type:t})}catch{}return v}}catch{}}}catch{}if(typeof t=="string"&&(t.startsWith("custom:")||t==="custom_card"))try{let y;try{y=await this._getStubConfigForType(t)}catch{}let m=y&&typeof y=="object"?{...y}:{type:t},v=o.createCardElement(m);if(v.hass=this.hass,typeof v.getConfigElement=="function"){let w=await v.getConfigElement();if(w){try{console.info("[ddc:editor] Found instance-level editor",{type:t})}catch{}return w}}}catch{}let s=String(t).replace(/^custom:/,""),u=(Array.isArray(window.customCards)?window.customCards:[]).find(y=>(y==null?void 0:y.type)===s||(y==null?void 0:y.type)===t||(y==null?void 0:y.type)===`custom:${s}`),f=[];u!=null&&u.editor&&f.push(u.editor),f.push(`${s}-editor`,`${s}-config-editor`),s&&typeof s=="string"&&f.push(`hui-${s}-card-editor`);for(let y of f)if(!(!y||typeof y!="string"))for(let m of[0,100,300,700,1500,3e3])try{if(customElements.get(y)||await Promise.race([customElements.whenDefined(y),new Promise(v=>setTimeout(v,m))]),customElements.get(y)){try{console.info("[ddc:editor] Found editor by tag",{type:t,tag:y})}catch{}return document.createElement(y)}}catch{}return null}async _ensureCardModuleLoaded(t,n){try{let o=await this._helpersPromise||await window.loadCardHelpers(),c;if(n&&typeof n=="object")c={type:t,...n};else{let u;try{u=await this._getStubConfigForType(t)}catch{}c=u&&typeof u=="object"?{...u}:{type:t}}let s=o.createCardElement(c);s.hass=this.hass;let l=document.createElement("div");l.style.cssText="position:fixed;left:-9999px;top:-9999px;opacity:0;pointer-events:none;",l.appendChild(s),document.body.appendChild(l),await new Promise(u=>requestAnimationFrame(u)),l.remove();try{console.info("[ddc:editor] Warmed card module",{type:t})}catch{}}catch{}}_ensureOverlayZFix(){if(document.querySelector("style[data-ddc-overlay-fix]"))return;let t=document.createElement("style");t.setAttribute("data-ddc-overlay-fix",""),t.textContent=`
      /* Make common HA overlays float above our modal */
      vaadin-combo-box-overlay,
      vaadin-overlay-backdrop,
      mwc-menu-surface,
      .mdc-menu-surface--open {
        z-index: 1000000 !important;
      }
    `,document.head.appendChild(t)}_customCardsFromRegistry(){return(Array.isArray(window.customCards)?window.customCards:[]).map(n=>{var o;return{type:(o=n==null?void 0:n.type)!=null&&o.startsWith("custom:")?n.type:`custom:${n==null?void 0:n.type}`,name:(n==null?void 0:n.name)||(n==null?void 0:n.type)||"Custom card",icon:"mdi:puzzle-outline",description:(n==null?void 0:n.description)||"",editorTag:(n==null?void 0:n.editor)||null}}).filter(n=>typeof n.type=="string"&&n.type.startsWith("custom:"))}_schemaForType(t){let n=c=>c,o=[];return{entities:n({fields:[{key:"entities",type:"entities",multi:!0,domains:o,label:"Entities"}]}),entity:n({fields:[{key:"entity",type:"entity",multi:!1,domains:o,label:"Entity"}]}),sensor:n({fields:[{key:"entity",type:"entity",multi:!1,domains:["sensor"],label:"Sensor"},{key:"name",type:"text",label:"Name (optional)"}]}),gauge:n({fields:[{key:"entity",type:"entity",multi:!1,domains:["sensor","number","input_number"],label:"Numeric entity"},{key:"min",type:"number",label:"Min",step:"any"},{key:"max",type:"number",label:"Max",step:"any"}]}),"history-graph":n({fields:[{key:"entities",type:"entities",multi:!0,domains:o,label:"Entities (multiselect)"},{key:"hours_to_show",type:"number",label:"Hours to show",default:24}]}),"statistics-graph":n({fields:[{key:"entities",type:"entities",multi:!0,domains:["sensor","number","input_number"],label:"Entities (multiselect)"},{key:"chart_type",type:"select",options:["line","bar"],label:"Chart type",default:"line"},{key:"statistic",type:"select",options:["mean","min","max","sum"],label:"Statistic",default:"mean"}]}),glance:n({fields:[{key:"entities",type:"entities",multi:!0,domains:o,label:"Entities (multiselect)"}]}),"picture-glance":n({fields:[{key:"entities",type:"entities",multi:!0,domains:o,label:"Entities (multiselect)"},{key:"image",type:"text",label:"Image URL (optional)"}]}),"picture-entity":n({fields:[{key:"entity",type:"entity",multi:!1,domains:o,label:"Entity"},{key:"image",type:"text",label:"Image URL (optional)"}]}),"weather-forecast":n({fields:[{key:"entity",type:"entity",multi:!1,domains:["weather"],label:"Weather entity"}]}),map:n({fields:[{key:"entities",type:"entities",multi:!0,domains:["device_tracker","person"],label:"Trackers / people (multiselect)"},{key:"default_zoom",type:"number",label:"Default zoom",default:14}]}),"media-control":n({fields:[{key:"entity",type:"entity",multi:!1,domains:["media_player"],label:"Media player"}]}),light:n({fields:[{key:"entity",type:"entity",multi:!1,domains:["light"],label:"Light"}]}),thermostat:n({fields:[{key:"entity",type:"entity",multi:!1,domains:["climate"],label:"Climate"}]}),"alarm-panel":n({fields:[{key:"entity",type:"entity",multi:!1,domains:["alarm_control_panel"],label:"Alarm"}]}),markdown:n({fields:[{key:"content",type:"textarea",label:"Markdown"}]}),tile:n({fields:[{key:"entity",type:"entity",multi:!1,domains:o,label:"Entity"}]}),button:n({fields:[{key:"entity",type:"entity",multi:!1,domains:o,label:"Entity (optional)"}]}),iframe:n({fields:[{key:"url",type:"text",label:"URL"}]}),area:n({fields:[{key:"area",type:"text",label:"Area ID"}]})}[t]||{fields:[]}}async _getEntityCardEditor(t={}){let n=document.createElement("div");n.style.display="flex",n.style.flexDirection="column",n.style.gap="12px",n.style.padding="8px 0",n.style.overflow="visible",n._cfg={type:"entity",...t||{}};let o=()=>{let O={type:"entity"};["entity","name","icon","attribute","unit","state_color","theme"].forEach(z=>{let b=n._cfg[z];b!==void 0&&b!==""&&b!==null&&(O[z]=b)}),n.dispatchEvent(new CustomEvent("config-changed",{detail:{config:O}}))},c=document.createElement("div");c.style.display="flex",c.style.flexDirection="column",c.style.gap="4px";let s=document.createElement("span");s.textContent="Entity",s.style.fontSize=".8rem",s.style.opacity="0.8";let l=document.createElement("ha-entity-picker");l.setAttribute("label","Select entity"),l.addEventListener("value-changed",O=>{var b,L,I;O.stopPropagation();let z=(I=O.detail&&((b=O.detail.value)!=null?b:O.detail))!=null?I:(L=O.target)==null?void 0:L.value;n._cfg.entity=z||"";try{u()}catch{}o()}),c.appendChild(s),c.appendChild(l),n.appendChild(c);let u=()=>{},f=document.createElement("div");f.style.display="grid",f.style.gridTemplateColumns="1fr 1fr",f.style.columnGap="12px",f.style.rowGap="12px";let y=(O,z)=>{let b=document.createElement("div");b.style.display="flex",b.style.flexDirection="column",b.style.gap="4px";let L=document.createElement("span");L.textContent=O,L.style.fontSize=".8rem",L.style.opacity="0.8",b.appendChild(L),b.appendChild(z),f.appendChild(b)},m;customElements.get("ha-textfield")?(m=document.createElement("ha-textfield"),m.setAttribute("label","Name"),m.addEventListener("input",()=>{n._cfg.name=m.value||void 0,o()})):(m=document.createElement("input"),m.type="text",m.placeholder="Name",m.addEventListener("input",()=>{n._cfg.name=m.value||void 0,o()}),Object.assign(m.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})),y("Name",m);let v;customElements.get("ha-icon-picker")?(v=document.createElement("ha-icon-picker"),v.setAttribute("label","Icon"),v.addEventListener("value-changed",O=>{var z;O.stopPropagation(),n._cfg.icon=((z=O.detail)==null?void 0:z.value)||void 0,o()}),Object.assign(v.style,{position:"relative",zIndex:"1000"})):customElements.get("ha-textfield")?(v=document.createElement("ha-textfield"),v.setAttribute("label","Icon"),v.addEventListener("input",()=>{n._cfg.icon=v.value||void 0,o()})):(v=document.createElement("input"),v.type="text",v.placeholder="mdi:icon",v.addEventListener("input",()=>{n._cfg.icon=v.value||void 0,o()}),Object.assign(v.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})),y("Icon",v);let w;if(u=()=>{var H,Q;let O=[],z=(H=n._cfg)==null?void 0:H.entity,b=n._hass;if(z&&b&&b.states&&b.states[z]&&b.states[z].attributes)try{O=Object.keys(b.states[z].attributes||{}).filter(B=>B&&typeof B=="string"),O.sort()}catch{}let L=w&&typeof w.value!="undefined"?w.value:void 0,I=((w==null?void 0:w.tagName)||"").toLowerCase(),F={min_color_temp_kelvin:"Minimum color temperature (Kelvin)",max_color_temp_kelvin:"Maximum color temperature (Kelvin)",min_color_temp_mireds:"Minimum color temperature (mireds)",max_color_temp_mireds:"Maximum color temperature (mireds)",min_mireds:"Minimum color temperature (mireds)",max_mireds:"Maximum color temperature (mireds)",effect_list:"Available effects",color_mode:"Color mode",brightness:"Brightness",hs_color:"Hs color",rgb_color:"Rgb color",xy_color:"Xy color",entity_id:"Entity ID",friendly_name:"Friendly name",icon:"Icon"},N=B=>F[B]?F[B]:B.split("_").map(V=>V&&(V.toLowerCase()==="kelvin"?"Kelvin":V.toLowerCase()==="mireds"?"mireds":V.charAt(0).toUpperCase()+V.slice(1))).join(" ");if(I==="ha-combo-box"){let B=O.map(V=>({value:V,label:N(V)}));B.unshift({value:"",label:""}),w.items=B,L&&O.includes(L)?w.value=L:w.value=""}else if(I==="ha-select"){w.innerHTML="";let B=document.createElement("mwc-list-item");B.setAttribute("value",""),B.textContent="",w.appendChild(B);for(let V of O){let U=document.createElement("mwc-list-item");U.setAttribute("value",V),U.textContent=N(V),w.appendChild(U)}L&&O.includes(L)?w.value=L:w.value="",(Q=w.requestUpdate)==null||Q.call(w)}else if(I==="select"){w.innerHTML="";let B=document.createElement("option");B.value="",B.textContent="",w.appendChild(B);for(let V of O){let U=document.createElement("option");U.value=V,U.textContent=N(V),w.appendChild(U)}L&&O.includes(L)&&(w.value=L)}},customElements.get("ha-combo-box"))w=document.createElement("ha-combo-box"),w.setAttribute("label","Attribute"),w.setAttribute("item-label-path","label"),w.setAttribute("item-value-path","value"),w.setAttribute("allow-custom-value","false"),w.addEventListener("value-changed",O=>{var b,L;O.stopPropagation();let z=(L=(b=O.detail)==null?void 0:b.value)!=null?L:w.value;n._cfg.attribute=z||void 0,o()});else if(customElements.get("ha-select"))w=document.createElement("ha-select"),w.setAttribute("label","Attribute"),w.addEventListener("selected",O=>{O.stopPropagation(),n._cfg.attribute=w.value||void 0,o()}),Object.assign(w.style,{position:"relative",zIndex:"1000"});else{w=document.createElement("select");let O=document.createElement("option");O.value="",O.textContent="",w.appendChild(O),w.addEventListener("change",z=>{z.stopPropagation(),n._cfg.attribute=w.value||void 0,o()}),Object.assign(w.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),Object.assign(w.style,{position:"relative",zIndex:"1000"})}u(),y("Attribute",w);let S;customElements.get("ha-textfield")?(S=document.createElement("ha-textfield"),S.setAttribute("label","Unit"),S.addEventListener("input",()=>{n._cfg.unit=S.value||void 0,o()})):(S=document.createElement("input"),S.type="text",S.placeholder="Unit",S.addEventListener("input",()=>{n._cfg.unit=S.value||void 0,o()}),Object.assign(S.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})),y("Unit",S);let _;if(customElements.get("ha-select"))_=document.createElement("ha-select"),_.setAttribute("label","Theme (optional)"),_.addEventListener("selected",O=>{O.stopPropagation(),n._cfg.theme=_.value||void 0,o()});else{_=document.createElement("select");let O=document.createElement("option");O.value="",O.textContent="",_.appendChild(O),_.addEventListener("change",z=>{z.stopPropagation(),n._cfg.theme=_.value||void 0,o()}),Object.assign(_.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})}y("Theme (optional)",_);let T;customElements.get("ha-switch")?(T=document.createElement("ha-switch"),T.addEventListener("change",()=>{n._cfg.state_color=!!T.checked,o()})):(T=document.createElement("input"),T.type="checkbox",T.addEventListener("change",()=>{n._cfg.state_color=!!T.checked,o()}));let R=document.createElement("div");R.style.display="flex",R.style.alignItems="center",R.style.gap="8px";let C=document.createElement("span");return C.textContent="Show state color",C.style.fontSize=".8rem",C.style.opacity="0.8",R.appendChild(C),R.appendChild(T),f.appendChild(R),n.appendChild(f),n.setConfig=(O={})=>{n._cfg={type:"entity",...O||{}};let z=n._cfg;if(l&&("value"in l&&(l.value=z.entity||""),l.setAttribute&&l.setAttribute("value",z.entity||"")),m&&(m.value=z.name||""),v&&(v.value=z.icon||""),w){try{u()}catch{}w.value=z.attribute||""}S&&(S.value=z.unit||""),_&&(_.value=z.theme||""),T&&"checked"in T&&(T.checked=!!z.state_color)},Object.defineProperty(n,"hass",{get(){return this._hass},set(O){var z;if(this._hass=O,l){try{l.hass=O}catch{}customElements.get("ha-entity-picker")||customElements.whenDefined("ha-entity-picker").then(()=>{var b;try{l.hass=this._hass,(b=l.requestUpdate)==null||b.call(l)}catch{}}).catch(()=>{})}if(v){try{v.hass=O}catch{}customElements.get("ha-icon-picker")||customElements.whenDefined("ha-icon-picker").then(()=>{var b;try{v.hass=this._hass,(b=v.requestUpdate)==null||b.call(v)}catch{}}).catch(()=>{})}if(_){let b=[];O&&O.themes&&(O.themes.themes?b=Object.keys(O.themes.themes):typeof O.themes=="object"&&(b=Object.keys(O.themes).filter(F=>F!=="default_theme")));let L=_.value,I=(_.tagName||"").toLowerCase();if(I==="ha-select"){_.innerHTML="";let F=document.createElement("mwc-list-item");F.setAttribute("value",""),F.textContent="",_.appendChild(F);for(let N of b){let H=document.createElement("mwc-list-item");H.setAttribute("value",N),H.textContent=N,_.appendChild(H)}L&&b.includes(L)?_.value=L:L||(_.value=""),(z=_.requestUpdate)==null||z.call(_)}else if(I==="select"){_.innerHTML="";let F=document.createElement("option");F.value="",F.textContent="",_.appendChild(F);for(let N of b){let H=document.createElement("option");H.value=N,H.textContent=N,_.appendChild(H)}L&&Array.from(_.options).some(N=>N.value===L)&&(_.value=L)}}try{u()}catch{}}}),n.setConfig(t||{}),n}_shapeBySchema(t,n={}){let o=this._schemaForType(t)||{fields:[]},c={...n,type:t};for(let s of o.fields){let l=c[s.key];if(s.type==="entities"){let f=(Array.isArray(l)?l:l!=null&&l!==""?[l]:[]).filter(Boolean);f.length?c[s.key]=f:delete c[s.key]}else if(s.type==="entity")Array.isArray(l)&&(l=l[0]),l==null||l===""?delete c[s.key]:c[s.key]=String(l);else if(s.type==="number")if(l==null||l==="")delete c[s.key];else{let u=Number(l);Number.isFinite(u)?c[s.key]=u:delete c[s.key]}else(s.type==="select"||s.type==="text"||s.type==="textarea")&&(l==null||l===""?delete c[s.key]:c[s.key]=l)}return c}_statesList(t){var c;let n=Object.keys(((c=this.hass)==null?void 0:c.states)||{});if(!t||!t.length)return n;if(!this.__domainIndex||this.__domainIndex._gen!==n.length){let s={};for(let l of n){let u=l.split(".")[0];(s[u]||(s[u]=[])).push(l)}this.__domainIndex={_gen:n.length,map:s}}let o=[];for(let s of t)this.__domainIndex.map[s]&&o.push(...this.__domainIndex.map[s]);return o}_isNumericEntity(t){var c,s;let n=(s=(c=this.hass)==null?void 0:c.states)==null?void 0:s[t];if(!n)return!1;let o=Number(n.state);return Number.isFinite(o)}_getFaves(){try{return new Set(JSON.parse(localStorage.getItem("ddc_faves")||"[]"))}catch{return new Set}}_setFaves(t){try{localStorage.setItem("ddc_faves",JSON.stringify(Array.from(t)))}catch{}}_getRecent(){try{return JSON.parse(localStorage.getItem("ddc_recent_types")||"[]")}catch{return[]}}_pushRecent(t){try{let n=this._getRecent().filter(o=>o!==t);n.unshift(t),n.length>10&&(n.length=10),localStorage.setItem("ddc_recent_types",JSON.stringify(n))}catch{}}async _ensureCodeMirror(){if(!this.__cmReady){if(!document.querySelector("link[data-cm-core]")){let t=document.createElement("link");t.rel="stylesheet",t.href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.css",t.setAttribute("data-cm-core",""),document.head.appendChild(t)}await new Promise(t=>{if(window.CodeMirror)return t();let n=document.createElement("script");n.src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.js",n.onload=t,document.head.appendChild(n)}),await new Promise(t=>{var o,c;if((c=(o=window.CodeMirror)==null?void 0:o.mimeModes)!=null&&c.yaml)return t();let n=document.createElement("script");n.src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/yaml/yaml.min.js",n.onload=t,document.head.appendChild(n)}),this.__cmReady=!0}}async _mountYamlEditor(t,n,o,c){let s=f=>window.jsyaml?window.jsyaml.dump(f):JSON.stringify(f,null,2),l=f=>window.jsyaml?window.jsyaml.load(f):JSON.parse(f);t.innerHTML="";let u=s(n);if(customElements.get("ha-code-editor")){let f=document.createElement("ha-code-editor");f.mode="yaml",f.hass=this.hass,f.value=u,f.style.display="block",f.style.height="260px",t.appendChild(f);let y=!1;return f.addEventListener("value-changed",m=>{var w,S,_;if(y)return;let v=(_=(S=(w=m.detail)==null?void 0:w.value)!=null?S:f.value)!=null?_:"";try{o(l(v))}catch(T){c==null||c(T)}}),{setValue:m=>{var w;let v=s(m);((w=f.value)!=null?w:"")!==v&&(y=!0,f.value=v,y=!1)}}}try{await this._ensureCodeMirror();let f=window.CodeMirror(t,{value:u,mode:"yaml",lineNumbers:!0,lineWrapping:!0,indentUnit:2,tabSize:2}),y=!1;return f.on("change",()=>{if(y)return;let m=f.getValue();try{o(l(m))}catch(v){c==null||c(v)}}),{setValue:m=>{let v=s(m);f.getValue()!==v&&(y=!0,f.setValue(v),y=!1)}}}catch{let f=document.createElement("textarea");return f.style.width="100%",f.style.height="260px",f.value=u,f.addEventListener("input",()=>{try{o(l(f.value))}catch(y){c==null||c(y)}}),t.appendChild(f),{setValue:y=>{let m=s(y);f.value!==m&&(f.value=m)}}}}_createVirtualList({container:t,items:n,rowHeight:o=36,renderRow:c}){t.style.position="relative",t.style.overflow="auto";let s=document.createElement("div");s.style.height=`${n.length*o}px`,t.innerHTML="",t.appendChild(s);let l=new Map,u=()=>{let f=t.scrollTop,y=t.clientHeight,m=Math.max(0,Math.floor(f/o)-6),v=Math.min(n.length-1,Math.ceil((f+y)/o)+6);for(let[w,S]of l)(w<m||w>v)&&(S.remove(),l.delete(w));for(let w=m;w<=v;w++){if(l.has(w))continue;let S=c(n[w],w);S.style.position="absolute",S.style.left="0",S.style.right="0",S.style.top=`${w*o}px`,l.set(w,S),t.appendChild(S)}};return t.addEventListener("scroll",u,{passive:!0}),new ResizeObserver(u).observe(t),u(),{refresh(f){if(f){n=f,s.style.height=`${n.length*o}px`;for(let[,y]of l)y.remove();l.clear()}u()}}}async _openSmartPicker(t="add",n=null,o=null){let c=()=>s.remove(),s=document.createElement("div");s.className="modal",s.innerHTML=`
      <div class="dialog" role="dialog" aria-modal="true">
        <div class="dlg-head">
          <h3>${t==="edit"?"Edit card":"Add a card"}</h3>
          <div style="display:flex;gap:10px;flex:1">
            <input id="search" placeholder="Search cards (name or type)\u2026" aria-label="search" style="flex:1;padding:10px 12px;border-radius:12px;border:1px solid var(--divider-color);background:var(--primary-background-color);color:var(--primary-text-color)">
          </div>
          <button class="btn secondary" id="cancelBtn"><ha-icon icon="mdi:close"></ha-icon><span style="margin-left:6px">Cancel</span></button>
          <button class="btn" id="addBtn" disabled>${t==="edit"?'<ha-icon icon="mdi:content-save"></ha-icon><span style="margin-left:6px">Update</span>':'<ha-icon icon="mdi:plus"></ha-icon><span style="margin-left:6px">Add</span>'}
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
          <button class="btn" id="footAdd" disabled>${t==="edit"?'<ha-icon icon="mdi:content-save"></ha-icon><span style="margin-left:6px">Update</span>':'<ha-icon icon="mdi:plus"></ha-icon><span style="margin-left:6px">Add</span>'}
          </button>
        </div>
      </div>`,this.shadowRoot.appendChild(s);let l=s.querySelector("#leftPane"),u=s.querySelector("#addBtn"),f=s.querySelector("#footAdd"),y=s.querySelector("#cancelBtn"),m=s.querySelector("#footCancel"),v=s.querySelector("#search"),w=s.querySelector("#cardHost"),S=s.querySelector("#editorHost"),_=s.querySelector("#editorSpin"),T=s.querySelector("#quickFill"),R=s.querySelector("#yamlHost"),C=s.querySelector("#yamlErr"),O=s.querySelector("#yamlSec"),z=s.querySelector("#tabVisual"),b=s.querySelector("#tabYaml"),L=s.querySelector("#tabVis"),I=s.querySelector("#visSec"),F=s.querySelector("#visHost"),N=s.querySelector("#err"),H=s.querySelector("#previewSpin"),Q=j=>{u.disabled=f.disabled=!j},B=j=>{j?(N.hidden=!1,N.textContent=j):(N.hidden=!0,N.textContent="")},V=this._getFaves(),U=this._getRecent(),de=this._catalog(),_e=de.find(j=>j.id==="favorites"),Re=de.find(j=>j.id==="recent"),re=de.flatMap(j=>j.items||[]);_e.items=re.filter(j=>V.has(j.type)),Re.items=U.map(j=>re.find($=>$.type===j)).filter(Boolean);let ze=this._customCardsFromRegistry();ze.length&&de.push({id:"custom",name:"Custom (installed)",items:ze});let pe=s.querySelector("#quickFillSec");pe&&(pe.style.display="none");let He=s.querySelector("#optionsSec .hd"),Ye,De,Ue=()=>{if(!De)return;let j=$e&&V.has($e),$=De.querySelector("ha-icon");$&&$.setAttribute("icon",j?"mdi:star":"mdi:star-outline")},ot=j=>{if(Ye){let $=re.find(we=>we.type===j),me=$?$.name:j||"";Ye.textContent=me}Ue()};if(He&&!He.querySelector(".sel-info")){let j=He.querySelector("span");j&&(j.style.display="none"),Ye=document.createElement("span"),Ye.className="sel-info",Ye.style.flex="1",Ye.style.fontWeight="bold",Ye.style.paddingRight="8px",He.insertBefore(Ye,He.firstChild),De=document.createElement("button"),De.className="icon-btn",De.setAttribute("title","Favorite"),Object.assign(De.style,{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"28px",height:"28px",borderRadius:"6px",border:"1px solid var(--divider-color)",background:"var(--primary-background-color)",padding:"0",marginLeft:"4px",cursor:"pointer"}),De.innerHTML='<ha-icon icon="mdi:star-outline"></ha-icon>',He.appendChild(De),De.addEventListener("click",$=>{$.stopPropagation(),$e&&(V.has($e)?V.delete($e):V.add($e),this._setFaves(V),Ue(),ct())})}let st="visual",ae=j=>{let $=j==="yaml",me=j==="vis",we=!$&&!me;z.classList.toggle("active",we),z.setAttribute("aria-selected",String(we)),b.classList.toggle("active",$),b.setAttribute("aria-selected",String($)),L&&(L.classList.toggle("active",me),L.setAttribute("aria-selected",String(me))),S.parentElement.style.display=we?"":"none",O.style.display=$?"":"none",I&&(I.style.display=me?"":"none"),$?O.scrollIntoView({behavior:"smooth",block:"start"}):me&&I&&I.scrollIntoView({behavior:"smooth",block:"start"}),st=$?"yaml":me?"vis":"visual"};z.addEventListener("click",async()=>{var j;if(ae("visual"),!Me)await Tt(oe);else try{(j=Me.setConfig)==null||j.call(Me,oe)}catch{}}),b.addEventListener("click",()=>ae("yaml")),L&&L.addEventListener("click",()=>{ae("vis");try{Fe(oe)}catch{}}),ae("visual");let ut=()=>{let j=v.value.trim().toLowerCase();return de.map($=>({...$,items:($.items||[]).filter(me=>!j||me.name.toLowerCase().includes(j)||me.type.toLowerCase().includes(j))})).filter($=>$.items&&$.items.length||$.id==="favorites"||$.id==="recent")},ct=()=>{let j=ut();l.innerHTML="",j.forEach($=>{let me=document.createElement("div");me.style.padding="12px",me.style.borderBottom="1px solid var(--divider-color)";let we=document.createElement("h4");if(we.textContent=$.name,we.style.margin="0 0 10px 0",we.style.fontSize=".92rem",we.style.opacity=".85",me.appendChild(we),!$.items.length&&($.id==="favorites"||$.id==="recent")){let ue=document.createElement("div");ue.style.opacity=".6",ue.style.fontSize=".85rem",ue.textContent=$.id==="favorites"?"No favorites yet.":"No recent items yet.",me.appendChild(ue)}else $.items.forEach(ue=>{let Te=document.createElement("button");Te.innerHTML=`<span style="display:inline-flex;align-items:center;gap:8px">
              <ha-icon icon="${ue.icon}"></ha-icon><span>${ue.name}</span>
            </span>`,Object.assign(Te.style,{display:"block",width:"100%",textAlign:"left",border:"none",background:"transparent",padding:"8px",borderRadius:"10px",cursor:"pointer"}),Te.addEventListener("click",async()=>{Pe(Te),await yt(ue.type)}),me.appendChild(Te)});l.appendChild(me)})},Pe=j=>{l.querySelectorAll("button").forEach($=>{$.classList.remove("active"),$.style.background="transparent",$.style.color=""}),j&&(j.classList.add("active"),j.style.background="rgba(3,169,244,.12)",j.style.color="var(--primary-color)")},oe=null,$e=null,ke=null,Me=null,ft=null,gt=0,Bt=null,lt="",At=(j,$)=>{var Y;let me=this._schemaForType(j);if(T.innerHTML="",!me.fields.length){T.innerHTML='<div style="opacity:.7;font-size:.9rem">No quick fill for this card \u2014 use the editors below.</div>';return}let we=Object.keys(((Y=this.hass)==null?void 0:Y.states)||{}),ue=document.createElement("div"),Te=(Z,Oe,K,Qe)=>{let Ve=document.createElement("div");Object.assign(Ve.style,{padding:"8px 10px",border:"1px solid var(--divider-color)",borderRadius:"10px",cursor:"pointer",userSelect:"none",display:"flex",alignItems:"center",gap:"8px"}),Ve.innerHTML=`<ha-icon icon="mdi:checkbox-blank-outline"></ha-icon><span>${Z}</span>`,Oe.includes(Z)&&(Ve.style.background="rgba(3,169,244,.12)",Ve.style.borderColor="var(--primary-color)",Ve.querySelector("ha-icon").setAttribute("icon","mdi:checkbox-marked")),Ve.addEventListener("click",async()=>{let rt=Oe.indexOf(Z);rt>=0?Oe.splice(rt,1):Oe.push(Z);let je=Oe.includes(Z);Ve.style.background=je?"rgba(3,169,244,.12)":"",Ve.style.borderColor=je?"var(--primary-color)":"var(--divider-color)",Ve.querySelector("ha-icon").setAttribute("icon",je?"mdi:checkbox-marked":"mdi:checkbox-blank-outline"),oe=this._shapeBySchema(j,{...oe,[Qe]:[...Oe]}),mt(oe),ke==null||ke.setValue(oe)}),K.appendChild(Ve)};me.fields.forEach(Z=>{var Qe,Ve,rt,je,nt,et,tt,Ge,Xe;let Oe=document.createElement("div");Object.assign(Oe.style,{display:"flex",gap:"8px",alignItems:"center",marginBottom:"8px"});let K=document.createElement("label");if(K.textContent=Z.label||Z.key,K.style.minWidth="130px",Z.type==="entities"){let Le=document.createElement("div");Le.style.flex="1";let ye=document.createElement("input");Object.assign(ye,{placeholder:"Filter entities\u2026"}),Object.assign(ye.style,{width:"100%",padding:"8px 10px",borderRadius:"10px",border:"1px solid var(--divider-color)",background:"var(--card-background-color)",color:"var(--primary-text-color)"});let Ce=document.createElement("div");Object.assign(Ce.style,{maxHeight:"220px",overflow:"auto",marginTop:"8px",border:"1px solid var(--divider-color)",borderRadius:"10px",padding:"6px"});let Be=Z.domains&&Z.domains.length?this._statesList(Z.domains):we,Ee=Array.isArray($[Z.key])?[...$[Z.key]]:$[Z.key]?[$[Z.key]]:[],ce=ee=>{let J=document.createElement("div");Object.assign(J.style,{padding:"6px 10px",margin:"4px 0",border:"1px solid var(--divider-color)",borderRadius:"10px",cursor:"pointer",display:"flex",alignItems:"center",gap:"8px",background:""});let M=document.createElement("ha-icon");M.setAttribute("icon","mdi:checkbox-blank-outline"),M.style.setProperty("--mdc-icon-size","18px");let W=document.createElement("span");W.textContent=ee,W.style.whiteSpace="nowrap",W.style.overflow="hidden",W.style.textOverflow="ellipsis",J.append(M,W);let te=()=>{let se=Ee.includes(ee);J.style.background=se?"rgba(3,169,244,.12)":"",J.style.borderColor=se?"var(--primary-color)":"var(--divider-color)",M.setAttribute("icon",se?"mdi:checkbox-marked":"mdi:checkbox-blank-outline")};return te(),J.addEventListener("click",()=>{let se=Ee.indexOf(ee);se>=0?Ee.splice(se,1):Ee.push(ee),oe=this._shapeBySchema(j,{...oe,[Z.key]:[...Ee]}),mt(oe),ke==null||ke.setValue(oe),te()}),J},ne=Be;this._createVirtualList({container:Ce,items:ne,rowHeight:36,renderRow:ce}),ye.addEventListener("input",()=>{let ee=ye.value.trim().toLowerCase();ne=Be.filter(J=>!ee||J.toLowerCase().includes(ee)),this._createVirtualList({container:Ce,items:ne,rowHeight:36,renderRow:ce})}),Le.append(ye,Ce),Oe.append(K,Le),oe=this._shapeBySchema(j,{...$,[Z.key]:Ee})}if(Z.type==="entity"){let Le=document.createElement("div");Le.style.flex="1",Le.style.position="relative";let ye=document.createElement("input");ye.setAttribute("list","ddc_entlist_"+Z.key),Object.assign(ye.style,{width:"100%",padding:"8px 10px 8px 36px",borderRadius:"10px",border:"1px solid var(--divider-color)"}),ye.placeholder=`Select ${((Qe=Z.label)==null?void 0:Qe.toLowerCase())||"entity"}\u2026`;let Ce=document.createElement("ha-icon");Ce.setAttribute("icon","mdi:magnify"),Object.assign(Ce.style,{position:"absolute",left:"10px",top:"8px",width:"18px",height:"18px","--mdc-icon-size":"18px",opacity:".7"});let Be=document.createElement("datalist");Be.id="ddc_entlist_"+Z.key;let Ee=Z.domains&&Z.domains.length?this._statesList(Z.domains):Object.keys(((Ve=this.hass)==null?void 0:Ve.states)||{});Be.innerHTML=Ee.map(ce=>`<option value="${ce}">`).join(""),ye.value=Array.isArray($[Z.key])?$[Z.key][0]||"":$[Z.key]||"",ye.addEventListener("change",async()=>{oe=this._shapeBySchema(j,{...oe,[Z.key]:ye.value||void 0}),mt(oe),ke==null||ke.setValue(oe)}),Le.append(Ce,ye,Be),Oe.append(K,Le)}if(Z.type==="number"){let Le=document.createElement("div");Le.style.flex="1",Le.style.position="relative";let ye=document.createElement("input");ye.type="number",Z.step&&(ye.step=Z.step),Object.assign(ye.style,{width:"100%",padding:"8px 10px 8px 36px",borderRadius:"10px",border:"1px solid var(--divider-color)"});let Ce=document.createElement("ha-icon");Ce.setAttribute("icon","mdi:counter"),Object.assign(Ce.style,{position:"absolute",left:"10px",top:"8px","--mdc-icon-size":"18px",width:"18px",height:"18px",opacity:".7"}),ye.value=(je=(rt=$[Z.key])!=null?rt:Z.default)!=null?je:"",ye.addEventListener("input",async()=>{let Be=ye.value===""?void 0:Number(ye.value);oe=this._shapeBySchema(j,{...oe,[Z.key]:isNaN(Be)?void 0:Be}),mt(oe),ke==null||ke.setValue(oe)}),Le.append(Ce,ye),Oe.append(K,Le)}if(Z.type==="select"){let Le=document.createElement("div");Le.style.flex="1",Le.style.position="relative";let ye=document.createElement("select");Object.assign(ye.style,{width:"100%",padding:"8px 10px 8px 36px",borderRadius:"10px",border:"1px solid var(--divider-color)"});let Ce=document.createElement("ha-icon");Ce.setAttribute("icon","mdi:format-list-bulleted"),Object.assign(Ce.style,{position:"absolute",left:"10px",top:"8px","--mdc-icon-size":"18px",width:"18px",height:"18px",opacity:".7"}),(Z.options||[]).forEach(Be=>{let Ee=document.createElement("option");Ee.value=Be,ye.appendChild(Ee)}),ye.value=(tt=(nt=$[Z.key])!=null?nt:Z.default)!=null?tt:((et=Z.options)==null?void 0:et[0])||"",ye.addEventListener("change",async()=>{oe=this._shapeBySchema(j,{...oe,[Z.key]:ye.value}),mt(oe),ke==null||ke.setValue(oe)}),Le.append(Ce,ye),Oe.append(K,Le)}if(Z.type==="text"){let Le=document.createElement("div");Le.style.flex="1",Le.style.position="relative";let ye=document.createElement("input");ye.type="text",Object.assign(ye.style,{width:"100%",padding:"8px 10px 8px 36px",borderRadius:"10px",border:"1px solid var(--divider-color)"});let Ce=document.createElement("ha-icon");Ce.setAttribute("icon","mdi:text"),Object.assign(Ce.style,{position:"absolute",left:"10px",top:"8px","--mdc-icon-size":"18px",width:"18px",height:"18px",opacity:".7"}),ye.value=(Ge=$[Z.key])!=null?Ge:"",ye.addEventListener("input",async()=>{oe=this._shapeBySchema(j,{...oe,[Z.key]:ye.value||void 0}),mt(oe),ke==null||ke.setValue(oe)}),Le.append(Ce,ye),Oe.append(K,Le)}if(Z.type==="textarea"){let Le=document.createElement("textarea");Object.assign(Le.style,{flex:"1",minHeight:"120px",padding:"8px 10px",borderRadius:"10px",border:"1px solid var(--divider-color)"}),Le.value=(Xe=$[Z.key])!=null?Xe:"",Le.addEventListener("input",async()=>{oe=this._shapeBySchema(j,{...oe,[Z.key]:Le.value||""}),mt(oe),ke==null||ke.setValue(oe)}),Oe.append(K,Le)}ue.appendChild(Oe)}),T.innerHTML="",T.appendChild(ue)},xt=new WeakMap,Wt=j=>{if(!F)return;let $=Array.isArray(j==null?void 0:j.visibility)?j.visibility.map(Te=>({...Te})):[],me=()=>Fe(oe),we=()=>{var Te;$=$.filter(Y=>Y&&typeof Y=="object"&&Y.condition),oe={...oe,visibility:$};try{ke==null||ke.setValue(oe)}catch{}try{(Te=Me==null?void 0:Me.setConfig)==null||Te.call(Me,oe)}catch{}mt(oe)},ue=()=>{if(F.innerHTML="",!$||!$.length){let Y=document.createElement("div");Y.style.opacity=".7",Y.style.fontSize=".9rem",Y.style.marginBottom="8px",Y.textContent="No conditions defined \u2013 this card is always visible.",F.appendChild(Y)}$.forEach((Y,Z)=>{let Oe=document.createElement("div");Object.assign(Oe.style,{display:"flex",flexDirection:"column",gap:"6px",marginBottom:"12px",border:"1px solid var(--divider-color)",borderRadius:"8px",padding:"8px"});let K=document.createElement("div");Object.assign(K.style,{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"4px"});let Qe=document.createElement("div");Qe.style.display="flex",Qe.style.alignItems="center",Qe.style.gap="6px";let Ve=document.createElement("ha-icon"),rt="mdi:filter",je=Y.condition||"state";je==="numeric_state"?rt="mdi:numeric":je==="screen"?rt="mdi:monitor":je==="user"?rt="mdi:account":je==="state"&&(rt="mdi:state-machine"),Ve.setAttribute("icon",rt);let nt=document.createElement("span");nt.style.fontWeight="bold",nt.style.textTransform="capitalize",nt.textContent=je==="numeric_state"?"Entity numeric state":je==="state"?"Entity state":je==="screen"?"Screen":"User",Qe.appendChild(Ve),Qe.appendChild(nt),K.appendChild(Qe);let et=document.createElement("button");et.setAttribute("title","Remove condition"),et.innerHTML='<ha-icon icon="mdi:trash-can-outline"></ha-icon>',Object.assign(et.style,{border:"none",background:"transparent",cursor:"pointer",padding:"4px",display:"inline-flex",alignItems:"center"}),et.style.position="relative",et.style.zIndex="1000",et.addEventListener("click",Be=>{Be.preventDefault(),Be.stopPropagation();let Ee=$.indexOf(Y);Ee>-1&&$.splice(Ee,1),oe.visibility=$,ue(),we()}),K.appendChild(et),Oe.appendChild(K);let tt=document.createElement("div");tt.style.display="flex",tt.style.gap="8px";let Ge=document.createElement("label");Ge.textContent="Type",Ge.style.fontSize=".85rem",Ge.style.marginRight="4px";let Xe=document.createElement("select");["state","numeric_state","screen","user"].forEach(Be=>{let Ee=document.createElement("option");Ee.value=Be,Ee.textContent=Be.replace("_"," "),Xe.appendChild(Ee)}),Xe.value=je,Xe.addEventListener("change",()=>{Y.condition=Xe.value,delete Y.entity,delete Y.state,delete Y.state_not,delete Y.above,delete Y.below,delete Y.media_query,delete Y.users,ue(),we()}),tt.appendChild(Ge),tt.appendChild(Xe),Oe.appendChild(tt);let Le=document.createElement("div");Object.assign(Le.style,{display:"flex",flexWrap:"wrap",gap:"8px",alignItems:"center"});let ye=(Be,Ee)=>{let ce=document.createElement("div");ce.style.display="flex",ce.style.flexDirection="column",ce.style.gap="4px",ce.style.minWidth="150px";let ne=document.createElement("span");ne.textContent=Be,ne.style.fontSize=".75rem",ce.appendChild(ne),ce.appendChild(Ee),Le.appendChild(ce)};(()=>{var Be,Ee;if(Le.innerHTML="",Y.condition==="state"){let ce;customElements.get("ha-entity-picker")?(ce=document.createElement("ha-entity-picker"),ce.hass=this.hass,ce.setAttribute("label","Select entity"),ce.removeAttribute("hide-clear-icon"),ce.value=Y.entity||"",ce.addEventListener("value-changed",J=>{J.stopPropagation(),Y.entity=J.detail.value||"",we()})):(ce=document.createElement("input"),ce.value=Y.entity||"",ce.addEventListener("input",()=>{Y.entity=ce.value.trim(),we()}),Object.assign(ce.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})),ye("Entity",ce);let ne;if(customElements.get("ha-select")){ne=document.createElement("ha-select");let J=document.createElement("mwc-list-item");J.setAttribute("value","state"),J.textContent="State is equal to";let M=document.createElement("mwc-list-item");M.setAttribute("value","state_not"),M.textContent="State is not equal to",ne.appendChild(J),ne.appendChild(M),ne.value=Y.state_not!=null?"state_not":"state",ne.addEventListener("selected",W=>{W.stopPropagation();let te=Y.state_not!=null?Y.state_not:Y.state;ne.value==="state_not"?(Y.state_not=te,delete Y.state):(Y.state=te,delete Y.state_not),we()})}else ne=document.createElement("select"),ne.innerHTML='<option value="state">State is equal to</option><option value="state_not">State is not equal to</option>',ne.value=Y.state_not!=null?"state_not":"state",Object.assign(ne.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),ne.addEventListener("change",J=>{J.stopPropagation();let M=Y.state_not!=null?Y.state_not:Y.state;ne.value==="state_not"?(Y.state_not=M,delete Y.state):(Y.state=M,delete Y.state_not),we()});ye("Match type",ne);let ee;customElements.get("ha-textfield")?(ee=document.createElement("ha-textfield"),ee.value=(Y.state_not!=null?Y.state_not:Y.state)||"",ee.setAttribute("label",""),ee.addEventListener("input",J=>{J.stopPropagation();let M=ne.value;Y[M]=ee.value;let W=M==="state"?"state_not":"state";delete Y[W],we()})):(ee=document.createElement("input"),ee.value=(Y.state_not!=null?Y.state_not:Y.state)||"",Object.assign(ee.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),ee.addEventListener("input",J=>{J.stopPropagation();let M=ne.value;Y[M]=ee.value;let W=M==="state"?"state_not":"state";delete Y[W],we()})),ye("State",ee)}else if(Y.condition==="numeric_state"){let ce;customElements.get("ha-entity-picker")?(ce=document.createElement("ha-entity-picker"),ce.hass=this.hass,ce.setAttribute("label","Select entity"),ce.removeAttribute("hide-clear-icon"),ce.value=Y.entity||"",ce.addEventListener("value-changed",J=>{J.stopPropagation(),Y.entity=J.detail.value||"",we()})):(ce=document.createElement("input"),ce.value=Y.entity||"",ce.addEventListener("input",()=>{Y.entity=ce.value.trim(),we()}),Object.assign(ce.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})),ye("Entity",ce);let ne;customElements.get("ha-textfield")?(ne=document.createElement("ha-textfield"),ne.setAttribute("type","number"),ne.value=Y.above!=null?Y.above:"",ne.addEventListener("input",J=>{J.stopPropagation();let M=ne.value;M===""||isNaN(Number(M))?delete Y.above:Y.above=Number(M),we()})):(ne=document.createElement("input"),ne.type="number",ne.value=Y.above!=null?Y.above:"",Object.assign(ne.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),ne.addEventListener("input",()=>{let J=ne.value;J===""||isNaN(Number(J))?delete Y.above:Y.above=Number(J),we()})),ye("Above",ne);let ee;customElements.get("ha-textfield")?(ee=document.createElement("ha-textfield"),ee.setAttribute("type","number"),ee.value=Y.below!=null?Y.below:"",ee.addEventListener("input",J=>{J.stopPropagation();let M=ee.value;M===""||isNaN(Number(M))?delete Y.below:Y.below=Number(M),we()})):(ee=document.createElement("input"),ee.type="number",ee.value=Y.below!=null?Y.below:"",Object.assign(ee.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),ee.addEventListener("input",()=>{let J=ee.value;J===""||isNaN(Number(J))?delete Y.below:Y.below=Number(J),we()})),ye("Below",ee)}else if(Y.condition==="screen"){let ce=document.createElement("select"),ne=[{label:"Custom",value:""},{label:"Mobile (max-width: 599px)",value:"(max-width: 599px)"},{label:"Tablet (600px - 991px)",value:"(min-width: 600px) and (max-width: 991px)"},{label:"Desktop (min-width: 992px)",value:"(min-width: 992px)"}];if(ne.forEach(ee=>{let J=document.createElement("option");J.value=ee.value,J.textContent=ee.label,ce.appendChild(J)}),ce.value=(Ee=(Be=ne.find(ee=>ee.value===(Y.media_query||"")))==null?void 0:Be.value)!=null?Ee:"",ce.addEventListener("change",()=>{Y.media_query=ce.value,we()}),ye("Screen size",ce),ce.value===""){let ee=document.createElement("input");ee.placeholder="e.g. (min-width: 1280px)",ee.value=Y.media_query||"",ee.addEventListener("input",()=>{Y.media_query=ee.value,we()}),ye("Custom query",ee)}}else if(Y.condition==="user"){let ce;customElements.get("ha-user-picker")?(ce=document.createElement("ha-user-picker"),ce.hass=this.hass,ce.value=Array.isArray(Y.users)?Y.users:[],ce.addEventListener("value-changed",ne=>{Y.users=Array.isArray(ne.detail.value)?ne.detail.value:[ne.detail.value],we()})):(ce=document.createElement("input"),ce.value=Array.isArray(Y.users)?Y.users.join(","):"",ce.addEventListener("input",()=>{Y.users=ce.value.split(",").map(ne=>ne.trim()).filter(Boolean),we()})),ye("Users",ce)}})(),Oe.appendChild(Le),F.appendChild(Oe)});let Te=document.createElement("button");Te.className="btn",Te.innerHTML='<ha-icon icon="mdi:plus"></ha-icon><span style="margin-left:6px">Add condition</span>',Object.assign(Te.style,{marginTop:"8px"}),Te.addEventListener("click",()=>{$.push({condition:"state",entity:"",state:""}),oe.visibility=$,ue(),we()}),F.appendChild(Te)};ue()},Fe=j=>{if(!F)return;let $=Array.isArray(j==null?void 0:j.visibility)?j.visibility:[],me=null,we=async()=>{if(me)return me;try{if(this.hass&&typeof this.hass.callWS=="function")try{let Z=await this.hass.callWS({type:"config/auth/list"});if(Array.isArray(Z))return me=Z,Z}catch{}if(this.hass&&typeof this.hass.callApi=="function")try{let Z=await this.hass.callApi("get","users");if(Array.isArray(Z))return me=Z,Z}catch{}let Y=[];if(this.hass&&this.hass.users&&Array.isArray(this.hass.users)&&Y.push(...this.hass.users),this.hass&&this.hass.userData&&Array.isArray(this.hass.userData.users)&&Y.push(...this.hass.userData.users),this.hass&&this.hass.authorizedUsers&&Array.isArray(this.hass.authorizedUsers)&&Y.push(...this.hass.authorizedUsers),Y.length){let Z=new Map;Y.forEach(K=>{let Qe=K.id||K.user_id||K.uid||K.name||"";Z.has(Qe)||Z.set(Qe,K)});let Oe=Array.from(Z.values());return me=Oe,Oe}}catch{}return me=[],[]},ue=()=>{var Y;$=$.filter(Z=>Z&&typeof Z=="object"&&Z.condition),oe.visibility=$;try{ke==null||ke.setValue(oe)}catch{}try{(Y=Me==null?void 0:Me.setConfig)==null||Y.call(Me,oe)}catch{}mt(oe)},Te=()=>{F.innerHTML="";let Y=document.createElement("div");Y.style.opacity=".75",Y.style.fontSize=".85rem",Y.style.marginBottom="12px",Y.textContent="The card will be shown when ALL conditions below are fulfilled. If no conditions are set, the card will always be shown.",F.appendChild(Y);let Z=(K,Qe)=>{K.forEach((je,nt)=>{Oe(je,K,nt,Qe)});let Ve=document.createElement("div");Ve.style.marginTop="8px";let rt=document.createElement("button");rt.className="btn",rt.innerHTML='<ha-icon icon="mdi:plus"></ha-icon><span style="margin-left:6px">Add condition</span>',Object.assign(rt.style,{display:"flex",alignItems:"center",gap:"6px",padding:"6px 12px",border:"none",borderRadius:"20px",background:"var(--primary-color)",color:"var(--text-primary-color, #fff)",cursor:"pointer",fontWeight:"500"}),rt.addEventListener("click",je=>{je.stopPropagation();let nt=Ve.querySelector(".add-menu");if(nt){nt.remove();return}let et=document.createElement("div");et.className="add-menu",Object.assign(et.style,{position:"relative",marginTop:"4px",border:"1px solid var(--divider-color)",borderRadius:"8px",background:"var(--card-background-color, var(--secondary-background-color))",boxShadow:"0 2px 4px rgba(0,0,0,0.2)"}),[{type:"numeric_state",label:"Entity numeric state",icon:"mdi:numeric"},{type:"state",label:"Entity state",icon:"mdi:state-machine"},{type:"screen",label:"Screen",icon:"mdi:monitor"},{type:"user",label:"User",icon:"mdi:account"},{type:"and",label:"And",icon:"mdi:logic-and"},{type:"or",label:"Or",icon:"mdi:logic-or"}].forEach(Ge=>{let Xe=document.createElement("div");Xe.style.display="flex",Xe.style.alignItems="center",Xe.style.gap="8px",Xe.style.padding="6px 12px",Xe.style.cursor="pointer",Xe.addEventListener("mouseenter",()=>Xe.style.background="var(--hover-color, #444)"),Xe.addEventListener("mouseleave",()=>Xe.style.background=""),Xe.addEventListener("click",()=>{et.remove();let Ce;Ge.type==="and"||Ge.type==="or"?Ce={condition:Ge.type,conditions:[]}:Ge.type==="state"?Ce={condition:"state",entity:"",state:""}:Ge.type==="numeric_state"?Ce={condition:"numeric_state",entity:""}:Ge.type==="screen"?Ce={condition:"screen",media_query:""}:Ge.type==="user"&&(Ce={condition:"user",users:[]}),K.push(Ce),xt.set(Ce,!0),ue(),Te()});let Le=document.createElement("ha-icon");Le.setAttribute("icon",Ge.icon),Xe.appendChild(Le);let ye=document.createElement("span");ye.textContent=Ge.label,Xe.appendChild(ye),et.appendChild(Xe)}),Ve.appendChild(et)}),Ve.appendChild(rt),Qe.appendChild(Ve)},Oe=(K,Qe,Ve,rt)=>{let je=K.condition||"state",nt=xt.get(K);nt===void 0&&(nt=$.length===1);let et=document.createElement("div");Object.assign(et.style,{display:"flex",flexDirection:"column",border:"1px solid var(--divider-color)",borderLeft:"3px solid var(--primary-color)",borderRadius:"12px",padding:"16px",marginBottom:"20px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",boxShadow:"var(--ha-card-box-shadow, 0 2px 6px rgba(0, 0, 0, 0.15))"});let tt=document.createElement("div");tt.style.display="flex",tt.style.alignItems="center",tt.style.justifyContent="space-between",tt.style.marginBottom="8px",tt.style.borderBottom="1px solid var(--divider-color)",tt.style.paddingBottom="4px",tt.style.position="relative";let Ge=document.createElement("div");Ge.style.display="flex",Ge.style.alignItems="center",Ge.style.gap="6px";let Xe=document.createElement("button");Xe.innerHTML=`<ha-icon icon="${nt?"mdi:chevron-down":"mdi:chevron-right"}"></ha-icon>`,Object.assign(Xe.style,{border:"none",background:"transparent",cursor:"pointer",padding:"4px",display:"inline-flex",alignItems:"center"}),Xe.addEventListener("click",Ee=>{Ee.stopPropagation(),xt.set(K,!nt),Te()}),Ge.appendChild(Xe);let Le=document.createElement("ha-icon"),ye="mdi:filter";je==="numeric_state"?ye="mdi:numeric":je==="screen"?ye="mdi:monitor":je==="user"?ye="mdi:account":je==="state"?ye="mdi:state-machine":je==="and"?ye="mdi:logic-and":je==="or"&&(ye="mdi:logic-or"),Le.setAttribute("icon",ye),Ge.appendChild(Le);let Ce=document.createElement("span");Ce.style.fontWeight="600",Ce.style.fontSize="0.95rem",Ce.style.textTransform="capitalize",Ce.textContent=je==="numeric_state"?"Entity numeric state":je==="state"?"Entity state":je==="screen"?"Screen":je==="user"?"User":je==="and"?"And":"Or",Ge.appendChild(Ce),tt.appendChild(Ge);let Be=document.createElement("button");if(Be.setAttribute("title","Remove condition"),Be.innerHTML='<ha-icon icon="mdi:trash-can-outline"></ha-icon>',Object.assign(Be.style,{border:"none",background:"transparent",cursor:"pointer",padding:"4px",display:"inline-flex",alignItems:"center"}),Be.style.position="relative",Be.style.zIndex="1000",Be.addEventListener("click",Ee=>{Ee.preventDefault(),Ee.stopPropagation();let ce=Qe.indexOf(K);ce>-1&&Qe.splice(ce,1),ue(),Te()}),tt.appendChild(Be),et.appendChild(tt),je!=="and"&&je!=="or"){if(nt){let Ee=document.createElement("div");Object.assign(Ee.style,{display:"flex",flexDirection:"column",gap:"14px",alignItems:"stretch"});let ce=(ne,ee)=>{let J=document.createElement("div");J.style.display="flex",J.style.flexDirection="column",J.style.gap="4px";let M=document.createElement("span");M.textContent=ne,M.style.fontSize=".75rem",J.appendChild(M),J.appendChild(ee),Ee.appendChild(J);let W=(ee.tagName||"").toLowerCase();(W==="input"||W==="select")&&Object.assign(ee.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})};if(K.condition==="state"){let ne=document.createElement("ha-entity-picker");ne.value=K.entity||"",ne.hass=this.hass,ne.setAttribute("label","Select entity"),ne.addEventListener("value-changed",M=>{K.entity=M.detail.value||"",ue()}),customElements.get("ha-entity-picker")||customElements.whenDefined("ha-entity-picker").then(()=>{Te()}).catch(()=>{}),ce("Entity",ne);let ee;if(customElements.get("ha-select")){ee=document.createElement("ha-select");let M=document.createElement("mwc-list-item");M.setAttribute("value","state"),M.textContent="State is equal to";let W=document.createElement("mwc-list-item");W.setAttribute("value","state_not"),W.textContent="State is not equal to",ee.appendChild(M),ee.appendChild(W),ee.value=K.state_not!=null?"state_not":"state",ee.addEventListener("selected",te=>{te.stopPropagation();let se=K.state_not!=null?K.state_not:K.state;ee.value==="state_not"?(K.state_not=se,delete K.state):(K.state=se,delete K.state_not),ue()})}else ee=document.createElement("select"),ee.innerHTML='<option value="state">State is equal to</option><option value="state_not">State is not equal to</option>',ee.value=K.state_not!=null?"state_not":"state",ee.addEventListener("change",M=>{M.stopPropagation();let W=K.state_not!=null?K.state_not:K.state;ee.value==="state_not"?(K.state_not=W,delete K.state):(K.state=W,delete K.state_not),ue()}),Object.assign(ee.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"});ce("Match type",ee);let J;customElements.get("ha-textfield")?(J=document.createElement("ha-textfield"),J.value=(K.state_not!=null?K.state_not:K.state)||"",J.setAttribute("label",""),J.addEventListener("input",M=>{M.stopPropagation();let W=ee.value;K[W]=J.value;let te=W==="state"?"state_not":"state";delete K[te],ue()})):(J=document.createElement("input"),J.value=(K.state_not!=null?K.state_not:K.state)||"",Object.assign(J.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),J.addEventListener("input",M=>{M.stopPropagation();let W=ee.value;K[W]=J.value;let te=W==="state"?"state_not":"state";delete K[te],ue()})),ce("State",J)}else if(K.condition==="numeric_state"){let ne=document.createElement("ha-entity-picker");ne.value=K.entity||"",ne.hass=this.hass,ne.setAttribute("label","Select entity"),ne.removeAttribute("hide-clear-icon"),ne.addEventListener("value-changed",M=>{K.entity=M.detail.value||"",ue()}),customElements.get("ha-entity-picker")||customElements.whenDefined("ha-entity-picker").then(()=>{Te()}).catch(()=>{}),ce("Entity",ne);let ee;customElements.get("ha-textfield")?(ee=document.createElement("ha-textfield"),ee.setAttribute("type","number"),ee.value=K.above!=null?K.above:"",ee.addEventListener("input",M=>{M.stopPropagation();let W=ee.value;W===""||isNaN(Number(W))?delete K.above:K.above=Number(W),ue()})):(ee=document.createElement("input"),ee.type="number",ee.value=K.above!=null?K.above:"",Object.assign(ee.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),ee.addEventListener("input",()=>{let M=ee.value;M===""||isNaN(Number(M))?delete K.above:K.above=Number(M),ue()})),ce("Above",ee);let J;customElements.get("ha-textfield")?(J=document.createElement("ha-textfield"),J.setAttribute("type","number"),J.value=K.below!=null?K.below:"",J.addEventListener("input",M=>{M.stopPropagation();let W=J.value;W===""||isNaN(Number(W))?delete K.below:K.below=Number(W),ue()})):(J=document.createElement("input"),J.type="number",J.value=K.below!=null?K.below:"",Object.assign(J.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),J.addEventListener("input",()=>{let M=J.value;M===""||isNaN(Number(M))?delete K.below:K.below=Number(M),ue()})),ce("Below",J)}else if(K.condition==="screen"){let ne=[{label:"Mobile",query:"(max-width: 599px)"},{label:"Tablet (min: 768px)",query:"(min-width: 768px)"},{label:"Desktop (min: 1024px)",query:"(min-width: 1024px)"},{label:"Wide (min: 1280px)",query:"(min-width: 1280px)"}];Array.isArray(K.media_query_list)||(K.media_query_list=[]);let ee=document.createElement("div");ee.style.display="flex",ee.style.flexDirection="column",ee.style.gap="4px",ne.forEach(J=>{let M=document.createElement("label");M.style.display="flex",M.style.alignItems="center",M.style.gap="6px";let W=document.createElement("input");W.type="checkbox",W.checked=K.media_query_list.includes(J.query),W.addEventListener("change",()=>{W.checked?K.media_query_list.push(J.query):K.media_query_list=K.media_query_list.filter(se=>se!==J.query),K.media_query=K.media_query_list.join(","),ue()});let te=document.createElement("span");te.textContent=J.label,M.appendChild(W),M.appendChild(te),ee.appendChild(M)}),ce("Screen sizes",ee)}else if(K.condition==="user"){let ne;if(customElements.get("ha-user-picker"))ne=document.createElement("ha-user-picker"),ne.hass=this.hass,ne.setAttribute("label","Select user"),ne.value=Array.isArray(K.users)?K.users:[],ne.addEventListener("value-changed",ee=>{let J=ee.detail.value;K.users=Array.isArray(J)?J:[J],ue()});else{ne=document.createElement("div"),ne.style.display="flex",ne.style.flexDirection="column",ne.style.gap="4px";let ee=document.createElement("span");ee.style.opacity="0.7",ee.style.fontSize=".85rem",ee.textContent="Loading users\u2026",ne.appendChild(ee);let J=Array.isArray(K.users)?K.users:[];we().then(M=>{if(ne.innerHTML="",Array.isArray(M)&&M.length)M.forEach(W=>{let te=W.id||W.user_id||W.uid||W.name||"",se=W.name||te,Se=document.createElement("label");Se.style.display="flex",Se.style.alignItems="center",Se.style.gap="6px",Se.style.padding="4px 0";let he=document.createElement("input");he.type="checkbox",he.checked=J.includes(te)||J.includes(se),he.addEventListener("change",()=>{let qe=Array.isArray(K.users)?K.users.slice():[];he.checked?qe.includes(te)||qe.push(te):qe=qe.filter(We=>We!==te&&We!==se),K.users=qe,ue()});let ve=document.createElement("span");ve.textContent=se,Se.appendChild(he),Se.appendChild(ve),ne.appendChild(Se)});else{let W=document.createElement("input");W.value=Array.isArray(K.users)?K.users.join(","):"",Object.assign(W.style,{padding:"6px 10px",borderRadius:"6px",border:"1px solid var(--divider-color)",background:"var(--card-background-color, var(--secondary-background-color))",color:"var(--primary-text-color, inherit)"});let te=()=>{K.users=W.value.split(",").map(se=>se.trim()).filter(Boolean),ue()};W.addEventListener("change",te),W.addEventListener("blur",te),ne.appendChild(W)}})}ce("Users",ne)}et.appendChild(Ee)}}else if(nt){Array.isArray(K.conditions)||(K.conditions=[]);let Ee=document.createElement("div");Ee.style.marginLeft="16px",Z(K.conditions,Ee),et.appendChild(Ee)}rt.appendChild(et)};Z($,F)};Te()},mt=j=>{if(((j==null?void 0:j.type)||"")==="custom_card"){lt=JSON.stringify(j||{}),w.innerHTML='<div style="opacity:.6;font-size:.9rem;padding:8px">Preview not available for the custom card placeholder. Use the YAML editor.</div>',H.hidden=!0;return}let $=JSON.stringify(j||{});$!==lt&&(lt=$,Bt&&clearTimeout(Bt),Bt=setTimeout(async()=>{let me=++gt;H.hidden=!1,w.innerHTML="",await Rr();try{let we=await this._helpersPromise||await window.loadCardHelpers();if(me!==gt)return;let ue=we.createCardElement(j);if(ue.hass=this.hass,me!==gt)return;w.appendChild(ue)}catch{}finally{me===gt&&(H.hidden=!0)}},150))},Tt=async j=>{var we;let $=++gt;_.hidden=!1,S.innerHTML="",await lc();let me=j.type||$e;if(ft=await this._getEditorElementForType(me,j),me==="custom_card"){let ue=document.createElement("div");return ue.style.opacity=".7",ue.style.fontSize=".9rem",ue.textContent="Custom card placeholder: use the YAML editor to paste the card type and options.",S.appendChild(ue),Me=null,st!=="yaml"&&ae("yaml"),Q(!0),_.hidden=!0,!1}if(!ft){let ue=document.createElement("div");return ue.style.opacity=".7",ue.style.fontSize=".9rem",ue.textContent="This card does not support a visual editor. Please use the YAML tab to configure it.",$===gt&&(S.appendChild(ue),_.hidden=!0),Me=null,Q(!0),st!=="visual"&&ae("yaml"),!1}try{ft.hass=this.hass,ft.isConnected||S.appendChild(ft),await Promise.resolve();try{ft.setConfig(j)}catch{}try{let Te=await this._helpersPromise||await window.loadCardHelpers(),Y=Te.getCardElementClass?await Te.getCardElementClass(j.type||$e):null;if(Y!=null&&Y.getStubConfig){let Z=Object.keys(((we=this.hass)==null?void 0:we.states)||{}),Oe=Qe=>Z.filter(Ve=>Ve.startsWith(Qe+".")),K=await Y.getStubConfig(this.hass,Z,Oe);K&&(j=this._shapeBySchema(j.type||$e,{...K}))}}catch{}await Promise.resolve();try{ft.setConfig(j)}catch{}Me&&this.__onEditorChange&&(Me.removeEventListener("config-changed",this.__onEditorChange),Me.removeEventListener("value-changed",this.__onEditorChange));let ue=async Te=>{var Oe,K,Qe;let Y=(Qe=(Oe=Te.detail)==null?void 0:Oe.config)!=null?Qe:(K=Te.detail)==null?void 0:K.value;if(!Y)return;let Z=Y.type||$e;$e=Z,oe=this._shapeBySchema(Z,Y),B(""),Q(!0),At($e,oe),mt(oe),ke==null||ke.setValue(oe)};return this.__onEditorChange=ue,ft.addEventListener("config-changed",ue),ft.addEventListener("value-changed",ue),Me=ft,st!=="yaml"&&ae("visual"),Q(!0),!0}finally{$===gt&&(_.hidden=!0)}},ii=async j=>{ke=await this._mountYamlEditor(R,j,async $=>{var me,we;try{let ue=($==null?void 0:$.type)||$e,Te=this._shapeBySchema(ue,$||{}),Y=ue!==$e;if($e=ue,oe=Te,C.hidden=!0,C.textContent="",Q(!0),Y){if(At($e,oe),Me){try{(me=Me.setConfig)==null||me.call(Me,oe)}catch{}st!=="yaml"&&ae("visual")}try{Fe(oe)}catch{}}else{try{(we=Me==null?void 0:Me.setConfig)==null||we.call(Me,oe)}catch{}mt(oe);try{Fe(oe)}catch{}}}catch(ue){C.hidden=!1,C.textContent=`Invalid config: ${String((ue==null?void 0:ue.message)||ue)}`,Q(!1)}},$=>{C.hidden=!1,C.textContent=`Invalid YAML: ${String(($==null?void 0:$.message)||$)}`,Q(!1)})},Ot=async j=>{if(this.__stubCache.has(j))return{...this.__stubCache.get(j)};let $=await this._getStubConfigForType(j);return this.__stubCache.set(j,{...$}),{...$}},yt=async j=>{C.hidden=!0,C.textContent="",B(""),$e=j;try{typeof ot=="function"&&ot(j)}catch{}let $=t==="edit"&&n&&n.type===j?{...n}:await Ot(j);oe=this._shapeBySchema(j,$),Me=null,At(j,oe),await ii(oe),await Rr(),mt(oe);try{Fe(oe)}catch{}try{let me=await Tt(oe);ae(me?"visual":"yaml")}catch{ae("yaml")}Q(!0)},It=async()=>{if(!oe)return;let j=this._shapeBySchema($e,oe);t==="edit"&&typeof o=="function"?await o(j):(await this._addPickedCardToLayout(j),this._pushRecent((j||{}).type)),c()};y.addEventListener("click",c),m.addEventListener("click",c),u.addEventListener("click",It),f.addEventListener("click",It),s.addEventListener("keydown",j=>{j.key==="Escape"&&c(),j.key==="Enter"&&!u.disabled&&It()});let Mt=null;v.addEventListener("input",()=>{Mt&&clearTimeout(Mt),Mt=setTimeout(ct,120)}),ct(),t==="edit"&&n?(await yt(n.type||"entities"),Q(!0)):(await yt((()=>{var me;return(((me=this._getRecent)==null?void 0:me.call(this))||[]).find(Boolean)||"entities"})()),Q(!0))}async _getStubConfigForType(t){var y;let n=await this._helpersPromise||await window.loadCardHelpers(),o=null;if(t==="custom_card")return null;try{n.getCardElementClass&&(o=await n.getCardElementClass(t))}catch{}let c=Object.keys(((y=this.hass)==null?void 0:y.states)||{}),s=m=>c.filter(v=>v.startsWith(m+".")),l={type:t};if(o!=null&&o.getStubConfig)try{let m=await o.getStubConfig(this.hass,c,s);if(t!=="entity")return m;m&&typeof m=="object"&&(l={...l,...m})}catch{}let u=c[0],f=s("sensor")[0]||u;if(["entity","sensor","button","gauge","tile","light","thermostat","media-control","alarm-panel","picture-entity","weather-forecast","map"].includes(t)){let m={sensor:f,gauge:s("sensor").find(this._isNumericEntity.bind(this))||f,"media-control":s("media_player")[0]||u,light:s("light")[0]||u,thermostat:s("climate")[0]||u,"alarm-panel":s("alarm_control_panel")[0]||u,"weather-forecast":s("weather")[0]||u,map:s("device_tracker")[0]||s("person")[0]||u}[t]||f||u;["entity","sensor","button","gauge","tile","light","thermostat","media-control","alarm-panel","picture-entity"].includes(t)?l.entity=m:t==="weather-forecast"?(l.entity=m,l.show_current=!0,l.show_forecast=!0,l.forecast_type="daily"):t==="map"&&(l.entities=[m].filter(Boolean),l.theme_mode="auto")}if(["entities","glance","picture-glance","history-graph","statistics-graph"].includes(t)){let m=v=>(v!=null&&v.length?c.filter(w=>v.includes(w.split(".")[0])):c).slice(0,3);t==="statistics-graph"?l.entities=m(["sensor","number","input_number"]):l.entities=m()}if(t==="markdown"&&(l.content="Markdown card"),t==="sensor"&&(l.graph="line"),t==="button"&&(l.show_name=!0,l.show_icon=!0),t==="tile"&&(l.features_position="bottom",l.vertical=!1),t==="picture-glance"&&(l.title=l.title||"Glance",l.image=l.image||"https://demo.home-assistant.io/stub_config/kitchen.png"),t==="picture-entity"&&(l.image=l.image||"https://demo.home-assistant.io/stub_config/bedroom.png"),t==="iframe"&&(l.url=l.url||"https://www.home-assistant.io",l.aspect_ratio=l.aspect_ratio||"50%"),t==="alarm-panel"&&(l.states=l.states||["arm_home","arm_away"]),t==="area")try{let m=this.hass&&this.hass.areas?Object.values(this.hass.areas):[];m.length?l.area=m[0].area_id||m[0].name||m[0].id:l.area=u?u.split(".")[0]:"default_area",l.display_type="picture",l.alert_classes=l.alert_classes||["moisture","motion"],l.sensor_classes=l.sensor_classes||["temperature","humidity"],l.features_position="bottom"}catch{}return l}_getNextAvailablePosition(){let t=Array.from(this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)")),n=new Set,o=this.gridSize;t.forEach(l=>{let u=parseFloat(l.getAttribute("data-x"))||0,f=parseFloat(l.getAttribute("data-y"))||0,y=parseFloat(getComputedStyle(l).width)||100,m=parseFloat(getComputedStyle(l).height)||100,v=Math.floor(u/o),w=Math.floor(f/o),S=Math.floor((u+y)/o),_=Math.floor((f+m)/o);for(let T=v;T<S;T++)for(let R=w;R<_;R++)n.add(`${T}-${R}`)});let c=0,s=0;for(;n.has(`${c}-${s}`);)c+=6,c>60&&(c=0,s+=6);return{x:c*o,y:s*o}}async _addPickedCardToLayout(t){this._hideEmptyPlaceholder();let n=await this._createCard(t),o=this._makeWrapper(n),c=this._getNextAvailablePosition();this._setCardPosition(o,c.x,c.y),o.style.width=`${14*this.gridSize}px`,o.style.height=`${10*this.gridSize}px`;{let s=this._highestZ()+1;o.style.zIndex=String(Math.max(s,6))}this.cardContainer.appendChild(o);try{this._rebuildOnce(o.firstElementChild)}catch{}this._initCardInteract(o),this._resizeContainer(),this._queueSave("add"),this._toast("Card added to layout."),this._syncEmptyStateUI();try{this._applyVisibility_()}catch{}}_toggleSelection(t,n=null){let o=n==null?!this._selection.has(t):!!n;o?this._selection.add(t):this._selection.delete(t),t.classList.toggle("selected",o)}_clearSelection(){for(let t of this._selection)t.classList.remove("selected");this._selection.clear()}_copySelection(){var t,n,o;try{let c=this._selection?Array.from(this._selection):[];if(!c.length){(t=this._toast)==null||t.call(this,"Nothing selected to copy.");return}let s=1/0,l=1/0,u=[];for(let f of c){if(f.dataset.placeholder)continue;let y=parseFloat(f.getAttribute("data-x"))||0,m=parseFloat(f.getAttribute("data-y"))||0;y<s&&(s=y),m<l&&(l=m)}for(let f of c){if(f.dataset.placeholder)continue;let y=this._extractCardConfig(f.firstElementChild)||{},m=parseFloat(f.getAttribute("data-x"))||0,v=parseFloat(f.getAttribute("data-y"))||0,w=f.style.width||`${f.getBoundingClientRect().width}px`,S=f.style.height||`${f.getBoundingClientRect().height}px`;u.push({cfg:y,dx:m-s,dy:v-l,width:w,height:S})}window.__DDC_CLIPBOARD__={items:u},(n=this._toast)==null||n.call(this,`Copied ${u.length} card${u.length===1?"":"s"}.`)}catch(c){console.warn("[drag-and-drop-card] Copy failed",c),(o=this._toast)==null||o.call(this,"Copy failed.")}}async _pasteClipboard(){var t,n,o,c;try{let s=window.__DDC_CLIPBOARD__;if(!s||!Array.isArray(s.items)||!s.items.length){(t=this._toast)==null||t.call(this,"Clipboard is empty.");return}let l=s.items,u=1,f;do{let v=this.gridSize*u,w=this.gridSize*u;f=l.map(S=>{let _=parseFloat(S.width)||0,T=parseFloat(S.height)||0;return{x:v+(S.dx||0),y:w+(S.dy||0),w:_,h:T}}),u+=1}while(this._anyCollisionFor(f,new Set));let y=this.gridSize*(u-1),m=this.gridSize*(u-1);for(let v of l){let w=v.cfg||{},S=await this._createCard(w),_=this._makeWrapper(S);_.style.width=v.width,_.style.height=v.height;let T=y+(v.dx||0),R=m+(v.dy||0);this._setCardPosition(_,T,R);{let C=this._highestZ()+1;_.style.zIndex=String(Math.max(C,6))}try{let C=this._normalizeTabId(this.activeTab||this.defaultTab);C&&(_.dataset.tabId=C)}catch{}this.cardContainer.appendChild(_);try{this._rebuildOnce(_.firstElementChild)}catch{}this._initCardInteract(_)}this._resizeContainer(),this._applyActiveTab(),(n=this._queueSave)==null||n.call(this,"paste"),(o=this._toast)==null||o.call(this,`Pasted ${l.length} card${l.length===1?"":"s"}.`)}catch(s){console.warn("[drag-and-drop-card] Paste failed",s),(c=this._toast)==null||c.call(this,"Paste failed.")}}_installSelectionMarquee(){let t=this.cardContainer,n=0,o=0,c=null,s=!1,l=v=>{let w=t.getBoundingClientRect(),S="touches"in v&&v.touches[0]?v.touches[0].clientX:v.clientX,_="touches"in v&&v.touches[0]?v.touches[0].clientY:v.clientY,T=this.__pointerScaleX||1,R=this.__pointerScaleY||1;return{x:(S-w.left)/T,y:(_-w.top)/R}},u=(v,w)=>{let S=Math.min(v,n),_=Math.max(v,n),T=Math.min(w,o),R=Math.max(w,o);c.style.left=`${S}px`,c.style.top=`${T}px`,c.style.width=`${_-S}px`,c.style.height=`${R-T}px`;let C=c.getBoundingClientRect(),O=t.querySelectorAll(".card-wrapper:not(.ddc-placeholder)");this._clearSelection(),O.forEach(z=>{let b=z.getBoundingClientRect();!(b.right<C.left||b.left>C.right||b.bottom<C.top||b.top>C.bottom)&&this._toggleSelection(z,!0)})},f=v=>{if(!this.editMode||v.target.closest(".card-wrapper"))return;s=!0;let w=l(v);n=w.x,o=w.y,c=document.createElement("div"),c.className="marquee",c.style.left=`${n}px`,c.style.top=`${o}px`,t.appendChild(c),v.preventDefault()},y=v=>{!s||!c||u(l(v).x,l(v).y)},m=()=>{s&&(s=!1,c&&c.remove(),c=null)};t.addEventListener("mousedown",f),window.addEventListener("mousemove",y),window.addEventListener("mouseup",m),t.addEventListener("touchstart",v=>{this.editMode&&(v.target.closest(".card-wrapper")||f(v))},{passive:!1}),window.addEventListener("touchmove",v=>{y(v)},{passive:!0}),window.addEventListener("touchend",m),window.addEventListener("touchcancel",m)}async _openDiagnostics(){var u,f;let t=document.createElement("div");t.className="modal";let n=this.storageKey||"(none)",o=this._backendOK&&!!this.storageKey,c=y=>y.slice(-200).map(m=>`<div style="font-family:monospace;font-size:.85rem;line-height:1.3">
        <span style="opacity:.6">${m.t}</span>
        <b style="margin-left:6px;color:#03a9f4">[${m.kind}]</b>
        <span style="margin-left:6px">${this._safe(m.msg)}</span>
        ${m.extra?`<pre style="margin:4px 0 0 0;white-space:pre-wrap;background:var(--card-background-color);border:1px solid var(--divider-color);border-radius:8px;padding:6px;max-height:160px;overflow:auto">${this._safe(JSON.stringify(m.extra,null,2))}</pre>`:""}
      </div>`).join("");t.innerHTML=`
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
      </div>`;let s=()=>t.remove();t.querySelector("#closeDiag").addEventListener("click",s),this.shadowRoot.appendChild(t);let l=()=>{let y=t.querySelector("#logArea"),m=v=>v.slice(-200).map(w=>`<div style="font-family:monospace;font-size:.85rem;line-height:1.3">
          <span style="opacity:.6">${w.t}</span>
          <b style="margin-left:6px;color:#03a9f4">[${w.kind}]</b>
          <span style="margin-left:6px">${this._safe(w.msg)}</span>
          ${w.extra?`<pre style="margin:4px 0 0 0;white-space:pre-wrap;background:var(--card-background-color);border:1px solid var(--divider-color);border-radius:8px;padding:6px;max-height:160px;overflow:auto">${this._safe(JSON.stringify(w.extra,null,2))}</pre>`:""}
        </div>`).join("");y.innerHTML=m(this._dbgDump()),y.scrollTop=y.scrollHeight};t.querySelector("#refreshKeys").addEventListener("click",async()=>{try{this._dbgPush("probe","Manual refresh"),await this._probeBackend()}finally{l()}}),t.querySelector("#forceSave").addEventListener("click",async()=>{await this._saveLayout(!1),l()}),t.querySelector("#exportJson").addEventListener("click",()=>{let m=Array.from(this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)")).map(_=>{let T=parseFloat(_.getAttribute("data-x"))||0,R=parseFloat(_.getAttribute("data-y"))||0,C=parseFloat(_.style.width)||_.getBoundingClientRect().width,O=parseFloat(_.style.height)||_.getBoundingClientRect().height,z=parseInt(_.style.zIndex||"1",10),b=this._extractCardConfig(_.firstElementChild),L=_.dataset.tabId||this.defaultTab;return{card:b,position:{x:T,y:R},size:{width:C,height:O},z,tabId:L}}),v={version:2,options:this._exportableOptions(),cards:m},w=new Blob([JSON.stringify(v,null,2)],{type:"application/json"}),S=document.createElement("a");S.href=URL.createObjectURL(w),S.download=`ddc_${this.storageKey||"layout"}.json`,S.click(),URL.revokeObjectURL(S.href)}),t.querySelector("#importJson").addEventListener("click",async()=>{let y=document.createElement("input");y.type="file",y.accept="application/json",y.onchange=async()=>{var S,_,T,R,C,O,z,b,L,I,F,N,H;let m=(S=y.files)==null?void 0:S[0];if(!m)return;let v=await m.text();try{let Q=JSON.parse(v);if(this._dbgPush("import","Loaded file",{bytes:v.length}),this.cardContainer.innerHTML="",(_=Q.cards)!=null&&_.length)for(let B of Q.cards)if(!(B!=null&&B.card)||typeof B.card=="object"&&Object.keys(B.card).length===0){let V=this._makePlaceholderAt(((T=B.position)==null?void 0:T.x)||0,((R=B.position)==null?void 0:R.y)||0,((C=B.size)==null?void 0:C.width)||200,((O=B.size)==null?void 0:O.height)||200);this.cardContainer.appendChild(V)}else{let V=await this._createCard(B.card),U=this._makeWrapper(V);this._setCardPosition(U,((z=B.position)==null?void 0:z.x)||0,((b=B.position)==null?void 0:b.y)||0),U.dataset.tabId=this._normalizeTabId(B.tabId||B.tab_id||this.defaultTab),this._setCardPosition(U,((L=B.position)==null?void 0:L.x)||0,((I=B.position)==null?void 0:I.y)||0),U.style.width=`${((F=B.size)==null?void 0:F.width)||140}px`,U.style.height=`${((N=B.size)==null?void 0:N.height)||100}px`,this.cardContainer.appendChild(U);try{this._rebuildOnce(U.firstElementChild)}catch{}this._initCardInteract(U)}else this._showEmptyPlaceholder(),(H=this._applyAutoScale)==null||H.call(this);this._resizeContainer(),await this._saveLayout(!1)}catch(Q){this._dbgPush("import","Parse failed",{error:String(Q)})}let w=new Event("ddc-logrefresh");window.dispatchEvent(w)},y.click()}),t.querySelector("#testRoundtrip").addEventListener("click",async()=>{if(!this._backendOK)return this._dbgPush("test","Backend not reachable, aborting"),l();let y=(this.storageKey||"ddc_test")+"_selftest",m={t:Date.now(),msg:"roundtrip"};try{await this._saveLayoutToBackend(y,m);let v=await this._loadLayoutFromBackend(y);this._dbgPush("test","Round-trip result",{wrote:m,read:v})}catch(v){this._dbgPush("test","Round-trip failed",{error:String(v)})}l()}),l()}_openDashboardSettings(){var K,Qe,Ve,rt,je,nt,et,tt,Ge,Xe,Le,ye,Ce,Be,Ee,ce,ne,ee,J;let t=document.createElement("div");t.className="modal",this._ensureSettingsStyles_(),t.innerHTML=`
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
              <!-- Added number input for manual entry of grid size -->
              <input type="number" id="ddc-setting-gridSizeInput" min="1" max="400" step="1" class="grid-input" />
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
              <div class="stack color-stack">
                <div class="color-group">
                  <div class="color-group-title">
                    <span>Custom</span>
                    <span>hex \xB7 rgba \xB7 var()</span>
                  </div>
                  <div class="color-pair">
                    <input type="color" id="ddc-color-containerBg" />
                    <input
                      type="text"
                      id="ddc-setting-containerBg"
                      placeholder="transparent \xB7 #123456 \xB7 var(--ha-card-background)"
                    />
                  </div>
                </div>

                <div class="color-group">
                  <div class="color-group-title">
                    <span>Presets</span>
                  </div>
                  <div class="swatches" id="ddc-swatches-containerBg"></div>
                  <div class="gradients" id="ddc-gradients-containerBg"></div>
                </div>
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
            <div class="stack color-stack">
              <div class="color-group">
                <div class="color-group-title">
                  <span>Custom</span>
                </div>
                <div class="color-pair">
                  <input type="color" id="ddc-color-cardBg" />
                  <input
                    type="text"
                    id="ddc-setting-cardBg"
                    placeholder="#121212 \xB7 var(--ha-card-background)"
                  />
                </div>
              </div>

              <div class="color-group">
                <div class="color-group-title">
                  <span>Presets</span>
                </div>
                <div class="swatches" id="ddc-swatches-cardBg"></div>
                <div class="gradients" id="ddc-gradients-cardBg"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="hint">Affects the background of each draggable card container.</div>
      </div>

      <!-- CARD SHADOW -->
      <div class="setting" role="group" aria-labelledby="lbl-card-shadow">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:shadow" aria-hidden="true"></ha-icon>
            <label id="lbl-card-shadow" for="ddc-setting-cardShadow">Card drop shadow</label>
          </div>
          <div class="control">
            <ha-switch id="ddc-setting-cardShadow"></ha-switch>
          </div>
        </div>
        <div class="hint">Toggle a drop shadow on card containers.</div>
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
                <!-- Only a thumbnail + delete button, no upload -->
                <div class="thumb" id="ddc-bg-thumb"></div>
                <button type="button" class="btn secondary" id="ddc-clear-bg">Delete</button>
              </div>

              <div class="row">
                <label for="ddc-setting-bgImg">Image URL (e.g. /media/local/...)</label>
                <input
                  type="text"
                  id="ddc-setting-bgImg"
                  placeholder="/media/local/\u2026 or https://\u2026"
                />
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
                      <div class="control">
            <div class="stack">
              <label for="ddc-youtube-url">YouTube URL or video ID</label>
              <input
                type="text"
                id="ddc-youtube-url"
                placeholder="https://youtu.be/\u2026 or dQw4w9WgXcQ"
              />

              <div class="bg-opts bg-opts--youtube">
                <!-- Start -->
                <label for="ddc-youtube-start">
                  <ha-icon icon="mdi:clock-start" aria-hidden="true"></ha-icon>
                  Start (s)
                </label>
                <input
                  type="number"
                  id="ddc-youtube-start"
                  min="0"
                  step="1"
                />

                <!-- End -->
                <label for="ddc-youtube-end">
                  <ha-icon icon="mdi:clock-end" aria-hidden="true"></ha-icon>
                  End (s)
                </label>
                <input
                  type="number"
                  id="ddc-youtube-end"
                  min="0"
                  step="1"
                />

                <!-- Mute -->
                <label for="ddc-youtube-mute">
                  <ha-icon icon="mdi:volume-off" aria-hidden="true"></ha-icon>
                  Mute
                </label>
                <ha-switch
                  id="ddc-youtube-mute"
                  checked
                ></ha-switch>

                <!-- Loop -->
                <label for="ddc-youtube-loop">
                  <ha-icon icon="mdi:repeat" aria-hidden="true"></ha-icon>
                  Loop
                </label>
                <ha-switch
                  id="ddc-youtube-loop"
                  checked
                ></ha-switch>

                <!-- Size -->
                <label for="ddc-youtube-size">
                  <ha-icon icon="mdi:arrow-expand-all" aria-hidden="true"></ha-icon>
                  Size
                </label>
                <select id="ddc-youtube-size">
                  <option value="cover">Cover</option>
                  <option value="contain">Contain</option>
                  <option value="auto">Auto</option>
                  <option value="100% 100%">Fill (stretch)</option>
                </select>

                <!-- Position -->
                <label for="ddc-youtube-position">
                  <ha-icon icon="mdi:crosshairs-gps" aria-hidden="true"></ha-icon>
                  Position
                </label>
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

                <!-- Attachment -->
                <label for="ddc-youtube-attachment">
                  <ha-icon icon="mdi:link-variant" aria-hidden="true"></ha-icon>
                  Attachment
                </label>
                <select id="ddc-youtube-attachment">
                  <option value="scroll">Scroll</option>
                  <option value="fixed">Fixed</option>
                </select>

                <!-- Opacity -->
                <label for="ddc-youtube-opacity">
                  <ha-icon icon="mdi:opacity" aria-hidden="true"></ha-icon>
                  Opacity
                </label>
                <div class="range-wrap">
                  <input
                    type="range"
                    id="ddc-youtube-opacity"
                    min="0"
                    max="100"
                    step="1"
                    value="100"
                  />
                  <output id="ddc-youtube-opacity-out">100%</output>
                </div>
              </div>

              <div class="hint">
                Video plays muted, sits behind your cards, and ignores pointer events so dragging remains smooth.
              </div>
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
            <!-- Removed thumbs up/down icon -->
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
            <!-- Removed thumbs up/down icon -->
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
              <input type="number" id="ddc-setting-screenSaverDelay" min="1" max="60" step="1" />
              <span class="unit">min</span>
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

`;let n=this.shadowRoot.querySelector(".modal");if(n){try{n.remove()}catch{}this.__settingsModal===n&&(this.__settingsModal=null)}if(this.__settingsModal){try{this.__settingsModal.remove()}catch{}this.__settingsModal=null}this.__settingsModal=t,this.shadowRoot.appendChild(t);let o=t.querySelector("#ddc-setting-autoResize"),c=t.querySelector("#ddc-setting-gridSize"),s=t.querySelector("#ddc-setting-animate"),l=t.querySelector("#ddc-setting-hideHdr"),u=t.querySelector("#ddc-setting-hideSbar"),f=t.querySelector("#ddc-setting-dragSnap"),y=t.querySelector("#ddc-setting-autoSave"),m=t.querySelector("#ddc-setting-autoSaveDebounce"),v=t.querySelector("#ddc-setting-sizeMode"),w=t.querySelector("#ddc-setting-orient"),S=t.querySelector("#ddc-setting-disableOverlap"),_=t.querySelector("#ddc-setting-editPin"),T=t.querySelector("#ddc-setting-containerBg"),R=t.querySelector("#ddc-setting-cardBg"),C=t.querySelector("#ddc-setting-cardShadow"),O=t.querySelector("#ddc-setting-bgImg"),z=t.querySelector("#ddc-bg-repeat"),b=t.querySelector("#ddc-bg-size"),L=t.querySelector("#ddc-bg-position"),I=t.querySelector("#ddc-bg-attachment"),F=t.querySelector("#ddc-bg-opacity"),N=t.querySelector("#ddc-bg-opacity-out"),H=t.querySelector("#ddc-setting-debug"),Q=t.querySelector("#ddc-setting-screenSaverEnabled"),B=t.querySelector("#ddc-setting-screenSaverDelay"),V=t.querySelector("#ddc-screenSaverDelayOut"),U=t.querySelector("#ddc-bg-mode"),de=t.querySelector('[data-bg-section="image"]'),_e=t.querySelector('[data-bg-section="particles"]'),Re=t.querySelector('[data-bg-section="youtube"]'),re=t.querySelector("#ddc-particles-url"),ze=t.querySelector("#ddc-particles-pointer"),pe=t.querySelector("#ddc-youtube-url"),He=t.querySelector("#ddc-youtube-start"),Ye=t.querySelector("#ddc-youtube-end"),De=t.querySelector("#ddc-youtube-mute"),Ue=t.querySelector("#ddc-youtube-loop"),ot=t.querySelector("#ddc-youtube-size"),st=t.querySelector("#ddc-youtube-position"),ae=t.querySelector("#ddc-youtube-attachment"),ut=t.querySelector("#ddc-youtube-opacity"),ct=t.querySelector("#ddc-youtube-opacity-out"),Pe=((K=this._config)==null?void 0:K.background_image)||{},oe=((Qe=this._config)==null?void 0:Qe.background_mode)||((rt=(Ve=this._config)==null?void 0:Ve.background_image)!=null&&rt.src?"image":"none");U&&(U.value=String(oe));let $e=((je=this._config)==null?void 0:je.background_particles)||{};re&&(re.value=$e.config_url||""),ze&&(ze.checked=!!$e.pointer_events);let ke=((nt=this._config)==null?void 0:nt.background_youtube)||{},Me=ke.url||ke.video_id||"";if(pe&&(pe.value=Me),He&&(He.value=(et=ke.start)!=null?et:""),Ye&&(Ye.value=(tt=ke.end)!=null?tt:""),De&&(De.checked=ke.mute!==!1),Ue&&(Ue.checked=ke.loop!==!1),ot&&(ot.value=String(ke.size||"cover")),st&&(st.value=String(ke.position||"center")),ae&&(ae.value=String(ke.attachment||"scroll")),ut){let M=Math.round((ke.opacity!=null?ke.opacity:1)*100);ut.value=String(M),ct&&(ct.textContent=M+"%"),ut.addEventListener("input",()=>{let W=Math.max(0,Math.min(100,parseInt(ut.value||"100",10)));ct&&(ct.textContent=W+"%")})}let ft=()=>{let M=(U==null?void 0:U.value)||"none";de&&(de.style.display=M==="image"?"":"none"),_e&&(_e.style.display=M==="particles"?"":"none"),Re&&(Re.style.display=M==="youtube"?"":"none")};U==null||U.addEventListener("change",ft),ft();let gt=t.querySelector('[aria-labelledby="lbl-auto-resize"]'),Bt=()=>{let M=(v==null?void 0:v.value)||"dynamic";gt&&(gt.style.display=M==="dynamic"?"":"none")};if(Bt(),v==null||v.addEventListener("change",Bt),o&&(o.checked=!!this.autoResizeCards),c&&(c.value=String(this.gridSize||100)),s&&(s.checked=!!this.animateCards),l&&(l.checked=!!this.hideHaHeader),u&&(u.checked=!!this.hideHaSidebar),f&&(f.checked=!!this.dragLiveSnap),y&&(y.checked=!!this.autoSave),m&&(m.value=String((Ge=this.autoSaveDebounce)!=null?Ge:800)),v&&(v.value=String(this.containerSizeMode||"dynamic")),w&&(w.value=String(this.containerPresetOrient||"auto")),S&&(S.checked=!!this.disableOverlap),T&&(T.value=String(this.containerBackground||"")),R&&(R.value=String(this.cardBackground||"")),O){let M=((ye=(Xe=this._config)==null?void 0:Xe.background_image)!=null?ye:(Le=this._config)==null?void 0:Le.bg_image)||{};O.value=M.src?String(M.src):""}if(H&&(H.checked=!!this.debug),C&&(C.checked=!!this.cardShadowEnabled),z&&(z.value=String(Pe.repeat||"no-repeat")),b&&(b.value=String(Pe.size||"cover")),L&&(L.value=String(Pe.position||"center center")),I&&(I.value=String(Pe.attachment||"scroll")),F){let M=Math.round((Pe.opacity!=null?Pe.opacity:1)*100);F.value=String(M),N&&(N.textContent=`${M}%`),F.addEventListener("input",()=>{let W=Math.max(0,Math.min(100,parseInt(F.value||"100",10)));N.textContent=`${W}%`,this.style.setProperty("--ddc-bg-opacity",String(W/100))})}if(C&&C.addEventListener("change",()=>{try{C.checked?this.style.setProperty("--ddc-card-shadow","0 8px 24px rgba(0,0,0,.35)"):this.style.removeProperty("--ddc-card-shadow")}catch{}}),Q&&(Q.checked=!!this.screenSaverEnabled,Q.addEventListener("change",()=>{this.screenSaverEnabled=Q.checked,typeof this._updateScreensaverSettings=="function"&&this._updateScreensaverSettings()})),B){let M=this.screenSaverDelay!=null?Number(this.screenSaverDelay):3e5,W=Math.round(M/6e4);(!Number.isFinite(W)||W<1)&&(W=5),W>60&&(W=60),B.value=String(W),V&&(V.textContent=`${W} min`),B.addEventListener("input",()=>{let te=parseInt(B.value||"1",10),se=Math.max(1,Math.min(60,isNaN(te)?1:te));V&&(V.textContent=`${se} min`),this.screenSaverDelay=se*6e4,typeof this._updateScreensaverSettings=="function"&&this._updateScreensaverSettings()})}try{if(_){let M=this.config&&this.config.edit_mode_pin!=null?String(this.config.edit_mode_pin):"",W=this.editModePin!=null?String(this.editModePin):"";_.value=W||M||"",_.disabled=!1,_.readOnly=!1}}catch{}let lt=t.querySelector("#ddc-setting-gridSize"),At=t.querySelector("#ddc-grid-out"),xt=t.querySelector("#ddc-grid-demo"),Wt=t.querySelector("#ddc-grid-meta"),Fe=t.querySelector("#ddc-setting-gridSizeInput"),mt=()=>{if(!xt||!Wt)return;let M=xt.getBoundingClientRect(),W=Math.max(1,parseInt(lt.value||"100",10)),te=Math.max(1,Math.floor(M.width/W)),se=Math.max(1,Math.floor(M.height/W));Wt.innerHTML=`
        <ha-icon icon="mdi:grid"></ha-icon>
        <span>${W}px \xB7 ${te}\xD7${se}</span>
      `},Tt=()=>{let M=Math.max(1,parseInt(lt.value||"100",10));At&&(At.textContent=`${M} px`),xt&&xt.style.setProperty("--g",`${M}px`),mt()};if(lt&&(lt.value||(lt.value=String(this.gridSize||100)),lt.addEventListener("input",()=>{Fe&&(Fe.value=lt.value),Tt()}),Fe&&(Fe.value=lt.value),Tt()),Fe&&Fe.addEventListener("input",()=>{let M=Math.max(1,Math.min(400,parseInt(Fe.value||"100",10)));lt.value=String(M),Tt()}),xt){let M=new ResizeObserver(()=>mt());M.observe(xt),(Be=(Ce=this.__ddcGridRO)==null?void 0:Ce.disconnect)==null||Be.call(Ce),this.__ddcGridRO=M}t.querySelectorAll(".chip").forEach(M=>{M.addEventListener("click",()=>{var Se,he;t.querySelectorAll(".chip").forEach(ve=>ve.setAttribute("aria-pressed","false")),M.setAttribute("aria-pressed","true");let W=parseInt(M.dataset.w,10),te=parseInt(M.dataset.h,10),se=t.querySelector("#ddc-setting-sizeMode");se.value="fixed_custom",(he=(Se=typeof v!="undefined"&&v)==null?void 0:Se.dispatchEvent)==null||he.call(Se,new Event("change")),setTimeout(()=>{var We,Je,Ze;(We=t.querySelector("#ddc-setting-custW"))==null||We.setAttribute("value",String(W)),(Ze=(Je=t.querySelector("#ddc-setting-custW"))==null?void 0:Je.dispatchEvent)==null||Ze.call(Je,new Event("change"));let ve=t.querySelector("#ddc-setting-custW");ve&&(ve.value=String(W));let qe=t.querySelector("#ddc-setting-custH");qe&&(qe.value=String(te))},0)})});let ii=["#ffffff","#f5f7fa","#ebeff5","#121212","#1f2937","#334155","#ff6b6b","#fcbf49","#ffe66d","#4ecdc4","#1a535c","#6b5b95","#f6f5f5","#00aaff","#ff00ff","#00ff00","var(--card-background-color)","var(--ha-card-background)","transparent","rgba(255,255,255,0.4)","rgba(0,0,0,0.3)","rgba(0,128,255,0.3)","rgba(255,0,128,0.3)","rgba(255,255,0,0.3)","rgba(0,255,128,0.3)"],Ot=(M,W,te)=>{let se=t.querySelector(M),Se=t.querySelector(W),he=t.querySelector(te);!se||!Se||(se.innerHTML="",ii.forEach((ve,qe)=>{let We=document.createElement("button");We.type="button",We.className="swatch",We.title=ve,We.style.background=ve.startsWith("var(")?getComputedStyle(this).getPropertyValue(ve.slice(4,-1)).trim()||"#fff":ve,We.setAttribute("aria-pressed","false"),We.addEventListener("click",()=>{se.querySelectorAll(".swatch").forEach(Je=>Je.setAttribute("aria-pressed","false")),We.setAttribute("aria-pressed","true"),Se.value=ve,/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(ve)&&he&&(he.value=ve);try{Se.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}catch{}}),se.appendChild(We),String(Se.value).trim()===ve&&We.setAttribute("aria-pressed","true")}))};Ot("#ddc-swatches-containerBg","#ddc-setting-containerBg","#ddc-color-containerBg"),Ot("#ddc-swatches-cardBg","#ddc-setting-cardBg","#ddc-color-cardBg"),[["#ddc-color-containerBg","#ddc-setting-containerBg"],["#ddc-color-cardBg","#ddc-setting-cardBg"]].forEach(([M,W])=>{let te=t.querySelector(M),se=t.querySelector(W);if(!te||!se)return;let Se=(String(se.value||"").match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)||[])[0];Se&&(te.value=Se),te.addEventListener("input",()=>{se.value=te.value}),se.addEventListener("change",()=>{let he=(String(se.value||"").match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)||[])[0];he&&(te.value=he)})});let yt=t.querySelector("#ddc-setting-bgImg"),It=t.querySelector("#ddc-bg-thumb"),Mt=M=>{It&&(It.style.backgroundImage=M?`url(${M})`:"none")};yt!=null&&yt.value&&Mt(yt.value),yt==null||yt.addEventListener("input",()=>{let M=(yt.value||"").trim();Mt(M||"")}),(Ee=t.querySelector("#ddc-clear-bg"))==null||Ee.addEventListener("click",()=>{var te,se;yt&&(yt.value=""),Mt("");let{background_image:M,...W}=this._config||{};this._config=W,this.style.setProperty("--ddc-bg-image","none"),(te=this._applyBackgroundFromConfig)==null||te.call(this),(se=this._persistThisCardConfigToStorage_)==null||se.call(this)}),t.addEventListener("click",M=>{M.target===t&&(M.stopPropagation(),Oe())});let ge=M=>{M.key==="Escape"&&(M.stopPropagation(),Oe())};document.addEventListener("keydown",ge,{once:!0}),setTimeout(()=>{var M;return(M=t.querySelector("#ddc-setting-gridSize"))==null?void 0:M.focus()},0);try{let M=t.querySelector("#ddc-setting-sizeExtras"),W=()=>{var se,Se;if(!M)return;M.innerHTML="";let te=(v==null?void 0:v.value)||"dynamic";if(te==="fixed_custom"){let he=document.createElement("label");he.style.display="flex",he.style.flexDirection="column",he.style.fontSize=".95rem",he.style.marginBottom="10px";let ve=document.createElement("span");ve.textContent="Custom width (px)",ve.style.marginBottom="4px";let qe=document.createElement("input");qe.type="number",qe.id="ddc-setting-custW",qe.min="100",qe.max="10000",qe.step="10",qe.style.padding="6px",qe.style.border="1px solid var(--divider-color,rgba(0,0,0,.3))",qe.style.borderRadius="6px",qe.value=String((se=this.containerFixedWidth)!=null?se:800),he.appendChild(ve),he.appendChild(qe);let We=document.createElement("label");We.style.display="flex",We.style.flexDirection="column",We.style.fontSize=".95rem",We.style.marginBottom="10px";let Je=document.createElement("span");Je.textContent="Custom height (px)",Je.style.marginBottom="4px";let Ze=document.createElement("input");Ze.type="number",Ze.id="ddc-setting-custH",Ze.min="100",Ze.max="10000",Ze.step="10",Ze.style.padding="6px",Ze.style.border="1px solid var(--divider-color,rgba(0,0,0,.3))",Ze.style.borderRadius="6px",Ze.value=String((Se=this.containerFixedHeight)!=null?Se:600),We.appendChild(Je),We.appendChild(Ze),M.appendChild(he),M.appendChild(We)}else if(te==="preset"){let he=document.createElement("label");he.style.display="flex",he.style.flexDirection="column",he.style.fontSize=".95rem",he.style.marginBottom="10px";let ve=document.createElement("span");ve.textContent="Preset size",ve.style.marginBottom="4px";let qe=document.createElement("select");qe.id="ddc-setting-preset",qe.style.padding="6px",qe.style.border="1px solid var(--divider-color,rgba(0,0,0,.3))",qe.style.borderRadius="6px",(typeof e!="undefined"&&e._sizePresets?e._sizePresets():[]).forEach(Je=>{let Ze=document.createElement("option");Ze.value=Je.key,Ze.textContent=`${Je.label||Je.key} (${Je.w}\xD7${Je.h})`,qe.appendChild(Ze)}),qe.value=String(this.containerPreset||"fhd"),he.appendChild(ve),he.appendChild(qe),M.appendChild(he)}};W(),v==null||v.addEventListener("change",W)}catch(M){console.warn("[drag-and-drop-card] Failed to build container size extras",M)}let j=()=>{var W,te,se,Se,he;return((he=(Se=(te=(W=this._config)==null?void 0:W.options)==null?void 0:te.tabs)!=null?Se:(se=this._config)==null?void 0:se.tabs)!=null?he:[]).map(ve=>{var qe,We,Je,Ze,Lt,Dt,Pt;return typeof ve=="string"?{id:ve,label:ve,icon:"",label_mode:"both",__raw:{id:ve,label:ve}}:{id:(Je=(We=(qe=ve.id)!=null?qe:ve.key)!=null?We:ve.label)!=null?Je:"tab",label:(Lt=(Ze=ve.label)!=null?Ze:ve.id)!=null?Lt:"Tab",icon:(Dt=ve.icon)!=null?Dt:"",label_mode:(Pt=ve.label_mode)!=null?Pt:"both",__raw:ve}})},$=async(M,W)=>{var se,Se,he;let te=M.map(ve=>({...ve.__raw,id:ve.id,label:ve.label,icon:ve.icon||"",label_mode:ve.label_mode||"both"}));(se=this._config)!=null&&se.options?this._config.options={...this._config.options||{},tabs:te,default_tab:W!=null?W:(Se=this._config.options)==null?void 0:Se.default_tab}:(this._config.tabs=te,W&&(this._config.default_tab=W));try{await this._persistThisCardConfigToStorage_()}catch(ve){console.warn("[drag-and-drop-card] Could not persist tabs",ve)}(he=this.requestUpdate)==null||he.call(this)},me=()=>{var M,W,te,se;return((W=(M=this._config)==null?void 0:M.options)==null?void 0:W.default_tab)||((te=this._config)==null?void 0:te.default_tab)||((se=j()[0])==null?void 0:se.id)},we=t.querySelector("#ddc-tabs-list"),ue=()=>{let M=j(),W=me();if(we.innerHTML="",!M.length){let te=document.createElement("div");te.className="hint",te.textContent="No tabs yet. Add one below.",we.appendChild(te);return}M.forEach((te,se)=>{let Se=document.createElement("div");Se.className="tab-row";let he=document.createElement("input");he.type="radio",he.name="ddc-default-tab",he.value=te.id,he.checked=te.id===W,he.title="Set as default tab",he.addEventListener("change",async()=>{await $(M,te.id)});let ve=document.createElement("div");ve.className="tab-name";let qe=document.createElement("ha-icon");qe.setAttribute("icon",te.icon||"mdi:tab");let We=document.createElement("input");We.value=te.icon||"",We.placeholder="mdi:home",We.title="Tab icon (mdi:...)",We.style.width="160px",We.addEventListener("change",async()=>{te.icon=We.value.trim(),qe.setAttribute("icon",te.icon||"mdi:tab"),M[se]=te,await $(M,W)});let Je=document.createElement("input");Je.value=te.label,Je.placeholder="Tab name",Je.style.flex="1",Je.addEventListener("change",async()=>{te.label=Je.value.trim()||te.id,M[se]=te,await $(M,W)});let Ze=document.createElement("div");Ze.className="tab-icon-wrap",Ze.appendChild(qe),Ze.appendChild(We),ve.appendChild(Ze),ve.appendChild(Je);let Lt=document.createElement("div");Lt.className="mode-chips";let Dt=(qt,Ft)=>{let bt=document.createElement("button");return bt.type="button",bt.className="chip",bt.textContent=Ft,bt.setAttribute("aria-pressed",String((te.label_mode||"both")===qt)),bt.addEventListener("click",async()=>{Lt.querySelectorAll(".chip").forEach(Kt=>Kt.setAttribute("aria-pressed","false")),bt.setAttribute("aria-pressed","true"),te.label_mode=qt,M[se]=te,await $(M,W)}),bt};Lt.appendChild(Dt("icon","Icon")),Lt.appendChild(Dt("text","Text")),Lt.appendChild(Dt("both","Both"));let Pt=document.createElement("div");Pt.className="tab-actions";let wt=document.createElement("button");wt.className="icon-btn danger",wt.innerHTML='<ha-icon icon="mdi:trash-can-outline"></ha-icon>',wt.title="Delete tab",wt.addEventListener("click",async()=>{var bt,Kt;let qt=j().filter(ri=>ri.id!==te.id),Ft=W;te.id===W&&(Ft=(bt=qt[0])==null?void 0:bt.id),await $(qt,Ft);try{(Kt=this._reassignCardsToTab_)==null||Kt.call(this,te.id,Ft)}catch{}ue()}),Pt.appendChild(Lt),Pt.appendChild(wt),Se.appendChild(he),Se.appendChild(ve),Se.appendChild(Pt),we.appendChild(Se)})};ue(),(ce=t.querySelector("#ddc-add-tab-btn"))==null||ce.addEventListener("click",async()=>{let M=t.querySelector("#ddc-new-tab-name"),W=((M==null?void 0:M.value)||"").trim();if(!W)return;let te=j(),se=W.replace(/\s+/g,"-").toLowerCase(),Se=2;for(;te.some(he=>he.id===se);)se=`${se}-${Se++}`;te.push({id:se,label:W,icon:"",label_mode:"both",__raw:{id:se,label:W}}),await $(te,me()),M.value="",ue()});let Te=t.querySelector("#ddc-clear-bg");Te&&Te.addEventListener("click",()=>{var te,se,Se;let M=t.querySelector("#ddc-setting-bgImg"),W=t.querySelector("#ddc-bg-thumb");M&&(M.value=""),W&&(W.style.backgroundImage="none");try{if((te=this._config)!=null&&te.background_image){let{background_image:he,...ve}=this._config;this._config=ve}(se=this._applyBackgroundImageFromConfig)==null||se.call(this),(Se=this._persistThisCardConfigToStorage_)==null||Se.call(this)}catch(he){console.warn("[drag-and-drop-card] Failed to clear background image",he)}});let Y=["linear-gradient(135deg, #1e3a8a, #0ea5e9)","linear-gradient(135deg, #111827, #1f2937)","linear-gradient(135deg, #0f766e, #22c55e)","linear-gradient(135deg, #7c3aed, #06b6d4)","linear-gradient(135deg, #f97316, #f43f5e)","linear-gradient(135deg, #eab308, #22d3ee)","radial-gradient(circle at 30% 20%, #2dd4bf, #1e293b)","radial-gradient(circle at 70% 80%, #f59e0b, #7c3aed)"],Z=(M,W)=>{let te=t.querySelector(M),se=t.querySelector(W);!te||!se||(te.innerHTML="",Y.forEach(Se=>{let he=document.createElement("button");he.type="button",he.className="gradient",he.style.background=Se,he.setAttribute("aria-pressed","false"),he.title=Se,he.addEventListener("click",()=>{te.querySelectorAll(".gradient").forEach(ve=>ve.setAttribute("aria-pressed","false")),he.setAttribute("aria-pressed","true"),se.value=Se;try{String(W||"").toLowerCase().includes("cardbg")?(this.cardBackground=Se,this.style.setProperty("--ddc-card-bg",Se)):(this.containerBackground=Se,this.style.setProperty("--ddc-bg",Se))}catch{}}),te.appendChild(he),String(se.value).trim()===Se&&he.setAttribute("aria-pressed","true")}))};Z("#ddc-gradients-containerBg","#ddc-setting-containerBg"),Z("#ddc-gradients-cardBg","#ddc-setting-cardBg"),T&&T.addEventListener("input",()=>{let M=(T.value||"").trim();try{this.containerBackground=M,this.style.setProperty("--ddc-bg",M)}catch{}}),R&&R.addEventListener("input",()=>{let M=(R.value||"").trim();try{this.cardBackground=M,this.style.setProperty("--ddc-card-bg",M)}catch{}});let Oe=()=>{var M,W;try{(W=(M=this.__ddcGridRO)==null?void 0:M.disconnect)==null||W.call(M),this.__ddcGridRO=null}catch{}try{t.remove()}catch{}this.__settingsModal===t&&(this.__settingsModal=null)};(ne=t.querySelector("#ddc-settings-close"))==null||ne.addEventListener("click",M=>{M.stopPropagation(),Oe()}),(ee=t.querySelector("#ddc-settings-cancel"))==null||ee.addEventListener("click",M=>{M.stopPropagation(),Oe()}),(J=t.querySelector("#ddc-settings-save"))==null||J.addEventListener("click",M=>{var Gt,Yi,wi,Si,hi,$i,Ki,ki,Ui,Vi,Ci,Ei,Gi,fi,Xi,Ai,Ji,ai;M.stopPropagation();let W=(v==null?void 0:v.value)||"dynamic",te=W==="dynamic"&&!!(o!=null&&o.checked),se=parseInt((c==null?void 0:c.value)||"0",10),Se=!!(s!=null&&s.checked),he=!!(l!=null&&l.checked),ve=!!(u!=null&&u.checked),qe=!!(f!=null&&f.checked),We=!!(y!=null&&y.checked),Je=parseInt((m==null?void 0:m.value)||"0",10),Ze=(w==null?void 0:w.value)||"auto",Lt=!!(S!=null&&S.checked),Dt=((T==null?void 0:T.value)||"").trim(),Pt=((R==null?void 0:R.value)||"").trim(),wt=((O==null?void 0:O.value)||"").trim(),qt=!!(H!=null&&H.checked),Ft=((_==null?void 0:_.value)||"").trim(),bt=(U==null?void 0:U.value)||"none",Kt=((re==null?void 0:re.value)||"").trim(),ri=!!(ze!=null&&ze.checked),ur=((pe==null?void 0:pe.value)||"").trim(),ui=parseInt((He==null?void 0:He.value)||"",10),Hi=parseInt((Ye==null?void 0:Ye.value)||"",10),ji=!!(De!=null&&De.checked),Wi=!!(Ue!=null&&Ue.checked),_i=(ot==null?void 0:ot.value)||"cover",pr=(st==null?void 0:st.value)||"center",pi=ut?Math.max(0,Math.min(100,parseInt(ut.value||"100",10)))/100:1,Ut=(ae==null?void 0:ae.value)||"scroll",Vt=!!(C!=null&&C.checked),xi=!!(Q!=null&&Q.checked),ni=parseInt((B==null?void 0:B.value)||"1",10),Ht=(Number.isFinite(ni)?ni:1)*6e4;try{if(this.autoResizeCards=te,!this.autoResizeCards&&this.__ddcResizeObs){try{this.__ddcResizeObs.disconnect()}catch{}this.__ddcResizeObs=null,this.__ddcOnWinResize&&(window.removeEventListener("resize",this.__ddcOnWinResize),this.__ddcOnWinResize=null)}if(this.autoResizeCards&&!this.__ddcResizeObs){this.__ddcResizeObs=new ResizeObserver(()=>{var it;return(it=this._applyAutoScale)==null?void 0:it.call(this)});try{this.__ddcResizeObs.observe(this)}catch{}try{this.__ddcResizeObs.observe(this.cardContainer)}catch{}window.addEventListener("resize",this.__ddcOnWinResize=()=>{var it;return(it=this._applyAutoScale)==null?void 0:it.call(this)})}this.autoResizeCards||String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(Gt=this._startScaleWatch)==null||Gt.call(this):(Yi=this._stopScaleWatch)==null||Yi.call(this),(wi=this._applyAutoScale)==null||wi.call(this),!isNaN(se)&&se>0&&se!==this.gridSize&&(this.gridSize=se,(Si=this._applyGridVars)==null||Si.call(this),(hi=this._resizeContainer)==null||hi.call(this)),this.cardShadowEnabled=Vt,this.cardShadowEnabled?this.style.setProperty("--ddc-card-shadow","0 8px 24px rgba(0,0,0,.35)"):this.style.removeProperty("--ddc-card-shadow"),this.editModePin=Ft,this._config={...this._config||{},edit_mode_pin:Ft};let Ti=qe!==this.dragLiveSnap;this.dragLiveSnap=qe,Ti&&(($i=this._initInteract)==null||$i.call(this)),this.autoSave=We,!isNaN(Je)&&Je>0&&(this.autoSaveDebounce=Je);let Qi=W!==this.containerSizeMode;this.containerSizeMode=W;let Zi=Ze!==this.containerPresetOrient;if(this.containerPresetOrient=Ze,(Qi||Zi)&&((Ki=this._resizeContainer)==null||Ki.call(this)),W==="fixed_custom"){let it=parseInt(((ki=t.querySelector("#ddc-setting-custW"))==null?void 0:ki.value)||"0",10),dt=parseInt(((Ui=t.querySelector("#ddc-setting-custH"))==null?void 0:Ui.value)||"0",10);!isNaN(it)&&it>0&&(this.containerFixedWidth=it),!isNaN(dt)&&dt>0&&(this.containerFixedHeight=dt),(Vi=this._resizeContainer)==null||Vi.call(this)}else if(W==="preset"){let it=(Ci=t.querySelector("#ddc-setting-preset"))==null?void 0:Ci.value;it&&(this.containerPreset=it),(Ei=this._resizeContainer)==null||Ei.call(this)}if(this.disableOverlap=Lt,Dt)this.containerBackground=Dt,this.style.setProperty("--ddc-bg",this.containerBackground),this._config=this._config||{},this._config.container_background=this.containerBackground;else{this.containerBackground="";try{this.style.removeProperty("--ddc-bg")}catch{}this._config=this._config||{},this._config.container_background=this.containerBackground}if(Pt)this.cardBackground=Pt,this.style.setProperty("--ddc-card-bg",this.cardBackground),this._config=this._config||{},this._config.card_background=this.cardBackground;else{this.cardBackground="";try{this.style.removeProperty("--ddc-card-bg")}catch{}this._config=this._config||{},this._config.card_background=this.cardBackground}if(wt){let it=this._config&&this._config.background_image||{};this._config={...this._config,background_image:{...it,src:wt}}}else{let{background_image:it,...dt}=this._config||{};this._config=dt}this.debug=qt,this.animateCards=Se,this.hideHaHeader=he,this.hideHaSidebar=ve,(Gi=this._applyHaChromeVisibility_)==null||Gi.call(this);let Oi=this._config&&this._config.background_image||{},zi=(z==null?void 0:z.value)||"no-repeat",Mi=(b==null?void 0:b.value)||"cover",er=(L==null?void 0:L.value)||"center center",Xt=(I==null?void 0:I.value)||"scroll",oi=F?Math.max(0,Math.min(100,parseInt(F.value||"100",10)))/100:1;if(this._config=this._config||{},this._config.background_mode=bt,bt!=="image"&&!wt){let{background_image:it,...dt}=this._config||{};this._config=dt}if(bt==="particles")this._config.background_particles={config_url:Kt||void 0,pointer_events:ri||void 0};else{let{background_particles:it,...dt}=this._config||{};this._config=dt}if(bt==="youtube")this._config.background_youtube={url:ur||void 0,start:Number.isFinite(ui)?ui:void 0,end:Number.isFinite(Hi)?Hi:void 0,mute:ji!==!0?ji:void 0,loop:Wi!==!0?Wi:void 0,size:_i&&_i!="cover"?_i:void 0,position:pr||void 0,attachment:Ut&&Ut!=="scroll"?Ut:void 0,opacity:pi!=null&&pi!==1?pi:void 0};else{let{background_youtube:it,...dt}=this._config||{};this._config=dt}if(this.screenSaverEnabled=xi,this.screenSaverDelay=Ht,(fi=this._updateScreensaverSettings)==null||fi.call(this),wt)this._config={...this._config,background_image:{...Oi,src:wt,repeat:zi,size:Mi,position:er,attachment:Xt,opacity:oi}};else if(Oi.src)this._config={...this._config,background_image:{...Oi,repeat:zi,size:Mi,position:er,attachment:Xt,opacity:oi}};else{let{background_image:it,...dt}=this._config||{};this._config=dt}(Xi=this._applyBackgroundFromConfig)==null||Xi.call(this);try{this._config||(this._config={}),this._config.grid=this.gridSize,this._config.auto_resize_cards=!!this.autoResizeCards,this._config.drag_live_snap=!!this.dragLiveSnap,this._config.auto_save=!!this.autoSave,this._config.auto_save_debounce=this.autoSaveDebounce,this._config.container_size_mode=this.containerSizeMode,this._config.container_preset_orientation=this.containerPresetOrient,this._config.container_fixed_width=this.containerFixedWidth,this._config.container_fixed_height=this.containerFixedHeight,this._config.container_preset=this.containerPreset,this._config.disable_overlap=!!this.disableOverlap,this.containerBackground!==void 0?this._config.container_background=this.containerBackground:this._config&&delete this._config.container_background,this.cardBackground!==void 0?this._config.card_background=this.cardBackground:this._config&&delete this._config.card_background,this._config.card_shadow=!!this.cardShadowEnabled,this._config.debug=!!this.debug,this._config.animate_cards=!!this.animateCards,this._config.hide_HA_Header=!!this.hideHaHeader,this._config.hide_HA_Sidebar=!!this.hideHaSidebar,this._config.screen_saver_enabled=!!this.screenSaverEnabled,this._config.screen_saver_delay=this.screenSaverDelay}catch(it){console.warn("[drag-and-drop-card] Failed to update config",it)}try{let it=((Ai=this._exportableOptions)==null?void 0:Ai.call(this))||{},dt=(Ji=this._persistThisCardConfigToStorage_)==null?void 0:Ji.call(this);dt&&typeof dt.catch=="function"&&dt.catch(Li=>{console.warn("[drag-and-drop-card] Storage save failed (is this a YAML dashboard?)",Li)});let gi=(ai=this._persistOptionsToYaml)==null?void 0:ai.call(this,it,{noDownload:!0});gi&&typeof gi.catch=="function"&&gi.catch(Li=>{console.warn("[drag-and-drop-card] YAML persist failed",Li)})}catch(it){console.warn("[drag-and-drop-card] Unexpected error persisting settings",it)}}catch(Ti){console.warn("[drag-and-drop-card] Failed to apply settings",Ti)}Oe()})}_exportableOptions(){var s,l,u;let t=this._config||{},n=(f,y)=>Object.fromEntries(y.map(m=>[m,f==null?void 0:f[m]]).filter(([,m])=>m!==void 0)),o=t.background_mode||((s=t.background_image)!=null&&s.src?"image":t.background_youtube?"youtube":t.background_particles?"particles":"none"),c={storage_key:this.storageKey||void 0,grid:this.gridSize,drag_live_snap:!!this.dragLiveSnap,auto_save:!!this.autoSave,auto_save_debounce:this.autoSaveDebounce,disable_overlap:!!this.disableOverlap,debug:!!this.debug,edit_mode_pin:this.editModePin||void 0,container_size_mode:this.containerSizeMode,container_preset_orientation:this.containerPresetOrient,container_fixed_width:(l=this.containerFixedWidth)!=null?l:void 0,container_fixed_height:(u=this.containerFixedHeight)!=null?u:void 0,container_preset:this.containerPreset,auto_resize_cards:!!this.autoResizeCards,container_background:this.containerBackground,card_background:this.cardBackground,card_shadow:!!this.cardShadowEnabled,animate_cards:!!this.animateCards,hide_HA_Header:!!this.hideHaHeader,hide_HA_Sidebar:!!this.hideHaSidebar,tabs:this.tabs,tabs_position:this.tabsPosition,default_tab:this.defaultTab,hide_tabs_when_single:!!this.hideTabsWhenSingle,background_mode:o,background_image:t.background_image?n(t.background_image,["src","repeat","size","position","attachment","opacity"]):void 0,background_particles:t.background_particles?n(t.background_particles,["config_url","pointer_events"]):void 0,background_youtube:t.background_youtube?n(t.background_youtube,["url","start","end","mute","loop","size","position","attachment","opacity"]):void 0,screen_saver_enabled:!!this.screenSaverEnabled,screen_saver_delay:this.screenSaverDelay};return Object.keys(c).forEach(f=>c[f]===void 0&&delete c[f]),c}_applyImportedOptions(t={},n=!0){var o,c,s,l,u,f,y,m,v,w,S;if(t&&Object.prototype.hasOwnProperty.call(t,"storage_key")&&this._isInHaEditorPreview())try{let _={type:"custom:drag-and-drop-card",...this._config||{}};this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:_},bubbles:!0,composed:!0}))}catch{}if(this._config={...this._config||{},...t},"storage_key"in t&&(this.storageKey=t.storage_key||void 0),this._syncEditorsStorageKey(),"grid"in t&&(this.gridSize=Number(t.grid)||10),"drag_live_snap"in t&&(this.dragLiveSnap=!!t.drag_live_snap),"auto_save"in t&&(this.autoSave=!!t.auto_save),"auto_save_debounce"in t&&(this.autoSaveDebounce=Number(t.auto_save_debounce)||800),"container_background"in t&&(this.containerBackground=(o=t.container_background)!=null?o:"transparent"),"card_background"in t&&(this.cardBackground=(c=t.card_background)!=null?c:"var(--ha-card-background, var(--card-background-color))"),"card_shadow"in t&&(this.cardShadowEnabled=!!t.card_shadow),"debug"in t&&(this.debug=!!t.debug),"disable_overlap"in t&&(this.disableOverlap=!!t.disable_overlap),"container_size_mode"in t){this.containerSizeMode=t.container_size_mode||"dynamic";let _=String(this.containerSizeMode||"dynamic").toLowerCase();_==="dynamic"&&(this.autoResizeCards=!0),this.autoResizeCards||_==="auto"?(s=this._startScaleWatch)==null||s.call(this):(l=this._stopScaleWatch)==null||l.call(this),(u=this._applyAutoScale)==null||u.call(this)}if("container_fixed_width"in t&&(this.containerFixedWidth=Number(t.container_fixed_width)||null),"container_fixed_height"in t&&(this.containerFixedHeight=Number(t.container_fixed_height)||null),"container_preset"in t&&(this.containerPreset=t.container_preset||"fhd"),"container_preset_orientation"in t&&(this.containerPresetOrient=t.container_preset_orientation||"auto"),"auto_resize_cards"in t){let _=String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase();_==="dynamic"?this.autoResizeCards=!0:this.autoResizeCards=!!t.auto_resize_cards,this.autoResizeCards||_==="auto"?(f=this._startScaleWatch)==null||f.call(this):(y=this._stopScaleWatch)==null||y.call(this),(m=this._applyAutoScale)==null||m.call(this)}if("screen_saver_enabled"in t&&(this.screenSaverEnabled=!!t.screen_saver_enabled),"screen_saver_delay"in t){let _=Number(t.screen_saver_delay);this.screenSaverDelay=Number.isFinite(_)&&_>0?_:this.screenSaverDelay}("screen_saver_enabled"in t||"screen_saver_delay"in t)&&typeof this._updateScreensaverSettings=="function"&&this._updateScreensaverSettings(),this.style.setProperty("--ddc-bg",this.containerBackground),this.style.setProperty("--ddc-card-bg",this.cardBackground),this.cardShadowEnabled?this.style.setProperty("--ddc-card-shadow","0 8px 24px rgba(0,0,0,.35)"):this.style.removeProperty("--ddc-card-shadow"),this._applyGridVars(),n&&(this._applyContainerSizingFromConfig(!0),(v=this._applyAutoScale)==null||v.call(this),this._resizeContainer(),(w=this._updateStoreBadge)==null||w.call(this),(S=this._applyAutoScale)==null||S.call(this))}_exportDesign(){let n=Array.from(this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)")).map(u=>{let f=parseFloat(u.getAttribute("data-x"))||0,y=parseFloat(u.getAttribute("data-y"))||0,m=parseFloat(u.style.width)||u.getBoundingClientRect().width,v=parseFloat(u.style.height)||u.getBoundingClientRect().height,w=parseInt(u.style.zIndex||"1",10),S=this._extractCardConfig(u.firstElementChild),_=u.dataset.tabId||this.defaultTab,T={card:S,position:{x:f,y},size:{width:m,height:v},z:w,tabId:_},R=u.style.overflow;return R&&R!==""&&(T.overflow=R),T}),o={version:2,options:this._exportableOptions(),cards:n};this._config&&this._config.card_mod&&(o.options=o.options||{},o.options.card_mod=this._config.card_mod);let c=`DragAndDrop_Design_${this.storageKey||"layout"}.json`,s=new Blob([JSON.stringify(o,null,2)],{type:"application/json"}),l=document.createElement("a");l.href=URL.createObjectURL(s),l.download=c,l.click(),URL.revokeObjectURL(l.href),this._toast("Design exported.")}_importDesign(){let t=document.createElement("input");t.type="file",t.accept="application/json";let n=!0,o=!1,c=["grid","drag_live_snap","auto_save","auto_save_debounce","debug","disable_overlap","card_mod","storage_key","animate_cards","auto_resize_cards","container_background","card_background","container_size_mode","container_fixed_width","container_fixed_height","container_preset","container_preset_orientation","tabs","tabs_position","default_tab","hide_tabs_when_single","hide_HA_Header","hide_HA_Sidebar","background_mode","background_image","background_particles","background_youtube","screen_saver_enabled","screen_saver_delay"];t.onchange=async()=>{var u,f,y,m,v,w,S,_,T,R,C,O,z,b,L,I,F,N,H,Q,B,V,U,de,_e,Re,re,ze,pe,He,Ye,De,Ue,ot,st,ae,ut,ct,Pe,oe,$e,ke,Me,ft,gt,Bt,lt,At,xt,Wt;let s=(u=t.files)==null?void 0:u[0];if(!s)return;let l=await s.text();try{let Fe=JSON.parse(l),mt=this.storageKey||((f=this._config)==null?void 0:f.storage_key)||null,Tt=!!(Fe.options&&Array.isArray(Fe.options.tabs)),ii=Array.isArray(Fe.cards)&&Fe.cards.some(ge=>(ge==null?void 0:ge.tabId)||(ge==null?void 0:ge.tab_id)),Ot=[];Tt?Ot=Fe.options.tabs:ii?Ot=Array.from(new Set(Fe.cards.map(j=>(j==null?void 0:j.tabId)||(j==null?void 0:j.tab_id)).filter(Boolean))).map(j=>({id:j,label:j})):Ot=[{id:"default",label:"Layout"}];let yt=((y=Fe.options)==null?void 0:y.tabs_position)==="left"?"left":this.tabsPosition||"top",It=((m=Fe.options)==null?void 0:m.default_tab)||((v=Ot[0])==null?void 0:v.id)||"default",Mt=((w=Fe.options)==null?void 0:w.hide_tabs_when_single)!==void 0?!!Fe.options.hide_tabs_when_single:!0;if(Fe.options){let ge={...Fe.options};if(o||delete ge.storage_key,n){let j=this._config||{type:"custom:drag-and-drop-card"};for(let $ of c)$==="storage_key"&&!o||!($ in ge)&&$ in j&&delete j[$];try{this.cardContainer&&(this.cardContainer.style.background="",this.cardContainer.style.width="",this.cardContainer.style.height=""),(_=(S=this.style)==null?void 0:S.removeProperty)==null||_.call(S,"--ddc-container-bg"),(R=(T=this.style)==null?void 0:T.removeProperty)==null||R.call(T,"--ddc-card-bg")}catch{}if(this._config={...j,...ge},"card_mod"in ge||delete this._config.card_mod,"animate_cards"in ge&&(this.animateCards=!!ge.animate_cards),"auto_resize_cards"in ge&&(this.autoResizeCards=!!ge.auto_resize_cards),"hide_HA_Header"in ge||"hide_HA_Sidebar"in ge)try{(C=this._applyHaChromeVisibility_)==null||C.call(this)}catch{}if("background_mode"in ge||"background_image"in ge||"background_particles"in ge||"background_youtube"in ge)try{(O=this._applyBackgroundFromConfig)==null||O.call(this)}catch{}if(o&&ge.storage_key&&(this.storageKey=ge.storage_key),this._opts){this._opts={...this._opts,...ge};for(let $ of c)$ in ge||delete this._opts[$]}(z=this._applyOptionsToDom)==null||z.call(this,this._config),(b=this.requestUpdate)==null||b.call(this)}else this._applyImportedOptions(ge,!0),ge.card_mod!==void 0&&(this._config=this._config||{},this._config.card_mod=ge.card_mod,(L=this.requestUpdate)==null||L.call(this))}else if(typeof Fe.grid=="number"){let ge={grid:Fe.grid};n?this._config={...this._config||{},...ge}:this._applyImportedOptions(ge,!0),(I=this.requestUpdate)==null||I.call(this)}(!Array.isArray(this.tabs)||!this.tabs.length)&&(this.tabs=Ot),this.tabsPosition||(this.tabsPosition=yt),this.defaultTab||(this.defaultTab=It),this.hideTabsWhenSingle===void 0&&(this.hideTabsWhenSingle=Mt),(H=(N=(F=this.rootEl)==null?void 0:F.classList)==null?void 0:N.toggle)==null||H.call(N,"ddc-tabs-left-layout",this.tabsPosition==="left");try{let ge=((Q=this._config)==null?void 0:Q.storage_key)||this.storageKey||null,j=(B=Fe.options)!=null?B:typeof Fe.grid=="number"?{grid:Fe.grid}:{},$={...j,tabs:(U=(V=j.tabs)!=null?V:this.tabs)!=null?U:[],tabs_position:(_e=(de=j.tabs_position)!=null?de:this.tabsPosition)!=null?_e:"top",default_tab:(Ye=(Re=j.default_tab)!=null?Re:this.defaultTab)!=null?Ye:((ze=(re=j.tabs)==null?void 0:re[0])==null?void 0:ze.id)||((He=(pe=this.tabs)==null?void 0:pe[0])==null?void 0:He.id)||"default",hide_tabs_when_single:(Ue=j.hide_tabs_when_single)!=null?Ue:(De=this.hideTabsWhenSingle)!=null?De:!0};if(o||delete $.storage_key,!ge)console.warn("[ddc:import] No storage_key on this card; aborting YAML persist.");else{let me=await((ot=this._persistOptionsToYaml)==null?void 0:ot.call(this,$,{forceTargetKey:String(ge),noDownload:!0,replace:!0,wipeUnknownKeys:!0})),we=!!(me&&me.yamlSaved);(st=console.debug)==null||st.call(console,"[ddc:import] YAML persist result:",we)}try{let me={type:"custom:drag-and-drop-card",...this._config||{}};me.tabs=$.tabs,me.tabs_position=$.tabs_position,me.default_tab=$.default_tab,me.hide_tabs_when_single=!!$.hide_tabs_when_single,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:me},bubbles:!0,composed:!0}))}catch{}}catch(ge){console.warn("[ddc:import] YAML persist failed:",ge)}if(this.cardContainer.innerHTML="",Array.isArray(Fe.cards)&&Fe.cards.length)for(let ge of Fe.cards){let j=((ae=ge.position)==null?void 0:ae.x)||0,$=((ut=ge.position)==null?void 0:ut.y)||0,me=((ct=ge.size)==null?void 0:ct.width)||140,we=((Pe=ge.size)==null?void 0:Pe.height)||100,ue=ge.z,Te=this._normalizeTabId(ge.tabId||ge.tab_id||this.defaultTab);if(!(ge!=null&&ge.card)||typeof ge.card=="object"&&!Object.keys(ge.card).length){let Oe=this._makePlaceholderAt(j,$,me,we);Oe.dataset.tabId=Te,this.cardContainer.appendChild(Oe);continue}let Y=await this._createCard(ge.card),Z=this._makeWrapper(Y);if(Z.dataset.tabId=Te,this._setCardPosition(Z,j,$),Z.style.width=`${me}px`,Z.style.height=`${we}px`,ue!=null&&(Z.style.zIndex=String(ue)),ge.overflow){Z.style.overflow=ge.overflow,Z.dataset.overflow=ge.overflow;let Oe=Z.firstElementChild;Oe&&(Oe.style.overflow=ge.overflow)}this.cardContainer.appendChild(Z);try{this._rebuildOnce(Z.firstElementChild)}catch{}this._initCardInteract(Z)}else this._showEmptyPlaceholder(),(oe=this._applyAutoScale)==null||oe.call(this);($e=this._applyOptionsToDom)==null||$e.call(this,this._config),this._resizeContainer();try{(ft=(Me=(ke=this.rootEl)==null?void 0:ke.classList)==null?void 0:Me.toggle)==null||ft.call(Me,"ddc-tabs-left-layout",this.tabsPosition==="left"),(gt=this._renderTabs)==null||gt.call(this),(Bt=this._applyActiveTab)==null||Bt.call(this)}catch{}try{this._saveTimer&&clearTimeout(this._saveTimer),await this._saveLayout(!0),(lt=this._toast)==null||lt.call(this,"Design imported & saved. Reloading..."),window.location.reload()}catch(ge){console.warn("[ddc:import] saveLayout failed",ge),(At=this._markDirty)==null||At.call(this,"import"),(xt=this._toast)==null||xt.call(this,"Design imported \u2014 click Apply to save.")}}catch(Fe){console.error("Import failed",Fe),(Wt=this._toast)==null||Wt.call(this,"Import failed \u2014 invalid file.")}},t.click()}_getLovelace(){var s,l;let t=0,n=this;for(;n&&t++<20;){let u=(s=n.getRootNode)==null?void 0:s.call(n),f=u==null?void 0:u.host;if((f==null?void 0:f.tagName)==="HUI-ROOT")return f.lovelace;n=f||n.parentElement}let o=new Set,c=[document];for(;c.length;){let u=c.shift();if(!(!u||o.has(u))){if(o.add(u),((l=u.host)==null?void 0:l.tagName)==="HUI-ROOT")return u.host.lovelace;if(u.tagName==="HUI-ROOT")return u.lovelace;if(u.shadowRoot&&c.push(u.shadowRoot),u.children)for(let f of u.children)c.push(f)}}}_scanDdcCards(t){let n=[],o=(s,l,u)=>{(u==null?void 0:u.type)==="custom:drag-and-drop-card"&&n.push({view:s,path:[...l],card:u})},c=(s,l,u)=>{if(s){if(Array.isArray(s)){s.forEach((f,y)=>c(f,l,u.concat(y)));return}if(typeof s=="object"){"type"in s&&o(l,u,s);for(let[f,y]of Object.entries(s))f==="views"&&Array.isArray(y)?y.forEach((m,v)=>c(m,v,["views",v])):(Array.isArray(y)||y&&typeof y=="object")&&c(y,l,u.concat(f))}}};return c(t,-1,[]),n}async _persistOptionsToYaml(t,{prevKey:n=null,patchAllInCurrentViewIfNoKey:o=!1}={}){var c,s,l,u,f,y,m,v,w;try{let S=this._getLovelace();if(!S)return console.debug("[ddc:import] persist: no lovelace root"),!1;if(typeof S.saveConfig!="function")return console.debug("[ddc:import] persist: dashboard not in Storage mode"),!1;let _=JSON.parse(JSON.stringify(S.config)),T=this._scanDdcCards(_),R=(c=S.current_view)!=null?c:0;console.debug("[ddc:import] persist: found DDC cards",T.map(L=>({view:L.view,path:L.path.join("."),storage_key:L.card.storage_key||null})));let C=(s=t==null?void 0:t.storage_key)!=null?s:null,O=[];n&&O.push(n),C&&O.push(C),this.storageKey&&O.push(this.storageKey),(l=this._config)!=null&&l.storage_key&&O.push(this._config.storage_key);let z=T.filter(L=>L.card.storage_key&&O.includes(L.card.storage_key));if(!z.length){let L=T.filter(I=>I.view===R);L.length===1&&(z=L)}if(!z.length&&T.length===1&&(z=T),!z.length)return console.debug("[ddc:import] persist: no target. Provide a unique storage_key on this card and import again.",{prevKey:n,newKey:C,storageKey:this.storageKey}),!1;let b={type:"custom:drag-and-drop-card",...t};"storage_key"in b&&delete b.storage_key,"storageKey"in b&&delete b.storageKey;for(let L of z){let I=_;for(let H of L.path)I=I[H];let F=(w=(v=(y=(u=I==null?void 0:I.storage_key)!=null?u:I==null?void 0:I.storageKey)!=null?y:(f=I==null?void 0:I.options)==null?void 0:f.storage_key)!=null?v:(m=I==null?void 0:I.options)==null?void 0:m.storageKey)!=null?w:null,N=!!(n&&C&&F===n&&C!==n);if(Object.assign(I,b),I&&typeof I.options=="object"&&I.options!==null)for(let[H,Q]of Object.entries(t||{}))H==="storage_key"||H==="storageKey"||H==="type"||(I.options[H]=Q);N?I.storage_key=String(C):F&&(I.storage_key=String(F)),"storageKey"in I&&delete I.storageKey}return console.debug("[ddc:import] persist \u2192 saving",{patched:z.length,keysTried:O,patch}),await S.saveConfig(_),!0}catch(S){return console.warn("[ddc:import] persist error",S),!1}}_queueSave(t="auto"){this._markDirty(t),this.autoSave&&(this._loading||this.editMode&&(this._dbgPush("autosave","Queued",{reason:t,debounce:this.autoSaveDebounce}),clearTimeout(this._saveTimer),this._saveTimer=setTimeout(()=>this._saveLayout(!0),this.autoSaveDebounce)))}async _saveLayout(t=!0){let o=Array.from(this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)")).map(s=>{let l=parseFloat(s.getAttribute("data-x"))||0,u=parseFloat(s.getAttribute("data-y"))||0,f=parseFloat(s.style.width)||s.getBoundingClientRect().width,y=parseFloat(s.style.height)||s.getBoundingClientRect().height,m=parseInt(s.style.zIndex||"1",10),v=this._extractCardConfig(s.firstElementChild),w=s.dataset.tabId||this.defaultTab,S=s.style.overflow&&s.style.overflow!==""?s.style.overflow:null,_={card:v,position:{x:l,y:u},size:{width:f,height:y},z:m,tabId:w};return S&&(_.overflow=S),_}),c={version:2,options:this._exportableOptions(),cards:o};try{localStorage.setItem(`ddc_local_${this.storageKey||"default"}`,JSON.stringify(c))}catch{}if(!this.storageKey){t||this._toast("Saved locally (no storage_key set)."),this.__dirty=!1,this._updateApplyBtn();return}try{await this._saveLayoutToBackend(this.storageKey,c),t||this._toast("Layout saved."),this.__dirty=!1,this._updateApplyBtn()}catch(s){console.error("Backend save failed",s),this._dbgPush("save","Backend save failed",{error:String(s)}),t||this._toast("Backend save failed \u2014 kept local copy.")}}async _probeBackend(){this._backendOK=!1;let t=performance.now();try{this._dbgPush("probe","GET /api/dragdrop_storage (list keys)");let n=await this.hass.callApi("get","dragdrop_storage"),o=Math.round(performance.now()-t);this._dbgPush("probe",`OK (${o} ms)`,n),this._backendOK=!!n}catch(n){let o=Math.round(performance.now()-t);this._dbgPush("probe",`FAILED (${o} ms)`,{error:String(n)}),this._backendOK=!1}this._updateStoreBadge()}async _loadLayoutFromBackend(t){let n=`dragdrop_storage/${encodeURIComponent(t)}`,o=performance.now();try{this._dbgPush("load",`GET /api/${n}`);let c=await this.hass.callApi("get",n),s=Math.round(performance.now()-o);return this._dbgPush("load",`OK (${s} ms)`,{bytes:JSON.stringify(c||"").length}),c}catch(c){let s=Math.round(performance.now()-o);return this._dbgPush("load",`FAILED (${s} ms)`,{error:String(c)}),null}}async _saveLayoutToBackend(t,n){let o=`dragdrop_storage/${encodeURIComponent(t)}`,c=JSON.stringify(n).length,s=performance.now();try{this._dbgPush("save",`POST /api/${o}`,{bytes:c});let l=await this.hass.callApi("post",o,n),u=Math.round(performance.now()-s);return this._dbgPush("save",`OK (${u} ms)`,l),l}catch(l){let u=Math.round(performance.now()-s);throw this._dbgPush("save",`FAILED (${u} ms)`,{error:String(l),bytes:c}),l}}async _saveOptionsToBackend(t,n){var o;try{let c=await this._loadLayoutFromBackend(t),s={version:2,...c||{},options:n||((o=this._exportableOptions)==null?void 0:o.call(this))||{}};return c&&Array.isArray(c.cards)&&(s.cards=c.cards),await this._saveLayoutToBackend(t,s),!0}catch(c){return console.warn("[ddc] saveOptionsToBackend failed",c),!1}}_updateStoreBadge(){let t=this.storeBadge;if(!t)return;let n=this._backendOK&&!!this.storageKey;t.textContent=n?"storage: backend - OK":"storage: local. Your Changes are NOT being SAVED. You need to download the Drag and Drop Card backend integration",t.style.background=n?"rgba(76,175,80,.15)":"rgba(255,193,7,.15)",t.style.borderColor=n?"rgba(76,175,80,.45)":"rgba(255,193,7,.45)"}_ensureScreenSaverStyles(){var t;if(!((t=this.shadowRoot)!=null&&t.querySelector("#ddc-screensaver-styles")))try{let n=document.createElement("style");n.id="ddc-screensaver-styles",n.textContent=`
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
      `,this.shadowRoot.appendChild(n)}catch(n){console.warn("[drag-and-drop-card] Failed to inject screensaver styles",n)}}_ensureScreenSaverGlobalStyles(){if(!document.head.querySelector("#ddc-screensaver-global-styles"))try{let t=document.createElement("style");t.id="ddc-screensaver-global-styles",t.textContent=`
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
      `,document.head.appendChild(t)}catch(t){console.warn("[drag-and-drop-card] Failed to inject global screensaver styles",t)}}_ensureScreenSaverOverlay(){var o;if(this._ensureScreenSaverGlobalStyles(),!this._screenSaverOverlayId){let c=((o=this.config)==null?void 0:o.id)||`ddc_${Math.random().toString(36).slice(2)}`;this._screenSaverOverlayId=`ddc-screensaver-overlay-${c}`}let t=this._screenSaverOverlayId;if(this.screenSaverOverlay&&this.screenSaverOverlay.parentNode===document.body)return;if(this.screenSaverOverlay&&!this.screenSaverOverlay.parentNode){document.body.appendChild(this.screenSaverOverlay);return}let n=document.createElement("div");n.className="screensaver-overlay",n.id=t,n.innerHTML=`
      <div class="screensaver-content" id="${t}-content">
        <div class="screensaver-clock" id="${t}-clock"></div>
        <div class="screensaver-date" id="${t}-date"></div>
        <div class="screensaver-calendar" id="${t}-calendar"></div>
      </div>
    `,n.addEventListener("click",()=>this._deactivateScreenSaver()),n.addEventListener("keydown",()=>this._deactivateScreenSaver()),this.screenSaverOverlay=n,document.body.appendChild(n)}_attachScreensaverListeners(){if(this._screensaverActivityHandler)return;let t=()=>this._resetScreensaverTimer();this._screensaverActivityHandler=t,this._screensaverEvents=["mousemove","mousedown","click","keydown","wheel","scroll","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointercancel"],this._screensaverEvents.forEach(n=>{document.addEventListener(n,t,!0)})}_resetScreensaverTimer(){if(this._screensaverTimer&&(clearTimeout(this._screensaverTimer),this._screensaverTimer=null),!this._shouldUseScreensaver()){this.screensaverActive&&this._deactivateScreenSaver();return}this.screensaverActive&&this._deactivateScreenSaver();let t=Number(this.screenSaverDelay)||5*6e4;this._screensaverTimer=setTimeout(()=>{this._activateScreenSaver()},t)}_activateScreenSaver(){if(this._shouldUseScreensaver()&&(this._ensureScreenSaverOverlay(),!!this.screenSaverOverlay)){this.screensaverActive=!0,this.screenSaverOverlay.classList.add("active");try{this.tabsBar&&(this.__savedTabsDisplay=this.tabsBar.style.display,this.tabsBar.style.display="none")}catch{}this._updateScreenSaverClock(),this._clockInterval&&clearInterval(this._clockInterval),this._clockInterval=setInterval(()=>this._updateScreenSaverClock(),1e3)}}_deactivateScreenSaver(){if(this.screensaverActive){this.screensaverActive=!1,this.screenSaverOverlay&&this.screenSaverOverlay.classList.remove("active"),this._clockInterval&&(clearInterval(this._clockInterval),this._clockInterval=null);try{this.tabsBar&&(this.__savedTabsDisplay!=null?this.tabsBar.style.display=this.__savedTabsDisplay:this.tabsBar.style.display="")}catch{}this._resetScreensaverTimer()}}_updateScreenSaverClock(){let t=this.screenSaverOverlay,n=t==null?void 0:t.querySelector(".screensaver-clock"),o=t==null?void 0:t.querySelector(".screensaver-date"),c=new Date;n&&(n.textContent=c.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"})),o&&(o.textContent=c.toLocaleDateString([],{weekday:"long",year:"numeric",month:"long",day:"numeric"}));try{this._updateScreenSaverCalendar()}catch{}}_updateScreenSaverCalendar(){var S;let t=(S=this.screenSaverOverlay)==null?void 0:S.querySelector(".screensaver-calendar");if(!t)return;let n=new Date,o=void 0,c=n.getFullYear(),s=n.getMonth(),l=n.toLocaleDateString(o,{month:"long"}),u=[];for(let _=0;_<7;_++){let T=new Date(1970,0,4+_);u.push(T.toLocaleDateString(o,{weekday:"short"}))}let f=new Date(c,s,1).getDay(),y=new Date(c,s+1,0).getDate(),m=new Date(c,s,0).getDate(),v=[];for(let _=0;_<f;_++)v.push({day:m-(f-1)+_,other:!0});for(let _=1;_<=y;_++){let T=_===n.getDate();v.push({day:_,today:T,other:!1})}for(;v.length<42;){let _=v.length-f-y+1;v.push({day:_,other:!0})}let w="";w+=`<div class="calendar-header">${l} ${c}</div>`,w+='<div class="calendar-grid">';for(let _=0;_<7;_++)w+=`<div class="header">${u[_]}</div>`;v.forEach((_,T)=>{let R=[];_.other&&R.push("other-month"),_.today&&R.push("today");let C=T%7;(C===0||C===6)&&R.push("weekend"),w+=`<div class="${R.join(" ")}">${_.day}</div>`}),w+="</div>",t.innerHTML=w}_updateScreensaverSettings(){this.screenSaverEnabled?(this._ensureScreenSaverOverlay(),this._attachScreensaverListeners(),this._resetScreensaverTimer()):(this._screensaverTimer&&(clearTimeout(this._screensaverTimer),this._screensaverTimer=null),this.screensaverActive&&this._deactivateScreenSaver())}_shouldUseScreensaver(){try{if(!this.screenSaverEnabled||this.editMode||typeof this._isInHaEditorPreview=="function"&&this._isInHaEditorPreview()||!this.isConnected)return!1}catch{return!1}return!0}_toast(t){let n=new Event("hass-notification");n.detail={message:t},window.dispatchEvent(n)}_huiRoot(){var t,n,o,c,s,l;try{let u=document.querySelector("home-assistant"),f=(t=u==null?void 0:u.shadowRoot)==null?void 0:t.querySelector("home-assistant-main"),y=((n=f==null?void 0:f.shadowRoot)==null?void 0:n.querySelector("ha-drawer"))||f,m=((o=y==null?void 0:y.shadowRoot)==null?void 0:o.querySelector("partial-panel-resolver"))||y,v=((c=m==null?void 0:m.shadowRoot)==null?void 0:c.querySelector("ha-panel-lovelace"))||((s=y==null?void 0:y.shadowRoot)==null?void 0:s.querySelector("ha-panel-lovelace"));return((l=v==null?void 0:v.shadowRoot)==null?void 0:l.querySelector("hui-root"))||null}catch{return null}}getCardSize(){return 3}};if(!customElements.get("drag-and-drop-card")){if(Object.assign(ti.prototype,{_updateGridButtonsVisibility(){var o,c,s,l;let e=!!this.editMode,t=Number((l=(s=(o=this._config)==null?void 0:o.grid)!=null?s:(c=this._options)==null?void 0:c.grid)!=null?l:10)>=10,n=this.cardContainer;if(!e||!t){this._destroyGridCanvas(),n&&n.classList.toggle("grid-on",e);return}this._buildOrUpdateGridCanvas(),n&&n.classList.remove("grid-on")},_requestGridButtonsUpdateSoon(){clearTimeout(this._gridLayoutT),this._gridLayoutT=setTimeout(()=>this._updateGridButtonsVisibility(),50)},_buildOrUpdateGridCanvas(){var y,m,v,w;let e=this.cardContainer;if(!e||!e.isConnected)return;let p=Number((w=(v=(y=this._config)==null?void 0:y.grid)!=null?v:(m=this._options)==null?void 0:m.grid)!=null?w:10);if(this._gridCellSize=p,!this._gridCanvas){let S=document.createElement("canvas");S.className="ddc-grid-canvas",e.insertBefore(S,e.firstChild||null),this._gridCanvas=S,this._gridCtx=S.getContext("2d"),S.addEventListener("pointerdown",_=>this._onGridPointerDown(_),{passive:!0}),S.addEventListener("pointermove",_=>this._onGridPointerMove(_),{passive:!0}),S.addEventListener("pointerup",_=>this._onGridPointerUp(_),{passive:!0}),S.addEventListener("pointercancel",_=>this._onGridPointerCancel(_),{passive:!0}),S.addEventListener("lostpointercapture",_=>this._onGridPointerCancel(_),{passive:!0})}let t=e.getBoundingClientRect(),{sx:n,sy:o}=this._getContainerScale_(),c=n&&isFinite(n)?1/n:1,s=o&&isFinite(o)?1/o:1,l=t.width*c,u=t.height*s,f=Math.max(1,window.devicePixelRatio||1);this._gridCanvas.width=Math.max(1,Math.round(l*f)),this._gridCanvas.height=Math.max(1,Math.round(u*f)),this._gridCanvas.style.width=l+"px",this._gridCanvas.style.height=u+"px",this._gridCols=Math.max(1,Math.ceil(l/p)),this._gridRows=Math.max(1,Math.ceil(u/p)),this._buildGridTile_(p,f),this._markGridDirty()},_destroyGridCanvas(){var e;cancelAnimationFrame(this._gridRAF),this._gridRAF=0,(e=this._gridCanvas)!=null&&e.parentElement&&this._gridCanvas.parentElement.removeChild(this._gridCanvas),this._gridCanvas=null,this._gridCtx=null,this._gridTile=null,this._gridDown=!1,this._gridHoverCol=this._gridHoverRow=-1},_buildGridTile_(e,p){e=e/2;let t=Math.min(10,e*.25),n=Math.max(1,Math.round(e*p)),o=n,c=document.createElement("canvas");c.width=n,c.height=o;let s=c.getContext("2d");s.scale(p,p);let l=0,u=0,f=e,y=e;s.clearRect(0,0,n,o),s.beginPath();let m=Math.min(t,f/2,y/2);s.moveTo(l+m,u),s.arcTo(l+f,u,l+f,u+y,m),s.arcTo(l+f,u+y,l,u+y,m),s.arcTo(l,u+y,l,u,m),s.arcTo(l,u,l+f,u,m),s.closePath(),s.fillStyle="rgba(255,255,255,0.08)",s.fill(),s.strokeStyle="rgba(255,255,255,0.12)",s.lineWidth=1,s.stroke(),this._gridTile=c},_markGridDirty(){this._gridDirty||(this._gridDirty=!0,this._gridRAF=requestAnimationFrame(()=>{this._gridDirty=!1,this._renderGridCanvas_()}))},_renderGridCanvas_(){let e=this._gridCanvas;if(!e)return;let p=this._gridCtx,t=Math.max(1,window.devicePixelRatio||1),n=this._gridCellSize||10,o=this._canvasScale||1;if(p.clearRect(0,0,e.width,e.height),this._gridTile){let c=p.createPattern(this._gridTile,"repeat");p.save(),p.scale(t,t),p.fillStyle=c,p.fillRect(0,0,e.width/t,e.height/t),p.restore()}if(this._gridHoverCol>=0&&this._gridHoverRow>=0){p.save(),p.scale(t,t),p.fillStyle="rgba(0, 160, 255, 0.30)",p.strokeStyle="rgba(0, 160, 255, 0.60)",p.lineWidth=1;let c=this._gridHoverCol*n,s=this._gridHoverRow*n,l=n,u=n;this._roundRect_(p,c,s,l,u,Math.min(10,n*.25)),p.fill(),p.stroke(),p.restore()}if(this._gridDown&&this._gridStartCol>=0&&this._gridStartRow>=0&&this._gridCurrCol>=0&&this._gridCurrRow>=0){let c=Math.min(this._gridStartCol,this._gridCurrCol),s=Math.max(this._gridStartCol,this._gridCurrCol),l=Math.min(this._gridStartRow,this._gridCurrRow),u=Math.max(this._gridStartRow,this._gridCurrRow),f=c*n*o,y=l*n*o,m=(s-c+1)*n*o,v=(u-l+1)*n*o;p.save(),p.scale(t,t),p.fillStyle="rgba(0, 160, 255, 0.22)",p.strokeStyle="rgba(0, 160, 255, 0.45)",p.lineWidth=2,this._roundRect_(p,f,y,m,v,Math.min(12,n*.3)),p.fill(),p.stroke(),p.restore()}},_roundRect_(e,p,t,n,o,c){let s=Math.min(c,n/2,o/2);e.beginPath(),e.moveTo(p+s,t),e.arcTo(p+n,t,p+n,t+o,s),e.arcTo(p+n,t+o,p,t+o,s),e.arcTo(p,t+o,p,t,s),e.arcTo(p,t,p+n,t,s),e.closePath()},_emptySpaceAt_(e,p){let t=document.elementFromPoint(e,p);return!t||!t.closest||!t.closest(".card-wrapper, .resize-handle, .ddc-chip, .shield")},_locToCell_(e,p){let t=this._gridCanvas;if(!t)return{col:-1,row:-1};let n=t.getBoundingClientRect(),{sx:o,sy:c}=this._getContainerScale_(),s=(e-n.left)/(o||1),l=(p-n.top)/(c||1),u=this._gridCellSize||10,f=Math.min(this._gridCols-1,Math.max(0,Math.floor(s/u))),y=Math.min(this._gridRows-1,Math.max(0,Math.floor(l/u)));return{col:f,row:y}},_onGridPointerDown(e){var n,o;if(!this._emptySpaceAt_(e.clientX,e.clientY))return;let{col:p,row:t}=this._locToCell_(e.clientX,e.clientY);this._gridDown=!0,this._gridStartCol=p,this._gridStartRow=t,this._gridCurrCol=p,this._gridCurrRow=t,this._markGridDirty(),(o=(n=e.currentTarget).setPointerCapture)==null||o.call(n,e.pointerId)},_onGridPointerMove(e){let{col:p,row:t}=this._locToCell_(e.clientX,e.clientY);if((p!==this._gridHoverCol||t!==this._gridHoverRow)&&(this._gridHoverCol=p,this._gridHoverRow=t,this._markGridDirty()),!this._gridDown)return;let{col:n,row:o}=this._locToCell_(e.clientX,e.clientY);(n!==this._gridCurrCol||o!==this._gridCurrRow)&&(this._gridCurrCol=n,this._gridCurrRow=o,this._markGridDirty())},async _onGridPointerUp(e){if(!this._gridDown)return;this._gridDown=!1;let p=Math.min(this._gridStartCol,this._gridCurrCol),t=Math.max(this._gridStartCol,this._gridCurrCol),n=Math.min(this._gridStartRow,this._gridCurrRow),o=Math.max(this._gridStartRow,this._gridCurrRow);if((t-p+1)*(o-n+1)<2){this._markGridDirty();return}let s=this._gridCellSize||10,l=p*s,u=n*s,f=(t-p+1)*s,y=(o-n+1)*s;this._markGridDirty(),this._promptNewCardForRect_({x:l,y:u,w:f,h:y})},_onGridPointerCancel(){this._gridDown=!1,this._markGridDirty()},_installGridObservers_(){try{this.__gridRO&&this.__gridRO.disconnect(),this.__gridRO=new ResizeObserver(()=>this._requestGridButtonsUpdateSoon()),this.cardContainer&&this.__gridRO.observe(this.cardContainer)}catch{}clearInterval(this.__gridPollT),this.__gridPrevEditMode=void 0,this.__gridPollT=setInterval(()=>{let e=!!this.editMode;e!==this.__gridPrevEditMode&&(this.__gridPrevEditMode=e,this._updateGridButtonsVisibility())},300)},_uninstallGridObservers_(){var e,p;try{(p=(e=this.__gridRO)==null?void 0:e.disconnect)==null||p.call(e)}catch{}this.__gridRO=null,clearInterval(this.__gridPollT),this.__gridPollT=null},_gridRectToCardRect_({x:e,y:p,w:t,h:n}){let o=this.cardContainer,c=this._gridCanvas;if(!o||!c)return{x:e,y:p,w:t,h:n};let s=getComputedStyle(o),l=parseFloat(s.paddingLeft)||0,u=parseFloat(s.paddingTop)||0,f=parseFloat(s.borderLeftWidth)||0,y=parseFloat(s.borderTopWidth)||0,m=o.scrollLeft||0,v=o.scrollTop||0,w=e+l+f+m,S=p+u+y+v;return{x:w,y:S,w:t,h:n}},_getContainerScale_(){let e=this.cardContainer;if(!e)return{sx:1,sy:1};let p=getComputedStyle(e).transform;if(!p||p==="none")return{sx:1,sy:1};let t=p.match(/matrix\(([^)]+)\)/);if(t){let[o,,,c]=t[1].split(",").map(s=>parseFloat(s.trim()));return{sx:isFinite(o)&&o?o:1,sy:isFinite(c)&&c?c:1}}let n=p.match(/matrix3d\(([^)]+)\)/);if(n){let o=n[1].split(",").map(c=>parseFloat(c.trim()));return{sx:isFinite(o[0])&&o[0]?o[0]:1,sy:isFinite(o[5])&&o[5]?o[5]:1}}return{sx:1,sy:1}},_canvasRectToContainerRect_({x:e,y:p,w:t,h:n}){let o=this.cardContainer,c=this._gridCanvas;if(!o||!c)return{x:e,y:p,w:t,h:n};let s=getComputedStyle(o),l=parseFloat(s.paddingLeft)||0,u=parseFloat(s.paddingTop)||0,f=parseFloat(s.borderLeftWidth)||0,y=parseFloat(s.borderTopWidth)||0,{sx:m,sy:v}=this._getContainerScale_(),w=c.getBoundingClientRect(),S=o.getBoundingClientRect(),_=w.left+e,T=w.top+p,R=_-S.left,C=T-S.top;R-=l+f,C-=u+y;let O=m?1/m:1,z=v?1/v:1,b=R*O,L=C*z,I=t*O,F=n*z;return{x:b,y:L,w:I,h:F}},async _promptNewCardForRect_({x:e,y:p,w:t,h:n}){var o,c,s,l,u;try{let f=this._gridCellSize||Number((l=(s=(o=this._config)==null?void 0:o.grid)!=null?s:(c=this._options)==null?void 0:c.grid)!=null?l:10),y=R=>Math.round(R/f)*f,m=y(e),v=y(p),w=Math.max(f,y(t)),S=Math.max(f,y(n)),_;try{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&typeof this._canvasRectToContainerRect_=="function"?_=this._canvasRectToContainerRect_({x:m,y:v,w,h:S}):typeof this._gridRectToCardRect_=="function"?_=this._gridRectToCardRect_({x:m,y:v,w,h:S}):_={x:m,y:v,w,h:S}}catch{_={x:m,y:v,w,h:S}}let T={x:Math.round(_.x),y:Math.round(_.y),w:Math.round(_.w),h:Math.round(_.h)};try{let R=this.cardContainer;if(R){let C=Array.from(R.querySelectorAll(".card-wrapper:not(.ddc-placeholder)")),O=this._normalizeTabId(this.activeTab||this.defaultTab),z=(L,I)=>!(I.x>=L.x+L.w||I.x+I.w<=L.x||I.y>=L.y+L.h||I.y+I.h<=L.y),b=0;for(let L of C){if((L.dataset.tabId?this._normalizeTabId(L.dataset.tabId):O)!==O)continue;let F=getComputedStyle(L);if(F.display==="none"||F.visibility==="hidden")continue;let N=parseFloat(L.getAttribute("data-x"))||0,H=parseFloat(L.getAttribute("data-y"))||0,Q=parseFloat(L.style.width)||L.getBoundingClientRect().width,B=parseFloat(L.style.height)||L.getBoundingClientRect().height;if(z(T,{x:N,y:H,w:Q,h:B})&&(b++,b>=2))break}if(b>=2){this.__pendingAddRect=null;try{(u=this._toast)==null||u.call(this,"Area already contains multiple cards.")}catch{}return}}}catch(R){console.warn("[ddc] selection-area card count check failed",R)}this.__pendingAddRect=T,await this._openSmartPicker("add",null,null)}catch(f){console.warn("[ddc] _promptNewCardForRect_ failed",f)}}}),!ti.prototype.__addPickedPatched){let e=ti.prototype._addPickedCardToLayout;ti.prototype._addPickedCardToLayout=async function(p){var t,n,o,c,s,l,u,f,y;if(this&&this.__pendingAddRect){let{x:m,y:v,w,h:S}=this.__pendingAddRect;this.__pendingAddRect=null;try{(t=this._hideEmptyPlaceholder)==null||t.call(this)}catch{}let _=await this._createCard(p),T=this._makeWrapper(_),C=String(this.containerSizeMode||this.container_size_mode||((n=this._config)==null?void 0:n.container_size_mode)||"dynamic").toLowerCase()==="auto",O=C?-11:11,z=C?-11:11,b=Math.round(m)-O,L=Math.round(v)-z;this._setCardPosition(T,b,L),T.style.width=`${Math.round(w)}px`,T.style.height=`${Math.round(S)}px`;{let I=this._highestZ()+1;T.style.zIndex=String(Math.max(I,6))}T.dataset.tabId=this._normalizeTabId(this.activeTab||this.defaultTab),this.cardContainer.appendChild(T);try{(o=this._rebuildOnce)==null||o.call(this,T.firstElementChild)}catch{}try{(c=this._initCardInteract)==null||c.call(this,T)}catch{}try{(s=this._resizeContainer)==null||s.call(this)}catch{}try{(l=this._queueSave)==null||l.call(this,"add")}catch{}try{(u=this._toast)==null||u.call(this,"Card added to selection.")}catch{}try{(f=this._syncEmptyStateUI)==null||f.call(this)}catch{}try{(y=this._applyVisibility_)==null||y.call(this)}catch{}requestAnimationFrame(()=>{var I,F,N,H;try{String(this.containerSizeMode||this.container_size_mode||((I=this._config)==null?void 0:I.container_size_mode)||"dynamic").toLowerCase()==="auto"?(F=this._applyAutoFillNoScale)==null||F.call(this):this.autoResizeCards&&((N=this._applyAutoScale)==null||N.call(this)),(H=this._requestGridButtonsUpdateSoon)==null||H.call(this)}catch{}});return}return await e.call(this,p)},ti.prototype.__addPickedPatched=!0}customElements.define("drag-and-drop-card",ti);try{Array.isArray(window.customCards)||(window.customCards=[]),window.customCards.some(p=>p&&typeof p.type=="string"&&p.type.toLowerCase()==="custom:drag-and-drop-card")||window.customCards.push({type:"drag-and-drop-card",name:"Drag & Drop Card",description:"Flexible grid layout card with drag\u2011and\u2011drop editing.",preview:!1,icon:"mdi:cursor-move"})}catch(e){console.warn("[drag-and-drop-card] Failed to register card in customCards",e)}}(()=>{let e=new WeakSet,p=s=>{try{if(!(s instanceof Element))return!1;let l=s.localName||"";return l?!!(l==="ha-card"||l.endsWith("-card")):!1}catch{return!1}},t=s=>{try{if(!s||e.has(s))return;e.add(s),s.dispatchEvent(new Event("ll-rebuild",{bubbles:!0,composed:!0}))}catch{}},n=s=>{var l,u;try{if(!s)return;s instanceof Element&&p(s)&&t(s);let f=(u=(l=(s instanceof ShadowRoot,s)).querySelectorAll)==null?void 0:u.call(l,"*");if(!f)return;for(let y of f){p(y)&&t(y);let m=y.shadowRoot;if(m)try{n(m)}catch{}}}catch{}},o=s=>{try{if(!s||s.__ddcCardModIntegrated)return;s.__ddcCardModIntegrated=!0;let l=s.shadowRoot||s;n(l);let u=new MutationObserver(f=>{for(let y of f)if(!(!y.addedNodes||!y.addedNodes.length))for(let m of y.addedNodes)(m instanceof Element||m instanceof ShadowRoot)&&n(m)});u.observe(l,{childList:!0,subtree:!0}),s.__ddcCardModIntegratedObserver=u,setTimeout(()=>{try{n(l)}catch{}},250),setTimeout(()=>{try{n(l)}catch{}},1e3)}catch{}},c=()=>{try{document.querySelectorAll("drag-and-drop-card").forEach(o)}catch{}};if(window.customElements&&window.customElements.whenDefined)window.customElements.whenDefined("drag-and-drop-card").then(()=>{c();let s=window.customElements.get("drag-and-drop-card");if(s&&s.prototype){let u=s.prototype.connectedCallback;s.prototype.connectedCallback=function(){try{u&&u.call(this)}finally{o(this)}}}new MutationObserver(()=>c()).observe(document.documentElement,{childList:!0,subtree:!0})});else{let s=setInterval(c,1e3);setTimeout(()=>clearInterval(s),1e4)}})();(function(){let e="drag-and-drop-card",p=customElements.get(e);if(!p){console.warn("[ddc:augment] Could not find custom element",e);return}function t(){var _,T;try{let R=0,C=this;for(;C&&R++<20;){let b=(_=C.getRootNode)==null?void 0:_.call(C),L=b==null?void 0:b.host;if((L==null?void 0:L.tagName)==="HUI-ROOT")return L.lovelace;C=L||C.parentElement}let O=new Set,z=[document];for(;z.length;){let b=z.shift();if(!(!b||O.has(b))){if(O.add(b),((T=b.host)==null?void 0:T.tagName)==="HUI-ROOT")return b.host.lovelace;if(b.tagName==="HUI-ROOT")return b.lovelace;if(b.shadowRoot&&z.push(b.shadowRoot),b.children)for(let L of b.children)z.push(L)}}}catch{}}function n(_){let T=[],R=(O,z,b)=>{(b==null?void 0:b.type)==="custom:drag-and-drop-card"&&T.push({view:O,path:[...z],card:b})},C=(O,z,b)=>{if(O){if(Array.isArray(O)){O.forEach((L,I)=>C(L,z,b.concat(I)));return}if(typeof O=="object"){"type"in O&&R(z,b,O);for(let[L,I]of Object.entries(O))L==="views"&&Array.isArray(I)?I.forEach((F,N)=>C(F,N,["views",N])):(Array.isArray(I)||I&&typeof I=="object")&&C(I,z,b.concat(L))}}};return C(_,-1,[]),T}function o(_,T,R){let C=new Date().toISOString().replace(/[:.]/g,"-"),O=T.map(b=>{let L=_;for(let I of b.path)L=L[I];return{view:b.view,path:b.path,storage_key:L&&L.storage_key||null,before:L,patch:R}}),z={kind:"ddc-import-backup",created_at:C,count:O.length,items:O};try{let b=`ddc.backup.${C}`;localStorage.setItem(b,JSON.stringify(z));let L=Object.keys(localStorage).filter(I=>I.startsWith("ddc.backup.")).sort().reverse();for(let I of L.slice(10))localStorage.removeItem(I)}catch{}return{name:`ddc_backup_${C}.json`,data:z}}function c(_,T){try{let R=new Blob([JSON.stringify(T,null,2)],{type:"application/json"}),C=URL.createObjectURL(R),O=document.createElement("a");O.href=C,O.download=_,document.body.appendChild(O),O.click(),O.remove(),setTimeout(()=>URL.revokeObjectURL(C),1500)}catch(R){console.warn("[ddc:backup] download failed",R)}}function s(_){if(_)try{let T="ddc.recent.keys",R=JSON.parse(localStorage.getItem(T)||"[]");R.includes(_)||R.unshift(_),localStorage.setItem(T,JSON.stringify(R.slice(0,20)))}catch{}}function l(){try{return JSON.parse(localStorage.getItem("ddc.recent.keys")||"[]")}catch{return[]}}function u(){var T,R;let _=new Set;try{let C=Object.keys(localStorage).filter(O=>O.startsWith("ddc.backup.")).sort().reverse();for(let O of C)try{let z=JSON.parse(localStorage.getItem(O)||"null");if(z&&z.items)for(let b of z.items){let L=((T=b==null?void 0:b.before)==null?void 0:T.storage_key)||((R=b==null?void 0:b.patch)==null?void 0:R.storage_key);L&&_.add(L)}}catch{}}catch{}return Array.from(_)}async function f(_,{forceTargetKey:T=null,onlyThisCard:R=!1,prevKey:C,noDownload:O}={}){var de,_e,Re,re,ze;let z=((de=this._getLovelace)==null?void 0:de.call(this))||t.call(this);if(!z)return console.debug("[ddc:import] persist: no lovelace root"),!1;if(typeof z.saveConfig!="function")return console.debug("[ddc:import] persist: dashboard not in Storage mode"),!1;let b=pe=>typeof pe=="string"?pe.trim():null,L=b(T)||b((_e=this==null?void 0:this._config)==null?void 0:_e.storage_key)||b(this==null?void 0:this.storageKey)||b(C);if(!L)return console.warn("[ddc:import] persist: missing target storage_key on this card; aborting"),!1;let I=JSON.parse(JSON.stringify(z.config)),F=(this._scanDdcCards||n)(I);console.debug("[ddc:import] persist: found DDC cards",F.map(pe=>({view:pe.view,path:pe.path.join("."),storage_key:pe.card&&(pe.card.storage_key||pe.card.storageKey)||null})));let N=F.filter(pe=>{var Ye,De,Ue,ot,st,ae,ut,ct,Pe;return((Pe=(ae=(Ue=b((Ye=pe.card)==null?void 0:Ye.storage_key))!=null?Ue:b((De=pe.card)==null?void 0:De.storageKey))!=null?ae:b((st=(ot=pe.card)==null?void 0:ot.options)==null?void 0:st.storage_key))!=null?Pe:b((ct=(ut=pe.card)==null?void 0:ut.options)==null?void 0:ct.storageKey))===L});if(N.length!==1)return console.warn("[ddc:import] persist: expected exactly one target with key, got",N.length,{myKey:L}),!1;let H={type:"custom:drag-and-drop-card",..._||{}};"storage_key"in H&&delete H.storage_key,"storageKey"in H&&delete H.storageKey,H!=null&&H.options&&("storage_key"in H.options&&delete H.options.storage_key,"storageKey"in H.options&&delete H.options.storageKey);let Q=Array.isArray(H.cards)?H.cards:null;delete H.cards;try{let pe=o==null?void 0:o(z.config,N,H);pe&&(console.debug("[ddc:import] backup created",{file:pe.name,items:(Re=pe.data)==null?void 0:Re.count}),!O&&typeof c=="function"&&c(pe.name,pe.data))}catch(pe){console.debug("[ddc:import] backup skipped/error:",(pe==null?void 0:pe.message)||pe)}let B=N[0],V=I;for(let pe of B.path)V=V[pe];let U=(ze=(re=b(V==null?void 0:V.storage_key))!=null?re:b(V==null?void 0:V.storageKey))!=null?ze:null;return Object.assign(V,H),U?V.storage_key=U:V.storage_key=L,"storageKey"in V&&delete V.storageKey,console.debug("[ddc:import] persist \u2192 saving",{patched:1,into_key:V.storage_key,ignored_file_key:b(_==null?void 0:_.storage_key)||b(_==null?void 0:_.storageKey)||null}),await z.saveConfig(I),{yamlSaved:!0,cardsForStorage:Q}}async function y(){var R;let _=C=>{if(!C)return[];if(Array.isArray(C))return C;if(Array.isArray(C==null?void 0:C.keys))return C.keys;if(Array.isArray(C==null?void 0:C.dashboards))return C.dashboards;if(Array.isArray(C==null?void 0:C.entries))return C.entries.map(O=>O.key||O.id||O.name).filter(Boolean);if(Array.isArray(C==null?void 0:C.items))return C.items.map(O=>O.key||O.id||O.name).filter(Boolean);if(typeof C=="object"){for(let O of Object.values(C))if(Array.isArray(O)&&O.every(z=>typeof z=="string"))return O}return[]};try{if((R=this==null?void 0:this.hass)!=null&&R.callApi){let C=await this.hass.callApi("get","dragdrop_storage"),O=_(C);if(O.length)return O}}catch(C){console.debug("[ddc:switcher] hass.callApi dragdrop_storage failed",C)}let T=["/api/dragdrop_storage","/api/dragdrop_storage/keys","/api/dragdrop_storage/list","/api/dragdrop_storage?all=1"];for(let C of T)try{let z=await(await fetch(C,{cache:"no-store"})).json(),b=_(z);if(b.length)return b}catch{}return[]}async function m(_){let T=z=>{if(!z)return null;if(z.options||z.cards)return z;if(typeof z.design=="object")return z.design;if(typeof z.payload=="object")return z.payload;try{if(typeof z=="string")return JSON.parse(z)}catch{}return null},R=async(z,b,L)=>{var I;try{if((I=this==null?void 0:this.hass)!=null&&I.callApi){let F=await this.hass.callApi(z,b,L),N=T(F);if(N)return N}}catch{}return null},C=async z=>{try{let b=await fetch(z,{cache:"no-store"}),L=b.headers.get("content-type")||"";if(L.includes("application/json")||L.includes("text/plain")){let I=await b.json().catch(()=>null)||await b.text().catch(()=>null),F=T(I);if(F)return F}}catch{}return null},O=encodeURIComponent(_);return await(R("get",`dragdrop_storage/${O}`)||C(`/api/dragdrop_storage/${O}`)||C(`/api/dragdrop_storage?key=${O}`)||R("post","dragdrop_storage/get",{key:_})||null)}async function v(_,{source:T="switcher",newKey:R=null}={}){var z,b,L,I,F,N,H,Q,B,V,U,de,_e,Re,re,ze,pe,He,Ye,De,Ue,ot,st,ae,ut,ct;if(!_||typeof _!="object")throw new Error("Invalid design payload");let C=this.storageKey||((z=this._config)==null?void 0:z.storage_key)||null;try{(b=this._dbgInit)==null||b.call(this),(L=this._dbgPush)==null||L.call(this,"import","Begin import (programmatic)",{source:T,newKey:R})}catch{}if(_.options){let{storage_key:Pe,...oe}=_.options;(I=this._applyImportedOptions)==null||I.call(this,oe,!0)}else typeof _.grid=="number"&&((F=this._applyImportedOptions)==null||F.call(this,{grid:_.grid},!0));let O=R||((N=_==null?void 0:_.options)==null?void 0:N.storage_key)||C;if(O){this.storageKey=O,this._config={...this._config||{},storage_key:O};try{(H=this._syncEditorsStorageKey)==null||H.call(this)}catch{}}try{let Pe=(Q=_.options)!=null?Q:typeof _.grid=="number"?{grid:_.grid}:{};await((B=this._persistOptionsToYaml)==null?void 0:B.call(this,{...Pe,storage_key:O},{prevKey:C,noDownload:T==="switcher"}))}catch(Pe){console.warn("[ddc:apply] persist failed",Pe)}try{if(this.cardContainer.innerHTML="",Array.isArray(_.cards)&&_.cards.length)for(let Pe of _.cards)if(!(Pe!=null&&Pe.card)||typeof Pe.card=="object"&&Object.keys(Pe.card).length===0){let oe=(Re=this._makePlaceholderAt)==null?void 0:Re.call(this,((V=Pe.position)==null?void 0:V.x)||0,((U=Pe.position)==null?void 0:U.y)||0,((de=Pe.size)==null?void 0:de.width)||200,((_e=Pe.size)==null?void 0:_e.height)||200);oe&&this.cardContainer.appendChild(oe)}else{let oe=await this._createCard(Pe.card),$e=this._makeWrapper(oe);(pe=this._setCardPosition)==null||pe.call(this,$e,((re=Pe.position)==null?void 0:re.x)||0,((ze=Pe.position)==null?void 0:ze.y)||0),$e.style.width=`${((He=Pe.size)==null?void 0:He.width)||140}px`,$e.style.height=`${((Ye=Pe.size)==null?void 0:Ye.height)||100}px`,Pe.z!=null&&($e.style.zIndex=String(Pe.z)),this.cardContainer.appendChild($e);try{(De=this._rebuildOnce)==null||De.call(this,$e.firstElementChild)}catch{}(Ue=this._initCardInteract)==null||Ue.call(this,$e)}else(ot=this._showEmptyPlaceholder)==null||ot.call(this);(st=this._resizeContainer)==null||st.call(this),(ae=this._markDirty)==null||ae.call(this,"import"),(ut=this._toast)==null||ut.call(this,T==="switcher"?`Loaded layout "${O}"`:"Design imported")}catch(Pe){console.error("[ddc:apply] rebuild failed",Pe),(ct=this._toast)==null||ct.call(this,"Import failed during rebuild.")}}function w(){var _,T;try{let R=this.shadowRoot||this.renderRoot||this,C=R.querySelector(".ddc-switcher-inline");if(!C)return;let O=((_=this._getLovelace)==null?void 0:_.call(this))||t.call(this),z=!1;try{let b=(T=R.getRootNode&&R.getRootNode())==null?void 0:T.host;z=!!(O&&(O.editMode===!0||b&&b.editMode===!0))}catch{}C.style.display=z?"inline-flex":"none"}catch{}}function S(){try{if(this._ddcSwitcherInstalled)return;let T=(this.shadowRoot||this.renderRoot||this).querySelector(".toolbar");if(!T)return;let R=document.createElement("div");R.className="ddc-switcher-inline",Object.assign(R.style,{display:"inline-flex",gap:"6px",alignItems:"center",marginLeft:"auto"});let C=document.createElement("span");C.textContent="Layout:",C.style.fontSize="12px",C.style.opacity="0.8";let O=document.createElement("select");Object.assign(O.style,{fontSize:"12px",padding:"4px 6px",borderRadius:"8px",border:"1px solid var(--divider-color, #999)",background:"var(--card-background-color, #fff)"}),O.title="Select stored layout (storage_key)",O.id="ddcKeySelect";let z=document.createElement("button");z.className="btn secondary",z.type="button",z.style.padding="6px 10px",z.innerHTML='<ha-icon icon="mdi:refresh"></ha-icon><span style="margin-left:6px">Refresh</span>';let b=document.createElement("button");b.className="btn secondary",b.type="button",b.style.padding="6px 10px",b.innerHTML='<ha-icon icon="mdi:trash-can-outline"></ha-icon>',b.title="Delete selected layout";let L=document.createElement("button");L.className="btn secondary",L.type="button",L.style.padding="6px 10px",L.innerHTML='<ha-icon icon="mdi:undo"></ha-icon>',L.title="Undo last delete",R.appendChild(C),R.appendChild(O),R.appendChild(z),R.appendChild(b),R.appendChild(L),T.appendChild(R),this._ddcSwitcherInstalled=!0;let I=async()=>{let F=this.storageKey||this._config&&this._config.storage_key||"",N=await y.call(this),H=u(),Q=l(),B=re=>Array.from(new Set(re.filter(Boolean))),V=this._ddcDeletedKeys||[],U=B(N).filter(re=>!V.includes(re)),de=B(H).filter(re=>!V.includes(re)),_e=B(Q).filter(re=>!V.includes(re));if(O.innerHTML="",F&&!V.includes(F)&&!U.includes(F)&&!de.includes(F)&&!_e.includes(F)){let re=document.createElement("option");re.value=F,re.textContent=`${F} (current)`,re.selected=!0,O.appendChild(re)}let Re=(re,ze)=>{if(!ze.length)return;let pe=document.createElement("optgroup");pe.label=re,ze.forEach(He=>{let Ye=document.createElement("option");Ye.value=He,Ye.textContent=`${He} \u{1F5D1}`,He===F&&(Ye.selected=!0),pe.appendChild(Ye)}),O.appendChild(pe)};if(Re("Server",U),Re("Backups",de),Re("Recent",_e),!O.children.length){let re=document.createElement("option");re.value="",re.textContent="\u2014 none \u2014",re.selected=!0,O.appendChild(re)}w.call(this);try{let re=O.value||"";b.disabled=!re,L.disabled=!(this._ddcDeletedLayouts&&this._ddcDeletedLayouts.length)}catch{}};I(),z.addEventListener("click",I),b.addEventListener("click",async()=>{var Q,B,V,U,de;let F=O.value||"";if(!F){(Q=this._toast)==null||Q.call(this,"No layout selected.");return}try{if(typeof window!="undefined"&&window.confirm&&!window.confirm(`Delete layout "${F}"?`))return}catch{}let N=null;try{N=await m.call(this,F)}catch{}N&&(this._ddcDeletedLayouts||(this._ddcDeletedLayouts=[]),this._ddcDeletedLayouts.unshift({key:F,design:N}),this._ddcDeletedLayouts=this._ddcDeletedLayouts.slice(0,5));try{this._ddcDeletedKeys||(this._ddcDeletedKeys=[]),this._ddcDeletedKeys.includes(F)||this._ddcDeletedKeys.push(F)}catch{}let H=!1;try{(B=this==null?void 0:this.hass)!=null&&B.callApi&&(await this.hass.callApi("delete",`dragdrop_storage/${encodeURIComponent(F)}`),H=!0)}catch{}if(!H)try{let _e=await fetch(`/api/dragdrop_storage/${encodeURIComponent(F)}`,{method:"DELETE"});_e&&_e.ok&&(H=!0)}catch{}if(!H)try{(V=this==null?void 0:this.hass)!=null&&V.callApi&&(await this.hass.callApi("post","dragdrop_storage/delete",{key:F}),H=!0)}catch{}if(!H)try{let _e=await fetch("/api/dragdrop_storage/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:F})});_e&&_e.ok&&(H=!0)}catch{}try{localStorage.removeItem(`ddc_local_${F}`)}catch{}H?(U=this._toast)==null||U.call(this,`Deleted layout "${F}"`):(de=this._toast)==null||de.call(this,`Failed to delete layout "${F}"`),await I()}),L.addEventListener("click",async()=>{var B,V,U,de;if(!this._ddcDeletedLayouts||this._ddcDeletedLayouts.length===0){(B=this._toast)==null||B.call(this,"Nothing to restore.");return}let F=this._ddcDeletedLayouts.shift(),N=F.key,H=F.design,Q=!1;try{(V=this==null?void 0:this.hass)!=null&&V.callApi&&(await this.hass.callApi("post",`dragdrop_storage/${encodeURIComponent(N)}`,H),Q=!0)}catch{}if(!Q)try{let _e=await fetch(`/api/dragdrop_storage/${encodeURIComponent(N)}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(H)});_e&&_e.ok&&(Q=!0)}catch{}try{localStorage.setItem(`ddc_local_${N}`,JSON.stringify(H))}catch{}Q?(U=this._toast)==null||U.call(this,`Restored layout "${N}"`):(de=this._toast)==null||de.call(this,`Failed to restore layout "${N}"`);try{this._ddcDeletedKeys&&(this._ddcDeletedKeys=this._ddcDeletedKeys.filter(_e=>_e!==N))}catch{}await I()}),O.addEventListener("change",async F=>{var H,Q,B,V,U,de,_e,Re;let N=String(F.target.value||"");if(N&&!this._ddcLoadingFromKey){this._ddcLoadingFromKey=!0;try{let re=await m.call(this,N);if(!re){(H=this._toast)==null||H.call(this,`No layout found for "${N}"`);return}await v.call(this,re,{source:"switcher",newKey:N}),(Q=this._resizeContainer)==null||Q.call(this),(B=this._toast)==null||B.call(this,`Loaded layout "${N}"`);let ze=String(((V=this._config)==null?void 0:V.storage_key)||this.storageKey||""),pe=!1;try{let He=ze?{forceTargetKey:ze,noDownload:!0}:{noDownload:!0};pe=await this._persistOptionsToYaml({storage_key:N},He)}catch(He){console.warn("[ddc:switcher] failed to persist storage_key to YAML",He),(U=this._toast)==null||U.call(this,"Failed to persist selected layout. Keeping current.");return}if(this.storageKey=N,this._config&&(this._config.storage_key=N),!pe){console.warn("[ddc:switcher] persist returned false (likely YAML mode). Skipping reload.");return}try{this._saveTimer&&clearTimeout(this._saveTimer),await this._saveLayout(!0)}catch(He){console.warn("[ddc:switcher] saveLayout failed",He),(de=this._markDirty)==null||de.call(this,"switcher"),(_e=this._toast)==null||_e.call(this,"Layout loaded \u2014 click Apply to save.");return}window.location.reload(),window.location.reload()}catch(re){console.warn("[ddc:switcher] load/apply failed",re),(Re=this._toast)==null||Re.call(this,"Failed to load layout.")}finally{this._ddcLoadingFromKey=!1}}}),this._ddcVisTimer&&clearInterval(this._ddcVisTimer),this._ddcVisTimer=setInterval(()=>w.call(this),800),w.call(this)}catch(_){console.warn("[ddc:switcher] inline install failed",_)}}p.prototype._getLovelace||(p.prototype._getLovelace=t),p.prototype._scanDdcCards||(p.prototype._scanDdcCards=n),p.prototype._persistOptionsToYaml=f,p.prototype._applyDesignObject||(p.prototype._applyDesignObject=v);try{let _=Object.getOwnPropertyDescriptor(p.prototype,"hass");if(_&&(_.set||_.get)){let T=_.set;Object.defineProperty(p.prototype,"hass",{configurable:!0,enumerable:!0,set(R){T&&T.call(this,R);try{S.call(this)}catch{}},get:_.get||function(){return this._hass}})}else if(typeof p.prototype.setHass=="function"){let T=p.prototype.setHass;p.prototype.setHass=function(R){T&&T.call(this,R);try{S.call(this)}catch{}}}else{let T=p.prototype.updated||p.prototype.firstUpdated;p.prototype.updated=function(...R){T&&T.apply(this,R);try{S.call(this)}catch{}}}}catch(_){console.warn("[ddc:switcher] wrap hass setter failed",_)}})();
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
