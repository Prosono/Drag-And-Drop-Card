var Ma=Object.create;var gr=Object.defineProperty;var La=Object.getOwnPropertyDescriptor;var Pa=Object.getOwnPropertyNames;var Ra=Object.getPrototypeOf,Ia=Object.prototype.hasOwnProperty;var Da=(e,p,t)=>p in e?gr(e,p,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[p]=t;var Fa=(e,p)=>()=>(p||e((p={exports:{}}).exports,p),p.exports);var Ba=(e,p,t,n)=>{if(p&&typeof p=="object"||typeof p=="function")for(let o of Pa(p))!Ia.call(e,o)&&o!==t&&gr(e,o,{get:()=>p[o],enumerable:!(n=La(p,o))||n.enumerable});return e};var Na=(e,p,t)=>(t=e!=null?Ma(Ra(e)):{},Ba(p||!e||!e.__esModule?gr(t,"default",{value:e,enumerable:!0}):t,e));var ut=(e,p,t)=>Da(e,typeof p!="symbol"?p+"":p,t);var Wr=Fa((mr,ai)=>{(function(e,p){typeof mr=="object"&&typeof ai!="undefined"?ai.exports=p():typeof define=="function"&&define.amd?define(p):(e=typeof globalThis!="undefined"?globalThis:e||self).interact=p()})(mr,(function(){"use strict";function e(r,i){var a=Object.keys(r);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(r);i&&(d=d.filter((function(h){return Object.getOwnPropertyDescriptor(r,h).enumerable}))),a.push.apply(a,d)}return a}function p(r){for(var i=1;i<arguments.length;i++){var a=arguments[i]!=null?arguments[i]:{};i%2?e(Object(a),!0).forEach((function(d){s(r,d,a[d])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):e(Object(a)).forEach((function(d){Object.defineProperty(r,d,Object.getOwnPropertyDescriptor(a,d))}))}return r}function t(r){return t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},t(r)}function n(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")}function o(r,i){for(var a=0;a<i.length;a++){var d=i[a];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(r,x(d.key),d)}}function c(r,i,a){return i&&o(r.prototype,i),a&&o(r,a),Object.defineProperty(r,"prototype",{writable:!1}),r}function s(r,i,a){return(i=x(i))in r?Object.defineProperty(r,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[i]=a,r}function l(r,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(i&&i.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),i&&f(r,i)}function u(r){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},u(r)}function f(r,i){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,d){return a.__proto__=d,a},f(r,i)}function v(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function m(r){var i=(function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch{return!1}})();return function(){var a,d=u(r);if(i){var h=u(this).constructor;a=Reflect.construct(d,arguments,h)}else a=d.apply(this,arguments);return(function(g,_){if(_&&(typeof _=="object"||typeof _=="function"))return _;if(_!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return v(g)})(this,a)}}function y(){return y=typeof Reflect!="undefined"&&Reflect.get?Reflect.get.bind():function(r,i,a){var d=(function(g,_){for(;!Object.prototype.hasOwnProperty.call(g,_)&&(g=u(g))!==null;);return g})(r,i);if(d){var h=Object.getOwnPropertyDescriptor(d,i);return h.get?h.get.call(arguments.length<3?r:a):h.value}},y.apply(this,arguments)}function x(r){var i=(function(a,d){if(typeof a!="object"||a===null)return a;var h=a[Symbol.toPrimitive];if(h!==void 0){var g=h.call(a,d||"default");if(typeof g!="object")return g;throw new TypeError("@@toPrimitive must return a primitive value.")}return(d==="string"?String:Number)(a)})(r,"string");return typeof i=="symbol"?i:i+""}var S=function(r){return!(!r||!r.Window)&&r instanceof r.Window},w=void 0,T=void 0;function R(r){w=r;var i=r.document.createTextNode("");i.ownerDocument!==r.document&&typeof r.wrap=="function"&&r.wrap(i)===i&&(r=r.wrap(r)),T=r}function C(r){return S(r)?r:(r.ownerDocument||r).defaultView||T.window}typeof window!="undefined"&&window&&R(window);var O=function(r){return!!r&&t(r)==="object"},P=function(r){return typeof r=="function"},b={window:function(r){return r===T||S(r)},docFrag:function(r){return O(r)&&r.nodeType===11},object:O,func:P,number:function(r){return typeof r=="number"},bool:function(r){return typeof r=="boolean"},string:function(r){return typeof r=="string"},element:function(r){if(!r||t(r)!=="object")return!1;var i=C(r)||T;return/object|function/.test(typeof Element=="undefined"?"undefined":t(Element))?r instanceof Element||r instanceof i.Element:r.nodeType===1&&typeof r.nodeName=="string"},plainObject:function(r){return O(r)&&!!r.constructor&&/function Object\b/.test(r.constructor.toString())},array:function(r){return O(r)&&r.length!==void 0&&P(r.splice)}};function M(r){var i=r.interaction;if(i.prepared.name==="drag"){var a=i.prepared.axis;a==="x"?(i.coords.cur.page.y=i.coords.start.page.y,i.coords.cur.client.y=i.coords.start.client.y,i.coords.velocity.client.y=0,i.coords.velocity.page.y=0):a==="y"&&(i.coords.cur.page.x=i.coords.start.page.x,i.coords.cur.client.x=i.coords.start.client.x,i.coords.velocity.client.x=0,i.coords.velocity.page.x=0)}}function I(r){var i=r.iEvent,a=r.interaction;if(a.prepared.name==="drag"){var d=a.prepared.axis;if(d==="x"||d==="y"){var h=d==="x"?"y":"x";i.page[h]=a.coords.start.page[h],i.client[h]=a.coords.start.client[h],i.delta[h]=0}}}var q={id:"actions/drag",install:function(r){var i=r.actions,a=r.Interactable,d=r.defaults;a.prototype.draggable=q.draggable,i.map.drag=q,i.methodDict.drag="draggable",d.actions.drag=q.defaults},listeners:{"interactions:before-action-move":M,"interactions:action-resume":M,"interactions:action-move":I,"auto-start:check":function(r){var i=r.interaction,a=r.interactable,d=r.buttons,h=a.options.drag;if(h&&h.enabled&&(!i.pointerIsDown||!/mouse|pointer/.test(i.pointerType)||(d&a.options.drag.mouseButtons)!=0))return r.action={name:"drag",axis:h.lockAxis==="start"?h.startAxis:h.lockAxis},!1}},draggable:function(r){return b.object(r)?(this.options.drag.enabled=r.enabled!==!1,this.setPerAction("drag",r),this.setOnEvents("drag",r),/^(xy|x|y|start)$/.test(r.lockAxis)&&(this.options.drag.lockAxis=r.lockAxis),/^(xy|x|y)$/.test(r.startAxis)&&(this.options.drag.startAxis=r.startAxis),this):b.bool(r)?(this.options.drag.enabled=r,this):this.options.drag},beforeMove:M,move:I,defaults:{startAxis:"xy",lockAxis:"xy"},getCursor:function(){return"move"},filterEventType:function(r){return r.search("drag")===0}},K=q,Y={init:function(r){var i=r;Y.document=i.document,Y.DocumentFragment=i.DocumentFragment||ie,Y.SVGElement=i.SVGElement||ie,Y.SVGSVGElement=i.SVGSVGElement||ie,Y.SVGElementInstance=i.SVGElementInstance||ie,Y.Element=i.Element||ie,Y.HTMLElement=i.HTMLElement||Y.Element,Y.Event=i.Event,Y.Touch=i.Touch||ie,Y.PointerEvent=i.PointerEvent||i.MSPointerEvent},document:null,DocumentFragment:null,SVGElement:null,SVGSVGElement:null,SVGElementInstance:null,Element:null,HTMLElement:null,Event:null,Touch:null,PointerEvent:null};function ie(){}var F=Y,U={init:function(r){var i=F.Element,a=r.navigator||{};U.supportsTouch="ontouchstart"in r||b.func(r.DocumentTouch)&&F.document instanceof r.DocumentTouch,U.supportsPointerEvent=a.pointerEnabled!==!1&&!!F.PointerEvent,U.isIOS=/iP(hone|od|ad)/.test(a.platform),U.isIOS7=/iP(hone|od|ad)/.test(a.platform)&&/OS 7[^\d]/.test(a.appVersion),U.isIe9=/MSIE 9/.test(a.userAgent),U.isOperaMobile=a.appName==="Opera"&&U.supportsTouch&&/Presto/.test(a.userAgent),U.prefixedMatchesSelector="matches"in i.prototype?"matches":"webkitMatchesSelector"in i.prototype?"webkitMatchesSelector":"mozMatchesSelector"in i.prototype?"mozMatchesSelector":"oMatchesSelector"in i.prototype?"oMatchesSelector":"msMatchesSelector",U.pEventTypes=U.supportsPointerEvent?F.PointerEvent===r.MSPointerEvent?{up:"MSPointerUp",down:"MSPointerDown",over:"mouseover",out:"mouseout",move:"MSPointerMove",cancel:"MSPointerCancel"}:{up:"pointerup",down:"pointerdown",over:"pointerover",out:"pointerout",move:"pointermove",cancel:"pointercancel"}:null,U.wheelEvent=F.document&&"onmousewheel"in F.document?"mousewheel":"wheel"},supportsTouch:null,supportsPointerEvent:null,isIOS7:null,isIOS:null,isIe9:null,isOperaMobile:null,prefixedMatchesSelector:null,pEventTypes:null,wheelEvent:null},V=U;function ce(r,i){if(r.contains)return r.contains(i);for(;i;){if(i===r)return!0;i=i.parentNode}return!1}function je(r,i){for(;b.element(r);){if(ge(r,i))return r;r=Pe(r)}return null}function Pe(r){var i=r.parentNode;if(b.docFrag(i)){for(;(i=i.host)&&b.docFrag(i););return i}return i}function ge(r,i){return T!==w&&(i=i.replace(/\/deep\//g," ")),r[V.prefixedMatchesSelector](i)}var ke=function(r){return r.parentNode||r.host};function ye(r,i){for(var a,d=[],h=r;(a=ke(h))&&h!==i&&a!==h.ownerDocument;)d.unshift(h),h=a;return d}function Ze(r,i,a){for(;b.element(r);){if(ge(r,i))return!0;if((r=Pe(r))===a)return ge(r,i)}return!1}function $e(r){return r.correspondingUseElement||r}function Ie(r){var i=r instanceof F.SVGElement?r.getBoundingClientRect():r.getClientRects()[0];return i&&{left:i.left,right:i.right,top:i.top,bottom:i.bottom,width:i.width||i.right-i.left,height:i.height||i.bottom-i.top}}function Ke(r){var i,a=Ie(r);if(!V.isIOS7&&a){var d={x:(i=(i=C(r))||T).scrollX||i.document.documentElement.scrollLeft,y:i.scrollY||i.document.documentElement.scrollTop};a.left+=d.x,a.right+=d.x,a.top+=d.y,a.bottom+=d.y}return a}function ot(r){for(var i=[];r;)i.push(r),r=Pe(r);return i}function st(r){return!!b.string(r)&&(F.document.querySelector(r),!0)}function ne(r,i){for(var a in i)r[a]=i[a];return r}function dt(r,i,a){return r==="parent"?Pe(a):r==="self"?i.getRect(a):je(a,r)}function ct(r,i,a,d){var h=r;return b.string(h)?h=dt(h,i,a):b.func(h)&&(h=h.apply(void 0,d)),b.element(h)&&(h=Ke(h)),h}function Me(r){return r&&{x:"x"in r?r.x:r.left,y:"y"in r?r.y:r.top}}function ae(r){return!r||"x"in r&&"y"in r||((r=ne({},r)).x=r.left||0,r.y=r.top||0,r.width=r.width||(r.right||0)-r.x,r.height=r.height||(r.bottom||0)-r.y),r}function We(r,i,a){r.left&&(i.left+=a.x),r.right&&(i.right+=a.x),r.top&&(i.top+=a.y),r.bottom&&(i.bottom+=a.y),i.width=i.right-i.left,i.height=i.bottom-i.top}function Se(r,i,a){var d=a&&r.options[a];return Me(ct(d&&d.origin||r.options.origin,r,i,[r&&i]))||{x:0,y:0}}function Oe(r,i){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(E){return!0},d=arguments.length>3?arguments[3]:void 0;if(d=d||{},b.string(r)&&r.search(" ")!==-1&&(r=ht(r)),b.array(r))return r.forEach((function(E){return Oe(E,i,a,d)})),d;if(b.object(r)&&(i=r,r=""),b.func(i)&&a(r))d[r]=d[r]||[],d[r].push(i);else if(b.array(i))for(var h=0,g=i;h<g.length;h++){var _=g[h];Oe(r,_,a,d)}else if(b.object(i))for(var k in i)Oe(ht(k).map((function(E){return"".concat(r).concat(E)})),i[k],a,d);return d}function ht(r){return r.trim().split(/ +/)}var ft=function(r,i){return Math.sqrt(r*r+i*i)},Bt=["webkit","moz"];function lt(r,i){r.__set||(r.__set={});var a=function(h){if(Bt.some((function(g){return h.indexOf(g)===0})))return 1;typeof r[h]!="function"&&h!=="__set"&&Object.defineProperty(r,h,{get:function(){return h in r.__set?r.__set[h]:r.__set[h]=i[h]},set:function(g){r.__set[h]=g},configurable:!0})};for(var d in i)a(d);return r}function At(r,i){r.page=r.page||{},r.page.x=i.page.x,r.page.y=i.page.y,r.client=r.client||{},r.client.x=i.client.x,r.client.y=i.client.y,r.timeStamp=i.timeStamp}function xt(r){r.page.x=0,r.page.y=0,r.client.x=0,r.client.y=0}function Wt(r){return r instanceof F.Event||r instanceof F.Touch}function De(r,i,a){return r=r||"page",(a=a||{}).x=i[r+"X"],a.y=i[r+"Y"],a}function gt(r,i){return i=i||{x:0,y:0},V.isOperaMobile&&Wt(r)?(De("screen",r,i),i.x+=window.scrollX,i.y+=window.scrollY):De("page",r,i),i}function Tt(r){return b.number(r.pointerId)?r.pointerId:r.identifier}function ti(r,i,a){var d=i.length>1?mt(i):i[0];gt(d,r.page),(function(h,g){g=g||{},V.isOperaMobile&&Wt(h)?De("screen",h,g):De("client",h,g)})(d,r.client),r.timeStamp=a}function Ot(r){var i=[];return b.array(r)?(i[0]=r[0],i[1]=r[1]):r.type==="touchend"?r.touches.length===1?(i[0]=r.touches[0],i[1]=r.changedTouches[0]):r.touches.length===0&&(i[0]=r.changedTouches[0],i[1]=r.changedTouches[1]):(i[0]=r.touches[0],i[1]=r.touches[1]),i}function mt(r){for(var i={pageX:0,pageY:0,clientX:0,clientY:0,screenX:0,screenY:0},a=0;a<r.length;a++){var d=r[a];for(var h in i)i[h]+=d[h]}for(var g in i)i[g]/=r.length;return i}function It(r){if(!r.length)return null;var i=Ot(r),a=Math.min(i[0].pageX,i[1].pageX),d=Math.min(i[0].pageY,i[1].pageY),h=Math.max(i[0].pageX,i[1].pageX),g=Math.max(i[0].pageY,i[1].pageY);return{x:a,y:d,left:a,top:d,right:h,bottom:g,width:h-a,height:g-d}}function Mt(r,i){var a=i+"X",d=i+"Y",h=Ot(r),g=h[0][a]-h[1][a],_=h[0][d]-h[1][d];return ft(g,_)}function ve(r,i){var a=i+"X",d=i+"Y",h=Ot(r),g=h[1][a]-h[0][a],_=h[1][d]-h[0][d];return 180*Math.atan2(_,g)/Math.PI}function N(r){return b.string(r.pointerType)?r.pointerType:b.number(r.pointerType)?[void 0,void 0,"touch","pen","mouse"][r.pointerType]:/touch/.test(r.type||"")||r instanceof F.Touch?"touch":"mouse"}function W(r){var i=b.func(r.composedPath)?r.composedPath():r.path;return[$e(i?i[0]:r.target),$e(r.currentTarget)]}var he=(function(){function r(i){n(this,r),this.immediatePropagationStopped=!1,this.propagationStopped=!1,this._interaction=i}return c(r,[{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}]),r})();Object.defineProperty(he.prototype,"interaction",{get:function(){return this._interaction._proxy},set:function(){}});var xe=function(r,i){for(var a=0;a<i.length;a++){var d=i[a];r.push(d)}return r},de=function(r){return xe([],r)},Te=function(r,i){for(var a=0;a<r.length;a++)if(i(r[a],a,r))return a;return-1},j=function(r,i){return r[Te(r,i)]},ee=(function(r){l(a,r);var i=m(a);function a(d,h,g){var _;n(this,a),(_=i.call(this,h._interaction)).dropzone=void 0,_.dragEvent=void 0,_.relatedTarget=void 0,_.draggable=void 0,_.propagationStopped=!1,_.immediatePropagationStopped=!1;var k=g==="dragleave"?d.prev:d.cur,E=k.element,L=k.dropzone;return _.type=g,_.target=E,_.currentTarget=E,_.dropzone=L,_.dragEvent=h,_.relatedTarget=h.target,_.draggable=h.interactable,_.timeStamp=h.timeStamp,_}return c(a,[{key:"reject",value:function(){var d=this,h=this._interaction.dropState;if(this.type==="dropactivate"||this.dropzone&&h.cur.dropzone===this.dropzone&&h.cur.element===this.target)if(h.prev.dropzone=this.dropzone,h.prev.element=this.target,h.rejected=!0,h.events.enter=null,this.stopImmediatePropagation(),this.type==="dropactivate"){var g=h.activeDrops,_=Te(g,(function(E){var L=E.dropzone,A=E.element;return L===d.dropzone&&A===d.target}));h.activeDrops.splice(_,1);var k=new a(h,this.dragEvent,"dropdeactivate");k.dropzone=this.dropzone,k.target=this.target,this.dropzone.fire(k)}else this.dropzone.fire(new a(h,this.dragEvent,"dragleave"))}},{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}]),a})(he);function Le(r,i){for(var a=0,d=r.slice();a<d.length;a++){var h=d[a],g=h.dropzone,_=h.element;i.dropzone=g,i.target=_,g.fire(i),i.propagationStopped=i.immediatePropagationStopped=!1}}function $(r,i){for(var a=(function(g,_){for(var k=[],E=0,L=g.interactables.list;E<L.length;E++){var A=L[E];if(A.options.drop.enabled){var D=A.options.drop.accept;if(!(b.element(D)&&D!==_||b.string(D)&&!ge(_,D)||b.func(D)&&!D({dropzone:A,draggableElement:_})))for(var B=0,X=A.getAllElements();B<X.length;B++){var G=X[B];G!==_&&k.push({dropzone:A,element:G,rect:A.getRect(G)})}}}return k})(r,i),d=0;d<a.length;d++){var h=a[d];h.rect=h.dropzone.getRect(h.element)}return a}function Je(r,i,a){for(var d=r.dropState,h=r.interactable,g=r.element,_=[],k=0,E=d.activeDrops;k<E.length;k++){var L=E[k],A=L.dropzone,D=L.element,B=L.rect,X=A.dropCheck(i,a,h,g,D,B);_.push(X?D:null)}var G=(function(te){for(var pe,le,be,Re=[],Ye=0;Ye<te.length;Ye++){var Ae=te[Ye],Be=te[pe];if(Ae&&Ye!==pe)if(Be){var Ct=ke(Ae),at=ke(Be);if(Ct!==Ae.ownerDocument)if(at!==Ae.ownerDocument)if(Ct!==at){Re=Re.length?Re:ye(Be);var Rt=void 0;if(Be instanceof F.HTMLElement&&Ae instanceof F.SVGElement&&!(Ae instanceof F.SVGSVGElement)){if(Ae===at)continue;Rt=Ae.ownerSVGElement}else Rt=Ae;for(var Nt=ye(Rt,Be.ownerDocument),Yt=0;Nt[Yt]&&Nt[Yt]===Re[Yt];)Yt++;var Zi=[Nt[Yt-1],Nt[Yt],Re[Yt]];if(Zi[0])for(var Li=Zi[0].lastChild;Li;){if(Li===Zi[1]){pe=Ye,Re=Nt;break}if(Li===Zi[2])break;Li=Li.previousSibling}}else be=Be,(parseInt(C(le=Ae).getComputedStyle(le).zIndex,10)||0)>=(parseInt(C(be).getComputedStyle(be).zIndex,10)||0)&&(pe=Ye);else pe=Ye}else pe=Ye}return pe})(_);return d.activeDrops[G]||null}function Ue(r,i,a){var d=r.dropState,h={enter:null,leave:null,activate:null,deactivate:null,move:null,drop:null};return a.type==="dragstart"&&(h.activate=new ee(d,a,"dropactivate"),h.activate.target=null,h.activate.dropzone=null),a.type==="dragend"&&(h.deactivate=new ee(d,a,"dropdeactivate"),h.deactivate.target=null,h.deactivate.dropzone=null),d.rejected||(d.cur.element!==d.prev.element&&(d.prev.dropzone&&(h.leave=new ee(d,a,"dragleave"),a.dragLeave=h.leave.target=d.prev.element,a.prevDropzone=h.leave.dropzone=d.prev.dropzone),d.cur.dropzone&&(h.enter=new ee(d,a,"dragenter"),a.dragEnter=d.cur.element,a.dropzone=d.cur.dropzone)),a.type==="dragend"&&d.cur.dropzone&&(h.drop=new ee(d,a,"drop"),a.dropzone=d.cur.dropzone,a.relatedTarget=d.cur.element),a.type==="dragmove"&&d.cur.dropzone&&(h.move=new ee(d,a,"dropmove"),a.dropzone=d.cur.dropzone)),h}function it(r,i){var a=r.dropState,d=a.activeDrops,h=a.cur,g=a.prev;i.leave&&g.dropzone.fire(i.leave),i.enter&&h.dropzone.fire(i.enter),i.move&&h.dropzone.fire(i.move),i.drop&&h.dropzone.fire(i.drop),i.deactivate&&Le(d,i.deactivate),a.prev.dropzone=h.dropzone,a.prev.element=h.element}function qe(r,i){var a=r.interaction,d=r.iEvent,h=r.event;if(d.type==="dragmove"||d.type==="dragend"){var g=a.dropState;i.dynamicDrop&&(g.activeDrops=$(i,a.element));var _=d,k=Je(a,_,h);g.rejected=g.rejected&&!!k&&k.dropzone===g.cur.dropzone&&k.element===g.cur.element,g.cur.dropzone=k&&k.dropzone,g.cur.element=k&&k.element,g.events=Ue(a,0,_)}}var rt={id:"actions/drop",install:function(r){var i=r.actions,a=r.interactStatic,d=r.Interactable,h=r.defaults;r.usePlugin(K),d.prototype.dropzone=function(g){return(function(_,k){if(b.object(k)){if(_.options.drop.enabled=k.enabled!==!1,k.listeners){var E=Oe(k.listeners),L=Object.keys(E).reduce((function(D,B){return D[/^(enter|leave)/.test(B)?"drag".concat(B):/^(activate|deactivate|move)/.test(B)?"drop".concat(B):B]=E[B],D}),{}),A=_.options.drop.listeners;A&&_.off(A),_.on(L),_.options.drop.listeners=L}return b.func(k.ondrop)&&_.on("drop",k.ondrop),b.func(k.ondropactivate)&&_.on("dropactivate",k.ondropactivate),b.func(k.ondropdeactivate)&&_.on("dropdeactivate",k.ondropdeactivate),b.func(k.ondragenter)&&_.on("dragenter",k.ondragenter),b.func(k.ondragleave)&&_.on("dragleave",k.ondragleave),b.func(k.ondropmove)&&_.on("dropmove",k.ondropmove),/^(pointer|center)$/.test(k.overlap)?_.options.drop.overlap=k.overlap:b.number(k.overlap)&&(_.options.drop.overlap=Math.max(Math.min(1,k.overlap),0)),"accept"in k&&(_.options.drop.accept=k.accept),"checker"in k&&(_.options.drop.checker=k.checker),_}return b.bool(k)?(_.options.drop.enabled=k,_):_.options.drop})(this,g)},d.prototype.dropCheck=function(g,_,k,E,L,A){return(function(D,B,X,G,te,pe,le){var be=!1;if(!(le=le||D.getRect(pe)))return!!D.options.drop.checker&&D.options.drop.checker(B,X,be,D,pe,G,te);var Re=D.options.drop.overlap;if(Re==="pointer"){var Ye=Se(G,te,"drag"),Ae=gt(B);Ae.x+=Ye.x,Ae.y+=Ye.y;var Be=Ae.x>le.left&&Ae.x<le.right,Ct=Ae.y>le.top&&Ae.y<le.bottom;be=Be&&Ct}var at=G.getRect(te);if(at&&Re==="center"){var Rt=at.left+at.width/2,Nt=at.top+at.height/2;be=Rt>=le.left&&Rt<=le.right&&Nt>=le.top&&Nt<=le.bottom}return at&&b.number(Re)&&(be=Math.max(0,Math.min(le.right,at.right)-Math.max(le.left,at.left))*Math.max(0,Math.min(le.bottom,at.bottom)-Math.max(le.top,at.top))/(at.width*at.height)>=Re),D.options.drop.checker&&(be=D.options.drop.checker(B,X,be,D,pe,G,te)),be})(this,g,_,k,E,L,A)},a.dynamicDrop=function(g){return b.bool(g)?(r.dynamicDrop=g,a):r.dynamicDrop},ne(i.phaselessTypes,{dragenter:!0,dragleave:!0,dropactivate:!0,dropdeactivate:!0,dropmove:!0,drop:!0}),i.methodDict.drop="dropzone",r.dynamicDrop=!1,h.actions.drop=rt.defaults},listeners:{"interactions:before-action-start":function(r){var i=r.interaction;i.prepared.name==="drag"&&(i.dropState={cur:{dropzone:null,element:null},prev:{dropzone:null,element:null},rejected:null,events:null,activeDrops:[]})},"interactions:after-action-start":function(r,i){var a=r.interaction,d=(r.event,r.iEvent);if(a.prepared.name==="drag"){var h=a.dropState;h.activeDrops=[],h.events={},h.activeDrops=$(i,a.element),h.events=Ue(a,0,d),h.events.activate&&(Le(h.activeDrops,h.events.activate),i.fire("actions/drop:start",{interaction:a,dragEvent:d}))}},"interactions:action-move":qe,"interactions:after-action-move":function(r,i){var a=r.interaction,d=r.iEvent;if(a.prepared.name==="drag"){var h=a.dropState;it(a,h.events),i.fire("actions/drop:move",{interaction:a,dragEvent:d}),h.events={}}},"interactions:action-end":function(r,i){if(r.interaction.prepared.name==="drag"){var a=r.interaction,d=r.iEvent;qe(r,i),it(a,a.dropState.events),i.fire("actions/drop:end",{interaction:a,dragEvent:d})}},"interactions:stop":function(r){var i=r.interaction;if(i.prepared.name==="drag"){var a=i.dropState;a&&(a.activeDrops=null,a.events=null,a.cur.dropzone=null,a.cur.element=null,a.prev.dropzone=null,a.prev.element=null,a.rejected=!1)}}},getActiveDrops:$,getDrop:Je,getDropEvents:Ue,fireDropEvents:it,filterEventType:function(r){return r.search("drag")===0||r.search("drop")===0},defaults:{enabled:!1,accept:null,overlap:"pointer"}},et=rt;function tt(r){var i=r.interaction,a=r.iEvent,d=r.phase;if(i.prepared.name==="gesture"){var h=i.pointers.map((function(L){return L.pointer})),g=d==="start",_=d==="end",k=i.interactable.options.deltaSource;if(a.touches=[h[0],h[1]],g)a.distance=Mt(h,k),a.box=It(h),a.scale=1,a.ds=0,a.angle=ve(h,k),a.da=0,i.gesture.startDistance=a.distance,i.gesture.startAngle=a.angle;else if(_||i.pointers.length<2){var E=i.prevEvent;a.distance=E.distance,a.box=E.box,a.scale=E.scale,a.ds=0,a.angle=E.angle,a.da=0}else a.distance=Mt(h,k),a.box=It(h),a.scale=a.distance/i.gesture.startDistance,a.angle=ve(h,k),a.ds=a.scale-i.gesture.scale,a.da=a.angle-i.gesture.angle;i.gesture.distance=a.distance,i.gesture.angle=a.angle,b.number(a.scale)&&a.scale!==1/0&&!isNaN(a.scale)&&(i.gesture.scale=a.scale)}}var Ve={id:"actions/gesture",before:["actions/drag","actions/resize"],install:function(r){var i=r.actions,a=r.Interactable,d=r.defaults;a.prototype.gesturable=function(h){return b.object(h)?(this.options.gesture.enabled=h.enabled!==!1,this.setPerAction("gesture",h),this.setOnEvents("gesture",h),this):b.bool(h)?(this.options.gesture.enabled=h,this):this.options.gesture},i.map.gesture=Ve,i.methodDict.gesture="gesturable",d.actions.gesture=Ve.defaults},listeners:{"interactions:action-start":tt,"interactions:action-move":tt,"interactions:action-end":tt,"interactions:new":function(r){r.interaction.gesture={angle:0,distance:0,scale:1,startAngle:0,startDistance:0}},"auto-start:check":function(r){if(!(r.interaction.pointers.length<2)){var i=r.interactable.options.gesture;if(i&&i.enabled)return r.action={name:"gesture"},!1}}},defaults:{},getCursor:function(){return""},filterEventType:function(r){return r.search("gesture")===0}},Ge=Ve;function ze(r,i,a,d,h,g,_){if(!i)return!1;if(i===!0){var k=b.number(g.width)?g.width:g.right-g.left,E=b.number(g.height)?g.height:g.bottom-g.top;if(_=Math.min(_,Math.abs((r==="left"||r==="right"?k:E)/2)),k<0&&(r==="left"?r="right":r==="right"&&(r="left")),E<0&&(r==="top"?r="bottom":r==="bottom"&&(r="top")),r==="left"){var L=k>=0?g.left:g.right;return a.x<L+_}if(r==="top"){var A=E>=0?g.top:g.bottom;return a.y<A+_}if(r==="right")return a.x>(k>=0?g.right:g.left)-_;if(r==="bottom")return a.y>(E>=0?g.bottom:g.top)-_}return!!b.element(d)&&(b.element(i)?i===d:Ze(d,i,h))}function fe(r){var i=r.iEvent,a=r.interaction;if(a.prepared.name==="resize"&&a.resizeAxes){var d=i;a.interactable.options.resize.square?(a.resizeAxes==="y"?d.delta.x=d.delta.y:d.delta.y=d.delta.x,d.axes="xy"):(d.axes=a.resizeAxes,a.resizeAxes==="x"?d.delta.y=0:a.resizeAxes==="y"&&(d.delta.x=0))}}var Ce,Fe,Ee={id:"actions/resize",before:["actions/drag"],install:function(r){var i=r.actions,a=r.browser,d=r.Interactable,h=r.defaults;Ee.cursors=(function(g){return g.isIe9?{x:"e-resize",y:"s-resize",xy:"se-resize",top:"n-resize",left:"w-resize",bottom:"s-resize",right:"e-resize",topleft:"se-resize",bottomright:"se-resize",topright:"ne-resize",bottomleft:"ne-resize"}:{x:"ew-resize",y:"ns-resize",xy:"nwse-resize",top:"ns-resize",left:"ew-resize",bottom:"ns-resize",right:"ew-resize",topleft:"nwse-resize",bottomright:"nwse-resize",topright:"nesw-resize",bottomleft:"nesw-resize"}})(a),Ee.defaultMargin=a.supportsTouch||a.supportsPointerEvent?20:10,d.prototype.resizable=function(g){return(function(_,k,E){return b.object(k)?(_.options.resize.enabled=k.enabled!==!1,_.setPerAction("resize",k),_.setOnEvents("resize",k),b.string(k.axis)&&/^x$|^y$|^xy$/.test(k.axis)?_.options.resize.axis=k.axis:k.axis===null&&(_.options.resize.axis=E.defaults.actions.resize.axis),b.bool(k.preserveAspectRatio)?_.options.resize.preserveAspectRatio=k.preserveAspectRatio:b.bool(k.square)&&(_.options.resize.square=k.square),_):b.bool(k)?(_.options.resize.enabled=k,_):_.options.resize})(this,g,r)},i.map.resize=Ee,i.methodDict.resize="resizable",h.actions.resize=Ee.defaults},listeners:{"interactions:new":function(r){r.interaction.resizeAxes="xy"},"interactions:action-start":function(r){(function(i){var a=i.iEvent,d=i.interaction;if(d.prepared.name==="resize"&&d.prepared.edges){var h=a,g=d.rect;d._rects={start:ne({},g),corrected:ne({},g),previous:ne({},g),delta:{left:0,right:0,width:0,top:0,bottom:0,height:0}},h.edges=d.prepared.edges,h.rect=d._rects.corrected,h.deltaRect=d._rects.delta}})(r),fe(r)},"interactions:action-move":function(r){(function(i){var a=i.iEvent,d=i.interaction;if(d.prepared.name==="resize"&&d.prepared.edges){var h=a,g=d.interactable.options.resize.invert,_=g==="reposition"||g==="negate",k=d.rect,E=d._rects,L=E.start,A=E.corrected,D=E.delta,B=E.previous;if(ne(B,A),_){if(ne(A,k),g==="reposition"){if(A.top>A.bottom){var X=A.top;A.top=A.bottom,A.bottom=X}if(A.left>A.right){var G=A.left;A.left=A.right,A.right=G}}}else A.top=Math.min(k.top,L.bottom),A.bottom=Math.max(k.bottom,L.top),A.left=Math.min(k.left,L.right),A.right=Math.max(k.right,L.left);for(var te in A.width=A.right-A.left,A.height=A.bottom-A.top,A)D[te]=A[te]-B[te];h.edges=d.prepared.edges,h.rect=A,h.deltaRect=D}})(r),fe(r)},"interactions:action-end":function(r){var i=r.iEvent,a=r.interaction;if(a.prepared.name==="resize"&&a.prepared.edges){var d=i;d.edges=a.prepared.edges,d.rect=a._rects.corrected,d.deltaRect=a._rects.delta}},"auto-start:check":function(r){var i=r.interaction,a=r.interactable,d=r.element,h=r.rect,g=r.buttons;if(h){var _=ne({},i.coords.cur.page),k=a.options.resize;if(k&&k.enabled&&(!i.pointerIsDown||!/mouse|pointer/.test(i.pointerType)||(g&k.mouseButtons)!=0)){if(b.object(k.edges)){var E={left:!1,right:!1,top:!1,bottom:!1};for(var L in E)E[L]=ze(L,k.edges[L],_,i._latestPointer.eventTarget,d,h,k.margin||Ee.defaultMargin);E.left=E.left&&!E.right,E.top=E.top&&!E.bottom,(E.left||E.right||E.top||E.bottom)&&(r.action={name:"resize",edges:E})}else{var A=k.axis!=="y"&&_.x>h.right-Ee.defaultMargin,D=k.axis!=="x"&&_.y>h.bottom-Ee.defaultMargin;(A||D)&&(r.action={name:"resize",axes:(A?"x":"")+(D?"y":"")})}return!r.action&&void 0}}}},defaults:{square:!1,preserveAspectRatio:!1,axis:"xy",margin:NaN,edges:null,invert:"none"},cursors:null,getCursor:function(r){var i=r.edges,a=r.axis,d=r.name,h=Ee.cursors,g=null;if(a)g=h[d+a];else if(i){for(var _="",k=0,E=["top","bottom","left","right"];k<E.length;k++){var L=E[k];i[L]&&(_+=L)}g=h[_]}return g},filterEventType:function(r){return r.search("resize")===0},defaultMargin:null},se=Ee,re={id:"actions",install:function(r){r.usePlugin(Ge),r.usePlugin(se),r.usePlugin(K),r.usePlugin(et)}},Q=0,J={request:function(r){return Ce(r)},cancel:function(r){return Fe(r)},init:function(r){if(Ce=r.requestAnimationFrame,Fe=r.cancelAnimationFrame,!Ce)for(var i=["ms","moz","webkit","o"],a=0;a<i.length;a++){var d=i[a];Ce=r["".concat(d,"RequestAnimationFrame")],Fe=r["".concat(d,"CancelAnimationFrame")]||r["".concat(d,"CancelRequestAnimationFrame")]}Ce=Ce&&Ce.bind(r),Fe=Fe&&Fe.bind(r),Ce||(Ce=function(h){var g=Date.now(),_=Math.max(0,16-(g-Q)),k=r.setTimeout((function(){h(g+_)}),_);return Q=g+_,k},Fe=function(h){return clearTimeout(h)})}},z={defaults:{enabled:!1,margin:60,container:null,speed:300},now:Date.now,interaction:null,i:0,x:0,y:0,isScrolling:!1,prevTime:0,margin:0,speed:0,start:function(r){z.isScrolling=!0,J.cancel(z.i),r.autoScroll=z,z.interaction=r,z.prevTime=z.now(),z.i=J.request(z.scroll)},stop:function(){z.isScrolling=!1,z.interaction&&(z.interaction.autoScroll=null),J.cancel(z.i)},scroll:function(){var r=z.interaction,i=r.interactable,a=r.element,d=r.prepared.name,h=i.options[d].autoScroll,g=H(h.container,i,a),_=z.now(),k=(_-z.prevTime)/1e3,E=h.speed*k;if(E>=1){var L={x:z.x*E,y:z.y*E};if(L.x||L.y){var A=Z(g);b.window(g)?g.scrollBy(L.x,L.y):g&&(g.scrollLeft+=L.x,g.scrollTop+=L.y);var D=Z(g),B={x:D.x-A.x,y:D.y-A.y};(B.x||B.y)&&i.fire({type:"autoscroll",target:a,interactable:i,delta:B,interaction:r,container:g})}z.prevTime=_}z.isScrolling&&(J.cancel(z.i),z.i=J.request(z.scroll))},check:function(r,i){var a;return(a=r.options[i].autoScroll)==null?void 0:a.enabled},onInteractionMove:function(r){var i=r.interaction,a=r.pointer;if(i.interacting()&&z.check(i.interactable,i.prepared.name))if(i.simulation)z.x=z.y=0;else{var d,h,g,_,k=i.interactable,E=i.element,L=i.prepared.name,A=k.options[L].autoScroll,D=H(A.container,k,E);if(b.window(D))_=a.clientX<z.margin,d=a.clientY<z.margin,h=a.clientX>D.innerWidth-z.margin,g=a.clientY>D.innerHeight-z.margin;else{var B=Ie(D);_=a.clientX<B.left+z.margin,d=a.clientY<B.top+z.margin,h=a.clientX>B.right-z.margin,g=a.clientY>B.bottom-z.margin}z.x=h?1:_?-1:0,z.y=g?1:d?-1:0,z.isScrolling||(z.margin=A.margin,z.speed=A.speed,z.start(i))}}};function H(r,i,a){return(b.string(r)?dt(r,i,a):r)||C(a)}function Z(r){return b.window(r)&&(r=window.document.body),{x:r.scrollLeft,y:r.scrollTop}}var oe={id:"auto-scroll",install:function(r){var i=r.defaults,a=r.actions;r.autoScroll=z,z.now=function(){return r.now()},a.phaselessTypes.autoscroll=!0,i.perAction.autoScroll=z.defaults},listeners:{"interactions:new":function(r){r.interaction.autoScroll=null},"interactions:destroy":function(r){r.interaction.autoScroll=null,z.stop(),z.interaction&&(z.interaction=null)},"interactions:stop":z.stop,"interactions:action-move":function(r){return z.onInteractionMove(r)}}},we=oe;function ue(r,i){var a=!1;return function(){return a||(T.console.warn(i),a=!0),r.apply(this,arguments)}}function me(r,i){return r.name=i.name,r.axis=i.axis,r.edges=i.edges,r}function Ne(r){return b.bool(r)?(this.options.styleCursor=r,this):r===null?(delete this.options.styleCursor,this):this.options.styleCursor}function He(r){return b.func(r)?(this.options.actionChecker=r,this):r===null?(delete this.options.actionChecker,this):this.options.actionChecker}var Xe={id:"auto-start/interactableMethods",install:function(r){var i=r.Interactable;i.prototype.getAction=function(a,d,h,g){var _=(function(k,E,L,A,D){var B=k.getRect(A),X=E.buttons||{0:1,1:4,3:8,4:16}[E.button],G={action:null,interactable:k,interaction:L,element:A,rect:B,buttons:X};return D.fire("auto-start:check",G),G.action})(this,d,h,g,r);return this.options.actionChecker?this.options.actionChecker(a,d,_,this,g,h):_},i.prototype.ignoreFrom=ue((function(a){return this._backCompatOption("ignoreFrom",a)}),"Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."),i.prototype.allowFrom=ue((function(a){return this._backCompatOption("allowFrom",a)}),"Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."),i.prototype.actionChecker=He,i.prototype.styleCursor=Ne}};function Qe(r,i,a,d,h){return i.testIgnoreAllow(i.options[r.name],a,d)&&i.options[r.name].enabled&&wt(i,a,r,h)?r:null}function Lt(r,i,a,d,h,g,_){for(var k=0,E=d.length;k<E;k++){var L=d[k],A=h[k],D=L.getAction(i,a,r,A);if(D){var B=Qe(D,L,A,g,_);if(B)return{action:B,interactable:L,element:A}}}return{action:null,interactable:null,element:null}}function Dt(r,i,a,d,h){var g=[],_=[],k=d;function E(A){g.push(A),_.push(k)}for(;b.element(k);){g=[],_=[],h.interactables.forEachMatch(k,E);var L=Lt(r,i,a,g,_,d,h);if(L.action&&!L.interactable.options[L.action.name].manualStart)return L;k=Pe(k)}return{action:null,interactable:null,element:null}}function Pt(r,i,a){var d=i.action,h=i.interactable,g=i.element;d=d||{name:null},r.interactable=h,r.element=g,me(r.prepared,d),r.rect=h&&d.name?h.getRect(g):null,bt(r,a),a.fire("autoStart:prepared",{interaction:r})}function wt(r,i,a,d){var h=r.options,g=h[a.name].max,_=h[a.name].maxPerElement,k=d.autoStart.maxInteractions,E=0,L=0,A=0;if(!(g&&_&&k))return!1;for(var D=0,B=d.interactions.list;D<B.length;D++){var X=B[D],G=X.prepared.name;if(X.interacting()&&(++E>=k||X.interactable===r&&((L+=G===a.name?1:0)>=g||X.element===i&&(A++,G===a.name&&A>=_))))return!1}return k>0}function qt(r,i){return b.number(r)?(i.autoStart.maxInteractions=r,this):i.autoStart.maxInteractions}function Ft(r,i,a){var d=a.autoStart.cursorElement;d&&d!==r&&(d.style.cursor=""),r.ownerDocument.documentElement.style.cursor=i,r.style.cursor=i,a.autoStart.cursorElement=i?r:null}function bt(r,i){var a=r.interactable,d=r.element,h=r.prepared;if(r.pointerType==="mouse"&&a&&a.options.styleCursor){var g="";if(h.name){var _=a.options[h.name].cursorChecker;g=b.func(_)?_(h,a,d,r._interacting):i.actions.map[h.name].getCursor(h)}Ft(r.element,g||"",i)}else i.autoStart.cursorElement&&Ft(i.autoStart.cursorElement,"",i)}var Kt={id:"auto-start/base",before:["actions"],install:function(r){var i=r.interactStatic,a=r.defaults;r.usePlugin(Xe),a.base.actionChecker=null,a.base.styleCursor=!0,ne(a.perAction,{manualStart:!1,max:1/0,maxPerElement:1,allowFrom:null,ignoreFrom:null,mouseButtons:1}),i.maxInteractions=function(d){return qt(d,r)},r.autoStart={maxInteractions:1/0,withinInteractionLimit:wt,cursorElement:null}},listeners:{"interactions:down":function(r,i){var a=r.interaction,d=r.pointer,h=r.event,g=r.eventTarget;a.interacting()||Pt(a,Dt(a,d,h,g,i),i)},"interactions:move":function(r,i){(function(a,d){var h=a.interaction,g=a.pointer,_=a.event,k=a.eventTarget;h.pointerType!=="mouse"||h.pointerIsDown||h.interacting()||Pt(h,Dt(h,g,_,k,d),d)})(r,i),(function(a,d){var h=a.interaction;if(h.pointerIsDown&&!h.interacting()&&h.pointerWasMoved&&h.prepared.name){d.fire("autoStart:before-start",a);var g=h.interactable,_=h.prepared.name;_&&g&&(g.options[_].manualStart||!wt(g,h.element,h.prepared,d)?h.stop():(h.start(h.prepared,g,h.element),bt(h,d)))}})(r,i)},"interactions:stop":function(r,i){var a=r.interaction,d=a.interactable;d&&d.options.styleCursor&&Ft(a.element,"",i)}},maxInteractions:qt,withinInteractionLimit:wt,validateAction:Qe},ii=Kt,or={id:"auto-start/dragAxis",listeners:{"autoStart:before-start":function(r,i){var a=r.interaction,d=r.eventTarget,h=r.dx,g=r.dy;if(a.prepared.name==="drag"){var _=Math.abs(h),k=Math.abs(g),E=a.interactable.options.drag,L=E.startAxis,A=_>k?"x":_<k?"y":"xy";if(a.prepared.axis=E.lockAxis==="start"?A[0]:E.lockAxis,A!=="xy"&&L!=="xy"&&L!==A){a.prepared.name=null;for(var D=d,B=function(G){if(G!==a.interactable){var te=a.interactable.options.drag;if(!te.manualStart&&G.testIgnoreAllow(te,D,d)){var pe=G.getAction(a.downPointer,a.downEvent,a,D);if(pe&&pe.name==="drag"&&(function(le,be){if(!be)return!1;var Re=be.options.drag.startAxis;return le==="xy"||Re==="xy"||Re===le})(A,G)&&ii.validateAction(pe,G,D,d,i))return G}}};b.element(D);){var X=i.interactables.forEachMatch(D,B);if(X){a.prepared.name="drag",a.interactable=X,a.element=D;break}D=Pe(D)}}}}}};function ci(r){var i=r.prepared&&r.prepared.name;if(!i)return null;var a=r.interactable.options;return a[i].hold||a[i].delay}var Bi={id:"auto-start/hold",install:function(r){var i=r.defaults;r.usePlugin(ii),i.perAction.hold=0,i.perAction.delay=0},listeners:{"interactions:new":function(r){r.interaction.autoStartHoldTimer=null},"autoStart:prepared":function(r){var i=r.interaction,a=ci(i);a>0&&(i.autoStartHoldTimer=setTimeout((function(){i.start(i.prepared,i.interactable,i.element)}),a))},"interactions:move":function(r){var i=r.interaction,a=r.duplicate;i.autoStartHoldTimer&&i.pointerWasMoved&&!a&&(clearTimeout(i.autoStartHoldTimer),i.autoStartHoldTimer=null)},"autoStart:before-start":function(r){var i=r.interaction;ci(i)>0&&(i.prepared.name=null)}},getHoldDuration:ci},Ni=Bi,qi={id:"auto-start",install:function(r){r.usePlugin(ii),r.usePlugin(Ni),r.usePlugin(or)}},vi=function(r){return/^(always|never|auto)$/.test(r)?(this.options.preventDefault=r,this):b.bool(r)?(this.options.preventDefault=r?"always":"never",this):this.options.preventDefault};function sr(r){var i=r.interaction,a=r.event;i.interactable&&i.interactable.checkAndPreventDefault(a)}var li={id:"core/interactablePreventDefault",install:function(r){var i=r.Interactable;i.prototype.preventDefault=vi,i.prototype.checkAndPreventDefault=function(a){return(function(d,h,g){var _=d.options.preventDefault;if(_!=="never")if(_!=="always"){if(h.events.supportsPassive&&/^touch(start|move)$/.test(g.type)){var k=C(g.target).document,E=h.getDocOptions(k);if(!E||!E.events||E.events.passive!==!1)return}/^(mouse|pointer|touch)*(down|start)/i.test(g.type)||b.element(g.target)&&ge(g.target,"input,select,textarea,[contenteditable=true],[contenteditable=true] *")||g.preventDefault()}else g.preventDefault()})(this,r,a)},r.interactions.docEvents.push({type:"dragstart",listener:function(a){for(var d=0,h=r.interactions.list;d<h.length;d++){var g=h[d];if(g.element&&(g.element===a.target||ce(g.element,a.target)))return void g.interactable.checkAndPreventDefault(a)}}})},listeners:["down","move","up","cancel"].reduce((function(r,i){return r["interactions:".concat(i)]=sr,r}),{})};function Ut(r,i){if(i.phaselessTypes[r])return!0;for(var a in i.map)if(r.indexOf(a)===0&&r.substr(a.length)in i.phases)return!0;return!1}function Vt(r){var i={};for(var a in r){var d=r[a];b.plainObject(d)?i[a]=Vt(d):b.array(d)?i[a]=de(d):i[a]=d}return i}var bi=(function(){function r(i){n(this,r),this.states=[],this.startOffset={left:0,right:0,top:0,bottom:0},this.startDelta=void 0,this.result=void 0,this.endResult=void 0,this.startEdges=void 0,this.edges=void 0,this.interaction=void 0,this.interaction=i,this.result=ri(),this.edges={left:!1,right:!1,top:!1,bottom:!1}}return c(r,[{key:"start",value:function(i,a){var d,h,g=i.phase,_=this.interaction,k=(function(L){var A=L.interactable.options[L.prepared.name],D=A.modifiers;return D&&D.length?D:["snap","snapSize","snapEdges","restrict","restrictEdges","restrictSize"].map((function(B){var X=A[B];return X&&X.enabled&&{options:X,methods:X._methods}})).filter((function(B){return!!B}))})(_);this.prepareStates(k),this.startEdges=ne({},_.edges),this.edges=ne({},this.startEdges),this.startOffset=(d=_.rect,h=a,d?{left:h.x-d.left,top:h.y-d.top,right:d.right-h.x,bottom:d.bottom-h.y}:{left:0,top:0,right:0,bottom:0}),this.startDelta={x:0,y:0};var E=this.fillArg({phase:g,pageCoords:a,preEnd:!1});return this.result=ri(),this.startAll(E),this.result=this.setAll(E)}},{key:"fillArg",value:function(i){var a=this.interaction;return i.interaction=a,i.interactable=a.interactable,i.element=a.element,i.rect||(i.rect=a.rect),i.edges||(i.edges=this.startEdges),i.startOffset=this.startOffset,i}},{key:"startAll",value:function(i){for(var a=0,d=this.states;a<d.length;a++){var h=d[a];h.methods.start&&(i.state=h,h.methods.start(i))}}},{key:"setAll",value:function(i){var a=i.phase,d=i.preEnd,h=i.skipModifiers,g=i.rect,_=i.edges;i.coords=ne({},i.pageCoords),i.rect=ne({},g),i.edges=ne({},_);for(var k=h?this.states.slice(h):this.states,E=ri(i.coords,i.rect),L=0;L<k.length;L++){var A,D=k[L],B=D.options,X=ne({},i.coords),G=null;(A=D.methods)!=null&&A.set&&this.shouldDo(B,d,a)&&(i.state=D,G=D.methods.set(i),We(i.edges,i.rect,{x:i.coords.x-X.x,y:i.coords.y-X.y})),E.eventProps.push(G)}ne(this.edges,i.edges),E.delta.x=i.coords.x-i.pageCoords.x,E.delta.y=i.coords.y-i.pageCoords.y,E.rectDelta.left=i.rect.left-g.left,E.rectDelta.right=i.rect.right-g.right,E.rectDelta.top=i.rect.top-g.top,E.rectDelta.bottom=i.rect.bottom-g.bottom;var te=this.result.coords,pe=this.result.rect;if(te&&pe){var le=E.rect.left!==pe.left||E.rect.right!==pe.right||E.rect.top!==pe.top||E.rect.bottom!==pe.bottom;E.changed=le||te.x!==E.coords.x||te.y!==E.coords.y}return E}},{key:"applyToInteraction",value:function(i){var a=this.interaction,d=i.phase,h=a.coords.cur,g=a.coords.start,_=this.result,k=this.startDelta,E=_.delta;d==="start"&&ne(this.startDelta,_.delta);for(var L=0,A=[[g,k],[h,E]];L<A.length;L++){var D=A[L],B=D[0],X=D[1];B.page.x+=X.x,B.page.y+=X.y,B.client.x+=X.x,B.client.y+=X.y}var G=this.result.rectDelta,te=i.rect||a.rect;te.left+=G.left,te.right+=G.right,te.top+=G.top,te.bottom+=G.bottom,te.width=te.right-te.left,te.height=te.bottom-te.top}},{key:"setAndApply",value:function(i){var a=this.interaction,d=i.phase,h=i.preEnd,g=i.skipModifiers,_=this.setAll(this.fillArg({preEnd:h,phase:d,pageCoords:i.modifiedCoords||a.coords.cur.page}));if(this.result=_,!_.changed&&(!g||g<this.states.length)&&a.interacting())return!1;if(i.modifiedCoords){var k=a.coords.cur.page,E={x:i.modifiedCoords.x-k.x,y:i.modifiedCoords.y-k.y};_.coords.x+=E.x,_.coords.y+=E.y,_.delta.x+=E.x,_.delta.y+=E.y}this.applyToInteraction(i)}},{key:"beforeEnd",value:function(i){var a=i.interaction,d=i.event,h=this.states;if(h&&h.length){for(var g=!1,_=0;_<h.length;_++){var k=h[_];i.state=k;var E=k.options,L=k.methods,A=L.beforeEnd&&L.beforeEnd(i);if(A)return this.endResult=A,!1;g=g||!g&&this.shouldDo(E,!0,i.phase,!0)}g&&a.move({event:d,preEnd:!0})}}},{key:"stop",value:function(i){var a=i.interaction;if(this.states&&this.states.length){var d=ne({states:this.states,interactable:a.interactable,element:a.element,rect:null},i);this.fillArg(d);for(var h=0,g=this.states;h<g.length;h++){var _=g[h];d.state=_,_.methods.stop&&_.methods.stop(d)}this.states=null,this.endResult=null}}},{key:"prepareStates",value:function(i){this.states=[];for(var a=0;a<i.length;a++){var d=i[a],h=d.options,g=d.methods,_=d.name;this.states.push({options:h,methods:g,index:a,name:_})}return this.states}},{key:"restoreInteractionCoords",value:function(i){var a=i.interaction,d=a.coords,h=a.rect,g=a.modification;if(g.result){for(var _=g.startDelta,k=g.result,E=k.delta,L=k.rectDelta,A=0,D=[[d.start,_],[d.cur,E]];A<D.length;A++){var B=D[A],X=B[0],G=B[1];X.page.x-=G.x,X.page.y-=G.y,X.client.x-=G.x,X.client.y-=G.y}h.left-=L.left,h.right-=L.right,h.top-=L.top,h.bottom-=L.bottom}}},{key:"shouldDo",value:function(i,a,d,h){return!(!i||i.enabled===!1||h&&!i.endOnly||i.endOnly&&!a||d==="start"&&!i.setStart)}},{key:"copyFrom",value:function(i){this.startOffset=i.startOffset,this.startDelta=i.startDelta,this.startEdges=i.startEdges,this.edges=i.edges,this.states=i.states.map((function(a){return Vt(a)})),this.result=ri(ne({},i.result.coords),ne({},i.result.rect))}},{key:"destroy",value:function(){for(var i in this)this[i]=null}}]),r})();function ri(r,i){return{rect:i,coords:r,delta:{x:0,y:0},rectDelta:{left:0,right:0,top:0,bottom:0},eventProps:[],changed:!0}}function Ht(r,i){var a=r.defaults,d={start:r.start,set:r.set,beforeEnd:r.beforeEnd,stop:r.stop},h=function(g){var _=g||{};for(var k in _.enabled=_.enabled!==!1,a)k in _||(_[k]=a[k]);var E={options:_,methods:d,name:i,enable:function(){return _.enabled=!0,E},disable:function(){return _.enabled=!1,E}};return E};return i&&typeof i=="string"&&(h._defaults=a,h._methods=d),h}function Gt(r){var i=r.iEvent,a=r.interaction.modification.result;a&&(i.modifiers=a.eventProps)}var Hi={id:"modifiers/base",before:["actions"],install:function(r){r.defaults.perAction.modifiers=[]},listeners:{"interactions:new":function(r){var i=r.interaction;i.modification=new bi(i)},"interactions:before-action-start":function(r){var i=r.interaction,a=r.interaction.modification;a.start(r,i.coords.start.page),i.edges=a.edges,a.applyToInteraction(r)},"interactions:before-action-move":function(r){var i=r.interaction,a=i.modification,d=a.setAndApply(r);return i.edges=a.edges,d},"interactions:before-action-end":function(r){var i=r.interaction,a=i.modification,d=a.beforeEnd(r);return i.edges=a.startEdges,d},"interactions:action-start":Gt,"interactions:action-move":Gt,"interactions:action-end":Gt,"interactions:after-action-start":function(r){return r.interaction.modification.restoreInteractionCoords(r)},"interactions:after-action-move":function(r){return r.interaction.modification.restoreInteractionCoords(r)},"interactions:stop":function(r){return r.interaction.modification.stop(r)}}},_i=Hi,xi={base:{preventDefault:"auto",deltaSource:"page"},perAction:{enabled:!1,origin:{x:0,y:0}},actions:{}},di=(function(r){l(a,r);var i=m(a);function a(d,h,g,_,k,E,L){var A;n(this,a),(A=i.call(this,d)).relatedTarget=null,A.screenX=void 0,A.screenY=void 0,A.button=void 0,A.buttons=void 0,A.ctrlKey=void 0,A.shiftKey=void 0,A.altKey=void 0,A.metaKey=void 0,A.page=void 0,A.client=void 0,A.delta=void 0,A.rect=void 0,A.x0=void 0,A.y0=void 0,A.t0=void 0,A.dt=void 0,A.duration=void 0,A.clientX0=void 0,A.clientY0=void 0,A.velocity=void 0,A.speed=void 0,A.swipe=void 0,A.axes=void 0,A.preEnd=void 0,k=k||d.element;var D=d.interactable,B=(D&&D.options||xi).deltaSource,X=Se(D,k,g),G=_==="start",te=_==="end",pe=G?v(A):d.prevEvent,le=G?d.coords.start:te?{page:pe.page,client:pe.client,timeStamp:d.coords.cur.timeStamp}:d.coords.cur;return A.page=ne({},le.page),A.client=ne({},le.client),A.rect=ne({},d.rect),A.timeStamp=le.timeStamp,te||(A.page.x-=X.x,A.page.y-=X.y,A.client.x-=X.x,A.client.y-=X.y),A.ctrlKey=h.ctrlKey,A.altKey=h.altKey,A.shiftKey=h.shiftKey,A.metaKey=h.metaKey,A.button=h.button,A.buttons=h.buttons,A.target=k,A.currentTarget=k,A.preEnd=E,A.type=L||g+(_||""),A.interactable=D,A.t0=G?d.pointers[d.pointers.length-1].downTime:pe.t0,A.x0=d.coords.start.page.x-X.x,A.y0=d.coords.start.page.y-X.y,A.clientX0=d.coords.start.client.x-X.x,A.clientY0=d.coords.start.client.y-X.y,A.delta=G||te?{x:0,y:0}:{x:A[B].x-pe[B].x,y:A[B].y-pe[B].y},A.dt=d.coords.delta.timeStamp,A.duration=A.timeStamp-A.t0,A.velocity=ne({},d.coords.velocity[B]),A.speed=ft(A.velocity.x,A.velocity.y),A.swipe=te||_==="inertiastart"?A.getSwipe():null,A}return c(a,[{key:"getSwipe",value:function(){var d=this._interaction;if(d.prevEvent.speed<600||this.timeStamp-d.prevEvent.timeStamp>150)return null;var h=180*Math.atan2(d.prevEvent.velocityY,d.prevEvent.velocityX)/Math.PI;h<0&&(h+=360);var g=112.5<=h&&h<247.5,_=202.5<=h&&h<337.5;return{up:_,down:!_&&22.5<=h&&h<157.5,left:g,right:!g&&(292.5<=h||h<67.5),angle:h,speed:d.prevEvent.speed,velocity:{x:d.prevEvent.velocityX,y:d.prevEvent.velocityY}}}},{key:"preventDefault",value:function(){}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}}]),a})(he);Object.defineProperties(di.prototype,{pageX:{get:function(){return this.page.x},set:function(r){this.page.x=r}},pageY:{get:function(){return this.page.y},set:function(r){this.page.y=r}},clientX:{get:function(){return this.client.x},set:function(r){this.client.x=r}},clientY:{get:function(){return this.client.y},set:function(r){this.client.y=r}},dx:{get:function(){return this.delta.x},set:function(r){this.delta.x=r}},dy:{get:function(){return this.delta.y},set:function(r){this.delta.y=r}},velocityX:{get:function(){return this.velocity.x},set:function(r){this.velocity.x=r}},velocityY:{get:function(){return this.velocity.y},set:function(r){this.velocity.y=r}}});var ji=c((function r(i,a,d,h,g){n(this,r),this.id=void 0,this.pointer=void 0,this.event=void 0,this.downTime=void 0,this.downTarget=void 0,this.id=i,this.pointer=a,this.event=d,this.downTime=h,this.downTarget=g})),Wi=(function(r){return r.interactable="",r.element="",r.prepared="",r.pointerIsDown="",r.pointerWasMoved="",r._proxy="",r})({}),wi=(function(r){return r.start="",r.move="",r.end="",r.stop="",r.interacting="",r})({}),Yi=0,$i=(function(){function r(i){var a=this,d=i.pointerType,h=i.scopeFire;n(this,r),this.interactable=null,this.element=null,this.rect=null,this._rects=void 0,this.edges=null,this._scopeFire=void 0,this.prepared={name:null,axis:null,edges:null},this.pointerType=void 0,this.pointers=[],this.downEvent=null,this.downPointer={},this._latestPointer={pointer:null,event:null,eventTarget:null},this.prevEvent=null,this.pointerIsDown=!1,this.pointerWasMoved=!1,this._interacting=!1,this._ending=!1,this._stopped=!0,this._proxy=void 0,this.simulation=null,this.doMove=ue((function(A){this.move(A)}),"The interaction.doMove() method has been renamed to interaction.move()"),this.coords={start:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},prev:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},cur:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},delta:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},velocity:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0}},this._id=Yi++,this._scopeFire=h,this.pointerType=d;var g=this;this._proxy={};var _=function(A){Object.defineProperty(a._proxy,A,{get:function(){return g[A]}})};for(var k in Wi)_(k);var E=function(A){Object.defineProperty(a._proxy,A,{value:function(){return g[A].apply(g,arguments)}})};for(var L in wi)E(L);this._scopeFire("interactions:new",{interaction:this})}return c(r,[{key:"pointerMoveTolerance",get:function(){return 1}},{key:"pointerDown",value:function(i,a,d){var h=this.updatePointer(i,a,d,!0),g=this.pointers[h];this._scopeFire("interactions:down",{pointer:i,event:a,eventTarget:d,pointerIndex:h,pointerInfo:g,type:"down",interaction:this})}},{key:"start",value:function(i,a,d){return!(this.interacting()||!this.pointerIsDown||this.pointers.length<(i.name==="gesture"?2:1)||!a.options[i.name].enabled)&&(me(this.prepared,i),this.interactable=a,this.element=d,this.rect=a.getRect(d),this.edges=this.prepared.edges?ne({},this.prepared.edges):{left:!0,right:!0,top:!0,bottom:!0},this._stopped=!1,this._interacting=this._doPhase({interaction:this,event:this.downEvent,phase:"start"})&&!this._stopped,this._interacting)}},{key:"pointerMove",value:function(i,a,d){this.simulation||this.modification&&this.modification.endResult||this.updatePointer(i,a,d,!1);var h,g,_=this.coords.cur.page.x===this.coords.prev.page.x&&this.coords.cur.page.y===this.coords.prev.page.y&&this.coords.cur.client.x===this.coords.prev.client.x&&this.coords.cur.client.y===this.coords.prev.client.y;this.pointerIsDown&&!this.pointerWasMoved&&(h=this.coords.cur.client.x-this.coords.start.client.x,g=this.coords.cur.client.y-this.coords.start.client.y,this.pointerWasMoved=ft(h,g)>this.pointerMoveTolerance);var k,E,L,A=this.getPointerIndex(i),D={pointer:i,pointerIndex:A,pointerInfo:this.pointers[A],event:a,type:"move",eventTarget:d,dx:h,dy:g,duplicate:_,interaction:this};_||(k=this.coords.velocity,E=this.coords.delta,L=Math.max(E.timeStamp/1e3,.001),k.page.x=E.page.x/L,k.page.y=E.page.y/L,k.client.x=E.client.x/L,k.client.y=E.client.y/L,k.timeStamp=L),this._scopeFire("interactions:move",D),_||this.simulation||(this.interacting()&&(D.type=null,this.move(D)),this.pointerWasMoved&&At(this.coords.prev,this.coords.cur))}},{key:"move",value:function(i){i&&i.event||xt(this.coords.delta),(i=ne({pointer:this._latestPointer.pointer,event:this._latestPointer.event,eventTarget:this._latestPointer.eventTarget,interaction:this},i||{})).phase="move",this._doPhase(i)}},{key:"pointerUp",value:function(i,a,d,h){var g=this.getPointerIndex(i);g===-1&&(g=this.updatePointer(i,a,d,!1));var _=/cancel$/i.test(a.type)?"cancel":"up";this._scopeFire("interactions:".concat(_),{pointer:i,pointerIndex:g,pointerInfo:this.pointers[g],event:a,eventTarget:d,type:_,curEventTarget:h,interaction:this}),this.simulation||this.end(a),this.removePointer(i,a)}},{key:"documentBlur",value:function(i){this.end(i),this._scopeFire("interactions:blur",{event:i,type:"blur",interaction:this})}},{key:"end",value:function(i){var a;this._ending=!0,i=i||this._latestPointer.event,this.interacting()&&(a=this._doPhase({event:i,interaction:this,phase:"end"})),this._ending=!1,a===!0&&this.stop()}},{key:"currentAction",value:function(){return this._interacting?this.prepared.name:null}},{key:"interacting",value:function(){return this._interacting}},{key:"stop",value:function(){this._scopeFire("interactions:stop",{interaction:this}),this.interactable=this.element=null,this._interacting=!1,this._stopped=!0,this.prepared.name=this.prevEvent=null}},{key:"getPointerIndex",value:function(i){var a=Tt(i);return this.pointerType==="mouse"||this.pointerType==="pen"?this.pointers.length-1:Te(this.pointers,(function(d){return d.id===a}))}},{key:"getPointerInfo",value:function(i){return this.pointers[this.getPointerIndex(i)]}},{key:"updatePointer",value:function(i,a,d,h){var g,_,k,E=Tt(i),L=this.getPointerIndex(i),A=this.pointers[L];return h=h!==!1&&(h||/(down|start)$/i.test(a.type)),A?A.pointer=i:(A=new ji(E,i,a,null,null),L=this.pointers.length,this.pointers.push(A)),ti(this.coords.cur,this.pointers.map((function(D){return D.pointer})),this._now()),g=this.coords.delta,_=this.coords.prev,k=this.coords.cur,g.page.x=k.page.x-_.page.x,g.page.y=k.page.y-_.page.y,g.client.x=k.client.x-_.client.x,g.client.y=k.client.y-_.client.y,g.timeStamp=k.timeStamp-_.timeStamp,h&&(this.pointerIsDown=!0,A.downTime=this.coords.cur.timeStamp,A.downTarget=d,lt(this.downPointer,i),this.interacting()||(At(this.coords.start,this.coords.cur),At(this.coords.prev,this.coords.cur),this.downEvent=a,this.pointerWasMoved=!1)),this._updateLatestPointer(i,a,d),this._scopeFire("interactions:update-pointer",{pointer:i,event:a,eventTarget:d,down:h,pointerInfo:A,pointerIndex:L,interaction:this}),L}},{key:"removePointer",value:function(i,a){var d=this.getPointerIndex(i);if(d!==-1){var h=this.pointers[d];this._scopeFire("interactions:remove-pointer",{pointer:i,event:a,eventTarget:null,pointerIndex:d,pointerInfo:h,interaction:this}),this.pointers.splice(d,1),this.pointerIsDown=!1}}},{key:"_updateLatestPointer",value:function(i,a,d){this._latestPointer.pointer=i,this._latestPointer.event=a,this._latestPointer.eventTarget=d}},{key:"destroy",value:function(){this._latestPointer.pointer=null,this._latestPointer.event=null,this._latestPointer.eventTarget=null}},{key:"_createPreparedEvent",value:function(i,a,d,h){return new di(this,i,this.prepared.name,a,this.element,d,h)}},{key:"_fireEvent",value:function(i){var a;(a=this.interactable)==null||a.fire(i),(!this.prevEvent||i.timeStamp>=this.prevEvent.timeStamp)&&(this.prevEvent=i)}},{key:"_doPhase",value:function(i){var a=i.event,d=i.phase,h=i.preEnd,g=i.type,_=this.rect;if(_&&d==="move"&&(We(this.edges,_,this.coords.delta[this.interactable.options.deltaSource]),_.width=_.right-_.left,_.height=_.bottom-_.top),this._scopeFire("interactions:before-action-".concat(d),i)===!1)return!1;var k=i.iEvent=this._createPreparedEvent(a,d,h,g);return this._scopeFire("interactions:action-".concat(d),i),d==="start"&&(this.prevEvent=k),this._fireEvent(k),this._scopeFire("interactions:after-action-".concat(d),i),!0}},{key:"_now",value:function(){return Date.now()}}]),r})();function Si(r){ki(r.interaction)}function ki(r){if(!(function(a){return!(!a.offset.pending.x&&!a.offset.pending.y)})(r))return!1;var i=r.offset.pending;return ui(r.coords.cur,i),ui(r.coords.delta,i),We(r.edges,r.rect,i),i.x=0,i.y=0,!0}function Ki(r){var i=r.x,a=r.y;this.offset.pending.x+=i,this.offset.pending.y+=a,this.offset.total.x+=i,this.offset.total.y+=a}function ui(r,i){var a=r.page,d=r.client,h=i.x,g=i.y;a.x+=h,a.y+=g,d.x+=h,d.y+=g}wi.offsetBy="";var Ui={id:"offset",before:["modifiers","pointer-events","actions","inertia"],install:function(r){r.Interaction.prototype.offsetBy=Ki},listeners:{"interactions:new":function(r){r.interaction.offset={total:{x:0,y:0},pending:{x:0,y:0}}},"interactions:update-pointer":function(r){return(function(i){i.pointerIsDown&&(ui(i.coords.cur,i.offset.total),i.offset.pending.x=0,i.offset.pending.y=0)})(r.interaction)},"interactions:before-action-start":Si,"interactions:before-action-move":Si,"interactions:before-action-end":function(r){var i=r.interaction;if(ki(i))return i.move({offset:!0}),i.end(),!1},"interactions:stop":function(r){var i=r.interaction;i.offset.total.x=0,i.offset.total.y=0,i.offset.pending.x=0,i.offset.pending.y=0}}},pi=Ui,cr=(function(){function r(i){n(this,r),this.active=!1,this.isModified=!1,this.smoothEnd=!1,this.allowResume=!1,this.modification=void 0,this.modifierCount=0,this.modifierArg=void 0,this.startCoords=void 0,this.t0=0,this.v0=0,this.te=0,this.targetOffset=void 0,this.modifiedOffset=void 0,this.currentOffset=void 0,this.lambda_v0=0,this.one_ve_v0=0,this.timeout=void 0,this.interaction=void 0,this.interaction=i}return c(r,[{key:"start",value:function(i){var a=this.interaction,d=hi(a);if(!d||!d.enabled)return!1;var h=a.coords.velocity.client,g=ft(h.x,h.y),_=this.modification||(this.modification=new bi(a));if(_.copyFrom(a.modification),this.t0=a._now(),this.allowResume=d.allowResume,this.v0=g,this.currentOffset={x:0,y:0},this.startCoords=a.coords.cur.page,this.modifierArg=_.fillArg({pageCoords:this.startCoords,preEnd:!0,phase:"inertiastart"}),this.t0-a.coords.cur.timeStamp<50&&g>d.minSpeed&&g>d.endSpeed)this.startInertia();else{if(_.result=_.setAll(this.modifierArg),!_.result.changed)return!1;this.startSmoothEnd()}return a.modification.result.rect=null,a.offsetBy(this.targetOffset),a._doPhase({interaction:a,event:i,phase:"inertiastart"}),a.offsetBy({x:-this.targetOffset.x,y:-this.targetOffset.y}),a.modification.result.rect=null,this.active=!0,a.simulation=this,!0}},{key:"startInertia",value:function(){var i=this,a=this.interaction.coords.velocity.client,d=hi(this.interaction),h=d.resistance,g=-Math.log(d.endSpeed/this.v0)/h;this.targetOffset={x:(a.x-g)/h,y:(a.y-g)/h},this.te=g,this.lambda_v0=h/this.v0,this.one_ve_v0=1-d.endSpeed/this.v0;var _=this.modification,k=this.modifierArg;k.pageCoords={x:this.startCoords.x+this.targetOffset.x,y:this.startCoords.y+this.targetOffset.y},_.result=_.setAll(k),_.result.changed&&(this.isModified=!0,this.modifiedOffset={x:this.targetOffset.x+_.result.delta.x,y:this.targetOffset.y+_.result.delta.y}),this.onNextFrame((function(){return i.inertiaTick()}))}},{key:"startSmoothEnd",value:function(){var i=this;this.smoothEnd=!0,this.isModified=!0,this.targetOffset={x:this.modification.result.delta.x,y:this.modification.result.delta.y},this.onNextFrame((function(){return i.smoothEndTick()}))}},{key:"onNextFrame",value:function(i){var a=this;this.timeout=J.request((function(){a.active&&i()}))}},{key:"inertiaTick",value:function(){var i,a,d,h,g,_,k,E=this,L=this.interaction,A=hi(L).resistance,D=(L._now()-this.t0)/1e3;if(D<this.te){var B,X=1-(Math.exp(-A*D)-this.lambda_v0)/this.one_ve_v0;this.isModified?(i=0,a=0,d=this.targetOffset.x,h=this.targetOffset.y,g=this.modifiedOffset.x,_=this.modifiedOffset.y,B={x:Ei(k=X,i,d,g),y:Ei(k,a,h,_)}):B={x:this.targetOffset.x*X,y:this.targetOffset.y*X};var G={x:B.x-this.currentOffset.x,y:B.y-this.currentOffset.y};this.currentOffset.x+=G.x,this.currentOffset.y+=G.y,L.offsetBy(G),L.move(),this.onNextFrame((function(){return E.inertiaTick()}))}else L.offsetBy({x:this.modifiedOffset.x-this.currentOffset.x,y:this.modifiedOffset.y-this.currentOffset.y}),this.end()}},{key:"smoothEndTick",value:function(){var i=this,a=this.interaction,d=a._now()-this.t0,h=hi(a).smoothEndDuration;if(d<h){var g={x:Ai(d,0,this.targetOffset.x,h),y:Ai(d,0,this.targetOffset.y,h)},_={x:g.x-this.currentOffset.x,y:g.y-this.currentOffset.y};this.currentOffset.x+=_.x,this.currentOffset.y+=_.y,a.offsetBy(_),a.move({skipModifiers:this.modifierCount}),this.onNextFrame((function(){return i.smoothEndTick()}))}else a.offsetBy({x:this.targetOffset.x-this.currentOffset.x,y:this.targetOffset.y-this.currentOffset.y}),this.end()}},{key:"resume",value:function(i){var a=i.pointer,d=i.event,h=i.eventTarget,g=this.interaction;g.offsetBy({x:-this.currentOffset.x,y:-this.currentOffset.y}),g.updatePointer(a,d,h,!0),g._doPhase({interaction:g,event:d,phase:"resume"}),At(g.coords.prev,g.coords.cur),this.stop()}},{key:"end",value:function(){this.interaction.move(),this.interaction.end(),this.stop()}},{key:"stop",value:function(){this.active=this.smoothEnd=!1,this.interaction.simulation=null,J.cancel(this.timeout)}}]),r})();function hi(r){var i=r.interactable,a=r.prepared;return i&&i.options&&a.name&&i.options[a.name].inertia}var Ci={id:"inertia",before:["modifiers","actions"],install:function(r){var i=r.defaults;r.usePlugin(pi),r.usePlugin(_i),r.actions.phases.inertiastart=!0,r.actions.phases.resume=!0,i.perAction.inertia={enabled:!1,resistance:10,minSpeed:100,endSpeed:10,allowResume:!0,smoothEndDuration:300}},listeners:{"interactions:new":function(r){var i=r.interaction;i.inertia=new cr(i)},"interactions:before-action-end":function(r){var i=r.interaction,a=r.event;return(!i._interacting||i.simulation||!i.inertia.start(a))&&null},"interactions:down":function(r){var i=r.interaction,a=r.eventTarget,d=i.inertia;if(d.active)for(var h=a;b.element(h);){if(h===i.element){d.resume(r);break}h=Pe(h)}},"interactions:stop":function(r){var i=r.interaction.inertia;i.active&&i.stop()},"interactions:before-action-resume":function(r){var i=r.interaction.modification;i.stop(r),i.start(r,r.interaction.coords.cur.page),i.applyToInteraction(r)},"interactions:before-action-inertiastart":function(r){return r.interaction.modification.setAndApply(r)},"interactions:action-resume":Gt,"interactions:action-inertiastart":Gt,"interactions:after-action-inertiastart":function(r){return r.interaction.modification.restoreInteractionCoords(r)},"interactions:after-action-resume":function(r){return r.interaction.modification.restoreInteractionCoords(r)}}};function Ei(r,i,a,d){var h=1-r;return h*h*i+2*h*r*a+r*r*d}function Ai(r,i,a,d){return-a*(r/=d)*(r-2)+i}var Vi=Ci;function Ti(r,i){for(var a=0;a<i.length;a++){var d=i[a];if(r.immediatePropagationStopped)break;d(r)}}var Oi=(function(){function r(i){n(this,r),this.options=void 0,this.types={},this.propagationStopped=!1,this.immediatePropagationStopped=!1,this.global=void 0,this.options=ne({},i||{})}return c(r,[{key:"fire",value:function(i){var a,d=this.global;(a=this.types[i.type])&&Ti(i,a),!i.propagationStopped&&d&&(a=d[i.type])&&Ti(i,a)}},{key:"on",value:function(i,a){var d=Oe(i,a);for(i in d)this.types[i]=xe(this.types[i]||[],d[i])}},{key:"off",value:function(i,a){var d=Oe(i,a);for(i in d){var h=this.types[i];if(h&&h.length)for(var g=0,_=d[i];g<_.length;g++){var k=_[g],E=h.indexOf(k);E!==-1&&h.splice(E,1)}}}},{key:"getRect",value:function(i){return null}}]),r})(),nt=(function(){function r(i){n(this,r),this.currentTarget=void 0,this.originalEvent=void 0,this.type=void 0,this.originalEvent=i,lt(this,i)}return c(r,[{key:"preventOriginalDefault",value:function(){this.originalEvent.preventDefault()}},{key:"stopPropagation",value:function(){this.originalEvent.stopPropagation()}},{key:"stopImmediatePropagation",value:function(){this.originalEvent.stopImmediatePropagation()}}]),r})();function yt(r){return b.object(r)?{capture:!!r.capture,passive:!!r.passive}:{capture:!!r,passive:!1}}function Gi(r,i){return r===i||(typeof r=="boolean"?!!i.capture===r&&!i.passive:!!r.capture==!!i.capture&&!!r.passive==!!i.passive)}var Gn={id:"events",install:function(r){var i,a=[],d={},h=[],g={add:_,remove:k,addDelegate:function(A,D,B,X,G){var te=yt(G);if(!d[B]){d[B]=[];for(var pe=0;pe<h.length;pe++){var le=h[pe];_(le,B,E),_(le,B,L,!0)}}var be=d[B],Re=j(be,(function(Ye){return Ye.selector===A&&Ye.context===D}));Re||(Re={selector:A,context:D,listeners:[]},be.push(Re)),Re.listeners.push({func:X,options:te})},removeDelegate:function(A,D,B,X,G){var te,pe=yt(G),le=d[B],be=!1;if(le)for(te=le.length-1;te>=0;te--){var Re=le[te];if(Re.selector===A&&Re.context===D){for(var Ye=Re.listeners,Ae=Ye.length-1;Ae>=0;Ae--){var Be=Ye[Ae];if(Be.func===X&&Gi(Be.options,pe)){Ye.splice(Ae,1),Ye.length||(le.splice(te,1),k(D,B,E),k(D,B,L,!0)),be=!0;break}}if(be)break}}},delegateListener:E,delegateUseCapture:L,delegatedEvents:d,documents:h,targets:a,supportsOptions:!1,supportsPassive:!1};function _(A,D,B,X){if(A.addEventListener){var G=yt(X),te=j(a,(function(pe){return pe.eventTarget===A}));te||(te={eventTarget:A,events:{}},a.push(te)),te.events[D]||(te.events[D]=[]),j(te.events[D],(function(pe){return pe.func===B&&Gi(pe.options,G)}))||(A.addEventListener(D,B,g.supportsOptions?G:G.capture),te.events[D].push({func:B,options:G}))}}function k(A,D,B,X){if(A.addEventListener&&A.removeEventListener){var G=Te(a,(function(Ct){return Ct.eventTarget===A})),te=a[G];if(te&&te.events)if(D!=="all"){var pe=!1,le=te.events[D];if(le){if(B==="all"){for(var be=le.length-1;be>=0;be--){var Re=le[be];k(A,D,Re.func,Re.options)}return}for(var Ye=yt(X),Ae=0;Ae<le.length;Ae++){var Be=le[Ae];if(Be.func===B&&Gi(Be.options,Ye)){A.removeEventListener(D,B,g.supportsOptions?Ye:Ye.capture),le.splice(Ae,1),le.length===0&&(delete te.events[D],pe=!0);break}}}pe&&!Object.keys(te.events).length&&a.splice(G,1)}else for(D in te.events)te.events.hasOwnProperty(D)&&k(A,D,"all")}}function E(A,D){for(var B=yt(D),X=new nt(A),G=d[A.type],te=W(A)[0],pe=te;b.element(pe);){for(var le=0;le<G.length;le++){var be=G[le],Re=be.selector,Ye=be.context;if(ge(pe,Re)&&ce(Ye,te)&&ce(Ye,pe)){var Ae=be.listeners;X.currentTarget=pe;for(var Be=0;Be<Ae.length;Be++){var Ct=Ae[Be];Gi(Ct.options,B)&&Ct.func(X)}}}pe=Pe(pe)}}function L(A){return E(A,!0)}return(i=r.document)==null||i.createElement("div").addEventListener("test",null,{get capture(){return g.supportsOptions=!0},get passive(){return g.supportsPassive=!0}}),r.events=g,g}},lr={methodOrder:["simulationResume","mouseOrPen","hasPointer","idle"],search:function(r){for(var i=0,a=lr.methodOrder;i<a.length;i++){var d=a[i],h=lr[d](r);if(h)return h}return null},simulationResume:function(r){var i=r.pointerType,a=r.eventType,d=r.eventTarget,h=r.scope;if(!/down|start/i.test(a))return null;for(var g=0,_=h.interactions.list;g<_.length;g++){var k=_[g],E=d;if(k.simulation&&k.simulation.allowResume&&k.pointerType===i)for(;E;){if(E===k.element)return k;E=Pe(E)}}return null},mouseOrPen:function(r){var i,a=r.pointerId,d=r.pointerType,h=r.eventType,g=r.scope;if(d!=="mouse"&&d!=="pen")return null;for(var _=0,k=g.interactions.list;_<k.length;_++){var E=k[_];if(E.pointerType===d){if(E.simulation&&!Lr(E,a))continue;if(E.interacting())return E;i||(i=E)}}if(i)return i;for(var L=0,A=g.interactions.list;L<A.length;L++){var D=A[L];if(!(D.pointerType!==d||/down/i.test(h)&&D.simulation))return D}return null},hasPointer:function(r){for(var i=r.pointerId,a=0,d=r.scope.interactions.list;a<d.length;a++){var h=d[a];if(Lr(h,i))return h}return null},idle:function(r){for(var i=r.pointerType,a=0,d=r.scope.interactions.list;a<d.length;a++){var h=d[a];if(h.pointers.length===1){var g=h.interactable;if(g&&(!g.options.gesture||!g.options.gesture.enabled))continue}else if(h.pointers.length>=2)continue;if(!h.interacting()&&i===h.pointerType)return h}return null}};function Lr(r,i){return r.pointers.some((function(a){return a.id===i}))}var Xn=lr,dr=["pointerDown","pointerMove","pointerUp","updatePointer","removePointer","windowBlur"];function Pr(r,i){return function(a){var d=i.interactions.list,h=N(a),g=W(a),_=g[0],k=g[1],E=[];if(/^touch/.test(a.type)){i.prevTouchTime=i.now();for(var L=0,A=a.changedTouches;L<A.length;L++){var D=A[L],B={pointer:D,pointerId:Tt(D),pointerType:h,eventType:a.type,eventTarget:_,curEventTarget:k,scope:i},X=Rr(B);E.push([B.pointer,B.eventTarget,B.curEventTarget,X])}}else{var G=!1;if(!V.supportsPointerEvent&&/mouse/.test(a.type)){for(var te=0;te<d.length&&!G;te++)G=d[te].pointerType!=="mouse"&&d[te].pointerIsDown;G=G||i.now()-i.prevTouchTime<500||a.timeStamp===0}if(!G){var pe={pointer:a,pointerId:Tt(a),pointerType:h,eventType:a.type,curEventTarget:k,eventTarget:_,scope:i},le=Rr(pe);E.push([pe.pointer,pe.eventTarget,pe.curEventTarget,le])}}for(var be=0;be<E.length;be++){var Re=E[be],Ye=Re[0],Ae=Re[1],Be=Re[2];Re[3][r](Ye,a,Ae,Be)}}}function Rr(r){var i=r.pointerType,a=r.scope,d={interaction:Xn.search(r),searchDetails:r};return a.fire("interactions:find",d),d.interaction||a.interactions.new({pointerType:i})}function ur(r,i){var a=r.doc,d=r.scope,h=r.options,g=d.interactions.docEvents,_=d.events,k=_[i];for(var E in d.browser.isIOS&&!h.events&&(h.events={passive:!1}),_.delegatedEvents)k(a,E,_.delegateListener),k(a,E,_.delegateUseCapture,!0);for(var L=h&&h.events,A=0;A<g.length;A++){var D=g[A];k(a,D.type,D.listener,L)}}var Jn={id:"core/interactions",install:function(r){for(var i={},a=0;a<dr.length;a++){var d=dr[a];i[d]=Pr(d,r)}var h,g=V.pEventTypes;function _(){for(var k=0,E=r.interactions.list;k<E.length;k++){var L=E[k];if(L.pointerIsDown&&L.pointerType==="touch"&&!L._interacting)for(var A=function(){var X=B[D];r.documents.some((function(G){return ce(G.doc,X.downTarget)}))||L.removePointer(X.pointer,X.event)},D=0,B=L.pointers;D<B.length;D++)A()}}(h=F.PointerEvent?[{type:g.down,listener:_},{type:g.down,listener:i.pointerDown},{type:g.move,listener:i.pointerMove},{type:g.up,listener:i.pointerUp},{type:g.cancel,listener:i.pointerUp}]:[{type:"mousedown",listener:i.pointerDown},{type:"mousemove",listener:i.pointerMove},{type:"mouseup",listener:i.pointerUp},{type:"touchstart",listener:_},{type:"touchstart",listener:i.pointerDown},{type:"touchmove",listener:i.pointerMove},{type:"touchend",listener:i.pointerUp},{type:"touchcancel",listener:i.pointerUp}]).push({type:"blur",listener:function(k){for(var E=0,L=r.interactions.list;E<L.length;E++)L[E].documentBlur(k)}}),r.prevTouchTime=0,r.Interaction=(function(k){l(L,k);var E=m(L);function L(){return n(this,L),E.apply(this,arguments)}return c(L,[{key:"pointerMoveTolerance",get:function(){return r.interactions.pointerMoveTolerance},set:function(A){r.interactions.pointerMoveTolerance=A}},{key:"_now",value:function(){return r.now()}}]),L})($i),r.interactions={list:[],new:function(k){k.scopeFire=function(L,A){return r.fire(L,A)};var E=new r.Interaction(k);return r.interactions.list.push(E),E},listeners:i,docEvents:h,pointerMoveTolerance:1},r.usePlugin(li)},listeners:{"scope:add-document":function(r){return ur(r,"add")},"scope:remove-document":function(r){return ur(r,"remove")},"interactable:unset":function(r,i){for(var a=r.interactable,d=i.interactions.list.length-1;d>=0;d--){var h=i.interactions.list[d];h.interactable===a&&(h.stop(),i.fire("interactions:destroy",{interaction:h}),h.destroy(),i.interactions.list.length>2&&i.interactions.list.splice(d,1))}}},onDocSignal:ur,doOnInteractions:Pr,methodNames:dr},Qn=Jn,Xt=(function(r){return r[r.On=0]="On",r[r.Off=1]="Off",r})(Xt||{}),Zn=(function(){function r(i,a,d,h){n(this,r),this.target=void 0,this.options=void 0,this._actions=void 0,this.events=new Oi,this._context=void 0,this._win=void 0,this._doc=void 0,this._scopeEvents=void 0,this._actions=a.actions,this.target=i,this._context=a.context||d,this._win=C(st(i)?this._context:i),this._doc=this._win.document,this._scopeEvents=h,this.set(a)}return c(r,[{key:"_defaults",get:function(){return{base:{},perAction:{},actions:{}}}},{key:"setOnEvents",value:function(i,a){return b.func(a.onstart)&&this.on("".concat(i,"start"),a.onstart),b.func(a.onmove)&&this.on("".concat(i,"move"),a.onmove),b.func(a.onend)&&this.on("".concat(i,"end"),a.onend),b.func(a.oninertiastart)&&this.on("".concat(i,"inertiastart"),a.oninertiastart),this}},{key:"updatePerActionListeners",value:function(i,a,d){var h,g=this,_=(h=this._actions.map[i])==null?void 0:h.filterEventType,k=function(E){return(_==null||_(E))&&Ut(E,g._actions)};(b.array(a)||b.object(a))&&this._onOff(Xt.Off,i,a,void 0,k),(b.array(d)||b.object(d))&&this._onOff(Xt.On,i,d,void 0,k)}},{key:"setPerAction",value:function(i,a){var d=this._defaults;for(var h in a){var g=h,_=this.options[i],k=a[g];g==="listeners"&&this.updatePerActionListeners(i,_.listeners,k),b.array(k)?_[g]=de(k):b.plainObject(k)?(_[g]=ne(_[g]||{},Vt(k)),b.object(d.perAction[g])&&"enabled"in d.perAction[g]&&(_[g].enabled=k.enabled!==!1)):b.bool(k)&&b.object(d.perAction[g])?_[g].enabled=k:_[g]=k}}},{key:"getRect",value:function(i){return i=i||(b.element(this.target)?this.target:null),b.string(this.target)&&(i=i||this._context.querySelector(this.target)),Ke(i)}},{key:"rectChecker",value:function(i){var a=this;return b.func(i)?(this.getRect=function(d){var h=ne({},i.apply(a,d));return"width"in h||(h.width=h.right-h.left,h.height=h.bottom-h.top),h},this):i===null?(delete this.getRect,this):this.getRect}},{key:"_backCompatOption",value:function(i,a){if(st(a)||b.object(a)){for(var d in this.options[i]=a,this._actions.map)this.options[d][i]=a;return this}return this.options[i]}},{key:"origin",value:function(i){return this._backCompatOption("origin",i)}},{key:"deltaSource",value:function(i){return i==="page"||i==="client"?(this.options.deltaSource=i,this):this.options.deltaSource}},{key:"getAllElements",value:function(){var i=this.target;return b.string(i)?Array.from(this._context.querySelectorAll(i)):b.func(i)&&i.getAllElements?i.getAllElements():b.element(i)?[i]:[]}},{key:"context",value:function(){return this._context}},{key:"inContext",value:function(i){return this._context===i.ownerDocument||ce(this._context,i)}},{key:"testIgnoreAllow",value:function(i,a,d){return!this.testIgnore(i.ignoreFrom,a,d)&&this.testAllow(i.allowFrom,a,d)}},{key:"testAllow",value:function(i,a,d){return!i||!!b.element(d)&&(b.string(i)?Ze(d,i,a):!!b.element(i)&&ce(i,d))}},{key:"testIgnore",value:function(i,a,d){return!(!i||!b.element(d))&&(b.string(i)?Ze(d,i,a):!!b.element(i)&&ce(i,d))}},{key:"fire",value:function(i){return this.events.fire(i),this}},{key:"_onOff",value:function(i,a,d,h,g){b.object(a)&&!b.array(a)&&(h=d,d=null);var _=Oe(a,d,g);for(var k in _){k==="wheel"&&(k=V.wheelEvent);for(var E=0,L=_[k];E<L.length;E++){var A=L[E];Ut(k,this._actions)?this.events[i===Xt.On?"on":"off"](k,A):b.string(this.target)?this._scopeEvents[i===Xt.On?"addDelegate":"removeDelegate"](this.target,this._context,k,A,h):this._scopeEvents[i===Xt.On?"add":"remove"](this.target,k,A,h)}}return this}},{key:"on",value:function(i,a,d){return this._onOff(Xt.On,i,a,d)}},{key:"off",value:function(i,a,d){return this._onOff(Xt.Off,i,a,d)}},{key:"set",value:function(i){var a=this._defaults;for(var d in b.object(i)||(i={}),this.options=Vt(a.base),this._actions.methodDict){var h=d,g=this._actions.methodDict[h];this.options[h]={},this.setPerAction(h,ne(ne({},a.perAction),a.actions[h])),this[g](i[h])}for(var _ in i)_!=="getRect"?b.func(this[_])&&this[_](i[_]):this.rectChecker(i.getRect);return this}},{key:"unset",value:function(){if(b.string(this.target))for(var i in this._scopeEvents.delegatedEvents)for(var a=this._scopeEvents.delegatedEvents[i],d=a.length-1;d>=0;d--){var h=a[d],g=h.selector,_=h.context,k=h.listeners;g===this.target&&_===this._context&&a.splice(d,1);for(var E=k.length-1;E>=0;E--)this._scopeEvents.removeDelegate(this.target,this._context,i,k[E][0],k[E][1])}else this._scopeEvents.remove(this.target,"all")}}]),r})(),ea=(function(){function r(i){var a=this;n(this,r),this.list=[],this.selectorMap={},this.scope=void 0,this.scope=i,i.addListeners({"interactable:unset":function(d){var h=d.interactable,g=h.target,_=b.string(g)?a.selectorMap[g]:g[a.scope.id],k=Te(_,(function(E){return E===h}));_.splice(k,1)}})}return c(r,[{key:"new",value:function(i,a){a=ne(a||{},{actions:this.scope.actions});var d=new this.scope.Interactable(i,a,this.scope.document,this.scope.events);return this.scope.addDocument(d._doc),this.list.push(d),b.string(i)?(this.selectorMap[i]||(this.selectorMap[i]=[]),this.selectorMap[i].push(d)):(d.target[this.scope.id]||Object.defineProperty(i,this.scope.id,{value:[],configurable:!0}),i[this.scope.id].push(d)),this.scope.fire("interactable:new",{target:i,options:a,interactable:d,win:this.scope._win}),d}},{key:"getExisting",value:function(i,a){var d=a&&a.context||this.scope.document,h=b.string(i),g=h?this.selectorMap[i]:i[this.scope.id];if(g)return j(g,(function(_){return _._context===d&&(h||_.inContext(i))}))}},{key:"forEachMatch",value:function(i,a){for(var d=0,h=this.list;d<h.length;d++){var g=h[d],_=void 0;if((b.string(g.target)?b.element(i)&&ge(i,g.target):i===g.target)&&g.inContext(i)&&(_=a(g)),_!==void 0)return _}}}]),r})(),ta=(function(){function r(){var i=this;n(this,r),this.id="__interact_scope_".concat(Math.floor(100*Math.random())),this.isInitialized=!1,this.listenerMaps=[],this.browser=V,this.defaults=Vt(xi),this.Eventable=Oi,this.actions={map:{},phases:{start:!0,move:!0,end:!0},methodDict:{},phaselessTypes:{}},this.interactStatic=(function(d){var h=function g(_,k){var E=d.interactables.getExisting(_,k);return E||((E=d.interactables.new(_,k)).events.global=g.globalEvents),E};return h.getPointerAverage=mt,h.getTouchBBox=It,h.getTouchDistance=Mt,h.getTouchAngle=ve,h.getElementRect=Ke,h.getElementClientRect=Ie,h.matchesSelector=ge,h.closest=je,h.globalEvents={},h.version="1.10.27",h.scope=d,h.use=function(g,_){return this.scope.usePlugin(g,_),this},h.isSet=function(g,_){return!!this.scope.interactables.get(g,_&&_.context)},h.on=ue((function(g,_,k){if(b.string(g)&&g.search(" ")!==-1&&(g=g.trim().split(/ +/)),b.array(g)){for(var E=0,L=g;E<L.length;E++){var A=L[E];this.on(A,_,k)}return this}if(b.object(g)){for(var D in g)this.on(D,g[D],_);return this}return Ut(g,this.scope.actions)?this.globalEvents[g]?this.globalEvents[g].push(_):this.globalEvents[g]=[_]:this.scope.events.add(this.scope.document,g,_,{options:k}),this}),"The interact.on() method is being deprecated"),h.off=ue((function(g,_,k){if(b.string(g)&&g.search(" ")!==-1&&(g=g.trim().split(/ +/)),b.array(g)){for(var E=0,L=g;E<L.length;E++){var A=L[E];this.off(A,_,k)}return this}if(b.object(g)){for(var D in g)this.off(D,g[D],_);return this}var B;return Ut(g,this.scope.actions)?g in this.globalEvents&&(B=this.globalEvents[g].indexOf(_))!==-1&&this.globalEvents[g].splice(B,1):this.scope.events.remove(this.scope.document,g,_,k),this}),"The interact.off() method is being deprecated"),h.debug=function(){return this.scope},h.supportsTouch=function(){return V.supportsTouch},h.supportsPointerEvent=function(){return V.supportsPointerEvent},h.stop=function(){for(var g=0,_=this.scope.interactions.list;g<_.length;g++)_[g].stop();return this},h.pointerMoveTolerance=function(g){return b.number(g)?(this.scope.interactions.pointerMoveTolerance=g,this):this.scope.interactions.pointerMoveTolerance},h.addDocument=function(g,_){this.scope.addDocument(g,_)},h.removeDocument=function(g){this.scope.removeDocument(g)},h})(this),this.InteractEvent=di,this.Interactable=void 0,this.interactables=new ea(this),this._win=void 0,this.document=void 0,this.window=void 0,this.documents=[],this._plugins={list:[],map:{}},this.onWindowUnload=function(d){return i.removeDocument(d.target)};var a=this;this.Interactable=(function(d){l(g,d);var h=m(g);function g(){return n(this,g),h.apply(this,arguments)}return c(g,[{key:"_defaults",get:function(){return a.defaults}},{key:"set",value:function(_){return y(u(g.prototype),"set",this).call(this,_),a.fire("interactable:set",{options:_,interactable:this}),this}},{key:"unset",value:function(){y(u(g.prototype),"unset",this).call(this);var _=a.interactables.list.indexOf(this);_<0||(a.interactables.list.splice(_,1),a.fire("interactable:unset",{interactable:this}))}}]),g})(Zn)}return c(r,[{key:"addListeners",value:function(i,a){this.listenerMaps.push({id:a,map:i})}},{key:"fire",value:function(i,a){for(var d=0,h=this.listenerMaps;d<h.length;d++){var g=h[d].map[i];if(g&&g(a,this,i)===!1)return!1}}},{key:"init",value:function(i){return this.isInitialized?this:(function(a,d){return a.isInitialized=!0,b.window(d)&&R(d),F.init(d),V.init(d),J.init(d),a.window=d,a.document=d.document,a.usePlugin(Qn),a.usePlugin(Gn),a})(this,i)}},{key:"pluginIsInstalled",value:function(i){var a=i.id;return a?!!this._plugins.map[a]:this._plugins.list.indexOf(i)!==-1}},{key:"usePlugin",value:function(i,a){if(!this.isInitialized)return this;if(this.pluginIsInstalled(i))return this;if(i.id&&(this._plugins.map[i.id]=i),this._plugins.list.push(i),i.install&&i.install(this,a),i.listeners&&i.before){for(var d=0,h=this.listenerMaps.length,g=i.before.reduce((function(k,E){return k[E]=!0,k[Ir(E)]=!0,k}),{});d<h;d++){var _=this.listenerMaps[d].id;if(_&&(g[_]||g[Ir(_)]))break}this.listenerMaps.splice(d,0,{id:i.id,map:i.listeners})}else i.listeners&&this.listenerMaps.push({id:i.id,map:i.listeners});return this}},{key:"addDocument",value:function(i,a){if(this.getDocIndex(i)!==-1)return!1;var d=C(i);a=a?ne({},a):{},this.documents.push({doc:i,options:a}),this.events.documents.push(i),i!==this.document&&this.events.add(d,"unload",this.onWindowUnload),this.fire("scope:add-document",{doc:i,window:d,scope:this,options:a})}},{key:"removeDocument",value:function(i){var a=this.getDocIndex(i),d=C(i),h=this.documents[a].options;this.events.remove(d,"unload",this.onWindowUnload),this.documents.splice(a,1),this.events.documents.splice(a,1),this.fire("scope:remove-document",{doc:i,window:d,scope:this,options:h})}},{key:"getDocIndex",value:function(i){for(var a=0;a<this.documents.length;a++)if(this.documents[a].doc===i)return a;return-1}},{key:"getDocOptions",value:function(i){var a=this.getDocIndex(i);return a===-1?null:this.documents[a].options}},{key:"now",value:function(){return(this.window.Date||Date).now()}}]),r})();function Ir(r){return r&&r.replace(/\/.*$/,"")}var Dr=new ta,kt=Dr.interactStatic,ia=typeof globalThis!="undefined"?globalThis:window;Dr.init(ia);var ra=Object.freeze({__proto__:null,edgeTarget:function(){},elements:function(){},grid:function(r){var i=[["x","y"],["left","top"],["right","bottom"],["width","height"]].filter((function(d){var h=d[0],g=d[1];return h in r||g in r})),a=function(d,h){for(var g=r.range,_=r.limits,k=_===void 0?{left:-1/0,right:1/0,top:-1/0,bottom:1/0}:_,E=r.offset,L=E===void 0?{x:0,y:0}:E,A={range:g,grid:r,x:null,y:null},D=0;D<i.length;D++){var B=i[D],X=B[0],G=B[1],te=Math.round((d-L.x)/r[X]),pe=Math.round((h-L.y)/r[G]);A[X]=Math.max(k.left,Math.min(k.right,te*r[X]+L.x)),A[G]=Math.max(k.top,Math.min(k.bottom,pe*r[G]+L.y))}return A};return a.grid=r,a.coordFields=i,a}}),na={id:"snappers",install:function(r){var i=r.interactStatic;i.snappers=ne(i.snappers||{},ra),i.createSnapGrid=i.snappers.grid}},aa=na,oa={start:function(r){var i=r.state,a=r.rect,d=r.edges,h=r.pageCoords,g=i.options,_=g.ratio,k=g.enabled,E=i.options,L=E.equalDelta,A=E.modifiers;_==="preserve"&&(_=a.width/a.height),i.startCoords=ne({},h),i.startRect=ne({},a),i.ratio=_,i.equalDelta=L;var D=i.linkedEdges={top:d.top||d.left&&!d.bottom,left:d.left||d.top&&!d.right,bottom:d.bottom||d.right&&!d.top,right:d.right||d.bottom&&!d.left};if(i.xIsPrimaryAxis=!(!d.left&&!d.right),i.equalDelta){var B=(D.left?1:-1)*(D.top?1:-1);i.edgeSign={x:B,y:B}}else i.edgeSign={x:D.left?-1:1,y:D.top?-1:1};if(k!==!1&&ne(d,D),A!=null&&A.length){var X=new bi(r.interaction);X.copyFrom(r.interaction.modification),X.prepareStates(A),i.subModification=X,X.startAll(p({},r))}},set:function(r){var i=r.state,a=r.rect,d=r.coords,h=i.linkedEdges,g=ne({},d),_=i.equalDelta?sa:ca;if(ne(r.edges,h),_(i,i.xIsPrimaryAxis,d,a),!i.subModification)return null;var k=ne({},a);We(h,k,{x:d.x-g.x,y:d.y-g.y});var E=i.subModification.setAll(p(p({},r),{},{rect:k,edges:h,pageCoords:d,prevCoords:d,prevRect:k})),L=E.delta;return E.changed&&(_(i,Math.abs(L.x)>Math.abs(L.y),E.coords,E.rect),ne(d,E.coords)),E.eventProps},defaults:{ratio:"preserve",equalDelta:!1,modifiers:[],enabled:!1}};function sa(r,i,a){var d=r.startCoords,h=r.edgeSign;i?a.y=d.y+(a.x-d.x)*h.y:a.x=d.x+(a.y-d.y)*h.x}function ca(r,i,a,d){var h=r.startRect,g=r.startCoords,_=r.ratio,k=r.edgeSign;if(i){var E=d.width/_;a.y=g.y+(E-h.height)*k.y}else{var L=d.height*_;a.x=g.x+(L-h.width)*k.x}}var la=Ht(oa,"aspectRatio"),Fr=function(){};Fr._defaults={};var Xi=Fr;function ni(r,i,a){return b.func(r)?ct(r,i.interactable,i.element,[a.x,a.y,i]):ct(r,i.interactable,i.element)}var Ji={start:function(r){var i=r.rect,a=r.startOffset,d=r.state,h=r.interaction,g=r.pageCoords,_=d.options,k=_.elementRect,E=ne({left:0,top:0,right:0,bottom:0},_.offset||{});if(i&&k){var L=ni(_.restriction,h,g);if(L){var A=L.right-L.left-i.width,D=L.bottom-L.top-i.height;A<0&&(E.left+=A,E.right+=A),D<0&&(E.top+=D,E.bottom+=D)}E.left+=a.left-i.width*k.left,E.top+=a.top-i.height*k.top,E.right+=a.right-i.width*(1-k.right),E.bottom+=a.bottom-i.height*(1-k.bottom)}d.offset=E},set:function(r){var i=r.coords,a=r.interaction,d=r.state,h=d.options,g=d.offset,_=ni(h.restriction,a,i);if(_){var k=(function(E){return!E||"left"in E&&"top"in E||((E=ne({},E)).left=E.x||0,E.top=E.y||0,E.right=E.right||E.left+E.width,E.bottom=E.bottom||E.top+E.height),E})(_);i.x=Math.max(Math.min(k.right-g.right,i.x),k.left+g.left),i.y=Math.max(Math.min(k.bottom-g.bottom,i.y),k.top+g.top)}},defaults:{restriction:null,elementRect:null,offset:null,endOnly:!1,enabled:!1}},da=Ht(Ji,"restrict"),Br={top:1/0,left:1/0,bottom:-1/0,right:-1/0},Nr={top:-1/0,left:-1/0,bottom:1/0,right:1/0};function qr(r,i){for(var a=0,d=["top","left","bottom","right"];a<d.length;a++){var h=d[a];h in r||(r[h]=i[h])}return r}var zi={noInner:Br,noOuter:Nr,start:function(r){var i,a=r.interaction,d=r.startOffset,h=r.state,g=h.options;g&&(i=Me(ni(g.offset,a,a.coords.start.page))),i=i||{x:0,y:0},h.offset={top:i.y+d.top,left:i.x+d.left,bottom:i.y-d.bottom,right:i.x-d.right}},set:function(r){var i=r.coords,a=r.edges,d=r.interaction,h=r.state,g=h.offset,_=h.options;if(a){var k=ne({},i),E=ni(_.inner,d,k)||{},L=ni(_.outer,d,k)||{};qr(E,Br),qr(L,Nr),a.top?i.y=Math.min(Math.max(L.top+g.top,k.y),E.top+g.top):a.bottom&&(i.y=Math.max(Math.min(L.bottom+g.bottom,k.y),E.bottom+g.bottom)),a.left?i.x=Math.min(Math.max(L.left+g.left,k.x),E.left+g.left):a.right&&(i.x=Math.max(Math.min(L.right+g.right,k.x),E.right+g.right))}},defaults:{inner:null,outer:null,offset:null,endOnly:!1,enabled:!1}},ua=Ht(zi,"restrictEdges"),pa=ne({get elementRect(){return{top:0,left:0,bottom:1,right:1}},set elementRect(r){}},Ji.defaults),ha=Ht({start:Ji.start,set:Ji.set,defaults:pa},"restrictRect"),fa={width:-1/0,height:-1/0},ga={width:1/0,height:1/0},ma=Ht({start:function(r){return zi.start(r)},set:function(r){var i=r.interaction,a=r.state,d=r.rect,h=r.edges,g=a.options;if(h){var _=ae(ni(g.min,i,r.coords))||fa,k=ae(ni(g.max,i,r.coords))||ga;a.options={endOnly:g.endOnly,inner:ne({},zi.noInner),outer:ne({},zi.noOuter)},h.top?(a.options.inner.top=d.bottom-_.height,a.options.outer.top=d.bottom-k.height):h.bottom&&(a.options.inner.bottom=d.top+_.height,a.options.outer.bottom=d.top+k.height),h.left?(a.options.inner.left=d.right-_.width,a.options.outer.left=d.right-k.width):h.right&&(a.options.inner.right=d.left+_.width,a.options.outer.right=d.left+k.width),zi.set(r),a.options=g}},defaults:{min:null,max:null,endOnly:!1,enabled:!1}},"restrictSize"),pr={start:function(r){var i,a=r.interaction,d=r.interactable,h=r.element,g=r.rect,_=r.state,k=r.startOffset,E=_.options,L=E.offsetWithOrigin?(function(B){var X=B.interaction.element,G=Me(ct(B.state.options.origin,null,null,[X])),te=G||Se(B.interactable,X,B.interaction.prepared.name);return te})(r):{x:0,y:0};if(E.offset==="startCoords")i={x:a.coords.start.page.x,y:a.coords.start.page.y};else{var A=ct(E.offset,d,h,[a]);(i=Me(A)||{x:0,y:0}).x+=L.x,i.y+=L.y}var D=E.relativePoints;_.offsets=g&&D&&D.length?D.map((function(B,X){return{index:X,relativePoint:B,x:k.left-g.width*B.x+i.x,y:k.top-g.height*B.y+i.y}})):[{index:0,relativePoint:null,x:i.x,y:i.y}]},set:function(r){var i=r.interaction,a=r.coords,d=r.state,h=d.options,g=d.offsets,_=Se(i.interactable,i.element,i.prepared.name),k=ne({},a),E=[];h.offsetWithOrigin||(k.x-=_.x,k.y-=_.y);for(var L=0,A=g;L<A.length;L++)for(var D=A[L],B=k.x-D.x,X=k.y-D.y,G=0,te=h.targets.length;G<te;G++){var pe=h.targets[G],le=void 0;(le=b.func(pe)?pe(B,X,i._proxy,D,G):pe)&&E.push({x:(b.number(le.x)?le.x:B)+D.x,y:(b.number(le.y)?le.y:X)+D.y,range:b.number(le.range)?le.range:h.range,source:pe,index:G,offset:D})}for(var be={target:null,inRange:!1,distance:0,range:0,delta:{x:0,y:0}},Re=0;Re<E.length;Re++){var Ye=E[Re],Ae=Ye.range,Be=Ye.x-k.x,Ct=Ye.y-k.y,at=ft(Be,Ct),Rt=at<=Ae;Ae===1/0&&be.inRange&&be.range!==1/0&&(Rt=!1),be.target&&!(Rt?be.inRange&&Ae!==1/0?at/Ae<be.distance/be.range:Ae===1/0&&be.range!==1/0||at<be.distance:!be.inRange&&at<be.distance)||(be.target=Ye,be.distance=at,be.range=Ae,be.inRange=Rt,be.delta.x=Be,be.delta.y=Ct)}return be.inRange&&(a.x=be.target.x,a.y=be.target.y),d.closest=be,be},defaults:{range:1/0,targets:null,offset:null,offsetWithOrigin:!0,origin:null,relativePoints:null,endOnly:!1,enabled:!1}},ya=Ht(pr,"snap"),Qi={start:function(r){var i=r.state,a=r.edges,d=i.options;if(!a)return null;r.state={options:{targets:null,relativePoints:[{x:a.left?0:1,y:a.top?0:1}],offset:d.offset||"self",origin:{x:0,y:0},range:d.range}},i.targetFields=i.targetFields||[["width","height"],["x","y"]],pr.start(r),i.offsets=r.state.offsets,r.state=i},set:function(r){var i=r.interaction,a=r.state,d=r.coords,h=a.options,g=a.offsets,_={x:d.x-g[0].x,y:d.y-g[0].y};a.options=ne({},h),a.options.targets=[];for(var k=0,E=h.targets||[];k<E.length;k++){var L=E[k],A=void 0;if(A=b.func(L)?L(_.x,_.y,i):L){for(var D=0,B=a.targetFields;D<B.length;D++){var X=B[D],G=X[0],te=X[1];if(G in A||te in A){A.x=A[G],A.y=A[te];break}}a.options.targets.push(A)}}var pe=pr.set(r);return a.options=h,pe},defaults:{range:1/0,targets:null,offset:null,endOnly:!1,enabled:!1}},va=Ht(Qi,"snapSize"),hr={aspectRatio:la,restrictEdges:ua,restrict:da,restrictRect:ha,restrictSize:ma,snapEdges:Ht({start:function(r){var i=r.edges;return i?(r.state.targetFields=r.state.targetFields||[[i.left?"left":"right",i.top?"top":"bottom"]],Qi.start(r)):null},set:Qi.set,defaults:ne(Vt(Qi.defaults),{targets:void 0,range:void 0,offset:{x:0,y:0}})},"snapEdges"),snap:ya,snapSize:va,spring:Xi,avoid:Xi,transform:Xi,rubberband:Xi},ba={id:"modifiers",install:function(r){var i=r.interactStatic;for(var a in r.usePlugin(_i),r.usePlugin(aa),i.modifiers=hr,hr){var d=hr[a],h=d._defaults,g=d._methods;h._methods=g,r.defaults.perAction[a]=h}}},_a=ba,Hr=(function(r){l(a,r);var i=m(a);function a(d,h,g,_,k,E){var L;if(n(this,a),lt(v(L=i.call(this,k)),g),g!==h&&lt(v(L),h),L.timeStamp=E,L.originalEvent=g,L.type=d,L.pointerId=Tt(h),L.pointerType=N(h),L.target=_,L.currentTarget=null,d==="tap"){var A=k.getPointerIndex(h);L.dt=L.timeStamp-k.pointers[A].downTime;var D=L.timeStamp-k.tapTime;L.double=!!k.prevTap&&k.prevTap.type!=="doubletap"&&k.prevTap.target===L.target&&D<500}else d==="doubletap"&&(L.dt=h.timeStamp-k.tapTime,L.double=!0);return L}return c(a,[{key:"_subtractOrigin",value:function(d){var h=d.x,g=d.y;return this.pageX-=h,this.pageY-=g,this.clientX-=h,this.clientY-=g,this}},{key:"_addOrigin",value:function(d){var h=d.x,g=d.y;return this.pageX+=h,this.pageY+=g,this.clientX+=h,this.clientY+=g,this}},{key:"preventDefault",value:function(){this.originalEvent.preventDefault()}}]),a})(he),Mi={id:"pointer-events/base",before:["inertia","modifiers","auto-start","actions"],install:function(r){r.pointerEvents=Mi,r.defaults.actions.pointerEvents=Mi.defaults,ne(r.actions.phaselessTypes,Mi.types)},listeners:{"interactions:new":function(r){var i=r.interaction;i.prevTap=null,i.tapTime=0},"interactions:update-pointer":function(r){var i=r.down,a=r.pointerInfo;!i&&a.hold||(a.hold={duration:1/0,timeout:null})},"interactions:move":function(r,i){var a=r.interaction,d=r.pointer,h=r.event,g=r.eventTarget;r.duplicate||a.pointerIsDown&&!a.pointerWasMoved||(a.pointerIsDown&&fr(r),Jt({interaction:a,pointer:d,event:h,eventTarget:g,type:"move"},i))},"interactions:down":function(r,i){(function(a,d){for(var h=a.interaction,g=a.pointer,_=a.event,k=a.eventTarget,E=a.pointerIndex,L=h.pointers[E].hold,A=ot(k),D={interaction:h,pointer:g,event:_,eventTarget:k,type:"hold",targets:[],path:A,node:null},B=0;B<A.length;B++){var X=A[B];D.node=X,d.fire("pointerEvents:collect-targets",D)}if(D.targets.length){for(var G=1/0,te=0,pe=D.targets;te<pe.length;te++){var le=pe[te].eventable.options.holdDuration;le<G&&(G=le)}L.duration=G,L.timeout=setTimeout((function(){Jt({interaction:h,eventTarget:k,pointer:g,event:_,type:"hold"},d)}),G)}})(r,i),Jt(r,i)},"interactions:up":function(r,i){fr(r),Jt(r,i),(function(a,d){var h=a.interaction,g=a.pointer,_=a.event,k=a.eventTarget;h.pointerWasMoved||Jt({interaction:h,eventTarget:k,pointer:g,event:_,type:"tap"},d)})(r,i)},"interactions:cancel":function(r,i){fr(r),Jt(r,i)}},PointerEvent:Hr,fire:Jt,collectEventTargets:jr,defaults:{holdDuration:600,ignoreFrom:null,allowFrom:null,origin:{x:0,y:0}},types:{down:!0,move:!0,up:!0,cancel:!0,tap:!0,doubletap:!0,hold:!0}};function Jt(r,i){var a=r.interaction,d=r.pointer,h=r.event,g=r.eventTarget,_=r.type,k=r.targets,E=k===void 0?jr(r,i):k,L=new Hr(_,d,h,g,a,i.now());i.fire("pointerEvents:new",{pointerEvent:L});for(var A={interaction:a,pointer:d,event:h,eventTarget:g,targets:E,type:_,pointerEvent:L},D=0;D<E.length;D++){var B=E[D];for(var X in B.props||{})L[X]=B.props[X];var G=Se(B.eventable,B.node);if(L._subtractOrigin(G),L.eventable=B.eventable,L.currentTarget=B.node,B.eventable.fire(L),L._addOrigin(G),L.immediatePropagationStopped||L.propagationStopped&&D+1<E.length&&E[D+1].node!==L.currentTarget)break}if(i.fire("pointerEvents:fired",A),_==="tap"){var te=L.double?Jt({interaction:a,pointer:d,event:h,eventTarget:g,type:"doubletap"},i):L;a.prevTap=te,a.tapTime=te.timeStamp}return L}function jr(r,i){var a=r.interaction,d=r.pointer,h=r.event,g=r.eventTarget,_=r.type,k=a.getPointerIndex(d),E=a.pointers[k];if(_==="tap"&&(a.pointerWasMoved||!E||E.downTarget!==g))return[];for(var L=ot(g),A={interaction:a,pointer:d,event:h,eventTarget:g,type:_,path:L,targets:[],node:null},D=0;D<L.length;D++){var B=L[D];A.node=B,i.fire("pointerEvents:collect-targets",A)}return _==="hold"&&(A.targets=A.targets.filter((function(X){var G,te;return X.eventable.options.holdDuration===((G=a.pointers[k])==null||(te=G.hold)==null?void 0:te.duration)}))),A.targets}function fr(r){var i=r.interaction,a=r.pointerIndex,d=i.pointers[a].hold;d&&d.timeout&&(clearTimeout(d.timeout),d.timeout=null)}var xa=Object.freeze({__proto__:null,default:Mi});function wa(r){var i=r.interaction;i.holdIntervalHandle&&(clearInterval(i.holdIntervalHandle),i.holdIntervalHandle=null)}var Sa={id:"pointer-events/holdRepeat",install:function(r){r.usePlugin(Mi);var i=r.pointerEvents;i.defaults.holdRepeatInterval=0,i.types.holdrepeat=r.actions.phaselessTypes.holdrepeat=!0},listeners:["move","up","cancel","endall"].reduce((function(r,i){return r["pointerEvents:".concat(i)]=wa,r}),{"pointerEvents:new":function(r){var i=r.pointerEvent;i.type==="hold"&&(i.count=(i.count||0)+1)},"pointerEvents:fired":function(r,i){var a=r.interaction,d=r.pointerEvent,h=r.eventTarget,g=r.targets;if(d.type==="hold"&&g.length){var _=g[0].eventable.options.holdRepeatInterval;_<=0||(a.holdIntervalHandle=setTimeout((function(){i.pointerEvents.fire({interaction:a,eventTarget:h,type:"hold",pointer:d,event:d},i)}),_))}}})},ka=Sa,Ca={id:"pointer-events/interactableTargets",install:function(r){var i=r.Interactable;i.prototype.pointerEvents=function(d){return ne(this.events.options,d),this};var a=i.prototype._backCompatOption;i.prototype._backCompatOption=function(d,h){var g=a.call(this,d,h);return g===this&&(this.events.options[d]=h),g}},listeners:{"pointerEvents:collect-targets":function(r,i){var a=r.targets,d=r.node,h=r.type,g=r.eventTarget;i.interactables.forEachMatch(d,(function(_){var k=_.events,E=k.options;k.types[h]&&k.types[h].length&&_.testIgnoreAllow(E,d,g)&&a.push({node:d,eventable:k,props:{interactable:_}})}))},"interactable:new":function(r){var i=r.interactable;i.events.getRect=function(a){return i.getRect(a)}},"interactable:set":function(r,i){var a=r.interactable,d=r.options;ne(a.events.options,i.pointerEvents.defaults),ne(a.events.options,d.pointerEvents||{})}}},Ea=Ca,Aa={id:"pointer-events",install:function(r){r.usePlugin(xa),r.usePlugin(ka),r.usePlugin(Ea)}},Ta=Aa,Oa={id:"reflow",install:function(r){var i=r.Interactable;r.actions.phases.reflow=!0,i.prototype.reflow=function(a){return(function(d,h,g){for(var _=d.getAllElements(),k=g.window.Promise,E=k?[]:null,L=function(){var D=_[A],B=d.getRect(D);if(!B)return 1;var X,G=j(g.interactions.list,(function(le){return le.interacting()&&le.interactable===d&&le.element===D&&le.prepared.name===h.name}));if(G)G.move(),E&&(X=G._reflowPromise||new k((function(le){G._reflowResolve=le})));else{var te=ae(B),pe=(function(le){return{coords:le,get page(){return this.coords.page},get client(){return this.coords.client},get timeStamp(){return this.coords.timeStamp},get pageX(){return this.coords.page.x},get pageY(){return this.coords.page.y},get clientX(){return this.coords.client.x},get clientY(){return this.coords.client.y},get pointerId(){return this.coords.pointerId},get target(){return this.coords.target},get type(){return this.coords.type},get pointerType(){return this.coords.pointerType},get buttons(){return this.coords.buttons},preventDefault:function(){}}})({page:{x:te.x,y:te.y},client:{x:te.x,y:te.y},timeStamp:g.now()});X=(function(le,be,Re,Ye,Ae){var Be=le.interactions.new({pointerType:"reflow"}),Ct={interaction:Be,event:Ae,pointer:Ae,eventTarget:Re,phase:"reflow"};Be.interactable=be,Be.element=Re,Be.prevEvent=Ae,Be.updatePointer(Ae,Ae,Re,!0),xt(Be.coords.delta),me(Be.prepared,Ye),Be._doPhase(Ct);var at=le.window,Rt=at.Promise,Nt=Rt?new Rt((function(Yt){Be._reflowResolve=Yt})):void 0;return Be._reflowPromise=Nt,Be.start(Ye,be,Re),Be._interacting?(Be.move(Ct),Be.end(Ae)):(Be.stop(),Be._reflowResolve()),Be.removePointer(Ae,Ae),Nt})(g,d,D,h,pe)}E&&E.push(X)},A=0;A<_.length&&!L();A++);return E&&k.all(E).then((function(){return d}))})(this,a,r)}},listeners:{"interactions:stop":function(r,i){var a=r.interaction;a.pointerType==="reflow"&&(a._reflowResolve&&a._reflowResolve(),(function(d,h){d.splice(d.indexOf(h),1)})(i.interactions.list,a))}}},za=Oa;if(kt.use(li),kt.use(pi),kt.use(Ta),kt.use(Vi),kt.use(_a),kt.use(qi),kt.use(re),kt.use(we),kt.use(za),kt.default=kt,(typeof ai=="undefined"?"undefined":t(ai))==="object"&&ai)try{ai.exports=kt}catch{}return kt.default=kt,kt}))});var Vn=Na(Wr(),1);function on(e){return typeof e=="undefined"||e===null}function qa(e){return typeof e=="object"&&e!==null}function Ha(e){return Array.isArray(e)?e:on(e)?[]:[e]}function ja(e,p){var t,n,o,c;if(p)for(c=Object.keys(p),t=0,n=c.length;t<n;t+=1)o=c[t],e[o]=p[o];return e}function Wa(e,p){var t="",n;for(n=0;n<p;n+=1)t+=e;return t}function Ya(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var $a=on,Ka=qa,Ua=Ha,Va=Wa,Ga=Ya,Xa=ja,vt={isNothing:$a,isObject:Ka,toArray:Ua,repeat:Va,isNegativeZero:Ga,extend:Xa};function sn(e,p){var t="",n=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(t+='in "'+e.mark.name+'" '),t+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!p&&e.mark.snippet&&(t+=`

`+e.mark.snippet),n+" "+t):n}function Ri(e,p){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=p,this.message=sn(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Ri.prototype=Object.create(Error.prototype);Ri.prototype.constructor=Ri;Ri.prototype.toString=function(p){return this.name+": "+sn(this,p)};var Et=Ri;function yr(e,p,t,n,o){var c="",s="",l=Math.floor(o/2)-1;return n-p>l&&(c=" ... ",p=n-l+c.length),t-n>l&&(s=" ...",t=n+l-s.length),{str:c+e.slice(p,t).replace(/\t/g,"\u2192")+s,pos:n-p+c.length}}function vr(e,p){return vt.repeat(" ",p-e.length)+e}function Ja(e,p){if(p=Object.create(p||null),!e.buffer)return null;p.maxLength||(p.maxLength=79),typeof p.indent!="number"&&(p.indent=1),typeof p.linesBefore!="number"&&(p.linesBefore=3),typeof p.linesAfter!="number"&&(p.linesAfter=2);for(var t=/\r?\n|\r|\0/g,n=[0],o=[],c,s=-1;c=t.exec(e.buffer);)o.push(c.index),n.push(c.index+c[0].length),e.position<=c.index&&s<0&&(s=n.length-2);s<0&&(s=n.length-1);var l="",u,f,v=Math.min(e.line+p.linesAfter,o.length).toString().length,m=p.maxLength-(p.indent+v+3);for(u=1;u<=p.linesBefore&&!(s-u<0);u++)f=yr(e.buffer,n[s-u],o[s-u],e.position-(n[s]-n[s-u]),m),l=vt.repeat(" ",p.indent)+vr((e.line-u+1).toString(),v)+" | "+f.str+`
`+l;for(f=yr(e.buffer,n[s],o[s],e.position,m),l+=vt.repeat(" ",p.indent)+vr((e.line+1).toString(),v)+" | "+f.str+`
`,l+=vt.repeat("-",p.indent+v+3+f.pos)+`^
`,u=1;u<=p.linesAfter&&!(s+u>=o.length);u++)f=yr(e.buffer,n[s+u],o[s+u],e.position-(n[s]-n[s+u]),m),l+=vt.repeat(" ",p.indent)+vr((e.line+u+1).toString(),v)+" | "+f.str+`
`;return l.replace(/\n$/,"")}var Qa=Ja,Za=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],eo=["scalar","sequence","mapping"];function to(e){var p={};return e!==null&&Object.keys(e).forEach(function(t){e[t].forEach(function(n){p[String(n)]=t})}),p}function io(e,p){if(p=p||{},Object.keys(p).forEach(function(t){if(Za.indexOf(t)===-1)throw new Et('Unknown option "'+t+'" is met in definition of "'+e+'" YAML type.')}),this.options=p,this.tag=e,this.kind=p.kind||null,this.resolve=p.resolve||function(){return!0},this.construct=p.construct||function(t){return t},this.instanceOf=p.instanceOf||null,this.predicate=p.predicate||null,this.represent=p.represent||null,this.representName=p.representName||null,this.defaultStyle=p.defaultStyle||null,this.multi=p.multi||!1,this.styleAliases=to(p.styleAliases||null),eo.indexOf(this.kind)===-1)throw new Et('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var _t=io;function Yr(e,p){var t=[];return e[p].forEach(function(n){var o=t.length;t.forEach(function(c,s){c.tag===n.tag&&c.kind===n.kind&&c.multi===n.multi&&(o=s)}),t[o]=n}),t}function ro(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},p,t;function n(o){o.multi?(e.multi[o.kind].push(o),e.multi.fallback.push(o)):e[o.kind][o.tag]=e.fallback[o.tag]=o}for(p=0,t=arguments.length;p<t;p+=1)arguments[p].forEach(n);return e}function _r(e){return this.extend(e)}_r.prototype.extend=function(p){var t=[],n=[];if(p instanceof _t)n.push(p);else if(Array.isArray(p))n=n.concat(p);else if(p&&(Array.isArray(p.implicit)||Array.isArray(p.explicit)))p.implicit&&(t=t.concat(p.implicit)),p.explicit&&(n=n.concat(p.explicit));else throw new Et("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");t.forEach(function(c){if(!(c instanceof _t))throw new Et("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(c.loadKind&&c.loadKind!=="scalar")throw new Et("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(c.multi)throw new Et("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),n.forEach(function(c){if(!(c instanceof _t))throw new Et("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var o=Object.create(_r.prototype);return o.implicit=(this.implicit||[]).concat(t),o.explicit=(this.explicit||[]).concat(n),o.compiledImplicit=Yr(o,"implicit"),o.compiledExplicit=Yr(o,"explicit"),o.compiledTypeMap=ro(o.compiledImplicit,o.compiledExplicit),o};var cn=_r,ln=new _t("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),dn=new _t("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),un=new _t("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),pn=new cn({explicit:[ln,dn,un]});function no(e){if(e===null)return!0;var p=e.length;return p===1&&e==="~"||p===4&&(e==="null"||e==="Null"||e==="NULL")}function ao(){return null}function oo(e){return e===null}var hn=new _t("tag:yaml.org,2002:null",{kind:"scalar",resolve:no,construct:ao,predicate:oo,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function so(e){if(e===null)return!1;var p=e.length;return p===4&&(e==="true"||e==="True"||e==="TRUE")||p===5&&(e==="false"||e==="False"||e==="FALSE")}function co(e){return e==="true"||e==="True"||e==="TRUE"}function lo(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var fn=new _t("tag:yaml.org,2002:bool",{kind:"scalar",resolve:so,construct:co,predicate:lo,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function uo(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function po(e){return 48<=e&&e<=55}function ho(e){return 48<=e&&e<=57}function fo(e){if(e===null)return!1;var p=e.length,t=0,n=!1,o;if(!p)return!1;if(o=e[t],(o==="-"||o==="+")&&(o=e[++t]),o==="0"){if(t+1===p)return!0;if(o=e[++t],o==="b"){for(t++;t<p;t++)if(o=e[t],o!=="_"){if(o!=="0"&&o!=="1")return!1;n=!0}return n&&o!=="_"}if(o==="x"){for(t++;t<p;t++)if(o=e[t],o!=="_"){if(!uo(e.charCodeAt(t)))return!1;n=!0}return n&&o!=="_"}if(o==="o"){for(t++;t<p;t++)if(o=e[t],o!=="_"){if(!po(e.charCodeAt(t)))return!1;n=!0}return n&&o!=="_"}}if(o==="_")return!1;for(;t<p;t++)if(o=e[t],o!=="_"){if(!ho(e.charCodeAt(t)))return!1;n=!0}return!(!n||o==="_")}function go(e){var p=e,t=1,n;if(p.indexOf("_")!==-1&&(p=p.replace(/_/g,"")),n=p[0],(n==="-"||n==="+")&&(n==="-"&&(t=-1),p=p.slice(1),n=p[0]),p==="0")return 0;if(n==="0"){if(p[1]==="b")return t*parseInt(p.slice(2),2);if(p[1]==="x")return t*parseInt(p.slice(2),16);if(p[1]==="o")return t*parseInt(p.slice(2),8)}return t*parseInt(p,10)}function mo(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!vt.isNegativeZero(e)}var gn=new _t("tag:yaml.org,2002:int",{kind:"scalar",resolve:fo,construct:go,predicate:mo,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),yo=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function vo(e){return!(e===null||!yo.test(e)||e[e.length-1]==="_")}function bo(e){var p,t;return p=e.replace(/_/g,"").toLowerCase(),t=p[0]==="-"?-1:1,"+-".indexOf(p[0])>=0&&(p=p.slice(1)),p===".inf"?t===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:p===".nan"?NaN:t*parseFloat(p,10)}var _o=/^[-+]?[0-9]+e/;function xo(e,p){var t;if(isNaN(e))switch(p){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(p){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(p){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(vt.isNegativeZero(e))return"-0.0";return t=e.toString(10),_o.test(t)?t.replace("e",".e"):t}function wo(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||vt.isNegativeZero(e))}var mn=new _t("tag:yaml.org,2002:float",{kind:"scalar",resolve:vo,construct:bo,predicate:wo,represent:xo,defaultStyle:"lowercase"}),yn=pn.extend({implicit:[hn,fn,gn,mn]}),vn=yn,bn=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),_n=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function So(e){return e===null?!1:bn.exec(e)!==null||_n.exec(e)!==null}function ko(e){var p,t,n,o,c,s,l,u=0,f=null,v,m,y;if(p=bn.exec(e),p===null&&(p=_n.exec(e)),p===null)throw new Error("Date resolve error");if(t=+p[1],n=+p[2]-1,o=+p[3],!p[4])return new Date(Date.UTC(t,n,o));if(c=+p[4],s=+p[5],l=+p[6],p[7]){for(u=p[7].slice(0,3);u.length<3;)u+="0";u=+u}return p[9]&&(v=+p[10],m=+(p[11]||0),f=(v*60+m)*6e4,p[9]==="-"&&(f=-f)),y=new Date(Date.UTC(t,n,o,c,s,l,u)),f&&y.setTime(y.getTime()-f),y}function Co(e){return e.toISOString()}var xn=new _t("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:So,construct:ko,instanceOf:Date,represent:Co});function Eo(e){return e==="<<"||e===null}var wn=new _t("tag:yaml.org,2002:merge",{kind:"scalar",resolve:Eo}),Cr=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function Ao(e){if(e===null)return!1;var p,t,n=0,o=e.length,c=Cr;for(t=0;t<o;t++)if(p=c.indexOf(e.charAt(t)),!(p>64)){if(p<0)return!1;n+=6}return n%8===0}function To(e){var p,t,n=e.replace(/[\r\n=]/g,""),o=n.length,c=Cr,s=0,l=[];for(p=0;p<o;p++)p%4===0&&p&&(l.push(s>>16&255),l.push(s>>8&255),l.push(s&255)),s=s<<6|c.indexOf(n.charAt(p));return t=o%4*6,t===0?(l.push(s>>16&255),l.push(s>>8&255),l.push(s&255)):t===18?(l.push(s>>10&255),l.push(s>>2&255)):t===12&&l.push(s>>4&255),new Uint8Array(l)}function Oo(e){var p="",t=0,n,o,c=e.length,s=Cr;for(n=0;n<c;n++)n%3===0&&n&&(p+=s[t>>18&63],p+=s[t>>12&63],p+=s[t>>6&63],p+=s[t&63]),t=(t<<8)+e[n];return o=c%3,o===0?(p+=s[t>>18&63],p+=s[t>>12&63],p+=s[t>>6&63],p+=s[t&63]):o===2?(p+=s[t>>10&63],p+=s[t>>4&63],p+=s[t<<2&63],p+=s[64]):o===1&&(p+=s[t>>2&63],p+=s[t<<4&63],p+=s[64],p+=s[64]),p}function zo(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var Sn=new _t("tag:yaml.org,2002:binary",{kind:"scalar",resolve:Ao,construct:To,predicate:zo,represent:Oo}),Mo=Object.prototype.hasOwnProperty,Lo=Object.prototype.toString;function Po(e){if(e===null)return!0;var p=[],t,n,o,c,s,l=e;for(t=0,n=l.length;t<n;t+=1){if(o=l[t],s=!1,Lo.call(o)!=="[object Object]")return!1;for(c in o)if(Mo.call(o,c))if(!s)s=!0;else return!1;if(!s)return!1;if(p.indexOf(c)===-1)p.push(c);else return!1}return!0}function Ro(e){return e!==null?e:[]}var kn=new _t("tag:yaml.org,2002:omap",{kind:"sequence",resolve:Po,construct:Ro}),Io=Object.prototype.toString;function Do(e){if(e===null)return!0;var p,t,n,o,c,s=e;for(c=new Array(s.length),p=0,t=s.length;p<t;p+=1){if(n=s[p],Io.call(n)!=="[object Object]"||(o=Object.keys(n),o.length!==1))return!1;c[p]=[o[0],n[o[0]]]}return!0}function Fo(e){if(e===null)return[];var p,t,n,o,c,s=e;for(c=new Array(s.length),p=0,t=s.length;p<t;p+=1)n=s[p],o=Object.keys(n),c[p]=[o[0],n[o[0]]];return c}var Cn=new _t("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:Do,construct:Fo}),Bo=Object.prototype.hasOwnProperty;function No(e){if(e===null)return!0;var p,t=e;for(p in t)if(Bo.call(t,p)&&t[p]!==null)return!1;return!0}function qo(e){return e!==null?e:{}}var En=new _t("tag:yaml.org,2002:set",{kind:"mapping",resolve:No,construct:qo}),Er=vn.extend({implicit:[xn,wn],explicit:[Sn,kn,Cn,En]}),Zt=Object.prototype.hasOwnProperty,er=1,An=2,Tn=3,tr=4,br=1,Ho=2,$r=3,jo=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,Wo=/[\x85\u2028\u2029]/,Yo=/[,\[\]\{\}]/,On=/^(?:!|!!|![a-z\-]+!)$/i,zn=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function Kr(e){return Object.prototype.toString.call(e)}function jt(e){return e===10||e===13}function si(e){return e===9||e===32}function zt(e){return e===9||e===32||e===10||e===13}function gi(e){return e===44||e===91||e===93||e===123||e===125}function $o(e){var p;return 48<=e&&e<=57?e-48:(p=e|32,97<=p&&p<=102?p-97+10:-1)}function Ko(e){return e===120?2:e===117?4:e===85?8:0}function Uo(e){return 48<=e&&e<=57?e-48:-1}function Ur(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"\x85":e===95?"\xA0":e===76?"\u2028":e===80?"\u2029":""}function Vo(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}var Mn=new Array(256),Ln=new Array(256);for(oi=0;oi<256;oi++)Mn[oi]=Ur(oi)?1:0,Ln[oi]=Ur(oi);var oi;function Go(e,p){this.input=e,this.filename=p.filename||null,this.schema=p.schema||Er,this.onWarning=p.onWarning||null,this.legacy=p.legacy||!1,this.json=p.json||!1,this.listener=p.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function Pn(e,p){var t={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return t.snippet=Qa(t),new Et(p,t)}function _e(e,p){throw Pn(e,p)}function ir(e,p){e.onWarning&&e.onWarning.call(null,Pn(e,p))}var Vr={YAML:function(p,t,n){var o,c,s;p.version!==null&&_e(p,"duplication of %YAML directive"),n.length!==1&&_e(p,"YAML directive accepts exactly one argument"),o=/^([0-9]+)\.([0-9]+)$/.exec(n[0]),o===null&&_e(p,"ill-formed argument of the YAML directive"),c=parseInt(o[1],10),s=parseInt(o[2],10),c!==1&&_e(p,"unacceptable YAML version of the document"),p.version=n[0],p.checkLineBreaks=s<2,s!==1&&s!==2&&ir(p,"unsupported YAML version of the document")},TAG:function(p,t,n){var o,c;n.length!==2&&_e(p,"TAG directive accepts exactly two arguments"),o=n[0],c=n[1],On.test(o)||_e(p,"ill-formed tag handle (first argument) of the TAG directive"),Zt.call(p.tagMap,o)&&_e(p,'there is a previously declared suffix for "'+o+'" tag handle'),zn.test(c)||_e(p,"ill-formed tag prefix (second argument) of the TAG directive");try{c=decodeURIComponent(c)}catch{_e(p,"tag prefix is malformed: "+c)}p.tagMap[o]=c}};function Qt(e,p,t,n){var o,c,s,l;if(p<t){if(l=e.input.slice(p,t),n)for(o=0,c=l.length;o<c;o+=1)s=l.charCodeAt(o),s===9||32<=s&&s<=1114111||_e(e,"expected valid JSON character");else jo.test(l)&&_e(e,"the stream contains non-printable characters");e.result+=l}}function Gr(e,p,t,n){var o,c,s,l;for(vt.isObject(t)||_e(e,"cannot merge mappings; the provided source object is unacceptable"),o=Object.keys(t),s=0,l=o.length;s<l;s+=1)c=o[s],Zt.call(p,c)||(p[c]=t[c],n[c]=!0)}function mi(e,p,t,n,o,c,s,l,u){var f,v;if(Array.isArray(o))for(o=Array.prototype.slice.call(o),f=0,v=o.length;f<v;f+=1)Array.isArray(o[f])&&_e(e,"nested arrays are not supported inside keys"),typeof o=="object"&&Kr(o[f])==="[object Object]"&&(o[f]="[object Object]");if(typeof o=="object"&&Kr(o)==="[object Object]"&&(o="[object Object]"),o=String(o),p===null&&(p={}),n==="tag:yaml.org,2002:merge")if(Array.isArray(c))for(f=0,v=c.length;f<v;f+=1)Gr(e,p,c[f],t);else Gr(e,p,c,t);else!e.json&&!Zt.call(t,o)&&Zt.call(p,o)&&(e.line=s||e.line,e.lineStart=l||e.lineStart,e.position=u||e.position,_e(e,"duplicated mapping key")),o==="__proto__"?Object.defineProperty(p,o,{configurable:!0,enumerable:!0,writable:!0,value:c}):p[o]=c,delete t[o];return p}function Ar(e){var p;p=e.input.charCodeAt(e.position),p===10?e.position++:p===13?(e.position++,e.input.charCodeAt(e.position)===10&&e.position++):_e(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}function pt(e,p,t){for(var n=0,o=e.input.charCodeAt(e.position);o!==0;){for(;si(o);)o===9&&e.firstTabInLine===-1&&(e.firstTabInLine=e.position),o=e.input.charCodeAt(++e.position);if(p&&o===35)do o=e.input.charCodeAt(++e.position);while(o!==10&&o!==13&&o!==0);if(jt(o))for(Ar(e),o=e.input.charCodeAt(e.position),n++,e.lineIndent=0;o===32;)e.lineIndent++,o=e.input.charCodeAt(++e.position);else break}return t!==-1&&n!==0&&e.lineIndent<t&&ir(e,"deficient indentation"),n}function ar(e){var p=e.position,t;return t=e.input.charCodeAt(p),!!((t===45||t===46)&&t===e.input.charCodeAt(p+1)&&t===e.input.charCodeAt(p+2)&&(p+=3,t=e.input.charCodeAt(p),t===0||zt(t)))}function Tr(e,p){p===1?e.result+=" ":p>1&&(e.result+=vt.repeat(`
`,p-1))}function Xo(e,p,t){var n,o,c,s,l,u,f,v,m=e.kind,y=e.result,x;if(x=e.input.charCodeAt(e.position),zt(x)||gi(x)||x===35||x===38||x===42||x===33||x===124||x===62||x===39||x===34||x===37||x===64||x===96||(x===63||x===45)&&(o=e.input.charCodeAt(e.position+1),zt(o)||t&&gi(o)))return!1;for(e.kind="scalar",e.result="",c=s=e.position,l=!1;x!==0;){if(x===58){if(o=e.input.charCodeAt(e.position+1),zt(o)||t&&gi(o))break}else if(x===35){if(n=e.input.charCodeAt(e.position-1),zt(n))break}else{if(e.position===e.lineStart&&ar(e)||t&&gi(x))break;if(jt(x))if(u=e.line,f=e.lineStart,v=e.lineIndent,pt(e,!1,-1),e.lineIndent>=p){l=!0,x=e.input.charCodeAt(e.position);continue}else{e.position=s,e.line=u,e.lineStart=f,e.lineIndent=v;break}}l&&(Qt(e,c,s,!1),Tr(e,e.line-u),c=s=e.position,l=!1),si(x)||(s=e.position+1),x=e.input.charCodeAt(++e.position)}return Qt(e,c,s,!1),e.result?!0:(e.kind=m,e.result=y,!1)}function Jo(e,p){var t,n,o;if(t=e.input.charCodeAt(e.position),t!==39)return!1;for(e.kind="scalar",e.result="",e.position++,n=o=e.position;(t=e.input.charCodeAt(e.position))!==0;)if(t===39)if(Qt(e,n,e.position,!0),t=e.input.charCodeAt(++e.position),t===39)n=e.position,e.position++,o=e.position;else return!0;else jt(t)?(Qt(e,n,o,!0),Tr(e,pt(e,!1,p)),n=o=e.position):e.position===e.lineStart&&ar(e)?_e(e,"unexpected end of the document within a single quoted scalar"):(e.position++,o=e.position);_e(e,"unexpected end of the stream within a single quoted scalar")}function Qo(e,p){var t,n,o,c,s,l;if(l=e.input.charCodeAt(e.position),l!==34)return!1;for(e.kind="scalar",e.result="",e.position++,t=n=e.position;(l=e.input.charCodeAt(e.position))!==0;){if(l===34)return Qt(e,t,e.position,!0),e.position++,!0;if(l===92){if(Qt(e,t,e.position,!0),l=e.input.charCodeAt(++e.position),jt(l))pt(e,!1,p);else if(l<256&&Mn[l])e.result+=Ln[l],e.position++;else if((s=Ko(l))>0){for(o=s,c=0;o>0;o--)l=e.input.charCodeAt(++e.position),(s=$o(l))>=0?c=(c<<4)+s:_e(e,"expected hexadecimal character");e.result+=Vo(c),e.position++}else _e(e,"unknown escape sequence");t=n=e.position}else jt(l)?(Qt(e,t,n,!0),Tr(e,pt(e,!1,p)),t=n=e.position):e.position===e.lineStart&&ar(e)?_e(e,"unexpected end of the document within a double quoted scalar"):(e.position++,n=e.position)}_e(e,"unexpected end of the stream within a double quoted scalar")}function Zo(e,p){var t=!0,n,o,c,s=e.tag,l,u=e.anchor,f,v,m,y,x,S=Object.create(null),w,T,R,C;if(C=e.input.charCodeAt(e.position),C===91)v=93,x=!1,l=[];else if(C===123)v=125,x=!0,l={};else return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=l),C=e.input.charCodeAt(++e.position);C!==0;){if(pt(e,!0,p),C=e.input.charCodeAt(e.position),C===v)return e.position++,e.tag=s,e.anchor=u,e.kind=x?"mapping":"sequence",e.result=l,!0;t?C===44&&_e(e,"expected the node content, but found ','"):_e(e,"missed comma between flow collection entries"),T=w=R=null,m=y=!1,C===63&&(f=e.input.charCodeAt(e.position+1),zt(f)&&(m=y=!0,e.position++,pt(e,!0,p))),n=e.line,o=e.lineStart,c=e.position,yi(e,p,er,!1,!0),T=e.tag,w=e.result,pt(e,!0,p),C=e.input.charCodeAt(e.position),(y||e.line===n)&&C===58&&(m=!0,C=e.input.charCodeAt(++e.position),pt(e,!0,p),yi(e,p,er,!1,!0),R=e.result),x?mi(e,l,S,T,w,R,n,o,c):m?l.push(mi(e,null,S,T,w,R,n,o,c)):l.push(w),pt(e,!0,p),C=e.input.charCodeAt(e.position),C===44?(t=!0,C=e.input.charCodeAt(++e.position)):t=!1}_e(e,"unexpected end of the stream within a flow collection")}function es(e,p){var t,n,o=br,c=!1,s=!1,l=p,u=0,f=!1,v,m;if(m=e.input.charCodeAt(e.position),m===124)n=!1;else if(m===62)n=!0;else return!1;for(e.kind="scalar",e.result="";m!==0;)if(m=e.input.charCodeAt(++e.position),m===43||m===45)br===o?o=m===43?$r:Ho:_e(e,"repeat of a chomping mode identifier");else if((v=Uo(m))>=0)v===0?_e(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):s?_e(e,"repeat of an indentation width identifier"):(l=p+v-1,s=!0);else break;if(si(m)){do m=e.input.charCodeAt(++e.position);while(si(m));if(m===35)do m=e.input.charCodeAt(++e.position);while(!jt(m)&&m!==0)}for(;m!==0;){for(Ar(e),e.lineIndent=0,m=e.input.charCodeAt(e.position);(!s||e.lineIndent<l)&&m===32;)e.lineIndent++,m=e.input.charCodeAt(++e.position);if(!s&&e.lineIndent>l&&(l=e.lineIndent),jt(m)){u++;continue}if(e.lineIndent<l){o===$r?e.result+=vt.repeat(`
`,c?1+u:u):o===br&&c&&(e.result+=`
`);break}for(n?si(m)?(f=!0,e.result+=vt.repeat(`
`,c?1+u:u)):f?(f=!1,e.result+=vt.repeat(`
`,u+1)):u===0?c&&(e.result+=" "):e.result+=vt.repeat(`
`,u):e.result+=vt.repeat(`
`,c?1+u:u),c=!0,s=!0,u=0,t=e.position;!jt(m)&&m!==0;)m=e.input.charCodeAt(++e.position);Qt(e,t,e.position,!1)}return!0}function Xr(e,p){var t,n=e.tag,o=e.anchor,c=[],s,l=!1,u;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=c),u=e.input.charCodeAt(e.position);u!==0&&(e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,_e(e,"tab characters must not be used in indentation")),!(u!==45||(s=e.input.charCodeAt(e.position+1),!zt(s))));){if(l=!0,e.position++,pt(e,!0,-1)&&e.lineIndent<=p){c.push(null),u=e.input.charCodeAt(e.position);continue}if(t=e.line,yi(e,p,Tn,!1,!0),c.push(e.result),pt(e,!0,-1),u=e.input.charCodeAt(e.position),(e.line===t||e.lineIndent>p)&&u!==0)_e(e,"bad indentation of a sequence entry");else if(e.lineIndent<p)break}return l?(e.tag=n,e.anchor=o,e.kind="sequence",e.result=c,!0):!1}function ts(e,p,t){var n,o,c,s,l,u,f=e.tag,v=e.anchor,m={},y=Object.create(null),x=null,S=null,w=null,T=!1,R=!1,C;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=m),C=e.input.charCodeAt(e.position);C!==0;){if(!T&&e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,_e(e,"tab characters must not be used in indentation")),n=e.input.charCodeAt(e.position+1),c=e.line,(C===63||C===58)&&zt(n))C===63?(T&&(mi(e,m,y,x,S,null,s,l,u),x=S=w=null),R=!0,T=!0,o=!0):T?(T=!1,o=!0):_e(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,C=n;else{if(s=e.line,l=e.lineStart,u=e.position,!yi(e,t,An,!1,!0))break;if(e.line===c){for(C=e.input.charCodeAt(e.position);si(C);)C=e.input.charCodeAt(++e.position);if(C===58)C=e.input.charCodeAt(++e.position),zt(C)||_e(e,"a whitespace character is expected after the key-value separator within a block mapping"),T&&(mi(e,m,y,x,S,null,s,l,u),x=S=w=null),R=!0,T=!1,o=!1,x=e.tag,S=e.result;else if(R)_e(e,"can not read an implicit mapping pair; a colon is missed");else return e.tag=f,e.anchor=v,!0}else if(R)_e(e,"can not read a block mapping entry; a multiline key may not be an implicit key");else return e.tag=f,e.anchor=v,!0}if((e.line===c||e.lineIndent>p)&&(T&&(s=e.line,l=e.lineStart,u=e.position),yi(e,p,tr,!0,o)&&(T?S=e.result:w=e.result),T||(mi(e,m,y,x,S,w,s,l,u),x=S=w=null),pt(e,!0,-1),C=e.input.charCodeAt(e.position)),(e.line===c||e.lineIndent>p)&&C!==0)_e(e,"bad indentation of a mapping entry");else if(e.lineIndent<p)break}return T&&mi(e,m,y,x,S,null,s,l,u),R&&(e.tag=f,e.anchor=v,e.kind="mapping",e.result=m),R}function is(e){var p,t=!1,n=!1,o,c,s;if(s=e.input.charCodeAt(e.position),s!==33)return!1;if(e.tag!==null&&_e(e,"duplication of a tag property"),s=e.input.charCodeAt(++e.position),s===60?(t=!0,s=e.input.charCodeAt(++e.position)):s===33?(n=!0,o="!!",s=e.input.charCodeAt(++e.position)):o="!",p=e.position,t){do s=e.input.charCodeAt(++e.position);while(s!==0&&s!==62);e.position<e.length?(c=e.input.slice(p,e.position),s=e.input.charCodeAt(++e.position)):_e(e,"unexpected end of the stream within a verbatim tag")}else{for(;s!==0&&!zt(s);)s===33&&(n?_e(e,"tag suffix cannot contain exclamation marks"):(o=e.input.slice(p-1,e.position+1),On.test(o)||_e(e,"named tag handle cannot contain such characters"),n=!0,p=e.position+1)),s=e.input.charCodeAt(++e.position);c=e.input.slice(p,e.position),Yo.test(c)&&_e(e,"tag suffix cannot contain flow indicator characters")}c&&!zn.test(c)&&_e(e,"tag name cannot contain such characters: "+c);try{c=decodeURIComponent(c)}catch{_e(e,"tag name is malformed: "+c)}return t?e.tag=c:Zt.call(e.tagMap,o)?e.tag=e.tagMap[o]+c:o==="!"?e.tag="!"+c:o==="!!"?e.tag="tag:yaml.org,2002:"+c:_e(e,'undeclared tag handle "'+o+'"'),!0}function rs(e){var p,t;if(t=e.input.charCodeAt(e.position),t!==38)return!1;for(e.anchor!==null&&_e(e,"duplication of an anchor property"),t=e.input.charCodeAt(++e.position),p=e.position;t!==0&&!zt(t)&&!gi(t);)t=e.input.charCodeAt(++e.position);return e.position===p&&_e(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(p,e.position),!0}function ns(e){var p,t,n;if(n=e.input.charCodeAt(e.position),n!==42)return!1;for(n=e.input.charCodeAt(++e.position),p=e.position;n!==0&&!zt(n)&&!gi(n);)n=e.input.charCodeAt(++e.position);return e.position===p&&_e(e,"name of an alias node must contain at least one character"),t=e.input.slice(p,e.position),Zt.call(e.anchorMap,t)||_e(e,'unidentified alias "'+t+'"'),e.result=e.anchorMap[t],pt(e,!0,-1),!0}function yi(e,p,t,n,o){var c,s,l,u=1,f=!1,v=!1,m,y,x,S,w,T;if(e.listener!==null&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,c=s=l=tr===t||Tn===t,n&&pt(e,!0,-1)&&(f=!0,e.lineIndent>p?u=1:e.lineIndent===p?u=0:e.lineIndent<p&&(u=-1)),u===1)for(;is(e)||rs(e);)pt(e,!0,-1)?(f=!0,l=c,e.lineIndent>p?u=1:e.lineIndent===p?u=0:e.lineIndent<p&&(u=-1)):l=!1;if(l&&(l=f||o),(u===1||tr===t)&&(er===t||An===t?w=p:w=p+1,T=e.position-e.lineStart,u===1?l&&(Xr(e,T)||ts(e,T,w))||Zo(e,w)?v=!0:(s&&es(e,w)||Jo(e,w)||Qo(e,w)?v=!0:ns(e)?(v=!0,(e.tag!==null||e.anchor!==null)&&_e(e,"alias node should not have any properties")):Xo(e,w,er===t)&&(v=!0,e.tag===null&&(e.tag="?")),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):u===0&&(v=l&&Xr(e,T))),e.tag===null)e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);else if(e.tag==="?"){for(e.result!==null&&e.kind!=="scalar"&&_e(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),m=0,y=e.implicitTypes.length;m<y;m+=1)if(S=e.implicitTypes[m],S.resolve(e.result)){e.result=S.construct(e.result),e.tag=S.tag,e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);break}}else if(e.tag!=="!"){if(Zt.call(e.typeMap[e.kind||"fallback"],e.tag))S=e.typeMap[e.kind||"fallback"][e.tag];else for(S=null,x=e.typeMap.multi[e.kind||"fallback"],m=0,y=x.length;m<y;m+=1)if(e.tag.slice(0,x[m].tag.length)===x[m].tag){S=x[m];break}S||_e(e,"unknown tag !<"+e.tag+">"),e.result!==null&&S.kind!==e.kind&&_e(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+S.kind+'", not "'+e.kind+'"'),S.resolve(e.result,e.tag)?(e.result=S.construct(e.result,e.tag),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):_e(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")}return e.listener!==null&&e.listener("close",e),e.tag!==null||e.anchor!==null||v}function as(e){var p=e.position,t,n,o,c=!1,s;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);(s=e.input.charCodeAt(e.position))!==0&&(pt(e,!0,-1),s=e.input.charCodeAt(e.position),!(e.lineIndent>0||s!==37));){for(c=!0,s=e.input.charCodeAt(++e.position),t=e.position;s!==0&&!zt(s);)s=e.input.charCodeAt(++e.position);for(n=e.input.slice(t,e.position),o=[],n.length<1&&_e(e,"directive name must not be less than one character in length");s!==0;){for(;si(s);)s=e.input.charCodeAt(++e.position);if(s===35){do s=e.input.charCodeAt(++e.position);while(s!==0&&!jt(s));break}if(jt(s))break;for(t=e.position;s!==0&&!zt(s);)s=e.input.charCodeAt(++e.position);o.push(e.input.slice(t,e.position))}s!==0&&Ar(e),Zt.call(Vr,n)?Vr[n](e,n,o):ir(e,'unknown document directive "'+n+'"')}if(pt(e,!0,-1),e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45?(e.position+=3,pt(e,!0,-1)):c&&_e(e,"directives end mark is expected"),yi(e,e.lineIndent-1,tr,!1,!0),pt(e,!0,-1),e.checkLineBreaks&&Wo.test(e.input.slice(p,e.position))&&ir(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&ar(e)){e.input.charCodeAt(e.position)===46&&(e.position+=3,pt(e,!0,-1));return}if(e.position<e.length-1)_e(e,"end of the stream or a document separator is expected");else return}function Rn(e,p){e=String(e),p=p||{},e.length!==0&&(e.charCodeAt(e.length-1)!==10&&e.charCodeAt(e.length-1)!==13&&(e+=`
`),e.charCodeAt(0)===65279&&(e=e.slice(1)));var t=new Go(e,p),n=e.indexOf("\0");for(n!==-1&&(t.position=n,_e(t,"null byte is not allowed in input")),t.input+="\0";t.input.charCodeAt(t.position)===32;)t.lineIndent+=1,t.position+=1;for(;t.position<t.length-1;)as(t);return t.documents}function os(e,p,t){p!==null&&typeof p=="object"&&typeof t=="undefined"&&(t=p,p=null);var n=Rn(e,t);if(typeof p!="function")return n;for(var o=0,c=n.length;o<c;o+=1)p(n[o])}function ss(e,p){var t=Rn(e,p);if(t.length!==0){if(t.length===1)return t[0];throw new Et("expected a single document in the stream, but found more")}}var cs=os,ls=ss,In={loadAll:cs,load:ls},Dn=Object.prototype.toString,Fn=Object.prototype.hasOwnProperty,Or=65279,ds=9,Ii=10,us=13,ps=32,hs=33,fs=34,xr=35,gs=37,ms=38,ys=39,vs=42,Bn=44,bs=45,rr=58,_s=61,xs=62,ws=63,Ss=64,Nn=91,qn=93,ks=96,Hn=123,Cs=124,jn=125,St={};St[0]="\\0";St[7]="\\a";St[8]="\\b";St[9]="\\t";St[10]="\\n";St[11]="\\v";St[12]="\\f";St[13]="\\r";St[27]="\\e";St[34]='\\"';St[92]="\\\\";St[133]="\\N";St[160]="\\_";St[8232]="\\L";St[8233]="\\P";var Es=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],As=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function Ts(e,p){var t,n,o,c,s,l,u;if(p===null)return{};for(t={},n=Object.keys(p),o=0,c=n.length;o<c;o+=1)s=n[o],l=String(p[s]),s.slice(0,2)==="!!"&&(s="tag:yaml.org,2002:"+s.slice(2)),u=e.compiledTypeMap.fallback[s],u&&Fn.call(u.styleAliases,l)&&(l=u.styleAliases[l]),t[s]=l;return t}function Os(e){var p,t,n;if(p=e.toString(16).toUpperCase(),e<=255)t="x",n=2;else if(e<=65535)t="u",n=4;else if(e<=4294967295)t="U",n=8;else throw new Et("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+t+vt.repeat("0",n-p.length)+p}var zs=1,Di=2;function Ms(e){this.schema=e.schema||Er,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=vt.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=Ts(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.quotingType=e.quotingType==='"'?Di:zs,this.forceQuotes=e.forceQuotes||!1,this.replacer=typeof e.replacer=="function"?e.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function Jr(e,p){for(var t=vt.repeat(" ",p),n=0,o=-1,c="",s,l=e.length;n<l;)o=e.indexOf(`
`,n),o===-1?(s=e.slice(n),n=l):(s=e.slice(n,o+1),n=o+1),s.length&&s!==`
`&&(c+=t),c+=s;return c}function wr(e,p){return`
`+vt.repeat(" ",e.indent*p)}function Ls(e,p){var t,n,o;for(t=0,n=e.implicitTypes.length;t<n;t+=1)if(o=e.implicitTypes[t],o.resolve(p))return!0;return!1}function nr(e){return e===ps||e===ds}function Fi(e){return 32<=e&&e<=126||161<=e&&e<=55295&&e!==8232&&e!==8233||57344<=e&&e<=65533&&e!==Or||65536<=e&&e<=1114111}function Qr(e){return Fi(e)&&e!==Or&&e!==us&&e!==Ii}function Zr(e,p,t){var n=Qr(e),o=n&&!nr(e);return(t?n:n&&e!==Bn&&e!==Nn&&e!==qn&&e!==Hn&&e!==jn)&&e!==xr&&!(p===rr&&!o)||Qr(p)&&!nr(p)&&e===xr||p===rr&&o}function Ps(e){return Fi(e)&&e!==Or&&!nr(e)&&e!==bs&&e!==ws&&e!==rr&&e!==Bn&&e!==Nn&&e!==qn&&e!==Hn&&e!==jn&&e!==xr&&e!==ms&&e!==vs&&e!==hs&&e!==Cs&&e!==_s&&e!==xs&&e!==ys&&e!==fs&&e!==gs&&e!==Ss&&e!==ks}function Rs(e){return!nr(e)&&e!==rr}function Pi(e,p){var t=e.charCodeAt(p),n;return t>=55296&&t<=56319&&p+1<e.length&&(n=e.charCodeAt(p+1),n>=56320&&n<=57343)?(t-55296)*1024+n-56320+65536:t}function Wn(e){var p=/^\n* /;return p.test(e)}var Yn=1,Sr=2,$n=3,Kn=4,fi=5;function Is(e,p,t,n,o,c,s,l){var u,f=0,v=null,m=!1,y=!1,x=n!==-1,S=-1,w=Ps(Pi(e,0))&&Rs(Pi(e,e.length-1));if(p||s)for(u=0;u<e.length;f>=65536?u+=2:u++){if(f=Pi(e,u),!Fi(f))return fi;w=w&&Zr(f,v,l),v=f}else{for(u=0;u<e.length;f>=65536?u+=2:u++){if(f=Pi(e,u),f===Ii)m=!0,x&&(y=y||u-S-1>n&&e[S+1]!==" ",S=u);else if(!Fi(f))return fi;w=w&&Zr(f,v,l),v=f}y=y||x&&u-S-1>n&&e[S+1]!==" "}return!m&&!y?w&&!s&&!o(e)?Yn:c===Di?fi:Sr:t>9&&Wn(e)?fi:s?c===Di?fi:Sr:y?Kn:$n}function Ds(e,p,t,n,o){e.dump=(function(){if(p.length===0)return e.quotingType===Di?'""':"''";if(!e.noCompatMode&&(Es.indexOf(p)!==-1||As.test(p)))return e.quotingType===Di?'"'+p+'"':"'"+p+"'";var c=e.indent*Math.max(1,t),s=e.lineWidth===-1?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-c),l=n||e.flowLevel>-1&&t>=e.flowLevel;function u(f){return Ls(e,f)}switch(Is(p,l,e.indent,s,u,e.quotingType,e.forceQuotes&&!n,o)){case Yn:return p;case Sr:return"'"+p.replace(/'/g,"''")+"'";case $n:return"|"+en(p,e.indent)+tn(Jr(p,c));case Kn:return">"+en(p,e.indent)+tn(Jr(Fs(p,s),c));case fi:return'"'+Bs(p)+'"';default:throw new Et("impossible error: invalid scalar style")}})()}function en(e,p){var t=Wn(e)?String(p):"",n=e[e.length-1]===`
`,o=n&&(e[e.length-2]===`
`||e===`
`),c=o?"+":n?"":"-";return t+c+`
`}function tn(e){return e[e.length-1]===`
`?e.slice(0,-1):e}function Fs(e,p){for(var t=/(\n+)([^\n]*)/g,n=(function(){var f=e.indexOf(`
`);return f=f!==-1?f:e.length,t.lastIndex=f,rn(e.slice(0,f),p)})(),o=e[0]===`
`||e[0]===" ",c,s;s=t.exec(e);){var l=s[1],u=s[2];c=u[0]===" ",n+=l+(!o&&!c&&u!==""?`
`:"")+rn(u,p),o=c}return n}function rn(e,p){if(e===""||e[0]===" ")return e;for(var t=/ [^ ]/g,n,o=0,c,s=0,l=0,u="";n=t.exec(e);)l=n.index,l-o>p&&(c=s>o?s:l,u+=`
`+e.slice(o,c),o=c+1),s=l;return u+=`
`,e.length-o>p&&s>o?u+=e.slice(o,s)+`
`+e.slice(s+1):u+=e.slice(o),u.slice(1)}function Bs(e){for(var p="",t=0,n,o=0;o<e.length;t>=65536?o+=2:o++)t=Pi(e,o),n=St[t],!n&&Fi(t)?(p+=e[o],t>=65536&&(p+=e[o+1])):p+=n||Os(t);return p}function Ns(e,p,t){var n="",o=e.tag,c,s,l;for(c=0,s=t.length;c<s;c+=1)l=t[c],e.replacer&&(l=e.replacer.call(t,String(c),l)),($t(e,p,l,!1,!1)||typeof l=="undefined"&&$t(e,p,null,!1,!1))&&(n!==""&&(n+=","+(e.condenseFlow?"":" ")),n+=e.dump);e.tag=o,e.dump="["+n+"]"}function nn(e,p,t,n){var o="",c=e.tag,s,l,u;for(s=0,l=t.length;s<l;s+=1)u=t[s],e.replacer&&(u=e.replacer.call(t,String(s),u)),($t(e,p+1,u,!0,!0,!1,!0)||typeof u=="undefined"&&$t(e,p+1,null,!0,!0,!1,!0))&&((!n||o!=="")&&(o+=wr(e,p)),e.dump&&Ii===e.dump.charCodeAt(0)?o+="-":o+="- ",o+=e.dump);e.tag=c,e.dump=o||"[]"}function qs(e,p,t){var n="",o=e.tag,c=Object.keys(t),s,l,u,f,v;for(s=0,l=c.length;s<l;s+=1)v="",n!==""&&(v+=", "),e.condenseFlow&&(v+='"'),u=c[s],f=t[u],e.replacer&&(f=e.replacer.call(t,u,f)),$t(e,p,u,!1,!1)&&(e.dump.length>1024&&(v+="? "),v+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),$t(e,p,f,!1,!1)&&(v+=e.dump,n+=v));e.tag=o,e.dump="{"+n+"}"}function Hs(e,p,t,n){var o="",c=e.tag,s=Object.keys(t),l,u,f,v,m,y;if(e.sortKeys===!0)s.sort();else if(typeof e.sortKeys=="function")s.sort(e.sortKeys);else if(e.sortKeys)throw new Et("sortKeys must be a boolean or a function");for(l=0,u=s.length;l<u;l+=1)y="",(!n||o!=="")&&(y+=wr(e,p)),f=s[l],v=t[f],e.replacer&&(v=e.replacer.call(t,f,v)),$t(e,p+1,f,!0,!0,!0)&&(m=e.tag!==null&&e.tag!=="?"||e.dump&&e.dump.length>1024,m&&(e.dump&&Ii===e.dump.charCodeAt(0)?y+="?":y+="? "),y+=e.dump,m&&(y+=wr(e,p)),$t(e,p+1,v,!0,m)&&(e.dump&&Ii===e.dump.charCodeAt(0)?y+=":":y+=": ",y+=e.dump,o+=y));e.tag=c,e.dump=o||"{}"}function an(e,p,t){var n,o,c,s,l,u;for(o=t?e.explicitTypes:e.implicitTypes,c=0,s=o.length;c<s;c+=1)if(l=o[c],(l.instanceOf||l.predicate)&&(!l.instanceOf||typeof p=="object"&&p instanceof l.instanceOf)&&(!l.predicate||l.predicate(p))){if(t?l.multi&&l.representName?e.tag=l.representName(p):e.tag=l.tag:e.tag="?",l.represent){if(u=e.styleMap[l.tag]||l.defaultStyle,Dn.call(l.represent)==="[object Function]")n=l.represent(p,u);else if(Fn.call(l.represent,u))n=l.represent[u](p,u);else throw new Et("!<"+l.tag+'> tag resolver accepts not "'+u+'" style');e.dump=n}return!0}return!1}function $t(e,p,t,n,o,c,s){e.tag=null,e.dump=t,an(e,t,!1)||an(e,t,!0);var l=Dn.call(e.dump),u=n,f;n&&(n=e.flowLevel<0||e.flowLevel>p);var v=l==="[object Object]"||l==="[object Array]",m,y;if(v&&(m=e.duplicates.indexOf(t),y=m!==-1),(e.tag!==null&&e.tag!=="?"||y||e.indent!==2&&p>0)&&(o=!1),y&&e.usedDuplicates[m])e.dump="*ref_"+m;else{if(v&&y&&!e.usedDuplicates[m]&&(e.usedDuplicates[m]=!0),l==="[object Object]")n&&Object.keys(e.dump).length!==0?(Hs(e,p,e.dump,o),y&&(e.dump="&ref_"+m+e.dump)):(qs(e,p,e.dump),y&&(e.dump="&ref_"+m+" "+e.dump));else if(l==="[object Array]")n&&e.dump.length!==0?(e.noArrayIndent&&!s&&p>0?nn(e,p-1,e.dump,o):nn(e,p,e.dump,o),y&&(e.dump="&ref_"+m+e.dump)):(Ns(e,p,e.dump),y&&(e.dump="&ref_"+m+" "+e.dump));else if(l==="[object String]")e.tag!=="?"&&Ds(e,e.dump,p,c,u);else{if(l==="[object Undefined]")return!1;if(e.skipInvalid)return!1;throw new Et("unacceptable kind of an object to dump "+l)}e.tag!==null&&e.tag!=="?"&&(f=encodeURI(e.tag[0]==="!"?e.tag.slice(1):e.tag).replace(/!/g,"%21"),e.tag[0]==="!"?f="!"+f:f.slice(0,18)==="tag:yaml.org,2002:"?f="!!"+f.slice(18):f="!<"+f+">",e.dump=f+" "+e.dump)}return!0}function js(e,p){var t=[],n=[],o,c;for(kr(e,t,n),o=0,c=n.length;o<c;o+=1)p.duplicates.push(t[n[o]]);p.usedDuplicates=new Array(c)}function kr(e,p,t){var n,o,c;if(e!==null&&typeof e=="object")if(o=p.indexOf(e),o!==-1)t.indexOf(o)===-1&&t.push(o);else if(p.push(e),Array.isArray(e))for(o=0,c=e.length;o<c;o+=1)kr(e[o],p,t);else for(n=Object.keys(e),o=0,c=n.length;o<c;o+=1)kr(e[n[o]],p,t)}function Ws(e,p){p=p||{};var t=new Ms(p);t.noRefs||js(e,t);var n=e;return t.replacer&&(n=t.replacer.call({"":n},"",n)),$t(t,0,n,!0,!0)?t.dump+`
`:""}var Ys=Ws,$s={dump:Ys};function zr(e,p){return function(){throw new Error("Function yaml."+e+" is removed in js-yaml 4. Use yaml."+p+" instead, which is now safe by default.")}}var Ks=_t,Us=cn,Vs=pn,Gs=yn,Xs=vn,Js=Er,Qs=In.load,Zs=In.loadAll,ec=$s.dump,tc=Et,ic={binary:Sn,float:mn,map:un,null:hn,pairs:Cn,set:En,timestamp:xn,bool:fn,int:gn,merge:wn,omap:kn,seq:dn,str:ln},rc=zr("safeLoad","load"),nc=zr("safeLoadAll","loadAll"),ac=zr("safeDump","dump"),oc={Type:Ks,Schema:Us,FAILSAFE_SCHEMA:Vs,JSON_SCHEMA:Gs,CORE_SCHEMA:Xs,DEFAULT_SCHEMA:Js,load:Qs,loadAll:Zs,dump:ec,YAMLException:tc,types:ic,safeLoad:rc,safeLoadAll:nc,safeDump:ac},Un=oc;window.interact||(window.interact=Vn.default);window.jsyaml||(window.jsyaml=Un);var sc="0.9.5";console.info(`%c drag-and-drop-card %c v${sc} `,"color:#fff;background:#03a9f4;font-weight:700;padding:2px 6px;border-radius:3px 0 0 3px","color:#03303a;background:#bdeaff;padding:2px 6px;border-radius:0 3px 3px 0");var cc=(e,...p)=>console.debug(`[drag-and-drop-card] ${e}`,...p);console.info("%c drag-and-drop-card loaded","color:#03a9f4;font-weight:700;");var Mr=()=>new Promise(e=>requestAnimationFrame(()=>e())),lc=()=>new Promise(e=>window.requestIdleCallback?requestIdleCallback(()=>e()):setTimeout(e,0)),ei=class e extends HTMLElement{constructor(){super();ut(this,"__booting",!1);ut(this,"_gridCanvas",null);ut(this,"_gridCtx",null);ut(this,"_gridCols",0);ut(this,"_gridRows",0);ut(this,"_gridCellSize",0);ut(this,"_gridDown",!1);ut(this,"_gridStartCol",-1);ut(this,"_gridStartRow",-1);ut(this,"_gridHoverCol",-1);ut(this,"_gridHoverRow",-1);ut(this,"_gridCurrCol",-1);ut(this,"_gridCurrRow",-1);ut(this,"_gridDirty",!1);ut(this,"_gridRAF",0);ut(this,"_gridTile",null);ut(this,"__gridPrevEditMode");ut(this,"__gridRO",null);ut(this,"__gridPollT",null);this.shadowRoot||this.attachShadow({mode:"open"}),this.__rebuiltCards=new WeakSet}_updateTabsA11y_(){var o;let t=this.tabsBar;if(!t)return;t.setAttribute("role","tablist"),t.querySelectorAll(".ddc-tab").forEach((c,s)=>{let l=c.classList.contains("active");c.setAttribute("role","tab"),c.setAttribute("aria-selected",String(l)),c.setAttribute("tabindex",l?"0":"-1"),c.dataset.index=String(s)}),this.__tabsKeyHandler||(this.__tabsKeyHandler=c=>{if(!["ArrowLeft","ArrowRight","Home","End"].includes(c.key))return;let l=Array.from(t.querySelectorAll(".ddc-tab"));if(!l.length)return;c.preventDefault();let u=l.findIndex(y=>y===document.activeElement),f=l.findIndex(y=>y.classList.contains("active")),v=u>=0?u:f>=0?f:0;c.key==="ArrowRight"&&(v=Math.min(l.length-1,v+1)),c.key==="ArrowLeft"&&(v=Math.max(0,v-1)),c.key==="Home"&&(v=0),c.key==="End"&&(v=l.length-1);let m=l[v];if(m){try{m.focus({preventScroll:!1})}catch{}m.click()}},t.addEventListener("keydown",this.__tabsKeyHandler)),this.__tabsScrollHandler||(this.__tabsScrollHandler=()=>{var c;return(c=this._updateTabOverflowShadows_)==null?void 0:c.call(this)},t.addEventListener("scroll",this.__tabsScrollHandler,{passive:!0})),(o=this._updateTabOverflowShadows_)==null||o.call(this)}_getCurrentDashboardUrlPath_(){let n=(window.location.pathname||"/").replace(/^\/+/,"").split("/")[0]||"lovelace";return n==="lovelace"?null:n}async _ensureCardIdSeededInStorage_(){var n;if((n=this.config)!=null&&n.id)return this.config.id;let t=crypto!=null&&crypto.randomUUID?crypto.randomUUID():"ddc_"+Math.random().toString(36).slice(2);this.config={...this.config,id:t};try{let o=this._getCurrentDashboardUrlPath_(),c=await this.hass.callWS(o?{type:"lovelace/config",url_path:o}:{type:"lovelace/config"}),s=this._findThisCardPathRecursive_(c,x=>(x==null?void 0:x.type)==="custom:drag-and-drop-card"&&(!x.id||x.id===t));if(!s)return t;let{viewIndex:l,cardIndex:u,parentPath:f}=s,v=c.views[l],y={...this._getCardByPath_(v,f,u),id:t};this._setCardByPath_(v,f,u,y),await this.hass.callWS(o?{type:"lovelace/config/save",url_path:o,config:c}:{type:"lovelace/config/save",config:c})}catch{}return t}async _persistThisCardConfigToStorage_(){var y,x;await this._ensureCardIdSeededInStorage_();let t={type:"custom:drag-and-drop-card",id:(y=this.config)==null?void 0:y.id,...this._config},n=this._getCurrentDashboardUrlPath_(),o=await this.hass.callWS(n?{type:"lovelace/config",url_path:n}:{type:"lovelace/config"}),c=this._findThisCardPathRecursive_(o,S=>{var w;return(S==null?void 0:S.type)==="custom:drag-and-drop-card"&&(S==null?void 0:S.id)===((w=this.config)==null?void 0:w.id)});if(!c)throw new Error("Card not found in Lovelace config");let{viewIndex:s,cardIndex:l,parentPath:u}=c,f=o.views[s],m={...this._getCardByPath_(f,u,l),...t};this._setCardByPath_(f,u,l,m),await this.hass.callWS(n?{type:"lovelace/config/save",url_path:n,config:o}:{type:"lovelace/config/save",config:o}),this.config=m,(x=this.requestUpdate)==null||x.call(this)}_findThisCardPathRecursive_(t,n){let o=(t==null?void 0:t.views)||[];for(let c=0;c<o.length;c++){let s=this._findInCardTree_(o[c],n);if(s)return{viewIndex:c,...s}}return null}_findInCardTree_(t,n,o=[]){var s;let c=(t==null?void 0:t.cards)||[];for(let l=0;l<c.length;l++){let u=c[l];if(n(u))return{cardIndex:l,parentPath:o};if((s=u==null?void 0:u.cards)!=null&&s.length){let f=this._findInCardTree_(u,n,o.concat(l));if(f)return f}}return null}_getCardByPath_(t,n,o){let c=t;for(let s of n||[])c=c.cards[s];return c.cards[o]}_setCardByPath_(t,n,o,c){let s=t;for(let l of n||[])s=s.cards[l];s.cards[o]=c}_ensureToolbarStyles_(){try{if(this.shadowRoot.querySelector("#ddc-toolbar-styles"))return;let n=document.createElement("style");n.id="ddc-toolbar-styles",n.textContent=`/* ===== Edit toolbar ===== */
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
  `,this.shadowRoot.appendChild(t)}_setHeaderVisible_(t=!0){var n,o,c,s,l,u;try{(((n=this._deepQueryAll)==null?void 0:n.call(this,"app-header, ha-top-app-bar, ha-top-app-bar-fixed, mwc-top-app-bar-fixed, ha-header-bar, app-toolbar, ha-toolbar"))||[]).forEach(S=>{S&&(S.dataset.ddcPrevDisplayHeader===void 0&&(S.dataset.ddcPrevDisplayHeader=S.style.display||"",S.dataset.ddcPrevMinH=S.style.minHeight||"",S.dataset.ddcPrevH=S.style.height||"",S.dataset.ddcPrevVis=S.style.visibility||""),t?(S.style.display=S.dataset.ddcPrevDisplayHeader||"",S.style.minHeight=S.dataset.ddcPrevMinH||"",S.style.height=S.dataset.ddcPrevH||"",S.style.visibility=S.dataset.ddcPrevVis||"",S.removeAttribute("hidden")):(S.style.display="none",S.style.minHeight="0",S.style.height="0",S.style.visibility="hidden",S.setAttribute("hidden","")))}),(((o=this._deepQueryAll)==null?void 0:o.call(this,'[slot="actionItems"], ha-icon-button, ha-button-menu, assist-button, search-input, ha-quick-bar, ha-mwc-menu'))||[]).forEach(S=>{S&&(S.dataset.ddcPrevDisplayAction===void 0&&(S.dataset.ddcPrevDisplayAction=S.style.display||"",S.dataset.ddcPrevVisAction=S.style.visibility||""),t?(S.style.display=S.dataset.ddcPrevDisplayAction||"",S.style.visibility=S.dataset.ddcPrevVisAction||""):(S.style.display="none",S.style.visibility="hidden"))}),[...((c=this._deepQueryAll)==null?void 0:c.call(this,"ha-app-layout"))||[],...((s=this._deepQueryAll)==null?void 0:s.call(this,"home-assistant-main"))||[],document.documentElement,document.body].filter(Boolean).forEach(S=>{if(S)if(S.dataset.ddcPrevHdrVars===void 0&&(S.dataset.ddcPrevHdrVars=JSON.stringify({mdc:S.style.getPropertyValue("--mdc-top-app-bar-height")||"",app:S.style.getPropertyValue("--app-header-height")||"",hdr:S.style.getPropertyValue("--header-height")||"",hah:S.style.getPropertyValue("--ha-header-height")||"",pad:S.style&&(S.style.paddingTop||"")||""})),t)try{let w=JSON.parse(S.dataset.ddcPrevHdrVars||"{}");S.style.setProperty("--mdc-top-app-bar-height",w.mdc||""),S.style.setProperty("--app-header-height",w.app||""),S.style.setProperty("--header-height",w.hdr||""),S.style.setProperty("--ha-header-height",w.hah||""),w.pad!==void 0&&(S.style.paddingTop=w.pad||"")}catch{}else{S.style.setProperty("--mdc-top-app-bar-height","0px"),S.style.setProperty("--app-header-height","0px"),S.style.setProperty("--header-height","0px"),S.style.setProperty("--ha-header-height","0px");try{S.style.paddingTop="0px"}catch{}}}),(((l=this._deepQueryAll)==null?void 0:l.call(this,"#contentContainer"))||[]).forEach(S=>{S&&(S.dataset.ddcPrevContentPadTop===void 0&&(S.dataset.ddcPrevContentPadTop=S.style&&(S.style.paddingTop||"")||""),S.style.paddingTop=t?S.dataset.ddcPrevContentPadTop||"":"0px")}),(((u=this._deepQueryAll)==null?void 0:u.call(this,".main-title"))||[]).forEach(S=>{S&&(S.dataset.ddcPrevDisplayTitle===void 0&&(S.dataset.ddcPrevDisplayTitle=S.style.display||"",S.dataset.ddcPrevVisTitle=S.style.visibility||""),t?(S.style.display=S.dataset.ddcPrevDisplayTitle||"",S.style.visibility=S.dataset.ddcPrevVisTitle||""):(S.style.display="none",S.style.visibility="hidden"))})}catch{}}_setSidebarVisible_(t=!0){var n,o;try{(((n=this._deepQueryAll)==null?void 0:n.call(this,"ha-sidebar"))||[]).forEach(l=>{l&&(l.dataset.ddcPrevDisplaySidebar===void 0&&(l.dataset.ddcPrevDisplaySidebar=l.style.display||""),l.style.display=t?l.dataset.ddcPrevDisplaySidebar||"":"none")}),(((o=this._deepQueryAll)==null?void 0:o.call(this,"ha-drawer"))||[]).forEach(l=>{if(l){l.dataset.ddcPrevDrawerWidth===void 0&&(l.dataset.ddcPrevDrawerWidth=l.style.getPropertyValue("--mdc-drawer-width")||""),t?l.style.setProperty("--mdc-drawer-width",l.dataset.ddcPrevDrawerWidth||""):l.style.setProperty("--mdc-drawer-width","0px");try{!t&&typeof l.close=="function"&&l.close()}catch{}}})}catch{}}_applyHaChromeVisibility_(){var t;try{let n=!!this.editMode||((t=this._isInHaEditorPreview)==null?void 0:t.call(this));n||!this.hideHaHeader?this._setHeaderVisible_(!0):this._setHeaderVisible_(!1),n||!this.hideHaSidebar?this._setSidebarVisible_(!0):this._setSidebarVisible_(!1)}catch{}}_applyBackgroundImageFromConfig(){var c;try{let s=navigator.userAgent||"";if(/iPad|iPhone|iPod/.test(s)&&n&&typeof n.src=="string"&&n.src.startsWith("data:")&&n.src.length>3e5){console.warn("[drag-and-drop-card] Skipping large inline background on iOS for stability.");return}}catch{}let t=this._config||{},n=t.background_image||t.bg_image||null,o=this.cardContainer;if(o)if(n&&n.src){let s=String(n.src).trim(),l=n.repeat===!0||n.repeat==="repeat"?"repeat":"no-repeat",u=Math.max(0,Math.min(1,Number((c=n.opacity)!=null?c:1))),f=n.size||"cover",v=n.position||"center center",m=n.attachment||"scroll",y=n.filter||"none";o.style.setProperty("--ddc-bg-image",s?`url("${s.replace(/"/g,'"')}")`:"none"),o.style.setProperty("--ddc-bg-repeat",l),o.style.setProperty("--ddc-bg-opacity",String(u)),o.style.setProperty("--ddc-bg-size",f),o.style.setProperty("--ddc-bg-position",v),o.style.setProperty("--ddc-bg-attachment",m),o.style.setProperty("--ddc-bg-filter",y),o.classList.add("has-bg-image")}else o.style.removeProperty("--ddc-bg-image"),o.style.removeProperty("--ddc-bg-repeat"),o.style.removeProperty("--ddc-bg-opacity"),o.style.removeProperty("--ddc-bg-size"),o.style.removeProperty("--ddc-bg-position"),o.style.removeProperty("--ddc-bg-attachment"),o.style.removeProperty("--ddc-bg-filter"),o.classList.remove("has-bg-image")}_applyBackgroundFromConfig(){var t,n,o,c,s,l,u,f;try{let v=((t=this._config)==null?void 0:t.background_mode)||((o=(n=this._config)==null?void 0:n.background_image)!=null&&o.src?"image":"none");if((c=this._destroyParticles_)==null||c.call(this),(s=this._destroyYouTube_)==null||s.call(this),v!=="image"){let m=this.cardContainer;m&&(m.style.removeProperty("--ddc-bg-image"),m.style.removeProperty("--ddc-bg-repeat"),m.style.removeProperty("--ddc-bg-opacity"),m.style.removeProperty("--ddc-bg-size"),m.style.removeProperty("--ddc-bg-position"),m.style.removeProperty("--ddc-bg-attachment"),m.style.removeProperty("--ddc-bg-filter"),m.classList.remove("has-bg-image"))}if(v==="image"){(l=this._applyBackgroundImageFromConfig)==null||l.call(this);return}if(v==="particles"){let m=((u=this._config)==null?void 0:u.background_particles)||{};this._attachParticlesBackground_(m);return}if(v==="youtube"){let m=((f=this._config)==null?void 0:f.background_youtube)||{};this._attachYouTubeBackground_(m);return}}catch(v){console.warn("[drag-and-drop-card] _applyBackgroundFromConfig failed:",v)}}_ensureBgHost_(){let t=this.cardContainer;if(!t)return null;let n=t.querySelector("#ddcBgHost");return n?n.innerHTML="":(n=document.createElement("div"),n.className="ddc-bg-host",n.id="ddcBgHost",n.setAttribute("aria-hidden","true"),t.prepend(n)),n}async _loadScriptOnce_(t){if(!t)throw new Error("script src required");if(this.__scriptCache||(this.__scriptCache=new Map),this.__scriptCache.has(t))return this.__scriptCache.get(t);let n=new Promise((o,c)=>{let s=document.createElement("script");s.src=t,s.async=!0,s.onload=()=>o(!0),s.onerror=()=>c(new Error("failed to load "+t)),document.head.appendChild(s)});return this.__scriptCache.set(t,n),n}_getRenderRoot_(){return this.renderRoot||this.shadowRoot||this}_withScopedDocument_(t){let n=this._getRenderRoot_();if(!n||n===document||!n.querySelector)return t();let o=document,c=o.getElementById.bind(o),s=o.querySelector?o.querySelector.bind(o):null;o.getElementById=l=>{try{let u=window.CSS&&CSS.escape?CSS.escape(String(l)):String(l);return n.querySelector("#"+u)||c(l)}catch{return c(l)}},s&&(o.querySelector=l=>{try{return n.querySelector(l)||s(l)}catch{return s(l)}});try{return t()}finally{o.getElementById=c,s&&(o.querySelector=s)}}async _ensureParticles_(){if(window.particlesJS)return!0;if(!this.__particlesLoadPromise){let t=n=>new Promise((o,c)=>{let s=document.createElement("script");s.src=n,s.async=!0,s.onload=()=>o(!0),s.onerror=()=>c(new Error("Failed to load "+n)),document.head.appendChild(s)});this.__particlesLoadPromise=t("/local/particles.min.js").catch(()=>t("https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js")).then(()=>!!window.particlesJS).catch(()=>!1)}return this.__particlesLoadPromise}_attachParticlesBackground_(t={}){var f,v;let n=(f=this._ensureBgHost_)==null?void 0:f.call(this);if(!n)return;try{(v=this._destroyParticles_)==null||v.call(this)}catch{}n.innerHTML="";let o=document.createElement("div");o.id="ddcParticles",o.className="particles-js",o.style.position="absolute",o.style.inset="0",n.appendChild(o);let c={particles:{number:{value:30,density:{enable:!0,value_area:1200}},color:{value:"#ffffff"},shape:{type:"circle"},opacity:{value:.35},size:{value:2.5,random:!0},line_linked:{enable:!1,distance:150,color:"#ffffff",opacity:.3,width:1},move:{enable:!0,speed:.7,out_mode:"out"}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1},onclick:{enable:!1},resize:!0},modes:{repulse:{distance:100},push:{particles_nb:3}}},retina_detect:!1},s=!!t.pointer_events,l=t.config||JSON.parse(JSON.stringify(c));s?(l.interactivity.events.onhover={enable:!0,mode:"repulse"},l.interactivity.events.onclick={enable:!0,mode:"push"},n.style.pointerEvents="auto"):n.style.pointerEvents="none",(async()=>{var x;if(!await((x=this._ensureParticles_)==null?void 0:x.call(this))||!window.particlesJS)return;await(typeof requestAnimationFrame=="function"?new Promise(S=>requestAnimationFrame(()=>S())):Promise.resolve()),await(typeof requestAnimationFrame=="function"?new Promise(S=>requestAnimationFrame(()=>S())):Promise.resolve());let y=l;if(t.config_url)try{y=await(await fetch(t.config_url,{cache:"no-store"})).json()}catch(S){console.warn("[drag-and-drop-card] Failed to fetch particles config; falling back to defaults",S),y=l}this._withScopedDocument_(()=>{if(!Array.isArray(window.pJSDom))try{window.pJSDom=[]}catch{}window.particlesJS("ddcParticles",y)}),Array.isArray(window.pJSDom)&&window.pJSDom.length&&(this.__particlesInst=window.pJSDom[window.pJSDom.length-1])})(),this.__particlesHost=n}_destroyParticles_(){try{Array.isArray(window.pJSDom)||(window.pJSDom=[]),window.pJSDom.length&&(window.pJSDom.forEach(t=>{var n,o,c,s,l,u,f,v;try{(s=(c=(o=(n=t.pJS)==null?void 0:n.fn)==null?void 0:o.vendors)==null?void 0:c.destroy)==null||s.call(c)}catch{}try{(v=(f=(u=(l=t.pJS)==null?void 0:l.fn)==null?void 0:u.vendors)==null?void 0:f.destroypJS)==null||v.call(f)}catch{}}),window.pJSDom.length=0)}catch{}this.__particlesHost&&(this.__particlesHost.innerHTML=""),this.__particlesHost=null,this.__particlesInst=null}_parseYouTubeId_(t){if(!t)return null;let n=String(t).trim(),o=n.match(/(?:youtube\.com\/.*[?&]v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([A-Za-z0-9_-]{11})/)||n.match(/^([A-Za-z0-9_-]{11})$/);return o?o[1]:null}async _ensureYouTube_(){var t;return(t=window.YT)!=null&&t.Player?!0:(this.__ytReadyPromise||(this.__ytReadyPromise=new Promise(n=>{var s;let o=()=>n(!0);if((s=window.YT)!=null&&s.Player)return o();window.onYouTubeIframeAPIReady=o;let c=document.createElement("script");c.src="https://www.youtube.com/iframe_api",c.async=!0,c.onerror=()=>n(!1),document.head.appendChild(c)})),this.__ytReadyPromise)}_attachYouTubeIframeDirect_(t,n,{start:o,end:c,mute:s=!0,loop:l=!0}={}){var m;let u=new URLSearchParams({autoplay:"1",mute:s?"1":"0",controls:"0",playsinline:"1",rel:"0",modestbranding:"1",iv_load_policy:"3",loop:l?"1":"0"});l&&u.set("playlist",n),Number.isFinite(o)&&u.set("start",String(o)),Number.isFinite(c)&&u.set("end",String(c));let f=`https://www.youtube.com/embed/${n}?${u.toString()}`,v=document.createElement("iframe");v.src=f,v.setAttribute("frameborder","0"),v.setAttribute("allow","autoplay; encrypted-media; picture-in-picture; fullscreen"),v.setAttribute("allowfullscreen","true"),v.style.position="absolute",v.style.inset="0",v.style.width="100%",v.style.height="100%",t.appendChild(v),this.__ytWrap=t,(m=this._layoutYtBackground_)==null||m.call(this)}_attachYouTubeBackground_(t={}){this.__ytSize=t.size||"cover",this.__ytPosition=t.position||"center",this.__ytOpacity=t.opacity!=null?Math.max(0,Math.min(1,Number(t.opacity))):1,this.__ytAttachment=t.attachment||"scroll";let n=String(this.__ytPosition).toLowerCase(),o=.5,c=.5;n.includes("left")?o=0:n.includes("right")&&(o=1),n.includes("top")?c=0:n.includes("bottom")&&(c=1),(n==="center"||n==="centre"||n==="middle")&&(o=.5,c=.5),this.__ytAx=o,this.__ytAy=c;let s=this._ensureBgHost_();if(!s)return;let l=this._parseYouTubeId_(t.video_id||t.url);if(!l){console.warn("[drag-and-drop-card] No YouTube video id");return}let u=document.createElement("div");u.className="yt-bg",this.__ytAttachment==="fixed"?(u.style.position="fixed",u.style.left="0",u.style.top="0",u.style.width="100%",u.style.height="100%"):(u.style.position="absolute",u.style.inset="0"),u.style.opacity=String(this.__ytOpacity),u.style.filter="none",u.style.pointerEvents="none",s.appendChild(u);let f=document.createElement("div");f.id="ddcYtFrame",f.style.position="absolute",f.style.left="0",f.style.top="0",f.style.width="100%",f.style.height="100%",u.appendChild(f);let v=Number.isFinite(t.start)?Number(t.start):void 0,m=Number.isFinite(t.end)?Number(t.end):void 0,y=t.mute!==!1,x=t.loop!==!1;(async()=>{if(!await this._ensureYouTube_()||!(window.YT&&window.YT.Player)){if(this._attachYouTubeIframeDirect_(u,l,{start:v,end:m,mute:y,loop:x}),!this.__ytResizeObs){this.__ytResizeObs=new ResizeObserver(()=>{var T;return(T=this._layoutYtBackground_)==null?void 0:T.call(this)});try{this.__ytResizeObs.observe(this.cardContainer)}catch{}window.addEventListener("resize",this.__ytOnWinResize=()=>{var T;return(T=this._layoutYtBackground_)==null?void 0:T.call(this)})}return}if(this.__ytPlayer=new window.YT.Player(f,{width:"100%",height:"100%",videoId:l,playerVars:{autoplay:1,controls:0,disablekb:1,fs:0,iv_load_policy:3,modestbranding:1,rel:0,playsinline:1,loop:x?1:0,playlist:x?l:void 0,start:v,end:m},events:{onReady:T=>{var R;try{y&&T.target.mute(),T.target.playVideo()}catch{}(R=this._layoutYtBackground_)==null||R.call(this)},onStateChange:T=>{if(T.data===window.YT.PlayerState.ENDED&&x)try{let R=Number.isFinite(v)?v:0,C=window.performance&&performance.now?performance.now():Date.now();(!this.__ytLastLoopAt||C-this.__ytLastLoopAt>1500)&&(this.__ytLastLoopAt=C,T.target.seekTo(R,!0),T.target.playVideo())}catch{}}}}),!this.__ytResizeObs){this.__ytResizeObs=new ResizeObserver(()=>{var T;return(T=this._layoutYtBackground_)==null?void 0:T.call(this)});try{this.__ytResizeObs.observe(this.cardContainer)}catch{}window.addEventListener("resize",this.__ytOnWinResize=()=>{var T;return(T=this._layoutYtBackground_)==null?void 0:T.call(this)})}})(),this.__ytWrap=u}_layoutYtBackground_(){var t,n,o,c,s,l,u,f;try{if(!this.__ytWrap)return;let v=this.__scaleOuter||this.cardContainer,m=0,y=0;try{m=parseFloat((n=(t=this.cardContainer)==null?void 0:t.style)==null?void 0:n.width)||((o=this.cardContainer)==null?void 0:o.scrollWidth)||((c=this.cardContainer)==null?void 0:c.offsetWidth)||0,y=parseFloat((l=(s=this.cardContainer)==null?void 0:s.style)==null?void 0:l.height)||((u=this.cardContainer)==null?void 0:u.scrollHeight)||((f=this.cardContainer)==null?void 0:f.offsetHeight)||0}catch{}let x,S;try{if(String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"){let U=v.getBoundingClientRect();if(x=U.width,m>0){let V=Math.min(x/m,1);S=y*V}else S=U.height}else x=m||v.getBoundingClientRect().width,S=y||v.getBoundingClientRect().height}catch{let F=v.getBoundingClientRect();x=F.width,S=F.height}let w=this.__ytAttachment==="fixed",T=w&&window.innerWidth||x,R=w&&window.innerHeight||S;if(!x||!S)return;let C=this.__ytSize||"cover",O=16/9,P=w?T/R:x/S,b,M,I=0,q=0;C==="100% 100%"||C==="fill"||C==="stretch"?(b=w?T:x,M=w?R:S,I=0,q=0):C==="contain"?P>O?(M=w?R:S,b=(w?R:S)*O,q=0,I=(x-b)/2):(b=w?T:x,M=(w?T:x)/O,I=0,q=(S-M)/2):P>O?(b=w?T:x,M=(w?T:x)/O,I=0,q=(S-M)/2):(M=w?R:S,b=(w?R:S)*O,q=0,I=(x-b)/2),this.__ytWrap.style.overflow="hidden";let K=this.__ytAx!=null?this.__ytAx:.5,Y=this.__ytAy!=null?this.__ytAy:.5;I=((w?T:x)-b)*K,q=((w?R:S)-M)*Y;let ie=this.__ytWrap.querySelector("iframe")||this.__ytWrap;ie.style.width=`${b}px`,ie.style.height=`${M}px`,ie.style.left=`${I}px`,ie.style.top=`${q}px`}catch{}}_destroyYouTube_(){var t,n,o;try{(n=(t=this.__ytPlayer)==null?void 0:t.destroy)==null||n.call(t)}catch{}if(this.__ytPlayer=null,this.__ytResizeObs){try{this.__ytResizeObs.disconnect()}catch{}this.__ytResizeObs=null}this.__ytOnWinResize&&(window.removeEventListener("resize",this.__ytOnWinResize),this.__ytOnWinResize=null),(o=this.__ytWrap)!=null&&o.parentNode&&this.__ytWrap.parentNode.removeChild(this.__ytWrap),this.__ytWrap=null}_evaluateVisibility_(t){try{let n=this.hass||this._hass;if(!Array.isArray(t)||t.length===0)return!0;let o=c=>{var l,u,f,v,m;if(!c||typeof c!="object")return!0;let s=c.condition||c.type||"state";if(s==="and"||s==="or"){let y=Array.isArray(c.conditions)?c.conditions:[];return y.length===0?!0:s==="and"?y.every(x=>o(x)):y.some(x=>o(x))}if(s==="state"){let y=c.entity;if(!y)return!0;let x=(l=n==null?void 0:n.states)==null?void 0:l[y];if(!x)return!1;let S=String((u=x.state)!=null?u:"");return c.state!==void 0?(Array.isArray(c.state)?c.state:[c.state]).some(T=>String(T)===S):c.state_not!==void 0?!(Array.isArray(c.state_not)?c.state_not:[c.state_not]).some(T=>String(T)===S):!0}if(s==="numeric_state"){let y=c.entity;if(!y)return!0;let x=(f=n==null?void 0:n.states)==null?void 0:f[y];if(!x)return!1;let S=parseFloat(x.state);return!(isNaN(S)||c.above!==void 0&&!(S>Number(c.above))||c.below!==void 0&&!(S<Number(c.below)))}if(s==="screen"){let y=c.media_query||c.query;if(!y||typeof y!="string")return!0;try{return window.matchMedia(y).matches}catch{return!0}}if(s==="user"){let y=Array.isArray(c.users)?c.users:c.user?[c.user]:[];if(!y.length)return!0;let x=((v=n==null?void 0:n.user)==null?void 0:v.id)||((m=n==null?void 0:n.user)==null?void 0:m.id)||null;return x?y.includes(x):!0}return!0};return t.every(c=>o(c))}catch(n){return console.warn("[ddc:visibility] evaluate error",n),!0}}_applyVisibility_(){var t;try{let n=((t=this.cardContainer)==null?void 0:t.children)||[],o=this._normalizeTabId(this.activeTab);for(let c of n){if(!c||!c.firstElementChild||this._normalizeTabId(c.dataset.tabId)!==o)continue;let u=(this._extractCardConfig(c.firstElementChild)||{}).visibility,f=this.editMode?!0:this._evaluateVisibility_(u);c.style.display=f?"":"none"}}catch(n){console.warn("[ddc:visibility] apply error",n)}}async _onKeyDown_(t){var l,u,f,v,m,y,x,S,w,T;if(!this.editMode||this._isTypingTarget_(t.target))return;let n=Number(this.gridSize||10),o=t.altKey?1:t.shiftKey?n*5:n,c=0,s=0;switch(t.key){case"ArrowLeft":c=-o;break;case"ArrowRight":c=o;break;case"ArrowUp":s=-o;break;case"ArrowDown":s=o;break}if(c||s){t.preventDefault(),this._moveSelectionBy_(c,s,{liveSnap:!t.altKey});return}if(t.key==="Delete"||t.key==="Backspace"){let R=this._selection&&this._selection.size?Array.from(this._selection):[];if(!R.length)return;t.preventDefault(),R.forEach(C=>C.remove()),(l=this._clearSelection)==null||l.call(this),(u=this._resizeContainer)==null||u.call(this),(f=this._queueSave)==null||f.call(this,"delete-key"),(v=this._ensurePlaceholderIfEmpty)==null||v.call(this);return}if((t.ctrlKey||t.metaKey)&&(t.key==="d"||t.key==="D")){t.preventDefault(),await this._duplicateSelection_();return}if((t.ctrlKey||t.metaKey)&&t.key==="]"){t.preventDefault(),this._selection&&((y=(m=this._selection).forEach)==null||y.call(m,R=>{var C;return(C=this._adjustZ)==null?void 0:C.call(this,R,1)})),(x=this._queueSave)==null||x.call(this,"z-up");return}if((t.ctrlKey||t.metaKey)&&t.key==="["){t.preventDefault(),this._selection&&((w=(S=this._selection).forEach)==null||w.call(S,R=>{var C;return(C=this._adjustZ)==null?void 0:C.call(this,R,-1)})),(T=this._queueSave)==null||T.call(this,"z-down");return}}async _duplicateSelection_(){var n,o,c,s,l,u,f,v,m,y,x,S;if(!this._selection||!this._selection.size)return;let t=Array.from(this._selection);for(let w of t)try{let T=((n=this._extractCardConfig)==null?void 0:n.call(this,w.firstElementChild))||{},R=await((o=this._createCard)==null?void 0:o.call(this,T)),C=(c=this._makeWrapper)==null?void 0:c.call(this,R);if(!R||!C)continue;C.style.width=w.style.width,C.style.height=w.style.height;let O=Number(this.gridSize||10),P=(parseFloat(w.getAttribute("data-x"))||0)+O,b=(parseFloat(w.getAttribute("data-y"))||0)+O;(s=this._setCardPosition)==null||s.call(this,C,P,b);let M=(((l=this._highestZ)==null?void 0:l.call(this))||0)+1;C.style.zIndex=String(Math.max(M,6));try{let I=(u=w.dataset)==null?void 0:u.tabId;I&&(C.dataset.tabId=I)}catch{}(f=this.cardContainer)==null||f.appendChild(C);try{(v=this._addTabSelectorToChip)==null||v.call(this,C,C.dataset.tabId)}catch{}try{(m=this._rebuildOnce)==null||m.call(this,C.firstElementChild)}catch{}try{(y=this._initCardInteract)==null||y.call(this,C)}catch{}}catch{}try{(x=this._resizeContainer)==null||x.call(this)}catch{}try{(S=this._queueSave)==null||S.call(this,"duplicate")}catch{}}_moveSelectionBy_(t,n,{liveSnap:o=!0}={}){var v,m,y,x,S;if(!this._selection||!this._selection.size)return;let c=Array.from(this._selection),s=Number(this.gridSize||10),l=(v=this._isContainerFixed)==null?void 0:v.call(this),u=((m=this._getContainerSize)==null?void 0:m.call(this))||{w:1/0,h:1/0},f=c.map(w=>{let T=parseFloat(w.getAttribute("data-x-raw"))||parseFloat(w.getAttribute("data-x"))||0,R=parseFloat(w.getAttribute("data-y-raw"))||parseFloat(w.getAttribute("data-y"))||0,C=parseFloat(w.style.width)||w.getBoundingClientRect().width,O=parseFloat(w.style.height)||w.getBoundingClientRect().height,P=T+t,b=R+n;l&&(P=Math.max(0,Math.min(P,Math.max(0,u.w-C))),b=Math.max(0,Math.min(b,Math.max(0,u.h-O))));let M=o?Math.round(P/s)*s:P,I=o?Math.round(b/s)*s:b;return{el:w,rawX:P,rawY:b,snapX:M,snapY:I,w:C,h:O}});if(this.disableOverlap&&typeof this._pushCardsOutOfTheWay=="function")try{this._pushCardsOutOfTheWay(f,t,n,o,s)}catch{}for(let w of f){w.el.setAttribute("data-x-raw",String(w.rawX)),w.el.setAttribute("data-y-raw",String(w.rawY));try{(y=this._setCardPosition)==null||y.call(this,w.el,w.snapX,w.snapY)}catch{}}try{(x=this._resizeContainer)==null||x.call(this)}catch{}try{(S=this._queueSave)==null||S.call(this,"nudge")}catch{}}_syncTabsWidth_(){var t;try{if(String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto")return;let o=this.tabsBar;if(!o)return;try{let l=window.innerWidth||((t=document.documentElement)==null?void 0:t.clientWidth)||0;if(l&&l<=768){o.style.width="",o.style.maxWidth="";return}}catch{}if(this.tabsPosition==="left"){o.style.width="",o.style.maxWidth="";return}let c=this.cardContainer||this.__scaleOuter;if(!c)return;let s=0;try{let l=c.getBoundingClientRect();s=l&&l.width?l.width:0}catch{}if(s<=0&&this.__scaleOuter&&this.__scaleOuter!==c)try{let l=this.__scaleOuter.getBoundingClientRect();s=l&&l.width?l.width:0}catch{}s>0&&(o.style.width=`${s}px`,o.style.maxWidth=`${s}px`)}catch{}}_isTypingTarget_(t){var c,s,l,u;if(!t||t===window||t===document)return!1;let n=(c=t.closest)==null?void 0:c.call(t,'input, textarea, [contenteditable="true"], ha-textfield, mwc-textfield');if(!n)return!1;let o=((l=(s=n.tagName)==null?void 0:s.toLowerCase)==null?void 0:l.call(s))||"";return o==="input"||o==="textarea"||((u=n.hasAttribute)==null?void 0:u.call(n,"contenteditable"))}_scheduleReflowAndScale(){this.__reflowRAF||(this.__reflowRAF=requestAnimationFrame(()=>{var t,n,o;this.__reflowRAF=null;try{(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="dynamic"&&((t=this._resizeContainer)==null||t.call(this))}catch{}try{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(n=this._applyAutoFillNoScale)==null||n.call(this):(o=this._applyAutoScale)==null||o.call(this)}catch{}}))}__ddcBindPointerListeners(){if(!this.__ddcPtrBound){this.__ddcPtrBound=!0,this.__onDDCPointerDown=t=>{var n,o;try{if(t.button!==void 0&&t.button!==0)return;let c=((n=t.composedPath)==null?void 0:n.call(t))||[],s=null;for(let l of c)if(l&&l.classList&&l.classList.contains("card-wrapper")){s=l;break}if(!s)return;this.__ddcDragging=!0,this.__scaleOuter&&(this.__prevOverflow=this.__scaleOuter.style.overflow,this.__scaleOuter.style.overflow="visible"),(o=this._scheduleReflowAndScale)==null||o.call(this)}catch{}},this.__onDDCPointerMove=t=>{var n;try{if(!this.__ddcDragging)return;(n=this._scheduleReflowAndScale)==null||n.call(this)}catch{}},this.__onDDCPointerUp=t=>{var n,o;try{if(!this.__ddcDragging)return;this.__ddcDragging=!1,this.__scaleOuter&&(this.__scaleOuter.style.overflow=this.__prevOverflow||"");try{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(n=this._applyAutoFillNoScale)==null||n.call(this):(o=this._applyAutoScale)==null||o.call(this)}catch{}}catch{}};try{this.addEventListener("pointerdown",this.__onDDCPointerDown,{passive:!0})}catch{}try{this.addEventListener("pointermove",this.__onDDCPointerMove,{passive:!0})}catch{}try{window.addEventListener("pointerup",this.__onDDCPointerUp,{passive:!0})}catch{}try{window.addEventListener("pointercancel",this.__onDDCPointerUp,{passive:!0})}catch{}}}_renderEditToolbar_(){this.shadowRoot.querySelectorAll(".ddc-toolbar").forEach(y=>y.remove()),this._ensureToolbarStyles_();let t=document.createElement("div");t.className="ddc-toolbar";let n=document.createElement("div");n.className="ddc-t-group",n.append(this._mkBtn_("add_card","mdi:plus-box","Add card (A)","primary"),this._mkBtn_("snap_toggle","mdi:magnet","Toggle snap (G)"),this._mkBtn_("align_grid","mdi:grid","Align to grid"));let o=document.createElement("div");o.className="ddc-t-group";let c=document.createElement("div");c.className="ddc-t-status";let s=document.createElement("div");s.className="ddc-t-dot"+(this.__dirty?" dirty":"");let l=document.createElement("span");l.textContent=this.__dirty?"Unsaved changes":`Saved${this.__lastSavedAt?" \xB7 "+this.__lastSavedAt:""}`,c.append(s,l),o.appendChild(c);let u=document.createElement("div");u.className="ddc-t-group",u.append(this._mkBtn_("reload","mdi:refresh","Reload (R)","ghost"),this._mkBtn_("open_hads","mdi:alpha-h-box-outline","Open HACS/HADS","ghost"),this._mkBtn_("apply","mdi:content-save","Apply / Save (S)","primary"),this._mkBtn_("exit_edit","mdi:logout-variant","Exit edit (Esc)","danger"));let f=document.createElement("div");f.className="ddc-t-group ddc-t-row",f.append(n);let v=document.createElement("div");v.className="ddc-t-group ddc-t-row",v.append(o);let m=document.createElement("div");m.className="ddc-t-group ddc-t-row",m.append(u),t.append(f,document.createElement("div")).lastChild.className="ddc-t-sep",t.append(v,document.createElement("div")).lastChild.className="ddc-t-sep",t.append(m),t.addEventListener("click",y=>{let x=y.target.closest("[data-action]");x&&this._onToolbarAction_(x.dataset.action,{button:x,bar:t,dot:s,txt:l})}),this.shadowRoot.appendChild(t);try{this.__toolbarRO&&this.__toolbarRO.disconnect(),this.__toolbarRO=new ResizeObserver(y=>{for(let x of y)t.classList.toggle("compact",x.contentRect.width<980)}),this.__toolbarRO.observe(t)}catch{}this.__toolbarKeyHandler=y=>{if(!(!this.editMode&&!this.isEditing)){if(y.key==="a"||y.key==="A")return this._onToolbarAction_("add_card");if(y.key==="s"||y.key==="S")return this._onToolbarAction_("apply");if(y.key==="r"||y.key==="R")return this._onToolbarAction_("reload");if(y.key==="g"||y.key==="G")return this._onToolbarAction_("snap_toggle");if(y.key==="Escape")return this._onToolbarAction_("exit_edit")}},window.addEventListener("keydown",this.__toolbarKeyHandler)}async _onToolbarAction_(t,n={}){var o,c,s,l,u,f,v,m,y,x,S;switch(t){case"add_card":(o=this._openAddCardDialog_)!=null&&o.call(this)||(c=this._addNewCard_)!=null&&c.call(this)||((s=this._openEntityPicker_)==null||s.call(this));break;case"snap_toggle":{this.dragLiveSnap=!this.dragLiveSnap,(l=this._initInteract)==null||l.call(this),(u=this._toast_)==null||u.call(this,`Live snap ${this.dragLiveSnap?"ON":"OFF"}`);break}case"align_grid":(f=this._alignAllToGrid_)==null||f.call(this,this.gridSize);break;case"reload":(v=this._reloadLayout_)==null||v.call(this);break;case"open_hads":(m=this._openHACS_)!=null&&m.call(this)||window.open("/hacs","_blank")||window.open("/hacsfiles","_blank");break;case"apply":{let w=()=>{this._setDirty_(!1),n!=null&&n.txt&&(n.txt.textContent=`Saved \xB7 ${this.__lastSavedAt}`),n!=null&&n.dot&&n.dot.classList.remove("dirty","error")},T=()=>{n!=null&&n.dot&&n.dot.classList.add("error")};try{this._saveLayoutNow_?await this._saveLayoutNow_():this._persistThisCardConfigToStorage_?await this._persistThisCardConfigToStorage_():(y=this._queueSave)==null||y.call(this,"toolbar-apply",!0),this.__lastSavedAt=new Date().toLocaleTimeString(),w()}catch(R){console.warn(R),T()}break}case"exit_edit":if((x=this._toggleEditMode)!=null&&x.call(this,!1)||(S=this._exitEditMode_)!=null&&S.call(this)||(this.isEditing=!1),this.__toolbarKeyHandler&&(window.removeEventListener("keydown",this.__toolbarKeyHandler),this.__toolbarKeyHandler=null),this.__toolbarRO){try{this.__toolbarRO.disconnect()}catch{}this.__toolbarRO=null}this.shadowRoot.querySelectorAll(".ddc-toolbar").forEach(w=>w.remove());break}}_ensureScaleWrapper(){let t=this.cardContainer;if(!t||this.__scaleOuter&&this.__scaleOuter.contains(t))return;let n=document.createElement("div");n.className="ddc-scale-outer",Object.assign(n.style,{position:"relative",width:"100%",overflow:"hidden"}),t.parentNode&&(t.parentNode.insertBefore(n,t),n.appendChild(t)),Object.assign(t.style,{position:"absolute",top:"0",left:"0",transformOrigin:"top left"}),this.__scaleOuter=n}_hasCardModDeep(t){try{if(!t||typeof t!="object")return!1;if(t.card_mod||t.type==="custom:mod-card")return!0;if(t.card)return this._hasCardModDeep(t.card);if(Array.isArray(t.cards)){for(let n of t.cards)if(this._hasCardModDeep(n))return!0}return!1}catch{return!1}}_rebuildOnce(t){try{if(!t||(this.__rebuiltCards||(this.__rebuiltCards=new WeakSet),this.__rebuiltCards.has(t)))return;this.__rebuiltCards.add(t),t.dispatchEvent(new Event("ll-rebuild",{bubbles:!0,composed:!0}))}catch{}}_deepQueryAll(t,n=document){let o=[],c=s=>{if(!s)return;if(s.querySelectorAll)try{s.querySelectorAll(t).forEach(f=>o.push(f))}catch{}let l=document.createTreeWalker(s,NodeFilter.SHOW_ELEMENT,null),u=s;for(;u;){let f=u.shadowRoot;f&&c(f),u=l.nextNode()}};return c(n),o}_syncEditorsStorageKey(){try{let t=this.storageKey||"";this._deepQueryAll("#storage_key").forEach(o=>{try{o&&o.tagName==="INPUT"&&o.value!==t&&(o.value=t,o.dispatchEvent(new Event("input",{bubbles:!0})),o.dispatchEvent(new Event("change",{bubbles:!0})))}catch{}})}catch{}}static _genKey(){var n,o;return`layout_${((o=(n=globalThis.crypto)==null?void 0:n.randomUUID)==null?void 0:o.call(n))||`${Date.now().toString(36)}_${Math.random().toString(36).slice(2,8)}`}`}static get type(){return"drag-and-drop-card"}static get title(){return"Drag & Drop Card"}static get description(){return"Flexible grid layout card with drag\u2011and\u2011drop editing."}static get icon(){return"mdi:cursor-move"}static get group(){return"custom"}static getStubConfig(){return{type:"custom:drag-and-drop-card",storage_key:this._genKey(),grid:20,drag_live_snap:!0,auto_save:!0,auto_save_debounce:800,container_size_mode:"auto",container_background:"linear-gradient(135deg, #1e3a8a, #0ea5e9)",card_background:"linear-gradient(135deg, #111827, #1f2937)",debug:!1,disable_overlap:!1,auto_resize_cards:!0,background_mode:"none",animate_cards:!0,container_preset_orientation:"auto",edit_mode_pin:"",container_fixed_width:null,container_fixed_height:null,container_preset:"fullhd",card_shadow:!0,hide_HA_Header:!1,hide_HA_Sidebar:!1,screen_saver_enabled:!0,screen_saver_delay:15e5,tabs:[{id:"home",label:"Home",icon:"mdi:home",label_mode:"both"}],default_tab:"home"}}static getConfigElement(){let t=document.createElement("div");t.style.display="grid",t.style.gridTemplateColumns="1fr",t.style.rowGap="12px";let n=document.createElement("ha-textfield");n.id="storage_key",n.label="Storage key",n.placeholder="Auto-generated if left blank",t.appendChild(n);let o=document.createElement("div");return o.style.fontSize="0.85rem",o.style.opacity="0.7",o.textContent="Unique key for saving layout positions. Leave blank to auto\u2011generate.",t.appendChild(o),t.setConfig=(y={})=>{var x;t._config={type:y.type||"custom:drag-and-drop-card",...y},t._config.storage_key||(t._config.storage_key=`layout_${((x=crypto==null?void 0:crypto.randomUUID)==null?void 0:x.call(crypto))||Date.now().toString(36)}`),n.value=t._config.storage_key||""},t.getConfig=()=>{let y={...t._config||{}};return y.type="custom:drag-and-drop-card",y.storage_key=n.value||"",y},n.addEventListener("input",()=>{t.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t.getConfig()}}))}),t;let c=()=>{let y=v();u.disabled=!y},s=async()=>{var x,S;let y=el.getConfig();el.dispatchEvent(new CustomEvent("config-changed",{detail:{config:y}})),c();try{if(this.storageKey){let w=this._exportableOptions?this._exportableOptions():y;await this._saveOptionsToBackend(this.storageKey,w)}}catch{}try{await this._persistThisCardConfigToStorage_()}catch{try{let T=this._exportableOptions?this._exportableOptions():y;await((x=this._persistOptionsToYaml)==null?void 0:x.call(this,T,{patchAllInCurrentViewIfNoKey:!0}))}catch{}}try{(S=this._applyBackgroundFromConfig)==null||S.call(this)}catch{}},l=()=>{var x,S,w,T;let y=(T=(w=(x=el.querySelector("#sizeMode"))==null?void 0:x.value)!=null?w:(S=el.querySelector("#ddc-setting-sizeMode"))==null?void 0:S.value)!=null?T:"dynamic";el.querySelector("#sizeCustom").style.display=y==="fixed_custom"?"inline-flex":"none",el.querySelector("#sizePresetWrap").style.display=y==="preset"?"inline-flex":"none"},u=el.querySelector("#applyBtn"),f=el.querySelector("#revertBtn");["#sizeMode","#sizePreset","#sizeOrientation"].forEach(y=>{let x=el.querySelector(y);if(x){try{x.fixedMenuPosition=!0}catch{}x.addEventListener("closed",S=>S.stopPropagation())}}),el.setConfig=(y={})=>{var w,T,R,C,O,P,b,M;el._config={type:y.type||"custom:drag-and-drop-card",...y},el._config.storage_key||(el._config.storage_key=`layout_${((w=crypto==null?void 0:crypto.randomUUID)==null?void 0:w.call(crypto))||Date.now().toString(36)}`,el.__autokeyPending=!0),el.querySelector("#storage_key").value=el._config.storage_key||"",el.querySelector("#grid").value=(T=el._config.grid)!=null?T:10,el.querySelector("#liveSnap").checked=!!el._config.drag_live_snap,el.querySelector("#autoSave").checked=el._config.auto_save!==!1,el.querySelector("#autoSaveDebounce").value=(R=el._config.auto_save_debounce)!=null?R:800,el.querySelector("#containerBg").value=(C=el._config.container_background)!=null?C:"transparent",el.querySelector("#cardBg").value=(O=el._config.card_background)!=null?O:"var(--ha-card-background, var(--card-background-color))",el.querySelector("#debug").checked=!!el._config.debug,el.querySelector("#noOverlap").checked=!!el._config.disable_overlap,el.querySelector("#autoResize").checked=!!el._config.auto_resize_cards,el.querySelector("#animateCards").checked=!!el._config.animate_cards;let x=el.querySelector("#sizeMode")||el.querySelector("#ddc-setting-sizeMode");x&&(x.value=el._config.container_size_mode||"dynamic"),el.querySelector("#sizeW").value=(P=el._config.container_fixed_width)!=null?P:"",el.querySelector("#sizeH").value=(b=el._config.container_fixed_height)!=null?b:"",el.querySelector("#sizeOrientation").value=el._config.container_preset_orientation||"auto";let S=el.querySelector("#sizePreset");if(!S.__filled){let I=(((M=this._sizePresets)==null?void 0:M.call(this))||[]).reduce((q,K)=>{var Y;return(q[Y=K.group||"other"]||(q[Y]=[])).push(K),q},{});S.innerHTML="";for(let[q,K]of Object.entries(I)){let Y=document.createElement("optgroup");Y.label=q.replace(/(^.|-.?)/g,F=>F.toUpperCase()),K.forEach(F=>{let U=document.createElement("mwc-list-item");U.value=F.key,U.textContent=`${F.label} (${F.w}\xD7${F.h})`,Y.appendChild(U)});let ie=document.createElement("mwc-list-item");ie.setAttribute("disabled",""),ie.textContent=`\u2014 ${Y.label} \u2014`,S.appendChild(ie),Array.from(Y.children).forEach(F=>S.appendChild(F))}S.__filled=!0}el._config.container_preset&&(S.value=el._config.container_preset),l(),c(),el.__autokeyPending&&(el.__autokeyPending=!1,s())},el.getConfig=()=>{var x,S,w,T;let y={...el._config||{}};y.storage_key=el.querySelector("#storage_key").value||"",y.grid=Number(el.querySelector("#grid").value||10),y.drag_live_snap=!!el.querySelector("#liveSnap").checked,y.auto_save=!!el.querySelector("#autoSave").checked,y.auto_save_debounce=Number(el.querySelector("#autoSaveDebounce").value||800),y.container_background=el.querySelector("#containerBg").value||"transparent",y.card_background=el.querySelector("#cardBg").value||"var(--ha-card-background, var(--card-background-color))",y.debug=!!el.querySelector("#debug").checked,y.disable_overlap=!!el.querySelector("#noOverlap").checked,y.auto_resize_cards=!!el.querySelector("#autoResize").checked;try{let R=el.querySelector("#ddc-bg-mode"),C=el.querySelector("#ddc-setting-bgImg"),O=el.querySelector("#ddc-bg-repeat"),P=el.querySelector("#ddc-bg-size"),b=el.querySelector("#ddc-bg-position"),M=el.querySelector("#ddc-bg-attachment"),I=el.querySelector("#ddc-bg-opacity"),q=el.querySelector("#ddc-particles-url"),K=el.querySelector("#ddc-particles-pointer"),Y=el.querySelector("#ddc-youtube-url"),ie=el.querySelector("#ddc-youtube-start"),F=el.querySelector("#ddc-youtube-end"),U=el.querySelector("#ddc-youtube-mute"),V=el.querySelector("#ddc-youtube-loop"),ce=el.querySelector("#ddc-youtube-size"),je=el.querySelector("#ddc-youtube-position"),Pe=el.querySelector("#ddc-youtube-attachment"),ge=el.querySelector("#ddc-youtube-opacity"),ke=(R==null?void 0:R.value)||"none";y.background_mode=ke;let ye=Ie=>Math.max(0,Math.min(1,Ie)),Ze=Ie=>{let Ke=parseFloat((Ie==null?void 0:Ie.value)||"100");return Number.isFinite(Ke)?ye(Ke/100):1},$e=Ie=>Object.fromEntries(Object.entries(Ie).filter(([,Ke])=>Ke!=null&&Ke!==""));if(ke==="image"){let Ie=((C==null?void 0:C.value)||"").trim();y.background_image=$e({src:Ie||void 0,repeat:(O==null?void 0:O.value)||"no-repeat",size:(P==null?void 0:P.value)||"cover",position:(b==null?void 0:b.value)||"center center",attachment:(M==null?void 0:M.value)||"scroll",opacity:Ze(I)})}if(ke==="particles"&&(y.background_particles=$e({config_url:((q==null?void 0:q.value)||"").trim()||void 0,pointer_events:!!(K!=null&&K.checked)})),ke==="youtube"){let Ie=Ke=>{let ot=parseInt(((Ke==null?void 0:Ke.value)||"").trim(),10);return Number.isFinite(ot)?ot:void 0};y.background_youtube=$e({url:((Y==null?void 0:Y.value)||"").trim()||void 0,start:Ie(ie),end:Ie(F),mute:!!(U!=null&&U.checked),loop:!!(V!=null&&V.checked),size:(ce==null?void 0:ce.value)||"cover",position:(je==null?void 0:je.value)||"center center",attachment:(Pe==null?void 0:Pe.value)||"scroll",opacity:Ze(ge)})}ke!=="image"&&delete y.background_image,ke!=="particles"&&delete y.background_particles,ke!=="youtube"&&delete y.background_youtube}catch{}return y.animate_cards=!!el.querySelector("#animateCards").checked,y.container_size_mode=(T=(w=(x=el.querySelector("#sizeMode"))==null?void 0:x.value)!=null?w:(S=el.querySelector("#ddc-setting-sizeMode"))==null?void 0:S.value)!=null?T:"dynamic",y.container_fixed_width=Number(el.querySelector("#sizeW").value||0)||void 0,y.container_fixed_height=Number(el.querySelector("#sizeH").value||0)||void 0,y.container_preset=el.querySelector("#sizePreset").value||void 0,y.container_preset_orientation=el.querySelector("#sizeOrientation").value||"auto",y};let v=()=>{let y=el.getConfig(),x=el._config||{};try{return JSON.stringify(y)!==JSON.stringify(x)}catch{return!0}},m=(y,x="input")=>{var S;return(S=el.querySelector(y))==null?void 0:S.addEventListener(x,()=>{y==="#sizeMode"&&l(),c()})};return m("#storage_key"),m("#grid"),m("#liveSnap","change"),m("#autoSave","change"),m("#autoSaveDebounce"),m("#containerBg"),m("#cardBg"),m("#debug","change"),m("#noOverlap","change"),m("#autoResize","change"),m("#animateCards","change"),m("#sizeMode","change"),m("#ddc-setting-sizeMode","change"),m("#sizeW"),m("#sizeH"),m("#sizePreset","selected"),m("#sizeOrientation","selected"),u==null||u.addEventListener("click",()=>{s()}),f==null||f.addEventListener("click",()=>el.setConfig(el._config)),el}static _sizePresets(){return[{key:"iphone-14-pro",label:"iPhone 14 Pro",w:393,h:852,group:"phone"},{key:"iphone-14-pro-max",label:"iPhone 14 Pro Max",w:430,h:932,group:"phone"},{key:"iphone-se-2",label:"iPhone SE (2/3rd gen)",w:375,h:667,group:"phone"},{key:"pixel-7",label:"Pixel 7",w:412,h:915,group:"phone"},{key:"galaxy-s8",label:"Galaxy S8",w:360,h:740,group:"phone"},{key:"galaxy-s20-ultra",label:"Galaxy S20 Ultra",w:412,h:915,group:"phone"},{key:"ipad-9-7",label:'iPad 9.7"',w:768,h:1024,group:"tablet"},{key:"ipad-11-pro",label:'iPad Pro 11"',w:834,h:1194,group:"tablet"},{key:"ipad-12-9-pro",label:'iPad Pro 12.9"',w:1024,h:1366,group:"tablet"},{key:"surface-go-3",label:"Surface Go 3",w:800,h:1280,group:"tablet"},{key:"hd",label:"HD",w:1366,h:768,group:"desktop"},{key:"wxga-plus",label:"WXGA+",w:1440,h:900,group:"desktop"},{key:"fhd",label:"Full HD",w:1920,h:1080,group:"desktop"},{key:"qhd",label:"2K / QHD",w:2560,h:1440,group:"desktop"},{key:"uhd-4k",label:"4K UHD",w:3840,h:2160,group:"desktop"}]}_isContainerFixed(){return this.containerSizeMode==="fixed_custom"||this.containerSizeMode==="preset"||this.containerSizeMode==="fixed"}_resolveFixedSize(){if(this.containerSizeMode==="fixed_custom"){let t=Math.max(100,Number(this.containerFixedWidth||0)),n=Math.max(100,Number(this.containerFixedHeight||0));return{w:t,h:n}}if(this.containerSizeMode==="preset"){let t=e._sizePresets().find(c=>c.key===this.containerPreset)||e._sizePresets().find(c=>c.key==="fhd");if(!t)return{w:1920,h:1080};let n=t.w,o=t.h;return this.containerPresetOrient==="portrait"&&n>o&&([n,o]=[o,n]),this.containerPresetOrient==="landscape"&&o>n&&([n,o]=[o,n]),{w:n,h:o}}return null}_applyContainerSizingFromConfig(t=!1){var o,c;let n=this.cardContainer;if(n)if(this._isContainerFixed()){let{w:s,h:l}=this._resolveFixedSize();n.style.width=`${s}px`,n.style.height=`${l}px`,n.style.overflow="hidden",t||(o=this._dbgPush)==null||o.call(this,"size","Applied fixed size",{w:s,h:l,mode:this.containerSizeMode,preset:this.containerPreset,orient:this.containerPresetOrient}),this._clampAllCardsInside()}else n.style.overflow="hidden",t||(c=this._dbgPush)==null||c.call(this,"size","Applied dynamic size"),this._resizeContainer()}_getContainerSize(){let t=this.cardContainer;if(!t)return{w:0,h:0};let n=parseFloat(getComputedStyle(t).width)||t.getBoundingClientRect().width,o=parseFloat(getComputedStyle(t).height)||t.getBoundingClientRect().height;return{w:n,h:o}}_clampAllCardsInside(){if(!this._isContainerFixed())return;let{w:t,h:n}=this._getContainerSize();this.cardContainer.querySelectorAll(".card-wrapper").forEach(c=>{let s=parseFloat(c.getAttribute("data-x"))||0,l=parseFloat(c.getAttribute("data-y"))||0,u=parseFloat(c.style.width)||c.getBoundingClientRect().width,f=parseFloat(c.style.height)||c.getBoundingClientRect().height,v=Math.max(0,Math.min(s,Math.max(0,t-u))),m=Math.max(0,Math.min(l,Math.max(0,n-f))),y=Math.min(u,t),x=Math.min(f,n);(y!==u||x!==f)&&(c.style.width=`${y}px`,c.style.height=`${x}px`);let S=Math.max(0,Math.min(v,Math.max(0,t-y))),w=Math.max(0,Math.min(m,Math.max(0,n-x)));this._setCardPosition(c,S,w)})}_computeHaSidebarGutters_(){var o;let t=56;try{let c=document.querySelector("home-assistant"),s=c==null?void 0:c.shadowRoot,l=s==null?void 0:s.querySelector("ha-drawer, app-drawer, ha-sidebar, .drawer, .menu"),u=(o=l==null?void 0:l.getBoundingClientRect)==null?void 0:o.call(l);Math.max(document.documentElement.clientWidth||0,window.innerWidth||0)<=870?t=0:u!=null&&u.width&&(t=Math.max(0,Math.min(256,Math.round(u.width))))}catch{}let n=0;try{this.style.setProperty("--ddc-left-gutter",`${t}px`),this.style.setProperty("--ddc-right-gutter",`${n}px`)}catch{}}_applyGridVars(){var n;let t=`${this.gridSize||10}px`;this.style.setProperty("--ddc-grid-size",t),(n=this.cardContainer)==null||n.style.setProperty("--ddc-grid-size",t)}_dbgInit(){if(!this.__dbgReady){this.__dbgReady=!0,this._dbgBuffer=[],this._dbgMax=400;try{window.DDC=this}catch{}}}_dbgPush(t,n,o=null){let c={t:new Date().toISOString(),kind:t,msg:n,extra:o};this._dbgBuffer.push(c),this._dbgBuffer.length>this._dbgMax&&this._dbgBuffer.shift(),this.debug&&console.debug(`%c[ddc:${t}]%c ${n}`,"color:#03a9f4","color:unset",o!=null?o:"")}_dbgDump(){return[...this._dbgBuffer]}_safe(t){return String(t).replace(/[&<>"']/g,n=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[n])}setConfig(t={}){var l,u,f,v,m,y,x,S,w,T,R,C,O,P,b,M,I,q,K,Y,ie,F,U,V,ce,je,Pe;let n=this.storageKey;this.config={...t},(!this.config.storage_key||this.config.storage_key==="")&&(this.config.storage_key=this.constructor._genKey()),this.storageKey=this.config.storage_key,t.storage_key||(this.storageKey?t={...t,storage_key:this.storageKey}:(this.storageKey=`layout_${((l=crypto==null?void 0:crypto.randomUUID)==null?void 0:l.call(crypto))||Date.now().toString(36)}`,t={...t,storage_key:this.storageKey})),this._config=t,this.storageKey=t.storage_key,this._syncEditorsStorageKey(),this.storageKey=t.storage_key||void 0,this._syncEditorsStorageKey(),this.gridSize=Number((u=t.grid)!=null?u:10),this.dragLiveSnap=!!t.drag_live_snap,this.autoSave=t.auto_save!==!1,this.autoSaveDebounce=Number((f=t.auto_save_debounce)!=null?f:800),this.editModePin=this.editModePin!=null?this.editModePin:(m=(v=t.edit_mode_pin)!=null?v:t.editModePin)!=null?m:"",this.containerBackground=(y=t.container_background)!=null?y:"transparent",this.cardBackground=(x=t.card_background)!=null?x:"var(--ha-card-background, var(--card-background-color))",this.cardShadowEnabled=!!t.card_shadow,this.hideHaHeader=!!((w=(S=t.hide_HA_Header)!=null?S:t.hide_ha_header)!=null&&w),this.hideHaSidebar=!!((R=(T=t.hide_HA_Sidebar)!=null?T:t.hide_ha_sidebar)!=null&&R),this.debug=!!t.debug,this.editMode=!1,this._backendOK=!1,this.disableOverlap=!!t.disable_overlap,this.containerSizeMode=t.container_size_mode||"dynamic",String(this.containerSizeMode||"dynamic").toLowerCase()==="dynamic"?this.autoResizeCards=!0:this.autoResizeCards=t.auto_resize_cards!==!1,this.animateCards=!!t.animate_cards,this.screenSaverEnabled=!!((C=t.screen_saver_enabled)!=null&&C);let c=Number(t.screen_saver_delay);this.screenSaverDelay=Number.isFinite(c)&&c>0?c:5*6e4,this.autoResizeCards||String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(O=this._startScaleWatch)==null||O.call(this):(P=this._stopScaleWatch)==null||P.call(this),(b=this._applyAutoScale)==null||b.call(this),this.containerFixedWidth=Number((M=t.container_fixed_width)!=null?M:0)||null,this.containerFixedHeight=Number((I=t.container_fixed_height)!=null?I:0)||null,this.containerPreset=t.container_preset||"fullhd",this.containerPresetOrient=t.container_preset_orientation||"auto",this.heroImage=(t==null?void 0:t.hero_image)||"https://i.postimg.cc/CxsWQgwp/Chat-GPT-Image-Sep-5-2025-09-26-16-AM.png",this.tabs=Array.isArray(t.tabs)?t.tabs:[],this.tabsPosition=t.tabs_position==="left"?"left":"top",this.defaultTab=t.default_tab||((K=(q=this.tabs[0])==null?void 0:q.id)!=null?K:"default"),this.hideTabsWhenSingle=t.hide_tabs_when_single!==!1,this.activeTab=this.defaultTab;try{let ge=localStorage.getItem(`ddc_lasttab_${this.storageKey}`);ge&&this.tabs.some(ke=>ke.id===ge)&&(this.activeTab=ge)}catch{}this.rootEl&&this.rootEl.classList.toggle("ddc-tabs-left-layout",this.tabsPosition==="left"),this.cardContainer&&this._applyContainerSizingFromConfig(!1);let s=n!==this.storageKey;if(this.editMode&&!this.__booting&&!s)try{this._isInHaEditorPreview()||this._queueSave("config-change")}catch{}this._applyGridVars();try{(Y=this._applyBackgroundImageFromConfig)==null||Y.call(this)}catch{}try{(ie=this._applyHaChromeVisibility_)==null||ie.call(this)}catch{}this._ensureOverlayZFix();try{(F=this._updateScreensaverSettings)==null||F.call(this)}catch{}if(this._selection=new Set,this.__groupDrag=null,this.__editorCache=new Map,this.__stubCache=new Map,this._dbgInit(),this._dbgPush("init","Card configured",{storageKey_raw:t.storage_key,storageKey_slug:this.storageKey,autoSave:this.autoSave,grid:this.gridSize}),this.style.setProperty("--ddc-bg",this.containerBackground),this.style.setProperty("--ddc-card-bg",this.cardBackground),this.cardShadowEnabled&&this.style.setProperty("--ddc-card-shadow","0 8px 24px rgba(0,0,0,.35)"),!window.jsyaml){let ge=document.createElement("script");ge.src="https://cdnjs.cloudflare.com/ajax/libs/js-yaml/4.1.0/js-yaml.min.js",document.head.appendChild(ge)}if(!window.interact){let ge=document.createElement("script");ge.src="https://cdn.jsdelivr.net/npm/interactjs/dist/interact.min.js",ge.onload=()=>this._initInteract(),document.head.appendChild(ge)}if(this._helpersPromise=typeof window.loadCardHelpers=="function"?window.loadCardHelpers().catch(()=>null):Promise.resolve(null),!this._built){this._built=!0,this.shadowRoot.innerHTML=`
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



      `,this.cardContainer=this.shadowRoot.querySelector("#cardContainer");try{(U=this._applyBackgroundFromConfig)==null||U.call(this)}catch{}try{(V=this._updateScreensaverSettings)==null||V.call(this)}catch{}this.addButton=this.shadowRoot.querySelector("#addCardBtn"),this.reloadBtn=this.shadowRoot.querySelector("#reloadBtn"),this.diagBtn=this.shadowRoot.querySelector("#diagBtn"),this.exitEditBtn=this.shadowRoot.querySelector("#exitEditBtn"),this.storeBadge=this.shadowRoot.querySelector("#storeBadge"),this.exportBtn=this.shadowRoot.querySelector("#exportBtn"),this.importBtn=this.shadowRoot.querySelector("#importBtn"),this.exploreBtn=this.shadowRoot.querySelector("#exploreBtn"),this.applyLayoutBtn=this.shadowRoot.querySelector("#applyLayoutBtn"),this.copyBtn=this.shadowRoot.querySelector("#copyBtn"),this.pasteBtn=this.shadowRoot.querySelector("#pasteBtn"),this.settingsBtn=this.shadowRoot.querySelector("#settingsBtn"),this.tabsBar=this.shadowRoot.querySelector("#tabsBar"),this.rootEl=this.shadowRoot.querySelector(".ddc-root");try{this._renderTabs(),this._applyActiveTab()}catch{}this._applyGridVars(),this.addButton.addEventListener("click",()=>{this.editMode||this._toggleEditMode(!0),this._openCardManager()}),this.reloadBtn.addEventListener("click",()=>this._initialLoad(!0)),this.diagBtn.addEventListener("click",()=>this._openDiagnostics()),this.exitEditBtn.addEventListener("click",()=>this._toggleEditMode(!1)),this.exportBtn.addEventListener("click",()=>this._exportDesign()),this.importBtn.addEventListener("click",()=>this._importDesign()),this.applyLayoutBtn.addEventListener("click",()=>this._saveLayout(!1)),this.copyBtn&&this.copyBtn.addEventListener("click",()=>this._copySelection()),this.pasteBtn&&this.pasteBtn.addEventListener("click",()=>this._pasteClipboard()),this.settingsBtn&&this.settingsBtn.addEventListener("click",()=>this._openDashboardSettings()),window.addEventListener("keydown",ge=>{var ke;if(this.editMode){if((ge.ctrlKey||ge.metaKey)&&(ge.key==="s"||ge.key==="S")&&(ge.preventDefault(),this._saveLayout(!1)),!this.__ddcResizeObs&&this.autoResizeCards){this.__ddcResizeObs=new ResizeObserver(()=>{var ye;return(ye=this._applyAutoScale)==null?void 0:ye.call(this)});try{this.__ddcResizeObs.observe(this)}catch{}try{this.__ddcResizeObs.observe(this.cardContainer)}catch{}try{this.parentElement&&this.__ddcResizeObs.observe(this.parentElement)}catch{}try{this.offsetParent&&this.__ddcResizeObs.observe(this.offsetParent)}catch{}window.addEventListener("resize",this.__ddcOnWinResize=()=>{var ye;return(ye=this._applyAutoScale)==null?void 0:ye.call(this)})}(ke=this._applyAutoScale)==null||ke.call(this)}}),this.exploreBtn.addEventListener("click",()=>window.open("https://hads.smarti.dev/","_blank","noopener,noreferrer")),this._applyContainerSizingFromConfig(!0),(ce=this._applyAutoScale)==null||ce.call(this),this._installLongPressToEnterEdit(),(je=this._startScaleWatch)==null||je.call(this),window.addEventListener("keydown",ge=>{var ke;if(ge.key==="Escape"&&this.editMode&&this._toggleEditMode(!1),!this.__ddcResizeObs&&this.autoResizeCards){this.__ddcResizeObs=new ResizeObserver(()=>{var ye;return(ye=this._applyAutoScale)==null?void 0:ye.call(this)});try{this.__ddcResizeObs.observe(this)}catch{}try{this.__ddcResizeObs.observe(this.cardContainer)}catch{}window.addEventListener("resize",this.__ddcOnWinResize=()=>{var ye;return(ye=this._applyAutoScale)==null?void 0:ye.call(this)})}(ke=this._applyAutoScale)==null||ke.call(this)}),this._installSelectionMarquee(),this.cardContainer.addEventListener("mousedown",ge=>{this.editMode&&(ge.target.closest(".card-wrapper")||!ge.shiftKey&&!ge.ctrlKey&&!ge.metaKey&&this._clearSelection())})}try{this._isInHaEditorPreview()||this._queueSave("config-change")}catch{}this._updateStoreBadge(),this.cardContainer&&this._toggleEditMode(!1),this.__cfgReady=!0,s&&this.__booted?this._initialLoad(!0):!this.__booted&&this.__probed?(this.__booted=!0,this._initialLoad()):(this._applyContainerSizingFromConfig(!0),(Pe=this._applyAutoScale)==null||Pe.call(this),this._resizeContainer())}_startInitialAutosize(){var t,n;try{if(this.__autoInitStarted)return;this.__autoInitStarted=!0;let o=!1,c=()=>{o||(o=!0,requestAnimationFrame(()=>{var y;o=!1;try{(y=this._applyAutoScale)==null||y.call(this)}catch{}}))};requestAnimationFrame(()=>{c(),requestAnimationFrame(c)}),setTimeout(c,0);try{(n=(t=document.fonts)==null?void 0:t.ready)==null||n.then(c)}catch{}let s=String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase(),l=this.cardContainer||this.querySelector("#cardContainer");if(!l)return;let u={childList:!0,subtree:!0,attributes:!0,attributeFilter:["style","class"]},f={childList:!0,subtree:!0},v=this.autoResizeCards||s==="auto",m=new MutationObserver(()=>c());m.observe(l,v?u:f),this.__autoInitMO=m,setTimeout(()=>{try{m.disconnect()}catch{}this.__autoInitMO=null},2e3)}catch{}}connectedCallback(){var t,n,o,c,s;try{this._installGridObservers_(),this._updateGridButtonsVisibility()}catch{}(t=this._startInitialAutosize)==null||t.call(this);try{(n=this._applyHaChromeVisibility_)==null||n.call(this),this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var u;return(u=this._applyAutoFillNoScale)==null?void 0:u.call(this)})});try{(o=this._ensureScreenSaverStyles)==null||o.call(this),(c=this._updateScreensaverSettings)==null||c.call(this)}catch{}}catch{this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var u;return(u=this._applyAutoFillNoScale)==null?void 0:u.call(this)})})}if(this.__keyHandlerBound||(this.__keyHandler=l=>this._onKeyDown_(l),window.addEventListener("keydown",this.__keyHandler),this.__keyHandlerBound=!0,this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var u;return(u=this._applyAutoFillNoScale)==null?void 0:u.call(this)})})),this.__boundExitEdit||(this.__boundExitEdit=()=>this._toggleEditMode(!1),this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var u;return(u=this._applyAutoFillNoScale)==null?void 0:u.call(this)})})),window.addEventListener("pagehide",this.__boundExitEdit),window.addEventListener("beforeunload",this.__boundExitEdit),this.__onVis=()=>{document.visibilityState==="hidden"&&this._toggleEditMode(!1),this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var u;return(u=this._applyAutoFillNoScale)==null?void 0:u.call(this)})})},document.addEventListener("visibilitychange",this.__onVis),this._toggleEditMode(!1),!this.__visObs){let l=new IntersectionObserver(u=>{u.some(f=>f.isIntersecting)&&(requestAnimationFrame(()=>this._applyAutoScale&&this._applyAutoScale()),l.observe(this),this.__visObs=l)});this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var f;return(f=this._applyAutoFillNoScale)==null?void 0:f.call(this)})})}this.__ddcOnWinResize=this.__ddcOnWinResize||(()=>{var l,u;if(this.hasAttribute("ddc-fixed-ui"))try{(l=this._computeHaSidebarGutters_)==null||l.call(this)}catch{}(u=this._applyAutoScale)==null||u.call(this)});try{let l=String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase();this.autoResizeCards||l==="auto"?window.addEventListener("resize",this.__ddcOnWinResize):window.removeEventListener("resize",this.__ddcOnWinResize)}catch{}try{(s=this.__ddcBindPointerListeners)==null||s.call(this),this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var u;return(u=this._applyAutoFillNoScale)==null?void 0:u.call(this)})})}catch{this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var u;return(u=this._applyAutoFillNoScale)==null?void 0:u.call(this)})})}this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var u;return(u=this._applyAutoFillNoScale)==null?void 0:u.call(this)})})}disconnectedCallback(){var t,n,o,c,s,l,u;try{this._uninstallGridObservers_()}catch{}try{(t=this._setHeaderVisible_)==null||t.call(this,!0),(n=this._setSidebarVisible_)==null||n.call(this,!0)}catch{}try{(o=this._applyHaChromeVisibility_)==null||o.call(this)}catch{}this.__keyHandlerBound&&this.__keyHandler&&(window.removeEventListener("keydown",this.__keyHandler),this.__keyHandlerBound=!1,this.__keyHandler=null),this.__keyHandlerBound||(this.__keyHandler=f=>this._onKeyDown_(f),window.addEventListener("keydown",this.__keyHandler),this.__keyHandlerBound=!0);try{(c=this._destroyParticles_)==null||c.call(this)}catch{}try{(s=this._destroyYouTube_)==null||s.call(this)}catch{}window.removeEventListener("pagehide",this.__boundExitEdit),window.removeEventListener("beforeunload",this.__boundExitEdit),document.removeEventListener("visibilitychange",this.__onVis);try{this._screensaverTimer&&(clearTimeout(this._screensaverTimer),this._screensaverTimer=null),this._clockInterval&&(clearInterval(this._clockInterval),this._clockInterval=null),this._screensaverActivityHandler&&(this._screensaverEvents||[]).forEach(v=>{document.removeEventListener(v,this._screensaverActivityHandler,!0)}),this.screenSaverOverlay&&this.screenSaverOverlay.parentNode&&this.screenSaverOverlay.parentNode.removeChild(this.screenSaverOverlay)}catch{}try{(l=this.__ddcResizeObs)==null||l.disconnect()}catch{}if(this.__ddcResizeObs=null,(u=this._stopScaleWatch)==null||u.call(this),this.__ddcOnWinResize&&(window.removeEventListener("resize",this.__ddcOnWinResize),this.__ddcOnWinResize=null),this.__lpInstalled&&this.__lpHandlers){let f=this.cardContainer;f==null||f.removeEventListener("mousedown",this.__lpHandlers.mouseDown),window.removeEventListener("mousemove",this.__lpHandlers.mouseMove),window.removeEventListener("mouseup",this.__lpHandlers.mouseUp),window.removeEventListener("contextmenu",this.__lpHandlers.contextMenu),f==null||f.removeEventListener("touchstart",this.__lpHandlers.touchStart),window.removeEventListener("touchmove",this.__lpHandlers.touchMove),window.removeEventListener("touchend",this.__lpHandlers.touchEnd),window.removeEventListener("touchcancel",this.__lpHandlers.touchCancel),this.__lpInstalled=!1,this.__lpHandlers=null}try{this.__visObs&&this.__visObs.disconnect()}catch{}this.__visObs=null,this.__ddcOnWinResize&&window.removeEventListener("resize",this.__ddcOnWinResize);try{this.__ddcPtrBound&&(this.removeEventListener("pointerdown",this.__onDDCPointerDown),this.removeEventListener("pointermove",this.__onDDCPointerMove),window.removeEventListener("pointerup",this.__onDDCPointerUp),window.removeEventListener("pointercancel",this.__onDDCPointerUp),this.__ddcPtrBound=!1)}catch{}}set hass(t){var o;this._hass=t,cc("set hass"),!this.__probed&&t&&(this.__probed=!0,this._probeBackend().then(()=>{this.__probed=!0,!this.__booted&&this.__cfgReady&&(this.__booted=!0,this._initialLoad(!0))}));let n=((o=this.cardContainer)==null?void 0:o.children)||[];for(let c of n){let s=c.firstElementChild;s&&s.hass!==t&&(s.hass=t)}try{this._applyVisibility_()}catch{}}get hass(){return this._hass}async _initialLoad(t=!1){var n,o,c,s,l,u,f,v,m,y,x,S,w,T,R,C,O,P,b;if(!this.__booting){this.__booting=!0;try{this._loading=!0,t&&this.cardContainer&&(this.cardContainer.innerHTML=""),this._dbgPush("boot","Initial load start",{force:t});let M=[],I=null;if(this._backendOK&&this.storageKey)try{I=await this._loadLayoutFromBackend(this.storageKey)}catch(F){this._dbgPush("boot","Backend load failed",{error:String(F)})}if(!I&&this.storageKey){let F=null;try{F=JSON.parse(localStorage.getItem(`ddc_local_${this.storageKey}`)||"null")}catch{}if(F)if(this._dbgPush("boot","Found local snapshot",{bytes:JSON.stringify(F).length}),this._backendOK)try{await this._saveLayoutToBackend(this.storageKey,F),this._dbgPush("boot","Migrated local -> backend"),I=F}catch(U){this._dbgPush("boot","Migration failed, staying local",{error:String(U)}),I=F}else I=F}!I&&((o=(n=this._config)==null?void 0:n.cards)!=null&&o.length)&&(this._dbgPush("boot","Using embedded config"),I={cards:this._config.cards});let q={...this._config||{}};if(I!=null&&I.options){let{storage_key:F,...U}=I.options;delete U.background_mode,delete U.background_image,delete U.background_particles,delete U.background_youtube,this._applyImportedOptions(U,!0)}else typeof(I==null?void 0:I.grid)=="number"&&this._applyImportedOptions({grid:I.grid},!0);let K=["storage_key","grid","drag_live_snap","auto_save","auto_save_debounce","container_background","card_background","card_shadow","debug","disable_overlap","container_size_mode","container_fixed_width","container_fixed_height","container_preset","container_preset_orientation","tabs","tabs_position","default_tab","hide_tabs_when_single","auto_resize_cards","background_mode","background_image","background_particles","background_youtube"],Y={};for(let F of K)q[F]!==void 0&&(Y[F]=q[F]);Object.keys(Y).length&&this._applyImportedOptions(Y,!0);let ie=!1;if((c=I==null?void 0:I.cards)!=null&&c.length){for(let F of I.cards){if(!(F!=null&&F.card)||typeof F.card=="object"&&Object.keys(F.card).length===0){let ce=this._makePlaceholderAt(((s=F.position)==null?void 0:s.x)||0,((l=F.position)==null?void 0:l.y)||0,((u=F.size)==null?void 0:u.width)||200,((f=F.size)==null?void 0:f.height)||200);this.cardContainer.appendChild(ce);try{this._rebuildOnce(ce.firstElementChild)}catch{}ie=!0;continue}let U=await this._createCard(F.card),V=this._makeWrapper(U);this.editMode&&V.classList.add("editing"),V.dataset.tabId=this._normalizeTabId(F.tabId||F.tab_id||this.defaultTab),this._setCardPosition(V,((v=F.position)==null?void 0:v.x)||0,((m=F.position)==null?void 0:m.y)||0),V.style.width=`${(x=(y=F.size)==null?void 0:y.width)!=null?x:14*this.gridSize}px`,V.style.height=`${(w=(S=F.size)==null?void 0:S.height)!=null?w:10*this.gridSize}px`,F.z!=null&&(V.style.zIndex=String(F.z)),this.cardContainer.appendChild(V);try{this._rebuildOnce(V.firstElementChild)}catch{}this._initCardInteract(V),ie=!0}this._resizeContainer(),(T=this._applyAutoScale)==null||T.call(this),this._dbgPush("boot","Layout applied",{count:I.cards.length})}ie||(this._showEmptyPlaceholder(),(R=this._applyAutoScale)==null||R.call(this),this._dbgPush("boot","No saved layout found; showing placeholder")),this._updateStoreBadge(),this._syncEmptyStateUI(),t&&(this._cardModProcessed=!1),setTimeout(()=>{this._processCardModOnce()},100);try{M.forEach(F=>{try{F.dispatchEvent(new Event("ll-rebuild",{bubbles:!0,composed:!0}))}catch{}})}catch{}}finally{this._loading=!1,this.__booting=!1,this.__dirty=!1,(C=this._updateApplyBtn)==null||C.call(this);try{this._renderTabs(),this._applyActiveTab()}catch{}try{this._applyVisibility_()}catch{}try{let M=(P=(O=this.cardContainer)==null?void 0:O.querySelector)==null?void 0:P.call(O,"#ddcBgHost");(!M||!M.firstChild)&&((b=this._applyBackgroundFromConfig)==null||b.call(this))}catch{}}}}_normalizeTabId(t){let n=Array.isArray(this.tabs)?this.tabs.map(o=>o.id):[];return n.length?t&&n.includes(t)?t:this.defaultTab||n[0]:this.defaultTab||"default"}_renderTabs(){var o,c,s,l,u;let t=this.tabsBar;if(!t)return;let n=Array.isArray(this.tabs)?this.tabs:[];if(!n.length||n.length===1&&this.hideTabsWhenSingle){t.style.display="none";return}t.style.display="",t.className="ddc-tabs "+(this.tabsPosition==="left"?"ddc-tabs-left":""),t.innerHTML="";try{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&(t.style.width="100%",t.style.maxWidth="100%")}catch{}for(let f of n){let v=document.createElement("button");v.className="ddc-tab"+(f.id===this.activeTab?" active":""),v.dataset.tabId=f.id,v.title=f.label||f.id,v.innerHTML=`${f.icon?`<ha-icon icon="${f.icon}"></ha-icon>`:""}<span class="ddc-tab-label">${(o=f.label)!=null?o:f.id}</span>`,v.addEventListener("click",()=>{var m,y,x;if(this.activeTab!==f.id){this.activeTab=f.id;try{localStorage.setItem(`ddc_lasttab_${this.storageKey}`,f.id)}catch{}this._applyActiveTab(),this._renderTabs();try{this._applyVisibility_()}catch{}try{let S=(y=(m=this.cardContainer)==null?void 0:m.querySelector)==null?void 0:y.call(m,"#ddcBgHost");(!S||!S.firstChild)&&((x=this._applyBackgroundFromConfig)==null||x.call(this))}catch{}}}),t.appendChild(v)}this.rootEl&&this.rootEl.classList.toggle("ddc-tabs-left-layout",this.tabsPosition==="left");try{(c=this._updateTabsA11y_)==null||c.call(this)}catch{}try{(s=this._syncTabsWidth_)==null||s.call(this)}catch{}try{let f=(l=t.querySelector)==null?void 0:l.call(t,".ddc-tab.active");if(f&&t.scrollWidth>t.clientWidth){let v=0;try{v=window.innerWidth||((u=document.documentElement)==null?void 0:u.clientWidth)||0}catch{}(!v||v>768)&&f.scrollIntoView({behavior:"auto",block:"nearest",inline:"nearest"})}}catch{}}_applyActiveTab(){var o,c,s,l,u;let t=this._normalizeTabId(this.activeTab);(((c=(o=this.cardContainer)==null?void 0:o.querySelectorAll)==null?void 0:c.call(o,".card-wrapper"))||[]).forEach(f=>{let v=f.dataset.tabId?this._normalizeTabId(f.dataset.tabId):this.defaultTab;if(!this.tabs||!this.tabs.length){f.style.display="",f.inert=!1,f.classList.remove("ddc-hidden");return}v===t?(f.style.display="",f.inert=!1,f.classList.remove("ddc-hidden")):(f.style.display="none",f.inert=!0,f.classList.add("ddc-hidden"),f.classList.remove("ddc-selected"))});try{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(s=this._applyAutoFillNoScale)==null||s.call(this):(l=this._applyAutoScale)==null||l.call(this)}catch{}try{this._clearSelection()}catch{}try{this.animateCards&&((u=this._animateCards)==null||u.call(this))}catch{}}_animateCards(){var t,n,o,c;try{let s=((n=(t=this.cardContainer)==null?void 0:t.querySelectorAll)==null?void 0:n.call(t,".card-wrapper"))||[],l=(c=(o=window.matchMedia)==null?void 0:o.call(window,"(prefers-reduced-motion: reduce)"))==null?void 0:c.matches,u=800,f=.8,m=u*.3,y=u-m;s.forEach(x=>{var b,M,I;let S=(b=window.getComputedStyle)==null?void 0:b.call(window,x);if(x.style.display==="none"||S&&S.display==="none"||x.classList.contains("ddc-hidden"))return;let T=S&&S.transform&&S.transform!=="none"?S.transform:"",R=100*f,C=`${T} translate3d(0, ${R}%, 0)`,O=`${T} translate3d(0, 0, 0)`,P=Math.random()*(y*Math.min(f,2));if(l){try{x.animate([{opacity:0},{opacity:1}],{duration:u*.15,delay:P,easing:"linear",fill:"backwards"})}catch{x.style.opacity="0",setTimeout(()=>{x.style.transition=`opacity ${u*.15}ms linear`,x.style.opacity="1"},P)}return}try{x.style.willChange="opacity, transform";let q="cubic-bezier(0.4, 0, 0.2, 1)";x.animate([{opacity:0},{opacity:1}],{duration:m,delay:P,easing:"linear",fill:"backwards"}),(I=(M=x.animate([{transform:C},{transform:O}],{duration:m,delay:P,easing:q,fill:"backwards"})).addEventListener)==null||I.call(M,"finish",()=>{x.style.willChange=""})}catch{x.style.opacity="0",x.style.transform=C,x.style.willChange="opacity, transform",setTimeout(()=>{x.style.transition=`opacity ${m}ms linear, transform ${m}ms cubic-bezier(0.4,0,0.2,1)`,x.style.opacity="1",x.style.transform=O,setTimeout(()=>{x.style.transition="",x.style.willChange=""},m+60)},P)}})}catch(s){console.warn("[ddc:animate] animation error",s)}}_addTabSelectorToChip(t,n=null){if(!this.tabs||!this.tabs.length)return;let o=t.querySelector(".chip");if(!o)return;let c=o.querySelector("select.ddc-chip-tab");c||(c=document.createElement("select"),c.className="ddc-chip-tab",c.style.marginLeft="6px",c.title="Assign to tab",o.appendChild(c)),c.innerHTML="";for(let l of this.tabs){let u=document.createElement("option");u.value=l.id,u.textContent=l.label||l.id,c.appendChild(u)}let s=this._normalizeTabId(n||t.dataset.tabId||this.activeTab||this.defaultTab);c.value=s,t.dataset.tabId=s,c.onchange=()=>{var l,u,f;t.dataset.tabId=this._normalizeTabId(c.value),this._applyActiveTab();try{this._applyVisibility_()}catch{}try{let v=(u=(l=this.cardContainer)==null?void 0:l.querySelector)==null?void 0:u.call(l,"#ddcBgHost");(!v||!v.firstChild)&&((f=this._applyBackgroundFromConfig)==null||f.call(this))}catch{}try{this._queueSave("tab-change")}catch{}}}_toggleEditMode(t=null){var x,S,w,T,R,C,O,P,b,M,I,q,K,Y,ie,F,U;try{(x=this.__clearPressTimer)==null||x.call(this)}catch{}let n=t===null?!this.editMode:!!t,o=!this.editMode&&n;try{let V=this.config&&this.config.edit_mode_pin!=null?String(this.config.edit_mode_pin):"",je=((this.editModePin!=null?String(this.editModePin):"")||V).trim();if(n&&!this.editMode&&je){let Pe=window.prompt("Enter PIN / password to open Edit Mode:");if(Pe===null)return;if(String(Pe).trim()!==je){(S=this._toast)==null||S.call(this,"Incorrect PIN/password.");return}}}catch{}let c=this.renderRoot||this.shadowRoot||this,s=(w=c==null?void 0:c.querySelector)==null?void 0:w.call(c,".ddc-toolbar.streamlined.v2, .ddc-toolbar.streamlined.v3"),l=(V,ce)=>{try{V&&(V.style.display=ce)}catch{}},u="inline-block",f="none",v=()=>{l(this.addButton,u),l(this.reloadBtn,u),l(this.diagBtn,u),l(this.exitEditBtn,u),l(this.exportBtn,u),l(this.importBtn,u),l(this.exploreBtn,u),l(this.storeBadge,u),l(this.applyLayoutBtn,u),l(this.copyBtn,u),l(this.pasteBtn,u),l(this.settingsBtn,u)},m=()=>{l(this.addButton,f),l(this.reloadBtn,f),l(this.diagBtn,f),l(this.exitEditBtn,f),l(this.exportBtn,f),l(this.importBtn,f),l(this.exploreBtn,f),l(this.storeBadge,f),l(this.applyLayoutBtn,f),l(this.copyBtn,f),l(this.pasteBtn,f),l(this.settingsBtn,f)};if(s)if(n)s.setAttribute("data-force-open","1"),s.style.display="grid",v(),requestAnimationFrame(()=>{let ce=s.scrollHeight||0;s.style.setProperty("--open-h",ce+"px"),s.classList.add("is-open")});else{s.setAttribute("data-force-open","1"),s.style.display="grid";let ce=s.scrollHeight||0;s.style.setProperty("--open-h",ce+"px"),requestAnimationFrame(()=>{s.classList.remove("is-open")}),setTimeout(()=>{m(),s.removeAttribute("data-force-open")},260)}else n?v():m();this.editMode=n,(T=this._syncEmptyStateUI)==null||T.call(this),(R=this.cardContainer)==null||R.classList.toggle("grid-on",this.editMode);try{typeof this._resetScreensaverTimer=="function"&&this._resetScreensaverTimer()}catch{}if((((O=(C=this.cardContainer)==null?void 0:C.querySelectorAll)==null?void 0:O.call(C,".card-wrapper"))||[]).forEach(V=>{V.classList.toggle("editing",this.editMode);let ce=V.querySelector(".resize-handle");ce&&(ce.style.display=this.editMode?"flex":"none"),!V.dataset.placeholder&&window.interact&&window.interact(V).draggable(this.editMode).resizable(this.editMode),V.style.touchAction=this.editMode?"none":"auto"}),this.editMode||(P=this._clearSelection)==null||P.call(this),this.editMode||(b=this.cardContainer)==null||b.querySelectorAll(".card-wrapper.dragging").forEach(V=>V.classList.remove("dragging")),o){let V=(M=this.__lastHoldX)!=null?M:null,ce=(I=this.__lastHoldY)!=null?I:null;(q=this._playEditRipple)==null||q.call(this,V,ce)}try{(K=this._applyHaChromeVisibility_)==null||K.call(this)}catch{}try{let V=((ie=(Y=this.shadowRoot)==null?void 0:Y.querySelector)==null?void 0:ie.call(Y,".ddc-root"))||((U=(F=this.renderRoot)==null?void 0:F.querySelector)==null?void 0:U.call(F,".ddc-root"))||null;if(V){let ce=0;if(n&&s)try{ce=s.scrollHeight||s.offsetHeight||0}catch{}V.style.setProperty("--ddc-toolbar-height",ce+"px"),!this.autoResizeCards&&this.cardContainer&&(n&&s?this.cardContainer.style.marginTop=ce+"px":this.cardContainer.style.marginTop="")}}catch{}try{typeof this._resizeContainer=="function"&&this._resizeContainer(),typeof this._applyAutoScale=="function"&&this._applyAutoScale()}catch{}}_isInHaEditorPreview(){let t=this;for(;t;){let n=t.nodeType===1&&t.localName?t.localName.toLowerCase():"";if(n==="hui-card-editor"||n==="hui-dialog-edit-card"||n==="hui-card-preview"||n==="ha-dialog"||n==="mwc-dialog")return!0;let o=t.getRootNode&&t.getRootNode();t=t.parentElement||o&&o.host||null}return!1}_installLongPressToEnterEdit(){if(this.__lpInstalled)return;this.__lpInstalled=!0;let t=this.cardContainer;if(!t)return;let n=800,o=18,c=b=>!!b&&typeof b=="object"&&b.nodeType===1,s=(b,M)=>{try{return!!(b&&M&&typeof b.contains=="function"&&c(M)&&b.contains(M))}catch{return!1}},l=b=>s(this.cardContainer,b),u=b=>{var q,K,Y;let M=(K=(q=b.target)==null?void 0:q.closest)==null?void 0:K.call(q,".card-wrapper");if(c(M)&&l(M)&&!M.classList.contains("ddc-placeholder"))return!0;let I=typeof b.composedPath=="function"?b.composedPath():[];for(let ie of I)if(c(ie)&&l(ie)&&(Y=ie.classList)!=null&&Y.contains("card-wrapper")&&!ie.classList.contains("ddc-placeholder"))return!0;return!1},f=(b,M)=>{let I=document.createElement("div");I.className="ddc-press-ring",document.body.appendChild(I),Object.assign(I.style,{position:"fixed",left:`${b}px`,top:`${M}px`,zIndex:"100000",width:"44px",height:"44px",pointerEvents:"none",marginLeft:"-22px",marginTop:"-22px",filter:"drop-shadow(0 2px 6px rgba(0,0,0,.35))"}),I.innerHTML=`
      <svg viewBox="0 0 44 44" aria-hidden="true" style="width:44px;height:44px">
        <circle cx="22" cy="22" r="18" style="stroke:rgba(255,255,255,.45);stroke-width:4;fill:none"></circle>
        <circle class="pr-fg" cx="22" cy="22" r="18" style="stroke:var(--primary-color);stroke-width:4;fill:none;stroke-linecap:round"></circle>
        <circle cx="22" cy="22" r="2" style="fill:var(--primary-color);opacity:.95"></circle>
      </svg>`;let q=I.querySelector(".pr-fg"),K=18,Y=2*Math.PI*K;return q.style.strokeDasharray=`${Y}`,q.style.strokeDashoffset=`${Y}`,requestAnimationFrame(()=>{q.style.transition=`stroke-dashoffset ${n}ms linear`,q.style.strokeDashoffset="0"}),{el:I,move(ie,F){I.style.left=`${ie}px`,I.style.top=`${F}px`},remove(){try{I.remove()}catch{}}}},v=null,m=null,y=0,x=0,S=null,w=()=>{v&&clearTimeout(v),v=null,m==null||m.remove(),m=null};this.__clearPressTimer=w;let T=b=>{b.pointerType==="mouse"&&b.button!==0||this._isInHaEditorPreview()||!l(b.target)||u(b)||(S=b.pointerId,y=b.clientX,x=b.clientY,this.__lastHoldX=y,this.__lastHoldY=x,m=f(y,x),v=setTimeout(()=>{var I;w();let M=!this.editMode;this._toggleEditMode(M),(I=this._toast)==null||I.call(this,`Edit mode ${M?"enabled":"disabled"}`)},n))},R=b=>{v==null||b.pointerId!==S||(m==null||m.move(b.clientX,b.clientY),(Math.abs(b.clientX-y)>o||Math.abs(b.clientY-x)>o)&&w())},C=b=>{b.pointerId===S&&(w(),S=null)},O=b=>{if(v)return b.preventDefault(),b.stopPropagation(),!1},P=b=>{var I;if(this._isInHaEditorPreview()||!l(b.target)||u(b))return;let M=!this.editMode;this._toggleEditMode(M),(I=this._toast)==null||I.call(this,`Edit mode ${M?"enabled":"disabled"}`)};t.addEventListener("pointerdown",T),window.addEventListener("pointermove",R,{passive:!0}),window.addEventListener("pointerup",C,{passive:!0}),window.addEventListener("pointercancel",C,{passive:!0}),window.addEventListener("contextmenu",O),t.addEventListener("dblclick",P),this.__lpHandlers={onPointerDown:T,onPointerMove:R,onPointerUpOrCancel:C,onContextMenu:O,onDblClick:P}}_isLayoutEmpty(){let t=this.cardContainer;return t?t.querySelectorAll(".card-wrapper:not(.ddc-placeholder)").length===0:!0}_syncEmptyStateUI(){let t=this._isLayoutEmpty();if(this.addButton){let o=this.editMode||t;this.addButton.style.display=o?"inline-block":"none",this.addButton.classList.toggle("cta-empty",!this.editMode&&t)}let n=o=>o&&(o.style.display=this.editMode?"inline-block":"none");n(this.reloadBtn),n(this.diagBtn),n(this.exitEditBtn),n(this.exportBtn),n(this.importBtn),n(this.exploreBtn),n(this.storeBadge),n(this.applyLayoutBtn)}_updateApplyBtn(){this.applyLayoutBtn&&(this.applyLayoutBtn.disabled=!this.__dirty)}_markDirty(t=""){var n;this.__dirty=!0,this._updateApplyBtn(),(n=this._dbgPush)==null||n.call(this,"dirty","Marked dirty",{reason:t})}_playEditRipple(t=null,n=null){let o=this.cardContainer;if(!o)return;let c=o.getBoundingClientRect(),s=t==null?c.left+c.width/2:t,l=n==null?c.top+c.height/2:n,u=s-c.left,f=l-c.top,v=document.createElement("div");v.className="ddc-ripple-veil",v.style.setProperty("--rip-x",`${u}px`),v.style.setProperty("--rip-y",`${f}px`),o.appendChild(v),setTimeout(()=>v.remove(),450)}_initInteract(){this.cardContainer.querySelectorAll(".card-wrapper").forEach(n=>this._initCardInteract(n))}_initCardInteract(t){if(!window.interact||t.dataset.placeholder)return;let n=this.gridSize,o=!!this.dragLiveSnap,s=[window.interact.modifiers.restrictRect({restriction:"parent",endOnly:!0})],l=this.__pointerScaleX&&Math.abs(this.__pointerScaleX-1)>1e-6||this.__pointerScaleY&&Math.abs(this.__pointerScaleY-1)>1e-6;if(this.dragLiveSnap&&!l){let u=window.interact.snappers.grid({x:this.gridSize,y:this.gridSize});s.push(window.interact.modifiers.snap({targets:[u],range:1/0,offset:"startCoords"}))}window.interact(t).draggable({enabled:this.editMode,inertia:!1,modifiers:s,listeners:{start:u=>{this._selection.has(t)||(!(u!=null&&u.shiftKey)&&!(u!=null&&u.ctrlKey)&&!(u!=null&&u.metaKey)&&this._clearSelection(),this._toggleSelection(t,!0));let f=Array.from(this._selection);this.__groupDrag={leader:t,members:f,startRaw:new Map(f.map(m=>[m,{x:parseFloat(m.getAttribute("data-x-raw"))||parseFloat(m.getAttribute("data-x"))||0,y:parseFloat(m.getAttribute("data-y-raw"))||parseFloat(m.getAttribute("data-y"))||0,w:parseFloat(m.style.width)||m.getBoundingClientRect().width,h:parseFloat(m.style.height)||m.getBoundingClientRect().height}]))},this.__collisionOriginals=new Map,this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)").forEach(m=>{let y=parseFloat(m.getAttribute("data-x-raw"))||parseFloat(m.getAttribute("data-x"))||0,x=parseFloat(m.getAttribute("data-y-raw"))||parseFloat(m.getAttribute("data-y"))||0;this.__collisionOriginals.set(m,{x:y,y:x})}),f.forEach(m=>{m.classList.add("dragging"),m.getAttribute("data-x-raw")===null&&m.setAttribute("data-x-raw",m.getAttribute("data-x")||"0"),m.getAttribute("data-y-raw")===null&&m.setAttribute("data-y-raw",m.getAttribute("data-y")||"0")})},move:u=>{if(!this.__groupDrag)return;let f=this.gridSize,v=!!this.dragLiveSnap,m=this.__groupDrag.leader,y=this.__groupDrag.startRaw.get(m),x=this.__pointerScaleX||1,S=this.__pointerScaleY||1,w=(parseFloat(m.getAttribute("data-x-raw"))||y.x)+u.dx/x,T=(parseFloat(m.getAttribute("data-y-raw"))||y.y)+u.dy/S,R=w-y.x,C=T-y.y,O=this.__groupDrag.members.map(P=>{let b=this.__groupDrag.startRaw.get(P),M=b.x+R,I=b.y+C,q=v?Math.round(M/f)*f:M,K=v?Math.round(I/f)*f:I;return{el:P,rawX:M,rawY:I,snapX:q,snapY:K,w:b.w,h:b.h}});this.disableOverlap&&this._pushCardsOutOfTheWay(O,R,C,v,f),m.setAttribute("data-x-raw",String(w)),m.setAttribute("data-y-raw",String(T));for(let P of O)P.el.setAttribute("data-x-raw",String(P.rawX)),P.el.setAttribute("data-y-raw",String(P.rawY)),this._setCardPosition(P.el,P.snapX,P.snapY);this._resizeContainer()},end:u=>{if(!this.__groupDrag)return;let f=this.gridSize,v=this.__groupDrag.members.map(m=>{let y=parseFloat(m.getAttribute("data-x-raw"))||parseFloat(m.getAttribute("data-x"))||0,x=parseFloat(m.getAttribute("data-y-raw"))||parseFloat(m.getAttribute("data-y"))||0,S=Math.round(y/f)*f,w=Math.round(x/f)*f,T=parseFloat(m.style.width)||m.getBoundingClientRect().width,R=parseFloat(m.style.height)||m.getBoundingClientRect().height;return{el:m,rawX:y,rawY:x,snapX:S,snapY:w,w:T,h:R}});this.disableOverlap&&this._pushCardsOutOfTheWay(v,0,0,!1,f);for(let m of v)this._setCardPosition(m.el,m.snapX,m.snapY),m.el.setAttribute("data-x-raw",String(m.snapX)),m.el.setAttribute("data-y-raw",String(m.snapY));for(let m of this.__groupDrag.members)m.classList.remove("dragging");this._resizeContainer(),this._isContainerFixed()&&this._clampAllCardsInside(),this._queueSave(this.__groupDrag.members.length>1?"group-drag-end":"drag-end"),this.__groupDrag=null,this.__collisionOriginals=null}}}),window.interact(t).resizable({enabled:this.editMode,edges:{right:".resize-handle",bottom:".resize-handle"},inertia:!1,listeners:{move:u=>{let f=this.gridSize,v=!!this.dragLiveSnap,m=parseFloat(t.style.width)||t.getBoundingClientRect().width,y=parseFloat(t.style.height)||t.getBoundingClientRect().height,x=this.__pointerScaleX||1,S=this.__pointerScaleY||1,w=u.rect.width/x,T=u.rect.height/S,R=v?Math.max(f,Math.round(w/f)*f):w,C=v?Math.max(f,Math.round(T/f)*f):T,O=parseFloat(t.getAttribute("data-x"))||0,P=parseFloat(t.getAttribute("data-y"))||0,b=R,M=C;if(this._isContainerFixed()){let{w:q,h:K}=this._getContainerSize();b=Math.min(R,Math.max(this.gridSize,q-O)),M=Math.min(C,Math.max(this.gridSize,K-P))}let I=[this._rectFor(t,O,P,b,M)];this.disableOverlap&&this._anyCollisionFor(I,new Set([t]))||(t.style.width=`${b}px`,t.style.height=`${M}px`,this._resizeContainer())},end:()=>{let u=this.gridSize,f=parseFloat(t.style.width)||t.getBoundingClientRect().width,v=parseFloat(t.style.height)||t.getBoundingClientRect().height,m=Math.max(u,Math.round(f/u)*u),y=Math.max(u,Math.round(v/u)*u),x=parseFloat(t.getAttribute("data-x"))||0,S=parseFloat(t.getAttribute("data-y"))||0;if(this._isContainerFixed()){let{w:T,h:R}=this._getContainerSize();m=Math.min(m,Math.max(u,T-x)),y=Math.min(y,Math.max(u,R-S))}let w=[this._rectFor(t,x,S,m,y)];this.disableOverlap&&this._anyCollisionFor(w,new Set([t]))||(t.style.width=`${m}px`,t.style.height=`${y}px`),this._resizeContainer(),this._isContainerFixed()&&this._clampAllCardsInside(),this._queueSave("resize-end")}}}),t.addEventListener("mousedown",u=>{this.editMode&&(u.target.closest(".resize-handle")||u.target.closest(".delete-handle")||u.target.closest(".chip")||(u.shiftKey||u.ctrlKey||u.metaKey?(u.stopPropagation(),this._toggleSelection(t)):this._selection.has(t)||(this._clearSelection(),this._toggleSelection(t,!0))))})}async _createCard(t){let o=(await this._helpersPromise||await window.loadCardHelpers()).createCardElement(t);if(o.hass=this.hass,t.type==="custom:mod-card"&&(await new Promise(c=>setTimeout(c,0)),o.setConfig&&typeof o.setConfig=="function"))try{o.setConfig(t)}catch{}return o}_makeWrapper(t){let n=document.createElement("div");if(n.classList.add("card-wrapper"),n.dataset.tabId=this._normalizeTabId(this.activeTab||this.defaultTab),this.editMode&&n.classList.add("editing"),!n.style.zIndex){let u=this._highestZ()+1;n.style.zIndex=String(Math.max(u,6))}let o=document.createElement("div");o.className="chip",o.innerHTML=`
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
    `;let c=document.createElement("div");c.className="delete-handle",c.innerHTML='<ha-icon icon="mdi:close-thick"></ha-icon>',c.addEventListener("click",u=>{var f,v;u.stopPropagation(),this._selection.size>1&&this._selection.has(n)?(Array.from(this._selection).forEach(y=>y.remove()),this._clearSelection(),this._resizeContainer(),this._queueSave("delete-multi"),(f=this._ensurePlaceholderIfEmpty)==null||f.call(this)):(n.remove(),this._resizeContainer(),this._queueSave("delete"),(v=this._ensurePlaceholderIfEmpty)==null||v.call(this))});try{this._addTabSelectorToChip(n,n.dataset.tabId)}catch{}o.addEventListener("click",async u=>{var v,m,y,x,S;u.stopPropagation();let f=(y=(m=(v=u.target)==null?void 0:v.closest("button"))==null?void 0:m.dataset)==null?void 0:y.act;if(f){if(f==="delete")this._selection.size>1&&this._selection.has(n)?(Array.from(this._selection).forEach(T=>T.remove()),this._clearSelection(),this._resizeContainer(),this._queueSave("delete-multi"),this._ensurePlaceholderIfEmpty()):(n.remove(),this._resizeContainer(),this._queueSave("delete"),this._ensurePlaceholderIfEmpty());else if(f==="duplicate"||f==="copy"){let w=this._selection.size>1&&this._selection.has(n)?Array.from(this._selection):[n];for(let T of w){let R=this._extractCardConfig(T.firstElementChild)||{},C=await this._createCard(R),O=this._makeWrapper(C);O.style.width=T.style.width,O.style.height=T.style.height;let P=(parseFloat(T.getAttribute("data-x"))||0)+this.gridSize,b=(parseFloat(T.getAttribute("data-y"))||0)+this.gridSize;this._setCardPosition(O,P,b);{let M=this._highestZ()+1;O.style.zIndex=String(Math.max(M,6))}try{let M=(x=T.dataset)==null?void 0:x.tabId;M&&(O.dataset.tabId=M)}catch{}this.cardContainer.appendChild(O);try{(S=this._addTabSelectorToChip)==null||S.call(this,O,O.dataset.tabId)}catch{}try{this._rebuildOnce(O.firstElementChild)}catch{}this._initCardInteract(O)}this._resizeContainer(),this._queueSave("duplicate")}else if(f==="front")this._adjustZ(n,1);else if(f==="back")this._adjustZ(n,-1);else if(f==="front-most"){let w=this._selection.size>1&&this._selection.has(n)?Array.from(this._selection):[n];w.sort((R,C)=>{let O=parseInt(R.style.zIndex||"1",10),P=parseInt(C.style.zIndex||"1",10);return O-P});let T=this._highestZ();for(let R of w)T+=1,R.style.zIndex=String(T);this._queueSave("z-change")}else if(f==="back-most"){let w=this._selection.size>1&&this._selection.has(n)?Array.from(this._selection):[n];w.sort((C,O)=>{let P=parseInt(C.style.zIndex||"1",10);return parseInt(O.style.zIndex||"1",10)-P});let T=1/0;this.cardContainer.querySelectorAll(".card-wrapper").forEach(C=>{let O=parseInt(C.style.zIndex||"1",10);O<T&&(T=O)}),isFinite(T)||(T=1);let R=T;for(let C of w)R-=1,C.style.zIndex=String(Math.max(6,R));this._queueSave("z-change")}else if(f==="edit"){let w=this._extractCardConfig(n.firstElementChild)||{};await this._openSmartPicker("edit",w,async T=>{var O,P,b;let R=n.firstElementChild,C=await this._createCard(T);try{n.dataset.cfg=JSON.stringify(T),(O=this._hasCardModDeep)!=null&&O.call(this,T)?n.dataset.needsCardMod="true":delete n.dataset.needsCardMod}catch{}n.replaceChild(C,R),await Mr();try{if(C.hass=this.hass,(P=C.requestUpdate)==null||P.call(C),C.updateComplete)try{await C.updateComplete}catch{}}catch{}try{this._rebuildOnce(C)}catch{}try{C.dispatchEvent(new Event("ll-rebuild",{bubbles:!0,composed:!0}))}catch{}(b=this._resizeContainer)==null||b.call(this);try{clearTimeout(this._saveTimer),await this._saveLayout(!0)}catch(M){console.warn("Save before reload failed",M)}window.location.reload()})}}});let s=document.createElement("div");s.className="shield";let l=document.createElement("div");l.classList.add("resize-handle"),this.editMode||(l.style.display="none"),l.title="Resize",l.innerHTML='<ha-icon icon="mdi:resize-bottom-right"></ha-icon>';try{let u=t._config||t.config;u&&typeof u=="object"&&Object.keys(u).length&&(n.dataset.cfg=JSON.stringify(u),this._hasCardModDeep(u)&&(n.dataset.needsCardMod="true"))}catch{}n.append(t,s,o,c,l);try{this._rebuildOnce(t)}catch{}return n}_makePlaceholderAt(t=0,n=0,o=400,c=400){let s=document.createElement("div");s.classList.add("card-wrapper","ddc-placeholder"),s.dataset.placeholder="1",this.editMode&&s.classList.add("editing"),this._setCardPosition(s,t,n),s.style.width=`${o}px`,s.style.height=`${c}px`,s.style.zIndex=String(this._highestZ()+1);let l=document.createElement("div");l.className="ddc-placeholder-inner",l.setAttribute("aria-hidden","true");let u=document.createElement("div");u.className="ddc-hero";let f=this.heroImage;if(f){let x=document.createElement("img");x.src=f,x.alt="",u.appendChild(x)}let v=document.createElement("div");v.className="ddc-title",v.textContent="Drag & Drop Card";let m=document.createElement("div");m.className="ddc-sub",m.textContent="Hold me / double click me to enter Edit mode",u.append(v,m),l.appendChild(u),s.addEventListener("dblclick",x=>{x.stopPropagation(),this._toggleEditMode(!0)});let y=document.createElement("div");return y.className="shield",s.append(l,y),s}_processCardModOnce(){var n;if(this._cardModProcessed)return;this._cardModProcessed=!0,(((n=this.cardContainer)==null?void 0:n.querySelectorAll('[data-needs-card-mod="true"]'))||[]).forEach(o=>{let c=o.firstElementChild;if(!c)return;let s=c._config||c.config;if(s){if(s.type==="custom:mod-card")setTimeout(()=>{if(c.updateComplete)c.updateComplete.then(()=>{c.requestUpdate()});else if(c.setConfig)try{c.setConfig({...s})}catch{}},100);else if(s.card_mod&&c.setConfig)try{c.setConfig({...s})}catch{}}})}_showEmptyPlaceholder(){var c,s,l;if(this.cardContainer.querySelector(".ddc-placeholder"))return;let t=200,n=200,o=this._makePlaceholderAt(0,0,t,n);this.cardContainer.appendChild(o),this._resizeContainer();try{let u=(c=this.getBoundingClientRect)==null?void 0:c.call(this),f=(l=(s=this.cardContainer)==null?void 0:s.getBoundingClientRect)==null?void 0:l.call(s);if(u&&f){let v=(u.width-t)/2,m=(u.height-n)/2,y=v-(f.left-u.left),x=m-(f.top-u.top);(!Number.isFinite(y)||y<0)&&(y=0),(!Number.isFinite(x)||x<0)&&(x=0),this._setCardPosition(o,y,x)}}catch{}this._syncEmptyStateUI()}_hideEmptyPlaceholder(){this.cardContainer.querySelectorAll(".ddc-placeholder").forEach(t=>t.remove())}_ensurePlaceholderIfEmpty(){var n;this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)").length===0&&this._showEmptyPlaceholder(),(n=this._applyAutoScale)==null||n.call(this),this._syncEmptyStateUI()}_adjustZ(t,n){let c=parseInt(t.style.zIndex||"1",10)+n;c=Math.max(1,Math.min(9999,c)),t.style.zIndex=String(c),this._queueSave("z-change")}_highestZ(){let t=5;return this.cardContainer.querySelectorAll(".card-wrapper").forEach(n=>{let o=parseInt(n.style.zIndex||"0",10);o>t&&(t=o)}),t}_setCardPosition(t,n,o){let c=Math.round(n),s=Math.round(o);t.style.transform=`translate3d(${c}px, ${s}px, 0)`,t.setAttribute("data-x",String(c)),t.setAttribute("data-y",String(s))}_computeDesignSize(){let t=this.cardContainer;if(!t)return{w:1,h:1};if(this._isContainerFixed()){let{w:l,h:u}=this._resolveFixedSize();return{w:Math.max(1,l),h:Math.max(1,u)}}let n=0,o=0,c=Array.from(t.querySelectorAll(".card-wrapper"));if(!c.length){let l=t.getBoundingClientRect();return{w:Math.max(1,l.width||1),h:Math.max(1,l.height||1)}}for(let l of c){let u=parseFloat(l.getAttribute("data-x-raw")||l.getAttribute("data-x")||"0")||0,f=parseFloat(l.getAttribute("data-y-raw")||l.getAttribute("data-y")||"0")||0,v=parseFloat(l.style.width)||l.getBoundingClientRect().width||0,m=parseFloat(l.style.height)||l.getBoundingClientRect().height||0,y=u+v,x=f+m;y>n&&(n=y),x>o&&(o=x)}let s=Math.max(1,this.gridSize||10);return n=Math.ceil(n/s)*s,o=Math.ceil(o/s)*s,{w:Math.max(1,n),h:Math.max(1,o)}}_startScaleWatch(){if(!this.autoResizeCards||this.__scaleRAF)return;let t=()=>{var l,u,f;if(!this.autoResizeCards){this.__scaleRAF=null;return}let n=1;try{let v=(l=this.getBoundingClientRect)==null?void 0:l.call(this);n=Math.max(1,v&&v.width||this.offsetWidth||1)}catch{n=Math.max(1,this.offsetWidth||1)}let o=this.__lastScaleW||0,c=Math.abs(n-o);(!o||c>=20)&&(this.__lastScaleW=n,String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(u=this._applyAutoFillNoScale)==null||u.call(this):(f=this._applyAutoScale)==null||f.call(this)),this.__scaleRAF=requestAnimationFrame(t)};this.__scaleRAF=requestAnimationFrame(t)}_stopScaleWatch(){if(this.__scaleRAF){try{cancelAnimationFrame(this.__scaleRAF)}catch{}this.__scaleRAF=null}}_applyAutoScale(){var u,f,v,m,y,x,S,w,T,R,C,O,P,b,M,I,q,K,Y,ie,F,U;let t="dynamic";try{if(t=String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase(),t==="auto"){(u=this._applyAutoFillNoScale)==null||u.call(this),this.removeAttribute("ddc-fixed-ui"),(v=(f=this.style)==null?void 0:f.removeProperty)==null||v.call(f,"--ddc-ui-width");return}}catch{}let n=this.cardContainer;if(!n)return;try{(this.autoResizeCards||t==="auto")&&typeof this._ensureScaleWrapper=="function"&&this._ensureScaleWrapper()}catch{}if(!this.autoResizeCards){let V=typeof this._computeDesignSize=="function"?this._computeDesignSize():{w:n.offsetWidth||1,h:n.offsetHeight||1};if(t==="dynamic"){try{(m=this._computeHaSidebarGutters_)==null||m.call(this)}catch{}this.removeAttribute("ddc-fixed-ui"),(x=(y=this.style)==null?void 0:y.removeProperty)==null||x.call(y,"--ddc-ui-width")}else this.removeAttribute("ddc-fixed-ui"),(w=(S=this.style)==null?void 0:S.removeProperty)==null||w.call(S,"--ddc-ui-width");let ce=`${V.w}px`,je=`${V.h}px`,Pe=n.style.width===ce,ge=n.style.height===je,ke=n.style.transform==="scale(1)";if(!(Pe&&ge&&ke)&&(n.style.width=ce,n.style.height=je,n.style.transform="scale(1)",n.style.transformOrigin="top left",n.style.position="absolute",n.style.top="0",n.style.left="0",this.__pointerScaleX=1,this.__pointerScaleY=1,this.__scaleOuter)){let ye=this.parentElement&&((R=(T=this.parentElement).getBoundingClientRect)==null?void 0:R.call(T).width)||this.offsetParent&&((O=(C=this.offsetParent).getBoundingClientRect)==null?void 0:O.call(C).width)||this.getBoundingClientRect&&this.getBoundingClientRect().width||this.offsetWidth||V.w,Ze=`${Math.max(1,ye)}px`,$e=`${Math.max(1,V.h)}px`;this.__scaleOuter.style.width!==Ze&&(this.__scaleOuter.style.width=Ze),this.__scaleOuter.style.height!==$e&&(this.__scaleOuter.style.height=$e)}try{(P=this._syncTabsWidth_)==null||P.call(this)}catch{}return}this.removeAttribute("ddc-fixed-ui"),(M=(b=this.style)==null?void 0:b.removeProperty)==null||M.call(b,"--ddc-ui-width");let o=typeof this._computeDesignSize=="function"?this._computeDesignSize():{w:n.offsetWidth||1,h:n.offsetHeight||1},c=this.parentElement&&((q=(I=this.parentElement).getBoundingClientRect)==null?void 0:q.call(I).width)||this.offsetParent&&((Y=(K=this.offsetParent).getBoundingClientRect)==null?void 0:Y.call(K).width)||this.getBoundingClientRect&&this.getBoundingClientRect().width||this.offsetWidth||o.w,s=Math.max(1,c),l=s/Math.max(1,o.w);this.__scaleOuter&&(this.__scaleOuter.style.width=`${s}px`,this.__scaleOuter.style.height=`${Math.max(1,o.h*l)}px`),n.style.width=`${o.w}px`,n.style.height=`${o.h}px`,n.style.transform=`scale(${l})`,n.style.transformOrigin="top left",n.style.position="absolute",n.style.top="0",n.style.left="0",this.__pointerScaleX=l||1,this.__pointerScaleY=l||1;try{(ie=this._syncTabsWidth_)==null||ie.call(this)}catch{}try{(F=this._layoutYtBackground_)==null||F.call(this)}catch{}try{(U=this._requestGridButtonsUpdateSoon)==null||U.call(this)}catch{}}_applyAutoFillNoScale(){var t,n,o,c,s,l,u;if(!this.__applyingAutoFill){this.__applyingAutoFill=!0;try{try{(t=this._ensureScaleWrapper)==null||t.call(this)}catch{}let f=this.__scaleOuter||((o=(n=this.shadowRoot)==null?void 0:n.querySelector)==null?void 0:o.call(n,".ddc-scale-outer"))||this,v=this.cardContainer||((s=(c=this.shadowRoot)==null?void 0:c.querySelector)==null?void 0:s.call(c,"#cardContainer"));if(!f||!v)return;f.style.overflow="hidden",f.style.overflowX="auto",f.style.overflowY="hidden",f.style.width="100%";let m=f.getBoundingClientRect(),y=Math.max(1,Math.round(m.width||0)),x=Math.max(1,Math.round(m.height||0));if(x<150){let I=Math.max(0,Math.round(m.top||0)),q=Math.max(1,window.innerHeight||document.documentElement.clientHeight||0),K=Math.max(1,q-I-8);Math.abs(K-x)>4&&(f.style.height=K+"px",m=f.getBoundingClientRect(),y=Math.max(1,Math.round(m.width||0)),x=Math.max(1,Math.round(m.height||0)))}let S=0,w=0,T=Array.from(v.querySelectorAll(".card-wrapper"));if(T.length){let I=v.getBoundingClientRect();for(let q of T){let K=q.getBoundingClientRect(),Y=K.left-I.left+K.width,ie=K.top-I.top+K.height;Y>S&&(S=Y),ie>w&&(w=ie)}}else S=v.scrollWidth||v.offsetWidth||y,w=v.scrollHeight||v.offsetHeight||x;let R=Number(this.gridSize||1)||1,C=Math.max(1,Math.round(Math.ceil(S/R)*R)),O=Math.max(1,Math.round(Math.ceil(w/R)*R)),P=y>C?y:C,b=x>O?x:O;if(v.style.transform="none",v.style.transformOrigin="left top",this.__pointerScaleX=1,this.__pointerScaleY=1,v.style.width=`${P}px`,v.style.height=`${b}px`,f){let I=0;try{let Y=f.getBoundingClientRect();I=Math.max(0,Math.round(Y.top||0))}catch{}let q=Math.max(1,window.innerHeight||document.documentElement.clientHeight||0),K=Math.max(1,q-I-8);f.style.height=`${b}px`}v.style.position=v.style.position||"absolute",v.style.top=v.style.top||"0",v.style.left=v.style.left||"0";let M=this.tabsBar;M&&this.tabsPosition!=="left"&&(M.style.width="100%",M.style.maxWidth="100%")}finally{try{(l=this._layoutYtBackground_)==null||l.call(this)}catch{}try{(u=this._requestGridButtonsUpdateSoon)==null||u.call(this)}catch{}requestAnimationFrame(()=>{this.__applyingAutoFill=!1})}}}_resizeContainer(){var s,l;let t=this.cardContainer;if(!t||this._isContainerFixed())return;let n=Array.from(t.querySelectorAll(".card-wrapper")),o=0,c=0;n.forEach(u=>{let f=u.getBoundingClientRect(),v=t.getBoundingClientRect(),m=f.left-v.left+f.width,y=f.top-v.top+f.height;o=Math.max(o,m),c=Math.max(c,y)}),t.style.width=`${Math.ceil(o/this.gridSize)*this.gridSize||100}px`,t.style.height=`${Math.ceil(c/this.gridSize)*this.gridSize||100}px`;try{(s=this._syncTabsWidth_)==null||s.call(this)}catch{}try{(l=this._requestGridButtonsUpdateSoon)==null||l.call(this)}catch{}}_pushCardsOutOfTheWay(t,n,o,c,s){if(!this.__collisionOriginals)return;let l=new Set(t.map(C=>C.el)),u=Array.from(this.cardContainer.querySelectorAll(".card-wrapper")).filter(C=>!C.dataset.placeholder),f=this._isContainerFixed(),{w:v,h:m}=this._getContainerSize();for(let C of u){if(l.has(C))continue;let O=this.__collisionOriginals.get(C);if(O){C.setAttribute("data-x-raw",String(O.x)),C.setAttribute("data-y-raw",String(O.y));let P=c?Math.round(O.x/s)*s:O.x,b=c?Math.round(O.y/s)*s:O.y;this._setCardPosition(C,P,b)}}let y=t.map(C=>({x:C.snapX,y:C.snapY,w:C.w,h:C.h})),x=new Map,S=new Map;for(let C of u){let O=parseFloat(C.style.width)||C.getBoundingClientRect().width,P=parseFloat(C.style.height)||C.getBoundingClientRect().height;S.set(C,{w:O,h:P})}let w=n>0?1:n<0?-1:0,T=o>0?1:o<0?-1:0,R=Math.abs(n)>=Math.abs(o);for(let C of u){if(l.has(C))continue;let O=this.__collisionOriginals.get(C);if(!O)continue;let{x:P,y:b}=O,{w:M,h:I}=S.get(C),q=!1;for(let K of y)if(this._rectsOverlap({x:K.x,y:K.y,w:K.w,h:K.h},{x:P,y:b,w:M,h:I})){q=!0,R&&w!==0?P=w>0?K.x+K.w:K.x-M:!R&&T!==0?b=T>0?K.y+K.h:K.y-I:P=K.x+K.w;break}if(q){let K=0,Y=R?w!==0?w*s:s:0,ie=R?0:T!==0?T*s:s;for(;K<100;){let F={x:P,y:b,w:M,h:I},U=!1;for(let V of y)if(this._rectsOverlap(F,V)){U=!0;break}if(!U){for(let[,V]of x)if(this._rectsOverlap(F,V)){U=!0;break}}if(!U&&f&&(P<0||b<0||P+M>v||b+I>m)&&(U=!0),!U)break;P+=Y,b+=ie,K++}f&&(P=Math.max(0,Math.min(P,Math.max(0,v-M))),b=Math.max(0,Math.min(b,Math.max(0,m-I))))}x.set(C,{x:P,y:b,w:M,h:I}),y.push({x:P,y:b,w:M,h:I})}for(let[C,O]of x){C.setAttribute("data-x-raw",String(O.x)),C.setAttribute("data-y-raw",String(O.y));let P=c?Math.round(O.x/s)*s:O.x,b=c?Math.round(O.y/s)*s:O.y;this._setCardPosition(C,P,b)}}_rectFor(t,n=null,o=null,c=null,s=null){let l=n!=null?n:parseFloat(t.getAttribute("data-x"))||0,u=o!=null?o:parseFloat(t.getAttribute("data-y"))||0,f=c!=null?c:parseFloat(t.style.width)||t.getBoundingClientRect().width||0,v=s!=null?s:parseFloat(t.style.height)||t.getBoundingClientRect().height||0;return{x:l,y:u,w:f,h:v,el:t}}_rectsOverlap(t,n,o=.5){return!(t.x+t.w<=n.x+o||n.x+n.w<=t.x+o||t.y+t.h<=n.y+o||n.y+n.h<=t.y+o)}_anyCollisionFor(t,n){let o=Array.from(this.cardContainer.querySelectorAll(".card-wrapper")).filter(s=>!n.has(s)&&!s.dataset.placeholder);if(!o.length)return!1;let c=o.map(s=>this._rectFor(s));for(let s of t)for(let l of c)if(this._rectsOverlap(s,l))return!0;return!1}_extractCardConfig(t){var o;if(!t)return{};let n=t._config||t.config;if(n&&typeof n=="object"&&Object.keys(n).length)return n;try{let c=t.closest?t.closest(".card-wrapper"):null,s=(o=c==null?void 0:c.dataset)==null?void 0:o.cfg;if(s){let l=JSON.parse(s);if(l&&typeof l=="object")return l}}catch{}return{}}async _openCardManager(){await this._openSmartPicker("add")}_catalog(){return[{id:"favorites",name:"Favorites",items:[]},{id:"recent",name:"Recent",items:[]},{id:"basics",name:"Basics",items:[{type:"entities",name:"Entities",icon:"mdi:format-list-bulleted"},{type:"entity",name:"Entity",icon:"mdi:checkbox-blank-circle-outline"},{type:"tile",name:"Tile",icon:"mdi:view-grid-outline"},{type:"button",name:"Button",icon:"mdi:gesture-tap-button"},{type:"glance",name:"Glance",icon:"mdi:eye-outline"},{type:"markdown",name:"Markdown",icon:"mdi:language-markdown"},{type:"custom_card",name:"Custom Card",icon:"mdi:puzzle-outline"}]},{id:"sensors",name:"Sensors",items:[{type:"sensor",name:"Sensor",icon:"mdi:antenna"},{type:"gauge",name:"Gauge",icon:"mdi:gauge"},{type:"history-graph",name:"History graph",icon:"mdi:chart-line"},{type:"statistics-graph",name:"Statistics graph",icon:"mdi:chart-bar"}]},{id:"visual",name:"Visual",items:[{type:"picture-entity",name:"Picture entity",icon:"mdi:image-outline"},{type:"picture-glance",name:"Picture glance",icon:"mdi:image-multiple-outline"},{type:"weather-forecast",name:"Weather",icon:"mdi:weather-partly-cloudy"},{type:"map",name:"Map",icon:"mdi:map"},{type:"iframe",name:"iFrame",icon:"mdi:application"}]},{id:"controls",name:"Controls",items:[{type:"light",name:"Light",icon:"mdi:lightbulb-outline"},{type:"thermostat",name:"Thermostat",icon:"mdi:thermostat"},{type:"media-control",name:"Media control",icon:"mdi:play-circle-outline"},{type:"alarm-panel",name:"Alarm panel",icon:"mdi:shield-home-outline"},{type:"area",name:"Area",icon:"mdi:map-marker"}]}]}async _getEditorElementForType(t,n){try{console.info("[ddc:editor] Requesting editor element",{type:t,cfg:n})}catch{}let o=await this._helpersPromise||await window.loadCardHelpers();try{typeof t=="string"&&t&&!t.startsWith("custom:")&&t!=="custom_card"&&await this._ensureCardModuleLoaded(t,n)}catch{}if(typeof t=="string"&&t==="entity")try{return await this._getEntityCardEditor(n||{})}catch(v){console.warn("[ddc:editor] Custom entity editor failed",v)}let c=async()=>{try{if(o.getCardElementClass)return await o.getCardElementClass(t);let v;if(n&&typeof n=="object")v={type:t,...n};else{let y;try{y=await this._getStubConfigForType(t)}catch{}v=y&&typeof y=="object"?{...y}:{type:t}}let m=o.createCardElement(v);return(m==null?void 0:m.constructor)||null}catch{return null}};try{let v=await c();if(v){if(typeof v.getConfigElement=="function"){let m=await v.getConfigElement();if(m){try{console.info("[ddc:editor] Found static class editor",{type:t})}catch{}return m}}if(typeof v.getConfigForm=="function")try{let m=await v.getConfigForm();if(m&&m.schema){try{await customElements.whenDefined("ha-form")}catch{}let y=document.createElement("ha-form");y.hass=this.hass,y.schema=Array.isArray(m.schema)?m.schema.map(x=>({...x})):m.schema,typeof m.computeLabel=="function"&&(y.computeLabel=m.computeLabel.bind(v)),typeof m.computeHelper=="function"&&(y.computeHelper=m.computeHelper.bind(v)),y.data={...n},y.addEventListener("value-changed",x=>{});try{console.info("[ddc:editor] Generated form editor via getConfigForm",{type:t})}catch{}return y}}catch{}}}catch{}if(typeof t=="string"&&(t.startsWith("custom:")||t==="custom_card"))try{let v;try{v=await this._getStubConfigForType(t)}catch{}let m=v&&typeof v=="object"?{...v}:{type:t},y=o.createCardElement(m);if(y.hass=this.hass,typeof y.getConfigElement=="function"){let x=await y.getConfigElement();if(x){try{console.info("[ddc:editor] Found instance-level editor",{type:t})}catch{}return x}}}catch{}let s=String(t).replace(/^custom:/,""),u=(Array.isArray(window.customCards)?window.customCards:[]).find(v=>(v==null?void 0:v.type)===s||(v==null?void 0:v.type)===t||(v==null?void 0:v.type)===`custom:${s}`),f=[];u!=null&&u.editor&&f.push(u.editor),f.push(`${s}-editor`,`${s}-config-editor`),s&&typeof s=="string"&&f.push(`hui-${s}-card-editor`);for(let v of f)if(!(!v||typeof v!="string"))for(let m of[0,100,300,700,1500,3e3])try{if(customElements.get(v)||await Promise.race([customElements.whenDefined(v),new Promise(y=>setTimeout(y,m))]),customElements.get(v)){try{console.info("[ddc:editor] Found editor by tag",{type:t,tag:v})}catch{}return document.createElement(v)}}catch{}return null}async _ensureCardModuleLoaded(t,n){try{let o=await this._helpersPromise||await window.loadCardHelpers(),c;if(n&&typeof n=="object")c={type:t,...n};else{let u;try{u=await this._getStubConfigForType(t)}catch{}c=u&&typeof u=="object"?{...u}:{type:t}}let s=o.createCardElement(c);s.hass=this.hass;let l=document.createElement("div");l.style.cssText="position:fixed;left:-9999px;top:-9999px;opacity:0;pointer-events:none;",l.appendChild(s),document.body.appendChild(l),await new Promise(u=>requestAnimationFrame(u)),l.remove();try{console.info("[ddc:editor] Warmed card module",{type:t})}catch{}}catch{}}_ensureOverlayZFix(){if(document.querySelector("style[data-ddc-overlay-fix]"))return;let t=document.createElement("style");t.setAttribute("data-ddc-overlay-fix",""),t.textContent=`
      /* Make common HA overlays float above our modal */
      vaadin-combo-box-overlay,
      vaadin-overlay-backdrop,
      mwc-menu-surface,
      .mdc-menu-surface--open {
        z-index: 1000000 !important;
      }
    `,document.head.appendChild(t)}_customCardsFromRegistry(){return(Array.isArray(window.customCards)?window.customCards:[]).map(n=>{var o;return{type:(o=n==null?void 0:n.type)!=null&&o.startsWith("custom:")?n.type:`custom:${n==null?void 0:n.type}`,name:(n==null?void 0:n.name)||(n==null?void 0:n.type)||"Custom card",icon:"mdi:puzzle-outline",description:(n==null?void 0:n.description)||"",editorTag:(n==null?void 0:n.editor)||null}}).filter(n=>typeof n.type=="string"&&n.type.startsWith("custom:"))}_schemaForType(t){let n=c=>c,o=[];return{entities:n({fields:[{key:"entities",type:"entities",multi:!0,domains:o,label:"Entities"}]}),entity:n({fields:[{key:"entity",type:"entity",multi:!1,domains:o,label:"Entity"}]}),sensor:n({fields:[{key:"entity",type:"entity",multi:!1,domains:["sensor"],label:"Sensor"},{key:"name",type:"text",label:"Name (optional)"}]}),gauge:n({fields:[{key:"entity",type:"entity",multi:!1,domains:["sensor","number","input_number"],label:"Numeric entity"},{key:"min",type:"number",label:"Min",step:"any"},{key:"max",type:"number",label:"Max",step:"any"}]}),"history-graph":n({fields:[{key:"entities",type:"entities",multi:!0,domains:o,label:"Entities (multiselect)"},{key:"hours_to_show",type:"number",label:"Hours to show",default:24}]}),"statistics-graph":n({fields:[{key:"entities",type:"entities",multi:!0,domains:["sensor","number","input_number"],label:"Entities (multiselect)"},{key:"chart_type",type:"select",options:["line","bar"],label:"Chart type",default:"line"},{key:"statistic",type:"select",options:["mean","min","max","sum"],label:"Statistic",default:"mean"}]}),glance:n({fields:[{key:"entities",type:"entities",multi:!0,domains:o,label:"Entities (multiselect)"}]}),"picture-glance":n({fields:[{key:"entities",type:"entities",multi:!0,domains:o,label:"Entities (multiselect)"},{key:"image",type:"text",label:"Image URL (optional)"}]}),"picture-entity":n({fields:[{key:"entity",type:"entity",multi:!1,domains:o,label:"Entity"},{key:"image",type:"text",label:"Image URL (optional)"}]}),"weather-forecast":n({fields:[{key:"entity",type:"entity",multi:!1,domains:["weather"],label:"Weather entity"}]}),map:n({fields:[{key:"entities",type:"entities",multi:!0,domains:["device_tracker","person"],label:"Trackers / people (multiselect)"},{key:"default_zoom",type:"number",label:"Default zoom",default:14}]}),"media-control":n({fields:[{key:"entity",type:"entity",multi:!1,domains:["media_player"],label:"Media player"}]}),light:n({fields:[{key:"entity",type:"entity",multi:!1,domains:["light"],label:"Light"}]}),thermostat:n({fields:[{key:"entity",type:"entity",multi:!1,domains:["climate"],label:"Climate"}]}),"alarm-panel":n({fields:[{key:"entity",type:"entity",multi:!1,domains:["alarm_control_panel"],label:"Alarm"}]}),markdown:n({fields:[{key:"content",type:"textarea",label:"Markdown"}]}),tile:n({fields:[{key:"entity",type:"entity",multi:!1,domains:o,label:"Entity"}]}),button:n({fields:[{key:"entity",type:"entity",multi:!1,domains:o,label:"Entity (optional)"}]}),iframe:n({fields:[{key:"url",type:"text",label:"URL"}]}),area:n({fields:[{key:"area",type:"text",label:"Area ID"}]})}[t]||{fields:[]}}async _getEntityCardEditor(t={}){let n=document.createElement("div");n.style.display="flex",n.style.flexDirection="column",n.style.gap="12px",n.style.padding="8px 0",n.style.overflow="visible",n._cfg={type:"entity",...t||{}};let o=()=>{let O={type:"entity"};["entity","name","icon","attribute","unit","state_color","theme"].forEach(P=>{let b=n._cfg[P];b!==void 0&&b!==""&&b!==null&&(O[P]=b)}),n.dispatchEvent(new CustomEvent("config-changed",{detail:{config:O}}))},c=document.createElement("div");c.style.display="flex",c.style.flexDirection="column",c.style.gap="4px";let s=document.createElement("span");s.textContent="Entity",s.style.fontSize=".8rem",s.style.opacity="0.8";let l=document.createElement("ha-entity-picker");l.setAttribute("label","Select entity"),l.addEventListener("value-changed",O=>{var b,M,I;O.stopPropagation();let P=(I=O.detail&&((b=O.detail.value)!=null?b:O.detail))!=null?I:(M=O.target)==null?void 0:M.value;n._cfg.entity=P||"";try{u()}catch{}o()}),c.appendChild(s),c.appendChild(l),n.appendChild(c);let u=()=>{},f=document.createElement("div");f.style.display="grid",f.style.gridTemplateColumns="1fr 1fr",f.style.columnGap="12px",f.style.rowGap="12px";let v=(O,P)=>{let b=document.createElement("div");b.style.display="flex",b.style.flexDirection="column",b.style.gap="4px";let M=document.createElement("span");M.textContent=O,M.style.fontSize=".8rem",M.style.opacity="0.8",b.appendChild(M),b.appendChild(P),f.appendChild(b)},m;customElements.get("ha-textfield")?(m=document.createElement("ha-textfield"),m.setAttribute("label","Name"),m.addEventListener("input",()=>{n._cfg.name=m.value||void 0,o()})):(m=document.createElement("input"),m.type="text",m.placeholder="Name",m.addEventListener("input",()=>{n._cfg.name=m.value||void 0,o()}),Object.assign(m.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})),v("Name",m);let y;customElements.get("ha-icon-picker")?(y=document.createElement("ha-icon-picker"),y.setAttribute("label","Icon"),y.addEventListener("value-changed",O=>{var P;O.stopPropagation(),n._cfg.icon=((P=O.detail)==null?void 0:P.value)||void 0,o()}),Object.assign(y.style,{position:"relative",zIndex:"1000"})):customElements.get("ha-textfield")?(y=document.createElement("ha-textfield"),y.setAttribute("label","Icon"),y.addEventListener("input",()=>{n._cfg.icon=y.value||void 0,o()})):(y=document.createElement("input"),y.type="text",y.placeholder="mdi:icon",y.addEventListener("input",()=>{n._cfg.icon=y.value||void 0,o()}),Object.assign(y.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})),v("Icon",y);let x;if(u=()=>{var Y,ie;let O=[],P=(Y=n._cfg)==null?void 0:Y.entity,b=n._hass;if(P&&b&&b.states&&b.states[P]&&b.states[P].attributes)try{O=Object.keys(b.states[P].attributes||{}).filter(F=>F&&typeof F=="string"),O.sort()}catch{}let M=x&&typeof x.value!="undefined"?x.value:void 0,I=((x==null?void 0:x.tagName)||"").toLowerCase(),q={min_color_temp_kelvin:"Minimum color temperature (Kelvin)",max_color_temp_kelvin:"Maximum color temperature (Kelvin)",min_color_temp_mireds:"Minimum color temperature (mireds)",max_color_temp_mireds:"Maximum color temperature (mireds)",min_mireds:"Minimum color temperature (mireds)",max_mireds:"Maximum color temperature (mireds)",effect_list:"Available effects",color_mode:"Color mode",brightness:"Brightness",hs_color:"Hs color",rgb_color:"Rgb color",xy_color:"Xy color",entity_id:"Entity ID",friendly_name:"Friendly name",icon:"Icon"},K=F=>q[F]?q[F]:F.split("_").map(U=>U&&(U.toLowerCase()==="kelvin"?"Kelvin":U.toLowerCase()==="mireds"?"mireds":U.charAt(0).toUpperCase()+U.slice(1))).join(" ");if(I==="ha-combo-box"){let F=O.map(U=>({value:U,label:K(U)}));F.unshift({value:"",label:""}),x.items=F,M&&O.includes(M)?x.value=M:x.value=""}else if(I==="ha-select"){x.innerHTML="";let F=document.createElement("mwc-list-item");F.setAttribute("value",""),F.textContent="",x.appendChild(F);for(let U of O){let V=document.createElement("mwc-list-item");V.setAttribute("value",U),V.textContent=K(U),x.appendChild(V)}M&&O.includes(M)?x.value=M:x.value="",(ie=x.requestUpdate)==null||ie.call(x)}else if(I==="select"){x.innerHTML="";let F=document.createElement("option");F.value="",F.textContent="",x.appendChild(F);for(let U of O){let V=document.createElement("option");V.value=U,V.textContent=K(U),x.appendChild(V)}M&&O.includes(M)&&(x.value=M)}},customElements.get("ha-combo-box"))x=document.createElement("ha-combo-box"),x.setAttribute("label","Attribute"),x.setAttribute("item-label-path","label"),x.setAttribute("item-value-path","value"),x.setAttribute("allow-custom-value","false"),x.addEventListener("value-changed",O=>{var b,M;O.stopPropagation();let P=(M=(b=O.detail)==null?void 0:b.value)!=null?M:x.value;n._cfg.attribute=P||void 0,o()});else if(customElements.get("ha-select"))x=document.createElement("ha-select"),x.setAttribute("label","Attribute"),x.addEventListener("selected",O=>{O.stopPropagation(),n._cfg.attribute=x.value||void 0,o()}),Object.assign(x.style,{position:"relative",zIndex:"1000"});else{x=document.createElement("select");let O=document.createElement("option");O.value="",O.textContent="",x.appendChild(O),x.addEventListener("change",P=>{P.stopPropagation(),n._cfg.attribute=x.value||void 0,o()}),Object.assign(x.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),Object.assign(x.style,{position:"relative",zIndex:"1000"})}u(),v("Attribute",x);let S;customElements.get("ha-textfield")?(S=document.createElement("ha-textfield"),S.setAttribute("label","Unit"),S.addEventListener("input",()=>{n._cfg.unit=S.value||void 0,o()})):(S=document.createElement("input"),S.type="text",S.placeholder="Unit",S.addEventListener("input",()=>{n._cfg.unit=S.value||void 0,o()}),Object.assign(S.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})),v("Unit",S);let w;if(customElements.get("ha-select"))w=document.createElement("ha-select"),w.setAttribute("label","Theme (optional)"),w.addEventListener("selected",O=>{O.stopPropagation(),n._cfg.theme=w.value||void 0,o()});else{w=document.createElement("select");let O=document.createElement("option");O.value="",O.textContent="",w.appendChild(O),w.addEventListener("change",P=>{P.stopPropagation(),n._cfg.theme=w.value||void 0,o()}),Object.assign(w.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})}v("Theme (optional)",w);let T;customElements.get("ha-switch")?(T=document.createElement("ha-switch"),T.addEventListener("change",()=>{n._cfg.state_color=!!T.checked,o()})):(T=document.createElement("input"),T.type="checkbox",T.addEventListener("change",()=>{n._cfg.state_color=!!T.checked,o()}));let R=document.createElement("div");R.style.display="flex",R.style.alignItems="center",R.style.gap="8px";let C=document.createElement("span");return C.textContent="Show state color",C.style.fontSize=".8rem",C.style.opacity="0.8",R.appendChild(C),R.appendChild(T),f.appendChild(R),n.appendChild(f),n.setConfig=(O={})=>{n._cfg={type:"entity",...O||{}};let P=n._cfg;if(l&&("value"in l&&(l.value=P.entity||""),l.setAttribute&&l.setAttribute("value",P.entity||"")),m&&(m.value=P.name||""),y&&(y.value=P.icon||""),x){try{u()}catch{}x.value=P.attribute||""}S&&(S.value=P.unit||""),w&&(w.value=P.theme||""),T&&"checked"in T&&(T.checked=!!P.state_color)},Object.defineProperty(n,"hass",{get(){return this._hass},set(O){var P;if(this._hass=O,l){try{l.hass=O}catch{}customElements.get("ha-entity-picker")||customElements.whenDefined("ha-entity-picker").then(()=>{var b;try{l.hass=this._hass,(b=l.requestUpdate)==null||b.call(l)}catch{}}).catch(()=>{})}if(y){try{y.hass=O}catch{}customElements.get("ha-icon-picker")||customElements.whenDefined("ha-icon-picker").then(()=>{var b;try{y.hass=this._hass,(b=y.requestUpdate)==null||b.call(y)}catch{}}).catch(()=>{})}if(w){let b=[];O&&O.themes&&(O.themes.themes?b=Object.keys(O.themes.themes):typeof O.themes=="object"&&(b=Object.keys(O.themes).filter(q=>q!=="default_theme")));let M=w.value,I=(w.tagName||"").toLowerCase();if(I==="ha-select"){w.innerHTML="";let q=document.createElement("mwc-list-item");q.setAttribute("value",""),q.textContent="",w.appendChild(q);for(let K of b){let Y=document.createElement("mwc-list-item");Y.setAttribute("value",K),Y.textContent=K,w.appendChild(Y)}M&&b.includes(M)?w.value=M:M||(w.value=""),(P=w.requestUpdate)==null||P.call(w)}else if(I==="select"){w.innerHTML="";let q=document.createElement("option");q.value="",q.textContent="",w.appendChild(q);for(let K of b){let Y=document.createElement("option");Y.value=K,Y.textContent=K,w.appendChild(Y)}M&&Array.from(w.options).some(K=>K.value===M)&&(w.value=M)}}try{u()}catch{}}}),n.setConfig(t||{}),n}_shapeBySchema(t,n={}){let o=this._schemaForType(t)||{fields:[]},c={...n,type:t};for(let s of o.fields){let l=c[s.key];if(s.type==="entities"){let f=(Array.isArray(l)?l:l!=null&&l!==""?[l]:[]).filter(Boolean);f.length?c[s.key]=f:delete c[s.key]}else if(s.type==="entity")Array.isArray(l)&&(l=l[0]),l==null||l===""?delete c[s.key]:c[s.key]=String(l);else if(s.type==="number")if(l==null||l==="")delete c[s.key];else{let u=Number(l);Number.isFinite(u)?c[s.key]=u:delete c[s.key]}else(s.type==="select"||s.type==="text"||s.type==="textarea")&&(l==null||l===""?delete c[s.key]:c[s.key]=l)}return c}_statesList(t){var c;let n=Object.keys(((c=this.hass)==null?void 0:c.states)||{});if(!t||!t.length)return n;if(!this.__domainIndex||this.__domainIndex._gen!==n.length){let s={};for(let l of n){let u=l.split(".")[0];(s[u]||(s[u]=[])).push(l)}this.__domainIndex={_gen:n.length,map:s}}let o=[];for(let s of t)this.__domainIndex.map[s]&&o.push(...this.__domainIndex.map[s]);return o}_isNumericEntity(t){var c,s;let n=(s=(c=this.hass)==null?void 0:c.states)==null?void 0:s[t];if(!n)return!1;let o=Number(n.state);return Number.isFinite(o)}_getFaves(){try{return new Set(JSON.parse(localStorage.getItem("ddc_faves")||"[]"))}catch{return new Set}}_setFaves(t){try{localStorage.setItem("ddc_faves",JSON.stringify(Array.from(t)))}catch{}}_getRecent(){try{return JSON.parse(localStorage.getItem("ddc_recent_types")||"[]")}catch{return[]}}_pushRecent(t){try{let n=this._getRecent().filter(o=>o!==t);n.unshift(t),n.length>10&&(n.length=10),localStorage.setItem("ddc_recent_types",JSON.stringify(n))}catch{}}async _ensureCodeMirror(){if(!this.__cmReady){if(!document.querySelector("link[data-cm-core]")){let t=document.createElement("link");t.rel="stylesheet",t.href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.css",t.setAttribute("data-cm-core",""),document.head.appendChild(t)}await new Promise(t=>{if(window.CodeMirror)return t();let n=document.createElement("script");n.src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.js",n.onload=t,document.head.appendChild(n)}),await new Promise(t=>{var o,c;if((c=(o=window.CodeMirror)==null?void 0:o.mimeModes)!=null&&c.yaml)return t();let n=document.createElement("script");n.src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/yaml/yaml.min.js",n.onload=t,document.head.appendChild(n)}),this.__cmReady=!0}}async _mountYamlEditor(t,n,o,c){let s=f=>window.jsyaml?window.jsyaml.dump(f):JSON.stringify(f,null,2),l=f=>window.jsyaml?window.jsyaml.load(f):JSON.parse(f);t.innerHTML="";let u=s(n);if(customElements.get("ha-code-editor")){let f=document.createElement("ha-code-editor");f.mode="yaml",f.hass=this.hass,f.value=u,f.style.display="block",f.style.height="260px",t.appendChild(f);let v=!1;return f.addEventListener("value-changed",m=>{var x,S,w;if(v)return;let y=(w=(S=(x=m.detail)==null?void 0:x.value)!=null?S:f.value)!=null?w:"";try{o(l(y))}catch(T){c==null||c(T)}}),{setValue:m=>{var x;let y=s(m);((x=f.value)!=null?x:"")!==y&&(v=!0,f.value=y,v=!1)}}}try{await this._ensureCodeMirror();let f=window.CodeMirror(t,{value:u,mode:"yaml",lineNumbers:!0,lineWrapping:!0,indentUnit:2,tabSize:2}),v=!1;return f.on("change",()=>{if(v)return;let m=f.getValue();try{o(l(m))}catch(y){c==null||c(y)}}),{setValue:m=>{let y=s(m);f.getValue()!==y&&(v=!0,f.setValue(y),v=!1)}}}catch{let f=document.createElement("textarea");return f.style.width="100%",f.style.height="260px",f.value=u,f.addEventListener("input",()=>{try{o(l(f.value))}catch(v){c==null||c(v)}}),t.appendChild(f),{setValue:v=>{let m=s(v);f.value!==m&&(f.value=m)}}}}_createVirtualList({container:t,items:n,rowHeight:o=36,renderRow:c}){t.style.position="relative",t.style.overflow="auto";let s=document.createElement("div");s.style.height=`${n.length*o}px`,t.innerHTML="",t.appendChild(s);let l=new Map,u=()=>{let f=t.scrollTop,v=t.clientHeight,m=Math.max(0,Math.floor(f/o)-6),y=Math.min(n.length-1,Math.ceil((f+v)/o)+6);for(let[x,S]of l)(x<m||x>y)&&(S.remove(),l.delete(x));for(let x=m;x<=y;x++){if(l.has(x))continue;let S=c(n[x],x);S.style.position="absolute",S.style.left="0",S.style.right="0",S.style.top=`${x*o}px`,l.set(x,S),t.appendChild(S)}};return t.addEventListener("scroll",u,{passive:!0}),new ResizeObserver(u).observe(t),u(),{refresh(f){if(f){n=f,s.style.height=`${n.length*o}px`;for(let[,v]of l)v.remove();l.clear()}u()}}}async _openSmartPicker(t="add",n=null,o=null){let c=()=>s.remove(),s=document.createElement("div");s.className="modal",s.innerHTML=`
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
      </div>`,this.shadowRoot.appendChild(s);let l=s.querySelector("#leftPane"),u=s.querySelector("#addBtn"),f=s.querySelector("#footAdd"),v=s.querySelector("#cancelBtn"),m=s.querySelector("#footCancel"),y=s.querySelector("#search"),x=s.querySelector("#cardHost"),S=s.querySelector("#editorHost"),w=s.querySelector("#editorSpin"),T=s.querySelector("#quickFill"),R=s.querySelector("#yamlHost"),C=s.querySelector("#yamlErr"),O=s.querySelector("#yamlSec"),P=s.querySelector("#tabVisual"),b=s.querySelector("#tabYaml"),M=s.querySelector("#tabVis"),I=s.querySelector("#visSec"),q=s.querySelector("#visHost"),K=s.querySelector("#err"),Y=s.querySelector("#previewSpin"),ie=N=>{u.disabled=f.disabled=!N},F=N=>{N?(K.hidden=!1,K.textContent=N):(K.hidden=!0,K.textContent="")},U=this._getFaves(),V=this._getRecent(),ce=this._catalog(),je=ce.find(N=>N.id==="favorites"),Pe=ce.find(N=>N.id==="recent"),ge=ce.flatMap(N=>N.items||[]);je.items=ge.filter(N=>U.has(N.type)),Pe.items=V.map(N=>ge.find(W=>W.type===N)).filter(Boolean);let ke=this._customCardsFromRegistry();ke.length&&ce.push({id:"custom",name:"Custom (installed)",items:ke});let ye=s.querySelector("#quickFillSec");ye&&(ye.style.display="none");let Ze=s.querySelector("#optionsSec .hd"),$e,Ie,Ke=()=>{if(!Ie)return;let N=We&&U.has(We),W=Ie.querySelector("ha-icon");W&&W.setAttribute("icon",N?"mdi:star":"mdi:star-outline")},ot=N=>{if($e){let W=ge.find(xe=>xe.type===N),he=W?W.name:N||"";$e.textContent=he}Ke()};if(Ze&&!Ze.querySelector(".sel-info")){let N=Ze.querySelector("span");N&&(N.style.display="none"),$e=document.createElement("span"),$e.className="sel-info",$e.style.flex="1",$e.style.fontWeight="bold",$e.style.paddingRight="8px",Ze.insertBefore($e,Ze.firstChild),Ie=document.createElement("button"),Ie.className="icon-btn",Ie.setAttribute("title","Favorite"),Object.assign(Ie.style,{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"28px",height:"28px",borderRadius:"6px",border:"1px solid var(--divider-color)",background:"var(--primary-background-color)",padding:"0",marginLeft:"4px",cursor:"pointer"}),Ie.innerHTML='<ha-icon icon="mdi:star-outline"></ha-icon>',Ze.appendChild(Ie),Ie.addEventListener("click",W=>{W.stopPropagation(),We&&(U.has(We)?U.delete(We):U.add(We),this._setFaves(U),Ke(),ct())})}let st="visual",ne=N=>{let W=N==="yaml",he=N==="vis",xe=!W&&!he;P.classList.toggle("active",xe),P.setAttribute("aria-selected",String(xe)),b.classList.toggle("active",W),b.setAttribute("aria-selected",String(W)),M&&(M.classList.toggle("active",he),M.setAttribute("aria-selected",String(he))),S.parentElement.style.display=xe?"":"none",O.style.display=W?"":"none",I&&(I.style.display=he?"":"none"),W?O.scrollIntoView({behavior:"smooth",block:"start"}):he&&I&&I.scrollIntoView({behavior:"smooth",block:"start"}),st=W?"yaml":he?"vis":"visual"};P.addEventListener("click",async()=>{var N;if(ne("visual"),!Oe)await Tt(ae);else try{(N=Oe.setConfig)==null||N.call(Oe,ae)}catch{}}),b.addEventListener("click",()=>ne("yaml")),M&&M.addEventListener("click",()=>{ne("vis");try{De(ae)}catch{}}),ne("visual");let dt=()=>{let N=y.value.trim().toLowerCase();return ce.map(W=>({...W,items:(W.items||[]).filter(he=>!N||he.name.toLowerCase().includes(N)||he.type.toLowerCase().includes(N))})).filter(W=>W.items&&W.items.length||W.id==="favorites"||W.id==="recent")},ct=()=>{let N=dt();l.innerHTML="",N.forEach(W=>{let he=document.createElement("div");he.style.padding="12px",he.style.borderBottom="1px solid var(--divider-color)";let xe=document.createElement("h4");if(xe.textContent=W.name,xe.style.margin="0 0 10px 0",xe.style.fontSize=".92rem",xe.style.opacity=".85",he.appendChild(xe),!W.items.length&&(W.id==="favorites"||W.id==="recent")){let de=document.createElement("div");de.style.opacity=".6",de.style.fontSize=".85rem",de.textContent=W.id==="favorites"?"No favorites yet.":"No recent items yet.",he.appendChild(de)}else W.items.forEach(de=>{let Te=document.createElement("button");Te.innerHTML=`<span style="display:inline-flex;align-items:center;gap:8px">
              <ha-icon icon="${de.icon}"></ha-icon><span>${de.name}</span>
            </span>`,Object.assign(Te.style,{display:"block",width:"100%",textAlign:"left",border:"none",background:"transparent",padding:"8px",borderRadius:"10px",cursor:"pointer"}),Te.addEventListener("click",async()=>{Me(Te),await mt(de.type)}),he.appendChild(Te)});l.appendChild(he)})},Me=N=>{l.querySelectorAll("button").forEach(W=>{W.classList.remove("active"),W.style.background="transparent",W.style.color=""}),N&&(N.classList.add("active"),N.style.background="rgba(3,169,244,.12)",N.style.color="var(--primary-color)")},ae=null,We=null,Se=null,Oe=null,ht=null,ft=0,Bt=null,lt="",At=(N,W)=>{var j;let he=this._schemaForType(N);if(T.innerHTML="",!he.fields.length){T.innerHTML='<div style="opacity:.7;font-size:.9rem">No quick fill for this card \u2014 use the editors below.</div>';return}let xe=Object.keys(((j=this.hass)==null?void 0:j.states)||{}),de=document.createElement("div"),Te=(ee,Le,$,Je)=>{let Ue=document.createElement("div");Object.assign(Ue.style,{padding:"8px 10px",border:"1px solid var(--divider-color)",borderRadius:"10px",cursor:"pointer",userSelect:"none",display:"flex",alignItems:"center",gap:"8px"}),Ue.innerHTML=`<ha-icon icon="mdi:checkbox-blank-outline"></ha-icon><span>${ee}</span>`,Le.includes(ee)&&(Ue.style.background="rgba(3,169,244,.12)",Ue.style.borderColor="var(--primary-color)",Ue.querySelector("ha-icon").setAttribute("icon","mdi:checkbox-marked")),Ue.addEventListener("click",async()=>{let it=Le.indexOf(ee);it>=0?Le.splice(it,1):Le.push(ee);let qe=Le.includes(ee);Ue.style.background=qe?"rgba(3,169,244,.12)":"",Ue.style.borderColor=qe?"var(--primary-color)":"var(--divider-color)",Ue.querySelector("ha-icon").setAttribute("icon",qe?"mdi:checkbox-marked":"mdi:checkbox-blank-outline"),ae=this._shapeBySchema(N,{...ae,[Je]:[...Le]}),gt(ae),Se==null||Se.setValue(ae)}),$.appendChild(Ue)};he.fields.forEach(ee=>{var Je,Ue,it,qe,rt,et,tt,Ve,Ge;let Le=document.createElement("div");Object.assign(Le.style,{display:"flex",gap:"8px",alignItems:"center",marginBottom:"8px"});let $=document.createElement("label");if($.textContent=ee.label||ee.key,$.style.minWidth="130px",ee.type==="entities"){let ze=document.createElement("div");ze.style.flex="1";let fe=document.createElement("input");Object.assign(fe,{placeholder:"Filter entities\u2026"}),Object.assign(fe.style,{width:"100%",padding:"8px 10px",borderRadius:"10px",border:"1px solid var(--divider-color)",background:"var(--card-background-color)",color:"var(--primary-text-color)"});let Ce=document.createElement("div");Object.assign(Ce.style,{maxHeight:"220px",overflow:"auto",marginTop:"8px",border:"1px solid var(--divider-color)",borderRadius:"10px",padding:"6px"});let Fe=ee.domains&&ee.domains.length?this._statesList(ee.domains):xe,Ee=Array.isArray(W[ee.key])?[...W[ee.key]]:W[ee.key]?[W[ee.key]]:[],se=Q=>{let J=document.createElement("div");Object.assign(J.style,{padding:"6px 10px",margin:"4px 0",border:"1px solid var(--divider-color)",borderRadius:"10px",cursor:"pointer",display:"flex",alignItems:"center",gap:"8px",background:""});let z=document.createElement("ha-icon");z.setAttribute("icon","mdi:checkbox-blank-outline"),z.style.setProperty("--mdc-icon-size","18px");let H=document.createElement("span");H.textContent=Q,H.style.whiteSpace="nowrap",H.style.overflow="hidden",H.style.textOverflow="ellipsis",J.append(z,H);let Z=()=>{let oe=Ee.includes(Q);J.style.background=oe?"rgba(3,169,244,.12)":"",J.style.borderColor=oe?"var(--primary-color)":"var(--divider-color)",z.setAttribute("icon",oe?"mdi:checkbox-marked":"mdi:checkbox-blank-outline")};return Z(),J.addEventListener("click",()=>{let oe=Ee.indexOf(Q);oe>=0?Ee.splice(oe,1):Ee.push(Q),ae=this._shapeBySchema(N,{...ae,[ee.key]:[...Ee]}),gt(ae),Se==null||Se.setValue(ae),Z()}),J},re=Fe;this._createVirtualList({container:Ce,items:re,rowHeight:36,renderRow:se}),fe.addEventListener("input",()=>{let Q=fe.value.trim().toLowerCase();re=Fe.filter(J=>!Q||J.toLowerCase().includes(Q)),this._createVirtualList({container:Ce,items:re,rowHeight:36,renderRow:se})}),ze.append(fe,Ce),Le.append($,ze),ae=this._shapeBySchema(N,{...W,[ee.key]:Ee})}if(ee.type==="entity"){let ze=document.createElement("div");ze.style.flex="1",ze.style.position="relative";let fe=document.createElement("input");fe.setAttribute("list","ddc_entlist_"+ee.key),Object.assign(fe.style,{width:"100%",padding:"8px 10px 8px 36px",borderRadius:"10px",border:"1px solid var(--divider-color)"}),fe.placeholder=`Select ${((Je=ee.label)==null?void 0:Je.toLowerCase())||"entity"}\u2026`;let Ce=document.createElement("ha-icon");Ce.setAttribute("icon","mdi:magnify"),Object.assign(Ce.style,{position:"absolute",left:"10px",top:"8px",width:"18px",height:"18px","--mdc-icon-size":"18px",opacity:".7"});let Fe=document.createElement("datalist");Fe.id="ddc_entlist_"+ee.key;let Ee=ee.domains&&ee.domains.length?this._statesList(ee.domains):Object.keys(((Ue=this.hass)==null?void 0:Ue.states)||{});Fe.innerHTML=Ee.map(se=>`<option value="${se}">`).join(""),fe.value=Array.isArray(W[ee.key])?W[ee.key][0]||"":W[ee.key]||"",fe.addEventListener("change",async()=>{ae=this._shapeBySchema(N,{...ae,[ee.key]:fe.value||void 0}),gt(ae),Se==null||Se.setValue(ae)}),ze.append(Ce,fe,Fe),Le.append($,ze)}if(ee.type==="number"){let ze=document.createElement("div");ze.style.flex="1",ze.style.position="relative";let fe=document.createElement("input");fe.type="number",ee.step&&(fe.step=ee.step),Object.assign(fe.style,{width:"100%",padding:"8px 10px 8px 36px",borderRadius:"10px",border:"1px solid var(--divider-color)"});let Ce=document.createElement("ha-icon");Ce.setAttribute("icon","mdi:counter"),Object.assign(Ce.style,{position:"absolute",left:"10px",top:"8px","--mdc-icon-size":"18px",width:"18px",height:"18px",opacity:".7"}),fe.value=(qe=(it=W[ee.key])!=null?it:ee.default)!=null?qe:"",fe.addEventListener("input",async()=>{let Fe=fe.value===""?void 0:Number(fe.value);ae=this._shapeBySchema(N,{...ae,[ee.key]:isNaN(Fe)?void 0:Fe}),gt(ae),Se==null||Se.setValue(ae)}),ze.append(Ce,fe),Le.append($,ze)}if(ee.type==="select"){let ze=document.createElement("div");ze.style.flex="1",ze.style.position="relative";let fe=document.createElement("select");Object.assign(fe.style,{width:"100%",padding:"8px 10px 8px 36px",borderRadius:"10px",border:"1px solid var(--divider-color)"});let Ce=document.createElement("ha-icon");Ce.setAttribute("icon","mdi:format-list-bulleted"),Object.assign(Ce.style,{position:"absolute",left:"10px",top:"8px","--mdc-icon-size":"18px",width:"18px",height:"18px",opacity:".7"}),(ee.options||[]).forEach(Fe=>{let Ee=document.createElement("option");Ee.value=Fe,fe.appendChild(Ee)}),fe.value=(tt=(rt=W[ee.key])!=null?rt:ee.default)!=null?tt:((et=ee.options)==null?void 0:et[0])||"",fe.addEventListener("change",async()=>{ae=this._shapeBySchema(N,{...ae,[ee.key]:fe.value}),gt(ae),Se==null||Se.setValue(ae)}),ze.append(Ce,fe),Le.append($,ze)}if(ee.type==="text"){let ze=document.createElement("div");ze.style.flex="1",ze.style.position="relative";let fe=document.createElement("input");fe.type="text",Object.assign(fe.style,{width:"100%",padding:"8px 10px 8px 36px",borderRadius:"10px",border:"1px solid var(--divider-color)"});let Ce=document.createElement("ha-icon");Ce.setAttribute("icon","mdi:text"),Object.assign(Ce.style,{position:"absolute",left:"10px",top:"8px","--mdc-icon-size":"18px",width:"18px",height:"18px",opacity:".7"}),fe.value=(Ve=W[ee.key])!=null?Ve:"",fe.addEventListener("input",async()=>{ae=this._shapeBySchema(N,{...ae,[ee.key]:fe.value||void 0}),gt(ae),Se==null||Se.setValue(ae)}),ze.append(Ce,fe),Le.append($,ze)}if(ee.type==="textarea"){let ze=document.createElement("textarea");Object.assign(ze.style,{flex:"1",minHeight:"120px",padding:"8px 10px",borderRadius:"10px",border:"1px solid var(--divider-color)"}),ze.value=(Ge=W[ee.key])!=null?Ge:"",ze.addEventListener("input",async()=>{ae=this._shapeBySchema(N,{...ae,[ee.key]:ze.value||""}),gt(ae),Se==null||Se.setValue(ae)}),Le.append($,ze)}de.appendChild(Le)}),T.innerHTML="",T.appendChild(de)},xt=new WeakMap,Wt=N=>{if(!q)return;let W=Array.isArray(N==null?void 0:N.visibility)?N.visibility.map(Te=>({...Te})):[],he=()=>De(ae),xe=()=>{var Te;W=W.filter(j=>j&&typeof j=="object"&&j.condition),ae={...ae,visibility:W};try{Se==null||Se.setValue(ae)}catch{}try{(Te=Oe==null?void 0:Oe.setConfig)==null||Te.call(Oe,ae)}catch{}gt(ae)},de=()=>{if(q.innerHTML="",!W||!W.length){let j=document.createElement("div");j.style.opacity=".7",j.style.fontSize=".9rem",j.style.marginBottom="8px",j.textContent="No conditions defined \u2013 this card is always visible.",q.appendChild(j)}W.forEach((j,ee)=>{let Le=document.createElement("div");Object.assign(Le.style,{display:"flex",flexDirection:"column",gap:"6px",marginBottom:"12px",border:"1px solid var(--divider-color)",borderRadius:"8px",padding:"8px"});let $=document.createElement("div");Object.assign($.style,{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"4px"});let Je=document.createElement("div");Je.style.display="flex",Je.style.alignItems="center",Je.style.gap="6px";let Ue=document.createElement("ha-icon"),it="mdi:filter",qe=j.condition||"state";qe==="numeric_state"?it="mdi:numeric":qe==="screen"?it="mdi:monitor":qe==="user"?it="mdi:account":qe==="state"&&(it="mdi:state-machine"),Ue.setAttribute("icon",it);let rt=document.createElement("span");rt.style.fontWeight="bold",rt.style.textTransform="capitalize",rt.textContent=qe==="numeric_state"?"Entity numeric state":qe==="state"?"Entity state":qe==="screen"?"Screen":"User",Je.appendChild(Ue),Je.appendChild(rt),$.appendChild(Je);let et=document.createElement("button");et.setAttribute("title","Remove condition"),et.innerHTML='<ha-icon icon="mdi:trash-can-outline"></ha-icon>',Object.assign(et.style,{border:"none",background:"transparent",cursor:"pointer",padding:"4px",display:"inline-flex",alignItems:"center"}),et.style.position="relative",et.style.zIndex="1000",et.addEventListener("click",Fe=>{Fe.preventDefault(),Fe.stopPropagation();let Ee=W.indexOf(j);Ee>-1&&W.splice(Ee,1),ae.visibility=W,de(),xe()}),$.appendChild(et),Le.appendChild($);let tt=document.createElement("div");tt.style.display="flex",tt.style.gap="8px";let Ve=document.createElement("label");Ve.textContent="Type",Ve.style.fontSize=".85rem",Ve.style.marginRight="4px";let Ge=document.createElement("select");["state","numeric_state","screen","user"].forEach(Fe=>{let Ee=document.createElement("option");Ee.value=Fe,Ee.textContent=Fe.replace("_"," "),Ge.appendChild(Ee)}),Ge.value=qe,Ge.addEventListener("change",()=>{j.condition=Ge.value,delete j.entity,delete j.state,delete j.state_not,delete j.above,delete j.below,delete j.media_query,delete j.users,de(),xe()}),tt.appendChild(Ve),tt.appendChild(Ge),Le.appendChild(tt);let ze=document.createElement("div");Object.assign(ze.style,{display:"flex",flexWrap:"wrap",gap:"8px",alignItems:"center"});let fe=(Fe,Ee)=>{let se=document.createElement("div");se.style.display="flex",se.style.flexDirection="column",se.style.gap="4px",se.style.minWidth="150px";let re=document.createElement("span");re.textContent=Fe,re.style.fontSize=".75rem",se.appendChild(re),se.appendChild(Ee),ze.appendChild(se)};(()=>{var Fe,Ee;if(ze.innerHTML="",j.condition==="state"){let se;customElements.get("ha-entity-picker")?(se=document.createElement("ha-entity-picker"),se.hass=this.hass,se.setAttribute("label","Select entity"),se.removeAttribute("hide-clear-icon"),se.value=j.entity||"",se.addEventListener("value-changed",J=>{J.stopPropagation(),j.entity=J.detail.value||"",xe()})):(se=document.createElement("input"),se.value=j.entity||"",se.addEventListener("input",()=>{j.entity=se.value.trim(),xe()}),Object.assign(se.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})),fe("Entity",se);let re;if(customElements.get("ha-select")){re=document.createElement("ha-select");let J=document.createElement("mwc-list-item");J.setAttribute("value","state"),J.textContent="State is equal to";let z=document.createElement("mwc-list-item");z.setAttribute("value","state_not"),z.textContent="State is not equal to",re.appendChild(J),re.appendChild(z),re.value=j.state_not!=null?"state_not":"state",re.addEventListener("selected",H=>{H.stopPropagation();let Z=j.state_not!=null?j.state_not:j.state;re.value==="state_not"?(j.state_not=Z,delete j.state):(j.state=Z,delete j.state_not),xe()})}else re=document.createElement("select"),re.innerHTML='<option value="state">State is equal to</option><option value="state_not">State is not equal to</option>',re.value=j.state_not!=null?"state_not":"state",Object.assign(re.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),re.addEventListener("change",J=>{J.stopPropagation();let z=j.state_not!=null?j.state_not:j.state;re.value==="state_not"?(j.state_not=z,delete j.state):(j.state=z,delete j.state_not),xe()});fe("Match type",re);let Q;customElements.get("ha-textfield")?(Q=document.createElement("ha-textfield"),Q.value=(j.state_not!=null?j.state_not:j.state)||"",Q.setAttribute("label",""),Q.addEventListener("input",J=>{J.stopPropagation();let z=re.value;j[z]=Q.value;let H=z==="state"?"state_not":"state";delete j[H],xe()})):(Q=document.createElement("input"),Q.value=(j.state_not!=null?j.state_not:j.state)||"",Object.assign(Q.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),Q.addEventListener("input",J=>{J.stopPropagation();let z=re.value;j[z]=Q.value;let H=z==="state"?"state_not":"state";delete j[H],xe()})),fe("State",Q)}else if(j.condition==="numeric_state"){let se;customElements.get("ha-entity-picker")?(se=document.createElement("ha-entity-picker"),se.hass=this.hass,se.setAttribute("label","Select entity"),se.removeAttribute("hide-clear-icon"),se.value=j.entity||"",se.addEventListener("value-changed",J=>{J.stopPropagation(),j.entity=J.detail.value||"",xe()})):(se=document.createElement("input"),se.value=j.entity||"",se.addEventListener("input",()=>{j.entity=se.value.trim(),xe()}),Object.assign(se.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})),fe("Entity",se);let re;customElements.get("ha-textfield")?(re=document.createElement("ha-textfield"),re.setAttribute("type","number"),re.value=j.above!=null?j.above:"",re.addEventListener("input",J=>{J.stopPropagation();let z=re.value;z===""||isNaN(Number(z))?delete j.above:j.above=Number(z),xe()})):(re=document.createElement("input"),re.type="number",re.value=j.above!=null?j.above:"",Object.assign(re.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),re.addEventListener("input",()=>{let J=re.value;J===""||isNaN(Number(J))?delete j.above:j.above=Number(J),xe()})),fe("Above",re);let Q;customElements.get("ha-textfield")?(Q=document.createElement("ha-textfield"),Q.setAttribute("type","number"),Q.value=j.below!=null?j.below:"",Q.addEventListener("input",J=>{J.stopPropagation();let z=Q.value;z===""||isNaN(Number(z))?delete j.below:j.below=Number(z),xe()})):(Q=document.createElement("input"),Q.type="number",Q.value=j.below!=null?j.below:"",Object.assign(Q.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),Q.addEventListener("input",()=>{let J=Q.value;J===""||isNaN(Number(J))?delete j.below:j.below=Number(J),xe()})),fe("Below",Q)}else if(j.condition==="screen"){let se=document.createElement("select"),re=[{label:"Custom",value:""},{label:"Mobile (max-width: 599px)",value:"(max-width: 599px)"},{label:"Tablet (600px - 991px)",value:"(min-width: 600px) and (max-width: 991px)"},{label:"Desktop (min-width: 992px)",value:"(min-width: 992px)"}];if(re.forEach(Q=>{let J=document.createElement("option");J.value=Q.value,J.textContent=Q.label,se.appendChild(J)}),se.value=(Ee=(Fe=re.find(Q=>Q.value===(j.media_query||"")))==null?void 0:Fe.value)!=null?Ee:"",se.addEventListener("change",()=>{j.media_query=se.value,xe()}),fe("Screen size",se),se.value===""){let Q=document.createElement("input");Q.placeholder="e.g. (min-width: 1280px)",Q.value=j.media_query||"",Q.addEventListener("input",()=>{j.media_query=Q.value,xe()}),fe("Custom query",Q)}}else if(j.condition==="user"){let se;customElements.get("ha-user-picker")?(se=document.createElement("ha-user-picker"),se.hass=this.hass,se.value=Array.isArray(j.users)?j.users:[],se.addEventListener("value-changed",re=>{j.users=Array.isArray(re.detail.value)?re.detail.value:[re.detail.value],xe()})):(se=document.createElement("input"),se.value=Array.isArray(j.users)?j.users.join(","):"",se.addEventListener("input",()=>{j.users=se.value.split(",").map(re=>re.trim()).filter(Boolean),xe()})),fe("Users",se)}})(),Le.appendChild(ze),q.appendChild(Le)});let Te=document.createElement("button");Te.className="btn",Te.innerHTML='<ha-icon icon="mdi:plus"></ha-icon><span style="margin-left:6px">Add condition</span>',Object.assign(Te.style,{marginTop:"8px"}),Te.addEventListener("click",()=>{W.push({condition:"state",entity:"",state:""}),ae.visibility=W,de(),xe()}),q.appendChild(Te)};de()},De=N=>{if(!q)return;let W=Array.isArray(N==null?void 0:N.visibility)?N.visibility:[],he=null,xe=async()=>{if(he)return he;try{if(this.hass&&typeof this.hass.callWS=="function")try{let ee=await this.hass.callWS({type:"config/auth/list"});if(Array.isArray(ee))return he=ee,ee}catch{}if(this.hass&&typeof this.hass.callApi=="function")try{let ee=await this.hass.callApi("get","users");if(Array.isArray(ee))return he=ee,ee}catch{}let j=[];if(this.hass&&this.hass.users&&Array.isArray(this.hass.users)&&j.push(...this.hass.users),this.hass&&this.hass.userData&&Array.isArray(this.hass.userData.users)&&j.push(...this.hass.userData.users),this.hass&&this.hass.authorizedUsers&&Array.isArray(this.hass.authorizedUsers)&&j.push(...this.hass.authorizedUsers),j.length){let ee=new Map;j.forEach($=>{let Je=$.id||$.user_id||$.uid||$.name||"";ee.has(Je)||ee.set(Je,$)});let Le=Array.from(ee.values());return he=Le,Le}}catch{}return he=[],[]},de=()=>{var j;W=W.filter(ee=>ee&&typeof ee=="object"&&ee.condition),ae.visibility=W;try{Se==null||Se.setValue(ae)}catch{}try{(j=Oe==null?void 0:Oe.setConfig)==null||j.call(Oe,ae)}catch{}gt(ae)},Te=()=>{q.innerHTML="";let j=document.createElement("div");j.style.opacity=".75",j.style.fontSize=".85rem",j.style.marginBottom="12px",j.textContent="The card will be shown when ALL conditions below are fulfilled. If no conditions are set, the card will always be shown.",q.appendChild(j);let ee=($,Je)=>{$.forEach((qe,rt)=>{Le(qe,$,rt,Je)});let Ue=document.createElement("div");Ue.style.marginTop="8px";let it=document.createElement("button");it.className="btn",it.innerHTML='<ha-icon icon="mdi:plus"></ha-icon><span style="margin-left:6px">Add condition</span>',Object.assign(it.style,{display:"flex",alignItems:"center",gap:"6px",padding:"6px 12px",border:"none",borderRadius:"20px",background:"var(--primary-color)",color:"var(--text-primary-color, #fff)",cursor:"pointer",fontWeight:"500"}),it.addEventListener("click",qe=>{qe.stopPropagation();let rt=Ue.querySelector(".add-menu");if(rt){rt.remove();return}let et=document.createElement("div");et.className="add-menu",Object.assign(et.style,{position:"relative",marginTop:"4px",border:"1px solid var(--divider-color)",borderRadius:"8px",background:"var(--card-background-color, var(--secondary-background-color))",boxShadow:"0 2px 4px rgba(0,0,0,0.2)"}),[{type:"numeric_state",label:"Entity numeric state",icon:"mdi:numeric"},{type:"state",label:"Entity state",icon:"mdi:state-machine"},{type:"screen",label:"Screen",icon:"mdi:monitor"},{type:"user",label:"User",icon:"mdi:account"},{type:"and",label:"And",icon:"mdi:logic-and"},{type:"or",label:"Or",icon:"mdi:logic-or"}].forEach(Ve=>{let Ge=document.createElement("div");Ge.style.display="flex",Ge.style.alignItems="center",Ge.style.gap="8px",Ge.style.padding="6px 12px",Ge.style.cursor="pointer",Ge.addEventListener("mouseenter",()=>Ge.style.background="var(--hover-color, #444)"),Ge.addEventListener("mouseleave",()=>Ge.style.background=""),Ge.addEventListener("click",()=>{et.remove();let Ce;Ve.type==="and"||Ve.type==="or"?Ce={condition:Ve.type,conditions:[]}:Ve.type==="state"?Ce={condition:"state",entity:"",state:""}:Ve.type==="numeric_state"?Ce={condition:"numeric_state",entity:""}:Ve.type==="screen"?Ce={condition:"screen",media_query:""}:Ve.type==="user"&&(Ce={condition:"user",users:[]}),$.push(Ce),xt.set(Ce,!0),de(),Te()});let ze=document.createElement("ha-icon");ze.setAttribute("icon",Ve.icon),Ge.appendChild(ze);let fe=document.createElement("span");fe.textContent=Ve.label,Ge.appendChild(fe),et.appendChild(Ge)}),Ue.appendChild(et)}),Ue.appendChild(it),Je.appendChild(Ue)},Le=($,Je,Ue,it)=>{let qe=$.condition||"state",rt=xt.get($);rt===void 0&&(rt=W.length===1);let et=document.createElement("div");Object.assign(et.style,{display:"flex",flexDirection:"column",border:"1px solid var(--divider-color)",borderLeft:"3px solid var(--primary-color)",borderRadius:"12px",padding:"16px",marginBottom:"20px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",boxShadow:"var(--ha-card-box-shadow, 0 2px 6px rgba(0, 0, 0, 0.15))"});let tt=document.createElement("div");tt.style.display="flex",tt.style.alignItems="center",tt.style.justifyContent="space-between",tt.style.marginBottom="8px",tt.style.borderBottom="1px solid var(--divider-color)",tt.style.paddingBottom="4px",tt.style.position="relative";let Ve=document.createElement("div");Ve.style.display="flex",Ve.style.alignItems="center",Ve.style.gap="6px";let Ge=document.createElement("button");Ge.innerHTML=`<ha-icon icon="${rt?"mdi:chevron-down":"mdi:chevron-right"}"></ha-icon>`,Object.assign(Ge.style,{border:"none",background:"transparent",cursor:"pointer",padding:"4px",display:"inline-flex",alignItems:"center"}),Ge.addEventListener("click",Ee=>{Ee.stopPropagation(),xt.set($,!rt),Te()}),Ve.appendChild(Ge);let ze=document.createElement("ha-icon"),fe="mdi:filter";qe==="numeric_state"?fe="mdi:numeric":qe==="screen"?fe="mdi:monitor":qe==="user"?fe="mdi:account":qe==="state"?fe="mdi:state-machine":qe==="and"?fe="mdi:logic-and":qe==="or"&&(fe="mdi:logic-or"),ze.setAttribute("icon",fe),Ve.appendChild(ze);let Ce=document.createElement("span");Ce.style.fontWeight="600",Ce.style.fontSize="0.95rem",Ce.style.textTransform="capitalize",Ce.textContent=qe==="numeric_state"?"Entity numeric state":qe==="state"?"Entity state":qe==="screen"?"Screen":qe==="user"?"User":qe==="and"?"And":"Or",Ve.appendChild(Ce),tt.appendChild(Ve);let Fe=document.createElement("button");if(Fe.setAttribute("title","Remove condition"),Fe.innerHTML='<ha-icon icon="mdi:trash-can-outline"></ha-icon>',Object.assign(Fe.style,{border:"none",background:"transparent",cursor:"pointer",padding:"4px",display:"inline-flex",alignItems:"center"}),Fe.style.position="relative",Fe.style.zIndex="1000",Fe.addEventListener("click",Ee=>{Ee.preventDefault(),Ee.stopPropagation();let se=Je.indexOf($);se>-1&&Je.splice(se,1),de(),Te()}),tt.appendChild(Fe),et.appendChild(tt),qe!=="and"&&qe!=="or"){if(rt){let Ee=document.createElement("div");Object.assign(Ee.style,{display:"flex",flexDirection:"column",gap:"14px",alignItems:"stretch"});let se=(re,Q)=>{let J=document.createElement("div");J.style.display="flex",J.style.flexDirection="column",J.style.gap="4px";let z=document.createElement("span");z.textContent=re,z.style.fontSize=".75rem",J.appendChild(z),J.appendChild(Q),Ee.appendChild(J);let H=(Q.tagName||"").toLowerCase();(H==="input"||H==="select")&&Object.assign(Q.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})};if($.condition==="state"){let re=document.createElement("ha-entity-picker");re.value=$.entity||"",re.hass=this.hass,re.setAttribute("label","Select entity"),re.addEventListener("value-changed",z=>{$.entity=z.detail.value||"",de()}),customElements.get("ha-entity-picker")||customElements.whenDefined("ha-entity-picker").then(()=>{Te()}).catch(()=>{}),se("Entity",re);let Q;if(customElements.get("ha-select")){Q=document.createElement("ha-select");let z=document.createElement("mwc-list-item");z.setAttribute("value","state"),z.textContent="State is equal to";let H=document.createElement("mwc-list-item");H.setAttribute("value","state_not"),H.textContent="State is not equal to",Q.appendChild(z),Q.appendChild(H),Q.value=$.state_not!=null?"state_not":"state",Q.addEventListener("selected",Z=>{Z.stopPropagation();let oe=$.state_not!=null?$.state_not:$.state;Q.value==="state_not"?($.state_not=oe,delete $.state):($.state=oe,delete $.state_not),de()})}else Q=document.createElement("select"),Q.innerHTML='<option value="state">State is equal to</option><option value="state_not">State is not equal to</option>',Q.value=$.state_not!=null?"state_not":"state",Q.addEventListener("change",z=>{z.stopPropagation();let H=$.state_not!=null?$.state_not:$.state;Q.value==="state_not"?($.state_not=H,delete $.state):($.state=H,delete $.state_not),de()}),Object.assign(Q.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"});se("Match type",Q);let J;customElements.get("ha-textfield")?(J=document.createElement("ha-textfield"),J.value=($.state_not!=null?$.state_not:$.state)||"",J.setAttribute("label",""),J.addEventListener("input",z=>{z.stopPropagation();let H=Q.value;$[H]=J.value;let Z=H==="state"?"state_not":"state";delete $[Z],de()})):(J=document.createElement("input"),J.value=($.state_not!=null?$.state_not:$.state)||"",Object.assign(J.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),J.addEventListener("input",z=>{z.stopPropagation();let H=Q.value;$[H]=J.value;let Z=H==="state"?"state_not":"state";delete $[Z],de()})),se("State",J)}else if($.condition==="numeric_state"){let re=document.createElement("ha-entity-picker");re.value=$.entity||"",re.hass=this.hass,re.setAttribute("label","Select entity"),re.removeAttribute("hide-clear-icon"),re.addEventListener("value-changed",z=>{$.entity=z.detail.value||"",de()}),customElements.get("ha-entity-picker")||customElements.whenDefined("ha-entity-picker").then(()=>{Te()}).catch(()=>{}),se("Entity",re);let Q;customElements.get("ha-textfield")?(Q=document.createElement("ha-textfield"),Q.setAttribute("type","number"),Q.value=$.above!=null?$.above:"",Q.addEventListener("input",z=>{z.stopPropagation();let H=Q.value;H===""||isNaN(Number(H))?delete $.above:$.above=Number(H),de()})):(Q=document.createElement("input"),Q.type="number",Q.value=$.above!=null?$.above:"",Object.assign(Q.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),Q.addEventListener("input",()=>{let z=Q.value;z===""||isNaN(Number(z))?delete $.above:$.above=Number(z),de()})),se("Above",Q);let J;customElements.get("ha-textfield")?(J=document.createElement("ha-textfield"),J.setAttribute("type","number"),J.value=$.below!=null?$.below:"",J.addEventListener("input",z=>{z.stopPropagation();let H=J.value;H===""||isNaN(Number(H))?delete $.below:$.below=Number(H),de()})):(J=document.createElement("input"),J.type="number",J.value=$.below!=null?$.below:"",Object.assign(J.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),J.addEventListener("input",()=>{let z=J.value;z===""||isNaN(Number(z))?delete $.below:$.below=Number(z),de()})),se("Below",J)}else if($.condition==="screen"){let re=[{label:"Mobile",query:"(max-width: 599px)"},{label:"Tablet (min: 768px)",query:"(min-width: 768px)"},{label:"Desktop (min: 1024px)",query:"(min-width: 1024px)"},{label:"Wide (min: 1280px)",query:"(min-width: 1280px)"}];Array.isArray($.media_query_list)||($.media_query_list=[]);let Q=document.createElement("div");Q.style.display="flex",Q.style.flexDirection="column",Q.style.gap="4px",re.forEach(J=>{let z=document.createElement("label");z.style.display="flex",z.style.alignItems="center",z.style.gap="6px";let H=document.createElement("input");H.type="checkbox",H.checked=$.media_query_list.includes(J.query),H.addEventListener("change",()=>{H.checked?$.media_query_list.push(J.query):$.media_query_list=$.media_query_list.filter(oe=>oe!==J.query),$.media_query=$.media_query_list.join(","),de()});let Z=document.createElement("span");Z.textContent=J.label,z.appendChild(H),z.appendChild(Z),Q.appendChild(z)}),se("Screen sizes",Q)}else if($.condition==="user"){let re;if(customElements.get("ha-user-picker"))re=document.createElement("ha-user-picker"),re.hass=this.hass,re.setAttribute("label","Select user"),re.value=Array.isArray($.users)?$.users:[],re.addEventListener("value-changed",Q=>{let J=Q.detail.value;$.users=Array.isArray(J)?J:[J],de()});else{re=document.createElement("div"),re.style.display="flex",re.style.flexDirection="column",re.style.gap="4px";let Q=document.createElement("span");Q.style.opacity="0.7",Q.style.fontSize=".85rem",Q.textContent="Loading users\u2026",re.appendChild(Q);let J=Array.isArray($.users)?$.users:[];xe().then(z=>{if(re.innerHTML="",Array.isArray(z)&&z.length)z.forEach(H=>{let Z=H.id||H.user_id||H.uid||H.name||"",oe=H.name||Z,we=document.createElement("label");we.style.display="flex",we.style.alignItems="center",we.style.gap="6px",we.style.padding="4px 0";let ue=document.createElement("input");ue.type="checkbox",ue.checked=J.includes(Z)||J.includes(oe),ue.addEventListener("change",()=>{let Ne=Array.isArray($.users)?$.users.slice():[];ue.checked?Ne.includes(Z)||Ne.push(Z):Ne=Ne.filter(He=>He!==Z&&He!==oe),$.users=Ne,de()});let me=document.createElement("span");me.textContent=oe,we.appendChild(ue),we.appendChild(me),re.appendChild(we)});else{let H=document.createElement("input");H.value=Array.isArray($.users)?$.users.join(","):"",Object.assign(H.style,{padding:"6px 10px",borderRadius:"6px",border:"1px solid var(--divider-color)",background:"var(--card-background-color, var(--secondary-background-color))",color:"var(--primary-text-color, inherit)"});let Z=()=>{$.users=H.value.split(",").map(oe=>oe.trim()).filter(Boolean),de()};H.addEventListener("change",Z),H.addEventListener("blur",Z),re.appendChild(H)}})}se("Users",re)}et.appendChild(Ee)}}else if(rt){Array.isArray($.conditions)||($.conditions=[]);let Ee=document.createElement("div");Ee.style.marginLeft="16px",ee($.conditions,Ee),et.appendChild(Ee)}it.appendChild(et)};ee(W,q)};Te()},gt=N=>{if(((N==null?void 0:N.type)||"")==="custom_card"){lt=JSON.stringify(N||{}),x.innerHTML='<div style="opacity:.6;font-size:.9rem;padding:8px">Preview not available for the custom card placeholder. Use the YAML editor.</div>',Y.hidden=!0;return}let W=JSON.stringify(N||{});W!==lt&&(lt=W,Bt&&clearTimeout(Bt),Bt=setTimeout(async()=>{let he=++ft;Y.hidden=!1,x.innerHTML="",await Mr();try{let xe=await this._helpersPromise||await window.loadCardHelpers();if(he!==ft)return;let de=xe.createCardElement(N);if(de.hass=this.hass,he!==ft)return;x.appendChild(de)}catch{}finally{he===ft&&(Y.hidden=!0)}},150))},Tt=async N=>{var xe;let W=++ft;w.hidden=!1,S.innerHTML="",await lc();let he=N.type||We;if(ht=await this._getEditorElementForType(he,N),he==="custom_card"){let de=document.createElement("div");return de.style.opacity=".7",de.style.fontSize=".9rem",de.textContent="Custom card placeholder: use the YAML editor to paste the card type and options.",S.appendChild(de),Oe=null,st!=="yaml"&&ne("yaml"),ie(!0),w.hidden=!0,!1}if(!ht){let de=document.createElement("div");return de.style.opacity=".7",de.style.fontSize=".9rem",de.textContent="This card does not support a visual editor. Please use the YAML tab to configure it.",W===ft&&(S.appendChild(de),w.hidden=!0),Oe=null,ie(!0),st!=="visual"&&ne("yaml"),!1}try{ht.hass=this.hass,ht.isConnected||S.appendChild(ht),await Promise.resolve();try{ht.setConfig(N)}catch{}try{let Te=await this._helpersPromise||await window.loadCardHelpers(),j=Te.getCardElementClass?await Te.getCardElementClass(N.type||We):null;if(j!=null&&j.getStubConfig){let ee=Object.keys(((xe=this.hass)==null?void 0:xe.states)||{}),Le=Je=>ee.filter(Ue=>Ue.startsWith(Je+".")),$=await j.getStubConfig(this.hass,ee,Le);$&&(N=this._shapeBySchema(N.type||We,{...$}))}}catch{}await Promise.resolve();try{ht.setConfig(N)}catch{}Oe&&this.__onEditorChange&&(Oe.removeEventListener("config-changed",this.__onEditorChange),Oe.removeEventListener("value-changed",this.__onEditorChange));let de=async Te=>{var Le,$,Je;let j=(Je=(Le=Te.detail)==null?void 0:Le.config)!=null?Je:($=Te.detail)==null?void 0:$.value;if(!j)return;let ee=j.type||We;We=ee,ae=this._shapeBySchema(ee,j),F(""),ie(!0),At(We,ae),gt(ae),Se==null||Se.setValue(ae)};return this.__onEditorChange=de,ht.addEventListener("config-changed",de),ht.addEventListener("value-changed",de),Oe=ht,st!=="yaml"&&ne("visual"),ie(!0),!0}finally{W===ft&&(w.hidden=!0)}},ti=async N=>{Se=await this._mountYamlEditor(R,N,async W=>{var he,xe;try{let de=(W==null?void 0:W.type)||We,Te=this._shapeBySchema(de,W||{}),j=de!==We;if(We=de,ae=Te,C.hidden=!0,C.textContent="",ie(!0),j){if(At(We,ae),Oe){try{(he=Oe.setConfig)==null||he.call(Oe,ae)}catch{}st!=="yaml"&&ne("visual")}try{De(ae)}catch{}}else{try{(xe=Oe==null?void 0:Oe.setConfig)==null||xe.call(Oe,ae)}catch{}gt(ae);try{De(ae)}catch{}}}catch(de){C.hidden=!1,C.textContent=`Invalid config: ${String((de==null?void 0:de.message)||de)}`,ie(!1)}},W=>{C.hidden=!1,C.textContent=`Invalid YAML: ${String((W==null?void 0:W.message)||W)}`,ie(!1)})},Ot=async N=>{if(this.__stubCache.has(N))return{...this.__stubCache.get(N)};let W=await this._getStubConfigForType(N);return this.__stubCache.set(N,{...W}),{...W}},mt=async N=>{C.hidden=!0,C.textContent="",F(""),We=N;try{typeof ot=="function"&&ot(N)}catch{}let W=t==="edit"&&n&&n.type===N?{...n}:await Ot(N);ae=this._shapeBySchema(N,W),Oe=null,At(N,ae),await ti(ae),await Mr(),gt(ae);try{De(ae)}catch{}try{let he=await Tt(ae);ne(he?"visual":"yaml")}catch{ne("yaml")}ie(!0)},It=async()=>{if(!ae)return;let N=this._shapeBySchema(We,ae);t==="edit"&&typeof o=="function"?await o(N):(await this._addPickedCardToLayout(N),this._pushRecent((N||{}).type)),c()};v.addEventListener("click",c),m.addEventListener("click",c),u.addEventListener("click",It),f.addEventListener("click",It),s.addEventListener("keydown",N=>{N.key==="Escape"&&c(),N.key==="Enter"&&!u.disabled&&It()});let Mt=null;y.addEventListener("input",()=>{Mt&&clearTimeout(Mt),Mt=setTimeout(ct,120)}),ct(),await mt((()=>{var he;return(((he=this._getRecent)==null?void 0:he.call(this))||[]).find(Boolean)||"entities"})()),ie(!0),t==="edit"&&n&&(await mt(n.type||"entities"),ie(!0))}async _getStubConfigForType(t){var v;let n=await this._helpersPromise||await window.loadCardHelpers(),o=null;if(t==="custom_card")return null;try{n.getCardElementClass&&(o=await n.getCardElementClass(t))}catch{}let c=Object.keys(((v=this.hass)==null?void 0:v.states)||{}),s=m=>c.filter(y=>y.startsWith(m+".")),l={type:t};if(o!=null&&o.getStubConfig)try{let m=await o.getStubConfig(this.hass,c,s);if(t!=="entity")return m;m&&typeof m=="object"&&(l={...l,...m})}catch{}let u=c[0],f=s("sensor")[0]||u;if(["entity","sensor","button","gauge","tile","light","thermostat","media-control","alarm-panel","picture-entity","weather-forecast","map"].includes(t)){let m={sensor:f,gauge:s("sensor").find(this._isNumericEntity.bind(this))||f,"media-control":s("media_player")[0]||u,light:s("light")[0]||u,thermostat:s("climate")[0]||u,"alarm-panel":s("alarm_control_panel")[0]||u,"weather-forecast":s("weather")[0]||u,map:s("device_tracker")[0]||s("person")[0]||u}[t]||f||u;["entity","sensor","button","gauge","tile","light","thermostat","media-control","alarm-panel","picture-entity"].includes(t)?l.entity=m:t==="weather-forecast"?(l.entity=m,l.show_current=!0,l.show_forecast=!0,l.forecast_type="daily"):t==="map"&&(l.entities=[m].filter(Boolean),l.theme_mode="auto")}if(["entities","glance","picture-glance","history-graph","statistics-graph"].includes(t)){let m=y=>(y!=null&&y.length?c.filter(x=>y.includes(x.split(".")[0])):c).slice(0,3);t==="statistics-graph"?l.entities=m(["sensor","number","input_number"]):l.entities=m()}if(t==="markdown"&&(l.content="Markdown card"),t==="sensor"&&(l.graph="line"),t==="button"&&(l.show_name=!0,l.show_icon=!0),t==="tile"&&(l.features_position="bottom",l.vertical=!1),t==="picture-glance"&&(l.title=l.title||"Glance",l.image=l.image||"https://demo.home-assistant.io/stub_config/kitchen.png"),t==="picture-entity"&&(l.image=l.image||"https://demo.home-assistant.io/stub_config/bedroom.png"),t==="iframe"&&(l.url=l.url||"https://www.home-assistant.io",l.aspect_ratio=l.aspect_ratio||"50%"),t==="alarm-panel"&&(l.states=l.states||["arm_home","arm_away"]),t==="area")try{let m=this.hass&&this.hass.areas?Object.values(this.hass.areas):[];m.length?l.area=m[0].area_id||m[0].name||m[0].id:l.area=u?u.split(".")[0]:"default_area",l.display_type="picture",l.alert_classes=l.alert_classes||["moisture","motion"],l.sensor_classes=l.sensor_classes||["temperature","humidity"],l.features_position="bottom"}catch{}return l}_getNextAvailablePosition(){let t=Array.from(this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)")),n=new Set,o=this.gridSize;t.forEach(l=>{let u=parseFloat(l.getAttribute("data-x"))||0,f=parseFloat(l.getAttribute("data-y"))||0,v=parseFloat(getComputedStyle(l).width)||100,m=parseFloat(getComputedStyle(l).height)||100,y=Math.floor(u/o),x=Math.floor(f/o),S=Math.floor((u+v)/o),w=Math.floor((f+m)/o);for(let T=y;T<S;T++)for(let R=x;R<w;R++)n.add(`${T}-${R}`)});let c=0,s=0;for(;n.has(`${c}-${s}`);)c+=6,c>60&&(c=0,s+=6);return{x:c*o,y:s*o}}async _addPickedCardToLayout(t){this._hideEmptyPlaceholder();let n=await this._createCard(t),o=this._makeWrapper(n),c=this._getNextAvailablePosition();this._setCardPosition(o,c.x,c.y),o.style.width=`${14*this.gridSize}px`,o.style.height=`${10*this.gridSize}px`;{let s=this._highestZ()+1;o.style.zIndex=String(Math.max(s,6))}this.cardContainer.appendChild(o);try{this._rebuildOnce(o.firstElementChild)}catch{}this._initCardInteract(o),this._resizeContainer(),this._queueSave("add"),this._toast("Card added to layout."),this._syncEmptyStateUI();try{this._applyVisibility_()}catch{}}_toggleSelection(t,n=null){let o=n==null?!this._selection.has(t):!!n;o?this._selection.add(t):this._selection.delete(t),t.classList.toggle("selected",o)}_clearSelection(){for(let t of this._selection)t.classList.remove("selected");this._selection.clear()}_copySelection(){var t,n,o;try{let c=this._selection?Array.from(this._selection):[];if(!c.length){(t=this._toast)==null||t.call(this,"Nothing selected to copy.");return}let s=1/0,l=1/0,u=[];for(let f of c){if(f.dataset.placeholder)continue;let v=parseFloat(f.getAttribute("data-x"))||0,m=parseFloat(f.getAttribute("data-y"))||0;v<s&&(s=v),m<l&&(l=m)}for(let f of c){if(f.dataset.placeholder)continue;let v=this._extractCardConfig(f.firstElementChild)||{},m=parseFloat(f.getAttribute("data-x"))||0,y=parseFloat(f.getAttribute("data-y"))||0,x=f.style.width||`${f.getBoundingClientRect().width}px`,S=f.style.height||`${f.getBoundingClientRect().height}px`;u.push({cfg:v,dx:m-s,dy:y-l,width:x,height:S})}window.__DDC_CLIPBOARD__={items:u},(n=this._toast)==null||n.call(this,`Copied ${u.length} card${u.length===1?"":"s"}.`)}catch(c){console.warn("[drag-and-drop-card] Copy failed",c),(o=this._toast)==null||o.call(this,"Copy failed.")}}async _pasteClipboard(){var t,n,o,c;try{let s=window.__DDC_CLIPBOARD__;if(!s||!Array.isArray(s.items)||!s.items.length){(t=this._toast)==null||t.call(this,"Clipboard is empty.");return}let l=s.items,u=1,f;do{let y=this.gridSize*u,x=this.gridSize*u;f=l.map(S=>{let w=parseFloat(S.width)||0,T=parseFloat(S.height)||0;return{x:y+(S.dx||0),y:x+(S.dy||0),w,h:T}}),u+=1}while(this._anyCollisionFor(f,new Set));let v=this.gridSize*(u-1),m=this.gridSize*(u-1);for(let y of l){let x=y.cfg||{},S=await this._createCard(x),w=this._makeWrapper(S);w.style.width=y.width,w.style.height=y.height;let T=v+(y.dx||0),R=m+(y.dy||0);this._setCardPosition(w,T,R);{let C=this._highestZ()+1;w.style.zIndex=String(Math.max(C,6))}try{let C=this._normalizeTabId(this.activeTab||this.defaultTab);C&&(w.dataset.tabId=C)}catch{}this.cardContainer.appendChild(w);try{this._rebuildOnce(w.firstElementChild)}catch{}this._initCardInteract(w)}this._resizeContainer(),this._applyActiveTab(),(n=this._queueSave)==null||n.call(this,"paste"),(o=this._toast)==null||o.call(this,`Pasted ${l.length} card${l.length===1?"":"s"}.`)}catch(s){console.warn("[drag-and-drop-card] Paste failed",s),(c=this._toast)==null||c.call(this,"Paste failed.")}}_installSelectionMarquee(){let t=this.cardContainer,n=0,o=0,c=null,s=!1,l=y=>{let x=t.getBoundingClientRect(),S="touches"in y&&y.touches[0]?y.touches[0].clientX:y.clientX,w="touches"in y&&y.touches[0]?y.touches[0].clientY:y.clientY,T=this.__pointerScaleX||1,R=this.__pointerScaleY||1;return{x:(S-x.left)/T,y:(w-x.top)/R}},u=(y,x)=>{let S=Math.min(y,n),w=Math.max(y,n),T=Math.min(x,o),R=Math.max(x,o);c.style.left=`${S}px`,c.style.top=`${T}px`,c.style.width=`${w-S}px`,c.style.height=`${R-T}px`;let C=c.getBoundingClientRect(),O=t.querySelectorAll(".card-wrapper:not(.ddc-placeholder)");this._clearSelection(),O.forEach(P=>{let b=P.getBoundingClientRect();!(b.right<C.left||b.left>C.right||b.bottom<C.top||b.top>C.bottom)&&this._toggleSelection(P,!0)})},f=y=>{if(!this.editMode||y.target.closest(".card-wrapper"))return;s=!0;let x=l(y);n=x.x,o=x.y,c=document.createElement("div"),c.className="marquee",c.style.left=`${n}px`,c.style.top=`${o}px`,t.appendChild(c),y.preventDefault()},v=y=>{!s||!c||u(l(y).x,l(y).y)},m=()=>{s&&(s=!1,c&&c.remove(),c=null)};t.addEventListener("mousedown",f),window.addEventListener("mousemove",v),window.addEventListener("mouseup",m),t.addEventListener("touchstart",y=>{this.editMode&&(y.target.closest(".card-wrapper")||f(y))},{passive:!1}),window.addEventListener("touchmove",y=>{v(y)},{passive:!0}),window.addEventListener("touchend",m),window.addEventListener("touchcancel",m)}async _openDiagnostics(){var u,f;let t=document.createElement("div");t.className="modal";let n=this.storageKey||"(none)",o=this._backendOK&&!!this.storageKey,c=v=>v.slice(-200).map(m=>`<div style="font-family:monospace;font-size:.85rem;line-height:1.3">
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
      </div>`;let s=()=>t.remove();t.querySelector("#closeDiag").addEventListener("click",s),this.shadowRoot.appendChild(t);let l=()=>{let v=t.querySelector("#logArea"),m=y=>y.slice(-200).map(x=>`<div style="font-family:monospace;font-size:.85rem;line-height:1.3">
          <span style="opacity:.6">${x.t}</span>
          <b style="margin-left:6px;color:#03a9f4">[${x.kind}]</b>
          <span style="margin-left:6px">${this._safe(x.msg)}</span>
          ${x.extra?`<pre style="margin:4px 0 0 0;white-space:pre-wrap;background:var(--card-background-color);border:1px solid var(--divider-color);border-radius:8px;padding:6px;max-height:160px;overflow:auto">${this._safe(JSON.stringify(x.extra,null,2))}</pre>`:""}
        </div>`).join("");v.innerHTML=m(this._dbgDump()),v.scrollTop=v.scrollHeight};t.querySelector("#refreshKeys").addEventListener("click",async()=>{try{this._dbgPush("probe","Manual refresh"),await this._probeBackend()}finally{l()}}),t.querySelector("#forceSave").addEventListener("click",async()=>{await this._saveLayout(!1),l()}),t.querySelector("#exportJson").addEventListener("click",()=>{let m=Array.from(this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)")).map(w=>{let T=parseFloat(w.getAttribute("data-x"))||0,R=parseFloat(w.getAttribute("data-y"))||0,C=parseFloat(w.style.width)||w.getBoundingClientRect().width,O=parseFloat(w.style.height)||w.getBoundingClientRect().height,P=parseInt(w.style.zIndex||"1",10),b=this._extractCardConfig(w.firstElementChild),M=w.dataset.tabId||this.defaultTab;return{card:b,position:{x:T,y:R},size:{width:C,height:O},z:P,tabId:M}}),y={version:2,options:this._exportableOptions(),cards:m},x=new Blob([JSON.stringify(y,null,2)],{type:"application/json"}),S=document.createElement("a");S.href=URL.createObjectURL(x),S.download=`ddc_${this.storageKey||"layout"}.json`,S.click(),URL.revokeObjectURL(S.href)}),t.querySelector("#importJson").addEventListener("click",async()=>{let v=document.createElement("input");v.type="file",v.accept="application/json",v.onchange=async()=>{var S,w,T,R,C,O,P,b,M,I,q,K,Y;let m=(S=v.files)==null?void 0:S[0];if(!m)return;let y=await m.text();try{let ie=JSON.parse(y);if(this._dbgPush("import","Loaded file",{bytes:y.length}),this.cardContainer.innerHTML="",(w=ie.cards)!=null&&w.length)for(let F of ie.cards)if(!(F!=null&&F.card)||typeof F.card=="object"&&Object.keys(F.card).length===0){let U=this._makePlaceholderAt(((T=F.position)==null?void 0:T.x)||0,((R=F.position)==null?void 0:R.y)||0,((C=F.size)==null?void 0:C.width)||200,((O=F.size)==null?void 0:O.height)||200);this.cardContainer.appendChild(U)}else{let U=await this._createCard(F.card),V=this._makeWrapper(U);this._setCardPosition(V,((P=F.position)==null?void 0:P.x)||0,((b=F.position)==null?void 0:b.y)||0),V.dataset.tabId=this._normalizeTabId(F.tabId||F.tab_id||this.defaultTab),this._setCardPosition(V,((M=F.position)==null?void 0:M.x)||0,((I=F.position)==null?void 0:I.y)||0),V.style.width=`${((q=F.size)==null?void 0:q.width)||140}px`,V.style.height=`${((K=F.size)==null?void 0:K.height)||100}px`,this.cardContainer.appendChild(V);try{this._rebuildOnce(V.firstElementChild)}catch{}this._initCardInteract(V)}else this._showEmptyPlaceholder(),(Y=this._applyAutoScale)==null||Y.call(this);this._resizeContainer(),await this._saveLayout(!1)}catch(ie){this._dbgPush("import","Parse failed",{error:String(ie)})}let x=new Event("ddc-logrefresh");window.dispatchEvent(x)},v.click()}),t.querySelector("#testRoundtrip").addEventListener("click",async()=>{if(!this._backendOK)return this._dbgPush("test","Backend not reachable, aborting"),l();let v=(this.storageKey||"ddc_test")+"_selftest",m={t:Date.now(),msg:"roundtrip"};try{await this._saveLayoutToBackend(v,m);let y=await this._loadLayoutFromBackend(v);this._dbgPush("test","Round-trip result",{wrote:m,read:y})}catch(y){this._dbgPush("test","Round-trip failed",{error:String(y)})}l()}),l()}_openDashboardSettings(){var $,Je,Ue,it,qe,rt,et,tt,Ve,Ge,ze,fe,Ce,Fe,Ee,se,re,Q,J;let t=document.createElement("div");t.className="modal",this._ensureSettingsStyles_(),t.innerHTML=`
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

`;let n=this.shadowRoot.querySelector(".modal");if(n){try{n.remove()}catch{}this.__settingsModal===n&&(this.__settingsModal=null)}if(this.__settingsModal){try{this.__settingsModal.remove()}catch{}this.__settingsModal=null}this.__settingsModal=t,this.shadowRoot.appendChild(t);let o=t.querySelector("#ddc-setting-autoResize"),c=t.querySelector("#ddc-setting-gridSize"),s=t.querySelector("#ddc-setting-animate"),l=t.querySelector("#ddc-setting-hideHdr"),u=t.querySelector("#ddc-setting-hideSbar"),f=t.querySelector("#ddc-setting-dragSnap"),v=t.querySelector("#ddc-setting-autoSave"),m=t.querySelector("#ddc-setting-autoSaveDebounce"),y=t.querySelector("#ddc-setting-sizeMode"),x=t.querySelector("#ddc-setting-orient"),S=t.querySelector("#ddc-setting-disableOverlap"),w=t.querySelector("#ddc-setting-editPin"),T=t.querySelector("#ddc-setting-containerBg"),R=t.querySelector("#ddc-setting-cardBg"),C=t.querySelector("#ddc-setting-cardShadow"),O=t.querySelector("#ddc-setting-bgImg"),P=t.querySelector("#ddc-bg-repeat"),b=t.querySelector("#ddc-bg-size"),M=t.querySelector("#ddc-bg-position"),I=t.querySelector("#ddc-bg-attachment"),q=t.querySelector("#ddc-bg-opacity"),K=t.querySelector("#ddc-bg-opacity-out"),Y=t.querySelector("#ddc-setting-debug"),ie=t.querySelector("#ddc-setting-screenSaverEnabled"),F=t.querySelector("#ddc-setting-screenSaverDelay"),U=t.querySelector("#ddc-screenSaverDelayOut"),V=t.querySelector("#ddc-bg-mode"),ce=t.querySelector('[data-bg-section="image"]'),je=t.querySelector('[data-bg-section="particles"]'),Pe=t.querySelector('[data-bg-section="youtube"]'),ge=t.querySelector("#ddc-particles-url"),ke=t.querySelector("#ddc-particles-pointer"),ye=t.querySelector("#ddc-youtube-url"),Ze=t.querySelector("#ddc-youtube-start"),$e=t.querySelector("#ddc-youtube-end"),Ie=t.querySelector("#ddc-youtube-mute"),Ke=t.querySelector("#ddc-youtube-loop"),ot=t.querySelector("#ddc-youtube-size"),st=t.querySelector("#ddc-youtube-position"),ne=t.querySelector("#ddc-youtube-attachment"),dt=t.querySelector("#ddc-youtube-opacity"),ct=t.querySelector("#ddc-youtube-opacity-out"),Me=(($=this._config)==null?void 0:$.background_image)||{},ae=((Je=this._config)==null?void 0:Je.background_mode)||((it=(Ue=this._config)==null?void 0:Ue.background_image)!=null&&it.src?"image":"none");V&&(V.value=String(ae));let We=((qe=this._config)==null?void 0:qe.background_particles)||{};ge&&(ge.value=We.config_url||""),ke&&(ke.checked=!!We.pointer_events);let Se=((rt=this._config)==null?void 0:rt.background_youtube)||{},Oe=Se.url||Se.video_id||"";if(ye&&(ye.value=Oe),Ze&&(Ze.value=(et=Se.start)!=null?et:""),$e&&($e.value=(tt=Se.end)!=null?tt:""),Ie&&(Ie.checked=Se.mute!==!1),Ke&&(Ke.checked=Se.loop!==!1),ot&&(ot.value=String(Se.size||"cover")),st&&(st.value=String(Se.position||"center")),ne&&(ne.value=String(Se.attachment||"scroll")),dt){let z=Math.round((Se.opacity!=null?Se.opacity:1)*100);dt.value=String(z),ct&&(ct.textContent=z+"%"),dt.addEventListener("input",()=>{let H=Math.max(0,Math.min(100,parseInt(dt.value||"100",10)));ct&&(ct.textContent=H+"%")})}let ht=()=>{let z=(V==null?void 0:V.value)||"none";ce&&(ce.style.display=z==="image"?"":"none"),je&&(je.style.display=z==="particles"?"":"none"),Pe&&(Pe.style.display=z==="youtube"?"":"none")};V==null||V.addEventListener("change",ht),ht();let ft=t.querySelector('[aria-labelledby="lbl-auto-resize"]'),Bt=()=>{let z=(y==null?void 0:y.value)||"dynamic";ft&&(ft.style.display=z==="dynamic"?"":"none")};if(Bt(),y==null||y.addEventListener("change",Bt),o&&(o.checked=!!this.autoResizeCards),c&&(c.value=String(this.gridSize||100)),s&&(s.checked=!!this.animateCards),l&&(l.checked=!!this.hideHaHeader),u&&(u.checked=!!this.hideHaSidebar),f&&(f.checked=!!this.dragLiveSnap),v&&(v.checked=!!this.autoSave),m&&(m.value=String((Ve=this.autoSaveDebounce)!=null?Ve:800)),y&&(y.value=String(this.containerSizeMode||"dynamic")),x&&(x.value=String(this.containerPresetOrient||"auto")),S&&(S.checked=!!this.disableOverlap),T&&(T.value=String(this.containerBackground||"")),R&&(R.value=String(this.cardBackground||"")),O){let z=((fe=(Ge=this._config)==null?void 0:Ge.background_image)!=null?fe:(ze=this._config)==null?void 0:ze.bg_image)||{};O.value=z.src?String(z.src):""}if(Y&&(Y.checked=!!this.debug),C&&(C.checked=!!this.cardShadowEnabled),P&&(P.value=String(Me.repeat||"no-repeat")),b&&(b.value=String(Me.size||"cover")),M&&(M.value=String(Me.position||"center center")),I&&(I.value=String(Me.attachment||"scroll")),q){let z=Math.round((Me.opacity!=null?Me.opacity:1)*100);q.value=String(z),K&&(K.textContent=`${z}%`),q.addEventListener("input",()=>{let H=Math.max(0,Math.min(100,parseInt(q.value||"100",10)));K.textContent=`${H}%`,this.style.setProperty("--ddc-bg-opacity",String(H/100))})}if(C&&C.addEventListener("change",()=>{try{C.checked?this.style.setProperty("--ddc-card-shadow","0 8px 24px rgba(0,0,0,.35)"):this.style.removeProperty("--ddc-card-shadow")}catch{}}),ie&&(ie.checked=!!this.screenSaverEnabled,ie.addEventListener("change",()=>{this.screenSaverEnabled=ie.checked,typeof this._updateScreensaverSettings=="function"&&this._updateScreensaverSettings()})),F){let z=this.screenSaverDelay!=null?Number(this.screenSaverDelay):3e5,H=Math.round(z/6e4);(!Number.isFinite(H)||H<1)&&(H=5),H>60&&(H=60),F.value=String(H),U&&(U.textContent=`${H} min`),F.addEventListener("input",()=>{let Z=parseInt(F.value||"1",10),oe=Math.max(1,Math.min(60,isNaN(Z)?1:Z));U&&(U.textContent=`${oe} min`),this.screenSaverDelay=oe*6e4,typeof this._updateScreensaverSettings=="function"&&this._updateScreensaverSettings()})}try{if(w){let z=this.config&&this.config.edit_mode_pin!=null?String(this.config.edit_mode_pin):"",H=this.editModePin!=null?String(this.editModePin):"";w.value=H||z||"",w.disabled=!1,w.readOnly=!1}}catch{}let lt=t.querySelector("#ddc-setting-gridSize"),At=t.querySelector("#ddc-grid-out"),xt=t.querySelector("#ddc-grid-demo"),Wt=t.querySelector("#ddc-grid-meta"),De=t.querySelector("#ddc-setting-gridSizeInput"),gt=()=>{if(!xt||!Wt)return;let z=xt.getBoundingClientRect(),H=Math.max(1,parseInt(lt.value||"100",10)),Z=Math.max(1,Math.floor(z.width/H)),oe=Math.max(1,Math.floor(z.height/H));Wt.innerHTML=`
        <ha-icon icon="mdi:grid"></ha-icon>
        <span>${H}px \xB7 ${Z}\xD7${oe}</span>
      `},Tt=()=>{let z=Math.max(1,parseInt(lt.value||"100",10));At&&(At.textContent=`${z} px`),xt&&xt.style.setProperty("--g",`${z}px`),gt()};if(lt&&(lt.value||(lt.value=String(this.gridSize||100)),lt.addEventListener("input",()=>{De&&(De.value=lt.value),Tt()}),De&&(De.value=lt.value),Tt()),De&&De.addEventListener("input",()=>{let z=Math.max(1,Math.min(400,parseInt(De.value||"100",10)));lt.value=String(z),Tt()}),xt){let z=new ResizeObserver(()=>gt());z.observe(xt),(Fe=(Ce=this.__ddcGridRO)==null?void 0:Ce.disconnect)==null||Fe.call(Ce),this.__ddcGridRO=z}t.querySelectorAll(".chip").forEach(z=>{z.addEventListener("click",()=>{var we,ue;t.querySelectorAll(".chip").forEach(me=>me.setAttribute("aria-pressed","false")),z.setAttribute("aria-pressed","true");let H=parseInt(z.dataset.w,10),Z=parseInt(z.dataset.h,10),oe=t.querySelector("#ddc-setting-sizeMode");oe.value="fixed_custom",(ue=(we=typeof y!="undefined"&&y)==null?void 0:we.dispatchEvent)==null||ue.call(we,new Event("change")),setTimeout(()=>{var He,Xe,Qe;(He=t.querySelector("#ddc-setting-custW"))==null||He.setAttribute("value",String(H)),(Qe=(Xe=t.querySelector("#ddc-setting-custW"))==null?void 0:Xe.dispatchEvent)==null||Qe.call(Xe,new Event("change"));let me=t.querySelector("#ddc-setting-custW");me&&(me.value=String(H));let Ne=t.querySelector("#ddc-setting-custH");Ne&&(Ne.value=String(Z))},0)})});let ti=["#ffffff","#f5f7fa","#ebeff5","#121212","#1f2937","#334155","#ff6b6b","#fcbf49","#ffe66d","#4ecdc4","#1a535c","#6b5b95","#f6f5f5","#00aaff","#ff00ff","#00ff00","var(--card-background-color)","var(--ha-card-background)","transparent","rgba(255,255,255,0.4)","rgba(0,0,0,0.3)","rgba(0,128,255,0.3)","rgba(255,0,128,0.3)","rgba(255,255,0,0.3)","rgba(0,255,128,0.3)"],Ot=(z,H,Z)=>{let oe=t.querySelector(z),we=t.querySelector(H),ue=t.querySelector(Z);!oe||!we||(oe.innerHTML="",ti.forEach((me,Ne)=>{let He=document.createElement("button");He.type="button",He.className="swatch",He.title=me,He.style.background=me.startsWith("var(")?getComputedStyle(this).getPropertyValue(me.slice(4,-1)).trim()||"#fff":me,He.setAttribute("aria-pressed","false"),He.addEventListener("click",()=>{oe.querySelectorAll(".swatch").forEach(Xe=>Xe.setAttribute("aria-pressed","false")),He.setAttribute("aria-pressed","true"),we.value=me,/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(me)&&ue&&(ue.value=me);try{we.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}catch{}}),oe.appendChild(He),String(we.value).trim()===me&&He.setAttribute("aria-pressed","true")}))};Ot("#ddc-swatches-containerBg","#ddc-setting-containerBg","#ddc-color-containerBg"),Ot("#ddc-swatches-cardBg","#ddc-setting-cardBg","#ddc-color-cardBg"),[["#ddc-color-containerBg","#ddc-setting-containerBg"],["#ddc-color-cardBg","#ddc-setting-cardBg"]].forEach(([z,H])=>{let Z=t.querySelector(z),oe=t.querySelector(H);if(!Z||!oe)return;let we=(String(oe.value||"").match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)||[])[0];we&&(Z.value=we),Z.addEventListener("input",()=>{oe.value=Z.value}),oe.addEventListener("change",()=>{let ue=(String(oe.value||"").match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)||[])[0];ue&&(Z.value=ue)})});let mt=t.querySelector("#ddc-setting-bgImg"),It=t.querySelector("#ddc-bg-thumb"),Mt=z=>{It&&(It.style.backgroundImage=z?`url(${z})`:"none")};mt!=null&&mt.value&&Mt(mt.value),mt==null||mt.addEventListener("input",()=>{let z=(mt.value||"").trim();Mt(z||"")}),(Ee=t.querySelector("#ddc-clear-bg"))==null||Ee.addEventListener("click",()=>{var Z,oe;mt&&(mt.value=""),Mt("");let{background_image:z,...H}=this._config||{};this._config=H,this.style.setProperty("--ddc-bg-image","none"),(Z=this._applyBackgroundFromConfig)==null||Z.call(this),(oe=this._persistThisCardConfigToStorage_)==null||oe.call(this)}),t.addEventListener("click",z=>{z.target===t&&(z.stopPropagation(),Le())});let ve=z=>{z.key==="Escape"&&(z.stopPropagation(),Le())};document.addEventListener("keydown",ve,{once:!0}),setTimeout(()=>{var z;return(z=t.querySelector("#ddc-setting-gridSize"))==null?void 0:z.focus()},0);try{let z=t.querySelector("#ddc-setting-sizeExtras"),H=()=>{var oe,we;if(!z)return;z.innerHTML="";let Z=(y==null?void 0:y.value)||"dynamic";if(Z==="fixed_custom"){let ue=document.createElement("label");ue.style.display="flex",ue.style.flexDirection="column",ue.style.fontSize=".95rem",ue.style.marginBottom="10px";let me=document.createElement("span");me.textContent="Custom width (px)",me.style.marginBottom="4px";let Ne=document.createElement("input");Ne.type="number",Ne.id="ddc-setting-custW",Ne.min="100",Ne.max="10000",Ne.step="10",Ne.style.padding="6px",Ne.style.border="1px solid var(--divider-color,rgba(0,0,0,.3))",Ne.style.borderRadius="6px",Ne.value=String((oe=this.containerFixedWidth)!=null?oe:800),ue.appendChild(me),ue.appendChild(Ne);let He=document.createElement("label");He.style.display="flex",He.style.flexDirection="column",He.style.fontSize=".95rem",He.style.marginBottom="10px";let Xe=document.createElement("span");Xe.textContent="Custom height (px)",Xe.style.marginBottom="4px";let Qe=document.createElement("input");Qe.type="number",Qe.id="ddc-setting-custH",Qe.min="100",Qe.max="10000",Qe.step="10",Qe.style.padding="6px",Qe.style.border="1px solid var(--divider-color,rgba(0,0,0,.3))",Qe.style.borderRadius="6px",Qe.value=String((we=this.containerFixedHeight)!=null?we:600),He.appendChild(Xe),He.appendChild(Qe),z.appendChild(ue),z.appendChild(He)}else if(Z==="preset"){let ue=document.createElement("label");ue.style.display="flex",ue.style.flexDirection="column",ue.style.fontSize=".95rem",ue.style.marginBottom="10px";let me=document.createElement("span");me.textContent="Preset size",me.style.marginBottom="4px";let Ne=document.createElement("select");Ne.id="ddc-setting-preset",Ne.style.padding="6px",Ne.style.border="1px solid var(--divider-color,rgba(0,0,0,.3))",Ne.style.borderRadius="6px",(typeof e!="undefined"&&e._sizePresets?e._sizePresets():[]).forEach(Xe=>{let Qe=document.createElement("option");Qe.value=Xe.key,Qe.textContent=`${Xe.label||Xe.key} (${Xe.w}\xD7${Xe.h})`,Ne.appendChild(Qe)}),Ne.value=String(this.containerPreset||"fhd"),ue.appendChild(me),ue.appendChild(Ne),z.appendChild(ue)}};H(),y==null||y.addEventListener("change",H)}catch(z){console.warn("[drag-and-drop-card] Failed to build container size extras",z)}let N=()=>{var H,Z,oe,we,ue;return((ue=(we=(Z=(H=this._config)==null?void 0:H.options)==null?void 0:Z.tabs)!=null?we:(oe=this._config)==null?void 0:oe.tabs)!=null?ue:[]).map(me=>{var Ne,He,Xe,Qe,Lt,Dt,Pt;return typeof me=="string"?{id:me,label:me,icon:"",label_mode:"both",__raw:{id:me,label:me}}:{id:(Xe=(He=(Ne=me.id)!=null?Ne:me.key)!=null?He:me.label)!=null?Xe:"tab",label:(Lt=(Qe=me.label)!=null?Qe:me.id)!=null?Lt:"Tab",icon:(Dt=me.icon)!=null?Dt:"",label_mode:(Pt=me.label_mode)!=null?Pt:"both",__raw:me}})},W=async(z,H)=>{var oe,we,ue;let Z=z.map(me=>({...me.__raw,id:me.id,label:me.label,icon:me.icon||"",label_mode:me.label_mode||"both"}));(oe=this._config)!=null&&oe.options?this._config.options={...this._config.options||{},tabs:Z,default_tab:H!=null?H:(we=this._config.options)==null?void 0:we.default_tab}:(this._config.tabs=Z,H&&(this._config.default_tab=H));try{await this._persistThisCardConfigToStorage_()}catch(me){console.warn("[drag-and-drop-card] Could not persist tabs",me)}(ue=this.requestUpdate)==null||ue.call(this)},he=()=>{var z,H,Z,oe;return((H=(z=this._config)==null?void 0:z.options)==null?void 0:H.default_tab)||((Z=this._config)==null?void 0:Z.default_tab)||((oe=N()[0])==null?void 0:oe.id)},xe=t.querySelector("#ddc-tabs-list"),de=()=>{let z=N(),H=he();if(xe.innerHTML="",!z.length){let Z=document.createElement("div");Z.className="hint",Z.textContent="No tabs yet. Add one below.",xe.appendChild(Z);return}z.forEach((Z,oe)=>{let we=document.createElement("div");we.className="tab-row";let ue=document.createElement("input");ue.type="radio",ue.name="ddc-default-tab",ue.value=Z.id,ue.checked=Z.id===H,ue.title="Set as default tab",ue.addEventListener("change",async()=>{await W(z,Z.id)});let me=document.createElement("div");me.className="tab-name";let Ne=document.createElement("ha-icon");Ne.setAttribute("icon",Z.icon||"mdi:tab");let He=document.createElement("input");He.value=Z.icon||"",He.placeholder="mdi:home",He.title="Tab icon (mdi:...)",He.style.width="160px",He.addEventListener("change",async()=>{Z.icon=He.value.trim(),Ne.setAttribute("icon",Z.icon||"mdi:tab"),z[oe]=Z,await W(z,H)});let Xe=document.createElement("input");Xe.value=Z.label,Xe.placeholder="Tab name",Xe.style.flex="1",Xe.addEventListener("change",async()=>{Z.label=Xe.value.trim()||Z.id,z[oe]=Z,await W(z,H)});let Qe=document.createElement("div");Qe.className="tab-icon-wrap",Qe.appendChild(Ne),Qe.appendChild(He),me.appendChild(Qe),me.appendChild(Xe);let Lt=document.createElement("div");Lt.className="mode-chips";let Dt=(qt,Ft)=>{let bt=document.createElement("button");return bt.type="button",bt.className="chip",bt.textContent=Ft,bt.setAttribute("aria-pressed",String((Z.label_mode||"both")===qt)),bt.addEventListener("click",async()=>{Lt.querySelectorAll(".chip").forEach(Kt=>Kt.setAttribute("aria-pressed","false")),bt.setAttribute("aria-pressed","true"),Z.label_mode=qt,z[oe]=Z,await W(z,H)}),bt};Lt.appendChild(Dt("icon","Icon")),Lt.appendChild(Dt("text","Text")),Lt.appendChild(Dt("both","Both"));let Pt=document.createElement("div");Pt.className="tab-actions";let wt=document.createElement("button");wt.className="icon-btn danger",wt.innerHTML='<ha-icon icon="mdi:trash-can-outline"></ha-icon>',wt.title="Delete tab",wt.addEventListener("click",async()=>{var bt,Kt;let qt=N().filter(ii=>ii.id!==Z.id),Ft=H;Z.id===H&&(Ft=(bt=qt[0])==null?void 0:bt.id),await W(qt,Ft);try{(Kt=this._reassignCardsToTab_)==null||Kt.call(this,Z.id,Ft)}catch{}de()}),Pt.appendChild(Lt),Pt.appendChild(wt),we.appendChild(ue),we.appendChild(me),we.appendChild(Pt),xe.appendChild(we)})};de(),(se=t.querySelector("#ddc-add-tab-btn"))==null||se.addEventListener("click",async()=>{let z=t.querySelector("#ddc-new-tab-name"),H=((z==null?void 0:z.value)||"").trim();if(!H)return;let Z=N(),oe=H.replace(/\s+/g,"-").toLowerCase(),we=2;for(;Z.some(ue=>ue.id===oe);)oe=`${oe}-${we++}`;Z.push({id:oe,label:H,icon:"",label_mode:"both",__raw:{id:oe,label:H}}),await W(Z,he()),z.value="",de()});let Te=t.querySelector("#ddc-clear-bg");Te&&Te.addEventListener("click",()=>{var Z,oe,we;let z=t.querySelector("#ddc-setting-bgImg"),H=t.querySelector("#ddc-bg-thumb");z&&(z.value=""),H&&(H.style.backgroundImage="none");try{if((Z=this._config)!=null&&Z.background_image){let{background_image:ue,...me}=this._config;this._config=me}(oe=this._applyBackgroundImageFromConfig)==null||oe.call(this),(we=this._persistThisCardConfigToStorage_)==null||we.call(this)}catch(ue){console.warn("[drag-and-drop-card] Failed to clear background image",ue)}});let j=["linear-gradient(135deg, #1e3a8a, #0ea5e9)","linear-gradient(135deg, #111827, #1f2937)","linear-gradient(135deg, #0f766e, #22c55e)","linear-gradient(135deg, #7c3aed, #06b6d4)","linear-gradient(135deg, #f97316, #f43f5e)","linear-gradient(135deg, #eab308, #22d3ee)","radial-gradient(circle at 30% 20%, #2dd4bf, #1e293b)","radial-gradient(circle at 70% 80%, #f59e0b, #7c3aed)"],ee=(z,H)=>{let Z=t.querySelector(z),oe=t.querySelector(H);!Z||!oe||(Z.innerHTML="",j.forEach(we=>{let ue=document.createElement("button");ue.type="button",ue.className="gradient",ue.style.background=we,ue.setAttribute("aria-pressed","false"),ue.title=we,ue.addEventListener("click",()=>{Z.querySelectorAll(".gradient").forEach(me=>me.setAttribute("aria-pressed","false")),ue.setAttribute("aria-pressed","true"),oe.value=we;try{String(H||"").toLowerCase().includes("cardbg")?(this.cardBackground=we,this.style.setProperty("--ddc-card-bg",we)):(this.containerBackground=we,this.style.setProperty("--ddc-bg",we))}catch{}}),Z.appendChild(ue),String(oe.value).trim()===we&&ue.setAttribute("aria-pressed","true")}))};ee("#ddc-gradients-containerBg","#ddc-setting-containerBg"),ee("#ddc-gradients-cardBg","#ddc-setting-cardBg"),T&&T.addEventListener("input",()=>{let z=(T.value||"").trim();try{this.containerBackground=z,this.style.setProperty("--ddc-bg",z)}catch{}}),R&&R.addEventListener("input",()=>{let z=(R.value||"").trim();try{this.cardBackground=z,this.style.setProperty("--ddc-card-bg",z)}catch{}});let Le=()=>{var z,H;try{(H=(z=this.__ddcGridRO)==null?void 0:z.disconnect)==null||H.call(z),this.__ddcGridRO=null}catch{}try{t.remove()}catch{}this.__settingsModal===t&&(this.__settingsModal=null)};(re=t.querySelector("#ddc-settings-close"))==null||re.addEventListener("click",z=>{z.stopPropagation(),Le()}),(Q=t.querySelector("#ddc-settings-cancel"))==null||Q.addEventListener("click",z=>{z.stopPropagation(),Le()}),(J=t.querySelector("#ddc-settings-save"))==null||J.addEventListener("click",z=>{var Gt,Hi,_i,xi,di,ji,Wi,wi,Yi,$i,Si,ki,Ki,ui,Ui;z.stopPropagation();let H=(y==null?void 0:y.value)||"dynamic",Z=H==="dynamic"&&!!(o!=null&&o.checked),oe=parseInt((c==null?void 0:c.value)||"0",10),we=!!(s!=null&&s.checked),ue=!!(l!=null&&l.checked),me=!!(u!=null&&u.checked),Ne=!!(f!=null&&f.checked),He=!!(v!=null&&v.checked),Xe=parseInt((m==null?void 0:m.value)||"0",10),Qe=(x==null?void 0:x.value)||"auto",Lt=!!(S!=null&&S.checked),Dt=((T==null?void 0:T.value)||"").trim(),Pt=((R==null?void 0:R.value)||"").trim(),wt=((O==null?void 0:O.value)||"").trim(),qt=!!(Y!=null&&Y.checked),Ft=((w==null?void 0:w.value)||"").trim(),bt=(V==null?void 0:V.value)||"none",Kt=((ge==null?void 0:ge.value)||"").trim(),ii=!!(ke!=null&&ke.checked),or=((ye==null?void 0:ye.value)||"").trim(),ci=parseInt((Ze==null?void 0:Ze.value)||"",10),Bi=parseInt(($e==null?void 0:$e.value)||"",10),Ni=!!(Ie!=null&&Ie.checked),qi=!!(Ke!=null&&Ke.checked),vi=(ot==null?void 0:ot.value)||"cover",sr=(st==null?void 0:st.value)||"center",li=dt?Math.max(0,Math.min(100,parseInt(dt.value||"100",10)))/100:1,Ut=(ne==null?void 0:ne.value)||"scroll",Vt=!!(C!=null&&C.checked),bi=!!(ie!=null&&ie.checked),ri=parseInt((F==null?void 0:F.value)||"1",10),Ht=(Number.isFinite(ri)?ri:1)*6e4;try{if(this.autoResizeCards=Z,!this.autoResizeCards&&this.__ddcResizeObs){try{this.__ddcResizeObs.disconnect()}catch{}this.__ddcResizeObs=null,this.__ddcOnWinResize&&(window.removeEventListener("resize",this.__ddcOnWinResize),this.__ddcOnWinResize=null)}if(this.autoResizeCards&&!this.__ddcResizeObs){this.__ddcResizeObs=new ResizeObserver(()=>{var nt;return(nt=this._applyAutoScale)==null?void 0:nt.call(this)});try{this.__ddcResizeObs.observe(this)}catch{}try{this.__ddcResizeObs.observe(this.cardContainer)}catch{}window.addEventListener("resize",this.__ddcOnWinResize=()=>{var nt;return(nt=this._applyAutoScale)==null?void 0:nt.call(this)})}this.autoResizeCards||String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(Gt=this._startScaleWatch)==null||Gt.call(this):(Hi=this._stopScaleWatch)==null||Hi.call(this),(_i=this._applyAutoScale)==null||_i.call(this),!isNaN(oe)&&oe>0&&oe!==this.gridSize&&(this.gridSize=oe,(xi=this._applyGridVars)==null||xi.call(this),(di=this._resizeContainer)==null||di.call(this)),this.cardShadowEnabled=Vt,this.cardShadowEnabled?this.style.setProperty("--ddc-card-shadow","0 8px 24px rgba(0,0,0,.35)"):this.style.removeProperty("--ddc-card-shadow"),this.editModePin=Ft,this._config={...this._config||{},edit_mode_pin:Ft};let pi=Ne!==this.dragLiveSnap;this.dragLiveSnap=Ne,pi&&((ji=this._initInteract)==null||ji.call(this)),this.autoSave=He,!isNaN(Xe)&&Xe>0&&(this.autoSaveDebounce=Xe);let cr=H!==this.containerSizeMode;this.containerSizeMode=H;let hi=Qe!==this.containerPresetOrient;if(this.containerPresetOrient=Qe,(cr||hi)&&((Wi=this._resizeContainer)==null||Wi.call(this)),H==="fixed_custom"){let nt=parseInt(((wi=t.querySelector("#ddc-setting-custW"))==null?void 0:wi.value)||"0",10),yt=parseInt(((Yi=t.querySelector("#ddc-setting-custH"))==null?void 0:Yi.value)||"0",10);!isNaN(nt)&&nt>0&&(this.containerFixedWidth=nt),!isNaN(yt)&&yt>0&&(this.containerFixedHeight=yt),($i=this._resizeContainer)==null||$i.call(this)}else if(H==="preset"){let nt=(Si=t.querySelector("#ddc-setting-preset"))==null?void 0:Si.value;nt&&(this.containerPreset=nt),(ki=this._resizeContainer)==null||ki.call(this)}if(this.disableOverlap=Lt,Dt&&(this.containerBackground=Dt,this.style.setProperty("--ddc-bg",this.containerBackground)),Pt&&(this.cardBackground=Pt,this.style.setProperty("--ddc-card-bg",this.cardBackground)),wt){let nt=this._config&&this._config.background_image||{};this._config={...this._config,background_image:{...nt,src:wt}}}else{let{background_image:nt,...yt}=this._config||{};this._config=yt}this.debug=qt,this.animateCards=we,this.hideHaHeader=ue,this.hideHaSidebar=me,(Ki=this._applyHaChromeVisibility_)==null||Ki.call(this);let Ci=this._config&&this._config.background_image||{},Ei=(P==null?void 0:P.value)||"no-repeat",Ai=(b==null?void 0:b.value)||"cover",Vi=(M==null?void 0:M.value)||"center center",Ti=(I==null?void 0:I.value)||"scroll",Oi=q?Math.max(0,Math.min(100,parseInt(q.value||"100",10)))/100:1;if(this._config=this._config||{},this._config.background_mode=bt,bt!=="image"&&!wt){let{background_image:nt,...yt}=this._config||{};this._config=yt}if(bt==="particles")this._config.background_particles={config_url:Kt||void 0,pointer_events:ii||void 0};else{let{background_particles:nt,...yt}=this._config||{};this._config=yt}if(bt==="youtube")this._config.background_youtube={url:or||void 0,start:Number.isFinite(ci)?ci:void 0,end:Number.isFinite(Bi)?Bi:void 0,mute:Ni!==!0?Ni:void 0,loop:qi!==!0?qi:void 0,size:vi&&vi!="cover"?vi:void 0,position:sr||void 0,attachment:Ut&&Ut!=="scroll"?Ut:void 0,opacity:li!=null&&li!==1?li:void 0};else{let{background_youtube:nt,...yt}=this._config||{};this._config=yt}if(this.screenSaverEnabled=bi,this.screenSaverDelay=Ht,(ui=this._updateScreensaverSettings)==null||ui.call(this),wt)this._config={...this._config,background_image:{...Ci,src:wt,repeat:Ei,size:Ai,position:Vi,attachment:Ti,opacity:Oi}};else if(Ci.src)this._config={...this._config,background_image:{...Ci,repeat:Ei,size:Ai,position:Vi,attachment:Ti,opacity:Oi}};else{let{background_image:nt,...yt}=this._config||{};this._config=yt}(Ui=this._applyBackgroundFromConfig)==null||Ui.call(this);try{this._config||(this._config={}),this._config.grid=this.gridSize,this._config.auto_resize_cards=!!this.autoResizeCards,this._config.drag_live_snap=!!this.dragLiveSnap,this._config.auto_save=!!this.autoSave,this._config.auto_save_debounce=this.autoSaveDebounce,this._config.container_size_mode=this.containerSizeMode,this._config.container_preset_orientation=this.containerPresetOrient,this._config.container_fixed_width=this.containerFixedWidth,this._config.container_fixed_height=this.containerFixedHeight,this._config.container_preset=this.containerPreset,this._config.disable_overlap=!!this.disableOverlap,this._config.container_background=this.containerBackground,this._config.card_background=this.cardBackground,this._config.card_shadow=!!this.cardShadowEnabled,this._config.debug=!!this.debug,this._config.animate_cards=!!this.animateCards,this._config.hide_HA_Header=!!this.hideHaHeader,this._config.hide_HA_Sidebar=!!this.hideHaSidebar,this._config.screen_saver_enabled=!!this.screenSaverEnabled,this._config.screen_saver_delay=this.screenSaverDelay}catch(nt){console.warn("[drag-and-drop-card] Failed to update config",nt)}this._persistThisCardConfigToStorage_().catch(nt=>{console.warn("[drag-and-drop-card] Storage save failed (is this a YAML dashboard?)",nt)})}catch(pi){console.warn("[drag-and-drop-card] Failed to apply settings",pi)}Le()})}_exportableOptions(){var s,l,u;let t=this._config||{},n=(f,v)=>Object.fromEntries(v.map(m=>[m,f==null?void 0:f[m]]).filter(([,m])=>m!==void 0)),o=t.background_mode||((s=t.background_image)!=null&&s.src?"image":t.background_youtube?"youtube":t.background_particles?"particles":"none"),c={storage_key:this.storageKey||void 0,grid:this.gridSize,drag_live_snap:!!this.dragLiveSnap,auto_save:!!this.autoSave,auto_save_debounce:this.autoSaveDebounce,disable_overlap:!!this.disableOverlap,debug:!!this.debug,edit_mode_pin:this.editModePin||void 0,container_size_mode:this.containerSizeMode,container_preset_orientation:this.containerPresetOrient,container_fixed_width:(l=this.containerFixedWidth)!=null?l:void 0,container_fixed_height:(u=this.containerFixedHeight)!=null?u:void 0,container_preset:this.containerPreset,auto_resize_cards:!!this.autoResizeCards,container_background:this.containerBackground,card_background:this.cardBackground,card_shadow:!!this.cardShadowEnabled,animate_cards:!!this.animateCards,hide_HA_Header:!!this.hideHaHeader,hide_HA_Sidebar:!!this.hideHaSidebar,tabs:this.tabs,tabs_position:this.tabsPosition,default_tab:this.defaultTab,hide_tabs_when_single:!!this.hideTabsWhenSingle,background_mode:o,background_image:t.background_image?n(t.background_image,["src","repeat","size","position","attachment","opacity"]):void 0,background_particles:t.background_particles?n(t.background_particles,["config_url","pointer_events"]):void 0,background_youtube:t.background_youtube?n(t.background_youtube,["url","start","end","mute","loop","size","position","attachment","opacity"]):void 0,screen_saver_enabled:!!this.screenSaverEnabled,screen_saver_delay:this.screenSaverDelay};return Object.keys(c).forEach(f=>c[f]===void 0&&delete c[f]),c}_applyImportedOptions(t={},n=!0){var o,c,s,l,u,f,v,m,y,x,S;if(t&&Object.prototype.hasOwnProperty.call(t,"storage_key")&&this._isInHaEditorPreview())try{let w={type:"custom:drag-and-drop-card",...this._config||{}};this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:w},bubbles:!0,composed:!0}))}catch{}if(this._config={...this._config||{},...t},"storage_key"in t&&(this.storageKey=t.storage_key||void 0),this._syncEditorsStorageKey(),"grid"in t&&(this.gridSize=Number(t.grid)||10),"drag_live_snap"in t&&(this.dragLiveSnap=!!t.drag_live_snap),"auto_save"in t&&(this.autoSave=!!t.auto_save),"auto_save_debounce"in t&&(this.autoSaveDebounce=Number(t.auto_save_debounce)||800),"container_background"in t&&(this.containerBackground=(o=t.container_background)!=null?o:"transparent"),"card_background"in t&&(this.cardBackground=(c=t.card_background)!=null?c:"var(--ha-card-background, var(--card-background-color))"),"card_shadow"in t&&(this.cardShadowEnabled=!!t.card_shadow),"debug"in t&&(this.debug=!!t.debug),"disable_overlap"in t&&(this.disableOverlap=!!t.disable_overlap),"container_size_mode"in t){this.containerSizeMode=t.container_size_mode||"dynamic";let w=String(this.containerSizeMode||"dynamic").toLowerCase();w==="dynamic"&&(this.autoResizeCards=!0),this.autoResizeCards||w==="auto"?(s=this._startScaleWatch)==null||s.call(this):(l=this._stopScaleWatch)==null||l.call(this),(u=this._applyAutoScale)==null||u.call(this)}if("container_fixed_width"in t&&(this.containerFixedWidth=Number(t.container_fixed_width)||null),"container_fixed_height"in t&&(this.containerFixedHeight=Number(t.container_fixed_height)||null),"container_preset"in t&&(this.containerPreset=t.container_preset||"fhd"),"container_preset_orientation"in t&&(this.containerPresetOrient=t.container_preset_orientation||"auto"),"auto_resize_cards"in t){let w=String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase();w==="dynamic"?this.autoResizeCards=!0:this.autoResizeCards=!!t.auto_resize_cards,this.autoResizeCards||w==="auto"?(f=this._startScaleWatch)==null||f.call(this):(v=this._stopScaleWatch)==null||v.call(this),(m=this._applyAutoScale)==null||m.call(this)}if("screen_saver_enabled"in t&&(this.screenSaverEnabled=!!t.screen_saver_enabled),"screen_saver_delay"in t){let w=Number(t.screen_saver_delay);this.screenSaverDelay=Number.isFinite(w)&&w>0?w:this.screenSaverDelay}("screen_saver_enabled"in t||"screen_saver_delay"in t)&&typeof this._updateScreensaverSettings=="function"&&this._updateScreensaverSettings(),this.style.setProperty("--ddc-bg",this.containerBackground),this.style.setProperty("--ddc-card-bg",this.cardBackground),this.cardShadowEnabled?this.style.setProperty("--ddc-card-shadow","0 8px 24px rgba(0,0,0,.35)"):this.style.removeProperty("--ddc-card-shadow"),this._applyGridVars(),n&&(this._applyContainerSizingFromConfig(!0),(y=this._applyAutoScale)==null||y.call(this),this._resizeContainer(),(x=this._updateStoreBadge)==null||x.call(this),(S=this._applyAutoScale)==null||S.call(this))}_exportDesign(){let n=Array.from(this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)")).map(u=>{let f=parseFloat(u.getAttribute("data-x"))||0,v=parseFloat(u.getAttribute("data-y"))||0,m=parseFloat(u.style.width)||u.getBoundingClientRect().width,y=parseFloat(u.style.height)||u.getBoundingClientRect().height,x=parseInt(u.style.zIndex||"1",10),S=this._extractCardConfig(u.firstElementChild),w=u.dataset.tabId||this.defaultTab;return{card:S,position:{x:f,y:v},size:{width:m,height:y},z:x,tabId:w}}),o={version:2,options:this._exportableOptions(),cards:n};this._config&&this._config.card_mod&&(o.options=o.options||{},o.options.card_mod=this._config.card_mod);let c=`DragAndDrop_Design_${this.storageKey||"layout"}.json`,s=new Blob([JSON.stringify(o,null,2)],{type:"application/json"}),l=document.createElement("a");l.href=URL.createObjectURL(s),l.download=c,l.click(),URL.revokeObjectURL(l.href),this._toast("Design exported.")}_importDesign(){let t=document.createElement("input");t.type="file",t.accept="application/json";let n=!0,o=!1,c=["grid","drag_live_snap","auto_save","auto_save_debounce","debug","disable_overlap","card_mod","storage_key","animate_cards","auto_resize_cards","container_background","card_background","container_size_mode","container_fixed_width","container_fixed_height","container_preset","container_preset_orientation","tabs","tabs_position","default_tab","hide_tabs_when_single","hide_HA_Header","hide_HA_Sidebar","background_mode","background_image","background_particles","background_youtube","screen_saver_enabled","screen_saver_delay"];t.onchange=async()=>{var u,f,v,m,y,x,S,w,T,R,C,O,P,b,M,I,q,K,Y,ie,F,U,V,ce,je,Pe,ge,ke,ye,Ze,$e,Ie,Ke,ot,st,ne,dt,ct,Me,ae,We,Se,Oe,ht,ft,Bt,lt,At,xt,Wt;let s=(u=t.files)==null?void 0:u[0];if(!s)return;let l=await s.text();try{let De=JSON.parse(l),gt=this.storageKey||((f=this._config)==null?void 0:f.storage_key)||null,Tt=!!(De.options&&Array.isArray(De.options.tabs)),ti=Array.isArray(De.cards)&&De.cards.some(ve=>(ve==null?void 0:ve.tabId)||(ve==null?void 0:ve.tab_id)),Ot=[];Tt?Ot=De.options.tabs:ti?Ot=Array.from(new Set(De.cards.map(N=>(N==null?void 0:N.tabId)||(N==null?void 0:N.tab_id)).filter(Boolean))).map(N=>({id:N,label:N})):Ot=[{id:"default",label:"Layout"}];let mt=((v=De.options)==null?void 0:v.tabs_position)==="left"?"left":this.tabsPosition||"top",It=((m=De.options)==null?void 0:m.default_tab)||((y=Ot[0])==null?void 0:y.id)||"default",Mt=((x=De.options)==null?void 0:x.hide_tabs_when_single)!==void 0?!!De.options.hide_tabs_when_single:!0;if(De.options){let ve={...De.options};if(o||delete ve.storage_key,n){let N=this._config||{type:"custom:drag-and-drop-card"};for(let W of c)W==="storage_key"&&!o||!(W in ve)&&W in N&&delete N[W];try{this.cardContainer&&(this.cardContainer.style.background="",this.cardContainer.style.width="",this.cardContainer.style.height=""),(w=(S=this.style)==null?void 0:S.removeProperty)==null||w.call(S,"--ddc-container-bg"),(R=(T=this.style)==null?void 0:T.removeProperty)==null||R.call(T,"--ddc-card-bg")}catch{}if(this._config={...N,...ve},"card_mod"in ve||delete this._config.card_mod,"animate_cards"in ve&&(this.animateCards=!!ve.animate_cards),"auto_resize_cards"in ve&&(this.autoResizeCards=!!ve.auto_resize_cards),"hide_HA_Header"in ve||"hide_HA_Sidebar"in ve)try{(C=this._applyHaChromeVisibility_)==null||C.call(this)}catch{}if("background_mode"in ve||"background_image"in ve||"background_particles"in ve||"background_youtube"in ve)try{(O=this._applyBackgroundFromConfig)==null||O.call(this)}catch{}if(o&&ve.storage_key&&(this.storageKey=ve.storage_key),this._opts){this._opts={...this._opts,...ve};for(let W of c)W in ve||delete this._opts[W]}(P=this._applyOptionsToDom)==null||P.call(this,this._config),(b=this.requestUpdate)==null||b.call(this)}else this._applyImportedOptions(ve,!0),ve.card_mod!==void 0&&(this._config=this._config||{},this._config.card_mod=ve.card_mod,(M=this.requestUpdate)==null||M.call(this))}else if(typeof De.grid=="number"){let ve={grid:De.grid};n?this._config={...this._config||{},...ve}:this._applyImportedOptions(ve,!0),(I=this.requestUpdate)==null||I.call(this)}(!Array.isArray(this.tabs)||!this.tabs.length)&&(this.tabs=Ot),this.tabsPosition||(this.tabsPosition=mt),this.defaultTab||(this.defaultTab=It),this.hideTabsWhenSingle===void 0&&(this.hideTabsWhenSingle=Mt),(Y=(K=(q=this.rootEl)==null?void 0:q.classList)==null?void 0:K.toggle)==null||Y.call(K,"ddc-tabs-left-layout",this.tabsPosition==="left");try{let ve=((ie=this._config)==null?void 0:ie.storage_key)||this.storageKey||null,N=(F=De.options)!=null?F:typeof De.grid=="number"?{grid:De.grid}:{},W={...N,tabs:(V=(U=N.tabs)!=null?U:this.tabs)!=null?V:[],tabs_position:(je=(ce=N.tabs_position)!=null?ce:this.tabsPosition)!=null?je:"top",default_tab:($e=(Pe=N.default_tab)!=null?Pe:this.defaultTab)!=null?$e:((ke=(ge=N.tabs)==null?void 0:ge[0])==null?void 0:ke.id)||((Ze=(ye=this.tabs)==null?void 0:ye[0])==null?void 0:Ze.id)||"default",hide_tabs_when_single:(Ke=N.hide_tabs_when_single)!=null?Ke:(Ie=this.hideTabsWhenSingle)!=null?Ie:!0};if(o||delete W.storage_key,!ve)console.warn("[ddc:import] No storage_key on this card; aborting YAML persist.");else{let he=await((ot=this._persistOptionsToYaml)==null?void 0:ot.call(this,W,{forceTargetKey:String(ve),noDownload:!0,replace:!0,wipeUnknownKeys:!0})),xe=!!(he&&he.yamlSaved);(st=console.debug)==null||st.call(console,"[ddc:import] YAML persist result:",xe)}try{let he={type:"custom:drag-and-drop-card",...this._config||{}};he.tabs=W.tabs,he.tabs_position=W.tabs_position,he.default_tab=W.default_tab,he.hide_tabs_when_single=!!W.hide_tabs_when_single,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:he},bubbles:!0,composed:!0}))}catch{}}catch(ve){console.warn("[ddc:import] YAML persist failed:",ve)}if(this.cardContainer.innerHTML="",Array.isArray(De.cards)&&De.cards.length)for(let ve of De.cards){let N=((ne=ve.position)==null?void 0:ne.x)||0,W=((dt=ve.position)==null?void 0:dt.y)||0,he=((ct=ve.size)==null?void 0:ct.width)||140,xe=((Me=ve.size)==null?void 0:Me.height)||100,de=ve.z,Te=this._normalizeTabId(ve.tabId||ve.tab_id||this.defaultTab);if(!(ve!=null&&ve.card)||typeof ve.card=="object"&&!Object.keys(ve.card).length){let Le=this._makePlaceholderAt(N,W,he,xe);Le.dataset.tabId=Te,this.cardContainer.appendChild(Le);continue}let j=await this._createCard(ve.card),ee=this._makeWrapper(j);ee.dataset.tabId=Te,this._setCardPosition(ee,N,W),ee.style.width=`${he}px`,ee.style.height=`${xe}px`,de!=null&&(ee.style.zIndex=String(de)),this.cardContainer.appendChild(ee);try{this._rebuildOnce(ee.firstElementChild)}catch{}this._initCardInteract(ee)}else this._showEmptyPlaceholder(),(ae=this._applyAutoScale)==null||ae.call(this);(We=this._applyOptionsToDom)==null||We.call(this,this._config),this._resizeContainer();try{(ht=(Oe=(Se=this.rootEl)==null?void 0:Se.classList)==null?void 0:Oe.toggle)==null||ht.call(Oe,"ddc-tabs-left-layout",this.tabsPosition==="left"),(ft=this._renderTabs)==null||ft.call(this),(Bt=this._applyActiveTab)==null||Bt.call(this)}catch{}try{this._saveTimer&&clearTimeout(this._saveTimer),await this._saveLayout(!0),(lt=this._toast)==null||lt.call(this,"Design imported & saved. Reloading..."),window.location.reload()}catch(ve){console.warn("[ddc:import] saveLayout failed",ve),(At=this._markDirty)==null||At.call(this,"import"),(xt=this._toast)==null||xt.call(this,"Design imported \u2014 click Apply to save.")}}catch(De){console.error("Import failed",De),(Wt=this._toast)==null||Wt.call(this,"Import failed \u2014 invalid file.")}},t.click()}_getLovelace(){var s,l;let t=0,n=this;for(;n&&t++<20;){let u=(s=n.getRootNode)==null?void 0:s.call(n),f=u==null?void 0:u.host;if((f==null?void 0:f.tagName)==="HUI-ROOT")return f.lovelace;n=f||n.parentElement}let o=new Set,c=[document];for(;c.length;){let u=c.shift();if(!(!u||o.has(u))){if(o.add(u),((l=u.host)==null?void 0:l.tagName)==="HUI-ROOT")return u.host.lovelace;if(u.tagName==="HUI-ROOT")return u.lovelace;if(u.shadowRoot&&c.push(u.shadowRoot),u.children)for(let f of u.children)c.push(f)}}}_scanDdcCards(t){let n=[],o=(s,l,u)=>{(u==null?void 0:u.type)==="custom:drag-and-drop-card"&&n.push({view:s,path:[...l],card:u})},c=(s,l,u)=>{if(s){if(Array.isArray(s)){s.forEach((f,v)=>c(f,l,u.concat(v)));return}if(typeof s=="object"){"type"in s&&o(l,u,s);for(let[f,v]of Object.entries(s))f==="views"&&Array.isArray(v)?v.forEach((m,y)=>c(m,y,["views",y])):(Array.isArray(v)||v&&typeof v=="object")&&c(v,l,u.concat(f))}}};return c(t,-1,[]),n}async _persistOptionsToYaml(t,{prevKey:n=null,patchAllInCurrentViewIfNoKey:o=!1}={}){var c,s,l,u,f,v,m,y,x;try{let S=this._getLovelace();if(!S)return console.debug("[ddc:import] persist: no lovelace root"),!1;if(typeof S.saveConfig!="function")return console.debug("[ddc:import] persist: dashboard not in Storage mode"),!1;let w=JSON.parse(JSON.stringify(S.config)),T=this._scanDdcCards(w),R=(c=S.current_view)!=null?c:0;console.debug("[ddc:import] persist: found DDC cards",T.map(M=>({view:M.view,path:M.path.join("."),storage_key:M.card.storage_key||null})));let C=(s=t==null?void 0:t.storage_key)!=null?s:null,O=[];n&&O.push(n),C&&O.push(C),this.storageKey&&O.push(this.storageKey),(l=this._config)!=null&&l.storage_key&&O.push(this._config.storage_key);let P=T.filter(M=>M.card.storage_key&&O.includes(M.card.storage_key));if(!P.length){let M=T.filter(I=>I.view===R);M.length===1&&(P=M)}if(!P.length&&T.length===1&&(P=T),!P.length)return console.debug("[ddc:import] persist: no target. Provide a unique storage_key on this card and import again.",{prevKey:n,newKey:C,storageKey:this.storageKey}),!1;let b={type:"custom:drag-and-drop-card",...t};"storage_key"in b&&delete b.storage_key,"storageKey"in b&&delete b.storageKey;for(let M of P){let I=w;for(let Y of M.path)I=I[Y];let q=(x=(y=(v=(u=I==null?void 0:I.storage_key)!=null?u:I==null?void 0:I.storageKey)!=null?v:(f=I==null?void 0:I.options)==null?void 0:f.storage_key)!=null?y:(m=I==null?void 0:I.options)==null?void 0:m.storageKey)!=null?x:null,K=!!(n&&C&&q===n&&C!==n);Object.assign(I,b),K?I.storage_key=String(C):q&&(I.storage_key=String(q)),"storageKey"in I&&delete I.storageKey}return console.debug("[ddc:import] persist \u2192 saving",{patched:P.length,keysTried:O,patch}),await S.saveConfig(w),!0}catch(S){return console.warn("[ddc:import] persist error",S),!1}}_queueSave(t="auto"){this._markDirty(t),this.autoSave&&(this._loading||this.editMode&&(this._dbgPush("autosave","Queued",{reason:t,debounce:this.autoSaveDebounce}),clearTimeout(this._saveTimer),this._saveTimer=setTimeout(()=>this._saveLayout(!0),this.autoSaveDebounce)))}async _saveLayout(t=!0){let o=Array.from(this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)")).map(s=>{let l=parseFloat(s.getAttribute("data-x"))||0,u=parseFloat(s.getAttribute("data-y"))||0,f=parseFloat(s.style.width)||s.getBoundingClientRect().width,v=parseFloat(s.style.height)||s.getBoundingClientRect().height,m=parseInt(s.style.zIndex||"1",10),y=this._extractCardConfig(s.firstElementChild),x=s.dataset.tabId||this.defaultTab;return{card:y,position:{x:l,y:u},size:{width:f,height:v},z:m,tabId:x}}),c={version:2,options:this._exportableOptions(),cards:o};try{localStorage.setItem(`ddc_local_${this.storageKey||"default"}`,JSON.stringify(c))}catch{}if(!this.storageKey){t||this._toast("Saved locally (no storage_key set)."),this.__dirty=!1,this._updateApplyBtn();return}try{await this._saveLayoutToBackend(this.storageKey,c),t||this._toast("Layout saved."),this.__dirty=!1,this._updateApplyBtn()}catch(s){console.error("Backend save failed",s),this._dbgPush("save","Backend save failed",{error:String(s)}),t||this._toast("Backend save failed \u2014 kept local copy.")}}async _probeBackend(){this._backendOK=!1;let t=performance.now();try{this._dbgPush("probe","GET /api/dragdrop_storage (list keys)");let n=await this.hass.callApi("get","dragdrop_storage"),o=Math.round(performance.now()-t);this._dbgPush("probe",`OK (${o} ms)`,n),this._backendOK=!!n}catch(n){let o=Math.round(performance.now()-t);this._dbgPush("probe",`FAILED (${o} ms)`,{error:String(n)}),this._backendOK=!1}this._updateStoreBadge()}async _loadLayoutFromBackend(t){let n=`dragdrop_storage/${encodeURIComponent(t)}`,o=performance.now();try{this._dbgPush("load",`GET /api/${n}`);let c=await this.hass.callApi("get",n),s=Math.round(performance.now()-o);return this._dbgPush("load",`OK (${s} ms)`,{bytes:JSON.stringify(c||"").length}),c}catch(c){let s=Math.round(performance.now()-o);return this._dbgPush("load",`FAILED (${s} ms)`,{error:String(c)}),null}}async _saveLayoutToBackend(t,n){let o=`dragdrop_storage/${encodeURIComponent(t)}`,c=JSON.stringify(n).length,s=performance.now();try{this._dbgPush("save",`POST /api/${o}`,{bytes:c});let l=await this.hass.callApi("post",o,n),u=Math.round(performance.now()-s);return this._dbgPush("save",`OK (${u} ms)`,l),l}catch(l){let u=Math.round(performance.now()-s);throw this._dbgPush("save",`FAILED (${u} ms)`,{error:String(l),bytes:c}),l}}async _saveOptionsToBackend(t,n){var o;try{let c=await this._loadLayoutFromBackend(t),s={version:2,...c||{},options:n||((o=this._exportableOptions)==null?void 0:o.call(this))||{}};return c&&Array.isArray(c.cards)&&(s.cards=c.cards),await this._saveLayoutToBackend(t,s),!0}catch(c){return console.warn("[ddc] saveOptionsToBackend failed",c),!1}}_updateStoreBadge(){let t=this.storeBadge;if(!t)return;let n=this._backendOK&&!!this.storageKey;t.textContent=n?"storage: backend - OK":"storage: local. Your Changes are NOT being SAVED. You need to download the Drag and Drop Card backend integration",t.style.background=n?"rgba(76,175,80,.15)":"rgba(255,193,7,.15)",t.style.borderColor=n?"rgba(76,175,80,.45)":"rgba(255,193,7,.45)"}_ensureScreenSaverStyles(){var t;if(!((t=this.shadowRoot)!=null&&t.querySelector("#ddc-screensaver-styles")))try{let n=document.createElement("style");n.id="ddc-screensaver-styles",n.textContent=`
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
    `,n.addEventListener("click",()=>this._deactivateScreenSaver()),n.addEventListener("keydown",()=>this._deactivateScreenSaver()),this.screenSaverOverlay=n,document.body.appendChild(n)}_attachScreensaverListeners(){if(this._screensaverActivityHandler)return;let t=()=>this._resetScreensaverTimer();this._screensaverActivityHandler=t,this._screensaverEvents=["mousemove","mousedown","click","keydown","wheel","scroll","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointercancel"],this._screensaverEvents.forEach(n=>{document.addEventListener(n,t,!0)})}_resetScreensaverTimer(){if(this._screensaverTimer&&(clearTimeout(this._screensaverTimer),this._screensaverTimer=null),!this._shouldUseScreensaver()){this.screensaverActive&&this._deactivateScreenSaver();return}this.screensaverActive&&this._deactivateScreenSaver();let t=Number(this.screenSaverDelay)||5*6e4;this._screensaverTimer=setTimeout(()=>{this._activateScreenSaver()},t)}_activateScreenSaver(){if(this._shouldUseScreensaver()&&(this._ensureScreenSaverOverlay(),!!this.screenSaverOverlay)){this.screensaverActive=!0,this.screenSaverOverlay.classList.add("active");try{this.tabsBar&&(this.__savedTabsDisplay=this.tabsBar.style.display,this.tabsBar.style.display="none")}catch{}this._updateScreenSaverClock(),this._clockInterval&&clearInterval(this._clockInterval),this._clockInterval=setInterval(()=>this._updateScreenSaverClock(),1e3)}}_deactivateScreenSaver(){if(this.screensaverActive){this.screensaverActive=!1,this.screenSaverOverlay&&this.screenSaverOverlay.classList.remove("active"),this._clockInterval&&(clearInterval(this._clockInterval),this._clockInterval=null);try{this.tabsBar&&(this.__savedTabsDisplay!=null?this.tabsBar.style.display=this.__savedTabsDisplay:this.tabsBar.style.display="")}catch{}this._resetScreensaverTimer()}}_updateScreenSaverClock(){let t=this.screenSaverOverlay,n=t==null?void 0:t.querySelector(".screensaver-clock"),o=t==null?void 0:t.querySelector(".screensaver-date"),c=new Date;n&&(n.textContent=c.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"})),o&&(o.textContent=c.toLocaleDateString([],{weekday:"long",year:"numeric",month:"long",day:"numeric"}));try{this._updateScreenSaverCalendar()}catch{}}_updateScreenSaverCalendar(){var S;let t=(S=this.screenSaverOverlay)==null?void 0:S.querySelector(".screensaver-calendar");if(!t)return;let n=new Date,o=void 0,c=n.getFullYear(),s=n.getMonth(),l=n.toLocaleDateString(o,{month:"long"}),u=[];for(let w=0;w<7;w++){let T=new Date(1970,0,4+w);u.push(T.toLocaleDateString(o,{weekday:"short"}))}let f=new Date(c,s,1).getDay(),v=new Date(c,s+1,0).getDate(),m=new Date(c,s,0).getDate(),y=[];for(let w=0;w<f;w++)y.push({day:m-(f-1)+w,other:!0});for(let w=1;w<=v;w++){let T=w===n.getDate();y.push({day:w,today:T,other:!1})}for(;y.length<42;){let w=y.length-f-v+1;y.push({day:w,other:!0})}let x="";x+=`<div class="calendar-header">${l} ${c}</div>`,x+='<div class="calendar-grid">';for(let w=0;w<7;w++)x+=`<div class="header">${u[w]}</div>`;y.forEach((w,T)=>{let R=[];w.other&&R.push("other-month"),w.today&&R.push("today");let C=T%7;(C===0||C===6)&&R.push("weekend"),x+=`<div class="${R.join(" ")}">${w.day}</div>`}),x+="</div>",t.innerHTML=x}_updateScreensaverSettings(){this.screenSaverEnabled?(this._ensureScreenSaverOverlay(),this._attachScreensaverListeners(),this._resetScreensaverTimer()):(this._screensaverTimer&&(clearTimeout(this._screensaverTimer),this._screensaverTimer=null),this.screensaverActive&&this._deactivateScreenSaver())}_shouldUseScreensaver(){try{if(!this.screenSaverEnabled||this.editMode||typeof this._isInHaEditorPreview=="function"&&this._isInHaEditorPreview()||!this.isConnected)return!1}catch{return!1}return!0}_toast(t){let n=new Event("hass-notification");n.detail={message:t},window.dispatchEvent(n)}_huiRoot(){var t,n,o,c,s,l;try{let u=document.querySelector("home-assistant"),f=(t=u==null?void 0:u.shadowRoot)==null?void 0:t.querySelector("home-assistant-main"),v=((n=f==null?void 0:f.shadowRoot)==null?void 0:n.querySelector("ha-drawer"))||f,m=((o=v==null?void 0:v.shadowRoot)==null?void 0:o.querySelector("partial-panel-resolver"))||v,y=((c=m==null?void 0:m.shadowRoot)==null?void 0:c.querySelector("ha-panel-lovelace"))||((s=v==null?void 0:v.shadowRoot)==null?void 0:s.querySelector("ha-panel-lovelace"));return((l=y==null?void 0:y.shadowRoot)==null?void 0:l.querySelector("hui-root"))||null}catch{return null}}getCardSize(){return 3}};if(!customElements.get("drag-and-drop-card")){if(Object.assign(ei.prototype,{_updateGridButtonsVisibility(){var o,c,s,l;let e=!!this.editMode,t=Number((l=(s=(o=this._config)==null?void 0:o.grid)!=null?s:(c=this._options)==null?void 0:c.grid)!=null?l:10)>=10,n=this.cardContainer;if(!e||!t){this._destroyGridCanvas(),n&&n.classList.toggle("grid-on",e);return}this._buildOrUpdateGridCanvas(),n&&n.classList.remove("grid-on")},_requestGridButtonsUpdateSoon(){clearTimeout(this._gridLayoutT),this._gridLayoutT=setTimeout(()=>this._updateGridButtonsVisibility(),50)},_buildOrUpdateGridCanvas(){var v,m,y,x;let e=this.cardContainer;if(!e||!e.isConnected)return;let p=Number((x=(y=(v=this._config)==null?void 0:v.grid)!=null?y:(m=this._options)==null?void 0:m.grid)!=null?x:10);if(this._gridCellSize=p,!this._gridCanvas){let S=document.createElement("canvas");S.className="ddc-grid-canvas",e.insertBefore(S,e.firstChild||null),this._gridCanvas=S,this._gridCtx=S.getContext("2d"),S.addEventListener("pointerdown",w=>this._onGridPointerDown(w),{passive:!0}),S.addEventListener("pointermove",w=>this._onGridPointerMove(w),{passive:!0}),S.addEventListener("pointerup",w=>this._onGridPointerUp(w),{passive:!0}),S.addEventListener("pointercancel",w=>this._onGridPointerCancel(w),{passive:!0}),S.addEventListener("lostpointercapture",w=>this._onGridPointerCancel(w),{passive:!0})}let t=e.getBoundingClientRect(),{sx:n,sy:o}=this._getContainerScale_(),c=n&&isFinite(n)?1/n:1,s=o&&isFinite(o)?1/o:1,l=t.width*c,u=t.height*s,f=Math.max(1,window.devicePixelRatio||1);this._gridCanvas.width=Math.max(1,Math.round(l*f)),this._gridCanvas.height=Math.max(1,Math.round(u*f)),this._gridCanvas.style.width=l+"px",this._gridCanvas.style.height=u+"px",this._gridCols=Math.max(1,Math.ceil(l/p)),this._gridRows=Math.max(1,Math.ceil(u/p)),this._buildGridTile_(p,f),this._markGridDirty()},_destroyGridCanvas(){var e;cancelAnimationFrame(this._gridRAF),this._gridRAF=0,(e=this._gridCanvas)!=null&&e.parentElement&&this._gridCanvas.parentElement.removeChild(this._gridCanvas),this._gridCanvas=null,this._gridCtx=null,this._gridTile=null,this._gridDown=!1,this._gridHoverCol=this._gridHoverRow=-1},_buildGridTile_(e,p){e=e/2;let t=Math.min(10,e*.25),n=Math.max(1,Math.round(e*p)),o=n,c=document.createElement("canvas");c.width=n,c.height=o;let s=c.getContext("2d");s.scale(p,p);let l=0,u=0,f=e,v=e;s.clearRect(0,0,n,o),s.beginPath();let m=Math.min(t,f/2,v/2);s.moveTo(l+m,u),s.arcTo(l+f,u,l+f,u+v,m),s.arcTo(l+f,u+v,l,u+v,m),s.arcTo(l,u+v,l,u,m),s.arcTo(l,u,l+f,u,m),s.closePath(),s.fillStyle="rgba(255,255,255,0.08)",s.fill(),s.strokeStyle="rgba(255,255,255,0.12)",s.lineWidth=1,s.stroke(),this._gridTile=c},_markGridDirty(){this._gridDirty||(this._gridDirty=!0,this._gridRAF=requestAnimationFrame(()=>{this._gridDirty=!1,this._renderGridCanvas_()}))},_renderGridCanvas_(){let e=this._gridCanvas;if(!e)return;let p=this._gridCtx,t=Math.max(1,window.devicePixelRatio||1),n=this._gridCellSize||10,o=this._canvasScale||1;if(p.clearRect(0,0,e.width,e.height),this._gridTile){let c=p.createPattern(this._gridTile,"repeat");p.save(),p.scale(t,t),p.fillStyle=c,p.fillRect(0,0,e.width/t,e.height/t),p.restore()}if(this._gridHoverCol>=0&&this._gridHoverRow>=0){p.save(),p.scale(t,t),p.fillStyle="rgba(0, 160, 255, 0.30)",p.strokeStyle="rgba(0, 160, 255, 0.60)",p.lineWidth=1;let c=this._gridHoverCol*n,s=this._gridHoverRow*n,l=n,u=n;this._roundRect_(p,c,s,l,u,Math.min(10,n*.25)),p.fill(),p.stroke(),p.restore()}if(this._gridDown&&this._gridStartCol>=0&&this._gridStartRow>=0&&this._gridCurrCol>=0&&this._gridCurrRow>=0){let c=Math.min(this._gridStartCol,this._gridCurrCol),s=Math.max(this._gridStartCol,this._gridCurrCol),l=Math.min(this._gridStartRow,this._gridCurrRow),u=Math.max(this._gridStartRow,this._gridCurrRow),f=c*n*o,v=l*n*o,m=(s-c+1)*n*o,y=(u-l+1)*n*o;p.save(),p.scale(t,t),p.fillStyle="rgba(0, 160, 255, 0.22)",p.strokeStyle="rgba(0, 160, 255, 0.45)",p.lineWidth=2,this._roundRect_(p,f,v,m,y,Math.min(12,n*.3)),p.fill(),p.stroke(),p.restore()}},_roundRect_(e,p,t,n,o,c){let s=Math.min(c,n/2,o/2);e.beginPath(),e.moveTo(p+s,t),e.arcTo(p+n,t,p+n,t+o,s),e.arcTo(p+n,t+o,p,t+o,s),e.arcTo(p,t+o,p,t,s),e.arcTo(p,t,p+n,t,s),e.closePath()},_emptySpaceAt_(e,p){let t=document.elementFromPoint(e,p);return!t||!t.closest||!t.closest(".card-wrapper, .resize-handle, .ddc-chip, .shield")},_locToCell_(e,p){let t=this._gridCanvas;if(!t)return{col:-1,row:-1};let n=t.getBoundingClientRect(),{sx:o,sy:c}=this._getContainerScale_(),s=(e-n.left)/(o||1),l=(p-n.top)/(c||1),u=this._gridCellSize||10,f=Math.min(this._gridCols-1,Math.max(0,Math.floor(s/u))),v=Math.min(this._gridRows-1,Math.max(0,Math.floor(l/u)));return{col:f,row:v}},_onGridPointerDown(e){var n,o;if(!this._emptySpaceAt_(e.clientX,e.clientY))return;let{col:p,row:t}=this._locToCell_(e.clientX,e.clientY);this._gridDown=!0,this._gridStartCol=p,this._gridStartRow=t,this._gridCurrCol=p,this._gridCurrRow=t,this._markGridDirty(),(o=(n=e.currentTarget).setPointerCapture)==null||o.call(n,e.pointerId)},_onGridPointerMove(e){let{col:p,row:t}=this._locToCell_(e.clientX,e.clientY);if((p!==this._gridHoverCol||t!==this._gridHoverRow)&&(this._gridHoverCol=p,this._gridHoverRow=t,this._markGridDirty()),!this._gridDown)return;let{col:n,row:o}=this._locToCell_(e.clientX,e.clientY);(n!==this._gridCurrCol||o!==this._gridCurrRow)&&(this._gridCurrCol=n,this._gridCurrRow=o,this._markGridDirty())},async _onGridPointerUp(e){if(!this._gridDown)return;this._gridDown=!1;let p=Math.min(this._gridStartCol,this._gridCurrCol),t=Math.max(this._gridStartCol,this._gridCurrCol),n=Math.min(this._gridStartRow,this._gridCurrRow),o=Math.max(this._gridStartRow,this._gridCurrRow);if((t-p+1)*(o-n+1)<2){this._markGridDirty();return}let s=this._gridCellSize||10,l=p*s,u=n*s,f=(t-p+1)*s,v=(o-n+1)*s;this._markGridDirty(),this._promptNewCardForRect_({x:l,y:u,w:f,h:v})},_onGridPointerCancel(){this._gridDown=!1,this._markGridDirty()},_installGridObservers_(){try{this.__gridRO&&this.__gridRO.disconnect(),this.__gridRO=new ResizeObserver(()=>this._requestGridButtonsUpdateSoon()),this.cardContainer&&this.__gridRO.observe(this.cardContainer)}catch{}clearInterval(this.__gridPollT),this.__gridPrevEditMode=void 0,this.__gridPollT=setInterval(()=>{let e=!!this.editMode;e!==this.__gridPrevEditMode&&(this.__gridPrevEditMode=e,this._updateGridButtonsVisibility())},300)},_uninstallGridObservers_(){var e,p;try{(p=(e=this.__gridRO)==null?void 0:e.disconnect)==null||p.call(e)}catch{}this.__gridRO=null,clearInterval(this.__gridPollT),this.__gridPollT=null},_gridRectToCardRect_({x:e,y:p,w:t,h:n}){let o=this.cardContainer,c=this._gridCanvas;if(!o||!c)return{x:e,y:p,w:t,h:n};let s=getComputedStyle(o),l=parseFloat(s.paddingLeft)||0,u=parseFloat(s.paddingTop)||0,f=parseFloat(s.borderLeftWidth)||0,v=parseFloat(s.borderTopWidth)||0,m=o.scrollLeft||0,y=o.scrollTop||0,x=e+l+f+m,S=p+u+v+y;return{x,y:S,w:t,h:n}},_getContainerScale_(){let e=this.cardContainer;if(!e)return{sx:1,sy:1};let p=getComputedStyle(e).transform;if(!p||p==="none")return{sx:1,sy:1};let t=p.match(/matrix\(([^)]+)\)/);if(t){let[o,,,c]=t[1].split(",").map(s=>parseFloat(s.trim()));return{sx:isFinite(o)&&o?o:1,sy:isFinite(c)&&c?c:1}}let n=p.match(/matrix3d\(([^)]+)\)/);if(n){let o=n[1].split(",").map(c=>parseFloat(c.trim()));return{sx:isFinite(o[0])&&o[0]?o[0]:1,sy:isFinite(o[5])&&o[5]?o[5]:1}}return{sx:1,sy:1}},_canvasRectToContainerRect_({x:e,y:p,w:t,h:n}){let o=this.cardContainer,c=this._gridCanvas;if(!o||!c)return{x:e,y:p,w:t,h:n};let s=getComputedStyle(o),l=parseFloat(s.paddingLeft)||0,u=parseFloat(s.paddingTop)||0,f=parseFloat(s.borderLeftWidth)||0,v=parseFloat(s.borderTopWidth)||0,{sx:m,sy:y}=this._getContainerScale_(),x=c.getBoundingClientRect(),S=o.getBoundingClientRect(),w=x.left+e,T=x.top+p,R=w-S.left,C=T-S.top;R-=l+f,C-=u+v;let O=m?1/m:1,P=y?1/y:1,b=R*O,M=C*P,I=t*O,q=n*P;return{x:b,y:M,w:I,h:q}},async _promptNewCardForRect_({x:e,y:p,w:t,h:n}){var o,c,s,l,u;try{let f=this._gridCellSize||Number((l=(s=(o=this._config)==null?void 0:o.grid)!=null?s:(c=this._options)==null?void 0:c.grid)!=null?l:10),v=R=>Math.round(R/f)*f,m=v(e),y=v(p),x=Math.max(f,v(t)),S=Math.max(f,v(n)),w;try{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&typeof this._canvasRectToContainerRect_=="function"?w=this._canvasRectToContainerRect_({x:m,y,w:x,h:S}):typeof this._gridRectToCardRect_=="function"?w=this._gridRectToCardRect_({x:m,y,w:x,h:S}):w={x:m,y,w:x,h:S}}catch{w={x:m,y,w:x,h:S}}let T={x:Math.round(w.x),y:Math.round(w.y),w:Math.round(w.w),h:Math.round(w.h)};try{let R=this.cardContainer;if(R){let C=Array.from(R.querySelectorAll(".card-wrapper:not(.ddc-placeholder)")),O=this._normalizeTabId(this.activeTab||this.defaultTab),P=(M,I)=>!(I.x>=M.x+M.w||I.x+I.w<=M.x||I.y>=M.y+M.h||I.y+I.h<=M.y),b=0;for(let M of C){if((M.dataset.tabId?this._normalizeTabId(M.dataset.tabId):O)!==O)continue;let q=getComputedStyle(M);if(q.display==="none"||q.visibility==="hidden")continue;let K=parseFloat(M.getAttribute("data-x"))||0,Y=parseFloat(M.getAttribute("data-y"))||0,ie=parseFloat(M.style.width)||M.getBoundingClientRect().width,F=parseFloat(M.style.height)||M.getBoundingClientRect().height;if(P(T,{x:K,y:Y,w:ie,h:F})&&(b++,b>=2))break}if(b>=2){this.__pendingAddRect=null;try{(u=this._toast)==null||u.call(this,"Area already contains multiple cards.")}catch{}return}}}catch(R){console.warn("[ddc] selection-area card count check failed",R)}this.__pendingAddRect=T,await this._openSmartPicker("add",null,null)}catch(f){console.warn("[ddc] _promptNewCardForRect_ failed",f)}}}),!ei.prototype.__addPickedPatched){let e=ei.prototype._addPickedCardToLayout;ei.prototype._addPickedCardToLayout=async function(p){var t,n,o,c,s,l,u,f,v;if(this&&this.__pendingAddRect){let{x:m,y,w:x,h:S}=this.__pendingAddRect;this.__pendingAddRect=null;try{(t=this._hideEmptyPlaceholder)==null||t.call(this)}catch{}let w=await this._createCard(p),T=this._makeWrapper(w),C=String(this.containerSizeMode||this.container_size_mode||((n=this._config)==null?void 0:n.container_size_mode)||"dynamic").toLowerCase()==="auto",O=C?-11:11,P=C?-11:11,b=Math.round(m)-O,M=Math.round(y)-P;this._setCardPosition(T,b,M),T.style.width=`${Math.round(x)}px`,T.style.height=`${Math.round(S)}px`;{let I=this._highestZ()+1;T.style.zIndex=String(Math.max(I,6))}T.dataset.tabId=this._normalizeTabId(this.activeTab||this.defaultTab),this.cardContainer.appendChild(T);try{(o=this._rebuildOnce)==null||o.call(this,T.firstElementChild)}catch{}try{(c=this._initCardInteract)==null||c.call(this,T)}catch{}try{(s=this._resizeContainer)==null||s.call(this)}catch{}try{(l=this._queueSave)==null||l.call(this,"add")}catch{}try{(u=this._toast)==null||u.call(this,"Card added to selection.")}catch{}try{(f=this._syncEmptyStateUI)==null||f.call(this)}catch{}try{(v=this._applyVisibility_)==null||v.call(this)}catch{}requestAnimationFrame(()=>{var I,q,K,Y;try{String(this.containerSizeMode||this.container_size_mode||((I=this._config)==null?void 0:I.container_size_mode)||"dynamic").toLowerCase()==="auto"?(q=this._applyAutoFillNoScale)==null||q.call(this):this.autoResizeCards&&((K=this._applyAutoScale)==null||K.call(this)),(Y=this._requestGridButtonsUpdateSoon)==null||Y.call(this)}catch{}});return}return await e.call(this,p)},ei.prototype.__addPickedPatched=!0}customElements.define("drag-and-drop-card",ei);try{Array.isArray(window.customCards)||(window.customCards=[]),window.customCards.some(p=>p&&typeof p.type=="string"&&p.type.toLowerCase()==="custom:drag-and-drop-card")||window.customCards.push({type:"drag-and-drop-card",name:"Drag & Drop Card",description:"Flexible grid layout card with drag\u2011and\u2011drop editing.",preview:!1,icon:"mdi:cursor-move"})}catch(e){console.warn("[drag-and-drop-card] Failed to register card in customCards",e)}}(()=>{let e=new WeakSet,p=s=>{try{if(!(s instanceof Element))return!1;let l=s.localName||"";return l?!!(l==="ha-card"||l.endsWith("-card")):!1}catch{return!1}},t=s=>{try{if(!s||e.has(s))return;e.add(s),s.dispatchEvent(new Event("ll-rebuild",{bubbles:!0,composed:!0}))}catch{}},n=s=>{var l,u;try{if(!s)return;s instanceof Element&&p(s)&&t(s);let f=(u=(l=(s instanceof ShadowRoot,s)).querySelectorAll)==null?void 0:u.call(l,"*");if(!f)return;for(let v of f){p(v)&&t(v);let m=v.shadowRoot;if(m)try{n(m)}catch{}}}catch{}},o=s=>{try{if(!s||s.__ddcCardModIntegrated)return;s.__ddcCardModIntegrated=!0;let l=s.shadowRoot||s;n(l);let u=new MutationObserver(f=>{for(let v of f)if(!(!v.addedNodes||!v.addedNodes.length))for(let m of v.addedNodes)(m instanceof Element||m instanceof ShadowRoot)&&n(m)});u.observe(l,{childList:!0,subtree:!0}),s.__ddcCardModIntegratedObserver=u,setTimeout(()=>{try{n(l)}catch{}},250),setTimeout(()=>{try{n(l)}catch{}},1e3)}catch{}},c=()=>{try{document.querySelectorAll("drag-and-drop-card").forEach(o)}catch{}};if(window.customElements&&window.customElements.whenDefined)window.customElements.whenDefined("drag-and-drop-card").then(()=>{c();let s=window.customElements.get("drag-and-drop-card");if(s&&s.prototype){let u=s.prototype.connectedCallback;s.prototype.connectedCallback=function(){try{u&&u.call(this)}finally{o(this)}}}new MutationObserver(()=>c()).observe(document.documentElement,{childList:!0,subtree:!0})});else{let s=setInterval(c,1e3);setTimeout(()=>clearInterval(s),1e4)}})();(function(){let e="drag-and-drop-card",p=customElements.get(e);if(!p){console.warn("[ddc:augment] Could not find custom element",e);return}function t(){var w,T;try{let R=0,C=this;for(;C&&R++<20;){let b=(w=C.getRootNode)==null?void 0:w.call(C),M=b==null?void 0:b.host;if((M==null?void 0:M.tagName)==="HUI-ROOT")return M.lovelace;C=M||C.parentElement}let O=new Set,P=[document];for(;P.length;){let b=P.shift();if(!(!b||O.has(b))){if(O.add(b),((T=b.host)==null?void 0:T.tagName)==="HUI-ROOT")return b.host.lovelace;if(b.tagName==="HUI-ROOT")return b.lovelace;if(b.shadowRoot&&P.push(b.shadowRoot),b.children)for(let M of b.children)P.push(M)}}}catch{}}function n(w){let T=[],R=(O,P,b)=>{(b==null?void 0:b.type)==="custom:drag-and-drop-card"&&T.push({view:O,path:[...P],card:b})},C=(O,P,b)=>{if(O){if(Array.isArray(O)){O.forEach((M,I)=>C(M,P,b.concat(I)));return}if(typeof O=="object"){"type"in O&&R(P,b,O);for(let[M,I]of Object.entries(O))M==="views"&&Array.isArray(I)?I.forEach((q,K)=>C(q,K,["views",K])):(Array.isArray(I)||I&&typeof I=="object")&&C(I,P,b.concat(M))}}};return C(w,-1,[]),T}function o(w,T,R){let C=new Date().toISOString().replace(/[:.]/g,"-"),O=T.map(b=>{let M=w;for(let I of b.path)M=M[I];return{view:b.view,path:b.path,storage_key:M&&M.storage_key||null,before:M,patch:R}}),P={kind:"ddc-import-backup",created_at:C,count:O.length,items:O};try{let b=`ddc.backup.${C}`;localStorage.setItem(b,JSON.stringify(P));let M=Object.keys(localStorage).filter(I=>I.startsWith("ddc.backup.")).sort().reverse();for(let I of M.slice(10))localStorage.removeItem(I)}catch{}return{name:`ddc_backup_${C}.json`,data:P}}function c(w,T){try{let R=new Blob([JSON.stringify(T,null,2)],{type:"application/json"}),C=URL.createObjectURL(R),O=document.createElement("a");O.href=C,O.download=w,document.body.appendChild(O),O.click(),O.remove(),setTimeout(()=>URL.revokeObjectURL(C),1500)}catch(R){console.warn("[ddc:backup] download failed",R)}}function s(w){if(w)try{let T="ddc.recent.keys",R=JSON.parse(localStorage.getItem(T)||"[]");R.includes(w)||R.unshift(w),localStorage.setItem(T,JSON.stringify(R.slice(0,20)))}catch{}}function l(){try{return JSON.parse(localStorage.getItem("ddc.recent.keys")||"[]")}catch{return[]}}function u(){var T,R;let w=new Set;try{let C=Object.keys(localStorage).filter(O=>O.startsWith("ddc.backup.")).sort().reverse();for(let O of C)try{let P=JSON.parse(localStorage.getItem(O)||"null");if(P&&P.items)for(let b of P.items){let M=((T=b==null?void 0:b.before)==null?void 0:T.storage_key)||((R=b==null?void 0:b.patch)==null?void 0:R.storage_key);M&&w.add(M)}}catch{}}catch{}return Array.from(w)}async function f(w,{forceTargetKey:T=null,onlyThisCard:R=!1,prevKey:C,noDownload:O}={}){var ce,je,Pe,ge,ke;let P=((ce=this._getLovelace)==null?void 0:ce.call(this))||t.call(this);if(!P)return console.debug("[ddc:import] persist: no lovelace root"),!1;if(typeof P.saveConfig!="function")return console.debug("[ddc:import] persist: dashboard not in Storage mode"),!1;let b=ye=>typeof ye=="string"?ye.trim():null,M=b(T)||b((je=this==null?void 0:this._config)==null?void 0:je.storage_key)||b(this==null?void 0:this.storageKey)||b(C);if(!M)return console.warn("[ddc:import] persist: missing target storage_key on this card; aborting"),!1;let I=JSON.parse(JSON.stringify(P.config)),q=(this._scanDdcCards||n)(I);console.debug("[ddc:import] persist: found DDC cards",q.map(ye=>({view:ye.view,path:ye.path.join("."),storage_key:ye.card&&(ye.card.storage_key||ye.card.storageKey)||null})));let K=q.filter(ye=>{var $e,Ie,Ke,ot,st,ne,dt,ct,Me;return((Me=(ne=(Ke=b(($e=ye.card)==null?void 0:$e.storage_key))!=null?Ke:b((Ie=ye.card)==null?void 0:Ie.storageKey))!=null?ne:b((st=(ot=ye.card)==null?void 0:ot.options)==null?void 0:st.storage_key))!=null?Me:b((ct=(dt=ye.card)==null?void 0:dt.options)==null?void 0:ct.storageKey))===M});if(K.length!==1)return console.warn("[ddc:import] persist: expected exactly one target with key, got",K.length,{myKey:M}),!1;let Y={type:"custom:drag-and-drop-card",...w||{}};"storage_key"in Y&&delete Y.storage_key,"storageKey"in Y&&delete Y.storageKey,Y!=null&&Y.options&&("storage_key"in Y.options&&delete Y.options.storage_key,"storageKey"in Y.options&&delete Y.options.storageKey);let ie=Array.isArray(Y.cards)?Y.cards:null;delete Y.cards;try{let ye=o==null?void 0:o(P.config,K,Y);ye&&(console.debug("[ddc:import] backup created",{file:ye.name,items:(Pe=ye.data)==null?void 0:Pe.count}),!O&&typeof c=="function"&&c(ye.name,ye.data))}catch(ye){console.debug("[ddc:import] backup skipped/error:",(ye==null?void 0:ye.message)||ye)}let F=K[0],U=I;for(let ye of F.path)U=U[ye];let V=(ke=(ge=b(U==null?void 0:U.storage_key))!=null?ge:b(U==null?void 0:U.storageKey))!=null?ke:null;return Object.assign(U,Y),V?U.storage_key=V:U.storage_key=M,"storageKey"in U&&delete U.storageKey,console.debug("[ddc:import] persist \u2192 saving",{patched:1,into_key:U.storage_key,ignored_file_key:b(w==null?void 0:w.storage_key)||b(w==null?void 0:w.storageKey)||null}),await P.saveConfig(I),{yamlSaved:!0,cardsForStorage:ie}}async function v(){var R;let w=C=>{if(!C)return[];if(Array.isArray(C))return C;if(Array.isArray(C==null?void 0:C.keys))return C.keys;if(Array.isArray(C==null?void 0:C.dashboards))return C.dashboards;if(Array.isArray(C==null?void 0:C.entries))return C.entries.map(O=>O.key||O.id||O.name).filter(Boolean);if(Array.isArray(C==null?void 0:C.items))return C.items.map(O=>O.key||O.id||O.name).filter(Boolean);if(typeof C=="object"){for(let O of Object.values(C))if(Array.isArray(O)&&O.every(P=>typeof P=="string"))return O}return[]};try{if((R=this==null?void 0:this.hass)!=null&&R.callApi){let C=await this.hass.callApi("get","dragdrop_storage"),O=w(C);if(O.length)return O}}catch(C){console.debug("[ddc:switcher] hass.callApi dragdrop_storage failed",C)}let T=["/api/dragdrop_storage","/api/dragdrop_storage/keys","/api/dragdrop_storage/list","/api/dragdrop_storage?all=1"];for(let C of T)try{let P=await(await fetch(C,{cache:"no-store"})).json(),b=w(P);if(b.length)return b}catch{}return[]}async function m(w){let T=P=>{if(!P)return null;if(P.options||P.cards)return P;if(typeof P.design=="object")return P.design;if(typeof P.payload=="object")return P.payload;try{if(typeof P=="string")return JSON.parse(P)}catch{}return null},R=async(P,b,M)=>{var I;try{if((I=this==null?void 0:this.hass)!=null&&I.callApi){let q=await this.hass.callApi(P,b,M),K=T(q);if(K)return K}}catch{}return null},C=async P=>{try{let b=await fetch(P,{cache:"no-store"}),M=b.headers.get("content-type")||"";if(M.includes("application/json")||M.includes("text/plain")){let I=await b.json().catch(()=>null)||await b.text().catch(()=>null),q=T(I);if(q)return q}}catch{}return null},O=encodeURIComponent(w);return await(R("get",`dragdrop_storage/${O}`)||C(`/api/dragdrop_storage/${O}`)||C(`/api/dragdrop_storage?key=${O}`)||R("post","dragdrop_storage/get",{key:w})||null)}async function y(w,{source:T="switcher",newKey:R=null}={}){var P,b,M,I,q,K,Y,ie,F,U,V,ce,je,Pe,ge,ke,ye,Ze,$e,Ie,Ke,ot,st,ne,dt,ct;if(!w||typeof w!="object")throw new Error("Invalid design payload");let C=this.storageKey||((P=this._config)==null?void 0:P.storage_key)||null;try{(b=this._dbgInit)==null||b.call(this),(M=this._dbgPush)==null||M.call(this,"import","Begin import (programmatic)",{source:T,newKey:R})}catch{}if(w.options){let{storage_key:Me,...ae}=w.options;(I=this._applyImportedOptions)==null||I.call(this,ae,!0)}else typeof w.grid=="number"&&((q=this._applyImportedOptions)==null||q.call(this,{grid:w.grid},!0));let O=R||((K=w==null?void 0:w.options)==null?void 0:K.storage_key)||C;if(O){this.storageKey=O,this._config={...this._config||{},storage_key:O};try{(Y=this._syncEditorsStorageKey)==null||Y.call(this)}catch{}}try{let Me=(ie=w.options)!=null?ie:typeof w.grid=="number"?{grid:w.grid}:{};await((F=this._persistOptionsToYaml)==null?void 0:F.call(this,{...Me,storage_key:O},{prevKey:C,noDownload:T==="switcher"}))}catch(Me){console.warn("[ddc:apply] persist failed",Me)}try{if(this.cardContainer.innerHTML="",Array.isArray(w.cards)&&w.cards.length)for(let Me of w.cards)if(!(Me!=null&&Me.card)||typeof Me.card=="object"&&Object.keys(Me.card).length===0){let ae=(Pe=this._makePlaceholderAt)==null?void 0:Pe.call(this,((U=Me.position)==null?void 0:U.x)||0,((V=Me.position)==null?void 0:V.y)||0,((ce=Me.size)==null?void 0:ce.width)||200,((je=Me.size)==null?void 0:je.height)||200);ae&&this.cardContainer.appendChild(ae)}else{let ae=await this._createCard(Me.card),We=this._makeWrapper(ae);(ye=this._setCardPosition)==null||ye.call(this,We,((ge=Me.position)==null?void 0:ge.x)||0,((ke=Me.position)==null?void 0:ke.y)||0),We.style.width=`${((Ze=Me.size)==null?void 0:Ze.width)||140}px`,We.style.height=`${(($e=Me.size)==null?void 0:$e.height)||100}px`,Me.z!=null&&(We.style.zIndex=String(Me.z)),this.cardContainer.appendChild(We);try{(Ie=this._rebuildOnce)==null||Ie.call(this,We.firstElementChild)}catch{}(Ke=this._initCardInteract)==null||Ke.call(this,We)}else(ot=this._showEmptyPlaceholder)==null||ot.call(this);(st=this._resizeContainer)==null||st.call(this),(ne=this._markDirty)==null||ne.call(this,"import"),(dt=this._toast)==null||dt.call(this,T==="switcher"?`Loaded layout "${O}"`:"Design imported")}catch(Me){console.error("[ddc:apply] rebuild failed",Me),(ct=this._toast)==null||ct.call(this,"Import failed during rebuild.")}}function x(){var w,T;try{let R=this.shadowRoot||this.renderRoot||this,C=R.querySelector(".ddc-switcher-inline");if(!C)return;let O=((w=this._getLovelace)==null?void 0:w.call(this))||t.call(this),P=!1;try{let b=(T=R.getRootNode&&R.getRootNode())==null?void 0:T.host;P=!!(O&&(O.editMode===!0||b&&b.editMode===!0))}catch{}C.style.display=P?"inline-flex":"none"}catch{}}function S(){try{if(this._ddcSwitcherInstalled)return;let T=(this.shadowRoot||this.renderRoot||this).querySelector(".toolbar");if(!T)return;let R=document.createElement("div");R.className="ddc-switcher-inline",Object.assign(R.style,{display:"inline-flex",gap:"6px",alignItems:"center",marginLeft:"auto"});let C=document.createElement("span");C.textContent="Layout:",C.style.fontSize="12px",C.style.opacity="0.8";let O=document.createElement("select");Object.assign(O.style,{fontSize:"12px",padding:"4px 6px",borderRadius:"8px",border:"1px solid var(--divider-color, #999)",background:"var(--card-background-color, #fff)"}),O.title="Select stored layout (storage_key)",O.id="ddcKeySelect";let P=document.createElement("button");P.className="btn secondary",P.type="button",P.style.padding="6px 10px",P.innerHTML='<ha-icon icon="mdi:refresh"></ha-icon><span style="margin-left:6px">Refresh</span>',R.appendChild(C),R.appendChild(O),R.appendChild(P),T.appendChild(R),this._ddcSwitcherInstalled=!0;let b=async()=>{let M=this.storageKey||this._config&&this._config.storage_key||"",I=await v.call(this),q=u(),K=l(),Y=ce=>Array.from(new Set(ce.filter(Boolean))),ie=Y(I),F=Y(q),U=Y(K);if(O.innerHTML="",M&&!ie.includes(M)&&!F.includes(M)&&!U.includes(M)){let ce=document.createElement("option");ce.value=M,ce.textContent=`${M} (current)`,ce.selected=!0,O.appendChild(ce)}let V=(ce,je)=>{if(!je.length)return;let Pe=document.createElement("optgroup");Pe.label=ce,je.forEach(ge=>{let ke=document.createElement("option");ke.value=ge,ke.textContent=ge,ge===M&&(ke.selected=!0),Pe.appendChild(ke)}),O.appendChild(Pe)};if(V("Server",ie),V("Backups",F),V("Recent",U),!O.children.length){let ce=document.createElement("option");ce.value="",ce.textContent="\u2014 none \u2014",ce.selected=!0,O.appendChild(ce)}x.call(this)};b(),P.addEventListener("click",b),O.addEventListener("change",async M=>{var q,K,Y,ie,F,U,V,ce;let I=String(M.target.value||"");if(I&&!this._ddcLoadingFromKey){this._ddcLoadingFromKey=!0;try{let je=await m.call(this,I);if(!je){(q=this._toast)==null||q.call(this,`No layout found for "${I}"`);return}await y.call(this,je,{source:"switcher",newKey:I}),(K=this._resizeContainer)==null||K.call(this),(Y=this._toast)==null||Y.call(this,`Loaded layout "${I}"`);let Pe=String(((ie=this._config)==null?void 0:ie.storage_key)||this.storageKey||""),ge=!1;try{let ke=Pe?{forceTargetKey:Pe,noDownload:!0}:{noDownload:!0};ge=await this._persistOptionsToYaml({storage_key:I},ke)}catch(ke){console.warn("[ddc:switcher] failed to persist storage_key to YAML",ke),(F=this._toast)==null||F.call(this,"Failed to persist selected layout. Keeping current.");return}if(this.storageKey=I,this._config&&(this._config.storage_key=I),!ge){console.warn("[ddc:switcher] persist returned false (likely YAML mode). Skipping reload.");return}try{this._saveTimer&&clearTimeout(this._saveTimer),await this._saveLayout(!0)}catch(ke){console.warn("[ddc:switcher] saveLayout failed",ke),(U=this._markDirty)==null||U.call(this,"switcher"),(V=this._toast)==null||V.call(this,"Layout loaded \u2014 click Apply to save.");return}window.location.reload(),window.location.reload()}catch(je){console.warn("[ddc:switcher] load/apply failed",je),(ce=this._toast)==null||ce.call(this,"Failed to load layout.")}finally{this._ddcLoadingFromKey=!1}}}),this._ddcVisTimer&&clearInterval(this._ddcVisTimer),this._ddcVisTimer=setInterval(()=>x.call(this),800),x.call(this)}catch(w){console.warn("[ddc:switcher] inline install failed",w)}}p.prototype._getLovelace||(p.prototype._getLovelace=t),p.prototype._scanDdcCards||(p.prototype._scanDdcCards=n),p.prototype._persistOptionsToYaml=f,p.prototype._applyDesignObject||(p.prototype._applyDesignObject=y);try{let w=Object.getOwnPropertyDescriptor(p.prototype,"hass");if(w&&(w.set||w.get)){let T=w.set;Object.defineProperty(p.prototype,"hass",{configurable:!0,enumerable:!0,set(R){T&&T.call(this,R);try{S.call(this)}catch{}},get:w.get||function(){return this._hass}})}else if(typeof p.prototype.setHass=="function"){let T=p.prototype.setHass;p.prototype.setHass=function(R){T&&T.call(this,R);try{S.call(this)}catch{}}}else{let T=p.prototype.updated||p.prototype.firstUpdated;p.prototype.updated=function(...R){T&&T.apply(this,R);try{S.call(this)}catch{}}}}catch(w){console.warn("[ddc:switcher] wrap hass setter failed",w)}})();
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
