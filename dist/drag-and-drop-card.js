var Ma=Object.create;var gr=Object.defineProperty;var Pa=Object.getOwnPropertyDescriptor;var La=Object.getOwnPropertyNames;var Ra=Object.getPrototypeOf,Ia=Object.prototype.hasOwnProperty;var Da=(e,p,t)=>p in e?gr(e,p,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[p]=t;var Fa=(e,p)=>()=>(p||e((p={exports:{}}).exports,p),p.exports);var Ba=(e,p,t,n)=>{if(p&&typeof p=="object"||typeof p=="function")for(let o of La(p))!Ia.call(e,o)&&o!==t&&gr(e,o,{get:()=>p[o],enumerable:!(n=Pa(p,o))||n.enumerable});return e};var Na=(e,p,t)=>(t=e!=null?Ma(Ra(e)):{},Ba(p||!e||!e.__esModule?gr(t,"default",{value:e,enumerable:!0}):t,e));var ht=(e,p,t)=>Da(e,typeof p!="symbol"?p+"":p,t);var Wr=Fa((mr,ni)=>{(function(e,p){typeof mr=="object"&&typeof ni!="undefined"?ni.exports=p():typeof define=="function"&&define.amd?define(p):(e=typeof globalThis!="undefined"?globalThis:e||self).interact=p()})(mr,(function(){"use strict";function e(r,i){var a=Object.keys(r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(r);i&&(l=l.filter((function(h){return Object.getOwnPropertyDescriptor(r,h).enumerable}))),a.push.apply(a,l)}return a}function p(r){for(var i=1;i<arguments.length;i++){var a=arguments[i]!=null?arguments[i]:{};i%2?e(Object(a),!0).forEach((function(l){s(r,l,a[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):e(Object(a)).forEach((function(l){Object.defineProperty(r,l,Object.getOwnPropertyDescriptor(a,l))}))}return r}function t(r){return t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},t(r)}function n(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")}function o(r,i){for(var a=0;a<i.length;a++){var l=i[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(r,x(l.key),l)}}function c(r,i,a){return i&&o(r.prototype,i),a&&o(r,a),Object.defineProperty(r,"prototype",{writable:!1}),r}function s(r,i,a){return(i=x(i))in r?Object.defineProperty(r,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[i]=a,r}function d(r,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(i&&i.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),i&&f(r,i)}function u(r){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},u(r)}function f(r,i){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,l){return a.__proto__=l,a},f(r,i)}function v(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function m(r){var i=(function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch{return!1}})();return function(){var a,l=u(r);if(i){var h=u(this).constructor;a=Reflect.construct(l,arguments,h)}else a=l.apply(this,arguments);return(function(g,b){if(b&&(typeof b=="object"||typeof b=="function"))return b;if(b!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return v(g)})(this,a)}}function y(){return y=typeof Reflect!="undefined"&&Reflect.get?Reflect.get.bind():function(r,i,a){var l=(function(g,b){for(;!Object.prototype.hasOwnProperty.call(g,b)&&(g=u(g))!==null;);return g})(r,i);if(l){var h=Object.getOwnPropertyDescriptor(l,i);return h.get?h.get.call(arguments.length<3?r:a):h.value}},y.apply(this,arguments)}function x(r){var i=(function(a,l){if(typeof a!="object"||a===null)return a;var h=a[Symbol.toPrimitive];if(h!==void 0){var g=h.call(a,l||"default");if(typeof g!="object")return g;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(a)})(r,"string");return typeof i=="symbol"?i:i+""}var w=function(r){return!(!r||!r.Window)&&r instanceof r.Window},S=void 0,T=void 0;function L(r){S=r;var i=r.document.createTextNode("");i.ownerDocument!==r.document&&typeof r.wrap=="function"&&r.wrap(i)===i&&(r=r.wrap(r)),T=r}function C(r){return w(r)?r:(r.ownerDocument||r).defaultView||T.window}typeof window!="undefined"&&window&&L(window);var O=function(r){return!!r&&t(r)==="object"},M=function(r){return typeof r=="function"},_={window:function(r){return r===T||w(r)},docFrag:function(r){return O(r)&&r.nodeType===11},object:O,func:M,number:function(r){return typeof r=="number"},bool:function(r){return typeof r=="boolean"},string:function(r){return typeof r=="string"},element:function(r){if(!r||t(r)!=="object")return!1;var i=C(r)||T;return/object|function/.test(typeof Element=="undefined"?"undefined":t(Element))?r instanceof Element||r instanceof i.Element:r.nodeType===1&&typeof r.nodeName=="string"},plainObject:function(r){return O(r)&&!!r.constructor&&/function Object\b/.test(r.constructor.toString())},array:function(r){return O(r)&&r.length!==void 0&&M(r.splice)}};function P(r){var i=r.interaction;if(i.prepared.name==="drag"){var a=i.prepared.axis;a==="x"?(i.coords.cur.page.y=i.coords.start.page.y,i.coords.cur.client.y=i.coords.start.client.y,i.coords.velocity.client.y=0,i.coords.velocity.page.y=0):a==="y"&&(i.coords.cur.page.x=i.coords.start.page.x,i.coords.cur.client.x=i.coords.start.client.x,i.coords.velocity.client.x=0,i.coords.velocity.page.x=0)}}function R(r){var i=r.iEvent,a=r.interaction;if(a.prepared.name==="drag"){var l=a.prepared.axis;if(l==="x"||l==="y"){var h=l==="x"?"y":"x";i.page[h]=a.coords.start.page[h],i.client[h]=a.coords.start.client[h],i.delta[h]=0}}}var q={id:"actions/drag",install:function(r){var i=r.actions,a=r.Interactable,l=r.defaults;a.prototype.draggable=q.draggable,i.map.drag=q,i.methodDict.drag="draggable",l.actions.drag=q.defaults},listeners:{"interactions:before-action-move":P,"interactions:action-resume":P,"interactions:action-move":R,"auto-start:check":function(r){var i=r.interaction,a=r.interactable,l=r.buttons,h=a.options.drag;if(h&&h.enabled&&(!i.pointerIsDown||!/mouse|pointer/.test(i.pointerType)||(l&a.options.drag.mouseButtons)!=0))return r.action={name:"drag",axis:h.lockAxis==="start"?h.startAxis:h.lockAxis},!1}},draggable:function(r){return _.object(r)?(this.options.drag.enabled=r.enabled!==!1,this.setPerAction("drag",r),this.setOnEvents("drag",r),/^(xy|x|y|start)$/.test(r.lockAxis)&&(this.options.drag.lockAxis=r.lockAxis),/^(xy|x|y)$/.test(r.startAxis)&&(this.options.drag.startAxis=r.startAxis),this):_.bool(r)?(this.options.drag.enabled=r,this):this.options.drag},beforeMove:P,move:R,defaults:{startAxis:"xy",lockAxis:"xy"},getCursor:function(){return"move"},filterEventType:function(r){return r.search("drag")===0}},K=q,$={init:function(r){var i=r;$.document=i.document,$.DocumentFragment=i.DocumentFragment||re,$.SVGElement=i.SVGElement||re,$.SVGSVGElement=i.SVGSVGElement||re,$.SVGElementInstance=i.SVGElementInstance||re,$.Element=i.Element||re,$.HTMLElement=i.HTMLElement||$.Element,$.Event=i.Event,$.Touch=i.Touch||re,$.PointerEvent=i.PointerEvent||i.MSPointerEvent},document:null,DocumentFragment:null,SVGElement:null,SVGSVGElement:null,SVGElementInstance:null,Element:null,HTMLElement:null,Event:null,Touch:null,PointerEvent:null};function re(){}var F=$,U={init:function(r){var i=F.Element,a=r.navigator||{};U.supportsTouch="ontouchstart"in r||_.func(r.DocumentTouch)&&F.document instanceof r.DocumentTouch,U.supportsPointerEvent=a.pointerEnabled!==!1&&!!F.PointerEvent,U.isIOS=/iP(hone|od|ad)/.test(a.platform),U.isIOS7=/iP(hone|od|ad)/.test(a.platform)&&/OS 7[^\d]/.test(a.appVersion),U.isIe9=/MSIE 9/.test(a.userAgent),U.isOperaMobile=a.appName==="Opera"&&U.supportsTouch&&/Presto/.test(a.userAgent),U.prefixedMatchesSelector="matches"in i.prototype?"matches":"webkitMatchesSelector"in i.prototype?"webkitMatchesSelector":"mozMatchesSelector"in i.prototype?"mozMatchesSelector":"oMatchesSelector"in i.prototype?"oMatchesSelector":"msMatchesSelector",U.pEventTypes=U.supportsPointerEvent?F.PointerEvent===r.MSPointerEvent?{up:"MSPointerUp",down:"MSPointerDown",over:"mouseover",out:"mouseout",move:"MSPointerMove",cancel:"MSPointerCancel"}:{up:"pointerup",down:"pointerdown",over:"pointerover",out:"pointerout",move:"pointermove",cancel:"pointercancel"}:null,U.wheelEvent=F.document&&"onmousewheel"in F.document?"mousewheel":"wheel"},supportsTouch:null,supportsPointerEvent:null,isIOS7:null,isIOS:null,isIe9:null,isOperaMobile:null,prefixedMatchesSelector:null,pEventTypes:null,wheelEvent:null},V=U;function ce(r,i){if(r.contains)return r.contains(i);for(;i;){if(i===r)return!0;i=i.parentNode}return!1}function We(r,i){for(;_.element(r);){if(ze(r,i))return r;r=ye(r)}return null}function ye(r){var i=r.parentNode;if(_.docFrag(i)){for(;(i=i.host)&&_.docFrag(i););return i}return i}function ze(r,i){return T!==S&&(i=i.replace(/\/deep\//g," ")),r[V.prefixedMatchesSelector](i)}var we=function(r){return r.parentNode||r.host};function Ee(r,i){for(var a,l=[],h=r;(a=we(h))&&h!==i&&a!==h.ownerDocument;)l.unshift(h),h=a;return l}function et(r,i,a){for(;_.element(r);){if(ze(r,i))return!0;if((r=ye(r))===a)return ze(r,i)}return!1}function Ve(r){return r.correspondingUseElement||r}function De(r){var i=r instanceof F.SVGElement?r.getBoundingClientRect():r.getClientRects()[0];return i&&{left:i.left,right:i.right,top:i.top,bottom:i.bottom,width:i.width||i.right-i.left,height:i.height||i.bottom-i.top}}function Ge(r){var i,a=De(r);if(!V.isIOS7&&a){var l={x:(i=(i=C(r))||T).scrollX||i.document.documentElement.scrollLeft,y:i.scrollY||i.document.documentElement.scrollTop};a.left+=l.x,a.right+=l.x,a.top+=l.y,a.bottom+=l.y}return a}function st(r){for(var i=[];r;)i.push(r),r=ye(r);return i}function ct(r){return!!_.string(r)&&(F.document.querySelector(r),!0)}function ae(r,i){for(var a in i)r[a]=i[a];return r}function ut(r,i,a){return r==="parent"?ye(a):r==="self"?i.getRect(a):We(a,r)}function lt(r,i,a,l){var h=r;return _.string(h)?h=ut(h,i,a):_.func(h)&&(h=h.apply(void 0,l)),_.element(h)&&(h=Ge(h)),h}function Le(r){return r&&{x:"x"in r?r.x:r.left,y:"y"in r?r.y:r.top}}function oe(r){return!r||"x"in r&&"y"in r||((r=ae({},r)).x=r.left||0,r.y=r.top||0,r.width=r.width||(r.right||0)-r.x,r.height=r.height||(r.bottom||0)-r.y),r}function Ye(r,i,a){r.left&&(i.left+=a.x),r.right&&(i.right+=a.x),r.top&&(i.top+=a.y),r.bottom&&(i.bottom+=a.y),i.width=i.right-i.left,i.height=i.bottom-i.top}function ke(r,i,a){var l=a&&r.options[a];return Le(lt(l&&l.origin||r.options.origin,r,i,[r&&i]))||{x:0,y:0}}function Me(r,i){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(E){return!0},l=arguments.length>3?arguments[3]:void 0;if(l=l||{},_.string(r)&&r.search(" ")!==-1&&(r=gt(r)),_.array(r))return r.forEach((function(E){return Me(E,i,a,l)})),l;if(_.object(r)&&(i=r,r=""),_.func(i)&&a(r))l[r]=l[r]||[],l[r].push(i);else if(_.array(i))for(var h=0,g=i;h<g.length;h++){var b=g[h];Me(r,b,a,l)}else if(_.object(i))for(var k in i)Me(gt(k).map((function(E){return"".concat(r).concat(E)})),i[k],a,l);return l}function gt(r){return r.trim().split(/ +/)}var mt=function(r,i){return Math.sqrt(r*r+i*i)},Bt=["webkit","moz"];function dt(r,i){r.__set||(r.__set={});var a=function(h){if(Bt.some((function(g){return h.indexOf(g)===0})))return 1;typeof r[h]!="function"&&h!=="__set"&&Object.defineProperty(r,h,{get:function(){return h in r.__set?r.__set[h]:r.__set[h]=i[h]},set:function(g){r.__set[h]=g},configurable:!0})};for(var l in i)a(l);return r}function Tt(r,i){r.page=r.page||{},r.page.x=i.page.x,r.page.y=i.page.y,r.client=r.client||{},r.client.x=i.client.x,r.client.y=i.client.y,r.timeStamp=i.timeStamp}function wt(r){r.page.x=0,r.page.y=0,r.client.x=0,r.client.y=0}function Kt(r){return r instanceof F.Event||r instanceof F.Touch}function Fe(r,i,a){return r=r||"page",(a=a||{}).x=i[r+"X"],a.y=i[r+"Y"],a}function yt(r,i){return i=i||{x:0,y:0},V.isOperaMobile&&Kt(r)?(Fe("screen",r,i),i.x+=window.scrollX,i.y+=window.scrollY):Fe("page",r,i),i}function Ot(r){return _.number(r.pointerId)?r.pointerId:r.identifier}function ti(r,i,a){var l=i.length>1?Rt(i):i[0];yt(l,r.page),(function(h,g){g=g||{},V.isOperaMobile&&Kt(h)?Fe("screen",h,g):Fe("client",h,g)})(l,r.client),r.timeStamp=a}function zt(r){var i=[];return _.array(r)?(i[0]=r[0],i[1]=r[1]):r.type==="touchend"?r.touches.length===1?(i[0]=r.touches[0],i[1]=r.changedTouches[0]):r.touches.length===0&&(i[0]=r.changedTouches[0],i[1]=r.changedTouches[1]):(i[0]=r.touches[0],i[1]=r.touches[1]),i}function Rt(r){for(var i={pageX:0,pageY:0,clientX:0,clientY:0,screenX:0,screenY:0},a=0;a<r.length;a++){var l=r[a];for(var h in i)i[h]+=l[h]}for(var g in i)i[g]/=r.length;return i}function pt(r){if(!r.length)return null;var i=zt(r),a=Math.min(i[0].pageX,i[1].pageX),l=Math.min(i[0].pageY,i[1].pageY),h=Math.max(i[0].pageX,i[1].pageX),g=Math.max(i[0].pageY,i[1].pageY);return{x:a,y:l,left:a,top:l,right:h,bottom:g,width:h-a,height:g-l}}function Dt(r,i){var a=i+"X",l=i+"Y",h=zt(r),g=h[0][a]-h[1][a],b=h[0][l]-h[1][l];return mt(g,b)}function be(r,i){var a=i+"X",l=i+"Y",h=zt(r),g=h[1][a]-h[0][a],b=h[1][l]-h[0][l];return 180*Math.atan2(b,g)/Math.PI}function N(r){return _.string(r.pointerType)?r.pointerType:_.number(r.pointerType)?[void 0,void 0,"touch","pen","mouse"][r.pointerType]:/touch/.test(r.type||"")||r instanceof F.Touch?"touch":"mouse"}function Y(r){var i=_.func(r.composedPath)?r.composedPath():r.path;return[Ve(i?i[0]:r.target),Ve(r.currentTarget)]}var ue=(function(){function r(i){n(this,r),this.immediatePropagationStopped=!1,this.propagationStopped=!1,this._interaction=i}return c(r,[{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}]),r})();Object.defineProperty(ue.prototype,"interaction",{get:function(){return this._interaction._proxy},set:function(){}});var Se=function(r,i){for(var a=0;a<i.length;a++){var l=i[a];r.push(l)}return r},de=function(r){return Se([],r)},Oe=function(r,i){for(var a=0;a<r.length;a++)if(i(r[a],a,r))return a;return-1},H=function(r,i){return r[Oe(r,i)]},ee=(function(r){d(a,r);var i=m(a);function a(l,h,g){var b;n(this,a),(b=i.call(this,h._interaction)).dropzone=void 0,b.dragEvent=void 0,b.relatedTarget=void 0,b.draggable=void 0,b.propagationStopped=!1,b.immediatePropagationStopped=!1;var k=g==="dragleave"?l.prev:l.cur,E=k.element,z=k.dropzone;return b.type=g,b.target=E,b.currentTarget=E,b.dropzone=z,b.dragEvent=h,b.relatedTarget=h.target,b.draggable=h.interactable,b.timeStamp=h.timeStamp,b}return c(a,[{key:"reject",value:function(){var l=this,h=this._interaction.dropState;if(this.type==="dropactivate"||this.dropzone&&h.cur.dropzone===this.dropzone&&h.cur.element===this.target)if(h.prev.dropzone=this.dropzone,h.prev.element=this.target,h.rejected=!0,h.events.enter=null,this.stopImmediatePropagation(),this.type==="dropactivate"){var g=h.activeDrops,b=Oe(g,(function(E){var z=E.dropzone,A=E.element;return z===l.dropzone&&A===l.target}));h.activeDrops.splice(b,1);var k=new a(h,this.dragEvent,"dropdeactivate");k.dropzone=this.dropzone,k.target=this.target,this.dropzone.fire(k)}else this.dropzone.fire(new a(h,this.dragEvent,"dragleave"))}},{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}]),a})(ue);function qe(r,i){for(var a=0,l=r.slice();a<l.length;a++){var h=l[a],g=h.dropzone,b=h.element;i.dropzone=g,i.target=b,g.fire(i),i.propagationStopped=i.immediatePropagationStopped=!1}}function j(r,i){for(var a=(function(g,b){for(var k=[],E=0,z=g.interactables.list;E<z.length;E++){var A=z[E];if(A.options.drop.enabled){var I=A.options.drop.accept;if(!(_.element(I)&&I!==b||_.string(I)&&!ze(b,I)||_.func(I)&&!I({dropzone:A,draggableElement:b})))for(var B=0,J=A.getAllElements();B<J.length;B++){var G=J[B];G!==b&&k.push({dropzone:A,element:G,rect:A.getRect(G)})}}}return k})(r,i),l=0;l<a.length;l++){var h=a[l];h.rect=h.dropzone.getRect(h.element)}return a}function Ze(r,i,a){for(var l=r.dropState,h=r.interactable,g=r.element,b=[],k=0,E=l.activeDrops;k<E.length;k++){var z=E[k],A=z.dropzone,I=z.element,B=z.rect,J=A.dropCheck(i,a,h,g,I,B);b.push(J?I:null)}var G=(function(te){for(var he,le,_e,Ie=[],$e=0;$e<te.length;$e++){var Te=te[$e],Ne=te[he];if(Te&&$e!==he)if(Ne){var Et=we(Te),ot=we(Ne);if(Et!==Te.ownerDocument)if(ot!==Te.ownerDocument)if(Et!==ot){Ie=Ie.length?Ie:Ee(Ne);var It=void 0;if(Ne instanceof F.HTMLElement&&Te instanceof F.SVGElement&&!(Te instanceof F.SVGSVGElement)){if(Te===ot)continue;It=Te.ownerSVGElement}else It=Te;for(var jt=Ee(It,Ne.ownerDocument),Ut=0;jt[Ut]&&jt[Ut]===Ie[Ut];)Ut++;var tr=[jt[Ut-1],jt[Ut],Ie[Ut]];if(tr[0])for(var Pi=tr[0].lastChild;Pi;){if(Pi===tr[1]){he=$e,Ie=jt;break}if(Pi===tr[2])break;Pi=Pi.previousSibling}}else _e=Ne,(parseInt(C(le=Te).getComputedStyle(le).zIndex,10)||0)>=(parseInt(C(_e).getComputedStyle(_e).zIndex,10)||0)&&(he=$e);else he=$e}else he=$e}return he})(b);return l.activeDrops[G]||null}function Xe(r,i,a){var l=r.dropState,h={enter:null,leave:null,activate:null,deactivate:null,move:null,drop:null};return a.type==="dragstart"&&(h.activate=new ee(l,a,"dropactivate"),h.activate.target=null,h.activate.dropzone=null),a.type==="dragend"&&(h.deactivate=new ee(l,a,"dropdeactivate"),h.deactivate.target=null,h.deactivate.dropzone=null),l.rejected||(l.cur.element!==l.prev.element&&(l.prev.dropzone&&(h.leave=new ee(l,a,"dragleave"),a.dragLeave=h.leave.target=l.prev.element,a.prevDropzone=h.leave.dropzone=l.prev.dropzone),l.cur.dropzone&&(h.enter=new ee(l,a,"dragenter"),a.dragEnter=l.cur.element,a.dropzone=l.cur.dropzone)),a.type==="dragend"&&l.cur.dropzone&&(h.drop=new ee(l,a,"drop"),a.dropzone=l.cur.dropzone,a.relatedTarget=l.cur.element),a.type==="dragmove"&&l.cur.dropzone&&(h.move=new ee(l,a,"dropmove"),a.dropzone=l.cur.dropzone)),h}function nt(r,i){var a=r.dropState,l=a.activeDrops,h=a.cur,g=a.prev;i.leave&&g.dropzone.fire(i.leave),i.enter&&h.dropzone.fire(i.enter),i.move&&h.dropzone.fire(i.move),i.drop&&h.dropzone.fire(i.drop),i.deactivate&&qe(l,i.deactivate),a.prev.dropzone=h.dropzone,a.prev.element=h.element}function je(r,i){var a=r.interaction,l=r.iEvent,h=r.event;if(l.type==="dragmove"||l.type==="dragend"){var g=a.dropState;i.dynamicDrop&&(g.activeDrops=j(i,a.element));var b=l,k=Ze(a,b,h);g.rejected=g.rejected&&!!k&&k.dropzone===g.cur.dropzone&&k.element===g.cur.element,g.cur.dropzone=k&&k.dropzone,g.cur.element=k&&k.element,g.events=Xe(a,0,b)}}var at={id:"actions/drop",install:function(r){var i=r.actions,a=r.interactStatic,l=r.Interactable,h=r.defaults;r.usePlugin(K),l.prototype.dropzone=function(g){return(function(b,k){if(_.object(k)){if(b.options.drop.enabled=k.enabled!==!1,k.listeners){var E=Me(k.listeners),z=Object.keys(E).reduce((function(I,B){return I[/^(enter|leave)/.test(B)?"drag".concat(B):/^(activate|deactivate|move)/.test(B)?"drop".concat(B):B]=E[B],I}),{}),A=b.options.drop.listeners;A&&b.off(A),b.on(z),b.options.drop.listeners=z}return _.func(k.ondrop)&&b.on("drop",k.ondrop),_.func(k.ondropactivate)&&b.on("dropactivate",k.ondropactivate),_.func(k.ondropdeactivate)&&b.on("dropdeactivate",k.ondropdeactivate),_.func(k.ondragenter)&&b.on("dragenter",k.ondragenter),_.func(k.ondragleave)&&b.on("dragleave",k.ondragleave),_.func(k.ondropmove)&&b.on("dropmove",k.ondropmove),/^(pointer|center)$/.test(k.overlap)?b.options.drop.overlap=k.overlap:_.number(k.overlap)&&(b.options.drop.overlap=Math.max(Math.min(1,k.overlap),0)),"accept"in k&&(b.options.drop.accept=k.accept),"checker"in k&&(b.options.drop.checker=k.checker),b}return _.bool(k)?(b.options.drop.enabled=k,b):b.options.drop})(this,g)},l.prototype.dropCheck=function(g,b,k,E,z,A){return(function(I,B,J,G,te,he,le){var _e=!1;if(!(le=le||I.getRect(he)))return!!I.options.drop.checker&&I.options.drop.checker(B,J,_e,I,he,G,te);var Ie=I.options.drop.overlap;if(Ie==="pointer"){var $e=ke(G,te,"drag"),Te=yt(B);Te.x+=$e.x,Te.y+=$e.y;var Ne=Te.x>le.left&&Te.x<le.right,Et=Te.y>le.top&&Te.y<le.bottom;_e=Ne&&Et}var ot=G.getRect(te);if(ot&&Ie==="center"){var It=ot.left+ot.width/2,jt=ot.top+ot.height/2;_e=It>=le.left&&It<=le.right&&jt>=le.top&&jt<=le.bottom}return ot&&_.number(Ie)&&(_e=Math.max(0,Math.min(le.right,ot.right)-Math.max(le.left,ot.left))*Math.max(0,Math.min(le.bottom,ot.bottom)-Math.max(le.top,ot.top))/(ot.width*ot.height)>=Ie),I.options.drop.checker&&(_e=I.options.drop.checker(B,J,_e,I,he,G,te)),_e})(this,g,b,k,E,z,A)},a.dynamicDrop=function(g){return _.bool(g)?(r.dynamicDrop=g,a):r.dynamicDrop},ae(i.phaselessTypes,{dragenter:!0,dragleave:!0,dropactivate:!0,dropdeactivate:!0,dropmove:!0,drop:!0}),i.methodDict.drop="dropzone",r.dynamicDrop=!1,h.actions.drop=at.defaults},listeners:{"interactions:before-action-start":function(r){var i=r.interaction;i.prepared.name==="drag"&&(i.dropState={cur:{dropzone:null,element:null},prev:{dropzone:null,element:null},rejected:null,events:null,activeDrops:[]})},"interactions:after-action-start":function(r,i){var a=r.interaction,l=(r.event,r.iEvent);if(a.prepared.name==="drag"){var h=a.dropState;h.activeDrops=[],h.events={},h.activeDrops=j(i,a.element),h.events=Xe(a,0,l),h.events.activate&&(qe(h.activeDrops,h.events.activate),i.fire("actions/drop:start",{interaction:a,dragEvent:l}))}},"interactions:action-move":je,"interactions:after-action-move":function(r,i){var a=r.interaction,l=r.iEvent;if(a.prepared.name==="drag"){var h=a.dropState;nt(a,h.events),i.fire("actions/drop:move",{interaction:a,dragEvent:l}),h.events={}}},"interactions:action-end":function(r,i){if(r.interaction.prepared.name==="drag"){var a=r.interaction,l=r.iEvent;je(r,i),nt(a,a.dropState.events),i.fire("actions/drop:end",{interaction:a,dragEvent:l})}},"interactions:stop":function(r){var i=r.interaction;if(i.prepared.name==="drag"){var a=i.dropState;a&&(a.activeDrops=null,a.events=null,a.cur.dropzone=null,a.cur.element=null,a.prev.dropzone=null,a.prev.element=null,a.rejected=!1)}}},getActiveDrops:j,getDrop:Ze,getDropEvents:Xe,fireDropEvents:nt,filterEventType:function(r){return r.search("drag")===0||r.search("drop")===0},defaults:{enabled:!1,accept:null,overlap:"pointer"}},it=at;function rt(r){var i=r.interaction,a=r.iEvent,l=r.phase;if(i.prepared.name==="gesture"){var h=i.pointers.map((function(z){return z.pointer})),g=l==="start",b=l==="end",k=i.interactable.options.deltaSource;if(a.touches=[h[0],h[1]],g)a.distance=Dt(h,k),a.box=pt(h),a.scale=1,a.ds=0,a.angle=be(h,k),a.da=0,i.gesture.startDistance=a.distance,i.gesture.startAngle=a.angle;else if(b||i.pointers.length<2){var E=i.prevEvent;a.distance=E.distance,a.box=E.box,a.scale=E.scale,a.ds=0,a.angle=E.angle,a.da=0}else a.distance=Dt(h,k),a.box=pt(h),a.scale=a.distance/i.gesture.startDistance,a.angle=be(h,k),a.ds=a.scale-i.gesture.scale,a.da=a.angle-i.gesture.angle;i.gesture.distance=a.distance,i.gesture.angle=a.angle,_.number(a.scale)&&a.scale!==1/0&&!isNaN(a.scale)&&(i.gesture.scale=a.scale)}}var Je={id:"actions/gesture",before:["actions/drag","actions/resize"],install:function(r){var i=r.actions,a=r.Interactable,l=r.defaults;a.prototype.gesturable=function(h){return _.object(h)?(this.options.gesture.enabled=h.enabled!==!1,this.setPerAction("gesture",h),this.setOnEvents("gesture",h),this):_.bool(h)?(this.options.gesture.enabled=h,this):this.options.gesture},i.map.gesture=Je,i.methodDict.gesture="gesturable",l.actions.gesture=Je.defaults},listeners:{"interactions:action-start":rt,"interactions:action-move":rt,"interactions:action-end":rt,"interactions:new":function(r){r.interaction.gesture={angle:0,distance:0,scale:1,startAngle:0,startDistance:0}},"auto-start:check":function(r){if(!(r.interaction.pointers.length<2)){var i=r.interactable.options.gesture;if(i&&i.enabled)return r.action={name:"gesture"},!1}}},defaults:{},getCursor:function(){return""},filterEventType:function(r){return r.search("gesture")===0}},Qe=Je;function Pe(r,i,a,l,h,g,b){if(!i)return!1;if(i===!0){var k=_.number(g.width)?g.width:g.right-g.left,E=_.number(g.height)?g.height:g.bottom-g.top;if(b=Math.min(b,Math.abs((r==="left"||r==="right"?k:E)/2)),k<0&&(r==="left"?r="right":r==="right"&&(r="left")),E<0&&(r==="top"?r="bottom":r==="bottom"&&(r="top")),r==="left"){var z=k>=0?g.left:g.right;return a.x<z+b}if(r==="top"){var A=E>=0?g.top:g.bottom;return a.y<A+b}if(r==="right")return a.x>(k>=0?g.right:g.left)-b;if(r==="bottom")return a.y>(E>=0?g.bottom:g.top)-b}return!!_.element(l)&&(_.element(i)?i===l:et(l,i,h))}function ve(r){var i=r.iEvent,a=r.interaction;if(a.prepared.name==="resize"&&a.resizeAxes){var l=i;a.interactable.options.resize.square?(a.resizeAxes==="y"?l.delta.x=l.delta.y:l.delta.y=l.delta.x,l.axes="xy"):(l.axes=a.resizeAxes,a.resizeAxes==="x"?l.delta.y=0:a.resizeAxes==="y"&&(l.delta.x=0))}}var Ae,Re,Ce={id:"actions/resize",before:["actions/drag"],install:function(r){var i=r.actions,a=r.browser,l=r.Interactable,h=r.defaults;Ce.cursors=(function(g){return g.isIe9?{x:"e-resize",y:"s-resize",xy:"se-resize",top:"n-resize",left:"w-resize",bottom:"s-resize",right:"e-resize",topleft:"se-resize",bottomright:"se-resize",topright:"ne-resize",bottomleft:"ne-resize"}:{x:"ew-resize",y:"ns-resize",xy:"nwse-resize",top:"ns-resize",left:"ew-resize",bottom:"ns-resize",right:"ew-resize",topleft:"nwse-resize",bottomright:"nwse-resize",topright:"nesw-resize",bottomleft:"nesw-resize"}})(a),Ce.defaultMargin=a.supportsTouch||a.supportsPointerEvent?20:10,l.prototype.resizable=function(g){return(function(b,k,E){return _.object(k)?(b.options.resize.enabled=k.enabled!==!1,b.setPerAction("resize",k),b.setOnEvents("resize",k),_.string(k.axis)&&/^x$|^y$|^xy$/.test(k.axis)?b.options.resize.axis=k.axis:k.axis===null&&(b.options.resize.axis=E.defaults.actions.resize.axis),_.bool(k.preserveAspectRatio)?b.options.resize.preserveAspectRatio=k.preserveAspectRatio:_.bool(k.square)&&(b.options.resize.square=k.square),b):_.bool(k)?(b.options.resize.enabled=k,b):b.options.resize})(this,g,r)},i.map.resize=Ce,i.methodDict.resize="resizable",h.actions.resize=Ce.defaults},listeners:{"interactions:new":function(r){r.interaction.resizeAxes="xy"},"interactions:action-start":function(r){(function(i){var a=i.iEvent,l=i.interaction;if(l.prepared.name==="resize"&&l.prepared.edges){var h=a,g=l.rect;l._rects={start:ae({},g),corrected:ae({},g),previous:ae({},g),delta:{left:0,right:0,width:0,top:0,bottom:0,height:0}},h.edges=l.prepared.edges,h.rect=l._rects.corrected,h.deltaRect=l._rects.delta}})(r),ve(r)},"interactions:action-move":function(r){(function(i){var a=i.iEvent,l=i.interaction;if(l.prepared.name==="resize"&&l.prepared.edges){var h=a,g=l.interactable.options.resize.invert,b=g==="reposition"||g==="negate",k=l.rect,E=l._rects,z=E.start,A=E.corrected,I=E.delta,B=E.previous;if(ae(B,A),b){if(ae(A,k),g==="reposition"){if(A.top>A.bottom){var J=A.top;A.top=A.bottom,A.bottom=J}if(A.left>A.right){var G=A.left;A.left=A.right,A.right=G}}}else A.top=Math.min(k.top,z.bottom),A.bottom=Math.max(k.bottom,z.top),A.left=Math.min(k.left,z.right),A.right=Math.max(k.right,z.left);for(var te in A.width=A.right-A.left,A.height=A.bottom-A.top,A)I[te]=A[te]-B[te];h.edges=l.prepared.edges,h.rect=A,h.deltaRect=I}})(r),ve(r)},"interactions:action-end":function(r){var i=r.iEvent,a=r.interaction;if(a.prepared.name==="resize"&&a.prepared.edges){var l=i;l.edges=a.prepared.edges,l.rect=a._rects.corrected,l.deltaRect=a._rects.delta}},"auto-start:check":function(r){var i=r.interaction,a=r.interactable,l=r.element,h=r.rect,g=r.buttons;if(h){var b=ae({},i.coords.cur.page),k=a.options.resize;if(k&&k.enabled&&(!i.pointerIsDown||!/mouse|pointer/.test(i.pointerType)||(g&k.mouseButtons)!=0)){if(_.object(k.edges)){var E={left:!1,right:!1,top:!1,bottom:!1};for(var z in E)E[z]=Pe(z,k.edges[z],b,i._latestPointer.eventTarget,l,h,k.margin||Ce.defaultMargin);E.left=E.left&&!E.right,E.top=E.top&&!E.bottom,(E.left||E.right||E.top||E.bottom)&&(r.action={name:"resize",edges:E})}else{var A=k.axis!=="y"&&b.x>h.right-Ce.defaultMargin,I=k.axis!=="x"&&b.y>h.bottom-Ce.defaultMargin;(A||I)&&(r.action={name:"resize",axes:(A?"x":"")+(I?"y":"")})}return!r.action&&void 0}}}},defaults:{square:!1,preserveAspectRatio:!1,axis:"xy",margin:NaN,edges:null,invert:"none"},cursors:null,getCursor:function(r){var i=r.edges,a=r.axis,l=r.name,h=Ce.cursors,g=null;if(a)g=h[l+a];else if(i){for(var b="",k=0,E=["top","bottom","left","right"];k<E.length;k++){var z=E[k];i[z]&&(b+=z)}g=h[b]}return g},filterEventType:function(r){return r.search("resize")===0},defaultMargin:null},se=Ce,ne={id:"actions",install:function(r){r.usePlugin(Qe),r.usePlugin(se),r.usePlugin(K),r.usePlugin(it)}},Z=0,Q={request:function(r){return Ae(r)},cancel:function(r){return Re(r)},init:function(r){if(Ae=r.requestAnimationFrame,Re=r.cancelAnimationFrame,!Ae)for(var i=["ms","moz","webkit","o"],a=0;a<i.length;a++){var l=i[a];Ae=r["".concat(l,"RequestAnimationFrame")],Re=r["".concat(l,"CancelAnimationFrame")]||r["".concat(l,"CancelRequestAnimationFrame")]}Ae=Ae&&Ae.bind(r),Re=Re&&Re.bind(r),Ae||(Ae=function(h){var g=Date.now(),b=Math.max(0,16-(g-Z)),k=r.setTimeout((function(){h(g+b)}),b);return Z=g+b,k},Re=function(h){return clearTimeout(h)})}},W={defaults:{enabled:!1,margin:60,container:null,speed:300},now:Date.now,interaction:null,i:0,x:0,y:0,isScrolling:!1,prevTime:0,margin:0,speed:0,start:function(r){W.isScrolling=!0,Q.cancel(W.i),r.autoScroll=W,W.interaction=r,W.prevTime=W.now(),W.i=Q.request(W.scroll)},stop:function(){W.isScrolling=!1,W.interaction&&(W.interaction.autoScroll=null),Q.cancel(W.i)},scroll:function(){var r=W.interaction,i=r.interactable,a=r.element,l=r.prepared.name,h=i.options[l].autoScroll,g=D(h.container,i,a),b=W.now(),k=(b-W.prevTime)/1e3,E=h.speed*k;if(E>=1){var z={x:W.x*E,y:W.y*E};if(z.x||z.y){var A=X(g);_.window(g)?g.scrollBy(z.x,z.y):g&&(g.scrollLeft+=z.x,g.scrollTop+=z.y);var I=X(g),B={x:I.x-A.x,y:I.y-A.y};(B.x||B.y)&&i.fire({type:"autoscroll",target:a,interactable:i,delta:B,interaction:r,container:g})}W.prevTime=b}W.isScrolling&&(Q.cancel(W.i),W.i=Q.request(W.scroll))},check:function(r,i){var a;return(a=r.options[i].autoScroll)==null?void 0:a.enabled},onInteractionMove:function(r){var i=r.interaction,a=r.pointer;if(i.interacting()&&W.check(i.interactable,i.prepared.name))if(i.simulation)W.x=W.y=0;else{var l,h,g,b,k=i.interactable,E=i.element,z=i.prepared.name,A=k.options[z].autoScroll,I=D(A.container,k,E);if(_.window(I))b=a.clientX<W.margin,l=a.clientY<W.margin,h=a.clientX>I.innerWidth-W.margin,g=a.clientY>I.innerHeight-W.margin;else{var B=De(I);b=a.clientX<B.left+W.margin,l=a.clientY<B.top+W.margin,h=a.clientX>B.right-W.margin,g=a.clientY>B.bottom-W.margin}W.x=h?1:b?-1:0,W.y=g?1:l?-1:0,W.isScrolling||(W.margin=A.margin,W.speed=A.speed,W.start(i))}}};function D(r,i,a){return(_.string(r)?ut(r,i,a):r)||C(a)}function X(r){return _.window(r)&&(r=window.document.body),{x:r.scrollLeft,y:r.scrollTop}}var ie={id:"auto-scroll",install:function(r){var i=r.defaults,a=r.actions;r.autoScroll=W,W.now=function(){return r.now()},a.phaselessTypes.autoscroll=!0,i.perAction.autoScroll=W.defaults},listeners:{"interactions:new":function(r){r.interaction.autoScroll=null},"interactions:destroy":function(r){r.interaction.autoScroll=null,W.stop(),W.interaction&&(W.interaction=null)},"interactions:stop":W.stop,"interactions:action-move":function(r){return W.onInteractionMove(r)}}},pe=ie;function me(r,i){var a=!1;return function(){return a||(T.console.warn(i),a=!0),r.apply(this,arguments)}}function ge(r,i){return r.name=i.name,r.axis=i.axis,r.edges=i.edges,r}function fe(r){return _.bool(r)?(this.options.styleCursor=r,this):r===null?(delete this.options.styleCursor,this):this.options.styleCursor}function He(r){return _.func(r)?(this.options.actionChecker=r,this):r===null?(delete this.options.actionChecker,this):this.options.actionChecker}var Be={id:"auto-start/interactableMethods",install:function(r){var i=r.Interactable;i.prototype.getAction=function(a,l,h,g){var b=(function(k,E,z,A,I){var B=k.getRect(A),J=E.buttons||{0:1,1:4,3:8,4:16}[E.button],G={action:null,interactable:k,interaction:z,element:A,rect:B,buttons:J};return I.fire("auto-start:check",G),G.action})(this,l,h,g,r);return this.options.actionChecker?this.options.actionChecker(a,l,b,this,g,h):b},i.prototype.ignoreFrom=me((function(a){return this._backCompatOption("ignoreFrom",a)}),"Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."),i.prototype.allowFrom=me((function(a){return this._backCompatOption("allowFrom",a)}),"Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."),i.prototype.actionChecker=He,i.prototype.styleCursor=fe}};function Ke(r,i,a,l,h){return i.testIgnoreAllow(i.options[r.name],a,l)&&i.options[r.name].enabled&&kt(i,a,r,h)?r:null}function Ue(r,i,a,l,h,g,b){for(var k=0,E=l.length;k<E;k++){var z=l[k],A=h[k],I=z.getAction(i,a,r,A);if(I){var B=Ke(I,z,A,g,b);if(B)return{action:B,interactable:z,element:A}}}return{action:null,interactable:null,element:null}}function Mt(r,i,a,l,h){var g=[],b=[],k=l;function E(A){g.push(A),b.push(k)}for(;_.element(k);){g=[],b=[],h.interactables.forEachMatch(k,E);var z=Ue(r,i,a,g,b,l,h);if(z.action&&!z.interactable.options[z.action.name].manualStart)return z;k=ye(k)}return{action:null,interactable:null,element:null}}function Ft(r,i,a){var l=i.action,h=i.interactable,g=i.element;l=l||{name:null},r.interactable=h,r.element=g,ge(r.prepared,l),r.rect=h&&l.name?h.getRect(g):null,qt(r,a),a.fire("autoStart:prepared",{interaction:r})}function kt(r,i,a,l){var h=r.options,g=h[a.name].max,b=h[a.name].maxPerElement,k=l.autoStart.maxInteractions,E=0,z=0,A=0;if(!(g&&b&&k))return!1;for(var I=0,B=l.interactions.list;I<B.length;I++){var J=B[I],G=J.prepared.name;if(J.interacting()&&(++E>=k||J.interactable===r&&((z+=G===a.name?1:0)>=g||J.element===i&&(A++,G===a.name&&A>=b))))return!1}return k>0}function Pt(r,i){return _.number(r)?(i.autoStart.maxInteractions=r,this):i.autoStart.maxInteractions}function Nt(r,i,a){var l=a.autoStart.cursorElement;l&&l!==r&&(l.style.cursor=""),r.ownerDocument.documentElement.style.cursor=i,r.style.cursor=i,a.autoStart.cursorElement=i?r:null}function qt(r,i){var a=r.interactable,l=r.element,h=r.prepared;if(r.pointerType==="mouse"&&a&&a.options.styleCursor){var g="";if(h.name){var b=a.options[h.name].cursorChecker;g=_.func(b)?b(h,a,l,r._interacting):i.actions.map[h.name].getCursor(h)}Nt(r.element,g||"",i)}else i.autoStart.cursorElement&&Nt(i.autoStart.cursorElement,"",i)}var _t={id:"auto-start/base",before:["actions"],install:function(r){var i=r.interactStatic,a=r.defaults;r.usePlugin(Be),a.base.actionChecker=null,a.base.styleCursor=!0,ae(a.perAction,{manualStart:!1,max:1/0,maxPerElement:1,allowFrom:null,ignoreFrom:null,mouseButtons:1}),i.maxInteractions=function(l){return Pt(l,r)},r.autoStart={maxInteractions:1/0,withinInteractionLimit:kt,cursorElement:null}},listeners:{"interactions:down":function(r,i){var a=r.interaction,l=r.pointer,h=r.event,g=r.eventTarget;a.interacting()||Ft(a,Mt(a,l,h,g,i),i)},"interactions:move":function(r,i){(function(a,l){var h=a.interaction,g=a.pointer,b=a.event,k=a.eventTarget;h.pointerType!=="mouse"||h.pointerIsDown||h.interacting()||Ft(h,Mt(h,g,b,k,l),l)})(r,i),(function(a,l){var h=a.interaction;if(h.pointerIsDown&&!h.interacting()&&h.pointerWasMoved&&h.prepared.name){l.fire("autoStart:before-start",a);var g=h.interactable,b=h.prepared.name;b&&g&&(g.options[b].manualStart||!kt(g,h.element,h.prepared,l)?h.stop():(h.start(h.prepared,g,h.element),qt(h,l)))}})(r,i)},"interactions:stop":function(r,i){var a=r.interaction,l=a.interactable;l&&l.options.styleCursor&&Nt(a.element,"",i)}},maxInteractions:Pt,withinInteractionLimit:kt,validateAction:Ke},Wt=_t,mi={id:"auto-start/dragAxis",listeners:{"autoStart:before-start":function(r,i){var a=r.interaction,l=r.eventTarget,h=r.dx,g=r.dy;if(a.prepared.name==="drag"){var b=Math.abs(h),k=Math.abs(g),E=a.interactable.options.drag,z=E.startAxis,A=b>k?"x":b<k?"y":"xy";if(a.prepared.axis=E.lockAxis==="start"?A[0]:E.lockAxis,A!=="xy"&&z!=="xy"&&z!==A){a.prepared.name=null;for(var I=l,B=function(G){if(G!==a.interactable){var te=a.interactable.options.drag;if(!te.manualStart&&G.testIgnoreAllow(te,I,l)){var he=G.getAction(a.downPointer,a.downEvent,a,I);if(he&&he.name==="drag"&&(function(le,_e){if(!_e)return!1;var Ie=_e.options.drag.startAxis;return le==="xy"||Ie==="xy"||Ie===le})(A,G)&&Wt.validateAction(he,G,I,l,i))return G}}};_.element(I);){var J=i.interactables.forEachMatch(I,B);if(J){a.prepared.name="drag",a.interactable=J,a.element=I;break}I=ye(I)}}}}}};function yi(r){var i=r.prepared&&r.prepared.name;if(!i)return null;var a=r.interactable.options;return a[i].hold||a[i].delay}var Bi={id:"auto-start/hold",install:function(r){var i=r.defaults;r.usePlugin(Wt),i.perAction.hold=0,i.perAction.delay=0},listeners:{"interactions:new":function(r){r.interaction.autoStartHoldTimer=null},"autoStart:prepared":function(r){var i=r.interaction,a=yi(i);a>0&&(i.autoStartHoldTimer=setTimeout((function(){i.start(i.prepared,i.interactable,i.element)}),a))},"interactions:move":function(r){var i=r.interaction,a=r.duplicate;i.autoStartHoldTimer&&i.pointerWasMoved&&!a&&(clearTimeout(i.autoStartHoldTimer),i.autoStartHoldTimer=null)},"autoStart:before-start":function(r){var i=r.interaction;yi(i)>0&&(i.prepared.name=null)}},getHoldDuration:yi},Ni=Bi,qi={id:"auto-start",install:function(r){r.usePlugin(Wt),r.usePlugin(Ni),r.usePlugin(mi)}},Hi=function(r){return/^(always|never|auto)$/.test(r)?(this.options.preventDefault=r,this):_.bool(r)?(this.options.preventDefault=r?"always":"never",this):this.options.preventDefault};function vi(r){var i=r.interaction,a=r.event;i.interactable&&i.interactable.checkAndPreventDefault(a)}var ji={id:"core/interactablePreventDefault",install:function(r){var i=r.Interactable;i.prototype.preventDefault=Hi,i.prototype.checkAndPreventDefault=function(a){return(function(l,h,g){var b=l.options.preventDefault;if(b!=="never")if(b!=="always"){if(h.events.supportsPassive&&/^touch(start|move)$/.test(g.type)){var k=C(g.target).document,E=h.getDocOptions(k);if(!E||!E.events||E.events.passive!==!1)return}/^(mouse|pointer|touch)*(down|start)/i.test(g.type)||_.element(g.target)&&ze(g.target,"input,select,textarea,[contenteditable=true],[contenteditable=true] *")||g.preventDefault()}else g.preventDefault()})(this,r,a)},r.interactions.docEvents.push({type:"dragstart",listener:function(a){for(var l=0,h=r.interactions.list;l<h.length;l++){var g=h[l];if(g.element&&(g.element===a.target||ce(g.element,a.target)))return void g.interactable.checkAndPreventDefault(a)}}})},listeners:["down","move","up","cancel"].reduce((function(r,i){return r["interactions:".concat(i)]=vi,r}),{})};function Gt(r,i){if(i.phaselessTypes[r])return!0;for(var a in i.map)if(r.indexOf(a)===0&&r.substr(a.length)in i.phases)return!0;return!1}function Yt(r){var i={};for(var a in r){var l=r[a];_.plainObject(l)?i[a]=Yt(l):_.array(l)?i[a]=de(l):i[a]=l}return i}var bi=(function(){function r(i){n(this,r),this.states=[],this.startOffset={left:0,right:0,top:0,bottom:0},this.startDelta=void 0,this.result=void 0,this.endResult=void 0,this.startEdges=void 0,this.edges=void 0,this.interaction=void 0,this.interaction=i,this.result=si(),this.edges={left:!1,right:!1,top:!1,bottom:!1}}return c(r,[{key:"start",value:function(i,a){var l,h,g=i.phase,b=this.interaction,k=(function(z){var A=z.interactable.options[z.prepared.name],I=A.modifiers;return I&&I.length?I:["snap","snapSize","snapEdges","restrict","restrictEdges","restrictSize"].map((function(B){var J=A[B];return J&&J.enabled&&{options:J,methods:J._methods}})).filter((function(B){return!!B}))})(b);this.prepareStates(k),this.startEdges=ae({},b.edges),this.edges=ae({},this.startEdges),this.startOffset=(l=b.rect,h=a,l?{left:h.x-l.left,top:h.y-l.top,right:l.right-h.x,bottom:l.bottom-h.y}:{left:0,top:0,right:0,bottom:0}),this.startDelta={x:0,y:0};var E=this.fillArg({phase:g,pageCoords:a,preEnd:!1});return this.result=si(),this.startAll(E),this.result=this.setAll(E)}},{key:"fillArg",value:function(i){var a=this.interaction;return i.interaction=a,i.interactable=a.interactable,i.element=a.element,i.rect||(i.rect=a.rect),i.edges||(i.edges=this.startEdges),i.startOffset=this.startOffset,i}},{key:"startAll",value:function(i){for(var a=0,l=this.states;a<l.length;a++){var h=l[a];h.methods.start&&(i.state=h,h.methods.start(i))}}},{key:"setAll",value:function(i){var a=i.phase,l=i.preEnd,h=i.skipModifiers,g=i.rect,b=i.edges;i.coords=ae({},i.pageCoords),i.rect=ae({},g),i.edges=ae({},b);for(var k=h?this.states.slice(h):this.states,E=si(i.coords,i.rect),z=0;z<k.length;z++){var A,I=k[z],B=I.options,J=ae({},i.coords),G=null;(A=I.methods)!=null&&A.set&&this.shouldDo(B,l,a)&&(i.state=I,G=I.methods.set(i),Ye(i.edges,i.rect,{x:i.coords.x-J.x,y:i.coords.y-J.y})),E.eventProps.push(G)}ae(this.edges,i.edges),E.delta.x=i.coords.x-i.pageCoords.x,E.delta.y=i.coords.y-i.pageCoords.y,E.rectDelta.left=i.rect.left-g.left,E.rectDelta.right=i.rect.right-g.right,E.rectDelta.top=i.rect.top-g.top,E.rectDelta.bottom=i.rect.bottom-g.bottom;var te=this.result.coords,he=this.result.rect;if(te&&he){var le=E.rect.left!==he.left||E.rect.right!==he.right||E.rect.top!==he.top||E.rect.bottom!==he.bottom;E.changed=le||te.x!==E.coords.x||te.y!==E.coords.y}return E}},{key:"applyToInteraction",value:function(i){var a=this.interaction,l=i.phase,h=a.coords.cur,g=a.coords.start,b=this.result,k=this.startDelta,E=b.delta;l==="start"&&ae(this.startDelta,b.delta);for(var z=0,A=[[g,k],[h,E]];z<A.length;z++){var I=A[z],B=I[0],J=I[1];B.page.x+=J.x,B.page.y+=J.y,B.client.x+=J.x,B.client.y+=J.y}var G=this.result.rectDelta,te=i.rect||a.rect;te.left+=G.left,te.right+=G.right,te.top+=G.top,te.bottom+=G.bottom,te.width=te.right-te.left,te.height=te.bottom-te.top}},{key:"setAndApply",value:function(i){var a=this.interaction,l=i.phase,h=i.preEnd,g=i.skipModifiers,b=this.setAll(this.fillArg({preEnd:h,phase:l,pageCoords:i.modifiedCoords||a.coords.cur.page}));if(this.result=b,!b.changed&&(!g||g<this.states.length)&&a.interacting())return!1;if(i.modifiedCoords){var k=a.coords.cur.page,E={x:i.modifiedCoords.x-k.x,y:i.modifiedCoords.y-k.y};b.coords.x+=E.x,b.coords.y+=E.y,b.delta.x+=E.x,b.delta.y+=E.y}this.applyToInteraction(i)}},{key:"beforeEnd",value:function(i){var a=i.interaction,l=i.event,h=this.states;if(h&&h.length){for(var g=!1,b=0;b<h.length;b++){var k=h[b];i.state=k;var E=k.options,z=k.methods,A=z.beforeEnd&&z.beforeEnd(i);if(A)return this.endResult=A,!1;g=g||!g&&this.shouldDo(E,!0,i.phase,!0)}g&&a.move({event:l,preEnd:!0})}}},{key:"stop",value:function(i){var a=i.interaction;if(this.states&&this.states.length){var l=ae({states:this.states,interactable:a.interactable,element:a.element,rect:null},i);this.fillArg(l);for(var h=0,g=this.states;h<g.length;h++){var b=g[h];l.state=b,b.methods.stop&&b.methods.stop(l)}this.states=null,this.endResult=null}}},{key:"prepareStates",value:function(i){this.states=[];for(var a=0;a<i.length;a++){var l=i[a],h=l.options,g=l.methods,b=l.name;this.states.push({options:h,methods:g,index:a,name:b})}return this.states}},{key:"restoreInteractionCoords",value:function(i){var a=i.interaction,l=a.coords,h=a.rect,g=a.modification;if(g.result){for(var b=g.startDelta,k=g.result,E=k.delta,z=k.rectDelta,A=0,I=[[l.start,b],[l.cur,E]];A<I.length;A++){var B=I[A],J=B[0],G=B[1];J.page.x-=G.x,J.page.y-=G.y,J.client.x-=G.x,J.client.y-=G.y}h.left-=z.left,h.right-=z.right,h.top-=z.top,h.bottom-=z.bottom}}},{key:"shouldDo",value:function(i,a,l,h){return!(!i||i.enabled===!1||h&&!i.endOnly||i.endOnly&&!a||l==="start"&&!i.setStart)}},{key:"copyFrom",value:function(i){this.startOffset=i.startOffset,this.startDelta=i.startDelta,this.startEdges=i.startEdges,this.edges=i.edges,this.states=i.states.map((function(a){return Yt(a)})),this.result=si(ae({},i.result.coords),ae({},i.result.rect))}},{key:"destroy",value:function(){for(var i in this)this[i]=null}}]),r})();function si(r,i){return{rect:i,coords:r,delta:{x:0,y:0},rectDelta:{left:0,right:0,top:0,bottom:0},eventProps:[],changed:!0}}function Ht(r,i){var a=r.defaults,l={start:r.start,set:r.set,beforeEnd:r.beforeEnd,stop:r.stop},h=function(g){var b=g||{};for(var k in b.enabled=b.enabled!==!1,a)k in b||(b[k]=a[k]);var E={options:b,methods:l,name:i,enable:function(){return b.enabled=!0,E},disable:function(){return b.enabled=!1,E}};return E};return i&&typeof i=="string"&&(h._defaults=a,h._methods=l),h}function ii(r){var i=r.iEvent,a=r.interaction.modification.result;a&&(i.modifiers=a.eventProps)}var Wi={id:"modifiers/base",before:["actions"],install:function(r){r.defaults.perAction.modifiers=[]},listeners:{"interactions:new":function(r){var i=r.interaction;i.modification=new bi(i)},"interactions:before-action-start":function(r){var i=r.interaction,a=r.interaction.modification;a.start(r,i.coords.start.page),i.edges=a.edges,a.applyToInteraction(r)},"interactions:before-action-move":function(r){var i=r.interaction,a=i.modification,l=a.setAndApply(r);return i.edges=a.edges,l},"interactions:before-action-end":function(r){var i=r.interaction,a=i.modification,l=a.beforeEnd(r);return i.edges=a.startEdges,l},"interactions:action-start":ii,"interactions:action-move":ii,"interactions:action-end":ii,"interactions:after-action-start":function(r){return r.interaction.modification.restoreInteractionCoords(r)},"interactions:after-action-move":function(r){return r.interaction.modification.restoreInteractionCoords(r)},"interactions:stop":function(r){return r.interaction.modification.stop(r)}}},_i=Wi,xi={base:{preventDefault:"auto",deltaSource:"page"},perAction:{enabled:!1,origin:{x:0,y:0}},actions:{}},ci=(function(r){d(a,r);var i=m(a);function a(l,h,g,b,k,E,z){var A;n(this,a),(A=i.call(this,l)).relatedTarget=null,A.screenX=void 0,A.screenY=void 0,A.button=void 0,A.buttons=void 0,A.ctrlKey=void 0,A.shiftKey=void 0,A.altKey=void 0,A.metaKey=void 0,A.page=void 0,A.client=void 0,A.delta=void 0,A.rect=void 0,A.x0=void 0,A.y0=void 0,A.t0=void 0,A.dt=void 0,A.duration=void 0,A.clientX0=void 0,A.clientY0=void 0,A.velocity=void 0,A.speed=void 0,A.swipe=void 0,A.axes=void 0,A.preEnd=void 0,k=k||l.element;var I=l.interactable,B=(I&&I.options||xi).deltaSource,J=ke(I,k,g),G=b==="start",te=b==="end",he=G?v(A):l.prevEvent,le=G?l.coords.start:te?{page:he.page,client:he.client,timeStamp:l.coords.cur.timeStamp}:l.coords.cur;return A.page=ae({},le.page),A.client=ae({},le.client),A.rect=ae({},l.rect),A.timeStamp=le.timeStamp,te||(A.page.x-=J.x,A.page.y-=J.y,A.client.x-=J.x,A.client.y-=J.y),A.ctrlKey=h.ctrlKey,A.altKey=h.altKey,A.shiftKey=h.shiftKey,A.metaKey=h.metaKey,A.button=h.button,A.buttons=h.buttons,A.target=k,A.currentTarget=k,A.preEnd=E,A.type=z||g+(b||""),A.interactable=I,A.t0=G?l.pointers[l.pointers.length-1].downTime:he.t0,A.x0=l.coords.start.page.x-J.x,A.y0=l.coords.start.page.y-J.y,A.clientX0=l.coords.start.client.x-J.x,A.clientY0=l.coords.start.client.y-J.y,A.delta=G||te?{x:0,y:0}:{x:A[B].x-he[B].x,y:A[B].y-he[B].y},A.dt=l.coords.delta.timeStamp,A.duration=A.timeStamp-A.t0,A.velocity=ae({},l.coords.velocity[B]),A.speed=mt(A.velocity.x,A.velocity.y),A.swipe=te||b==="inertiastart"?A.getSwipe():null,A}return c(a,[{key:"getSwipe",value:function(){var l=this._interaction;if(l.prevEvent.speed<600||this.timeStamp-l.prevEvent.timeStamp>150)return null;var h=180*Math.atan2(l.prevEvent.velocityY,l.prevEvent.velocityX)/Math.PI;h<0&&(h+=360);var g=112.5<=h&&h<247.5,b=202.5<=h&&h<337.5;return{up:b,down:!b&&22.5<=h&&h<157.5,left:g,right:!g&&(292.5<=h||h<67.5),angle:h,speed:l.prevEvent.speed,velocity:{x:l.prevEvent.velocityX,y:l.prevEvent.velocityY}}}},{key:"preventDefault",value:function(){}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}}]),a})(ue);Object.defineProperties(ci.prototype,{pageX:{get:function(){return this.page.x},set:function(r){this.page.x=r}},pageY:{get:function(){return this.page.y},set:function(r){this.page.y=r}},clientX:{get:function(){return this.client.x},set:function(r){this.client.x=r}},clientY:{get:function(){return this.client.y},set:function(r){this.client.y=r}},dx:{get:function(){return this.delta.x},set:function(r){this.delta.x=r}},dy:{get:function(){return this.delta.y},set:function(r){this.delta.y=r}},velocityX:{get:function(){return this.velocity.x},set:function(r){this.velocity.x=r}},velocityY:{get:function(){return this.velocity.y},set:function(r){this.velocity.y=r}}});var Yi=c((function r(i,a,l,h,g){n(this,r),this.id=void 0,this.pointer=void 0,this.event=void 0,this.downTime=void 0,this.downTarget=void 0,this.id=i,this.pointer=a,this.event=l,this.downTime=h,this.downTarget=g})),$i=(function(r){return r.interactable="",r.element="",r.prepared="",r.pointerIsDown="",r.pointerWasMoved="",r._proxy="",r})({}),wi=(function(r){return r.start="",r.move="",r.end="",r.stop="",r.interacting="",r})({}),Ki=0,Ui=(function(){function r(i){var a=this,l=i.pointerType,h=i.scopeFire;n(this,r),this.interactable=null,this.element=null,this.rect=null,this._rects=void 0,this.edges=null,this._scopeFire=void 0,this.prepared={name:null,axis:null,edges:null},this.pointerType=void 0,this.pointers=[],this.downEvent=null,this.downPointer={},this._latestPointer={pointer:null,event:null,eventTarget:null},this.prevEvent=null,this.pointerIsDown=!1,this.pointerWasMoved=!1,this._interacting=!1,this._ending=!1,this._stopped=!0,this._proxy=void 0,this.simulation=null,this.doMove=me((function(A){this.move(A)}),"The interaction.doMove() method has been renamed to interaction.move()"),this.coords={start:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},prev:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},cur:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},delta:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},velocity:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0}},this._id=Ki++,this._scopeFire=h,this.pointerType=l;var g=this;this._proxy={};var b=function(A){Object.defineProperty(a._proxy,A,{get:function(){return g[A]}})};for(var k in $i)b(k);var E=function(A){Object.defineProperty(a._proxy,A,{value:function(){return g[A].apply(g,arguments)}})};for(var z in wi)E(z);this._scopeFire("interactions:new",{interaction:this})}return c(r,[{key:"pointerMoveTolerance",get:function(){return 1}},{key:"pointerDown",value:function(i,a,l){var h=this.updatePointer(i,a,l,!0),g=this.pointers[h];this._scopeFire("interactions:down",{pointer:i,event:a,eventTarget:l,pointerIndex:h,pointerInfo:g,type:"down",interaction:this})}},{key:"start",value:function(i,a,l){return!(this.interacting()||!this.pointerIsDown||this.pointers.length<(i.name==="gesture"?2:1)||!a.options[i.name].enabled)&&(ge(this.prepared,i),this.interactable=a,this.element=l,this.rect=a.getRect(l),this.edges=this.prepared.edges?ae({},this.prepared.edges):{left:!0,right:!0,top:!0,bottom:!0},this._stopped=!1,this._interacting=this._doPhase({interaction:this,event:this.downEvent,phase:"start"})&&!this._stopped,this._interacting)}},{key:"pointerMove",value:function(i,a,l){this.simulation||this.modification&&this.modification.endResult||this.updatePointer(i,a,l,!1);var h,g,b=this.coords.cur.page.x===this.coords.prev.page.x&&this.coords.cur.page.y===this.coords.prev.page.y&&this.coords.cur.client.x===this.coords.prev.client.x&&this.coords.cur.client.y===this.coords.prev.client.y;this.pointerIsDown&&!this.pointerWasMoved&&(h=this.coords.cur.client.x-this.coords.start.client.x,g=this.coords.cur.client.y-this.coords.start.client.y,this.pointerWasMoved=mt(h,g)>this.pointerMoveTolerance);var k,E,z,A=this.getPointerIndex(i),I={pointer:i,pointerIndex:A,pointerInfo:this.pointers[A],event:a,type:"move",eventTarget:l,dx:h,dy:g,duplicate:b,interaction:this};b||(k=this.coords.velocity,E=this.coords.delta,z=Math.max(E.timeStamp/1e3,.001),k.page.x=E.page.x/z,k.page.y=E.page.y/z,k.client.x=E.client.x/z,k.client.y=E.client.y/z,k.timeStamp=z),this._scopeFire("interactions:move",I),b||this.simulation||(this.interacting()&&(I.type=null,this.move(I)),this.pointerWasMoved&&Tt(this.coords.prev,this.coords.cur))}},{key:"move",value:function(i){i&&i.event||wt(this.coords.delta),(i=ae({pointer:this._latestPointer.pointer,event:this._latestPointer.event,eventTarget:this._latestPointer.eventTarget,interaction:this},i||{})).phase="move",this._doPhase(i)}},{key:"pointerUp",value:function(i,a,l,h){var g=this.getPointerIndex(i);g===-1&&(g=this.updatePointer(i,a,l,!1));var b=/cancel$/i.test(a.type)?"cancel":"up";this._scopeFire("interactions:".concat(b),{pointer:i,pointerIndex:g,pointerInfo:this.pointers[g],event:a,eventTarget:l,type:b,curEventTarget:h,interaction:this}),this.simulation||this.end(a),this.removePointer(i,a)}},{key:"documentBlur",value:function(i){this.end(i),this._scopeFire("interactions:blur",{event:i,type:"blur",interaction:this})}},{key:"end",value:function(i){var a;this._ending=!0,i=i||this._latestPointer.event,this.interacting()&&(a=this._doPhase({event:i,interaction:this,phase:"end"})),this._ending=!1,a===!0&&this.stop()}},{key:"currentAction",value:function(){return this._interacting?this.prepared.name:null}},{key:"interacting",value:function(){return this._interacting}},{key:"stop",value:function(){this._scopeFire("interactions:stop",{interaction:this}),this.interactable=this.element=null,this._interacting=!1,this._stopped=!0,this.prepared.name=this.prevEvent=null}},{key:"getPointerIndex",value:function(i){var a=Ot(i);return this.pointerType==="mouse"||this.pointerType==="pen"?this.pointers.length-1:Oe(this.pointers,(function(l){return l.id===a}))}},{key:"getPointerInfo",value:function(i){return this.pointers[this.getPointerIndex(i)]}},{key:"updatePointer",value:function(i,a,l,h){var g,b,k,E=Ot(i),z=this.getPointerIndex(i),A=this.pointers[z];return h=h!==!1&&(h||/(down|start)$/i.test(a.type)),A?A.pointer=i:(A=new Yi(E,i,a,null,null),z=this.pointers.length,this.pointers.push(A)),ti(this.coords.cur,this.pointers.map((function(I){return I.pointer})),this._now()),g=this.coords.delta,b=this.coords.prev,k=this.coords.cur,g.page.x=k.page.x-b.page.x,g.page.y=k.page.y-b.page.y,g.client.x=k.client.x-b.client.x,g.client.y=k.client.y-b.client.y,g.timeStamp=k.timeStamp-b.timeStamp,h&&(this.pointerIsDown=!0,A.downTime=this.coords.cur.timeStamp,A.downTarget=l,dt(this.downPointer,i),this.interacting()||(Tt(this.coords.start,this.coords.cur),Tt(this.coords.prev,this.coords.cur),this.downEvent=a,this.pointerWasMoved=!1)),this._updateLatestPointer(i,a,l),this._scopeFire("interactions:update-pointer",{pointer:i,event:a,eventTarget:l,down:h,pointerInfo:A,pointerIndex:z,interaction:this}),z}},{key:"removePointer",value:function(i,a){var l=this.getPointerIndex(i);if(l!==-1){var h=this.pointers[l];this._scopeFire("interactions:remove-pointer",{pointer:i,event:a,eventTarget:null,pointerIndex:l,pointerInfo:h,interaction:this}),this.pointers.splice(l,1),this.pointerIsDown=!1}}},{key:"_updateLatestPointer",value:function(i,a,l){this._latestPointer.pointer=i,this._latestPointer.event=a,this._latestPointer.eventTarget=l}},{key:"destroy",value:function(){this._latestPointer.pointer=null,this._latestPointer.event=null,this._latestPointer.eventTarget=null}},{key:"_createPreparedEvent",value:function(i,a,l,h){return new ci(this,i,this.prepared.name,a,this.element,l,h)}},{key:"_fireEvent",value:function(i){var a;(a=this.interactable)==null||a.fire(i),(!this.prevEvent||i.timeStamp>=this.prevEvent.timeStamp)&&(this.prevEvent=i)}},{key:"_doPhase",value:function(i){var a=i.event,l=i.phase,h=i.preEnd,g=i.type,b=this.rect;if(b&&l==="move"&&(Ye(this.edges,b,this.coords.delta[this.interactable.options.deltaSource]),b.width=b.right-b.left,b.height=b.bottom-b.top),this._scopeFire("interactions:before-action-".concat(l),i)===!1)return!1;var k=i.iEvent=this._createPreparedEvent(a,l,h,g);return this._scopeFire("interactions:action-".concat(l),i),l==="start"&&(this.prevEvent=k),this._fireEvent(k),this._scopeFire("interactions:after-action-".concat(l),i),!0}},{key:"_now",value:function(){return Date.now()}}]),r})();function Si(r){ki(r.interaction)}function ki(r){if(!(function(a){return!(!a.offset.pending.x&&!a.offset.pending.y)})(r))return!1;var i=r.offset.pending;return li(r.coords.cur,i),li(r.coords.delta,i),Ye(r.edges,r.rect,i),i.x=0,i.y=0,!0}function Vi(r){var i=r.x,a=r.y;this.offset.pending.x+=i,this.offset.pending.y+=a,this.offset.total.x+=i,this.offset.total.y+=a}function li(r,i){var a=r.page,l=r.client,h=i.x,g=i.y;a.x+=h,a.y+=g,l.x+=h,l.y+=g}wi.offsetBy="";var Gi={id:"offset",before:["modifiers","pointer-events","actions","inertia"],install:function(r){r.Interaction.prototype.offsetBy=Vi},listeners:{"interactions:new":function(r){r.interaction.offset={total:{x:0,y:0},pending:{x:0,y:0}}},"interactions:update-pointer":function(r){return(function(i){i.pointerIsDown&&(li(i.coords.cur,i.offset.total),i.offset.pending.x=0,i.offset.pending.y=0)})(r.interaction)},"interactions:before-action-start":Si,"interactions:before-action-move":Si,"interactions:before-action-end":function(r){var i=r.interaction;if(ki(i))return i.move({offset:!0}),i.end(),!1},"interactions:stop":function(r){var i=r.interaction;i.offset.total.x=0,i.offset.total.y=0,i.offset.pending.x=0,i.offset.pending.y=0}}},Ci=Gi,Ei=(function(){function r(i){n(this,r),this.active=!1,this.isModified=!1,this.smoothEnd=!1,this.allowResume=!1,this.modification=void 0,this.modifierCount=0,this.modifierArg=void 0,this.startCoords=void 0,this.t0=0,this.v0=0,this.te=0,this.targetOffset=void 0,this.modifiedOffset=void 0,this.currentOffset=void 0,this.lambda_v0=0,this.one_ve_v0=0,this.timeout=void 0,this.interaction=void 0,this.interaction=i}return c(r,[{key:"start",value:function(i){var a=this.interaction,l=di(a);if(!l||!l.enabled)return!1;var h=a.coords.velocity.client,g=mt(h.x,h.y),b=this.modification||(this.modification=new bi(a));if(b.copyFrom(a.modification),this.t0=a._now(),this.allowResume=l.allowResume,this.v0=g,this.currentOffset={x:0,y:0},this.startCoords=a.coords.cur.page,this.modifierArg=b.fillArg({pageCoords:this.startCoords,preEnd:!0,phase:"inertiastart"}),this.t0-a.coords.cur.timeStamp<50&&g>l.minSpeed&&g>l.endSpeed)this.startInertia();else{if(b.result=b.setAll(this.modifierArg),!b.result.changed)return!1;this.startSmoothEnd()}return a.modification.result.rect=null,a.offsetBy(this.targetOffset),a._doPhase({interaction:a,event:i,phase:"inertiastart"}),a.offsetBy({x:-this.targetOffset.x,y:-this.targetOffset.y}),a.modification.result.rect=null,this.active=!0,a.simulation=this,!0}},{key:"startInertia",value:function(){var i=this,a=this.interaction.coords.velocity.client,l=di(this.interaction),h=l.resistance,g=-Math.log(l.endSpeed/this.v0)/h;this.targetOffset={x:(a.x-g)/h,y:(a.y-g)/h},this.te=g,this.lambda_v0=h/this.v0,this.one_ve_v0=1-l.endSpeed/this.v0;var b=this.modification,k=this.modifierArg;k.pageCoords={x:this.startCoords.x+this.targetOffset.x,y:this.startCoords.y+this.targetOffset.y},b.result=b.setAll(k),b.result.changed&&(this.isModified=!0,this.modifiedOffset={x:this.targetOffset.x+b.result.delta.x,y:this.targetOffset.y+b.result.delta.y}),this.onNextFrame((function(){return i.inertiaTick()}))}},{key:"startSmoothEnd",value:function(){var i=this;this.smoothEnd=!0,this.isModified=!0,this.targetOffset={x:this.modification.result.delta.x,y:this.modification.result.delta.y},this.onNextFrame((function(){return i.smoothEndTick()}))}},{key:"onNextFrame",value:function(i){var a=this;this.timeout=Q.request((function(){a.active&&i()}))}},{key:"inertiaTick",value:function(){var i,a,l,h,g,b,k,E=this,z=this.interaction,A=di(z).resistance,I=(z._now()-this.t0)/1e3;if(I<this.te){var B,J=1-(Math.exp(-A*I)-this.lambda_v0)/this.one_ve_v0;this.isModified?(i=0,a=0,l=this.targetOffset.x,h=this.targetOffset.y,g=this.modifiedOffset.x,b=this.modifiedOffset.y,B={x:ui(k=J,i,l,g),y:ui(k,a,h,b)}):B={x:this.targetOffset.x*J,y:this.targetOffset.y*J};var G={x:B.x-this.currentOffset.x,y:B.y-this.currentOffset.y};this.currentOffset.x+=G.x,this.currentOffset.y+=G.y,z.offsetBy(G),z.move(),this.onNextFrame((function(){return E.inertiaTick()}))}else z.offsetBy({x:this.modifiedOffset.x-this.currentOffset.x,y:this.modifiedOffset.y-this.currentOffset.y}),this.end()}},{key:"smoothEndTick",value:function(){var i=this,a=this.interaction,l=a._now()-this.t0,h=di(a).smoothEndDuration;if(l<h){var g={x:Ai(l,0,this.targetOffset.x,h),y:Ai(l,0,this.targetOffset.y,h)},b={x:g.x-this.currentOffset.x,y:g.y-this.currentOffset.y};this.currentOffset.x+=b.x,this.currentOffset.y+=b.y,a.offsetBy(b),a.move({skipModifiers:this.modifierCount}),this.onNextFrame((function(){return i.smoothEndTick()}))}else a.offsetBy({x:this.targetOffset.x-this.currentOffset.x,y:this.targetOffset.y-this.currentOffset.y}),this.end()}},{key:"resume",value:function(i){var a=i.pointer,l=i.event,h=i.eventTarget,g=this.interaction;g.offsetBy({x:-this.currentOffset.x,y:-this.currentOffset.y}),g.updatePointer(a,l,h,!0),g._doPhase({interaction:g,event:l,phase:"resume"}),Tt(g.coords.prev,g.coords.cur),this.stop()}},{key:"end",value:function(){this.interaction.move(),this.interaction.end(),this.stop()}},{key:"stop",value:function(){this.active=this.smoothEnd=!1,this.interaction.simulation=null,Q.cancel(this.timeout)}}]),r})();function di(r){var i=r.interactable,a=r.prepared;return i&&i.options&&a.name&&i.options[a.name].inertia}var cr={id:"inertia",before:["modifiers","actions"],install:function(r){var i=r.defaults;r.usePlugin(Ci),r.usePlugin(_i),r.actions.phases.inertiastart=!0,r.actions.phases.resume=!0,i.perAction.inertia={enabled:!1,resistance:10,minSpeed:100,endSpeed:10,allowResume:!0,smoothEndDuration:300}},listeners:{"interactions:new":function(r){var i=r.interaction;i.inertia=new Ei(i)},"interactions:before-action-end":function(r){var i=r.interaction,a=r.event;return(!i._interacting||i.simulation||!i.inertia.start(a))&&null},"interactions:down":function(r){var i=r.interaction,a=r.eventTarget,l=i.inertia;if(l.active)for(var h=a;_.element(h);){if(h===i.element){l.resume(r);break}h=ye(h)}},"interactions:stop":function(r){var i=r.interaction.inertia;i.active&&i.stop()},"interactions:before-action-resume":function(r){var i=r.interaction.modification;i.stop(r),i.start(r,r.interaction.coords.cur.page),i.applyToInteraction(r)},"interactions:before-action-inertiastart":function(r){return r.interaction.modification.setAndApply(r)},"interactions:action-resume":ii,"interactions:action-inertiastart":ii,"interactions:after-action-inertiastart":function(r){return r.interaction.modification.restoreInteractionCoords(r)},"interactions:after-action-resume":function(r){return r.interaction.modification.restoreInteractionCoords(r)}}};function ui(r,i,a,l){var h=1-r;return h*h*i+2*h*r*a+r*r*l}function Ai(r,i,a,l){return-a*(r/=l)*(r-2)+i}var Xi=cr;function Ti(r,i){for(var a=0;a<i.length;a++){var l=i[a];if(r.immediatePropagationStopped)break;l(r)}}var Oi=(function(){function r(i){n(this,r),this.options=void 0,this.types={},this.propagationStopped=!1,this.immediatePropagationStopped=!1,this.global=void 0,this.options=ae({},i||{})}return c(r,[{key:"fire",value:function(i){var a,l=this.global;(a=this.types[i.type])&&Ti(i,a),!i.propagationStopped&&l&&(a=l[i.type])&&Ti(i,a)}},{key:"on",value:function(i,a){var l=Me(i,a);for(i in l)this.types[i]=Se(this.types[i]||[],l[i])}},{key:"off",value:function(i,a){var l=Me(i,a);for(i in l){var h=this.types[i];if(h&&h.length)for(var g=0,b=l[i];g<b.length;g++){var k=b[g],E=h.indexOf(k);E!==-1&&h.splice(E,1)}}}},{key:"getRect",value:function(i){return null}}]),r})(),Ji=(function(){function r(i){n(this,r),this.currentTarget=void 0,this.originalEvent=void 0,this.type=void 0,this.originalEvent=i,dt(this,i)}return c(r,[{key:"preventOriginalDefault",value:function(){this.originalEvent.preventDefault()}},{key:"stopPropagation",value:function(){this.originalEvent.stopPropagation()}},{key:"stopImmediatePropagation",value:function(){this.originalEvent.stopImmediatePropagation()}}]),r})();function tt(r){return _.object(r)?{capture:!!r.capture,passive:!!r.passive}:{capture:!!r,passive:!1}}function bt(r,i){return r===i||(typeof r=="boolean"?!!i.capture===r&&!i.passive:!!r.capture==!!i.capture&&!!r.passive==!!i.passive)}var Gn={id:"events",install:function(r){var i,a=[],l={},h=[],g={add:b,remove:k,addDelegate:function(A,I,B,J,G){var te=tt(G);if(!l[B]){l[B]=[];for(var he=0;he<h.length;he++){var le=h[he];b(le,B,E),b(le,B,z,!0)}}var _e=l[B],Ie=H(_e,(function($e){return $e.selector===A&&$e.context===I}));Ie||(Ie={selector:A,context:I,listeners:[]},_e.push(Ie)),Ie.listeners.push({func:J,options:te})},removeDelegate:function(A,I,B,J,G){var te,he=tt(G),le=l[B],_e=!1;if(le)for(te=le.length-1;te>=0;te--){var Ie=le[te];if(Ie.selector===A&&Ie.context===I){for(var $e=Ie.listeners,Te=$e.length-1;Te>=0;Te--){var Ne=$e[Te];if(Ne.func===J&&bt(Ne.options,he)){$e.splice(Te,1),$e.length||(le.splice(te,1),k(I,B,E),k(I,B,z,!0)),_e=!0;break}}if(_e)break}}},delegateListener:E,delegateUseCapture:z,delegatedEvents:l,documents:h,targets:a,supportsOptions:!1,supportsPassive:!1};function b(A,I,B,J){if(A.addEventListener){var G=tt(J),te=H(a,(function(he){return he.eventTarget===A}));te||(te={eventTarget:A,events:{}},a.push(te)),te.events[I]||(te.events[I]=[]),H(te.events[I],(function(he){return he.func===B&&bt(he.options,G)}))||(A.addEventListener(I,B,g.supportsOptions?G:G.capture),te.events[I].push({func:B,options:G}))}}function k(A,I,B,J){if(A.addEventListener&&A.removeEventListener){var G=Oe(a,(function(Et){return Et.eventTarget===A})),te=a[G];if(te&&te.events)if(I!=="all"){var he=!1,le=te.events[I];if(le){if(B==="all"){for(var _e=le.length-1;_e>=0;_e--){var Ie=le[_e];k(A,I,Ie.func,Ie.options)}return}for(var $e=tt(J),Te=0;Te<le.length;Te++){var Ne=le[Te];if(Ne.func===B&&bt(Ne.options,$e)){A.removeEventListener(I,B,g.supportsOptions?$e:$e.capture),le.splice(Te,1),le.length===0&&(delete te.events[I],he=!0);break}}}he&&!Object.keys(te.events).length&&a.splice(G,1)}else for(I in te.events)te.events.hasOwnProperty(I)&&k(A,I,"all")}}function E(A,I){for(var B=tt(I),J=new Ji(A),G=l[A.type],te=Y(A)[0],he=te;_.element(he);){for(var le=0;le<G.length;le++){var _e=G[le],Ie=_e.selector,$e=_e.context;if(ze(he,Ie)&&ce($e,te)&&ce($e,he)){var Te=_e.listeners;J.currentTarget=he;for(var Ne=0;Ne<Te.length;Ne++){var Et=Te[Ne];bt(Et.options,B)&&Et.func(J)}}}he=ye(he)}}function z(A){return E(A,!0)}return(i=r.document)==null||i.createElement("div").addEventListener("test",null,{get capture(){return g.supportsOptions=!0},get passive(){return g.supportsPassive=!0}}),r.events=g,g}},lr={methodOrder:["simulationResume","mouseOrPen","hasPointer","idle"],search:function(r){for(var i=0,a=lr.methodOrder;i<a.length;i++){var l=a[i],h=lr[l](r);if(h)return h}return null},simulationResume:function(r){var i=r.pointerType,a=r.eventType,l=r.eventTarget,h=r.scope;if(!/down|start/i.test(a))return null;for(var g=0,b=h.interactions.list;g<b.length;g++){var k=b[g],E=l;if(k.simulation&&k.simulation.allowResume&&k.pointerType===i)for(;E;){if(E===k.element)return k;E=ye(E)}}return null},mouseOrPen:function(r){var i,a=r.pointerId,l=r.pointerType,h=r.eventType,g=r.scope;if(l!=="mouse"&&l!=="pen")return null;for(var b=0,k=g.interactions.list;b<k.length;b++){var E=k[b];if(E.pointerType===l){if(E.simulation&&!Pr(E,a))continue;if(E.interacting())return E;i||(i=E)}}if(i)return i;for(var z=0,A=g.interactions.list;z<A.length;z++){var I=A[z];if(!(I.pointerType!==l||/down/i.test(h)&&I.simulation))return I}return null},hasPointer:function(r){for(var i=r.pointerId,a=0,l=r.scope.interactions.list;a<l.length;a++){var h=l[a];if(Pr(h,i))return h}return null},idle:function(r){for(var i=r.pointerType,a=0,l=r.scope.interactions.list;a<l.length;a++){var h=l[a];if(h.pointers.length===1){var g=h.interactable;if(g&&(!g.options.gesture||!g.options.gesture.enabled))continue}else if(h.pointers.length>=2)continue;if(!h.interacting()&&i===h.pointerType)return h}return null}};function Pr(r,i){return r.pointers.some((function(a){return a.id===i}))}var Xn=lr,dr=["pointerDown","pointerMove","pointerUp","updatePointer","removePointer","windowBlur"];function Lr(r,i){return function(a){var l=i.interactions.list,h=N(a),g=Y(a),b=g[0],k=g[1],E=[];if(/^touch/.test(a.type)){i.prevTouchTime=i.now();for(var z=0,A=a.changedTouches;z<A.length;z++){var I=A[z],B={pointer:I,pointerId:Ot(I),pointerType:h,eventType:a.type,eventTarget:b,curEventTarget:k,scope:i},J=Rr(B);E.push([B.pointer,B.eventTarget,B.curEventTarget,J])}}else{var G=!1;if(!V.supportsPointerEvent&&/mouse/.test(a.type)){for(var te=0;te<l.length&&!G;te++)G=l[te].pointerType!=="mouse"&&l[te].pointerIsDown;G=G||i.now()-i.prevTouchTime<500||a.timeStamp===0}if(!G){var he={pointer:a,pointerId:Ot(a),pointerType:h,eventType:a.type,curEventTarget:k,eventTarget:b,scope:i},le=Rr(he);E.push([he.pointer,he.eventTarget,he.curEventTarget,le])}}for(var _e=0;_e<E.length;_e++){var Ie=E[_e],$e=Ie[0],Te=Ie[1],Ne=Ie[2];Ie[3][r]($e,a,Te,Ne)}}}function Rr(r){var i=r.pointerType,a=r.scope,l={interaction:Xn.search(r),searchDetails:r};return a.fire("interactions:find",l),l.interaction||a.interactions.new({pointerType:i})}function ur(r,i){var a=r.doc,l=r.scope,h=r.options,g=l.interactions.docEvents,b=l.events,k=b[i];for(var E in l.browser.isIOS&&!h.events&&(h.events={passive:!1}),b.delegatedEvents)k(a,E,b.delegateListener),k(a,E,b.delegateUseCapture,!0);for(var z=h&&h.events,A=0;A<g.length;A++){var I=g[A];k(a,I.type,I.listener,z)}}var Jn={id:"core/interactions",install:function(r){for(var i={},a=0;a<dr.length;a++){var l=dr[a];i[l]=Lr(l,r)}var h,g=V.pEventTypes;function b(){for(var k=0,E=r.interactions.list;k<E.length;k++){var z=E[k];if(z.pointerIsDown&&z.pointerType==="touch"&&!z._interacting)for(var A=function(){var J=B[I];r.documents.some((function(G){return ce(G.doc,J.downTarget)}))||z.removePointer(J.pointer,J.event)},I=0,B=z.pointers;I<B.length;I++)A()}}(h=F.PointerEvent?[{type:g.down,listener:b},{type:g.down,listener:i.pointerDown},{type:g.move,listener:i.pointerMove},{type:g.up,listener:i.pointerUp},{type:g.cancel,listener:i.pointerUp}]:[{type:"mousedown",listener:i.pointerDown},{type:"mousemove",listener:i.pointerMove},{type:"mouseup",listener:i.pointerUp},{type:"touchstart",listener:b},{type:"touchstart",listener:i.pointerDown},{type:"touchmove",listener:i.pointerMove},{type:"touchend",listener:i.pointerUp},{type:"touchcancel",listener:i.pointerUp}]).push({type:"blur",listener:function(k){for(var E=0,z=r.interactions.list;E<z.length;E++)z[E].documentBlur(k)}}),r.prevTouchTime=0,r.Interaction=(function(k){d(z,k);var E=m(z);function z(){return n(this,z),E.apply(this,arguments)}return c(z,[{key:"pointerMoveTolerance",get:function(){return r.interactions.pointerMoveTolerance},set:function(A){r.interactions.pointerMoveTolerance=A}},{key:"_now",value:function(){return r.now()}}]),z})(Ui),r.interactions={list:[],new:function(k){k.scopeFire=function(z,A){return r.fire(z,A)};var E=new r.Interaction(k);return r.interactions.list.push(E),E},listeners:i,docEvents:h,pointerMoveTolerance:1},r.usePlugin(ji)},listeners:{"scope:add-document":function(r){return ur(r,"add")},"scope:remove-document":function(r){return ur(r,"remove")},"interactable:unset":function(r,i){for(var a=r.interactable,l=i.interactions.list.length-1;l>=0;l--){var h=i.interactions.list[l];h.interactable===a&&(h.stop(),i.fire("interactions:destroy",{interaction:h}),h.destroy(),i.interactions.list.length>2&&i.interactions.list.splice(l,1))}}},onDocSignal:ur,doOnInteractions:Lr,methodNames:dr},Qn=Jn,Xt=(function(r){return r[r.On=0]="On",r[r.Off=1]="Off",r})(Xt||{}),Zn=(function(){function r(i,a,l,h){n(this,r),this.target=void 0,this.options=void 0,this._actions=void 0,this.events=new Oi,this._context=void 0,this._win=void 0,this._doc=void 0,this._scopeEvents=void 0,this._actions=a.actions,this.target=i,this._context=a.context||l,this._win=C(ct(i)?this._context:i),this._doc=this._win.document,this._scopeEvents=h,this.set(a)}return c(r,[{key:"_defaults",get:function(){return{base:{},perAction:{},actions:{}}}},{key:"setOnEvents",value:function(i,a){return _.func(a.onstart)&&this.on("".concat(i,"start"),a.onstart),_.func(a.onmove)&&this.on("".concat(i,"move"),a.onmove),_.func(a.onend)&&this.on("".concat(i,"end"),a.onend),_.func(a.oninertiastart)&&this.on("".concat(i,"inertiastart"),a.oninertiastart),this}},{key:"updatePerActionListeners",value:function(i,a,l){var h,g=this,b=(h=this._actions.map[i])==null?void 0:h.filterEventType,k=function(E){return(b==null||b(E))&&Gt(E,g._actions)};(_.array(a)||_.object(a))&&this._onOff(Xt.Off,i,a,void 0,k),(_.array(l)||_.object(l))&&this._onOff(Xt.On,i,l,void 0,k)}},{key:"setPerAction",value:function(i,a){var l=this._defaults;for(var h in a){var g=h,b=this.options[i],k=a[g];g==="listeners"&&this.updatePerActionListeners(i,b.listeners,k),_.array(k)?b[g]=de(k):_.plainObject(k)?(b[g]=ae(b[g]||{},Yt(k)),_.object(l.perAction[g])&&"enabled"in l.perAction[g]&&(b[g].enabled=k.enabled!==!1)):_.bool(k)&&_.object(l.perAction[g])?b[g].enabled=k:b[g]=k}}},{key:"getRect",value:function(i){return i=i||(_.element(this.target)?this.target:null),_.string(this.target)&&(i=i||this._context.querySelector(this.target)),Ge(i)}},{key:"rectChecker",value:function(i){var a=this;return _.func(i)?(this.getRect=function(l){var h=ae({},i.apply(a,l));return"width"in h||(h.width=h.right-h.left,h.height=h.bottom-h.top),h},this):i===null?(delete this.getRect,this):this.getRect}},{key:"_backCompatOption",value:function(i,a){if(ct(a)||_.object(a)){for(var l in this.options[i]=a,this._actions.map)this.options[l][i]=a;return this}return this.options[i]}},{key:"origin",value:function(i){return this._backCompatOption("origin",i)}},{key:"deltaSource",value:function(i){return i==="page"||i==="client"?(this.options.deltaSource=i,this):this.options.deltaSource}},{key:"getAllElements",value:function(){var i=this.target;return _.string(i)?Array.from(this._context.querySelectorAll(i)):_.func(i)&&i.getAllElements?i.getAllElements():_.element(i)?[i]:[]}},{key:"context",value:function(){return this._context}},{key:"inContext",value:function(i){return this._context===i.ownerDocument||ce(this._context,i)}},{key:"testIgnoreAllow",value:function(i,a,l){return!this.testIgnore(i.ignoreFrom,a,l)&&this.testAllow(i.allowFrom,a,l)}},{key:"testAllow",value:function(i,a,l){return!i||!!_.element(l)&&(_.string(i)?et(l,i,a):!!_.element(i)&&ce(i,l))}},{key:"testIgnore",value:function(i,a,l){return!(!i||!_.element(l))&&(_.string(i)?et(l,i,a):!!_.element(i)&&ce(i,l))}},{key:"fire",value:function(i){return this.events.fire(i),this}},{key:"_onOff",value:function(i,a,l,h,g){_.object(a)&&!_.array(a)&&(h=l,l=null);var b=Me(a,l,g);for(var k in b){k==="wheel"&&(k=V.wheelEvent);for(var E=0,z=b[k];E<z.length;E++){var A=z[E];Gt(k,this._actions)?this.events[i===Xt.On?"on":"off"](k,A):_.string(this.target)?this._scopeEvents[i===Xt.On?"addDelegate":"removeDelegate"](this.target,this._context,k,A,h):this._scopeEvents[i===Xt.On?"add":"remove"](this.target,k,A,h)}}return this}},{key:"on",value:function(i,a,l){return this._onOff(Xt.On,i,a,l)}},{key:"off",value:function(i,a,l){return this._onOff(Xt.Off,i,a,l)}},{key:"set",value:function(i){var a=this._defaults;for(var l in _.object(i)||(i={}),this.options=Yt(a.base),this._actions.methodDict){var h=l,g=this._actions.methodDict[h];this.options[h]={},this.setPerAction(h,ae(ae({},a.perAction),a.actions[h])),this[g](i[h])}for(var b in i)b!=="getRect"?_.func(this[b])&&this[b](i[b]):this.rectChecker(i.getRect);return this}},{key:"unset",value:function(){if(_.string(this.target))for(var i in this._scopeEvents.delegatedEvents)for(var a=this._scopeEvents.delegatedEvents[i],l=a.length-1;l>=0;l--){var h=a[l],g=h.selector,b=h.context,k=h.listeners;g===this.target&&b===this._context&&a.splice(l,1);for(var E=k.length-1;E>=0;E--)this._scopeEvents.removeDelegate(this.target,this._context,i,k[E][0],k[E][1])}else this._scopeEvents.remove(this.target,"all")}}]),r})(),ea=(function(){function r(i){var a=this;n(this,r),this.list=[],this.selectorMap={},this.scope=void 0,this.scope=i,i.addListeners({"interactable:unset":function(l){var h=l.interactable,g=h.target,b=_.string(g)?a.selectorMap[g]:g[a.scope.id],k=Oe(b,(function(E){return E===h}));b.splice(k,1)}})}return c(r,[{key:"new",value:function(i,a){a=ae(a||{},{actions:this.scope.actions});var l=new this.scope.Interactable(i,a,this.scope.document,this.scope.events);return this.scope.addDocument(l._doc),this.list.push(l),_.string(i)?(this.selectorMap[i]||(this.selectorMap[i]=[]),this.selectorMap[i].push(l)):(l.target[this.scope.id]||Object.defineProperty(i,this.scope.id,{value:[],configurable:!0}),i[this.scope.id].push(l)),this.scope.fire("interactable:new",{target:i,options:a,interactable:l,win:this.scope._win}),l}},{key:"getExisting",value:function(i,a){var l=a&&a.context||this.scope.document,h=_.string(i),g=h?this.selectorMap[i]:i[this.scope.id];if(g)return H(g,(function(b){return b._context===l&&(h||b.inContext(i))}))}},{key:"forEachMatch",value:function(i,a){for(var l=0,h=this.list;l<h.length;l++){var g=h[l],b=void 0;if((_.string(g.target)?_.element(i)&&ze(i,g.target):i===g.target)&&g.inContext(i)&&(b=a(g)),b!==void 0)return b}}}]),r})(),ta=(function(){function r(){var i=this;n(this,r),this.id="__interact_scope_".concat(Math.floor(100*Math.random())),this.isInitialized=!1,this.listenerMaps=[],this.browser=V,this.defaults=Yt(xi),this.Eventable=Oi,this.actions={map:{},phases:{start:!0,move:!0,end:!0},methodDict:{},phaselessTypes:{}},this.interactStatic=(function(l){var h=function g(b,k){var E=l.interactables.getExisting(b,k);return E||((E=l.interactables.new(b,k)).events.global=g.globalEvents),E};return h.getPointerAverage=Rt,h.getTouchBBox=pt,h.getTouchDistance=Dt,h.getTouchAngle=be,h.getElementRect=Ge,h.getElementClientRect=De,h.matchesSelector=ze,h.closest=We,h.globalEvents={},h.version="1.10.27",h.scope=l,h.use=function(g,b){return this.scope.usePlugin(g,b),this},h.isSet=function(g,b){return!!this.scope.interactables.get(g,b&&b.context)},h.on=me((function(g,b,k){if(_.string(g)&&g.search(" ")!==-1&&(g=g.trim().split(/ +/)),_.array(g)){for(var E=0,z=g;E<z.length;E++){var A=z[E];this.on(A,b,k)}return this}if(_.object(g)){for(var I in g)this.on(I,g[I],b);return this}return Gt(g,this.scope.actions)?this.globalEvents[g]?this.globalEvents[g].push(b):this.globalEvents[g]=[b]:this.scope.events.add(this.scope.document,g,b,{options:k}),this}),"The interact.on() method is being deprecated"),h.off=me((function(g,b,k){if(_.string(g)&&g.search(" ")!==-1&&(g=g.trim().split(/ +/)),_.array(g)){for(var E=0,z=g;E<z.length;E++){var A=z[E];this.off(A,b,k)}return this}if(_.object(g)){for(var I in g)this.off(I,g[I],b);return this}var B;return Gt(g,this.scope.actions)?g in this.globalEvents&&(B=this.globalEvents[g].indexOf(b))!==-1&&this.globalEvents[g].splice(B,1):this.scope.events.remove(this.scope.document,g,b,k),this}),"The interact.off() method is being deprecated"),h.debug=function(){return this.scope},h.supportsTouch=function(){return V.supportsTouch},h.supportsPointerEvent=function(){return V.supportsPointerEvent},h.stop=function(){for(var g=0,b=this.scope.interactions.list;g<b.length;g++)b[g].stop();return this},h.pointerMoveTolerance=function(g){return _.number(g)?(this.scope.interactions.pointerMoveTolerance=g,this):this.scope.interactions.pointerMoveTolerance},h.addDocument=function(g,b){this.scope.addDocument(g,b)},h.removeDocument=function(g){this.scope.removeDocument(g)},h})(this),this.InteractEvent=ci,this.Interactable=void 0,this.interactables=new ea(this),this._win=void 0,this.document=void 0,this.window=void 0,this.documents=[],this._plugins={list:[],map:{}},this.onWindowUnload=function(l){return i.removeDocument(l.target)};var a=this;this.Interactable=(function(l){d(g,l);var h=m(g);function g(){return n(this,g),h.apply(this,arguments)}return c(g,[{key:"_defaults",get:function(){return a.defaults}},{key:"set",value:function(b){return y(u(g.prototype),"set",this).call(this,b),a.fire("interactable:set",{options:b,interactable:this}),this}},{key:"unset",value:function(){y(u(g.prototype),"unset",this).call(this);var b=a.interactables.list.indexOf(this);b<0||(a.interactables.list.splice(b,1),a.fire("interactable:unset",{interactable:this}))}}]),g})(Zn)}return c(r,[{key:"addListeners",value:function(i,a){this.listenerMaps.push({id:a,map:i})}},{key:"fire",value:function(i,a){for(var l=0,h=this.listenerMaps;l<h.length;l++){var g=h[l].map[i];if(g&&g(a,this,i)===!1)return!1}}},{key:"init",value:function(i){return this.isInitialized?this:(function(a,l){return a.isInitialized=!0,_.window(l)&&L(l),F.init(l),V.init(l),Q.init(l),a.window=l,a.document=l.document,a.usePlugin(Qn),a.usePlugin(Gn),a})(this,i)}},{key:"pluginIsInstalled",value:function(i){var a=i.id;return a?!!this._plugins.map[a]:this._plugins.list.indexOf(i)!==-1}},{key:"usePlugin",value:function(i,a){if(!this.isInitialized)return this;if(this.pluginIsInstalled(i))return this;if(i.id&&(this._plugins.map[i.id]=i),this._plugins.list.push(i),i.install&&i.install(this,a),i.listeners&&i.before){for(var l=0,h=this.listenerMaps.length,g=i.before.reduce((function(k,E){return k[E]=!0,k[Ir(E)]=!0,k}),{});l<h;l++){var b=this.listenerMaps[l].id;if(b&&(g[b]||g[Ir(b)]))break}this.listenerMaps.splice(l,0,{id:i.id,map:i.listeners})}else i.listeners&&this.listenerMaps.push({id:i.id,map:i.listeners});return this}},{key:"addDocument",value:function(i,a){if(this.getDocIndex(i)!==-1)return!1;var l=C(i);a=a?ae({},a):{},this.documents.push({doc:i,options:a}),this.events.documents.push(i),i!==this.document&&this.events.add(l,"unload",this.onWindowUnload),this.fire("scope:add-document",{doc:i,window:l,scope:this,options:a})}},{key:"removeDocument",value:function(i){var a=this.getDocIndex(i),l=C(i),h=this.documents[a].options;this.events.remove(l,"unload",this.onWindowUnload),this.documents.splice(a,1),this.events.documents.splice(a,1),this.fire("scope:remove-document",{doc:i,window:l,scope:this,options:h})}},{key:"getDocIndex",value:function(i){for(var a=0;a<this.documents.length;a++)if(this.documents[a].doc===i)return a;return-1}},{key:"getDocOptions",value:function(i){var a=this.getDocIndex(i);return a===-1?null:this.documents[a].options}},{key:"now",value:function(){return(this.window.Date||Date).now()}}]),r})();function Ir(r){return r&&r.replace(/\/.*$/,"")}var Dr=new ta,Ct=Dr.interactStatic,ia=typeof globalThis!="undefined"?globalThis:window;Dr.init(ia);var ra=Object.freeze({__proto__:null,edgeTarget:function(){},elements:function(){},grid:function(r){var i=[["x","y"],["left","top"],["right","bottom"],["width","height"]].filter((function(l){var h=l[0],g=l[1];return h in r||g in r})),a=function(l,h){for(var g=r.range,b=r.limits,k=b===void 0?{left:-1/0,right:1/0,top:-1/0,bottom:1/0}:b,E=r.offset,z=E===void 0?{x:0,y:0}:E,A={range:g,grid:r,x:null,y:null},I=0;I<i.length;I++){var B=i[I],J=B[0],G=B[1],te=Math.round((l-z.x)/r[J]),he=Math.round((h-z.y)/r[G]);A[J]=Math.max(k.left,Math.min(k.right,te*r[J]+z.x)),A[G]=Math.max(k.top,Math.min(k.bottom,he*r[G]+z.y))}return A};return a.grid=r,a.coordFields=i,a}}),na={id:"snappers",install:function(r){var i=r.interactStatic;i.snappers=ae(i.snappers||{},ra),i.createSnapGrid=i.snappers.grid}},aa=na,oa={start:function(r){var i=r.state,a=r.rect,l=r.edges,h=r.pageCoords,g=i.options,b=g.ratio,k=g.enabled,E=i.options,z=E.equalDelta,A=E.modifiers;b==="preserve"&&(b=a.width/a.height),i.startCoords=ae({},h),i.startRect=ae({},a),i.ratio=b,i.equalDelta=z;var I=i.linkedEdges={top:l.top||l.left&&!l.bottom,left:l.left||l.top&&!l.right,bottom:l.bottom||l.right&&!l.top,right:l.right||l.bottom&&!l.left};if(i.xIsPrimaryAxis=!(!l.left&&!l.right),i.equalDelta){var B=(I.left?1:-1)*(I.top?1:-1);i.edgeSign={x:B,y:B}}else i.edgeSign={x:I.left?-1:1,y:I.top?-1:1};if(k!==!1&&ae(l,I),A!=null&&A.length){var J=new bi(r.interaction);J.copyFrom(r.interaction.modification),J.prepareStates(A),i.subModification=J,J.startAll(p({},r))}},set:function(r){var i=r.state,a=r.rect,l=r.coords,h=i.linkedEdges,g=ae({},l),b=i.equalDelta?sa:ca;if(ae(r.edges,h),b(i,i.xIsPrimaryAxis,l,a),!i.subModification)return null;var k=ae({},a);Ye(h,k,{x:l.x-g.x,y:l.y-g.y});var E=i.subModification.setAll(p(p({},r),{},{rect:k,edges:h,pageCoords:l,prevCoords:l,prevRect:k})),z=E.delta;return E.changed&&(b(i,Math.abs(z.x)>Math.abs(z.y),E.coords,E.rect),ae(l,E.coords)),E.eventProps},defaults:{ratio:"preserve",equalDelta:!1,modifiers:[],enabled:!1}};function sa(r,i,a){var l=r.startCoords,h=r.edgeSign;i?a.y=l.y+(a.x-l.x)*h.y:a.x=l.x+(a.y-l.y)*h.x}function ca(r,i,a,l){var h=r.startRect,g=r.startCoords,b=r.ratio,k=r.edgeSign;if(i){var E=l.width/b;a.y=g.y+(E-h.height)*k.y}else{var z=l.height*b;a.x=g.x+(z-h.width)*k.x}}var la=Ht(oa,"aspectRatio"),Fr=function(){};Fr._defaults={};var Qi=Fr;function ri(r,i,a){return _.func(r)?lt(r,i.interactable,i.element,[a.x,a.y,i]):lt(r,i.interactable,i.element)}var Zi={start:function(r){var i=r.rect,a=r.startOffset,l=r.state,h=r.interaction,g=r.pageCoords,b=l.options,k=b.elementRect,E=ae({left:0,top:0,right:0,bottom:0},b.offset||{});if(i&&k){var z=ri(b.restriction,h,g);if(z){var A=z.right-z.left-i.width,I=z.bottom-z.top-i.height;A<0&&(E.left+=A,E.right+=A),I<0&&(E.top+=I,E.bottom+=I)}E.left+=a.left-i.width*k.left,E.top+=a.top-i.height*k.top,E.right+=a.right-i.width*(1-k.right),E.bottom+=a.bottom-i.height*(1-k.bottom)}l.offset=E},set:function(r){var i=r.coords,a=r.interaction,l=r.state,h=l.options,g=l.offset,b=ri(h.restriction,a,i);if(b){var k=(function(E){return!E||"left"in E&&"top"in E||((E=ae({},E)).left=E.x||0,E.top=E.y||0,E.right=E.right||E.left+E.width,E.bottom=E.bottom||E.top+E.height),E})(b);i.x=Math.max(Math.min(k.right-g.right,i.x),k.left+g.left),i.y=Math.max(Math.min(k.bottom-g.bottom,i.y),k.top+g.top)}},defaults:{restriction:null,elementRect:null,offset:null,endOnly:!1,enabled:!1}},da=Ht(Zi,"restrict"),Br={top:1/0,left:1/0,bottom:-1/0,right:-1/0},Nr={top:-1/0,left:-1/0,bottom:1/0,right:1/0};function qr(r,i){for(var a=0,l=["top","left","bottom","right"];a<l.length;a++){var h=l[a];h in r||(r[h]=i[h])}return r}var zi={noInner:Br,noOuter:Nr,start:function(r){var i,a=r.interaction,l=r.startOffset,h=r.state,g=h.options;g&&(i=Le(ri(g.offset,a,a.coords.start.page))),i=i||{x:0,y:0},h.offset={top:i.y+l.top,left:i.x+l.left,bottom:i.y-l.bottom,right:i.x-l.right}},set:function(r){var i=r.coords,a=r.edges,l=r.interaction,h=r.state,g=h.offset,b=h.options;if(a){var k=ae({},i),E=ri(b.inner,l,k)||{},z=ri(b.outer,l,k)||{};qr(E,Br),qr(z,Nr),a.top?i.y=Math.min(Math.max(z.top+g.top,k.y),E.top+g.top):a.bottom&&(i.y=Math.max(Math.min(z.bottom+g.bottom,k.y),E.bottom+g.bottom)),a.left?i.x=Math.min(Math.max(z.left+g.left,k.x),E.left+g.left):a.right&&(i.x=Math.max(Math.min(z.right+g.right,k.x),E.right+g.right))}},defaults:{inner:null,outer:null,offset:null,endOnly:!1,enabled:!1}},ua=Ht(zi,"restrictEdges"),pa=ae({get elementRect(){return{top:0,left:0,bottom:1,right:1}},set elementRect(r){}},Zi.defaults),ha=Ht({start:Zi.start,set:Zi.set,defaults:pa},"restrictRect"),fa={width:-1/0,height:-1/0},ga={width:1/0,height:1/0},ma=Ht({start:function(r){return zi.start(r)},set:function(r){var i=r.interaction,a=r.state,l=r.rect,h=r.edges,g=a.options;if(h){var b=oe(ri(g.min,i,r.coords))||fa,k=oe(ri(g.max,i,r.coords))||ga;a.options={endOnly:g.endOnly,inner:ae({},zi.noInner),outer:ae({},zi.noOuter)},h.top?(a.options.inner.top=l.bottom-b.height,a.options.outer.top=l.bottom-k.height):h.bottom&&(a.options.inner.bottom=l.top+b.height,a.options.outer.bottom=l.top+k.height),h.left?(a.options.inner.left=l.right-b.width,a.options.outer.left=l.right-k.width):h.right&&(a.options.inner.right=l.left+b.width,a.options.outer.right=l.left+k.width),zi.set(r),a.options=g}},defaults:{min:null,max:null,endOnly:!1,enabled:!1}},"restrictSize"),pr={start:function(r){var i,a=r.interaction,l=r.interactable,h=r.element,g=r.rect,b=r.state,k=r.startOffset,E=b.options,z=E.offsetWithOrigin?(function(B){var J=B.interaction.element,G=Le(lt(B.state.options.origin,null,null,[J])),te=G||ke(B.interactable,J,B.interaction.prepared.name);return te})(r):{x:0,y:0};if(E.offset==="startCoords")i={x:a.coords.start.page.x,y:a.coords.start.page.y};else{var A=lt(E.offset,l,h,[a]);(i=Le(A)||{x:0,y:0}).x+=z.x,i.y+=z.y}var I=E.relativePoints;b.offsets=g&&I&&I.length?I.map((function(B,J){return{index:J,relativePoint:B,x:k.left-g.width*B.x+i.x,y:k.top-g.height*B.y+i.y}})):[{index:0,relativePoint:null,x:i.x,y:i.y}]},set:function(r){var i=r.interaction,a=r.coords,l=r.state,h=l.options,g=l.offsets,b=ke(i.interactable,i.element,i.prepared.name),k=ae({},a),E=[];h.offsetWithOrigin||(k.x-=b.x,k.y-=b.y);for(var z=0,A=g;z<A.length;z++)for(var I=A[z],B=k.x-I.x,J=k.y-I.y,G=0,te=h.targets.length;G<te;G++){var he=h.targets[G],le=void 0;(le=_.func(he)?he(B,J,i._proxy,I,G):he)&&E.push({x:(_.number(le.x)?le.x:B)+I.x,y:(_.number(le.y)?le.y:J)+I.y,range:_.number(le.range)?le.range:h.range,source:he,index:G,offset:I})}for(var _e={target:null,inRange:!1,distance:0,range:0,delta:{x:0,y:0}},Ie=0;Ie<E.length;Ie++){var $e=E[Ie],Te=$e.range,Ne=$e.x-k.x,Et=$e.y-k.y,ot=mt(Ne,Et),It=ot<=Te;Te===1/0&&_e.inRange&&_e.range!==1/0&&(It=!1),_e.target&&!(It?_e.inRange&&Te!==1/0?ot/Te<_e.distance/_e.range:Te===1/0&&_e.range!==1/0||ot<_e.distance:!_e.inRange&&ot<_e.distance)||(_e.target=$e,_e.distance=ot,_e.range=Te,_e.inRange=It,_e.delta.x=Ne,_e.delta.y=Et)}return _e.inRange&&(a.x=_e.target.x,a.y=_e.target.y),l.closest=_e,_e},defaults:{range:1/0,targets:null,offset:null,offsetWithOrigin:!0,origin:null,relativePoints:null,endOnly:!1,enabled:!1}},ya=Ht(pr,"snap"),er={start:function(r){var i=r.state,a=r.edges,l=i.options;if(!a)return null;r.state={options:{targets:null,relativePoints:[{x:a.left?0:1,y:a.top?0:1}],offset:l.offset||"self",origin:{x:0,y:0},range:l.range}},i.targetFields=i.targetFields||[["width","height"],["x","y"]],pr.start(r),i.offsets=r.state.offsets,r.state=i},set:function(r){var i=r.interaction,a=r.state,l=r.coords,h=a.options,g=a.offsets,b={x:l.x-g[0].x,y:l.y-g[0].y};a.options=ae({},h),a.options.targets=[];for(var k=0,E=h.targets||[];k<E.length;k++){var z=E[k],A=void 0;if(A=_.func(z)?z(b.x,b.y,i):z){for(var I=0,B=a.targetFields;I<B.length;I++){var J=B[I],G=J[0],te=J[1];if(G in A||te in A){A.x=A[G],A.y=A[te];break}}a.options.targets.push(A)}}var he=pr.set(r);return a.options=h,he},defaults:{range:1/0,targets:null,offset:null,endOnly:!1,enabled:!1}},va=Ht(er,"snapSize"),hr={aspectRatio:la,restrictEdges:ua,restrict:da,restrictRect:ha,restrictSize:ma,snapEdges:Ht({start:function(r){var i=r.edges;return i?(r.state.targetFields=r.state.targetFields||[[i.left?"left":"right",i.top?"top":"bottom"]],er.start(r)):null},set:er.set,defaults:ae(Yt(er.defaults),{targets:void 0,range:void 0,offset:{x:0,y:0}})},"snapEdges"),snap:ya,snapSize:va,spring:Qi,avoid:Qi,transform:Qi,rubberband:Qi},ba={id:"modifiers",install:function(r){var i=r.interactStatic;for(var a in r.usePlugin(_i),r.usePlugin(aa),i.modifiers=hr,hr){var l=hr[a],h=l._defaults,g=l._methods;h._methods=g,r.defaults.perAction[a]=h}}},_a=ba,Hr=(function(r){d(a,r);var i=m(a);function a(l,h,g,b,k,E){var z;if(n(this,a),dt(v(z=i.call(this,k)),g),g!==h&&dt(v(z),h),z.timeStamp=E,z.originalEvent=g,z.type=l,z.pointerId=Ot(h),z.pointerType=N(h),z.target=b,z.currentTarget=null,l==="tap"){var A=k.getPointerIndex(h);z.dt=z.timeStamp-k.pointers[A].downTime;var I=z.timeStamp-k.tapTime;z.double=!!k.prevTap&&k.prevTap.type!=="doubletap"&&k.prevTap.target===z.target&&I<500}else l==="doubletap"&&(z.dt=h.timeStamp-k.tapTime,z.double=!0);return z}return c(a,[{key:"_subtractOrigin",value:function(l){var h=l.x,g=l.y;return this.pageX-=h,this.pageY-=g,this.clientX-=h,this.clientY-=g,this}},{key:"_addOrigin",value:function(l){var h=l.x,g=l.y;return this.pageX+=h,this.pageY+=g,this.clientX+=h,this.clientY+=g,this}},{key:"preventDefault",value:function(){this.originalEvent.preventDefault()}}]),a})(ue),Mi={id:"pointer-events/base",before:["inertia","modifiers","auto-start","actions"],install:function(r){r.pointerEvents=Mi,r.defaults.actions.pointerEvents=Mi.defaults,ae(r.actions.phaselessTypes,Mi.types)},listeners:{"interactions:new":function(r){var i=r.interaction;i.prevTap=null,i.tapTime=0},"interactions:update-pointer":function(r){var i=r.down,a=r.pointerInfo;!i&&a.hold||(a.hold={duration:1/0,timeout:null})},"interactions:move":function(r,i){var a=r.interaction,l=r.pointer,h=r.event,g=r.eventTarget;r.duplicate||a.pointerIsDown&&!a.pointerWasMoved||(a.pointerIsDown&&fr(r),Jt({interaction:a,pointer:l,event:h,eventTarget:g,type:"move"},i))},"interactions:down":function(r,i){(function(a,l){for(var h=a.interaction,g=a.pointer,b=a.event,k=a.eventTarget,E=a.pointerIndex,z=h.pointers[E].hold,A=st(k),I={interaction:h,pointer:g,event:b,eventTarget:k,type:"hold",targets:[],path:A,node:null},B=0;B<A.length;B++){var J=A[B];I.node=J,l.fire("pointerEvents:collect-targets",I)}if(I.targets.length){for(var G=1/0,te=0,he=I.targets;te<he.length;te++){var le=he[te].eventable.options.holdDuration;le<G&&(G=le)}z.duration=G,z.timeout=setTimeout((function(){Jt({interaction:h,eventTarget:k,pointer:g,event:b,type:"hold"},l)}),G)}})(r,i),Jt(r,i)},"interactions:up":function(r,i){fr(r),Jt(r,i),(function(a,l){var h=a.interaction,g=a.pointer,b=a.event,k=a.eventTarget;h.pointerWasMoved||Jt({interaction:h,eventTarget:k,pointer:g,event:b,type:"tap"},l)})(r,i)},"interactions:cancel":function(r,i){fr(r),Jt(r,i)}},PointerEvent:Hr,fire:Jt,collectEventTargets:jr,defaults:{holdDuration:600,ignoreFrom:null,allowFrom:null,origin:{x:0,y:0}},types:{down:!0,move:!0,up:!0,cancel:!0,tap:!0,doubletap:!0,hold:!0}};function Jt(r,i){var a=r.interaction,l=r.pointer,h=r.event,g=r.eventTarget,b=r.type,k=r.targets,E=k===void 0?jr(r,i):k,z=new Hr(b,l,h,g,a,i.now());i.fire("pointerEvents:new",{pointerEvent:z});for(var A={interaction:a,pointer:l,event:h,eventTarget:g,targets:E,type:b,pointerEvent:z},I=0;I<E.length;I++){var B=E[I];for(var J in B.props||{})z[J]=B.props[J];var G=ke(B.eventable,B.node);if(z._subtractOrigin(G),z.eventable=B.eventable,z.currentTarget=B.node,B.eventable.fire(z),z._addOrigin(G),z.immediatePropagationStopped||z.propagationStopped&&I+1<E.length&&E[I+1].node!==z.currentTarget)break}if(i.fire("pointerEvents:fired",A),b==="tap"){var te=z.double?Jt({interaction:a,pointer:l,event:h,eventTarget:g,type:"doubletap"},i):z;a.prevTap=te,a.tapTime=te.timeStamp}return z}function jr(r,i){var a=r.interaction,l=r.pointer,h=r.event,g=r.eventTarget,b=r.type,k=a.getPointerIndex(l),E=a.pointers[k];if(b==="tap"&&(a.pointerWasMoved||!E||E.downTarget!==g))return[];for(var z=st(g),A={interaction:a,pointer:l,event:h,eventTarget:g,type:b,path:z,targets:[],node:null},I=0;I<z.length;I++){var B=z[I];A.node=B,i.fire("pointerEvents:collect-targets",A)}return b==="hold"&&(A.targets=A.targets.filter((function(J){var G,te;return J.eventable.options.holdDuration===((G=a.pointers[k])==null||(te=G.hold)==null?void 0:te.duration)}))),A.targets}function fr(r){var i=r.interaction,a=r.pointerIndex,l=i.pointers[a].hold;l&&l.timeout&&(clearTimeout(l.timeout),l.timeout=null)}var xa=Object.freeze({__proto__:null,default:Mi});function wa(r){var i=r.interaction;i.holdIntervalHandle&&(clearInterval(i.holdIntervalHandle),i.holdIntervalHandle=null)}var Sa={id:"pointer-events/holdRepeat",install:function(r){r.usePlugin(Mi);var i=r.pointerEvents;i.defaults.holdRepeatInterval=0,i.types.holdrepeat=r.actions.phaselessTypes.holdrepeat=!0},listeners:["move","up","cancel","endall"].reduce((function(r,i){return r["pointerEvents:".concat(i)]=wa,r}),{"pointerEvents:new":function(r){var i=r.pointerEvent;i.type==="hold"&&(i.count=(i.count||0)+1)},"pointerEvents:fired":function(r,i){var a=r.interaction,l=r.pointerEvent,h=r.eventTarget,g=r.targets;if(l.type==="hold"&&g.length){var b=g[0].eventable.options.holdRepeatInterval;b<=0||(a.holdIntervalHandle=setTimeout((function(){i.pointerEvents.fire({interaction:a,eventTarget:h,type:"hold",pointer:l,event:l},i)}),b))}}})},ka=Sa,Ca={id:"pointer-events/interactableTargets",install:function(r){var i=r.Interactable;i.prototype.pointerEvents=function(l){return ae(this.events.options,l),this};var a=i.prototype._backCompatOption;i.prototype._backCompatOption=function(l,h){var g=a.call(this,l,h);return g===this&&(this.events.options[l]=h),g}},listeners:{"pointerEvents:collect-targets":function(r,i){var a=r.targets,l=r.node,h=r.type,g=r.eventTarget;i.interactables.forEachMatch(l,(function(b){var k=b.events,E=k.options;k.types[h]&&k.types[h].length&&b.testIgnoreAllow(E,l,g)&&a.push({node:l,eventable:k,props:{interactable:b}})}))},"interactable:new":function(r){var i=r.interactable;i.events.getRect=function(a){return i.getRect(a)}},"interactable:set":function(r,i){var a=r.interactable,l=r.options;ae(a.events.options,i.pointerEvents.defaults),ae(a.events.options,l.pointerEvents||{})}}},Ea=Ca,Aa={id:"pointer-events",install:function(r){r.usePlugin(xa),r.usePlugin(ka),r.usePlugin(Ea)}},Ta=Aa,Oa={id:"reflow",install:function(r){var i=r.Interactable;r.actions.phases.reflow=!0,i.prototype.reflow=function(a){return(function(l,h,g){for(var b=l.getAllElements(),k=g.window.Promise,E=k?[]:null,z=function(){var I=b[A],B=l.getRect(I);if(!B)return 1;var J,G=H(g.interactions.list,(function(le){return le.interacting()&&le.interactable===l&&le.element===I&&le.prepared.name===h.name}));if(G)G.move(),E&&(J=G._reflowPromise||new k((function(le){G._reflowResolve=le})));else{var te=oe(B),he=(function(le){return{coords:le,get page(){return this.coords.page},get client(){return this.coords.client},get timeStamp(){return this.coords.timeStamp},get pageX(){return this.coords.page.x},get pageY(){return this.coords.page.y},get clientX(){return this.coords.client.x},get clientY(){return this.coords.client.y},get pointerId(){return this.coords.pointerId},get target(){return this.coords.target},get type(){return this.coords.type},get pointerType(){return this.coords.pointerType},get buttons(){return this.coords.buttons},preventDefault:function(){}}})({page:{x:te.x,y:te.y},client:{x:te.x,y:te.y},timeStamp:g.now()});J=(function(le,_e,Ie,$e,Te){var Ne=le.interactions.new({pointerType:"reflow"}),Et={interaction:Ne,event:Te,pointer:Te,eventTarget:Ie,phase:"reflow"};Ne.interactable=_e,Ne.element=Ie,Ne.prevEvent=Te,Ne.updatePointer(Te,Te,Ie,!0),wt(Ne.coords.delta),ge(Ne.prepared,$e),Ne._doPhase(Et);var ot=le.window,It=ot.Promise,jt=It?new It((function(Ut){Ne._reflowResolve=Ut})):void 0;return Ne._reflowPromise=jt,Ne.start($e,_e,Ie),Ne._interacting?(Ne.move(Et),Ne.end(Te)):(Ne.stop(),Ne._reflowResolve()),Ne.removePointer(Te,Te),jt})(g,l,I,h,he)}E&&E.push(J)},A=0;A<b.length&&!z();A++);return E&&k.all(E).then((function(){return l}))})(this,a,r)}},listeners:{"interactions:stop":function(r,i){var a=r.interaction;a.pointerType==="reflow"&&(a._reflowResolve&&a._reflowResolve(),(function(l,h){l.splice(l.indexOf(h),1)})(i.interactions.list,a))}}},za=Oa;if(Ct.use(ji),Ct.use(Ci),Ct.use(Ta),Ct.use(Xi),Ct.use(_a),Ct.use(qi),Ct.use(ne),Ct.use(pe),Ct.use(za),Ct.default=Ct,(typeof ni=="undefined"?"undefined":t(ni))==="object"&&ni)try{ni.exports=Ct}catch{}return Ct.default=Ct,Ct}))});var Vn=Na(Wr(),1);function on(e){return typeof e=="undefined"||e===null}function qa(e){return typeof e=="object"&&e!==null}function Ha(e){return Array.isArray(e)?e:on(e)?[]:[e]}function ja(e,p){var t,n,o,c;if(p)for(c=Object.keys(p),t=0,n=c.length;t<n;t+=1)o=c[t],e[o]=p[o];return e}function Wa(e,p){var t="",n;for(n=0;n<p;n+=1)t+=e;return t}function Ya(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var $a=on,Ka=qa,Ua=Ha,Va=Wa,Ga=Ya,Xa=ja,vt={isNothing:$a,isObject:Ka,toArray:Ua,repeat:Va,isNegativeZero:Ga,extend:Xa};function sn(e,p){var t="",n=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(t+='in "'+e.mark.name+'" '),t+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!p&&e.mark.snippet&&(t+=`

`+e.mark.snippet),n+" "+t):n}function Ri(e,p){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=p,this.message=sn(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Ri.prototype=Object.create(Error.prototype);Ri.prototype.constructor=Ri;Ri.prototype.toString=function(p){return this.name+": "+sn(this,p)};var At=Ri;function yr(e,p,t,n,o){var c="",s="",d=Math.floor(o/2)-1;return n-p>d&&(c=" ... ",p=n-d+c.length),t-n>d&&(s=" ...",t=n+d-s.length),{str:c+e.slice(p,t).replace(/\t/g,"\u2192")+s,pos:n-p+c.length}}function vr(e,p){return vt.repeat(" ",p-e.length)+e}function Ja(e,p){if(p=Object.create(p||null),!e.buffer)return null;p.maxLength||(p.maxLength=79),typeof p.indent!="number"&&(p.indent=1),typeof p.linesBefore!="number"&&(p.linesBefore=3),typeof p.linesAfter!="number"&&(p.linesAfter=2);for(var t=/\r?\n|\r|\0/g,n=[0],o=[],c,s=-1;c=t.exec(e.buffer);)o.push(c.index),n.push(c.index+c[0].length),e.position<=c.index&&s<0&&(s=n.length-2);s<0&&(s=n.length-1);var d="",u,f,v=Math.min(e.line+p.linesAfter,o.length).toString().length,m=p.maxLength-(p.indent+v+3);for(u=1;u<=p.linesBefore&&!(s-u<0);u++)f=yr(e.buffer,n[s-u],o[s-u],e.position-(n[s]-n[s-u]),m),d=vt.repeat(" ",p.indent)+vr((e.line-u+1).toString(),v)+" | "+f.str+`
`+d;for(f=yr(e.buffer,n[s],o[s],e.position,m),d+=vt.repeat(" ",p.indent)+vr((e.line+1).toString(),v)+" | "+f.str+`
`,d+=vt.repeat("-",p.indent+v+3+f.pos)+`^
`,u=1;u<=p.linesAfter&&!(s+u>=o.length);u++)f=yr(e.buffer,n[s+u],o[s+u],e.position-(n[s]-n[s+u]),m),d+=vt.repeat(" ",p.indent)+vr((e.line+u+1).toString(),v)+" | "+f.str+`
`;return d.replace(/\n$/,"")}var Qa=Ja,Za=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],eo=["scalar","sequence","mapping"];function to(e){var p={};return e!==null&&Object.keys(e).forEach(function(t){e[t].forEach(function(n){p[String(n)]=t})}),p}function io(e,p){if(p=p||{},Object.keys(p).forEach(function(t){if(Za.indexOf(t)===-1)throw new At('Unknown option "'+t+'" is met in definition of "'+e+'" YAML type.')}),this.options=p,this.tag=e,this.kind=p.kind||null,this.resolve=p.resolve||function(){return!0},this.construct=p.construct||function(t){return t},this.instanceOf=p.instanceOf||null,this.predicate=p.predicate||null,this.represent=p.represent||null,this.representName=p.representName||null,this.defaultStyle=p.defaultStyle||null,this.multi=p.multi||!1,this.styleAliases=to(p.styleAliases||null),eo.indexOf(this.kind)===-1)throw new At('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var xt=io;function Yr(e,p){var t=[];return e[p].forEach(function(n){var o=t.length;t.forEach(function(c,s){c.tag===n.tag&&c.kind===n.kind&&c.multi===n.multi&&(o=s)}),t[o]=n}),t}function ro(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},p,t;function n(o){o.multi?(e.multi[o.kind].push(o),e.multi.fallback.push(o)):e[o.kind][o.tag]=e.fallback[o.tag]=o}for(p=0,t=arguments.length;p<t;p+=1)arguments[p].forEach(n);return e}function _r(e){return this.extend(e)}_r.prototype.extend=function(p){var t=[],n=[];if(p instanceof xt)n.push(p);else if(Array.isArray(p))n=n.concat(p);else if(p&&(Array.isArray(p.implicit)||Array.isArray(p.explicit)))p.implicit&&(t=t.concat(p.implicit)),p.explicit&&(n=n.concat(p.explicit));else throw new At("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");t.forEach(function(c){if(!(c instanceof xt))throw new At("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(c.loadKind&&c.loadKind!=="scalar")throw new At("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(c.multi)throw new At("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),n.forEach(function(c){if(!(c instanceof xt))throw new At("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var o=Object.create(_r.prototype);return o.implicit=(this.implicit||[]).concat(t),o.explicit=(this.explicit||[]).concat(n),o.compiledImplicit=Yr(o,"implicit"),o.compiledExplicit=Yr(o,"explicit"),o.compiledTypeMap=ro(o.compiledImplicit,o.compiledExplicit),o};var cn=_r,ln=new xt("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),dn=new xt("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),un=new xt("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),pn=new cn({explicit:[ln,dn,un]});function no(e){if(e===null)return!0;var p=e.length;return p===1&&e==="~"||p===4&&(e==="null"||e==="Null"||e==="NULL")}function ao(){return null}function oo(e){return e===null}var hn=new xt("tag:yaml.org,2002:null",{kind:"scalar",resolve:no,construct:ao,predicate:oo,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function so(e){if(e===null)return!1;var p=e.length;return p===4&&(e==="true"||e==="True"||e==="TRUE")||p===5&&(e==="false"||e==="False"||e==="FALSE")}function co(e){return e==="true"||e==="True"||e==="TRUE"}function lo(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var fn=new xt("tag:yaml.org,2002:bool",{kind:"scalar",resolve:so,construct:co,predicate:lo,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function uo(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function po(e){return 48<=e&&e<=55}function ho(e){return 48<=e&&e<=57}function fo(e){if(e===null)return!1;var p=e.length,t=0,n=!1,o;if(!p)return!1;if(o=e[t],(o==="-"||o==="+")&&(o=e[++t]),o==="0"){if(t+1===p)return!0;if(o=e[++t],o==="b"){for(t++;t<p;t++)if(o=e[t],o!=="_"){if(o!=="0"&&o!=="1")return!1;n=!0}return n&&o!=="_"}if(o==="x"){for(t++;t<p;t++)if(o=e[t],o!=="_"){if(!uo(e.charCodeAt(t)))return!1;n=!0}return n&&o!=="_"}if(o==="o"){for(t++;t<p;t++)if(o=e[t],o!=="_"){if(!po(e.charCodeAt(t)))return!1;n=!0}return n&&o!=="_"}}if(o==="_")return!1;for(;t<p;t++)if(o=e[t],o!=="_"){if(!ho(e.charCodeAt(t)))return!1;n=!0}return!(!n||o==="_")}function go(e){var p=e,t=1,n;if(p.indexOf("_")!==-1&&(p=p.replace(/_/g,"")),n=p[0],(n==="-"||n==="+")&&(n==="-"&&(t=-1),p=p.slice(1),n=p[0]),p==="0")return 0;if(n==="0"){if(p[1]==="b")return t*parseInt(p.slice(2),2);if(p[1]==="x")return t*parseInt(p.slice(2),16);if(p[1]==="o")return t*parseInt(p.slice(2),8)}return t*parseInt(p,10)}function mo(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!vt.isNegativeZero(e)}var gn=new xt("tag:yaml.org,2002:int",{kind:"scalar",resolve:fo,construct:go,predicate:mo,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),yo=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function vo(e){return!(e===null||!yo.test(e)||e[e.length-1]==="_")}function bo(e){var p,t;return p=e.replace(/_/g,"").toLowerCase(),t=p[0]==="-"?-1:1,"+-".indexOf(p[0])>=0&&(p=p.slice(1)),p===".inf"?t===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:p===".nan"?NaN:t*parseFloat(p,10)}var _o=/^[-+]?[0-9]+e/;function xo(e,p){var t;if(isNaN(e))switch(p){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(p){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(p){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(vt.isNegativeZero(e))return"-0.0";return t=e.toString(10),_o.test(t)?t.replace("e",".e"):t}function wo(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||vt.isNegativeZero(e))}var mn=new xt("tag:yaml.org,2002:float",{kind:"scalar",resolve:vo,construct:bo,predicate:wo,represent:xo,defaultStyle:"lowercase"}),yn=pn.extend({implicit:[hn,fn,gn,mn]}),vn=yn,bn=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),_n=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function So(e){return e===null?!1:bn.exec(e)!==null||_n.exec(e)!==null}function ko(e){var p,t,n,o,c,s,d,u=0,f=null,v,m,y;if(p=bn.exec(e),p===null&&(p=_n.exec(e)),p===null)throw new Error("Date resolve error");if(t=+p[1],n=+p[2]-1,o=+p[3],!p[4])return new Date(Date.UTC(t,n,o));if(c=+p[4],s=+p[5],d=+p[6],p[7]){for(u=p[7].slice(0,3);u.length<3;)u+="0";u=+u}return p[9]&&(v=+p[10],m=+(p[11]||0),f=(v*60+m)*6e4,p[9]==="-"&&(f=-f)),y=new Date(Date.UTC(t,n,o,c,s,d,u)),f&&y.setTime(y.getTime()-f),y}function Co(e){return e.toISOString()}var xn=new xt("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:So,construct:ko,instanceOf:Date,represent:Co});function Eo(e){return e==="<<"||e===null}var wn=new xt("tag:yaml.org,2002:merge",{kind:"scalar",resolve:Eo}),Cr=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function Ao(e){if(e===null)return!1;var p,t,n=0,o=e.length,c=Cr;for(t=0;t<o;t++)if(p=c.indexOf(e.charAt(t)),!(p>64)){if(p<0)return!1;n+=6}return n%8===0}function To(e){var p,t,n=e.replace(/[\r\n=]/g,""),o=n.length,c=Cr,s=0,d=[];for(p=0;p<o;p++)p%4===0&&p&&(d.push(s>>16&255),d.push(s>>8&255),d.push(s&255)),s=s<<6|c.indexOf(n.charAt(p));return t=o%4*6,t===0?(d.push(s>>16&255),d.push(s>>8&255),d.push(s&255)):t===18?(d.push(s>>10&255),d.push(s>>2&255)):t===12&&d.push(s>>4&255),new Uint8Array(d)}function Oo(e){var p="",t=0,n,o,c=e.length,s=Cr;for(n=0;n<c;n++)n%3===0&&n&&(p+=s[t>>18&63],p+=s[t>>12&63],p+=s[t>>6&63],p+=s[t&63]),t=(t<<8)+e[n];return o=c%3,o===0?(p+=s[t>>18&63],p+=s[t>>12&63],p+=s[t>>6&63],p+=s[t&63]):o===2?(p+=s[t>>10&63],p+=s[t>>4&63],p+=s[t<<2&63],p+=s[64]):o===1&&(p+=s[t>>2&63],p+=s[t<<4&63],p+=s[64],p+=s[64]),p}function zo(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var Sn=new xt("tag:yaml.org,2002:binary",{kind:"scalar",resolve:Ao,construct:To,predicate:zo,represent:Oo}),Mo=Object.prototype.hasOwnProperty,Po=Object.prototype.toString;function Lo(e){if(e===null)return!0;var p=[],t,n,o,c,s,d=e;for(t=0,n=d.length;t<n;t+=1){if(o=d[t],s=!1,Po.call(o)!=="[object Object]")return!1;for(c in o)if(Mo.call(o,c))if(!s)s=!0;else return!1;if(!s)return!1;if(p.indexOf(c)===-1)p.push(c);else return!1}return!0}function Ro(e){return e!==null?e:[]}var kn=new xt("tag:yaml.org,2002:omap",{kind:"sequence",resolve:Lo,construct:Ro}),Io=Object.prototype.toString;function Do(e){if(e===null)return!0;var p,t,n,o,c,s=e;for(c=new Array(s.length),p=0,t=s.length;p<t;p+=1){if(n=s[p],Io.call(n)!=="[object Object]"||(o=Object.keys(n),o.length!==1))return!1;c[p]=[o[0],n[o[0]]]}return!0}function Fo(e){if(e===null)return[];var p,t,n,o,c,s=e;for(c=new Array(s.length),p=0,t=s.length;p<t;p+=1)n=s[p],o=Object.keys(n),c[p]=[o[0],n[o[0]]];return c}var Cn=new xt("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:Do,construct:Fo}),Bo=Object.prototype.hasOwnProperty;function No(e){if(e===null)return!0;var p,t=e;for(p in t)if(Bo.call(t,p)&&t[p]!==null)return!1;return!0}function qo(e){return e!==null?e:{}}var En=new xt("tag:yaml.org,2002:set",{kind:"mapping",resolve:No,construct:qo}),Er=vn.extend({implicit:[xn,wn],explicit:[Sn,kn,Cn,En]}),Zt=Object.prototype.hasOwnProperty,ir=1,An=2,Tn=3,rr=4,br=1,Ho=2,$r=3,jo=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,Wo=/[\x85\u2028\u2029]/,Yo=/[,\[\]\{\}]/,On=/^(?:!|!!|![a-z\-]+!)$/i,zn=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function Kr(e){return Object.prototype.toString.call(e)}function $t(e){return e===10||e===13}function oi(e){return e===9||e===32}function Lt(e){return e===9||e===32||e===10||e===13}function hi(e){return e===44||e===91||e===93||e===123||e===125}function $o(e){var p;return 48<=e&&e<=57?e-48:(p=e|32,97<=p&&p<=102?p-97+10:-1)}function Ko(e){return e===120?2:e===117?4:e===85?8:0}function Uo(e){return 48<=e&&e<=57?e-48:-1}function Ur(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"\x85":e===95?"\xA0":e===76?"\u2028":e===80?"\u2029":""}function Vo(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}var Mn=new Array(256),Pn=new Array(256);for(ai=0;ai<256;ai++)Mn[ai]=Ur(ai)?1:0,Pn[ai]=Ur(ai);var ai;function Go(e,p){this.input=e,this.filename=p.filename||null,this.schema=p.schema||Er,this.onWarning=p.onWarning||null,this.legacy=p.legacy||!1,this.json=p.json||!1,this.listener=p.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function Ln(e,p){var t={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return t.snippet=Qa(t),new At(p,t)}function xe(e,p){throw Ln(e,p)}function nr(e,p){e.onWarning&&e.onWarning.call(null,Ln(e,p))}var Vr={YAML:function(p,t,n){var o,c,s;p.version!==null&&xe(p,"duplication of %YAML directive"),n.length!==1&&xe(p,"YAML directive accepts exactly one argument"),o=/^([0-9]+)\.([0-9]+)$/.exec(n[0]),o===null&&xe(p,"ill-formed argument of the YAML directive"),c=parseInt(o[1],10),s=parseInt(o[2],10),c!==1&&xe(p,"unacceptable YAML version of the document"),p.version=n[0],p.checkLineBreaks=s<2,s!==1&&s!==2&&nr(p,"unsupported YAML version of the document")},TAG:function(p,t,n){var o,c;n.length!==2&&xe(p,"TAG directive accepts exactly two arguments"),o=n[0],c=n[1],On.test(o)||xe(p,"ill-formed tag handle (first argument) of the TAG directive"),Zt.call(p.tagMap,o)&&xe(p,'there is a previously declared suffix for "'+o+'" tag handle'),zn.test(c)||xe(p,"ill-formed tag prefix (second argument) of the TAG directive");try{c=decodeURIComponent(c)}catch{xe(p,"tag prefix is malformed: "+c)}p.tagMap[o]=c}};function Qt(e,p,t,n){var o,c,s,d;if(p<t){if(d=e.input.slice(p,t),n)for(o=0,c=d.length;o<c;o+=1)s=d.charCodeAt(o),s===9||32<=s&&s<=1114111||xe(e,"expected valid JSON character");else jo.test(d)&&xe(e,"the stream contains non-printable characters");e.result+=d}}function Gr(e,p,t,n){var o,c,s,d;for(vt.isObject(t)||xe(e,"cannot merge mappings; the provided source object is unacceptable"),o=Object.keys(t),s=0,d=o.length;s<d;s+=1)c=o[s],Zt.call(p,c)||(p[c]=t[c],n[c]=!0)}function fi(e,p,t,n,o,c,s,d,u){var f,v;if(Array.isArray(o))for(o=Array.prototype.slice.call(o),f=0,v=o.length;f<v;f+=1)Array.isArray(o[f])&&xe(e,"nested arrays are not supported inside keys"),typeof o=="object"&&Kr(o[f])==="[object Object]"&&(o[f]="[object Object]");if(typeof o=="object"&&Kr(o)==="[object Object]"&&(o="[object Object]"),o=String(o),p===null&&(p={}),n==="tag:yaml.org,2002:merge")if(Array.isArray(c))for(f=0,v=c.length;f<v;f+=1)Gr(e,p,c[f],t);else Gr(e,p,c,t);else!e.json&&!Zt.call(t,o)&&Zt.call(p,o)&&(e.line=s||e.line,e.lineStart=d||e.lineStart,e.position=u||e.position,xe(e,"duplicated mapping key")),o==="__proto__"?Object.defineProperty(p,o,{configurable:!0,enumerable:!0,writable:!0,value:c}):p[o]=c,delete t[o];return p}function Ar(e){var p;p=e.input.charCodeAt(e.position),p===10?e.position++:p===13?(e.position++,e.input.charCodeAt(e.position)===10&&e.position++):xe(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}function ft(e,p,t){for(var n=0,o=e.input.charCodeAt(e.position);o!==0;){for(;oi(o);)o===9&&e.firstTabInLine===-1&&(e.firstTabInLine=e.position),o=e.input.charCodeAt(++e.position);if(p&&o===35)do o=e.input.charCodeAt(++e.position);while(o!==10&&o!==13&&o!==0);if($t(o))for(Ar(e),o=e.input.charCodeAt(e.position),n++,e.lineIndent=0;o===32;)e.lineIndent++,o=e.input.charCodeAt(++e.position);else break}return t!==-1&&n!==0&&e.lineIndent<t&&nr(e,"deficient indentation"),n}function sr(e){var p=e.position,t;return t=e.input.charCodeAt(p),!!((t===45||t===46)&&t===e.input.charCodeAt(p+1)&&t===e.input.charCodeAt(p+2)&&(p+=3,t=e.input.charCodeAt(p),t===0||Lt(t)))}function Tr(e,p){p===1?e.result+=" ":p>1&&(e.result+=vt.repeat(`
`,p-1))}function Xo(e,p,t){var n,o,c,s,d,u,f,v,m=e.kind,y=e.result,x;if(x=e.input.charCodeAt(e.position),Lt(x)||hi(x)||x===35||x===38||x===42||x===33||x===124||x===62||x===39||x===34||x===37||x===64||x===96||(x===63||x===45)&&(o=e.input.charCodeAt(e.position+1),Lt(o)||t&&hi(o)))return!1;for(e.kind="scalar",e.result="",c=s=e.position,d=!1;x!==0;){if(x===58){if(o=e.input.charCodeAt(e.position+1),Lt(o)||t&&hi(o))break}else if(x===35){if(n=e.input.charCodeAt(e.position-1),Lt(n))break}else{if(e.position===e.lineStart&&sr(e)||t&&hi(x))break;if($t(x))if(u=e.line,f=e.lineStart,v=e.lineIndent,ft(e,!1,-1),e.lineIndent>=p){d=!0,x=e.input.charCodeAt(e.position);continue}else{e.position=s,e.line=u,e.lineStart=f,e.lineIndent=v;break}}d&&(Qt(e,c,s,!1),Tr(e,e.line-u),c=s=e.position,d=!1),oi(x)||(s=e.position+1),x=e.input.charCodeAt(++e.position)}return Qt(e,c,s,!1),e.result?!0:(e.kind=m,e.result=y,!1)}function Jo(e,p){var t,n,o;if(t=e.input.charCodeAt(e.position),t!==39)return!1;for(e.kind="scalar",e.result="",e.position++,n=o=e.position;(t=e.input.charCodeAt(e.position))!==0;)if(t===39)if(Qt(e,n,e.position,!0),t=e.input.charCodeAt(++e.position),t===39)n=e.position,e.position++,o=e.position;else return!0;else $t(t)?(Qt(e,n,o,!0),Tr(e,ft(e,!1,p)),n=o=e.position):e.position===e.lineStart&&sr(e)?xe(e,"unexpected end of the document within a single quoted scalar"):(e.position++,o=e.position);xe(e,"unexpected end of the stream within a single quoted scalar")}function Qo(e,p){var t,n,o,c,s,d;if(d=e.input.charCodeAt(e.position),d!==34)return!1;for(e.kind="scalar",e.result="",e.position++,t=n=e.position;(d=e.input.charCodeAt(e.position))!==0;){if(d===34)return Qt(e,t,e.position,!0),e.position++,!0;if(d===92){if(Qt(e,t,e.position,!0),d=e.input.charCodeAt(++e.position),$t(d))ft(e,!1,p);else if(d<256&&Mn[d])e.result+=Pn[d],e.position++;else if((s=Ko(d))>0){for(o=s,c=0;o>0;o--)d=e.input.charCodeAt(++e.position),(s=$o(d))>=0?c=(c<<4)+s:xe(e,"expected hexadecimal character");e.result+=Vo(c),e.position++}else xe(e,"unknown escape sequence");t=n=e.position}else $t(d)?(Qt(e,t,n,!0),Tr(e,ft(e,!1,p)),t=n=e.position):e.position===e.lineStart&&sr(e)?xe(e,"unexpected end of the document within a double quoted scalar"):(e.position++,n=e.position)}xe(e,"unexpected end of the stream within a double quoted scalar")}function Zo(e,p){var t=!0,n,o,c,s=e.tag,d,u=e.anchor,f,v,m,y,x,w=Object.create(null),S,T,L,C;if(C=e.input.charCodeAt(e.position),C===91)v=93,x=!1,d=[];else if(C===123)v=125,x=!0,d={};else return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=d),C=e.input.charCodeAt(++e.position);C!==0;){if(ft(e,!0,p),C=e.input.charCodeAt(e.position),C===v)return e.position++,e.tag=s,e.anchor=u,e.kind=x?"mapping":"sequence",e.result=d,!0;t?C===44&&xe(e,"expected the node content, but found ','"):xe(e,"missed comma between flow collection entries"),T=S=L=null,m=y=!1,C===63&&(f=e.input.charCodeAt(e.position+1),Lt(f)&&(m=y=!0,e.position++,ft(e,!0,p))),n=e.line,o=e.lineStart,c=e.position,gi(e,p,ir,!1,!0),T=e.tag,S=e.result,ft(e,!0,p),C=e.input.charCodeAt(e.position),(y||e.line===n)&&C===58&&(m=!0,C=e.input.charCodeAt(++e.position),ft(e,!0,p),gi(e,p,ir,!1,!0),L=e.result),x?fi(e,d,w,T,S,L,n,o,c):m?d.push(fi(e,null,w,T,S,L,n,o,c)):d.push(S),ft(e,!0,p),C=e.input.charCodeAt(e.position),C===44?(t=!0,C=e.input.charCodeAt(++e.position)):t=!1}xe(e,"unexpected end of the stream within a flow collection")}function es(e,p){var t,n,o=br,c=!1,s=!1,d=p,u=0,f=!1,v,m;if(m=e.input.charCodeAt(e.position),m===124)n=!1;else if(m===62)n=!0;else return!1;for(e.kind="scalar",e.result="";m!==0;)if(m=e.input.charCodeAt(++e.position),m===43||m===45)br===o?o=m===43?$r:Ho:xe(e,"repeat of a chomping mode identifier");else if((v=Uo(m))>=0)v===0?xe(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):s?xe(e,"repeat of an indentation width identifier"):(d=p+v-1,s=!0);else break;if(oi(m)){do m=e.input.charCodeAt(++e.position);while(oi(m));if(m===35)do m=e.input.charCodeAt(++e.position);while(!$t(m)&&m!==0)}for(;m!==0;){for(Ar(e),e.lineIndent=0,m=e.input.charCodeAt(e.position);(!s||e.lineIndent<d)&&m===32;)e.lineIndent++,m=e.input.charCodeAt(++e.position);if(!s&&e.lineIndent>d&&(d=e.lineIndent),$t(m)){u++;continue}if(e.lineIndent<d){o===$r?e.result+=vt.repeat(`
`,c?1+u:u):o===br&&c&&(e.result+=`
`);break}for(n?oi(m)?(f=!0,e.result+=vt.repeat(`
`,c?1+u:u)):f?(f=!1,e.result+=vt.repeat(`
`,u+1)):u===0?c&&(e.result+=" "):e.result+=vt.repeat(`
`,u):e.result+=vt.repeat(`
`,c?1+u:u),c=!0,s=!0,u=0,t=e.position;!$t(m)&&m!==0;)m=e.input.charCodeAt(++e.position);Qt(e,t,e.position,!1)}return!0}function Xr(e,p){var t,n=e.tag,o=e.anchor,c=[],s,d=!1,u;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=c),u=e.input.charCodeAt(e.position);u!==0&&(e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,xe(e,"tab characters must not be used in indentation")),!(u!==45||(s=e.input.charCodeAt(e.position+1),!Lt(s))));){if(d=!0,e.position++,ft(e,!0,-1)&&e.lineIndent<=p){c.push(null),u=e.input.charCodeAt(e.position);continue}if(t=e.line,gi(e,p,Tn,!1,!0),c.push(e.result),ft(e,!0,-1),u=e.input.charCodeAt(e.position),(e.line===t||e.lineIndent>p)&&u!==0)xe(e,"bad indentation of a sequence entry");else if(e.lineIndent<p)break}return d?(e.tag=n,e.anchor=o,e.kind="sequence",e.result=c,!0):!1}function ts(e,p,t){var n,o,c,s,d,u,f=e.tag,v=e.anchor,m={},y=Object.create(null),x=null,w=null,S=null,T=!1,L=!1,C;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=m),C=e.input.charCodeAt(e.position);C!==0;){if(!T&&e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,xe(e,"tab characters must not be used in indentation")),n=e.input.charCodeAt(e.position+1),c=e.line,(C===63||C===58)&&Lt(n))C===63?(T&&(fi(e,m,y,x,w,null,s,d,u),x=w=S=null),L=!0,T=!0,o=!0):T?(T=!1,o=!0):xe(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,C=n;else{if(s=e.line,d=e.lineStart,u=e.position,!gi(e,t,An,!1,!0))break;if(e.line===c){for(C=e.input.charCodeAt(e.position);oi(C);)C=e.input.charCodeAt(++e.position);if(C===58)C=e.input.charCodeAt(++e.position),Lt(C)||xe(e,"a whitespace character is expected after the key-value separator within a block mapping"),T&&(fi(e,m,y,x,w,null,s,d,u),x=w=S=null),L=!0,T=!1,o=!1,x=e.tag,w=e.result;else if(L)xe(e,"can not read an implicit mapping pair; a colon is missed");else return e.tag=f,e.anchor=v,!0}else if(L)xe(e,"can not read a block mapping entry; a multiline key may not be an implicit key");else return e.tag=f,e.anchor=v,!0}if((e.line===c||e.lineIndent>p)&&(T&&(s=e.line,d=e.lineStart,u=e.position),gi(e,p,rr,!0,o)&&(T?w=e.result:S=e.result),T||(fi(e,m,y,x,w,S,s,d,u),x=w=S=null),ft(e,!0,-1),C=e.input.charCodeAt(e.position)),(e.line===c||e.lineIndent>p)&&C!==0)xe(e,"bad indentation of a mapping entry");else if(e.lineIndent<p)break}return T&&fi(e,m,y,x,w,null,s,d,u),L&&(e.tag=f,e.anchor=v,e.kind="mapping",e.result=m),L}function is(e){var p,t=!1,n=!1,o,c,s;if(s=e.input.charCodeAt(e.position),s!==33)return!1;if(e.tag!==null&&xe(e,"duplication of a tag property"),s=e.input.charCodeAt(++e.position),s===60?(t=!0,s=e.input.charCodeAt(++e.position)):s===33?(n=!0,o="!!",s=e.input.charCodeAt(++e.position)):o="!",p=e.position,t){do s=e.input.charCodeAt(++e.position);while(s!==0&&s!==62);e.position<e.length?(c=e.input.slice(p,e.position),s=e.input.charCodeAt(++e.position)):xe(e,"unexpected end of the stream within a verbatim tag")}else{for(;s!==0&&!Lt(s);)s===33&&(n?xe(e,"tag suffix cannot contain exclamation marks"):(o=e.input.slice(p-1,e.position+1),On.test(o)||xe(e,"named tag handle cannot contain such characters"),n=!0,p=e.position+1)),s=e.input.charCodeAt(++e.position);c=e.input.slice(p,e.position),Yo.test(c)&&xe(e,"tag suffix cannot contain flow indicator characters")}c&&!zn.test(c)&&xe(e,"tag name cannot contain such characters: "+c);try{c=decodeURIComponent(c)}catch{xe(e,"tag name is malformed: "+c)}return t?e.tag=c:Zt.call(e.tagMap,o)?e.tag=e.tagMap[o]+c:o==="!"?e.tag="!"+c:o==="!!"?e.tag="tag:yaml.org,2002:"+c:xe(e,'undeclared tag handle "'+o+'"'),!0}function rs(e){var p,t;if(t=e.input.charCodeAt(e.position),t!==38)return!1;for(e.anchor!==null&&xe(e,"duplication of an anchor property"),t=e.input.charCodeAt(++e.position),p=e.position;t!==0&&!Lt(t)&&!hi(t);)t=e.input.charCodeAt(++e.position);return e.position===p&&xe(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(p,e.position),!0}function ns(e){var p,t,n;if(n=e.input.charCodeAt(e.position),n!==42)return!1;for(n=e.input.charCodeAt(++e.position),p=e.position;n!==0&&!Lt(n)&&!hi(n);)n=e.input.charCodeAt(++e.position);return e.position===p&&xe(e,"name of an alias node must contain at least one character"),t=e.input.slice(p,e.position),Zt.call(e.anchorMap,t)||xe(e,'unidentified alias "'+t+'"'),e.result=e.anchorMap[t],ft(e,!0,-1),!0}function gi(e,p,t,n,o){var c,s,d,u=1,f=!1,v=!1,m,y,x,w,S,T;if(e.listener!==null&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,c=s=d=rr===t||Tn===t,n&&ft(e,!0,-1)&&(f=!0,e.lineIndent>p?u=1:e.lineIndent===p?u=0:e.lineIndent<p&&(u=-1)),u===1)for(;is(e)||rs(e);)ft(e,!0,-1)?(f=!0,d=c,e.lineIndent>p?u=1:e.lineIndent===p?u=0:e.lineIndent<p&&(u=-1)):d=!1;if(d&&(d=f||o),(u===1||rr===t)&&(ir===t||An===t?S=p:S=p+1,T=e.position-e.lineStart,u===1?d&&(Xr(e,T)||ts(e,T,S))||Zo(e,S)?v=!0:(s&&es(e,S)||Jo(e,S)||Qo(e,S)?v=!0:ns(e)?(v=!0,(e.tag!==null||e.anchor!==null)&&xe(e,"alias node should not have any properties")):Xo(e,S,ir===t)&&(v=!0,e.tag===null&&(e.tag="?")),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):u===0&&(v=d&&Xr(e,T))),e.tag===null)e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);else if(e.tag==="?"){for(e.result!==null&&e.kind!=="scalar"&&xe(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),m=0,y=e.implicitTypes.length;m<y;m+=1)if(w=e.implicitTypes[m],w.resolve(e.result)){e.result=w.construct(e.result),e.tag=w.tag,e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);break}}else if(e.tag!=="!"){if(Zt.call(e.typeMap[e.kind||"fallback"],e.tag))w=e.typeMap[e.kind||"fallback"][e.tag];else for(w=null,x=e.typeMap.multi[e.kind||"fallback"],m=0,y=x.length;m<y;m+=1)if(e.tag.slice(0,x[m].tag.length)===x[m].tag){w=x[m];break}w||xe(e,"unknown tag !<"+e.tag+">"),e.result!==null&&w.kind!==e.kind&&xe(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+w.kind+'", not "'+e.kind+'"'),w.resolve(e.result,e.tag)?(e.result=w.construct(e.result,e.tag),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):xe(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")}return e.listener!==null&&e.listener("close",e),e.tag!==null||e.anchor!==null||v}function as(e){var p=e.position,t,n,o,c=!1,s;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);(s=e.input.charCodeAt(e.position))!==0&&(ft(e,!0,-1),s=e.input.charCodeAt(e.position),!(e.lineIndent>0||s!==37));){for(c=!0,s=e.input.charCodeAt(++e.position),t=e.position;s!==0&&!Lt(s);)s=e.input.charCodeAt(++e.position);for(n=e.input.slice(t,e.position),o=[],n.length<1&&xe(e,"directive name must not be less than one character in length");s!==0;){for(;oi(s);)s=e.input.charCodeAt(++e.position);if(s===35){do s=e.input.charCodeAt(++e.position);while(s!==0&&!$t(s));break}if($t(s))break;for(t=e.position;s!==0&&!Lt(s);)s=e.input.charCodeAt(++e.position);o.push(e.input.slice(t,e.position))}s!==0&&Ar(e),Zt.call(Vr,n)?Vr[n](e,n,o):nr(e,'unknown document directive "'+n+'"')}if(ft(e,!0,-1),e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45?(e.position+=3,ft(e,!0,-1)):c&&xe(e,"directives end mark is expected"),gi(e,e.lineIndent-1,rr,!1,!0),ft(e,!0,-1),e.checkLineBreaks&&Wo.test(e.input.slice(p,e.position))&&nr(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&sr(e)){e.input.charCodeAt(e.position)===46&&(e.position+=3,ft(e,!0,-1));return}if(e.position<e.length-1)xe(e,"end of the stream or a document separator is expected");else return}function Rn(e,p){e=String(e),p=p||{},e.length!==0&&(e.charCodeAt(e.length-1)!==10&&e.charCodeAt(e.length-1)!==13&&(e+=`
`),e.charCodeAt(0)===65279&&(e=e.slice(1)));var t=new Go(e,p),n=e.indexOf("\0");for(n!==-1&&(t.position=n,xe(t,"null byte is not allowed in input")),t.input+="\0";t.input.charCodeAt(t.position)===32;)t.lineIndent+=1,t.position+=1;for(;t.position<t.length-1;)as(t);return t.documents}function os(e,p,t){p!==null&&typeof p=="object"&&typeof t=="undefined"&&(t=p,p=null);var n=Rn(e,t);if(typeof p!="function")return n;for(var o=0,c=n.length;o<c;o+=1)p(n[o])}function ss(e,p){var t=Rn(e,p);if(t.length!==0){if(t.length===1)return t[0];throw new At("expected a single document in the stream, but found more")}}var cs=os,ls=ss,In={loadAll:cs,load:ls},Dn=Object.prototype.toString,Fn=Object.prototype.hasOwnProperty,Or=65279,ds=9,Ii=10,us=13,ps=32,hs=33,fs=34,xr=35,gs=37,ms=38,ys=39,vs=42,Bn=44,bs=45,ar=58,_s=61,xs=62,ws=63,Ss=64,Nn=91,qn=93,ks=96,Hn=123,Cs=124,jn=125,St={};St[0]="\\0";St[7]="\\a";St[8]="\\b";St[9]="\\t";St[10]="\\n";St[11]="\\v";St[12]="\\f";St[13]="\\r";St[27]="\\e";St[34]='\\"';St[92]="\\\\";St[133]="\\N";St[160]="\\_";St[8232]="\\L";St[8233]="\\P";var Es=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],As=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function Ts(e,p){var t,n,o,c,s,d,u;if(p===null)return{};for(t={},n=Object.keys(p),o=0,c=n.length;o<c;o+=1)s=n[o],d=String(p[s]),s.slice(0,2)==="!!"&&(s="tag:yaml.org,2002:"+s.slice(2)),u=e.compiledTypeMap.fallback[s],u&&Fn.call(u.styleAliases,d)&&(d=u.styleAliases[d]),t[s]=d;return t}function Os(e){var p,t,n;if(p=e.toString(16).toUpperCase(),e<=255)t="x",n=2;else if(e<=65535)t="u",n=4;else if(e<=4294967295)t="U",n=8;else throw new At("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+t+vt.repeat("0",n-p.length)+p}var zs=1,Di=2;function Ms(e){this.schema=e.schema||Er,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=vt.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=Ts(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.quotingType=e.quotingType==='"'?Di:zs,this.forceQuotes=e.forceQuotes||!1,this.replacer=typeof e.replacer=="function"?e.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function Jr(e,p){for(var t=vt.repeat(" ",p),n=0,o=-1,c="",s,d=e.length;n<d;)o=e.indexOf(`
`,n),o===-1?(s=e.slice(n),n=d):(s=e.slice(n,o+1),n=o+1),s.length&&s!==`
`&&(c+=t),c+=s;return c}function wr(e,p){return`
`+vt.repeat(" ",e.indent*p)}function Ps(e,p){var t,n,o;for(t=0,n=e.implicitTypes.length;t<n;t+=1)if(o=e.implicitTypes[t],o.resolve(p))return!0;return!1}function or(e){return e===ps||e===ds}function Fi(e){return 32<=e&&e<=126||161<=e&&e<=55295&&e!==8232&&e!==8233||57344<=e&&e<=65533&&e!==Or||65536<=e&&e<=1114111}function Qr(e){return Fi(e)&&e!==Or&&e!==us&&e!==Ii}function Zr(e,p,t){var n=Qr(e),o=n&&!or(e);return(t?n:n&&e!==Bn&&e!==Nn&&e!==qn&&e!==Hn&&e!==jn)&&e!==xr&&!(p===ar&&!o)||Qr(p)&&!or(p)&&e===xr||p===ar&&o}function Ls(e){return Fi(e)&&e!==Or&&!or(e)&&e!==bs&&e!==ws&&e!==ar&&e!==Bn&&e!==Nn&&e!==qn&&e!==Hn&&e!==jn&&e!==xr&&e!==ms&&e!==vs&&e!==hs&&e!==Cs&&e!==_s&&e!==xs&&e!==ys&&e!==fs&&e!==gs&&e!==Ss&&e!==ks}function Rs(e){return!or(e)&&e!==ar}function Li(e,p){var t=e.charCodeAt(p),n;return t>=55296&&t<=56319&&p+1<e.length&&(n=e.charCodeAt(p+1),n>=56320&&n<=57343)?(t-55296)*1024+n-56320+65536:t}function Wn(e){var p=/^\n* /;return p.test(e)}var Yn=1,Sr=2,$n=3,Kn=4,pi=5;function Is(e,p,t,n,o,c,s,d){var u,f=0,v=null,m=!1,y=!1,x=n!==-1,w=-1,S=Ls(Li(e,0))&&Rs(Li(e,e.length-1));if(p||s)for(u=0;u<e.length;f>=65536?u+=2:u++){if(f=Li(e,u),!Fi(f))return pi;S=S&&Zr(f,v,d),v=f}else{for(u=0;u<e.length;f>=65536?u+=2:u++){if(f=Li(e,u),f===Ii)m=!0,x&&(y=y||u-w-1>n&&e[w+1]!==" ",w=u);else if(!Fi(f))return pi;S=S&&Zr(f,v,d),v=f}y=y||x&&u-w-1>n&&e[w+1]!==" "}return!m&&!y?S&&!s&&!o(e)?Yn:c===Di?pi:Sr:t>9&&Wn(e)?pi:s?c===Di?pi:Sr:y?Kn:$n}function Ds(e,p,t,n,o){e.dump=(function(){if(p.length===0)return e.quotingType===Di?'""':"''";if(!e.noCompatMode&&(Es.indexOf(p)!==-1||As.test(p)))return e.quotingType===Di?'"'+p+'"':"'"+p+"'";var c=e.indent*Math.max(1,t),s=e.lineWidth===-1?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-c),d=n||e.flowLevel>-1&&t>=e.flowLevel;function u(f){return Ps(e,f)}switch(Is(p,d,e.indent,s,u,e.quotingType,e.forceQuotes&&!n,o)){case Yn:return p;case Sr:return"'"+p.replace(/'/g,"''")+"'";case $n:return"|"+en(p,e.indent)+tn(Jr(p,c));case Kn:return">"+en(p,e.indent)+tn(Jr(Fs(p,s),c));case pi:return'"'+Bs(p)+'"';default:throw new At("impossible error: invalid scalar style")}})()}function en(e,p){var t=Wn(e)?String(p):"",n=e[e.length-1]===`
`,o=n&&(e[e.length-2]===`
`||e===`
`),c=o?"+":n?"":"-";return t+c+`
`}function tn(e){return e[e.length-1]===`
`?e.slice(0,-1):e}function Fs(e,p){for(var t=/(\n+)([^\n]*)/g,n=(function(){var f=e.indexOf(`
`);return f=f!==-1?f:e.length,t.lastIndex=f,rn(e.slice(0,f),p)})(),o=e[0]===`
`||e[0]===" ",c,s;s=t.exec(e);){var d=s[1],u=s[2];c=u[0]===" ",n+=d+(!o&&!c&&u!==""?`
`:"")+rn(u,p),o=c}return n}function rn(e,p){if(e===""||e[0]===" ")return e;for(var t=/ [^ ]/g,n,o=0,c,s=0,d=0,u="";n=t.exec(e);)d=n.index,d-o>p&&(c=s>o?s:d,u+=`
`+e.slice(o,c),o=c+1),s=d;return u+=`
`,e.length-o>p&&s>o?u+=e.slice(o,s)+`
`+e.slice(s+1):u+=e.slice(o),u.slice(1)}function Bs(e){for(var p="",t=0,n,o=0;o<e.length;t>=65536?o+=2:o++)t=Li(e,o),n=St[t],!n&&Fi(t)?(p+=e[o],t>=65536&&(p+=e[o+1])):p+=n||Os(t);return p}function Ns(e,p,t){var n="",o=e.tag,c,s,d;for(c=0,s=t.length;c<s;c+=1)d=t[c],e.replacer&&(d=e.replacer.call(t,String(c),d)),(Vt(e,p,d,!1,!1)||typeof d=="undefined"&&Vt(e,p,null,!1,!1))&&(n!==""&&(n+=","+(e.condenseFlow?"":" ")),n+=e.dump);e.tag=o,e.dump="["+n+"]"}function nn(e,p,t,n){var o="",c=e.tag,s,d,u;for(s=0,d=t.length;s<d;s+=1)u=t[s],e.replacer&&(u=e.replacer.call(t,String(s),u)),(Vt(e,p+1,u,!0,!0,!1,!0)||typeof u=="undefined"&&Vt(e,p+1,null,!0,!0,!1,!0))&&((!n||o!=="")&&(o+=wr(e,p)),e.dump&&Ii===e.dump.charCodeAt(0)?o+="-":o+="- ",o+=e.dump);e.tag=c,e.dump=o||"[]"}function qs(e,p,t){var n="",o=e.tag,c=Object.keys(t),s,d,u,f,v;for(s=0,d=c.length;s<d;s+=1)v="",n!==""&&(v+=", "),e.condenseFlow&&(v+='"'),u=c[s],f=t[u],e.replacer&&(f=e.replacer.call(t,u,f)),Vt(e,p,u,!1,!1)&&(e.dump.length>1024&&(v+="? "),v+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),Vt(e,p,f,!1,!1)&&(v+=e.dump,n+=v));e.tag=o,e.dump="{"+n+"}"}function Hs(e,p,t,n){var o="",c=e.tag,s=Object.keys(t),d,u,f,v,m,y;if(e.sortKeys===!0)s.sort();else if(typeof e.sortKeys=="function")s.sort(e.sortKeys);else if(e.sortKeys)throw new At("sortKeys must be a boolean or a function");for(d=0,u=s.length;d<u;d+=1)y="",(!n||o!=="")&&(y+=wr(e,p)),f=s[d],v=t[f],e.replacer&&(v=e.replacer.call(t,f,v)),Vt(e,p+1,f,!0,!0,!0)&&(m=e.tag!==null&&e.tag!=="?"||e.dump&&e.dump.length>1024,m&&(e.dump&&Ii===e.dump.charCodeAt(0)?y+="?":y+="? "),y+=e.dump,m&&(y+=wr(e,p)),Vt(e,p+1,v,!0,m)&&(e.dump&&Ii===e.dump.charCodeAt(0)?y+=":":y+=": ",y+=e.dump,o+=y));e.tag=c,e.dump=o||"{}"}function an(e,p,t){var n,o,c,s,d,u;for(o=t?e.explicitTypes:e.implicitTypes,c=0,s=o.length;c<s;c+=1)if(d=o[c],(d.instanceOf||d.predicate)&&(!d.instanceOf||typeof p=="object"&&p instanceof d.instanceOf)&&(!d.predicate||d.predicate(p))){if(t?d.multi&&d.representName?e.tag=d.representName(p):e.tag=d.tag:e.tag="?",d.represent){if(u=e.styleMap[d.tag]||d.defaultStyle,Dn.call(d.represent)==="[object Function]")n=d.represent(p,u);else if(Fn.call(d.represent,u))n=d.represent[u](p,u);else throw new At("!<"+d.tag+'> tag resolver accepts not "'+u+'" style');e.dump=n}return!0}return!1}function Vt(e,p,t,n,o,c,s){e.tag=null,e.dump=t,an(e,t,!1)||an(e,t,!0);var d=Dn.call(e.dump),u=n,f;n&&(n=e.flowLevel<0||e.flowLevel>p);var v=d==="[object Object]"||d==="[object Array]",m,y;if(v&&(m=e.duplicates.indexOf(t),y=m!==-1),(e.tag!==null&&e.tag!=="?"||y||e.indent!==2&&p>0)&&(o=!1),y&&e.usedDuplicates[m])e.dump="*ref_"+m;else{if(v&&y&&!e.usedDuplicates[m]&&(e.usedDuplicates[m]=!0),d==="[object Object]")n&&Object.keys(e.dump).length!==0?(Hs(e,p,e.dump,o),y&&(e.dump="&ref_"+m+e.dump)):(qs(e,p,e.dump),y&&(e.dump="&ref_"+m+" "+e.dump));else if(d==="[object Array]")n&&e.dump.length!==0?(e.noArrayIndent&&!s&&p>0?nn(e,p-1,e.dump,o):nn(e,p,e.dump,o),y&&(e.dump="&ref_"+m+e.dump)):(Ns(e,p,e.dump),y&&(e.dump="&ref_"+m+" "+e.dump));else if(d==="[object String]")e.tag!=="?"&&Ds(e,e.dump,p,c,u);else{if(d==="[object Undefined]")return!1;if(e.skipInvalid)return!1;throw new At("unacceptable kind of an object to dump "+d)}e.tag!==null&&e.tag!=="?"&&(f=encodeURI(e.tag[0]==="!"?e.tag.slice(1):e.tag).replace(/!/g,"%21"),e.tag[0]==="!"?f="!"+f:f.slice(0,18)==="tag:yaml.org,2002:"?f="!!"+f.slice(18):f="!<"+f+">",e.dump=f+" "+e.dump)}return!0}function js(e,p){var t=[],n=[],o,c;for(kr(e,t,n),o=0,c=n.length;o<c;o+=1)p.duplicates.push(t[n[o]]);p.usedDuplicates=new Array(c)}function kr(e,p,t){var n,o,c;if(e!==null&&typeof e=="object")if(o=p.indexOf(e),o!==-1)t.indexOf(o)===-1&&t.push(o);else if(p.push(e),Array.isArray(e))for(o=0,c=e.length;o<c;o+=1)kr(e[o],p,t);else for(n=Object.keys(e),o=0,c=n.length;o<c;o+=1)kr(e[n[o]],p,t)}function Ws(e,p){p=p||{};var t=new Ms(p);t.noRefs||js(e,t);var n=e;return t.replacer&&(n=t.replacer.call({"":n},"",n)),Vt(t,0,n,!0,!0)?t.dump+`
`:""}var Ys=Ws,$s={dump:Ys};function zr(e,p){return function(){throw new Error("Function yaml."+e+" is removed in js-yaml 4. Use yaml."+p+" instead, which is now safe by default.")}}var Ks=xt,Us=cn,Vs=pn,Gs=yn,Xs=vn,Js=Er,Qs=In.load,Zs=In.loadAll,ec=$s.dump,tc=At,ic={binary:Sn,float:mn,map:un,null:hn,pairs:Cn,set:En,timestamp:xn,bool:fn,int:gn,merge:wn,omap:kn,seq:dn,str:ln},rc=zr("safeLoad","load"),nc=zr("safeLoadAll","loadAll"),ac=zr("safeDump","dump"),oc={Type:Ks,Schema:Us,FAILSAFE_SCHEMA:Vs,JSON_SCHEMA:Gs,CORE_SCHEMA:Xs,DEFAULT_SCHEMA:Js,load:Qs,loadAll:Zs,dump:ec,YAMLException:tc,types:ic,safeLoad:rc,safeLoadAll:nc,safeDump:ac},Un=oc;window.interact||(window.interact=Vn.default);window.jsyaml||(window.jsyaml=Un);var sc="0.9.5";console.info(`%c drag-and-drop-card %c v${sc} `,"color:#fff;background:#03a9f4;font-weight:700;padding:2px 6px;border-radius:3px 0 0 3px","color:#03303a;background:#bdeaff;padding:2px 6px;border-radius:0 3px 3px 0");var cc=(e,...p)=>console.debug(`[drag-and-drop-card] ${e}`,...p);console.info("%c drag-and-drop-card loaded","color:#03a9f4;font-weight:700;");var Mr=()=>new Promise(e=>requestAnimationFrame(()=>e())),lc=()=>new Promise(e=>window.requestIdleCallback?requestIdleCallback(()=>e()):setTimeout(e,0)),ei=class e extends HTMLElement{constructor(){super();ht(this,"__booting",!1);ht(this,"_gridCanvas",null);ht(this,"_gridCtx",null);ht(this,"_gridCols",0);ht(this,"_gridRows",0);ht(this,"_gridCellSize",0);ht(this,"_gridDown",!1);ht(this,"_gridStartCol",-1);ht(this,"_gridStartRow",-1);ht(this,"_gridHoverCol",-1);ht(this,"_gridHoverRow",-1);ht(this,"_gridCurrCol",-1);ht(this,"_gridCurrRow",-1);ht(this,"_gridDirty",!1);ht(this,"_gridRAF",0);ht(this,"_gridTile",null);ht(this,"__gridPrevEditMode");ht(this,"__gridRO",null);ht(this,"__gridPollT",null);this.shadowRoot||this.attachShadow({mode:"open"}),this.__rebuiltCards=new WeakSet}_updateTabsA11y_(){var o;let t=this.tabsBar;if(!t)return;t.setAttribute("role","tablist"),t.querySelectorAll(".ddc-tab").forEach((c,s)=>{let d=c.classList.contains("active");c.setAttribute("role","tab"),c.setAttribute("aria-selected",String(d)),c.setAttribute("tabindex",d?"0":"-1"),c.dataset.index=String(s)}),this.__tabsKeyHandler||(this.__tabsKeyHandler=c=>{if(!["ArrowLeft","ArrowRight","Home","End"].includes(c.key))return;let d=Array.from(t.querySelectorAll(".ddc-tab"));if(!d.length)return;c.preventDefault();let u=d.findIndex(y=>y===document.activeElement),f=d.findIndex(y=>y.classList.contains("active")),v=u>=0?u:f>=0?f:0;c.key==="ArrowRight"&&(v=Math.min(d.length-1,v+1)),c.key==="ArrowLeft"&&(v=Math.max(0,v-1)),c.key==="Home"&&(v=0),c.key==="End"&&(v=d.length-1);let m=d[v];if(m){try{m.focus({preventScroll:!1})}catch{}m.click()}},t.addEventListener("keydown",this.__tabsKeyHandler)),this.__tabsScrollHandler||(this.__tabsScrollHandler=()=>{var c;return(c=this._updateTabOverflowShadows_)==null?void 0:c.call(this)},t.addEventListener("scroll",this.__tabsScrollHandler,{passive:!0})),(o=this._updateTabOverflowShadows_)==null||o.call(this)}_getCurrentDashboardUrlPath_(){let n=(window.location.pathname||"/").replace(/^\/+/,"").split("/")[0]||"lovelace";return n==="lovelace"?null:n}async _ensureCardIdSeededInStorage_(){var n;if((n=this.config)!=null&&n.id)return this.config.id;let t=crypto!=null&&crypto.randomUUID?crypto.randomUUID():"ddc_"+Math.random().toString(36).slice(2);this.config={...this.config,id:t};try{let o=this._getCurrentDashboardUrlPath_(),c=await this.hass.callWS(o?{type:"lovelace/config",url_path:o}:{type:"lovelace/config"}),s=this._findThisCardPathRecursive_(c,x=>(x==null?void 0:x.type)==="custom:drag-and-drop-card"&&(!x.id||x.id===t));if(!s)return t;let{viewIndex:d,cardIndex:u,parentPath:f}=s,v=c.views[d],y={...this._getCardByPath_(v,f,u),id:t};this._setCardByPath_(v,f,u,y),await this.hass.callWS(o?{type:"lovelace/config/save",url_path:o,config:c}:{type:"lovelace/config/save",config:c})}catch{}return t}async _persistThisCardConfigToStorage_(){var y,x;await this._ensureCardIdSeededInStorage_();let t={type:"custom:drag-and-drop-card",id:(y=this.config)==null?void 0:y.id,...this._config},n=this._getCurrentDashboardUrlPath_(),o=await this.hass.callWS(n?{type:"lovelace/config",url_path:n}:{type:"lovelace/config"}),c=this._findThisCardPathRecursive_(o,w=>{var S;return(w==null?void 0:w.type)==="custom:drag-and-drop-card"&&(w==null?void 0:w.id)===((S=this.config)==null?void 0:S.id)});if(!c)throw new Error("Card not found in Lovelace config");let{viewIndex:s,cardIndex:d,parentPath:u}=c,f=o.views[s],m={...this._getCardByPath_(f,u,d),...t};this._setCardByPath_(f,u,d,m),await this.hass.callWS(n?{type:"lovelace/config/save",url_path:n,config:o}:{type:"lovelace/config/save",config:o}),this.config=m,(x=this.requestUpdate)==null||x.call(this)}_findThisCardPathRecursive_(t,n){let o=(t==null?void 0:t.views)||[];for(let c=0;c<o.length;c++){let s=this._findInCardTree_(o[c],n);if(s)return{viewIndex:c,...s}}return null}_findInCardTree_(t,n,o=[]){var s;let c=(t==null?void 0:t.cards)||[];for(let d=0;d<c.length;d++){let u=c[d];if(n(u))return{cardIndex:d,parentPath:o};if((s=u==null?void 0:u.cards)!=null&&s.length){let f=this._findInCardTree_(u,n,o.concat(d));if(f)return f}}return null}_getCardByPath_(t,n,o){let c=t;for(let s of n||[])c=c.cards[s];return c.cards[o]}_setCardByPath_(t,n,o,c){let s=t;for(let d of n||[])s=s.cards[d];s.cards[o]=c}_ensureToolbarStyles_(){try{if(this.shadowRoot.querySelector("#ddc-toolbar-styles"))return;let n=document.createElement("style");n.id="ddc-toolbar-styles",n.textContent=`/* ===== Edit toolbar ===== */
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
  .color-pair { display:flex; gap:8px; }
  .color-pair input[type="color"] { width:44px; height:36px; border:0; background:transparent; padding:0; }
  .footer { display:flex; justify-content:flex-end; gap:10px; padding:12px 16px; border-top:1px solid var(--divider-color, rgba(0,0,0,.12)); }
  .btn.primary { background:var(--primary-color); color:#fff; border:0; border-radius:8px; padding:8px 16px; font-weight:600; cursor:pointer; }
  .btn.secondary { background:transparent; border:1px solid var(--divider-color, rgba(0,0,0,.25)); border-radius:8px; padding:8px 16px; cursor:pointer; }
  `,this.shadowRoot.appendChild(t)}_setHeaderVisible_(t=!0){var n,o,c,s,d,u;try{(((n=this._deepQueryAll)==null?void 0:n.call(this,"app-header, ha-top-app-bar, ha-top-app-bar-fixed, mwc-top-app-bar-fixed, ha-header-bar, app-toolbar, ha-toolbar"))||[]).forEach(w=>{w&&(w.dataset.ddcPrevDisplayHeader===void 0&&(w.dataset.ddcPrevDisplayHeader=w.style.display||"",w.dataset.ddcPrevMinH=w.style.minHeight||"",w.dataset.ddcPrevH=w.style.height||"",w.dataset.ddcPrevVis=w.style.visibility||""),t?(w.style.display=w.dataset.ddcPrevDisplayHeader||"",w.style.minHeight=w.dataset.ddcPrevMinH||"",w.style.height=w.dataset.ddcPrevH||"",w.style.visibility=w.dataset.ddcPrevVis||"",w.removeAttribute("hidden")):(w.style.display="none",w.style.minHeight="0",w.style.height="0",w.style.visibility="hidden",w.setAttribute("hidden","")))}),(((o=this._deepQueryAll)==null?void 0:o.call(this,'[slot="actionItems"], ha-icon-button, ha-button-menu, assist-button, search-input, ha-quick-bar, ha-mwc-menu'))||[]).forEach(w=>{w&&(w.dataset.ddcPrevDisplayAction===void 0&&(w.dataset.ddcPrevDisplayAction=w.style.display||"",w.dataset.ddcPrevVisAction=w.style.visibility||""),t?(w.style.display=w.dataset.ddcPrevDisplayAction||"",w.style.visibility=w.dataset.ddcPrevVisAction||""):(w.style.display="none",w.style.visibility="hidden"))}),[...((c=this._deepQueryAll)==null?void 0:c.call(this,"ha-app-layout"))||[],...((s=this._deepQueryAll)==null?void 0:s.call(this,"home-assistant-main"))||[],document.documentElement,document.body].filter(Boolean).forEach(w=>{if(w)if(w.dataset.ddcPrevHdrVars===void 0&&(w.dataset.ddcPrevHdrVars=JSON.stringify({mdc:w.style.getPropertyValue("--mdc-top-app-bar-height")||"",app:w.style.getPropertyValue("--app-header-height")||"",hdr:w.style.getPropertyValue("--header-height")||"",hah:w.style.getPropertyValue("--ha-header-height")||"",pad:w.style&&(w.style.paddingTop||"")||""})),t)try{let S=JSON.parse(w.dataset.ddcPrevHdrVars||"{}");w.style.setProperty("--mdc-top-app-bar-height",S.mdc||""),w.style.setProperty("--app-header-height",S.app||""),w.style.setProperty("--header-height",S.hdr||""),w.style.setProperty("--ha-header-height",S.hah||""),S.pad!==void 0&&(w.style.paddingTop=S.pad||"")}catch{}else{w.style.setProperty("--mdc-top-app-bar-height","0px"),w.style.setProperty("--app-header-height","0px"),w.style.setProperty("--header-height","0px"),w.style.setProperty("--ha-header-height","0px");try{w.style.paddingTop="0px"}catch{}}}),(((d=this._deepQueryAll)==null?void 0:d.call(this,"#contentContainer"))||[]).forEach(w=>{w&&(w.dataset.ddcPrevContentPadTop===void 0&&(w.dataset.ddcPrevContentPadTop=w.style&&(w.style.paddingTop||"")||""),w.style.paddingTop=t?w.dataset.ddcPrevContentPadTop||"":"0px")}),(((u=this._deepQueryAll)==null?void 0:u.call(this,".main-title"))||[]).forEach(w=>{w&&(w.dataset.ddcPrevDisplayTitle===void 0&&(w.dataset.ddcPrevDisplayTitle=w.style.display||"",w.dataset.ddcPrevVisTitle=w.style.visibility||""),t?(w.style.display=w.dataset.ddcPrevDisplayTitle||"",w.style.visibility=w.dataset.ddcPrevVisTitle||""):(w.style.display="none",w.style.visibility="hidden"))})}catch{}}_setSidebarVisible_(t=!0){var n,o;try{(((n=this._deepQueryAll)==null?void 0:n.call(this,"ha-sidebar"))||[]).forEach(d=>{d&&(d.dataset.ddcPrevDisplaySidebar===void 0&&(d.dataset.ddcPrevDisplaySidebar=d.style.display||""),d.style.display=t?d.dataset.ddcPrevDisplaySidebar||"":"none")}),(((o=this._deepQueryAll)==null?void 0:o.call(this,"ha-drawer"))||[]).forEach(d=>{if(d){d.dataset.ddcPrevDrawerWidth===void 0&&(d.dataset.ddcPrevDrawerWidth=d.style.getPropertyValue("--mdc-drawer-width")||""),t?d.style.setProperty("--mdc-drawer-width",d.dataset.ddcPrevDrawerWidth||""):d.style.setProperty("--mdc-drawer-width","0px");try{!t&&typeof d.close=="function"&&d.close()}catch{}}})}catch{}}_applyHaChromeVisibility_(){var t;try{let n=!!this.editMode||((t=this._isInHaEditorPreview)==null?void 0:t.call(this));n||!this.hideHaHeader?this._setHeaderVisible_(!0):this._setHeaderVisible_(!1),n||!this.hideHaSidebar?this._setSidebarVisible_(!0):this._setSidebarVisible_(!1)}catch{}}_applyBackgroundImageFromConfig(){var c;try{let s=navigator.userAgent||"";if(/iPad|iPhone|iPod/.test(s)&&n&&typeof n.src=="string"&&n.src.startsWith("data:")&&n.src.length>3e5){console.warn("[drag-and-drop-card] Skipping large inline background on iOS for stability.");return}}catch{}let t=this._config||{},n=t.background_image||t.bg_image||null,o=this.cardContainer;if(o)if(n&&n.src){let s=String(n.src).trim(),d=n.repeat===!0||n.repeat==="repeat"?"repeat":"no-repeat",u=Math.max(0,Math.min(1,Number((c=n.opacity)!=null?c:1))),f=n.size||"cover",v=n.position||"center center",m=n.attachment||"scroll",y=n.filter||"none";o.style.setProperty("--ddc-bg-image",s?`url("${s.replace(/"/g,'"')}")`:"none"),o.style.setProperty("--ddc-bg-repeat",d),o.style.setProperty("--ddc-bg-opacity",String(u)),o.style.setProperty("--ddc-bg-size",f),o.style.setProperty("--ddc-bg-position",v),o.style.setProperty("--ddc-bg-attachment",m),o.style.setProperty("--ddc-bg-filter",y),o.classList.add("has-bg-image")}else o.style.removeProperty("--ddc-bg-image"),o.style.removeProperty("--ddc-bg-repeat"),o.style.removeProperty("--ddc-bg-opacity"),o.style.removeProperty("--ddc-bg-size"),o.style.removeProperty("--ddc-bg-position"),o.style.removeProperty("--ddc-bg-attachment"),o.style.removeProperty("--ddc-bg-filter"),o.classList.remove("has-bg-image")}_applyBackgroundFromConfig(){var t,n,o,c,s,d,u,f;try{let v=((t=this._config)==null?void 0:t.background_mode)||((o=(n=this._config)==null?void 0:n.background_image)!=null&&o.src?"image":"none");if((c=this._destroyParticles_)==null||c.call(this),(s=this._destroyYouTube_)==null||s.call(this),v!=="image"){let m=this.cardContainer;m&&(m.style.removeProperty("--ddc-bg-image"),m.style.removeProperty("--ddc-bg-repeat"),m.style.removeProperty("--ddc-bg-opacity"),m.style.removeProperty("--ddc-bg-size"),m.style.removeProperty("--ddc-bg-position"),m.style.removeProperty("--ddc-bg-attachment"),m.style.removeProperty("--ddc-bg-filter"),m.classList.remove("has-bg-image"))}if(v==="image"){(d=this._applyBackgroundImageFromConfig)==null||d.call(this);return}if(v==="particles"){let m=((u=this._config)==null?void 0:u.background_particles)||{};this._attachParticlesBackground_(m);return}if(v==="youtube"){let m=((f=this._config)==null?void 0:f.background_youtube)||{};this._attachYouTubeBackground_(m);return}}catch(v){console.warn("[drag-and-drop-card] _applyBackgroundFromConfig failed:",v)}}_ensureBgHost_(){let t=this.cardContainer;if(!t)return null;let n=t.querySelector("#ddcBgHost");return n?n.innerHTML="":(n=document.createElement("div"),n.className="ddc-bg-host",n.id="ddcBgHost",n.setAttribute("aria-hidden","true"),t.prepend(n)),n}async _loadScriptOnce_(t){if(!t)throw new Error("script src required");if(this.__scriptCache||(this.__scriptCache=new Map),this.__scriptCache.has(t))return this.__scriptCache.get(t);let n=new Promise((o,c)=>{let s=document.createElement("script");s.src=t,s.async=!0,s.onload=()=>o(!0),s.onerror=()=>c(new Error("failed to load "+t)),document.head.appendChild(s)});return this.__scriptCache.set(t,n),n}_getRenderRoot_(){return this.renderRoot||this.shadowRoot||this}_withScopedDocument_(t){let n=this._getRenderRoot_();if(!n||n===document||!n.querySelector)return t();let o=document,c=o.getElementById.bind(o),s=o.querySelector?o.querySelector.bind(o):null;o.getElementById=d=>{try{let u=window.CSS&&CSS.escape?CSS.escape(String(d)):String(d);return n.querySelector("#"+u)||c(d)}catch{return c(d)}},s&&(o.querySelector=d=>{try{return n.querySelector(d)||s(d)}catch{return s(d)}});try{return t()}finally{o.getElementById=c,s&&(o.querySelector=s)}}async _ensureParticles_(){if(window.particlesJS)return!0;if(!this.__particlesLoadPromise){let t=n=>new Promise((o,c)=>{let s=document.createElement("script");s.src=n,s.async=!0,s.onload=()=>o(!0),s.onerror=()=>c(new Error("Failed to load "+n)),document.head.appendChild(s)});this.__particlesLoadPromise=t("/local/particles.min.js").catch(()=>t("https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js")).then(()=>!!window.particlesJS).catch(()=>!1)}return this.__particlesLoadPromise}_attachParticlesBackground_(t={}){var f,v;let n=(f=this._ensureBgHost_)==null?void 0:f.call(this);if(!n)return;try{(v=this._destroyParticles_)==null||v.call(this)}catch{}n.innerHTML="";let o=document.createElement("div");o.id="ddcParticles",o.className="particles-js",o.style.position="absolute",o.style.inset="0",n.appendChild(o);let c={particles:{number:{value:70,density:{enable:!0,value_area:900}},color:{value:"#ffffff"},shape:{type:"circle"},opacity:{value:.4},size:{value:3,random:!0},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.3,width:1},move:{enable:!0,speed:2,out_mode:"out"}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1},onclick:{enable:!1},resize:!0},modes:{repulse:{distance:100},push:{particles_nb:4}}},retina_detect:!0},s=!!t.pointer_events,d=t.config||JSON.parse(JSON.stringify(c));s?(d.interactivity.events.onhover={enable:!0,mode:"repulse"},d.interactivity.events.onclick={enable:!0,mode:"push"},n.style.pointerEvents="auto"):n.style.pointerEvents="none",(async()=>{var x;if(!await((x=this._ensureParticles_)==null?void 0:x.call(this))||!window.particlesJS)return;await(typeof requestAnimationFrame=="function"?new Promise(w=>requestAnimationFrame(()=>w())):Promise.resolve()),await(typeof requestAnimationFrame=="function"?new Promise(w=>requestAnimationFrame(()=>w())):Promise.resolve());let y=d;if(t.config_url)try{y=await(await fetch(t.config_url,{cache:"no-store"})).json()}catch(w){console.warn("[drag-and-drop-card] Failed to fetch particles config; falling back to defaults",w),y=d}this._withScopedDocument_(()=>{if(!Array.isArray(window.pJSDom))try{window.pJSDom=[]}catch{}window.particlesJS("ddcParticles",y)}),Array.isArray(window.pJSDom)&&window.pJSDom.length&&(this.__particlesInst=window.pJSDom[window.pJSDom.length-1])})(),this.__particlesHost=n}_destroyParticles_(){try{Array.isArray(window.pJSDom)||(window.pJSDom=[]),window.pJSDom.length&&(window.pJSDom.forEach(t=>{var n,o,c,s,d,u,f,v;try{(s=(c=(o=(n=t.pJS)==null?void 0:n.fn)==null?void 0:o.vendors)==null?void 0:c.destroy)==null||s.call(c)}catch{}try{(v=(f=(u=(d=t.pJS)==null?void 0:d.fn)==null?void 0:u.vendors)==null?void 0:f.destroypJS)==null||v.call(f)}catch{}}),window.pJSDom.length=0)}catch{}this.__particlesHost&&(this.__particlesHost.innerHTML=""),this.__particlesHost=null,this.__particlesInst=null}_parseYouTubeId_(t){if(!t)return null;let n=String(t).trim(),o=n.match(/(?:youtube\.com\/.*[?&]v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([A-Za-z0-9_-]{11})/)||n.match(/^([A-Za-z0-9_-]{11})$/);return o?o[1]:null}async _ensureYouTube_(){var t;return(t=window.YT)!=null&&t.Player?!0:(this.__ytReadyPromise||(this.__ytReadyPromise=new Promise(n=>{var s;let o=()=>n(!0);if((s=window.YT)!=null&&s.Player)return o();window.onYouTubeIframeAPIReady=o;let c=document.createElement("script");c.src="https://www.youtube.com/iframe_api",c.async=!0,c.onerror=()=>n(!1),document.head.appendChild(c)})),this.__ytReadyPromise)}_attachYouTubeIframeDirect_(t,n,{start:o,end:c,mute:s=!0,loop:d=!0}={}){var m;let u=new URLSearchParams({autoplay:"1",mute:s?"1":"0",controls:"0",playsinline:"1",rel:"0",modestbranding:"1",iv_load_policy:"3",loop:d?"1":"0"});d&&u.set("playlist",n),Number.isFinite(o)&&u.set("start",String(o)),Number.isFinite(c)&&u.set("end",String(c));let f=`https://www.youtube.com/embed/${n}?${u.toString()}`,v=document.createElement("iframe");v.src=f,v.setAttribute("frameborder","0"),v.setAttribute("allow","autoplay; encrypted-media; picture-in-picture; fullscreen"),v.setAttribute("allowfullscreen","true"),v.style.position="absolute",v.style.inset="0",v.style.width="100%",v.style.height="100%",t.appendChild(v),this.__ytWrap=t,(m=this._layoutYtBackground_)==null||m.call(this)}_attachYouTubeBackground_(t={}){this.__ytSize=t.size||"cover",this.__ytPosition=t.position||"center",this.__ytOpacity=t.opacity!=null?Math.max(0,Math.min(1,Number(t.opacity))):1,this.__ytAttachment=t.attachment||"scroll";let n=String(this.__ytPosition).toLowerCase(),o=.5,c=.5;n.includes("left")?o=0:n.includes("right")&&(o=1),n.includes("top")?c=0:n.includes("bottom")&&(c=1),(n==="center"||n==="centre"||n==="middle")&&(o=.5,c=.5),this.__ytAx=o,this.__ytAy=c;let s=this._ensureBgHost_();if(!s)return;let d=this._parseYouTubeId_(t.video_id||t.url);if(!d){console.warn("[drag-and-drop-card] No YouTube video id");return}let u=document.createElement("div");u.className="yt-bg",this.__ytAttachment==="fixed"?(u.style.position="fixed",u.style.left="0",u.style.top="0",u.style.width="100%",u.style.height="100%"):(u.style.position="absolute",u.style.inset="0"),u.style.opacity=String(this.__ytOpacity),u.style.filter="none",u.style.pointerEvents="none",s.appendChild(u);let f=document.createElement("div");f.id="ddcYtFrame",f.style.position="absolute",f.style.left="0",f.style.top="0",f.style.width="100%",f.style.height="100%",u.appendChild(f);let v=Number.isFinite(t.start)?Number(t.start):void 0,m=Number.isFinite(t.end)?Number(t.end):void 0,y=t.mute!==!1,x=t.loop!==!1;(async()=>{if(!await this._ensureYouTube_()||!(window.YT&&window.YT.Player)){if(this._attachYouTubeIframeDirect_(u,d,{start:v,end:m,mute:y,loop:x}),!this.__ytResizeObs){this.__ytResizeObs=new ResizeObserver(()=>{var T;return(T=this._layoutYtBackground_)==null?void 0:T.call(this)});try{this.__ytResizeObs.observe(this.cardContainer)}catch{}window.addEventListener("resize",this.__ytOnWinResize=()=>{var T;return(T=this._layoutYtBackground_)==null?void 0:T.call(this)})}return}if(this.__ytPlayer=new window.YT.Player(f,{width:"100%",height:"100%",videoId:d,playerVars:{autoplay:1,controls:0,disablekb:1,fs:0,iv_load_policy:3,modestbranding:1,rel:0,playsinline:1,loop:x?1:0,playlist:x?d:void 0,start:v,end:m},events:{onReady:T=>{var L;try{y&&T.target.mute(),T.target.playVideo()}catch{}(L=this._layoutYtBackground_)==null||L.call(this)},onStateChange:T=>{if(T.data===window.YT.PlayerState.ENDED&&x)try{let L=Number.isFinite(v)?v:0,C=window.performance&&performance.now?performance.now():Date.now();(!this.__ytLastLoopAt||C-this.__ytLastLoopAt>1500)&&(this.__ytLastLoopAt=C,T.target.seekTo(L,!0),T.target.playVideo())}catch{}}}}),!this.__ytResizeObs){this.__ytResizeObs=new ResizeObserver(()=>{var T;return(T=this._layoutYtBackground_)==null?void 0:T.call(this)});try{this.__ytResizeObs.observe(this.cardContainer)}catch{}window.addEventListener("resize",this.__ytOnWinResize=()=>{var T;return(T=this._layoutYtBackground_)==null?void 0:T.call(this)})}})(),this.__ytWrap=u}_layoutYtBackground_(){var t,n,o,c,s,d,u,f;try{if(!this.__ytWrap)return;let v=this.__scaleOuter||this.cardContainer,m=0,y=0;try{m=parseFloat((n=(t=this.cardContainer)==null?void 0:t.style)==null?void 0:n.width)||((o=this.cardContainer)==null?void 0:o.scrollWidth)||((c=this.cardContainer)==null?void 0:c.offsetWidth)||0,y=parseFloat((d=(s=this.cardContainer)==null?void 0:s.style)==null?void 0:d.height)||((u=this.cardContainer)==null?void 0:u.scrollHeight)||((f=this.cardContainer)==null?void 0:f.offsetHeight)||0}catch{}let x,w;try{if(String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"){let U=v.getBoundingClientRect();if(x=U.width,m>0){let V=Math.min(x/m,1);w=y*V}else w=U.height}else x=m||v.getBoundingClientRect().width,w=y||v.getBoundingClientRect().height}catch{let F=v.getBoundingClientRect();x=F.width,w=F.height}let S=this.__ytAttachment==="fixed",T=S&&window.innerWidth||x,L=S&&window.innerHeight||w;if(!x||!w)return;let C=this.__ytSize||"cover",O=16/9,M=S?T/L:x/w,_,P,R=0,q=0;C==="100% 100%"||C==="fill"||C==="stretch"?(_=S?T:x,P=S?L:w,R=0,q=0):C==="contain"?M>O?(P=S?L:w,_=(S?L:w)*O,q=0,R=(x-_)/2):(_=S?T:x,P=(S?T:x)/O,R=0,q=(w-P)/2):M>O?(_=S?T:x,P=(S?T:x)/O,R=0,q=(w-P)/2):(P=S?L:w,_=(S?L:w)*O,q=0,R=(x-_)/2),this.__ytWrap.style.overflow="hidden";let K=this.__ytAx!=null?this.__ytAx:.5,$=this.__ytAy!=null?this.__ytAy:.5;R=((S?T:x)-_)*K,q=((S?L:w)-P)*$;let re=this.__ytWrap.querySelector("iframe")||this.__ytWrap;re.style.width=`${_}px`,re.style.height=`${P}px`,re.style.left=`${R}px`,re.style.top=`${q}px`}catch{}}_destroyYouTube_(){var t,n,o;try{(n=(t=this.__ytPlayer)==null?void 0:t.destroy)==null||n.call(t)}catch{}if(this.__ytPlayer=null,this.__ytResizeObs){try{this.__ytResizeObs.disconnect()}catch{}this.__ytResizeObs=null}this.__ytOnWinResize&&(window.removeEventListener("resize",this.__ytOnWinResize),this.__ytOnWinResize=null),(o=this.__ytWrap)!=null&&o.parentNode&&this.__ytWrap.parentNode.removeChild(this.__ytWrap),this.__ytWrap=null}_evaluateVisibility_(t){try{let n=this.hass||this._hass;if(!Array.isArray(t)||t.length===0)return!0;let o=c=>{var d,u,f,v,m;if(!c||typeof c!="object")return!0;let s=c.condition||c.type||"state";if(s==="and"||s==="or"){let y=Array.isArray(c.conditions)?c.conditions:[];return y.length===0?!0:s==="and"?y.every(x=>o(x)):y.some(x=>o(x))}if(s==="state"){let y=c.entity;if(!y)return!0;let x=(d=n==null?void 0:n.states)==null?void 0:d[y];if(!x)return!1;let w=String((u=x.state)!=null?u:"");return c.state!==void 0?(Array.isArray(c.state)?c.state:[c.state]).some(T=>String(T)===w):c.state_not!==void 0?!(Array.isArray(c.state_not)?c.state_not:[c.state_not]).some(T=>String(T)===w):!0}if(s==="numeric_state"){let y=c.entity;if(!y)return!0;let x=(f=n==null?void 0:n.states)==null?void 0:f[y];if(!x)return!1;let w=parseFloat(x.state);return!(isNaN(w)||c.above!==void 0&&!(w>Number(c.above))||c.below!==void 0&&!(w<Number(c.below)))}if(s==="screen"){let y=c.media_query||c.query;if(!y||typeof y!="string")return!0;try{return window.matchMedia(y).matches}catch{return!0}}if(s==="user"){let y=Array.isArray(c.users)?c.users:c.user?[c.user]:[];if(!y.length)return!0;let x=((v=n==null?void 0:n.user)==null?void 0:v.id)||((m=n==null?void 0:n.user)==null?void 0:m.id)||null;return x?y.includes(x):!0}return!0};return t.every(c=>o(c))}catch(n){return console.warn("[ddc:visibility] evaluate error",n),!0}}_applyVisibility_(){var t;try{let n=((t=this.cardContainer)==null?void 0:t.children)||[],o=this._normalizeTabId(this.activeTab);for(let c of n){if(!c||!c.firstElementChild||this._normalizeTabId(c.dataset.tabId)!==o)continue;let u=(this._extractCardConfig(c.firstElementChild)||{}).visibility,f=this.editMode?!0:this._evaluateVisibility_(u);c.style.display=f?"":"none"}}catch(n){console.warn("[ddc:visibility] apply error",n)}}async _onKeyDown_(t){var d,u,f,v,m,y,x,w,S,T;if(!this.editMode||this._isTypingTarget_(t.target))return;let n=Number(this.gridSize||10),o=t.altKey?1:t.shiftKey?n*5:n,c=0,s=0;switch(t.key){case"ArrowLeft":c=-o;break;case"ArrowRight":c=o;break;case"ArrowUp":s=-o;break;case"ArrowDown":s=o;break}if(c||s){t.preventDefault(),this._moveSelectionBy_(c,s,{liveSnap:!t.altKey});return}if(t.key==="Delete"||t.key==="Backspace"){let L=this._selection&&this._selection.size?Array.from(this._selection):[];if(!L.length)return;t.preventDefault(),L.forEach(C=>C.remove()),(d=this._clearSelection)==null||d.call(this),(u=this._resizeContainer)==null||u.call(this),(f=this._queueSave)==null||f.call(this,"delete-key"),(v=this._ensurePlaceholderIfEmpty)==null||v.call(this);return}if((t.ctrlKey||t.metaKey)&&(t.key==="d"||t.key==="D")){t.preventDefault(),await this._duplicateSelection_();return}if((t.ctrlKey||t.metaKey)&&t.key==="]"){t.preventDefault(),this._selection&&((y=(m=this._selection).forEach)==null||y.call(m,L=>{var C;return(C=this._adjustZ)==null?void 0:C.call(this,L,1)})),(x=this._queueSave)==null||x.call(this,"z-up");return}if((t.ctrlKey||t.metaKey)&&t.key==="["){t.preventDefault(),this._selection&&((S=(w=this._selection).forEach)==null||S.call(w,L=>{var C;return(C=this._adjustZ)==null?void 0:C.call(this,L,-1)})),(T=this._queueSave)==null||T.call(this,"z-down");return}}async _duplicateSelection_(){var n,o,c,s,d,u,f,v,m,y,x,w;if(!this._selection||!this._selection.size)return;let t=Array.from(this._selection);for(let S of t)try{let T=((n=this._extractCardConfig)==null?void 0:n.call(this,S.firstElementChild))||{},L=await((o=this._createCard)==null?void 0:o.call(this,T)),C=(c=this._makeWrapper)==null?void 0:c.call(this,L);if(!L||!C)continue;C.style.width=S.style.width,C.style.height=S.style.height;let O=Number(this.gridSize||10),M=(parseFloat(S.getAttribute("data-x"))||0)+O,_=(parseFloat(S.getAttribute("data-y"))||0)+O;(s=this._setCardPosition)==null||s.call(this,C,M,_);let P=(((d=this._highestZ)==null?void 0:d.call(this))||0)+1;C.style.zIndex=String(Math.max(P,6));try{let R=(u=S.dataset)==null?void 0:u.tabId;R&&(C.dataset.tabId=R)}catch{}(f=this.cardContainer)==null||f.appendChild(C);try{(v=this._addTabSelectorToChip)==null||v.call(this,C,C.dataset.tabId)}catch{}try{(m=this._rebuildOnce)==null||m.call(this,C.firstElementChild)}catch{}try{(y=this._initCardInteract)==null||y.call(this,C)}catch{}}catch{}try{(x=this._resizeContainer)==null||x.call(this)}catch{}try{(w=this._queueSave)==null||w.call(this,"duplicate")}catch{}}_moveSelectionBy_(t,n,{liveSnap:o=!0}={}){var v,m,y,x,w;if(!this._selection||!this._selection.size)return;let c=Array.from(this._selection),s=Number(this.gridSize||10),d=(v=this._isContainerFixed)==null?void 0:v.call(this),u=((m=this._getContainerSize)==null?void 0:m.call(this))||{w:1/0,h:1/0},f=c.map(S=>{let T=parseFloat(S.getAttribute("data-x-raw"))||parseFloat(S.getAttribute("data-x"))||0,L=parseFloat(S.getAttribute("data-y-raw"))||parseFloat(S.getAttribute("data-y"))||0,C=parseFloat(S.style.width)||S.getBoundingClientRect().width,O=parseFloat(S.style.height)||S.getBoundingClientRect().height,M=T+t,_=L+n;d&&(M=Math.max(0,Math.min(M,Math.max(0,u.w-C))),_=Math.max(0,Math.min(_,Math.max(0,u.h-O))));let P=o?Math.round(M/s)*s:M,R=o?Math.round(_/s)*s:_;return{el:S,rawX:M,rawY:_,snapX:P,snapY:R,w:C,h:O}});if(this.disableOverlap&&typeof this._pushCardsOutOfTheWay=="function")try{this._pushCardsOutOfTheWay(f,t,n,o,s)}catch{}for(let S of f){S.el.setAttribute("data-x-raw",String(S.rawX)),S.el.setAttribute("data-y-raw",String(S.rawY));try{(y=this._setCardPosition)==null||y.call(this,S.el,S.snapX,S.snapY)}catch{}}try{(x=this._resizeContainer)==null||x.call(this)}catch{}try{(w=this._queueSave)==null||w.call(this,"nudge")}catch{}}_syncTabsWidth_(){try{if(String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto")return;let n=this.tabsBar;if(!n)return;if(this.tabsPosition==="left"){n.style.width="",n.style.maxWidth="";return}let o=this.cardContainer||this.__scaleOuter;if(!o)return;let c=0;try{let s=o.getBoundingClientRect();c=s&&s.width?s.width:0}catch{}if(c<=0&&this.__scaleOuter&&this.__scaleOuter!==o)try{let s=this.__scaleOuter.getBoundingClientRect();c=s&&s.width?s.width:0}catch{}c>0&&(n.style.width=`${c}px`,n.style.maxWidth=`${c}px`)}catch{}}_isTypingTarget_(t){var c,s,d,u;if(!t||t===window||t===document)return!1;let n=(c=t.closest)==null?void 0:c.call(t,'input, textarea, [contenteditable="true"], ha-textfield, mwc-textfield');if(!n)return!1;let o=((d=(s=n.tagName)==null?void 0:s.toLowerCase)==null?void 0:d.call(s))||"";return o==="input"||o==="textarea"||((u=n.hasAttribute)==null?void 0:u.call(n,"contenteditable"))}_scheduleReflowAndScale(){this.__reflowRAF||(this.__reflowRAF=requestAnimationFrame(()=>{var t,n,o;this.__reflowRAF=null;try{(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="dynamic"&&((t=this._resizeContainer)==null||t.call(this))}catch{}try{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(n=this._applyAutoFillNoScale)==null||n.call(this):(o=this._applyAutoScale)==null||o.call(this)}catch{}}))}__ddcBindPointerListeners(){if(!this.__ddcPtrBound){this.__ddcPtrBound=!0,this.__onDDCPointerDown=t=>{var n,o;try{if(t.button!==void 0&&t.button!==0)return;let c=((n=t.composedPath)==null?void 0:n.call(t))||[],s=null;for(let d of c)if(d&&d.classList&&d.classList.contains("card-wrapper")){s=d;break}if(!s)return;this.__ddcDragging=!0,this.__scaleOuter&&(this.__prevOverflow=this.__scaleOuter.style.overflow,this.__scaleOuter.style.overflow="visible"),(o=this._scheduleReflowAndScale)==null||o.call(this)}catch{}},this.__onDDCPointerMove=t=>{var n;try{if(!this.__ddcDragging)return;(n=this._scheduleReflowAndScale)==null||n.call(this)}catch{}},this.__onDDCPointerUp=t=>{var n,o;try{if(!this.__ddcDragging)return;this.__ddcDragging=!1,this.__scaleOuter&&(this.__scaleOuter.style.overflow=this.__prevOverflow||"");try{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(n=this._applyAutoFillNoScale)==null||n.call(this):(o=this._applyAutoScale)==null||o.call(this)}catch{}}catch{}};try{this.addEventListener("pointerdown",this.__onDDCPointerDown,{passive:!0})}catch{}try{this.addEventListener("pointermove",this.__onDDCPointerMove,{passive:!0})}catch{}try{window.addEventListener("pointerup",this.__onDDCPointerUp,{passive:!0})}catch{}try{window.addEventListener("pointercancel",this.__onDDCPointerUp,{passive:!0})}catch{}}}_renderEditToolbar_(){this.shadowRoot.querySelectorAll(".ddc-toolbar").forEach(y=>y.remove()),this._ensureToolbarStyles_();let t=document.createElement("div");t.className="ddc-toolbar";let n=document.createElement("div");n.className="ddc-t-group",n.append(this._mkBtn_("add_card","mdi:plus-box","Add card (A)","primary"),this._mkBtn_("snap_toggle","mdi:magnet","Toggle snap (G)"),this._mkBtn_("align_grid","mdi:grid","Align to grid"));let o=document.createElement("div");o.className="ddc-t-group";let c=document.createElement("div");c.className="ddc-t-status";let s=document.createElement("div");s.className="ddc-t-dot"+(this.__dirty?" dirty":"");let d=document.createElement("span");d.textContent=this.__dirty?"Unsaved changes":`Saved${this.__lastSavedAt?" \xB7 "+this.__lastSavedAt:""}`,c.append(s,d),o.appendChild(c);let u=document.createElement("div");u.className="ddc-t-group",u.append(this._mkBtn_("reload","mdi:refresh","Reload (R)","ghost"),this._mkBtn_("open_hads","mdi:alpha-h-box-outline","Open HACS/HADS","ghost"),this._mkBtn_("apply","mdi:content-save","Apply / Save (S)","primary"),this._mkBtn_("exit_edit","mdi:logout-variant","Exit edit (Esc)","danger"));let f=document.createElement("div");f.className="ddc-t-group ddc-t-row",f.append(n);let v=document.createElement("div");v.className="ddc-t-group ddc-t-row",v.append(o);let m=document.createElement("div");m.className="ddc-t-group ddc-t-row",m.append(u),t.append(f,document.createElement("div")).lastChild.className="ddc-t-sep",t.append(v,document.createElement("div")).lastChild.className="ddc-t-sep",t.append(m),t.addEventListener("click",y=>{let x=y.target.closest("[data-action]");x&&this._onToolbarAction_(x.dataset.action,{button:x,bar:t,dot:s,txt:d})}),this.shadowRoot.appendChild(t);try{this.__toolbarRO&&this.__toolbarRO.disconnect(),this.__toolbarRO=new ResizeObserver(y=>{for(let x of y)t.classList.toggle("compact",x.contentRect.width<980)}),this.__toolbarRO.observe(t)}catch{}this.__toolbarKeyHandler=y=>{if(!(!this.editMode&&!this.isEditing)){if(y.key==="a"||y.key==="A")return this._onToolbarAction_("add_card");if(y.key==="s"||y.key==="S")return this._onToolbarAction_("apply");if(y.key==="r"||y.key==="R")return this._onToolbarAction_("reload");if(y.key==="g"||y.key==="G")return this._onToolbarAction_("snap_toggle");if(y.key==="Escape")return this._onToolbarAction_("exit_edit")}},window.addEventListener("keydown",this.__toolbarKeyHandler)}async _onToolbarAction_(t,n={}){var o,c,s,d,u,f,v,m,y,x,w;switch(t){case"add_card":(o=this._openAddCardDialog_)!=null&&o.call(this)||(c=this._addNewCard_)!=null&&c.call(this)||((s=this._openEntityPicker_)==null||s.call(this));break;case"snap_toggle":{this.dragLiveSnap=!this.dragLiveSnap,(d=this._initInteract)==null||d.call(this),(u=this._toast_)==null||u.call(this,`Live snap ${this.dragLiveSnap?"ON":"OFF"}`);break}case"align_grid":(f=this._alignAllToGrid_)==null||f.call(this,this.gridSize);break;case"reload":(v=this._reloadLayout_)==null||v.call(this);break;case"open_hads":(m=this._openHACS_)!=null&&m.call(this)||window.open("/hacs","_blank")||window.open("/hacsfiles","_blank");break;case"apply":{let S=()=>{this._setDirty_(!1),n!=null&&n.txt&&(n.txt.textContent=`Saved \xB7 ${this.__lastSavedAt}`),n!=null&&n.dot&&n.dot.classList.remove("dirty","error")},T=()=>{n!=null&&n.dot&&n.dot.classList.add("error")};try{this._saveLayoutNow_?await this._saveLayoutNow_():this._persistThisCardConfigToStorage_?await this._persistThisCardConfigToStorage_():(y=this._queueSave)==null||y.call(this,"toolbar-apply",!0),this.__lastSavedAt=new Date().toLocaleTimeString(),S()}catch(L){console.warn(L),T()}break}case"exit_edit":if((x=this._toggleEditMode)!=null&&x.call(this,!1)||(w=this._exitEditMode_)!=null&&w.call(this)||(this.isEditing=!1),this.__toolbarKeyHandler&&(window.removeEventListener("keydown",this.__toolbarKeyHandler),this.__toolbarKeyHandler=null),this.__toolbarRO){try{this.__toolbarRO.disconnect()}catch{}this.__toolbarRO=null}this.shadowRoot.querySelectorAll(".ddc-toolbar").forEach(S=>S.remove());break}}_ensureScaleWrapper(){let t=this.cardContainer;if(!t||this.__scaleOuter&&this.__scaleOuter.contains(t))return;let n=document.createElement("div");n.className="ddc-scale-outer",Object.assign(n.style,{position:"relative",width:"100%",overflow:"hidden"}),t.parentNode&&(t.parentNode.insertBefore(n,t),n.appendChild(t)),Object.assign(t.style,{position:"absolute",top:"0",left:"0",transformOrigin:"top left"}),this.__scaleOuter=n}_hasCardModDeep(t){try{if(!t||typeof t!="object")return!1;if(t.card_mod||t.type==="custom:mod-card")return!0;if(t.card)return this._hasCardModDeep(t.card);if(Array.isArray(t.cards)){for(let n of t.cards)if(this._hasCardModDeep(n))return!0}return!1}catch{return!1}}_rebuildOnce(t){try{if(!t||(this.__rebuiltCards||(this.__rebuiltCards=new WeakSet),this.__rebuiltCards.has(t)))return;this.__rebuiltCards.add(t),t.dispatchEvent(new Event("ll-rebuild",{bubbles:!0,composed:!0}))}catch{}}_deepQueryAll(t,n=document){let o=[],c=s=>{if(!s)return;if(s.querySelectorAll)try{s.querySelectorAll(t).forEach(f=>o.push(f))}catch{}let d=document.createTreeWalker(s,NodeFilter.SHOW_ELEMENT,null),u=s;for(;u;){let f=u.shadowRoot;f&&c(f),u=d.nextNode()}};return c(n),o}_syncEditorsStorageKey(){try{let t=this.storageKey||"";this._deepQueryAll("#storage_key").forEach(o=>{try{o&&o.tagName==="INPUT"&&o.value!==t&&(o.value=t,o.dispatchEvent(new Event("input",{bubbles:!0})),o.dispatchEvent(new Event("change",{bubbles:!0})))}catch{}})}catch{}}static _genKey(){var n,o;return`layout_${((o=(n=globalThis.crypto)==null?void 0:n.randomUUID)==null?void 0:o.call(n))||`${Date.now().toString(36)}_${Math.random().toString(36).slice(2,8)}`}`}static get type(){return"drag-and-drop-card"}static get title(){return"Drag & Drop Card"}static get description(){return"Flexible grid layout card with drag\u2011and\u2011drop editing."}static get icon(){return"mdi:cursor-move"}static get group(){return"custom"}static getStubConfig(){return{type:"custom:drag-and-drop-card",storage_key:this._genKey(),grid:20,drag_live_snap:!0,auto_save:!0,auto_save_debounce:800,container_size_mode:"auto",container_background:"linear-gradient(135deg, #1e3a8a, #0ea5e9)",card_background:"linear-gradient(135deg, #111827, #1f2937)",debug:!1,disable_overlap:!1,auto_resize_cards:!1,background_mode:"none",animate_cards:!0,container_preset_orientation:"auto",edit_mode_pin:"",container_fixed_width:null,container_fixed_height:null,container_preset:"fullhd",card_shadow:!0,hide_HA_Header:!1,hide_HA_Sidebar:!1,screen_saver_enabled:!0,screen_saver_delay:15e5,tabs:[{id:"home",label:"Home",icon:"mdi:home",label_mode:"both"}],default_tab:"home"}}static getConfigElement(){let t=document.createElement("div");t.style.display="grid",t.style.gridTemplateColumns="1fr",t.style.rowGap="12px";let n=document.createElement("ha-textfield");n.id="storage_key",n.label="Storage key",n.placeholder="Auto-generated if left blank",t.appendChild(n);let o=document.createElement("div");return o.style.fontSize="0.85rem",o.style.opacity="0.7",o.textContent="Unique key for saving layout positions. Leave blank to auto\u2011generate.",t.appendChild(o),t.setConfig=(y={})=>{var x;t._config={type:y.type||"custom:drag-and-drop-card",...y},t._config.storage_key||(t._config.storage_key=`layout_${((x=crypto==null?void 0:crypto.randomUUID)==null?void 0:x.call(crypto))||Date.now().toString(36)}`),n.value=t._config.storage_key||""},t.getConfig=()=>{let y={...t._config||{}};return y.type="custom:drag-and-drop-card",y.storage_key=n.value||"",y},n.addEventListener("input",()=>{t.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t.getConfig()}}))}),t;let c=()=>{let y=v();u.disabled=!y},s=async()=>{var x,w;let y=el.getConfig();el.dispatchEvent(new CustomEvent("config-changed",{detail:{config:y}})),c();try{if(this.storageKey){let S=this._exportableOptions?this._exportableOptions():y;await this._saveOptionsToBackend(this.storageKey,S)}}catch{}try{await this._persistThisCardConfigToStorage_()}catch{try{let T=this._exportableOptions?this._exportableOptions():y;await((x=this._persistOptionsToYaml)==null?void 0:x.call(this,T,{patchAllInCurrentViewIfNoKey:!0}))}catch{}}try{(w=this._applyBackgroundFromConfig)==null||w.call(this)}catch{}},d=()=>{var x,w,S,T;let y=(T=(S=(x=el.querySelector("#sizeMode"))==null?void 0:x.value)!=null?S:(w=el.querySelector("#ddc-setting-sizeMode"))==null?void 0:w.value)!=null?T:"dynamic";el.querySelector("#sizeCustom").style.display=y==="fixed_custom"?"inline-flex":"none",el.querySelector("#sizePresetWrap").style.display=y==="preset"?"inline-flex":"none"},u=el.querySelector("#applyBtn"),f=el.querySelector("#revertBtn");["#sizeMode","#sizePreset","#sizeOrientation"].forEach(y=>{let x=el.querySelector(y);if(x){try{x.fixedMenuPosition=!0}catch{}x.addEventListener("closed",w=>w.stopPropagation())}}),el.setConfig=(y={})=>{var S,T,L,C,O,M,_,P;el._config={type:y.type||"custom:drag-and-drop-card",...y},el._config.storage_key||(el._config.storage_key=`layout_${((S=crypto==null?void 0:crypto.randomUUID)==null?void 0:S.call(crypto))||Date.now().toString(36)}`,el.__autokeyPending=!0),el.querySelector("#storage_key").value=el._config.storage_key||"",el.querySelector("#grid").value=(T=el._config.grid)!=null?T:10,el.querySelector("#liveSnap").checked=!!el._config.drag_live_snap,el.querySelector("#autoSave").checked=el._config.auto_save!==!1,el.querySelector("#autoSaveDebounce").value=(L=el._config.auto_save_debounce)!=null?L:800,el.querySelector("#containerBg").value=(C=el._config.container_background)!=null?C:"transparent",el.querySelector("#cardBg").value=(O=el._config.card_background)!=null?O:"var(--ha-card-background, var(--card-background-color))",el.querySelector("#debug").checked=!!el._config.debug,el.querySelector("#noOverlap").checked=!!el._config.disable_overlap,el.querySelector("#autoResize").checked=!!el._config.auto_resize_cards,el.querySelector("#animateCards").checked=!!el._config.animate_cards;let x=el.querySelector("#sizeMode")||el.querySelector("#ddc-setting-sizeMode");x&&(x.value=el._config.container_size_mode||"dynamic"),el.querySelector("#sizeW").value=(M=el._config.container_fixed_width)!=null?M:"",el.querySelector("#sizeH").value=(_=el._config.container_fixed_height)!=null?_:"",el.querySelector("#sizeOrientation").value=el._config.container_preset_orientation||"auto";let w=el.querySelector("#sizePreset");if(!w.__filled){let R=(((P=this._sizePresets)==null?void 0:P.call(this))||[]).reduce((q,K)=>{var $;return(q[$=K.group||"other"]||(q[$]=[])).push(K),q},{});w.innerHTML="";for(let[q,K]of Object.entries(R)){let $=document.createElement("optgroup");$.label=q.replace(/(^.|-.?)/g,F=>F.toUpperCase()),K.forEach(F=>{let U=document.createElement("mwc-list-item");U.value=F.key,U.textContent=`${F.label} (${F.w}\xD7${F.h})`,$.appendChild(U)});let re=document.createElement("mwc-list-item");re.setAttribute("disabled",""),re.textContent=`\u2014 ${$.label} \u2014`,w.appendChild(re),Array.from($.children).forEach(F=>w.appendChild(F))}w.__filled=!0}el._config.container_preset&&(w.value=el._config.container_preset),d(),c(),el.__autokeyPending&&(el.__autokeyPending=!1,s())},el.getConfig=()=>{var x,w,S,T;let y={...el._config||{}};y.storage_key=el.querySelector("#storage_key").value||"",y.grid=Number(el.querySelector("#grid").value||10),y.drag_live_snap=!!el.querySelector("#liveSnap").checked,y.auto_save=!!el.querySelector("#autoSave").checked,y.auto_save_debounce=Number(el.querySelector("#autoSaveDebounce").value||800),y.container_background=el.querySelector("#containerBg").value||"transparent",y.card_background=el.querySelector("#cardBg").value||"var(--ha-card-background, var(--card-background-color))",y.debug=!!el.querySelector("#debug").checked,y.disable_overlap=!!el.querySelector("#noOverlap").checked,y.auto_resize_cards=!!el.querySelector("#autoResize").checked;try{let L=el.querySelector("#ddc-bg-mode"),C=el.querySelector("#ddc-setting-bgImg"),O=el.querySelector("#ddc-bg-repeat"),M=el.querySelector("#ddc-bg-size"),_=el.querySelector("#ddc-bg-position"),P=el.querySelector("#ddc-bg-attachment"),R=el.querySelector("#ddc-bg-opacity"),q=el.querySelector("#ddc-particles-url"),K=el.querySelector("#ddc-particles-pointer"),$=el.querySelector("#ddc-youtube-url"),re=el.querySelector("#ddc-youtube-start"),F=el.querySelector("#ddc-youtube-end"),U=el.querySelector("#ddc-youtube-mute"),V=el.querySelector("#ddc-youtube-loop"),ce=el.querySelector("#ddc-youtube-size"),We=el.querySelector("#ddc-youtube-position"),ye=el.querySelector("#ddc-youtube-attachment"),ze=el.querySelector("#ddc-youtube-opacity"),we=(L==null?void 0:L.value)||"none";y.background_mode=we;let Ee=De=>Math.max(0,Math.min(1,De)),et=De=>{let Ge=parseFloat((De==null?void 0:De.value)||"100");return Number.isFinite(Ge)?Ee(Ge/100):1},Ve=De=>Object.fromEntries(Object.entries(De).filter(([,Ge])=>Ge!=null&&Ge!==""));if(we==="image"){let De=((C==null?void 0:C.value)||"").trim();y.background_image=Ve({src:De||void 0,repeat:(O==null?void 0:O.value)||"no-repeat",size:(M==null?void 0:M.value)||"cover",position:(_==null?void 0:_.value)||"center center",attachment:(P==null?void 0:P.value)||"scroll",opacity:et(R)})}if(we==="particles"&&(y.background_particles=Ve({config_url:((q==null?void 0:q.value)||"").trim()||void 0,pointer_events:!!(K!=null&&K.checked)})),we==="youtube"){let De=Ge=>{let st=parseInt(((Ge==null?void 0:Ge.value)||"").trim(),10);return Number.isFinite(st)?st:void 0};y.background_youtube=Ve({url:(($==null?void 0:$.value)||"").trim()||void 0,start:De(re),end:De(F),mute:!!(U!=null&&U.checked),loop:!!(V!=null&&V.checked),size:(ce==null?void 0:ce.value)||"cover",position:(We==null?void 0:We.value)||"center center",attachment:(ye==null?void 0:ye.value)||"scroll",opacity:et(ze)})}we!=="image"&&delete y.background_image,we!=="particles"&&delete y.background_particles,we!=="youtube"&&delete y.background_youtube}catch{}return y.animate_cards=!!el.querySelector("#animateCards").checked,y.container_size_mode=(T=(S=(x=el.querySelector("#sizeMode"))==null?void 0:x.value)!=null?S:(w=el.querySelector("#ddc-setting-sizeMode"))==null?void 0:w.value)!=null?T:"dynamic",y.container_fixed_width=Number(el.querySelector("#sizeW").value||0)||void 0,y.container_fixed_height=Number(el.querySelector("#sizeH").value||0)||void 0,y.container_preset=el.querySelector("#sizePreset").value||void 0,y.container_preset_orientation=el.querySelector("#sizeOrientation").value||"auto",y};let v=()=>{let y=el.getConfig(),x=el._config||{};try{return JSON.stringify(y)!==JSON.stringify(x)}catch{return!0}},m=(y,x="input")=>{var w;return(w=el.querySelector(y))==null?void 0:w.addEventListener(x,()=>{y==="#sizeMode"&&d(),c()})};return m("#storage_key"),m("#grid"),m("#liveSnap","change"),m("#autoSave","change"),m("#autoSaveDebounce"),m("#containerBg"),m("#cardBg"),m("#debug","change"),m("#noOverlap","change"),m("#autoResize","change"),m("#animateCards","change"),m("#sizeMode","change"),m("#ddc-setting-sizeMode","change"),m("#sizeW"),m("#sizeH"),m("#sizePreset","selected"),m("#sizeOrientation","selected"),u==null||u.addEventListener("click",()=>{s()}),f==null||f.addEventListener("click",()=>el.setConfig(el._config)),el}static _sizePresets(){return[{key:"iphone-14-pro",label:"iPhone 14 Pro",w:393,h:852,group:"phone"},{key:"iphone-14-pro-max",label:"iPhone 14 Pro Max",w:430,h:932,group:"phone"},{key:"iphone-se-2",label:"iPhone SE (2/3rd gen)",w:375,h:667,group:"phone"},{key:"pixel-7",label:"Pixel 7",w:412,h:915,group:"phone"},{key:"galaxy-s8",label:"Galaxy S8",w:360,h:740,group:"phone"},{key:"galaxy-s20-ultra",label:"Galaxy S20 Ultra",w:412,h:915,group:"phone"},{key:"ipad-9-7",label:'iPad 9.7"',w:768,h:1024,group:"tablet"},{key:"ipad-11-pro",label:'iPad Pro 11"',w:834,h:1194,group:"tablet"},{key:"ipad-12-9-pro",label:'iPad Pro 12.9"',w:1024,h:1366,group:"tablet"},{key:"surface-go-3",label:"Surface Go 3",w:800,h:1280,group:"tablet"},{key:"hd",label:"HD",w:1366,h:768,group:"desktop"},{key:"wxga-plus",label:"WXGA+",w:1440,h:900,group:"desktop"},{key:"fhd",label:"Full HD",w:1920,h:1080,group:"desktop"},{key:"qhd",label:"2K / QHD",w:2560,h:1440,group:"desktop"},{key:"uhd-4k",label:"4K UHD",w:3840,h:2160,group:"desktop"}]}_isContainerFixed(){return this.containerSizeMode==="fixed_custom"||this.containerSizeMode==="preset"||this.containerSizeMode==="fixed"}_resolveFixedSize(){if(this.containerSizeMode==="fixed_custom"){let t=Math.max(100,Number(this.containerFixedWidth||0)),n=Math.max(100,Number(this.containerFixedHeight||0));return{w:t,h:n}}if(this.containerSizeMode==="preset"){let t=e._sizePresets().find(c=>c.key===this.containerPreset)||e._sizePresets().find(c=>c.key==="fhd");if(!t)return{w:1920,h:1080};let n=t.w,o=t.h;return this.containerPresetOrient==="portrait"&&n>o&&([n,o]=[o,n]),this.containerPresetOrient==="landscape"&&o>n&&([n,o]=[o,n]),{w:n,h:o}}return null}_applyContainerSizingFromConfig(t=!1){var o,c;let n=this.cardContainer;if(n)if(this._isContainerFixed()){let{w:s,h:d}=this._resolveFixedSize();n.style.width=`${s}px`,n.style.height=`${d}px`,n.style.overflow="hidden",t||(o=this._dbgPush)==null||o.call(this,"size","Applied fixed size",{w:s,h:d,mode:this.containerSizeMode,preset:this.containerPreset,orient:this.containerPresetOrient}),this._clampAllCardsInside()}else n.style.overflow="hidden",t||(c=this._dbgPush)==null||c.call(this,"size","Applied dynamic size"),this._resizeContainer()}_getContainerSize(){let t=this.cardContainer;if(!t)return{w:0,h:0};let n=parseFloat(getComputedStyle(t).width)||t.getBoundingClientRect().width,o=parseFloat(getComputedStyle(t).height)||t.getBoundingClientRect().height;return{w:n,h:o}}_clampAllCardsInside(){if(!this._isContainerFixed())return;let{w:t,h:n}=this._getContainerSize();this.cardContainer.querySelectorAll(".card-wrapper").forEach(c=>{let s=parseFloat(c.getAttribute("data-x"))||0,d=parseFloat(c.getAttribute("data-y"))||0,u=parseFloat(c.style.width)||c.getBoundingClientRect().width,f=parseFloat(c.style.height)||c.getBoundingClientRect().height,v=Math.max(0,Math.min(s,Math.max(0,t-u))),m=Math.max(0,Math.min(d,Math.max(0,n-f))),y=Math.min(u,t),x=Math.min(f,n);(y!==u||x!==f)&&(c.style.width=`${y}px`,c.style.height=`${x}px`);let w=Math.max(0,Math.min(v,Math.max(0,t-y))),S=Math.max(0,Math.min(m,Math.max(0,n-x)));this._setCardPosition(c,w,S)})}_computeHaSidebarGutters_(){var o;let t=56;try{let c=document.querySelector("home-assistant"),s=c==null?void 0:c.shadowRoot,d=s==null?void 0:s.querySelector("ha-drawer, app-drawer, ha-sidebar, .drawer, .menu"),u=(o=d==null?void 0:d.getBoundingClientRect)==null?void 0:o.call(d);Math.max(document.documentElement.clientWidth||0,window.innerWidth||0)<=870?t=0:u!=null&&u.width&&(t=Math.max(0,Math.min(256,Math.round(u.width))))}catch{}let n=0;try{this.style.setProperty("--ddc-left-gutter",`${t}px`),this.style.setProperty("--ddc-right-gutter",`${n}px`)}catch{}}_applyGridVars(){var n;let t=`${this.gridSize||10}px`;this.style.setProperty("--ddc-grid-size",t),(n=this.cardContainer)==null||n.style.setProperty("--ddc-grid-size",t)}_dbgInit(){if(!this.__dbgReady){this.__dbgReady=!0,this._dbgBuffer=[],this._dbgMax=400;try{window.DDC=this}catch{}}}_dbgPush(t,n,o=null){let c={t:new Date().toISOString(),kind:t,msg:n,extra:o};this._dbgBuffer.push(c),this._dbgBuffer.length>this._dbgMax&&this._dbgBuffer.shift(),this.debug&&console.debug(`%c[ddc:${t}]%c ${n}`,"color:#03a9f4","color:unset",o!=null?o:"")}_dbgDump(){return[...this._dbgBuffer]}_safe(t){return String(t).replace(/[&<>"']/g,n=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[n])}setConfig(t={}){var s,d,u,f,v,m,y,x,w,S,T,L,C,O,M,_,P,R,q,K,$,re,F,U,V,ce,We;let n=this.storageKey;this.config={...t},(!this.config.storage_key||this.config.storage_key==="")&&(this.config.storage_key=this.constructor._genKey()),this.storageKey=this.config.storage_key,t.storage_key||(this.storageKey?t={...t,storage_key:this.storageKey}:(this.storageKey=`layout_${((s=crypto==null?void 0:crypto.randomUUID)==null?void 0:s.call(crypto))||Date.now().toString(36)}`,t={...t,storage_key:this.storageKey})),this._config=t,this.storageKey=t.storage_key,this._syncEditorsStorageKey(),this.storageKey=t.storage_key||void 0,this._syncEditorsStorageKey(),this.gridSize=Number((d=t.grid)!=null?d:10),this.dragLiveSnap=!!t.drag_live_snap,this.autoSave=t.auto_save!==!1,this.autoSaveDebounce=Number((u=t.auto_save_debounce)!=null?u:800),this.editModePin=this.editModePin!=null?this.editModePin:(v=(f=t.edit_mode_pin)!=null?f:t.editModePin)!=null?v:"",this.containerBackground=(m=t.container_background)!=null?m:"transparent",this.cardBackground=(y=t.card_background)!=null?y:"var(--ha-card-background, var(--card-background-color))",this.cardShadowEnabled=!!t.card_shadow,this.hideHaHeader=!!((w=(x=t.hide_HA_Header)!=null?x:t.hide_ha_header)!=null&&w),this.hideHaSidebar=!!((T=(S=t.hide_HA_Sidebar)!=null?S:t.hide_ha_sidebar)!=null&&T),this.debug=!!t.debug,this.editMode=!1,this._backendOK=!1,this.disableOverlap=!!t.disable_overlap,this.containerSizeMode=t.container_size_mode||"dynamic",this.autoResizeCards=!!t.auto_resize_cards,this.animateCards=!!t.animate_cards,this.screenSaverEnabled=!!((L=t.screen_saver_enabled)!=null&&L);let o=Number(t.screen_saver_delay);this.screenSaverDelay=Number.isFinite(o)&&o>0?o:5*6e4,this.autoResizeCards||String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(C=this._startScaleWatch)==null||C.call(this):(O=this._stopScaleWatch)==null||O.call(this),(M=this._applyAutoScale)==null||M.call(this),this.containerFixedWidth=Number((_=t.container_fixed_width)!=null?_:0)||null,this.containerFixedHeight=Number((P=t.container_fixed_height)!=null?P:0)||null,this.containerPreset=t.container_preset||"fullhd",this.containerPresetOrient=t.container_preset_orientation||"auto",this.heroImage=(t==null?void 0:t.hero_image)||"https://i.postimg.cc/CxsWQgwp/Chat-GPT-Image-Sep-5-2025-09-26-16-AM.png",this.tabs=Array.isArray(t.tabs)?t.tabs:[],this.tabsPosition=t.tabs_position==="left"?"left":"top",this.defaultTab=t.default_tab||((q=(R=this.tabs[0])==null?void 0:R.id)!=null?q:"default"),this.hideTabsWhenSingle=t.hide_tabs_when_single!==!1,this.activeTab=this.defaultTab;try{let ye=localStorage.getItem(`ddc_lasttab_${this.storageKey}`);ye&&this.tabs.some(ze=>ze.id===ye)&&(this.activeTab=ye)}catch{}this.rootEl&&this.rootEl.classList.toggle("ddc-tabs-left-layout",this.tabsPosition==="left"),this.cardContainer&&this._applyContainerSizingFromConfig(!1);let c=n!==this.storageKey;if(this.editMode&&!this.__booting&&!c)try{this._isInHaEditorPreview()||this._queueSave("config-change")}catch{}this._applyGridVars();try{(K=this._applyBackgroundImageFromConfig)==null||K.call(this)}catch{}try{($=this._applyHaChromeVisibility_)==null||$.call(this)}catch{}this._ensureOverlayZFix();try{(re=this._updateScreensaverSettings)==null||re.call(this)}catch{}if(this._selection=new Set,this.__groupDrag=null,this.__editorCache=new Map,this.__stubCache=new Map,this._dbgInit(),this._dbgPush("init","Card configured",{storageKey_raw:t.storage_key,storageKey_slug:this.storageKey,autoSave:this.autoSave,grid:this.gridSize}),this.style.setProperty("--ddc-bg",this.containerBackground),this.style.setProperty("--ddc-card-bg",this.cardBackground),this.cardShadowEnabled&&this.style.setProperty("--ddc-card-shadow","0 8px 24px rgba(0,0,0,.35)"),!window.jsyaml){let ye=document.createElement("script");ye.src="https://cdnjs.cloudflare.com/ajax/libs/js-yaml/4.1.0/js-yaml.min.js",document.head.appendChild(ye)}if(!window.interact){let ye=document.createElement("script");ye.src="https://cdn.jsdelivr.net/npm/interactjs/dist/interact.min.js",ye.onload=()=>this._initInteract(),document.head.appendChild(ye)}if(this._helpersPromise=typeof window.loadCardHelpers=="function"?window.loadCardHelpers().catch(()=>null):Promise.resolve(null),!this._built){this._built=!0,this.shadowRoot.innerHTML=`
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



      `,this.cardContainer=this.shadowRoot.querySelector("#cardContainer");try{(F=this._applyBackgroundFromConfig)==null||F.call(this)}catch{}try{(U=this._updateScreensaverSettings)==null||U.call(this)}catch{}this.addButton=this.shadowRoot.querySelector("#addCardBtn"),this.reloadBtn=this.shadowRoot.querySelector("#reloadBtn"),this.diagBtn=this.shadowRoot.querySelector("#diagBtn"),this.exitEditBtn=this.shadowRoot.querySelector("#exitEditBtn"),this.storeBadge=this.shadowRoot.querySelector("#storeBadge"),this.exportBtn=this.shadowRoot.querySelector("#exportBtn"),this.importBtn=this.shadowRoot.querySelector("#importBtn"),this.exploreBtn=this.shadowRoot.querySelector("#exploreBtn"),this.applyLayoutBtn=this.shadowRoot.querySelector("#applyLayoutBtn"),this.copyBtn=this.shadowRoot.querySelector("#copyBtn"),this.pasteBtn=this.shadowRoot.querySelector("#pasteBtn"),this.settingsBtn=this.shadowRoot.querySelector("#settingsBtn"),this.tabsBar=this.shadowRoot.querySelector("#tabsBar"),this.rootEl=this.shadowRoot.querySelector(".ddc-root");try{this._renderTabs(),this._applyActiveTab()}catch{}this._applyGridVars(),this.addButton.addEventListener("click",()=>{this.editMode||this._toggleEditMode(!0),this._openCardManager()}),this.reloadBtn.addEventListener("click",()=>this._initialLoad(!0)),this.diagBtn.addEventListener("click",()=>this._openDiagnostics()),this.exitEditBtn.addEventListener("click",()=>this._toggleEditMode(!1)),this.exportBtn.addEventListener("click",()=>this._exportDesign()),this.importBtn.addEventListener("click",()=>this._importDesign()),this.applyLayoutBtn.addEventListener("click",()=>this._saveLayout(!1)),this.copyBtn&&this.copyBtn.addEventListener("click",()=>this._copySelection()),this.pasteBtn&&this.pasteBtn.addEventListener("click",()=>this._pasteClipboard()),this.settingsBtn&&this.settingsBtn.addEventListener("click",()=>this._openDashboardSettings()),window.addEventListener("keydown",ye=>{var ze;if(this.editMode){if((ye.ctrlKey||ye.metaKey)&&(ye.key==="s"||ye.key==="S")&&(ye.preventDefault(),this._saveLayout(!1)),!this.__ddcResizeObs&&this.autoResizeCards){this.__ddcResizeObs=new ResizeObserver(()=>{var we;return(we=this._applyAutoScale)==null?void 0:we.call(this)});try{this.__ddcResizeObs.observe(this)}catch{}try{this.__ddcResizeObs.observe(this.cardContainer)}catch{}try{this.parentElement&&this.__ddcResizeObs.observe(this.parentElement)}catch{}try{this.offsetParent&&this.__ddcResizeObs.observe(this.offsetParent)}catch{}window.addEventListener("resize",this.__ddcOnWinResize=()=>{var we;return(we=this._applyAutoScale)==null?void 0:we.call(this)})}(ze=this._applyAutoScale)==null||ze.call(this)}}),this.exploreBtn.addEventListener("click",()=>window.open("https://hads.smarti.dev/","_blank","noopener,noreferrer")),this._applyContainerSizingFromConfig(!0),(V=this._applyAutoScale)==null||V.call(this),this._installLongPressToEnterEdit(),(ce=this._startScaleWatch)==null||ce.call(this),window.addEventListener("keydown",ye=>{var ze;if(ye.key==="Escape"&&this.editMode&&this._toggleEditMode(!1),!this.__ddcResizeObs&&this.autoResizeCards){this.__ddcResizeObs=new ResizeObserver(()=>{var we;return(we=this._applyAutoScale)==null?void 0:we.call(this)});try{this.__ddcResizeObs.observe(this)}catch{}try{this.__ddcResizeObs.observe(this.cardContainer)}catch{}window.addEventListener("resize",this.__ddcOnWinResize=()=>{var we;return(we=this._applyAutoScale)==null?void 0:we.call(this)})}(ze=this._applyAutoScale)==null||ze.call(this)}),this._installSelectionMarquee(),this.cardContainer.addEventListener("mousedown",ye=>{this.editMode&&(ye.target.closest(".card-wrapper")||!ye.shiftKey&&!ye.ctrlKey&&!ye.metaKey&&this._clearSelection())})}try{this._isInHaEditorPreview()||this._queueSave("config-change")}catch{}this._updateStoreBadge(),this.cardContainer&&this._toggleEditMode(!1),this.__cfgReady=!0,c&&this.__booted?this._initialLoad(!0):!this.__booted&&this.__probed?(this.__booted=!0,this._initialLoad()):(this._applyContainerSizingFromConfig(!0),(We=this._applyAutoScale)==null||We.call(this),this._resizeContainer())}_startInitialAutosize(){var t,n;try{if(this.__autoInitStarted)return;this.__autoInitStarted=!0;let o=!1,c=()=>{o||(o=!0,requestAnimationFrame(()=>{var y;o=!1;try{(y=this._applyAutoScale)==null||y.call(this)}catch{}}))};requestAnimationFrame(()=>{c(),requestAnimationFrame(c)}),setTimeout(c,0);try{(n=(t=document.fonts)==null?void 0:t.ready)==null||n.then(c)}catch{}let s=String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase(),d=this.cardContainer||this.querySelector("#cardContainer");if(!d)return;let u={childList:!0,subtree:!0,attributes:!0,attributeFilter:["style","class"]},f={childList:!0,subtree:!0},v=this.autoResizeCards||s==="auto",m=new MutationObserver(()=>c());m.observe(d,v?u:f),this.__autoInitMO=m,setTimeout(()=>{try{m.disconnect()}catch{}this.__autoInitMO=null},2e3)}catch{}}connectedCallback(){var t,n,o,c,s;try{this._installGridObservers_(),this._updateGridButtonsVisibility()}catch{}(t=this._startInitialAutosize)==null||t.call(this);try{(n=this._applyHaChromeVisibility_)==null||n.call(this),this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var u;return(u=this._applyAutoFillNoScale)==null?void 0:u.call(this)})});try{(o=this._ensureScreenSaverStyles)==null||o.call(this),(c=this._updateScreensaverSettings)==null||c.call(this)}catch{}}catch{this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var u;return(u=this._applyAutoFillNoScale)==null?void 0:u.call(this)})})}if(this.__keyHandlerBound||(this.__keyHandler=d=>this._onKeyDown_(d),window.addEventListener("keydown",this.__keyHandler),this.__keyHandlerBound=!0,this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var u;return(u=this._applyAutoFillNoScale)==null?void 0:u.call(this)})})),this.__boundExitEdit||(this.__boundExitEdit=()=>this._toggleEditMode(!1),this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var u;return(u=this._applyAutoFillNoScale)==null?void 0:u.call(this)})})),window.addEventListener("pagehide",this.__boundExitEdit),window.addEventListener("beforeunload",this.__boundExitEdit),this.__onVis=()=>{document.visibilityState==="hidden"&&this._toggleEditMode(!1),this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var u;return(u=this._applyAutoFillNoScale)==null?void 0:u.call(this)})})},document.addEventListener("visibilitychange",this.__onVis),this._toggleEditMode(!1),!this.__visObs){let d=new IntersectionObserver(u=>{u.some(f=>f.isIntersecting)&&(requestAnimationFrame(()=>this._applyAutoScale&&this._applyAutoScale()),d.observe(this),this.__visObs=d)});this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var f;return(f=this._applyAutoFillNoScale)==null?void 0:f.call(this)})})}this.__ddcOnWinResize=this.__ddcOnWinResize||(()=>{var d,u;if(this.hasAttribute("ddc-fixed-ui"))try{(d=this._computeHaSidebarGutters_)==null||d.call(this)}catch{}(u=this._applyAutoScale)==null||u.call(this)});try{let d=String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase();this.autoResizeCards||d==="auto"?window.addEventListener("resize",this.__ddcOnWinResize):window.removeEventListener("resize",this.__ddcOnWinResize)}catch{}try{(s=this.__ddcBindPointerListeners)==null||s.call(this),this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var u;return(u=this._applyAutoFillNoScale)==null?void 0:u.call(this)})})}catch{this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var u;return(u=this._applyAutoFillNoScale)==null?void 0:u.call(this)})})}this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var u;return(u=this._applyAutoFillNoScale)==null?void 0:u.call(this)})})}disconnectedCallback(){var t,n,o,c,s,d,u;try{this._uninstallGridObservers_()}catch{}try{(t=this._setHeaderVisible_)==null||t.call(this,!0),(n=this._setSidebarVisible_)==null||n.call(this,!0)}catch{}try{(o=this._applyHaChromeVisibility_)==null||o.call(this)}catch{}this.__keyHandlerBound&&this.__keyHandler&&(window.removeEventListener("keydown",this.__keyHandler),this.__keyHandlerBound=!1,this.__keyHandler=null),this.__keyHandlerBound||(this.__keyHandler=f=>this._onKeyDown_(f),window.addEventListener("keydown",this.__keyHandler),this.__keyHandlerBound=!0);try{(c=this._destroyParticles_)==null||c.call(this)}catch{}try{(s=this._destroyYouTube_)==null||s.call(this)}catch{}window.removeEventListener("pagehide",this.__boundExitEdit),window.removeEventListener("beforeunload",this.__boundExitEdit),document.removeEventListener("visibilitychange",this.__onVis);try{this._screensaverTimer&&(clearTimeout(this._screensaverTimer),this._screensaverTimer=null),this._clockInterval&&(clearInterval(this._clockInterval),this._clockInterval=null),this._screensaverActivityHandler&&(this._screensaverEvents||[]).forEach(v=>{document.removeEventListener(v,this._screensaverActivityHandler,!0)}),this.screenSaverOverlay&&this.screenSaverOverlay.parentNode&&this.screenSaverOverlay.parentNode.removeChild(this.screenSaverOverlay)}catch{}try{(d=this.__ddcResizeObs)==null||d.disconnect()}catch{}if(this.__ddcResizeObs=null,(u=this._stopScaleWatch)==null||u.call(this),this.__ddcOnWinResize&&(window.removeEventListener("resize",this.__ddcOnWinResize),this.__ddcOnWinResize=null),this.__lpInstalled&&this.__lpHandlers){let f=this.cardContainer;f==null||f.removeEventListener("mousedown",this.__lpHandlers.mouseDown),window.removeEventListener("mousemove",this.__lpHandlers.mouseMove),window.removeEventListener("mouseup",this.__lpHandlers.mouseUp),window.removeEventListener("contextmenu",this.__lpHandlers.contextMenu),f==null||f.removeEventListener("touchstart",this.__lpHandlers.touchStart),window.removeEventListener("touchmove",this.__lpHandlers.touchMove),window.removeEventListener("touchend",this.__lpHandlers.touchEnd),window.removeEventListener("touchcancel",this.__lpHandlers.touchCancel),this.__lpInstalled=!1,this.__lpHandlers=null}try{this.__visObs&&this.__visObs.disconnect()}catch{}this.__visObs=null,this.__ddcOnWinResize&&window.removeEventListener("resize",this.__ddcOnWinResize);try{this.__ddcPtrBound&&(this.removeEventListener("pointerdown",this.__onDDCPointerDown),this.removeEventListener("pointermove",this.__onDDCPointerMove),window.removeEventListener("pointerup",this.__onDDCPointerUp),window.removeEventListener("pointercancel",this.__onDDCPointerUp),this.__ddcPtrBound=!1)}catch{}}set hass(t){var o;this._hass=t,cc("set hass"),!this.__probed&&t&&(this.__probed=!0,this._probeBackend().then(()=>{this.__probed=!0,!this.__booted&&this.__cfgReady&&(this.__booted=!0,this._initialLoad(!0))}));let n=((o=this.cardContainer)==null?void 0:o.children)||[];for(let c of n){let s=c.firstElementChild;s&&s.hass!==t&&(s.hass=t)}try{this._applyVisibility_()}catch{}}get hass(){return this._hass}async _initialLoad(t=!1){var n,o,c,s,d,u,f,v,m,y,x,w,S,T,L,C,O,M,_;if(!this.__booting){this.__booting=!0;try{this._loading=!0,t&&this.cardContainer&&(this.cardContainer.innerHTML=""),this._dbgPush("boot","Initial load start",{force:t});let P=[],R=null;if(this._backendOK&&this.storageKey)try{R=await this._loadLayoutFromBackend(this.storageKey)}catch(F){this._dbgPush("boot","Backend load failed",{error:String(F)})}if(!R&&this.storageKey){let F=null;try{F=JSON.parse(localStorage.getItem(`ddc_local_${this.storageKey}`)||"null")}catch{}if(F)if(this._dbgPush("boot","Found local snapshot",{bytes:JSON.stringify(F).length}),this._backendOK)try{await this._saveLayoutToBackend(this.storageKey,F),this._dbgPush("boot","Migrated local -> backend"),R=F}catch(U){this._dbgPush("boot","Migration failed, staying local",{error:String(U)}),R=F}else R=F}!R&&((o=(n=this._config)==null?void 0:n.cards)!=null&&o.length)&&(this._dbgPush("boot","Using embedded config"),R={cards:this._config.cards});let q={...this._config||{}};if(R!=null&&R.options){let{storage_key:F,...U}=R.options;delete U.background_mode,delete U.background_image,delete U.background_particles,delete U.background_youtube,this._applyImportedOptions(U,!0)}else typeof(R==null?void 0:R.grid)=="number"&&this._applyImportedOptions({grid:R.grid},!0);let K=["storage_key","grid","drag_live_snap","auto_save","auto_save_debounce","container_background","card_background","card_shadow","debug","disable_overlap","container_size_mode","container_fixed_width","container_fixed_height","container_preset","container_preset_orientation","tabs","tabs_position","default_tab","hide_tabs_when_single","auto_resize_cards","background_mode","background_image","background_particles","background_youtube"],$={};for(let F of K)q[F]!==void 0&&($[F]=q[F]);Object.keys($).length&&this._applyImportedOptions($,!0);let re=!1;if((c=R==null?void 0:R.cards)!=null&&c.length){for(let F of R.cards){if(!(F!=null&&F.card)||typeof F.card=="object"&&Object.keys(F.card).length===0){let ce=this._makePlaceholderAt(((s=F.position)==null?void 0:s.x)||0,((d=F.position)==null?void 0:d.y)||0,((u=F.size)==null?void 0:u.width)||200,((f=F.size)==null?void 0:f.height)||200);this.cardContainer.appendChild(ce);try{this._rebuildOnce(ce.firstElementChild)}catch{}re=!0;continue}let U=await this._createCard(F.card),V=this._makeWrapper(U);this.editMode&&V.classList.add("editing"),V.dataset.tabId=this._normalizeTabId(F.tabId||F.tab_id||this.defaultTab),this._setCardPosition(V,((v=F.position)==null?void 0:v.x)||0,((m=F.position)==null?void 0:m.y)||0),V.style.width=`${(x=(y=F.size)==null?void 0:y.width)!=null?x:14*this.gridSize}px`,V.style.height=`${(S=(w=F.size)==null?void 0:w.height)!=null?S:10*this.gridSize}px`,F.z!=null&&(V.style.zIndex=String(F.z)),this.cardContainer.appendChild(V);try{this._rebuildOnce(V.firstElementChild)}catch{}this._initCardInteract(V),re=!0}this._resizeContainer(),(T=this._applyAutoScale)==null||T.call(this),this._dbgPush("boot","Layout applied",{count:R.cards.length})}re||(this._showEmptyPlaceholder(),(L=this._applyAutoScale)==null||L.call(this),this._dbgPush("boot","No saved layout found; showing placeholder")),this._updateStoreBadge(),this._syncEmptyStateUI(),t&&(this._cardModProcessed=!1),setTimeout(()=>{this._processCardModOnce()},100);try{P.forEach(F=>{try{F.dispatchEvent(new Event("ll-rebuild",{bubbles:!0,composed:!0}))}catch{}})}catch{}}finally{this._loading=!1,this.__booting=!1,this.__dirty=!1,(C=this._updateApplyBtn)==null||C.call(this);try{this._renderTabs(),this._applyActiveTab()}catch{}try{this._applyVisibility_()}catch{}try{let P=(M=(O=this.cardContainer)==null?void 0:O.querySelector)==null?void 0:M.call(O,"#ddcBgHost");(!P||!P.firstChild)&&((_=this._applyBackgroundFromConfig)==null||_.call(this))}catch{}}}}_normalizeTabId(t){let n=Array.isArray(this.tabs)?this.tabs.map(o=>o.id):[];return n.length?t&&n.includes(t)?t:this.defaultTab||n[0]:this.defaultTab||"default"}_renderTabs(){var o,c,s,d;let t=this.tabsBar;if(!t)return;let n=Array.isArray(this.tabs)?this.tabs:[];if(!n.length||n.length===1&&this.hideTabsWhenSingle){t.style.display="none";return}t.style.display="",t.className="ddc-tabs "+(this.tabsPosition==="left"?"ddc-tabs-left":""),t.innerHTML="";try{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&(t.style.width="100%",t.style.maxWidth="100%")}catch{}for(let u of n){let f=document.createElement("button");f.className="ddc-tab"+(u.id===this.activeTab?" active":""),f.dataset.tabId=u.id,f.title=u.label||u.id,f.innerHTML=`${u.icon?`<ha-icon icon="${u.icon}"></ha-icon>`:""}<span class="ddc-tab-label">${(o=u.label)!=null?o:u.id}</span>`,f.addEventListener("click",()=>{var v,m,y;if(this.activeTab!==u.id){this.activeTab=u.id;try{localStorage.setItem(`ddc_lasttab_${this.storageKey}`,u.id)}catch{}this._applyActiveTab(),this._renderTabs();try{this._applyVisibility_()}catch{}try{let x=(m=(v=this.cardContainer)==null?void 0:v.querySelector)==null?void 0:m.call(v,"#ddcBgHost");(!x||!x.firstChild)&&((y=this._applyBackgroundFromConfig)==null||y.call(this))}catch{}}}),t.appendChild(f)}this.rootEl&&this.rootEl.classList.toggle("ddc-tabs-left-layout",this.tabsPosition==="left");try{(c=this._updateTabsA11y_)==null||c.call(this)}catch{}try{(s=this._syncTabsWidth_)==null||s.call(this)}catch{}try{let u=(d=t.querySelector)==null?void 0:d.call(t,".ddc-tab.active");u&&t.scrollWidth>t.clientWidth&&u.scrollIntoView({behavior:"auto",block:"nearest",inline:"nearest"})}catch{}}_applyActiveTab(){var o,c,s,d,u;let t=this._normalizeTabId(this.activeTab);(((c=(o=this.cardContainer)==null?void 0:o.querySelectorAll)==null?void 0:c.call(o,".card-wrapper"))||[]).forEach(f=>{let v=f.dataset.tabId?this._normalizeTabId(f.dataset.tabId):this.defaultTab;if(!this.tabs||!this.tabs.length){f.style.display="",f.inert=!1,f.classList.remove("ddc-hidden");return}v===t?(f.style.display="",f.inert=!1,f.classList.remove("ddc-hidden")):(f.style.display="none",f.inert=!0,f.classList.add("ddc-hidden"),f.classList.remove("ddc-selected"))});try{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(s=this._applyAutoFillNoScale)==null||s.call(this):(d=this._applyAutoScale)==null||d.call(this)}catch{}try{this._clearSelection()}catch{}try{this.animateCards&&((u=this._animateCards)==null||u.call(this))}catch{}}_animateCards(){var t,n,o,c;try{let s=((n=(t=this.cardContainer)==null?void 0:t.querySelectorAll)==null?void 0:n.call(t,".card-wrapper"))||[],d=(c=(o=window.matchMedia)==null?void 0:o.call(window,"(prefers-reduced-motion: reduce)"))==null?void 0:c.matches,u=800,f=.8,m=u*.3,y=u-m;s.forEach(x=>{var _,P,R;let w=(_=window.getComputedStyle)==null?void 0:_.call(window,x);if(x.style.display==="none"||w&&w.display==="none"||x.classList.contains("ddc-hidden"))return;let T=w&&w.transform&&w.transform!=="none"?w.transform:"",L=100*f,C=`${T} translate3d(0, ${L}%, 0)`,O=`${T} translate3d(0, 0, 0)`,M=Math.random()*(y*Math.min(f,2));if(d){try{x.animate([{opacity:0},{opacity:1}],{duration:u*.15,delay:M,easing:"linear",fill:"backwards"})}catch{x.style.opacity="0",setTimeout(()=>{x.style.transition=`opacity ${u*.15}ms linear`,x.style.opacity="1"},M)}return}try{x.style.willChange="opacity, transform";let q="cubic-bezier(0.4, 0, 0.2, 1)";x.animate([{opacity:0},{opacity:1}],{duration:m,delay:M,easing:"linear",fill:"backwards"}),(R=(P=x.animate([{transform:C},{transform:O}],{duration:m,delay:M,easing:q,fill:"backwards"})).addEventListener)==null||R.call(P,"finish",()=>{x.style.willChange=""})}catch{x.style.opacity="0",x.style.transform=C,x.style.willChange="opacity, transform",setTimeout(()=>{x.style.transition=`opacity ${m}ms linear, transform ${m}ms cubic-bezier(0.4,0,0.2,1)`,x.style.opacity="1",x.style.transform=O,setTimeout(()=>{x.style.transition="",x.style.willChange=""},m+60)},M)}})}catch(s){console.warn("[ddc:animate] animation error",s)}}_addTabSelectorToChip(t,n=null){if(!this.tabs||!this.tabs.length)return;let o=t.querySelector(".chip");if(!o)return;let c=o.querySelector("select.ddc-chip-tab");c||(c=document.createElement("select"),c.className="ddc-chip-tab",c.style.marginLeft="6px",c.title="Assign to tab",o.appendChild(c)),c.innerHTML="";for(let d of this.tabs){let u=document.createElement("option");u.value=d.id,u.textContent=d.label||d.id,c.appendChild(u)}let s=this._normalizeTabId(n||t.dataset.tabId||this.activeTab||this.defaultTab);c.value=s,t.dataset.tabId=s,c.onchange=()=>{var d,u,f;t.dataset.tabId=this._normalizeTabId(c.value),this._applyActiveTab();try{this._applyVisibility_()}catch{}try{let v=(u=(d=this.cardContainer)==null?void 0:d.querySelector)==null?void 0:u.call(d,"#ddcBgHost");(!v||!v.firstChild)&&((f=this._applyBackgroundFromConfig)==null||f.call(this))}catch{}try{this._queueSave("tab-change")}catch{}}}_toggleEditMode(t=null){var x,w,S,T,L,C,O,M,_,P,R,q,K,$,re,F,U;try{(x=this.__clearPressTimer)==null||x.call(this)}catch{}let n=t===null?!this.editMode:!!t,o=!this.editMode&&n;try{let V=this.config&&this.config.edit_mode_pin!=null?String(this.config.edit_mode_pin):"",We=((this.editModePin!=null?String(this.editModePin):"")||V).trim();if(n&&!this.editMode&&We){let ye=window.prompt("Enter PIN / password to open Edit Mode:");if(ye===null)return;if(String(ye).trim()!==We){(w=this._toast)==null||w.call(this,"Incorrect PIN/password.");return}}}catch{}let c=this.renderRoot||this.shadowRoot||this,s=(S=c==null?void 0:c.querySelector)==null?void 0:S.call(c,".ddc-toolbar.streamlined.v2, .ddc-toolbar.streamlined.v3"),d=(V,ce)=>{try{V&&(V.style.display=ce)}catch{}},u="inline-block",f="none",v=()=>{d(this.addButton,u),d(this.reloadBtn,u),d(this.diagBtn,u),d(this.exitEditBtn,u),d(this.exportBtn,u),d(this.importBtn,u),d(this.exploreBtn,u),d(this.storeBadge,u),d(this.applyLayoutBtn,u),d(this.copyBtn,u),d(this.pasteBtn,u),d(this.settingsBtn,u)},m=()=>{d(this.addButton,f),d(this.reloadBtn,f),d(this.diagBtn,f),d(this.exitEditBtn,f),d(this.exportBtn,f),d(this.importBtn,f),d(this.exploreBtn,f),d(this.storeBadge,f),d(this.applyLayoutBtn,f),d(this.copyBtn,f),d(this.pasteBtn,f),d(this.settingsBtn,f)};if(s)if(n)s.setAttribute("data-force-open","1"),s.style.display="grid",v(),requestAnimationFrame(()=>{let ce=s.scrollHeight||0;s.style.setProperty("--open-h",ce+"px"),s.classList.add("is-open")});else{s.setAttribute("data-force-open","1"),s.style.display="grid";let ce=s.scrollHeight||0;s.style.setProperty("--open-h",ce+"px"),requestAnimationFrame(()=>{s.classList.remove("is-open")}),setTimeout(()=>{m(),s.removeAttribute("data-force-open")},260)}else n?v():m();this.editMode=n,(T=this._syncEmptyStateUI)==null||T.call(this),(L=this.cardContainer)==null||L.classList.toggle("grid-on",this.editMode);try{typeof this._resetScreensaverTimer=="function"&&this._resetScreensaverTimer()}catch{}if((((O=(C=this.cardContainer)==null?void 0:C.querySelectorAll)==null?void 0:O.call(C,".card-wrapper"))||[]).forEach(V=>{V.classList.toggle("editing",this.editMode);let ce=V.querySelector(".resize-handle");ce&&(ce.style.display=this.editMode?"flex":"none"),!V.dataset.placeholder&&window.interact&&window.interact(V).draggable(this.editMode).resizable(this.editMode),V.style.touchAction=this.editMode?"none":"auto"}),this.editMode||(M=this._clearSelection)==null||M.call(this),this.editMode||(_=this.cardContainer)==null||_.querySelectorAll(".card-wrapper.dragging").forEach(V=>V.classList.remove("dragging")),o){let V=(P=this.__lastHoldX)!=null?P:null,ce=(R=this.__lastHoldY)!=null?R:null;(q=this._playEditRipple)==null||q.call(this,V,ce)}try{(K=this._applyHaChromeVisibility_)==null||K.call(this)}catch{}try{let V=((re=($=this.shadowRoot)==null?void 0:$.querySelector)==null?void 0:re.call($,".ddc-root"))||((U=(F=this.renderRoot)==null?void 0:F.querySelector)==null?void 0:U.call(F,".ddc-root"))||null;if(V){let ce=0;if(n&&s)try{ce=s.scrollHeight||s.offsetHeight||0}catch{}V.style.setProperty("--ddc-toolbar-height",ce+"px"),!this.autoResizeCards&&this.cardContainer&&(n&&s?this.cardContainer.style.marginTop=ce+"px":this.cardContainer.style.marginTop="")}}catch{}try{typeof this._resizeContainer=="function"&&this._resizeContainer(),typeof this._applyAutoScale=="function"&&this._applyAutoScale()}catch{}}_isInHaEditorPreview(){let t=this;for(;t;){let n=t.nodeType===1&&t.localName?t.localName.toLowerCase():"";if(n==="hui-card-editor"||n==="hui-dialog-edit-card"||n==="hui-card-preview"||n==="ha-dialog"||n==="mwc-dialog")return!0;let o=t.getRootNode&&t.getRootNode();t=t.parentElement||o&&o.host||null}return!1}_installLongPressToEnterEdit(){if(this.__lpInstalled)return;this.__lpInstalled=!0;let t=this.cardContainer;if(!t)return;let n=800,o=18,c=_=>!!_&&typeof _=="object"&&_.nodeType===1,s=(_,P)=>{try{return!!(_&&P&&typeof _.contains=="function"&&c(P)&&_.contains(P))}catch{return!1}},d=_=>s(this.cardContainer,_),u=_=>{var q,K,$;let P=(K=(q=_.target)==null?void 0:q.closest)==null?void 0:K.call(q,".card-wrapper");if(c(P)&&d(P)&&!P.classList.contains("ddc-placeholder"))return!0;let R=typeof _.composedPath=="function"?_.composedPath():[];for(let re of R)if(c(re)&&d(re)&&($=re.classList)!=null&&$.contains("card-wrapper")&&!re.classList.contains("ddc-placeholder"))return!0;return!1},f=(_,P)=>{let R=document.createElement("div");R.className="ddc-press-ring",document.body.appendChild(R),Object.assign(R.style,{position:"fixed",left:`${_}px`,top:`${P}px`,zIndex:"100000",width:"44px",height:"44px",pointerEvents:"none",marginLeft:"-22px",marginTop:"-22px",filter:"drop-shadow(0 2px 6px rgba(0,0,0,.35))"}),R.innerHTML=`
      <svg viewBox="0 0 44 44" aria-hidden="true" style="width:44px;height:44px">
        <circle cx="22" cy="22" r="18" style="stroke:rgba(255,255,255,.45);stroke-width:4;fill:none"></circle>
        <circle class="pr-fg" cx="22" cy="22" r="18" style="stroke:var(--primary-color);stroke-width:4;fill:none;stroke-linecap:round"></circle>
        <circle cx="22" cy="22" r="2" style="fill:var(--primary-color);opacity:.95"></circle>
      </svg>`;let q=R.querySelector(".pr-fg"),K=18,$=2*Math.PI*K;return q.style.strokeDasharray=`${$}`,q.style.strokeDashoffset=`${$}`,requestAnimationFrame(()=>{q.style.transition=`stroke-dashoffset ${n}ms linear`,q.style.strokeDashoffset="0"}),{el:R,move(re,F){R.style.left=`${re}px`,R.style.top=`${F}px`},remove(){try{R.remove()}catch{}}}},v=null,m=null,y=0,x=0,w=null,S=()=>{v&&clearTimeout(v),v=null,m==null||m.remove(),m=null};this.__clearPressTimer=S;let T=_=>{_.pointerType==="mouse"&&_.button!==0||this._isInHaEditorPreview()||!d(_.target)||u(_)||(w=_.pointerId,y=_.clientX,x=_.clientY,this.__lastHoldX=y,this.__lastHoldY=x,m=f(y,x),v=setTimeout(()=>{var R;S();let P=!this.editMode;this._toggleEditMode(P),(R=this._toast)==null||R.call(this,`Edit mode ${P?"enabled":"disabled"}`)},n))},L=_=>{v==null||_.pointerId!==w||(m==null||m.move(_.clientX,_.clientY),(Math.abs(_.clientX-y)>o||Math.abs(_.clientY-x)>o)&&S())},C=_=>{_.pointerId===w&&(S(),w=null)},O=_=>{if(v)return _.preventDefault(),_.stopPropagation(),!1},M=_=>{var R;if(this._isInHaEditorPreview()||!d(_.target)||u(_))return;let P=!this.editMode;this._toggleEditMode(P),(R=this._toast)==null||R.call(this,`Edit mode ${P?"enabled":"disabled"}`)};t.addEventListener("pointerdown",T),window.addEventListener("pointermove",L,{passive:!0}),window.addEventListener("pointerup",C,{passive:!0}),window.addEventListener("pointercancel",C,{passive:!0}),window.addEventListener("contextmenu",O),t.addEventListener("dblclick",M),this.__lpHandlers={onPointerDown:T,onPointerMove:L,onPointerUpOrCancel:C,onContextMenu:O,onDblClick:M}}_isLayoutEmpty(){let t=this.cardContainer;return t?t.querySelectorAll(".card-wrapper:not(.ddc-placeholder)").length===0:!0}_syncEmptyStateUI(){let t=this._isLayoutEmpty();if(this.addButton){let o=this.editMode||t;this.addButton.style.display=o?"inline-block":"none",this.addButton.classList.toggle("cta-empty",!this.editMode&&t)}let n=o=>o&&(o.style.display=this.editMode?"inline-block":"none");n(this.reloadBtn),n(this.diagBtn),n(this.exitEditBtn),n(this.exportBtn),n(this.importBtn),n(this.exploreBtn),n(this.storeBadge),n(this.applyLayoutBtn)}_updateApplyBtn(){this.applyLayoutBtn&&(this.applyLayoutBtn.disabled=!this.__dirty)}_markDirty(t=""){var n;this.__dirty=!0,this._updateApplyBtn(),(n=this._dbgPush)==null||n.call(this,"dirty","Marked dirty",{reason:t})}_playEditRipple(t=null,n=null){let o=this.cardContainer;if(!o)return;let c=o.getBoundingClientRect(),s=t==null?c.left+c.width/2:t,d=n==null?c.top+c.height/2:n,u=s-c.left,f=d-c.top,v=document.createElement("div");v.className="ddc-ripple-veil",v.style.setProperty("--rip-x",`${u}px`),v.style.setProperty("--rip-y",`${f}px`),o.appendChild(v),setTimeout(()=>v.remove(),450)}_initInteract(){this.cardContainer.querySelectorAll(".card-wrapper").forEach(n=>this._initCardInteract(n))}_initCardInteract(t){if(!window.interact||t.dataset.placeholder)return;let n=this.gridSize,o=!!this.dragLiveSnap,s=[window.interact.modifiers.restrictRect({restriction:"parent",endOnly:!0})],d=this.__pointerScaleX&&Math.abs(this.__pointerScaleX-1)>1e-6||this.__pointerScaleY&&Math.abs(this.__pointerScaleY-1)>1e-6;if(this.dragLiveSnap&&!d){let u=window.interact.snappers.grid({x:this.gridSize,y:this.gridSize});s.push(window.interact.modifiers.snap({targets:[u],range:1/0,offset:"startCoords"}))}window.interact(t).draggable({enabled:this.editMode,inertia:!1,modifiers:s,listeners:{start:u=>{this._selection.has(t)||(!(u!=null&&u.shiftKey)&&!(u!=null&&u.ctrlKey)&&!(u!=null&&u.metaKey)&&this._clearSelection(),this._toggleSelection(t,!0));let f=Array.from(this._selection);this.__groupDrag={leader:t,members:f,startRaw:new Map(f.map(m=>[m,{x:parseFloat(m.getAttribute("data-x-raw"))||parseFloat(m.getAttribute("data-x"))||0,y:parseFloat(m.getAttribute("data-y-raw"))||parseFloat(m.getAttribute("data-y"))||0,w:parseFloat(m.style.width)||m.getBoundingClientRect().width,h:parseFloat(m.style.height)||m.getBoundingClientRect().height}]))},this.__collisionOriginals=new Map,this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)").forEach(m=>{let y=parseFloat(m.getAttribute("data-x-raw"))||parseFloat(m.getAttribute("data-x"))||0,x=parseFloat(m.getAttribute("data-y-raw"))||parseFloat(m.getAttribute("data-y"))||0;this.__collisionOriginals.set(m,{x:y,y:x})}),f.forEach(m=>{m.classList.add("dragging"),m.getAttribute("data-x-raw")===null&&m.setAttribute("data-x-raw",m.getAttribute("data-x")||"0"),m.getAttribute("data-y-raw")===null&&m.setAttribute("data-y-raw",m.getAttribute("data-y")||"0")})},move:u=>{if(!this.__groupDrag)return;let f=this.gridSize,v=!!this.dragLiveSnap,m=this.__groupDrag.leader,y=this.__groupDrag.startRaw.get(m),x=this.__pointerScaleX||1,w=this.__pointerScaleY||1,S=(parseFloat(m.getAttribute("data-x-raw"))||y.x)+u.dx/x,T=(parseFloat(m.getAttribute("data-y-raw"))||y.y)+u.dy/w,L=S-y.x,C=T-y.y,O=this.__groupDrag.members.map(M=>{let _=this.__groupDrag.startRaw.get(M),P=_.x+L,R=_.y+C,q=v?Math.round(P/f)*f:P,K=v?Math.round(R/f)*f:R;return{el:M,rawX:P,rawY:R,snapX:q,snapY:K,w:_.w,h:_.h}});this.disableOverlap&&this._pushCardsOutOfTheWay(O,L,C,v,f),m.setAttribute("data-x-raw",String(S)),m.setAttribute("data-y-raw",String(T));for(let M of O)M.el.setAttribute("data-x-raw",String(M.rawX)),M.el.setAttribute("data-y-raw",String(M.rawY)),this._setCardPosition(M.el,M.snapX,M.snapY);this._resizeContainer()},end:u=>{if(!this.__groupDrag)return;let f=this.gridSize,v=this.__groupDrag.members.map(m=>{let y=parseFloat(m.getAttribute("data-x-raw"))||parseFloat(m.getAttribute("data-x"))||0,x=parseFloat(m.getAttribute("data-y-raw"))||parseFloat(m.getAttribute("data-y"))||0,w=Math.round(y/f)*f,S=Math.round(x/f)*f,T=parseFloat(m.style.width)||m.getBoundingClientRect().width,L=parseFloat(m.style.height)||m.getBoundingClientRect().height;return{el:m,rawX:y,rawY:x,snapX:w,snapY:S,w:T,h:L}});this.disableOverlap&&this._pushCardsOutOfTheWay(v,0,0,!1,f);for(let m of v)this._setCardPosition(m.el,m.snapX,m.snapY),m.el.setAttribute("data-x-raw",String(m.snapX)),m.el.setAttribute("data-y-raw",String(m.snapY));for(let m of this.__groupDrag.members)m.classList.remove("dragging");this._resizeContainer(),this._isContainerFixed()&&this._clampAllCardsInside(),this._queueSave(this.__groupDrag.members.length>1?"group-drag-end":"drag-end"),this.__groupDrag=null,this.__collisionOriginals=null}}}),window.interact(t).resizable({enabled:this.editMode,edges:{right:".resize-handle",bottom:".resize-handle"},inertia:!1,listeners:{move:u=>{let f=this.gridSize,v=!!this.dragLiveSnap,m=parseFloat(t.style.width)||t.getBoundingClientRect().width,y=parseFloat(t.style.height)||t.getBoundingClientRect().height,x=this.__pointerScaleX||1,w=this.__pointerScaleY||1,S=u.rect.width/x,T=u.rect.height/w,L=v?Math.max(f,Math.round(S/f)*f):S,C=v?Math.max(f,Math.round(T/f)*f):T,O=parseFloat(t.getAttribute("data-x"))||0,M=parseFloat(t.getAttribute("data-y"))||0,_=L,P=C;if(this._isContainerFixed()){let{w:q,h:K}=this._getContainerSize();_=Math.min(L,Math.max(this.gridSize,q-O)),P=Math.min(C,Math.max(this.gridSize,K-M))}let R=[this._rectFor(t,O,M,_,P)];this.disableOverlap&&this._anyCollisionFor(R,new Set([t]))||(t.style.width=`${_}px`,t.style.height=`${P}px`,this._resizeContainer())},end:()=>{let u=this.gridSize,f=parseFloat(t.style.width)||t.getBoundingClientRect().width,v=parseFloat(t.style.height)||t.getBoundingClientRect().height,m=Math.max(u,Math.round(f/u)*u),y=Math.max(u,Math.round(v/u)*u),x=parseFloat(t.getAttribute("data-x"))||0,w=parseFloat(t.getAttribute("data-y"))||0;if(this._isContainerFixed()){let{w:T,h:L}=this._getContainerSize();m=Math.min(m,Math.max(u,T-x)),y=Math.min(y,Math.max(u,L-w))}let S=[this._rectFor(t,x,w,m,y)];this.disableOverlap&&this._anyCollisionFor(S,new Set([t]))||(t.style.width=`${m}px`,t.style.height=`${y}px`),this._resizeContainer(),this._isContainerFixed()&&this._clampAllCardsInside(),this._queueSave("resize-end")}}}),t.addEventListener("mousedown",u=>{this.editMode&&(u.target.closest(".resize-handle")||u.target.closest(".delete-handle")||u.target.closest(".chip")||(u.shiftKey||u.ctrlKey||u.metaKey?(u.stopPropagation(),this._toggleSelection(t)):this._selection.has(t)||(this._clearSelection(),this._toggleSelection(t,!0))))})}async _createCard(t){let o=(await this._helpersPromise||await window.loadCardHelpers()).createCardElement(t);if(o.hass=this.hass,t.type==="custom:mod-card"&&(await new Promise(c=>setTimeout(c,0)),o.setConfig&&typeof o.setConfig=="function"))try{o.setConfig(t)}catch{}return o}_makeWrapper(t){let n=document.createElement("div");if(n.classList.add("card-wrapper"),n.dataset.tabId=this._normalizeTabId(this.activeTab||this.defaultTab),this.editMode&&n.classList.add("editing"),!n.style.zIndex){let u=this._highestZ()+1;n.style.zIndex=String(Math.max(u,6))}let o=document.createElement("div");o.className="chip",o.innerHTML=`
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
    `;let c=document.createElement("div");c.className="delete-handle",c.innerHTML='<ha-icon icon="mdi:close-thick"></ha-icon>',c.addEventListener("click",u=>{var f,v;u.stopPropagation(),this._selection.size>1&&this._selection.has(n)?(Array.from(this._selection).forEach(y=>y.remove()),this._clearSelection(),this._resizeContainer(),this._queueSave("delete-multi"),(f=this._ensurePlaceholderIfEmpty)==null||f.call(this)):(n.remove(),this._resizeContainer(),this._queueSave("delete"),(v=this._ensurePlaceholderIfEmpty)==null||v.call(this))});try{this._addTabSelectorToChip(n,n.dataset.tabId)}catch{}o.addEventListener("click",async u=>{var v,m,y,x,w;u.stopPropagation();let f=(y=(m=(v=u.target)==null?void 0:v.closest("button"))==null?void 0:m.dataset)==null?void 0:y.act;if(f){if(f==="delete")this._selection.size>1&&this._selection.has(n)?(Array.from(this._selection).forEach(T=>T.remove()),this._clearSelection(),this._resizeContainer(),this._queueSave("delete-multi"),this._ensurePlaceholderIfEmpty()):(n.remove(),this._resizeContainer(),this._queueSave("delete"),this._ensurePlaceholderIfEmpty());else if(f==="duplicate"||f==="copy"){let S=this._selection.size>1&&this._selection.has(n)?Array.from(this._selection):[n];for(let T of S){let L=this._extractCardConfig(T.firstElementChild)||{},C=await this._createCard(L),O=this._makeWrapper(C);O.style.width=T.style.width,O.style.height=T.style.height;let M=(parseFloat(T.getAttribute("data-x"))||0)+this.gridSize,_=(parseFloat(T.getAttribute("data-y"))||0)+this.gridSize;this._setCardPosition(O,M,_);{let P=this._highestZ()+1;O.style.zIndex=String(Math.max(P,6))}try{let P=(x=T.dataset)==null?void 0:x.tabId;P&&(O.dataset.tabId=P)}catch{}this.cardContainer.appendChild(O);try{(w=this._addTabSelectorToChip)==null||w.call(this,O,O.dataset.tabId)}catch{}try{this._rebuildOnce(O.firstElementChild)}catch{}this._initCardInteract(O)}this._resizeContainer(),this._queueSave("duplicate")}else if(f==="front")this._adjustZ(n,1);else if(f==="back")this._adjustZ(n,-1);else if(f==="front-most"){let S=this._selection.size>1&&this._selection.has(n)?Array.from(this._selection):[n];S.sort((L,C)=>{let O=parseInt(L.style.zIndex||"1",10),M=parseInt(C.style.zIndex||"1",10);return O-M});let T=this._highestZ();for(let L of S)T+=1,L.style.zIndex=String(T);this._queueSave("z-change")}else if(f==="back-most"){let S=this._selection.size>1&&this._selection.has(n)?Array.from(this._selection):[n];S.sort((C,O)=>{let M=parseInt(C.style.zIndex||"1",10);return parseInt(O.style.zIndex||"1",10)-M});let T=1/0;this.cardContainer.querySelectorAll(".card-wrapper").forEach(C=>{let O=parseInt(C.style.zIndex||"1",10);O<T&&(T=O)}),isFinite(T)||(T=1);let L=T;for(let C of S)L-=1,C.style.zIndex=String(Math.max(6,L));this._queueSave("z-change")}else if(f==="edit"){let S=this._extractCardConfig(n.firstElementChild)||{};await this._openSmartPicker("edit",S,async T=>{var O,M,_;let L=n.firstElementChild,C=await this._createCard(T);try{n.dataset.cfg=JSON.stringify(T),(O=this._hasCardModDeep)!=null&&O.call(this,T)?n.dataset.needsCardMod="true":delete n.dataset.needsCardMod}catch{}n.replaceChild(C,L),await Mr();try{if(C.hass=this.hass,(M=C.requestUpdate)==null||M.call(C),C.updateComplete)try{await C.updateComplete}catch{}}catch{}try{this._rebuildOnce(C)}catch{}try{C.dispatchEvent(new Event("ll-rebuild",{bubbles:!0,composed:!0}))}catch{}(_=this._resizeContainer)==null||_.call(this);try{clearTimeout(this._saveTimer),await this._saveLayout(!0)}catch(P){console.warn("Save before reload failed",P)}window.location.reload()})}}});let s=document.createElement("div");s.className="shield";let d=document.createElement("div");d.classList.add("resize-handle"),this.editMode||(d.style.display="none"),d.title="Resize",d.innerHTML='<ha-icon icon="mdi:resize-bottom-right"></ha-icon>';try{let u=t._config||t.config;u&&typeof u=="object"&&Object.keys(u).length&&(n.dataset.cfg=JSON.stringify(u),this._hasCardModDeep(u)&&(n.dataset.needsCardMod="true"))}catch{}n.append(t,s,o,c,d);try{this._rebuildOnce(t)}catch{}return n}_makePlaceholderAt(t=0,n=0,o=400,c=400){let s=document.createElement("div");s.classList.add("card-wrapper","ddc-placeholder"),s.dataset.placeholder="1",this.editMode&&s.classList.add("editing"),this._setCardPosition(s,t,n),s.style.width=`${o}px`,s.style.height=`${c}px`,s.style.zIndex=String(this._highestZ()+1);let d=document.createElement("div");d.className="ddc-placeholder-inner",d.setAttribute("aria-hidden","true");let u=document.createElement("div");u.className="ddc-hero";let f=this.heroImage;if(f){let x=document.createElement("img");x.src=f,x.alt="",u.appendChild(x)}let v=document.createElement("div");v.className="ddc-title",v.textContent="Drag & Drop Card";let m=document.createElement("div");m.className="ddc-sub",m.textContent="Hold me / double click me to enter Edit mode",u.append(v,m),d.appendChild(u),s.addEventListener("dblclick",x=>{x.stopPropagation(),this._toggleEditMode(!0)});let y=document.createElement("div");return y.className="shield",s.append(d,y),s}_processCardModOnce(){var n;if(this._cardModProcessed)return;this._cardModProcessed=!0,(((n=this.cardContainer)==null?void 0:n.querySelectorAll('[data-needs-card-mod="true"]'))||[]).forEach(o=>{let c=o.firstElementChild;if(!c)return;let s=c._config||c.config;if(s){if(s.type==="custom:mod-card")setTimeout(()=>{if(c.updateComplete)c.updateComplete.then(()=>{c.requestUpdate()});else if(c.setConfig)try{c.setConfig({...s})}catch{}},100);else if(s.card_mod&&c.setConfig)try{c.setConfig({...s})}catch{}}})}_showEmptyPlaceholder(){var c,s,d;if(this.cardContainer.querySelector(".ddc-placeholder"))return;let t=200,n=200,o=this._makePlaceholderAt(0,0,t,n);this.cardContainer.appendChild(o),this._resizeContainer();try{let u=(c=this.getBoundingClientRect)==null?void 0:c.call(this),f=(d=(s=this.cardContainer)==null?void 0:s.getBoundingClientRect)==null?void 0:d.call(s);if(u&&f){let v=(u.width-t)/2,m=(u.height-n)/2,y=v-(f.left-u.left),x=m-(f.top-u.top);(!Number.isFinite(y)||y<0)&&(y=0),(!Number.isFinite(x)||x<0)&&(x=0),this._setCardPosition(o,y,x)}}catch{}this._syncEmptyStateUI()}_hideEmptyPlaceholder(){this.cardContainer.querySelectorAll(".ddc-placeholder").forEach(t=>t.remove())}_ensurePlaceholderIfEmpty(){var n;this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)").length===0&&this._showEmptyPlaceholder(),(n=this._applyAutoScale)==null||n.call(this),this._syncEmptyStateUI()}_adjustZ(t,n){let c=parseInt(t.style.zIndex||"1",10)+n;c=Math.max(1,Math.min(9999,c)),t.style.zIndex=String(c),this._queueSave("z-change")}_highestZ(){let t=5;return this.cardContainer.querySelectorAll(".card-wrapper").forEach(n=>{let o=parseInt(n.style.zIndex||"0",10);o>t&&(t=o)}),t}_setCardPosition(t,n,o){let c=Math.round(n),s=Math.round(o);t.style.transform=`translate3d(${c}px, ${s}px, 0)`,t.setAttribute("data-x",String(c)),t.setAttribute("data-y",String(s))}_computeDesignSize(){let t=this.cardContainer;if(!t)return{w:1,h:1};if(this._isContainerFixed()){let{w:d,h:u}=this._resolveFixedSize();return{w:Math.max(1,d),h:Math.max(1,u)}}let n=0,o=0,c=Array.from(t.querySelectorAll(".card-wrapper"));if(!c.length){let d=t.getBoundingClientRect();return{w:Math.max(1,d.width||1),h:Math.max(1,d.height||1)}}for(let d of c){let u=parseFloat(d.getAttribute("data-x-raw")||d.getAttribute("data-x")||"0")||0,f=parseFloat(d.getAttribute("data-y-raw")||d.getAttribute("data-y")||"0")||0,v=parseFloat(d.style.width)||d.getBoundingClientRect().width||0,m=parseFloat(d.style.height)||d.getBoundingClientRect().height||0,y=u+v,x=f+m;y>n&&(n=y),x>o&&(o=x)}let s=Math.max(1,this.gridSize||10);return n=Math.ceil(n/s)*s,o=Math.ceil(o/s)*s,{w:Math.max(1,n),h:Math.max(1,o)}}_startScaleWatch(){if(!this.autoResizeCards||this.__scaleRAF)return;let t=()=>{var c,s;if(!this.autoResizeCards){this.__scaleRAF=null;return}let n=this.getBoundingClientRect(),o=Math.max(1,n.width||0);o!==this.__lastScaleW&&(this.__lastScaleW=o,String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(c=this._applyAutoFillNoScale)==null||c.call(this):(s=this._applyAutoScale)==null||s.call(this)),this.__scaleRAF=requestAnimationFrame(t)};this.__scaleRAF=requestAnimationFrame(t)}_stopScaleWatch(){if(this.__scaleRAF){try{cancelAnimationFrame(this.__scaleRAF)}catch{}this.__scaleRAF=null}}_applyAutoScale(){var u,f,v,m,y,x,w,S,T,L,C,O,M,_,P,R,q,K,$,re,F,U;let t="dynamic";try{if(t=String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase(),t==="auto"){(u=this._applyAutoFillNoScale)==null||u.call(this),this.removeAttribute("ddc-fixed-ui"),(v=(f=this.style)==null?void 0:f.removeProperty)==null||v.call(f,"--ddc-ui-width");return}}catch{}let n=this.cardContainer;if(!n)return;try{(this.autoResizeCards||t==="auto")&&typeof this._ensureScaleWrapper=="function"&&this._ensureScaleWrapper()}catch{}if(!this.autoResizeCards){let V=typeof this._computeDesignSize=="function"?this._computeDesignSize():{w:n.offsetWidth||1,h:n.offsetHeight||1};if(t==="dynamic"){try{(m=this._computeHaSidebarGutters_)==null||m.call(this)}catch{}this.removeAttribute("ddc-fixed-ui"),(x=(y=this.style)==null?void 0:y.removeProperty)==null||x.call(y,"--ddc-ui-width")}else this.removeAttribute("ddc-fixed-ui"),(S=(w=this.style)==null?void 0:w.removeProperty)==null||S.call(w,"--ddc-ui-width");let ce=`${V.w}px`,We=`${V.h}px`,ye=n.style.width===ce,ze=n.style.height===We,we=n.style.transform==="scale(1)";if(!(ye&&ze&&we)&&(n.style.width=ce,n.style.height=We,n.style.transform="scale(1)",n.style.transformOrigin="top left",n.style.position="absolute",n.style.top="0",n.style.left="0",this.__pointerScaleX=1,this.__pointerScaleY=1,this.__scaleOuter)){let Ee=this.parentElement&&((L=(T=this.parentElement).getBoundingClientRect)==null?void 0:L.call(T).width)||this.offsetParent&&((O=(C=this.offsetParent).getBoundingClientRect)==null?void 0:O.call(C).width)||this.getBoundingClientRect&&this.getBoundingClientRect().width||this.offsetWidth||V.w,et=`${Math.max(1,Ee)}px`,Ve=`${Math.max(1,V.h)}px`;this.__scaleOuter.style.width!==et&&(this.__scaleOuter.style.width=et),this.__scaleOuter.style.height!==Ve&&(this.__scaleOuter.style.height=Ve)}try{(M=this._syncTabsWidth_)==null||M.call(this)}catch{}return}this.removeAttribute("ddc-fixed-ui"),(P=(_=this.style)==null?void 0:_.removeProperty)==null||P.call(_,"--ddc-ui-width");let o=typeof this._computeDesignSize=="function"?this._computeDesignSize():{w:n.offsetWidth||1,h:n.offsetHeight||1},c=this.parentElement&&((q=(R=this.parentElement).getBoundingClientRect)==null?void 0:q.call(R).width)||this.offsetParent&&(($=(K=this.offsetParent).getBoundingClientRect)==null?void 0:$.call(K).width)||this.getBoundingClientRect&&this.getBoundingClientRect().width||this.offsetWidth||o.w,s=Math.max(1,c),d=s/Math.max(1,o.w);this.__scaleOuter&&(this.__scaleOuter.style.width=`${s}px`,this.__scaleOuter.style.height=`${Math.max(1,o.h*d)}px`),n.style.width=`${o.w}px`,n.style.height=`${o.h}px`,n.style.transform=`scale(${d})`,n.style.transformOrigin="top left",n.style.position="absolute",n.style.top="0",n.style.left="0",this.__pointerScaleX=d||1,this.__pointerScaleY=d||1;try{(re=this._syncTabsWidth_)==null||re.call(this)}catch{}try{(F=this._layoutYtBackground_)==null||F.call(this)}catch{}try{(U=this._requestGridButtonsUpdateSoon)==null||U.call(this)}catch{}}_applyAutoFillNoScale(){var t,n,o,c,s,d,u;if(!this.__applyingAutoFill){this.__applyingAutoFill=!0;try{try{(t=this._ensureScaleWrapper)==null||t.call(this)}catch{}let f=this.__scaleOuter||((o=(n=this.shadowRoot)==null?void 0:n.querySelector)==null?void 0:o.call(n,".ddc-scale-outer"))||this,v=this.cardContainer||((s=(c=this.shadowRoot)==null?void 0:c.querySelector)==null?void 0:s.call(c,"#cardContainer"));if(!f||!v)return;f.style.overflow="hidden",f.style.overflowX="auto",f.style.overflowY="hidden",f.style.width="100%";let m=f.getBoundingClientRect(),y=Math.max(1,Math.round(m.width||0)),x=Math.max(1,Math.round(m.height||0));if(x<150){let R=Math.max(0,Math.round(m.top||0)),q=Math.max(1,window.innerHeight||document.documentElement.clientHeight||0),K=Math.max(1,q-R-8);Math.abs(K-x)>4&&(f.style.height=K+"px",m=f.getBoundingClientRect(),y=Math.max(1,Math.round(m.width||0)),x=Math.max(1,Math.round(m.height||0)))}let w=0,S=0,T=Array.from(v.querySelectorAll(".card-wrapper"));if(T.length){let R=v.getBoundingClientRect();for(let q of T){let K=q.getBoundingClientRect(),$=K.left-R.left+K.width,re=K.top-R.top+K.height;$>w&&(w=$),re>S&&(S=re)}}else w=v.scrollWidth||v.offsetWidth||y,S=v.scrollHeight||v.offsetHeight||x;let L=Number(this.gridSize||1)||1,C=Math.max(1,Math.round(Math.ceil(w/L)*L)),O=Math.max(1,Math.round(Math.ceil(S/L)*L)),M=y>C?y:C,_=x>O?x:O;if(v.style.transform="none",v.style.transformOrigin="left top",this.__pointerScaleX=1,this.__pointerScaleY=1,v.style.width=`${M}px`,v.style.height=`${_}px`,f){let R=0;try{let $=f.getBoundingClientRect();R=Math.max(0,Math.round($.top||0))}catch{}let q=Math.max(1,window.innerHeight||document.documentElement.clientHeight||0),K=Math.max(1,q-R-8);f.style.height=`${_}px`}v.style.position=v.style.position||"absolute",v.style.top=v.style.top||"0",v.style.left=v.style.left||"0";let P=this.tabsBar;P&&this.tabsPosition!=="left"&&(P.style.width="100%",P.style.maxWidth="100%")}finally{try{(d=this._layoutYtBackground_)==null||d.call(this)}catch{}try{(u=this._requestGridButtonsUpdateSoon)==null||u.call(this)}catch{}requestAnimationFrame(()=>{this.__applyingAutoFill=!1})}}}_resizeContainer(){var s,d;let t=this.cardContainer;if(!t||this._isContainerFixed())return;let n=Array.from(t.querySelectorAll(".card-wrapper")),o=0,c=0;n.forEach(u=>{let f=u.getBoundingClientRect(),v=t.getBoundingClientRect(),m=f.left-v.left+f.width,y=f.top-v.top+f.height;o=Math.max(o,m),c=Math.max(c,y)}),t.style.width=`${Math.ceil(o/this.gridSize)*this.gridSize||100}px`,t.style.height=`${Math.ceil(c/this.gridSize)*this.gridSize||100}px`;try{(s=this._syncTabsWidth_)==null||s.call(this)}catch{}try{(d=this._requestGridButtonsUpdateSoon)==null||d.call(this)}catch{}}_pushCardsOutOfTheWay(t,n,o,c,s){if(!this.__collisionOriginals)return;let d=new Set(t.map(C=>C.el)),u=Array.from(this.cardContainer.querySelectorAll(".card-wrapper")).filter(C=>!C.dataset.placeholder),f=this._isContainerFixed(),{w:v,h:m}=this._getContainerSize();for(let C of u){if(d.has(C))continue;let O=this.__collisionOriginals.get(C);if(O){C.setAttribute("data-x-raw",String(O.x)),C.setAttribute("data-y-raw",String(O.y));let M=c?Math.round(O.x/s)*s:O.x,_=c?Math.round(O.y/s)*s:O.y;this._setCardPosition(C,M,_)}}let y=t.map(C=>({x:C.snapX,y:C.snapY,w:C.w,h:C.h})),x=new Map,w=new Map;for(let C of u){let O=parseFloat(C.style.width)||C.getBoundingClientRect().width,M=parseFloat(C.style.height)||C.getBoundingClientRect().height;w.set(C,{w:O,h:M})}let S=n>0?1:n<0?-1:0,T=o>0?1:o<0?-1:0,L=Math.abs(n)>=Math.abs(o);for(let C of u){if(d.has(C))continue;let O=this.__collisionOriginals.get(C);if(!O)continue;let{x:M,y:_}=O,{w:P,h:R}=w.get(C),q=!1;for(let K of y)if(this._rectsOverlap({x:K.x,y:K.y,w:K.w,h:K.h},{x:M,y:_,w:P,h:R})){q=!0,L&&S!==0?M=S>0?K.x+K.w:K.x-P:!L&&T!==0?_=T>0?K.y+K.h:K.y-R:M=K.x+K.w;break}if(q){let K=0,$=L?S!==0?S*s:s:0,re=L?0:T!==0?T*s:s;for(;K<100;){let F={x:M,y:_,w:P,h:R},U=!1;for(let V of y)if(this._rectsOverlap(F,V)){U=!0;break}if(!U){for(let[,V]of x)if(this._rectsOverlap(F,V)){U=!0;break}}if(!U&&f&&(M<0||_<0||M+P>v||_+R>m)&&(U=!0),!U)break;M+=$,_+=re,K++}f&&(M=Math.max(0,Math.min(M,Math.max(0,v-P))),_=Math.max(0,Math.min(_,Math.max(0,m-R))))}x.set(C,{x:M,y:_,w:P,h:R}),y.push({x:M,y:_,w:P,h:R})}for(let[C,O]of x){C.setAttribute("data-x-raw",String(O.x)),C.setAttribute("data-y-raw",String(O.y));let M=c?Math.round(O.x/s)*s:O.x,_=c?Math.round(O.y/s)*s:O.y;this._setCardPosition(C,M,_)}}_rectFor(t,n=null,o=null,c=null,s=null){let d=n!=null?n:parseFloat(t.getAttribute("data-x"))||0,u=o!=null?o:parseFloat(t.getAttribute("data-y"))||0,f=c!=null?c:parseFloat(t.style.width)||t.getBoundingClientRect().width||0,v=s!=null?s:parseFloat(t.style.height)||t.getBoundingClientRect().height||0;return{x:d,y:u,w:f,h:v,el:t}}_rectsOverlap(t,n,o=.5){return!(t.x+t.w<=n.x+o||n.x+n.w<=t.x+o||t.y+t.h<=n.y+o||n.y+n.h<=t.y+o)}_anyCollisionFor(t,n){let o=Array.from(this.cardContainer.querySelectorAll(".card-wrapper")).filter(s=>!n.has(s)&&!s.dataset.placeholder);if(!o.length)return!1;let c=o.map(s=>this._rectFor(s));for(let s of t)for(let d of c)if(this._rectsOverlap(s,d))return!0;return!1}_extractCardConfig(t){var o;if(!t)return{};let n=t._config||t.config;if(n&&typeof n=="object"&&Object.keys(n).length)return n;try{let c=t.closest?t.closest(".card-wrapper"):null,s=(o=c==null?void 0:c.dataset)==null?void 0:o.cfg;if(s){let d=JSON.parse(s);if(d&&typeof d=="object")return d}}catch{}return{}}async _openCardManager(){await this._openSmartPicker("add")}_catalog(){return[{id:"favorites",name:"Favorites",items:[]},{id:"recent",name:"Recent",items:[]},{id:"basics",name:"Basics",items:[{type:"entities",name:"Entities",icon:"mdi:format-list-bulleted"},{type:"entity",name:"Entity",icon:"mdi:checkbox-blank-circle-outline"},{type:"tile",name:"Tile",icon:"mdi:view-grid-outline"},{type:"button",name:"Button",icon:"mdi:gesture-tap-button"},{type:"glance",name:"Glance",icon:"mdi:eye-outline"},{type:"markdown",name:"Markdown",icon:"mdi:language-markdown"},{type:"custom_card",name:"Custom Card",icon:"mdi:puzzle-outline"}]},{id:"sensors",name:"Sensors",items:[{type:"sensor",name:"Sensor",icon:"mdi:antenna"},{type:"gauge",name:"Gauge",icon:"mdi:gauge"},{type:"history-graph",name:"History graph",icon:"mdi:chart-line"},{type:"statistics-graph",name:"Statistics graph",icon:"mdi:chart-bar"}]},{id:"visual",name:"Visual",items:[{type:"picture-entity",name:"Picture entity",icon:"mdi:image-outline"},{type:"picture-glance",name:"Picture glance",icon:"mdi:image-multiple-outline"},{type:"weather-forecast",name:"Weather",icon:"mdi:weather-partly-cloudy"},{type:"map",name:"Map",icon:"mdi:map"},{type:"iframe",name:"iFrame",icon:"mdi:application"}]},{id:"controls",name:"Controls",items:[{type:"light",name:"Light",icon:"mdi:lightbulb-outline"},{type:"thermostat",name:"Thermostat",icon:"mdi:thermostat"},{type:"media-control",name:"Media control",icon:"mdi:play-circle-outline"},{type:"alarm-panel",name:"Alarm panel",icon:"mdi:shield-home-outline"},{type:"area",name:"Area",icon:"mdi:map-marker"}]}]}async _getEditorElementForType(t,n){try{console.info("[ddc:editor] Requesting editor element",{type:t,cfg:n})}catch{}let o=await this._helpersPromise||await window.loadCardHelpers();try{typeof t=="string"&&t&&!t.startsWith("custom:")&&t!=="custom_card"&&await this._ensureCardModuleLoaded(t,n)}catch{}if(typeof t=="string"&&t==="entity")try{return await this._getEntityCardEditor(n||{})}catch(v){console.warn("[ddc:editor] Custom entity editor failed",v)}let c=async()=>{try{if(o.getCardElementClass)return await o.getCardElementClass(t);let v;if(n&&typeof n=="object")v={type:t,...n};else{let y;try{y=await this._getStubConfigForType(t)}catch{}v=y&&typeof y=="object"?{...y}:{type:t}}let m=o.createCardElement(v);return(m==null?void 0:m.constructor)||null}catch{return null}};try{let v=await c();if(v){if(typeof v.getConfigElement=="function"){let m=await v.getConfigElement();if(m){try{console.info("[ddc:editor] Found static class editor",{type:t})}catch{}return m}}if(typeof v.getConfigForm=="function")try{let m=await v.getConfigForm();if(m&&m.schema){try{await customElements.whenDefined("ha-form")}catch{}let y=document.createElement("ha-form");y.hass=this.hass,y.schema=Array.isArray(m.schema)?m.schema.map(x=>({...x})):m.schema,typeof m.computeLabel=="function"&&(y.computeLabel=m.computeLabel.bind(v)),typeof m.computeHelper=="function"&&(y.computeHelper=m.computeHelper.bind(v)),y.data={...n},y.addEventListener("value-changed",x=>{});try{console.info("[ddc:editor] Generated form editor via getConfigForm",{type:t})}catch{}return y}}catch{}}}catch{}if(typeof t=="string"&&(t.startsWith("custom:")||t==="custom_card"))try{let v;try{v=await this._getStubConfigForType(t)}catch{}let m=v&&typeof v=="object"?{...v}:{type:t},y=o.createCardElement(m);if(y.hass=this.hass,typeof y.getConfigElement=="function"){let x=await y.getConfigElement();if(x){try{console.info("[ddc:editor] Found instance-level editor",{type:t})}catch{}return x}}}catch{}let s=String(t).replace(/^custom:/,""),u=(Array.isArray(window.customCards)?window.customCards:[]).find(v=>(v==null?void 0:v.type)===s||(v==null?void 0:v.type)===t||(v==null?void 0:v.type)===`custom:${s}`),f=[];u!=null&&u.editor&&f.push(u.editor),f.push(`${s}-editor`,`${s}-config-editor`),s&&typeof s=="string"&&f.push(`hui-${s}-card-editor`);for(let v of f)if(!(!v||typeof v!="string"))for(let m of[0,100,300,700,1500,3e3])try{if(customElements.get(v)||await Promise.race([customElements.whenDefined(v),new Promise(y=>setTimeout(y,m))]),customElements.get(v)){try{console.info("[ddc:editor] Found editor by tag",{type:t,tag:v})}catch{}return document.createElement(v)}}catch{}return null}async _ensureCardModuleLoaded(t,n){try{let o=await this._helpersPromise||await window.loadCardHelpers(),c;if(n&&typeof n=="object")c={type:t,...n};else{let u;try{u=await this._getStubConfigForType(t)}catch{}c=u&&typeof u=="object"?{...u}:{type:t}}let s=o.createCardElement(c);s.hass=this.hass;let d=document.createElement("div");d.style.cssText="position:fixed;left:-9999px;top:-9999px;opacity:0;pointer-events:none;",d.appendChild(s),document.body.appendChild(d),await new Promise(u=>requestAnimationFrame(u)),d.remove();try{console.info("[ddc:editor] Warmed card module",{type:t})}catch{}}catch{}}_ensureOverlayZFix(){if(document.querySelector("style[data-ddc-overlay-fix]"))return;let t=document.createElement("style");t.setAttribute("data-ddc-overlay-fix",""),t.textContent=`
      /* Make common HA overlays float above our modal */
      vaadin-combo-box-overlay,
      vaadin-overlay-backdrop,
      mwc-menu-surface,
      .mdc-menu-surface--open {
        z-index: 1000000 !important;
      }
    `,document.head.appendChild(t)}_customCardsFromRegistry(){return(Array.isArray(window.customCards)?window.customCards:[]).map(n=>{var o;return{type:(o=n==null?void 0:n.type)!=null&&o.startsWith("custom:")?n.type:`custom:${n==null?void 0:n.type}`,name:(n==null?void 0:n.name)||(n==null?void 0:n.type)||"Custom card",icon:"mdi:puzzle-outline",description:(n==null?void 0:n.description)||"",editorTag:(n==null?void 0:n.editor)||null}}).filter(n=>typeof n.type=="string"&&n.type.startsWith("custom:"))}_schemaForType(t){let n=c=>c,o=[];return{entities:n({fields:[{key:"entities",type:"entities",multi:!0,domains:o,label:"Entities"}]}),entity:n({fields:[{key:"entity",type:"entity",multi:!1,domains:o,label:"Entity"}]}),sensor:n({fields:[{key:"entity",type:"entity",multi:!1,domains:["sensor"],label:"Sensor"},{key:"name",type:"text",label:"Name (optional)"}]}),gauge:n({fields:[{key:"entity",type:"entity",multi:!1,domains:["sensor","number","input_number"],label:"Numeric entity"},{key:"min",type:"number",label:"Min",step:"any"},{key:"max",type:"number",label:"Max",step:"any"}]}),"history-graph":n({fields:[{key:"entities",type:"entities",multi:!0,domains:o,label:"Entities (multiselect)"},{key:"hours_to_show",type:"number",label:"Hours to show",default:24}]}),"statistics-graph":n({fields:[{key:"entities",type:"entities",multi:!0,domains:["sensor","number","input_number"],label:"Entities (multiselect)"},{key:"chart_type",type:"select",options:["line","bar"],label:"Chart type",default:"line"},{key:"statistic",type:"select",options:["mean","min","max","sum"],label:"Statistic",default:"mean"}]}),glance:n({fields:[{key:"entities",type:"entities",multi:!0,domains:o,label:"Entities (multiselect)"}]}),"picture-glance":n({fields:[{key:"entities",type:"entities",multi:!0,domains:o,label:"Entities (multiselect)"},{key:"image",type:"text",label:"Image URL (optional)"}]}),"picture-entity":n({fields:[{key:"entity",type:"entity",multi:!1,domains:o,label:"Entity"},{key:"image",type:"text",label:"Image URL (optional)"}]}),"weather-forecast":n({fields:[{key:"entity",type:"entity",multi:!1,domains:["weather"],label:"Weather entity"}]}),map:n({fields:[{key:"entities",type:"entities",multi:!0,domains:["device_tracker","person"],label:"Trackers / people (multiselect)"},{key:"default_zoom",type:"number",label:"Default zoom",default:14}]}),"media-control":n({fields:[{key:"entity",type:"entity",multi:!1,domains:["media_player"],label:"Media player"}]}),light:n({fields:[{key:"entity",type:"entity",multi:!1,domains:["light"],label:"Light"}]}),thermostat:n({fields:[{key:"entity",type:"entity",multi:!1,domains:["climate"],label:"Climate"}]}),"alarm-panel":n({fields:[{key:"entity",type:"entity",multi:!1,domains:["alarm_control_panel"],label:"Alarm"}]}),markdown:n({fields:[{key:"content",type:"textarea",label:"Markdown"}]}),tile:n({fields:[{key:"entity",type:"entity",multi:!1,domains:o,label:"Entity"}]}),button:n({fields:[{key:"entity",type:"entity",multi:!1,domains:o,label:"Entity (optional)"}]}),iframe:n({fields:[{key:"url",type:"text",label:"URL"}]}),area:n({fields:[{key:"area",type:"text",label:"Area ID"}]})}[t]||{fields:[]}}async _getEntityCardEditor(t={}){let n=document.createElement("div");n.style.display="flex",n.style.flexDirection="column",n.style.gap="12px",n.style.padding="8px 0",n.style.overflow="visible",n._cfg={type:"entity",...t||{}};let o=()=>{let O={type:"entity"};["entity","name","icon","attribute","unit","state_color","theme"].forEach(M=>{let _=n._cfg[M];_!==void 0&&_!==""&&_!==null&&(O[M]=_)}),n.dispatchEvent(new CustomEvent("config-changed",{detail:{config:O}}))},c=document.createElement("div");c.style.display="flex",c.style.flexDirection="column",c.style.gap="4px";let s=document.createElement("span");s.textContent="Entity",s.style.fontSize=".8rem",s.style.opacity="0.8";let d=document.createElement("ha-entity-picker");d.setAttribute("label","Select entity"),d.addEventListener("value-changed",O=>{var _,P,R;O.stopPropagation();let M=(R=O.detail&&((_=O.detail.value)!=null?_:O.detail))!=null?R:(P=O.target)==null?void 0:P.value;n._cfg.entity=M||"";try{u()}catch{}o()}),c.appendChild(s),c.appendChild(d),n.appendChild(c);let u=()=>{},f=document.createElement("div");f.style.display="grid",f.style.gridTemplateColumns="1fr 1fr",f.style.columnGap="12px",f.style.rowGap="12px";let v=(O,M)=>{let _=document.createElement("div");_.style.display="flex",_.style.flexDirection="column",_.style.gap="4px";let P=document.createElement("span");P.textContent=O,P.style.fontSize=".8rem",P.style.opacity="0.8",_.appendChild(P),_.appendChild(M),f.appendChild(_)},m;customElements.get("ha-textfield")?(m=document.createElement("ha-textfield"),m.setAttribute("label","Name"),m.addEventListener("input",()=>{n._cfg.name=m.value||void 0,o()})):(m=document.createElement("input"),m.type="text",m.placeholder="Name",m.addEventListener("input",()=>{n._cfg.name=m.value||void 0,o()}),Object.assign(m.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})),v("Name",m);let y;customElements.get("ha-icon-picker")?(y=document.createElement("ha-icon-picker"),y.setAttribute("label","Icon"),y.addEventListener("value-changed",O=>{var M;O.stopPropagation(),n._cfg.icon=((M=O.detail)==null?void 0:M.value)||void 0,o()}),Object.assign(y.style,{position:"relative",zIndex:"1000"})):customElements.get("ha-textfield")?(y=document.createElement("ha-textfield"),y.setAttribute("label","Icon"),y.addEventListener("input",()=>{n._cfg.icon=y.value||void 0,o()})):(y=document.createElement("input"),y.type="text",y.placeholder="mdi:icon",y.addEventListener("input",()=>{n._cfg.icon=y.value||void 0,o()}),Object.assign(y.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})),v("Icon",y);let x;if(u=()=>{var $,re;let O=[],M=($=n._cfg)==null?void 0:$.entity,_=n._hass;if(M&&_&&_.states&&_.states[M]&&_.states[M].attributes)try{O=Object.keys(_.states[M].attributes||{}).filter(F=>F&&typeof F=="string"),O.sort()}catch{}let P=x&&typeof x.value!="undefined"?x.value:void 0,R=((x==null?void 0:x.tagName)||"").toLowerCase(),q={min_color_temp_kelvin:"Minimum color temperature (Kelvin)",max_color_temp_kelvin:"Maximum color temperature (Kelvin)",min_color_temp_mireds:"Minimum color temperature (mireds)",max_color_temp_mireds:"Maximum color temperature (mireds)",min_mireds:"Minimum color temperature (mireds)",max_mireds:"Maximum color temperature (mireds)",effect_list:"Available effects",color_mode:"Color mode",brightness:"Brightness",hs_color:"Hs color",rgb_color:"Rgb color",xy_color:"Xy color",entity_id:"Entity ID",friendly_name:"Friendly name",icon:"Icon"},K=F=>q[F]?q[F]:F.split("_").map(U=>U&&(U.toLowerCase()==="kelvin"?"Kelvin":U.toLowerCase()==="mireds"?"mireds":U.charAt(0).toUpperCase()+U.slice(1))).join(" ");if(R==="ha-combo-box"){let F=O.map(U=>({value:U,label:K(U)}));F.unshift({value:"",label:""}),x.items=F,P&&O.includes(P)?x.value=P:x.value=""}else if(R==="ha-select"){x.innerHTML="";let F=document.createElement("mwc-list-item");F.setAttribute("value",""),F.textContent="",x.appendChild(F);for(let U of O){let V=document.createElement("mwc-list-item");V.setAttribute("value",U),V.textContent=K(U),x.appendChild(V)}P&&O.includes(P)?x.value=P:x.value="",(re=x.requestUpdate)==null||re.call(x)}else if(R==="select"){x.innerHTML="";let F=document.createElement("option");F.value="",F.textContent="",x.appendChild(F);for(let U of O){let V=document.createElement("option");V.value=U,V.textContent=K(U),x.appendChild(V)}P&&O.includes(P)&&(x.value=P)}},customElements.get("ha-combo-box"))x=document.createElement("ha-combo-box"),x.setAttribute("label","Attribute"),x.setAttribute("item-label-path","label"),x.setAttribute("item-value-path","value"),x.setAttribute("allow-custom-value","false"),x.addEventListener("value-changed",O=>{var _,P;O.stopPropagation();let M=(P=(_=O.detail)==null?void 0:_.value)!=null?P:x.value;n._cfg.attribute=M||void 0,o()});else if(customElements.get("ha-select"))x=document.createElement("ha-select"),x.setAttribute("label","Attribute"),x.addEventListener("selected",O=>{O.stopPropagation(),n._cfg.attribute=x.value||void 0,o()}),Object.assign(x.style,{position:"relative",zIndex:"1000"});else{x=document.createElement("select");let O=document.createElement("option");O.value="",O.textContent="",x.appendChild(O),x.addEventListener("change",M=>{M.stopPropagation(),n._cfg.attribute=x.value||void 0,o()}),Object.assign(x.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),Object.assign(x.style,{position:"relative",zIndex:"1000"})}u(),v("Attribute",x);let w;customElements.get("ha-textfield")?(w=document.createElement("ha-textfield"),w.setAttribute("label","Unit"),w.addEventListener("input",()=>{n._cfg.unit=w.value||void 0,o()})):(w=document.createElement("input"),w.type="text",w.placeholder="Unit",w.addEventListener("input",()=>{n._cfg.unit=w.value||void 0,o()}),Object.assign(w.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})),v("Unit",w);let S;if(customElements.get("ha-select"))S=document.createElement("ha-select"),S.setAttribute("label","Theme (optional)"),S.addEventListener("selected",O=>{O.stopPropagation(),n._cfg.theme=S.value||void 0,o()});else{S=document.createElement("select");let O=document.createElement("option");O.value="",O.textContent="",S.appendChild(O),S.addEventListener("change",M=>{M.stopPropagation(),n._cfg.theme=S.value||void 0,o()}),Object.assign(S.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})}v("Theme (optional)",S);let T;customElements.get("ha-switch")?(T=document.createElement("ha-switch"),T.addEventListener("change",()=>{n._cfg.state_color=!!T.checked,o()})):(T=document.createElement("input"),T.type="checkbox",T.addEventListener("change",()=>{n._cfg.state_color=!!T.checked,o()}));let L=document.createElement("div");L.style.display="flex",L.style.alignItems="center",L.style.gap="8px";let C=document.createElement("span");return C.textContent="Show state color",C.style.fontSize=".8rem",C.style.opacity="0.8",L.appendChild(C),L.appendChild(T),f.appendChild(L),n.appendChild(f),n.setConfig=(O={})=>{n._cfg={type:"entity",...O||{}};let M=n._cfg;if(d&&("value"in d&&(d.value=M.entity||""),d.setAttribute&&d.setAttribute("value",M.entity||"")),m&&(m.value=M.name||""),y&&(y.value=M.icon||""),x){try{u()}catch{}x.value=M.attribute||""}w&&(w.value=M.unit||""),S&&(S.value=M.theme||""),T&&"checked"in T&&(T.checked=!!M.state_color)},Object.defineProperty(n,"hass",{get(){return this._hass},set(O){var M;if(this._hass=O,d){try{d.hass=O}catch{}customElements.get("ha-entity-picker")||customElements.whenDefined("ha-entity-picker").then(()=>{var _;try{d.hass=this._hass,(_=d.requestUpdate)==null||_.call(d)}catch{}}).catch(()=>{})}if(y){try{y.hass=O}catch{}customElements.get("ha-icon-picker")||customElements.whenDefined("ha-icon-picker").then(()=>{var _;try{y.hass=this._hass,(_=y.requestUpdate)==null||_.call(y)}catch{}}).catch(()=>{})}if(S){let _=[];O&&O.themes&&(O.themes.themes?_=Object.keys(O.themes.themes):typeof O.themes=="object"&&(_=Object.keys(O.themes).filter(q=>q!=="default_theme")));let P=S.value,R=(S.tagName||"").toLowerCase();if(R==="ha-select"){S.innerHTML="";let q=document.createElement("mwc-list-item");q.setAttribute("value",""),q.textContent="",S.appendChild(q);for(let K of _){let $=document.createElement("mwc-list-item");$.setAttribute("value",K),$.textContent=K,S.appendChild($)}P&&_.includes(P)?S.value=P:P||(S.value=""),(M=S.requestUpdate)==null||M.call(S)}else if(R==="select"){S.innerHTML="";let q=document.createElement("option");q.value="",q.textContent="",S.appendChild(q);for(let K of _){let $=document.createElement("option");$.value=K,$.textContent=K,S.appendChild($)}P&&Array.from(S.options).some(K=>K.value===P)&&(S.value=P)}}try{u()}catch{}}}),n.setConfig(t||{}),n}_shapeBySchema(t,n={}){let o=this._schemaForType(t)||{fields:[]},c={...n,type:t};for(let s of o.fields){let d=c[s.key];if(s.type==="entities"){let f=(Array.isArray(d)?d:d!=null&&d!==""?[d]:[]).filter(Boolean);f.length?c[s.key]=f:delete c[s.key]}else if(s.type==="entity")Array.isArray(d)&&(d=d[0]),d==null||d===""?delete c[s.key]:c[s.key]=String(d);else if(s.type==="number")if(d==null||d==="")delete c[s.key];else{let u=Number(d);Number.isFinite(u)?c[s.key]=u:delete c[s.key]}else(s.type==="select"||s.type==="text"||s.type==="textarea")&&(d==null||d===""?delete c[s.key]:c[s.key]=d)}return c}_statesList(t){var c;let n=Object.keys(((c=this.hass)==null?void 0:c.states)||{});if(!t||!t.length)return n;if(!this.__domainIndex||this.__domainIndex._gen!==n.length){let s={};for(let d of n){let u=d.split(".")[0];(s[u]||(s[u]=[])).push(d)}this.__domainIndex={_gen:n.length,map:s}}let o=[];for(let s of t)this.__domainIndex.map[s]&&o.push(...this.__domainIndex.map[s]);return o}_isNumericEntity(t){var c,s;let n=(s=(c=this.hass)==null?void 0:c.states)==null?void 0:s[t];if(!n)return!1;let o=Number(n.state);return Number.isFinite(o)}_getFaves(){try{return new Set(JSON.parse(localStorage.getItem("ddc_faves")||"[]"))}catch{return new Set}}_setFaves(t){try{localStorage.setItem("ddc_faves",JSON.stringify(Array.from(t)))}catch{}}_getRecent(){try{return JSON.parse(localStorage.getItem("ddc_recent_types")||"[]")}catch{return[]}}_pushRecent(t){try{let n=this._getRecent().filter(o=>o!==t);n.unshift(t),n.length>10&&(n.length=10),localStorage.setItem("ddc_recent_types",JSON.stringify(n))}catch{}}async _ensureCodeMirror(){if(!this.__cmReady){if(!document.querySelector("link[data-cm-core]")){let t=document.createElement("link");t.rel="stylesheet",t.href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.css",t.setAttribute("data-cm-core",""),document.head.appendChild(t)}await new Promise(t=>{if(window.CodeMirror)return t();let n=document.createElement("script");n.src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.js",n.onload=t,document.head.appendChild(n)}),await new Promise(t=>{var o,c;if((c=(o=window.CodeMirror)==null?void 0:o.mimeModes)!=null&&c.yaml)return t();let n=document.createElement("script");n.src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/yaml/yaml.min.js",n.onload=t,document.head.appendChild(n)}),this.__cmReady=!0}}async _mountYamlEditor(t,n,o,c){let s=f=>window.jsyaml?window.jsyaml.dump(f):JSON.stringify(f,null,2),d=f=>window.jsyaml?window.jsyaml.load(f):JSON.parse(f);t.innerHTML="";let u=s(n);if(customElements.get("ha-code-editor")){let f=document.createElement("ha-code-editor");f.mode="yaml",f.hass=this.hass,f.value=u,f.style.display="block",f.style.height="260px",t.appendChild(f);let v=!1;return f.addEventListener("value-changed",m=>{var x,w,S;if(v)return;let y=(S=(w=(x=m.detail)==null?void 0:x.value)!=null?w:f.value)!=null?S:"";try{o(d(y))}catch(T){c==null||c(T)}}),{setValue:m=>{var x;let y=s(m);((x=f.value)!=null?x:"")!==y&&(v=!0,f.value=y,v=!1)}}}try{await this._ensureCodeMirror();let f=window.CodeMirror(t,{value:u,mode:"yaml",lineNumbers:!0,lineWrapping:!0,indentUnit:2,tabSize:2}),v=!1;return f.on("change",()=>{if(v)return;let m=f.getValue();try{o(d(m))}catch(y){c==null||c(y)}}),{setValue:m=>{let y=s(m);f.getValue()!==y&&(v=!0,f.setValue(y),v=!1)}}}catch{let f=document.createElement("textarea");return f.style.width="100%",f.style.height="260px",f.value=u,f.addEventListener("input",()=>{try{o(d(f.value))}catch(v){c==null||c(v)}}),t.appendChild(f),{setValue:v=>{let m=s(v);f.value!==m&&(f.value=m)}}}}_createVirtualList({container:t,items:n,rowHeight:o=36,renderRow:c}){t.style.position="relative",t.style.overflow="auto";let s=document.createElement("div");s.style.height=`${n.length*o}px`,t.innerHTML="",t.appendChild(s);let d=new Map,u=()=>{let f=t.scrollTop,v=t.clientHeight,m=Math.max(0,Math.floor(f/o)-6),y=Math.min(n.length-1,Math.ceil((f+v)/o)+6);for(let[x,w]of d)(x<m||x>y)&&(w.remove(),d.delete(x));for(let x=m;x<=y;x++){if(d.has(x))continue;let w=c(n[x],x);w.style.position="absolute",w.style.left="0",w.style.right="0",w.style.top=`${x*o}px`,d.set(x,w),t.appendChild(w)}};return t.addEventListener("scroll",u,{passive:!0}),new ResizeObserver(u).observe(t),u(),{refresh(f){if(f){n=f,s.style.height=`${n.length*o}px`;for(let[,v]of d)v.remove();d.clear()}u()}}}async _openSmartPicker(t="add",n=null,o=null){let c=()=>s.remove(),s=document.createElement("div");s.className="modal",s.innerHTML=`
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
      </div>`,this.shadowRoot.appendChild(s);let d=s.querySelector("#leftPane"),u=s.querySelector("#addBtn"),f=s.querySelector("#footAdd"),v=s.querySelector("#cancelBtn"),m=s.querySelector("#footCancel"),y=s.querySelector("#search"),x=s.querySelector("#cardHost"),w=s.querySelector("#editorHost"),S=s.querySelector("#editorSpin"),T=s.querySelector("#quickFill"),L=s.querySelector("#yamlHost"),C=s.querySelector("#yamlErr"),O=s.querySelector("#yamlSec"),M=s.querySelector("#tabVisual"),_=s.querySelector("#tabYaml"),P=s.querySelector("#tabVis"),R=s.querySelector("#visSec"),q=s.querySelector("#visHost"),K=s.querySelector("#err"),$=s.querySelector("#previewSpin"),re=N=>{u.disabled=f.disabled=!N},F=N=>{N?(K.hidden=!1,K.textContent=N):(K.hidden=!0,K.textContent="")},U=this._getFaves(),V=this._getRecent(),ce=this._catalog(),We=ce.find(N=>N.id==="favorites"),ye=ce.find(N=>N.id==="recent"),ze=ce.flatMap(N=>N.items||[]);We.items=ze.filter(N=>U.has(N.type)),ye.items=V.map(N=>ze.find(Y=>Y.type===N)).filter(Boolean);let we=this._customCardsFromRegistry();we.length&&ce.push({id:"custom",name:"Custom (installed)",items:we});let Ee=s.querySelector("#quickFillSec");Ee&&(Ee.style.display="none");let et=s.querySelector("#optionsSec .hd"),Ve,De,Ge=()=>{if(!De)return;let N=Ye&&U.has(Ye),Y=De.querySelector("ha-icon");Y&&Y.setAttribute("icon",N?"mdi:star":"mdi:star-outline")},st=N=>{if(Ve){let Y=ze.find(Se=>Se.type===N),ue=Y?Y.name:N||"";Ve.textContent=ue}Ge()};if(et&&!et.querySelector(".sel-info")){let N=et.querySelector("span");N&&(N.style.display="none"),Ve=document.createElement("span"),Ve.className="sel-info",Ve.style.flex="1",Ve.style.fontWeight="bold",Ve.style.paddingRight="8px",et.insertBefore(Ve,et.firstChild),De=document.createElement("button"),De.className="icon-btn",De.setAttribute("title","Favorite"),Object.assign(De.style,{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"28px",height:"28px",borderRadius:"6px",border:"1px solid var(--divider-color)",background:"var(--primary-background-color)",padding:"0",marginLeft:"4px",cursor:"pointer"}),De.innerHTML='<ha-icon icon="mdi:star-outline"></ha-icon>',et.appendChild(De),De.addEventListener("click",Y=>{Y.stopPropagation(),Ye&&(U.has(Ye)?U.delete(Ye):U.add(Ye),this._setFaves(U),Ge(),lt())})}let ct="visual",ae=N=>{let Y=N==="yaml",ue=N==="vis",Se=!Y&&!ue;M.classList.toggle("active",Se),M.setAttribute("aria-selected",String(Se)),_.classList.toggle("active",Y),_.setAttribute("aria-selected",String(Y)),P&&(P.classList.toggle("active",ue),P.setAttribute("aria-selected",String(ue))),w.parentElement.style.display=Se?"":"none",O.style.display=Y?"":"none",R&&(R.style.display=ue?"":"none"),Y?O.scrollIntoView({behavior:"smooth",block:"start"}):ue&&R&&R.scrollIntoView({behavior:"smooth",block:"start"}),ct=Y?"yaml":ue?"vis":"visual"};M.addEventListener("click",async()=>{var N;if(ae("visual"),!Me)await Ot(oe);else try{(N=Me.setConfig)==null||N.call(Me,oe)}catch{}}),_.addEventListener("click",()=>ae("yaml")),P&&P.addEventListener("click",()=>{ae("vis");try{Fe(oe)}catch{}}),ae("visual");let ut=()=>{let N=y.value.trim().toLowerCase();return ce.map(Y=>({...Y,items:(Y.items||[]).filter(ue=>!N||ue.name.toLowerCase().includes(N)||ue.type.toLowerCase().includes(N))})).filter(Y=>Y.items&&Y.items.length||Y.id==="favorites"||Y.id==="recent")},lt=()=>{let N=ut();d.innerHTML="",N.forEach(Y=>{let ue=document.createElement("div");ue.style.padding="12px",ue.style.borderBottom="1px solid var(--divider-color)";let Se=document.createElement("h4");if(Se.textContent=Y.name,Se.style.margin="0 0 10px 0",Se.style.fontSize=".92rem",Se.style.opacity=".85",ue.appendChild(Se),!Y.items.length&&(Y.id==="favorites"||Y.id==="recent")){let de=document.createElement("div");de.style.opacity=".6",de.style.fontSize=".85rem",de.textContent=Y.id==="favorites"?"No favorites yet.":"No recent items yet.",ue.appendChild(de)}else Y.items.forEach(de=>{let Oe=document.createElement("button");Oe.innerHTML=`<span style="display:inline-flex;align-items:center;gap:8px">
              <ha-icon icon="${de.icon}"></ha-icon><span>${de.name}</span>
            </span>`,Object.assign(Oe.style,{display:"block",width:"100%",textAlign:"left",border:"none",background:"transparent",padding:"8px",borderRadius:"10px",cursor:"pointer"}),Oe.addEventListener("click",async()=>{Le(Oe),await Rt(de.type)}),ue.appendChild(Oe)});d.appendChild(ue)})},Le=N=>{d.querySelectorAll("button").forEach(Y=>{Y.classList.remove("active"),Y.style.background="transparent",Y.style.color=""}),N&&(N.classList.add("active"),N.style.background="rgba(3,169,244,.12)",N.style.color="var(--primary-color)")},oe=null,Ye=null,ke=null,Me=null,gt=null,mt=0,Bt=null,dt="",Tt=(N,Y)=>{var H;let ue=this._schemaForType(N);if(T.innerHTML="",!ue.fields.length){T.innerHTML='<div style="opacity:.7;font-size:.9rem">No quick fill for this card \u2014 use the editors below.</div>';return}let Se=Object.keys(((H=this.hass)==null?void 0:H.states)||{}),de=document.createElement("div"),Oe=(ee,qe,j,Ze)=>{let Xe=document.createElement("div");Object.assign(Xe.style,{padding:"8px 10px",border:"1px solid var(--divider-color)",borderRadius:"10px",cursor:"pointer",userSelect:"none",display:"flex",alignItems:"center",gap:"8px"}),Xe.innerHTML=`<ha-icon icon="mdi:checkbox-blank-outline"></ha-icon><span>${ee}</span>`,qe.includes(ee)&&(Xe.style.background="rgba(3,169,244,.12)",Xe.style.borderColor="var(--primary-color)",Xe.querySelector("ha-icon").setAttribute("icon","mdi:checkbox-marked")),Xe.addEventListener("click",async()=>{let nt=qe.indexOf(ee);nt>=0?qe.splice(nt,1):qe.push(ee);let je=qe.includes(ee);Xe.style.background=je?"rgba(3,169,244,.12)":"",Xe.style.borderColor=je?"var(--primary-color)":"var(--divider-color)",Xe.querySelector("ha-icon").setAttribute("icon",je?"mdi:checkbox-marked":"mdi:checkbox-blank-outline"),oe=this._shapeBySchema(N,{...oe,[Ze]:[...qe]}),yt(oe),ke==null||ke.setValue(oe)}),j.appendChild(Xe)};ue.fields.forEach(ee=>{var Ze,Xe,nt,je,at,it,rt,Je,Qe;let qe=document.createElement("div");Object.assign(qe.style,{display:"flex",gap:"8px",alignItems:"center",marginBottom:"8px"});let j=document.createElement("label");if(j.textContent=ee.label||ee.key,j.style.minWidth="130px",ee.type==="entities"){let Pe=document.createElement("div");Pe.style.flex="1";let ve=document.createElement("input");Object.assign(ve,{placeholder:"Filter entities\u2026"}),Object.assign(ve.style,{width:"100%",padding:"8px 10px",borderRadius:"10px",border:"1px solid var(--divider-color)",background:"var(--card-background-color)",color:"var(--primary-text-color)"});let Ae=document.createElement("div");Object.assign(Ae.style,{maxHeight:"220px",overflow:"auto",marginTop:"8px",border:"1px solid var(--divider-color)",borderRadius:"10px",padding:"6px"});let Re=ee.domains&&ee.domains.length?this._statesList(ee.domains):Se,Ce=Array.isArray(Y[ee.key])?[...Y[ee.key]]:Y[ee.key]?[Y[ee.key]]:[],se=Z=>{let Q=document.createElement("div");Object.assign(Q.style,{padding:"6px 10px",margin:"4px 0",border:"1px solid var(--divider-color)",borderRadius:"10px",cursor:"pointer",display:"flex",alignItems:"center",gap:"8px",background:""});let W=document.createElement("ha-icon");W.setAttribute("icon","mdi:checkbox-blank-outline"),W.style.setProperty("--mdc-icon-size","18px");let D=document.createElement("span");D.textContent=Z,D.style.whiteSpace="nowrap",D.style.overflow="hidden",D.style.textOverflow="ellipsis",Q.append(W,D);let X=()=>{let ie=Ce.includes(Z);Q.style.background=ie?"rgba(3,169,244,.12)":"",Q.style.borderColor=ie?"var(--primary-color)":"var(--divider-color)",W.setAttribute("icon",ie?"mdi:checkbox-marked":"mdi:checkbox-blank-outline")};return X(),Q.addEventListener("click",()=>{let ie=Ce.indexOf(Z);ie>=0?Ce.splice(ie,1):Ce.push(Z),oe=this._shapeBySchema(N,{...oe,[ee.key]:[...Ce]}),yt(oe),ke==null||ke.setValue(oe),X()}),Q},ne=Re;this._createVirtualList({container:Ae,items:ne,rowHeight:36,renderRow:se}),ve.addEventListener("input",()=>{let Z=ve.value.trim().toLowerCase();ne=Re.filter(Q=>!Z||Q.toLowerCase().includes(Z)),this._createVirtualList({container:Ae,items:ne,rowHeight:36,renderRow:se})}),Pe.append(ve,Ae),qe.append(j,Pe),oe=this._shapeBySchema(N,{...Y,[ee.key]:Ce})}if(ee.type==="entity"){let Pe=document.createElement("div");Pe.style.flex="1",Pe.style.position="relative";let ve=document.createElement("input");ve.setAttribute("list","ddc_entlist_"+ee.key),Object.assign(ve.style,{width:"100%",padding:"8px 10px 8px 36px",borderRadius:"10px",border:"1px solid var(--divider-color)"}),ve.placeholder=`Select ${((Ze=ee.label)==null?void 0:Ze.toLowerCase())||"entity"}\u2026`;let Ae=document.createElement("ha-icon");Ae.setAttribute("icon","mdi:magnify"),Object.assign(Ae.style,{position:"absolute",left:"10px",top:"8px",width:"18px",height:"18px","--mdc-icon-size":"18px",opacity:".7"});let Re=document.createElement("datalist");Re.id="ddc_entlist_"+ee.key;let Ce=ee.domains&&ee.domains.length?this._statesList(ee.domains):Object.keys(((Xe=this.hass)==null?void 0:Xe.states)||{});Re.innerHTML=Ce.map(se=>`<option value="${se}">`).join(""),ve.value=Array.isArray(Y[ee.key])?Y[ee.key][0]||"":Y[ee.key]||"",ve.addEventListener("change",async()=>{oe=this._shapeBySchema(N,{...oe,[ee.key]:ve.value||void 0}),yt(oe),ke==null||ke.setValue(oe)}),Pe.append(Ae,ve,Re),qe.append(j,Pe)}if(ee.type==="number"){let Pe=document.createElement("div");Pe.style.flex="1",Pe.style.position="relative";let ve=document.createElement("input");ve.type="number",ee.step&&(ve.step=ee.step),Object.assign(ve.style,{width:"100%",padding:"8px 10px 8px 36px",borderRadius:"10px",border:"1px solid var(--divider-color)"});let Ae=document.createElement("ha-icon");Ae.setAttribute("icon","mdi:counter"),Object.assign(Ae.style,{position:"absolute",left:"10px",top:"8px","--mdc-icon-size":"18px",width:"18px",height:"18px",opacity:".7"}),ve.value=(je=(nt=Y[ee.key])!=null?nt:ee.default)!=null?je:"",ve.addEventListener("input",async()=>{let Re=ve.value===""?void 0:Number(ve.value);oe=this._shapeBySchema(N,{...oe,[ee.key]:isNaN(Re)?void 0:Re}),yt(oe),ke==null||ke.setValue(oe)}),Pe.append(Ae,ve),qe.append(j,Pe)}if(ee.type==="select"){let Pe=document.createElement("div");Pe.style.flex="1",Pe.style.position="relative";let ve=document.createElement("select");Object.assign(ve.style,{width:"100%",padding:"8px 10px 8px 36px",borderRadius:"10px",border:"1px solid var(--divider-color)"});let Ae=document.createElement("ha-icon");Ae.setAttribute("icon","mdi:format-list-bulleted"),Object.assign(Ae.style,{position:"absolute",left:"10px",top:"8px","--mdc-icon-size":"18px",width:"18px",height:"18px",opacity:".7"}),(ee.options||[]).forEach(Re=>{let Ce=document.createElement("option");Ce.value=Re,ve.appendChild(Ce)}),ve.value=(rt=(at=Y[ee.key])!=null?at:ee.default)!=null?rt:((it=ee.options)==null?void 0:it[0])||"",ve.addEventListener("change",async()=>{oe=this._shapeBySchema(N,{...oe,[ee.key]:ve.value}),yt(oe),ke==null||ke.setValue(oe)}),Pe.append(Ae,ve),qe.append(j,Pe)}if(ee.type==="text"){let Pe=document.createElement("div");Pe.style.flex="1",Pe.style.position="relative";let ve=document.createElement("input");ve.type="text",Object.assign(ve.style,{width:"100%",padding:"8px 10px 8px 36px",borderRadius:"10px",border:"1px solid var(--divider-color)"});let Ae=document.createElement("ha-icon");Ae.setAttribute("icon","mdi:text"),Object.assign(Ae.style,{position:"absolute",left:"10px",top:"8px","--mdc-icon-size":"18px",width:"18px",height:"18px",opacity:".7"}),ve.value=(Je=Y[ee.key])!=null?Je:"",ve.addEventListener("input",async()=>{oe=this._shapeBySchema(N,{...oe,[ee.key]:ve.value||void 0}),yt(oe),ke==null||ke.setValue(oe)}),Pe.append(Ae,ve),qe.append(j,Pe)}if(ee.type==="textarea"){let Pe=document.createElement("textarea");Object.assign(Pe.style,{flex:"1",minHeight:"120px",padding:"8px 10px",borderRadius:"10px",border:"1px solid var(--divider-color)"}),Pe.value=(Qe=Y[ee.key])!=null?Qe:"",Pe.addEventListener("input",async()=>{oe=this._shapeBySchema(N,{...oe,[ee.key]:Pe.value||""}),yt(oe),ke==null||ke.setValue(oe)}),qe.append(j,Pe)}de.appendChild(qe)}),T.innerHTML="",T.appendChild(de)},wt=new WeakMap,Kt=N=>{if(!q)return;let Y=Array.isArray(N==null?void 0:N.visibility)?N.visibility.map(Oe=>({...Oe})):[],ue=()=>Fe(oe),Se=()=>{var Oe;Y=Y.filter(H=>H&&typeof H=="object"&&H.condition),oe={...oe,visibility:Y};try{ke==null||ke.setValue(oe)}catch{}try{(Oe=Me==null?void 0:Me.setConfig)==null||Oe.call(Me,oe)}catch{}yt(oe)},de=()=>{if(q.innerHTML="",!Y||!Y.length){let H=document.createElement("div");H.style.opacity=".7",H.style.fontSize=".9rem",H.style.marginBottom="8px",H.textContent="No conditions defined \u2013 this card is always visible.",q.appendChild(H)}Y.forEach((H,ee)=>{let qe=document.createElement("div");Object.assign(qe.style,{display:"flex",flexDirection:"column",gap:"6px",marginBottom:"12px",border:"1px solid var(--divider-color)",borderRadius:"8px",padding:"8px"});let j=document.createElement("div");Object.assign(j.style,{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"4px"});let Ze=document.createElement("div");Ze.style.display="flex",Ze.style.alignItems="center",Ze.style.gap="6px";let Xe=document.createElement("ha-icon"),nt="mdi:filter",je=H.condition||"state";je==="numeric_state"?nt="mdi:numeric":je==="screen"?nt="mdi:monitor":je==="user"?nt="mdi:account":je==="state"&&(nt="mdi:state-machine"),Xe.setAttribute("icon",nt);let at=document.createElement("span");at.style.fontWeight="bold",at.style.textTransform="capitalize",at.textContent=je==="numeric_state"?"Entity numeric state":je==="state"?"Entity state":je==="screen"?"Screen":"User",Ze.appendChild(Xe),Ze.appendChild(at),j.appendChild(Ze);let it=document.createElement("button");it.setAttribute("title","Remove condition"),it.innerHTML='<ha-icon icon="mdi:trash-can-outline"></ha-icon>',Object.assign(it.style,{border:"none",background:"transparent",cursor:"pointer",padding:"4px",display:"inline-flex",alignItems:"center"}),it.style.position="relative",it.style.zIndex="1000",it.addEventListener("click",Re=>{Re.preventDefault(),Re.stopPropagation();let Ce=Y.indexOf(H);Ce>-1&&Y.splice(Ce,1),oe.visibility=Y,de(),Se()}),j.appendChild(it),qe.appendChild(j);let rt=document.createElement("div");rt.style.display="flex",rt.style.gap="8px";let Je=document.createElement("label");Je.textContent="Type",Je.style.fontSize=".85rem",Je.style.marginRight="4px";let Qe=document.createElement("select");["state","numeric_state","screen","user"].forEach(Re=>{let Ce=document.createElement("option");Ce.value=Re,Ce.textContent=Re.replace("_"," "),Qe.appendChild(Ce)}),Qe.value=je,Qe.addEventListener("change",()=>{H.condition=Qe.value,delete H.entity,delete H.state,delete H.state_not,delete H.above,delete H.below,delete H.media_query,delete H.users,de(),Se()}),rt.appendChild(Je),rt.appendChild(Qe),qe.appendChild(rt);let Pe=document.createElement("div");Object.assign(Pe.style,{display:"flex",flexWrap:"wrap",gap:"8px",alignItems:"center"});let ve=(Re,Ce)=>{let se=document.createElement("div");se.style.display="flex",se.style.flexDirection="column",se.style.gap="4px",se.style.minWidth="150px";let ne=document.createElement("span");ne.textContent=Re,ne.style.fontSize=".75rem",se.appendChild(ne),se.appendChild(Ce),Pe.appendChild(se)};(()=>{var Re,Ce;if(Pe.innerHTML="",H.condition==="state"){let se;customElements.get("ha-entity-picker")?(se=document.createElement("ha-entity-picker"),se.hass=this.hass,se.setAttribute("label","Select entity"),se.removeAttribute("hide-clear-icon"),se.value=H.entity||"",se.addEventListener("value-changed",Q=>{Q.stopPropagation(),H.entity=Q.detail.value||"",Se()})):(se=document.createElement("input"),se.value=H.entity||"",se.addEventListener("input",()=>{H.entity=se.value.trim(),Se()}),Object.assign(se.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})),ve("Entity",se);let ne;if(customElements.get("ha-select")){ne=document.createElement("ha-select");let Q=document.createElement("mwc-list-item");Q.setAttribute("value","state"),Q.textContent="State is equal to";let W=document.createElement("mwc-list-item");W.setAttribute("value","state_not"),W.textContent="State is not equal to",ne.appendChild(Q),ne.appendChild(W),ne.value=H.state_not!=null?"state_not":"state",ne.addEventListener("selected",D=>{D.stopPropagation();let X=H.state_not!=null?H.state_not:H.state;ne.value==="state_not"?(H.state_not=X,delete H.state):(H.state=X,delete H.state_not),Se()})}else ne=document.createElement("select"),ne.innerHTML='<option value="state">State is equal to</option><option value="state_not">State is not equal to</option>',ne.value=H.state_not!=null?"state_not":"state",Object.assign(ne.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),ne.addEventListener("change",Q=>{Q.stopPropagation();let W=H.state_not!=null?H.state_not:H.state;ne.value==="state_not"?(H.state_not=W,delete H.state):(H.state=W,delete H.state_not),Se()});ve("Match type",ne);let Z;customElements.get("ha-textfield")?(Z=document.createElement("ha-textfield"),Z.value=(H.state_not!=null?H.state_not:H.state)||"",Z.setAttribute("label",""),Z.addEventListener("input",Q=>{Q.stopPropagation();let W=ne.value;H[W]=Z.value;let D=W==="state"?"state_not":"state";delete H[D],Se()})):(Z=document.createElement("input"),Z.value=(H.state_not!=null?H.state_not:H.state)||"",Object.assign(Z.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),Z.addEventListener("input",Q=>{Q.stopPropagation();let W=ne.value;H[W]=Z.value;let D=W==="state"?"state_not":"state";delete H[D],Se()})),ve("State",Z)}else if(H.condition==="numeric_state"){let se;customElements.get("ha-entity-picker")?(se=document.createElement("ha-entity-picker"),se.hass=this.hass,se.setAttribute("label","Select entity"),se.removeAttribute("hide-clear-icon"),se.value=H.entity||"",se.addEventListener("value-changed",Q=>{Q.stopPropagation(),H.entity=Q.detail.value||"",Se()})):(se=document.createElement("input"),se.value=H.entity||"",se.addEventListener("input",()=>{H.entity=se.value.trim(),Se()}),Object.assign(se.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})),ve("Entity",se);let ne;customElements.get("ha-textfield")?(ne=document.createElement("ha-textfield"),ne.setAttribute("type","number"),ne.value=H.above!=null?H.above:"",ne.addEventListener("input",Q=>{Q.stopPropagation();let W=ne.value;W===""||isNaN(Number(W))?delete H.above:H.above=Number(W),Se()})):(ne=document.createElement("input"),ne.type="number",ne.value=H.above!=null?H.above:"",Object.assign(ne.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),ne.addEventListener("input",()=>{let Q=ne.value;Q===""||isNaN(Number(Q))?delete H.above:H.above=Number(Q),Se()})),ve("Above",ne);let Z;customElements.get("ha-textfield")?(Z=document.createElement("ha-textfield"),Z.setAttribute("type","number"),Z.value=H.below!=null?H.below:"",Z.addEventListener("input",Q=>{Q.stopPropagation();let W=Z.value;W===""||isNaN(Number(W))?delete H.below:H.below=Number(W),Se()})):(Z=document.createElement("input"),Z.type="number",Z.value=H.below!=null?H.below:"",Object.assign(Z.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),Z.addEventListener("input",()=>{let Q=Z.value;Q===""||isNaN(Number(Q))?delete H.below:H.below=Number(Q),Se()})),ve("Below",Z)}else if(H.condition==="screen"){let se=document.createElement("select"),ne=[{label:"Custom",value:""},{label:"Mobile (max-width: 599px)",value:"(max-width: 599px)"},{label:"Tablet (600px - 991px)",value:"(min-width: 600px) and (max-width: 991px)"},{label:"Desktop (min-width: 992px)",value:"(min-width: 992px)"}];if(ne.forEach(Z=>{let Q=document.createElement("option");Q.value=Z.value,Q.textContent=Z.label,se.appendChild(Q)}),se.value=(Ce=(Re=ne.find(Z=>Z.value===(H.media_query||"")))==null?void 0:Re.value)!=null?Ce:"",se.addEventListener("change",()=>{H.media_query=se.value,Se()}),ve("Screen size",se),se.value===""){let Z=document.createElement("input");Z.placeholder="e.g. (min-width: 1280px)",Z.value=H.media_query||"",Z.addEventListener("input",()=>{H.media_query=Z.value,Se()}),ve("Custom query",Z)}}else if(H.condition==="user"){let se;customElements.get("ha-user-picker")?(se=document.createElement("ha-user-picker"),se.hass=this.hass,se.value=Array.isArray(H.users)?H.users:[],se.addEventListener("value-changed",ne=>{H.users=Array.isArray(ne.detail.value)?ne.detail.value:[ne.detail.value],Se()})):(se=document.createElement("input"),se.value=Array.isArray(H.users)?H.users.join(","):"",se.addEventListener("input",()=>{H.users=se.value.split(",").map(ne=>ne.trim()).filter(Boolean),Se()})),ve("Users",se)}})(),qe.appendChild(Pe),q.appendChild(qe)});let Oe=document.createElement("button");Oe.className="btn",Oe.innerHTML='<ha-icon icon="mdi:plus"></ha-icon><span style="margin-left:6px">Add condition</span>',Object.assign(Oe.style,{marginTop:"8px"}),Oe.addEventListener("click",()=>{Y.push({condition:"state",entity:"",state:""}),oe.visibility=Y,de(),Se()}),q.appendChild(Oe)};de()},Fe=N=>{if(!q)return;let Y=Array.isArray(N==null?void 0:N.visibility)?N.visibility:[],ue=null,Se=async()=>{if(ue)return ue;try{if(this.hass&&typeof this.hass.callWS=="function")try{let ee=await this.hass.callWS({type:"config/auth/list"});if(Array.isArray(ee))return ue=ee,ee}catch{}if(this.hass&&typeof this.hass.callApi=="function")try{let ee=await this.hass.callApi("get","users");if(Array.isArray(ee))return ue=ee,ee}catch{}let H=[];if(this.hass&&this.hass.users&&Array.isArray(this.hass.users)&&H.push(...this.hass.users),this.hass&&this.hass.userData&&Array.isArray(this.hass.userData.users)&&H.push(...this.hass.userData.users),this.hass&&this.hass.authorizedUsers&&Array.isArray(this.hass.authorizedUsers)&&H.push(...this.hass.authorizedUsers),H.length){let ee=new Map;H.forEach(j=>{let Ze=j.id||j.user_id||j.uid||j.name||"";ee.has(Ze)||ee.set(Ze,j)});let qe=Array.from(ee.values());return ue=qe,qe}}catch{}return ue=[],[]},de=()=>{var H;Y=Y.filter(ee=>ee&&typeof ee=="object"&&ee.condition),oe.visibility=Y;try{ke==null||ke.setValue(oe)}catch{}try{(H=Me==null?void 0:Me.setConfig)==null||H.call(Me,oe)}catch{}yt(oe)},Oe=()=>{q.innerHTML="";let H=document.createElement("div");H.style.opacity=".75",H.style.fontSize=".85rem",H.style.marginBottom="12px",H.textContent="The card will be shown when ALL conditions below are fulfilled. If no conditions are set, the card will always be shown.",q.appendChild(H);let ee=(j,Ze)=>{j.forEach((je,at)=>{qe(je,j,at,Ze)});let Xe=document.createElement("div");Xe.style.marginTop="8px";let nt=document.createElement("button");nt.className="btn",nt.innerHTML='<ha-icon icon="mdi:plus"></ha-icon><span style="margin-left:6px">Add condition</span>',Object.assign(nt.style,{display:"flex",alignItems:"center",gap:"6px",padding:"6px 12px",border:"none",borderRadius:"20px",background:"var(--primary-color)",color:"var(--text-primary-color, #fff)",cursor:"pointer",fontWeight:"500"}),nt.addEventListener("click",je=>{je.stopPropagation();let at=Xe.querySelector(".add-menu");if(at){at.remove();return}let it=document.createElement("div");it.className="add-menu",Object.assign(it.style,{position:"relative",marginTop:"4px",border:"1px solid var(--divider-color)",borderRadius:"8px",background:"var(--card-background-color, var(--secondary-background-color))",boxShadow:"0 2px 4px rgba(0,0,0,0.2)"}),[{type:"numeric_state",label:"Entity numeric state",icon:"mdi:numeric"},{type:"state",label:"Entity state",icon:"mdi:state-machine"},{type:"screen",label:"Screen",icon:"mdi:monitor"},{type:"user",label:"User",icon:"mdi:account"},{type:"and",label:"And",icon:"mdi:logic-and"},{type:"or",label:"Or",icon:"mdi:logic-or"}].forEach(Je=>{let Qe=document.createElement("div");Qe.style.display="flex",Qe.style.alignItems="center",Qe.style.gap="8px",Qe.style.padding="6px 12px",Qe.style.cursor="pointer",Qe.addEventListener("mouseenter",()=>Qe.style.background="var(--hover-color, #444)"),Qe.addEventListener("mouseleave",()=>Qe.style.background=""),Qe.addEventListener("click",()=>{it.remove();let Ae;Je.type==="and"||Je.type==="or"?Ae={condition:Je.type,conditions:[]}:Je.type==="state"?Ae={condition:"state",entity:"",state:""}:Je.type==="numeric_state"?Ae={condition:"numeric_state",entity:""}:Je.type==="screen"?Ae={condition:"screen",media_query:""}:Je.type==="user"&&(Ae={condition:"user",users:[]}),j.push(Ae),wt.set(Ae,!0),de(),Oe()});let Pe=document.createElement("ha-icon");Pe.setAttribute("icon",Je.icon),Qe.appendChild(Pe);let ve=document.createElement("span");ve.textContent=Je.label,Qe.appendChild(ve),it.appendChild(Qe)}),Xe.appendChild(it)}),Xe.appendChild(nt),Ze.appendChild(Xe)},qe=(j,Ze,Xe,nt)=>{let je=j.condition||"state",at=wt.get(j);at===void 0&&(at=Y.length===1);let it=document.createElement("div");Object.assign(it.style,{display:"flex",flexDirection:"column",border:"1px solid var(--divider-color)",borderLeft:"3px solid var(--primary-color)",borderRadius:"12px",padding:"16px",marginBottom:"20px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",boxShadow:"var(--ha-card-box-shadow, 0 2px 6px rgba(0, 0, 0, 0.15))"});let rt=document.createElement("div");rt.style.display="flex",rt.style.alignItems="center",rt.style.justifyContent="space-between",rt.style.marginBottom="8px",rt.style.borderBottom="1px solid var(--divider-color)",rt.style.paddingBottom="4px",rt.style.position="relative";let Je=document.createElement("div");Je.style.display="flex",Je.style.alignItems="center",Je.style.gap="6px";let Qe=document.createElement("button");Qe.innerHTML=`<ha-icon icon="${at?"mdi:chevron-down":"mdi:chevron-right"}"></ha-icon>`,Object.assign(Qe.style,{border:"none",background:"transparent",cursor:"pointer",padding:"4px",display:"inline-flex",alignItems:"center"}),Qe.addEventListener("click",Ce=>{Ce.stopPropagation(),wt.set(j,!at),Oe()}),Je.appendChild(Qe);let Pe=document.createElement("ha-icon"),ve="mdi:filter";je==="numeric_state"?ve="mdi:numeric":je==="screen"?ve="mdi:monitor":je==="user"?ve="mdi:account":je==="state"?ve="mdi:state-machine":je==="and"?ve="mdi:logic-and":je==="or"&&(ve="mdi:logic-or"),Pe.setAttribute("icon",ve),Je.appendChild(Pe);let Ae=document.createElement("span");Ae.style.fontWeight="600",Ae.style.fontSize="0.95rem",Ae.style.textTransform="capitalize",Ae.textContent=je==="numeric_state"?"Entity numeric state":je==="state"?"Entity state":je==="screen"?"Screen":je==="user"?"User":je==="and"?"And":"Or",Je.appendChild(Ae),rt.appendChild(Je);let Re=document.createElement("button");if(Re.setAttribute("title","Remove condition"),Re.innerHTML='<ha-icon icon="mdi:trash-can-outline"></ha-icon>',Object.assign(Re.style,{border:"none",background:"transparent",cursor:"pointer",padding:"4px",display:"inline-flex",alignItems:"center"}),Re.style.position="relative",Re.style.zIndex="1000",Re.addEventListener("click",Ce=>{Ce.preventDefault(),Ce.stopPropagation();let se=Ze.indexOf(j);se>-1&&Ze.splice(se,1),de(),Oe()}),rt.appendChild(Re),it.appendChild(rt),je!=="and"&&je!=="or"){if(at){let Ce=document.createElement("div");Object.assign(Ce.style,{display:"flex",flexDirection:"column",gap:"14px",alignItems:"stretch"});let se=(ne,Z)=>{let Q=document.createElement("div");Q.style.display="flex",Q.style.flexDirection="column",Q.style.gap="4px";let W=document.createElement("span");W.textContent=ne,W.style.fontSize=".75rem",Q.appendChild(W),Q.appendChild(Z),Ce.appendChild(Q);let D=(Z.tagName||"").toLowerCase();(D==="input"||D==="select")&&Object.assign(Z.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})};if(j.condition==="state"){let ne=document.createElement("ha-entity-picker");ne.value=j.entity||"",ne.hass=this.hass,ne.setAttribute("label","Select entity"),ne.addEventListener("value-changed",W=>{j.entity=W.detail.value||"",de()}),customElements.get("ha-entity-picker")||customElements.whenDefined("ha-entity-picker").then(()=>{Oe()}).catch(()=>{}),se("Entity",ne);let Z;if(customElements.get("ha-select")){Z=document.createElement("ha-select");let W=document.createElement("mwc-list-item");W.setAttribute("value","state"),W.textContent="State is equal to";let D=document.createElement("mwc-list-item");D.setAttribute("value","state_not"),D.textContent="State is not equal to",Z.appendChild(W),Z.appendChild(D),Z.value=j.state_not!=null?"state_not":"state",Z.addEventListener("selected",X=>{X.stopPropagation();let ie=j.state_not!=null?j.state_not:j.state;Z.value==="state_not"?(j.state_not=ie,delete j.state):(j.state=ie,delete j.state_not),de()})}else Z=document.createElement("select"),Z.innerHTML='<option value="state">State is equal to</option><option value="state_not">State is not equal to</option>',Z.value=j.state_not!=null?"state_not":"state",Z.addEventListener("change",W=>{W.stopPropagation();let D=j.state_not!=null?j.state_not:j.state;Z.value==="state_not"?(j.state_not=D,delete j.state):(j.state=D,delete j.state_not),de()}),Object.assign(Z.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"});se("Match type",Z);let Q;customElements.get("ha-textfield")?(Q=document.createElement("ha-textfield"),Q.value=(j.state_not!=null?j.state_not:j.state)||"",Q.setAttribute("label",""),Q.addEventListener("input",W=>{W.stopPropagation();let D=Z.value;j[D]=Q.value;let X=D==="state"?"state_not":"state";delete j[X],de()})):(Q=document.createElement("input"),Q.value=(j.state_not!=null?j.state_not:j.state)||"",Object.assign(Q.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),Q.addEventListener("input",W=>{W.stopPropagation();let D=Z.value;j[D]=Q.value;let X=D==="state"?"state_not":"state";delete j[X],de()})),se("State",Q)}else if(j.condition==="numeric_state"){let ne=document.createElement("ha-entity-picker");ne.value=j.entity||"",ne.hass=this.hass,ne.setAttribute("label","Select entity"),ne.removeAttribute("hide-clear-icon"),ne.addEventListener("value-changed",W=>{j.entity=W.detail.value||"",de()}),customElements.get("ha-entity-picker")||customElements.whenDefined("ha-entity-picker").then(()=>{Oe()}).catch(()=>{}),se("Entity",ne);let Z;customElements.get("ha-textfield")?(Z=document.createElement("ha-textfield"),Z.setAttribute("type","number"),Z.value=j.above!=null?j.above:"",Z.addEventListener("input",W=>{W.stopPropagation();let D=Z.value;D===""||isNaN(Number(D))?delete j.above:j.above=Number(D),de()})):(Z=document.createElement("input"),Z.type="number",Z.value=j.above!=null?j.above:"",Object.assign(Z.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),Z.addEventListener("input",()=>{let W=Z.value;W===""||isNaN(Number(W))?delete j.above:j.above=Number(W),de()})),se("Above",Z);let Q;customElements.get("ha-textfield")?(Q=document.createElement("ha-textfield"),Q.setAttribute("type","number"),Q.value=j.below!=null?j.below:"",Q.addEventListener("input",W=>{W.stopPropagation();let D=Q.value;D===""||isNaN(Number(D))?delete j.below:j.below=Number(D),de()})):(Q=document.createElement("input"),Q.type="number",Q.value=j.below!=null?j.below:"",Object.assign(Q.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),Q.addEventListener("input",()=>{let W=Q.value;W===""||isNaN(Number(W))?delete j.below:j.below=Number(W),de()})),se("Below",Q)}else if(j.condition==="screen"){let ne=[{label:"Mobile",query:"(max-width: 599px)"},{label:"Tablet (min: 768px)",query:"(min-width: 768px)"},{label:"Desktop (min: 1024px)",query:"(min-width: 1024px)"},{label:"Wide (min: 1280px)",query:"(min-width: 1280px)"}];Array.isArray(j.media_query_list)||(j.media_query_list=[]);let Z=document.createElement("div");Z.style.display="flex",Z.style.flexDirection="column",Z.style.gap="4px",ne.forEach(Q=>{let W=document.createElement("label");W.style.display="flex",W.style.alignItems="center",W.style.gap="6px";let D=document.createElement("input");D.type="checkbox",D.checked=j.media_query_list.includes(Q.query),D.addEventListener("change",()=>{D.checked?j.media_query_list.push(Q.query):j.media_query_list=j.media_query_list.filter(ie=>ie!==Q.query),j.media_query=j.media_query_list.join(","),de()});let X=document.createElement("span");X.textContent=Q.label,W.appendChild(D),W.appendChild(X),Z.appendChild(W)}),se("Screen sizes",Z)}else if(j.condition==="user"){let ne;if(customElements.get("ha-user-picker"))ne=document.createElement("ha-user-picker"),ne.hass=this.hass,ne.setAttribute("label","Select user"),ne.value=Array.isArray(j.users)?j.users:[],ne.addEventListener("value-changed",Z=>{let Q=Z.detail.value;j.users=Array.isArray(Q)?Q:[Q],de()});else{ne=document.createElement("div"),ne.style.display="flex",ne.style.flexDirection="column",ne.style.gap="4px";let Z=document.createElement("span");Z.style.opacity="0.7",Z.style.fontSize=".85rem",Z.textContent="Loading users\u2026",ne.appendChild(Z);let Q=Array.isArray(j.users)?j.users:[];Se().then(W=>{if(ne.innerHTML="",Array.isArray(W)&&W.length)W.forEach(D=>{let X=D.id||D.user_id||D.uid||D.name||"",ie=D.name||X,pe=document.createElement("label");pe.style.display="flex",pe.style.alignItems="center",pe.style.gap="6px",pe.style.padding="4px 0";let me=document.createElement("input");me.type="checkbox",me.checked=Q.includes(X)||Q.includes(ie),me.addEventListener("change",()=>{let fe=Array.isArray(j.users)?j.users.slice():[];me.checked?fe.includes(X)||fe.push(X):fe=fe.filter(He=>He!==X&&He!==ie),j.users=fe,de()});let ge=document.createElement("span");ge.textContent=ie,pe.appendChild(me),pe.appendChild(ge),ne.appendChild(pe)});else{let D=document.createElement("input");D.value=Array.isArray(j.users)?j.users.join(","):"",Object.assign(D.style,{padding:"6px 10px",borderRadius:"6px",border:"1px solid var(--divider-color)",background:"var(--card-background-color, var(--secondary-background-color))",color:"var(--primary-text-color, inherit)"});let X=()=>{j.users=D.value.split(",").map(ie=>ie.trim()).filter(Boolean),de()};D.addEventListener("change",X),D.addEventListener("blur",X),ne.appendChild(D)}})}se("Users",ne)}it.appendChild(Ce)}}else if(at){Array.isArray(j.conditions)||(j.conditions=[]);let Ce=document.createElement("div");Ce.style.marginLeft="16px",ee(j.conditions,Ce),it.appendChild(Ce)}nt.appendChild(it)};ee(Y,q)};Oe()},yt=N=>{if(((N==null?void 0:N.type)||"")==="custom_card"){dt=JSON.stringify(N||{}),x.innerHTML='<div style="opacity:.6;font-size:.9rem;padding:8px">Preview not available for the custom card placeholder. Use the YAML editor.</div>',$.hidden=!0;return}let Y=JSON.stringify(N||{});Y!==dt&&(dt=Y,Bt&&clearTimeout(Bt),Bt=setTimeout(async()=>{let ue=++mt;$.hidden=!1,x.innerHTML="",await Mr();try{let Se=await this._helpersPromise||await window.loadCardHelpers();if(ue!==mt)return;let de=Se.createCardElement(N);if(de.hass=this.hass,ue!==mt)return;x.appendChild(de)}catch{}finally{ue===mt&&($.hidden=!0)}},150))},Ot=async N=>{var Se;let Y=++mt;S.hidden=!1,w.innerHTML="",await lc();let ue=N.type||Ye;if(gt=await this._getEditorElementForType(ue,N),ue==="custom_card"){let de=document.createElement("div");return de.style.opacity=".7",de.style.fontSize=".9rem",de.textContent="Custom card placeholder: use the YAML editor to paste the card type and options.",w.appendChild(de),Me=null,ct!=="yaml"&&ae("yaml"),re(!0),S.hidden=!0,!1}if(!gt){let de=document.createElement("div");return de.style.opacity=".7",de.style.fontSize=".9rem",de.textContent="This card does not support a visual editor. Please use the YAML tab to configure it.",Y===mt&&(w.appendChild(de),S.hidden=!0),Me=null,re(!0),ct!=="visual"&&ae("yaml"),!1}try{gt.hass=this.hass,gt.isConnected||w.appendChild(gt),await Promise.resolve();try{gt.setConfig(N)}catch{}try{let Oe=await this._helpersPromise||await window.loadCardHelpers(),H=Oe.getCardElementClass?await Oe.getCardElementClass(N.type||Ye):null;if(H!=null&&H.getStubConfig){let ee=Object.keys(((Se=this.hass)==null?void 0:Se.states)||{}),qe=Ze=>ee.filter(Xe=>Xe.startsWith(Ze+".")),j=await H.getStubConfig(this.hass,ee,qe);j&&(N=this._shapeBySchema(N.type||Ye,{...j}))}}catch{}await Promise.resolve();try{gt.setConfig(N)}catch{}Me&&this.__onEditorChange&&(Me.removeEventListener("config-changed",this.__onEditorChange),Me.removeEventListener("value-changed",this.__onEditorChange));let de=async Oe=>{var qe,j,Ze;let H=(Ze=(qe=Oe.detail)==null?void 0:qe.config)!=null?Ze:(j=Oe.detail)==null?void 0:j.value;if(!H)return;let ee=H.type||Ye;Ye=ee,oe=this._shapeBySchema(ee,H),F(""),re(!0),Tt(Ye,oe),yt(oe),ke==null||ke.setValue(oe)};return this.__onEditorChange=de,gt.addEventListener("config-changed",de),gt.addEventListener("value-changed",de),Me=gt,ct!=="yaml"&&ae("visual"),re(!0),!0}finally{Y===mt&&(S.hidden=!0)}},ti=async N=>{ke=await this._mountYamlEditor(L,N,async Y=>{var ue,Se;try{let de=(Y==null?void 0:Y.type)||Ye,Oe=this._shapeBySchema(de,Y||{}),H=de!==Ye;if(Ye=de,oe=Oe,C.hidden=!0,C.textContent="",re(!0),H){if(Tt(Ye,oe),Me){try{(ue=Me.setConfig)==null||ue.call(Me,oe)}catch{}ct!=="yaml"&&ae("visual")}try{Fe(oe)}catch{}}else{try{(Se=Me==null?void 0:Me.setConfig)==null||Se.call(Me,oe)}catch{}yt(oe);try{Fe(oe)}catch{}}}catch(de){C.hidden=!1,C.textContent=`Invalid config: ${String((de==null?void 0:de.message)||de)}`,re(!1)}},Y=>{C.hidden=!1,C.textContent=`Invalid YAML: ${String((Y==null?void 0:Y.message)||Y)}`,re(!1)})},zt=async N=>{if(this.__stubCache.has(N))return{...this.__stubCache.get(N)};let Y=await this._getStubConfigForType(N);return this.__stubCache.set(N,{...Y}),{...Y}},Rt=async N=>{C.hidden=!0,C.textContent="",F(""),Ye=N;try{typeof st=="function"&&st(N)}catch{}let Y=t==="edit"&&n&&n.type===N?{...n}:await zt(N);oe=this._shapeBySchema(N,Y),Me=null,Tt(N,oe),await ti(oe),await Mr(),yt(oe);try{Fe(oe)}catch{}try{let ue=await Ot(oe);ae(ue?"visual":"yaml")}catch{ae("yaml")}re(!0)},pt=async()=>{if(!oe)return;let N=this._shapeBySchema(Ye,oe);t==="edit"&&typeof o=="function"?await o(N):(await this._addPickedCardToLayout(N),this._pushRecent((N||{}).type)),c()};v.addEventListener("click",c),m.addEventListener("click",c),u.addEventListener("click",pt),f.addEventListener("click",pt),s.addEventListener("keydown",N=>{N.key==="Escape"&&c(),N.key==="Enter"&&!u.disabled&&pt()});let Dt=null;y.addEventListener("input",()=>{Dt&&clearTimeout(Dt),Dt=setTimeout(lt,120)}),lt(),await Rt((()=>{var ue;return(((ue=this._getRecent)==null?void 0:ue.call(this))||[]).find(Boolean)||"entities"})()),re(!0),t==="edit"&&n&&(await Rt(n.type||"entities"),re(!0))}async _getStubConfigForType(t){var v;let n=await this._helpersPromise||await window.loadCardHelpers(),o=null;if(t==="custom_card")return null;try{n.getCardElementClass&&(o=await n.getCardElementClass(t))}catch{}let c=Object.keys(((v=this.hass)==null?void 0:v.states)||{}),s=m=>c.filter(y=>y.startsWith(m+".")),d={type:t};if(o!=null&&o.getStubConfig)try{let m=await o.getStubConfig(this.hass,c,s);if(t!=="entity")return m;m&&typeof m=="object"&&(d={...d,...m})}catch{}let u=c[0],f=s("sensor")[0]||u;if(["entity","sensor","button","gauge","tile","light","thermostat","media-control","alarm-panel","picture-entity","weather-forecast","map"].includes(t)){let m={sensor:f,gauge:s("sensor").find(this._isNumericEntity.bind(this))||f,"media-control":s("media_player")[0]||u,light:s("light")[0]||u,thermostat:s("climate")[0]||u,"alarm-panel":s("alarm_control_panel")[0]||u,"weather-forecast":s("weather")[0]||u,map:s("device_tracker")[0]||s("person")[0]||u}[t]||f||u;["entity","sensor","button","gauge","tile","light","thermostat","media-control","alarm-panel","picture-entity"].includes(t)?d.entity=m:t==="weather-forecast"?(d.entity=m,d.show_current=!0,d.show_forecast=!0,d.forecast_type="daily"):t==="map"&&(d.entities=[m].filter(Boolean),d.theme_mode="auto")}if(["entities","glance","picture-glance","history-graph","statistics-graph"].includes(t)){let m=y=>(y!=null&&y.length?c.filter(x=>y.includes(x.split(".")[0])):c).slice(0,3);t==="statistics-graph"?d.entities=m(["sensor","number","input_number"]):d.entities=m()}if(t==="markdown"&&(d.content="Markdown card"),t==="sensor"&&(d.graph="line"),t==="button"&&(d.show_name=!0,d.show_icon=!0),t==="tile"&&(d.features_position="bottom",d.vertical=!1),t==="picture-glance"&&(d.title=d.title||"Glance",d.image=d.image||"https://demo.home-assistant.io/stub_config/kitchen.png"),t==="picture-entity"&&(d.image=d.image||"https://demo.home-assistant.io/stub_config/bedroom.png"),t==="iframe"&&(d.url=d.url||"https://www.home-assistant.io",d.aspect_ratio=d.aspect_ratio||"50%"),t==="alarm-panel"&&(d.states=d.states||["arm_home","arm_away"]),t==="area")try{let m=this.hass&&this.hass.areas?Object.values(this.hass.areas):[];m.length?d.area=m[0].area_id||m[0].name||m[0].id:d.area=u?u.split(".")[0]:"default_area",d.display_type="picture",d.alert_classes=d.alert_classes||["moisture","motion"],d.sensor_classes=d.sensor_classes||["temperature","humidity"],d.features_position="bottom"}catch{}return d}_getNextAvailablePosition(){let t=Array.from(this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)")),n=new Set,o=this.gridSize;t.forEach(d=>{let u=parseFloat(d.getAttribute("data-x"))||0,f=parseFloat(d.getAttribute("data-y"))||0,v=parseFloat(getComputedStyle(d).width)||100,m=parseFloat(getComputedStyle(d).height)||100,y=Math.floor(u/o),x=Math.floor(f/o),w=Math.floor((u+v)/o),S=Math.floor((f+m)/o);for(let T=y;T<w;T++)for(let L=x;L<S;L++)n.add(`${T}-${L}`)});let c=0,s=0;for(;n.has(`${c}-${s}`);)c+=6,c>60&&(c=0,s+=6);return{x:c*o,y:s*o}}async _addPickedCardToLayout(t){this._hideEmptyPlaceholder();let n=await this._createCard(t),o=this._makeWrapper(n),c=this._getNextAvailablePosition();this._setCardPosition(o,c.x,c.y),o.style.width=`${14*this.gridSize}px`,o.style.height=`${10*this.gridSize}px`;{let s=this._highestZ()+1;o.style.zIndex=String(Math.max(s,6))}this.cardContainer.appendChild(o);try{this._rebuildOnce(o.firstElementChild)}catch{}this._initCardInteract(o),this._resizeContainer(),this._queueSave("add"),this._toast("Card added to layout."),this._syncEmptyStateUI();try{this._applyVisibility_()}catch{}}_toggleSelection(t,n=null){let o=n==null?!this._selection.has(t):!!n;o?this._selection.add(t):this._selection.delete(t),t.classList.toggle("selected",o)}_clearSelection(){for(let t of this._selection)t.classList.remove("selected");this._selection.clear()}_copySelection(){var t,n,o;try{let c=this._selection?Array.from(this._selection):[];if(!c.length){(t=this._toast)==null||t.call(this,"Nothing selected to copy.");return}let s=1/0,d=1/0,u=[];for(let f of c){if(f.dataset.placeholder)continue;let v=parseFloat(f.getAttribute("data-x"))||0,m=parseFloat(f.getAttribute("data-y"))||0;v<s&&(s=v),m<d&&(d=m)}for(let f of c){if(f.dataset.placeholder)continue;let v=this._extractCardConfig(f.firstElementChild)||{},m=parseFloat(f.getAttribute("data-x"))||0,y=parseFloat(f.getAttribute("data-y"))||0,x=f.style.width||`${f.getBoundingClientRect().width}px`,w=f.style.height||`${f.getBoundingClientRect().height}px`;u.push({cfg:v,dx:m-s,dy:y-d,width:x,height:w})}window.__DDC_CLIPBOARD__={items:u},(n=this._toast)==null||n.call(this,`Copied ${u.length} card${u.length===1?"":"s"}.`)}catch(c){console.warn("[drag-and-drop-card] Copy failed",c),(o=this._toast)==null||o.call(this,"Copy failed.")}}async _pasteClipboard(){var t,n,o,c;try{let s=window.__DDC_CLIPBOARD__;if(!s||!Array.isArray(s.items)||!s.items.length){(t=this._toast)==null||t.call(this,"Clipboard is empty.");return}let d=s.items,u=1,f;do{let y=this.gridSize*u,x=this.gridSize*u;f=d.map(w=>{let S=parseFloat(w.width)||0,T=parseFloat(w.height)||0;return{x:y+(w.dx||0),y:x+(w.dy||0),w:S,h:T}}),u+=1}while(this._anyCollisionFor(f,new Set));let v=this.gridSize*(u-1),m=this.gridSize*(u-1);for(let y of d){let x=y.cfg||{},w=await this._createCard(x),S=this._makeWrapper(w);S.style.width=y.width,S.style.height=y.height;let T=v+(y.dx||0),L=m+(y.dy||0);this._setCardPosition(S,T,L);{let C=this._highestZ()+1;S.style.zIndex=String(Math.max(C,6))}try{let C=this._normalizeTabId(this.activeTab||this.defaultTab);C&&(S.dataset.tabId=C)}catch{}this.cardContainer.appendChild(S);try{this._rebuildOnce(S.firstElementChild)}catch{}this._initCardInteract(S)}this._resizeContainer(),this._applyActiveTab(),(n=this._queueSave)==null||n.call(this,"paste"),(o=this._toast)==null||o.call(this,`Pasted ${d.length} card${d.length===1?"":"s"}.`)}catch(s){console.warn("[drag-and-drop-card] Paste failed",s),(c=this._toast)==null||c.call(this,"Paste failed.")}}_installSelectionMarquee(){let t=this.cardContainer,n=0,o=0,c=null,s=!1,d=y=>{let x=t.getBoundingClientRect(),w="touches"in y&&y.touches[0]?y.touches[0].clientX:y.clientX,S="touches"in y&&y.touches[0]?y.touches[0].clientY:y.clientY,T=this.__pointerScaleX||1,L=this.__pointerScaleY||1;return{x:(w-x.left)/T,y:(S-x.top)/L}},u=(y,x)=>{let w=Math.min(y,n),S=Math.max(y,n),T=Math.min(x,o),L=Math.max(x,o);c.style.left=`${w}px`,c.style.top=`${T}px`,c.style.width=`${S-w}px`,c.style.height=`${L-T}px`;let C=c.getBoundingClientRect(),O=t.querySelectorAll(".card-wrapper:not(.ddc-placeholder)");this._clearSelection(),O.forEach(M=>{let _=M.getBoundingClientRect();!(_.right<C.left||_.left>C.right||_.bottom<C.top||_.top>C.bottom)&&this._toggleSelection(M,!0)})},f=y=>{if(!this.editMode||y.target.closest(".card-wrapper"))return;s=!0;let x=d(y);n=x.x,o=x.y,c=document.createElement("div"),c.className="marquee",c.style.left=`${n}px`,c.style.top=`${o}px`,t.appendChild(c),y.preventDefault()},v=y=>{!s||!c||u(d(y).x,d(y).y)},m=()=>{s&&(s=!1,c&&c.remove(),c=null)};t.addEventListener("mousedown",f),window.addEventListener("mousemove",v),window.addEventListener("mouseup",m),t.addEventListener("touchstart",y=>{this.editMode&&(y.target.closest(".card-wrapper")||f(y))},{passive:!1}),window.addEventListener("touchmove",y=>{v(y)},{passive:!0}),window.addEventListener("touchend",m),window.addEventListener("touchcancel",m)}async _openDiagnostics(){var u,f;let t=document.createElement("div");t.className="modal";let n=this.storageKey||"(none)",o=this._backendOK&&!!this.storageKey,c=v=>v.slice(-200).map(m=>`<div style="font-family:monospace;font-size:.85rem;line-height:1.3">
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
      </div>`;let s=()=>t.remove();t.querySelector("#closeDiag").addEventListener("click",s),this.shadowRoot.appendChild(t);let d=()=>{let v=t.querySelector("#logArea"),m=y=>y.slice(-200).map(x=>`<div style="font-family:monospace;font-size:.85rem;line-height:1.3">
          <span style="opacity:.6">${x.t}</span>
          <b style="margin-left:6px;color:#03a9f4">[${x.kind}]</b>
          <span style="margin-left:6px">${this._safe(x.msg)}</span>
          ${x.extra?`<pre style="margin:4px 0 0 0;white-space:pre-wrap;background:var(--card-background-color);border:1px solid var(--divider-color);border-radius:8px;padding:6px;max-height:160px;overflow:auto">${this._safe(JSON.stringify(x.extra,null,2))}</pre>`:""}
        </div>`).join("");v.innerHTML=m(this._dbgDump()),v.scrollTop=v.scrollHeight};t.querySelector("#refreshKeys").addEventListener("click",async()=>{try{this._dbgPush("probe","Manual refresh"),await this._probeBackend()}finally{d()}}),t.querySelector("#forceSave").addEventListener("click",async()=>{await this._saveLayout(!1),d()}),t.querySelector("#exportJson").addEventListener("click",()=>{let m=Array.from(this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)")).map(S=>{let T=parseFloat(S.getAttribute("data-x"))||0,L=parseFloat(S.getAttribute("data-y"))||0,C=parseFloat(S.style.width)||S.getBoundingClientRect().width,O=parseFloat(S.style.height)||S.getBoundingClientRect().height,M=parseInt(S.style.zIndex||"1",10),_=this._extractCardConfig(S.firstElementChild),P=S.dataset.tabId||this.defaultTab;return{card:_,position:{x:T,y:L},size:{width:C,height:O},z:M,tabId:P}}),y={version:2,options:this._exportableOptions(),cards:m},x=new Blob([JSON.stringify(y,null,2)],{type:"application/json"}),w=document.createElement("a");w.href=URL.createObjectURL(x),w.download=`ddc_${this.storageKey||"layout"}.json`,w.click(),URL.revokeObjectURL(w.href)}),t.querySelector("#importJson").addEventListener("click",async()=>{let v=document.createElement("input");v.type="file",v.accept="application/json",v.onchange=async()=>{var w,S,T,L,C,O,M,_,P,R,q,K,$;let m=(w=v.files)==null?void 0:w[0];if(!m)return;let y=await m.text();try{let re=JSON.parse(y);if(this._dbgPush("import","Loaded file",{bytes:y.length}),this.cardContainer.innerHTML="",(S=re.cards)!=null&&S.length)for(let F of re.cards)if(!(F!=null&&F.card)||typeof F.card=="object"&&Object.keys(F.card).length===0){let U=this._makePlaceholderAt(((T=F.position)==null?void 0:T.x)||0,((L=F.position)==null?void 0:L.y)||0,((C=F.size)==null?void 0:C.width)||200,((O=F.size)==null?void 0:O.height)||200);this.cardContainer.appendChild(U)}else{let U=await this._createCard(F.card),V=this._makeWrapper(U);this._setCardPosition(V,((M=F.position)==null?void 0:M.x)||0,((_=F.position)==null?void 0:_.y)||0),V.dataset.tabId=this._normalizeTabId(F.tabId||F.tab_id||this.defaultTab),this._setCardPosition(V,((P=F.position)==null?void 0:P.x)||0,((R=F.position)==null?void 0:R.y)||0),V.style.width=`${((q=F.size)==null?void 0:q.width)||140}px`,V.style.height=`${((K=F.size)==null?void 0:K.height)||100}px`,this.cardContainer.appendChild(V);try{this._rebuildOnce(V.firstElementChild)}catch{}this._initCardInteract(V)}else this._showEmptyPlaceholder(),($=this._applyAutoScale)==null||$.call(this);this._resizeContainer(),await this._saveLayout(!1)}catch(re){this._dbgPush("import","Parse failed",{error:String(re)})}let x=new Event("ddc-logrefresh");window.dispatchEvent(x)},v.click()}),t.querySelector("#testRoundtrip").addEventListener("click",async()=>{if(!this._backendOK)return this._dbgPush("test","Backend not reachable, aborting"),d();let v=(this.storageKey||"ddc_test")+"_selftest",m={t:Date.now(),msg:"roundtrip"};try{await this._saveLayoutToBackend(v,m);let y=await this._loadLayoutFromBackend(v);this._dbgPush("test","Round-trip result",{wrote:m,read:y})}catch(y){this._dbgPush("test","Round-trip failed",{error:String(y)})}d()}),d()}_openDashboardSettings(){var Ze,Xe,nt,je,at,it,rt,Je,Qe,Pe,ve,Ae,Re,Ce,se,ne,Z,Q,W;let t=document.createElement("div");t.className="modal",this._ensureSettingsStyles_(),t.innerHTML=`
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

`;let n=this.shadowRoot.querySelector(".modal");if(n){try{n.remove()}catch{}this.__settingsModal===n&&(this.__settingsModal=null)}if(this.__settingsModal){try{this.__settingsModal.remove()}catch{}this.__settingsModal=null}this.__settingsModal=t,this.shadowRoot.appendChild(t);let o=t.querySelector("#ddc-setting-autoResize"),c=t.querySelector("#ddc-setting-gridSize"),s=t.querySelector("#ddc-setting-animate"),d=t.querySelector("#ddc-setting-hideHdr"),u=t.querySelector("#ddc-setting-hideSbar"),f=t.querySelector("#ddc-setting-dragSnap"),v=t.querySelector("#ddc-setting-autoSave"),m=t.querySelector("#ddc-setting-autoSaveDebounce"),y=t.querySelector("#ddc-setting-sizeMode"),x=t.querySelector("#ddc-setting-orient"),w=t.querySelector("#ddc-setting-disableOverlap"),S=t.querySelector("#ddc-setting-editPin"),T=t.querySelector("#ddc-setting-containerBg"),L=t.querySelector("#ddc-setting-cardBg"),C=t.querySelector("#ddc-setting-cardShadow"),O=t.querySelector("#ddc-setting-bgImg"),M=t.querySelector("#ddc-bg-repeat"),_=t.querySelector("#ddc-bg-size"),P=t.querySelector("#ddc-bg-position"),R=t.querySelector("#ddc-bg-attachment"),q=t.querySelector("#ddc-bg-opacity"),K=t.querySelector("#ddc-bg-opacity-out"),$=t.querySelector("#ddc-setting-debug"),re=t.querySelector("#ddc-setting-screenSaverEnabled"),F=t.querySelector("#ddc-setting-screenSaverDelay"),U=t.querySelector("#ddc-screenSaverDelayOut"),V=t.querySelector("#ddc-bg-mode"),ce=t.querySelector('[data-bg-section="image"]'),We=t.querySelector('[data-bg-section="particles"]'),ye=t.querySelector('[data-bg-section="youtube"]'),ze=t.querySelector("#ddc-particles-url"),we=t.querySelector("#ddc-particles-pointer"),Ee=t.querySelector("#ddc-youtube-url"),et=t.querySelector("#ddc-youtube-start"),Ve=t.querySelector("#ddc-youtube-end"),De=t.querySelector("#ddc-youtube-mute"),Ge=t.querySelector("#ddc-youtube-loop"),st=t.querySelector("#ddc-youtube-size"),ct=t.querySelector("#ddc-youtube-position"),ae=t.querySelector("#ddc-youtube-attachment"),ut=t.querySelector("#ddc-youtube-opacity"),lt=t.querySelector("#ddc-youtube-opacity-out"),Le=((Ze=this._config)==null?void 0:Ze.background_image)||{},oe=((Xe=this._config)==null?void 0:Xe.background_mode)||((je=(nt=this._config)==null?void 0:nt.background_image)!=null&&je.src?"image":"none");V&&(V.value=String(oe));let Ye=((at=this._config)==null?void 0:at.background_particles)||{};ze&&(ze.value=Ye.config_url||""),we&&(we.checked=!!Ye.pointer_events);let ke=((it=this._config)==null?void 0:it.background_youtube)||{},Me=ke.url||ke.video_id||"";if(Ee&&(Ee.value=Me),et&&(et.value=(rt=ke.start)!=null?rt:""),Ve&&(Ve.value=(Je=ke.end)!=null?Je:""),De&&(De.checked=ke.mute!==!1),Ge&&(Ge.checked=ke.loop!==!1),st&&(st.value=String(ke.size||"cover")),ct&&(ct.value=String(ke.position||"center")),ae&&(ae.value=String(ke.attachment||"scroll")),ut){let D=Math.round((ke.opacity!=null?ke.opacity:1)*100);ut.value=String(D),lt&&(lt.textContent=D+"%"),ut.addEventListener("input",()=>{let X=Math.max(0,Math.min(100,parseInt(ut.value||"100",10)));lt&&(lt.textContent=X+"%")})}let gt=()=>{let D=(V==null?void 0:V.value)||"none";ce&&(ce.style.display=D==="image"?"":"none"),We&&(We.style.display=D==="particles"?"":"none"),ye&&(ye.style.display=D==="youtube"?"":"none")};V==null||V.addEventListener("change",gt),gt();let mt=t.querySelector('[aria-labelledby="lbl-auto-resize"]'),Bt=()=>{let D=(y==null?void 0:y.value)||"dynamic";mt&&(mt.style.display=D==="dynamic"?"":"none")};if(Bt(),y==null||y.addEventListener("change",Bt),o&&(o.checked=!!this.autoResizeCards),c&&(c.value=String(this.gridSize||100)),s&&(s.checked=!!this.animateCards),d&&(d.checked=!!this.hideHaHeader),u&&(u.checked=!!this.hideHaSidebar),f&&(f.checked=!!this.dragLiveSnap),v&&(v.checked=!!this.autoSave),m&&(m.value=String((Qe=this.autoSaveDebounce)!=null?Qe:800)),y&&(y.value=String(this.containerSizeMode||"dynamic")),x&&(x.value=String(this.containerPresetOrient||"auto")),w&&(w.checked=!!this.disableOverlap),T&&(T.value=String(this.containerBackground||"")),L&&(L.value=String(this.cardBackground||"")),O){let D=((Ae=(Pe=this._config)==null?void 0:Pe.background_image)!=null?Ae:(ve=this._config)==null?void 0:ve.bg_image)||{};O.value=D.src?String(D.src):""}if($&&($.checked=!!this.debug),C&&(C.checked=!!this.cardShadowEnabled),M&&(M.value=String(Le.repeat||"no-repeat")),_&&(_.value=String(Le.size||"cover")),P&&(P.value=String(Le.position||"center center")),R&&(R.value=String(Le.attachment||"scroll")),q){let D=Math.round((Le.opacity!=null?Le.opacity:1)*100);q.value=String(D),K&&(K.textContent=`${D}%`),q.addEventListener("input",()=>{let X=Math.max(0,Math.min(100,parseInt(q.value||"100",10)));K.textContent=`${X}%`,this.style.setProperty("--ddc-bg-opacity",String(X/100))})}if(C&&C.addEventListener("change",()=>{try{C.checked?this.style.setProperty("--ddc-card-shadow","0 8px 24px rgba(0,0,0,.35)"):this.style.removeProperty("--ddc-card-shadow")}catch{}}),re&&(re.checked=!!this.screenSaverEnabled,re.addEventListener("change",()=>{this.screenSaverEnabled=re.checked,typeof this._updateScreensaverSettings=="function"&&this._updateScreensaverSettings()})),F){let D=this.screenSaverDelay!=null?Number(this.screenSaverDelay):3e5,X=Math.round(D/6e4);(!Number.isFinite(X)||X<1)&&(X=5),X>60&&(X=60),F.value=String(X),U&&(U.textContent=`${X} min`),F.addEventListener("input",()=>{let ie=parseInt(F.value||"1",10),pe=Math.max(1,Math.min(60,isNaN(ie)?1:ie));U&&(U.textContent=`${pe} min`),this.screenSaverDelay=pe*6e4,typeof this._updateScreensaverSettings=="function"&&this._updateScreensaverSettings()})}try{if(S){let D=this.config&&this.config.edit_mode_pin!=null?String(this.config.edit_mode_pin):"",X=this.editModePin!=null?String(this.editModePin):"";S.value=X||D||"",S.disabled=!1,S.readOnly=!1}}catch{}let dt=t.querySelector("#ddc-setting-gridSize"),Tt=t.querySelector("#ddc-grid-out"),wt=t.querySelector("#ddc-grid-demo"),Kt=t.querySelector("#ddc-grid-meta"),Fe=t.querySelector("#ddc-setting-gridSizeInput"),yt=()=>{if(!wt||!Kt)return;let D=wt.getBoundingClientRect(),X=Math.max(1,parseInt(dt.value||"100",10)),ie=Math.max(1,Math.floor(D.width/X)),pe=Math.max(1,Math.floor(D.height/X));Kt.innerHTML=`
        <ha-icon icon="mdi:grid"></ha-icon>
        <span>${X}px \xB7 ${ie}\xD7${pe}</span>
      `},Ot=()=>{let D=Math.max(1,parseInt(dt.value||"100",10));Tt&&(Tt.textContent=`${D} px`),wt&&wt.style.setProperty("--g",`${D}px`),yt()};if(dt&&(dt.value||(dt.value=String(this.gridSize||100)),dt.addEventListener("input",()=>{Fe&&(Fe.value=dt.value),Ot()}),Fe&&(Fe.value=dt.value),Ot()),Fe&&Fe.addEventListener("input",()=>{let D=Math.max(1,Math.min(400,parseInt(Fe.value||"100",10)));dt.value=String(D),Ot()}),wt){let D=new ResizeObserver(()=>yt());D.observe(wt),(Ce=(Re=this.__ddcGridRO)==null?void 0:Re.disconnect)==null||Ce.call(Re),this.__ddcGridRO=D}t.querySelectorAll(".chip").forEach(D=>{D.addEventListener("click",()=>{var me,ge;t.querySelectorAll(".chip").forEach(fe=>fe.setAttribute("aria-pressed","false")),D.setAttribute("aria-pressed","true");let X=parseInt(D.dataset.w,10),ie=parseInt(D.dataset.h,10),pe=t.querySelector("#ddc-setting-sizeMode");pe.value="fixed_custom",(ge=(me=typeof y!="undefined"&&y)==null?void 0:me.dispatchEvent)==null||ge.call(me,new Event("change")),setTimeout(()=>{var Be,Ke,Ue;(Be=t.querySelector("#ddc-setting-custW"))==null||Be.setAttribute("value",String(X)),(Ue=(Ke=t.querySelector("#ddc-setting-custW"))==null?void 0:Ke.dispatchEvent)==null||Ue.call(Ke,new Event("change"));let fe=t.querySelector("#ddc-setting-custW");fe&&(fe.value=String(X));let He=t.querySelector("#ddc-setting-custH");He&&(He.value=String(ie))},0)})});let ti=["#ffffff","#f5f7fa","#ebeff5","#121212","#1f2937","#334155","#ff6b6b","#fcbf49","#ffe66d","#4ecdc4","#1a535c","#6b5b95","#f6f5f5","#00aaff","#ff00ff","#00ff00","var(--card-background-color)","var(--ha-card-background)","transparent","rgba(255,255,255,0.4)","rgba(0,0,0,0.3)","rgba(0,128,255,0.3)","rgba(255,0,128,0.3)","rgba(255,255,0,0.3)","rgba(0,255,128,0.3)"],zt=(D,X,ie)=>{let pe=t.querySelector(D),me=t.querySelector(X),ge=t.querySelector(ie);!pe||!me||(pe.innerHTML="",ti.forEach((fe,He)=>{let Be=document.createElement("button");Be.type="button",Be.className="swatch",Be.title=fe,Be.style.background=fe.startsWith("var(")?getComputedStyle(this).getPropertyValue(fe.slice(4,-1)).trim()||"#fff":fe,Be.setAttribute("aria-pressed","false"),Be.addEventListener("click",()=>{pe.querySelectorAll(".swatch").forEach(Ke=>Ke.setAttribute("aria-pressed","false")),Be.setAttribute("aria-pressed","true"),me.value=fe,/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(fe)&&ge&&(ge.value=fe);try{me.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}catch{}}),pe.appendChild(Be),String(me.value).trim()===fe&&Be.setAttribute("aria-pressed","true")}))};zt("#ddc-swatches-containerBg","#ddc-setting-containerBg","#ddc-color-containerBg"),zt("#ddc-swatches-cardBg","#ddc-setting-cardBg","#ddc-color-cardBg"),[["#ddc-color-containerBg","#ddc-setting-containerBg"],["#ddc-color-cardBg","#ddc-setting-cardBg"]].forEach(([D,X])=>{let ie=t.querySelector(D),pe=t.querySelector(X);if(!ie||!pe)return;let me=(String(pe.value||"").match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)||[])[0];me&&(ie.value=me),ie.addEventListener("input",()=>{pe.value=ie.value}),pe.addEventListener("change",()=>{let ge=(String(pe.value||"").match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)||[])[0];ge&&(ie.value=ge)})});let Rt=t.querySelector("#ddc-file-bg"),pt=t.querySelector("#ddc-setting-bgImg"),Dt=t.querySelector("#ddc-bg-thumb"),be=D=>{Dt&&(Dt.style.backgroundImage=D?`url(${D})`:"none")};pt!=null&&pt.value&&be(pt.value),Rt==null||Rt.addEventListener("change",async()=>{var pe;let D=(pe=Rt.files)==null?void 0:pe[0];if(!D)return;let X=/iPad|iPhone|iPod/.test(navigator.userAgent),ie=URL.createObjectURL(D);be(ie),this.style.setProperty("--ddc-bg-image",`url("${ie}")`),pt&&(pt.value=""),(async()=>{if(!X)try{let me=new Image;me.src=ie,await me.decode();let ge=Math.min(1920/me.naturalWidth,1080/me.naturalHeight,1),fe=Math.round(me.naturalWidth*ge),He=Math.round(me.naturalHeight*ge),Be=document.createElement("canvas");Be.width=fe,Be.height=He,Be.getContext("2d",{alpha:!1}).drawImage(me,0,0,fe,He);let Ue=Be.toDataURL("image/jpeg",.7);Ue&&Ue.length<3e5&&pt&&(pt.value=Ue)}catch{}})()}),(se=t.querySelector("#ddc-clear-bg"))==null||se.addEventListener("click",()=>{var ie,pe;pt&&(pt.value=""),be("");let{background_image:D,...X}=this._config||{};this._config=X,this.style.setProperty("--ddc-bg-image","none"),(ie=this._applyBackgroundFromConfig)==null||ie.call(this),(pe=this._persistThisCardConfigToStorage_)==null||pe.call(this)}),t.addEventListener("click",D=>{D.target===t&&(D.stopPropagation(),j())});let N=D=>{D.key==="Escape"&&(D.stopPropagation(),j())};document.addEventListener("keydown",N,{once:!0}),setTimeout(()=>{var D;return(D=t.querySelector("#ddc-setting-gridSize"))==null?void 0:D.focus()},0);try{let D=t.querySelector("#ddc-setting-sizeExtras"),X=()=>{var pe,me;if(!D)return;D.innerHTML="";let ie=(y==null?void 0:y.value)||"dynamic";if(ie==="fixed_custom"){let ge=document.createElement("label");ge.style.display="flex",ge.style.flexDirection="column",ge.style.fontSize=".95rem",ge.style.marginBottom="10px";let fe=document.createElement("span");fe.textContent="Custom width (px)",fe.style.marginBottom="4px";let He=document.createElement("input");He.type="number",He.id="ddc-setting-custW",He.min="100",He.max="10000",He.step="10",He.style.padding="6px",He.style.border="1px solid var(--divider-color,rgba(0,0,0,.3))",He.style.borderRadius="6px",He.value=String((pe=this.containerFixedWidth)!=null?pe:800),ge.appendChild(fe),ge.appendChild(He);let Be=document.createElement("label");Be.style.display="flex",Be.style.flexDirection="column",Be.style.fontSize=".95rem",Be.style.marginBottom="10px";let Ke=document.createElement("span");Ke.textContent="Custom height (px)",Ke.style.marginBottom="4px";let Ue=document.createElement("input");Ue.type="number",Ue.id="ddc-setting-custH",Ue.min="100",Ue.max="10000",Ue.step="10",Ue.style.padding="6px",Ue.style.border="1px solid var(--divider-color,rgba(0,0,0,.3))",Ue.style.borderRadius="6px",Ue.value=String((me=this.containerFixedHeight)!=null?me:600),Be.appendChild(Ke),Be.appendChild(Ue),D.appendChild(ge),D.appendChild(Be)}else if(ie==="preset"){let ge=document.createElement("label");ge.style.display="flex",ge.style.flexDirection="column",ge.style.fontSize=".95rem",ge.style.marginBottom="10px";let fe=document.createElement("span");fe.textContent="Preset size",fe.style.marginBottom="4px";let He=document.createElement("select");He.id="ddc-setting-preset",He.style.padding="6px",He.style.border="1px solid var(--divider-color,rgba(0,0,0,.3))",He.style.borderRadius="6px",(typeof e!="undefined"&&e._sizePresets?e._sizePresets():[]).forEach(Ke=>{let Ue=document.createElement("option");Ue.value=Ke.key,Ue.textContent=`${Ke.label||Ke.key} (${Ke.w}\xD7${Ke.h})`,He.appendChild(Ue)}),He.value=String(this.containerPreset||"fhd"),ge.appendChild(fe),ge.appendChild(He),D.appendChild(ge)}};X(),y==null||y.addEventListener("change",X)}catch(D){console.warn("[drag-and-drop-card] Failed to build container size extras",D)}let Y=()=>{var X,ie,pe,me,ge;return((ge=(me=(ie=(X=this._config)==null?void 0:X.options)==null?void 0:ie.tabs)!=null?me:(pe=this._config)==null?void 0:pe.tabs)!=null?ge:[]).map(fe=>{var He,Be,Ke,Ue,Mt,Ft,kt;return typeof fe=="string"?{id:fe,label:fe,icon:"",label_mode:"both",__raw:{id:fe,label:fe}}:{id:(Ke=(Be=(He=fe.id)!=null?He:fe.key)!=null?Be:fe.label)!=null?Ke:"tab",label:(Mt=(Ue=fe.label)!=null?Ue:fe.id)!=null?Mt:"Tab",icon:(Ft=fe.icon)!=null?Ft:"",label_mode:(kt=fe.label_mode)!=null?kt:"both",__raw:fe}})},ue=async(D,X)=>{var pe,me,ge;let ie=D.map(fe=>({...fe.__raw,id:fe.id,label:fe.label,icon:fe.icon||"",label_mode:fe.label_mode||"both"}));(pe=this._config)!=null&&pe.options?this._config.options={...this._config.options||{},tabs:ie,default_tab:X!=null?X:(me=this._config.options)==null?void 0:me.default_tab}:(this._config.tabs=ie,X&&(this._config.default_tab=X));try{await this._persistThisCardConfigToStorage_()}catch(fe){console.warn("[drag-and-drop-card] Could not persist tabs",fe)}(ge=this.requestUpdate)==null||ge.call(this)},Se=()=>{var D,X,ie,pe;return((X=(D=this._config)==null?void 0:D.options)==null?void 0:X.default_tab)||((ie=this._config)==null?void 0:ie.default_tab)||((pe=Y()[0])==null?void 0:pe.id)},de=t.querySelector("#ddc-tabs-list"),Oe=()=>{let D=Y(),X=Se();if(de.innerHTML="",!D.length){let ie=document.createElement("div");ie.className="hint",ie.textContent="No tabs yet. Add one below.",de.appendChild(ie);return}D.forEach((ie,pe)=>{let me=document.createElement("div");me.className="tab-row";let ge=document.createElement("input");ge.type="radio",ge.name="ddc-default-tab",ge.value=ie.id,ge.checked=ie.id===X,ge.title="Set as default tab",ge.addEventListener("change",async()=>{await ue(D,ie.id)});let fe=document.createElement("div");fe.className="tab-name";let He=document.createElement("ha-icon");He.setAttribute("icon",ie.icon||"mdi:tab");let Be=document.createElement("input");Be.value=ie.icon||"",Be.placeholder="mdi:home",Be.title="Tab icon (mdi:...)",Be.style.width="160px",Be.addEventListener("change",async()=>{ie.icon=Be.value.trim(),He.setAttribute("icon",ie.icon||"mdi:tab"),D[pe]=ie,await ue(D,X)});let Ke=document.createElement("input");Ke.value=ie.label,Ke.placeholder="Tab name",Ke.style.flex="1",Ke.addEventListener("change",async()=>{ie.label=Ke.value.trim()||ie.id,D[pe]=ie,await ue(D,X)});let Ue=document.createElement("div");Ue.className="tab-icon-wrap",Ue.appendChild(He),Ue.appendChild(Be),fe.appendChild(Ue),fe.appendChild(Ke);let Mt=document.createElement("div");Mt.className="mode-chips";let Ft=(Nt,qt)=>{let _t=document.createElement("button");return _t.type="button",_t.className="chip",_t.textContent=qt,_t.setAttribute("aria-pressed",String((ie.label_mode||"both")===Nt)),_t.addEventListener("click",async()=>{Mt.querySelectorAll(".chip").forEach(Wt=>Wt.setAttribute("aria-pressed","false")),_t.setAttribute("aria-pressed","true"),ie.label_mode=Nt,D[pe]=ie,await ue(D,X)}),_t};Mt.appendChild(Ft("icon","Icon")),Mt.appendChild(Ft("text","Text")),Mt.appendChild(Ft("both","Both"));let kt=document.createElement("div");kt.className="tab-actions";let Pt=document.createElement("button");Pt.className="icon-btn danger",Pt.innerHTML='<ha-icon icon="mdi:trash-can-outline"></ha-icon>',Pt.title="Delete tab",Pt.addEventListener("click",async()=>{var _t,Wt;let Nt=Y().filter(mi=>mi.id!==ie.id),qt=X;ie.id===X&&(qt=(_t=Nt[0])==null?void 0:_t.id),await ue(Nt,qt);try{(Wt=this._reassignCardsToTab_)==null||Wt.call(this,ie.id,qt)}catch{}Oe()}),kt.appendChild(Mt),kt.appendChild(Pt),me.appendChild(ge),me.appendChild(fe),me.appendChild(kt),de.appendChild(me)})};Oe(),(ne=t.querySelector("#ddc-add-tab-btn"))==null||ne.addEventListener("click",async()=>{let D=t.querySelector("#ddc-new-tab-name"),X=((D==null?void 0:D.value)||"").trim();if(!X)return;let ie=Y(),pe=X.replace(/\s+/g,"-").toLowerCase(),me=2;for(;ie.some(ge=>ge.id===pe);)pe=`${pe}-${me++}`;ie.push({id:pe,label:X,icon:"",label_mode:"both",__raw:{id:pe,label:X}}),await ue(ie,Se()),D.value="",Oe()});let H=t.querySelector("#ddc-clear-bg");H&&H.addEventListener("click",()=>{var ie,pe,me;let D=t.querySelector("#ddc-setting-bgImg"),X=t.querySelector("#ddc-bg-thumb");D&&(D.value=""),X&&(X.style.backgroundImage="none");try{if((ie=this._config)!=null&&ie.background_image){let{background_image:ge,...fe}=this._config;this._config=fe}(pe=this._applyBackgroundImageFromConfig)==null||pe.call(this),(me=this._persistThisCardConfigToStorage_)==null||me.call(this)}catch(ge){console.warn("[drag-and-drop-card] Failed to clear background image",ge)}});let ee=["linear-gradient(135deg, #1e3a8a, #0ea5e9)","linear-gradient(135deg, #111827, #1f2937)","linear-gradient(135deg, #0f766e, #22c55e)","linear-gradient(135deg, #7c3aed, #06b6d4)","linear-gradient(135deg, #f97316, #f43f5e)","linear-gradient(135deg, #eab308, #22d3ee)","radial-gradient(circle at 30% 20%, #2dd4bf, #1e293b)","radial-gradient(circle at 70% 80%, #f59e0b, #7c3aed)"],qe=(D,X)=>{let ie=t.querySelector(D),pe=t.querySelector(X);!ie||!pe||(ie.innerHTML="",ee.forEach(me=>{let ge=document.createElement("button");ge.type="button",ge.className="gradient",ge.style.background=me,ge.setAttribute("aria-pressed","false"),ge.title=me,ge.addEventListener("click",()=>{ie.querySelectorAll(".gradient").forEach(fe=>fe.setAttribute("aria-pressed","false")),ge.setAttribute("aria-pressed","true"),pe.value=me;try{String(X||"").toLowerCase().includes("cardbg")?(this.cardBackground=me,this.style.setProperty("--ddc-card-bg",me)):(this.containerBackground=me,this.style.setProperty("--ddc-bg",me))}catch{}}),ie.appendChild(ge),String(pe.value).trim()===me&&ge.setAttribute("aria-pressed","true")}))};qe("#ddc-gradients-containerBg","#ddc-setting-containerBg"),qe("#ddc-gradients-cardBg","#ddc-setting-cardBg"),T&&T.addEventListener("input",()=>{let D=(T.value||"").trim();try{this.containerBackground=D,this.style.setProperty("--ddc-bg",D)}catch{}}),L&&L.addEventListener("input",()=>{let D=(L.value||"").trim();try{this.cardBackground=D,this.style.setProperty("--ddc-card-bg",D)}catch{}});let j=()=>{var D,X;try{(X=(D=this.__ddcGridRO)==null?void 0:D.disconnect)==null||X.call(D),this.__ddcGridRO=null}catch{}try{t.remove()}catch{}this.__settingsModal===t&&(this.__settingsModal=null)};(Z=t.querySelector("#ddc-settings-close"))==null||Z.addEventListener("click",D=>{D.stopPropagation(),j()}),(Q=t.querySelector("#ddc-settings-cancel"))==null||Q.addEventListener("click",D=>{D.stopPropagation(),j()}),(W=t.querySelector("#ddc-settings-save"))==null||W.addEventListener("click",D=>{var Wi,_i,xi,ci,Yi,$i,wi,Ki,Ui,Si,ki,Vi,li,Gi,Ci;D.stopPropagation();let X=(y==null?void 0:y.value)||"dynamic",ie=X==="dynamic"&&!!(o!=null&&o.checked),pe=parseInt((c==null?void 0:c.value)||"0",10),me=!!(s!=null&&s.checked),ge=!!(d!=null&&d.checked),fe=!!(u!=null&&u.checked),He=!!(f!=null&&f.checked),Be=!!(v!=null&&v.checked),Ke=parseInt((m==null?void 0:m.value)||"0",10),Ue=(x==null?void 0:x.value)||"auto",Mt=!!(w!=null&&w.checked),Ft=((T==null?void 0:T.value)||"").trim(),kt=((L==null?void 0:L.value)||"").trim(),Pt=((O==null?void 0:O.value)||"").trim(),Nt=!!($!=null&&$.checked),qt=((S==null?void 0:S.value)||"").trim(),_t=(V==null?void 0:V.value)||"none",Wt=((ze==null?void 0:ze.value)||"").trim(),mi=!!(we!=null&&we.checked),yi=((Ee==null?void 0:Ee.value)||"").trim(),Bi=parseInt((et==null?void 0:et.value)||"",10),Ni=parseInt((Ve==null?void 0:Ve.value)||"",10),qi=!!(De!=null&&De.checked),Hi=!!(Ge!=null&&Ge.checked),vi=(st==null?void 0:st.value)||"cover",ji=(ct==null?void 0:ct.value)||"center",Gt=ut?Math.max(0,Math.min(100,parseInt(ut.value||"100",10)))/100:1,Yt=(ae==null?void 0:ae.value)||"scroll",bi=!!(C!=null&&C.checked),si=!!(re!=null&&re.checked),Ht=parseInt((F==null?void 0:F.value)||"1",10),ii=(Number.isFinite(Ht)?Ht:1)*6e4;try{if(this.autoResizeCards=ie,!this.autoResizeCards&&this.__ddcResizeObs){try{this.__ddcResizeObs.disconnect()}catch{}this.__ddcResizeObs=null,this.__ddcOnWinResize&&(window.removeEventListener("resize",this.__ddcOnWinResize),this.__ddcOnWinResize=null)}if(this.autoResizeCards&&!this.__ddcResizeObs){this.__ddcResizeObs=new ResizeObserver(()=>{var tt;return(tt=this._applyAutoScale)==null?void 0:tt.call(this)});try{this.__ddcResizeObs.observe(this)}catch{}try{this.__ddcResizeObs.observe(this.cardContainer)}catch{}window.addEventListener("resize",this.__ddcOnWinResize=()=>{var tt;return(tt=this._applyAutoScale)==null?void 0:tt.call(this)})}this.autoResizeCards||String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(Wi=this._startScaleWatch)==null||Wi.call(this):(_i=this._stopScaleWatch)==null||_i.call(this),(xi=this._applyAutoScale)==null||xi.call(this),!isNaN(pe)&&pe>0&&pe!==this.gridSize&&(this.gridSize=pe,(ci=this._applyGridVars)==null||ci.call(this),(Yi=this._resizeContainer)==null||Yi.call(this)),this.cardShadowEnabled=bi,this.cardShadowEnabled?this.style.setProperty("--ddc-card-shadow","0 8px 24px rgba(0,0,0,.35)"):this.style.removeProperty("--ddc-card-shadow"),this.editModePin=qt,this._config={...this._config||{},edit_mode_pin:qt};let Ei=He!==this.dragLiveSnap;this.dragLiveSnap=He,Ei&&(($i=this._initInteract)==null||$i.call(this)),this.autoSave=Be,!isNaN(Ke)&&Ke>0&&(this.autoSaveDebounce=Ke);let di=X!==this.containerSizeMode;this.containerSizeMode=X;let cr=Ue!==this.containerPresetOrient;if(this.containerPresetOrient=Ue,(di||cr)&&((wi=this._resizeContainer)==null||wi.call(this)),X==="fixed_custom"){let tt=parseInt(((Ki=t.querySelector("#ddc-setting-custW"))==null?void 0:Ki.value)||"0",10),bt=parseInt(((Ui=t.querySelector("#ddc-setting-custH"))==null?void 0:Ui.value)||"0",10);!isNaN(tt)&&tt>0&&(this.containerFixedWidth=tt),!isNaN(bt)&&bt>0&&(this.containerFixedHeight=bt),(Si=this._resizeContainer)==null||Si.call(this)}else if(X==="preset"){let tt=(ki=t.querySelector("#ddc-setting-preset"))==null?void 0:ki.value;tt&&(this.containerPreset=tt),(Vi=this._resizeContainer)==null||Vi.call(this)}if(this.disableOverlap=Mt,Ft&&(this.containerBackground=Ft,this.style.setProperty("--ddc-bg",this.containerBackground)),kt&&(this.cardBackground=kt,this.style.setProperty("--ddc-card-bg",this.cardBackground)),Pt){let tt=this._config&&this._config.background_image||{};this._config={...this._config,background_image:{...tt,src:Pt}}}else{let{background_image:tt,...bt}=this._config||{};this._config=bt}this.debug=Nt,this.animateCards=me,this.hideHaHeader=ge,this.hideHaSidebar=fe,(li=this._applyHaChromeVisibility_)==null||li.call(this);let ui=this._config&&this._config.background_image||{},Ai=(M==null?void 0:M.value)||"no-repeat",Xi=(_==null?void 0:_.value)||"cover",Ti=(P==null?void 0:P.value)||"center center",Oi=(R==null?void 0:R.value)||"scroll",Ji=q?Math.max(0,Math.min(100,parseInt(q.value||"100",10)))/100:1;if(this._config=this._config||{},this._config.background_mode=_t,_t!=="image"&&!Pt){let{background_image:tt,...bt}=this._config||{};this._config=bt}if(_t==="particles")this._config.background_particles={config_url:Wt||void 0,pointer_events:mi||void 0};else{let{background_particles:tt,...bt}=this._config||{};this._config=bt}if(_t==="youtube")this._config.background_youtube={url:yi||void 0,start:Number.isFinite(Bi)?Bi:void 0,end:Number.isFinite(Ni)?Ni:void 0,mute:qi!==!0?qi:void 0,loop:Hi!==!0?Hi:void 0,size:vi&&vi!="cover"?vi:void 0,position:ji||void 0,attachment:Yt&&Yt!=="scroll"?Yt:void 0,opacity:Gt!=null&&Gt!==1?Gt:void 0};else{let{background_youtube:tt,...bt}=this._config||{};this._config=bt}if(this.screenSaverEnabled=si,this.screenSaverDelay=ii,(Gi=this._updateScreensaverSettings)==null||Gi.call(this),Pt)this._config={...this._config,background_image:{...ui,src:Pt,repeat:Ai,size:Xi,position:Ti,attachment:Oi,opacity:Ji}};else if(ui.src)this._config={...this._config,background_image:{...ui,repeat:Ai,size:Xi,position:Ti,attachment:Oi,opacity:Ji}};else{let{background_image:tt,...bt}=this._config||{};this._config=bt}(Ci=this._applyBackgroundFromConfig)==null||Ci.call(this);try{this._config||(this._config={}),this._config.grid=this.gridSize,this._config.auto_resize_cards=!!this.autoResizeCards,this._config.drag_live_snap=!!this.dragLiveSnap,this._config.auto_save=!!this.autoSave,this._config.auto_save_debounce=this.autoSaveDebounce,this._config.container_size_mode=this.containerSizeMode,this._config.container_preset_orientation=this.containerPresetOrient,this._config.container_fixed_width=this.containerFixedWidth,this._config.container_fixed_height=this.containerFixedHeight,this._config.container_preset=this.containerPreset,this._config.disable_overlap=!!this.disableOverlap,this._config.container_background=this.containerBackground,this._config.card_background=this.cardBackground,this._config.card_shadow=!!this.cardShadowEnabled,this._config.debug=!!this.debug,this._config.animate_cards=!!this.animateCards,this._config.hide_HA_Header=!!this.hideHaHeader,this._config.hide_HA_Sidebar=!!this.hideHaSidebar,this._config.screen_saver_enabled=!!this.screenSaverEnabled,this._config.screen_saver_delay=this.screenSaverDelay}catch(tt){console.warn("[drag-and-drop-card] Failed to update config",tt)}this._persistThisCardConfigToStorage_().catch(tt=>{console.warn("[drag-and-drop-card] Storage save failed (is this a YAML dashboard?)",tt)})}catch(Ei){console.warn("[drag-and-drop-card] Failed to apply settings",Ei)}j()})}_exportableOptions(){var s,d,u;let t=this._config||{},n=(f,v)=>Object.fromEntries(v.map(m=>[m,f==null?void 0:f[m]]).filter(([,m])=>m!==void 0)),o=t.background_mode||((s=t.background_image)!=null&&s.src?"image":t.background_youtube?"youtube":t.background_particles?"particles":"none"),c={storage_key:this.storageKey||void 0,grid:this.gridSize,drag_live_snap:!!this.dragLiveSnap,auto_save:!!this.autoSave,auto_save_debounce:this.autoSaveDebounce,disable_overlap:!!this.disableOverlap,debug:!!this.debug,edit_mode_pin:this.editModePin||void 0,container_size_mode:this.containerSizeMode,container_preset_orientation:this.containerPresetOrient,container_fixed_width:(d=this.containerFixedWidth)!=null?d:void 0,container_fixed_height:(u=this.containerFixedHeight)!=null?u:void 0,container_preset:this.containerPreset,auto_resize_cards:!!this.autoResizeCards,container_background:this.containerBackground,card_background:this.cardBackground,card_shadow:!!this.cardShadowEnabled,animate_cards:!!this.animateCards,hide_HA_Header:!!this.hideHaHeader,hide_HA_Sidebar:!!this.hideHaSidebar,tabs:this.tabs,tabs_position:this.tabsPosition,default_tab:this.defaultTab,hide_tabs_when_single:!!this.hideTabsWhenSingle,background_mode:o,background_image:t.background_image?n(t.background_image,["src","repeat","size","position","attachment","opacity"]):void 0,background_particles:t.background_particles?n(t.background_particles,["config_url","pointer_events"]):void 0,background_youtube:t.background_youtube?n(t.background_youtube,["url","start","end","mute","loop","size","position","attachment","opacity"]):void 0,screen_saver_enabled:!!this.screenSaverEnabled,screen_saver_delay:this.screenSaverDelay};return Object.keys(c).forEach(f=>c[f]===void 0&&delete c[f]),c}_applyImportedOptions(t={},n=!0){var o,c,s,d,u,f,v,m;if(t&&Object.prototype.hasOwnProperty.call(t,"storage_key")&&this._isInHaEditorPreview())try{let y={type:"custom:drag-and-drop-card",...this._config||{}};this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:y},bubbles:!0,composed:!0}))}catch{}if(this._config={...this._config||{},...t},"storage_key"in t&&(this.storageKey=t.storage_key||void 0),this._syncEditorsStorageKey(),"grid"in t&&(this.gridSize=Number(t.grid)||10),"drag_live_snap"in t&&(this.dragLiveSnap=!!t.drag_live_snap),"auto_save"in t&&(this.autoSave=!!t.auto_save),"auto_save_debounce"in t&&(this.autoSaveDebounce=Number(t.auto_save_debounce)||800),"container_background"in t&&(this.containerBackground=(o=t.container_background)!=null?o:"transparent"),"card_background"in t&&(this.cardBackground=(c=t.card_background)!=null?c:"var(--ha-card-background, var(--card-background-color))"),"card_shadow"in t&&(this.cardShadowEnabled=!!t.card_shadow),"debug"in t&&(this.debug=!!t.debug),"disable_overlap"in t&&(this.disableOverlap=!!t.disable_overlap),"container_size_mode"in t&&(this.containerSizeMode=t.container_size_mode||"dynamic"),"container_fixed_width"in t&&(this.containerFixedWidth=Number(t.container_fixed_width)||null),"container_fixed_height"in t&&(this.containerFixedHeight=Number(t.container_fixed_height)||null),"container_preset"in t&&(this.containerPreset=t.container_preset||"fhd"),"container_preset_orientation"in t&&(this.containerPresetOrient=t.container_preset_orientation||"auto"),"auto_resize_cards"in t&&(this.autoResizeCards=!!t.auto_resize_cards,this.autoResizeCards||String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(s=this._startScaleWatch)==null||s.call(this):(d=this._stopScaleWatch)==null||d.call(this),(u=this._applyAutoScale)==null||u.call(this)),"screen_saver_enabled"in t&&(this.screenSaverEnabled=!!t.screen_saver_enabled),"screen_saver_delay"in t){let y=Number(t.screen_saver_delay);this.screenSaverDelay=Number.isFinite(y)&&y>0?y:this.screenSaverDelay}("screen_saver_enabled"in t||"screen_saver_delay"in t)&&typeof this._updateScreensaverSettings=="function"&&this._updateScreensaverSettings(),this.style.setProperty("--ddc-bg",this.containerBackground),this.style.setProperty("--ddc-card-bg",this.cardBackground),this.cardShadowEnabled?this.style.setProperty("--ddc-card-shadow","0 8px 24px rgba(0,0,0,.35)"):this.style.removeProperty("--ddc-card-shadow"),this._applyGridVars(),n&&(this._applyContainerSizingFromConfig(!0),(f=this._applyAutoScale)==null||f.call(this),this._resizeContainer(),(v=this._updateStoreBadge)==null||v.call(this),(m=this._applyAutoScale)==null||m.call(this))}_exportDesign(){let n=Array.from(this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)")).map(u=>{let f=parseFloat(u.getAttribute("data-x"))||0,v=parseFloat(u.getAttribute("data-y"))||0,m=parseFloat(u.style.width)||u.getBoundingClientRect().width,y=parseFloat(u.style.height)||u.getBoundingClientRect().height,x=parseInt(u.style.zIndex||"1",10),w=this._extractCardConfig(u.firstElementChild),S=u.dataset.tabId||this.defaultTab;return{card:w,position:{x:f,y:v},size:{width:m,height:y},z:x,tabId:S}}),o={version:2,options:this._exportableOptions(),cards:n};this._config&&this._config.card_mod&&(o.options=o.options||{},o.options.card_mod=this._config.card_mod);let c=`DragAndDrop_Design_${this.storageKey||"layout"}.json`,s=new Blob([JSON.stringify(o,null,2)],{type:"application/json"}),d=document.createElement("a");d.href=URL.createObjectURL(s),d.download=c,d.click(),URL.revokeObjectURL(d.href),this._toast("Design exported.")}_importDesign(){let t=document.createElement("input");t.type="file",t.accept="application/json";let n=!0,o=!1,c=["grid","drag_live_snap","auto_save","auto_save_debounce","debug","disable_overlap","card_mod","storage_key","animate_cards","auto_resize_cards","container_background","card_background","container_size_mode","container_fixed_width","container_fixed_height","container_preset","container_preset_orientation","tabs","tabs_position","default_tab","hide_tabs_when_single","hide_HA_Header","hide_HA_Sidebar","background_mode","background_image","background_particles","background_youtube","screen_saver_enabled","screen_saver_delay"];t.onchange=async()=>{var u,f,v,m,y,x,w,S,T,L,C,O,M,_,P,R,q,K,$,re,F,U,V,ce,We,ye,ze,we,Ee,et,Ve,De,Ge,st,ct,ae,ut,lt,Le,oe,Ye,ke,Me,gt,mt,Bt,dt,Tt,wt,Kt;let s=(u=t.files)==null?void 0:u[0];if(!s)return;let d=await s.text();try{let Fe=JSON.parse(d),yt=this.storageKey||((f=this._config)==null?void 0:f.storage_key)||null,Ot=!!(Fe.options&&Array.isArray(Fe.options.tabs)),ti=Array.isArray(Fe.cards)&&Fe.cards.some(be=>(be==null?void 0:be.tabId)||(be==null?void 0:be.tab_id)),zt=[];Ot?zt=Fe.options.tabs:ti?zt=Array.from(new Set(Fe.cards.map(N=>(N==null?void 0:N.tabId)||(N==null?void 0:N.tab_id)).filter(Boolean))).map(N=>({id:N,label:N})):zt=[{id:"default",label:"Layout"}];let Rt=((v=Fe.options)==null?void 0:v.tabs_position)==="left"?"left":this.tabsPosition||"top",pt=((m=Fe.options)==null?void 0:m.default_tab)||((y=zt[0])==null?void 0:y.id)||"default",Dt=((x=Fe.options)==null?void 0:x.hide_tabs_when_single)!==void 0?!!Fe.options.hide_tabs_when_single:!0;if(Fe.options){let be={...Fe.options};if(o||delete be.storage_key,n){let N=this._config||{type:"custom:drag-and-drop-card"};for(let Y of c)Y==="storage_key"&&!o||!(Y in be)&&Y in N&&delete N[Y];try{this.cardContainer&&(this.cardContainer.style.background="",this.cardContainer.style.width="",this.cardContainer.style.height=""),(S=(w=this.style)==null?void 0:w.removeProperty)==null||S.call(w,"--ddc-container-bg"),(L=(T=this.style)==null?void 0:T.removeProperty)==null||L.call(T,"--ddc-card-bg")}catch{}if(this._config={...N,...be},"card_mod"in be||delete this._config.card_mod,"animate_cards"in be&&(this.animateCards=!!be.animate_cards),"auto_resize_cards"in be&&(this.autoResizeCards=!!be.auto_resize_cards),"hide_HA_Header"in be||"hide_HA_Sidebar"in be)try{(C=this._applyHaChromeVisibility_)==null||C.call(this)}catch{}if("background_mode"in be||"background_image"in be||"background_particles"in be||"background_youtube"in be)try{(O=this._applyBackgroundFromConfig)==null||O.call(this)}catch{}if(o&&be.storage_key&&(this.storageKey=be.storage_key),this._opts){this._opts={...this._opts,...be};for(let Y of c)Y in be||delete this._opts[Y]}(M=this._applyOptionsToDom)==null||M.call(this,this._config),(_=this.requestUpdate)==null||_.call(this)}else this._applyImportedOptions(be,!0),be.card_mod!==void 0&&(this._config=this._config||{},this._config.card_mod=be.card_mod,(P=this.requestUpdate)==null||P.call(this))}else if(typeof Fe.grid=="number"){let be={grid:Fe.grid};n?this._config={...this._config||{},...be}:this._applyImportedOptions(be,!0),(R=this.requestUpdate)==null||R.call(this)}(!Array.isArray(this.tabs)||!this.tabs.length)&&(this.tabs=zt),this.tabsPosition||(this.tabsPosition=Rt),this.defaultTab||(this.defaultTab=pt),this.hideTabsWhenSingle===void 0&&(this.hideTabsWhenSingle=Dt),($=(K=(q=this.rootEl)==null?void 0:q.classList)==null?void 0:K.toggle)==null||$.call(K,"ddc-tabs-left-layout",this.tabsPosition==="left");try{let be=((re=this._config)==null?void 0:re.storage_key)||this.storageKey||null,N=(F=Fe.options)!=null?F:typeof Fe.grid=="number"?{grid:Fe.grid}:{},Y={...N,tabs:(V=(U=N.tabs)!=null?U:this.tabs)!=null?V:[],tabs_position:(We=(ce=N.tabs_position)!=null?ce:this.tabsPosition)!=null?We:"top",default_tab:(Ve=(ye=N.default_tab)!=null?ye:this.defaultTab)!=null?Ve:((we=(ze=N.tabs)==null?void 0:ze[0])==null?void 0:we.id)||((et=(Ee=this.tabs)==null?void 0:Ee[0])==null?void 0:et.id)||"default",hide_tabs_when_single:(Ge=N.hide_tabs_when_single)!=null?Ge:(De=this.hideTabsWhenSingle)!=null?De:!0};if(o||delete Y.storage_key,!be)console.warn("[ddc:import] No storage_key on this card; aborting YAML persist.");else{let ue=await((st=this._persistOptionsToYaml)==null?void 0:st.call(this,Y,{forceTargetKey:String(be),noDownload:!0,replace:!0,wipeUnknownKeys:!0})),Se=!!(ue&&ue.yamlSaved);(ct=console.debug)==null||ct.call(console,"[ddc:import] YAML persist result:",Se)}try{let ue={type:"custom:drag-and-drop-card",...this._config||{}};ue.tabs=Y.tabs,ue.tabs_position=Y.tabs_position,ue.default_tab=Y.default_tab,ue.hide_tabs_when_single=!!Y.hide_tabs_when_single,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:ue},bubbles:!0,composed:!0}))}catch{}}catch(be){console.warn("[ddc:import] YAML persist failed:",be)}if(this.cardContainer.innerHTML="",Array.isArray(Fe.cards)&&Fe.cards.length)for(let be of Fe.cards){let N=((ae=be.position)==null?void 0:ae.x)||0,Y=((ut=be.position)==null?void 0:ut.y)||0,ue=((lt=be.size)==null?void 0:lt.width)||140,Se=((Le=be.size)==null?void 0:Le.height)||100,de=be.z,Oe=this._normalizeTabId(be.tabId||be.tab_id||this.defaultTab);if(!(be!=null&&be.card)||typeof be.card=="object"&&!Object.keys(be.card).length){let qe=this._makePlaceholderAt(N,Y,ue,Se);qe.dataset.tabId=Oe,this.cardContainer.appendChild(qe);continue}let H=await this._createCard(be.card),ee=this._makeWrapper(H);ee.dataset.tabId=Oe,this._setCardPosition(ee,N,Y),ee.style.width=`${ue}px`,ee.style.height=`${Se}px`,de!=null&&(ee.style.zIndex=String(de)),this.cardContainer.appendChild(ee);try{this._rebuildOnce(ee.firstElementChild)}catch{}this._initCardInteract(ee)}else this._showEmptyPlaceholder(),(oe=this._applyAutoScale)==null||oe.call(this);(Ye=this._applyOptionsToDom)==null||Ye.call(this,this._config),this._resizeContainer();try{(gt=(Me=(ke=this.rootEl)==null?void 0:ke.classList)==null?void 0:Me.toggle)==null||gt.call(Me,"ddc-tabs-left-layout",this.tabsPosition==="left"),(mt=this._renderTabs)==null||mt.call(this),(Bt=this._applyActiveTab)==null||Bt.call(this)}catch{}try{this._saveTimer&&clearTimeout(this._saveTimer),await this._saveLayout(!0),(dt=this._toast)==null||dt.call(this,"Design imported & saved. Reloading..."),window.location.reload()}catch(be){console.warn("[ddc:import] saveLayout failed",be),(Tt=this._markDirty)==null||Tt.call(this,"import"),(wt=this._toast)==null||wt.call(this,"Design imported \u2014 click Apply to save.")}}catch(Fe){console.error("Import failed",Fe),(Kt=this._toast)==null||Kt.call(this,"Import failed \u2014 invalid file.")}},t.click()}_getLovelace(){var s,d;let t=0,n=this;for(;n&&t++<20;){let u=(s=n.getRootNode)==null?void 0:s.call(n),f=u==null?void 0:u.host;if((f==null?void 0:f.tagName)==="HUI-ROOT")return f.lovelace;n=f||n.parentElement}let o=new Set,c=[document];for(;c.length;){let u=c.shift();if(!(!u||o.has(u))){if(o.add(u),((d=u.host)==null?void 0:d.tagName)==="HUI-ROOT")return u.host.lovelace;if(u.tagName==="HUI-ROOT")return u.lovelace;if(u.shadowRoot&&c.push(u.shadowRoot),u.children)for(let f of u.children)c.push(f)}}}_scanDdcCards(t){let n=[],o=(s,d,u)=>{(u==null?void 0:u.type)==="custom:drag-and-drop-card"&&n.push({view:s,path:[...d],card:u})},c=(s,d,u)=>{if(s){if(Array.isArray(s)){s.forEach((f,v)=>c(f,d,u.concat(v)));return}if(typeof s=="object"){"type"in s&&o(d,u,s);for(let[f,v]of Object.entries(s))f==="views"&&Array.isArray(v)?v.forEach((m,y)=>c(m,y,["views",y])):(Array.isArray(v)||v&&typeof v=="object")&&c(v,d,u.concat(f))}}};return c(t,-1,[]),n}async _persistOptionsToYaml(t,{prevKey:n=null,patchAllInCurrentViewIfNoKey:o=!1}={}){var c,s,d,u,f,v,m,y,x;try{let w=this._getLovelace();if(!w)return console.debug("[ddc:import] persist: no lovelace root"),!1;if(typeof w.saveConfig!="function")return console.debug("[ddc:import] persist: dashboard not in Storage mode"),!1;let S=JSON.parse(JSON.stringify(w.config)),T=this._scanDdcCards(S),L=(c=w.current_view)!=null?c:0;console.debug("[ddc:import] persist: found DDC cards",T.map(P=>({view:P.view,path:P.path.join("."),storage_key:P.card.storage_key||null})));let C=(s=t==null?void 0:t.storage_key)!=null?s:null,O=[];n&&O.push(n),C&&O.push(C),this.storageKey&&O.push(this.storageKey),(d=this._config)!=null&&d.storage_key&&O.push(this._config.storage_key);let M=T.filter(P=>P.card.storage_key&&O.includes(P.card.storage_key));if(!M.length){let P=T.filter(R=>R.view===L);P.length===1&&(M=P)}if(!M.length&&T.length===1&&(M=T),!M.length)return console.debug("[ddc:import] persist: no target. Provide a unique storage_key on this card and import again.",{prevKey:n,newKey:C,storageKey:this.storageKey}),!1;let _={type:"custom:drag-and-drop-card",...t};"storage_key"in _&&delete _.storage_key,"storageKey"in _&&delete _.storageKey;for(let P of M){let R=S;for(let $ of P.path)R=R[$];let q=(x=(y=(v=(u=R==null?void 0:R.storage_key)!=null?u:R==null?void 0:R.storageKey)!=null?v:(f=R==null?void 0:R.options)==null?void 0:f.storage_key)!=null?y:(m=R==null?void 0:R.options)==null?void 0:m.storageKey)!=null?x:null,K=!!(n&&C&&q===n&&C!==n);Object.assign(R,_),K?R.storage_key=String(C):q&&(R.storage_key=String(q)),"storageKey"in R&&delete R.storageKey}return console.debug("[ddc:import] persist \u2192 saving",{patched:M.length,keysTried:O,patch}),await w.saveConfig(S),!0}catch(w){return console.warn("[ddc:import] persist error",w),!1}}_queueSave(t="auto"){this._markDirty(t),this.autoSave&&(this._loading||this.editMode&&(this._dbgPush("autosave","Queued",{reason:t,debounce:this.autoSaveDebounce}),clearTimeout(this._saveTimer),this._saveTimer=setTimeout(()=>this._saveLayout(!0),this.autoSaveDebounce)))}async _saveLayout(t=!0){let o=Array.from(this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)")).map(s=>{let d=parseFloat(s.getAttribute("data-x"))||0,u=parseFloat(s.getAttribute("data-y"))||0,f=parseFloat(s.style.width)||s.getBoundingClientRect().width,v=parseFloat(s.style.height)||s.getBoundingClientRect().height,m=parseInt(s.style.zIndex||"1",10),y=this._extractCardConfig(s.firstElementChild),x=s.dataset.tabId||this.defaultTab;return{card:y,position:{x:d,y:u},size:{width:f,height:v},z:m,tabId:x}}),c={version:2,options:this._exportableOptions(),cards:o};try{localStorage.setItem(`ddc_local_${this.storageKey||"default"}`,JSON.stringify(c))}catch{}if(!this.storageKey){t||this._toast("Saved locally (no storage_key set)."),this.__dirty=!1,this._updateApplyBtn();return}try{await this._saveLayoutToBackend(this.storageKey,c),t||this._toast("Layout saved."),this.__dirty=!1,this._updateApplyBtn()}catch(s){console.error("Backend save failed",s),this._dbgPush("save","Backend save failed",{error:String(s)}),t||this._toast("Backend save failed \u2014 kept local copy.")}}async _probeBackend(){this._backendOK=!1;let t=performance.now();try{this._dbgPush("probe","GET /api/dragdrop_storage (list keys)");let n=await this.hass.callApi("get","dragdrop_storage"),o=Math.round(performance.now()-t);this._dbgPush("probe",`OK (${o} ms)`,n),this._backendOK=!!n}catch(n){let o=Math.round(performance.now()-t);this._dbgPush("probe",`FAILED (${o} ms)`,{error:String(n)}),this._backendOK=!1}this._updateStoreBadge()}async _loadLayoutFromBackend(t){let n=`dragdrop_storage/${encodeURIComponent(t)}`,o=performance.now();try{this._dbgPush("load",`GET /api/${n}`);let c=await this.hass.callApi("get",n),s=Math.round(performance.now()-o);return this._dbgPush("load",`OK (${s} ms)`,{bytes:JSON.stringify(c||"").length}),c}catch(c){let s=Math.round(performance.now()-o);return this._dbgPush("load",`FAILED (${s} ms)`,{error:String(c)}),null}}async _saveLayoutToBackend(t,n){let o=`dragdrop_storage/${encodeURIComponent(t)}`,c=JSON.stringify(n).length,s=performance.now();try{this._dbgPush("save",`POST /api/${o}`,{bytes:c});let d=await this.hass.callApi("post",o,n),u=Math.round(performance.now()-s);return this._dbgPush("save",`OK (${u} ms)`,d),d}catch(d){let u=Math.round(performance.now()-s);throw this._dbgPush("save",`FAILED (${u} ms)`,{error:String(d),bytes:c}),d}}async _saveOptionsToBackend(t,n){var o;try{let c=await this._loadLayoutFromBackend(t),s={version:2,...c||{},options:n||((o=this._exportableOptions)==null?void 0:o.call(this))||{}};return c&&Array.isArray(c.cards)&&(s.cards=c.cards),await this._saveLayoutToBackend(t,s),!0}catch(c){return console.warn("[ddc] saveOptionsToBackend failed",c),!1}}_updateStoreBadge(){let t=this.storeBadge;if(!t)return;let n=this._backendOK&&!!this.storageKey;t.textContent=n?"storage: backend - OK":"storage: local. Your Changes are NOT being SAVED. You need to download the Drag and Drop Card backend integration",t.style.background=n?"rgba(76,175,80,.15)":"rgba(255,193,7,.15)",t.style.borderColor=n?"rgba(76,175,80,.45)":"rgba(255,193,7,.45)"}_ensureScreenSaverStyles(){var t;if(!((t=this.shadowRoot)!=null&&t.querySelector("#ddc-screensaver-styles")))try{let n=document.createElement("style");n.id="ddc-screensaver-styles",n.textContent=`
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
    `,n.addEventListener("click",()=>this._deactivateScreenSaver()),n.addEventListener("keydown",()=>this._deactivateScreenSaver()),this.screenSaverOverlay=n,document.body.appendChild(n)}_attachScreensaverListeners(){if(this._screensaverActivityHandler)return;let t=()=>this._resetScreensaverTimer();this._screensaverActivityHandler=t,this._screensaverEvents=["mousemove","mousedown","click","keydown","wheel","scroll","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointercancel"],this._screensaverEvents.forEach(n=>{document.addEventListener(n,t,!0)})}_resetScreensaverTimer(){if(this._screensaverTimer&&(clearTimeout(this._screensaverTimer),this._screensaverTimer=null),!this._shouldUseScreensaver()){this.screensaverActive&&this._deactivateScreenSaver();return}this.screensaverActive&&this._deactivateScreenSaver();let t=Number(this.screenSaverDelay)||5*6e4;this._screensaverTimer=setTimeout(()=>{this._activateScreenSaver()},t)}_activateScreenSaver(){if(this._shouldUseScreensaver()&&(this._ensureScreenSaverOverlay(),!!this.screenSaverOverlay)){this.screensaverActive=!0,this.screenSaverOverlay.classList.add("active");try{this.tabsBar&&(this.__savedTabsDisplay=this.tabsBar.style.display,this.tabsBar.style.display="none")}catch{}this._updateScreenSaverClock(),this._clockInterval&&clearInterval(this._clockInterval),this._clockInterval=setInterval(()=>this._updateScreenSaverClock(),1e3)}}_deactivateScreenSaver(){if(this.screensaverActive){this.screensaverActive=!1,this.screenSaverOverlay&&this.screenSaverOverlay.classList.remove("active"),this._clockInterval&&(clearInterval(this._clockInterval),this._clockInterval=null);try{this.tabsBar&&(this.__savedTabsDisplay!=null?this.tabsBar.style.display=this.__savedTabsDisplay:this.tabsBar.style.display="")}catch{}this._resetScreensaverTimer()}}_updateScreenSaverClock(){let t=this.screenSaverOverlay,n=t==null?void 0:t.querySelector(".screensaver-clock"),o=t==null?void 0:t.querySelector(".screensaver-date"),c=new Date;n&&(n.textContent=c.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"})),o&&(o.textContent=c.toLocaleDateString([],{weekday:"long",year:"numeric",month:"long",day:"numeric"}));try{this._updateScreenSaverCalendar()}catch{}}_updateScreenSaverCalendar(){var w;let t=(w=this.screenSaverOverlay)==null?void 0:w.querySelector(".screensaver-calendar");if(!t)return;let n=new Date,o=void 0,c=n.getFullYear(),s=n.getMonth(),d=n.toLocaleDateString(o,{month:"long"}),u=[];for(let S=0;S<7;S++){let T=new Date(1970,0,4+S);u.push(T.toLocaleDateString(o,{weekday:"short"}))}let f=new Date(c,s,1).getDay(),v=new Date(c,s+1,0).getDate(),m=new Date(c,s,0).getDate(),y=[];for(let S=0;S<f;S++)y.push({day:m-(f-1)+S,other:!0});for(let S=1;S<=v;S++){let T=S===n.getDate();y.push({day:S,today:T,other:!1})}for(;y.length<42;){let S=y.length-f-v+1;y.push({day:S,other:!0})}let x="";x+=`<div class="calendar-header">${d} ${c}</div>`,x+='<div class="calendar-grid">';for(let S=0;S<7;S++)x+=`<div class="header">${u[S]}</div>`;y.forEach((S,T)=>{let L=[];S.other&&L.push("other-month"),S.today&&L.push("today");let C=T%7;(C===0||C===6)&&L.push("weekend"),x+=`<div class="${L.join(" ")}">${S.day}</div>`}),x+="</div>",t.innerHTML=x}_updateScreensaverSettings(){this.screenSaverEnabled?(this._ensureScreenSaverOverlay(),this._attachScreensaverListeners(),this._resetScreensaverTimer()):(this._screensaverTimer&&(clearTimeout(this._screensaverTimer),this._screensaverTimer=null),this.screensaverActive&&this._deactivateScreenSaver())}_shouldUseScreensaver(){try{if(!this.screenSaverEnabled||this.editMode||typeof this._isInHaEditorPreview=="function"&&this._isInHaEditorPreview()||!this.isConnected)return!1}catch{return!1}return!0}_toast(t){let n=new Event("hass-notification");n.detail={message:t},window.dispatchEvent(n)}_huiRoot(){var t,n,o,c,s,d;try{let u=document.querySelector("home-assistant"),f=(t=u==null?void 0:u.shadowRoot)==null?void 0:t.querySelector("home-assistant-main"),v=((n=f==null?void 0:f.shadowRoot)==null?void 0:n.querySelector("ha-drawer"))||f,m=((o=v==null?void 0:v.shadowRoot)==null?void 0:o.querySelector("partial-panel-resolver"))||v,y=((c=m==null?void 0:m.shadowRoot)==null?void 0:c.querySelector("ha-panel-lovelace"))||((s=v==null?void 0:v.shadowRoot)==null?void 0:s.querySelector("ha-panel-lovelace"));return((d=y==null?void 0:y.shadowRoot)==null?void 0:d.querySelector("hui-root"))||null}catch{return null}}getCardSize(){return 3}};if(!customElements.get("drag-and-drop-card")){if(Object.assign(ei.prototype,{_updateGridButtonsVisibility(){var o,c,s,d;let e=!!this.editMode,t=Number((d=(s=(o=this._config)==null?void 0:o.grid)!=null?s:(c=this._options)==null?void 0:c.grid)!=null?d:10)>=10,n=this.cardContainer;if(!e||!t){this._destroyGridCanvas(),n&&n.classList.toggle("grid-on",e);return}this._buildOrUpdateGridCanvas(),n&&n.classList.remove("grid-on")},_requestGridButtonsUpdateSoon(){clearTimeout(this._gridLayoutT),this._gridLayoutT=setTimeout(()=>this._updateGridButtonsVisibility(),50)},_buildOrUpdateGridCanvas(){var v,m,y,x;let e=this.cardContainer;if(!e||!e.isConnected)return;let p=Number((x=(y=(v=this._config)==null?void 0:v.grid)!=null?y:(m=this._options)==null?void 0:m.grid)!=null?x:10);if(this._gridCellSize=p,!this._gridCanvas){let w=document.createElement("canvas");w.className="ddc-grid-canvas",e.insertBefore(w,e.firstChild||null),this._gridCanvas=w,this._gridCtx=w.getContext("2d"),w.addEventListener("pointerdown",S=>this._onGridPointerDown(S),{passive:!0}),w.addEventListener("pointermove",S=>this._onGridPointerMove(S),{passive:!0}),w.addEventListener("pointerup",S=>this._onGridPointerUp(S),{passive:!0}),w.addEventListener("pointercancel",S=>this._onGridPointerCancel(S),{passive:!0}),w.addEventListener("lostpointercapture",S=>this._onGridPointerCancel(S),{passive:!0})}let t=e.getBoundingClientRect(),{sx:n,sy:o}=this._getContainerScale_(),c=n&&isFinite(n)?1/n:1,s=o&&isFinite(o)?1/o:1,d=t.width*c,u=t.height*s,f=Math.max(1,window.devicePixelRatio||1);this._gridCanvas.width=Math.max(1,Math.round(d*f)),this._gridCanvas.height=Math.max(1,Math.round(u*f)),this._gridCanvas.style.width=d+"px",this._gridCanvas.style.height=u+"px",this._gridCols=Math.max(1,Math.ceil(d/p)),this._gridRows=Math.max(1,Math.ceil(u/p)),this._buildGridTile_(p,f),this._markGridDirty()},_destroyGridCanvas(){var e;cancelAnimationFrame(this._gridRAF),this._gridRAF=0,(e=this._gridCanvas)!=null&&e.parentElement&&this._gridCanvas.parentElement.removeChild(this._gridCanvas),this._gridCanvas=null,this._gridCtx=null,this._gridTile=null,this._gridDown=!1,this._gridHoverCol=this._gridHoverRow=-1},_buildGridTile_(e,p){e=e/2;let t=Math.min(10,e*.25),n=Math.max(1,Math.round(e*p)),o=n,c=document.createElement("canvas");c.width=n,c.height=o;let s=c.getContext("2d");s.scale(p,p);let d=0,u=0,f=e,v=e;s.clearRect(0,0,n,o),s.beginPath();let m=Math.min(t,f/2,v/2);s.moveTo(d+m,u),s.arcTo(d+f,u,d+f,u+v,m),s.arcTo(d+f,u+v,d,u+v,m),s.arcTo(d,u+v,d,u,m),s.arcTo(d,u,d+f,u,m),s.closePath(),s.fillStyle="rgba(255,255,255,0.08)",s.fill(),s.strokeStyle="rgba(255,255,255,0.12)",s.lineWidth=1,s.stroke(),this._gridTile=c},_markGridDirty(){this._gridDirty||(this._gridDirty=!0,this._gridRAF=requestAnimationFrame(()=>{this._gridDirty=!1,this._renderGridCanvas_()}))},_renderGridCanvas_(){let e=this._gridCanvas;if(!e)return;let p=this._gridCtx,t=Math.max(1,window.devicePixelRatio||1),n=this._gridCellSize||10,o=this._canvasScale||1;if(p.clearRect(0,0,e.width,e.height),this._gridTile){let c=p.createPattern(this._gridTile,"repeat");p.save(),p.scale(t,t),p.fillStyle=c,p.fillRect(0,0,e.width/t,e.height/t),p.restore()}if(this._gridHoverCol>=0&&this._gridHoverRow>=0){p.save(),p.scale(t,t),p.fillStyle="rgba(0, 160, 255, 0.30)",p.strokeStyle="rgba(0, 160, 255, 0.60)",p.lineWidth=1;let c=this._gridHoverCol*n,s=this._gridHoverRow*n,d=n,u=n;this._roundRect_(p,c,s,d,u,Math.min(10,n*.25)),p.fill(),p.stroke(),p.restore()}if(this._gridDown&&this._gridStartCol>=0&&this._gridStartRow>=0&&this._gridCurrCol>=0&&this._gridCurrRow>=0){let c=Math.min(this._gridStartCol,this._gridCurrCol),s=Math.max(this._gridStartCol,this._gridCurrCol),d=Math.min(this._gridStartRow,this._gridCurrRow),u=Math.max(this._gridStartRow,this._gridCurrRow),f=c*n*o,v=d*n*o,m=(s-c+1)*n*o,y=(u-d+1)*n*o;p.save(),p.scale(t,t),p.fillStyle="rgba(0, 160, 255, 0.22)",p.strokeStyle="rgba(0, 160, 255, 0.45)",p.lineWidth=2,this._roundRect_(p,f,v,m,y,Math.min(12,n*.3)),p.fill(),p.stroke(),p.restore()}},_roundRect_(e,p,t,n,o,c){let s=Math.min(c,n/2,o/2);e.beginPath(),e.moveTo(p+s,t),e.arcTo(p+n,t,p+n,t+o,s),e.arcTo(p+n,t+o,p,t+o,s),e.arcTo(p,t+o,p,t,s),e.arcTo(p,t,p+n,t,s),e.closePath()},_emptySpaceAt_(e,p){let t=document.elementFromPoint(e,p);return!t||!t.closest||!t.closest(".card-wrapper, .resize-handle, .ddc-chip, .shield")},_locToCell_(e,p){let t=this._gridCanvas;if(!t)return{col:-1,row:-1};let n=t.getBoundingClientRect(),{sx:o,sy:c}=this._getContainerScale_(),s=(e-n.left)/(o||1),d=(p-n.top)/(c||1),u=this._gridCellSize||10,f=Math.min(this._gridCols-1,Math.max(0,Math.floor(s/u))),v=Math.min(this._gridRows-1,Math.max(0,Math.floor(d/u)));return{col:f,row:v}},_onGridPointerDown(e){var n,o;if(!this._emptySpaceAt_(e.clientX,e.clientY))return;let{col:p,row:t}=this._locToCell_(e.clientX,e.clientY);this._gridDown=!0,this._gridStartCol=p,this._gridStartRow=t,this._gridCurrCol=p,this._gridCurrRow=t,this._markGridDirty(),(o=(n=e.currentTarget).setPointerCapture)==null||o.call(n,e.pointerId)},_onGridPointerMove(e){let{col:p,row:t}=this._locToCell_(e.clientX,e.clientY);if((p!==this._gridHoverCol||t!==this._gridHoverRow)&&(this._gridHoverCol=p,this._gridHoverRow=t,this._markGridDirty()),!this._gridDown)return;let{col:n,row:o}=this._locToCell_(e.clientX,e.clientY);(n!==this._gridCurrCol||o!==this._gridCurrRow)&&(this._gridCurrCol=n,this._gridCurrRow=o,this._markGridDirty())},async _onGridPointerUp(e){if(!this._gridDown)return;this._gridDown=!1;let p=Math.min(this._gridStartCol,this._gridCurrCol),t=Math.max(this._gridStartCol,this._gridCurrCol),n=Math.min(this._gridStartRow,this._gridCurrRow),o=Math.max(this._gridStartRow,this._gridCurrRow);if((t-p+1)*(o-n+1)<2){this._markGridDirty();return}let s=this._gridCellSize||10,d=p*s,u=n*s,f=(t-p+1)*s,v=(o-n+1)*s;this._markGridDirty(),this._promptNewCardForRect_({x:d,y:u,w:f,h:v})},_onGridPointerCancel(){this._gridDown=!1,this._markGridDirty()},_installGridObservers_(){try{this.__gridRO&&this.__gridRO.disconnect(),this.__gridRO=new ResizeObserver(()=>this._requestGridButtonsUpdateSoon()),this.cardContainer&&this.__gridRO.observe(this.cardContainer)}catch{}clearInterval(this.__gridPollT),this.__gridPrevEditMode=void 0,this.__gridPollT=setInterval(()=>{let e=!!this.editMode;e!==this.__gridPrevEditMode&&(this.__gridPrevEditMode=e,this._updateGridButtonsVisibility())},300)},_uninstallGridObservers_(){var e,p;try{(p=(e=this.__gridRO)==null?void 0:e.disconnect)==null||p.call(e)}catch{}this.__gridRO=null,clearInterval(this.__gridPollT),this.__gridPollT=null},_gridRectToCardRect_({x:e,y:p,w:t,h:n}){let o=this.cardContainer,c=this._gridCanvas;if(!o||!c)return{x:e,y:p,w:t,h:n};let s=getComputedStyle(o),d=parseFloat(s.paddingLeft)||0,u=parseFloat(s.paddingTop)||0,f=parseFloat(s.borderLeftWidth)||0,v=parseFloat(s.borderTopWidth)||0,m=o.scrollLeft||0,y=o.scrollTop||0,x=e+d+f+m,w=p+u+v+y;return{x,y:w,w:t,h:n}},_getContainerScale_(){let e=this.cardContainer;if(!e)return{sx:1,sy:1};let p=getComputedStyle(e).transform;if(!p||p==="none")return{sx:1,sy:1};let t=p.match(/matrix\(([^)]+)\)/);if(t){let[o,,,c]=t[1].split(",").map(s=>parseFloat(s.trim()));return{sx:isFinite(o)&&o?o:1,sy:isFinite(c)&&c?c:1}}let n=p.match(/matrix3d\(([^)]+)\)/);if(n){let o=n[1].split(",").map(c=>parseFloat(c.trim()));return{sx:isFinite(o[0])&&o[0]?o[0]:1,sy:isFinite(o[5])&&o[5]?o[5]:1}}return{sx:1,sy:1}},_canvasRectToContainerRect_({x:e,y:p,w:t,h:n}){let o=this.cardContainer,c=this._gridCanvas;if(!o||!c)return{x:e,y:p,w:t,h:n};let s=getComputedStyle(o),d=parseFloat(s.paddingLeft)||0,u=parseFloat(s.paddingTop)||0,f=parseFloat(s.borderLeftWidth)||0,v=parseFloat(s.borderTopWidth)||0,{sx:m,sy:y}=this._getContainerScale_(),x=c.getBoundingClientRect(),w=o.getBoundingClientRect(),S=x.left+e,T=x.top+p,L=S-w.left,C=T-w.top;L-=d+f,C-=u+v;let O=m?1/m:1,M=y?1/y:1,_=L*O,P=C*M,R=t*O,q=n*M;return{x:_,y:P,w:R,h:q}},async _promptNewCardForRect_({x:e,y:p,w:t,h:n}){var o,c,s,d;try{let u=this._gridCellSize||Number((d=(s=(o=this._config)==null?void 0:o.grid)!=null?s:(c=this._options)==null?void 0:c.grid)!=null?d:10),f=T=>Math.round(T/u)*u,v=f(e),m=f(p),y=Math.max(u,f(t)),x=Math.max(u,f(n)),w;try{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&typeof this._canvasRectToContainerRect_=="function"?w=this._canvasRectToContainerRect_({x:v,y:m,w:y,h:x}):typeof this._gridRectToCardRect_=="function"?w=this._gridRectToCardRect_({x:v,y:m,w:y,h:x}):w={x:v,y:m,w:y,h:x}}catch{w={x:v,y:m,w:y,h:x}}let S={x:Math.round(w.x),y:Math.round(w.y),w:Math.round(w.w),h:Math.round(w.h)};this.__pendingAddRect=S,await this._openSmartPicker("add",null,null)}catch(u){console.warn("[ddc] _promptNewCardForRect_ failed",u)}}}),!ei.prototype.__addPickedPatched){let e=ei.prototype._addPickedCardToLayout;ei.prototype._addPickedCardToLayout=async function(p){var t,n,o,c,s,d,u,f,v;if(this&&this.__pendingAddRect){let{x:m,y,w:x,h:w}=this.__pendingAddRect;this.__pendingAddRect=null;try{(t=this._hideEmptyPlaceholder)==null||t.call(this)}catch{}let S=await this._createCard(p),T=this._makeWrapper(S),C=String(this.containerSizeMode||this.container_size_mode||((n=this._config)==null?void 0:n.container_size_mode)||"dynamic").toLowerCase()==="auto",O=C?-11:11,M=C?-11:11,_=Math.round(m)-O,P=Math.round(y)-M;this._setCardPosition(T,_,P),T.style.width=`${Math.round(x)}px`,T.style.height=`${Math.round(w)}px`;{let R=this._highestZ()+1;T.style.zIndex=String(Math.max(R,6))}T.dataset.tabId=this._normalizeTabId(this.activeTab||this.defaultTab),this.cardContainer.appendChild(T);try{(o=this._rebuildOnce)==null||o.call(this,T.firstElementChild)}catch{}try{(c=this._initCardInteract)==null||c.call(this,T)}catch{}try{(s=this._resizeContainer)==null||s.call(this)}catch{}try{(d=this._queueSave)==null||d.call(this,"add")}catch{}try{(u=this._toast)==null||u.call(this,"Card added to selection.")}catch{}try{(f=this._syncEmptyStateUI)==null||f.call(this)}catch{}try{(v=this._applyVisibility_)==null||v.call(this)}catch{}requestAnimationFrame(()=>{var R,q,K,$;try{String(this.containerSizeMode||this.container_size_mode||((R=this._config)==null?void 0:R.container_size_mode)||"dynamic").toLowerCase()==="auto"?(q=this._applyAutoFillNoScale)==null||q.call(this):this.autoResizeCards&&((K=this._applyAutoScale)==null||K.call(this)),($=this._requestGridButtonsUpdateSoon)==null||$.call(this)}catch{}});return}return await e.call(this,p)},ei.prototype.__addPickedPatched=!0}customElements.define("drag-and-drop-card",ei);try{Array.isArray(window.customCards)||(window.customCards=[]),window.customCards.some(p=>p&&typeof p.type=="string"&&p.type.toLowerCase()==="custom:drag-and-drop-card")||window.customCards.push({type:"drag-and-drop-card",name:"Drag & Drop Card",description:"Flexible grid layout card with drag\u2011and\u2011drop editing.",preview:!1,icon:"mdi:cursor-move"})}catch(e){console.warn("[drag-and-drop-card] Failed to register card in customCards",e)}}(()=>{let e=new WeakSet,p=s=>{try{if(!(s instanceof Element))return!1;let d=s.localName||"";return d?!!(d==="ha-card"||d.endsWith("-card")):!1}catch{return!1}},t=s=>{try{if(!s||e.has(s))return;e.add(s),s.dispatchEvent(new Event("ll-rebuild",{bubbles:!0,composed:!0}))}catch{}},n=s=>{var d,u;try{if(!s)return;s instanceof Element&&p(s)&&t(s);let f=(u=(d=(s instanceof ShadowRoot,s)).querySelectorAll)==null?void 0:u.call(d,"*");if(!f)return;for(let v of f){p(v)&&t(v);let m=v.shadowRoot;if(m)try{n(m)}catch{}}}catch{}},o=s=>{try{if(!s||s.__ddcCardModIntegrated)return;s.__ddcCardModIntegrated=!0;let d=s.shadowRoot||s;n(d);let u=new MutationObserver(f=>{for(let v of f)if(!(!v.addedNodes||!v.addedNodes.length))for(let m of v.addedNodes)(m instanceof Element||m instanceof ShadowRoot)&&n(m)});u.observe(d,{childList:!0,subtree:!0}),s.__ddcCardModIntegratedObserver=u,setTimeout(()=>{try{n(d)}catch{}},250),setTimeout(()=>{try{n(d)}catch{}},1e3)}catch{}},c=()=>{try{document.querySelectorAll("drag-and-drop-card").forEach(o)}catch{}};if(window.customElements&&window.customElements.whenDefined)window.customElements.whenDefined("drag-and-drop-card").then(()=>{c();let s=window.customElements.get("drag-and-drop-card");if(s&&s.prototype){let u=s.prototype.connectedCallback;s.prototype.connectedCallback=function(){try{u&&u.call(this)}finally{o(this)}}}new MutationObserver(()=>c()).observe(document.documentElement,{childList:!0,subtree:!0})});else{let s=setInterval(c,1e3);setTimeout(()=>clearInterval(s),1e4)}})();(function(){let e="drag-and-drop-card",p=customElements.get(e);if(!p){console.warn("[ddc:augment] Could not find custom element",e);return}function t(){var S,T;try{let L=0,C=this;for(;C&&L++<20;){let _=(S=C.getRootNode)==null?void 0:S.call(C),P=_==null?void 0:_.host;if((P==null?void 0:P.tagName)==="HUI-ROOT")return P.lovelace;C=P||C.parentElement}let O=new Set,M=[document];for(;M.length;){let _=M.shift();if(!(!_||O.has(_))){if(O.add(_),((T=_.host)==null?void 0:T.tagName)==="HUI-ROOT")return _.host.lovelace;if(_.tagName==="HUI-ROOT")return _.lovelace;if(_.shadowRoot&&M.push(_.shadowRoot),_.children)for(let P of _.children)M.push(P)}}}catch{}}function n(S){let T=[],L=(O,M,_)=>{(_==null?void 0:_.type)==="custom:drag-and-drop-card"&&T.push({view:O,path:[...M],card:_})},C=(O,M,_)=>{if(O){if(Array.isArray(O)){O.forEach((P,R)=>C(P,M,_.concat(R)));return}if(typeof O=="object"){"type"in O&&L(M,_,O);for(let[P,R]of Object.entries(O))P==="views"&&Array.isArray(R)?R.forEach((q,K)=>C(q,K,["views",K])):(Array.isArray(R)||R&&typeof R=="object")&&C(R,M,_.concat(P))}}};return C(S,-1,[]),T}function o(S,T,L){let C=new Date().toISOString().replace(/[:.]/g,"-"),O=T.map(_=>{let P=S;for(let R of _.path)P=P[R];return{view:_.view,path:_.path,storage_key:P&&P.storage_key||null,before:P,patch:L}}),M={kind:"ddc-import-backup",created_at:C,count:O.length,items:O};try{let _=`ddc.backup.${C}`;localStorage.setItem(_,JSON.stringify(M));let P=Object.keys(localStorage).filter(R=>R.startsWith("ddc.backup.")).sort().reverse();for(let R of P.slice(10))localStorage.removeItem(R)}catch{}return{name:`ddc_backup_${C}.json`,data:M}}function c(S,T){try{let L=new Blob([JSON.stringify(T,null,2)],{type:"application/json"}),C=URL.createObjectURL(L),O=document.createElement("a");O.href=C,O.download=S,document.body.appendChild(O),O.click(),O.remove(),setTimeout(()=>URL.revokeObjectURL(C),1500)}catch(L){console.warn("[ddc:backup] download failed",L)}}function s(S){if(S)try{let T="ddc.recent.keys",L=JSON.parse(localStorage.getItem(T)||"[]");L.includes(S)||L.unshift(S),localStorage.setItem(T,JSON.stringify(L.slice(0,20)))}catch{}}function d(){try{return JSON.parse(localStorage.getItem("ddc.recent.keys")||"[]")}catch{return[]}}function u(){var T,L;let S=new Set;try{let C=Object.keys(localStorage).filter(O=>O.startsWith("ddc.backup.")).sort().reverse();for(let O of C)try{let M=JSON.parse(localStorage.getItem(O)||"null");if(M&&M.items)for(let _ of M.items){let P=((T=_==null?void 0:_.before)==null?void 0:T.storage_key)||((L=_==null?void 0:_.patch)==null?void 0:L.storage_key);P&&S.add(P)}}catch{}}catch{}return Array.from(S)}async function f(S,{forceTargetKey:T=null,onlyThisCard:L=!1,prevKey:C,noDownload:O}={}){var ce,We,ye,ze,we;let M=((ce=this._getLovelace)==null?void 0:ce.call(this))||t.call(this);if(!M)return console.debug("[ddc:import] persist: no lovelace root"),!1;if(typeof M.saveConfig!="function")return console.debug("[ddc:import] persist: dashboard not in Storage mode"),!1;let _=Ee=>typeof Ee=="string"?Ee.trim():null,P=_(T)||_((We=this==null?void 0:this._config)==null?void 0:We.storage_key)||_(this==null?void 0:this.storageKey)||_(C);if(!P)return console.warn("[ddc:import] persist: missing target storage_key on this card; aborting"),!1;let R=JSON.parse(JSON.stringify(M.config)),q=(this._scanDdcCards||n)(R);console.debug("[ddc:import] persist: found DDC cards",q.map(Ee=>({view:Ee.view,path:Ee.path.join("."),storage_key:Ee.card&&(Ee.card.storage_key||Ee.card.storageKey)||null})));let K=q.filter(Ee=>{var Ve,De,Ge,st,ct,ae,ut,lt,Le;return((Le=(ae=(Ge=_((Ve=Ee.card)==null?void 0:Ve.storage_key))!=null?Ge:_((De=Ee.card)==null?void 0:De.storageKey))!=null?ae:_((ct=(st=Ee.card)==null?void 0:st.options)==null?void 0:ct.storage_key))!=null?Le:_((lt=(ut=Ee.card)==null?void 0:ut.options)==null?void 0:lt.storageKey))===P});if(K.length!==1)return console.warn("[ddc:import] persist: expected exactly one target with key, got",K.length,{myKey:P}),!1;let $={type:"custom:drag-and-drop-card",...S||{}};"storage_key"in $&&delete $.storage_key,"storageKey"in $&&delete $.storageKey,$!=null&&$.options&&("storage_key"in $.options&&delete $.options.storage_key,"storageKey"in $.options&&delete $.options.storageKey);let re=Array.isArray($.cards)?$.cards:null;delete $.cards;try{let Ee=o==null?void 0:o(M.config,K,$);Ee&&(console.debug("[ddc:import] backup created",{file:Ee.name,items:(ye=Ee.data)==null?void 0:ye.count}),!O&&typeof c=="function"&&c(Ee.name,Ee.data))}catch(Ee){console.debug("[ddc:import] backup skipped/error:",(Ee==null?void 0:Ee.message)||Ee)}let F=K[0],U=R;for(let Ee of F.path)U=U[Ee];let V=(we=(ze=_(U==null?void 0:U.storage_key))!=null?ze:_(U==null?void 0:U.storageKey))!=null?we:null;return Object.assign(U,$),V?U.storage_key=V:U.storage_key=P,"storageKey"in U&&delete U.storageKey,console.debug("[ddc:import] persist \u2192 saving",{patched:1,into_key:U.storage_key,ignored_file_key:_(S==null?void 0:S.storage_key)||_(S==null?void 0:S.storageKey)||null}),await M.saveConfig(R),{yamlSaved:!0,cardsForStorage:re}}async function v(){var L;let S=C=>{if(!C)return[];if(Array.isArray(C))return C;if(Array.isArray(C==null?void 0:C.keys))return C.keys;if(Array.isArray(C==null?void 0:C.dashboards))return C.dashboards;if(Array.isArray(C==null?void 0:C.entries))return C.entries.map(O=>O.key||O.id||O.name).filter(Boolean);if(Array.isArray(C==null?void 0:C.items))return C.items.map(O=>O.key||O.id||O.name).filter(Boolean);if(typeof C=="object"){for(let O of Object.values(C))if(Array.isArray(O)&&O.every(M=>typeof M=="string"))return O}return[]};try{if((L=this==null?void 0:this.hass)!=null&&L.callApi){let C=await this.hass.callApi("get","dragdrop_storage"),O=S(C);if(O.length)return O}}catch(C){console.debug("[ddc:switcher] hass.callApi dragdrop_storage failed",C)}let T=["/api/dragdrop_storage","/api/dragdrop_storage/keys","/api/dragdrop_storage/list","/api/dragdrop_storage?all=1"];for(let C of T)try{let M=await(await fetch(C,{cache:"no-store"})).json(),_=S(M);if(_.length)return _}catch{}return[]}async function m(S){let T=M=>{if(!M)return null;if(M.options||M.cards)return M;if(typeof M.design=="object")return M.design;if(typeof M.payload=="object")return M.payload;try{if(typeof M=="string")return JSON.parse(M)}catch{}return null},L=async(M,_,P)=>{var R;try{if((R=this==null?void 0:this.hass)!=null&&R.callApi){let q=await this.hass.callApi(M,_,P),K=T(q);if(K)return K}}catch{}return null},C=async M=>{try{let _=await fetch(M,{cache:"no-store"}),P=_.headers.get("content-type")||"";if(P.includes("application/json")||P.includes("text/plain")){let R=await _.json().catch(()=>null)||await _.text().catch(()=>null),q=T(R);if(q)return q}}catch{}return null},O=encodeURIComponent(S);return await(L("get",`dragdrop_storage/${O}`)||C(`/api/dragdrop_storage/${O}`)||C(`/api/dragdrop_storage?key=${O}`)||L("post","dragdrop_storage/get",{key:S})||null)}async function y(S,{source:T="switcher",newKey:L=null}={}){var M,_,P,R,q,K,$,re,F,U,V,ce,We,ye,ze,we,Ee,et,Ve,De,Ge,st,ct,ae,ut,lt;if(!S||typeof S!="object")throw new Error("Invalid design payload");let C=this.storageKey||((M=this._config)==null?void 0:M.storage_key)||null;try{(_=this._dbgInit)==null||_.call(this),(P=this._dbgPush)==null||P.call(this,"import","Begin import (programmatic)",{source:T,newKey:L})}catch{}if(S.options){let{storage_key:Le,...oe}=S.options;(R=this._applyImportedOptions)==null||R.call(this,oe,!0)}else typeof S.grid=="number"&&((q=this._applyImportedOptions)==null||q.call(this,{grid:S.grid},!0));let O=L||((K=S==null?void 0:S.options)==null?void 0:K.storage_key)||C;if(O){this.storageKey=O,this._config={...this._config||{},storage_key:O};try{($=this._syncEditorsStorageKey)==null||$.call(this)}catch{}}try{let Le=(re=S.options)!=null?re:typeof S.grid=="number"?{grid:S.grid}:{};await((F=this._persistOptionsToYaml)==null?void 0:F.call(this,{...Le,storage_key:O},{prevKey:C,noDownload:T==="switcher"}))}catch(Le){console.warn("[ddc:apply] persist failed",Le)}try{if(this.cardContainer.innerHTML="",Array.isArray(S.cards)&&S.cards.length)for(let Le of S.cards)if(!(Le!=null&&Le.card)||typeof Le.card=="object"&&Object.keys(Le.card).length===0){let oe=(ye=this._makePlaceholderAt)==null?void 0:ye.call(this,((U=Le.position)==null?void 0:U.x)||0,((V=Le.position)==null?void 0:V.y)||0,((ce=Le.size)==null?void 0:ce.width)||200,((We=Le.size)==null?void 0:We.height)||200);oe&&this.cardContainer.appendChild(oe)}else{let oe=await this._createCard(Le.card),Ye=this._makeWrapper(oe);(Ee=this._setCardPosition)==null||Ee.call(this,Ye,((ze=Le.position)==null?void 0:ze.x)||0,((we=Le.position)==null?void 0:we.y)||0),Ye.style.width=`${((et=Le.size)==null?void 0:et.width)||140}px`,Ye.style.height=`${((Ve=Le.size)==null?void 0:Ve.height)||100}px`,Le.z!=null&&(Ye.style.zIndex=String(Le.z)),this.cardContainer.appendChild(Ye);try{(De=this._rebuildOnce)==null||De.call(this,Ye.firstElementChild)}catch{}(Ge=this._initCardInteract)==null||Ge.call(this,Ye)}else(st=this._showEmptyPlaceholder)==null||st.call(this);(ct=this._resizeContainer)==null||ct.call(this),(ae=this._markDirty)==null||ae.call(this,"import"),(ut=this._toast)==null||ut.call(this,T==="switcher"?`Loaded layout "${O}"`:"Design imported")}catch(Le){console.error("[ddc:apply] rebuild failed",Le),(lt=this._toast)==null||lt.call(this,"Import failed during rebuild.")}}function x(){var S,T;try{let L=this.shadowRoot||this.renderRoot||this,C=L.querySelector(".ddc-switcher-inline");if(!C)return;let O=((S=this._getLovelace)==null?void 0:S.call(this))||t.call(this),M=!1;try{let _=(T=L.getRootNode&&L.getRootNode())==null?void 0:T.host;M=!!(O&&(O.editMode===!0||_&&_.editMode===!0))}catch{}C.style.display=M?"inline-flex":"none"}catch{}}function w(){try{if(this._ddcSwitcherInstalled)return;let T=(this.shadowRoot||this.renderRoot||this).querySelector(".toolbar");if(!T)return;let L=document.createElement("div");L.className="ddc-switcher-inline",Object.assign(L.style,{display:"inline-flex",gap:"6px",alignItems:"center",marginLeft:"auto"});let C=document.createElement("span");C.textContent="Layout:",C.style.fontSize="12px",C.style.opacity="0.8";let O=document.createElement("select");Object.assign(O.style,{fontSize:"12px",padding:"4px 6px",borderRadius:"8px",border:"1px solid var(--divider-color, #999)",background:"var(--card-background-color, #fff)"}),O.title="Select stored layout (storage_key)",O.id="ddcKeySelect";let M=document.createElement("button");M.className="btn secondary",M.type="button",M.style.padding="6px 10px",M.innerHTML='<ha-icon icon="mdi:refresh"></ha-icon><span style="margin-left:6px">Refresh</span>',L.appendChild(C),L.appendChild(O),L.appendChild(M),T.appendChild(L),this._ddcSwitcherInstalled=!0;let _=async()=>{let P=this.storageKey||this._config&&this._config.storage_key||"",R=await v.call(this),q=u(),K=d(),$=ce=>Array.from(new Set(ce.filter(Boolean))),re=$(R),F=$(q),U=$(K);if(O.innerHTML="",P&&!re.includes(P)&&!F.includes(P)&&!U.includes(P)){let ce=document.createElement("option");ce.value=P,ce.textContent=`${P} (current)`,ce.selected=!0,O.appendChild(ce)}let V=(ce,We)=>{if(!We.length)return;let ye=document.createElement("optgroup");ye.label=ce,We.forEach(ze=>{let we=document.createElement("option");we.value=ze,we.textContent=ze,ze===P&&(we.selected=!0),ye.appendChild(we)}),O.appendChild(ye)};if(V("Server",re),V("Backups",F),V("Recent",U),!O.children.length){let ce=document.createElement("option");ce.value="",ce.textContent="\u2014 none \u2014",ce.selected=!0,O.appendChild(ce)}x.call(this)};_(),M.addEventListener("click",_),O.addEventListener("change",async P=>{var q,K,$,re,F,U,V,ce;let R=String(P.target.value||"");if(R&&!this._ddcLoadingFromKey){this._ddcLoadingFromKey=!0;try{let We=await m.call(this,R);if(!We){(q=this._toast)==null||q.call(this,`No layout found for "${R}"`);return}await y.call(this,We,{source:"switcher",newKey:R}),(K=this._resizeContainer)==null||K.call(this),($=this._toast)==null||$.call(this,`Loaded layout "${R}"`);let ye=String(((re=this._config)==null?void 0:re.storage_key)||this.storageKey||""),ze=!1;try{let we=ye?{forceTargetKey:ye,noDownload:!0}:{noDownload:!0};ze=await this._persistOptionsToYaml({storage_key:R},we)}catch(we){console.warn("[ddc:switcher] failed to persist storage_key to YAML",we),(F=this._toast)==null||F.call(this,"Failed to persist selected layout. Keeping current.");return}if(this.storageKey=R,this._config&&(this._config.storage_key=R),!ze){console.warn("[ddc:switcher] persist returned false (likely YAML mode). Skipping reload.");return}try{this._saveTimer&&clearTimeout(this._saveTimer),await this._saveLayout(!0)}catch(we){console.warn("[ddc:switcher] saveLayout failed",we),(U=this._markDirty)==null||U.call(this,"switcher"),(V=this._toast)==null||V.call(this,"Layout loaded \u2014 click Apply to save.");return}window.location.reload(),window.location.reload()}catch(We){console.warn("[ddc:switcher] load/apply failed",We),(ce=this._toast)==null||ce.call(this,"Failed to load layout.")}finally{this._ddcLoadingFromKey=!1}}}),this._ddcVisTimer&&clearInterval(this._ddcVisTimer),this._ddcVisTimer=setInterval(()=>x.call(this),800),x.call(this)}catch(S){console.warn("[ddc:switcher] inline install failed",S)}}p.prototype._getLovelace||(p.prototype._getLovelace=t),p.prototype._scanDdcCards||(p.prototype._scanDdcCards=n),p.prototype._persistOptionsToYaml=f,p.prototype._applyDesignObject||(p.prototype._applyDesignObject=y);try{let S=Object.getOwnPropertyDescriptor(p.prototype,"hass");if(S&&(S.set||S.get)){let T=S.set;Object.defineProperty(p.prototype,"hass",{configurable:!0,enumerable:!0,set(L){T&&T.call(this,L);try{w.call(this)}catch{}},get:S.get||function(){return this._hass}})}else if(typeof p.prototype.setHass=="function"){let T=p.prototype.setHass;p.prototype.setHass=function(L){T&&T.call(this,L);try{w.call(this)}catch{}}}else{let T=p.prototype.updated||p.prototype.firstUpdated;p.prototype.updated=function(...L){T&&T.apply(this,L);try{w.call(this)}catch{}}}}catch(S){console.warn("[ddc:switcher] wrap hass setter failed",S)}})();
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
