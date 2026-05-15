var Ka=Object.create;var bn=Object.defineProperty;var Ya=Object.getOwnPropertyDescriptor;var Ua=Object.getOwnPropertyNames;var Ga=Object.getPrototypeOf,Ja=Object.prototype.hasOwnProperty;var Xa=(r,w,e)=>w in r?bn(r,w,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[w]=e;var Qa=(r,w)=>()=>(w||r((w={exports:{}}).exports,w),w.exports);var Za=(r,w,e,t)=>{if(w&&typeof w=="object"||typeof w=="function")for(let i of Ua(w))!Ja.call(r,i)&&i!==e&&bn(r,i,{get:()=>w[i],enumerable:!(t=Ya(w,i))||t.enumerable});return r};var eo=(r,w,e)=>(e=r!=null?Ka(Ga(r)):{},Za(w||!r||!r.__esModule?bn(e,"default",{value:r,enumerable:!0}):e,r));var Dt=(r,w,e)=>Xa(r,typeof w!="symbol"?w+"":w,e);var Hn=Qa((yn,qi)=>{(function(r,w){typeof yn=="object"&&typeof qi!="undefined"?qi.exports=w():typeof define=="function"&&define.amd?define(w):(r=typeof globalThis!="undefined"?globalThis:r||self).interact=w()})(yn,(function(){"use strict";function r(s,a){var d=Object.keys(s);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(s);a&&(f=f.filter((function(v){return Object.getOwnPropertyDescriptor(s,v).enumerable}))),d.push.apply(d,f)}return d}function w(s){for(var a=1;a<arguments.length;a++){var d=arguments[a]!=null?arguments[a]:{};a%2?r(Object(d),!0).forEach((function(f){o(s,f,d[f])})):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(d)):r(Object(d)).forEach((function(f){Object.defineProperty(s,f,Object.getOwnPropertyDescriptor(d,f))}))}return s}function e(s){return e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},e(s)}function t(s,a){if(!(s instanceof a))throw new TypeError("Cannot call a class as a function")}function i(s,a){for(var d=0;d<a.length;d++){var f=a[d];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,b(f.key),f)}}function n(s,a,d){return a&&i(s.prototype,a),d&&i(s,d),Object.defineProperty(s,"prototype",{writable:!1}),s}function o(s,a,d){return(a=b(a))in s?Object.defineProperty(s,a,{value:d,enumerable:!0,configurable:!0,writable:!0}):s[a]=d,s}function c(s,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function");s.prototype=Object.create(a&&a.prototype,{constructor:{value:s,writable:!0,configurable:!0}}),Object.defineProperty(s,"prototype",{writable:!1}),a&&g(s,a)}function l(s){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(a){return a.__proto__||Object.getPrototypeOf(a)},l(s)}function g(s,a){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(d,f){return d.__proto__=f,d},g(s,a)}function u(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function m(s){var a=(function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch{return!1}})();return function(){var d,f=l(s);if(a){var v=l(this).constructor;d=Reflect.construct(f,arguments,v)}else d=f.apply(this,arguments);return(function(k,L){if(L&&(typeof L=="object"||typeof L=="function"))return L;if(L!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return u(k)})(this,d)}}function h(){return h=typeof Reflect!="undefined"&&Reflect.get?Reflect.get.bind():function(s,a,d){var f=(function(k,L){for(;!Object.prototype.hasOwnProperty.call(k,L)&&(k=l(k))!==null;);return k})(s,a);if(f){var v=Object.getOwnPropertyDescriptor(f,a);return v.get?v.get.call(arguments.length<3?s:d):v.value}},h.apply(this,arguments)}function b(s){var a=(function(d,f){if(typeof d!="object"||d===null)return d;var v=d[Symbol.toPrimitive];if(v!==void 0){var k=v.call(d,f||"default");if(typeof k!="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return(f==="string"?String:Number)(d)})(s,"string");return typeof a=="symbol"?a:a+""}var y=function(s){return!(!s||!s.Window)&&s instanceof s.Window},_=void 0,A=void 0;function T(s){_=s;var a=s.document.createTextNode("");a.ownerDocument!==s.document&&typeof s.wrap=="function"&&s.wrap(a)===a&&(s=s.wrap(s)),A=s}function E(s){return y(s)?s:(s.ownerDocument||s).defaultView||A.window}typeof window!="undefined"&&window&&T(window);var M=function(s){return!!s&&e(s)==="object"},O=function(s){return typeof s=="function"},C={window:function(s){return s===A||y(s)},docFrag:function(s){return M(s)&&s.nodeType===11},object:M,func:O,number:function(s){return typeof s=="number"},bool:function(s){return typeof s=="boolean"},string:function(s){return typeof s=="string"},element:function(s){if(!s||e(s)!=="object")return!1;var a=E(s)||A;return/object|function/.test(typeof Element=="undefined"?"undefined":e(Element))?s instanceof Element||s instanceof a.Element:s.nodeType===1&&typeof s.nodeName=="string"},plainObject:function(s){return M(s)&&!!s.constructor&&/function Object\b/.test(s.constructor.toString())},array:function(s){return M(s)&&s.length!==void 0&&O(s.splice)}};function $(s){var a=s.interaction;if(a.prepared.name==="drag"){var d=a.prepared.axis;d==="x"?(a.coords.cur.page.y=a.coords.start.page.y,a.coords.cur.client.y=a.coords.start.client.y,a.coords.velocity.client.y=0,a.coords.velocity.page.y=0):d==="y"&&(a.coords.cur.page.x=a.coords.start.page.x,a.coords.cur.client.x=a.coords.start.client.x,a.coords.velocity.client.x=0,a.coords.velocity.page.x=0)}}function q(s){var a=s.iEvent,d=s.interaction;if(d.prepared.name==="drag"){var f=d.prepared.axis;if(f==="x"||f==="y"){var v=f==="x"?"y":"x";a.page[v]=d.coords.start.page[v],a.client[v]=d.coords.start.client[v],a.delta[v]=0}}}var F={id:"actions/drag",install:function(s){var a=s.actions,d=s.Interactable,f=s.defaults;d.prototype.draggable=F.draggable,a.map.drag=F,a.methodDict.drag="draggable",f.actions.drag=F.defaults},listeners:{"interactions:before-action-move":$,"interactions:action-resume":$,"interactions:action-move":q,"auto-start:check":function(s){var a=s.interaction,d=s.interactable,f=s.buttons,v=d.options.drag;if(v&&v.enabled&&(!a.pointerIsDown||!/mouse|pointer/.test(a.pointerType)||(f&d.options.drag.mouseButtons)!=0))return s.action={name:"drag",axis:v.lockAxis==="start"?v.startAxis:v.lockAxis},!1}},draggable:function(s){return C.object(s)?(this.options.drag.enabled=s.enabled!==!1,this.setPerAction("drag",s),this.setOnEvents("drag",s),/^(xy|x|y|start)$/.test(s.lockAxis)&&(this.options.drag.lockAxis=s.lockAxis),/^(xy|x|y)$/.test(s.startAxis)&&(this.options.drag.startAxis=s.startAxis),this):C.bool(s)?(this.options.drag.enabled=s,this):this.options.drag},beforeMove:$,move:q,defaults:{startAxis:"xy",lockAxis:"xy"},getCursor:function(){return"move"},filterEventType:function(s){return s.search("drag")===0}},j=F,H={init:function(s){var a=s;H.document=a.document,H.DocumentFragment=a.DocumentFragment||U,H.SVGElement=a.SVGElement||U,H.SVGSVGElement=a.SVGSVGElement||U,H.SVGElementInstance=a.SVGElementInstance||U,H.Element=a.Element||U,H.HTMLElement=a.HTMLElement||H.Element,H.Event=a.Event,H.Touch=a.Touch||U,H.PointerEvent=a.PointerEvent||a.MSPointerEvent},document:null,DocumentFragment:null,SVGElement:null,SVGSVGElement:null,SVGElementInstance:null,Element:null,HTMLElement:null,Event:null,Touch:null,PointerEvent:null};function U(){}var X=H,te={init:function(s){var a=X.Element,d=s.navigator||{};te.supportsTouch="ontouchstart"in s||C.func(s.DocumentTouch)&&X.document instanceof s.DocumentTouch,te.supportsPointerEvent=d.pointerEnabled!==!1&&!!X.PointerEvent,te.isIOS=/iP(hone|od|ad)/.test(d.platform),te.isIOS7=/iP(hone|od|ad)/.test(d.platform)&&/OS 7[^\d]/.test(d.appVersion),te.isIe9=/MSIE 9/.test(d.userAgent),te.isOperaMobile=d.appName==="Opera"&&te.supportsTouch&&/Presto/.test(d.userAgent),te.prefixedMatchesSelector="matches"in a.prototype?"matches":"webkitMatchesSelector"in a.prototype?"webkitMatchesSelector":"mozMatchesSelector"in a.prototype?"mozMatchesSelector":"oMatchesSelector"in a.prototype?"oMatchesSelector":"msMatchesSelector",te.pEventTypes=te.supportsPointerEvent?X.PointerEvent===s.MSPointerEvent?{up:"MSPointerUp",down:"MSPointerDown",over:"mouseover",out:"mouseout",move:"MSPointerMove",cancel:"MSPointerCancel"}:{up:"pointerup",down:"pointerdown",over:"pointerover",out:"pointerout",move:"pointermove",cancel:"pointercancel"}:null,te.wheelEvent=X.document&&"onmousewheel"in X.document?"mousewheel":"wheel"},supportsTouch:null,supportsPointerEvent:null,isIOS7:null,isIOS:null,isIe9:null,isOperaMobile:null,prefixedMatchesSelector:null,pEventTypes:null,wheelEvent:null},re=te;function le(s,a){if(s.contains)return s.contains(a);for(;a;){if(a===s)return!0;a=a.parentNode}return!1}function Le(s,a){for(;C.element(s);){if(de(s,a))return s;s=me(s)}return null}function me(s){var a=s.parentNode;if(C.docFrag(a)){for(;(a=a.host)&&C.docFrag(a););return a}return a}function de(s,a){return A!==_&&(a=a.replace(/\/deep\//g," ")),s[re.prefixedMatchesSelector](a)}var Ce=function(s){return s.parentNode||s.host};function ue(s,a){for(var d,f=[],v=s;(d=Ce(v))&&v!==a&&d!==v.ownerDocument;)f.unshift(v),v=d;return f}function Ae(s,a,d){for(;C.element(s);){if(de(s,a))return!0;if((s=me(s))===d)return de(s,a)}return!1}function ye(s){return s.correspondingUseElement||s}function Se(s){var a=s instanceof X.SVGElement?s.getBoundingClientRect():s.getClientRects()[0];return a&&{left:a.left,right:a.right,top:a.top,bottom:a.bottom,width:a.width||a.right-a.left,height:a.height||a.bottom-a.top}}function B(s){var a,d=Se(s);if(!re.isIOS7&&d){var f={x:(a=(a=E(s))||A).scrollX||a.document.documentElement.scrollLeft,y:a.scrollY||a.document.documentElement.scrollTop};d.left+=f.x,d.right+=f.x,d.top+=f.y,d.bottom+=f.y}return d}function p(s){for(var a=[];s;)a.push(s),s=me(s);return a}function x(s){return!!C.string(s)&&(X.document.querySelector(s),!0)}function S(s,a){for(var d in a)s[d]=a[d];return s}function z(s,a,d){return s==="parent"?me(d):s==="self"?a.getRect(d):Le(d,s)}function N(s,a,d,f){var v=s;return C.string(v)?v=z(v,a,d):C.func(v)&&(v=v.apply(void 0,f)),C.element(v)&&(v=B(v)),v}function W(s){return s&&{x:"x"in s?s.x:s.left,y:"y"in s?s.y:s.top}}function G(s){return!s||"x"in s&&"y"in s||((s=S({},s)).x=s.left||0,s.y=s.top||0,s.width=s.width||(s.right||0)-s.x,s.height=s.height||(s.bottom||0)-s.y),s}function V(s,a,d){s.left&&(a.left+=d.x),s.right&&(a.right+=d.x),s.top&&(a.top+=d.y),s.bottom&&(a.bottom+=d.y),a.width=a.right-a.left,a.height=a.bottom-a.top}function J(s,a,d){var f=d&&s.options[d];return W(N(f&&f.origin||s.options.origin,s,a,[s&&a]))||{x:0,y:0}}function Z(s,a){var d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(D){return!0},f=arguments.length>3?arguments[3]:void 0;if(f=f||{},C.string(s)&&s.search(" ")!==-1&&(s=he(s)),C.array(s))return s.forEach((function(D){return Z(D,a,d,f)})),f;if(C.object(s)&&(a=s,s=""),C.func(a)&&d(s))f[s]=f[s]||[],f[s].push(a);else if(C.array(a))for(var v=0,k=a;v<k.length;v++){var L=k[v];Z(s,L,d,f)}else if(C.object(a))for(var P in a)Z(he(P).map((function(D){return"".concat(s).concat(D)})),a[P],d,f);return f}function he(s){return s.trim().split(/ +/)}var _e=function(s,a){return Math.sqrt(s*s+a*a)},ke=["webkit","moz"];function Ee(s,a){s.__set||(s.__set={});var d=function(v){if(ke.some((function(k){return v.indexOf(k)===0})))return 1;typeof s[v]!="function"&&v!=="__set"&&Object.defineProperty(s,v,{get:function(){return v in s.__set?s.__set[v]:s.__set[v]=a[v]},set:function(k){s.__set[v]=k},configurable:!0})};for(var f in a)d(f);return s}function Fe(s,a){s.page=s.page||{},s.page.x=a.page.x,s.page.y=a.page.y,s.client=s.client||{},s.client.x=a.client.x,s.client.y=a.client.y,s.timeStamp=a.timeStamp}function je(s){s.page.x=0,s.page.y=0,s.client.x=0,s.client.y=0}function et(s){return s instanceof X.Event||s instanceof X.Touch}function ct(s,a,d){return s=s||"page",(d=d||{}).x=a[s+"X"],d.y=a[s+"Y"],d}function Pe(s,a){return a=a||{x:0,y:0},re.isOperaMobile&&et(s)?(ct("screen",s,a),a.x+=window.scrollX,a.y+=window.scrollY):ct("page",s,a),a}function He(s){return C.number(s.pointerId)?s.pointerId:s.identifier}function ht(s,a,d){var f=a.length>1?_t(a):a[0];Pe(f,s.page),(function(v,k){k=k||{},re.isOperaMobile&&et(v)?ct("screen",v,k):ct("client",v,k)})(f,s.client),s.timeStamp=d}function tt(s){var a=[];return C.array(s)?(a[0]=s[0],a[1]=s[1]):s.type==="touchend"?s.touches.length===1?(a[0]=s.touches[0],a[1]=s.changedTouches[0]):s.touches.length===0&&(a[0]=s.changedTouches[0],a[1]=s.changedTouches[1]):(a[0]=s.touches[0],a[1]=s.touches[1]),a}function _t(s){for(var a={pageX:0,pageY:0,clientX:0,clientY:0,screenX:0,screenY:0},d=0;d<s.length;d++){var f=s[d];for(var v in a)a[v]+=f[v]}for(var k in a)a[k]/=s.length;return a}function Ct(s){if(!s.length)return null;var a=tt(s),d=Math.min(a[0].pageX,a[1].pageX),f=Math.min(a[0].pageY,a[1].pageY),v=Math.max(a[0].pageX,a[1].pageX),k=Math.max(a[0].pageY,a[1].pageY);return{x:d,y:f,left:d,top:f,right:v,bottom:k,width:v-d,height:k-f}}function St(s,a){var d=a+"X",f=a+"Y",v=tt(s),k=v[0][d]-v[1][d],L=v[0][f]-v[1][f];return _e(k,L)}function xt(s,a){var d=a+"X",f=a+"Y",v=tt(s),k=v[1][d]-v[0][d],L=v[1][f]-v[0][f];return 180*Math.atan2(L,k)/Math.PI}function Mt(s){return C.string(s.pointerType)?s.pointerType:C.number(s.pointerType)?[void 0,void 0,"touch","pen","mouse"][s.pointerType]:/touch/.test(s.type||"")||s instanceof X.Touch?"touch":"mouse"}function oe(s){var a=C.func(s.composedPath)?s.composedPath():s.path;return[ye(a?a[0]:s.target),ye(s.currentTarget)]}var pe=(function(){function s(a){t(this,s),this.immediatePropagationStopped=!1,this.propagationStopped=!1,this._interaction=a}return n(s,[{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}]),s})();Object.defineProperty(pe.prototype,"interaction",{get:function(){return this._interaction._proxy},set:function(){}});var Ke=function(s,a){for(var d=0;d<a.length;d++){var f=a[d];s.push(f)}return s},Ve=function(s){return Ke([],s)},De=function(s,a){for(var d=0;d<s.length;d++)if(a(s[d],d,s))return d;return-1},Ze=function(s,a){return s[De(s,a)]},ae=(function(s){c(d,s);var a=m(d);function d(f,v,k){var L;t(this,d),(L=a.call(this,v._interaction)).dropzone=void 0,L.dragEvent=void 0,L.relatedTarget=void 0,L.draggable=void 0,L.propagationStopped=!1,L.immediatePropagationStopped=!1;var P=k==="dragleave"?f.prev:f.cur,D=P.element,Y=P.dropzone;return L.type=k,L.target=D,L.currentTarget=D,L.dropzone=Y,L.dragEvent=v,L.relatedTarget=v.target,L.draggable=v.interactable,L.timeStamp=v.timeStamp,L}return n(d,[{key:"reject",value:function(){var f=this,v=this._interaction.dropState;if(this.type==="dropactivate"||this.dropzone&&v.cur.dropzone===this.dropzone&&v.cur.element===this.target)if(v.prev.dropzone=this.dropzone,v.prev.element=this.target,v.rejected=!0,v.events.enter=null,this.stopImmediatePropagation(),this.type==="dropactivate"){var k=v.activeDrops,L=De(k,(function(D){var Y=D.dropzone,I=D.element;return Y===f.dropzone&&I===f.target}));v.activeDrops.splice(L,1);var P=new d(v,this.dragEvent,"dropdeactivate");P.dropzone=this.dropzone,P.target=this.target,this.dropzone.fire(P)}else this.dropzone.fire(new d(v,this.dragEvent,"dragleave"))}},{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}]),d})(pe);function Me(s,a){for(var d=0,f=s.slice();d<f.length;d++){var v=f[d],k=v.dropzone,L=v.element;a.dropzone=k,a.target=L,k.fire(a),a.propagationStopped=a.immediatePropagationStopped=!1}}function $e(s,a){for(var d=(function(k,L){for(var P=[],D=0,Y=k.interactables.list;D<Y.length;D++){var I=Y[D];if(I.options.drop.enabled){var Q=I.options.drop.accept;if(!(C.element(Q)&&Q!==L||C.string(Q)&&!de(L,Q)||C.func(Q)&&!Q({dropzone:I,draggableElement:L})))for(var ne=0,be=I.getAllElements();ne<be.length;ne++){var fe=be[ne];fe!==L&&P.push({dropzone:I,element:fe,rect:I.getRect(fe)})}}}return P})(s,a),f=0;f<d.length;f++){var v=d[f];v.rect=v.dropzone.getRect(v.element)}return d}function ce(s,a,d){for(var f=s.dropState,v=s.interactable,k=s.element,L=[],P=0,D=f.activeDrops;P<D.length;P++){var Y=D[P],I=Y.dropzone,Q=Y.element,ne=Y.rect,be=I.dropCheck(a,d,v,k,Q,ne);L.push(be?Q:null)}var fe=(function(we){for(var qe,Be,Ye,lt=[],ft=0;ft<we.length;ft++){var it=we[ft],pt=we[qe];if(it&&ft!==qe)if(pt){var $t=Ce(it),Et=Ce(pt);if($t!==it.ownerDocument)if(Et!==it.ownerDocument)if($t!==Et){lt=lt.length?lt:ue(pt);var Yt=void 0;if(pt instanceof X.HTMLElement&&it instanceof X.SVGElement&&!(it instanceof X.SVGSVGElement)){if(it===Et)continue;Yt=it.ownerSVGElement}else Yt=it;for(var ii=ue(Yt,pt.ownerDocument),si=0;ii[si]&&ii[si]===lt[si];)si++;var $i=[ii[si-1],ii[si],lt[si]];if($i[0])for(var Li=$i[0].lastChild;Li;){if(Li===$i[1]){qe=ft,lt=ii;break}if(Li===$i[2])break;Li=Li.previousSibling}}else Ye=pt,(parseInt(E(Be=it).getComputedStyle(Be).zIndex,10)||0)>=(parseInt(E(Ye).getComputedStyle(Ye).zIndex,10)||0)&&(qe=ft);else qe=ft}else qe=ft}return qe})(L);return f.activeDrops[fe]||null}function ut(s,a,d){var f=s.dropState,v={enter:null,leave:null,activate:null,deactivate:null,move:null,drop:null};return d.type==="dragstart"&&(v.activate=new ae(f,d,"dropactivate"),v.activate.target=null,v.activate.dropzone=null),d.type==="dragend"&&(v.deactivate=new ae(f,d,"dropdeactivate"),v.deactivate.target=null,v.deactivate.dropzone=null),f.rejected||(f.cur.element!==f.prev.element&&(f.prev.dropzone&&(v.leave=new ae(f,d,"dragleave"),d.dragLeave=v.leave.target=f.prev.element,d.prevDropzone=v.leave.dropzone=f.prev.dropzone),f.cur.dropzone&&(v.enter=new ae(f,d,"dragenter"),d.dragEnter=f.cur.element,d.dropzone=f.cur.dropzone)),d.type==="dragend"&&f.cur.dropzone&&(v.drop=new ae(f,d,"drop"),d.dropzone=f.cur.dropzone,d.relatedTarget=f.cur.element),d.type==="dragmove"&&f.cur.dropzone&&(v.move=new ae(f,d,"dropmove"),d.dropzone=f.cur.dropzone)),v}function wt(s,a){var d=s.dropState,f=d.activeDrops,v=d.cur,k=d.prev;a.leave&&k.dropzone.fire(a.leave),a.enter&&v.dropzone.fire(a.enter),a.move&&v.dropzone.fire(a.move),a.drop&&v.dropzone.fire(a.drop),a.deactivate&&Me(f,a.deactivate),d.prev.dropzone=v.dropzone,d.prev.element=v.element}function ot(s,a){var d=s.interaction,f=s.iEvent,v=s.event;if(f.type==="dragmove"||f.type==="dragend"){var k=d.dropState;a.dynamicDrop&&(k.activeDrops=$e(a,d.element));var L=f,P=ce(d,L,v);k.rejected=k.rejected&&!!P&&P.dropzone===k.cur.dropzone&&P.element===k.cur.element,k.cur.dropzone=P&&P.dropzone,k.cur.element=P&&P.element,k.events=ut(d,0,L)}}var Qe={id:"actions/drop",install:function(s){var a=s.actions,d=s.interactStatic,f=s.Interactable,v=s.defaults;s.usePlugin(j),f.prototype.dropzone=function(k){return(function(L,P){if(C.object(P)){if(L.options.drop.enabled=P.enabled!==!1,P.listeners){var D=Z(P.listeners),Y=Object.keys(D).reduce((function(Q,ne){return Q[/^(enter|leave)/.test(ne)?"drag".concat(ne):/^(activate|deactivate|move)/.test(ne)?"drop".concat(ne):ne]=D[ne],Q}),{}),I=L.options.drop.listeners;I&&L.off(I),L.on(Y),L.options.drop.listeners=Y}return C.func(P.ondrop)&&L.on("drop",P.ondrop),C.func(P.ondropactivate)&&L.on("dropactivate",P.ondropactivate),C.func(P.ondropdeactivate)&&L.on("dropdeactivate",P.ondropdeactivate),C.func(P.ondragenter)&&L.on("dragenter",P.ondragenter),C.func(P.ondragleave)&&L.on("dragleave",P.ondragleave),C.func(P.ondropmove)&&L.on("dropmove",P.ondropmove),/^(pointer|center)$/.test(P.overlap)?L.options.drop.overlap=P.overlap:C.number(P.overlap)&&(L.options.drop.overlap=Math.max(Math.min(1,P.overlap),0)),"accept"in P&&(L.options.drop.accept=P.accept),"checker"in P&&(L.options.drop.checker=P.checker),L}return C.bool(P)?(L.options.drop.enabled=P,L):L.options.drop})(this,k)},f.prototype.dropCheck=function(k,L,P,D,Y,I){return(function(Q,ne,be,fe,we,qe,Be){var Ye=!1;if(!(Be=Be||Q.getRect(qe)))return!!Q.options.drop.checker&&Q.options.drop.checker(ne,be,Ye,Q,qe,fe,we);var lt=Q.options.drop.overlap;if(lt==="pointer"){var ft=J(fe,we,"drag"),it=Pe(ne);it.x+=ft.x,it.y+=ft.y;var pt=it.x>Be.left&&it.x<Be.right,$t=it.y>Be.top&&it.y<Be.bottom;Ye=pt&&$t}var Et=fe.getRect(we);if(Et&&lt==="center"){var Yt=Et.left+Et.width/2,ii=Et.top+Et.height/2;Ye=Yt>=Be.left&&Yt<=Be.right&&ii>=Be.top&&ii<=Be.bottom}return Et&&C.number(lt)&&(Ye=Math.max(0,Math.min(Be.right,Et.right)-Math.max(Be.left,Et.left))*Math.max(0,Math.min(Be.bottom,Et.bottom)-Math.max(Be.top,Et.top))/(Et.width*Et.height)>=lt),Q.options.drop.checker&&(Ye=Q.options.drop.checker(ne,be,Ye,Q,qe,fe,we)),Ye})(this,k,L,P,D,Y,I)},d.dynamicDrop=function(k){return C.bool(k)?(s.dynamicDrop=k,d):s.dynamicDrop},S(a.phaselessTypes,{dragenter:!0,dragleave:!0,dropactivate:!0,dropdeactivate:!0,dropmove:!0,drop:!0}),a.methodDict.drop="dropzone",s.dynamicDrop=!1,v.actions.drop=Qe.defaults},listeners:{"interactions:before-action-start":function(s){var a=s.interaction;a.prepared.name==="drag"&&(a.dropState={cur:{dropzone:null,element:null},prev:{dropzone:null,element:null},rejected:null,events:null,activeDrops:[]})},"interactions:after-action-start":function(s,a){var d=s.interaction,f=(s.event,s.iEvent);if(d.prepared.name==="drag"){var v=d.dropState;v.activeDrops=[],v.events={},v.activeDrops=$e(a,d.element),v.events=ut(d,0,f),v.events.activate&&(Me(v.activeDrops,v.events.activate),a.fire("actions/drop:start",{interaction:d,dragEvent:f}))}},"interactions:action-move":ot,"interactions:after-action-move":function(s,a){var d=s.interaction,f=s.iEvent;if(d.prepared.name==="drag"){var v=d.dropState;wt(d,v.events),a.fire("actions/drop:move",{interaction:d,dragEvent:f}),v.events={}}},"interactions:action-end":function(s,a){if(s.interaction.prepared.name==="drag"){var d=s.interaction,f=s.iEvent;ot(s,a),wt(d,d.dropState.events),a.fire("actions/drop:end",{interaction:d,dragEvent:f})}},"interactions:stop":function(s){var a=s.interaction;if(a.prepared.name==="drag"){var d=a.dropState;d&&(d.activeDrops=null,d.events=null,d.cur.dropzone=null,d.cur.element=null,d.prev.dropzone=null,d.prev.element=null,d.rejected=!1)}}},getActiveDrops:$e,getDrop:ce,getDropEvents:ut,fireDropEvents:wt,filterEventType:function(s){return s.search("drag")===0||s.search("drop")===0},defaults:{enabled:!1,accept:null,overlap:"pointer"}},ze=Qe;function rt(s){var a=s.interaction,d=s.iEvent,f=s.phase;if(a.prepared.name==="gesture"){var v=a.pointers.map((function(Y){return Y.pointer})),k=f==="start",L=f==="end",P=a.interactable.options.deltaSource;if(d.touches=[v[0],v[1]],k)d.distance=St(v,P),d.box=Ct(v),d.scale=1,d.ds=0,d.angle=xt(v,P),d.da=0,a.gesture.startDistance=d.distance,a.gesture.startAngle=d.angle;else if(L||a.pointers.length<2){var D=a.prevEvent;d.distance=D.distance,d.box=D.box,d.scale=D.scale,d.ds=0,d.angle=D.angle,d.da=0}else d.distance=St(v,P),d.box=Ct(v),d.scale=d.distance/a.gesture.startDistance,d.angle=xt(v,P),d.ds=d.scale-a.gesture.scale,d.da=d.angle-a.gesture.angle;a.gesture.distance=d.distance,a.gesture.angle=d.angle,C.number(d.scale)&&d.scale!==1/0&&!isNaN(d.scale)&&(a.gesture.scale=d.scale)}}var yt={id:"actions/gesture",before:["actions/drag","actions/resize"],install:function(s){var a=s.actions,d=s.Interactable,f=s.defaults;d.prototype.gesturable=function(v){return C.object(v)?(this.options.gesture.enabled=v.enabled!==!1,this.setPerAction("gesture",v),this.setOnEvents("gesture",v),this):C.bool(v)?(this.options.gesture.enabled=v,this):this.options.gesture},a.map.gesture=yt,a.methodDict.gesture="gesturable",f.actions.gesture=yt.defaults},listeners:{"interactions:action-start":rt,"interactions:action-move":rt,"interactions:action-end":rt,"interactions:new":function(s){s.interaction.gesture={angle:0,distance:0,scale:1,startAngle:0,startDistance:0}},"auto-start:check":function(s){if(!(s.interaction.pointers.length<2)){var a=s.interactable.options.gesture;if(a&&a.enabled)return s.action={name:"gesture"},!1}}},defaults:{},getCursor:function(){return""},filterEventType:function(s){return s.search("gesture")===0}},vt=yt;function bt(s,a,d,f,v,k,L){if(!a)return!1;if(a===!0){var P=C.number(k.width)?k.width:k.right-k.left,D=C.number(k.height)?k.height:k.bottom-k.top;if(L=Math.min(L,Math.abs((s==="left"||s==="right"?P:D)/2)),P<0&&(s==="left"?s="right":s==="right"&&(s="left")),D<0&&(s==="top"?s="bottom":s==="bottom"&&(s="top")),s==="left"){var Y=P>=0?k.left:k.right;return d.x<Y+L}if(s==="top"){var I=D>=0?k.top:k.bottom;return d.y<I+L}if(s==="right")return d.x>(P>=0?k.right:k.left)-L;if(s==="bottom")return d.y>(D>=0?k.bottom:k.top)-L}return!!C.element(f)&&(C.element(a)?a===f:Ae(f,a,v))}function nt(s){var a=s.iEvent,d=s.interaction;if(d.prepared.name==="resize"&&d.resizeAxes){var f=a;d.interactable.options.resize.square?(d.resizeAxes==="y"?f.delta.x=f.delta.y:f.delta.y=f.delta.x,f.axes="xy"):(f.axes=d.resizeAxes,d.resizeAxes==="x"?f.delta.y=0:d.resizeAxes==="y"&&(f.delta.x=0))}}var Ie,st,dt={id:"actions/resize",before:["actions/drag"],install:function(s){var a=s.actions,d=s.browser,f=s.Interactable,v=s.defaults;dt.cursors=(function(k){return k.isIe9?{x:"e-resize",y:"s-resize",xy:"se-resize",top:"n-resize",left:"w-resize",bottom:"s-resize",right:"e-resize",topleft:"se-resize",bottomright:"se-resize",topright:"ne-resize",bottomleft:"ne-resize"}:{x:"ew-resize",y:"ns-resize",xy:"nwse-resize",top:"ns-resize",left:"ew-resize",bottom:"ns-resize",right:"ew-resize",topleft:"nwse-resize",bottomright:"nwse-resize",topright:"nesw-resize",bottomleft:"nesw-resize"}})(d),dt.defaultMargin=d.supportsTouch||d.supportsPointerEvent?20:10,f.prototype.resizable=function(k){return(function(L,P,D){return C.object(P)?(L.options.resize.enabled=P.enabled!==!1,L.setPerAction("resize",P),L.setOnEvents("resize",P),C.string(P.axis)&&/^x$|^y$|^xy$/.test(P.axis)?L.options.resize.axis=P.axis:P.axis===null&&(L.options.resize.axis=D.defaults.actions.resize.axis),C.bool(P.preserveAspectRatio)?L.options.resize.preserveAspectRatio=P.preserveAspectRatio:C.bool(P.square)&&(L.options.resize.square=P.square),L):C.bool(P)?(L.options.resize.enabled=P,L):L.options.resize})(this,k,s)},a.map.resize=dt,a.methodDict.resize="resizable",v.actions.resize=dt.defaults},listeners:{"interactions:new":function(s){s.interaction.resizeAxes="xy"},"interactions:action-start":function(s){(function(a){var d=a.iEvent,f=a.interaction;if(f.prepared.name==="resize"&&f.prepared.edges){var v=d,k=f.rect;f._rects={start:S({},k),corrected:S({},k),previous:S({},k),delta:{left:0,right:0,width:0,top:0,bottom:0,height:0}},v.edges=f.prepared.edges,v.rect=f._rects.corrected,v.deltaRect=f._rects.delta}})(s),nt(s)},"interactions:action-move":function(s){(function(a){var d=a.iEvent,f=a.interaction;if(f.prepared.name==="resize"&&f.prepared.edges){var v=d,k=f.interactable.options.resize.invert,L=k==="reposition"||k==="negate",P=f.rect,D=f._rects,Y=D.start,I=D.corrected,Q=D.delta,ne=D.previous;if(S(ne,I),L){if(S(I,P),k==="reposition"){if(I.top>I.bottom){var be=I.top;I.top=I.bottom,I.bottom=be}if(I.left>I.right){var fe=I.left;I.left=I.right,I.right=fe}}}else I.top=Math.min(P.top,Y.bottom),I.bottom=Math.max(P.bottom,Y.top),I.left=Math.min(P.left,Y.right),I.right=Math.max(P.right,Y.left);for(var we in I.width=I.right-I.left,I.height=I.bottom-I.top,I)Q[we]=I[we]-ne[we];v.edges=f.prepared.edges,v.rect=I,v.deltaRect=Q}})(s),nt(s)},"interactions:action-end":function(s){var a=s.iEvent,d=s.interaction;if(d.prepared.name==="resize"&&d.prepared.edges){var f=a;f.edges=d.prepared.edges,f.rect=d._rects.corrected,f.deltaRect=d._rects.delta}},"auto-start:check":function(s){var a=s.interaction,d=s.interactable,f=s.element,v=s.rect,k=s.buttons;if(v){var L=S({},a.coords.cur.page),P=d.options.resize;if(P&&P.enabled&&(!a.pointerIsDown||!/mouse|pointer/.test(a.pointerType)||(k&P.mouseButtons)!=0)){if(C.object(P.edges)){var D={left:!1,right:!1,top:!1,bottom:!1};for(var Y in D)D[Y]=bt(Y,P.edges[Y],L,a._latestPointer.eventTarget,f,v,P.margin||dt.defaultMargin);D.left=D.left&&!D.right,D.top=D.top&&!D.bottom,(D.left||D.right||D.top||D.bottom)&&(s.action={name:"resize",edges:D})}else{var I=P.axis!=="y"&&L.x>v.right-dt.defaultMargin,Q=P.axis!=="x"&&L.y>v.bottom-dt.defaultMargin;(I||Q)&&(s.action={name:"resize",axes:(I?"x":"")+(Q?"y":"")})}return!s.action&&void 0}}}},defaults:{square:!1,preserveAspectRatio:!1,axis:"xy",margin:NaN,edges:null,invert:"none"},cursors:null,getCursor:function(s){var a=s.edges,d=s.axis,f=s.name,v=dt.cursors,k=null;if(d)k=v[f+d];else if(a){for(var L="",P=0,D=["top","bottom","left","right"];P<D.length;P++){var Y=D[P];a[Y]&&(L+=Y)}k=v[L]}return k},filterEventType:function(s){return s.search("resize")===0},defaultMargin:null},gt=dt,Oe={id:"actions",install:function(s){s.usePlugin(vt),s.usePlugin(gt),s.usePlugin(j),s.usePlugin(ze)}},Te=0,ge={request:function(s){return Ie(s)},cancel:function(s){return st(s)},init:function(s){if(Ie=s.requestAnimationFrame,st=s.cancelAnimationFrame,!Ie)for(var a=["ms","moz","webkit","o"],d=0;d<a.length;d++){var f=a[d];Ie=s["".concat(f,"RequestAnimationFrame")],st=s["".concat(f,"CancelAnimationFrame")]||s["".concat(f,"CancelRequestAnimationFrame")]}Ie=Ie&&Ie.bind(s),st=st&&st.bind(s),Ie||(Ie=function(v){var k=Date.now(),L=Math.max(0,16-(k-Te)),P=s.setTimeout((function(){v(k+L)}),L);return Te=k+L,P},st=function(v){return clearTimeout(v)})}},ie={defaults:{enabled:!1,margin:60,container:null,speed:300},now:Date.now,interaction:null,i:0,x:0,y:0,isScrolling:!1,prevTime:0,margin:0,speed:0,start:function(s){ie.isScrolling=!0,ge.cancel(ie.i),s.autoScroll=ie,ie.interaction=s,ie.prevTime=ie.now(),ie.i=ge.request(ie.scroll)},stop:function(){ie.isScrolling=!1,ie.interaction&&(ie.interaction.autoScroll=null),ge.cancel(ie.i)},scroll:function(){var s=ie.interaction,a=s.interactable,d=s.element,f=s.prepared.name,v=a.options[f].autoScroll,k=Re(v.container,a,d),L=ie.now(),P=(L-ie.prevTime)/1e3,D=v.speed*P;if(D>=1){var Y={x:ie.x*D,y:ie.y*D};if(Y.x||Y.y){var I=Ue(k);C.window(k)?k.scrollBy(Y.x,Y.y):k&&(k.scrollLeft+=Y.x,k.scrollTop+=Y.y);var Q=Ue(k),ne={x:Q.x-I.x,y:Q.y-I.y};(ne.x||ne.y)&&a.fire({type:"autoscroll",target:d,interactable:a,delta:ne,interaction:s,container:k})}ie.prevTime=L}ie.isScrolling&&(ge.cancel(ie.i),ie.i=ge.request(ie.scroll))},check:function(s,a){var d;return(d=s.options[a].autoScroll)==null?void 0:d.enabled},onInteractionMove:function(s){var a=s.interaction,d=s.pointer;if(a.interacting()&&ie.check(a.interactable,a.prepared.name))if(a.simulation)ie.x=ie.y=0;else{var f,v,k,L,P=a.interactable,D=a.element,Y=a.prepared.name,I=P.options[Y].autoScroll,Q=Re(I.container,P,D);if(C.window(Q))L=d.clientX<ie.margin,f=d.clientY<ie.margin,v=d.clientX>Q.innerWidth-ie.margin,k=d.clientY>Q.innerHeight-ie.margin;else{var ne=Se(Q);L=d.clientX<ne.left+ie.margin,f=d.clientY<ne.top+ie.margin,v=d.clientX>ne.right-ie.margin,k=d.clientY>ne.bottom-ie.margin}ie.x=v?1:L?-1:0,ie.y=k?1:f?-1:0,ie.isScrolling||(ie.margin=I.margin,ie.speed=I.speed,ie.start(a))}}};function Re(s,a,d){return(C.string(s)?z(s,a,d):s)||E(d)}function Ue(s){return C.window(s)&&(s=window.document.body),{x:s.scrollLeft,y:s.scrollTop}}var kt={id:"auto-scroll",install:function(s){var a=s.defaults,d=s.actions;s.autoScroll=ie,ie.now=function(){return s.now()},d.phaselessTypes.autoscroll=!0,a.perAction.autoScroll=ie.defaults},listeners:{"interactions:new":function(s){s.interaction.autoScroll=null},"interactions:destroy":function(s){s.interaction.autoScroll=null,ie.stop(),ie.interaction&&(ie.interaction=null)},"interactions:stop":ie.stop,"interactions:action-move":function(s){return ie.onInteractionMove(s)}}},Rt=kt;function Gt(s,a){var d=!1;return function(){return d||(A.console.warn(a),d=!0),s.apply(this,arguments)}}function Zt(s,a){return s.name=a.name,s.axis=a.axis,s.edges=a.edges,s}function vi(s){return C.bool(s)?(this.options.styleCursor=s,this):s===null?(delete this.options.styleCursor,this):this.options.styleCursor}function ci(s){return C.func(s)?(this.options.actionChecker=s,this):s===null?(delete this.options.actionChecker,this):this.options.actionChecker}var Wi={id:"auto-start/interactableMethods",install:function(s){var a=s.Interactable;a.prototype.getAction=function(d,f,v,k){var L=(function(P,D,Y,I,Q){var ne=P.getRect(I),be=D.buttons||{0:1,1:4,3:8,4:16}[D.button],fe={action:null,interactable:P,interaction:Y,element:I,rect:ne,buttons:be};return Q.fire("auto-start:check",fe),fe.action})(this,f,v,k,s);return this.options.actionChecker?this.options.actionChecker(d,f,L,this,k,v):L},a.prototype.ignoreFrom=Gt((function(d){return this._backCompatOption("ignoreFrom",d)}),"Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."),a.prototype.allowFrom=Gt((function(d){return this._backCompatOption("allowFrom",d)}),"Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."),a.prototype.actionChecker=ci,a.prototype.styleCursor=vi}};function gi(s,a,d,f,v){return a.testIgnoreAllow(a.options[s.name],d,f)&&a.options[s.name].enabled&&mi(a,d,s,v)?s:null}function Ki(s,a,d,f,v,k,L){for(var P=0,D=f.length;P<D;P++){var Y=f[P],I=v[P],Q=Y.getAction(a,d,s,I);if(Q){var ne=gi(Q,Y,I,k,L);if(ne)return{action:ne,interactable:Y,element:I}}}return{action:null,interactable:null,element:null}}function dr(s,a,d,f,v){var k=[],L=[],P=f;function D(I){k.push(I),L.push(P)}for(;C.element(P);){k=[],L=[],v.interactables.forEachMatch(P,D);var Y=Ki(s,a,d,k,L,f,v);if(Y.action&&!Y.interactable.options[Y.action.name].manualStart)return Y;P=me(P)}return{action:null,interactable:null,element:null}}function Ri(s,a,d){var f=a.action,v=a.interactable,k=a.element;f=f||{name:null},s.interactable=v,s.element=k,Zt(s.prepared,f),s.rect=v&&f.name?v.getRect(k):null,Yi(s,d),d.fire("autoStart:prepared",{interaction:s})}function mi(s,a,d,f){var v=s.options,k=v[d.name].max,L=v[d.name].maxPerElement,P=f.autoStart.maxInteractions,D=0,Y=0,I=0;if(!(k&&L&&P))return!1;for(var Q=0,ne=f.interactions.list;Q<ne.length;Q++){var be=ne[Q],fe=be.prepared.name;if(be.interacting()&&(++D>=P||be.interactable===s&&((Y+=fe===d.name?1:0)>=k||be.element===a&&(I++,fe===d.name&&I>=L))))return!1}return P>0}function ei(s,a){return C.number(s)?(a.autoStart.maxInteractions=s,this):a.autoStart.maxInteractions}function lr(s,a,d){var f=d.autoStart.cursorElement;f&&f!==s&&(f.style.cursor=""),s.ownerDocument.documentElement.style.cursor=a,s.style.cursor=a,d.autoStart.cursorElement=a?s:null}function Yi(s,a){var d=s.interactable,f=s.element,v=s.prepared;if(s.pointerType==="mouse"&&d&&d.options.styleCursor){var k="";if(v.name){var L=d.options[v.name].cursorChecker;k=C.func(L)?L(v,d,f,s._interacting):a.actions.map[v.name].getCursor(v)}lr(s.element,k||"",a)}else a.autoStart.cursorElement&&lr(a.autoStart.cursorElement,"",a)}var zr={id:"auto-start/base",before:["actions"],install:function(s){var a=s.interactStatic,d=s.defaults;s.usePlugin(Wi),d.base.actionChecker=null,d.base.styleCursor=!0,S(d.perAction,{manualStart:!1,max:1/0,maxPerElement:1,allowFrom:null,ignoreFrom:null,mouseButtons:1}),a.maxInteractions=function(f){return ei(f,s)},s.autoStart={maxInteractions:1/0,withinInteractionLimit:mi,cursorElement:null}},listeners:{"interactions:down":function(s,a){var d=s.interaction,f=s.pointer,v=s.event,k=s.eventTarget;d.interacting()||Ri(d,dr(d,f,v,k,a),a)},"interactions:move":function(s,a){(function(d,f){var v=d.interaction,k=d.pointer,L=d.event,P=d.eventTarget;v.pointerType!=="mouse"||v.pointerIsDown||v.interacting()||Ri(v,dr(v,k,L,P,f),f)})(s,a),(function(d,f){var v=d.interaction;if(v.pointerIsDown&&!v.interacting()&&v.pointerWasMoved&&v.prepared.name){f.fire("autoStart:before-start",d);var k=v.interactable,L=v.prepared.name;L&&k&&(k.options[L].manualStart||!mi(k,v.element,v.prepared,f)?v.stop():(v.start(v.prepared,k,v.element),Yi(v,f)))}})(s,a)},"interactions:stop":function(s,a){var d=s.interaction,f=d.interactable;f&&f.options.styleCursor&&lr(d.element,"",a)}},maxInteractions:ei,withinInteractionLimit:mi,validateAction:gi},Ui=zr,Or={id:"auto-start/dragAxis",listeners:{"autoStart:before-start":function(s,a){var d=s.interaction,f=s.eventTarget,v=s.dx,k=s.dy;if(d.prepared.name==="drag"){var L=Math.abs(v),P=Math.abs(k),D=d.interactable.options.drag,Y=D.startAxis,I=L>P?"x":L<P?"y":"xy";if(d.prepared.axis=D.lockAxis==="start"?I[0]:D.lockAxis,I!=="xy"&&Y!=="xy"&&Y!==I){d.prepared.name=null;for(var Q=f,ne=function(fe){if(fe!==d.interactable){var we=d.interactable.options.drag;if(!we.manualStart&&fe.testIgnoreAllow(we,Q,f)){var qe=fe.getAction(d.downPointer,d.downEvent,d,Q);if(qe&&qe.name==="drag"&&(function(Be,Ye){if(!Ye)return!1;var lt=Ye.options.drag.startAxis;return Be==="xy"||lt==="xy"||lt===Be})(I,fe)&&Ui.validateAction(qe,fe,Q,f,a))return fe}}};C.element(Q);){var be=a.interactables.forEachMatch(Q,ne);if(be){d.prepared.name="drag",d.interactable=be,d.element=Q;break}Q=me(Q)}}}}}};function zi(s){var a=s.prepared&&s.prepared.name;if(!a)return null;var d=s.interactable.options;return d[a].hold||d[a].delay}var Gi={id:"auto-start/hold",install:function(s){var a=s.defaults;s.usePlugin(Ui),a.perAction.hold=0,a.perAction.delay=0},listeners:{"interactions:new":function(s){s.interaction.autoStartHoldTimer=null},"autoStart:prepared":function(s){var a=s.interaction,d=zi(a);d>0&&(a.autoStartHoldTimer=setTimeout((function(){a.start(a.prepared,a.interactable,a.element)}),d))},"interactions:move":function(s){var a=s.interaction,d=s.duplicate;a.autoStartHoldTimer&&a.pointerWasMoved&&!d&&(clearTimeout(a.autoStartHoldTimer),a.autoStartHoldTimer=null)},"autoStart:before-start":function(s){var a=s.interaction;zi(a)>0&&(a.prepared.name=null)}},getHoldDuration:zi},Ji=Gi,hr={id:"auto-start",install:function(s){s.usePlugin(Ui),s.usePlugin(Ji),s.usePlugin(Or)}},di=function(s){return/^(always|never|auto)$/.test(s)?(this.options.preventDefault=s,this):C.bool(s)?(this.options.preventDefault=s?"always":"never",this):this.options.preventDefault};function Dr(s){var a=s.interaction,d=s.event;a.interactable&&a.interactable.checkAndPreventDefault(d)}var _i={id:"core/interactablePreventDefault",install:function(s){var a=s.Interactable;a.prototype.preventDefault=di,a.prototype.checkAndPreventDefault=function(d){return(function(f,v,k){var L=f.options.preventDefault;if(L!=="never")if(L!=="always"){if(v.events.supportsPassive&&/^touch(start|move)$/.test(k.type)){var P=E(k.target).document,D=v.getDocOptions(P);if(!D||!D.events||D.events.passive!==!1)return}/^(mouse|pointer|touch)*(down|start)/i.test(k.type)||C.element(k.target)&&de(k.target,"input,select,textarea,[contenteditable=true],[contenteditable=true] *")||k.preventDefault()}else k.preventDefault()})(this,s,d)},s.interactions.docEvents.push({type:"dragstart",listener:function(d){for(var f=0,v=s.interactions.list;f<v.length;f++){var k=v[f];if(k.element&&(k.element===d.target||le(k.element,d.target)))return void k.interactable.checkAndPreventDefault(d)}}})},listeners:["down","move","up","cancel"].reduce((function(s,a){return s["interactions:".concat(a)]=Dr,s}),{})};function Oi(s,a){if(a.phaselessTypes[s])return!0;for(var d in a.map)if(s.indexOf(d)===0&&s.substr(d.length)in a.phases)return!0;return!1}function ti(s){var a={};for(var d in s){var f=s[d];C.plainObject(f)?a[d]=ti(f):C.array(f)?a[d]=Ve(f):a[d]=f}return a}var Xi=(function(){function s(a){t(this,s),this.states=[],this.startOffset={left:0,right:0,top:0,bottom:0},this.startDelta=void 0,this.result=void 0,this.endResult=void 0,this.startEdges=void 0,this.edges=void 0,this.interaction=void 0,this.interaction=a,this.result=Si(),this.edges={left:!1,right:!1,top:!1,bottom:!1}}return n(s,[{key:"start",value:function(a,d){var f,v,k=a.phase,L=this.interaction,P=(function(Y){var I=Y.interactable.options[Y.prepared.name],Q=I.modifiers;return Q&&Q.length?Q:["snap","snapSize","snapEdges","restrict","restrictEdges","restrictSize"].map((function(ne){var be=I[ne];return be&&be.enabled&&{options:be,methods:be._methods}})).filter((function(ne){return!!ne}))})(L);this.prepareStates(P),this.startEdges=S({},L.edges),this.edges=S({},this.startEdges),this.startOffset=(f=L.rect,v=d,f?{left:v.x-f.left,top:v.y-f.top,right:f.right-v.x,bottom:f.bottom-v.y}:{left:0,top:0,right:0,bottom:0}),this.startDelta={x:0,y:0};var D=this.fillArg({phase:k,pageCoords:d,preEnd:!1});return this.result=Si(),this.startAll(D),this.result=this.setAll(D)}},{key:"fillArg",value:function(a){var d=this.interaction;return a.interaction=d,a.interactable=d.interactable,a.element=d.element,a.rect||(a.rect=d.rect),a.edges||(a.edges=this.startEdges),a.startOffset=this.startOffset,a}},{key:"startAll",value:function(a){for(var d=0,f=this.states;d<f.length;d++){var v=f[d];v.methods.start&&(a.state=v,v.methods.start(a))}}},{key:"setAll",value:function(a){var d=a.phase,f=a.preEnd,v=a.skipModifiers,k=a.rect,L=a.edges;a.coords=S({},a.pageCoords),a.rect=S({},k),a.edges=S({},L);for(var P=v?this.states.slice(v):this.states,D=Si(a.coords,a.rect),Y=0;Y<P.length;Y++){var I,Q=P[Y],ne=Q.options,be=S({},a.coords),fe=null;(I=Q.methods)!=null&&I.set&&this.shouldDo(ne,f,d)&&(a.state=Q,fe=Q.methods.set(a),V(a.edges,a.rect,{x:a.coords.x-be.x,y:a.coords.y-be.y})),D.eventProps.push(fe)}S(this.edges,a.edges),D.delta.x=a.coords.x-a.pageCoords.x,D.delta.y=a.coords.y-a.pageCoords.y,D.rectDelta.left=a.rect.left-k.left,D.rectDelta.right=a.rect.right-k.right,D.rectDelta.top=a.rect.top-k.top,D.rectDelta.bottom=a.rect.bottom-k.bottom;var we=this.result.coords,qe=this.result.rect;if(we&&qe){var Be=D.rect.left!==qe.left||D.rect.right!==qe.right||D.rect.top!==qe.top||D.rect.bottom!==qe.bottom;D.changed=Be||we.x!==D.coords.x||we.y!==D.coords.y}return D}},{key:"applyToInteraction",value:function(a){var d=this.interaction,f=a.phase,v=d.coords.cur,k=d.coords.start,L=this.result,P=this.startDelta,D=L.delta;f==="start"&&S(this.startDelta,L.delta);for(var Y=0,I=[[k,P],[v,D]];Y<I.length;Y++){var Q=I[Y],ne=Q[0],be=Q[1];ne.page.x+=be.x,ne.page.y+=be.y,ne.client.x+=be.x,ne.client.y+=be.y}var fe=this.result.rectDelta,we=a.rect||d.rect;we.left+=fe.left,we.right+=fe.right,we.top+=fe.top,we.bottom+=fe.bottom,we.width=we.right-we.left,we.height=we.bottom-we.top}},{key:"setAndApply",value:function(a){var d=this.interaction,f=a.phase,v=a.preEnd,k=a.skipModifiers,L=this.setAll(this.fillArg({preEnd:v,phase:f,pageCoords:a.modifiedCoords||d.coords.cur.page}));if(this.result=L,!L.changed&&(!k||k<this.states.length)&&d.interacting())return!1;if(a.modifiedCoords){var P=d.coords.cur.page,D={x:a.modifiedCoords.x-P.x,y:a.modifiedCoords.y-P.y};L.coords.x+=D.x,L.coords.y+=D.y,L.delta.x+=D.x,L.delta.y+=D.y}this.applyToInteraction(a)}},{key:"beforeEnd",value:function(a){var d=a.interaction,f=a.event,v=this.states;if(v&&v.length){for(var k=!1,L=0;L<v.length;L++){var P=v[L];a.state=P;var D=P.options,Y=P.methods,I=Y.beforeEnd&&Y.beforeEnd(a);if(I)return this.endResult=I,!1;k=k||!k&&this.shouldDo(D,!0,a.phase,!0)}k&&d.move({event:f,preEnd:!0})}}},{key:"stop",value:function(a){var d=a.interaction;if(this.states&&this.states.length){var f=S({states:this.states,interactable:d.interactable,element:d.element,rect:null},a);this.fillArg(f);for(var v=0,k=this.states;v<k.length;v++){var L=k[v];f.state=L,L.methods.stop&&L.methods.stop(f)}this.states=null,this.endResult=null}}},{key:"prepareStates",value:function(a){this.states=[];for(var d=0;d<a.length;d++){var f=a[d],v=f.options,k=f.methods,L=f.name;this.states.push({options:v,methods:k,index:d,name:L})}return this.states}},{key:"restoreInteractionCoords",value:function(a){var d=a.interaction,f=d.coords,v=d.rect,k=d.modification;if(k.result){for(var L=k.startDelta,P=k.result,D=P.delta,Y=P.rectDelta,I=0,Q=[[f.start,L],[f.cur,D]];I<Q.length;I++){var ne=Q[I],be=ne[0],fe=ne[1];be.page.x-=fe.x,be.page.y-=fe.y,be.client.x-=fe.x,be.client.y-=fe.y}v.left-=Y.left,v.right-=Y.right,v.top-=Y.top,v.bottom-=Y.bottom}}},{key:"shouldDo",value:function(a,d,f,v){return!(!a||a.enabled===!1||v&&!a.endOnly||a.endOnly&&!d||f==="start"&&!a.setStart)}},{key:"copyFrom",value:function(a){this.startOffset=a.startOffset,this.startDelta=a.startDelta,this.startEdges=a.startEdges,this.edges=a.edges,this.states=a.states.map((function(d){return ti(d)})),this.result=Si(S({},a.result.coords),S({},a.result.rect))}},{key:"destroy",value:function(){for(var a in this)this[a]=null}}]),s})();function Si(s,a){return{rect:a,coords:s,delta:{x:0,y:0},rectDelta:{left:0,right:0,top:0,bottom:0},eventProps:[],changed:!0}}function fi(s,a){var d=s.defaults,f={start:s.start,set:s.set,beforeEnd:s.beforeEnd,stop:s.stop},v=function(k){var L=k||{};for(var P in L.enabled=L.enabled!==!1,d)P in L||(L[P]=d[P]);var D={options:L,methods:f,name:a,enable:function(){return L.enabled=!0,D},disable:function(){return L.enabled=!1,D}};return D};return a&&typeof a=="string"&&(v._defaults=d,v._methods=f),v}function Wt(s){var a=s.iEvent,d=s.interaction.modification.result;d&&(a.modifiers=d.eventProps)}var Lt={id:"modifiers/base",before:["actions"],install:function(s){s.defaults.perAction.modifiers=[]},listeners:{"interactions:new":function(s){var a=s.interaction;a.modification=new Xi(a)},"interactions:before-action-start":function(s){var a=s.interaction,d=s.interaction.modification;d.start(s,a.coords.start.page),a.edges=d.edges,d.applyToInteraction(s)},"interactions:before-action-move":function(s){var a=s.interaction,d=a.modification,f=d.setAndApply(s);return a.edges=d.edges,f},"interactions:before-action-end":function(s){var a=s.interaction,d=a.modification,f=d.beforeEnd(s);return a.edges=d.startEdges,f},"interactions:action-start":Wt,"interactions:action-move":Wt,"interactions:action-end":Wt,"interactions:after-action-start":function(s){return s.interaction.modification.restoreInteractionCoords(s)},"interactions:after-action-move":function(s){return s.interaction.modification.restoreInteractionCoords(s)},"interactions:stop":function(s){return s.interaction.modification.stop(s)}}},Ir=Lt,Nr={base:{preventDefault:"auto",deltaSource:"page"},perAction:{enabled:!1,origin:{x:0,y:0}},actions:{}},pr=(function(s){c(d,s);var a=m(d);function d(f,v,k,L,P,D,Y){var I;t(this,d),(I=a.call(this,f)).relatedTarget=null,I.screenX=void 0,I.screenY=void 0,I.button=void 0,I.buttons=void 0,I.ctrlKey=void 0,I.shiftKey=void 0,I.altKey=void 0,I.metaKey=void 0,I.page=void 0,I.client=void 0,I.delta=void 0,I.rect=void 0,I.x0=void 0,I.y0=void 0,I.t0=void 0,I.dt=void 0,I.duration=void 0,I.clientX0=void 0,I.clientY0=void 0,I.velocity=void 0,I.speed=void 0,I.swipe=void 0,I.axes=void 0,I.preEnd=void 0,P=P||f.element;var Q=f.interactable,ne=(Q&&Q.options||Nr).deltaSource,be=J(Q,P,k),fe=L==="start",we=L==="end",qe=fe?u(I):f.prevEvent,Be=fe?f.coords.start:we?{page:qe.page,client:qe.client,timeStamp:f.coords.cur.timeStamp}:f.coords.cur;return I.page=S({},Be.page),I.client=S({},Be.client),I.rect=S({},f.rect),I.timeStamp=Be.timeStamp,we||(I.page.x-=be.x,I.page.y-=be.y,I.client.x-=be.x,I.client.y-=be.y),I.ctrlKey=v.ctrlKey,I.altKey=v.altKey,I.shiftKey=v.shiftKey,I.metaKey=v.metaKey,I.button=v.button,I.buttons=v.buttons,I.target=P,I.currentTarget=P,I.preEnd=D,I.type=Y||k+(L||""),I.interactable=Q,I.t0=fe?f.pointers[f.pointers.length-1].downTime:qe.t0,I.x0=f.coords.start.page.x-be.x,I.y0=f.coords.start.page.y-be.y,I.clientX0=f.coords.start.client.x-be.x,I.clientY0=f.coords.start.client.y-be.y,I.delta=fe||we?{x:0,y:0}:{x:I[ne].x-qe[ne].x,y:I[ne].y-qe[ne].y},I.dt=f.coords.delta.timeStamp,I.duration=I.timeStamp-I.t0,I.velocity=S({},f.coords.velocity[ne]),I.speed=_e(I.velocity.x,I.velocity.y),I.swipe=we||L==="inertiastart"?I.getSwipe():null,I}return n(d,[{key:"getSwipe",value:function(){var f=this._interaction;if(f.prevEvent.speed<600||this.timeStamp-f.prevEvent.timeStamp>150)return null;var v=180*Math.atan2(f.prevEvent.velocityY,f.prevEvent.velocityX)/Math.PI;v<0&&(v+=360);var k=112.5<=v&&v<247.5,L=202.5<=v&&v<337.5;return{up:L,down:!L&&22.5<=v&&v<157.5,left:k,right:!k&&(292.5<=v||v<67.5),angle:v,speed:f.prevEvent.speed,velocity:{x:f.prevEvent.velocityX,y:f.prevEvent.velocityY}}}},{key:"preventDefault",value:function(){}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}}]),d})(pe);Object.defineProperties(pr.prototype,{pageX:{get:function(){return this.page.x},set:function(s){this.page.x=s}},pageY:{get:function(){return this.page.y},set:function(s){this.page.y=s}},clientX:{get:function(){return this.client.x},set:function(s){this.client.x=s}},clientY:{get:function(){return this.client.y},set:function(s){this.client.y=s}},dx:{get:function(){return this.delta.x},set:function(s){this.delta.x=s}},dy:{get:function(){return this.delta.y},set:function(s){this.delta.y=s}},velocityX:{get:function(){return this.velocity.x},set:function(s){this.velocity.x=s}},velocityY:{get:function(){return this.velocity.y},set:function(s){this.velocity.y=s}}});var Qi=n((function s(a,d,f,v,k){t(this,s),this.id=void 0,this.pointer=void 0,this.event=void 0,this.downTime=void 0,this.downTarget=void 0,this.id=a,this.pointer=d,this.event=f,this.downTime=v,this.downTarget=k})),Br=(function(s){return s.interactable="",s.element="",s.prepared="",s.pointerIsDown="",s.pointerWasMoved="",s._proxy="",s})({}),Di=(function(s){return s.start="",s.move="",s.end="",s.stop="",s.interacting="",s})({}),an=0,Fr=(function(){function s(a){var d=this,f=a.pointerType,v=a.scopeFire;t(this,s),this.interactable=null,this.element=null,this.rect=null,this._rects=void 0,this.edges=null,this._scopeFire=void 0,this.prepared={name:null,axis:null,edges:null},this.pointerType=void 0,this.pointers=[],this.downEvent=null,this.downPointer={},this._latestPointer={pointer:null,event:null,eventTarget:null},this.prevEvent=null,this.pointerIsDown=!1,this.pointerWasMoved=!1,this._interacting=!1,this._ending=!1,this._stopped=!0,this._proxy=void 0,this.simulation=null,this.doMove=Gt((function(I){this.move(I)}),"The interaction.doMove() method has been renamed to interaction.move()"),this.coords={start:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},prev:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},cur:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},delta:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},velocity:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0}},this._id=an++,this._scopeFire=v,this.pointerType=f;var k=this;this._proxy={};var L=function(I){Object.defineProperty(d._proxy,I,{get:function(){return k[I]}})};for(var P in Br)L(P);var D=function(I){Object.defineProperty(d._proxy,I,{value:function(){return k[I].apply(k,arguments)}})};for(var Y in Di)D(Y);this._scopeFire("interactions:new",{interaction:this})}return n(s,[{key:"pointerMoveTolerance",get:function(){return 1}},{key:"pointerDown",value:function(a,d,f){var v=this.updatePointer(a,d,f,!0),k=this.pointers[v];this._scopeFire("interactions:down",{pointer:a,event:d,eventTarget:f,pointerIndex:v,pointerInfo:k,type:"down",interaction:this})}},{key:"start",value:function(a,d,f){return!(this.interacting()||!this.pointerIsDown||this.pointers.length<(a.name==="gesture"?2:1)||!d.options[a.name].enabled)&&(Zt(this.prepared,a),this.interactable=d,this.element=f,this.rect=d.getRect(f),this.edges=this.prepared.edges?S({},this.prepared.edges):{left:!0,right:!0,top:!0,bottom:!0},this._stopped=!1,this._interacting=this._doPhase({interaction:this,event:this.downEvent,phase:"start"})&&!this._stopped,this._interacting)}},{key:"pointerMove",value:function(a,d,f){this.simulation||this.modification&&this.modification.endResult||this.updatePointer(a,d,f,!1);var v,k,L=this.coords.cur.page.x===this.coords.prev.page.x&&this.coords.cur.page.y===this.coords.prev.page.y&&this.coords.cur.client.x===this.coords.prev.client.x&&this.coords.cur.client.y===this.coords.prev.client.y;this.pointerIsDown&&!this.pointerWasMoved&&(v=this.coords.cur.client.x-this.coords.start.client.x,k=this.coords.cur.client.y-this.coords.start.client.y,this.pointerWasMoved=_e(v,k)>this.pointerMoveTolerance);var P,D,Y,I=this.getPointerIndex(a),Q={pointer:a,pointerIndex:I,pointerInfo:this.pointers[I],event:d,type:"move",eventTarget:f,dx:v,dy:k,duplicate:L,interaction:this};L||(P=this.coords.velocity,D=this.coords.delta,Y=Math.max(D.timeStamp/1e3,.001),P.page.x=D.page.x/Y,P.page.y=D.page.y/Y,P.client.x=D.client.x/Y,P.client.y=D.client.y/Y,P.timeStamp=Y),this._scopeFire("interactions:move",Q),L||this.simulation||(this.interacting()&&(Q.type=null,this.move(Q)),this.pointerWasMoved&&Fe(this.coords.prev,this.coords.cur))}},{key:"move",value:function(a){a&&a.event||je(this.coords.delta),(a=S({pointer:this._latestPointer.pointer,event:this._latestPointer.event,eventTarget:this._latestPointer.eventTarget,interaction:this},a||{})).phase="move",this._doPhase(a)}},{key:"pointerUp",value:function(a,d,f,v){var k=this.getPointerIndex(a);k===-1&&(k=this.updatePointer(a,d,f,!1));var L=/cancel$/i.test(d.type)?"cancel":"up";this._scopeFire("interactions:".concat(L),{pointer:a,pointerIndex:k,pointerInfo:this.pointers[k],event:d,eventTarget:f,type:L,curEventTarget:v,interaction:this}),this.simulation||this.end(d),this.removePointer(a,d)}},{key:"documentBlur",value:function(a){this.end(a),this._scopeFire("interactions:blur",{event:a,type:"blur",interaction:this})}},{key:"end",value:function(a){var d;this._ending=!0,a=a||this._latestPointer.event,this.interacting()&&(d=this._doPhase({event:a,interaction:this,phase:"end"})),this._ending=!1,d===!0&&this.stop()}},{key:"currentAction",value:function(){return this._interacting?this.prepared.name:null}},{key:"interacting",value:function(){return this._interacting}},{key:"stop",value:function(){this._scopeFire("interactions:stop",{interaction:this}),this.interactable=this.element=null,this._interacting=!1,this._stopped=!0,this.prepared.name=this.prevEvent=null}},{key:"getPointerIndex",value:function(a){var d=He(a);return this.pointerType==="mouse"||this.pointerType==="pen"?this.pointers.length-1:De(this.pointers,(function(f){return f.id===d}))}},{key:"getPointerInfo",value:function(a){return this.pointers[this.getPointerIndex(a)]}},{key:"updatePointer",value:function(a,d,f,v){var k,L,P,D=He(a),Y=this.getPointerIndex(a),I=this.pointers[Y];return v=v!==!1&&(v||/(down|start)$/i.test(d.type)),I?I.pointer=a:(I=new Qi(D,a,d,null,null),Y=this.pointers.length,this.pointers.push(I)),ht(this.coords.cur,this.pointers.map((function(Q){return Q.pointer})),this._now()),k=this.coords.delta,L=this.coords.prev,P=this.coords.cur,k.page.x=P.page.x-L.page.x,k.page.y=P.page.y-L.page.y,k.client.x=P.client.x-L.client.x,k.client.y=P.client.y-L.client.y,k.timeStamp=P.timeStamp-L.timeStamp,v&&(this.pointerIsDown=!0,I.downTime=this.coords.cur.timeStamp,I.downTarget=f,Ee(this.downPointer,a),this.interacting()||(Fe(this.coords.start,this.coords.cur),Fe(this.coords.prev,this.coords.cur),this.downEvent=d,this.pointerWasMoved=!1)),this._updateLatestPointer(a,d,f),this._scopeFire("interactions:update-pointer",{pointer:a,event:d,eventTarget:f,down:v,pointerInfo:I,pointerIndex:Y,interaction:this}),Y}},{key:"removePointer",value:function(a,d){var f=this.getPointerIndex(a);if(f!==-1){var v=this.pointers[f];this._scopeFire("interactions:remove-pointer",{pointer:a,event:d,eventTarget:null,pointerIndex:f,pointerInfo:v,interaction:this}),this.pointers.splice(f,1),this.pointerIsDown=!1}}},{key:"_updateLatestPointer",value:function(a,d,f){this._latestPointer.pointer=a,this._latestPointer.event=d,this._latestPointer.eventTarget=f}},{key:"destroy",value:function(){this._latestPointer.pointer=null,this._latestPointer.event=null,this._latestPointer.eventTarget=null}},{key:"_createPreparedEvent",value:function(a,d,f,v){return new pr(this,a,this.prepared.name,d,this.element,f,v)}},{key:"_fireEvent",value:function(a){var d;(d=this.interactable)==null||d.fire(a),(!this.prevEvent||a.timeStamp>=this.prevEvent.timeStamp)&&(this.prevEvent=a)}},{key:"_doPhase",value:function(a){var d=a.event,f=a.phase,v=a.preEnd,k=a.type,L=this.rect;if(L&&f==="move"&&(V(this.edges,L,this.coords.delta[this.interactable.options.deltaSource]),L.width=L.right-L.left,L.height=L.bottom-L.top),this._scopeFire("interactions:before-action-".concat(f),a)===!1)return!1;var P=a.iEvent=this._createPreparedEvent(d,f,v,k);return this._scopeFire("interactions:action-".concat(f),a),f==="start"&&(this.prevEvent=P),this._fireEvent(P),this._scopeFire("interactions:after-action-".concat(f),a),!0}},{key:"_now",value:function(){return Date.now()}}]),s})();function Tt(s){ur(s.interaction)}function ur(s){if(!(function(d){return!(!d.offset.pending.x&&!d.offset.pending.y)})(s))return!1;var a=s.offset.pending;return ni(s.coords.cur,a),ni(s.coords.delta,a),V(s.edges,s.rect,a),a.x=0,a.y=0,!0}function Zi(s){var a=s.x,d=s.y;this.offset.pending.x+=a,this.offset.pending.y+=d,this.offset.total.x+=a,this.offset.total.y+=d}function ni(s,a){var d=s.page,f=s.client,v=a.x,k=a.y;d.x+=v,d.y+=k,f.x+=v,f.y+=k}Di.offsetBy="";var on={id:"offset",before:["modifiers","pointer-events","actions","inertia"],install:function(s){s.Interaction.prototype.offsetBy=Zi},listeners:{"interactions:new":function(s){s.interaction.offset={total:{x:0,y:0},pending:{x:0,y:0}}},"interactions:update-pointer":function(s){return(function(a){a.pointerIsDown&&(ni(a.coords.cur,a.offset.total),a.offset.pending.x=0,a.offset.pending.y=0)})(s.interaction)},"interactions:before-action-start":Tt,"interactions:before-action-move":Tt,"interactions:before-action-end":function(s){var a=s.interaction;if(ur(a))return a.move({offset:!0}),a.end(),!1},"interactions:stop":function(s){var a=s.interaction;a.offset.total.x=0,a.offset.total.y=0,a.offset.pending.x=0,a.offset.pending.y=0}}},Ii=on,Ci=(function(){function s(a){t(this,s),this.active=!1,this.isModified=!1,this.smoothEnd=!1,this.allowResume=!1,this.modification=void 0,this.modifierCount=0,this.modifierArg=void 0,this.startCoords=void 0,this.t0=0,this.v0=0,this.te=0,this.targetOffset=void 0,this.modifiedOffset=void 0,this.currentOffset=void 0,this.lambda_v0=0,this.one_ve_v0=0,this.timeout=void 0,this.interaction=void 0,this.interaction=a}return n(s,[{key:"start",value:function(a){var d=this.interaction,f=Ni(d);if(!f||!f.enabled)return!1;var v=d.coords.velocity.client,k=_e(v.x,v.y),L=this.modification||(this.modification=new Xi(d));if(L.copyFrom(d.modification),this.t0=d._now(),this.allowResume=f.allowResume,this.v0=k,this.currentOffset={x:0,y:0},this.startCoords=d.coords.cur.page,this.modifierArg=L.fillArg({pageCoords:this.startCoords,preEnd:!0,phase:"inertiastart"}),this.t0-d.coords.cur.timeStamp<50&&k>f.minSpeed&&k>f.endSpeed)this.startInertia();else{if(L.result=L.setAll(this.modifierArg),!L.result.changed)return!1;this.startSmoothEnd()}return d.modification.result.rect=null,d.offsetBy(this.targetOffset),d._doPhase({interaction:d,event:a,phase:"inertiastart"}),d.offsetBy({x:-this.targetOffset.x,y:-this.targetOffset.y}),d.modification.result.rect=null,this.active=!0,d.simulation=this,!0}},{key:"startInertia",value:function(){var a=this,d=this.interaction.coords.velocity.client,f=Ni(this.interaction),v=f.resistance,k=-Math.log(f.endSpeed/this.v0)/v;this.targetOffset={x:(d.x-k)/v,y:(d.y-k)/v},this.te=k,this.lambda_v0=v/this.v0,this.one_ve_v0=1-f.endSpeed/this.v0;var L=this.modification,P=this.modifierArg;P.pageCoords={x:this.startCoords.x+this.targetOffset.x,y:this.startCoords.y+this.targetOffset.y},L.result=L.setAll(P),L.result.changed&&(this.isModified=!0,this.modifiedOffset={x:this.targetOffset.x+L.result.delta.x,y:this.targetOffset.y+L.result.delta.y}),this.onNextFrame((function(){return a.inertiaTick()}))}},{key:"startSmoothEnd",value:function(){var a=this;this.smoothEnd=!0,this.isModified=!0,this.targetOffset={x:this.modification.result.delta.x,y:this.modification.result.delta.y},this.onNextFrame((function(){return a.smoothEndTick()}))}},{key:"onNextFrame",value:function(a){var d=this;this.timeout=ge.request((function(){d.active&&a()}))}},{key:"inertiaTick",value:function(){var a,d,f,v,k,L,P,D=this,Y=this.interaction,I=Ni(Y).resistance,Q=(Y._now()-this.t0)/1e3;if(Q<this.te){var ne,be=1-(Math.exp(-I*Q)-this.lambda_v0)/this.one_ve_v0;this.isModified?(a=0,d=0,f=this.targetOffset.x,v=this.targetOffset.y,k=this.modifiedOffset.x,L=this.modifiedOffset.y,ne={x:er(P=be,a,f,k),y:er(P,d,v,L)}):ne={x:this.targetOffset.x*be,y:this.targetOffset.y*be};var fe={x:ne.x-this.currentOffset.x,y:ne.y-this.currentOffset.y};this.currentOffset.x+=fe.x,this.currentOffset.y+=fe.y,Y.offsetBy(fe),Y.move(),this.onNextFrame((function(){return D.inertiaTick()}))}else Y.offsetBy({x:this.modifiedOffset.x-this.currentOffset.x,y:this.modifiedOffset.y-this.currentOffset.y}),this.end()}},{key:"smoothEndTick",value:function(){var a=this,d=this.interaction,f=d._now()-this.t0,v=Ni(d).smoothEndDuration;if(f<v){var k={x:mr(f,0,this.targetOffset.x,v),y:mr(f,0,this.targetOffset.y,v)},L={x:k.x-this.currentOffset.x,y:k.y-this.currentOffset.y};this.currentOffset.x+=L.x,this.currentOffset.y+=L.y,d.offsetBy(L),d.move({skipModifiers:this.modifierCount}),this.onNextFrame((function(){return a.smoothEndTick()}))}else d.offsetBy({x:this.targetOffset.x-this.currentOffset.x,y:this.targetOffset.y-this.currentOffset.y}),this.end()}},{key:"resume",value:function(a){var d=a.pointer,f=a.event,v=a.eventTarget,k=this.interaction;k.offsetBy({x:-this.currentOffset.x,y:-this.currentOffset.y}),k.updatePointer(d,f,v,!0),k._doPhase({interaction:k,event:f,phase:"resume"}),Fe(k.coords.prev,k.coords.cur),this.stop()}},{key:"end",value:function(){this.interaction.move(),this.interaction.end(),this.stop()}},{key:"stop",value:function(){this.active=this.smoothEnd=!1,this.interaction.simulation=null,ge.cancel(this.timeout)}}]),s})();function Ni(s){var a=s.interactable,d=s.prepared;return a&&a.options&&d.name&&a.options[d.name].inertia}var gr={id:"inertia",before:["modifiers","actions"],install:function(s){var a=s.defaults;s.usePlugin(Ii),s.usePlugin(Ir),s.actions.phases.inertiastart=!0,s.actions.phases.resume=!0,a.perAction.inertia={enabled:!1,resistance:10,minSpeed:100,endSpeed:10,allowResume:!0,smoothEndDuration:300}},listeners:{"interactions:new":function(s){var a=s.interaction;a.inertia=new Ci(a)},"interactions:before-action-end":function(s){var a=s.interaction,d=s.event;return(!a._interacting||a.simulation||!a.inertia.start(d))&&null},"interactions:down":function(s){var a=s.interaction,d=s.eventTarget,f=a.inertia;if(f.active)for(var v=d;C.element(v);){if(v===a.element){f.resume(s);break}v=me(v)}},"interactions:stop":function(s){var a=s.interaction.inertia;a.active&&a.stop()},"interactions:before-action-resume":function(s){var a=s.interaction.modification;a.stop(s),a.start(s,s.interaction.coords.cur.page),a.applyToInteraction(s)},"interactions:before-action-inertiastart":function(s){return s.interaction.modification.setAndApply(s)},"interactions:action-resume":Wt,"interactions:action-inertiastart":Wt,"interactions:after-action-inertiastart":function(s){return s.interaction.modification.restoreInteractionCoords(s)},"interactions:after-action-resume":function(s){return s.interaction.modification.restoreInteractionCoords(s)}}};function er(s,a,d,f){var v=1-s;return v*v*a+2*v*s*d+s*s*f}function mr(s,a,d,f){return-d*(s/=f)*(s-2)+a}var Hr=gr;function $r(s,a){for(var d=0;d<a.length;d++){var f=a[d];if(s.immediatePropagationStopped)break;f(s)}}var fr=(function(){function s(a){t(this,s),this.options=void 0,this.types={},this.propagationStopped=!1,this.immediatePropagationStopped=!1,this.global=void 0,this.options=S({},a||{})}return n(s,[{key:"fire",value:function(a){var d,f=this.global;(d=this.types[a.type])&&$r(a,d),!a.propagationStopped&&f&&(d=f[a.type])&&$r(a,d)}},{key:"on",value:function(a,d){var f=Z(a,d);for(a in f)this.types[a]=Ke(this.types[a]||[],f[a])}},{key:"off",value:function(a,d){var f=Z(a,d);for(a in f){var v=this.types[a];if(v&&v.length)for(var k=0,L=f[a];k<L.length;k++){var P=L[k],D=v.indexOf(P);D!==-1&&v.splice(D,1)}}}},{key:"getRect",value:function(a){return null}}]),s})(),qr=(function(){function s(a){t(this,s),this.currentTarget=void 0,this.originalEvent=void 0,this.type=void 0,this.originalEvent=a,Ee(this,a)}return n(s,[{key:"preventOriginalDefault",value:function(){this.originalEvent.preventDefault()}},{key:"stopPropagation",value:function(){this.originalEvent.stopPropagation()}},{key:"stopImmediatePropagation",value:function(){this.originalEvent.stopImmediatePropagation()}}]),s})();function li(s){return C.object(s)?{capture:!!s.capture,passive:!!s.passive}:{capture:!!s,passive:!1}}function Bi(s,a){return s===a||(typeof s=="boolean"?!!a.capture===s&&!a.passive:!!s.capture==!!a.capture&&!!s.passive==!!a.passive)}var jr={id:"events",install:function(s){var a,d=[],f={},v=[],k={add:L,remove:P,addDelegate:function(I,Q,ne,be,fe){var we=li(fe);if(!f[ne]){f[ne]=[];for(var qe=0;qe<v.length;qe++){var Be=v[qe];L(Be,ne,D),L(Be,ne,Y,!0)}}var Ye=f[ne],lt=Ze(Ye,(function(ft){return ft.selector===I&&ft.context===Q}));lt||(lt={selector:I,context:Q,listeners:[]},Ye.push(lt)),lt.listeners.push({func:be,options:we})},removeDelegate:function(I,Q,ne,be,fe){var we,qe=li(fe),Be=f[ne],Ye=!1;if(Be)for(we=Be.length-1;we>=0;we--){var lt=Be[we];if(lt.selector===I&&lt.context===Q){for(var ft=lt.listeners,it=ft.length-1;it>=0;it--){var pt=ft[it];if(pt.func===be&&Bi(pt.options,qe)){ft.splice(it,1),ft.length||(Be.splice(we,1),P(Q,ne,D),P(Q,ne,Y,!0)),Ye=!0;break}}if(Ye)break}}},delegateListener:D,delegateUseCapture:Y,delegatedEvents:f,documents:v,targets:d,supportsOptions:!1,supportsPassive:!1};function L(I,Q,ne,be){if(I.addEventListener){var fe=li(be),we=Ze(d,(function(qe){return qe.eventTarget===I}));we||(we={eventTarget:I,events:{}},d.push(we)),we.events[Q]||(we.events[Q]=[]),Ze(we.events[Q],(function(qe){return qe.func===ne&&Bi(qe.options,fe)}))||(I.addEventListener(Q,ne,k.supportsOptions?fe:fe.capture),we.events[Q].push({func:ne,options:fe}))}}function P(I,Q,ne,be){if(I.addEventListener&&I.removeEventListener){var fe=De(d,(function($t){return $t.eventTarget===I})),we=d[fe];if(we&&we.events)if(Q!=="all"){var qe=!1,Be=we.events[Q];if(Be){if(ne==="all"){for(var Ye=Be.length-1;Ye>=0;Ye--){var lt=Be[Ye];P(I,Q,lt.func,lt.options)}return}for(var ft=li(be),it=0;it<Be.length;it++){var pt=Be[it];if(pt.func===ne&&Bi(pt.options,ft)){I.removeEventListener(Q,ne,k.supportsOptions?ft:ft.capture),Be.splice(it,1),Be.length===0&&(delete we.events[Q],qe=!0);break}}}qe&&!Object.keys(we.events).length&&d.splice(fe,1)}else for(Q in we.events)we.events.hasOwnProperty(Q)&&P(I,Q,"all")}}function D(I,Q){for(var ne=li(Q),be=new qr(I),fe=f[I.type],we=oe(I)[0],qe=we;C.element(qe);){for(var Be=0;Be<fe.length;Be++){var Ye=fe[Be],lt=Ye.selector,ft=Ye.context;if(de(qe,lt)&&le(ft,we)&&le(ft,qe)){var it=Ye.listeners;be.currentTarget=qe;for(var pt=0;pt<it.length;pt++){var $t=it[pt];Bi($t.options,ne)&&$t.func(be)}}}qe=me(qe)}}function Y(I){return D(I,!0)}return(a=s.document)==null||a.createElement("div").addEventListener("test",null,{get capture(){return k.supportsOptions=!0},get passive(){return k.supportsPassive=!0}}),s.events=k,k}},tr={methodOrder:["simulationResume","mouseOrPen","hasPointer","idle"],search:function(s){for(var a=0,d=tr.methodOrder;a<d.length;a++){var f=d[a],v=tr[f](s);if(v)return v}return null},simulationResume:function(s){var a=s.pointerType,d=s.eventType,f=s.eventTarget,v=s.scope;if(!/down|start/i.test(d))return null;for(var k=0,L=v.interactions.list;k<L.length;k++){var P=L[k],D=f;if(P.simulation&&P.simulation.allowResume&&P.pointerType===a)for(;D;){if(D===P.element)return P;D=me(D)}}return null},mouseOrPen:function(s){var a,d=s.pointerId,f=s.pointerType,v=s.eventType,k=s.scope;if(f!=="mouse"&&f!=="pen")return null;for(var L=0,P=k.interactions.list;L<P.length;L++){var D=P[L];if(D.pointerType===f){if(D.simulation&&!br(D,d))continue;if(D.interacting())return D;a||(a=D)}}if(a)return a;for(var Y=0,I=k.interactions.list;Y<I.length;Y++){var Q=I[Y];if(!(Q.pointerType!==f||/down/i.test(v)&&Q.simulation))return Q}return null},hasPointer:function(s){for(var a=s.pointerId,d=0,f=s.scope.interactions.list;d<f.length;d++){var v=f[d];if(br(v,a))return v}return null},idle:function(s){for(var a=s.pointerType,d=0,f=s.scope.interactions.list;d<f.length;d++){var v=f[d];if(v.pointers.length===1){var k=v.interactable;if(k&&(!k.options.gesture||!k.options.gesture.enabled))continue}else if(v.pointers.length>=2)continue;if(!v.interacting()&&a===v.pointerType)return v}return null}};function br(s,a){return s.pointers.some((function(d){return d.id===a}))}var Vr=tr,ir=["pointerDown","pointerMove","pointerUp","updatePointer","removePointer","windowBlur"];function yr(s,a){return function(d){var f=a.interactions.list,v=Mt(d),k=oe(d),L=k[0],P=k[1],D=[];if(/^touch/.test(d.type)){a.prevTouchTime=a.now();for(var Y=0,I=d.changedTouches;Y<I.length;Y++){var Q=I[Y],ne={pointer:Q,pointerId:He(Q),pointerType:v,eventType:d.type,eventTarget:L,curEventTarget:P,scope:a},be=vr(ne);D.push([ne.pointer,ne.eventTarget,ne.curEventTarget,be])}}else{var fe=!1;if(!re.supportsPointerEvent&&/mouse/.test(d.type)){for(var we=0;we<f.length&&!fe;we++)fe=f[we].pointerType!=="mouse"&&f[we].pointerIsDown;fe=fe||a.now()-a.prevTouchTime<500||d.timeStamp===0}if(!fe){var qe={pointer:d,pointerId:He(d),pointerType:v,eventType:d.type,curEventTarget:P,eventTarget:L,scope:a},Be=vr(qe);D.push([qe.pointer,qe.eventTarget,qe.curEventTarget,Be])}}for(var Ye=0;Ye<D.length;Ye++){var lt=D[Ye],ft=lt[0],it=lt[1],pt=lt[2];lt[3][s](ft,d,it,pt)}}}function vr(s){var a=s.pointerType,d=s.scope,f={interaction:Vr.search(s),searchDetails:s};return d.fire("interactions:find",f),f.interaction||d.interactions.new({pointerType:a})}function rr(s,a){var d=s.doc,f=s.scope,v=s.options,k=f.interactions.docEvents,L=f.events,P=L[a];for(var D in f.browser.isIOS&&!v.events&&(v.events={passive:!1}),L.delegatedEvents)P(d,D,L.delegateListener),P(d,D,L.delegateUseCapture,!0);for(var Y=v&&v.events,I=0;I<k.length;I++){var Q=k[I];P(d,Q.type,Q.listener,Y)}}var Wr={id:"core/interactions",install:function(s){for(var a={},d=0;d<ir.length;d++){var f=ir[d];a[f]=yr(f,s)}var v,k=re.pEventTypes;function L(){for(var P=0,D=s.interactions.list;P<D.length;P++){var Y=D[P];if(Y.pointerIsDown&&Y.pointerType==="touch"&&!Y._interacting)for(var I=function(){var be=ne[Q];s.documents.some((function(fe){return le(fe.doc,be.downTarget)}))||Y.removePointer(be.pointer,be.event)},Q=0,ne=Y.pointers;Q<ne.length;Q++)I()}}(v=X.PointerEvent?[{type:k.down,listener:L},{type:k.down,listener:a.pointerDown},{type:k.move,listener:a.pointerMove},{type:k.up,listener:a.pointerUp},{type:k.cancel,listener:a.pointerUp}]:[{type:"mousedown",listener:a.pointerDown},{type:"mousemove",listener:a.pointerMove},{type:"mouseup",listener:a.pointerUp},{type:"touchstart",listener:L},{type:"touchstart",listener:a.pointerDown},{type:"touchmove",listener:a.pointerMove},{type:"touchend",listener:a.pointerUp},{type:"touchcancel",listener:a.pointerUp}]).push({type:"blur",listener:function(P){for(var D=0,Y=s.interactions.list;D<Y.length;D++)Y[D].documentBlur(P)}}),s.prevTouchTime=0,s.Interaction=(function(P){c(Y,P);var D=m(Y);function Y(){return t(this,Y),D.apply(this,arguments)}return n(Y,[{key:"pointerMoveTolerance",get:function(){return s.interactions.pointerMoveTolerance},set:function(I){s.interactions.pointerMoveTolerance=I}},{key:"_now",value:function(){return s.now()}}]),Y})(Fr),s.interactions={list:[],new:function(P){P.scopeFire=function(Y,I){return s.fire(Y,I)};var D=new s.Interaction(P);return s.interactions.list.push(D),D},listeners:a,docEvents:v,pointerMoveTolerance:1},s.usePlugin(_i)},listeners:{"scope:add-document":function(s){return rr(s,"add")},"scope:remove-document":function(s){return rr(s,"remove")},"interactable:unset":function(s,a){for(var d=s.interactable,f=a.interactions.list.length-1;f>=0;f--){var v=a.interactions.list[f];v.interactable===d&&(v.stop(),a.fire("interactions:destroy",{interaction:v}),v.destroy(),a.interactions.list.length>2&&a.interactions.list.splice(f,1))}}},onDocSignal:rr,doOnInteractions:yr,methodNames:ir},Kr=Wr,hi=(function(s){return s[s.On=0]="On",s[s.Off=1]="Off",s})(hi||{}),nr=(function(){function s(a,d,f,v){t(this,s),this.target=void 0,this.options=void 0,this._actions=void 0,this.events=new fr,this._context=void 0,this._win=void 0,this._doc=void 0,this._scopeEvents=void 0,this._actions=d.actions,this.target=a,this._context=d.context||f,this._win=E(x(a)?this._context:a),this._doc=this._win.document,this._scopeEvents=v,this.set(d)}return n(s,[{key:"_defaults",get:function(){return{base:{},perAction:{},actions:{}}}},{key:"setOnEvents",value:function(a,d){return C.func(d.onstart)&&this.on("".concat(a,"start"),d.onstart),C.func(d.onmove)&&this.on("".concat(a,"move"),d.onmove),C.func(d.onend)&&this.on("".concat(a,"end"),d.onend),C.func(d.oninertiastart)&&this.on("".concat(a,"inertiastart"),d.oninertiastart),this}},{key:"updatePerActionListeners",value:function(a,d,f){var v,k=this,L=(v=this._actions.map[a])==null?void 0:v.filterEventType,P=function(D){return(L==null||L(D))&&Oi(D,k._actions)};(C.array(d)||C.object(d))&&this._onOff(hi.Off,a,d,void 0,P),(C.array(f)||C.object(f))&&this._onOff(hi.On,a,f,void 0,P)}},{key:"setPerAction",value:function(a,d){var f=this._defaults;for(var v in d){var k=v,L=this.options[a],P=d[k];k==="listeners"&&this.updatePerActionListeners(a,L.listeners,P),C.array(P)?L[k]=Ve(P):C.plainObject(P)?(L[k]=S(L[k]||{},ti(P)),C.object(f.perAction[k])&&"enabled"in f.perAction[k]&&(L[k].enabled=P.enabled!==!1)):C.bool(P)&&C.object(f.perAction[k])?L[k].enabled=P:L[k]=P}}},{key:"getRect",value:function(a){return a=a||(C.element(this.target)?this.target:null),C.string(this.target)&&(a=a||this._context.querySelector(this.target)),B(a)}},{key:"rectChecker",value:function(a){var d=this;return C.func(a)?(this.getRect=function(f){var v=S({},a.apply(d,f));return"width"in v||(v.width=v.right-v.left,v.height=v.bottom-v.top),v},this):a===null?(delete this.getRect,this):this.getRect}},{key:"_backCompatOption",value:function(a,d){if(x(d)||C.object(d)){for(var f in this.options[a]=d,this._actions.map)this.options[f][a]=d;return this}return this.options[a]}},{key:"origin",value:function(a){return this._backCompatOption("origin",a)}},{key:"deltaSource",value:function(a){return a==="page"||a==="client"?(this.options.deltaSource=a,this):this.options.deltaSource}},{key:"getAllElements",value:function(){var a=this.target;return C.string(a)?Array.from(this._context.querySelectorAll(a)):C.func(a)&&a.getAllElements?a.getAllElements():C.element(a)?[a]:[]}},{key:"context",value:function(){return this._context}},{key:"inContext",value:function(a){return this._context===a.ownerDocument||le(this._context,a)}},{key:"testIgnoreAllow",value:function(a,d,f){return!this.testIgnore(a.ignoreFrom,d,f)&&this.testAllow(a.allowFrom,d,f)}},{key:"testAllow",value:function(a,d,f){return!a||!!C.element(f)&&(C.string(a)?Ae(f,a,d):!!C.element(a)&&le(a,f))}},{key:"testIgnore",value:function(a,d,f){return!(!a||!C.element(f))&&(C.string(a)?Ae(f,a,d):!!C.element(a)&&le(a,f))}},{key:"fire",value:function(a){return this.events.fire(a),this}},{key:"_onOff",value:function(a,d,f,v,k){C.object(d)&&!C.array(d)&&(v=f,f=null);var L=Z(d,f,k);for(var P in L){P==="wheel"&&(P=re.wheelEvent);for(var D=0,Y=L[P];D<Y.length;D++){var I=Y[D];Oi(P,this._actions)?this.events[a===hi.On?"on":"off"](P,I):C.string(this.target)?this._scopeEvents[a===hi.On?"addDelegate":"removeDelegate"](this.target,this._context,P,I,v):this._scopeEvents[a===hi.On?"add":"remove"](this.target,P,I,v)}}return this}},{key:"on",value:function(a,d,f){return this._onOff(hi.On,a,d,f)}},{key:"off",value:function(a,d,f){return this._onOff(hi.Off,a,d,f)}},{key:"set",value:function(a){var d=this._defaults;for(var f in C.object(a)||(a={}),this.options=ti(d.base),this._actions.methodDict){var v=f,k=this._actions.methodDict[v];this.options[v]={},this.setPerAction(v,S(S({},d.perAction),d.actions[v])),this[k](a[v])}for(var L in a)L!=="getRect"?C.func(this[L])&&this[L](a[L]):this.rectChecker(a.getRect);return this}},{key:"unset",value:function(){if(C.string(this.target))for(var a in this._scopeEvents.delegatedEvents)for(var d=this._scopeEvents.delegatedEvents[a],f=d.length-1;f>=0;f--){var v=d[f],k=v.selector,L=v.context,P=v.listeners;k===this.target&&L===this._context&&d.splice(f,1);for(var D=P.length-1;D>=0;D--)this._scopeEvents.removeDelegate(this.target,this._context,a,P[D][0],P[D][1])}else this._scopeEvents.remove(this.target,"all")}}]),s})(),Yr=(function(){function s(a){var d=this;t(this,s),this.list=[],this.selectorMap={},this.scope=void 0,this.scope=a,a.addListeners({"interactable:unset":function(f){var v=f.interactable,k=v.target,L=C.string(k)?d.selectorMap[k]:k[d.scope.id],P=De(L,(function(D){return D===v}));L.splice(P,1)}})}return n(s,[{key:"new",value:function(a,d){d=S(d||{},{actions:this.scope.actions});var f=new this.scope.Interactable(a,d,this.scope.document,this.scope.events);return this.scope.addDocument(f._doc),this.list.push(f),C.string(a)?(this.selectorMap[a]||(this.selectorMap[a]=[]),this.selectorMap[a].push(f)):(f.target[this.scope.id]||Object.defineProperty(a,this.scope.id,{value:[],configurable:!0}),a[this.scope.id].push(f)),this.scope.fire("interactable:new",{target:a,options:d,interactable:f,win:this.scope._win}),f}},{key:"getExisting",value:function(a,d){var f=d&&d.context||this.scope.document,v=C.string(a),k=v?this.selectorMap[a]:a[this.scope.id];if(k)return Ze(k,(function(L){return L._context===f&&(v||L.inContext(a))}))}},{key:"forEachMatch",value:function(a,d){for(var f=0,v=this.list;f<v.length;f++){var k=v[f],L=void 0;if((C.string(k.target)?C.element(a)&&de(a,k.target):a===k.target)&&k.inContext(a)&&(L=d(k)),L!==void 0)return L}}}]),s})(),Ur=(function(){function s(){var a=this;t(this,s),this.id="__interact_scope_".concat(Math.floor(100*Math.random())),this.isInitialized=!1,this.listenerMaps=[],this.browser=re,this.defaults=ti(Nr),this.Eventable=fr,this.actions={map:{},phases:{start:!0,move:!0,end:!0},methodDict:{},phaselessTypes:{}},this.interactStatic=(function(f){var v=function k(L,P){var D=f.interactables.getExisting(L,P);return D||((D=f.interactables.new(L,P)).events.global=k.globalEvents),D};return v.getPointerAverage=_t,v.getTouchBBox=Ct,v.getTouchDistance=St,v.getTouchAngle=xt,v.getElementRect=B,v.getElementClientRect=Se,v.matchesSelector=de,v.closest=Le,v.globalEvents={},v.version="1.10.27",v.scope=f,v.use=function(k,L){return this.scope.usePlugin(k,L),this},v.isSet=function(k,L){return!!this.scope.interactables.get(k,L&&L.context)},v.on=Gt((function(k,L,P){if(C.string(k)&&k.search(" ")!==-1&&(k=k.trim().split(/ +/)),C.array(k)){for(var D=0,Y=k;D<Y.length;D++){var I=Y[D];this.on(I,L,P)}return this}if(C.object(k)){for(var Q in k)this.on(Q,k[Q],L);return this}return Oi(k,this.scope.actions)?this.globalEvents[k]?this.globalEvents[k].push(L):this.globalEvents[k]=[L]:this.scope.events.add(this.scope.document,k,L,{options:P}),this}),"The interact.on() method is being deprecated"),v.off=Gt((function(k,L,P){if(C.string(k)&&k.search(" ")!==-1&&(k=k.trim().split(/ +/)),C.array(k)){for(var D=0,Y=k;D<Y.length;D++){var I=Y[D];this.off(I,L,P)}return this}if(C.object(k)){for(var Q in k)this.off(Q,k[Q],L);return this}var ne;return Oi(k,this.scope.actions)?k in this.globalEvents&&(ne=this.globalEvents[k].indexOf(L))!==-1&&this.globalEvents[k].splice(ne,1):this.scope.events.remove(this.scope.document,k,L,P),this}),"The interact.off() method is being deprecated"),v.debug=function(){return this.scope},v.supportsTouch=function(){return re.supportsTouch},v.supportsPointerEvent=function(){return re.supportsPointerEvent},v.stop=function(){for(var k=0,L=this.scope.interactions.list;k<L.length;k++)L[k].stop();return this},v.pointerMoveTolerance=function(k){return C.number(k)?(this.scope.interactions.pointerMoveTolerance=k,this):this.scope.interactions.pointerMoveTolerance},v.addDocument=function(k,L){this.scope.addDocument(k,L)},v.removeDocument=function(k){this.scope.removeDocument(k)},v})(this),this.InteractEvent=pr,this.Interactable=void 0,this.interactables=new Yr(this),this._win=void 0,this.document=void 0,this.window=void 0,this.documents=[],this._plugins={list:[],map:{}},this.onWindowUnload=function(f){return a.removeDocument(f.target)};var d=this;this.Interactable=(function(f){c(k,f);var v=m(k);function k(){return t(this,k),v.apply(this,arguments)}return n(k,[{key:"_defaults",get:function(){return d.defaults}},{key:"set",value:function(L){return h(l(k.prototype),"set",this).call(this,L),d.fire("interactable:set",{options:L,interactable:this}),this}},{key:"unset",value:function(){h(l(k.prototype),"unset",this).call(this);var L=d.interactables.list.indexOf(this);L<0||(d.interactables.list.splice(L,1),d.fire("interactable:unset",{interactable:this}))}}]),k})(nr)}return n(s,[{key:"addListeners",value:function(a,d){this.listenerMaps.push({id:d,map:a})}},{key:"fire",value:function(a,d){for(var f=0,v=this.listenerMaps;f<v.length;f++){var k=v[f].map[a];if(k&&k(d,this,a)===!1)return!1}}},{key:"init",value:function(a){return this.isInitialized?this:(function(d,f){return d.isInitialized=!0,C.window(f)&&T(f),X.init(f),re.init(f),ge.init(f),d.window=f,d.document=f.document,d.usePlugin(Kr),d.usePlugin(jr),d})(this,a)}},{key:"pluginIsInstalled",value:function(a){var d=a.id;return d?!!this._plugins.map[d]:this._plugins.list.indexOf(a)!==-1}},{key:"usePlugin",value:function(a,d){if(!this.isInitialized)return this;if(this.pluginIsInstalled(a))return this;if(a.id&&(this._plugins.map[a.id]=a),this._plugins.list.push(a),a.install&&a.install(this,d),a.listeners&&a.before){for(var f=0,v=this.listenerMaps.length,k=a.before.reduce((function(P,D){return P[D]=!0,P[_r(D)]=!0,P}),{});f<v;f++){var L=this.listenerMaps[f].id;if(L&&(k[L]||k[_r(L)]))break}this.listenerMaps.splice(f,0,{id:a.id,map:a.listeners})}else a.listeners&&this.listenerMaps.push({id:a.id,map:a.listeners});return this}},{key:"addDocument",value:function(a,d){if(this.getDocIndex(a)!==-1)return!1;var f=E(a);d=d?S({},d):{},this.documents.push({doc:a,options:d}),this.events.documents.push(a),a!==this.document&&this.events.add(f,"unload",this.onWindowUnload),this.fire("scope:add-document",{doc:a,window:f,scope:this,options:d})}},{key:"removeDocument",value:function(a){var d=this.getDocIndex(a),f=E(a),v=this.documents[d].options;this.events.remove(f,"unload",this.onWindowUnload),this.documents.splice(d,1),this.events.documents.splice(d,1),this.fire("scope:remove-document",{doc:a,window:f,scope:this,options:v})}},{key:"getDocIndex",value:function(a){for(var d=0;d<this.documents.length;d++)if(this.documents[d].doc===a)return d;return-1}},{key:"getDocOptions",value:function(a){var d=this.getDocIndex(a);return d===-1?null:this.documents[d].options}},{key:"now",value:function(){return(this.window.Date||Date).now()}}]),s})();function _r(s){return s&&s.replace(/\/.*$/,"")}var xr=new Ur,Ft=xr.interactStatic,Gr=typeof globalThis!="undefined"?globalThis:window;xr.init(Gr);var R=Object.freeze({__proto__:null,edgeTarget:function(){},elements:function(){},grid:function(s){var a=[["x","y"],["left","top"],["right","bottom"],["width","height"]].filter((function(f){var v=f[0],k=f[1];return v in s||k in s})),d=function(f,v){for(var k=s.range,L=s.limits,P=L===void 0?{left:-1/0,right:1/0,top:-1/0,bottom:1/0}:L,D=s.offset,Y=D===void 0?{x:0,y:0}:D,I={range:k,grid:s,x:null,y:null},Q=0;Q<a.length;Q++){var ne=a[Q],be=ne[0],fe=ne[1],we=Math.round((f-Y.x)/s[be]),qe=Math.round((v-Y.y)/s[fe]);I[be]=Math.max(P.left,Math.min(P.right,we*s[be]+Y.x)),I[fe]=Math.max(P.top,Math.min(P.bottom,qe*s[fe]+Y.y))}return I};return d.grid=s,d.coordFields=a,d}}),K={id:"snappers",install:function(s){var a=s.interactStatic;a.snappers=S(a.snappers||{},R),a.createSnapGrid=a.snappers.grid}},ee=K,se={start:function(s){var a=s.state,d=s.rect,f=s.edges,v=s.pageCoords,k=a.options,L=k.ratio,P=k.enabled,D=a.options,Y=D.equalDelta,I=D.modifiers;L==="preserve"&&(L=d.width/d.height),a.startCoords=S({},v),a.startRect=S({},d),a.ratio=L,a.equalDelta=Y;var Q=a.linkedEdges={top:f.top||f.left&&!f.bottom,left:f.left||f.top&&!f.right,bottom:f.bottom||f.right&&!f.top,right:f.right||f.bottom&&!f.left};if(a.xIsPrimaryAxis=!(!f.left&&!f.right),a.equalDelta){var ne=(Q.left?1:-1)*(Q.top?1:-1);a.edgeSign={x:ne,y:ne}}else a.edgeSign={x:Q.left?-1:1,y:Q.top?-1:1};if(P!==!1&&S(f,Q),I!=null&&I.length){var be=new Xi(s.interaction);be.copyFrom(s.interaction.modification),be.prepareStates(I),a.subModification=be,be.startAll(w({},s))}},set:function(s){var a=s.state,d=s.rect,f=s.coords,v=a.linkedEdges,k=S({},f),L=a.equalDelta?ve:xe;if(S(s.edges,v),L(a,a.xIsPrimaryAxis,f,d),!a.subModification)return null;var P=S({},d);V(v,P,{x:f.x-k.x,y:f.y-k.y});var D=a.subModification.setAll(w(w({},s),{},{rect:P,edges:v,pageCoords:f,prevCoords:f,prevRect:P})),Y=D.delta;return D.changed&&(L(a,Math.abs(Y.x)>Math.abs(Y.y),D.coords,D.rect),S(f,D.coords)),D.eventProps},defaults:{ratio:"preserve",equalDelta:!1,modifiers:[],enabled:!1}};function ve(s,a,d){var f=s.startCoords,v=s.edgeSign;a?d.y=f.y+(d.x-f.x)*v.y:d.x=f.x+(d.y-f.y)*v.x}function xe(s,a,d,f){var v=s.startRect,k=s.startCoords,L=s.ratio,P=s.edgeSign;if(a){var D=f.width/L;d.y=k.y+(D-v.height)*P.y}else{var Y=f.height*L;d.x=k.x+(Y-v.width)*P.x}}var Ne=fi(se,"aspectRatio"),We=function(){};We._defaults={};var Ge=We;function Xe(s,a,d){return C.func(s)?N(s,a.interactable,a.element,[d.x,d.y,a]):N(s,a.interactable,a.element)}var at={start:function(s){var a=s.rect,d=s.startOffset,f=s.state,v=s.interaction,k=s.pageCoords,L=f.options,P=L.elementRect,D=S({left:0,top:0,right:0,bottom:0},L.offset||{});if(a&&P){var Y=Xe(L.restriction,v,k);if(Y){var I=Y.right-Y.left-a.width,Q=Y.bottom-Y.top-a.height;I<0&&(D.left+=I,D.right+=I),Q<0&&(D.top+=Q,D.bottom+=Q)}D.left+=d.left-a.width*P.left,D.top+=d.top-a.height*P.top,D.right+=d.right-a.width*(1-P.right),D.bottom+=d.bottom-a.height*(1-P.bottom)}f.offset=D},set:function(s){var a=s.coords,d=s.interaction,f=s.state,v=f.options,k=f.offset,L=Xe(v.restriction,d,a);if(L){var P=(function(D){return!D||"left"in D&&"top"in D||((D=S({},D)).left=D.x||0,D.top=D.y||0,D.right=D.right||D.left+D.width,D.bottom=D.bottom||D.top+D.height),D})(L);a.x=Math.max(Math.min(P.right-k.right,a.x),P.left+k.left),a.y=Math.max(Math.min(P.bottom-k.bottom,a.y),P.top+k.top)}},defaults:{restriction:null,elementRect:null,offset:null,endOnly:!1,enabled:!1}},mt=fi(at,"restrict"),Ht={top:1/0,left:1/0,bottom:-1/0,right:-1/0},Nt={top:-1/0,left:-1/0,bottom:1/0,right:1/0};function Kt(s,a){for(var d=0,f=["top","left","bottom","right"];d<f.length;d++){var v=f[d];v in s||(s[v]=a[v])}return s}var zt={noInner:Ht,noOuter:Nt,start:function(s){var a,d=s.interaction,f=s.startOffset,v=s.state,k=v.options;k&&(a=W(Xe(k.offset,d,d.coords.start.page))),a=a||{x:0,y:0},v.offset={top:a.y+f.top,left:a.x+f.left,bottom:a.y-f.bottom,right:a.x-f.right}},set:function(s){var a=s.coords,d=s.edges,f=s.interaction,v=s.state,k=v.offset,L=v.options;if(d){var P=S({},a),D=Xe(L.inner,f,P)||{},Y=Xe(L.outer,f,P)||{};Kt(D,Ht),Kt(Y,Nt),d.top?a.y=Math.min(Math.max(Y.top+k.top,P.y),D.top+k.top):d.bottom&&(a.y=Math.max(Math.min(Y.bottom+k.bottom,P.y),D.bottom+k.bottom)),d.left?a.x=Math.min(Math.max(Y.left+k.left,P.x),D.left+k.left):d.right&&(a.x=Math.max(Math.min(Y.right+k.right,P.x),D.right+k.right))}},defaults:{inner:null,outer:null,offset:null,endOnly:!1,enabled:!1}},Jt=fi(zt,"restrictEdges"),jt=S({get elementRect(){return{top:0,left:0,bottom:1,right:1}},set elementRect(s){}},at.defaults),pi=fi({start:at.start,set:at.set,defaults:jt},"restrictRect"),Pt={width:-1/0,height:-1/0},Xt={width:1/0,height:1/0},ai=fi({start:function(s){return zt.start(s)},set:function(s){var a=s.interaction,d=s.state,f=s.rect,v=s.edges,k=d.options;if(v){var L=G(Xe(k.min,a,s.coords))||Pt,P=G(Xe(k.max,a,s.coords))||Xt;d.options={endOnly:k.endOnly,inner:S({},zt.noInner),outer:S({},zt.noOuter)},v.top?(d.options.inner.top=f.bottom-L.height,d.options.outer.top=f.bottom-P.height):v.bottom&&(d.options.inner.bottom=f.top+L.height,d.options.outer.bottom=f.top+P.height),v.left?(d.options.inner.left=f.right-L.width,d.options.outer.left=f.right-P.width):v.right&&(d.options.inner.right=f.left+L.width,d.options.outer.right=f.left+P.width),zt.set(s),d.options=k}},defaults:{min:null,max:null,endOnly:!1,enabled:!1}},"restrictSize"),oi={start:function(s){var a,d=s.interaction,f=s.interactable,v=s.element,k=s.rect,L=s.state,P=s.startOffset,D=L.options,Y=D.offsetWithOrigin?(function(ne){var be=ne.interaction.element,fe=W(N(ne.state.options.origin,null,null,[be])),we=fe||J(ne.interactable,be,ne.interaction.prepared.name);return we})(s):{x:0,y:0};if(D.offset==="startCoords")a={x:d.coords.start.page.x,y:d.coords.start.page.y};else{var I=N(D.offset,f,v,[d]);(a=W(I)||{x:0,y:0}).x+=Y.x,a.y+=Y.y}var Q=D.relativePoints;L.offsets=k&&Q&&Q.length?Q.map((function(ne,be){return{index:be,relativePoint:ne,x:P.left-k.width*ne.x+a.x,y:P.top-k.height*ne.y+a.y}})):[{index:0,relativePoint:null,x:a.x,y:a.y}]},set:function(s){var a=s.interaction,d=s.coords,f=s.state,v=f.options,k=f.offsets,L=J(a.interactable,a.element,a.prepared.name),P=S({},d),D=[];v.offsetWithOrigin||(P.x-=L.x,P.y-=L.y);for(var Y=0,I=k;Y<I.length;Y++)for(var Q=I[Y],ne=P.x-Q.x,be=P.y-Q.y,fe=0,we=v.targets.length;fe<we;fe++){var qe=v.targets[fe],Be=void 0;(Be=C.func(qe)?qe(ne,be,a._proxy,Q,fe):qe)&&D.push({x:(C.number(Be.x)?Be.x:ne)+Q.x,y:(C.number(Be.y)?Be.y:be)+Q.y,range:C.number(Be.range)?Be.range:v.range,source:qe,index:fe,offset:Q})}for(var Ye={target:null,inRange:!1,distance:0,range:0,delta:{x:0,y:0}},lt=0;lt<D.length;lt++){var ft=D[lt],it=ft.range,pt=ft.x-P.x,$t=ft.y-P.y,Et=_e(pt,$t),Yt=Et<=it;it===1/0&&Ye.inRange&&Ye.range!==1/0&&(Yt=!1),Ye.target&&!(Yt?Ye.inRange&&it!==1/0?Et/it<Ye.distance/Ye.range:it===1/0&&Ye.range!==1/0||Et<Ye.distance:!Ye.inRange&&Et<Ye.distance)||(Ye.target=ft,Ye.distance=Et,Ye.range=it,Ye.inRange=Yt,Ye.delta.x=pt,Ye.delta.y=$t)}return Ye.inRange&&(d.x=Ye.target.x,d.y=Ye.target.y),f.closest=Ye,Ye},defaults:{range:1/0,targets:null,offset:null,offsetWithOrigin:!0,origin:null,relativePoints:null,endOnly:!1,enabled:!1}},Ei=fi(oi,"snap"),bi={start:function(s){var a=s.state,d=s.edges,f=a.options;if(!d)return null;s.state={options:{targets:null,relativePoints:[{x:d.left?0:1,y:d.top?0:1}],offset:f.offset||"self",origin:{x:0,y:0},range:f.range}},a.targetFields=a.targetFields||[["width","height"],["x","y"]],oi.start(s),a.offsets=s.state.offsets,s.state=a},set:function(s){var a=s.interaction,d=s.state,f=s.coords,v=d.options,k=d.offsets,L={x:f.x-k[0].x,y:f.y-k[0].y};d.options=S({},v),d.options.targets=[];for(var P=0,D=v.targets||[];P<D.length;P++){var Y=D[P],I=void 0;if(I=C.func(Y)?Y(L.x,L.y,a):Y){for(var Q=0,ne=d.targetFields;Q<ne.length;Q++){var be=ne[Q],fe=be[0],we=be[1];if(fe in I||we in I){I.x=I[fe],I.y=I[we];break}}d.options.targets.push(I)}}var qe=oi.set(s);return d.options=v,qe},defaults:{range:1/0,targets:null,offset:null,endOnly:!1,enabled:!1}},xi=fi(bi,"snapSize"),Fi={aspectRatio:Ne,restrictEdges:Jt,restrict:mt,restrictRect:pi,restrictSize:ai,snapEdges:fi({start:function(s){var a=s.edges;return a?(s.state.targetFields=s.state.targetFields||[[a.left?"left":"right",a.top?"top":"bottom"]],bi.start(s)):null},set:bi.set,defaults:S(ti(bi.defaults),{targets:void 0,range:void 0,offset:{x:0,y:0}})},"snapEdges"),snap:Ei,snapSize:xi,spring:Ge,avoid:Ge,transform:Ge,rubberband:Ge},sn={id:"modifiers",install:function(s){var a=s.interactStatic;for(var d in s.usePlugin(Ir),s.usePlugin(ee),a.modifiers=Fi,Fi){var f=Fi[d],v=f._defaults,k=f._methods;v._methods=k,s.defaults.perAction[d]=v}}},cn=sn,wr=(function(s){c(d,s);var a=m(d);function d(f,v,k,L,P,D){var Y;if(t(this,d),Ee(u(Y=a.call(this,P)),k),k!==v&&Ee(u(Y),v),Y.timeStamp=D,Y.originalEvent=k,Y.type=f,Y.pointerId=He(v),Y.pointerType=Mt(v),Y.target=L,Y.currentTarget=null,f==="tap"){var I=P.getPointerIndex(v);Y.dt=Y.timeStamp-P.pointers[I].downTime;var Q=Y.timeStamp-P.tapTime;Y.double=!!P.prevTap&&P.prevTap.type!=="doubletap"&&P.prevTap.target===Y.target&&Q<500}else f==="doubletap"&&(Y.dt=v.timeStamp-P.tapTime,Y.double=!0);return Y}return n(d,[{key:"_subtractOrigin",value:function(f){var v=f.x,k=f.y;return this.pageX-=v,this.pageY-=k,this.clientX-=v,this.clientY-=k,this}},{key:"_addOrigin",value:function(f){var v=f.x,k=f.y;return this.pageX+=v,this.pageY+=k,this.clientX+=v,this.clientY+=k,this}},{key:"preventDefault",value:function(){this.originalEvent.preventDefault()}}]),d})(pe),Ai={id:"pointer-events/base",before:["inertia","modifiers","auto-start","actions"],install:function(s){s.pointerEvents=Ai,s.defaults.actions.pointerEvents=Ai.defaults,S(s.actions.phaselessTypes,Ai.types)},listeners:{"interactions:new":function(s){var a=s.interaction;a.prevTap=null,a.tapTime=0},"interactions:update-pointer":function(s){var a=s.down,d=s.pointerInfo;!a&&d.hold||(d.hold={duration:1/0,timeout:null})},"interactions:move":function(s,a){var d=s.interaction,f=s.pointer,v=s.event,k=s.eventTarget;s.duplicate||d.pointerIsDown&&!d.pointerWasMoved||(d.pointerIsDown&&Hi(s),ui({interaction:d,pointer:f,event:v,eventTarget:k,type:"move"},a))},"interactions:down":function(s,a){(function(d,f){for(var v=d.interaction,k=d.pointer,L=d.event,P=d.eventTarget,D=d.pointerIndex,Y=v.pointers[D].hold,I=p(P),Q={interaction:v,pointer:k,event:L,eventTarget:P,type:"hold",targets:[],path:I,node:null},ne=0;ne<I.length;ne++){var be=I[ne];Q.node=be,f.fire("pointerEvents:collect-targets",Q)}if(Q.targets.length){for(var fe=1/0,we=0,qe=Q.targets;we<qe.length;we++){var Be=qe[we].eventable.options.holdDuration;Be<fe&&(fe=Be)}Y.duration=fe,Y.timeout=setTimeout((function(){ui({interaction:v,eventTarget:P,pointer:k,event:L,type:"hold"},f)}),fe)}})(s,a),ui(s,a)},"interactions:up":function(s,a){Hi(s),ui(s,a),(function(d,f){var v=d.interaction,k=d.pointer,L=d.event,P=d.eventTarget;v.pointerWasMoved||ui({interaction:v,eventTarget:P,pointer:k,event:L,type:"tap"},f)})(s,a)},"interactions:cancel":function(s,a){Hi(s),ui(s,a)}},PointerEvent:wr,fire:ui,collectEventTargets:kr,defaults:{holdDuration:600,ignoreFrom:null,allowFrom:null,origin:{x:0,y:0}},types:{down:!0,move:!0,up:!0,cancel:!0,tap:!0,doubletap:!0,hold:!0}};function ui(s,a){var d=s.interaction,f=s.pointer,v=s.event,k=s.eventTarget,L=s.type,P=s.targets,D=P===void 0?kr(s,a):P,Y=new wr(L,f,v,k,d,a.now());a.fire("pointerEvents:new",{pointerEvent:Y});for(var I={interaction:d,pointer:f,event:v,eventTarget:k,targets:D,type:L,pointerEvent:Y},Q=0;Q<D.length;Q++){var ne=D[Q];for(var be in ne.props||{})Y[be]=ne.props[be];var fe=J(ne.eventable,ne.node);if(Y._subtractOrigin(fe),Y.eventable=ne.eventable,Y.currentTarget=ne.node,ne.eventable.fire(Y),Y._addOrigin(fe),Y.immediatePropagationStopped||Y.propagationStopped&&Q+1<D.length&&D[Q+1].node!==Y.currentTarget)break}if(a.fire("pointerEvents:fired",I),L==="tap"){var we=Y.double?ui({interaction:d,pointer:f,event:v,eventTarget:k,type:"doubletap"},a):Y;d.prevTap=we,d.tapTime=we.timeStamp}return Y}function kr(s,a){var d=s.interaction,f=s.pointer,v=s.event,k=s.eventTarget,L=s.type,P=d.getPointerIndex(f),D=d.pointers[P];if(L==="tap"&&(d.pointerWasMoved||!D||D.downTarget!==k))return[];for(var Y=p(k),I={interaction:d,pointer:f,event:v,eventTarget:k,type:L,path:Y,targets:[],node:null},Q=0;Q<Y.length;Q++){var ne=Y[Q];I.node=ne,a.fire("pointerEvents:collect-targets",I)}return L==="hold"&&(I.targets=I.targets.filter((function(be){var fe,we;return be.eventable.options.holdDuration===((fe=d.pointers[P])==null||(we=fe.hold)==null?void 0:we.duration)}))),I.targets}function Hi(s){var a=s.interaction,d=s.pointerIndex,f=a.pointers[d].hold;f&&f.timeout&&(clearTimeout(f.timeout),f.timeout=null)}var dn=Object.freeze({__proto__:null,default:Ai});function Sr(s){var a=s.interaction;a.holdIntervalHandle&&(clearInterval(a.holdIntervalHandle),a.holdIntervalHandle=null)}var Cr={id:"pointer-events/holdRepeat",install:function(s){s.usePlugin(Ai);var a=s.pointerEvents;a.defaults.holdRepeatInterval=0,a.types.holdrepeat=s.actions.phaselessTypes.holdrepeat=!0},listeners:["move","up","cancel","endall"].reduce((function(s,a){return s["pointerEvents:".concat(a)]=Sr,s}),{"pointerEvents:new":function(s){var a=s.pointerEvent;a.type==="hold"&&(a.count=(a.count||0)+1)},"pointerEvents:fired":function(s,a){var d=s.interaction,f=s.pointerEvent,v=s.eventTarget,k=s.targets;if(f.type==="hold"&&k.length){var L=k[0].eventable.options.holdRepeatInterval;L<=0||(d.holdIntervalHandle=setTimeout((function(){a.pointerEvents.fire({interaction:d,eventTarget:v,type:"hold",pointer:f,event:f},a)}),L))}}})},Er=Cr,ln={id:"pointer-events/interactableTargets",install:function(s){var a=s.Interactable;a.prototype.pointerEvents=function(f){return S(this.events.options,f),this};var d=a.prototype._backCompatOption;a.prototype._backCompatOption=function(f,v){var k=d.call(this,f,v);return k===this&&(this.events.options[f]=v),k}},listeners:{"pointerEvents:collect-targets":function(s,a){var d=s.targets,f=s.node,v=s.type,k=s.eventTarget;a.interactables.forEachMatch(f,(function(L){var P=L.events,D=P.options;P.types[v]&&P.types[v].length&&L.testIgnoreAllow(D,f,k)&&d.push({node:f,eventable:P,props:{interactable:L}})}))},"interactable:new":function(s){var a=s.interactable;a.events.getRect=function(d){return a.getRect(d)}},"interactable:set":function(s,a){var d=s.interactable,f=s.options;S(d.events.options,a.pointerEvents.defaults),S(d.events.options,f.pointerEvents||{})}}},Jr=ln,Ar={id:"pointer-events",install:function(s){s.usePlugin(dn),s.usePlugin(Er),s.usePlugin(Jr)}},Xr=Ar,hn={id:"reflow",install:function(s){var a=s.Interactable;s.actions.phases.reflow=!0,a.prototype.reflow=function(d){return(function(f,v,k){for(var L=f.getAllElements(),P=k.window.Promise,D=P?[]:null,Y=function(){var Q=L[I],ne=f.getRect(Q);if(!ne)return 1;var be,fe=Ze(k.interactions.list,(function(Be){return Be.interacting()&&Be.interactable===f&&Be.element===Q&&Be.prepared.name===v.name}));if(fe)fe.move(),D&&(be=fe._reflowPromise||new P((function(Be){fe._reflowResolve=Be})));else{var we=G(ne),qe=(function(Be){return{coords:Be,get page(){return this.coords.page},get client(){return this.coords.client},get timeStamp(){return this.coords.timeStamp},get pageX(){return this.coords.page.x},get pageY(){return this.coords.page.y},get clientX(){return this.coords.client.x},get clientY(){return this.coords.client.y},get pointerId(){return this.coords.pointerId},get target(){return this.coords.target},get type(){return this.coords.type},get pointerType(){return this.coords.pointerType},get buttons(){return this.coords.buttons},preventDefault:function(){}}})({page:{x:we.x,y:we.y},client:{x:we.x,y:we.y},timeStamp:k.now()});be=(function(Be,Ye,lt,ft,it){var pt=Be.interactions.new({pointerType:"reflow"}),$t={interaction:pt,event:it,pointer:it,eventTarget:lt,phase:"reflow"};pt.interactable=Ye,pt.element=lt,pt.prevEvent=it,pt.updatePointer(it,it,lt,!0),je(pt.coords.delta),Zt(pt.prepared,ft),pt._doPhase($t);var Et=Be.window,Yt=Et.Promise,ii=Yt?new Yt((function(si){pt._reflowResolve=si})):void 0;return pt._reflowPromise=ii,pt.start(ft,Ye,lt),pt._interacting?(pt.move($t),pt.end(it)):(pt.stop(),pt._reflowResolve()),pt.removePointer(it,it),ii})(k,f,Q,v,qe)}D&&D.push(be)},I=0;I<L.length&&!Y();I++);return D&&P.all(D).then((function(){return f}))})(this,d,s)}},listeners:{"interactions:stop":function(s,a){var d=s.interaction;d.pointerType==="reflow"&&(d._reflowResolve&&d._reflowResolve(),(function(f,v){f.splice(f.indexOf(v),1)})(a.interactions.list,d))}}},pn=hn;if(Ft.use(_i),Ft.use(Ii),Ft.use(Xr),Ft.use(Hr),Ft.use(cn),Ft.use(hr),Ft.use(Oe),Ft.use(Rt),Ft.use(pn),Ft.default=Ft,(typeof qi=="undefined"?"undefined":e(qi))==="object"&&qi)try{qi.exports=Ft}catch{}return Ft.default=Ft,Ft}))});var Va=eo(Hn(),1);function ia(r){return typeof r=="undefined"||r===null}function to(r){return typeof r=="object"&&r!==null}function io(r){return Array.isArray(r)?r:ia(r)?[]:[r]}function ro(r,w){var e,t,i,n;if(w)for(n=Object.keys(w),e=0,t=n.length;e<t;e+=1)i=n[e],r[i]=w[i];return r}function no(r,w){var e="",t;for(t=0;t<w;t+=1)e+=r;return e}function ao(r){return r===0&&Number.NEGATIVE_INFINITY===1/r}var oo=ia,so=to,co=io,lo=no,ho=ao,po=ro,Bt={isNothing:oo,isObject:so,toArray:co,repeat:lo,isNegativeZero:ho,extend:po};function ra(r,w){var e="",t=r.reason||"(unknown reason)";return r.mark?(r.mark.name&&(e+='in "'+r.mark.name+'" '),e+="("+(r.mark.line+1)+":"+(r.mark.column+1)+")",!w&&r.mark.snippet&&(e+=`

`+r.mark.snippet),t+" "+e):t}function Tr(r,w){Error.call(this),this.name="YAMLException",this.reason=r,this.mark=w,this.message=ra(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Tr.prototype=Object.create(Error.prototype);Tr.prototype.constructor=Tr;Tr.prototype.toString=function(w){return this.name+": "+ra(this,w)};var Qt=Tr;function vn(r,w,e,t,i){var n="",o="",c=Math.floor(i/2)-1;return t-w>c&&(n=" ... ",w=t-c+n.length),e-t>c&&(o=" ...",e=t+c-o.length),{str:n+r.slice(w,e).replace(/\t/g,"\u2192")+o,pos:t-w+n.length}}function _n(r,w){return Bt.repeat(" ",w-r.length)+r}function uo(r,w){if(w=Object.create(w||null),!r.buffer)return null;w.maxLength||(w.maxLength=79),typeof w.indent!="number"&&(w.indent=1),typeof w.linesBefore!="number"&&(w.linesBefore=3),typeof w.linesAfter!="number"&&(w.linesAfter=2);for(var e=/\r?\n|\r|\0/g,t=[0],i=[],n,o=-1;n=e.exec(r.buffer);)i.push(n.index),t.push(n.index+n[0].length),r.position<=n.index&&o<0&&(o=t.length-2);o<0&&(o=t.length-1);var c="",l,g,u=Math.min(r.line+w.linesAfter,i.length).toString().length,m=w.maxLength-(w.indent+u+3);for(l=1;l<=w.linesBefore&&!(o-l<0);l++)g=vn(r.buffer,t[o-l],i[o-l],r.position-(t[o]-t[o-l]),m),c=Bt.repeat(" ",w.indent)+_n((r.line-l+1).toString(),u)+" | "+g.str+`
`+c;for(g=vn(r.buffer,t[o],i[o],r.position,m),c+=Bt.repeat(" ",w.indent)+_n((r.line+1).toString(),u)+" | "+g.str+`
`,c+=Bt.repeat("-",w.indent+u+3+g.pos)+`^
`,l=1;l<=w.linesAfter&&!(o+l>=i.length);l++)g=vn(r.buffer,t[o+l],i[o+l],r.position-(t[o]-t[o+l]),m),c+=Bt.repeat(" ",w.indent)+_n((r.line+l+1).toString(),u)+" | "+g.str+`
`;return c.replace(/\n$/,"")}var go=uo,mo=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],fo=["scalar","sequence","mapping"];function bo(r){var w={};return r!==null&&Object.keys(r).forEach(function(e){r[e].forEach(function(t){w[String(t)]=e})}),w}function yo(r,w){if(w=w||{},Object.keys(w).forEach(function(e){if(mo.indexOf(e)===-1)throw new Qt('Unknown option "'+e+'" is met in definition of "'+r+'" YAML type.')}),this.options=w,this.tag=r,this.kind=w.kind||null,this.resolve=w.resolve||function(){return!0},this.construct=w.construct||function(e){return e},this.instanceOf=w.instanceOf||null,this.predicate=w.predicate||null,this.represent=w.represent||null,this.representName=w.representName||null,this.defaultStyle=w.defaultStyle||null,this.multi=w.multi||!1,this.styleAliases=bo(w.styleAliases||null),fo.indexOf(this.kind)===-1)throw new Qt('Unknown kind "'+this.kind+'" is specified for "'+r+'" YAML type.')}var Vt=yo;function $n(r,w){var e=[];return r[w].forEach(function(t){var i=e.length;e.forEach(function(n,o){n.tag===t.tag&&n.kind===t.kind&&n.multi===t.multi&&(i=o)}),e[i]=t}),e}function vo(){var r={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},w,e;function t(i){i.multi?(r.multi[i.kind].push(i),r.multi.fallback.push(i)):r[i.kind][i.tag]=r.fallback[i.tag]=i}for(w=0,e=arguments.length;w<e;w+=1)arguments[w].forEach(t);return r}function wn(r){return this.extend(r)}wn.prototype.extend=function(w){var e=[],t=[];if(w instanceof Vt)t.push(w);else if(Array.isArray(w))t=t.concat(w);else if(w&&(Array.isArray(w.implicit)||Array.isArray(w.explicit)))w.implicit&&(e=e.concat(w.implicit)),w.explicit&&(t=t.concat(w.explicit));else throw new Qt("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");e.forEach(function(n){if(!(n instanceof Vt))throw new Qt("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(n.loadKind&&n.loadKind!=="scalar")throw new Qt("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(n.multi)throw new Qt("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),t.forEach(function(n){if(!(n instanceof Vt))throw new Qt("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var i=Object.create(wn.prototype);return i.implicit=(this.implicit||[]).concat(e),i.explicit=(this.explicit||[]).concat(t),i.compiledImplicit=$n(i,"implicit"),i.compiledExplicit=$n(i,"explicit"),i.compiledTypeMap=vo(i.compiledImplicit,i.compiledExplicit),i};var na=wn,aa=new Vt("tag:yaml.org,2002:str",{kind:"scalar",construct:function(r){return r!==null?r:""}}),oa=new Vt("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(r){return r!==null?r:[]}}),sa=new Vt("tag:yaml.org,2002:map",{kind:"mapping",construct:function(r){return r!==null?r:{}}}),ca=new na({explicit:[aa,oa,sa]});function _o(r){if(r===null)return!0;var w=r.length;return w===1&&r==="~"||w===4&&(r==="null"||r==="Null"||r==="NULL")}function xo(){return null}function wo(r){return r===null}var da=new Vt("tag:yaml.org,2002:null",{kind:"scalar",resolve:_o,construct:xo,predicate:wo,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function ko(r){if(r===null)return!1;var w=r.length;return w===4&&(r==="true"||r==="True"||r==="TRUE")||w===5&&(r==="false"||r==="False"||r==="FALSE")}function So(r){return r==="true"||r==="True"||r==="TRUE"}function Co(r){return Object.prototype.toString.call(r)==="[object Boolean]"}var la=new Vt("tag:yaml.org,2002:bool",{kind:"scalar",resolve:ko,construct:So,predicate:Co,represent:{lowercase:function(r){return r?"true":"false"},uppercase:function(r){return r?"TRUE":"FALSE"},camelcase:function(r){return r?"True":"False"}},defaultStyle:"lowercase"});function Eo(r){return 48<=r&&r<=57||65<=r&&r<=70||97<=r&&r<=102}function Ao(r){return 48<=r&&r<=55}function Lo(r){return 48<=r&&r<=57}function To(r){if(r===null)return!1;var w=r.length,e=0,t=!1,i;if(!w)return!1;if(i=r[e],(i==="-"||i==="+")&&(i=r[++e]),i==="0"){if(e+1===w)return!0;if(i=r[++e],i==="b"){for(e++;e<w;e++)if(i=r[e],i!=="_"){if(i!=="0"&&i!=="1")return!1;t=!0}return t&&i!=="_"}if(i==="x"){for(e++;e<w;e++)if(i=r[e],i!=="_"){if(!Eo(r.charCodeAt(e)))return!1;t=!0}return t&&i!=="_"}if(i==="o"){for(e++;e<w;e++)if(i=r[e],i!=="_"){if(!Ao(r.charCodeAt(e)))return!1;t=!0}return t&&i!=="_"}}if(i==="_")return!1;for(;e<w;e++)if(i=r[e],i!=="_"){if(!Lo(r.charCodeAt(e)))return!1;t=!0}return!(!t||i==="_")}function Po(r){var w=r,e=1,t;if(w.indexOf("_")!==-1&&(w=w.replace(/_/g,"")),t=w[0],(t==="-"||t==="+")&&(t==="-"&&(e=-1),w=w.slice(1),t=w[0]),w==="0")return 0;if(t==="0"){if(w[1]==="b")return e*parseInt(w.slice(2),2);if(w[1]==="x")return e*parseInt(w.slice(2),16);if(w[1]==="o")return e*parseInt(w.slice(2),8)}return e*parseInt(w,10)}function Mo(r){return Object.prototype.toString.call(r)==="[object Number]"&&r%1===0&&!Bt.isNegativeZero(r)}var ha=new Vt("tag:yaml.org,2002:int",{kind:"scalar",resolve:To,construct:Po,predicate:Mo,represent:{binary:function(r){return r>=0?"0b"+r.toString(2):"-0b"+r.toString(2).slice(1)},octal:function(r){return r>=0?"0o"+r.toString(8):"-0o"+r.toString(8).slice(1)},decimal:function(r){return r.toString(10)},hexadecimal:function(r){return r>=0?"0x"+r.toString(16).toUpperCase():"-0x"+r.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Ro=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function zo(r){return!(r===null||!Ro.test(r)||r[r.length-1]==="_")}function Oo(r){var w,e;return w=r.replace(/_/g,"").toLowerCase(),e=w[0]==="-"?-1:1,"+-".indexOf(w[0])>=0&&(w=w.slice(1)),w===".inf"?e===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:w===".nan"?NaN:e*parseFloat(w,10)}var Do=/^[-+]?[0-9]+e/;function Io(r,w){var e;if(isNaN(r))switch(w){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===r)switch(w){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===r)switch(w){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Bt.isNegativeZero(r))return"-0.0";return e=r.toString(10),Do.test(e)?e.replace("e",".e"):e}function No(r){return Object.prototype.toString.call(r)==="[object Number]"&&(r%1!==0||Bt.isNegativeZero(r))}var pa=new Vt("tag:yaml.org,2002:float",{kind:"scalar",resolve:zo,construct:Oo,predicate:No,represent:Io,defaultStyle:"lowercase"}),ua=ca.extend({implicit:[da,la,ha,pa]}),ga=ua,ma=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),fa=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function Bo(r){return r===null?!1:ma.exec(r)!==null||fa.exec(r)!==null}function Fo(r){var w,e,t,i,n,o,c,l=0,g=null,u,m,h;if(w=ma.exec(r),w===null&&(w=fa.exec(r)),w===null)throw new Error("Date resolve error");if(e=+w[1],t=+w[2]-1,i=+w[3],!w[4])return new Date(Date.UTC(e,t,i));if(n=+w[4],o=+w[5],c=+w[6],w[7]){for(l=w[7].slice(0,3);l.length<3;)l+="0";l=+l}return w[9]&&(u=+w[10],m=+(w[11]||0),g=(u*60+m)*6e4,w[9]==="-"&&(g=-g)),h=new Date(Date.UTC(e,t,i,n,o,c,l)),g&&h.setTime(h.getTime()-g),h}function Ho(r){return r.toISOString()}var ba=new Vt("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:Bo,construct:Fo,instanceOf:Date,represent:Ho});function $o(r){return r==="<<"||r===null}var ya=new Vt("tag:yaml.org,2002:merge",{kind:"scalar",resolve:$o}),An=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function qo(r){if(r===null)return!1;var w,e,t=0,i=r.length,n=An;for(e=0;e<i;e++)if(w=n.indexOf(r.charAt(e)),!(w>64)){if(w<0)return!1;t+=6}return t%8===0}function jo(r){var w,e,t=r.replace(/[\r\n=]/g,""),i=t.length,n=An,o=0,c=[];for(w=0;w<i;w++)w%4===0&&w&&(c.push(o>>16&255),c.push(o>>8&255),c.push(o&255)),o=o<<6|n.indexOf(t.charAt(w));return e=i%4*6,e===0?(c.push(o>>16&255),c.push(o>>8&255),c.push(o&255)):e===18?(c.push(o>>10&255),c.push(o>>2&255)):e===12&&c.push(o>>4&255),new Uint8Array(c)}function Vo(r){var w="",e=0,t,i,n=r.length,o=An;for(t=0;t<n;t++)t%3===0&&t&&(w+=o[e>>18&63],w+=o[e>>12&63],w+=o[e>>6&63],w+=o[e&63]),e=(e<<8)+r[t];return i=n%3,i===0?(w+=o[e>>18&63],w+=o[e>>12&63],w+=o[e>>6&63],w+=o[e&63]):i===2?(w+=o[e>>10&63],w+=o[e>>4&63],w+=o[e<<2&63],w+=o[64]):i===1&&(w+=o[e>>2&63],w+=o[e<<4&63],w+=o[64],w+=o[64]),w}function Wo(r){return Object.prototype.toString.call(r)==="[object Uint8Array]"}var va=new Vt("tag:yaml.org,2002:binary",{kind:"scalar",resolve:qo,construct:jo,predicate:Wo,represent:Vo}),Ko=Object.prototype.hasOwnProperty,Yo=Object.prototype.toString;function Uo(r){if(r===null)return!0;var w=[],e,t,i,n,o,c=r;for(e=0,t=c.length;e<t;e+=1){if(i=c[e],o=!1,Yo.call(i)!=="[object Object]")return!1;for(n in i)if(Ko.call(i,n))if(!o)o=!0;else return!1;if(!o)return!1;if(w.indexOf(n)===-1)w.push(n);else return!1}return!0}function Go(r){return r!==null?r:[]}var _a=new Vt("tag:yaml.org,2002:omap",{kind:"sequence",resolve:Uo,construct:Go}),Jo=Object.prototype.toString;function Xo(r){if(r===null)return!0;var w,e,t,i,n,o=r;for(n=new Array(o.length),w=0,e=o.length;w<e;w+=1){if(t=o[w],Jo.call(t)!=="[object Object]"||(i=Object.keys(t),i.length!==1))return!1;n[w]=[i[0],t[i[0]]]}return!0}function Qo(r){if(r===null)return[];var w,e,t,i,n,o=r;for(n=new Array(o.length),w=0,e=o.length;w<e;w+=1)t=o[w],i=Object.keys(t),n[w]=[i[0],t[i[0]]];return n}var xa=new Vt("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:Xo,construct:Qo}),Zo=Object.prototype.hasOwnProperty;function es(r){if(r===null)return!0;var w,e=r;for(w in e)if(Zo.call(e,w)&&e[w]!==null)return!1;return!0}function ts(r){return r!==null?r:{}}var wa=new Vt("tag:yaml.org,2002:set",{kind:"mapping",resolve:es,construct:ts}),Ln=ga.extend({implicit:[ba,ya],explicit:[va,_a,xa,wa]}),Pi=Object.prototype.hasOwnProperty,Qr=1,ka=2,Sa=3,Zr=4,xn=1,is=2,qn=3,rs=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,ns=/[\x85\u2028\u2029]/,as=/[,\[\]\{\}]/,Ca=/^(?:!|!!|![a-z\-]+!)$/i,Ea=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function jn(r){return Object.prototype.toString.call(r)}function yi(r){return r===10||r===13}function Vi(r){return r===9||r===32}function ri(r){return r===9||r===32||r===10||r===13}function or(r){return r===44||r===91||r===93||r===123||r===125}function os(r){var w;return 48<=r&&r<=57?r-48:(w=r|32,97<=w&&w<=102?w-97+10:-1)}function ss(r){return r===120?2:r===117?4:r===85?8:0}function cs(r){return 48<=r&&r<=57?r-48:-1}function Vn(r){return r===48?"\0":r===97?"\x07":r===98?"\b":r===116||r===9?"	":r===110?`
`:r===118?"\v":r===102?"\f":r===114?"\r":r===101?"\x1B":r===32?" ":r===34?'"':r===47?"/":r===92?"\\":r===78?"\x85":r===95?"\xA0":r===76?"\u2028":r===80?"\u2029":""}function ds(r){return r<=65535?String.fromCharCode(r):String.fromCharCode((r-65536>>10)+55296,(r-65536&1023)+56320)}var Aa=new Array(256),La=new Array(256);for(ji=0;ji<256;ji++)Aa[ji]=Vn(ji)?1:0,La[ji]=Vn(ji);var ji;function ls(r,w){this.input=r,this.filename=w.filename||null,this.schema=w.schema||Ln,this.onWarning=w.onWarning||null,this.legacy=w.legacy||!1,this.json=w.json||!1,this.listener=w.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=r.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function Ta(r,w){var e={name:r.filename,buffer:r.input.slice(0,-1),position:r.position,line:r.line,column:r.position-r.lineStart};return e.snippet=go(e),new Qt(w,e)}function Je(r,w){throw Ta(r,w)}function en(r,w){r.onWarning&&r.onWarning.call(null,Ta(r,w))}var Wn={YAML:function(w,e,t){var i,n,o;w.version!==null&&Je(w,"duplication of %YAML directive"),t.length!==1&&Je(w,"YAML directive accepts exactly one argument"),i=/^([0-9]+)\.([0-9]+)$/.exec(t[0]),i===null&&Je(w,"ill-formed argument of the YAML directive"),n=parseInt(i[1],10),o=parseInt(i[2],10),n!==1&&Je(w,"unacceptable YAML version of the document"),w.version=t[0],w.checkLineBreaks=o<2,o!==1&&o!==2&&en(w,"unsupported YAML version of the document")},TAG:function(w,e,t){var i,n;t.length!==2&&Je(w,"TAG directive accepts exactly two arguments"),i=t[0],n=t[1],Ca.test(i)||Je(w,"ill-formed tag handle (first argument) of the TAG directive"),Pi.call(w.tagMap,i)&&Je(w,'there is a previously declared suffix for "'+i+'" tag handle'),Ea.test(n)||Je(w,"ill-formed tag prefix (second argument) of the TAG directive");try{n=decodeURIComponent(n)}catch{Je(w,"tag prefix is malformed: "+n)}w.tagMap[i]=n}};function Ti(r,w,e,t){var i,n,o,c;if(w<e){if(c=r.input.slice(w,e),t)for(i=0,n=c.length;i<n;i+=1)o=c.charCodeAt(i),o===9||32<=o&&o<=1114111||Je(r,"expected valid JSON character");else rs.test(c)&&Je(r,"the stream contains non-printable characters");r.result+=c}}function Kn(r,w,e,t){var i,n,o,c;for(Bt.isObject(e)||Je(r,"cannot merge mappings; the provided source object is unacceptable"),i=Object.keys(e),o=0,c=i.length;o<c;o+=1)n=i[o],Pi.call(w,n)||(w[n]=e[n],t[n]=!0)}function sr(r,w,e,t,i,n,o,c,l){var g,u;if(Array.isArray(i))for(i=Array.prototype.slice.call(i),g=0,u=i.length;g<u;g+=1)Array.isArray(i[g])&&Je(r,"nested arrays are not supported inside keys"),typeof i=="object"&&jn(i[g])==="[object Object]"&&(i[g]="[object Object]");if(typeof i=="object"&&jn(i)==="[object Object]"&&(i="[object Object]"),i=String(i),w===null&&(w={}),t==="tag:yaml.org,2002:merge")if(Array.isArray(n))for(g=0,u=n.length;g<u;g+=1)Kn(r,w,n[g],e);else Kn(r,w,n,e);else!r.json&&!Pi.call(e,i)&&Pi.call(w,i)&&(r.line=o||r.line,r.lineStart=c||r.lineStart,r.position=l||r.position,Je(r,"duplicated mapping key")),i==="__proto__"?Object.defineProperty(w,i,{configurable:!0,enumerable:!0,writable:!0,value:n}):w[i]=n,delete e[i];return w}function Tn(r){var w;w=r.input.charCodeAt(r.position),w===10?r.position++:w===13?(r.position++,r.input.charCodeAt(r.position)===10&&r.position++):Je(r,"a line break is expected"),r.line+=1,r.lineStart=r.position,r.firstTabInLine=-1}function It(r,w,e){for(var t=0,i=r.input.charCodeAt(r.position);i!==0;){for(;Vi(i);)i===9&&r.firstTabInLine===-1&&(r.firstTabInLine=r.position),i=r.input.charCodeAt(++r.position);if(w&&i===35)do i=r.input.charCodeAt(++r.position);while(i!==10&&i!==13&&i!==0);if(yi(i))for(Tn(r),i=r.input.charCodeAt(r.position),t++,r.lineIndent=0;i===32;)r.lineIndent++,i=r.input.charCodeAt(++r.position);else break}return e!==-1&&t!==0&&r.lineIndent<e&&en(r,"deficient indentation"),t}function nn(r){var w=r.position,e;return e=r.input.charCodeAt(w),!!((e===45||e===46)&&e===r.input.charCodeAt(w+1)&&e===r.input.charCodeAt(w+2)&&(w+=3,e=r.input.charCodeAt(w),e===0||ri(e)))}function Pn(r,w){w===1?r.result+=" ":w>1&&(r.result+=Bt.repeat(`
`,w-1))}function hs(r,w,e){var t,i,n,o,c,l,g,u,m=r.kind,h=r.result,b;if(b=r.input.charCodeAt(r.position),ri(b)||or(b)||b===35||b===38||b===42||b===33||b===124||b===62||b===39||b===34||b===37||b===64||b===96||(b===63||b===45)&&(i=r.input.charCodeAt(r.position+1),ri(i)||e&&or(i)))return!1;for(r.kind="scalar",r.result="",n=o=r.position,c=!1;b!==0;){if(b===58){if(i=r.input.charCodeAt(r.position+1),ri(i)||e&&or(i))break}else if(b===35){if(t=r.input.charCodeAt(r.position-1),ri(t))break}else{if(r.position===r.lineStart&&nn(r)||e&&or(b))break;if(yi(b))if(l=r.line,g=r.lineStart,u=r.lineIndent,It(r,!1,-1),r.lineIndent>=w){c=!0,b=r.input.charCodeAt(r.position);continue}else{r.position=o,r.line=l,r.lineStart=g,r.lineIndent=u;break}}c&&(Ti(r,n,o,!1),Pn(r,r.line-l),n=o=r.position,c=!1),Vi(b)||(o=r.position+1),b=r.input.charCodeAt(++r.position)}return Ti(r,n,o,!1),r.result?!0:(r.kind=m,r.result=h,!1)}function ps(r,w){var e,t,i;if(e=r.input.charCodeAt(r.position),e!==39)return!1;for(r.kind="scalar",r.result="",r.position++,t=i=r.position;(e=r.input.charCodeAt(r.position))!==0;)if(e===39)if(Ti(r,t,r.position,!0),e=r.input.charCodeAt(++r.position),e===39)t=r.position,r.position++,i=r.position;else return!0;else yi(e)?(Ti(r,t,i,!0),Pn(r,It(r,!1,w)),t=i=r.position):r.position===r.lineStart&&nn(r)?Je(r,"unexpected end of the document within a single quoted scalar"):(r.position++,i=r.position);Je(r,"unexpected end of the stream within a single quoted scalar")}function us(r,w){var e,t,i,n,o,c;if(c=r.input.charCodeAt(r.position),c!==34)return!1;for(r.kind="scalar",r.result="",r.position++,e=t=r.position;(c=r.input.charCodeAt(r.position))!==0;){if(c===34)return Ti(r,e,r.position,!0),r.position++,!0;if(c===92){if(Ti(r,e,r.position,!0),c=r.input.charCodeAt(++r.position),yi(c))It(r,!1,w);else if(c<256&&Aa[c])r.result+=La[c],r.position++;else if((o=ss(c))>0){for(i=o,n=0;i>0;i--)c=r.input.charCodeAt(++r.position),(o=os(c))>=0?n=(n<<4)+o:Je(r,"expected hexadecimal character");r.result+=ds(n),r.position++}else Je(r,"unknown escape sequence");e=t=r.position}else yi(c)?(Ti(r,e,t,!0),Pn(r,It(r,!1,w)),e=t=r.position):r.position===r.lineStart&&nn(r)?Je(r,"unexpected end of the document within a double quoted scalar"):(r.position++,t=r.position)}Je(r,"unexpected end of the stream within a double quoted scalar")}function gs(r,w){var e=!0,t,i,n,o=r.tag,c,l=r.anchor,g,u,m,h,b,y=Object.create(null),_,A,T,E;if(E=r.input.charCodeAt(r.position),E===91)u=93,b=!1,c=[];else if(E===123)u=125,b=!0,c={};else return!1;for(r.anchor!==null&&(r.anchorMap[r.anchor]=c),E=r.input.charCodeAt(++r.position);E!==0;){if(It(r,!0,w),E=r.input.charCodeAt(r.position),E===u)return r.position++,r.tag=o,r.anchor=l,r.kind=b?"mapping":"sequence",r.result=c,!0;e?E===44&&Je(r,"expected the node content, but found ','"):Je(r,"missed comma between flow collection entries"),A=_=T=null,m=h=!1,E===63&&(g=r.input.charCodeAt(r.position+1),ri(g)&&(m=h=!0,r.position++,It(r,!0,w))),t=r.line,i=r.lineStart,n=r.position,cr(r,w,Qr,!1,!0),A=r.tag,_=r.result,It(r,!0,w),E=r.input.charCodeAt(r.position),(h||r.line===t)&&E===58&&(m=!0,E=r.input.charCodeAt(++r.position),It(r,!0,w),cr(r,w,Qr,!1,!0),T=r.result),b?sr(r,c,y,A,_,T,t,i,n):m?c.push(sr(r,null,y,A,_,T,t,i,n)):c.push(_),It(r,!0,w),E=r.input.charCodeAt(r.position),E===44?(e=!0,E=r.input.charCodeAt(++r.position)):e=!1}Je(r,"unexpected end of the stream within a flow collection")}function ms(r,w){var e,t,i=xn,n=!1,o=!1,c=w,l=0,g=!1,u,m;if(m=r.input.charCodeAt(r.position),m===124)t=!1;else if(m===62)t=!0;else return!1;for(r.kind="scalar",r.result="";m!==0;)if(m=r.input.charCodeAt(++r.position),m===43||m===45)xn===i?i=m===43?qn:is:Je(r,"repeat of a chomping mode identifier");else if((u=cs(m))>=0)u===0?Je(r,"bad explicit indentation width of a block scalar; it cannot be less than one"):o?Je(r,"repeat of an indentation width identifier"):(c=w+u-1,o=!0);else break;if(Vi(m)){do m=r.input.charCodeAt(++r.position);while(Vi(m));if(m===35)do m=r.input.charCodeAt(++r.position);while(!yi(m)&&m!==0)}for(;m!==0;){for(Tn(r),r.lineIndent=0,m=r.input.charCodeAt(r.position);(!o||r.lineIndent<c)&&m===32;)r.lineIndent++,m=r.input.charCodeAt(++r.position);if(!o&&r.lineIndent>c&&(c=r.lineIndent),yi(m)){l++;continue}if(r.lineIndent<c){i===qn?r.result+=Bt.repeat(`
`,n?1+l:l):i===xn&&n&&(r.result+=`
`);break}for(t?Vi(m)?(g=!0,r.result+=Bt.repeat(`
`,n?1+l:l)):g?(g=!1,r.result+=Bt.repeat(`
`,l+1)):l===0?n&&(r.result+=" "):r.result+=Bt.repeat(`
`,l):r.result+=Bt.repeat(`
`,n?1+l:l),n=!0,o=!0,l=0,e=r.position;!yi(m)&&m!==0;)m=r.input.charCodeAt(++r.position);Ti(r,e,r.position,!1)}return!0}function Yn(r,w){var e,t=r.tag,i=r.anchor,n=[],o,c=!1,l;if(r.firstTabInLine!==-1)return!1;for(r.anchor!==null&&(r.anchorMap[r.anchor]=n),l=r.input.charCodeAt(r.position);l!==0&&(r.firstTabInLine!==-1&&(r.position=r.firstTabInLine,Je(r,"tab characters must not be used in indentation")),!(l!==45||(o=r.input.charCodeAt(r.position+1),!ri(o))));){if(c=!0,r.position++,It(r,!0,-1)&&r.lineIndent<=w){n.push(null),l=r.input.charCodeAt(r.position);continue}if(e=r.line,cr(r,w,Sa,!1,!0),n.push(r.result),It(r,!0,-1),l=r.input.charCodeAt(r.position),(r.line===e||r.lineIndent>w)&&l!==0)Je(r,"bad indentation of a sequence entry");else if(r.lineIndent<w)break}return c?(r.tag=t,r.anchor=i,r.kind="sequence",r.result=n,!0):!1}function fs(r,w,e){var t,i,n,o,c,l,g=r.tag,u=r.anchor,m={},h=Object.create(null),b=null,y=null,_=null,A=!1,T=!1,E;if(r.firstTabInLine!==-1)return!1;for(r.anchor!==null&&(r.anchorMap[r.anchor]=m),E=r.input.charCodeAt(r.position);E!==0;){if(!A&&r.firstTabInLine!==-1&&(r.position=r.firstTabInLine,Je(r,"tab characters must not be used in indentation")),t=r.input.charCodeAt(r.position+1),n=r.line,(E===63||E===58)&&ri(t))E===63?(A&&(sr(r,m,h,b,y,null,o,c,l),b=y=_=null),T=!0,A=!0,i=!0):A?(A=!1,i=!0):Je(r,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),r.position+=1,E=t;else{if(o=r.line,c=r.lineStart,l=r.position,!cr(r,e,ka,!1,!0))break;if(r.line===n){for(E=r.input.charCodeAt(r.position);Vi(E);)E=r.input.charCodeAt(++r.position);if(E===58)E=r.input.charCodeAt(++r.position),ri(E)||Je(r,"a whitespace character is expected after the key-value separator within a block mapping"),A&&(sr(r,m,h,b,y,null,o,c,l),b=y=_=null),T=!0,A=!1,i=!1,b=r.tag,y=r.result;else if(T)Je(r,"can not read an implicit mapping pair; a colon is missed");else return r.tag=g,r.anchor=u,!0}else if(T)Je(r,"can not read a block mapping entry; a multiline key may not be an implicit key");else return r.tag=g,r.anchor=u,!0}if((r.line===n||r.lineIndent>w)&&(A&&(o=r.line,c=r.lineStart,l=r.position),cr(r,w,Zr,!0,i)&&(A?y=r.result:_=r.result),A||(sr(r,m,h,b,y,_,o,c,l),b=y=_=null),It(r,!0,-1),E=r.input.charCodeAt(r.position)),(r.line===n||r.lineIndent>w)&&E!==0)Je(r,"bad indentation of a mapping entry");else if(r.lineIndent<w)break}return A&&sr(r,m,h,b,y,null,o,c,l),T&&(r.tag=g,r.anchor=u,r.kind="mapping",r.result=m),T}function bs(r){var w,e=!1,t=!1,i,n,o;if(o=r.input.charCodeAt(r.position),o!==33)return!1;if(r.tag!==null&&Je(r,"duplication of a tag property"),o=r.input.charCodeAt(++r.position),o===60?(e=!0,o=r.input.charCodeAt(++r.position)):o===33?(t=!0,i="!!",o=r.input.charCodeAt(++r.position)):i="!",w=r.position,e){do o=r.input.charCodeAt(++r.position);while(o!==0&&o!==62);r.position<r.length?(n=r.input.slice(w,r.position),o=r.input.charCodeAt(++r.position)):Je(r,"unexpected end of the stream within a verbatim tag")}else{for(;o!==0&&!ri(o);)o===33&&(t?Je(r,"tag suffix cannot contain exclamation marks"):(i=r.input.slice(w-1,r.position+1),Ca.test(i)||Je(r,"named tag handle cannot contain such characters"),t=!0,w=r.position+1)),o=r.input.charCodeAt(++r.position);n=r.input.slice(w,r.position),as.test(n)&&Je(r,"tag suffix cannot contain flow indicator characters")}n&&!Ea.test(n)&&Je(r,"tag name cannot contain such characters: "+n);try{n=decodeURIComponent(n)}catch{Je(r,"tag name is malformed: "+n)}return e?r.tag=n:Pi.call(r.tagMap,i)?r.tag=r.tagMap[i]+n:i==="!"?r.tag="!"+n:i==="!!"?r.tag="tag:yaml.org,2002:"+n:Je(r,'undeclared tag handle "'+i+'"'),!0}function ys(r){var w,e;if(e=r.input.charCodeAt(r.position),e!==38)return!1;for(r.anchor!==null&&Je(r,"duplication of an anchor property"),e=r.input.charCodeAt(++r.position),w=r.position;e!==0&&!ri(e)&&!or(e);)e=r.input.charCodeAt(++r.position);return r.position===w&&Je(r,"name of an anchor node must contain at least one character"),r.anchor=r.input.slice(w,r.position),!0}function vs(r){var w,e,t;if(t=r.input.charCodeAt(r.position),t!==42)return!1;for(t=r.input.charCodeAt(++r.position),w=r.position;t!==0&&!ri(t)&&!or(t);)t=r.input.charCodeAt(++r.position);return r.position===w&&Je(r,"name of an alias node must contain at least one character"),e=r.input.slice(w,r.position),Pi.call(r.anchorMap,e)||Je(r,'unidentified alias "'+e+'"'),r.result=r.anchorMap[e],It(r,!0,-1),!0}function cr(r,w,e,t,i){var n,o,c,l=1,g=!1,u=!1,m,h,b,y,_,A;if(r.listener!==null&&r.listener("open",r),r.tag=null,r.anchor=null,r.kind=null,r.result=null,n=o=c=Zr===e||Sa===e,t&&It(r,!0,-1)&&(g=!0,r.lineIndent>w?l=1:r.lineIndent===w?l=0:r.lineIndent<w&&(l=-1)),l===1)for(;bs(r)||ys(r);)It(r,!0,-1)?(g=!0,c=n,r.lineIndent>w?l=1:r.lineIndent===w?l=0:r.lineIndent<w&&(l=-1)):c=!1;if(c&&(c=g||i),(l===1||Zr===e)&&(Qr===e||ka===e?_=w:_=w+1,A=r.position-r.lineStart,l===1?c&&(Yn(r,A)||fs(r,A,_))||gs(r,_)?u=!0:(o&&ms(r,_)||ps(r,_)||us(r,_)?u=!0:vs(r)?(u=!0,(r.tag!==null||r.anchor!==null)&&Je(r,"alias node should not have any properties")):hs(r,_,Qr===e)&&(u=!0,r.tag===null&&(r.tag="?")),r.anchor!==null&&(r.anchorMap[r.anchor]=r.result)):l===0&&(u=c&&Yn(r,A))),r.tag===null)r.anchor!==null&&(r.anchorMap[r.anchor]=r.result);else if(r.tag==="?"){for(r.result!==null&&r.kind!=="scalar"&&Je(r,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+r.kind+'"'),m=0,h=r.implicitTypes.length;m<h;m+=1)if(y=r.implicitTypes[m],y.resolve(r.result)){r.result=y.construct(r.result),r.tag=y.tag,r.anchor!==null&&(r.anchorMap[r.anchor]=r.result);break}}else if(r.tag!=="!"){if(Pi.call(r.typeMap[r.kind||"fallback"],r.tag))y=r.typeMap[r.kind||"fallback"][r.tag];else for(y=null,b=r.typeMap.multi[r.kind||"fallback"],m=0,h=b.length;m<h;m+=1)if(r.tag.slice(0,b[m].tag.length)===b[m].tag){y=b[m];break}y||Je(r,"unknown tag !<"+r.tag+">"),r.result!==null&&y.kind!==r.kind&&Je(r,"unacceptable node kind for !<"+r.tag+'> tag; it should be "'+y.kind+'", not "'+r.kind+'"'),y.resolve(r.result,r.tag)?(r.result=y.construct(r.result,r.tag),r.anchor!==null&&(r.anchorMap[r.anchor]=r.result)):Je(r,"cannot resolve a node with !<"+r.tag+"> explicit tag")}return r.listener!==null&&r.listener("close",r),r.tag!==null||r.anchor!==null||u}function _s(r){var w=r.position,e,t,i,n=!1,o;for(r.version=null,r.checkLineBreaks=r.legacy,r.tagMap=Object.create(null),r.anchorMap=Object.create(null);(o=r.input.charCodeAt(r.position))!==0&&(It(r,!0,-1),o=r.input.charCodeAt(r.position),!(r.lineIndent>0||o!==37));){for(n=!0,o=r.input.charCodeAt(++r.position),e=r.position;o!==0&&!ri(o);)o=r.input.charCodeAt(++r.position);for(t=r.input.slice(e,r.position),i=[],t.length<1&&Je(r,"directive name must not be less than one character in length");o!==0;){for(;Vi(o);)o=r.input.charCodeAt(++r.position);if(o===35){do o=r.input.charCodeAt(++r.position);while(o!==0&&!yi(o));break}if(yi(o))break;for(e=r.position;o!==0&&!ri(o);)o=r.input.charCodeAt(++r.position);i.push(r.input.slice(e,r.position))}o!==0&&Tn(r),Pi.call(Wn,t)?Wn[t](r,t,i):en(r,'unknown document directive "'+t+'"')}if(It(r,!0,-1),r.lineIndent===0&&r.input.charCodeAt(r.position)===45&&r.input.charCodeAt(r.position+1)===45&&r.input.charCodeAt(r.position+2)===45?(r.position+=3,It(r,!0,-1)):n&&Je(r,"directives end mark is expected"),cr(r,r.lineIndent-1,Zr,!1,!0),It(r,!0,-1),r.checkLineBreaks&&ns.test(r.input.slice(w,r.position))&&en(r,"non-ASCII line breaks are interpreted as content"),r.documents.push(r.result),r.position===r.lineStart&&nn(r)){r.input.charCodeAt(r.position)===46&&(r.position+=3,It(r,!0,-1));return}if(r.position<r.length-1)Je(r,"end of the stream or a document separator is expected");else return}function Pa(r,w){r=String(r),w=w||{},r.length!==0&&(r.charCodeAt(r.length-1)!==10&&r.charCodeAt(r.length-1)!==13&&(r+=`
`),r.charCodeAt(0)===65279&&(r=r.slice(1)));var e=new ls(r,w),t=r.indexOf("\0");for(t!==-1&&(e.position=t,Je(e,"null byte is not allowed in input")),e.input+="\0";e.input.charCodeAt(e.position)===32;)e.lineIndent+=1,e.position+=1;for(;e.position<e.length-1;)_s(e);return e.documents}function xs(r,w,e){w!==null&&typeof w=="object"&&typeof e=="undefined"&&(e=w,w=null);var t=Pa(r,e);if(typeof w!="function")return t;for(var i=0,n=t.length;i<n;i+=1)w(t[i])}function ws(r,w){var e=Pa(r,w);if(e.length!==0){if(e.length===1)return e[0];throw new Qt("expected a single document in the stream, but found more")}}var ks=xs,Ss=ws,Ma={loadAll:ks,load:Ss},Ra=Object.prototype.toString,za=Object.prototype.hasOwnProperty,Mn=65279,Cs=9,Pr=10,Es=13,As=32,Ls=33,Ts=34,kn=35,Ps=37,Ms=38,Rs=39,zs=42,Oa=44,Os=45,tn=58,Ds=61,Is=62,Ns=63,Bs=64,Da=91,Ia=93,Fs=96,Na=123,Hs=124,Ba=125,Ut={};Ut[0]="\\0";Ut[7]="\\a";Ut[8]="\\b";Ut[9]="\\t";Ut[10]="\\n";Ut[11]="\\v";Ut[12]="\\f";Ut[13]="\\r";Ut[27]="\\e";Ut[34]='\\"';Ut[92]="\\\\";Ut[133]="\\N";Ut[160]="\\_";Ut[8232]="\\L";Ut[8233]="\\P";var $s=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],qs=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function js(r,w){var e,t,i,n,o,c,l;if(w===null)return{};for(e={},t=Object.keys(w),i=0,n=t.length;i<n;i+=1)o=t[i],c=String(w[o]),o.slice(0,2)==="!!"&&(o="tag:yaml.org,2002:"+o.slice(2)),l=r.compiledTypeMap.fallback[o],l&&za.call(l.styleAliases,c)&&(c=l.styleAliases[c]),e[o]=c;return e}function Vs(r){var w,e,t;if(w=r.toString(16).toUpperCase(),r<=255)e="x",t=2;else if(r<=65535)e="u",t=4;else if(r<=4294967295)e="U",t=8;else throw new Qt("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+e+Bt.repeat("0",t-w.length)+w}var Ws=1,Mr=2;function Ks(r){this.schema=r.schema||Ln,this.indent=Math.max(1,r.indent||2),this.noArrayIndent=r.noArrayIndent||!1,this.skipInvalid=r.skipInvalid||!1,this.flowLevel=Bt.isNothing(r.flowLevel)?-1:r.flowLevel,this.styleMap=js(this.schema,r.styles||null),this.sortKeys=r.sortKeys||!1,this.lineWidth=r.lineWidth||80,this.noRefs=r.noRefs||!1,this.noCompatMode=r.noCompatMode||!1,this.condenseFlow=r.condenseFlow||!1,this.quotingType=r.quotingType==='"'?Mr:Ws,this.forceQuotes=r.forceQuotes||!1,this.replacer=typeof r.replacer=="function"?r.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function Un(r,w){for(var e=Bt.repeat(" ",w),t=0,i=-1,n="",o,c=r.length;t<c;)i=r.indexOf(`
`,t),i===-1?(o=r.slice(t),t=c):(o=r.slice(t,i+1),t=i+1),o.length&&o!==`
`&&(n+=e),n+=o;return n}function Sn(r,w){return`
`+Bt.repeat(" ",r.indent*w)}function Ys(r,w){var e,t,i;for(e=0,t=r.implicitTypes.length;e<t;e+=1)if(i=r.implicitTypes[e],i.resolve(w))return!0;return!1}function rn(r){return r===As||r===Cs}function Rr(r){return 32<=r&&r<=126||161<=r&&r<=55295&&r!==8232&&r!==8233||57344<=r&&r<=65533&&r!==Mn||65536<=r&&r<=1114111}function Gn(r){return Rr(r)&&r!==Mn&&r!==Es&&r!==Pr}function Jn(r,w,e){var t=Gn(r),i=t&&!rn(r);return(e?t:t&&r!==Oa&&r!==Da&&r!==Ia&&r!==Na&&r!==Ba)&&r!==kn&&!(w===tn&&!i)||Gn(w)&&!rn(w)&&r===kn||w===tn&&i}function Us(r){return Rr(r)&&r!==Mn&&!rn(r)&&r!==Os&&r!==Ns&&r!==tn&&r!==Oa&&r!==Da&&r!==Ia&&r!==Na&&r!==Ba&&r!==kn&&r!==Ms&&r!==zs&&r!==Ls&&r!==Hs&&r!==Ds&&r!==Is&&r!==Rs&&r!==Ts&&r!==Ps&&r!==Bs&&r!==Fs}function Gs(r){return!rn(r)&&r!==tn}function Lr(r,w){var e=r.charCodeAt(w),t;return e>=55296&&e<=56319&&w+1<r.length&&(t=r.charCodeAt(w+1),t>=56320&&t<=57343)?(e-55296)*1024+t-56320+65536:e}function Fa(r){var w=/^\n* /;return w.test(r)}var Ha=1,Cn=2,$a=3,qa=4,ar=5;function Js(r,w,e,t,i,n,o,c){var l,g=0,u=null,m=!1,h=!1,b=t!==-1,y=-1,_=Us(Lr(r,0))&&Gs(Lr(r,r.length-1));if(w||o)for(l=0;l<r.length;g>=65536?l+=2:l++){if(g=Lr(r,l),!Rr(g))return ar;_=_&&Jn(g,u,c),u=g}else{for(l=0;l<r.length;g>=65536?l+=2:l++){if(g=Lr(r,l),g===Pr)m=!0,b&&(h=h||l-y-1>t&&r[y+1]!==" ",y=l);else if(!Rr(g))return ar;_=_&&Jn(g,u,c),u=g}h=h||b&&l-y-1>t&&r[y+1]!==" "}return!m&&!h?_&&!o&&!i(r)?Ha:n===Mr?ar:Cn:e>9&&Fa(r)?ar:o?n===Mr?ar:Cn:h?qa:$a}function Xs(r,w,e,t,i){r.dump=(function(){if(w.length===0)return r.quotingType===Mr?'""':"''";if(!r.noCompatMode&&($s.indexOf(w)!==-1||qs.test(w)))return r.quotingType===Mr?'"'+w+'"':"'"+w+"'";var n=r.indent*Math.max(1,e),o=r.lineWidth===-1?-1:Math.max(Math.min(r.lineWidth,40),r.lineWidth-n),c=t||r.flowLevel>-1&&e>=r.flowLevel;function l(g){return Ys(r,g)}switch(Js(w,c,r.indent,o,l,r.quotingType,r.forceQuotes&&!t,i)){case Ha:return w;case Cn:return"'"+w.replace(/'/g,"''")+"'";case $a:return"|"+Xn(w,r.indent)+Qn(Un(w,n));case qa:return">"+Xn(w,r.indent)+Qn(Un(Qs(w,o),n));case ar:return'"'+Zs(w)+'"';default:throw new Qt("impossible error: invalid scalar style")}})()}function Xn(r,w){var e=Fa(r)?String(w):"",t=r[r.length-1]===`
`,i=t&&(r[r.length-2]===`
`||r===`
`),n=i?"+":t?"":"-";return e+n+`
`}function Qn(r){return r[r.length-1]===`
`?r.slice(0,-1):r}function Qs(r,w){for(var e=/(\n+)([^\n]*)/g,t=(function(){var g=r.indexOf(`
`);return g=g!==-1?g:r.length,e.lastIndex=g,Zn(r.slice(0,g),w)})(),i=r[0]===`
`||r[0]===" ",n,o;o=e.exec(r);){var c=o[1],l=o[2];n=l[0]===" ",t+=c+(!i&&!n&&l!==""?`
`:"")+Zn(l,w),i=n}return t}function Zn(r,w){if(r===""||r[0]===" ")return r;for(var e=/ [^ ]/g,t,i=0,n,o=0,c=0,l="";t=e.exec(r);)c=t.index,c-i>w&&(n=o>i?o:c,l+=`
`+r.slice(i,n),i=n+1),o=c;return l+=`
`,r.length-i>w&&o>i?l+=r.slice(i,o)+`
`+r.slice(o+1):l+=r.slice(i),l.slice(1)}function Zs(r){for(var w="",e=0,t,i=0;i<r.length;e>=65536?i+=2:i++)e=Lr(r,i),t=Ut[e],!t&&Rr(e)?(w+=r[i],e>=65536&&(w+=r[i+1])):w+=t||Vs(e);return w}function ec(r,w,e){var t="",i=r.tag,n,o,c;for(n=0,o=e.length;n<o;n+=1)c=e[n],r.replacer&&(c=r.replacer.call(e,String(n),c)),(ki(r,w,c,!1,!1)||typeof c=="undefined"&&ki(r,w,null,!1,!1))&&(t!==""&&(t+=","+(r.condenseFlow?"":" ")),t+=r.dump);r.tag=i,r.dump="["+t+"]"}function ea(r,w,e,t){var i="",n=r.tag,o,c,l;for(o=0,c=e.length;o<c;o+=1)l=e[o],r.replacer&&(l=r.replacer.call(e,String(o),l)),(ki(r,w+1,l,!0,!0,!1,!0)||typeof l=="undefined"&&ki(r,w+1,null,!0,!0,!1,!0))&&((!t||i!=="")&&(i+=Sn(r,w)),r.dump&&Pr===r.dump.charCodeAt(0)?i+="-":i+="- ",i+=r.dump);r.tag=n,r.dump=i||"[]"}function tc(r,w,e){var t="",i=r.tag,n=Object.keys(e),o,c,l,g,u;for(o=0,c=n.length;o<c;o+=1)u="",t!==""&&(u+=", "),r.condenseFlow&&(u+='"'),l=n[o],g=e[l],r.replacer&&(g=r.replacer.call(e,l,g)),ki(r,w,l,!1,!1)&&(r.dump.length>1024&&(u+="? "),u+=r.dump+(r.condenseFlow?'"':"")+":"+(r.condenseFlow?"":" "),ki(r,w,g,!1,!1)&&(u+=r.dump,t+=u));r.tag=i,r.dump="{"+t+"}"}function ic(r,w,e,t){var i="",n=r.tag,o=Object.keys(e),c,l,g,u,m,h;if(r.sortKeys===!0)o.sort();else if(typeof r.sortKeys=="function")o.sort(r.sortKeys);else if(r.sortKeys)throw new Qt("sortKeys must be a boolean or a function");for(c=0,l=o.length;c<l;c+=1)h="",(!t||i!=="")&&(h+=Sn(r,w)),g=o[c],u=e[g],r.replacer&&(u=r.replacer.call(e,g,u)),ki(r,w+1,g,!0,!0,!0)&&(m=r.tag!==null&&r.tag!=="?"||r.dump&&r.dump.length>1024,m&&(r.dump&&Pr===r.dump.charCodeAt(0)?h+="?":h+="? "),h+=r.dump,m&&(h+=Sn(r,w)),ki(r,w+1,u,!0,m)&&(r.dump&&Pr===r.dump.charCodeAt(0)?h+=":":h+=": ",h+=r.dump,i+=h));r.tag=n,r.dump=i||"{}"}function ta(r,w,e){var t,i,n,o,c,l;for(i=e?r.explicitTypes:r.implicitTypes,n=0,o=i.length;n<o;n+=1)if(c=i[n],(c.instanceOf||c.predicate)&&(!c.instanceOf||typeof w=="object"&&w instanceof c.instanceOf)&&(!c.predicate||c.predicate(w))){if(e?c.multi&&c.representName?r.tag=c.representName(w):r.tag=c.tag:r.tag="?",c.represent){if(l=r.styleMap[c.tag]||c.defaultStyle,Ra.call(c.represent)==="[object Function]")t=c.represent(w,l);else if(za.call(c.represent,l))t=c.represent[l](w,l);else throw new Qt("!<"+c.tag+'> tag resolver accepts not "'+l+'" style');r.dump=t}return!0}return!1}function ki(r,w,e,t,i,n,o){r.tag=null,r.dump=e,ta(r,e,!1)||ta(r,e,!0);var c=Ra.call(r.dump),l=t,g;t&&(t=r.flowLevel<0||r.flowLevel>w);var u=c==="[object Object]"||c==="[object Array]",m,h;if(u&&(m=r.duplicates.indexOf(e),h=m!==-1),(r.tag!==null&&r.tag!=="?"||h||r.indent!==2&&w>0)&&(i=!1),h&&r.usedDuplicates[m])r.dump="*ref_"+m;else{if(u&&h&&!r.usedDuplicates[m]&&(r.usedDuplicates[m]=!0),c==="[object Object]")t&&Object.keys(r.dump).length!==0?(ic(r,w,r.dump,i),h&&(r.dump="&ref_"+m+r.dump)):(tc(r,w,r.dump),h&&(r.dump="&ref_"+m+" "+r.dump));else if(c==="[object Array]")t&&r.dump.length!==0?(r.noArrayIndent&&!o&&w>0?ea(r,w-1,r.dump,i):ea(r,w,r.dump,i),h&&(r.dump="&ref_"+m+r.dump)):(ec(r,w,r.dump),h&&(r.dump="&ref_"+m+" "+r.dump));else if(c==="[object String]")r.tag!=="?"&&Xs(r,r.dump,w,n,l);else{if(c==="[object Undefined]")return!1;if(r.skipInvalid)return!1;throw new Qt("unacceptable kind of an object to dump "+c)}r.tag!==null&&r.tag!=="?"&&(g=encodeURI(r.tag[0]==="!"?r.tag.slice(1):r.tag).replace(/!/g,"%21"),r.tag[0]==="!"?g="!"+g:g.slice(0,18)==="tag:yaml.org,2002:"?g="!!"+g.slice(18):g="!<"+g+">",r.dump=g+" "+r.dump)}return!0}function rc(r,w){var e=[],t=[],i,n;for(En(r,e,t),i=0,n=t.length;i<n;i+=1)w.duplicates.push(e[t[i]]);w.usedDuplicates=new Array(n)}function En(r,w,e){var t,i,n;if(r!==null&&typeof r=="object")if(i=w.indexOf(r),i!==-1)e.indexOf(i)===-1&&e.push(i);else if(w.push(r),Array.isArray(r))for(i=0,n=r.length;i<n;i+=1)En(r[i],w,e);else for(t=Object.keys(r),i=0,n=t.length;i<n;i+=1)En(r[t[i]],w,e)}function nc(r,w){w=w||{};var e=new Ks(w);e.noRefs||rc(r,e);var t=r;return e.replacer&&(t=e.replacer.call({"":t},"",t)),ki(e,0,t,!0,!0)?e.dump+`
`:""}var ac=nc,oc={dump:ac};function Rn(r,w){return function(){throw new Error("Function yaml."+r+" is removed in js-yaml 4. Use yaml."+w+" instead, which is now safe by default.")}}var sc=Vt,cc=na,dc=ca,lc=ua,hc=ga,pc=Ln,uc=Ma.load,gc=Ma.loadAll,mc=oc.dump,fc=Qt,bc={binary:va,float:pa,map:sa,null:da,pairs:xa,set:wa,timestamp:ba,bool:la,int:ha,merge:ya,omap:_a,seq:oa,str:aa},yc=Rn("safeLoad","load"),vc=Rn("safeLoadAll","loadAll"),_c=Rn("safeDump","dump"),xc={Type:sc,Schema:cc,FAILSAFE_SCHEMA:dc,JSON_SCHEMA:lc,CORE_SCHEMA:hc,DEFAULT_SCHEMA:pc,load:uc,loadAll:gc,dump:mc,YAMLException:fc,types:bc,safeLoad:yc,safeLoadAll:vc,safeDump:_c},ja=xc;window.interact||(window.interact=Va.default);window.jsyaml||(window.jsyaml=ja);var wc="0.9.5";console.info(`%c drag-and-drop-card %c v${wc} `,"color:#fff;background:#03a9f4;font-weight:700;padding:2px 6px;border-radius:3px 0 0 3px","color:#03303a;background:#bdeaff;padding:2px 6px;border-radius:0 3px 3px 0");console.info("%c drag-and-drop-card loaded","color:#03a9f4;font-weight:700;");var zn=()=>new Promise(r=>requestAnimationFrame(()=>r())),kc=()=>new Promise(r=>window.requestIdleCallback?requestIdleCallback(()=>r()):setTimeout(r,0)),Mi=class r extends HTMLElement{constructor(){super();Dt(this,"__booting",!1);Dt(this,"_gridCanvas",null);Dt(this,"_gridCtx",null);Dt(this,"_gridCols",0);Dt(this,"_gridRows",0);Dt(this,"_gridCellSize",0);Dt(this,"_gridDown",!1);Dt(this,"_gridStartCol",-1);Dt(this,"_gridStartRow",-1);Dt(this,"_gridHoverCol",-1);Dt(this,"_gridHoverRow",-1);Dt(this,"_gridCurrCol",-1);Dt(this,"_gridCurrRow",-1);Dt(this,"_gridDirty",!1);Dt(this,"_gridRAF",0);Dt(this,"_gridTile",null);Dt(this,"__gridPrevEditMode");Dt(this,"__gridRO",null);Dt(this,"__gridPollT",null);this.shadowRoot||this.attachShadow({mode:"open"}),this.__rebuiltCards=new WeakSet,this.viewportPreviewMode="live",this._activeResponsiveProfile="desktop",this._activeResponsiveLayoutKey="desktop_landscape",this._responsiveLayouts=null,this._dashboardPackages=[],this.layers=[],this.activeLayerIds=[],this.layersEnabled=!1,this.__dashboardThemeAppliedVars=[],this._responsivePreviewOrientations={desktop:"landscape",tablet:"landscape",mobile:"portrait"},this.responsiveViewportProfiles=this._defaultResponsiveViewportProfiles_(),this.__responsiveSwitchSeq=0,this.__toolbarExpanded=!1}_updateTabsA11y_(){var i;let e=this.tabsBar;if(!e)return;e.setAttribute("role","tablist"),e.querySelectorAll(".ddc-tab").forEach((n,o)=>{let c=n.classList.contains("active");n.setAttribute("role","tab"),n.setAttribute("aria-selected",String(c)),n.setAttribute("tabindex",c?"0":"-1"),n.dataset.index=String(o)}),this.__tabsKeyHandler||(this.__tabsKeyHandler=n=>{if(!["ArrowLeft","ArrowRight","Home","End"].includes(n.key))return;let c=Array.from(e.querySelectorAll(".ddc-tab"));if(!c.length)return;n.preventDefault();let l=c.findIndex(h=>h===document.activeElement),g=c.findIndex(h=>h.classList.contains("active")),u=l>=0?l:g>=0?g:0;n.key==="ArrowRight"&&(u=Math.min(c.length-1,u+1)),n.key==="ArrowLeft"&&(u=Math.max(0,u-1)),n.key==="Home"&&(u=0),n.key==="End"&&(u=c.length-1);let m=c[u];if(m){try{m.focus({preventScroll:!1})}catch{}m.click()}},e.addEventListener("keydown",this.__tabsKeyHandler)),this.__tabsScrollHandler||(this.__tabsScrollHandler=()=>{var n;return(n=this._updateTabOverflowShadows_)==null?void 0:n.call(this)},e.addEventListener("scroll",this.__tabsScrollHandler,{passive:!0})),(i=this._updateTabOverflowShadows_)==null||i.call(this)}_getCurrentDashboardUrlPath_(){let t=(window.location.pathname||"/").replace(/^\/+/,"").split("/")[0]||"lovelace";return t==="lovelace"?null:t}async _ensureCardIdSeededInStorage_(){var t;if((t=this.config)!=null&&t.id)return this.config.id;let e=crypto!=null&&crypto.randomUUID?crypto.randomUUID():"ddc_"+Math.random().toString(36).slice(2);this.config={...this.config,id:e};try{let i=this._getCurrentDashboardUrlPath_(),n=await this.hass.callWS(i?{type:"lovelace/config",url_path:i}:{type:"lovelace/config"}),o=this._findThisCardPathRecursive_(n,b=>(b==null?void 0:b.type)==="custom:drag-and-drop-card"&&(!b.id||b.id===e));if(!o)return e;let{viewIndex:c,cardIndex:l,parentPath:g}=o,u=n.views[c],h={...this._getCardByPath_(u,g,l),id:e};this._setCardByPath_(u,g,l,h),await this.hass.callWS(i?{type:"lovelace/config/save",url_path:i,config:n}:{type:"lovelace/config/save",config:n})}catch{}return e}async _persistThisCardConfigToStorage_(){var h,b;await this._ensureCardIdSeededInStorage_();let e={type:"custom:drag-and-drop-card",id:(h=this.config)==null?void 0:h.id,...this._config},t=this._getCurrentDashboardUrlPath_(),i=await this.hass.callWS(t?{type:"lovelace/config",url_path:t}:{type:"lovelace/config"}),n=this._findThisCardPathRecursive_(i,y=>{var _;return(y==null?void 0:y.type)==="custom:drag-and-drop-card"&&(y==null?void 0:y.id)===((_=this.config)==null?void 0:_.id)});if(!n)throw new Error("Card not found in Lovelace config");let{viewIndex:o,cardIndex:c,parentPath:l}=n,g=i.views[o],m={...this._getCardByPath_(g,l,c),...e};this._setCardByPath_(g,l,c,m),await this.hass.callWS(t?{type:"lovelace/config/save",url_path:t,config:i}:{type:"lovelace/config/save",config:i}),this.config=m,(b=this.requestUpdate)==null||b.call(this)}_findThisCardPathRecursive_(e,t){let i=(e==null?void 0:e.views)||[];for(let n=0;n<i.length;n++){let o=this._findInCardTree_(i[n],t);if(o)return{viewIndex:n,...o}}return null}_findInCardTree_(e,t,i=[]){var o;let n=(e==null?void 0:e.cards)||[];for(let c=0;c<n.length;c++){let l=n[c];if(t(l))return{cardIndex:c,parentPath:i};if((o=l==null?void 0:l.cards)!=null&&o.length){let g=this._findInCardTree_(l,t,i.concat(c));if(g)return g}}return null}_getCardByPath_(e,t,i){let n=e;for(let o of t||[])n=n.cards[o];return n.cards[i]}_setCardByPath_(e,t,i,n){let o=e;for(let c of t||[])o=o.cards[c];o.cards[i]=n}_ensureToolbarStyles_(){try{if(this.shadowRoot.querySelector("#ddc-toolbar-styles"))return;let t=document.createElement("style");t.id="ddc-toolbar-styles",t.textContent=`/* ===== Edit toolbar ===== */
  .ddc-toolbar{
    position: sticky; top:calc(var(--ddc-top-gutter, 0px) + max(env(safe-area-inset-top, 0px), 0px)); z-index: 50;
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
  }`,this.shadowRoot.appendChild(t)}catch(e){console.warn("Toolbar style inject failed",e)}}_ensureSettingsStyles_(){if(this.shadowRoot.querySelector("#ddc-settings-styles"))return;let e=document.createElement("style");e.id="ddc-settings-styles",e.textContent=`
  .dialog.modern {
    width: min(calc(100vw - clamp(14px, 3vw, 40px)), 1720px);
    height: min(calc(100vh - clamp(16px, 4vw, 44px)), 1100px);
    max-width: 1720px;
    max-height: 1100px;
    display:flex;
    flex-direction:column;
    border-radius: 18px;
    overflow: hidden;
  }
  .dlg-head { display:flex; justify-content:space-between; align-items:center; padding:14px 18px; background:var(--primary-color); color:#fff; }
  .dlg-head h3 { margin:0; font-size:1.1rem; font-weight:700; }
  .icon-btn { border:0; background:transparent; color:inherit; cursor:pointer; display:grid; place-items:center; }
  .settings-body {
    flex:1 1 auto;
    min-height:0;
    display:grid;
    row-gap:clamp(18px, 2vw, 26px);
    column-gap:clamp(68px, 8vw, 144px);
    padding:clamp(14px, 1.8vw, 22px);
    overflow:auto;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 430px), 1fr));
    align-content:start;
  }
  .card { background:var(--ha-card-background, #fff); border-radius:12px; box-shadow:0 1px 6px rgba(0,0,0,.08); padding:12px 14px; display:flex; flex-direction:column; gap:10px; min-width:0; }
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
    .layers-card .layer-toggle-row{
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:12px;
      padding:8px 0 10px;
    }
    .layers-card .layer-row{
      display:grid;
      grid-template-columns:minmax(0, 1.35fr) minmax(110px, .7fr) 78px auto auto;
      gap:10px;
      align-items:center;
      padding:10px 0;
      border-bottom:1px solid var(--divider-color, rgba(0,0,0,.08));
    }
    .layers-card .layer-row:last-child{ border-bottom:0; }
    .layers-card .layer-row input[type="text"]{
      width:100%;
      min-width:0;
    }
    .layers-card .layer-row input[type="color"]{
      width:48px;
      min-width:48px;
      height:40px;
      border:1px solid var(--divider-color, rgba(0,0,0,.2));
      border-radius:12px;
      padding:4px;
      background:var(--ha-card-background, #fff);
      cursor:pointer;
    }
    .layers-card .layer-empty{
      padding:14px 16px;
      border:1px dashed var(--divider-color, rgba(0,0,0,.14));
      border-radius:14px;
      background:color-mix(in oklab, var(--secondary-background-color, #111827) 20%, transparent);
      color:var(--secondary-text-color);
      font-size:.88rem;
    }
    .layers-card .layer-chip{
      display:inline-flex;
      align-items:center;
      gap:8px;
      min-height:36px;
      padding:0 12px;
      border-radius:999px;
      border:1px solid var(--divider-color, rgba(255,255,255,.14));
      background:color-mix(in oklab, var(--primary-background-color, #0e1116) 18%, transparent);
      font-size:.82rem;
      font-weight:700;
      color:var(--primary-text-color, #f5f5f5);
    }
    .layers-card .layer-chip ha-icon{ --mdc-icon-size:16px; }
    .layers-card .layer-actions{
      display:flex;
      align-items:center;
      gap:8px;
    }
    .packages-list { display:flex; flex-direction:column; gap:14px; }
    .package-tools {
      display:flex;
      align-items:center;
      gap:10px;
      flex-wrap:wrap;
      margin-bottom:4px;
    }
    .feature-quick-actions {
      display:flex;
      align-items:center;
      gap:10px;
      flex-wrap:wrap;
      margin-bottom:2px;
    }
    .feature-quick-actions .mini-action {
      border-radius:999px;
    }
    .package-sync-status {
      border:1px dashed var(--divider-color, rgba(255,255,255,.16));
      border-radius:12px;
      padding:10px 12px;
      color:var(--secondary-text-color);
      font-size:.88rem;
      line-height:1.45;
      background:color-mix(in srgb, var(--card-background-color, #111) 90%, transparent);
      white-space:pre-line;
    }
    .package-empty {
      padding:18px 16px;
      border:1px dashed var(--divider-color, rgba(255,255,255,.16));
      border-radius:14px;
      color:var(--secondary-text-color);
      background:color-mix(in oklab, var(--primary-background-color, #0f1117) 24%, transparent);
    }
    .package-reload-note {
      display:flex;
      align-items:flex-start;
      gap:10px;
      padding:12px 14px;
      border-radius:14px;
      border:1px solid color-mix(in srgb, var(--warning-color, #f59e0b) 35%, transparent);
      background:color-mix(in srgb, var(--warning-color, #f59e0b) 9%, transparent);
      color:var(--secondary-text-color);
      font-size:.9rem;
      line-height:1.45;
    }
    .package-reload-note ha-icon {
      color:var(--warning-color, #f59e0b);
      margin-top:2px;
      flex:0 0 auto;
    }
    .package-card {
      border:1px solid var(--divider-color, rgba(255,255,255,.12));
      border-radius:16px;
      padding:14px;
      display:flex;
      flex-direction:column;
      gap:12px;
      background:color-mix(in oklab, var(--ha-card-background, #111827) 94%, transparent);
    }
    .package-head {
      display:flex;
      align-items:flex-start;
      justify-content:space-between;
      gap:12px;
      flex-wrap:wrap;
    }
    .package-head-main {
      flex:1 1 260px;
      min-width:220px;
      display:flex;
      flex-direction:column;
      gap:8px;
    }
    .package-title-input,
    .package-file-input,
    .package-yaml-textarea {
      width:100%;
      box-sizing:border-box;
      padding:10px 12px;
      border:1px solid var(--divider-color, rgba(255,255,255,.16));
      border-radius:12px;
      background:color-mix(in oklab, var(--primary-background-color, #0e1116) 20%, transparent);
      color:inherit;
      font:inherit;
    }
    .package-title-input { font-weight:700; }
    .package-file-row {
      display:grid;
      grid-template-columns:minmax(0, 1fr) auto;
      gap:12px;
      align-items:center;
    }
    .package-toggle {
      display:inline-flex;
      align-items:center;
      gap:8px;
      white-space:nowrap;
      color:var(--secondary-text-color);
      font-size:.9rem;
    }
    .package-actions {
      display:flex;
      align-items:center;
      gap:8px;
      flex-wrap:wrap;
    }
    .package-yaml-wrap {
      display:flex;
      flex-direction:column;
      gap:8px;
    }
    .package-yaml-wrap > span,
    .package-file-row > label {
      font-size:.84rem;
      font-weight:700;
      letter-spacing:.04em;
      text-transform:uppercase;
      color:var(--secondary-text-color);
    }
    .package-yaml-textarea {
      min-height:220px;
      resize:vertical;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
      font-size:.89rem;
      line-height:1.5;
      white-space:pre;
      tab-size:2;
    }
    .feature-list {
      display:flex;
      flex-direction:column;
      gap:12px;
    }
    .feature-card {
      border:1px solid var(--divider-color, rgba(255,255,255,.12));
      border-radius:16px;
      padding:14px 15px;
      display:flex;
      align-items:flex-start;
      justify-content:space-between;
      gap:16px;
      background:color-mix(in oklab, var(--ha-card-background, #111827) 94%, transparent);
    }
    .feature-card-main {
      min-width:0;
      flex:1 1 auto;
      display:flex;
      flex-direction:column;
      gap:8px;
    }
    .feature-card-head {
      display:flex;
      align-items:center;
      gap:10px;
      flex-wrap:wrap;
      min-width:0;
    }
    .feature-type-badge {
      display:inline-flex;
      align-items:center;
      gap:6px;
      padding:6px 10px;
      border-radius:999px;
      font-size:.76rem;
      font-weight:700;
      letter-spacing:.04em;
      text-transform:uppercase;
      background:color-mix(in srgb, var(--primary-color, #3b82f6) 16%, transparent);
      color:var(--primary-color, #3b82f6);
      border:1px solid color-mix(in srgb, var(--primary-color, #3b82f6) 24%, transparent);
      white-space:nowrap;
    }
    .feature-card-title {
      min-width:0;
      font-size:1rem;
      font-weight:700;
      color:var(--primary-text-color);
      overflow:hidden;
      text-overflow:ellipsis;
      white-space:nowrap;
    }
    .feature-card-meta {
      display:flex;
      align-items:center;
      gap:10px;
      flex-wrap:wrap;
      color:var(--secondary-text-color);
      font-size:.86rem;
    }
    .feature-card-meta code {
      font-size:.82rem;
    }
    .feature-card-summary {
      color:var(--secondary-text-color);
      font-size:.9rem;
      line-height:1.45;
      display:-webkit-box;
      -webkit-line-clamp:2;
      -webkit-box-orient:vertical;
      overflow:hidden;
      word-break:break-word;
    }
    .feature-card-actions {
      display:flex;
      align-items:center;
      gap:8px;
      flex-wrap:wrap;
      justify-content:flex-end;
      flex:0 0 auto;
    }
    .feature-editor-shell {
      position:fixed;
      inset:0;
      z-index:10020;
      display:flex;
      align-items:center;
      justify-content:center;
      padding:22px;
    }
    .feature-editor-backdrop {
      position:absolute;
      inset:0;
      background:rgba(5, 8, 16, .62);
      backdrop-filter:blur(5px);
    }
    .feature-editor-modal {
      position:relative;
      z-index:1;
      width:min(760px, calc(100vw - 32px));
      max-height:min(88vh, 920px);
      overflow:auto;
      display:flex;
      flex-direction:column;
      gap:16px;
      padding:18px;
      border-radius:22px;
      border:1px solid var(--divider-color, rgba(255,255,255,.14));
      background:color-mix(in oklab, var(--card-background-color, #111827) 98%, black 2%);
      box-shadow:0 28px 70px rgba(0,0,0,.45);
    }
    .feature-editor-head {
      display:flex;
      align-items:flex-start;
      justify-content:space-between;
      gap:12px;
    }
    .feature-editor-head h5 {
      margin:0 0 4px;
      font-size:1.15rem;
    }
    .feature-editor-head p {
      margin:0;
      color:var(--secondary-text-color);
      font-size:.92rem;
      line-height:1.45;
    }
    .feature-editor-grid {
      display:grid;
      grid-template-columns:repeat(2, minmax(0, 1fr));
      gap:12px;
    }
    .feature-editor-field {
      display:flex;
      flex-direction:column;
      gap:8px;
    }
    .feature-editor-field.full {
      grid-column:1 / -1;
    }
    .feature-editor-field label {
      font-size:.8rem;
      font-weight:700;
      letter-spacing:.04em;
      text-transform:uppercase;
      color:var(--secondary-text-color);
    }
    .feature-editor-field textarea {
      min-height:300px;
      resize:vertical;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
      font-size:.9rem;
      line-height:1.55;
      white-space:pre;
      tab-size:2;
    }
    .feature-editor-footer {
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:12px;
      flex-wrap:wrap;
    }
    .feature-editor-toggle {
      display:inline-flex;
      align-items:center;
      gap:10px;
      color:var(--secondary-text-color);
      font-size:.92rem;
    }
    .feature-editor-actions {
      display:flex;
      align-items:center;
      gap:10px;
      flex-wrap:wrap;
      margin-left:auto;
    }
    @media (max-width: 760px) {
      .feature-card {
        flex-direction:column;
      }
      .feature-card-actions {
        width:100%;
        justify-content:flex-start;
      }
      .feature-editor-grid {
        grid-template-columns:1fr;
      }
    }
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
    .modern input[type="password"],
    .modern textarea {
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
    .bg-opts { display:grid; grid-template-columns: minmax(138px, 168px) minmax(0, 1fr); gap:12px 18px; margin-top:8px; }
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

    .media-browser-dialog{
      width:min(calc(100vw - 32px), 980px);
      height:min(calc(100vh - 32px), 760px);
      display:flex;
      flex-direction:column;
    }

    .media-browser-toolbar{
      display:flex;
      align-items:center;
      gap:10px;
      padding:14px 18px;
      border-bottom:1px solid var(--divider-color, rgba(0,0,0,.12));
    }

    .media-browser-path{
      flex:1;
      min-width:0;
      font-size:.92rem;
      color:var(--secondary-text-color);
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
    }

    .media-browser-status{
      min-height:20px;
      padding:10px 18px 0;
      font-size:.88rem;
      color:var(--secondary-text-color);
    }

    .media-browser-status.is-error{
      color:var(--error-color, #ef4444);
    }

    .media-browser-list{
      flex:1;
      min-height:0;
      overflow:auto;
      padding:14px 18px 18px;
      display:flex;
      flex-direction:column;
      gap:10px;
    }

    .media-browser-empty{
      padding:22px 16px;
      border:1px dashed var(--divider-color, rgba(0,0,0,.16));
      border-radius:14px;
      color:var(--secondary-text-color);
      text-align:center;
    }

    .media-browser-item{
      display:grid;
      grid-template-columns:minmax(0, 1fr) auto;
      gap:10px;
      align-items:center;
    }

    .media-browser-primary{
      appearance:none;
      -webkit-appearance:none;
      width:100%;
      border:1px solid var(--divider-color, rgba(0,0,0,.16));
      background:var(--ha-card-background, rgba(0,0,0,.12));
      border-radius:14px;
      padding:10px 12px;
      display:grid;
      grid-template-columns:56px minmax(0, 1fr) auto;
      gap:12px;
      align-items:center;
      text-align:left;
      color:inherit;
      cursor:pointer;
    }

    .media-browser-primary:hover{
      border-color:color-mix(in oklab, var(--primary-color, #ff9800) 26%, transparent);
      background:color-mix(in oklab, var(--primary-color, #ff9800) 10%, var(--ha-card-background, rgba(0,0,0,.12)));
    }

    .media-browser-preview{
      width:56px;
      height:44px;
      border-radius:12px;
      display:grid;
      place-items:center;
      border:1px solid var(--divider-color, rgba(0,0,0,.16));
      background:color-mix(in oklab, var(--primary-background-color, #101318) 82%, transparent);
      background-size:cover;
      background-position:center;
      overflow:hidden;
    }

    .media-browser-preview ha-icon{
      --mdc-icon-size:22px;
      opacity:.78;
    }

    .media-browser-copy{
      min-width:0;
      display:flex;
      flex-direction:column;
      gap:4px;
    }

    .media-browser-title{
      font-weight:700;
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
    }

    .media-browser-meta{
      font-size:.82rem;
      color:var(--secondary-text-color);
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
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

    .setting-actions{
      display:flex;
      justify-content:flex-end;
      margin-bottom:4px;
    }

    .section-actions{
      display:flex;
      justify-content:flex-end;
      flex-wrap:wrap;
      gap:10px;
      margin:0 0 8px;
    }

    .mini-action{
      appearance:none;
      -webkit-appearance:none;
      display:inline-flex;
      align-items:center;
      gap:6px;
      height:32px;
      padding:0 12px;
      border-radius:999px;
      border:1px solid var(--divider-color, rgba(255,255,255,.14));
      background:color-mix(in oklab, var(--primary-background-color, #0e1116) 18%, transparent);
      color:var(--primary-text-color, #e5e7eb);
      font:inherit;
      font-size:.86rem;
      font-weight:700;
      cursor:pointer;
      transition:transform .08s ease, background .16s ease, border-color .16s ease;
    }

    .mini-action:hover{
      transform:translateY(-1px);
      background:color-mix(in oklab, var(--primary-color, #ff9800) 22%, transparent);
      border-color:color-mix(in oklab, var(--primary-color, #ff9800) 38%, transparent);
    }

    .mini-action.primary{
      background:color-mix(in oklab, var(--primary-color, #ff9800) 78%, rgba(255,255,255,.08));
      border-color:color-mix(in oklab, var(--primary-color, #ff9800) 52%, transparent);
      color:var(--text-primary-color, #fff);
    }

    .mini-action.primary:hover{
      background:color-mix(in oklab, var(--primary-color, #ff9800) 88%, rgba(255,255,255,.06));
    }

    .mini-action ha-icon{ --mdc-icon-size:16px; }

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

  .footer { display:flex; justify-content:flex-end; gap:10px; padding:14px 18px; border-top:1px solid var(--divider-color, rgba(0,0,0,.12)); flex-wrap:wrap; }
  .btn.primary { background:var(--primary-color); color:#fff; border:0; border-radius:8px; padding:8px 16px; font-weight:600; cursor:pointer; }
  .btn.secondary { background:transparent; border:1px solid var(--divider-color, rgba(0,0,0,.25)); border-radius:8px; padding:8px 16px; cursor:pointer; }

  @media (min-width: 1380px) {
    .settings-body{
      grid-template-columns:minmax(340px, 0.9fr) minmax(620px, 1.28fr);
      column-gap:clamp(96px, 11vw, 208px);
    }
    .card[aria-labelledby="behaviour-head"],
    .tabs-card,
    .layers-card,
    .packages-card{
      grid-column:1 / -1;
    }
  }

  @media (min-width: 1280px) {
    .tabs-card, .layers-card, .packages-card { grid-column: 1 / -1; }
  }

  @media (max-width: 899px){
    .dialog.modern{
      width:min(calc(100vw - 12px), 1540px);
      height:min(calc(100vh - 12px), 1100px);
      border-radius:16px;
    }
    .settings-body{ grid-template-columns: 1fr; }
    .setting .row{ flex-direction:column; align-items:stretch; gap:10px; }
    .setting .title{ flex:0 0 auto; min-width:0; }
    .setting .hint{ margin-left:0; }
    .bg-opts{ grid-template-columns: 1fr; }
    .footer > .btn{ flex:1 1 160px; }
    .media-browser-dialog{ width:min(calc(100vw - 12px), 980px); height:min(calc(100vh - 12px), 760px); }
    .media-browser-item{ grid-template-columns:1fr; }
    .media-browser-item > .mini-action{ justify-self:flex-start; }
    .media-browser-primary{ grid-template-columns:48px minmax(0, 1fr) auto; }
    .media-browser-preview{ width:48px; height:40px; }
    .media-browser-toolbar{ flex-wrap:wrap; }
    .package-file-row{ grid-template-columns:1fr; }
    .package-tools{ flex-direction:column; align-items:stretch; }
    .layers-card .layer-row{ grid-template-columns:1fr; gap:8px; }
    .layers-card .layer-actions{ flex-wrap:wrap; }
  }
  `,this.shadowRoot.appendChild(e)}_setHeaderVisible_(e=!0){var t,i,n,o,c,l;try{(((t=this._deepQueryAll)==null?void 0:t.call(this,"app-header, ha-top-app-bar, ha-top-app-bar-fixed, mwc-top-app-bar-fixed, ha-header-bar, app-toolbar, ha-toolbar"))||[]).forEach(y=>{y&&(y.dataset.ddcPrevDisplayHeader===void 0&&(y.dataset.ddcPrevDisplayHeader=y.style.display||"",y.dataset.ddcPrevMinH=y.style.minHeight||"",y.dataset.ddcPrevH=y.style.height||"",y.dataset.ddcPrevVis=y.style.visibility||""),e?(y.style.display=y.dataset.ddcPrevDisplayHeader||"",y.style.minHeight=y.dataset.ddcPrevMinH||"",y.style.height=y.dataset.ddcPrevH||"",y.style.visibility=y.dataset.ddcPrevVis||"",y.removeAttribute("hidden")):(y.style.display="none",y.style.minHeight="0",y.style.height="0",y.style.visibility="hidden",y.setAttribute("hidden","")))}),(((i=this._deepQueryAll)==null?void 0:i.call(this,'[slot="actionItems"], ha-icon-button, ha-button-menu, assist-button, search-input, ha-quick-bar, ha-mwc-menu'))||[]).forEach(y=>{y&&(y.dataset.ddcPrevDisplayAction===void 0&&(y.dataset.ddcPrevDisplayAction=y.style.display||"",y.dataset.ddcPrevVisAction=y.style.visibility||""),e?(y.style.display=y.dataset.ddcPrevDisplayAction||"",y.style.visibility=y.dataset.ddcPrevVisAction||""):(y.style.display="none",y.style.visibility="hidden"))}),[...((n=this._deepQueryAll)==null?void 0:n.call(this,"ha-app-layout"))||[],...((o=this._deepQueryAll)==null?void 0:o.call(this,"home-assistant-main"))||[],document.documentElement,document.body].filter(Boolean).forEach(y=>{if(y)if(y.dataset.ddcPrevHdrVars===void 0&&(y.dataset.ddcPrevHdrVars=JSON.stringify({mdc:y.style.getPropertyValue("--mdc-top-app-bar-height")||"",app:y.style.getPropertyValue("--app-header-height")||"",hdr:y.style.getPropertyValue("--header-height")||"",hah:y.style.getPropertyValue("--ha-header-height")||"",pad:y.style&&(y.style.paddingTop||"")||""})),e)try{let _=JSON.parse(y.dataset.ddcPrevHdrVars||"{}");y.style.setProperty("--mdc-top-app-bar-height",_.mdc||""),y.style.setProperty("--app-header-height",_.app||""),y.style.setProperty("--header-height",_.hdr||""),y.style.setProperty("--ha-header-height",_.hah||""),_.pad!==void 0&&(y.style.paddingTop=_.pad||"")}catch{}else{y.style.setProperty("--mdc-top-app-bar-height","0px"),y.style.setProperty("--app-header-height","0px"),y.style.setProperty("--header-height","0px"),y.style.setProperty("--ha-header-height","0px");try{y.style.paddingTop="0px"}catch{}}}),(((c=this._deepQueryAll)==null?void 0:c.call(this,"#contentContainer"))||[]).forEach(y=>{y&&(y.dataset.ddcPrevContentPadTop===void 0&&(y.dataset.ddcPrevContentPadTop=y.style&&(y.style.paddingTop||"")||""),y.style.paddingTop=e?y.dataset.ddcPrevContentPadTop||"":"0px")}),(((l=this._deepQueryAll)==null?void 0:l.call(this,".main-title"))||[]).forEach(y=>{y&&(y.dataset.ddcPrevDisplayTitle===void 0&&(y.dataset.ddcPrevDisplayTitle=y.style.display||"",y.dataset.ddcPrevVisTitle=y.style.visibility||""),e?(y.style.display=y.dataset.ddcPrevDisplayTitle||"",y.style.visibility=y.dataset.ddcPrevVisTitle||""):(y.style.display="none",y.style.visibility="hidden"))})}catch{}}_setSidebarVisible_(e=!0){var t,i;try{(((t=this._deepQueryAll)==null?void 0:t.call(this,"ha-sidebar"))||[]).forEach(c=>{c&&(c.dataset.ddcPrevDisplaySidebar===void 0&&(c.dataset.ddcPrevDisplaySidebar=c.style.display||""),c.style.display=e?c.dataset.ddcPrevDisplaySidebar||"":"none")}),(((i=this._deepQueryAll)==null?void 0:i.call(this,"ha-drawer"))||[]).forEach(c=>{if(c){c.dataset.ddcPrevDrawerWidth===void 0&&(c.dataset.ddcPrevDrawerWidth=c.style.getPropertyValue("--mdc-drawer-width")||""),e?c.style.setProperty("--mdc-drawer-width",c.dataset.ddcPrevDrawerWidth||""):c.style.setProperty("--mdc-drawer-width","0px");try{!e&&typeof c.close=="function"&&c.close()}catch{}}})}catch{}}_applyHaChromeVisibility_(){var e;try{let t=!!this.editMode||((e=this._isInHaEditorPreview)==null?void 0:e.call(this));t||!this.hideHaHeader?this._setHeaderVisible_(!0):this._setHeaderVisible_(!1),t||!this.hideHaSidebar?this._setSidebarVisible_(!0):this._setSidebarVisible_(!1)}catch{}requestAnimationFrame(()=>{var t,i,n;try{(t=this._computeHaSidebarGutters_)==null||t.call(this)}catch{}try{(i=this._computeHaTopGutter_)==null||i.call(this)}catch{}try{(n=this._refreshToolbarOpenHeight_)==null||n.call(this)}catch{}})}_applyBackgroundImageFromConfig(){var o;try{let c=navigator.userAgent||"";if(/iPad|iPhone|iPod/.test(c)&&t&&typeof t.src=="string"&&t.src.startsWith("data:")&&t.src.length>3e5){console.warn("[drag-and-drop-card] Skipping large inline background on iOS for stability.");return}}catch{}let e=this._config||{},t=e.background_image||e.bg_image||null,i=this.cardContainer;if(!i)return;let n=!!(this.applyBackgroundToPage&&((e.background_mode||"").toLowerCase()==="image"||t!=null&&t.src));if(t&&t.src){let c=String(t.src).trim(),l=t.repeat===!0||t.repeat==="repeat"?"repeat":"no-repeat",g=Math.max(0,Math.min(1,Number((o=t.opacity)!=null?o:1))),u=t.size||"cover",m=t.position||"center center",h=t.attachment||"scroll",b=t.filter||"none";n?(i.style.removeProperty("--ddc-bg-image"),i.style.removeProperty("--ddc-bg-repeat"),i.style.removeProperty("--ddc-bg-opacity"),i.style.removeProperty("--ddc-bg-size"),i.style.removeProperty("--ddc-bg-position"),i.style.removeProperty("--ddc-bg-attachment"),i.style.removeProperty("--ddc-bg-filter"),i.classList.remove("has-bg-image"),i.classList.add("ddc-page-bg-image-active")):(i.style.setProperty("--ddc-bg-image",c?`url("${c.replace(/"/g,'"')}")`:"none"),i.style.setProperty("--ddc-bg-repeat",l),i.style.setProperty("--ddc-bg-opacity",String(g)),i.style.setProperty("--ddc-bg-size",u),i.style.setProperty("--ddc-bg-position",m),i.style.setProperty("--ddc-bg-attachment",h),i.style.setProperty("--ddc-bg-filter",b),i.classList.add("has-bg-image"),i.classList.remove("ddc-page-bg-image-active"))}else i.style.removeProperty("--ddc-bg-image"),i.style.removeProperty("--ddc-bg-repeat"),i.style.removeProperty("--ddc-bg-opacity"),i.style.removeProperty("--ddc-bg-size"),i.style.removeProperty("--ddc-bg-position"),i.style.removeProperty("--ddc-bg-attachment"),i.style.removeProperty("--ddc-bg-filter"),i.classList.remove("has-bg-image"),i.classList.remove("ddc-page-bg-image-active")}_applyBackgroundFromConfig(){var e,t,i,n,o,c,l,g,u,m,h,b,y,_,A,T,E,M,O,C,$;try{let q=((e=this._config)==null?void 0:e.background_mode)||((i=(t=this._config)==null?void 0:t.background_image)!=null&&i.src?"image":"none");if(q==="youtube"){let F=((n=this._config)==null?void 0:n.background_youtube)||{},j=this.applyBackgroundToPage?(o=this._ensurePageBgHost_)==null?void 0:o.call(this):(c=this._ensureBgHost_)==null?void 0:c.call(this),H=(l=this._getYouTubeBackgroundSignature_)==null?void 0:l.call(this,F,{host:j});if(j&&H&&this.__ytWrap&&this.__ytWrap.parentNode===j&&this.__ytBackgroundSignature===H){try{j.style.display="block"}catch{}try{this.__ytWrap.style.display=""}catch{}(g=this._layoutYtBackground_)==null||g.call(this),(u=this._syncPageBackgroundToView_)==null||u.call(this);return}}if((m=this._destroyParticles_)==null||m.call(this),(h=this._destroyYouTube_)==null||h.call(this),(b=this._clearPageDynamicBackground_)==null||b.call(this),q!=="image"){let F=this.cardContainer;F&&(F.style.removeProperty("--ddc-bg-image"),F.style.removeProperty("--ddc-bg-repeat"),F.style.removeProperty("--ddc-bg-opacity"),F.style.removeProperty("--ddc-bg-size"),F.style.removeProperty("--ddc-bg-position"),F.style.removeProperty("--ddc-bg-attachment"),F.style.removeProperty("--ddc-bg-filter"),F.classList.remove("has-bg-image"))}if(q==="image"){(y=this._applyBackgroundImageFromConfig)==null||y.call(this),(_=this._syncPageBackgroundToView_)==null||_.call(this);return}if(q==="particles"){let F=((A=this._config)==null?void 0:A.background_particles)||{},j=this.applyBackgroundToPage?(T=this._ensurePageBgHost_)==null?void 0:T.call(this):null;this._attachParticlesBackground_(F,j),(E=this._syncPageBackgroundToView_)==null||E.call(this);return}if(q==="youtube"){let F=((M=this._config)==null?void 0:M.background_youtube)||{},j=this.applyBackgroundToPage?(O=this._ensurePageBgHost_)==null?void 0:O.call(this):null;this._attachYouTubeBackground_(F,j),(C=this._syncPageBackgroundToView_)==null||C.call(this);return}($=this._syncPageBackgroundToView_)==null||$.call(this)}catch(q){console.warn("[drag-and-drop-card] _applyBackgroundFromConfig failed:",q)}}_getYouTubeBackgroundSignature_(e={},t={}){var i;try{let n=this._parseYouTubeId_(e.video_id||e.url);if(!n)return"";let o=((i=t==null?void 0:t.host)==null?void 0:i.id)==="ddcPageBgHost"||this.applyBackgroundToPage?"page":"card",c=Number.isFinite(e.start)?Number(e.start):null,l=Number.isFinite(e.end)?Number(e.end):null,g=e.opacity!=null?Math.max(0,Math.min(1,Number(e.opacity))):1;return JSON.stringify({hostMode:o,videoId:n,start:c,end:l,mute:e.mute!==!1,loop:e.loop!==!1,size:String(e.size||"cover"),position:String(e.position||"center"),attachment:String(e.attachment||"scroll"),opacity:g})}catch{return""}}_getAvailableDashboardThemeNames_(){var e,t;try{let i=(t=(e=this.hass)==null?void 0:e.themes)==null?void 0:t.themes;return!i||typeof i!="object"?[]:Object.keys(i).sort((n,o)=>n.localeCompare(o,void 0,{sensitivity:"base"}))}catch{return[]}}_getEffectiveDashboardThemeMode_(){var e,t,i,n;try{let o=(t=(e=this.hass)==null?void 0:e.selectedTheme)==null?void 0:t.dark;if(typeof o=="boolean")return o?"dark":"light"}catch{}try{return(n=(i=window.matchMedia)==null?void 0:i.call(window,"(prefers-color-scheme: dark)"))!=null&&n.matches?"dark":"light"}catch{return"light"}}_getDashboardThemeDefinition_(e=this.dashboardTheme){var t,i,n,o,c,l;try{let g=(n=(i=(t=this.hass)==null?void 0:t.themes)==null?void 0:i.themes)==null?void 0:n[e];if(!g||typeof g!="object")return null;if(g.modes&&typeof g.modes=="object"){let u=this._getEffectiveDashboardThemeMode_(),m=((o=g.modes)==null?void 0:o[u])||((c=g.modes)==null?void 0:c.light)||((l=g.modes)==null?void 0:l.dark)||Object.values(g.modes||{}).find(h=>h&&typeof h=="object");return m&&typeof m=="object"?m:null}return g}catch{return null}}_isDashboardThemeOverrideAllDesignActive_(){return!!(this.dashboardThemeEnabled&&this.dashboardThemeOverrideAllDesign&&this.dashboardTheme)}_getVisualRefreshSignature_(){var e,t,i,n,o,c,l;try{let g=this._config||{},u=g.background_image||g.bg_image||{},m=g.background_particles||{},h=g.background_youtube||{},b=this.dashboardThemeEnabled?String(this.dashboardTheme||"").trim():"",y=b&&this._getDashboardThemeDefinition_(b)||null,_=String(g.background_mode||(u!=null&&u.src?"image":h&&Object.keys(h).length?"youtube":m&&Object.keys(m).length?"particles":"none")).toLowerCase();return JSON.stringify({dashboardThemeEnabled:!!this.dashboardThemeEnabled,dashboardTheme:b,dashboardThemeOverrideAllDesign:!!this.dashboardThemeOverrideAllDesign,effectiveThemeMode:((e=this._getEffectiveDashboardThemeMode_)==null?void 0:e.call(this))||"light",themeDefinition:y,containerBackground:String((t=this.containerBackground)!=null?t:""),cardBackground:String((i=this.cardBackground)!=null?i:""),cardShadowEnabled:!!this.cardShadowEnabled,applyBackgroundToPage:!!this.applyBackgroundToPage,backgroundMode:_,backgroundImage:_==="image"?{src:String((u==null?void 0:u.src)||""),repeat:String((u==null?void 0:u.repeat)||""),size:String((u==null?void 0:u.size)||""),position:String((u==null?void 0:u.position)||""),attachment:String((u==null?void 0:u.attachment)||""),opacity:String((n=u==null?void 0:u.opacity)!=null?n:"")}:null,backgroundParticles:_==="particles"?{config_url:String((m==null?void 0:m.config_url)||""),pointer_events:!!(m!=null&&m.pointer_events),config:(m==null?void 0:m.config)||null}:null,backgroundYoutube:_==="youtube"?{video_id:String((h==null?void 0:h.video_id)||""),start:String((o=h==null?void 0:h.start)!=null?o:""),end:String((c=h==null?void 0:h.end)!=null?c:""),mute:!!(h!=null&&h.mute),controls:!!(h!=null&&h.controls),autoplay:(h==null?void 0:h.autoplay)!==!1,playback_rate:String((l=h==null?void 0:h.playback_rate)!=null?l:"")}:null})}catch{return""}}_scheduleVisibilityRefresh_(){this.__visibilityRefreshRAF||(this.__visibilityRefreshRAF=requestAnimationFrame(()=>{var e;this.__visibilityRefreshRAF=0;try{(e=this._applyVisibility_)==null||e.call(this)}catch{}}))}_scheduleVisualRefresh_(e=!1){var i;let t=((i=this._getVisualRefreshSignature_)==null?void 0:i.call(this))||"";!e&&t&&t===this.__lastVisualRefreshSig||(this.__queuedVisualRefreshSig=t,this.__queuedVisualRefreshForce=!!(this.__queuedVisualRefreshForce||e),!this.__visualRefreshRAF&&(this.__visualRefreshRAF=requestAnimationFrame(()=>{var c,l,g,u;this.__visualRefreshRAF=0;let n=!!this.__queuedVisualRefreshForce;this.__queuedVisualRefreshForce=!1;let o=(g=(l=this.__queuedVisualRefreshSig)!=null?l:(c=this._getVisualRefreshSignature_)==null?void 0:c.call(this))!=null?g:"";if(this.__queuedVisualRefreshSig="",!(!n&&o&&o===this.__lastVisualRefreshSig)){try{(u=this._applyDashboardThemeStyling_)==null||u.call(this)}catch{}this.__lastVisualRefreshSig=o}})))}_refreshAllPerCardStyles_(){var e;try{Array.from(((e=this.cardContainer)==null?void 0:e.children)||[]).forEach(i=>{var n,o,c;!(i instanceof HTMLElement)||!((n=i.classList)!=null&&n.contains("card-wrapper"))||(c=this._applyPerCardStyle_)==null||c.call(this,i,(o=this._extractPerCardStyle_)==null?void 0:o.call(this,i),{persist:!1})})}catch{}}_applyDashboardThemeStyling_(){var e,t,i,n,o;try{let c=this;(Array.isArray(this.__dashboardThemeAppliedVars)?this.__dashboardThemeAppliedVars:[]).forEach(m=>{try{c.style.removeProperty(m)}catch{}}),this.__dashboardThemeAppliedVars=[];let g=this.dashboardThemeEnabled?String(this.dashboardTheme||"").trim():"";if(g){let m=this._getDashboardThemeDefinition_(g);if(m&&typeof m=="object"){for(let[h,b]of Object.entries(m))if(String(h||"").startsWith("--")&&!(b==null||typeof b=="object"))try{c.style.setProperty(h,String(b)),this.__dashboardThemeAppliedVars.push(h)}catch{}}}let u=this._isDashboardThemeOverrideAllDesignActive_();c.style.setProperty("--ddc-bg",u?"var(--lovelace-background, var(--primary-background-color, transparent))":(e=this.containerBackground)!=null?e:"transparent"),c.style.setProperty("--ddc-card-bg",u?"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color, rgba(255,255,255,.06))))":(t=this.cardBackground)!=null?t:"var(--ha-card-background, var(--card-background-color))"),u?c.style.setProperty("--ddc-card-shadow","var(--ha-card-box-shadow, 0 2px 12px rgba(0,0,0,.18))"):this.cardShadowEnabled?c.style.setProperty("--ddc-card-shadow","0 8px 24px rgba(0,0,0,.35)"):c.style.removeProperty("--ddc-card-shadow"),(i=this._refreshAllPerCardStyles_)==null||i.call(this),(n=this._syncPageBackgroundToView_)==null||n.call(this),this.__lastVisualRefreshSig=((o=this._getVisualRefreshSignature_)==null?void 0:o.call(this))||""}catch(c){console.warn("[drag-and-drop-card] Failed to apply dashboard theme styling",c)}}_getPageBackgroundTargets_(){var n,o,c,l,g,u;let e=[],t=new Set,i=m=>{!m||t.has(m)||(t.add(m),e.push(m))};try{let m=(n=this._huiRoot)==null?void 0:n.call(this);i(m),i((c=(o=m==null?void 0:m.shadowRoot)==null?void 0:o.querySelector)==null?void 0:c.call(o,"#view")),i((g=(l=m==null?void 0:m.shadowRoot)==null?void 0:l.querySelector)==null?void 0:g.call(l,"ha-app-layout"))}catch{}try{["ha-panel-lovelace","hui-root","#view","hui-view","hui-panel-view","hui-masonry-view","hui-sections-view","ha-app-layout","partial-panel-resolver"].forEach(m=>{var h;(((h=this._deepQueryAll)==null?void 0:h.call(this,m))||[]).forEach(i)})}catch{}try{let m=this;for(;m;){m instanceof HTMLElement&&i(m);let h=(u=m.getRootNode)==null?void 0:u.call(m),b=h==null?void 0:h.host;if(!b||b===m)break;m=b}}catch{}return e.filter(m=>{let h=String((m==null?void 0:m.tagName)||"").toLowerCase();return(m==null?void 0:m.id)==="view"||h==="ha-panel-lovelace"||h==="hui-root"||h==="hui-view"||h==="hui-panel-view"||h==="hui-masonry-view"||h==="hui-sections-view"||h==="ha-app-layout"||h==="partial-panel-resolver"})}_rememberPageBackgroundTarget_(e){e&&(this.__pageBackgroundPrev||(this.__pageBackgroundPrev=new WeakMap),this.__pageBackgroundTouched||(this.__pageBackgroundTouched=new Set),this.__pageBackgroundPrev.has(e)||this.__pageBackgroundPrev.set(e,{background:e.style.getPropertyValue("background")||"",backgroundColor:e.style.getPropertyValue("background-color")||"",backgroundImage:e.style.getPropertyValue("background-image")||"",backgroundSize:e.style.getPropertyValue("background-size")||"",backgroundRepeat:e.style.getPropertyValue("background-repeat")||"",backgroundPosition:e.style.getPropertyValue("background-position")||"",backgroundAttachment:e.style.getPropertyValue("background-attachment")||"",minHeight:e.style.getPropertyValue("min-height")||"",lovelaceBg:e.style.getPropertyValue("--lovelace-background")||""}),this.__pageBackgroundTouched.add(e))}_clearPageBackground_(){var e;try{clearTimeout(this.__pageBackgroundRetryT),this.__pageBackgroundRetryT=null,(e=this._clearPageDynamicBackground_)==null||e.call(this),Array.from(this.__pageBackgroundTouched||[]).forEach(i=>{var o,c;if(!i)return;let n=(c=(o=this.__pageBackgroundPrev)==null?void 0:o.get)==null?void 0:c.call(o,i);n&&(n.background?i.style.setProperty("background",n.background):i.style.removeProperty("background"),n.backgroundColor?i.style.setProperty("background-color",n.backgroundColor):i.style.removeProperty("background-color"),n.backgroundImage?i.style.setProperty("background-image",n.backgroundImage):i.style.removeProperty("background-image"),n.backgroundSize?i.style.setProperty("background-size",n.backgroundSize):i.style.removeProperty("background-size"),n.backgroundRepeat?i.style.setProperty("background-repeat",n.backgroundRepeat):i.style.removeProperty("background-repeat"),n.backgroundPosition?i.style.setProperty("background-position",n.backgroundPosition):i.style.removeProperty("background-position"),n.backgroundAttachment?i.style.setProperty("background-attachment",n.backgroundAttachment):i.style.removeProperty("background-attachment"),n.minHeight?i.style.setProperty("min-height",n.minHeight):i.style.removeProperty("min-height"),n.lovelaceBg?i.style.setProperty("--lovelace-background",n.lovelaceBg):i.style.removeProperty("--lovelace-background"))}),this.__pageBackgroundTouched=new Set}catch{}}_syncPageBackgroundToView_(e=0){var t,i,n,o,c,l,g;try{clearTimeout(this.__pageBackgroundRetryT),this.__pageBackgroundRetryT=null;let u=!!this.applyBackgroundToPage,m=((t=this._config)==null?void 0:t.background_mode)||((n=(i=this._config)==null?void 0:i.background_image)!=null&&n.src?"image":"none"),h=u&&(m==="particles"||m==="youtube"),b=u?(o=this._getPageBackgroundVisual_)==null?void 0:o.call(this):null;if(!u){(c=this._clearPageBackground_)==null||c.call(this);return}if(!b){h||(l=this._clearPageBackground_)==null||l.call(this);return}let y=((g=this._getPageBackgroundTargets_)==null?void 0:g.call(this))||[];if(!y.length){this.isConnected&&e<8&&(this.__pageBackgroundRetryT=setTimeout(()=>{var _;return(_=this._syncPageBackgroundToView_)==null?void 0:_.call(this,e+1)},180));return}y.forEach(_=>{var T;(T=this._rememberPageBackgroundTarget_)==null||T.call(this,_),b.kind==="image"?(_.style.removeProperty("background"),b.backgroundColor?_.style.setProperty("background-color",b.backgroundColor,"important"):_.style.removeProperty("background-color"),_.style.setProperty("background-image",b.backgroundImage,"important"),_.style.setProperty("background-repeat",b.backgroundRepeat,"important"),_.style.setProperty("background-size",b.backgroundSize,"important"),_.style.setProperty("background-position",b.backgroundPosition,"important"),_.style.setProperty("background-attachment",b.backgroundAttachment,"important")):(_.style.setProperty("background",b.background,"important"),_.style.removeProperty("background-image"),_.style.removeProperty("background-size"),_.style.removeProperty("background-repeat"),_.style.removeProperty("background-position"),_.style.removeProperty("background-attachment"),/gradient\(|url\(/i.test(b.background)?_.style.removeProperty("background-color"):_.style.setProperty("background-color",b.background,"important")),_.style.setProperty("--lovelace-background",b.lovelaceBackground||"");let A=String(_.tagName||"").toLowerCase();(_.id==="view"||A==="hui-view"||A==="hui-panel-view"||A==="hui-masonry-view"||A==="hui-sections-view")&&_.style.setProperty("min-height","100%")})}catch(u){console.warn("[drag-and-drop-card] _syncPageBackgroundToView failed:",u)}}_normalizeMediaUrl_(e=""){var i;let t=String(e||"").trim();if(!t)return"";if(/^(https?:)?\/\//i.test(t)||t.startsWith("data:")||t.startsWith("blob:"))return t;try{if(typeof((i=this.hass)==null?void 0:i.hassUrl)=="function")return this.hass.hassUrl(t)}catch{}return t}_getPageBackgroundVisual_(){var i,n,o,c,l,g;let e=String((i=this.containerBackground)!=null?i:"").trim();if((((n=this._config)==null?void 0:n.background_mode)||((c=(o=this._config)==null?void 0:o.background_image)!=null&&c.src?"image":"none"))==="image"){let u=((l=this._config)==null?void 0:l.background_image)||((g=this._config)==null?void 0:g.bg_image)||null,m=String((u==null?void 0:u.src)||"").trim(),h=this._normalizeMediaUrl_(m);if(h){let b=(u==null?void 0:u.repeat)===!0||(u==null?void 0:u.repeat)==="repeat"?"repeat":String((u==null?void 0:u.repeat)||"no-repeat"),y=String((u==null?void 0:u.size)||"cover"),_=String((u==null?void 0:u.position)||"center center"),A=String((u==null?void 0:u.attachment)||"scroll"),T=/gradient\(/i.test(e)?e:"",E=[`url("${h.replace(/"/g,'\\"')}")`];return T&&E.push(T),{kind:"image",backgroundColor:!T&&e&&!/^transparent$/i.test(e)?e:"",backgroundImage:E.join(", "),backgroundRepeat:T?`${b}, no-repeat`:b,backgroundSize:T?`${y}, auto`:y,backgroundPosition:T?`${_}, center center`:_,backgroundAttachment:T?`${A}, scroll`:A,lovelaceBackground:e||h}}}return!e||/^transparent$/i.test(e)?null:{kind:"fill",background:e,lovelaceBackground:e}}async _browseMediaSource_(e=void 0){if(!this.hass||typeof this.hass.callWS!="function")throw new Error("Home Assistant media browser is not available here.");let t={type:"media_source/browse_media"};e&&(t.media_content_id=e);try{return await this.hass.callWS(t)}catch(i){if(e)throw i;return await this.hass.callWS({type:"media_source/browse_media",media_content_id:"media-source://"})}}async _resolveMediaSourceUrl_(e){if(!e)throw new Error("Missing media item to resolve.");let t=await this.hass.callWS({type:"media_source/resolve_media",media_content_id:e}),i=this._normalizeMediaUrl_((t==null?void 0:t.url)||"");if(!i)throw new Error("Home Assistant did not return a usable media URL.");return i}_isMediaImageItem_(e){let t=String((e==null?void 0:e.media_content_type)||"").toLowerCase(),i=String((e==null?void 0:e.media_class)||"").toLowerCase(),n=`${(e==null?void 0:e.title)||""} ${(e==null?void 0:e.media_content_id)||""}`.toLowerCase();return t.startsWith("image/")||i==="image"||/\.(avif|bmp|gif|jpe?g|png|svg|webp)(?:$|\?)/i.test(n)}async _openMediaLibraryBrowser_(e){var $,q,F,j;if(($=this._ensureSettingsStyles_)==null||$.call(this),!this.hass||typeof this.hass.callWS!="function"){(q=this._toast)==null||q.call(this,"Media library is not available in this view.");return}try{(j=(F=this.__mediaBrowserModal)==null?void 0:F.remove)==null||j.call(F)}catch{}let t=document.createElement("div");t.className="modal",t.id="ddc-media-browser-modal",t.innerHTML=`
    <div class="dialog modern media-browser-dialog" role="dialog" aria-modal="true" aria-labelledby="ddc-media-browser-title">
      <div class="dlg-head">
        <h3 id="ddc-media-browser-title">Browse Media Library</h3>
        <button class="icon-btn" id="ddc-media-browser-close" title="Close" aria-label="Close dialog">
          <ha-icon icon="mdi:close"></ha-icon>
        </button>
      </div>
      <div class="media-browser-toolbar">
        <button type="button" class="btn secondary" id="ddc-media-browser-back">Back</button>
        <div class="media-browser-path" id="ddc-media-browser-path">Media</div>
        <button type="button" class="btn secondary" id="ddc-media-browser-refresh">Refresh</button>
      </div>
      <div class="media-browser-status" id="ddc-media-browser-status" aria-live="polite"></div>
      <div class="media-browser-list" id="ddc-media-browser-list"></div>
      <div class="footer">
        <button type="button" class="btn secondary" id="ddc-media-browser-cancel">Cancel</button>
      </div>
    </div>
  `,this.__mediaBrowserModal=t,this.shadowRoot.appendChild(t);let i=t.querySelector("#ddc-media-browser-list"),n=t.querySelector("#ddc-media-browser-path"),o=t.querySelector("#ddc-media-browser-status"),c=t.querySelector("#ddc-media-browser-back"),l=t.querySelector("#ddc-media-browser-refresh"),g=t.querySelector("#ddc-media-browser-close"),u=t.querySelector("#ddc-media-browser-cancel"),m=null,h=[],b=0,y=()=>{try{t.remove()}catch{}this.__mediaBrowserModal===t&&(this.__mediaBrowserModal=null),document.removeEventListener("keydown",_)},_=H=>{H.key==="Escape"&&(H.stopPropagation(),y())},A=(H="",U=!1)=>{o&&(o.textContent=H,o.classList.toggle("is-error",!!U))},T=(H=[])=>[...H].sort((U,X)=>{let te=!!(U!=null&&U.can_expand),re=!!(X!=null&&X.can_expand);return te!==re?te?-1:1:String((U==null?void 0:U.title)||"").localeCompare(String((X==null?void 0:X.title)||""),void 0,{sensitivity:"base",numeric:!0})}),E=()=>{let H=["Media",...h.map(U=>U==null?void 0:U.title).filter(Boolean)];m!=null&&m.title&&m.title!==H[H.length-1]&&H.push(m.title),n.textContent=H.join(" / "),c.disabled=h.length===0},M=async H=>{try{A(`Resolving ${(H==null?void 0:H.title)||"image"}...`);let U=await this._resolveMediaSourceUrl_(H==null?void 0:H.media_content_id);e==null||e(U,H),y()}catch(U){A((U==null?void 0:U.message)||"Could not resolve selected media item.",!0)}},O=H=>{m=H||null,E(),i.innerHTML="";let U=T((H==null?void 0:H.children)||[]);if(!U.length){let X=document.createElement("div");X.className="media-browser-empty",X.textContent="No media items found here.",i.appendChild(X),A("");return}U.forEach(X=>{let te=!!(X!=null&&X.can_expand),re=this._isMediaImageItem_(X),le=document.createElement("div");le.className="media-browser-item";let Le=document.createElement("button");Le.type="button",Le.className="media-browser-primary";let me=document.createElement("div");me.className="media-browser-preview";let de=this._normalizeMediaUrl_((X==null?void 0:X.thumbnail)||"");de?(me.style.backgroundImage=`url("${de.replace(/"/g,'\\"')}")`,me.classList.add("has-thumb")):me.innerHTML=`<ha-icon icon="${te?"mdi:folder-outline":re?"mdi:image-outline":"mdi:file-outline"}"></ha-icon>`;let Ce=document.createElement("div");Ce.className="media-browser-copy";let ue=document.createElement("div");ue.className="media-browser-title",ue.textContent=(X==null?void 0:X.title)||(X==null?void 0:X.media_content_id)||"Untitled";let Ae=document.createElement("div");Ae.className="media-browser-meta";let ye=[te?"Folder":"File",(X==null?void 0:X.media_class)||"",(X==null?void 0:X.media_content_type)||""].filter(Boolean);Ae.textContent=ye.join(" \xB7 "),Ce.append(ue,Ae);let Se=document.createElement("ha-icon");if(Se.setAttribute("icon",te?"mdi:chevron-right":re?"mdi:check-circle-outline":"mdi:minus-circle-outline"),Le.append(me,Ce,Se),Le.addEventListener("click",async()=>{if(te){h.push(m),await C(X==null?void 0:X.media_content_id,(X==null?void 0:X.title)||"Folder");return}if(re){await M(X);return}A("Only image files can be used as background images.",!0)}),le.appendChild(Le),re&&!te){let B=document.createElement("button");B.type="button",B.className="mini-action primary",B.innerHTML='<ha-icon icon="mdi:image-check-outline"></ha-icon><span>Use</span>',B.addEventListener("click",async p=>{p.stopPropagation(),await M(X)}),le.appendChild(B)}else if(te){let B=document.createElement("button");B.type="button",B.className="mini-action",B.innerHTML='<ha-icon icon="mdi:folder-open-outline"></ha-icon><span>Open</span>',B.addEventListener("click",async p=>{p.stopPropagation(),h.push(m),await C(X==null?void 0:X.media_content_id,(X==null?void 0:X.title)||"Folder")}),le.appendChild(B)}i.appendChild(le)}),A("")},C=async(H=void 0)=>{let U=++b;i.innerHTML='<div class="media-browser-empty">Loading media\u2026</div>',A("");try{let X=await this._browseMediaSource_(H);if(U!==b)return;O(X)}catch(X){if(U!==b)return;i.innerHTML='<div class="media-browser-empty">Could not load media items.</div>',A((X==null?void 0:X.message)||"Could not load media items from Home Assistant.",!0)}};c==null||c.addEventListener("click",()=>{if(!h.length)return;let H=h.pop();O(H)}),l==null||l.addEventListener("click",()=>C(m==null?void 0:m.media_content_id)),g==null||g.addEventListener("click",y),u==null||u.addEventListener("click",y),t.addEventListener("click",H=>{H.target===t&&y()}),document.addEventListener("keydown",_),await C()}_ensureBgHost_(){let e=this.cardContainer;if(!e)return null;let t=e.querySelector("#ddcBgHost");return t||(t=document.createElement("div"),t.className="ddc-bg-host",t.id="ddcBgHost",t.setAttribute("aria-hidden","true"),e.prepend(t)),t}_ensurePageBgHost_(){let e=this.shadowRoot;if(!e)return null;let t=e.querySelector("#ddcPageBgHost");return t||(t=document.createElement("div"),t.className="ddc-page-bg-host",t.id="ddcPageBgHost",t.setAttribute("aria-hidden","true"),e.insertBefore(t,e.firstChild||null)),t.style.display="block",t}_clearPageDynamicBackground_(){var e,t;try{let i=(t=(e=this.shadowRoot)==null?void 0:e.querySelector)==null?void 0:t.call(e,"#ddcPageBgHost");if(!i)return;i.innerHTML="",i.style.display="none"}catch{}}async _loadScriptOnce_(e){if(!e)throw new Error("script src required");if(this.__scriptCache||(this.__scriptCache=new Map),this.__scriptCache.has(e))return this.__scriptCache.get(e);let t=new Promise((i,n)=>{let o=document.createElement("script");o.src=e,o.async=!0,o.onload=()=>i(!0),o.onerror=()=>n(new Error("failed to load "+e)),document.head.appendChild(o)});return this.__scriptCache.set(e,t),t}_getRenderRoot_(){return this.renderRoot||this.shadowRoot||this}_withScopedDocument_(e){let t=this._getRenderRoot_();if(!t||t===document||!t.querySelector)return e();let i=document,n=i.getElementById.bind(i),o=i.querySelector?i.querySelector.bind(i):null;i.getElementById=c=>{try{let l=window.CSS&&CSS.escape?CSS.escape(String(c)):String(c);return t.querySelector("#"+l)||n(c)}catch{return n(c)}},o&&(i.querySelector=c=>{try{return t.querySelector(c)||o(c)}catch{return o(c)}});try{return e()}finally{i.getElementById=n,o&&(i.querySelector=o)}}async _ensureParticles_(){if(window.particlesJS)return!0;if(!this.__particlesLoadPromise){let e=t=>new Promise((i,n)=>{let o=document.createElement("script");o.src=t,o.async=!0,o.onload=()=>i(!0),o.onerror=()=>n(new Error("Failed to load "+t)),document.head.appendChild(o)});this.__particlesLoadPromise=e("/local/particles.min.js").catch(()=>e("https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js")).then(()=>!!window.particlesJS).catch(()=>!1)}return this.__particlesLoadPromise}_attachParticlesBackground_(e={},t=null){var u,m;let i=t||((u=this._ensureBgHost_)==null?void 0:u.call(this));if(!i)return;try{(m=this._destroyParticles_)==null||m.call(this)}catch{}i.innerHTML="";let n=document.createElement("div");n.id="ddcParticles",n.className="particles-js",n.style.position="absolute",n.style.inset="0",i.appendChild(n);let o={particles:{number:{value:30,density:{enable:!0,value_area:1200}},color:{value:"#ffffff"},shape:{type:"circle"},opacity:{value:.35},size:{value:2.5,random:!0},line_linked:{enable:!1,distance:150,color:"#ffffff",opacity:.3,width:1},move:{enable:!0,speed:.7,out_mode:"out"}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1},onclick:{enable:!1},resize:!0},modes:{repulse:{distance:100},push:{particles_nb:3}}},retina_detect:!1},c=!!e.pointer_events,l=e.config||JSON.parse(JSON.stringify(o));c?(l.interactivity.events.onhover={enable:!0,mode:"repulse"},l.interactivity.events.onclick={enable:!0,mode:"push"},i.style.pointerEvents="auto"):i.style.pointerEvents="none",(async()=>{var y;if(!await((y=this._ensureParticles_)==null?void 0:y.call(this))||!window.particlesJS)return;await(typeof requestAnimationFrame=="function"?new Promise(_=>requestAnimationFrame(()=>_())):Promise.resolve()),await(typeof requestAnimationFrame=="function"?new Promise(_=>requestAnimationFrame(()=>_())):Promise.resolve());let b=l;if(e.config_url)try{b=await(await fetch(e.config_url,{cache:"no-store"})).json()}catch(_){console.warn("[drag-and-drop-card] Failed to fetch particles config; falling back to defaults",_),b=l}this._withScopedDocument_(()=>{if(!Array.isArray(window.pJSDom))try{window.pJSDom=[]}catch{}window.particlesJS("ddcParticles",b)}),Array.isArray(window.pJSDom)&&window.pJSDom.length&&(this.__particlesInst=window.pJSDom[window.pJSDom.length-1])})(),this.__particlesHost=i}_destroyParticles_(){try{Array.isArray(window.pJSDom)||(window.pJSDom=[]),window.pJSDom.length&&(window.pJSDom.forEach(e=>{var t,i,n,o,c,l,g,u;try{(o=(n=(i=(t=e.pJS)==null?void 0:t.fn)==null?void 0:i.vendors)==null?void 0:n.destroy)==null||o.call(n)}catch{}try{(u=(g=(l=(c=e.pJS)==null?void 0:c.fn)==null?void 0:l.vendors)==null?void 0:g.destroypJS)==null||u.call(g)}catch{}}),window.pJSDom.length=0)}catch{}this.__particlesHost&&(this.__particlesHost.innerHTML="",this.__particlesHost.id==="ddcPageBgHost"&&(this.__particlesHost.style.display="none")),this.__particlesHost=null,this.__particlesInst=null}_parseYouTubeId_(e){if(!e)return null;let t=String(e).trim(),i=t.match(/(?:youtube\.com\/.*[?&]v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([A-Za-z0-9_-]{11})/)||t.match(/^([A-Za-z0-9_-]{11})$/);return i?i[1]:null}async _ensureYouTube_(){var e;return(e=window.YT)!=null&&e.Player?!0:(this.__ytReadyPromise||(this.__ytReadyPromise=new Promise(t=>{var o;let i=()=>t(!0);if((o=window.YT)!=null&&o.Player)return i();window.onYouTubeIframeAPIReady=i;let n=document.createElement("script");n.src="https://www.youtube.com/iframe_api",n.async=!0,n.onerror=()=>t(!1),document.head.appendChild(n)})),this.__ytReadyPromise)}_attachYouTubeIframeDirect_(e,t,{start:i,end:n,mute:o=!0,loop:c=!0}={}){var m;let l=new URLSearchParams({autoplay:"1",mute:o?"1":"0",controls:"0",playsinline:"1",rel:"0",modestbranding:"1",iv_load_policy:"3",loop:c?"1":"0"});c&&l.set("playlist",t),Number.isFinite(i)&&l.set("start",String(i)),Number.isFinite(n)&&l.set("end",String(n));let g=`https://www.youtube.com/embed/${t}?${l.toString()}`,u=document.createElement("iframe");u.src=g,u.setAttribute("frameborder","0"),u.setAttribute("allow","autoplay; encrypted-media; picture-in-picture; fullscreen"),u.setAttribute("allowfullscreen","true"),u.style.position="absolute",u.style.inset="0",u.style.width="100%",u.style.height="100%",e.appendChild(u),this.__ytWrap=e,(m=this._layoutYtBackground_)==null||m.call(this)}_attachYouTubeBackground_(e={},t=null){var A;this.__ytSize=e.size||"cover",this.__ytPosition=e.position||"center",this.__ytOpacity=e.opacity!=null?Math.max(0,Math.min(1,Number(e.opacity))):1,this.__ytAttachment=e.attachment||"scroll";let i=String(this.__ytPosition).toLowerCase(),n=.5,o=.5;i.includes("left")?n=0:i.includes("right")&&(n=1),i.includes("top")?o=0:i.includes("bottom")&&(o=1),(i==="center"||i==="centre"||i==="middle")&&(n=.5,o=.5),this.__ytAx=n,this.__ytAy=o;let c=t||this._ensureBgHost_();if(!c)return;let l=this._parseYouTubeId_(e.video_id||e.url);if(!l){console.warn("[drag-and-drop-card] No YouTube video id");return}this.__ytBackgroundSignature=((A=this._getYouTubeBackgroundSignature_)==null?void 0:A.call(this,e,{host:c}))||"";let g=document.createElement("div");g.className="yt-bg",this.__ytAttachment==="fixed"?(g.style.position="fixed",g.style.left="0",g.style.top="0",g.style.width="100%",g.style.height="100%"):(g.style.position="absolute",g.style.inset="0"),g.style.opacity=String(this.__ytOpacity),g.style.filter="none",g.style.pointerEvents="none",c.appendChild(g);let u=document.createElement("div");u.id="ddcYtFrame",u.style.position="absolute",u.style.left="0",u.style.top="0",u.style.width="100%",u.style.height="100%",g.appendChild(u);let m=Number.isFinite(e.start)?Number(e.start):void 0,h=Number.isFinite(e.end)?Number(e.end):void 0,b=e.mute!==!1,y=e.loop!==!1;(async()=>{if(!await this._ensureYouTube_()||!(window.YT&&window.YT.Player)){if(this._attachYouTubeIframeDirect_(g,l,{start:m,end:h,mute:b,loop:y}),!this.__ytResizeObs){this.__ytResizeObs=new ResizeObserver(()=>{var E;return(E=this._layoutYtBackground_)==null?void 0:E.call(this)});try{this.__ytResizeObs.observe(this.cardContainer)}catch{}window.addEventListener("resize",this.__ytOnWinResize=()=>{var E;return(E=this._layoutYtBackground_)==null?void 0:E.call(this)})}return}if(this.__ytPlayer=new window.YT.Player(u,{width:"100%",height:"100%",videoId:l,playerVars:{autoplay:1,controls:0,disablekb:1,fs:0,iv_load_policy:3,modestbranding:1,rel:0,playsinline:1,loop:y?1:0,playlist:y?l:void 0,start:m,end:h},events:{onReady:E=>{var M;try{b&&E.target.mute(),E.target.playVideo()}catch{}(M=this._layoutYtBackground_)==null||M.call(this)},onStateChange:E=>{if(E.data===window.YT.PlayerState.ENDED&&y)try{let M=Number.isFinite(m)?m:0,O=window.performance&&performance.now?performance.now():Date.now();(!this.__ytLastLoopAt||O-this.__ytLastLoopAt>1500)&&(this.__ytLastLoopAt=O,E.target.seekTo(M,!0),E.target.playVideo())}catch{}}}}),!this.__ytResizeObs){this.__ytResizeObs=new ResizeObserver(()=>{var E;return(E=this._layoutYtBackground_)==null?void 0:E.call(this)});try{this.__ytResizeObs.observe(this.cardContainer)}catch{}window.addEventListener("resize",this.__ytOnWinResize=()=>{var E;return(E=this._layoutYtBackground_)==null?void 0:E.call(this)})}})(),this.__ytWrap=g}_layoutYtBackground_(){var e,t,i,n,o,c,l,g,u,m;try{if(!this.__ytWrap)return;if(((t=(e=this.__ytWrap)==null?void 0:e.parentElement)==null?void 0:t.id)==="ddcPageBgHost"){let le=Math.max(window.innerWidth||0,1),Le=Math.max(window.innerHeight||0,1),me=this.__ytSize||"cover",de=16/9,Ce=le/Le,ue=le,Ae=Le;me==="contain"?Ce>de?(Ae=Le,ue=Ae*de):(ue=le,Ae=ue/de):me==="100% 100%"||me==="fill"||me==="stretch"||(Ce>de?(ue=le,Ae=ue/de):(Ae=Le,ue=Ae*de));let ye=this.__ytAx!=null?this.__ytAx:.5,Se=this.__ytAy!=null?this.__ytAy:.5,B=(le-ue)*ye,p=(Le-Ae)*Se,x=this.__ytWrap.querySelector("iframe")||this.__ytWrap;x.style.width=`${ue}px`,x.style.height=`${Ae}px`,x.style.left=`${B}px`,x.style.top=`${p}px`;return}let b=this.__scaleOuter||this.cardContainer,y=0,_=0;try{y=parseFloat((n=(i=this.cardContainer)==null?void 0:i.style)==null?void 0:n.width)||((o=this.cardContainer)==null?void 0:o.scrollWidth)||((c=this.cardContainer)==null?void 0:c.offsetWidth)||0,_=parseFloat((g=(l=this.cardContainer)==null?void 0:l.style)==null?void 0:g.height)||((u=this.cardContainer)==null?void 0:u.scrollHeight)||((m=this.cardContainer)==null?void 0:m.offsetHeight)||0}catch{}let A,T;try{if(String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"){let Le=b.getBoundingClientRect();if(A=Le.width,y>0){let me=Math.min(A/y,1);T=_*me}else T=Le.height}else A=y||b.getBoundingClientRect().width,T=_||b.getBoundingClientRect().height}catch{let le=b.getBoundingClientRect();A=le.width,T=le.height}let E=this.__ytAttachment==="fixed",M=E&&window.innerWidth||A,O=E&&window.innerHeight||T;if(!A||!T)return;let C=this.__ytSize||"cover",$=16/9,q=E?M/O:A/T,F,j,H=0,U=0;C==="100% 100%"||C==="fill"||C==="stretch"?(F=E?M:A,j=E?O:T,H=0,U=0):C==="contain"?q>$?(j=E?O:T,F=(E?O:T)*$,U=0,H=(A-F)/2):(F=E?M:A,j=(E?M:A)/$,H=0,U=(T-j)/2):q>$?(F=E?M:A,j=(E?M:A)/$,H=0,U=(T-j)/2):(j=E?O:T,F=(E?O:T)*$,U=0,H=(A-F)/2),this.__ytWrap.style.overflow="hidden";let X=this.__ytAx!=null?this.__ytAx:.5,te=this.__ytAy!=null?this.__ytAy:.5;H=((E?M:A)-F)*X,U=((E?O:T)-j)*te;let re=this.__ytWrap.querySelector("iframe")||this.__ytWrap;re.style.width=`${F}px`,re.style.height=`${j}px`,re.style.left=`${H}px`,re.style.top=`${U}px`}catch{}}_destroyYouTube_(){var t,i,n,o;let e=null;try{e=((t=this.__ytWrap)==null?void 0:t.parentNode)||null}catch{}try{(n=(i=this.__ytPlayer)==null?void 0:i.destroy)==null||n.call(i)}catch{}if(this.__ytPlayer=null,this.__ytResizeObs){try{this.__ytResizeObs.disconnect()}catch{}this.__ytResizeObs=null}this.__ytOnWinResize&&(window.removeEventListener("resize",this.__ytOnWinResize),this.__ytOnWinResize=null),(o=this.__ytWrap)!=null&&o.parentNode&&this.__ytWrap.parentNode.removeChild(this.__ytWrap);try{(e==null?void 0:e.id)==="ddcPageBgHost"&&(e.style.display="none")}catch{}this.__ytWrap=null,this.__ytBackgroundSignature=""}_evaluateVisibility_(e){try{let t=this.hass||this._hass;if(!Array.isArray(e)||e.length===0)return!0;let i=n=>{var c,l,g,u,m;if(!n||typeof n!="object")return!0;let o=n.condition||n.type||"state";if(o==="and"||o==="or"){let h=Array.isArray(n.conditions)?n.conditions:[];return h.length===0?!0:o==="and"?h.every(b=>i(b)):h.some(b=>i(b))}if(o==="state"){let h=n.entity;if(!h)return!0;let b=(c=t==null?void 0:t.states)==null?void 0:c[h];if(!b)return!1;let y=String((l=b.state)!=null?l:"");return n.state!==void 0?(Array.isArray(n.state)?n.state:[n.state]).some(A=>String(A)===y):n.state_not!==void 0?!(Array.isArray(n.state_not)?n.state_not:[n.state_not]).some(A=>String(A)===y):!0}if(o==="numeric_state"){let h=n.entity;if(!h)return!0;let b=(g=t==null?void 0:t.states)==null?void 0:g[h];if(!b)return!1;let y=parseFloat(b.state);return!(isNaN(y)||n.above!==void 0&&!(y>Number(n.above))||n.below!==void 0&&!(y<Number(n.below)))}if(o==="screen"){let h=n.media_query||n.query;if(!h||typeof h!="string")return!0;try{return window.matchMedia(h).matches}catch{return!0}}if(o==="user"){let h=Array.isArray(n.users)?n.users:n.user?[n.user]:[];if(!h.length)return!0;let b=((u=t==null?void 0:t.user)==null?void 0:u.id)||((m=t==null?void 0:t.user)==null?void 0:m.id)||null;return b?h.includes(b):!0}return!0};return e.every(n=>i(n))}catch(t){return console.warn("[ddc:visibility] evaluate error",t),!0}}_applyVisibility_(){var e;try{let t=((e=this.cardContainer)==null?void 0:e.children)||[];for(let i of t)!i||!i.firstElementChild||this._applyWrapDisplayState_(i)}catch(t){console.warn("[ddc:visibility] apply error",t)}}_shouldWrapDisplayForCurrentContext_(e){if(!e||!e.firstElementChild)return!1;let t=this._normalizeTabId(this.activeTab),i=e.dataset.tabId?this._normalizeTabId(e.dataset.tabId):this.defaultTab,n=!this.tabs||!this.tabs.length||i===t,o=this._isWrapVisibleForActiveLayers_(e);if(!n||!o)return!1;if(this.editMode)return!0;let l=(this._extractCardConfig(e.firstElementChild)||{}).visibility;return this._evaluateVisibility_(l)}_applyWrapDisplayState_(e,{clearSelectionOnHide:t=!1}={}){var c;if(!e)return{changed:!1,becameVisible:!1,becameHidden:!1,visible:!1};let i=!!this._shouldWrapDisplayForCurrentContext_(e),n=e.classList.contains("ddc-hidden")||e.style.display==="none"||e.inert===!0;if(i)e.style.display="",e.inert=!1,e.classList.remove("ddc-hidden");else if(e.style.display="none",e.inert=!0,e.classList.add("ddc-hidden"),e.classList.remove("ddc-selected"),t&&this._selectedWrap===e)try{(c=this._clearSelection)==null||c.call(this)}catch{}let o=e.classList.contains("ddc-hidden")||e.style.display==="none"||e.inert===!0;return{changed:n!==o,becameVisible:n&&!o,becameHidden:!n&&o,visible:!o}}_applyLayerVisibilityChange_(){var n,o,c,l,g;let e=((o=(n=this.cardContainer)==null?void 0:n.querySelectorAll)==null?void 0:o.call(n,".card-wrapper"))||[],t=!1,i=[];e.forEach(u=>{let m=this._applyWrapDisplayState_(u,{clearSelectionOnHide:!0});m.changed&&(t=!0),m.becameVisible&&i.push(u)});try{(c=this._renderLayersBar_)==null||c.call(this)}catch{}if(t){try{(l=this._animateCards_)==null||l.call(this,i)}catch{}try{(g=this._renderConnectors_)==null||g.call(this)}catch{}}}async _onKeyDown_(e){var c,l,g,u,m,h,b,y,_,A;if(!this.editMode||this._isTypingTarget_(e.target))return;let t=Number(this.gridSize||10),i=e.altKey?1:e.shiftKey?t*5:t,n=0,o=0;switch(e.key){case"ArrowLeft":n=-i;break;case"ArrowRight":n=i;break;case"ArrowUp":o=-i;break;case"ArrowDown":o=i;break}if(n||o){e.preventDefault(),this._moveSelectionBy_(n,o,{liveSnap:!e.altKey});return}if(e.key==="Delete"||e.key==="Backspace"){let T=this._selection&&this._selection.size?Array.from(this._selection):[];if(!T.length)return;e.preventDefault(),T.forEach(E=>E.remove()),(c=this._clearSelection)==null||c.call(this),(l=this._resizeContainer)==null||l.call(this),(g=this._queueSave)==null||g.call(this,"delete-key"),(u=this._ensurePlaceholderIfEmpty)==null||u.call(this);return}if((e.ctrlKey||e.metaKey)&&(e.key==="d"||e.key==="D")){e.preventDefault(),await this._duplicateSelection_();return}if((e.ctrlKey||e.metaKey)&&e.key==="]"){e.preventDefault(),this._selection&&((h=(m=this._selection).forEach)==null||h.call(m,T=>{var E;return(E=this._adjustZ)==null?void 0:E.call(this,T,1)})),(b=this._queueSave)==null||b.call(this,"z-up");return}if((e.ctrlKey||e.metaKey)&&e.key==="["){e.preventDefault(),this._selection&&((_=(y=this._selection).forEach)==null||_.call(y,T=>{var E;return(E=this._adjustZ)==null?void 0:E.call(this,T,-1)})),(A=this._queueSave)==null||A.call(this,"z-down");return}}async _duplicateSelection_(){var t,i,n,o,c,l,g,u,m,h,b,y;if(!this._selection||!this._selection.size)return;let e=Array.from(this._selection);for(let _ of e)try{let A=((t=this._extractCardConfig)==null?void 0:t.call(this,_.firstElementChild))||{},T=await((i=this._createCard)==null?void 0:i.call(this,A)),E=(n=this._makeWrapper)==null?void 0:n.call(this,T);if(!T||!E)continue;E.style.width=_.style.width,E.style.height=_.style.height;let M=Number(this.gridSize||10),O=(parseFloat(_.getAttribute("data-x"))||0)+M,C=(parseFloat(_.getAttribute("data-y"))||0)+M;(o=this._setCardPosition)==null||o.call(this,E,O,C);let $=(((c=this._highestZ)==null?void 0:c.call(this))||0)+1;E.style.zIndex=String(Math.max($,6));try{let q=(l=_.dataset)==null?void 0:l.tabId;q&&(E.dataset.tabId=q)}catch{}(g=this.cardContainer)==null||g.appendChild(E);try{(u=this._addTabSelectorToChip)==null||u.call(this,E,E.dataset.tabId)}catch{}try{(m=this._rebuildOnce)==null||m.call(this,E.firstElementChild)}catch{}try{(h=this._initCardInteract)==null||h.call(this,E)}catch{}}catch{}try{(b=this._resizeContainer)==null||b.call(this)}catch{}try{(y=this._queueSave)==null||y.call(this,"duplicate")}catch{}}_moveSelectionBy_(e,t,{liveSnap:i=!0}={}){var u,m,h,b,y;if(!this._selection||!this._selection.size)return;let n=Array.from(this._selection),o=Number(this.gridSize||10),c=(u=this._isContainerFixed)==null?void 0:u.call(this),l=((m=this._getContainerSize)==null?void 0:m.call(this))||{w:1/0,h:1/0},g=n.map(_=>{let A=parseFloat(_.getAttribute("data-x-raw"))||parseFloat(_.getAttribute("data-x"))||0,T=parseFloat(_.getAttribute("data-y-raw"))||parseFloat(_.getAttribute("data-y"))||0,E=parseFloat(_.style.width)||_.getBoundingClientRect().width,M=parseFloat(_.style.height)||_.getBoundingClientRect().height,O=A+e,C=T+t;c&&(O=Math.max(0,Math.min(O,Math.max(0,l.w-E))),C=Math.max(0,Math.min(C,Math.max(0,l.h-M))));let $=i?Math.round(O/o)*o:O,q=i?Math.round(C/o)*o:C;return{el:_,rawX:O,rawY:C,snapX:$,snapY:q,w:E,h:M}});if(this.disableOverlap&&typeof this._pushCardsOutOfTheWay=="function")try{this._pushCardsOutOfTheWay(g,e,t,i,o)}catch{}for(let _ of g){_.el.setAttribute("data-x-raw",String(_.rawX)),_.el.setAttribute("data-y-raw",String(_.rawY));try{(h=this._setCardPosition)==null||h.call(this,_.el,_.snapX,_.snapY)}catch{}}try{(b=this._resizeContainer)==null||b.call(this)}catch{}try{(y=this._queueSave)==null||y.call(this,"nudge")}catch{}}_syncTabsWidth_(){var e,t,i,n,o,c,l,g,u,m,h,b,y,_,A,T,E;try{if((e=this._syncTabsPlacement_)==null||e.call(this),(t=this._syncViewportPreviewUI_)==null||t.call(this),(i=this._syncLeftRailViewportPosition_)==null||i.call(this),String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"){(n=this._syncLeftRailViewportPosition_)==null||n.call(this);return}let O=this.tabsBar;if(!O)return;if((o=this._isExplicitViewportPreview_)!=null&&o.call(this)){O.style.width="",O.style.maxWidth="",O.style.marginInline="auto",(c=this._refreshTabsAlignment_)==null||c.call(this);return}try{let q=window.innerWidth||((l=document.documentElement)==null?void 0:l.clientWidth)||0;if(q&&q<=768){O.style.width="",O.style.maxWidth="",(g=this._refreshTabsAlignment_)==null||g.call(this),(u=this._syncLeftRailViewportPosition_)==null||u.call(this);return}}catch{}if(this.tabsPosition==="left"||this.tabsPosition==="top"||this.tabsPosition==="bottom"){O.style.width="",O.style.maxWidth="",O.style.marginInline=(m=this._getViewportPreviewPreset_)!=null&&m.call(this)?"auto":"",(h=this._refreshTabsAlignment_)==null||h.call(this),(b=this._syncLeftRailViewportPosition_)==null||b.call(this);return}let C=this.cardContainer||this.__scaleOuter;if(!C)return;let $=0;try{let q=C.getBoundingClientRect();$=q&&q.width?q.width:0}catch{}if($<=0&&this.__scaleOuter&&this.__scaleOuter!==C)try{let q=this.__scaleOuter.getBoundingClientRect();$=q&&q.width?q.width:0}catch{}if($>0){let F=((y=this._getViewportPreviewPreset_)==null?void 0:y.call(this))?Math.min($,((_=this._getEffectivePreviewWidth_)==null?void 0:_.call(this,$))||$):$;O.style.width=`${F}px`,O.style.maxWidth=`${F}px`}O.style.marginInline=(A=this._getViewportPreviewPreset_)!=null&&A.call(this)?"auto":"",(T=this._refreshTabsAlignment_)==null||T.call(this),(E=this._syncLeftRailViewportPosition_)==null||E.call(this)}catch{}}_syncTabsPlacement_(){var e,t,i,n,o;try{let c=this.tabsBar,l=this.rootEl,g=this.__scaleOuter||this.cardContainer;if(!c||!l||!g||g.parentNode!==l){(t=(e=l==null?void 0:l.classList)==null?void 0:e.toggle)==null||t.call(e,"ddc-tabs-left-layout",this.tabsPosition==="left"),(n=(i=l==null?void 0:l.classList)==null?void 0:i.toggle)==null||n.call(i,"ddc-tabs-bottom-layout",this.tabsPosition==="bottom");return}if((o=this._isExplicitViewportPreview_)!=null&&o.call(this)){g.nextSibling!==c&&l.insertBefore(c,g.nextSibling),l.classList.remove("ddc-tabs-left-layout"),l.classList.remove("ddc-tabs-bottom-layout");return}this.tabsPosition==="bottom"?g.nextSibling!==c&&l.insertBefore(c,g.nextSibling):c.nextSibling!==g&&l.insertBefore(c,g),l.classList.toggle("ddc-tabs-left-layout",this.tabsPosition==="left"),l.classList.toggle("ddc-tabs-bottom-layout",this.tabsPosition==="bottom")}catch{}}_syncLeftRailViewportPosition_(){var e,t,i,n,o,c,l;try{if(this.tabsPosition!=="left"){(t=(e=this.style)==null?void 0:e.removeProperty)==null||t.call(e,"--ddc-left-rail-left");return}let g=window.innerWidth||((i=document.documentElement)==null?void 0:i.clientWidth)||0;if(g&&g<=980){(o=(n=this.style)==null?void 0:n.removeProperty)==null||o.call(n,"--ddc-left-rail-left");return}let u=this.rootEl,m=this.tabsBar;if(!u||!m)return;let h=(c=u.getBoundingClientRect)==null?void 0:c.call(u);if(!h||!Number.isFinite(h.left))return;let b=getComputedStyle(this),y=((l=m.getBoundingClientRect)==null?void 0:l.call(m).width)||parseFloat(b.getPropertyValue("--ddc-left-rail-width"))||92,_=parseFloat(b.getPropertyValue("--ddc-left-gutter"))||0,A=g||h.left+h.width,T=_+y/2+12,E=A-y/2-12,M=h.left+y/2,O=Math.max(T,Math.min(E,M));this.style.setProperty("--ddc-left-rail-left",`${Math.round(O)}px`)}catch{}}_refreshTabsAlignment_(){try{let e=this.tabsBar;if(!e)return;if(e.style.justifyContent="",this.tabsPosition==="left"){e.style.justifyContent="flex-start";return}e.scrollWidth<=e.clientWidth?e.style.justifyContent="center":e.style.justifyContent="flex-start"}catch{}}_isTypingTarget_(e){var n,o,c,l;if(!e||e===window||e===document)return!1;let t=(n=e.closest)==null?void 0:n.call(e,'input, textarea, [contenteditable="true"], ha-textfield, mwc-textfield');if(!t)return!1;let i=((c=(o=t.tagName)==null?void 0:o.toLowerCase)==null?void 0:c.call(o))||"";return i==="input"||i==="textarea"||((l=t.hasAttribute)==null?void 0:l.call(t,"contenteditable"))}_scheduleReflowAndScale(){this.__reflowRAF||(this.__reflowRAF=requestAnimationFrame(()=>{var e,t,i;this.__reflowRAF=null;try{(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="dynamic"&&((e=this._resizeContainer)==null||e.call(this))}catch{}try{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(t=this._applyAutoFillNoScale)==null||t.call(this):(i=this._applyAutoScale)==null||i.call(this)}catch{}}))}__ddcBindPointerListeners(){if(!this.__ddcPtrBound){this.__ddcPtrBound=!0,this.__onDDCPointerDown=e=>{var t,i;try{if(e.button!==void 0&&e.button!==0)return;let n=((t=e.composedPath)==null?void 0:t.call(e))||[],o=null;for(let c of n)if(c&&c.classList&&c.classList.contains("card-wrapper")){o=c;break}if(!o)return;this.__ddcDragging=!0,this.__scaleOuter&&(this.__prevOverflow=this.__scaleOuter.style.overflow,this.__scaleOuter.style.overflow="visible"),(i=this._scheduleReflowAndScale)==null||i.call(this)}catch{}},this.__onDDCPointerMove=e=>{var t;try{if(!this.__ddcDragging)return;(t=this._scheduleReflowAndScale)==null||t.call(this)}catch{}},this.__onDDCPointerUp=e=>{var t,i;try{if(!this.__ddcDragging)return;this.__ddcDragging=!1,this.__scaleOuter&&(this.__scaleOuter.style.overflow=this.__prevOverflow||"");try{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(t=this._applyAutoFillNoScale)==null||t.call(this):(i=this._applyAutoScale)==null||i.call(this)}catch{}}catch{}};try{this.addEventListener("pointerdown",this.__onDDCPointerDown,{passive:!0})}catch{}try{this.addEventListener("pointermove",this.__onDDCPointerMove,{passive:!0})}catch{}try{window.addEventListener("pointerup",this.__onDDCPointerUp,{passive:!0})}catch{}try{window.addEventListener("pointercancel",this.__onDDCPointerUp,{passive:!0})}catch{}}}_renderEditToolbar_(){this.shadowRoot.querySelectorAll(".ddc-toolbar").forEach(h=>h.remove()),this._ensureToolbarStyles_();let e=document.createElement("div");e.className="ddc-toolbar";let t=document.createElement("div");t.className="ddc-t-group",t.append(this._mkBtn_("add_card","mdi:plus-box","Add card (A)","primary"),this._mkBtn_("snap_toggle","mdi:magnet","Toggle snap (G)"),this._mkBtn_("align_grid","mdi:grid","Align to grid"));let i=document.createElement("div");i.className="ddc-t-group";let n=document.createElement("div");n.className="ddc-t-status";let o=document.createElement("div");o.className="ddc-t-dot"+(this.__dirty?" dirty":"");let c=document.createElement("span");c.textContent=this.__dirty?"Unsaved changes":`Saved${this.__lastSavedAt?" \xB7 "+this.__lastSavedAt:""}`,n.append(o,c),i.appendChild(n);let l=document.createElement("div");l.className="ddc-t-group",l.append(this._mkBtn_("reload","mdi:refresh","Reload (R)","ghost"),this._mkBtn_("open_hads","mdi:alpha-h-box-outline","Open HACS/HADS","ghost"),this._mkBtn_("apply","mdi:content-save","Apply / Save (S)","primary"),this._mkBtn_("exit_edit","mdi:logout-variant","Exit edit (Esc)","danger"));let g=document.createElement("div");g.className="ddc-t-group ddc-t-row",g.append(t);let u=document.createElement("div");u.className="ddc-t-group ddc-t-row",u.append(i);let m=document.createElement("div");m.className="ddc-t-group ddc-t-row",m.append(l),e.append(g,document.createElement("div")).lastChild.className="ddc-t-sep",e.append(u,document.createElement("div")).lastChild.className="ddc-t-sep",e.append(m),e.addEventListener("click",h=>{let b=h.target.closest("[data-action]");b&&this._onToolbarAction_(b.dataset.action,{button:b,bar:e,dot:o,txt:c})}),this.shadowRoot.appendChild(e);try{this.__toolbarRO&&this.__toolbarRO.disconnect(),this.__toolbarRO=new ResizeObserver(h=>{for(let b of h)e.classList.toggle("compact",b.contentRect.width<980)}),this.__toolbarRO.observe(e)}catch{}this.__toolbarKeyHandler=h=>{if(!(!this.editMode&&!this.isEditing)){if(h.key==="a"||h.key==="A")return this._onToolbarAction_("add_card");if(h.key==="s"||h.key==="S")return this._onToolbarAction_("apply");if(h.key==="r"||h.key==="R")return this._onToolbarAction_("reload");if(h.key==="g"||h.key==="G")return this._onToolbarAction_("snap_toggle");if(h.key==="Escape")return this._onToolbarAction_("exit_edit")}},window.addEventListener("keydown",this.__toolbarKeyHandler)}async _onToolbarAction_(e,t={}){var i,n,o,c,l,g,u,m,h,b,y;switch(e){case"add_card":(i=this._openAddCardDialog_)!=null&&i.call(this)||(n=this._addNewCard_)!=null&&n.call(this)||((o=this._openEntityPicker_)==null||o.call(this));break;case"snap_toggle":{this.dragLiveSnap=!this.dragLiveSnap,(c=this._initInteract)==null||c.call(this),(l=this._toast_)==null||l.call(this,`Live snap ${this.dragLiveSnap?"ON":"OFF"}`);break}case"align_grid":(g=this._alignAllToGrid_)==null||g.call(this,this.gridSize);break;case"reload":(u=this._reloadLayout_)==null||u.call(this);break;case"open_hads":(m=this._openHACS_)!=null&&m.call(this)||window.open("/hacs","_blank")||window.open("/hacsfiles","_blank");break;case"apply":{let _=()=>{this._setDirty_(!1),t!=null&&t.txt&&(t.txt.textContent=`Saved \xB7 ${this.__lastSavedAt}`),t!=null&&t.dot&&t.dot.classList.remove("dirty","error")},A=()=>{t!=null&&t.dot&&t.dot.classList.add("error")};try{this._saveLayoutNow_?await this._saveLayoutNow_():this._persistThisCardConfigToStorage_?await this._persistThisCardConfigToStorage_():(h=this._queueSave)==null||h.call(this,"toolbar-apply",!0),this.__lastSavedAt=new Date().toLocaleTimeString(),_()}catch(T){console.warn(T),A()}break}case"exit_edit":if((b=this._toggleEditMode)!=null&&b.call(this,!1)||(y=this._exitEditMode_)!=null&&y.call(this)||(this.isEditing=!1),this.__toolbarKeyHandler&&(window.removeEventListener("keydown",this.__toolbarKeyHandler),this.__toolbarKeyHandler=null),this.__toolbarRO){try{this.__toolbarRO.disconnect()}catch{}this.__toolbarRO=null}this.shadowRoot.querySelectorAll(".ddc-toolbar").forEach(_=>_.remove());break}}_ensureScaleWrapper(){let e=this.cardContainer;if(!e||this.__scaleOuter&&this.__scaleOuter.contains(e))return;let t=document.createElement("div");t.className="ddc-scale-outer",Object.assign(t.style,{position:"relative",width:"100%",overflow:"hidden"}),e.parentNode&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),Object.assign(e.style,{position:"absolute",top:"0",left:"0",transformOrigin:"top left"}),this.__scaleOuter=t}_hasCardModDeep(e){try{if(!e||typeof e!="object")return!1;if(e.card_mod||e.type==="custom:mod-card")return!0;if(e.card)return this._hasCardModDeep(e.card);if(Array.isArray(e.cards)){for(let t of e.cards)if(this._hasCardModDeep(t))return!0}return!1}catch{return!1}}_rebuildOnce(e){try{if(!e||(this.__rebuiltCards||(this.__rebuiltCards=new WeakSet),this.__rebuiltCards.has(e)))return;this.__rebuiltCards.add(e),e.dispatchEvent(new Event("ll-rebuild",{bubbles:!0,composed:!0}))}catch{}}_deepQueryAll(e,t=document){let i=[],n=new WeakSet,o=new WeakSet,c=l=>{var m;if(!l||n.has(l))return;if(n.add(l),l.querySelectorAll)try{l.querySelectorAll(e).forEach(h=>{!h||o.has(h)||(o.add(h),i.push(h))})}catch{}let g=null;try{g=document.createTreeWalker(l,NodeFilter.SHOW_ELEMENT,null)}catch{}let u=l;for(;u;){let h=u.shadowRoot;h&&c(h);try{u=((m=g==null?void 0:g.nextNode)==null?void 0:m.call(g))||null}catch{break}}};return c(t),i}_syncEditorsStorageKey(){try{let e=this.storageKey||"";this._deepQueryAll("#storage_key").forEach(i=>{try{i&&i.tagName==="INPUT"&&i.value!==e&&(i.value=e,i.dispatchEvent(new Event("input",{bubbles:!0})),i.dispatchEvent(new Event("change",{bubbles:!0})))}catch{}})}catch{}}static _genKey(){var t,i;return`layout_${((i=(t=globalThis.crypto)==null?void 0:t.randomUUID)==null?void 0:i.call(t))||`${Date.now().toString(36)}_${Math.random().toString(36).slice(2,8)}`}`}static get type(){return"drag-and-drop-card"}static get title(){return"Drag & Drop Card"}static get description(){return"Flexible grid layout card with drag\u2011and\u2011drop editing."}static get icon(){return"mdi:cursor-move"}static get group(){return"custom"}static getStubConfig(){return{type:"custom:drag-and-drop-card",storage_key:this._genKey(),grid:20,drag_live_snap:!0,auto_save:!0,auto_save_debounce:800,container_size_mode:"auto",container_background:"linear-gradient(135deg, #1e3a8a, #0ea5e9)",card_background:"linear-gradient(135deg, #111827, #1f2937)",debug:!1,disable_overlap:!1,auto_resize_cards:!0,background_mode:"none",animate_cards:!0,optimize_for_mobile:!1,mobile_dynamic_behavior:"native",responsive_viewports:{desktop:{width:1430,height:896},tablet:{landscape:{width:1295,height:923},portrait:{width:923,height:1295}},mobile:{landscape:{width:1080,height:500},portrait:{width:500,height:1080}}},container_preset_orientation:"auto",edit_mode_pin:"",container_fixed_width:null,container_fixed_height:null,container_preset:"fullhd",card_shadow:!0,hide_HA_Header:!1,hide_HA_Sidebar:!1,screen_saver_enabled:!0,screen_saver_delay:15e5,tabs:[{id:"home",label:"Home",icon:"mdi:home",label_mode:"both"}],default_tab:"home",layers_enabled:!1,layers:[]}}static getConfigElement(){let e=document.createElement("div");e.style.display="grid",e.style.gridTemplateColumns="1fr",e.style.rowGap="12px";let t=document.createElement("ha-textfield");t.id="storage_key",t.label="Storage key",t.placeholder="Auto-generated if left blank",e.appendChild(t);let i=document.createElement("div");return i.style.fontSize="0.85rem",i.style.opacity="0.7",i.textContent="Unique key for saving layout positions. Leave blank to auto\u2011generate.",e.appendChild(i),e.setConfig=(h={})=>{var b;e._config={type:h.type||"custom:drag-and-drop-card",...h},e._config.storage_key||(e._config.storage_key=`layout_${((b=crypto==null?void 0:crypto.randomUUID)==null?void 0:b.call(crypto))||Date.now().toString(36)}`),t.value=e._config.storage_key||""},e.getConfig=()=>{let h={...e._config||{}};return h.type="custom:drag-and-drop-card",h.storage_key=t.value||"",h},t.addEventListener("input",()=>{e.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e.getConfig()}}))}),e;let n=()=>{let h=u();l.disabled=!h},o=async()=>{var b,y;let h=el.getConfig();el.dispatchEvent(new CustomEvent("config-changed",{detail:{config:h}})),n();try{if(this.storageKey){let _=this._exportableOptions?this._exportableOptions():h;await this._saveOptionsToBackend(this.storageKey,_)}}catch{}try{await this._persistThisCardConfigToStorage_()}catch{try{let A=this._exportableOptions?this._exportableOptions():h;await((b=this._persistOptionsToYaml)==null?void 0:b.call(this,A,{patchAllInCurrentViewIfNoKey:!0}))}catch{}}try{(y=this._applyBackgroundFromConfig)==null||y.call(this)}catch{}},c=()=>{var b,y,_,A;let h=(A=(_=(b=el.querySelector("#sizeMode"))==null?void 0:b.value)!=null?_:(y=el.querySelector("#ddc-setting-sizeMode"))==null?void 0:y.value)!=null?A:"dynamic";el.querySelector("#sizeCustom").style.display=h==="fixed_custom"?"inline-flex":"none",el.querySelector("#sizePresetWrap").style.display=h==="preset"?"inline-flex":"none"},l=el.querySelector("#applyBtn"),g=el.querySelector("#revertBtn");["#sizeMode","#sizePreset","#sizeOrientation"].forEach(h=>{let b=el.querySelector(h);if(b){try{b.fixedMenuPosition=!0}catch{}b.addEventListener("closed",y=>y.stopPropagation())}}),el.setConfig=(h={})=>{var _,A,T,E,M,O,C,$;el._config={type:h.type||"custom:drag-and-drop-card",...h},el._config.storage_key||(el._config.storage_key=`layout_${((_=crypto==null?void 0:crypto.randomUUID)==null?void 0:_.call(crypto))||Date.now().toString(36)}`,el.__autokeyPending=!0),el.querySelector("#storage_key").value=el._config.storage_key||"",el.querySelector("#grid").value=(A=el._config.grid)!=null?A:10,el.querySelector("#liveSnap").checked=!!el._config.drag_live_snap,el.querySelector("#autoSave").checked=el._config.auto_save!==!1,el.querySelector("#autoSaveDebounce").value=(T=el._config.auto_save_debounce)!=null?T:800,el.querySelector("#containerBg").value=(E=el._config.container_background)!=null?E:"transparent",el.querySelector("#cardBg").value=(M=el._config.card_background)!=null?M:"var(--ha-card-background, var(--card-background-color))",el.querySelector("#debug").checked=!!el._config.debug,el.querySelector("#noOverlap").checked=!!el._config.disable_overlap,el.querySelector("#autoResize").checked=!!el._config.auto_resize_cards,el.querySelector("#animateCards").checked=!!el._config.animate_cards;let b=el.querySelector("#sizeMode")||el.querySelector("#ddc-setting-sizeMode");b&&(b.value=el._config.container_size_mode||"dynamic"),el.querySelector("#sizeW").value=(O=el._config.container_fixed_width)!=null?O:"",el.querySelector("#sizeH").value=(C=el._config.container_fixed_height)!=null?C:"",el.querySelector("#sizeOrientation").value=el._config.container_preset_orientation||"auto";let y=el.querySelector("#sizePreset");if(!y.__filled){let q=((($=this._sizePresets)==null?void 0:$.call(this))||[]).reduce((F,j)=>{var H;return(F[H=j.group||"other"]||(F[H]=[])).push(j),F},{});y.innerHTML="";for(let[F,j]of Object.entries(q)){let H=document.createElement("optgroup");H.label=F.replace(/(^.|-.?)/g,X=>X.toUpperCase()),j.forEach(X=>{let te=document.createElement("mwc-list-item");te.value=X.key,te.textContent=`${X.label} (${X.w}\xD7${X.h})`,H.appendChild(te)});let U=document.createElement("mwc-list-item");U.setAttribute("disabled",""),U.textContent=`\u2014 ${H.label} \u2014`,y.appendChild(U),Array.from(H.children).forEach(X=>y.appendChild(X))}y.__filled=!0}el._config.container_preset&&(y.value=el._config.container_preset),c(),n(),el.__autokeyPending&&(el.__autokeyPending=!1,o())},el.getConfig=()=>{var b,y,_,A;let h={...el._config||{}};h.storage_key=el.querySelector("#storage_key").value||"",h.grid=Number(el.querySelector("#grid").value||10),h.drag_live_snap=!!el.querySelector("#liveSnap").checked,h.auto_save=!!el.querySelector("#autoSave").checked,h.auto_save_debounce=Number(el.querySelector("#autoSaveDebounce").value||800),h.container_background=el.querySelector("#containerBg").value||"transparent",h.card_background=el.querySelector("#cardBg").value||"var(--ha-card-background, var(--card-background-color))",h.debug=!!el.querySelector("#debug").checked,h.disable_overlap=!!el.querySelector("#noOverlap").checked,h.auto_resize_cards=!!el.querySelector("#autoResize").checked;try{let T=el.querySelector("#ddc-bg-mode"),E=el.querySelector("#ddc-setting-bgImg"),M=el.querySelector("#ddc-bg-repeat"),O=el.querySelector("#ddc-bg-size"),C=el.querySelector("#ddc-bg-position"),$=el.querySelector("#ddc-bg-attachment"),q=el.querySelector("#ddc-bg-opacity"),F=el.querySelector("#ddc-particles-url"),j=el.querySelector("#ddc-particles-pointer"),H=el.querySelector("#ddc-youtube-url"),U=el.querySelector("#ddc-youtube-start"),X=el.querySelector("#ddc-youtube-end"),te=el.querySelector("#ddc-youtube-mute"),re=el.querySelector("#ddc-youtube-loop"),le=el.querySelector("#ddc-youtube-size"),Le=el.querySelector("#ddc-youtube-position"),me=el.querySelector("#ddc-youtube-attachment"),de=el.querySelector("#ddc-youtube-opacity"),Ce=(T==null?void 0:T.value)||"none";h.background_mode=Ce;let ue=Se=>Math.max(0,Math.min(1,Se)),Ae=Se=>{let B=parseFloat((Se==null?void 0:Se.value)||"100");return Number.isFinite(B)?ue(B/100):1},ye=Se=>Object.fromEntries(Object.entries(Se).filter(([,B])=>B!=null&&B!==""));if(Ce==="image"){let Se=((E==null?void 0:E.value)||"").trim();h.background_image=ye({src:Se||void 0,repeat:(M==null?void 0:M.value)||"no-repeat",size:(O==null?void 0:O.value)||"cover",position:(C==null?void 0:C.value)||"center center",attachment:($==null?void 0:$.value)||"scroll",opacity:Ae(q)})}if(Ce==="particles"&&(h.background_particles=ye({config_url:((F==null?void 0:F.value)||"").trim()||void 0,pointer_events:!!(j!=null&&j.checked)})),Ce==="youtube"){let Se=B=>{let p=parseInt(((B==null?void 0:B.value)||"").trim(),10);return Number.isFinite(p)?p:void 0};h.background_youtube=ye({url:((H==null?void 0:H.value)||"").trim()||void 0,start:Se(U),end:Se(X),mute:!!(te!=null&&te.checked),loop:!!(re!=null&&re.checked),size:(le==null?void 0:le.value)||"cover",position:(Le==null?void 0:Le.value)||"center center",attachment:(me==null?void 0:me.value)||"scroll",opacity:Ae(de)})}Ce!=="image"&&delete h.background_image,Ce!=="particles"&&delete h.background_particles,Ce!=="youtube"&&delete h.background_youtube}catch{}return h.animate_cards=!!el.querySelector("#animateCards").checked,h.container_size_mode=(A=(_=(b=el.querySelector("#sizeMode"))==null?void 0:b.value)!=null?_:(y=el.querySelector("#ddc-setting-sizeMode"))==null?void 0:y.value)!=null?A:"dynamic",h.container_fixed_width=Number(el.querySelector("#sizeW").value||0)||void 0,h.container_fixed_height=Number(el.querySelector("#sizeH").value||0)||void 0,h.container_preset=el.querySelector("#sizePreset").value||void 0,h.container_preset_orientation=el.querySelector("#sizeOrientation").value||"auto",h};let u=()=>{let h=el.getConfig(),b=el._config||{};try{return JSON.stringify(h)!==JSON.stringify(b)}catch{return!0}},m=(h,b="input")=>{var y;return(y=el.querySelector(h))==null?void 0:y.addEventListener(b,()=>{h==="#sizeMode"&&c(),n()})};return m("#storage_key"),m("#grid"),m("#liveSnap","change"),m("#autoSave","change"),m("#autoSaveDebounce"),m("#containerBg"),m("#cardBg"),m("#debug","change"),m("#noOverlap","change"),m("#autoResize","change"),m("#animateCards","change"),m("#sizeMode","change"),m("#ddc-setting-sizeMode","change"),m("#sizeW"),m("#sizeH"),m("#sizePreset","selected"),m("#sizeOrientation","selected"),l==null||l.addEventListener("click",()=>{o()}),g==null||g.addEventListener("click",()=>el.setConfig(el._config)),el}static _sizePresets(){return[{key:"iphone-14-pro",label:"iPhone 14 Pro",w:393,h:852,group:"phone"},{key:"iphone-14-pro-max",label:"iPhone 14 Pro Max",w:430,h:932,group:"phone"},{key:"iphone-se-2",label:"iPhone SE (2/3rd gen)",w:375,h:667,group:"phone"},{key:"pixel-7",label:"Pixel 7",w:412,h:915,group:"phone"},{key:"galaxy-s8",label:"Galaxy S8",w:360,h:740,group:"phone"},{key:"galaxy-s20-ultra",label:"Galaxy S20 Ultra",w:412,h:915,group:"phone"},{key:"ipad-9-7",label:'iPad 9.7"',w:768,h:1024,group:"tablet"},{key:"ipad-11-pro",label:'iPad Pro 11"',w:834,h:1194,group:"tablet"},{key:"ipad-12-9-pro",label:'iPad Pro 12.9"',w:1024,h:1366,group:"tablet"},{key:"surface-go-3",label:"Surface Go 3",w:800,h:1280,group:"tablet"},{key:"hd",label:"HD",w:1366,h:768,group:"desktop"},{key:"wxga-plus",label:"WXGA+",w:1440,h:900,group:"desktop"},{key:"fhd",label:"Full HD",w:1920,h:1080,group:"desktop"},{key:"qhd",label:"2K / QHD",w:2560,h:1440,group:"desktop"},{key:"uhd-4k",label:"4K UHD",w:3840,h:2160,group:"desktop"}]}_cloneJson_(e){try{return JSON.parse(JSON.stringify(e))}catch{return e!=null?e:null}}_genLayoutCardId_(){var t,i;return`ddc_card_${((i=(t=globalThis.crypto)==null?void 0:t.randomUUID)==null?void 0:i.call(t))||`${Date.now().toString(36)}_${Math.random().toString(36).slice(2,10)}`}`}_responsiveProfileKeys_(){return["desktop","tablet","mobile"]}_responsiveLayoutVariantKeys_(){return["desktop_landscape","tablet_landscape","tablet_portrait","mobile_landscape","mobile_portrait"]}_defaultResponsivePreviewOrientations_(){return{desktop:"landscape",tablet:"landscape",mobile:"portrait"}}_normalizeResponsiveOrientation_(e="desktop",t=null){return e==="desktop"||String(t||"").toLowerCase()==="landscape"?"landscape":"portrait"}_getResponsiveLayoutKey_(e="desktop",t=null){let i=this._responsiveProfileKeys_().includes(e)?e:"desktop";return`${i}_${this._normalizeResponsiveOrientation_(i,t)}`}_splitResponsiveLayoutKey_(e="desktop_landscape"){let[t="desktop",i="landscape"]=String(e||"desktop_landscape").split("_"),n=this._responsiveProfileKeys_().includes(t)?t:"desktop",o=this._normalizeResponsiveOrientation_(n,i);return{profile:n,orientation:o,key:this._getResponsiveLayoutKey_(n,o)}}_getPrimaryResponsiveLayoutKey_(){return"desktop_landscape"}_ensureResponsivePreviewOrientations_(){let t={...this._defaultResponsivePreviewOrientations_(),...this._responsivePreviewOrientations||{}};return t.desktop="landscape",t.tablet=this._normalizeResponsiveOrientation_("tablet",t.tablet),t.mobile=this._normalizeResponsiveOrientation_("mobile",t.mobile),this._responsivePreviewOrientations=t,t}_getStoredResponsivePreviewOrientation_(e="desktop"){let t=this._ensureResponsivePreviewOrientations_();return this._normalizeResponsiveOrientation_(e,t==null?void 0:t[e])}_setStoredResponsivePreviewOrientation_(e="desktop",t=null){let i=this._ensureResponsivePreviewOrientations_(),n=this._normalizeResponsiveOrientation_(e,t);return this._responsivePreviewOrientations={...i,[e]:n},n}_defaultResponsiveViewportProfiles_(){return{desktop_landscape:{width:1430,height:896},tablet_landscape:{width:1295,height:923},tablet_portrait:{width:923,height:1295},mobile_landscape:{width:1080,height:500},mobile_portrait:{width:500,height:1080}}}_getDefaultResponsiveViewportProfile_(e="desktop",t=null){let i=this._defaultResponsiveViewportProfiles_();return i[this._getResponsiveLayoutKey_(e,t)]||i[this._getPrimaryResponsiveLayoutKey_()]}_normalizeResponsiveViewportProfiles_(e=null){let t=e&&typeof e=="object"?e:{},i={},n=(o,c)=>{let l=this._getResponsiveLayoutKey_(o,c),g=t==null?void 0:t[l];if(g&&typeof g=="object")return g;let u=t==null?void 0:t[o];if(u&&typeof u=="object"){let m=u==null?void 0:u[c];if(m&&typeof m=="object")return m;if(Number.isFinite(Number(u.width))||Number.isFinite(Number(u.height)))return u}return null};return this._responsiveLayoutVariantKeys_().forEach(o=>{var h,b;let{profile:c,orientation:l}=this._splitResponsiveLayoutKey_(o),g=this._getDefaultResponsiveViewportProfile_(c,l),u=n(c,l)||g,m=this._getLockedResponsiveViewportProfile_(c,{width:Number((h=u==null?void 0:u.width)!=null?h:g.width)||g.width,height:Number((b=u==null?void 0:u.height)!=null?b:g.height)||g.height},"width",l);i[o]={width:m.width,height:m.height}}),i}_legacyResponsiveViewportProfiles_(){return{desktop:{width:1440,height:900},tablet:{width:834,height:1194},mobile:{width:390,height:844}}}_isLegacyResponsiveViewportProfiles_(e=null){try{if(!e||typeof e!="object"||this._responsiveLayoutVariantKeys_().some(i=>Object.prototype.hasOwnProperty.call(e,i)))return!1;let t=this._legacyResponsiveViewportProfiles_();return this._responsiveProfileKeys_().every(i=>{let n=(e==null?void 0:e[i])||{},o=(t==null?void 0:t[i])||{};return Number(n.width)===Number(o.width)&&Number(n.height)===Number(o.height)})}catch{return!1}}_lockResponsiveViewportValue_(e=0){return Math.max(240,Math.min(6e3,Math.round(Number(e||0)||0)))}_getLockedResponsiveViewportProfile_(e="desktop",t=null,i="width",n=null){var y;let o=this._splitResponsiveLayoutKey_(e),c=this._responsiveProfileKeys_().includes(e)?e:o.profile,l=this._normalizeResponsiveOrientation_(c,n!=null?n:o.orientation),g=this._getDefaultResponsiveViewportProfile_(c,l),u=t||g||{},m=this._lockResponsiveViewportValue_(u.width||g.width||0),h=this._lockResponsiveViewportValue_(u.height||g.height||0);m||(m=g.width||390),h||(h=g.height||844),l==="landscape"&&h>m&&([m,h]=[h,m]),l==="portrait"&&m>h&&([m,h]=[h,m]);let b=(y=this._getPreviewDeviceFrameLock_)==null?void 0:y.call(this,c,m,h,{orientation:l});return b!=null&&b.ratio&&(i==="height"?m=this._lockResponsiveViewportValue_(h*b.ratio):h=this._lockResponsiveViewportValue_(m/b.ratio)),l==="landscape"&&h>m&&([m,h]=[h,m]),l==="portrait"&&m>h&&([m,h]=[h,m]),{width:m,height:h,orientation:(b==null?void 0:b.orientation)||l,ratio:(b==null?void 0:b.ratio)||null}}_ensureResponsiveViewportProfileLock_(e="desktop",t="width",i=null){var u,m;if(!this._responsiveProfileKeys_().includes(e))return null;let n=this._normalizeResponsiveOrientation_(e,i!=null?i:(u=this._getRequestedResponsiveOrientation_)==null?void 0:u.call(this,e)),o=this._getResponsiveLayoutKey_(e,n),c=((m=this._normalizeResponsiveViewportProfiles_(this.responsiveViewportProfiles))==null?void 0:m[o])||{},l=this._getLockedResponsiveViewportProfile_(e,c,t,n);if(Number(c.width)!==Number(l.width)||Number(c.height)!==Number(l.height)){let h=this._normalizeResponsiveViewportProfiles_({...this.responsiveViewportProfiles||{},[o]:{width:l.width,height:l.height}});this.responsiveViewportProfiles=h,this._config={...this._config||{},responsive_viewports:this._cloneJson_(this._serializeResponsiveViewportProfiles_(h))}}return l}_getResponsiveViewportProfile_(e="desktop",t=null){var g,u;let i=this._normalizeResponsiveViewportProfiles_(this.responsiveViewportProfiles),n=this._splitResponsiveLayoutKey_(e),o=this._responsiveProfileKeys_().includes(e)?e:n.profile,c=this._normalizeResponsiveOrientation_(o,(u=t!=null?t:n.orientation)!=null?u:(g=this._getRequestedResponsiveOrientation_)==null?void 0:g.call(this,o)),l=this._getResponsiveLayoutKey_(o,c);return this._getLockedResponsiveViewportProfile_(o,i[l]||i[this._getPrimaryResponsiveLayoutKey_()],"width",c)}_serializeResponsiveViewportProfiles_(e=null){let t=this._normalizeResponsiveViewportProfiles_(e||this.responsiveViewportProfiles);return{desktop:{landscape:this._cloneJson_(t.desktop_landscape)},tablet:{landscape:this._cloneJson_(t.tablet_landscape),portrait:this._cloneJson_(t.tablet_portrait)},mobile:{landscape:this._cloneJson_(t.mobile_landscape),portrait:this._cloneJson_(t.mobile_portrait)}}}_normalizeSavedCardEntry_(e={},t=null){var E,M,O,C,$,q,F,j,H,U,X,te,re,le,Le,me,de,Ce;let i=this._cloneJson_(e)||{},n=t||{},o=14*Math.max(1,Number(this.gridSize||10)||10),c=10*Math.max(1,Number(this.gridSize||10)||10),l=i.id||n.id||this._genLayoutCardId_(),g=Number((C=(O=(E=i==null?void 0:i.position)==null?void 0:E.x)!=null?O:(M=n==null?void 0:n.position)==null?void 0:M.x)!=null?C:0)||0,u=this._clampYToCanvasTop_(Number((j=(F=($=i==null?void 0:i.position)==null?void 0:$.y)!=null?F:(q=n==null?void 0:n.position)==null?void 0:q.y)!=null?j:0)||0),m=Math.max(1,Number((te=(X=(H=i==null?void 0:i.size)==null?void 0:H.width)!=null?X:(U=n==null?void 0:n.size)==null?void 0:U.width)!=null?te:o)||o),h=Math.max(1,Number((me=(Le=(re=i==null?void 0:i.size)==null?void 0:re.height)!=null?Le:(le=n==null?void 0:n.size)==null?void 0:le.height)!=null?me:c)||c),b=Number((Ce=(de=i==null?void 0:i.z)!=null?de:n==null?void 0:n.z)!=null?Ce:6),y=Number.isFinite(b)?Math.max(1,Math.round(b)):6,_=this._normalizeTabId(i.tabId||i.tab_id||n.tabId||n.tab_id||this.defaultTab),A=this._normalizeCardLayerIds_(i.layerIds||i.layer_ids||n.layerIds||n.layer_ids||[]),T={...i,id:l,position:{x:g,y:u},size:{width:m,height:h},z:y,tabId:_};return A.length?T.layerIds=A:(delete T.layerIds,delete T.layer_ids),!T.card&&n.card&&(T.card=this._cloneJson_(n.card)),!T.card_style&&n.card_style&&(T.card_style=this._cloneJson_(n.card_style)),!T.cardStyle&&n.cardStyle&&(T.cardStyle=this._cloneJson_(n.cardStyle)),!T.overflow&&n.overflow&&(T.overflow=n.overflow),T}_normalizeResponsiveLayouts_(e=[],t=null){let i=this._responsiveLayoutVariantKeys_(),n=Array.isArray(e)?e:[],o=t||{},c={},l=(h,b)=>{let y=this._getResponsiveLayoutKey_(h,b),_=o==null?void 0:o[y];if(Array.isArray(_))return _;if(Array.isArray(_==null?void 0:_.cards))return _.cards;let A=o==null?void 0:o[h],T=A==null?void 0:A[b];return Array.isArray(T)?T:Array.isArray(T==null?void 0:T.cards)?T.cards:Array.isArray(A)?A:Array.isArray(A==null?void 0:A.cards)?A.cards:null},g=(h,b,y=[])=>{let _=this._getResponsiveLayoutKey_(h,b),A=l(h,b),T=Array.isArray(A)&&A.length?A:y.map(E=>c==null?void 0:c[E]).find(E=>Array.isArray(E)&&E.length)||c[this._getPrimaryResponsiveLayoutKey_()]||n;c[_]=(Array.isArray(T)?T:[]).map(E=>{var O,C;let M=((C=(O=c[this._getPrimaryResponsiveLayoutKey_()])==null?void 0:O.find)==null?void 0:C.call(O,$=>$.id===(E==null?void 0:E.id)))||null;return this._normalizeSavedCardEntry_(E,M)})},u=l("desktop","landscape")||n;c.desktop_landscape=u.map(h=>this._normalizeSavedCardEntry_(h)),g("tablet","landscape",["tablet_portrait","desktop_landscape"]),g("tablet","portrait",["tablet_landscape","desktop_landscape"]),g("mobile","landscape",["mobile_portrait","desktop_landscape"]),g("mobile","portrait",["mobile_landscape","desktop_landscape"]);let m=new Set;return i.forEach(h=>{(c[h]||[]).forEach(b=>m.add(b.id))}),i.forEach(h=>{let b=new Map((c[h]||[]).map(y=>[y.id,y]));m.forEach(y=>{if(b.has(y))return;let _=i.map(A=>{var T,E;return(E=(T=c[A])==null?void 0:T.find)==null?void 0:E.call(T,M=>M.id===y)}).find(Boolean);_&&b.set(y,this._normalizeSavedCardEntry_(_,_))}),c[h]=Array.from(b.values())}),c}_serializeResponsiveLayouts_(e=null,t=null){let i=this._normalizeResponsiveLayouts_(t||[],e||this._responsiveLayouts),n=i.desktop_landscape||t||[],o=i.tablet_landscape||n,c=i.tablet_portrait||o,l=i.mobile_landscape||n,g=i.mobile_portrait||l;return{desktop:{cards:this._cloneJson_(n),landscape:{cards:this._cloneJson_(n)}},tablet:{cards:this._cloneJson_(o),landscape:{cards:this._cloneJson_(o)},portrait:{cards:this._cloneJson_(c)}},mobile:{cards:this._cloneJson_(l),landscape:{cards:this._cloneJson_(l)},portrait:{cards:this._cloneJson_(g)}}}}_normalizeLayerId_(e,t="layer"){return String(e!=null?e:"").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/-+/g,"-").replace(/^-+|-+$/g,"")||t}_defaultDashboardLayer_(){return{id:"standard",label:"Standard",icon:"mdi:layers-outline",color:"#60a5fa",default_active:!0}}_normalizeDashboardLayers_(e=[]){let t=Array.isArray(e)?e:[],i=new Set;return t.map((n,o)=>{if(!n||typeof n!="object")return null;let c=`layer-${o+1}`,l=this._normalizeLayerId_(n.id||n.layer_id||n.label||n.name||c,c),g=2;for(;i.has(l);)l=`${this._normalizeLayerId_(l,c)}-${g++}`;i.add(l);let u=String(n.label||n.name||l).trim()||l,m=String(n.icon||"mdi:layers-outline").trim()||"mdi:layers-outline",h=String(n.color||"#60a5fa").trim()||"#60a5fa";return{...this._cloneJson_(n),id:l,label:u,icon:m,color:h,default_active:n.default_active!==!1}}).filter(Boolean)}_normalizeCardLayerIds_(e=[]){let t=Array.isArray(e)?e:String(e!=null?e:"").split(",").map(c=>c.trim()).filter(Boolean),i=new Set((Array.isArray(this.layers)?this.layers:[]).map(c=>c.id)),n=i.size>0,o=[];return t.forEach((c,l)=>{let g=this._normalizeLayerId_(c,`layer-${l+1}`);g&&(n&&!i.has(g)||o.includes(g)||o.push(g))}),o}_getDefaultActiveLayerIds_(){let e=Array.isArray(this.layers)?this.layers:[];if(!e.length)return[];let t=e.filter(i=>i.default_active!==!1).map(i=>i.id);return t.length?t:e.map(i=>i.id)}_getStoredActiveLayerIds_(){if(!this.layersEnabled)return null;try{let e=localStorage.getItem(`ddc_layers_${this.storageKey||"default"}`);if(!e)return null;let t=JSON.parse(e);return Array.isArray(t)?this._normalizeCardLayerIds_(t):null}catch{return null}}_persistActiveLayerIds_(){try{localStorage.setItem(`ddc_layers_${this.storageKey||"default"}`,JSON.stringify(Array.isArray(this.activeLayerIds)?this.activeLayerIds:[]))}catch{}}_setDashboardLayers_(e=[],{refresh:t=!0,persist:i=!0}={}){var u,m,h,b;let n=this._normalizeDashboardLayers_(e);this.layersEnabled&&!n.length&&(n=this._normalizeDashboardLayers_([this._defaultDashboardLayer_()])),this.layers=n;let o=new Set(n.map(y=>y.id)),c=this._getStoredActiveLayerIds_(),l=Array.isArray(this.activeLayerIds)?this.activeLayerIds.filter(y=>o.has(y)):[],g=c&&c.filter(y=>o.has(y)).length?c.filter(y=>o.has(y)):l.length?l:this._getDefaultActiveLayerIds_();return this.activeLayerIds=g,i&&this._persistActiveLayerIds_(),(u=this._sanitizeResponsiveLayoutLayerMembership_)==null||u.call(this),t&&((m=this._renderLayersBar_)==null||m.call(this),(h=this._applyActiveTab)==null||h.call(this),(b=this._applyVisibility_)==null||b.call(this)),n}_setActiveLayerIds_(e=[],{persist:t=!0,refresh:i=!0}={}){var c,l,g;if(!this.layersEnabled)return this.activeLayerIds=[],t&&this._persistActiveLayerIds_(),i&&((c=this._renderLayersBar_)==null||c.call(this),(l=this._applyLayerVisibilityChange_)==null||l.call(this)),[];let n=new Set((Array.isArray(this.layers)?this.layers:[]).map(u=>u.id)),o=this._normalizeCardLayerIds_(e).filter(u=>n.has(u));return this.activeLayerIds=o,t&&this._persistActiveLayerIds_(),i&&((g=this._applyLayerVisibilityChange_)==null||g.call(this)),o}_getWrapperLayerIds_(e){if(!e)return[];let t=e.dataset.layerIds;if(!t)return[];try{return this._normalizeCardLayerIds_(JSON.parse(t))}catch{return this._normalizeCardLayerIds_(t)}}_setWrapperLayerIds_(e,t=[]){if(!e)return[];let i=this._normalizeCardLayerIds_(t);return i.length?e.dataset.layerIds=JSON.stringify(i):delete e.dataset.layerIds,i}_isWrapVisibleForActiveLayers_(e){if(!this.layersEnabled)return!0;let t=this._getWrapperLayerIds_(e);if(!t.length)return!0;let i=Array.isArray(this.activeLayerIds)?this.activeLayerIds:[];return i.length?t.some(n=>i.includes(n)):!1}_sanitizeResponsiveLayoutLayerMembership_(){if(!this._responsiveLayouts)return;this._responsiveLayoutVariantKeys_().forEach(t=>{var n;let i=Array.isArray((n=this._responsiveLayouts)==null?void 0:n[t])?this._responsiveLayouts[t]:[];this._responsiveLayouts[t]=i.map(o=>this._normalizeSavedCardEntry_(o,o))})}_renderLayersBar_(){let e=this.layersBar;if(!e)return;let t=Array.isArray(this.layers)?this.layers:[];if(!this.layersEnabled||!t.length){e.style.display="none",e.innerHTML="";return}e.style.display="",e.className="ddc-layers",e.innerHTML="";let i=Array.isArray(this.activeLayerIds)?this.activeLayerIds:[],n=document.createElement("button");n.type="button",n.className=`ddc-layer-btn ${i.length===t.length?"active":""}`.trim(),n.innerHTML='<ha-icon icon="mdi:layers-triple-outline"></ha-icon><span>All</span>',n.title="Show all layers",n.addEventListener("click",()=>{this._setActiveLayerIds_(t.map(o=>o.id))}),e.appendChild(n),t.forEach(o=>{let c=document.createElement("button");c.type="button",c.className=`ddc-layer-btn ${i.includes(o.id)?"active":""}`.trim(),c.dataset.layerId=o.id,c.title=o.label||o.id,c.style.setProperty("--ddc-layer-accent",o.color||"#60a5fa"),c.innerHTML=`${o.icon?`<ha-icon icon="${o.icon}"></ha-icon>`:""}<span>${o.label||o.id}</span>`,c.addEventListener("click",()=>{let l=new Set(Array.isArray(this.activeLayerIds)?this.activeLayerIds:[]);l.has(o.id)?l.delete(o.id):l.add(o.id),this._setActiveLayerIds_(Array.from(l))}),e.appendChild(c)})}_defaultConnectorConfig_(){return{entity:"",active_states:"on,home,open,playing,charging,active,>0",arrows:"end",flow_direction:"auto",line_style:"solid",thickness:10,animate_mode:"active",animation_speed:1.8,active_color:"var(--primary-color, #ff9800)",inactive_color:"rgba(148, 163, 184, 0.42)",glow:!0,rounded:!0}}_normalizeConnectorPoint_(e={},t=null){var c,l,g,u;let i=e||t||{},n=Number((l=(c=i.x)!=null?c:t==null?void 0:t.x)!=null?l:0)||0,o=Number((u=(g=i.y)!=null?g:t==null?void 0:t.y)!=null?u:0)||0;return{x:n,y:o}}_normalizeConnectorEntry_(e={},t=null){var b;let i=this._cloneJson_(e)||{},n=t||{},o=this._defaultConnectorConfig_(),c=String(i.id||n.id||`connector_${((b=crypto==null?void 0:crypto.randomUUID)==null?void 0:b.call(crypto))||Math.random().toString(36).slice(2)}`),l=this._normalizeTabId(i.tabId||i.tab_id||n.tabId||n.tab_id||this.activeTab||this.defaultTab),g=Array.isArray(i.points)&&i.points.length?i.points:Array.isArray(n.points)?n.points:[],u=g.map((y,_)=>this._normalizeConnectorPoint_(y,g[_])).filter(y=>Number.isFinite(y.x)&&Number.isFinite(y.y)),m=u.length>=2?u:[this._normalizeConnectorPoint_(u[0]||{x:0,y:0}),this._normalizeConnectorPoint_(u[1]||u[0]||{x:this.gridSize*6,y:0},{x:this.gridSize*6,y:0})],h={...o,...n,...i,id:c,tabId:l,points:m};return h.thickness=Math.max(2,Math.min(28,Number(h.thickness)||o.thickness)),h.animation_speed=Math.max(.4,Math.min(8,Number(h.animation_speed)||o.animation_speed)),h.entity=String(h.entity||"").trim(),h.active_states=String(h.active_states||o.active_states).trim(),h.arrows=["none","start","end","both"].includes(String(h.arrows||"").toLowerCase())?String(h.arrows).toLowerCase():o.arrows,h.flow_direction=["auto","forward","reverse"].includes(String(h.flow_direction||"").toLowerCase())?String(h.flow_direction).toLowerCase():o.flow_direction,h.line_style=["solid","dashed","dotted"].includes(String(h.line_style||"").toLowerCase())?String(h.line_style).toLowerCase():o.line_style,h.animate_mode=["never","active","always"].includes(String(h.animate_mode||"").toLowerCase())?String(h.animate_mode).toLowerCase():o.animate_mode,h.glow=h.glow!==!1,h.rounded=h.rounded!==!1,h}_normalizeResponsiveConnectorLayouts_(e=[],t=null){let i=this._responsiveLayoutVariantKeys_(),n=Array.isArray(e)?e:[],o=t||{},c={},l=(m,h)=>{let b=this._getResponsiveLayoutKey_(m,h),y=o==null?void 0:o[b];if(Array.isArray(y))return y;if(Array.isArray(y==null?void 0:y.connectors))return y.connectors;let _=o==null?void 0:o[m],A=_==null?void 0:_[h];return Array.isArray(A)?A:Array.isArray(A==null?void 0:A.connectors)?A.connectors:Array.isArray(_)?_:Array.isArray(_==null?void 0:_.connectors)?_.connectors:null},g=(m,h,b=[])=>{let y=this._getResponsiveLayoutKey_(m,h),_=l(m,h),A=Array.isArray(_)&&_.length?_:b.map(T=>c==null?void 0:c[T]).find(T=>Array.isArray(T)&&T.length)||c[this._getPrimaryResponsiveLayoutKey_()]||n;c[y]=(Array.isArray(A)?A:[]).map(T=>{var M,O;let E=((O=(M=c[this._getPrimaryResponsiveLayoutKey_()])==null?void 0:M.find)==null?void 0:O.call(M,C=>C.id===(T==null?void 0:T.id)))||null;return this._normalizeConnectorEntry_(T,E)})},u=l("desktop","landscape")||n;return c.desktop_landscape=u.map(m=>this._normalizeConnectorEntry_(m)),g("tablet","landscape",["tablet_portrait","desktop_landscape"]),g("tablet","portrait",["tablet_landscape","desktop_landscape"]),g("mobile","landscape",["mobile_portrait","desktop_landscape"]),g("mobile","portrait",["mobile_landscape","desktop_landscape"]),i.forEach(m=>{c[m]=(c[m]||[]).map(h=>this._normalizeConnectorEntry_(h))}),c}_serializeResponsiveConnectorLayouts_(e=null,t=null){let i=this._normalizeResponsiveConnectorLayouts_(t||[],e||this._responsiveConnectors),n=i.desktop_landscape||t||[],o=i.tablet_landscape||n,c=i.tablet_portrait||o,l=i.mobile_landscape||n,g=i.mobile_portrait||l;return{desktop:{connectors:this._cloneJson_(n),landscape:{connectors:this._cloneJson_(n)}},tablet:{connectors:this._cloneJson_(o),landscape:{connectors:this._cloneJson_(o)},portrait:{connectors:this._cloneJson_(c)}},mobile:{connectors:this._cloneJson_(l),landscape:{connectors:this._cloneJson_(l)},portrait:{connectors:this._cloneJson_(g)}}}}_syncConnectorLayoutsToConfig_(){var e,t,i;try{this._config||(this._config={});let n=this._serializeResponsiveConnectorLayouts_(this._responsiveConnectors);this._config.connectors=this._cloneJson_(((t=(e=n==null?void 0:n.desktop)==null?void 0:e.landscape)==null?void 0:t.connectors)||((i=n==null?void 0:n.desktop)==null?void 0:i.connectors)||[]),this._config.responsive_connectors=this._cloneJson_(n)}catch(n){console.warn("[ddc] Failed to sync connector layouts to config",n)}}_getCurrentConnectorLayoutKey_(){var e;return this._activeResponsiveLayoutKey||((e=this._getRequestedResponsiveLayoutKey_)==null?void 0:e.call(this))||this._getPrimaryResponsiveLayoutKey_()}_getCurrentConnectorEntries_(){var t,i;this._responsiveConnectors||(this._responsiveConnectors=this._normalizeResponsiveConnectorLayouts_(((t=this._config)==null?void 0:t.connectors)||[],((i=this._config)==null?void 0:i.responsive_connectors)||null));let e=this._getCurrentConnectorLayoutKey_();return Array.isArray(this._responsiveConnectors[e])||(this._responsiveConnectors[e]=[]),this._responsiveConnectors[e]}_setCurrentConnectorEntries_(e,{reason:t="connector-change",render:i=!0}={}){var o,c,l,g,u;this._responsiveConnectors||(this._responsiveConnectors=this._normalizeResponsiveConnectorLayouts_(((o=this._config)==null?void 0:o.connectors)||[],((c=this._config)==null?void 0:c.responsive_connectors)||null));let n=this._getCurrentConnectorLayoutKey_();return this._responsiveConnectors[n]=(Array.isArray(e)?e:[]).map(m=>this._normalizeConnectorEntry_(m)),(l=this._syncConnectorLayoutsToConfig_)==null||l.call(this),i&&((g=this._renderConnectors_)==null||g.call(this)),t&&((u=this._queueSave)==null||u.call(this,t)),this._responsiveConnectors[n]}_updateCurrentConnectorEntries_(e,{reason:t="connector-change",render:i=!0}={}){let n=this._cloneJson_(this._getCurrentConnectorEntries_())||[],o=typeof e=="function"?e(n):e;return this._setCurrentConnectorEntries_(Array.isArray(o)?o:n,{reason:t,render:i})}_slugifyPackageToken_(e,t="package"){return String(e!=null?e:"").trim().toLowerCase().replace(/\.ya?ml$/i,"").replace(/[^a-z0-9_-]+/g,"_").replace(/^_+|_+$/g,"")||t}_normalizeDashboardPackages_(e=[]){if(!Array.isArray(e))return[];let t=new Set;return e.map((i,n)=>{var y,_,A;if(!i||typeof i!="object")return null;let o=i.id||i.package_id||`package_${n+1}`,c=String(o).trim()||`package_${n+1}`,l=i.name||i.title||i.filename||c,g=String(l).trim()||c,u=this._slugifyPackageToken_(i.filename||g||c,`package_${n+1}`),m=`${u}.yaml`,h=2;for(;t.has(m);)m=`${u}_${h++}.yaml`;t.add(m);let b=String((A=(_=(y=i.yaml)!=null?y:i.content)!=null?_:i.body)!=null?A:"").replace(/\r\n/g,`
`);return{...this._cloneJson_(i),id:c,name:g,filename:m,yaml:b,enabled:i.enabled!==!1}}).filter(Boolean)}_setDashboardPackages_(e=[]){return this._dashboardPackages=this._normalizeDashboardPackages_(e),this._dashboardPackages}_exportDashboardPackages_(){return this._cloneJson_(this._normalizeDashboardPackages_(this._dashboardPackages))}_captureCurrentLayoutEntries_(){return this.cardContainer?Array.from(this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)")).map(e=>{let t=parseFloat(e.getAttribute("data-x"))||0,i=parseFloat(e.getAttribute("data-y"))||0,n=parseFloat(e.style.width)||e.getBoundingClientRect().width,o=parseFloat(e.style.height)||e.getBoundingClientRect().height,c=parseInt(e.style.zIndex||"1",10),l=this._extractCardConfig(e.firstElementChild),g=e.dataset.tabId||this.defaultTab,u=e.style.overflow&&e.style.overflow!==""?e.style.overflow:null,m=this._getWrapperLayerIds_(e),h={id:e.dataset.layoutCardId||this._genLayoutCardId_(),card:l,position:{x:t,y:i},size:{width:n,height:o},z:c,tabId:g};m.length&&(h.layerIds=m);let b=this._extractPerCardStyle_(e);return Object.keys(b).length&&(h.card_style=b),u&&(h.overflow=u),h}):[]}_syncResponsiveLayoutMembership_(e=null){var l,g;if(!this._responsiveLayouts)return;let t=this._responsiveLayoutVariantKeys_(),i=t.includes(e)?e:this._activeResponsiveLayoutKey||((l=this._getRequestedResponsiveLayoutKey_)==null?void 0:l.call(this))||this._getPrimaryResponsiveLayoutKey_(),n=Array.isArray((g=this._responsiveLayouts)==null?void 0:g[i])?this._responsiveLayouts[i]:[],o=new Set(n.map(u=>u.id)),c=new Map(n.map(u=>[u.id,u]));t.forEach(u=>{var b;if(u===i)return;let h=(Array.isArray((b=this._responsiveLayouts)==null?void 0:b[u])?this._responsiveLayouts[u]:[]).filter(y=>o.has(y.id)).map(y=>this._normalizeSavedCardEntry_(y,c.get(y.id)));n.forEach(y=>{h.some(_=>_.id===y.id)||h.push(this._normalizeSavedCardEntry_(y,y))}),this._responsiveLayouts[u]=h})}_persistCurrentResponsiveProfileToMemory_({syncMembership:e=!0}={}){var i;if(this._loading||!this.cardContainer||!this._responsiveLayouts&&!this.cardContainer.querySelector(".card-wrapper:not(.ddc-placeholder)"))return;let t=this._activeResponsiveLayoutKey||((i=this._getRequestedResponsiveLayoutKey_)==null?void 0:i.call(this))||this._getPrimaryResponsiveLayoutKey_();t&&(this._responsiveLayouts||(this._responsiveLayouts=this._normalizeResponsiveLayouts_(this._captureCurrentLayoutEntries_(),null)),this._responsiveLayouts[t]=this._captureCurrentLayoutEntries_(),e&&this._syncResponsiveLayoutMembership_(t))}_getRealViewportMetrics_(){var n,o;let e=window.visualViewport,t=Math.max(1,Math.round((e==null?void 0:e.width)||window.innerWidth||((n=document.documentElement)==null?void 0:n.clientWidth)||1)),i=Math.max(1,Math.round((e==null?void 0:e.height)||window.innerHeight||((o=document.documentElement)==null?void 0:o.clientHeight)||1));return{width:t,height:i,shortEdge:Math.min(t,i),longEdge:Math.max(t,i),isPortrait:i>=t}}_getResponsiveProfileLabel_(e="desktop"){return{desktop:"Desktop",tablet:"Tablet",mobile:"Mobile"}[e]||"Desktop"}_getActualResponsiveProfile_(){var c,l,g,u,m;let e=((c=this._getRealViewportMetrics_)==null?void 0:c.call(this))||{width:0,height:0,shortEdge:0,longEdge:0},t=Math.max(1,Number(e.width||0)||0),i=Math.max(1,Number(e.shortEdge||Math.min(e.width||0,e.height||0))||0),n=Math.max(1,Number(e.longEdge||Math.max(e.width||0,e.height||0))||0),o=!1;try{let h=!!((g=(l=window.matchMedia)==null?void 0:l.call(window,"(pointer: coarse)"))!=null&&g.matches),b=!!((m=(u=window.matchMedia)==null?void 0:u.call(window,"(hover: none)"))!=null&&m.matches),y=Number((navigator==null?void 0:navigator.maxTouchPoints)||0)||0;o=(h||y>1)&&b}catch{}return o?i<600?"mobile":i<1024||n<1400?"tablet":"desktop":t<768?"mobile":t<1180?"tablet":"desktop"}_getRequestedResponsiveProfile_(){var t;let e=String(this.viewportPreviewMode||"live").toLowerCase();return this.editMode&&(e==="desktop"||e==="tablet"||e==="mobile")?e:((t=this._getActualResponsiveProfile_)==null?void 0:t.call(this))||"desktop"}_getRequestedResponsiveOrientation_(e=null){var n,o,c,l;let t=this._responsiveProfileKeys_().includes(e)?e:((n=this._getRequestedResponsiveProfile_)==null?void 0:n.call(this))||"desktop";if(t==="desktop")return"landscape";let i=String(this.viewportPreviewMode||"live").toLowerCase();return this.editMode&&i===t?this._getStoredResponsivePreviewOrientation_(t):(l=(c=(o=this._getRealViewportMetrics_)==null?void 0:o.call(this))==null?void 0:c.isPortrait)==null||l?"portrait":"landscape"}_getRequestedResponsiveLayoutKey_(){var i,n;let e=((i=this._getRequestedResponsiveProfile_)==null?void 0:i.call(this))||"desktop",t=((n=this._getRequestedResponsiveOrientation_)==null?void 0:n.call(this,e))||"landscape";return this._getResponsiveLayoutKey_(e,t)}_ensureConnectorsLayer_(){if(!this.cardContainer)return null;let e=this.cardContainer.querySelector("#ddcConnectorsLayer");return e||(e=document.createElementNS("http://www.w3.org/2000/svg","svg"),e.setAttribute("id","ddcConnectorsLayer"),e.setAttribute("class","ddc-connectors-layer"),e.setAttribute("aria-hidden","true"),this.cardContainer.appendChild(e)),e}_getConnectorCanvasSize_(){var n,o;let e=this.cardContainer;if(!e)return{width:1,height:1};let t=Math.max(1,parseFloat(e.style.width)||e.scrollWidth||e.offsetWidth||((n=e.getBoundingClientRect)==null?void 0:n.call(e).width)||1),i=Math.max(1,parseFloat(e.style.height)||e.scrollHeight||e.offsetHeight||((o=e.getBoundingClientRect)==null?void 0:o.call(e).height)||1);return{width:Math.round(t),height:Math.round(i)}}_eventToConnectorPoint_(e){var c,l,g,u;let t=(c=this._ensureConnectorsLayer_)==null?void 0:c.call(this),i=((l=t==null?void 0:t.getBoundingClientRect)==null?void 0:l.call(t))||((u=(g=this.cardContainer)==null?void 0:g.getBoundingClientRect)==null?void 0:u.call(g));if(!i)return{x:0,y:0};let n=this.__pointerScaleX||1,o=this.__pointerScaleY||1;return{x:(e.clientX-i.left)/n,y:(e.clientY-i.top)/o}}_snapConnectorPoint_(e){let t=Math.max(1,Number(this.gridSize||10)||10);return{x:Math.round((Number(e==null?void 0:e.x)||0)/t)*t,y:Math.round((Number(e==null?void 0:e.y)||0)/t)*t}}_snapConnectorPointToCellOrigin_(e){let t=Math.max(1,Number(this.gridSize||10)||10);return{x:Math.floor((Number(e==null?void 0:e.x)||0)/t)*t,y:Math.floor((Number(e==null?void 0:e.y)||0)/t)*t}}_buildConnectorPathData_(e=[]){return!Array.isArray(e)||e.length<2?"":e.map((t,i)=>`${i===0?"M":"L"} ${Number(t.x)||0} ${Number(t.y)||0}`).join(" ")}_splitConnectorStateRules_(e){return String(e||"").split(",").map(t=>t.trim()).filter(Boolean)}_isTruthyConnectorState_(e){let t=String(e!=null?e:"").trim().toLowerCase();return t?!["0","off","false","closed","idle","unavailable","unknown","none"].includes(t):!1}_matchesConnectorStateRule_(e,t){let i=String(e!=null?e:"").trim(),n=i.toLowerCase(),o=String(t!=null?t:"").trim();if(!o)return!1;let c=o.match(/^(>=|<=|>|<|==|=|!=)\s*(-?\d+(?:\.\d+)?)$/);if(c){let g=Number(i),u=Number(c[2]);if(!Number.isFinite(g)||!Number.isFinite(u))return!1;switch(c[1]){case">":return g>u;case"<":return g<u;case">=":return g>=u;case"<=":return g<=u;case"=":case"==":return g===u;case"!=":return g!==u;default:return!1}}let l=o.toLowerCase();return l==="truthy"?this._isTruthyConnectorState_(e):l==="falsy"?!this._isTruthyConnectorState_(e):l==="!off"?n!=="off":n===l}_isConnectorStateActive_(e,t){let i=this._splitConnectorStateRules_(t);return i.length?i.some(n=>this._matchesConnectorStateRule_(e,n)):this._isTruthyConnectorState_(e)}_getConnectorResolvedState_(e={}){var h,b,y;let t=String(e.entity||"").trim(),i=t?(b=(h=this.hass)==null?void 0:h.states)==null?void 0:b[t]:null,n=(y=i==null?void 0:i.state)!=null?y:"",o=t?this._isConnectorStateActive_(n,e.active_states):!0,c=Number(n),l=String(e.flow_direction||"auto").toLowerCase(),g=l==="reverse"||l==="auto"&&Number.isFinite(c)&&c<0,u=String(e.animate_mode||"active").toLowerCase();return{active:o,reverse:g,animate:u==="always"||u==="active"&&o,stateValue:n}}_pointToSegmentDistance_(e,t,i){let n=i.x-t.x,o=i.y-t.y;if(!n&&!o){let b=e.x-t.x,y=e.y-t.y;return{distanceSq:b*b+y*y,t:0}}let c=((e.x-t.x)*n+(e.y-t.y)*o)/(n*n+o*o),l=Math.max(0,Math.min(1,c)),g=t.x+n*l,u=t.y+o*l,m=e.x-g,h=e.y-u;return{distanceSq:m*m+h*h,t:l}}_insertConnectorPointAtEvent_(e,t){let i=this._snapConnectorPointToCellOrigin_(this._eventToConnectorPoint_(t)),n=!1;this._updateCurrentConnectorEntries_(o=>o.map(c=>{if(c.id!==e)return c;let l=this._normalizeConnectorEntry_(c),g=Array.isArray(l.points)?[...l.points]:[];if(g.length<2)return l;let u=0,m=1/0;for(let h=0;h<g.length-1;h++){let b=this._pointToSegmentDistance_(i,g[h],g[h+1]);b.distanceSq<m&&(m=b.distanceSq,u=h)}return g.splice(u+1,0,i),n=!0,{...l,points:g}}),{reason:n?"connector-junction-add":null,render:!0}),n&&(this._selectedConnectorId=e)}_insertConnectorMidpoint_(e){let t=!1;this._updateCurrentConnectorEntries_(i=>i.map(n=>{if(n.id!==e)return n;let o=this._normalizeConnectorEntry_(n),c=Array.isArray(o.points)?[...o.points]:[];if(c.length<2)return o;let l=0,g=-1;for(let T=0;T<c.length-1;T++){let E=c[T+1].x-c[T].x,M=c[T+1].y-c[T].y,O=E*E+M*M;O>g&&(g=O,l=T)}let u=Math.max(1,Number(this.gridSize||10)||10),m=c[l],h=c[l+1],b=this._snapConnectorPoint_({x:(m.x+h.x)/2,y:(m.y+h.y)/2}),y=h.x-m.x,_=h.y-m.y,A=b;if(Math.abs(y)>=Math.abs(_)){let T=Math.max(u*2,Math.round(Math.abs(y)/6/u)*u||u*2);A=this._snapConnectorPoint_({x:b.x,y:b.y+T*(l%2===0?1:-1)})}else{let T=Math.max(u*2,Math.round(Math.abs(_)/6/u)*u||u*2);A=this._snapConnectorPoint_({x:b.x+T*(l%2===0?1:-1),y:b.y})}return c.some(T=>T.x===A.x&&T.y===A.y)&&(A=this._snapConnectorPoint_({x:b.x+u,y:b.y+u})),c.splice(l+1,0,A),t=!0,{...o,points:c}}),{reason:t?"connector-junction-add":null,render:!0}),t&&(this._selectedConnectorId=e)}_getConnectorById_(e){return(this._getCurrentConnectorEntries_()||[]).find(t=>t.id===e)||null}_getConnectorVisibleRect_(){let e=this.cardContainer,{width:t,height:i}=this._getConnectorCanvasSize_();return e?{left:Math.max(0,Number(e.scrollLeft||0)||0),top:Math.max(0,Number(e.scrollTop||0)||0),width:Math.max(1,Math.min(t,Number(e.clientWidth||t)||t)),height:Math.max(1,Math.min(i,Number(e.clientHeight||i)||i))}:{left:0,top:0,width:t,height:i}}_createConnectorAtViewport_({openSettings:e=!0}={}){var _;if(!this.editMode)return null;let t=this._normalizeTabId(this.activeTab||this.defaultTab),i=Math.max(1,Number(this.gridSize||10)||10),{left:n,top:o,width:c,height:l}=this._getConnectorVisibleRect_(),g=Math.max(i*6,Math.min(i*16,Math.round(c*.26/i)*i||i*8)),u=n+c/2,m=o+l/2,h=this._snapConnectorPoint_({x:u-g/2,y:m}),b=this._snapConnectorPoint_({x:u+g/2,y:m}),y=this._normalizeConnectorEntry_({...this._defaultConnectorConfig_(),id:`connector_${((_=crypto==null?void 0:crypto.randomUUID)==null?void 0:_.call(crypto))||Math.random().toString(36).slice(2)}`,tabId:t,points:[h,b]});return this._connectorDraft=null,this._connectorDrawMode=!1,this._selectedConnectorId=y.id,this._setCurrentConnectorEntries_([...this._getCurrentConnectorEntries_(),y],{reason:"connector-add",render:!0}),e&&requestAnimationFrame(()=>{var A;return(A=this._openConnectorSettings_)==null?void 0:A.call(this,y.id)}),y.id}_isConnectorSettingsOpen_(){var t,i;let e=(i=(t=this.shadowRoot)==null?void 0:t.querySelector)==null?void 0:i.call(t,"#connectorInspector");return!!e&&!e.hidden&&e.classList.contains("is-open")}_setConnectorDrawMode_(e,{finalize:t=!0}={}){var n,o,c,l;let i=!!e;!i&&((o=(n=this._connectorDraft)==null?void 0:n.points)==null?void 0:o.length)>=2&&t?this._finalizeConnectorDraft_({openSettings:!1}):i||this._cancelConnectorDraft_({keepMode:!0}),this._connectorDrawMode=i,i||(this._connectorDraft=null),(c=this._syncConnectorUiState_)==null||c.call(this),(l=this._renderConnectors_)==null||l.call(this)}_toggleConnectorDrawMode_(){this.editMode&&this._createConnectorAtViewport_({openSettings:!0})}_cancelConnectorDraft_({keepMode:e=!1}={}){var t,i;this._connectorDraft=null,e||(this._connectorDrawMode=!1),(t=this._syncConnectorUiState_)==null||t.call(this),(i=this._renderConnectors_)==null||i.call(this)}_finalizeConnectorDraft_({openSettings:e=!0}={}){var n,o;let t=this._connectorDraft;if(!t||!Array.isArray(t.points)||t.points.length<2){this._cancelConnectorDraft_();return}let i=this._normalizeConnectorEntry_({...this._defaultConnectorConfig_(),...t.settings||{},id:`connector_${((n=crypto==null?void 0:crypto.randomUUID)==null?void 0:n.call(crypto))||Math.random().toString(36).slice(2)}`,tabId:this._normalizeTabId(t.tabId||this.activeTab||this.defaultTab),points:t.points});this._selectedConnectorId=i.id,this._connectorDraft=null,this._connectorDrawMode=!1,this._setCurrentConnectorEntries_([...this._getCurrentConnectorEntries_(),i],{reason:"connector-add",render:!0}),(o=this._syncConnectorUiState_)==null||o.call(this),e&&requestAnimationFrame(()=>{var c;return(c=this._openConnectorSettings_)==null?void 0:c.call(this,i.id)})}_syncConnectorUiState_(){var n;let e=this.lineModeBtn;if((n=this.cardContainer)==null||n.classList.toggle("ddc-connector-draw-mode",!!this._connectorDrawMode),!e)return;let t=!!this._connectorDrawMode;e.classList.toggle("is-active",t),e.setAttribute("aria-pressed",String(t)),e.setAttribute("data-tooltip",t?"Finish connector":"Add connector line"),e.setAttribute("title",t?"Finish connector":"Add connector line");let i=e.querySelector(".label");i&&(i.textContent=t?"Finish Line":"Add Line")}_openConnectorSettings_(e){var me,de,Ce,ue,Ae,ye,Se,B,p;let t=this._getCurrentConnectorEntries_().find(x=>x.id===e);if(!t)return;let i=(de=(me=this.shadowRoot)==null?void 0:me.querySelector)==null?void 0:de.call(me,"#connectorInspector");if(!i)return;try{(Ce=this.__connectorInspectorCleanup)==null||Ce.call(this)}catch{}this.__connectorInspectorCleanup=null;let n=((ue=this._getConnectorResolvedState_)==null?void 0:ue.call(this,t))||{active:!0,animate:!1},o=String(t.line_style||"solid").toLowerCase(),c=String((n.active?t.active_color:t.inactive_color)||(n.active?"var(--primary-color, #ff9800)":"rgba(148,163,184,.48)")).trim(),l=o==="dotted"?`repeating-linear-gradient(90deg, ${c} 0 8px, transparent 8px 20px)`:o==="dashed"?`repeating-linear-gradient(90deg, ${c} 0 26px, transparent 26px 40px)`:c,g=t.entity?`${n.active?"Currently active":"Currently idle"} \xB7 ${n.animate?"animated":"static"}`:`Manual connector \xB7 ${n.animate?"animated":"static"}`,u=Array.isArray(t.points)?t.points.length:0,m=Object.keys(((Ae=this.hass)==null?void 0:Ae.states)||{}).sort((x,S)=>x.localeCompare(S)),h=()=>m.map(x=>`<option value="${this._safe(x)}"></option>`).join(""),b=(x="")=>{var _e,ke,Ee,Fe;let S=String(x||"").trim(),z=S?(ke=(_e=this.hass)==null?void 0:_e.states)==null?void 0:ke[S]:null;if(!z)return[];let N=[],W=new Set,G=je=>{let et=String(je!=null?je:"").trim();if(!et)return;let ct=et.toLowerCase();W.has(ct)||(W.add(ct),N.push(et))},V=String(S.split(".")[0]||"").toLowerCase(),J=String((Ee=z.state)!=null?Ee:"").trim(),Z=J.toLowerCase();switch(J&&!["unknown","unavailable","none","null"].includes(Z)&&G(J),Array.isArray((Fe=z.attributes)==null?void 0:Fe.options)&&z.attributes.options.forEach(G),V){case"binary_sensor":case"input_boolean":case"switch":case"light":case"fan":case"automation":case"script":["on","off"].forEach(G);break;case"lock":["locked","unlocking","unlocked","locking","jammed"].forEach(G);break;case"cover":["open","opening","closed","closing"].forEach(G);break;case"person":case"device_tracker":["home","not_home"].forEach(G);break;case"media_player":["playing","paused","idle","off","standby","buffering"].forEach(G);break;case"alarm_control_panel":["disarmed","armed_home","armed_away","armed_night","armed_vacation","triggered"].forEach(G);break;case"climate":["off","heat","cool","heat_cool","auto","dry","fan_only"].forEach(G);break;case"sun":["above_horizon","below_horizon"].forEach(G);break;default:break}let he=Number(J);return Number.isFinite(he)&&[">0","=0","<0","!=0"].forEach(G),N.slice(0,18)},y=(x="")=>{var J,Z,he,_e,ke;let S=String(x||"").trim(),z=S?(Z=(J=this.hass)==null?void 0:J.states)==null?void 0:Z[S]:null;if(!S)return{entityText:"Browse Home Assistant entities and bind this connector to one of them.",stateText:"Pick an entity to get smart state suggestions from Home Assistant."};if(!z)return{entityText:"Entity not found in Home Assistant right now.",stateText:"You can still type custom state rules manually, for example on, open, or >0."};let N=String(S.split(".")[0]||"").replace(/_/g," "),W=String((he=z.state)!=null?he:"").trim()||"unknown",G=String(((_e=z.attributes)==null?void 0:_e.unit_of_measurement)||"").trim(),V=Array.isArray((ke=z.attributes)==null?void 0:ke.options)?z.attributes.options.length:0;return{entityText:`${N.charAt(0).toUpperCase()}${N.slice(1)} entity${V?` \u2022 ${V} option${V===1?"":"s"}`:""}`,stateText:`Current state: ${W}${G?` ${G}`:""}. Use suggestions below or type custom rules like >0.`}},_=(x,S)=>{let z=String(S||"").trim(),N=(__ddcLineSplitTokens__(x)||[]).map(G=>String(G||"").trim()).filter(Boolean),W=N.findIndex(G=>G.toLowerCase()===z.toLowerCase());return W>=0?N.splice(W,1):N.push(z),N.join(",")};this.__connectorSettingsModal=i,this.__connectorInspectorId=e,i.hidden=!1,i.classList.add("is-open"),i.innerHTML=`
    <div class="ddc-connector-inspector-card">
      <div class="ddc-connector-inspector-head">
        <div>
          <div class="ddc-connector-inspector-kicker">Line editor</div>
          <h3>Connector</h3>
          <p>Fine-tune flow, styling, and bends without leaving edit mode.</p>
        </div>
        <button class="icon-btn ddc-connector-close" id="connectorCloseBtn" type="button" title="Close">
          <ha-icon icon="mdi:close"></ha-icon>
        </button>
      </div>
      <div class="ddc-connector-preview">
        <div class="ddc-connector-preview-line">
          <span
            class="ddc-connector-preview-stroke${t.glow!==!1?" is-glow":""}${n.animate?" is-animated":""}"
            style="height:${Math.max(4,Number(t.thickness||10))}px;color:${this._safe(c)};background:${this._safe(l)};"
          ></span>
        </div>
        <div class="ddc-connector-preview-copy">
          <strong>${this._safe(g)}</strong>
          <span>${u} point${u===1?"":"s"} \xB7 ${this._safe(String(t.arrows||"end"))} arrow${String(t.arrows||"end")==="both"?"s":""}</span>
        </div>
      </div>

      <section class="ddc-connector-section">
        <div class="ddc-connector-section-head">
          <div class="ddc-connector-section-title">Behavior</div>
          <p>Drive line activity from Home Assistant state and control flow direction.</p>
        </div>
        <datalist id="connectorEntityList">${h()}</datalist>
        <datalist id="connectorStateList"></datalist>
        <div class="ddc-connector-inspector-grid">
          <div class="ddc-connector-field full">
            <span>Entity</span>
            <div class="ddc-connector-entity-host" id="connectorEntityHost"></div>
            <div class="ddc-connector-entity-meta" id="connectorEntityMeta"></div>
          </div>
          <label class="ddc-connector-field full">
            <span>Active states</span>
            <input id="connectorStates" class="input" type="text" list="connectorStateList" value="${this._safe(t.active_states||"")}" placeholder="on,>0,charging" />
            <div class="ddc-connector-inline-actions">
              <select id="connectorStateQuickPick" class="input ddc-connector-state-picker">
                <option value="">Choose state from selected entity\u2026</option>
              </select>
              <button class="btn secondary compact" id="connectorStateClearBtn" type="button">
                <ha-icon icon="mdi:close-circle-outline"></ha-icon><span>Clear</span>
              </button>
            </div>
            <div class="ddc-connector-state-meta" id="connectorStateMeta"></div>
            <div class="ddc-connector-state-suggestions" id="connectorStateSuggestions"></div>
          </label>
          <label class="ddc-connector-field">
            <span>Arrows</span>
            <select id="connectorArrows" class="input">
              <option value="none">None</option>
              <option value="start">Start</option>
              <option value="end">End</option>
              <option value="both">Both</option>
            </select>
          </label>
          <label class="ddc-connector-field">
            <span>Flow direction</span>
            <select id="connectorFlowDirection" class="input">
              <option value="auto">Auto</option>
              <option value="forward">Forward</option>
              <option value="reverse">Reverse</option>
            </select>
          </label>
          <label class="ddc-connector-field">
            <span>Animate</span>
            <select id="connectorAnimateMode" class="input">
              <option value="never">Never</option>
              <option value="active">When active</option>
              <option value="always">Always</option>
            </select>
          </label>
          <label class="ddc-connector-field">
            <span>Animation speed</span>
            <input id="connectorSpeed" class="input" type="number" min="0.4" max="8" step="0.1" value="${Number(t.animation_speed||1.8)}" />
          </label>
        </div>
      </section>

      <section class="ddc-connector-section">
        <div class="ddc-connector-section-head">
          <div class="ddc-connector-section-title">Appearance</div>
          <p>Match the connector to the dashboard style and make active states easier to read.</p>
        </div>
        <div class="ddc-connector-inspector-grid">
          <label class="ddc-connector-field">
            <span>Line style</span>
            <select id="connectorLineStyle" class="input">
              <option value="solid">Solid</option>
              <option value="dashed">Dashed</option>
              <option value="dotted">Dotted</option>
            </select>
          </label>
          <label class="ddc-connector-field">
            <span>Thickness</span>
            <input id="connectorThickness" class="input" type="number" min="2" max="28" step="1" value="${Number(t.thickness||10)}" />
          </label>
          <label class="ddc-connector-field">
            <span>Active color</span>
            <input id="connectorActiveColor" class="input" type="text" value="${this._safe(t.active_color||"")}" />
          </label>
          <label class="ddc-connector-field">
            <span>Inactive color</span>
            <input id="connectorInactiveColor" class="input" type="text" value="${this._safe(t.inactive_color||"")}" />
          </label>
        </div>
        <div class="ddc-connector-toggles">
          <label class="ddc-toggle-row">
            <input id="connectorGlow" type="checkbox" ${t.glow!==!1?"checked":""} />
            <span>Glow</span>
          </label>
          <label class="ddc-toggle-row">
            <input id="connectorRounded" type="checkbox" ${t.rounded!==!1?"checked":""} />
            <span>Rounded corners</span>
          </label>
        </div>
      </section>

      <section class="ddc-connector-section">
        <div class="ddc-connector-section-head">
          <div class="ddc-connector-section-title">Shape</div>
          <p>Add bends, refine the route, or remove the connector entirely.</p>
        </div>
        <div class="ddc-connector-actions">
          <button class="btn secondary" id="connectorAddBendBtn" type="button">
            <ha-icon icon="mdi:vector-polyline-edit"></ha-icon><span>Add bend</span>
          </button>
          <button class="btn danger" id="connectorDeleteBtn" type="button">
            <ha-icon icon="mdi:trash-can-outline"></ha-icon><span>Delete line</span>
          </button>
        </div>
        <p class="ddc-connector-help">Click the line to select it. Shift-click or double-click the line to add a bend. Drag the handles to fine-tune. Double-click a middle handle to remove it.</p>
      </section>
    </div>`;let A=x=>i.querySelector(x);A("#connectorArrows").value=String(t.arrows||"end"),A("#connectorFlowDirection").value=String(t.flow_direction||"auto"),A("#connectorLineStyle").value=String(t.line_style||"solid"),A("#connectorAnimateMode").value=String(t.animate_mode||"active");let T=A("#connectorEntityHost"),E=A("#connectorEntityMeta"),M=A("#connectorStates"),O=A("#connectorStateMeta"),C=A("#connectorStateSuggestions"),$=A("#connectorStateList"),q=A("#connectorStateQuickPick"),F=null,j=this._getConnectorById_(e)||t;i.dataset.connectorId=e;let H=(x,S="connector-update")=>{this._updateCurrentConnectorEntries_(z=>z.map(N=>{if(N.id!==e)return N;let W=typeof x=="function"?x(N):x;return{...N,...W}}),{reason:S,render:!0}),j=this._getConnectorById_(e)||j,this._selectedConnectorId=e},U=()=>{var x;return F?String(F.value||((x=F.getAttribute)==null?void 0:x.call(F,"value"))||"").trim():""},X=(x=U())=>{let S=y(x);E&&(E.textContent=S.entityText),O&&(O.textContent=S.stateText);let z=b(x);if($&&($.innerHTML=z.map(W=>`<option value="${this._safe(W)}"></option>`).join("")),q&&(q.innerHTML=['<option value="">Choose state from selected entity\u2026</option>',...z.map(W=>`<option value="${this._safe(W)}">${this._safe(W)}</option>`)].join(""),q.disabled=!z.length,q.value=""),!C||!M)return;let N=(__ddcLineSplitTokens__(M.value||"")||[]).map(W=>String(W||"").trim().toLowerCase()).filter(Boolean);C.innerHTML=z.length?z.map(W=>`<button type="button" class="ddc-connector-state-chip${N.includes(String(W).toLowerCase())?" is-active":""}" data-token="${this._safe(W)}">${this._safe(W)}</button>`).join(""):'<div class="ddc-connector-state-empty">No obvious state choices found for this entity yet.</div>',C.querySelectorAll(".ddc-connector-state-chip").forEach(W=>{W.addEventListener("click",()=>{let G=W.dataset.token||"",V=_(M.value||"",G);M.value=V,H({active_states:V||""}),X(x)})})},te=()=>{if(!T)return;if(T.innerHTML="",customElements.get("ha-entity-picker")){let S=document.createElement("ha-entity-picker");S.hass=this.hass,S.value=String(j.entity||""),S.setAttribute("label","Choose entity"),S.removeAttribute("hide-clear-icon"),F=S,T.appendChild(S),S.addEventListener("value-changed",z=>{var W,G;z.stopPropagation();let N=String(((W=z.detail)==null?void 0:W.value)||z.detail||((G=z.target)==null?void 0:G.value)||"").trim();H({entity:N||""}),X(N)});return}let x=document.createElement("input");x.id="connectorEntity",x.className="input",x.type="text",x.value=String(j.entity||""),x.placeholder="sensor.example_power",x.setAttribute("list","connectorEntityList"),F=x,T.appendChild(x),x.addEventListener("input",S=>{var N;let z=String(((N=S.target)==null?void 0:N.value)||"").trim();H({entity:z||""}),X(z)})};te(),customElements.get("ha-entity-picker")||customElements.whenDefined("ha-entity-picker").then(()=>{!i.isConnected||i.dataset.connectorId!==e||(j=this._getConnectorById_(e)||j,te(),X(String(j.entity||"").trim()))}).catch(()=>{});let re=(x,S="input")=>{if(!x||!x.id)return!1;switch(x.id){case"connectorStates":return H({active_states:x.value||""}),X(),!0;case"connectorArrows":return H({arrows:x.value||"end"}),!0;case"connectorFlowDirection":return H({flow_direction:x.value||"auto"}),!0;case"connectorLineStyle":return H({line_style:x.value||"solid"}),!0;case"connectorAnimateMode":return H({animate_mode:x.value||"active"}),!0;case"connectorThickness":return H({thickness:Number(x.value)||j.thickness}),!0;case"connectorSpeed":return H({animation_speed:Number(x.value)||j.animation_speed}),!0;case"connectorActiveColor":return H({active_color:x.value||j.active_color}),!0;case"connectorInactiveColor":return H({inactive_color:x.value||j.inactive_color}),!0;case"connectorStateQuickPick":if(S!=="change"||!x.value)return!1;{let z=String(x.value||"").trim(),N=_((M==null?void 0:M.value)||"",z);M&&(M.value=N),x.value="",H({active_states:N||""}),X()}return!0;case"connectorGlow":return S!=="change"?!1:(H({glow:!!x.checked}),!0);case"connectorRounded":return S!=="change"?!1:(H({rounded:!!x.checked}),!0);default:return!1}},le=x=>{!x.target||!i.contains(x.target)||re(x.target,"input")},Le=x=>{!x.target||!i.contains(x.target)||re(x.target,"change")};i.addEventListener("input",le),i.addEventListener("change",Le),this.__connectorInspectorCleanup=()=>{try{i.removeEventListener("input",le)}catch{}try{i.removeEventListener("change",Le)}catch{}};try{X(String(j.entity||"").trim())}catch(x){console.warn("[ddc] Failed to render connector entity/state helpers",x)}(ye=A("#connectorCloseBtn"))==null||ye.addEventListener("click",()=>{var x;return(x=this._closeConnectorSettings_)==null?void 0:x.call(this)}),(Se=A("#connectorStateClearBtn"))==null||Se.addEventListener("click",()=>{M&&(M.value=""),H({active_states:""}),X()}),(B=A("#connectorDeleteBtn"))==null||B.addEventListener("click",()=>{var x;this._setCurrentConnectorEntries_(this._getCurrentConnectorEntries_().filter(S=>S.id!==e),{reason:"connector-delete",render:!0}),this._selectedConnectorId=null,(x=this._closeConnectorSettings_)==null||x.call(this)}),(p=A("#connectorAddBendBtn"))==null||p.addEventListener("click",()=>{var x,S;(x=this._insertConnectorMidpoint_)==null||x.call(this,e),this._selectedConnectorId=e,(S=this._renderConnectors_)==null||S.call(this),requestAnimationFrame(()=>{var z;return(z=this._openConnectorSettings_)==null?void 0:z.call(this,e)})})}_closeConnectorSettings_(){var t,i,n;let e=(i=(t=this.shadowRoot)==null?void 0:t.querySelector)==null?void 0:i.call(t,"#connectorInspector");e&&(e.hidden=!0,e.classList.remove("is-open"),e.innerHTML="");try{(n=this.__connectorInspectorCleanup)==null||n.call(this)}catch{}this.__connectorInspectorCleanup=null,this.__connectorSettingsModal=null,this.__connectorInspectorId=null}_renderConnectors_(){var u,m,h;let e=this._ensureConnectorsLayer_();if(!e)return;let{width:t,height:i}=this._getConnectorCanvasSize_();e.setAttribute("viewBox",`0 0 ${t} ${i}`),e.innerHTML="";let n="http://www.w3.org/2000/svg",o=document.createElementNS(n,"defs");e.appendChild(o);let c=this._normalizeTabId(this.activeTab||this.defaultTab),l=(this._getCurrentConnectorEntries_()||[]).filter(b=>this._normalizeTabId(b.tabId||c)===c);if(this._selectedConnectorId&&!l.some(b=>b.id===this._selectedConnectorId)&&(this._selectedConnectorId=null,(u=this._closeConnectorSettings_)==null||u.call(this)),this.editMode&&this._connectorDrawMode){let b=document.createElementNS(n,"rect");b.setAttribute("x","0"),b.setAttribute("y","0"),b.setAttribute("width",String(t)),b.setAttribute("height",String(i)),b.setAttribute("class","ddc-connector-capture"),b.addEventListener("pointermove",y=>{var _,A;this._connectorDrawMode&&(A=(_=this._connectorDraft)==null?void 0:_.points)!=null&&A.length&&(this._connectorDraft.cursor=this._snapConnectorPointToCellOrigin_(this._eventToConnectorPoint_(y)),this._renderConnectors_())}),b.addEventListener("click",y=>{var A,T;y.preventDefault(),y.stopPropagation();let _=this._snapConnectorPointToCellOrigin_(this._eventToConnectorPoint_(y));if(!((T=(A=this._connectorDraft)==null?void 0:A.points)!=null&&T.length))this._connectorDraft={tabId:c,points:[_],cursor:_,settings:this._defaultConnectorConfig_()};else{let E=[...this._connectorDraft.points],M=E[E.length-1];(!M||M.x!==_.x||M.y!==_.y)&&E.push(_),this._connectorDraft={...this._connectorDraft,points:E,cursor:_}}this._renderConnectors_()}),b.addEventListener("dblclick",y=>{var _,A;y.preventDefault(),y.stopPropagation(),((A=(_=this._connectorDraft)==null?void 0:_.points)==null?void 0:A.length)>=2&&this._finalizeConnectorDraft_({openSettings:!0})}),e.appendChild(b)}let g=(b,{draft:y=!1}={})=>{let _=Array.isArray(b.points)?b.points:[];if(_.length<2)return;let A=y?{active:!0,reverse:!1,animate:!0}:this._getConnectorResolvedState_(b),T=A.active?String(b.active_color||this._defaultConnectorConfig_().active_color):String(b.inactive_color||this._defaultConnectorConfig_().inactive_color),E=Math.max(2,Math.min(28,Number(b.thickness)||10)),M=b.rounded!==!1,O=M||String(b.line_style||"").toLowerCase()==="dotted"?"round":"square",C=M?"round":"miter",$=String(b.line_style||"").toLowerCase()==="dashed"?`${Math.max(8,E*1.65)} ${Math.max(6,E*1.05)}`:String(b.line_style||"").toLowerCase()==="dotted"?`0 ${Math.max(8,E*1.35)}`:"",q=this._buildConnectorPathData_(_),j=`ddc_connector_${String(b.id||`draft_${Math.random().toString(36).slice(2)}`)}`,H=document.createElementNS(n,"marker");H.setAttribute("id",`${j}_start`),H.setAttribute("markerWidth","12"),H.setAttribute("markerHeight","12"),H.setAttribute("refX","1.6"),H.setAttribute("refY","6"),H.setAttribute("orient","auto-start-reverse"),H.setAttribute("markerUnits","strokeWidth"),H.innerHTML=`<path d="M 12 0 L 0 6 L 12 12 z" fill="${T.replace(/"/g,"&quot;")}"></path>`,o.appendChild(H);let U=document.createElementNS(n,"marker");U.setAttribute("id",`${j}_end`),U.setAttribute("markerWidth","12"),U.setAttribute("markerHeight","12"),U.setAttribute("refX","10.4"),U.setAttribute("refY","6"),U.setAttribute("orient","auto"),U.setAttribute("markerUnits","strokeWidth"),U.innerHTML=`<path d="M 0 0 L 12 6 L 0 12 z" fill="${T.replace(/"/g,"&quot;")}"></path>`,o.appendChild(U);let X=document.createElementNS(n,"g");X.setAttribute("class",`ddc-connector ${A.active?"is-active":"is-idle"} ${y?"is-draft":""} ${this._selectedConnectorId===b.id?"is-selected":""}`);let te=document.createElementNS(n,"path");te.setAttribute("class","ddc-connector-track"),te.setAttribute("d",q),te.setAttribute("stroke-width",String(E)),te.setAttribute("stroke-linecap",O),te.setAttribute("stroke-linejoin",C),$&&te.setAttribute("stroke-dasharray",$),X.appendChild(te);let re=document.createElementNS(n,"path");re.setAttribute("class",`ddc-connector-line ${b.glow!==!1?"is-glow":""}`),re.setAttribute("d",q),re.setAttribute("stroke",T),re.setAttribute("color",T),re.setAttribute("stroke-width",String(E)),re.setAttribute("stroke-linecap",O),re.setAttribute("stroke-linejoin",C),$&&re.setAttribute("stroke-dasharray",$),(b.arrows==="start"||b.arrows==="both")&&re.setAttribute("marker-start",`url(#${j}_start)`),(b.arrows==="end"||b.arrows==="both")&&re.setAttribute("marker-end",`url(#${j}_end)`),X.appendChild(re);let le=document.createElementNS(n,"path");if(le.setAttribute("class","ddc-connector-hit"),le.setAttribute("d",q),le.setAttribute("stroke-width",String(Math.max(18,E+14))),le.addEventListener("click",me=>{var de,Ce;if(me.preventDefault(),me.stopPropagation(),!(!this.editMode||y)&&(this._selectedConnectorId=b.id,!y)){if(me.shiftKey){this._insertConnectorPointAtEvent_(b.id,me),this._selectedConnectorId=b.id,(de=this._openConnectorSettings_)==null||de.call(this,b.id),this._renderConnectors_();return}(Ce=this._openConnectorSettings_)==null||Ce.call(this,b.id),this._renderConnectors_()}}),le.addEventListener("dblclick",me=>{var de;me.preventDefault(),me.stopPropagation(),!(!this.editMode||y)&&(this._insertConnectorPointAtEvent_(b.id,me),this._selectedConnectorId=b.id,(de=this._openConnectorSettings_)==null||de.call(this,b.id),this._renderConnectors_())}),X.appendChild(le),A.animate){let me=document.createElementNS(n,"path");me.setAttribute("class",`ddc-connector-flow ${A.reverse?"reverse":"forward"}`),me.setAttribute("d",q),me.setAttribute("stroke-width",String(Math.max(2,E*.48))),me.setAttribute("stroke-linecap",O),me.setAttribute("stroke-linejoin",C),me.setAttribute("stroke-dasharray",`${Math.max(18,E*2.4)} ${Math.max(10,E*1.35)}`),me.style.animationDuration=`${Math.max(.4,Math.min(8,Number(b.animation_speed)||1.8))}s`,X.appendChild(me)}(this._selectedConnectorId===b.id&&this.editMode||y)&&_.forEach((me,de)=>{let Ce=document.createElementNS(n,"circle");Ce.setAttribute("class","ddc-connector-handle"),Ce.setAttribute("cx",String(me.x)),Ce.setAttribute("cy",String(me.y)),Ce.setAttribute("r",String(Math.max(6,E*.72))),y||(Ce.addEventListener("pointerdown",ue=>{ue.preventDefault(),ue.stopPropagation(),this.__connectorPointDrag={connectorId:b.id,pointIndex:de};let Ae=Se=>{if(!this.__connectorPointDrag)return;let B=this._snapConnectorPointToCellOrigin_(this._eventToConnectorPoint_(Se));this._updateCurrentConnectorEntries_(p=>p.map(x=>{if(x.id!==b.id)return x;let S=Array.isArray(x.points)?[...x.points]:[];return S[de]=B,{...x,points:S}}),{reason:null,render:!0})},ye=()=>{var Se;window.removeEventListener("pointermove",Ae,!0),window.removeEventListener("pointerup",ye,!0),window.removeEventListener("pointercancel",ye,!0),this.__connectorPointDrag=null,(Se=this._queueSave)==null||Se.call(this,"connector-point-move")};window.addEventListener("pointermove",Ae,!0),window.addEventListener("pointerup",ye,!0),window.addEventListener("pointercancel",ye,!0)}),Ce.addEventListener("dblclick",ue=>{ue.preventDefault(),ue.stopPropagation(),!(de===0||de===_.length-1||_.length<=2)&&this._setCurrentConnectorEntries_((this._getCurrentConnectorEntries_()||[]).map(Ae=>{if(Ae.id!==b.id)return Ae;let ye=[...Ae.points];return ye.splice(de,1),{...Ae,points:ye}}),{reason:"connector-junction-remove",render:!0})})),X.appendChild(Ce)}),e.appendChild(X)};if(l.forEach(b=>g(b)),(h=(m=this._connectorDraft)==null?void 0:m.points)!=null&&h.length){let b={...this._defaultConnectorConfig_(),...this._connectorDraft.settings||{},id:"draft",points:this._connectorDraft.cursor?[...this._connectorDraft.points,this._connectorDraft.cursor]:[...this._connectorDraft.points]};g(b,{draft:!0})}}_restoreBackgroundHostToContainer_(){if(!this.cardContainer)return;let e=this.cardContainer.querySelector("#ddcBgHost");e||(e=document.createElement("div"),e.className="ddc-bg-host",e.id="ddcBgHost",e.setAttribute("aria-hidden","true")),this.cardContainer.innerHTML="",this.cardContainer.appendChild(e),this._ensureConnectorsLayer_()}async _buildCardsFromEntries_(e=[],t=0){var n,o,c,l,g,u,m,h,b,y,_,A,T,E,M,O,C,$,q;this._restoreBackgroundHostToContainer_(),(n=this._clearSelection)==null||n.call(this);let i=!1;for(let F of Array.isArray(e)?e:[]){if(t&&t!==this.__responsiveSwitchSeq)return;let j=this._normalizeSavedCardEntry_(F);if(!(j!=null&&j.card)||typeof j.card=="object"&&Object.keys(j.card).length===0){let X=this._makePlaceholderAt(((o=j.position)==null?void 0:o.x)||0,((c=j.position)==null?void 0:c.y)||0,((l=j.size)==null?void 0:l.width)||200,((g=j.size)==null?void 0:g.height)||200);X.dataset.layoutCardId=j.id,X.dataset.tabId=this._normalizeTabId(j.tabId||this.defaultTab),this._setWrapperLayerIds_(X,j.layerIds||j.layer_ids||[]),this.cardContainer.appendChild(X);try{this._rebuildOnce(X.firstElementChild)}catch{}i=!0;continue}let H=await this._createCard(j.card),U=this._makeWrapper(H,{layoutCardId:j.id});if(this.editMode&&U.classList.add("editing"),U.dataset.tabId=this._normalizeTabId(j.tabId||this.defaultTab),this._setWrapperLayerIds_(U,j.layerIds||j.layer_ids||[]),this._setCardPosition(U,((u=j.position)==null?void 0:u.x)||0,((m=j.position)==null?void 0:m.y)||0),U.style.width=`${(b=(h=j.size)==null?void 0:h.width)!=null?b:14*this.gridSize}px`,U.style.height=`${(_=(y=j.size)==null?void 0:y.height)!=null?_:10*this.gridSize}px`,j.z!=null&&(U.style.zIndex=String(j.z)),j.overflow)try{U.style.overflow=j.overflow,U.dataset.overflow=j.overflow;let X=U.firstElementChild;X&&(X.style.overflow=j.overflow)}catch{}try{(A=this._applyPerCardStyle_)==null||A.call(this,U,j.card_style||j.cardStyle||null)}catch{}this.cardContainer.appendChild(U);try{this._rebuildOnce(U.firstElementChild)}catch{}this._initCardInteract(U),i=!0}i?(this._resizeContainer(),(E=this._applyAutoScale)==null||E.call(this)):(this._showEmptyPlaceholder(),(T=this._applyAutoScale)==null||T.call(this)),(M=this._syncEmptyStateUI)==null||M.call(this);try{(O=this._renderTabs)==null||O.call(this),(C=this._renderLayersBar_)==null||C.call(this),($=this._applyActiveTab)==null||$.call(this)}catch{}try{(q=this._renderConnectors_)==null||q.call(this)}catch{}}async _activateResponsiveProfile_(e,{force:t=!1}={}){var m,h,b,y;let i=this._responsiveProfileKeys_().includes(e)?e:"desktop",n=((m=this._getRequestedResponsiveOrientation_)==null?void 0:m.call(this,i))||"landscape",o=this._getResponsiveLayoutKey_(i,n),c=this._activeResponsiveProfile||null,l=this._activeResponsiveLayoutKey||this._getResponsiveLayoutKey_(c||"desktop","landscape");if(!t&&l===o){(h=this._syncViewportPreviewUI_)==null||h.call(this);return}l&&l!==o&&this._persistCurrentResponsiveProfileToMemory_(),this._activeResponsiveProfile=i,this._activeResponsiveLayoutKey=o,this._setStoredResponsivePreviewOrientation_(i,n);let g=++this.__responsiveSwitchSeq;this._responsiveLayouts||(this._responsiveLayouts=this._normalizeResponsiveLayouts_(this._captureCurrentLayoutEntries_(),null));let u=((b=this._responsiveLayouts)==null?void 0:b[o])||[];await this._buildCardsFromEntries_(u,g),g===this.__responsiveSwitchSeq&&((y=this._syncViewportPreviewUI_)==null||y.call(this))}async _syncResponsiveProfileForViewport_({force:e=!1}={}){var n,o,c,l,g,u;if(this.__booting)return;if(!this._responsiveLayouts&&!((o=(n=this.cardContainer)==null?void 0:n.querySelector)!=null&&o.call(n,".card-wrapper"))){(c=this._syncViewportPreviewUI_)==null||c.call(this);return}let t=((l=this._getRequestedResponsiveProfile_)==null?void 0:l.call(this))||"desktop",i=((g=this._getRequestedResponsiveLayoutKey_)==null?void 0:g.call(this))||this._getPrimaryResponsiveLayoutKey_();if(!e&&i===this._activeResponsiveLayoutKey){(u=this._syncViewportPreviewUI_)==null||u.call(this);return}await this._activateResponsiveProfile_(t,{force:e})}_isContainerFixed(){return this.containerSizeMode==="fixed_custom"||this.containerSizeMode==="preset"||this.containerSizeMode==="fixed"}_resolveFixedSize(){if(this.containerSizeMode==="fixed_custom"){let e=Math.max(100,Number(this.containerFixedWidth||0)),t=Math.max(100,Number(this.containerFixedHeight||0));return{w:e,h:t}}if(this.containerSizeMode==="preset"){let e=r._sizePresets().find(n=>n.key===this.containerPreset)||r._sizePresets().find(n=>n.key==="fhd");if(!e)return{w:1920,h:1080};let t=e.w,i=e.h;return this.containerPresetOrient==="portrait"&&t>i&&([t,i]=[i,t]),this.containerPresetOrient==="landscape"&&i>t&&([t,i]=[i,t]),{w:t,h:i}}return null}_applyContainerSizingFromConfig(e=!1){var i,n;let t=this.cardContainer;if(t)if(this._isContainerFixed()){let{w:o,h:c}=this._resolveFixedSize();t.style.width=`${o}px`,t.style.height=`${c}px`,t.style.overflow="hidden",e||(i=this._dbgPush)==null||i.call(this,"size","Applied fixed size",{w:o,h:c,mode:this.containerSizeMode,preset:this.containerPreset,orient:this.containerPresetOrient}),this._clampAllCardsInside()}else t.style.overflow="hidden",e||(n=this._dbgPush)==null||n.call(this,"size","Applied dynamic size"),this._resizeContainer()}_getContainerSize(){let e=this.cardContainer;if(!e)return{w:0,h:0};let t=parseFloat(getComputedStyle(e).width)||e.getBoundingClientRect().width,i=parseFloat(getComputedStyle(e).height)||e.getBoundingClientRect().height;return{w:t,h:i}}_getOuterGridBufferPx_(){var e;return this.outerGridBuffer?Math.max(0,Number(this.gridSize||((e=this._config)==null?void 0:e.grid)||0)||0):0}_clampAllCardsInside(){if(!this._isContainerFixed())return;let{w:e,h:t}=this._getContainerSize();this.cardContainer.querySelectorAll(".card-wrapper").forEach(n=>{let o=parseFloat(n.getAttribute("data-x"))||0,c=parseFloat(n.getAttribute("data-y"))||0,l=parseFloat(n.style.width)||n.getBoundingClientRect().width,g=parseFloat(n.style.height)||n.getBoundingClientRect().height,u=Math.max(0,Math.min(o,Math.max(0,e-l))),m=Math.max(0,Math.min(c,Math.max(0,t-g))),h=Math.min(l,e),b=Math.min(g,t);(h!==l||b!==g)&&(n.style.width=`${h}px`,n.style.height=`${b}px`);let y=Math.max(0,Math.min(u,Math.max(0,e-h))),_=Math.max(0,Math.min(m,Math.max(0,t-b)));this._setCardPosition(n,y,_)})}_computeHaSidebarGutters_(){var i;let e=56;try{let n=document.querySelector("home-assistant"),o=n==null?void 0:n.shadowRoot,c=o==null?void 0:o.querySelector("ha-drawer, app-drawer, ha-sidebar, .drawer, .menu"),l=(i=c==null?void 0:c.getBoundingClientRect)==null?void 0:i.call(c);Math.max(document.documentElement.clientWidth||0,window.innerWidth||0)<=870?e=0:l!=null&&l.width&&(e=Math.max(0,Math.min(256,Math.round(l.width))))}catch{}let t=0;try{this.style.setProperty("--ddc-left-gutter",`${e}px`),this.style.setProperty("--ddc-right-gutter",`${t}px`)}catch{}}_computeHaTopGutter_(){var i,n;let e=0,t=o=>{let c=parseFloat(String(o!=null?o:"").trim());return Number.isFinite(c)?Math.max(0,c):0};try{[document.documentElement,document.body,...((i=this._deepQueryAll)==null?void 0:i.call(this,"ha-app-layout, home-assistant-main"))||[]].filter(Boolean).forEach(c=>{try{let l=getComputedStyle(c);e=Math.max(e,t(l.getPropertyValue("--header-height")),t(l.getPropertyValue("--ha-header-height")),t(l.getPropertyValue("--app-header-height")),t(l.getPropertyValue("--mdc-top-app-bar-height")))}catch{}})}catch{}try{(((n=this._deepQueryAll)==null?void 0:n.call(this,"app-header, ha-top-app-bar, ha-top-app-bar-fixed, mwc-top-app-bar-fixed, ha-header-bar, app-toolbar, ha-toolbar"))||[]).forEach(c=>{var l;try{if(!c)return;let g=getComputedStyle(c);if(g.display==="none"||g.visibility==="hidden")return;let u=(l=c.getBoundingClientRect)==null?void 0:l.call(c);if(!u||u.height<8||u.width<120||u.bottom<=0||u.top>=Math.max(window.innerHeight||0,1))return;e=Math.max(e,Math.round(u.bottom))}catch{}})}catch{}try{this.style.setProperty("--ddc-top-gutter",`${Math.max(0,Math.round(e))}px`)}catch{}}_applyGridVars(){var t;let e=`${this.gridSize||10}px`;this.style.setProperty("--ddc-grid-size",e),(t=this.cardContainer)==null||t.style.setProperty("--ddc-grid-size",e)}_getViewportPreviewPreset_(){var n;let e=String(this.viewportPreviewMode||"live").toLowerCase();if(!this.editMode||e==="live"||!this._responsiveProfileKeys_().includes(e))return null;let t=((n=this._getRequestedResponsiveOrientation_)==null?void 0:n.call(this,e))||"landscape",i=this._getResponsiveViewportProfile_(e,t);return{id:e,width:i.width,height:i.height,label:this._getResponsiveProfileLabel_(e),orientation:t}}_isExplicitViewportPreview_(){var e;return!!((e=this._getViewportPreviewPreset_)!=null&&e.call(this))}_getViewportMetrics_(){var t,i;let e=(t=this._getViewportPreviewPreset_)==null?void 0:t.call(this);return e!=null&&e.width&&(e!=null&&e.height)?{width:e.width,height:e.height,shortEdge:Math.min(e.width,e.height),longEdge:Math.max(e.width,e.height),isPortrait:e.height>=e.width,preview:e.id}:((i=this._getRealViewportMetrics_)==null?void 0:i.call(this))||{width:1,height:1,shortEdge:1,longEdge:1,isPortrait:!0}}_getEffectivePreviewWidth_(e=1){var l;let t=Math.max(1,Number(e||1)||1),i=(l=this._getViewportPreviewPreset_)==null?void 0:l.call(this);if(!(i!=null&&i.width))return t;let n=String((i==null?void 0:i.id)||"").toLowerCase(),o=n==="desktop"?t<=1600?72:Math.min(680,t*.34):n==="tablet"?t<=1200?64:Math.min(460,t*.28):t<=720?24:Math.min(120,t*.12),c=Math.max(1,t-o);return Math.max(1,Math.min(c,i.width))}_getEffectivePreviewHeight_(){var t;let e=(t=this._getViewportPreviewPreset_)==null?void 0:t.call(this);return e!=null&&e.height?Math.max(1,Number(e.height)||1):0}_getPreviewDeviceFrameOrientation_(e=null,t=0,i=0,n=null){var g,u,m,h,b,y;let o=String(e||((u=(g=this._getViewportPreviewPreset_)==null?void 0:g.call(this))==null?void 0:u.id)||"").toLowerCase();if(o==="desktop")return"landscape";if(n)return this._normalizeResponsiveOrientation_(o,n);let c=Math.max(1,Number(t||((h=(m=this._getViewportPreviewPreset_)==null?void 0:m.call(this))==null?void 0:h.width)||1)||1);return Math.max(1,Number(i||((y=(b=this._getViewportPreviewPreset_)==null?void 0:b.call(this))==null?void 0:y.height)||1)||1)>=c?"portrait":"landscape"}_rotatePreviewDeviceFrameConfig_(e=null,t="portrait"){if(!e)return null;let i=String(e.viewportOrientation||((Number(e.innerHeight||0)||0)>=(Number(e.innerWidth||0)||0)?"portrait":"landscape")).toLowerCase(),n=String(t||i).toLowerCase(),o={...e,baseViewportOrientation:i,orientation:n,displayAssetWidth:Number(e.assetWidth||1280)||1280,displayAssetHeight:Number(e.assetHeight||960)||960,displayViewportLeft:Number(e.measuredViewportLeft||0)||0,displayViewportTop:Number(e.measuredViewportTop||0)||0,displayViewportWidth:Number(e.measuredViewportWidth||1)||1,displayViewportHeight:Number(e.measuredViewportHeight||1)||1,assetRotation:0,viewportInnerWidth:Math.max(1,Number(e.innerWidth||1)||1),viewportInnerHeight:Math.max(1,Number(e.innerHeight||1)||1)};if(n===i||o.id==="desktop")return o;let c=Math.max(1,Number(e.assetWidth||1280)||1280),l=Math.max(1,Number(e.assetHeight||960)||960),g=Math.max(0,Number(e.measuredViewportLeft||0)||0),u=Math.max(0,Number(e.measuredViewportTop||0)||0),m=Math.max(1,Number(e.measuredViewportWidth||1)||1),h=Math.max(1,Number(e.measuredViewportHeight||1)||1);return{...o,orientation:n,displayAssetWidth:l,displayAssetHeight:c,displayViewportLeft:Math.max(0,l-(u+h)),displayViewportTop:g,displayViewportWidth:h,displayViewportHeight:m,assetRotation:90,viewportInnerWidth:Math.max(1,Number(e.innerHeight||1)||1),viewportInnerHeight:Math.max(1,Number(e.innerWidth||1)||1)}}_lockPreviewDeviceFrameViewportRect_(e=null){if(!e)return null;let t={...e},i=Math.max(1,Number(t.viewportInnerWidth||t.innerWidth||1)||1),n=Math.max(1,Number(t.viewportInnerHeight||t.innerHeight||1)||1),o=i/Math.max(1,n),c=Math.max(1,Number(t.displayViewportWidth||t.measuredViewportWidth||1)||1),l=Math.max(1,Number(t.displayViewportHeight||t.measuredViewportHeight||1)||1),g=Math.max(1,l*o),u=Math.max(1,c/Math.max(1e-4,o)),m=Math.abs(g-c),h=Math.abs(u-l);if(m<h){let b=Math.max(1,Math.round(g));t.displayViewportWidth=b,t.measuredViewportWidth=b,t.displayViewportHeight=l,t.measuredViewportHeight=l}else{let b=Math.max(1,Math.round(u));t.displayViewportWidth=c,t.measuredViewportWidth=c,t.displayViewportHeight=b,t.measuredViewportHeight=b}return t}_getPreviewDeviceFrameLock_(e=null,t=0,i=0,n={}){var g;let o=(g=this._getPreviewDeviceFrameConfig_)==null?void 0:g.call(this,e,t,i,n);if(!o)return null;let c=Math.max(1,Number(o.viewportInnerWidth||o.innerWidth||t||1)||1),l=Math.max(1,Number(o.viewportInnerHeight||o.innerHeight||i||1)||1);return{id:o.id,orientation:o.orientation||"landscape",width:c,height:l,ratio:Math.max(1e-4,c/Math.max(1,l))}}_getPreviewDeviceFrameConfig_(e=null,t=0,i=0,n={}){var m,h,b,y,_;let o=String(e||((h=(m=this._getViewportPreviewPreset_)==null?void 0:m.call(this))==null?void 0:h.id)||"").toLowerCase(),l={mobile:{id:"mobile",imageUrl:"https://i.postimg.cc/9QgSw3WG/iphone-frame.png",assetWidth:1280,assetHeight:960,viewportOrientation:"portrait",measuredViewportLeft:474,measuredViewportTop:120,measuredViewportWidth:332,measuredViewportHeight:721,innerWidth:500,innerHeight:1080},tablet:{id:"tablet",imageUrl:"https://i.postimg.cc/137TVx9w/ipad_frame.png",assetWidth:1280,assetHeight:960,viewportOrientation:"landscape",measuredViewportLeft:207,measuredViewportTop:155,measuredViewportWidth:866,measuredViewportHeight:651,innerWidth:1295,innerHeight:923},desktop:{id:"desktop",imageUrl:"https://i.postimg.cc/DwpD4V21/macbook_frame.png",assetWidth:1280,assetHeight:960,viewportOrientation:"landscape",measuredViewportLeft:162,measuredViewportTop:181,measuredViewportWidth:956,measuredViewportHeight:598,innerWidth:1430,innerHeight:896}}[o]||null;if(!l)return null;let g=((b=this._getPreviewDeviceFrameOrientation_)==null?void 0:b.call(this,o,t,i,n==null?void 0:n.orientation))||l.viewportOrientation||"landscape",u=((y=this._rotatePreviewDeviceFrameConfig_)==null?void 0:y.call(this,l,g))||l;return((_=this._lockPreviewDeviceFrameViewportRect_)==null?void 0:_.call(this,u))||u}_getPreviewDeviceFrameMetrics_(e=0,t=0,i=null,n={}){var B,p,x,S,z;let o=(B=this._getPreviewDeviceFrameConfig_)==null?void 0:B.call(this,i,e,t,n);if(!o)return null;let c=Math.max(1,Number(e||((x=(p=this._getViewportPreviewPreset_)==null?void 0:p.call(this))==null?void 0:x.width)||1)||1),l=Math.max(1,Number(t||((z=(S=this._getViewportPreviewPreset_)==null?void 0:S.call(this))==null?void 0:z.height)||1)||1),g=Math.max(1,Number((n==null?void 0:n.displayWidth)||c)||c),u=Math.max(1,Number((n==null?void 0:n.displayHeight)||l)||l),m=Math.max(1,Number(o.viewportInnerWidth||o.innerWidth||c)||c),h=Math.max(1,Number(o.viewportInnerHeight||o.innerHeight||l)||l),b=Math.max(1,Number(o.displayViewportWidth||o.measuredViewportWidth||c)||c),y=Math.max(1,Number(o.displayViewportHeight||o.measuredViewportHeight||l)||l),_=Math.max(0,Number(o.displayViewportLeft||o.measuredViewportLeft||0)||0),A=Math.max(0,Number(o.displayViewportTop||o.measuredViewportTop||0)||0),T=Math.max(1,Number(o.assetWidth||1280)||1280),E=Math.max(1,Number(o.assetHeight||960)||960),M=Math.max(1,Number(o.displayAssetWidth||T)||T),O=Math.max(1,Number(o.displayAssetHeight||E)||E),C=b/m,$=y/h,q=Math.max(1e-4,((Number.isFinite(C)?C:0)+(Number.isFinite($)?$:0))/2||C||$||1),F=Math.max(1e-4,g/b||1),j=Math.max(1e-4,u/y||F),H=Math.max(1,M/q),U=Math.max(1,O/q),X=Math.max(1,T/q),te=Math.max(1,E/q),re=g,le=u,Le=0,me=0,de=Math.max(1,M*F),Ce=Math.max(1,O*j),ue=Math.max(1,T*F),Ae=Math.max(1,E*j),ye=Math.max(0,_*F),Se=Math.max(0,A*j);return{...o,screenWidth:c,screenHeight:l,displayWidth:g,displayHeight:u,assetWidth:T,assetHeight:E,displayAssetWidth:M,displayAssetHeight:O,innerWidth:m,innerHeight:h,measuredViewportLeft:_,measuredViewportTop:A,measuredViewportWidth:b,measuredViewportHeight:y,viewportLeft:_,viewportTop:A,viewportWidth:m,viewportHeight:h,logicalAssetWidth:H,logicalAssetHeight:U,intrinsicScaleX:C,intrinsicScaleY:$,intrinsicScale:q,renderScale:F,renderScaleX:F,renderScaleY:j,renderedViewportWidth:re,renderedViewportHeight:le,viewportOffsetX:Le,viewportOffsetY:me,frameWidth:de,frameHeight:Ce,logicalOriginalAssetWidth:X,logicalOriginalAssetHeight:te,renderedAssetWidth:ue,renderedAssetHeight:Ae,renderedViewportLeft:ye,renderedViewportTop:Se}}_applyPreviewDeviceFrame_(e=0,t=0,i=null,n={}){var y,_,A,T,E,M;let o=this.__scaleOuter,c=this.rootEl;try{(_=(y=o==null?void 0:o.classList)==null?void 0:y.remove)==null||_.call(y,"ddc-preview-shell")}catch{}let l=((A=c==null?void 0:c.getBoundingClientRect)==null?void 0:A.call(c))||{left:0,top:0},g=((T=o==null?void 0:o.getBoundingClientRect)==null?void 0:T.call(o))||{left:(o==null?void 0:o.offsetLeft)||0,top:(o==null?void 0:o.offsetTop)||0,width:(o==null?void 0:o.offsetWidth)||Math.max(1,Number(e||1)||1),height:(o==null?void 0:o.offsetHeight)||Math.max(1,Number(t||1)||1)},u=(E=this._getPreviewDeviceFrameMetrics_)==null?void 0:E.call(this,e,t,i,{...n,displayWidth:Math.max(1,Number(g.width||1)||1),displayHeight:Math.max(1,Number(g.height||1)||1)});if(c&&(c.classList.toggle("ddc-preview-device-active",!!u),c.classList.toggle("ddc-preview-device-mobile",(u==null?void 0:u.id)==="mobile"),c.classList.toggle("ddc-preview-device-tablet",(u==null?void 0:u.id)==="tablet"),c.classList.toggle("ddc-preview-device-desktop",(u==null?void 0:u.id)==="desktop")),!c||!o||!u)return(M=this.__previewDeviceFrameEl)!=null&&M.isConnected&&this.__previewDeviceFrameEl.remove(),this.__previewDeviceFrameEl=null,u||null;let m=this.__previewDeviceFrameEl;if(!m||!m.isConnected){m=document.createElement("div"),m.className="ddc-preview-device-frame",m.setAttribute("aria-hidden","true");let O=document.createElement("div");O.className="ddc-preview-frame-viewport-box",m.appendChild(O),c.insertBefore(m,o),this.__previewDeviceFrameEl=m}else m.nextSibling!==o&&c.insertBefore(m,o);let h=m.querySelector(".ddc-preview-frame-viewport-box"),b=m.style;return m.dataset.device=u.id,m.dataset.orientation=u.orientation||"landscape",b.width=`${Math.max(1,u.frameWidth)}px`,b.height=`${Math.max(1,u.frameHeight)}px`,b.left=`${Math.round(g.left-l.left+(u.viewportOffsetX||0)-u.viewportLeft*(u.renderScaleX||u.renderScale||1))}px`,b.top=`${Math.round(g.top-l.top+(u.viewportOffsetY||0)-u.viewportTop*(u.renderScaleY||u.renderScale||1))}px`,b.setProperty("--ddc-preview-frame-url",`url("${u.imageUrl}")`),b.setProperty("--ddc-preview-asset-width",`${Math.max(1,u.renderedAssetWidth||u.frameWidth)}px`),b.setProperty("--ddc-preview-asset-height",`${Math.max(1,u.renderedAssetHeight||u.frameHeight)}px`),b.setProperty("--ddc-preview-asset-left",`${Math.round((u.frameWidth-(u.renderedAssetWidth||u.frameWidth))/2)}px`),b.setProperty("--ddc-preview-asset-top",`${Math.round((u.frameHeight-(u.renderedAssetHeight||u.frameHeight))/2)}px`),b.setProperty("--ddc-preview-asset-rotation",`${Number(u.assetRotation||0)||0}deg`),h&&(h.style.left=`${Math.round(u.renderedViewportLeft||0)}px`,h.style.top=`${Math.round(u.renderedViewportTop||0)}px`,h.style.width=`${Math.max(1,u.renderedViewportWidth||u.screenWidth||1)}px`,h.style.height=`${Math.max(1,u.renderedViewportHeight||u.screenHeight||1)}px`,h.dataset.debug=`${this._getResponsiveProfileLabel_(u.id)} ${u.orientation||"landscape"} \xB7 ${Math.round(u.screenWidth)}\xD7${Math.round(u.screenHeight)}`),u}_syncViewportPreviewUI_(){var e,t,i,n,o,c,l,g;try{let u=(t=(e=this.shadowRoot)==null?void 0:e.querySelector)==null?void 0:t.call(e,"#previewModeControls"),m=Array.from(((n=(i=this.shadowRoot)==null?void 0:i.querySelectorAll)==null?void 0:n.call(i,"[data-preview-mode]"))||[]),h=(o=this._getViewportPreviewPreset_)==null?void 0:o.call(this),b=(h==null?void 0:h.id)||"live",y=((c=this._getActualResponsiveProfile_)==null?void 0:c.call(this))||"desktop";u&&(u.style.display=""),m.forEach(_=>{let A=String(_.dataset.previewMode||"live")===b;_.classList.toggle("is-active",A),_.setAttribute("aria-pressed",A?"true":"false"),_.dataset.previewMode==="live"?(_.dataset.profile=y,_.title=`Live viewport (${this._getResponsiveProfileLabel_(y)})`):(_.removeAttribute("data-profile"),_.title=this._getResponsiveProfileLabel_(_.dataset.previewMode||"desktop"))}),this.rootEl&&(this.rootEl.classList.toggle("ddc-preview-active",!!h),this.rootEl.classList.toggle("ddc-preview-docked-tabs",!!h),h!=null&&h.width?this.rootEl.style.setProperty("--ddc-preview-width",`${h.width}px`):this.rootEl.style.removeProperty("--ddc-preview-width"),h!=null&&h.height?this.rootEl.style.setProperty("--ddc-preview-height",`${h.height}px`):this.rootEl.style.removeProperty("--ddc-preview-height")),this.__scaleOuter&&(this.__scaleOuter.style.marginInline=h?"auto":"",this.__scaleOuter.style.maxWidth=h?"100%":""),(l=this._applyPreviewDeviceFrame_)==null||l.call(this,(h==null?void 0:h.width)||0,(h==null?void 0:h.height)||0,(h==null?void 0:h.id)||null,{orientation:(h==null?void 0:h.orientation)||null}),this.tabsBar&&this.tabsPosition!=="left"&&(this.tabsBar.style.marginInline=h?"auto":""),(g=this._syncResponsiveViewportFields_)==null||g.call(this)}catch{}}async _setViewportPreviewMode_(e="live"){var i,n,o,c,l;let t=e==="desktop"||e==="mobile"||e==="tablet"?e:"live";if(this._persistCurrentResponsiveProfileToMemory_(),this.viewportPreviewMode=t,t!=="live"){let g=((i=this._getRequestedResponsiveOrientation_)==null?void 0:i.call(this,t))||"landscape";(n=this._ensureResponsiveViewportProfileLock_)==null||n.call(this,t,"width",g)}this.__ddcTextLockDirty=!0,await this._syncResponsiveProfileForViewport_({force:!0}),(o=this._applyAutoScale)==null||o.call(this),(c=this._syncTabsWidth_)==null||c.call(this),(l=this._scheduleTextResizeLockRefresh_)==null||l.call(this,!0)}_syncResponsiveViewportFields_(){var e,t,i,n,o,c;try{let l=this.previewWidthInput,g=this.previewHeightInput,u=this.previewSwapButton,m=this.previewMeta;if(!l||!g)return;let h=(e=this.shadowRoot)==null?void 0:e.activeElement,b=String(this.viewportPreviewMode||"live").toLowerCase(),y=this._responsiveProfileKeys_().includes(b)?b:null,_=y||this._activeResponsiveProfile||((t=this._getActualResponsiveProfile_)==null?void 0:t.call(this))||"desktop",A=((i=this._getRequestedResponsiveOrientation_)==null?void 0:i.call(this,_))||"landscape";y&&((n=this._ensureResponsiveViewportProfileLock_)==null||n.call(this,y,"width",A));let T=this._getResponsiveViewportProfile_(_,A),E=(o=this._getPreviewDeviceFrameLock_)==null?void 0:o.call(this,_,T.width,T.height,{orientation:A});h!==l&&(l.value=String(Math.round(T.width))),h!==g&&(g.value=String(Math.round(T.height)));let M=!y,O=!!y&&y!=="desktop";l.disabled=M,g.disabled=M,u&&(u.disabled=!O,u.hidden=!O,u.setAttribute("aria-hidden",O?"false":"true"),u.title=O?"Swap orientation":"Orientation swap is only available for mobile and tablet"),m&&(m.textContent=M?`Auto: ${this._getResponsiveProfileLabel_(((c=this._getActualResponsiveProfile_)==null?void 0:c.call(this))||"desktop")}`:`Editing ${this._getResponsiveProfileLabel_(y)} \xB7 ${(E==null?void 0:E.orientation)==="portrait"?"Portrait":"Landscape"} \xB7 ${Math.round(T.width)}\xD7${Math.round(T.height)} \xB7 locked ratio`)}catch{}}_commitResponsiveViewportField_(e="width"){var t,i,n,o;try{let c=String(this.viewportPreviewMode||"live").toLowerCase();if(!this._responsiveProfileKeys_().includes(c))return;let l=e==="height"?this.previewHeightInput:this.previewWidthInput;if(!l)return;let g=String(l.value||"").trim();if(!g){(t=this._syncResponsiveViewportFields_)==null||t.call(this);return}let u=Number(g);if(!Number.isFinite(u)){(i=this._syncResponsiveViewportFields_)==null||i.call(this);return}let m=Math.max(240,Math.min(6e3,Math.round(u)));this._updateResponsiveViewportProfile_(c,{[e]:m},{preferAxis:e==="height"?"height":"width",orientation:((n=this._getRequestedResponsiveOrientation_)==null?void 0:n.call(this,c))||"landscape"}),(o=this._syncResponsiveViewportFields_)==null||o.call(this)}catch{}}_updateResponsiveViewportProfile_(e,t={},i={}){var h,b,y,_,A,T,E,M;if(!this._responsiveProfileKeys_().includes(e))return;let n=this._normalizeResponsiveOrientation_(e,(b=i==null?void 0:i.orientation)!=null?b:(h=this._getRequestedResponsiveOrientation_)==null?void 0:h.call(this,e)),o=this._getResponsiveLayoutKey_(e,n),c=this._getResponsiveViewportProfile_(e,n),l=(i==null?void 0:i.preferAxis)==="height"?"height":"width",g={...t};if(e==="desktop"){let O=Number((y=g.width)!=null?y:c.width)||c.width,C=Number((_=g.height)!=null?_:c.height)||c.height;g.width=Math.max(O,C),g.height=Math.min(O,C)}let u=this._getLockedResponsiveViewportProfile_(e,{...c,...g},l,n),m=this._normalizeResponsiveViewportProfiles_({...this.responsiveViewportProfiles||{},[o]:{...u}});this.responsiveViewportProfiles=m,this._config={...this._config||{},responsive_viewports:this._cloneJson_(this._serializeResponsiveViewportProfiles_(m))},(A=this._syncViewportPreviewUI_)==null||A.call(this),(T=this._applyAutoScale)==null||T.call(this),(E=this._syncTabsWidth_)==null||E.call(this);try{this._isInHaEditorPreview()||(M=this._queueSave)==null||M.call(this,"responsive-viewports")}catch{}}_swapResponsiveViewportOrientation_(){var n,o,c,l,g;let e=String(this.viewportPreviewMode||"live").toLowerCase();if(!this._responsiveProfileKeys_().includes(e)||e==="desktop")return;let i=this._getStoredResponsivePreviewOrientation_(e)==="portrait"?"landscape":"portrait";this._setStoredResponsivePreviewOrientation_(e,i),(n=this._ensureResponsiveViewportProfileLock_)==null||n.call(this,e,"width",i),(o=this._syncResponsiveProfileForViewport_)==null||o.call(this,{force:!0}),(c=this._syncResponsiveViewportFields_)==null||c.call(this),(l=this._syncViewportPreviewUI_)==null||l.call(this),(g=this._applyAutoScale)==null||g.call(this)}_shouldUseUnscaledPreviewCanvas_(){var i,n;return String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()!=="dynamic"||String(this.mobileDynamicBehavior||"native").toLowerCase()!=="native"?!1:(((i=this._getRequestedResponsiveProfile_)==null?void 0:i.call(this))||this._activeResponsiveProfile||((n=this._getActualResponsiveProfile_)==null?void 0:n.call(this))||"desktop")==="mobile"}_isMobileOptimizeActive_(){var e,t,i,n;try{if(!this.optimizeForMobile||(e=this._shouldUseUnscaledPreviewCanvas_)!=null&&e.call(this)||String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()!=="dynamic"||!this.autoResizeCards)return!1;let c=((t=this._getViewportMetrics_)==null?void 0:t.call(this))||{width:0,shortEdge:0,isPortrait:!1},l=(n=(i=window.matchMedia)==null?void 0:i.call(window,"(pointer: coarse)"))==null?void 0:n.matches;return c.shortEdge<=900&&(l||c.width<=820||c.isPortrait)}catch{return!1}}_getMobileScalePlan_(e=1,t=1){var m;let i=((m=this._getViewportMetrics_)==null?void 0:m.call(this))||{width:0,isPortrait:!1},n=Math.max(1,i.width||1),o=i.isPortrait?n<=390?.48:n<=430?.52:n<=520?.58:.64:n<=820?.64:.7,c=i.isPortrait?1.85:1.45,l=Math.max(t,t*c),g=Math.min(o,l),u=Math.max(t,g);return{scale:u,allowPanX:u>t+.001}}_getMobileTextAssistScale_(){var i;let e=((i=this._getViewportMetrics_)==null?void 0:i.call(this))||{width:0,isPortrait:!1},t=Math.max(1,e.width||1);return e.isPortrait?t<=390?.78:t<=430?.82:t<=520?.86:.9:t<=820?.88:.92}_dbgInit(){if(!this.__dbgReady){this.__dbgReady=!0,this._dbgBuffer=[],this._dbgMax=400;try{window.DDC=this}catch{}}}_dbgPush(e,t,i=null){let n={t:new Date().toISOString(),kind:e,msg:t,extra:i};this._dbgBuffer.push(n),this._dbgBuffer.length>this._dbgMax&&this._dbgBuffer.shift(),this.debug&&console.debug(`%c[ddc:${e}]%c ${t}`,"color:#03a9f4","color:unset",i!=null?i:"")}_dbgDump(){return[...this._dbgBuffer]}_safe(e){return String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}setConfig(e={}){var l,g,u,m,h,b,y,_,A,T,E,M,O,C,$,q,F,j,H,U,X,te,re,le,Le,me,de,Ce,ue,Ae,ye,Se,B,p,x,S,z,N,W,G,V,J,Z,he,_e,ke,Ee,Fe,je,et,ct,Pe,He,ht,tt,_t,Ct,St,xt,Mt,oe,pe,Ke,Ve,De,Ze,ae,Me,$e,ce,ut,wt;let t=this.storageKey;this.config={...e},(!this.config.storage_key||this.config.storage_key==="")&&(this.config.storage_key=this.constructor._genKey()),this.storageKey=this.config.storage_key,e.storage_key||(this.storageKey?e={...e,storage_key:this.storageKey}:(this.storageKey=`layout_${((l=crypto==null?void 0:crypto.randomUUID)==null?void 0:l.call(crypto))||Date.now().toString(36)}`,e={...e,storage_key:this.storageKey})),this._config=e,this.storageKey=e.storage_key,this._syncEditorsStorageKey(),this.storageKey=e.storage_key||void 0,this._syncEditorsStorageKey(),this.gridSize=Number((g=e.grid)!=null?g:10),this.dragLiveSnap=!!e.drag_live_snap,this.autoSave=e.auto_save!==!1,this.autoSaveDebounce=Number((u=e.auto_save_debounce)!=null?u:800),this.editModePin=this.editModePin!=null?this.editModePin:(h=(m=e.edit_mode_pin)!=null?m:e.editModePin)!=null?h:"",this.containerBackground=(b=e.container_background)!=null?b:"transparent",this.cardBackground=(y=e.card_background)!=null?y:"var(--ha-card-background, var(--card-background-color))",this.applyBackgroundToPage=!!((A=(_=e.apply_background_to_page)!=null?_:e.applyBackgroundToPage)!=null&&A),this.dashboardThemeEnabled=!!((E=(T=e.dashboard_theme_enabled)!=null?T:e.theme_enabled)!=null&&E),this.dashboardTheme=String((O=(M=e.dashboard_theme)!=null?M:e.theme_name)!=null?O:"").trim(),this.dashboardThemeOverrideAllDesign=!!(($=(C=e.dashboard_theme_override_all_design)!=null?C:e.theme_override_all_design)!=null&&$),this.outerGridBuffer=!!((q=e.outer_grid_buffer)!=null&&q),this.cardShadowEnabled=!!e.card_shadow,this.hideHaHeader=!!((j=(F=e.hide_HA_Header)!=null?F:e.hide_ha_header)!=null&&j),this.hideHaSidebar=!!((U=(H=e.hide_HA_Sidebar)!=null?H:e.hide_ha_sidebar)!=null&&U),this.debug=!!e.debug,this.editMode=!1,this._backendOK=!1,this.disableOverlap=!!e.disable_overlap,this.containerSizeMode=e.container_size_mode||"dynamic",this.doNotResizeText=!!((te=(X=e.do_not_resize_text)!=null?X:e.doNotResizeText)!=null&&te),this.optimizeForMobile=!!((le=(re=e.optimize_for_mobile)!=null?re:e.optimizeForMobile)!=null&&le),this.mobileDynamicBehavior=String((me=(Le=e.mobile_dynamic_behavior)!=null?Le:e.mobileDynamicBehavior)!=null?me:"native").toLowerCase()==="scale"?"scale":"native";let i=e.responsive_viewports||this.responsiveViewportProfiles;this.responsiveViewportProfiles=this._isLegacyResponsiveViewportProfiles_(i)?this._defaultResponsiveViewportProfiles_():this._normalizeResponsiveViewportProfiles_(i),this._responsiveConnectors=this._normalizeResponsiveConnectorLayouts_(e.connectors||[],e.responsive_connectors||null),this._connectorDrawMode=!1,this._connectorDraft=null,this._selectedConnectorId=null,this.__connectorPointDrag=null,String(this.containerSizeMode||"dynamic").toLowerCase()==="dynamic"?this.autoResizeCards=!0:this.autoResizeCards=e.auto_resize_cards!==!1,this.animateCards=!!e.animate_cards,this.screenSaverEnabled=!!((de=e.screen_saver_enabled)!=null&&de);let o=Number(e.screen_saver_delay);this.screenSaverDelay=Number.isFinite(o)&&o>0?o:5*6e4,this.autoResizeCards||String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(Ce=this._startScaleWatch)==null||Ce.call(this):(ue=this._stopScaleWatch)==null||ue.call(this),(Ae=this._applyAutoScale)==null||Ae.call(this),this.containerFixedWidth=Number((ye=e.container_fixed_width)!=null?ye:0)||null,this.containerFixedHeight=Number((Se=e.container_fixed_height)!=null?Se:0)||null,this.containerPreset=e.container_preset||"fullhd",this.containerPresetOrient=e.container_preset_orientation||"auto",this.heroImage=(e==null?void 0:e.hero_image)||"https://i.postimg.cc/CxsWQgwp/Chat-GPT-Image-Sep-5-2025-09-26-16-AM.png",this.tabs=Array.isArray(e.tabs)?e.tabs:[];{let ot=String(e.tabs_position||"top").toLowerCase();this.tabsPosition=ot==="left"||ot==="bottom"?ot:"top"}this.layersEnabled=!!((p=(B=e.layers_enabled)!=null?B:e.enable_layers)!=null&&p),this._setDashboardLayers_(e.layers||[],{refresh:!1}),this.defaultTab=e.default_tab||((S=(x=this.tabs[0])==null?void 0:x.id)!=null?S:"default"),this.hideTabsWhenSingle=e.hide_tabs_when_single!==!1,this.activeTab=this.defaultTab;try{let ot=localStorage.getItem(`ddc_lasttab_${this.storageKey}`);ot&&this.tabs.some(Qe=>Qe.id===ot)&&(this.activeTab=ot)}catch{}(z=this._syncTabsPlacement_)==null||z.call(this),this.cardContainer&&this._applyContainerSizingFromConfig(!1);let c=t!==this.storageKey;if(this.editMode&&!this.__booting&&!c)try{this._isInHaEditorPreview()||this._queueSave("config-change")}catch{}this._applyGridVars();try{(N=this._applyBackgroundImageFromConfig)==null||N.call(this)}catch{}try{(W=this._applyHaChromeVisibility_)==null||W.call(this)}catch{}this._ensureOverlayZFix();try{(G=this._updateScreensaverSettings)==null||G.call(this)}catch{}if(this._selection=new Set,this.__groupDrag=null,this.__editorCache=new Map,this.__stubCache=new Map,this._dbgInit(),this._dbgPush("init","Card configured",{storageKey_raw:e.storage_key,storageKey_slug:this.storageKey,autoSave:this.autoSave,grid:this.gridSize}),(V=this._applyDashboardThemeStyling_)==null||V.call(this),!window.jsyaml){let ot=document.createElement("script");ot.src="https://cdnjs.cloudflare.com/ajax/libs/js-yaml/4.1.0/js-yaml.min.js",document.head.appendChild(ot)}if(!window.interact){let ot=document.createElement("script");ot.src="https://cdn.jsdelivr.net/npm/interactjs/dist/interact.min.js",ot.onload=()=>this._initInteract(),document.head.appendChild(ot)}if(this._helpersPromise=typeof window.loadCardHelpers=="function"?window.loadCardHelpers().catch(()=>null):Promise.resolve(null),!this._built){this._built=!0,this.shadowRoot.innerHTML=`
        <style>


.ddc-root{
  position:relative;
  z-index: 1;
  /* JS will keep this in sync with your \u201CGrid (px)\u201D */
  --ddc-grid-size: 10px;
  /* Good contrast on light/dark themes */
  --ddc-grid-color: color-mix(in srgb, var(--primary-text-color) 22%, transparent);
  --ddc-left-rail-width: clamp(84px, 7vw, 104px);
  --ddc-left-rail-gap: clamp(18px, 2.6vw, 30px);

  /* Container we query for width */
  container-type: inline-size;
  container-name: ddc-root;
}

.ddc-root.ddc-tabs-left-layout{
  display:grid;
  grid-template-columns: var(--ddc-left-rail-width) minmax(0, 1fr);
  grid-template-areas:
    "toolbar toolbar"
    "tabs canvas";
  column-gap: var(--ddc-left-rail-gap);
  align-items:start;
}

.ddc-root.ddc-tabs-left-layout > .ddc-toolbar{
  grid-area: toolbar;
}

.ddc-root.ddc-tabs-left-layout > .ddc-tabs{
  grid-area: tabs;
  justify-self: center;
  align-self: start;
}

.ddc-root.ddc-tabs-left-layout > .ddc-scale-outer,
.ddc-root.ddc-tabs-left-layout > .card-container{
  grid-area: canvas;
  min-width: 0;
}

.ddc-root.ddc-tabs-bottom-layout .ddc-scale-outer,
.ddc-root.ddc-tabs-bottom-layout .card-container{
  margin-bottom: 86px;
}

@container ddc-root (max-width: 980px){
  .ddc-root.ddc-tabs-left-layout{
    grid-template-columns: 1fr;
    grid-template-areas:
      "toolbar"
      "tabs"
      "canvas";
    row-gap: 12px;
  }

  .ddc-root.ddc-tabs-left-layout > .ddc-tabs{
    align-self: start;
  }
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
  pointer-events: auto;
}

/* Vertical placement */
:host([ddc-fixed-ui]) .ddc-toolbar {
  top: calc(var(--ddc-top-gutter, 0px) + max(env(safe-area-inset-top, 0px), 0px));
  z-index: 8;
}
:host([ddc-fixed-ui]) .ddc-tabs {
  top: calc(var(--ddc-top-gutter, 0px) + max(env(safe-area-inset-top, 0px), 0px) + var(--ddc-toolbar-height, 0px));
  z-index: 5;
}
:host([ddc-fixed-ui]) .ddc-tabs.ddc-tabs-bottom {
  top: auto;
  bottom: max(env(safe-area-inset-bottom, 0px), 12px);
}

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

/* Mobile: force sticky top behavior instead of fixed centering */
@media (max-width: 768px) {
  :host([ddc-fixed-ui]) .ddc-toolbar,
  :host([ddc-fixed-ui]) .ddc-tabs,
  .ddc-tabs {
    position: sticky !important;
    left: 0 !important;
    transform: none !important;
    width: 100% !important;
    max-width: 100% !important;
    margin: 0;
  }

  :host([ddc-fixed-ui]) .ddc-toolbar {
    top: calc(var(--ddc-top-gutter, 0px) + max(env(safe-area-inset-top, 0px), 0px)) !important;
  }

  :host([ddc-fixed-ui]) .ddc-tabs,
  .ddc-tabs {
    top: calc(var(--ddc-top-gutter, 0px) + max(env(safe-area-inset-top, 0px), 0px) + var(--ddc-toolbar-height, 0px)) !important;
    padding-inline: 0;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    -webkit-mask-image: none;
    mask-image: none;
  }

  :host([ddc-fixed-ui]) .ddc-tabs.ddc-tabs-bottom,
  .ddc-tabs.ddc-tabs-bottom {
    position: fixed !important;
    top: auto !important;
    bottom: max(env(safe-area-inset-bottom, 0px), 8px) !important;
    left: 0 !important;
    right: 0 !important;
    transform: none !important;
    width: 100% !important;
    max-width: 100% !important;
  }
}
/* ===== DDC Toolbar and tabs when auto sieze is off END ===== */


/* ===== DDC Toolbar \u2014 Minimal Redesign (pills with accent tint) ===== */


/* scope to either version */
.ddc-toolbar.streamlined.v2,
.ddc-toolbar.streamlined.v3{
  --ddc-bg:
    linear-gradient(
      180deg,
      color-mix(in oklab, var(--card-background-color, #11151a) 92%, rgba(255,255,255,.02)),
      color-mix(in oklab, var(--primary-background-color, #0c1014) 78%, rgba(255,255,255,.01))
    );
  --ddc-border: color-mix(in oklab, #fff 12%, transparent);
  --ddc-soft: color-mix(in oklab, #fff 6%, transparent);
  --ddc-shadow: 0 14px 36px rgba(0,0,0,.28), 0 4px 14px rgba(0,0,0,.18);
  --ddc-shell-highlight: linear-gradient(90deg, rgba(255,255,255,.045), transparent 24%, transparent 76%, rgba(255,255,255,.025));
  --ddc-btn-border: color-mix(in oklab, #fff 14%, transparent);
  --ddc-btn-surface:
    linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,.015)),
    color-mix(in oklab, var(--primary-background-color, #0e1116) 24%, transparent);

  /* section accent colors */
  --sec-primary: #6f859c;
  --sec-clip:    #877d8f;
  --sec-share:   #6d8f94;
  --sec-utils:   #738975;
  --sec-status:  #a37067;

  --btn-h: 40px;
  --btn-r: 14px;
  --btn-gap: 8px;

  /* animation vars */
  --ddc-ease: cubic-bezier(.2,.7,.2,1);
  --ddc-dur: 260ms;
  --open-h: 0px; /* JS sets this to scrollHeight */

  position: sticky;
  top: calc(var(--ddc-top-gutter, 0px) + max(env(safe-area-inset-top, 0px), 0px));
  z-index: 8;
  isolation: isolate;
  background: var(--ddc-bg);
  border: 1px solid var(--ddc-border);
  border-top: 0;
  border-radius: 0 0 28px 28px;
  backdrop-filter: blur(18px) saturate(1.08);
  -webkit-backdrop-filter: blur(18px) saturate(1.08);
  box-shadow: var(--ddc-shadow);
  padding: 14px clamp(14px, 1.8vw, 22px) 14px;

  /* never exceed the root\u2019s width */
  max-width: 100%;

  /* GRID (kept ready) */
  display: none;
  grid-template-columns:
    minmax(240px, 1.08fr)
    minmax(200px, .9fr)
    minmax(290px, 1.14fr)
    minmax(240px, .98fr)
    minmax(170px, .68fr);
  grid-template-areas:
    "primary clip share utils status"
    "layouts layouts layouts layouts status";
  column-gap: 12px;
  row-gap: 12px;
  align-items: stretch;

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

.ddc-toolbar.streamlined.v2::before,
.ddc-toolbar.streamlined.v3::before{
  content:"";
  position:absolute;
  inset:0;
  border-radius: inherit;
  background:
    radial-gradient(circle at top left, rgba(255,255,255,.05), transparent 34%),
    radial-gradient(circle at top right, rgba(255,255,255,.035), transparent 34%),
    var(--ddc-shell-highlight);
  opacity:.88;
  pointer-events:none;
}

.ddc-toolbar.streamlined.v2 > *,
.ddc-toolbar.streamlined.v3 > *{
  position:relative;
  z-index:1;
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

.ddc-toolbar.streamlined.v2 .ddc-toolbar-toggle,
.ddc-toolbar.streamlined.v3 .ddc-toolbar-toggle{
  position:absolute;
  top:12px;
  right:12px;
  z-index:3;
  appearance:none;
  -webkit-appearance:none;
  width:40px;
  height:40px;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  border-radius:14px;
  border:1px solid color-mix(in oklab, #fff 14%, transparent);
  background:
    linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.02)),
    color-mix(in oklab, var(--primary-background-color, #0e1116) 26%, transparent);
  color:var(--primary-text-color, #eef2f7);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.06), 0 10px 18px rgba(0,0,0,.18);
  cursor:pointer;
  transition: transform .08s, background .16s, border-color .16s, box-shadow .16s;
}
.ddc-toolbar.streamlined.v2 .ddc-toolbar-toggle:hover,
.ddc-toolbar.streamlined.v3 .ddc-toolbar-toggle:hover{
  transform: translateY(-1px);
  border-color: color-mix(in oklab, var(--sec-share) 26%, rgba(255,255,255,.14));
  background:
    linear-gradient(180deg, rgba(255,255,255,.12), rgba(255,255,255,.04)),
    color-mix(in oklab, var(--primary-background-color, #0e1116) 30%, transparent);
}
.ddc-toolbar.streamlined.v2 .ddc-toolbar-toggle ha-icon,
.ddc-toolbar.streamlined.v3 .ddc-toolbar-toggle ha-icon{
  --mdc-icon-size:18px;
  width:18px;
  height:18px;
}

.ddc-toolbar.streamlined.v2.is-collapsed,
.ddc-toolbar.streamlined.v3.is-collapsed{
  display:flex !important;
  flex-wrap:nowrap;
  align-items:center;
  justify-content:center;
  gap:2px;
  width:100% !important;
  min-width:0;
  max-width:100%;
  margin-inline:0;
  padding:12px 14px;
  overflow-x:auto;
  overflow-y:hidden;
  scrollbar-width:none;
  -ms-overflow-style:none;
}
.ddc-toolbar.streamlined.v2.is-collapsed::-webkit-scrollbar,
.ddc-toolbar.streamlined.v3.is-collapsed::-webkit-scrollbar{
  display:none;
}
.ddc-toolbar.streamlined.v2.is-collapsed::before,
.ddc-toolbar.streamlined.v3.is-collapsed::before{
  opacity:.72;
}
.ddc-toolbar.streamlined.v2.is-collapsed .ddc-sec,
.ddc-toolbar.streamlined.v3.is-collapsed .ddc-sec{
  display:flex;
  flex-direction:row;
  margin:0;
  align-items:center;
  gap:4px;
  flex:0 0 auto;
  min-width:0;
  padding:0;
  border:0;
  background:none;
  box-shadow:none;
}
.ddc-toolbar.streamlined.v2.is-collapsed .ddc-sec-head,
.ddc-toolbar.streamlined.v3.is-collapsed .ddc-sec-head,
.ddc-toolbar.streamlined.v2.is-collapsed .ddc-preview-stack,
.ddc-toolbar.streamlined.v3.is-collapsed .ddc-preview-stack,
.ddc-toolbar.streamlined.v2.is-collapsed .sec-layouts,
.ddc-toolbar.streamlined.v3.is-collapsed .sec-layouts,
.ddc-toolbar.streamlined.v2.is-collapsed .sec-status,
.ddc-toolbar.streamlined.v3.is-collapsed .sec-status{
  display:none !important;
}
.ddc-toolbar.streamlined.v2.is-collapsed .ddc-row,
.ddc-toolbar.streamlined.v3.is-collapsed .ddc-row{
  display:flex;
  flex-direction:row;
  align-items:center;
  flex-wrap:nowrap;
  gap:4px;
  grid-template-columns:none;
  margin:0;
}
.ddc-toolbar.streamlined.v2.is-collapsed .ddc-toolbar-toggle,
.ddc-toolbar.streamlined.v3.is-collapsed .ddc-toolbar-toggle{
  position:static;
  top:auto;
  right:auto;
  flex:0 0 auto;
  order:99;
  margin:0 0 0 4px;
}
.ddc-toolbar.streamlined.v2.is-collapsed .btn,
.ddc-toolbar.streamlined.v3.is-collapsed .btn{
  width:40px;
  min-width:40px;
  flex:0 0 auto;
  height:40px;
  padding:0;
  border-radius:13px;
  gap:0;
  justify-content:center;
}
.ddc-toolbar.streamlined.v2.is-collapsed .btn .label,
.ddc-toolbar.streamlined.v3.is-collapsed .btn .label{
  display:none !important;
}
.ddc-toolbar.streamlined.v2.is-collapsed .btn.cta-add,
.ddc-toolbar.streamlined.v3.is-collapsed .btn.cta-add,
.ddc-toolbar.streamlined.v2.is-collapsed #applyLayoutBtn,
.ddc-toolbar.streamlined.v3.is-collapsed #applyLayoutBtn,
.ddc-toolbar.streamlined.v2.is-collapsed #settingsBtn,
.ddc-toolbar.streamlined.v3.is-collapsed #settingsBtn{
  grid-column:auto;
}
.ddc-toolbar.streamlined.v2.is-collapsed .btn.cta-add::after,
.ddc-toolbar.streamlined.v3.is-collapsed .btn.cta-add::after{
  display:none;
}
.ddc-toolbar.streamlined.v2.is-collapsed .btn.cta-add,
.ddc-toolbar.streamlined.v3.is-collapsed .btn.cta-add{
  height:40px;
  padding:0;
  border-radius:13px;
  box-shadow:0 8px 16px color-mix(in oklab, var(--sec-primary) 22%, transparent);
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

  display: grid;
  align-content: start;
  gap: 10px;
  min-width: 0;
  padding: 12px;
  border-radius: 20px;

  /* accent-tinted background & border */
  background:
    linear-gradient(180deg,
      color-mix(in oklab, var(--pill-accent) 10%, transparent),
      transparent 52%),
    color-mix(in oklab, var(--primary-background-color, #0e1116) 18%, transparent);
  border: 1px solid color-mix(in oklab, var(--pill-accent) 18%, rgba(255,255,255,.12));
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.06),
    0 10px 22px rgba(0,0,0,.16);
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
  min-height: 18px;
  font-weight: 700;
  font-size: .72rem;
  letter-spacing: .16em;
  text-transform: uppercase;
  opacity: .96;
}
.ddc-toolbar.streamlined.v2 .sec-primary .ddc-sec-head{ --accent: var(--sec-primary); color: var(--sec-primary); }
.ddc-toolbar.streamlined.v2 .sec-clip    .ddc-sec-head{ --accent: var(--sec-clip);    color: var(--sec-clip); }
.ddc-toolbar.streamlined.v2 .sec-share   .ddc-sec-head{ --accent: var(--sec-share);   color: var(--sec-share); }
.ddc-toolbar.streamlined.v2 .sec-utils   .ddc-sec-head{ --accent: var(--sec-utils);   color: var(--sec-utils); }
.ddc-toolbar.streamlined.v2 .sec-status  .ddc-sec-head{ --accent: var(--sec-status);  color: var(--sec-status); }
.ddc-toolbar.streamlined.v2 .sec-layouts .ddc-sec-head{ --accent: var(--sec-clip);    color: var(--sec-clip); }

.ddc-toolbar.streamlined.v2 .ddc-sec-dot{
  width: 8px; height: 8px; border-radius: 50%; background: currentColor; opacity: .95;
  box-shadow: 0 0 0 6px color-mix(in oklab, currentColor 14%, transparent);
}

/* row of actions inside the pill */
.ddc-toolbar.streamlined.v2 .ddc-row{
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: stretch;
  gap: var(--btn-gap);
  margin: 0;
}

/* buttons (reset native look + style) */
.ddc-toolbar.streamlined.v2 .btn{
  appearance:none; -webkit-appearance:none;
  width: 100%;
  min-width: 0;
  display:inline-flex; align-items:center; justify-content:center; gap:8px;
  height:var(--btn-h); padding:0 12px; border-radius:var(--btn-r);
  background: var(--ddc-btn-surface);
  border:1px solid var(--ddc-btn-border);
  color: var(--primary-text-color, #e5e7eb);
  cursor:pointer; font:inherit; white-space:nowrap;
  box-shadow: inset 0 1px 0 rgba(255,255,255,.04);
  transition: transform .08s, background .16s, border-color .16s, box-shadow .16s;
}
.ddc-toolbar.streamlined.v2 .btn ha-icon{ --mdc-icon-size:18px; width:18px; height:18px; display:inline-block; }
.ddc-toolbar.streamlined.v2 .btn:hover{
  transform: translateY(-1px);
  background:
    linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.025)),
    color-mix(in oklab, var(--primary-background-color, #0e1116) 28%, transparent);
  border-color: color-mix(in oklab, var(--pill-accent) 22%, rgba(255,255,255,.14));
  box-shadow: inset 0 1px 0 rgba(255,255,255,.06), 0 10px 16px rgba(0,0,0,.14);
}
.ddc-toolbar.streamlined.v2 .btn:active{ transform: translateY(0); }
.ddc-toolbar.streamlined.v2 .btn:focus-visible{ outline:none; box-shadow:0 0 0 2px color-mix(in oklab, #fff 15%, transparent); }
.ddc-toolbar.streamlined.v2 .btn.secondary{
  background:
    linear-gradient(180deg, rgba(255,255,255,.035), rgba(255,255,255,.01)),
    transparent;
}
.ddc-toolbar.streamlined.v2 .btn.info{
  background:
    linear-gradient(180deg, rgba(255,255,255,.11), rgba(255,255,255,.03)),
    color-mix(in oklab, var(--sec-share) 60%, rgba(255,255,255,.12));
  color:#10252a;
  border-color: color-mix(in oklab, var(--sec-share) 30%, transparent);
}
.ddc-toolbar.streamlined.v2 .btn.danger{
  background:
    linear-gradient(180deg, rgba(255,255,255,.1), rgba(255,255,255,.03)),
    color-mix(in oklab, var(--sec-status) 72%, rgba(255,255,255,.08));
  color:#2d120e;
  border-color: color-mix(in oklab, var(--sec-status) 30%, transparent);
}

/* >>> Make "Add Card" extra prominent */
.ddc-toolbar.streamlined.v2 .btn.cta-add{
  --glow: color-mix(in oklab, var(--sec-primary) 65%, #fff 0%);
  grid-column: 1 / -1;
  height: 44px; padding: 0 16px; border-radius: 16px;
  font-weight: 800; letter-spacing: .2px;
  background: linear-gradient(135deg, var(--sec-primary), color-mix(in oklab, var(--sec-primary) 60%, #fff 0%));
  color:#fff;
  border-color: color-mix(in oklab, var(--sec-primary) 55%, #000);
  box-shadow: 0 10px 24px color-mix(in oklab, var(--sec-primary) 34%, transparent), 0 0 0 2px color-mix(in oklab, var(--sec-primary) 22%, transparent) inset;
}
.ddc-toolbar.streamlined.v2 .btn.cta-add::after{
  content:""; position:absolute; inset:-4px; border-radius:16px;
  border:2px solid color-mix(in oklab, var(--sec-primary) 45%, transparent);
  opacity:.6; pointer-events:none;
}

.ddc-toolbar.streamlined.v2 #applyLayoutBtn,
.ddc-toolbar.streamlined.v2 #settingsBtn{
  grid-column: 1 / -1;
}

/* status: dot above text, HIGH-CONTRAST text */
.ddc-toolbar.streamlined.v2 .ddc-t-status{
  width: 100%;
  display:flex; flex-direction: column; align-items:center; justify-content:center;
  gap: 4px; text-align: center;
  min-width: 0; min-height: 54px; padding: 10px 12px; border-radius: 16px;
  background:
    linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02)),
    color-mix(in oklab, var(--primary-background-color, #0b0d10) 30%, transparent);
  border: 1px solid color-mix(in oklab, #ffffff 18%, transparent);
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
  justify-content: center;
  width: 100%;
  min-width: 0;
  min-height: 54px;
  border: 1px solid color-mix(in oklab, var(--sec-utils) 30%, transparent);
  border-radius: 16px;
  padding: 8px 12px;
  font-size: .88rem;
  background:
    linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02)),
    color-mix(in oklab, var(--sec-utils) 18%, transparent);
  color: #f8fbff;
  text-align:center;
}

.ddc-toolbar.streamlined.v2 .sec-status{
  align-content: start;
}

.ddc-toolbar.streamlined.v2 .sec-status .ddc-row{
  grid-template-columns: 1fr;
}

/* Layouts: inline switcher styling */
.ddc-toolbar.streamlined.v2 .sec-layouts{
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  gap: 14px 18px;
}
.ddc-toolbar.streamlined.v2 .sec-layouts .ddc-row.center{
  display:block;
  margin: 0;
}
.ddc-toolbar.streamlined.v2 .sec-layouts .layout-host{
  display:flex; align-items:center; gap:10px; color:#cfd6de;
  width:100%;
}
.ddc-toolbar.streamlined.v2 .sec-layouts .ddc-switcher-inline{
  display:grid;
  grid-template-columns: auto minmax(240px, 1fr) auto auto auto;
  align-items:center;
  gap:8px;
  padding:10px 12px;
  border-radius:16px;
  background:
    linear-gradient(180deg, rgba(255,255,255,.04), rgba(255,255,255,.015)),
    color-mix(in oklab, var(--primary-background-color, #0e1116) 20%, transparent);
  border: 1px solid color-mix(in oklab, var(--sec-clip) 16%, rgba(255,255,255,.12));
  width:100%;
  box-sizing:border-box;
}
.ddc-toolbar.streamlined.v2 .sec-layouts .ddc-switcher-inline .label{
  color:#cfd6de;
  font-size:.72rem;
  font-weight:700;
  letter-spacing:.14em;
  text-transform:uppercase;
}
.ddc-toolbar.streamlined.v2 .sec-layouts .ddc-switcher-inline select{
  appearance:none; -webkit-appearance:none;
  min-width: 0;
  width: 100%;
  height: 40px;
  padding: 0 38px 0 12px;
  border-radius: 12px;
  border:1px solid color-mix(in oklab, #ffffff 14%, transparent);
  background:
    linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,.02)),
    var(--primary-background-color, #0e1116);
  color: var(--primary-text-color, #e5e7eb);
  font: inherit;
  line-height: 1;
  cursor: pointer;
  box-shadow: inset 0 1px 1px rgba(255,255,255,.04);
}
.ddc-toolbar.streamlined.v2 .sec-layouts .ddc-switcher-inline button,
.ddc-toolbar.streamlined.v2 .sec-layouts .ddc-switcher-inline .btn{
  appearance:none; -webkit-appearance:none;
  width:auto;
  display:inline-flex; align-items:center; justify-content:center; gap:8px;
  height:36px; padding:0 12px; border-radius:12px;
  background:
    linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,.02)),
    color-mix(in oklab, var(--primary-background-color, #0e1116) 16%, transparent);
  border:1px solid color-mix(in oklab, #ffffff 12%, transparent);
  color: var(--primary-text-color, #e5e7eb);
  cursor:pointer; font:inherit; white-space:nowrap;
  transition: transform .08s, background .16s, border-color .16s, box-shadow .16s;
  flex: 0 0 auto;
  min-width: fit-content;
}
.ddc-toolbar.streamlined.v2 .sec-layouts .ddc-switcher-inline .btn[disabled]{
  opacity:.45;
  cursor:not-allowed;
  transform:none;
}

.ddc-toolbar.streamlined.v2 .ddc-preview-stack{
  grid-column: 1 / -1;
  display:grid;
  gap:10px;
  margin-top: 2px;
}

.ddc-toolbar.streamlined.v2 .ddc-preview-head{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:12px;
}

.ddc-toolbar.streamlined.v2 .ddc-preview-label{
  font-size:.68rem;
  font-weight:700;
  letter-spacing:.12em;
  text-transform:uppercase;
  color: color-mix(in oklab, var(--primary-text-color, #e5e7eb) 68%, transparent);
}

.ddc-toolbar.streamlined.v2 .ddc-preview-meta{
  font-size:.74rem;
  font-weight:700;
  color: color-mix(in oklab, var(--primary-text-color, #e5e7eb) 84%, transparent);
}

.ddc-toolbar.streamlined.v2 .ddc-preview-modes{
  display:grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap:8px;
}

.ddc-toolbar.streamlined.v2 .ddc-preview-chip{
  appearance:none;
  -webkit-appearance:none;
  min-width:0;
  height:36px;
  padding:0 10px;
  border-radius:12px;
  border:1px solid color-mix(in oklab, #ffffff 12%, transparent);
  background:
    linear-gradient(180deg, rgba(255,255,255,.045), rgba(255,255,255,.018)),
    color-mix(in oklab, var(--primary-background-color, #0e1116) 18%, transparent);
  color: var(--primary-text-color, #e5e7eb);
  font: inherit;
  font-size:.82rem;
  font-weight:700;
  cursor:pointer;
  transition: transform .08s, background .16s, border-color .16s, color .16s;
}

.ddc-toolbar.streamlined.v2 .ddc-preview-chip--icon{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  min-width:42px;
  padding:0;
}

.ddc-toolbar.streamlined.v2 .ddc-preview-chip--icon ha-icon{
  --mdc-icon-size: 18px;
}

.ddc-toolbar.streamlined.v2 .ddc-preview-chip:hover{
  transform: translateY(-1px);
  border-color: color-mix(in oklab, var(--sec-share) 22%, rgba(255,255,255,.14));
  background:
    linear-gradient(180deg, rgba(255,255,255,.07), rgba(255,255,255,.025)),
    color-mix(in oklab, var(--primary-background-color, #0e1116) 24%, transparent);
}

.ddc-toolbar.streamlined.v2 .ddc-preview-chip.is-active{
  background:
    linear-gradient(180deg, rgba(255,255,255,.1), rgba(255,255,255,.03)),
    color-mix(in oklab, var(--sec-share) 58%, rgba(255,255,255,.12));
  border-color: color-mix(in oklab, var(--sec-share) 34%, transparent);
  color:#10252a;
  box-shadow: inset 0 1px 0 rgba(255,255,255,.14);
}

.ddc-toolbar.streamlined.v2 .ddc-preview-chip:disabled{
  opacity:.5;
  cursor:not-allowed;
  transform:none;
}

.ddc-toolbar.streamlined.v2 .ddc-preview-dimensions{
  display:grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) auto;
  gap:8px;
  align-items:end;
}

.ddc-toolbar.streamlined.v2 .ddc-preview-field{
  display:grid;
  gap:6px;
  min-width:0;
}

.ddc-toolbar.streamlined.v2 .ddc-preview-field span{
  font-size:.66rem;
  font-weight:700;
  letter-spacing:.12em;
  text-transform:uppercase;
  color: color-mix(in oklab, var(--primary-text-color, #e5e7eb) 66%, transparent);
}

.ddc-toolbar.streamlined.v2 .ddc-preview-field input{
  appearance:none;
  -webkit-appearance:none;
  width:100%;
  min-width:0;
  height:38px;
  padding:0 12px;
  border-radius:12px;
  border:1px solid color-mix(in oklab, #ffffff 12%, transparent);
  background:
    linear-gradient(180deg, rgba(255,255,255,.045), rgba(255,255,255,.018)),
    color-mix(in oklab, var(--primary-background-color, #0e1116) 18%, transparent);
  color: var(--primary-text-color, #e5e7eb);
  font: inherit;
  box-sizing:border-box;
}

.ddc-toolbar.streamlined.v2 .ddc-preview-field input:disabled{
  opacity:.55;
}

@media (max-width: 720px){
  .ddc-toolbar.streamlined.v2 .ddc-preview-modes{
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .ddc-toolbar.streamlined.v2 .ddc-preview-dimensions{
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  }

  .ddc-toolbar.streamlined.v2 .ddc-preview-chip--icon{
    grid-column: 1 / -1;
  }
}

.ddc-root.ddc-preview-active .ddc-scale-outer{
  padding: 0;
  margin: clamp(24px, 3.4vw, 56px) auto clamp(48px, 6vw, 92px);
}

.ddc-preview-device-frame{
  position: relative;
  pointer-events:none;
  z-index:0;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
}

.ddc-preview-device-frame{
  position:absolute;
  z-index:0;
  pointer-events:none;
}

.ddc-preview-device-frame::before{
  content:none;
}

.ddc-preview-device-frame::after{
  content:"";
  position:absolute;
  left: var(--ddc-preview-asset-left, 0px);
  top: var(--ddc-preview-asset-top, 0px);
  width: var(--ddc-preview-asset-width, 100%);
  height: var(--ddc-preview-asset-height, 100%);
  z-index:0;
  pointer-events:none;
  background-image: var(--ddc-preview-frame-url, none);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  transform: rotate(var(--ddc-preview-asset-rotation, 0deg));
  transform-origin: center center;
  filter: drop-shadow(0 16px 32px rgba(0,0,0,.18));
}

.ddc-preview-frame-viewport-box{
  position:absolute;
  z-index:1;
  pointer-events:none;
  border-radius: 18px;
  border: 2px dashed rgba(102, 225, 255, 0.88);
  background: rgba(102, 225, 255, 0.04);
  box-shadow:
    inset 0 0 0 1px rgba(102, 225, 255, 0.18),
    0 0 0 1px rgba(7, 23, 31, 0.12);
}

.ddc-preview-frame-viewport-box::after{
  content: attr(data-debug);
  position:absolute;
  left: 12px;
  bottom: 12px;
  max-width: calc(100% - 24px);
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  padding: 5px 9px;
  border-radius: 999px;
  background: rgba(6, 20, 28, 0.72);
  border: 1px solid rgba(102, 225, 255, 0.34);
  color: rgba(208, 247, 255, 0.96);
  font-size: .68rem;
  font-weight: 700;
  letter-spacing: .04em;
  text-transform: uppercase;
}

.ddc-root.ddc-preview-device-active .ddc-scale-outer{
  position: relative;
  z-index:1;
}

.ddc-root.ddc-preview-device-mobile.ddc-preview-active .ddc-scale-outer{
  margin-top: clamp(20px, 3vw, 34px);
  margin-bottom: clamp(56px, 7vw, 104px);
}

.ddc-root.ddc-preview-device-tablet.ddc-preview-active .ddc-scale-outer{
  margin-top: clamp(26px, 3.6vw, 48px);
  margin-bottom: clamp(52px, 6.6vw, 98px);
}

.ddc-root.ddc-preview-device-desktop.ddc-preview-active .ddc-scale-outer{
  margin-top: clamp(22px, 3vw, 40px);
  margin-bottom: clamp(48px, 6vw, 88px);
}

.ddc-root.ddc-edit-mode-active .ddc-scale-outer{
  position: relative;
}

.ddc-root.ddc-edit-mode-active .ddc-scale-outer::before{
  content:"";
  position:absolute;
  inset:0;
  z-index:5;
  pointer-events:none;
  border-radius: 18px;
  box-shadow:
    inset 0 0 0 2px rgba(255, 196, 92, 0.96),
    0 0 0 1px rgba(255, 196, 92, 0.32);
}

.ddc-root.ddc-edit-mode-active.ddc-preview-active .ddc-scale-outer::before{
  box-shadow:
    inset 0 0 0 3px rgba(255, 196, 92, 0.98),
    0 0 0 1px rgba(255, 196, 92, 0.38),
    0 0 0 10px rgba(255, 196, 92, 0.08);
}

.ddc-root.ddc-edit-mode-active .ddc-scale-outer::after{
  content:"Active Viewport";
  position:absolute;
  top:12px;
  left:12px;
  z-index:6;
  pointer-events:none;
  padding:6px 10px;
  border-radius:999px;
  background: rgba(255, 196, 92, 0.14);
  border:1px solid rgba(255, 196, 92, 0.42);
  color: rgba(255, 228, 176, 0.96);
  font-size:.72rem;
  font-weight:700;
  letter-spacing:.08em;
  text-transform:uppercase;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

/* JS shim to override default hidden state purely for measuring/animating */
.ddc-toolbar.streamlined.v2[data-force-open="1"],
.ddc-toolbar.streamlined.v3[data-force-open="1"]{
  display: grid !important;
}

/* ===== STACK WHEN ROOT IS NARROW (uses .ddc-root width) ===== */
@container ddc-root (max-width: 1480px){
  .ddc-toolbar.streamlined.v2,
  .ddc-toolbar.streamlined.v3{
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-template-areas:
      "primary clip share status"
      "utils utils layouts layouts";
  }
}

@container ddc-root (max-width: 1120px){
  .ddc-toolbar.streamlined.v2,
  .ddc-toolbar.streamlined.v3{
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-areas:
      "primary share"
      "clip utils"
      "status status"
      "layouts layouts";
  }
}

@container ddc-root (max-width: 860px){
  .ddc-toolbar.streamlined.v2 .ddc-row,
  .ddc-toolbar.streamlined.v3 .ddc-row{
    grid-template-columns: 1fr;
  }

  .ddc-toolbar.streamlined.v2 .sec-layouts{
    grid-template-columns: 1fr;
    align-items: stretch;
  }

  .ddc-toolbar.streamlined.v2 .sec-layouts .ddc-switcher-inline{
    grid-template-columns: 1fr;
  }

  .ddc-toolbar.streamlined.v2,
  .ddc-toolbar.streamlined.v3{
    max-width: 100%;
    margin: 10px 0 12px 0;
    border-radius: 22px;
  }
}

/* Fallback for environments without container queries */
@supports not (container-type: inline-size){
  @media (max-width: 1480px){
    .ddc-toolbar.streamlined.v2,
    .ddc-toolbar.streamlined.v3{
      grid-template-columns: repeat(4, minmax(0, 1fr));
      grid-template-areas:
        "primary clip share status"
        "utils utils layouts layouts";
    }
  }
  @media (max-width: 1120px){
    .ddc-toolbar.streamlined.v2,
    .ddc-toolbar.streamlined.v3{
      grid-template-columns: repeat(2, minmax(0, 1fr));
      grid-template-areas:
        "primary share"
        "clip utils"
        "status status"
        "layouts layouts";
    }
  }
  @media (max-width: 860px){
    .ddc-toolbar.streamlined.v2 .ddc-row,
    .ddc-toolbar.streamlined.v3 .ddc-row{
      grid-template-columns: 1fr;
    }
    .ddc-toolbar.streamlined.v2 .sec-layouts,
    .ddc-toolbar.streamlined.v3 .sec-layouts{
      grid-template-columns: 1fr;
      align-items: stretch;
    }
    .ddc-toolbar.streamlined.v2 .sec-layouts .ddc-switcher-inline,
    .ddc-toolbar.streamlined.v3 .sec-layouts .ddc-switcher-inline{
      grid-template-columns: 1fr;
    }
    .ddc-toolbar.streamlined.v2,
    .ddc-toolbar.streamlined.v3{
      margin: 10px 0 12px 0;
      border-radius: 22px;
    }
  }
}

/* Optional: make sure all children use border-box inside the toolbar */
.ddc-toolbar.streamlined.v2 *,
.ddc-toolbar.streamlined.v3 * { box-sizing: border-box; }

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
        background-position: 0 0;
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

      .ddc-page-bg-host{
        position: fixed;
        inset: 0;
        z-index: 0;
        overflow: hidden;
        pointer-events: none;
        opacity: var(--ddc-bg-opacity, 1);
        display: none;
      }

      .ddc-page-bg-host > *{
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
      }

      .card-wrapper{
        position:absolute;
        left: 0; top: 0;
        box-sizing: border-box;
        border:2px solid var(--ddc-card-border-color, transparent);
        background:var(--ddc-card-local-bg, var(--ddc-card-bg, var(--card-background-color)));
        cursor:grab;
        overflow:auto;
        border-radius:14px;
        /* Allow a custom drop shadow via --ddc-card-shadow. Fallback to the HA default if unset */
        box-shadow: var(--ddc-card-local-shadow, var(--ddc-card-shadow, var(--ha-card-box-shadow,0 2px 12px rgba(0,0,0,.18))));
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
        --ha-card-background: var(--ddc-card-inner-bg, transparent) !important;

        /* Many cards also set a background on the host element; neutralize it. */
        background: var(--ddc-card-inner-bg, transparent) !important;
      }

      /* Ensure <ha-card> itself doesn't repaint a body background */
      .card-wrapper ha-card {
        background: var(--ddc-card-inner-bg, transparent) !important;
      }

      /* Make header strips transparent regardless of how they are implemented */
      .card-wrapper ::part(header),
      .card-wrapper ::part(card-header),
      .card-wrapper .card-header {
        background: var(--ddc-card-inner-bg, transparent) !important;
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
        top:50%; left:50%; transform:translate(-50%, -50%);
        display:flex; gap:6px; flex-wrap:wrap;
        justify-content:center;
        align-items:center;
        width:max-content;
        max-width:calc(100% - 28px);
        padding:8px 10px;
        border-radius:16px;
        background:linear-gradient(135deg, rgba(13,18,28,.78) 0%, rgba(29,36,48,.88) 100%);
        border:1px solid rgba(255,255,255,.16);
        box-shadow:0 10px 28px rgba(0,0,0,.28);
        backdrop-filter:blur(10px);
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
      .smart-picker-modal{
        background:rgba(6,10,18,.62);
        backdrop-filter: blur(16px) saturate(1.06);
      }
      .dialog{
        width:min(1220px,96%); max-height:min(90vh, 900px); display:flex; flex-direction:column;
        background:var(--card-background-color); border-radius:20px; padding:0; border:1px solid var(--divider-color); overflow:visible;
      }
      .smart-picker-dialog{
        width:min(1320px,96vw);
        max-height:min(92vh, 920px);
        border-radius:28px;
        overflow:hidden;
        border:1px solid color-mix(in oklab, var(--divider-color, rgba(255,255,255,.12)) 78%, rgba(255,255,255,.2));
        background:
          linear-gradient(180deg, rgba(255,255,255,.02), rgba(255,255,255,.01)),
          color-mix(in oklab, var(--card-background-color, #111827) 88%, rgba(7,10,18,.82));
        box-shadow:
          0 28px 90px rgba(0,0,0,.42),
          0 8px 24px rgba(0,0,0,.22),
          inset 0 1px 0 rgba(255,255,255,.04);
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
      .smart-picker-dialog .dlg-head{
        gap:18px;
        padding:18px 22px;
        border-bottom:1px solid color-mix(in oklab, var(--divider-color, rgba(255,255,255,.12)) 72%, rgba(255,255,255,.1));
        background:
          radial-gradient(900px 180px at 10% -70px, rgba(255,157,0,.26), transparent 62%),
          radial-gradient(720px 160px at 90% -80px, rgba(255,120,40,.2), transparent 64%),
          linear-gradient(180deg, rgba(255,255,255,.045), rgba(255,255,255,.015));
      }
      .smart-picker-dialog .dlg-head h3{
        font-size:1.22rem;
        font-weight:760;
        letter-spacing:.01em;
        white-space:nowrap;
      }
      .smart-picker-dialog .dlg-foot{
        align-items:center;
        gap:12px;
        padding:14px 20px 18px;
        border-top:1px solid color-mix(in oklab, var(--divider-color, rgba(255,255,255,.12)) 72%, rgba(255,255,255,.1));
        background:
          linear-gradient(180deg, rgba(255,255,255,.025), rgba(255,255,255,.012)),
          color-mix(in oklab, var(--primary-background-color, #0f172a) 94%, rgba(0,0,0,.08));
      }
      .ddc-card-settings-backdrop{
        position:fixed;
        inset:0;
        z-index:100000;
        display:flex;
        align-items:center;
        justify-content:center;
        padding:18px;
        background:rgba(4,8,16,.46);
        backdrop-filter:blur(10px) saturate(1.04);
        -webkit-backdrop-filter:blur(10px) saturate(1.04);
      }
      .ddc-card-settings{
        width:min(760px, calc(100vw - 36px));
        max-height:min(88vh, 860px);
        display:flex;
        flex-direction:column;
        gap:14px;
        overflow:auto;
        padding:20px 22px 22px;
        border-radius:24px;
        border:1px solid color-mix(in oklab, var(--divider-color, rgba(255,255,255,.12)) 76%, rgba(255,255,255,.12));
        background:
          linear-gradient(180deg, rgba(255,255,255,.028), rgba(255,255,255,.01)),
          color-mix(in oklab, var(--card-background-color, #111827) 92%, rgba(7,10,18,.9));
        box-shadow:
          0 28px 90px rgba(0,0,0,.44),
          0 8px 24px rgba(0,0,0,.26),
          inset 0 1px 0 rgba(255,255,255,.04);
        color:var(--primary-text-color, #f5f5f5);
      }
      .ddc-card-settings-header{
        display:flex;
        align-items:flex-start;
        justify-content:space-between;
        gap:14px;
        padding-bottom:8px;
        border-bottom:1px solid color-mix(in oklab, var(--divider-color, rgba(255,255,255,.12)) 74%, rgba(255,255,255,.08));
      }
      .ddc-card-settings-kicker{
        font-size:.73rem;
        letter-spacing:.18em;
        text-transform:uppercase;
        color:var(--secondary-text-color, #9ca3af);
        font-weight:700;
      }
      .ddc-card-settings-title{
        margin:4px 0 0;
        font-size:1.32rem;
        font-weight:760;
        letter-spacing:-.02em;
      }
      .ddc-card-settings-subtitle{
        margin:8px 0 0;
        color:var(--secondary-text-color, #9ca3af);
        line-height:1.55;
      }
      .ddc-card-settings-close{
        flex:0 0 auto;
        width:42px;
        height:42px;
        border-radius:14px;
        border:1px solid rgba(255,255,255,.14);
        background:linear-gradient(135deg, rgba(255,255,255,.06), rgba(255,255,255,.03));
        color:var(--primary-text-color, #f5f5f5);
        display:flex;
        align-items:center;
        justify-content:center;
        cursor:pointer;
        box-shadow:0 8px 20px rgba(0,0,0,.18);
      }
      .ddc-card-settings-close:hover{
        transform:translateY(-1px);
        background:linear-gradient(135deg, rgba(255,255,255,.08), rgba(255,255,255,.04));
      }
      .ddc-card-settings .section-card{
        display:flex;
        flex-direction:column;
        gap:12px;
        padding:16px;
        border-radius:20px;
        background:linear-gradient(180deg, rgba(255,255,255,.035), rgba(255,255,255,.02));
        border:1px solid rgba(255,255,255,.08);
        box-shadow:inset 0 1px 0 rgba(255,255,255,.03);
      }
      .ddc-card-settings .section-card h4{
        margin:0;
        font-size:1rem;
        font-weight:700;
      }
      .ddc-card-settings .section-card p{
        margin:0;
        color:var(--secondary-text-color, #9ca3af);
        line-height:1.55;
      }
      .picker-search-wrap{
        display:flex;
        align-items:center;
        gap:12px;
        flex:1;
        min-width:0;
      }
      .picker-search{
        width:100%;
        min-width:0;
        height:54px;
        padding:0 18px;
        border-radius:18px;
        border:1px solid color-mix(in oklab, var(--divider-color, rgba(255,255,255,.12)) 74%, rgba(255,255,255,.08));
        background:rgba(7,10,18,.78);
        color:var(--primary-text-color);
        box-shadow:
          inset 0 1px 0 rgba(255,255,255,.04),
          0 10px 24px rgba(0,0,0,.16);
        outline:none;
        font-size:1rem;
      }
      .picker-search::placeholder{
        color:color-mix(in oklab, var(--secondary-text-color, #94a3b8) 88%, rgba(255,255,255,.2));
      }
      .picker-search:focus{
        border-color:color-mix(in oklab, var(--primary-color, #ff9800) 72%, #fff 14%);
        box-shadow:
          inset 0 1px 0 rgba(255,255,255,.06),
          0 0 0 3px color-mix(in oklab, var(--primary-color, #ff9800) 22%, transparent),
          0 14px 28px rgba(0,0,0,.18);
      }
      .picker-actions{
        display:flex;
        align-items:center;
        gap:10px;
      }
      .picker-btn{
        display:inline-flex;
        align-items:center;
        justify-content:center;
        gap:10px;
        min-height:48px;
        padding:0 18px;
        border-radius:16px;
        border:1px solid color-mix(in oklab, var(--divider-color, rgba(255,255,255,.12)) 76%, rgba(255,255,255,.08));
        background:rgba(255,255,255,.03);
        color:var(--primary-text-color);
        font-weight:700;
        letter-spacing:.01em;
        transition: transform .12s ease, background .18s ease, border-color .18s ease, box-shadow .18s ease, color .18s ease;
      }
      .picker-btn ha-icon{
        --mdc-icon-size:20px;
      }
      .picker-btn:hover{
        transform:translateY(-1px);
        background:rgba(255,255,255,.06);
        border-color:color-mix(in oklab, var(--divider-color, rgba(255,255,255,.12)) 58%, rgba(255,255,255,.16));
        box-shadow:0 10px 22px rgba(0,0,0,.16);
      }
      .picker-btn:active{
        transform:translateY(0);
      }
      .picker-btn:focus-visible{
        outline:none;
        box-shadow:0 0 0 3px color-mix(in oklab, var(--primary-color, #ff9800) 24%, transparent);
      }
      .picker-btn.secondary{
        background:rgba(255,255,255,.025);
        color:color-mix(in oklab, var(--primary-text-color, #fff) 92%, rgba(255,255,255,.6));
      }
      .picker-btn.primary{
        border-color:color-mix(in oklab, var(--primary-color, #ff9800) 64%, rgba(255,255,255,.1));
        background:
          linear-gradient(180deg, color-mix(in oklab, var(--primary-color, #ff9800) 82%, #fff 10%), color-mix(in oklab, var(--primary-color, #ff9800) 92%, #000 4%));
        color:#fff;
        box-shadow:0 14px 28px color-mix(in oklab, var(--primary-color, #ff9800) 28%, transparent);
      }
      .picker-btn.primary:hover{
        background:
          linear-gradient(180deg, color-mix(in oklab, var(--primary-color, #ff9800) 88%, #fff 12%), color-mix(in oklab, var(--primary-color, #ff9800) 96%, #000 4%));
        border-color:color-mix(in oklab, var(--primary-color, #ff9800) 82%, rgba(255,255,255,.1));
      }
      .picker-btn[disabled]{
        box-shadow:none;
      }
      .picker-footnote{
        display:flex;
        align-items:center;
        gap:8px;
        flex:1;
        opacity:.8;
        font-size:.88rem;
      }
      .picker-footnote ha-icon{
        --mdc-icon-size:18px;
      }

      .visually-hidden{position:absolute!important;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;}

          /* picker layout */
          .layout{display:grid;height:min(84vh,820px);grid-template-columns:280px 1fr}
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
          .picker-category{
            padding:14px 14px 12px;
            border-bottom:1px solid color-mix(in oklab, var(--divider-color, rgba(255,255,255,.12)) 82%, transparent);
          }
          .picker-category-title{
            margin:0 0 10px 0;
            font-size:.92rem;
            font-weight:760;
            letter-spacing:.01em;
            opacity:.9;
          }
          .picker-category-note{
            display:flex;
            flex-direction:column;
            gap:6px;
            padding:12px 14px;
            border-radius:14px;
            border:1px dashed color-mix(in oklab, var(--divider-color, rgba(255,255,255,.12)) 72%, rgba(255,255,255,.08));
            background:rgba(255,255,255,.025);
            color:color-mix(in oklab, var(--secondary-text-color, #94a3b8) 90%, rgba(255,255,255,.2));
            font-size:.86rem;
            line-height:1.45;
          }
          .picker-category-note strong{
            color:var(--primary-text-color);
            font-size:.88rem;
          }
          .picker-item{
            display:flex;
            align-items:center;
            gap:10px;
            width:100%;
            text-align:left;
            border:none;
            background:transparent;
            padding:10px 12px;
            border-radius:14px;
            cursor:pointer;
            color:inherit;
            transition: background .16s ease, color .16s ease, transform .12s ease, box-shadow .16s ease;
          }
          .picker-item:hover{
            background:rgba(255,255,255,.045);
            transform:translateX(1px);
          }
          .picker-item.active{
            background:color-mix(in oklab, var(--primary-color, #ff9800) 16%, rgba(255,255,255,.03));
            color:var(--primary-text-color);
            box-shadow:inset 0 0 0 1px color-mix(in oklab, var(--primary-color, #ff9800) 45%, transparent);
          }
          .picker-item-meta{
            display:flex;
            flex-direction:column;
            gap:2px;
            min-width:0;
          }
          .picker-item-name{
            font-size:.98rem;
            font-weight:650;
            white-space:nowrap;
            overflow:hidden;
            text-overflow:ellipsis;
          }
          .picker-item-subtitle{
            font-size:.78rem;
            opacity:.65;
          }
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
 * JavaScript when toggling edit mode. This keeps the tabs visually docked
 * beneath the edit toolbar without giving the whole strip a heavy solid bar.
 */
.ddc-tabs{
  --bg: var(--card-background-color, #16181c);
  --fg: var(--primary-text-color, #e6e8ea);
  --accent: color-mix(
    in oklab,
    var(--state-icon-active-color, var(--primary-color, #6aa4ff)) 68%,
    var(--primary-color, #6aa4ff) 32%
  );
  --tab-surface: color-mix(in oklab, var(--card-background-color, #16181c) 90%, rgba(255,255,255,.06));
  --tab-border: color-mix(in oklab, var(--divider-color, rgba(255,255,255,.16)) 72%, transparent);
  --tab-shadow: 0 18px 34px rgba(16,18,23,.18);
  --tab-dock-bg:
    linear-gradient(
      180deg,
      color-mix(in oklab, var(--card-background-color, #16181c) 94%, rgba(255,255,255,.05)),
      color-mix(in oklab, var(--primary-background-color, #0f1216) 92%, rgba(255,255,255,.02))
    );
  --tab-dock-border: color-mix(in oklab, var(--divider-color, rgba(255,255,255,.16)) 76%, transparent);
  --tab-dock-fg: color-mix(in oklab, var(--primary-text-color, #e6e8ea) 94%, transparent);
  --tab-idle-bg: transparent;
  --tab-idle-hover: color-mix(in oklab, var(--primary-color, #6aa4ff) 10%, transparent);
  --tab-active-fg: color-mix(in oklab, var(--primary-text-color, #ffffff) 96%, rgba(0,0,0,.04));
  --tab-active-bg:
    linear-gradient(
      180deg,
      color-mix(in oklab, var(--accent) 88%, rgba(255,255,255,.16)),
      color-mix(in oklab, var(--accent) 78%, rgba(0,0,0,.06))
    );
  --tab-active-shadow:
    0 14px 24px color-mix(in oklab, var(--accent) 24%, transparent),
    inset 0 1px 0 rgba(255,255,255,.18);

  position: sticky;
  top: calc(var(--ddc-top-gutter, 0px) + max(env(safe-area-inset-top, 0px), 0px) + var(--ddc-toolbar-height, 0px));
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: clamp(10px, 1.5vw, 16px);
  width: fit-content;
  max-width: min(100%, calc(100vw - var(--ddc-left-gutter, 0px) - var(--ddc-right-gutter, 0px) - 24px));
  box-sizing: border-box;
  padding: 10px clamp(12px, 2vw, 18px);
  border-radius: 28px;
  background: transparent;
  border: 0;
  box-shadow: none;
  color: var(--tab-dock-fg);
  backdrop-filter: blur(14px) saturate(1.02);
  -webkit-backdrop-filter: blur(14px) saturate(1.02);
  margin-inline: auto;
  isolation: isolate;

  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x proximity;
  scrollbar-gutter: stable;
  -webkit-mask-image: none;
  mask-image: none;
}

.ddc-tabs::before,
.ddc-tabs::after{
  display:none;
}

.ddc-tabs:not(.ddc-tabs-left)::before{
  content:"";
  display:block;
  position:absolute;
  inset:0;
  border-radius:inherit;
  background: var(--tab-dock-bg);
  border: 1px solid var(--tab-dock-border);
  box-shadow: var(--tab-shadow);
  pointer-events:none;
  z-index:-1;
}

.ddc-tabs::-webkit-scrollbar{ height: 8px; }
.ddc-tabs::-webkit-scrollbar-thumb{
  background: color-mix(in oklab, var(--fg) 26%, transparent);
  border-radius: 999px;
}
.ddc-tabs::-webkit-scrollbar-track{ background: transparent; }

.ddc-tab{
  -webkit-tap-highlight-color: transparent;
  position: relative;
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-width: clamp(56px, 5vw, 64px);
  max-width: min(260px, 46vw);
  height: 56px;
  padding: 0 16px;
  border: 0;
  border-radius: 20px;
  scroll-snap-align: start;

  font: 600 14px/1 "Segoe UI", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
  letter-spacing: .02em;
  color: color-mix(in oklab, var(--tab-dock-fg) 92%, rgba(0,0,0,.18));
  cursor: pointer;
  user-select: none;
  pointer-events: auto;

  background: var(--tab-idle-bg);
  box-shadow: none;
  transition:
    transform .16s cubic-bezier(.2,.6,.2,1),
    box-shadow .18s ease,
    color .16s ease,
    background .18s ease,
    opacity .16s ease;
}

.ddc-tab ha-icon{
  --mdc-icon-size: 24px;
  opacity: .96;
}

.ddc-tab .ddc-tab-label{
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}

.ddc-tab.ddc-tab--has-icon{
  width: 56px;
  min-width: 56px;
  padding: 0;
}

.ddc-tab.ddc-tab--has-icon .ddc-tab-label{
  display:none;
}

.ddc-tab:hover{
  transform: translateY(-1px);
  background: var(--tab-idle-hover);
  box-shadow: inset 0 0 0 1px rgba(40,44,52,.06);
}

.ddc-tab:active{
  transform: translateY(0) scale(.985);
}

.ddc-tab:focus-visible{
  outline: none;
  box-shadow:
    0 0 0 2px color-mix(in oklab, var(--accent) 60%, transparent),
    0 0 0 6px color-mix(in oklab, var(--accent) 16%, transparent);
}

.ddc-tab::after{
  display:none;
}

.ddc-tab.active{
  color: var(--tab-active-fg);
  background: var(--tab-active-bg);
  box-shadow: var(--tab-active-shadow);
}

.ddc-tab[disabled],
.ddc-tab[aria-disabled="true"]{
  opacity:.55;
  cursor:not-allowed;
  filter:saturate(.75);
}

.ddc-tabs.ddc-tabs-left{
  position: fixed;
  left: var(--ddc-left-rail-left, calc(var(--ddc-left-gutter, 0px) + (var(--ddc-left-rail-width) / 2) + 16px));
  top: 50vh;
  transform: translate(-50%, -50%);
  align-self: auto;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  width: var(--ddc-left-rail-width);
  min-width: var(--ddc-left-rail-width);
  max-width: var(--ddc-left-rail-width);
  padding: 14px 10px;
  overflow: visible;
  background: var(--tab-dock-bg);
  border: 1px solid var(--tab-dock-border);
  border-radius: 30px;
  box-shadow: 0 24px 42px rgba(8,10,14,.22);
  backdrop-filter: blur(10px) saturate(1.02);
  -webkit-backdrop-filter: blur(10px) saturate(1.02);
  margin-inline: 0;
  z-index: 6;
}

.ddc-tabs.ddc-tabs-bottom{
  position: fixed;
  left: calc(var(--ddc-left-gutter, 0px) + 50%);
  right: auto;
  top: auto;
  bottom: max(env(safe-area-inset-bottom, 0px), 12px);
  transform: translateX(-50%);
  width: fit-content;
  max-width: calc(100vw - var(--ddc-left-gutter, 0px) - var(--ddc-right-gutter, 0px) - 24px);
  justify-content: center;
  padding: 10px clamp(12px, 2vw, 18px);
  z-index: 6;
}

.ddc-tabs.ddc-tabs-left::before,
.ddc-tabs.ddc-tabs-left::after{
  display:none;
}

.ddc-tabs.ddc-tabs-left .ddc-tab{
  width: 100%;
  max-width: none;
  min-width: 0;
  min-height: 60px;
  height: 60px;
  padding: 0 10px;
  border-radius: 18px;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  gap: 10px;
  color: color-mix(in oklab, var(--tab-dock-fg) 78%, transparent);
  background: transparent;
  box-shadow: none;
}

.ddc-tabs.ddc-tabs-left .ddc-tab ha-icon{
  --mdc-icon-size: 24px;
}

.ddc-tabs.ddc-tabs-left .ddc-tab .ddc-tab-label{
  font-size: 12px;
  line-height: 1.15;
  white-space: nowrap;
}

.ddc-tabs.ddc-tabs-left .ddc-tab.active{
  color: var(--tab-active-fg);
  background: var(--tab-active-bg);
  box-shadow: var(--tab-active-shadow);
}

.ddc-tabs.ddc-tabs-left .ddc-tab.ddc-tab--has-icon{
  width: 60px;
  min-width: 60px;
  align-self: center;
}

.ddc-tabs.ddc-tabs-left .ddc-tab.ddc-tab--has-icon .ddc-tab-label{
  display:none;
}

.ddc-tabs.ddc-tabs-left .ddc-tab:not(.ddc-tab--has-icon){
  min-height: 66px;
  height: auto;
  padding-block: 12px;
}

@container ddc-root (max-width: 980px){
  .ddc-tabs.ddc-tabs-left{
    position: sticky;
    left: auto;
    top: calc(var(--ddc-top-gutter, 0px) + max(env(safe-area-inset-top, 0px), 0px) + var(--ddc-toolbar-height, 0px));
    transform: none;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-width: 0;
    max-width: 100%;
    padding: 10px 12px;
    overflow-x: auto;
    overflow-y: hidden;
    margin-inline: auto;
    z-index: 5;
  }

  .ddc-tabs.ddc-tabs-left .ddc-tab{
    min-width: 56px;
    width: auto;
    min-height: 56px;
    height: 56px;
    padding: 0 16px;
    flex-direction: row;
    gap: 10px;
    color: color-mix(in oklab, var(--tab-dock-fg) 92%, rgba(0,0,0,.18));
  }

  .ddc-tabs.ddc-tabs-left .ddc-tab .ddc-tab-label{
    white-space: nowrap;
  }

  .ddc-tabs.ddc-tabs-left .ddc-tab.active{
    transform: none;
  }

  .ddc-tabs.ddc-tabs-left .ddc-tab.ddc-tab--has-icon{
    width: 56px;
    min-width: 56px;
    align-self: auto;
  }
}

@media (max-width: 768px) {
  :host([ddc-fixed-ui]) .ddc-tabs,
  .ddc-tabs{
    left: 0;
    transform: none;
    width: fit-content;
    max-width: calc(100vw - 20px);
    margin: 0 auto;
    padding-inline: 10px;
    scroll-snap-type: none;
  }

  .ddc-tabs:not(.ddc-tabs-left)::before{
    inset: 0;
  }

  .ddc-tab{
    min-width: 56px;
    height: 54px;
    padding-inline: 14px;
  }
}

.ddc-root.ddc-preview-docked-tabs{
  row-gap: clamp(12px, 2vw, 24px);
}

.ddc-root.ddc-preview-docked-tabs > .ddc-tabs,
.ddc-root.ddc-preview-docked-tabs > .ddc-tabs.ddc-tabs-left,
.ddc-root.ddc-preview-docked-tabs > .ddc-tabs.ddc-tabs-bottom{
  position: relative !important;
  left: auto !important;
  right: auto !important;
  top: auto !important;
  bottom: auto !important;
  transform: none !important;
  width: fit-content !important;
  min-width: 0 !important;
  max-width: min(100%, calc(var(--ddc-preview-width, 100%) + 48px)) !important;
  margin: 26px auto 0 !important;
  padding: 10px clamp(12px, 2vw, 18px) !important;
  flex-direction: row !important;
  align-items: center !important;
  justify-content: center !important;
  overflow-x: auto !important;
  overflow-y: hidden !important;
  background: transparent !important;
  border: 0 !important;
  box-shadow: none !important;
  backdrop-filter: blur(14px) saturate(1.02) !important;
  -webkit-backdrop-filter: blur(14px) saturate(1.02) !important;
  z-index: 4 !important;
}

.ddc-root.ddc-preview-docked-tabs > .ddc-tabs.ddc-tabs-left::before,
.ddc-root.ddc-preview-docked-tabs > .ddc-tabs.ddc-tabs-bottom::before,
.ddc-root.ddc-preview-docked-tabs > .ddc-tabs::before{
  display: block;
}

.ddc-root.ddc-preview-docked-tabs > .ddc-tabs.ddc-tabs-left .ddc-tab{
  width: auto;
  max-width: min(260px, 46vw);
  min-width: clamp(56px, 5vw, 64px);
  min-height: 56px;
  height: 56px;
  padding: 0 16px;
  border-radius: 20px;
  gap: 10px;
  color: color-mix(in oklab, var(--tab-dock-fg) 92%, rgba(0,0,0,.18));
  background: var(--tab-idle-bg);
  box-shadow: none;
}

.ddc-root.ddc-preview-docked-tabs > .ddc-tabs.ddc-tabs-left .ddc-tab.active{
  color: var(--tab-active-fg);
  background: var(--tab-active-bg);
  box-shadow: var(--tab-active-shadow);
}

.ddc-root.ddc-preview-docked-tabs > .ddc-tabs.ddc-tabs-left .ddc-tab.ddc-tab--has-icon{
  width: 56px;
  min-width: 56px;
  align-self: auto;
}

@media (prefers-color-scheme: dark){
  .ddc-tabs{
    --bg: var(--card-background-color, #0f1216);
    --fg: var(--primary-text-color, #e6e8ea);
  }
}

@media (prefers-reduced-motion: reduce){
  .ddc-tab,
  .ddc-tab::after{
    transition: none !important;
  }
}

@supports not (scrollbar-gutter: stable){
  .ddc-tabs{ padding-inline-end: 24px; }
}

/* ===== DDC Tabs \u2014END ==================== */

/* ===== DDC Layers ==================== */
.ddc-layers{
  position: relative;
  z-index: 4;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-wrap:wrap;
  gap:8px;
  width:fit-content;
  max-width:min(100%, calc(100vw - var(--ddc-left-gutter, 0px) - var(--ddc-right-gutter, 0px) - 28px));
  margin:8px auto 10px;
  padding:8px 10px;
  border-radius:22px;
  background:
    linear-gradient(
      180deg,
      color-mix(in oklab, var(--card-background-color, #16181c) 92%, rgba(255,255,255,.05)),
      color-mix(in oklab, var(--primary-background-color, #0f1216) 90%, rgba(255,255,255,.02))
    );
  border:1px solid color-mix(in oklab, var(--divider-color, rgba(255,255,255,.16)) 72%, transparent);
  box-shadow:0 16px 30px rgba(16,18,23,.16);
  backdrop-filter: blur(12px) saturate(1.01);
  -webkit-backdrop-filter: blur(12px) saturate(1.01);
  overflow-x:auto;
  overflow-y:hidden;
  scrollbar-width:thin;
  scrollbar-color: color-mix(in oklab, var(--primary-text-color, #fff) 18%, transparent) transparent;
}

.ddc-layers::-webkit-scrollbar{ height:6px; }
.ddc-layers::-webkit-scrollbar-thumb{
  background: color-mix(in oklab, var(--primary-text-color, #fff) 18%, transparent);
  border-radius:999px;
}
.ddc-layers::-webkit-scrollbar-track{ background:transparent; }

.ddc-layer-btn{
  --ddc-layer-accent: var(--primary-color, #60a5fa);
  flex:0 0 auto;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:8px;
  min-height:38px;
  padding:0 12px;
  border-radius:999px;
  border:1px solid color-mix(in oklab, var(--divider-color, rgba(255,255,255,.16)) 72%, transparent);
  background:transparent;
  color:color-mix(in oklab, var(--primary-text-color, #f8fafc) 92%, rgba(0,0,0,.16));
  font:600 12px/1 "Segoe UI", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
  letter-spacing:.03em;
  cursor:pointer;
  transition:
    transform .16s ease,
    color .16s ease,
    background .18s ease,
    border-color .18s ease,
    box-shadow .18s ease;
}

.ddc-layer-btn ha-icon{
  --mdc-icon-size:18px;
  opacity:.94;
}

.ddc-layer-btn:hover{
  transform:translateY(-1px);
  border-color:color-mix(in oklab, var(--ddc-layer-accent) 44%, transparent);
  background:color-mix(in oklab, var(--ddc-layer-accent) 10%, transparent);
}

.ddc-layer-btn.active{
  color:#fff;
  border-color:color-mix(in oklab, var(--ddc-layer-accent) 54%, transparent);
  background:
    linear-gradient(
      180deg,
      color-mix(in oklab, var(--ddc-layer-accent) 84%, rgba(255,255,255,.16)),
      color-mix(in oklab, var(--ddc-layer-accent) 72%, rgba(0,0,0,.08))
    );
  box-shadow:
    0 10px 22px color-mix(in oklab, var(--ddc-layer-accent) 24%, transparent),
    inset 0 1px 0 rgba(255,255,255,.16);
}

.ddc-layer-btn:focus-visible{
  outline:none;
  box-shadow:
    0 0 0 2px color-mix(in oklab, var(--ddc-layer-accent) 58%, transparent),
    0 0 0 5px color-mix(in oklab, var(--ddc-layer-accent) 16%, transparent);
}

@media (max-width: 768px){
  .ddc-layers{
    max-width:calc(100vw - 18px);
    margin-inline:auto;
    padding-inline:8px;
  }
  .ddc-layer-btn{
    min-height:36px;
    padding-inline:11px;
    font-size:11px;
  }
}
/* ===== DDC Layers \u2014END ==================== */


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
.ddc-connectors-layer{
  position:absolute;
  inset:0;
  width:100%;
  height:100%;
  z-index:5;
  overflow:visible;
  pointer-events:none;
}
.ddc-connectors-layer .ddc-connector-track,
.ddc-connectors-layer .ddc-connector-line,
.ddc-connectors-layer .ddc-connector-flow,
.ddc-connectors-layer .ddc-connector-hit,
.ddc-connectors-layer .ddc-connector-handle{
  fill:none;
  vector-effect:non-scaling-stroke;
}
.ddc-connectors-layer .ddc-connector-track{
  stroke:rgba(148, 163, 184, 0.22);
}
.ddc-connectors-layer .ddc-connector-line{
  filter:none;
}
.ddc-connectors-layer .ddc-connector-line.is-glow,
.ddc-connectors-layer .ddc-connector.is-active .ddc-connector-line.is-glow{
  filter:drop-shadow(0 0 10px color-mix(in srgb, currentColor 36%, transparent));
}
.ddc-connectors-layer .ddc-connector-flow{
  stroke:rgba(255,255,255,.92);
  opacity:.92;
  animation:ddc-connector-flow 1.8s linear infinite;
}
.ddc-connectors-layer .ddc-connector-flow.reverse{
  animation-direction:reverse;
}
.ddc-connectors-layer .ddc-connector-hit{
  stroke:transparent;
  pointer-events:stroke;
  cursor:pointer;
}
.ddc-connectors-layer .ddc-connector-handle{
  fill:color-mix(in srgb, var(--primary-color, #ff9800) 82%, #ffffff 10%);
  stroke:rgba(255,255,255,.92);
  stroke-width:2;
  pointer-events:all;
  cursor:grab;
  filter:drop-shadow(0 6px 12px rgba(0,0,0,.25));
}
.ddc-connectors-layer .ddc-connector-handle:active{
  cursor:grabbing;
}
.ddc-connectors-layer .ddc-connector.is-selected .ddc-connector-line{
  filter:drop-shadow(0 0 12px color-mix(in srgb, currentColor 42%, transparent));
}
.ddc-connectors-layer .ddc-connector.is-draft .ddc-connector-line{
  opacity:.92;
}
.ddc-connectors-layer .ddc-connector-capture{
  fill:transparent;
  pointer-events:all;
}
.card-container.ddc-connector-draw-mode{
  cursor:crosshair;
}
.ddc-connector-inspector{
  position:fixed;
  right:max(16px, env(safe-area-inset-right, 0px));
  top:calc(var(--ddc-top-gutter, 0px) + max(env(safe-area-inset-top, 0px), 0px) + var(--ddc-toolbar-height, 0px) + 16px);
  width:min(360px, calc(100vw - 24px));
  max-height:calc(100vh - (var(--ddc-top-gutter, 0px) + max(env(safe-area-inset-top, 0px), 0px) + var(--ddc-toolbar-height, 0px) + 32px));
  z-index:70;
  display:none;
}
.ddc-connector-inspector.is-open{
  display:block;
}
.ddc-connector-inspector-card{
  display:grid;
  gap:16px;
  padding:18px;
  border-radius:24px;
  border:1px solid color-mix(in srgb, var(--divider-color, rgba(255,255,255,.12)) 76%, transparent);
  background:var(--ha-card-background, var(--card-background-color, #1f2329));
  box-shadow:0 22px 52px rgba(0,0,0,.34);
  overflow:auto;
  max-height:inherit;
}
.ddc-connector-inspector-head{
  display:flex;
  align-items:start;
  justify-content:space-between;
  gap:12px;
  padding:0 2px 2px;
}
.ddc-connector-close{
  width:48px;
  height:48px;
  border-radius:14px;
  border:1px solid color-mix(in srgb, var(--divider-color, rgba(255,255,255,.16)) 78%, transparent);
  background:var(--secondary-background-color, rgba(255,255,255,.04));
  color:var(--primary-text-color, #fff);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.05),
    0 8px 18px rgba(0,0,0,.18);
  transition:transform .16s ease, border-color .18s ease, background .18s ease, box-shadow .18s ease;
}
.ddc-connector-close:hover{
  transform:translateY(-1px);
  border-color:color-mix(in srgb, var(--primary-color, #ff9800) 26%, rgba(255,255,255,.18));
  background:color-mix(in srgb, var(--secondary-background-color, rgba(255,255,255,.04)) 82%, var(--primary-color, #ff9800) 18%);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.06),
    0 12px 24px rgba(0,0,0,.24);
}
.ddc-connector-close ha-icon{
  --mdc-icon-size:22px;
}
.ddc-connector-inspector-head h3{
  margin:4px 0 0;
  font-size:1.18rem;
  line-height:1.08;
}
.ddc-connector-inspector-head p{
  margin:8px 0 0;
  font-size:.88rem;
  line-height:1.5;
  color:var(--secondary-text-color, rgba(255,255,255,.72));
}
.ddc-connector-inspector-kicker{
  font-size:.72rem;
  font-weight:700;
  letter-spacing:.14em;
  text-transform:uppercase;
  color:color-mix(in srgb, var(--primary-text-color, #fff) 56%, transparent);
}
.ddc-connector-preview,
.ddc-connector-section{
  display:grid;
  gap:12px;
  padding:14px;
  border-radius:18px;
  border:1px solid color-mix(in srgb, var(--divider-color, rgba(255,255,255,.12)) 72%, transparent);
  background:color-mix(in srgb, var(--secondary-background-color, rgba(255,255,255,.04)) 88%, transparent);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.04);
}
.ddc-connector-preview{
  gap:14px;
}
.ddc-connector-preview-line{
  display:grid;
  place-items:center;
  min-height:58px;
  padding:0 12px;
  border-radius:18px;
  background:rgba(255,255,255,.025);
  overflow:hidden;
}
.ddc-connector-preview-stroke{
  display:block;
  width:100%;
  min-height:4px;
  border-radius:999px;
  box-shadow:0 0 0 1px rgba(255,255,255,.05);
}
.ddc-connector-preview-stroke.is-glow{
  box-shadow:
    0 0 0 1px rgba(255,255,255,.05),
    0 0 18px color-mix(in srgb, currentColor 32%, transparent);
}
.ddc-connector-preview-stroke.is-animated{
  background-size:200% 100% !important;
  animation:ddc-connector-preview-flow 2.1s linear infinite;
}
.ddc-connector-preview-copy{
  display:grid;
  gap:4px;
}
.ddc-connector-preview-copy strong{
  font-size:.93rem;
  font-weight:800;
}
.ddc-connector-preview-copy span{
  font-size:.82rem;
  line-height:1.45;
  color:var(--secondary-text-color, rgba(255,255,255,.72));
}
.ddc-connector-section-head{
  display:grid;
  gap:5px;
}
.ddc-connector-section-title{
  font-size:.86rem;
  font-weight:800;
  letter-spacing:.02em;
}
.ddc-connector-section-head p{
  margin:0;
  font-size:.8rem;
  line-height:1.45;
  color:var(--secondary-text-color, rgba(255,255,255,.68));
}
.ddc-connector-inspector-grid{
  display:grid;
  grid-template-columns:repeat(2, minmax(0, 1fr));
  gap:12px;
}
.ddc-connector-field{
  display:grid;
  gap:7px;
  min-width:0;
}
.ddc-connector-field.full{
  grid-column:1 / -1;
}
.ddc-connector-field span{
  font-size:.78rem;
  font-weight:700;
  letter-spacing:.04em;
  color:color-mix(in srgb, var(--primary-text-color, #fff) 68%, transparent);
}
.ddc-connector-field .input{
  width:100%;
  min-height:48px;
  box-sizing:border-box;
  padding:12px 14px;
  border-radius:12px;
  border:1px solid color-mix(in srgb, var(--divider-color, rgba(255,255,255,.16)) 80%, transparent);
  background:var(--secondary-background-color, rgba(255,255,255,.03));
  color:var(--primary-text-color, #fff);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.04),
    0 1px 0 rgba(0,0,0,.08);
  outline:none;
  transition:border-color .18s ease, box-shadow .18s ease, background .18s ease, transform .18s ease;
}
.ddc-connector-field .input:hover{
  border-color:color-mix(in srgb, var(--primary-color, #ff9800) 16%, rgba(255,255,255,.18));
}
.ddc-connector-field .input:focus{
  border-color:color-mix(in srgb, var(--primary-color, #ff9800) 42%, rgba(255,255,255,.18));
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.05),
    0 0 0 3px color-mix(in srgb, var(--primary-color, #ff9800) 18%, transparent),
    0 14px 28px rgba(0,0,0,.18);
  background:color-mix(in srgb, var(--secondary-background-color, rgba(255,255,255,.03)) 84%, rgba(255,255,255,.06));
}
.ddc-connector-entity-host{
  display:grid;
}
.ddc-connector-entity-host > *{
  width:100%;
}
.ddc-connector-entity-host ha-entity-picker{
  display:block;
  --mdc-theme-primary: var(--primary-color, #ff9800);
  --mdc-shape-small: 16px;
  --mdc-text-field-fill-color: rgba(255,255,255,.025);
}
.ddc-connector-entity-meta,
.ddc-connector-state-meta{
  font-size:.79rem;
  line-height:1.5;
  color:var(--secondary-text-color, rgba(255,255,255,.72));
}
.ddc-connector-state-suggestions{
  display:flex;
  flex-wrap:wrap;
  gap:8px;
}
.ddc-connector-inline-actions{
  display:grid;
  grid-template-columns:minmax(0, 1fr) auto;
  gap:8px;
  align-items:center;
}
.ddc-connector-state-picker{
  min-width:0;
}
.ddc-connector-state-chip{
  appearance:none;
  border:1px solid color-mix(in srgb, var(--divider-color, rgba(255,255,255,.12)) 74%, transparent);
  background:var(--secondary-background-color, rgba(255,255,255,.03));
  color:var(--primary-text-color, #fff);
  min-height:34px;
  padding:0 12px;
  border-radius:999px;
  font:inherit;
  font-size:.78rem;
  font-weight:700;
  letter-spacing:.02em;
  cursor:pointer;
  transition:transform .16s ease, border-color .18s ease, background .18s ease, box-shadow .18s ease, color .18s ease;
}
.ddc-connector-state-chip:hover{
  transform:translateY(-1px);
  border-color:color-mix(in srgb, var(--primary-color, #ff9800) 28%, rgba(255,255,255,.18));
  box-shadow:0 10px 18px rgba(0,0,0,.16);
}
.ddc-connector-state-chip.is-active{
  border-color:color-mix(in srgb, var(--primary-color, #ff9800) 42%, rgba(255,255,255,.22));
  background:
    linear-gradient(180deg, color-mix(in srgb, var(--primary-color, #ff9800) 22%, rgba(255,255,255,.06)) 0%, color-mix(in srgb, var(--primary-color, #ff9800) 14%, rgba(255,255,255,.02)) 100%);
  color:color-mix(in srgb, var(--primary-text-color, #fff) 92%, rgba(255,255,255,.95));
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.05),
    0 10px 24px rgba(0,0,0,.18);
}
.ddc-connector-state-empty{
  font-size:.78rem;
  line-height:1.5;
  color:var(--secondary-text-color, rgba(255,255,255,.68));
}
.ddc-connector-toggles{
  display:flex;
  flex-wrap:wrap;
  gap:10px 12px;
}
.ddc-toggle-row{
  display:flex;
  align-items:center;
  gap:10px;
  min-height:44px;
  padding:10px 12px;
  border-radius:14px;
  border:1px solid color-mix(in srgb, var(--divider-color, rgba(255,255,255,.12)) 68%, transparent);
  background:var(--secondary-background-color, rgba(255,255,255,.03));
  font-size:.9rem;
  font-weight:600;
}
.ddc-connector-actions{
  display:grid;
  grid-template-columns:repeat(2, minmax(0, 1fr));
  gap:10px;
}
.ddc-connector-inspector .btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:8px;
  min-height:48px;
  width:100%;
  padding:0 16px;
  border-radius:12px;
  font-size:.92rem;
  font-weight:700;
  letter-spacing:.01em;
  transition:transform .16s ease, border-color .18s ease, background .18s ease, box-shadow .18s ease, filter .18s ease;
}
.ddc-connector-inspector .btn.compact{
  min-height:44px;
  width:auto;
  padding:0 14px;
  white-space:nowrap;
}
.ddc-connector-inspector .btn:hover{
  transform:translateY(-1px);
}
.ddc-connector-inspector .btn.secondary{
  border:1px solid color-mix(in srgb, var(--divider-color, rgba(255,255,255,.16)) 80%, transparent);
  background:var(--secondary-background-color, rgba(255,255,255,.03));
  color:var(--primary-text-color, #fff);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.05),
    0 10px 20px rgba(0,0,0,.14);
}
.ddc-connector-inspector .btn.secondary:hover{
  border-color:color-mix(in srgb, var(--primary-color, #ff9800) 24%, rgba(255,255,255,.18));
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.06),
    0 14px 26px rgba(0,0,0,.18);
}
.ddc-connector-inspector .btn.danger{
  border:1px solid color-mix(in srgb, var(--error-color, #ef4444) 48%, rgba(255,255,255,.18));
  background:
    linear-gradient(180deg, color-mix(in srgb, var(--error-color, #ef4444) 78%, rgba(255,255,255,.08)) 0%, color-mix(in srgb, var(--error-color, #ef4444) 62%, rgba(0,0,0,.06)) 100%);
  color:#fff;
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.08),
    0 12px 22px color-mix(in srgb, var(--error-color, #ef4444) 22%, transparent);
}
.ddc-connector-inspector .btn.danger:hover{
  filter:brightness(1.04);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.1),
    0 14px 28px color-mix(in srgb, var(--error-color, #ef4444) 28%, transparent);
}
.ddc-connector-inspector .btn ha-icon{
  --mdc-icon-size:18px;
}
.ddc-connector-help{
  margin:0;
  font-size:.82rem;
  line-height:1.5;
  color:var(--secondary-text-color, rgba(255,255,255,.72));
}
@media (max-width: 920px){
  .ddc-connector-inspector{
    right:12px;
    left:12px;
    width:auto;
  }
  .ddc-connector-inspector-grid{
    grid-template-columns:1fr;
  }
  .ddc-connector-inline-actions{
    grid-template-columns:1fr;
  }
}
@keyframes ddc-connector-preview-flow{
  from { background-position: 0% 0%; }
  to   { background-position: 200% 0%; }
}
@keyframes ddc-connector-flow{
  from { stroke-dashoffset: 56; }
  to   { stroke-dashoffset: 0; }
}
/* === GRID SELECT PATCH END (styles) === */
</style>
        <div class="ddc-page-bg-host" id="ddcPageBgHost" aria-hidden="true"></div>
        <div class="ddc-root">
        
<div class="toolbar ddc-toolbar streamlined v2" role="toolbar" aria-label="Layout editor">

  <button class="ddc-toolbar-toggle" id="toolbarToggleBtn" style="display:none" data-tooltip="Expand toolbar" title="Expand toolbar" aria-label="Expand toolbar" aria-expanded="false">
    <ha-icon icon="mdi:chevron-down"></ha-icon>
  </button>

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
      <button class="btn secondary" id="lineModeBtn" style="display:none" data-tooltip="Draw connectors">
        <ha-icon icon="mdi:vector-polyline-plus"></ha-icon><span class="label">Draw Line</span>
      </button>
      <button class="btn secondary" id="settingsBtn" style="display:none" data-tooltip="Card Settings">
        <ha-icon icon="mdi:cog"></ha-icon><span class="label">Card Settings</span>
      </button>
    </div>
    <div class="ddc-preview-stack" id="previewModeControls">
      <div class="ddc-preview-head">
        <div class="ddc-preview-label">Responsive Layout</div>
        <div class="ddc-preview-meta" id="previewModeMeta">Auto: Desktop</div>
      </div>
      <div class="ddc-preview-modes" role="group" aria-label="Viewport preview">
        <button type="button" class="ddc-preview-chip" data-preview-mode="live">Live</button>
        <button type="button" class="ddc-preview-chip" data-preview-mode="desktop">Desktop</button>
        <button type="button" class="ddc-preview-chip" data-preview-mode="tablet">Tablet</button>
        <button type="button" class="ddc-preview-chip" data-preview-mode="mobile">Mobile</button>
      </div>
      <div class="ddc-preview-dimensions">
        <label class="ddc-preview-field" for="previewWidthInput">
          <span>W</span>
          <input type="number" id="previewWidthInput" min="240" max="6000" step="1" />
        </label>
        <label class="ddc-preview-field" for="previewHeightInput">
          <span>H</span>
          <input type="number" id="previewHeightInput" min="240" max="6000" step="1" />
        </label>
        <button type="button" class="ddc-preview-chip ddc-preview-chip--icon" id="previewSwapButton" title="Swap width and height" aria-label="Swap width and height">
          <ha-icon icon="mdi:phone-rotate-landscape"></ha-icon>
        </button>
      </div>
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
          <div class="ddc-layers" id="layersBar" style="display:none"></div>
          <div class="card-container" id="cardContainer">
            <!-- host for particles.js / YouTube backgrounds -->
            <div class="ddc-bg-host" id="ddcBgHost" aria-hidden="true"></div>
          </div>
          <aside class="ddc-connector-inspector" id="connectorInspector" hidden aria-live="polite"></aside>



      `,this.cardContainer=this.shadowRoot.querySelector("#cardContainer");try{(J=this._applyBackgroundFromConfig)==null||J.call(this)}catch{}try{(Z=this._updateScreensaverSettings)==null||Z.call(this)}catch{}this.addButton=this.shadowRoot.querySelector("#addCardBtn"),this.reloadBtn=this.shadowRoot.querySelector("#reloadBtn"),this.diagBtn=this.shadowRoot.querySelector("#diagBtn"),this.exitEditBtn=this.shadowRoot.querySelector("#exitEditBtn"),this.storeBadge=this.shadowRoot.querySelector("#storeBadge"),this.exportBtn=this.shadowRoot.querySelector("#exportBtn"),this.importBtn=this.shadowRoot.querySelector("#importBtn"),this.exploreBtn=this.shadowRoot.querySelector("#exploreBtn"),this.applyLayoutBtn=this.shadowRoot.querySelector("#applyLayoutBtn"),this.toolbarToggleBtn=this.shadowRoot.querySelector("#toolbarToggleBtn"),this.copyBtn=this.shadowRoot.querySelector("#copyBtn"),this.pasteBtn=this.shadowRoot.querySelector("#pasteBtn"),this.lineModeBtn=this.shadowRoot.querySelector("#lineModeBtn"),this.settingsBtn=this.shadowRoot.querySelector("#settingsBtn"),this.tabsBar=this.shadowRoot.querySelector("#tabsBar"),this.layersBar=this.shadowRoot.querySelector("#layersBar"),this.rootEl=this.shadowRoot.querySelector(".ddc-root"),this.previewModeControls=this.shadowRoot.querySelector("#previewModeControls"),this.previewModeButtons=Array.from(this.shadowRoot.querySelectorAll("[data-preview-mode]")),this.previewMeta=this.shadowRoot.querySelector("#previewModeMeta"),this.previewWidthInput=this.shadowRoot.querySelector("#previewWidthInput"),this.previewHeightInput=this.shadowRoot.querySelector("#previewHeightInput"),this.previewSwapButton=this.shadowRoot.querySelector("#previewSwapButton"),this.shadowRoot.querySelectorAll(".ddc-toolbar [data-tooltip]").forEach(ze=>{try{let rt=String(ze.getAttribute("data-tooltip")||"").trim();rt&&!ze.getAttribute("title")&&ze.setAttribute("title",rt)}catch{}}),(he=this.toolbarToggleBtn)==null||he.addEventListener("click",()=>{var ze;(ze=this._setToolbarExpanded_)==null||ze.call(this,!this.__toolbarExpanded)});try{(_e=this._ensureStreamlinedToolbarObserver_)==null||_e.call(this)}catch{}this.previewModeButtons.forEach(ze=>{ze.addEventListener("click",()=>this._setViewportPreviewMode_(ze.dataset.previewMode||"live"))});let ot=()=>{var ze;return(ze=this._commitResponsiveViewportField_)==null?void 0:ze.call(this,"width")},Qe=()=>{var ze;return(ze=this._commitResponsiveViewportField_)==null?void 0:ze.call(this,"height")};(ke=this.previewWidthInput)==null||ke.addEventListener("change",ot),(Ee=this.previewWidthInput)==null||Ee.addEventListener("blur",ot),(Fe=this.previewHeightInput)==null||Fe.addEventListener("change",Qe),(je=this.previewHeightInput)==null||je.addEventListener("blur",Qe),(et=this.previewWidthInput)==null||et.addEventListener("keydown",ze=>{var rt,yt;ze.key==="Enter"&&(ze.preventDefault(),ot(),(yt=(rt=this.previewWidthInput)==null?void 0:rt.blur)==null||yt.call(rt))}),(ct=this.previewHeightInput)==null||ct.addEventListener("keydown",ze=>{var rt,yt;ze.key==="Enter"&&(ze.preventDefault(),Qe(),(yt=(rt=this.previewHeightInput)==null?void 0:rt.blur)==null||yt.call(rt))}),(Pe=this.previewWidthInput)==null||Pe.addEventListener("wheel",ze=>{ze.preventDefault(),ze.stopPropagation()},{passive:!1}),(He=this.previewHeightInput)==null||He.addEventListener("wheel",ze=>{ze.preventDefault(),ze.stopPropagation()},{passive:!1}),(ht=this.previewSwapButton)==null||ht.addEventListener("click",()=>{var ze;return(ze=this._swapResponsiveViewportOrientation_)==null?void 0:ze.call(this)});try{(tt=this._syncViewportPreviewUI_)==null||tt.call(this)}catch{}try{this._renderTabs(),this._renderLayersBar(),this._applyActiveTab()}catch{}try{(_t=this._syncConnectorUiState_)==null||_t.call(this)}catch{}if(this._applyGridVars(),this.__uiBindingsReady||((Ct=this.addButton)==null||Ct.addEventListener("click",()=>{this.editMode||this._toggleEditMode(!0),this._openCardManager()}),(St=this.reloadBtn)==null||St.addEventListener("click",()=>this._initialLoad(!0)),(xt=this.diagBtn)==null||xt.addEventListener("click",()=>this._openDiagnostics()),(Mt=this.exitEditBtn)==null||Mt.addEventListener("click",()=>this._toggleEditMode(!1)),(oe=this.exportBtn)==null||oe.addEventListener("click",()=>this._exportDesign()),(pe=this.importBtn)==null||pe.addEventListener("click",()=>this._importDesign()),(Ke=this.applyLayoutBtn)==null||Ke.addEventListener("click",()=>this._saveLayout(!1)),(Ve=this.copyBtn)==null||Ve.addEventListener("click",()=>this._copySelection()),(De=this.pasteBtn)==null||De.addEventListener("click",()=>this._pasteClipboard()),(Ze=this.lineModeBtn)==null||Ze.addEventListener("click",()=>{var ze;return(ze=this._toggleConnectorDrawMode_)==null?void 0:ze.call(this)}),(ae=this.settingsBtn)==null||ae.addEventListener("click",()=>this._openDashboardSettings()),(Me=this.exploreBtn)==null||Me.addEventListener("click",()=>window.open("https://hads.smarti.dev/","_blank","noopener,noreferrer")),this.__saveShortcutHandler=ze=>{this.editMode&&(ze.ctrlKey||ze.metaKey)&&(ze.key==="s"||ze.key==="S")&&(ze.preventDefault(),this._saveLayout(!1))},window.addEventListener("keydown",this.__saveShortcutHandler),this.__escapeShortcutHandler=ze=>{var vt,bt,nt,Ie,st,dt,gt,Oe,Te,ge;if(!this.editMode)return;let rt=ze.target,yt=!!((vt=rt==null?void 0:rt.closest)!=null&&vt.call(rt,"input, textarea, select, ha-code-editor, .CodeMirror"));if(ze.key==="Escape"){if((bt=this._isConnectorSettingsOpen_)!=null&&bt.call(this)){ze.preventDefault(),(nt=this._closeConnectorSettings_)==null||nt.call(this);return}if(this._connectorDrawMode||(st=(Ie=this._connectorDraft)==null?void 0:Ie.points)!=null&&st.length){ze.preventDefault(),(dt=this._cancelConnectorDraft_)==null||dt.call(this);return}this._toggleEditMode(!1);return}if(!yt){if(ze.key==="Enter"&&this._connectorDrawMode&&((Oe=(gt=this._connectorDraft)==null?void 0:gt.points)==null?void 0:Oe.length)>=2){ze.preventDefault(),(Te=this._finalizeConnectorDraft_)==null||Te.call(this,{openSettings:!0});return}if((ze.key==="Delete"||ze.key==="Backspace")&&this._selectedConnectorId){ze.preventDefault();let ie=this._selectedConnectorId;this._selectedConnectorId=null,this._setCurrentConnectorEntries_((this._getCurrentConnectorEntries_()||[]).filter(Re=>Re.id!==ie),{reason:"connector-delete",render:!0}),(ge=this._closeConnectorSettings_)==null||ge.call(this)}}},window.addEventListener("keydown",this.__escapeShortcutHandler),this.__containerBlankMouseDown=ze=>{var yt,vt,bt;if(!this.editMode||ze.target.closest(".card-wrapper"))return;let rt=(yt=this._ensureConnectorsLayer_)==null?void 0:yt.call(this);rt&&rt.contains(ze.target)||!ze.shiftKey&&!ze.ctrlKey&&!ze.metaKey&&(this._clearSelection(),this._selectedConnectorId&&(this._selectedConnectorId=null,(vt=this._closeConnectorSettings_)==null||vt.call(this),(bt=this._renderConnectors_)==null||bt.call(this)))},($e=this.cardContainer)==null||$e.addEventListener("mousedown",this.__containerBlankMouseDown),this.__uiBindingsReady=!0),!this.__ddcResizeObs&&this.autoResizeCards){this.__ddcResizeObs=new ResizeObserver(()=>{var ze;return(ze=this._applyAutoScale)==null?void 0:ze.call(this)});try{this.__ddcResizeObs.observe(this)}catch{}try{this.__ddcResizeObs.observe(this.cardContainer)}catch{}try{this.parentElement&&this.__ddcResizeObs.observe(this.parentElement)}catch{}try{this.offsetParent&&this.__ddcResizeObs.observe(this.offsetParent)}catch{}}else if(this.__ddcResizeObs&&!this.autoResizeCards){try{this.__ddcResizeObs.disconnect()}catch{}this.__ddcResizeObs=null}this._applyContainerSizingFromConfig(!0),(ce=this._applyAutoScale)==null||ce.call(this),this._installLongPressToEnterEdit(),(ut=this._startScaleWatch)==null||ut.call(this),this.__selectionMarqueeInstalled||(this._installSelectionMarquee(),this.__selectionMarqueeInstalled=!0)}try{this._isInHaEditorPreview()||this._queueSave("config-change")}catch{}this._updateStoreBadge(),this.cardContainer&&this._toggleEditMode(!1),this.__cfgReady=!0,c&&this.__booted?this._initialLoad(!0):!this.__booted&&this.__probed?(this.__booted=!0,this._initialLoad()):(this._applyContainerSizingFromConfig(!0),(wt=this._applyAutoScale)==null||wt.call(this),this._resizeContainer())}_startInitialAutosize(){var e,t;try{if(this.__autoInitStarted)return;this.__autoInitStarted=!0;let i=!1,n=()=>{i||(i=!0,requestAnimationFrame(()=>{var h;i=!1;try{(h=this._applyAutoScale)==null||h.call(this)}catch{}}))};requestAnimationFrame(()=>{n(),requestAnimationFrame(n)}),setTimeout(n,0);try{(t=(e=document.fonts)==null?void 0:e.ready)==null||t.then(n)}catch{}let o=String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase(),c=this.cardContainer||this.querySelector("#cardContainer");if(!c)return;let l={childList:!0,subtree:!0,attributes:!0,attributeFilter:["style","class"]},g={childList:!0,subtree:!0},u=this.autoResizeCards||o==="auto",m=new MutationObserver(()=>n());m.observe(c,u?l:g),this.__autoInitMO=m,setTimeout(()=>{try{m.disconnect()}catch{}this.__autoInitMO=null},2e3)}catch{}}connectedCallback(){var e,t,i,n,o;try{this._installGridObservers_(),this._updateGridButtonsVisibility()}catch{}(e=this._startInitialAutosize)==null||e.call(this);try{(t=this._applyHaChromeVisibility_)==null||t.call(this),requestAnimationFrame(()=>{var c;return(c=this._syncPageBackgroundToView_)==null?void 0:c.call(this)}),(i=this._ensureScreenSaverStyles)==null||i.call(this),(n=this._updateScreensaverSettings)==null||n.call(this)}catch{}if(this.__autoFillAfterDragHandler||(this.__autoFillAfterDragHandler=()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var l;return(l=this._applyAutoFillNoScale)==null?void 0:l.call(this)})}),this.removeEventListener("ddc:dragend",this.__autoFillAfterDragHandler),this.addEventListener("ddc:dragend",this.__autoFillAfterDragHandler),this.__keyHandlerBound||(this.__keyHandler=c=>this._onKeyDown_(c),window.addEventListener("keydown",this.__keyHandler),this.__keyHandlerBound=!0),this.__boundExitEdit||(this.__boundExitEdit=()=>this._toggleEditMode(!1)),window.addEventListener("pagehide",this.__boundExitEdit),window.addEventListener("beforeunload",this.__boundExitEdit),this.__onVis||(this.__onVis=()=>{document.visibilityState==="hidden"&&this._toggleEditMode(!1)}),document.addEventListener("visibilitychange",this.__onVis),this._toggleEditMode(!1),!this.__visObs){let c=new IntersectionObserver(l=>{l.some(g=>g.isIntersecting)&&requestAnimationFrame(()=>{var g;return(g=this._applyAutoScale)==null?void 0:g.call(this)})});c.observe(this),this.__visObs=c}this.__ddcOnWinResize=this.__ddcOnWinResize||(()=>{var c,l,g,u,m,h;if(this.hasAttribute("ddc-fixed-ui"))try{(c=this._computeHaSidebarGutters_)==null||c.call(this)}catch{}try{(l=this._computeHaTopGutter_)==null||l.call(this)}catch{}(g=this._syncResponsiveProfileForViewport_)==null||g.call(this),(u=this._applyAutoScale)==null||u.call(this),(m=this._refreshToolbarOpenHeight_)==null||m.call(this),(h=this._refreshTabsAlignment_)==null||h.call(this)});try{let c=String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase();this.autoResizeCards||c==="auto"?window.addEventListener("resize",this.__ddcOnWinResize):window.removeEventListener("resize",this.__ddcOnWinResize)}catch{}try{(o=this.__ddcBindPointerListeners)==null||o.call(this)}catch{}}disconnectedCallback(){var e,t,i,n,o,c,l,g,u,m,h,b;try{this._uninstallGridObservers_()}catch{}try{(e=this._setHeaderVisible_)==null||e.call(this,!0),(t=this._setSidebarVisible_)==null||t.call(this,!0)}catch{}try{(i=this._applyHaChromeVisibility_)==null||i.call(this)}catch{}try{(n=this._clearPageBackground_)==null||n.call(this)}catch{}this.__keyHandlerBound&&this.__keyHandler&&(window.removeEventListener("keydown",this.__keyHandler),this.__keyHandlerBound=!1,this.__keyHandler=null),this.__saveShortcutHandler&&(window.removeEventListener("keydown",this.__saveShortcutHandler),this.__saveShortcutHandler=null),this.__escapeShortcutHandler&&(window.removeEventListener("keydown",this.__escapeShortcutHandler),this.__escapeShortcutHandler=null),this.__containerBlankMouseDown&&((o=this.cardContainer)==null||o.removeEventListener("mousedown",this.__containerBlankMouseDown),this.__containerBlankMouseDown=null),this.__uiBindingsReady=!1;try{(c=this._destroyParticles_)==null||c.call(this)}catch{}try{(l=this._destroyYouTube_)==null||l.call(this)}catch{}window.removeEventListener("pagehide",this.__boundExitEdit),window.removeEventListener("beforeunload",this.__boundExitEdit),document.removeEventListener("visibilitychange",this.__onVis),this.__autoFillAfterDragHandler&&this.removeEventListener("ddc:dragend",this.__autoFillAfterDragHandler);try{this._screensaverTimer&&(clearTimeout(this._screensaverTimer),this._screensaverTimer=null),this._clockInterval&&(clearInterval(this._clockInterval),this._clockInterval=null),this._screensaverActivityHandler&&(this._screensaverEvents||[]).forEach(_=>{document.removeEventListener(_,this._screensaverActivityHandler,!0)}),this.screenSaverOverlay&&this.screenSaverOverlay.parentNode&&this.screenSaverOverlay.parentNode.removeChild(this.screenSaverOverlay)}catch{}try{(g=this.__ddcResizeObs)==null||g.disconnect()}catch{}this.__ddcResizeObs=null,(u=this._stopScaleWatch)==null||u.call(this),this.__ddcOnWinResize&&(window.removeEventListener("resize",this.__ddcOnWinResize),this.__ddcOnWinResize=null);try{(m=this.__streamlinedToolbarRO)==null||m.disconnect()}catch{}if(this.__streamlinedToolbarRO=null,this.__streamlinedToolbarROTarget=null,this.__lpInstalled&&this.__lpHandlers){let y=this.cardContainer;y==null||y.removeEventListener("mousedown",this.__lpHandlers.mouseDown),window.removeEventListener("mousemove",this.__lpHandlers.mouseMove),window.removeEventListener("mouseup",this.__lpHandlers.mouseUp),window.removeEventListener("contextmenu",this.__lpHandlers.contextMenu),y==null||y.removeEventListener("touchstart",this.__lpHandlers.touchStart),window.removeEventListener("touchmove",this.__lpHandlers.touchMove),window.removeEventListener("touchend",this.__lpHandlers.touchEnd),window.removeEventListener("touchcancel",this.__lpHandlers.touchCancel),this.__lpInstalled=!1,this.__lpHandlers=null}try{(b=(h=this.__visObs)==null?void 0:h.disconnect)==null||b.call(h)}catch{}this.__visObs=null;try{this.__ddcPtrBound&&(this.removeEventListener("pointerdown",this.__onDDCPointerDown),this.removeEventListener("pointermove",this.__onDDCPointerMove),window.removeEventListener("pointerup",this.__onDDCPointerUp),window.removeEventListener("pointercancel",this.__onDDCPointerUp),this.__ddcPtrBound=!1)}catch{}}set hass(e){var i,n,o;this._hass=e,!this.__probed&&e&&(this.__probed=!0,this._probeBackend().then(()=>{this.__probed=!0,!this.__booted&&this.__cfgReady&&(this.__booted=!0,this._initialLoad(!0))}));let t=((i=this.cardContainer)==null?void 0:i.children)||[];for(let c of t){let l=c.firstElementChild;l&&l.hass!==e&&(l.hass=e)}(n=this._scheduleVisibilityRefresh_)==null||n.call(this),(o=this._scheduleVisualRefresh_)==null||o.call(this)}get hass(){return this._hass}async _initialLoad(e=!1){var t,i,n,o,c,l,g,u,m,h,b,y;if(!this.__booting){this.__booting=!0;try{this._loading=!0,e&&this.cardContainer&&((t=this._restoreBackgroundHostToContainer_)==null||t.call(this)),this._dbgPush("boot","Initial load start",{force:e});let _=[],A=null;if(this._backendOK&&this.storageKey)try{A=await this._loadLayoutFromBackend(this.storageKey)}catch(F){this._dbgPush("boot","Backend load failed",{error:String(F)})}if(!A&&this.storageKey){let F=null;try{F=JSON.parse(localStorage.getItem(`ddc_local_${this.storageKey}`)||"null")}catch{}if(F)if(this._dbgPush("boot","Found local snapshot",{bytes:JSON.stringify(F).length}),this._backendOK)try{await this._saveLayoutToBackend(this.storageKey,F),this._dbgPush("boot","Migrated local -> backend"),A=F}catch(j){this._dbgPush("boot","Migration failed, staying local",{error:String(j)}),A=F}else A=F}!A&&((n=(i=this._config)==null?void 0:i.cards)!=null&&n.length)&&(this._dbgPush("boot","Using embedded config"),A={cards:this._config.cards}),this._setDashboardPackages_((A==null?void 0:A.packages)||[]);let T={...this._config||{}};if(A!=null&&A.options){let{storage_key:F,...j}=A.options;this._applyImportedOptions(j,!0)}else typeof(A==null?void 0:A.grid)=="number"&&this._applyImportedOptions({grid:A.grid},!0);let E=["storage_key","grid","drag_live_snap","auto_save","auto_save_debounce","container_background","card_background","card_shadow","debug","disable_overlap","container_size_mode","container_fixed_width","container_fixed_height","container_preset","container_preset_orientation","tabs","tabs_position","default_tab","hide_tabs_when_single","layers_enabled","layers","auto_resize_cards","optimize_for_mobile","mobile_dynamic_behavior","do_not_resize_text","outer_grid_buffer","dashboard_theme_enabled","dashboard_theme","dashboard_theme_override_all_design","background_mode","background_image","background_particles","background_youtube","responsive_viewports","screen_saver_enabled","screen_saver_delay"],M={};for(let F of E)T[F]!==void 0&&(M[F]=T[F]);Object.keys(M).length&&this._applyImportedOptions(M,!0),this.responsiveViewportProfiles=this._normalizeResponsiveViewportProfiles_(((o=A==null?void 0:A.options)==null?void 0:o.responsive_viewports)||(T==null?void 0:T.responsive_viewports)||this.responsiveViewportProfiles),this._responsiveLayouts=this._normalizeResponsiveLayouts_((A==null?void 0:A.cards)||[],(A==null?void 0:A.responsive_layouts)||null);let O=((c=this._getRequestedResponsiveProfile_)==null?void 0:c.call(this))||"desktop",C=((l=this._getRequestedResponsiveOrientation_)==null?void 0:l.call(this,O))||"landscape",$=this._getResponsiveLayoutKey_(O,C);this._activeResponsiveProfile=O,this._activeResponsiveLayoutKey=$;let q=((g=this._responsiveLayouts)==null?void 0:g[$])||[];await this._buildCardsFromEntries_(q),q.length?this._dbgPush("boot","Layout applied",{count:q.length,profile:$}):this._dbgPush("boot","No saved layout found; showing placeholder"),this._updateStoreBadge(),this._syncEmptyStateUI(),e&&(this._cardModProcessed=!1),setTimeout(()=>{this._processCardModOnce()},100);try{_.forEach(F=>{try{F.dispatchEvent(new Event("ll-rebuild",{bubbles:!0,composed:!0}))}catch{}})}catch{}}finally{this._loading=!1,this.__booting=!1,this.__dirty=!1,(u=this._updateApplyBtn)==null||u.call(this);try{this._renderTabs(),(m=this._renderLayersBar_)==null||m.call(this),this._applyActiveTab()}catch{}try{this._applyVisibility_()}catch{}try{let _=(b=(h=this.cardContainer)==null?void 0:h.querySelector)==null?void 0:b.call(h,"#ddcBgHost");(!_||!_.firstChild)&&((y=this._applyBackgroundFromConfig)==null||y.call(this))}catch{}}}}_normalizeTabId(e){let t=Array.isArray(this.tabs)?this.tabs.map(i=>i.id):[];return t.length?e&&t.includes(e)?e:this.defaultTab||t[0]:this.defaultTab||"default"}_renderTabs(){var n,o,c,l,g,u,m,h,b,y,_,A,T;let e=this.tabsBar;if(!e)return;let t=Array.isArray(this.tabs)?this.tabs:[];if((n=this._syncTabsPlacement_)==null||n.call(this),!t.length||t.length===1&&this.hideTabsWhenSingle){e.style.display="none",(l=(c=(o=this.rootEl)==null?void 0:o.classList)==null?void 0:c.remove)==null||l.call(c,"ddc-tabs-left-layout"),(m=(u=(g=this.rootEl)==null?void 0:g.classList)==null?void 0:u.remove)==null||m.call(u,"ddc-tabs-bottom-layout");return}e.style.display="";let i=["ddc-tabs"];this.tabsPosition==="left"&&i.push("ddc-tabs-left"),this.tabsPosition==="bottom"&&i.push("ddc-tabs-bottom"),e.className=i.join(" "),e.innerHTML="";try{e.style.width="",e.style.maxWidth=""}catch{}for(let E of t){let M=document.createElement("button");M.className=["ddc-tab",E.icon?"ddc-tab--has-icon":"",E.id===this.activeTab?"active":""].filter(Boolean).join(" "),M.dataset.tabId=E.id,M.title=E.label||E.id,M.setAttribute("aria-label",E.label||E.id),M.innerHTML=`${E.icon?`<ha-icon icon="${E.icon}"></ha-icon>`:""}<span class="ddc-tab-label">${(h=E.label)!=null?h:E.id}</span>`,M.addEventListener("click",()=>{var O,C,$;if(this.activeTab!==E.id){this.activeTab=E.id;try{localStorage.setItem(`ddc_lasttab_${this.storageKey}`,E.id)}catch{}this._applyActiveTab(),this._renderTabs();try{this._applyVisibility_()}catch{}try{let q=(C=(O=this.cardContainer)==null?void 0:O.querySelector)==null?void 0:C.call(O,"#ddcBgHost");(!q||!q.firstChild)&&(($=this._applyBackgroundFromConfig)==null||$.call(this))}catch{}}}),e.appendChild(M)}(b=this._syncTabsPlacement_)==null||b.call(this);try{(y=this._updateTabsA11y_)==null||y.call(this)}catch{}try{(_=this._syncTabsWidth_)==null||_.call(this)}catch{}try{let E=(A=e.querySelector)==null?void 0:A.call(e,".ddc-tab.active");E&&e.scrollWidth>e.clientWidth&&E.scrollIntoView({behavior:"auto",block:"nearest",inline:"nearest"})}catch{}try{(T=this._refreshTabsAlignment_)==null||T.call(this)}catch{}}_applyActiveTab(){var t,i,n,o,c,l;(((i=(t=this.cardContainer)==null?void 0:t.querySelectorAll)==null?void 0:i.call(t,".card-wrapper"))||[]).forEach(g=>{this._applyWrapDisplayState_(g,{clearSelectionOnHide:!0})});try{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(n=this._applyAutoFillNoScale)==null||n.call(this):(o=this._applyAutoScale)==null||o.call(this)}catch{}try{this._clearSelection()}catch{}try{(c=this._animateCards)==null||c.call(this)}catch{}try{(l=this._renderConnectors_)==null||l.call(this)}catch{}}_animateCards(e=null){var t,i,n,o;try{let c=Array.isArray(e)?e:Array.from(((i=(t=this.cardContainer)==null?void 0:t.querySelectorAll)==null?void 0:i.call(t,".card-wrapper"))||[]),l=(o=(n=window.matchMedia)==null?void 0:n.call(window,"(prefers-reduced-motion: reduce)"))==null?void 0:o.matches,g=800,u=.8,h=g*.3,b=g-h;c.forEach(y=>{var j,H,U,X;if(!y)return;let _=(j=window.getComputedStyle)==null?void 0:j.call(window,y);if(y.style.display==="none"||_&&_.display==="none"||y.classList.contains("ddc-hidden"))return;let T=((H=this._extractPerCardStyle_)==null?void 0:H.call(this,y))||{},E=String(T.animate_cards||"").toLowerCase();if(!(E==="on"||E!=="off"&&this.animateCards))return;let O=_&&_.transform&&_.transform!=="none"?_.transform:"",C=100*u,$=`${O} translate3d(0, ${C}%, 0)`,q=`${O} translate3d(0, 0, 0)`,F=Math.random()*(b*Math.min(u,2));if(l){try{y.animate([{opacity:0},{opacity:1}],{duration:g*.15,delay:F,easing:"linear",fill:"backwards"})}catch{y.style.opacity="0",setTimeout(()=>{y.style.transition=`opacity ${g*.15}ms linear`,y.style.opacity="1"},F)}return}try{y.style.willChange="opacity, transform";let te="cubic-bezier(0.4, 0, 0.2, 1)";y.animate([{opacity:0},{opacity:1}],{duration:h,delay:F,easing:"linear",fill:"backwards"}),(X=(U=y.animate([{transform:$},{transform:q}],{duration:h,delay:F,easing:te,fill:"backwards"})).addEventListener)==null||X.call(U,"finish",()=>{y.style.willChange=""})}catch{y.style.opacity="0",y.style.transform=$,y.style.willChange="opacity, transform",setTimeout(()=>{y.style.transition=`opacity ${h}ms linear, transform ${h}ms cubic-bezier(0.4,0,0.2,1)`,y.style.opacity="1",y.style.transform=q,setTimeout(()=>{y.style.transition="",y.style.willChange=""},h+60)},F)}})}catch(c){console.warn("[ddc:animate] animation error",c)}}_addTabSelectorToChip(e,t=null){if(!this.tabs||!this.tabs.length)return;let i=e.querySelector(".chip");if(!i)return;let n=i.querySelector("select.ddc-chip-tab");n||(n=document.createElement("select"),n.className="ddc-chip-tab",n.style.marginLeft="6px",n.title="Assign to tab",i.appendChild(n)),n.innerHTML="";for(let l of this.tabs){let g=document.createElement("option");g.value=l.id,g.textContent=l.label||l.id,n.appendChild(g)}let o=this._normalizeTabId(t||e.dataset.tabId||this.activeTab||this.defaultTab);n.value=o,e.dataset.tabId=o,n.onchange=()=>{var l,g,u;e.dataset.tabId=this._normalizeTabId(n.value),this._applyActiveTab();try{this._applyVisibility_()}catch{}try{let m=(g=(l=this.cardContainer)==null?void 0:l.querySelector)==null?void 0:g.call(l,"#ddcBgHost");(!m||!m.firstChild)&&((u=this._applyBackgroundFromConfig)==null||u.call(this))}catch{}try{this._queueSave("tab-change")}catch{}};let c=l=>l.stopPropagation();n.addEventListener("mousedown",c),n.addEventListener("pointerdown",c),n.addEventListener("touchstart",c)}_normalizePerCardStyle_(e={}){let t={};for(let i of["background","container_background","text_color","border_color"]){let n=e==null?void 0:e[i];if(n==null)continue;let o=String(n).trim();o&&(t[i]=o)}for(let i of["animate_cards","card_shadow"]){let n=String((e==null?void 0:e[i])||"").trim().toLowerCase();(n==="on"||n==="off")&&(t[i]=n)}return t}_extractPerCardStyle_(e){if(!e)return{};try{return this._normalizePerCardStyle_(JSON.parse(e.dataset.cardStyle||"{}")||{})}catch{return{}}}_applyPerCardStyle_(e,t=null,{persist:i=!0}={}){var u;if(!e)return{};let n=this._normalizePerCardStyle_(t||{}),o=(u=this._isDashboardThemeOverrideAllDesignActive_)==null?void 0:u.call(this),c=o?"":n.background||n.container_background||"",l=o?"":n.container_background||n.background||"";c?e.style.setProperty("--ddc-card-local-bg",c):e.style.removeProperty("--ddc-card-local-bg"),l?(e.style.setProperty("--ddc-card-inner-bg",l),e.style.setProperty("--ha-card-background",l),e.style.setProperty("--card-background-color",l),e.style.setProperty("--paper-card-background-color",l)):(e.style.removeProperty("--ddc-card-inner-bg"),e.style.removeProperty("--ha-card-background"),e.style.removeProperty("--card-background-color"),e.style.removeProperty("--paper-card-background-color")),!o&&n.border_color?e.style.setProperty("--ddc-card-border-color",n.border_color):e.style.removeProperty("--ddc-card-border-color"),o?e.style.removeProperty("--ddc-card-local-shadow"):n.card_shadow==="off"?e.style.setProperty("--ddc-card-local-shadow","none"):n.card_shadow==="on"?e.style.setProperty("--ddc-card-local-shadow","0 8px 24px rgba(0,0,0,.35)"):e.style.removeProperty("--ddc-card-local-shadow");let g=["--primary-text-color","--text-primary-color","--paper-item-icon-color","--state-icon-color","--mdc-theme-text-primary-on-background"];return!o&&n.text_color?(e.style.color=n.text_color,g.forEach(m=>e.style.setProperty(m,n.text_color))):(e.style.removeProperty("color"),g.forEach(m=>e.style.removeProperty(m))),i&&(Object.keys(n).length?e.dataset.cardStyle=JSON.stringify(n):delete e.dataset.cardStyle),n}_closeCardSettingsMenu_(){var t,i,n,o,c;let e=this.__cardSettingsMenu;if(e){try{(t=e.cleanup)==null||t.call(e)}catch{}try{(n=(i=e.root)==null?void 0:i.remove)==null||n.call(i)}catch{}try{e.root||(c=(o=e.menu)==null?void 0:o.remove)==null||c.call(o)}catch{}this.__cardSettingsMenu=null}}_positionCardSettingsMenu_(){let e=this.__cardSettingsMenu;if(!(e!=null&&e.menu)||!(e!=null&&e.wrap))return;let{menu:t,wrap:i}=e;if(!t.isConnected||!i.isConnected){this._closeCardSettingsMenu_();return}let n=i.getBoundingClientRect(),o=12,c=Math.max(1,window.innerWidth||document.documentElement.clientWidth||1),l=Math.max(1,window.innerHeight||document.documentElement.clientHeight||1),g=Math.max(220,t.offsetWidth||320),u=Math.max(120,t.offsetHeight||360),m=n.left+(n.width-g)/2,h=n.top+(n.height-u)/2;n.height<u*.6&&(h=n.top+Math.min(40,n.height*.5)),m=Math.min(Math.max(o,m),Math.max(o,c-g-o)),h=Math.min(Math.max(o,h),Math.max(o,l-u-o)),t.style.left=`${Math.round(m)}px`,t.style.top=`${Math.round(h)}px`}_openCardSettingsMenu(e){var p;if(!e)return;if(((p=this.__cardSettingsMenu)==null?void 0:p.wrap)===e){this._closeCardSettingsMenu_();return}this._closeCardSettingsMenu_();let t=document.createElement("div");t.className="ddc-card-settings-backdrop";let i=document.createElement("div");i.className="ddc-card-settings";let n=getComputedStyle(this),c=((...x)=>{for(let S of x){let z=String(n.getPropertyValue(S)||"").trim();if(z&&!/^transparent$/i.test(z)&&!/rgba?\([^)]*,\s*0(?:\.0+)?\s*\)/i.test(z))return z}return"#1f2329"})("--secondary-background-color","--card-background-color","--primary-background-color");Object.assign(i.style,{pointerEvents:"auto",fontSize:".92rem"});let l=x=>x.stopPropagation();i.addEventListener("pointerdown",l,!0),i.addEventListener("mousedown",l,!0),i.addEventListener("touchstart",l,!0);let g=document.createElement("div");g.className="ddc-card-settings-header";let u=document.createElement("div"),m=document.createElement("div");m.className="ddc-card-settings-kicker",m.textContent="Card Settings";let h=document.createElement("div");h.className="ddc-card-settings-title",h.textContent="Card Settings";let b=document.createElement("p");b.className="ddc-card-settings-subtitle",b.textContent="Fine-tune visibility, layers and per-card styling for this card without leaving edit mode.",u.append(m,h,b);let y=document.createElement("button");y.className="ddc-card-settings-close",y.type="button",y.setAttribute("title","Close"),y.setAttribute("aria-label","Close settings"),y.innerHTML='<ha-icon icon="mdi:close"></ha-icon>',y.addEventListener("click",x=>{x.stopPropagation(),this._closeCardSettingsMenu_()}),g.append(u,y),i.appendChild(g);let _=(x,S)=>{let z=document.createElement("div");z.style.display="flex",z.style.alignItems="center",z.style.gap="12px",z.style.width="100%";let N=document.createElement("span");return N.textContent=x,N.style.color="var(--secondary-text-color, #9ca3af)",N.style.fontWeight="500",N.style.whiteSpace="nowrap",S.style.flex="1 1 auto",z.appendChild(N),z.appendChild(S),z},A=(x,S)=>{let z=document.createElement("section");if(z.className="section-card",x){let N=document.createElement("h4");N.textContent=x,z.appendChild(N)}if(S){let N=document.createElement("p");N.textContent=S,z.appendChild(N)}return z},T=x=>{Object.assign(x.style,{appearance:"none",padding:"10px 12px",minHeight:"44px",border:"1px solid color-mix(in oklab, var(--divider-color, rgba(255,255,255,.12)) 78%, rgba(255,255,255,.08))",borderRadius:"12px",background:c,color:"var(--primary-text-color, #f5f5f5)",font:"inherit",lineHeight:"1.4",width:"100%"})},E=this._extractPerCardStyle_(e),M=["transparent","#111827","#1f2937","#334155","#0f766e","#6b5b95","var(--ha-card-background)","rgba(255,255,255,0.24)"],O=["linear-gradient(135deg, #1e3a8a, #0ea5e9)","linear-gradient(135deg, #111827, #1f2937)","linear-gradient(135deg, #0f766e, #22c55e)","linear-gradient(135deg, #7c3aed, #06b6d4)","linear-gradient(135deg, #f97316, #f43f5e)","radial-gradient(circle at 30% 20%, #2dd4bf, #1e293b)"],C=x=>x&&(x.addEventListener("pointerdown",l),x.addEventListener("mousedown",l),x.addEventListener("touchstart",l),x),$=(x,S="#111827")=>{let z=String(x||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);return z?z[0]:S},q=x=>{let S=String(x||"").trim();if(!S)return"transparent";if(S.startsWith("var("))try{let z=S.slice(4,-1).trim();return getComputedStyle(this).getPropertyValue(z).trim()||"transparent"}catch{return"transparent"}return S},F=(x={})=>{let S={...this._extractPerCardStyle_(e),...x};for(let z of Object.keys(S))String(S[z]||"").trim()||delete S[z];this._applyPerCardStyle_(e,S);try{this._queueSave("card-style-change")}catch{}},j=(x,S,z)=>{let N=document.createElement("select");T(N),[{value:"",label:"Dashboard default"},{value:"on",label:"Enabled"},{value:"off",label:"Disabled"}].forEach(({value:V,label:J})=>{let Z=document.createElement("option");Z.value=V,Z.textContent=J,N.appendChild(Z)}),N.value=E[S]||"",C(N),N.addEventListener("change",()=>{F({[S]:N.value})});let W=_(x,N),G=document.createElement("div");if(Object.assign(G.style,{display:"flex",flexDirection:"column",gap:"6px"}),G.appendChild(W),z){let V=document.createElement("div");V.textContent=z,Object.assign(V.style,{fontSize:".75rem",color:"var(--secondary-text-color, #9ca3af)"}),G.appendChild(V)}return G},H=(x,S,z,N,W={})=>{let G=document.createElement("div");Object.assign(G.style,{display:"flex",flexDirection:"column",gap:"6px"});let V=document.createElement("div");Object.assign(V.style,{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"10px"});let J=document.createElement("span");J.textContent=x,Object.assign(J.style,{color:"var(--secondary-text-color, #9ca3af)",fontWeight:"500"});let Z=document.createElement("button");Z.type="button",Z.textContent="Reset",Object.assign(Z.style,{border:"1px solid color-mix(in oklab, var(--divider-color, rgba(255,255,255,.12)) 78%, rgba(255,255,255,.08))",borderRadius:"999px",padding:"6px 12px",background:"rgba(255,255,255,.03)",color:"var(--primary-text-color, #f5f5f5)",cursor:"pointer",font:"inherit"}),C(Z);let he=document.createElement("div");Object.assign(he.style,{display:"flex",alignItems:"center",gap:"8px"});let _e=document.createElement("input");_e.type="color",_e.value=$(E[S],S==="text_color"?"#f8fafc":"#111827"),Object.assign(_e.style,{width:"36px",height:"36px",padding:"0",border:"none",background:"transparent",cursor:"pointer",flex:"0 0 36px"}),C(_e);let ke=document.createElement("input");ke.type="text",ke.value=E[S]||"",ke.placeholder=z,Object.assign(ke.style,{flex:"1 1 auto",minHeight:"44px",padding:"10px 12px",border:"1px solid color-mix(in oklab, var(--divider-color, rgba(255,255,255,.12)) 78%, rgba(255,255,255,.08))",borderRadius:"12px",background:"var(--ha-card-background, var(--card-background-color, #111827))",color:"var(--primary-text-color, #f5f5f5)",font:"inherit"}),C(ke);let Ee=()=>{let je=ke.value.trim();G.querySelectorAll("[data-card-style-value]").forEach(et=>{let ct=et.getAttribute("data-card-style-value")===je;et.setAttribute("aria-pressed",ct?"true":"false"),et.style.outline=ct?"2px solid var(--primary-color, #03a9f4)":"none"})};if(_e.addEventListener("input",()=>{ke.value=_e.value,F({[S]:_e.value}),Ee()}),ke.addEventListener("input",()=>{let je=ke.value.trim(),et=je.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);et&&(_e.value=et[0]),F({[S]:je}),Ee()}),Z.addEventListener("click",je=>{je.stopPropagation(),ke.value="",F({[S]:""}),Ee()}),V.appendChild(J),V.appendChild(Z),he.appendChild(_e),he.appendChild(ke),G.appendChild(V),G.appendChild(he),N){let je=document.createElement("div");je.textContent=N,Object.assign(je.style,{fontSize:".75rem",color:"var(--secondary-text-color, #9ca3af)"}),G.appendChild(je)}let Fe=(je,{gradient:et=!1}={})=>{if(!Array.isArray(je)||!je.length)return;let ct=document.createElement("div");Object.assign(ct.style,{display:"flex",flexWrap:"wrap",gap:"6px"}),je.forEach(Pe=>{let He=document.createElement("button");He.type="button",He.setAttribute("data-card-style-value",Pe),He.setAttribute("aria-pressed","false"),Object.assign(He.style,{width:et?"42px":"26px",height:"26px",borderRadius:et?"8px":"7px",border:"1px solid rgba(255,255,255,.18)",background:q(Pe),cursor:"pointer",padding:"0"}),He.title=Pe,C(He),He.addEventListener("click",ht=>{ht.stopPropagation(),ke.value=Pe;let tt=Pe.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);tt&&(_e.value=tt[0]),F({[S]:Pe}),Ee()}),ct.appendChild(He)}),G.appendChild(ct)};return Fe(W.presets||[]),Fe(W.gradients||[],{gradient:!0}),Ee(),G},U=A("Visibility & placement","Control where this card appears and how it behaves inside the dashboard."),X=A("Per-card style","Overrides Dashboard Settings for this card only."),te=A("Actions","Quick actions for this individual card.");if(Array.isArray(this.tabs)&&this.tabs.length>1){let x=document.createElement("select");T(x);for(let W of this.tabs){let G=document.createElement("option");G.value=W.id,G.textContent=W.label||W.id,x.appendChild(G)}let S=e.dataset.tabId||this.defaultTab;x.value=this._normalizeTabId(S),x.addEventListener("change",()=>{var G;let W=x.value;e.dataset.tabId=this._normalizeTabId(W);try{(G=this._addTabSelectorToChip)==null||G.call(this,e,e.dataset.tabId)}catch{}try{this._applyActiveTab()}catch{}try{this._applyVisibility_()}catch{}try{this._queueSave("tab-change")}catch{}}),x.addEventListener("pointerdown",l),x.addEventListener("mousedown",l),x.addEventListener("touchstart",l);let z=_("Tab",x);U.appendChild(z);let N=document.createElement("div");N.textContent="Choose which tab this card appears on.",Object.assign(N.style,{fontSize:".75rem",color:"var(--secondary-text-color, #9ca3af)"}),U.appendChild(N)}if(this.layersEnabled&&Array.isArray(this.layers)&&this.layers.length){let x=document.createElement("div");x.textContent="Pick the layers this card should belong to. If none are selected, the card stays visible on every layer.",Object.assign(x.style,{fontSize:".75rem",color:"var(--secondary-text-color, #9ca3af)"}),U.appendChild(x);let S=document.createElement("div");Object.assign(S.style,{display:"flex",flexWrap:"wrap",gap:"8px"});let z=new Set(this._getWrapperLayerIds_(e)),N=()=>{S.querySelectorAll("[data-layer-id]").forEach(W=>{let G=W.getAttribute("data-layer-id"),V=!!G&&z.has(G);W.setAttribute("aria-pressed",V?"true":"false"),W.style.outline=V?"2px solid var(--primary-color, #03a9f4)":"none",W.style.borderColor=V?"color-mix(in oklab, var(--primary-color, #03a9f4) 48%, transparent)":"var(--divider-color, rgba(255,255,255,.14))"})};(this.layers||[]).forEach(W=>{let G=document.createElement("button");G.type="button",G.className="layer-chip",G.setAttribute("data-layer-id",W.id),G.setAttribute("aria-pressed",z.has(W.id)?"true":"false"),G.style.borderColor=`color-mix(in oklab, ${W.color||"#60a5fa"} 40%, transparent)`,G.style.background=`color-mix(in oklab, ${W.color||"#60a5fa"} 12%, transparent)`,G.innerHTML=`${W.icon?`<ha-icon icon="${W.icon}"></ha-icon>`:""}<span>${W.label||W.id}</span>`,C(G),G.addEventListener("click",V=>{var J,Z,he;V.stopPropagation(),z.has(W.id)?z.delete(W.id):z.add(W.id),this._setWrapperLayerIds_(e,Array.from(z)),N();try{(J=this._applyActiveTab)==null||J.call(this)}catch{}try{(Z=this._applyVisibility_)==null||Z.call(this)}catch{}try{(he=this._queueSave)==null||he.call(this,"layer-change")}catch{}}),S.appendChild(G)}),N(),U.appendChild(S)}let re=document.createElement("select");T(re);let le=[{value:"",label:"Default"},{value:"visible",label:"Visible"},{value:"hidden",label:"Hidden"},{value:"auto",label:"Scroll"}];for(let x of le){let S=document.createElement("option");S.value=x.value,S.textContent=x.label,re.appendChild(S)}let Le=e.dataset.overflow||e.style.overflow||"";re.value=Le||"",re.addEventListener("change",()=>{let x=re.value,S=e.firstElementChild;x?(e.style.setProperty("overflow",x,"important"),S&&S.style.setProperty("overflow",x,"important"),e.dataset.overflow=x):(e.style.removeProperty("overflow"),S&&S.style.removeProperty("overflow"),delete e.dataset.overflow);try{this._queueSave("overflow-change")}catch{}}),re.addEventListener("pointerdown",l),re.addEventListener("mousedown",l),re.addEventListener("touchstart",l);let me=_("Overflow",re);U.appendChild(me);let de=document.createElement("div");de.textContent="Control how card content behaves when it exceeds its bounds.",Object.assign(de.style,{fontSize:".75rem",color:"var(--secondary-text-color, #9ca3af)"}),U.appendChild(de),X.appendChild(H("Container background","container_background","transparent \xB7 #123456 \xB7 var(--ha-card-background)","Sets the inner card surface for this card only.",{presets:M,gradients:O})),X.appendChild(H("Card background","background","transparent \xB7 #123456 \xB7 linear-gradient(...)","Sets the outer wrapper/background around this card.",{presets:M,gradients:O})),X.appendChild(H("Text color","text_color","#f8fafc \xB7 var(--primary-text-color)","Applies to text and icons when the card supports inherited theme vars.")),X.appendChild(H("Border color","border_color","#38bdf8","Adds an optional border color around this card.")),X.appendChild(j("Animate cards","animate_cards","Overrides the dashboard animation setting for this card.")),X.appendChild(j("Drop shadow","card_shadow","Overrides the dashboard shadow setting for this card."));let Ce=document.createElement("div");Object.assign(Ce.style,{display:"grid",gridTemplateColumns:"1fr",gap:"8px"});let ue=document.createElement("button");ue.type="button",ue.className="btn secondary",ue.innerHTML='<ha-icon icon="mdi:download-box-outline"></ha-icon><span style="margin-left:6px">Export card</span>',C(ue),ue.addEventListener("click",x=>{var S;x.stopPropagation(),(S=this._exportSingleCard_)==null||S.call(this,e)}),Ce.appendChild(ue),te.appendChild(Ce),i.append(U,X,te);let Ae=this.shadowRoot||this;t.appendChild(i),Ae.appendChild(t);let ye=x=>{x.target===t&&this._closeCardSettingsMenu_()},Se=x=>{(typeof x.composedPath=="function"?x.composedPath():[]).includes(i)||this._closeCardSettingsMenu_()},B=x=>{x.key==="Escape"&&this._closeCardSettingsMenu_()};t.addEventListener("pointerdown",ye,!0),document.addEventListener("pointerdown",Se,!0),document.addEventListener("keydown",B,!0),this.__cardSettingsMenu={root:t,menu:i,wrap:e,cleanup:()=>{t.removeEventListener("pointerdown",ye,!0),document.removeEventListener("pointerdown",Se,!0),document.removeEventListener("keydown",B,!0)}}}_toggleEditMode(e=null){var b,y,_,A,T,E,M,O,C,$,q,F,j,H,U,X,te,re,le,Le,me,de,Ce,ue;try{(b=this.__clearPressTimer)==null||b.call(this)}catch{}let t=e===null?!this.editMode:!!e,i=!this.editMode&&t;try{let Ae=this.config&&this.config.edit_mode_pin!=null?String(this.config.edit_mode_pin):"",Se=((this.editModePin!=null?String(this.editModePin):"")||Ae).trim();if(t&&!this.editMode&&Se){let B=window.prompt("Enter PIN / password to open Edit Mode:");if(B===null)return;if(String(B).trim()!==Se){(y=this._toast)==null||y.call(this,"Incorrect PIN/password.");return}}}catch{}let n=this.renderRoot||this.shadowRoot||this,o=(_=n==null?void 0:n.querySelector)==null?void 0:_.call(n,".ddc-toolbar.streamlined.v2, .ddc-toolbar.streamlined.v3"),c=(Ae,ye)=>{try{Ae&&(Ae.style.display=ye)}catch{}},l="inline-block",g="none",u=()=>{c(this.addButton,l),c(this.reloadBtn,l),c(this.diagBtn,l),c(this.exitEditBtn,l),c(this.exportBtn,l),c(this.importBtn,l),c(this.exploreBtn,l),c(this.storeBadge,l),c(this.applyLayoutBtn,l),c(this.copyBtn,l),c(this.pasteBtn,l),c(this.lineModeBtn,l),c(this.settingsBtn,l),c(this.toolbarToggleBtn,"inline-flex")},m=()=>{c(this.addButton,g),c(this.reloadBtn,g),c(this.diagBtn,g),c(this.exitEditBtn,g),c(this.exportBtn,g),c(this.importBtn,g),c(this.exploreBtn,g),c(this.storeBadge,g),c(this.applyLayoutBtn,g),c(this.copyBtn,g),c(this.pasteBtn,g),c(this.lineModeBtn,g),c(this.settingsBtn,g),c(this.toolbarToggleBtn,g)};if(o){try{(A=this._computeHaTopGutter_)==null||A.call(this)}catch{}if(t)o.setAttribute("data-force-open","1"),o.style.display="grid",u(),(T=this._setToolbarExpanded_)==null||T.call(this,!1,{toolbar:o}),requestAnimationFrame(()=>{var Se;let ye=o.scrollHeight||0;o.style.setProperty("--open-h",ye+"px"),o.classList.add("is-open"),(Se=this._refreshToolbarOpenHeight_)==null||Se.call(this),requestAnimationFrame(()=>{var B;return(B=this._refreshToolbarOpenHeight_)==null?void 0:B.call(this)})});else{o.setAttribute("data-force-open","1"),o.style.display="grid";let ye=o.scrollHeight||0;o.style.setProperty("--open-h",ye+"px"),requestAnimationFrame(()=>{o.classList.remove("is-open")}),setTimeout(()=>{var Se;(Se=this._setToolbarExpanded_)==null||Se.call(this,!1,{toolbar:o}),m(),o.removeAttribute("data-force-open")},260)}}else t?u():m();this.editMode=t,t||(this._persistCurrentResponsiveProfileToMemory_(),this.viewportPreviewMode="live",(E=this._closeConnectorSettings_)==null||E.call(this),(M=this._cancelConnectorDraft_)==null||M.call(this),this._selectedConnectorId=null);try{(O=this._syncViewportPreviewUI_)==null||O.call(this)}catch{}(C=this._syncEmptyStateUI)==null||C.call(this),($=this.cardContainer)==null||$.classList.toggle("grid-on",this.editMode);try{typeof this._resetScreensaverTimer=="function"&&this._resetScreensaverTimer()}catch{}if((((F=(q=this.cardContainer)==null?void 0:q.querySelectorAll)==null?void 0:F.call(q,".card-wrapper"))||[]).forEach(Ae=>{Ae.classList.toggle("editing",this.editMode);let ye=Ae.querySelector(".resize-handle");ye&&(ye.style.display=this.editMode?"flex":"none"),!Ae.dataset.placeholder&&window.interact&&window.interact(Ae).draggable(this.editMode).resizable(this.editMode),Ae.style.touchAction=this.editMode?"none":"auto"}),this.editMode||(j=this._clearSelection)==null||j.call(this),this.editMode||(H=this.cardContainer)==null||H.querySelectorAll(".card-wrapper.dragging").forEach(Ae=>Ae.classList.remove("dragging")),(U=this._syncConnectorUiState_)==null||U.call(this),i){let Ae=(X=this.__lastHoldX)!=null?X:null,ye=(te=this.__lastHoldY)!=null?te:null;(re=this._playEditRipple)==null||re.call(this,Ae,ye)}try{(le=this._applyHaChromeVisibility_)==null||le.call(this)}catch{}try{let Ae=((me=(Le=this.shadowRoot)==null?void 0:Le.querySelector)==null?void 0:me.call(Le,".ddc-root"))||((Ce=(de=this.renderRoot)==null?void 0:de.querySelector)==null?void 0:Ce.call(de,".ddc-root"))||null;if(Ae){Ae.classList.toggle("ddc-edit-mode-active",!!this.editMode);let ye=0;if(t&&o)try{ye=o.scrollHeight||o.offsetHeight||0}catch{}Ae.style.setProperty("--ddc-toolbar-height",ye+"px"),!this.autoResizeCards&&this.cardContainer&&(t&&o?this.cardContainer.style.marginTop=ye+"px":this.cardContainer.style.marginTop="")}}catch{}try{(ue=this._syncResponsiveProfileForViewport_)==null||ue.call(this,{force:!t}),typeof this._resizeContainer=="function"&&this._resizeContainer(),typeof this._applyAutoScale=="function"&&this._applyAutoScale()}catch{}}_isInHaEditorPreview(){let e=this;for(;e;){let t=e.nodeType===1&&e.localName?e.localName.toLowerCase():"";if(t==="hui-card-editor"||t==="hui-dialog-edit-card"||t==="hui-card-preview"||t==="ha-dialog"||t==="mwc-dialog")return!0;let i=e.getRootNode&&e.getRootNode();e=e.parentElement||i&&i.host||null}return!1}_installLongPressToEnterEdit(){if(this.__lpInstalled)return;this.__lpInstalled=!0;let e=this.cardContainer;if(!e)return;let t=800,i=18,n=C=>!!C&&typeof C=="object"&&C.nodeType===1,o=(C,$)=>{try{return!!(C&&$&&typeof C.contains=="function"&&n($)&&C.contains($))}catch{return!1}},c=C=>o(this.cardContainer,C),l=C=>{var F,j,H;let $=(j=(F=C.target)==null?void 0:F.closest)==null?void 0:j.call(F,".card-wrapper");if(n($)&&c($)&&!$.classList.contains("ddc-placeholder"))return!0;let q=typeof C.composedPath=="function"?C.composedPath():[];for(let U of q)if(n(U)&&c(U)&&(H=U.classList)!=null&&H.contains("card-wrapper")&&!U.classList.contains("ddc-placeholder"))return!0;return!1},g=(C,$)=>{let q=document.createElement("div");q.className="ddc-press-ring",document.body.appendChild(q),Object.assign(q.style,{position:"fixed",left:`${C}px`,top:`${$}px`,zIndex:"100000",width:"44px",height:"44px",pointerEvents:"none",marginLeft:"-22px",marginTop:"-22px",filter:"drop-shadow(0 2px 6px rgba(0,0,0,.35))"}),q.innerHTML=`
      <svg viewBox="0 0 44 44" aria-hidden="true" style="width:44px;height:44px">
        <circle cx="22" cy="22" r="18" style="stroke:rgba(255,255,255,.45);stroke-width:4;fill:none"></circle>
        <circle class="pr-fg" cx="22" cy="22" r="18" style="stroke:var(--primary-color);stroke-width:4;fill:none;stroke-linecap:round"></circle>
        <circle cx="22" cy="22" r="2" style="fill:var(--primary-color);opacity:.95"></circle>
      </svg>`;let F=q.querySelector(".pr-fg"),j=18,H=2*Math.PI*j;return F.style.strokeDasharray=`${H}`,F.style.strokeDashoffset=`${H}`,requestAnimationFrame(()=>{F.style.transition=`stroke-dashoffset ${t}ms linear`,F.style.strokeDashoffset="0"}),{el:q,move(U,X){q.style.left=`${U}px`,q.style.top=`${X}px`},remove(){try{q.remove()}catch{}}}},u=null,m=null,h=0,b=0,y=null,_=()=>{u&&clearTimeout(u),u=null,m==null||m.remove(),m=null};this.__clearPressTimer=_;let A=C=>{C.pointerType==="mouse"&&C.button!==0||this._isInHaEditorPreview()||!c(C.target)||l(C)||(y=C.pointerId,h=C.clientX,b=C.clientY,this.__lastHoldX=h,this.__lastHoldY=b,m=g(h,b),u=setTimeout(()=>{var q;_();let $=!this.editMode;this._toggleEditMode($),(q=this._toast)==null||q.call(this,`Edit mode ${$?"enabled":"disabled"}`)},t))},T=C=>{u==null||C.pointerId!==y||(m==null||m.move(C.clientX,C.clientY),(Math.abs(C.clientX-h)>i||Math.abs(C.clientY-b)>i)&&_())},E=C=>{C.pointerId===y&&(_(),y=null)},M=C=>{if(u)return C.preventDefault(),C.stopPropagation(),!1},O=C=>{var q;if(this._isInHaEditorPreview()||!c(C.target)||l(C))return;let $=!this.editMode;this._toggleEditMode($),(q=this._toast)==null||q.call(this,`Edit mode ${$?"enabled":"disabled"}`)};e.addEventListener("pointerdown",A),window.addEventListener("pointermove",T,{passive:!0}),window.addEventListener("pointerup",E,{passive:!0}),window.addEventListener("pointercancel",E,{passive:!0}),window.addEventListener("contextmenu",M),e.addEventListener("dblclick",O),this.__lpHandlers={onPointerDown:A,onPointerMove:T,onPointerUpOrCancel:E,onContextMenu:M,onDblClick:O}}_isLayoutEmpty(){let e=this.cardContainer;return e?e.querySelectorAll(".card-wrapper:not(.ddc-placeholder)").length===0:!0}_syncEmptyStateUI(){let e=this._isLayoutEmpty();if(this.addButton){let i=this.editMode||e;this.addButton.style.display=i?"inline-block":"none",this.addButton.classList.toggle("cta-empty",!this.editMode&&e)}let t=i=>i&&(i.style.display=this.editMode?"inline-block":"none");t(this.reloadBtn),t(this.diagBtn),t(this.exitEditBtn),t(this.exportBtn),t(this.importBtn),t(this.exploreBtn),t(this.storeBadge),t(this.applyLayoutBtn),t(this.lineModeBtn)}_updateApplyBtn(){this.applyLayoutBtn&&(this.applyLayoutBtn.disabled=!this.__dirty)}_markDirty(e=""){var t;this.__dirty=!0,this._updateApplyBtn(),(t=this._dbgPush)==null||t.call(this,"dirty","Marked dirty",{reason:e})}_playEditRipple(e=null,t=null){let i=this.cardContainer;if(!i)return;let n=i.getBoundingClientRect(),o=e==null?n.left+n.width/2:e,c=t==null?n.top+n.height/2:t,l=o-n.left,g=c-n.top,u=document.createElement("div");u.className="ddc-ripple-veil",u.style.setProperty("--rip-x",`${l}px`),u.style.setProperty("--rip-y",`${g}px`),i.appendChild(u),setTimeout(()=>u.remove(),450)}_initInteract(){this.cardContainer.querySelectorAll(".card-wrapper").forEach(t=>this._initCardInteract(t))}_initCardInteract(e){if(!window.interact||e.dataset.placeholder)return;let t=this.gridSize,i=!!this.dragLiveSnap,o=[window.interact.modifiers.restrictRect({restriction:"parent",endOnly:!0})],c=this.__pointerScaleX&&Math.abs(this.__pointerScaleX-1)>1e-6||this.__pointerScaleY&&Math.abs(this.__pointerScaleY-1)>1e-6;if(this.dragLiveSnap&&!c){let l=window.interact.snappers.grid({x:this.gridSize,y:this.gridSize});o.push(window.interact.modifiers.snap({targets:[l],range:1/0,offset:"startCoords"}))}window.interact(e).draggable({enabled:this.editMode,inertia:!1,modifiers:o,listeners:{start:l=>{this._selection.has(e)||(!(l!=null&&l.shiftKey)&&!(l!=null&&l.ctrlKey)&&!(l!=null&&l.metaKey)&&this._clearSelection(),this._toggleSelection(e,!0));let g=Array.from(this._selection);this.__groupDrag={leader:e,members:g,startRaw:new Map(g.map(m=>[m,{x:parseFloat(m.getAttribute("data-x-raw"))||parseFloat(m.getAttribute("data-x"))||0,y:parseFloat(m.getAttribute("data-y-raw"))||parseFloat(m.getAttribute("data-y"))||0,w:parseFloat(m.style.width)||m.getBoundingClientRect().width,h:parseFloat(m.style.height)||m.getBoundingClientRect().height}]))},this.__collisionOriginals=new Map,this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)").forEach(m=>{let h=parseFloat(m.getAttribute("data-x-raw"))||parseFloat(m.getAttribute("data-x"))||0,b=parseFloat(m.getAttribute("data-y-raw"))||parseFloat(m.getAttribute("data-y"))||0;this.__collisionOriginals.set(m,{x:h,y:b})}),g.forEach(m=>{m.classList.add("dragging"),m.getAttribute("data-x-raw")===null&&m.setAttribute("data-x-raw",m.getAttribute("data-x")||"0"),m.getAttribute("data-y-raw")===null&&m.setAttribute("data-y-raw",m.getAttribute("data-y")||"0")})},move:l=>{var O;if(!this.__groupDrag)return;let g=this.gridSize,u=!!this.dragLiveSnap,m=this.__groupDrag.leader,h=this.__groupDrag.startRaw.get(m),b=this.__pointerScaleX||1,y=this.__pointerScaleY||1,_=(parseFloat(m.getAttribute("data-x-raw"))||h.x)+l.dx/b,A=(parseFloat(m.getAttribute("data-y-raw"))||h.y)+l.dy/y,T=_-h.x,E=A-h.y,M=this.__groupDrag.members.map(C=>{let $=this.__groupDrag.startRaw.get(C),q=$.x+T,F=$.y+E,j=u?Math.round(q/g)*g:q,H=u?Math.round(F/g)*g:F;return{el:C,rawX:q,rawY:F,snapX:j,snapY:H,w:$.w,h:$.h}});(O=this._shiftProposedCardsIntoCanvasTop_)==null||O.call(this,M,u,g),this.disableOverlap&&this._pushCardsOutOfTheWay(M,T,E,u,g),m.setAttribute("data-x-raw",String(_)),m.setAttribute("data-y-raw",String(A));for(let C of M)C.el.setAttribute("data-x-raw",String(C.rawX)),C.el.setAttribute("data-y-raw",String(C.rawY)),this._setCardPosition(C.el,C.snapX,C.snapY);this._resizeContainer()},end:l=>{var m;if(!this.__groupDrag)return;let g=this.gridSize,u=this.__groupDrag.members.map(h=>{let b=parseFloat(h.getAttribute("data-x-raw"))||parseFloat(h.getAttribute("data-x"))||0,y=parseFloat(h.getAttribute("data-y-raw"))||parseFloat(h.getAttribute("data-y"))||0,_=Math.round(b/g)*g,A=Math.round(y/g)*g,T=parseFloat(h.style.width)||h.getBoundingClientRect().width,E=parseFloat(h.style.height)||h.getBoundingClientRect().height;return{el:h,rawX:b,rawY:y,snapX:_,snapY:A,w:T,h:E}});(m=this._shiftProposedCardsIntoCanvasTop_)==null||m.call(this,u,!0,g),this.disableOverlap&&this._pushCardsOutOfTheWay(u,0,0,!1,g);for(let h of u)this._setCardPosition(h.el,h.snapX,h.snapY),h.el.setAttribute("data-x-raw",String(h.snapX)),h.el.setAttribute("data-y-raw",String(h.snapY));for(let h of this.__groupDrag.members)h.classList.remove("dragging");this._resizeContainer(),this._isContainerFixed()&&this._clampAllCardsInside(),this._queueSave(this.__groupDrag.members.length>1?"group-drag-end":"drag-end"),this.__groupDrag=null,this.__collisionOriginals=null}}}),window.interact(e).resizable({enabled:this.editMode,edges:{right:".resize-handle",bottom:".resize-handle"},inertia:!1,listeners:{move:l=>{let g=this.gridSize,u=!!this.dragLiveSnap,m=parseFloat(e.style.width)||e.getBoundingClientRect().width,h=parseFloat(e.style.height)||e.getBoundingClientRect().height,b=this.__pointerScaleX||1,y=this.__pointerScaleY||1,_=l.rect.width/b,A=l.rect.height/y,T=u?Math.max(g,Math.round(_/g)*g):_,E=u?Math.max(g,Math.round(A/g)*g):A,M=parseFloat(e.getAttribute("data-x"))||0,O=parseFloat(e.getAttribute("data-y"))||0,C=T,$=E;if(this._isContainerFixed()){let{w:F,h:j}=this._getContainerSize();C=Math.min(T,Math.max(this.gridSize,F-M)),$=Math.min(E,Math.max(this.gridSize,j-O))}let q=[this._rectFor(e,M,O,C,$)];this.disableOverlap&&this._anyCollisionFor(q,new Set([e]))||(e.style.width=`${C}px`,e.style.height=`${$}px`,this._resizeContainer())},end:()=>{let l=this.gridSize,g=parseFloat(e.style.width)||e.getBoundingClientRect().width,u=parseFloat(e.style.height)||e.getBoundingClientRect().height,m=Math.max(l,Math.round(g/l)*l),h=Math.max(l,Math.round(u/l)*l),b=parseFloat(e.getAttribute("data-x"))||0,y=parseFloat(e.getAttribute("data-y"))||0;if(this._isContainerFixed()){let{w:A,h:T}=this._getContainerSize();m=Math.min(m,Math.max(l,A-b)),h=Math.min(h,Math.max(l,T-y))}let _=[this._rectFor(e,b,y,m,h)];this.disableOverlap&&this._anyCollisionFor(_,new Set([e]))||(e.style.width=`${m}px`,e.style.height=`${h}px`),this._resizeContainer(),this._isContainerFixed()&&this._clampAllCardsInside(),this._queueSave("resize-end")}}}),e.addEventListener("mousedown",l=>{this.editMode&&(l.target.closest(".resize-handle")||l.target.closest(".delete-handle")||l.target.closest(".chip")||(l.shiftKey||l.ctrlKey||l.metaKey?(l.stopPropagation(),this._toggleSelection(e)):this._selection.has(e)||(this._clearSelection(),this._toggleSelection(e,!0))))})}async _createCard(e){var c,l,g,u,m;let t=(()=>{try{return typeof structuredClone=="function"?structuredClone(e||{}):JSON.parse(JSON.stringify(e||{}))}catch{return{...e||{}}}})(),i=String((e==null?void 0:e.type)||"");if(i==="custom:ddc-html-card"){let h=document.createElement("ddc-html-card");return h.__ddcSourceConfig=t,(c=h.setConfig)==null||c.call(h,e),h.hass=this.hass,h}if(i==="custom:ddc-line-card"){let h=document.createElement("ddc-line-card");return h.__ddcSourceConfig=t,(l=h.setConfig)==null||l.call(h,e),h.hass=this.hass,h}if(i==="custom:ddc-table-card"){let h=document.createElement("ddc-table-card");return h.__ddcSourceConfig=t,(g=h.setConfig)==null||g.call(h,e),h.hass=this.hass,h}if(i==="custom:ddc-icon-card"){let h=document.createElement("ddc-icon-card");return h.__ddcSourceConfig=t,(u=h.setConfig)==null||u.call(h,e),h.hass=this.hass,h}if(i==="custom:ddc-text-card"){let h=document.createElement("ddc-text-card");return h.__ddcSourceConfig=t,(m=h.setConfig)==null||m.call(h,e),h.hass=this.hass,h}let o=(await this._helpersPromise||await window.loadCardHelpers()).createCardElement(e);if(o.__ddcSourceConfig=t,o.hass=this.hass,e.type==="custom:mod-card"&&(await new Promise(h=>setTimeout(h,0)),o.setConfig&&typeof o.setConfig=="function"))try{o.setConfig(e)}catch{}return o}_makeWrapper(e,t={}){var u,m;let i=document.createElement("div");if(i.classList.add("card-wrapper"),i.dataset.tabId=this._normalizeTabId(this.activeTab||this.defaultTab),i.dataset.layoutCardId=t.layoutCardId||((u=e==null?void 0:e.dataset)==null?void 0:u.layoutCardId)||this._genLayoutCardId_(),this.editMode&&i.classList.add("editing"),!i.style.zIndex){let h=this._highestZ()+1;i.style.zIndex=String(Math.max(h,6))}let n=document.createElement("div");n.className="chip",n.innerHTML=`
      <button class="mini" data-act="edit" title="Edit" aria-label="Edit">
        <ha-icon icon="mdi:pencil"></ha-icon><span>Edit</span>
      </button>
      <button class="mini" data-act="duplicate" title="Duplicate" aria-label="Duplicate">
        <ha-icon icon="mdi:content-copy"></ha-icon><span>Duplicate</span>
      </button>
      <button class="mini" data-act="export-card" title="Export card" aria-label="Export card">
        <ha-icon icon="mdi:download-box-outline"></ha-icon><span>Export card</span>
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
    `;let o=document.createElement("button");o.className="mini",o.dataset.act="settings",o.setAttribute("title","Settings"),o.setAttribute("aria-label","Settings"),o.innerHTML='<ha-icon icon="mdi:cog"></ha-icon><span>Settings</span>',n.appendChild(o);let c=document.createElement("div");c.className="delete-handle",c.innerHTML='<ha-icon icon="mdi:close-thick"></ha-icon>',c.addEventListener("click",h=>{var b,y;h.stopPropagation(),this._selection.size>1&&this._selection.has(i)?(Array.from(this._selection).forEach(A=>A.remove()),this._clearSelection(),this._resizeContainer(),this._queueSave("delete-multi"),(b=this._ensurePlaceholderIfEmpty)==null||b.call(this)):(i.remove(),this._resizeContainer(),this._queueSave("delete"),(y=this._ensurePlaceholderIfEmpty)==null||y.call(this))});try{this._addTabSelectorToChip(i,i.dataset.tabId)}catch{}n.addEventListener("click",async h=>{var y,_,A,T,E,M,O,C,$;h.stopPropagation();let b=(A=(_=(y=h.target)==null?void 0:y.closest("button"))==null?void 0:_.dataset)==null?void 0:A.act;if(b){if(b==="delete")this._selection.size>1&&this._selection.has(i)?(Array.from(this._selection).forEach(F=>F.remove()),this._clearSelection(),this._resizeContainer(),this._queueSave("delete-multi"),this._ensurePlaceholderIfEmpty()):(i.remove(),this._resizeContainer(),this._queueSave("delete"),this._ensurePlaceholderIfEmpty());else if(b==="export-card")(T=this._exportSingleCard_)==null||T.call(this,i);else if(b==="duplicate"||b==="copy"){let q=this._selection.size>1&&this._selection.has(i)?Array.from(this._selection):[i];for(let F of q){let j=this._extractCardConfig(F.firstElementChild)||{},H=await this._createCard(j),U=this._makeWrapper(H);U.style.width=F.style.width,U.style.height=F.style.height;try{F.style&&F.style.overflow&&(U.style.overflow=F.style.overflow),F.dataset&&F.dataset.overflow&&(U.dataset.overflow=F.dataset.overflow),F.dataset&&F.dataset.cardStyle&&(U.dataset.cardStyle=F.dataset.cardStyle,(M=this._applyPerCardStyle_)==null||M.call(this,U,((E=this._extractPerCardStyle_)==null?void 0:E.call(this,F))||null));let re=F.firstElementChild,le=U.firstElementChild;re&&le&&re.style&&re.style.overflow&&(le.style.overflow=re.style.overflow)}catch{}let X=(parseFloat(F.getAttribute("data-x"))||0)+this.gridSize,te=(parseFloat(F.getAttribute("data-y"))||0)+this.gridSize;this._setCardPosition(U,X,te);{let re=this._highestZ()+1;U.style.zIndex=String(Math.max(re,6))}try{let re=(O=F.dataset)==null?void 0:O.tabId;re&&(U.dataset.tabId=re)}catch{}this.cardContainer.appendChild(U);try{(C=this._addTabSelectorToChip)==null||C.call(this,U,U.dataset.tabId)}catch{}try{this._rebuildOnce(U.firstElementChild)}catch{}this._initCardInteract(U)}this._resizeContainer(),this._queueSave("duplicate")}else if(b==="front")this._adjustZ(i,1);else if(b==="back")this._adjustZ(i,-1);else if(b==="front-most"){let q=this._selection.size>1&&this._selection.has(i)?Array.from(this._selection):[i];q.sort((j,H)=>{let U=parseInt(j.style.zIndex||"1",10),X=parseInt(H.style.zIndex||"1",10);return U-X});let F=this._highestZ();for(let j of q)F+=1,j.style.zIndex=String(F);this._queueSave("z-change")}else if(b==="back-most"){let q=this._selection.size>1&&this._selection.has(i)?Array.from(this._selection):[i];q.sort((H,U)=>{let X=parseInt(H.style.zIndex||"1",10);return parseInt(U.style.zIndex||"1",10)-X});let F=1/0;this.cardContainer.querySelectorAll(".card-wrapper").forEach(H=>{let U=parseInt(H.style.zIndex||"1",10);U<F&&(F=U)}),isFinite(F)||(F=1);let j=F;for(let H of q)j-=1,H.style.zIndex=String(Math.max(6,j));this._queueSave("z-change")}else if(b==="edit"){let q=this._extractCardConfig(i.firstElementChild)||{};await this._openSmartPicker("edit",q,async F=>{var U,X,te;let j=i.firstElementChild,H=await this._createCard(F);try{i.dataset.cfg=JSON.stringify(F),(U=this._hasCardModDeep)!=null&&U.call(this,F)?i.dataset.needsCardMod="true":delete i.dataset.needsCardMod}catch{}i.replaceChild(H,j),await zn();try{if(H.hass=this.hass,(X=H.requestUpdate)==null||X.call(H),H.updateComplete)try{await H.updateComplete}catch{}}catch{}try{this._rebuildOnce(H)}catch{}try{H.dispatchEvent(new Event("ll-rebuild",{bubbles:!0,composed:!0}))}catch{}(te=this._resizeContainer)==null||te.call(this);try{clearTimeout(this._saveTimer),await this._saveLayout(!0)}catch(re){console.warn("Save before reload failed",re)}window.location.reload()})}else if(b==="settings")try{($=this._openCardSettingsMenu)==null||$.call(this,i)}catch{}}});let l=document.createElement("div");l.className="shield";let g=document.createElement("div");g.classList.add("resize-handle"),this.editMode||(g.style.display="none"),g.title="Resize",g.innerHTML='<ha-icon icon="mdi:resize-bottom-right"></ha-icon>';try{let h=e._config||e.config;h&&typeof h=="object"&&Object.keys(h).length&&(i.dataset.cfg=JSON.stringify(h),this._hasCardModDeep(h)&&(i.dataset.needsCardMod="true"))}catch{}i.append(e,l,n,c,g);try{this._rebuildOnce(e)}catch{}this.__ddcTextLockDirty=!0;try{(m=this._scheduleTextResizeLockRefresh_)==null||m.call(this,!0)}catch{}return i.addEventListener("dblclick",h=>{if(this.editMode&&!(h.target.closest(".resize-handle")||h.target.closest(".delete-handle")||h.target.closest(".chip"))){h.stopPropagation();try{let b=i.querySelector('.chip button[data-act="edit"]');b&&b.click()}catch{}}}),i}_makePlaceholderAt(e=0,t=0,i=400,n=400){let o=document.createElement("div");o.classList.add("card-wrapper","ddc-placeholder"),o.dataset.placeholder="1",this.editMode&&o.classList.add("editing"),this._setCardPosition(o,e,t),o.style.width=`${i}px`,o.style.height=`${n}px`,o.style.zIndex=String(this._highestZ()+1);let c=document.createElement("div");c.className="ddc-placeholder-inner",c.setAttribute("aria-hidden","true");let l=document.createElement("div");l.className="ddc-hero";let g=this.heroImage;if(g){let b=document.createElement("img");b.src=g,b.alt="",l.appendChild(b)}let u=document.createElement("div");u.className="ddc-title",u.textContent="Drag & Drop Card";let m=document.createElement("div");m.className="ddc-sub",m.textContent="Hold me / double click me to enter Edit mode",l.append(u,m),c.appendChild(l),o.addEventListener("dblclick",b=>{b.stopPropagation(),this._toggleEditMode(!0)});let h=document.createElement("div");return h.className="shield",o.append(c,h),o}_processCardModOnce(){var t;if(this._cardModProcessed)return;this._cardModProcessed=!0,(((t=this.cardContainer)==null?void 0:t.querySelectorAll('[data-needs-card-mod="true"]'))||[]).forEach(i=>{let n=i.firstElementChild;if(!n)return;let o=n._config||n.config;if(o){if(o.type==="custom:mod-card")setTimeout(()=>{if(n.updateComplete)n.updateComplete.then(()=>{n.requestUpdate()});else if(n.setConfig)try{n.setConfig({...o})}catch{}},100);else if(o.card_mod&&n.setConfig)try{n.setConfig({...o})}catch{}}})}_showEmptyPlaceholder(){var n,o,c;if(this.cardContainer.querySelector(".ddc-placeholder"))return;let e=200,t=200,i=this._makePlaceholderAt(0,0,e,t);this.cardContainer.appendChild(i),this._resizeContainer();try{let l=(n=this.getBoundingClientRect)==null?void 0:n.call(this),g=(c=(o=this.cardContainer)==null?void 0:o.getBoundingClientRect)==null?void 0:c.call(o);if(l&&g){let u=(l.width-e)/2,m=(l.height-t)/2,h=u-(g.left-l.left),b=m-(g.top-l.top);(!Number.isFinite(h)||h<0)&&(h=0),(!Number.isFinite(b)||b<0)&&(b=0),this._setCardPosition(i,h,b)}}catch{}this._syncEmptyStateUI()}_hideEmptyPlaceholder(){this.cardContainer.querySelectorAll(".ddc-placeholder").forEach(e=>e.remove())}_ensurePlaceholderIfEmpty(){var t;this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)").length===0&&this._showEmptyPlaceholder(),(t=this._applyAutoScale)==null||t.call(this),this._syncEmptyStateUI()}_adjustZ(e,t){let n=parseInt(e.style.zIndex||"1",10)+t;n=Math.max(1,Math.min(9999,n)),e.style.zIndex=String(n),this._queueSave("z-change")}_highestZ(){let e=5;return this.cardContainer.querySelectorAll(".card-wrapper").forEach(t=>{let i=parseInt(t.style.zIndex||"0",10);i>e&&(e=i)}),e}_setCardPosition(e,t,i){let n=Math.round(t),o=Math.max(0,Math.round(i));e.style.transform=`translate3d(${n}px, ${o}px, 0)`,e.setAttribute("data-x",String(n)),e.setAttribute("data-y",String(o))}_clampYToCanvasTop_(e=0){let t=Number(e);return Number.isFinite(t)?Math.max(0,t):0}_shiftProposedCardsIntoCanvasTop_(e=[],t=!1,i=this.gridSize){let n=Array.isArray(e)?e:[];if(!n.length)return n;let o=n.reduce((g,u)=>{var m,h;return Math.min(g,Number((h=(m=u==null?void 0:u.rawY)!=null?m:u==null?void 0:u.snapY)!=null?h:0)||0)},1/0);if(!Number.isFinite(o)||o>=0)return n;let c=Math.abs(o),l=Math.max(1,Number(i||this.gridSize||1)||1);return n.forEach(g=>{g&&(g.rawY=this._clampYToCanvasTop_((Number(g.rawY)||0)+c),g.snapY=t?Math.round(g.rawY/l)*l:g.rawY)}),n}_computeDesignSize(){var l;let e=this.cardContainer;if(!e)return{w:1,h:1};if(this._isContainerFixed()){let{w:g,h:u}=this._resolveFixedSize();return{w:Math.max(1,g),h:Math.max(1,u)}}let t=0,i=0,n=Array.from(e.querySelectorAll(".card-wrapper"));if(!n.length){let g=e.getBoundingClientRect();return{w:Math.max(1,g.width||1),h:Math.max(1,g.height||1)}}for(let g of n){let u=parseFloat(g.getAttribute("data-x-raw")||g.getAttribute("data-x")||"0")||0,m=parseFloat(g.getAttribute("data-y-raw")||g.getAttribute("data-y")||"0")||0,h=parseFloat(g.style.width)||g.getBoundingClientRect().width||0,b=parseFloat(g.style.height)||g.getBoundingClientRect().height||0,y=u+h,_=m+b;y>t&&(t=y),_>i&&(i=_)}let o=Math.max(1,this.gridSize||10),c=((l=this._getOuterGridBufferPx_)==null?void 0:l.call(this))||0;return t=Math.ceil(t/o)*o,i=Math.ceil(i/o)*o,{w:Math.max(1,t+c),h:Math.max(1,i+c)}}_startScaleWatch(){if(!this.autoResizeCards||this.__scaleRAF)return;let e=()=>{var c,l,g;if(!this.autoResizeCards){this.__scaleRAF=null;return}let t=1;try{let u=(c=this.getBoundingClientRect)==null?void 0:c.call(this);t=Math.max(1,u&&u.width||this.offsetWidth||1)}catch{t=Math.max(1,this.offsetWidth||1)}let i=this.__lastScaleW||0,n=Math.abs(t-i);(!i||n>=20)&&(this.__lastScaleW=t,String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(l=this._applyAutoFillNoScale)==null||l.call(this):(g=this._applyAutoScale)==null||g.call(this)),this.__scaleRAF=requestAnimationFrame(e)};this.__scaleRAF=requestAnimationFrame(e)}_stopScaleWatch(){if(this.__scaleRAF){try{cancelAnimationFrame(this.__scaleRAF)}catch{}this.__scaleRAF=null}}_setToolbarExpanded_(e=!1,t={}){var i,n,o;try{let c=this.shadowRoot||this.renderRoot||this,l=(t==null?void 0:t.toolbar)||((i=c==null?void 0:c.querySelector)==null?void 0:i.call(c,".ddc-toolbar.streamlined.v2, .ddc-toolbar.streamlined.v3"));if(!l)return;let g=!!e;this.__toolbarExpanded=g,l.classList.toggle("is-collapsed",!g),l.setAttribute("data-toolbar-expanded",g?"1":"0");let u=this.toolbarToggleBtn||l.querySelector("#toolbarToggleBtn");if(u){let m=g?"Collapse toolbar":"Expand toolbar";u.setAttribute("aria-expanded",g?"true":"false"),u.setAttribute("aria-label",m),u.setAttribute("title",m),u.setAttribute("data-tooltip",m);let h=u.querySelector("ha-icon");h&&h.setAttribute("icon",g?"mdi:chevron-up":"mdi:chevron-down")}(n=this._refreshToolbarOpenHeight_)==null||n.call(this),(o=this._syncTabsWidth_)==null||o.call(this)}catch{}}_refreshToolbarOpenHeight_(){var e,t;try{let i=this.shadowRoot||this.renderRoot||this,n=(e=i==null?void 0:i.querySelector)==null?void 0:e.call(i,".ddc-toolbar.streamlined.v2, .ddc-toolbar.streamlined.v3"),o=((t=i==null?void 0:i.querySelector)==null?void 0:t.call(i,".ddc-root"))||null;if(!n){o&&o.style.setProperty("--ddc-toolbar-height","0px"),!this.autoResizeCards&&this.cardContainer&&(this.cardContainer.style.marginTop="");return}requestAnimationFrame(()=>{try{let l=(n.classList.contains("is-open")||n.hasAttribute("data-force-open"))&&(n.scrollHeight||n.offsetHeight)||0;n.style.setProperty("--open-h",`${l}px`),o&&o.style.setProperty("--ddc-toolbar-height",`${l}px`),!this.autoResizeCards&&this.cardContainer&&(this.cardContainer.style.marginTop=l>0?`${l}px`:"")}catch{}})}catch{}}_ensureStreamlinedToolbarObserver_(){var e,t,i;try{let n=this.shadowRoot||this.renderRoot||this,o=(e=n==null?void 0:n.querySelector)==null?void 0:e.call(n,".ddc-toolbar.streamlined.v2, .ddc-toolbar.streamlined.v3");if(!o){try{(t=this.__streamlinedToolbarRO)==null||t.disconnect()}catch{}this.__streamlinedToolbarRO=null,this.__streamlinedToolbarROTarget=null;return}if(this.__streamlinedToolbarRO&&this.__streamlinedToolbarROTarget===o)return;try{(i=this.__streamlinedToolbarRO)==null||i.disconnect()}catch{}this.__streamlinedToolbarRO=new ResizeObserver(()=>{var c;(c=this._refreshToolbarOpenHeight_)==null||c.call(this)}),this.__streamlinedToolbarRO.observe(o),this.__streamlinedToolbarROTarget=o}catch{}}_scheduleTextResizeLockRefresh_(e=!1){e&&(this.__ddcTextLockDirty=!0),!this.__ddcTextLockRAF&&(this.__ddcTextLockRAF=requestAnimationFrame(()=>{this.__ddcTextLockRAF=null,this._applyTextResizeLock_(e)}))}_clearTextResizeLock_(){var t,i;if(this.__ddcTextLockObserver){try{this.__ddcTextLockObserver.disconnect()}catch{}this.__ddcTextLockObserver=null}let e=this.__ddcTextLockTouched;if(e){for(let n of Array.from(e))try{(i=(t=n==null?void 0:n.style)==null?void 0:t.removeProperty)==null||i.call(t,"font-size")}catch{}e.clear()}this.__ddcTextLockActive=!1,this.__ddcTextLockScale=1,this.__ddcTextLockDirty=!1}_ensureTextResizeObserver_(){var l;let e=this.cardContainer,t=String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase(),i=!!this.doNotResizeText||t==="dynamic"&&((l=this._isMobileOptimizeActive_)==null?void 0:l.call(this));if(!e||!i){if(this.__ddcTextLockObserver){try{this.__ddcTextLockObserver.disconnect()}catch{}this.__ddcTextLockObserver=null}return}if(this.__ddcTextLockObserver)try{this.__ddcTextLockObserver.disconnect()}catch{}let n=new MutationObserver(()=>{var g;this.__ddcTextLockDirty=!0,(g=this._scheduleTextResizeLockRefresh_)==null||g.call(this)}),o=new Set,c=g=>{if(!g||o.has(g))return;o.add(g);try{n.observe(g,{childList:!0,subtree:!0,characterData:!0})}catch{}let u=document.createTreeWalker(g,NodeFilter.SHOW_ELEMENT),m=g.nodeType===Node.ELEMENT_NODE?g:u.nextNode();for(;m;)m.shadowRoot&&c(m.shadowRoot),m=u.nextNode()};c(e),Array.from(e.querySelectorAll(".card-wrapper > :first-child")).forEach(g=>c(g)),this.__ddcTextLockObserver=n}_isTextResizeTarget_(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;let t=(e.tagName||"").toLowerCase();return!t||new Set(["style","script","ha-icon","iron-icon","svg","path","img","picture","video","canvas","slot"]).has(t)?!1:["button","input","textarea","select","option","label","legend","summary","a","small","strong","em","b","i"].includes(t)||e.shadowRoot||t.includes("-")?!0:Array.from(e.childNodes||[]).some(n=>n.nodeType===Node.TEXT_NODE&&String(n.textContent||"").trim())}_collectTextResizeTargets_(e,t=[]){if(!e)return t;let i=c=>{this._isTextResizeTarget_(c)&&(t.includes(c)||t.push(c))};e.nodeType===Node.ELEMENT_NODE&&i(e);let n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT),o=n.nextNode();for(;o;)i(o),o.shadowRoot&&this._collectTextResizeTargets_(o.shadowRoot,t),o=n.nextNode();return t}_applyTextResizeLock_(e=!1){var b,y,_,A,T;let t=this.cardContainer,i=String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase(),n=i==="dynamic"||i==="auto",o=n&&((b=this._isMobileOptimizeActive_)==null?void 0:b.call(this)),c=n&&(!!this.doNotResizeText||o),l=Math.max(1e-4,Number(this.__pointerScaleX||this.__pointerScaleY||1)||1);if(!c){(this.__ddcTextLockActive||this.__ddcTextLockDirty||e)&&this._clearTextResizeLock_();return}if(!t||!e&&!this.__ddcTextLockDirty&&this.__ddcTextLockActive&&Math.abs((this.__ddcTextLockScale||1)-l)<.001)return;this.__ddcTextLockBase||(this.__ddcTextLockBase=new WeakMap),this.__ddcTextLockTouched||(this.__ddcTextLockTouched=new Set),(y=this._ensureTextResizeObserver_)==null||y.call(this);let g=this.doNotResizeText?1:Math.max(l,Math.min(1,((_=this._getMobileTextAssistScale_)==null?void 0:_.call(this))||1)),u=this.doNotResizeText?1/l:Math.max(1,Math.min(1/l,g/l)),m=new Set,h=Array.from(t.querySelectorAll(".card-wrapper > :first-child"));for(let E of h){let M=this._collectTextResizeTargets_(E,[]);for(let O of M){if(!O||m.has(O))continue;if(m.add(O),!this.__ddcTextLockBase.has(O)){let $=parseFloat(getComputedStyle(O).fontSize||"0");if(!Number.isFinite($)||$<=0)continue;this.__ddcTextLockBase.set(O,$)}let C=this.__ddcTextLockBase.get(O);!Number.isFinite(C)||C<=0||(O.style.setProperty("font-size",`${Math.max(1,C*u).toFixed(3)}px`,"important"),this.__ddcTextLockTouched.add(O))}}for(let E of Array.from(this.__ddcTextLockTouched))if(!(E!=null&&E.isConnected)||!m.has(E)){try{(T=(A=E==null?void 0:E.style)==null?void 0:A.removeProperty)==null||T.call(A,"font-size")}catch{}this.__ddcTextLockTouched.delete(E)}this.__ddcTextLockActive=!0,this.__ddcTextLockScale=l,this.__ddcTextLockDirty=!1}_applyAutoScale(){var b,y,_,A,T,E,M,O,C,$,q,F,j,H,U,X,te,re,le,Le,me,de,Ce,ue,Ae,ye,Se,B,p,x,S,z,N,W,G,V,J,Z,he,_e,ke,Ee,Fe;let e="dynamic";try{if(e=String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase(),e==="auto"){(b=this._applyAutoFillNoScale)==null||b.call(this),this.removeAttribute("ddc-fixed-ui"),(_=(y=this.style)==null?void 0:y.removeProperty)==null||_.call(y,"--ddc-ui-width");return}}catch{}let t=this.cardContainer;if(!t)return;try{(this.autoResizeCards||e==="auto"||(A=this._getViewportPreviewPreset_)!=null&&A.call(this))&&typeof this._ensureScaleWrapper=="function"&&this._ensureScaleWrapper()}catch{}if(!this.autoResizeCards){let je=typeof this._computeDesignSize=="function"?this._computeDesignSize():{w:t.offsetWidth||1,h:t.offsetHeight||1},et=((T=this._getEffectivePreviewHeight_)==null?void 0:T.call(this))||0,ct=et>0;if(e==="dynamic"){try{(E=this._computeHaSidebarGutters_)==null||E.call(this)}catch{}this.removeAttribute("ddc-fixed-ui"),(O=(M=this.style)==null?void 0:M.removeProperty)==null||O.call(M,"--ddc-ui-width")}else this.removeAttribute("ddc-fixed-ui"),($=(C=this.style)==null?void 0:C.removeProperty)==null||$.call(C,"--ddc-ui-width");let Pe=`${je.w}px`,He=`${je.h}px`,ht=t.style.width===Pe,tt=t.style.height===He,_t=t.style.transform==="scale(1)";if(!(ht&&tt&&_t)&&(t.style.width=Pe,t.style.height=He,t.style.transform="scale(1)",t.style.transformOrigin="top left",t.style.position="absolute",t.style.top="0",t.style.left="0",this.__pointerScaleX=1,this.__pointerScaleY=1,this.__scaleOuter)){let Ct=this.parentElement&&((F=(q=this.parentElement).getBoundingClientRect)==null?void 0:F.call(q).width)||this.offsetParent&&((H=(j=this.offsetParent).getBoundingClientRect)==null?void 0:H.call(j).width)||this.getBoundingClientRect&&this.getBoundingClientRect().width||this.offsetWidth||je.w,St=((U=this._getEffectivePreviewWidth_)==null?void 0:U.call(this,Ct))||Ct,xt=`${Math.max(1,St)}px`,Mt=`${Math.max(1,ct?et:je.h)}px`;this.__scaleOuter.style.width!==xt&&(this.__scaleOuter.style.width=xt),this.__scaleOuter.style.height!==Mt&&(this.__scaleOuter.style.height=Mt),this.__scaleOuter.style.overflowX=je.w>St?"auto":"hidden",this.__scaleOuter.style.overflowY=ct?"auto":"hidden",this.__scaleOuter.style.webkitOverflowScrolling=ct?"touch":"",this.__scaleOuter.style.overscrollBehavior=ct?"contain":"",this.__scaleOuter.style.marginInline=(X=this._getViewportPreviewPreset_)!=null&&X.call(this)?"auto":"",this.__scaleOuter.style.maxWidth=(te=this._getViewportPreviewPreset_)!=null&&te.call(this)?"100%":"",(re=this._applyPreviewDeviceFrame_)==null||re.call(this,St,ct?et:je.h)}try{(le=this._syncTabsWidth_)==null||le.call(this)}catch{}try{(Le=this._scheduleTextResizeLockRefresh_)==null||Le.call(this)}catch{}return}this.removeAttribute("ddc-fixed-ui"),(de=(me=this.style)==null?void 0:me.removeProperty)==null||de.call(me,"--ddc-ui-width");let i=typeof this._computeDesignSize=="function"?this._computeDesignSize():{w:t.offsetWidth||1,h:t.offsetHeight||1},n=this.parentElement&&((ue=(Ce=this.parentElement).getBoundingClientRect)==null?void 0:ue.call(Ce).width)||this.offsetParent&&((ye=(Ae=this.offsetParent).getBoundingClientRect)==null?void 0:ye.call(Ae).width)||this.getBoundingClientRect&&this.getBoundingClientRect().width||this.offsetWidth||i.w,o=((Se=this._getEffectivePreviewHeight_)==null?void 0:Se.call(this))||0,c=o>0,l=Math.max(1,((B=this._getEffectivePreviewWidth_)==null?void 0:B.call(this,n))||n);if((p=this._shouldUseUnscaledPreviewCanvas_)==null?void 0:p.call(this)){this.__scaleOuter&&(this.__scaleOuter.style.width=`${l}px`,this.__scaleOuter.style.height=`${Math.max(1,c?o:i.h)}px`,this.__scaleOuter.style.overflowX="auto",this.__scaleOuter.style.overflowY=c?"auto":"hidden",this.__scaleOuter.style.webkitOverflowScrolling="touch",this.__scaleOuter.style.overscrollBehavior=c?"contain":"",this.__scaleOuter.style.marginInline="auto",this.__scaleOuter.style.maxWidth="100%",(x=this._applyPreviewDeviceFrame_)==null||x.call(this,l,c?o:i.h)),t.style.width=`${i.w}px`,t.style.height=`${i.h}px`,t.style.transform="scale(1)",t.style.transformOrigin="top left",t.style.position="absolute",t.style.top="0",t.style.left="0",this.__pointerScaleX=1,this.__pointerScaleY=1;try{(S=this._syncTabsWidth_)==null||S.call(this)}catch{}try{(z=this._layoutYtBackground_)==null||z.call(this)}catch{}try{(N=this._scheduleTextResizeLockRefresh_)==null||N.call(this)}catch{}try{(W=this._requestGridButtonsUpdateSoon)==null||W.call(this)}catch{}return}let u=l/Math.max(1,i.w),m=(G=this._isMobileOptimizeActive_)!=null&&G.call(this)?(V=this._getMobileScalePlan_)==null?void 0:V.call(this,i.w,u):null,h=Math.max(1e-4,Number((m==null?void 0:m.scale)||u)||u||1);this.__scaleOuter&&(this.__scaleOuter.style.width=`${l}px`,this.__scaleOuter.style.height=`${Math.max(1,c?o:i.h*h)}px`,this.__scaleOuter.style.overflowX=m!=null&&m.allowPanX?"auto":"hidden",this.__scaleOuter.style.overflowY=c?"auto":"hidden",this.__scaleOuter.style.webkitOverflowScrolling=c||m!=null&&m.allowPanX?"touch":"",this.__scaleOuter.style.overscrollBehavior=c?"contain":"",this.__scaleOuter.style.marginInline=(J=this._getViewportPreviewPreset_)!=null&&J.call(this)?"auto":"",this.__scaleOuter.style.maxWidth=(Z=this._getViewportPreviewPreset_)!=null&&Z.call(this)?"100%":"",(he=this._applyPreviewDeviceFrame_)==null||he.call(this,l,c?o:i.h*h)),t.style.width=`${i.w}px`,t.style.height=`${i.h}px`,t.style.transform=`scale(${h})`,t.style.transformOrigin="top left",t.style.position="absolute",t.style.top="0",t.style.left="0",this.__pointerScaleX=h||1,this.__pointerScaleY=h||1;try{(_e=this._syncTabsWidth_)==null||_e.call(this)}catch{}try{(ke=this._layoutYtBackground_)==null||ke.call(this)}catch{}try{(Ee=this._scheduleTextResizeLockRefresh_)==null||Ee.call(this)}catch{}try{(Fe=this._requestGridButtonsUpdateSoon)==null||Fe.call(this)}catch{}}_applyAutoFillNoScale(){var e,t,i,n,o,c,l,g,u,m,h,b,y,_,A,T,E;if(!this.__applyingAutoFill){this.__applyingAutoFill=!0;try{try{(e=this._ensureScaleWrapper)==null||e.call(this)}catch{}let M=this.__scaleOuter||((i=(t=this.shadowRoot)==null?void 0:t.querySelector)==null?void 0:i.call(t,".ddc-scale-outer"))||this,O=this.cardContainer||((o=(n=this.shadowRoot)==null?void 0:n.querySelector)==null?void 0:o.call(n,"#cardContainer"));if(!M||!O)return;let C=((c=this._getEffectivePreviewHeight_)==null?void 0:c.call(this))||0,$=C>0,q=this.parentElement&&((g=(l=this.parentElement).getBoundingClientRect)==null?void 0:g.call(l).width)||this.offsetParent&&((m=(u=this.offsetParent).getBoundingClientRect)==null?void 0:m.call(u).width)||this.getBoundingClientRect&&this.getBoundingClientRect().width||this.offsetWidth||((h=this.cardContainer)==null?void 0:h.offsetWidth)||1,F=((b=this._getEffectivePreviewWidth_)==null?void 0:b.call(this,q))||q;M.style.overflow="hidden",M.style.overflowX="auto",M.style.overflowY=$?"auto":"hidden",M.style.width=$?`${Math.max(1,F)}px`:"100%",M.style.marginInline=$?"auto":"",M.style.maxWidth=$?"100%":"";let j=M.getBoundingClientRect(),H=Math.max(1,Math.round(j.width||0)),U=Math.max(1,Math.round(j.height||0));if(U<150){let B=Math.max(0,Math.round(j.top||0)),p=Math.max(1,window.innerHeight||document.documentElement.clientHeight||0),x=Math.max(1,p-B-8);Math.abs(x-U)>4&&(M.style.height=x+"px",j=M.getBoundingClientRect(),H=Math.max(1,Math.round(j.width||0)),U=Math.max(1,Math.round(j.height||0)))}let X=0,te=0,re=Array.from(O.querySelectorAll(".card-wrapper"));if(re.length)for(let B of re){let p=parseFloat(B.getAttribute("data-x-raw")||B.getAttribute("data-x")||"0")||0,x=parseFloat(B.getAttribute("data-y-raw")||B.getAttribute("data-y")||"0")||0,S=parseFloat(B.style.width)||B.getBoundingClientRect().width||0,z=parseFloat(B.style.height)||B.getBoundingClientRect().height||0,N=p+S,W=x+z;N>X&&(X=N),W>te&&(te=W)}else X=O.scrollWidth||O.offsetWidth||H,te=O.scrollHeight||O.offsetHeight||U;let le=Number(this.gridSize||1)||1,Le=((y=this._getOuterGridBufferPx_)==null?void 0:y.call(this))||0,me=Math.max(1,Math.round(Math.ceil(X/le)*le)+Le),de=Math.max(1,Math.round(Math.ceil(te/le)*le)+Le),Ce=$?Math.max(1,F):H,ue=$?Math.max(1,C):U,Ae=Ce>me?Ce:me,ye=ue>de?ue:de;O.style.transform="none",O.style.transformOrigin="left top",this.__pointerScaleX=1,this.__pointerScaleY=1,O.style.width=`${Ae}px`,O.style.height=`${ye}px`,M&&($?(M.style.height=`${C}px`,M.style.webkitOverflowScrolling="touch",M.style.overscrollBehavior="contain"):(M.style.height=`${ye}px`,M.style.webkitOverflowScrolling="",M.style.overscrollBehavior=""),(_=this._applyPreviewDeviceFrame_)==null||_.call(this,$?F:0,$?C:0)),O.style.position=O.style.position||"absolute",O.style.top="0",O.style.left="0";let Se=this.tabsBar;Se&&this.tabsPosition!=="left"&&(Se.style.width="100%",Se.style.maxWidth="100%");try{(A=this._scheduleTextResizeLockRefresh_)==null||A.call(this)}catch{}}finally{try{(T=this._layoutYtBackground_)==null||T.call(this)}catch{}try{(E=this._requestGridButtonsUpdateSoon)==null||E.call(this)}catch{}requestAnimationFrame(()=>{this.__applyingAutoFill=!1})}}}_resizeContainer(){var l,g,u,m;let e=this.cardContainer;if(!e||this._isContainerFixed())return;let t=Array.from(e.querySelectorAll(".card-wrapper")),i=0,n=0;t.forEach(h=>{let b=parseFloat(h.getAttribute("data-x-raw")||h.getAttribute("data-x")||"0")||0,y=parseFloat(h.getAttribute("data-y-raw")||h.getAttribute("data-y")||"0")||0,_=parseFloat(h.style.width)||h.getBoundingClientRect().width||0,A=parseFloat(h.style.height)||h.getBoundingClientRect().height||0,T=b+_,E=y+A;i=Math.max(i,T),n=Math.max(n,E)});let o=Math.max(1,Number(this.gridSize||1)||1),c=((l=this._getOuterGridBufferPx_)==null?void 0:l.call(this))||0;e.style.width=`${Math.max(100,Math.ceil(i/o)*o+c)}px`,e.style.height=`${Math.max(100,Math.ceil(n/o)*o+c)}px`;try{(g=this._syncTabsWidth_)==null||g.call(this)}catch{}try{(u=this._requestGridButtonsUpdateSoon)==null||u.call(this)}catch{}try{(m=this._renderConnectors_)==null||m.call(this)}catch{}}_pushCardsOutOfTheWay(e,t,i,n,o){if(!this.__collisionOriginals)return;let c=new Set(e.map(E=>E.el)),l=Array.from(this.cardContainer.querySelectorAll(".card-wrapper")).filter(E=>!E.dataset.placeholder),g=this._isContainerFixed(),{w:u,h:m}=this._getContainerSize();for(let E of l){if(c.has(E))continue;let M=this.__collisionOriginals.get(E);if(M){E.setAttribute("data-x-raw",String(M.x)),E.setAttribute("data-y-raw",String(M.y));let O=n?Math.round(M.x/o)*o:M.x,C=n?Math.round(M.y/o)*o:M.y;this._setCardPosition(E,O,C)}}let h=e.map(E=>({x:E.snapX,y:E.snapY,w:E.w,h:E.h})),b=new Map,y=new Map;for(let E of l){let M=parseFloat(E.style.width)||E.getBoundingClientRect().width,O=parseFloat(E.style.height)||E.getBoundingClientRect().height;y.set(E,{w:M,h:O})}let _=t>0?1:t<0?-1:0,A=i>0?1:i<0?-1:0,T=Math.abs(t)>=Math.abs(i);for(let E of l){if(c.has(E))continue;let M=this.__collisionOriginals.get(E);if(!M)continue;let{x:O,y:C}=M,{w:$,h:q}=y.get(E),F=!1;for(let j of h)if(this._rectsOverlap({x:j.x,y:j.y,w:j.w,h:j.h},{x:O,y:C,w:$,h:q})){F=!0,T&&_!==0?O=_>0?j.x+j.w:j.x-$:!T&&A!==0?C=A>0?j.y+j.h:j.y-q:O=j.x+j.w;break}if(F){let j=0,H=T?_!==0?_*o:o:0,U=T?0:A!==0?A*o:o;for(;j<100;){let X={x:O,y:C,w:$,h:q},te=!1;for(let re of h)if(this._rectsOverlap(X,re)){te=!0;break}if(!te){for(let[,re]of b)if(this._rectsOverlap(X,re)){te=!0;break}}if(!te&&g&&(O<0||C<0||O+$>u||C+q>m)&&(te=!0),!te)break;O+=H,C+=U,j++}g?(O=Math.max(0,Math.min(O,Math.max(0,u-$))),C=Math.max(0,Math.min(C,Math.max(0,m-q)))):C=this._clampYToCanvasTop_(C)}b.set(E,{x:O,y:C,w:$,h:q}),h.push({x:O,y:C,w:$,h:q})}for(let[E,M]of b){M.y=this._clampYToCanvasTop_(M.y),E.setAttribute("data-x-raw",String(M.x)),E.setAttribute("data-y-raw",String(M.y));let O=n?Math.round(M.x/o)*o:M.x,C=n?Math.round(M.y/o)*o:M.y;this._setCardPosition(E,O,C)}}_rectFor(e,t=null,i=null,n=null,o=null){let c=t!=null?t:parseFloat(e.getAttribute("data-x"))||0,l=i!=null?i:parseFloat(e.getAttribute("data-y"))||0,g=n!=null?n:parseFloat(e.style.width)||e.getBoundingClientRect().width||0,u=o!=null?o:parseFloat(e.style.height)||e.getBoundingClientRect().height||0;return{x:c,y:l,w:g,h:u,el:e}}_rectsOverlap(e,t,i=.5){return!(e.x+e.w<=t.x+i||t.x+t.w<=e.x+i||e.y+e.h<=t.y+i||t.y+t.h<=e.y+i)}_anyCollisionFor(e,t){let i=Array.from(this.cardContainer.querySelectorAll(".card-wrapper")).filter(o=>!t.has(o)&&!o.dataset.placeholder);if(!i.length)return!1;let n=i.map(o=>this._rectFor(o));for(let o of e)for(let c of n)if(this._rectsOverlap(o,c))return!0;return!1}_extractCardConfig(e){var n;if(!e)return{};try{let o=e.closest?e.closest(".card-wrapper"):null,c=(n=o==null?void 0:o.dataset)==null?void 0:n.cfg;if(c){let l=JSON.parse(c);if(l&&typeof l=="object")return l}}catch{}let t=e.__ddcSourceConfig;if(t&&typeof t=="object"&&Object.keys(t).length)try{return typeof structuredClone=="function"?structuredClone(t):JSON.parse(JSON.stringify(t))}catch{return{...t}}let i=e._config||e.config;if(i&&typeof i=="object"&&Object.keys(i).length)try{return typeof structuredClone=="function"?structuredClone(i):JSON.parse(JSON.stringify(i))}catch{return{...i}}return{}}async _openCardManager(){await this._openSmartPicker("add")}_catalog(){return[{id:"favorites",name:"Favorites",items:[]},{id:"ddc",name:"Drag and drop cards",hint:"Cards in this section are reserved for components that only make sense inside Drag & Drop Card. Connector lines are now drawn directly from the edit toolbar.",items:this._dragAndDropCardsCatalog()},{id:"recent",name:"Recent",items:[]},{id:"basics",name:"Basics",items:[{type:"entities",name:"Entities",icon:"mdi:format-list-bulleted"},{type:"entity",name:"Entity",icon:"mdi:checkbox-blank-circle-outline"},{type:"tile",name:"Tile",icon:"mdi:view-grid-outline"},{type:"button",name:"Button",icon:"mdi:gesture-tap-button"},{type:"glance",name:"Glance",icon:"mdi:eye-outline"},{type:"markdown",name:"Markdown",icon:"mdi:language-markdown"},{type:"custom_card",name:"Custom Card",icon:"mdi:puzzle-outline"}]},{id:"sensors",name:"Sensors",items:[{type:"sensor",name:"Sensor",icon:"mdi:antenna"},{type:"gauge",name:"Gauge",icon:"mdi:gauge"},{type:"history-graph",name:"History graph",icon:"mdi:chart-line"},{type:"statistics-graph",name:"Statistics graph",icon:"mdi:chart-bar"}]},{id:"visual",name:"Visual",items:[{type:"picture-entity",name:"Picture entity",icon:"mdi:image-outline"},{type:"picture-glance",name:"Picture glance",icon:"mdi:image-multiple-outline"},{type:"weather-forecast",name:"Weather",icon:"mdi:weather-partly-cloudy"},{type:"map",name:"Map",icon:"mdi:map"},{type:"iframe",name:"iFrame",icon:"mdi:application"}]},{id:"controls",name:"Controls",items:[{type:"light",name:"Light",icon:"mdi:lightbulb-outline"},{type:"thermostat",name:"Thermostat",icon:"mdi:thermostat"},{type:"media-control",name:"Media control",icon:"mdi:play-circle-outline"},{type:"alarm-panel",name:"Alarm panel",icon:"mdi:shield-home-outline"},{type:"area",name:"Area",icon:"mdi:map-marker"}]}]}_dragAndDropCardsCatalog(){return[{type:"custom:ddc-html-card",name:"HTML / Web card",icon:"mdi:language-html5",description:"Build a custom card with your own HTML, CSS and JavaScript inside Drag & Drop Card."},{type:"custom:ddc-table-card",name:"Table card",icon:"mdi:table-large",description:"Build a visual table with text, icons, entity states, badges and buttons directly inside Drag & Drop Card."},{type:"custom:ddc-icon-card",name:"Icon card",icon:"mdi:star-four-points-circle",description:"Place a pure icon design object with state-based color, glow, pulse and optional click action."},{type:"custom:ddc-text-card",name:"Text card",icon:"mdi:format-text",description:"Create a pure typography object with font controls, semantic text styles and editorial layout options."}]}async _getEditorElementForType(e,t){try{console.info("[ddc:editor] Requesting editor element",{type:e,cfg:t})}catch{}let i=await this._helpersPromise||await window.loadCardHelpers();if(e==="custom:ddc-html-card")return document.createElement("ddc-html-card-editor");if(e==="custom:ddc-line-card")return document.createElement("ddc-line-card-editor");if(e==="custom:ddc-table-card")return document.createElement("ddc-table-card-editor");if(e==="custom:ddc-icon-card")return document.createElement("ddc-icon-card-editor");if(e==="custom:ddc-text-card")return document.createElement("ddc-text-card-editor");try{typeof e=="string"&&e&&!e.startsWith("custom:")&&e!=="custom_card"&&await this._ensureCardModuleLoaded(e,t)}catch{}if(typeof e=="string"&&e==="entity")try{return await this._getEntityCardEditor(t||{})}catch(u){console.warn("[ddc:editor] Custom entity editor failed",u)}let n=async()=>{try{if(i.getCardElementClass)return await i.getCardElementClass(e);let u;if(t&&typeof t=="object")u={type:e,...t};else{let h;try{h=await this._getStubConfigForType(e)}catch{}u=h&&typeof h=="object"?{...h}:{type:e}}let m=i.createCardElement(u);return(m==null?void 0:m.constructor)||null}catch{return null}};try{let u=await n();if(u){if(typeof u.getConfigElement=="function"){let m=await u.getConfigElement();if(m){try{console.info("[ddc:editor] Found static class editor",{type:e})}catch{}return m}}if(typeof u.getConfigForm=="function")try{let m=await u.getConfigForm();if(m&&m.schema){try{await customElements.whenDefined("ha-form")}catch{}let h=document.createElement("ha-form");h.hass=this.hass,h.schema=Array.isArray(m.schema)?m.schema.map(b=>({...b})):m.schema,typeof m.computeLabel=="function"&&(h.computeLabel=m.computeLabel.bind(u)),typeof m.computeHelper=="function"&&(h.computeHelper=m.computeHelper.bind(u)),h.data={...t},h.addEventListener("value-changed",b=>{});try{console.info("[ddc:editor] Generated form editor via getConfigForm",{type:e})}catch{}return h}}catch{}}}catch{}if(typeof e=="string"&&(e.startsWith("custom:")||e==="custom_card"))try{let u;try{u=await this._getStubConfigForType(e)}catch{}let m=u&&typeof u=="object"?{...u}:{type:e},h=i.createCardElement(m);if(h.hass=this.hass,typeof h.getConfigElement=="function"){let b=await h.getConfigElement();if(b){try{console.info("[ddc:editor] Found instance-level editor",{type:e})}catch{}return b}}}catch{}let o=String(e).replace(/^custom:/,""),l=(Array.isArray(window.customCards)?window.customCards:[]).find(u=>(u==null?void 0:u.type)===o||(u==null?void 0:u.type)===e||(u==null?void 0:u.type)===`custom:${o}`),g=[];l!=null&&l.editor&&g.push(l.editor),g.push(`${o}-editor`,`${o}-config-editor`),o&&typeof o=="string"&&g.push(`hui-${o}-card-editor`);for(let u of g)if(!(!u||typeof u!="string"))for(let m of[0,100,300,700,1500,3e3])try{if(customElements.get(u)||await Promise.race([customElements.whenDefined(u),new Promise(h=>setTimeout(h,m))]),customElements.get(u)){try{console.info("[ddc:editor] Found editor by tag",{type:e,tag:u})}catch{}return document.createElement(u)}}catch{}return null}async _ensureCardModuleLoaded(e,t){try{let i=await this._helpersPromise||await window.loadCardHelpers(),n;if(t&&typeof t=="object")n={type:e,...t};else{let l;try{l=await this._getStubConfigForType(e)}catch{}n=l&&typeof l=="object"?{...l}:{type:e}}let o=i.createCardElement(n);o.hass=this.hass;let c=document.createElement("div");c.style.cssText="position:fixed;left:-9999px;top:-9999px;opacity:0;pointer-events:none;",c.appendChild(o),document.body.appendChild(c),await new Promise(l=>requestAnimationFrame(l)),c.remove();try{console.info("[ddc:editor] Warmed card module",{type:e})}catch{}}catch{}}_ensureOverlayZFix(){if(document.querySelector("style[data-ddc-overlay-fix]"))return;let e=document.createElement("style");e.setAttribute("data-ddc-overlay-fix",""),e.textContent=`
      /* Make common HA overlays float above our modal */
      vaadin-combo-box-overlay,
      vaadin-overlay-backdrop,
      mwc-menu-surface,
      .mdc-menu-surface--open {
        z-index: 1000000 !important;
      }
    `,document.head.appendChild(e)}_customCardsFromRegistry(){return(Array.isArray(window.customCards)?window.customCards:[]).map(t=>{var i;return{type:(i=t==null?void 0:t.type)!=null&&i.startsWith("custom:")?t.type:`custom:${t==null?void 0:t.type}`,name:(t==null?void 0:t.name)||(t==null?void 0:t.type)||"Custom card",icon:"mdi:puzzle-outline",description:(t==null?void 0:t.description)||"",editorTag:(t==null?void 0:t.editor)||null}}).filter(t=>typeof t.type=="string"&&t.type.startsWith("custom:"))}_schemaForType(e){let t=n=>n,i=[];return{entities:t({fields:[{key:"entities",type:"entities",multi:!0,domains:i,label:"Entities"}]}),entity:t({fields:[{key:"entity",type:"entity",multi:!1,domains:i,label:"Entity"}]}),sensor:t({fields:[{key:"entity",type:"entity",multi:!1,domains:["sensor"],label:"Sensor"},{key:"name",type:"text",label:"Name (optional)"}]}),gauge:t({fields:[{key:"entity",type:"entity",multi:!1,domains:["sensor","number","input_number"],label:"Numeric entity"},{key:"min",type:"number",label:"Min",step:"any"},{key:"max",type:"number",label:"Max",step:"any"}]}),"history-graph":t({fields:[{key:"entities",type:"entities",multi:!0,domains:i,label:"Entities (multiselect)"},{key:"hours_to_show",type:"number",label:"Hours to show",default:24}]}),"statistics-graph":t({fields:[{key:"entities",type:"entities",multi:!0,domains:["sensor","number","input_number"],label:"Entities (multiselect)"},{key:"chart_type",type:"select",options:["line","bar"],label:"Chart type",default:"line"},{key:"statistic",type:"select",options:["mean","min","max","sum"],label:"Statistic",default:"mean"}]}),glance:t({fields:[{key:"entities",type:"entities",multi:!0,domains:i,label:"Entities (multiselect)"}]}),"picture-glance":t({fields:[{key:"entities",type:"entities",multi:!0,domains:i,label:"Entities (multiselect)"},{key:"image",type:"text",label:"Image URL (optional)"}]}),"picture-entity":t({fields:[{key:"entity",type:"entity",multi:!1,domains:i,label:"Entity"},{key:"image",type:"text",label:"Image URL (optional)"}]}),"weather-forecast":t({fields:[{key:"entity",type:"entity",multi:!1,domains:["weather"],label:"Weather entity"}]}),map:t({fields:[{key:"entities",type:"entities",multi:!0,domains:["device_tracker","person"],label:"Trackers / people (multiselect)"},{key:"default_zoom",type:"number",label:"Default zoom",default:14}]}),"media-control":t({fields:[{key:"entity",type:"entity",multi:!1,domains:["media_player"],label:"Media player"}]}),light:t({fields:[{key:"entity",type:"entity",multi:!1,domains:["light"],label:"Light"}]}),thermostat:t({fields:[{key:"entity",type:"entity",multi:!1,domains:["climate"],label:"Climate"}]}),"alarm-panel":t({fields:[{key:"entity",type:"entity",multi:!1,domains:["alarm_control_panel"],label:"Alarm"}]}),markdown:t({fields:[{key:"content",type:"textarea",label:"Markdown"}]}),tile:t({fields:[{key:"entity",type:"entity",multi:!1,domains:i,label:"Entity"}]}),button:t({fields:[{key:"entity",type:"entity",multi:!1,domains:i,label:"Entity (optional)"}]}),iframe:t({fields:[{key:"url",type:"text",label:"URL"}]}),area:t({fields:[{key:"area",type:"text",label:"Area ID"}]})}[e]||{fields:[]}}async _getEntityCardEditor(e={}){let t=document.createElement("div");t.style.display="flex",t.style.flexDirection="column",t.style.gap="12px",t.style.padding="8px 0",t.style.overflow="visible",t._cfg={type:"entity",...e||{}};let i=()=>{let M={type:"entity"};["entity","name","icon","attribute","unit","state_color","theme"].forEach(O=>{let C=t._cfg[O];C!==void 0&&C!==""&&C!==null&&(M[O]=C)}),t.dispatchEvent(new CustomEvent("config-changed",{detail:{config:M}}))},n=document.createElement("div");n.style.display="flex",n.style.flexDirection="column",n.style.gap="4px";let o=document.createElement("span");o.textContent="Entity",o.style.fontSize=".8rem",o.style.opacity="0.8";let c=document.createElement("ha-entity-picker");c.setAttribute("label","Select entity"),c.addEventListener("value-changed",M=>{var C,$,q;M.stopPropagation();let O=(q=M.detail&&((C=M.detail.value)!=null?C:M.detail))!=null?q:($=M.target)==null?void 0:$.value;t._cfg.entity=O||"";try{l()}catch{}i()}),n.appendChild(o),n.appendChild(c),t.appendChild(n);let l=()=>{},g=document.createElement("div");g.style.display="grid",g.style.gridTemplateColumns="1fr 1fr",g.style.columnGap="12px",g.style.rowGap="12px";let u=(M,O)=>{let C=document.createElement("div");C.style.display="flex",C.style.flexDirection="column",C.style.gap="4px";let $=document.createElement("span");$.textContent=M,$.style.fontSize=".8rem",$.style.opacity="0.8",C.appendChild($),C.appendChild(O),g.appendChild(C)},m;customElements.get("ha-textfield")?(m=document.createElement("ha-textfield"),m.setAttribute("label","Name"),m.addEventListener("input",()=>{t._cfg.name=m.value||void 0,i()})):(m=document.createElement("input"),m.type="text",m.placeholder="Name",m.addEventListener("input",()=>{t._cfg.name=m.value||void 0,i()}),Object.assign(m.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})),u("Name",m);let h;customElements.get("ha-icon-picker")?(h=document.createElement("ha-icon-picker"),h.setAttribute("label","Icon"),h.addEventListener("value-changed",M=>{var O;M.stopPropagation(),t._cfg.icon=((O=M.detail)==null?void 0:O.value)||void 0,i()}),Object.assign(h.style,{position:"relative",zIndex:"1000"})):customElements.get("ha-textfield")?(h=document.createElement("ha-textfield"),h.setAttribute("label","Icon"),h.addEventListener("input",()=>{t._cfg.icon=h.value||void 0,i()})):(h=document.createElement("input"),h.type="text",h.placeholder="mdi:icon",h.addEventListener("input",()=>{t._cfg.icon=h.value||void 0,i()}),Object.assign(h.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})),u("Icon",h);let b;if(l=()=>{var H,U;let M=[],O=(H=t._cfg)==null?void 0:H.entity,C=t._hass;if(O&&C&&C.states&&C.states[O]&&C.states[O].attributes)try{M=Object.keys(C.states[O].attributes||{}).filter(X=>X&&typeof X=="string"),M.sort()}catch{}let $=b&&typeof b.value!="undefined"?b.value:void 0,q=((b==null?void 0:b.tagName)||"").toLowerCase(),F={min_color_temp_kelvin:"Minimum color temperature (Kelvin)",max_color_temp_kelvin:"Maximum color temperature (Kelvin)",min_color_temp_mireds:"Minimum color temperature (mireds)",max_color_temp_mireds:"Maximum color temperature (mireds)",min_mireds:"Minimum color temperature (mireds)",max_mireds:"Maximum color temperature (mireds)",effect_list:"Available effects",color_mode:"Color mode",brightness:"Brightness",hs_color:"Hs color",rgb_color:"Rgb color",xy_color:"Xy color",entity_id:"Entity ID",friendly_name:"Friendly name",icon:"Icon"},j=X=>F[X]?F[X]:X.split("_").map(te=>te&&(te.toLowerCase()==="kelvin"?"Kelvin":te.toLowerCase()==="mireds"?"mireds":te.charAt(0).toUpperCase()+te.slice(1))).join(" ");if(q==="ha-combo-box"){let X=M.map(te=>({value:te,label:j(te)}));X.unshift({value:"",label:""}),b.items=X,$&&M.includes($)?b.value=$:b.value=""}else if(q==="ha-select"){b.innerHTML="";let X=document.createElement("mwc-list-item");X.setAttribute("value",""),X.textContent="",b.appendChild(X);for(let te of M){let re=document.createElement("mwc-list-item");re.setAttribute("value",te),re.textContent=j(te),b.appendChild(re)}$&&M.includes($)?b.value=$:b.value="",(U=b.requestUpdate)==null||U.call(b)}else if(q==="select"){b.innerHTML="";let X=document.createElement("option");X.value="",X.textContent="",b.appendChild(X);for(let te of M){let re=document.createElement("option");re.value=te,re.textContent=j(te),b.appendChild(re)}$&&M.includes($)&&(b.value=$)}},customElements.get("ha-combo-box"))b=document.createElement("ha-combo-box"),b.setAttribute("label","Attribute"),b.setAttribute("item-label-path","label"),b.setAttribute("item-value-path","value"),b.setAttribute("allow-custom-value","false"),b.addEventListener("value-changed",M=>{var C,$;M.stopPropagation();let O=($=(C=M.detail)==null?void 0:C.value)!=null?$:b.value;t._cfg.attribute=O||void 0,i()});else if(customElements.get("ha-select"))b=document.createElement("ha-select"),b.setAttribute("label","Attribute"),b.addEventListener("selected",M=>{M.stopPropagation(),t._cfg.attribute=b.value||void 0,i()}),Object.assign(b.style,{position:"relative",zIndex:"1000"});else{b=document.createElement("select");let M=document.createElement("option");M.value="",M.textContent="",b.appendChild(M),b.addEventListener("change",O=>{O.stopPropagation(),t._cfg.attribute=b.value||void 0,i()}),Object.assign(b.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),Object.assign(b.style,{position:"relative",zIndex:"1000"})}l(),u("Attribute",b);let y;customElements.get("ha-textfield")?(y=document.createElement("ha-textfield"),y.setAttribute("label","Unit"),y.addEventListener("input",()=>{t._cfg.unit=y.value||void 0,i()})):(y=document.createElement("input"),y.type="text",y.placeholder="Unit",y.addEventListener("input",()=>{t._cfg.unit=y.value||void 0,i()}),Object.assign(y.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})),u("Unit",y);let _;if(customElements.get("ha-select"))_=document.createElement("ha-select"),_.setAttribute("label","Theme (optional)"),_.addEventListener("selected",M=>{M.stopPropagation(),t._cfg.theme=_.value||void 0,i()});else{_=document.createElement("select");let M=document.createElement("option");M.value="",M.textContent="",_.appendChild(M),_.addEventListener("change",O=>{O.stopPropagation(),t._cfg.theme=_.value||void 0,i()}),Object.assign(_.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})}u("Theme (optional)",_);let A;customElements.get("ha-switch")?(A=document.createElement("ha-switch"),A.addEventListener("change",()=>{t._cfg.state_color=!!A.checked,i()})):(A=document.createElement("input"),A.type="checkbox",A.addEventListener("change",()=>{t._cfg.state_color=!!A.checked,i()}));let T=document.createElement("div");T.style.display="flex",T.style.alignItems="center",T.style.gap="8px";let E=document.createElement("span");return E.textContent="Show state color",E.style.fontSize=".8rem",E.style.opacity="0.8",T.appendChild(E),T.appendChild(A),g.appendChild(T),t.appendChild(g),t.setConfig=(M={})=>{t._cfg={type:"entity",...M||{}};let O=t._cfg;if(c&&("value"in c&&(c.value=O.entity||""),c.setAttribute&&c.setAttribute("value",O.entity||"")),m&&(m.value=O.name||""),h&&(h.value=O.icon||""),b){try{l()}catch{}b.value=O.attribute||""}y&&(y.value=O.unit||""),_&&(_.value=O.theme||""),A&&"checked"in A&&(A.checked=!!O.state_color)},Object.defineProperty(t,"hass",{get(){return this._hass},set(M){var O;if(this._hass=M,c){try{c.hass=M}catch{}customElements.get("ha-entity-picker")||customElements.whenDefined("ha-entity-picker").then(()=>{var C;try{c.hass=this._hass,(C=c.requestUpdate)==null||C.call(c)}catch{}}).catch(()=>{})}if(h){try{h.hass=M}catch{}customElements.get("ha-icon-picker")||customElements.whenDefined("ha-icon-picker").then(()=>{var C;try{h.hass=this._hass,(C=h.requestUpdate)==null||C.call(h)}catch{}}).catch(()=>{})}if(_){let C=[];M&&M.themes&&(M.themes.themes?C=Object.keys(M.themes.themes):typeof M.themes=="object"&&(C=Object.keys(M.themes).filter(F=>F!=="default_theme")));let $=_.value,q=(_.tagName||"").toLowerCase();if(q==="ha-select"){_.innerHTML="";let F=document.createElement("mwc-list-item");F.setAttribute("value",""),F.textContent="",_.appendChild(F);for(let j of C){let H=document.createElement("mwc-list-item");H.setAttribute("value",j),H.textContent=j,_.appendChild(H)}$&&C.includes($)?_.value=$:$||(_.value=""),(O=_.requestUpdate)==null||O.call(_)}else if(q==="select"){_.innerHTML="";let F=document.createElement("option");F.value="",F.textContent="",_.appendChild(F);for(let j of C){let H=document.createElement("option");H.value=j,H.textContent=j,_.appendChild(H)}$&&Array.from(_.options).some(j=>j.value===$)&&(_.value=$)}}try{l()}catch{}}}),t.setConfig(e||{}),t}_shapeBySchema(e,t={}){let i=this._schemaForType(e)||{fields:[]},n={...t,type:e};for(let o of i.fields){let c=n[o.key];if(o.type==="entities"){let g=(Array.isArray(c)?c:c!=null&&c!==""?[c]:[]).filter(Boolean);g.length?n[o.key]=g:delete n[o.key]}else if(o.type==="entity")Array.isArray(c)&&(c=c[0]),c==null||c===""?delete n[o.key]:n[o.key]=String(c);else if(o.type==="number")if(c==null||c==="")delete n[o.key];else{let l=Number(c);Number.isFinite(l)?n[o.key]=l:delete n[o.key]}else(o.type==="select"||o.type==="text"||o.type==="textarea")&&(c==null||c===""?delete n[o.key]:n[o.key]=c)}return n}_statesList(e){var n;let t=Object.keys(((n=this.hass)==null?void 0:n.states)||{});if(!e||!e.length)return t;if(!this.__domainIndex||this.__domainIndex._gen!==t.length){let o={};for(let c of t){let l=c.split(".")[0];(o[l]||(o[l]=[])).push(c)}this.__domainIndex={_gen:t.length,map:o}}let i=[];for(let o of e)this.__domainIndex.map[o]&&i.push(...this.__domainIndex.map[o]);return i}_isNumericEntity(e){var n,o;let t=(o=(n=this.hass)==null?void 0:n.states)==null?void 0:o[e];if(!t)return!1;let i=Number(t.state);return Number.isFinite(i)}_getFaves(){try{return new Set(JSON.parse(localStorage.getItem("ddc_faves")||"[]"))}catch{return new Set}}_setFaves(e){try{localStorage.setItem("ddc_faves",JSON.stringify(Array.from(e)))}catch{}}_getRecent(){try{return JSON.parse(localStorage.getItem("ddc_recent_types")||"[]")}catch{return[]}}_pushRecent(e){try{let t=this._getRecent().filter(i=>i!==e);t.unshift(e),t.length>10&&(t.length=10),localStorage.setItem("ddc_recent_types",JSON.stringify(t))}catch{}}async _ensureCodeMirror(){if(!this.__cmReady){if(!document.querySelector("link[data-cm-core]")){let e=document.createElement("link");e.rel="stylesheet",e.href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.css",e.setAttribute("data-cm-core",""),document.head.appendChild(e)}await new Promise(e=>{if(window.CodeMirror)return e();let t=document.createElement("script");t.src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.js",t.onload=e,document.head.appendChild(t)}),await new Promise(e=>{var i,n;if((n=(i=window.CodeMirror)==null?void 0:i.mimeModes)!=null&&n.yaml)return e();let t=document.createElement("script");t.src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/yaml/yaml.min.js",t.onload=e,document.head.appendChild(t)}),this.__cmReady=!0}}async _mountYamlEditor(e,t,i,n){let o=u=>window.jsyaml?window.jsyaml.dump(u):JSON.stringify(u,null,2),c=u=>window.jsyaml?window.jsyaml.load(u):JSON.parse(u);e.innerHTML="";let l=o(t),g=null;if(customElements.get("ha-code-editor")){let u=document.createElement("ha-code-editor");u.mode="yaml",u.hass=this.hass,u.value=l,u.style.display="block",u.style.height="260px",e.appendChild(u);let m=!1;return u.addEventListener("value-changed",h=>{var y,_,A;if(m)return;let b=(A=(_=(y=h.detail)==null?void 0:y.value)!=null?_:u.value)!=null?A:"";if(g!==null&&b===g){g=null;return}try{i(c(b))}catch(T){n==null||n(T)}}),{setValue:h=>{var y;let b=o(h);((y=u.value)!=null?y:"")!==b&&(g=b,m=!0,u.value=b,m=!1)}}}try{await this._ensureCodeMirror();let u=window.CodeMirror(e,{value:l,mode:"yaml",lineNumbers:!0,lineWrapping:!0,indentUnit:2,tabSize:2}),m=!1;return u.on("change",()=>{if(m)return;let h=u.getValue();if(g!==null&&h===g){g=null;return}try{i(c(h))}catch(b){n==null||n(b)}}),{setValue:h=>{let b=o(h);u.getValue()!==b&&(g=b,m=!0,u.setValue(b),m=!1)}}}catch{let u=document.createElement("textarea");return u.style.width="100%",u.style.height="260px",u.value=l,u.addEventListener("input",()=>{if(g!==null&&u.value===g){g=null;return}try{i(c(u.value))}catch(m){n==null||n(m)}}),e.appendChild(u),{setValue:m=>{let h=o(m);u.value!==h&&(g=h,u.value=h)}}}}_createVirtualList({container:e,items:t,rowHeight:i=36,renderRow:n}){e.style.position="relative",e.style.overflow="auto";let o=document.createElement("div");o.style.height=`${t.length*i}px`,e.innerHTML="",e.appendChild(o);let c=new Map,l=()=>{let g=e.scrollTop,u=e.clientHeight,m=Math.max(0,Math.floor(g/i)-6),h=Math.min(t.length-1,Math.ceil((g+u)/i)+6);for(let[b,y]of c)(b<m||b>h)&&(y.remove(),c.delete(b));for(let b=m;b<=h;b++){if(c.has(b))continue;let y=n(t[b],b);y.style.position="absolute",y.style.left="0",y.style.right="0",y.style.top=`${b*i}px`,c.set(b,y),e.appendChild(y)}};return e.addEventListener("scroll",l,{passive:!0}),new ResizeObserver(l).observe(e),l(),{refresh(g){if(g){t=g,o.style.height=`${t.length*i}px`;for(let[,u]of c)u.remove();c.clear()}l()}}}async _openSmartPicker(e="add",t=null,i=null){let n=()=>o.remove(),o=document.createElement("div");o.className="modal smart-picker-modal",o.innerHTML=`
      <div class="dialog smart-picker-dialog" role="dialog" aria-modal="true">
        <div class="dlg-head">
          <h3>${e==="edit"?"Edit card":"Add a card"}</h3>
          <div class="picker-search-wrap">
            <input id="search" class="picker-search" placeholder="Search cards (name or type)\u2026" aria-label="search">
          </div>
          <div class="picker-actions">
          <button class="picker-btn secondary" id="cancelBtn"><ha-icon icon="mdi:close"></ha-icon><span>Cancel</span></button>
          <button class="picker-btn primary" id="addBtn" disabled>${e==="edit"?'<ha-icon icon="mdi:content-save"></ha-icon><span>Update</span>':'<ha-icon icon="mdi:plus"></ha-icon><span>Add</span>'}
          </button>
          </div>
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
          <span class="picker-footnote">Tip: use <ha-icon icon="mdi:star-outline"></ha-icon> to favorite cards you use often</span>
          <button class="picker-btn secondary" id="footCancel"><ha-icon icon="mdi:close"></ha-icon><span>Cancel</span></button>
          <button class="picker-btn primary" id="footAdd" disabled>${e==="edit"?'<ha-icon icon="mdi:content-save"></ha-icon><span>Update</span>':'<ha-icon icon="mdi:plus"></ha-icon><span>Add</span>'}
          </button>
        </div>
      </div>`,this.shadowRoot.appendChild(o);let c=o.querySelector("#leftPane"),l=o.querySelector("#addBtn"),g=o.querySelector("#footAdd"),u=o.querySelector("#cancelBtn"),m=o.querySelector("#footCancel"),h=o.querySelector("#search"),b=o.querySelector("#cardHost"),y=o.querySelector("#editorHost"),_=o.querySelector("#editorSpin"),A=o.querySelector("#quickFill"),T=o.querySelector("#yamlHost"),E=o.querySelector("#yamlErr"),M=o.querySelector("#yamlSec"),O=o.querySelector("#tabVisual"),C=o.querySelector("#tabYaml"),$=o.querySelector("#tabVis"),q=o.querySelector("#visSec"),F=o.querySelector("#visHost"),j=o.querySelector("#err"),H=o.querySelector("#previewSpin"),U=oe=>{l.disabled=g.disabled=!oe},X=oe=>{oe?(j.hidden=!1,j.textContent=oe):(j.hidden=!0,j.textContent="")},te=this._getFaves(),re=this._getRecent(),le=this._catalog(),Le=le.find(oe=>oe.id==="favorites"),me=le.find(oe=>oe.id==="recent"),de=le.find(oe=>oe.id==="ddc");if(de){let oe=new Map;[...this._dragAndDropCardsCatalog(),...de.items||[]].forEach(pe=>{pe!=null&&pe.type&&oe.set(pe.type,pe)}),de.items=Array.from(oe.values())}let Ce=le.flatMap(oe=>oe.items||[]);Le.items=Ce.filter(oe=>te.has(oe.type)),me.items=re.map(oe=>Ce.find(pe=>pe.type===oe)).filter(Boolean);let ue=this._customCardsFromRegistry();ue.length&&le.push({id:"custom",name:"Custom (installed)",items:ue});let Ae=o.querySelector("#quickFillSec");Ae&&(Ae.style.display="none");let ye=o.querySelector("#optionsSec .hd"),Se,B,p=()=>{if(!B)return;let oe=J&&te.has(J),pe=B.querySelector("ha-icon");pe&&pe.setAttribute("icon",oe?"mdi:star":"mdi:star-outline")},x=oe=>{if(Se){let pe=Ce.find(Ve=>Ve.type===oe),Ke=pe?pe.name:oe||"";Se.textContent=Ke}p()};if(ye&&!ye.querySelector(".sel-info")){let oe=ye.querySelector("span");oe&&(oe.style.display="none"),Se=document.createElement("span"),Se.className="sel-info",Se.style.flex="1",Se.style.fontWeight="bold",Se.style.paddingRight="8px",ye.insertBefore(Se,ye.firstChild),B=document.createElement("button"),B.className="icon-btn",B.setAttribute("title","Favorite"),Object.assign(B.style,{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"28px",height:"28px",borderRadius:"6px",border:"1px solid var(--divider-color)",background:"var(--primary-background-color)",padding:"0",marginLeft:"4px",cursor:"pointer"}),B.innerHTML='<ha-icon icon="mdi:star-outline"></ha-icon>',ye.appendChild(B),B.addEventListener("click",pe=>{pe.stopPropagation(),J&&(te.has(J)?te.delete(J):te.add(J),this._setFaves(te),p(),W())})}let S="visual",z=oe=>{let pe=oe==="yaml",Ke=oe==="vis",Ve=!pe&&!Ke;O.classList.toggle("active",Ve),O.setAttribute("aria-selected",String(Ve)),C.classList.toggle("active",pe),C.setAttribute("aria-selected",String(pe)),$&&($.classList.toggle("active",Ke),$.setAttribute("aria-selected",String(Ke))),y.parentElement.style.display=Ve?"":"none",M.style.display=pe?"":"none",q&&(q.style.display=Ke?"":"none"),pe?M.scrollIntoView({behavior:"smooth",block:"start"}):Ke&&q&&q.scrollIntoView({behavior:"smooth",block:"start"}),S=pe?"yaml":Ke?"vis":"visual"};O.addEventListener("click",async()=>{var oe;if(z("visual"),!he)await ht(V);else try{(oe=he.setConfig)==null||oe.call(he,V)}catch{}}),C.addEventListener("click",()=>z("yaml")),$&&$.addEventListener("click",()=>{z("vis");try{Pe(V)}catch{}}),z("visual");let N=()=>{let oe=h.value.trim().toLowerCase();return le.map(pe=>{let Ke=pe.id==="ddc"?Array.from(new Map([...this._dragAndDropCardsCatalog(),...pe.items||[]].filter(Ve=>!!(Ve!=null&&Ve.type)).map(Ve=>[Ve.type,Ve])).values()):pe.items||[];return{...pe,items:Ke.filter(Ve=>!oe||Ve.name.toLowerCase().includes(oe)||Ve.type.toLowerCase().includes(oe))}}).filter(pe=>pe.items&&pe.items.length||pe.id==="favorites"||pe.id==="recent"||!oe&&pe.id==="ddc")},W=()=>{let oe=N();c.innerHTML="",oe.forEach(pe=>{let Ke=document.createElement("section");Ke.className="picker-category";let Ve=document.createElement("h4");if(Ve.className="picker-category-title",Ve.textContent=pe.name,Ke.appendChild(Ve),!pe.items.length&&(pe.id==="favorites"||pe.id==="recent"||pe.id==="ddc")){let De=document.createElement("div");De.className="picker-category-note",pe.id==="favorites"?De.textContent="No favorites yet.":pe.id==="recent"?De.textContent="No recent items yet.":De.innerHTML=`<strong>Reserved for Drag & Drop Card</strong><span>${pe.hint||"Cards that only work inside Drag & Drop Card will appear here."}</span>`,Ke.appendChild(De)}else pe.items.forEach(De=>{let Ze=document.createElement("button");Ze.className="picker-item",Ze.innerHTML=`
              <ha-icon icon="${De.icon}"></ha-icon>
              <span class="picker-item-meta">
                <span class="picker-item-name">${De.name}</span>
                <span class="picker-item-subtitle">${pe.name}</span>
              </span>`,Ze.addEventListener("click",async()=>{G(Ze),await Ct(De.type)}),Ke.appendChild(Ze)});c.appendChild(Ke)})},G=oe=>{c.querySelectorAll(".picker-item").forEach(pe=>{pe.classList.remove("active")}),oe&&oe.classList.add("active")},V=null,J=null,Z=null,he=null,_e=null,ke=0,Ee=null,Fe="",je=(oe,pe)=>{var ae;let Ke=this._schemaForType(oe);if(A.innerHTML="",!Ke.fields.length){A.innerHTML='<div style="opacity:.7;font-size:.9rem">No quick fill for this card \u2014 use the editors below.</div>';return}let Ve=Object.keys(((ae=this.hass)==null?void 0:ae.states)||{}),De=document.createElement("div"),Ze=(Me,$e,ce,ut)=>{let wt=document.createElement("div");Object.assign(wt.style,{padding:"8px 10px",border:"1px solid var(--divider-color)",borderRadius:"10px",cursor:"pointer",userSelect:"none",display:"flex",alignItems:"center",gap:"8px"}),wt.innerHTML=`<ha-icon icon="mdi:checkbox-blank-outline"></ha-icon><span>${Me}</span>`,$e.includes(Me)&&(wt.style.background="rgba(3,169,244,.12)",wt.style.borderColor="var(--primary-color)",wt.querySelector("ha-icon").setAttribute("icon","mdi:checkbox-marked")),wt.addEventListener("click",async()=>{let ot=$e.indexOf(Me);ot>=0?$e.splice(ot,1):$e.push(Me);let Qe=$e.includes(Me);wt.style.background=Qe?"rgba(3,169,244,.12)":"",wt.style.borderColor=Qe?"var(--primary-color)":"var(--divider-color)",wt.querySelector("ha-icon").setAttribute("icon",Qe?"mdi:checkbox-marked":"mdi:checkbox-blank-outline"),V=this._shapeBySchema(oe,{...V,[ut]:[...$e]}),He(V),Z==null||Z.setValue(V)}),ce.appendChild(wt)};Ke.fields.forEach(Me=>{var ut,wt,ot,Qe,ze,rt,yt,vt,bt;let $e=document.createElement("div");Object.assign($e.style,{display:"flex",gap:"8px",alignItems:"center",marginBottom:"8px"});let ce=document.createElement("label");if(ce.textContent=Me.label||Me.key,ce.style.minWidth="130px",Me.type==="entities"){let nt=document.createElement("div");nt.style.flex="1";let Ie=document.createElement("input");Object.assign(Ie,{placeholder:"Filter entities\u2026"}),Object.assign(Ie.style,{width:"100%",padding:"8px 10px",borderRadius:"10px",border:"1px solid var(--divider-color)",background:"var(--card-background-color)",color:"var(--primary-text-color)"});let st=document.createElement("div");Object.assign(st.style,{maxHeight:"220px",overflow:"auto",marginTop:"8px",border:"1px solid var(--divider-color)",borderRadius:"10px",padding:"6px"});let dt=Me.domains&&Me.domains.length?this._statesList(Me.domains):Ve,gt=Array.isArray(pe[Me.key])?[...pe[Me.key]]:pe[Me.key]?[pe[Me.key]]:[],Oe=ge=>{let ie=document.createElement("div");Object.assign(ie.style,{padding:"6px 10px",margin:"4px 0",border:"1px solid var(--divider-color)",borderRadius:"10px",cursor:"pointer",display:"flex",alignItems:"center",gap:"8px",background:""});let Re=document.createElement("ha-icon");Re.setAttribute("icon","mdi:checkbox-blank-outline"),Re.style.setProperty("--mdc-icon-size","18px");let Ue=document.createElement("span");Ue.textContent=ge,Ue.style.whiteSpace="nowrap",Ue.style.overflow="hidden",Ue.style.textOverflow="ellipsis",ie.append(Re,Ue);let kt=()=>{let Rt=gt.includes(ge);ie.style.background=Rt?"rgba(3,169,244,.12)":"",ie.style.borderColor=Rt?"var(--primary-color)":"var(--divider-color)",Re.setAttribute("icon",Rt?"mdi:checkbox-marked":"mdi:checkbox-blank-outline")};return kt(),ie.addEventListener("click",()=>{let Rt=gt.indexOf(ge);Rt>=0?gt.splice(Rt,1):gt.push(ge),V=this._shapeBySchema(oe,{...V,[Me.key]:[...gt]}),He(V),Z==null||Z.setValue(V),kt()}),ie},Te=dt;this._createVirtualList({container:st,items:Te,rowHeight:36,renderRow:Oe}),Ie.addEventListener("input",()=>{let ge=Ie.value.trim().toLowerCase();Te=dt.filter(ie=>!ge||ie.toLowerCase().includes(ge)),this._createVirtualList({container:st,items:Te,rowHeight:36,renderRow:Oe})}),nt.append(Ie,st),$e.append(ce,nt),V=this._shapeBySchema(oe,{...pe,[Me.key]:gt})}if(Me.type==="entity"){let nt=document.createElement("div");nt.style.flex="1",nt.style.position="relative";let Ie=document.createElement("input");Ie.setAttribute("list","ddc_entlist_"+Me.key),Object.assign(Ie.style,{width:"100%",padding:"8px 10px 8px 36px",borderRadius:"10px",border:"1px solid var(--divider-color)"}),Ie.placeholder=`Select ${((ut=Me.label)==null?void 0:ut.toLowerCase())||"entity"}\u2026`;let st=document.createElement("ha-icon");st.setAttribute("icon","mdi:magnify"),Object.assign(st.style,{position:"absolute",left:"10px",top:"8px",width:"18px",height:"18px","--mdc-icon-size":"18px",opacity:".7"});let dt=document.createElement("datalist");dt.id="ddc_entlist_"+Me.key;let gt=Me.domains&&Me.domains.length?this._statesList(Me.domains):Object.keys(((wt=this.hass)==null?void 0:wt.states)||{});dt.innerHTML=gt.map(Oe=>`<option value="${Oe}">`).join(""),Ie.value=Array.isArray(pe[Me.key])?pe[Me.key][0]||"":pe[Me.key]||"",Ie.addEventListener("change",async()=>{V=this._shapeBySchema(oe,{...V,[Me.key]:Ie.value||void 0}),He(V),Z==null||Z.setValue(V)}),nt.append(st,Ie,dt),$e.append(ce,nt)}if(Me.type==="number"){let nt=document.createElement("div");nt.style.flex="1",nt.style.position="relative";let Ie=document.createElement("input");Ie.type="number",Me.step&&(Ie.step=Me.step),Object.assign(Ie.style,{width:"100%",padding:"8px 10px 8px 36px",borderRadius:"10px",border:"1px solid var(--divider-color)"});let st=document.createElement("ha-icon");st.setAttribute("icon","mdi:counter"),Object.assign(st.style,{position:"absolute",left:"10px",top:"8px","--mdc-icon-size":"18px",width:"18px",height:"18px",opacity:".7"}),Ie.value=(Qe=(ot=pe[Me.key])!=null?ot:Me.default)!=null?Qe:"",Ie.addEventListener("input",async()=>{let dt=Ie.value===""?void 0:Number(Ie.value);V=this._shapeBySchema(oe,{...V,[Me.key]:isNaN(dt)?void 0:dt}),He(V),Z==null||Z.setValue(V)}),nt.append(st,Ie),$e.append(ce,nt)}if(Me.type==="select"){let nt=document.createElement("div");nt.style.flex="1",nt.style.position="relative";let Ie=document.createElement("select");Object.assign(Ie.style,{width:"100%",padding:"8px 10px 8px 36px",borderRadius:"10px",border:"1px solid var(--divider-color)"});let st=document.createElement("ha-icon");st.setAttribute("icon","mdi:format-list-bulleted"),Object.assign(st.style,{position:"absolute",left:"10px",top:"8px","--mdc-icon-size":"18px",width:"18px",height:"18px",opacity:".7"}),(Me.options||[]).forEach(dt=>{let gt=document.createElement("option");gt.value=dt,Ie.appendChild(gt)}),Ie.value=(yt=(ze=pe[Me.key])!=null?ze:Me.default)!=null?yt:((rt=Me.options)==null?void 0:rt[0])||"",Ie.addEventListener("change",async()=>{V=this._shapeBySchema(oe,{...V,[Me.key]:Ie.value}),He(V),Z==null||Z.setValue(V)}),nt.append(st,Ie),$e.append(ce,nt)}if(Me.type==="text"){let nt=document.createElement("div");nt.style.flex="1",nt.style.position="relative";let Ie=document.createElement("input");Ie.type="text",Object.assign(Ie.style,{width:"100%",padding:"8px 10px 8px 36px",borderRadius:"10px",border:"1px solid var(--divider-color)"});let st=document.createElement("ha-icon");st.setAttribute("icon","mdi:text"),Object.assign(st.style,{position:"absolute",left:"10px",top:"8px","--mdc-icon-size":"18px",width:"18px",height:"18px",opacity:".7"}),Ie.value=(vt=pe[Me.key])!=null?vt:"",Ie.addEventListener("input",async()=>{V=this._shapeBySchema(oe,{...V,[Me.key]:Ie.value||void 0}),He(V),Z==null||Z.setValue(V)}),nt.append(st,Ie),$e.append(ce,nt)}if(Me.type==="textarea"){let nt=document.createElement("textarea");Object.assign(nt.style,{flex:"1",minHeight:"120px",padding:"8px 10px",borderRadius:"10px",border:"1px solid var(--divider-color)"}),nt.value=(bt=pe[Me.key])!=null?bt:"",nt.addEventListener("input",async()=>{V=this._shapeBySchema(oe,{...V,[Me.key]:nt.value||""}),He(V),Z==null||Z.setValue(V)}),$e.append(ce,nt)}De.appendChild($e)}),A.innerHTML="",A.appendChild(De)},et=new WeakMap,ct=oe=>{if(!F)return;let pe=Array.isArray(oe==null?void 0:oe.visibility)?oe.visibility.map(Ze=>({...Ze})):[],Ke=()=>Pe(V),Ve=()=>{var Ze;pe=pe.filter(ae=>ae&&typeof ae=="object"&&ae.condition),V={...V,visibility:pe};try{Z==null||Z.setValue(V)}catch{}try{(Ze=he==null?void 0:he.setConfig)==null||Ze.call(he,V)}catch{}He(V)},De=()=>{if(F.innerHTML="",!pe||!pe.length){let ae=document.createElement("div");ae.style.opacity=".7",ae.style.fontSize=".9rem",ae.style.marginBottom="8px",ae.textContent="No conditions defined \u2013 this card is always visible.",F.appendChild(ae)}pe.forEach((ae,Me)=>{let $e=document.createElement("div");Object.assign($e.style,{display:"flex",flexDirection:"column",gap:"6px",marginBottom:"12px",border:"1px solid var(--divider-color)",borderRadius:"8px",padding:"8px"});let ce=document.createElement("div");Object.assign(ce.style,{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"4px"});let ut=document.createElement("div");ut.style.display="flex",ut.style.alignItems="center",ut.style.gap="6px";let wt=document.createElement("ha-icon"),ot="mdi:filter",Qe=ae.condition||"state";Qe==="numeric_state"?ot="mdi:numeric":Qe==="screen"?ot="mdi:monitor":Qe==="user"?ot="mdi:account":Qe==="state"&&(ot="mdi:state-machine"),wt.setAttribute("icon",ot);let ze=document.createElement("span");ze.style.fontWeight="bold",ze.style.textTransform="capitalize",ze.textContent=Qe==="numeric_state"?"Entity numeric state":Qe==="state"?"Entity state":Qe==="screen"?"Screen":"User",ut.appendChild(wt),ut.appendChild(ze),ce.appendChild(ut);let rt=document.createElement("button");rt.setAttribute("title","Remove condition"),rt.innerHTML='<ha-icon icon="mdi:trash-can-outline"></ha-icon>',Object.assign(rt.style,{border:"none",background:"transparent",cursor:"pointer",padding:"4px",display:"inline-flex",alignItems:"center"}),rt.style.position="relative",rt.style.zIndex="1000",rt.addEventListener("click",dt=>{dt.preventDefault(),dt.stopPropagation();let gt=pe.indexOf(ae);gt>-1&&pe.splice(gt,1),V.visibility=pe,De(),Ve()}),ce.appendChild(rt),$e.appendChild(ce);let yt=document.createElement("div");yt.style.display="flex",yt.style.gap="8px";let vt=document.createElement("label");vt.textContent="Type",vt.style.fontSize=".85rem",vt.style.marginRight="4px";let bt=document.createElement("select");["state","numeric_state","screen","user"].forEach(dt=>{let gt=document.createElement("option");gt.value=dt,gt.textContent=dt.replace("_"," "),bt.appendChild(gt)}),bt.value=Qe,bt.addEventListener("change",()=>{ae.condition=bt.value,delete ae.entity,delete ae.state,delete ae.state_not,delete ae.above,delete ae.below,delete ae.media_query,delete ae.users,De(),Ve()}),yt.appendChild(vt),yt.appendChild(bt),$e.appendChild(yt);let nt=document.createElement("div");Object.assign(nt.style,{display:"flex",flexWrap:"wrap",gap:"8px",alignItems:"center"});let Ie=(dt,gt)=>{let Oe=document.createElement("div");Oe.style.display="flex",Oe.style.flexDirection="column",Oe.style.gap="4px",Oe.style.minWidth="150px";let Te=document.createElement("span");Te.textContent=dt,Te.style.fontSize=".75rem",Oe.appendChild(Te),Oe.appendChild(gt),nt.appendChild(Oe)};(()=>{var dt,gt;if(nt.innerHTML="",ae.condition==="state"){let Oe;customElements.get("ha-entity-picker")?(Oe=document.createElement("ha-entity-picker"),Oe.hass=this.hass,Oe.setAttribute("label","Select entity"),Oe.removeAttribute("hide-clear-icon"),Oe.value=ae.entity||"",Oe.addEventListener("value-changed",ie=>{ie.stopPropagation(),ae.entity=ie.detail.value||"",Ve()})):(Oe=document.createElement("input"),Oe.value=ae.entity||"",Oe.addEventListener("input",()=>{ae.entity=Oe.value.trim(),Ve()}),Object.assign(Oe.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})),Ie("Entity",Oe);let Te;if(customElements.get("ha-select")){Te=document.createElement("ha-select");let ie=document.createElement("mwc-list-item");ie.setAttribute("value","state"),ie.textContent="State is equal to";let Re=document.createElement("mwc-list-item");Re.setAttribute("value","state_not"),Re.textContent="State is not equal to",Te.appendChild(ie),Te.appendChild(Re),Te.value=ae.state_not!=null?"state_not":"state",Te.addEventListener("selected",Ue=>{Ue.stopPropagation();let kt=ae.state_not!=null?ae.state_not:ae.state;Te.value==="state_not"?(ae.state_not=kt,delete ae.state):(ae.state=kt,delete ae.state_not),Ve()})}else Te=document.createElement("select"),Te.innerHTML='<option value="state">State is equal to</option><option value="state_not">State is not equal to</option>',Te.value=ae.state_not!=null?"state_not":"state",Object.assign(Te.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),Te.addEventListener("change",ie=>{ie.stopPropagation();let Re=ae.state_not!=null?ae.state_not:ae.state;Te.value==="state_not"?(ae.state_not=Re,delete ae.state):(ae.state=Re,delete ae.state_not),Ve()});Ie("Match type",Te);let ge;customElements.get("ha-textfield")?(ge=document.createElement("ha-textfield"),ge.value=(ae.state_not!=null?ae.state_not:ae.state)||"",ge.setAttribute("label",""),ge.addEventListener("input",ie=>{ie.stopPropagation();let Re=Te.value;ae[Re]=ge.value;let Ue=Re==="state"?"state_not":"state";delete ae[Ue],Ve()})):(ge=document.createElement("input"),ge.value=(ae.state_not!=null?ae.state_not:ae.state)||"",Object.assign(ge.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),ge.addEventListener("input",ie=>{ie.stopPropagation();let Re=Te.value;ae[Re]=ge.value;let Ue=Re==="state"?"state_not":"state";delete ae[Ue],Ve()})),Ie("State",ge)}else if(ae.condition==="numeric_state"){let Oe;customElements.get("ha-entity-picker")?(Oe=document.createElement("ha-entity-picker"),Oe.hass=this.hass,Oe.setAttribute("label","Select entity"),Oe.removeAttribute("hide-clear-icon"),Oe.value=ae.entity||"",Oe.addEventListener("value-changed",ie=>{ie.stopPropagation(),ae.entity=ie.detail.value||"",Ve()})):(Oe=document.createElement("input"),Oe.value=ae.entity||"",Oe.addEventListener("input",()=>{ae.entity=Oe.value.trim(),Ve()}),Object.assign(Oe.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})),Ie("Entity",Oe);let Te;customElements.get("ha-textfield")?(Te=document.createElement("ha-textfield"),Te.setAttribute("type","number"),Te.value=ae.above!=null?ae.above:"",Te.addEventListener("input",ie=>{ie.stopPropagation();let Re=Te.value;Re===""||isNaN(Number(Re))?delete ae.above:ae.above=Number(Re),Ve()})):(Te=document.createElement("input"),Te.type="number",Te.value=ae.above!=null?ae.above:"",Object.assign(Te.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),Te.addEventListener("input",()=>{let ie=Te.value;ie===""||isNaN(Number(ie))?delete ae.above:ae.above=Number(ie),Ve()})),Ie("Above",Te);let ge;customElements.get("ha-textfield")?(ge=document.createElement("ha-textfield"),ge.setAttribute("type","number"),ge.value=ae.below!=null?ae.below:"",ge.addEventListener("input",ie=>{ie.stopPropagation();let Re=ge.value;Re===""||isNaN(Number(Re))?delete ae.below:ae.below=Number(Re),Ve()})):(ge=document.createElement("input"),ge.type="number",ge.value=ae.below!=null?ae.below:"",Object.assign(ge.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),ge.addEventListener("input",()=>{let ie=ge.value;ie===""||isNaN(Number(ie))?delete ae.below:ae.below=Number(ie),Ve()})),Ie("Below",ge)}else if(ae.condition==="screen"){let Oe=document.createElement("select"),Te=[{label:"Custom",value:""},{label:"Mobile (max-width: 599px)",value:"(max-width: 599px)"},{label:"Tablet (600px - 991px)",value:"(min-width: 600px) and (max-width: 991px)"},{label:"Desktop (min-width: 992px)",value:"(min-width: 992px)"}];if(Te.forEach(ge=>{let ie=document.createElement("option");ie.value=ge.value,ie.textContent=ge.label,Oe.appendChild(ie)}),Oe.value=(gt=(dt=Te.find(ge=>ge.value===(ae.media_query||"")))==null?void 0:dt.value)!=null?gt:"",Oe.addEventListener("change",()=>{ae.media_query=Oe.value,Ve()}),Ie("Screen size",Oe),Oe.value===""){let ge=document.createElement("input");ge.placeholder="e.g. (min-width: 1280px)",ge.value=ae.media_query||"",ge.addEventListener("input",()=>{ae.media_query=ge.value,Ve()}),Ie("Custom query",ge)}}else if(ae.condition==="user"){let Oe;customElements.get("ha-user-picker")?(Oe=document.createElement("ha-user-picker"),Oe.hass=this.hass,Oe.value=Array.isArray(ae.users)?ae.users:[],Oe.addEventListener("value-changed",Te=>{ae.users=Array.isArray(Te.detail.value)?Te.detail.value:[Te.detail.value],Ve()})):(Oe=document.createElement("input"),Oe.value=Array.isArray(ae.users)?ae.users.join(","):"",Oe.addEventListener("input",()=>{ae.users=Oe.value.split(",").map(Te=>Te.trim()).filter(Boolean),Ve()})),Ie("Users",Oe)}})(),$e.appendChild(nt),F.appendChild($e)});let Ze=document.createElement("button");Ze.className="btn",Ze.innerHTML='<ha-icon icon="mdi:plus"></ha-icon><span style="margin-left:6px">Add condition</span>',Object.assign(Ze.style,{marginTop:"8px"}),Ze.addEventListener("click",()=>{pe.push({condition:"state",entity:"",state:""}),V.visibility=pe,De(),Ve()}),F.appendChild(Ze)};De()},Pe=oe=>{if(!F)return;let pe=Array.isArray(oe==null?void 0:oe.visibility)?oe.visibility:[],Ke=null,Ve=async()=>{if(Ke)return Ke;try{if(this.hass&&typeof this.hass.callWS=="function")try{let Me=await this.hass.callWS({type:"config/auth/list"});if(Array.isArray(Me))return Ke=Me,Me}catch{}if(this.hass&&typeof this.hass.callApi=="function")try{let Me=await this.hass.callApi("get","users");if(Array.isArray(Me))return Ke=Me,Me}catch{}let ae=[];if(this.hass&&this.hass.users&&Array.isArray(this.hass.users)&&ae.push(...this.hass.users),this.hass&&this.hass.userData&&Array.isArray(this.hass.userData.users)&&ae.push(...this.hass.userData.users),this.hass&&this.hass.authorizedUsers&&Array.isArray(this.hass.authorizedUsers)&&ae.push(...this.hass.authorizedUsers),ae.length){let Me=new Map;ae.forEach(ce=>{let ut=ce.id||ce.user_id||ce.uid||ce.name||"";Me.has(ut)||Me.set(ut,ce)});let $e=Array.from(Me.values());return Ke=$e,$e}}catch{}return Ke=[],[]},De=()=>{var ae;pe=pe.filter(Me=>Me&&typeof Me=="object"&&Me.condition),V.visibility=pe;try{Z==null||Z.setValue(V)}catch{}try{(ae=he==null?void 0:he.setConfig)==null||ae.call(he,V)}catch{}He(V)},Ze=()=>{F.innerHTML="";let ae=document.createElement("div");ae.style.opacity=".75",ae.style.fontSize=".85rem",ae.style.marginBottom="12px",ae.textContent="The card will be shown when ALL conditions below are fulfilled. If no conditions are set, the card will always be shown.",F.appendChild(ae);let Me=(ce,ut)=>{ce.forEach((Qe,ze)=>{$e(Qe,ce,ze,ut)});let wt=document.createElement("div");wt.style.marginTop="8px";let ot=document.createElement("button");ot.className="btn",ot.innerHTML='<ha-icon icon="mdi:plus"></ha-icon><span style="margin-left:6px">Add condition</span>',Object.assign(ot.style,{display:"flex",alignItems:"center",gap:"6px",padding:"6px 12px",border:"none",borderRadius:"20px",background:"var(--primary-color)",color:"var(--text-primary-color, #fff)",cursor:"pointer",fontWeight:"500"}),ot.addEventListener("click",Qe=>{Qe.stopPropagation();let ze=wt.querySelector(".add-menu");if(ze){ze.remove();return}let rt=document.createElement("div");rt.className="add-menu",Object.assign(rt.style,{position:"relative",marginTop:"4px",border:"1px solid var(--divider-color)",borderRadius:"8px",background:"var(--card-background-color, var(--secondary-background-color))",boxShadow:"0 2px 4px rgba(0,0,0,0.2)"}),[{type:"numeric_state",label:"Entity numeric state",icon:"mdi:numeric"},{type:"state",label:"Entity state",icon:"mdi:state-machine"},{type:"screen",label:"Screen",icon:"mdi:monitor"},{type:"user",label:"User",icon:"mdi:account"},{type:"and",label:"And",icon:"mdi:logic-and"},{type:"or",label:"Or",icon:"mdi:logic-or"}].forEach(vt=>{let bt=document.createElement("div");bt.style.display="flex",bt.style.alignItems="center",bt.style.gap="8px",bt.style.padding="6px 12px",bt.style.cursor="pointer",bt.addEventListener("mouseenter",()=>bt.style.background="var(--hover-color, #444)"),bt.addEventListener("mouseleave",()=>bt.style.background=""),bt.addEventListener("click",()=>{rt.remove();let st;vt.type==="and"||vt.type==="or"?st={condition:vt.type,conditions:[]}:vt.type==="state"?st={condition:"state",entity:"",state:""}:vt.type==="numeric_state"?st={condition:"numeric_state",entity:""}:vt.type==="screen"?st={condition:"screen",media_query:""}:vt.type==="user"&&(st={condition:"user",users:[]}),ce.push(st),et.set(st,!0),De(),Ze()});let nt=document.createElement("ha-icon");nt.setAttribute("icon",vt.icon),bt.appendChild(nt);let Ie=document.createElement("span");Ie.textContent=vt.label,bt.appendChild(Ie),rt.appendChild(bt)}),wt.appendChild(rt)}),wt.appendChild(ot),ut.appendChild(wt)},$e=(ce,ut,wt,ot)=>{let Qe=ce.condition||"state",ze=et.get(ce);ze===void 0&&(ze=pe.length===1);let rt=document.createElement("div");Object.assign(rt.style,{display:"flex",flexDirection:"column",border:"1px solid var(--divider-color)",borderLeft:"3px solid var(--primary-color)",borderRadius:"12px",padding:"16px",marginBottom:"20px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",boxShadow:"var(--ha-card-box-shadow, 0 2px 6px rgba(0, 0, 0, 0.15))"});let yt=document.createElement("div");yt.style.display="flex",yt.style.alignItems="center",yt.style.justifyContent="space-between",yt.style.marginBottom="8px",yt.style.borderBottom="1px solid var(--divider-color)",yt.style.paddingBottom="4px",yt.style.position="relative";let vt=document.createElement("div");vt.style.display="flex",vt.style.alignItems="center",vt.style.gap="6px";let bt=document.createElement("button");bt.innerHTML=`<ha-icon icon="${ze?"mdi:chevron-down":"mdi:chevron-right"}"></ha-icon>`,Object.assign(bt.style,{border:"none",background:"transparent",cursor:"pointer",padding:"4px",display:"inline-flex",alignItems:"center"}),bt.addEventListener("click",gt=>{gt.stopPropagation(),et.set(ce,!ze),Ze()}),vt.appendChild(bt);let nt=document.createElement("ha-icon"),Ie="mdi:filter";Qe==="numeric_state"?Ie="mdi:numeric":Qe==="screen"?Ie="mdi:monitor":Qe==="user"?Ie="mdi:account":Qe==="state"?Ie="mdi:state-machine":Qe==="and"?Ie="mdi:logic-and":Qe==="or"&&(Ie="mdi:logic-or"),nt.setAttribute("icon",Ie),vt.appendChild(nt);let st=document.createElement("span");st.style.fontWeight="600",st.style.fontSize="0.95rem",st.style.textTransform="capitalize",st.textContent=Qe==="numeric_state"?"Entity numeric state":Qe==="state"?"Entity state":Qe==="screen"?"Screen":Qe==="user"?"User":Qe==="and"?"And":"Or",vt.appendChild(st),yt.appendChild(vt);let dt=document.createElement("button");if(dt.setAttribute("title","Remove condition"),dt.innerHTML='<ha-icon icon="mdi:trash-can-outline"></ha-icon>',Object.assign(dt.style,{border:"none",background:"transparent",cursor:"pointer",padding:"4px",display:"inline-flex",alignItems:"center"}),dt.style.position="relative",dt.style.zIndex="1000",dt.addEventListener("click",gt=>{gt.preventDefault(),gt.stopPropagation();let Oe=ut.indexOf(ce);Oe>-1&&ut.splice(Oe,1),De(),Ze()}),yt.appendChild(dt),rt.appendChild(yt),Qe!=="and"&&Qe!=="or"){if(ze){let gt=document.createElement("div");Object.assign(gt.style,{display:"flex",flexDirection:"column",gap:"14px",alignItems:"stretch"});let Oe=(Te,ge)=>{let ie=document.createElement("div");ie.style.display="flex",ie.style.flexDirection="column",ie.style.gap="4px";let Re=document.createElement("span");Re.textContent=Te,Re.style.fontSize=".75rem",ie.appendChild(Re),ie.appendChild(ge),gt.appendChild(ie);let Ue=(ge.tagName||"").toLowerCase();(Ue==="input"||Ue==="select")&&Object.assign(ge.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})};if(ce.condition==="state"){let Te=document.createElement("ha-entity-picker");Te.value=ce.entity||"",Te.hass=this.hass,Te.setAttribute("label","Select entity"),Te.addEventListener("value-changed",Re=>{ce.entity=Re.detail.value||"",De()}),customElements.get("ha-entity-picker")||customElements.whenDefined("ha-entity-picker").then(()=>{Ze()}).catch(()=>{}),Oe("Entity",Te);let ge;if(customElements.get("ha-select")){ge=document.createElement("ha-select");let Re=document.createElement("mwc-list-item");Re.setAttribute("value","state"),Re.textContent="State is equal to";let Ue=document.createElement("mwc-list-item");Ue.setAttribute("value","state_not"),Ue.textContent="State is not equal to",ge.appendChild(Re),ge.appendChild(Ue),ge.value=ce.state_not!=null?"state_not":"state",ge.addEventListener("selected",kt=>{kt.stopPropagation();let Rt=ce.state_not!=null?ce.state_not:ce.state;ge.value==="state_not"?(ce.state_not=Rt,delete ce.state):(ce.state=Rt,delete ce.state_not),De()})}else ge=document.createElement("select"),ge.innerHTML='<option value="state">State is equal to</option><option value="state_not">State is not equal to</option>',ge.value=ce.state_not!=null?"state_not":"state",ge.addEventListener("change",Re=>{Re.stopPropagation();let Ue=ce.state_not!=null?ce.state_not:ce.state;ge.value==="state_not"?(ce.state_not=Ue,delete ce.state):(ce.state=Ue,delete ce.state_not),De()}),Object.assign(ge.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"});Oe("Match type",ge);let ie;customElements.get("ha-textfield")?(ie=document.createElement("ha-textfield"),ie.value=(ce.state_not!=null?ce.state_not:ce.state)||"",ie.setAttribute("label",""),ie.addEventListener("input",Re=>{Re.stopPropagation();let Ue=ge.value;ce[Ue]=ie.value;let kt=Ue==="state"?"state_not":"state";delete ce[kt],De()})):(ie=document.createElement("input"),ie.value=(ce.state_not!=null?ce.state_not:ce.state)||"",Object.assign(ie.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),ie.addEventListener("input",Re=>{Re.stopPropagation();let Ue=ge.value;ce[Ue]=ie.value;let kt=Ue==="state"?"state_not":"state";delete ce[kt],De()})),Oe("State",ie)}else if(ce.condition==="numeric_state"){let Te=document.createElement("ha-entity-picker");Te.value=ce.entity||"",Te.hass=this.hass,Te.setAttribute("label","Select entity"),Te.removeAttribute("hide-clear-icon"),Te.addEventListener("value-changed",Re=>{ce.entity=Re.detail.value||"",De()}),customElements.get("ha-entity-picker")||customElements.whenDefined("ha-entity-picker").then(()=>{Ze()}).catch(()=>{}),Oe("Entity",Te);let ge;customElements.get("ha-textfield")?(ge=document.createElement("ha-textfield"),ge.setAttribute("type","number"),ge.value=ce.above!=null?ce.above:"",ge.addEventListener("input",Re=>{Re.stopPropagation();let Ue=ge.value;Ue===""||isNaN(Number(Ue))?delete ce.above:ce.above=Number(Ue),De()})):(ge=document.createElement("input"),ge.type="number",ge.value=ce.above!=null?ce.above:"",Object.assign(ge.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),ge.addEventListener("input",()=>{let Re=ge.value;Re===""||isNaN(Number(Re))?delete ce.above:ce.above=Number(Re),De()})),Oe("Above",ge);let ie;customElements.get("ha-textfield")?(ie=document.createElement("ha-textfield"),ie.setAttribute("type","number"),ie.value=ce.below!=null?ce.below:"",ie.addEventListener("input",Re=>{Re.stopPropagation();let Ue=ie.value;Ue===""||isNaN(Number(Ue))?delete ce.below:ce.below=Number(Ue),De()})):(ie=document.createElement("input"),ie.type="number",ie.value=ce.below!=null?ce.below:"",Object.assign(ie.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),ie.addEventListener("input",()=>{let Re=ie.value;Re===""||isNaN(Number(Re))?delete ce.below:ce.below=Number(Re),De()})),Oe("Below",ie)}else if(ce.condition==="screen"){let Te=[{label:"Mobile",query:"(max-width: 599px)"},{label:"Tablet (min: 768px)",query:"(min-width: 768px)"},{label:"Desktop (min: 1024px)",query:"(min-width: 1024px)"},{label:"Wide (min: 1280px)",query:"(min-width: 1280px)"}];Array.isArray(ce.media_query_list)||(ce.media_query_list=[]);let ge=document.createElement("div");ge.style.display="flex",ge.style.flexDirection="column",ge.style.gap="4px",Te.forEach(ie=>{let Re=document.createElement("label");Re.style.display="flex",Re.style.alignItems="center",Re.style.gap="6px";let Ue=document.createElement("input");Ue.type="checkbox",Ue.checked=ce.media_query_list.includes(ie.query),Ue.addEventListener("change",()=>{Ue.checked?ce.media_query_list.push(ie.query):ce.media_query_list=ce.media_query_list.filter(Rt=>Rt!==ie.query),ce.media_query=ce.media_query_list.join(","),De()});let kt=document.createElement("span");kt.textContent=ie.label,Re.appendChild(Ue),Re.appendChild(kt),ge.appendChild(Re)}),Oe("Screen sizes",ge)}else if(ce.condition==="user"){let Te;if(customElements.get("ha-user-picker"))Te=document.createElement("ha-user-picker"),Te.hass=this.hass,Te.setAttribute("label","Select user"),Te.value=Array.isArray(ce.users)?ce.users:[],Te.addEventListener("value-changed",ge=>{let ie=ge.detail.value;ce.users=Array.isArray(ie)?ie:[ie],De()});else{Te=document.createElement("div"),Te.style.display="flex",Te.style.flexDirection="column",Te.style.gap="4px";let ge=document.createElement("span");ge.style.opacity="0.7",ge.style.fontSize=".85rem",ge.textContent="Loading users\u2026",Te.appendChild(ge);let ie=Array.isArray(ce.users)?ce.users:[];Ve().then(Re=>{if(Te.innerHTML="",Array.isArray(Re)&&Re.length)Re.forEach(Ue=>{let kt=Ue.id||Ue.user_id||Ue.uid||Ue.name||"",Rt=Ue.name||kt,Gt=document.createElement("label");Gt.style.display="flex",Gt.style.alignItems="center",Gt.style.gap="6px",Gt.style.padding="4px 0";let Zt=document.createElement("input");Zt.type="checkbox",Zt.checked=ie.includes(kt)||ie.includes(Rt),Zt.addEventListener("change",()=>{let ci=Array.isArray(ce.users)?ce.users.slice():[];Zt.checked?ci.includes(kt)||ci.push(kt):ci=ci.filter(Wi=>Wi!==kt&&Wi!==Rt),ce.users=ci,De()});let vi=document.createElement("span");vi.textContent=Rt,Gt.appendChild(Zt),Gt.appendChild(vi),Te.appendChild(Gt)});else{let Ue=document.createElement("input");Ue.value=Array.isArray(ce.users)?ce.users.join(","):"",Object.assign(Ue.style,{padding:"6px 10px",borderRadius:"6px",border:"1px solid var(--divider-color)",background:"var(--card-background-color, var(--secondary-background-color))",color:"var(--primary-text-color, inherit)"});let kt=()=>{ce.users=Ue.value.split(",").map(Rt=>Rt.trim()).filter(Boolean),De()};Ue.addEventListener("change",kt),Ue.addEventListener("blur",kt),Te.appendChild(Ue)}})}Oe("Users",Te)}rt.appendChild(gt)}}else if(ze){Array.isArray(ce.conditions)||(ce.conditions=[]);let gt=document.createElement("div");gt.style.marginLeft="16px",Me(ce.conditions,gt),rt.appendChild(gt)}ot.appendChild(rt)};Me(pe,F)};Ze()},He=oe=>{if(((oe==null?void 0:oe.type)||"")==="custom_card"){Fe=JSON.stringify(oe||{}),b.innerHTML='<div style="opacity:.6;font-size:.9rem;padding:8px">Preview not available for the custom card placeholder. Use the YAML editor.</div>',H.hidden=!0;return}let pe=JSON.stringify(oe||{});pe!==Fe&&(Fe=pe,Ee&&clearTimeout(Ee),Ee=setTimeout(async()=>{var Ve,De,Ze,ae,Me;let Ke=++ke;H.hidden=!1,b.innerHTML="",await zn();try{if(Ke!==ke)return;let $e=null,ce=String((oe==null?void 0:oe.type)||"");if(ce==="custom:ddc-html-card")$e=document.createElement("ddc-html-card"),(Ve=$e.setConfig)==null||Ve.call($e,oe),$e.hass=this.hass;else if(ce==="custom:ddc-line-card")$e=document.createElement("ddc-line-card"),(De=$e.setConfig)==null||De.call($e,oe),$e.hass=this.hass;else if(ce==="custom:ddc-table-card")$e=document.createElement("ddc-table-card"),(Ze=$e.setConfig)==null||Ze.call($e,oe),$e.hass=this.hass;else if(ce==="custom:ddc-icon-card")$e=document.createElement("ddc-icon-card"),(ae=$e.setConfig)==null||ae.call($e,oe),$e.hass=this.hass;else if(ce==="custom:ddc-text-card")$e=document.createElement("ddc-text-card"),(Me=$e.setConfig)==null||Me.call($e,oe),$e.hass=this.hass;else{let ut=await this._helpersPromise||await window.loadCardHelpers();if(Ke!==ke)return;$e=ut.createCardElement(oe),$e.hass=this.hass}if(Ke!==ke)return;b.appendChild($e)}catch{}finally{Ke===ke&&(H.hidden=!0)}},150))},ht=async oe=>{var Ve;let pe=++ke;_.hidden=!1,y.innerHTML="",await kc();let Ke=oe.type||J;if(_e=await this._getEditorElementForType(Ke,oe),Ke==="custom_card"){let De=document.createElement("div");return De.style.opacity=".7",De.style.fontSize=".9rem",De.textContent="Custom card placeholder: use the YAML editor to paste the card type and options.",y.appendChild(De),he=null,S!=="yaml"&&z("yaml"),U(!0),_.hidden=!0,!1}if(!_e){let De=document.createElement("div");return De.style.opacity=".7",De.style.fontSize=".9rem",De.textContent="This card does not support a visual editor. Please use the YAML tab to configure it.",pe===ke&&(y.appendChild(De),_.hidden=!0),he=null,U(!0),S!=="visual"&&z("yaml"),!1}try{_e.hass=this.hass,_e.isConnected||y.appendChild(_e),await Promise.resolve();try{_e.setConfig(oe)}catch{}try{let Ze=await this._helpersPromise||await window.loadCardHelpers(),ae=Ze.getCardElementClass?await Ze.getCardElementClass(oe.type||J):null;if(ae!=null&&ae.getStubConfig){let Me=Object.keys(((Ve=this.hass)==null?void 0:Ve.states)||{}),$e=ut=>Me.filter(wt=>wt.startsWith(ut+".")),ce=await ae.getStubConfig(this.hass,Me,$e);ce&&(oe=this._shapeBySchema(oe.type||J,{...ce}))}}catch{}await Promise.resolve();try{_e.setConfig(oe)}catch{}he&&this.__onEditorChange&&(he.removeEventListener("config-changed",this.__onEditorChange),he.removeEventListener("value-changed",this.__onEditorChange));let De=async Ze=>{var $e,ce,ut;let ae=(ut=($e=Ze.detail)==null?void 0:$e.config)!=null?ut:(ce=Ze.detail)==null?void 0:ce.value;if(!ae)return;let Me=ae.type||J;J=Me,V=this._shapeBySchema(Me,ae),X(""),U(!0),je(J,V),He(V),Z==null||Z.setValue(V)};return this.__onEditorChange=De,_e.addEventListener("config-changed",De),_e.addEventListener("value-changed",De),he=_e,S!=="yaml"&&z("visual"),U(!0),!0}finally{pe===ke&&(_.hidden=!0)}},tt=async oe=>{Z=await this._mountYamlEditor(T,oe,async pe=>{var Ke,Ve;try{let De=(pe==null?void 0:pe.type)||J,Ze=this._shapeBySchema(De,pe||{}),ae=De!==J;if(J=De,V=Ze,E.hidden=!0,E.textContent="",U(!0),ae){if(je(J,V),he){try{(Ke=he.setConfig)==null||Ke.call(he,V)}catch{}S!=="yaml"&&z("visual")}try{Pe(V)}catch{}}else{try{(Ve=he==null?void 0:he.setConfig)==null||Ve.call(he,V)}catch{}He(V);try{Pe(V)}catch{}}}catch(De){E.hidden=!1,E.textContent=`Invalid config: ${String((De==null?void 0:De.message)||De)}`,U(!1)}},pe=>{E.hidden=!1,E.textContent=`Invalid YAML: ${String((pe==null?void 0:pe.message)||pe)}`,U(!1)})},_t=async oe=>{if(this.__stubCache.has(oe))return{...this.__stubCache.get(oe)};let pe=await this._getStubConfigForType(oe);return this.__stubCache.set(oe,{...pe}),{...pe}},Ct=async oe=>{E.hidden=!0,E.textContent="",X(""),J=oe;try{typeof x=="function"&&x(oe)}catch{}let pe=e==="edit"&&t&&t.type===oe?{...t}:await _t(oe);V=this._shapeBySchema(oe,pe),he=null,je(oe,V),await tt(V),await zn(),He(V);try{Pe(V)}catch{}try{let Ke=await ht(V);z(Ke?"visual":"yaml")}catch{z("yaml")}U(!0)},St=async()=>{if(!V)return;let oe=this._shapeBySchema(J,V);e==="edit"&&typeof i=="function"?await i(oe):(await this._addPickedCardToLayout(oe),this._pushRecent((oe||{}).type)),n()};u.addEventListener("click",n),m.addEventListener("click",n),l.addEventListener("click",St),g.addEventListener("click",St),o.addEventListener("keydown",oe=>{oe.key==="Escape"&&n(),oe.key==="Enter"&&!l.disabled&&St()});let xt=null;h.addEventListener("input",()=>{xt&&clearTimeout(xt),xt=setTimeout(W,120)}),W(),e==="edit"&&t?(await Ct(t.type||"entities"),U(!0)):(await Ct((()=>{var Ke;return(((Ke=this._getRecent)==null?void 0:Ke.call(this))||[]).find(Boolean)||"entities"})()),U(!0))}async _getStubConfigForType(e){var u,m,h,b,y,_,A;let t=await this._helpersPromise||await window.loadCardHelpers(),i=null;if(e==="custom_card")return null;if(e==="custom:ddc-line-card")return{type:"custom:ddc-line-card",title:"",entity:"",active_states:"on,home,open,playing,charging,active,>0",direction:"horizontal",arrows:"end",flow_direction:"auto",line_style:"solid",thickness:10,animate_mode:"active",animation_speed:1.8,active_color:"var(--primary-color, #ff9800)",inactive_color:"rgba(148, 163, 184, 0.42)",glow:!0,rounded:!0};if(e==="custom:ddc-html-card")return{type:"custom:ddc-html-card",title:"HTML / Web card",html:`<div class="ddc-html-demo">
  <div class="ddc-html-pill">Drag & Drop Card</div>
  <h2>Custom HTML card</h2>
  <p>Write your own HTML, CSS and JavaScript directly inside this card.</p>
  <button id="ddc-html-demo-btn" type="button">Read live entity</button>
  <div class="ddc-html-demo-state">Waiting for Home Assistant data\u2026</div>
</div>`,css:`.ddc-html-demo {
  display: grid;
  gap: 12px;
  align-content: start;
}

.ddc-html-pill {
  display: inline-flex;
  width: fit-content;
  padding: 6px 10px;
  border-radius: 999px;
  background: color-mix(in oklab, var(--primary-color, #ff9800) 14%, transparent);
  color: var(--primary-color, #ff9800);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.ddc-html-demo h2 {
  margin: 0;
  font-size: 1.18rem;
}

.ddc-html-demo p {
  margin: 0;
  color: var(--secondary-text-color, #94a3b8);
  line-height: 1.5;
}

.ddc-html-demo button {
  width: fit-content;
  padding: 10px 14px;
  border: 0;
  border-radius: 12px;
  background: linear-gradient(180deg, color-mix(in oklab, var(--primary-color, #ff9800) 82%, #fff 10%), color-mix(in oklab, var(--primary-color, #ff9800) 92%, #000 4%));
  color: #fff;
  font-weight: 700;
  cursor: pointer;
}

.ddc-html-demo-state {
  padding: 12px 14px;
  border-radius: 14px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  line-height: 1.45;
}`,js:`const stateEl = root.querySelector('.ddc-html-demo-state');
const button = root.querySelector('#ddc-html-demo-btn');

button?.addEventListener('click', async () => {
  const entityId = Object.keys(states || {})[0];
  if (!stateEl) return;
  stateEl.textContent = entityId
    ? \`Clicked: \${entityId} = \${states[entityId]?.state ?? 'unknown'}\`
    : 'No entities are available right now.';
});

return {
  update({ states }) {
    if (!stateEl) return;
    const entityId = Object.keys(states || {})[0];
    stateEl.textContent = entityId
      ? \`Live entity: \${entityId} = \${states[entityId]?.state ?? 'unknown'}\`
      : 'No entities are available right now.';
  }
};`,rerun_on_hass_update:!1};if(e==="custom:ddc-table-card"){let T=Object.keys(((u=this.hass)==null?void 0:u.states)||{}),E=T[0]||"",M=T[1]||E;return{type:"custom:ddc-table-card",title:"Energy overview",rows:3,columns:3,header_row:!0,border:!0,radius:16,spacing:8,cells:[{type:"text",text:"Area",align:"left"},{type:"text",text:"Live state",align:"center"},{type:"text",text:"Action",align:"center"},{type:"text",text:"Primary",align:"left"},{type:"entity",entity:E,text:"Primary sensor",align:"center",active_states:"on,home,open,playing,charging,active,>0",active_color:"var(--primary-color, #ff9800)",inactive_color:"rgba(148, 163, 184, 0.18)"},{type:"button",entity:E,text:"Inspect",button_action:"more-info",align:"center",active_states:"on,home,open,playing,charging,active,>0",active_color:"var(--primary-color, #ff9800)",inactive_color:"rgba(148, 163, 184, 0.18)"},{type:"icon",icon:"mdi:flash",text:"Secondary",align:"left"},{type:"badge",entity:M,text:"Secondary sensor",align:"center",active_states:"on,home,open,playing,charging,active,>0",active_color:"var(--primary-color, #ff9800)",inactive_color:"rgba(148, 163, 184, 0.18)"},{type:"text",text:"Editable cells",align:"center"}]}}if(e==="custom:ddc-icon-card"){let E=Object.keys(((m=this.hass)==null?void 0:m.states)||{})[0]||"";return{type:"custom:ddc-icon-card",icon:E?String(((_=(y=(b=(h=this.hass)==null?void 0:h.states)==null?void 0:b[E])==null?void 0:y.attributes)==null?void 0:_.icon)||"mdi:flash"):"mdi:flash",entity:E,size:96,color:"var(--primary-color, #ff9800)",active_color:"#22c55e",state_based_color:!0,glow:!0,rotate:0,pulse_when_active:!0,opacity_based_on_state:!1,active_opacity:1,inactive_opacity:.28,active_states:"on,home,open,playing,charging,active,>0",click_action:"more-info"}}if(e==="custom:ddc-text-card")return{type:"custom:ddc-text-card",text:"Energy overview",rich_text:!1,rich_html:"",variant:"title",font_family:"",font_size:42,color:"var(--primary-text-color, #f8fafc)",align:"left",bold:!0,italic:!1,letter_spacing:-.03,line_height:1.05};try{t.getCardElementClass&&(i=await t.getCardElementClass(e))}catch{}let n=Object.keys(((A=this.hass)==null?void 0:A.states)||{}),o=T=>n.filter(E=>E.startsWith(T+".")),c={type:e};if(i!=null&&i.getStubConfig)try{let T=await i.getStubConfig(this.hass,n,o);if(e!=="entity")return T;T&&typeof T=="object"&&(c={...c,...T})}catch{}let l=n[0],g=o("sensor")[0]||l;if(["entity","sensor","button","gauge","tile","light","thermostat","media-control","alarm-panel","picture-entity","weather-forecast","map"].includes(e)){let T={sensor:g,gauge:o("sensor").find(this._isNumericEntity.bind(this))||g,"media-control":o("media_player")[0]||l,light:o("light")[0]||l,thermostat:o("climate")[0]||l,"alarm-panel":o("alarm_control_panel")[0]||l,"weather-forecast":o("weather")[0]||l,map:o("device_tracker")[0]||o("person")[0]||l}[e]||g||l;["entity","sensor","button","gauge","tile","light","thermostat","media-control","alarm-panel","picture-entity"].includes(e)?c.entity=T:e==="weather-forecast"?(c.entity=T,c.show_current=!0,c.show_forecast=!0,c.forecast_type="daily"):e==="map"&&(c.entities=[T].filter(Boolean),c.theme_mode="auto")}if(["entities","glance","picture-glance","history-graph","statistics-graph"].includes(e)){let T=E=>(E!=null&&E.length?n.filter(M=>E.includes(M.split(".")[0])):n).slice(0,3);e==="statistics-graph"?c.entities=T(["sensor","number","input_number"]):c.entities=T()}if(e==="markdown"&&(c.content="Markdown card"),e==="sensor"&&(c.graph="line"),e==="button"&&(c.show_name=!0,c.show_icon=!0),e==="tile"&&(c.features_position="bottom",c.vertical=!1),e==="picture-glance"&&(c.title=c.title||"Glance",c.image=c.image||"https://demo.home-assistant.io/stub_config/kitchen.png"),e==="picture-entity"&&(c.image=c.image||"https://demo.home-assistant.io/stub_config/bedroom.png"),e==="iframe"&&(c.url=c.url||"https://www.home-assistant.io",c.aspect_ratio=c.aspect_ratio||"50%"),e==="alarm-panel"&&(c.states=c.states||["arm_home","arm_away"]),e==="area")try{let T=this.hass&&this.hass.areas?Object.values(this.hass.areas):[];T.length?c.area=T[0].area_id||T[0].name||T[0].id:c.area=l?l.split(".")[0]:"default_area",c.display_type="picture",c.alert_classes=c.alert_classes||["moisture","motion"],c.sensor_classes=c.sensor_classes||["temperature","humidity"],c.features_position="bottom"}catch{}return c}_getNextAvailablePosition(){let e=Array.from(this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)")),t=new Set,i=this.gridSize;e.forEach(c=>{let l=parseFloat(c.getAttribute("data-x"))||0,g=parseFloat(c.getAttribute("data-y"))||0,u=parseFloat(getComputedStyle(c).width)||100,m=parseFloat(getComputedStyle(c).height)||100,h=Math.floor(l/i),b=Math.floor(g/i),y=Math.floor((l+u)/i),_=Math.floor((g+m)/i);for(let A=h;A<y;A++)for(let T=b;T<_;T++)t.add(`${A}-${T}`)});let n=0,o=0;for(;t.has(`${n}-${o}`);)n+=6,n>60&&(n=0,o+=6);return{x:n*i,y:o*i}}async _addPickedCardToLayout(e){this._hideEmptyPlaceholder();let t=await this._createCard(e),i=this._makeWrapper(t),n=this._getNextAvailablePosition();this._setCardPosition(i,n.x,n.y);let o=String((e==null?void 0:e.type)||"");if(o==="custom:ddc-line-card"){let c=["vertical","diagonal-up","diagonal-down"].includes(String((e==null?void 0:e.direction)||"").toLowerCase());i.style.width=`${(c?5:16)*this.gridSize}px`,i.style.height=`${(c?14:4)*this.gridSize}px`}else if(o==="custom:ddc-table-card"){let c=Math.max(1,Number((e==null?void 0:e.columns)||3)||3),l=Math.max(1,Number((e==null?void 0:e.rows)||3)||3);i.style.width=`${Math.max(12,Math.min(24,c*5))*this.gridSize}px`,i.style.height=`${Math.max(7,Math.min(18,l*3+(e!=null&&e.title?2:1)))*this.gridSize}px`}else o==="custom:ddc-icon-card"?(i.style.width=`${6*this.gridSize}px`,i.style.height=`${6*this.gridSize}px`):o==="custom:ddc-text-card"?(i.style.width=`${14*this.gridSize}px`,i.style.height=`${5*this.gridSize}px`):(i.style.width=`${14*this.gridSize}px`,i.style.height=`${10*this.gridSize}px`);{let c=this._highestZ()+1;i.style.zIndex=String(Math.max(c,6))}this.cardContainer.appendChild(i);try{this._rebuildOnce(i.firstElementChild)}catch{}this._initCardInteract(i),this._resizeContainer(),this._queueSave("add"),this._toast("Card added to layout."),this._syncEmptyStateUI();try{this._applyVisibility_()}catch{}}_toggleSelection(e,t=null){let i=t==null?!this._selection.has(e):!!t;i?this._selection.add(e):this._selection.delete(e),e.classList.toggle("selected",i)}_clearSelection(){for(let e of this._selection)e.classList.remove("selected");this._selection.clear()}_copySelection(){var e,t,i;try{let n=this._selection?Array.from(this._selection):[];if(!n.length){(e=this._toast)==null||e.call(this,"Nothing selected to copy.");return}let o=1/0,c=1/0,l=[];for(let g of n){if(g.dataset.placeholder)continue;let u=parseFloat(g.getAttribute("data-x"))||0,m=parseFloat(g.getAttribute("data-y"))||0;u<o&&(o=u),m<c&&(c=m)}for(let g of n){if(g.dataset.placeholder)continue;let u=this._extractCardConfig(g.firstElementChild)||{},m=parseFloat(g.getAttribute("data-x"))||0,h=parseFloat(g.getAttribute("data-y"))||0,b=g.style.width||`${g.getBoundingClientRect().width}px`,y=g.style.height||`${g.getBoundingClientRect().height}px`;l.push({cfg:u,dx:m-o,dy:h-c,width:b,height:y})}window.__DDC_CLIPBOARD__={items:l},(t=this._toast)==null||t.call(this,`Copied ${l.length} card${l.length===1?"":"s"}.`)}catch(n){console.warn("[drag-and-drop-card] Copy failed",n),(i=this._toast)==null||i.call(this,"Copy failed.")}}async _pasteClipboard(){var e,t,i,n;try{let o=window.__DDC_CLIPBOARD__;if(!o||!Array.isArray(o.items)||!o.items.length){(e=this._toast)==null||e.call(this,"Clipboard is empty.");return}let c=o.items,l=1,g;do{let h=this.gridSize*l,b=this.gridSize*l;g=c.map(y=>{let _=parseFloat(y.width)||0,A=parseFloat(y.height)||0;return{x:h+(y.dx||0),y:b+(y.dy||0),w:_,h:A}}),l+=1}while(this._anyCollisionFor(g,new Set));let u=this.gridSize*(l-1),m=this.gridSize*(l-1);for(let h of c){let b=h.cfg||{},y=await this._createCard(b),_=this._makeWrapper(y);_.style.width=h.width,_.style.height=h.height;let A=u+(h.dx||0),T=m+(h.dy||0);this._setCardPosition(_,A,T);{let E=this._highestZ()+1;_.style.zIndex=String(Math.max(E,6))}try{let E=this._normalizeTabId(this.activeTab||this.defaultTab);E&&(_.dataset.tabId=E)}catch{}this.cardContainer.appendChild(_);try{this._rebuildOnce(_.firstElementChild)}catch{}this._initCardInteract(_)}this._resizeContainer(),this._applyActiveTab(),(t=this._queueSave)==null||t.call(this,"paste"),(i=this._toast)==null||i.call(this,`Pasted ${c.length} card${c.length===1?"":"s"}.`)}catch(o){console.warn("[drag-and-drop-card] Paste failed",o),(n=this._toast)==null||n.call(this,"Paste failed.")}}_installSelectionMarquee(){let e=this.cardContainer,t=0,i=0,n=null,o=!1,c=h=>{let b=e.getBoundingClientRect(),y="touches"in h&&h.touches[0]?h.touches[0].clientX:h.clientX,_="touches"in h&&h.touches[0]?h.touches[0].clientY:h.clientY,A=this.__pointerScaleX||1,T=this.__pointerScaleY||1;return{x:(y-b.left)/A,y:(_-b.top)/T}},l=(h,b)=>{let y=Math.min(h,t),_=Math.max(h,t),A=Math.min(b,i),T=Math.max(b,i);n.style.left=`${y}px`,n.style.top=`${A}px`,n.style.width=`${_-y}px`,n.style.height=`${T-A}px`;let E=n.getBoundingClientRect(),M=e.querySelectorAll(".card-wrapper:not(.ddc-placeholder)");this._clearSelection(),M.forEach(O=>{let C=O.getBoundingClientRect();!(C.right<E.left||C.left>E.right||C.bottom<E.top||C.top>E.bottom)&&this._toggleSelection(O,!0)})},g=h=>{if(!this.editMode||h.target.closest(".card-wrapper"))return;o=!0;let b=c(h);t=b.x,i=b.y,n=document.createElement("div"),n.className="marquee",n.style.left=`${t}px`,n.style.top=`${i}px`,e.appendChild(n),h.preventDefault()},u=h=>{!o||!n||l(c(h).x,c(h).y)},m=()=>{o&&(o=!1,n&&n.remove(),n=null)};e.addEventListener("mousedown",g),window.addEventListener("mousemove",u),window.addEventListener("mouseup",m),e.addEventListener("touchstart",h=>{this.editMode&&(h.target.closest(".card-wrapper")||g(h))},{passive:!1}),window.addEventListener("touchmove",h=>{u(h)},{passive:!0}),window.addEventListener("touchend",m),window.addEventListener("touchcancel",m)}async _openDiagnostics(){var l,g;let e=document.createElement("div");e.className="modal";let t=this.storageKey||"(none)",i=this._backendOK&&!!this.storageKey,n=u=>u.slice(-200).map(m=>`<div style="font-family:monospace;font-size:.85rem;line-height:1.3">
        <span style="opacity:.6">${m.t}</span>
        <b style="margin-left:6px;color:#03a9f4">[${m.kind}]</b>
        <span style="margin-left:6px">${this._safe(m.msg)}</span>
        ${m.extra?`<pre style="margin:4px 0 0 0;white-space:pre-wrap;background:var(--card-background-color);border:1px solid var(--divider-color);border-radius:8px;padding:6px;max-height:160px;overflow:auto">${this._safe(JSON.stringify(m.extra,null,2))}</pre>`:""}
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
                <div>Storage key (raw \u2192 slug)</div><div><code>${this._safe(((l=this._config)==null?void 0:l.storage_key)||"")}</code> \u2192 <code>${this._safe(t)}</code></div>
                <div>Backend reachable</div><div><b>${this._backendOK?"YES":"NO"}</b></div>
                <div>Persist target</div><div><b>${i?"Host (backend)":"Browser (localStorage)"}</b></div>
                <div>Auto-save</div><div>${this.autoSave?`ON (${this.autoSaveDebounce} ms)`:"OFF"}</div>
                <div>Cards mounted</div><div>${((g=this.cardContainer)==null?void 0:g.querySelectorAll(".card-wrapper:not(.ddc-placeholder)").length)||0}</div>
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
            <div class="bd" id="logArea" style="padding:12px;max-height:420px;overflow:auto">${n(this._dbgDump())}</div>
          </div>
        </div>
      </div>`;let o=()=>e.remove();e.querySelector("#closeDiag").addEventListener("click",o),this.shadowRoot.appendChild(e);let c=()=>{let u=e.querySelector("#logArea"),m=h=>h.slice(-200).map(b=>`<div style="font-family:monospace;font-size:.85rem;line-height:1.3">
          <span style="opacity:.6">${b.t}</span>
          <b style="margin-left:6px;color:#03a9f4">[${b.kind}]</b>
          <span style="margin-left:6px">${this._safe(b.msg)}</span>
          ${b.extra?`<pre style="margin:4px 0 0 0;white-space:pre-wrap;background:var(--card-background-color);border:1px solid var(--divider-color);border-radius:8px;padding:6px;max-height:160px;overflow:auto">${this._safe(JSON.stringify(b.extra,null,2))}</pre>`:""}
        </div>`).join("");u.innerHTML=m(this._dbgDump()),u.scrollTop=u.scrollHeight};e.querySelector("#refreshKeys").addEventListener("click",async()=>{try{this._dbgPush("probe","Manual refresh"),await this._probeBackend()}finally{c()}}),e.querySelector("#forceSave").addEventListener("click",async()=>{await this._saveLayout(!1),c()}),e.querySelector("#exportJson").addEventListener("click",()=>{var y;this._persistCurrentResponsiveProfileToMemory_();let u=((y=this._responsiveLayouts)==null?void 0:y[this._getPrimaryResponsiveLayoutKey_()])||this._captureCurrentLayoutEntries_(),m={version:3,options:this._exportableOptions(),cards:u,responsive_layouts:this._cloneJson_(this._serializeResponsiveLayouts_(this._responsiveLayouts,u)),packages:this._exportDashboardPackages_()},h=new Blob([JSON.stringify(m,null,2)],{type:"application/json"}),b=document.createElement("a");b.href=URL.createObjectURL(h),b.download=`ddc_${this.storageKey||"layout"}.json`,b.click(),URL.revokeObjectURL(b.href)}),e.querySelector("#importJson").addEventListener("click",async()=>{let u=document.createElement("input");u.type="file",u.accept="application/json",u.onchange=async()=>{var y,_;let m=(y=u.files)==null?void 0:y[0];if(!m)return;let h=await m.text();try{let A=JSON.parse(h);if(this._dbgPush("import","Loaded file",{bytes:h.length}),this._isSingleCardImportPayload_(A)){await this._importSingleCardPayload_(A);let T=new Event("ddc-logrefresh");window.dispatchEvent(T);return}this._setDashboardPackages_(A.packages||[]),this.responsiveViewportProfiles=this._normalizeResponsiveViewportProfiles_(((_=A.options)==null?void 0:_.responsive_viewports)||this.responsiveViewportProfiles),this._responsiveLayouts=this._normalizeResponsiveLayouts_(A.cards||[],A.responsive_layouts||null),await this._syncResponsiveProfileForViewport_({force:!0}),this._resizeContainer(),await this._saveLayout(!1)}catch(A){this._dbgPush("import","Parse failed",{error:String(A)})}let b=new Event("ddc-logrefresh");window.dispatchEvent(b)},u.click()}),e.querySelector("#testRoundtrip").addEventListener("click",async()=>{if(!this._backendOK)return this._dbgPush("test","Backend not reachable, aborting"),c();let u=(this.storageKey||"ddc_test")+"_selftest",m={t:Date.now(),msg:"roundtrip"};try{await this._saveLayoutToBackend(u,m);let h=await this._loadLayoutFromBackend(u);this._dbgPush("test","Round-trip result",{wrote:m,read:h})}catch(h){this._dbgPush("test","Round-trip failed",{error:String(h)})}c()}),c()}_openDashboardSettings(){var Bi,jr,tr,br,Vr,ir,yr,vr,rr,Wr,Kr,hi,nr,Yr,Ur,_r,xr,Ft,Gr;let e=document.createElement("div");e.className="modal",this._ensureSettingsStyles_(),e.innerHTML=`
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

      <div class="setting" role="group" aria-labelledby="lbl-mobile-optimize">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:cellphone-cog" aria-hidden="true"></ha-icon>
            <label id="lbl-mobile-optimize" for="ddc-setting-optimizeForMobile">Optimize for mobile</label>
          </div>
          <div class="control">
            <ha-switch id="ddc-setting-optimizeForMobile"></ha-switch>
          </div>
        </div>
        <div class="hint" id="ddc-setting-optimizeForMobileHint">In Dynamic mode, keeps narrow screens more readable by avoiding extreme downscaling, softening text shrink, and allowing horizontal pan when needed.</div>
      </div>

      <div class="setting" role="group" aria-labelledby="lbl-mobile-dynamic-behavior">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:cellphone-arrow-down" aria-hidden="true"></ha-icon>
            <label id="lbl-mobile-dynamic-behavior" for="ddc-setting-mobileDynamicBehavior">Mobile dynamic behavior</label>
          </div>
          <div class="control">
            <select id="ddc-setting-mobileDynamicBehavior">
              <option value="native">Native canvas (no scaling)</option>
              <option value="scale">Scale to fit</option>
            </select>
          </div>
        </div>
        <div class="hint" id="ddc-setting-mobileDynamicBehaviorHint">Choose how Dynamic mode behaves when the active responsive profile is Mobile. Native keeps scale at 1 and lets the canvas pan horizontally if needed.</div>
      </div>

      <!-- TEXT SCALE LOCK -->
      <div class="setting" role="group" aria-labelledby="lbl-lock-text-scale">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:format-size" aria-hidden="true"></ha-icon>
            <label id="lbl-lock-text-scale" for="ddc-setting-doNotResizeText">Do not Resize Text</label>
          </div>
          <div class="control">
            <ha-switch id="ddc-setting-doNotResizeText"></ha-switch>
          </div>
        </div>
        <div class="hint" id="ddc-setting-doNotResizeTextHint">Keeps text at its design size when the canvas scale changes. Best suited for Dynamic and Auto.</div>
      </div>

      <div class="setting" role="group" aria-labelledby="lbl-outer-grid-buffer">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:grid-plus" aria-hidden="true"></ha-icon>
            <label id="lbl-outer-grid-buffer" for="ddc-setting-outerGridBuffer">Outer grid buffer</label>
          </div>
          <div class="control">
            <ha-switch id="ddc-setting-outerGridBuffer"></ha-switch>
          </div>
        </div>
        <div class="hint">Adds one extra grid cell after the furthest cards so they do not land flush against the canvas edge. Best suited for Dynamic and Auto.</div>
      </div>

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
      <div class="setting" role="group" aria-labelledby="lbl-dashboard-theme-enabled">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:theme-light-dark" aria-hidden="true"></ha-icon>
            <label id="lbl-dashboard-theme-enabled" for="ddc-setting-dashboardThemeEnabled">Enable dashboard theme styling</label>
          </div>
          <div class="control">
            <ha-switch id="ddc-setting-dashboardThemeEnabled"></ha-switch>
          </div>
        </div>
        <div class="hint" id="ddc-setting-dashboardThemeEnabledHint">Applies a Home Assistant theme to this dashboard so theme variables can style cards, text, buttons, and surfaces.</div>
      </div>

      <div class="setting" role="group" aria-labelledby="lbl-dashboard-theme">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:format-paint" aria-hidden="true"></ha-icon>
            <label id="lbl-dashboard-theme" for="ddc-setting-dashboardTheme">Dashboard theme</label>
          </div>
          <div class="control">
            <select id="ddc-setting-dashboardTheme">
              <option value="">Select theme\u2026</option>
            </select>
          </div>
        </div>
        <div class="hint" id="ddc-setting-dashboardThemeHint">Choose which Home Assistant theme this dashboard should inherit variables from.</div>
      </div>

      <div class="setting" role="group" aria-labelledby="lbl-dashboard-theme-override">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:invert-colors" aria-hidden="true"></ha-icon>
            <label id="lbl-dashboard-theme-override" for="ddc-setting-dashboardThemeOverrideAllDesign">Theme overrides all design</label>
          </div>
          <div class="control">
            <ha-switch id="ddc-setting-dashboardThemeOverrideAllDesign"></ha-switch>
          </div>
        </div>
        <div class="hint" id="ddc-setting-dashboardThemeOverrideAllDesignHint">When enabled, the selected theme wins over dashboard surface colors, card shadows, and per-card design overrides.</div>
      </div>
      <div class="section-actions">
        <button type="button" class="mini-action primary" id="ddc-randomize-allStyle">
          <ha-icon icon="mdi:palette-outline"></ha-icon>
          <span>Randomize all style</span>
        </button>
      </div>

      <!-- CONTAINER BG -->
      <div class="setting" role="group" aria-labelledby="lbl-container-bg">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:palette-swatch" aria-hidden="true"></ha-icon>
            <label id="lbl-container-bg" for="ddc-setting-containerBg">Container background</label>
          </div>
            <div class="control">
              <div class="stack color-stack">
                <div class="setting-actions">
                  <button type="button" class="mini-action" id="ddc-randomize-containerBg">
                    <ha-icon icon="mdi:shuffle-variant"></ha-icon>
                    <span>Randomize</span>
                  </button>
                </div>
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

      <div class="setting" role="group" aria-labelledby="lbl-apply-page-bg">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:application-braces-outline" aria-hidden="true"></ha-icon>
            <label id="lbl-apply-page-bg" for="ddc-setting-applyPageBackground">Apply current background to whole page</label>
          </div>
          <div class="control">
            <ha-switch id="ddc-setting-applyPageBackground"></ha-switch>
          </div>
        </div>
        <div class="hint">Applies the active background mode across the full Lovelace view, including image, particles, and video, not just the card canvas.</div>
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
              <div class="setting-actions">
                <button type="button" class="mini-action" id="ddc-randomize-cardBg">
                  <ha-icon icon="mdi:shuffle-variant"></ha-icon>
                  <span>Randomize</span>
                </button>
              </div>
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
                <button type="button" class="btn secondary" id="ddc-browse-media-library">Browse Media</button>
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
              <div class="setting-actions">
                <button type="button" class="mini-action" id="ddc-randomize-particles">
                  <ha-icon icon="mdi:shuffle-variant"></ha-icon>
                  <span>Randomize</span>
                </button>
              </div>
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

      <div class="setting" role="group" aria-labelledby="lbl-tabs-placement">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:dock-window" aria-hidden="true"></ha-icon>
            <label id="lbl-tabs-placement" for="ddc-setting-tabsPosition">Tabs placement</label>
          </div>
          <div class="control">
            <select id="ddc-setting-tabsPosition">
              <option value="top">Top</option>
              <option value="bottom">Bottom</option>
              <option value="left">Left rail</option>
            </select>
          </div>
        </div>
        <div class="hint">Dock the tabs at the top, bottom, or along the left side of the dashboard.</div>
      </div>

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

    <!-- Layers -->
    <section class="card layers-card" aria-labelledby="layers-head">
      <div class="section-head">
        <ha-icon icon="mdi:layers-triple-outline" aria-hidden="true"></ha-icon>
        <h4 id="layers-head">Layers</h4>
      </div>
      <p class="caption">Create optional visibility layers on top of tabs. Cards without assigned layers remain visible everywhere for backward compatibility.</p>

      <div class="setting" role="group" aria-labelledby="lbl-layers-enabled">
        <div class="layer-toggle-row">
          <div class="title">
            <ha-icon icon="mdi:layers-outline" aria-hidden="true"></ha-icon>
            <label id="lbl-layers-enabled" for="ddc-setting-layersEnabled">Enable Layers</label>
          </div>
          <div class="control">
            <ha-switch id="ddc-setting-layersEnabled"></ha-switch>
          </div>
        </div>
        <div class="hint">When enabled, you can assign cards to one or more layers and show or hide them from a compact layer bar in the dashboard.</div>
      </div>

      <div id="ddc-layers-list" class="setting" aria-live="polite"></div>

      <div class="setting" role="group" aria-labelledby="lbl-add-layer">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:layer-plus" aria-hidden="true"></ha-icon>
            <label id="lbl-add-layer" for="ddc-new-layer-name">Add layer</label>
          </div>
          <div class="control">
            <div class="row">
              <input type="text" id="ddc-new-layer-name" placeholder="e.g. Night mode" class="grow" />
              <button class="btn primary" id="ddc-add-layer-btn">Add</button>
            </div>
          </div>
        </div>
        <div class="hint">The first layer defaults to <code>standard</code>. You can rename labels later without breaking older cards.</div>
      </div>
    </section>

    <!-- Features -->
    <section class="card packages-card" aria-labelledby="packages-head">
      <div class="section-head">
        <ha-icon icon="mdi:puzzle-plus-outline" aria-hidden="true"></ha-icon>
        <h4 id="packages-head">Add features</h4>
      </div>
      <p class="caption">Build Home Assistant features directly from the dashboard. Each feature is stored as package YAML in the dashboard JSON and synced by the backend into your HA <code>packages</code> folder.</p>

      <div class="feature-quick-actions" aria-label="Add feature shortcuts">
        <button type="button" class="mini-action primary ddc-feature-add-btn" data-feature-type="automation">
          <ha-icon icon="mdi:robot-outline"></ha-icon>
          <span>Add automation</span>
        </button>
        <button type="button" class="mini-action ddc-feature-add-btn" data-feature-type="script">
          <ha-icon icon="mdi:script-text-outline"></ha-icon>
          <span>Add script</span>
        </button>
        <button type="button" class="mini-action ddc-feature-add-btn" data-feature-type="input_boolean">
          <ha-icon icon="mdi:toggle-switch-outline"></ha-icon>
          <span>Add input boolean</span>
        </button>
        <button type="button" class="mini-action ddc-feature-add-btn" data-feature-type="input_select">
          <ha-icon icon="mdi:format-list-bulleted-square"></ha-icon>
          <span>Add input select</span>
        </button>
        <button type="button" class="mini-action ddc-feature-add-btn" data-feature-type="input_text">
          <ha-icon icon="mdi:form-textbox"></ha-icon>
          <span>Add input text</span>
        </button>
        <button type="button" class="mini-action ddc-feature-add-btn" data-feature-type="input_number">
          <ha-icon icon="mdi:numeric"></ha-icon>
          <span>Add input number</span>
        </button>
        <button type="button" class="mini-action ddc-feature-add-btn" data-feature-type="template_sensor">
          <ha-icon icon="mdi:chart-bell-curve-cumulative"></ha-icon>
          <span>Add template sensor</span>
        </button>
        <button type="button" class="mini-action ddc-feature-add-btn" data-feature-type="misc">
          <ha-icon icon="mdi:code-tags"></ha-icon>
          <span>Add misc</span>
        </button>
      </div>

      <div class="package-tools">
        <button type="button" class="mini-action" id="ddc-package-diagnostics-btn">
          <ha-icon icon="mdi:stethoscope"></ha-icon>
          <span>Check package sync</span>
        </button>
      </div>

      <div class="package-reload-note">
        <ha-icon icon="mdi:alert-outline" aria-hidden="true"></ha-icon>
        <div>Make sure to reload your Home Assistant instance after editing this space so new helpers, scripts, automations, and other package-based features are picked up.</div>
      </div>

      <div id="ddc-package-diagnostics" class="package-sync-status">Run package sync diagnostics to verify backend support, package directory, and detected files.</div>

      <div id="ddc-packages-list" class="packages-list" aria-live="polite"></div>
      <div class="hint">Each feature becomes one package bundle behind the scenes. Use <code>Misc</code> whenever you need to add YAML that does not fit the guided shortcuts.</div>
    </section>

  </div>

  <div class="footer">
    <button class="btn secondary" id="ddc-settings-cancel">Cancel</button>
    <button class="btn primary" id="ddc-settings-save">Save</button>
  </div>
</div>

`;let t=this.shadowRoot.querySelector(".modal");if(t){try{t.remove()}catch{}this.__settingsModal===t&&(this.__settingsModal=null)}if(this.__settingsModal){try{this.__settingsModal.remove()}catch{}this.__settingsModal=null}this.__settingsModal=e,this.shadowRoot.appendChild(e);let i=e.querySelector("#ddc-setting-autoResize"),n=e.querySelector("#ddc-setting-gridSize"),o=e.querySelector("#ddc-setting-animate"),c=e.querySelector("#ddc-setting-hideHdr"),l=e.querySelector("#ddc-setting-hideSbar"),g=e.querySelector("#ddc-setting-dragSnap"),u=e.querySelector("#ddc-setting-autoSave"),m=e.querySelector("#ddc-setting-autoSaveDebounce"),h=e.querySelector("#ddc-setting-sizeMode"),b=e.querySelector("#ddc-setting-optimizeForMobile"),y=e.querySelector("#ddc-setting-optimizeForMobileHint"),_=e.querySelector("#ddc-setting-mobileDynamicBehavior"),A=e.querySelector("#ddc-setting-mobileDynamicBehaviorHint"),T=e.querySelector("#ddc-setting-doNotResizeText"),E=e.querySelector("#ddc-setting-doNotResizeTextHint"),M=e.querySelector("#ddc-setting-outerGridBuffer"),O=e.querySelector("#ddc-setting-orient"),C=e.querySelector("#ddc-setting-disableOverlap"),$=e.querySelector("#ddc-setting-editPin"),q=e.querySelector("#ddc-setting-dashboardThemeEnabled"),F=e.querySelector("#ddc-setting-dashboardThemeEnabledHint"),j=e.querySelector("#ddc-setting-dashboardTheme"),H=e.querySelector("#ddc-setting-dashboardThemeHint"),U=e.querySelector("#ddc-setting-dashboardThemeOverrideAllDesign"),X=e.querySelector("#ddc-setting-dashboardThemeOverrideAllDesignHint"),te=e.querySelector("#ddc-setting-containerBg"),re=e.querySelector("#ddc-setting-applyPageBackground"),le=e.querySelector("#ddc-setting-cardBg"),Le=e.querySelector("#ddc-randomize-allStyle"),me=e.querySelector("#ddc-randomize-containerBg"),de=e.querySelector("#ddc-randomize-cardBg"),Ce=e.querySelector("#ddc-randomize-particles"),ue=e.querySelector("#ddc-setting-cardShadow"),Ae=e.querySelector("#ddc-setting-bgImg"),ye=e.querySelector("#ddc-browse-media-library"),Se=e.querySelector("#ddc-bg-repeat"),B=e.querySelector("#ddc-bg-size"),p=e.querySelector("#ddc-bg-position"),x=e.querySelector("#ddc-bg-attachment"),S=e.querySelector("#ddc-bg-opacity"),z=e.querySelector("#ddc-bg-opacity-out"),N=e.querySelector("#ddc-setting-debug"),W=e.querySelector("#ddc-setting-screenSaverEnabled"),G=e.querySelector("#ddc-setting-screenSaverDelay"),V=e.querySelector("#ddc-screenSaverDelayOut"),J=e.querySelector("#ddc-bg-mode"),Z=e.querySelector('[data-bg-section="image"]'),he=e.querySelector('[data-bg-section="particles"]'),_e=e.querySelector('[data-bg-section="youtube"]'),ke=e.querySelector("#ddc-particles-url"),Ee=e.querySelector("#ddc-particles-pointer"),Fe=e.querySelector("#ddc-youtube-url"),je=e.querySelector("#ddc-youtube-start"),et=e.querySelector("#ddc-youtube-end"),ct=e.querySelector("#ddc-youtube-mute"),Pe=e.querySelector("#ddc-youtube-loop"),He=e.querySelector("#ddc-youtube-size"),ht=e.querySelector("#ddc-youtube-position"),tt=e.querySelector("#ddc-youtube-attachment"),_t=e.querySelector("#ddc-youtube-opacity"),Ct=e.querySelector("#ddc-youtube-opacity-out"),St=e.querySelector("#ddc-setting-tabsPosition"),xt=e.querySelector("#ddc-setting-layersEnabled"),Mt=e.querySelector("#ddc-layers-list"),oe=e.querySelector("#ddc-new-layer-name"),pe=e.querySelector("#ddc-add-layer-btn"),Ke=e.querySelector("#ddc-packages-list"),Ve=Array.from(e.querySelectorAll(".ddc-feature-add-btn")),De=e.querySelector("#ddc-package-diagnostics-btn"),Ze=e.querySelector("#ddc-package-diagnostics"),ae=((Bi=this._config)==null?void 0:Bi.background_image)||{},Me=((jr=this._config)==null?void 0:jr.background_mode)||((br=(tr=this._config)==null?void 0:tr.background_image)!=null&&br.src?"image":"none");J&&(J.value=String(Me));let $e=((Vr=this._config)==null?void 0:Vr.background_particles)||{},ce=R=>{try{return JSON.parse(JSON.stringify(R!=null?R:null))}catch{return null}},ut={automation:{label:"Automation",icon:"mdi:robot-outline",description:"Create one Home Assistant automation and keep the YAML bundled with this dashboard."},script:{label:"Script",icon:"mdi:script-text-outline",description:"Add a reusable Home Assistant script to this dashboard package bundle."},input_boolean:{label:"Input boolean",icon:"mdi:toggle-switch-outline",description:"Create a toggle helper that can be used across cards, automations, and scripts."},input_select:{label:"Input select",icon:"mdi:format-list-bulleted-square",description:"Create a selectable helper with a list of options."},input_text:{label:"Input text",icon:"mdi:form-textbox",description:"Create a text helper you can write to from cards, scripts, or automations."},input_number:{label:"Input number",icon:"mdi:numeric",description:"Create a numeric helper for counters, setpoints, or quick controls."},template_sensor:{label:"Template sensor",icon:"mdi:chart-bell-curve-cumulative",description:"Create a template sensor that derives values from other Home Assistant entities."},misc:{label:"Misc",icon:"mdi:code-tags",description:"Use raw package YAML for anything that does not fit the guided feature shortcuts."}},wt=Object.keys(ut),ot=R=>Object.prototype.hasOwnProperty.call(ut,R),Qe=R=>{var K;return((K=ut[R])==null?void 0:K.label)||ut.misc.label},ze=R=>{var K;return((K=ut[R])==null?void 0:K.icon)||ut.misc.icon},rt=R=>{var K;return((K=ut[R])==null?void 0:K.description)||ut.misc.description},yt=R=>{var K;if(!R)return"Unknown error";if(typeof R=="string")return R;if((K=R==null?void 0:R.body)!=null&&K.message)return String(R.body.message);if(R!=null&&R.message)return String(R.message);try{return JSON.stringify(R)}catch{}return String(R)},vt=(R,K="feature")=>this._slugifyPackageToken_(R,K).replace(/-/g,"_"),bt=(R="")=>{let K=String(R||"").trim();if(!K)return"misc";let se=[["automation",/^\s*automation\s*:/m],["script",/^\s*script\s*:/m],["input_boolean",/^\s*input_boolean\s*:/m],["input_select",/^\s*input_select\s*:/m],["input_text",/^\s*input_text\s*:/m],["input_number",/^\s*input_number\s*:/m],["template_sensor",/^\s*template\s*:/m]].filter(([,ve])=>ve.test(K)).map(([ve])=>ve);return se.length===1?se[0]:"misc"},nt=(R,K)=>{let ee=String(K||Qe(R)).trim()||Qe(R),se=vt(ee,R);switch(R){case"automation":return`automation:
  - alias: ${ee}
    id: ${se}
    trigger: []
    condition: []
    action: []
`;case"script":return`script:
  ${se}:
    alias: ${ee}
    sequence: []
`;case"input_boolean":return`input_boolean:
  ${se}:
    name: ${ee}
    icon: mdi:toggle-switch
`;case"input_select":return`input_select:
  ${se}:
    name: ${ee}
    options:
      - Option 1
      - Option 2
`;case"input_text":return`input_text:
  ${se}:
    name: ${ee}
    max: 100
`;case"input_number":return`input_number:
  ${se}:
    name: ${ee}
    min: 0
    max: 100
    step: 1
    mode: slider
`;case"template_sensor":return`template:
  - sensor:
      - name: ${ee}
        unique_id: ${se}
        state: "ready"
`;case"misc":default:return`# Add any Home Assistant package YAML here.
`}},Ie=(R,K,ee=1)=>{let se=ot(K)?K:"feature";return`${this._slugifyPackageToken_(R||`${se}_${ee}`,`${se}_${ee}`)}.yaml`},st=R=>{let K=Qe(R),ee=Re.filter(se=>String(se.feature_type||"misc")===R).length+1;return`${K} ${ee}`},dt=(R="misc")=>{let K=ot(R)?R:"misc",ee=Re.length+1,se=st(K);return{id:`package_${Date.now()}_${ee}`,name:se,filename:Ie(se,K,ee),yaml:nt(K,se),enabled:!0,feature_type:K,__filenameDirty:!1,__yamlDirty:!1}},gt=(R={},K=0)=>{var se,ve,xe,Ne,We,Ge,Xe,at,mt;let ee=ot(R.feature_type)?R.feature_type:bt((xe=(ve=(se=R.yaml)!=null?se:R.content)!=null?ve:R.body)!=null?xe:"");return{id:String(R.id||R.package_id||`package_${K+1}`),name:String(R.name||R.title||R.filename||`package_${K+1}`),filename:String(R.filename||""),yaml:String((Ge=(We=(Ne=R.yaml)!=null?Ne:R.content)!=null?We:R.body)!=null?Ge:"").replace(/\r\n/g,`
`),enabled:R.enabled!==!1,feature_type:ee,__filenameDirty:!!String(R.filename||"").trim(),__yamlDirty:!!String((mt=(at=(Xe=R.yaml)!=null?Xe:R.content)!=null?at:R.body)!=null?mt:"").trim()}},Oe=(R={},K=0)=>({id:String(R.id||`layer-${K+1}`),label:String(R.label||R.name||`Layer ${K+1}`),icon:String(R.icon||"mdi:layers-outline"),color:String(R.color||"#60a5fa"),default_active:R.default_active!==!1}),Te=(R=[])=>this._normalizeDashboardLayers_((Array.isArray(R)?R:[]).map((K,ee)=>({id:String((K==null?void 0:K.id)||`layer-${ee+1}`),label:String((K==null?void 0:K.label)||(K==null?void 0:K.name)||`Layer ${ee+1}`),icon:String((K==null?void 0:K.icon)||"mdi:layers-outline"),color:String((K==null?void 0:K.color)||"#60a5fa"),default_active:(K==null?void 0:K.default_active)!==!1}))),ge=!!this.layersEnabled,ie=(this.layers||[]).map((R,K)=>Oe(R,K));ge&&!ie.length&&(ie=[Oe(this._defaultDashboardLayer_(),0)]);let Re=this._exportDashboardPackages_().map((R,K)=>gt(R,K)),Ue=(R="")=>String(R||"").split(`
`).map(ee=>ee.trim()).find(ee=>ee&&!ee.startsWith("#"))||"No YAML added yet.",kt=(R,K=!1)=>{Ze&&(Ze.style.color=K?"var(--error-color, #ef4444)":"var(--secondary-text-color)",Ze.textContent=R||"Run package sync diagnostics to verify backend support, package directory, and detected files.")},Rt=()=>{var se;if(!j)return;let R=((se=this._getAvailableDashboardThemeNames_)==null?void 0:se.call(this))||[],K=String(j.value||this.dashboardTheme||"").trim();j.innerHTML="";let ee=document.createElement("option");ee.value="",ee.textContent=R.length?"Select theme\u2026":"No themes found",j.appendChild(ee),R.forEach(ve=>{let xe=document.createElement("option");xe.value=ve,xe.textContent=ve,j.appendChild(xe)}),K&&R.includes(K)?j.value=K:j.value=""},Gt=()=>{let R=!!ge;xt&&(xt.checked=R),Mt&&(Mt.style.opacity=R?"1":".6"),oe&&(oe.disabled=!R),pe&&(pe.disabled=!R)},Zt=()=>{if(Mt){if(Gt(),Mt.innerHTML="",!ge){let R=document.createElement("div");R.className="layer-empty",R.textContent="Layers are currently off. Turn them on to create smaller visibility groups beneath the tabs area.",Mt.appendChild(R);return}if(!ie.length){let R=document.createElement("div");R.className="layer-empty",R.textContent="No layers yet. Add your first one below. Cards without assigned layers stay visible on every layer.",Mt.appendChild(R);return}ie.forEach((R,K)=>{let ee=document.createElement("div");ee.className="layer-row",ee.dataset.layerId=R.id;let se=document.createElement("input");se.type="text",se.value=R.label||"",se.placeholder="Layer label",se.title="Layer label",se.addEventListener("input",()=>{ie[K]={...ie[K],label:se.value}});let ve=document.createElement("input");ve.type="text",ve.value=R.icon||"",ve.placeholder="mdi:layers-outline",ve.title="Layer icon",ve.addEventListener("input",()=>{ie[K]={...ie[K],icon:ve.value.trim()||"mdi:layers-outline"}});let xe=document.createElement("input");xe.type="color",xe.value=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(String(R.color||"").trim())?String(R.color).trim():"#60a5fa",xe.title="Layer accent color",xe.addEventListener("input",()=>{ie[K]={...ie[K],color:xe.value}});let Ne=document.createElement("div");Ne.className="layer-actions";let We=document.createElement("ha-switch");We.checked=R.default_active!==!1,We.title="Enabled by default",We.addEventListener("change",()=>{ie[K]={...ie[K],default_active:!!We.checked}}),Ne.appendChild(We);let Ge=document.createElement("div");Ge.className="layer-actions";let Xe=document.createElement("span");Xe.className="layer-chip",Xe.style.setProperty("--ddc-layer-accent",R.color||"#60a5fa"),Xe.style.borderColor=`color-mix(in oklab, ${R.color||"#60a5fa"} 48%, transparent)`,Xe.style.background=`color-mix(in oklab, ${R.color||"#60a5fa"} 12%, transparent)`,Xe.innerHTML=`<ha-icon icon="${R.icon||"mdi:layers-outline"}"></ha-icon><span>${R.label||R.id}</span>`;let at=document.createElement("button");at.type="button",at.className="icon-btn danger",at.title="Delete layer",at.innerHTML='<ha-icon icon="mdi:trash-can-outline"></ha-icon>',at.addEventListener("click",()=>{ie.splice(K,1),Zt()}),Ge.appendChild(Xe),Ge.appendChild(at),ee.appendChild(se),ee.appendChild(ve),ee.appendChild(xe),ee.appendChild(Ne),ee.appendChild(Ge),Mt.appendChild(ee)})}},vi=()=>{var se;let R=!!(q!=null&&q.checked),ee=(((se=this._getAvailableDashboardThemeNames_)==null?void 0:se.call(this))||[]).length>0;j&&(j.disabled=!R||!ee),U&&(U.disabled=!R||!String((j==null?void 0:j.value)||"").trim()),F&&(F.textContent=ee?"Applies a Home Assistant theme to this dashboard so theme variables can style cards, text, buttons, and surfaces.":"No Home Assistant themes were detected yet. The toggle is stored, but you need available HA themes before you can pick one."),H&&(H.textContent=ee?R?"Choose which Home Assistant theme this dashboard should inherit variables from.":"Turn on dashboard theme styling to choose a theme.":"No themes were found from Home Assistant."),X&&(X.textContent=!R||!String((j==null?void 0:j.value)||"").trim()?"Select and enable a dashboard theme before theme override mode can take control.":"When enabled, the selected theme wins over dashboard surface colors, card shadows, and per-card design overrides.")},ci=()=>{var R;try{this.dashboardThemeEnabled=!!(q!=null&&q.checked),this.dashboardTheme=String((j==null?void 0:j.value)||"").trim(),this.dashboardThemeOverrideAllDesign=!!(U!=null&&U.checked),(R=this._applyDashboardThemeStyling_)==null||R.call(this)}catch{}},Wi=async()=>{kt("Checking backend package sync...");try{let R=await this.hass.callApi("get","dragdrop_storage_package_status");if(!R||R.ok===!1){kt(`Package diagnostics failed.${R!=null&&R.error?` ${R.error}`:""}`,!0);return}let K=[`Backend package sync: ${R.supports_package_sync?"supported":"unknown"}`,`Packages directory: ${R.directory||"(missing)"}`,`Directory exists: ${R.directory_exists?"yes":"no"}`,`Looks writable: ${R.directory_writable?"yes":"no"}`,`configuration.yaml found: ${R.configuration_exists?"yes":"no"}`,`configuration has "packages:": ${R.configuration_mentions_packages?"yes":"no"}`,`configuration includes packages dir: ${R.configuration_includes_packages_dir_named||R.configuration_includes_packages_dir_merge_named?"yes":"no"}`,`Detected DDC package files: ${Array.isArray(R.files)&&R.files.length?R.files.join(", "):"none"}`];kt(K.join(`
`))}catch(R){kt(`Package diagnostics request failed: ${yt(R)}`,!0)}},gi=null,Ki=()=>{var R;try{(R=gi==null?void 0:gi.remove)==null||R.call(gi)}catch{}gi=null},dr=R=>{var jt,pi;let K=Re[R];if(!K)return;Ki();let ee=ot(K.feature_type)?K.feature_type:"misc",se=document.createElement("div");se.className="feature-editor-shell",se.innerHTML=`
        <div class="feature-editor-backdrop"></div>
        <div class="feature-editor-modal" role="dialog" aria-modal="true" aria-labelledby="ddc-feature-editor-title">
          <div class="feature-editor-head">
            <div>
              <h5 id="ddc-feature-editor-title">Edit ${this._safe(Qe(ee))}</h5>
              <p>${this._safe(rt(ee))}</p>
            </div>
            <button type="button" class="icon-btn" id="ddc-feature-editor-close" title="Close editor">
              <ha-icon icon="mdi:close"></ha-icon>
            </button>
          </div>
          <div class="feature-editor-grid">
            <div class="feature-editor-field">
              <label for="ddc-feature-editor-name">Feature name</label>
              <input id="ddc-feature-editor-name" type="text" value="${this._safe(K.name||"")}" />
            </div>
            <div class="feature-editor-field">
              <label for="ddc-feature-editor-type">Feature type</label>
              <input id="ddc-feature-editor-type" type="text" value="${this._safe(Qe(ee))}" readonly />
            </div>
            <div class="feature-editor-field full">
              <label for="ddc-feature-editor-file">Package file name</label>
              <input id="ddc-feature-editor-file" type="text" value="${this._safe(K.filename||"")}" placeholder="${this._safe(Ie(K.name,ee,R+1))}" />
            </div>
            <div class="feature-editor-field full">
              <label for="ddc-feature-editor-yaml">YAML content</label>
              <textarea id="ddc-feature-editor-yaml" spellcheck="false" placeholder="${this._safe(nt(ee,K.name||Qe(ee)))}">${this._safe(K.yaml||"")}</textarea>
            </div>
          </div>
          <div class="feature-editor-footer">
            <label class="feature-editor-toggle">
              <span>Enable this feature</span>
              <ha-switch id="ddc-feature-editor-enabled"></ha-switch>
            </label>
            <div class="feature-editor-actions">
              <button type="button" class="btn secondary" id="ddc-feature-editor-cancel">Cancel</button>
              <button type="button" class="btn primary" id="ddc-feature-editor-save">Save feature</button>
            </div>
          </div>
        </div>
      `,e.appendChild(se),gi=se;let ve=se.querySelector("#ddc-feature-editor-name"),xe=se.querySelector("#ddc-feature-editor-file"),Ne=se.querySelector("#ddc-feature-editor-yaml"),We=se.querySelector("#ddc-feature-editor-enabled"),Ge=se.querySelector("#ddc-feature-editor-close"),Xe=se.querySelector("#ddc-feature-editor-cancel"),at=se.querySelector("#ddc-feature-editor-save"),mt=se.querySelector(".feature-editor-backdrop"),Ht=!!K.__filenameDirty,Nt=!!K.__yamlDirty;We&&(We.checked=K.enabled!==!1);let Kt=()=>{let Pt=String((ve==null?void 0:ve.value)||"").trim()||Qe(ee);if(!Ht||!String((xe==null?void 0:xe.value)||"").trim()){let Xt=Ie(Pt,ee,R+1);xe&&(xe.value=Xt)}if(!Nt){let Xt=nt(ee,Pt);Ne&&(Ne.value=Xt)}};ve==null||ve.addEventListener("input",Kt),xe==null||xe.addEventListener("input",()=>{Ht=!0}),Ne==null||Ne.addEventListener("input",()=>{Nt=!0});let zt=()=>{var Pt,Xt,ai;Ki();try{(ai=(Xt=(Pt=Ke==null?void 0:Ke.querySelector)==null?void 0:Pt.call(Ke,`[data-feature-index="${R}"] .feature-edit-btn`))==null?void 0:Xt.focus)==null||ai.call(Xt)}catch{}},Jt=()=>{var oi,Ei,bi,xi;let Pt=String((ve==null?void 0:ve.value)||"").trim()||Qe(ee),Xt=String((xe==null?void 0:xe.value)||"").trim()||Ie(Pt,ee,R+1),ai=String((Ne==null?void 0:Ne.value)||"").replace(/\r\n/g,`
`);if(((oi=We==null?void 0:We.checked)==null||oi)&&ai.trim())try{(bi=(Ei=window.jsyaml)==null?void 0:Ei.load)==null||bi.call(Ei,ai)}catch{(xi=this._toast)==null||xi.call(this,`Invalid YAML in ${Qe(ee).toLowerCase()} "${Pt}".`);return}Re[R]={...Re[R],name:Pt,filename:Xt,yaml:ai,enabled:!!(We!=null&&We.checked),feature_type:ee,__filenameDirty:Ht||!!Xt.trim(),__yamlDirty:Nt||!!ai.trim()},Ki(),Ri()};Ge==null||Ge.addEventListener("click",zt),Xe==null||Xe.addEventListener("click",zt),mt==null||mt.addEventListener("click",zt),at==null||at.addEventListener("click",Jt),se.addEventListener("keydown",Pt=>{Pt.key==="Escape"&&(Pt.preventDefault(),zt()),(Pt.metaKey||Pt.ctrlKey)&&Pt.key.toLowerCase()==="s"&&(Pt.preventDefault(),Jt())});try{(jt=ve==null?void 0:ve.focus)==null||jt.call(ve),(pi=ve==null?void 0:ve.select)==null||pi.call(ve)}catch{}},Ri=()=>{if(!Ke)return;if(Ke.innerHTML="",!Re.length){let K=document.createElement("div");K.className="package-empty",K.textContent="No features added yet. Use the quick buttons above to create helpers, automations, scripts, template sensors, or a misc package block.",Ke.appendChild(K);return}let R=document.createElement("div");R.className="feature-list",Re.forEach((K,ee)=>{let se=document.createElement("div"),ve=ot(K.feature_type)?K.feature_type:bt(K.yaml||""),xe=Ue(K.yaml||"");se.className="feature-card",se.dataset.featureIndex=String(ee),se.innerHTML=`
          <div class="feature-card-main">
            <div class="feature-card-head">
              <span class="feature-type-badge"><ha-icon icon="${this._safe(ze(ve))}"></ha-icon>${this._safe(Qe(ve))}</span>
              <span class="feature-card-title">${this._safe(K.name||Qe(ve))}</span>
            </div>
            <div class="feature-card-meta">
              <code>${this._safe(K.filename||Ie(K.name,ve,ee+1))}</code>
              <span>${K.enabled!==!1?"Enabled":"Disabled"}</span>
            </div>
            <div class="feature-card-summary">${this._safe(xe)}</div>
          </div>
          <div class="feature-card-actions">
            <label class="package-toggle">
              <span>Enabled</span>
              <ha-switch class="feature-enabled"></ha-switch>
            </label>
            <button type="button" class="mini-action feature-edit-btn">
              <ha-icon icon="mdi:pencil-outline"></ha-icon>
              <span>Edit</span>
            </button>
            <button type="button" class="icon-btn danger feature-delete-btn" title="Delete feature">
              <ha-icon icon="mdi:trash-can-outline"></ha-icon>
            </button>
          </div>
        `;let Ne=se.querySelector(".feature-enabled"),We=se.querySelector(".feature-edit-btn"),Ge=se.querySelector(".feature-delete-btn");Ne&&(Ne.checked=K.enabled!==!1),Ne==null||Ne.addEventListener("change",()=>{Re[ee].enabled=!!Ne.checked}),We==null||We.addEventListener("click",()=>dr(ee)),Ge==null||Ge.addEventListener("click",()=>{Re.splice(ee,1),Ri()}),R.appendChild(se)}),Ke.appendChild(R)},mi=ce($e.config);ke&&(ke.value=$e.config_url||""),Ee&&(Ee.checked=!!$e.pointer_events),St&&(St.value=String(this.tabsPosition||"top")),Rt();let ei=((ir=this._config)==null?void 0:ir.background_youtube)||{},lr=ei.url||ei.video_id||"";if(Fe&&(Fe.value=lr),je&&(je.value=(yr=ei.start)!=null?yr:""),et&&(et.value=(vr=ei.end)!=null?vr:""),ct&&(ct.checked=ei.mute!==!1),Pe&&(Pe.checked=ei.loop!==!1),He&&(He.value=String(ei.size||"cover")),ht&&(ht.value=String(ei.position||"center")),tt&&(tt.value=String(ei.attachment||"scroll")),_t){let R=Math.round((ei.opacity!=null?ei.opacity:1)*100);_t.value=String(R),Ct&&(Ct.textContent=R+"%"),_t.addEventListener("input",()=>{let K=Math.max(0,Math.min(100,parseInt(_t.value||"100",10)));Ct&&(Ct.textContent=K+"%")})}let Yi=()=>{let R=(J==null?void 0:J.value)||"none";Z&&(Z.style.display=R==="image"?"":"none"),he&&(he.style.display=R==="particles"?"":"none"),_e&&(_e.style.display=R==="youtube"?"":"none")};J==null||J.addEventListener("change",Yi),Yi();let zr=e.querySelector('[aria-labelledby="lbl-auto-resize"]'),Ui=e.querySelector('[aria-labelledby="lbl-mobile-optimize"]'),Or=e.querySelector('[aria-labelledby="lbl-mobile-dynamic-behavior"]'),zi=()=>{let R=(h==null?void 0:h.value)||"dynamic";zr&&(zr.style.display=R==="dynamic"?"":"none")},Gi=()=>{let K=((h==null?void 0:h.value)||"dynamic")==="dynamic",ee=String((_==null?void 0:_.value)||this.mobileDynamicBehavior||"native").toLowerCase();Or&&(Or.style.display=K?"":"none"),A&&(A.textContent=K?ee==="scale"?"Scale to fit keeps the current Dynamic behavior on mobile. Native canvas keeps scale at 1 and uses horizontal pan/scroll when needed.":"Native canvas keeps the mobile layout at scale 1 in Dynamic mode, so you can treat mobile differently and pan horizontally if needed.":"Stored, but only used while the container size mode is Dynamic.")},Ji=()=>{let K=((h==null?void 0:h.value)||"dynamic")==="dynamic";Ui&&(Ui.style.display=K?"":"none");let ee=String((_==null?void 0:_.value)||this.mobileDynamicBehavior||"native").toLowerCase();y&&(y.textContent=K?ee==="scale"?"In Dynamic mode, keeps narrow screens more readable by avoiding extreme downscaling, softening text shrink, and allowing horizontal pan when needed.":"When Mobile dynamic behavior is set to Native canvas, this only still affects other narrow Dynamic cases that continue to use scaling.":"Stored, but only used while the container size mode is Dynamic.")},hr=()=>{let R=(h==null?void 0:h.value)||"dynamic",K=R==="dynamic"||R==="auto";E&&(E.textContent=K?"Keeps text at its design size when the canvas scale changes. Best suited for Dynamic and Auto.":"Stored, but only used while the container size mode is Dynamic or Auto.")};if(zi(),Gi(),Ji(),hr(),h==null||h.addEventListener("change",zi),h==null||h.addEventListener("change",Gi),h==null||h.addEventListener("change",Ji),h==null||h.addEventListener("change",hr),_==null||_.addEventListener("change",Gi),_==null||_.addEventListener("change",Ji),i&&(i.checked=!!this.autoResizeCards),n&&(n.value=String(this.gridSize||100)),o&&(o.checked=!!this.animateCards),c&&(c.checked=!!this.hideHaHeader),l&&(l.checked=!!this.hideHaSidebar),g&&(g.checked=!!this.dragLiveSnap),u&&(u.checked=!!this.autoSave),m&&(m.value=String((rr=this.autoSaveDebounce)!=null?rr:800)),h&&(h.value=String(this.containerSizeMode||"dynamic")),zi(),_&&(_.value=String(this.mobileDynamicBehavior||"native")),Gi(),Ji(),hr(),b&&(b.checked=!!this.optimizeForMobile),T&&(T.checked=!!this.doNotResizeText),M&&(M.checked=!!this.outerGridBuffer),O&&(O.value=String(this.containerPresetOrient||"auto")),C&&(C.checked=!!this.disableOverlap),q&&(q.checked=!!this.dashboardThemeEnabled),j&&(j.value=String(this.dashboardTheme||"")),U&&(U.checked=!!this.dashboardThemeOverrideAllDesign),vi(),te&&(te.value=String(this.containerBackground||"")),re&&(re.checked=!!this.applyBackgroundToPage),le&&(le.value=String(this.cardBackground||"")),Ae){let R=((hi=(Wr=this._config)==null?void 0:Wr.background_image)!=null?hi:(Kr=this._config)==null?void 0:Kr.bg_image)||{};Ae.value=R.src?String(R.src):""}if(N&&(N.checked=!!this.debug),ue&&(ue.checked=!!this.cardShadowEnabled),Se&&(Se.value=String(ae.repeat||"no-repeat")),B&&(B.value=String(ae.size||"cover")),p&&(p.value=String(ae.position||"center center")),x&&(x.value=String(ae.attachment||"scroll")),S){let R=Math.round((ae.opacity!=null?ae.opacity:1)*100);S.value=String(R),z&&(z.textContent=`${R}%`),S.addEventListener("input",()=>{let K=Math.max(0,Math.min(100,parseInt(S.value||"100",10)));z.textContent=`${K}%`,this.style.setProperty("--ddc-bg-opacity",String(K/100))})}if(ue&&ue.addEventListener("change",()=>{var R;try{this.cardShadowEnabled=!!ue.checked,(R=this._applyDashboardThemeStyling_)==null||R.call(this)}catch{}}),q==null||q.addEventListener("change",()=>{vi(),ci()}),j==null||j.addEventListener("change",()=>{vi(),ci()}),U==null||U.addEventListener("change",()=>{vi(),ci()}),W&&(W.checked=!!this.screenSaverEnabled,W.addEventListener("change",()=>{this.screenSaverEnabled=W.checked,typeof this._updateScreensaverSettings=="function"&&this._updateScreensaverSettings()})),G){let R=this.screenSaverDelay!=null?Number(this.screenSaverDelay):3e5,K=Math.round(R/6e4);(!Number.isFinite(K)||K<1)&&(K=5),K>60&&(K=60),G.value=String(K),V&&(V.textContent=`${K} min`),G.addEventListener("input",()=>{let ee=parseInt(G.value||"1",10),se=Math.max(1,Math.min(60,isNaN(ee)?1:ee));V&&(V.textContent=`${se} min`),this.screenSaverDelay=se*6e4,typeof this._updateScreensaverSettings=="function"&&this._updateScreensaverSettings()})}try{if($){let R=this.config&&this.config.edit_mode_pin!=null?String(this.config.edit_mode_pin):"",K=this.editModePin!=null?String(this.editModePin):"";$.value=K||R||"",$.disabled=!1,$.readOnly=!1}}catch{}let di=e.querySelector("#ddc-setting-gridSize"),Dr=e.querySelector("#ddc-grid-out"),_i=e.querySelector("#ddc-grid-demo"),Oi=e.querySelector("#ddc-grid-meta"),ti=e.querySelector("#ddc-setting-gridSizeInput"),Xi=()=>{if(!_i||!Oi)return;let R=_i.getBoundingClientRect(),K=Math.max(1,parseInt(di.value||"100",10)),ee=Math.max(1,Math.floor(R.width/K)),se=Math.max(1,Math.floor(R.height/K));Oi.innerHTML=`
        <ha-icon icon="mdi:grid"></ha-icon>
        <span>${K}px \xB7 ${ee}\xD7${se}</span>
      `},Si=()=>{let R=Math.max(1,parseInt(di.value||"100",10));Dr&&(Dr.textContent=`${R} px`),_i&&_i.style.setProperty("--g",`${R}px`),Xi()};if(di&&(di.value||(di.value=String(this.gridSize||100)),di.addEventListener("input",()=>{ti&&(ti.value=di.value),Si()}),ti&&(ti.value=di.value),Si()),ti&&ti.addEventListener("input",()=>{let R=Math.max(1,Math.min(400,parseInt(ti.value||"100",10)));di.value=String(R),Si()}),_i){let R=new ResizeObserver(()=>Xi());R.observe(_i),(Yr=(nr=this.__ddcGridRO)==null?void 0:nr.disconnect)==null||Yr.call(nr),this.__ddcGridRO=R}e.querySelectorAll(".chip").forEach(R=>{R.addEventListener("click",()=>{var ve,xe;e.querySelectorAll(".chip").forEach(Ne=>Ne.setAttribute("aria-pressed","false")),R.setAttribute("aria-pressed","true");let K=parseInt(R.dataset.w,10),ee=parseInt(R.dataset.h,10),se=e.querySelector("#ddc-setting-sizeMode");se.value="fixed_custom",(xe=(ve=typeof h!="undefined"&&h)==null?void 0:ve.dispatchEvent)==null||xe.call(ve,new Event("change")),setTimeout(()=>{var Ge,Xe,at;(Ge=e.querySelector("#ddc-setting-custW"))==null||Ge.setAttribute("value",String(K)),(at=(Xe=e.querySelector("#ddc-setting-custW"))==null?void 0:Xe.dispatchEvent)==null||at.call(Xe,new Event("change"));let Ne=e.querySelector("#ddc-setting-custW");Ne&&(Ne.value=String(K));let We=e.querySelector("#ddc-setting-custH");We&&(We.value=String(ee))},0)})});let fi=["#ffffff","#f5f7fa","#ebeff5","#121212","#1f2937","#334155","#ff6b6b","#fcbf49","#ffe66d","#4ecdc4","#1a535c","#6b5b95","#f6f5f5","#00aaff","#ff00ff","#00ff00","var(--card-background-color)","var(--ha-card-background)","transparent","rgba(255,255,255,0.4)","rgba(0,0,0,0.3)","rgba(0,128,255,0.3)","rgba(255,0,128,0.3)","rgba(255,255,0,0.3)","rgba(0,255,128,0.3)"],Wt=R=>R[Math.floor(Math.random()*R.length)],Lt=(R,K,ee=0)=>{let se=R+Math.random()*(K-R);return Number(se.toFixed(ee))},Ir=["#0f172a","#1e293b","#334155","#0f766e","#14532d","#7c2d12","#7f1d1d","#581c87","#1d4ed8","#065f46","#111827","#3f3f46","rgba(255,255,255,0.24)","rgba(15,23,42,0.56)","rgba(249,115,22,0.28)","rgba(20,184,166,0.28)","rgba(59,130,246,0.28)","rgba(244,63,94,0.24)"],Nr=["#111827","#1f2937","#0f172a","#172033","#1a2332","#202938","rgba(15,23,42,0.72)","rgba(30,41,59,0.78)","rgba(17,24,39,0.84)","rgba(8,47,73,0.72)","rgba(49,46,129,0.7)","rgba(69,10,10,0.7)"],pr=R=>{let K=Wt(R),ee=Wt(R);K===ee&&(ee=Wt(R.filter(xe=>xe!==K)||R));let se=Math.round(Lt(110,320));return(Math.random()>.45?"linear":"radial")==="linear"?`linear-gradient(${se}deg, ${K}, ${ee})`:`radial-gradient(circle at ${Math.round(Lt(20,80))}% ${Math.round(Lt(18,82))}%, ${K}, ${ee})`},Qi=(R="container")=>{let K=R==="card"?Nr:Ir;return Math.random()>.45?pr(K):Wt(K)},Br=(R,K,ee)=>{R&&R.querySelectorAll(K).forEach(se=>{let ve=(se.title||"").trim()===String(ee).trim();se.setAttribute("aria-pressed",ve?"true":"false")})},Di=({input:R,picker:K,value:ee,kind:se})=>{var ve;if(R){if(R.value=ee,K){let xe=(String(ee||"").match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)||[])[0];xe&&(K.value=xe)}Br(R.closest(".color-stack"),".swatch",ee),Br(R.closest(".color-stack"),".gradient",ee);try{R.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}catch{}try{se==="card"?this.cardBackground=ee:this.containerBackground=ee,(ve=this._applyDashboardThemeStyling_)==null||ve.call(this)}catch{}}},an=()=>{let R=["#ffffff","#f8fafc","#38bdf8","#22d3ee","#34d399","#f59e0b","#fb7185","#c084fc","#facc15"],K=["none","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left"];return{particles:{number:{value:Math.round(Lt(16,72)),density:{enable:!0,value_area:Math.round(Lt(700,1600))}},color:{value:Wt(R)},shape:{type:Wt(["circle","triangle","edge","star","polygon"])},opacity:{value:Lt(.14,.55,2),random:!0,anim:{enable:Math.random()>.6,speed:Lt(.2,1.4,2),opacity_min:Lt(.05,.2,2),sync:!1}},size:{value:Lt(1.6,5.4,1),random:!0,anim:{enable:Math.random()>.72,speed:Lt(1.5,8.5,1),size_min:Lt(.4,1.5,1),sync:!1}},line_linked:{enable:Math.random()>.45,distance:Math.round(Lt(90,220)),color:Wt(R),opacity:Lt(.08,.28,2),width:Lt(.6,1.6,1)},move:{enable:!0,speed:Lt(.3,2.4,2),direction:Wt(K),random:Math.random()>.55,straight:Math.random()>.8,out_mode:"out"}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!!(Ee!=null&&Ee.checked),mode:Wt(["repulse","grab","bubble"])},onclick:{enable:!!(Ee!=null&&Ee.checked),mode:Wt(["push","repulse"])},resize:!0},modes:{repulse:{distance:Math.round(Lt(70,140))},push:{particles_nb:Math.round(Lt(2,6))},bubble:{distance:Math.round(Lt(100,180)),size:Lt(3,7,1),duration:Lt(1.2,2.8,1),opacity:Lt(.25,.6,2)},grab:{distance:Math.round(Lt(110,170)),line_linked:{opacity:Lt(.18,.45,2)}}}},retina_detect:!1}},Fr=(R,K,ee)=>{let se=e.querySelector(R),ve=e.querySelector(K),xe=e.querySelector(ee);!se||!ve||(se.innerHTML="",fi.forEach((Ne,We)=>{let Ge=document.createElement("button");Ge.type="button",Ge.className="swatch",Ge.title=Ne,Ge.style.background=Ne.startsWith("var(")?getComputedStyle(this).getPropertyValue(Ne.slice(4,-1)).trim()||"#fff":Ne,Ge.setAttribute("aria-pressed","false"),Ge.addEventListener("click",()=>{se.querySelectorAll(".swatch").forEach(Xe=>Xe.setAttribute("aria-pressed","false")),Ge.setAttribute("aria-pressed","true"),ve.value=Ne,/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(Ne)&&xe&&(xe.value=Ne);try{ve.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}catch{}}),se.appendChild(Ge),String(ve.value).trim()===Ne&&Ge.setAttribute("aria-pressed","true")}))};Fr("#ddc-swatches-containerBg","#ddc-setting-containerBg","#ddc-color-containerBg"),Fr("#ddc-swatches-cardBg","#ddc-setting-cardBg","#ddc-color-cardBg"),[["#ddc-color-containerBg","#ddc-setting-containerBg"],["#ddc-color-cardBg","#ddc-setting-cardBg"]].forEach(([R,K])=>{let ee=e.querySelector(R),se=e.querySelector(K);if(!ee||!se)return;let ve=(String(se.value||"").match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)||[])[0];ve&&(ee.value=ve),ee.addEventListener("input",()=>{se.value=ee.value}),se.addEventListener("change",()=>{let xe=(String(se.value||"").match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)||[])[0];xe&&(ee.value=xe)})});let Tt=e.querySelector("#ddc-setting-bgImg"),ur=e.querySelector("#ddc-bg-thumb"),Zi=R=>{ur&&(ur.style.backgroundImage=R?`url(${R})`:"none")},ni=()=>{var R,K;try{let ee=((Tt==null?void 0:Tt.value)||"").trim(),se=ee?{...this._config&&this._config.background_image||{},src:ee,repeat:(Se==null?void 0:Se.value)||"no-repeat",size:(B==null?void 0:B.value)||"cover",position:(p==null?void 0:p.value)||"center center",attachment:(x==null?void 0:x.value)||"scroll",opacity:S?Math.max(0,Math.min(100,parseInt(S.value||"100",10)))/100:1}:null;if(se)this._config={...this._config||{},background_mode:((J==null?void 0:J.value)||"none")==="image"?"image":((R=this._config)==null?void 0:R.background_mode)||"image",background_image:se};else if(((J==null?void 0:J.value)||"none")==="image"){let{background_image:ve,...xe}=this._config||{};this._config=xe}(K=this._applyBackgroundFromConfig)==null||K.call(this)}catch{}};ye&&(ye.disabled=!(this.hass&&typeof this.hass.callWS=="function"),ye.addEventListener("click",async()=>{await this._openMediaLibraryBrowser_(async R=>{if(Tt){Tt.value=R,Zi(R),ni();try{Tt.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),Tt.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}catch{}}})})),Tt!=null&&Tt.value&&Zi(Tt.value),Tt==null||Tt.addEventListener("input",()=>{let R=(Tt.value||"").trim();Zi(R||""),((J==null?void 0:J.value)||"none")==="image"&&ni()}),Tt==null||Tt.addEventListener("change",ni),Se==null||Se.addEventListener("change",()=>{((J==null?void 0:J.value)||"none")==="image"&&ni()}),B==null||B.addEventListener("change",()=>{((J==null?void 0:J.value)||"none")==="image"&&ni()}),p==null||p.addEventListener("change",()=>{((J==null?void 0:J.value)||"none")==="image"&&ni()}),x==null||x.addEventListener("change",()=>{((J==null?void 0:J.value)||"none")==="image"&&ni()}),S==null||S.addEventListener("input",()=>{((J==null?void 0:J.value)||"none")==="image"&&ni()}),(Ur=e.querySelector("#ddc-clear-bg"))==null||Ur.addEventListener("click",()=>{var ee,se;Tt&&(Tt.value=""),Zi("");let{background_image:R,...K}=this._config||{};this._config=K,this.style.setProperty("--ddc-bg-image","none"),(ee=this._applyBackgroundFromConfig)==null||ee.call(this),(se=this._persistThisCardConfigToStorage_)==null||se.call(this)}),e.addEventListener("click",R=>{R.target===e&&(R.stopPropagation(),li())});let on=R=>{R.key==="Escape"&&(R.stopPropagation(),li())};document.addEventListener("keydown",on,{once:!0}),setTimeout(()=>{var R;return(R=e.querySelector("#ddc-setting-gridSize"))==null?void 0:R.focus()},0);try{let R=e.querySelector("#ddc-setting-sizeExtras"),K=()=>{var se,ve;if(!R)return;R.innerHTML="";let ee=(h==null?void 0:h.value)||"dynamic";if(ee==="fixed_custom"){let xe=document.createElement("label");xe.style.display="flex",xe.style.flexDirection="column",xe.style.fontSize=".95rem",xe.style.marginBottom="10px";let Ne=document.createElement("span");Ne.textContent="Custom width (px)",Ne.style.marginBottom="4px";let We=document.createElement("input");We.type="number",We.id="ddc-setting-custW",We.min="100",We.max="10000",We.step="10",We.style.padding="6px",We.style.border="1px solid var(--divider-color,rgba(0,0,0,.3))",We.style.borderRadius="6px",We.value=String((se=this.containerFixedWidth)!=null?se:800),xe.appendChild(Ne),xe.appendChild(We);let Ge=document.createElement("label");Ge.style.display="flex",Ge.style.flexDirection="column",Ge.style.fontSize=".95rem",Ge.style.marginBottom="10px";let Xe=document.createElement("span");Xe.textContent="Custom height (px)",Xe.style.marginBottom="4px";let at=document.createElement("input");at.type="number",at.id="ddc-setting-custH",at.min="100",at.max="10000",at.step="10",at.style.padding="6px",at.style.border="1px solid var(--divider-color,rgba(0,0,0,.3))",at.style.borderRadius="6px",at.value=String((ve=this.containerFixedHeight)!=null?ve:600),Ge.appendChild(Xe),Ge.appendChild(at),R.appendChild(xe),R.appendChild(Ge)}else if(ee==="preset"){let xe=document.createElement("label");xe.style.display="flex",xe.style.flexDirection="column",xe.style.fontSize=".95rem",xe.style.marginBottom="10px";let Ne=document.createElement("span");Ne.textContent="Preset size",Ne.style.marginBottom="4px";let We=document.createElement("select");We.id="ddc-setting-preset",We.style.padding="6px",We.style.border="1px solid var(--divider-color,rgba(0,0,0,.3))",We.style.borderRadius="6px",(typeof r!="undefined"&&r._sizePresets?r._sizePresets():[]).forEach(Xe=>{let at=document.createElement("option");at.value=Xe.key,at.textContent=`${Xe.label||Xe.key} (${Xe.w}\xD7${Xe.h})`,We.appendChild(at)}),We.value=String(this.containerPreset||"fhd"),xe.appendChild(Ne),xe.appendChild(We),R.appendChild(xe)}};K(),h==null||h.addEventListener("change",K)}catch(R){console.warn("[drag-and-drop-card] Failed to build container size extras",R)}let Ii=()=>{var K,ee,se,ve,xe;return((xe=(ve=(ee=(K=this._config)==null?void 0:K.options)==null?void 0:ee.tabs)!=null?ve:(se=this._config)==null?void 0:se.tabs)!=null?xe:[]).map(Ne=>{var We,Ge,Xe,at,mt,Ht,Nt;return typeof Ne=="string"?{id:Ne,label:Ne,icon:"",label_mode:"both",__raw:{id:Ne,label:Ne}}:{id:(Xe=(Ge=(We=Ne.id)!=null?We:Ne.key)!=null?Ge:Ne.label)!=null?Xe:"tab",label:(mt=(at=Ne.label)!=null?at:Ne.id)!=null?mt:"Tab",icon:(Ht=Ne.icon)!=null?Ht:"",label_mode:(Nt=Ne.label_mode)!=null?Nt:"both",__raw:Ne}})},Ci=async(R,K)=>{var ve,xe,Ne,We,Ge,Xe,at;let ee=R.map(mt=>({...mt.__raw,id:mt.id,label:mt.label,icon:mt.icon||"",label_mode:mt.label_mode||"both"})),se=(xe=K!=null?K:(ve=ee[0])==null?void 0:ve.id)!=null?xe:"default";(Ne=this._config)!=null&&Ne.options?this._config.options={...this._config.options||{},tabs:ee,default_tab:se}:this._config.tabs=ee,this._config.tabs=ee,this._config.default_tab=se,this.tabs=ee.map(mt=>{var Ht,Nt,Kt,zt,Jt;return{...mt,id:(Kt=(Nt=(Ht=mt.id)!=null?Ht:mt.key)!=null?Nt:mt.label)!=null?Kt:"tab",label:(Jt=(zt=mt.label)!=null?zt:mt.id)!=null?Jt:"Tab",icon:mt.icon||"",label_mode:mt.label_mode||"both"}}),this.defaultTab=se,this.tabs.some(mt=>mt.id===this.activeTab)||(this.activeTab=this.defaultTab);try{(We=this._renderTabs)==null||We.call(this)}catch{}try{(Ge=this._applyActiveTab)==null||Ge.call(this)}catch{}try{(Xe=this._applyVisibility_)==null||Xe.call(this)}catch{}try{await this._persistThisCardConfigToStorage_()}catch(mt){console.warn("[drag-and-drop-card] Could not persist tabs",mt)}(at=this.requestUpdate)==null||at.call(this)},Ni=()=>{var R,K,ee,se;return((K=(R=this._config)==null?void 0:R.options)==null?void 0:K.default_tab)||((ee=this._config)==null?void 0:ee.default_tab)||((se=Ii()[0])==null?void 0:se.id)},gr=e.querySelector("#ddc-tabs-list"),er=()=>{let R=Ii(),K=Ni();if(gr.innerHTML="",!R.length){let ee=document.createElement("div");ee.className="hint",ee.textContent="No tabs yet. Add one below.",gr.appendChild(ee);return}R.forEach((ee,se)=>{let ve=document.createElement("div");ve.className="tab-row";let xe=document.createElement("input");xe.type="radio",xe.name="ddc-default-tab",xe.value=ee.id,xe.checked=ee.id===K,xe.title="Set as default tab",xe.addEventListener("change",async()=>{await Ci(R,ee.id)});let Ne=document.createElement("div");Ne.className="tab-name";let We=document.createElement("ha-icon");We.setAttribute("icon",ee.icon||"mdi:tab");let Ge=document.createElement("input");Ge.value=ee.icon||"",Ge.placeholder="mdi:home",Ge.title="Tab icon (mdi:...)",Ge.style.width="160px",Ge.addEventListener("change",async()=>{ee.icon=Ge.value.trim(),We.setAttribute("icon",ee.icon||"mdi:tab"),R[se]=ee,await Ci(R,K)});let Xe=document.createElement("input");Xe.value=ee.label,Xe.placeholder="Tab name",Xe.style.flex="1",Xe.addEventListener("change",async()=>{ee.label=Xe.value.trim()||ee.id,R[se]=ee,await Ci(R,K)});let at=document.createElement("div");at.className="tab-icon-wrap",at.appendChild(We),at.appendChild(Ge),Ne.appendChild(at),Ne.appendChild(Xe);let mt=document.createElement("div");mt.className="mode-chips";let Ht=(zt,Jt)=>{let jt=document.createElement("button");return jt.type="button",jt.className="chip",jt.textContent=Jt,jt.setAttribute("aria-pressed",String((ee.label_mode||"both")===zt)),jt.addEventListener("click",async()=>{mt.querySelectorAll(".chip").forEach(pi=>pi.setAttribute("aria-pressed","false")),jt.setAttribute("aria-pressed","true"),ee.label_mode=zt,R[se]=ee,await Ci(R,K)}),jt};mt.appendChild(Ht("icon","Icon")),mt.appendChild(Ht("text","Text")),mt.appendChild(Ht("both","Both"));let Nt=document.createElement("div");Nt.className="tab-actions";let Kt=document.createElement("button");Kt.className="icon-btn danger",Kt.innerHTML='<ha-icon icon="mdi:trash-can-outline"></ha-icon>',Kt.title="Delete tab",Kt.addEventListener("click",async()=>{var jt,pi;let zt=Ii().filter(Pt=>Pt.id!==ee.id),Jt=K;ee.id===K&&(Jt=(jt=zt[0])==null?void 0:jt.id),await Ci(zt,Jt);try{(pi=this._reassignCardsToTab_)==null||pi.call(this,ee.id,Jt)}catch{}er()}),Nt.appendChild(mt),Nt.appendChild(Kt),ve.appendChild(xe),ve.appendChild(Ne),ve.appendChild(Nt),gr.appendChild(ve)})};er(),Zt(),Ri(),kt(""),De==null||De.addEventListener("click",Wi),(_r=e.querySelector("#ddc-add-tab-btn"))==null||_r.addEventListener("click",async()=>{let R=e.querySelector("#ddc-new-tab-name"),K=((R==null?void 0:R.value)||"").trim();if(!K)return;let ee=Ii(),se=K.replace(/\s+/g,"-").toLowerCase(),ve=2;for(;ee.some(xe=>xe.id===se);)se=`${se}-${ve++}`;ee.push({id:se,label:K,icon:"",label_mode:"both",__raw:{id:se,label:K}}),await Ci(ee,Ni()),R.value="",er()}),xt==null||xt.addEventListener("change",()=>{ge=!!xt.checked,ge&&!ie.length&&(ie=[Oe(this._defaultDashboardLayer_(),0)]),Zt()});let mr=()=>{if(!ge)return;let R=String((oe==null?void 0:oe.value)||"").trim();if(!R)return;let K=this._normalizeLayerId_(R,`layer-${ie.length+1}`),ee=K,se=2,ve=new Set(ie.map(xe=>String(xe.id||"")));for(;ve.has(ee);)ee=`${K}-${se++}`;ie.push({id:ee,label:R,icon:"mdi:layers-outline",color:"#60a5fa",default_active:!0}),oe&&(oe.value=""),Zt()};pe==null||pe.addEventListener("click",mr),oe==null||oe.addEventListener("keydown",R=>{R.key==="Enter"&&(R.preventDefault(),mr())}),Ve.forEach(R=>{R.addEventListener("click",()=>{let K=String(R.dataset.featureType||"misc");Re.push(dt(K)),Ri(),dr(Re.length-1)})});let Hr=e.querySelector("#ddc-clear-bg");Hr&&Hr.addEventListener("click",()=>{var ee,se,ve;let R=e.querySelector("#ddc-setting-bgImg"),K=e.querySelector("#ddc-bg-thumb");R&&(R.value=""),K&&(K.style.backgroundImage="none");try{if((ee=this._config)!=null&&ee.background_image){let{background_image:xe,...Ne}=this._config;this._config=Ne}(se=this._applyBackgroundFromConfig)==null||se.call(this),(ve=this._persistThisCardConfigToStorage_)==null||ve.call(this)}catch(xe){console.warn("[drag-and-drop-card] Failed to clear background image",xe)}});let $r=["linear-gradient(135deg, #1e3a8a, #0ea5e9)","linear-gradient(135deg, #111827, #1f2937)","linear-gradient(135deg, #0f766e, #22c55e)","linear-gradient(135deg, #7c3aed, #06b6d4)","linear-gradient(135deg, #f97316, #f43f5e)","linear-gradient(135deg, #eab308, #22d3ee)","radial-gradient(circle at 30% 20%, #2dd4bf, #1e293b)","radial-gradient(circle at 70% 80%, #f59e0b, #7c3aed)"],fr=(R,K)=>{let ee=e.querySelector(R),se=e.querySelector(K);!ee||!se||(ee.innerHTML="",$r.forEach(ve=>{let xe=document.createElement("button");xe.type="button",xe.className="gradient",xe.style.background=ve,xe.setAttribute("aria-pressed","false"),xe.title=ve,xe.addEventListener("click",()=>{var Ne;ee.querySelectorAll(".gradient").forEach(We=>We.setAttribute("aria-pressed","false")),xe.setAttribute("aria-pressed","true"),se.value=ve;try{String(K||"").toLowerCase().includes("cardbg")?this.cardBackground=ve:this.containerBackground=ve,(Ne=this._applyDashboardThemeStyling_)==null||Ne.call(this)}catch{}}),ee.appendChild(xe),String(se.value).trim()===ve&&xe.setAttribute("aria-pressed","true")}))};fr("#ddc-gradients-containerBg","#ddc-setting-containerBg"),fr("#ddc-gradients-cardBg","#ddc-setting-cardBg");let qr=()=>{var R,K;mi=an(),J&&(J.value="particles"),ke&&(ke.value=""),Yi(),this._config={...this._config||{},background_mode:"particles",background_particles:{...((R=this._config)==null?void 0:R.background_particles)||{},config_url:void 0,config:ce(mi),pointer_events:!!(Ee!=null&&Ee.checked)}},(K=this._applyBackgroundFromConfig)==null||K.call(this)};me==null||me.addEventListener("click",()=>{Di({input:te,picker:e.querySelector("#ddc-color-containerBg"),value:Qi("container"),kind:"container"})}),de==null||de.addEventListener("click",()=>{Di({input:le,picker:e.querySelector("#ddc-color-cardBg"),value:Qi("card"),kind:"card"})}),Le==null||Le.addEventListener("click",()=>{Di({input:te,picker:e.querySelector("#ddc-color-containerBg"),value:Qi("container"),kind:"container"}),Di({input:le,picker:e.querySelector("#ddc-color-cardBg"),value:Qi("card"),kind:"card"}),qr()}),Ce==null||Ce.addEventListener("click",()=>{qr()}),Ee==null||Ee.addEventListener("change",()=>{var R,K;((J==null?void 0:J.value)||"none")==="particles"&&(this._config={...this._config||{},background_mode:"particles",background_particles:{...((R=this._config)==null?void 0:R.background_particles)||{},config_url:((ke==null?void 0:ke.value)||"").trim()||void 0,config:ce(mi)||void 0,pointer_events:!!Ee.checked}},(K=this._applyBackgroundFromConfig)==null||K.call(this))}),te&&te.addEventListener("input",()=>{var K;let R=(te.value||"").trim();try{this.containerBackground=R,(K=this._applyDashboardThemeStyling_)==null||K.call(this)}catch{}}),re&&re.addEventListener("change",()=>{var R;try{this.applyBackgroundToPage=!!re.checked,(R=this._applyBackgroundFromConfig)==null||R.call(this)}catch{}}),le&&le.addEventListener("input",()=>{var K;let R=(le.value||"").trim();try{this.cardBackground=R,(K=this._applyDashboardThemeStyling_)==null||K.call(this)}catch{}});let li=()=>{var R,K;try{Ki()}catch{}try{(K=(R=this.__ddcGridRO)==null?void 0:R.disconnect)==null||K.call(R),this.__ddcGridRO=null}catch{}try{e.remove()}catch{}this.__settingsModal===e&&(this.__settingsModal=null)};(xr=e.querySelector("#ddc-settings-close"))==null||xr.addEventListener("click",R=>{R.stopPropagation(),li()}),(Ft=e.querySelector("#ddc-settings-cancel"))==null||Ft.addEventListener("click",R=>{R.stopPropagation(),li()}),(Gr=e.querySelector("#ddc-settings-save"))==null||Gr.addEventListener("click",async R=>{var d,f,v,k,L,P,D,Y,I,Q,ne,be,fe,we,qe,Be,Ye,lt,ft,it,pt,$t,Et,Yt,ii,si,$i,Li,On;R.stopPropagation();let K=(h==null?void 0:h.value)||"dynamic",ee=K==="dynamic"?i?!!i.checked:!0:!!(i!=null&&i.checked),se=parseInt((n==null?void 0:n.value)||"0",10),ve=!!(o!=null&&o.checked),xe=!!(c!=null&&c.checked),Ne=!!(l!=null&&l.checked),We=!!(g!=null&&g.checked),Ge=!!(u!=null&&u.checked),Xe=parseInt((m==null?void 0:m.value)||"0",10),at=(O==null?void 0:O.value)||"auto",mt=!!(b!=null&&b.checked),Ht=String((_==null?void 0:_.value)||this.mobileDynamicBehavior||"native").toLowerCase()==="scale"?"scale":"native",Nt=!!(T!=null&&T.checked),Kt=!!(M!=null&&M.checked),zt=!!(C!=null&&C.checked),Jt=!!(q!=null&&q.checked),jt=String((j==null?void 0:j.value)||"").trim(),pi=!!(U!=null&&U.checked),Pt=((te==null?void 0:te.value)||"").trim(),Xt=!!(re!=null&&re.checked),ai=((le==null?void 0:le.value)||"").trim(),oi=((Ae==null?void 0:Ae.value)||"").trim(),Ei=!!(N!=null&&N.checked),bi=(($==null?void 0:$.value)||"").trim(),xi=(J==null?void 0:J.value)||"none",Fi=((ke==null?void 0:ke.value)||"").trim(),sn=!!(Ee!=null&&Ee.checked),cn=((Fe==null?void 0:Fe.value)||"").trim(),wr=parseInt((je==null?void 0:je.value)||"",10),Ai=parseInt((et==null?void 0:et.value)||"",10),ui=!!(ct!=null&&ct.checked),kr=!!(Pe!=null&&Pe.checked),Hi=(He==null?void 0:He.value)||"cover",dn=(ht==null?void 0:ht.value)||"center",Sr=_t?Math.max(0,Math.min(100,parseInt(_t.value||"100",10)))/100:1,Cr=(tt==null?void 0:tt.value)||"scroll",Er=String((St==null?void 0:St.value)||this.tabsPosition||"top").toLowerCase(),ln=Er==="left"||Er==="bottom"?Er:"top",Jr=!!(xt!=null&&xt.checked),Ar=Te(Jr?ie.length?ie:[Oe(this._defaultDashboardLayer_(),0)]:ie),Xr=this._normalizeDashboardPackages_(Re.map((qt,wi)=>({id:String(qt.id||`package_${wi+1}`).trim()||`package_${wi+1}`,name:String(qt.name||`Package ${wi+1}`).trim()||`Package ${wi+1}`,filename:String(qt.filename||"").trim(),yaml:String(qt.yaml||"").replace(/\r\n/g,`
`),enabled:qt.enabled!==!1,feature_type:ot(qt.feature_type)?qt.feature_type:"misc"})));for(let qt of Xr){let wi=String(qt.yaml||"").trim();if(!(!qt.enabled||!wi))try{(f=(d=window.jsyaml)==null?void 0:d.load)==null||f.call(d,wi)}catch(un){console.warn("[drag-and-drop-card] Invalid package YAML",qt.name,un),(v=this._toast)==null||v.call(this,`Invalid YAML in feature "${qt.name||qt.filename||qt.id}".`);return}}let hn=!!(ue!=null&&ue.checked),pn=!!(W!=null&&W.checked),s=parseInt((G==null?void 0:G.value)||"1",10),a=(Number.isFinite(s)?s:1)*6e4;try{if(this.autoResizeCards=ee,!this.autoResizeCards&&this.__ddcResizeObs){try{this.__ddcResizeObs.disconnect()}catch{}this.__ddcResizeObs=null,this.__ddcOnWinResize&&(window.removeEventListener("resize",this.__ddcOnWinResize),this.__ddcOnWinResize=null)}if(this.autoResizeCards&&!this.__ddcResizeObs){this.__ddcResizeObs=new ResizeObserver(()=>{var At;return(At=this._applyAutoScale)==null?void 0:At.call(this)});try{this.__ddcResizeObs.observe(this)}catch{}try{this.__ddcResizeObs.observe(this.cardContainer)}catch{}this.__ddcOnWinResize=this.__ddcOnWinResize||(()=>{var At,Ot;(At=this._syncResponsiveProfileForViewport_)==null||At.call(this),(Ot=this._applyAutoScale)==null||Ot.call(this)}),window.addEventListener("resize",this.__ddcOnWinResize)}this.autoResizeCards||String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(k=this._startScaleWatch)==null||k.call(this):(L=this._stopScaleWatch)==null||L.call(this),(P=this._applyAutoScale)==null||P.call(this),!isNaN(se)&&se>0&&se!==this.gridSize&&(this.gridSize=se,(D=this._applyGridVars)==null||D.call(this),(Y=this._resizeContainer)==null||Y.call(this)),this.cardShadowEnabled=hn,this.editModePin=bi,this._config={...this._config||{},edit_mode_pin:bi};let qt=We!==this.dragLiveSnap;this.dragLiveSnap=We,qt&&((I=this._initInteract)==null||I.call(this)),this.autoSave=Ge,!isNaN(Xe)&&Xe>0&&(this.autoSaveDebounce=Xe);let wi=K!==this.containerSizeMode,un=Kt!==!!this.outerGridBuffer;this.containerSizeMode=K,this.optimizeForMobile=mt,this.mobileDynamicBehavior=Ht,this.doNotResizeText=Nt,this.outerGridBuffer=Kt,this.layersEnabled=Jr,this.dashboardThemeEnabled=Jt,this.dashboardTheme=jt,this.dashboardThemeOverrideAllDesign=pi;let Wa=at!==this.containerPresetOrient;if(this.containerPresetOrient=at,(wi||Wa||un)&&((Q=this._resizeContainer)==null||Q.call(this)),(ne=this._syncViewportPreviewUI_)==null||ne.call(this),K==="fixed_custom"){let At=parseInt(((be=e.querySelector("#ddc-setting-custW"))==null?void 0:be.value)||"0",10),Ot=parseInt(((fe=e.querySelector("#ddc-setting-custH"))==null?void 0:fe.value)||"0",10);!isNaN(At)&&At>0&&(this.containerFixedWidth=At),!isNaN(Ot)&&Ot>0&&(this.containerFixedHeight=Ot),(we=this._resizeContainer)==null||we.call(this)}else if(K==="preset"){let At=(qe=e.querySelector("#ddc-setting-preset"))==null?void 0:qe.value;At&&(this.containerPreset=At),(Be=this._resizeContainer)==null||Be.call(this)}if((Ye=this._applyAutoScale)==null||Ye.call(this),this.tabsPosition=ln,this._config=this._config||{},this._config.options&&(this._config.options={...this._config.options||{},tabs_position:this.tabsPosition,layers_enabled:!!this.layersEnabled,layers:this._cloneJson_(Ar)}),this._config.tabs_position=this.tabsPosition,this._config.layers_enabled=!!this.layersEnabled,this._config.layers=this._cloneJson_(Ar),this._setDashboardLayers_(Ar,{refresh:!0,persist:!0}),(lt=this._syncTabsPlacement_)==null||lt.call(this),(ft=this._renderTabs)==null||ft.call(this),(it=this._applyActiveTab)==null||it.call(this),(pt=this._syncTabsWidth_)==null||pt.call(this),this.disableOverlap=zt,Pt?(this.containerBackground=Pt,this._config=this._config||{},this._config.container_background=this.containerBackground):(this.containerBackground="",this._config=this._config||{},this._config.container_background=this.containerBackground),this.applyBackgroundToPage=Xt,this._config=this._config||{},this._config.apply_background_to_page=!!this.applyBackgroundToPage,ai?(this.cardBackground=ai,this._config=this._config||{},this._config.card_background=this.cardBackground):(this.cardBackground="",this._config=this._config||{},this._config.card_background=this.cardBackground),this._config.dashboard_theme_enabled=!!this.dashboardThemeEnabled,this._config.dashboard_theme=this.dashboardTheme||"",this._config.dashboard_theme_override_all_design=!!this.dashboardThemeOverrideAllDesign,($t=this._applyDashboardThemeStyling_)==null||$t.call(this),oi){let At=this._config&&this._config.background_image||{};this._config={...this._config,background_image:{...At,src:oi}}}else{let{background_image:At,...Ot}=this._config||{};this._config=Ot}this.debug=Ei,this.animateCards=ve,this.hideHaHeader=xe,this.hideHaSidebar=Ne,(Et=this._applyHaChromeVisibility_)==null||Et.call(this);let gn=this._config&&this._config.background_image||{},Dn=(Se==null?void 0:Se.value)||"no-repeat",In=(B==null?void 0:B.value)||"cover",Nn=(p==null?void 0:p.value)||"center center",Bn=(x==null?void 0:x.value)||"scroll",Fn=S?Math.max(0,Math.min(100,parseInt(S.value||"100",10)))/100:1;if(this._config=this._config||{},this._config.background_mode=xi,xi!=="image"&&!oi){let{background_image:At,...Ot}=this._config||{};this._config=Ot}if(xi==="particles")this._config.background_particles={config_url:Fi||void 0,config:!Fi&&mi?ce(mi):void 0,pointer_events:sn||void 0};else{let{background_particles:At,...Ot}=this._config||{};this._config=Ot}if(xi==="youtube")this._config.background_youtube={url:cn||void 0,start:Number.isFinite(wr)?wr:void 0,end:Number.isFinite(Ai)?Ai:void 0,mute:ui!==!0?ui:void 0,loop:kr!==!0?kr:void 0,size:Hi&&Hi!="cover"?Hi:void 0,position:dn||void 0,attachment:Cr&&Cr!=="scroll"?Cr:void 0,opacity:Sr!=null&&Sr!==1?Sr:void 0};else{let{background_youtube:At,...Ot}=this._config||{};this._config=Ot}if(this.screenSaverEnabled=pn,this.screenSaverDelay=a,(Yt=this._updateScreensaverSettings)==null||Yt.call(this),oi)this._config={...this._config,background_image:{...gn,src:oi,repeat:Dn,size:In,position:Nn,attachment:Bn,opacity:Fn}};else if(gn.src)this._config={...this._config,background_image:{...gn,repeat:Dn,size:In,position:Nn,attachment:Bn,opacity:Fn}};else{let{background_image:At,...Ot}=this._config||{};this._config=Ot}(ii=this._applyBackgroundFromConfig)==null||ii.call(this);try{this._config||(this._config={}),this._config.grid=this.gridSize,this._config.auto_resize_cards=!!this.autoResizeCards,this._config.drag_live_snap=!!this.dragLiveSnap,this._config.auto_save=!!this.autoSave,this._config.auto_save_debounce=this.autoSaveDebounce,this._config.container_size_mode=this.containerSizeMode,this._config.container_preset_orientation=this.containerPresetOrient,this._config.optimize_for_mobile=!!this.optimizeForMobile,this._config.mobile_dynamic_behavior=this.mobileDynamicBehavior||"native",this._config.do_not_resize_text=!!this.doNotResizeText,this._config.outer_grid_buffer=!!this.outerGridBuffer,this._config.dashboard_theme_enabled=!!this.dashboardThemeEnabled,this._config.dashboard_theme=this.dashboardTheme||"",this._config.dashboard_theme_override_all_design=!!this.dashboardThemeOverrideAllDesign,this._config.container_fixed_width=this.containerFixedWidth,this._config.container_fixed_height=this.containerFixedHeight,this._config.container_preset=this.containerPreset,this._config.disable_overlap=!!this.disableOverlap,this.containerBackground!==void 0?this._config.container_background=this.containerBackground:this._config&&delete this._config.container_background,this._config.apply_background_to_page=!!this.applyBackgroundToPage,this.cardBackground!==void 0?this._config.card_background=this.cardBackground:this._config&&delete this._config.card_background,this._config.card_shadow=!!this.cardShadowEnabled,this._config.debug=!!this.debug,this._config.animate_cards=!!this.animateCards,this._config.hide_HA_Header=!!this.hideHaHeader,this._config.hide_HA_Sidebar=!!this.hideHaSidebar,this._config.screen_saver_enabled=!!this.screenSaverEnabled,this._config.screen_saver_delay=this.screenSaverDelay}catch(At){console.warn("[drag-and-drop-card] Failed to update config",At)}this.__ddcTextLockDirty=!0,(si=this._scheduleTextResizeLockRefresh_)==null||si.call(this,!0);try{let At=(($i=this._exportableOptions)==null?void 0:$i.call(this))||{},Ot=(Li=this._persistThisCardConfigToStorage_)==null?void 0:Li.call(this);Ot&&typeof Ot.catch=="function"&&Ot.catch(fn=>{console.warn("[drag-and-drop-card] Storage save failed (is this a YAML dashboard?)",fn)});let mn=(On=this._persistOptionsToYaml)==null?void 0:On.call(this,At,{noDownload:!0});mn&&typeof mn.catch=="function"&&mn.catch(fn=>{console.warn("[drag-and-drop-card] YAML persist failed",fn)})}catch(At){console.warn("[drag-and-drop-card] Unexpected error persisting settings",At)}try{this._setDashboardPackages_(Xr),await this._saveLayout(!0)}catch(At){console.warn("[drag-and-drop-card] Failed to persist package bundles",At)}}catch(qt){console.warn("[drag-and-drop-card] Failed to apply settings",qt)}li()})}_exportableOptions(){var o,c,l,g,u;let e=this._config||{},t=(m,h)=>Object.fromEntries(h.map(b=>[b,m==null?void 0:m[b]]).filter(([,b])=>b!==void 0)),i=e.background_mode||((o=e.background_image)!=null&&o.src?"image":e.background_youtube?"youtube":e.background_particles?"particles":"none"),n={storage_key:this.storageKey||void 0,grid:this.gridSize,drag_live_snap:!!this.dragLiveSnap,auto_save:!!this.autoSave,auto_save_debounce:this.autoSaveDebounce,disable_overlap:!!this.disableOverlap,debug:!!this.debug,edit_mode_pin:this.editModePin||void 0,container_size_mode:this.containerSizeMode,container_preset_orientation:this.containerPresetOrient,container_fixed_width:(c=this.containerFixedWidth)!=null?c:void 0,container_fixed_height:(l=this.containerFixedHeight)!=null?l:void 0,container_preset:this.containerPreset,auto_resize_cards:!!this.autoResizeCards,optimize_for_mobile:!!this.optimizeForMobile,mobile_dynamic_behavior:this.mobileDynamicBehavior||"native",do_not_resize_text:!!this.doNotResizeText,outer_grid_buffer:!!this.outerGridBuffer,responsive_viewports:this._cloneJson_(this._serializeResponsiveViewportProfiles_(this.responsiveViewportProfiles)),connectors:this._cloneJson_(((u=this._responsiveConnectors)==null?void 0:u[((g=this._getPrimaryResponsiveLayoutKey_)==null?void 0:g.call(this))||"desktop_landscape"])||[]),responsive_connectors:this._cloneJson_(this._serializeResponsiveConnectorLayouts_(this._responsiveConnectors)),container_background:this.containerBackground,apply_background_to_page:!!this.applyBackgroundToPage,card_background:this.cardBackground,card_shadow:!!this.cardShadowEnabled,dashboard_theme_enabled:!!this.dashboardThemeEnabled,dashboard_theme:this.dashboardTheme||void 0,dashboard_theme_override_all_design:!!this.dashboardThemeOverrideAllDesign,animate_cards:!!this.animateCards,hide_HA_Header:!!this.hideHaHeader,hide_HA_Sidebar:!!this.hideHaSidebar,tabs:this.tabs,tabs_position:this.tabsPosition,default_tab:this.defaultTab,hide_tabs_when_single:!!this.hideTabsWhenSingle,layers_enabled:!!this.layersEnabled,layers:this._cloneJson_(this.layers||[]),background_mode:i,background_image:e.background_image?t(e.background_image,["src","repeat","size","position","attachment","opacity"]):void 0,background_particles:e.background_particles?t(e.background_particles,["config_url","pointer_events","config"]):void 0,background_youtube:e.background_youtube?t(e.background_youtube,["url","start","end","mute","loop","size","position","attachment","opacity"]):void 0,screen_saver_enabled:!!this.screenSaverEnabled,screen_saver_delay:this.screenSaverDelay};return Object.keys(n).forEach(m=>n[m]===void 0&&delete n[m]),n}_applyImportedOptions(e={},t=!0){var i,n,o,c,l,g,u,m,h,b,y,_,A,T,E,M,O,C,$,q,F,j,H,U,X,te,re;if(e&&Object.prototype.hasOwnProperty.call(e,"storage_key")&&this._isInHaEditorPreview())try{let le={type:"custom:drag-and-drop-card",...this._config||{}};this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:le},bubbles:!0,composed:!0}))}catch{}if(this._config={...this._config||{},...e},"storage_key"in e&&(this.storageKey=e.storage_key||void 0),this._syncEditorsStorageKey(),"grid"in e&&(this.gridSize=Number(e.grid)||10),"drag_live_snap"in e&&(this.dragLiveSnap=!!e.drag_live_snap),"auto_save"in e&&(this.autoSave=!!e.auto_save),"auto_save_debounce"in e&&(this.autoSaveDebounce=Number(e.auto_save_debounce)||800),"do_not_resize_text"in e&&(this.doNotResizeText=!!e.do_not_resize_text),"optimize_for_mobile"in e&&(this.optimizeForMobile=!!e.optimize_for_mobile),"mobile_dynamic_behavior"in e&&(this.mobileDynamicBehavior=String(e.mobile_dynamic_behavior||"native").toLowerCase()==="scale"?"scale":"native"),"outer_grid_buffer"in e&&(this.outerGridBuffer=!!e.outer_grid_buffer),"responsive_viewports"in e&&(this.responsiveViewportProfiles=this._normalizeResponsiveViewportProfiles_(e.responsive_viewports)),("responsive_connectors"in e||"connectors"in e)&&(this._responsiveConnectors=this._normalizeResponsiveConnectorLayouts_(e.connectors||[],e.responsive_connectors||null),this._connectorDraft=null,this._selectedConnectorId=null),"container_background"in e&&(this.containerBackground=(i=e.container_background)!=null?i:"transparent"),"apply_background_to_page"in e&&(this.applyBackgroundToPage=!!e.apply_background_to_page),"card_background"in e&&(this.cardBackground=(n=e.card_background)!=null?n:"var(--ha-card-background, var(--card-background-color))"),"card_shadow"in e&&(this.cardShadowEnabled=!!e.card_shadow),("dashboard_theme_enabled"in e||"theme_enabled"in e)&&(this.dashboardThemeEnabled=!!((o=e.dashboard_theme_enabled)!=null?o:e.theme_enabled)),("dashboard_theme"in e||"theme_name"in e)&&(this.dashboardTheme=String((l=(c=e.dashboard_theme)!=null?c:e.theme_name)!=null?l:"").trim()),("dashboard_theme_override_all_design"in e||"theme_override_all_design"in e)&&(this.dashboardThemeOverrideAllDesign=!!((g=e.dashboard_theme_override_all_design)!=null?g:e.theme_override_all_design)),("layers_enabled"in e||"enable_layers"in e)&&(this.layersEnabled=!!((u=e.layers_enabled)!=null?u:e.enable_layers)),"layers"in e?this._setDashboardLayers_(e.layers||[],{refresh:!1,persist:!0}):("layers_enabled"in e||"enable_layers"in e)&&this._setDashboardLayers_(this.layers||[],{refresh:!1,persist:!0}),"debug"in e&&(this.debug=!!e.debug),"disable_overlap"in e&&(this.disableOverlap=!!e.disable_overlap),"container_size_mode"in e){this.containerSizeMode=e.container_size_mode||"dynamic";let le=String(this.containerSizeMode||"dynamic").toLowerCase();le==="dynamic"&&(this.autoResizeCards=!0),this.autoResizeCards||le==="auto"?(m=this._startScaleWatch)==null||m.call(this):(h=this._stopScaleWatch)==null||h.call(this),(b=this._syncViewportPreviewUI_)==null||b.call(this),(y=this._applyAutoScale)==null||y.call(this)}if("container_fixed_width"in e&&(this.containerFixedWidth=Number(e.container_fixed_width)||null),"container_fixed_height"in e&&(this.containerFixedHeight=Number(e.container_fixed_height)||null),"container_preset"in e&&(this.containerPreset=e.container_preset||"fhd"),"container_preset_orientation"in e&&(this.containerPresetOrient=e.container_preset_orientation||"auto"),"auto_resize_cards"in e){let le=String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase();le==="dynamic"?this.autoResizeCards=!0:this.autoResizeCards=!!e.auto_resize_cards,this.autoResizeCards||le==="auto"?(_=this._startScaleWatch)==null||_.call(this):(A=this._stopScaleWatch)==null||A.call(this),(T=this._syncViewportPreviewUI_)==null||T.call(this),(E=this._applyAutoScale)==null||E.call(this)}if("screen_saver_enabled"in e&&(this.screenSaverEnabled=!!e.screen_saver_enabled),"screen_saver_delay"in e){let le=Number(e.screen_saver_delay);this.screenSaverDelay=Number.isFinite(le)&&le>0?le:this.screenSaverDelay}if(("screen_saver_enabled"in e||"screen_saver_delay"in e)&&typeof this._updateScreensaverSettings=="function"&&this._updateScreensaverSettings(),"tabs_position"in e){let le=String(e.tabs_position||"top").toLowerCase();this.tabsPosition=le==="left"||le==="bottom"?le:"top",(M=this._syncTabsPlacement_)==null||M.call(this)}(O=this._applyDashboardThemeStyling_)==null||O.call(this),this._applyGridVars(),t&&(this._applyContainerSizingFromConfig(!0),(C=this._applyAutoScale)==null||C.call(this),this._resizeContainer(),($=this._updateStoreBadge)==null||$.call(this),(q=this._applyAutoScale)==null||q.call(this)),"tabs_position"in e&&((F=this._renderTabs)==null||F.call(this),(j=this._applyActiveTab)==null||j.call(this),(H=this._syncTabsWidth_)==null||H.call(this)),("layers"in e||"layers_enabled"in e||"enable_layers"in e)&&((U=this._renderLayersBar_)==null||U.call(this),(X=this._applyActiveTab)==null||X.call(this)),(te=this._renderConnectors)==null||te.call(this),this.__ddcTextLockDirty=!0,(re=this._scheduleTextResizeLockRefresh_)==null||re.call(this,!0)}_downloadJsonFile_(e,t){let i=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),n=document.createElement("a");n.href=URL.createObjectURL(i),n.download=e,n.click(),URL.revokeObjectURL(n.href)}_getHighestZForEntries_(e=[]){return(Array.isArray(e)?e:[]).reduce((t,i)=>{let n=Number(i==null?void 0:i.z);return Number.isFinite(n)?Math.max(t,Math.round(n)):t},5)}_getImportViewportBoundsForLayoutVariant_(e=""){var u,m,h,b;let t=String(e||((u=this._getActiveResponsiveLayoutKey_)==null?void 0:u.call(this))||((m=this._getPrimaryResponsiveLayoutKey_)==null?void 0:m.call(this))||"desktop_landscape"),{profile:i,orientation:n}=this._splitResponsiveLayoutKey_(t),o=(h=this._getResponsiveViewportProfile_)==null?void 0:h.call(this,i,n),c=Math.max(1,Number((o==null?void 0:o.width)||0)||0),l=Math.max(1,Number((o==null?void 0:o.height)||0)||0);if(c>0&&l>0)return{width:c,height:l};let g=((b=this._getContainerSize)==null?void 0:b.call(this))||{};return{width:Math.max(1,Number((g==null?void 0:g.w)||(g==null?void 0:g.width)||0)||1),height:Math.max(1,Number((g==null?void 0:g.h)||(g==null?void 0:g.height)||0)||1)}}_findNextAvailablePositionForEntries_(e=[],t={},i=null){let n=Math.max(1,Number(this.gridSize||10)||10),o=Math.max(1,Number(t==null?void 0:t.width)||14*n),c=Math.max(1,Number(t==null?void 0:t.height)||10*n),l=Number(i==null?void 0:i.width),g=Number(i==null?void 0:i.height),u=Number.isFinite(l)&&l>0&&Number.isFinite(g)&&g>0,m=(Array.isArray(e)?e:[]).map(A=>{var T,E,M,O;return{x:Number((T=A==null?void 0:A.position)==null?void 0:T.x)||0,y:this._clampYToCanvasTop_(Number((E=A==null?void 0:A.position)==null?void 0:E.y)||0),w:Math.max(1,Number((M=A==null?void 0:A.size)==null?void 0:M.width)||14*n),h:Math.max(1,Number((O=A==null?void 0:A.size)==null?void 0:O.height)||10*n)}}),h=m.reduce((A,T)=>Math.max(A,T.x+T.w),0),b=u?Math.max(1,Math.floor(Math.max(0,l-o)/n)+1):Math.max(24,Math.ceil((h+o+n*12)/n)),y=u?Math.max(1,Math.floor(Math.max(0,g-c)/n)+1):400,_={x:0,y:0,w:o,h:c};for(let A=0;A<y;A+=1)for(let T=0;T<b;T+=1){if(_.x=T*n,_.y=this._clampYToCanvasTop_(A*n),u&&(_.x+_.w>l||_.y+_.h>g))continue;if(!m.some(M=>this._rectsOverlap(_,M)))return{x:_.x,y:_.y}}return{x:0,y:0}}_captureSingleCardExportPayload_(e){var l,g,u,m,h,b;if(!e)return null;(l=this._persistCurrentResponsiveProfileToMemory_)==null||l.call(this);let t=e.dataset.layoutCardId||this._genLayoutCardId_(),i=this._activeResponsiveLayoutKey||((g=this._getPrimaryResponsiveLayoutKey_)==null?void 0:g.call(this))||"desktop_landscape",o=this._captureCurrentLayoutEntries_().find(y=>y.id===t)||((h=(m=(u=this._responsiveLayouts)==null?void 0:u[i])==null?void 0:m.find)==null?void 0:h.call(m,y=>(y==null?void 0:y.id)===t))||null;if(!(o!=null&&o.card))return null;let c={};return(((b=this._responsiveLayoutVariantKeys_)==null?void 0:b.call(this))||[]).forEach(y=>{var A,T,E;let _=(E=(T=(A=this._responsiveLayouts)==null?void 0:A[y])==null?void 0:T.find)==null?void 0:E.call(T,M=>(M==null?void 0:M.id)===t);_!=null&&_.card&&(c[y]=this._normalizeSavedCardEntry_(_,_))}),c[i]||(c[i]=this._normalizeSavedCardEntry_(o,o)),{kind:"ddc-card",version:1,exported_at:new Date().toISOString(),source_storage_key:this.storageKey||null,entry:this._normalizeSavedCardEntry_(o,o),responsive_entries:this._cloneJson_(c)}}_exportSingleCard_(e){var o,c,l,g,u;let t=this._captureSingleCardExportPayload_(e);if(!((o=t==null?void 0:t.entry)!=null&&o.card)){(c=this._toast)==null||c.call(this,"Could not export this card.");return}let n=`ddc_card_${String(((g=(l=t.entry)==null?void 0:l.card)==null?void 0:g.type)||"card").replace(/^custom:/i,"").replace(/[^a-z0-9]+/gi,"_").replace(/^_+|_+$/g,"").toLowerCase()||"card"}_${t.entry.id||Date.now()}.json`;this._downloadJsonFile_(n,t),(u=this._toast)==null||u.call(this,"Card exported.")}_isSingleCardImportPayload_(e=null){var t,i;return!e||typeof e!="object"?!1:!!(e.kind==="ddc-card"||(t=e.entry)!=null&&t.card||(i=e.card)!=null&&i.card||e.responsive_entries&&typeof e.responsive_entries=="object")}async _createWrapperFromSavedEntry_(e={}){var o,c,l,g,u,m,h,b,y,_,A;let t=this._normalizeSavedCardEntry_(e,e);if(!(t!=null&&t.card)||typeof t.card=="object"&&Object.keys(t.card).length===0){let T=this._makePlaceholderAt(((o=t.position)==null?void 0:o.x)||0,((c=t.position)==null?void 0:c.y)||0,((l=t.size)==null?void 0:l.width)||200,((g=t.size)==null?void 0:g.height)||200);return T.dataset.layoutCardId=t.id,T.dataset.tabId=this._normalizeTabId(t.tabId||this.defaultTab),this._setWrapperLayerIds_(T,t.layerIds||t.layer_ids||[]),T}let i=await this._createCard(t.card),n=this._makeWrapper(i,{layoutCardId:t.id});if(this.editMode&&n.classList.add("editing"),n.dataset.tabId=this._normalizeTabId(t.tabId||this.defaultTab),this._setWrapperLayerIds_(n,t.layerIds||t.layer_ids||[]),this._setCardPosition(n,((u=t.position)==null?void 0:u.x)||0,((m=t.position)==null?void 0:m.y)||0),n.style.width=`${(b=(h=t.size)==null?void 0:h.width)!=null?b:14*this.gridSize}px`,n.style.height=`${(_=(y=t.size)==null?void 0:y.height)!=null?_:10*this.gridSize}px`,t.z!=null&&(n.style.zIndex=String(t.z)),t.overflow)try{n.style.overflow=t.overflow,n.dataset.overflow=t.overflow;let T=n.firstElementChild;T&&(T.style.overflow=t.overflow)}catch{}try{(A=this._applyPerCardStyle_)==null||A.call(this,n,t.card_style||t.cardStyle||null)}catch{}return n}async _importSingleCardPayload_(e={}){var m,h,b,y,_,A,T,E,M,O,C,$,q,F,j,H,U,X,te;let t=(m=e==null?void 0:e.entry)!=null&&m.card?e.entry:(h=e==null?void 0:e.card)!=null&&h.card?e.card:e;if(!(t!=null&&t.card))return(b=this._toast)==null||b.call(this,"Import failed \u2014 invalid card file."),!1;(y=this._persistCurrentResponsiveProfileToMemory_)==null||y.call(this),this._responsiveLayouts||(this._responsiveLayouts=this._normalizeResponsiveLayouts_(this._captureCurrentLayoutEntries_(),null));let i=(e==null?void 0:e.responsive_entries)||(e==null?void 0:e.responsiveEntries)||{},n=((_=this._responsiveLayoutVariantKeys_)==null?void 0:_.call(this))||[this._activeResponsiveLayoutKey||"desktop_landscape"],o=this._genLayoutCardId_(),c=this._normalizeTabId(this.activeTab||this.defaultTab),l={};n.forEach(re=>{var Ce,ue;let le=(Ce=i==null?void 0:i[re])!=null&&Ce.card?i[re]:t,Le=this._normalizeSavedCardEntry_(le,t),me=Array.isArray((ue=this._responsiveLayouts)==null?void 0:ue[re])?this._responsiveLayouts[re].map(Ae=>this._normalizeSavedCardEntry_(Ae,Ae)):[],de=this._normalizeSavedCardEntry_({...this._cloneJson_(Le),id:o,tabId:c},Le);de.id=o,de.tabId=c,de.position=this._findNextAvailablePositionForEntries_(me,de.size,this._getImportViewportBoundsForLayoutVariant_(re)),de.z=Math.max(6,this._getHighestZForEntries_(me)+1),me.push(de),this._responsiveLayouts[re]=me,l[re]=de});let g=this._activeResponsiveLayoutKey||((A=this._getRequestedResponsiveLayoutKey_)==null?void 0:A.call(this))||((T=this._getPrimaryResponsiveLayoutKey_)==null?void 0:T.call(this))||"desktop_landscape",u=l[g]||l[(E=this._getPrimaryResponsiveLayoutKey_)==null?void 0:E.call(this)]||Object.values(l)[0];if(u){(M=this._hideEmptyPlaceholder)==null||M.call(this);let re=await this._createWrapperFromSavedEntry_(u);if(re){this.cardContainer.appendChild(re);try{this._rebuildOnce(re.firstElementChild)}catch{}re.classList.contains("ddc-placeholder")||(O=this._initCardInteract)==null||O.call(this,re)}}(C=this._resizeContainer)==null||C.call(this),($=this._syncEmptyStateUI)==null||$.call(this);try{(q=this._renderTabs)==null||q.call(this),(F=this._renderLayersBar_)==null||F.call(this),(j=this._applyActiveTab)==null||j.call(this)}catch{}try{(H=this._applyVisibility_)==null||H.call(this)}catch{}try{(U=this._renderConnectors_)==null||U.call(this)}catch{}try{await this._saveLayout(!1)}catch{(X=this._queueSave)==null||X.call(this,"import-card")}return(te=this._toast)==null||te.call(this,"Card imported."),!0}_exportDesign(){var n;this._persistCurrentResponsiveProfileToMemory_();let e=((n=this._responsiveLayouts)==null?void 0:n[this._getPrimaryResponsiveLayoutKey_()])||this._captureCurrentLayoutEntries_(),t={version:3,options:this._exportableOptions(),cards:e,responsive_layouts:this._cloneJson_(this._serializeResponsiveLayouts_(this._responsiveLayouts,e)),packages:this._exportDashboardPackages_()};this._config&&this._config.card_mod&&(t.options=t.options||{},t.options.card_mod=this._config.card_mod);let i=`DragAndDrop_Design_${this.storageKey||"layout"}.json`;this._downloadJsonFile_(i,t),this._toast("Design exported.")}_importDesign(){let e=document.createElement("input");e.type="file",e.accept="application/json";let t=!0,i=!1,n=["grid","drag_live_snap","auto_save","auto_save_debounce","debug","disable_overlap","card_mod","storage_key","animate_cards","auto_resize_cards","optimize_for_mobile","mobile_dynamic_behavior","do_not_resize_text","outer_grid_buffer","responsive_viewports","connectors","responsive_connectors","container_background","apply_background_to_page","card_background","card_shadow","dashboard_theme_enabled","dashboard_theme","dashboard_theme_override_all_design","container_size_mode","container_fixed_width","container_fixed_height","container_preset","container_preset_orientation","tabs","tabs_position","default_tab","hide_tabs_when_single","layers_enabled","layers","hide_HA_Header","hide_HA_Sidebar","background_mode","background_image","background_particles","background_youtube","screen_saver_enabled","screen_saver_delay"];e.onchange=async()=>{var l,g,u,m,h,b,y,_,A,T,E,M,O,C,$,q,F,j,H,U,X,te,re,le,Le,me,de,Ce,ue,Ae,ye,Se,B,p,x,S,z,N,W,G,V,J;let o=(l=e.files)==null?void 0:l[0];if(!o)return;let c=await o.text();try{let Z=JSON.parse(c);if(this._isSingleCardImportPayload_(Z)){await this._importSingleCardPayload_(Z);return}let he=this.storageKey||((g=this._config)==null?void 0:g.storage_key)||null;this._setDashboardPackages_(Z.packages||[]);let _e=!!(Z.options&&Array.isArray(Z.options.tabs)),ke=Array.isArray(Z.cards)&&Z.cards.some(Pe=>(Pe==null?void 0:Pe.tabId)||(Pe==null?void 0:Pe.tab_id)),Ee=[];_e?Ee=Z.options.tabs:ke?Ee=Array.from(new Set(Z.cards.map(He=>(He==null?void 0:He.tabId)||(He==null?void 0:He.tab_id)).filter(Boolean))).map(He=>({id:He,label:He})):Ee=[{id:"default",label:"Layout"}];let Fe=String(((u=Z.options)==null?void 0:u.tabs_position)||this.tabsPosition||"top").toLowerCase(),je=Fe==="left"||Fe==="bottom"?Fe:"top",et=((m=Z.options)==null?void 0:m.default_tab)||((h=Ee[0])==null?void 0:h.id)||"default",ct=((b=Z.options)==null?void 0:b.hide_tabs_when_single)!==void 0?!!Z.options.hide_tabs_when_single:!0;if(Z.options){let Pe={...Z.options};if(i||delete Pe.storage_key,t){let He=this._config||{type:"custom:drag-and-drop-card"};for(let ht of n)ht==="storage_key"&&!i||!(ht in Pe)&&ht in He&&delete He[ht];try{this.cardContainer&&(this.cardContainer.style.background="",this.cardContainer.style.width="",this.cardContainer.style.height=""),(_=(y=this.style)==null?void 0:y.removeProperty)==null||_.call(y,"--ddc-container-bg"),(T=(A=this.style)==null?void 0:A.removeProperty)==null||T.call(A,"--ddc-card-bg")}catch{}if(this._config={...He,...Pe},"card_mod"in Pe||delete this._config.card_mod,"animate_cards"in Pe&&(this.animateCards=!!Pe.animate_cards),"auto_resize_cards"in Pe&&(this.autoResizeCards=!!Pe.auto_resize_cards),"optimize_for_mobile"in Pe&&(this.optimizeForMobile=!!Pe.optimize_for_mobile),"mobile_dynamic_behavior"in Pe&&(this.mobileDynamicBehavior=String(Pe.mobile_dynamic_behavior||"native").toLowerCase()==="scale"?"scale":"native"),"hide_HA_Header"in Pe||"hide_HA_Sidebar"in Pe)try{(E=this._applyHaChromeVisibility_)==null||E.call(this)}catch{}if("background_mode"in Pe||"background_image"in Pe||"background_particles"in Pe||"background_youtube"in Pe)try{(M=this._applyBackgroundFromConfig)==null||M.call(this)}catch{}if(i&&Pe.storage_key&&(this.storageKey=Pe.storage_key),this._opts){this._opts={...this._opts,...Pe};for(let ht of n)ht in Pe||delete this._opts[ht]}(O=this._applyOptionsToDom)==null||O.call(this,this._config),(C=this.requestUpdate)==null||C.call(this)}else this._applyImportedOptions(Pe,!0),Pe.card_mod!==void 0&&(this._config=this._config||{},this._config.card_mod=Pe.card_mod,($=this.requestUpdate)==null||$.call(this))}else if(typeof Z.grid=="number"){let Pe={grid:Z.grid};t?this._config={...this._config||{},...Pe}:this._applyImportedOptions(Pe,!0),(q=this.requestUpdate)==null||q.call(this)}(!Array.isArray(this.tabs)||!this.tabs.length)&&(this.tabs=Ee),this.tabsPosition||(this.tabsPosition=je),this.defaultTab||(this.defaultTab=et),this.hideTabsWhenSingle===void 0&&(this.hideTabsWhenSingle=ct),(F=this._syncTabsPlacement_)==null||F.call(this);try{let Pe=((j=this._config)==null?void 0:j.storage_key)||this.storageKey||null,He=(H=Z.options)!=null?H:typeof Z.grid=="number"?{grid:Z.grid}:{},ht={...He,tabs:(X=(U=He.tabs)!=null?U:this.tabs)!=null?X:[],tabs_position:(re=(te=He.tabs_position)!=null?te:this.tabsPosition)!=null?re:"top",default_tab:(ue=(le=He.default_tab)!=null?le:this.defaultTab)!=null?ue:((me=(Le=He.tabs)==null?void 0:Le[0])==null?void 0:me.id)||((Ce=(de=this.tabs)==null?void 0:de[0])==null?void 0:Ce.id)||"default",hide_tabs_when_single:(ye=He.hide_tabs_when_single)!=null?ye:(Ae=this.hideTabsWhenSingle)!=null?Ae:!0};if(i||delete ht.storage_key,!Pe)console.warn("[ddc:import] No storage_key on this card; aborting YAML persist.");else{let tt=await((Se=this._persistOptionsToYaml)==null?void 0:Se.call(this,ht,{forceTargetKey:String(Pe),noDownload:!0,replace:!0,wipeUnknownKeys:!0})),_t=!!(tt&&tt.yamlSaved);(B=console.debug)==null||B.call(console,"[ddc:import] YAML persist result:",_t)}try{let tt={type:"custom:drag-and-drop-card",...this._config||{}};tt.tabs=ht.tabs,tt.tabs_position=ht.tabs_position,tt.default_tab=ht.default_tab,tt.hide_tabs_when_single=!!ht.hide_tabs_when_single,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:tt},bubbles:!0,composed:!0}))}catch{}}catch(Pe){console.warn("[ddc:import] YAML persist failed:",Pe)}this.responsiveViewportProfiles=this._normalizeResponsiveViewportProfiles_(((p=Z.options)==null?void 0:p.responsive_viewports)||this.responsiveViewportProfiles),this._responsiveLayouts=this._normalizeResponsiveLayouts_(Z.cards||[],Z.responsive_layouts||null),await this._syncResponsiveProfileForViewport_({force:!0}),(x=this._applyOptionsToDom)==null||x.call(this,this._config),this._resizeContainer();try{(S=this._syncTabsPlacement_)==null||S.call(this),(z=this._renderTabs)==null||z.call(this),(N=this._applyActiveTab)==null||N.call(this)}catch{}try{this._saveTimer&&clearTimeout(this._saveTimer),await this._saveLayout(!0),(W=this._toast)==null||W.call(this,"Design imported & saved. Reloading..."),window.location.reload()}catch(Pe){console.warn("[ddc:import] saveLayout failed",Pe),(G=this._markDirty)==null||G.call(this,"import"),(V=this._toast)==null||V.call(this,"Design imported \u2014 click Apply to save.")}}catch(Z){console.error("Import failed",Z),(J=this._toast)==null||J.call(this,"Import failed \u2014 invalid file.")}},e.click()}_getLovelace(){var o,c;let e=0,t=this;for(;t&&e++<20;){let l=(o=t.getRootNode)==null?void 0:o.call(t),g=l==null?void 0:l.host;if((g==null?void 0:g.tagName)==="HUI-ROOT")return g.lovelace;t=g||t.parentElement}let i=new Set,n=[document];for(;n.length;){let l=n.shift();if(!(!l||i.has(l))){if(i.add(l),((c=l.host)==null?void 0:c.tagName)==="HUI-ROOT")return l.host.lovelace;if(l.tagName==="HUI-ROOT")return l.lovelace;if(l.shadowRoot&&n.push(l.shadowRoot),l.children)for(let g of l.children)n.push(g)}}}_scanDdcCards(e){let t=[],i=(o,c,l)=>{(l==null?void 0:l.type)==="custom:drag-and-drop-card"&&t.push({view:o,path:[...c],card:l})},n=(o,c,l)=>{if(o){if(Array.isArray(o)){o.forEach((g,u)=>n(g,c,l.concat(u)));return}if(typeof o=="object"){"type"in o&&i(c,l,o);for(let[g,u]of Object.entries(o))g==="views"&&Array.isArray(u)?u.forEach((m,h)=>n(m,h,["views",h])):(Array.isArray(u)||u&&typeof u=="object")&&n(u,c,l.concat(g))}}};return n(e,-1,[]),t}async _persistOptionsToYaml(e,{prevKey:t=null,patchAllInCurrentViewIfNoKey:i=!1}={}){var n,o,c,l,g,u,m,h,b;try{let y=this._getLovelace();if(!y)return console.debug("[ddc:import] persist: no lovelace root"),!1;if(typeof y.saveConfig!="function")return console.debug("[ddc:import] persist: dashboard not in Storage mode"),!1;let _=JSON.parse(JSON.stringify(y.config)),A=this._scanDdcCards(_),T=(n=y.current_view)!=null?n:0;console.debug("[ddc:import] persist: found DDC cards",A.map($=>({view:$.view,path:$.path.join("."),storage_key:$.card.storage_key||null})));let E=(o=e==null?void 0:e.storage_key)!=null?o:null,M=[];t&&M.push(t),E&&M.push(E),this.storageKey&&M.push(this.storageKey),(c=this._config)!=null&&c.storage_key&&M.push(this._config.storage_key);let O=A.filter($=>$.card.storage_key&&M.includes($.card.storage_key));if(!O.length){let $=A.filter(q=>q.view===T);$.length===1&&(O=$)}if(!O.length&&A.length===1&&(O=A),!O.length)return console.debug("[ddc:import] persist: no target. Provide a unique storage_key on this card and import again.",{prevKey:t,newKey:E,storageKey:this.storageKey}),!1;let C={type:"custom:drag-and-drop-card",...e};"storage_key"in C&&delete C.storage_key,"storageKey"in C&&delete C.storageKey;for(let $ of O){let q=_;for(let H of $.path)q=q[H];let F=(b=(h=(u=(l=q==null?void 0:q.storage_key)!=null?l:q==null?void 0:q.storageKey)!=null?u:(g=q==null?void 0:q.options)==null?void 0:g.storage_key)!=null?h:(m=q==null?void 0:q.options)==null?void 0:m.storageKey)!=null?b:null,j=!!(t&&E&&F===t&&E!==t);if(Object.assign(q,C),q&&typeof q.options=="object"&&q.options!==null)for(let[H,U]of Object.entries(e||{}))H==="storage_key"||H==="storageKey"||H==="type"||(q.options[H]=U);j?q.storage_key=String(E):F&&(q.storage_key=String(F)),"storageKey"in q&&delete q.storageKey}return console.debug("[ddc:import] persist \u2192 saving",{patched:O.length,keysTried:M,patch}),await y.saveConfig(_),!0}catch(y){return console.warn("[ddc:import] persist error",y),!1}}_queueSave(e="auto"){this._markDirty(e),this.autoSave&&(this._loading||this.editMode&&(this._dbgPush("autosave","Queued",{reason:e,debounce:this.autoSaveDebounce}),clearTimeout(this._saveTimer),this._saveTimer=setTimeout(()=>this._saveLayout(!0),this.autoSaveDebounce)))}async _saveLayout(e=!0){var n;this._persistCurrentResponsiveProfileToMemory_();let t=((n=this._responsiveLayouts)==null?void 0:n[this._getPrimaryResponsiveLayoutKey_()])||this._captureCurrentLayoutEntries_(),i={version:3,options:this._exportableOptions(),cards:t,responsive_layouts:this._cloneJson_(this._serializeResponsiveLayouts_(this._responsiveLayouts,t)),packages:this._exportDashboardPackages_()};try{localStorage.setItem(`ddc_local_${this.storageKey||"default"}`,JSON.stringify(i))}catch{}if(!this.storageKey){e||this._toast("Saved locally (no storage_key set)."),this.__dirty=!1,this._updateApplyBtn();return}try{await this._saveLayoutToBackend(this.storageKey,i),e||this._toast("Layout saved."),this.__dirty=!1,this._updateApplyBtn()}catch(o){console.error("Backend save failed",o),this._dbgPush("save","Backend save failed",{error:String(o)}),e||this._toast("Backend save failed \u2014 kept local copy.")}}async _probeBackend(){this._backendOK=!1;let e=performance.now();try{this._dbgPush("probe","GET /api/dragdrop_storage (list keys)");let t=await this.hass.callApi("get","dragdrop_storage"),i=Math.round(performance.now()-e);this._dbgPush("probe",`OK (${i} ms)`,t),this._backendOK=!!t}catch(t){let i=Math.round(performance.now()-e);this._dbgPush("probe",`FAILED (${i} ms)`,{error:String(t)}),this._backendOK=!1}this._updateStoreBadge()}async _loadLayoutFromBackend(e){let t=`dragdrop_storage/${encodeURIComponent(e)}`,i=performance.now();try{this._dbgPush("load",`GET /api/${t}`);let n=await this.hass.callApi("get",t),o=Math.round(performance.now()-i);return this._dbgPush("load",`OK (${o} ms)`,{bytes:JSON.stringify(n||"").length}),n}catch(n){let o=Math.round(performance.now()-i);return this._dbgPush("load",`FAILED (${o} ms)`,{error:String(n)}),null}}async _saveLayoutToBackend(e,t){var l,g,u,m,h,b;let i=`dragdrop_storage/${encodeURIComponent(e)}`,n=JSON.stringify(t).length,o=Array.isArray(t==null?void 0:t.packages)&&t.packages.some(y=>!y||typeof y!="object"||y.enabled===!1?!1:String(y.yaml||"").trim().length>0),c=performance.now();try{this._dbgPush("save",`POST /api/${i}`,{bytes:n});let y=await this.hass.callApi("post",i,t),_=Math.round(performance.now()-c);return this._dbgPush("save",`OK (${_} ms)`,y),o&&!("package_sync"in(y||{}))?(this._dbgPush("packages","Package sync unsupported by backend",y),console.warn("[ddc] backend save succeeded, but no package_sync info was returned. Backend may be outdated."),(l=this._toast)==null||l.call(this,"Features were saved in dashboard JSON, but this backend does not report package sync. Update the Drag And Drop Card backend in Home Assistant.")):((g=y==null?void 0:y.package_sync)==null?void 0:g.ok)===!1?(this._dbgPush("packages","Package sync failed",y.package_sync),console.warn("[ddc] package sync failed",y.package_sync),(m=this._toast)==null||m.call(this,`Package sync failed: ${((u=y==null?void 0:y.package_sync)==null?void 0:u.error)||"unknown error"}`)):(h=y==null?void 0:y.package_sync)!=null&&h.count&&(this._dbgPush("packages","Package sync OK",y.package_sync),(b=this._toast)==null||b.call(this,`Synced ${y.package_sync.count} feature package file${y.package_sync.count===1?"":"s"} to Home Assistant.`)),y}catch(y){let _=Math.round(performance.now()-c);throw this._dbgPush("save",`FAILED (${_} ms)`,{error:String(y),bytes:n}),y}}async _saveOptionsToBackend(e,t){var i;try{let n=await this._loadLayoutFromBackend(e),o={version:3,...n||{},options:t||((i=this._exportableOptions)==null?void 0:i.call(this))||{}};return n&&Array.isArray(n.cards)&&(o.cards=n.cards),await this._saveLayoutToBackend(e,o),!0}catch(n){return console.warn("[ddc] saveOptionsToBackend failed",n),!1}}_updateStoreBadge(){let e=this.storeBadge;if(!e)return;let t=this._backendOK&&!!this.storageKey;e.textContent=t?"storage: backend - OK":"storage: local. Your Changes are NOT being SAVED. You need to download the Drag and Drop Card backend integration",e.style.background=t?"rgba(76,175,80,.15)":"rgba(255,193,7,.15)",e.style.borderColor=t?"rgba(76,175,80,.45)":"rgba(255,193,7,.45)"}_ensureScreenSaverStyles(){var e;if(!((e=this.shadowRoot)!=null&&e.querySelector("#ddc-screensaver-styles")))try{let t=document.createElement("style");t.id="ddc-screensaver-styles",t.textContent=`
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
      `,this.shadowRoot.appendChild(t)}catch(t){console.warn("[drag-and-drop-card] Failed to inject screensaver styles",t)}}_ensureScreenSaverGlobalStyles(){if(!document.head.querySelector("#ddc-screensaver-global-styles"))try{let e=document.createElement("style");e.id="ddc-screensaver-global-styles",e.textContent=`
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
      `,document.head.appendChild(e)}catch(e){console.warn("[drag-and-drop-card] Failed to inject global screensaver styles",e)}}_ensureScreenSaverOverlay(){var i;if(this._ensureScreenSaverGlobalStyles(),!this._screenSaverOverlayId){let n=((i=this.config)==null?void 0:i.id)||`ddc_${Math.random().toString(36).slice(2)}`;this._screenSaverOverlayId=`ddc-screensaver-overlay-${n}`}let e=this._screenSaverOverlayId;if(this.screenSaverOverlay&&this.screenSaverOverlay.parentNode===document.body)return;if(this.screenSaverOverlay&&!this.screenSaverOverlay.parentNode){document.body.appendChild(this.screenSaverOverlay);return}let t=document.createElement("div");t.className="screensaver-overlay",t.id=e,t.innerHTML=`
      <div class="screensaver-content" id="${e}-content">
        <div class="screensaver-clock" id="${e}-clock"></div>
        <div class="screensaver-date" id="${e}-date"></div>
        <div class="screensaver-calendar" id="${e}-calendar"></div>
      </div>
    `,t.addEventListener("click",()=>this._deactivateScreenSaver()),t.addEventListener("keydown",()=>this._deactivateScreenSaver()),this.screenSaverOverlay=t,document.body.appendChild(t)}_attachScreensaverListeners(){if(this._screensaverActivityHandler)return;let e=()=>this._resetScreensaverTimer();this._screensaverActivityHandler=e,this._screensaverEvents=["mousemove","mousedown","click","keydown","wheel","scroll","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointercancel"],this._screensaverEvents.forEach(t=>{document.addEventListener(t,e,!0)})}_resetScreensaverTimer(){if(this._screensaverTimer&&(clearTimeout(this._screensaverTimer),this._screensaverTimer=null),!this._shouldUseScreensaver()){this.screensaverActive&&this._deactivateScreenSaver();return}this.screensaverActive&&this._deactivateScreenSaver();let e=Number(this.screenSaverDelay)||5*6e4;this._screensaverTimer=setTimeout(()=>{this._activateScreenSaver()},e)}_activateScreenSaver(){if(this._shouldUseScreensaver()&&(this._ensureScreenSaverOverlay(),!!this.screenSaverOverlay)){this.screensaverActive=!0,this.screenSaverOverlay.classList.add("active");try{this.tabsBar&&(this.__savedTabsDisplay=this.tabsBar.style.display,this.tabsBar.style.display="none")}catch{}this._updateScreenSaverClock(),this._clockInterval&&clearInterval(this._clockInterval),this._clockInterval=setInterval(()=>this._updateScreenSaverClock(),1e3)}}_deactivateScreenSaver(){if(this.screensaverActive){this.screensaverActive=!1,this.screenSaverOverlay&&this.screenSaverOverlay.classList.remove("active"),this._clockInterval&&(clearInterval(this._clockInterval),this._clockInterval=null);try{this.tabsBar&&(this.__savedTabsDisplay!=null?this.tabsBar.style.display=this.__savedTabsDisplay:this.tabsBar.style.display="")}catch{}this._resetScreensaverTimer()}}_updateScreenSaverClock(){let e=this.screenSaverOverlay,t=e==null?void 0:e.querySelector(".screensaver-clock"),i=e==null?void 0:e.querySelector(".screensaver-date"),n=new Date;t&&(t.textContent=n.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"})),i&&(i.textContent=n.toLocaleDateString([],{weekday:"long",year:"numeric",month:"long",day:"numeric"}));try{this._updateScreenSaverCalendar()}catch{}}_updateScreenSaverCalendar(){var y;let e=(y=this.screenSaverOverlay)==null?void 0:y.querySelector(".screensaver-calendar");if(!e)return;let t=new Date,i=void 0,n=t.getFullYear(),o=t.getMonth(),c=t.toLocaleDateString(i,{month:"long"}),l=[];for(let _=0;_<7;_++){let A=new Date(1970,0,4+_);l.push(A.toLocaleDateString(i,{weekday:"short"}))}let g=new Date(n,o,1).getDay(),u=new Date(n,o+1,0).getDate(),m=new Date(n,o,0).getDate(),h=[];for(let _=0;_<g;_++)h.push({day:m-(g-1)+_,other:!0});for(let _=1;_<=u;_++){let A=_===t.getDate();h.push({day:_,today:A,other:!1})}for(;h.length<42;){let _=h.length-g-u+1;h.push({day:_,other:!0})}let b="";b+=`<div class="calendar-header">${c} ${n}</div>`,b+='<div class="calendar-grid">';for(let _=0;_<7;_++)b+=`<div class="header">${l[_]}</div>`;h.forEach((_,A)=>{let T=[];_.other&&T.push("other-month"),_.today&&T.push("today");let E=A%7;(E===0||E===6)&&T.push("weekend"),b+=`<div class="${T.join(" ")}">${_.day}</div>`}),b+="</div>",e.innerHTML=b}_updateScreensaverSettings(){this.screenSaverEnabled?(this._ensureScreenSaverOverlay(),this._attachScreensaverListeners(),this._resetScreensaverTimer()):(this._screensaverTimer&&(clearTimeout(this._screensaverTimer),this._screensaverTimer=null),this.screensaverActive&&this._deactivateScreenSaver())}_shouldUseScreensaver(){try{if(!this.screenSaverEnabled||this.editMode||typeof this._isInHaEditorPreview=="function"&&this._isInHaEditorPreview()||!this.isConnected)return!1}catch{return!1}return!0}_toast(e){let t=new Event("hass-notification");t.detail={message:e},window.dispatchEvent(t)}_huiRoot(){var e,t,i,n,o,c;try{let l=document.querySelector("home-assistant"),g=(e=l==null?void 0:l.shadowRoot)==null?void 0:e.querySelector("home-assistant-main"),u=((t=g==null?void 0:g.shadowRoot)==null?void 0:t.querySelector("ha-drawer"))||g,m=((i=u==null?void 0:u.shadowRoot)==null?void 0:i.querySelector("partial-panel-resolver"))||u,h=((n=m==null?void 0:m.shadowRoot)==null?void 0:n.querySelector("ha-panel-lovelace"))||((o=u==null?void 0:u.shadowRoot)==null?void 0:o.querySelector("ha-panel-lovelace"));return((c=h==null?void 0:h.shadowRoot)==null?void 0:c.querySelector("hui-root"))||null}catch{return null}}getCardSize(){return 3}};if(!customElements.get("drag-and-drop-card")){let h=function(B,p){var N;let x=String((B==null?void 0:B.type)||""),S=m[x];if(!S)return null;let z=document.createElement(S);try{(N=z.setConfig)==null||N.call(z,B)}catch{}try{z.hass=p}catch{}return z},b=function(B,p,x){return Math.min(x,Math.max(p,B))},y=function(B,p,x=-1/0,S=1/0){let z=Number(B);return Number.isFinite(z)?b(z,x,S):p},_=function(B){return String(B||"").split(",").map(p=>p.trim()).filter(Boolean)},A=function(B){return String(B!=null?B:"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},T=function(B){return A(B).replace(/"/g,"&quot;")},E=function(B){let p=String(B!=null?B:"").trim().toLowerCase();return p?!["0","off","false","closed","idle","unavailable","unknown","none"].includes(p):!1},M=function(B,p){let x=String(B!=null?B:"").trim(),S=x.toLowerCase(),z=String(p!=null?p:"").trim();if(!z)return!1;let N=z.match(/^(>=|<=|>|<|==|=|!=)\s*(-?\d+(?:\.\d+)?)$/);if(N){let G=Number(x),V=Number(N[2]);if(!Number.isFinite(G)||!Number.isFinite(V))return!1;switch(N[1]){case">":return G>V;case"<":return G<V;case">=":return G>=V;case"<=":return G<=V;case"=":case"==":return G===V;case"!=":return G!==V;default:return!1}}let W=z.toLowerCase();return W==="truthy"?E(B):W==="falsy"?!E(B):W==="!off"?S!=="off":S===W},O=function(B,p){let x=_(p);return x.length?x.some(S=>M(B,S)):E(B)},C=function(B=0,p=3){let x=Math.floor(B/Math.max(1,p)),S=B%Math.max(1,p);return x===0?{type:"text",text:["Label","State","Action"][S]||`Column ${S+1}`,icon:"",entity:"",align:S===0?"left":"center",active_states:"on,home,open,playing,charging,active,>0",active_color:"var(--primary-color, #ff9800)",inactive_color:"rgba(148, 163, 184, 0.18)",button_action:"more-info"}:{type:x===1&&S===2?"button":x===1&&S===1?"entity":S===1?"badge":"text",text:x===1&&S===0?"Primary":"",icon:x===2&&S===0?"mdi:flash":"",entity:"",align:S===0?"left":"center",active_states:"on,home,open,playing,charging,active,>0",active_color:"var(--primary-color, #ff9800)",inactive_color:"rgba(148, 163, 184, 0.18)",button_action:"more-info"}},$=function(B={},p=0,x=3){var z,N,W,G,V,J,Z,he,_e,ke,Ee,Fe;let S=C(p,x);return{...S,...B||{},type:String((B==null?void 0:B.type)||S.type||"text").toLowerCase(),text:String((N=(z=B==null?void 0:B.text)!=null?z:S.text)!=null?N:""),icon:String((G=(W=B==null?void 0:B.icon)!=null?W:S.icon)!=null?G:""),entity:String((J=(V=B==null?void 0:B.entity)!=null?V:S.entity)!=null?J:""),align:String((B==null?void 0:B.align)||S.align||"left").toLowerCase(),active_states:String((he=(Z=B==null?void 0:B.active_states)!=null?Z:S.active_states)!=null?he:"on,home,open,playing,charging,active,>0"),active_color:String((ke=(_e=B==null?void 0:B.active_color)!=null?_e:S.active_color)!=null?ke:"var(--primary-color, #ff9800)"),inactive_color:String((Fe=(Ee=B==null?void 0:B.inactive_color)!=null?Ee:S.inactive_color)!=null?Fe:"rgba(148, 163, 184, 0.18)"),button_action:String((B==null?void 0:B.button_action)||S.button_action||"more-info").toLowerCase()}},q=function(B=3,p=3,x=[]){let S=Math.max(1,Math.min(144,Number(B||3)*Number(p||3))),z=Array.isArray(x)?x:[];return Array.from({length:S},(N,W)=>$(z[W],W,p))},F=function(B){return String(B!=null?B:"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},j=function(B){return String(B!=null?B:"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},H=function(B){switch(String(B||"").toLowerCase()){case"header":return{font_size:14,bold:!0,letter_spacing:.16,line_height:1.1};case"h1":return{font_size:56,bold:!0,letter_spacing:-.06,line_height:.96};case"h2":return{font_size:44,bold:!0,letter_spacing:-.045,line_height:1.02};case"h3":return{font_size:34,bold:!0,letter_spacing:-.03,line_height:1.08};case"h4":return{font_size:26,bold:!0,letter_spacing:-.018,line_height:1.14};case"paragraph":case"p":return{font_size:18,bold:!1,letter_spacing:0,line_height:1.58};case"small":return{font_size:13,bold:!1,letter_spacing:.02,line_height:1.42};case"title":default:return{font_size:42,bold:!0,letter_spacing:-.03,line_height:1.05}}},U=function(B){let p=j(String(B!=null?B:""));return p=p.replace(/\*\*\*([\s\S]+?)\*\*\*/g,"<strong><em>$1</em></strong>"),p=p.replace(/\*\*([\s\S]+?)\*\*/g,"<strong>$1</strong>"),p=p.replace(/\*([^*\n]+)\*/g,"<em>$1</em>"),p},X=function(B){let p=String(B!=null?B:"").replace(/\r\n?/g,`
`).split(`
`),x=[];return p.forEach(S=>{let N=String(S!=null?S:"").trimEnd().trim();if(!N){x.push('<div class="ddc-rich-break" aria-hidden="true"></div>');return}if(N.startsWith("###### ")){x.push(`<div class="ddc-rich-line ddc-rich-small">${U(N.slice(7))}</div>`);return}if(N.startsWith("##### ")){x.push(`<div class="ddc-rich-line ddc-rich-header">${U(N.slice(6))}</div>`);return}if(N.startsWith("#### ")){x.push(`<h4 class="ddc-rich-line">${U(N.slice(5))}</h4>`);return}if(N.startsWith("### ")){x.push(`<h3 class="ddc-rich-line">${U(N.slice(4))}</h3>`);return}if(N.startsWith("## ")){x.push(`<h2 class="ddc-rich-line">${U(N.slice(3))}</h2>`);return}if(N.startsWith("# ")){x.push(`<h1 class="ddc-rich-line">${U(N.slice(2))}</h1>`);return}x.push(`<p class="ddc-rich-line">${U(N)}</p>`)}),x.join("")},te=function(B){let p=String(B!=null?B:"");if(!p.trim())return"";let x=document.createElement("template");x.innerHTML=p;let S=new Set(["p","div","br","h1","h2","h3","h4","blockquote","pre","code","ul","ol","li","strong","b","em","i","u","s","small","span","a"]),z=W=>{if(W.nodeType===Node.TEXT_NODE)return document.createTextNode(W.textContent||"");if(W.nodeType!==Node.ELEMENT_NODE)return document.createDocumentFragment();let G=String(W.tagName||"").toLowerCase(),V=G==="b"?"strong":G==="i"?"em":G,J=Array.from(W.childNodes).map(he=>z(he));if(!S.has(G)){let he=document.createDocumentFragment();return J.forEach(_e=>he.appendChild(_e)),he}let Z=document.createElement(V);if(V==="a"){let he=String(W.getAttribute("href")||"").trim();/^(https?:|mailto:|tel:|\/)/i.test(he)&&(Z.setAttribute("href",he),Z.setAttribute("target","_blank"),Z.setAttribute("rel","noreferrer noopener"))}return J.forEach(he=>Z.appendChild(he)),Z},N=document.createElement("div");return Array.from(x.content.childNodes).forEach(W=>N.appendChild(z(W))),N.innerHTML};if(Object.assign(Mi.prototype,{_updateGridButtonsVisibility(){var z,N,W,G;let B=!!this.editMode,x=Number((G=(W=(z=this._config)==null?void 0:z.grid)!=null?W:(N=this._options)==null?void 0:N.grid)!=null?G:10)>=10,S=this.cardContainer;if(!B||!x){this._destroyGridCanvas(),S&&S.classList.toggle("grid-on",B);return}this._buildOrUpdateGridCanvas(),S&&S.classList.remove("grid-on")},_requestGridButtonsUpdateSoon(){clearTimeout(this._gridLayoutT),this._gridLayoutT=setTimeout(()=>this._updateGridButtonsVisibility(),50)},_buildOrUpdateGridCanvas(){var Z,he,_e,ke;let B=this.cardContainer;if(!B||!B.isConnected)return;let p=Number((ke=(_e=(Z=this._config)==null?void 0:Z.grid)!=null?_e:(he=this._options)==null?void 0:he.grid)!=null?ke:10);if(this._gridCellSize=p,!this._gridCanvas){let Ee=document.createElement("canvas");Ee.className="ddc-grid-canvas",B.insertBefore(Ee,B.firstChild||null),this._gridCanvas=Ee,this._gridCtx=Ee.getContext("2d"),Ee.addEventListener("pointerdown",Fe=>this._onGridPointerDown(Fe),{passive:!0}),Ee.addEventListener("pointermove",Fe=>this._onGridPointerMove(Fe),{passive:!0}),Ee.addEventListener("pointerup",Fe=>this._onGridPointerUp(Fe),{passive:!0}),Ee.addEventListener("pointercancel",Fe=>this._onGridPointerCancel(Fe),{passive:!0}),Ee.addEventListener("lostpointercapture",Fe=>this._onGridPointerCancel(Fe),{passive:!0})}let x=B.getBoundingClientRect(),{sx:S,sy:z}=this._getContainerScale_(),N=S&&isFinite(S)?1/S:1,W=z&&isFinite(z)?1/z:1,G=x.width*N,V=x.height*W,J=Math.max(1,window.devicePixelRatio||1);this._gridCanvas.width=Math.max(1,Math.round(G*J)),this._gridCanvas.height=Math.max(1,Math.round(V*J)),this._gridCanvas.style.width=G+"px",this._gridCanvas.style.height=V+"px",this._gridCols=Math.max(1,Math.ceil(G/p)),this._gridRows=Math.max(1,Math.ceil(V/p)),this._buildGridTile_(p,J),this._markGridDirty()},_destroyGridCanvas(){var B;cancelAnimationFrame(this._gridRAF),this._gridRAF=0,(B=this._gridCanvas)!=null&&B.parentElement&&this._gridCanvas.parentElement.removeChild(this._gridCanvas),this._gridCanvas=null,this._gridCtx=null,this._gridTile=null,this._gridDown=!1,this._gridHoverCol=this._gridHoverRow=-1},_buildGridTile_(B,p){let x=Math.min(10,B*.25),S=Math.max(1,Math.round(B)),z=S,N=document.createElement("canvas");N.width=S,N.height=z;let W=N.getContext("2d"),G=0,V=0,J=B,Z=B;W.clearRect(0,0,S,z),W.beginPath();let he=Math.min(x,J/2,Z/2);W.moveTo(G+he,V),W.arcTo(G+J,V,G+J,V+Z,he),W.arcTo(G+J,V+Z,G,V+Z,he),W.arcTo(G,V+Z,G,V,he),W.arcTo(G,V,G+J,V,he),W.closePath(),W.fillStyle="rgba(255,255,255,0.08)",W.fill(),W.strokeStyle="rgba(255,255,255,0.12)",W.lineWidth=1,W.stroke(),this._gridTile=N},_markGridDirty(){this._gridDirty||(this._gridDirty=!0,this._gridRAF=requestAnimationFrame(()=>{this._gridDirty=!1,this._renderGridCanvas_()}))},_renderGridCanvas_(){let B=this._gridCanvas;if(!B)return;let p=this._gridCtx,x=Math.max(1,window.devicePixelRatio||1),S=this._gridCellSize||10;if(p.clearRect(0,0,B.width,B.height),this._gridTile){let z=p.createPattern(this._gridTile,"repeat");p.save(),p.scale(x,x),p.fillStyle=z,p.fillRect(0,0,B.width/x,B.height/x),p.restore()}if(this._gridHoverCol>=0&&this._gridHoverRow>=0){p.save(),p.scale(x,x),p.fillStyle="rgba(0, 160, 255, 0.30)",p.strokeStyle="rgba(0, 160, 255, 0.60)",p.lineWidth=1;let z=this._gridHoverCol*S,N=this._gridHoverRow*S,W=S,G=S;this._roundRect_(p,z,N,W,G,Math.min(10,S*.25)),p.fill(),p.stroke(),p.restore()}if(this._gridDown&&this._gridStartCol>=0&&this._gridStartRow>=0&&this._gridCurrCol>=0&&this._gridCurrRow>=0){let z=Math.min(this._gridStartCol,this._gridCurrCol),N=Math.max(this._gridStartCol,this._gridCurrCol),W=Math.min(this._gridStartRow,this._gridCurrRow),G=Math.max(this._gridStartRow,this._gridCurrRow),V=z*S,J=W*S,Z=(N-z+1)*S,he=(G-W+1)*S;p.save(),p.scale(x,x),p.fillStyle="rgba(0, 160, 255, 0.22)",p.strokeStyle="rgba(0, 160, 255, 0.45)",p.lineWidth=2,this._roundRect_(p,V,J,Z,he,Math.min(12,S*.3)),p.fill(),p.stroke(),p.restore()}},_roundRect_(B,p,x,S,z,N){let W=Math.min(N,S/2,z/2);B.beginPath(),B.moveTo(p+W,x),B.arcTo(p+S,x,p+S,x+z,W),B.arcTo(p+S,x+z,p,x+z,W),B.arcTo(p,x+z,p,x,W),B.arcTo(p,x,p+S,x,W),B.closePath()},_emptySpaceAt_(B,p){let x=document.elementFromPoint(B,p);return!x||!x.closest||!x.closest(".card-wrapper, .resize-handle, .ddc-chip, .shield")},_locToCell_(B,p){let x=this._gridCanvas;if(!x)return{col:-1,row:-1};let S=x.getBoundingClientRect(),{sx:z,sy:N}=this._getContainerScale_(),W=(B-S.left)/(z||1),G=(p-S.top)/(N||1),V=this._gridCellSize||10,J=Math.min(this._gridCols-1,Math.max(0,Math.floor(W/V))),Z=Math.min(this._gridRows-1,Math.max(0,Math.floor(G/V)));return{col:J,row:Z}},_onGridPointerDown(B){var S,z;if(!this._emptySpaceAt_(B.clientX,B.clientY))return;let{col:p,row:x}=this._locToCell_(B.clientX,B.clientY);this._gridDown=!0,this._gridStartCol=p,this._gridStartRow=x,this._gridCurrCol=p,this._gridCurrRow=x,this._markGridDirty(),(z=(S=B.currentTarget).setPointerCapture)==null||z.call(S,B.pointerId)},_onGridPointerMove(B){let{col:p,row:x}=this._locToCell_(B.clientX,B.clientY);if((p!==this._gridHoverCol||x!==this._gridHoverRow)&&(this._gridHoverCol=p,this._gridHoverRow=x,this._markGridDirty()),!this._gridDown)return;let{col:S,row:z}=this._locToCell_(B.clientX,B.clientY);(S!==this._gridCurrCol||z!==this._gridCurrRow)&&(this._gridCurrCol=S,this._gridCurrRow=z,this._markGridDirty())},async _onGridPointerUp(B){if(!this._gridDown)return;this._gridDown=!1;let p=Math.min(this._gridStartCol,this._gridCurrCol),x=Math.max(this._gridStartCol,this._gridCurrCol),S=Math.min(this._gridStartRow,this._gridCurrRow),z=Math.max(this._gridStartRow,this._gridCurrRow);if((x-p+1)*(z-S+1)<2){this._markGridDirty();return}let W=this._gridCellSize||10,G=p*W,V=S*W,J=(x-p+1)*W,Z=(z-S+1)*W;this._markGridDirty(),this._promptNewCardForRect_({x:G,y:V,w:J,h:Z})},_onGridPointerCancel(){this._gridDown=!1,this._markGridDirty()},_installGridObservers_(){try{this.__gridRO&&this.__gridRO.disconnect(),this.__gridRO=new ResizeObserver(()=>this._requestGridButtonsUpdateSoon()),this.cardContainer&&this.__gridRO.observe(this.cardContainer)}catch{}clearInterval(this.__gridPollT),this.__gridPrevEditMode=void 0,this.__gridPollT=setInterval(()=>{let B=!!this.editMode;B!==this.__gridPrevEditMode&&(this.__gridPrevEditMode=B,this._updateGridButtonsVisibility())},300)},_uninstallGridObservers_(){var B,p;try{(p=(B=this.__gridRO)==null?void 0:B.disconnect)==null||p.call(B)}catch{}this.__gridRO=null,clearInterval(this.__gridPollT),this.__gridPollT=null},_gridRectToCardRect_({x:B,y:p,w:x,h:S}){let z=this.cardContainer,N=this._gridCanvas;if(!z||!N)return{x:B,y:p,w:x,h:S};let W=z.scrollLeft||0,G=z.scrollTop||0,V=B+W,J=p+G;return{x:V,y:J,w:x,h:S}},_getContainerScale_(){let B=this.cardContainer;if(!B)return{sx:1,sy:1};let p=getComputedStyle(B).transform;if(!p||p==="none")return{sx:1,sy:1};let x=p.match(/matrix\(([^)]+)\)/);if(x){let[z,,,N]=x[1].split(",").map(W=>parseFloat(W.trim()));return{sx:isFinite(z)&&z?z:1,sy:isFinite(N)&&N?N:1}}let S=p.match(/matrix3d\(([^)]+)\)/);if(S){let z=S[1].split(",").map(N=>parseFloat(N.trim()));return{sx:isFinite(z[0])&&z[0]?z[0]:1,sy:isFinite(z[5])&&z[5]?z[5]:1}}return{sx:1,sy:1}},_canvasRectToContainerRect_({x:B,y:p,w:x,h:S}){let z=this.cardContainer,N=this._gridCanvas;if(!z||!N)return{x:B,y:p,w:x,h:S};let W=getComputedStyle(z),G=parseFloat(W.borderLeftWidth)||0,V=parseFloat(W.borderTopWidth)||0,{sx:J,sy:Z}=this._getContainerScale_(),he=N.getBoundingClientRect(),_e=z.getBoundingClientRect(),ke=he.left+B,Ee=he.top+p,Fe=ke-_e.left,je=Ee-_e.top;Fe-=G,je-=V;let et=J?1/J:1,ct=Z?1/Z:1,Pe=Fe*et,He=je*ct,ht=x*et,tt=S*ct;return{x:Pe,y:He,w:ht,h:tt}},async _promptNewCardForRect_({x:B,y:p,w:x,h:S}){var z,N,W,G,V;try{let J=this._gridCellSize||Number((G=(W=(z=this._config)==null?void 0:z.grid)!=null?W:(N=this._options)==null?void 0:N.grid)!=null?G:10),Z=et=>Math.round(et/J)*J,he=Z(B),_e=Z(p),ke=Math.max(J,Z(x)),Ee=Math.max(J,Z(S)),Fe;try{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&typeof this._canvasRectToContainerRect_=="function"?Fe=this._canvasRectToContainerRect_({x:he,y:_e,w:ke,h:Ee}):typeof this._gridRectToCardRect_=="function"?Fe=this._gridRectToCardRect_({x:he,y:_e,w:ke,h:Ee}):Fe={x:he,y:_e,w:ke,h:Ee}}catch{Fe={x:he,y:_e,w:ke,h:Ee}}let je={x:Math.round(Fe.x),y:Math.round(Fe.y),w:Math.round(Fe.w),h:Math.round(Fe.h)};try{let et=this.cardContainer;if(et){let ct=Array.from(et.querySelectorAll(".card-wrapper:not(.ddc-placeholder)")),Pe=this._normalizeTabId(this.activeTab||this.defaultTab),He=(tt,_t)=>!(_t.x>=tt.x+tt.w||_t.x+_t.w<=tt.x||_t.y>=tt.y+tt.h||_t.y+_t.h<=tt.y),ht=0;for(let tt of ct){if((tt.dataset.tabId?this._normalizeTabId(tt.dataset.tabId):Pe)!==Pe)continue;let Ct=getComputedStyle(tt);if(Ct.display==="none"||Ct.visibility==="hidden")continue;let St=parseFloat(tt.getAttribute("data-x"))||0,xt=parseFloat(tt.getAttribute("data-y"))||0,Mt=parseFloat(tt.style.width)||tt.getBoundingClientRect().width,oe=parseFloat(tt.style.height)||tt.getBoundingClientRect().height;if(He(je,{x:St,y:xt,w:Mt,h:oe})&&(ht++,ht>=2))break}if(ht>=2){this.__pendingAddRect=null;try{(V=this._toast)==null||V.call(this,"Area already contains multiple cards.")}catch{}return}}}catch(et){console.warn("[ddc] selection-area card count check failed",et)}this.__pendingAddRect=je,await this._openSmartPicker("add",null,null)}catch(J){console.warn("[ddc] _promptNewCardForRect_ failed",J)}}}),!Mi.prototype.__addPickedPatched){let B=Mi.prototype._addPickedCardToLayout;Mi.prototype._addPickedCardToLayout=async function(p){var x,S,z,N,W,G,V,J,Z;if(this&&this.__pendingAddRect){let{x:he,y:_e,w:ke,h:Ee}=this.__pendingAddRect;this.__pendingAddRect=null;try{(x=this._hideEmptyPlaceholder)==null||x.call(this)}catch{}let Fe=await this._createCard(p),je=this._makeWrapper(Fe),ct=String(this.containerSizeMode||this.container_size_mode||((S=this._config)==null?void 0:S.container_size_mode)||"dynamic").toLowerCase()==="auto",Pe=ct?-11:11,He=ct?-11:11,ht=Math.round(he)-Pe,tt=Math.round(_e)-He;this._setCardPosition(je,ht,tt),je.style.width=`${Math.round(ke)}px`,je.style.height=`${Math.round(Ee)}px`;{let _t=this._highestZ()+1;je.style.zIndex=String(Math.max(_t,6))}je.dataset.tabId=this._normalizeTabId(this.activeTab||this.defaultTab),this.cardContainer.appendChild(je);try{(z=this._rebuildOnce)==null||z.call(this,je.firstElementChild)}catch{}try{(N=this._initCardInteract)==null||N.call(this,je)}catch{}try{(W=this._resizeContainer)==null||W.call(this)}catch{}try{(G=this._queueSave)==null||G.call(this,"add")}catch{}try{(V=this._toast)==null||V.call(this,"Card added to selection.")}catch{}try{(J=this._syncEmptyStateUI)==null||J.call(this)}catch{}try{(Z=this._applyVisibility_)==null||Z.call(this)}catch{}requestAnimationFrame(()=>{var _t,Ct,St,xt;try{String(this.containerSizeMode||this.container_size_mode||((_t=this._config)==null?void 0:_t.container_size_mode)||"dynamic").toLowerCase()==="auto"?(Ct=this._applyAutoFillNoScale)==null||Ct.call(this):this.autoResizeCards&&((St=this._applyAutoScale)==null||St.call(this)),(xt=this._requestGridButtonsUpdateSoon)==null||xt.call(this)}catch{}});return}return await B.call(this,p)},Mi.prototype.__addPickedPatched=!0}let r="ddc-html-card",w="ddc-html-card-editor",e="ddc-line-card",t="ddc-line-card-editor",i="ddc-table-card",n="ddc-table-card-editor",o="ddc-icon-card",c="ddc-icon-card-editor",l="ddc-text-card",g="ddc-text-card-editor",u=Object.getPrototypeOf(async function(){}).constructor,m={"custom:ddc-html-card":r,"custom:ddc-line-card":e,"custom:ddc-table-card":i,"custom:ddc-icon-card":o,"custom:ddc-text-card":l};class re extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config=null,this._hass=null,this._shellReady=!1}static getStubConfig(){return{type:"custom:ddc-line-card",title:"",entity:"",active_states:"on,home,open,playing,charging,active,>0",direction:"horizontal",arrows:"end",flow_direction:"auto",line_style:"solid",thickness:10,animate_mode:"active",animation_speed:1.8,active_color:"var(--primary-color, #ff9800)",inactive_color:"rgba(148, 163, 184, 0.42)",glow:!0,rounded:!0}}static async getConfigElement(){return document.createElement(t)}async getConfigElement(){return document.createElement(t)}setConfig(p){this._config={...re.getStubConfig(),...p||{}},this._renderCard_()}set hass(p){this._hass=p,this._renderCard_()}get hass(){return this._hass}connectedCallback(){this._config&&this._renderCard_()}getCardSize(){return 1}_ensureShell_(){this._shellReady||!this.shadowRoot||(this.shadowRoot.innerHTML=`
        <style>
          :host{
            display:block;
            width:100%;
            height:100%;
            min-height:100%;
            color:var(--primary-text-color);
          }
          ha-card{
            display:block;
            width:100%;
            height:100%;
            min-height:100%;
            background:transparent;
            box-shadow:none;
            border-radius:inherit;
            overflow:visible;
          }
          .shell{
            position:relative;
            width:100%;
            height:100%;
            min-height:100%;
            padding:6px;
            box-sizing:border-box;
            --ddc-line-active: var(--primary-color, #ff9800);
            --ddc-line-inactive: rgba(148, 163, 184, 0.42);
            --ddc-line-thickness: 10;
            --ddc-line-speed: 1.8s;
          }
          .line-title{
            position:absolute;
            top:8px;
            left:10px;
            z-index:2;
            max-width:calc(100% - 20px);
            padding:6px 10px;
            border-radius:999px;
            background:rgba(15, 23, 42, 0.58);
            backdrop-filter:blur(8px);
            border:1px solid rgba(255,255,255,.08);
            color:rgba(248, 250, 252, 0.96);
            font-size:.76rem;
            font-weight:700;
            letter-spacing:.04em;
            text-transform:uppercase;
            white-space:nowrap;
            overflow:hidden;
            text-overflow:ellipsis;
          }
          .canvas{
            position:relative;
            width:100%;
            height:100%;
            min-height:100%;
          }
          svg{
            width:100%;
            height:100%;
            display:block;
            overflow:visible;
          }
          .track,
          .line,
          .flow{
            fill:none;
            vector-effect:non-scaling-stroke;
            stroke-width:var(--ddc-line-thickness);
          }
          .track{
            stroke:var(--ddc-line-inactive);
            opacity:.35;
          }
          .line{
            stroke:var(--ddc-line-color, var(--ddc-line-inactive));
            filter:none;
          }
          .shell.is-glow .line{
            filter:drop-shadow(0 0 10px color-mix(in srgb, var(--ddc-line-color, var(--ddc-line-inactive)) 42%, transparent));
          }
          .flow{
            stroke:rgba(255,255,255,.92);
            stroke-linecap:round;
            opacity:0;
          }
          .shell.is-animating .flow{
            opacity:.86;
            animation:ddc-line-flow var(--ddc-line-speed) linear infinite;
          }
          .shell.is-animating .flow.reverse{
            animation-direction:reverse;
          }
          .endpoint{
            fill:var(--ddc-line-color, var(--ddc-line-inactive));
            opacity:.96;
          }
          .shell:not(.show-start-dot) .endpoint.start,
          .shell:not(.show-end-dot) .endpoint.end{
            display:none;
          }
          .shell.is-idle .endpoint{
            opacity:.68;
          }
          @keyframes ddc-line-flow{
            from { stroke-dashoffset: 54; }
            to { stroke-dashoffset: 0; }
          }
        </style>
        <ha-card>
          <div class="shell">
            <div class="line-title" hidden></div>
            <div class="canvas"></div>
          </div>
        </ha-card>`,this._shellEl=this.shadowRoot.querySelector(".shell"),this._titleEl=this.shadowRoot.querySelector(".line-title"),this._canvasEl=this.shadowRoot.querySelector(".canvas"),this._shellReady=!0)}_resolveDirection_(){var S;let p=String(((S=this._config)==null?void 0:S.direction)||"horizontal").toLowerCase();if(p!=="auto")return p;let x=this.getBoundingClientRect();return x.width>=x.height?"horizontal":"vertical"}_buildPath_(p){switch(p){case"vertical":return{path:"M 50 10 L 50 90",start:[50,10],end:[50,90]};case"diagonal-up":return{path:"M 10 90 L 90 10",start:[10,90],end:[90,10]};case"diagonal-down":return{path:"M 10 10 L 90 90",start:[10,10],end:[90,90]};case"elbow-right-down":return{path:"M 10 12 L 68 12 L 68 90 L 90 90",start:[10,12],end:[90,90]};case"elbow-right-up":return{path:"M 10 90 L 68 90 L 68 10 L 90 10",start:[10,90],end:[90,10]};case"elbow-left-down":return{path:"M 90 10 L 32 10 L 32 90 L 10 90",start:[90,10],end:[10,90]};case"elbow-left-up":return{path:"M 90 90 L 32 90 L 32 10 L 10 10",start:[90,90],end:[10,10]};case"horizontal":default:return{path:"M 10 50 L 90 50",start:[10,50],end:[90,50]}}}_getLineStyle_(p,x,S){let z=String(p||"solid").toLowerCase(),N=S||z==="dotted"?"round":"square",W=S?"round":"miter",G="";return z==="dashed"?G=`${Math.max(8,x*1.65)} ${Math.max(6,x*1.05)}`:z==="dotted"&&(G=`0 ${Math.max(8,x*1.35)}`),{cap:N,join:W,dasharray:G}}_renderCard_(){var Ve,De,Ze;if(!this._config||(this._ensureShell_(),!this._shellEl||!this._canvasEl))return;let p=this._config||{},x=String(p.entity||"").trim(),S=x?(De=(Ve=this._hass)==null?void 0:Ve.states)==null?void 0:De[x]:null,z=(Ze=S==null?void 0:S.state)!=null?Ze:"",N=x?O(z,p.active_states):!0,W=y(p.thickness,10,2,28),G=String(p.active_color||"var(--primary-color, #ff9800)"),V=String(p.inactive_color||"rgba(148, 163, 184, 0.42)"),J=String(p.animate_mode||"active").toLowerCase(),Z=J==="always"||J==="active"&&N,he=`${y(p.animation_speed,1.8,.4,8).toFixed(2)}s`,_e=this._resolveDirection_(),ke=String(p.arrows||"end").toLowerCase(),Ee=String(p.flow_direction||"auto").toLowerCase(),Fe=Number(z),je=Ee==="auto"?Number.isFinite(Fe)&&Fe<0?"reverse":"forward":Ee==="reverse"?"reverse":"forward",et=p.rounded!==!1,ct=ke==="start"||ke==="both",Pe=ke==="end"||ke==="both",He=N?G:V,{path:ht,start:tt,end:_t}=this._buildPath_(_e),{cap:Ct,join:St,dasharray:xt}=this._getLineStyle_(p.line_style,W,et),Mt=`${Math.max(18,W*2.4)} ${Math.max(10,W*1.35)}`,oe=String(p.title||"").trim(),pe=ct?"url(#ddc-line-arrow-start)":"none",Ke=Pe?"url(#ddc-line-arrow-end)":"none";this._shellEl.style.setProperty("--ddc-line-active",G),this._shellEl.style.setProperty("--ddc-line-inactive",V),this._shellEl.style.setProperty("--ddc-line-color",He),this._shellEl.style.setProperty("--ddc-line-thickness",`${W}`),this._shellEl.style.setProperty("--ddc-line-speed",he),this._shellEl.classList.toggle("is-active",N),this._shellEl.classList.toggle("is-idle",!N),this._shellEl.classList.toggle("is-animating",Z),this._shellEl.classList.toggle("is-glow",p.glow!==!1),this._shellEl.classList.toggle("show-start-dot",!ct),this._shellEl.classList.toggle("show-end-dot",!Pe),this._titleEl.hidden=!oe,this._titleEl.textContent=oe,this._canvasEl.innerHTML=`
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" role="presentation" aria-hidden="true">
          <defs>
            <marker id="ddc-line-arrow-end" markerWidth="12" markerHeight="12" refX="10.4" refY="6" orient="auto" markerUnits="strokeWidth">
              <path d="M 0 0 L 12 6 L 0 12 z" fill="${T(He)}"></path>
            </marker>
            <marker id="ddc-line-arrow-start" markerWidth="12" markerHeight="12" refX="1.6" refY="6" orient="auto-start-reverse" markerUnits="strokeWidth">
              <path d="M 12 0 L 0 6 L 12 12 z" fill="${T(He)}"></path>
            </marker>
          </defs>
          <path
            class="track"
            d="${ht}"
            stroke-linecap="${Ct}"
            stroke-linejoin="${St}"
            ${xt?`stroke-dasharray="${xt}"`:""}
          ></path>
          <path
            class="line"
            d="${ht}"
            marker-start="${pe}"
            marker-end="${Ke}"
            stroke-linecap="${Ct}"
            stroke-linejoin="${St}"
            ${xt?`stroke-dasharray="${xt}"`:""}
          ></path>
          <path
            class="flow ${je==="reverse"?"reverse":"forward"}"
            d="${ht}"
            marker-start="${ct&&je==="reverse"?pe:"none"}"
            marker-end="${Pe&&je!=="reverse"?Ke:"none"}"
            stroke-dasharray="${Mt}"
            stroke-linecap="${Ct}"
            stroke-linejoin="${St}"
          ></path>
          <circle class="endpoint start" cx="${tt[0]}" cy="${tt[1]}" r="${Math.max(2.8,Math.min(7.5,W*.52))}"></circle>
          <circle class="endpoint end" cx="${_t[0]}" cy="${_t[1]}" r="${Math.max(2.8,Math.min(7.5,W*.52))}"></circle>
        </svg>`}}class le extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config=re.getStubConfig(),this._emitTimer=null,this._configSig=""}setConfig(p){let x={...re.getStubConfig(),...p||{}},S=JSON.stringify(x);S!==this._configSig&&(this._configSig=S,this._config=x,this._renderEditor_())}set hass(p){this._hass=p,this.shadowRoot.childElementCount||this._renderEditor_()}_queueEmit_(){clearTimeout(this._emitTimer),this._emitTimer=setTimeout(()=>{this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:{...this._config}}}))},120)}_bindText_(p,x){let S=this.shadowRoot.querySelector(p);S&&S.addEventListener("input",()=>{this._config[x]=S.value,this._queueEmit_()})}_bindSelect_(p,x){let S=this.shadowRoot.querySelector(p);S&&S.addEventListener("change",()=>{this._config[x]=S.value,this._queueEmit_()})}_bindNumber_(p,x){let S=this.shadowRoot.querySelector(p);if(!S)return;let z=()=>{let N=S.value===""?"":Number(S.value);this._config[x]=Number.isFinite(N)?N:this._config[x],this._queueEmit_()};S.addEventListener("change",z),S.addEventListener("blur",z)}_bindCheckbox_(p,x){let S=this.shadowRoot.querySelector(p);S&&S.addEventListener("change",()=>{this._config[x]=!!S.checked,this._queueEmit_()})}_renderEditor_(){var S,z,N;let p=this._config||re.getStubConfig(),x=Object.keys(((S=this._hass)==null?void 0:S.states)||{}).sort((W,G)=>W.localeCompare(G)).map(W=>`<option value="${T(W)}"></option>`).join("");this.shadowRoot.innerHTML=`
        <style>
          :host{
            display:block;
            color:var(--primary-text-color);
          }
          .editor{
            display:grid;
            gap:14px;
          }
          .intro{
            display:grid;
            gap:8px;
            padding:14px 16px;
            border-radius:16px;
            background:rgba(255,255,255,.025);
            border:1px solid rgba(255,255,255,.08);
            line-height:1.5;
            color:var(--secondary-text-color, #94a3b8);
          }
          .intro strong{
            color:var(--primary-text-color);
          }
          .grid{
            display:grid;
            gap:14px;
            grid-template-columns:repeat(2, minmax(0, 1fr));
          }
          .field{
            display:grid;
            gap:8px;
            min-width:0;
          }
          .field.full{
            grid-column:1 / -1;
          }
          label{
            display:grid;
            gap:6px;
            font-size:.9rem;
            font-weight:650;
          }
          .hint{
            font-size:.78rem;
            color:var(--secondary-text-color, #94a3b8);
            font-weight:500;
            line-height:1.45;
          }
          input[type="text"], input[type="number"], select{
            width:100%;
            box-sizing:border-box;
            border-radius:14px;
            border:1px solid rgba(255,255,255,.1);
            background:rgba(4,9,18,.82);
            color:var(--primary-text-color);
            padding:12px 14px;
            outline:none;
            box-shadow:inset 0 1px 0 rgba(255,255,255,.03);
            font:inherit;
          }
          input[type="text"]:focus,
          input[type="number"]:focus,
          select:focus{
            border-color:color-mix(in oklab, var(--primary-color, #ff9800) 58%, rgba(255,255,255,.12));
            box-shadow:
              0 0 0 3px color-mix(in oklab, var(--primary-color, #ff9800) 18%, transparent),
              inset 0 1px 0 rgba(255,255,255,.04);
          }
          .toggles{
            display:flex;
            align-items:center;
            gap:12px;
            flex-wrap:wrap;
          }
          .switch{
            display:inline-flex;
            align-items:center;
            gap:10px;
            min-height:48px;
            padding:0 14px;
            border-radius:14px;
            border:1px solid rgba(255,255,255,.08);
            background:rgba(255,255,255,.03);
          }
          @media (max-width: 760px){
            .grid{
              grid-template-columns:1fr;
            }
            .field.full{
              grid-column:auto;
            }
          }
        </style>
        <div class="editor">
          <div class="intro">
            <strong>Connect cards with a live line</strong>
            <span>Use this as a transparent overlay card between other cards. You can animate the line, switch arrows, and tie the active style to a Home Assistant entity state.</span>
          </div>

          <datalist id="ddc-line-entities">${x}</datalist>

          <div class="grid">
            <label class="field">
              <span>Title</span>
              <input id="title" type="text" value="${T(p.title||"")}" placeholder="Optional label">
            </label>

            <label class="field">
              <span>Entity</span>
              <input id="entity" type="text" list="ddc-line-entities" value="${T(p.entity||"")}" placeholder="sensor.energy_flow">
              <span class="hint">Used to decide active state and auto flow direction.</span>
            </label>

            <label class="field full">
              <span>Active states</span>
              <input id="active_states" type="text" value="${T(p.active_states||"")}" placeholder="on,home,open,>0">
              <span class="hint">Comma-separated. Supports exact states and numeric rules like <code>&gt;0</code>, <code>&lt;=10</code>.</span>
            </label>

            <label class="field">
              <span>Direction</span>
              <select id="direction">
                ${this._option_("horizontal","Horizontal",p.direction)}
                ${this._option_("vertical","Vertical",p.direction)}
                ${this._option_("diagonal-down","Diagonal down",p.direction)}
                ${this._option_("diagonal-up","Diagonal up",p.direction)}
                ${this._option_("elbow-right-down","Elbow right down",p.direction)}
                ${this._option_("elbow-right-up","Elbow right up",p.direction)}
                ${this._option_("elbow-left-down","Elbow left down",p.direction)}
                ${this._option_("elbow-left-up","Elbow left up",p.direction)}
                ${this._option_("auto","Auto (width/height)",p.direction)}
              </select>
            </label>

            <label class="field">
              <span>Arrows</span>
              <select id="arrows">
                ${this._option_("none","No arrows",p.arrows)}
                ${this._option_("start","Arrow at start",p.arrows)}
                ${this._option_("end","Arrow at end",p.arrows)}
                ${this._option_("both","Arrow at both ends",p.arrows)}
              </select>
            </label>

            <label class="field">
              <span>Flow direction</span>
              <select id="flow_direction">
                ${this._option_("auto","Auto from entity value",p.flow_direction)}
                ${this._option_("forward","Forward",p.flow_direction)}
                ${this._option_("reverse","Reverse",p.flow_direction)}
              </select>
            </label>

            <label class="field">
              <span>Line style</span>
              <select id="line_style">
                ${this._option_("solid","Solid",p.line_style)}
                ${this._option_("dashed","Dashed",p.line_style)}
                ${this._option_("dotted","Dotted",p.line_style)}
              </select>
            </label>

            <label class="field">
              <span>Animate</span>
              <select id="animate_mode">
                ${this._option_("active","Only when active",p.animate_mode)}
                ${this._option_("always","Always",p.animate_mode)}
                ${this._option_("never","Never",p.animate_mode)}
              </select>
            </label>

            <label class="field">
              <span>Thickness</span>
              <input id="thickness" type="number" min="2" max="28" step="1" value="${T((z=p.thickness)!=null?z:10)}">
            </label>

            <label class="field">
              <span>Animation speed (s)</span>
              <input id="animation_speed" type="number" min="0.4" max="8" step="0.1" value="${T((N=p.animation_speed)!=null?N:1.8)}">
            </label>

            <label class="field">
              <span>Active color</span>
              <input id="active_color" type="text" value="${T(p.active_color||"")}" placeholder="var(--primary-color)">
            </label>

            <label class="field">
              <span>Inactive color</span>
              <input id="inactive_color" type="text" value="${T(p.inactive_color||"")}" placeholder="rgba(148,163,184,.42)">
            </label>

            <div class="field full">
              <span>Toggles</span>
              <div class="toggles">
                <label class="switch">
                  <input id="glow" type="checkbox" ${p.glow!==!1?"checked":""}>
                  <span>Glow</span>
                </label>
                <label class="switch">
                  <input id="rounded" type="checkbox" ${p.rounded!==!1?"checked":""}>
                  <span>Rounded corners / caps</span>
                </label>
              </div>
            </div>
          </div>
        </div>`,this._bindText_("#title","title"),this._bindText_("#entity","entity"),this._bindText_("#active_states","active_states"),this._bindText_("#active_color","active_color"),this._bindText_("#inactive_color","inactive_color"),this._bindSelect_("#direction","direction"),this._bindSelect_("#arrows","arrows"),this._bindSelect_("#flow_direction","flow_direction"),this._bindSelect_("#line_style","line_style"),this._bindSelect_("#animate_mode","animate_mode"),this._bindNumber_("#thickness","thickness"),this._bindNumber_("#animation_speed","animation_speed"),this._bindCheckbox_("#glow","glow"),this._bindCheckbox_("#rounded","rounded")}_option_(p,x,S){return`<option value="${T(p)}" ${String(S||"")===p?"selected":""}>${A(x)}</option>`}}class Le extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config=Le.getStubConfig(),this._hass=null,this._shellReady=!1,this._boundCellClick=this._handleCellClick_.bind(this)}static getStubConfig(){return{type:"custom:ddc-table-card",title:"",rows:3,columns:3,header_row:!0,border:!0,radius:16,spacing:8,cells:q(3,3,[])}}static async getConfigElement(){return document.createElement(n)}async getConfigElement(){return document.createElement(n)}setConfig(p){let x=y(p==null?void 0:p.rows,3,1,18),S=y(p==null?void 0:p.columns,3,1,12);this._config={...Le.getStubConfig(),...p||{},rows:x,columns:S,header_row:(p==null?void 0:p.header_row)!==!1,border:(p==null?void 0:p.border)!==!1,radius:y(p==null?void 0:p.radius,16,0,40),spacing:y(p==null?void 0:p.spacing,8,0,32),cells:q(x,S,(p==null?void 0:p.cells)||[])},this._renderCard_()}set hass(p){this._hass=p,this._renderCard_()}get hass(){return this._hass}connectedCallback(){this._config&&this._renderCard_()}getCardSize(){var x,S;let p=Number(((x=this._config)==null?void 0:x.rows)||3)||3;return Math.max(1,Math.ceil((p+((S=this._config)!=null&&S.title?1:0))/2))}_ensureShell_(){var p;this._shellReady||!this.shadowRoot||(this.shadowRoot.innerHTML=`
        <style>
          :host{
            display:block;
            width:100%;
            height:100%;
            min-height:100%;
            color:var(--primary-text-color);
          }
          ha-card{
            display:block;
            width:100%;
            height:100%;
            min-height:100%;
            background:transparent;
            box-shadow:none;
            border-radius:inherit;
            overflow:visible;
          }
          .shell{
            display:grid;
            gap:12px;
            height:100%;
            min-height:100%;
            padding:8px;
            box-sizing:border-box;
          }
          .title{
            display:none;
            margin:0;
            font-size:1rem;
            font-weight:800;
            letter-spacing:-0.03em;
            line-height:1.1;
          }
          .title.show{
            display:block;
          }
          .table-grid{
            display:grid;
            grid-template-columns:repeat(var(--ddc-table-columns, 3), minmax(0, 1fr));
            gap:var(--ddc-table-gap, 8px);
            align-content:start;
            min-height:0;
          }
          .table-cell{
            min-height:70px;
            display:grid;
            gap:8px;
            align-content:center;
            justify-items:start;
            padding:14px;
            box-sizing:border-box;
            border-radius:var(--ddc-table-radius, 16px);
            background:var(--ddc-table-cell-fill, rgba(255,255,255,.035));
            border:1px solid var(--ddc-table-cell-border, rgba(255,255,255,.08));
            text-align:left;
            overflow:hidden;
            position:relative;
          }
          .table-cell.align-center{
            justify-items:center;
            text-align:center;
          }
          .table-cell.align-right{
            justify-items:end;
            text-align:right;
          }
          .table-cell.no-border{
            border-color:transparent;
          }
          .table-cell.is-header{
            min-height:56px;
            align-content:center;
            background:rgba(255,255,255,.055);
            border-color:rgba(255,255,255,.1);
          }
          .table-cell.is-header .cell-text,
          .table-cell.is-header .cell-label{
            font-size:.76rem;
            font-weight:800;
            letter-spacing:.08em;
            text-transform:uppercase;
            color:rgba(241,245,249,.96);
          }
          .cell-stack{
            display:grid;
            gap:6px;
            min-width:0;
            width:100%;
          }
          .cell-label{
            font-size:.78rem;
            font-weight:700;
            color:rgba(203,213,225,.88);
            overflow:hidden;
            text-overflow:ellipsis;
            white-space:nowrap;
          }
          .cell-value,
          .cell-text{
            font-size:1rem;
            font-weight:800;
            line-height:1.15;
            overflow:hidden;
            text-overflow:ellipsis;
          }
          .cell-value{
            font-size:1.1rem;
          }
          .cell-meta{
            font-size:.8rem;
            color:rgba(203,213,225,.76);
          }
          .cell-icon-chip{
            width:42px;
            height:42px;
            display:grid;
            place-items:center;
            border-radius:14px;
            background:color-mix(in srgb, var(--ddc-table-cell-tone, rgba(148,163,184,.35)) 22%, rgba(255,255,255,.04));
            color:var(--ddc-table-cell-tone, var(--primary-color, #ff9800));
            flex-shrink:0;
          }
          .cell-icon-chip ha-icon{
            width:24px;
            height:24px;
          }
          .cell-inline{
            display:flex;
            align-items:center;
            gap:10px;
            min-width:0;
            width:100%;
          }
          .cell-badge{
            display:inline-flex;
            align-items:center;
            gap:8px;
            width:fit-content;
            max-width:100%;
            padding:8px 12px;
            border-radius:999px;
            background:color-mix(in srgb, var(--ddc-table-cell-tone, rgba(148,163,184,.4)) 18%, rgba(255,255,255,.04));
            color:var(--ddc-table-cell-tone, var(--primary-color, #ff9800));
            font-size:.82rem;
            font-weight:800;
            overflow:hidden;
            text-overflow:ellipsis;
            white-space:nowrap;
          }
          .cell-button{
            display:inline-flex;
            align-items:center;
            justify-content:center;
            gap:8px;
            min-height:42px;
            width:100%;
            max-width:100%;
            padding:11px 14px;
            border:0;
            border-radius:14px;
            background:linear-gradient(180deg, color-mix(in srgb, var(--ddc-table-cell-tone, var(--primary-color, #ff9800)) 82%, #fff 10%), color-mix(in srgb, var(--ddc-table-cell-tone, var(--primary-color, #ff9800)) 92%, #000 4%));
            color:#fff;
            font:inherit;
            font-weight:800;
            cursor:pointer;
            box-shadow:0 8px 20px color-mix(in srgb, var(--ddc-table-cell-tone, var(--primary-color, #ff9800)) 20%, transparent);
          }
          .cell-button:disabled{
            opacity:.52;
            cursor:default;
          }
          .cell-button ha-icon{
            width:18px;
            height:18px;
          }
        </style>
        <ha-card>
          <div class="shell">
            <h3 class="title"></h3>
            <div class="table-grid"></div>
          </div>
        </ha-card>`,this._titleEl=this.shadowRoot.querySelector(".title"),this._gridEl=this.shadowRoot.querySelector(".table-grid"),(p=this._gridEl)==null||p.addEventListener("click",this._boundCellClick),this._shellReady=!0)}_handleCellClick_(p){var N,W,G,V;let x=(W=(N=p.target)==null?void 0:N.closest)==null?void 0:W.call(N,"[data-table-button-index]");if(!x)return;p.stopPropagation();let S=Number(x.dataset.tableButtonIndex);if(!Number.isFinite(S))return;let z=(V=(G=this._config)==null?void 0:G.cells)==null?void 0:V[S];z&&this._runButtonAction_(z)}_fireMoreInfo_(p){if(p)try{this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:p},bubbles:!0,composed:!0}))}catch{}}_runButtonAction_(p){var z,N;let x=String((p==null?void 0:p.entity)||"").trim(),S=String((p==null?void 0:p.button_action)||"more-info").toLowerCase();if(!(!x||S==="none")){if(S==="toggle"){try{(N=(z=this._hass)==null?void 0:z.callService)==null||N.call(z,"homeassistant","toggle",{entity_id:x})}catch{}return}this._fireMoreInfo_(x)}}_formatEntityState_(p){var z,N;if(!p)return"--";let x=String((z=p.state)!=null?z:"").trim()||"--",S=String(((N=p.attributes)==null?void 0:N.unit_of_measurement)||"").trim();return S?x.includes(S)?x:`${x} ${S}`:x}_resolveCellContext_(p){var _e,ke,Ee,Fe;let x=String((p==null?void 0:p.entity)||"").trim(),S=x?(ke=(_e=this._hass)==null?void 0:_e.states)==null?void 0:ke[x]:null,z=(Ee=S==null?void 0:S.state)!=null?Ee:"",N=x?O(z,p.active_states):!1,W=String((p==null?void 0:p.active_color)||"var(--primary-color, #ff9800)"),G=String((p==null?void 0:p.inactive_color)||"rgba(148, 163, 184, 0.18)"),V=N?W:G,J=x?`color-mix(in srgb, ${V} ${N?18:12}%, rgba(8, 15, 27, 0.94))`:"rgba(255,255,255,.035)",Z=x?`color-mix(in srgb, ${V} ${N?52:26}%, rgba(255,255,255,.08))`:"rgba(255,255,255,.08)",he=String(((Fe=S==null?void 0:S.attributes)==null?void 0:Fe.friendly_name)||x||"").trim();return{entity:S,entityId:x,stateValue:z,active:N,tone:V,fill:J,border:Z,friendly:he,stateLabel:this._formatEntityState_(S)}}_renderCellMarkup_(p,x,S){var Fe,je,et,ct;let z=this._resolveCellContext_(p),N=["left","center","right"].includes(String(p.align||"").toLowerCase())?String(p.align).toLowerCase():"left",W=Math.floor(x/Math.max(1,S)),G=!!((Fe=this._config)!=null&&Fe.header_row)&&W===0,V=String(p.text||"").trim(),J=String(p.icon||((et=(je=z.entity)==null?void 0:je.attributes)==null?void 0:et.icon)||"").trim(),Z=String(p.type||"text").toLowerCase(),he=V||z.friendly||`Cell ${x+1}`,_e=z.stateLabel||"--",ke=["table-cell",`align-${N}`,G?"is-header":"",((ct=this._config)==null?void 0:ct.border)===!1?"no-border":""].filter(Boolean).join(" "),Ee=`--ddc-table-cell-tone:${F(z.tone)};--ddc-table-cell-fill:${F(z.fill)};--ddc-table-cell-border:${F(z.border)};`;if(Z==="icon")return`
          <article class="${ke}" style="${Ee}">
            <div class="cell-inline">
              <div class="cell-icon-chip">${J?`<ha-icon icon="${F(J)}"></ha-icon>`:""}</div>
              <div class="cell-stack">
                <span class="cell-label">${j(he)}</span>
                ${z.entityId?`<span class="cell-meta">${j(_e)}</span>`:""}
              </div>
            </div>
          </article>`;if(Z==="entity")return`
          <article class="${ke}" style="${Ee}">
            <div class="cell-stack">
              <span class="cell-label">${j(he)}</span>
              <strong class="cell-value">${j(_e)}</strong>
            </div>
          </article>`;if(Z==="badge")return`
          <article class="${ke}" style="${Ee}">
            <div class="cell-stack">
              ${V?`<span class="cell-label">${j(V)}</span>`:""}
              <span class="cell-badge">${J?`<ha-icon icon="${F(J)}"></ha-icon>`:""}${j(_e)}</span>
            </div>
          </article>`;if(Z==="button"){let Pe=V||z.friendly||"Open",He=J?`<ha-icon icon="${F(J)}"></ha-icon>`:"";return`
          <article class="${ke}" style="${Ee}">
            <div class="cell-stack">
              <button class="cell-button" type="button" data-table-button-index="${x}" ${z.entityId?"":"disabled"}>
                ${He}<span>${j(Pe)}</span>
              </button>
              ${z.entityId?`<span class="cell-meta">${j(_e)}</span>`:'<span class="cell-meta">Assign an entity to enable this button.</span>'}
            </div>
          </article>`}return`
        <article class="${ke}" style="${Ee}">
          <div class="cell-stack">
            <span class="cell-text">${j(he)}</span>
            ${z.entityId?`<span class="cell-meta">${j(_e)}</span>`:""}
          </div>
        </article>`}_renderCard_(){if(this._ensureShell_(),!this._gridEl||!this._titleEl||!this._config)return;let p=this._config;this._titleEl.textContent=String(p.title||"").trim(),this._titleEl.classList.toggle("show",!!String(p.title||"").trim()),this._gridEl.style.setProperty("--ddc-table-columns",`${Math.max(1,Number(p.columns||3)||3)}`),this._gridEl.style.setProperty("--ddc-table-gap",`${Math.max(0,Number(p.spacing||8)||0)}px`),this._gridEl.style.setProperty("--ddc-table-radius",`${Math.max(0,Number(p.radius||16)||0)}px`);let x=q(p.rows||3,p.columns||3,p.cells||[]);this._gridEl.innerHTML=x.map((S,z)=>this._renderCellMarkup_(S,z,p.columns||3)).join("")}}class me extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config=Le.getStubConfig(),this._configSig="",this._emitTimer=null,this._eventsBound=!1,this._onInput=this._handleEditorInput_.bind(this),this._onChange=this._handleEditorChange_.bind(this),this._onBlur=this._handleEditorBlur_.bind(this)}setConfig(p){let x=this._normalizeConfig_(p||{}),S=JSON.stringify(x);S!==this._configSig&&(this._configSig=S,this._config=x,this._renderEditor_())}set hass(p){this._hass=p,this.shadowRoot.childElementCount||this._renderEditor_()}_normalizeConfig_(p){let x=y(p==null?void 0:p.rows,3,1,18),S=y(p==null?void 0:p.columns,3,1,12);return{...Le.getStubConfig(),...p||{},rows:x,columns:S,header_row:(p==null?void 0:p.header_row)!==!1,border:(p==null?void 0:p.border)!==!1,radius:y(p==null?void 0:p.radius,16,0,40),spacing:y(p==null?void 0:p.spacing,8,0,32),cells:q(x,S,(p==null?void 0:p.cells)||[])}}_queueEmit_(){clearTimeout(this._emitTimer),this._emitTimer=setTimeout(()=>{this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:{...this._config,cells:this._config.cells.map(p=>({...p}))}}}))},120)}_ensureListeners_(){this._eventsBound||!this.shadowRoot||(this.shadowRoot.addEventListener("input",this._onInput),this.shadowRoot.addEventListener("change",this._onChange),this.shadowRoot.addEventListener("blur",this._onBlur,!0),this._eventsBound=!0)}_handleEditorInput_(p){let x=p.target;if(x instanceof HTMLElement){if(x.id==="tableTitle"){this._config.title=x.value||"",this._queueEmit_();return}x.dataset.cellIndex&&this._updateCellField_(x)}}_handleEditorChange_(p){let x=p.target;if(x instanceof HTMLElement){if(x.id==="tableRows"||x.id==="tableColumns"){this._applyDimensionsFromInputs_();return}if(x.id==="tableHeaderRow"){this._config.header_row=!!x.checked,this._queueEmit_();return}if(x.id==="tableBorder"){this._config.border=!!x.checked,this._queueEmit_();return}if(x.id==="tableRadius"){this._config.radius=y(x.value,this._config.radius||16,0,40),this._queueEmit_();return}if(x.id==="tableSpacing"){this._config.spacing=y(x.value,this._config.spacing||8,0,32),this._queueEmit_();return}x.dataset.cellIndex&&this._updateCellField_(x)}}_handleEditorBlur_(p){let x=p.target;x instanceof HTMLElement&&(x.id==="tableRows"||x.id==="tableColumns")&&this._applyDimensionsFromInputs_()}_applyDimensionsFromInputs_(){let p=this.shadowRoot.querySelector("#tableRows"),x=this.shadowRoot.querySelector("#tableColumns"),S=y(p==null?void 0:p.value,this._config.rows||3,1,18),z=y(x==null?void 0:x.value,this._config.columns||3,1,12);S===this._config.rows&&z===this._config.columns||(this._config.rows=S,this._config.columns=z,this._config.cells=q(S,z,this._config.cells||[]),this._renderEditor_(),this._queueEmit_())}_updateCellField_(p){var G,V,J;let x=Number(p.dataset.cellIndex),S=String(p.dataset.key||"").trim();if(!Number.isFinite(x)||!S||!((V=(G=this._config)==null?void 0:G.cells)!=null&&V[x]))return;let z={...this._config.cells[x]},N=p.type==="checkbox"?!!p.checked:p.value;["type","align","button_action"].includes(S)&&(N=String(N||"").toLowerCase()),["text","icon","entity","active_states","active_color","inactive_color"].includes(S)&&(N=String(N||"")),z[S]=N,this._config.cells[x]=$(z,x,this._config.columns||3);let W=(J=p.closest(".cell-card"))==null?void 0:J.querySelector(".cell-card-type");W&&S==="type"&&(W.textContent=this._labelForType_(N)),this._queueEmit_()}_labelForType_(p){return{text:"Text",icon:"Icon",entity:"Entity state",badge:"Badge",button:"Button"}[String(p||"text").toLowerCase()]||"Text"}_renderEditor_(){var z;let p=this._config||Le.getStubConfig(),x=Object.keys(((z=this._hass)==null?void 0:z.states)||{}).sort((N,W)=>N.localeCompare(W)).map(N=>`<option value="${F(N)}"></option>`).join(""),S=(p.cells||[]).map((N,W)=>{let G=Math.floor(W/Math.max(1,p.columns))+1,V=W%Math.max(1,p.columns)+1;return`
          <section class="cell-card">
            <div class="cell-card-head">
              <div>
                <strong>Row ${G} \xB7 Column ${V}</strong>
                <span>Cell ${W+1}</span>
              </div>
              <span class="cell-card-type">${this._labelForType_(N.type)}</span>
            </div>
            <div class="cell-grid">
              <label class="field">
                <span>Content type</span>
                <select data-cell-index="${W}" data-key="type">
                  <option value="text" ${N.type==="text"?"selected":""}>Text</option>
                  <option value="icon" ${N.type==="icon"?"selected":""}>Icon</option>
                  <option value="entity" ${N.type==="entity"?"selected":""}>Entity state</option>
                  <option value="badge" ${N.type==="badge"?"selected":""}>Badge</option>
                  <option value="button" ${N.type==="button"?"selected":""}>Button</option>
                </select>
              </label>
              <label class="field">
                <span>Alignment</span>
                <select data-cell-index="${W}" data-key="align">
                  <option value="left" ${N.align==="left"?"selected":""}>Left</option>
                  <option value="center" ${N.align==="center"?"selected":""}>Center</option>
                  <option value="right" ${N.align==="right"?"selected":""}>Right</option>
                </select>
              </label>
              <label class="field full">
                <span>Text / label</span>
                <input data-cell-index="${W}" data-key="text" type="text" value="${F(N.text||"")}" placeholder="Title, label or button text" />
              </label>
              <label class="field">
                <span>Icon</span>
                <input data-cell-index="${W}" data-key="icon" type="text" value="${F(N.icon||"")}" placeholder="mdi:flash" />
              </label>
              <label class="field">
                <span>Entity</span>
                <input data-cell-index="${W}" data-key="entity" type="text" list="ddcTableEntityList" value="${F(N.entity||"")}" placeholder="sensor.example_power" />
              </label>
              <label class="field full">
                <span>State match</span>
                <input data-cell-index="${W}" data-key="active_states" type="text" value="${F(N.active_states||"")}" placeholder="on,home,open,playing,charging,active,>0" />
              </label>
              <label class="field">
                <span>Active color</span>
                <input data-cell-index="${W}" data-key="active_color" type="text" value="${F(N.active_color||"")}" />
              </label>
              <label class="field">
                <span>Inactive color</span>
                <input data-cell-index="${W}" data-key="inactive_color" type="text" value="${F(N.inactive_color||"")}" />
              </label>
              <label class="field">
                <span>Button action</span>
                <select data-cell-index="${W}" data-key="button_action">
                  <option value="none" ${N.button_action==="none"?"selected":""}>None</option>
                  <option value="more-info" ${N.button_action==="more-info"?"selected":""}>More info</option>
                  <option value="toggle" ${N.button_action==="toggle"?"selected":""}>Toggle entity</option>
                </select>
              </label>
            </div>
          </section>`}).join("");this.shadowRoot.innerHTML=`
        <style>
          :host{
            display:block;
            color:var(--primary-text-color);
          }
          .editor{
            display:grid;
            gap:14px;
          }
          .intro,
          .section{
            display:grid;
            gap:10px;
            padding:14px 16px;
            border-radius:16px;
            background:rgba(255,255,255,.025);
            border:1px solid rgba(255,255,255,.08);
          }
          .intro{
            line-height:1.5;
            color:var(--secondary-text-color, #94a3b8);
          }
          .intro strong,
          .section-head strong,
          .cell-card-head strong{
            color:var(--primary-text-color);
          }
          .section-head{
            display:grid;
            gap:4px;
          }
          .section-head span,
          .cell-card-head span,
          .hint{
            color:var(--secondary-text-color, #94a3b8);
          }
          .grid{
            display:grid;
            gap:14px;
            grid-template-columns:repeat(2, minmax(0, 1fr));
          }
          .field{
            display:grid;
            gap:8px;
            min-width:0;
          }
          .field.full{
            grid-column:1 / -1;
          }
          label{
            display:grid;
            gap:6px;
            font-size:.9rem;
            font-weight:650;
          }
          input[type="text"],
          input[type="number"],
          select{
            width:100%;
            box-sizing:border-box;
            min-height:46px;
            border-radius:14px;
            border:1px solid rgba(255,255,255,.1);
            background:rgba(4,9,18,.82);
            color:var(--primary-text-color);
            padding:11px 14px;
            outline:none;
            box-shadow:inset 0 1px 0 rgba(255,255,255,.03);
            font:inherit;
          }
          input[type="text"]:focus,
          input[type="number"]:focus,
          select:focus{
            border-color:color-mix(in oklab, var(--primary-color, #ff9800) 58%, rgba(255,255,255,.12));
            box-shadow:
              0 0 0 3px color-mix(in oklab, var(--primary-color, #ff9800) 18%, transparent),
              inset 0 1px 0 rgba(255,255,255,.04);
          }
          .toggles{
            display:flex;
            flex-wrap:wrap;
            gap:12px;
          }
          .toggle{
            display:inline-flex;
            align-items:center;
            gap:10px;
            min-height:46px;
            padding:0 14px;
            border-radius:14px;
            border:1px solid rgba(255,255,255,.08);
            background:rgba(255,255,255,.03);
            font-weight:650;
          }
          .cells{
            display:grid;
            gap:14px;
          }
          .cell-card{
            display:grid;
            gap:14px;
            padding:14px;
            border-radius:18px;
            background:rgba(255,255,255,.03);
            border:1px solid rgba(255,255,255,.08);
          }
          .cell-card-head{
            display:flex;
            align-items:start;
            justify-content:space-between;
            gap:12px;
          }
          .cell-card-head > div{
            display:grid;
            gap:4px;
          }
          .cell-card-type{
            display:inline-flex;
            align-items:center;
            padding:6px 10px;
            border-radius:999px;
            background:color-mix(in oklab, var(--primary-color, #ff9800) 12%, transparent);
            color:var(--primary-color, #ff9800);
            font-size:.76rem;
            font-weight:800;
            letter-spacing:.04em;
            text-transform:uppercase;
          }
          .cell-grid{
            display:grid;
            gap:14px;
            grid-template-columns:repeat(2, minmax(0, 1fr));
          }
          @media (max-width: 760px){
            .grid,
            .cell-grid{
              grid-template-columns:1fr;
            }
            .field.full{
              grid-column:auto;
            }
          }
        </style>
        <div class="editor">
          <div class="intro">
            <strong>Build a visual table inside Drag & Drop Card</strong>
            <span>Choose rows and columns, then fine-tune each cell. Every cell can show plain text, an icon, a Home Assistant entity state, a badge or a button.</span>
          </div>

          <div class="section">
            <div class="section-head">
              <strong>Table settings</strong>
              <span>These options control the overall structure and spacing.</span>
            </div>
            <datalist id="ddcTableEntityList">${x}</datalist>
            <div class="grid">
              <label class="field full">
                <span>Title</span>
                <input id="tableTitle" type="text" value="${F(p.title||"")}" placeholder="Optional title shown above the table" />
              </label>
              <label class="field">
                <span>Rows</span>
                <input id="tableRows" type="number" min="1" max="18" step="1" value="${Number(p.rows||3)}" />
              </label>
              <label class="field">
                <span>Columns</span>
                <input id="tableColumns" type="number" min="1" max="12" step="1" value="${Number(p.columns||3)}" />
              </label>
              <label class="field">
                <span>Corner radius</span>
                <input id="tableRadius" type="number" min="0" max="40" step="1" value="${Number(p.radius||16)}" />
              </label>
              <label class="field">
                <span>Cell spacing</span>
                <input id="tableSpacing" type="number" min="0" max="32" step="1" value="${Number(p.spacing||8)}" />
              </label>
            </div>
            <div class="toggles">
              <label class="toggle">
                <input id="tableHeaderRow" type="checkbox" ${p.header_row!==!1?"checked":""} />
                <span>Header row</span>
              </label>
              <label class="toggle">
                <input id="tableBorder" type="checkbox" ${p.border!==!1?"checked":""} />
                <span>Cell borders</span>
              </label>
            </div>
          </div>

          <div class="section">
            <div class="section-head">
              <strong>Cells</strong>
              <span>The first row can act as a header, but every cell is still fully editable.</span>
            </div>
            <div class="cells">${S}</div>
          </div>
        </div>`,this._ensureListeners_()}}class de extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config=de.getStubConfig(),this._hass=null,this._shellReady=!1,this._boundActivate=this._handleActivate_.bind(this),this._boundKeydown=this._handleKeydown_.bind(this)}static getStubConfig(){return{type:"custom:ddc-icon-card",icon:"mdi:flash",entity:"",size:96,color:"var(--primary-color, #ff9800)",active_color:"#22c55e",state_based_color:!0,glow:!0,rotate:0,pulse_when_active:!0,opacity_based_on_state:!1,active_opacity:1,inactive_opacity:.28,active_states:"on,home,open,playing,charging,active,>0",click_action:"none"}}static async getConfigElement(){return document.createElement(c)}async getConfigElement(){return document.createElement(c)}setConfig(p){this._config={...de.getStubConfig(),...p||{},icon:String((p==null?void 0:p.icon)||de.getStubConfig().icon),entity:String((p==null?void 0:p.entity)||""),size:y(p==null?void 0:p.size,96,20,320),color:String((p==null?void 0:p.color)||"var(--primary-color, #ff9800)"),active_color:String((p==null?void 0:p.active_color)||"#22c55e"),state_based_color:(p==null?void 0:p.state_based_color)!==!1,glow:(p==null?void 0:p.glow)!==!1,rotate:y(p==null?void 0:p.rotate,0,-3600,3600),pulse_when_active:(p==null?void 0:p.pulse_when_active)!==!1,opacity_based_on_state:!!(p!=null&&p.opacity_based_on_state),active_opacity:y(p==null?void 0:p.active_opacity,1,0,1),inactive_opacity:y(p==null?void 0:p.inactive_opacity,.28,0,1),active_states:String((p==null?void 0:p.active_states)||"on,home,open,playing,charging,active,>0"),click_action:String((p==null?void 0:p.click_action)||"none").toLowerCase()},this._renderCard_()}set hass(p){this._hass=p,this._renderCard_()}get hass(){return this._hass}connectedCallback(){this._config&&this._renderCard_()}disconnectedCallback(){var p,x,S,z;(x=(p=this._hitAreaEl)==null?void 0:p.removeEventListener)==null||x.call(p,"click",this._boundActivate),(z=(S=this._hitAreaEl)==null?void 0:S.removeEventListener)==null||z.call(S,"keydown",this._boundKeydown)}getCardSize(){return 2}_ensureShell_(){var p,x;this._shellReady||!this.shadowRoot||(this.shadowRoot.innerHTML=`
        <style>
          :host{
            display:block;
            width:100%;
            height:100%;
            min-height:100%;
            color:var(--primary-text-color);
          }
          ha-card{
            display:block;
            width:100%;
            height:100%;
            min-height:100%;
            background:transparent;
            box-shadow:none;
            border-radius:inherit;
            overflow:visible;
          }
          .shell{
            position:relative;
            display:grid;
            place-items:center;
            width:100%;
            height:100%;
            min-height:100%;
            padding:10px;
            box-sizing:border-box;
            --ddc-icon-size:96px;
            --ddc-icon-color:var(--primary-color, #ff9800);
            --ddc-icon-opacity:1;
            --ddc-icon-rotate:0deg;
          }
          .hit-area{
            display:grid;
            place-items:center;
            width:100%;
            height:100%;
            min-height:100%;
            border-radius:inherit;
            outline:none;
            cursor:default;
          }
          .hit-area.is-clickable{
            cursor:pointer;
          }
          .icon-wrap{
            position:relative;
            width:var(--ddc-icon-size);
            height:var(--ddc-icon-size);
            display:grid;
            place-items:center;
          }
          .icon-wrap ha-icon{
            width:100%;
            height:100%;
            color:var(--ddc-icon-color);
            opacity:var(--ddc-icon-opacity);
            transform:rotate(var(--ddc-icon-rotate));
            transform-origin:center;
            filter:drop-shadow(0 0 0 transparent);
            transition:
              color .18s ease,
              opacity .18s ease,
              transform .18s ease,
              filter .18s ease;
          }
          .shell.is-glow .icon-wrap ha-icon{
            filter:drop-shadow(0 0 12px color-mix(in srgb, var(--ddc-icon-color) 38%, transparent));
          }
          .shell.is-pulsing .icon-wrap ha-icon{
            animation:ddc-icon-pulse 1.65s ease-in-out infinite;
          }
          .shell.is-clickable .hit-area:hover ha-icon,
          .shell.is-clickable .hit-area:focus-visible ha-icon{
            opacity:min(1, calc(var(--ddc-icon-opacity) + 0.08));
          }
          @keyframes ddc-icon-pulse{
            0%, 100%{
              transform:rotate(var(--ddc-icon-rotate)) scale(1);
            }
            45%{
              transform:rotate(var(--ddc-icon-rotate)) scale(1.08);
            }
            60%{
              transform:rotate(var(--ddc-icon-rotate)) scale(1.03);
            }
          }
        </style>
        <ha-card>
          <div class="shell">
            <div class="hit-area" tabindex="-1" aria-label="Icon card">
              <div class="icon-wrap">
                <ha-icon icon="mdi:flash"></ha-icon>
              </div>
            </div>
          </div>
        </ha-card>`,this._shellEl=this.shadowRoot.querySelector(".shell"),this._hitAreaEl=this.shadowRoot.querySelector(".hit-area"),this._iconEl=this.shadowRoot.querySelector("ha-icon"),(p=this._hitAreaEl)==null||p.addEventListener("click",this._boundActivate),(x=this._hitAreaEl)==null||x.addEventListener("keydown",this._boundKeydown),this._shellReady=!0)}_fireMoreInfo_(p){if(p)try{this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:p},bubbles:!0,composed:!0}))}catch{}}_handleKeydown_(p){p&&(p.key==="Enter"||p.key===" ")&&(p.preventDefault(),this._handleActivate_())}_handleActivate_(){var S,z,N,W;let p=String(((S=this._config)==null?void 0:S.entity)||"").trim(),x=String(((z=this._config)==null?void 0:z.click_action)||"none").toLowerCase();if(!(!p||x==="none")){if(x==="toggle"){try{(W=(N=this._hass)==null?void 0:N.callService)==null||W.call(N,"homeassistant","toggle",{entity_id:p})}catch{}return}this._fireMoreInfo_(p)}}_renderCard_(){var ke,Ee,Fe,je;if(this._ensureShell_(),!this._shellEl||!this._iconEl||!this._hitAreaEl||!this._config)return;let p=this._config,x=String(p.entity||"").trim(),S=x?(Ee=(ke=this._hass)==null?void 0:ke.states)==null?void 0:Ee[x]:null,z=String(((Fe=S==null?void 0:S.attributes)==null?void 0:Fe.icon)||"").trim(),N=String(p.icon||z||"mdi:flash").trim()||"mdi:flash",W=!!x,G=W?O((je=S==null?void 0:S.state)!=null?je:"",p.active_states):!1,J=p.state_based_color!==!1&&W&&G?p.active_color:p.color,Z=p.opacity_based_on_state&&W?G?p.active_opacity:p.inactive_opacity:p.active_opacity,he=W&&String(p.click_action||"none").toLowerCase()!=="none",_e=!!p.pulse_when_active&&W&&G;this._iconEl.setAttribute("icon",N),this._shellEl.style.setProperty("--ddc-icon-size",`${Math.round(y(p.size,96,20,320))}px`),this._shellEl.style.setProperty("--ddc-icon-color",String(J||p.color||"var(--primary-color, #ff9800)")),this._shellEl.style.setProperty("--ddc-icon-opacity",`${y(Z,1,0,1)}`),this._shellEl.style.setProperty("--ddc-icon-rotate",`${y(p.rotate,0,-3600,3600)}deg`),this._shellEl.classList.toggle("is-glow",p.glow!==!1),this._shellEl.classList.toggle("is-pulsing",_e),this._shellEl.classList.toggle("is-clickable",he),this._hitAreaEl.classList.toggle("is-clickable",he),this._hitAreaEl.tabIndex=he?0:-1,this._hitAreaEl.setAttribute("aria-label",he&&x?`Icon card for ${x}`:"Icon card")}}class Ce extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config=de.getStubConfig(),this._configSig="",this._emitTimer=null}setConfig(p){let x={...de.getStubConfig(),...p||{},icon:String((p==null?void 0:p.icon)||de.getStubConfig().icon),entity:String((p==null?void 0:p.entity)||""),size:y(p==null?void 0:p.size,96,20,320),color:String((p==null?void 0:p.color)||"var(--primary-color, #ff9800)"),active_color:String((p==null?void 0:p.active_color)||"#22c55e"),state_based_color:(p==null?void 0:p.state_based_color)!==!1,glow:(p==null?void 0:p.glow)!==!1,rotate:y(p==null?void 0:p.rotate,0,-3600,3600),pulse_when_active:(p==null?void 0:p.pulse_when_active)!==!1,opacity_based_on_state:!!(p!=null&&p.opacity_based_on_state),active_opacity:y(p==null?void 0:p.active_opacity,1,0,1),inactive_opacity:y(p==null?void 0:p.inactive_opacity,.28,0,1),active_states:String((p==null?void 0:p.active_states)||"on,home,open,playing,charging,active,>0"),click_action:String((p==null?void 0:p.click_action)||"none").toLowerCase()},S=JSON.stringify(x);S!==this._configSig&&(this._configSig=S,this._config=x,this._renderEditor_())}set hass(p){this._hass=p,this.shadowRoot.childElementCount||this._renderEditor_()}_queueEmit_(){clearTimeout(this._emitTimer),this._emitTimer=setTimeout(()=>{this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:{...this._config}}}))},120)}_bindField_(p,x,S="text"){let z=this.shadowRoot.querySelector(p);if(!z)return;let N=S==="select"||S==="checkbox"?"change":"input";z.addEventListener(N,()=>{if(S==="checkbox")this._config[x]=!!z.checked;else if(S==="number"){let W={size:[96,20,320],rotate:[0,-3600,3600],active_opacity:[1,0,1],inactive_opacity:[.28,0,1]},[G,V,J]=W[x]||[0,-1/0,1/0];this._config[x]=y(z.value,G,V,J)}else this._config[x]=z.value;this._queueEmit_()})}_renderEditor_(){var S,z,N;let p=this._config||de.getStubConfig(),x=Object.keys(((S=this._hass)==null?void 0:S.states)||{}).sort((W,G)=>W.localeCompare(G)).map(W=>`<option value="${F(W)}"></option>`).join("");this.shadowRoot.innerHTML=`
        <style>
          :host{
            display:block;
            color:var(--primary-text-color);
          }
          .editor{
            display:grid;
            gap:14px;
          }
          .intro,
          .section{
            display:grid;
            gap:10px;
            padding:14px 16px;
            border-radius:16px;
            background:rgba(255,255,255,.025);
            border:1px solid rgba(255,255,255,.08);
          }
          .intro{
            line-height:1.5;
            color:var(--secondary-text-color, #94a3b8);
          }
          .intro strong,
          .section-head strong{
            color:var(--primary-text-color);
          }
          .section-head{
            display:grid;
            gap:4px;
          }
          .section-head span{
            color:var(--secondary-text-color, #94a3b8);
          }
          .grid{
            display:grid;
            gap:14px;
            grid-template-columns:repeat(2, minmax(0, 1fr));
          }
          .field{
            display:grid;
            gap:8px;
            min-width:0;
          }
          .field.full{
            grid-column:1 / -1;
          }
          label{
            display:grid;
            gap:6px;
            font-size:.9rem;
            font-weight:650;
          }
          input[type="text"],
          input[type="number"],
          select{
            width:100%;
            box-sizing:border-box;
            min-height:46px;
            border-radius:14px;
            border:1px solid rgba(255,255,255,.1);
            background:rgba(4,9,18,.82);
            color:var(--primary-text-color);
            padding:11px 14px;
            outline:none;
            box-shadow:inset 0 1px 0 rgba(255,255,255,.03);
            font:inherit;
          }
          input[type="text"]:focus,
          input[type="number"]:focus,
          select:focus{
            border-color:color-mix(in oklab, var(--primary-color, #ff9800) 58%, rgba(255,255,255,.12));
            box-shadow:
              0 0 0 3px color-mix(in oklab, var(--primary-color, #ff9800) 18%, transparent),
              inset 0 1px 0 rgba(255,255,255,.04);
          }
          .toggles{
            display:grid;
            gap:12px;
            grid-template-columns:repeat(2, minmax(0, 1fr));
          }
          .toggle{
            display:inline-flex;
            align-items:center;
            gap:10px;
            min-height:46px;
            padding:0 14px;
            border-radius:14px;
            border:1px solid rgba(255,255,255,.08);
            background:rgba(255,255,255,.03);
            font-weight:650;
          }
          @media (max-width: 760px){
            .grid,
            .toggles{
              grid-template-columns:1fr;
            }
            .field.full{
              grid-column:auto;
            }
          }
        </style>
        <div class="editor">
          <div class="intro">
            <strong>Build a pure icon object</strong>
            <span>Use this for atmosphere, energy flows, status accents or subtle reactive decoration without wrapping it in a normal button card.</span>
          </div>

          <div class="section">
            <div class="section-head">
              <strong>Icon settings</strong>
              <span>Choose the icon itself, what entity should drive it, and how it should react.</span>
            </div>
            <datalist id="ddcIconEntityList">${x}</datalist>
            <div class="grid">
              <label class="field">
                <span>Icon</span>
                <input id="icon" type="text" value="${F(p.icon||"")}" placeholder="mdi:flash" />
              </label>
              <label class="field">
                <span>Entity</span>
                <input id="entity" type="text" list="ddcIconEntityList" value="${F(p.entity||"")}" placeholder="sensor.example_power" />
              </label>
              <label class="field full">
                <span>Active states</span>
                <input id="activeStates" type="text" value="${F(p.active_states||"")}" placeholder="on,home,open,playing,charging,active,>0" />
              </label>
              <label class="field">
                <span>Size</span>
                <input id="size" type="number" min="20" max="320" step="1" value="${Number(p.size||96)}" />
              </label>
              <label class="field">
                <span>Rotate</span>
                <input id="rotate" type="number" min="-3600" max="3600" step="1" value="${Number(p.rotate||0)}" />
              </label>
              <label class="field">
                <span>Base color</span>
                <input id="color" type="text" value="${F(p.color||"")}" placeholder="var(--primary-color)" />
              </label>
              <label class="field">
                <span>Active color</span>
                <input id="activeColor" type="text" value="${F(p.active_color||"")}" placeholder="#22c55e" />
              </label>
              <label class="field">
                <span>Active opacity</span>
                <input id="activeOpacity" type="number" min="0" max="1" step="0.05" value="${Number((z=p.active_opacity)!=null?z:1)}" />
              </label>
              <label class="field">
                <span>Inactive opacity</span>
                <input id="inactiveOpacity" type="number" min="0" max="1" step="0.05" value="${Number((N=p.inactive_opacity)!=null?N:.28)}" />
              </label>
              <label class="field full">
                <span>Click action</span>
                <select id="clickAction">
                  <option value="none" ${p.click_action==="none"?"selected":""}>None</option>
                  <option value="more-info" ${p.click_action==="more-info"?"selected":""}>More info</option>
                  <option value="toggle" ${p.click_action==="toggle"?"selected":""}>Toggle entity</option>
                </select>
              </label>
            </div>
          </div>

          <div class="section">
            <div class="section-head">
              <strong>Reactive styling</strong>
              <span>Let entity state drive the visual treatment, or keep it as a fixed design element.</span>
            </div>
            <div class="toggles">
              <label class="toggle">
                <input id="stateBasedColor" type="checkbox" ${p.state_based_color?"checked":""}>
                <span>State-based color</span>
              </label>
              <label class="toggle">
                <input id="glow" type="checkbox" ${p.glow?"checked":""}>
                <span>Glow</span>
              </label>
              <label class="toggle">
                <input id="pulseWhenActive" type="checkbox" ${p.pulse_when_active?"checked":""}>
                <span>Pulse when active</span>
              </label>
              <label class="toggle">
                <input id="opacityBasedOnState" type="checkbox" ${p.opacity_based_on_state?"checked":""}>
                <span>Opacity based on state</span>
              </label>
            </div>
          </div>
        </div>`,this._bindField_("#icon","icon"),this._bindField_("#entity","entity"),this._bindField_("#activeStates","active_states"),this._bindField_("#size","size","number"),this._bindField_("#rotate","rotate","number"),this._bindField_("#color","color"),this._bindField_("#activeColor","active_color"),this._bindField_("#activeOpacity","active_opacity","number"),this._bindField_("#inactiveOpacity","inactive_opacity","number"),this._bindField_("#clickAction","click_action","select"),this._bindField_("#stateBasedColor","state_based_color","checkbox"),this._bindField_("#glow","glow","checkbox"),this._bindField_("#pulseWhenActive","pulse_when_active","checkbox"),this._bindField_("#opacityBasedOnState","opacity_based_on_state","checkbox")}}class ue extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config=ue.getStubConfig(),this._hass=null,this._shellReady=!1}static getStubConfig(){return{type:"custom:ddc-text-card",text:"Energy overview",rich_text:!1,rich_html:"",variant:"title",font_family:"",font_size:42,color:"var(--primary-text-color, #f8fafc)",align:"left",bold:!0,italic:!1,letter_spacing:-.03,line_height:1.05}}static async getConfigElement(){return document.createElement(g)}async getConfigElement(){return document.createElement(g)}setConfig(p){let x=String((p==null?void 0:p.variant)||"title").toLowerCase(),S=H(x);this._config={...ue.getStubConfig(),...p||{},text:String((p==null?void 0:p.text)||"Energy overview"),rich_text:!!(p!=null&&p.rich_text),rich_html:String((p==null?void 0:p.rich_html)||""),variant:x,font_family:String((p==null?void 0:p.font_family)||""),font_size:y(p==null?void 0:p.font_size,S.font_size,8,200),color:String((p==null?void 0:p.color)||"var(--primary-text-color, #f8fafc)"),align:String((p==null?void 0:p.align)||"left").toLowerCase(),bold:typeof(p==null?void 0:p.bold)=="boolean"?p.bold:S.bold,italic:!!(p!=null&&p.italic),letter_spacing:y(p==null?void 0:p.letter_spacing,S.letter_spacing,-1,2),line_height:y(p==null?void 0:p.line_height,S.line_height,.7,3)},this._renderCard_()}set hass(p){this._hass=p,this._renderCard_()}get hass(){return this._hass}connectedCallback(){this._config&&this._renderCard_()}getCardSize(){return 2}_ensureShell_(){this._shellReady||!this.shadowRoot||(this.shadowRoot.innerHTML=`
        <style>
          :host{
            display:block;
            width:100%;
            height:100%;
            min-height:100%;
            color:var(--primary-text-color);
          }
          ha-card{
            display:block;
            width:100%;
            height:100%;
            min-height:100%;
            background:transparent;
            box-shadow:none;
            border-radius:inherit;
            overflow:visible;
          }
          .shell{
            display:grid;
            align-items:center;
            width:100%;
            height:100%;
            min-height:100%;
            padding:10px 12px;
            box-sizing:border-box;
          }
          .copy{
            margin:0;
            width:100%;
            color:var(--ddc-text-color, var(--primary-text-color, #f8fafc));
            font-family:var(--ddc-text-font-family, inherit);
            font-size:var(--ddc-text-size, 42px);
            font-weight:var(--ddc-text-weight, 700);
            font-style:var(--ddc-text-style, normal);
            line-height:var(--ddc-text-line-height, 1.05);
            letter-spacing:var(--ddc-text-letter-spacing, 0em);
            text-align:var(--ddc-text-align, left);
            text-wrap:balance;
            overflow-wrap:anywhere;
          }
          .copy.is-rich{
            display:grid;
            gap:calc(var(--ddc-text-size, 42px) * 0.22);
            text-wrap:pretty;
          }
          .copy.is-rich > *{
            margin:0;
            color:inherit;
            font-family:inherit;
            text-align:inherit;
            line-height:inherit;
            letter-spacing:inherit;
          }
          .copy.is-rich p + p,
          .copy.is-rich p + ul,
          .copy.is-rich p + ol,
          .copy.is-rich ul + p,
          .copy.is-rich ol + p,
          .copy.is-rich blockquote + p,
          .copy.is-rich pre + p{
            margin-top:calc(var(--ddc-text-size, 42px) * 0.18);
          }
          .copy.is-rich h1{
            font-size:calc(var(--ddc-text-size, 42px) * 1.56);
            font-weight:800;
            line-height:0.96;
            letter-spacing:calc(var(--ddc-text-letter-spacing, -0.03em) - 0.025em);
          }
          .copy.is-rich h2{
            font-size:calc(var(--ddc-text-size, 42px) * 1.28);
            font-weight:780;
            line-height:1.02;
            letter-spacing:calc(var(--ddc-text-letter-spacing, -0.03em) - 0.015em);
          }
          .copy.is-rich h3{
            font-size:calc(var(--ddc-text-size, 42px) * 1.08);
            font-weight:760;
            line-height:1.08;
          }
          .copy.is-rich h4{
            font-size:calc(var(--ddc-text-size, 42px) * 0.92);
            font-weight:720;
            line-height:1.14;
          }
          .copy.is-rich p{
            font-size:var(--ddc-text-size, 42px);
          }
          .copy.is-rich small{
            font-size:calc(var(--ddc-text-size, 42px) * 0.74);
            opacity:.82;
            line-height:1.35;
          }
          .copy.is-rich ul,
          .copy.is-rich ol{
            padding-inline-start:1.2em;
            display:grid;
            gap:0.3em;
          }
          .copy.is-rich li{
            margin:0;
          }
          .copy.is-rich blockquote{
            padding:0.22em 0 0.22em 1em;
            border-left:3px solid color-mix(in oklab, var(--primary-color, #ff9800) 52%, rgba(255,255,255,.16));
            color:color-mix(in oklab, var(--ddc-text-color, #f8fafc) 82%, rgba(255,255,255,.36));
          }
          .copy.is-rich pre{
            padding:0.8em 0.95em;
            border-radius:16px;
            background:rgba(255,255,255,.06);
            border:1px solid rgba(255,255,255,.08);
            overflow:auto;
            white-space:pre-wrap;
          }
          .copy.is-rich code{
            font-family:ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
            font-size:0.92em;
          }
          .copy.is-rich a{
            color:color-mix(in oklab, var(--primary-color, #ff9800) 78%, white 12%);
            text-decoration:underline;
            text-decoration-thickness:0.08em;
          }
          .copy.is-rich strong{
            font-weight:800;
          }
          .copy.is-rich em{
            font-style:italic;
          }
          .copy.variant-header{
            text-transform:uppercase;
          }
          .copy.variant-small{
            opacity:.86;
          }
        </style>
        <ha-card>
          <div class="shell">
            <div class="copy"></div>
          </div>
        </ha-card>`,this._shellEl=this.shadowRoot.querySelector(".shell"),this._copyEl=this.shadowRoot.querySelector(".copy"),this._shellReady=!0)}_resolveTag_(p){switch(String(p||"").toLowerCase()){case"h1":return"h1";case"h2":return"h2";case"h3":return"h3";case"h4":return"h4";case"header":return"div";case"small":return"small";case"paragraph":case"p":return"p";case"title":default:return"div"}}_renderCard_(){if(this._ensureShell_(),!this._shellEl||!this._copyEl||!this._config)return;let p=this._config,x=this._resolveTag_(p.variant),S=!!p.rich_text,z=["left","center","right"].includes(String(p.align||"").toLowerCase())?String(p.align).toLowerCase():"left",N=String(p.text||""),W=N.trim()||"Text";if(this._shellEl.style.setProperty("--ddc-text-font-family",String(p.font_family||"").trim()||"inherit"),this._shellEl.style.setProperty("--ddc-text-size",`${y(p.font_size,42,8,200)}px`),this._shellEl.style.setProperty("--ddc-text-color",String(p.color||"var(--primary-text-color, #f8fafc)")),this._shellEl.style.setProperty("--ddc-text-weight",p.bold?"800":"500"),this._shellEl.style.setProperty("--ddc-text-style",p.italic?"italic":"normal"),this._shellEl.style.setProperty("--ddc-text-line-height",`${y(p.line_height,1.05,.7,3)}`),this._shellEl.style.setProperty("--ddc-text-letter-spacing",`${y(p.letter_spacing,-.03,-1,2)}em`),this._shellEl.style.setProperty("--ddc-text-align",z),S){if(this._copyEl.tagName.toLowerCase()!=="div"){let V=document.createElement("div");V.className="copy",this._copyEl.replaceWith(V),this._copyEl=V}this._copyEl.className="copy is-rich";let G=te(p.rich_html||"")||te(X(N));this._copyEl.innerHTML=G||"<p>Text</p>";return}if(this._copyEl.tagName.toLowerCase()!==x){let G=document.createElement(x);G.className="copy",this._copyEl.replaceWith(G),this._copyEl=G}this._copyEl.className=`copy variant-${F(p.variant||"title")}`,this._copyEl.textContent=W}}class Ae extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config=ue.getStubConfig(),this._configSig="",this._emitTimer=null,this._richSelectionRange=null,this._globalRichShortcutGuards=null}setConfig(p){let x=String((p==null?void 0:p.variant)||"title").toLowerCase(),S=H(x),z={...ue.getStubConfig(),...p||{},text:String((p==null?void 0:p.text)||"Energy overview"),rich_text:!!(p!=null&&p.rich_text),rich_html:String((p==null?void 0:p.rich_html)||""),variant:x,font_family:String((p==null?void 0:p.font_family)||""),font_size:y(p==null?void 0:p.font_size,S.font_size,8,200),color:String((p==null?void 0:p.color)||"var(--primary-text-color, #f8fafc)"),align:String((p==null?void 0:p.align)||"left").toLowerCase(),bold:typeof(p==null?void 0:p.bold)=="boolean"?p.bold:S.bold,italic:!!(p!=null&&p.italic),letter_spacing:y(p==null?void 0:p.letter_spacing,S.letter_spacing,-1,2),line_height:y(p==null?void 0:p.line_height,S.line_height,.7,3)},N=JSON.stringify(z);N!==this._configSig&&(this._configSig=N,this._config=z,this._renderEditor_())}set hass(p){this._hass=p,this.shadowRoot.childElementCount||this._renderEditor_()}_markLocalConfigUpdated_(){this._configSig=JSON.stringify(this._config||{})}_queueEmit_(){this._markLocalConfigUpdated_(),clearTimeout(this._emitTimer),this._emitTimer=setTimeout(()=>{this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:{...this._config}}}))},120)}_bindField_(p,x,S="text"){let z=this.shadowRoot.querySelector(p);if(!z)return;let N=S==="select"||S==="checkbox"?"change":"input";z.addEventListener(N,()=>{if(x==="variant"&&S==="select"){this._applyVariantPreset_(z.value);return}if(S==="checkbox")this._config[x]=!!z.checked;else if(S==="number"){let W={font_size:[42,8,200],letter_spacing:[-.03,-1,2],line_height:[1.05,.7,3]},[G,V,J]=W[x]||[0,-1/0,1/0];this._config[x]=y(z.value,G,V,J)}else this._config[x]=z.value;this._queueEmit_()})}_seedRichHtml_(){var x,S;let p=te(((x=this._config)==null?void 0:x.rich_html)||"")||te(X(((S=this._config)==null?void 0:S.text)||""));return this._config.rich_html=p,this._markLocalConfigUpdated_(),p}_captureRichSelection_(){var N,W,G;let p=(N=this.shadowRoot)==null?void 0:N.querySelector("#richEditor"),x=(G=(W=this.ownerDocument)==null?void 0:W.getSelection)==null?void 0:G.call(W);if(!p||!x||x.rangeCount<1)return;let S=x.getRangeAt(0),z=S.commonAncestorContainer;(p.contains(z)||z===p)&&(this._richSelectionRange=S.cloneRange())}_restoreRichSelection_(){var x,S;if(!this._richSelectionRange)return;let p=(S=(x=this.ownerDocument)==null?void 0:x.getSelection)==null?void 0:S.call(x);p&&(p.removeAllRanges(),p.addRange(this._richSelectionRange))}_syncRichEditorFromDom_(p=!1){var N;let x=(N=this.shadowRoot)==null?void 0:N.querySelector("#richEditor");if(!x)return;let S=x.innerHTML||"";p&&(S=te(S),x.innerHTML!==S&&(x.innerHTML=S)),this._config.rich_html=S;let z=String(x.textContent||"").replace(/\u00a0/g," ").trim();z&&(this._config.text=z),this._queueEmit_()}_execRichCommand_(p,x=null){var z;let S=(z=this.shadowRoot)==null?void 0:z.querySelector("#richEditor");if(S){S.focus(),this._restoreRichSelection_();try{if(p==="createLink"){if(!x)return;this.ownerDocument.execCommand("createLink",!1,x)}else p==="formatBlock"?this.ownerDocument.execCommand("formatBlock",!1,x):this.ownerDocument.execCommand(p,!1,x)}catch{}this._captureRichSelection_(),this._syncRichEditorFromDom_(!0)}}_bindRichEditor_(){var W;let p=(W=this.shadowRoot)==null?void 0:W.querySelector("#richEditor");if(!p)return;let x=G=>{G.stopPropagation(),typeof G.stopImmediatePropagation=="function"&&G.stopImmediatePropagation()};["keydown","keypress","keyup","beforeinput","input","paste"].forEach(G=>{p.addEventListener(G,x)});let S=()=>{if(this._globalRichShortcutGuards)return;let G=()=>{var _e,ke,Ee,Fe;let J=(ke=(_e=this.ownerDocument)==null?void 0:_e.getSelection)==null?void 0:ke.call(_e),Z=((Ee=this.shadowRoot)==null?void 0:Ee.activeElement)||((Fe=this.ownerDocument)==null?void 0:Fe.activeElement);return!!(Z===p||p.contains(Z)||(J==null?void 0:J.anchorNode)&&p.contains(J.anchorNode))},V=J=>{G()&&(J.stopPropagation(),typeof J.stopImmediatePropagation=="function"&&J.stopImmediatePropagation())};this._globalRichShortcutGuards={guard:V},["keydown","keypress","keyup","beforeinput"].forEach(J=>{window.addEventListener(J,V,!0),document.addEventListener(J,V,!0)})},z=()=>{var V;if(!((V=this._globalRichShortcutGuards)!=null&&V.guard))return;let{guard:G}=this._globalRichShortcutGuards;["keydown","keypress","keyup","beforeinput"].forEach(J=>{window.removeEventListener(J,G,!0),document.removeEventListener(J,G,!0)}),this._globalRichShortcutGuards=null};p.addEventListener("input",()=>this._syncRichEditorFromDom_(!1)),p.addEventListener("keyup",()=>this._captureRichSelection_()),p.addEventListener("mouseup",()=>this._captureRichSelection_()),p.addEventListener("focus",()=>{S(),this._captureRichSelection_()}),p.addEventListener("blur",()=>{this._syncRichEditorFromDom_(!0),setTimeout(()=>{var V,J;let G=((V=this.shadowRoot)==null?void 0:V.activeElement)||((J=this.ownerDocument)==null?void 0:J.activeElement);(!G||!p.contains(G))&&z()},0)},!0),this.shadowRoot.querySelectorAll("[data-rich-cmd]").forEach(G=>{G.addEventListener("mousedown",V=>V.preventDefault()),G.addEventListener("click",()=>{let V=G.getAttribute("data-rich-cmd");if(V){if(V==="createLink"){let J=window.prompt("Link URL","https://");if(!J)return;this._execRichCommand_(V,J);return}this._execRichCommand_(V)}})});let N=this.shadowRoot.querySelector("#richBlock");N&&N.addEventListener("change",()=>{let G=String(N.value||"P").toUpperCase();this._execRichCommand_("formatBlock",G)})}_applyVariantPreset_(p){let x=String(p||"title").toLowerCase(),S=H(x);this._config.variant=x,this._config.font_size=S.font_size,this._config.bold=S.bold,this._config.letter_spacing=S.letter_spacing,this._config.line_height=S.line_height,this._renderEditor_(),this._queueEmit_()}_renderEditor_(){var z,N;let p=this._config||ue.getStubConfig(),x=p.rich_text?this._seedRichHtml_():"";this.shadowRoot.innerHTML=`
        <style>
          :host{
            display:block;
            color:var(--primary-text-color);
          }
          .editor{
            display:grid;
            gap:14px;
          }
          .intro,
          .section{
            display:grid;
            gap:10px;
            padding:14px 16px;
            border-radius:16px;
            background:rgba(255,255,255,.025);
            border:1px solid rgba(255,255,255,.08);
          }
          .intro{
            line-height:1.5;
            color:var(--secondary-text-color, #94a3b8);
          }
          .intro strong,
          .section-head strong{
            color:var(--primary-text-color);
          }
          .section-head{
            display:grid;
            gap:4px;
          }
          .section-head span{
            color:var(--secondary-text-color, #94a3b8);
          }
          .grid{
            display:grid;
            gap:14px;
            grid-template-columns:repeat(2, minmax(0, 1fr));
          }
          .field{
            display:grid;
            gap:8px;
            min-width:0;
          }
          .field.full{
            grid-column:1 / -1;
          }
          label{
            display:grid;
            gap:6px;
            font-size:.9rem;
            font-weight:650;
          }
          input[type="text"],
          input[type="number"],
          textarea,
          select{
            width:100%;
            box-sizing:border-box;
            min-height:46px;
            border-radius:14px;
            border:1px solid rgba(255,255,255,.1);
            background:rgba(4,9,18,.82);
            color:var(--primary-text-color);
            padding:11px 14px;
            outline:none;
            box-shadow:inset 0 1px 0 rgba(255,255,255,.03);
            font:inherit;
          }
          textarea{
            min-height:120px;
            resize:vertical;
            line-height:1.55;
          }
          input[type="text"]:focus,
          input[type="number"]:focus,
          textarea:focus,
          select:focus{
            border-color:color-mix(in oklab, var(--primary-color, #ff9800) 58%, rgba(255,255,255,.12));
            box-shadow:
              0 0 0 3px color-mix(in oklab, var(--primary-color, #ff9800) 18%, transparent),
              inset 0 1px 0 rgba(255,255,255,.04);
          }
          .toggles{
            display:grid;
            gap:12px;
            grid-template-columns:repeat(2, minmax(0, 1fr));
          }
          .toggle{
            display:inline-flex;
            align-items:center;
            gap:10px;
            min-height:46px;
            padding:0 14px;
            border-radius:14px;
            border:1px solid rgba(255,255,255,.08);
            background:rgba(255,255,255,.03);
            font-weight:650;
          }
          .toggle.is-disabled{
            opacity:.5;
          }
          .toggle.is-disabled input{
            pointer-events:none;
          }
          .field.is-disabled{
            opacity:.58;
          }
          .field.is-disabled select,
          .field.is-disabled input{
            pointer-events:none;
          }
          .rich-shell{
            display:grid;
            gap:12px;
          }
          .rich-toolbar{
            display:flex;
            flex-wrap:wrap;
            align-items:center;
            gap:8px;
            padding:10px 12px;
            border-radius:16px;
            border:1px solid rgba(255,255,255,.08);
            background:rgba(255,255,255,.03);
          }
          .rich-toolbar select{
            width:auto;
            min-width:148px;
            min-height:42px;
            padding:8px 12px;
            border-radius:12px;
          }
          .rich-divider{
            width:1px;
            align-self:stretch;
            background:rgba(255,255,255,.08);
            margin:0 4px;
          }
          .rich-btn{
            display:grid;
            place-items:center;
            width:42px;
            height:42px;
            padding:0;
            border-radius:12px;
            border:1px solid rgba(255,255,255,.08);
            background:rgba(4,9,18,.82);
            color:var(--primary-text-color);
            cursor:pointer;
            transition:transform .18s ease, border-color .18s ease, background .18s ease;
          }
          .rich-btn:hover{
            transform:translateY(-1px);
            border-color:color-mix(in oklab, var(--primary-color, #ff9800) 48%, rgba(255,255,255,.12));
            background:rgba(255,255,255,.06);
          }
          .rich-btn ha-icon{
            --mdc-icon-size:20px;
          }
          .rich-surface{
            min-height:180px;
            padding:16px 18px;
            border-radius:18px;
            border:1px solid rgba(255,255,255,.1);
            background:rgba(4,9,18,.82);
            box-shadow:inset 0 1px 0 rgba(255,255,255,.03);
            outline:none;
            color:var(--primary-text-color);
            line-height:1.55;
            overflow:auto;
          }
          .rich-surface:focus{
            border-color:color-mix(in oklab, var(--primary-color, #ff9800) 58%, rgba(255,255,255,.12));
            box-shadow:
              0 0 0 3px color-mix(in oklab, var(--primary-color, #ff9800) 18%, transparent),
              inset 0 1px 0 rgba(255,255,255,.04);
          }
          .rich-surface:empty::before{
            content:attr(data-placeholder);
            color:rgba(148,163,184,.7);
            pointer-events:none;
          }
          .rich-surface > *{
            margin:0;
          }
          .rich-surface > * + *{
            margin-top:.5em;
          }
          .rich-surface h1,
          .rich-surface h2,
          .rich-surface h3,
          .rich-surface h4{
            font-weight:800;
            letter-spacing:-0.03em;
          }
          .rich-surface h1{ font-size:2rem; line-height:1; }
          .rich-surface h2{ font-size:1.65rem; line-height:1.06; }
          .rich-surface h3{ font-size:1.35rem; line-height:1.12; }
          .rich-surface h4{ font-size:1.12rem; line-height:1.18; }
          .rich-surface blockquote{
            padding-left:.9em;
            border-left:3px solid color-mix(in oklab, var(--primary-color, #ff9800) 54%, rgba(255,255,255,.16));
            color:var(--secondary-text-color, #94a3b8);
          }
          .rich-surface pre{
            padding:.8em .9em;
            border-radius:14px;
            background:rgba(255,255,255,.05);
            border:1px solid rgba(255,255,255,.08);
            white-space:pre-wrap;
          }
          .rich-surface code{
            font-family:ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
          }
          .rich-surface ul,
          .rich-surface ol{
            padding-inline-start:1.3em;
          }
          .rich-note{
            color:var(--secondary-text-color, #94a3b8);
            line-height:1.5;
          }
          @media (max-width: 760px){
            .grid,
            .toggles{
              grid-template-columns:1fr;
            }
            .field.full{
              grid-column:auto;
            }
          }
        </style>
        <div class="editor">
          <div class="intro">
            <strong>Build a pure typography object</strong>
            <span>Use this for hero titles, subtle labels, paragraphs or editorial headers directly inside Drag & Drop Card.</span>
          </div>

          <div class="section">
            <div class="section-head">
              <strong>Copy</strong>
              <span>Choose the content and what kind of text object it should behave like.</span>
            </div>
            <div class="toggles">
              <label class="toggle">
                <input id="richText" type="checkbox" ${p.rich_text?"checked":""}>
                <span>Enable rich text mode</span>
              </label>
            </div>
            <div class="grid">
              ${p.rich_text?`
                <div class="field full">
                  <span>Rich text</span>
                  <div class="rich-shell">
                    <div class="rich-toolbar">
                      <select id="richBlock">
                        <option value="P">Normal</option>
                        <option value="H1">Title / H1</option>
                        <option value="H2">H2</option>
                        <option value="H3">H3</option>
                        <option value="H4">H4</option>
                        <option value="BLOCKQUOTE">Quote</option>
                        <option value="PRE">Code</option>
                      </select>
                      <button class="rich-btn" type="button" data-rich-cmd="bold" title="Bold"><ha-icon icon="mdi:format-bold"></ha-icon></button>
                      <button class="rich-btn" type="button" data-rich-cmd="italic" title="Italic"><ha-icon icon="mdi:format-italic"></ha-icon></button>
                      <button class="rich-btn" type="button" data-rich-cmd="underline" title="Underline"><ha-icon icon="mdi:format-underline"></ha-icon></button>
                      <button class="rich-btn" type="button" data-rich-cmd="strikeThrough" title="Strike"><ha-icon icon="mdi:format-strikethrough-variant"></ha-icon></button>
                      <div class="rich-divider"></div>
                      <button class="rich-btn" type="button" data-rich-cmd="insertUnorderedList" title="Bullet list"><ha-icon icon="mdi:format-list-bulleted"></ha-icon></button>
                      <button class="rich-btn" type="button" data-rich-cmd="insertOrderedList" title="Numbered list"><ha-icon icon="mdi:format-list-numbered"></ha-icon></button>
                      <div class="rich-divider"></div>
                      <button class="rich-btn" type="button" data-rich-cmd="createLink" title="Link"><ha-icon icon="mdi:link-variant"></ha-icon></button>
                      <button class="rich-btn" type="button" data-rich-cmd="unlink" title="Unlink"><ha-icon icon="mdi:link-variant-off"></ha-icon></button>
                      <button class="rich-btn" type="button" data-rich-cmd="removeFormat" title="Clear formatting"><ha-icon icon="mdi:format-clear"></ha-icon></button>
                    </div>
                    <div id="richEditor" class="rich-surface" contenteditable="true" data-placeholder="Write your text here...">${x}</div>
                    <div class="rich-note">Use the toolbar to mix headings, paragraphs, bold, italic, lists, quotes and links in the same text card.</div>
                  </div>
                </div>
              `:`
                <label class="field full">
                  <span>Text</span>
                  <textarea id="text">${j(p.text||"")}</textarea>
                </label>
              `}
              <label class="field ${p.rich_text?"is-disabled":""}">
                <span>Variant</span>
                <select id="variant" ${p.rich_text?"disabled":""}>
                  <option value="title" ${p.variant==="title"?"selected":""}>Title</option>
                  <option value="header" ${p.variant==="header"?"selected":""}>Header</option>
                  <option value="h1" ${p.variant==="h1"?"selected":""}>H1</option>
                  <option value="h2" ${p.variant==="h2"?"selected":""}>H2</option>
                  <option value="h3" ${p.variant==="h3"?"selected":""}>H3</option>
                  <option value="h4" ${p.variant==="h4"?"selected":""}>H4</option>
                  <option value="paragraph" ${p.variant==="paragraph"?"selected":""}>Paragraph</option>
                  <option value="small" ${p.variant==="small"?"selected":""}>Small</option>
                </select>
              </label>
              <label class="field">
                <span>Alignment</span>
                <select id="align">
                  <option value="left" ${p.align==="left"?"selected":""}>Left</option>
                  <option value="center" ${p.align==="center"?"selected":""}>Center</option>
                  <option value="right" ${p.align==="right"?"selected":""}>Right</option>
                </select>
              </label>
            </div>
          </div>

          <div class="section">
            <div class="section-head">
              <strong>Typography</strong>
              <span>Fine-tune the editorial expression of the text object.</span>
            </div>
            <div class="grid">
              <label class="field full">
                <span>Font family</span>
                <input id="fontFamily" type="text" value="${F(p.font_family||"")}" placeholder="e.g. Georgia, 'Avenir Next', var(--paper-font-common-base_-_font-family)" />
              </label>
              <label class="field">
                <span>Font size</span>
                <input id="fontSize" type="number" min="8" max="200" step="1" value="${Number(p.font_size||42)}" />
              </label>
              <label class="field">
                <span>Color</span>
                <input id="color" type="text" value="${F(p.color||"")}" placeholder="var(--primary-text-color)" />
              </label>
              <label class="field">
                <span>Letter spacing</span>
                <input id="letterSpacing" type="number" min="-1" max="2" step="0.01" value="${Number((z=p.letter_spacing)!=null?z:-.03)}" />
              </label>
              <label class="field">
                <span>Line height</span>
                <input id="lineHeight" type="number" min="0.7" max="3" step="0.05" value="${Number((N=p.line_height)!=null?N:1.05)}" />
              </label>
            </div>
            <div class="toggles">
              <label class="toggle ${p.rich_text?"is-disabled":""}">
                <input id="bold" type="checkbox" ${p.bold?"checked":""} ${p.rich_text?"disabled":""}>
                <span>Bold</span>
              </label>
              <label class="toggle ${p.rich_text?"is-disabled":""}">
                <input id="italic" type="checkbox" ${p.italic?"checked":""} ${p.rich_text?"disabled":""}>
                <span>Italic</span>
              </label>
            </div>
          </div>
        </div>`,this._bindField_("#richText","rich_text","checkbox"),p.rich_text?this._bindRichEditor_():this._bindField_("#text","text"),this._bindField_("#variant","variant","select"),this._bindField_("#align","align","select"),this._bindField_("#fontFamily","font_family"),this._bindField_("#fontSize","font_size","number"),this._bindField_("#color","color"),this._bindField_("#letterSpacing","letter_spacing","number"),this._bindField_("#lineHeight","line_height","number"),this._bindField_("#bold","bold","checkbox"),this._bindField_("#italic","italic","checkbox");let S=this.shadowRoot.querySelector("#richText");S&&S.addEventListener("change",()=>{S.checked&&(this._config.bold=!1,this._config.italic=!1,this._seedRichHtml_()),this._renderEditor_(),this._queueEmit_()})}}class ye extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config=null,this._hass=null,this._styleSig="",this._jsSig="",this._scriptCleanup=null,this._scriptUpdate=null,this._scriptToken=0,this._rerunTimer=null,this._shellReady=!1,this._liveStatesProxy=null}static getStubConfig(){return{type:"custom:ddc-html-card",title:"HTML / Web card",html:"<div>Hello from Drag & Drop Card.</div>",css:"",js:"",rerun_on_hass_update:!1}}static async getConfigElement(){return document.createElement(w)}async getConfigElement(){return document.createElement(w)}setConfig(p){this._config={type:"custom:ddc-html-card",title:"",html:"",css:"",js:"",rerun_on_hass_update:!1,...p||{}},this._renderCardShell_(),this._applyTemplate_()}set hass(p){if(this._hass=p,!!this._config){if(this._dispatchRuntimeUpdate_("hass"),this._scriptUpdate){try{this._scriptUpdate(this._buildRuntimeContext_("update"))}catch(x){this._showRuntimeError_(x)}return}this._config.rerun_on_hass_update&&String(this._config.js||"").trim()&&(clearTimeout(this._rerunTimer),this._rerunTimer=setTimeout(()=>this._runUserScript_("hass-rerun"),60))}}get hass(){return this._hass}connectedCallback(){this._config&&this._renderCardShell_()}disconnectedCallback(){clearTimeout(this._rerunTimer),this._teardownUserScript_()}getCardSize(){return 4}_renderCardShell_(){var x;if(!this.shadowRoot)return;this._shellReady||(this.shadowRoot.innerHTML=`
          <style>
            :host{
              display:block;
              width:100%;
              height:100%;
              min-height:100%;
              color:var(--primary-text-color);
            }
            ha-card{
              display:block;
              height:100%;
              min-height:100%;
              background:transparent;
              box-shadow:none;
              border-radius:inherit;
            }
            .shell{
              display:flex;
              flex-direction:column;
              gap:12px;
              height:100%;
              min-height:100%;
              padding:16px;
              box-sizing:border-box;
            }
            .title{
              display:none;
              margin:0;
              font-size:1rem;
              font-weight:700;
              letter-spacing:.01em;
            }
            .title.show{
              display:block;
            }
            .runtime{
              position:relative;
              flex:1 1 auto;
              min-height:0;
              overflow:auto;
            }
            .runtime-content{
              min-height:100%;
              box-sizing:border-box;
            }
            .runtime-style-anchor{
              display:none;
            }
            .runtime-error{
              display:none;
              margin-top:12px;
              padding:10px 12px;
              border-radius:12px;
              border:1px solid color-mix(in oklab, var(--error-color, #ef4444) 42%, transparent);
              background:color-mix(in oklab, var(--error-color, #ef4444) 10%, transparent);
              color:var(--error-color, #ef4444);
              font-size:.82rem;
              line-height:1.45;
              white-space:pre-wrap;
            }
            .runtime-error.show{
              display:block;
            }
            .empty{
              display:grid;
              gap:10px;
              padding:14px;
              border-radius:16px;
              border:1px dashed rgba(255,255,255,.14);
              background:rgba(255,255,255,.025);
              color:var(--secondary-text-color, #94a3b8);
              line-height:1.5;
            }
            .empty strong{
              color:var(--primary-text-color);
            }
          </style>
          <ha-card>
            <div class="shell">
              <div class="title"></div>
              <div class="runtime">
                <style class="runtime-style-anchor"></style>
                <div class="runtime-content"></div>
              </div>
              <div class="runtime-error"></div>
            </div>
          </ha-card>`,this._titleEl=this.shadowRoot.querySelector(".title"),this._runtimeEl=this.shadowRoot.querySelector(".runtime"),this._contentEl=this.shadowRoot.querySelector(".runtime-content"),this._styleEl=this.shadowRoot.querySelector(".runtime-style-anchor"),this._errorEl=this.shadowRoot.querySelector(".runtime-error"),this._shellReady=!0);let p=String(((x=this._config)==null?void 0:x.title)||"").trim();this._titleEl.textContent=p,this._titleEl.classList.toggle("show",!!p)}_applyTemplate_(){var W,G,V,J;if(this._renderCardShell_(),!this._contentEl)return;let p=String(((W=this._config)==null?void 0:W.html)||""),x=String(((G=this._config)==null?void 0:G.css)||""),S=String(((V=this._config)==null?void 0:V.js)||""),z=JSON.stringify({title:((J=this._config)==null?void 0:J.title)||"",html:p,css:x}),N=z!==this._styleSig;N&&(this._styleSig=z,this._styleEl.textContent=x,this._contentEl.innerHTML=p.trim()?p:'<div class="empty"><strong>HTML / Web card</strong><span>Add your own HTML, CSS and JavaScript in the visual editor to start building this card.</span></div>'),S!==this._jsSig||N?(this._jsSig=S,this._runUserScript_("config")):this._dispatchRuntimeUpdate_("template")}_buildRuntimeContext_(p="update"){let x=this._hass,S=this._getLiveStatesProxy_(),z=this._contentEl,N=this,W=[],G={query(V,J=z){var Z;return((Z=J==null?void 0:J.querySelector)==null?void 0:Z.call(J,V))||null},queryAll(V,J=z){var Z;return Array.from(((Z=J==null?void 0:J.querySelectorAll)==null?void 0:Z.call(J,V))||[])},entity(V){var J,Z;return((Z=(J=N._hass)==null?void 0:J.states)==null?void 0:Z[V])||null},state(V){var J,Z,he;return(he=(Z=(J=N._hass)==null?void 0:J.states)==null?void 0:Z[V])==null?void 0:he.state},attr(V,J){var Z,he,_e,ke;return(ke=(_e=(he=(Z=N._hass)==null?void 0:Z.states)==null?void 0:he[V])==null?void 0:_e.attributes)==null?void 0:ke[J]},callService(V,J,Z={},he){var _e,ke;return(ke=(_e=N._hass)==null?void 0:_e.callService)==null?void 0:ke.call(_e,V,J,Z,he)},fire(V,J={}){N.dispatchEvent(new CustomEvent(V,{detail:J,bubbles:!0,composed:!0}))},listen(V,J,Z,he){if(!(V!=null&&V.addEventListener))return()=>{};V.addEventListener(J,Z,he);let _e=()=>V.removeEventListener(J,Z,he);return W.push(_e),_e},requestRerun(){N._runUserScript_("manual")},formatState(V){var he,_e,ke;let J=(_e=(he=N._hass)==null?void 0:he.states)==null?void 0:_e[V];return J?`${((ke=J.attributes)==null?void 0:ke.friendly_name)||V}: ${J.state}`:""}};return{hass:x,states:S,config:this._config,root:z,host:N,helpers:G,reason:p,listeners:W}}_getLiveStatesProxy_(){if(this._liveStatesProxy)return this._liveStatesProxy;let p=this;return this._liveStatesProxy=new Proxy({},{get(x,S){var N;return S===Symbol.toStringTag?"Object":(((N=p._hass)==null?void 0:N.states)||{})[S]},has(x,S){var z;return S in(((z=p._hass)==null?void 0:z.states)||{})},ownKeys(){var x;return Reflect.ownKeys(((x=p._hass)==null?void 0:x.states)||{})},getOwnPropertyDescriptor(x,S){var N;let z=((N=p._hass)==null?void 0:N.states)||{};if(S in z)return{value:z[S],writable:!1,enumerable:!0,configurable:!0}}}),this._liveStatesProxy}_teardownUserScript_(){var p;try{(p=this._scriptCleanup)==null||p.call(this)}catch{}this._scriptCleanup=null,this._scriptUpdate=null}async _runUserScript_(p="config"){var N;clearTimeout(this._rerunTimer),this._teardownUserScript_(),this._showRuntimeError_("");let x=String(((N=this._config)==null?void 0:N.js)||"").trim();if(!x||!this._contentEl){this._dispatchRuntimeUpdate_(p);return}let S=++this._scriptToken,z=this._buildRuntimeContext_(p);try{let G=await new u("hass","states","config","root","host","helpers","reason",`${x}`)(z.hass,z.states,z.config,z.root,z.host,z.helpers,z.reason);if(S!==this._scriptToken)return;if(Array.isArray(z.listeners)&&z.listeners.length){let V=()=>{z.listeners.forEach(J=>{try{J==null||J()}catch{}})};if(typeof G=="function"){let J=G;this._scriptCleanup=()=>{V(),J()}}else G&&typeof G.destroy=="function"?this._scriptCleanup=()=>{V(),G.destroy()}:this._scriptCleanup=V}else typeof G=="function"?this._scriptCleanup=G:G&&typeof G.destroy=="function"&&(this._scriptCleanup=G.destroy.bind(G));if(G&&typeof G.update=="function"){this._scriptUpdate=G.update.bind(G);try{this._scriptUpdate(this._buildRuntimeContext_("after-init"))}catch(V){this._showRuntimeError_(V)}}else this._dispatchRuntimeUpdate_("after-init")}catch(W){S===this._scriptToken&&this._showRuntimeError_(W)}}_dispatchRuntimeUpdate_(p="update"){if(this._contentEl)try{this._contentEl.dispatchEvent(new CustomEvent("ddc-hass-update",{detail:this._buildRuntimeContext_(p),bubbles:!1,composed:!1}))}catch{}}_showRuntimeError_(p){if(!this._errorEl)return;let x=p?String((p==null?void 0:p.stack)||(p==null?void 0:p.message)||p):"";this._errorEl.textContent=x,this._errorEl.classList.toggle("show",!!x)}}class Se extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config={type:"custom:ddc-html-card",title:"",html:"",css:"",js:"",rerun_on_hass_update:!1},this._emitTimer=null,this._configSig=""}setConfig(p){let x={type:"custom:ddc-html-card",title:"",html:"",css:"",js:"",rerun_on_hass_update:!1,...p||{}},S=JSON.stringify(x);S!==this._configSig&&(this._configSig=S,this._config=x,this._renderEditor_())}set hass(p){this._hass=p}_queueEmit_(){clearTimeout(this._emitTimer),this._emitTimer=setTimeout(()=>{this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:{...this._config}}}))},120)}_bindField_(p,x){let S=this.shadowRoot.querySelector(p);S&&S.addEventListener("input",()=>{this._config[x]=S.value,this._queueEmit_()})}_renderEditor_(){let p=this._config||{};this.shadowRoot.innerHTML=`
        <style>
          :host{
            display:block;
            color:var(--primary-text-color);
          }
          .editor{
            display:grid;
            gap:14px;
          }
          .intro{
            display:grid;
            gap:8px;
            padding:14px 16px;
            border-radius:16px;
            background:rgba(255,255,255,.025);
            border:1px solid rgba(255,255,255,.08);
            line-height:1.5;
            color:var(--secondary-text-color, #94a3b8);
          }
          .intro strong{
            color:var(--primary-text-color);
          }
          .intro code{
            font-family:ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
            font-size:.84rem;
            color:var(--primary-text-color);
          }
          .grid{
            display:grid;
            gap:14px;
          }
          .field{
            display:grid;
            gap:8px;
          }
          .field.two{
            grid-template-columns:minmax(0,1fr) auto;
            align-items:end;
            gap:14px;
          }
          label{
            display:grid;
            gap:6px;
            font-size:.9rem;
            font-weight:650;
          }
          .hint{
            font-size:.78rem;
            color:var(--secondary-text-color, #94a3b8);
            font-weight:500;
          }
          input[type="text"], textarea{
            width:100%;
            box-sizing:border-box;
            border-radius:14px;
            border:1px solid rgba(255,255,255,.1);
            background:rgba(4,9,18,.82);
            color:var(--primary-text-color);
            padding:12px 14px;
            outline:none;
            box-shadow:inset 0 1px 0 rgba(255,255,255,.03);
            font:inherit;
          }
          input[type="text"]:focus, textarea:focus{
            border-color:color-mix(in oklab, var(--primary-color, #ff9800) 58%, rgba(255,255,255,.12));
            box-shadow:
              0 0 0 3px color-mix(in oklab, var(--primary-color, #ff9800) 18%, transparent),
              inset 0 1px 0 rgba(255,255,255,.04);
          }
          textarea{
            min-height:180px;
            resize:vertical;
            font-family:ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
            font-size:.88rem;
            line-height:1.55;
          }
          .switch{
            display:inline-flex;
            align-items:center;
            gap:10px;
            min-height:48px;
            padding:0 14px;
            border-radius:14px;
            border:1px solid rgba(255,255,255,.08);
            background:rgba(255,255,255,.03);
          }
        </style>
        <div class="editor">
          <div class="intro">
            <strong>Build a card with your own code</strong>
            <span>Your JavaScript receives <code>hass</code>, <code>states</code>, <code>config</code>, <code>root</code>, <code>host</code> and <code>helpers</code>. Return <code>{ update, destroy }</code> if you want live updates without re-running the whole script.</span>
          </div>

          <div class="grid">
            <div class="field two">
              <label>
                <span>Card title</span>
                <input id="title" type="text" placeholder="Optional title shown above the custom content" value="${this._escapeHtmlAttr_(p.title||"")}">
              </label>
              <label class="switch">
                <input id="rerun" type="checkbox" ${p.rerun_on_hass_update?"checked":""}>
                <span>Re-run JS on state updates</span>
              </label>
            </div>

            <label class="field">
              <span>HTML</span>
              <span class="hint">Rendered inside the card body.</span>
              <textarea id="html" spellcheck="false">${this._escapeTextarea_(p.html||"")}</textarea>
            </label>

            <label class="field">
              <span>CSS</span>
              <span class="hint">Scoped to this card.</span>
              <textarea id="css" spellcheck="false">${this._escapeTextarea_(p.css||"")}</textarea>
            </label>

            <label class="field">
              <span>JavaScript</span>
              <span class="hint">Runs inside the card. Use <code>helpers.callService(...)</code> for HA actions.</span>
              <textarea id="js" spellcheck="false">${this._escapeTextarea_(p.js||"")}</textarea>
            </label>
          </div>
        </div>`,this._bindField_("#title","title"),this._bindField_("#html","html"),this._bindField_("#css","css"),this._bindField_("#js","js");let x=this.shadowRoot.querySelector("#rerun");x==null||x.addEventListener("change",()=>{this._config.rerun_on_hass_update=!!x.checked,this._queueEmit_()})}_escapeTextarea_(p){return String(p).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}_escapeHtmlAttr_(p){return String(p).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}}customElements.get(e)||customElements.define(e,re),customElements.get(t)||customElements.define(t,le),customElements.get(i)||customElements.define(i,Le),customElements.get(n)||customElements.define(n,me),customElements.get(o)||customElements.define(o,de),customElements.get(c)||customElements.define(c,Ce),customElements.get(l)||customElements.define(l,ue),customElements.get(g)||customElements.define(g,Ae),customElements.get(r)||customElements.define(r,ye),customElements.get(w)||customElements.define(w,Se),customElements.define("drag-and-drop-card",Mi);try{Array.isArray(window.customCards)||(window.customCards=[]),window.customCards.some(p=>p&&typeof p.type=="string"&&p.type.toLowerCase()==="custom:drag-and-drop-card")||window.customCards.push({type:"drag-and-drop-card",name:"Drag & Drop Card",description:"Flexible grid layout card with drag\u2011and\u2011drop editing.",preview:!1,icon:"mdi:cursor-move"})}catch(B){console.warn("[drag-and-drop-card] Failed to register card in customCards",B)}}(()=>{let r=new WeakSet,w=o=>{try{if(!(o instanceof Element))return!1;let c=o.localName||"";return c?!!(c==="ha-card"||c.endsWith("-card")):!1}catch{return!1}},e=o=>{try{if(!o||r.has(o))return;r.add(o),o.dispatchEvent(new Event("ll-rebuild",{bubbles:!0,composed:!0}))}catch{}},t=o=>{var c,l;try{if(!o)return;o instanceof Element&&w(o)&&e(o);let g=(l=(c=(o instanceof ShadowRoot,o)).querySelectorAll)==null?void 0:l.call(c,"*");if(!g)return;for(let u of g){w(u)&&e(u);let m=u.shadowRoot;if(m)try{t(m)}catch{}}}catch{}},i=o=>{try{if(!o||o.__ddcCardModIntegrated)return;o.__ddcCardModIntegrated=!0;let c=o.shadowRoot||o;t(c);let l=new MutationObserver(g=>{for(let u of g)if(!(!u.addedNodes||!u.addedNodes.length))for(let m of u.addedNodes)(m instanceof Element||m instanceof ShadowRoot)&&t(m)});l.observe(c,{childList:!0,subtree:!0}),o.__ddcCardModIntegratedObserver=l,setTimeout(()=>{try{t(c)}catch{}},250),setTimeout(()=>{try{t(c)}catch{}},1e3)}catch{}},n=()=>{try{document.querySelectorAll("drag-and-drop-card").forEach(i)}catch{}};if(window.customElements&&window.customElements.whenDefined)window.customElements.whenDefined("drag-and-drop-card").then(()=>{n();let o=window.customElements.get("drag-and-drop-card");if(o&&o.prototype){let l=o.prototype.connectedCallback;o.prototype.connectedCallback=function(){try{l&&l.call(this)}finally{i(this)}}}new MutationObserver(()=>n()).observe(document.documentElement,{childList:!0,subtree:!0})});else{let o=setInterval(n,1e3);setTimeout(()=>clearInterval(o),1e4)}})();(function(){let r="drag-and-drop-card",w=customElements.get(r);if(!w){console.warn("[ddc:augment] Could not find custom element",r);return}function e(){var _,A;try{let T=0,E=this;for(;E&&T++<20;){let C=(_=E.getRootNode)==null?void 0:_.call(E),$=C==null?void 0:C.host;if(($==null?void 0:$.tagName)==="HUI-ROOT")return $.lovelace;E=$||E.parentElement}let M=new Set,O=[document];for(;O.length;){let C=O.shift();if(!(!C||M.has(C))){if(M.add(C),((A=C.host)==null?void 0:A.tagName)==="HUI-ROOT")return C.host.lovelace;if(C.tagName==="HUI-ROOT")return C.lovelace;if(C.shadowRoot&&O.push(C.shadowRoot),C.children)for(let $ of C.children)O.push($)}}}catch{}}function t(_){let A=[],T=(M,O,C)=>{(C==null?void 0:C.type)==="custom:drag-and-drop-card"&&A.push({view:M,path:[...O],card:C})},E=(M,O,C)=>{if(M){if(Array.isArray(M)){M.forEach(($,q)=>E($,O,C.concat(q)));return}if(typeof M=="object"){"type"in M&&T(O,C,M);for(let[$,q]of Object.entries(M))$==="views"&&Array.isArray(q)?q.forEach((F,j)=>E(F,j,["views",j])):(Array.isArray(q)||q&&typeof q=="object")&&E(q,O,C.concat($))}}};return E(_,-1,[]),A}function i(_,A,T){let E=new Date().toISOString().replace(/[:.]/g,"-"),M=A.map(C=>{let $=_;for(let q of C.path)$=$[q];return{view:C.view,path:C.path,storage_key:$&&$.storage_key||null,before:$,patch:T}}),O={kind:"ddc-import-backup",created_at:E,count:M.length,items:M};try{let C=`ddc.backup.${E}`;localStorage.setItem(C,JSON.stringify(O));let $=Object.keys(localStorage).filter(q=>q.startsWith("ddc.backup.")).sort().reverse();for(let q of $.slice(10))localStorage.removeItem(q)}catch{}return{name:`ddc_backup_${E}.json`,data:O}}function n(_,A){try{let T=new Blob([JSON.stringify(A,null,2)],{type:"application/json"}),E=URL.createObjectURL(T),M=document.createElement("a");M.href=E,M.download=_,document.body.appendChild(M),M.click(),M.remove(),setTimeout(()=>URL.revokeObjectURL(E),1500)}catch(T){console.warn("[ddc:backup] download failed",T)}}function o(_){if(_)try{let A="ddc.recent.keys",T=JSON.parse(localStorage.getItem(A)||"[]");T.includes(_)||T.unshift(_),localStorage.setItem(A,JSON.stringify(T.slice(0,20)))}catch{}}function c(){try{return JSON.parse(localStorage.getItem("ddc.recent.keys")||"[]")}catch{return[]}}function l(){var A,T;let _=new Set;try{let E=Object.keys(localStorage).filter(M=>M.startsWith("ddc.backup.")).sort().reverse();for(let M of E)try{let O=JSON.parse(localStorage.getItem(M)||"null");if(O&&O.items)for(let C of O.items){let $=((A=C==null?void 0:C.before)==null?void 0:A.storage_key)||((T=C==null?void 0:C.patch)==null?void 0:T.storage_key);$&&_.add($)}}catch{}}catch{}return Array.from(_)}async function g(_,{forceTargetKey:A=null,onlyThisCard:T=!1,prevKey:E,noDownload:M}={}){var le,Le,me,de,Ce;let O=((le=this._getLovelace)==null?void 0:le.call(this))||e.call(this);if(!O)return console.debug("[ddc:import] persist: no lovelace root"),!1;if(typeof O.saveConfig!="function")return console.debug("[ddc:import] persist: dashboard not in Storage mode"),!1;let C=ue=>typeof ue=="string"?ue.trim():null,$=C(A)||C((Le=this==null?void 0:this._config)==null?void 0:Le.storage_key)||C(this==null?void 0:this.storageKey)||C(E);if(!$)return console.warn("[ddc:import] persist: missing target storage_key on this card; aborting"),!1;let q=JSON.parse(JSON.stringify(O.config)),F=(this._scanDdcCards||t)(q);console.debug("[ddc:import] persist: found DDC cards",F.map(ue=>({view:ue.view,path:ue.path.join("."),storage_key:ue.card&&(ue.card.storage_key||ue.card.storageKey)||null})));let j=F.filter(ue=>{var ye,Se,B,p,x,S,z,N,W;return((W=(S=(B=C((ye=ue.card)==null?void 0:ye.storage_key))!=null?B:C((Se=ue.card)==null?void 0:Se.storageKey))!=null?S:C((x=(p=ue.card)==null?void 0:p.options)==null?void 0:x.storage_key))!=null?W:C((N=(z=ue.card)==null?void 0:z.options)==null?void 0:N.storageKey))===$});if(j.length!==1)return console.warn("[ddc:import] persist: expected exactly one target with key, got",j.length,{myKey:$}),!1;let H={type:"custom:drag-and-drop-card",..._||{}};"storage_key"in H&&delete H.storage_key,"storageKey"in H&&delete H.storageKey,H!=null&&H.options&&("storage_key"in H.options&&delete H.options.storage_key,"storageKey"in H.options&&delete H.options.storageKey);let U=Array.isArray(H.cards)?H.cards:null;delete H.cards;try{let ue=i==null?void 0:i(O.config,j,H);ue&&(console.debug("[ddc:import] backup created",{file:ue.name,items:(me=ue.data)==null?void 0:me.count}),!M&&typeof n=="function"&&n(ue.name,ue.data))}catch(ue){console.debug("[ddc:import] backup skipped/error:",(ue==null?void 0:ue.message)||ue)}let X=j[0],te=q;for(let ue of X.path)te=te[ue];let re=(Ce=(de=C(te==null?void 0:te.storage_key))!=null?de:C(te==null?void 0:te.storageKey))!=null?Ce:null;return Object.assign(te,H),re?te.storage_key=re:te.storage_key=$,"storageKey"in te&&delete te.storageKey,console.debug("[ddc:import] persist \u2192 saving",{patched:1,into_key:te.storage_key,ignored_file_key:C(_==null?void 0:_.storage_key)||C(_==null?void 0:_.storageKey)||null}),await O.saveConfig(q),{yamlSaved:!0,cardsForStorage:U}}async function u(){var T;let _=E=>{if(!E)return[];if(Array.isArray(E))return E;if(Array.isArray(E==null?void 0:E.keys))return E.keys;if(Array.isArray(E==null?void 0:E.dashboards))return E.dashboards;if(Array.isArray(E==null?void 0:E.entries))return E.entries.map(M=>M.key||M.id||M.name).filter(Boolean);if(Array.isArray(E==null?void 0:E.items))return E.items.map(M=>M.key||M.id||M.name).filter(Boolean);if(typeof E=="object"){for(let M of Object.values(E))if(Array.isArray(M)&&M.every(O=>typeof O=="string"))return M}return[]};try{if((T=this==null?void 0:this.hass)!=null&&T.callApi){let E=await this.hass.callApi("get","dragdrop_storage"),M=_(E);if(M.length)return M}}catch(E){console.debug("[ddc:switcher] hass.callApi dragdrop_storage failed",E)}let A=["/api/dragdrop_storage","/api/dragdrop_storage/keys","/api/dragdrop_storage/list","/api/dragdrop_storage?all=1"];for(let E of A)try{let O=await(await fetch(E,{cache:"no-store"})).json(),C=_(O);if(C.length)return C}catch{}return[]}async function m(_){let A=O=>{if(!O)return null;if(O.options||O.cards)return O;if(typeof O.design=="object")return O.design;if(typeof O.payload=="object")return O.payload;try{if(typeof O=="string")return JSON.parse(O)}catch{}return null},T=async(O,C,$)=>{var q;try{if((q=this==null?void 0:this.hass)!=null&&q.callApi){let F=await this.hass.callApi(O,C,$),j=A(F);if(j)return j}}catch{}return null},E=async O=>{try{let C=await fetch(O,{cache:"no-store"}),$=C.headers.get("content-type")||"";if($.includes("application/json")||$.includes("text/plain")){let q=await C.json().catch(()=>null)||await C.text().catch(()=>null),F=A(q);if(F)return F}}catch{}return null},M=encodeURIComponent(_);return await(T("get",`dragdrop_storage/${M}`)||E(`/api/dragdrop_storage/${M}`)||E(`/api/dragdrop_storage?key=${M}`)||T("post","dragdrop_storage/get",{key:_})||null)}async function h(_,{source:A="switcher",newKey:T=null}={}){var O,C,$,q,F,j,H,U,X,te,re,le,Le,me,de;if(!_||typeof _!="object")throw new Error("Invalid design payload");let E=this.storageKey||((O=this._config)==null?void 0:O.storage_key)||null;try{(C=this._dbgInit)==null||C.call(this),($=this._dbgPush)==null||$.call(this,"import","Begin import (programmatic)",{source:A,newKey:T})}catch{}if(_.options){let{storage_key:Ce,...ue}=_.options;(q=this._applyImportedOptions)==null||q.call(this,ue,!0)}else typeof _.grid=="number"&&((F=this._applyImportedOptions)==null||F.call(this,{grid:_.grid},!0));let M=T||((j=_==null?void 0:_.options)==null?void 0:j.storage_key)||E;if(M){this.storageKey=M,this._config={...this._config||{},storage_key:M};try{(H=this._syncEditorsStorageKey)==null||H.call(this)}catch{}}try{let Ce=(U=_.options)!=null?U:typeof _.grid=="number"?{grid:_.grid}:{};await((X=this._persistOptionsToYaml)==null?void 0:X.call(this,{...Ce,storage_key:M},{prevKey:E,noDownload:A==="switcher"}))}catch(Ce){console.warn("[ddc:apply] persist failed",Ce)}try{this.responsiveViewportProfiles=this._normalizeResponsiveViewportProfiles_(((te=_.options)==null?void 0:te.responsive_viewports)||this.responsiveViewportProfiles),this._responsiveLayouts=this._normalizeResponsiveLayouts_(_.cards||[],_.responsive_layouts||null),await((re=this._syncResponsiveProfileForViewport_)==null?void 0:re.call(this,{force:!0})),(le=this._resizeContainer)==null||le.call(this),(Le=this._markDirty)==null||Le.call(this,"import"),(me=this._toast)==null||me.call(this,A==="switcher"?`Loaded layout "${M}"`:"Design imported")}catch(Ce){console.error("[ddc:apply] rebuild failed",Ce),(de=this._toast)==null||de.call(this,"Import failed during rebuild.")}}function b(){var _,A,T,E;try{let M=this.shadowRoot||this.renderRoot||this,O=M.querySelector(".ddc-switcher-inline");if(!O)return;let C=(_=O.closest)==null?void 0:_.call(O,".sec-layouts"),$=((A=this._getLovelace)==null?void 0:A.call(this))||e.call(this),q=!1;try{let F=(T=M.getRootNode&&M.getRootNode())==null?void 0:T.host;q=!!(this.editMode||$&&($.editMode===!0||F&&F.editMode===!0))}catch{}O.style.display=q?"inline-flex":"none",C&&(C.style.display=q?"":"none"),(E=this._refreshToolbarOpenHeight_)==null||E.call(this)}catch{}}function y(){var _;try{if(this._ddcSwitcherInstalled)return;let T=(this.shadowRoot||this.renderRoot||this).querySelector(".toolbar");if(!T)return;let E=T.querySelector(".sec-layouts .layout-host");if(!E){let H=document.createElement("section");H.className="ddc-sec sec-layouts",H.setAttribute("aria-label","Layouts"),H.style.display="none",H.innerHTML=`
          <header class="ddc-sec-head">
            <span class="ddc-sec-dot" aria-hidden="true"></span>
            <span class="ddc-sec-title">Layouts</span>
          </header>
          <div class="ddc-row center">
            <div class="layout-host"></div>
          </div>
        `,T.appendChild(H),E=H.querySelector(".layout-host")}let M=document.createElement("div");M.className="ddc-switcher-inline";let O=document.createElement("span");O.className="label",O.textContent="Layout:";let C=document.createElement("select");C.title="Select stored layout (storage_key)",C.id="ddcKeySelect";let $=document.createElement("button");$.className="btn secondary",$.type="button",$.innerHTML='<ha-icon icon="mdi:refresh"></ha-icon><span style="margin-left:6px">Refresh</span>';let q=document.createElement("button");q.className="btn danger",q.type="button",q.innerHTML='<ha-icon icon="mdi:trash-can-outline"></ha-icon><span style="margin-left:6px">Delete</span>',q.title="Delete selected layout";let F=document.createElement("button");F.className="btn info",F.type="button",F.innerHTML='<ha-icon icon="mdi:undo"></ha-icon><span style="margin-left:6px">Restore</span>',F.title="Restore last deleted layout",M.appendChild(O),M.appendChild(C),M.appendChild($),M.appendChild(q),M.appendChild(F),E.appendChild(M),this._ddcSwitcherInstalled=!0,(_=this._refreshToolbarOpenHeight_)==null||_.call(this);let j=async()=>{var Ae;let H=this.storageKey||this._config&&this._config.storage_key||"",U=await u.call(this),X=l(),te=c(),re=ye=>Array.from(new Set(ye.filter(Boolean))),le=[];try{le=JSON.parse(localStorage.getItem("ddc.deleted.keys")||"[]")}catch{}let Le=[...this._ddcDeletedKeys||[],...le],me=re(U).filter(ye=>!Le.includes(ye)),de=re(X).filter(ye=>!Le.includes(ye)),Ce=re(te).filter(ye=>!Le.includes(ye));if(C.innerHTML="",H&&!Le.includes(H)&&!me.includes(H)&&!de.includes(H)&&!Ce.includes(H)){let ye=document.createElement("option");ye.value=H,ye.textContent=`${H} (current)`,ye.selected=!0,C.appendChild(ye)}let ue=(ye,Se)=>{if(!Se.length)return;let B=document.createElement("optgroup");B.label=ye,Se.forEach(p=>{let x=document.createElement("option");x.value=p,x.textContent=`${p}`,p===H&&(x.selected=!0),B.appendChild(x)}),C.appendChild(B)};if(ue("Server",me),ue("Backups",de),ue("Recent",Ce),!C.children.length){let ye=document.createElement("option");ye.value="",ye.textContent="\u2014 none \u2014",ye.selected=!0,C.appendChild(ye)}b.call(this),(Ae=this._refreshToolbarOpenHeight_)==null||Ae.call(this);try{let ye=C.value||"";q.disabled=!ye,F.disabled=!(this._ddcDeletedLayouts&&this._ddcDeletedLayouts.length)}catch{}};j(),$.addEventListener("click",j),q.addEventListener("click",async()=>{var te,re,le,Le,me;let H=C.value||"";if(!H){(te=this._toast)==null||te.call(this,"No layout selected.");return}try{if(typeof window!="undefined"&&window.confirm&&!window.confirm(`Delete layout "${H}"?`))return}catch{}let U=null;try{U=await m.call(this,H)}catch{}U&&(this._ddcDeletedLayouts||(this._ddcDeletedLayouts=[]),this._ddcDeletedLayouts.unshift({key:H,design:U}),this._ddcDeletedLayouts=this._ddcDeletedLayouts.slice(0,5));try{this._ddcDeletedKeys||(this._ddcDeletedKeys=[]),this._ddcDeletedKeys.includes(H)||this._ddcDeletedKeys.push(H)}catch{}try{let de=JSON.parse(localStorage.getItem("ddc.deleted.keys")||"[]");de.includes(H)||(de.push(H),localStorage.setItem("ddc.deleted.keys",JSON.stringify(de)))}catch{}let X=!1;try{(re=this==null?void 0:this.hass)!=null&&re.callApi&&(await this.hass.callApi("delete",`dragdrop_storage/${encodeURIComponent(H)}`),X=!0)}catch{X=!1}if(!X)try{(le=this==null?void 0:this.hass)!=null&&le.callApi&&(await this.hass.callApi("delete",`drag_and_drop_card_backend/${encodeURIComponent(H)}`),X=!0)}catch{X=!1}if(!X)try{let de=await fetch(`/api/drag_and_drop_card_backend/${encodeURIComponent(H)}`,{method:"DELETE"});de&&de.ok&&(X=!0)}catch{}try{localStorage.removeItem(`ddc_local_${H}`)}catch{}X?(Le=this._toast)==null||Le.call(this,`Deleted layout "${H}"`):(me=this._toast)==null||me.call(this,`Failed to delete layout "${H}"`),await j()}),F.addEventListener("click",async()=>{var re,le,Le,me;if(!this._ddcDeletedLayouts||this._ddcDeletedLayouts.length===0){(re=this._toast)==null||re.call(this,"Nothing to restore.");return}let H=this._ddcDeletedLayouts.shift(),U=H.key,X=H.design,te=!1;try{(le=this==null?void 0:this.hass)!=null&&le.callApi&&(await this.hass.callApi("post",`dragdrop_storage/${encodeURIComponent(U)}`,X),te=!0)}catch{}if(!te)try{let de=await fetch(`/api/dragdrop_storage/${encodeURIComponent(U)}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(X)});de&&de.ok&&(te=!0)}catch{}try{localStorage.setItem(`ddc_local_${U}`,JSON.stringify(X))}catch{}te?(Le=this._toast)==null||Le.call(this,`Restored layout "${U}"`):(me=this._toast)==null||me.call(this,`Failed to restore layout "${U}"`);try{this._ddcDeletedKeys&&(this._ddcDeletedKeys=this._ddcDeletedKeys.filter(de=>de!==U))}catch{}try{let de=JSON.parse(localStorage.getItem("ddc.deleted.keys")||"[]"),Ce=de.indexOf(U);Ce>=0&&(de.splice(Ce,1),localStorage.setItem("ddc.deleted.keys",JSON.stringify(de)))}catch{}await j()}),C.addEventListener("change",async H=>{var X,te,re,le,Le,me,de,Ce;let U=String(H.target.value||"");if(U&&!this._ddcLoadingFromKey){this._ddcLoadingFromKey=!0;try{let ue=await m.call(this,U);if(!ue){(X=this._toast)==null||X.call(this,`No layout found for "${U}"`);return}await h.call(this,ue,{source:"switcher",newKey:U}),(te=this._resizeContainer)==null||te.call(this),(re=this._toast)==null||re.call(this,`Loaded layout "${U}"`);let Ae=String(((le=this._config)==null?void 0:le.storage_key)||this.storageKey||""),ye=!1;try{let Se=Ae?{forceTargetKey:Ae,noDownload:!0}:{noDownload:!0};ye=await this._persistOptionsToYaml({storage_key:U},Se)}catch(Se){console.warn("[ddc:switcher] failed to persist storage_key to YAML",Se),(Le=this._toast)==null||Le.call(this,"Failed to persist selected layout. Keeping current.");return}if(this.storageKey=U,this._config&&(this._config.storage_key=U),!ye){console.warn("[ddc:switcher] persist returned false (likely YAML mode). Skipping reload.");return}try{this._saveTimer&&clearTimeout(this._saveTimer),await this._saveLayout(!0)}catch(Se){console.warn("[ddc:switcher] saveLayout failed",Se),(me=this._markDirty)==null||me.call(this,"switcher"),(de=this._toast)==null||de.call(this,"Layout loaded \u2014 click Apply to save.");return}window.location.reload(),window.location.reload()}catch(ue){console.warn("[ddc:switcher] load/apply failed",ue),(Ce=this._toast)==null||Ce.call(this,"Failed to load layout.")}finally{this._ddcLoadingFromKey=!1}}}),this._ddcVisTimer&&clearInterval(this._ddcVisTimer),this._ddcVisTimer=setInterval(()=>b.call(this),800),b.call(this)}catch(A){console.warn("[ddc:switcher] inline install failed",A)}}w.prototype._getLovelace||(w.prototype._getLovelace=e),w.prototype._scanDdcCards||(w.prototype._scanDdcCards=t),w.prototype._persistOptionsToYaml=g,w.prototype._applyDesignObject||(w.prototype._applyDesignObject=h);try{let _=Object.getOwnPropertyDescriptor(w.prototype,"hass");if(_&&(_.set||_.get)){let A=_.set;Object.defineProperty(w.prototype,"hass",{configurable:!0,enumerable:!0,set(T){A&&A.call(this,T);try{y.call(this)}catch{}},get:_.get||function(){return this._hass}})}else if(typeof w.prototype.setHass=="function"){let A=w.prototype.setHass;w.prototype.setHass=function(T){A&&A.call(this,T);try{y.call(this)}catch{}}}else{let A=w.prototype.updated||w.prototype.firstUpdated;w.prototype.updated=function(...T){A&&A.apply(this,T);try{y.call(this)}catch{}}}}catch(_){console.warn("[ddc:switcher] wrap hass setter failed",_)}})();
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
