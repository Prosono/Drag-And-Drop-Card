var Ma=Object.create;var gr=Object.defineProperty;var Pa=Object.getOwnPropertyDescriptor;var La=Object.getOwnPropertyNames;var Ra=Object.getPrototypeOf,Ia=Object.prototype.hasOwnProperty;var Da=(t,p,e)=>p in t?gr(t,p,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[p]=e;var Fa=(t,p)=>()=>(p||t((p={exports:{}}).exports,p),p.exports);var Ba=(t,p,e,n)=>{if(p&&typeof p=="object"||typeof p=="function")for(let o of La(p))!Ia.call(t,o)&&o!==e&&gr(t,o,{get:()=>p[o],enumerable:!(n=Pa(p,o))||n.enumerable});return t};var qa=(t,p,e)=>(e=t!=null?Ma(Ra(t)):{},Ba(p||!t||!t.__esModule?gr(e,"default",{value:t,enumerable:!0}):e,t));var ht=(t,p,e)=>Da(t,typeof p!="symbol"?p+"":p,e);var Wr=Fa((mr,ni)=>{(function(t,p){typeof mr=="object"&&typeof ni!="undefined"?ni.exports=p():typeof define=="function"&&define.amd?define(p):(t=typeof globalThis!="undefined"?globalThis:t||self).interact=p()})(mr,(function(){"use strict";function t(r,i){var a=Object.keys(r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(r);i&&(l=l.filter((function(h){return Object.getOwnPropertyDescriptor(r,h).enumerable}))),a.push.apply(a,l)}return a}function p(r){for(var i=1;i<arguments.length;i++){var a=arguments[i]!=null?arguments[i]:{};i%2?t(Object(a),!0).forEach((function(l){s(r,l,a[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(l){Object.defineProperty(r,l,Object.getOwnPropertyDescriptor(a,l))}))}return r}function e(r){return e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},e(r)}function n(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")}function o(r,i){for(var a=0;a<i.length;a++){var l=i[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(r,x(l.key),l)}}function c(r,i,a){return i&&o(r.prototype,i),a&&o(r,a),Object.defineProperty(r,"prototype",{writable:!1}),r}function s(r,i,a){return(i=x(i))in r?Object.defineProperty(r,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[i]=a,r}function d(r,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(i&&i.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),i&&f(r,i)}function u(r){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},u(r)}function f(r,i){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,l){return a.__proto__=l,a},f(r,i)}function v(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function y(r){var i=(function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch{return!1}})();return function(){var a,l=u(r);if(i){var h=u(this).constructor;a=Reflect.construct(l,arguments,h)}else a=l.apply(this,arguments);return(function(m,b){if(b&&(typeof b=="object"||typeof b=="function"))return b;if(b!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return v(m)})(this,a)}}function g(){return g=typeof Reflect!="undefined"&&Reflect.get?Reflect.get.bind():function(r,i,a){var l=(function(m,b){for(;!Object.prototype.hasOwnProperty.call(m,b)&&(m=u(m))!==null;);return m})(r,i);if(l){var h=Object.getOwnPropertyDescriptor(l,i);return h.get?h.get.call(arguments.length<3?r:a):h.value}},g.apply(this,arguments)}function x(r){var i=(function(a,l){if(typeof a!="object"||a===null)return a;var h=a[Symbol.toPrimitive];if(h!==void 0){var m=h.call(a,l||"default");if(typeof m!="object")return m;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(a)})(r,"string");return typeof i=="symbol"?i:i+""}var A=function(r){return!(!r||!r.Window)&&r instanceof r.Window},S=void 0,T=void 0;function L(r){S=r;var i=r.document.createTextNode("");i.ownerDocument!==r.document&&typeof r.wrap=="function"&&r.wrap(i)===i&&(r=r.wrap(r)),T=r}function k(r){return A(r)?r:(r.ownerDocument||r).defaultView||T.window}typeof window!="undefined"&&window&&L(window);var O=function(r){return!!r&&e(r)==="object"},M=function(r){return typeof r=="function"},_={window:function(r){return r===T||A(r)},docFrag:function(r){return O(r)&&r.nodeType===11},object:O,func:M,number:function(r){return typeof r=="number"},bool:function(r){return typeof r=="boolean"},string:function(r){return typeof r=="string"},element:function(r){if(!r||e(r)!=="object")return!1;var i=k(r)||T;return/object|function/.test(typeof Element=="undefined"?"undefined":e(Element))?r instanceof Element||r instanceof i.Element:r.nodeType===1&&typeof r.nodeName=="string"},plainObject:function(r){return O(r)&&!!r.constructor&&/function Object\b/.test(r.constructor.toString())},array:function(r){return O(r)&&r.length!==void 0&&M(r.splice)}};function P(r){var i=r.interaction;if(i.prepared.name==="drag"){var a=i.prepared.axis;a==="x"?(i.coords.cur.page.y=i.coords.start.page.y,i.coords.cur.client.y=i.coords.start.client.y,i.coords.velocity.client.y=0,i.coords.velocity.page.y=0):a==="y"&&(i.coords.cur.page.x=i.coords.start.page.x,i.coords.cur.client.x=i.coords.start.client.x,i.coords.velocity.client.x=0,i.coords.velocity.page.x=0)}}function R(r){var i=r.iEvent,a=r.interaction;if(a.prepared.name==="drag"){var l=a.prepared.axis;if(l==="x"||l==="y"){var h=l==="x"?"y":"x";i.page[h]=a.coords.start.page[h],i.client[h]=a.coords.start.client[h],i.delta[h]=0}}}var H={id:"actions/drag",install:function(r){var i=r.actions,a=r.Interactable,l=r.defaults;a.prototype.draggable=H.draggable,i.map.drag=H,i.methodDict.drag="draggable",l.actions.drag=H.defaults},listeners:{"interactions:before-action-move":P,"interactions:action-resume":P,"interactions:action-move":R,"auto-start:check":function(r){var i=r.interaction,a=r.interactable,l=r.buttons,h=a.options.drag;if(h&&h.enabled&&(!i.pointerIsDown||!/mouse|pointer/.test(i.pointerType)||(l&a.options.drag.mouseButtons)!=0))return r.action={name:"drag",axis:h.lockAxis==="start"?h.startAxis:h.lockAxis},!1}},draggable:function(r){return _.object(r)?(this.options.drag.enabled=r.enabled!==!1,this.setPerAction("drag",r),this.setOnEvents("drag",r),/^(xy|x|y|start)$/.test(r.lockAxis)&&(this.options.drag.lockAxis=r.lockAxis),/^(xy|x|y)$/.test(r.startAxis)&&(this.options.drag.startAxis=r.startAxis),this):_.bool(r)?(this.options.drag.enabled=r,this):this.options.drag},beforeMove:P,move:R,defaults:{startAxis:"xy",lockAxis:"xy"},getCursor:function(){return"move"},filterEventType:function(r){return r.search("drag")===0}},U=H,$={init:function(r){var i=r;$.document=i.document,$.DocumentFragment=i.DocumentFragment||re,$.SVGElement=i.SVGElement||re,$.SVGSVGElement=i.SVGSVGElement||re,$.SVGElementInstance=i.SVGElementInstance||re,$.Element=i.Element||re,$.HTMLElement=i.HTMLElement||$.Element,$.Event=i.Event,$.Touch=i.Touch||re,$.PointerEvent=i.PointerEvent||i.MSPointerEvent},document:null,DocumentFragment:null,SVGElement:null,SVGSVGElement:null,SVGElementInstance:null,Element:null,HTMLElement:null,Event:null,Touch:null,PointerEvent:null};function re(){}var F=$,V={init:function(r){var i=F.Element,a=r.navigator||{};V.supportsTouch="ontouchstart"in r||_.func(r.DocumentTouch)&&F.document instanceof r.DocumentTouch,V.supportsPointerEvent=a.pointerEnabled!==!1&&!!F.PointerEvent,V.isIOS=/iP(hone|od|ad)/.test(a.platform),V.isIOS7=/iP(hone|od|ad)/.test(a.platform)&&/OS 7[^\d]/.test(a.appVersion),V.isIe9=/MSIE 9/.test(a.userAgent),V.isOperaMobile=a.appName==="Opera"&&V.supportsTouch&&/Presto/.test(a.userAgent),V.prefixedMatchesSelector="matches"in i.prototype?"matches":"webkitMatchesSelector"in i.prototype?"webkitMatchesSelector":"mozMatchesSelector"in i.prototype?"mozMatchesSelector":"oMatchesSelector"in i.prototype?"oMatchesSelector":"msMatchesSelector",V.pEventTypes=V.supportsPointerEvent?F.PointerEvent===r.MSPointerEvent?{up:"MSPointerUp",down:"MSPointerDown",over:"mouseover",out:"mouseout",move:"MSPointerMove",cancel:"MSPointerCancel"}:{up:"pointerup",down:"pointerdown",over:"pointerover",out:"pointerout",move:"pointermove",cancel:"pointercancel"}:null,V.wheelEvent=F.document&&"onmousewheel"in F.document?"mousewheel":"wheel"},supportsTouch:null,supportsPointerEvent:null,isIOS7:null,isIOS:null,isIe9:null,isOperaMobile:null,prefixedMatchesSelector:null,pEventTypes:null,wheelEvent:null},K=V;function le(r,i){if(r.contains)return r.contains(i);for(;i;){if(i===r)return!0;i=i.parentNode}return!1}function Ke(r,i){for(;_.element(r);){if(ze(r,i))return r;r=pe(r)}return null}function pe(r){var i=r.parentNode;if(_.docFrag(i)){for(;(i=i.host)&&_.docFrag(i););return i}return i}function ze(r,i){return T!==S&&(i=i.replace(/\/deep\//g," ")),r[K.prefixedMatchesSelector](i)}var Ce=function(r){return r.parentNode||r.host};function ke(r,i){for(var a,l=[],h=r;(a=Ce(h))&&h!==i&&a!==h.ownerDocument;)l.unshift(h),h=a;return l}function je(r,i,a){for(;_.element(r);){if(ze(r,i))return!0;if((r=pe(r))===a)return ze(r,i)}return!1}function qe(r){return r.correspondingUseElement||r}function Qe(r){var i=r instanceof F.SVGElement?r.getBoundingClientRect():r.getClientRects()[0];return i&&{left:i.left,right:i.right,top:i.top,bottom:i.bottom,width:i.width||i.right-i.left,height:i.height||i.bottom-i.top}}function ct(r){var i,a=Qe(r);if(!K.isIOS7&&a){var l={x:(i=(i=k(r))||T).scrollX||i.document.documentElement.scrollLeft,y:i.scrollY||i.document.documentElement.scrollTop};a.left+=l.x,a.right+=l.x,a.top+=l.y,a.bottom+=l.y}return a}function dt(r){for(var i=[];r;)i.push(r),r=pe(r);return i}function ot(r){return!!_.string(r)&&(F.document.querySelector(r),!0)}function ae(r,i){for(var a in i)r[a]=i[a];return r}function ut(r,i,a){return r==="parent"?pe(a):r==="self"?i.getRect(a):Ke(a,r)}function st(r,i,a,l){var h=r;return _.string(h)?h=ut(h,i,a):_.func(h)&&(h=h.apply(void 0,l)),_.element(h)&&(h=ct(h)),h}function Le(r){return r&&{x:"x"in r?r.x:r.left,y:"y"in r?r.y:r.top}}function oe(r){return!r||"x"in r&&"y"in r||((r=ae({},r)).x=r.left||0,r.y=r.top||0,r.width=r.width||(r.right||0)-r.x,r.height=r.height||(r.bottom||0)-r.y),r}function Ye(r,i,a){r.left&&(i.left+=a.x),r.right&&(i.right+=a.x),r.top&&(i.top+=a.y),r.bottom&&(i.bottom+=a.y),i.width=i.right-i.left,i.height=i.bottom-i.top}function Se(r,i,a){var l=a&&r.options[a];return Le(st(l&&l.origin||r.options.origin,r,i,[r&&i]))||{x:0,y:0}}function Me(r,i){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(C){return!0},l=arguments.length>3?arguments[3]:void 0;if(l=l||{},_.string(r)&&r.search(" ")!==-1&&(r=gt(r)),_.array(r))return r.forEach((function(C){return Me(C,i,a,l)})),l;if(_.object(r)&&(i=r,r=""),_.func(i)&&a(r))l[r]=l[r]||[],l[r].push(i);else if(_.array(i))for(var h=0,m=i;h<m.length;h++){var b=m[h];Me(r,b,a,l)}else if(_.object(i))for(var w in i)Me(gt(w).map((function(C){return"".concat(r).concat(C)})),i[w],a,l);return l}function gt(r){return r.trim().split(/ +/)}var mt=function(r,i){return Math.sqrt(r*r+i*i)},Bt=["webkit","moz"];function lt(r,i){r.__set||(r.__set={});var a=function(h){if(Bt.some((function(m){return h.indexOf(m)===0})))return 1;typeof r[h]!="function"&&h!=="__set"&&Object.defineProperty(r,h,{get:function(){return h in r.__set?r.__set[h]:r.__set[h]=i[h]},set:function(m){r.__set[h]=m},configurable:!0})};for(var l in i)a(l);return r}function Tt(r,i){r.page=r.page||{},r.page.x=i.page.x,r.page.y=i.page.y,r.client=r.client||{},r.client.x=i.client.x,r.client.y=i.client.y,r.timeStamp=i.timeStamp}function wt(r){r.page.x=0,r.page.y=0,r.client.x=0,r.client.y=0}function Kt(r){return r instanceof F.Event||r instanceof F.Touch}function De(r,i,a){return r=r||"page",(a=a||{}).x=i[r+"X"],a.y=i[r+"Y"],a}function yt(r,i){return i=i||{x:0,y:0},K.isOperaMobile&&Kt(r)?(De("screen",r,i),i.x+=window.scrollX,i.y+=window.scrollY):De("page",r,i),i}function Ot(r){return _.number(r.pointerId)?r.pointerId:r.identifier}function ti(r,i,a){var l=i.length>1?Rt(i):i[0];yt(l,r.page),(function(h,m){m=m||{},K.isOperaMobile&&Kt(h)?De("screen",h,m):De("client",h,m)})(l,r.client),r.timeStamp=a}function zt(r){var i=[];return _.array(r)?(i[0]=r[0],i[1]=r[1]):r.type==="touchend"?r.touches.length===1?(i[0]=r.touches[0],i[1]=r.changedTouches[0]):r.touches.length===0&&(i[0]=r.changedTouches[0],i[1]=r.changedTouches[1]):(i[0]=r.touches[0],i[1]=r.touches[1]),i}function Rt(r){for(var i={pageX:0,pageY:0,clientX:0,clientY:0,screenX:0,screenY:0},a=0;a<r.length;a++){var l=r[a];for(var h in i)i[h]+=l[h]}for(var m in i)i[m]/=r.length;return i}function pt(r){if(!r.length)return null;var i=zt(r),a=Math.min(i[0].pageX,i[1].pageX),l=Math.min(i[0].pageY,i[1].pageY),h=Math.max(i[0].pageX,i[1].pageX),m=Math.max(i[0].pageY,i[1].pageY);return{x:a,y:l,left:a,top:l,right:h,bottom:m,width:h-a,height:m-l}}function Dt(r,i){var a=i+"X",l=i+"Y",h=zt(r),m=h[0][a]-h[1][a],b=h[0][l]-h[1][l];return mt(m,b)}function be(r,i){var a=i+"X",l=i+"Y",h=zt(r),m=h[1][a]-h[0][a],b=h[1][l]-h[0][l];return 180*Math.atan2(b,m)/Math.PI}function q(r){return _.string(r.pointerType)?r.pointerType:_.number(r.pointerType)?[void 0,void 0,"touch","pen","mouse"][r.pointerType]:/touch/.test(r.type||"")||r instanceof F.Touch?"touch":"mouse"}function Y(r){var i=_.func(r.composedPath)?r.composedPath():r.path;return[qe(i?i[0]:r.target),qe(r.currentTarget)]}var ue=(function(){function r(i){n(this,r),this.immediatePropagationStopped=!1,this.propagationStopped=!1,this._interaction=i}return c(r,[{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}]),r})();Object.defineProperty(ue.prototype,"interaction",{get:function(){return this._interaction._proxy},set:function(){}});var we=function(r,i){for(var a=0;a<i.length;a++){var l=i[a];r.push(l)}return r},de=function(r){return we([],r)},Oe=function(r,i){for(var a=0;a<r.length;a++)if(i(r[a],a,r))return a;return-1},N=function(r,i){return r[Oe(r,i)]},ee=(function(r){d(a,r);var i=y(a);function a(l,h,m){var b;n(this,a),(b=i.call(this,h._interaction)).dropzone=void 0,b.dragEvent=void 0,b.relatedTarget=void 0,b.draggable=void 0,b.propagationStopped=!1,b.immediatePropagationStopped=!1;var w=m==="dragleave"?l.prev:l.cur,C=w.element,z=w.dropzone;return b.type=m,b.target=C,b.currentTarget=C,b.dropzone=z,b.dragEvent=h,b.relatedTarget=h.target,b.draggable=h.interactable,b.timeStamp=h.timeStamp,b}return c(a,[{key:"reject",value:function(){var l=this,h=this._interaction.dropState;if(this.type==="dropactivate"||this.dropzone&&h.cur.dropzone===this.dropzone&&h.cur.element===this.target)if(h.prev.dropzone=this.dropzone,h.prev.element=this.target,h.rejected=!0,h.events.enter=null,this.stopImmediatePropagation(),this.type==="dropactivate"){var m=h.activeDrops,b=Oe(m,(function(C){var z=C.dropzone,E=C.element;return z===l.dropzone&&E===l.target}));h.activeDrops.splice(b,1);var w=new a(h,this.dragEvent,"dropdeactivate");w.dropzone=this.dropzone,w.target=this.target,this.dropzone.fire(w)}else this.dropzone.fire(new a(h,this.dragEvent,"dragleave"))}},{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}]),a})(ue);function Ne(r,i){for(var a=0,l=r.slice();a<l.length;a++){var h=l[a],m=h.dropzone,b=h.element;i.dropzone=m,i.target=b,m.fire(i),i.propagationStopped=i.immediatePropagationStopped=!1}}function j(r,i){for(var a=(function(m,b){for(var w=[],C=0,z=m.interactables.list;C<z.length;C++){var E=z[C];if(E.options.drop.enabled){var I=E.options.drop.accept;if(!(_.element(I)&&I!==b||_.string(I)&&!ze(b,I)||_.func(I)&&!I({dropzone:E,draggableElement:b})))for(var B=0,J=E.getAllElements();B<J.length;B++){var G=J[B];G!==b&&w.push({dropzone:E,element:G,rect:E.getRect(G)})}}}return w})(r,i),l=0;l<a.length;l++){var h=a[l];h.rect=h.dropzone.getRect(h.element)}return a}function Ze(r,i,a){for(var l=r.dropState,h=r.interactable,m=r.element,b=[],w=0,C=l.activeDrops;w<C.length;w++){var z=C[w],E=z.dropzone,I=z.element,B=z.rect,J=E.dropCheck(i,a,h,m,I,B);b.push(J?I:null)}var G=(function(te){for(var fe,ce,_e,Ie=[],$e=0;$e<te.length;$e++){var Te=te[$e],Be=te[fe];if(Te&&$e!==fe)if(Be){var Et=Ce(Te),at=Ce(Be);if(Et!==Te.ownerDocument)if(at!==Te.ownerDocument)if(Et!==at){Ie=Ie.length?Ie:ke(Be);var It=void 0;if(Be instanceof F.HTMLElement&&Te instanceof F.SVGElement&&!(Te instanceof F.SVGSVGElement)){if(Te===at)continue;It=Te.ownerSVGElement}else It=Te;for(var jt=ke(It,Be.ownerDocument),Ut=0;jt[Ut]&&jt[Ut]===Ie[Ut];)Ut++;var tr=[jt[Ut-1],jt[Ut],Ie[Ut]];if(tr[0])for(var Pi=tr[0].lastChild;Pi;){if(Pi===tr[1]){fe=$e,Ie=jt;break}if(Pi===tr[2])break;Pi=Pi.previousSibling}}else _e=Be,(parseInt(k(ce=Te).getComputedStyle(ce).zIndex,10)||0)>=(parseInt(k(_e).getComputedStyle(_e).zIndex,10)||0)&&(fe=$e);else fe=$e}else fe=$e}return fe})(b);return l.activeDrops[G]||null}function Ge(r,i,a){var l=r.dropState,h={enter:null,leave:null,activate:null,deactivate:null,move:null,drop:null};return a.type==="dragstart"&&(h.activate=new ee(l,a,"dropactivate"),h.activate.target=null,h.activate.dropzone=null),a.type==="dragend"&&(h.deactivate=new ee(l,a,"dropdeactivate"),h.deactivate.target=null,h.deactivate.dropzone=null),l.rejected||(l.cur.element!==l.prev.element&&(l.prev.dropzone&&(h.leave=new ee(l,a,"dragleave"),a.dragLeave=h.leave.target=l.prev.element,a.prevDropzone=h.leave.dropzone=l.prev.dropzone),l.cur.dropzone&&(h.enter=new ee(l,a,"dragenter"),a.dragEnter=l.cur.element,a.dropzone=l.cur.dropzone)),a.type==="dragend"&&l.cur.dropzone&&(h.drop=new ee(l,a,"drop"),a.dropzone=l.cur.dropzone,a.relatedTarget=l.cur.element),a.type==="dragmove"&&l.cur.dropzone&&(h.move=new ee(l,a,"dropmove"),a.dropzone=l.cur.dropzone)),h}function rt(r,i){var a=r.dropState,l=a.activeDrops,h=a.cur,m=a.prev;i.leave&&m.dropzone.fire(i.leave),i.enter&&h.dropzone.fire(i.enter),i.move&&h.dropzone.fire(i.move),i.drop&&h.dropzone.fire(i.drop),i.deactivate&&Ne(l,i.deactivate),a.prev.dropzone=h.dropzone,a.prev.element=h.element}function We(r,i){var a=r.interaction,l=r.iEvent,h=r.event;if(l.type==="dragmove"||l.type==="dragend"){var m=a.dropState;i.dynamicDrop&&(m.activeDrops=j(i,a.element));var b=l,w=Ze(a,b,h);m.rejected=m.rejected&&!!w&&w.dropzone===m.cur.dropzone&&w.element===m.cur.element,m.cur.dropzone=w&&w.dropzone,m.cur.element=w&&w.element,m.events=Ge(a,0,b)}}var nt={id:"actions/drop",install:function(r){var i=r.actions,a=r.interactStatic,l=r.Interactable,h=r.defaults;r.usePlugin(U),l.prototype.dropzone=function(m){return(function(b,w){if(_.object(w)){if(b.options.drop.enabled=w.enabled!==!1,w.listeners){var C=Me(w.listeners),z=Object.keys(C).reduce((function(I,B){return I[/^(enter|leave)/.test(B)?"drag".concat(B):/^(activate|deactivate|move)/.test(B)?"drop".concat(B):B]=C[B],I}),{}),E=b.options.drop.listeners;E&&b.off(E),b.on(z),b.options.drop.listeners=z}return _.func(w.ondrop)&&b.on("drop",w.ondrop),_.func(w.ondropactivate)&&b.on("dropactivate",w.ondropactivate),_.func(w.ondropdeactivate)&&b.on("dropdeactivate",w.ondropdeactivate),_.func(w.ondragenter)&&b.on("dragenter",w.ondragenter),_.func(w.ondragleave)&&b.on("dragleave",w.ondragleave),_.func(w.ondropmove)&&b.on("dropmove",w.ondropmove),/^(pointer|center)$/.test(w.overlap)?b.options.drop.overlap=w.overlap:_.number(w.overlap)&&(b.options.drop.overlap=Math.max(Math.min(1,w.overlap),0)),"accept"in w&&(b.options.drop.accept=w.accept),"checker"in w&&(b.options.drop.checker=w.checker),b}return _.bool(w)?(b.options.drop.enabled=w,b):b.options.drop})(this,m)},l.prototype.dropCheck=function(m,b,w,C,z,E){return(function(I,B,J,G,te,fe,ce){var _e=!1;if(!(ce=ce||I.getRect(fe)))return!!I.options.drop.checker&&I.options.drop.checker(B,J,_e,I,fe,G,te);var Ie=I.options.drop.overlap;if(Ie==="pointer"){var $e=Se(G,te,"drag"),Te=yt(B);Te.x+=$e.x,Te.y+=$e.y;var Be=Te.x>ce.left&&Te.x<ce.right,Et=Te.y>ce.top&&Te.y<ce.bottom;_e=Be&&Et}var at=G.getRect(te);if(at&&Ie==="center"){var It=at.left+at.width/2,jt=at.top+at.height/2;_e=It>=ce.left&&It<=ce.right&&jt>=ce.top&&jt<=ce.bottom}return at&&_.number(Ie)&&(_e=Math.max(0,Math.min(ce.right,at.right)-Math.max(ce.left,at.left))*Math.max(0,Math.min(ce.bottom,at.bottom)-Math.max(ce.top,at.top))/(at.width*at.height)>=Ie),I.options.drop.checker&&(_e=I.options.drop.checker(B,J,_e,I,fe,G,te)),_e})(this,m,b,w,C,z,E)},a.dynamicDrop=function(m){return _.bool(m)?(r.dynamicDrop=m,a):r.dynamicDrop},ae(i.phaselessTypes,{dragenter:!0,dragleave:!0,dropactivate:!0,dropdeactivate:!0,dropmove:!0,drop:!0}),i.methodDict.drop="dropzone",r.dynamicDrop=!1,h.actions.drop=nt.defaults},listeners:{"interactions:before-action-start":function(r){var i=r.interaction;i.prepared.name==="drag"&&(i.dropState={cur:{dropzone:null,element:null},prev:{dropzone:null,element:null},rejected:null,events:null,activeDrops:[]})},"interactions:after-action-start":function(r,i){var a=r.interaction,l=(r.event,r.iEvent);if(a.prepared.name==="drag"){var h=a.dropState;h.activeDrops=[],h.events={},h.activeDrops=j(i,a.element),h.events=Ge(a,0,l),h.events.activate&&(Ne(h.activeDrops,h.events.activate),i.fire("actions/drop:start",{interaction:a,dragEvent:l}))}},"interactions:action-move":We,"interactions:after-action-move":function(r,i){var a=r.interaction,l=r.iEvent;if(a.prepared.name==="drag"){var h=a.dropState;rt(a,h.events),i.fire("actions/drop:move",{interaction:a,dragEvent:l}),h.events={}}},"interactions:action-end":function(r,i){if(r.interaction.prepared.name==="drag"){var a=r.interaction,l=r.iEvent;We(r,i),rt(a,a.dropState.events),i.fire("actions/drop:end",{interaction:a,dragEvent:l})}},"interactions:stop":function(r){var i=r.interaction;if(i.prepared.name==="drag"){var a=i.dropState;a&&(a.activeDrops=null,a.events=null,a.cur.dropzone=null,a.cur.element=null,a.prev.dropzone=null,a.prev.element=null,a.rejected=!1)}}},getActiveDrops:j,getDrop:Ze,getDropEvents:Ge,fireDropEvents:rt,filterEventType:function(r){return r.search("drag")===0||r.search("drop")===0},defaults:{enabled:!1,accept:null,overlap:"pointer"}},tt=nt;function it(r){var i=r.interaction,a=r.iEvent,l=r.phase;if(i.prepared.name==="gesture"){var h=i.pointers.map((function(z){return z.pointer})),m=l==="start",b=l==="end",w=i.interactable.options.deltaSource;if(a.touches=[h[0],h[1]],m)a.distance=Dt(h,w),a.box=pt(h),a.scale=1,a.ds=0,a.angle=be(h,w),a.da=0,i.gesture.startDistance=a.distance,i.gesture.startAngle=a.angle;else if(b||i.pointers.length<2){var C=i.prevEvent;a.distance=C.distance,a.box=C.box,a.scale=C.scale,a.ds=0,a.angle=C.angle,a.da=0}else a.distance=Dt(h,w),a.box=pt(h),a.scale=a.distance/i.gesture.startDistance,a.angle=be(h,w),a.ds=a.scale-i.gesture.scale,a.da=a.angle-i.gesture.angle;i.gesture.distance=a.distance,i.gesture.angle=a.angle,_.number(a.scale)&&a.scale!==1/0&&!isNaN(a.scale)&&(i.gesture.scale=a.scale)}}var Xe={id:"actions/gesture",before:["actions/drag","actions/resize"],install:function(r){var i=r.actions,a=r.Interactable,l=r.defaults;a.prototype.gesturable=function(h){return _.object(h)?(this.options.gesture.enabled=h.enabled!==!1,this.setPerAction("gesture",h),this.setOnEvents("gesture",h),this):_.bool(h)?(this.options.gesture.enabled=h,this):this.options.gesture},i.map.gesture=Xe,i.methodDict.gesture="gesturable",l.actions.gesture=Xe.defaults},listeners:{"interactions:action-start":it,"interactions:action-move":it,"interactions:action-end":it,"interactions:new":function(r){r.interaction.gesture={angle:0,distance:0,scale:1,startAngle:0,startDistance:0}},"auto-start:check":function(r){if(!(r.interaction.pointers.length<2)){var i=r.interactable.options.gesture;if(i&&i.enabled)return r.action={name:"gesture"},!1}}},defaults:{},getCursor:function(){return""},filterEventType:function(r){return r.search("gesture")===0}},Je=Xe;function Pe(r,i,a,l,h,m,b){if(!i)return!1;if(i===!0){var w=_.number(m.width)?m.width:m.right-m.left,C=_.number(m.height)?m.height:m.bottom-m.top;if(b=Math.min(b,Math.abs((r==="left"||r==="right"?w:C)/2)),w<0&&(r==="left"?r="right":r==="right"&&(r="left")),C<0&&(r==="top"?r="bottom":r==="bottom"&&(r="top")),r==="left"){var z=w>=0?m.left:m.right;return a.x<z+b}if(r==="top"){var E=C>=0?m.top:m.bottom;return a.y<E+b}if(r==="right")return a.x>(w>=0?m.right:m.left)-b;if(r==="bottom")return a.y>(C>=0?m.bottom:m.top)-b}return!!_.element(l)&&(_.element(i)?i===l:je(l,i,h))}function ve(r){var i=r.iEvent,a=r.interaction;if(a.prepared.name==="resize"&&a.resizeAxes){var l=i;a.interactable.options.resize.square?(a.resizeAxes==="y"?l.delta.x=l.delta.y:l.delta.y=l.delta.x,l.axes="xy"):(l.axes=a.resizeAxes,a.resizeAxes==="x"?l.delta.y=0:a.resizeAxes==="y"&&(l.delta.x=0))}}var Ae,Re,Ee={id:"actions/resize",before:["actions/drag"],install:function(r){var i=r.actions,a=r.browser,l=r.Interactable,h=r.defaults;Ee.cursors=(function(m){return m.isIe9?{x:"e-resize",y:"s-resize",xy:"se-resize",top:"n-resize",left:"w-resize",bottom:"s-resize",right:"e-resize",topleft:"se-resize",bottomright:"se-resize",topright:"ne-resize",bottomleft:"ne-resize"}:{x:"ew-resize",y:"ns-resize",xy:"nwse-resize",top:"ns-resize",left:"ew-resize",bottom:"ns-resize",right:"ew-resize",topleft:"nwse-resize",bottomright:"nwse-resize",topright:"nesw-resize",bottomleft:"nesw-resize"}})(a),Ee.defaultMargin=a.supportsTouch||a.supportsPointerEvent?20:10,l.prototype.resizable=function(m){return(function(b,w,C){return _.object(w)?(b.options.resize.enabled=w.enabled!==!1,b.setPerAction("resize",w),b.setOnEvents("resize",w),_.string(w.axis)&&/^x$|^y$|^xy$/.test(w.axis)?b.options.resize.axis=w.axis:w.axis===null&&(b.options.resize.axis=C.defaults.actions.resize.axis),_.bool(w.preserveAspectRatio)?b.options.resize.preserveAspectRatio=w.preserveAspectRatio:_.bool(w.square)&&(b.options.resize.square=w.square),b):_.bool(w)?(b.options.resize.enabled=w,b):b.options.resize})(this,m,r)},i.map.resize=Ee,i.methodDict.resize="resizable",h.actions.resize=Ee.defaults},listeners:{"interactions:new":function(r){r.interaction.resizeAxes="xy"},"interactions:action-start":function(r){(function(i){var a=i.iEvent,l=i.interaction;if(l.prepared.name==="resize"&&l.prepared.edges){var h=a,m=l.rect;l._rects={start:ae({},m),corrected:ae({},m),previous:ae({},m),delta:{left:0,right:0,width:0,top:0,bottom:0,height:0}},h.edges=l.prepared.edges,h.rect=l._rects.corrected,h.deltaRect=l._rects.delta}})(r),ve(r)},"interactions:action-move":function(r){(function(i){var a=i.iEvent,l=i.interaction;if(l.prepared.name==="resize"&&l.prepared.edges){var h=a,m=l.interactable.options.resize.invert,b=m==="reposition"||m==="negate",w=l.rect,C=l._rects,z=C.start,E=C.corrected,I=C.delta,B=C.previous;if(ae(B,E),b){if(ae(E,w),m==="reposition"){if(E.top>E.bottom){var J=E.top;E.top=E.bottom,E.bottom=J}if(E.left>E.right){var G=E.left;E.left=E.right,E.right=G}}}else E.top=Math.min(w.top,z.bottom),E.bottom=Math.max(w.bottom,z.top),E.left=Math.min(w.left,z.right),E.right=Math.max(w.right,z.left);for(var te in E.width=E.right-E.left,E.height=E.bottom-E.top,E)I[te]=E[te]-B[te];h.edges=l.prepared.edges,h.rect=E,h.deltaRect=I}})(r),ve(r)},"interactions:action-end":function(r){var i=r.iEvent,a=r.interaction;if(a.prepared.name==="resize"&&a.prepared.edges){var l=i;l.edges=a.prepared.edges,l.rect=a._rects.corrected,l.deltaRect=a._rects.delta}},"auto-start:check":function(r){var i=r.interaction,a=r.interactable,l=r.element,h=r.rect,m=r.buttons;if(h){var b=ae({},i.coords.cur.page),w=a.options.resize;if(w&&w.enabled&&(!i.pointerIsDown||!/mouse|pointer/.test(i.pointerType)||(m&w.mouseButtons)!=0)){if(_.object(w.edges)){var C={left:!1,right:!1,top:!1,bottom:!1};for(var z in C)C[z]=Pe(z,w.edges[z],b,i._latestPointer.eventTarget,l,h,w.margin||Ee.defaultMargin);C.left=C.left&&!C.right,C.top=C.top&&!C.bottom,(C.left||C.right||C.top||C.bottom)&&(r.action={name:"resize",edges:C})}else{var E=w.axis!=="y"&&b.x>h.right-Ee.defaultMargin,I=w.axis!=="x"&&b.y>h.bottom-Ee.defaultMargin;(E||I)&&(r.action={name:"resize",axes:(E?"x":"")+(I?"y":"")})}return!r.action&&void 0}}}},defaults:{square:!1,preserveAspectRatio:!1,axis:"xy",margin:NaN,edges:null,invert:"none"},cursors:null,getCursor:function(r){var i=r.edges,a=r.axis,l=r.name,h=Ee.cursors,m=null;if(a)m=h[l+a];else if(i){for(var b="",w=0,C=["top","bottom","left","right"];w<C.length;w++){var z=C[w];i[z]&&(b+=z)}m=h[b]}return m},filterEventType:function(r){return r.search("resize")===0},defaultMargin:null},se=Ee,ne={id:"actions",install:function(r){r.usePlugin(Je),r.usePlugin(se),r.usePlugin(U),r.usePlugin(tt)}},Z=0,Q={request:function(r){return Ae(r)},cancel:function(r){return Re(r)},init:function(r){if(Ae=r.requestAnimationFrame,Re=r.cancelAnimationFrame,!Ae)for(var i=["ms","moz","webkit","o"],a=0;a<i.length;a++){var l=i[a];Ae=r["".concat(l,"RequestAnimationFrame")],Re=r["".concat(l,"CancelAnimationFrame")]||r["".concat(l,"CancelRequestAnimationFrame")]}Ae=Ae&&Ae.bind(r),Re=Re&&Re.bind(r),Ae||(Ae=function(h){var m=Date.now(),b=Math.max(0,16-(m-Z)),w=r.setTimeout((function(){h(m+b)}),b);return Z=m+b,w},Re=function(h){return clearTimeout(h)})}},W={defaults:{enabled:!1,margin:60,container:null,speed:300},now:Date.now,interaction:null,i:0,x:0,y:0,isScrolling:!1,prevTime:0,margin:0,speed:0,start:function(r){W.isScrolling=!0,Q.cancel(W.i),r.autoScroll=W,W.interaction=r,W.prevTime=W.now(),W.i=Q.request(W.scroll)},stop:function(){W.isScrolling=!1,W.interaction&&(W.interaction.autoScroll=null),Q.cancel(W.i)},scroll:function(){var r=W.interaction,i=r.interactable,a=r.element,l=r.prepared.name,h=i.options[l].autoScroll,m=D(h.container,i,a),b=W.now(),w=(b-W.prevTime)/1e3,C=h.speed*w;if(C>=1){var z={x:W.x*C,y:W.y*C};if(z.x||z.y){var E=X(m);_.window(m)?m.scrollBy(z.x,z.y):m&&(m.scrollLeft+=z.x,m.scrollTop+=z.y);var I=X(m),B={x:I.x-E.x,y:I.y-E.y};(B.x||B.y)&&i.fire({type:"autoscroll",target:a,interactable:i,delta:B,interaction:r,container:m})}W.prevTime=b}W.isScrolling&&(Q.cancel(W.i),W.i=Q.request(W.scroll))},check:function(r,i){var a;return(a=r.options[i].autoScroll)==null?void 0:a.enabled},onInteractionMove:function(r){var i=r.interaction,a=r.pointer;if(i.interacting()&&W.check(i.interactable,i.prepared.name))if(i.simulation)W.x=W.y=0;else{var l,h,m,b,w=i.interactable,C=i.element,z=i.prepared.name,E=w.options[z].autoScroll,I=D(E.container,w,C);if(_.window(I))b=a.clientX<W.margin,l=a.clientY<W.margin,h=a.clientX>I.innerWidth-W.margin,m=a.clientY>I.innerHeight-W.margin;else{var B=Qe(I);b=a.clientX<B.left+W.margin,l=a.clientY<B.top+W.margin,h=a.clientX>B.right-W.margin,m=a.clientY>B.bottom-W.margin}W.x=h?1:b?-1:0,W.y=m?1:l?-1:0,W.isScrolling||(W.margin=E.margin,W.speed=E.speed,W.start(i))}}};function D(r,i,a){return(_.string(r)?ut(r,i,a):r)||k(a)}function X(r){return _.window(r)&&(r=window.document.body),{x:r.scrollLeft,y:r.scrollTop}}var ie={id:"auto-scroll",install:function(r){var i=r.defaults,a=r.actions;r.autoScroll=W,W.now=function(){return r.now()},a.phaselessTypes.autoscroll=!0,i.perAction.autoScroll=W.defaults},listeners:{"interactions:new":function(r){r.interaction.autoScroll=null},"interactions:destroy":function(r){r.interaction.autoScroll=null,W.stop(),W.interaction&&(W.interaction=null)},"interactions:stop":W.stop,"interactions:action-move":function(r){return W.onInteractionMove(r)}}},he=ie;function ye(r,i){var a=!1;return function(){return a||(T.console.warn(i),a=!0),r.apply(this,arguments)}}function me(r,i){return r.name=i.name,r.axis=i.axis,r.edges=i.edges,r}function ge(r){return _.bool(r)?(this.options.styleCursor=r,this):r===null?(delete this.options.styleCursor,this):this.options.styleCursor}function He(r){return _.func(r)?(this.options.actionChecker=r,this):r===null?(delete this.options.actionChecker,this):this.options.actionChecker}var Fe={id:"auto-start/interactableMethods",install:function(r){var i=r.Interactable;i.prototype.getAction=function(a,l,h,m){var b=(function(w,C,z,E,I){var B=w.getRect(E),J=C.buttons||{0:1,1:4,3:8,4:16}[C.button],G={action:null,interactable:w,interaction:z,element:E,rect:B,buttons:J};return I.fire("auto-start:check",G),G.action})(this,l,h,m,r);return this.options.actionChecker?this.options.actionChecker(a,l,b,this,m,h):b},i.prototype.ignoreFrom=ye((function(a){return this._backCompatOption("ignoreFrom",a)}),"Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."),i.prototype.allowFrom=ye((function(a){return this._backCompatOption("allowFrom",a)}),"Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."),i.prototype.actionChecker=He,i.prototype.styleCursor=ge}};function Ue(r,i,a,l,h){return i.testIgnoreAllow(i.options[r.name],a,l)&&i.options[r.name].enabled&&kt(i,a,r,h)?r:null}function Ve(r,i,a,l,h,m,b){for(var w=0,C=l.length;w<C;w++){var z=l[w],E=h[w],I=z.getAction(i,a,r,E);if(I){var B=Ue(I,z,E,m,b);if(B)return{action:B,interactable:z,element:E}}}return{action:null,interactable:null,element:null}}function Mt(r,i,a,l,h){var m=[],b=[],w=l;function C(E){m.push(E),b.push(w)}for(;_.element(w);){m=[],b=[],h.interactables.forEachMatch(w,C);var z=Ve(r,i,a,m,b,l,h);if(z.action&&!z.interactable.options[z.action.name].manualStart)return z;w=pe(w)}return{action:null,interactable:null,element:null}}function Ft(r,i,a){var l=i.action,h=i.interactable,m=i.element;l=l||{name:null},r.interactable=h,r.element=m,me(r.prepared,l),r.rect=h&&l.name?h.getRect(m):null,Nt(r,a),a.fire("autoStart:prepared",{interaction:r})}function kt(r,i,a,l){var h=r.options,m=h[a.name].max,b=h[a.name].maxPerElement,w=l.autoStart.maxInteractions,C=0,z=0,E=0;if(!(m&&b&&w))return!1;for(var I=0,B=l.interactions.list;I<B.length;I++){var J=B[I],G=J.prepared.name;if(J.interacting()&&(++C>=w||J.interactable===r&&((z+=G===a.name?1:0)>=m||J.element===i&&(E++,G===a.name&&E>=b))))return!1}return w>0}function Pt(r,i){return _.number(r)?(i.autoStart.maxInteractions=r,this):i.autoStart.maxInteractions}function qt(r,i,a){var l=a.autoStart.cursorElement;l&&l!==r&&(l.style.cursor=""),r.ownerDocument.documentElement.style.cursor=i,r.style.cursor=i,a.autoStart.cursorElement=i?r:null}function Nt(r,i){var a=r.interactable,l=r.element,h=r.prepared;if(r.pointerType==="mouse"&&a&&a.options.styleCursor){var m="";if(h.name){var b=a.options[h.name].cursorChecker;m=_.func(b)?b(h,a,l,r._interacting):i.actions.map[h.name].getCursor(h)}qt(r.element,m||"",i)}else i.autoStart.cursorElement&&qt(i.autoStart.cursorElement,"",i)}var _t={id:"auto-start/base",before:["actions"],install:function(r){var i=r.interactStatic,a=r.defaults;r.usePlugin(Fe),a.base.actionChecker=null,a.base.styleCursor=!0,ae(a.perAction,{manualStart:!1,max:1/0,maxPerElement:1,allowFrom:null,ignoreFrom:null,mouseButtons:1}),i.maxInteractions=function(l){return Pt(l,r)},r.autoStart={maxInteractions:1/0,withinInteractionLimit:kt,cursorElement:null}},listeners:{"interactions:down":function(r,i){var a=r.interaction,l=r.pointer,h=r.event,m=r.eventTarget;a.interacting()||Ft(a,Mt(a,l,h,m,i),i)},"interactions:move":function(r,i){(function(a,l){var h=a.interaction,m=a.pointer,b=a.event,w=a.eventTarget;h.pointerType!=="mouse"||h.pointerIsDown||h.interacting()||Ft(h,Mt(h,m,b,w,l),l)})(r,i),(function(a,l){var h=a.interaction;if(h.pointerIsDown&&!h.interacting()&&h.pointerWasMoved&&h.prepared.name){l.fire("autoStart:before-start",a);var m=h.interactable,b=h.prepared.name;b&&m&&(m.options[b].manualStart||!kt(m,h.element,h.prepared,l)?h.stop():(h.start(h.prepared,m,h.element),Nt(h,l)))}})(r,i)},"interactions:stop":function(r,i){var a=r.interaction,l=a.interactable;l&&l.options.styleCursor&&qt(a.element,"",i)}},maxInteractions:Pt,withinInteractionLimit:kt,validateAction:Ue},Wt=_t,mi={id:"auto-start/dragAxis",listeners:{"autoStart:before-start":function(r,i){var a=r.interaction,l=r.eventTarget,h=r.dx,m=r.dy;if(a.prepared.name==="drag"){var b=Math.abs(h),w=Math.abs(m),C=a.interactable.options.drag,z=C.startAxis,E=b>w?"x":b<w?"y":"xy";if(a.prepared.axis=C.lockAxis==="start"?E[0]:C.lockAxis,E!=="xy"&&z!=="xy"&&z!==E){a.prepared.name=null;for(var I=l,B=function(G){if(G!==a.interactable){var te=a.interactable.options.drag;if(!te.manualStart&&G.testIgnoreAllow(te,I,l)){var fe=G.getAction(a.downPointer,a.downEvent,a,I);if(fe&&fe.name==="drag"&&(function(ce,_e){if(!_e)return!1;var Ie=_e.options.drag.startAxis;return ce==="xy"||Ie==="xy"||Ie===ce})(E,G)&&Wt.validateAction(fe,G,I,l,i))return G}}};_.element(I);){var J=i.interactables.forEachMatch(I,B);if(J){a.prepared.name="drag",a.interactable=J,a.element=I;break}I=pe(I)}}}}}};function yi(r){var i=r.prepared&&r.prepared.name;if(!i)return null;var a=r.interactable.options;return a[i].hold||a[i].delay}var Bi={id:"auto-start/hold",install:function(r){var i=r.defaults;r.usePlugin(Wt),i.perAction.hold=0,i.perAction.delay=0},listeners:{"interactions:new":function(r){r.interaction.autoStartHoldTimer=null},"autoStart:prepared":function(r){var i=r.interaction,a=yi(i);a>0&&(i.autoStartHoldTimer=setTimeout((function(){i.start(i.prepared,i.interactable,i.element)}),a))},"interactions:move":function(r){var i=r.interaction,a=r.duplicate;i.autoStartHoldTimer&&i.pointerWasMoved&&!a&&(clearTimeout(i.autoStartHoldTimer),i.autoStartHoldTimer=null)},"autoStart:before-start":function(r){var i=r.interaction;yi(i)>0&&(i.prepared.name=null)}},getHoldDuration:yi},qi=Bi,Ni={id:"auto-start",install:function(r){r.usePlugin(Wt),r.usePlugin(qi),r.usePlugin(mi)}},Hi=function(r){return/^(always|never|auto)$/.test(r)?(this.options.preventDefault=r,this):_.bool(r)?(this.options.preventDefault=r?"always":"never",this):this.options.preventDefault};function vi(r){var i=r.interaction,a=r.event;i.interactable&&i.interactable.checkAndPreventDefault(a)}var ji={id:"core/interactablePreventDefault",install:function(r){var i=r.Interactable;i.prototype.preventDefault=Hi,i.prototype.checkAndPreventDefault=function(a){return(function(l,h,m){var b=l.options.preventDefault;if(b!=="never")if(b!=="always"){if(h.events.supportsPassive&&/^touch(start|move)$/.test(m.type)){var w=k(m.target).document,C=h.getDocOptions(w);if(!C||!C.events||C.events.passive!==!1)return}/^(mouse|pointer|touch)*(down|start)/i.test(m.type)||_.element(m.target)&&ze(m.target,"input,select,textarea,[contenteditable=true],[contenteditable=true] *")||m.preventDefault()}else m.preventDefault()})(this,r,a)},r.interactions.docEvents.push({type:"dragstart",listener:function(a){for(var l=0,h=r.interactions.list;l<h.length;l++){var m=h[l];if(m.element&&(m.element===a.target||le(m.element,a.target)))return void m.interactable.checkAndPreventDefault(a)}}})},listeners:["down","move","up","cancel"].reduce((function(r,i){return r["interactions:".concat(i)]=vi,r}),{})};function Gt(r,i){if(i.phaselessTypes[r])return!0;for(var a in i.map)if(r.indexOf(a)===0&&r.substr(a.length)in i.phases)return!0;return!1}function Yt(r){var i={};for(var a in r){var l=r[a];_.plainObject(l)?i[a]=Yt(l):_.array(l)?i[a]=de(l):i[a]=l}return i}var bi=(function(){function r(i){n(this,r),this.states=[],this.startOffset={left:0,right:0,top:0,bottom:0},this.startDelta=void 0,this.result=void 0,this.endResult=void 0,this.startEdges=void 0,this.edges=void 0,this.interaction=void 0,this.interaction=i,this.result=si(),this.edges={left:!1,right:!1,top:!1,bottom:!1}}return c(r,[{key:"start",value:function(i,a){var l,h,m=i.phase,b=this.interaction,w=(function(z){var E=z.interactable.options[z.prepared.name],I=E.modifiers;return I&&I.length?I:["snap","snapSize","snapEdges","restrict","restrictEdges","restrictSize"].map((function(B){var J=E[B];return J&&J.enabled&&{options:J,methods:J._methods}})).filter((function(B){return!!B}))})(b);this.prepareStates(w),this.startEdges=ae({},b.edges),this.edges=ae({},this.startEdges),this.startOffset=(l=b.rect,h=a,l?{left:h.x-l.left,top:h.y-l.top,right:l.right-h.x,bottom:l.bottom-h.y}:{left:0,top:0,right:0,bottom:0}),this.startDelta={x:0,y:0};var C=this.fillArg({phase:m,pageCoords:a,preEnd:!1});return this.result=si(),this.startAll(C),this.result=this.setAll(C)}},{key:"fillArg",value:function(i){var a=this.interaction;return i.interaction=a,i.interactable=a.interactable,i.element=a.element,i.rect||(i.rect=a.rect),i.edges||(i.edges=this.startEdges),i.startOffset=this.startOffset,i}},{key:"startAll",value:function(i){for(var a=0,l=this.states;a<l.length;a++){var h=l[a];h.methods.start&&(i.state=h,h.methods.start(i))}}},{key:"setAll",value:function(i){var a=i.phase,l=i.preEnd,h=i.skipModifiers,m=i.rect,b=i.edges;i.coords=ae({},i.pageCoords),i.rect=ae({},m),i.edges=ae({},b);for(var w=h?this.states.slice(h):this.states,C=si(i.coords,i.rect),z=0;z<w.length;z++){var E,I=w[z],B=I.options,J=ae({},i.coords),G=null;(E=I.methods)!=null&&E.set&&this.shouldDo(B,l,a)&&(i.state=I,G=I.methods.set(i),Ye(i.edges,i.rect,{x:i.coords.x-J.x,y:i.coords.y-J.y})),C.eventProps.push(G)}ae(this.edges,i.edges),C.delta.x=i.coords.x-i.pageCoords.x,C.delta.y=i.coords.y-i.pageCoords.y,C.rectDelta.left=i.rect.left-m.left,C.rectDelta.right=i.rect.right-m.right,C.rectDelta.top=i.rect.top-m.top,C.rectDelta.bottom=i.rect.bottom-m.bottom;var te=this.result.coords,fe=this.result.rect;if(te&&fe){var ce=C.rect.left!==fe.left||C.rect.right!==fe.right||C.rect.top!==fe.top||C.rect.bottom!==fe.bottom;C.changed=ce||te.x!==C.coords.x||te.y!==C.coords.y}return C}},{key:"applyToInteraction",value:function(i){var a=this.interaction,l=i.phase,h=a.coords.cur,m=a.coords.start,b=this.result,w=this.startDelta,C=b.delta;l==="start"&&ae(this.startDelta,b.delta);for(var z=0,E=[[m,w],[h,C]];z<E.length;z++){var I=E[z],B=I[0],J=I[1];B.page.x+=J.x,B.page.y+=J.y,B.client.x+=J.x,B.client.y+=J.y}var G=this.result.rectDelta,te=i.rect||a.rect;te.left+=G.left,te.right+=G.right,te.top+=G.top,te.bottom+=G.bottom,te.width=te.right-te.left,te.height=te.bottom-te.top}},{key:"setAndApply",value:function(i){var a=this.interaction,l=i.phase,h=i.preEnd,m=i.skipModifiers,b=this.setAll(this.fillArg({preEnd:h,phase:l,pageCoords:i.modifiedCoords||a.coords.cur.page}));if(this.result=b,!b.changed&&(!m||m<this.states.length)&&a.interacting())return!1;if(i.modifiedCoords){var w=a.coords.cur.page,C={x:i.modifiedCoords.x-w.x,y:i.modifiedCoords.y-w.y};b.coords.x+=C.x,b.coords.y+=C.y,b.delta.x+=C.x,b.delta.y+=C.y}this.applyToInteraction(i)}},{key:"beforeEnd",value:function(i){var a=i.interaction,l=i.event,h=this.states;if(h&&h.length){for(var m=!1,b=0;b<h.length;b++){var w=h[b];i.state=w;var C=w.options,z=w.methods,E=z.beforeEnd&&z.beforeEnd(i);if(E)return this.endResult=E,!1;m=m||!m&&this.shouldDo(C,!0,i.phase,!0)}m&&a.move({event:l,preEnd:!0})}}},{key:"stop",value:function(i){var a=i.interaction;if(this.states&&this.states.length){var l=ae({states:this.states,interactable:a.interactable,element:a.element,rect:null},i);this.fillArg(l);for(var h=0,m=this.states;h<m.length;h++){var b=m[h];l.state=b,b.methods.stop&&b.methods.stop(l)}this.states=null,this.endResult=null}}},{key:"prepareStates",value:function(i){this.states=[];for(var a=0;a<i.length;a++){var l=i[a],h=l.options,m=l.methods,b=l.name;this.states.push({options:h,methods:m,index:a,name:b})}return this.states}},{key:"restoreInteractionCoords",value:function(i){var a=i.interaction,l=a.coords,h=a.rect,m=a.modification;if(m.result){for(var b=m.startDelta,w=m.result,C=w.delta,z=w.rectDelta,E=0,I=[[l.start,b],[l.cur,C]];E<I.length;E++){var B=I[E],J=B[0],G=B[1];J.page.x-=G.x,J.page.y-=G.y,J.client.x-=G.x,J.client.y-=G.y}h.left-=z.left,h.right-=z.right,h.top-=z.top,h.bottom-=z.bottom}}},{key:"shouldDo",value:function(i,a,l,h){return!(!i||i.enabled===!1||h&&!i.endOnly||i.endOnly&&!a||l==="start"&&!i.setStart)}},{key:"copyFrom",value:function(i){this.startOffset=i.startOffset,this.startDelta=i.startDelta,this.startEdges=i.startEdges,this.edges=i.edges,this.states=i.states.map((function(a){return Yt(a)})),this.result=si(ae({},i.result.coords),ae({},i.result.rect))}},{key:"destroy",value:function(){for(var i in this)this[i]=null}}]),r})();function si(r,i){return{rect:i,coords:r,delta:{x:0,y:0},rectDelta:{left:0,right:0,top:0,bottom:0},eventProps:[],changed:!0}}function Ht(r,i){var a=r.defaults,l={start:r.start,set:r.set,beforeEnd:r.beforeEnd,stop:r.stop},h=function(m){var b=m||{};for(var w in b.enabled=b.enabled!==!1,a)w in b||(b[w]=a[w]);var C={options:b,methods:l,name:i,enable:function(){return b.enabled=!0,C},disable:function(){return b.enabled=!1,C}};return C};return i&&typeof i=="string"&&(h._defaults=a,h._methods=l),h}function ii(r){var i=r.iEvent,a=r.interaction.modification.result;a&&(i.modifiers=a.eventProps)}var Wi={id:"modifiers/base",before:["actions"],install:function(r){r.defaults.perAction.modifiers=[]},listeners:{"interactions:new":function(r){var i=r.interaction;i.modification=new bi(i)},"interactions:before-action-start":function(r){var i=r.interaction,a=r.interaction.modification;a.start(r,i.coords.start.page),i.edges=a.edges,a.applyToInteraction(r)},"interactions:before-action-move":function(r){var i=r.interaction,a=i.modification,l=a.setAndApply(r);return i.edges=a.edges,l},"interactions:before-action-end":function(r){var i=r.interaction,a=i.modification,l=a.beforeEnd(r);return i.edges=a.startEdges,l},"interactions:action-start":ii,"interactions:action-move":ii,"interactions:action-end":ii,"interactions:after-action-start":function(r){return r.interaction.modification.restoreInteractionCoords(r)},"interactions:after-action-move":function(r){return r.interaction.modification.restoreInteractionCoords(r)},"interactions:stop":function(r){return r.interaction.modification.stop(r)}}},_i=Wi,xi={base:{preventDefault:"auto",deltaSource:"page"},perAction:{enabled:!1,origin:{x:0,y:0}},actions:{}},ci=(function(r){d(a,r);var i=y(a);function a(l,h,m,b,w,C,z){var E;n(this,a),(E=i.call(this,l)).relatedTarget=null,E.screenX=void 0,E.screenY=void 0,E.button=void 0,E.buttons=void 0,E.ctrlKey=void 0,E.shiftKey=void 0,E.altKey=void 0,E.metaKey=void 0,E.page=void 0,E.client=void 0,E.delta=void 0,E.rect=void 0,E.x0=void 0,E.y0=void 0,E.t0=void 0,E.dt=void 0,E.duration=void 0,E.clientX0=void 0,E.clientY0=void 0,E.velocity=void 0,E.speed=void 0,E.swipe=void 0,E.axes=void 0,E.preEnd=void 0,w=w||l.element;var I=l.interactable,B=(I&&I.options||xi).deltaSource,J=Se(I,w,m),G=b==="start",te=b==="end",fe=G?v(E):l.prevEvent,ce=G?l.coords.start:te?{page:fe.page,client:fe.client,timeStamp:l.coords.cur.timeStamp}:l.coords.cur;return E.page=ae({},ce.page),E.client=ae({},ce.client),E.rect=ae({},l.rect),E.timeStamp=ce.timeStamp,te||(E.page.x-=J.x,E.page.y-=J.y,E.client.x-=J.x,E.client.y-=J.y),E.ctrlKey=h.ctrlKey,E.altKey=h.altKey,E.shiftKey=h.shiftKey,E.metaKey=h.metaKey,E.button=h.button,E.buttons=h.buttons,E.target=w,E.currentTarget=w,E.preEnd=C,E.type=z||m+(b||""),E.interactable=I,E.t0=G?l.pointers[l.pointers.length-1].downTime:fe.t0,E.x0=l.coords.start.page.x-J.x,E.y0=l.coords.start.page.y-J.y,E.clientX0=l.coords.start.client.x-J.x,E.clientY0=l.coords.start.client.y-J.y,E.delta=G||te?{x:0,y:0}:{x:E[B].x-fe[B].x,y:E[B].y-fe[B].y},E.dt=l.coords.delta.timeStamp,E.duration=E.timeStamp-E.t0,E.velocity=ae({},l.coords.velocity[B]),E.speed=mt(E.velocity.x,E.velocity.y),E.swipe=te||b==="inertiastart"?E.getSwipe():null,E}return c(a,[{key:"getSwipe",value:function(){var l=this._interaction;if(l.prevEvent.speed<600||this.timeStamp-l.prevEvent.timeStamp>150)return null;var h=180*Math.atan2(l.prevEvent.velocityY,l.prevEvent.velocityX)/Math.PI;h<0&&(h+=360);var m=112.5<=h&&h<247.5,b=202.5<=h&&h<337.5;return{up:b,down:!b&&22.5<=h&&h<157.5,left:m,right:!m&&(292.5<=h||h<67.5),angle:h,speed:l.prevEvent.speed,velocity:{x:l.prevEvent.velocityX,y:l.prevEvent.velocityY}}}},{key:"preventDefault",value:function(){}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}}]),a})(ue);Object.defineProperties(ci.prototype,{pageX:{get:function(){return this.page.x},set:function(r){this.page.x=r}},pageY:{get:function(){return this.page.y},set:function(r){this.page.y=r}},clientX:{get:function(){return this.client.x},set:function(r){this.client.x=r}},clientY:{get:function(){return this.client.y},set:function(r){this.client.y=r}},dx:{get:function(){return this.delta.x},set:function(r){this.delta.x=r}},dy:{get:function(){return this.delta.y},set:function(r){this.delta.y=r}},velocityX:{get:function(){return this.velocity.x},set:function(r){this.velocity.x=r}},velocityY:{get:function(){return this.velocity.y},set:function(r){this.velocity.y=r}}});var Yi=c((function r(i,a,l,h,m){n(this,r),this.id=void 0,this.pointer=void 0,this.event=void 0,this.downTime=void 0,this.downTarget=void 0,this.id=i,this.pointer=a,this.event=l,this.downTime=h,this.downTarget=m})),$i=(function(r){return r.interactable="",r.element="",r.prepared="",r.pointerIsDown="",r.pointerWasMoved="",r._proxy="",r})({}),wi=(function(r){return r.start="",r.move="",r.end="",r.stop="",r.interacting="",r})({}),Ki=0,Ui=(function(){function r(i){var a=this,l=i.pointerType,h=i.scopeFire;n(this,r),this.interactable=null,this.element=null,this.rect=null,this._rects=void 0,this.edges=null,this._scopeFire=void 0,this.prepared={name:null,axis:null,edges:null},this.pointerType=void 0,this.pointers=[],this.downEvent=null,this.downPointer={},this._latestPointer={pointer:null,event:null,eventTarget:null},this.prevEvent=null,this.pointerIsDown=!1,this.pointerWasMoved=!1,this._interacting=!1,this._ending=!1,this._stopped=!0,this._proxy=void 0,this.simulation=null,this.doMove=ye((function(E){this.move(E)}),"The interaction.doMove() method has been renamed to interaction.move()"),this.coords={start:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},prev:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},cur:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},delta:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},velocity:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0}},this._id=Ki++,this._scopeFire=h,this.pointerType=l;var m=this;this._proxy={};var b=function(E){Object.defineProperty(a._proxy,E,{get:function(){return m[E]}})};for(var w in $i)b(w);var C=function(E){Object.defineProperty(a._proxy,E,{value:function(){return m[E].apply(m,arguments)}})};for(var z in wi)C(z);this._scopeFire("interactions:new",{interaction:this})}return c(r,[{key:"pointerMoveTolerance",get:function(){return 1}},{key:"pointerDown",value:function(i,a,l){var h=this.updatePointer(i,a,l,!0),m=this.pointers[h];this._scopeFire("interactions:down",{pointer:i,event:a,eventTarget:l,pointerIndex:h,pointerInfo:m,type:"down",interaction:this})}},{key:"start",value:function(i,a,l){return!(this.interacting()||!this.pointerIsDown||this.pointers.length<(i.name==="gesture"?2:1)||!a.options[i.name].enabled)&&(me(this.prepared,i),this.interactable=a,this.element=l,this.rect=a.getRect(l),this.edges=this.prepared.edges?ae({},this.prepared.edges):{left:!0,right:!0,top:!0,bottom:!0},this._stopped=!1,this._interacting=this._doPhase({interaction:this,event:this.downEvent,phase:"start"})&&!this._stopped,this._interacting)}},{key:"pointerMove",value:function(i,a,l){this.simulation||this.modification&&this.modification.endResult||this.updatePointer(i,a,l,!1);var h,m,b=this.coords.cur.page.x===this.coords.prev.page.x&&this.coords.cur.page.y===this.coords.prev.page.y&&this.coords.cur.client.x===this.coords.prev.client.x&&this.coords.cur.client.y===this.coords.prev.client.y;this.pointerIsDown&&!this.pointerWasMoved&&(h=this.coords.cur.client.x-this.coords.start.client.x,m=this.coords.cur.client.y-this.coords.start.client.y,this.pointerWasMoved=mt(h,m)>this.pointerMoveTolerance);var w,C,z,E=this.getPointerIndex(i),I={pointer:i,pointerIndex:E,pointerInfo:this.pointers[E],event:a,type:"move",eventTarget:l,dx:h,dy:m,duplicate:b,interaction:this};b||(w=this.coords.velocity,C=this.coords.delta,z=Math.max(C.timeStamp/1e3,.001),w.page.x=C.page.x/z,w.page.y=C.page.y/z,w.client.x=C.client.x/z,w.client.y=C.client.y/z,w.timeStamp=z),this._scopeFire("interactions:move",I),b||this.simulation||(this.interacting()&&(I.type=null,this.move(I)),this.pointerWasMoved&&Tt(this.coords.prev,this.coords.cur))}},{key:"move",value:function(i){i&&i.event||wt(this.coords.delta),(i=ae({pointer:this._latestPointer.pointer,event:this._latestPointer.event,eventTarget:this._latestPointer.eventTarget,interaction:this},i||{})).phase="move",this._doPhase(i)}},{key:"pointerUp",value:function(i,a,l,h){var m=this.getPointerIndex(i);m===-1&&(m=this.updatePointer(i,a,l,!1));var b=/cancel$/i.test(a.type)?"cancel":"up";this._scopeFire("interactions:".concat(b),{pointer:i,pointerIndex:m,pointerInfo:this.pointers[m],event:a,eventTarget:l,type:b,curEventTarget:h,interaction:this}),this.simulation||this.end(a),this.removePointer(i,a)}},{key:"documentBlur",value:function(i){this.end(i),this._scopeFire("interactions:blur",{event:i,type:"blur",interaction:this})}},{key:"end",value:function(i){var a;this._ending=!0,i=i||this._latestPointer.event,this.interacting()&&(a=this._doPhase({event:i,interaction:this,phase:"end"})),this._ending=!1,a===!0&&this.stop()}},{key:"currentAction",value:function(){return this._interacting?this.prepared.name:null}},{key:"interacting",value:function(){return this._interacting}},{key:"stop",value:function(){this._scopeFire("interactions:stop",{interaction:this}),this.interactable=this.element=null,this._interacting=!1,this._stopped=!0,this.prepared.name=this.prevEvent=null}},{key:"getPointerIndex",value:function(i){var a=Ot(i);return this.pointerType==="mouse"||this.pointerType==="pen"?this.pointers.length-1:Oe(this.pointers,(function(l){return l.id===a}))}},{key:"getPointerInfo",value:function(i){return this.pointers[this.getPointerIndex(i)]}},{key:"updatePointer",value:function(i,a,l,h){var m,b,w,C=Ot(i),z=this.getPointerIndex(i),E=this.pointers[z];return h=h!==!1&&(h||/(down|start)$/i.test(a.type)),E?E.pointer=i:(E=new Yi(C,i,a,null,null),z=this.pointers.length,this.pointers.push(E)),ti(this.coords.cur,this.pointers.map((function(I){return I.pointer})),this._now()),m=this.coords.delta,b=this.coords.prev,w=this.coords.cur,m.page.x=w.page.x-b.page.x,m.page.y=w.page.y-b.page.y,m.client.x=w.client.x-b.client.x,m.client.y=w.client.y-b.client.y,m.timeStamp=w.timeStamp-b.timeStamp,h&&(this.pointerIsDown=!0,E.downTime=this.coords.cur.timeStamp,E.downTarget=l,lt(this.downPointer,i),this.interacting()||(Tt(this.coords.start,this.coords.cur),Tt(this.coords.prev,this.coords.cur),this.downEvent=a,this.pointerWasMoved=!1)),this._updateLatestPointer(i,a,l),this._scopeFire("interactions:update-pointer",{pointer:i,event:a,eventTarget:l,down:h,pointerInfo:E,pointerIndex:z,interaction:this}),z}},{key:"removePointer",value:function(i,a){var l=this.getPointerIndex(i);if(l!==-1){var h=this.pointers[l];this._scopeFire("interactions:remove-pointer",{pointer:i,event:a,eventTarget:null,pointerIndex:l,pointerInfo:h,interaction:this}),this.pointers.splice(l,1),this.pointerIsDown=!1}}},{key:"_updateLatestPointer",value:function(i,a,l){this._latestPointer.pointer=i,this._latestPointer.event=a,this._latestPointer.eventTarget=l}},{key:"destroy",value:function(){this._latestPointer.pointer=null,this._latestPointer.event=null,this._latestPointer.eventTarget=null}},{key:"_createPreparedEvent",value:function(i,a,l,h){return new ci(this,i,this.prepared.name,a,this.element,l,h)}},{key:"_fireEvent",value:function(i){var a;(a=this.interactable)==null||a.fire(i),(!this.prevEvent||i.timeStamp>=this.prevEvent.timeStamp)&&(this.prevEvent=i)}},{key:"_doPhase",value:function(i){var a=i.event,l=i.phase,h=i.preEnd,m=i.type,b=this.rect;if(b&&l==="move"&&(Ye(this.edges,b,this.coords.delta[this.interactable.options.deltaSource]),b.width=b.right-b.left,b.height=b.bottom-b.top),this._scopeFire("interactions:before-action-".concat(l),i)===!1)return!1;var w=i.iEvent=this._createPreparedEvent(a,l,h,m);return this._scopeFire("interactions:action-".concat(l),i),l==="start"&&(this.prevEvent=w),this._fireEvent(w),this._scopeFire("interactions:after-action-".concat(l),i),!0}},{key:"_now",value:function(){return Date.now()}}]),r})();function Si(r){ki(r.interaction)}function ki(r){if(!(function(a){return!(!a.offset.pending.x&&!a.offset.pending.y)})(r))return!1;var i=r.offset.pending;return li(r.coords.cur,i),li(r.coords.delta,i),Ye(r.edges,r.rect,i),i.x=0,i.y=0,!0}function Vi(r){var i=r.x,a=r.y;this.offset.pending.x+=i,this.offset.pending.y+=a,this.offset.total.x+=i,this.offset.total.y+=a}function li(r,i){var a=r.page,l=r.client,h=i.x,m=i.y;a.x+=h,a.y+=m,l.x+=h,l.y+=m}wi.offsetBy="";var Gi={id:"offset",before:["modifiers","pointer-events","actions","inertia"],install:function(r){r.Interaction.prototype.offsetBy=Vi},listeners:{"interactions:new":function(r){r.interaction.offset={total:{x:0,y:0},pending:{x:0,y:0}}},"interactions:update-pointer":function(r){return(function(i){i.pointerIsDown&&(li(i.coords.cur,i.offset.total),i.offset.pending.x=0,i.offset.pending.y=0)})(r.interaction)},"interactions:before-action-start":Si,"interactions:before-action-move":Si,"interactions:before-action-end":function(r){var i=r.interaction;if(ki(i))return i.move({offset:!0}),i.end(),!1},"interactions:stop":function(r){var i=r.interaction;i.offset.total.x=0,i.offset.total.y=0,i.offset.pending.x=0,i.offset.pending.y=0}}},Ci=Gi,Ei=(function(){function r(i){n(this,r),this.active=!1,this.isModified=!1,this.smoothEnd=!1,this.allowResume=!1,this.modification=void 0,this.modifierCount=0,this.modifierArg=void 0,this.startCoords=void 0,this.t0=0,this.v0=0,this.te=0,this.targetOffset=void 0,this.modifiedOffset=void 0,this.currentOffset=void 0,this.lambda_v0=0,this.one_ve_v0=0,this.timeout=void 0,this.interaction=void 0,this.interaction=i}return c(r,[{key:"start",value:function(i){var a=this.interaction,l=di(a);if(!l||!l.enabled)return!1;var h=a.coords.velocity.client,m=mt(h.x,h.y),b=this.modification||(this.modification=new bi(a));if(b.copyFrom(a.modification),this.t0=a._now(),this.allowResume=l.allowResume,this.v0=m,this.currentOffset={x:0,y:0},this.startCoords=a.coords.cur.page,this.modifierArg=b.fillArg({pageCoords:this.startCoords,preEnd:!0,phase:"inertiastart"}),this.t0-a.coords.cur.timeStamp<50&&m>l.minSpeed&&m>l.endSpeed)this.startInertia();else{if(b.result=b.setAll(this.modifierArg),!b.result.changed)return!1;this.startSmoothEnd()}return a.modification.result.rect=null,a.offsetBy(this.targetOffset),a._doPhase({interaction:a,event:i,phase:"inertiastart"}),a.offsetBy({x:-this.targetOffset.x,y:-this.targetOffset.y}),a.modification.result.rect=null,this.active=!0,a.simulation=this,!0}},{key:"startInertia",value:function(){var i=this,a=this.interaction.coords.velocity.client,l=di(this.interaction),h=l.resistance,m=-Math.log(l.endSpeed/this.v0)/h;this.targetOffset={x:(a.x-m)/h,y:(a.y-m)/h},this.te=m,this.lambda_v0=h/this.v0,this.one_ve_v0=1-l.endSpeed/this.v0;var b=this.modification,w=this.modifierArg;w.pageCoords={x:this.startCoords.x+this.targetOffset.x,y:this.startCoords.y+this.targetOffset.y},b.result=b.setAll(w),b.result.changed&&(this.isModified=!0,this.modifiedOffset={x:this.targetOffset.x+b.result.delta.x,y:this.targetOffset.y+b.result.delta.y}),this.onNextFrame((function(){return i.inertiaTick()}))}},{key:"startSmoothEnd",value:function(){var i=this;this.smoothEnd=!0,this.isModified=!0,this.targetOffset={x:this.modification.result.delta.x,y:this.modification.result.delta.y},this.onNextFrame((function(){return i.smoothEndTick()}))}},{key:"onNextFrame",value:function(i){var a=this;this.timeout=Q.request((function(){a.active&&i()}))}},{key:"inertiaTick",value:function(){var i,a,l,h,m,b,w,C=this,z=this.interaction,E=di(z).resistance,I=(z._now()-this.t0)/1e3;if(I<this.te){var B,J=1-(Math.exp(-E*I)-this.lambda_v0)/this.one_ve_v0;this.isModified?(i=0,a=0,l=this.targetOffset.x,h=this.targetOffset.y,m=this.modifiedOffset.x,b=this.modifiedOffset.y,B={x:ui(w=J,i,l,m),y:ui(w,a,h,b)}):B={x:this.targetOffset.x*J,y:this.targetOffset.y*J};var G={x:B.x-this.currentOffset.x,y:B.y-this.currentOffset.y};this.currentOffset.x+=G.x,this.currentOffset.y+=G.y,z.offsetBy(G),z.move(),this.onNextFrame((function(){return C.inertiaTick()}))}else z.offsetBy({x:this.modifiedOffset.x-this.currentOffset.x,y:this.modifiedOffset.y-this.currentOffset.y}),this.end()}},{key:"smoothEndTick",value:function(){var i=this,a=this.interaction,l=a._now()-this.t0,h=di(a).smoothEndDuration;if(l<h){var m={x:Ai(l,0,this.targetOffset.x,h),y:Ai(l,0,this.targetOffset.y,h)},b={x:m.x-this.currentOffset.x,y:m.y-this.currentOffset.y};this.currentOffset.x+=b.x,this.currentOffset.y+=b.y,a.offsetBy(b),a.move({skipModifiers:this.modifierCount}),this.onNextFrame((function(){return i.smoothEndTick()}))}else a.offsetBy({x:this.targetOffset.x-this.currentOffset.x,y:this.targetOffset.y-this.currentOffset.y}),this.end()}},{key:"resume",value:function(i){var a=i.pointer,l=i.event,h=i.eventTarget,m=this.interaction;m.offsetBy({x:-this.currentOffset.x,y:-this.currentOffset.y}),m.updatePointer(a,l,h,!0),m._doPhase({interaction:m,event:l,phase:"resume"}),Tt(m.coords.prev,m.coords.cur),this.stop()}},{key:"end",value:function(){this.interaction.move(),this.interaction.end(),this.stop()}},{key:"stop",value:function(){this.active=this.smoothEnd=!1,this.interaction.simulation=null,Q.cancel(this.timeout)}}]),r})();function di(r){var i=r.interactable,a=r.prepared;return i&&i.options&&a.name&&i.options[a.name].inertia}var cr={id:"inertia",before:["modifiers","actions"],install:function(r){var i=r.defaults;r.usePlugin(Ci),r.usePlugin(_i),r.actions.phases.inertiastart=!0,r.actions.phases.resume=!0,i.perAction.inertia={enabled:!1,resistance:10,minSpeed:100,endSpeed:10,allowResume:!0,smoothEndDuration:300}},listeners:{"interactions:new":function(r){var i=r.interaction;i.inertia=new Ei(i)},"interactions:before-action-end":function(r){var i=r.interaction,a=r.event;return(!i._interacting||i.simulation||!i.inertia.start(a))&&null},"interactions:down":function(r){var i=r.interaction,a=r.eventTarget,l=i.inertia;if(l.active)for(var h=a;_.element(h);){if(h===i.element){l.resume(r);break}h=pe(h)}},"interactions:stop":function(r){var i=r.interaction.inertia;i.active&&i.stop()},"interactions:before-action-resume":function(r){var i=r.interaction.modification;i.stop(r),i.start(r,r.interaction.coords.cur.page),i.applyToInteraction(r)},"interactions:before-action-inertiastart":function(r){return r.interaction.modification.setAndApply(r)},"interactions:action-resume":ii,"interactions:action-inertiastart":ii,"interactions:after-action-inertiastart":function(r){return r.interaction.modification.restoreInteractionCoords(r)},"interactions:after-action-resume":function(r){return r.interaction.modification.restoreInteractionCoords(r)}}};function ui(r,i,a,l){var h=1-r;return h*h*i+2*h*r*a+r*r*l}function Ai(r,i,a,l){return-a*(r/=l)*(r-2)+i}var Xi=cr;function Ti(r,i){for(var a=0;a<i.length;a++){var l=i[a];if(r.immediatePropagationStopped)break;l(r)}}var Oi=(function(){function r(i){n(this,r),this.options=void 0,this.types={},this.propagationStopped=!1,this.immediatePropagationStopped=!1,this.global=void 0,this.options=ae({},i||{})}return c(r,[{key:"fire",value:function(i){var a,l=this.global;(a=this.types[i.type])&&Ti(i,a),!i.propagationStopped&&l&&(a=l[i.type])&&Ti(i,a)}},{key:"on",value:function(i,a){var l=Me(i,a);for(i in l)this.types[i]=we(this.types[i]||[],l[i])}},{key:"off",value:function(i,a){var l=Me(i,a);for(i in l){var h=this.types[i];if(h&&h.length)for(var m=0,b=l[i];m<b.length;m++){var w=b[m],C=h.indexOf(w);C!==-1&&h.splice(C,1)}}}},{key:"getRect",value:function(i){return null}}]),r})(),Ji=(function(){function r(i){n(this,r),this.currentTarget=void 0,this.originalEvent=void 0,this.type=void 0,this.originalEvent=i,lt(this,i)}return c(r,[{key:"preventOriginalDefault",value:function(){this.originalEvent.preventDefault()}},{key:"stopPropagation",value:function(){this.originalEvent.stopPropagation()}},{key:"stopImmediatePropagation",value:function(){this.originalEvent.stopImmediatePropagation()}}]),r})();function et(r){return _.object(r)?{capture:!!r.capture,passive:!!r.passive}:{capture:!!r,passive:!1}}function bt(r,i){return r===i||(typeof r=="boolean"?!!i.capture===r&&!i.passive:!!r.capture==!!i.capture&&!!r.passive==!!i.passive)}var Gn={id:"events",install:function(r){var i,a=[],l={},h=[],m={add:b,remove:w,addDelegate:function(E,I,B,J,G){var te=et(G);if(!l[B]){l[B]=[];for(var fe=0;fe<h.length;fe++){var ce=h[fe];b(ce,B,C),b(ce,B,z,!0)}}var _e=l[B],Ie=N(_e,(function($e){return $e.selector===E&&$e.context===I}));Ie||(Ie={selector:E,context:I,listeners:[]},_e.push(Ie)),Ie.listeners.push({func:J,options:te})},removeDelegate:function(E,I,B,J,G){var te,fe=et(G),ce=l[B],_e=!1;if(ce)for(te=ce.length-1;te>=0;te--){var Ie=ce[te];if(Ie.selector===E&&Ie.context===I){for(var $e=Ie.listeners,Te=$e.length-1;Te>=0;Te--){var Be=$e[Te];if(Be.func===J&&bt(Be.options,fe)){$e.splice(Te,1),$e.length||(ce.splice(te,1),w(I,B,C),w(I,B,z,!0)),_e=!0;break}}if(_e)break}}},delegateListener:C,delegateUseCapture:z,delegatedEvents:l,documents:h,targets:a,supportsOptions:!1,supportsPassive:!1};function b(E,I,B,J){if(E.addEventListener){var G=et(J),te=N(a,(function(fe){return fe.eventTarget===E}));te||(te={eventTarget:E,events:{}},a.push(te)),te.events[I]||(te.events[I]=[]),N(te.events[I],(function(fe){return fe.func===B&&bt(fe.options,G)}))||(E.addEventListener(I,B,m.supportsOptions?G:G.capture),te.events[I].push({func:B,options:G}))}}function w(E,I,B,J){if(E.addEventListener&&E.removeEventListener){var G=Oe(a,(function(Et){return Et.eventTarget===E})),te=a[G];if(te&&te.events)if(I!=="all"){var fe=!1,ce=te.events[I];if(ce){if(B==="all"){for(var _e=ce.length-1;_e>=0;_e--){var Ie=ce[_e];w(E,I,Ie.func,Ie.options)}return}for(var $e=et(J),Te=0;Te<ce.length;Te++){var Be=ce[Te];if(Be.func===B&&bt(Be.options,$e)){E.removeEventListener(I,B,m.supportsOptions?$e:$e.capture),ce.splice(Te,1),ce.length===0&&(delete te.events[I],fe=!0);break}}}fe&&!Object.keys(te.events).length&&a.splice(G,1)}else for(I in te.events)te.events.hasOwnProperty(I)&&w(E,I,"all")}}function C(E,I){for(var B=et(I),J=new Ji(E),G=l[E.type],te=Y(E)[0],fe=te;_.element(fe);){for(var ce=0;ce<G.length;ce++){var _e=G[ce],Ie=_e.selector,$e=_e.context;if(ze(fe,Ie)&&le($e,te)&&le($e,fe)){var Te=_e.listeners;J.currentTarget=fe;for(var Be=0;Be<Te.length;Be++){var Et=Te[Be];bt(Et.options,B)&&Et.func(J)}}}fe=pe(fe)}}function z(E){return C(E,!0)}return(i=r.document)==null||i.createElement("div").addEventListener("test",null,{get capture(){return m.supportsOptions=!0},get passive(){return m.supportsPassive=!0}}),r.events=m,m}},lr={methodOrder:["simulationResume","mouseOrPen","hasPointer","idle"],search:function(r){for(var i=0,a=lr.methodOrder;i<a.length;i++){var l=a[i],h=lr[l](r);if(h)return h}return null},simulationResume:function(r){var i=r.pointerType,a=r.eventType,l=r.eventTarget,h=r.scope;if(!/down|start/i.test(a))return null;for(var m=0,b=h.interactions.list;m<b.length;m++){var w=b[m],C=l;if(w.simulation&&w.simulation.allowResume&&w.pointerType===i)for(;C;){if(C===w.element)return w;C=pe(C)}}return null},mouseOrPen:function(r){var i,a=r.pointerId,l=r.pointerType,h=r.eventType,m=r.scope;if(l!=="mouse"&&l!=="pen")return null;for(var b=0,w=m.interactions.list;b<w.length;b++){var C=w[b];if(C.pointerType===l){if(C.simulation&&!Pr(C,a))continue;if(C.interacting())return C;i||(i=C)}}if(i)return i;for(var z=0,E=m.interactions.list;z<E.length;z++){var I=E[z];if(!(I.pointerType!==l||/down/i.test(h)&&I.simulation))return I}return null},hasPointer:function(r){for(var i=r.pointerId,a=0,l=r.scope.interactions.list;a<l.length;a++){var h=l[a];if(Pr(h,i))return h}return null},idle:function(r){for(var i=r.pointerType,a=0,l=r.scope.interactions.list;a<l.length;a++){var h=l[a];if(h.pointers.length===1){var m=h.interactable;if(m&&(!m.options.gesture||!m.options.gesture.enabled))continue}else if(h.pointers.length>=2)continue;if(!h.interacting()&&i===h.pointerType)return h}return null}};function Pr(r,i){return r.pointers.some((function(a){return a.id===i}))}var Xn=lr,dr=["pointerDown","pointerMove","pointerUp","updatePointer","removePointer","windowBlur"];function Lr(r,i){return function(a){var l=i.interactions.list,h=q(a),m=Y(a),b=m[0],w=m[1],C=[];if(/^touch/.test(a.type)){i.prevTouchTime=i.now();for(var z=0,E=a.changedTouches;z<E.length;z++){var I=E[z],B={pointer:I,pointerId:Ot(I),pointerType:h,eventType:a.type,eventTarget:b,curEventTarget:w,scope:i},J=Rr(B);C.push([B.pointer,B.eventTarget,B.curEventTarget,J])}}else{var G=!1;if(!K.supportsPointerEvent&&/mouse/.test(a.type)){for(var te=0;te<l.length&&!G;te++)G=l[te].pointerType!=="mouse"&&l[te].pointerIsDown;G=G||i.now()-i.prevTouchTime<500||a.timeStamp===0}if(!G){var fe={pointer:a,pointerId:Ot(a),pointerType:h,eventType:a.type,curEventTarget:w,eventTarget:b,scope:i},ce=Rr(fe);C.push([fe.pointer,fe.eventTarget,fe.curEventTarget,ce])}}for(var _e=0;_e<C.length;_e++){var Ie=C[_e],$e=Ie[0],Te=Ie[1],Be=Ie[2];Ie[3][r]($e,a,Te,Be)}}}function Rr(r){var i=r.pointerType,a=r.scope,l={interaction:Xn.search(r),searchDetails:r};return a.fire("interactions:find",l),l.interaction||a.interactions.new({pointerType:i})}function ur(r,i){var a=r.doc,l=r.scope,h=r.options,m=l.interactions.docEvents,b=l.events,w=b[i];for(var C in l.browser.isIOS&&!h.events&&(h.events={passive:!1}),b.delegatedEvents)w(a,C,b.delegateListener),w(a,C,b.delegateUseCapture,!0);for(var z=h&&h.events,E=0;E<m.length;E++){var I=m[E];w(a,I.type,I.listener,z)}}var Jn={id:"core/interactions",install:function(r){for(var i={},a=0;a<dr.length;a++){var l=dr[a];i[l]=Lr(l,r)}var h,m=K.pEventTypes;function b(){for(var w=0,C=r.interactions.list;w<C.length;w++){var z=C[w];if(z.pointerIsDown&&z.pointerType==="touch"&&!z._interacting)for(var E=function(){var J=B[I];r.documents.some((function(G){return le(G.doc,J.downTarget)}))||z.removePointer(J.pointer,J.event)},I=0,B=z.pointers;I<B.length;I++)E()}}(h=F.PointerEvent?[{type:m.down,listener:b},{type:m.down,listener:i.pointerDown},{type:m.move,listener:i.pointerMove},{type:m.up,listener:i.pointerUp},{type:m.cancel,listener:i.pointerUp}]:[{type:"mousedown",listener:i.pointerDown},{type:"mousemove",listener:i.pointerMove},{type:"mouseup",listener:i.pointerUp},{type:"touchstart",listener:b},{type:"touchstart",listener:i.pointerDown},{type:"touchmove",listener:i.pointerMove},{type:"touchend",listener:i.pointerUp},{type:"touchcancel",listener:i.pointerUp}]).push({type:"blur",listener:function(w){for(var C=0,z=r.interactions.list;C<z.length;C++)z[C].documentBlur(w)}}),r.prevTouchTime=0,r.Interaction=(function(w){d(z,w);var C=y(z);function z(){return n(this,z),C.apply(this,arguments)}return c(z,[{key:"pointerMoveTolerance",get:function(){return r.interactions.pointerMoveTolerance},set:function(E){r.interactions.pointerMoveTolerance=E}},{key:"_now",value:function(){return r.now()}}]),z})(Ui),r.interactions={list:[],new:function(w){w.scopeFire=function(z,E){return r.fire(z,E)};var C=new r.Interaction(w);return r.interactions.list.push(C),C},listeners:i,docEvents:h,pointerMoveTolerance:1},r.usePlugin(ji)},listeners:{"scope:add-document":function(r){return ur(r,"add")},"scope:remove-document":function(r){return ur(r,"remove")},"interactable:unset":function(r,i){for(var a=r.interactable,l=i.interactions.list.length-1;l>=0;l--){var h=i.interactions.list[l];h.interactable===a&&(h.stop(),i.fire("interactions:destroy",{interaction:h}),h.destroy(),i.interactions.list.length>2&&i.interactions.list.splice(l,1))}}},onDocSignal:ur,doOnInteractions:Lr,methodNames:dr},Qn=Jn,Xt=(function(r){return r[r.On=0]="On",r[r.Off=1]="Off",r})(Xt||{}),Zn=(function(){function r(i,a,l,h){n(this,r),this.target=void 0,this.options=void 0,this._actions=void 0,this.events=new Oi,this._context=void 0,this._win=void 0,this._doc=void 0,this._scopeEvents=void 0,this._actions=a.actions,this.target=i,this._context=a.context||l,this._win=k(ot(i)?this._context:i),this._doc=this._win.document,this._scopeEvents=h,this.set(a)}return c(r,[{key:"_defaults",get:function(){return{base:{},perAction:{},actions:{}}}},{key:"setOnEvents",value:function(i,a){return _.func(a.onstart)&&this.on("".concat(i,"start"),a.onstart),_.func(a.onmove)&&this.on("".concat(i,"move"),a.onmove),_.func(a.onend)&&this.on("".concat(i,"end"),a.onend),_.func(a.oninertiastart)&&this.on("".concat(i,"inertiastart"),a.oninertiastart),this}},{key:"updatePerActionListeners",value:function(i,a,l){var h,m=this,b=(h=this._actions.map[i])==null?void 0:h.filterEventType,w=function(C){return(b==null||b(C))&&Gt(C,m._actions)};(_.array(a)||_.object(a))&&this._onOff(Xt.Off,i,a,void 0,w),(_.array(l)||_.object(l))&&this._onOff(Xt.On,i,l,void 0,w)}},{key:"setPerAction",value:function(i,a){var l=this._defaults;for(var h in a){var m=h,b=this.options[i],w=a[m];m==="listeners"&&this.updatePerActionListeners(i,b.listeners,w),_.array(w)?b[m]=de(w):_.plainObject(w)?(b[m]=ae(b[m]||{},Yt(w)),_.object(l.perAction[m])&&"enabled"in l.perAction[m]&&(b[m].enabled=w.enabled!==!1)):_.bool(w)&&_.object(l.perAction[m])?b[m].enabled=w:b[m]=w}}},{key:"getRect",value:function(i){return i=i||(_.element(this.target)?this.target:null),_.string(this.target)&&(i=i||this._context.querySelector(this.target)),ct(i)}},{key:"rectChecker",value:function(i){var a=this;return _.func(i)?(this.getRect=function(l){var h=ae({},i.apply(a,l));return"width"in h||(h.width=h.right-h.left,h.height=h.bottom-h.top),h},this):i===null?(delete this.getRect,this):this.getRect}},{key:"_backCompatOption",value:function(i,a){if(ot(a)||_.object(a)){for(var l in this.options[i]=a,this._actions.map)this.options[l][i]=a;return this}return this.options[i]}},{key:"origin",value:function(i){return this._backCompatOption("origin",i)}},{key:"deltaSource",value:function(i){return i==="page"||i==="client"?(this.options.deltaSource=i,this):this.options.deltaSource}},{key:"getAllElements",value:function(){var i=this.target;return _.string(i)?Array.from(this._context.querySelectorAll(i)):_.func(i)&&i.getAllElements?i.getAllElements():_.element(i)?[i]:[]}},{key:"context",value:function(){return this._context}},{key:"inContext",value:function(i){return this._context===i.ownerDocument||le(this._context,i)}},{key:"testIgnoreAllow",value:function(i,a,l){return!this.testIgnore(i.ignoreFrom,a,l)&&this.testAllow(i.allowFrom,a,l)}},{key:"testAllow",value:function(i,a,l){return!i||!!_.element(l)&&(_.string(i)?je(l,i,a):!!_.element(i)&&le(i,l))}},{key:"testIgnore",value:function(i,a,l){return!(!i||!_.element(l))&&(_.string(i)?je(l,i,a):!!_.element(i)&&le(i,l))}},{key:"fire",value:function(i){return this.events.fire(i),this}},{key:"_onOff",value:function(i,a,l,h,m){_.object(a)&&!_.array(a)&&(h=l,l=null);var b=Me(a,l,m);for(var w in b){w==="wheel"&&(w=K.wheelEvent);for(var C=0,z=b[w];C<z.length;C++){var E=z[C];Gt(w,this._actions)?this.events[i===Xt.On?"on":"off"](w,E):_.string(this.target)?this._scopeEvents[i===Xt.On?"addDelegate":"removeDelegate"](this.target,this._context,w,E,h):this._scopeEvents[i===Xt.On?"add":"remove"](this.target,w,E,h)}}return this}},{key:"on",value:function(i,a,l){return this._onOff(Xt.On,i,a,l)}},{key:"off",value:function(i,a,l){return this._onOff(Xt.Off,i,a,l)}},{key:"set",value:function(i){var a=this._defaults;for(var l in _.object(i)||(i={}),this.options=Yt(a.base),this._actions.methodDict){var h=l,m=this._actions.methodDict[h];this.options[h]={},this.setPerAction(h,ae(ae({},a.perAction),a.actions[h])),this[m](i[h])}for(var b in i)b!=="getRect"?_.func(this[b])&&this[b](i[b]):this.rectChecker(i.getRect);return this}},{key:"unset",value:function(){if(_.string(this.target))for(var i in this._scopeEvents.delegatedEvents)for(var a=this._scopeEvents.delegatedEvents[i],l=a.length-1;l>=0;l--){var h=a[l],m=h.selector,b=h.context,w=h.listeners;m===this.target&&b===this._context&&a.splice(l,1);for(var C=w.length-1;C>=0;C--)this._scopeEvents.removeDelegate(this.target,this._context,i,w[C][0],w[C][1])}else this._scopeEvents.remove(this.target,"all")}}]),r})(),ea=(function(){function r(i){var a=this;n(this,r),this.list=[],this.selectorMap={},this.scope=void 0,this.scope=i,i.addListeners({"interactable:unset":function(l){var h=l.interactable,m=h.target,b=_.string(m)?a.selectorMap[m]:m[a.scope.id],w=Oe(b,(function(C){return C===h}));b.splice(w,1)}})}return c(r,[{key:"new",value:function(i,a){a=ae(a||{},{actions:this.scope.actions});var l=new this.scope.Interactable(i,a,this.scope.document,this.scope.events);return this.scope.addDocument(l._doc),this.list.push(l),_.string(i)?(this.selectorMap[i]||(this.selectorMap[i]=[]),this.selectorMap[i].push(l)):(l.target[this.scope.id]||Object.defineProperty(i,this.scope.id,{value:[],configurable:!0}),i[this.scope.id].push(l)),this.scope.fire("interactable:new",{target:i,options:a,interactable:l,win:this.scope._win}),l}},{key:"getExisting",value:function(i,a){var l=a&&a.context||this.scope.document,h=_.string(i),m=h?this.selectorMap[i]:i[this.scope.id];if(m)return N(m,(function(b){return b._context===l&&(h||b.inContext(i))}))}},{key:"forEachMatch",value:function(i,a){for(var l=0,h=this.list;l<h.length;l++){var m=h[l],b=void 0;if((_.string(m.target)?_.element(i)&&ze(i,m.target):i===m.target)&&m.inContext(i)&&(b=a(m)),b!==void 0)return b}}}]),r})(),ta=(function(){function r(){var i=this;n(this,r),this.id="__interact_scope_".concat(Math.floor(100*Math.random())),this.isInitialized=!1,this.listenerMaps=[],this.browser=K,this.defaults=Yt(xi),this.Eventable=Oi,this.actions={map:{},phases:{start:!0,move:!0,end:!0},methodDict:{},phaselessTypes:{}},this.interactStatic=(function(l){var h=function m(b,w){var C=l.interactables.getExisting(b,w);return C||((C=l.interactables.new(b,w)).events.global=m.globalEvents),C};return h.getPointerAverage=Rt,h.getTouchBBox=pt,h.getTouchDistance=Dt,h.getTouchAngle=be,h.getElementRect=ct,h.getElementClientRect=Qe,h.matchesSelector=ze,h.closest=Ke,h.globalEvents={},h.version="1.10.27",h.scope=l,h.use=function(m,b){return this.scope.usePlugin(m,b),this},h.isSet=function(m,b){return!!this.scope.interactables.get(m,b&&b.context)},h.on=ye((function(m,b,w){if(_.string(m)&&m.search(" ")!==-1&&(m=m.trim().split(/ +/)),_.array(m)){for(var C=0,z=m;C<z.length;C++){var E=z[C];this.on(E,b,w)}return this}if(_.object(m)){for(var I in m)this.on(I,m[I],b);return this}return Gt(m,this.scope.actions)?this.globalEvents[m]?this.globalEvents[m].push(b):this.globalEvents[m]=[b]:this.scope.events.add(this.scope.document,m,b,{options:w}),this}),"The interact.on() method is being deprecated"),h.off=ye((function(m,b,w){if(_.string(m)&&m.search(" ")!==-1&&(m=m.trim().split(/ +/)),_.array(m)){for(var C=0,z=m;C<z.length;C++){var E=z[C];this.off(E,b,w)}return this}if(_.object(m)){for(var I in m)this.off(I,m[I],b);return this}var B;return Gt(m,this.scope.actions)?m in this.globalEvents&&(B=this.globalEvents[m].indexOf(b))!==-1&&this.globalEvents[m].splice(B,1):this.scope.events.remove(this.scope.document,m,b,w),this}),"The interact.off() method is being deprecated"),h.debug=function(){return this.scope},h.supportsTouch=function(){return K.supportsTouch},h.supportsPointerEvent=function(){return K.supportsPointerEvent},h.stop=function(){for(var m=0,b=this.scope.interactions.list;m<b.length;m++)b[m].stop();return this},h.pointerMoveTolerance=function(m){return _.number(m)?(this.scope.interactions.pointerMoveTolerance=m,this):this.scope.interactions.pointerMoveTolerance},h.addDocument=function(m,b){this.scope.addDocument(m,b)},h.removeDocument=function(m){this.scope.removeDocument(m)},h})(this),this.InteractEvent=ci,this.Interactable=void 0,this.interactables=new ea(this),this._win=void 0,this.document=void 0,this.window=void 0,this.documents=[],this._plugins={list:[],map:{}},this.onWindowUnload=function(l){return i.removeDocument(l.target)};var a=this;this.Interactable=(function(l){d(m,l);var h=y(m);function m(){return n(this,m),h.apply(this,arguments)}return c(m,[{key:"_defaults",get:function(){return a.defaults}},{key:"set",value:function(b){return g(u(m.prototype),"set",this).call(this,b),a.fire("interactable:set",{options:b,interactable:this}),this}},{key:"unset",value:function(){g(u(m.prototype),"unset",this).call(this);var b=a.interactables.list.indexOf(this);b<0||(a.interactables.list.splice(b,1),a.fire("interactable:unset",{interactable:this}))}}]),m})(Zn)}return c(r,[{key:"addListeners",value:function(i,a){this.listenerMaps.push({id:a,map:i})}},{key:"fire",value:function(i,a){for(var l=0,h=this.listenerMaps;l<h.length;l++){var m=h[l].map[i];if(m&&m(a,this,i)===!1)return!1}}},{key:"init",value:function(i){return this.isInitialized?this:(function(a,l){return a.isInitialized=!0,_.window(l)&&L(l),F.init(l),K.init(l),Q.init(l),a.window=l,a.document=l.document,a.usePlugin(Qn),a.usePlugin(Gn),a})(this,i)}},{key:"pluginIsInstalled",value:function(i){var a=i.id;return a?!!this._plugins.map[a]:this._plugins.list.indexOf(i)!==-1}},{key:"usePlugin",value:function(i,a){if(!this.isInitialized)return this;if(this.pluginIsInstalled(i))return this;if(i.id&&(this._plugins.map[i.id]=i),this._plugins.list.push(i),i.install&&i.install(this,a),i.listeners&&i.before){for(var l=0,h=this.listenerMaps.length,m=i.before.reduce((function(w,C){return w[C]=!0,w[Ir(C)]=!0,w}),{});l<h;l++){var b=this.listenerMaps[l].id;if(b&&(m[b]||m[Ir(b)]))break}this.listenerMaps.splice(l,0,{id:i.id,map:i.listeners})}else i.listeners&&this.listenerMaps.push({id:i.id,map:i.listeners});return this}},{key:"addDocument",value:function(i,a){if(this.getDocIndex(i)!==-1)return!1;var l=k(i);a=a?ae({},a):{},this.documents.push({doc:i,options:a}),this.events.documents.push(i),i!==this.document&&this.events.add(l,"unload",this.onWindowUnload),this.fire("scope:add-document",{doc:i,window:l,scope:this,options:a})}},{key:"removeDocument",value:function(i){var a=this.getDocIndex(i),l=k(i),h=this.documents[a].options;this.events.remove(l,"unload",this.onWindowUnload),this.documents.splice(a,1),this.events.documents.splice(a,1),this.fire("scope:remove-document",{doc:i,window:l,scope:this,options:h})}},{key:"getDocIndex",value:function(i){for(var a=0;a<this.documents.length;a++)if(this.documents[a].doc===i)return a;return-1}},{key:"getDocOptions",value:function(i){var a=this.getDocIndex(i);return a===-1?null:this.documents[a].options}},{key:"now",value:function(){return(this.window.Date||Date).now()}}]),r})();function Ir(r){return r&&r.replace(/\/.*$/,"")}var Dr=new ta,Ct=Dr.interactStatic,ia=typeof globalThis!="undefined"?globalThis:window;Dr.init(ia);var ra=Object.freeze({__proto__:null,edgeTarget:function(){},elements:function(){},grid:function(r){var i=[["x","y"],["left","top"],["right","bottom"],["width","height"]].filter((function(l){var h=l[0],m=l[1];return h in r||m in r})),a=function(l,h){for(var m=r.range,b=r.limits,w=b===void 0?{left:-1/0,right:1/0,top:-1/0,bottom:1/0}:b,C=r.offset,z=C===void 0?{x:0,y:0}:C,E={range:m,grid:r,x:null,y:null},I=0;I<i.length;I++){var B=i[I],J=B[0],G=B[1],te=Math.round((l-z.x)/r[J]),fe=Math.round((h-z.y)/r[G]);E[J]=Math.max(w.left,Math.min(w.right,te*r[J]+z.x)),E[G]=Math.max(w.top,Math.min(w.bottom,fe*r[G]+z.y))}return E};return a.grid=r,a.coordFields=i,a}}),na={id:"snappers",install:function(r){var i=r.interactStatic;i.snappers=ae(i.snappers||{},ra),i.createSnapGrid=i.snappers.grid}},aa=na,oa={start:function(r){var i=r.state,a=r.rect,l=r.edges,h=r.pageCoords,m=i.options,b=m.ratio,w=m.enabled,C=i.options,z=C.equalDelta,E=C.modifiers;b==="preserve"&&(b=a.width/a.height),i.startCoords=ae({},h),i.startRect=ae({},a),i.ratio=b,i.equalDelta=z;var I=i.linkedEdges={top:l.top||l.left&&!l.bottom,left:l.left||l.top&&!l.right,bottom:l.bottom||l.right&&!l.top,right:l.right||l.bottom&&!l.left};if(i.xIsPrimaryAxis=!(!l.left&&!l.right),i.equalDelta){var B=(I.left?1:-1)*(I.top?1:-1);i.edgeSign={x:B,y:B}}else i.edgeSign={x:I.left?-1:1,y:I.top?-1:1};if(w!==!1&&ae(l,I),E!=null&&E.length){var J=new bi(r.interaction);J.copyFrom(r.interaction.modification),J.prepareStates(E),i.subModification=J,J.startAll(p({},r))}},set:function(r){var i=r.state,a=r.rect,l=r.coords,h=i.linkedEdges,m=ae({},l),b=i.equalDelta?sa:ca;if(ae(r.edges,h),b(i,i.xIsPrimaryAxis,l,a),!i.subModification)return null;var w=ae({},a);Ye(h,w,{x:l.x-m.x,y:l.y-m.y});var C=i.subModification.setAll(p(p({},r),{},{rect:w,edges:h,pageCoords:l,prevCoords:l,prevRect:w})),z=C.delta;return C.changed&&(b(i,Math.abs(z.x)>Math.abs(z.y),C.coords,C.rect),ae(l,C.coords)),C.eventProps},defaults:{ratio:"preserve",equalDelta:!1,modifiers:[],enabled:!1}};function sa(r,i,a){var l=r.startCoords,h=r.edgeSign;i?a.y=l.y+(a.x-l.x)*h.y:a.x=l.x+(a.y-l.y)*h.x}function ca(r,i,a,l){var h=r.startRect,m=r.startCoords,b=r.ratio,w=r.edgeSign;if(i){var C=l.width/b;a.y=m.y+(C-h.height)*w.y}else{var z=l.height*b;a.x=m.x+(z-h.width)*w.x}}var la=Ht(oa,"aspectRatio"),Fr=function(){};Fr._defaults={};var Qi=Fr;function ri(r,i,a){return _.func(r)?st(r,i.interactable,i.element,[a.x,a.y,i]):st(r,i.interactable,i.element)}var Zi={start:function(r){var i=r.rect,a=r.startOffset,l=r.state,h=r.interaction,m=r.pageCoords,b=l.options,w=b.elementRect,C=ae({left:0,top:0,right:0,bottom:0},b.offset||{});if(i&&w){var z=ri(b.restriction,h,m);if(z){var E=z.right-z.left-i.width,I=z.bottom-z.top-i.height;E<0&&(C.left+=E,C.right+=E),I<0&&(C.top+=I,C.bottom+=I)}C.left+=a.left-i.width*w.left,C.top+=a.top-i.height*w.top,C.right+=a.right-i.width*(1-w.right),C.bottom+=a.bottom-i.height*(1-w.bottom)}l.offset=C},set:function(r){var i=r.coords,a=r.interaction,l=r.state,h=l.options,m=l.offset,b=ri(h.restriction,a,i);if(b){var w=(function(C){return!C||"left"in C&&"top"in C||((C=ae({},C)).left=C.x||0,C.top=C.y||0,C.right=C.right||C.left+C.width,C.bottom=C.bottom||C.top+C.height),C})(b);i.x=Math.max(Math.min(w.right-m.right,i.x),w.left+m.left),i.y=Math.max(Math.min(w.bottom-m.bottom,i.y),w.top+m.top)}},defaults:{restriction:null,elementRect:null,offset:null,endOnly:!1,enabled:!1}},da=Ht(Zi,"restrict"),Br={top:1/0,left:1/0,bottom:-1/0,right:-1/0},qr={top:-1/0,left:-1/0,bottom:1/0,right:1/0};function Nr(r,i){for(var a=0,l=["top","left","bottom","right"];a<l.length;a++){var h=l[a];h in r||(r[h]=i[h])}return r}var zi={noInner:Br,noOuter:qr,start:function(r){var i,a=r.interaction,l=r.startOffset,h=r.state,m=h.options;m&&(i=Le(ri(m.offset,a,a.coords.start.page))),i=i||{x:0,y:0},h.offset={top:i.y+l.top,left:i.x+l.left,bottom:i.y-l.bottom,right:i.x-l.right}},set:function(r){var i=r.coords,a=r.edges,l=r.interaction,h=r.state,m=h.offset,b=h.options;if(a){var w=ae({},i),C=ri(b.inner,l,w)||{},z=ri(b.outer,l,w)||{};Nr(C,Br),Nr(z,qr),a.top?i.y=Math.min(Math.max(z.top+m.top,w.y),C.top+m.top):a.bottom&&(i.y=Math.max(Math.min(z.bottom+m.bottom,w.y),C.bottom+m.bottom)),a.left?i.x=Math.min(Math.max(z.left+m.left,w.x),C.left+m.left):a.right&&(i.x=Math.max(Math.min(z.right+m.right,w.x),C.right+m.right))}},defaults:{inner:null,outer:null,offset:null,endOnly:!1,enabled:!1}},ua=Ht(zi,"restrictEdges"),pa=ae({get elementRect(){return{top:0,left:0,bottom:1,right:1}},set elementRect(r){}},Zi.defaults),ha=Ht({start:Zi.start,set:Zi.set,defaults:pa},"restrictRect"),fa={width:-1/0,height:-1/0},ga={width:1/0,height:1/0},ma=Ht({start:function(r){return zi.start(r)},set:function(r){var i=r.interaction,a=r.state,l=r.rect,h=r.edges,m=a.options;if(h){var b=oe(ri(m.min,i,r.coords))||fa,w=oe(ri(m.max,i,r.coords))||ga;a.options={endOnly:m.endOnly,inner:ae({},zi.noInner),outer:ae({},zi.noOuter)},h.top?(a.options.inner.top=l.bottom-b.height,a.options.outer.top=l.bottom-w.height):h.bottom&&(a.options.inner.bottom=l.top+b.height,a.options.outer.bottom=l.top+w.height),h.left?(a.options.inner.left=l.right-b.width,a.options.outer.left=l.right-w.width):h.right&&(a.options.inner.right=l.left+b.width,a.options.outer.right=l.left+w.width),zi.set(r),a.options=m}},defaults:{min:null,max:null,endOnly:!1,enabled:!1}},"restrictSize"),pr={start:function(r){var i,a=r.interaction,l=r.interactable,h=r.element,m=r.rect,b=r.state,w=r.startOffset,C=b.options,z=C.offsetWithOrigin?(function(B){var J=B.interaction.element,G=Le(st(B.state.options.origin,null,null,[J])),te=G||Se(B.interactable,J,B.interaction.prepared.name);return te})(r):{x:0,y:0};if(C.offset==="startCoords")i={x:a.coords.start.page.x,y:a.coords.start.page.y};else{var E=st(C.offset,l,h,[a]);(i=Le(E)||{x:0,y:0}).x+=z.x,i.y+=z.y}var I=C.relativePoints;b.offsets=m&&I&&I.length?I.map((function(B,J){return{index:J,relativePoint:B,x:w.left-m.width*B.x+i.x,y:w.top-m.height*B.y+i.y}})):[{index:0,relativePoint:null,x:i.x,y:i.y}]},set:function(r){var i=r.interaction,a=r.coords,l=r.state,h=l.options,m=l.offsets,b=Se(i.interactable,i.element,i.prepared.name),w=ae({},a),C=[];h.offsetWithOrigin||(w.x-=b.x,w.y-=b.y);for(var z=0,E=m;z<E.length;z++)for(var I=E[z],B=w.x-I.x,J=w.y-I.y,G=0,te=h.targets.length;G<te;G++){var fe=h.targets[G],ce=void 0;(ce=_.func(fe)?fe(B,J,i._proxy,I,G):fe)&&C.push({x:(_.number(ce.x)?ce.x:B)+I.x,y:(_.number(ce.y)?ce.y:J)+I.y,range:_.number(ce.range)?ce.range:h.range,source:fe,index:G,offset:I})}for(var _e={target:null,inRange:!1,distance:0,range:0,delta:{x:0,y:0}},Ie=0;Ie<C.length;Ie++){var $e=C[Ie],Te=$e.range,Be=$e.x-w.x,Et=$e.y-w.y,at=mt(Be,Et),It=at<=Te;Te===1/0&&_e.inRange&&_e.range!==1/0&&(It=!1),_e.target&&!(It?_e.inRange&&Te!==1/0?at/Te<_e.distance/_e.range:Te===1/0&&_e.range!==1/0||at<_e.distance:!_e.inRange&&at<_e.distance)||(_e.target=$e,_e.distance=at,_e.range=Te,_e.inRange=It,_e.delta.x=Be,_e.delta.y=Et)}return _e.inRange&&(a.x=_e.target.x,a.y=_e.target.y),l.closest=_e,_e},defaults:{range:1/0,targets:null,offset:null,offsetWithOrigin:!0,origin:null,relativePoints:null,endOnly:!1,enabled:!1}},ya=Ht(pr,"snap"),er={start:function(r){var i=r.state,a=r.edges,l=i.options;if(!a)return null;r.state={options:{targets:null,relativePoints:[{x:a.left?0:1,y:a.top?0:1}],offset:l.offset||"self",origin:{x:0,y:0},range:l.range}},i.targetFields=i.targetFields||[["width","height"],["x","y"]],pr.start(r),i.offsets=r.state.offsets,r.state=i},set:function(r){var i=r.interaction,a=r.state,l=r.coords,h=a.options,m=a.offsets,b={x:l.x-m[0].x,y:l.y-m[0].y};a.options=ae({},h),a.options.targets=[];for(var w=0,C=h.targets||[];w<C.length;w++){var z=C[w],E=void 0;if(E=_.func(z)?z(b.x,b.y,i):z){for(var I=0,B=a.targetFields;I<B.length;I++){var J=B[I],G=J[0],te=J[1];if(G in E||te in E){E.x=E[G],E.y=E[te];break}}a.options.targets.push(E)}}var fe=pr.set(r);return a.options=h,fe},defaults:{range:1/0,targets:null,offset:null,endOnly:!1,enabled:!1}},va=Ht(er,"snapSize"),hr={aspectRatio:la,restrictEdges:ua,restrict:da,restrictRect:ha,restrictSize:ma,snapEdges:Ht({start:function(r){var i=r.edges;return i?(r.state.targetFields=r.state.targetFields||[[i.left?"left":"right",i.top?"top":"bottom"]],er.start(r)):null},set:er.set,defaults:ae(Yt(er.defaults),{targets:void 0,range:void 0,offset:{x:0,y:0}})},"snapEdges"),snap:ya,snapSize:va,spring:Qi,avoid:Qi,transform:Qi,rubberband:Qi},ba={id:"modifiers",install:function(r){var i=r.interactStatic;for(var a in r.usePlugin(_i),r.usePlugin(aa),i.modifiers=hr,hr){var l=hr[a],h=l._defaults,m=l._methods;h._methods=m,r.defaults.perAction[a]=h}}},_a=ba,Hr=(function(r){d(a,r);var i=y(a);function a(l,h,m,b,w,C){var z;if(n(this,a),lt(v(z=i.call(this,w)),m),m!==h&&lt(v(z),h),z.timeStamp=C,z.originalEvent=m,z.type=l,z.pointerId=Ot(h),z.pointerType=q(h),z.target=b,z.currentTarget=null,l==="tap"){var E=w.getPointerIndex(h);z.dt=z.timeStamp-w.pointers[E].downTime;var I=z.timeStamp-w.tapTime;z.double=!!w.prevTap&&w.prevTap.type!=="doubletap"&&w.prevTap.target===z.target&&I<500}else l==="doubletap"&&(z.dt=h.timeStamp-w.tapTime,z.double=!0);return z}return c(a,[{key:"_subtractOrigin",value:function(l){var h=l.x,m=l.y;return this.pageX-=h,this.pageY-=m,this.clientX-=h,this.clientY-=m,this}},{key:"_addOrigin",value:function(l){var h=l.x,m=l.y;return this.pageX+=h,this.pageY+=m,this.clientX+=h,this.clientY+=m,this}},{key:"preventDefault",value:function(){this.originalEvent.preventDefault()}}]),a})(ue),Mi={id:"pointer-events/base",before:["inertia","modifiers","auto-start","actions"],install:function(r){r.pointerEvents=Mi,r.defaults.actions.pointerEvents=Mi.defaults,ae(r.actions.phaselessTypes,Mi.types)},listeners:{"interactions:new":function(r){var i=r.interaction;i.prevTap=null,i.tapTime=0},"interactions:update-pointer":function(r){var i=r.down,a=r.pointerInfo;!i&&a.hold||(a.hold={duration:1/0,timeout:null})},"interactions:move":function(r,i){var a=r.interaction,l=r.pointer,h=r.event,m=r.eventTarget;r.duplicate||a.pointerIsDown&&!a.pointerWasMoved||(a.pointerIsDown&&fr(r),Jt({interaction:a,pointer:l,event:h,eventTarget:m,type:"move"},i))},"interactions:down":function(r,i){(function(a,l){for(var h=a.interaction,m=a.pointer,b=a.event,w=a.eventTarget,C=a.pointerIndex,z=h.pointers[C].hold,E=dt(w),I={interaction:h,pointer:m,event:b,eventTarget:w,type:"hold",targets:[],path:E,node:null},B=0;B<E.length;B++){var J=E[B];I.node=J,l.fire("pointerEvents:collect-targets",I)}if(I.targets.length){for(var G=1/0,te=0,fe=I.targets;te<fe.length;te++){var ce=fe[te].eventable.options.holdDuration;ce<G&&(G=ce)}z.duration=G,z.timeout=setTimeout((function(){Jt({interaction:h,eventTarget:w,pointer:m,event:b,type:"hold"},l)}),G)}})(r,i),Jt(r,i)},"interactions:up":function(r,i){fr(r),Jt(r,i),(function(a,l){var h=a.interaction,m=a.pointer,b=a.event,w=a.eventTarget;h.pointerWasMoved||Jt({interaction:h,eventTarget:w,pointer:m,event:b,type:"tap"},l)})(r,i)},"interactions:cancel":function(r,i){fr(r),Jt(r,i)}},PointerEvent:Hr,fire:Jt,collectEventTargets:jr,defaults:{holdDuration:600,ignoreFrom:null,allowFrom:null,origin:{x:0,y:0}},types:{down:!0,move:!0,up:!0,cancel:!0,tap:!0,doubletap:!0,hold:!0}};function Jt(r,i){var a=r.interaction,l=r.pointer,h=r.event,m=r.eventTarget,b=r.type,w=r.targets,C=w===void 0?jr(r,i):w,z=new Hr(b,l,h,m,a,i.now());i.fire("pointerEvents:new",{pointerEvent:z});for(var E={interaction:a,pointer:l,event:h,eventTarget:m,targets:C,type:b,pointerEvent:z},I=0;I<C.length;I++){var B=C[I];for(var J in B.props||{})z[J]=B.props[J];var G=Se(B.eventable,B.node);if(z._subtractOrigin(G),z.eventable=B.eventable,z.currentTarget=B.node,B.eventable.fire(z),z._addOrigin(G),z.immediatePropagationStopped||z.propagationStopped&&I+1<C.length&&C[I+1].node!==z.currentTarget)break}if(i.fire("pointerEvents:fired",E),b==="tap"){var te=z.double?Jt({interaction:a,pointer:l,event:h,eventTarget:m,type:"doubletap"},i):z;a.prevTap=te,a.tapTime=te.timeStamp}return z}function jr(r,i){var a=r.interaction,l=r.pointer,h=r.event,m=r.eventTarget,b=r.type,w=a.getPointerIndex(l),C=a.pointers[w];if(b==="tap"&&(a.pointerWasMoved||!C||C.downTarget!==m))return[];for(var z=dt(m),E={interaction:a,pointer:l,event:h,eventTarget:m,type:b,path:z,targets:[],node:null},I=0;I<z.length;I++){var B=z[I];E.node=B,i.fire("pointerEvents:collect-targets",E)}return b==="hold"&&(E.targets=E.targets.filter((function(J){var G,te;return J.eventable.options.holdDuration===((G=a.pointers[w])==null||(te=G.hold)==null?void 0:te.duration)}))),E.targets}function fr(r){var i=r.interaction,a=r.pointerIndex,l=i.pointers[a].hold;l&&l.timeout&&(clearTimeout(l.timeout),l.timeout=null)}var xa=Object.freeze({__proto__:null,default:Mi});function wa(r){var i=r.interaction;i.holdIntervalHandle&&(clearInterval(i.holdIntervalHandle),i.holdIntervalHandle=null)}var Sa={id:"pointer-events/holdRepeat",install:function(r){r.usePlugin(Mi);var i=r.pointerEvents;i.defaults.holdRepeatInterval=0,i.types.holdrepeat=r.actions.phaselessTypes.holdrepeat=!0},listeners:["move","up","cancel","endall"].reduce((function(r,i){return r["pointerEvents:".concat(i)]=wa,r}),{"pointerEvents:new":function(r){var i=r.pointerEvent;i.type==="hold"&&(i.count=(i.count||0)+1)},"pointerEvents:fired":function(r,i){var a=r.interaction,l=r.pointerEvent,h=r.eventTarget,m=r.targets;if(l.type==="hold"&&m.length){var b=m[0].eventable.options.holdRepeatInterval;b<=0||(a.holdIntervalHandle=setTimeout((function(){i.pointerEvents.fire({interaction:a,eventTarget:h,type:"hold",pointer:l,event:l},i)}),b))}}})},ka=Sa,Ca={id:"pointer-events/interactableTargets",install:function(r){var i=r.Interactable;i.prototype.pointerEvents=function(l){return ae(this.events.options,l),this};var a=i.prototype._backCompatOption;i.prototype._backCompatOption=function(l,h){var m=a.call(this,l,h);return m===this&&(this.events.options[l]=h),m}},listeners:{"pointerEvents:collect-targets":function(r,i){var a=r.targets,l=r.node,h=r.type,m=r.eventTarget;i.interactables.forEachMatch(l,(function(b){var w=b.events,C=w.options;w.types[h]&&w.types[h].length&&b.testIgnoreAllow(C,l,m)&&a.push({node:l,eventable:w,props:{interactable:b}})}))},"interactable:new":function(r){var i=r.interactable;i.events.getRect=function(a){return i.getRect(a)}},"interactable:set":function(r,i){var a=r.interactable,l=r.options;ae(a.events.options,i.pointerEvents.defaults),ae(a.events.options,l.pointerEvents||{})}}},Ea=Ca,Aa={id:"pointer-events",install:function(r){r.usePlugin(xa),r.usePlugin(ka),r.usePlugin(Ea)}},Ta=Aa,Oa={id:"reflow",install:function(r){var i=r.Interactable;r.actions.phases.reflow=!0,i.prototype.reflow=function(a){return(function(l,h,m){for(var b=l.getAllElements(),w=m.window.Promise,C=w?[]:null,z=function(){var I=b[E],B=l.getRect(I);if(!B)return 1;var J,G=N(m.interactions.list,(function(ce){return ce.interacting()&&ce.interactable===l&&ce.element===I&&ce.prepared.name===h.name}));if(G)G.move(),C&&(J=G._reflowPromise||new w((function(ce){G._reflowResolve=ce})));else{var te=oe(B),fe=(function(ce){return{coords:ce,get page(){return this.coords.page},get client(){return this.coords.client},get timeStamp(){return this.coords.timeStamp},get pageX(){return this.coords.page.x},get pageY(){return this.coords.page.y},get clientX(){return this.coords.client.x},get clientY(){return this.coords.client.y},get pointerId(){return this.coords.pointerId},get target(){return this.coords.target},get type(){return this.coords.type},get pointerType(){return this.coords.pointerType},get buttons(){return this.coords.buttons},preventDefault:function(){}}})({page:{x:te.x,y:te.y},client:{x:te.x,y:te.y},timeStamp:m.now()});J=(function(ce,_e,Ie,$e,Te){var Be=ce.interactions.new({pointerType:"reflow"}),Et={interaction:Be,event:Te,pointer:Te,eventTarget:Ie,phase:"reflow"};Be.interactable=_e,Be.element=Ie,Be.prevEvent=Te,Be.updatePointer(Te,Te,Ie,!0),wt(Be.coords.delta),me(Be.prepared,$e),Be._doPhase(Et);var at=ce.window,It=at.Promise,jt=It?new It((function(Ut){Be._reflowResolve=Ut})):void 0;return Be._reflowPromise=jt,Be.start($e,_e,Ie),Be._interacting?(Be.move(Et),Be.end(Te)):(Be.stop(),Be._reflowResolve()),Be.removePointer(Te,Te),jt})(m,l,I,h,fe)}C&&C.push(J)},E=0;E<b.length&&!z();E++);return C&&w.all(C).then((function(){return l}))})(this,a,r)}},listeners:{"interactions:stop":function(r,i){var a=r.interaction;a.pointerType==="reflow"&&(a._reflowResolve&&a._reflowResolve(),(function(l,h){l.splice(l.indexOf(h),1)})(i.interactions.list,a))}}},za=Oa;if(Ct.use(ji),Ct.use(Ci),Ct.use(Ta),Ct.use(Xi),Ct.use(_a),Ct.use(Ni),Ct.use(ne),Ct.use(he),Ct.use(za),Ct.default=Ct,(typeof ni=="undefined"?"undefined":e(ni))==="object"&&ni)try{ni.exports=Ct}catch{}return Ct.default=Ct,Ct}))});var Vn=qa(Wr(),1);function on(t){return typeof t=="undefined"||t===null}function Na(t){return typeof t=="object"&&t!==null}function Ha(t){return Array.isArray(t)?t:on(t)?[]:[t]}function ja(t,p){var e,n,o,c;if(p)for(c=Object.keys(p),e=0,n=c.length;e<n;e+=1)o=c[e],t[o]=p[o];return t}function Wa(t,p){var e="",n;for(n=0;n<p;n+=1)e+=t;return e}function Ya(t){return t===0&&Number.NEGATIVE_INFINITY===1/t}var $a=on,Ka=Na,Ua=Ha,Va=Wa,Ga=Ya,Xa=ja,vt={isNothing:$a,isObject:Ka,toArray:Ua,repeat:Va,isNegativeZero:Ga,extend:Xa};function sn(t,p){var e="",n=t.reason||"(unknown reason)";return t.mark?(t.mark.name&&(e+='in "'+t.mark.name+'" '),e+="("+(t.mark.line+1)+":"+(t.mark.column+1)+")",!p&&t.mark.snippet&&(e+=`

`+t.mark.snippet),n+" "+e):n}function Ri(t,p){Error.call(this),this.name="YAMLException",this.reason=t,this.mark=p,this.message=sn(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Ri.prototype=Object.create(Error.prototype);Ri.prototype.constructor=Ri;Ri.prototype.toString=function(p){return this.name+": "+sn(this,p)};var At=Ri;function yr(t,p,e,n,o){var c="",s="",d=Math.floor(o/2)-1;return n-p>d&&(c=" ... ",p=n-d+c.length),e-n>d&&(s=" ...",e=n+d-s.length),{str:c+t.slice(p,e).replace(/\t/g,"\u2192")+s,pos:n-p+c.length}}function vr(t,p){return vt.repeat(" ",p-t.length)+t}function Ja(t,p){if(p=Object.create(p||null),!t.buffer)return null;p.maxLength||(p.maxLength=79),typeof p.indent!="number"&&(p.indent=1),typeof p.linesBefore!="number"&&(p.linesBefore=3),typeof p.linesAfter!="number"&&(p.linesAfter=2);for(var e=/\r?\n|\r|\0/g,n=[0],o=[],c,s=-1;c=e.exec(t.buffer);)o.push(c.index),n.push(c.index+c[0].length),t.position<=c.index&&s<0&&(s=n.length-2);s<0&&(s=n.length-1);var d="",u,f,v=Math.min(t.line+p.linesAfter,o.length).toString().length,y=p.maxLength-(p.indent+v+3);for(u=1;u<=p.linesBefore&&!(s-u<0);u++)f=yr(t.buffer,n[s-u],o[s-u],t.position-(n[s]-n[s-u]),y),d=vt.repeat(" ",p.indent)+vr((t.line-u+1).toString(),v)+" | "+f.str+`
`+d;for(f=yr(t.buffer,n[s],o[s],t.position,y),d+=vt.repeat(" ",p.indent)+vr((t.line+1).toString(),v)+" | "+f.str+`
`,d+=vt.repeat("-",p.indent+v+3+f.pos)+`^
`,u=1;u<=p.linesAfter&&!(s+u>=o.length);u++)f=yr(t.buffer,n[s+u],o[s+u],t.position-(n[s]-n[s+u]),y),d+=vt.repeat(" ",p.indent)+vr((t.line+u+1).toString(),v)+" | "+f.str+`
`;return d.replace(/\n$/,"")}var Qa=Ja,Za=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],eo=["scalar","sequence","mapping"];function to(t){var p={};return t!==null&&Object.keys(t).forEach(function(e){t[e].forEach(function(n){p[String(n)]=e})}),p}function io(t,p){if(p=p||{},Object.keys(p).forEach(function(e){if(Za.indexOf(e)===-1)throw new At('Unknown option "'+e+'" is met in definition of "'+t+'" YAML type.')}),this.options=p,this.tag=t,this.kind=p.kind||null,this.resolve=p.resolve||function(){return!0},this.construct=p.construct||function(e){return e},this.instanceOf=p.instanceOf||null,this.predicate=p.predicate||null,this.represent=p.represent||null,this.representName=p.representName||null,this.defaultStyle=p.defaultStyle||null,this.multi=p.multi||!1,this.styleAliases=to(p.styleAliases||null),eo.indexOf(this.kind)===-1)throw new At('Unknown kind "'+this.kind+'" is specified for "'+t+'" YAML type.')}var xt=io;function Yr(t,p){var e=[];return t[p].forEach(function(n){var o=e.length;e.forEach(function(c,s){c.tag===n.tag&&c.kind===n.kind&&c.multi===n.multi&&(o=s)}),e[o]=n}),e}function ro(){var t={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},p,e;function n(o){o.multi?(t.multi[o.kind].push(o),t.multi.fallback.push(o)):t[o.kind][o.tag]=t.fallback[o.tag]=o}for(p=0,e=arguments.length;p<e;p+=1)arguments[p].forEach(n);return t}function _r(t){return this.extend(t)}_r.prototype.extend=function(p){var e=[],n=[];if(p instanceof xt)n.push(p);else if(Array.isArray(p))n=n.concat(p);else if(p&&(Array.isArray(p.implicit)||Array.isArray(p.explicit)))p.implicit&&(e=e.concat(p.implicit)),p.explicit&&(n=n.concat(p.explicit));else throw new At("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");e.forEach(function(c){if(!(c instanceof xt))throw new At("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(c.loadKind&&c.loadKind!=="scalar")throw new At("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(c.multi)throw new At("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),n.forEach(function(c){if(!(c instanceof xt))throw new At("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var o=Object.create(_r.prototype);return o.implicit=(this.implicit||[]).concat(e),o.explicit=(this.explicit||[]).concat(n),o.compiledImplicit=Yr(o,"implicit"),o.compiledExplicit=Yr(o,"explicit"),o.compiledTypeMap=ro(o.compiledImplicit,o.compiledExplicit),o};var cn=_r,ln=new xt("tag:yaml.org,2002:str",{kind:"scalar",construct:function(t){return t!==null?t:""}}),dn=new xt("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(t){return t!==null?t:[]}}),un=new xt("tag:yaml.org,2002:map",{kind:"mapping",construct:function(t){return t!==null?t:{}}}),pn=new cn({explicit:[ln,dn,un]});function no(t){if(t===null)return!0;var p=t.length;return p===1&&t==="~"||p===4&&(t==="null"||t==="Null"||t==="NULL")}function ao(){return null}function oo(t){return t===null}var hn=new xt("tag:yaml.org,2002:null",{kind:"scalar",resolve:no,construct:ao,predicate:oo,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function so(t){if(t===null)return!1;var p=t.length;return p===4&&(t==="true"||t==="True"||t==="TRUE")||p===5&&(t==="false"||t==="False"||t==="FALSE")}function co(t){return t==="true"||t==="True"||t==="TRUE"}function lo(t){return Object.prototype.toString.call(t)==="[object Boolean]"}var fn=new xt("tag:yaml.org,2002:bool",{kind:"scalar",resolve:so,construct:co,predicate:lo,represent:{lowercase:function(t){return t?"true":"false"},uppercase:function(t){return t?"TRUE":"FALSE"},camelcase:function(t){return t?"True":"False"}},defaultStyle:"lowercase"});function uo(t){return 48<=t&&t<=57||65<=t&&t<=70||97<=t&&t<=102}function po(t){return 48<=t&&t<=55}function ho(t){return 48<=t&&t<=57}function fo(t){if(t===null)return!1;var p=t.length,e=0,n=!1,o;if(!p)return!1;if(o=t[e],(o==="-"||o==="+")&&(o=t[++e]),o==="0"){if(e+1===p)return!0;if(o=t[++e],o==="b"){for(e++;e<p;e++)if(o=t[e],o!=="_"){if(o!=="0"&&o!=="1")return!1;n=!0}return n&&o!=="_"}if(o==="x"){for(e++;e<p;e++)if(o=t[e],o!=="_"){if(!uo(t.charCodeAt(e)))return!1;n=!0}return n&&o!=="_"}if(o==="o"){for(e++;e<p;e++)if(o=t[e],o!=="_"){if(!po(t.charCodeAt(e)))return!1;n=!0}return n&&o!=="_"}}if(o==="_")return!1;for(;e<p;e++)if(o=t[e],o!=="_"){if(!ho(t.charCodeAt(e)))return!1;n=!0}return!(!n||o==="_")}function go(t){var p=t,e=1,n;if(p.indexOf("_")!==-1&&(p=p.replace(/_/g,"")),n=p[0],(n==="-"||n==="+")&&(n==="-"&&(e=-1),p=p.slice(1),n=p[0]),p==="0")return 0;if(n==="0"){if(p[1]==="b")return e*parseInt(p.slice(2),2);if(p[1]==="x")return e*parseInt(p.slice(2),16);if(p[1]==="o")return e*parseInt(p.slice(2),8)}return e*parseInt(p,10)}function mo(t){return Object.prototype.toString.call(t)==="[object Number]"&&t%1===0&&!vt.isNegativeZero(t)}var gn=new xt("tag:yaml.org,2002:int",{kind:"scalar",resolve:fo,construct:go,predicate:mo,represent:{binary:function(t){return t>=0?"0b"+t.toString(2):"-0b"+t.toString(2).slice(1)},octal:function(t){return t>=0?"0o"+t.toString(8):"-0o"+t.toString(8).slice(1)},decimal:function(t){return t.toString(10)},hexadecimal:function(t){return t>=0?"0x"+t.toString(16).toUpperCase():"-0x"+t.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),yo=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function vo(t){return!(t===null||!yo.test(t)||t[t.length-1]==="_")}function bo(t){var p,e;return p=t.replace(/_/g,"").toLowerCase(),e=p[0]==="-"?-1:1,"+-".indexOf(p[0])>=0&&(p=p.slice(1)),p===".inf"?e===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:p===".nan"?NaN:e*parseFloat(p,10)}var _o=/^[-+]?[0-9]+e/;function xo(t,p){var e;if(isNaN(t))switch(p){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===t)switch(p){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===t)switch(p){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(vt.isNegativeZero(t))return"-0.0";return e=t.toString(10),_o.test(e)?e.replace("e",".e"):e}function wo(t){return Object.prototype.toString.call(t)==="[object Number]"&&(t%1!==0||vt.isNegativeZero(t))}var mn=new xt("tag:yaml.org,2002:float",{kind:"scalar",resolve:vo,construct:bo,predicate:wo,represent:xo,defaultStyle:"lowercase"}),yn=pn.extend({implicit:[hn,fn,gn,mn]}),vn=yn,bn=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),_n=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function So(t){return t===null?!1:bn.exec(t)!==null||_n.exec(t)!==null}function ko(t){var p,e,n,o,c,s,d,u=0,f=null,v,y,g;if(p=bn.exec(t),p===null&&(p=_n.exec(t)),p===null)throw new Error("Date resolve error");if(e=+p[1],n=+p[2]-1,o=+p[3],!p[4])return new Date(Date.UTC(e,n,o));if(c=+p[4],s=+p[5],d=+p[6],p[7]){for(u=p[7].slice(0,3);u.length<3;)u+="0";u=+u}return p[9]&&(v=+p[10],y=+(p[11]||0),f=(v*60+y)*6e4,p[9]==="-"&&(f=-f)),g=new Date(Date.UTC(e,n,o,c,s,d,u)),f&&g.setTime(g.getTime()-f),g}function Co(t){return t.toISOString()}var xn=new xt("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:So,construct:ko,instanceOf:Date,represent:Co});function Eo(t){return t==="<<"||t===null}var wn=new xt("tag:yaml.org,2002:merge",{kind:"scalar",resolve:Eo}),Cr=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function Ao(t){if(t===null)return!1;var p,e,n=0,o=t.length,c=Cr;for(e=0;e<o;e++)if(p=c.indexOf(t.charAt(e)),!(p>64)){if(p<0)return!1;n+=6}return n%8===0}function To(t){var p,e,n=t.replace(/[\r\n=]/g,""),o=n.length,c=Cr,s=0,d=[];for(p=0;p<o;p++)p%4===0&&p&&(d.push(s>>16&255),d.push(s>>8&255),d.push(s&255)),s=s<<6|c.indexOf(n.charAt(p));return e=o%4*6,e===0?(d.push(s>>16&255),d.push(s>>8&255),d.push(s&255)):e===18?(d.push(s>>10&255),d.push(s>>2&255)):e===12&&d.push(s>>4&255),new Uint8Array(d)}function Oo(t){var p="",e=0,n,o,c=t.length,s=Cr;for(n=0;n<c;n++)n%3===0&&n&&(p+=s[e>>18&63],p+=s[e>>12&63],p+=s[e>>6&63],p+=s[e&63]),e=(e<<8)+t[n];return o=c%3,o===0?(p+=s[e>>18&63],p+=s[e>>12&63],p+=s[e>>6&63],p+=s[e&63]):o===2?(p+=s[e>>10&63],p+=s[e>>4&63],p+=s[e<<2&63],p+=s[64]):o===1&&(p+=s[e>>2&63],p+=s[e<<4&63],p+=s[64],p+=s[64]),p}function zo(t){return Object.prototype.toString.call(t)==="[object Uint8Array]"}var Sn=new xt("tag:yaml.org,2002:binary",{kind:"scalar",resolve:Ao,construct:To,predicate:zo,represent:Oo}),Mo=Object.prototype.hasOwnProperty,Po=Object.prototype.toString;function Lo(t){if(t===null)return!0;var p=[],e,n,o,c,s,d=t;for(e=0,n=d.length;e<n;e+=1){if(o=d[e],s=!1,Po.call(o)!=="[object Object]")return!1;for(c in o)if(Mo.call(o,c))if(!s)s=!0;else return!1;if(!s)return!1;if(p.indexOf(c)===-1)p.push(c);else return!1}return!0}function Ro(t){return t!==null?t:[]}var kn=new xt("tag:yaml.org,2002:omap",{kind:"sequence",resolve:Lo,construct:Ro}),Io=Object.prototype.toString;function Do(t){if(t===null)return!0;var p,e,n,o,c,s=t;for(c=new Array(s.length),p=0,e=s.length;p<e;p+=1){if(n=s[p],Io.call(n)!=="[object Object]"||(o=Object.keys(n),o.length!==1))return!1;c[p]=[o[0],n[o[0]]]}return!0}function Fo(t){if(t===null)return[];var p,e,n,o,c,s=t;for(c=new Array(s.length),p=0,e=s.length;p<e;p+=1)n=s[p],o=Object.keys(n),c[p]=[o[0],n[o[0]]];return c}var Cn=new xt("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:Do,construct:Fo}),Bo=Object.prototype.hasOwnProperty;function qo(t){if(t===null)return!0;var p,e=t;for(p in e)if(Bo.call(e,p)&&e[p]!==null)return!1;return!0}function No(t){return t!==null?t:{}}var En=new xt("tag:yaml.org,2002:set",{kind:"mapping",resolve:qo,construct:No}),Er=vn.extend({implicit:[xn,wn],explicit:[Sn,kn,Cn,En]}),Zt=Object.prototype.hasOwnProperty,ir=1,An=2,Tn=3,rr=4,br=1,Ho=2,$r=3,jo=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,Wo=/[\x85\u2028\u2029]/,Yo=/[,\[\]\{\}]/,On=/^(?:!|!!|![a-z\-]+!)$/i,zn=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function Kr(t){return Object.prototype.toString.call(t)}function $t(t){return t===10||t===13}function oi(t){return t===9||t===32}function Lt(t){return t===9||t===32||t===10||t===13}function hi(t){return t===44||t===91||t===93||t===123||t===125}function $o(t){var p;return 48<=t&&t<=57?t-48:(p=t|32,97<=p&&p<=102?p-97+10:-1)}function Ko(t){return t===120?2:t===117?4:t===85?8:0}function Uo(t){return 48<=t&&t<=57?t-48:-1}function Ur(t){return t===48?"\0":t===97?"\x07":t===98?"\b":t===116||t===9?"	":t===110?`
`:t===118?"\v":t===102?"\f":t===114?"\r":t===101?"\x1B":t===32?" ":t===34?'"':t===47?"/":t===92?"\\":t===78?"\x85":t===95?"\xA0":t===76?"\u2028":t===80?"\u2029":""}function Vo(t){return t<=65535?String.fromCharCode(t):String.fromCharCode((t-65536>>10)+55296,(t-65536&1023)+56320)}var Mn=new Array(256),Pn=new Array(256);for(ai=0;ai<256;ai++)Mn[ai]=Ur(ai)?1:0,Pn[ai]=Ur(ai);var ai;function Go(t,p){this.input=t,this.filename=p.filename||null,this.schema=p.schema||Er,this.onWarning=p.onWarning||null,this.legacy=p.legacy||!1,this.json=p.json||!1,this.listener=p.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=t.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function Ln(t,p){var e={name:t.filename,buffer:t.input.slice(0,-1),position:t.position,line:t.line,column:t.position-t.lineStart};return e.snippet=Qa(e),new At(p,e)}function xe(t,p){throw Ln(t,p)}function nr(t,p){t.onWarning&&t.onWarning.call(null,Ln(t,p))}var Vr={YAML:function(p,e,n){var o,c,s;p.version!==null&&xe(p,"duplication of %YAML directive"),n.length!==1&&xe(p,"YAML directive accepts exactly one argument"),o=/^([0-9]+)\.([0-9]+)$/.exec(n[0]),o===null&&xe(p,"ill-formed argument of the YAML directive"),c=parseInt(o[1],10),s=parseInt(o[2],10),c!==1&&xe(p,"unacceptable YAML version of the document"),p.version=n[0],p.checkLineBreaks=s<2,s!==1&&s!==2&&nr(p,"unsupported YAML version of the document")},TAG:function(p,e,n){var o,c;n.length!==2&&xe(p,"TAG directive accepts exactly two arguments"),o=n[0],c=n[1],On.test(o)||xe(p,"ill-formed tag handle (first argument) of the TAG directive"),Zt.call(p.tagMap,o)&&xe(p,'there is a previously declared suffix for "'+o+'" tag handle'),zn.test(c)||xe(p,"ill-formed tag prefix (second argument) of the TAG directive");try{c=decodeURIComponent(c)}catch{xe(p,"tag prefix is malformed: "+c)}p.tagMap[o]=c}};function Qt(t,p,e,n){var o,c,s,d;if(p<e){if(d=t.input.slice(p,e),n)for(o=0,c=d.length;o<c;o+=1)s=d.charCodeAt(o),s===9||32<=s&&s<=1114111||xe(t,"expected valid JSON character");else jo.test(d)&&xe(t,"the stream contains non-printable characters");t.result+=d}}function Gr(t,p,e,n){var o,c,s,d;for(vt.isObject(e)||xe(t,"cannot merge mappings; the provided source object is unacceptable"),o=Object.keys(e),s=0,d=o.length;s<d;s+=1)c=o[s],Zt.call(p,c)||(p[c]=e[c],n[c]=!0)}function fi(t,p,e,n,o,c,s,d,u){var f,v;if(Array.isArray(o))for(o=Array.prototype.slice.call(o),f=0,v=o.length;f<v;f+=1)Array.isArray(o[f])&&xe(t,"nested arrays are not supported inside keys"),typeof o=="object"&&Kr(o[f])==="[object Object]"&&(o[f]="[object Object]");if(typeof o=="object"&&Kr(o)==="[object Object]"&&(o="[object Object]"),o=String(o),p===null&&(p={}),n==="tag:yaml.org,2002:merge")if(Array.isArray(c))for(f=0,v=c.length;f<v;f+=1)Gr(t,p,c[f],e);else Gr(t,p,c,e);else!t.json&&!Zt.call(e,o)&&Zt.call(p,o)&&(t.line=s||t.line,t.lineStart=d||t.lineStart,t.position=u||t.position,xe(t,"duplicated mapping key")),o==="__proto__"?Object.defineProperty(p,o,{configurable:!0,enumerable:!0,writable:!0,value:c}):p[o]=c,delete e[o];return p}function Ar(t){var p;p=t.input.charCodeAt(t.position),p===10?t.position++:p===13?(t.position++,t.input.charCodeAt(t.position)===10&&t.position++):xe(t,"a line break is expected"),t.line+=1,t.lineStart=t.position,t.firstTabInLine=-1}function ft(t,p,e){for(var n=0,o=t.input.charCodeAt(t.position);o!==0;){for(;oi(o);)o===9&&t.firstTabInLine===-1&&(t.firstTabInLine=t.position),o=t.input.charCodeAt(++t.position);if(p&&o===35)do o=t.input.charCodeAt(++t.position);while(o!==10&&o!==13&&o!==0);if($t(o))for(Ar(t),o=t.input.charCodeAt(t.position),n++,t.lineIndent=0;o===32;)t.lineIndent++,o=t.input.charCodeAt(++t.position);else break}return e!==-1&&n!==0&&t.lineIndent<e&&nr(t,"deficient indentation"),n}function sr(t){var p=t.position,e;return e=t.input.charCodeAt(p),!!((e===45||e===46)&&e===t.input.charCodeAt(p+1)&&e===t.input.charCodeAt(p+2)&&(p+=3,e=t.input.charCodeAt(p),e===0||Lt(e)))}function Tr(t,p){p===1?t.result+=" ":p>1&&(t.result+=vt.repeat(`
`,p-1))}function Xo(t,p,e){var n,o,c,s,d,u,f,v,y=t.kind,g=t.result,x;if(x=t.input.charCodeAt(t.position),Lt(x)||hi(x)||x===35||x===38||x===42||x===33||x===124||x===62||x===39||x===34||x===37||x===64||x===96||(x===63||x===45)&&(o=t.input.charCodeAt(t.position+1),Lt(o)||e&&hi(o)))return!1;for(t.kind="scalar",t.result="",c=s=t.position,d=!1;x!==0;){if(x===58){if(o=t.input.charCodeAt(t.position+1),Lt(o)||e&&hi(o))break}else if(x===35){if(n=t.input.charCodeAt(t.position-1),Lt(n))break}else{if(t.position===t.lineStart&&sr(t)||e&&hi(x))break;if($t(x))if(u=t.line,f=t.lineStart,v=t.lineIndent,ft(t,!1,-1),t.lineIndent>=p){d=!0,x=t.input.charCodeAt(t.position);continue}else{t.position=s,t.line=u,t.lineStart=f,t.lineIndent=v;break}}d&&(Qt(t,c,s,!1),Tr(t,t.line-u),c=s=t.position,d=!1),oi(x)||(s=t.position+1),x=t.input.charCodeAt(++t.position)}return Qt(t,c,s,!1),t.result?!0:(t.kind=y,t.result=g,!1)}function Jo(t,p){var e,n,o;if(e=t.input.charCodeAt(t.position),e!==39)return!1;for(t.kind="scalar",t.result="",t.position++,n=o=t.position;(e=t.input.charCodeAt(t.position))!==0;)if(e===39)if(Qt(t,n,t.position,!0),e=t.input.charCodeAt(++t.position),e===39)n=t.position,t.position++,o=t.position;else return!0;else $t(e)?(Qt(t,n,o,!0),Tr(t,ft(t,!1,p)),n=o=t.position):t.position===t.lineStart&&sr(t)?xe(t,"unexpected end of the document within a single quoted scalar"):(t.position++,o=t.position);xe(t,"unexpected end of the stream within a single quoted scalar")}function Qo(t,p){var e,n,o,c,s,d;if(d=t.input.charCodeAt(t.position),d!==34)return!1;for(t.kind="scalar",t.result="",t.position++,e=n=t.position;(d=t.input.charCodeAt(t.position))!==0;){if(d===34)return Qt(t,e,t.position,!0),t.position++,!0;if(d===92){if(Qt(t,e,t.position,!0),d=t.input.charCodeAt(++t.position),$t(d))ft(t,!1,p);else if(d<256&&Mn[d])t.result+=Pn[d],t.position++;else if((s=Ko(d))>0){for(o=s,c=0;o>0;o--)d=t.input.charCodeAt(++t.position),(s=$o(d))>=0?c=(c<<4)+s:xe(t,"expected hexadecimal character");t.result+=Vo(c),t.position++}else xe(t,"unknown escape sequence");e=n=t.position}else $t(d)?(Qt(t,e,n,!0),Tr(t,ft(t,!1,p)),e=n=t.position):t.position===t.lineStart&&sr(t)?xe(t,"unexpected end of the document within a double quoted scalar"):(t.position++,n=t.position)}xe(t,"unexpected end of the stream within a double quoted scalar")}function Zo(t,p){var e=!0,n,o,c,s=t.tag,d,u=t.anchor,f,v,y,g,x,A=Object.create(null),S,T,L,k;if(k=t.input.charCodeAt(t.position),k===91)v=93,x=!1,d=[];else if(k===123)v=125,x=!0,d={};else return!1;for(t.anchor!==null&&(t.anchorMap[t.anchor]=d),k=t.input.charCodeAt(++t.position);k!==0;){if(ft(t,!0,p),k=t.input.charCodeAt(t.position),k===v)return t.position++,t.tag=s,t.anchor=u,t.kind=x?"mapping":"sequence",t.result=d,!0;e?k===44&&xe(t,"expected the node content, but found ','"):xe(t,"missed comma between flow collection entries"),T=S=L=null,y=g=!1,k===63&&(f=t.input.charCodeAt(t.position+1),Lt(f)&&(y=g=!0,t.position++,ft(t,!0,p))),n=t.line,o=t.lineStart,c=t.position,gi(t,p,ir,!1,!0),T=t.tag,S=t.result,ft(t,!0,p),k=t.input.charCodeAt(t.position),(g||t.line===n)&&k===58&&(y=!0,k=t.input.charCodeAt(++t.position),ft(t,!0,p),gi(t,p,ir,!1,!0),L=t.result),x?fi(t,d,A,T,S,L,n,o,c):y?d.push(fi(t,null,A,T,S,L,n,o,c)):d.push(S),ft(t,!0,p),k=t.input.charCodeAt(t.position),k===44?(e=!0,k=t.input.charCodeAt(++t.position)):e=!1}xe(t,"unexpected end of the stream within a flow collection")}function es(t,p){var e,n,o=br,c=!1,s=!1,d=p,u=0,f=!1,v,y;if(y=t.input.charCodeAt(t.position),y===124)n=!1;else if(y===62)n=!0;else return!1;for(t.kind="scalar",t.result="";y!==0;)if(y=t.input.charCodeAt(++t.position),y===43||y===45)br===o?o=y===43?$r:Ho:xe(t,"repeat of a chomping mode identifier");else if((v=Uo(y))>=0)v===0?xe(t,"bad explicit indentation width of a block scalar; it cannot be less than one"):s?xe(t,"repeat of an indentation width identifier"):(d=p+v-1,s=!0);else break;if(oi(y)){do y=t.input.charCodeAt(++t.position);while(oi(y));if(y===35)do y=t.input.charCodeAt(++t.position);while(!$t(y)&&y!==0)}for(;y!==0;){for(Ar(t),t.lineIndent=0,y=t.input.charCodeAt(t.position);(!s||t.lineIndent<d)&&y===32;)t.lineIndent++,y=t.input.charCodeAt(++t.position);if(!s&&t.lineIndent>d&&(d=t.lineIndent),$t(y)){u++;continue}if(t.lineIndent<d){o===$r?t.result+=vt.repeat(`
`,c?1+u:u):o===br&&c&&(t.result+=`
`);break}for(n?oi(y)?(f=!0,t.result+=vt.repeat(`
`,c?1+u:u)):f?(f=!1,t.result+=vt.repeat(`
`,u+1)):u===0?c&&(t.result+=" "):t.result+=vt.repeat(`
`,u):t.result+=vt.repeat(`
`,c?1+u:u),c=!0,s=!0,u=0,e=t.position;!$t(y)&&y!==0;)y=t.input.charCodeAt(++t.position);Qt(t,e,t.position,!1)}return!0}function Xr(t,p){var e,n=t.tag,o=t.anchor,c=[],s,d=!1,u;if(t.firstTabInLine!==-1)return!1;for(t.anchor!==null&&(t.anchorMap[t.anchor]=c),u=t.input.charCodeAt(t.position);u!==0&&(t.firstTabInLine!==-1&&(t.position=t.firstTabInLine,xe(t,"tab characters must not be used in indentation")),!(u!==45||(s=t.input.charCodeAt(t.position+1),!Lt(s))));){if(d=!0,t.position++,ft(t,!0,-1)&&t.lineIndent<=p){c.push(null),u=t.input.charCodeAt(t.position);continue}if(e=t.line,gi(t,p,Tn,!1,!0),c.push(t.result),ft(t,!0,-1),u=t.input.charCodeAt(t.position),(t.line===e||t.lineIndent>p)&&u!==0)xe(t,"bad indentation of a sequence entry");else if(t.lineIndent<p)break}return d?(t.tag=n,t.anchor=o,t.kind="sequence",t.result=c,!0):!1}function ts(t,p,e){var n,o,c,s,d,u,f=t.tag,v=t.anchor,y={},g=Object.create(null),x=null,A=null,S=null,T=!1,L=!1,k;if(t.firstTabInLine!==-1)return!1;for(t.anchor!==null&&(t.anchorMap[t.anchor]=y),k=t.input.charCodeAt(t.position);k!==0;){if(!T&&t.firstTabInLine!==-1&&(t.position=t.firstTabInLine,xe(t,"tab characters must not be used in indentation")),n=t.input.charCodeAt(t.position+1),c=t.line,(k===63||k===58)&&Lt(n))k===63?(T&&(fi(t,y,g,x,A,null,s,d,u),x=A=S=null),L=!0,T=!0,o=!0):T?(T=!1,o=!0):xe(t,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),t.position+=1,k=n;else{if(s=t.line,d=t.lineStart,u=t.position,!gi(t,e,An,!1,!0))break;if(t.line===c){for(k=t.input.charCodeAt(t.position);oi(k);)k=t.input.charCodeAt(++t.position);if(k===58)k=t.input.charCodeAt(++t.position),Lt(k)||xe(t,"a whitespace character is expected after the key-value separator within a block mapping"),T&&(fi(t,y,g,x,A,null,s,d,u),x=A=S=null),L=!0,T=!1,o=!1,x=t.tag,A=t.result;else if(L)xe(t,"can not read an implicit mapping pair; a colon is missed");else return t.tag=f,t.anchor=v,!0}else if(L)xe(t,"can not read a block mapping entry; a multiline key may not be an implicit key");else return t.tag=f,t.anchor=v,!0}if((t.line===c||t.lineIndent>p)&&(T&&(s=t.line,d=t.lineStart,u=t.position),gi(t,p,rr,!0,o)&&(T?A=t.result:S=t.result),T||(fi(t,y,g,x,A,S,s,d,u),x=A=S=null),ft(t,!0,-1),k=t.input.charCodeAt(t.position)),(t.line===c||t.lineIndent>p)&&k!==0)xe(t,"bad indentation of a mapping entry");else if(t.lineIndent<p)break}return T&&fi(t,y,g,x,A,null,s,d,u),L&&(t.tag=f,t.anchor=v,t.kind="mapping",t.result=y),L}function is(t){var p,e=!1,n=!1,o,c,s;if(s=t.input.charCodeAt(t.position),s!==33)return!1;if(t.tag!==null&&xe(t,"duplication of a tag property"),s=t.input.charCodeAt(++t.position),s===60?(e=!0,s=t.input.charCodeAt(++t.position)):s===33?(n=!0,o="!!",s=t.input.charCodeAt(++t.position)):o="!",p=t.position,e){do s=t.input.charCodeAt(++t.position);while(s!==0&&s!==62);t.position<t.length?(c=t.input.slice(p,t.position),s=t.input.charCodeAt(++t.position)):xe(t,"unexpected end of the stream within a verbatim tag")}else{for(;s!==0&&!Lt(s);)s===33&&(n?xe(t,"tag suffix cannot contain exclamation marks"):(o=t.input.slice(p-1,t.position+1),On.test(o)||xe(t,"named tag handle cannot contain such characters"),n=!0,p=t.position+1)),s=t.input.charCodeAt(++t.position);c=t.input.slice(p,t.position),Yo.test(c)&&xe(t,"tag suffix cannot contain flow indicator characters")}c&&!zn.test(c)&&xe(t,"tag name cannot contain such characters: "+c);try{c=decodeURIComponent(c)}catch{xe(t,"tag name is malformed: "+c)}return e?t.tag=c:Zt.call(t.tagMap,o)?t.tag=t.tagMap[o]+c:o==="!"?t.tag="!"+c:o==="!!"?t.tag="tag:yaml.org,2002:"+c:xe(t,'undeclared tag handle "'+o+'"'),!0}function rs(t){var p,e;if(e=t.input.charCodeAt(t.position),e!==38)return!1;for(t.anchor!==null&&xe(t,"duplication of an anchor property"),e=t.input.charCodeAt(++t.position),p=t.position;e!==0&&!Lt(e)&&!hi(e);)e=t.input.charCodeAt(++t.position);return t.position===p&&xe(t,"name of an anchor node must contain at least one character"),t.anchor=t.input.slice(p,t.position),!0}function ns(t){var p,e,n;if(n=t.input.charCodeAt(t.position),n!==42)return!1;for(n=t.input.charCodeAt(++t.position),p=t.position;n!==0&&!Lt(n)&&!hi(n);)n=t.input.charCodeAt(++t.position);return t.position===p&&xe(t,"name of an alias node must contain at least one character"),e=t.input.slice(p,t.position),Zt.call(t.anchorMap,e)||xe(t,'unidentified alias "'+e+'"'),t.result=t.anchorMap[e],ft(t,!0,-1),!0}function gi(t,p,e,n,o){var c,s,d,u=1,f=!1,v=!1,y,g,x,A,S,T;if(t.listener!==null&&t.listener("open",t),t.tag=null,t.anchor=null,t.kind=null,t.result=null,c=s=d=rr===e||Tn===e,n&&ft(t,!0,-1)&&(f=!0,t.lineIndent>p?u=1:t.lineIndent===p?u=0:t.lineIndent<p&&(u=-1)),u===1)for(;is(t)||rs(t);)ft(t,!0,-1)?(f=!0,d=c,t.lineIndent>p?u=1:t.lineIndent===p?u=0:t.lineIndent<p&&(u=-1)):d=!1;if(d&&(d=f||o),(u===1||rr===e)&&(ir===e||An===e?S=p:S=p+1,T=t.position-t.lineStart,u===1?d&&(Xr(t,T)||ts(t,T,S))||Zo(t,S)?v=!0:(s&&es(t,S)||Jo(t,S)||Qo(t,S)?v=!0:ns(t)?(v=!0,(t.tag!==null||t.anchor!==null)&&xe(t,"alias node should not have any properties")):Xo(t,S,ir===e)&&(v=!0,t.tag===null&&(t.tag="?")),t.anchor!==null&&(t.anchorMap[t.anchor]=t.result)):u===0&&(v=d&&Xr(t,T))),t.tag===null)t.anchor!==null&&(t.anchorMap[t.anchor]=t.result);else if(t.tag==="?"){for(t.result!==null&&t.kind!=="scalar"&&xe(t,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+t.kind+'"'),y=0,g=t.implicitTypes.length;y<g;y+=1)if(A=t.implicitTypes[y],A.resolve(t.result)){t.result=A.construct(t.result),t.tag=A.tag,t.anchor!==null&&(t.anchorMap[t.anchor]=t.result);break}}else if(t.tag!=="!"){if(Zt.call(t.typeMap[t.kind||"fallback"],t.tag))A=t.typeMap[t.kind||"fallback"][t.tag];else for(A=null,x=t.typeMap.multi[t.kind||"fallback"],y=0,g=x.length;y<g;y+=1)if(t.tag.slice(0,x[y].tag.length)===x[y].tag){A=x[y];break}A||xe(t,"unknown tag !<"+t.tag+">"),t.result!==null&&A.kind!==t.kind&&xe(t,"unacceptable node kind for !<"+t.tag+'> tag; it should be "'+A.kind+'", not "'+t.kind+'"'),A.resolve(t.result,t.tag)?(t.result=A.construct(t.result,t.tag),t.anchor!==null&&(t.anchorMap[t.anchor]=t.result)):xe(t,"cannot resolve a node with !<"+t.tag+"> explicit tag")}return t.listener!==null&&t.listener("close",t),t.tag!==null||t.anchor!==null||v}function as(t){var p=t.position,e,n,o,c=!1,s;for(t.version=null,t.checkLineBreaks=t.legacy,t.tagMap=Object.create(null),t.anchorMap=Object.create(null);(s=t.input.charCodeAt(t.position))!==0&&(ft(t,!0,-1),s=t.input.charCodeAt(t.position),!(t.lineIndent>0||s!==37));){for(c=!0,s=t.input.charCodeAt(++t.position),e=t.position;s!==0&&!Lt(s);)s=t.input.charCodeAt(++t.position);for(n=t.input.slice(e,t.position),o=[],n.length<1&&xe(t,"directive name must not be less than one character in length");s!==0;){for(;oi(s);)s=t.input.charCodeAt(++t.position);if(s===35){do s=t.input.charCodeAt(++t.position);while(s!==0&&!$t(s));break}if($t(s))break;for(e=t.position;s!==0&&!Lt(s);)s=t.input.charCodeAt(++t.position);o.push(t.input.slice(e,t.position))}s!==0&&Ar(t),Zt.call(Vr,n)?Vr[n](t,n,o):nr(t,'unknown document directive "'+n+'"')}if(ft(t,!0,-1),t.lineIndent===0&&t.input.charCodeAt(t.position)===45&&t.input.charCodeAt(t.position+1)===45&&t.input.charCodeAt(t.position+2)===45?(t.position+=3,ft(t,!0,-1)):c&&xe(t,"directives end mark is expected"),gi(t,t.lineIndent-1,rr,!1,!0),ft(t,!0,-1),t.checkLineBreaks&&Wo.test(t.input.slice(p,t.position))&&nr(t,"non-ASCII line breaks are interpreted as content"),t.documents.push(t.result),t.position===t.lineStart&&sr(t)){t.input.charCodeAt(t.position)===46&&(t.position+=3,ft(t,!0,-1));return}if(t.position<t.length-1)xe(t,"end of the stream or a document separator is expected");else return}function Rn(t,p){t=String(t),p=p||{},t.length!==0&&(t.charCodeAt(t.length-1)!==10&&t.charCodeAt(t.length-1)!==13&&(t+=`
`),t.charCodeAt(0)===65279&&(t=t.slice(1)));var e=new Go(t,p),n=t.indexOf("\0");for(n!==-1&&(e.position=n,xe(e,"null byte is not allowed in input")),e.input+="\0";e.input.charCodeAt(e.position)===32;)e.lineIndent+=1,e.position+=1;for(;e.position<e.length-1;)as(e);return e.documents}function os(t,p,e){p!==null&&typeof p=="object"&&typeof e=="undefined"&&(e=p,p=null);var n=Rn(t,e);if(typeof p!="function")return n;for(var o=0,c=n.length;o<c;o+=1)p(n[o])}function ss(t,p){var e=Rn(t,p);if(e.length!==0){if(e.length===1)return e[0];throw new At("expected a single document in the stream, but found more")}}var cs=os,ls=ss,In={loadAll:cs,load:ls},Dn=Object.prototype.toString,Fn=Object.prototype.hasOwnProperty,Or=65279,ds=9,Ii=10,us=13,ps=32,hs=33,fs=34,xr=35,gs=37,ms=38,ys=39,vs=42,Bn=44,bs=45,ar=58,_s=61,xs=62,ws=63,Ss=64,qn=91,Nn=93,ks=96,Hn=123,Cs=124,jn=125,St={};St[0]="\\0";St[7]="\\a";St[8]="\\b";St[9]="\\t";St[10]="\\n";St[11]="\\v";St[12]="\\f";St[13]="\\r";St[27]="\\e";St[34]='\\"';St[92]="\\\\";St[133]="\\N";St[160]="\\_";St[8232]="\\L";St[8233]="\\P";var Es=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],As=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function Ts(t,p){var e,n,o,c,s,d,u;if(p===null)return{};for(e={},n=Object.keys(p),o=0,c=n.length;o<c;o+=1)s=n[o],d=String(p[s]),s.slice(0,2)==="!!"&&(s="tag:yaml.org,2002:"+s.slice(2)),u=t.compiledTypeMap.fallback[s],u&&Fn.call(u.styleAliases,d)&&(d=u.styleAliases[d]),e[s]=d;return e}function Os(t){var p,e,n;if(p=t.toString(16).toUpperCase(),t<=255)e="x",n=2;else if(t<=65535)e="u",n=4;else if(t<=4294967295)e="U",n=8;else throw new At("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+e+vt.repeat("0",n-p.length)+p}var zs=1,Di=2;function Ms(t){this.schema=t.schema||Er,this.indent=Math.max(1,t.indent||2),this.noArrayIndent=t.noArrayIndent||!1,this.skipInvalid=t.skipInvalid||!1,this.flowLevel=vt.isNothing(t.flowLevel)?-1:t.flowLevel,this.styleMap=Ts(this.schema,t.styles||null),this.sortKeys=t.sortKeys||!1,this.lineWidth=t.lineWidth||80,this.noRefs=t.noRefs||!1,this.noCompatMode=t.noCompatMode||!1,this.condenseFlow=t.condenseFlow||!1,this.quotingType=t.quotingType==='"'?Di:zs,this.forceQuotes=t.forceQuotes||!1,this.replacer=typeof t.replacer=="function"?t.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function Jr(t,p){for(var e=vt.repeat(" ",p),n=0,o=-1,c="",s,d=t.length;n<d;)o=t.indexOf(`
`,n),o===-1?(s=t.slice(n),n=d):(s=t.slice(n,o+1),n=o+1),s.length&&s!==`
`&&(c+=e),c+=s;return c}function wr(t,p){return`
`+vt.repeat(" ",t.indent*p)}function Ps(t,p){var e,n,o;for(e=0,n=t.implicitTypes.length;e<n;e+=1)if(o=t.implicitTypes[e],o.resolve(p))return!0;return!1}function or(t){return t===ps||t===ds}function Fi(t){return 32<=t&&t<=126||161<=t&&t<=55295&&t!==8232&&t!==8233||57344<=t&&t<=65533&&t!==Or||65536<=t&&t<=1114111}function Qr(t){return Fi(t)&&t!==Or&&t!==us&&t!==Ii}function Zr(t,p,e){var n=Qr(t),o=n&&!or(t);return(e?n:n&&t!==Bn&&t!==qn&&t!==Nn&&t!==Hn&&t!==jn)&&t!==xr&&!(p===ar&&!o)||Qr(p)&&!or(p)&&t===xr||p===ar&&o}function Ls(t){return Fi(t)&&t!==Or&&!or(t)&&t!==bs&&t!==ws&&t!==ar&&t!==Bn&&t!==qn&&t!==Nn&&t!==Hn&&t!==jn&&t!==xr&&t!==ms&&t!==vs&&t!==hs&&t!==Cs&&t!==_s&&t!==xs&&t!==ys&&t!==fs&&t!==gs&&t!==Ss&&t!==ks}function Rs(t){return!or(t)&&t!==ar}function Li(t,p){var e=t.charCodeAt(p),n;return e>=55296&&e<=56319&&p+1<t.length&&(n=t.charCodeAt(p+1),n>=56320&&n<=57343)?(e-55296)*1024+n-56320+65536:e}function Wn(t){var p=/^\n* /;return p.test(t)}var Yn=1,Sr=2,$n=3,Kn=4,pi=5;function Is(t,p,e,n,o,c,s,d){var u,f=0,v=null,y=!1,g=!1,x=n!==-1,A=-1,S=Ls(Li(t,0))&&Rs(Li(t,t.length-1));if(p||s)for(u=0;u<t.length;f>=65536?u+=2:u++){if(f=Li(t,u),!Fi(f))return pi;S=S&&Zr(f,v,d),v=f}else{for(u=0;u<t.length;f>=65536?u+=2:u++){if(f=Li(t,u),f===Ii)y=!0,x&&(g=g||u-A-1>n&&t[A+1]!==" ",A=u);else if(!Fi(f))return pi;S=S&&Zr(f,v,d),v=f}g=g||x&&u-A-1>n&&t[A+1]!==" "}return!y&&!g?S&&!s&&!o(t)?Yn:c===Di?pi:Sr:e>9&&Wn(t)?pi:s?c===Di?pi:Sr:g?Kn:$n}function Ds(t,p,e,n,o){t.dump=(function(){if(p.length===0)return t.quotingType===Di?'""':"''";if(!t.noCompatMode&&(Es.indexOf(p)!==-1||As.test(p)))return t.quotingType===Di?'"'+p+'"':"'"+p+"'";var c=t.indent*Math.max(1,e),s=t.lineWidth===-1?-1:Math.max(Math.min(t.lineWidth,40),t.lineWidth-c),d=n||t.flowLevel>-1&&e>=t.flowLevel;function u(f){return Ps(t,f)}switch(Is(p,d,t.indent,s,u,t.quotingType,t.forceQuotes&&!n,o)){case Yn:return p;case Sr:return"'"+p.replace(/'/g,"''")+"'";case $n:return"|"+en(p,t.indent)+tn(Jr(p,c));case Kn:return">"+en(p,t.indent)+tn(Jr(Fs(p,s),c));case pi:return'"'+Bs(p)+'"';default:throw new At("impossible error: invalid scalar style")}})()}function en(t,p){var e=Wn(t)?String(p):"",n=t[t.length-1]===`
`,o=n&&(t[t.length-2]===`
`||t===`
`),c=o?"+":n?"":"-";return e+c+`
`}function tn(t){return t[t.length-1]===`
`?t.slice(0,-1):t}function Fs(t,p){for(var e=/(\n+)([^\n]*)/g,n=(function(){var f=t.indexOf(`
`);return f=f!==-1?f:t.length,e.lastIndex=f,rn(t.slice(0,f),p)})(),o=t[0]===`
`||t[0]===" ",c,s;s=e.exec(t);){var d=s[1],u=s[2];c=u[0]===" ",n+=d+(!o&&!c&&u!==""?`
`:"")+rn(u,p),o=c}return n}function rn(t,p){if(t===""||t[0]===" ")return t;for(var e=/ [^ ]/g,n,o=0,c,s=0,d=0,u="";n=e.exec(t);)d=n.index,d-o>p&&(c=s>o?s:d,u+=`
`+t.slice(o,c),o=c+1),s=d;return u+=`
`,t.length-o>p&&s>o?u+=t.slice(o,s)+`
`+t.slice(s+1):u+=t.slice(o),u.slice(1)}function Bs(t){for(var p="",e=0,n,o=0;o<t.length;e>=65536?o+=2:o++)e=Li(t,o),n=St[e],!n&&Fi(e)?(p+=t[o],e>=65536&&(p+=t[o+1])):p+=n||Os(e);return p}function qs(t,p,e){var n="",o=t.tag,c,s,d;for(c=0,s=e.length;c<s;c+=1)d=e[c],t.replacer&&(d=t.replacer.call(e,String(c),d)),(Vt(t,p,d,!1,!1)||typeof d=="undefined"&&Vt(t,p,null,!1,!1))&&(n!==""&&(n+=","+(t.condenseFlow?"":" ")),n+=t.dump);t.tag=o,t.dump="["+n+"]"}function nn(t,p,e,n){var o="",c=t.tag,s,d,u;for(s=0,d=e.length;s<d;s+=1)u=e[s],t.replacer&&(u=t.replacer.call(e,String(s),u)),(Vt(t,p+1,u,!0,!0,!1,!0)||typeof u=="undefined"&&Vt(t,p+1,null,!0,!0,!1,!0))&&((!n||o!=="")&&(o+=wr(t,p)),t.dump&&Ii===t.dump.charCodeAt(0)?o+="-":o+="- ",o+=t.dump);t.tag=c,t.dump=o||"[]"}function Ns(t,p,e){var n="",o=t.tag,c=Object.keys(e),s,d,u,f,v;for(s=0,d=c.length;s<d;s+=1)v="",n!==""&&(v+=", "),t.condenseFlow&&(v+='"'),u=c[s],f=e[u],t.replacer&&(f=t.replacer.call(e,u,f)),Vt(t,p,u,!1,!1)&&(t.dump.length>1024&&(v+="? "),v+=t.dump+(t.condenseFlow?'"':"")+":"+(t.condenseFlow?"":" "),Vt(t,p,f,!1,!1)&&(v+=t.dump,n+=v));t.tag=o,t.dump="{"+n+"}"}function Hs(t,p,e,n){var o="",c=t.tag,s=Object.keys(e),d,u,f,v,y,g;if(t.sortKeys===!0)s.sort();else if(typeof t.sortKeys=="function")s.sort(t.sortKeys);else if(t.sortKeys)throw new At("sortKeys must be a boolean or a function");for(d=0,u=s.length;d<u;d+=1)g="",(!n||o!=="")&&(g+=wr(t,p)),f=s[d],v=e[f],t.replacer&&(v=t.replacer.call(e,f,v)),Vt(t,p+1,f,!0,!0,!0)&&(y=t.tag!==null&&t.tag!=="?"||t.dump&&t.dump.length>1024,y&&(t.dump&&Ii===t.dump.charCodeAt(0)?g+="?":g+="? "),g+=t.dump,y&&(g+=wr(t,p)),Vt(t,p+1,v,!0,y)&&(t.dump&&Ii===t.dump.charCodeAt(0)?g+=":":g+=": ",g+=t.dump,o+=g));t.tag=c,t.dump=o||"{}"}function an(t,p,e){var n,o,c,s,d,u;for(o=e?t.explicitTypes:t.implicitTypes,c=0,s=o.length;c<s;c+=1)if(d=o[c],(d.instanceOf||d.predicate)&&(!d.instanceOf||typeof p=="object"&&p instanceof d.instanceOf)&&(!d.predicate||d.predicate(p))){if(e?d.multi&&d.representName?t.tag=d.representName(p):t.tag=d.tag:t.tag="?",d.represent){if(u=t.styleMap[d.tag]||d.defaultStyle,Dn.call(d.represent)==="[object Function]")n=d.represent(p,u);else if(Fn.call(d.represent,u))n=d.represent[u](p,u);else throw new At("!<"+d.tag+'> tag resolver accepts not "'+u+'" style');t.dump=n}return!0}return!1}function Vt(t,p,e,n,o,c,s){t.tag=null,t.dump=e,an(t,e,!1)||an(t,e,!0);var d=Dn.call(t.dump),u=n,f;n&&(n=t.flowLevel<0||t.flowLevel>p);var v=d==="[object Object]"||d==="[object Array]",y,g;if(v&&(y=t.duplicates.indexOf(e),g=y!==-1),(t.tag!==null&&t.tag!=="?"||g||t.indent!==2&&p>0)&&(o=!1),g&&t.usedDuplicates[y])t.dump="*ref_"+y;else{if(v&&g&&!t.usedDuplicates[y]&&(t.usedDuplicates[y]=!0),d==="[object Object]")n&&Object.keys(t.dump).length!==0?(Hs(t,p,t.dump,o),g&&(t.dump="&ref_"+y+t.dump)):(Ns(t,p,t.dump),g&&(t.dump="&ref_"+y+" "+t.dump));else if(d==="[object Array]")n&&t.dump.length!==0?(t.noArrayIndent&&!s&&p>0?nn(t,p-1,t.dump,o):nn(t,p,t.dump,o),g&&(t.dump="&ref_"+y+t.dump)):(qs(t,p,t.dump),g&&(t.dump="&ref_"+y+" "+t.dump));else if(d==="[object String]")t.tag!=="?"&&Ds(t,t.dump,p,c,u);else{if(d==="[object Undefined]")return!1;if(t.skipInvalid)return!1;throw new At("unacceptable kind of an object to dump "+d)}t.tag!==null&&t.tag!=="?"&&(f=encodeURI(t.tag[0]==="!"?t.tag.slice(1):t.tag).replace(/!/g,"%21"),t.tag[0]==="!"?f="!"+f:f.slice(0,18)==="tag:yaml.org,2002:"?f="!!"+f.slice(18):f="!<"+f+">",t.dump=f+" "+t.dump)}return!0}function js(t,p){var e=[],n=[],o,c;for(kr(t,e,n),o=0,c=n.length;o<c;o+=1)p.duplicates.push(e[n[o]]);p.usedDuplicates=new Array(c)}function kr(t,p,e){var n,o,c;if(t!==null&&typeof t=="object")if(o=p.indexOf(t),o!==-1)e.indexOf(o)===-1&&e.push(o);else if(p.push(t),Array.isArray(t))for(o=0,c=t.length;o<c;o+=1)kr(t[o],p,e);else for(n=Object.keys(t),o=0,c=n.length;o<c;o+=1)kr(t[n[o]],p,e)}function Ws(t,p){p=p||{};var e=new Ms(p);e.noRefs||js(t,e);var n=t;return e.replacer&&(n=e.replacer.call({"":n},"",n)),Vt(e,0,n,!0,!0)?e.dump+`
`:""}var Ys=Ws,$s={dump:Ys};function zr(t,p){return function(){throw new Error("Function yaml."+t+" is removed in js-yaml 4. Use yaml."+p+" instead, which is now safe by default.")}}var Ks=xt,Us=cn,Vs=pn,Gs=yn,Xs=vn,Js=Er,Qs=In.load,Zs=In.loadAll,ec=$s.dump,tc=At,ic={binary:Sn,float:mn,map:un,null:hn,pairs:Cn,set:En,timestamp:xn,bool:fn,int:gn,merge:wn,omap:kn,seq:dn,str:ln},rc=zr("safeLoad","load"),nc=zr("safeLoadAll","loadAll"),ac=zr("safeDump","dump"),oc={Type:Ks,Schema:Us,FAILSAFE_SCHEMA:Vs,JSON_SCHEMA:Gs,CORE_SCHEMA:Xs,DEFAULT_SCHEMA:Js,load:Qs,loadAll:Zs,dump:ec,YAMLException:tc,types:ic,safeLoad:rc,safeLoadAll:nc,safeDump:ac},Un=oc;window.interact||(window.interact=Vn.default);window.jsyaml||(window.jsyaml=Un);var sc="0.9.5";console.info(`%c drag-and-drop-card %c v${sc} `,"color:#fff;background:#03a9f4;font-weight:700;padding:2px 6px;border-radius:3px 0 0 3px","color:#03303a;background:#bdeaff;padding:2px 6px;border-radius:0 3px 3px 0");var cc=(t,...p)=>console.debug(`[drag-and-drop-card] ${t}`,...p);console.info("%c drag-and-drop-card loaded","color:#03a9f4;font-weight:700;");var Mr=()=>new Promise(t=>requestAnimationFrame(()=>t())),lc=()=>new Promise(t=>window.requestIdleCallback?requestIdleCallback(()=>t()):setTimeout(t,0)),ei=class t extends HTMLElement{constructor(){super();ht(this,"__booting",!1);ht(this,"_gridCanvas",null);ht(this,"_gridCtx",null);ht(this,"_gridCols",0);ht(this,"_gridRows",0);ht(this,"_gridCellSize",0);ht(this,"_gridDown",!1);ht(this,"_gridStartCol",-1);ht(this,"_gridStartRow",-1);ht(this,"_gridHoverCol",-1);ht(this,"_gridHoverRow",-1);ht(this,"_gridCurrCol",-1);ht(this,"_gridCurrRow",-1);ht(this,"_gridDirty",!1);ht(this,"_gridRAF",0);ht(this,"_gridTile",null);ht(this,"__gridPrevEditMode");ht(this,"__gridRO",null);ht(this,"__gridPollT",null);this.shadowRoot||this.attachShadow({mode:"open"}),this.__rebuiltCards=new WeakSet}_updateTabsA11y_(){var o;let e=this.tabsBar;if(!e)return;e.setAttribute("role","tablist"),e.querySelectorAll(".ddc-tab").forEach((c,s)=>{let d=c.classList.contains("active");c.setAttribute("role","tab"),c.setAttribute("aria-selected",String(d)),c.setAttribute("tabindex",d?"0":"-1"),c.dataset.index=String(s)}),this.__tabsKeyHandler||(this.__tabsKeyHandler=c=>{if(!["ArrowLeft","ArrowRight","Home","End"].includes(c.key))return;let d=Array.from(e.querySelectorAll(".ddc-tab"));if(!d.length)return;c.preventDefault();let u=d.findIndex(g=>g===document.activeElement),f=d.findIndex(g=>g.classList.contains("active")),v=u>=0?u:f>=0?f:0;c.key==="ArrowRight"&&(v=Math.min(d.length-1,v+1)),c.key==="ArrowLeft"&&(v=Math.max(0,v-1)),c.key==="Home"&&(v=0),c.key==="End"&&(v=d.length-1);let y=d[v];if(y){try{y.focus({preventScroll:!1})}catch{}y.click()}},e.addEventListener("keydown",this.__tabsKeyHandler)),this.__tabsScrollHandler||(this.__tabsScrollHandler=()=>{var c;return(c=this._updateTabOverflowShadows_)==null?void 0:c.call(this)},e.addEventListener("scroll",this.__tabsScrollHandler,{passive:!0})),(o=this._updateTabOverflowShadows_)==null||o.call(this)}_getCurrentDashboardUrlPath_(){let n=(window.location.pathname||"/").replace(/^\/+/,"").split("/")[0]||"lovelace";return n==="lovelace"?null:n}async _ensureCardIdSeededInStorage_(){var n;if((n=this.config)!=null&&n.id)return this.config.id;let e=crypto!=null&&crypto.randomUUID?crypto.randomUUID():"ddc_"+Math.random().toString(36).slice(2);this.config={...this.config,id:e};try{let o=this._getCurrentDashboardUrlPath_(),c=await this.hass.callWS(o?{type:"lovelace/config",url_path:o}:{type:"lovelace/config"}),s=this._findThisCardPathRecursive_(c,x=>(x==null?void 0:x.type)==="custom:drag-and-drop-card"&&(!x.id||x.id===e));if(!s)return e;let{viewIndex:d,cardIndex:u,parentPath:f}=s,v=c.views[d],g={...this._getCardByPath_(v,f,u),id:e};this._setCardByPath_(v,f,u,g),await this.hass.callWS(o?{type:"lovelace/config/save",url_path:o,config:c}:{type:"lovelace/config/save",config:c})}catch{}return e}async _persistThisCardConfigToStorage_(){var g,x;await this._ensureCardIdSeededInStorage_();let e={type:"custom:drag-and-drop-card",id:(g=this.config)==null?void 0:g.id,...this._config},n=this._getCurrentDashboardUrlPath_(),o=await this.hass.callWS(n?{type:"lovelace/config",url_path:n}:{type:"lovelace/config"}),c=this._findThisCardPathRecursive_(o,A=>{var S;return(A==null?void 0:A.type)==="custom:drag-and-drop-card"&&(A==null?void 0:A.id)===((S=this.config)==null?void 0:S.id)});if(!c)throw new Error("Card not found in Lovelace config");let{viewIndex:s,cardIndex:d,parentPath:u}=c,f=o.views[s],y={...this._getCardByPath_(f,u,d),...e};this._setCardByPath_(f,u,d,y),await this.hass.callWS(n?{type:"lovelace/config/save",url_path:n,config:o}:{type:"lovelace/config/save",config:o}),this.config=y,(x=this.requestUpdate)==null||x.call(this)}_findThisCardPathRecursive_(e,n){let o=(e==null?void 0:e.views)||[];for(let c=0;c<o.length;c++){let s=this._findInCardTree_(o[c],n);if(s)return{viewIndex:c,...s}}return null}_findInCardTree_(e,n,o=[]){var s;let c=(e==null?void 0:e.cards)||[];for(let d=0;d<c.length;d++){let u=c[d];if(n(u))return{cardIndex:d,parentPath:o};if((s=u==null?void 0:u.cards)!=null&&s.length){let f=this._findInCardTree_(u,n,o.concat(d));if(f)return f}}return null}_getCardByPath_(e,n,o){let c=e;for(let s of n||[])c=c.cards[s];return c.cards[o]}_setCardByPath_(e,n,o,c){let s=e;for(let d of n||[])s=s.cards[d];s.cards[o]=c}_ensureToolbarStyles_(){try{if(this.shadowRoot.querySelector("#ddc-toolbar-styles"))return;let n=document.createElement("style");n.id="ddc-toolbar-styles",n.textContent=`/* ===== Edit toolbar ===== */
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
  .color-pair { display:flex; gap:8px; }
  .color-pair input[type="color"] { width:44px; height:36px; border:0; background:transparent; padding:0; }
  .footer { display:flex; justify-content:flex-end; gap:10px; padding:12px 16px; border-top:1px solid var(--divider-color, rgba(0,0,0,.12)); }
  .btn.primary { background:var(--primary-color); color:#fff; border:0; border-radius:8px; padding:8px 16px; font-weight:600; cursor:pointer; }
  .btn.secondary { background:transparent; border:1px solid var(--divider-color, rgba(0,0,0,.25)); border-radius:8px; padding:8px 16px; cursor:pointer; }
  `,this.shadowRoot.appendChild(e)}_setHeaderVisible_(e=!0){var n,o,c,s,d;try{(((n=this._deepQueryAll)==null?void 0:n.call(this,"app-header, ha-top-app-bar, ha-top-app-bar-fixed, mwc-top-app-bar-fixed, ha-header-bar, app-toolbar, ha-toolbar"))||[]).forEach(g=>{g&&(g.dataset.ddcPrevDisplayHeader===void 0&&(g.dataset.ddcPrevDisplayHeader=g.style.display||"",g.dataset.ddcPrevMinH=g.style.minHeight||"",g.dataset.ddcPrevH=g.style.height||"",g.dataset.ddcPrevVis=g.style.visibility||""),e?(g.style.display=g.dataset.ddcPrevDisplayHeader||"",g.style.minHeight=g.dataset.ddcPrevMinH||"",g.style.height=g.dataset.ddcPrevH||"",g.style.visibility=g.dataset.ddcPrevVis||"",g.removeAttribute("hidden")):(g.style.display="none",g.style.minHeight="0",g.style.height="0",g.style.visibility="hidden",g.setAttribute("hidden","")))}),(((o=this._deepQueryAll)==null?void 0:o.call(this,'[slot="actionItems"], ha-icon-button, ha-button-menu, assist-button, search-input, ha-quick-bar, ha-mwc-menu'))||[]).forEach(g=>{g&&(g.dataset.ddcPrevDisplayAction===void 0&&(g.dataset.ddcPrevDisplayAction=g.style.display||"",g.dataset.ddcPrevVisAction=g.style.visibility||""),e?(g.style.display=g.dataset.ddcPrevDisplayAction||"",g.style.visibility=g.dataset.ddcPrevVisAction||""):(g.style.display="none",g.style.visibility="hidden"))}),[...((c=this._deepQueryAll)==null?void 0:c.call(this,"ha-app-layout"))||[],...((s=this._deepQueryAll)==null?void 0:s.call(this,"home-assistant-main"))||[],document.documentElement,document.body].filter(Boolean).forEach(g=>{if(g)if(g.dataset.ddcPrevHdrVars===void 0&&(g.dataset.ddcPrevHdrVars=JSON.stringify({mdc:g.style.getPropertyValue("--mdc-top-app-bar-height")||"",app:g.style.getPropertyValue("--app-header-height")||"",hdr:g.style.getPropertyValue("--header-height")||"",hah:g.style.getPropertyValue("--ha-header-height")||"",pad:g.style&&(g.style.paddingTop||"")||""})),e)try{let x=JSON.parse(g.dataset.ddcPrevHdrVars||"{}");g.style.setProperty("--mdc-top-app-bar-height",x.mdc||""),g.style.setProperty("--app-header-height",x.app||""),g.style.setProperty("--header-height",x.hdr||""),g.style.setProperty("--ha-header-height",x.hah||""),x.pad!==void 0&&(g.style.paddingTop=x.pad||"")}catch{}else{g.style.setProperty("--mdc-top-app-bar-height","0px"),g.style.setProperty("--app-header-height","0px"),g.style.setProperty("--header-height","0px"),g.style.setProperty("--ha-header-height","0px");try{g.style.paddingTop="0px"}catch{}}}),(((d=this._deepQueryAll)==null?void 0:d.call(this,"#contentContainer"))||[]).forEach(g=>{g&&(g.dataset.ddcPrevContentPadTop===void 0&&(g.dataset.ddcPrevContentPadTop=g.style&&(g.style.paddingTop||"")||""),g.style.paddingTop=e?g.dataset.ddcPrevContentPadTop||"":"0px")})}catch{}}_setSidebarVisible_(e=!0){var n,o;try{(((n=this._deepQueryAll)==null?void 0:n.call(this,"ha-sidebar"))||[]).forEach(d=>{d&&(d.dataset.ddcPrevDisplaySidebar===void 0&&(d.dataset.ddcPrevDisplaySidebar=d.style.display||""),d.style.display=e?d.dataset.ddcPrevDisplaySidebar||"":"none")}),(((o=this._deepQueryAll)==null?void 0:o.call(this,"ha-drawer"))||[]).forEach(d=>{if(d){d.dataset.ddcPrevDrawerWidth===void 0&&(d.dataset.ddcPrevDrawerWidth=d.style.getPropertyValue("--mdc-drawer-width")||""),e?d.style.setProperty("--mdc-drawer-width",d.dataset.ddcPrevDrawerWidth||""):d.style.setProperty("--mdc-drawer-width","0px");try{!e&&typeof d.close=="function"&&d.close()}catch{}}})}catch{}}_applyHaChromeVisibility_(){var e;try{let n=!!this.editMode||((e=this._isInHaEditorPreview)==null?void 0:e.call(this));n||!this.hideHaHeader?this._setHeaderVisible_(!0):this._setHeaderVisible_(!1),n||!this.hideHaSidebar?this._setSidebarVisible_(!0):this._setSidebarVisible_(!1)}catch{}}_applyBackgroundImageFromConfig(){var c;try{let s=navigator.userAgent||"";if(/iPad|iPhone|iPod/.test(s)&&n&&typeof n.src=="string"&&n.src.startsWith("data:")&&n.src.length>3e5){console.warn("[drag-and-drop-card] Skipping large inline background on iOS for stability.");return}}catch{}let e=this._config||{},n=e.background_image||e.bg_image||null,o=this.cardContainer;if(o)if(n&&n.src){let s=String(n.src).trim(),d=n.repeat===!0||n.repeat==="repeat"?"repeat":"no-repeat",u=Math.max(0,Math.min(1,Number((c=n.opacity)!=null?c:1))),f=n.size||"cover",v=n.position||"center center",y=n.attachment||"scroll",g=n.filter||"none";o.style.setProperty("--ddc-bg-image",s?`url("${s.replace(/"/g,'"')}")`:"none"),o.style.setProperty("--ddc-bg-repeat",d),o.style.setProperty("--ddc-bg-opacity",String(u)),o.style.setProperty("--ddc-bg-size",f),o.style.setProperty("--ddc-bg-position",v),o.style.setProperty("--ddc-bg-attachment",y),o.style.setProperty("--ddc-bg-filter",g),o.classList.add("has-bg-image")}else o.style.removeProperty("--ddc-bg-image"),o.style.removeProperty("--ddc-bg-repeat"),o.style.removeProperty("--ddc-bg-opacity"),o.style.removeProperty("--ddc-bg-size"),o.style.removeProperty("--ddc-bg-position"),o.style.removeProperty("--ddc-bg-attachment"),o.style.removeProperty("--ddc-bg-filter"),o.classList.remove("has-bg-image")}_applyBackgroundFromConfig(){var e,n,o,c,s,d,u,f;try{let v=((e=this._config)==null?void 0:e.background_mode)||((o=(n=this._config)==null?void 0:n.background_image)!=null&&o.src?"image":"none");if((c=this._destroyParticles_)==null||c.call(this),(s=this._destroyYouTube_)==null||s.call(this),v!=="image"){let y=this.cardContainer;y&&(y.style.removeProperty("--ddc-bg-image"),y.style.removeProperty("--ddc-bg-repeat"),y.style.removeProperty("--ddc-bg-opacity"),y.style.removeProperty("--ddc-bg-size"),y.style.removeProperty("--ddc-bg-position"),y.style.removeProperty("--ddc-bg-attachment"),y.style.removeProperty("--ddc-bg-filter"),y.classList.remove("has-bg-image"))}if(v==="image"){(d=this._applyBackgroundImageFromConfig)==null||d.call(this);return}if(v==="particles"){let y=((u=this._config)==null?void 0:u.background_particles)||{};this._attachParticlesBackground_(y);return}if(v==="youtube"){let y=((f=this._config)==null?void 0:f.background_youtube)||{};this._attachYouTubeBackground_(y);return}}catch(v){console.warn("[drag-and-drop-card] _applyBackgroundFromConfig failed:",v)}}_ensureBgHost_(){let e=this.cardContainer;if(!e)return null;let n=e.querySelector("#ddcBgHost");return n?n.innerHTML="":(n=document.createElement("div"),n.className="ddc-bg-host",n.id="ddcBgHost",n.setAttribute("aria-hidden","true"),e.prepend(n)),n}async _loadScriptOnce_(e){if(!e)throw new Error("script src required");if(this.__scriptCache||(this.__scriptCache=new Map),this.__scriptCache.has(e))return this.__scriptCache.get(e);let n=new Promise((o,c)=>{let s=document.createElement("script");s.src=e,s.async=!0,s.onload=()=>o(!0),s.onerror=()=>c(new Error("failed to load "+e)),document.head.appendChild(s)});return this.__scriptCache.set(e,n),n}_getRenderRoot_(){return this.renderRoot||this.shadowRoot||this}_withScopedDocument_(e){let n=this._getRenderRoot_();if(!n||n===document||!n.querySelector)return e();let o=document,c=o.getElementById.bind(o),s=o.querySelector?o.querySelector.bind(o):null;o.getElementById=d=>{try{let u=window.CSS&&CSS.escape?CSS.escape(String(d)):String(d);return n.querySelector("#"+u)||c(d)}catch{return c(d)}},s&&(o.querySelector=d=>{try{return n.querySelector(d)||s(d)}catch{return s(d)}});try{return e()}finally{o.getElementById=c,s&&(o.querySelector=s)}}async _ensureParticles_(){if(window.particlesJS)return!0;if(!this.__particlesLoadPromise){let e=n=>new Promise((o,c)=>{let s=document.createElement("script");s.src=n,s.async=!0,s.onload=()=>o(!0),s.onerror=()=>c(new Error("Failed to load "+n)),document.head.appendChild(s)});this.__particlesLoadPromise=e("/local/particles.min.js").catch(()=>e("https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js")).then(()=>!!window.particlesJS).catch(()=>!1)}return this.__particlesLoadPromise}_attachParticlesBackground_(e={}){var f,v;let n=(f=this._ensureBgHost_)==null?void 0:f.call(this);if(!n)return;try{(v=this._destroyParticles_)==null||v.call(this)}catch{}n.innerHTML="";let o=document.createElement("div");o.id="ddcParticles",o.className="particles-js",o.style.position="absolute",o.style.inset="0",n.appendChild(o);let c={particles:{number:{value:70,density:{enable:!0,value_area:900}},color:{value:"#ffffff"},shape:{type:"circle"},opacity:{value:.4},size:{value:3,random:!0},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.3,width:1},move:{enable:!0,speed:2,out_mode:"out"}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1},onclick:{enable:!1},resize:!0},modes:{repulse:{distance:100},push:{particles_nb:4}}},retina_detect:!0},s=!!e.pointer_events,d=e.config||JSON.parse(JSON.stringify(c));s?(d.interactivity.events.onhover={enable:!0,mode:"repulse"},d.interactivity.events.onclick={enable:!0,mode:"push"},n.style.pointerEvents="auto"):n.style.pointerEvents="none",(async()=>{var x;if(!await((x=this._ensureParticles_)==null?void 0:x.call(this))||!window.particlesJS)return;await(typeof requestAnimationFrame=="function"?new Promise(A=>requestAnimationFrame(()=>A())):Promise.resolve()),await(typeof requestAnimationFrame=="function"?new Promise(A=>requestAnimationFrame(()=>A())):Promise.resolve());let g=d;if(e.config_url)try{g=await(await fetch(e.config_url,{cache:"no-store"})).json()}catch(A){console.warn("[drag-and-drop-card] Failed to fetch particles config; falling back to defaults",A),g=d}this._withScopedDocument_(()=>{if(!Array.isArray(window.pJSDom))try{window.pJSDom=[]}catch{}window.particlesJS("ddcParticles",g)}),Array.isArray(window.pJSDom)&&window.pJSDom.length&&(this.__particlesInst=window.pJSDom[window.pJSDom.length-1])})(),this.__particlesHost=n}_destroyParticles_(){try{Array.isArray(window.pJSDom)||(window.pJSDom=[]),window.pJSDom.length&&(window.pJSDom.forEach(e=>{var n,o,c,s,d,u,f,v;try{(s=(c=(o=(n=e.pJS)==null?void 0:n.fn)==null?void 0:o.vendors)==null?void 0:c.destroy)==null||s.call(c)}catch{}try{(v=(f=(u=(d=e.pJS)==null?void 0:d.fn)==null?void 0:u.vendors)==null?void 0:f.destroypJS)==null||v.call(f)}catch{}}),window.pJSDom.length=0)}catch{}this.__particlesHost&&(this.__particlesHost.innerHTML=""),this.__particlesHost=null,this.__particlesInst=null}_parseYouTubeId_(e){if(!e)return null;let n=String(e).trim(),o=n.match(/(?:youtube\.com\/.*[?&]v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([A-Za-z0-9_-]{11})/)||n.match(/^([A-Za-z0-9_-]{11})$/);return o?o[1]:null}async _ensureYouTube_(){var e;return(e=window.YT)!=null&&e.Player?!0:(this.__ytReadyPromise||(this.__ytReadyPromise=new Promise(n=>{var s;let o=()=>n(!0);if((s=window.YT)!=null&&s.Player)return o();window.onYouTubeIframeAPIReady=o;let c=document.createElement("script");c.src="https://www.youtube.com/iframe_api",c.async=!0,c.onerror=()=>n(!1),document.head.appendChild(c)})),this.__ytReadyPromise)}_attachYouTubeIframeDirect_(e,n,{start:o,end:c,mute:s=!0,loop:d=!0}={}){var y;let u=new URLSearchParams({autoplay:"1",mute:s?"1":"0",controls:"0",playsinline:"1",rel:"0",modestbranding:"1",iv_load_policy:"3",loop:d?"1":"0"});d&&u.set("playlist",n),Number.isFinite(o)&&u.set("start",String(o)),Number.isFinite(c)&&u.set("end",String(c));let f=`https://www.youtube.com/embed/${n}?${u.toString()}`,v=document.createElement("iframe");v.src=f,v.setAttribute("frameborder","0"),v.setAttribute("allow","autoplay; encrypted-media; picture-in-picture; fullscreen"),v.setAttribute("allowfullscreen","true"),v.style.position="absolute",v.style.inset="0",v.style.width="100%",v.style.height="100%",e.appendChild(v),this.__ytWrap=e,(y=this._layoutYtBackground_)==null||y.call(this)}_attachYouTubeBackground_(e={}){this.__ytSize=e.size||"cover",this.__ytPosition=e.position||"center",this.__ytOpacity=e.opacity!=null?Math.max(0,Math.min(1,Number(e.opacity))):1,this.__ytAttachment=e.attachment||"scroll";let n=String(this.__ytPosition).toLowerCase(),o=.5,c=.5;n.includes("left")?o=0:n.includes("right")&&(o=1),n.includes("top")?c=0:n.includes("bottom")&&(c=1),(n==="center"||n==="centre"||n==="middle")&&(o=.5,c=.5),this.__ytAx=o,this.__ytAy=c;let s=this._ensureBgHost_();if(!s)return;let d=this._parseYouTubeId_(e.video_id||e.url);if(!d){console.warn("[drag-and-drop-card] No YouTube video id");return}let u=document.createElement("div");u.className="yt-bg",this.__ytAttachment==="fixed"?(u.style.position="fixed",u.style.left="0",u.style.top="0",u.style.width="100%",u.style.height="100%"):(u.style.position="absolute",u.style.inset="0"),u.style.opacity=String(this.__ytOpacity),u.style.filter="none",u.style.pointerEvents="none",s.appendChild(u);let f=document.createElement("div");f.id="ddcYtFrame",f.style.position="absolute",f.style.left="0",f.style.top="0",f.style.width="100%",f.style.height="100%",u.appendChild(f);let v=Number.isFinite(e.start)?Number(e.start):void 0,y=Number.isFinite(e.end)?Number(e.end):void 0,g=e.mute!==!1,x=e.loop!==!1;(async()=>{if(!await this._ensureYouTube_()||!(window.YT&&window.YT.Player)){if(this._attachYouTubeIframeDirect_(u,d,{start:v,end:y,mute:g,loop:x}),!this.__ytResizeObs){this.__ytResizeObs=new ResizeObserver(()=>{var T;return(T=this._layoutYtBackground_)==null?void 0:T.call(this)});try{this.__ytResizeObs.observe(this.cardContainer)}catch{}window.addEventListener("resize",this.__ytOnWinResize=()=>{var T;return(T=this._layoutYtBackground_)==null?void 0:T.call(this)})}return}if(this.__ytPlayer=new window.YT.Player(f,{width:"100%",height:"100%",videoId:d,playerVars:{autoplay:1,controls:0,disablekb:1,fs:0,iv_load_policy:3,modestbranding:1,rel:0,playsinline:1,loop:x?1:0,playlist:x?d:void 0,start:v,end:y},events:{onReady:T=>{var L;try{g&&T.target.mute(),T.target.playVideo()}catch{}(L=this._layoutYtBackground_)==null||L.call(this)},onStateChange:T=>{if(T.data===window.YT.PlayerState.ENDED&&x)try{let L=Number.isFinite(v)?v:0,k=window.performance&&performance.now?performance.now():Date.now();(!this.__ytLastLoopAt||k-this.__ytLastLoopAt>1500)&&(this.__ytLastLoopAt=k,T.target.seekTo(L,!0),T.target.playVideo())}catch{}}}}),!this.__ytResizeObs){this.__ytResizeObs=new ResizeObserver(()=>{var T;return(T=this._layoutYtBackground_)==null?void 0:T.call(this)});try{this.__ytResizeObs.observe(this.cardContainer)}catch{}window.addEventListener("resize",this.__ytOnWinResize=()=>{var T;return(T=this._layoutYtBackground_)==null?void 0:T.call(this)})}})(),this.__ytWrap=u}_layoutYtBackground_(){var e,n,o,c,s,d,u,f;try{if(!this.__ytWrap)return;let v=this.__scaleOuter||this.cardContainer,y=0,g=0;try{y=parseFloat((n=(e=this.cardContainer)==null?void 0:e.style)==null?void 0:n.width)||((o=this.cardContainer)==null?void 0:o.scrollWidth)||((c=this.cardContainer)==null?void 0:c.offsetWidth)||0,g=parseFloat((d=(s=this.cardContainer)==null?void 0:s.style)==null?void 0:d.height)||((u=this.cardContainer)==null?void 0:u.scrollHeight)||((f=this.cardContainer)==null?void 0:f.offsetHeight)||0}catch{}let x,A;try{if(String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"){let V=v.getBoundingClientRect();if(x=V.width,y>0){let K=Math.min(x/y,1);A=g*K}else A=V.height}else x=y||v.getBoundingClientRect().width,A=g||v.getBoundingClientRect().height}catch{let F=v.getBoundingClientRect();x=F.width,A=F.height}let S=this.__ytAttachment==="fixed",T=S&&window.innerWidth||x,L=S&&window.innerHeight||A;if(!x||!A)return;let k=this.__ytSize||"cover",O=16/9,M=S?T/L:x/A,_,P,R=0,H=0;k==="100% 100%"||k==="fill"||k==="stretch"?(_=S?T:x,P=S?L:A,R=0,H=0):k==="contain"?M>O?(P=S?L:A,_=(S?L:A)*O,H=0,R=(x-_)/2):(_=S?T:x,P=(S?T:x)/O,R=0,H=(A-P)/2):M>O?(_=S?T:x,P=(S?T:x)/O,R=0,H=(A-P)/2):(P=S?L:A,_=(S?L:A)*O,H=0,R=(x-_)/2),this.__ytWrap.style.overflow="hidden";let U=this.__ytAx!=null?this.__ytAx:.5,$=this.__ytAy!=null?this.__ytAy:.5;R=((S?T:x)-_)*U,H=((S?L:A)-P)*$;let re=this.__ytWrap.querySelector("iframe")||this.__ytWrap;re.style.width=`${_}px`,re.style.height=`${P}px`,re.style.left=`${R}px`,re.style.top=`${H}px`}catch{}}_destroyYouTube_(){var e,n,o;try{(n=(e=this.__ytPlayer)==null?void 0:e.destroy)==null||n.call(e)}catch{}if(this.__ytPlayer=null,this.__ytResizeObs){try{this.__ytResizeObs.disconnect()}catch{}this.__ytResizeObs=null}this.__ytOnWinResize&&(window.removeEventListener("resize",this.__ytOnWinResize),this.__ytOnWinResize=null),(o=this.__ytWrap)!=null&&o.parentNode&&this.__ytWrap.parentNode.removeChild(this.__ytWrap),this.__ytWrap=null}_evaluateVisibility_(e){try{let n=this.hass||this._hass;if(!Array.isArray(e)||e.length===0)return!0;let o=c=>{var d,u,f,v,y;if(!c||typeof c!="object")return!0;let s=c.condition||c.type||"state";if(s==="and"||s==="or"){let g=Array.isArray(c.conditions)?c.conditions:[];return g.length===0?!0:s==="and"?g.every(x=>o(x)):g.some(x=>o(x))}if(s==="state"){let g=c.entity;if(!g)return!0;let x=(d=n==null?void 0:n.states)==null?void 0:d[g];if(!x)return!1;let A=String((u=x.state)!=null?u:"");return c.state!==void 0?(Array.isArray(c.state)?c.state:[c.state]).some(T=>String(T)===A):c.state_not!==void 0?!(Array.isArray(c.state_not)?c.state_not:[c.state_not]).some(T=>String(T)===A):!0}if(s==="numeric_state"){let g=c.entity;if(!g)return!0;let x=(f=n==null?void 0:n.states)==null?void 0:f[g];if(!x)return!1;let A=parseFloat(x.state);return!(isNaN(A)||c.above!==void 0&&!(A>Number(c.above))||c.below!==void 0&&!(A<Number(c.below)))}if(s==="screen"){let g=c.media_query||c.query;if(!g||typeof g!="string")return!0;try{return window.matchMedia(g).matches}catch{return!0}}if(s==="user"){let g=Array.isArray(c.users)?c.users:c.user?[c.user]:[];if(!g.length)return!0;let x=((v=n==null?void 0:n.user)==null?void 0:v.id)||((y=n==null?void 0:n.user)==null?void 0:y.id)||null;return x?g.includes(x):!0}return!0};return e.every(c=>o(c))}catch(n){return console.warn("[ddc:visibility] evaluate error",n),!0}}_applyVisibility_(){var e;try{let n=((e=this.cardContainer)==null?void 0:e.children)||[],o=this._normalizeTabId(this.activeTab);for(let c of n){if(!c||!c.firstElementChild||this._normalizeTabId(c.dataset.tabId)!==o)continue;let u=(this._extractCardConfig(c.firstElementChild)||{}).visibility,f=this.editMode?!0:this._evaluateVisibility_(u);c.style.display=f?"":"none"}}catch(n){console.warn("[ddc:visibility] apply error",n)}}async _onKeyDown_(e){var d,u,f,v,y,g,x,A,S,T;if(!this.editMode||this._isTypingTarget_(e.target))return;let n=Number(this.gridSize||10),o=e.altKey?1:e.shiftKey?n*5:n,c=0,s=0;switch(e.key){case"ArrowLeft":c=-o;break;case"ArrowRight":c=o;break;case"ArrowUp":s=-o;break;case"ArrowDown":s=o;break}if(c||s){e.preventDefault(),this._moveSelectionBy_(c,s,{liveSnap:!e.altKey});return}if(e.key==="Delete"||e.key==="Backspace"){let L=this._selection&&this._selection.size?Array.from(this._selection):[];if(!L.length)return;e.preventDefault(),L.forEach(k=>k.remove()),(d=this._clearSelection)==null||d.call(this),(u=this._resizeContainer)==null||u.call(this),(f=this._queueSave)==null||f.call(this,"delete-key"),(v=this._ensurePlaceholderIfEmpty)==null||v.call(this);return}if((e.ctrlKey||e.metaKey)&&(e.key==="d"||e.key==="D")){e.preventDefault(),await this._duplicateSelection_();return}if((e.ctrlKey||e.metaKey)&&e.key==="]"){e.preventDefault(),this._selection&&((g=(y=this._selection).forEach)==null||g.call(y,L=>{var k;return(k=this._adjustZ)==null?void 0:k.call(this,L,1)})),(x=this._queueSave)==null||x.call(this,"z-up");return}if((e.ctrlKey||e.metaKey)&&e.key==="["){e.preventDefault(),this._selection&&((S=(A=this._selection).forEach)==null||S.call(A,L=>{var k;return(k=this._adjustZ)==null?void 0:k.call(this,L,-1)})),(T=this._queueSave)==null||T.call(this,"z-down");return}}async _duplicateSelection_(){var n,o,c,s,d,u,f,v,y,g,x,A;if(!this._selection||!this._selection.size)return;let e=Array.from(this._selection);for(let S of e)try{let T=((n=this._extractCardConfig)==null?void 0:n.call(this,S.firstElementChild))||{},L=await((o=this._createCard)==null?void 0:o.call(this,T)),k=(c=this._makeWrapper)==null?void 0:c.call(this,L);if(!L||!k)continue;k.style.width=S.style.width,k.style.height=S.style.height;let O=Number(this.gridSize||10),M=(parseFloat(S.getAttribute("data-x"))||0)+O,_=(parseFloat(S.getAttribute("data-y"))||0)+O;(s=this._setCardPosition)==null||s.call(this,k,M,_),k.style.zIndex=String((((d=this._highestZ)==null?void 0:d.call(this))||0)+1);try{let P=(u=S.dataset)==null?void 0:u.tabId;P&&(k.dataset.tabId=P)}catch{}(f=this.cardContainer)==null||f.appendChild(k);try{(v=this._addTabSelectorToChip)==null||v.call(this,k,k.dataset.tabId)}catch{}try{(y=this._rebuildOnce)==null||y.call(this,k.firstElementChild)}catch{}try{(g=this._initCardInteract)==null||g.call(this,k)}catch{}}catch{}try{(x=this._resizeContainer)==null||x.call(this)}catch{}try{(A=this._queueSave)==null||A.call(this,"duplicate")}catch{}}_moveSelectionBy_(e,n,{liveSnap:o=!0}={}){var v,y,g,x,A;if(!this._selection||!this._selection.size)return;let c=Array.from(this._selection),s=Number(this.gridSize||10),d=(v=this._isContainerFixed)==null?void 0:v.call(this),u=((y=this._getContainerSize)==null?void 0:y.call(this))||{w:1/0,h:1/0},f=c.map(S=>{let T=parseFloat(S.getAttribute("data-x-raw"))||parseFloat(S.getAttribute("data-x"))||0,L=parseFloat(S.getAttribute("data-y-raw"))||parseFloat(S.getAttribute("data-y"))||0,k=parseFloat(S.style.width)||S.getBoundingClientRect().width,O=parseFloat(S.style.height)||S.getBoundingClientRect().height,M=T+e,_=L+n;d&&(M=Math.max(0,Math.min(M,Math.max(0,u.w-k))),_=Math.max(0,Math.min(_,Math.max(0,u.h-O))));let P=o?Math.round(M/s)*s:M,R=o?Math.round(_/s)*s:_;return{el:S,rawX:M,rawY:_,snapX:P,snapY:R,w:k,h:O}});if(this.disableOverlap&&typeof this._pushCardsOutOfTheWay=="function")try{this._pushCardsOutOfTheWay(f,e,n,o,s)}catch{}for(let S of f){S.el.setAttribute("data-x-raw",String(S.rawX)),S.el.setAttribute("data-y-raw",String(S.rawY));try{(g=this._setCardPosition)==null||g.call(this,S.el,S.snapX,S.snapY)}catch{}}try{(x=this._resizeContainer)==null||x.call(this)}catch{}try{(A=this._queueSave)==null||A.call(this,"nudge")}catch{}}_syncTabsWidth_(){try{if(String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto")return;let n=this.tabsBar;if(!n)return;if(this.tabsPosition==="left"){n.style.width="",n.style.maxWidth="";return}let o=this.cardContainer||this.__scaleOuter;if(!o)return;let c=0;try{let s=o.getBoundingClientRect();c=s&&s.width?s.width:0}catch{}if(c<=0&&this.__scaleOuter&&this.__scaleOuter!==o)try{let s=this.__scaleOuter.getBoundingClientRect();c=s&&s.width?s.width:0}catch{}c>0&&(n.style.width=`${c}px`,n.style.maxWidth=`${c}px`)}catch{}}_isTypingTarget_(e){var c,s,d,u;if(!e||e===window||e===document)return!1;let n=(c=e.closest)==null?void 0:c.call(e,'input, textarea, [contenteditable="true"], ha-textfield, mwc-textfield');if(!n)return!1;let o=((d=(s=n.tagName)==null?void 0:s.toLowerCase)==null?void 0:d.call(s))||"";return o==="input"||o==="textarea"||((u=n.hasAttribute)==null?void 0:u.call(n,"contenteditable"))}_scheduleReflowAndScale(){this.__reflowRAF||(this.__reflowRAF=requestAnimationFrame(()=>{var e,n,o;this.__reflowRAF=null;try{(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="dynamic"&&((e=this._resizeContainer)==null||e.call(this))}catch{}try{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(n=this._applyAutoFillNoScale)==null||n.call(this):(o=this._applyAutoScale)==null||o.call(this)}catch{}}))}__ddcBindPointerListeners(){if(!this.__ddcPtrBound){this.__ddcPtrBound=!0,this.__onDDCPointerDown=e=>{var n,o;try{if(e.button!==void 0&&e.button!==0)return;let c=((n=e.composedPath)==null?void 0:n.call(e))||[],s=null;for(let d of c)if(d&&d.classList&&d.classList.contains("card-wrapper")){s=d;break}if(!s)return;this.__ddcDragging=!0,this.__scaleOuter&&(this.__prevOverflow=this.__scaleOuter.style.overflow,this.__scaleOuter.style.overflow="visible"),(o=this._scheduleReflowAndScale)==null||o.call(this)}catch{}},this.__onDDCPointerMove=e=>{var n;try{if(!this.__ddcDragging)return;(n=this._scheduleReflowAndScale)==null||n.call(this)}catch{}},this.__onDDCPointerUp=e=>{var n,o;try{if(!this.__ddcDragging)return;this.__ddcDragging=!1,this.__scaleOuter&&(this.__scaleOuter.style.overflow=this.__prevOverflow||"");try{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(n=this._applyAutoFillNoScale)==null||n.call(this):(o=this._applyAutoScale)==null||o.call(this)}catch{}}catch{}};try{this.addEventListener("pointerdown",this.__onDDCPointerDown,{passive:!0})}catch{}try{this.addEventListener("pointermove",this.__onDDCPointerMove,{passive:!0})}catch{}try{window.addEventListener("pointerup",this.__onDDCPointerUp,{passive:!0})}catch{}try{window.addEventListener("pointercancel",this.__onDDCPointerUp,{passive:!0})}catch{}}}_renderEditToolbar_(){this.shadowRoot.querySelectorAll(".ddc-toolbar").forEach(g=>g.remove()),this._ensureToolbarStyles_();let e=document.createElement("div");e.className="ddc-toolbar";let n=document.createElement("div");n.className="ddc-t-group",n.append(this._mkBtn_("add_card","mdi:plus-box","Add card (A)","primary"),this._mkBtn_("snap_toggle","mdi:magnet","Toggle snap (G)"),this._mkBtn_("align_grid","mdi:grid","Align to grid"));let o=document.createElement("div");o.className="ddc-t-group";let c=document.createElement("div");c.className="ddc-t-status";let s=document.createElement("div");s.className="ddc-t-dot"+(this.__dirty?" dirty":"");let d=document.createElement("span");d.textContent=this.__dirty?"Unsaved changes":`Saved${this.__lastSavedAt?" \xB7 "+this.__lastSavedAt:""}`,c.append(s,d),o.appendChild(c);let u=document.createElement("div");u.className="ddc-t-group",u.append(this._mkBtn_("reload","mdi:refresh","Reload (R)","ghost"),this._mkBtn_("open_hads","mdi:alpha-h-box-outline","Open HACS/HADS","ghost"),this._mkBtn_("apply","mdi:content-save","Apply / Save (S)","primary"),this._mkBtn_("exit_edit","mdi:logout-variant","Exit edit (Esc)","danger"));let f=document.createElement("div");f.className="ddc-t-group ddc-t-row",f.append(n);let v=document.createElement("div");v.className="ddc-t-group ddc-t-row",v.append(o);let y=document.createElement("div");y.className="ddc-t-group ddc-t-row",y.append(u),e.append(f,document.createElement("div")).lastChild.className="ddc-t-sep",e.append(v,document.createElement("div")).lastChild.className="ddc-t-sep",e.append(y),e.addEventListener("click",g=>{let x=g.target.closest("[data-action]");x&&this._onToolbarAction_(x.dataset.action,{button:x,bar:e,dot:s,txt:d})}),this.shadowRoot.appendChild(e);try{this.__toolbarRO&&this.__toolbarRO.disconnect(),this.__toolbarRO=new ResizeObserver(g=>{for(let x of g)e.classList.toggle("compact",x.contentRect.width<980)}),this.__toolbarRO.observe(e)}catch{}this.__toolbarKeyHandler=g=>{if(!(!this.editMode&&!this.isEditing)){if(g.key==="a"||g.key==="A")return this._onToolbarAction_("add_card");if(g.key==="s"||g.key==="S")return this._onToolbarAction_("apply");if(g.key==="r"||g.key==="R")return this._onToolbarAction_("reload");if(g.key==="g"||g.key==="G")return this._onToolbarAction_("snap_toggle");if(g.key==="Escape")return this._onToolbarAction_("exit_edit")}},window.addEventListener("keydown",this.__toolbarKeyHandler)}async _onToolbarAction_(e,n={}){var o,c,s,d,u,f,v,y,g,x,A;switch(e){case"add_card":(o=this._openAddCardDialog_)!=null&&o.call(this)||(c=this._addNewCard_)!=null&&c.call(this)||((s=this._openEntityPicker_)==null||s.call(this));break;case"snap_toggle":{this.dragLiveSnap=!this.dragLiveSnap,(d=this._initInteract)==null||d.call(this),(u=this._toast_)==null||u.call(this,`Live snap ${this.dragLiveSnap?"ON":"OFF"}`);break}case"align_grid":(f=this._alignAllToGrid_)==null||f.call(this,this.gridSize);break;case"reload":(v=this._reloadLayout_)==null||v.call(this);break;case"open_hads":(y=this._openHACS_)!=null&&y.call(this)||window.open("/hacs","_blank")||window.open("/hacsfiles","_blank");break;case"apply":{let S=()=>{this._setDirty_(!1),n!=null&&n.txt&&(n.txt.textContent=`Saved \xB7 ${this.__lastSavedAt}`),n!=null&&n.dot&&n.dot.classList.remove("dirty","error")},T=()=>{n!=null&&n.dot&&n.dot.classList.add("error")};try{this._saveLayoutNow_?await this._saveLayoutNow_():this._persistThisCardConfigToStorage_?await this._persistThisCardConfigToStorage_():(g=this._queueSave)==null||g.call(this,"toolbar-apply",!0),this.__lastSavedAt=new Date().toLocaleTimeString(),S()}catch(L){console.warn(L),T()}break}case"exit_edit":if((x=this._toggleEditMode)!=null&&x.call(this,!1)||(A=this._exitEditMode_)!=null&&A.call(this)||(this.isEditing=!1),this.__toolbarKeyHandler&&(window.removeEventListener("keydown",this.__toolbarKeyHandler),this.__toolbarKeyHandler=null),this.__toolbarRO){try{this.__toolbarRO.disconnect()}catch{}this.__toolbarRO=null}this.shadowRoot.querySelectorAll(".ddc-toolbar").forEach(S=>S.remove());break}}_ensureScaleWrapper(){let e=this.cardContainer;if(!e||this.__scaleOuter&&this.__scaleOuter.contains(e))return;let n=document.createElement("div");n.className="ddc-scale-outer",Object.assign(n.style,{position:"relative",width:"100%",overflow:"hidden"}),e.parentNode&&(e.parentNode.insertBefore(n,e),n.appendChild(e)),Object.assign(e.style,{position:"absolute",top:"0",left:"0",transformOrigin:"top left"}),this.__scaleOuter=n}_hasCardModDeep(e){try{if(!e||typeof e!="object")return!1;if(e.card_mod||e.type==="custom:mod-card")return!0;if(e.card)return this._hasCardModDeep(e.card);if(Array.isArray(e.cards)){for(let n of e.cards)if(this._hasCardModDeep(n))return!0}return!1}catch{return!1}}_rebuildOnce(e){try{if(!e||(this.__rebuiltCards||(this.__rebuiltCards=new WeakSet),this.__rebuiltCards.has(e)))return;this.__rebuiltCards.add(e),e.dispatchEvent(new Event("ll-rebuild",{bubbles:!0,composed:!0}))}catch{}}_deepQueryAll(e,n=document){let o=[],c=s=>{if(!s)return;if(s.querySelectorAll)try{s.querySelectorAll(e).forEach(f=>o.push(f))}catch{}let d=document.createTreeWalker(s,NodeFilter.SHOW_ELEMENT,null),u=s;for(;u;){let f=u.shadowRoot;f&&c(f),u=d.nextNode()}};return c(n),o}_syncEditorsStorageKey(){try{let e=this.storageKey||"";this._deepQueryAll("#storage_key").forEach(o=>{try{o&&o.tagName==="INPUT"&&o.value!==e&&(o.value=e,o.dispatchEvent(new Event("input",{bubbles:!0})),o.dispatchEvent(new Event("change",{bubbles:!0})))}catch{}})}catch{}}static _genKey(){var n,o;return`layout_${((o=(n=globalThis.crypto)==null?void 0:n.randomUUID)==null?void 0:o.call(n))||`${Date.now().toString(36)}_${Math.random().toString(36).slice(2,8)}`}`}static get type(){return"drag-and-drop-card"}static get title(){return"Drag & Drop Card"}static get description(){return"Flexible grid layout card with drag\u2011and\u2011drop editing."}static get icon(){return"mdi:cursor-move"}static get group(){return"custom"}static getStubConfig(){return{type:"custom:drag-and-drop-card",storage_key:this._genKey(),grid:10,drag_live_snap:!1,auto_save:!0,auto_save_debounce:800,container_size_mode:"dynamic",hero_image:"https://i.postimg.cc/CxsWQgwp/Chat-GPT-Image-Sep-5-2025-09-26-16-AM.png"}}static getConfigElement(){let e=document.createElement("div");e.innerHTML=`
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
  `;let n=()=>{let v=u();s.disabled=!v},o=async()=>{var y,g;let v=e.getConfig();e.dispatchEvent(new CustomEvent("config-changed",{detail:{config:v}})),n();try{if(this.storageKey){let x=this._exportableOptions?this._exportableOptions():v;await this._saveOptionsToBackend(this.storageKey,x)}}catch{}try{await this._persistThisCardConfigToStorage_()}catch{try{let A=this._exportableOptions?this._exportableOptions():v;await((y=this._persistOptionsToYaml)==null?void 0:y.call(this,A,{patchAllInCurrentViewIfNoKey:!0}))}catch{}}try{(g=this._applyBackgroundFromConfig)==null||g.call(this)}catch{}},c=()=>{var y,g,x,A;let v=(A=(x=(y=e.querySelector("#sizeMode"))==null?void 0:y.value)!=null?x:(g=e.querySelector("#ddc-setting-sizeMode"))==null?void 0:g.value)!=null?A:"dynamic";e.querySelector("#sizeCustom").style.display=v==="fixed_custom"?"inline-flex":"none",e.querySelector("#sizePresetWrap").style.display=v==="preset"?"inline-flex":"none"},s=e.querySelector("#applyBtn"),d=e.querySelector("#revertBtn");["#sizeMode","#sizePreset","#sizeOrientation"].forEach(v=>{let y=e.querySelector(v);if(y){try{y.fixedMenuPosition=!0}catch{}y.addEventListener("closed",g=>g.stopPropagation())}}),e.setConfig=(v={})=>{var x,A,S,T,L,k,O,M;e._config={type:v.type||"custom:drag-and-drop-card",...v},e._config.storage_key||(e._config.storage_key=`layout_${((x=crypto==null?void 0:crypto.randomUUID)==null?void 0:x.call(crypto))||Date.now().toString(36)}`,e.__autokeyPending=!0),e.querySelector("#storage_key").value=e._config.storage_key||"",e.querySelector("#grid").value=(A=e._config.grid)!=null?A:10,e.querySelector("#liveSnap").checked=!!e._config.drag_live_snap,e.querySelector("#autoSave").checked=e._config.auto_save!==!1,e.querySelector("#autoSaveDebounce").value=(S=e._config.auto_save_debounce)!=null?S:800,e.querySelector("#containerBg").value=(T=e._config.container_background)!=null?T:"transparent",e.querySelector("#cardBg").value=(L=e._config.card_background)!=null?L:"var(--ha-card-background, var(--card-background-color))",e.querySelector("#debug").checked=!!e._config.debug,e.querySelector("#noOverlap").checked=!!e._config.disable_overlap,e.querySelector("#autoResize").checked=!!e._config.auto_resize_cards,e.querySelector("#animateCards").checked=!!e._config.animate_cards;let y=e.querySelector("#sizeMode")||e.querySelector("#ddc-setting-sizeMode");y&&(y.value=e._config.container_size_mode||"dynamic"),e.querySelector("#sizeW").value=(k=e._config.container_fixed_width)!=null?k:"",e.querySelector("#sizeH").value=(O=e._config.container_fixed_height)!=null?O:"",e.querySelector("#sizeOrientation").value=e._config.container_preset_orientation||"auto";let g=e.querySelector("#sizePreset");if(!g.__filled){let _=(((M=this._sizePresets)==null?void 0:M.call(this))||[]).reduce((P,R)=>{var H;return(P[H=R.group||"other"]||(P[H]=[])).push(R),P},{});g.innerHTML="";for(let[P,R]of Object.entries(_)){let H=document.createElement("optgroup");H.label=P.replace(/(^.|-.?)/g,$=>$.toUpperCase()),R.forEach($=>{let re=document.createElement("mwc-list-item");re.value=$.key,re.textContent=`${$.label} (${$.w}\xD7${$.h})`,H.appendChild(re)});let U=document.createElement("mwc-list-item");U.setAttribute("disabled",""),U.textContent=`\u2014 ${H.label} \u2014`,g.appendChild(U),Array.from(H.children).forEach($=>g.appendChild($))}g.__filled=!0}e._config.container_preset&&(g.value=e._config.container_preset),c(),n(),e.__autokeyPending&&(e.__autokeyPending=!1,o())},e.getConfig=()=>{var y,g,x,A;let v={...e._config||{}};v.storage_key=e.querySelector("#storage_key").value||"",v.grid=Number(e.querySelector("#grid").value||10),v.drag_live_snap=!!e.querySelector("#liveSnap").checked,v.auto_save=!!e.querySelector("#autoSave").checked,v.auto_save_debounce=Number(e.querySelector("#autoSaveDebounce").value||800),v.container_background=e.querySelector("#containerBg").value||"transparent",v.card_background=e.querySelector("#cardBg").value||"var(--ha-card-background, var(--card-background-color))",v.debug=!!e.querySelector("#debug").checked,v.disable_overlap=!!e.querySelector("#noOverlap").checked,v.auto_resize_cards=!!e.querySelector("#autoResize").checked;try{let S=e.querySelector("#ddc-bg-mode"),T=e.querySelector("#ddc-setting-bgImg"),L=e.querySelector("#ddc-bg-repeat"),k=e.querySelector("#ddc-bg-size"),O=e.querySelector("#ddc-bg-position"),M=e.querySelector("#ddc-bg-attachment"),_=e.querySelector("#ddc-bg-opacity"),P=e.querySelector("#ddc-particles-url"),R=e.querySelector("#ddc-particles-pointer"),H=e.querySelector("#ddc-youtube-url"),U=e.querySelector("#ddc-youtube-start"),$=e.querySelector("#ddc-youtube-end"),re=e.querySelector("#ddc-youtube-mute"),F=e.querySelector("#ddc-youtube-loop"),V=e.querySelector("#ddc-youtube-size"),K=e.querySelector("#ddc-youtube-position"),le=e.querySelector("#ddc-youtube-attachment"),Ke=e.querySelector("#ddc-youtube-opacity"),pe=(S==null?void 0:S.value)||"none";v.background_mode=pe;let ze=je=>Math.max(0,Math.min(1,je)),Ce=je=>{let qe=parseFloat((je==null?void 0:je.value)||"100");return Number.isFinite(qe)?ze(qe/100):1},ke=je=>Object.fromEntries(Object.entries(je).filter(([,qe])=>qe!=null&&qe!==""));if(pe==="image"){let je=((T==null?void 0:T.value)||"").trim();v.background_image=ke({src:je||void 0,repeat:(L==null?void 0:L.value)||"no-repeat",size:(k==null?void 0:k.value)||"cover",position:(O==null?void 0:O.value)||"center center",attachment:(M==null?void 0:M.value)||"scroll",opacity:Ce(_)})}if(pe==="particles"&&(v.background_particles=ke({config_url:((P==null?void 0:P.value)||"").trim()||void 0,pointer_events:!!(R!=null&&R.checked)})),pe==="youtube"){let je=qe=>{let Qe=parseInt(((qe==null?void 0:qe.value)||"").trim(),10);return Number.isFinite(Qe)?Qe:void 0};v.background_youtube=ke({url:((H==null?void 0:H.value)||"").trim()||void 0,start:je(U),end:je($),mute:!!(re!=null&&re.checked),loop:!!(F!=null&&F.checked),size:(V==null?void 0:V.value)||"cover",position:(K==null?void 0:K.value)||"center center",attachment:(le==null?void 0:le.value)||"scroll",opacity:Ce(Ke)})}pe!=="image"&&delete v.background_image,pe!=="particles"&&delete v.background_particles,pe!=="youtube"&&delete v.background_youtube}catch{}return v.animate_cards=!!e.querySelector("#animateCards").checked,v.container_size_mode=(A=(x=(y=e.querySelector("#sizeMode"))==null?void 0:y.value)!=null?x:(g=e.querySelector("#ddc-setting-sizeMode"))==null?void 0:g.value)!=null?A:"dynamic",v.container_fixed_width=Number(e.querySelector("#sizeW").value||0)||void 0,v.container_fixed_height=Number(e.querySelector("#sizeH").value||0)||void 0,v.container_preset=e.querySelector("#sizePreset").value||void 0,v.container_preset_orientation=e.querySelector("#sizeOrientation").value||"auto",v};let u=()=>{let v=e.getConfig(),y=e._config||{};try{return JSON.stringify(v)!==JSON.stringify(y)}catch{return!0}},f=(v,y="input")=>{var g;return(g=e.querySelector(v))==null?void 0:g.addEventListener(y,()=>{v==="#sizeMode"&&c(),n()})};return f("#storage_key"),f("#grid"),f("#liveSnap","change"),f("#autoSave","change"),f("#autoSaveDebounce"),f("#containerBg"),f("#cardBg"),f("#debug","change"),f("#noOverlap","change"),f("#autoResize","change"),f("#animateCards","change"),f("#sizeMode","change"),f("#ddc-setting-sizeMode","change"),f("#sizeW"),f("#sizeH"),f("#sizePreset","selected"),f("#sizeOrientation","selected"),s==null||s.addEventListener("click",()=>{o()}),d==null||d.addEventListener("click",()=>e.setConfig(e._config)),e}static _sizePresets(){return[{key:"iphone-14-pro",label:"iPhone 14 Pro",w:393,h:852,group:"phone"},{key:"iphone-14-pro-max",label:"iPhone 14 Pro Max",w:430,h:932,group:"phone"},{key:"iphone-se-2",label:"iPhone SE (2/3rd gen)",w:375,h:667,group:"phone"},{key:"pixel-7",label:"Pixel 7",w:412,h:915,group:"phone"},{key:"galaxy-s8",label:"Galaxy S8",w:360,h:740,group:"phone"},{key:"galaxy-s20-ultra",label:"Galaxy S20 Ultra",w:412,h:915,group:"phone"},{key:"ipad-9-7",label:'iPad 9.7"',w:768,h:1024,group:"tablet"},{key:"ipad-11-pro",label:'iPad Pro 11"',w:834,h:1194,group:"tablet"},{key:"ipad-12-9-pro",label:'iPad Pro 12.9"',w:1024,h:1366,group:"tablet"},{key:"surface-go-3",label:"Surface Go 3",w:800,h:1280,group:"tablet"},{key:"hd",label:"HD",w:1366,h:768,group:"desktop"},{key:"wxga-plus",label:"WXGA+",w:1440,h:900,group:"desktop"},{key:"fhd",label:"Full HD",w:1920,h:1080,group:"desktop"},{key:"qhd",label:"2K / QHD",w:2560,h:1440,group:"desktop"},{key:"uhd-4k",label:"4K UHD",w:3840,h:2160,group:"desktop"}]}_isContainerFixed(){return this.containerSizeMode==="fixed_custom"||this.containerSizeMode==="preset"||this.containerSizeMode==="fixed"}_resolveFixedSize(){if(this.containerSizeMode==="fixed_custom"){let e=Math.max(100,Number(this.containerFixedWidth||0)),n=Math.max(100,Number(this.containerFixedHeight||0));return{w:e,h:n}}if(this.containerSizeMode==="preset"){let e=t._sizePresets().find(c=>c.key===this.containerPreset)||t._sizePresets().find(c=>c.key==="fhd");if(!e)return{w:1920,h:1080};let n=e.w,o=e.h;return this.containerPresetOrient==="portrait"&&n>o&&([n,o]=[o,n]),this.containerPresetOrient==="landscape"&&o>n&&([n,o]=[o,n]),{w:n,h:o}}return null}_applyContainerSizingFromConfig(e=!1){var o,c;let n=this.cardContainer;if(n)if(this._isContainerFixed()){let{w:s,h:d}=this._resolveFixedSize();n.style.width=`${s}px`,n.style.height=`${d}px`,n.style.overflow="hidden",e||(o=this._dbgPush)==null||o.call(this,"size","Applied fixed size",{w:s,h:d,mode:this.containerSizeMode,preset:this.containerPreset,orient:this.containerPresetOrient}),this._clampAllCardsInside()}else n.style.overflow="hidden",e||(c=this._dbgPush)==null||c.call(this,"size","Applied dynamic size"),this._resizeContainer()}_getContainerSize(){let e=this.cardContainer;if(!e)return{w:0,h:0};let n=parseFloat(getComputedStyle(e).width)||e.getBoundingClientRect().width,o=parseFloat(getComputedStyle(e).height)||e.getBoundingClientRect().height;return{w:n,h:o}}_clampAllCardsInside(){if(!this._isContainerFixed())return;let{w:e,h:n}=this._getContainerSize();this.cardContainer.querySelectorAll(".card-wrapper").forEach(c=>{let s=parseFloat(c.getAttribute("data-x"))||0,d=parseFloat(c.getAttribute("data-y"))||0,u=parseFloat(c.style.width)||c.getBoundingClientRect().width,f=parseFloat(c.style.height)||c.getBoundingClientRect().height,v=Math.max(0,Math.min(s,Math.max(0,e-u))),y=Math.max(0,Math.min(d,Math.max(0,n-f))),g=Math.min(u,e),x=Math.min(f,n);(g!==u||x!==f)&&(c.style.width=`${g}px`,c.style.height=`${x}px`);let A=Math.max(0,Math.min(v,Math.max(0,e-g))),S=Math.max(0,Math.min(y,Math.max(0,n-x)));this._setCardPosition(c,A,S)})}_computeHaSidebarGutters_(){var o;let e=56;try{let c=document.querySelector("home-assistant"),s=c==null?void 0:c.shadowRoot,d=s==null?void 0:s.querySelector("ha-drawer, app-drawer, ha-sidebar, .drawer, .menu"),u=(o=d==null?void 0:d.getBoundingClientRect)==null?void 0:o.call(d);Math.max(document.documentElement.clientWidth||0,window.innerWidth||0)<=870?e=0:u!=null&&u.width&&(e=Math.max(0,Math.min(256,Math.round(u.width))))}catch{}let n=0;try{this.style.setProperty("--ddc-left-gutter",`${e}px`),this.style.setProperty("--ddc-right-gutter",`${n}px`)}catch{}}_applyGridVars(){var n;let e=`${this.gridSize||10}px`;this.style.setProperty("--ddc-grid-size",e),(n=this.cardContainer)==null||n.style.setProperty("--ddc-grid-size",e)}_dbgInit(){if(!this.__dbgReady){this.__dbgReady=!0,this._dbgBuffer=[],this._dbgMax=400;try{window.DDC=this}catch{}}}_dbgPush(e,n,o=null){let c={t:new Date().toISOString(),kind:e,msg:n,extra:o};this._dbgBuffer.push(c),this._dbgBuffer.length>this._dbgMax&&this._dbgBuffer.shift(),this.debug&&console.debug(`%c[ddc:${e}]%c ${n}`,"color:#03a9f4","color:unset",o!=null?o:"")}_dbgDump(){return[...this._dbgBuffer]}_safe(e){return String(e).replace(/[&<>"']/g,n=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[n])}setConfig(e={}){var s,d,u,f,v,y,g,x,A,S,T,L,k,O,M,_,P,R,H,U,$,re,F,V,K,le,Ke;let n=this.storageKey;this.config={...e},(!this.config.storage_key||this.config.storage_key==="")&&(this.config.storage_key=this.constructor._genKey()),this.storageKey=this.config.storage_key,e.storage_key||(this.storageKey?e={...e,storage_key:this.storageKey}:(this.storageKey=`layout_${((s=crypto==null?void 0:crypto.randomUUID)==null?void 0:s.call(crypto))||Date.now().toString(36)}`,e={...e,storage_key:this.storageKey})),this._config=e,this.storageKey=e.storage_key,this._syncEditorsStorageKey(),this.storageKey=e.storage_key||void 0,this._syncEditorsStorageKey(),this.gridSize=Number((d=e.grid)!=null?d:10),this.dragLiveSnap=!!e.drag_live_snap,this.autoSave=e.auto_save!==!1,this.autoSaveDebounce=Number((u=e.auto_save_debounce)!=null?u:800),this.editModePin=this.editModePin!=null?this.editModePin:(v=(f=e.edit_mode_pin)!=null?f:e.editModePin)!=null?v:"",this.containerBackground=(y=e.container_background)!=null?y:"transparent",this.cardBackground=(g=e.card_background)!=null?g:"var(--ha-card-background, var(--card-background-color))",this.cardShadowEnabled=!!e.card_shadow,this.hideHaHeader=!!((A=(x=e.hide_HA_Header)!=null?x:e.hide_ha_header)!=null&&A),this.hideHaSidebar=!!((T=(S=e.hide_HA_Sidebar)!=null?S:e.hide_ha_sidebar)!=null&&T),this.debug=!!e.debug,this.editMode=!1,this._backendOK=!1,this.disableOverlap=!!e.disable_overlap,this.containerSizeMode=e.container_size_mode||"dynamic",this.autoResizeCards=!!e.auto_resize_cards,this.animateCards=!!e.animate_cards,this.screenSaverEnabled=!!((L=e.screen_saver_enabled)!=null&&L);let o=Number(e.screen_saver_delay);this.screenSaverDelay=Number.isFinite(o)&&o>0?o:5*6e4,this.autoResizeCards||String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(k=this._startScaleWatch)==null||k.call(this):(O=this._stopScaleWatch)==null||O.call(this),(M=this._applyAutoScale)==null||M.call(this),this.containerFixedWidth=Number((_=e.container_fixed_width)!=null?_:0)||null,this.containerFixedHeight=Number((P=e.container_fixed_height)!=null?P:0)||null,this.containerPreset=e.container_preset||"fullhd",this.containerPresetOrient=e.container_preset_orientation||"auto",this.heroImage=(e==null?void 0:e.hero_image)||"https://i.postimg.cc/CxsWQgwp/Chat-GPT-Image-Sep-5-2025-09-26-16-AM.png",this.tabs=Array.isArray(e.tabs)?e.tabs:[],this.tabsPosition=e.tabs_position==="left"?"left":"top",this.defaultTab=e.default_tab||((H=(R=this.tabs[0])==null?void 0:R.id)!=null?H:"default"),this.hideTabsWhenSingle=e.hide_tabs_when_single!==!1,this.activeTab=this.defaultTab;try{let pe=localStorage.getItem(`ddc_lasttab_${this.storageKey}`);pe&&this.tabs.some(ze=>ze.id===pe)&&(this.activeTab=pe)}catch{}this.rootEl&&this.rootEl.classList.toggle("ddc-tabs-left-layout",this.tabsPosition==="left"),this.cardContainer&&this._applyContainerSizingFromConfig(!1);let c=n!==this.storageKey;if(this.editMode&&!this.__booting&&!c)try{this._isInHaEditorPreview()||this._queueSave("config-change")}catch{}this._applyGridVars();try{(U=this._applyBackgroundImageFromConfig)==null||U.call(this)}catch{}try{($=this._applyHaChromeVisibility_)==null||$.call(this)}catch{}this._ensureOverlayZFix();try{(re=this._updateScreensaverSettings)==null||re.call(this)}catch{}if(this._selection=new Set,this.__groupDrag=null,this.__editorCache=new Map,this.__stubCache=new Map,this._dbgInit(),this._dbgPush("init","Card configured",{storageKey_raw:e.storage_key,storageKey_slug:this.storageKey,autoSave:this.autoSave,grid:this.gridSize}),this.style.setProperty("--ddc-bg",this.containerBackground),this.style.setProperty("--ddc-card-bg",this.cardBackground),this.cardShadowEnabled&&this.style.setProperty("--ddc-card-shadow","0 8px 24px rgba(0,0,0,.35)"),!window.jsyaml){let pe=document.createElement("script");pe.src="https://cdnjs.cloudflare.com/ajax/libs/js-yaml/4.1.0/js-yaml.min.js",document.head.appendChild(pe)}if(!window.interact){let pe=document.createElement("script");pe.src="https://cdn.jsdelivr.net/npm/interactjs/dist/interact.min.js",pe.onload=()=>this._initInteract(),document.head.appendChild(pe)}if(this._helpersPromise=typeof window.loadCardHelpers=="function"?window.loadCardHelpers().catch(()=>null):Promise.resolve(null),!this._built){this._built=!0,this.shadowRoot.innerHTML=`
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
        /* Allow a custom drop shadow via --ddc-card-shadow. Fallback to the HA default if unset */
        box-shadow: var(--ddc-card-shadow, var(--ha-card-box-shadow,0 2px 12px rgba(0,0,0,.18)));
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



      `,this.cardContainer=this.shadowRoot.querySelector("#cardContainer");try{(F=this._applyBackgroundFromConfig)==null||F.call(this)}catch{}try{(V=this._updateScreensaverSettings)==null||V.call(this)}catch{}this.addButton=this.shadowRoot.querySelector("#addCardBtn"),this.reloadBtn=this.shadowRoot.querySelector("#reloadBtn"),this.diagBtn=this.shadowRoot.querySelector("#diagBtn"),this.exitEditBtn=this.shadowRoot.querySelector("#exitEditBtn"),this.storeBadge=this.shadowRoot.querySelector("#storeBadge"),this.exportBtn=this.shadowRoot.querySelector("#exportBtn"),this.importBtn=this.shadowRoot.querySelector("#importBtn"),this.exploreBtn=this.shadowRoot.querySelector("#exploreBtn"),this.applyLayoutBtn=this.shadowRoot.querySelector("#applyLayoutBtn"),this.copyBtn=this.shadowRoot.querySelector("#copyBtn"),this.pasteBtn=this.shadowRoot.querySelector("#pasteBtn"),this.settingsBtn=this.shadowRoot.querySelector("#settingsBtn"),this.tabsBar=this.shadowRoot.querySelector("#tabsBar"),this.rootEl=this.shadowRoot.querySelector(".ddc-root");try{this._renderTabs(),this._applyActiveTab()}catch{}this._applyGridVars(),this.addButton.addEventListener("click",()=>{this.editMode||this._toggleEditMode(!0),this._openCardManager()}),this.reloadBtn.addEventListener("click",()=>this._initialLoad(!0)),this.diagBtn.addEventListener("click",()=>this._openDiagnostics()),this.exitEditBtn.addEventListener("click",()=>this._toggleEditMode(!1)),this.exportBtn.addEventListener("click",()=>this._exportDesign()),this.importBtn.addEventListener("click",()=>this._importDesign()),this.applyLayoutBtn.addEventListener("click",()=>this._saveLayout(!1)),this.copyBtn&&this.copyBtn.addEventListener("click",()=>this._copySelection()),this.pasteBtn&&this.pasteBtn.addEventListener("click",()=>this._pasteClipboard()),this.settingsBtn&&this.settingsBtn.addEventListener("click",()=>this._openDashboardSettings()),window.addEventListener("keydown",pe=>{var ze;if(this.editMode){if((pe.ctrlKey||pe.metaKey)&&(pe.key==="s"||pe.key==="S")&&(pe.preventDefault(),this._saveLayout(!1)),!this.__ddcResizeObs&&this.autoResizeCards){this.__ddcResizeObs=new ResizeObserver(()=>{var Ce;return(Ce=this._applyAutoScale)==null?void 0:Ce.call(this)});try{this.__ddcResizeObs.observe(this)}catch{}try{this.__ddcResizeObs.observe(this.cardContainer)}catch{}try{this.parentElement&&this.__ddcResizeObs.observe(this.parentElement)}catch{}try{this.offsetParent&&this.__ddcResizeObs.observe(this.offsetParent)}catch{}window.addEventListener("resize",this.__ddcOnWinResize=()=>{var Ce;return(Ce=this._applyAutoScale)==null?void 0:Ce.call(this)})}(ze=this._applyAutoScale)==null||ze.call(this)}}),this.exploreBtn.addEventListener("click",()=>window.open("https://hads.smarti.dev/","_blank","noopener,noreferrer")),this._applyContainerSizingFromConfig(!0),(K=this._applyAutoScale)==null||K.call(this),this._installLongPressToEnterEdit(),(le=this._startScaleWatch)==null||le.call(this),window.addEventListener("keydown",pe=>{var ze;if(pe.key==="Escape"&&this.editMode&&this._toggleEditMode(!1),!this.__ddcResizeObs&&this.autoResizeCards){this.__ddcResizeObs=new ResizeObserver(()=>{var Ce;return(Ce=this._applyAutoScale)==null?void 0:Ce.call(this)});try{this.__ddcResizeObs.observe(this)}catch{}try{this.__ddcResizeObs.observe(this.cardContainer)}catch{}window.addEventListener("resize",this.__ddcOnWinResize=()=>{var Ce;return(Ce=this._applyAutoScale)==null?void 0:Ce.call(this)})}(ze=this._applyAutoScale)==null||ze.call(this)}),this._installSelectionMarquee(),this.cardContainer.addEventListener("mousedown",pe=>{this.editMode&&(pe.target.closest(".card-wrapper")||!pe.shiftKey&&!pe.ctrlKey&&!pe.metaKey&&this._clearSelection())})}try{this._isInHaEditorPreview()||this._queueSave("config-change")}catch{}this._updateStoreBadge(),this.cardContainer&&this._toggleEditMode(!1),this.__cfgReady=!0,c&&this.__booted?this._initialLoad(!0):!this.__booted&&this.__probed?(this.__booted=!0,this._initialLoad()):(this._applyContainerSizingFromConfig(!0),(Ke=this._applyAutoScale)==null||Ke.call(this),this._resizeContainer())}_startInitialAutosize(){var e,n;try{if(this.__autoInitStarted)return;this.__autoInitStarted=!0;let o=!1,c=()=>{o||(o=!0,requestAnimationFrame(()=>{var g;o=!1;try{(g=this._applyAutoScale)==null||g.call(this)}catch{}}))};requestAnimationFrame(()=>{c(),requestAnimationFrame(c)}),setTimeout(c,0);try{(n=(e=document.fonts)==null?void 0:e.ready)==null||n.then(c)}catch{}let s=String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase(),d=this.cardContainer||this.querySelector("#cardContainer");if(!d)return;let u={childList:!0,subtree:!0,attributes:!0,attributeFilter:["style","class"]},f={childList:!0,subtree:!0},v=this.autoResizeCards||s==="auto",y=new MutationObserver(()=>c());y.observe(d,v?u:f),this.__autoInitMO=y,setTimeout(()=>{try{y.disconnect()}catch{}this.__autoInitMO=null},2e3)}catch{}}connectedCallback(){var e,n,o,c,s;try{this._installGridObservers_(),this._updateGridButtonsVisibility()}catch{}(e=this._startInitialAutosize)==null||e.call(this);try{(n=this._applyHaChromeVisibility_)==null||n.call(this),this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var u;return(u=this._applyAutoFillNoScale)==null?void 0:u.call(this)})});try{(o=this._ensureScreenSaverStyles)==null||o.call(this),(c=this._updateScreensaverSettings)==null||c.call(this)}catch{}}catch{this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var u;return(u=this._applyAutoFillNoScale)==null?void 0:u.call(this)})})}if(this.__keyHandlerBound||(this.__keyHandler=d=>this._onKeyDown_(d),window.addEventListener("keydown",this.__keyHandler),this.__keyHandlerBound=!0,this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var u;return(u=this._applyAutoFillNoScale)==null?void 0:u.call(this)})})),this.__boundExitEdit||(this.__boundExitEdit=()=>this._toggleEditMode(!1),this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var u;return(u=this._applyAutoFillNoScale)==null?void 0:u.call(this)})})),window.addEventListener("pagehide",this.__boundExitEdit),window.addEventListener("beforeunload",this.__boundExitEdit),this.__onVis=()=>{document.visibilityState==="hidden"&&this._toggleEditMode(!1),this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var u;return(u=this._applyAutoFillNoScale)==null?void 0:u.call(this)})})},document.addEventListener("visibilitychange",this.__onVis),this._toggleEditMode(!1),!this.__visObs){let d=new IntersectionObserver(u=>{u.some(f=>f.isIntersecting)&&(requestAnimationFrame(()=>this._applyAutoScale&&this._applyAutoScale()),d.observe(this),this.__visObs=d)});this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var f;return(f=this._applyAutoFillNoScale)==null?void 0:f.call(this)})})}this.__ddcOnWinResize=this.__ddcOnWinResize||(()=>{var d,u;if(this.hasAttribute("ddc-fixed-ui"))try{(d=this._computeHaSidebarGutters_)==null||d.call(this)}catch{}(u=this._applyAutoScale)==null||u.call(this)});try{let d=String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase();this.autoResizeCards||d==="auto"?window.addEventListener("resize",this.__ddcOnWinResize):window.removeEventListener("resize",this.__ddcOnWinResize)}catch{}try{(s=this.__ddcBindPointerListeners)==null||s.call(this),this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var u;return(u=this._applyAutoFillNoScale)==null?void 0:u.call(this)})})}catch{this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var u;return(u=this._applyAutoFillNoScale)==null?void 0:u.call(this)})})}this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var u;return(u=this._applyAutoFillNoScale)==null?void 0:u.call(this)})})}disconnectedCallback(){var e,n,o,c,s,d,u;try{this._uninstallGridObservers_()}catch{}try{(e=this._setHeaderVisible_)==null||e.call(this,!0),(n=this._setSidebarVisible_)==null||n.call(this,!0)}catch{}try{(o=this._applyHaChromeVisibility_)==null||o.call(this)}catch{}this.__keyHandlerBound&&this.__keyHandler&&(window.removeEventListener("keydown",this.__keyHandler),this.__keyHandlerBound=!1,this.__keyHandler=null),this.__keyHandlerBound||(this.__keyHandler=f=>this._onKeyDown_(f),window.addEventListener("keydown",this.__keyHandler),this.__keyHandlerBound=!0);try{(c=this._destroyParticles_)==null||c.call(this)}catch{}try{(s=this._destroyYouTube_)==null||s.call(this)}catch{}window.removeEventListener("pagehide",this.__boundExitEdit),window.removeEventListener("beforeunload",this.__boundExitEdit),document.removeEventListener("visibilitychange",this.__onVis);try{this._screensaverTimer&&(clearTimeout(this._screensaverTimer),this._screensaverTimer=null),this._clockInterval&&(clearInterval(this._clockInterval),this._clockInterval=null),this._screensaverActivityHandler&&(this._screensaverEvents||[]).forEach(v=>{document.removeEventListener(v,this._screensaverActivityHandler,!0)}),this.screenSaverOverlay&&this.screenSaverOverlay.parentNode&&this.screenSaverOverlay.parentNode.removeChild(this.screenSaverOverlay)}catch{}try{(d=this.__ddcResizeObs)==null||d.disconnect()}catch{}if(this.__ddcResizeObs=null,(u=this._stopScaleWatch)==null||u.call(this),this.__ddcOnWinResize&&(window.removeEventListener("resize",this.__ddcOnWinResize),this.__ddcOnWinResize=null),this.__lpInstalled&&this.__lpHandlers){let f=this.cardContainer;f==null||f.removeEventListener("mousedown",this.__lpHandlers.mouseDown),window.removeEventListener("mousemove",this.__lpHandlers.mouseMove),window.removeEventListener("mouseup",this.__lpHandlers.mouseUp),window.removeEventListener("contextmenu",this.__lpHandlers.contextMenu),f==null||f.removeEventListener("touchstart",this.__lpHandlers.touchStart),window.removeEventListener("touchmove",this.__lpHandlers.touchMove),window.removeEventListener("touchend",this.__lpHandlers.touchEnd),window.removeEventListener("touchcancel",this.__lpHandlers.touchCancel),this.__lpInstalled=!1,this.__lpHandlers=null}try{this.__visObs&&this.__visObs.disconnect()}catch{}this.__visObs=null,this.__ddcOnWinResize&&window.removeEventListener("resize",this.__ddcOnWinResize);try{this.__ddcPtrBound&&(this.removeEventListener("pointerdown",this.__onDDCPointerDown),this.removeEventListener("pointermove",this.__onDDCPointerMove),window.removeEventListener("pointerup",this.__onDDCPointerUp),window.removeEventListener("pointercancel",this.__onDDCPointerUp),this.__ddcPtrBound=!1)}catch{}}set hass(e){var o;this._hass=e,cc("set hass"),!this.__probed&&e&&(this.__probed=!0,this._probeBackend().then(()=>{this.__probed=!0,!this.__booted&&this.__cfgReady&&(this.__booted=!0,this._initialLoad(!0))}));let n=((o=this.cardContainer)==null?void 0:o.children)||[];for(let c of n){let s=c.firstElementChild;s&&s.hass!==e&&(s.hass=e)}try{this._applyVisibility_()}catch{}}get hass(){return this._hass}async _initialLoad(e=!1){var n,o,c,s,d,u,f,v,y,g,x,A,S,T,L,k,O,M,_;if(!this.__booting){this.__booting=!0;try{this._loading=!0,e&&this.cardContainer&&(this.cardContainer.innerHTML=""),this._dbgPush("boot","Initial load start",{force:e});let P=[],R=null;if(this._backendOK&&this.storageKey)try{R=await this._loadLayoutFromBackend(this.storageKey)}catch(F){this._dbgPush("boot","Backend load failed",{error:String(F)})}if(!R&&this.storageKey){let F=null;try{F=JSON.parse(localStorage.getItem(`ddc_local_${this.storageKey}`)||"null")}catch{}if(F)if(this._dbgPush("boot","Found local snapshot",{bytes:JSON.stringify(F).length}),this._backendOK)try{await this._saveLayoutToBackend(this.storageKey,F),this._dbgPush("boot","Migrated local -> backend"),R=F}catch(V){this._dbgPush("boot","Migration failed, staying local",{error:String(V)}),R=F}else R=F}!R&&((o=(n=this._config)==null?void 0:n.cards)!=null&&o.length)&&(this._dbgPush("boot","Using embedded config"),R={cards:this._config.cards});let H={...this._config||{}};if(R!=null&&R.options){let{storage_key:F,...V}=R.options;delete V.background_mode,delete V.background_image,delete V.background_particles,delete V.background_youtube,this._applyImportedOptions(V,!0)}else typeof(R==null?void 0:R.grid)=="number"&&this._applyImportedOptions({grid:R.grid},!0);let U=["storage_key","grid","drag_live_snap","auto_save","auto_save_debounce","container_background","card_background","card_shadow","debug","disable_overlap","container_size_mode","container_fixed_width","container_fixed_height","container_preset","container_preset_orientation","tabs","tabs_position","default_tab","hide_tabs_when_single","auto_resize_cards","background_mode","background_image","background_particles","background_youtube"],$={};for(let F of U)H[F]!==void 0&&($[F]=H[F]);Object.keys($).length&&this._applyImportedOptions($,!0);let re=!1;if((c=R==null?void 0:R.cards)!=null&&c.length){for(let F of R.cards){if(!(F!=null&&F.card)||typeof F.card=="object"&&Object.keys(F.card).length===0){let le=this._makePlaceholderAt(((s=F.position)==null?void 0:s.x)||0,((d=F.position)==null?void 0:d.y)||0,((u=F.size)==null?void 0:u.width)||200,((f=F.size)==null?void 0:f.height)||200);this.cardContainer.appendChild(le);try{this._rebuildOnce(le.firstElementChild)}catch{}re=!0;continue}let V=await this._createCard(F.card),K=this._makeWrapper(V);this.editMode&&K.classList.add("editing"),K.dataset.tabId=this._normalizeTabId(F.tabId||F.tab_id||this.defaultTab),this._setCardPosition(K,((v=F.position)==null?void 0:v.x)||0,((y=F.position)==null?void 0:y.y)||0),K.style.width=`${(x=(g=F.size)==null?void 0:g.width)!=null?x:14*this.gridSize}px`,K.style.height=`${(S=(A=F.size)==null?void 0:A.height)!=null?S:10*this.gridSize}px`,F.z!=null&&(K.style.zIndex=String(F.z)),this.cardContainer.appendChild(K);try{this._rebuildOnce(K.firstElementChild)}catch{}this._initCardInteract(K),re=!0}this._resizeContainer(),(T=this._applyAutoScale)==null||T.call(this),this._dbgPush("boot","Layout applied",{count:R.cards.length})}re||(this._showEmptyPlaceholder(),(L=this._applyAutoScale)==null||L.call(this),this._dbgPush("boot","No saved layout found; showing placeholder")),this._updateStoreBadge(),this._syncEmptyStateUI(),e&&(this._cardModProcessed=!1),setTimeout(()=>{this._processCardModOnce()},100);try{P.forEach(F=>{try{F.dispatchEvent(new Event("ll-rebuild",{bubbles:!0,composed:!0}))}catch{}})}catch{}}finally{this._loading=!1,this.__booting=!1,this.__dirty=!1,(k=this._updateApplyBtn)==null||k.call(this);try{this._renderTabs(),this._applyActiveTab()}catch{}try{this._applyVisibility_()}catch{}try{let P=(M=(O=this.cardContainer)==null?void 0:O.querySelector)==null?void 0:M.call(O,"#ddcBgHost");(!P||!P.firstChild)&&((_=this._applyBackgroundFromConfig)==null||_.call(this))}catch{}}}}_normalizeTabId(e){let n=Array.isArray(this.tabs)?this.tabs.map(o=>o.id):[];return n.length?e&&n.includes(e)?e:this.defaultTab||n[0]:this.defaultTab||"default"}_renderTabs(){var o,c,s,d;let e=this.tabsBar;if(!e)return;let n=Array.isArray(this.tabs)?this.tabs:[];if(!n.length||n.length===1&&this.hideTabsWhenSingle){e.style.display="none";return}e.style.display="",e.className="ddc-tabs "+(this.tabsPosition==="left"?"ddc-tabs-left":""),e.innerHTML="";try{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&(e.style.width="100%",e.style.maxWidth="100%")}catch{}for(let u of n){let f=document.createElement("button");f.className="ddc-tab"+(u.id===this.activeTab?" active":""),f.dataset.tabId=u.id,f.title=u.label||u.id,f.innerHTML=`${u.icon?`<ha-icon icon="${u.icon}"></ha-icon>`:""}<span class="ddc-tab-label">${(o=u.label)!=null?o:u.id}</span>`,f.addEventListener("click",()=>{var v,y,g;if(this.activeTab!==u.id){this.activeTab=u.id;try{localStorage.setItem(`ddc_lasttab_${this.storageKey}`,u.id)}catch{}this._applyActiveTab(),this._renderTabs();try{this._applyVisibility_()}catch{}try{let x=(y=(v=this.cardContainer)==null?void 0:v.querySelector)==null?void 0:y.call(v,"#ddcBgHost");(!x||!x.firstChild)&&((g=this._applyBackgroundFromConfig)==null||g.call(this))}catch{}}}),e.appendChild(f)}this.rootEl&&this.rootEl.classList.toggle("ddc-tabs-left-layout",this.tabsPosition==="left");try{(c=this._updateTabsA11y_)==null||c.call(this)}catch{}try{(s=this._syncTabsWidth_)==null||s.call(this)}catch{}try{let u=(d=e.querySelector)==null?void 0:d.call(e,".ddc-tab.active");u&&e.scrollWidth>e.clientWidth&&u.scrollIntoView({behavior:"auto",block:"nearest",inline:"nearest"})}catch{}}_applyActiveTab(){var o,c,s,d,u;let e=this._normalizeTabId(this.activeTab);(((c=(o=this.cardContainer)==null?void 0:o.querySelectorAll)==null?void 0:c.call(o,".card-wrapper"))||[]).forEach(f=>{let v=f.dataset.tabId?this._normalizeTabId(f.dataset.tabId):this.defaultTab;if(!this.tabs||!this.tabs.length){f.style.display="",f.inert=!1,f.classList.remove("ddc-hidden");return}v===e?(f.style.display="",f.inert=!1,f.classList.remove("ddc-hidden")):(f.style.display="none",f.inert=!0,f.classList.add("ddc-hidden"),f.classList.remove("ddc-selected"))});try{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(s=this._applyAutoFillNoScale)==null||s.call(this):(d=this._applyAutoScale)==null||d.call(this)}catch{}try{this._clearSelection()}catch{}try{this.animateCards&&((u=this._animateCards)==null||u.call(this))}catch{}}_animateCards(){var e,n,o,c;try{let s=((n=(e=this.cardContainer)==null?void 0:e.querySelectorAll)==null?void 0:n.call(e,".card-wrapper"))||[],d=(c=(o=window.matchMedia)==null?void 0:o.call(window,"(prefers-reduced-motion: reduce)"))==null?void 0:c.matches,u=800,f=.8,y=u*.3,g=u-y;s.forEach(x=>{var _,P,R;let A=(_=window.getComputedStyle)==null?void 0:_.call(window,x);if(x.style.display==="none"||A&&A.display==="none"||x.classList.contains("ddc-hidden"))return;let T=A&&A.transform&&A.transform!=="none"?A.transform:"",L=100*f,k=`${T} translate3d(0, ${L}%, 0)`,O=`${T} translate3d(0, 0, 0)`,M=Math.random()*(g*Math.min(f,2));if(d){try{x.animate([{opacity:0},{opacity:1}],{duration:u*.15,delay:M,easing:"linear",fill:"backwards"})}catch{x.style.opacity="0",setTimeout(()=>{x.style.transition=`opacity ${u*.15}ms linear`,x.style.opacity="1"},M)}return}try{x.style.willChange="opacity, transform";let H="cubic-bezier(0.4, 0, 0.2, 1)";x.animate([{opacity:0},{opacity:1}],{duration:y,delay:M,easing:"linear",fill:"backwards"}),(R=(P=x.animate([{transform:k},{transform:O}],{duration:y,delay:M,easing:H,fill:"backwards"})).addEventListener)==null||R.call(P,"finish",()=>{x.style.willChange=""})}catch{x.style.opacity="0",x.style.transform=k,x.style.willChange="opacity, transform",setTimeout(()=>{x.style.transition=`opacity ${y}ms linear, transform ${y}ms cubic-bezier(0.4,0,0.2,1)`,x.style.opacity="1",x.style.transform=O,setTimeout(()=>{x.style.transition="",x.style.willChange=""},y+60)},M)}})}catch(s){console.warn("[ddc:animate] animation error",s)}}_addTabSelectorToChip(e,n=null){if(!this.tabs||!this.tabs.length)return;let o=e.querySelector(".chip");if(!o)return;let c=o.querySelector("select.ddc-chip-tab");c||(c=document.createElement("select"),c.className="ddc-chip-tab",c.style.marginLeft="6px",c.title="Assign to tab",o.appendChild(c)),c.innerHTML="";for(let d of this.tabs){let u=document.createElement("option");u.value=d.id,u.textContent=d.label||d.id,c.appendChild(u)}let s=this._normalizeTabId(n||e.dataset.tabId||this.activeTab||this.defaultTab);c.value=s,e.dataset.tabId=s,c.onchange=()=>{var d,u,f;e.dataset.tabId=this._normalizeTabId(c.value),this._applyActiveTab();try{this._applyVisibility_()}catch{}try{let v=(u=(d=this.cardContainer)==null?void 0:d.querySelector)==null?void 0:u.call(d,"#ddcBgHost");(!v||!v.firstChild)&&((f=this._applyBackgroundFromConfig)==null||f.call(this))}catch{}try{this._queueSave("tab-change")}catch{}}}_toggleEditMode(e=null){var x,A,S,T,L,k,O,M,_,P,R,H,U,$,re,F,V;try{(x=this.__clearPressTimer)==null||x.call(this)}catch{}let n=e===null?!this.editMode:!!e,o=!this.editMode&&n;try{let K=this.config&&this.config.edit_mode_pin!=null?String(this.config.edit_mode_pin):"",Ke=((this.editModePin!=null?String(this.editModePin):"")||K).trim();if(n&&!this.editMode&&Ke){let pe=window.prompt("Enter PIN / password to open Edit Mode:");if(pe===null)return;if(String(pe).trim()!==Ke){(A=this._toast)==null||A.call(this,"Incorrect PIN/password.");return}}}catch{}let c=this.renderRoot||this.shadowRoot||this,s=(S=c==null?void 0:c.querySelector)==null?void 0:S.call(c,".ddc-toolbar.streamlined.v2, .ddc-toolbar.streamlined.v3"),d=(K,le)=>{try{K&&(K.style.display=le)}catch{}},u="inline-block",f="none",v=()=>{d(this.addButton,u),d(this.reloadBtn,u),d(this.diagBtn,u),d(this.exitEditBtn,u),d(this.exportBtn,u),d(this.importBtn,u),d(this.exploreBtn,u),d(this.storeBadge,u),d(this.applyLayoutBtn,u),d(this.copyBtn,u),d(this.pasteBtn,u),d(this.settingsBtn,u)},y=()=>{d(this.addButton,f),d(this.reloadBtn,f),d(this.diagBtn,f),d(this.exitEditBtn,f),d(this.exportBtn,f),d(this.importBtn,f),d(this.exploreBtn,f),d(this.storeBadge,f),d(this.applyLayoutBtn,f),d(this.copyBtn,f),d(this.pasteBtn,f),d(this.settingsBtn,f)};if(s)if(n)s.setAttribute("data-force-open","1"),s.style.display="grid",v(),requestAnimationFrame(()=>{let le=s.scrollHeight||0;s.style.setProperty("--open-h",le+"px"),s.classList.add("is-open")});else{s.setAttribute("data-force-open","1"),s.style.display="grid";let le=s.scrollHeight||0;s.style.setProperty("--open-h",le+"px"),requestAnimationFrame(()=>{s.classList.remove("is-open")}),setTimeout(()=>{y(),s.removeAttribute("data-force-open")},260)}else n?v():y();this.editMode=n,(T=this._syncEmptyStateUI)==null||T.call(this),(L=this.cardContainer)==null||L.classList.toggle("grid-on",this.editMode);try{typeof this._resetScreensaverTimer=="function"&&this._resetScreensaverTimer()}catch{}if((((O=(k=this.cardContainer)==null?void 0:k.querySelectorAll)==null?void 0:O.call(k,".card-wrapper"))||[]).forEach(K=>{K.classList.toggle("editing",this.editMode);let le=K.querySelector(".resize-handle");le&&(le.style.display=this.editMode?"flex":"none"),!K.dataset.placeholder&&window.interact&&window.interact(K).draggable(this.editMode).resizable(this.editMode),K.style.touchAction=this.editMode?"none":"auto"}),this.editMode||(M=this._clearSelection)==null||M.call(this),this.editMode||(_=this.cardContainer)==null||_.querySelectorAll(".card-wrapper.dragging").forEach(K=>K.classList.remove("dragging")),o){let K=(P=this.__lastHoldX)!=null?P:null,le=(R=this.__lastHoldY)!=null?R:null;(H=this._playEditRipple)==null||H.call(this,K,le)}try{(U=this._applyHaChromeVisibility_)==null||U.call(this)}catch{}try{let K=((re=($=this.shadowRoot)==null?void 0:$.querySelector)==null?void 0:re.call($,".ddc-root"))||((V=(F=this.renderRoot)==null?void 0:F.querySelector)==null?void 0:V.call(F,".ddc-root"))||null;if(K){let le=0;if(n&&s)try{le=s.scrollHeight||s.offsetHeight||0}catch{}K.style.setProperty("--ddc-toolbar-height",le+"px")}}catch{}}_isInHaEditorPreview(){let e=this;for(;e;){let n=e.nodeType===1&&e.localName?e.localName.toLowerCase():"";if(n==="hui-card-editor"||n==="hui-dialog-edit-card"||n==="hui-card-preview"||n==="ha-dialog"||n==="mwc-dialog")return!0;let o=e.getRootNode&&e.getRootNode();e=e.parentElement||o&&o.host||null}return!1}_installLongPressToEnterEdit(){if(this.__lpInstalled)return;this.__lpInstalled=!0;let e=this.cardContainer;if(!e)return;let n=800,o=18,c=_=>!!_&&typeof _=="object"&&_.nodeType===1,s=(_,P)=>{try{return!!(_&&P&&typeof _.contains=="function"&&c(P)&&_.contains(P))}catch{return!1}},d=_=>s(this.cardContainer,_),u=_=>{var H,U,$;let P=(U=(H=_.target)==null?void 0:H.closest)==null?void 0:U.call(H,".card-wrapper");if(c(P)&&d(P)&&!P.classList.contains("ddc-placeholder"))return!0;let R=typeof _.composedPath=="function"?_.composedPath():[];for(let re of R)if(c(re)&&d(re)&&($=re.classList)!=null&&$.contains("card-wrapper")&&!re.classList.contains("ddc-placeholder"))return!0;return!1},f=(_,P)=>{let R=document.createElement("div");R.className="ddc-press-ring",document.body.appendChild(R),Object.assign(R.style,{position:"fixed",left:`${_}px`,top:`${P}px`,zIndex:"100000",width:"44px",height:"44px",pointerEvents:"none",marginLeft:"-22px",marginTop:"-22px",filter:"drop-shadow(0 2px 6px rgba(0,0,0,.35))"}),R.innerHTML=`
      <svg viewBox="0 0 44 44" aria-hidden="true" style="width:44px;height:44px">
        <circle cx="22" cy="22" r="18" style="stroke:rgba(255,255,255,.45);stroke-width:4;fill:none"></circle>
        <circle class="pr-fg" cx="22" cy="22" r="18" style="stroke:var(--primary-color);stroke-width:4;fill:none;stroke-linecap:round"></circle>
        <circle cx="22" cy="22" r="2" style="fill:var(--primary-color);opacity:.95"></circle>
      </svg>`;let H=R.querySelector(".pr-fg"),U=18,$=2*Math.PI*U;return H.style.strokeDasharray=`${$}`,H.style.strokeDashoffset=`${$}`,requestAnimationFrame(()=>{H.style.transition=`stroke-dashoffset ${n}ms linear`,H.style.strokeDashoffset="0"}),{el:R,move(re,F){R.style.left=`${re}px`,R.style.top=`${F}px`},remove(){try{R.remove()}catch{}}}},v=null,y=null,g=0,x=0,A=null,S=()=>{v&&clearTimeout(v),v=null,y==null||y.remove(),y=null};this.__clearPressTimer=S;let T=_=>{_.pointerType==="mouse"&&_.button!==0||this._isInHaEditorPreview()||!d(_.target)||u(_)||(A=_.pointerId,g=_.clientX,x=_.clientY,this.__lastHoldX=g,this.__lastHoldY=x,y=f(g,x),v=setTimeout(()=>{var R;S();let P=!this.editMode;this._toggleEditMode(P),(R=this._toast)==null||R.call(this,`Edit mode ${P?"enabled":"disabled"}`)},n))},L=_=>{v==null||_.pointerId!==A||(y==null||y.move(_.clientX,_.clientY),(Math.abs(_.clientX-g)>o||Math.abs(_.clientY-x)>o)&&S())},k=_=>{_.pointerId===A&&(S(),A=null)},O=_=>{if(v)return _.preventDefault(),_.stopPropagation(),!1},M=_=>{var R;if(this._isInHaEditorPreview()||!d(_.target)||u(_))return;let P=!this.editMode;this._toggleEditMode(P),(R=this._toast)==null||R.call(this,`Edit mode ${P?"enabled":"disabled"}`)};e.addEventListener("pointerdown",T),window.addEventListener("pointermove",L,{passive:!0}),window.addEventListener("pointerup",k,{passive:!0}),window.addEventListener("pointercancel",k,{passive:!0}),window.addEventListener("contextmenu",O),e.addEventListener("dblclick",M),this.__lpHandlers={onPointerDown:T,onPointerMove:L,onPointerUpOrCancel:k,onContextMenu:O,onDblClick:M}}_isLayoutEmpty(){let e=this.cardContainer;return e?e.querySelectorAll(".card-wrapper:not(.ddc-placeholder)").length===0:!0}_syncEmptyStateUI(){let e=this._isLayoutEmpty();if(this.addButton){let o=this.editMode||e;this.addButton.style.display=o?"inline-block":"none",this.addButton.classList.toggle("cta-empty",!this.editMode&&e)}let n=o=>o&&(o.style.display=this.editMode?"inline-block":"none");n(this.reloadBtn),n(this.diagBtn),n(this.exitEditBtn),n(this.exportBtn),n(this.importBtn),n(this.exploreBtn),n(this.storeBadge),n(this.applyLayoutBtn)}_updateApplyBtn(){this.applyLayoutBtn&&(this.applyLayoutBtn.disabled=!this.__dirty)}_markDirty(e=""){var n;this.__dirty=!0,this._updateApplyBtn(),(n=this._dbgPush)==null||n.call(this,"dirty","Marked dirty",{reason:e})}_playEditRipple(e=null,n=null){let o=this.cardContainer;if(!o)return;let c=o.getBoundingClientRect(),s=e==null?c.left+c.width/2:e,d=n==null?c.top+c.height/2:n,u=s-c.left,f=d-c.top,v=document.createElement("div");v.className="ddc-ripple-veil",v.style.setProperty("--rip-x",`${u}px`),v.style.setProperty("--rip-y",`${f}px`),o.appendChild(v),setTimeout(()=>v.remove(),450)}_initInteract(){this.cardContainer.querySelectorAll(".card-wrapper").forEach(n=>this._initCardInteract(n))}_initCardInteract(e){if(!window.interact||e.dataset.placeholder)return;let n=this.gridSize,o=!!this.dragLiveSnap,s=[window.interact.modifiers.restrictRect({restriction:"parent",endOnly:!0})],d=this.__pointerScaleX&&Math.abs(this.__pointerScaleX-1)>1e-6||this.__pointerScaleY&&Math.abs(this.__pointerScaleY-1)>1e-6;if(this.dragLiveSnap&&!d){let u=window.interact.snappers.grid({x:this.gridSize,y:this.gridSize});s.push(window.interact.modifiers.snap({targets:[u],range:1/0,offset:"startCoords"}))}window.interact(e).draggable({enabled:this.editMode,inertia:!1,modifiers:s,listeners:{start:u=>{this._selection.has(e)||(!(u!=null&&u.shiftKey)&&!(u!=null&&u.ctrlKey)&&!(u!=null&&u.metaKey)&&this._clearSelection(),this._toggleSelection(e,!0));let f=Array.from(this._selection);this.__groupDrag={leader:e,members:f,startRaw:new Map(f.map(y=>[y,{x:parseFloat(y.getAttribute("data-x-raw"))||parseFloat(y.getAttribute("data-x"))||0,y:parseFloat(y.getAttribute("data-y-raw"))||parseFloat(y.getAttribute("data-y"))||0,w:parseFloat(y.style.width)||y.getBoundingClientRect().width,h:parseFloat(y.style.height)||y.getBoundingClientRect().height}]))},this.__collisionOriginals=new Map,this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)").forEach(y=>{let g=parseFloat(y.getAttribute("data-x-raw"))||parseFloat(y.getAttribute("data-x"))||0,x=parseFloat(y.getAttribute("data-y-raw"))||parseFloat(y.getAttribute("data-y"))||0;this.__collisionOriginals.set(y,{x:g,y:x})}),f.forEach(y=>{y.classList.add("dragging"),y.getAttribute("data-x-raw")===null&&y.setAttribute("data-x-raw",y.getAttribute("data-x")||"0"),y.getAttribute("data-y-raw")===null&&y.setAttribute("data-y-raw",y.getAttribute("data-y")||"0")})},move:u=>{if(!this.__groupDrag)return;let f=this.gridSize,v=!!this.dragLiveSnap,y=this.__groupDrag.leader,g=this.__groupDrag.startRaw.get(y),x=this.__pointerScaleX||1,A=this.__pointerScaleY||1,S=(parseFloat(y.getAttribute("data-x-raw"))||g.x)+u.dx/x,T=(parseFloat(y.getAttribute("data-y-raw"))||g.y)+u.dy/A,L=S-g.x,k=T-g.y,O=this.__groupDrag.members.map(M=>{let _=this.__groupDrag.startRaw.get(M),P=_.x+L,R=_.y+k,H=v?Math.round(P/f)*f:P,U=v?Math.round(R/f)*f:R;return{el:M,rawX:P,rawY:R,snapX:H,snapY:U,w:_.w,h:_.h}});this.disableOverlap&&this._pushCardsOutOfTheWay(O,L,k,v,f),y.setAttribute("data-x-raw",String(S)),y.setAttribute("data-y-raw",String(T));for(let M of O)M.el.setAttribute("data-x-raw",String(M.rawX)),M.el.setAttribute("data-y-raw",String(M.rawY)),this._setCardPosition(M.el,M.snapX,M.snapY);this._resizeContainer()},end:u=>{if(!this.__groupDrag)return;let f=this.gridSize,v=this.__groupDrag.members.map(y=>{let g=parseFloat(y.getAttribute("data-x-raw"))||parseFloat(y.getAttribute("data-x"))||0,x=parseFloat(y.getAttribute("data-y-raw"))||parseFloat(y.getAttribute("data-y"))||0,A=Math.round(g/f)*f,S=Math.round(x/f)*f,T=parseFloat(y.style.width)||y.getBoundingClientRect().width,L=parseFloat(y.style.height)||y.getBoundingClientRect().height;return{el:y,rawX:g,rawY:x,snapX:A,snapY:S,w:T,h:L}});this.disableOverlap&&this._pushCardsOutOfTheWay(v,0,0,!1,f);for(let y of v)this._setCardPosition(y.el,y.snapX,y.snapY),y.el.setAttribute("data-x-raw",String(y.snapX)),y.el.setAttribute("data-y-raw",String(y.snapY));for(let y of this.__groupDrag.members)y.classList.remove("dragging");this._resizeContainer(),this._isContainerFixed()&&this._clampAllCardsInside(),this._queueSave(this.__groupDrag.members.length>1?"group-drag-end":"drag-end"),this.__groupDrag=null,this.__collisionOriginals=null}}}),window.interact(e).resizable({enabled:this.editMode,edges:{right:".resize-handle",bottom:".resize-handle"},inertia:!1,listeners:{move:u=>{let f=this.gridSize,v=!!this.dragLiveSnap,y=parseFloat(e.style.width)||e.getBoundingClientRect().width,g=parseFloat(e.style.height)||e.getBoundingClientRect().height,x=this.__pointerScaleX||1,A=this.__pointerScaleY||1,S=u.rect.width/x,T=u.rect.height/A,L=v?Math.max(f,Math.round(S/f)*f):S,k=v?Math.max(f,Math.round(T/f)*f):T,O=parseFloat(e.getAttribute("data-x"))||0,M=parseFloat(e.getAttribute("data-y"))||0,_=L,P=k;if(this._isContainerFixed()){let{w:H,h:U}=this._getContainerSize();_=Math.min(L,Math.max(this.gridSize,H-O)),P=Math.min(k,Math.max(this.gridSize,U-M))}let R=[this._rectFor(e,O,M,_,P)];this.disableOverlap&&this._anyCollisionFor(R,new Set([e]))||(e.style.width=`${_}px`,e.style.height=`${P}px`,this._resizeContainer())},end:()=>{let u=this.gridSize,f=parseFloat(e.style.width)||e.getBoundingClientRect().width,v=parseFloat(e.style.height)||e.getBoundingClientRect().height,y=Math.max(u,Math.round(f/u)*u),g=Math.max(u,Math.round(v/u)*u),x=parseFloat(e.getAttribute("data-x"))||0,A=parseFloat(e.getAttribute("data-y"))||0;if(this._isContainerFixed()){let{w:T,h:L}=this._getContainerSize();y=Math.min(y,Math.max(u,T-x)),g=Math.min(g,Math.max(u,L-A))}let S=[this._rectFor(e,x,A,y,g)];this.disableOverlap&&this._anyCollisionFor(S,new Set([e]))||(e.style.width=`${y}px`,e.style.height=`${g}px`),this._resizeContainer(),this._isContainerFixed()&&this._clampAllCardsInside(),this._queueSave("resize-end")}}}),e.addEventListener("mousedown",u=>{this.editMode&&(u.target.closest(".resize-handle")||u.target.closest(".delete-handle")||u.target.closest(".chip")||(u.shiftKey||u.ctrlKey||u.metaKey?(u.stopPropagation(),this._toggleSelection(e)):this._selection.has(e)||(this._clearSelection(),this._toggleSelection(e,!0))))})}async _createCard(e){let o=(await this._helpersPromise||await window.loadCardHelpers()).createCardElement(e);if(o.hass=this.hass,e.type==="custom:mod-card"&&(await new Promise(c=>setTimeout(c,0)),o.setConfig&&typeof o.setConfig=="function"))try{o.setConfig(e)}catch{}return o}_makeWrapper(e){let n=document.createElement("div");n.classList.add("card-wrapper"),n.dataset.tabId=this._normalizeTabId(this.activeTab||this.defaultTab),this.editMode&&n.classList.add("editing"),n.style.zIndex||(n.style.zIndex=String(this._highestZ()+1));let o=document.createElement("div");o.className="chip",o.innerHTML=`
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
    `;let c=document.createElement("div");c.className="delete-handle",c.innerHTML='<ha-icon icon="mdi:close-thick"></ha-icon>',c.addEventListener("click",u=>{var f,v;u.stopPropagation(),this._selection.size>1&&this._selection.has(n)?(Array.from(this._selection).forEach(g=>g.remove()),this._clearSelection(),this._resizeContainer(),this._queueSave("delete-multi"),(f=this._ensurePlaceholderIfEmpty)==null||f.call(this)):(n.remove(),this._resizeContainer(),this._queueSave("delete"),(v=this._ensurePlaceholderIfEmpty)==null||v.call(this))});try{this._addTabSelectorToChip(n,n.dataset.tabId)}catch{}o.addEventListener("click",async u=>{var v,y,g,x,A;u.stopPropagation();let f=(g=(y=(v=u.target)==null?void 0:v.closest("button"))==null?void 0:y.dataset)==null?void 0:g.act;if(f){if(f==="delete")this._selection.size>1&&this._selection.has(n)?(Array.from(this._selection).forEach(T=>T.remove()),this._clearSelection(),this._resizeContainer(),this._queueSave("delete-multi"),this._ensurePlaceholderIfEmpty()):(n.remove(),this._resizeContainer(),this._queueSave("delete"),this._ensurePlaceholderIfEmpty());else if(f==="duplicate"||f==="copy"){let S=this._selection.size>1&&this._selection.has(n)?Array.from(this._selection):[n];for(let T of S){let L=this._extractCardConfig(T.firstElementChild)||{},k=await this._createCard(L),O=this._makeWrapper(k);O.style.width=T.style.width,O.style.height=T.style.height;let M=(parseFloat(T.getAttribute("data-x"))||0)+this.gridSize,_=(parseFloat(T.getAttribute("data-y"))||0)+this.gridSize;this._setCardPosition(O,M,_),O.style.zIndex=String(this._highestZ()+1);try{let P=(x=T.dataset)==null?void 0:x.tabId;P&&(O.dataset.tabId=P)}catch{}this.cardContainer.appendChild(O);try{(A=this._addTabSelectorToChip)==null||A.call(this,O,O.dataset.tabId)}catch{}try{this._rebuildOnce(O.firstElementChild)}catch{}this._initCardInteract(O)}this._resizeContainer(),this._queueSave("duplicate")}else if(f==="front")this._adjustZ(n,1);else if(f==="back")this._adjustZ(n,-1);else if(f==="front-most"){let S=this._selection.size>1&&this._selection.has(n)?Array.from(this._selection):[n];S.sort((L,k)=>{let O=parseInt(L.style.zIndex||"1",10),M=parseInt(k.style.zIndex||"1",10);return O-M});let T=this._highestZ();for(let L of S)T+=1,L.style.zIndex=String(T);this._queueSave("z-change")}else if(f==="back-most"){let S=this._selection.size>1&&this._selection.has(n)?Array.from(this._selection):[n];S.sort((k,O)=>{let M=parseInt(k.style.zIndex||"1",10);return parseInt(O.style.zIndex||"1",10)-M});let T=1/0;this.cardContainer.querySelectorAll(".card-wrapper").forEach(k=>{let O=parseInt(k.style.zIndex||"1",10);O<T&&(T=O)}),isFinite(T)||(T=1);let L=T;for(let k of S)L-=1,k.style.zIndex=String(Math.max(1,L));this._queueSave("z-change")}else if(f==="edit"){let S=this._extractCardConfig(n.firstElementChild)||{};await this._openSmartPicker("edit",S,async T=>{var O,M,_;let L=n.firstElementChild,k=await this._createCard(T);try{n.dataset.cfg=JSON.stringify(T),(O=this._hasCardModDeep)!=null&&O.call(this,T)?n.dataset.needsCardMod="true":delete n.dataset.needsCardMod}catch{}n.replaceChild(k,L),await Mr();try{if(k.hass=this.hass,(M=k.requestUpdate)==null||M.call(k),k.updateComplete)try{await k.updateComplete}catch{}}catch{}try{this._rebuildOnce(k)}catch{}try{k.dispatchEvent(new Event("ll-rebuild",{bubbles:!0,composed:!0}))}catch{}(_=this._resizeContainer)==null||_.call(this);try{clearTimeout(this._saveTimer),await this._saveLayout(!0)}catch(P){console.warn("Save before reload failed",P)}window.location.reload()})}}});let s=document.createElement("div");s.className="shield";let d=document.createElement("div");d.classList.add("resize-handle"),this.editMode||(d.style.display="none"),d.title="Resize",d.innerHTML='<ha-icon icon="mdi:resize-bottom-right"></ha-icon>';try{let u=e._config||e.config;u&&typeof u=="object"&&Object.keys(u).length&&(n.dataset.cfg=JSON.stringify(u),this._hasCardModDeep(u)&&(n.dataset.needsCardMod="true"))}catch{}n.append(e,s,o,c,d);try{this._rebuildOnce(e)}catch{}return n}_makePlaceholderAt(e=0,n=0,o=400,c=400){let s=document.createElement("div");s.classList.add("card-wrapper","ddc-placeholder"),s.dataset.placeholder="1",this.editMode&&s.classList.add("editing"),this._setCardPosition(s,e,n),s.style.width=`${o}px`,s.style.height=`${c}px`,s.style.zIndex=String(this._highestZ()+1);let d=document.createElement("div");d.className="ddc-placeholder-inner",d.setAttribute("aria-hidden","true");let u=document.createElement("div");u.className="ddc-hero";let f=this.heroImage;if(f){let x=document.createElement("img");x.src=f,x.alt="",u.appendChild(x)}let v=document.createElement("div");v.className="ddc-title",v.textContent="Drag & Drop Card";let y=document.createElement("div");y.className="ddc-sub",y.textContent="Hold me / double click me to enter Edit mode",u.append(v,y),d.appendChild(u),s.addEventListener("dblclick",x=>{x.stopPropagation(),this._toggleEditMode(!0)});let g=document.createElement("div");return g.className="shield",s.append(d,g),s}_processCardModOnce(){var n;if(this._cardModProcessed)return;this._cardModProcessed=!0,(((n=this.cardContainer)==null?void 0:n.querySelectorAll('[data-needs-card-mod="true"]'))||[]).forEach(o=>{let c=o.firstElementChild;if(!c)return;let s=c._config||c.config;if(s){if(s.type==="custom:mod-card")setTimeout(()=>{if(c.updateComplete)c.updateComplete.then(()=>{c.requestUpdate()});else if(c.setConfig)try{c.setConfig({...s})}catch{}},100);else if(s.card_mod&&c.setConfig)try{c.setConfig({...s})}catch{}}})}_showEmptyPlaceholder(){if(this.cardContainer.querySelector(".ddc-placeholder"))return;let e=this._makePlaceholderAt(0,0,200,200);this.cardContainer.appendChild(e),this._resizeContainer(),this._syncEmptyStateUI()}_hideEmptyPlaceholder(){this.cardContainer.querySelectorAll(".ddc-placeholder").forEach(e=>e.remove())}_ensurePlaceholderIfEmpty(){var n;this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)").length===0&&this._showEmptyPlaceholder(),(n=this._applyAutoScale)==null||n.call(this),this._syncEmptyStateUI()}_adjustZ(e,n){let c=parseInt(e.style.zIndex||"1",10)+n;c=Math.max(1,Math.min(9999,c)),e.style.zIndex=String(c),this._queueSave("z-change")}_highestZ(){let e=0;return this.cardContainer.querySelectorAll(".card-wrapper").forEach(n=>{let o=parseInt(n.style.zIndex||"0",10);o>e&&(e=o)}),e}_setCardPosition(e,n,o){let c=Math.round(n),s=Math.round(o);e.style.transform=`translate3d(${c}px, ${s}px, 0)`,e.setAttribute("data-x",String(c)),e.setAttribute("data-y",String(s))}_computeDesignSize(){let e=this.cardContainer;if(!e)return{w:1,h:1};if(this._isContainerFixed()){let{w:d,h:u}=this._resolveFixedSize();return{w:Math.max(1,d),h:Math.max(1,u)}}let n=0,o=0,c=Array.from(e.querySelectorAll(".card-wrapper"));if(!c.length){let d=e.getBoundingClientRect();return{w:Math.max(1,d.width||1),h:Math.max(1,d.height||1)}}for(let d of c){let u=parseFloat(d.getAttribute("data-x-raw")||d.getAttribute("data-x")||"0")||0,f=parseFloat(d.getAttribute("data-y-raw")||d.getAttribute("data-y")||"0")||0,v=parseFloat(d.style.width)||d.getBoundingClientRect().width||0,y=parseFloat(d.style.height)||d.getBoundingClientRect().height||0,g=u+v,x=f+y;g>n&&(n=g),x>o&&(o=x)}let s=Math.max(1,this.gridSize||10);return n=Math.ceil(n/s)*s,o=Math.ceil(o/s)*s,{w:Math.max(1,n),h:Math.max(1,o)}}_startScaleWatch(){if(!this.autoResizeCards||this.__scaleRAF)return;let e=()=>{var c,s;if(!this.autoResizeCards){this.__scaleRAF=null;return}let n=this.getBoundingClientRect(),o=Math.max(1,n.width||0);o!==this.__lastScaleW&&(this.__lastScaleW=o,String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(c=this._applyAutoFillNoScale)==null||c.call(this):(s=this._applyAutoScale)==null||s.call(this)),this.__scaleRAF=requestAnimationFrame(e)};this.__scaleRAF=requestAnimationFrame(e)}_stopScaleWatch(){if(this.__scaleRAF){try{cancelAnimationFrame(this.__scaleRAF)}catch{}this.__scaleRAF=null}}_applyAutoScale(){var u,f,v,y,g,x,A,S,T,L,k,O,M,_,P,R,H,U,$,re,F,V;let e="dynamic";try{if(e=String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase(),e==="auto"){(u=this._applyAutoFillNoScale)==null||u.call(this),this.removeAttribute("ddc-fixed-ui"),(v=(f=this.style)==null?void 0:f.removeProperty)==null||v.call(f,"--ddc-ui-width");return}}catch{}let n=this.cardContainer;if(!n)return;try{(this.autoResizeCards||e==="auto")&&typeof this._ensureScaleWrapper=="function"&&this._ensureScaleWrapper()}catch{}if(!this.autoResizeCards){let K=typeof this._computeDesignSize=="function"?this._computeDesignSize():{w:n.offsetWidth||1,h:n.offsetHeight||1};if(e==="dynamic"){try{(y=this._computeHaSidebarGutters_)==null||y.call(this)}catch{}this.setAttribute("ddc-fixed-ui",""),(x=(g=this.style)==null?void 0:g.setProperty)==null||x.call(g,"--ddc-ui-width",`${K.w}px`)}else this.removeAttribute("ddc-fixed-ui"),(S=(A=this.style)==null?void 0:A.removeProperty)==null||S.call(A,"--ddc-ui-width");let le=`${K.w}px`,Ke=`${K.h}px`,pe=n.style.width===le,ze=n.style.height===Ke,Ce=n.style.transform==="scale(1)";if(!(pe&&ze&&Ce)&&(n.style.width=le,n.style.height=Ke,n.style.transform="scale(1)",n.style.transformOrigin="top left",n.style.position="absolute",n.style.top="0",n.style.left="0",this.__pointerScaleX=1,this.__pointerScaleY=1,this.__scaleOuter)){let ke=this.parentElement&&((L=(T=this.parentElement).getBoundingClientRect)==null?void 0:L.call(T).width)||this.offsetParent&&((O=(k=this.offsetParent).getBoundingClientRect)==null?void 0:O.call(k).width)||this.getBoundingClientRect&&this.getBoundingClientRect().width||this.offsetWidth||K.w,je=`${Math.max(1,ke)}px`,qe=`${Math.max(1,K.h)}px`;this.__scaleOuter.style.width!==je&&(this.__scaleOuter.style.width=je),this.__scaleOuter.style.height!==qe&&(this.__scaleOuter.style.height=qe)}try{(M=this._syncTabsWidth_)==null||M.call(this)}catch{}return}this.removeAttribute("ddc-fixed-ui"),(P=(_=this.style)==null?void 0:_.removeProperty)==null||P.call(_,"--ddc-ui-width");let o=typeof this._computeDesignSize=="function"?this._computeDesignSize():{w:n.offsetWidth||1,h:n.offsetHeight||1},c=this.parentElement&&((H=(R=this.parentElement).getBoundingClientRect)==null?void 0:H.call(R).width)||this.offsetParent&&(($=(U=this.offsetParent).getBoundingClientRect)==null?void 0:$.call(U).width)||this.getBoundingClientRect&&this.getBoundingClientRect().width||this.offsetWidth||o.w,s=Math.max(1,c),d=s/Math.max(1,o.w);this.__scaleOuter&&(this.__scaleOuter.style.width=`${s}px`,this.__scaleOuter.style.height=`${Math.max(1,o.h*d)}px`),n.style.width=`${o.w}px`,n.style.height=`${o.h}px`,n.style.transform=`scale(${d})`,n.style.transformOrigin="top left",n.style.position="absolute",n.style.top="0",n.style.left="0",this.__pointerScaleX=d||1,this.__pointerScaleY=d||1;try{(re=this._syncTabsWidth_)==null||re.call(this)}catch{}try{(F=this._layoutYtBackground_)==null||F.call(this)}catch{}try{(V=this._requestGridButtonsUpdateSoon)==null||V.call(this)}catch{}}_applyAutoFillNoScale(){var e,n,o,c,s,d,u;if(!this.__applyingAutoFill){this.__applyingAutoFill=!0;try{try{(e=this._ensureScaleWrapper)==null||e.call(this)}catch{}let f=this.__scaleOuter||((o=(n=this.shadowRoot)==null?void 0:n.querySelector)==null?void 0:o.call(n,".ddc-scale-outer"))||this,v=this.cardContainer||((s=(c=this.shadowRoot)==null?void 0:c.querySelector)==null?void 0:s.call(c,"#cardContainer"));if(!f||!v)return;f.style.overflow="hidden",f.style.overflowX="auto",f.style.overflowY="hidden",f.style.width="100%";let y=f.getBoundingClientRect(),g=Math.max(1,Math.round(y.width||0)),x=Math.max(1,Math.round(y.height||0));if(x<150){let R=Math.max(0,Math.round(y.top||0)),H=Math.max(1,window.innerHeight||document.documentElement.clientHeight||0),U=Math.max(1,H-R-8);Math.abs(U-x)>4&&(f.style.height=U+"px",y=f.getBoundingClientRect(),g=Math.max(1,Math.round(y.width||0)),x=Math.max(1,Math.round(y.height||0)))}let A=0,S=0,T=Array.from(v.querySelectorAll(".card-wrapper"));if(T.length){let R=v.getBoundingClientRect();for(let H of T){let U=H.getBoundingClientRect(),$=U.left-R.left+U.width,re=U.top-R.top+U.height;$>A&&(A=$),re>S&&(S=re)}}else A=v.scrollWidth||v.offsetWidth||g,S=v.scrollHeight||v.offsetHeight||x;let L=Number(this.gridSize||1)||1,k=Math.max(1,Math.round(Math.ceil(A/L)*L)),O=Math.max(1,Math.round(Math.ceil(S/L)*L)),M=g>k?g:k,_=x>O?x:O;if(v.style.transform="none",v.style.transformOrigin="left top",this.__pointerScaleX=1,this.__pointerScaleY=1,v.style.width=`${M}px`,v.style.height=`${_}px`,f){let R=0;try{let $=f.getBoundingClientRect();R=Math.max(0,Math.round($.top||0))}catch{}let H=Math.max(1,window.innerHeight||document.documentElement.clientHeight||0),U=Math.max(1,H-R-8);f.style.height=`${_}px`}v.style.position=v.style.position||"absolute",v.style.top=v.style.top||"0",v.style.left=v.style.left||"0";let P=this.tabsBar;P&&this.tabsPosition!=="left"&&(P.style.width="100%",P.style.maxWidth="100%")}finally{try{(d=this._layoutYtBackground_)==null||d.call(this)}catch{}try{(u=this._requestGridButtonsUpdateSoon)==null||u.call(this)}catch{}requestAnimationFrame(()=>{this.__applyingAutoFill=!1})}}}_resizeContainer(){var s,d;let e=this.cardContainer;if(!e||this._isContainerFixed())return;let n=Array.from(e.querySelectorAll(".card-wrapper")),o=0,c=0;n.forEach(u=>{let f=u.getBoundingClientRect(),v=e.getBoundingClientRect(),y=f.left-v.left+f.width,g=f.top-v.top+f.height;o=Math.max(o,y),c=Math.max(c,g)}),e.style.width=`${Math.ceil(o/this.gridSize)*this.gridSize||100}px`,e.style.height=`${Math.ceil(c/this.gridSize)*this.gridSize||100}px`;try{(s=this._syncTabsWidth_)==null||s.call(this)}catch{}try{(d=this._requestGridButtonsUpdateSoon)==null||d.call(this)}catch{}}_pushCardsOutOfTheWay(e,n,o,c,s){if(!this.__collisionOriginals)return;let d=new Set(e.map(k=>k.el)),u=Array.from(this.cardContainer.querySelectorAll(".card-wrapper")).filter(k=>!k.dataset.placeholder),f=this._isContainerFixed(),{w:v,h:y}=this._getContainerSize();for(let k of u){if(d.has(k))continue;let O=this.__collisionOriginals.get(k);if(O){k.setAttribute("data-x-raw",String(O.x)),k.setAttribute("data-y-raw",String(O.y));let M=c?Math.round(O.x/s)*s:O.x,_=c?Math.round(O.y/s)*s:O.y;this._setCardPosition(k,M,_)}}let g=e.map(k=>({x:k.snapX,y:k.snapY,w:k.w,h:k.h})),x=new Map,A=new Map;for(let k of u){let O=parseFloat(k.style.width)||k.getBoundingClientRect().width,M=parseFloat(k.style.height)||k.getBoundingClientRect().height;A.set(k,{w:O,h:M})}let S=n>0?1:n<0?-1:0,T=o>0?1:o<0?-1:0,L=Math.abs(n)>=Math.abs(o);for(let k of u){if(d.has(k))continue;let O=this.__collisionOriginals.get(k);if(!O)continue;let{x:M,y:_}=O,{w:P,h:R}=A.get(k),H=!1;for(let U of g)if(this._rectsOverlap({x:U.x,y:U.y,w:U.w,h:U.h},{x:M,y:_,w:P,h:R})){H=!0,L&&S!==0?M=S>0?U.x+U.w:U.x-P:!L&&T!==0?_=T>0?U.y+U.h:U.y-R:M=U.x+U.w;break}if(H){let U=0,$=L?S!==0?S*s:s:0,re=L?0:T!==0?T*s:s;for(;U<100;){let F={x:M,y:_,w:P,h:R},V=!1;for(let K of g)if(this._rectsOverlap(F,K)){V=!0;break}if(!V){for(let[,K]of x)if(this._rectsOverlap(F,K)){V=!0;break}}if(!V&&f&&(M<0||_<0||M+P>v||_+R>y)&&(V=!0),!V)break;M+=$,_+=re,U++}f&&(M=Math.max(0,Math.min(M,Math.max(0,v-P))),_=Math.max(0,Math.min(_,Math.max(0,y-R))))}x.set(k,{x:M,y:_,w:P,h:R}),g.push({x:M,y:_,w:P,h:R})}for(let[k,O]of x){k.setAttribute("data-x-raw",String(O.x)),k.setAttribute("data-y-raw",String(O.y));let M=c?Math.round(O.x/s)*s:O.x,_=c?Math.round(O.y/s)*s:O.y;this._setCardPosition(k,M,_)}}_rectFor(e,n=null,o=null,c=null,s=null){let d=n!=null?n:parseFloat(e.getAttribute("data-x"))||0,u=o!=null?o:parseFloat(e.getAttribute("data-y"))||0,f=c!=null?c:parseFloat(e.style.width)||e.getBoundingClientRect().width||0,v=s!=null?s:parseFloat(e.style.height)||e.getBoundingClientRect().height||0;return{x:d,y:u,w:f,h:v,el:e}}_rectsOverlap(e,n,o=.5){return!(e.x+e.w<=n.x+o||n.x+n.w<=e.x+o||e.y+e.h<=n.y+o||n.y+n.h<=e.y+o)}_anyCollisionFor(e,n){let o=Array.from(this.cardContainer.querySelectorAll(".card-wrapper")).filter(s=>!n.has(s)&&!s.dataset.placeholder);if(!o.length)return!1;let c=o.map(s=>this._rectFor(s));for(let s of e)for(let d of c)if(this._rectsOverlap(s,d))return!0;return!1}_extractCardConfig(e){var o;if(!e)return{};let n=e._config||e.config;if(n&&typeof n=="object"&&Object.keys(n).length)return n;try{let c=e.closest?e.closest(".card-wrapper"):null,s=(o=c==null?void 0:c.dataset)==null?void 0:o.cfg;if(s){let d=JSON.parse(s);if(d&&typeof d=="object")return d}}catch{}return{}}async _openCardManager(){await this._openSmartPicker("add")}_catalog(){return[{id:"favorites",name:"Favorites",items:[]},{id:"recent",name:"Recent",items:[]},{id:"basics",name:"Basics",items:[{type:"entities",name:"Entities",icon:"mdi:format-list-bulleted"},{type:"entity",name:"Entity",icon:"mdi:checkbox-blank-circle-outline"},{type:"tile",name:"Tile",icon:"mdi:view-grid-outline"},{type:"button",name:"Button",icon:"mdi:gesture-tap-button"},{type:"glance",name:"Glance",icon:"mdi:eye-outline"},{type:"markdown",name:"Markdown",icon:"mdi:language-markdown"},{type:"custom_card",name:"Custom Card",icon:"mdi:puzzle-outline"}]},{id:"sensors",name:"Sensors",items:[{type:"sensor",name:"Sensor",icon:"mdi:antenna"},{type:"gauge",name:"Gauge",icon:"mdi:gauge"},{type:"history-graph",name:"History graph",icon:"mdi:chart-line"},{type:"statistics-graph",name:"Statistics graph",icon:"mdi:chart-bar"}]},{id:"visual",name:"Visual",items:[{type:"picture-entity",name:"Picture entity",icon:"mdi:image-outline"},{type:"picture-glance",name:"Picture glance",icon:"mdi:image-multiple-outline"},{type:"weather-forecast",name:"Weather",icon:"mdi:weather-partly-cloudy"},{type:"map",name:"Map",icon:"mdi:map"},{type:"iframe",name:"iFrame",icon:"mdi:application"}]},{id:"controls",name:"Controls",items:[{type:"light",name:"Light",icon:"mdi:lightbulb-outline"},{type:"thermostat",name:"Thermostat",icon:"mdi:thermostat"},{type:"media-control",name:"Media control",icon:"mdi:play-circle-outline"},{type:"alarm-panel",name:"Alarm panel",icon:"mdi:shield-home-outline"},{type:"area",name:"Area",icon:"mdi:map-marker"}]}]}async _getEditorElementForType(e,n){try{console.info("[ddc:editor] Requesting editor element",{type:e,cfg:n})}catch{}let o=await this._helpersPromise||await window.loadCardHelpers();try{typeof e=="string"&&e&&!e.startsWith("custom:")&&e!=="custom_card"&&await this._ensureCardModuleLoaded(e,n)}catch{}if(typeof e=="string"&&e==="entity")try{return await this._getEntityCardEditor(n||{})}catch(v){console.warn("[ddc:editor] Custom entity editor failed",v)}let c=async()=>{try{if(o.getCardElementClass)return await o.getCardElementClass(e);let v;if(n&&typeof n=="object")v={type:e,...n};else{let g;try{g=await this._getStubConfigForType(e)}catch{}v=g&&typeof g=="object"?{...g}:{type:e}}let y=o.createCardElement(v);return(y==null?void 0:y.constructor)||null}catch{return null}};try{let v=await c();if(v){if(typeof v.getConfigElement=="function"){let y=await v.getConfigElement();if(y){try{console.info("[ddc:editor] Found static class editor",{type:e})}catch{}return y}}if(typeof v.getConfigForm=="function")try{let y=await v.getConfigForm();if(y&&y.schema){try{await customElements.whenDefined("ha-form")}catch{}let g=document.createElement("ha-form");g.hass=this.hass,g.schema=Array.isArray(y.schema)?y.schema.map(x=>({...x})):y.schema,typeof y.computeLabel=="function"&&(g.computeLabel=y.computeLabel.bind(v)),typeof y.computeHelper=="function"&&(g.computeHelper=y.computeHelper.bind(v)),g.data={...n},g.addEventListener("value-changed",x=>{});try{console.info("[ddc:editor] Generated form editor via getConfigForm",{type:e})}catch{}return g}}catch{}}}catch{}if(typeof e=="string"&&(e.startsWith("custom:")||e==="custom_card"))try{let v;try{v=await this._getStubConfigForType(e)}catch{}let y=v&&typeof v=="object"?{...v}:{type:e},g=o.createCardElement(y);if(g.hass=this.hass,typeof g.getConfigElement=="function"){let x=await g.getConfigElement();if(x){try{console.info("[ddc:editor] Found instance-level editor",{type:e})}catch{}return x}}}catch{}let s=String(e).replace(/^custom:/,""),u=(Array.isArray(window.customCards)?window.customCards:[]).find(v=>(v==null?void 0:v.type)===s||(v==null?void 0:v.type)===e||(v==null?void 0:v.type)===`custom:${s}`),f=[];u!=null&&u.editor&&f.push(u.editor),f.push(`${s}-editor`,`${s}-config-editor`),s&&typeof s=="string"&&f.push(`hui-${s}-card-editor`);for(let v of f)if(!(!v||typeof v!="string"))for(let y of[0,100,300,700,1500,3e3])try{if(customElements.get(v)||await Promise.race([customElements.whenDefined(v),new Promise(g=>setTimeout(g,y))]),customElements.get(v)){try{console.info("[ddc:editor] Found editor by tag",{type:e,tag:v})}catch{}return document.createElement(v)}}catch{}return null}async _ensureCardModuleLoaded(e,n){try{let o=await this._helpersPromise||await window.loadCardHelpers(),c;if(n&&typeof n=="object")c={type:e,...n};else{let u;try{u=await this._getStubConfigForType(e)}catch{}c=u&&typeof u=="object"?{...u}:{type:e}}let s=o.createCardElement(c);s.hass=this.hass;let d=document.createElement("div");d.style.cssText="position:fixed;left:-9999px;top:-9999px;opacity:0;pointer-events:none;",d.appendChild(s),document.body.appendChild(d),await new Promise(u=>requestAnimationFrame(u)),d.remove();try{console.info("[ddc:editor] Warmed card module",{type:e})}catch{}}catch{}}_ensureOverlayZFix(){if(document.querySelector("style[data-ddc-overlay-fix]"))return;let e=document.createElement("style");e.setAttribute("data-ddc-overlay-fix",""),e.textContent=`
      /* Make common HA overlays float above our modal */
      vaadin-combo-box-overlay,
      vaadin-overlay-backdrop,
      mwc-menu-surface,
      .mdc-menu-surface--open {
        z-index: 1000000 !important;
      }
    `,document.head.appendChild(e)}_customCardsFromRegistry(){return(Array.isArray(window.customCards)?window.customCards:[]).map(n=>{var o;return{type:(o=n==null?void 0:n.type)!=null&&o.startsWith("custom:")?n.type:`custom:${n==null?void 0:n.type}`,name:(n==null?void 0:n.name)||(n==null?void 0:n.type)||"Custom card",icon:"mdi:puzzle-outline",description:(n==null?void 0:n.description)||"",editorTag:(n==null?void 0:n.editor)||null}}).filter(n=>typeof n.type=="string"&&n.type.startsWith("custom:"))}_schemaForType(e){let n=c=>c,o=[];return{entities:n({fields:[{key:"entities",type:"entities",multi:!0,domains:o,label:"Entities"}]}),entity:n({fields:[{key:"entity",type:"entity",multi:!1,domains:o,label:"Entity"}]}),sensor:n({fields:[{key:"entity",type:"entity",multi:!1,domains:["sensor"],label:"Sensor"},{key:"name",type:"text",label:"Name (optional)"}]}),gauge:n({fields:[{key:"entity",type:"entity",multi:!1,domains:["sensor","number","input_number"],label:"Numeric entity"},{key:"min",type:"number",label:"Min",step:"any"},{key:"max",type:"number",label:"Max",step:"any"}]}),"history-graph":n({fields:[{key:"entities",type:"entities",multi:!0,domains:o,label:"Entities (multiselect)"},{key:"hours_to_show",type:"number",label:"Hours to show",default:24}]}),"statistics-graph":n({fields:[{key:"entities",type:"entities",multi:!0,domains:["sensor","number","input_number"],label:"Entities (multiselect)"},{key:"chart_type",type:"select",options:["line","bar"],label:"Chart type",default:"line"},{key:"statistic",type:"select",options:["mean","min","max","sum"],label:"Statistic",default:"mean"}]}),glance:n({fields:[{key:"entities",type:"entities",multi:!0,domains:o,label:"Entities (multiselect)"}]}),"picture-glance":n({fields:[{key:"entities",type:"entities",multi:!0,domains:o,label:"Entities (multiselect)"},{key:"image",type:"text",label:"Image URL (optional)"}]}),"picture-entity":n({fields:[{key:"entity",type:"entity",multi:!1,domains:o,label:"Entity"},{key:"image",type:"text",label:"Image URL (optional)"}]}),"weather-forecast":n({fields:[{key:"entity",type:"entity",multi:!1,domains:["weather"],label:"Weather entity"}]}),map:n({fields:[{key:"entities",type:"entities",multi:!0,domains:["device_tracker","person"],label:"Trackers / people (multiselect)"},{key:"default_zoom",type:"number",label:"Default zoom",default:14}]}),"media-control":n({fields:[{key:"entity",type:"entity",multi:!1,domains:["media_player"],label:"Media player"}]}),light:n({fields:[{key:"entity",type:"entity",multi:!1,domains:["light"],label:"Light"}]}),thermostat:n({fields:[{key:"entity",type:"entity",multi:!1,domains:["climate"],label:"Climate"}]}),"alarm-panel":n({fields:[{key:"entity",type:"entity",multi:!1,domains:["alarm_control_panel"],label:"Alarm"}]}),markdown:n({fields:[{key:"content",type:"textarea",label:"Markdown"}]}),tile:n({fields:[{key:"entity",type:"entity",multi:!1,domains:o,label:"Entity"}]}),button:n({fields:[{key:"entity",type:"entity",multi:!1,domains:o,label:"Entity (optional)"}]}),iframe:n({fields:[{key:"url",type:"text",label:"URL"}]}),area:n({fields:[{key:"area",type:"text",label:"Area ID"}]})}[e]||{fields:[]}}async _getEntityCardEditor(e={}){let n=document.createElement("div");n.style.display="flex",n.style.flexDirection="column",n.style.gap="12px",n.style.padding="8px 0",n.style.overflow="visible",n._cfg={type:"entity",...e||{}};let o=()=>{let O={type:"entity"};["entity","name","icon","attribute","unit","state_color","theme"].forEach(M=>{let _=n._cfg[M];_!==void 0&&_!==""&&_!==null&&(O[M]=_)}),n.dispatchEvent(new CustomEvent("config-changed",{detail:{config:O}}))},c=document.createElement("div");c.style.display="flex",c.style.flexDirection="column",c.style.gap="4px";let s=document.createElement("span");s.textContent="Entity",s.style.fontSize=".8rem",s.style.opacity="0.8";let d=document.createElement("ha-entity-picker");d.setAttribute("label","Select entity"),d.addEventListener("value-changed",O=>{var _,P,R;O.stopPropagation();let M=(R=O.detail&&((_=O.detail.value)!=null?_:O.detail))!=null?R:(P=O.target)==null?void 0:P.value;n._cfg.entity=M||"";try{u()}catch{}o()}),c.appendChild(s),c.appendChild(d),n.appendChild(c);let u=()=>{},f=document.createElement("div");f.style.display="grid",f.style.gridTemplateColumns="1fr 1fr",f.style.columnGap="12px",f.style.rowGap="12px";let v=(O,M)=>{let _=document.createElement("div");_.style.display="flex",_.style.flexDirection="column",_.style.gap="4px";let P=document.createElement("span");P.textContent=O,P.style.fontSize=".8rem",P.style.opacity="0.8",_.appendChild(P),_.appendChild(M),f.appendChild(_)},y;customElements.get("ha-textfield")?(y=document.createElement("ha-textfield"),y.setAttribute("label","Name"),y.addEventListener("input",()=>{n._cfg.name=y.value||void 0,o()})):(y=document.createElement("input"),y.type="text",y.placeholder="Name",y.addEventListener("input",()=>{n._cfg.name=y.value||void 0,o()}),Object.assign(y.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})),v("Name",y);let g;customElements.get("ha-icon-picker")?(g=document.createElement("ha-icon-picker"),g.setAttribute("label","Icon"),g.addEventListener("value-changed",O=>{var M;O.stopPropagation(),n._cfg.icon=((M=O.detail)==null?void 0:M.value)||void 0,o()}),Object.assign(g.style,{position:"relative",zIndex:"1000"})):customElements.get("ha-textfield")?(g=document.createElement("ha-textfield"),g.setAttribute("label","Icon"),g.addEventListener("input",()=>{n._cfg.icon=g.value||void 0,o()})):(g=document.createElement("input"),g.type="text",g.placeholder="mdi:icon",g.addEventListener("input",()=>{n._cfg.icon=g.value||void 0,o()}),Object.assign(g.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})),v("Icon",g);let x;if(u=()=>{var $,re;let O=[],M=($=n._cfg)==null?void 0:$.entity,_=n._hass;if(M&&_&&_.states&&_.states[M]&&_.states[M].attributes)try{O=Object.keys(_.states[M].attributes||{}).filter(F=>F&&typeof F=="string"),O.sort()}catch{}let P=x&&typeof x.value!="undefined"?x.value:void 0,R=((x==null?void 0:x.tagName)||"").toLowerCase(),H={min_color_temp_kelvin:"Minimum color temperature (Kelvin)",max_color_temp_kelvin:"Maximum color temperature (Kelvin)",min_color_temp_mireds:"Minimum color temperature (mireds)",max_color_temp_mireds:"Maximum color temperature (mireds)",min_mireds:"Minimum color temperature (mireds)",max_mireds:"Maximum color temperature (mireds)",effect_list:"Available effects",color_mode:"Color mode",brightness:"Brightness",hs_color:"Hs color",rgb_color:"Rgb color",xy_color:"Xy color",entity_id:"Entity ID",friendly_name:"Friendly name",icon:"Icon"},U=F=>H[F]?H[F]:F.split("_").map(V=>V&&(V.toLowerCase()==="kelvin"?"Kelvin":V.toLowerCase()==="mireds"?"mireds":V.charAt(0).toUpperCase()+V.slice(1))).join(" ");if(R==="ha-combo-box"){let F=O.map(V=>({value:V,label:U(V)}));F.unshift({value:"",label:""}),x.items=F,P&&O.includes(P)?x.value=P:x.value=""}else if(R==="ha-select"){x.innerHTML="";let F=document.createElement("mwc-list-item");F.setAttribute("value",""),F.textContent="",x.appendChild(F);for(let V of O){let K=document.createElement("mwc-list-item");K.setAttribute("value",V),K.textContent=U(V),x.appendChild(K)}P&&O.includes(P)?x.value=P:x.value="",(re=x.requestUpdate)==null||re.call(x)}else if(R==="select"){x.innerHTML="";let F=document.createElement("option");F.value="",F.textContent="",x.appendChild(F);for(let V of O){let K=document.createElement("option");K.value=V,K.textContent=U(V),x.appendChild(K)}P&&O.includes(P)&&(x.value=P)}},customElements.get("ha-combo-box"))x=document.createElement("ha-combo-box"),x.setAttribute("label","Attribute"),x.setAttribute("item-label-path","label"),x.setAttribute("item-value-path","value"),x.setAttribute("allow-custom-value","false"),x.addEventListener("value-changed",O=>{var _,P;O.stopPropagation();let M=(P=(_=O.detail)==null?void 0:_.value)!=null?P:x.value;n._cfg.attribute=M||void 0,o()});else if(customElements.get("ha-select"))x=document.createElement("ha-select"),x.setAttribute("label","Attribute"),x.addEventListener("selected",O=>{O.stopPropagation(),n._cfg.attribute=x.value||void 0,o()}),Object.assign(x.style,{position:"relative",zIndex:"1000"});else{x=document.createElement("select");let O=document.createElement("option");O.value="",O.textContent="",x.appendChild(O),x.addEventListener("change",M=>{M.stopPropagation(),n._cfg.attribute=x.value||void 0,o()}),Object.assign(x.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),Object.assign(x.style,{position:"relative",zIndex:"1000"})}u(),v("Attribute",x);let A;customElements.get("ha-textfield")?(A=document.createElement("ha-textfield"),A.setAttribute("label","Unit"),A.addEventListener("input",()=>{n._cfg.unit=A.value||void 0,o()})):(A=document.createElement("input"),A.type="text",A.placeholder="Unit",A.addEventListener("input",()=>{n._cfg.unit=A.value||void 0,o()}),Object.assign(A.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})),v("Unit",A);let S;if(customElements.get("ha-select"))S=document.createElement("ha-select"),S.setAttribute("label","Theme (optional)"),S.addEventListener("selected",O=>{O.stopPropagation(),n._cfg.theme=S.value||void 0,o()});else{S=document.createElement("select");let O=document.createElement("option");O.value="",O.textContent="",S.appendChild(O),S.addEventListener("change",M=>{M.stopPropagation(),n._cfg.theme=S.value||void 0,o()}),Object.assign(S.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})}v("Theme (optional)",S);let T;customElements.get("ha-switch")?(T=document.createElement("ha-switch"),T.addEventListener("change",()=>{n._cfg.state_color=!!T.checked,o()})):(T=document.createElement("input"),T.type="checkbox",T.addEventListener("change",()=>{n._cfg.state_color=!!T.checked,o()}));let L=document.createElement("div");L.style.display="flex",L.style.alignItems="center",L.style.gap="8px";let k=document.createElement("span");return k.textContent="Show state color",k.style.fontSize=".8rem",k.style.opacity="0.8",L.appendChild(k),L.appendChild(T),f.appendChild(L),n.appendChild(f),n.setConfig=(O={})=>{n._cfg={type:"entity",...O||{}};let M=n._cfg;if(d&&("value"in d&&(d.value=M.entity||""),d.setAttribute&&d.setAttribute("value",M.entity||"")),y&&(y.value=M.name||""),g&&(g.value=M.icon||""),x){try{u()}catch{}x.value=M.attribute||""}A&&(A.value=M.unit||""),S&&(S.value=M.theme||""),T&&"checked"in T&&(T.checked=!!M.state_color)},Object.defineProperty(n,"hass",{get(){return this._hass},set(O){var M;if(this._hass=O,d){try{d.hass=O}catch{}customElements.get("ha-entity-picker")||customElements.whenDefined("ha-entity-picker").then(()=>{var _;try{d.hass=this._hass,(_=d.requestUpdate)==null||_.call(d)}catch{}}).catch(()=>{})}if(g){try{g.hass=O}catch{}customElements.get("ha-icon-picker")||customElements.whenDefined("ha-icon-picker").then(()=>{var _;try{g.hass=this._hass,(_=g.requestUpdate)==null||_.call(g)}catch{}}).catch(()=>{})}if(S){let _=[];O&&O.themes&&(O.themes.themes?_=Object.keys(O.themes.themes):typeof O.themes=="object"&&(_=Object.keys(O.themes).filter(H=>H!=="default_theme")));let P=S.value,R=(S.tagName||"").toLowerCase();if(R==="ha-select"){S.innerHTML="";let H=document.createElement("mwc-list-item");H.setAttribute("value",""),H.textContent="",S.appendChild(H);for(let U of _){let $=document.createElement("mwc-list-item");$.setAttribute("value",U),$.textContent=U,S.appendChild($)}P&&_.includes(P)?S.value=P:P||(S.value=""),(M=S.requestUpdate)==null||M.call(S)}else if(R==="select"){S.innerHTML="";let H=document.createElement("option");H.value="",H.textContent="",S.appendChild(H);for(let U of _){let $=document.createElement("option");$.value=U,$.textContent=U,S.appendChild($)}P&&Array.from(S.options).some(U=>U.value===P)&&(S.value=P)}}try{u()}catch{}}}),n.setConfig(e||{}),n}_shapeBySchema(e,n={}){let o=this._schemaForType(e)||{fields:[]},c={...n,type:e};for(let s of o.fields){let d=c[s.key];if(s.type==="entities"){let f=(Array.isArray(d)?d:d!=null&&d!==""?[d]:[]).filter(Boolean);f.length?c[s.key]=f:delete c[s.key]}else if(s.type==="entity")Array.isArray(d)&&(d=d[0]),d==null||d===""?delete c[s.key]:c[s.key]=String(d);else if(s.type==="number")if(d==null||d==="")delete c[s.key];else{let u=Number(d);Number.isFinite(u)?c[s.key]=u:delete c[s.key]}else(s.type==="select"||s.type==="text"||s.type==="textarea")&&(d==null||d===""?delete c[s.key]:c[s.key]=d)}return c}_statesList(e){var c;let n=Object.keys(((c=this.hass)==null?void 0:c.states)||{});if(!e||!e.length)return n;if(!this.__domainIndex||this.__domainIndex._gen!==n.length){let s={};for(let d of n){let u=d.split(".")[0];(s[u]||(s[u]=[])).push(d)}this.__domainIndex={_gen:n.length,map:s}}let o=[];for(let s of e)this.__domainIndex.map[s]&&o.push(...this.__domainIndex.map[s]);return o}_isNumericEntity(e){var c,s;let n=(s=(c=this.hass)==null?void 0:c.states)==null?void 0:s[e];if(!n)return!1;let o=Number(n.state);return Number.isFinite(o)}_getFaves(){try{return new Set(JSON.parse(localStorage.getItem("ddc_faves")||"[]"))}catch{return new Set}}_setFaves(e){try{localStorage.setItem("ddc_faves",JSON.stringify(Array.from(e)))}catch{}}_getRecent(){try{return JSON.parse(localStorage.getItem("ddc_recent_types")||"[]")}catch{return[]}}_pushRecent(e){try{let n=this._getRecent().filter(o=>o!==e);n.unshift(e),n.length>10&&(n.length=10),localStorage.setItem("ddc_recent_types",JSON.stringify(n))}catch{}}async _ensureCodeMirror(){if(!this.__cmReady){if(!document.querySelector("link[data-cm-core]")){let e=document.createElement("link");e.rel="stylesheet",e.href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.css",e.setAttribute("data-cm-core",""),document.head.appendChild(e)}await new Promise(e=>{if(window.CodeMirror)return e();let n=document.createElement("script");n.src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.js",n.onload=e,document.head.appendChild(n)}),await new Promise(e=>{var o,c;if((c=(o=window.CodeMirror)==null?void 0:o.mimeModes)!=null&&c.yaml)return e();let n=document.createElement("script");n.src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/yaml/yaml.min.js",n.onload=e,document.head.appendChild(n)}),this.__cmReady=!0}}async _mountYamlEditor(e,n,o,c){let s=f=>window.jsyaml?window.jsyaml.dump(f):JSON.stringify(f,null,2),d=f=>window.jsyaml?window.jsyaml.load(f):JSON.parse(f);e.innerHTML="";let u=s(n);if(customElements.get("ha-code-editor")){let f=document.createElement("ha-code-editor");f.mode="yaml",f.hass=this.hass,f.value=u,f.style.display="block",f.style.height="260px",e.appendChild(f);let v=!1;return f.addEventListener("value-changed",y=>{var x,A,S;if(v)return;let g=(S=(A=(x=y.detail)==null?void 0:x.value)!=null?A:f.value)!=null?S:"";try{o(d(g))}catch(T){c==null||c(T)}}),{setValue:y=>{var x;let g=s(y);((x=f.value)!=null?x:"")!==g&&(v=!0,f.value=g,v=!1)}}}try{await this._ensureCodeMirror();let f=window.CodeMirror(e,{value:u,mode:"yaml",lineNumbers:!0,lineWrapping:!0,indentUnit:2,tabSize:2}),v=!1;return f.on("change",()=>{if(v)return;let y=f.getValue();try{o(d(y))}catch(g){c==null||c(g)}}),{setValue:y=>{let g=s(y);f.getValue()!==g&&(v=!0,f.setValue(g),v=!1)}}}catch{let f=document.createElement("textarea");return f.style.width="100%",f.style.height="260px",f.value=u,f.addEventListener("input",()=>{try{o(d(f.value))}catch(v){c==null||c(v)}}),e.appendChild(f),{setValue:v=>{let y=s(v);f.value!==y&&(f.value=y)}}}}_createVirtualList({container:e,items:n,rowHeight:o=36,renderRow:c}){e.style.position="relative",e.style.overflow="auto";let s=document.createElement("div");s.style.height=`${n.length*o}px`,e.innerHTML="",e.appendChild(s);let d=new Map,u=()=>{let f=e.scrollTop,v=e.clientHeight,y=Math.max(0,Math.floor(f/o)-6),g=Math.min(n.length-1,Math.ceil((f+v)/o)+6);for(let[x,A]of d)(x<y||x>g)&&(A.remove(),d.delete(x));for(let x=y;x<=g;x++){if(d.has(x))continue;let A=c(n[x],x);A.style.position="absolute",A.style.left="0",A.style.right="0",A.style.top=`${x*o}px`,d.set(x,A),e.appendChild(A)}};return e.addEventListener("scroll",u,{passive:!0}),new ResizeObserver(u).observe(e),u(),{refresh(f){if(f){n=f,s.style.height=`${n.length*o}px`;for(let[,v]of d)v.remove();d.clear()}u()}}}async _openSmartPicker(e="add",n=null,o=null){let c=()=>s.remove(),s=document.createElement("div");s.className="modal",s.innerHTML=`
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
      </div>`,this.shadowRoot.appendChild(s);let d=s.querySelector("#leftPane"),u=s.querySelector("#addBtn"),f=s.querySelector("#footAdd"),v=s.querySelector("#cancelBtn"),y=s.querySelector("#footCancel"),g=s.querySelector("#search"),x=s.querySelector("#cardHost"),A=s.querySelector("#editorHost"),S=s.querySelector("#editorSpin"),T=s.querySelector("#quickFill"),L=s.querySelector("#yamlHost"),k=s.querySelector("#yamlErr"),O=s.querySelector("#yamlSec"),M=s.querySelector("#tabVisual"),_=s.querySelector("#tabYaml"),P=s.querySelector("#tabVis"),R=s.querySelector("#visSec"),H=s.querySelector("#visHost"),U=s.querySelector("#err"),$=s.querySelector("#previewSpin"),re=q=>{u.disabled=f.disabled=!q},F=q=>{q?(U.hidden=!1,U.textContent=q):(U.hidden=!0,U.textContent="")},V=this._getFaves(),K=this._getRecent(),le=this._catalog(),Ke=le.find(q=>q.id==="favorites"),pe=le.find(q=>q.id==="recent"),ze=le.flatMap(q=>q.items||[]);Ke.items=ze.filter(q=>V.has(q.type)),pe.items=K.map(q=>ze.find(Y=>Y.type===q)).filter(Boolean);let Ce=this._customCardsFromRegistry();Ce.length&&le.push({id:"custom",name:"Custom (installed)",items:Ce});let ke=s.querySelector("#quickFillSec");ke&&(ke.style.display="none");let je=s.querySelector("#optionsSec .hd"),qe,Qe,ct=()=>{if(!Qe)return;let q=Ye&&V.has(Ye),Y=Qe.querySelector("ha-icon");Y&&Y.setAttribute("icon",q?"mdi:star":"mdi:star-outline")},dt=q=>{if(qe){let Y=ze.find(we=>we.type===q),ue=Y?Y.name:q||"";qe.textContent=ue}ct()};if(je&&!je.querySelector(".sel-info")){let q=je.querySelector("span");q&&(q.style.display="none"),qe=document.createElement("span"),qe.className="sel-info",qe.style.flex="1",qe.style.fontWeight="bold",qe.style.paddingRight="8px",je.insertBefore(qe,je.firstChild),Qe=document.createElement("button"),Qe.className="icon-btn",Qe.setAttribute("title","Favorite"),Object.assign(Qe.style,{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"28px",height:"28px",borderRadius:"6px",border:"1px solid var(--divider-color)",background:"var(--primary-background-color)",padding:"0",marginLeft:"4px",cursor:"pointer"}),Qe.innerHTML='<ha-icon icon="mdi:star-outline"></ha-icon>',je.appendChild(Qe),Qe.addEventListener("click",Y=>{Y.stopPropagation(),Ye&&(V.has(Ye)?V.delete(Ye):V.add(Ye),this._setFaves(V),ct(),st())})}let ot="visual",ae=q=>{let Y=q==="yaml",ue=q==="vis",we=!Y&&!ue;M.classList.toggle("active",we),M.setAttribute("aria-selected",String(we)),_.classList.toggle("active",Y),_.setAttribute("aria-selected",String(Y)),P&&(P.classList.toggle("active",ue),P.setAttribute("aria-selected",String(ue))),A.parentElement.style.display=we?"":"none",O.style.display=Y?"":"none",R&&(R.style.display=ue?"":"none"),Y?O.scrollIntoView({behavior:"smooth",block:"start"}):ue&&R&&R.scrollIntoView({behavior:"smooth",block:"start"}),ot=Y?"yaml":ue?"vis":"visual"};M.addEventListener("click",async()=>{var q;if(ae("visual"),!Me)await Ot(oe);else try{(q=Me.setConfig)==null||q.call(Me,oe)}catch{}}),_.addEventListener("click",()=>ae("yaml")),P&&P.addEventListener("click",()=>{ae("vis");try{De(oe)}catch{}}),ae("visual");let ut=()=>{let q=g.value.trim().toLowerCase();return le.map(Y=>({...Y,items:(Y.items||[]).filter(ue=>!q||ue.name.toLowerCase().includes(q)||ue.type.toLowerCase().includes(q))})).filter(Y=>Y.items&&Y.items.length||Y.id==="favorites"||Y.id==="recent")},st=()=>{let q=ut();d.innerHTML="",q.forEach(Y=>{let ue=document.createElement("div");ue.style.padding="12px",ue.style.borderBottom="1px solid var(--divider-color)";let we=document.createElement("h4");if(we.textContent=Y.name,we.style.margin="0 0 10px 0",we.style.fontSize=".92rem",we.style.opacity=".85",ue.appendChild(we),!Y.items.length&&(Y.id==="favorites"||Y.id==="recent")){let de=document.createElement("div");de.style.opacity=".6",de.style.fontSize=".85rem",de.textContent=Y.id==="favorites"?"No favorites yet.":"No recent items yet.",ue.appendChild(de)}else Y.items.forEach(de=>{let Oe=document.createElement("button");Oe.innerHTML=`<span style="display:inline-flex;align-items:center;gap:8px">
              <ha-icon icon="${de.icon}"></ha-icon><span>${de.name}</span>
            </span>`,Object.assign(Oe.style,{display:"block",width:"100%",textAlign:"left",border:"none",background:"transparent",padding:"8px",borderRadius:"10px",cursor:"pointer"}),Oe.addEventListener("click",async()=>{Le(Oe),await Rt(de.type)}),ue.appendChild(Oe)});d.appendChild(ue)})},Le=q=>{d.querySelectorAll("button").forEach(Y=>{Y.classList.remove("active"),Y.style.background="transparent",Y.style.color=""}),q&&(q.classList.add("active"),q.style.background="rgba(3,169,244,.12)",q.style.color="var(--primary-color)")},oe=null,Ye=null,Se=null,Me=null,gt=null,mt=0,Bt=null,lt="",Tt=(q,Y)=>{var N;let ue=this._schemaForType(q);if(T.innerHTML="",!ue.fields.length){T.innerHTML='<div style="opacity:.7;font-size:.9rem">No quick fill for this card \u2014 use the editors below.</div>';return}let we=Object.keys(((N=this.hass)==null?void 0:N.states)||{}),de=document.createElement("div"),Oe=(ee,Ne,j,Ze)=>{let Ge=document.createElement("div");Object.assign(Ge.style,{padding:"8px 10px",border:"1px solid var(--divider-color)",borderRadius:"10px",cursor:"pointer",userSelect:"none",display:"flex",alignItems:"center",gap:"8px"}),Ge.innerHTML=`<ha-icon icon="mdi:checkbox-blank-outline"></ha-icon><span>${ee}</span>`,Ne.includes(ee)&&(Ge.style.background="rgba(3,169,244,.12)",Ge.style.borderColor="var(--primary-color)",Ge.querySelector("ha-icon").setAttribute("icon","mdi:checkbox-marked")),Ge.addEventListener("click",async()=>{let rt=Ne.indexOf(ee);rt>=0?Ne.splice(rt,1):Ne.push(ee);let We=Ne.includes(ee);Ge.style.background=We?"rgba(3,169,244,.12)":"",Ge.style.borderColor=We?"var(--primary-color)":"var(--divider-color)",Ge.querySelector("ha-icon").setAttribute("icon",We?"mdi:checkbox-marked":"mdi:checkbox-blank-outline"),oe=this._shapeBySchema(q,{...oe,[Ze]:[...Ne]}),yt(oe),Se==null||Se.setValue(oe)}),j.appendChild(Ge)};ue.fields.forEach(ee=>{var Ze,Ge,rt,We,nt,tt,it,Xe,Je;let Ne=document.createElement("div");Object.assign(Ne.style,{display:"flex",gap:"8px",alignItems:"center",marginBottom:"8px"});let j=document.createElement("label");if(j.textContent=ee.label||ee.key,j.style.minWidth="130px",ee.type==="entities"){let Pe=document.createElement("div");Pe.style.flex="1";let ve=document.createElement("input");Object.assign(ve,{placeholder:"Filter entities\u2026"}),Object.assign(ve.style,{width:"100%",padding:"8px 10px",borderRadius:"10px",border:"1px solid var(--divider-color)",background:"var(--card-background-color)",color:"var(--primary-text-color)"});let Ae=document.createElement("div");Object.assign(Ae.style,{maxHeight:"220px",overflow:"auto",marginTop:"8px",border:"1px solid var(--divider-color)",borderRadius:"10px",padding:"6px"});let Re=ee.domains&&ee.domains.length?this._statesList(ee.domains):we,Ee=Array.isArray(Y[ee.key])?[...Y[ee.key]]:Y[ee.key]?[Y[ee.key]]:[],se=Z=>{let Q=document.createElement("div");Object.assign(Q.style,{padding:"6px 10px",margin:"4px 0",border:"1px solid var(--divider-color)",borderRadius:"10px",cursor:"pointer",display:"flex",alignItems:"center",gap:"8px",background:""});let W=document.createElement("ha-icon");W.setAttribute("icon","mdi:checkbox-blank-outline"),W.style.setProperty("--mdc-icon-size","18px");let D=document.createElement("span");D.textContent=Z,D.style.whiteSpace="nowrap",D.style.overflow="hidden",D.style.textOverflow="ellipsis",Q.append(W,D);let X=()=>{let ie=Ee.includes(Z);Q.style.background=ie?"rgba(3,169,244,.12)":"",Q.style.borderColor=ie?"var(--primary-color)":"var(--divider-color)",W.setAttribute("icon",ie?"mdi:checkbox-marked":"mdi:checkbox-blank-outline")};return X(),Q.addEventListener("click",()=>{let ie=Ee.indexOf(Z);ie>=0?Ee.splice(ie,1):Ee.push(Z),oe=this._shapeBySchema(q,{...oe,[ee.key]:[...Ee]}),yt(oe),Se==null||Se.setValue(oe),X()}),Q},ne=Re;this._createVirtualList({container:Ae,items:ne,rowHeight:36,renderRow:se}),ve.addEventListener("input",()=>{let Z=ve.value.trim().toLowerCase();ne=Re.filter(Q=>!Z||Q.toLowerCase().includes(Z)),this._createVirtualList({container:Ae,items:ne,rowHeight:36,renderRow:se})}),Pe.append(ve,Ae),Ne.append(j,Pe),oe=this._shapeBySchema(q,{...Y,[ee.key]:Ee})}if(ee.type==="entity"){let Pe=document.createElement("div");Pe.style.flex="1",Pe.style.position="relative";let ve=document.createElement("input");ve.setAttribute("list","ddc_entlist_"+ee.key),Object.assign(ve.style,{width:"100%",padding:"8px 10px 8px 36px",borderRadius:"10px",border:"1px solid var(--divider-color)"}),ve.placeholder=`Select ${((Ze=ee.label)==null?void 0:Ze.toLowerCase())||"entity"}\u2026`;let Ae=document.createElement("ha-icon");Ae.setAttribute("icon","mdi:magnify"),Object.assign(Ae.style,{position:"absolute",left:"10px",top:"8px",width:"18px",height:"18px","--mdc-icon-size":"18px",opacity:".7"});let Re=document.createElement("datalist");Re.id="ddc_entlist_"+ee.key;let Ee=ee.domains&&ee.domains.length?this._statesList(ee.domains):Object.keys(((Ge=this.hass)==null?void 0:Ge.states)||{});Re.innerHTML=Ee.map(se=>`<option value="${se}">`).join(""),ve.value=Array.isArray(Y[ee.key])?Y[ee.key][0]||"":Y[ee.key]||"",ve.addEventListener("change",async()=>{oe=this._shapeBySchema(q,{...oe,[ee.key]:ve.value||void 0}),yt(oe),Se==null||Se.setValue(oe)}),Pe.append(Ae,ve,Re),Ne.append(j,Pe)}if(ee.type==="number"){let Pe=document.createElement("div");Pe.style.flex="1",Pe.style.position="relative";let ve=document.createElement("input");ve.type="number",ee.step&&(ve.step=ee.step),Object.assign(ve.style,{width:"100%",padding:"8px 10px 8px 36px",borderRadius:"10px",border:"1px solid var(--divider-color)"});let Ae=document.createElement("ha-icon");Ae.setAttribute("icon","mdi:counter"),Object.assign(Ae.style,{position:"absolute",left:"10px",top:"8px","--mdc-icon-size":"18px",width:"18px",height:"18px",opacity:".7"}),ve.value=(We=(rt=Y[ee.key])!=null?rt:ee.default)!=null?We:"",ve.addEventListener("input",async()=>{let Re=ve.value===""?void 0:Number(ve.value);oe=this._shapeBySchema(q,{...oe,[ee.key]:isNaN(Re)?void 0:Re}),yt(oe),Se==null||Se.setValue(oe)}),Pe.append(Ae,ve),Ne.append(j,Pe)}if(ee.type==="select"){let Pe=document.createElement("div");Pe.style.flex="1",Pe.style.position="relative";let ve=document.createElement("select");Object.assign(ve.style,{width:"100%",padding:"8px 10px 8px 36px",borderRadius:"10px",border:"1px solid var(--divider-color)"});let Ae=document.createElement("ha-icon");Ae.setAttribute("icon","mdi:format-list-bulleted"),Object.assign(Ae.style,{position:"absolute",left:"10px",top:"8px","--mdc-icon-size":"18px",width:"18px",height:"18px",opacity:".7"}),(ee.options||[]).forEach(Re=>{let Ee=document.createElement("option");Ee.value=Re,ve.appendChild(Ee)}),ve.value=(it=(nt=Y[ee.key])!=null?nt:ee.default)!=null?it:((tt=ee.options)==null?void 0:tt[0])||"",ve.addEventListener("change",async()=>{oe=this._shapeBySchema(q,{...oe,[ee.key]:ve.value}),yt(oe),Se==null||Se.setValue(oe)}),Pe.append(Ae,ve),Ne.append(j,Pe)}if(ee.type==="text"){let Pe=document.createElement("div");Pe.style.flex="1",Pe.style.position="relative";let ve=document.createElement("input");ve.type="text",Object.assign(ve.style,{width:"100%",padding:"8px 10px 8px 36px",borderRadius:"10px",border:"1px solid var(--divider-color)"});let Ae=document.createElement("ha-icon");Ae.setAttribute("icon","mdi:text"),Object.assign(Ae.style,{position:"absolute",left:"10px",top:"8px","--mdc-icon-size":"18px",width:"18px",height:"18px",opacity:".7"}),ve.value=(Xe=Y[ee.key])!=null?Xe:"",ve.addEventListener("input",async()=>{oe=this._shapeBySchema(q,{...oe,[ee.key]:ve.value||void 0}),yt(oe),Se==null||Se.setValue(oe)}),Pe.append(Ae,ve),Ne.append(j,Pe)}if(ee.type==="textarea"){let Pe=document.createElement("textarea");Object.assign(Pe.style,{flex:"1",minHeight:"120px",padding:"8px 10px",borderRadius:"10px",border:"1px solid var(--divider-color)"}),Pe.value=(Je=Y[ee.key])!=null?Je:"",Pe.addEventListener("input",async()=>{oe=this._shapeBySchema(q,{...oe,[ee.key]:Pe.value||""}),yt(oe),Se==null||Se.setValue(oe)}),Ne.append(j,Pe)}de.appendChild(Ne)}),T.innerHTML="",T.appendChild(de)},wt=new WeakMap,Kt=q=>{if(!H)return;let Y=Array.isArray(q==null?void 0:q.visibility)?q.visibility.map(Oe=>({...Oe})):[],ue=()=>De(oe),we=()=>{var Oe;Y=Y.filter(N=>N&&typeof N=="object"&&N.condition),oe={...oe,visibility:Y};try{Se==null||Se.setValue(oe)}catch{}try{(Oe=Me==null?void 0:Me.setConfig)==null||Oe.call(Me,oe)}catch{}yt(oe)},de=()=>{if(H.innerHTML="",!Y||!Y.length){let N=document.createElement("div");N.style.opacity=".7",N.style.fontSize=".9rem",N.style.marginBottom="8px",N.textContent="No conditions defined \u2013 this card is always visible.",H.appendChild(N)}Y.forEach((N,ee)=>{let Ne=document.createElement("div");Object.assign(Ne.style,{display:"flex",flexDirection:"column",gap:"6px",marginBottom:"12px",border:"1px solid var(--divider-color)",borderRadius:"8px",padding:"8px"});let j=document.createElement("div");Object.assign(j.style,{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"4px"});let Ze=document.createElement("div");Ze.style.display="flex",Ze.style.alignItems="center",Ze.style.gap="6px";let Ge=document.createElement("ha-icon"),rt="mdi:filter",We=N.condition||"state";We==="numeric_state"?rt="mdi:numeric":We==="screen"?rt="mdi:monitor":We==="user"?rt="mdi:account":We==="state"&&(rt="mdi:state-machine"),Ge.setAttribute("icon",rt);let nt=document.createElement("span");nt.style.fontWeight="bold",nt.style.textTransform="capitalize",nt.textContent=We==="numeric_state"?"Entity numeric state":We==="state"?"Entity state":We==="screen"?"Screen":"User",Ze.appendChild(Ge),Ze.appendChild(nt),j.appendChild(Ze);let tt=document.createElement("button");tt.setAttribute("title","Remove condition"),tt.innerHTML='<ha-icon icon="mdi:trash-can-outline"></ha-icon>',Object.assign(tt.style,{border:"none",background:"transparent",cursor:"pointer",padding:"4px",display:"inline-flex",alignItems:"center"}),tt.style.position="relative",tt.style.zIndex="1000",tt.addEventListener("click",Re=>{Re.preventDefault(),Re.stopPropagation();let Ee=Y.indexOf(N);Ee>-1&&Y.splice(Ee,1),oe.visibility=Y,de(),we()}),j.appendChild(tt),Ne.appendChild(j);let it=document.createElement("div");it.style.display="flex",it.style.gap="8px";let Xe=document.createElement("label");Xe.textContent="Type",Xe.style.fontSize=".85rem",Xe.style.marginRight="4px";let Je=document.createElement("select");["state","numeric_state","screen","user"].forEach(Re=>{let Ee=document.createElement("option");Ee.value=Re,Ee.textContent=Re.replace("_"," "),Je.appendChild(Ee)}),Je.value=We,Je.addEventListener("change",()=>{N.condition=Je.value,delete N.entity,delete N.state,delete N.state_not,delete N.above,delete N.below,delete N.media_query,delete N.users,de(),we()}),it.appendChild(Xe),it.appendChild(Je),Ne.appendChild(it);let Pe=document.createElement("div");Object.assign(Pe.style,{display:"flex",flexWrap:"wrap",gap:"8px",alignItems:"center"});let ve=(Re,Ee)=>{let se=document.createElement("div");se.style.display="flex",se.style.flexDirection="column",se.style.gap="4px",se.style.minWidth="150px";let ne=document.createElement("span");ne.textContent=Re,ne.style.fontSize=".75rem",se.appendChild(ne),se.appendChild(Ee),Pe.appendChild(se)};(()=>{var Re,Ee;if(Pe.innerHTML="",N.condition==="state"){let se;customElements.get("ha-entity-picker")?(se=document.createElement("ha-entity-picker"),se.hass=this.hass,se.setAttribute("label","Select entity"),se.removeAttribute("hide-clear-icon"),se.value=N.entity||"",se.addEventListener("value-changed",Q=>{Q.stopPropagation(),N.entity=Q.detail.value||"",we()})):(se=document.createElement("input"),se.value=N.entity||"",se.addEventListener("input",()=>{N.entity=se.value.trim(),we()}),Object.assign(se.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})),ve("Entity",se);let ne;if(customElements.get("ha-select")){ne=document.createElement("ha-select");let Q=document.createElement("mwc-list-item");Q.setAttribute("value","state"),Q.textContent="State is equal to";let W=document.createElement("mwc-list-item");W.setAttribute("value","state_not"),W.textContent="State is not equal to",ne.appendChild(Q),ne.appendChild(W),ne.value=N.state_not!=null?"state_not":"state",ne.addEventListener("selected",D=>{D.stopPropagation();let X=N.state_not!=null?N.state_not:N.state;ne.value==="state_not"?(N.state_not=X,delete N.state):(N.state=X,delete N.state_not),we()})}else ne=document.createElement("select"),ne.innerHTML='<option value="state">State is equal to</option><option value="state_not">State is not equal to</option>',ne.value=N.state_not!=null?"state_not":"state",Object.assign(ne.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),ne.addEventListener("change",Q=>{Q.stopPropagation();let W=N.state_not!=null?N.state_not:N.state;ne.value==="state_not"?(N.state_not=W,delete N.state):(N.state=W,delete N.state_not),we()});ve("Match type",ne);let Z;customElements.get("ha-textfield")?(Z=document.createElement("ha-textfield"),Z.value=(N.state_not!=null?N.state_not:N.state)||"",Z.setAttribute("label",""),Z.addEventListener("input",Q=>{Q.stopPropagation();let W=ne.value;N[W]=Z.value;let D=W==="state"?"state_not":"state";delete N[D],we()})):(Z=document.createElement("input"),Z.value=(N.state_not!=null?N.state_not:N.state)||"",Object.assign(Z.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),Z.addEventListener("input",Q=>{Q.stopPropagation();let W=ne.value;N[W]=Z.value;let D=W==="state"?"state_not":"state";delete N[D],we()})),ve("State",Z)}else if(N.condition==="numeric_state"){let se;customElements.get("ha-entity-picker")?(se=document.createElement("ha-entity-picker"),se.hass=this.hass,se.setAttribute("label","Select entity"),se.removeAttribute("hide-clear-icon"),se.value=N.entity||"",se.addEventListener("value-changed",Q=>{Q.stopPropagation(),N.entity=Q.detail.value||"",we()})):(se=document.createElement("input"),se.value=N.entity||"",se.addEventListener("input",()=>{N.entity=se.value.trim(),we()}),Object.assign(se.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})),ve("Entity",se);let ne;customElements.get("ha-textfield")?(ne=document.createElement("ha-textfield"),ne.setAttribute("type","number"),ne.value=N.above!=null?N.above:"",ne.addEventListener("input",Q=>{Q.stopPropagation();let W=ne.value;W===""||isNaN(Number(W))?delete N.above:N.above=Number(W),we()})):(ne=document.createElement("input"),ne.type="number",ne.value=N.above!=null?N.above:"",Object.assign(ne.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),ne.addEventListener("input",()=>{let Q=ne.value;Q===""||isNaN(Number(Q))?delete N.above:N.above=Number(Q),we()})),ve("Above",ne);let Z;customElements.get("ha-textfield")?(Z=document.createElement("ha-textfield"),Z.setAttribute("type","number"),Z.value=N.below!=null?N.below:"",Z.addEventListener("input",Q=>{Q.stopPropagation();let W=Z.value;W===""||isNaN(Number(W))?delete N.below:N.below=Number(W),we()})):(Z=document.createElement("input"),Z.type="number",Z.value=N.below!=null?N.below:"",Object.assign(Z.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),Z.addEventListener("input",()=>{let Q=Z.value;Q===""||isNaN(Number(Q))?delete N.below:N.below=Number(Q),we()})),ve("Below",Z)}else if(N.condition==="screen"){let se=document.createElement("select"),ne=[{label:"Custom",value:""},{label:"Mobile (max-width: 599px)",value:"(max-width: 599px)"},{label:"Tablet (600px - 991px)",value:"(min-width: 600px) and (max-width: 991px)"},{label:"Desktop (min-width: 992px)",value:"(min-width: 992px)"}];if(ne.forEach(Z=>{let Q=document.createElement("option");Q.value=Z.value,Q.textContent=Z.label,se.appendChild(Q)}),se.value=(Ee=(Re=ne.find(Z=>Z.value===(N.media_query||"")))==null?void 0:Re.value)!=null?Ee:"",se.addEventListener("change",()=>{N.media_query=se.value,we()}),ve("Screen size",se),se.value===""){let Z=document.createElement("input");Z.placeholder="e.g. (min-width: 1280px)",Z.value=N.media_query||"",Z.addEventListener("input",()=>{N.media_query=Z.value,we()}),ve("Custom query",Z)}}else if(N.condition==="user"){let se;customElements.get("ha-user-picker")?(se=document.createElement("ha-user-picker"),se.hass=this.hass,se.value=Array.isArray(N.users)?N.users:[],se.addEventListener("value-changed",ne=>{N.users=Array.isArray(ne.detail.value)?ne.detail.value:[ne.detail.value],we()})):(se=document.createElement("input"),se.value=Array.isArray(N.users)?N.users.join(","):"",se.addEventListener("input",()=>{N.users=se.value.split(",").map(ne=>ne.trim()).filter(Boolean),we()})),ve("Users",se)}})(),Ne.appendChild(Pe),H.appendChild(Ne)});let Oe=document.createElement("button");Oe.className="btn",Oe.innerHTML='<ha-icon icon="mdi:plus"></ha-icon><span style="margin-left:6px">Add condition</span>',Object.assign(Oe.style,{marginTop:"8px"}),Oe.addEventListener("click",()=>{Y.push({condition:"state",entity:"",state:""}),oe.visibility=Y,de(),we()}),H.appendChild(Oe)};de()},De=q=>{if(!H)return;let Y=Array.isArray(q==null?void 0:q.visibility)?q.visibility:[],ue=null,we=async()=>{if(ue)return ue;try{if(this.hass&&typeof this.hass.callWS=="function")try{let ee=await this.hass.callWS({type:"config/auth/list"});if(Array.isArray(ee))return ue=ee,ee}catch{}if(this.hass&&typeof this.hass.callApi=="function")try{let ee=await this.hass.callApi("get","users");if(Array.isArray(ee))return ue=ee,ee}catch{}let N=[];if(this.hass&&this.hass.users&&Array.isArray(this.hass.users)&&N.push(...this.hass.users),this.hass&&this.hass.userData&&Array.isArray(this.hass.userData.users)&&N.push(...this.hass.userData.users),this.hass&&this.hass.authorizedUsers&&Array.isArray(this.hass.authorizedUsers)&&N.push(...this.hass.authorizedUsers),N.length){let ee=new Map;N.forEach(j=>{let Ze=j.id||j.user_id||j.uid||j.name||"";ee.has(Ze)||ee.set(Ze,j)});let Ne=Array.from(ee.values());return ue=Ne,Ne}}catch{}return ue=[],[]},de=()=>{var N;Y=Y.filter(ee=>ee&&typeof ee=="object"&&ee.condition),oe.visibility=Y;try{Se==null||Se.setValue(oe)}catch{}try{(N=Me==null?void 0:Me.setConfig)==null||N.call(Me,oe)}catch{}yt(oe)},Oe=()=>{H.innerHTML="";let N=document.createElement("div");N.style.opacity=".75",N.style.fontSize=".85rem",N.style.marginBottom="12px",N.textContent="The card will be shown when ALL conditions below are fulfilled. If no conditions are set, the card will always be shown.",H.appendChild(N);let ee=(j,Ze)=>{j.forEach((We,nt)=>{Ne(We,j,nt,Ze)});let Ge=document.createElement("div");Ge.style.marginTop="8px";let rt=document.createElement("button");rt.className="btn",rt.innerHTML='<ha-icon icon="mdi:plus"></ha-icon><span style="margin-left:6px">Add condition</span>',Object.assign(rt.style,{display:"flex",alignItems:"center",gap:"6px",padding:"6px 12px",border:"none",borderRadius:"20px",background:"var(--primary-color)",color:"var(--text-primary-color, #fff)",cursor:"pointer",fontWeight:"500"}),rt.addEventListener("click",We=>{We.stopPropagation();let nt=Ge.querySelector(".add-menu");if(nt){nt.remove();return}let tt=document.createElement("div");tt.className="add-menu",Object.assign(tt.style,{position:"relative",marginTop:"4px",border:"1px solid var(--divider-color)",borderRadius:"8px",background:"var(--card-background-color, var(--secondary-background-color))",boxShadow:"0 2px 4px rgba(0,0,0,0.2)"}),[{type:"numeric_state",label:"Entity numeric state",icon:"mdi:numeric"},{type:"state",label:"Entity state",icon:"mdi:state-machine"},{type:"screen",label:"Screen",icon:"mdi:monitor"},{type:"user",label:"User",icon:"mdi:account"},{type:"and",label:"And",icon:"mdi:logic-and"},{type:"or",label:"Or",icon:"mdi:logic-or"}].forEach(Xe=>{let Je=document.createElement("div");Je.style.display="flex",Je.style.alignItems="center",Je.style.gap="8px",Je.style.padding="6px 12px",Je.style.cursor="pointer",Je.addEventListener("mouseenter",()=>Je.style.background="var(--hover-color, #444)"),Je.addEventListener("mouseleave",()=>Je.style.background=""),Je.addEventListener("click",()=>{tt.remove();let Ae;Xe.type==="and"||Xe.type==="or"?Ae={condition:Xe.type,conditions:[]}:Xe.type==="state"?Ae={condition:"state",entity:"",state:""}:Xe.type==="numeric_state"?Ae={condition:"numeric_state",entity:""}:Xe.type==="screen"?Ae={condition:"screen",media_query:""}:Xe.type==="user"&&(Ae={condition:"user",users:[]}),j.push(Ae),wt.set(Ae,!0),de(),Oe()});let Pe=document.createElement("ha-icon");Pe.setAttribute("icon",Xe.icon),Je.appendChild(Pe);let ve=document.createElement("span");ve.textContent=Xe.label,Je.appendChild(ve),tt.appendChild(Je)}),Ge.appendChild(tt)}),Ge.appendChild(rt),Ze.appendChild(Ge)},Ne=(j,Ze,Ge,rt)=>{let We=j.condition||"state",nt=wt.get(j);nt===void 0&&(nt=Y.length===1);let tt=document.createElement("div");Object.assign(tt.style,{display:"flex",flexDirection:"column",border:"1px solid var(--divider-color)",borderLeft:"3px solid var(--primary-color)",borderRadius:"12px",padding:"16px",marginBottom:"20px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",boxShadow:"var(--ha-card-box-shadow, 0 2px 6px rgba(0, 0, 0, 0.15))"});let it=document.createElement("div");it.style.display="flex",it.style.alignItems="center",it.style.justifyContent="space-between",it.style.marginBottom="8px",it.style.borderBottom="1px solid var(--divider-color)",it.style.paddingBottom="4px",it.style.position="relative";let Xe=document.createElement("div");Xe.style.display="flex",Xe.style.alignItems="center",Xe.style.gap="6px";let Je=document.createElement("button");Je.innerHTML=`<ha-icon icon="${nt?"mdi:chevron-down":"mdi:chevron-right"}"></ha-icon>`,Object.assign(Je.style,{border:"none",background:"transparent",cursor:"pointer",padding:"4px",display:"inline-flex",alignItems:"center"}),Je.addEventListener("click",Ee=>{Ee.stopPropagation(),wt.set(j,!nt),Oe()}),Xe.appendChild(Je);let Pe=document.createElement("ha-icon"),ve="mdi:filter";We==="numeric_state"?ve="mdi:numeric":We==="screen"?ve="mdi:monitor":We==="user"?ve="mdi:account":We==="state"?ve="mdi:state-machine":We==="and"?ve="mdi:logic-and":We==="or"&&(ve="mdi:logic-or"),Pe.setAttribute("icon",ve),Xe.appendChild(Pe);let Ae=document.createElement("span");Ae.style.fontWeight="600",Ae.style.fontSize="0.95rem",Ae.style.textTransform="capitalize",Ae.textContent=We==="numeric_state"?"Entity numeric state":We==="state"?"Entity state":We==="screen"?"Screen":We==="user"?"User":We==="and"?"And":"Or",Xe.appendChild(Ae),it.appendChild(Xe);let Re=document.createElement("button");if(Re.setAttribute("title","Remove condition"),Re.innerHTML='<ha-icon icon="mdi:trash-can-outline"></ha-icon>',Object.assign(Re.style,{border:"none",background:"transparent",cursor:"pointer",padding:"4px",display:"inline-flex",alignItems:"center"}),Re.style.position="relative",Re.style.zIndex="1000",Re.addEventListener("click",Ee=>{Ee.preventDefault(),Ee.stopPropagation();let se=Ze.indexOf(j);se>-1&&Ze.splice(se,1),de(),Oe()}),it.appendChild(Re),tt.appendChild(it),We!=="and"&&We!=="or"){if(nt){let Ee=document.createElement("div");Object.assign(Ee.style,{display:"flex",flexDirection:"column",gap:"14px",alignItems:"stretch"});let se=(ne,Z)=>{let Q=document.createElement("div");Q.style.display="flex",Q.style.flexDirection="column",Q.style.gap="4px";let W=document.createElement("span");W.textContent=ne,W.style.fontSize=".75rem",Q.appendChild(W),Q.appendChild(Z),Ee.appendChild(Q);let D=(Z.tagName||"").toLowerCase();(D==="input"||D==="select")&&Object.assign(Z.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})};if(j.condition==="state"){let ne=document.createElement("ha-entity-picker");ne.value=j.entity||"",ne.hass=this.hass,ne.setAttribute("label","Select entity"),ne.addEventListener("value-changed",W=>{j.entity=W.detail.value||"",de()}),customElements.get("ha-entity-picker")||customElements.whenDefined("ha-entity-picker").then(()=>{Oe()}).catch(()=>{}),se("Entity",ne);let Z;if(customElements.get("ha-select")){Z=document.createElement("ha-select");let W=document.createElement("mwc-list-item");W.setAttribute("value","state"),W.textContent="State is equal to";let D=document.createElement("mwc-list-item");D.setAttribute("value","state_not"),D.textContent="State is not equal to",Z.appendChild(W),Z.appendChild(D),Z.value=j.state_not!=null?"state_not":"state",Z.addEventListener("selected",X=>{X.stopPropagation();let ie=j.state_not!=null?j.state_not:j.state;Z.value==="state_not"?(j.state_not=ie,delete j.state):(j.state=ie,delete j.state_not),de()})}else Z=document.createElement("select"),Z.innerHTML='<option value="state">State is equal to</option><option value="state_not">State is not equal to</option>',Z.value=j.state_not!=null?"state_not":"state",Z.addEventListener("change",W=>{W.stopPropagation();let D=j.state_not!=null?j.state_not:j.state;Z.value==="state_not"?(j.state_not=D,delete j.state):(j.state=D,delete j.state_not),de()}),Object.assign(Z.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"});se("Match type",Z);let Q;customElements.get("ha-textfield")?(Q=document.createElement("ha-textfield"),Q.value=(j.state_not!=null?j.state_not:j.state)||"",Q.setAttribute("label",""),Q.addEventListener("input",W=>{W.stopPropagation();let D=Z.value;j[D]=Q.value;let X=D==="state"?"state_not":"state";delete j[X],de()})):(Q=document.createElement("input"),Q.value=(j.state_not!=null?j.state_not:j.state)||"",Object.assign(Q.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),Q.addEventListener("input",W=>{W.stopPropagation();let D=Z.value;j[D]=Q.value;let X=D==="state"?"state_not":"state";delete j[X],de()})),se("State",Q)}else if(j.condition==="numeric_state"){let ne=document.createElement("ha-entity-picker");ne.value=j.entity||"",ne.hass=this.hass,ne.setAttribute("label","Select entity"),ne.removeAttribute("hide-clear-icon"),ne.addEventListener("value-changed",W=>{j.entity=W.detail.value||"",de()}),customElements.get("ha-entity-picker")||customElements.whenDefined("ha-entity-picker").then(()=>{Oe()}).catch(()=>{}),se("Entity",ne);let Z;customElements.get("ha-textfield")?(Z=document.createElement("ha-textfield"),Z.setAttribute("type","number"),Z.value=j.above!=null?j.above:"",Z.addEventListener("input",W=>{W.stopPropagation();let D=Z.value;D===""||isNaN(Number(D))?delete j.above:j.above=Number(D),de()})):(Z=document.createElement("input"),Z.type="number",Z.value=j.above!=null?j.above:"",Object.assign(Z.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),Z.addEventListener("input",()=>{let W=Z.value;W===""||isNaN(Number(W))?delete j.above:j.above=Number(W),de()})),se("Above",Z);let Q;customElements.get("ha-textfield")?(Q=document.createElement("ha-textfield"),Q.setAttribute("type","number"),Q.value=j.below!=null?j.below:"",Q.addEventListener("input",W=>{W.stopPropagation();let D=Q.value;D===""||isNaN(Number(D))?delete j.below:j.below=Number(D),de()})):(Q=document.createElement("input"),Q.type="number",Q.value=j.below!=null?j.below:"",Object.assign(Q.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),Q.addEventListener("input",()=>{let W=Q.value;W===""||isNaN(Number(W))?delete j.below:j.below=Number(W),de()})),se("Below",Q)}else if(j.condition==="screen"){let ne=[{label:"Mobile",query:"(max-width: 599px)"},{label:"Tablet (min: 768px)",query:"(min-width: 768px)"},{label:"Desktop (min: 1024px)",query:"(min-width: 1024px)"},{label:"Wide (min: 1280px)",query:"(min-width: 1280px)"}];Array.isArray(j.media_query_list)||(j.media_query_list=[]);let Z=document.createElement("div");Z.style.display="flex",Z.style.flexDirection="column",Z.style.gap="4px",ne.forEach(Q=>{let W=document.createElement("label");W.style.display="flex",W.style.alignItems="center",W.style.gap="6px";let D=document.createElement("input");D.type="checkbox",D.checked=j.media_query_list.includes(Q.query),D.addEventListener("change",()=>{D.checked?j.media_query_list.push(Q.query):j.media_query_list=j.media_query_list.filter(ie=>ie!==Q.query),j.media_query=j.media_query_list.join(","),de()});let X=document.createElement("span");X.textContent=Q.label,W.appendChild(D),W.appendChild(X),Z.appendChild(W)}),se("Screen sizes",Z)}else if(j.condition==="user"){let ne;if(customElements.get("ha-user-picker"))ne=document.createElement("ha-user-picker"),ne.hass=this.hass,ne.setAttribute("label","Select user"),ne.value=Array.isArray(j.users)?j.users:[],ne.addEventListener("value-changed",Z=>{let Q=Z.detail.value;j.users=Array.isArray(Q)?Q:[Q],de()});else{ne=document.createElement("div"),ne.style.display="flex",ne.style.flexDirection="column",ne.style.gap="4px";let Z=document.createElement("span");Z.style.opacity="0.7",Z.style.fontSize=".85rem",Z.textContent="Loading users\u2026",ne.appendChild(Z);let Q=Array.isArray(j.users)?j.users:[];we().then(W=>{if(ne.innerHTML="",Array.isArray(W)&&W.length)W.forEach(D=>{let X=D.id||D.user_id||D.uid||D.name||"",ie=D.name||X,he=document.createElement("label");he.style.display="flex",he.style.alignItems="center",he.style.gap="6px",he.style.padding="4px 0";let ye=document.createElement("input");ye.type="checkbox",ye.checked=Q.includes(X)||Q.includes(ie),ye.addEventListener("change",()=>{let ge=Array.isArray(j.users)?j.users.slice():[];ye.checked?ge.includes(X)||ge.push(X):ge=ge.filter(He=>He!==X&&He!==ie),j.users=ge,de()});let me=document.createElement("span");me.textContent=ie,he.appendChild(ye),he.appendChild(me),ne.appendChild(he)});else{let D=document.createElement("input");D.value=Array.isArray(j.users)?j.users.join(","):"",Object.assign(D.style,{padding:"6px 10px",borderRadius:"6px",border:"1px solid var(--divider-color)",background:"var(--card-background-color, var(--secondary-background-color))",color:"var(--primary-text-color, inherit)"});let X=()=>{j.users=D.value.split(",").map(ie=>ie.trim()).filter(Boolean),de()};D.addEventListener("change",X),D.addEventListener("blur",X),ne.appendChild(D)}})}se("Users",ne)}tt.appendChild(Ee)}}else if(nt){Array.isArray(j.conditions)||(j.conditions=[]);let Ee=document.createElement("div");Ee.style.marginLeft="16px",ee(j.conditions,Ee),tt.appendChild(Ee)}rt.appendChild(tt)};ee(Y,H)};Oe()},yt=q=>{if(((q==null?void 0:q.type)||"")==="custom_card"){lt=JSON.stringify(q||{}),x.innerHTML='<div style="opacity:.6;font-size:.9rem;padding:8px">Preview not available for the custom card placeholder. Use the YAML editor.</div>',$.hidden=!0;return}let Y=JSON.stringify(q||{});Y!==lt&&(lt=Y,Bt&&clearTimeout(Bt),Bt=setTimeout(async()=>{let ue=++mt;$.hidden=!1,x.innerHTML="",await Mr();try{let we=await this._helpersPromise||await window.loadCardHelpers();if(ue!==mt)return;let de=we.createCardElement(q);if(de.hass=this.hass,ue!==mt)return;x.appendChild(de)}catch{}finally{ue===mt&&($.hidden=!0)}},150))},Ot=async q=>{var we;let Y=++mt;S.hidden=!1,A.innerHTML="",await lc();let ue=q.type||Ye;if(gt=await this._getEditorElementForType(ue,q),ue==="custom_card"){let de=document.createElement("div");return de.style.opacity=".7",de.style.fontSize=".9rem",de.textContent="Custom card placeholder: use the YAML editor to paste the card type and options.",A.appendChild(de),Me=null,ot!=="yaml"&&ae("yaml"),re(!0),S.hidden=!0,!1}if(!gt){let de=document.createElement("div");return de.style.opacity=".7",de.style.fontSize=".9rem",de.textContent="This card does not support a visual editor. Please use the YAML tab to configure it.",Y===mt&&(A.appendChild(de),S.hidden=!0),Me=null,re(!0),ot!=="visual"&&ae("yaml"),!1}try{gt.hass=this.hass,gt.isConnected||A.appendChild(gt),await Promise.resolve();try{gt.setConfig(q)}catch{}try{let Oe=await this._helpersPromise||await window.loadCardHelpers(),N=Oe.getCardElementClass?await Oe.getCardElementClass(q.type||Ye):null;if(N!=null&&N.getStubConfig){let ee=Object.keys(((we=this.hass)==null?void 0:we.states)||{}),Ne=Ze=>ee.filter(Ge=>Ge.startsWith(Ze+".")),j=await N.getStubConfig(this.hass,ee,Ne);j&&(q=this._shapeBySchema(q.type||Ye,{...j}))}}catch{}await Promise.resolve();try{gt.setConfig(q)}catch{}Me&&this.__onEditorChange&&(Me.removeEventListener("config-changed",this.__onEditorChange),Me.removeEventListener("value-changed",this.__onEditorChange));let de=async Oe=>{var Ne,j,Ze;let N=(Ze=(Ne=Oe.detail)==null?void 0:Ne.config)!=null?Ze:(j=Oe.detail)==null?void 0:j.value;if(!N)return;let ee=N.type||Ye;Ye=ee,oe=this._shapeBySchema(ee,N),F(""),re(!0),Tt(Ye,oe),yt(oe),Se==null||Se.setValue(oe)};return this.__onEditorChange=de,gt.addEventListener("config-changed",de),gt.addEventListener("value-changed",de),Me=gt,ot!=="yaml"&&ae("visual"),re(!0),!0}finally{Y===mt&&(S.hidden=!0)}},ti=async q=>{Se=await this._mountYamlEditor(L,q,async Y=>{var ue,we;try{let de=(Y==null?void 0:Y.type)||Ye,Oe=this._shapeBySchema(de,Y||{}),N=de!==Ye;if(Ye=de,oe=Oe,k.hidden=!0,k.textContent="",re(!0),N){if(Tt(Ye,oe),Me){try{(ue=Me.setConfig)==null||ue.call(Me,oe)}catch{}ot!=="yaml"&&ae("visual")}try{De(oe)}catch{}}else{try{(we=Me==null?void 0:Me.setConfig)==null||we.call(Me,oe)}catch{}yt(oe);try{De(oe)}catch{}}}catch(de){k.hidden=!1,k.textContent=`Invalid config: ${String((de==null?void 0:de.message)||de)}`,re(!1)}},Y=>{k.hidden=!1,k.textContent=`Invalid YAML: ${String((Y==null?void 0:Y.message)||Y)}`,re(!1)})},zt=async q=>{if(this.__stubCache.has(q))return{...this.__stubCache.get(q)};let Y=await this._getStubConfigForType(q);return this.__stubCache.set(q,{...Y}),{...Y}},Rt=async q=>{k.hidden=!0,k.textContent="",F(""),Ye=q;try{typeof dt=="function"&&dt(q)}catch{}let Y=e==="edit"&&n&&n.type===q?{...n}:await zt(q);oe=this._shapeBySchema(q,Y),Me=null,Tt(q,oe),await ti(oe),await Mr(),yt(oe);try{De(oe)}catch{}try{let ue=await Ot(oe);ae(ue?"visual":"yaml")}catch{ae("yaml")}re(!0)},pt=async()=>{if(!oe)return;let q=this._shapeBySchema(Ye,oe);e==="edit"&&typeof o=="function"?await o(q):(await this._addPickedCardToLayout(q),this._pushRecent((q||{}).type)),c()};v.addEventListener("click",c),y.addEventListener("click",c),u.addEventListener("click",pt),f.addEventListener("click",pt),s.addEventListener("keydown",q=>{q.key==="Escape"&&c(),q.key==="Enter"&&!u.disabled&&pt()});let Dt=null;g.addEventListener("input",()=>{Dt&&clearTimeout(Dt),Dt=setTimeout(st,120)}),st(),await Rt((()=>{var ue;return(((ue=this._getRecent)==null?void 0:ue.call(this))||[]).find(Boolean)||"entities"})()),re(!0),e==="edit"&&n&&(await Rt(n.type||"entities"),re(!0))}async _getStubConfigForType(e){var v;let n=await this._helpersPromise||await window.loadCardHelpers(),o=null;if(e==="custom_card")return null;try{n.getCardElementClass&&(o=await n.getCardElementClass(e))}catch{}let c=Object.keys(((v=this.hass)==null?void 0:v.states)||{}),s=y=>c.filter(g=>g.startsWith(y+".")),d={type:e};if(o!=null&&o.getStubConfig)try{let y=await o.getStubConfig(this.hass,c,s);if(e!=="entity")return y;y&&typeof y=="object"&&(d={...d,...y})}catch{}let u=c[0],f=s("sensor")[0]||u;if(["entity","sensor","button","gauge","tile","light","thermostat","media-control","alarm-panel","picture-entity","weather-forecast","map"].includes(e)){let y={sensor:f,gauge:s("sensor").find(this._isNumericEntity.bind(this))||f,"media-control":s("media_player")[0]||u,light:s("light")[0]||u,thermostat:s("climate")[0]||u,"alarm-panel":s("alarm_control_panel")[0]||u,"weather-forecast":s("weather")[0]||u,map:s("device_tracker")[0]||s("person")[0]||u}[e]||f||u;["entity","sensor","button","gauge","tile","light","thermostat","media-control","alarm-panel","picture-entity"].includes(e)?d.entity=y:e==="weather-forecast"?(d.entity=y,d.show_current=!0,d.show_forecast=!0,d.forecast_type="daily"):e==="map"&&(d.entities=[y].filter(Boolean),d.theme_mode="auto")}if(["entities","glance","picture-glance","history-graph","statistics-graph"].includes(e)){let y=g=>(g!=null&&g.length?c.filter(x=>g.includes(x.split(".")[0])):c).slice(0,3);e==="statistics-graph"?d.entities=y(["sensor","number","input_number"]):d.entities=y()}if(e==="markdown"&&(d.content="Markdown card"),e==="sensor"&&(d.graph="line"),e==="button"&&(d.show_name=!0,d.show_icon=!0),e==="tile"&&(d.features_position="bottom",d.vertical=!1),e==="picture-glance"&&(d.title=d.title||"Glance",d.image=d.image||"https://demo.home-assistant.io/stub_config/kitchen.png"),e==="picture-entity"&&(d.image=d.image||"https://demo.home-assistant.io/stub_config/bedroom.png"),e==="iframe"&&(d.url=d.url||"https://www.home-assistant.io",d.aspect_ratio=d.aspect_ratio||"50%"),e==="alarm-panel"&&(d.states=d.states||["arm_home","arm_away"]),e==="area")try{let y=this.hass&&this.hass.areas?Object.values(this.hass.areas):[];y.length?d.area=y[0].area_id||y[0].name||y[0].id:d.area=u?u.split(".")[0]:"default_area",d.display_type="picture",d.alert_classes=d.alert_classes||["moisture","motion"],d.sensor_classes=d.sensor_classes||["temperature","humidity"],d.features_position="bottom"}catch{}return d}_getNextAvailablePosition(){let e=Array.from(this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)")),n=new Set,o=this.gridSize;e.forEach(d=>{let u=parseFloat(d.getAttribute("data-x"))||0,f=parseFloat(d.getAttribute("data-y"))||0,v=parseFloat(getComputedStyle(d).width)||100,y=parseFloat(getComputedStyle(d).height)||100,g=Math.floor(u/o),x=Math.floor(f/o),A=Math.floor((u+v)/o),S=Math.floor((f+y)/o);for(let T=g;T<A;T++)for(let L=x;L<S;L++)n.add(`${T}-${L}`)});let c=0,s=0;for(;n.has(`${c}-${s}`);)c+=6,c>60&&(c=0,s+=6);return{x:c*o,y:s*o}}async _addPickedCardToLayout(e){this._hideEmptyPlaceholder();let n=await this._createCard(e),o=this._makeWrapper(n),c=this._getNextAvailablePosition();this._setCardPosition(o,c.x,c.y),o.style.width=`${14*this.gridSize}px`,o.style.height=`${10*this.gridSize}px`,o.style.zIndex=String(this._highestZ()+1),this.cardContainer.appendChild(o);try{this._rebuildOnce(o.firstElementChild)}catch{}this._initCardInteract(o),this._resizeContainer(),this._queueSave("add"),this._toast("Card added to layout."),this._syncEmptyStateUI();try{this._applyVisibility_()}catch{}}_toggleSelection(e,n=null){let o=n==null?!this._selection.has(e):!!n;o?this._selection.add(e):this._selection.delete(e),e.classList.toggle("selected",o)}_clearSelection(){for(let e of this._selection)e.classList.remove("selected");this._selection.clear()}_copySelection(){var e,n,o;try{let c=this._selection?Array.from(this._selection):[];if(!c.length){(e=this._toast)==null||e.call(this,"Nothing selected to copy.");return}let s=1/0,d=1/0,u=[];for(let f of c){if(f.dataset.placeholder)continue;let v=parseFloat(f.getAttribute("data-x"))||0,y=parseFloat(f.getAttribute("data-y"))||0;v<s&&(s=v),y<d&&(d=y)}for(let f of c){if(f.dataset.placeholder)continue;let v=this._extractCardConfig(f.firstElementChild)||{},y=parseFloat(f.getAttribute("data-x"))||0,g=parseFloat(f.getAttribute("data-y"))||0,x=f.style.width||`${f.getBoundingClientRect().width}px`,A=f.style.height||`${f.getBoundingClientRect().height}px`;u.push({cfg:v,dx:y-s,dy:g-d,width:x,height:A})}window.__DDC_CLIPBOARD__={items:u},(n=this._toast)==null||n.call(this,`Copied ${u.length} card${u.length===1?"":"s"}.`)}catch(c){console.warn("[drag-and-drop-card] Copy failed",c),(o=this._toast)==null||o.call(this,"Copy failed.")}}async _pasteClipboard(){var e,n,o,c;try{let s=window.__DDC_CLIPBOARD__;if(!s||!Array.isArray(s.items)||!s.items.length){(e=this._toast)==null||e.call(this,"Clipboard is empty.");return}let d=s.items,u=1,f;do{let g=this.gridSize*u,x=this.gridSize*u;f=d.map(A=>{let S=parseFloat(A.width)||0,T=parseFloat(A.height)||0;return{x:g+(A.dx||0),y:x+(A.dy||0),w:S,h:T}}),u+=1}while(this._anyCollisionFor(f,new Set));let v=this.gridSize*(u-1),y=this.gridSize*(u-1);for(let g of d){let x=g.cfg||{},A=await this._createCard(x),S=this._makeWrapper(A);S.style.width=g.width,S.style.height=g.height;let T=v+(g.dx||0),L=y+(g.dy||0);this._setCardPosition(S,T,L),S.style.zIndex=String(this._highestZ()+1);try{let k=this._normalizeTabId(this.activeTab||this.defaultTab);k&&(S.dataset.tabId=k)}catch{}this.cardContainer.appendChild(S);try{this._rebuildOnce(S.firstElementChild)}catch{}this._initCardInteract(S)}this._resizeContainer(),this._applyActiveTab(),(n=this._queueSave)==null||n.call(this,"paste"),(o=this._toast)==null||o.call(this,`Pasted ${d.length} card${d.length===1?"":"s"}.`)}catch(s){console.warn("[drag-and-drop-card] Paste failed",s),(c=this._toast)==null||c.call(this,"Paste failed.")}}_installSelectionMarquee(){let e=this.cardContainer,n=0,o=0,c=null,s=!1,d=g=>{let x=e.getBoundingClientRect(),A="touches"in g&&g.touches[0]?g.touches[0].clientX:g.clientX,S="touches"in g&&g.touches[0]?g.touches[0].clientY:g.clientY,T=this.__pointerScaleX||1,L=this.__pointerScaleY||1;return{x:(A-x.left)/T,y:(S-x.top)/L}},u=(g,x)=>{let A=Math.min(g,n),S=Math.max(g,n),T=Math.min(x,o),L=Math.max(x,o);c.style.left=`${A}px`,c.style.top=`${T}px`,c.style.width=`${S-A}px`,c.style.height=`${L-T}px`;let k=c.getBoundingClientRect(),O=e.querySelectorAll(".card-wrapper:not(.ddc-placeholder)");this._clearSelection(),O.forEach(M=>{let _=M.getBoundingClientRect();!(_.right<k.left||_.left>k.right||_.bottom<k.top||_.top>k.bottom)&&this._toggleSelection(M,!0)})},f=g=>{if(!this.editMode||g.target.closest(".card-wrapper"))return;s=!0;let x=d(g);n=x.x,o=x.y,c=document.createElement("div"),c.className="marquee",c.style.left=`${n}px`,c.style.top=`${o}px`,e.appendChild(c),g.preventDefault()},v=g=>{!s||!c||u(d(g).x,d(g).y)},y=()=>{s&&(s=!1,c&&c.remove(),c=null)};e.addEventListener("mousedown",f),window.addEventListener("mousemove",v),window.addEventListener("mouseup",y),e.addEventListener("touchstart",g=>{this.editMode&&(g.target.closest(".card-wrapper")||f(g))},{passive:!1}),window.addEventListener("touchmove",g=>{v(g)},{passive:!0}),window.addEventListener("touchend",y),window.addEventListener("touchcancel",y)}async _openDiagnostics(){var u,f;let e=document.createElement("div");e.className="modal";let n=this.storageKey||"(none)",o=this._backendOK&&!!this.storageKey,c=v=>v.slice(-200).map(y=>`<div style="font-family:monospace;font-size:.85rem;line-height:1.3">
        <span style="opacity:.6">${y.t}</span>
        <b style="margin-left:6px;color:#03a9f4">[${y.kind}]</b>
        <span style="margin-left:6px">${this._safe(y.msg)}</span>
        ${y.extra?`<pre style="margin:4px 0 0 0;white-space:pre-wrap;background:var(--card-background-color);border:1px solid var(--divider-color);border-radius:8px;padding:6px;max-height:160px;overflow:auto">${this._safe(JSON.stringify(y.extra,null,2))}</pre>`:""}
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
      </div>`;let s=()=>e.remove();e.querySelector("#closeDiag").addEventListener("click",s),this.shadowRoot.appendChild(e);let d=()=>{let v=e.querySelector("#logArea"),y=g=>g.slice(-200).map(x=>`<div style="font-family:monospace;font-size:.85rem;line-height:1.3">
          <span style="opacity:.6">${x.t}</span>
          <b style="margin-left:6px;color:#03a9f4">[${x.kind}]</b>
          <span style="margin-left:6px">${this._safe(x.msg)}</span>
          ${x.extra?`<pre style="margin:4px 0 0 0;white-space:pre-wrap;background:var(--card-background-color);border:1px solid var(--divider-color);border-radius:8px;padding:6px;max-height:160px;overflow:auto">${this._safe(JSON.stringify(x.extra,null,2))}</pre>`:""}
        </div>`).join("");v.innerHTML=y(this._dbgDump()),v.scrollTop=v.scrollHeight};e.querySelector("#refreshKeys").addEventListener("click",async()=>{try{this._dbgPush("probe","Manual refresh"),await this._probeBackend()}finally{d()}}),e.querySelector("#forceSave").addEventListener("click",async()=>{await this._saveLayout(!1),d()}),e.querySelector("#exportJson").addEventListener("click",()=>{let y=Array.from(this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)")).map(S=>{let T=parseFloat(S.getAttribute("data-x"))||0,L=parseFloat(S.getAttribute("data-y"))||0,k=parseFloat(S.style.width)||S.getBoundingClientRect().width,O=parseFloat(S.style.height)||S.getBoundingClientRect().height,M=parseInt(S.style.zIndex||"1",10),_=this._extractCardConfig(S.firstElementChild),P=S.dataset.tabId||this.defaultTab;return{card:_,position:{x:T,y:L},size:{width:k,height:O},z:M,tabId:P}}),g={version:2,options:this._exportableOptions(),cards:y},x=new Blob([JSON.stringify(g,null,2)],{type:"application/json"}),A=document.createElement("a");A.href=URL.createObjectURL(x),A.download=`ddc_${this.storageKey||"layout"}.json`,A.click(),URL.revokeObjectURL(A.href)}),e.querySelector("#importJson").addEventListener("click",async()=>{let v=document.createElement("input");v.type="file",v.accept="application/json",v.onchange=async()=>{var A,S,T,L,k,O,M,_,P,R,H,U,$;let y=(A=v.files)==null?void 0:A[0];if(!y)return;let g=await y.text();try{let re=JSON.parse(g);if(this._dbgPush("import","Loaded file",{bytes:g.length}),this.cardContainer.innerHTML="",(S=re.cards)!=null&&S.length)for(let F of re.cards)if(!(F!=null&&F.card)||typeof F.card=="object"&&Object.keys(F.card).length===0){let V=this._makePlaceholderAt(((T=F.position)==null?void 0:T.x)||0,((L=F.position)==null?void 0:L.y)||0,((k=F.size)==null?void 0:k.width)||200,((O=F.size)==null?void 0:O.height)||200);this.cardContainer.appendChild(V)}else{let V=await this._createCard(F.card),K=this._makeWrapper(V);this._setCardPosition(K,((M=F.position)==null?void 0:M.x)||0,((_=F.position)==null?void 0:_.y)||0),K.dataset.tabId=this._normalizeTabId(F.tabId||F.tab_id||this.defaultTab),this._setCardPosition(K,((P=F.position)==null?void 0:P.x)||0,((R=F.position)==null?void 0:R.y)||0),K.style.width=`${((H=F.size)==null?void 0:H.width)||140}px`,K.style.height=`${((U=F.size)==null?void 0:U.height)||100}px`,this.cardContainer.appendChild(K);try{this._rebuildOnce(K.firstElementChild)}catch{}this._initCardInteract(K)}else this._showEmptyPlaceholder(),($=this._applyAutoScale)==null||$.call(this);this._resizeContainer(),await this._saveLayout(!1)}catch(re){this._dbgPush("import","Parse failed",{error:String(re)})}let x=new Event("ddc-logrefresh");window.dispatchEvent(x)},v.click()}),e.querySelector("#testRoundtrip").addEventListener("click",async()=>{if(!this._backendOK)return this._dbgPush("test","Backend not reachable, aborting"),d();let v=(this.storageKey||"ddc_test")+"_selftest",y={t:Date.now(),msg:"roundtrip"};try{await this._saveLayoutToBackend(v,y);let g=await this._loadLayoutFromBackend(v);this._dbgPush("test","Round-trip result",{wrote:y,read:g})}catch(g){this._dbgPush("test","Round-trip failed",{error:String(g)})}d()}),d()}_openDashboardSettings(){var Ze,Ge,rt,We,nt,tt,it,Xe,Je,Pe,ve,Ae,Re,Ee,se,ne,Z,Q,W;let e=document.createElement("div");e.className="modal",this._ensureSettingsStyles_(),e.innerHTML=`
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

`;let n=this.shadowRoot.querySelector(".modal");if(n){try{n.remove()}catch{}this.__settingsModal===n&&(this.__settingsModal=null)}if(this.__settingsModal){try{this.__settingsModal.remove()}catch{}this.__settingsModal=null}this.__settingsModal=e,this.shadowRoot.appendChild(e);let o=e.querySelector("#ddc-setting-autoResize"),c=e.querySelector("#ddc-setting-gridSize"),s=e.querySelector("#ddc-setting-animate"),d=e.querySelector("#ddc-setting-hideHdr"),u=e.querySelector("#ddc-setting-hideSbar"),f=e.querySelector("#ddc-setting-dragSnap"),v=e.querySelector("#ddc-setting-autoSave"),y=e.querySelector("#ddc-setting-autoSaveDebounce"),g=e.querySelector("#ddc-setting-sizeMode"),x=e.querySelector("#ddc-setting-orient"),A=e.querySelector("#ddc-setting-disableOverlap"),S=e.querySelector("#ddc-setting-editPin"),T=e.querySelector("#ddc-setting-containerBg"),L=e.querySelector("#ddc-setting-cardBg"),k=e.querySelector("#ddc-setting-cardShadow"),O=e.querySelector("#ddc-setting-bgImg"),M=e.querySelector("#ddc-bg-repeat"),_=e.querySelector("#ddc-bg-size"),P=e.querySelector("#ddc-bg-position"),R=e.querySelector("#ddc-bg-attachment"),H=e.querySelector("#ddc-bg-opacity"),U=e.querySelector("#ddc-bg-opacity-out"),$=e.querySelector("#ddc-setting-debug"),re=e.querySelector("#ddc-setting-screenSaverEnabled"),F=e.querySelector("#ddc-setting-screenSaverDelay"),V=e.querySelector("#ddc-screenSaverDelayOut"),K=e.querySelector("#ddc-bg-mode"),le=e.querySelector('[data-bg-section="image"]'),Ke=e.querySelector('[data-bg-section="particles"]'),pe=e.querySelector('[data-bg-section="youtube"]'),ze=e.querySelector("#ddc-particles-url"),Ce=e.querySelector("#ddc-particles-pointer"),ke=e.querySelector("#ddc-youtube-url"),je=e.querySelector("#ddc-youtube-start"),qe=e.querySelector("#ddc-youtube-end"),Qe=e.querySelector("#ddc-youtube-mute"),ct=e.querySelector("#ddc-youtube-loop"),dt=e.querySelector("#ddc-youtube-size"),ot=e.querySelector("#ddc-youtube-position"),ae=e.querySelector("#ddc-youtube-attachment"),ut=e.querySelector("#ddc-youtube-opacity"),st=e.querySelector("#ddc-youtube-opacity-out"),Le=((Ze=this._config)==null?void 0:Ze.background_image)||{},oe=((Ge=this._config)==null?void 0:Ge.background_mode)||((We=(rt=this._config)==null?void 0:rt.background_image)!=null&&We.src?"image":"none");K&&(K.value=String(oe));let Ye=((nt=this._config)==null?void 0:nt.background_particles)||{};ze&&(ze.value=Ye.config_url||""),Ce&&(Ce.checked=!!Ye.pointer_events);let Se=((tt=this._config)==null?void 0:tt.background_youtube)||{},Me=Se.url||Se.video_id||"";if(ke&&(ke.value=Me),je&&(je.value=(it=Se.start)!=null?it:""),qe&&(qe.value=(Xe=Se.end)!=null?Xe:""),Qe&&(Qe.checked=Se.mute!==!1),ct&&(ct.checked=Se.loop!==!1),dt&&(dt.value=String(Se.size||"cover")),ot&&(ot.value=String(Se.position||"center")),ae&&(ae.value=String(Se.attachment||"scroll")),ut){let D=Math.round((Se.opacity!=null?Se.opacity:1)*100);ut.value=String(D),st&&(st.textContent=D+"%"),ut.addEventListener("input",()=>{let X=Math.max(0,Math.min(100,parseInt(ut.value||"100",10)));st&&(st.textContent=X+"%")})}let gt=()=>{let D=(K==null?void 0:K.value)||"none";le&&(le.style.display=D==="image"?"":"none"),Ke&&(Ke.style.display=D==="particles"?"":"none"),pe&&(pe.style.display=D==="youtube"?"":"none")};K==null||K.addEventListener("change",gt),gt();let mt=e.querySelector('[aria-labelledby="lbl-auto-resize"]'),Bt=()=>{let D=(g==null?void 0:g.value)||"dynamic";mt&&(mt.style.display=D==="dynamic"?"":"none")};if(Bt(),g==null||g.addEventListener("change",Bt),o&&(o.checked=!!this.autoResizeCards),c&&(c.value=String(this.gridSize||100)),s&&(s.checked=!!this.animateCards),d&&(d.checked=!!this.hideHaHeader),u&&(u.checked=!!this.hideHaSidebar),f&&(f.checked=!!this.dragLiveSnap),v&&(v.checked=!!this.autoSave),y&&(y.value=String((Je=this.autoSaveDebounce)!=null?Je:800)),g&&(g.value=String(this.containerSizeMode||"dynamic")),x&&(x.value=String(this.containerPresetOrient||"auto")),A&&(A.checked=!!this.disableOverlap),T&&(T.value=String(this.containerBackground||"")),L&&(L.value=String(this.cardBackground||"")),O){let D=((Ae=(Pe=this._config)==null?void 0:Pe.background_image)!=null?Ae:(ve=this._config)==null?void 0:ve.bg_image)||{};O.value=D.src?String(D.src):""}if($&&($.checked=!!this.debug),k&&(k.checked=!!this.cardShadowEnabled),M&&(M.value=String(Le.repeat||"no-repeat")),_&&(_.value=String(Le.size||"cover")),P&&(P.value=String(Le.position||"center center")),R&&(R.value=String(Le.attachment||"scroll")),H){let D=Math.round((Le.opacity!=null?Le.opacity:1)*100);H.value=String(D),U&&(U.textContent=`${D}%`),H.addEventListener("input",()=>{let X=Math.max(0,Math.min(100,parseInt(H.value||"100",10)));U.textContent=`${X}%`,this.style.setProperty("--ddc-bg-opacity",String(X/100))})}if(k&&k.addEventListener("change",()=>{try{k.checked?this.style.setProperty("--ddc-card-shadow","0 8px 24px rgba(0,0,0,.35)"):this.style.removeProperty("--ddc-card-shadow")}catch{}}),re&&(re.checked=!!this.screenSaverEnabled,re.addEventListener("change",()=>{this.screenSaverEnabled=re.checked,typeof this._updateScreensaverSettings=="function"&&this._updateScreensaverSettings()})),F){let D=this.screenSaverDelay!=null?Number(this.screenSaverDelay):3e5,X=Math.round(D/6e4);(!Number.isFinite(X)||X<1)&&(X=5),X>60&&(X=60),F.value=String(X),V&&(V.textContent=`${X} min`),F.addEventListener("input",()=>{let ie=parseInt(F.value||"1",10),he=Math.max(1,Math.min(60,isNaN(ie)?1:ie));V&&(V.textContent=`${he} min`),this.screenSaverDelay=he*6e4,typeof this._updateScreensaverSettings=="function"&&this._updateScreensaverSettings()})}try{if(S){let D=this.config&&this.config.edit_mode_pin!=null?String(this.config.edit_mode_pin):"",X=this.editModePin!=null?String(this.editModePin):"";S.value=X||D||"",S.disabled=!1,S.readOnly=!1}}catch{}let lt=e.querySelector("#ddc-setting-gridSize"),Tt=e.querySelector("#ddc-grid-out"),wt=e.querySelector("#ddc-grid-demo"),Kt=e.querySelector("#ddc-grid-meta"),De=e.querySelector("#ddc-setting-gridSizeInput"),yt=()=>{if(!wt||!Kt)return;let D=wt.getBoundingClientRect(),X=Math.max(1,parseInt(lt.value||"100",10)),ie=Math.max(1,Math.floor(D.width/X)),he=Math.max(1,Math.floor(D.height/X));Kt.innerHTML=`
        <ha-icon icon="mdi:grid"></ha-icon>
        <span>${X}px \xB7 ${ie}\xD7${he}</span>
      `},Ot=()=>{let D=Math.max(1,parseInt(lt.value||"100",10));Tt&&(Tt.textContent=`${D} px`),wt&&wt.style.setProperty("--g",`${D}px`),yt()};if(lt&&(lt.value||(lt.value=String(this.gridSize||100)),lt.addEventListener("input",()=>{De&&(De.value=lt.value),Ot()}),De&&(De.value=lt.value),Ot()),De&&De.addEventListener("input",()=>{let D=Math.max(1,Math.min(400,parseInt(De.value||"100",10)));lt.value=String(D),Ot()}),wt){let D=new ResizeObserver(()=>yt());D.observe(wt),(Ee=(Re=this.__ddcGridRO)==null?void 0:Re.disconnect)==null||Ee.call(Re),this.__ddcGridRO=D}e.querySelectorAll(".chip").forEach(D=>{D.addEventListener("click",()=>{var ye,me;e.querySelectorAll(".chip").forEach(ge=>ge.setAttribute("aria-pressed","false")),D.setAttribute("aria-pressed","true");let X=parseInt(D.dataset.w,10),ie=parseInt(D.dataset.h,10),he=e.querySelector("#ddc-setting-sizeMode");he.value="fixed_custom",(me=(ye=typeof g!="undefined"&&g)==null?void 0:ye.dispatchEvent)==null||me.call(ye,new Event("change")),setTimeout(()=>{var Fe,Ue,Ve;(Fe=e.querySelector("#ddc-setting-custW"))==null||Fe.setAttribute("value",String(X)),(Ve=(Ue=e.querySelector("#ddc-setting-custW"))==null?void 0:Ue.dispatchEvent)==null||Ve.call(Ue,new Event("change"));let ge=e.querySelector("#ddc-setting-custW");ge&&(ge.value=String(X));let He=e.querySelector("#ddc-setting-custH");He&&(He.value=String(ie))},0)})});let ti=["#ffffff","#f5f7fa","#ebeff5","#121212","#1f2937","#334155","#ff6b6b","#fcbf49","#ffe66d","#4ecdc4","#1a535c","#6b5b95","#f6f5f5","#00aaff","#ff00ff","#00ff00","var(--card-background-color)","var(--ha-card-background)","transparent","rgba(255,255,255,0.4)","rgba(0,0,0,0.3)","rgba(0,128,255,0.3)","rgba(255,0,128,0.3)","rgba(255,255,0,0.3)","rgba(0,255,128,0.3)"],zt=(D,X,ie)=>{let he=e.querySelector(D),ye=e.querySelector(X),me=e.querySelector(ie);!he||!ye||(he.innerHTML="",ti.forEach((ge,He)=>{let Fe=document.createElement("button");Fe.type="button",Fe.className="swatch",Fe.title=ge,Fe.style.background=ge.startsWith("var(")?getComputedStyle(this).getPropertyValue(ge.slice(4,-1)).trim()||"#fff":ge,Fe.setAttribute("aria-pressed","false"),Fe.addEventListener("click",()=>{he.querySelectorAll(".swatch").forEach(Ue=>Ue.setAttribute("aria-pressed","false")),Fe.setAttribute("aria-pressed","true"),ye.value=ge,/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(ge)&&me&&(me.value=ge);try{ye.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}catch{}}),he.appendChild(Fe),String(ye.value).trim()===ge&&Fe.setAttribute("aria-pressed","true")}))};zt("#ddc-swatches-containerBg","#ddc-setting-containerBg","#ddc-color-containerBg"),zt("#ddc-swatches-cardBg","#ddc-setting-cardBg","#ddc-color-cardBg"),[["#ddc-color-containerBg","#ddc-setting-containerBg"],["#ddc-color-cardBg","#ddc-setting-cardBg"]].forEach(([D,X])=>{let ie=e.querySelector(D),he=e.querySelector(X);if(!ie||!he)return;let ye=(String(he.value||"").match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)||[])[0];ye&&(ie.value=ye),ie.addEventListener("input",()=>{he.value=ie.value}),he.addEventListener("change",()=>{let me=(String(he.value||"").match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)||[])[0];me&&(ie.value=me)})});let Rt=e.querySelector("#ddc-file-bg"),pt=e.querySelector("#ddc-setting-bgImg"),Dt=e.querySelector("#ddc-bg-thumb"),be=D=>{Dt&&(Dt.style.backgroundImage=D?`url(${D})`:"none")};pt!=null&&pt.value&&be(pt.value),Rt==null||Rt.addEventListener("change",async()=>{var he;let D=(he=Rt.files)==null?void 0:he[0];if(!D)return;let X=/iPad|iPhone|iPod/.test(navigator.userAgent),ie=URL.createObjectURL(D);be(ie),this.style.setProperty("--ddc-bg-image",`url("${ie}")`),pt&&(pt.value=""),(async()=>{if(!X)try{let ye=new Image;ye.src=ie,await ye.decode();let me=Math.min(1920/ye.naturalWidth,1080/ye.naturalHeight,1),ge=Math.round(ye.naturalWidth*me),He=Math.round(ye.naturalHeight*me),Fe=document.createElement("canvas");Fe.width=ge,Fe.height=He,Fe.getContext("2d",{alpha:!1}).drawImage(ye,0,0,ge,He);let Ve=Fe.toDataURL("image/jpeg",.7);Ve&&Ve.length<3e5&&pt&&(pt.value=Ve)}catch{}})()}),(se=e.querySelector("#ddc-clear-bg"))==null||se.addEventListener("click",()=>{var ie,he;pt&&(pt.value=""),be("");let{background_image:D,...X}=this._config||{};this._config=X,this.style.setProperty("--ddc-bg-image","none"),(ie=this._applyBackgroundFromConfig)==null||ie.call(this),(he=this._persistThisCardConfigToStorage_)==null||he.call(this)}),e.addEventListener("click",D=>{D.target===e&&(D.stopPropagation(),j())});let q=D=>{D.key==="Escape"&&(D.stopPropagation(),j())};document.addEventListener("keydown",q,{once:!0}),setTimeout(()=>{var D;return(D=e.querySelector("#ddc-setting-gridSize"))==null?void 0:D.focus()},0);try{let D=e.querySelector("#ddc-setting-sizeExtras"),X=()=>{var he,ye;if(!D)return;D.innerHTML="";let ie=(g==null?void 0:g.value)||"dynamic";if(ie==="fixed_custom"){let me=document.createElement("label");me.style.display="flex",me.style.flexDirection="column",me.style.fontSize=".95rem",me.style.marginBottom="10px";let ge=document.createElement("span");ge.textContent="Custom width (px)",ge.style.marginBottom="4px";let He=document.createElement("input");He.type="number",He.id="ddc-setting-custW",He.min="100",He.max="10000",He.step="10",He.style.padding="6px",He.style.border="1px solid var(--divider-color,rgba(0,0,0,.3))",He.style.borderRadius="6px",He.value=String((he=this.containerFixedWidth)!=null?he:800),me.appendChild(ge),me.appendChild(He);let Fe=document.createElement("label");Fe.style.display="flex",Fe.style.flexDirection="column",Fe.style.fontSize=".95rem",Fe.style.marginBottom="10px";let Ue=document.createElement("span");Ue.textContent="Custom height (px)",Ue.style.marginBottom="4px";let Ve=document.createElement("input");Ve.type="number",Ve.id="ddc-setting-custH",Ve.min="100",Ve.max="10000",Ve.step="10",Ve.style.padding="6px",Ve.style.border="1px solid var(--divider-color,rgba(0,0,0,.3))",Ve.style.borderRadius="6px",Ve.value=String((ye=this.containerFixedHeight)!=null?ye:600),Fe.appendChild(Ue),Fe.appendChild(Ve),D.appendChild(me),D.appendChild(Fe)}else if(ie==="preset"){let me=document.createElement("label");me.style.display="flex",me.style.flexDirection="column",me.style.fontSize=".95rem",me.style.marginBottom="10px";let ge=document.createElement("span");ge.textContent="Preset size",ge.style.marginBottom="4px";let He=document.createElement("select");He.id="ddc-setting-preset",He.style.padding="6px",He.style.border="1px solid var(--divider-color,rgba(0,0,0,.3))",He.style.borderRadius="6px",(typeof t!="undefined"&&t._sizePresets?t._sizePresets():[]).forEach(Ue=>{let Ve=document.createElement("option");Ve.value=Ue.key,Ve.textContent=`${Ue.label||Ue.key} (${Ue.w}\xD7${Ue.h})`,He.appendChild(Ve)}),He.value=String(this.containerPreset||"fhd"),me.appendChild(ge),me.appendChild(He),D.appendChild(me)}};X(),g==null||g.addEventListener("change",X)}catch(D){console.warn("[drag-and-drop-card] Failed to build container size extras",D)}let Y=()=>{var X,ie,he,ye,me;return((me=(ye=(ie=(X=this._config)==null?void 0:X.options)==null?void 0:ie.tabs)!=null?ye:(he=this._config)==null?void 0:he.tabs)!=null?me:[]).map(ge=>{var He,Fe,Ue,Ve,Mt,Ft,kt;return typeof ge=="string"?{id:ge,label:ge,icon:"",label_mode:"both",__raw:{id:ge,label:ge}}:{id:(Ue=(Fe=(He=ge.id)!=null?He:ge.key)!=null?Fe:ge.label)!=null?Ue:"tab",label:(Mt=(Ve=ge.label)!=null?Ve:ge.id)!=null?Mt:"Tab",icon:(Ft=ge.icon)!=null?Ft:"",label_mode:(kt=ge.label_mode)!=null?kt:"both",__raw:ge}})},ue=async(D,X)=>{var he,ye,me;let ie=D.map(ge=>({...ge.__raw,id:ge.id,label:ge.label,icon:ge.icon||"",label_mode:ge.label_mode||"both"}));(he=this._config)!=null&&he.options?this._config.options={...this._config.options||{},tabs:ie,default_tab:X!=null?X:(ye=this._config.options)==null?void 0:ye.default_tab}:(this._config.tabs=ie,X&&(this._config.default_tab=X));try{await this._persistThisCardConfigToStorage_()}catch(ge){console.warn("[drag-and-drop-card] Could not persist tabs",ge)}(me=this.requestUpdate)==null||me.call(this)},we=()=>{var D,X,ie,he;return((X=(D=this._config)==null?void 0:D.options)==null?void 0:X.default_tab)||((ie=this._config)==null?void 0:ie.default_tab)||((he=Y()[0])==null?void 0:he.id)},de=e.querySelector("#ddc-tabs-list"),Oe=()=>{let D=Y(),X=we();if(de.innerHTML="",!D.length){let ie=document.createElement("div");ie.className="hint",ie.textContent="No tabs yet. Add one below.",de.appendChild(ie);return}D.forEach((ie,he)=>{let ye=document.createElement("div");ye.className="tab-row";let me=document.createElement("input");me.type="radio",me.name="ddc-default-tab",me.value=ie.id,me.checked=ie.id===X,me.title="Set as default tab",me.addEventListener("change",async()=>{await ue(D,ie.id)});let ge=document.createElement("div");ge.className="tab-name";let He=document.createElement("ha-icon");He.setAttribute("icon",ie.icon||"mdi:tab");let Fe=document.createElement("input");Fe.value=ie.icon||"",Fe.placeholder="mdi:home",Fe.title="Tab icon (mdi:...)",Fe.style.width="160px",Fe.addEventListener("change",async()=>{ie.icon=Fe.value.trim(),He.setAttribute("icon",ie.icon||"mdi:tab"),D[he]=ie,await ue(D,X)});let Ue=document.createElement("input");Ue.value=ie.label,Ue.placeholder="Tab name",Ue.style.flex="1",Ue.addEventListener("change",async()=>{ie.label=Ue.value.trim()||ie.id,D[he]=ie,await ue(D,X)});let Ve=document.createElement("div");Ve.className="tab-icon-wrap",Ve.appendChild(He),Ve.appendChild(Fe),ge.appendChild(Ve),ge.appendChild(Ue);let Mt=document.createElement("div");Mt.className="mode-chips";let Ft=(qt,Nt)=>{let _t=document.createElement("button");return _t.type="button",_t.className="chip",_t.textContent=Nt,_t.setAttribute("aria-pressed",String((ie.label_mode||"both")===qt)),_t.addEventListener("click",async()=>{Mt.querySelectorAll(".chip").forEach(Wt=>Wt.setAttribute("aria-pressed","false")),_t.setAttribute("aria-pressed","true"),ie.label_mode=qt,D[he]=ie,await ue(D,X)}),_t};Mt.appendChild(Ft("icon","Icon")),Mt.appendChild(Ft("text","Text")),Mt.appendChild(Ft("both","Both"));let kt=document.createElement("div");kt.className="tab-actions";let Pt=document.createElement("button");Pt.className="icon-btn danger",Pt.innerHTML='<ha-icon icon="mdi:trash-can-outline"></ha-icon>',Pt.title="Delete tab",Pt.addEventListener("click",async()=>{var _t,Wt;let qt=Y().filter(mi=>mi.id!==ie.id),Nt=X;ie.id===X&&(Nt=(_t=qt[0])==null?void 0:_t.id),await ue(qt,Nt);try{(Wt=this._reassignCardsToTab_)==null||Wt.call(this,ie.id,Nt)}catch{}Oe()}),kt.appendChild(Mt),kt.appendChild(Pt),ye.appendChild(me),ye.appendChild(ge),ye.appendChild(kt),de.appendChild(ye)})};Oe(),(ne=e.querySelector("#ddc-add-tab-btn"))==null||ne.addEventListener("click",async()=>{let D=e.querySelector("#ddc-new-tab-name"),X=((D==null?void 0:D.value)||"").trim();if(!X)return;let ie=Y(),he=X.replace(/\s+/g,"-").toLowerCase(),ye=2;for(;ie.some(me=>me.id===he);)he=`${he}-${ye++}`;ie.push({id:he,label:X,icon:"",label_mode:"both",__raw:{id:he,label:X}}),await ue(ie,we()),D.value="",Oe()});let N=e.querySelector("#ddc-clear-bg");N&&N.addEventListener("click",()=>{var ie,he,ye;let D=e.querySelector("#ddc-setting-bgImg"),X=e.querySelector("#ddc-bg-thumb");D&&(D.value=""),X&&(X.style.backgroundImage="none");try{if((ie=this._config)!=null&&ie.background_image){let{background_image:me,...ge}=this._config;this._config=ge}(he=this._applyBackgroundImageFromConfig)==null||he.call(this),(ye=this._persistThisCardConfigToStorage_)==null||ye.call(this)}catch(me){console.warn("[drag-and-drop-card] Failed to clear background image",me)}});let ee=["linear-gradient(135deg, #1e3a8a, #0ea5e9)","linear-gradient(135deg, #111827, #1f2937)","linear-gradient(135deg, #0f766e, #22c55e)","linear-gradient(135deg, #7c3aed, #06b6d4)","linear-gradient(135deg, #f97316, #f43f5e)","linear-gradient(135deg, #eab308, #22d3ee)","radial-gradient(circle at 30% 20%, #2dd4bf, #1e293b)","radial-gradient(circle at 70% 80%, #f59e0b, #7c3aed)"],Ne=(D,X)=>{let ie=e.querySelector(D),he=e.querySelector(X);!ie||!he||(ie.innerHTML="",ee.forEach(ye=>{let me=document.createElement("button");me.type="button",me.className="gradient",me.style.background=ye,me.setAttribute("aria-pressed","false"),me.title=ye,me.addEventListener("click",()=>{ie.querySelectorAll(".gradient").forEach(ge=>ge.setAttribute("aria-pressed","false")),me.setAttribute("aria-pressed","true"),he.value=ye;try{String(X||"").toLowerCase().includes("cardbg")?(this.cardBackground=ye,this.style.setProperty("--ddc-card-bg",ye)):(this.containerBackground=ye,this.style.setProperty("--ddc-bg",ye))}catch{}}),ie.appendChild(me),String(he.value).trim()===ye&&me.setAttribute("aria-pressed","true")}))};Ne("#ddc-gradients-containerBg","#ddc-setting-containerBg"),Ne("#ddc-gradients-cardBg","#ddc-setting-cardBg"),T&&T.addEventListener("input",()=>{let D=(T.value||"").trim();try{this.containerBackground=D,this.style.setProperty("--ddc-bg",D)}catch{}}),L&&L.addEventListener("input",()=>{let D=(L.value||"").trim();try{this.cardBackground=D,this.style.setProperty("--ddc-card-bg",D)}catch{}});let j=()=>{var D,X;try{(X=(D=this.__ddcGridRO)==null?void 0:D.disconnect)==null||X.call(D),this.__ddcGridRO=null}catch{}try{e.remove()}catch{}this.__settingsModal===e&&(this.__settingsModal=null)};(Z=e.querySelector("#ddc-settings-close"))==null||Z.addEventListener("click",D=>{D.stopPropagation(),j()}),(Q=e.querySelector("#ddc-settings-cancel"))==null||Q.addEventListener("click",D=>{D.stopPropagation(),j()}),(W=e.querySelector("#ddc-settings-save"))==null||W.addEventListener("click",D=>{var Wi,_i,xi,ci,Yi,$i,wi,Ki,Ui,Si,ki,Vi,li,Gi,Ci;D.stopPropagation();let X=(g==null?void 0:g.value)||"dynamic",ie=X==="dynamic"&&!!(o!=null&&o.checked),he=parseInt((c==null?void 0:c.value)||"0",10),ye=!!(s!=null&&s.checked),me=!!(d!=null&&d.checked),ge=!!(u!=null&&u.checked),He=!!(f!=null&&f.checked),Fe=!!(v!=null&&v.checked),Ue=parseInt((y==null?void 0:y.value)||"0",10),Ve=(x==null?void 0:x.value)||"auto",Mt=!!(A!=null&&A.checked),Ft=((T==null?void 0:T.value)||"").trim(),kt=((L==null?void 0:L.value)||"").trim(),Pt=((O==null?void 0:O.value)||"").trim(),qt=!!($!=null&&$.checked),Nt=((S==null?void 0:S.value)||"").trim(),_t=(K==null?void 0:K.value)||"none",Wt=((ze==null?void 0:ze.value)||"").trim(),mi=!!(Ce!=null&&Ce.checked),yi=((ke==null?void 0:ke.value)||"").trim(),Bi=parseInt((je==null?void 0:je.value)||"",10),qi=parseInt((qe==null?void 0:qe.value)||"",10),Ni=!!(Qe!=null&&Qe.checked),Hi=!!(ct!=null&&ct.checked),vi=(dt==null?void 0:dt.value)||"cover",ji=(ot==null?void 0:ot.value)||"center",Gt=ut?Math.max(0,Math.min(100,parseInt(ut.value||"100",10)))/100:1,Yt=(ae==null?void 0:ae.value)||"scroll",bi=!!(k!=null&&k.checked),si=!!(re!=null&&re.checked),Ht=parseInt((F==null?void 0:F.value)||"1",10),ii=(Number.isFinite(Ht)?Ht:1)*6e4;try{if(this.autoResizeCards=ie,!this.autoResizeCards&&this.__ddcResizeObs){try{this.__ddcResizeObs.disconnect()}catch{}this.__ddcResizeObs=null,this.__ddcOnWinResize&&(window.removeEventListener("resize",this.__ddcOnWinResize),this.__ddcOnWinResize=null)}if(this.autoResizeCards&&!this.__ddcResizeObs){this.__ddcResizeObs=new ResizeObserver(()=>{var et;return(et=this._applyAutoScale)==null?void 0:et.call(this)});try{this.__ddcResizeObs.observe(this)}catch{}try{this.__ddcResizeObs.observe(this.cardContainer)}catch{}window.addEventListener("resize",this.__ddcOnWinResize=()=>{var et;return(et=this._applyAutoScale)==null?void 0:et.call(this)})}this.autoResizeCards||String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(Wi=this._startScaleWatch)==null||Wi.call(this):(_i=this._stopScaleWatch)==null||_i.call(this),(xi=this._applyAutoScale)==null||xi.call(this),!isNaN(he)&&he>0&&he!==this.gridSize&&(this.gridSize=he,(ci=this._applyGridVars)==null||ci.call(this),(Yi=this._resizeContainer)==null||Yi.call(this)),this.cardShadowEnabled=bi,this.cardShadowEnabled?this.style.setProperty("--ddc-card-shadow","0 8px 24px rgba(0,0,0,.35)"):this.style.removeProperty("--ddc-card-shadow"),this.editModePin=Nt,this._config={...this._config||{},edit_mode_pin:Nt};let Ei=He!==this.dragLiveSnap;this.dragLiveSnap=He,Ei&&(($i=this._initInteract)==null||$i.call(this)),this.autoSave=Fe,!isNaN(Ue)&&Ue>0&&(this.autoSaveDebounce=Ue);let di=X!==this.containerSizeMode;this.containerSizeMode=X;let cr=Ve!==this.containerPresetOrient;if(this.containerPresetOrient=Ve,(di||cr)&&((wi=this._resizeContainer)==null||wi.call(this)),X==="fixed_custom"){let et=parseInt(((Ki=e.querySelector("#ddc-setting-custW"))==null?void 0:Ki.value)||"0",10),bt=parseInt(((Ui=e.querySelector("#ddc-setting-custH"))==null?void 0:Ui.value)||"0",10);!isNaN(et)&&et>0&&(this.containerFixedWidth=et),!isNaN(bt)&&bt>0&&(this.containerFixedHeight=bt),(Si=this._resizeContainer)==null||Si.call(this)}else if(X==="preset"){let et=(ki=e.querySelector("#ddc-setting-preset"))==null?void 0:ki.value;et&&(this.containerPreset=et),(Vi=this._resizeContainer)==null||Vi.call(this)}if(this.disableOverlap=Mt,Ft&&(this.containerBackground=Ft,this.style.setProperty("--ddc-bg",this.containerBackground)),kt&&(this.cardBackground=kt,this.style.setProperty("--ddc-card-bg",this.cardBackground)),Pt){let et=this._config&&this._config.background_image||{};this._config={...this._config,background_image:{...et,src:Pt}}}else{let{background_image:et,...bt}=this._config||{};this._config=bt}this.debug=qt,this.animateCards=ye,this.hideHaHeader=me,this.hideHaSidebar=ge,(li=this._applyHaChromeVisibility_)==null||li.call(this);let ui=this._config&&this._config.background_image||{},Ai=(M==null?void 0:M.value)||"no-repeat",Xi=(_==null?void 0:_.value)||"cover",Ti=(P==null?void 0:P.value)||"center center",Oi=(R==null?void 0:R.value)||"scroll",Ji=H?Math.max(0,Math.min(100,parseInt(H.value||"100",10)))/100:1;if(this._config=this._config||{},this._config.background_mode=_t,_t!=="image"&&!Pt){let{background_image:et,...bt}=this._config||{};this._config=bt}if(_t==="particles")this._config.background_particles={config_url:Wt||void 0,pointer_events:mi||void 0};else{let{background_particles:et,...bt}=this._config||{};this._config=bt}if(_t==="youtube")this._config.background_youtube={url:yi||void 0,start:Number.isFinite(Bi)?Bi:void 0,end:Number.isFinite(qi)?qi:void 0,mute:Ni!==!0?Ni:void 0,loop:Hi!==!0?Hi:void 0,size:vi&&vi!="cover"?vi:void 0,position:ji||void 0,attachment:Yt&&Yt!=="scroll"?Yt:void 0,opacity:Gt!=null&&Gt!==1?Gt:void 0};else{let{background_youtube:et,...bt}=this._config||{};this._config=bt}if(this.screenSaverEnabled=si,this.screenSaverDelay=ii,(Gi=this._updateScreensaverSettings)==null||Gi.call(this),Pt)this._config={...this._config,background_image:{...ui,src:Pt,repeat:Ai,size:Xi,position:Ti,attachment:Oi,opacity:Ji}};else if(ui.src)this._config={...this._config,background_image:{...ui,repeat:Ai,size:Xi,position:Ti,attachment:Oi,opacity:Ji}};else{let{background_image:et,...bt}=this._config||{};this._config=bt}(Ci=this._applyBackgroundFromConfig)==null||Ci.call(this);try{this._config||(this._config={}),this._config.grid=this.gridSize,this._config.auto_resize_cards=!!this.autoResizeCards,this._config.drag_live_snap=!!this.dragLiveSnap,this._config.auto_save=!!this.autoSave,this._config.auto_save_debounce=this.autoSaveDebounce,this._config.container_size_mode=this.containerSizeMode,this._config.container_preset_orientation=this.containerPresetOrient,this._config.container_fixed_width=this.containerFixedWidth,this._config.container_fixed_height=this.containerFixedHeight,this._config.container_preset=this.containerPreset,this._config.disable_overlap=!!this.disableOverlap,this._config.container_background=this.containerBackground,this._config.card_background=this.cardBackground,this._config.card_shadow=!!this.cardShadowEnabled,this._config.debug=!!this.debug,this._config.animate_cards=!!this.animateCards,this._config.hide_HA_Header=!!this.hideHaHeader,this._config.hide_HA_Sidebar=!!this.hideHaSidebar,this._config.screen_saver_enabled=!!this.screenSaverEnabled,this._config.screen_saver_delay=this.screenSaverDelay}catch(et){console.warn("[drag-and-drop-card] Failed to update config",et)}this._persistThisCardConfigToStorage_().catch(et=>{console.warn("[drag-and-drop-card] Storage save failed (is this a YAML dashboard?)",et)})}catch(Ei){console.warn("[drag-and-drop-card] Failed to apply settings",Ei)}j()})}_exportableOptions(){var s,d,u;let e=this._config||{},n=(f,v)=>Object.fromEntries(v.map(y=>[y,f==null?void 0:f[y]]).filter(([,y])=>y!==void 0)),o=e.background_mode||((s=e.background_image)!=null&&s.src?"image":e.background_youtube?"youtube":e.background_particles?"particles":"none"),c={storage_key:this.storageKey||void 0,grid:this.gridSize,drag_live_snap:!!this.dragLiveSnap,auto_save:!!this.autoSave,auto_save_debounce:this.autoSaveDebounce,disable_overlap:!!this.disableOverlap,debug:!!this.debug,edit_mode_pin:this.editModePin||void 0,container_size_mode:this.containerSizeMode,container_preset_orientation:this.containerPresetOrient,container_fixed_width:(d=this.containerFixedWidth)!=null?d:void 0,container_fixed_height:(u=this.containerFixedHeight)!=null?u:void 0,container_preset:this.containerPreset,auto_resize_cards:!!this.autoResizeCards,container_background:this.containerBackground,card_background:this.cardBackground,card_shadow:!!this.cardShadowEnabled,animate_cards:!!this.animateCards,hide_HA_Header:!!this.hideHaHeader,hide_HA_Sidebar:!!this.hideHaSidebar,tabs:this.tabs,tabs_position:this.tabsPosition,default_tab:this.defaultTab,hide_tabs_when_single:!!this.hideTabsWhenSingle,background_mode:o,background_image:e.background_image?n(e.background_image,["src","repeat","size","position","attachment","opacity"]):void 0,background_particles:e.background_particles?n(e.background_particles,["config_url","pointer_events"]):void 0,background_youtube:e.background_youtube?n(e.background_youtube,["url","start","end","mute","loop","size","position","attachment","opacity"]):void 0,screen_saver_enabled:!!this.screenSaverEnabled,screen_saver_delay:this.screenSaverDelay};return Object.keys(c).forEach(f=>c[f]===void 0&&delete c[f]),c}_applyImportedOptions(e={},n=!0){var o,c,s,d,u,f,v,y;if(e&&Object.prototype.hasOwnProperty.call(e,"storage_key")&&this._isInHaEditorPreview())try{let g={type:"custom:drag-and-drop-card",...this._config||{}};this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:g},bubbles:!0,composed:!0}))}catch{}if(this._config={...this._config||{},...e},"storage_key"in e&&(this.storageKey=e.storage_key||void 0),this._syncEditorsStorageKey(),"grid"in e&&(this.gridSize=Number(e.grid)||10),"drag_live_snap"in e&&(this.dragLiveSnap=!!e.drag_live_snap),"auto_save"in e&&(this.autoSave=!!e.auto_save),"auto_save_debounce"in e&&(this.autoSaveDebounce=Number(e.auto_save_debounce)||800),"container_background"in e&&(this.containerBackground=(o=e.container_background)!=null?o:"transparent"),"card_background"in e&&(this.cardBackground=(c=e.card_background)!=null?c:"var(--ha-card-background, var(--card-background-color))"),"card_shadow"in e&&(this.cardShadowEnabled=!!e.card_shadow),"debug"in e&&(this.debug=!!e.debug),"disable_overlap"in e&&(this.disableOverlap=!!e.disable_overlap),"container_size_mode"in e&&(this.containerSizeMode=e.container_size_mode||"dynamic"),"container_fixed_width"in e&&(this.containerFixedWidth=Number(e.container_fixed_width)||null),"container_fixed_height"in e&&(this.containerFixedHeight=Number(e.container_fixed_height)||null),"container_preset"in e&&(this.containerPreset=e.container_preset||"fhd"),"container_preset_orientation"in e&&(this.containerPresetOrient=e.container_preset_orientation||"auto"),"auto_resize_cards"in e&&(this.autoResizeCards=!!e.auto_resize_cards,this.autoResizeCards||String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(s=this._startScaleWatch)==null||s.call(this):(d=this._stopScaleWatch)==null||d.call(this),(u=this._applyAutoScale)==null||u.call(this)),"screen_saver_enabled"in e&&(this.screenSaverEnabled=!!e.screen_saver_enabled),"screen_saver_delay"in e){let g=Number(e.screen_saver_delay);this.screenSaverDelay=Number.isFinite(g)&&g>0?g:this.screenSaverDelay}("screen_saver_enabled"in e||"screen_saver_delay"in e)&&typeof this._updateScreensaverSettings=="function"&&this._updateScreensaverSettings(),this.style.setProperty("--ddc-bg",this.containerBackground),this.style.setProperty("--ddc-card-bg",this.cardBackground),this.cardShadowEnabled?this.style.setProperty("--ddc-card-shadow","0 8px 24px rgba(0,0,0,.35)"):this.style.removeProperty("--ddc-card-shadow"),this._applyGridVars(),n&&(this._applyContainerSizingFromConfig(!0),(f=this._applyAutoScale)==null||f.call(this),this._resizeContainer(),(v=this._updateStoreBadge)==null||v.call(this),(y=this._applyAutoScale)==null||y.call(this))}_exportDesign(){let n=Array.from(this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)")).map(u=>{let f=parseFloat(u.getAttribute("data-x"))||0,v=parseFloat(u.getAttribute("data-y"))||0,y=parseFloat(u.style.width)||u.getBoundingClientRect().width,g=parseFloat(u.style.height)||u.getBoundingClientRect().height,x=parseInt(u.style.zIndex||"1",10),A=this._extractCardConfig(u.firstElementChild),S=u.dataset.tabId||this.defaultTab;return{card:A,position:{x:f,y:v},size:{width:y,height:g},z:x,tabId:S}}),o={version:2,options:this._exportableOptions(),cards:n};this._config&&this._config.card_mod&&(o.options=o.options||{},o.options.card_mod=this._config.card_mod);let c=`DragAndDrop_Design_${this.storageKey||"layout"}.json`,s=new Blob([JSON.stringify(o,null,2)],{type:"application/json"}),d=document.createElement("a");d.href=URL.createObjectURL(s),d.download=c,d.click(),URL.revokeObjectURL(d.href),this._toast("Design exported.")}_importDesign(){let e=document.createElement("input");e.type="file",e.accept="application/json";let n=!0,o=!1,c=["grid","drag_live_snap","auto_save","auto_save_debounce","debug","disable_overlap","card_mod","storage_key","animate_cards","auto_resize_cards","container_background","card_background","container_size_mode","container_fixed_width","container_fixed_height","container_preset","container_preset_orientation","tabs","tabs_position","default_tab","hide_tabs_when_single","hide_HA_Header","hide_HA_Sidebar","background_mode","background_image","background_particles","background_youtube","screen_saver_enabled","screen_saver_delay"];e.onchange=async()=>{var u,f,v,y,g,x,A,S,T,L,k,O,M,_,P,R,H,U,$,re,F,V,K,le,Ke,pe,ze,Ce,ke,je,qe,Qe,ct,dt,ot,ae,ut,st,Le,oe,Ye,Se,Me,gt,mt,Bt,lt,Tt,wt,Kt;let s=(u=e.files)==null?void 0:u[0];if(!s)return;let d=await s.text();try{let De=JSON.parse(d),yt=this.storageKey||((f=this._config)==null?void 0:f.storage_key)||null,Ot=!!(De.options&&Array.isArray(De.options.tabs)),ti=Array.isArray(De.cards)&&De.cards.some(be=>(be==null?void 0:be.tabId)||(be==null?void 0:be.tab_id)),zt=[];Ot?zt=De.options.tabs:ti?zt=Array.from(new Set(De.cards.map(q=>(q==null?void 0:q.tabId)||(q==null?void 0:q.tab_id)).filter(Boolean))).map(q=>({id:q,label:q})):zt=[{id:"default",label:"Layout"}];let Rt=((v=De.options)==null?void 0:v.tabs_position)==="left"?"left":this.tabsPosition||"top",pt=((y=De.options)==null?void 0:y.default_tab)||((g=zt[0])==null?void 0:g.id)||"default",Dt=((x=De.options)==null?void 0:x.hide_tabs_when_single)!==void 0?!!De.options.hide_tabs_when_single:!0;if(De.options){let be={...De.options};if(o||delete be.storage_key,n){let q=this._config||{type:"custom:drag-and-drop-card"};for(let Y of c)Y==="storage_key"&&!o||!(Y in be)&&Y in q&&delete q[Y];try{this.cardContainer&&(this.cardContainer.style.background="",this.cardContainer.style.width="",this.cardContainer.style.height=""),(S=(A=this.style)==null?void 0:A.removeProperty)==null||S.call(A,"--ddc-container-bg"),(L=(T=this.style)==null?void 0:T.removeProperty)==null||L.call(T,"--ddc-card-bg")}catch{}if(this._config={...q,...be},"card_mod"in be||delete this._config.card_mod,"animate_cards"in be&&(this.animateCards=!!be.animate_cards),"auto_resize_cards"in be&&(this.autoResizeCards=!!be.auto_resize_cards),"hide_HA_Header"in be||"hide_HA_Sidebar"in be)try{(k=this._applyHaChromeVisibility_)==null||k.call(this)}catch{}if("background_mode"in be||"background_image"in be||"background_particles"in be||"background_youtube"in be)try{(O=this._applyBackgroundFromConfig)==null||O.call(this)}catch{}if(o&&be.storage_key&&(this.storageKey=be.storage_key),this._opts){this._opts={...this._opts,...be};for(let Y of c)Y in be||delete this._opts[Y]}(M=this._applyOptionsToDom)==null||M.call(this,this._config),(_=this.requestUpdate)==null||_.call(this)}else this._applyImportedOptions(be,!0),be.card_mod!==void 0&&(this._config=this._config||{},this._config.card_mod=be.card_mod,(P=this.requestUpdate)==null||P.call(this))}else if(typeof De.grid=="number"){let be={grid:De.grid};n?this._config={...this._config||{},...be}:this._applyImportedOptions(be,!0),(R=this.requestUpdate)==null||R.call(this)}(!Array.isArray(this.tabs)||!this.tabs.length)&&(this.tabs=zt),this.tabsPosition||(this.tabsPosition=Rt),this.defaultTab||(this.defaultTab=pt),this.hideTabsWhenSingle===void 0&&(this.hideTabsWhenSingle=Dt),($=(U=(H=this.rootEl)==null?void 0:H.classList)==null?void 0:U.toggle)==null||$.call(U,"ddc-tabs-left-layout",this.tabsPosition==="left");try{let be=((re=this._config)==null?void 0:re.storage_key)||this.storageKey||null,q=(F=De.options)!=null?F:typeof De.grid=="number"?{grid:De.grid}:{},Y={...q,tabs:(K=(V=q.tabs)!=null?V:this.tabs)!=null?K:[],tabs_position:(Ke=(le=q.tabs_position)!=null?le:this.tabsPosition)!=null?Ke:"top",default_tab:(qe=(pe=q.default_tab)!=null?pe:this.defaultTab)!=null?qe:((Ce=(ze=q.tabs)==null?void 0:ze[0])==null?void 0:Ce.id)||((je=(ke=this.tabs)==null?void 0:ke[0])==null?void 0:je.id)||"default",hide_tabs_when_single:(ct=q.hide_tabs_when_single)!=null?ct:(Qe=this.hideTabsWhenSingle)!=null?Qe:!0};if(o||delete Y.storage_key,!be)console.warn("[ddc:import] No storage_key on this card; aborting YAML persist.");else{let ue=await((dt=this._persistOptionsToYaml)==null?void 0:dt.call(this,Y,{forceTargetKey:String(be),noDownload:!0,replace:!0,wipeUnknownKeys:!0})),we=!!(ue&&ue.yamlSaved);(ot=console.debug)==null||ot.call(console,"[ddc:import] YAML persist result:",we)}try{let ue={type:"custom:drag-and-drop-card",...this._config||{}};ue.tabs=Y.tabs,ue.tabs_position=Y.tabs_position,ue.default_tab=Y.default_tab,ue.hide_tabs_when_single=!!Y.hide_tabs_when_single,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:ue},bubbles:!0,composed:!0}))}catch{}}catch(be){console.warn("[ddc:import] YAML persist failed:",be)}if(this.cardContainer.innerHTML="",Array.isArray(De.cards)&&De.cards.length)for(let be of De.cards){let q=((ae=be.position)==null?void 0:ae.x)||0,Y=((ut=be.position)==null?void 0:ut.y)||0,ue=((st=be.size)==null?void 0:st.width)||140,we=((Le=be.size)==null?void 0:Le.height)||100,de=be.z,Oe=this._normalizeTabId(be.tabId||be.tab_id||this.defaultTab);if(!(be!=null&&be.card)||typeof be.card=="object"&&!Object.keys(be.card).length){let Ne=this._makePlaceholderAt(q,Y,ue,we);Ne.dataset.tabId=Oe,this.cardContainer.appendChild(Ne);continue}let N=await this._createCard(be.card),ee=this._makeWrapper(N);ee.dataset.tabId=Oe,this._setCardPosition(ee,q,Y),ee.style.width=`${ue}px`,ee.style.height=`${we}px`,de!=null&&(ee.style.zIndex=String(de)),this.cardContainer.appendChild(ee);try{this._rebuildOnce(ee.firstElementChild)}catch{}this._initCardInteract(ee)}else this._showEmptyPlaceholder(),(oe=this._applyAutoScale)==null||oe.call(this);(Ye=this._applyOptionsToDom)==null||Ye.call(this,this._config),this._resizeContainer();try{(gt=(Me=(Se=this.rootEl)==null?void 0:Se.classList)==null?void 0:Me.toggle)==null||gt.call(Me,"ddc-tabs-left-layout",this.tabsPosition==="left"),(mt=this._renderTabs)==null||mt.call(this),(Bt=this._applyActiveTab)==null||Bt.call(this)}catch{}try{this._saveTimer&&clearTimeout(this._saveTimer),await this._saveLayout(!0),(lt=this._toast)==null||lt.call(this,"Design imported & saved. Reloading..."),window.location.reload()}catch(be){console.warn("[ddc:import] saveLayout failed",be),(Tt=this._markDirty)==null||Tt.call(this,"import"),(wt=this._toast)==null||wt.call(this,"Design imported \u2014 click Apply to save.")}}catch(De){console.error("Import failed",De),(Kt=this._toast)==null||Kt.call(this,"Import failed \u2014 invalid file.")}},e.click()}_getLovelace(){var s,d;let e=0,n=this;for(;n&&e++<20;){let u=(s=n.getRootNode)==null?void 0:s.call(n),f=u==null?void 0:u.host;if((f==null?void 0:f.tagName)==="HUI-ROOT")return f.lovelace;n=f||n.parentElement}let o=new Set,c=[document];for(;c.length;){let u=c.shift();if(!(!u||o.has(u))){if(o.add(u),((d=u.host)==null?void 0:d.tagName)==="HUI-ROOT")return u.host.lovelace;if(u.tagName==="HUI-ROOT")return u.lovelace;if(u.shadowRoot&&c.push(u.shadowRoot),u.children)for(let f of u.children)c.push(f)}}}_scanDdcCards(e){let n=[],o=(s,d,u)=>{(u==null?void 0:u.type)==="custom:drag-and-drop-card"&&n.push({view:s,path:[...d],card:u})},c=(s,d,u)=>{if(s){if(Array.isArray(s)){s.forEach((f,v)=>c(f,d,u.concat(v)));return}if(typeof s=="object"){"type"in s&&o(d,u,s);for(let[f,v]of Object.entries(s))f==="views"&&Array.isArray(v)?v.forEach((y,g)=>c(y,g,["views",g])):(Array.isArray(v)||v&&typeof v=="object")&&c(v,d,u.concat(f))}}};return c(e,-1,[]),n}async _persistOptionsToYaml(e,{prevKey:n=null,patchAllInCurrentViewIfNoKey:o=!1}={}){var c,s,d,u,f,v,y,g,x;try{let A=this._getLovelace();if(!A)return console.debug("[ddc:import] persist: no lovelace root"),!1;if(typeof A.saveConfig!="function")return console.debug("[ddc:import] persist: dashboard not in Storage mode"),!1;let S=JSON.parse(JSON.stringify(A.config)),T=this._scanDdcCards(S),L=(c=A.current_view)!=null?c:0;console.debug("[ddc:import] persist: found DDC cards",T.map(P=>({view:P.view,path:P.path.join("."),storage_key:P.card.storage_key||null})));let k=(s=e==null?void 0:e.storage_key)!=null?s:null,O=[];n&&O.push(n),k&&O.push(k),this.storageKey&&O.push(this.storageKey),(d=this._config)!=null&&d.storage_key&&O.push(this._config.storage_key);let M=T.filter(P=>P.card.storage_key&&O.includes(P.card.storage_key));if(!M.length){let P=T.filter(R=>R.view===L);P.length===1&&(M=P)}if(!M.length&&T.length===1&&(M=T),!M.length)return console.debug("[ddc:import] persist: no target. Provide a unique storage_key on this card and import again.",{prevKey:n,newKey:k,storageKey:this.storageKey}),!1;let _={type:"custom:drag-and-drop-card",...e};"storage_key"in _&&delete _.storage_key,"storageKey"in _&&delete _.storageKey;for(let P of M){let R=S;for(let $ of P.path)R=R[$];let H=(x=(g=(v=(u=R==null?void 0:R.storage_key)!=null?u:R==null?void 0:R.storageKey)!=null?v:(f=R==null?void 0:R.options)==null?void 0:f.storage_key)!=null?g:(y=R==null?void 0:R.options)==null?void 0:y.storageKey)!=null?x:null,U=!!(n&&k&&H===n&&k!==n);Object.assign(R,_),U?R.storage_key=String(k):H&&(R.storage_key=String(H)),"storageKey"in R&&delete R.storageKey}return console.debug("[ddc:import] persist \u2192 saving",{patched:M.length,keysTried:O,patch}),await A.saveConfig(S),!0}catch(A){return console.warn("[ddc:import] persist error",A),!1}}_queueSave(e="auto"){this._markDirty(e),this.autoSave&&(this._loading||this.editMode&&(this._dbgPush("autosave","Queued",{reason:e,debounce:this.autoSaveDebounce}),clearTimeout(this._saveTimer),this._saveTimer=setTimeout(()=>this._saveLayout(!0),this.autoSaveDebounce)))}async _saveLayout(e=!0){let o=Array.from(this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)")).map(s=>{let d=parseFloat(s.getAttribute("data-x"))||0,u=parseFloat(s.getAttribute("data-y"))||0,f=parseFloat(s.style.width)||s.getBoundingClientRect().width,v=parseFloat(s.style.height)||s.getBoundingClientRect().height,y=parseInt(s.style.zIndex||"1",10),g=this._extractCardConfig(s.firstElementChild),x=s.dataset.tabId||this.defaultTab;return{card:g,position:{x:d,y:u},size:{width:f,height:v},z:y,tabId:x}}),c={version:2,options:this._exportableOptions(),cards:o};try{localStorage.setItem(`ddc_local_${this.storageKey||"default"}`,JSON.stringify(c))}catch{}if(!this.storageKey){e||this._toast("Saved locally (no storage_key set)."),this.__dirty=!1,this._updateApplyBtn();return}try{await this._saveLayoutToBackend(this.storageKey,c),e||this._toast("Layout saved."),this.__dirty=!1,this._updateApplyBtn()}catch(s){console.error("Backend save failed",s),this._dbgPush("save","Backend save failed",{error:String(s)}),e||this._toast("Backend save failed \u2014 kept local copy.")}}async _probeBackend(){this._backendOK=!1;let e=performance.now();try{this._dbgPush("probe","GET /api/dragdrop_storage (list keys)");let n=await this.hass.callApi("get","dragdrop_storage"),o=Math.round(performance.now()-e);this._dbgPush("probe",`OK (${o} ms)`,n),this._backendOK=!!n}catch(n){let o=Math.round(performance.now()-e);this._dbgPush("probe",`FAILED (${o} ms)`,{error:String(n)}),this._backendOK=!1}this._updateStoreBadge()}async _loadLayoutFromBackend(e){let n=`dragdrop_storage/${encodeURIComponent(e)}`,o=performance.now();try{this._dbgPush("load",`GET /api/${n}`);let c=await this.hass.callApi("get",n),s=Math.round(performance.now()-o);return this._dbgPush("load",`OK (${s} ms)`,{bytes:JSON.stringify(c||"").length}),c}catch(c){let s=Math.round(performance.now()-o);return this._dbgPush("load",`FAILED (${s} ms)`,{error:String(c)}),null}}async _saveLayoutToBackend(e,n){let o=`dragdrop_storage/${encodeURIComponent(e)}`,c=JSON.stringify(n).length,s=performance.now();try{this._dbgPush("save",`POST /api/${o}`,{bytes:c});let d=await this.hass.callApi("post",o,n),u=Math.round(performance.now()-s);return this._dbgPush("save",`OK (${u} ms)`,d),d}catch(d){let u=Math.round(performance.now()-s);throw this._dbgPush("save",`FAILED (${u} ms)`,{error:String(d),bytes:c}),d}}async _saveOptionsToBackend(e,n){var o;try{let c=await this._loadLayoutFromBackend(e),s={version:2,...c||{},options:n||((o=this._exportableOptions)==null?void 0:o.call(this))||{}};return c&&Array.isArray(c.cards)&&(s.cards=c.cards),await this._saveLayoutToBackend(e,s),!0}catch(c){return console.warn("[ddc] saveOptionsToBackend failed",c),!1}}_updateStoreBadge(){let e=this.storeBadge;if(!e)return;let n=this._backendOK&&!!this.storageKey;e.textContent=n?"storage: backend - OK":"storage: local. Your Changes are NOT being SAVED. You need to download the Drag and Drop Card backend integration",e.style.background=n?"rgba(76,175,80,.15)":"rgba(255,193,7,.15)",e.style.borderColor=n?"rgba(76,175,80,.45)":"rgba(255,193,7,.45)"}_ensureScreenSaverStyles(){var e;if(!((e=this.shadowRoot)!=null&&e.querySelector("#ddc-screensaver-styles")))try{let n=document.createElement("style");n.id="ddc-screensaver-styles",n.textContent=`
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
    `,n.addEventListener("click",()=>this._deactivateScreenSaver()),n.addEventListener("keydown",()=>this._deactivateScreenSaver()),this.screenSaverOverlay=n,document.body.appendChild(n)}_attachScreensaverListeners(){if(this._screensaverActivityHandler)return;let e=()=>this._resetScreensaverTimer();this._screensaverActivityHandler=e,this._screensaverEvents=["mousemove","mousedown","click","keydown","wheel","scroll","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointercancel"],this._screensaverEvents.forEach(n=>{document.addEventListener(n,e,!0)})}_resetScreensaverTimer(){if(this._screensaverTimer&&(clearTimeout(this._screensaverTimer),this._screensaverTimer=null),!this._shouldUseScreensaver()){this.screensaverActive&&this._deactivateScreenSaver();return}this.screensaverActive&&this._deactivateScreenSaver();let e=Number(this.screenSaverDelay)||5*6e4;this._screensaverTimer=setTimeout(()=>{this._activateScreenSaver()},e)}_activateScreenSaver(){if(this._shouldUseScreensaver()&&(this._ensureScreenSaverOverlay(),!!this.screenSaverOverlay)){this.screensaverActive=!0,this.screenSaverOverlay.classList.add("active");try{this.tabsBar&&(this.__savedTabsDisplay=this.tabsBar.style.display,this.tabsBar.style.display="none")}catch{}this._updateScreenSaverClock(),this._clockInterval&&clearInterval(this._clockInterval),this._clockInterval=setInterval(()=>this._updateScreenSaverClock(),1e3)}}_deactivateScreenSaver(){if(this.screensaverActive){this.screensaverActive=!1,this.screenSaverOverlay&&this.screenSaverOverlay.classList.remove("active"),this._clockInterval&&(clearInterval(this._clockInterval),this._clockInterval=null);try{this.tabsBar&&(this.__savedTabsDisplay!=null?this.tabsBar.style.display=this.__savedTabsDisplay:this.tabsBar.style.display="")}catch{}this._resetScreensaverTimer()}}_updateScreenSaverClock(){let e=this.screenSaverOverlay,n=e==null?void 0:e.querySelector(".screensaver-clock"),o=e==null?void 0:e.querySelector(".screensaver-date"),c=new Date;n&&(n.textContent=c.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"})),o&&(o.textContent=c.toLocaleDateString([],{weekday:"long",year:"numeric",month:"long",day:"numeric"}));try{this._updateScreenSaverCalendar()}catch{}}_updateScreenSaverCalendar(){var A;let e=(A=this.screenSaverOverlay)==null?void 0:A.querySelector(".screensaver-calendar");if(!e)return;let n=new Date,o=void 0,c=n.getFullYear(),s=n.getMonth(),d=n.toLocaleDateString(o,{month:"long"}),u=[];for(let S=0;S<7;S++){let T=new Date(1970,0,4+S);u.push(T.toLocaleDateString(o,{weekday:"short"}))}let f=new Date(c,s,1).getDay(),v=new Date(c,s+1,0).getDate(),y=new Date(c,s,0).getDate(),g=[];for(let S=0;S<f;S++)g.push({day:y-(f-1)+S,other:!0});for(let S=1;S<=v;S++){let T=S===n.getDate();g.push({day:S,today:T,other:!1})}for(;g.length<42;){let S=g.length-f-v+1;g.push({day:S,other:!0})}let x="";x+=`<div class="calendar-header">${d} ${c}</div>`,x+='<div class="calendar-grid">';for(let S=0;S<7;S++)x+=`<div class="header">${u[S]}</div>`;g.forEach((S,T)=>{let L=[];S.other&&L.push("other-month"),S.today&&L.push("today");let k=T%7;(k===0||k===6)&&L.push("weekend"),x+=`<div class="${L.join(" ")}">${S.day}</div>`}),x+="</div>",e.innerHTML=x}_updateScreensaverSettings(){this.screenSaverEnabled?(this._ensureScreenSaverOverlay(),this._attachScreensaverListeners(),this._resetScreensaverTimer()):(this._screensaverTimer&&(clearTimeout(this._screensaverTimer),this._screensaverTimer=null),this.screensaverActive&&this._deactivateScreenSaver())}_shouldUseScreensaver(){try{if(!this.screenSaverEnabled||this.editMode||typeof this._isInHaEditorPreview=="function"&&this._isInHaEditorPreview()||!this.isConnected)return!1}catch{return!1}return!0}_toast(e){let n=new Event("hass-notification");n.detail={message:e},window.dispatchEvent(n)}_huiRoot(){var e,n,o,c,s,d;try{let u=document.querySelector("home-assistant"),f=(e=u==null?void 0:u.shadowRoot)==null?void 0:e.querySelector("home-assistant-main"),v=((n=f==null?void 0:f.shadowRoot)==null?void 0:n.querySelector("ha-drawer"))||f,y=((o=v==null?void 0:v.shadowRoot)==null?void 0:o.querySelector("partial-panel-resolver"))||v,g=((c=y==null?void 0:y.shadowRoot)==null?void 0:c.querySelector("ha-panel-lovelace"))||((s=v==null?void 0:v.shadowRoot)==null?void 0:s.querySelector("ha-panel-lovelace"));return((d=g==null?void 0:g.shadowRoot)==null?void 0:d.querySelector("hui-root"))||null}catch{return null}}getCardSize(){return 3}};if(!customElements.get("drag-and-drop-card")){if(Object.assign(ei.prototype,{_updateGridButtonsVisibility(){var o,c,s,d;let t=!!this.editMode,e=Number((d=(s=(o=this._config)==null?void 0:o.grid)!=null?s:(c=this._options)==null?void 0:c.grid)!=null?d:10)>=10,n=this.cardContainer;if(!t||!e){this._destroyGridCanvas(),n&&n.classList.toggle("grid-on",t);return}this._buildOrUpdateGridCanvas(),n&&n.classList.remove("grid-on")},_requestGridButtonsUpdateSoon(){clearTimeout(this._gridLayoutT),this._gridLayoutT=setTimeout(()=>this._updateGridButtonsVisibility(),50)},_buildOrUpdateGridCanvas(){var v,y,g,x;let t=this.cardContainer;if(!t||!t.isConnected)return;let p=Number((x=(g=(v=this._config)==null?void 0:v.grid)!=null?g:(y=this._options)==null?void 0:y.grid)!=null?x:10);if(this._gridCellSize=p,!this._gridCanvas){let A=document.createElement("canvas");A.className="ddc-grid-canvas",t.insertBefore(A,t.firstChild||null),this._gridCanvas=A,this._gridCtx=A.getContext("2d"),A.addEventListener("pointerdown",S=>this._onGridPointerDown(S),{passive:!0}),A.addEventListener("pointermove",S=>this._onGridPointerMove(S),{passive:!0}),A.addEventListener("pointerup",S=>this._onGridPointerUp(S),{passive:!0}),A.addEventListener("pointercancel",S=>this._onGridPointerCancel(S),{passive:!0}),A.addEventListener("lostpointercapture",S=>this._onGridPointerCancel(S),{passive:!0})}let e=t.getBoundingClientRect(),{sx:n,sy:o}=this._getContainerScale_(),c=n&&isFinite(n)?1/n:1,s=o&&isFinite(o)?1/o:1,d=e.width*c,u=e.height*s,f=Math.max(1,window.devicePixelRatio||1);this._gridCanvas.width=Math.max(1,Math.round(d*f)),this._gridCanvas.height=Math.max(1,Math.round(u*f)),this._gridCanvas.style.width=d+"px",this._gridCanvas.style.height=u+"px",this._gridCols=Math.max(1,Math.ceil(d/p)),this._gridRows=Math.max(1,Math.ceil(u/p)),this._buildGridTile_(p,f),this._markGridDirty()},_destroyGridCanvas(){var t;cancelAnimationFrame(this._gridRAF),this._gridRAF=0,(t=this._gridCanvas)!=null&&t.parentElement&&this._gridCanvas.parentElement.removeChild(this._gridCanvas),this._gridCanvas=null,this._gridCtx=null,this._gridTile=null,this._gridDown=!1,this._gridHoverCol=this._gridHoverRow=-1},_buildGridTile_(t,p){let e=Math.min(10,t*.25),n=Math.max(1,Math.round(t*p)),o=n,c=document.createElement("canvas");c.width=n,c.height=o;let s=c.getContext("2d");s.scale(p,p);let d=0,u=0,f=t,v=t;s.clearRect(0,0,n,o),s.beginPath();let y=Math.min(e,f/2,v/2);s.moveTo(d+y,u),s.arcTo(d+f,u,d+f,u+v,y),s.arcTo(d+f,u+v,d,u+v,y),s.arcTo(d,u+v,d,u,y),s.arcTo(d,u,d+f,u,y),s.closePath(),s.fillStyle="rgba(255,255,255,0.08)",s.fill(),s.strokeStyle="rgba(255,255,255,0.12)",s.lineWidth=1,s.stroke(),this._gridTile=c},_markGridDirty(){this._gridDirty||(this._gridDirty=!0,this._gridRAF=requestAnimationFrame(()=>{this._gridDirty=!1,this._renderGridCanvas_()}))},_renderGridCanvas_(){let t=this._gridCanvas;if(!t)return;let p=this._gridCtx,e=Math.max(1,window.devicePixelRatio||1),n=this._gridCellSize||10;if(p.clearRect(0,0,t.width,t.height),this._gridTile){let o=p.createPattern(this._gridTile,"repeat");p.save(),p.scale(e,e),p.fillStyle=o,p.fillRect(0,0,t.width/e,t.height/e),p.restore()}if(this._gridHoverCol>=0&&this._gridHoverRow>=0){p.save(),p.scale(e,e),p.fillStyle="rgba(0, 160, 255, 0.30)",p.strokeStyle="rgba(0, 160, 255, 0.60)",p.lineWidth=1;let o=this._gridHoverCol*n,c=this._gridHoverRow*n,s=n,d=n;this._roundRect_(p,o,c,s,d,Math.min(10,n*.25)),p.fill(),p.stroke(),p.restore()}if(this._gridDown&&this._gridStartCol>=0&&this._gridStartRow>=0&&this._gridCurrCol>=0&&this._gridCurrRow>=0){let o=Math.min(this._gridStartCol,this._gridCurrCol),c=Math.max(this._gridStartCol,this._gridCurrCol),s=Math.min(this._gridStartRow,this._gridCurrRow),d=Math.max(this._gridStartRow,this._gridCurrRow),u=o*n,f=s*n,v=(c-o+1)*n,y=(d-s+1)*n;p.save(),p.scale(e,e),p.fillStyle="rgba(0, 160, 255, 0.22)",p.strokeStyle="rgba(0, 160, 255, 0.45)",p.lineWidth=2,this._roundRect_(p,u,f,v,y,Math.min(12,n*.3)),p.fill(),p.stroke(),p.restore()}},_roundRect_(t,p,e,n,o,c){let s=Math.min(c,n/2,o/2);t.beginPath(),t.moveTo(p+s,e),t.arcTo(p+n,e,p+n,e+o,s),t.arcTo(p+n,e+o,p,e+o,s),t.arcTo(p,e+o,p,e,s),t.arcTo(p,e,p+n,e,s),t.closePath()},_emptySpaceAt_(t,p){let e=document.elementFromPoint(t,p);return!e||!e.closest||!e.closest(".card-wrapper, .resize-handle, .ddc-chip, .shield")},_locToCell_(t,p){let e=this._gridCanvas;if(!e)return{col:-1,row:-1};let n=e.getBoundingClientRect(),{sx:o,sy:c}=this._getContainerScale_(),s=(t-n.left)/(o||1),d=(p-n.top)/(c||1),u=this._gridCellSize||10,f=Math.min(this._gridCols-1,Math.max(0,Math.floor(s/u))),v=Math.min(this._gridRows-1,Math.max(0,Math.floor(d/u)));return{col:f,row:v}},_onGridPointerDown(t){var n,o;if(!this._emptySpaceAt_(t.clientX,t.clientY))return;let{col:p,row:e}=this._locToCell_(t.clientX,t.clientY);this._gridDown=!0,this._gridStartCol=p,this._gridStartRow=e,this._gridCurrCol=p,this._gridCurrRow=e,this._markGridDirty(),(o=(n=t.currentTarget).setPointerCapture)==null||o.call(n,t.pointerId)},_onGridPointerMove(t){let{col:p,row:e}=this._locToCell_(t.clientX,t.clientY);if((p!==this._gridHoverCol||e!==this._gridHoverRow)&&(this._gridHoverCol=p,this._gridHoverRow=e,this._markGridDirty()),!this._gridDown)return;let{col:n,row:o}=this._locToCell_(t.clientX,t.clientY);(n!==this._gridCurrCol||o!==this._gridCurrRow)&&(this._gridCurrCol=n,this._gridCurrRow=o,this._markGridDirty())},async _onGridPointerUp(t){if(!this._gridDown)return;this._gridDown=!1;let p=Math.min(this._gridStartCol,this._gridCurrCol),e=Math.max(this._gridStartCol,this._gridCurrCol),n=Math.min(this._gridStartRow,this._gridCurrRow),o=Math.max(this._gridStartRow,this._gridCurrRow);if((e-p+1)*(o-n+1)<2){this._markGridDirty();return}let s=this._gridCellSize||10,d=p*s,u=n*s,f=(e-p+1)*s,v=(o-n+1)*s;this._markGridDirty(),this._promptNewCardForRect_({x:d,y:u,w:f,h:v})},_onGridPointerCancel(){this._gridDown=!1,this._markGridDirty()},_installGridObservers_(){try{this.__gridRO&&this.__gridRO.disconnect(),this.__gridRO=new ResizeObserver(()=>this._requestGridButtonsUpdateSoon()),this.cardContainer&&this.__gridRO.observe(this.cardContainer)}catch{}clearInterval(this.__gridPollT),this.__gridPrevEditMode=void 0,this.__gridPollT=setInterval(()=>{let t=!!this.editMode;t!==this.__gridPrevEditMode&&(this.__gridPrevEditMode=t,this._updateGridButtonsVisibility())},300)},_uninstallGridObservers_(){var t,p;try{(p=(t=this.__gridRO)==null?void 0:t.disconnect)==null||p.call(t)}catch{}this.__gridRO=null,clearInterval(this.__gridPollT),this.__gridPollT=null},_gridRectToCardRect_({x:t,y:p,w:e,h:n}){let o=this.cardContainer,c=this._gridCanvas;if(!o||!c)return{x:t,y:p,w:e,h:n};let s=getComputedStyle(o),d=parseFloat(s.paddingLeft)||0,u=parseFloat(s.paddingTop)||0,f=parseFloat(s.borderLeftWidth)||0,v=parseFloat(s.borderTopWidth)||0,y=o.scrollLeft||0,g=o.scrollTop||0,x=t+d+f+y,A=p+u+v+g;return{x,y:A,w:e,h:n}},_getContainerScale_(){let t=this.cardContainer;if(!t)return{sx:1,sy:1};let p=getComputedStyle(t).transform;if(!p||p==="none")return{sx:1,sy:1};let e=p.match(/matrix\(([^)]+)\)/);if(e){let[o,,,c]=e[1].split(",").map(s=>parseFloat(s.trim()));return{sx:isFinite(o)&&o?o:1,sy:isFinite(c)&&c?c:1}}let n=p.match(/matrix3d\(([^)]+)\)/);if(n){let o=n[1].split(",").map(c=>parseFloat(c.trim()));return{sx:isFinite(o[0])&&o[0]?o[0]:1,sy:isFinite(o[5])&&o[5]?o[5]:1}}return{sx:1,sy:1}},_canvasRectToContainerRect_({x:t,y:p,w:e,h:n}){let o=this.cardContainer,c=this._gridCanvas;if(!o||!c)return{x:t,y:p,w:e,h:n};let s=getComputedStyle(o),d=parseFloat(s.paddingLeft)||0,u=parseFloat(s.paddingTop)||0,f=parseFloat(s.borderLeftWidth)||0,v=parseFloat(s.borderTopWidth)||0,{sx:y,sy:g}=this._getContainerScale_(),x=c.getBoundingClientRect(),A=o.getBoundingClientRect(),S=x.left+t,T=x.top+p,L=S-A.left,k=T-A.top;L-=d+f,k-=u+v;let O=y?1/y:1,M=g?1/g:1,_=L*O,P=k*M,R=e*O,H=n*M;return{x:_,y:P,w:R,h:H}},async _promptNewCardForRect_({x:t,y:p,w:e,h:n}){var o,c,s,d;try{let u=this._gridCellSize||Number((d=(s=(o=this._config)==null?void 0:o.grid)!=null?s:(c=this._options)==null?void 0:c.grid)!=null?d:10),f=T=>Math.round(T/u)*u,v=f(t),y=f(p),g=Math.max(u,f(e)),x=Math.max(u,f(n)),A;try{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&typeof this._canvasRectToContainerRect_=="function"?A=this._canvasRectToContainerRect_({x:v,y,w:g,h:x}):typeof this._gridRectToCardRect_=="function"?A=this._gridRectToCardRect_({x:v,y,w:g,h:x}):A={x:v,y,w:g,h:x}}catch{A={x:v,y,w:g,h:x}}let S={x:Math.round(A.x),y:Math.round(A.y),w:Math.round(A.w),h:Math.round(A.h)};this.__pendingAddRect=S,await this._openSmartPicker("add",null,null)}catch(u){console.warn("[ddc] _promptNewCardForRect_ failed",u)}}}),!ei.prototype.__addPickedPatched){let t=ei.prototype._addPickedCardToLayout;ei.prototype._addPickedCardToLayout=async function(p){var e,n,o,c,s,d,u,f;if(this&&this.__pendingAddRect){let{x:v,y,w:g,h:x}=this.__pendingAddRect;this.__pendingAddRect=null;try{(e=this._hideEmptyPlaceholder)==null||e.call(this)}catch{}let A=await this._createCard(p),S=this._makeWrapper(A);this._setCardPosition(S,Math.round(v),Math.round(y)),S.style.width=`${Math.round(g)}px`,S.style.height=`${Math.round(x)}px`,S.style.zIndex=String(this._highestZ()+1),S.dataset.tabId=this._normalizeTabId(this.activeTab||this.defaultTab),this.cardContainer.appendChild(S);try{(n=this._rebuildOnce)==null||n.call(this,S.firstElementChild)}catch{}try{(o=this._initCardInteract)==null||o.call(this,S)}catch{}try{(c=this._resizeContainer)==null||c.call(this)}catch{}try{(s=this._queueSave)==null||s.call(this,"add")}catch{}try{(d=this._toast)==null||d.call(this,"Card added to selection.")}catch{}try{(u=this._syncEmptyStateUI)==null||u.call(this)}catch{}try{(f=this._applyVisibility_)==null||f.call(this)}catch{}requestAnimationFrame(()=>{var T,L,k;try{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(T=this._applyAutoFillNoScale)==null||T.call(this):this.autoResizeCards&&((L=this._applyAutoScale)==null||L.call(this)),(k=this._requestGridButtonsUpdateSoon)==null||k.call(this)}catch{}});return}return await t.call(this,p)},ei.prototype.__addPickedPatched=!0}customElements.define("drag-and-drop-card",ei);try{Array.isArray(window.customCards)||(window.customCards=[]),window.customCards.some(p=>p&&typeof p.type=="string"&&p.type.toLowerCase()==="custom:drag-and-drop-card")||window.customCards.push({type:"drag-and-drop-card",name:"Drag & Drop Card",description:"Flexible grid layout card with drag\u2011and\u2011drop editing.",preview:!1,icon:"mdi:cursor-move"})}catch(t){console.warn("[drag-and-drop-card] Failed to register card in customCards",t)}}(()=>{let t=new WeakSet,p=s=>{try{if(!(s instanceof Element))return!1;let d=s.localName||"";return d?!!(d==="ha-card"||d.endsWith("-card")):!1}catch{return!1}},e=s=>{try{if(!s||t.has(s))return;t.add(s),s.dispatchEvent(new Event("ll-rebuild",{bubbles:!0,composed:!0}))}catch{}},n=s=>{var d,u;try{if(!s)return;s instanceof Element&&p(s)&&e(s);let f=(u=(d=(s instanceof ShadowRoot,s)).querySelectorAll)==null?void 0:u.call(d,"*");if(!f)return;for(let v of f){p(v)&&e(v);let y=v.shadowRoot;if(y)try{n(y)}catch{}}}catch{}},o=s=>{try{if(!s||s.__ddcCardModIntegrated)return;s.__ddcCardModIntegrated=!0;let d=s.shadowRoot||s;n(d);let u=new MutationObserver(f=>{for(let v of f)if(!(!v.addedNodes||!v.addedNodes.length))for(let y of v.addedNodes)(y instanceof Element||y instanceof ShadowRoot)&&n(y)});u.observe(d,{childList:!0,subtree:!0}),s.__ddcCardModIntegratedObserver=u,setTimeout(()=>{try{n(d)}catch{}},250),setTimeout(()=>{try{n(d)}catch{}},1e3)}catch{}},c=()=>{try{document.querySelectorAll("drag-and-drop-card").forEach(o)}catch{}};if(window.customElements&&window.customElements.whenDefined)window.customElements.whenDefined("drag-and-drop-card").then(()=>{c();let s=window.customElements.get("drag-and-drop-card");if(s&&s.prototype){let u=s.prototype.connectedCallback;s.prototype.connectedCallback=function(){try{u&&u.call(this)}finally{o(this)}}}new MutationObserver(()=>c()).observe(document.documentElement,{childList:!0,subtree:!0})});else{let s=setInterval(c,1e3);setTimeout(()=>clearInterval(s),1e4)}})();(function(){let t="drag-and-drop-card",p=customElements.get(t);if(!p){console.warn("[ddc:augment] Could not find custom element",t);return}function e(){var S,T;try{let L=0,k=this;for(;k&&L++<20;){let _=(S=k.getRootNode)==null?void 0:S.call(k),P=_==null?void 0:_.host;if((P==null?void 0:P.tagName)==="HUI-ROOT")return P.lovelace;k=P||k.parentElement}let O=new Set,M=[document];for(;M.length;){let _=M.shift();if(!(!_||O.has(_))){if(O.add(_),((T=_.host)==null?void 0:T.tagName)==="HUI-ROOT")return _.host.lovelace;if(_.tagName==="HUI-ROOT")return _.lovelace;if(_.shadowRoot&&M.push(_.shadowRoot),_.children)for(let P of _.children)M.push(P)}}}catch{}}function n(S){let T=[],L=(O,M,_)=>{(_==null?void 0:_.type)==="custom:drag-and-drop-card"&&T.push({view:O,path:[...M],card:_})},k=(O,M,_)=>{if(O){if(Array.isArray(O)){O.forEach((P,R)=>k(P,M,_.concat(R)));return}if(typeof O=="object"){"type"in O&&L(M,_,O);for(let[P,R]of Object.entries(O))P==="views"&&Array.isArray(R)?R.forEach((H,U)=>k(H,U,["views",U])):(Array.isArray(R)||R&&typeof R=="object")&&k(R,M,_.concat(P))}}};return k(S,-1,[]),T}function o(S,T,L){let k=new Date().toISOString().replace(/[:.]/g,"-"),O=T.map(_=>{let P=S;for(let R of _.path)P=P[R];return{view:_.view,path:_.path,storage_key:P&&P.storage_key||null,before:P,patch:L}}),M={kind:"ddc-import-backup",created_at:k,count:O.length,items:O};try{let _=`ddc.backup.${k}`;localStorage.setItem(_,JSON.stringify(M));let P=Object.keys(localStorage).filter(R=>R.startsWith("ddc.backup.")).sort().reverse();for(let R of P.slice(10))localStorage.removeItem(R)}catch{}return{name:`ddc_backup_${k}.json`,data:M}}function c(S,T){try{let L=new Blob([JSON.stringify(T,null,2)],{type:"application/json"}),k=URL.createObjectURL(L),O=document.createElement("a");O.href=k,O.download=S,document.body.appendChild(O),O.click(),O.remove(),setTimeout(()=>URL.revokeObjectURL(k),1500)}catch(L){console.warn("[ddc:backup] download failed",L)}}function s(S){if(S)try{let T="ddc.recent.keys",L=JSON.parse(localStorage.getItem(T)||"[]");L.includes(S)||L.unshift(S),localStorage.setItem(T,JSON.stringify(L.slice(0,20)))}catch{}}function d(){try{return JSON.parse(localStorage.getItem("ddc.recent.keys")||"[]")}catch{return[]}}function u(){var T,L;let S=new Set;try{let k=Object.keys(localStorage).filter(O=>O.startsWith("ddc.backup.")).sort().reverse();for(let O of k)try{let M=JSON.parse(localStorage.getItem(O)||"null");if(M&&M.items)for(let _ of M.items){let P=((T=_==null?void 0:_.before)==null?void 0:T.storage_key)||((L=_==null?void 0:_.patch)==null?void 0:L.storage_key);P&&S.add(P)}}catch{}}catch{}return Array.from(S)}async function f(S,{forceTargetKey:T=null,onlyThisCard:L=!1,prevKey:k,noDownload:O}={}){var le,Ke,pe,ze,Ce;let M=((le=this._getLovelace)==null?void 0:le.call(this))||e.call(this);if(!M)return console.debug("[ddc:import] persist: no lovelace root"),!1;if(typeof M.saveConfig!="function")return console.debug("[ddc:import] persist: dashboard not in Storage mode"),!1;let _=ke=>typeof ke=="string"?ke.trim():null,P=_(T)||_((Ke=this==null?void 0:this._config)==null?void 0:Ke.storage_key)||_(this==null?void 0:this.storageKey)||_(k);if(!P)return console.warn("[ddc:import] persist: missing target storage_key on this card; aborting"),!1;let R=JSON.parse(JSON.stringify(M.config)),H=(this._scanDdcCards||n)(R);console.debug("[ddc:import] persist: found DDC cards",H.map(ke=>({view:ke.view,path:ke.path.join("."),storage_key:ke.card&&(ke.card.storage_key||ke.card.storageKey)||null})));let U=H.filter(ke=>{var qe,Qe,ct,dt,ot,ae,ut,st,Le;return((Le=(ae=(ct=_((qe=ke.card)==null?void 0:qe.storage_key))!=null?ct:_((Qe=ke.card)==null?void 0:Qe.storageKey))!=null?ae:_((ot=(dt=ke.card)==null?void 0:dt.options)==null?void 0:ot.storage_key))!=null?Le:_((st=(ut=ke.card)==null?void 0:ut.options)==null?void 0:st.storageKey))===P});if(U.length!==1)return console.warn("[ddc:import] persist: expected exactly one target with key, got",U.length,{myKey:P}),!1;let $={type:"custom:drag-and-drop-card",...S||{}};"storage_key"in $&&delete $.storage_key,"storageKey"in $&&delete $.storageKey,$!=null&&$.options&&("storage_key"in $.options&&delete $.options.storage_key,"storageKey"in $.options&&delete $.options.storageKey);let re=Array.isArray($.cards)?$.cards:null;delete $.cards;try{let ke=o==null?void 0:o(M.config,U,$);ke&&(console.debug("[ddc:import] backup created",{file:ke.name,items:(pe=ke.data)==null?void 0:pe.count}),!O&&typeof c=="function"&&c(ke.name,ke.data))}catch(ke){console.debug("[ddc:import] backup skipped/error:",(ke==null?void 0:ke.message)||ke)}let F=U[0],V=R;for(let ke of F.path)V=V[ke];let K=(Ce=(ze=_(V==null?void 0:V.storage_key))!=null?ze:_(V==null?void 0:V.storageKey))!=null?Ce:null;return Object.assign(V,$),K?V.storage_key=K:V.storage_key=P,"storageKey"in V&&delete V.storageKey,console.debug("[ddc:import] persist \u2192 saving",{patched:1,into_key:V.storage_key,ignored_file_key:_(S==null?void 0:S.storage_key)||_(S==null?void 0:S.storageKey)||null}),await M.saveConfig(R),{yamlSaved:!0,cardsForStorage:re}}async function v(){var L;let S=k=>{if(!k)return[];if(Array.isArray(k))return k;if(Array.isArray(k==null?void 0:k.keys))return k.keys;if(Array.isArray(k==null?void 0:k.dashboards))return k.dashboards;if(Array.isArray(k==null?void 0:k.entries))return k.entries.map(O=>O.key||O.id||O.name).filter(Boolean);if(Array.isArray(k==null?void 0:k.items))return k.items.map(O=>O.key||O.id||O.name).filter(Boolean);if(typeof k=="object"){for(let O of Object.values(k))if(Array.isArray(O)&&O.every(M=>typeof M=="string"))return O}return[]};try{if((L=this==null?void 0:this.hass)!=null&&L.callApi){let k=await this.hass.callApi("get","dragdrop_storage"),O=S(k);if(O.length)return O}}catch(k){console.debug("[ddc:switcher] hass.callApi dragdrop_storage failed",k)}let T=["/api/dragdrop_storage","/api/dragdrop_storage/keys","/api/dragdrop_storage/list","/api/dragdrop_storage?all=1"];for(let k of T)try{let M=await(await fetch(k,{cache:"no-store"})).json(),_=S(M);if(_.length)return _}catch{}return[]}async function y(S){let T=M=>{if(!M)return null;if(M.options||M.cards)return M;if(typeof M.design=="object")return M.design;if(typeof M.payload=="object")return M.payload;try{if(typeof M=="string")return JSON.parse(M)}catch{}return null},L=async(M,_,P)=>{var R;try{if((R=this==null?void 0:this.hass)!=null&&R.callApi){let H=await this.hass.callApi(M,_,P),U=T(H);if(U)return U}}catch{}return null},k=async M=>{try{let _=await fetch(M,{cache:"no-store"}),P=_.headers.get("content-type")||"";if(P.includes("application/json")||P.includes("text/plain")){let R=await _.json().catch(()=>null)||await _.text().catch(()=>null),H=T(R);if(H)return H}}catch{}return null},O=encodeURIComponent(S);return await(L("get",`dragdrop_storage/${O}`)||k(`/api/dragdrop_storage/${O}`)||k(`/api/dragdrop_storage?key=${O}`)||L("post","dragdrop_storage/get",{key:S})||null)}async function g(S,{source:T="switcher",newKey:L=null}={}){var M,_,P,R,H,U,$,re,F,V,K,le,Ke,pe,ze,Ce,ke,je,qe,Qe,ct,dt,ot,ae,ut,st;if(!S||typeof S!="object")throw new Error("Invalid design payload");let k=this.storageKey||((M=this._config)==null?void 0:M.storage_key)||null;try{(_=this._dbgInit)==null||_.call(this),(P=this._dbgPush)==null||P.call(this,"import","Begin import (programmatic)",{source:T,newKey:L})}catch{}if(S.options){let{storage_key:Le,...oe}=S.options;(R=this._applyImportedOptions)==null||R.call(this,oe,!0)}else typeof S.grid=="number"&&((H=this._applyImportedOptions)==null||H.call(this,{grid:S.grid},!0));let O=L||((U=S==null?void 0:S.options)==null?void 0:U.storage_key)||k;if(O){this.storageKey=O,this._config={...this._config||{},storage_key:O};try{($=this._syncEditorsStorageKey)==null||$.call(this)}catch{}}try{let Le=(re=S.options)!=null?re:typeof S.grid=="number"?{grid:S.grid}:{};await((F=this._persistOptionsToYaml)==null?void 0:F.call(this,{...Le,storage_key:O},{prevKey:k,noDownload:T==="switcher"}))}catch(Le){console.warn("[ddc:apply] persist failed",Le)}try{if(this.cardContainer.innerHTML="",Array.isArray(S.cards)&&S.cards.length)for(let Le of S.cards)if(!(Le!=null&&Le.card)||typeof Le.card=="object"&&Object.keys(Le.card).length===0){let oe=(pe=this._makePlaceholderAt)==null?void 0:pe.call(this,((V=Le.position)==null?void 0:V.x)||0,((K=Le.position)==null?void 0:K.y)||0,((le=Le.size)==null?void 0:le.width)||200,((Ke=Le.size)==null?void 0:Ke.height)||200);oe&&this.cardContainer.appendChild(oe)}else{let oe=await this._createCard(Le.card),Ye=this._makeWrapper(oe);(ke=this._setCardPosition)==null||ke.call(this,Ye,((ze=Le.position)==null?void 0:ze.x)||0,((Ce=Le.position)==null?void 0:Ce.y)||0),Ye.style.width=`${((je=Le.size)==null?void 0:je.width)||140}px`,Ye.style.height=`${((qe=Le.size)==null?void 0:qe.height)||100}px`,Le.z!=null&&(Ye.style.zIndex=String(Le.z)),this.cardContainer.appendChild(Ye);try{(Qe=this._rebuildOnce)==null||Qe.call(this,Ye.firstElementChild)}catch{}(ct=this._initCardInteract)==null||ct.call(this,Ye)}else(dt=this._showEmptyPlaceholder)==null||dt.call(this);(ot=this._resizeContainer)==null||ot.call(this),(ae=this._markDirty)==null||ae.call(this,"import"),(ut=this._toast)==null||ut.call(this,T==="switcher"?`Loaded layout "${O}"`:"Design imported")}catch(Le){console.error("[ddc:apply] rebuild failed",Le),(st=this._toast)==null||st.call(this,"Import failed during rebuild.")}}function x(){var S,T;try{let L=this.shadowRoot||this.renderRoot||this,k=L.querySelector(".ddc-switcher-inline");if(!k)return;let O=((S=this._getLovelace)==null?void 0:S.call(this))||e.call(this),M=!1;try{let _=(T=L.getRootNode&&L.getRootNode())==null?void 0:T.host;M=!!(O&&(O.editMode===!0||_&&_.editMode===!0))}catch{}k.style.display=M?"inline-flex":"none"}catch{}}function A(){try{if(this._ddcSwitcherInstalled)return;let T=(this.shadowRoot||this.renderRoot||this).querySelector(".toolbar");if(!T)return;let L=document.createElement("div");L.className="ddc-switcher-inline",Object.assign(L.style,{display:"inline-flex",gap:"6px",alignItems:"center",marginLeft:"auto"});let k=document.createElement("span");k.textContent="Layout:",k.style.fontSize="12px",k.style.opacity="0.8";let O=document.createElement("select");Object.assign(O.style,{fontSize:"12px",padding:"4px 6px",borderRadius:"8px",border:"1px solid var(--divider-color, #999)",background:"var(--card-background-color, #fff)"}),O.title="Select stored layout (storage_key)",O.id="ddcKeySelect";let M=document.createElement("button");M.className="btn secondary",M.type="button",M.style.padding="6px 10px",M.innerHTML='<ha-icon icon="mdi:refresh"></ha-icon><span style="margin-left:6px">Refresh</span>',L.appendChild(k),L.appendChild(O),L.appendChild(M),T.appendChild(L),this._ddcSwitcherInstalled=!0;let _=async()=>{let P=this.storageKey||this._config&&this._config.storage_key||"",R=await v.call(this),H=u(),U=d(),$=le=>Array.from(new Set(le.filter(Boolean))),re=$(R),F=$(H),V=$(U);if(O.innerHTML="",P&&!re.includes(P)&&!F.includes(P)&&!V.includes(P)){let le=document.createElement("option");le.value=P,le.textContent=`${P} (current)`,le.selected=!0,O.appendChild(le)}let K=(le,Ke)=>{if(!Ke.length)return;let pe=document.createElement("optgroup");pe.label=le,Ke.forEach(ze=>{let Ce=document.createElement("option");Ce.value=ze,Ce.textContent=ze,ze===P&&(Ce.selected=!0),pe.appendChild(Ce)}),O.appendChild(pe)};if(K("Server",re),K("Backups",F),K("Recent",V),!O.children.length){let le=document.createElement("option");le.value="",le.textContent="\u2014 none \u2014",le.selected=!0,O.appendChild(le)}x.call(this)};_(),M.addEventListener("click",_),O.addEventListener("change",async P=>{var H,U,$,re,F,V,K,le;let R=String(P.target.value||"");if(R&&!this._ddcLoadingFromKey){this._ddcLoadingFromKey=!0;try{let Ke=await y.call(this,R);if(!Ke){(H=this._toast)==null||H.call(this,`No layout found for "${R}"`);return}await g.call(this,Ke,{source:"switcher",newKey:R}),(U=this._resizeContainer)==null||U.call(this),($=this._toast)==null||$.call(this,`Loaded layout "${R}"`);let pe=String(((re=this._config)==null?void 0:re.storage_key)||this.storageKey||""),ze=!1;try{let Ce=pe?{forceTargetKey:pe,noDownload:!0}:{noDownload:!0};ze=await this._persistOptionsToYaml({storage_key:R},Ce)}catch(Ce){console.warn("[ddc:switcher] failed to persist storage_key to YAML",Ce),(F=this._toast)==null||F.call(this,"Failed to persist selected layout. Keeping current.");return}if(this.storageKey=R,this._config&&(this._config.storage_key=R),!ze){console.warn("[ddc:switcher] persist returned false (likely YAML mode). Skipping reload.");return}try{this._saveTimer&&clearTimeout(this._saveTimer),await this._saveLayout(!0)}catch(Ce){console.warn("[ddc:switcher] saveLayout failed",Ce),(V=this._markDirty)==null||V.call(this,"switcher"),(K=this._toast)==null||K.call(this,"Layout loaded \u2014 click Apply to save.");return}window.location.reload(),window.location.reload()}catch(Ke){console.warn("[ddc:switcher] load/apply failed",Ke),(le=this._toast)==null||le.call(this,"Failed to load layout.")}finally{this._ddcLoadingFromKey=!1}}}),this._ddcVisTimer&&clearInterval(this._ddcVisTimer),this._ddcVisTimer=setInterval(()=>x.call(this),800),x.call(this)}catch(S){console.warn("[ddc:switcher] inline install failed",S)}}p.prototype._getLovelace||(p.prototype._getLovelace=e),p.prototype._scanDdcCards||(p.prototype._scanDdcCards=n),p.prototype._persistOptionsToYaml=f,p.prototype._applyDesignObject||(p.prototype._applyDesignObject=g);try{let S=Object.getOwnPropertyDescriptor(p.prototype,"hass");if(S&&(S.set||S.get)){let T=S.set;Object.defineProperty(p.prototype,"hass",{configurable:!0,enumerable:!0,set(L){T&&T.call(this,L);try{A.call(this)}catch{}},get:S.get||function(){return this._hass}})}else if(typeof p.prototype.setHass=="function"){let T=p.prototype.setHass;p.prototype.setHass=function(L){T&&T.call(this,L);try{A.call(this)}catch{}}}else{let T=p.prototype.updated||p.prototype.firstUpdated;p.prototype.updated=function(...L){T&&T.apply(this,L);try{A.call(this)}catch{}}}}catch(S){console.warn("[ddc:switcher] wrap hass setter failed",S)}})();
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
