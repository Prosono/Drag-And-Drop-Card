var Ma=Object.create;var bn=Object.defineProperty;var La=Object.getOwnPropertyDescriptor;var Pa=Object.getOwnPropertyNames;var Ra=Object.getPrototypeOf,Ia=Object.prototype.hasOwnProperty;var Da=(e,p,t)=>p in e?bn(e,p,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[p]=t;var Fa=(e,p)=>()=>(p||e((p={exports:{}}).exports,p),p.exports);var Ba=(e,p,t,r)=>{if(p&&typeof p=="object"||typeof p=="function")for(let o of Pa(p))!Ia.call(e,o)&&o!==t&&bn(e,o,{get:()=>p[o],enumerable:!(r=La(p,o))||r.enumerable});return e};var Na=(e,p,t)=>(t=e!=null?Ma(Ra(e)):{},Ba(p||!e||!e.__esModule?bn(t,"default",{value:e,enumerable:!0}):t,e));var pt=(e,p,t)=>Da(e,typeof p!="symbol"?p+"":p,t);var Kn=Fa((_n,ci)=>{(function(e,p){typeof _n=="object"&&typeof ci!="undefined"?ci.exports=p():typeof define=="function"&&define.amd?define(p):(e=typeof globalThis!="undefined"?globalThis:e||self).interact=p()})(_n,(function(){"use strict";function e(n,i){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(n);i&&(d=d.filter((function(h){return Object.getOwnPropertyDescriptor(n,h).enumerable}))),a.push.apply(a,d)}return a}function p(n){for(var i=1;i<arguments.length;i++){var a=arguments[i]!=null?arguments[i]:{};i%2?e(Object(a),!0).forEach((function(d){s(n,d,a[d])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):e(Object(a)).forEach((function(d){Object.defineProperty(n,d,Object.getOwnPropertyDescriptor(a,d))}))}return n}function t(n){return t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},t(n)}function r(n,i){if(!(n instanceof i))throw new TypeError("Cannot call a class as a function")}function o(n,i){for(var a=0;a<i.length;a++){var d=i[a];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(n,w(d.key),d)}}function c(n,i,a){return i&&o(n.prototype,i),a&&o(n,a),Object.defineProperty(n,"prototype",{writable:!1}),n}function s(n,i,a){return(i=w(i))in n?Object.defineProperty(n,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[i]=a,n}function l(n,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(i&&i.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),i&&f(n,i)}function u(n){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},u(n)}function f(n,i){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,d){return a.__proto__=d,a},f(n,i)}function v(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function m(n){var i=(function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch{return!1}})();return function(){var a,d=u(n);if(i){var h=u(this).constructor;a=Reflect.construct(d,arguments,h)}else a=d.apply(this,arguments);return(function(g,x){if(x&&(typeof x=="object"||typeof x=="function"))return x;if(x!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return v(g)})(this,a)}}function y(){return y=typeof Reflect!="undefined"&&Reflect.get?Reflect.get.bind():function(n,i,a){var d=(function(g,x){for(;!Object.prototype.hasOwnProperty.call(g,x)&&(g=u(g))!==null;);return g})(n,i);if(d){var h=Object.getOwnPropertyDescriptor(d,i);return h.get?h.get.call(arguments.length<3?n:a):h.value}},y.apply(this,arguments)}function w(n){var i=(function(a,d){if(typeof a!="object"||a===null)return a;var h=a[Symbol.toPrimitive];if(h!==void 0){var g=h.call(a,d||"default");if(typeof g!="object")return g;throw new TypeError("@@toPrimitive must return a primitive value.")}return(d==="string"?String:Number)(a)})(n,"string");return typeof i=="symbol"?i:i+""}var S=function(n){return!(!n||!n.Window)&&n instanceof n.Window},_=void 0,T=void 0;function R(n){_=n;var i=n.document.createTextNode("");i.ownerDocument!==n.document&&typeof n.wrap=="function"&&n.wrap(i)===i&&(n=n.wrap(n)),T=n}function C(n){return S(n)?n:(n.ownerDocument||n).defaultView||T.window}typeof window!="undefined"&&window&&R(window);var O=function(n){return!!n&&t(n)==="object"},z=function(n){return typeof n=="function"},b={window:function(n){return n===T||S(n)},docFrag:function(n){return O(n)&&n.nodeType===11},object:O,func:z,number:function(n){return typeof n=="number"},bool:function(n){return typeof n=="boolean"},string:function(n){return typeof n=="string"},element:function(n){if(!n||t(n)!=="object")return!1;var i=C(n)||T;return/object|function/.test(typeof Element=="undefined"?"undefined":t(Element))?n instanceof Element||n instanceof i.Element:n.nodeType===1&&typeof n.nodeName=="string"},plainObject:function(n){return O(n)&&!!n.constructor&&/function Object\b/.test(n.constructor.toString())},array:function(n){return O(n)&&n.length!==void 0&&z(n.splice)}};function M(n){var i=n.interaction;if(i.prepared.name==="drag"){var a=i.prepared.axis;a==="x"?(i.coords.cur.page.y=i.coords.start.page.y,i.coords.cur.client.y=i.coords.start.client.y,i.coords.velocity.client.y=0,i.coords.velocity.page.y=0):a==="y"&&(i.coords.cur.page.x=i.coords.start.page.x,i.coords.cur.client.x=i.coords.start.client.x,i.coords.velocity.client.x=0,i.coords.velocity.page.x=0)}}function I(n){var i=n.iEvent,a=n.interaction;if(a.prepared.name==="drag"){var d=a.prepared.axis;if(d==="x"||d==="y"){var h=d==="x"?"y":"x";i.page[h]=a.coords.start.page[h],i.client[h]=a.coords.start.client[h],i.delta[h]=0}}}var F={id:"actions/drag",install:function(n){var i=n.actions,a=n.Interactable,d=n.defaults;a.prototype.draggable=F.draggable,i.map.drag=F,i.methodDict.drag="draggable",d.actions.drag=F.defaults},listeners:{"interactions:before-action-move":M,"interactions:action-resume":M,"interactions:action-move":I,"auto-start:check":function(n){var i=n.interaction,a=n.interactable,d=n.buttons,h=a.options.drag;if(h&&h.enabled&&(!i.pointerIsDown||!/mouse|pointer/.test(i.pointerType)||(d&a.options.drag.mouseButtons)!=0))return n.action={name:"drag",axis:h.lockAxis==="start"?h.startAxis:h.lockAxis},!1}},draggable:function(n){return b.object(n)?(this.options.drag.enabled=n.enabled!==!1,this.setPerAction("drag",n),this.setOnEvents("drag",n),/^(xy|x|y|start)$/.test(n.lockAxis)&&(this.options.drag.lockAxis=n.lockAxis),/^(xy|x|y)$/.test(n.startAxis)&&(this.options.drag.startAxis=n.startAxis),this):b.bool(n)?(this.options.drag.enabled=n,this):this.options.drag},beforeMove:M,move:I,defaults:{startAxis:"xy",lockAxis:"xy"},getCursor:function(){return"move"},filterEventType:function(n){return n.search("drag")===0}},N=F,H={init:function(n){var i=n;H.document=i.document,H.DocumentFragment=i.DocumentFragment||Q,H.SVGElement=i.SVGElement||Q,H.SVGSVGElement=i.SVGSVGElement||Q,H.SVGElementInstance=i.SVGElementInstance||Q,H.Element=i.Element||Q,H.HTMLElement=i.HTMLElement||H.Element,H.Event=i.Event,H.Touch=i.Touch||Q,H.PointerEvent=i.PointerEvent||i.MSPointerEvent},document:null,DocumentFragment:null,SVGElement:null,SVGSVGElement:null,SVGElementInstance:null,Element:null,HTMLElement:null,Event:null,Touch:null,PointerEvent:null};function Q(){}var B=H,V={init:function(n){var i=B.Element,a=n.navigator||{};V.supportsTouch="ontouchstart"in n||b.func(n.DocumentTouch)&&B.document instanceof n.DocumentTouch,V.supportsPointerEvent=a.pointerEnabled!==!1&&!!B.PointerEvent,V.isIOS=/iP(hone|od|ad)/.test(a.platform),V.isIOS7=/iP(hone|od|ad)/.test(a.platform)&&/OS 7[^\d]/.test(a.appVersion),V.isIe9=/MSIE 9/.test(a.userAgent),V.isOperaMobile=a.appName==="Opera"&&V.supportsTouch&&/Presto/.test(a.userAgent),V.prefixedMatchesSelector="matches"in i.prototype?"matches":"webkitMatchesSelector"in i.prototype?"webkitMatchesSelector":"mozMatchesSelector"in i.prototype?"mozMatchesSelector":"oMatchesSelector"in i.prototype?"oMatchesSelector":"msMatchesSelector",V.pEventTypes=V.supportsPointerEvent?B.PointerEvent===n.MSPointerEvent?{up:"MSPointerUp",down:"MSPointerDown",over:"mouseover",out:"mouseout",move:"MSPointerMove",cancel:"MSPointerCancel"}:{up:"pointerup",down:"pointerdown",over:"pointerover",out:"pointerout",move:"pointermove",cancel:"pointercancel"}:null,V.wheelEvent=B.document&&"onmousewheel"in B.document?"mousewheel":"wheel"},supportsTouch:null,supportsPointerEvent:null,isIOS7:null,isIOS:null,isIe9:null,isOperaMobile:null,prefixedMatchesSelector:null,pEventTypes:null,wheelEvent:null},$=V;function le(n,i){if(n.contains)return n.contains(i);for(;i;){if(i===n)return!0;i=i.parentNode}return!1}function _e(n,i){for(;b.element(n);){if(ge(n,i))return n;n=Re(n)}return null}function Re(n){var i=n.parentNode;if(b.docFrag(i)){for(;(i=i.host)&&b.docFrag(i););return i}return i}function ge(n,i){return T!==_&&(i=i.replace(/\/deep\//g," ")),n[$.prefixedMatchesSelector](i)}var fe=function(n){return n.parentNode||n.host};function he(n,i){for(var a,d=[],h=n;(a=fe(h))&&h!==i&&a!==h.ownerDocument;)d.unshift(h),h=a;return d}function He(n,i,a){for(;b.element(n);){if(ge(n,i))return!0;if((n=Re(n))===a)return ge(n,i)}return!1}function Ye(n){return n.correspondingUseElement||n}function Oe(n){var i=n instanceof B.SVGElement?n.getBoundingClientRect():n.getClientRects()[0];return i&&{left:i.left,right:i.right,top:i.top,bottom:i.bottom,width:i.width||i.right-i.left,height:i.height||i.bottom-i.top}}function Ue(n){var i,a=Oe(n);if(!$.isIOS7&&a){var d={x:(i=(i=C(n))||T).scrollX||i.document.documentElement.scrollLeft,y:i.scrollY||i.document.documentElement.scrollTop};a.left+=d.x,a.right+=d.x,a.top+=d.y,a.bottom+=d.y}return a}function ot(n){for(var i=[];n;)i.push(n),n=Re(n);return i}function st(n){return!!b.string(n)&&(B.document.querySelector(n),!0)}function re(n,i){for(var a in i)n[a]=i[a];return n}function ut(n,i,a){return n==="parent"?Re(a):n==="self"?i.getRect(a):_e(a,n)}function ct(n,i,a,d){var h=n;return b.string(h)?h=ut(h,i,a):b.func(h)&&(h=h.apply(void 0,d)),b.element(h)&&(h=Ue(h)),h}function Ie(n){return n&&{x:"x"in n?n.x:n.left,y:"y"in n?n.y:n.top}}function ae(n){return!n||"x"in n&&"y"in n||((n=re({},n)).x=n.left||0,n.y=n.top||0,n.width=n.width||(n.right||0)-n.x,n.height=n.height||(n.bottom||0)-n.y),n}function $e(n,i,a){n.left&&(i.left+=a.x),n.right&&(i.right+=a.x),n.top&&(i.top+=a.y),n.bottom&&(i.bottom+=a.y),i.width=i.right-i.left,i.height=i.bottom-i.top}function Ce(n,i,a){var d=a&&n.options[a];return Ie(ct(d&&d.origin||n.options.origin,n,i,[n&&i]))||{x:0,y:0}}function Le(n,i){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(E){return!0},d=arguments.length>3?arguments[3]:void 0;if(d=d||{},b.string(n)&&n.search(" ")!==-1&&(n=ft(n)),b.array(n))return n.forEach((function(E){return Le(E,i,a,d)})),d;if(b.object(n)&&(i=n,n=""),b.func(i)&&a(n))d[n]=d[n]||[],d[n].push(i);else if(b.array(i))for(var h=0,g=i;h<g.length;h++){var x=g[h];Le(n,x,a,d)}else if(b.object(i))for(var k in i)Le(ft(k).map((function(E){return"".concat(n).concat(E)})),i[k],a,d);return d}function ft(n){return n.trim().split(/ +/)}var gt=function(n,i){return Math.sqrt(n*n+i*i)},Bt=["webkit","moz"];function lt(n,i){n.__set||(n.__set={});var a=function(h){if(Bt.some((function(g){return h.indexOf(g)===0})))return 1;typeof n[h]!="function"&&h!=="__set"&&Object.defineProperty(n,h,{get:function(){return h in n.__set?n.__set[h]:n.__set[h]=i[h]},set:function(g){n.__set[h]=g},configurable:!0})};for(var d in i)a(d);return n}function At(n,i){n.page=n.page||{},n.page.x=i.page.x,n.page.y=i.page.y,n.client=n.client||{},n.client.x=i.client.x,n.client.y=i.client.y,n.timeStamp=i.timeStamp}function xt(n){n.page.x=0,n.page.y=0,n.client.x=0,n.client.y=0}function Wt(n){return n instanceof B.Event||n instanceof B.Touch}function Fe(n,i,a){return n=n||"page",(a=a||{}).x=i[n+"X"],a.y=i[n+"Y"],a}function mt(n,i){return i=i||{x:0,y:0},$.isOperaMobile&&Wt(n)?(Fe("screen",n,i),i.x+=window.scrollX,i.y+=window.scrollY):Fe("page",n,i),i}function Tt(n){return b.number(n.pointerId)?n.pointerId:n.identifier}function ii(n,i,a){var d=i.length>1?yt(i):i[0];mt(d,n.page),(function(h,g){g=g||{},$.isOperaMobile&&Wt(h)?Fe("screen",h,g):Fe("client",h,g)})(d,n.client),n.timeStamp=a}function Ot(n){var i=[];return b.array(n)?(i[0]=n[0],i[1]=n[1]):n.type==="touchend"?n.touches.length===1?(i[0]=n.touches[0],i[1]=n.changedTouches[0]):n.touches.length===0&&(i[0]=n.changedTouches[0],i[1]=n.changedTouches[1]):(i[0]=n.touches[0],i[1]=n.touches[1]),i}function yt(n){for(var i={pageX:0,pageY:0,clientX:0,clientY:0,screenX:0,screenY:0},a=0;a<n.length;a++){var d=n[a];for(var h in i)i[h]+=d[h]}for(var g in i)i[g]/=n.length;return i}function It(n){if(!n.length)return null;var i=Ot(n),a=Math.min(i[0].pageX,i[1].pageX),d=Math.min(i[0].pageY,i[1].pageY),h=Math.max(i[0].pageX,i[1].pageX),g=Math.max(i[0].pageY,i[1].pageY);return{x:a,y:d,left:a,top:d,right:h,bottom:g,width:h-a,height:g-d}}function Mt(n,i){var a=i+"X",d=i+"Y",h=Ot(n),g=h[0][a]-h[1][a],x=h[0][d]-h[1][d];return gt(g,x)}function me(n,i){var a=i+"X",d=i+"Y",h=Ot(n),g=h[1][a]-h[0][a],x=h[1][d]-h[0][d];return 180*Math.atan2(x,g)/Math.PI}function j(n){return b.string(n.pointerType)?n.pointerType:b.number(n.pointerType)?[void 0,void 0,"touch","pen","mouse"][n.pointerType]:/touch/.test(n.type||"")||n instanceof B.Touch?"touch":"mouse"}function K(n){var i=b.func(n.composedPath)?n.composedPath():n.path;return[Ye(i?i[0]:n.target),Ye(n.currentTarget)]}var ye=(function(){function n(i){r(this,n),this.immediatePropagationStopped=!1,this.propagationStopped=!1,this._interaction=i}return c(n,[{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}]),n})();Object.defineProperty(ye.prototype,"interaction",{get:function(){return this._interaction._proxy},set:function(){}});var Se=function(n,i){for(var a=0;a<i.length;a++){var d=i[a];n.push(d)}return n},de=function(n){return Se([],n)},ze=function(n,i){for(var a=0;a<n.length;a++)if(i(n[a],a,n))return a;return-1},Y=function(n,i){return n[ze(n,i)]},Z=(function(n){l(a,n);var i=m(a);function a(d,h,g){var x;r(this,a),(x=i.call(this,h._interaction)).dropzone=void 0,x.dragEvent=void 0,x.relatedTarget=void 0,x.draggable=void 0,x.propagationStopped=!1,x.immediatePropagationStopped=!1;var k=g==="dragleave"?d.prev:d.cur,E=k.element,P=k.dropzone;return x.type=g,x.target=E,x.currentTarget=E,x.dropzone=P,x.dragEvent=h,x.relatedTarget=h.target,x.draggable=h.interactable,x.timeStamp=h.timeStamp,x}return c(a,[{key:"reject",value:function(){var d=this,h=this._interaction.dropState;if(this.type==="dropactivate"||this.dropzone&&h.cur.dropzone===this.dropzone&&h.cur.element===this.target)if(h.prev.dropzone=this.dropzone,h.prev.element=this.target,h.rejected=!0,h.events.enter=null,this.stopImmediatePropagation(),this.type==="dropactivate"){var g=h.activeDrops,x=ze(g,(function(E){var P=E.dropzone,A=E.element;return P===d.dropzone&&A===d.target}));h.activeDrops.splice(x,1);var k=new a(h,this.dragEvent,"dropdeactivate");k.dropzone=this.dropzone,k.target=this.target,this.dropzone.fire(k)}else this.dropzone.fire(new a(h,this.dragEvent,"dragleave"))}},{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}]),a})(ye);function Me(n,i){for(var a=0,d=n.slice();a<d.length;a++){var h=d[a],g=h.dropzone,x=h.element;i.dropzone=g,i.target=x,g.fire(i),i.propagationStopped=i.immediatePropagationStopped=!1}}function U(n,i){for(var a=(function(g,x){for(var k=[],E=0,P=g.interactables.list;E<P.length;E++){var A=P[E];if(A.options.drop.enabled){var D=A.options.drop.accept;if(!(b.element(D)&&D!==x||b.string(D)&&!ge(x,D)||b.func(D)&&!D({dropzone:A,draggableElement:x})))for(var q=0,X=A.getAllElements();q<X.length;q++){var G=X[q];G!==x&&k.push({dropzone:A,element:G,rect:A.getRect(G)})}}}return k})(n,i),d=0;d<a.length;d++){var h=a[d];h.rect=h.dropzone.getRect(h.element)}return a}function Qe(n,i,a){for(var d=n.dropState,h=n.interactable,g=n.element,x=[],k=0,E=d.activeDrops;k<E.length;k++){var P=E[k],A=P.dropzone,D=P.element,q=P.rect,X=A.dropCheck(i,a,h,g,D,q);x.push(X?D:null)}var G=(function(ie){for(var pe,ce,xe,De=[],Ke=0;Ke<ie.length;Ke++){var Te=ie[Ke],Ne=ie[pe];if(Te&&Ke!==pe)if(Ne){var Ct=fe(Te),at=fe(Ne);if(Ct!==Te.ownerDocument)if(at!==Te.ownerDocument)if(Ct!==at){De=De.length?De:he(Ne);var Rt=void 0;if(Ne instanceof B.HTMLElement&&Te instanceof B.SVGElement&&!(Te instanceof B.SVGSVGElement)){if(Te===at)continue;Rt=Te.ownerSVGElement}else Rt=Te;for(var Nt=he(Rt,Ne.ownerDocument),Yt=0;Nt[Yt]&&Nt[Yt]===De[Yt];)Yt++;var an=[Nt[Yt-1],Nt[Yt],De[Yt]];if(an[0])for(var Ii=an[0].lastChild;Ii;){if(Ii===an[1]){pe=Ke,De=Nt;break}if(Ii===an[2])break;Ii=Ii.previousSibling}}else xe=Ne,(parseInt(C(ce=Te).getComputedStyle(ce).zIndex,10)||0)>=(parseInt(C(xe).getComputedStyle(xe).zIndex,10)||0)&&(pe=Ke);else pe=Ke}else pe=Ke}return pe})(x);return d.activeDrops[G]||null}function Ve(n,i,a){var d=n.dropState,h={enter:null,leave:null,activate:null,deactivate:null,move:null,drop:null};return a.type==="dragstart"&&(h.activate=new Z(d,a,"dropactivate"),h.activate.target=null,h.activate.dropzone=null),a.type==="dragend"&&(h.deactivate=new Z(d,a,"dropdeactivate"),h.deactivate.target=null,h.deactivate.dropzone=null),d.rejected||(d.cur.element!==d.prev.element&&(d.prev.dropzone&&(h.leave=new Z(d,a,"dragleave"),a.dragLeave=h.leave.target=d.prev.element,a.prevDropzone=h.leave.dropzone=d.prev.dropzone),d.cur.dropzone&&(h.enter=new Z(d,a,"dragenter"),a.dragEnter=d.cur.element,a.dropzone=d.cur.dropzone)),a.type==="dragend"&&d.cur.dropzone&&(h.drop=new Z(d,a,"drop"),a.dropzone=d.cur.dropzone,a.relatedTarget=d.cur.element),a.type==="dragmove"&&d.cur.dropzone&&(h.move=new Z(d,a,"dropmove"),a.dropzone=d.cur.dropzone)),h}function nt(n,i){var a=n.dropState,d=a.activeDrops,h=a.cur,g=a.prev;i.leave&&g.dropzone.fire(i.leave),i.enter&&h.dropzone.fire(i.enter),i.move&&h.dropzone.fire(i.move),i.drop&&h.dropzone.fire(i.drop),i.deactivate&&Me(d,i.deactivate),a.prev.dropzone=h.dropzone,a.prev.element=h.element}function je(n,i){var a=n.interaction,d=n.iEvent,h=n.event;if(d.type==="dragmove"||d.type==="dragend"){var g=a.dropState;i.dynamicDrop&&(g.activeDrops=U(i,a.element));var x=d,k=Qe(a,x,h);g.rejected=g.rejected&&!!k&&k.dropzone===g.cur.dropzone&&k.element===g.cur.element,g.cur.dropzone=k&&k.dropzone,g.cur.element=k&&k.element,g.events=Ve(a,0,x)}}var rt={id:"actions/drop",install:function(n){var i=n.actions,a=n.interactStatic,d=n.Interactable,h=n.defaults;n.usePlugin(N),d.prototype.dropzone=function(g){return(function(x,k){if(b.object(k)){if(x.options.drop.enabled=k.enabled!==!1,k.listeners){var E=Le(k.listeners),P=Object.keys(E).reduce((function(D,q){return D[/^(enter|leave)/.test(q)?"drag".concat(q):/^(activate|deactivate|move)/.test(q)?"drop".concat(q):q]=E[q],D}),{}),A=x.options.drop.listeners;A&&x.off(A),x.on(P),x.options.drop.listeners=P}return b.func(k.ondrop)&&x.on("drop",k.ondrop),b.func(k.ondropactivate)&&x.on("dropactivate",k.ondropactivate),b.func(k.ondropdeactivate)&&x.on("dropdeactivate",k.ondropdeactivate),b.func(k.ondragenter)&&x.on("dragenter",k.ondragenter),b.func(k.ondragleave)&&x.on("dragleave",k.ondragleave),b.func(k.ondropmove)&&x.on("dropmove",k.ondropmove),/^(pointer|center)$/.test(k.overlap)?x.options.drop.overlap=k.overlap:b.number(k.overlap)&&(x.options.drop.overlap=Math.max(Math.min(1,k.overlap),0)),"accept"in k&&(x.options.drop.accept=k.accept),"checker"in k&&(x.options.drop.checker=k.checker),x}return b.bool(k)?(x.options.drop.enabled=k,x):x.options.drop})(this,g)},d.prototype.dropCheck=function(g,x,k,E,P,A){return(function(D,q,X,G,ie,pe,ce){var xe=!1;if(!(ce=ce||D.getRect(pe)))return!!D.options.drop.checker&&D.options.drop.checker(q,X,xe,D,pe,G,ie);var De=D.options.drop.overlap;if(De==="pointer"){var Ke=Ce(G,ie,"drag"),Te=mt(q);Te.x+=Ke.x,Te.y+=Ke.y;var Ne=Te.x>ce.left&&Te.x<ce.right,Ct=Te.y>ce.top&&Te.y<ce.bottom;xe=Ne&&Ct}var at=G.getRect(ie);if(at&&De==="center"){var Rt=at.left+at.width/2,Nt=at.top+at.height/2;xe=Rt>=ce.left&&Rt<=ce.right&&Nt>=ce.top&&Nt<=ce.bottom}return at&&b.number(De)&&(xe=Math.max(0,Math.min(ce.right,at.right)-Math.max(ce.left,at.left))*Math.max(0,Math.min(ce.bottom,at.bottom)-Math.max(ce.top,at.top))/(at.width*at.height)>=De),D.options.drop.checker&&(xe=D.options.drop.checker(q,X,xe,D,pe,G,ie)),xe})(this,g,x,k,E,P,A)},a.dynamicDrop=function(g){return b.bool(g)?(n.dynamicDrop=g,a):n.dynamicDrop},re(i.phaselessTypes,{dragenter:!0,dragleave:!0,dropactivate:!0,dropdeactivate:!0,dropmove:!0,drop:!0}),i.methodDict.drop="dropzone",n.dynamicDrop=!1,h.actions.drop=rt.defaults},listeners:{"interactions:before-action-start":function(n){var i=n.interaction;i.prepared.name==="drag"&&(i.dropState={cur:{dropzone:null,element:null},prev:{dropzone:null,element:null},rejected:null,events:null,activeDrops:[]})},"interactions:after-action-start":function(n,i){var a=n.interaction,d=(n.event,n.iEvent);if(a.prepared.name==="drag"){var h=a.dropState;h.activeDrops=[],h.events={},h.activeDrops=U(i,a.element),h.events=Ve(a,0,d),h.events.activate&&(Me(h.activeDrops,h.events.activate),i.fire("actions/drop:start",{interaction:a,dragEvent:d}))}},"interactions:action-move":je,"interactions:after-action-move":function(n,i){var a=n.interaction,d=n.iEvent;if(a.prepared.name==="drag"){var h=a.dropState;nt(a,h.events),i.fire("actions/drop:move",{interaction:a,dragEvent:d}),h.events={}}},"interactions:action-end":function(n,i){if(n.interaction.prepared.name==="drag"){var a=n.interaction,d=n.iEvent;je(n,i),nt(a,a.dropState.events),i.fire("actions/drop:end",{interaction:a,dragEvent:d})}},"interactions:stop":function(n){var i=n.interaction;if(i.prepared.name==="drag"){var a=i.dropState;a&&(a.activeDrops=null,a.events=null,a.cur.dropzone=null,a.cur.element=null,a.prev.dropzone=null,a.prev.element=null,a.rejected=!1)}}},getActiveDrops:U,getDrop:Qe,getDropEvents:Ve,fireDropEvents:nt,filterEventType:function(n){return n.search("drag")===0||n.search("drop")===0},defaults:{enabled:!1,accept:null,overlap:"pointer"}},et=rt;function tt(n){var i=n.interaction,a=n.iEvent,d=n.phase;if(i.prepared.name==="gesture"){var h=i.pointers.map((function(P){return P.pointer})),g=d==="start",x=d==="end",k=i.interactable.options.deltaSource;if(a.touches=[h[0],h[1]],g)a.distance=Mt(h,k),a.box=It(h),a.scale=1,a.ds=0,a.angle=me(h,k),a.da=0,i.gesture.startDistance=a.distance,i.gesture.startAngle=a.angle;else if(x||i.pointers.length<2){var E=i.prevEvent;a.distance=E.distance,a.box=E.box,a.scale=E.scale,a.ds=0,a.angle=E.angle,a.da=0}else a.distance=Mt(h,k),a.box=It(h),a.scale=a.distance/i.gesture.startDistance,a.angle=me(h,k),a.ds=a.scale-i.gesture.scale,a.da=a.angle-i.gesture.angle;i.gesture.distance=a.distance,i.gesture.angle=a.angle,b.number(a.scale)&&a.scale!==1/0&&!isNaN(a.scale)&&(i.gesture.scale=a.scale)}}var Ge={id:"actions/gesture",before:["actions/drag","actions/resize"],install:function(n){var i=n.actions,a=n.Interactable,d=n.defaults;a.prototype.gesturable=function(h){return b.object(h)?(this.options.gesture.enabled=h.enabled!==!1,this.setPerAction("gesture",h),this.setOnEvents("gesture",h),this):b.bool(h)?(this.options.gesture.enabled=h,this):this.options.gesture},i.map.gesture=Ge,i.methodDict.gesture="gesturable",d.actions.gesture=Ge.defaults},listeners:{"interactions:action-start":tt,"interactions:action-move":tt,"interactions:action-end":tt,"interactions:new":function(n){n.interaction.gesture={angle:0,distance:0,scale:1,startAngle:0,startDistance:0}},"auto-start:check":function(n){if(!(n.interaction.pointers.length<2)){var i=n.interactable.options.gesture;if(i&&i.enabled)return n.action={name:"gesture"},!1}}},defaults:{},getCursor:function(){return""},filterEventType:function(n){return n.search("gesture")===0}},Xe=Ge;function Pe(n,i,a,d,h,g,x){if(!i)return!1;if(i===!0){var k=b.number(g.width)?g.width:g.right-g.left,E=b.number(g.height)?g.height:g.bottom-g.top;if(x=Math.min(x,Math.abs((n==="left"||n==="right"?k:E)/2)),k<0&&(n==="left"?n="right":n==="right"&&(n="left")),E<0&&(n==="top"?n="bottom":n==="bottom"&&(n="top")),n==="left"){var P=k>=0?g.left:g.right;return a.x<P+x}if(n==="top"){var A=E>=0?g.top:g.bottom;return a.y<A+x}if(n==="right")return a.x>(k>=0?g.right:g.left)-x;if(n==="bottom")return a.y>(E>=0?g.bottom:g.top)-x}return!!b.element(d)&&(b.element(i)?i===d:He(d,i,h))}function ve(n){var i=n.iEvent,a=n.interaction;if(a.prepared.name==="resize"&&a.resizeAxes){var d=i;a.interactable.options.resize.square?(a.resizeAxes==="y"?d.delta.x=d.delta.y:d.delta.y=d.delta.x,d.axes="xy"):(d.axes=a.resizeAxes,a.resizeAxes==="x"?d.delta.y=0:a.resizeAxes==="y"&&(d.delta.x=0))}}var Ee,Be,Ae={id:"actions/resize",before:["actions/drag"],install:function(n){var i=n.actions,a=n.browser,d=n.Interactable,h=n.defaults;Ae.cursors=(function(g){return g.isIe9?{x:"e-resize",y:"s-resize",xy:"se-resize",top:"n-resize",left:"w-resize",bottom:"s-resize",right:"e-resize",topleft:"se-resize",bottomright:"se-resize",topright:"ne-resize",bottomleft:"ne-resize"}:{x:"ew-resize",y:"ns-resize",xy:"nwse-resize",top:"ns-resize",left:"ew-resize",bottom:"ns-resize",right:"ew-resize",topleft:"nwse-resize",bottomright:"nwse-resize",topright:"nesw-resize",bottomleft:"nesw-resize"}})(a),Ae.defaultMargin=a.supportsTouch||a.supportsPointerEvent?20:10,d.prototype.resizable=function(g){return(function(x,k,E){return b.object(k)?(x.options.resize.enabled=k.enabled!==!1,x.setPerAction("resize",k),x.setOnEvents("resize",k),b.string(k.axis)&&/^x$|^y$|^xy$/.test(k.axis)?x.options.resize.axis=k.axis:k.axis===null&&(x.options.resize.axis=E.defaults.actions.resize.axis),b.bool(k.preserveAspectRatio)?x.options.resize.preserveAspectRatio=k.preserveAspectRatio:b.bool(k.square)&&(x.options.resize.square=k.square),x):b.bool(k)?(x.options.resize.enabled=k,x):x.options.resize})(this,g,n)},i.map.resize=Ae,i.methodDict.resize="resizable",h.actions.resize=Ae.defaults},listeners:{"interactions:new":function(n){n.interaction.resizeAxes="xy"},"interactions:action-start":function(n){(function(i){var a=i.iEvent,d=i.interaction;if(d.prepared.name==="resize"&&d.prepared.edges){var h=a,g=d.rect;d._rects={start:re({},g),corrected:re({},g),previous:re({},g),delta:{left:0,right:0,width:0,top:0,bottom:0,height:0}},h.edges=d.prepared.edges,h.rect=d._rects.corrected,h.deltaRect=d._rects.delta}})(n),ve(n)},"interactions:action-move":function(n){(function(i){var a=i.iEvent,d=i.interaction;if(d.prepared.name==="resize"&&d.prepared.edges){var h=a,g=d.interactable.options.resize.invert,x=g==="reposition"||g==="negate",k=d.rect,E=d._rects,P=E.start,A=E.corrected,D=E.delta,q=E.previous;if(re(q,A),x){if(re(A,k),g==="reposition"){if(A.top>A.bottom){var X=A.top;A.top=A.bottom,A.bottom=X}if(A.left>A.right){var G=A.left;A.left=A.right,A.right=G}}}else A.top=Math.min(k.top,P.bottom),A.bottom=Math.max(k.bottom,P.top),A.left=Math.min(k.left,P.right),A.right=Math.max(k.right,P.left);for(var ie in A.width=A.right-A.left,A.height=A.bottom-A.top,A)D[ie]=A[ie]-q[ie];h.edges=d.prepared.edges,h.rect=A,h.deltaRect=D}})(n),ve(n)},"interactions:action-end":function(n){var i=n.iEvent,a=n.interaction;if(a.prepared.name==="resize"&&a.prepared.edges){var d=i;d.edges=a.prepared.edges,d.rect=a._rects.corrected,d.deltaRect=a._rects.delta}},"auto-start:check":function(n){var i=n.interaction,a=n.interactable,d=n.element,h=n.rect,g=n.buttons;if(h){var x=re({},i.coords.cur.page),k=a.options.resize;if(k&&k.enabled&&(!i.pointerIsDown||!/mouse|pointer/.test(i.pointerType)||(g&k.mouseButtons)!=0)){if(b.object(k.edges)){var E={left:!1,right:!1,top:!1,bottom:!1};for(var P in E)E[P]=Pe(P,k.edges[P],x,i._latestPointer.eventTarget,d,h,k.margin||Ae.defaultMargin);E.left=E.left&&!E.right,E.top=E.top&&!E.bottom,(E.left||E.right||E.top||E.bottom)&&(n.action={name:"resize",edges:E})}else{var A=k.axis!=="y"&&x.x>h.right-Ae.defaultMargin,D=k.axis!=="x"&&x.y>h.bottom-Ae.defaultMargin;(A||D)&&(n.action={name:"resize",axes:(A?"x":"")+(D?"y":"")})}return!n.action&&void 0}}}},defaults:{square:!1,preserveAspectRatio:!1,axis:"xy",margin:NaN,edges:null,invert:"none"},cursors:null,getCursor:function(n){var i=n.edges,a=n.axis,d=n.name,h=Ae.cursors,g=null;if(a)g=h[d+a];else if(i){for(var x="",k=0,E=["top","bottom","left","right"];k<E.length;k++){var P=E[k];i[P]&&(x+=P)}g=h[x]}return g},filterEventType:function(n){return n.search("resize")===0},defaultMargin:null},se=Ae,ne={id:"actions",install:function(n){n.usePlugin(Xe),n.usePlugin(se),n.usePlugin(N),n.usePlugin(et)}},ee=0,J={request:function(n){return Ee(n)},cancel:function(n){return Be(n)},init:function(n){if(Ee=n.requestAnimationFrame,Be=n.cancelAnimationFrame,!Ee)for(var i=["ms","moz","webkit","o"],a=0;a<i.length;a++){var d=i[a];Ee=n["".concat(d,"RequestAnimationFrame")],Be=n["".concat(d,"CancelAnimationFrame")]||n["".concat(d,"CancelRequestAnimationFrame")]}Ee=Ee&&Ee.bind(n),Be=Be&&Be.bind(n),Ee||(Ee=function(h){var g=Date.now(),x=Math.max(0,16-(g-ee)),k=n.setTimeout((function(){h(g+x)}),x);return ee=g+x,k},Be=function(h){return clearTimeout(h)})}},L={defaults:{enabled:!1,margin:60,container:null,speed:300},now:Date.now,interaction:null,i:0,x:0,y:0,isScrolling:!1,prevTime:0,margin:0,speed:0,start:function(n){L.isScrolling=!0,J.cancel(L.i),n.autoScroll=L,L.interaction=n,L.prevTime=L.now(),L.i=J.request(L.scroll)},stop:function(){L.isScrolling=!1,L.interaction&&(L.interaction.autoScroll=null),J.cancel(L.i)},scroll:function(){var n=L.interaction,i=n.interactable,a=n.element,d=n.prepared.name,h=i.options[d].autoScroll,g=W(h.container,i,a),x=L.now(),k=(x-L.prevTime)/1e3,E=h.speed*k;if(E>=1){var P={x:L.x*E,y:L.y*E};if(P.x||P.y){var A=te(g);b.window(g)?g.scrollBy(P.x,P.y):g&&(g.scrollLeft+=P.x,g.scrollTop+=P.y);var D=te(g),q={x:D.x-A.x,y:D.y-A.y};(q.x||q.y)&&i.fire({type:"autoscroll",target:a,interactable:i,delta:q,interaction:n,container:g})}L.prevTime=x}L.isScrolling&&(J.cancel(L.i),L.i=J.request(L.scroll))},check:function(n,i){var a;return(a=n.options[i].autoScroll)==null?void 0:a.enabled},onInteractionMove:function(n){var i=n.interaction,a=n.pointer;if(i.interacting()&&L.check(i.interactable,i.prepared.name))if(i.simulation)L.x=L.y=0;else{var d,h,g,x,k=i.interactable,E=i.element,P=i.prepared.name,A=k.options[P].autoScroll,D=W(A.container,k,E);if(b.window(D))x=a.clientX<L.margin,d=a.clientY<L.margin,h=a.clientX>D.innerWidth-L.margin,g=a.clientY>D.innerHeight-L.margin;else{var q=Oe(D);x=a.clientX<q.left+L.margin,d=a.clientY<q.top+L.margin,h=a.clientX>q.right-L.margin,g=a.clientY>q.bottom-L.margin}L.x=h?1:x?-1:0,L.y=g?1:d?-1:0,L.isScrolling||(L.margin=A.margin,L.speed=A.speed,L.start(i))}}};function W(n,i,a){return(b.string(n)?ut(n,i,a):n)||C(a)}function te(n){return b.window(n)&&(n=window.document.body),{x:n.scrollLeft,y:n.scrollTop}}var oe={id:"auto-scroll",install:function(n){var i=n.defaults,a=n.actions;n.autoScroll=L,L.now=function(){return n.now()},a.phaselessTypes.autoscroll=!0,i.perAction.autoScroll=L.defaults},listeners:{"interactions:new":function(n){n.interaction.autoScroll=null},"interactions:destroy":function(n){n.interaction.autoScroll=null,L.stop(),L.interaction&&(L.interaction=null)},"interactions:stop":L.stop,"interactions:action-move":function(n){return L.onInteractionMove(n)}}},ke=oe;function ue(n,i){var a=!1;return function(){return a||(T.console.warn(i),a=!0),n.apply(this,arguments)}}function be(n,i){return n.name=i.name,n.axis=i.axis,n.edges=i.edges,n}function qe(n){return b.bool(n)?(this.options.styleCursor=n,this):n===null?(delete this.options.styleCursor,this):this.options.styleCursor}function We(n){return b.func(n)?(this.options.actionChecker=n,this):n===null?(delete this.options.actionChecker,this):this.options.actionChecker}var Je={id:"auto-start/interactableMethods",install:function(n){var i=n.Interactable;i.prototype.getAction=function(a,d,h,g){var x=(function(k,E,P,A,D){var q=k.getRect(A),X=E.buttons||{0:1,1:4,3:8,4:16}[E.button],G={action:null,interactable:k,interaction:P,element:A,rect:q,buttons:X};return D.fire("auto-start:check",G),G.action})(this,d,h,g,n);return this.options.actionChecker?this.options.actionChecker(a,d,x,this,g,h):x},i.prototype.ignoreFrom=ue((function(a){return this._backCompatOption("ignoreFrom",a)}),"Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."),i.prototype.allowFrom=ue((function(a){return this._backCompatOption("allowFrom",a)}),"Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."),i.prototype.actionChecker=We,i.prototype.styleCursor=qe}};function Ze(n,i,a,d,h){return i.testIgnoreAllow(i.options[n.name],a,d)&&i.options[n.name].enabled&&wt(i,a,n,h)?n:null}function Lt(n,i,a,d,h,g,x){for(var k=0,E=d.length;k<E;k++){var P=d[k],A=h[k],D=P.getAction(i,a,n,A);if(D){var q=Ze(D,P,A,g,x);if(q)return{action:q,interactable:P,element:A}}}return{action:null,interactable:null,element:null}}function Dt(n,i,a,d,h){var g=[],x=[],k=d;function E(A){g.push(A),x.push(k)}for(;b.element(k);){g=[],x=[],h.interactables.forEachMatch(k,E);var P=Lt(n,i,a,g,x,d,h);if(P.action&&!P.interactable.options[P.action.name].manualStart)return P;k=Re(k)}return{action:null,interactable:null,element:null}}function Pt(n,i,a){var d=i.action,h=i.interactable,g=i.element;d=d||{name:null},n.interactable=h,n.element=g,be(n.prepared,d),n.rect=h&&d.name?h.getRect(g):null,bt(n,a),a.fire("autoStart:prepared",{interaction:n})}function wt(n,i,a,d){var h=n.options,g=h[a.name].max,x=h[a.name].maxPerElement,k=d.autoStart.maxInteractions,E=0,P=0,A=0;if(!(g&&x&&k))return!1;for(var D=0,q=d.interactions.list;D<q.length;D++){var X=q[D],G=X.prepared.name;if(X.interacting()&&(++E>=k||X.interactable===n&&((P+=G===a.name?1:0)>=g||X.element===i&&(A++,G===a.name&&A>=x))))return!1}return k>0}function qt(n,i){return b.number(n)?(i.autoStart.maxInteractions=n,this):i.autoStart.maxInteractions}function Ft(n,i,a){var d=a.autoStart.cursorElement;d&&d!==n&&(d.style.cursor=""),n.ownerDocument.documentElement.style.cursor=i,n.style.cursor=i,a.autoStart.cursorElement=i?n:null}function bt(n,i){var a=n.interactable,d=n.element,h=n.prepared;if(n.pointerType==="mouse"&&a&&a.options.styleCursor){var g="";if(h.name){var x=a.options[h.name].cursorChecker;g=b.func(x)?x(h,a,d,n._interacting):i.actions.map[h.name].getCursor(h)}Ft(n.element,g||"",i)}else i.autoStart.cursorElement&&Ft(i.autoStart.cursorElement,"",i)}var Kt={id:"auto-start/base",before:["actions"],install:function(n){var i=n.interactStatic,a=n.defaults;n.usePlugin(Je),a.base.actionChecker=null,a.base.styleCursor=!0,re(a.perAction,{manualStart:!1,max:1/0,maxPerElement:1,allowFrom:null,ignoreFrom:null,mouseButtons:1}),i.maxInteractions=function(d){return qt(d,n)},n.autoStart={maxInteractions:1/0,withinInteractionLimit:wt,cursorElement:null}},listeners:{"interactions:down":function(n,i){var a=n.interaction,d=n.pointer,h=n.event,g=n.eventTarget;a.interacting()||Pt(a,Dt(a,d,h,g,i),i)},"interactions:move":function(n,i){(function(a,d){var h=a.interaction,g=a.pointer,x=a.event,k=a.eventTarget;h.pointerType!=="mouse"||h.pointerIsDown||h.interacting()||Pt(h,Dt(h,g,x,k,d),d)})(n,i),(function(a,d){var h=a.interaction;if(h.pointerIsDown&&!h.interacting()&&h.pointerWasMoved&&h.prepared.name){d.fire("autoStart:before-start",a);var g=h.interactable,x=h.prepared.name;x&&g&&(g.options[x].manualStart||!wt(g,h.element,h.prepared,d)?h.stop():(h.start(h.prepared,g,h.element),bt(h,d)))}})(n,i)},"interactions:stop":function(n,i){var a=n.interaction,d=a.interactable;d&&d.options.styleCursor&&Ft(a.element,"",i)}},maxInteractions:qt,withinInteractionLimit:wt,validateAction:Ze},ni=Kt,pn={id:"auto-start/dragAxis",listeners:{"autoStart:before-start":function(n,i){var a=n.interaction,d=n.eventTarget,h=n.dx,g=n.dy;if(a.prepared.name==="drag"){var x=Math.abs(h),k=Math.abs(g),E=a.interactable.options.drag,P=E.startAxis,A=x>k?"x":x<k?"y":"xy";if(a.prepared.axis=E.lockAxis==="start"?A[0]:E.lockAxis,A!=="xy"&&P!=="xy"&&P!==A){a.prepared.name=null;for(var D=d,q=function(G){if(G!==a.interactable){var ie=a.interactable.options.drag;if(!ie.manualStart&&G.testIgnoreAllow(ie,D,d)){var pe=G.getAction(a.downPointer,a.downEvent,a,D);if(pe&&pe.name==="drag"&&(function(ce,xe){if(!xe)return!1;var De=xe.options.drag.startAxis;return ce==="xy"||De==="xy"||De===ce})(A,G)&&ni.validateAction(pe,G,D,d,i))return G}}};b.element(D);){var X=i.interactables.forEachMatch(D,q);if(X){a.prepared.name="drag",a.interactable=X,a.element=D;break}D=Re(D)}}}}}};function ui(n){var i=n.prepared&&n.prepared.name;if(!i)return null;var a=n.interactable.options;return a[i].hold||a[i].delay}var Hi={id:"auto-start/hold",install:function(n){var i=n.defaults;n.usePlugin(ni),i.perAction.hold=0,i.perAction.delay=0},listeners:{"interactions:new":function(n){n.interaction.autoStartHoldTimer=null},"autoStart:prepared":function(n){var i=n.interaction,a=ui(i);a>0&&(i.autoStartHoldTimer=setTimeout((function(){i.start(i.prepared,i.interactable,i.element)}),a))},"interactions:move":function(n){var i=n.interaction,a=n.duplicate;i.autoStartHoldTimer&&i.pointerWasMoved&&!a&&(clearTimeout(i.autoStartHoldTimer),i.autoStartHoldTimer=null)},"autoStart:before-start":function(n){var i=n.interaction;ui(i)>0&&(i.prepared.name=null)}},getHoldDuration:ui},ji=Hi,Wi={id:"auto-start",install:function(n){n.usePlugin(ni),n.usePlugin(ji),n.usePlugin(pn)}},_i=function(n){return/^(always|never|auto)$/.test(n)?(this.options.preventDefault=n,this):b.bool(n)?(this.options.preventDefault=n?"always":"never",this):this.options.preventDefault};function hn(n){var i=n.interaction,a=n.event;i.interactable&&i.interactable.checkAndPreventDefault(a)}var pi={id:"core/interactablePreventDefault",install:function(n){var i=n.Interactable;i.prototype.preventDefault=_i,i.prototype.checkAndPreventDefault=function(a){return(function(d,h,g){var x=d.options.preventDefault;if(x!=="never")if(x!=="always"){if(h.events.supportsPassive&&/^touch(start|move)$/.test(g.type)){var k=C(g.target).document,E=h.getDocOptions(k);if(!E||!E.events||E.events.passive!==!1)return}/^(mouse|pointer|touch)*(down|start)/i.test(g.type)||b.element(g.target)&&ge(g.target,"input,select,textarea,[contenteditable=true],[contenteditable=true] *")||g.preventDefault()}else g.preventDefault()})(this,n,a)},n.interactions.docEvents.push({type:"dragstart",listener:function(a){for(var d=0,h=n.interactions.list;d<h.length;d++){var g=h[d];if(g.element&&(g.element===a.target||le(g.element,a.target)))return void g.interactable.checkAndPreventDefault(a)}}})},listeners:["down","move","up","cancel"].reduce((function(n,i){return n["interactions:".concat(i)]=hn,n}),{})};function Ut(n,i){if(i.phaselessTypes[n])return!0;for(var a in i.map)if(n.indexOf(a)===0&&n.substr(a.length)in i.phases)return!0;return!1}function Vt(n){var i={};for(var a in n){var d=n[a];b.plainObject(d)?i[a]=Vt(d):b.array(d)?i[a]=de(d):i[a]=d}return i}var xi=(function(){function n(i){r(this,n),this.states=[],this.startOffset={left:0,right:0,top:0,bottom:0},this.startDelta=void 0,this.result=void 0,this.endResult=void 0,this.startEdges=void 0,this.edges=void 0,this.interaction=void 0,this.interaction=i,this.result=ri(),this.edges={left:!1,right:!1,top:!1,bottom:!1}}return c(n,[{key:"start",value:function(i,a){var d,h,g=i.phase,x=this.interaction,k=(function(P){var A=P.interactable.options[P.prepared.name],D=A.modifiers;return D&&D.length?D:["snap","snapSize","snapEdges","restrict","restrictEdges","restrictSize"].map((function(q){var X=A[q];return X&&X.enabled&&{options:X,methods:X._methods}})).filter((function(q){return!!q}))})(x);this.prepareStates(k),this.startEdges=re({},x.edges),this.edges=re({},this.startEdges),this.startOffset=(d=x.rect,h=a,d?{left:h.x-d.left,top:h.y-d.top,right:d.right-h.x,bottom:d.bottom-h.y}:{left:0,top:0,right:0,bottom:0}),this.startDelta={x:0,y:0};var E=this.fillArg({phase:g,pageCoords:a,preEnd:!1});return this.result=ri(),this.startAll(E),this.result=this.setAll(E)}},{key:"fillArg",value:function(i){var a=this.interaction;return i.interaction=a,i.interactable=a.interactable,i.element=a.element,i.rect||(i.rect=a.rect),i.edges||(i.edges=this.startEdges),i.startOffset=this.startOffset,i}},{key:"startAll",value:function(i){for(var a=0,d=this.states;a<d.length;a++){var h=d[a];h.methods.start&&(i.state=h,h.methods.start(i))}}},{key:"setAll",value:function(i){var a=i.phase,d=i.preEnd,h=i.skipModifiers,g=i.rect,x=i.edges;i.coords=re({},i.pageCoords),i.rect=re({},g),i.edges=re({},x);for(var k=h?this.states.slice(h):this.states,E=ri(i.coords,i.rect),P=0;P<k.length;P++){var A,D=k[P],q=D.options,X=re({},i.coords),G=null;(A=D.methods)!=null&&A.set&&this.shouldDo(q,d,a)&&(i.state=D,G=D.methods.set(i),$e(i.edges,i.rect,{x:i.coords.x-X.x,y:i.coords.y-X.y})),E.eventProps.push(G)}re(this.edges,i.edges),E.delta.x=i.coords.x-i.pageCoords.x,E.delta.y=i.coords.y-i.pageCoords.y,E.rectDelta.left=i.rect.left-g.left,E.rectDelta.right=i.rect.right-g.right,E.rectDelta.top=i.rect.top-g.top,E.rectDelta.bottom=i.rect.bottom-g.bottom;var ie=this.result.coords,pe=this.result.rect;if(ie&&pe){var ce=E.rect.left!==pe.left||E.rect.right!==pe.right||E.rect.top!==pe.top||E.rect.bottom!==pe.bottom;E.changed=ce||ie.x!==E.coords.x||ie.y!==E.coords.y}return E}},{key:"applyToInteraction",value:function(i){var a=this.interaction,d=i.phase,h=a.coords.cur,g=a.coords.start,x=this.result,k=this.startDelta,E=x.delta;d==="start"&&re(this.startDelta,x.delta);for(var P=0,A=[[g,k],[h,E]];P<A.length;P++){var D=A[P],q=D[0],X=D[1];q.page.x+=X.x,q.page.y+=X.y,q.client.x+=X.x,q.client.y+=X.y}var G=this.result.rectDelta,ie=i.rect||a.rect;ie.left+=G.left,ie.right+=G.right,ie.top+=G.top,ie.bottom+=G.bottom,ie.width=ie.right-ie.left,ie.height=ie.bottom-ie.top}},{key:"setAndApply",value:function(i){var a=this.interaction,d=i.phase,h=i.preEnd,g=i.skipModifiers,x=this.setAll(this.fillArg({preEnd:h,phase:d,pageCoords:i.modifiedCoords||a.coords.cur.page}));if(this.result=x,!x.changed&&(!g||g<this.states.length)&&a.interacting())return!1;if(i.modifiedCoords){var k=a.coords.cur.page,E={x:i.modifiedCoords.x-k.x,y:i.modifiedCoords.y-k.y};x.coords.x+=E.x,x.coords.y+=E.y,x.delta.x+=E.x,x.delta.y+=E.y}this.applyToInteraction(i)}},{key:"beforeEnd",value:function(i){var a=i.interaction,d=i.event,h=this.states;if(h&&h.length){for(var g=!1,x=0;x<h.length;x++){var k=h[x];i.state=k;var E=k.options,P=k.methods,A=P.beforeEnd&&P.beforeEnd(i);if(A)return this.endResult=A,!1;g=g||!g&&this.shouldDo(E,!0,i.phase,!0)}g&&a.move({event:d,preEnd:!0})}}},{key:"stop",value:function(i){var a=i.interaction;if(this.states&&this.states.length){var d=re({states:this.states,interactable:a.interactable,element:a.element,rect:null},i);this.fillArg(d);for(var h=0,g=this.states;h<g.length;h++){var x=g[h];d.state=x,x.methods.stop&&x.methods.stop(d)}this.states=null,this.endResult=null}}},{key:"prepareStates",value:function(i){this.states=[];for(var a=0;a<i.length;a++){var d=i[a],h=d.options,g=d.methods,x=d.name;this.states.push({options:h,methods:g,index:a,name:x})}return this.states}},{key:"restoreInteractionCoords",value:function(i){var a=i.interaction,d=a.coords,h=a.rect,g=a.modification;if(g.result){for(var x=g.startDelta,k=g.result,E=k.delta,P=k.rectDelta,A=0,D=[[d.start,x],[d.cur,E]];A<D.length;A++){var q=D[A],X=q[0],G=q[1];X.page.x-=G.x,X.page.y-=G.y,X.client.x-=G.x,X.client.y-=G.y}h.left-=P.left,h.right-=P.right,h.top-=P.top,h.bottom-=P.bottom}}},{key:"shouldDo",value:function(i,a,d,h){return!(!i||i.enabled===!1||h&&!i.endOnly||i.endOnly&&!a||d==="start"&&!i.setStart)}},{key:"copyFrom",value:function(i){this.startOffset=i.startOffset,this.startDelta=i.startDelta,this.startEdges=i.startEdges,this.edges=i.edges,this.states=i.states.map((function(a){return Vt(a)})),this.result=ri(re({},i.result.coords),re({},i.result.rect))}},{key:"destroy",value:function(){for(var i in this)this[i]=null}}]),n})();function ri(n,i){return{rect:i,coords:n,delta:{x:0,y:0},rectDelta:{left:0,right:0,top:0,bottom:0},eventProps:[],changed:!0}}function Ht(n,i){var a=n.defaults,d={start:n.start,set:n.set,beforeEnd:n.beforeEnd,stop:n.stop},h=function(g){var x=g||{};for(var k in x.enabled=x.enabled!==!1,a)k in x||(x[k]=a[k]);var E={options:x,methods:d,name:i,enable:function(){return x.enabled=!0,E},disable:function(){return x.enabled=!1,E}};return E};return i&&typeof i=="string"&&(h._defaults=a,h._methods=d),h}function Gt(n){var i=n.iEvent,a=n.interaction.modification.result;a&&(i.modifiers=a.eventProps)}var Yi={id:"modifiers/base",before:["actions"],install:function(n){n.defaults.perAction.modifiers=[]},listeners:{"interactions:new":function(n){var i=n.interaction;i.modification=new xi(i)},"interactions:before-action-start":function(n){var i=n.interaction,a=n.interaction.modification;a.start(n,i.coords.start.page),i.edges=a.edges,a.applyToInteraction(n)},"interactions:before-action-move":function(n){var i=n.interaction,a=i.modification,d=a.setAndApply(n);return i.edges=a.edges,d},"interactions:before-action-end":function(n){var i=n.interaction,a=i.modification,d=a.beforeEnd(n);return i.edges=a.startEdges,d},"interactions:action-start":Gt,"interactions:action-move":Gt,"interactions:action-end":Gt,"interactions:after-action-start":function(n){return n.interaction.modification.restoreInteractionCoords(n)},"interactions:after-action-move":function(n){return n.interaction.modification.restoreInteractionCoords(n)},"interactions:stop":function(n){return n.interaction.modification.stop(n)}}},wi=Yi,Si={base:{preventDefault:"auto",deltaSource:"page"},perAction:{enabled:!1,origin:{x:0,y:0}},actions:{}},hi=(function(n){l(a,n);var i=m(a);function a(d,h,g,x,k,E,P){var A;r(this,a),(A=i.call(this,d)).relatedTarget=null,A.screenX=void 0,A.screenY=void 0,A.button=void 0,A.buttons=void 0,A.ctrlKey=void 0,A.shiftKey=void 0,A.altKey=void 0,A.metaKey=void 0,A.page=void 0,A.client=void 0,A.delta=void 0,A.rect=void 0,A.x0=void 0,A.y0=void 0,A.t0=void 0,A.dt=void 0,A.duration=void 0,A.clientX0=void 0,A.clientY0=void 0,A.velocity=void 0,A.speed=void 0,A.swipe=void 0,A.axes=void 0,A.preEnd=void 0,k=k||d.element;var D=d.interactable,q=(D&&D.options||Si).deltaSource,X=Ce(D,k,g),G=x==="start",ie=x==="end",pe=G?v(A):d.prevEvent,ce=G?d.coords.start:ie?{page:pe.page,client:pe.client,timeStamp:d.coords.cur.timeStamp}:d.coords.cur;return A.page=re({},ce.page),A.client=re({},ce.client),A.rect=re({},d.rect),A.timeStamp=ce.timeStamp,ie||(A.page.x-=X.x,A.page.y-=X.y,A.client.x-=X.x,A.client.y-=X.y),A.ctrlKey=h.ctrlKey,A.altKey=h.altKey,A.shiftKey=h.shiftKey,A.metaKey=h.metaKey,A.button=h.button,A.buttons=h.buttons,A.target=k,A.currentTarget=k,A.preEnd=E,A.type=P||g+(x||""),A.interactable=D,A.t0=G?d.pointers[d.pointers.length-1].downTime:pe.t0,A.x0=d.coords.start.page.x-X.x,A.y0=d.coords.start.page.y-X.y,A.clientX0=d.coords.start.client.x-X.x,A.clientY0=d.coords.start.client.y-X.y,A.delta=G||ie?{x:0,y:0}:{x:A[q].x-pe[q].x,y:A[q].y-pe[q].y},A.dt=d.coords.delta.timeStamp,A.duration=A.timeStamp-A.t0,A.velocity=re({},d.coords.velocity[q]),A.speed=gt(A.velocity.x,A.velocity.y),A.swipe=ie||x==="inertiastart"?A.getSwipe():null,A}return c(a,[{key:"getSwipe",value:function(){var d=this._interaction;if(d.prevEvent.speed<600||this.timeStamp-d.prevEvent.timeStamp>150)return null;var h=180*Math.atan2(d.prevEvent.velocityY,d.prevEvent.velocityX)/Math.PI;h<0&&(h+=360);var g=112.5<=h&&h<247.5,x=202.5<=h&&h<337.5;return{up:x,down:!x&&22.5<=h&&h<157.5,left:g,right:!g&&(292.5<=h||h<67.5),angle:h,speed:d.prevEvent.speed,velocity:{x:d.prevEvent.velocityX,y:d.prevEvent.velocityY}}}},{key:"preventDefault",value:function(){}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}}]),a})(ye);Object.defineProperties(hi.prototype,{pageX:{get:function(){return this.page.x},set:function(n){this.page.x=n}},pageY:{get:function(){return this.page.y},set:function(n){this.page.y=n}},clientX:{get:function(){return this.client.x},set:function(n){this.client.x=n}},clientY:{get:function(){return this.client.y},set:function(n){this.client.y=n}},dx:{get:function(){return this.delta.x},set:function(n){this.delta.x=n}},dy:{get:function(){return this.delta.y},set:function(n){this.delta.y=n}},velocityX:{get:function(){return this.velocity.x},set:function(n){this.velocity.x=n}},velocityY:{get:function(){return this.velocity.y},set:function(n){this.velocity.y=n}}});var $i=c((function n(i,a,d,h,g){r(this,n),this.id=void 0,this.pointer=void 0,this.event=void 0,this.downTime=void 0,this.downTarget=void 0,this.id=i,this.pointer=a,this.event=d,this.downTime=h,this.downTarget=g})),Ki=(function(n){return n.interactable="",n.element="",n.prepared="",n.pointerIsDown="",n.pointerWasMoved="",n._proxy="",n})({}),ki=(function(n){return n.start="",n.move="",n.end="",n.stop="",n.interacting="",n})({}),Ui=0,Vi=(function(){function n(i){var a=this,d=i.pointerType,h=i.scopeFire;r(this,n),this.interactable=null,this.element=null,this.rect=null,this._rects=void 0,this.edges=null,this._scopeFire=void 0,this.prepared={name:null,axis:null,edges:null},this.pointerType=void 0,this.pointers=[],this.downEvent=null,this.downPointer={},this._latestPointer={pointer:null,event:null,eventTarget:null},this.prevEvent=null,this.pointerIsDown=!1,this.pointerWasMoved=!1,this._interacting=!1,this._ending=!1,this._stopped=!0,this._proxy=void 0,this.simulation=null,this.doMove=ue((function(A){this.move(A)}),"The interaction.doMove() method has been renamed to interaction.move()"),this.coords={start:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},prev:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},cur:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},delta:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},velocity:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0}},this._id=Ui++,this._scopeFire=h,this.pointerType=d;var g=this;this._proxy={};var x=function(A){Object.defineProperty(a._proxy,A,{get:function(){return g[A]}})};for(var k in Ki)x(k);var E=function(A){Object.defineProperty(a._proxy,A,{value:function(){return g[A].apply(g,arguments)}})};for(var P in ki)E(P);this._scopeFire("interactions:new",{interaction:this})}return c(n,[{key:"pointerMoveTolerance",get:function(){return 1}},{key:"pointerDown",value:function(i,a,d){var h=this.updatePointer(i,a,d,!0),g=this.pointers[h];this._scopeFire("interactions:down",{pointer:i,event:a,eventTarget:d,pointerIndex:h,pointerInfo:g,type:"down",interaction:this})}},{key:"start",value:function(i,a,d){return!(this.interacting()||!this.pointerIsDown||this.pointers.length<(i.name==="gesture"?2:1)||!a.options[i.name].enabled)&&(be(this.prepared,i),this.interactable=a,this.element=d,this.rect=a.getRect(d),this.edges=this.prepared.edges?re({},this.prepared.edges):{left:!0,right:!0,top:!0,bottom:!0},this._stopped=!1,this._interacting=this._doPhase({interaction:this,event:this.downEvent,phase:"start"})&&!this._stopped,this._interacting)}},{key:"pointerMove",value:function(i,a,d){this.simulation||this.modification&&this.modification.endResult||this.updatePointer(i,a,d,!1);var h,g,x=this.coords.cur.page.x===this.coords.prev.page.x&&this.coords.cur.page.y===this.coords.prev.page.y&&this.coords.cur.client.x===this.coords.prev.client.x&&this.coords.cur.client.y===this.coords.prev.client.y;this.pointerIsDown&&!this.pointerWasMoved&&(h=this.coords.cur.client.x-this.coords.start.client.x,g=this.coords.cur.client.y-this.coords.start.client.y,this.pointerWasMoved=gt(h,g)>this.pointerMoveTolerance);var k,E,P,A=this.getPointerIndex(i),D={pointer:i,pointerIndex:A,pointerInfo:this.pointers[A],event:a,type:"move",eventTarget:d,dx:h,dy:g,duplicate:x,interaction:this};x||(k=this.coords.velocity,E=this.coords.delta,P=Math.max(E.timeStamp/1e3,.001),k.page.x=E.page.x/P,k.page.y=E.page.y/P,k.client.x=E.client.x/P,k.client.y=E.client.y/P,k.timeStamp=P),this._scopeFire("interactions:move",D),x||this.simulation||(this.interacting()&&(D.type=null,this.move(D)),this.pointerWasMoved&&At(this.coords.prev,this.coords.cur))}},{key:"move",value:function(i){i&&i.event||xt(this.coords.delta),(i=re({pointer:this._latestPointer.pointer,event:this._latestPointer.event,eventTarget:this._latestPointer.eventTarget,interaction:this},i||{})).phase="move",this._doPhase(i)}},{key:"pointerUp",value:function(i,a,d,h){var g=this.getPointerIndex(i);g===-1&&(g=this.updatePointer(i,a,d,!1));var x=/cancel$/i.test(a.type)?"cancel":"up";this._scopeFire("interactions:".concat(x),{pointer:i,pointerIndex:g,pointerInfo:this.pointers[g],event:a,eventTarget:d,type:x,curEventTarget:h,interaction:this}),this.simulation||this.end(a),this.removePointer(i,a)}},{key:"documentBlur",value:function(i){this.end(i),this._scopeFire("interactions:blur",{event:i,type:"blur",interaction:this})}},{key:"end",value:function(i){var a;this._ending=!0,i=i||this._latestPointer.event,this.interacting()&&(a=this._doPhase({event:i,interaction:this,phase:"end"})),this._ending=!1,a===!0&&this.stop()}},{key:"currentAction",value:function(){return this._interacting?this.prepared.name:null}},{key:"interacting",value:function(){return this._interacting}},{key:"stop",value:function(){this._scopeFire("interactions:stop",{interaction:this}),this.interactable=this.element=null,this._interacting=!1,this._stopped=!0,this.prepared.name=this.prevEvent=null}},{key:"getPointerIndex",value:function(i){var a=Tt(i);return this.pointerType==="mouse"||this.pointerType==="pen"?this.pointers.length-1:ze(this.pointers,(function(d){return d.id===a}))}},{key:"getPointerInfo",value:function(i){return this.pointers[this.getPointerIndex(i)]}},{key:"updatePointer",value:function(i,a,d,h){var g,x,k,E=Tt(i),P=this.getPointerIndex(i),A=this.pointers[P];return h=h!==!1&&(h||/(down|start)$/i.test(a.type)),A?A.pointer=i:(A=new $i(E,i,a,null,null),P=this.pointers.length,this.pointers.push(A)),ii(this.coords.cur,this.pointers.map((function(D){return D.pointer})),this._now()),g=this.coords.delta,x=this.coords.prev,k=this.coords.cur,g.page.x=k.page.x-x.page.x,g.page.y=k.page.y-x.page.y,g.client.x=k.client.x-x.client.x,g.client.y=k.client.y-x.client.y,g.timeStamp=k.timeStamp-x.timeStamp,h&&(this.pointerIsDown=!0,A.downTime=this.coords.cur.timeStamp,A.downTarget=d,lt(this.downPointer,i),this.interacting()||(At(this.coords.start,this.coords.cur),At(this.coords.prev,this.coords.cur),this.downEvent=a,this.pointerWasMoved=!1)),this._updateLatestPointer(i,a,d),this._scopeFire("interactions:update-pointer",{pointer:i,event:a,eventTarget:d,down:h,pointerInfo:A,pointerIndex:P,interaction:this}),P}},{key:"removePointer",value:function(i,a){var d=this.getPointerIndex(i);if(d!==-1){var h=this.pointers[d];this._scopeFire("interactions:remove-pointer",{pointer:i,event:a,eventTarget:null,pointerIndex:d,pointerInfo:h,interaction:this}),this.pointers.splice(d,1),this.pointerIsDown=!1}}},{key:"_updateLatestPointer",value:function(i,a,d){this._latestPointer.pointer=i,this._latestPointer.event=a,this._latestPointer.eventTarget=d}},{key:"destroy",value:function(){this._latestPointer.pointer=null,this._latestPointer.event=null,this._latestPointer.eventTarget=null}},{key:"_createPreparedEvent",value:function(i,a,d,h){return new hi(this,i,this.prepared.name,a,this.element,d,h)}},{key:"_fireEvent",value:function(i){var a;(a=this.interactable)==null||a.fire(i),(!this.prevEvent||i.timeStamp>=this.prevEvent.timeStamp)&&(this.prevEvent=i)}},{key:"_doPhase",value:function(i){var a=i.event,d=i.phase,h=i.preEnd,g=i.type,x=this.rect;if(x&&d==="move"&&($e(this.edges,x,this.coords.delta[this.interactable.options.deltaSource]),x.width=x.right-x.left,x.height=x.bottom-x.top),this._scopeFire("interactions:before-action-".concat(d),i)===!1)return!1;var k=i.iEvent=this._createPreparedEvent(a,d,h,g);return this._scopeFire("interactions:action-".concat(d),i),d==="start"&&(this.prevEvent=k),this._fireEvent(k),this._scopeFire("interactions:after-action-".concat(d),i),!0}},{key:"_now",value:function(){return Date.now()}}]),n})();function Ci(n){Ei(n.interaction)}function Ei(n){if(!(function(a){return!(!a.offset.pending.x&&!a.offset.pending.y)})(n))return!1;var i=n.offset.pending;return fi(n.coords.cur,i),fi(n.coords.delta,i),$e(n.edges,n.rect,i),i.x=0,i.y=0,!0}function Gi(n){var i=n.x,a=n.y;this.offset.pending.x+=i,this.offset.pending.y+=a,this.offset.total.x+=i,this.offset.total.y+=a}function fi(n,i){var a=n.page,d=n.client,h=i.x,g=i.y;a.x+=h,a.y+=g,d.x+=h,d.y+=g}ki.offsetBy="";var Xi={id:"offset",before:["modifiers","pointer-events","actions","inertia"],install:function(n){n.Interaction.prototype.offsetBy=Gi},listeners:{"interactions:new":function(n){n.interaction.offset={total:{x:0,y:0},pending:{x:0,y:0}}},"interactions:update-pointer":function(n){return(function(i){i.pointerIsDown&&(fi(i.coords.cur,i.offset.total),i.offset.pending.x=0,i.offset.pending.y=0)})(n.interaction)},"interactions:before-action-start":Ci,"interactions:before-action-move":Ci,"interactions:before-action-end":function(n){var i=n.interaction;if(Ei(i))return i.move({offset:!0}),i.end(),!1},"interactions:stop":function(n){var i=n.interaction;i.offset.total.x=0,i.offset.total.y=0,i.offset.pending.x=0,i.offset.pending.y=0}}},Ai=Xi,Ji=(function(){function n(i){r(this,n),this.active=!1,this.isModified=!1,this.smoothEnd=!1,this.allowResume=!1,this.modification=void 0,this.modifierCount=0,this.modifierArg=void 0,this.startCoords=void 0,this.t0=0,this.v0=0,this.te=0,this.targetOffset=void 0,this.modifiedOffset=void 0,this.currentOffset=void 0,this.lambda_v0=0,this.one_ve_v0=0,this.timeout=void 0,this.interaction=void 0,this.interaction=i}return c(n,[{key:"start",value:function(i){var a=this.interaction,d=ai(a);if(!d||!d.enabled)return!1;var h=a.coords.velocity.client,g=gt(h.x,h.y),x=this.modification||(this.modification=new xi(a));if(x.copyFrom(a.modification),this.t0=a._now(),this.allowResume=d.allowResume,this.v0=g,this.currentOffset={x:0,y:0},this.startCoords=a.coords.cur.page,this.modifierArg=x.fillArg({pageCoords:this.startCoords,preEnd:!0,phase:"inertiastart"}),this.t0-a.coords.cur.timeStamp<50&&g>d.minSpeed&&g>d.endSpeed)this.startInertia();else{if(x.result=x.setAll(this.modifierArg),!x.result.changed)return!1;this.startSmoothEnd()}return a.modification.result.rect=null,a.offsetBy(this.targetOffset),a._doPhase({interaction:a,event:i,phase:"inertiastart"}),a.offsetBy({x:-this.targetOffset.x,y:-this.targetOffset.y}),a.modification.result.rect=null,this.active=!0,a.simulation=this,!0}},{key:"startInertia",value:function(){var i=this,a=this.interaction.coords.velocity.client,d=ai(this.interaction),h=d.resistance,g=-Math.log(d.endSpeed/this.v0)/h;this.targetOffset={x:(a.x-g)/h,y:(a.y-g)/h},this.te=g,this.lambda_v0=h/this.v0,this.one_ve_v0=1-d.endSpeed/this.v0;var x=this.modification,k=this.modifierArg;k.pageCoords={x:this.startCoords.x+this.targetOffset.x,y:this.startCoords.y+this.targetOffset.y},x.result=x.setAll(k),x.result.changed&&(this.isModified=!0,this.modifiedOffset={x:this.targetOffset.x+x.result.delta.x,y:this.targetOffset.y+x.result.delta.y}),this.onNextFrame((function(){return i.inertiaTick()}))}},{key:"startSmoothEnd",value:function(){var i=this;this.smoothEnd=!0,this.isModified=!0,this.targetOffset={x:this.modification.result.delta.x,y:this.modification.result.delta.y},this.onNextFrame((function(){return i.smoothEndTick()}))}},{key:"onNextFrame",value:function(i){var a=this;this.timeout=J.request((function(){a.active&&i()}))}},{key:"inertiaTick",value:function(){var i,a,d,h,g,x,k,E=this,P=this.interaction,A=ai(P).resistance,D=(P._now()-this.t0)/1e3;if(D<this.te){var q,X=1-(Math.exp(-A*D)-this.lambda_v0)/this.one_ve_v0;this.isModified?(i=0,a=0,d=this.targetOffset.x,h=this.targetOffset.y,g=this.modifiedOffset.x,x=this.modifiedOffset.y,q={x:Qi(k=X,i,d,g),y:Qi(k,a,h,x)}):q={x:this.targetOffset.x*X,y:this.targetOffset.y*X};var G={x:q.x-this.currentOffset.x,y:q.y-this.currentOffset.y};this.currentOffset.x+=G.x,this.currentOffset.y+=G.y,P.offsetBy(G),P.move(),this.onNextFrame((function(){return E.inertiaTick()}))}else P.offsetBy({x:this.modifiedOffset.x-this.currentOffset.x,y:this.modifiedOffset.y-this.currentOffset.y}),this.end()}},{key:"smoothEndTick",value:function(){var i=this,a=this.interaction,d=a._now()-this.t0,h=ai(a).smoothEndDuration;if(d<h){var g={x:Zi(d,0,this.targetOffset.x,h),y:Zi(d,0,this.targetOffset.y,h)},x={x:g.x-this.currentOffset.x,y:g.y-this.currentOffset.y};this.currentOffset.x+=x.x,this.currentOffset.y+=x.y,a.offsetBy(x),a.move({skipModifiers:this.modifierCount}),this.onNextFrame((function(){return i.smoothEndTick()}))}else a.offsetBy({x:this.targetOffset.x-this.currentOffset.x,y:this.targetOffset.y-this.currentOffset.y}),this.end()}},{key:"resume",value:function(i){var a=i.pointer,d=i.event,h=i.eventTarget,g=this.interaction;g.offsetBy({x:-this.currentOffset.x,y:-this.currentOffset.y}),g.updatePointer(a,d,h,!0),g._doPhase({interaction:g,event:d,phase:"resume"}),At(g.coords.prev,g.coords.cur),this.stop()}},{key:"end",value:function(){this.interaction.move(),this.interaction.end(),this.stop()}},{key:"stop",value:function(){this.active=this.smoothEnd=!1,this.interaction.simulation=null,J.cancel(this.timeout)}}]),n})();function ai(n){var i=n.interactable,a=n.prepared;return i&&i.options&&a.name&&i.options[a.name].inertia}var Ti={id:"inertia",before:["modifiers","actions"],install:function(n){var i=n.defaults;n.usePlugin(Ai),n.usePlugin(wi),n.actions.phases.inertiastart=!0,n.actions.phases.resume=!0,i.perAction.inertia={enabled:!1,resistance:10,minSpeed:100,endSpeed:10,allowResume:!0,smoothEndDuration:300}},listeners:{"interactions:new":function(n){var i=n.interaction;i.inertia=new Ji(i)},"interactions:before-action-end":function(n){var i=n.interaction,a=n.event;return(!i._interacting||i.simulation||!i.inertia.start(a))&&null},"interactions:down":function(n){var i=n.interaction,a=n.eventTarget,d=i.inertia;if(d.active)for(var h=a;b.element(h);){if(h===i.element){d.resume(n);break}h=Re(h)}},"interactions:stop":function(n){var i=n.interaction.inertia;i.active&&i.stop()},"interactions:before-action-resume":function(n){var i=n.interaction.modification;i.stop(n),i.start(n,n.interaction.coords.cur.page),i.applyToInteraction(n)},"interactions:before-action-inertiastart":function(n){return n.interaction.modification.setAndApply(n)},"interactions:action-resume":Gt,"interactions:action-inertiastart":Gt,"interactions:after-action-inertiastart":function(n){return n.interaction.modification.restoreInteractionCoords(n)},"interactions:after-action-resume":function(n){return n.interaction.modification.restoreInteractionCoords(n)}}};function Qi(n,i,a,d){var h=1-n;return h*h*i+2*h*n*a+n*n*d}function Zi(n,i,a,d){return-a*(n/=d)*(n-2)+i}var Oi=Ti;function zi(n,i){for(var a=0;a<i.length;a++){var d=i[a];if(n.immediatePropagationStopped)break;d(n)}}var Mi=(function(){function n(i){r(this,n),this.options=void 0,this.types={},this.propagationStopped=!1,this.immediatePropagationStopped=!1,this.global=void 0,this.options=re({},i||{})}return c(n,[{key:"fire",value:function(i){var a,d=this.global;(a=this.types[i.type])&&zi(i,a),!i.propagationStopped&&d&&(a=d[i.type])&&zi(i,a)}},{key:"on",value:function(i,a){var d=Le(i,a);for(i in d)this.types[i]=Se(this.types[i]||[],d[i])}},{key:"off",value:function(i,a){var d=Le(i,a);for(i in d){var h=this.types[i];if(h&&h.length)for(var g=0,x=d[i];g<x.length;g++){var k=x[g],E=h.indexOf(k);E!==-1&&h.splice(E,1)}}}},{key:"getRect",value:function(i){return null}}]),n})(),en=(function(){function n(i){r(this,n),this.currentTarget=void 0,this.originalEvent=void 0,this.type=void 0,this.originalEvent=i,lt(this,i)}return c(n,[{key:"preventOriginalDefault",value:function(){this.originalEvent.preventDefault()}},{key:"stopPropagation",value:function(){this.originalEvent.stopPropagation()}},{key:"stopImmediatePropagation",value:function(){this.originalEvent.stopImmediatePropagation()}}]),n})();function Xt(n){return b.object(n)?{capture:!!n.capture,passive:!!n.passive}:{capture:!!n,passive:!1}}function oi(n,i){return n===i||(typeof n=="boolean"?!!i.capture===n&&!i.passive:!!n.capture==!!i.capture&&!!n.passive==!!i.passive)}var it={id:"events",install:function(n){var i,a=[],d={},h=[],g={add:x,remove:k,addDelegate:function(A,D,q,X,G){var ie=Xt(G);if(!d[q]){d[q]=[];for(var pe=0;pe<h.length;pe++){var ce=h[pe];x(ce,q,E),x(ce,q,P,!0)}}var xe=d[q],De=Y(xe,(function(Ke){return Ke.selector===A&&Ke.context===D}));De||(De={selector:A,context:D,listeners:[]},xe.push(De)),De.listeners.push({func:X,options:ie})},removeDelegate:function(A,D,q,X,G){var ie,pe=Xt(G),ce=d[q],xe=!1;if(ce)for(ie=ce.length-1;ie>=0;ie--){var De=ce[ie];if(De.selector===A&&De.context===D){for(var Ke=De.listeners,Te=Ke.length-1;Te>=0;Te--){var Ne=Ke[Te];if(Ne.func===X&&oi(Ne.options,pe)){Ke.splice(Te,1),Ke.length||(ce.splice(ie,1),k(D,q,E),k(D,q,P,!0)),xe=!0;break}}if(xe)break}}},delegateListener:E,delegateUseCapture:P,delegatedEvents:d,documents:h,targets:a,supportsOptions:!1,supportsPassive:!1};function x(A,D,q,X){if(A.addEventListener){var G=Xt(X),ie=Y(a,(function(pe){return pe.eventTarget===A}));ie||(ie={eventTarget:A,events:{}},a.push(ie)),ie.events[D]||(ie.events[D]=[]),Y(ie.events[D],(function(pe){return pe.func===q&&oi(pe.options,G)}))||(A.addEventListener(D,q,g.supportsOptions?G:G.capture),ie.events[D].push({func:q,options:G}))}}function k(A,D,q,X){if(A.addEventListener&&A.removeEventListener){var G=ze(a,(function(Ct){return Ct.eventTarget===A})),ie=a[G];if(ie&&ie.events)if(D!=="all"){var pe=!1,ce=ie.events[D];if(ce){if(q==="all"){for(var xe=ce.length-1;xe>=0;xe--){var De=ce[xe];k(A,D,De.func,De.options)}return}for(var Ke=Xt(X),Te=0;Te<ce.length;Te++){var Ne=ce[Te];if(Ne.func===q&&oi(Ne.options,Ke)){A.removeEventListener(D,q,g.supportsOptions?Ke:Ke.capture),ce.splice(Te,1),ce.length===0&&(delete ie.events[D],pe=!0);break}}}pe&&!Object.keys(ie.events).length&&a.splice(G,1)}else for(D in ie.events)ie.events.hasOwnProperty(D)&&k(A,D,"all")}}function E(A,D){for(var q=Xt(D),X=new en(A),G=d[A.type],ie=K(A)[0],pe=ie;b.element(pe);){for(var ce=0;ce<G.length;ce++){var xe=G[ce],De=xe.selector,Ke=xe.context;if(ge(pe,De)&&le(Ke,ie)&&le(Ke,pe)){var Te=xe.listeners;X.currentTarget=pe;for(var Ne=0;Ne<Te.length;Ne++){var Ct=Te[Ne];oi(Ct.options,q)&&Ct.func(X)}}}pe=Re(pe)}}function P(A){return E(A,!0)}return(i=n.document)==null||i.createElement("div").addEventListener("test",null,{get capture(){return g.supportsOptions=!0},get passive(){return g.supportsPassive=!0}}),n.events=g,g}},dt={methodOrder:["simulationResume","mouseOrPen","hasPointer","idle"],search:function(n){for(var i=0,a=dt.methodOrder;i<a.length;i++){var d=a[i],h=dt[d](n);if(h)return h}return null},simulationResume:function(n){var i=n.pointerType,a=n.eventType,d=n.eventTarget,h=n.scope;if(!/down|start/i.test(a))return null;for(var g=0,x=h.interactions.list;g<x.length;g++){var k=x[g],E=d;if(k.simulation&&k.simulation.allowResume&&k.pointerType===i)for(;E;){if(E===k.element)return k;E=Re(E)}}return null},mouseOrPen:function(n){var i,a=n.pointerId,d=n.pointerType,h=n.eventType,g=n.scope;if(d!=="mouse"&&d!=="pen")return null;for(var x=0,k=g.interactions.list;x<k.length;x++){var E=k[x];if(E.pointerType===d){if(E.simulation&&!gi(E,a))continue;if(E.interacting())return E;i||(i=E)}}if(i)return i;for(var P=0,A=g.interactions.list;P<A.length;P++){var D=A[P];if(!(D.pointerType!==d||/down/i.test(h)&&D.simulation))return D}return null},hasPointer:function(n){for(var i=n.pointerId,a=0,d=n.scope.interactions.list;a<d.length;a++){var h=d[a];if(gi(h,i))return h}return null},idle:function(n){for(var i=n.pointerType,a=0,d=n.scope.interactions.list;a<d.length;a++){var h=d[a];if(h.pointers.length===1){var g=h.interactable;if(g&&(!g.options.gesture||!g.options.gesture.enabled))continue}else if(h.pointers.length>=2)continue;if(!h.interacting()&&i===h.pointerType)return h}return null}};function gi(n,i){return n.pointers.some((function(a){return a.id===i}))}var Li=dt,fn=["pointerDown","pointerMove","pointerUp","updatePointer","removePointer","windowBlur"];function Dn(n,i){return function(a){var d=i.interactions.list,h=j(a),g=K(a),x=g[0],k=g[1],E=[];if(/^touch/.test(a.type)){i.prevTouchTime=i.now();for(var P=0,A=a.changedTouches;P<A.length;P++){var D=A[P],q={pointer:D,pointerId:Tt(D),pointerType:h,eventType:a.type,eventTarget:x,curEventTarget:k,scope:i},X=Fn(q);E.push([q.pointer,q.eventTarget,q.curEventTarget,X])}}else{var G=!1;if(!$.supportsPointerEvent&&/mouse/.test(a.type)){for(var ie=0;ie<d.length&&!G;ie++)G=d[ie].pointerType!=="mouse"&&d[ie].pointerIsDown;G=G||i.now()-i.prevTouchTime<500||a.timeStamp===0}if(!G){var pe={pointer:a,pointerId:Tt(a),pointerType:h,eventType:a.type,curEventTarget:k,eventTarget:x,scope:i},ce=Fn(pe);E.push([pe.pointer,pe.eventTarget,pe.curEventTarget,ce])}}for(var xe=0;xe<E.length;xe++){var De=E[xe],Ke=De[0],Te=De[1],Ne=De[2];De[3][n](Ke,a,Te,Ne)}}}function Fn(n){var i=n.pointerType,a=n.scope,d={interaction:Li.search(n),searchDetails:n};return a.fire("interactions:find",d),d.interaction||a.interactions.new({pointerType:i})}function gn(n,i){var a=n.doc,d=n.scope,h=n.options,g=d.interactions.docEvents,x=d.events,k=x[i];for(var E in d.browser.isIOS&&!h.events&&(h.events={passive:!1}),x.delegatedEvents)k(a,E,x.delegateListener),k(a,E,x.delegateUseCapture,!0);for(var P=h&&h.events,A=0;A<g.length;A++){var D=g[A];k(a,D.type,D.listener,P)}}var Jr={id:"core/interactions",install:function(n){for(var i={},a=0;a<fn.length;a++){var d=fn[a];i[d]=Dn(d,n)}var h,g=$.pEventTypes;function x(){for(var k=0,E=n.interactions.list;k<E.length;k++){var P=E[k];if(P.pointerIsDown&&P.pointerType==="touch"&&!P._interacting)for(var A=function(){var X=q[D];n.documents.some((function(G){return le(G.doc,X.downTarget)}))||P.removePointer(X.pointer,X.event)},D=0,q=P.pointers;D<q.length;D++)A()}}(h=B.PointerEvent?[{type:g.down,listener:x},{type:g.down,listener:i.pointerDown},{type:g.move,listener:i.pointerMove},{type:g.up,listener:i.pointerUp},{type:g.cancel,listener:i.pointerUp}]:[{type:"mousedown",listener:i.pointerDown},{type:"mousemove",listener:i.pointerMove},{type:"mouseup",listener:i.pointerUp},{type:"touchstart",listener:x},{type:"touchstart",listener:i.pointerDown},{type:"touchmove",listener:i.pointerMove},{type:"touchend",listener:i.pointerUp},{type:"touchcancel",listener:i.pointerUp}]).push({type:"blur",listener:function(k){for(var E=0,P=n.interactions.list;E<P.length;E++)P[E].documentBlur(k)}}),n.prevTouchTime=0,n.Interaction=(function(k){l(P,k);var E=m(P);function P(){return r(this,P),E.apply(this,arguments)}return c(P,[{key:"pointerMoveTolerance",get:function(){return n.interactions.pointerMoveTolerance},set:function(A){n.interactions.pointerMoveTolerance=A}},{key:"_now",value:function(){return n.now()}}]),P})(Vi),n.interactions={list:[],new:function(k){k.scopeFire=function(P,A){return n.fire(P,A)};var E=new n.Interaction(k);return n.interactions.list.push(E),E},listeners:i,docEvents:h,pointerMoveTolerance:1},n.usePlugin(pi)},listeners:{"scope:add-document":function(n){return gn(n,"add")},"scope:remove-document":function(n){return gn(n,"remove")},"interactable:unset":function(n,i){for(var a=n.interactable,d=i.interactions.list.length-1;d>=0;d--){var h=i.interactions.list[d];h.interactable===a&&(h.stop(),i.fire("interactions:destroy",{interaction:h}),h.destroy(),i.interactions.list.length>2&&i.interactions.list.splice(d,1))}}},onDocSignal:gn,doOnInteractions:Dn,methodNames:fn},Qr=Jr,Jt=(function(n){return n[n.On=0]="On",n[n.Off=1]="Off",n})(Jt||{}),Zr=(function(){function n(i,a,d,h){r(this,n),this.target=void 0,this.options=void 0,this._actions=void 0,this.events=new Mi,this._context=void 0,this._win=void 0,this._doc=void 0,this._scopeEvents=void 0,this._actions=a.actions,this.target=i,this._context=a.context||d,this._win=C(st(i)?this._context:i),this._doc=this._win.document,this._scopeEvents=h,this.set(a)}return c(n,[{key:"_defaults",get:function(){return{base:{},perAction:{},actions:{}}}},{key:"setOnEvents",value:function(i,a){return b.func(a.onstart)&&this.on("".concat(i,"start"),a.onstart),b.func(a.onmove)&&this.on("".concat(i,"move"),a.onmove),b.func(a.onend)&&this.on("".concat(i,"end"),a.onend),b.func(a.oninertiastart)&&this.on("".concat(i,"inertiastart"),a.oninertiastart),this}},{key:"updatePerActionListeners",value:function(i,a,d){var h,g=this,x=(h=this._actions.map[i])==null?void 0:h.filterEventType,k=function(E){return(x==null||x(E))&&Ut(E,g._actions)};(b.array(a)||b.object(a))&&this._onOff(Jt.Off,i,a,void 0,k),(b.array(d)||b.object(d))&&this._onOff(Jt.On,i,d,void 0,k)}},{key:"setPerAction",value:function(i,a){var d=this._defaults;for(var h in a){var g=h,x=this.options[i],k=a[g];g==="listeners"&&this.updatePerActionListeners(i,x.listeners,k),b.array(k)?x[g]=de(k):b.plainObject(k)?(x[g]=re(x[g]||{},Vt(k)),b.object(d.perAction[g])&&"enabled"in d.perAction[g]&&(x[g].enabled=k.enabled!==!1)):b.bool(k)&&b.object(d.perAction[g])?x[g].enabled=k:x[g]=k}}},{key:"getRect",value:function(i){return i=i||(b.element(this.target)?this.target:null),b.string(this.target)&&(i=i||this._context.querySelector(this.target)),Ue(i)}},{key:"rectChecker",value:function(i){var a=this;return b.func(i)?(this.getRect=function(d){var h=re({},i.apply(a,d));return"width"in h||(h.width=h.right-h.left,h.height=h.bottom-h.top),h},this):i===null?(delete this.getRect,this):this.getRect}},{key:"_backCompatOption",value:function(i,a){if(st(a)||b.object(a)){for(var d in this.options[i]=a,this._actions.map)this.options[d][i]=a;return this}return this.options[i]}},{key:"origin",value:function(i){return this._backCompatOption("origin",i)}},{key:"deltaSource",value:function(i){return i==="page"||i==="client"?(this.options.deltaSource=i,this):this.options.deltaSource}},{key:"getAllElements",value:function(){var i=this.target;return b.string(i)?Array.from(this._context.querySelectorAll(i)):b.func(i)&&i.getAllElements?i.getAllElements():b.element(i)?[i]:[]}},{key:"context",value:function(){return this._context}},{key:"inContext",value:function(i){return this._context===i.ownerDocument||le(this._context,i)}},{key:"testIgnoreAllow",value:function(i,a,d){return!this.testIgnore(i.ignoreFrom,a,d)&&this.testAllow(i.allowFrom,a,d)}},{key:"testAllow",value:function(i,a,d){return!i||!!b.element(d)&&(b.string(i)?He(d,i,a):!!b.element(i)&&le(i,d))}},{key:"testIgnore",value:function(i,a,d){return!(!i||!b.element(d))&&(b.string(i)?He(d,i,a):!!b.element(i)&&le(i,d))}},{key:"fire",value:function(i){return this.events.fire(i),this}},{key:"_onOff",value:function(i,a,d,h,g){b.object(a)&&!b.array(a)&&(h=d,d=null);var x=Le(a,d,g);for(var k in x){k==="wheel"&&(k=$.wheelEvent);for(var E=0,P=x[k];E<P.length;E++){var A=P[E];Ut(k,this._actions)?this.events[i===Jt.On?"on":"off"](k,A):b.string(this.target)?this._scopeEvents[i===Jt.On?"addDelegate":"removeDelegate"](this.target,this._context,k,A,h):this._scopeEvents[i===Jt.On?"add":"remove"](this.target,k,A,h)}}return this}},{key:"on",value:function(i,a,d){return this._onOff(Jt.On,i,a,d)}},{key:"off",value:function(i,a,d){return this._onOff(Jt.Off,i,a,d)}},{key:"set",value:function(i){var a=this._defaults;for(var d in b.object(i)||(i={}),this.options=Vt(a.base),this._actions.methodDict){var h=d,g=this._actions.methodDict[h];this.options[h]={},this.setPerAction(h,re(re({},a.perAction),a.actions[h])),this[g](i[h])}for(var x in i)x!=="getRect"?b.func(this[x])&&this[x](i[x]):this.rectChecker(i.getRect);return this}},{key:"unset",value:function(){if(b.string(this.target))for(var i in this._scopeEvents.delegatedEvents)for(var a=this._scopeEvents.delegatedEvents[i],d=a.length-1;d>=0;d--){var h=a[d],g=h.selector,x=h.context,k=h.listeners;g===this.target&&x===this._context&&a.splice(d,1);for(var E=k.length-1;E>=0;E--)this._scopeEvents.removeDelegate(this.target,this._context,i,k[E][0],k[E][1])}else this._scopeEvents.remove(this.target,"all")}}]),n})(),ea=(function(){function n(i){var a=this;r(this,n),this.list=[],this.selectorMap={},this.scope=void 0,this.scope=i,i.addListeners({"interactable:unset":function(d){var h=d.interactable,g=h.target,x=b.string(g)?a.selectorMap[g]:g[a.scope.id],k=ze(x,(function(E){return E===h}));x.splice(k,1)}})}return c(n,[{key:"new",value:function(i,a){a=re(a||{},{actions:this.scope.actions});var d=new this.scope.Interactable(i,a,this.scope.document,this.scope.events);return this.scope.addDocument(d._doc),this.list.push(d),b.string(i)?(this.selectorMap[i]||(this.selectorMap[i]=[]),this.selectorMap[i].push(d)):(d.target[this.scope.id]||Object.defineProperty(i,this.scope.id,{value:[],configurable:!0}),i[this.scope.id].push(d)),this.scope.fire("interactable:new",{target:i,options:a,interactable:d,win:this.scope._win}),d}},{key:"getExisting",value:function(i,a){var d=a&&a.context||this.scope.document,h=b.string(i),g=h?this.selectorMap[i]:i[this.scope.id];if(g)return Y(g,(function(x){return x._context===d&&(h||x.inContext(i))}))}},{key:"forEachMatch",value:function(i,a){for(var d=0,h=this.list;d<h.length;d++){var g=h[d],x=void 0;if((b.string(g.target)?b.element(i)&&ge(i,g.target):i===g.target)&&g.inContext(i)&&(x=a(g)),x!==void 0)return x}}}]),n})(),ta=(function(){function n(){var i=this;r(this,n),this.id="__interact_scope_".concat(Math.floor(100*Math.random())),this.isInitialized=!1,this.listenerMaps=[],this.browser=$,this.defaults=Vt(Si),this.Eventable=Mi,this.actions={map:{},phases:{start:!0,move:!0,end:!0},methodDict:{},phaselessTypes:{}},this.interactStatic=(function(d){var h=function g(x,k){var E=d.interactables.getExisting(x,k);return E||((E=d.interactables.new(x,k)).events.global=g.globalEvents),E};return h.getPointerAverage=yt,h.getTouchBBox=It,h.getTouchDistance=Mt,h.getTouchAngle=me,h.getElementRect=Ue,h.getElementClientRect=Oe,h.matchesSelector=ge,h.closest=_e,h.globalEvents={},h.version="1.10.27",h.scope=d,h.use=function(g,x){return this.scope.usePlugin(g,x),this},h.isSet=function(g,x){return!!this.scope.interactables.get(g,x&&x.context)},h.on=ue((function(g,x,k){if(b.string(g)&&g.search(" ")!==-1&&(g=g.trim().split(/ +/)),b.array(g)){for(var E=0,P=g;E<P.length;E++){var A=P[E];this.on(A,x,k)}return this}if(b.object(g)){for(var D in g)this.on(D,g[D],x);return this}return Ut(g,this.scope.actions)?this.globalEvents[g]?this.globalEvents[g].push(x):this.globalEvents[g]=[x]:this.scope.events.add(this.scope.document,g,x,{options:k}),this}),"The interact.on() method is being deprecated"),h.off=ue((function(g,x,k){if(b.string(g)&&g.search(" ")!==-1&&(g=g.trim().split(/ +/)),b.array(g)){for(var E=0,P=g;E<P.length;E++){var A=P[E];this.off(A,x,k)}return this}if(b.object(g)){for(var D in g)this.off(D,g[D],x);return this}var q;return Ut(g,this.scope.actions)?g in this.globalEvents&&(q=this.globalEvents[g].indexOf(x))!==-1&&this.globalEvents[g].splice(q,1):this.scope.events.remove(this.scope.document,g,x,k),this}),"The interact.off() method is being deprecated"),h.debug=function(){return this.scope},h.supportsTouch=function(){return $.supportsTouch},h.supportsPointerEvent=function(){return $.supportsPointerEvent},h.stop=function(){for(var g=0,x=this.scope.interactions.list;g<x.length;g++)x[g].stop();return this},h.pointerMoveTolerance=function(g){return b.number(g)?(this.scope.interactions.pointerMoveTolerance=g,this):this.scope.interactions.pointerMoveTolerance},h.addDocument=function(g,x){this.scope.addDocument(g,x)},h.removeDocument=function(g){this.scope.removeDocument(g)},h})(this),this.InteractEvent=hi,this.Interactable=void 0,this.interactables=new ea(this),this._win=void 0,this.document=void 0,this.window=void 0,this.documents=[],this._plugins={list:[],map:{}},this.onWindowUnload=function(d){return i.removeDocument(d.target)};var a=this;this.Interactable=(function(d){l(g,d);var h=m(g);function g(){return r(this,g),h.apply(this,arguments)}return c(g,[{key:"_defaults",get:function(){return a.defaults}},{key:"set",value:function(x){return y(u(g.prototype),"set",this).call(this,x),a.fire("interactable:set",{options:x,interactable:this}),this}},{key:"unset",value:function(){y(u(g.prototype),"unset",this).call(this);var x=a.interactables.list.indexOf(this);x<0||(a.interactables.list.splice(x,1),a.fire("interactable:unset",{interactable:this}))}}]),g})(Zr)}return c(n,[{key:"addListeners",value:function(i,a){this.listenerMaps.push({id:a,map:i})}},{key:"fire",value:function(i,a){for(var d=0,h=this.listenerMaps;d<h.length;d++){var g=h[d].map[i];if(g&&g(a,this,i)===!1)return!1}}},{key:"init",value:function(i){return this.isInitialized?this:(function(a,d){return a.isInitialized=!0,b.window(d)&&R(d),B.init(d),$.init(d),J.init(d),a.window=d,a.document=d.document,a.usePlugin(Qr),a.usePlugin(it),a})(this,i)}},{key:"pluginIsInstalled",value:function(i){var a=i.id;return a?!!this._plugins.map[a]:this._plugins.list.indexOf(i)!==-1}},{key:"usePlugin",value:function(i,a){if(!this.isInitialized)return this;if(this.pluginIsInstalled(i))return this;if(i.id&&(this._plugins.map[i.id]=i),this._plugins.list.push(i),i.install&&i.install(this,a),i.listeners&&i.before){for(var d=0,h=this.listenerMaps.length,g=i.before.reduce((function(k,E){return k[E]=!0,k[Bn(E)]=!0,k}),{});d<h;d++){var x=this.listenerMaps[d].id;if(x&&(g[x]||g[Bn(x)]))break}this.listenerMaps.splice(d,0,{id:i.id,map:i.listeners})}else i.listeners&&this.listenerMaps.push({id:i.id,map:i.listeners});return this}},{key:"addDocument",value:function(i,a){if(this.getDocIndex(i)!==-1)return!1;var d=C(i);a=a?re({},a):{},this.documents.push({doc:i,options:a}),this.events.documents.push(i),i!==this.document&&this.events.add(d,"unload",this.onWindowUnload),this.fire("scope:add-document",{doc:i,window:d,scope:this,options:a})}},{key:"removeDocument",value:function(i){var a=this.getDocIndex(i),d=C(i),h=this.documents[a].options;this.events.remove(d,"unload",this.onWindowUnload),this.documents.splice(a,1),this.events.documents.splice(a,1),this.fire("scope:remove-document",{doc:i,window:d,scope:this,options:h})}},{key:"getDocIndex",value:function(i){for(var a=0;a<this.documents.length;a++)if(this.documents[a].doc===i)return a;return-1}},{key:"getDocOptions",value:function(i){var a=this.getDocIndex(i);return a===-1?null:this.documents[a].options}},{key:"now",value:function(){return(this.window.Date||Date).now()}}]),n})();function Bn(n){return n&&n.replace(/\/.*$/,"")}var Nn=new ta,kt=Nn.interactStatic,ia=typeof globalThis!="undefined"?globalThis:window;Nn.init(ia);var na=Object.freeze({__proto__:null,edgeTarget:function(){},elements:function(){},grid:function(n){var i=[["x","y"],["left","top"],["right","bottom"],["width","height"]].filter((function(d){var h=d[0],g=d[1];return h in n||g in n})),a=function(d,h){for(var g=n.range,x=n.limits,k=x===void 0?{left:-1/0,right:1/0,top:-1/0,bottom:1/0}:x,E=n.offset,P=E===void 0?{x:0,y:0}:E,A={range:g,grid:n,x:null,y:null},D=0;D<i.length;D++){var q=i[D],X=q[0],G=q[1],ie=Math.round((d-P.x)/n[X]),pe=Math.round((h-P.y)/n[G]);A[X]=Math.max(k.left,Math.min(k.right,ie*n[X]+P.x)),A[G]=Math.max(k.top,Math.min(k.bottom,pe*n[G]+P.y))}return A};return a.grid=n,a.coordFields=i,a}}),ra={id:"snappers",install:function(n){var i=n.interactStatic;i.snappers=re(i.snappers||{},na),i.createSnapGrid=i.snappers.grid}},aa=ra,oa={start:function(n){var i=n.state,a=n.rect,d=n.edges,h=n.pageCoords,g=i.options,x=g.ratio,k=g.enabled,E=i.options,P=E.equalDelta,A=E.modifiers;x==="preserve"&&(x=a.width/a.height),i.startCoords=re({},h),i.startRect=re({},a),i.ratio=x,i.equalDelta=P;var D=i.linkedEdges={top:d.top||d.left&&!d.bottom,left:d.left||d.top&&!d.right,bottom:d.bottom||d.right&&!d.top,right:d.right||d.bottom&&!d.left};if(i.xIsPrimaryAxis=!(!d.left&&!d.right),i.equalDelta){var q=(D.left?1:-1)*(D.top?1:-1);i.edgeSign={x:q,y:q}}else i.edgeSign={x:D.left?-1:1,y:D.top?-1:1};if(k!==!1&&re(d,D),A!=null&&A.length){var X=new xi(n.interaction);X.copyFrom(n.interaction.modification),X.prepareStates(A),i.subModification=X,X.startAll(p({},n))}},set:function(n){var i=n.state,a=n.rect,d=n.coords,h=i.linkedEdges,g=re({},d),x=i.equalDelta?sa:ca;if(re(n.edges,h),x(i,i.xIsPrimaryAxis,d,a),!i.subModification)return null;var k=re({},a);$e(h,k,{x:d.x-g.x,y:d.y-g.y});var E=i.subModification.setAll(p(p({},n),{},{rect:k,edges:h,pageCoords:d,prevCoords:d,prevRect:k})),P=E.delta;return E.changed&&(x(i,Math.abs(P.x)>Math.abs(P.y),E.coords,E.rect),re(d,E.coords)),E.eventProps},defaults:{ratio:"preserve",equalDelta:!1,modifiers:[],enabled:!1}};function sa(n,i,a){var d=n.startCoords,h=n.edgeSign;i?a.y=d.y+(a.x-d.x)*h.y:a.x=d.x+(a.y-d.y)*h.x}function ca(n,i,a,d){var h=n.startRect,g=n.startCoords,x=n.ratio,k=n.edgeSign;if(i){var E=d.width/x;a.y=g.y+(E-h.height)*k.y}else{var P=d.height*x;a.x=g.x+(P-h.width)*k.x}}var la=Ht(oa,"aspectRatio"),qn=function(){};qn._defaults={};var tn=qn;function si(n,i,a){return b.func(n)?ct(n,i.interactable,i.element,[a.x,a.y,i]):ct(n,i.interactable,i.element)}var nn={start:function(n){var i=n.rect,a=n.startOffset,d=n.state,h=n.interaction,g=n.pageCoords,x=d.options,k=x.elementRect,E=re({left:0,top:0,right:0,bottom:0},x.offset||{});if(i&&k){var P=si(x.restriction,h,g);if(P){var A=P.right-P.left-i.width,D=P.bottom-P.top-i.height;A<0&&(E.left+=A,E.right+=A),D<0&&(E.top+=D,E.bottom+=D)}E.left+=a.left-i.width*k.left,E.top+=a.top-i.height*k.top,E.right+=a.right-i.width*(1-k.right),E.bottom+=a.bottom-i.height*(1-k.bottom)}d.offset=E},set:function(n){var i=n.coords,a=n.interaction,d=n.state,h=d.options,g=d.offset,x=si(h.restriction,a,i);if(x){var k=(function(E){return!E||"left"in E&&"top"in E||((E=re({},E)).left=E.x||0,E.top=E.y||0,E.right=E.right||E.left+E.width,E.bottom=E.bottom||E.top+E.height),E})(x);i.x=Math.max(Math.min(k.right-g.right,i.x),k.left+g.left),i.y=Math.max(Math.min(k.bottom-g.bottom,i.y),k.top+g.top)}},defaults:{restriction:null,elementRect:null,offset:null,endOnly:!1,enabled:!1}},da=Ht(nn,"restrict"),Hn={top:1/0,left:1/0,bottom:-1/0,right:-1/0},jn={top:-1/0,left:-1/0,bottom:1/0,right:1/0};function Wn(n,i){for(var a=0,d=["top","left","bottom","right"];a<d.length;a++){var h=d[a];h in n||(n[h]=i[h])}return n}var Pi={noInner:Hn,noOuter:jn,start:function(n){var i,a=n.interaction,d=n.startOffset,h=n.state,g=h.options;g&&(i=Ie(si(g.offset,a,a.coords.start.page))),i=i||{x:0,y:0},h.offset={top:i.y+d.top,left:i.x+d.left,bottom:i.y-d.bottom,right:i.x-d.right}},set:function(n){var i=n.coords,a=n.edges,d=n.interaction,h=n.state,g=h.offset,x=h.options;if(a){var k=re({},i),E=si(x.inner,d,k)||{},P=si(x.outer,d,k)||{};Wn(E,Hn),Wn(P,jn),a.top?i.y=Math.min(Math.max(P.top+g.top,k.y),E.top+g.top):a.bottom&&(i.y=Math.max(Math.min(P.bottom+g.bottom,k.y),E.bottom+g.bottom)),a.left?i.x=Math.min(Math.max(P.left+g.left,k.x),E.left+g.left):a.right&&(i.x=Math.max(Math.min(P.right+g.right,k.x),E.right+g.right))}},defaults:{inner:null,outer:null,offset:null,endOnly:!1,enabled:!1}},ua=Ht(Pi,"restrictEdges"),pa=re({get elementRect(){return{top:0,left:0,bottom:1,right:1}},set elementRect(n){}},nn.defaults),ha=Ht({start:nn.start,set:nn.set,defaults:pa},"restrictRect"),fa={width:-1/0,height:-1/0},ga={width:1/0,height:1/0},ma=Ht({start:function(n){return Pi.start(n)},set:function(n){var i=n.interaction,a=n.state,d=n.rect,h=n.edges,g=a.options;if(h){var x=ae(si(g.min,i,n.coords))||fa,k=ae(si(g.max,i,n.coords))||ga;a.options={endOnly:g.endOnly,inner:re({},Pi.noInner),outer:re({},Pi.noOuter)},h.top?(a.options.inner.top=d.bottom-x.height,a.options.outer.top=d.bottom-k.height):h.bottom&&(a.options.inner.bottom=d.top+x.height,a.options.outer.bottom=d.top+k.height),h.left?(a.options.inner.left=d.right-x.width,a.options.outer.left=d.right-k.width):h.right&&(a.options.inner.right=d.left+x.width,a.options.outer.right=d.left+k.width),Pi.set(n),a.options=g}},defaults:{min:null,max:null,endOnly:!1,enabled:!1}},"restrictSize"),mn={start:function(n){var i,a=n.interaction,d=n.interactable,h=n.element,g=n.rect,x=n.state,k=n.startOffset,E=x.options,P=E.offsetWithOrigin?(function(q){var X=q.interaction.element,G=Ie(ct(q.state.options.origin,null,null,[X])),ie=G||Ce(q.interactable,X,q.interaction.prepared.name);return ie})(n):{x:0,y:0};if(E.offset==="startCoords")i={x:a.coords.start.page.x,y:a.coords.start.page.y};else{var A=ct(E.offset,d,h,[a]);(i=Ie(A)||{x:0,y:0}).x+=P.x,i.y+=P.y}var D=E.relativePoints;x.offsets=g&&D&&D.length?D.map((function(q,X){return{index:X,relativePoint:q,x:k.left-g.width*q.x+i.x,y:k.top-g.height*q.y+i.y}})):[{index:0,relativePoint:null,x:i.x,y:i.y}]},set:function(n){var i=n.interaction,a=n.coords,d=n.state,h=d.options,g=d.offsets,x=Ce(i.interactable,i.element,i.prepared.name),k=re({},a),E=[];h.offsetWithOrigin||(k.x-=x.x,k.y-=x.y);for(var P=0,A=g;P<A.length;P++)for(var D=A[P],q=k.x-D.x,X=k.y-D.y,G=0,ie=h.targets.length;G<ie;G++){var pe=h.targets[G],ce=void 0;(ce=b.func(pe)?pe(q,X,i._proxy,D,G):pe)&&E.push({x:(b.number(ce.x)?ce.x:q)+D.x,y:(b.number(ce.y)?ce.y:X)+D.y,range:b.number(ce.range)?ce.range:h.range,source:pe,index:G,offset:D})}for(var xe={target:null,inRange:!1,distance:0,range:0,delta:{x:0,y:0}},De=0;De<E.length;De++){var Ke=E[De],Te=Ke.range,Ne=Ke.x-k.x,Ct=Ke.y-k.y,at=gt(Ne,Ct),Rt=at<=Te;Te===1/0&&xe.inRange&&xe.range!==1/0&&(Rt=!1),xe.target&&!(Rt?xe.inRange&&Te!==1/0?at/Te<xe.distance/xe.range:Te===1/0&&xe.range!==1/0||at<xe.distance:!xe.inRange&&at<xe.distance)||(xe.target=Ke,xe.distance=at,xe.range=Te,xe.inRange=Rt,xe.delta.x=Ne,xe.delta.y=Ct)}return xe.inRange&&(a.x=xe.target.x,a.y=xe.target.y),d.closest=xe,xe},defaults:{range:1/0,targets:null,offset:null,offsetWithOrigin:!0,origin:null,relativePoints:null,endOnly:!1,enabled:!1}},ya=Ht(mn,"snap"),rn={start:function(n){var i=n.state,a=n.edges,d=i.options;if(!a)return null;n.state={options:{targets:null,relativePoints:[{x:a.left?0:1,y:a.top?0:1}],offset:d.offset||"self",origin:{x:0,y:0},range:d.range}},i.targetFields=i.targetFields||[["width","height"],["x","y"]],mn.start(n),i.offsets=n.state.offsets,n.state=i},set:function(n){var i=n.interaction,a=n.state,d=n.coords,h=a.options,g=a.offsets,x={x:d.x-g[0].x,y:d.y-g[0].y};a.options=re({},h),a.options.targets=[];for(var k=0,E=h.targets||[];k<E.length;k++){var P=E[k],A=void 0;if(A=b.func(P)?P(x.x,x.y,i):P){for(var D=0,q=a.targetFields;D<q.length;D++){var X=q[D],G=X[0],ie=X[1];if(G in A||ie in A){A.x=A[G],A.y=A[ie];break}}a.options.targets.push(A)}}var pe=mn.set(n);return a.options=h,pe},defaults:{range:1/0,targets:null,offset:null,endOnly:!1,enabled:!1}},va=Ht(rn,"snapSize"),yn={aspectRatio:la,restrictEdges:ua,restrict:da,restrictRect:ha,restrictSize:ma,snapEdges:Ht({start:function(n){var i=n.edges;return i?(n.state.targetFields=n.state.targetFields||[[i.left?"left":"right",i.top?"top":"bottom"]],rn.start(n)):null},set:rn.set,defaults:re(Vt(rn.defaults),{targets:void 0,range:void 0,offset:{x:0,y:0}})},"snapEdges"),snap:ya,snapSize:va,spring:tn,avoid:tn,transform:tn,rubberband:tn},ba={id:"modifiers",install:function(n){var i=n.interactStatic;for(var a in n.usePlugin(wi),n.usePlugin(aa),i.modifiers=yn,yn){var d=yn[a],h=d._defaults,g=d._methods;h._methods=g,n.defaults.perAction[a]=h}}},_a=ba,Yn=(function(n){l(a,n);var i=m(a);function a(d,h,g,x,k,E){var P;if(r(this,a),lt(v(P=i.call(this,k)),g),g!==h&&lt(v(P),h),P.timeStamp=E,P.originalEvent=g,P.type=d,P.pointerId=Tt(h),P.pointerType=j(h),P.target=x,P.currentTarget=null,d==="tap"){var A=k.getPointerIndex(h);P.dt=P.timeStamp-k.pointers[A].downTime;var D=P.timeStamp-k.tapTime;P.double=!!k.prevTap&&k.prevTap.type!=="doubletap"&&k.prevTap.target===P.target&&D<500}else d==="doubletap"&&(P.dt=h.timeStamp-k.tapTime,P.double=!0);return P}return c(a,[{key:"_subtractOrigin",value:function(d){var h=d.x,g=d.y;return this.pageX-=h,this.pageY-=g,this.clientX-=h,this.clientY-=g,this}},{key:"_addOrigin",value:function(d){var h=d.x,g=d.y;return this.pageX+=h,this.pageY+=g,this.clientX+=h,this.clientY+=g,this}},{key:"preventDefault",value:function(){this.originalEvent.preventDefault()}}]),a})(ye),Ri={id:"pointer-events/base",before:["inertia","modifiers","auto-start","actions"],install:function(n){n.pointerEvents=Ri,n.defaults.actions.pointerEvents=Ri.defaults,re(n.actions.phaselessTypes,Ri.types)},listeners:{"interactions:new":function(n){var i=n.interaction;i.prevTap=null,i.tapTime=0},"interactions:update-pointer":function(n){var i=n.down,a=n.pointerInfo;!i&&a.hold||(a.hold={duration:1/0,timeout:null})},"interactions:move":function(n,i){var a=n.interaction,d=n.pointer,h=n.event,g=n.eventTarget;n.duplicate||a.pointerIsDown&&!a.pointerWasMoved||(a.pointerIsDown&&vn(n),Qt({interaction:a,pointer:d,event:h,eventTarget:g,type:"move"},i))},"interactions:down":function(n,i){(function(a,d){for(var h=a.interaction,g=a.pointer,x=a.event,k=a.eventTarget,E=a.pointerIndex,P=h.pointers[E].hold,A=ot(k),D={interaction:h,pointer:g,event:x,eventTarget:k,type:"hold",targets:[],path:A,node:null},q=0;q<A.length;q++){var X=A[q];D.node=X,d.fire("pointerEvents:collect-targets",D)}if(D.targets.length){for(var G=1/0,ie=0,pe=D.targets;ie<pe.length;ie++){var ce=pe[ie].eventable.options.holdDuration;ce<G&&(G=ce)}P.duration=G,P.timeout=setTimeout((function(){Qt({interaction:h,eventTarget:k,pointer:g,event:x,type:"hold"},d)}),G)}})(n,i),Qt(n,i)},"interactions:up":function(n,i){vn(n),Qt(n,i),(function(a,d){var h=a.interaction,g=a.pointer,x=a.event,k=a.eventTarget;h.pointerWasMoved||Qt({interaction:h,eventTarget:k,pointer:g,event:x,type:"tap"},d)})(n,i)},"interactions:cancel":function(n,i){vn(n),Qt(n,i)}},PointerEvent:Yn,fire:Qt,collectEventTargets:$n,defaults:{holdDuration:600,ignoreFrom:null,allowFrom:null,origin:{x:0,y:0}},types:{down:!0,move:!0,up:!0,cancel:!0,tap:!0,doubletap:!0,hold:!0}};function Qt(n,i){var a=n.interaction,d=n.pointer,h=n.event,g=n.eventTarget,x=n.type,k=n.targets,E=k===void 0?$n(n,i):k,P=new Yn(x,d,h,g,a,i.now());i.fire("pointerEvents:new",{pointerEvent:P});for(var A={interaction:a,pointer:d,event:h,eventTarget:g,targets:E,type:x,pointerEvent:P},D=0;D<E.length;D++){var q=E[D];for(var X in q.props||{})P[X]=q.props[X];var G=Ce(q.eventable,q.node);if(P._subtractOrigin(G),P.eventable=q.eventable,P.currentTarget=q.node,q.eventable.fire(P),P._addOrigin(G),P.immediatePropagationStopped||P.propagationStopped&&D+1<E.length&&E[D+1].node!==P.currentTarget)break}if(i.fire("pointerEvents:fired",A),x==="tap"){var ie=P.double?Qt({interaction:a,pointer:d,event:h,eventTarget:g,type:"doubletap"},i):P;a.prevTap=ie,a.tapTime=ie.timeStamp}return P}function $n(n,i){var a=n.interaction,d=n.pointer,h=n.event,g=n.eventTarget,x=n.type,k=a.getPointerIndex(d),E=a.pointers[k];if(x==="tap"&&(a.pointerWasMoved||!E||E.downTarget!==g))return[];for(var P=ot(g),A={interaction:a,pointer:d,event:h,eventTarget:g,type:x,path:P,targets:[],node:null},D=0;D<P.length;D++){var q=P[D];A.node=q,i.fire("pointerEvents:collect-targets",A)}return x==="hold"&&(A.targets=A.targets.filter((function(X){var G,ie;return X.eventable.options.holdDuration===((G=a.pointers[k])==null||(ie=G.hold)==null?void 0:ie.duration)}))),A.targets}function vn(n){var i=n.interaction,a=n.pointerIndex,d=i.pointers[a].hold;d&&d.timeout&&(clearTimeout(d.timeout),d.timeout=null)}var xa=Object.freeze({__proto__:null,default:Ri});function wa(n){var i=n.interaction;i.holdIntervalHandle&&(clearInterval(i.holdIntervalHandle),i.holdIntervalHandle=null)}var Sa={id:"pointer-events/holdRepeat",install:function(n){n.usePlugin(Ri);var i=n.pointerEvents;i.defaults.holdRepeatInterval=0,i.types.holdrepeat=n.actions.phaselessTypes.holdrepeat=!0},listeners:["move","up","cancel","endall"].reduce((function(n,i){return n["pointerEvents:".concat(i)]=wa,n}),{"pointerEvents:new":function(n){var i=n.pointerEvent;i.type==="hold"&&(i.count=(i.count||0)+1)},"pointerEvents:fired":function(n,i){var a=n.interaction,d=n.pointerEvent,h=n.eventTarget,g=n.targets;if(d.type==="hold"&&g.length){var x=g[0].eventable.options.holdRepeatInterval;x<=0||(a.holdIntervalHandle=setTimeout((function(){i.pointerEvents.fire({interaction:a,eventTarget:h,type:"hold",pointer:d,event:d},i)}),x))}}})},ka=Sa,Ca={id:"pointer-events/interactableTargets",install:function(n){var i=n.Interactable;i.prototype.pointerEvents=function(d){return re(this.events.options,d),this};var a=i.prototype._backCompatOption;i.prototype._backCompatOption=function(d,h){var g=a.call(this,d,h);return g===this&&(this.events.options[d]=h),g}},listeners:{"pointerEvents:collect-targets":function(n,i){var a=n.targets,d=n.node,h=n.type,g=n.eventTarget;i.interactables.forEachMatch(d,(function(x){var k=x.events,E=k.options;k.types[h]&&k.types[h].length&&x.testIgnoreAllow(E,d,g)&&a.push({node:d,eventable:k,props:{interactable:x}})}))},"interactable:new":function(n){var i=n.interactable;i.events.getRect=function(a){return i.getRect(a)}},"interactable:set":function(n,i){var a=n.interactable,d=n.options;re(a.events.options,i.pointerEvents.defaults),re(a.events.options,d.pointerEvents||{})}}},Ea=Ca,Aa={id:"pointer-events",install:function(n){n.usePlugin(xa),n.usePlugin(ka),n.usePlugin(Ea)}},Ta=Aa,Oa={id:"reflow",install:function(n){var i=n.Interactable;n.actions.phases.reflow=!0,i.prototype.reflow=function(a){return(function(d,h,g){for(var x=d.getAllElements(),k=g.window.Promise,E=k?[]:null,P=function(){var D=x[A],q=d.getRect(D);if(!q)return 1;var X,G=Y(g.interactions.list,(function(ce){return ce.interacting()&&ce.interactable===d&&ce.element===D&&ce.prepared.name===h.name}));if(G)G.move(),E&&(X=G._reflowPromise||new k((function(ce){G._reflowResolve=ce})));else{var ie=ae(q),pe=(function(ce){return{coords:ce,get page(){return this.coords.page},get client(){return this.coords.client},get timeStamp(){return this.coords.timeStamp},get pageX(){return this.coords.page.x},get pageY(){return this.coords.page.y},get clientX(){return this.coords.client.x},get clientY(){return this.coords.client.y},get pointerId(){return this.coords.pointerId},get target(){return this.coords.target},get type(){return this.coords.type},get pointerType(){return this.coords.pointerType},get buttons(){return this.coords.buttons},preventDefault:function(){}}})({page:{x:ie.x,y:ie.y},client:{x:ie.x,y:ie.y},timeStamp:g.now()});X=(function(ce,xe,De,Ke,Te){var Ne=ce.interactions.new({pointerType:"reflow"}),Ct={interaction:Ne,event:Te,pointer:Te,eventTarget:De,phase:"reflow"};Ne.interactable=xe,Ne.element=De,Ne.prevEvent=Te,Ne.updatePointer(Te,Te,De,!0),xt(Ne.coords.delta),be(Ne.prepared,Ke),Ne._doPhase(Ct);var at=ce.window,Rt=at.Promise,Nt=Rt?new Rt((function(Yt){Ne._reflowResolve=Yt})):void 0;return Ne._reflowPromise=Nt,Ne.start(Ke,xe,De),Ne._interacting?(Ne.move(Ct),Ne.end(Te)):(Ne.stop(),Ne._reflowResolve()),Ne.removePointer(Te,Te),Nt})(g,d,D,h,pe)}E&&E.push(X)},A=0;A<x.length&&!P();A++);return E&&k.all(E).then((function(){return d}))})(this,a,n)}},listeners:{"interactions:stop":function(n,i){var a=n.interaction;a.pointerType==="reflow"&&(a._reflowResolve&&a._reflowResolve(),(function(d,h){d.splice(d.indexOf(h),1)})(i.interactions.list,a))}}},za=Oa;if(kt.use(pi),kt.use(Ai),kt.use(Ta),kt.use(Oi),kt.use(_a),kt.use(Wi),kt.use(ne),kt.use(ke),kt.use(za),kt.default=kt,(typeof ci=="undefined"?"undefined":t(ci))==="object"&&ci)try{ci.exports=kt}catch{}return kt.default=kt,kt}))});var Xr=Na(Kn(),1);function cr(e){return typeof e=="undefined"||e===null}function qa(e){return typeof e=="object"&&e!==null}function Ha(e){return Array.isArray(e)?e:cr(e)?[]:[e]}function ja(e,p){var t,r,o,c;if(p)for(c=Object.keys(p),t=0,r=c.length;t<r;t+=1)o=c[t],e[o]=p[o];return e}function Wa(e,p){var t="",r;for(r=0;r<p;r+=1)t+=e;return t}function Ya(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var $a=cr,Ka=qa,Ua=Ha,Va=Wa,Ga=Ya,Xa=ja,vt={isNothing:$a,isObject:Ka,toArray:Ua,repeat:Va,isNegativeZero:Ga,extend:Xa};function lr(e,p){var t="",r=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(t+='in "'+e.mark.name+'" '),t+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!p&&e.mark.snippet&&(t+=`

`+e.mark.snippet),r+" "+t):r}function Fi(e,p){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=p,this.message=lr(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Fi.prototype=Object.create(Error.prototype);Fi.prototype.constructor=Fi;Fi.prototype.toString=function(p){return this.name+": "+lr(this,p)};var Et=Fi;function xn(e,p,t,r,o){var c="",s="",l=Math.floor(o/2)-1;return r-p>l&&(c=" ... ",p=r-l+c.length),t-r>l&&(s=" ...",t=r+l-s.length),{str:c+e.slice(p,t).replace(/\t/g,"\u2192")+s,pos:r-p+c.length}}function wn(e,p){return vt.repeat(" ",p-e.length)+e}function Ja(e,p){if(p=Object.create(p||null),!e.buffer)return null;p.maxLength||(p.maxLength=79),typeof p.indent!="number"&&(p.indent=1),typeof p.linesBefore!="number"&&(p.linesBefore=3),typeof p.linesAfter!="number"&&(p.linesAfter=2);for(var t=/\r?\n|\r|\0/g,r=[0],o=[],c,s=-1;c=t.exec(e.buffer);)o.push(c.index),r.push(c.index+c[0].length),e.position<=c.index&&s<0&&(s=r.length-2);s<0&&(s=r.length-1);var l="",u,f,v=Math.min(e.line+p.linesAfter,o.length).toString().length,m=p.maxLength-(p.indent+v+3);for(u=1;u<=p.linesBefore&&!(s-u<0);u++)f=xn(e.buffer,r[s-u],o[s-u],e.position-(r[s]-r[s-u]),m),l=vt.repeat(" ",p.indent)+wn((e.line-u+1).toString(),v)+" | "+f.str+`
`+l;for(f=xn(e.buffer,r[s],o[s],e.position,m),l+=vt.repeat(" ",p.indent)+wn((e.line+1).toString(),v)+" | "+f.str+`
`,l+=vt.repeat("-",p.indent+v+3+f.pos)+`^
`,u=1;u<=p.linesAfter&&!(s+u>=o.length);u++)f=xn(e.buffer,r[s+u],o[s+u],e.position-(r[s]-r[s+u]),m),l+=vt.repeat(" ",p.indent)+wn((e.line+u+1).toString(),v)+" | "+f.str+`
`;return l.replace(/\n$/,"")}var Qa=Ja,Za=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],eo=["scalar","sequence","mapping"];function to(e){var p={};return e!==null&&Object.keys(e).forEach(function(t){e[t].forEach(function(r){p[String(r)]=t})}),p}function io(e,p){if(p=p||{},Object.keys(p).forEach(function(t){if(Za.indexOf(t)===-1)throw new Et('Unknown option "'+t+'" is met in definition of "'+e+'" YAML type.')}),this.options=p,this.tag=e,this.kind=p.kind||null,this.resolve=p.resolve||function(){return!0},this.construct=p.construct||function(t){return t},this.instanceOf=p.instanceOf||null,this.predicate=p.predicate||null,this.represent=p.represent||null,this.representName=p.representName||null,this.defaultStyle=p.defaultStyle||null,this.multi=p.multi||!1,this.styleAliases=to(p.styleAliases||null),eo.indexOf(this.kind)===-1)throw new Et('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var _t=io;function Un(e,p){var t=[];return e[p].forEach(function(r){var o=t.length;t.forEach(function(c,s){c.tag===r.tag&&c.kind===r.kind&&c.multi===r.multi&&(o=s)}),t[o]=r}),t}function no(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},p,t;function r(o){o.multi?(e.multi[o.kind].push(o),e.multi.fallback.push(o)):e[o.kind][o.tag]=e.fallback[o.tag]=o}for(p=0,t=arguments.length;p<t;p+=1)arguments[p].forEach(r);return e}function kn(e){return this.extend(e)}kn.prototype.extend=function(p){var t=[],r=[];if(p instanceof _t)r.push(p);else if(Array.isArray(p))r=r.concat(p);else if(p&&(Array.isArray(p.implicit)||Array.isArray(p.explicit)))p.implicit&&(t=t.concat(p.implicit)),p.explicit&&(r=r.concat(p.explicit));else throw new Et("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");t.forEach(function(c){if(!(c instanceof _t))throw new Et("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(c.loadKind&&c.loadKind!=="scalar")throw new Et("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(c.multi)throw new Et("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),r.forEach(function(c){if(!(c instanceof _t))throw new Et("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var o=Object.create(kn.prototype);return o.implicit=(this.implicit||[]).concat(t),o.explicit=(this.explicit||[]).concat(r),o.compiledImplicit=Un(o,"implicit"),o.compiledExplicit=Un(o,"explicit"),o.compiledTypeMap=no(o.compiledImplicit,o.compiledExplicit),o};var dr=kn,ur=new _t("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),pr=new _t("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),hr=new _t("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),fr=new dr({explicit:[ur,pr,hr]});function ro(e){if(e===null)return!0;var p=e.length;return p===1&&e==="~"||p===4&&(e==="null"||e==="Null"||e==="NULL")}function ao(){return null}function oo(e){return e===null}var gr=new _t("tag:yaml.org,2002:null",{kind:"scalar",resolve:ro,construct:ao,predicate:oo,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function so(e){if(e===null)return!1;var p=e.length;return p===4&&(e==="true"||e==="True"||e==="TRUE")||p===5&&(e==="false"||e==="False"||e==="FALSE")}function co(e){return e==="true"||e==="True"||e==="TRUE"}function lo(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var mr=new _t("tag:yaml.org,2002:bool",{kind:"scalar",resolve:so,construct:co,predicate:lo,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function uo(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function po(e){return 48<=e&&e<=55}function ho(e){return 48<=e&&e<=57}function fo(e){if(e===null)return!1;var p=e.length,t=0,r=!1,o;if(!p)return!1;if(o=e[t],(o==="-"||o==="+")&&(o=e[++t]),o==="0"){if(t+1===p)return!0;if(o=e[++t],o==="b"){for(t++;t<p;t++)if(o=e[t],o!=="_"){if(o!=="0"&&o!=="1")return!1;r=!0}return r&&o!=="_"}if(o==="x"){for(t++;t<p;t++)if(o=e[t],o!=="_"){if(!uo(e.charCodeAt(t)))return!1;r=!0}return r&&o!=="_"}if(o==="o"){for(t++;t<p;t++)if(o=e[t],o!=="_"){if(!po(e.charCodeAt(t)))return!1;r=!0}return r&&o!=="_"}}if(o==="_")return!1;for(;t<p;t++)if(o=e[t],o!=="_"){if(!ho(e.charCodeAt(t)))return!1;r=!0}return!(!r||o==="_")}function go(e){var p=e,t=1,r;if(p.indexOf("_")!==-1&&(p=p.replace(/_/g,"")),r=p[0],(r==="-"||r==="+")&&(r==="-"&&(t=-1),p=p.slice(1),r=p[0]),p==="0")return 0;if(r==="0"){if(p[1]==="b")return t*parseInt(p.slice(2),2);if(p[1]==="x")return t*parseInt(p.slice(2),16);if(p[1]==="o")return t*parseInt(p.slice(2),8)}return t*parseInt(p,10)}function mo(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!vt.isNegativeZero(e)}var yr=new _t("tag:yaml.org,2002:int",{kind:"scalar",resolve:fo,construct:go,predicate:mo,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),yo=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function vo(e){return!(e===null||!yo.test(e)||e[e.length-1]==="_")}function bo(e){var p,t;return p=e.replace(/_/g,"").toLowerCase(),t=p[0]==="-"?-1:1,"+-".indexOf(p[0])>=0&&(p=p.slice(1)),p===".inf"?t===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:p===".nan"?NaN:t*parseFloat(p,10)}var _o=/^[-+]?[0-9]+e/;function xo(e,p){var t;if(isNaN(e))switch(p){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(p){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(p){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(vt.isNegativeZero(e))return"-0.0";return t=e.toString(10),_o.test(t)?t.replace("e",".e"):t}function wo(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||vt.isNegativeZero(e))}var vr=new _t("tag:yaml.org,2002:float",{kind:"scalar",resolve:vo,construct:bo,predicate:wo,represent:xo,defaultStyle:"lowercase"}),br=fr.extend({implicit:[gr,mr,yr,vr]}),_r=br,xr=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),wr=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function So(e){return e===null?!1:xr.exec(e)!==null||wr.exec(e)!==null}function ko(e){var p,t,r,o,c,s,l,u=0,f=null,v,m,y;if(p=xr.exec(e),p===null&&(p=wr.exec(e)),p===null)throw new Error("Date resolve error");if(t=+p[1],r=+p[2]-1,o=+p[3],!p[4])return new Date(Date.UTC(t,r,o));if(c=+p[4],s=+p[5],l=+p[6],p[7]){for(u=p[7].slice(0,3);u.length<3;)u+="0";u=+u}return p[9]&&(v=+p[10],m=+(p[11]||0),f=(v*60+m)*6e4,p[9]==="-"&&(f=-f)),y=new Date(Date.UTC(t,r,o,c,s,l,u)),f&&y.setTime(y.getTime()-f),y}function Co(e){return e.toISOString()}var Sr=new _t("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:So,construct:ko,instanceOf:Date,represent:Co});function Eo(e){return e==="<<"||e===null}var kr=new _t("tag:yaml.org,2002:merge",{kind:"scalar",resolve:Eo}),On=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function Ao(e){if(e===null)return!1;var p,t,r=0,o=e.length,c=On;for(t=0;t<o;t++)if(p=c.indexOf(e.charAt(t)),!(p>64)){if(p<0)return!1;r+=6}return r%8===0}function To(e){var p,t,r=e.replace(/[\r\n=]/g,""),o=r.length,c=On,s=0,l=[];for(p=0;p<o;p++)p%4===0&&p&&(l.push(s>>16&255),l.push(s>>8&255),l.push(s&255)),s=s<<6|c.indexOf(r.charAt(p));return t=o%4*6,t===0?(l.push(s>>16&255),l.push(s>>8&255),l.push(s&255)):t===18?(l.push(s>>10&255),l.push(s>>2&255)):t===12&&l.push(s>>4&255),new Uint8Array(l)}function Oo(e){var p="",t=0,r,o,c=e.length,s=On;for(r=0;r<c;r++)r%3===0&&r&&(p+=s[t>>18&63],p+=s[t>>12&63],p+=s[t>>6&63],p+=s[t&63]),t=(t<<8)+e[r];return o=c%3,o===0?(p+=s[t>>18&63],p+=s[t>>12&63],p+=s[t>>6&63],p+=s[t&63]):o===2?(p+=s[t>>10&63],p+=s[t>>4&63],p+=s[t<<2&63],p+=s[64]):o===1&&(p+=s[t>>2&63],p+=s[t<<4&63],p+=s[64],p+=s[64]),p}function zo(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var Cr=new _t("tag:yaml.org,2002:binary",{kind:"scalar",resolve:Ao,construct:To,predicate:zo,represent:Oo}),Mo=Object.prototype.hasOwnProperty,Lo=Object.prototype.toString;function Po(e){if(e===null)return!0;var p=[],t,r,o,c,s,l=e;for(t=0,r=l.length;t<r;t+=1){if(o=l[t],s=!1,Lo.call(o)!=="[object Object]")return!1;for(c in o)if(Mo.call(o,c))if(!s)s=!0;else return!1;if(!s)return!1;if(p.indexOf(c)===-1)p.push(c);else return!1}return!0}function Ro(e){return e!==null?e:[]}var Er=new _t("tag:yaml.org,2002:omap",{kind:"sequence",resolve:Po,construct:Ro}),Io=Object.prototype.toString;function Do(e){if(e===null)return!0;var p,t,r,o,c,s=e;for(c=new Array(s.length),p=0,t=s.length;p<t;p+=1){if(r=s[p],Io.call(r)!=="[object Object]"||(o=Object.keys(r),o.length!==1))return!1;c[p]=[o[0],r[o[0]]]}return!0}function Fo(e){if(e===null)return[];var p,t,r,o,c,s=e;for(c=new Array(s.length),p=0,t=s.length;p<t;p+=1)r=s[p],o=Object.keys(r),c[p]=[o[0],r[o[0]]];return c}var Ar=new _t("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:Do,construct:Fo}),Bo=Object.prototype.hasOwnProperty;function No(e){if(e===null)return!0;var p,t=e;for(p in t)if(Bo.call(t,p)&&t[p]!==null)return!1;return!0}function qo(e){return e!==null?e:{}}var Tr=new _t("tag:yaml.org,2002:set",{kind:"mapping",resolve:No,construct:qo}),zn=_r.extend({implicit:[Sr,kr],explicit:[Cr,Er,Ar,Tr]}),ei=Object.prototype.hasOwnProperty,on=1,Or=2,zr=3,sn=4,Sn=1,Ho=2,Vn=3,jo=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,Wo=/[\x85\u2028\u2029]/,Yo=/[,\[\]\{\}]/,Mr=/^(?:!|!!|![a-z\-]+!)$/i,Lr=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function Gn(e){return Object.prototype.toString.call(e)}function jt(e){return e===10||e===13}function di(e){return e===9||e===32}function zt(e){return e===9||e===32||e===10||e===13}function yi(e){return e===44||e===91||e===93||e===123||e===125}function $o(e){var p;return 48<=e&&e<=57?e-48:(p=e|32,97<=p&&p<=102?p-97+10:-1)}function Ko(e){return e===120?2:e===117?4:e===85?8:0}function Uo(e){return 48<=e&&e<=57?e-48:-1}function Xn(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"\x85":e===95?"\xA0":e===76?"\u2028":e===80?"\u2029":""}function Vo(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}var Pr=new Array(256),Rr=new Array(256);for(li=0;li<256;li++)Pr[li]=Xn(li)?1:0,Rr[li]=Xn(li);var li;function Go(e,p){this.input=e,this.filename=p.filename||null,this.schema=p.schema||zn,this.onWarning=p.onWarning||null,this.legacy=p.legacy||!1,this.json=p.json||!1,this.listener=p.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function Ir(e,p){var t={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return t.snippet=Qa(t),new Et(p,t)}function we(e,p){throw Ir(e,p)}function cn(e,p){e.onWarning&&e.onWarning.call(null,Ir(e,p))}var Jn={YAML:function(p,t,r){var o,c,s;p.version!==null&&we(p,"duplication of %YAML directive"),r.length!==1&&we(p,"YAML directive accepts exactly one argument"),o=/^([0-9]+)\.([0-9]+)$/.exec(r[0]),o===null&&we(p,"ill-formed argument of the YAML directive"),c=parseInt(o[1],10),s=parseInt(o[2],10),c!==1&&we(p,"unacceptable YAML version of the document"),p.version=r[0],p.checkLineBreaks=s<2,s!==1&&s!==2&&cn(p,"unsupported YAML version of the document")},TAG:function(p,t,r){var o,c;r.length!==2&&we(p,"TAG directive accepts exactly two arguments"),o=r[0],c=r[1],Mr.test(o)||we(p,"ill-formed tag handle (first argument) of the TAG directive"),ei.call(p.tagMap,o)&&we(p,'there is a previously declared suffix for "'+o+'" tag handle'),Lr.test(c)||we(p,"ill-formed tag prefix (second argument) of the TAG directive");try{c=decodeURIComponent(c)}catch{we(p,"tag prefix is malformed: "+c)}p.tagMap[o]=c}};function Zt(e,p,t,r){var o,c,s,l;if(p<t){if(l=e.input.slice(p,t),r)for(o=0,c=l.length;o<c;o+=1)s=l.charCodeAt(o),s===9||32<=s&&s<=1114111||we(e,"expected valid JSON character");else jo.test(l)&&we(e,"the stream contains non-printable characters");e.result+=l}}function Qn(e,p,t,r){var o,c,s,l;for(vt.isObject(t)||we(e,"cannot merge mappings; the provided source object is unacceptable"),o=Object.keys(t),s=0,l=o.length;s<l;s+=1)c=o[s],ei.call(p,c)||(p[c]=t[c],r[c]=!0)}function vi(e,p,t,r,o,c,s,l,u){var f,v;if(Array.isArray(o))for(o=Array.prototype.slice.call(o),f=0,v=o.length;f<v;f+=1)Array.isArray(o[f])&&we(e,"nested arrays are not supported inside keys"),typeof o=="object"&&Gn(o[f])==="[object Object]"&&(o[f]="[object Object]");if(typeof o=="object"&&Gn(o)==="[object Object]"&&(o="[object Object]"),o=String(o),p===null&&(p={}),r==="tag:yaml.org,2002:merge")if(Array.isArray(c))for(f=0,v=c.length;f<v;f+=1)Qn(e,p,c[f],t);else Qn(e,p,c,t);else!e.json&&!ei.call(t,o)&&ei.call(p,o)&&(e.line=s||e.line,e.lineStart=l||e.lineStart,e.position=u||e.position,we(e,"duplicated mapping key")),o==="__proto__"?Object.defineProperty(p,o,{configurable:!0,enumerable:!0,writable:!0,value:c}):p[o]=c,delete t[o];return p}function Mn(e){var p;p=e.input.charCodeAt(e.position),p===10?e.position++:p===13?(e.position++,e.input.charCodeAt(e.position)===10&&e.position++):we(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}function ht(e,p,t){for(var r=0,o=e.input.charCodeAt(e.position);o!==0;){for(;di(o);)o===9&&e.firstTabInLine===-1&&(e.firstTabInLine=e.position),o=e.input.charCodeAt(++e.position);if(p&&o===35)do o=e.input.charCodeAt(++e.position);while(o!==10&&o!==13&&o!==0);if(jt(o))for(Mn(e),o=e.input.charCodeAt(e.position),r++,e.lineIndent=0;o===32;)e.lineIndent++,o=e.input.charCodeAt(++e.position);else break}return t!==-1&&r!==0&&e.lineIndent<t&&cn(e,"deficient indentation"),r}function un(e){var p=e.position,t;return t=e.input.charCodeAt(p),!!((t===45||t===46)&&t===e.input.charCodeAt(p+1)&&t===e.input.charCodeAt(p+2)&&(p+=3,t=e.input.charCodeAt(p),t===0||zt(t)))}function Ln(e,p){p===1?e.result+=" ":p>1&&(e.result+=vt.repeat(`
`,p-1))}function Xo(e,p,t){var r,o,c,s,l,u,f,v,m=e.kind,y=e.result,w;if(w=e.input.charCodeAt(e.position),zt(w)||yi(w)||w===35||w===38||w===42||w===33||w===124||w===62||w===39||w===34||w===37||w===64||w===96||(w===63||w===45)&&(o=e.input.charCodeAt(e.position+1),zt(o)||t&&yi(o)))return!1;for(e.kind="scalar",e.result="",c=s=e.position,l=!1;w!==0;){if(w===58){if(o=e.input.charCodeAt(e.position+1),zt(o)||t&&yi(o))break}else if(w===35){if(r=e.input.charCodeAt(e.position-1),zt(r))break}else{if(e.position===e.lineStart&&un(e)||t&&yi(w))break;if(jt(w))if(u=e.line,f=e.lineStart,v=e.lineIndent,ht(e,!1,-1),e.lineIndent>=p){l=!0,w=e.input.charCodeAt(e.position);continue}else{e.position=s,e.line=u,e.lineStart=f,e.lineIndent=v;break}}l&&(Zt(e,c,s,!1),Ln(e,e.line-u),c=s=e.position,l=!1),di(w)||(s=e.position+1),w=e.input.charCodeAt(++e.position)}return Zt(e,c,s,!1),e.result?!0:(e.kind=m,e.result=y,!1)}function Jo(e,p){var t,r,o;if(t=e.input.charCodeAt(e.position),t!==39)return!1;for(e.kind="scalar",e.result="",e.position++,r=o=e.position;(t=e.input.charCodeAt(e.position))!==0;)if(t===39)if(Zt(e,r,e.position,!0),t=e.input.charCodeAt(++e.position),t===39)r=e.position,e.position++,o=e.position;else return!0;else jt(t)?(Zt(e,r,o,!0),Ln(e,ht(e,!1,p)),r=o=e.position):e.position===e.lineStart&&un(e)?we(e,"unexpected end of the document within a single quoted scalar"):(e.position++,o=e.position);we(e,"unexpected end of the stream within a single quoted scalar")}function Qo(e,p){var t,r,o,c,s,l;if(l=e.input.charCodeAt(e.position),l!==34)return!1;for(e.kind="scalar",e.result="",e.position++,t=r=e.position;(l=e.input.charCodeAt(e.position))!==0;){if(l===34)return Zt(e,t,e.position,!0),e.position++,!0;if(l===92){if(Zt(e,t,e.position,!0),l=e.input.charCodeAt(++e.position),jt(l))ht(e,!1,p);else if(l<256&&Pr[l])e.result+=Rr[l],e.position++;else if((s=Ko(l))>0){for(o=s,c=0;o>0;o--)l=e.input.charCodeAt(++e.position),(s=$o(l))>=0?c=(c<<4)+s:we(e,"expected hexadecimal character");e.result+=Vo(c),e.position++}else we(e,"unknown escape sequence");t=r=e.position}else jt(l)?(Zt(e,t,r,!0),Ln(e,ht(e,!1,p)),t=r=e.position):e.position===e.lineStart&&un(e)?we(e,"unexpected end of the document within a double quoted scalar"):(e.position++,r=e.position)}we(e,"unexpected end of the stream within a double quoted scalar")}function Zo(e,p){var t=!0,r,o,c,s=e.tag,l,u=e.anchor,f,v,m,y,w,S=Object.create(null),_,T,R,C;if(C=e.input.charCodeAt(e.position),C===91)v=93,w=!1,l=[];else if(C===123)v=125,w=!0,l={};else return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=l),C=e.input.charCodeAt(++e.position);C!==0;){if(ht(e,!0,p),C=e.input.charCodeAt(e.position),C===v)return e.position++,e.tag=s,e.anchor=u,e.kind=w?"mapping":"sequence",e.result=l,!0;t?C===44&&we(e,"expected the node content, but found ','"):we(e,"missed comma between flow collection entries"),T=_=R=null,m=y=!1,C===63&&(f=e.input.charCodeAt(e.position+1),zt(f)&&(m=y=!0,e.position++,ht(e,!0,p))),r=e.line,o=e.lineStart,c=e.position,bi(e,p,on,!1,!0),T=e.tag,_=e.result,ht(e,!0,p),C=e.input.charCodeAt(e.position),(y||e.line===r)&&C===58&&(m=!0,C=e.input.charCodeAt(++e.position),ht(e,!0,p),bi(e,p,on,!1,!0),R=e.result),w?vi(e,l,S,T,_,R,r,o,c):m?l.push(vi(e,null,S,T,_,R,r,o,c)):l.push(_),ht(e,!0,p),C=e.input.charCodeAt(e.position),C===44?(t=!0,C=e.input.charCodeAt(++e.position)):t=!1}we(e,"unexpected end of the stream within a flow collection")}function es(e,p){var t,r,o=Sn,c=!1,s=!1,l=p,u=0,f=!1,v,m;if(m=e.input.charCodeAt(e.position),m===124)r=!1;else if(m===62)r=!0;else return!1;for(e.kind="scalar",e.result="";m!==0;)if(m=e.input.charCodeAt(++e.position),m===43||m===45)Sn===o?o=m===43?Vn:Ho:we(e,"repeat of a chomping mode identifier");else if((v=Uo(m))>=0)v===0?we(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):s?we(e,"repeat of an indentation width identifier"):(l=p+v-1,s=!0);else break;if(di(m)){do m=e.input.charCodeAt(++e.position);while(di(m));if(m===35)do m=e.input.charCodeAt(++e.position);while(!jt(m)&&m!==0)}for(;m!==0;){for(Mn(e),e.lineIndent=0,m=e.input.charCodeAt(e.position);(!s||e.lineIndent<l)&&m===32;)e.lineIndent++,m=e.input.charCodeAt(++e.position);if(!s&&e.lineIndent>l&&(l=e.lineIndent),jt(m)){u++;continue}if(e.lineIndent<l){o===Vn?e.result+=vt.repeat(`
`,c?1+u:u):o===Sn&&c&&(e.result+=`
`);break}for(r?di(m)?(f=!0,e.result+=vt.repeat(`
`,c?1+u:u)):f?(f=!1,e.result+=vt.repeat(`
`,u+1)):u===0?c&&(e.result+=" "):e.result+=vt.repeat(`
`,u):e.result+=vt.repeat(`
`,c?1+u:u),c=!0,s=!0,u=0,t=e.position;!jt(m)&&m!==0;)m=e.input.charCodeAt(++e.position);Zt(e,t,e.position,!1)}return!0}function Zn(e,p){var t,r=e.tag,o=e.anchor,c=[],s,l=!1,u;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=c),u=e.input.charCodeAt(e.position);u!==0&&(e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,we(e,"tab characters must not be used in indentation")),!(u!==45||(s=e.input.charCodeAt(e.position+1),!zt(s))));){if(l=!0,e.position++,ht(e,!0,-1)&&e.lineIndent<=p){c.push(null),u=e.input.charCodeAt(e.position);continue}if(t=e.line,bi(e,p,zr,!1,!0),c.push(e.result),ht(e,!0,-1),u=e.input.charCodeAt(e.position),(e.line===t||e.lineIndent>p)&&u!==0)we(e,"bad indentation of a sequence entry");else if(e.lineIndent<p)break}return l?(e.tag=r,e.anchor=o,e.kind="sequence",e.result=c,!0):!1}function ts(e,p,t){var r,o,c,s,l,u,f=e.tag,v=e.anchor,m={},y=Object.create(null),w=null,S=null,_=null,T=!1,R=!1,C;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=m),C=e.input.charCodeAt(e.position);C!==0;){if(!T&&e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,we(e,"tab characters must not be used in indentation")),r=e.input.charCodeAt(e.position+1),c=e.line,(C===63||C===58)&&zt(r))C===63?(T&&(vi(e,m,y,w,S,null,s,l,u),w=S=_=null),R=!0,T=!0,o=!0):T?(T=!1,o=!0):we(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,C=r;else{if(s=e.line,l=e.lineStart,u=e.position,!bi(e,t,Or,!1,!0))break;if(e.line===c){for(C=e.input.charCodeAt(e.position);di(C);)C=e.input.charCodeAt(++e.position);if(C===58)C=e.input.charCodeAt(++e.position),zt(C)||we(e,"a whitespace character is expected after the key-value separator within a block mapping"),T&&(vi(e,m,y,w,S,null,s,l,u),w=S=_=null),R=!0,T=!1,o=!1,w=e.tag,S=e.result;else if(R)we(e,"can not read an implicit mapping pair; a colon is missed");else return e.tag=f,e.anchor=v,!0}else if(R)we(e,"can not read a block mapping entry; a multiline key may not be an implicit key");else return e.tag=f,e.anchor=v,!0}if((e.line===c||e.lineIndent>p)&&(T&&(s=e.line,l=e.lineStart,u=e.position),bi(e,p,sn,!0,o)&&(T?S=e.result:_=e.result),T||(vi(e,m,y,w,S,_,s,l,u),w=S=_=null),ht(e,!0,-1),C=e.input.charCodeAt(e.position)),(e.line===c||e.lineIndent>p)&&C!==0)we(e,"bad indentation of a mapping entry");else if(e.lineIndent<p)break}return T&&vi(e,m,y,w,S,null,s,l,u),R&&(e.tag=f,e.anchor=v,e.kind="mapping",e.result=m),R}function is(e){var p,t=!1,r=!1,o,c,s;if(s=e.input.charCodeAt(e.position),s!==33)return!1;if(e.tag!==null&&we(e,"duplication of a tag property"),s=e.input.charCodeAt(++e.position),s===60?(t=!0,s=e.input.charCodeAt(++e.position)):s===33?(r=!0,o="!!",s=e.input.charCodeAt(++e.position)):o="!",p=e.position,t){do s=e.input.charCodeAt(++e.position);while(s!==0&&s!==62);e.position<e.length?(c=e.input.slice(p,e.position),s=e.input.charCodeAt(++e.position)):we(e,"unexpected end of the stream within a verbatim tag")}else{for(;s!==0&&!zt(s);)s===33&&(r?we(e,"tag suffix cannot contain exclamation marks"):(o=e.input.slice(p-1,e.position+1),Mr.test(o)||we(e,"named tag handle cannot contain such characters"),r=!0,p=e.position+1)),s=e.input.charCodeAt(++e.position);c=e.input.slice(p,e.position),Yo.test(c)&&we(e,"tag suffix cannot contain flow indicator characters")}c&&!Lr.test(c)&&we(e,"tag name cannot contain such characters: "+c);try{c=decodeURIComponent(c)}catch{we(e,"tag name is malformed: "+c)}return t?e.tag=c:ei.call(e.tagMap,o)?e.tag=e.tagMap[o]+c:o==="!"?e.tag="!"+c:o==="!!"?e.tag="tag:yaml.org,2002:"+c:we(e,'undeclared tag handle "'+o+'"'),!0}function ns(e){var p,t;if(t=e.input.charCodeAt(e.position),t!==38)return!1;for(e.anchor!==null&&we(e,"duplication of an anchor property"),t=e.input.charCodeAt(++e.position),p=e.position;t!==0&&!zt(t)&&!yi(t);)t=e.input.charCodeAt(++e.position);return e.position===p&&we(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(p,e.position),!0}function rs(e){var p,t,r;if(r=e.input.charCodeAt(e.position),r!==42)return!1;for(r=e.input.charCodeAt(++e.position),p=e.position;r!==0&&!zt(r)&&!yi(r);)r=e.input.charCodeAt(++e.position);return e.position===p&&we(e,"name of an alias node must contain at least one character"),t=e.input.slice(p,e.position),ei.call(e.anchorMap,t)||we(e,'unidentified alias "'+t+'"'),e.result=e.anchorMap[t],ht(e,!0,-1),!0}function bi(e,p,t,r,o){var c,s,l,u=1,f=!1,v=!1,m,y,w,S,_,T;if(e.listener!==null&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,c=s=l=sn===t||zr===t,r&&ht(e,!0,-1)&&(f=!0,e.lineIndent>p?u=1:e.lineIndent===p?u=0:e.lineIndent<p&&(u=-1)),u===1)for(;is(e)||ns(e);)ht(e,!0,-1)?(f=!0,l=c,e.lineIndent>p?u=1:e.lineIndent===p?u=0:e.lineIndent<p&&(u=-1)):l=!1;if(l&&(l=f||o),(u===1||sn===t)&&(on===t||Or===t?_=p:_=p+1,T=e.position-e.lineStart,u===1?l&&(Zn(e,T)||ts(e,T,_))||Zo(e,_)?v=!0:(s&&es(e,_)||Jo(e,_)||Qo(e,_)?v=!0:rs(e)?(v=!0,(e.tag!==null||e.anchor!==null)&&we(e,"alias node should not have any properties")):Xo(e,_,on===t)&&(v=!0,e.tag===null&&(e.tag="?")),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):u===0&&(v=l&&Zn(e,T))),e.tag===null)e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);else if(e.tag==="?"){for(e.result!==null&&e.kind!=="scalar"&&we(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),m=0,y=e.implicitTypes.length;m<y;m+=1)if(S=e.implicitTypes[m],S.resolve(e.result)){e.result=S.construct(e.result),e.tag=S.tag,e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);break}}else if(e.tag!=="!"){if(ei.call(e.typeMap[e.kind||"fallback"],e.tag))S=e.typeMap[e.kind||"fallback"][e.tag];else for(S=null,w=e.typeMap.multi[e.kind||"fallback"],m=0,y=w.length;m<y;m+=1)if(e.tag.slice(0,w[m].tag.length)===w[m].tag){S=w[m];break}S||we(e,"unknown tag !<"+e.tag+">"),e.result!==null&&S.kind!==e.kind&&we(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+S.kind+'", not "'+e.kind+'"'),S.resolve(e.result,e.tag)?(e.result=S.construct(e.result,e.tag),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):we(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")}return e.listener!==null&&e.listener("close",e),e.tag!==null||e.anchor!==null||v}function as(e){var p=e.position,t,r,o,c=!1,s;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);(s=e.input.charCodeAt(e.position))!==0&&(ht(e,!0,-1),s=e.input.charCodeAt(e.position),!(e.lineIndent>0||s!==37));){for(c=!0,s=e.input.charCodeAt(++e.position),t=e.position;s!==0&&!zt(s);)s=e.input.charCodeAt(++e.position);for(r=e.input.slice(t,e.position),o=[],r.length<1&&we(e,"directive name must not be less than one character in length");s!==0;){for(;di(s);)s=e.input.charCodeAt(++e.position);if(s===35){do s=e.input.charCodeAt(++e.position);while(s!==0&&!jt(s));break}if(jt(s))break;for(t=e.position;s!==0&&!zt(s);)s=e.input.charCodeAt(++e.position);o.push(e.input.slice(t,e.position))}s!==0&&Mn(e),ei.call(Jn,r)?Jn[r](e,r,o):cn(e,'unknown document directive "'+r+'"')}if(ht(e,!0,-1),e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45?(e.position+=3,ht(e,!0,-1)):c&&we(e,"directives end mark is expected"),bi(e,e.lineIndent-1,sn,!1,!0),ht(e,!0,-1),e.checkLineBreaks&&Wo.test(e.input.slice(p,e.position))&&cn(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&un(e)){e.input.charCodeAt(e.position)===46&&(e.position+=3,ht(e,!0,-1));return}if(e.position<e.length-1)we(e,"end of the stream or a document separator is expected");else return}function Dr(e,p){e=String(e),p=p||{},e.length!==0&&(e.charCodeAt(e.length-1)!==10&&e.charCodeAt(e.length-1)!==13&&(e+=`
`),e.charCodeAt(0)===65279&&(e=e.slice(1)));var t=new Go(e,p),r=e.indexOf("\0");for(r!==-1&&(t.position=r,we(t,"null byte is not allowed in input")),t.input+="\0";t.input.charCodeAt(t.position)===32;)t.lineIndent+=1,t.position+=1;for(;t.position<t.length-1;)as(t);return t.documents}function os(e,p,t){p!==null&&typeof p=="object"&&typeof t=="undefined"&&(t=p,p=null);var r=Dr(e,t);if(typeof p!="function")return r;for(var o=0,c=r.length;o<c;o+=1)p(r[o])}function ss(e,p){var t=Dr(e,p);if(t.length!==0){if(t.length===1)return t[0];throw new Et("expected a single document in the stream, but found more")}}var cs=os,ls=ss,Fr={loadAll:cs,load:ls},Br=Object.prototype.toString,Nr=Object.prototype.hasOwnProperty,Pn=65279,ds=9,Bi=10,us=13,ps=32,hs=33,fs=34,Cn=35,gs=37,ms=38,ys=39,vs=42,qr=44,bs=45,ln=58,_s=61,xs=62,ws=63,Ss=64,Hr=91,jr=93,ks=96,Wr=123,Cs=124,Yr=125,St={};St[0]="\\0";St[7]="\\a";St[8]="\\b";St[9]="\\t";St[10]="\\n";St[11]="\\v";St[12]="\\f";St[13]="\\r";St[27]="\\e";St[34]='\\"';St[92]="\\\\";St[133]="\\N";St[160]="\\_";St[8232]="\\L";St[8233]="\\P";var Es=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],As=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function Ts(e,p){var t,r,o,c,s,l,u;if(p===null)return{};for(t={},r=Object.keys(p),o=0,c=r.length;o<c;o+=1)s=r[o],l=String(p[s]),s.slice(0,2)==="!!"&&(s="tag:yaml.org,2002:"+s.slice(2)),u=e.compiledTypeMap.fallback[s],u&&Nr.call(u.styleAliases,l)&&(l=u.styleAliases[l]),t[s]=l;return t}function Os(e){var p,t,r;if(p=e.toString(16).toUpperCase(),e<=255)t="x",r=2;else if(e<=65535)t="u",r=4;else if(e<=4294967295)t="U",r=8;else throw new Et("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+t+vt.repeat("0",r-p.length)+p}var zs=1,Ni=2;function Ms(e){this.schema=e.schema||zn,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=vt.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=Ts(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.quotingType=e.quotingType==='"'?Ni:zs,this.forceQuotes=e.forceQuotes||!1,this.replacer=typeof e.replacer=="function"?e.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function er(e,p){for(var t=vt.repeat(" ",p),r=0,o=-1,c="",s,l=e.length;r<l;)o=e.indexOf(`
`,r),o===-1?(s=e.slice(r),r=l):(s=e.slice(r,o+1),r=o+1),s.length&&s!==`
`&&(c+=t),c+=s;return c}function En(e,p){return`
`+vt.repeat(" ",e.indent*p)}function Ls(e,p){var t,r,o;for(t=0,r=e.implicitTypes.length;t<r;t+=1)if(o=e.implicitTypes[t],o.resolve(p))return!0;return!1}function dn(e){return e===ps||e===ds}function qi(e){return 32<=e&&e<=126||161<=e&&e<=55295&&e!==8232&&e!==8233||57344<=e&&e<=65533&&e!==Pn||65536<=e&&e<=1114111}function tr(e){return qi(e)&&e!==Pn&&e!==us&&e!==Bi}function ir(e,p,t){var r=tr(e),o=r&&!dn(e);return(t?r:r&&e!==qr&&e!==Hr&&e!==jr&&e!==Wr&&e!==Yr)&&e!==Cn&&!(p===ln&&!o)||tr(p)&&!dn(p)&&e===Cn||p===ln&&o}function Ps(e){return qi(e)&&e!==Pn&&!dn(e)&&e!==bs&&e!==ws&&e!==ln&&e!==qr&&e!==Hr&&e!==jr&&e!==Wr&&e!==Yr&&e!==Cn&&e!==ms&&e!==vs&&e!==hs&&e!==Cs&&e!==_s&&e!==xs&&e!==ys&&e!==fs&&e!==gs&&e!==Ss&&e!==ks}function Rs(e){return!dn(e)&&e!==ln}function Di(e,p){var t=e.charCodeAt(p),r;return t>=55296&&t<=56319&&p+1<e.length&&(r=e.charCodeAt(p+1),r>=56320&&r<=57343)?(t-55296)*1024+r-56320+65536:t}function $r(e){var p=/^\n* /;return p.test(e)}var Kr=1,An=2,Ur=3,Vr=4,mi=5;function Is(e,p,t,r,o,c,s,l){var u,f=0,v=null,m=!1,y=!1,w=r!==-1,S=-1,_=Ps(Di(e,0))&&Rs(Di(e,e.length-1));if(p||s)for(u=0;u<e.length;f>=65536?u+=2:u++){if(f=Di(e,u),!qi(f))return mi;_=_&&ir(f,v,l),v=f}else{for(u=0;u<e.length;f>=65536?u+=2:u++){if(f=Di(e,u),f===Bi)m=!0,w&&(y=y||u-S-1>r&&e[S+1]!==" ",S=u);else if(!qi(f))return mi;_=_&&ir(f,v,l),v=f}y=y||w&&u-S-1>r&&e[S+1]!==" "}return!m&&!y?_&&!s&&!o(e)?Kr:c===Ni?mi:An:t>9&&$r(e)?mi:s?c===Ni?mi:An:y?Vr:Ur}function Ds(e,p,t,r,o){e.dump=(function(){if(p.length===0)return e.quotingType===Ni?'""':"''";if(!e.noCompatMode&&(Es.indexOf(p)!==-1||As.test(p)))return e.quotingType===Ni?'"'+p+'"':"'"+p+"'";var c=e.indent*Math.max(1,t),s=e.lineWidth===-1?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-c),l=r||e.flowLevel>-1&&t>=e.flowLevel;function u(f){return Ls(e,f)}switch(Is(p,l,e.indent,s,u,e.quotingType,e.forceQuotes&&!r,o)){case Kr:return p;case An:return"'"+p.replace(/'/g,"''")+"'";case Ur:return"|"+nr(p,e.indent)+rr(er(p,c));case Vr:return">"+nr(p,e.indent)+rr(er(Fs(p,s),c));case mi:return'"'+Bs(p)+'"';default:throw new Et("impossible error: invalid scalar style")}})()}function nr(e,p){var t=$r(e)?String(p):"",r=e[e.length-1]===`
`,o=r&&(e[e.length-2]===`
`||e===`
`),c=o?"+":r?"":"-";return t+c+`
`}function rr(e){return e[e.length-1]===`
`?e.slice(0,-1):e}function Fs(e,p){for(var t=/(\n+)([^\n]*)/g,r=(function(){var f=e.indexOf(`
`);return f=f!==-1?f:e.length,t.lastIndex=f,ar(e.slice(0,f),p)})(),o=e[0]===`
`||e[0]===" ",c,s;s=t.exec(e);){var l=s[1],u=s[2];c=u[0]===" ",r+=l+(!o&&!c&&u!==""?`
`:"")+ar(u,p),o=c}return r}function ar(e,p){if(e===""||e[0]===" ")return e;for(var t=/ [^ ]/g,r,o=0,c,s=0,l=0,u="";r=t.exec(e);)l=r.index,l-o>p&&(c=s>o?s:l,u+=`
`+e.slice(o,c),o=c+1),s=l;return u+=`
`,e.length-o>p&&s>o?u+=e.slice(o,s)+`
`+e.slice(s+1):u+=e.slice(o),u.slice(1)}function Bs(e){for(var p="",t=0,r,o=0;o<e.length;t>=65536?o+=2:o++)t=Di(e,o),r=St[t],!r&&qi(t)?(p+=e[o],t>=65536&&(p+=e[o+1])):p+=r||Os(t);return p}function Ns(e,p,t){var r="",o=e.tag,c,s,l;for(c=0,s=t.length;c<s;c+=1)l=t[c],e.replacer&&(l=e.replacer.call(t,String(c),l)),($t(e,p,l,!1,!1)||typeof l=="undefined"&&$t(e,p,null,!1,!1))&&(r!==""&&(r+=","+(e.condenseFlow?"":" ")),r+=e.dump);e.tag=o,e.dump="["+r+"]"}function or(e,p,t,r){var o="",c=e.tag,s,l,u;for(s=0,l=t.length;s<l;s+=1)u=t[s],e.replacer&&(u=e.replacer.call(t,String(s),u)),($t(e,p+1,u,!0,!0,!1,!0)||typeof u=="undefined"&&$t(e,p+1,null,!0,!0,!1,!0))&&((!r||o!=="")&&(o+=En(e,p)),e.dump&&Bi===e.dump.charCodeAt(0)?o+="-":o+="- ",o+=e.dump);e.tag=c,e.dump=o||"[]"}function qs(e,p,t){var r="",o=e.tag,c=Object.keys(t),s,l,u,f,v;for(s=0,l=c.length;s<l;s+=1)v="",r!==""&&(v+=", "),e.condenseFlow&&(v+='"'),u=c[s],f=t[u],e.replacer&&(f=e.replacer.call(t,u,f)),$t(e,p,u,!1,!1)&&(e.dump.length>1024&&(v+="? "),v+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),$t(e,p,f,!1,!1)&&(v+=e.dump,r+=v));e.tag=o,e.dump="{"+r+"}"}function Hs(e,p,t,r){var o="",c=e.tag,s=Object.keys(t),l,u,f,v,m,y;if(e.sortKeys===!0)s.sort();else if(typeof e.sortKeys=="function")s.sort(e.sortKeys);else if(e.sortKeys)throw new Et("sortKeys must be a boolean or a function");for(l=0,u=s.length;l<u;l+=1)y="",(!r||o!=="")&&(y+=En(e,p)),f=s[l],v=t[f],e.replacer&&(v=e.replacer.call(t,f,v)),$t(e,p+1,f,!0,!0,!0)&&(m=e.tag!==null&&e.tag!=="?"||e.dump&&e.dump.length>1024,m&&(e.dump&&Bi===e.dump.charCodeAt(0)?y+="?":y+="? "),y+=e.dump,m&&(y+=En(e,p)),$t(e,p+1,v,!0,m)&&(e.dump&&Bi===e.dump.charCodeAt(0)?y+=":":y+=": ",y+=e.dump,o+=y));e.tag=c,e.dump=o||"{}"}function sr(e,p,t){var r,o,c,s,l,u;for(o=t?e.explicitTypes:e.implicitTypes,c=0,s=o.length;c<s;c+=1)if(l=o[c],(l.instanceOf||l.predicate)&&(!l.instanceOf||typeof p=="object"&&p instanceof l.instanceOf)&&(!l.predicate||l.predicate(p))){if(t?l.multi&&l.representName?e.tag=l.representName(p):e.tag=l.tag:e.tag="?",l.represent){if(u=e.styleMap[l.tag]||l.defaultStyle,Br.call(l.represent)==="[object Function]")r=l.represent(p,u);else if(Nr.call(l.represent,u))r=l.represent[u](p,u);else throw new Et("!<"+l.tag+'> tag resolver accepts not "'+u+'" style');e.dump=r}return!0}return!1}function $t(e,p,t,r,o,c,s){e.tag=null,e.dump=t,sr(e,t,!1)||sr(e,t,!0);var l=Br.call(e.dump),u=r,f;r&&(r=e.flowLevel<0||e.flowLevel>p);var v=l==="[object Object]"||l==="[object Array]",m,y;if(v&&(m=e.duplicates.indexOf(t),y=m!==-1),(e.tag!==null&&e.tag!=="?"||y||e.indent!==2&&p>0)&&(o=!1),y&&e.usedDuplicates[m])e.dump="*ref_"+m;else{if(v&&y&&!e.usedDuplicates[m]&&(e.usedDuplicates[m]=!0),l==="[object Object]")r&&Object.keys(e.dump).length!==0?(Hs(e,p,e.dump,o),y&&(e.dump="&ref_"+m+e.dump)):(qs(e,p,e.dump),y&&(e.dump="&ref_"+m+" "+e.dump));else if(l==="[object Array]")r&&e.dump.length!==0?(e.noArrayIndent&&!s&&p>0?or(e,p-1,e.dump,o):or(e,p,e.dump,o),y&&(e.dump="&ref_"+m+e.dump)):(Ns(e,p,e.dump),y&&(e.dump="&ref_"+m+" "+e.dump));else if(l==="[object String]")e.tag!=="?"&&Ds(e,e.dump,p,c,u);else{if(l==="[object Undefined]")return!1;if(e.skipInvalid)return!1;throw new Et("unacceptable kind of an object to dump "+l)}e.tag!==null&&e.tag!=="?"&&(f=encodeURI(e.tag[0]==="!"?e.tag.slice(1):e.tag).replace(/!/g,"%21"),e.tag[0]==="!"?f="!"+f:f.slice(0,18)==="tag:yaml.org,2002:"?f="!!"+f.slice(18):f="!<"+f+">",e.dump=f+" "+e.dump)}return!0}function js(e,p){var t=[],r=[],o,c;for(Tn(e,t,r),o=0,c=r.length;o<c;o+=1)p.duplicates.push(t[r[o]]);p.usedDuplicates=new Array(c)}function Tn(e,p,t){var r,o,c;if(e!==null&&typeof e=="object")if(o=p.indexOf(e),o!==-1)t.indexOf(o)===-1&&t.push(o);else if(p.push(e),Array.isArray(e))for(o=0,c=e.length;o<c;o+=1)Tn(e[o],p,t);else for(r=Object.keys(e),o=0,c=r.length;o<c;o+=1)Tn(e[r[o]],p,t)}function Ws(e,p){p=p||{};var t=new Ms(p);t.noRefs||js(e,t);var r=e;return t.replacer&&(r=t.replacer.call({"":r},"",r)),$t(t,0,r,!0,!0)?t.dump+`
`:""}var Ys=Ws,$s={dump:Ys};function Rn(e,p){return function(){throw new Error("Function yaml."+e+" is removed in js-yaml 4. Use yaml."+p+" instead, which is now safe by default.")}}var Ks=_t,Us=dr,Vs=fr,Gs=br,Xs=_r,Js=zn,Qs=Fr.load,Zs=Fr.loadAll,ec=$s.dump,tc=Et,ic={binary:Cr,float:vr,map:hr,null:gr,pairs:Ar,set:Tr,timestamp:Sr,bool:mr,int:yr,merge:kr,omap:Er,seq:pr,str:ur},nc=Rn("safeLoad","load"),rc=Rn("safeLoadAll","loadAll"),ac=Rn("safeDump","dump"),oc={Type:Ks,Schema:Us,FAILSAFE_SCHEMA:Vs,JSON_SCHEMA:Gs,CORE_SCHEMA:Xs,DEFAULT_SCHEMA:Js,load:Qs,loadAll:Zs,dump:ec,YAMLException:tc,types:ic,safeLoad:nc,safeLoadAll:rc,safeDump:ac},Gr=oc;window.interact||(window.interact=Xr.default);window.jsyaml||(window.jsyaml=Gr);var sc="0.9.5";console.info(`%c drag-and-drop-card %c v${sc} `,"color:#fff;background:#03a9f4;font-weight:700;padding:2px 6px;border-radius:3px 0 0 3px","color:#03303a;background:#bdeaff;padding:2px 6px;border-radius:0 3px 3px 0");var cc=(e,...p)=>console.debug(`[drag-and-drop-card] ${e}`,...p);console.info("%c drag-and-drop-card loaded","color:#03a9f4;font-weight:700;");var In=()=>new Promise(e=>requestAnimationFrame(()=>e())),lc=()=>new Promise(e=>window.requestIdleCallback?requestIdleCallback(()=>e()):setTimeout(e,0)),ti=class e extends HTMLElement{constructor(){super();pt(this,"__booting",!1);pt(this,"_gridCanvas",null);pt(this,"_gridCtx",null);pt(this,"_gridCols",0);pt(this,"_gridRows",0);pt(this,"_gridCellSize",0);pt(this,"_gridDown",!1);pt(this,"_gridStartCol",-1);pt(this,"_gridStartRow",-1);pt(this,"_gridHoverCol",-1);pt(this,"_gridHoverRow",-1);pt(this,"_gridCurrCol",-1);pt(this,"_gridCurrRow",-1);pt(this,"_gridDirty",!1);pt(this,"_gridRAF",0);pt(this,"_gridTile",null);pt(this,"__gridPrevEditMode");pt(this,"__gridRO",null);pt(this,"__gridPollT",null);this.shadowRoot||this.attachShadow({mode:"open"}),this.__rebuiltCards=new WeakSet}_updateTabsA11y_(){var o;let t=this.tabsBar;if(!t)return;t.setAttribute("role","tablist"),t.querySelectorAll(".ddc-tab").forEach((c,s)=>{let l=c.classList.contains("active");c.setAttribute("role","tab"),c.setAttribute("aria-selected",String(l)),c.setAttribute("tabindex",l?"0":"-1"),c.dataset.index=String(s)}),this.__tabsKeyHandler||(this.__tabsKeyHandler=c=>{if(!["ArrowLeft","ArrowRight","Home","End"].includes(c.key))return;let l=Array.from(t.querySelectorAll(".ddc-tab"));if(!l.length)return;c.preventDefault();let u=l.findIndex(y=>y===document.activeElement),f=l.findIndex(y=>y.classList.contains("active")),v=u>=0?u:f>=0?f:0;c.key==="ArrowRight"&&(v=Math.min(l.length-1,v+1)),c.key==="ArrowLeft"&&(v=Math.max(0,v-1)),c.key==="Home"&&(v=0),c.key==="End"&&(v=l.length-1);let m=l[v];if(m){try{m.focus({preventScroll:!1})}catch{}m.click()}},t.addEventListener("keydown",this.__tabsKeyHandler)),this.__tabsScrollHandler||(this.__tabsScrollHandler=()=>{var c;return(c=this._updateTabOverflowShadows_)==null?void 0:c.call(this)},t.addEventListener("scroll",this.__tabsScrollHandler,{passive:!0})),(o=this._updateTabOverflowShadows_)==null||o.call(this)}_getCurrentDashboardUrlPath_(){let r=(window.location.pathname||"/").replace(/^\/+/,"").split("/")[0]||"lovelace";return r==="lovelace"?null:r}async _ensureCardIdSeededInStorage_(){var r;if((r=this.config)!=null&&r.id)return this.config.id;let t=crypto!=null&&crypto.randomUUID?crypto.randomUUID():"ddc_"+Math.random().toString(36).slice(2);this.config={...this.config,id:t};try{let o=this._getCurrentDashboardUrlPath_(),c=await this.hass.callWS(o?{type:"lovelace/config",url_path:o}:{type:"lovelace/config"}),s=this._findThisCardPathRecursive_(c,w=>(w==null?void 0:w.type)==="custom:drag-and-drop-card"&&(!w.id||w.id===t));if(!s)return t;let{viewIndex:l,cardIndex:u,parentPath:f}=s,v=c.views[l],y={...this._getCardByPath_(v,f,u),id:t};this._setCardByPath_(v,f,u,y),await this.hass.callWS(o?{type:"lovelace/config/save",url_path:o,config:c}:{type:"lovelace/config/save",config:c})}catch{}return t}async _persistThisCardConfigToStorage_(){var y,w;await this._ensureCardIdSeededInStorage_();let t={type:"custom:drag-and-drop-card",id:(y=this.config)==null?void 0:y.id,...this._config},r=this._getCurrentDashboardUrlPath_(),o=await this.hass.callWS(r?{type:"lovelace/config",url_path:r}:{type:"lovelace/config"}),c=this._findThisCardPathRecursive_(o,S=>{var _;return(S==null?void 0:S.type)==="custom:drag-and-drop-card"&&(S==null?void 0:S.id)===((_=this.config)==null?void 0:_.id)});if(!c)throw new Error("Card not found in Lovelace config");let{viewIndex:s,cardIndex:l,parentPath:u}=c,f=o.views[s],m={...this._getCardByPath_(f,u,l),...t};this._setCardByPath_(f,u,l,m),await this.hass.callWS(r?{type:"lovelace/config/save",url_path:r,config:o}:{type:"lovelace/config/save",config:o}),this.config=m,(w=this.requestUpdate)==null||w.call(this)}_findThisCardPathRecursive_(t,r){let o=(t==null?void 0:t.views)||[];for(let c=0;c<o.length;c++){let s=this._findInCardTree_(o[c],r);if(s)return{viewIndex:c,...s}}return null}_findInCardTree_(t,r,o=[]){var s;let c=(t==null?void 0:t.cards)||[];for(let l=0;l<c.length;l++){let u=c[l];if(r(u))return{cardIndex:l,parentPath:o};if((s=u==null?void 0:u.cards)!=null&&s.length){let f=this._findInCardTree_(u,r,o.concat(l));if(f)return f}}return null}_getCardByPath_(t,r,o){let c=t;for(let s of r||[])c=c.cards[s];return c.cards[o]}_setCardByPath_(t,r,o,c){let s=t;for(let l of r||[])s=s.cards[l];s.cards[o]=c}_ensureToolbarStyles_(){try{if(this.shadowRoot.querySelector("#ddc-toolbar-styles"))return;let r=document.createElement("style");r.id="ddc-toolbar-styles",r.textContent=`/* ===== Edit toolbar ===== */
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
  }`,this.shadowRoot.appendChild(r)}catch(t){console.warn("Toolbar style inject failed",t)}}_ensureSettingsStyles_(){if(this.shadowRoot.querySelector("#ddc-settings-styles"))return;let t=document.createElement("style");t.id="ddc-settings-styles",t.textContent=`
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
  `,this.shadowRoot.appendChild(t)}_setHeaderVisible_(t=!0){var r,o,c,s,l,u;try{(((r=this._deepQueryAll)==null?void 0:r.call(this,"app-header, ha-top-app-bar, ha-top-app-bar-fixed, mwc-top-app-bar-fixed, ha-header-bar, app-toolbar, ha-toolbar"))||[]).forEach(S=>{S&&(S.dataset.ddcPrevDisplayHeader===void 0&&(S.dataset.ddcPrevDisplayHeader=S.style.display||"",S.dataset.ddcPrevMinH=S.style.minHeight||"",S.dataset.ddcPrevH=S.style.height||"",S.dataset.ddcPrevVis=S.style.visibility||""),t?(S.style.display=S.dataset.ddcPrevDisplayHeader||"",S.style.minHeight=S.dataset.ddcPrevMinH||"",S.style.height=S.dataset.ddcPrevH||"",S.style.visibility=S.dataset.ddcPrevVis||"",S.removeAttribute("hidden")):(S.style.display="none",S.style.minHeight="0",S.style.height="0",S.style.visibility="hidden",S.setAttribute("hidden","")))}),(((o=this._deepQueryAll)==null?void 0:o.call(this,'[slot="actionItems"], ha-icon-button, ha-button-menu, assist-button, search-input, ha-quick-bar, ha-mwc-menu'))||[]).forEach(S=>{S&&(S.dataset.ddcPrevDisplayAction===void 0&&(S.dataset.ddcPrevDisplayAction=S.style.display||"",S.dataset.ddcPrevVisAction=S.style.visibility||""),t?(S.style.display=S.dataset.ddcPrevDisplayAction||"",S.style.visibility=S.dataset.ddcPrevVisAction||""):(S.style.display="none",S.style.visibility="hidden"))}),[...((c=this._deepQueryAll)==null?void 0:c.call(this,"ha-app-layout"))||[],...((s=this._deepQueryAll)==null?void 0:s.call(this,"home-assistant-main"))||[],document.documentElement,document.body].filter(Boolean).forEach(S=>{if(S)if(S.dataset.ddcPrevHdrVars===void 0&&(S.dataset.ddcPrevHdrVars=JSON.stringify({mdc:S.style.getPropertyValue("--mdc-top-app-bar-height")||"",app:S.style.getPropertyValue("--app-header-height")||"",hdr:S.style.getPropertyValue("--header-height")||"",hah:S.style.getPropertyValue("--ha-header-height")||"",pad:S.style&&(S.style.paddingTop||"")||""})),t)try{let _=JSON.parse(S.dataset.ddcPrevHdrVars||"{}");S.style.setProperty("--mdc-top-app-bar-height",_.mdc||""),S.style.setProperty("--app-header-height",_.app||""),S.style.setProperty("--header-height",_.hdr||""),S.style.setProperty("--ha-header-height",_.hah||""),_.pad!==void 0&&(S.style.paddingTop=_.pad||"")}catch{}else{S.style.setProperty("--mdc-top-app-bar-height","0px"),S.style.setProperty("--app-header-height","0px"),S.style.setProperty("--header-height","0px"),S.style.setProperty("--ha-header-height","0px");try{S.style.paddingTop="0px"}catch{}}}),(((l=this._deepQueryAll)==null?void 0:l.call(this,"#contentContainer"))||[]).forEach(S=>{S&&(S.dataset.ddcPrevContentPadTop===void 0&&(S.dataset.ddcPrevContentPadTop=S.style&&(S.style.paddingTop||"")||""),S.style.paddingTop=t?S.dataset.ddcPrevContentPadTop||"":"0px")}),(((u=this._deepQueryAll)==null?void 0:u.call(this,".main-title"))||[]).forEach(S=>{S&&(S.dataset.ddcPrevDisplayTitle===void 0&&(S.dataset.ddcPrevDisplayTitle=S.style.display||"",S.dataset.ddcPrevVisTitle=S.style.visibility||""),t?(S.style.display=S.dataset.ddcPrevDisplayTitle||"",S.style.visibility=S.dataset.ddcPrevVisTitle||""):(S.style.display="none",S.style.visibility="hidden"))})}catch{}}_setSidebarVisible_(t=!0){var r,o;try{(((r=this._deepQueryAll)==null?void 0:r.call(this,"ha-sidebar"))||[]).forEach(l=>{l&&(l.dataset.ddcPrevDisplaySidebar===void 0&&(l.dataset.ddcPrevDisplaySidebar=l.style.display||""),l.style.display=t?l.dataset.ddcPrevDisplaySidebar||"":"none")}),(((o=this._deepQueryAll)==null?void 0:o.call(this,"ha-drawer"))||[]).forEach(l=>{if(l){l.dataset.ddcPrevDrawerWidth===void 0&&(l.dataset.ddcPrevDrawerWidth=l.style.getPropertyValue("--mdc-drawer-width")||""),t?l.style.setProperty("--mdc-drawer-width",l.dataset.ddcPrevDrawerWidth||""):l.style.setProperty("--mdc-drawer-width","0px");try{!t&&typeof l.close=="function"&&l.close()}catch{}}})}catch{}}_applyHaChromeVisibility_(){var t;try{let r=!!this.editMode||((t=this._isInHaEditorPreview)==null?void 0:t.call(this));r||!this.hideHaHeader?this._setHeaderVisible_(!0):this._setHeaderVisible_(!1),r||!this.hideHaSidebar?this._setSidebarVisible_(!0):this._setSidebarVisible_(!1)}catch{}}_applyBackgroundImageFromConfig(){var c;try{let s=navigator.userAgent||"";if(/iPad|iPhone|iPod/.test(s)&&r&&typeof r.src=="string"&&r.src.startsWith("data:")&&r.src.length>3e5){console.warn("[drag-and-drop-card] Skipping large inline background on iOS for stability.");return}}catch{}let t=this._config||{},r=t.background_image||t.bg_image||null,o=this.cardContainer;if(o)if(r&&r.src){let s=String(r.src).trim(),l=r.repeat===!0||r.repeat==="repeat"?"repeat":"no-repeat",u=Math.max(0,Math.min(1,Number((c=r.opacity)!=null?c:1))),f=r.size||"cover",v=r.position||"center center",m=r.attachment||"scroll",y=r.filter||"none";o.style.setProperty("--ddc-bg-image",s?`url("${s.replace(/"/g,'"')}")`:"none"),o.style.setProperty("--ddc-bg-repeat",l),o.style.setProperty("--ddc-bg-opacity",String(u)),o.style.setProperty("--ddc-bg-size",f),o.style.setProperty("--ddc-bg-position",v),o.style.setProperty("--ddc-bg-attachment",m),o.style.setProperty("--ddc-bg-filter",y),o.classList.add("has-bg-image")}else o.style.removeProperty("--ddc-bg-image"),o.style.removeProperty("--ddc-bg-repeat"),o.style.removeProperty("--ddc-bg-opacity"),o.style.removeProperty("--ddc-bg-size"),o.style.removeProperty("--ddc-bg-position"),o.style.removeProperty("--ddc-bg-attachment"),o.style.removeProperty("--ddc-bg-filter"),o.classList.remove("has-bg-image")}_applyBackgroundFromConfig(){var t,r,o,c,s,l,u,f;try{let v=((t=this._config)==null?void 0:t.background_mode)||((o=(r=this._config)==null?void 0:r.background_image)!=null&&o.src?"image":"none");if((c=this._destroyParticles_)==null||c.call(this),(s=this._destroyYouTube_)==null||s.call(this),v!=="image"){let m=this.cardContainer;m&&(m.style.removeProperty("--ddc-bg-image"),m.style.removeProperty("--ddc-bg-repeat"),m.style.removeProperty("--ddc-bg-opacity"),m.style.removeProperty("--ddc-bg-size"),m.style.removeProperty("--ddc-bg-position"),m.style.removeProperty("--ddc-bg-attachment"),m.style.removeProperty("--ddc-bg-filter"),m.classList.remove("has-bg-image"))}if(v==="image"){(l=this._applyBackgroundImageFromConfig)==null||l.call(this);return}if(v==="particles"){let m=((u=this._config)==null?void 0:u.background_particles)||{};this._attachParticlesBackground_(m);return}if(v==="youtube"){let m=((f=this._config)==null?void 0:f.background_youtube)||{};this._attachYouTubeBackground_(m);return}}catch(v){console.warn("[drag-and-drop-card] _applyBackgroundFromConfig failed:",v)}}_ensureBgHost_(){let t=this.cardContainer;if(!t)return null;let r=t.querySelector("#ddcBgHost");return r?r.innerHTML="":(r=document.createElement("div"),r.className="ddc-bg-host",r.id="ddcBgHost",r.setAttribute("aria-hidden","true"),t.prepend(r)),r}async _loadScriptOnce_(t){if(!t)throw new Error("script src required");if(this.__scriptCache||(this.__scriptCache=new Map),this.__scriptCache.has(t))return this.__scriptCache.get(t);let r=new Promise((o,c)=>{let s=document.createElement("script");s.src=t,s.async=!0,s.onload=()=>o(!0),s.onerror=()=>c(new Error("failed to load "+t)),document.head.appendChild(s)});return this.__scriptCache.set(t,r),r}_getRenderRoot_(){return this.renderRoot||this.shadowRoot||this}_withScopedDocument_(t){let r=this._getRenderRoot_();if(!r||r===document||!r.querySelector)return t();let o=document,c=o.getElementById.bind(o),s=o.querySelector?o.querySelector.bind(o):null;o.getElementById=l=>{try{let u=window.CSS&&CSS.escape?CSS.escape(String(l)):String(l);return r.querySelector("#"+u)||c(l)}catch{return c(l)}},s&&(o.querySelector=l=>{try{return r.querySelector(l)||s(l)}catch{return s(l)}});try{return t()}finally{o.getElementById=c,s&&(o.querySelector=s)}}async _ensureParticles_(){if(window.particlesJS)return!0;if(!this.__particlesLoadPromise){let t=r=>new Promise((o,c)=>{let s=document.createElement("script");s.src=r,s.async=!0,s.onload=()=>o(!0),s.onerror=()=>c(new Error("Failed to load "+r)),document.head.appendChild(s)});this.__particlesLoadPromise=t("/local/particles.min.js").catch(()=>t("https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js")).then(()=>!!window.particlesJS).catch(()=>!1)}return this.__particlesLoadPromise}_attachParticlesBackground_(t={}){var f,v;let r=(f=this._ensureBgHost_)==null?void 0:f.call(this);if(!r)return;try{(v=this._destroyParticles_)==null||v.call(this)}catch{}r.innerHTML="";let o=document.createElement("div");o.id="ddcParticles",o.className="particles-js",o.style.position="absolute",o.style.inset="0",r.appendChild(o);let c={particles:{number:{value:30,density:{enable:!0,value_area:1200}},color:{value:"#ffffff"},shape:{type:"circle"},opacity:{value:.35},size:{value:2.5,random:!0},line_linked:{enable:!1,distance:150,color:"#ffffff",opacity:.3,width:1},move:{enable:!0,speed:.7,out_mode:"out"}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1},onclick:{enable:!1},resize:!0},modes:{repulse:{distance:100},push:{particles_nb:3}}},retina_detect:!1},s=!!t.pointer_events,l=t.config||JSON.parse(JSON.stringify(c));s?(l.interactivity.events.onhover={enable:!0,mode:"repulse"},l.interactivity.events.onclick={enable:!0,mode:"push"},r.style.pointerEvents="auto"):r.style.pointerEvents="none",(async()=>{var w;if(!await((w=this._ensureParticles_)==null?void 0:w.call(this))||!window.particlesJS)return;await(typeof requestAnimationFrame=="function"?new Promise(S=>requestAnimationFrame(()=>S())):Promise.resolve()),await(typeof requestAnimationFrame=="function"?new Promise(S=>requestAnimationFrame(()=>S())):Promise.resolve());let y=l;if(t.config_url)try{y=await(await fetch(t.config_url,{cache:"no-store"})).json()}catch(S){console.warn("[drag-and-drop-card] Failed to fetch particles config; falling back to defaults",S),y=l}this._withScopedDocument_(()=>{if(!Array.isArray(window.pJSDom))try{window.pJSDom=[]}catch{}window.particlesJS("ddcParticles",y)}),Array.isArray(window.pJSDom)&&window.pJSDom.length&&(this.__particlesInst=window.pJSDom[window.pJSDom.length-1])})(),this.__particlesHost=r}_destroyParticles_(){try{Array.isArray(window.pJSDom)||(window.pJSDom=[]),window.pJSDom.length&&(window.pJSDom.forEach(t=>{var r,o,c,s,l,u,f,v;try{(s=(c=(o=(r=t.pJS)==null?void 0:r.fn)==null?void 0:o.vendors)==null?void 0:c.destroy)==null||s.call(c)}catch{}try{(v=(f=(u=(l=t.pJS)==null?void 0:l.fn)==null?void 0:u.vendors)==null?void 0:f.destroypJS)==null||v.call(f)}catch{}}),window.pJSDom.length=0)}catch{}this.__particlesHost&&(this.__particlesHost.innerHTML=""),this.__particlesHost=null,this.__particlesInst=null}_parseYouTubeId_(t){if(!t)return null;let r=String(t).trim(),o=r.match(/(?:youtube\.com\/.*[?&]v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([A-Za-z0-9_-]{11})/)||r.match(/^([A-Za-z0-9_-]{11})$/);return o?o[1]:null}async _ensureYouTube_(){var t;return(t=window.YT)!=null&&t.Player?!0:(this.__ytReadyPromise||(this.__ytReadyPromise=new Promise(r=>{var s;let o=()=>r(!0);if((s=window.YT)!=null&&s.Player)return o();window.onYouTubeIframeAPIReady=o;let c=document.createElement("script");c.src="https://www.youtube.com/iframe_api",c.async=!0,c.onerror=()=>r(!1),document.head.appendChild(c)})),this.__ytReadyPromise)}_attachYouTubeIframeDirect_(t,r,{start:o,end:c,mute:s=!0,loop:l=!0}={}){var m;let u=new URLSearchParams({autoplay:"1",mute:s?"1":"0",controls:"0",playsinline:"1",rel:"0",modestbranding:"1",iv_load_policy:"3",loop:l?"1":"0"});l&&u.set("playlist",r),Number.isFinite(o)&&u.set("start",String(o)),Number.isFinite(c)&&u.set("end",String(c));let f=`https://www.youtube.com/embed/${r}?${u.toString()}`,v=document.createElement("iframe");v.src=f,v.setAttribute("frameborder","0"),v.setAttribute("allow","autoplay; encrypted-media; picture-in-picture; fullscreen"),v.setAttribute("allowfullscreen","true"),v.style.position="absolute",v.style.inset="0",v.style.width="100%",v.style.height="100%",t.appendChild(v),this.__ytWrap=t,(m=this._layoutYtBackground_)==null||m.call(this)}_attachYouTubeBackground_(t={}){this.__ytSize=t.size||"cover",this.__ytPosition=t.position||"center",this.__ytOpacity=t.opacity!=null?Math.max(0,Math.min(1,Number(t.opacity))):1,this.__ytAttachment=t.attachment||"scroll";let r=String(this.__ytPosition).toLowerCase(),o=.5,c=.5;r.includes("left")?o=0:r.includes("right")&&(o=1),r.includes("top")?c=0:r.includes("bottom")&&(c=1),(r==="center"||r==="centre"||r==="middle")&&(o=.5,c=.5),this.__ytAx=o,this.__ytAy=c;let s=this._ensureBgHost_();if(!s)return;let l=this._parseYouTubeId_(t.video_id||t.url);if(!l){console.warn("[drag-and-drop-card] No YouTube video id");return}let u=document.createElement("div");u.className="yt-bg",this.__ytAttachment==="fixed"?(u.style.position="fixed",u.style.left="0",u.style.top="0",u.style.width="100%",u.style.height="100%"):(u.style.position="absolute",u.style.inset="0"),u.style.opacity=String(this.__ytOpacity),u.style.filter="none",u.style.pointerEvents="none",s.appendChild(u);let f=document.createElement("div");f.id="ddcYtFrame",f.style.position="absolute",f.style.left="0",f.style.top="0",f.style.width="100%",f.style.height="100%",u.appendChild(f);let v=Number.isFinite(t.start)?Number(t.start):void 0,m=Number.isFinite(t.end)?Number(t.end):void 0,y=t.mute!==!1,w=t.loop!==!1;(async()=>{if(!await this._ensureYouTube_()||!(window.YT&&window.YT.Player)){if(this._attachYouTubeIframeDirect_(u,l,{start:v,end:m,mute:y,loop:w}),!this.__ytResizeObs){this.__ytResizeObs=new ResizeObserver(()=>{var T;return(T=this._layoutYtBackground_)==null?void 0:T.call(this)});try{this.__ytResizeObs.observe(this.cardContainer)}catch{}window.addEventListener("resize",this.__ytOnWinResize=()=>{var T;return(T=this._layoutYtBackground_)==null?void 0:T.call(this)})}return}if(this.__ytPlayer=new window.YT.Player(f,{width:"100%",height:"100%",videoId:l,playerVars:{autoplay:1,controls:0,disablekb:1,fs:0,iv_load_policy:3,modestbranding:1,rel:0,playsinline:1,loop:w?1:0,playlist:w?l:void 0,start:v,end:m},events:{onReady:T=>{var R;try{y&&T.target.mute(),T.target.playVideo()}catch{}(R=this._layoutYtBackground_)==null||R.call(this)},onStateChange:T=>{if(T.data===window.YT.PlayerState.ENDED&&w)try{let R=Number.isFinite(v)?v:0,C=window.performance&&performance.now?performance.now():Date.now();(!this.__ytLastLoopAt||C-this.__ytLastLoopAt>1500)&&(this.__ytLastLoopAt=C,T.target.seekTo(R,!0),T.target.playVideo())}catch{}}}}),!this.__ytResizeObs){this.__ytResizeObs=new ResizeObserver(()=>{var T;return(T=this._layoutYtBackground_)==null?void 0:T.call(this)});try{this.__ytResizeObs.observe(this.cardContainer)}catch{}window.addEventListener("resize",this.__ytOnWinResize=()=>{var T;return(T=this._layoutYtBackground_)==null?void 0:T.call(this)})}})(),this.__ytWrap=u}_layoutYtBackground_(){var t,r,o,c,s,l,u,f;try{if(!this.__ytWrap)return;let v=this.__scaleOuter||this.cardContainer,m=0,y=0;try{m=parseFloat((r=(t=this.cardContainer)==null?void 0:t.style)==null?void 0:r.width)||((o=this.cardContainer)==null?void 0:o.scrollWidth)||((c=this.cardContainer)==null?void 0:c.offsetWidth)||0,y=parseFloat((l=(s=this.cardContainer)==null?void 0:s.style)==null?void 0:l.height)||((u=this.cardContainer)==null?void 0:u.scrollHeight)||((f=this.cardContainer)==null?void 0:f.offsetHeight)||0}catch{}let w,S;try{if(String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"){let V=v.getBoundingClientRect();if(w=V.width,m>0){let $=Math.min(w/m,1);S=y*$}else S=V.height}else w=m||v.getBoundingClientRect().width,S=y||v.getBoundingClientRect().height}catch{let B=v.getBoundingClientRect();w=B.width,S=B.height}let _=this.__ytAttachment==="fixed",T=_&&window.innerWidth||w,R=_&&window.innerHeight||S;if(!w||!S)return;let C=this.__ytSize||"cover",O=16/9,z=_?T/R:w/S,b,M,I=0,F=0;C==="100% 100%"||C==="fill"||C==="stretch"?(b=_?T:w,M=_?R:S,I=0,F=0):C==="contain"?z>O?(M=_?R:S,b=(_?R:S)*O,F=0,I=(w-b)/2):(b=_?T:w,M=(_?T:w)/O,I=0,F=(S-M)/2):z>O?(b=_?T:w,M=(_?T:w)/O,I=0,F=(S-M)/2):(M=_?R:S,b=(_?R:S)*O,F=0,I=(w-b)/2),this.__ytWrap.style.overflow="hidden";let N=this.__ytAx!=null?this.__ytAx:.5,H=this.__ytAy!=null?this.__ytAy:.5;I=((_?T:w)-b)*N,F=((_?R:S)-M)*H;let Q=this.__ytWrap.querySelector("iframe")||this.__ytWrap;Q.style.width=`${b}px`,Q.style.height=`${M}px`,Q.style.left=`${I}px`,Q.style.top=`${F}px`}catch{}}_destroyYouTube_(){var t,r,o;try{(r=(t=this.__ytPlayer)==null?void 0:t.destroy)==null||r.call(t)}catch{}if(this.__ytPlayer=null,this.__ytResizeObs){try{this.__ytResizeObs.disconnect()}catch{}this.__ytResizeObs=null}this.__ytOnWinResize&&(window.removeEventListener("resize",this.__ytOnWinResize),this.__ytOnWinResize=null),(o=this.__ytWrap)!=null&&o.parentNode&&this.__ytWrap.parentNode.removeChild(this.__ytWrap),this.__ytWrap=null}_evaluateVisibility_(t){try{let r=this.hass||this._hass;if(!Array.isArray(t)||t.length===0)return!0;let o=c=>{var l,u,f,v,m;if(!c||typeof c!="object")return!0;let s=c.condition||c.type||"state";if(s==="and"||s==="or"){let y=Array.isArray(c.conditions)?c.conditions:[];return y.length===0?!0:s==="and"?y.every(w=>o(w)):y.some(w=>o(w))}if(s==="state"){let y=c.entity;if(!y)return!0;let w=(l=r==null?void 0:r.states)==null?void 0:l[y];if(!w)return!1;let S=String((u=w.state)!=null?u:"");return c.state!==void 0?(Array.isArray(c.state)?c.state:[c.state]).some(T=>String(T)===S):c.state_not!==void 0?!(Array.isArray(c.state_not)?c.state_not:[c.state_not]).some(T=>String(T)===S):!0}if(s==="numeric_state"){let y=c.entity;if(!y)return!0;let w=(f=r==null?void 0:r.states)==null?void 0:f[y];if(!w)return!1;let S=parseFloat(w.state);return!(isNaN(S)||c.above!==void 0&&!(S>Number(c.above))||c.below!==void 0&&!(S<Number(c.below)))}if(s==="screen"){let y=c.media_query||c.query;if(!y||typeof y!="string")return!0;try{return window.matchMedia(y).matches}catch{return!0}}if(s==="user"){let y=Array.isArray(c.users)?c.users:c.user?[c.user]:[];if(!y.length)return!0;let w=((v=r==null?void 0:r.user)==null?void 0:v.id)||((m=r==null?void 0:r.user)==null?void 0:m.id)||null;return w?y.includes(w):!0}return!0};return t.every(c=>o(c))}catch(r){return console.warn("[ddc:visibility] evaluate error",r),!0}}_applyVisibility_(){var t;try{let r=((t=this.cardContainer)==null?void 0:t.children)||[],o=this._normalizeTabId(this.activeTab);for(let c of r){if(!c||!c.firstElementChild||this._normalizeTabId(c.dataset.tabId)!==o)continue;let u=(this._extractCardConfig(c.firstElementChild)||{}).visibility,f=this.editMode?!0:this._evaluateVisibility_(u);c.style.display=f?"":"none"}}catch(r){console.warn("[ddc:visibility] apply error",r)}}async _onKeyDown_(t){var l,u,f,v,m,y,w,S,_,T;if(!this.editMode||this._isTypingTarget_(t.target))return;let r=Number(this.gridSize||10),o=t.altKey?1:t.shiftKey?r*5:r,c=0,s=0;switch(t.key){case"ArrowLeft":c=-o;break;case"ArrowRight":c=o;break;case"ArrowUp":s=-o;break;case"ArrowDown":s=o;break}if(c||s){t.preventDefault(),this._moveSelectionBy_(c,s,{liveSnap:!t.altKey});return}if(t.key==="Delete"||t.key==="Backspace"){let R=this._selection&&this._selection.size?Array.from(this._selection):[];if(!R.length)return;t.preventDefault(),R.forEach(C=>C.remove()),(l=this._clearSelection)==null||l.call(this),(u=this._resizeContainer)==null||u.call(this),(f=this._queueSave)==null||f.call(this,"delete-key"),(v=this._ensurePlaceholderIfEmpty)==null||v.call(this);return}if((t.ctrlKey||t.metaKey)&&(t.key==="d"||t.key==="D")){t.preventDefault(),await this._duplicateSelection_();return}if((t.ctrlKey||t.metaKey)&&t.key==="]"){t.preventDefault(),this._selection&&((y=(m=this._selection).forEach)==null||y.call(m,R=>{var C;return(C=this._adjustZ)==null?void 0:C.call(this,R,1)})),(w=this._queueSave)==null||w.call(this,"z-up");return}if((t.ctrlKey||t.metaKey)&&t.key==="["){t.preventDefault(),this._selection&&((_=(S=this._selection).forEach)==null||_.call(S,R=>{var C;return(C=this._adjustZ)==null?void 0:C.call(this,R,-1)})),(T=this._queueSave)==null||T.call(this,"z-down");return}}async _duplicateSelection_(){var r,o,c,s,l,u,f,v,m,y,w,S;if(!this._selection||!this._selection.size)return;let t=Array.from(this._selection);for(let _ of t)try{let T=((r=this._extractCardConfig)==null?void 0:r.call(this,_.firstElementChild))||{},R=await((o=this._createCard)==null?void 0:o.call(this,T)),C=(c=this._makeWrapper)==null?void 0:c.call(this,R);if(!R||!C)continue;C.style.width=_.style.width,C.style.height=_.style.height;let O=Number(this.gridSize||10),z=(parseFloat(_.getAttribute("data-x"))||0)+O,b=(parseFloat(_.getAttribute("data-y"))||0)+O;(s=this._setCardPosition)==null||s.call(this,C,z,b);let M=(((l=this._highestZ)==null?void 0:l.call(this))||0)+1;C.style.zIndex=String(Math.max(M,6));try{let I=(u=_.dataset)==null?void 0:u.tabId;I&&(C.dataset.tabId=I)}catch{}(f=this.cardContainer)==null||f.appendChild(C);try{(v=this._addTabSelectorToChip)==null||v.call(this,C,C.dataset.tabId)}catch{}try{(m=this._rebuildOnce)==null||m.call(this,C.firstElementChild)}catch{}try{(y=this._initCardInteract)==null||y.call(this,C)}catch{}}catch{}try{(w=this._resizeContainer)==null||w.call(this)}catch{}try{(S=this._queueSave)==null||S.call(this,"duplicate")}catch{}}_moveSelectionBy_(t,r,{liveSnap:o=!0}={}){var v,m,y,w,S;if(!this._selection||!this._selection.size)return;let c=Array.from(this._selection),s=Number(this.gridSize||10),l=(v=this._isContainerFixed)==null?void 0:v.call(this),u=((m=this._getContainerSize)==null?void 0:m.call(this))||{w:1/0,h:1/0},f=c.map(_=>{let T=parseFloat(_.getAttribute("data-x-raw"))||parseFloat(_.getAttribute("data-x"))||0,R=parseFloat(_.getAttribute("data-y-raw"))||parseFloat(_.getAttribute("data-y"))||0,C=parseFloat(_.style.width)||_.getBoundingClientRect().width,O=parseFloat(_.style.height)||_.getBoundingClientRect().height,z=T+t,b=R+r;l&&(z=Math.max(0,Math.min(z,Math.max(0,u.w-C))),b=Math.max(0,Math.min(b,Math.max(0,u.h-O))));let M=o?Math.round(z/s)*s:z,I=o?Math.round(b/s)*s:b;return{el:_,rawX:z,rawY:b,snapX:M,snapY:I,w:C,h:O}});if(this.disableOverlap&&typeof this._pushCardsOutOfTheWay=="function")try{this._pushCardsOutOfTheWay(f,t,r,o,s)}catch{}for(let _ of f){_.el.setAttribute("data-x-raw",String(_.rawX)),_.el.setAttribute("data-y-raw",String(_.rawY));try{(y=this._setCardPosition)==null||y.call(this,_.el,_.snapX,_.snapY)}catch{}}try{(w=this._resizeContainer)==null||w.call(this)}catch{}try{(S=this._queueSave)==null||S.call(this,"nudge")}catch{}}_syncTabsWidth_(){var t;try{if(String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto")return;let o=this.tabsBar;if(!o)return;try{let l=window.innerWidth||((t=document.documentElement)==null?void 0:t.clientWidth)||0;if(l&&l<=768){o.style.width="",o.style.maxWidth="";return}}catch{}if(this.tabsPosition==="left"){o.style.width="",o.style.maxWidth="";return}let c=this.cardContainer||this.__scaleOuter;if(!c)return;let s=0;try{let l=c.getBoundingClientRect();s=l&&l.width?l.width:0}catch{}if(s<=0&&this.__scaleOuter&&this.__scaleOuter!==c)try{let l=this.__scaleOuter.getBoundingClientRect();s=l&&l.width?l.width:0}catch{}s>0&&(o.style.width=`${s}px`,o.style.maxWidth=`${s}px`)}catch{}}_isTypingTarget_(t){var c,s,l,u;if(!t||t===window||t===document)return!1;let r=(c=t.closest)==null?void 0:c.call(t,'input, textarea, [contenteditable="true"], ha-textfield, mwc-textfield');if(!r)return!1;let o=((l=(s=r.tagName)==null?void 0:s.toLowerCase)==null?void 0:l.call(s))||"";return o==="input"||o==="textarea"||((u=r.hasAttribute)==null?void 0:u.call(r,"contenteditable"))}_scheduleReflowAndScale(){this.__reflowRAF||(this.__reflowRAF=requestAnimationFrame(()=>{var t,r,o;this.__reflowRAF=null;try{(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="dynamic"&&((t=this._resizeContainer)==null||t.call(this))}catch{}try{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(r=this._applyAutoFillNoScale)==null||r.call(this):(o=this._applyAutoScale)==null||o.call(this)}catch{}}))}__ddcBindPointerListeners(){if(!this.__ddcPtrBound){this.__ddcPtrBound=!0,this.__onDDCPointerDown=t=>{var r,o;try{if(t.button!==void 0&&t.button!==0)return;let c=((r=t.composedPath)==null?void 0:r.call(t))||[],s=null;for(let l of c)if(l&&l.classList&&l.classList.contains("card-wrapper")){s=l;break}if(!s)return;this.__ddcDragging=!0,this.__scaleOuter&&(this.__prevOverflow=this.__scaleOuter.style.overflow,this.__scaleOuter.style.overflow="visible"),(o=this._scheduleReflowAndScale)==null||o.call(this)}catch{}},this.__onDDCPointerMove=t=>{var r;try{if(!this.__ddcDragging)return;(r=this._scheduleReflowAndScale)==null||r.call(this)}catch{}},this.__onDDCPointerUp=t=>{var r,o;try{if(!this.__ddcDragging)return;this.__ddcDragging=!1,this.__scaleOuter&&(this.__scaleOuter.style.overflow=this.__prevOverflow||"");try{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(r=this._applyAutoFillNoScale)==null||r.call(this):(o=this._applyAutoScale)==null||o.call(this)}catch{}}catch{}};try{this.addEventListener("pointerdown",this.__onDDCPointerDown,{passive:!0})}catch{}try{this.addEventListener("pointermove",this.__onDDCPointerMove,{passive:!0})}catch{}try{window.addEventListener("pointerup",this.__onDDCPointerUp,{passive:!0})}catch{}try{window.addEventListener("pointercancel",this.__onDDCPointerUp,{passive:!0})}catch{}}}_renderEditToolbar_(){this.shadowRoot.querySelectorAll(".ddc-toolbar").forEach(y=>y.remove()),this._ensureToolbarStyles_();let t=document.createElement("div");t.className="ddc-toolbar";let r=document.createElement("div");r.className="ddc-t-group",r.append(this._mkBtn_("add_card","mdi:plus-box","Add card (A)","primary"),this._mkBtn_("snap_toggle","mdi:magnet","Toggle snap (G)"),this._mkBtn_("align_grid","mdi:grid","Align to grid"));let o=document.createElement("div");o.className="ddc-t-group";let c=document.createElement("div");c.className="ddc-t-status";let s=document.createElement("div");s.className="ddc-t-dot"+(this.__dirty?" dirty":"");let l=document.createElement("span");l.textContent=this.__dirty?"Unsaved changes":`Saved${this.__lastSavedAt?" \xB7 "+this.__lastSavedAt:""}`,c.append(s,l),o.appendChild(c);let u=document.createElement("div");u.className="ddc-t-group",u.append(this._mkBtn_("reload","mdi:refresh","Reload (R)","ghost"),this._mkBtn_("open_hads","mdi:alpha-h-box-outline","Open HACS/HADS","ghost"),this._mkBtn_("apply","mdi:content-save","Apply / Save (S)","primary"),this._mkBtn_("exit_edit","mdi:logout-variant","Exit edit (Esc)","danger"));let f=document.createElement("div");f.className="ddc-t-group ddc-t-row",f.append(r);let v=document.createElement("div");v.className="ddc-t-group ddc-t-row",v.append(o);let m=document.createElement("div");m.className="ddc-t-group ddc-t-row",m.append(u),t.append(f,document.createElement("div")).lastChild.className="ddc-t-sep",t.append(v,document.createElement("div")).lastChild.className="ddc-t-sep",t.append(m),t.addEventListener("click",y=>{let w=y.target.closest("[data-action]");w&&this._onToolbarAction_(w.dataset.action,{button:w,bar:t,dot:s,txt:l})}),this.shadowRoot.appendChild(t);try{this.__toolbarRO&&this.__toolbarRO.disconnect(),this.__toolbarRO=new ResizeObserver(y=>{for(let w of y)t.classList.toggle("compact",w.contentRect.width<980)}),this.__toolbarRO.observe(t)}catch{}this.__toolbarKeyHandler=y=>{if(!(!this.editMode&&!this.isEditing)){if(y.key==="a"||y.key==="A")return this._onToolbarAction_("add_card");if(y.key==="s"||y.key==="S")return this._onToolbarAction_("apply");if(y.key==="r"||y.key==="R")return this._onToolbarAction_("reload");if(y.key==="g"||y.key==="G")return this._onToolbarAction_("snap_toggle");if(y.key==="Escape")return this._onToolbarAction_("exit_edit")}},window.addEventListener("keydown",this.__toolbarKeyHandler)}async _onToolbarAction_(t,r={}){var o,c,s,l,u,f,v,m,y,w,S;switch(t){case"add_card":(o=this._openAddCardDialog_)!=null&&o.call(this)||(c=this._addNewCard_)!=null&&c.call(this)||((s=this._openEntityPicker_)==null||s.call(this));break;case"snap_toggle":{this.dragLiveSnap=!this.dragLiveSnap,(l=this._initInteract)==null||l.call(this),(u=this._toast_)==null||u.call(this,`Live snap ${this.dragLiveSnap?"ON":"OFF"}`);break}case"align_grid":(f=this._alignAllToGrid_)==null||f.call(this,this.gridSize);break;case"reload":(v=this._reloadLayout_)==null||v.call(this);break;case"open_hads":(m=this._openHACS_)!=null&&m.call(this)||window.open("/hacs","_blank")||window.open("/hacsfiles","_blank");break;case"apply":{let _=()=>{this._setDirty_(!1),r!=null&&r.txt&&(r.txt.textContent=`Saved \xB7 ${this.__lastSavedAt}`),r!=null&&r.dot&&r.dot.classList.remove("dirty","error")},T=()=>{r!=null&&r.dot&&r.dot.classList.add("error")};try{this._saveLayoutNow_?await this._saveLayoutNow_():this._persistThisCardConfigToStorage_?await this._persistThisCardConfigToStorage_():(y=this._queueSave)==null||y.call(this,"toolbar-apply",!0),this.__lastSavedAt=new Date().toLocaleTimeString(),_()}catch(R){console.warn(R),T()}break}case"exit_edit":if((w=this._toggleEditMode)!=null&&w.call(this,!1)||(S=this._exitEditMode_)!=null&&S.call(this)||(this.isEditing=!1),this.__toolbarKeyHandler&&(window.removeEventListener("keydown",this.__toolbarKeyHandler),this.__toolbarKeyHandler=null),this.__toolbarRO){try{this.__toolbarRO.disconnect()}catch{}this.__toolbarRO=null}this.shadowRoot.querySelectorAll(".ddc-toolbar").forEach(_=>_.remove());break}}_ensureScaleWrapper(){let t=this.cardContainer;if(!t||this.__scaleOuter&&this.__scaleOuter.contains(t))return;let r=document.createElement("div");r.className="ddc-scale-outer",Object.assign(r.style,{position:"relative",width:"100%",overflow:"hidden"}),t.parentNode&&(t.parentNode.insertBefore(r,t),r.appendChild(t)),Object.assign(t.style,{position:"absolute",top:"0",left:"0",transformOrigin:"top left"}),this.__scaleOuter=r}_hasCardModDeep(t){try{if(!t||typeof t!="object")return!1;if(t.card_mod||t.type==="custom:mod-card")return!0;if(t.card)return this._hasCardModDeep(t.card);if(Array.isArray(t.cards)){for(let r of t.cards)if(this._hasCardModDeep(r))return!0}return!1}catch{return!1}}_rebuildOnce(t){try{if(!t||(this.__rebuiltCards||(this.__rebuiltCards=new WeakSet),this.__rebuiltCards.has(t)))return;this.__rebuiltCards.add(t),t.dispatchEvent(new Event("ll-rebuild",{bubbles:!0,composed:!0}))}catch{}}_deepQueryAll(t,r=document){let o=[],c=s=>{if(!s)return;if(s.querySelectorAll)try{s.querySelectorAll(t).forEach(f=>o.push(f))}catch{}let l=document.createTreeWalker(s,NodeFilter.SHOW_ELEMENT,null),u=s;for(;u;){let f=u.shadowRoot;f&&c(f),u=l.nextNode()}};return c(r),o}_syncEditorsStorageKey(){try{let t=this.storageKey||"";this._deepQueryAll("#storage_key").forEach(o=>{try{o&&o.tagName==="INPUT"&&o.value!==t&&(o.value=t,o.dispatchEvent(new Event("input",{bubbles:!0})),o.dispatchEvent(new Event("change",{bubbles:!0})))}catch{}})}catch{}}static _genKey(){var r,o;return`layout_${((o=(r=globalThis.crypto)==null?void 0:r.randomUUID)==null?void 0:o.call(r))||`${Date.now().toString(36)}_${Math.random().toString(36).slice(2,8)}`}`}static get type(){return"drag-and-drop-card"}static get title(){return"Drag & Drop Card"}static get description(){return"Flexible grid layout card with drag\u2011and\u2011drop editing."}static get icon(){return"mdi:cursor-move"}static get group(){return"custom"}static getStubConfig(){return{type:"custom:drag-and-drop-card",storage_key:this._genKey(),grid:20,drag_live_snap:!0,auto_save:!0,auto_save_debounce:800,container_size_mode:"auto",container_background:"linear-gradient(135deg, #1e3a8a, #0ea5e9)",card_background:"linear-gradient(135deg, #111827, #1f2937)",debug:!1,disable_overlap:!1,auto_resize_cards:!0,background_mode:"none",animate_cards:!0,container_preset_orientation:"auto",edit_mode_pin:"",container_fixed_width:null,container_fixed_height:null,container_preset:"fullhd",card_shadow:!0,hide_HA_Header:!1,hide_HA_Sidebar:!1,screen_saver_enabled:!0,screen_saver_delay:15e5,tabs:[{id:"home",label:"Home",icon:"mdi:home",label_mode:"both"}],default_tab:"home"}}static getConfigElement(){let t=document.createElement("div");t.style.display="grid",t.style.gridTemplateColumns="1fr",t.style.rowGap="12px";let r=document.createElement("ha-textfield");r.id="storage_key",r.label="Storage key",r.placeholder="Auto-generated if left blank",t.appendChild(r);let o=document.createElement("div");return o.style.fontSize="0.85rem",o.style.opacity="0.7",o.textContent="Unique key for saving layout positions. Leave blank to auto\u2011generate.",t.appendChild(o),t.setConfig=(y={})=>{var w;t._config={type:y.type||"custom:drag-and-drop-card",...y},t._config.storage_key||(t._config.storage_key=`layout_${((w=crypto==null?void 0:crypto.randomUUID)==null?void 0:w.call(crypto))||Date.now().toString(36)}`),r.value=t._config.storage_key||""},t.getConfig=()=>{let y={...t._config||{}};return y.type="custom:drag-and-drop-card",y.storage_key=r.value||"",y},r.addEventListener("input",()=>{t.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t.getConfig()}}))}),t;let c=()=>{let y=v();u.disabled=!y},s=async()=>{var w,S;let y=el.getConfig();el.dispatchEvent(new CustomEvent("config-changed",{detail:{config:y}})),c();try{if(this.storageKey){let _=this._exportableOptions?this._exportableOptions():y;await this._saveOptionsToBackend(this.storageKey,_)}}catch{}try{await this._persistThisCardConfigToStorage_()}catch{try{let T=this._exportableOptions?this._exportableOptions():y;await((w=this._persistOptionsToYaml)==null?void 0:w.call(this,T,{patchAllInCurrentViewIfNoKey:!0}))}catch{}}try{(S=this._applyBackgroundFromConfig)==null||S.call(this)}catch{}},l=()=>{var w,S,_,T;let y=(T=(_=(w=el.querySelector("#sizeMode"))==null?void 0:w.value)!=null?_:(S=el.querySelector("#ddc-setting-sizeMode"))==null?void 0:S.value)!=null?T:"dynamic";el.querySelector("#sizeCustom").style.display=y==="fixed_custom"?"inline-flex":"none",el.querySelector("#sizePresetWrap").style.display=y==="preset"?"inline-flex":"none"},u=el.querySelector("#applyBtn"),f=el.querySelector("#revertBtn");["#sizeMode","#sizePreset","#sizeOrientation"].forEach(y=>{let w=el.querySelector(y);if(w){try{w.fixedMenuPosition=!0}catch{}w.addEventListener("closed",S=>S.stopPropagation())}}),el.setConfig=(y={})=>{var _,T,R,C,O,z,b,M;el._config={type:y.type||"custom:drag-and-drop-card",...y},el._config.storage_key||(el._config.storage_key=`layout_${((_=crypto==null?void 0:crypto.randomUUID)==null?void 0:_.call(crypto))||Date.now().toString(36)}`,el.__autokeyPending=!0),el.querySelector("#storage_key").value=el._config.storage_key||"",el.querySelector("#grid").value=(T=el._config.grid)!=null?T:10,el.querySelector("#liveSnap").checked=!!el._config.drag_live_snap,el.querySelector("#autoSave").checked=el._config.auto_save!==!1,el.querySelector("#autoSaveDebounce").value=(R=el._config.auto_save_debounce)!=null?R:800,el.querySelector("#containerBg").value=(C=el._config.container_background)!=null?C:"transparent",el.querySelector("#cardBg").value=(O=el._config.card_background)!=null?O:"var(--ha-card-background, var(--card-background-color))",el.querySelector("#debug").checked=!!el._config.debug,el.querySelector("#noOverlap").checked=!!el._config.disable_overlap,el.querySelector("#autoResize").checked=!!el._config.auto_resize_cards,el.querySelector("#animateCards").checked=!!el._config.animate_cards;let w=el.querySelector("#sizeMode")||el.querySelector("#ddc-setting-sizeMode");w&&(w.value=el._config.container_size_mode||"dynamic"),el.querySelector("#sizeW").value=(z=el._config.container_fixed_width)!=null?z:"",el.querySelector("#sizeH").value=(b=el._config.container_fixed_height)!=null?b:"",el.querySelector("#sizeOrientation").value=el._config.container_preset_orientation||"auto";let S=el.querySelector("#sizePreset");if(!S.__filled){let I=(((M=this._sizePresets)==null?void 0:M.call(this))||[]).reduce((F,N)=>{var H;return(F[H=N.group||"other"]||(F[H]=[])).push(N),F},{});S.innerHTML="";for(let[F,N]of Object.entries(I)){let H=document.createElement("optgroup");H.label=F.replace(/(^.|-.?)/g,B=>B.toUpperCase()),N.forEach(B=>{let V=document.createElement("mwc-list-item");V.value=B.key,V.textContent=`${B.label} (${B.w}\xD7${B.h})`,H.appendChild(V)});let Q=document.createElement("mwc-list-item");Q.setAttribute("disabled",""),Q.textContent=`\u2014 ${H.label} \u2014`,S.appendChild(Q),Array.from(H.children).forEach(B=>S.appendChild(B))}S.__filled=!0}el._config.container_preset&&(S.value=el._config.container_preset),l(),c(),el.__autokeyPending&&(el.__autokeyPending=!1,s())},el.getConfig=()=>{var w,S,_,T;let y={...el._config||{}};y.storage_key=el.querySelector("#storage_key").value||"",y.grid=Number(el.querySelector("#grid").value||10),y.drag_live_snap=!!el.querySelector("#liveSnap").checked,y.auto_save=!!el.querySelector("#autoSave").checked,y.auto_save_debounce=Number(el.querySelector("#autoSaveDebounce").value||800),y.container_background=el.querySelector("#containerBg").value||"transparent",y.card_background=el.querySelector("#cardBg").value||"var(--ha-card-background, var(--card-background-color))",y.debug=!!el.querySelector("#debug").checked,y.disable_overlap=!!el.querySelector("#noOverlap").checked,y.auto_resize_cards=!!el.querySelector("#autoResize").checked;try{let R=el.querySelector("#ddc-bg-mode"),C=el.querySelector("#ddc-setting-bgImg"),O=el.querySelector("#ddc-bg-repeat"),z=el.querySelector("#ddc-bg-size"),b=el.querySelector("#ddc-bg-position"),M=el.querySelector("#ddc-bg-attachment"),I=el.querySelector("#ddc-bg-opacity"),F=el.querySelector("#ddc-particles-url"),N=el.querySelector("#ddc-particles-pointer"),H=el.querySelector("#ddc-youtube-url"),Q=el.querySelector("#ddc-youtube-start"),B=el.querySelector("#ddc-youtube-end"),V=el.querySelector("#ddc-youtube-mute"),$=el.querySelector("#ddc-youtube-loop"),le=el.querySelector("#ddc-youtube-size"),_e=el.querySelector("#ddc-youtube-position"),Re=el.querySelector("#ddc-youtube-attachment"),ge=el.querySelector("#ddc-youtube-opacity"),fe=(R==null?void 0:R.value)||"none";y.background_mode=fe;let he=Oe=>Math.max(0,Math.min(1,Oe)),He=Oe=>{let Ue=parseFloat((Oe==null?void 0:Oe.value)||"100");return Number.isFinite(Ue)?he(Ue/100):1},Ye=Oe=>Object.fromEntries(Object.entries(Oe).filter(([,Ue])=>Ue!=null&&Ue!==""));if(fe==="image"){let Oe=((C==null?void 0:C.value)||"").trim();y.background_image=Ye({src:Oe||void 0,repeat:(O==null?void 0:O.value)||"no-repeat",size:(z==null?void 0:z.value)||"cover",position:(b==null?void 0:b.value)||"center center",attachment:(M==null?void 0:M.value)||"scroll",opacity:He(I)})}if(fe==="particles"&&(y.background_particles=Ye({config_url:((F==null?void 0:F.value)||"").trim()||void 0,pointer_events:!!(N!=null&&N.checked)})),fe==="youtube"){let Oe=Ue=>{let ot=parseInt(((Ue==null?void 0:Ue.value)||"").trim(),10);return Number.isFinite(ot)?ot:void 0};y.background_youtube=Ye({url:((H==null?void 0:H.value)||"").trim()||void 0,start:Oe(Q),end:Oe(B),mute:!!(V!=null&&V.checked),loop:!!($!=null&&$.checked),size:(le==null?void 0:le.value)||"cover",position:(_e==null?void 0:_e.value)||"center center",attachment:(Re==null?void 0:Re.value)||"scroll",opacity:He(ge)})}fe!=="image"&&delete y.background_image,fe!=="particles"&&delete y.background_particles,fe!=="youtube"&&delete y.background_youtube}catch{}return y.animate_cards=!!el.querySelector("#animateCards").checked,y.container_size_mode=(T=(_=(w=el.querySelector("#sizeMode"))==null?void 0:w.value)!=null?_:(S=el.querySelector("#ddc-setting-sizeMode"))==null?void 0:S.value)!=null?T:"dynamic",y.container_fixed_width=Number(el.querySelector("#sizeW").value||0)||void 0,y.container_fixed_height=Number(el.querySelector("#sizeH").value||0)||void 0,y.container_preset=el.querySelector("#sizePreset").value||void 0,y.container_preset_orientation=el.querySelector("#sizeOrientation").value||"auto",y};let v=()=>{let y=el.getConfig(),w=el._config||{};try{return JSON.stringify(y)!==JSON.stringify(w)}catch{return!0}},m=(y,w="input")=>{var S;return(S=el.querySelector(y))==null?void 0:S.addEventListener(w,()=>{y==="#sizeMode"&&l(),c()})};return m("#storage_key"),m("#grid"),m("#liveSnap","change"),m("#autoSave","change"),m("#autoSaveDebounce"),m("#containerBg"),m("#cardBg"),m("#debug","change"),m("#noOverlap","change"),m("#autoResize","change"),m("#animateCards","change"),m("#sizeMode","change"),m("#ddc-setting-sizeMode","change"),m("#sizeW"),m("#sizeH"),m("#sizePreset","selected"),m("#sizeOrientation","selected"),u==null||u.addEventListener("click",()=>{s()}),f==null||f.addEventListener("click",()=>el.setConfig(el._config)),el}static _sizePresets(){return[{key:"iphone-14-pro",label:"iPhone 14 Pro",w:393,h:852,group:"phone"},{key:"iphone-14-pro-max",label:"iPhone 14 Pro Max",w:430,h:932,group:"phone"},{key:"iphone-se-2",label:"iPhone SE (2/3rd gen)",w:375,h:667,group:"phone"},{key:"pixel-7",label:"Pixel 7",w:412,h:915,group:"phone"},{key:"galaxy-s8",label:"Galaxy S8",w:360,h:740,group:"phone"},{key:"galaxy-s20-ultra",label:"Galaxy S20 Ultra",w:412,h:915,group:"phone"},{key:"ipad-9-7",label:'iPad 9.7"',w:768,h:1024,group:"tablet"},{key:"ipad-11-pro",label:'iPad Pro 11"',w:834,h:1194,group:"tablet"},{key:"ipad-12-9-pro",label:'iPad Pro 12.9"',w:1024,h:1366,group:"tablet"},{key:"surface-go-3",label:"Surface Go 3",w:800,h:1280,group:"tablet"},{key:"hd",label:"HD",w:1366,h:768,group:"desktop"},{key:"wxga-plus",label:"WXGA+",w:1440,h:900,group:"desktop"},{key:"fhd",label:"Full HD",w:1920,h:1080,group:"desktop"},{key:"qhd",label:"2K / QHD",w:2560,h:1440,group:"desktop"},{key:"uhd-4k",label:"4K UHD",w:3840,h:2160,group:"desktop"}]}_isContainerFixed(){return this.containerSizeMode==="fixed_custom"||this.containerSizeMode==="preset"||this.containerSizeMode==="fixed"}_resolveFixedSize(){if(this.containerSizeMode==="fixed_custom"){let t=Math.max(100,Number(this.containerFixedWidth||0)),r=Math.max(100,Number(this.containerFixedHeight||0));return{w:t,h:r}}if(this.containerSizeMode==="preset"){let t=e._sizePresets().find(c=>c.key===this.containerPreset)||e._sizePresets().find(c=>c.key==="fhd");if(!t)return{w:1920,h:1080};let r=t.w,o=t.h;return this.containerPresetOrient==="portrait"&&r>o&&([r,o]=[o,r]),this.containerPresetOrient==="landscape"&&o>r&&([r,o]=[o,r]),{w:r,h:o}}return null}_applyContainerSizingFromConfig(t=!1){var o,c;let r=this.cardContainer;if(r)if(this._isContainerFixed()){let{w:s,h:l}=this._resolveFixedSize();r.style.width=`${s}px`,r.style.height=`${l}px`,r.style.overflow="hidden",t||(o=this._dbgPush)==null||o.call(this,"size","Applied fixed size",{w:s,h:l,mode:this.containerSizeMode,preset:this.containerPreset,orient:this.containerPresetOrient}),this._clampAllCardsInside()}else r.style.overflow="hidden",t||(c=this._dbgPush)==null||c.call(this,"size","Applied dynamic size"),this._resizeContainer()}_getContainerSize(){let t=this.cardContainer;if(!t)return{w:0,h:0};let r=parseFloat(getComputedStyle(t).width)||t.getBoundingClientRect().width,o=parseFloat(getComputedStyle(t).height)||t.getBoundingClientRect().height;return{w:r,h:o}}_clampAllCardsInside(){if(!this._isContainerFixed())return;let{w:t,h:r}=this._getContainerSize();this.cardContainer.querySelectorAll(".card-wrapper").forEach(c=>{let s=parseFloat(c.getAttribute("data-x"))||0,l=parseFloat(c.getAttribute("data-y"))||0,u=parseFloat(c.style.width)||c.getBoundingClientRect().width,f=parseFloat(c.style.height)||c.getBoundingClientRect().height,v=Math.max(0,Math.min(s,Math.max(0,t-u))),m=Math.max(0,Math.min(l,Math.max(0,r-f))),y=Math.min(u,t),w=Math.min(f,r);(y!==u||w!==f)&&(c.style.width=`${y}px`,c.style.height=`${w}px`);let S=Math.max(0,Math.min(v,Math.max(0,t-y))),_=Math.max(0,Math.min(m,Math.max(0,r-w)));this._setCardPosition(c,S,_)})}_computeHaSidebarGutters_(){var o;let t=56;try{let c=document.querySelector("home-assistant"),s=c==null?void 0:c.shadowRoot,l=s==null?void 0:s.querySelector("ha-drawer, app-drawer, ha-sidebar, .drawer, .menu"),u=(o=l==null?void 0:l.getBoundingClientRect)==null?void 0:o.call(l);Math.max(document.documentElement.clientWidth||0,window.innerWidth||0)<=870?t=0:u!=null&&u.width&&(t=Math.max(0,Math.min(256,Math.round(u.width))))}catch{}let r=0;try{this.style.setProperty("--ddc-left-gutter",`${t}px`),this.style.setProperty("--ddc-right-gutter",`${r}px`)}catch{}}_applyGridVars(){var r;let t=`${this.gridSize||10}px`;this.style.setProperty("--ddc-grid-size",t),(r=this.cardContainer)==null||r.style.setProperty("--ddc-grid-size",t)}_dbgInit(){if(!this.__dbgReady){this.__dbgReady=!0,this._dbgBuffer=[],this._dbgMax=400;try{window.DDC=this}catch{}}}_dbgPush(t,r,o=null){let c={t:new Date().toISOString(),kind:t,msg:r,extra:o};this._dbgBuffer.push(c),this._dbgBuffer.length>this._dbgMax&&this._dbgBuffer.shift(),this.debug&&console.debug(`%c[ddc:${t}]%c ${r}`,"color:#03a9f4","color:unset",o!=null?o:"")}_dbgDump(){return[...this._dbgBuffer]}_safe(t){return String(t).replace(/[&<>"']/g,r=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[r])}setConfig(t={}){var l,u,f,v,m,y,w,S,_,T,R,C,O,z,b,M,I,F,N,H,Q,B,V,$,le,_e,Re;let r=this.storageKey;this.config={...t},(!this.config.storage_key||this.config.storage_key==="")&&(this.config.storage_key=this.constructor._genKey()),this.storageKey=this.config.storage_key,t.storage_key||(this.storageKey?t={...t,storage_key:this.storageKey}:(this.storageKey=`layout_${((l=crypto==null?void 0:crypto.randomUUID)==null?void 0:l.call(crypto))||Date.now().toString(36)}`,t={...t,storage_key:this.storageKey})),this._config=t,this.storageKey=t.storage_key,this._syncEditorsStorageKey(),this.storageKey=t.storage_key||void 0,this._syncEditorsStorageKey(),this.gridSize=Number((u=t.grid)!=null?u:10),this.dragLiveSnap=!!t.drag_live_snap,this.autoSave=t.auto_save!==!1,this.autoSaveDebounce=Number((f=t.auto_save_debounce)!=null?f:800),this.editModePin=this.editModePin!=null?this.editModePin:(m=(v=t.edit_mode_pin)!=null?v:t.editModePin)!=null?m:"",this.containerBackground=(y=t.container_background)!=null?y:"transparent",this.cardBackground=(w=t.card_background)!=null?w:"var(--ha-card-background, var(--card-background-color))",this.cardShadowEnabled=!!t.card_shadow,this.hideHaHeader=!!((_=(S=t.hide_HA_Header)!=null?S:t.hide_ha_header)!=null&&_),this.hideHaSidebar=!!((R=(T=t.hide_HA_Sidebar)!=null?T:t.hide_ha_sidebar)!=null&&R),this.debug=!!t.debug,this.editMode=!1,this._backendOK=!1,this.disableOverlap=!!t.disable_overlap,this.containerSizeMode=t.container_size_mode||"dynamic",String(this.containerSizeMode||"dynamic").toLowerCase()==="dynamic"?this.autoResizeCards=!0:this.autoResizeCards=t.auto_resize_cards!==!1,this.animateCards=!!t.animate_cards,this.screenSaverEnabled=!!((C=t.screen_saver_enabled)!=null&&C);let c=Number(t.screen_saver_delay);this.screenSaverDelay=Number.isFinite(c)&&c>0?c:5*6e4,this.autoResizeCards||String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(O=this._startScaleWatch)==null||O.call(this):(z=this._stopScaleWatch)==null||z.call(this),(b=this._applyAutoScale)==null||b.call(this),this.containerFixedWidth=Number((M=t.container_fixed_width)!=null?M:0)||null,this.containerFixedHeight=Number((I=t.container_fixed_height)!=null?I:0)||null,this.containerPreset=t.container_preset||"fullhd",this.containerPresetOrient=t.container_preset_orientation||"auto",this.heroImage=(t==null?void 0:t.hero_image)||"https://i.postimg.cc/CxsWQgwp/Chat-GPT-Image-Sep-5-2025-09-26-16-AM.png",this.tabs=Array.isArray(t.tabs)?t.tabs:[],this.tabsPosition=t.tabs_position==="left"?"left":"top",this.defaultTab=t.default_tab||((N=(F=this.tabs[0])==null?void 0:F.id)!=null?N:"default"),this.hideTabsWhenSingle=t.hide_tabs_when_single!==!1,this.activeTab=this.defaultTab;try{let ge=localStorage.getItem(`ddc_lasttab_${this.storageKey}`);ge&&this.tabs.some(fe=>fe.id===ge)&&(this.activeTab=ge)}catch{}this.rootEl&&this.rootEl.classList.toggle("ddc-tabs-left-layout",this.tabsPosition==="left"),this.cardContainer&&this._applyContainerSizingFromConfig(!1);let s=r!==this.storageKey;if(this.editMode&&!this.__booting&&!s)try{this._isInHaEditorPreview()||this._queueSave("config-change")}catch{}this._applyGridVars();try{(H=this._applyBackgroundImageFromConfig)==null||H.call(this)}catch{}try{(Q=this._applyHaChromeVisibility_)==null||Q.call(this)}catch{}this._ensureOverlayZFix();try{(B=this._updateScreensaverSettings)==null||B.call(this)}catch{}if(this._selection=new Set,this.__groupDrag=null,this.__editorCache=new Map,this.__stubCache=new Map,this._dbgInit(),this._dbgPush("init","Card configured",{storageKey_raw:t.storage_key,storageKey_slug:this.storageKey,autoSave:this.autoSave,grid:this.gridSize}),this.style.setProperty("--ddc-bg",this.containerBackground),this.style.setProperty("--ddc-card-bg",this.cardBackground),this.cardShadowEnabled&&this.style.setProperty("--ddc-card-shadow","0 8px 24px rgba(0,0,0,.35)"),!window.jsyaml){let ge=document.createElement("script");ge.src="https://cdnjs.cloudflare.com/ajax/libs/js-yaml/4.1.0/js-yaml.min.js",document.head.appendChild(ge)}if(!window.interact){let ge=document.createElement("script");ge.src="https://cdn.jsdelivr.net/npm/interactjs/dist/interact.min.js",ge.onload=()=>this._initInteract(),document.head.appendChild(ge)}if(this._helpersPromise=typeof window.loadCardHelpers=="function"?window.loadCardHelpers().catch(()=>null):Promise.resolve(null),!this._built){this._built=!0,this.shadowRoot.innerHTML=`
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
  /* When there is enough room the tabs bar will naturally center its
     children, but centering by default on narrow viewports means the
     first tab can be pushed partially off screen. Use flex\u2011start to
     anchor the tabs to the left; a later script adjusts this back to
     center when the bar does not overflow. */
  justify-content: flex-start;
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
  /* The default implementation used a horizontal mask on the tabs strip to fade
     the outer edges (transparent at the start/end and opaque in the middle).
     While this looked slick it caused the first and last tabs to appear
     clipped when they were partially scrolled off screen. This card needs
     to present the active tab clearly, even when the tabs overflow. To make
     this more responsive and to avoid visual cropping of the first tab,
     remove the mask entirely. The mask-image properties are set to none
     here rather than a gradient so there is no fading effect on either edge. */
  -webkit-mask-image: none;
          mask-image: none;
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

  /* Ensure the entire tab is clickable.  Without explicitly setting
     pointer-events the clickable region may be limited to the tab\u2019s
     inline content, especially in browsers that collapse the button\u2019s
     hit area to its children.  Setting pointer-events to auto
     guarantees the full padded area responds to clicks. */
  pointer-events: auto;

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
  content: "";
  position: absolute;
  left: 24px;
  right: 24px;
  bottom: -2px;
  height: 2px;
  border-radius: 2px;
  background: color-mix(in oklab, var(--accent) 72%, transparent);
  opacity: 0;
  transition: opacity .18s ease;
  /* Ensure the decorative underline never interferes with pointer
     interactions. Without disabling pointer events on this pseudo
     element it may inadvertently capture clicks, especially on
     touch devices where subpixel offsets can misregister. */
  pointer-events: none;
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



      `,this.cardContainer=this.shadowRoot.querySelector("#cardContainer");try{(V=this._applyBackgroundFromConfig)==null||V.call(this)}catch{}try{($=this._updateScreensaverSettings)==null||$.call(this)}catch{}this.addButton=this.shadowRoot.querySelector("#addCardBtn"),this.reloadBtn=this.shadowRoot.querySelector("#reloadBtn"),this.diagBtn=this.shadowRoot.querySelector("#diagBtn"),this.exitEditBtn=this.shadowRoot.querySelector("#exitEditBtn"),this.storeBadge=this.shadowRoot.querySelector("#storeBadge"),this.exportBtn=this.shadowRoot.querySelector("#exportBtn"),this.importBtn=this.shadowRoot.querySelector("#importBtn"),this.exploreBtn=this.shadowRoot.querySelector("#exploreBtn"),this.applyLayoutBtn=this.shadowRoot.querySelector("#applyLayoutBtn"),this.copyBtn=this.shadowRoot.querySelector("#copyBtn"),this.pasteBtn=this.shadowRoot.querySelector("#pasteBtn"),this.settingsBtn=this.shadowRoot.querySelector("#settingsBtn"),this.tabsBar=this.shadowRoot.querySelector("#tabsBar"),this.rootEl=this.shadowRoot.querySelector(".ddc-root");try{this._renderTabs(),this._applyActiveTab()}catch{}this._applyGridVars(),this.addButton.addEventListener("click",()=>{this.editMode||this._toggleEditMode(!0),this._openCardManager()}),this.reloadBtn.addEventListener("click",()=>this._initialLoad(!0)),this.diagBtn.addEventListener("click",()=>this._openDiagnostics()),this.exitEditBtn.addEventListener("click",()=>this._toggleEditMode(!1)),this.exportBtn.addEventListener("click",()=>this._exportDesign()),this.importBtn.addEventListener("click",()=>this._importDesign()),this.applyLayoutBtn.addEventListener("click",()=>this._saveLayout(!1)),this.copyBtn&&this.copyBtn.addEventListener("click",()=>this._copySelection()),this.pasteBtn&&this.pasteBtn.addEventListener("click",()=>this._pasteClipboard()),this.settingsBtn&&this.settingsBtn.addEventListener("click",()=>this._openDashboardSettings()),window.addEventListener("keydown",ge=>{var fe;if(this.editMode){if((ge.ctrlKey||ge.metaKey)&&(ge.key==="s"||ge.key==="S")&&(ge.preventDefault(),this._saveLayout(!1)),!this.__ddcResizeObs&&this.autoResizeCards){this.__ddcResizeObs=new ResizeObserver(()=>{var he;return(he=this._applyAutoScale)==null?void 0:he.call(this)});try{this.__ddcResizeObs.observe(this)}catch{}try{this.__ddcResizeObs.observe(this.cardContainer)}catch{}try{this.parentElement&&this.__ddcResizeObs.observe(this.parentElement)}catch{}try{this.offsetParent&&this.__ddcResizeObs.observe(this.offsetParent)}catch{}window.addEventListener("resize",this.__ddcOnWinResize=()=>{var he;return(he=this._applyAutoScale)==null?void 0:he.call(this)})}(fe=this._applyAutoScale)==null||fe.call(this)}}),this.exploreBtn.addEventListener("click",()=>window.open("https://hads.smarti.dev/","_blank","noopener,noreferrer")),this._applyContainerSizingFromConfig(!0),(le=this._applyAutoScale)==null||le.call(this),this._installLongPressToEnterEdit(),(_e=this._startScaleWatch)==null||_e.call(this),window.addEventListener("keydown",ge=>{var fe;if(ge.key==="Escape"&&this.editMode&&this._toggleEditMode(!1),!this.__ddcResizeObs&&this.autoResizeCards){this.__ddcResizeObs=new ResizeObserver(()=>{var he;return(he=this._applyAutoScale)==null?void 0:he.call(this)});try{this.__ddcResizeObs.observe(this)}catch{}try{this.__ddcResizeObs.observe(this.cardContainer)}catch{}window.addEventListener("resize",this.__ddcOnWinResize=()=>{var he;return(he=this._applyAutoScale)==null?void 0:he.call(this)})}(fe=this._applyAutoScale)==null||fe.call(this)}),this._installSelectionMarquee(),this.cardContainer.addEventListener("mousedown",ge=>{this.editMode&&(ge.target.closest(".card-wrapper")||!ge.shiftKey&&!ge.ctrlKey&&!ge.metaKey&&this._clearSelection())})}try{this._isInHaEditorPreview()||this._queueSave("config-change")}catch{}this._updateStoreBadge(),this.cardContainer&&this._toggleEditMode(!1),this.__cfgReady=!0,s&&this.__booted?this._initialLoad(!0):!this.__booted&&this.__probed?(this.__booted=!0,this._initialLoad()):(this._applyContainerSizingFromConfig(!0),(Re=this._applyAutoScale)==null||Re.call(this),this._resizeContainer())}_startInitialAutosize(){var t,r;try{if(this.__autoInitStarted)return;this.__autoInitStarted=!0;let o=!1,c=()=>{o||(o=!0,requestAnimationFrame(()=>{var y;o=!1;try{(y=this._applyAutoScale)==null||y.call(this)}catch{}}))};requestAnimationFrame(()=>{c(),requestAnimationFrame(c)}),setTimeout(c,0);try{(r=(t=document.fonts)==null?void 0:t.ready)==null||r.then(c)}catch{}let s=String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase(),l=this.cardContainer||this.querySelector("#cardContainer");if(!l)return;let u={childList:!0,subtree:!0,attributes:!0,attributeFilter:["style","class"]},f={childList:!0,subtree:!0},v=this.autoResizeCards||s==="auto",m=new MutationObserver(()=>c());m.observe(l,v?u:f),this.__autoInitMO=m,setTimeout(()=>{try{m.disconnect()}catch{}this.__autoInitMO=null},2e3)}catch{}}connectedCallback(){var t,r,o,c,s;try{this._installGridObservers_(),this._updateGridButtonsVisibility()}catch{}(t=this._startInitialAutosize)==null||t.call(this);try{(r=this._applyHaChromeVisibility_)==null||r.call(this),this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var u;return(u=this._applyAutoFillNoScale)==null?void 0:u.call(this)})});try{(o=this._ensureScreenSaverStyles)==null||o.call(this),(c=this._updateScreensaverSettings)==null||c.call(this)}catch{}}catch{this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var u;return(u=this._applyAutoFillNoScale)==null?void 0:u.call(this)})})}if(this.__keyHandlerBound||(this.__keyHandler=l=>this._onKeyDown_(l),window.addEventListener("keydown",this.__keyHandler),this.__keyHandlerBound=!0,this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var u;return(u=this._applyAutoFillNoScale)==null?void 0:u.call(this)})})),this.__boundExitEdit||(this.__boundExitEdit=()=>this._toggleEditMode(!1),this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var u;return(u=this._applyAutoFillNoScale)==null?void 0:u.call(this)})})),window.addEventListener("pagehide",this.__boundExitEdit),window.addEventListener("beforeunload",this.__boundExitEdit),this.__onVis=()=>{document.visibilityState==="hidden"&&this._toggleEditMode(!1),this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var u;return(u=this._applyAutoFillNoScale)==null?void 0:u.call(this)})})},document.addEventListener("visibilitychange",this.__onVis),this._toggleEditMode(!1),!this.__visObs){let l=new IntersectionObserver(u=>{u.some(f=>f.isIntersecting)&&(requestAnimationFrame(()=>this._applyAutoScale&&this._applyAutoScale()),l.observe(this),this.__visObs=l)});this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var f;return(f=this._applyAutoFillNoScale)==null?void 0:f.call(this)})})}this.__ddcOnWinResize=this.__ddcOnWinResize||(()=>{var l,u;if(this.hasAttribute("ddc-fixed-ui"))try{(l=this._computeHaSidebarGutters_)==null||l.call(this)}catch{}(u=this._applyAutoScale)==null||u.call(this)});try{let l=String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase();this.autoResizeCards||l==="auto"?window.addEventListener("resize",this.__ddcOnWinResize):window.removeEventListener("resize",this.__ddcOnWinResize)}catch{}try{(s=this.__ddcBindPointerListeners)==null||s.call(this),this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var u;return(u=this._applyAutoFillNoScale)==null?void 0:u.call(this)})})}catch{this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var u;return(u=this._applyAutoFillNoScale)==null?void 0:u.call(this)})})}this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var u;return(u=this._applyAutoFillNoScale)==null?void 0:u.call(this)})})}disconnectedCallback(){var t,r,o,c,s,l,u;try{this._uninstallGridObservers_()}catch{}try{(t=this._setHeaderVisible_)==null||t.call(this,!0),(r=this._setSidebarVisible_)==null||r.call(this,!0)}catch{}try{(o=this._applyHaChromeVisibility_)==null||o.call(this)}catch{}this.__keyHandlerBound&&this.__keyHandler&&(window.removeEventListener("keydown",this.__keyHandler),this.__keyHandlerBound=!1,this.__keyHandler=null),this.__keyHandlerBound||(this.__keyHandler=f=>this._onKeyDown_(f),window.addEventListener("keydown",this.__keyHandler),this.__keyHandlerBound=!0);try{(c=this._destroyParticles_)==null||c.call(this)}catch{}try{(s=this._destroyYouTube_)==null||s.call(this)}catch{}window.removeEventListener("pagehide",this.__boundExitEdit),window.removeEventListener("beforeunload",this.__boundExitEdit),document.removeEventListener("visibilitychange",this.__onVis);try{this._screensaverTimer&&(clearTimeout(this._screensaverTimer),this._screensaverTimer=null),this._clockInterval&&(clearInterval(this._clockInterval),this._clockInterval=null),this._screensaverActivityHandler&&(this._screensaverEvents||[]).forEach(v=>{document.removeEventListener(v,this._screensaverActivityHandler,!0)}),this.screenSaverOverlay&&this.screenSaverOverlay.parentNode&&this.screenSaverOverlay.parentNode.removeChild(this.screenSaverOverlay)}catch{}try{(l=this.__ddcResizeObs)==null||l.disconnect()}catch{}if(this.__ddcResizeObs=null,(u=this._stopScaleWatch)==null||u.call(this),this.__ddcOnWinResize&&(window.removeEventListener("resize",this.__ddcOnWinResize),this.__ddcOnWinResize=null),this.__lpInstalled&&this.__lpHandlers){let f=this.cardContainer;f==null||f.removeEventListener("mousedown",this.__lpHandlers.mouseDown),window.removeEventListener("mousemove",this.__lpHandlers.mouseMove),window.removeEventListener("mouseup",this.__lpHandlers.mouseUp),window.removeEventListener("contextmenu",this.__lpHandlers.contextMenu),f==null||f.removeEventListener("touchstart",this.__lpHandlers.touchStart),window.removeEventListener("touchmove",this.__lpHandlers.touchMove),window.removeEventListener("touchend",this.__lpHandlers.touchEnd),window.removeEventListener("touchcancel",this.__lpHandlers.touchCancel),this.__lpInstalled=!1,this.__lpHandlers=null}try{this.__visObs&&this.__visObs.disconnect()}catch{}this.__visObs=null,this.__ddcOnWinResize&&window.removeEventListener("resize",this.__ddcOnWinResize);try{this.__ddcPtrBound&&(this.removeEventListener("pointerdown",this.__onDDCPointerDown),this.removeEventListener("pointermove",this.__onDDCPointerMove),window.removeEventListener("pointerup",this.__onDDCPointerUp),window.removeEventListener("pointercancel",this.__onDDCPointerUp),this.__ddcPtrBound=!1)}catch{}}set hass(t){var o;this._hass=t,cc("set hass"),!this.__probed&&t&&(this.__probed=!0,this._probeBackend().then(()=>{this.__probed=!0,!this.__booted&&this.__cfgReady&&(this.__booted=!0,this._initialLoad(!0))}));let r=((o=this.cardContainer)==null?void 0:o.children)||[];for(let c of r){let s=c.firstElementChild;s&&s.hass!==t&&(s.hass=t)}try{this._applyVisibility_()}catch{}}get hass(){return this._hass}async _initialLoad(t=!1){var r,o,c,s,l,u,f,v,m,y,w,S,_,T,R,C,O,z,b;if(!this.__booting){this.__booting=!0;try{this._loading=!0,t&&this.cardContainer&&(this.cardContainer.innerHTML=""),this._dbgPush("boot","Initial load start",{force:t});let M=[],I=null;if(this._backendOK&&this.storageKey)try{I=await this._loadLayoutFromBackend(this.storageKey)}catch(B){this._dbgPush("boot","Backend load failed",{error:String(B)})}if(!I&&this.storageKey){let B=null;try{B=JSON.parse(localStorage.getItem(`ddc_local_${this.storageKey}`)||"null")}catch{}if(B)if(this._dbgPush("boot","Found local snapshot",{bytes:JSON.stringify(B).length}),this._backendOK)try{await this._saveLayoutToBackend(this.storageKey,B),this._dbgPush("boot","Migrated local -> backend"),I=B}catch(V){this._dbgPush("boot","Migration failed, staying local",{error:String(V)}),I=B}else I=B}!I&&((o=(r=this._config)==null?void 0:r.cards)!=null&&o.length)&&(this._dbgPush("boot","Using embedded config"),I={cards:this._config.cards});let F={...this._config||{}};if(I!=null&&I.options){let{storage_key:B,...V}=I.options;this._applyImportedOptions(V,!0)}else typeof(I==null?void 0:I.grid)=="number"&&this._applyImportedOptions({grid:I.grid},!0);let N=["storage_key","grid","drag_live_snap","auto_save","auto_save_debounce","container_background","card_background","card_shadow","debug","disable_overlap","container_size_mode","container_fixed_width","container_fixed_height","container_preset","container_preset_orientation","tabs","tabs_position","default_tab","hide_tabs_when_single","auto_resize_cards","background_mode","background_image","background_particles","background_youtube","screen_saver_enabled","screen_saver_delay"],H={};for(let B of N)F[B]!==void 0&&(H[B]=F[B]);Object.keys(H).length&&this._applyImportedOptions(H,!0);let Q=!1;if((c=I==null?void 0:I.cards)!=null&&c.length){for(let B of I.cards){if(!(B!=null&&B.card)||typeof B.card=="object"&&Object.keys(B.card).length===0){let le=this._makePlaceholderAt(((s=B.position)==null?void 0:s.x)||0,((l=B.position)==null?void 0:l.y)||0,((u=B.size)==null?void 0:u.width)||200,((f=B.size)==null?void 0:f.height)||200);this.cardContainer.appendChild(le);try{this._rebuildOnce(le.firstElementChild)}catch{}Q=!0;continue}let V=await this._createCard(B.card),$=this._makeWrapper(V);if(this.editMode&&$.classList.add("editing"),$.dataset.tabId=this._normalizeTabId(B.tabId||B.tab_id||this.defaultTab),this._setCardPosition($,((v=B.position)==null?void 0:v.x)||0,((m=B.position)==null?void 0:m.y)||0),$.style.width=`${(w=(y=B.size)==null?void 0:y.width)!=null?w:14*this.gridSize}px`,$.style.height=`${(_=(S=B.size)==null?void 0:S.height)!=null?_:10*this.gridSize}px`,B.z!=null&&($.style.zIndex=String(B.z)),B.overflow)try{$.style.overflow=B.overflow,$.dataset.overflow=B.overflow;let le=$.firstElementChild;le&&(le.style.overflow=B.overflow)}catch{}this.cardContainer.appendChild($);try{this._rebuildOnce($.firstElementChild)}catch{}this._initCardInteract($),Q=!0}this._resizeContainer(),(T=this._applyAutoScale)==null||T.call(this),this._dbgPush("boot","Layout applied",{count:I.cards.length})}Q||(this._showEmptyPlaceholder(),(R=this._applyAutoScale)==null||R.call(this),this._dbgPush("boot","No saved layout found; showing placeholder")),this._updateStoreBadge(),this._syncEmptyStateUI(),t&&(this._cardModProcessed=!1),setTimeout(()=>{this._processCardModOnce()},100);try{M.forEach(B=>{try{B.dispatchEvent(new Event("ll-rebuild",{bubbles:!0,composed:!0}))}catch{}})}catch{}}finally{this._loading=!1,this.__booting=!1,this.__dirty=!1,(C=this._updateApplyBtn)==null||C.call(this);try{this._renderTabs(),this._applyActiveTab()}catch{}try{this._applyVisibility_()}catch{}try{let M=(z=(O=this.cardContainer)==null?void 0:O.querySelector)==null?void 0:z.call(O,"#ddcBgHost");(!M||!M.firstChild)&&((b=this._applyBackgroundFromConfig)==null||b.call(this))}catch{}}}}_normalizeTabId(t){let r=Array.isArray(this.tabs)?this.tabs.map(o=>o.id):[];return r.length?t&&r.includes(t)?t:this.defaultTab||r[0]:this.defaultTab||"default"}_renderTabs(){var o,c,s,l;let t=this.tabsBar;if(!t)return;let r=Array.isArray(this.tabs)?this.tabs:[];if(!r.length||r.length===1&&this.hideTabsWhenSingle){t.style.display="none";return}t.style.display="",t.className="ddc-tabs "+(this.tabsPosition==="left"?"ddc-tabs-left":""),t.innerHTML="";try{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&(t.style.width="100%",t.style.maxWidth="100%")}catch{}for(let u of r){let f=document.createElement("button");f.className="ddc-tab"+(u.id===this.activeTab?" active":""),f.dataset.tabId=u.id,f.title=u.label||u.id,f.innerHTML=`${u.icon?`<ha-icon icon="${u.icon}"></ha-icon>`:""}<span class="ddc-tab-label">${(o=u.label)!=null?o:u.id}</span>`,f.addEventListener("click",()=>{var v,m,y;if(this.activeTab!==u.id){this.activeTab=u.id;try{localStorage.setItem(`ddc_lasttab_${this.storageKey}`,u.id)}catch{}this._applyActiveTab(),this._renderTabs();try{this._applyVisibility_()}catch{}try{let w=(m=(v=this.cardContainer)==null?void 0:v.querySelector)==null?void 0:m.call(v,"#ddcBgHost");(!w||!w.firstChild)&&((y=this._applyBackgroundFromConfig)==null||y.call(this))}catch{}}}),t.appendChild(f)}this.rootEl&&this.rootEl.classList.toggle("ddc-tabs-left-layout",this.tabsPosition==="left");try{(c=this._updateTabsA11y_)==null||c.call(this)}catch{}try{(s=this._syncTabsWidth_)==null||s.call(this)}catch{}try{let u=(l=t.querySelector)==null?void 0:l.call(t,".ddc-tab.active");u&&t.scrollWidth>t.clientWidth&&u.scrollIntoView({behavior:"auto",block:"nearest",inline:"nearest"})}catch{}try{t.style.justifyContent="",t.scrollWidth<=t.clientWidth?t.style.justifyContent="center":t.style.justifyContent="flex-start"}catch{}}_applyActiveTab(){var o,c,s,l,u;let t=this._normalizeTabId(this.activeTab);(((c=(o=this.cardContainer)==null?void 0:o.querySelectorAll)==null?void 0:c.call(o,".card-wrapper"))||[]).forEach(f=>{let v=f.dataset.tabId?this._normalizeTabId(f.dataset.tabId):this.defaultTab;if(!this.tabs||!this.tabs.length){f.style.display="",f.inert=!1,f.classList.remove("ddc-hidden");return}v===t?(f.style.display="",f.inert=!1,f.classList.remove("ddc-hidden")):(f.style.display="none",f.inert=!0,f.classList.add("ddc-hidden"),f.classList.remove("ddc-selected"))});try{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(s=this._applyAutoFillNoScale)==null||s.call(this):(l=this._applyAutoScale)==null||l.call(this)}catch{}try{this._clearSelection()}catch{}try{this.animateCards&&((u=this._animateCards)==null||u.call(this))}catch{}}_animateCards(){var t,r,o,c;try{let s=((r=(t=this.cardContainer)==null?void 0:t.querySelectorAll)==null?void 0:r.call(t,".card-wrapper"))||[],l=(c=(o=window.matchMedia)==null?void 0:o.call(window,"(prefers-reduced-motion: reduce)"))==null?void 0:c.matches,u=800,f=.8,m=u*.3,y=u-m;s.forEach(w=>{var b,M,I;let S=(b=window.getComputedStyle)==null?void 0:b.call(window,w);if(w.style.display==="none"||S&&S.display==="none"||w.classList.contains("ddc-hidden"))return;let T=S&&S.transform&&S.transform!=="none"?S.transform:"",R=100*f,C=`${T} translate3d(0, ${R}%, 0)`,O=`${T} translate3d(0, 0, 0)`,z=Math.random()*(y*Math.min(f,2));if(l){try{w.animate([{opacity:0},{opacity:1}],{duration:u*.15,delay:z,easing:"linear",fill:"backwards"})}catch{w.style.opacity="0",setTimeout(()=>{w.style.transition=`opacity ${u*.15}ms linear`,w.style.opacity="1"},z)}return}try{w.style.willChange="opacity, transform";let F="cubic-bezier(0.4, 0, 0.2, 1)";w.animate([{opacity:0},{opacity:1}],{duration:m,delay:z,easing:"linear",fill:"backwards"}),(I=(M=w.animate([{transform:C},{transform:O}],{duration:m,delay:z,easing:F,fill:"backwards"})).addEventListener)==null||I.call(M,"finish",()=>{w.style.willChange=""})}catch{w.style.opacity="0",w.style.transform=C,w.style.willChange="opacity, transform",setTimeout(()=>{w.style.transition=`opacity ${m}ms linear, transform ${m}ms cubic-bezier(0.4,0,0.2,1)`,w.style.opacity="1",w.style.transform=O,setTimeout(()=>{w.style.transition="",w.style.willChange=""},m+60)},z)}})}catch(s){console.warn("[ddc:animate] animation error",s)}}_addTabSelectorToChip(t,r=null){if(!this.tabs||!this.tabs.length)return;let o=t.querySelector(".chip");if(!o)return;let c=o.querySelector("select.ddc-chip-tab");c||(c=document.createElement("select"),c.className="ddc-chip-tab",c.style.marginLeft="6px",c.title="Assign to tab",o.appendChild(c)),c.innerHTML="";for(let u of this.tabs){let f=document.createElement("option");f.value=u.id,f.textContent=u.label||u.id,c.appendChild(f)}let s=this._normalizeTabId(r||t.dataset.tabId||this.activeTab||this.defaultTab);c.value=s,t.dataset.tabId=s,c.onchange=()=>{var u,f,v;t.dataset.tabId=this._normalizeTabId(c.value),this._applyActiveTab();try{this._applyVisibility_()}catch{}try{let m=(f=(u=this.cardContainer)==null?void 0:u.querySelector)==null?void 0:f.call(u,"#ddcBgHost");(!m||!m.firstChild)&&((v=this._applyBackgroundFromConfig)==null||v.call(this))}catch{}try{this._queueSave("tab-change")}catch{}};let l=u=>u.stopPropagation();c.addEventListener("mousedown",l),c.addEventListener("pointerdown",l),c.addEventListener("touchstart",l)}_openCardSettingsMenu(t){if(!t)return;let r=t.querySelector(".ddc-card-settings");if(r){r.remove();return}let o=document.createElement("div");o.className="ddc-card-settings",Object.assign(o.style,{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:"10000",background:"var(--ha-card-background, var(--card-background-color, var(--primary-background-color, #1e1e1e)))",border:"1px solid var(--divider-color, rgba(0,0,0,.3))",borderRadius:"12px",padding:"14px",boxShadow:"0 10px 24px rgba(0,0,0,.4)",color:"var(--primary-text-color, #f5f5f5)",minWidth:"220px",display:"flex",flexDirection:"column",gap:"12px",fontSize:".875rem",opacity:"1",mixBlendMode:"normal"});let c=_=>_.stopPropagation();o.addEventListener("pointerdown",c,!0),o.addEventListener("mousedown",c,!0),o.addEventListener("touchstart",c,!0);let s=document.createElement("div");s.textContent="Card Settings",Object.assign(s.style,{fontWeight:"600",fontSize:"1rem",marginBottom:"4px",color:"var(--primary-text-color, #f5f5f5)"}),o.appendChild(s);let l=document.createElement("button");l.className="mini",Object.assign(l.style,{position:"absolute",top:"4px",right:"4px",border:"none",background:"transparent",color:"var(--secondary-text-color, #9ca3af)",cursor:"pointer",width:"24px",height:"24px",display:"flex",alignItems:"center",justifyContent:"center"}),l.setAttribute("title","Close"),l.setAttribute("aria-label","Close settings"),l.innerHTML='<ha-icon icon="mdi:close"></ha-icon>',l.addEventListener("click",_=>{_.stopPropagation(),o.remove()}),o.appendChild(l);let u=(_,T)=>{let R=document.createElement("div");R.style.display="flex",R.style.alignItems="center",R.style.gap="12px",R.style.width="100%";let C=document.createElement("span");return C.textContent=_,C.style.color="var(--secondary-text-color, #9ca3af)",C.style.fontWeight="500",C.style.whiteSpace="nowrap",T.style.flex="1 1 auto",R.appendChild(C),R.appendChild(T),R},f=_=>{Object.assign(_.style,{appearance:"none",padding:"6px 8px",border:"1px solid var(--divider-color, rgba(0,0,0,.25))",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--primary-background-color, #fff)))",color:"var(--primary-text-color, #000)",font:"inherit",lineHeight:"1.4",width:"100%"})};if(Array.isArray(this.tabs)&&this.tabs.length>1){let _=document.createElement("select");f(_);for(let O of this.tabs){let z=document.createElement("option");z.value=O.id,z.textContent=O.label||O.id,_.appendChild(z)}let T=t.dataset.tabId||this.defaultTab;_.value=this._normalizeTabId(T),_.addEventListener("change",()=>{var z;let O=_.value;t.dataset.tabId=this._normalizeTabId(O);try{(z=this._addTabSelectorToChip)==null||z.call(this,t,t.dataset.tabId)}catch{}try{this._applyActiveTab()}catch{}try{this._applyVisibility_()}catch{}try{this._queueSave("tab-change")}catch{}}),_.addEventListener("pointerdown",c),_.addEventListener("mousedown",c),_.addEventListener("touchstart",c);let R=u("Tab",_);o.appendChild(R);let C=document.createElement("div");C.textContent="Choose which tab this card appears on.",Object.assign(C.style,{fontSize:".75rem",color:"var(--secondary-text-color, #9ca3af)",marginTop:"2px"}),o.appendChild(C)}let v=document.createElement("select");f(v);let m=[{value:"",label:"Default"},{value:"visible",label:"Visible"},{value:"hidden",label:"Hidden"},{value:"auto",label:"Scroll"}];for(let _ of m){let T=document.createElement("option");T.value=_.value,T.textContent=_.label,v.appendChild(T)}let y=t.dataset.overflow||t.style.overflow||"";v.value=y||"",v.addEventListener("change",()=>{let _=v.value,T=t.firstElementChild;_?(t.style.setProperty("overflow",_,"important"),T&&T.style.setProperty("overflow",_,"important"),t.dataset.overflow=_):(t.style.removeProperty("overflow"),T&&T.style.removeProperty("overflow"),delete t.dataset.overflow);try{this._queueSave("overflow-change")}catch{}}),v.addEventListener("pointerdown",c),v.addEventListener("mousedown",c),v.addEventListener("touchstart",c);let w=u("Overflow",v);o.appendChild(w);let S=document.createElement("div");S.textContent="Control how card content behaves when it exceeds its bounds.",Object.assign(S.style,{fontSize:".75rem",color:"var(--secondary-text-color, #9ca3af)",marginTop:"2px"}),o.appendChild(S),t.appendChild(o)}_toggleEditMode(t=null){var w,S,_,T,R,C,O,z,b,M,I,F,N,H,Q,B,V;try{(w=this.__clearPressTimer)==null||w.call(this)}catch{}let r=t===null?!this.editMode:!!t,o=!this.editMode&&r;try{let $=this.config&&this.config.edit_mode_pin!=null?String(this.config.edit_mode_pin):"",_e=((this.editModePin!=null?String(this.editModePin):"")||$).trim();if(r&&!this.editMode&&_e){let Re=window.prompt("Enter PIN / password to open Edit Mode:");if(Re===null)return;if(String(Re).trim()!==_e){(S=this._toast)==null||S.call(this,"Incorrect PIN/password.");return}}}catch{}let c=this.renderRoot||this.shadowRoot||this,s=(_=c==null?void 0:c.querySelector)==null?void 0:_.call(c,".ddc-toolbar.streamlined.v2, .ddc-toolbar.streamlined.v3"),l=($,le)=>{try{$&&($.style.display=le)}catch{}},u="inline-block",f="none",v=()=>{l(this.addButton,u),l(this.reloadBtn,u),l(this.diagBtn,u),l(this.exitEditBtn,u),l(this.exportBtn,u),l(this.importBtn,u),l(this.exploreBtn,u),l(this.storeBadge,u),l(this.applyLayoutBtn,u),l(this.copyBtn,u),l(this.pasteBtn,u),l(this.settingsBtn,u)},m=()=>{l(this.addButton,f),l(this.reloadBtn,f),l(this.diagBtn,f),l(this.exitEditBtn,f),l(this.exportBtn,f),l(this.importBtn,f),l(this.exploreBtn,f),l(this.storeBadge,f),l(this.applyLayoutBtn,f),l(this.copyBtn,f),l(this.pasteBtn,f),l(this.settingsBtn,f)};if(s)if(r)s.setAttribute("data-force-open","1"),s.style.display="grid",v(),requestAnimationFrame(()=>{let le=s.scrollHeight||0;s.style.setProperty("--open-h",le+"px"),s.classList.add("is-open")});else{s.setAttribute("data-force-open","1"),s.style.display="grid";let le=s.scrollHeight||0;s.style.setProperty("--open-h",le+"px"),requestAnimationFrame(()=>{s.classList.remove("is-open")}),setTimeout(()=>{m(),s.removeAttribute("data-force-open")},260)}else r?v():m();this.editMode=r,(T=this._syncEmptyStateUI)==null||T.call(this),(R=this.cardContainer)==null||R.classList.toggle("grid-on",this.editMode);try{typeof this._resetScreensaverTimer=="function"&&this._resetScreensaverTimer()}catch{}if((((O=(C=this.cardContainer)==null?void 0:C.querySelectorAll)==null?void 0:O.call(C,".card-wrapper"))||[]).forEach($=>{$.classList.toggle("editing",this.editMode);let le=$.querySelector(".resize-handle");le&&(le.style.display=this.editMode?"flex":"none"),!$.dataset.placeholder&&window.interact&&window.interact($).draggable(this.editMode).resizable(this.editMode),$.style.touchAction=this.editMode?"none":"auto"}),this.editMode||(z=this._clearSelection)==null||z.call(this),this.editMode||(b=this.cardContainer)==null||b.querySelectorAll(".card-wrapper.dragging").forEach($=>$.classList.remove("dragging")),o){let $=(M=this.__lastHoldX)!=null?M:null,le=(I=this.__lastHoldY)!=null?I:null;(F=this._playEditRipple)==null||F.call(this,$,le)}try{(N=this._applyHaChromeVisibility_)==null||N.call(this)}catch{}try{let $=((Q=(H=this.shadowRoot)==null?void 0:H.querySelector)==null?void 0:Q.call(H,".ddc-root"))||((V=(B=this.renderRoot)==null?void 0:B.querySelector)==null?void 0:V.call(B,".ddc-root"))||null;if($){let le=0;if(r&&s)try{le=s.scrollHeight||s.offsetHeight||0}catch{}$.style.setProperty("--ddc-toolbar-height",le+"px"),!this.autoResizeCards&&this.cardContainer&&(r&&s?this.cardContainer.style.marginTop=le+"px":this.cardContainer.style.marginTop="")}}catch{}try{typeof this._resizeContainer=="function"&&this._resizeContainer(),typeof this._applyAutoScale=="function"&&this._applyAutoScale()}catch{}}_isInHaEditorPreview(){let t=this;for(;t;){let r=t.nodeType===1&&t.localName?t.localName.toLowerCase():"";if(r==="hui-card-editor"||r==="hui-dialog-edit-card"||r==="hui-card-preview"||r==="ha-dialog"||r==="mwc-dialog")return!0;let o=t.getRootNode&&t.getRootNode();t=t.parentElement||o&&o.host||null}return!1}_installLongPressToEnterEdit(){if(this.__lpInstalled)return;this.__lpInstalled=!0;let t=this.cardContainer;if(!t)return;let r=800,o=18,c=b=>!!b&&typeof b=="object"&&b.nodeType===1,s=(b,M)=>{try{return!!(b&&M&&typeof b.contains=="function"&&c(M)&&b.contains(M))}catch{return!1}},l=b=>s(this.cardContainer,b),u=b=>{var F,N,H;let M=(N=(F=b.target)==null?void 0:F.closest)==null?void 0:N.call(F,".card-wrapper");if(c(M)&&l(M)&&!M.classList.contains("ddc-placeholder"))return!0;let I=typeof b.composedPath=="function"?b.composedPath():[];for(let Q of I)if(c(Q)&&l(Q)&&(H=Q.classList)!=null&&H.contains("card-wrapper")&&!Q.classList.contains("ddc-placeholder"))return!0;return!1},f=(b,M)=>{let I=document.createElement("div");I.className="ddc-press-ring",document.body.appendChild(I),Object.assign(I.style,{position:"fixed",left:`${b}px`,top:`${M}px`,zIndex:"100000",width:"44px",height:"44px",pointerEvents:"none",marginLeft:"-22px",marginTop:"-22px",filter:"drop-shadow(0 2px 6px rgba(0,0,0,.35))"}),I.innerHTML=`
      <svg viewBox="0 0 44 44" aria-hidden="true" style="width:44px;height:44px">
        <circle cx="22" cy="22" r="18" style="stroke:rgba(255,255,255,.45);stroke-width:4;fill:none"></circle>
        <circle class="pr-fg" cx="22" cy="22" r="18" style="stroke:var(--primary-color);stroke-width:4;fill:none;stroke-linecap:round"></circle>
        <circle cx="22" cy="22" r="2" style="fill:var(--primary-color);opacity:.95"></circle>
      </svg>`;let F=I.querySelector(".pr-fg"),N=18,H=2*Math.PI*N;return F.style.strokeDasharray=`${H}`,F.style.strokeDashoffset=`${H}`,requestAnimationFrame(()=>{F.style.transition=`stroke-dashoffset ${r}ms linear`,F.style.strokeDashoffset="0"}),{el:I,move(Q,B){I.style.left=`${Q}px`,I.style.top=`${B}px`},remove(){try{I.remove()}catch{}}}},v=null,m=null,y=0,w=0,S=null,_=()=>{v&&clearTimeout(v),v=null,m==null||m.remove(),m=null};this.__clearPressTimer=_;let T=b=>{b.pointerType==="mouse"&&b.button!==0||this._isInHaEditorPreview()||!l(b.target)||u(b)||(S=b.pointerId,y=b.clientX,w=b.clientY,this.__lastHoldX=y,this.__lastHoldY=w,m=f(y,w),v=setTimeout(()=>{var I;_();let M=!this.editMode;this._toggleEditMode(M),(I=this._toast)==null||I.call(this,`Edit mode ${M?"enabled":"disabled"}`)},r))},R=b=>{v==null||b.pointerId!==S||(m==null||m.move(b.clientX,b.clientY),(Math.abs(b.clientX-y)>o||Math.abs(b.clientY-w)>o)&&_())},C=b=>{b.pointerId===S&&(_(),S=null)},O=b=>{if(v)return b.preventDefault(),b.stopPropagation(),!1},z=b=>{var I;if(this._isInHaEditorPreview()||!l(b.target)||u(b))return;let M=!this.editMode;this._toggleEditMode(M),(I=this._toast)==null||I.call(this,`Edit mode ${M?"enabled":"disabled"}`)};t.addEventListener("pointerdown",T),window.addEventListener("pointermove",R,{passive:!0}),window.addEventListener("pointerup",C,{passive:!0}),window.addEventListener("pointercancel",C,{passive:!0}),window.addEventListener("contextmenu",O),t.addEventListener("dblclick",z),this.__lpHandlers={onPointerDown:T,onPointerMove:R,onPointerUpOrCancel:C,onContextMenu:O,onDblClick:z}}_isLayoutEmpty(){let t=this.cardContainer;return t?t.querySelectorAll(".card-wrapper:not(.ddc-placeholder)").length===0:!0}_syncEmptyStateUI(){let t=this._isLayoutEmpty();if(this.addButton){let o=this.editMode||t;this.addButton.style.display=o?"inline-block":"none",this.addButton.classList.toggle("cta-empty",!this.editMode&&t)}let r=o=>o&&(o.style.display=this.editMode?"inline-block":"none");r(this.reloadBtn),r(this.diagBtn),r(this.exitEditBtn),r(this.exportBtn),r(this.importBtn),r(this.exploreBtn),r(this.storeBadge),r(this.applyLayoutBtn)}_updateApplyBtn(){this.applyLayoutBtn&&(this.applyLayoutBtn.disabled=!this.__dirty)}_markDirty(t=""){var r;this.__dirty=!0,this._updateApplyBtn(),(r=this._dbgPush)==null||r.call(this,"dirty","Marked dirty",{reason:t})}_playEditRipple(t=null,r=null){let o=this.cardContainer;if(!o)return;let c=o.getBoundingClientRect(),s=t==null?c.left+c.width/2:t,l=r==null?c.top+c.height/2:r,u=s-c.left,f=l-c.top,v=document.createElement("div");v.className="ddc-ripple-veil",v.style.setProperty("--rip-x",`${u}px`),v.style.setProperty("--rip-y",`${f}px`),o.appendChild(v),setTimeout(()=>v.remove(),450)}_initInteract(){this.cardContainer.querySelectorAll(".card-wrapper").forEach(r=>this._initCardInteract(r))}_initCardInteract(t){if(!window.interact||t.dataset.placeholder)return;let r=this.gridSize,o=!!this.dragLiveSnap,s=[window.interact.modifiers.restrictRect({restriction:"parent",endOnly:!0})],l=this.__pointerScaleX&&Math.abs(this.__pointerScaleX-1)>1e-6||this.__pointerScaleY&&Math.abs(this.__pointerScaleY-1)>1e-6;if(this.dragLiveSnap&&!l){let u=window.interact.snappers.grid({x:this.gridSize,y:this.gridSize});s.push(window.interact.modifiers.snap({targets:[u],range:1/0,offset:"startCoords"}))}window.interact(t).draggable({enabled:this.editMode,inertia:!1,modifiers:s,listeners:{start:u=>{this._selection.has(t)||(!(u!=null&&u.shiftKey)&&!(u!=null&&u.ctrlKey)&&!(u!=null&&u.metaKey)&&this._clearSelection(),this._toggleSelection(t,!0));let f=Array.from(this._selection);this.__groupDrag={leader:t,members:f,startRaw:new Map(f.map(m=>[m,{x:parseFloat(m.getAttribute("data-x-raw"))||parseFloat(m.getAttribute("data-x"))||0,y:parseFloat(m.getAttribute("data-y-raw"))||parseFloat(m.getAttribute("data-y"))||0,w:parseFloat(m.style.width)||m.getBoundingClientRect().width,h:parseFloat(m.style.height)||m.getBoundingClientRect().height}]))},this.__collisionOriginals=new Map,this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)").forEach(m=>{let y=parseFloat(m.getAttribute("data-x-raw"))||parseFloat(m.getAttribute("data-x"))||0,w=parseFloat(m.getAttribute("data-y-raw"))||parseFloat(m.getAttribute("data-y"))||0;this.__collisionOriginals.set(m,{x:y,y:w})}),f.forEach(m=>{m.classList.add("dragging"),m.getAttribute("data-x-raw")===null&&m.setAttribute("data-x-raw",m.getAttribute("data-x")||"0"),m.getAttribute("data-y-raw")===null&&m.setAttribute("data-y-raw",m.getAttribute("data-y")||"0")})},move:u=>{if(!this.__groupDrag)return;let f=this.gridSize,v=!!this.dragLiveSnap,m=this.__groupDrag.leader,y=this.__groupDrag.startRaw.get(m),w=this.__pointerScaleX||1,S=this.__pointerScaleY||1,_=(parseFloat(m.getAttribute("data-x-raw"))||y.x)+u.dx/w,T=(parseFloat(m.getAttribute("data-y-raw"))||y.y)+u.dy/S,R=_-y.x,C=T-y.y,O=this.__groupDrag.members.map(z=>{let b=this.__groupDrag.startRaw.get(z),M=b.x+R,I=b.y+C,F=v?Math.round(M/f)*f:M,N=v?Math.round(I/f)*f:I;return{el:z,rawX:M,rawY:I,snapX:F,snapY:N,w:b.w,h:b.h}});this.disableOverlap&&this._pushCardsOutOfTheWay(O,R,C,v,f),m.setAttribute("data-x-raw",String(_)),m.setAttribute("data-y-raw",String(T));for(let z of O)z.el.setAttribute("data-x-raw",String(z.rawX)),z.el.setAttribute("data-y-raw",String(z.rawY)),this._setCardPosition(z.el,z.snapX,z.snapY);this._resizeContainer()},end:u=>{if(!this.__groupDrag)return;let f=this.gridSize,v=this.__groupDrag.members.map(m=>{let y=parseFloat(m.getAttribute("data-x-raw"))||parseFloat(m.getAttribute("data-x"))||0,w=parseFloat(m.getAttribute("data-y-raw"))||parseFloat(m.getAttribute("data-y"))||0,S=Math.round(y/f)*f,_=Math.round(w/f)*f,T=parseFloat(m.style.width)||m.getBoundingClientRect().width,R=parseFloat(m.style.height)||m.getBoundingClientRect().height;return{el:m,rawX:y,rawY:w,snapX:S,snapY:_,w:T,h:R}});this.disableOverlap&&this._pushCardsOutOfTheWay(v,0,0,!1,f);for(let m of v)this._setCardPosition(m.el,m.snapX,m.snapY),m.el.setAttribute("data-x-raw",String(m.snapX)),m.el.setAttribute("data-y-raw",String(m.snapY));for(let m of this.__groupDrag.members)m.classList.remove("dragging");this._resizeContainer(),this._isContainerFixed()&&this._clampAllCardsInside(),this._queueSave(this.__groupDrag.members.length>1?"group-drag-end":"drag-end"),this.__groupDrag=null,this.__collisionOriginals=null}}}),window.interact(t).resizable({enabled:this.editMode,edges:{right:".resize-handle",bottom:".resize-handle"},inertia:!1,listeners:{move:u=>{let f=this.gridSize,v=!!this.dragLiveSnap,m=parseFloat(t.style.width)||t.getBoundingClientRect().width,y=parseFloat(t.style.height)||t.getBoundingClientRect().height,w=this.__pointerScaleX||1,S=this.__pointerScaleY||1,_=u.rect.width/w,T=u.rect.height/S,R=v?Math.max(f,Math.round(_/f)*f):_,C=v?Math.max(f,Math.round(T/f)*f):T,O=parseFloat(t.getAttribute("data-x"))||0,z=parseFloat(t.getAttribute("data-y"))||0,b=R,M=C;if(this._isContainerFixed()){let{w:F,h:N}=this._getContainerSize();b=Math.min(R,Math.max(this.gridSize,F-O)),M=Math.min(C,Math.max(this.gridSize,N-z))}let I=[this._rectFor(t,O,z,b,M)];this.disableOverlap&&this._anyCollisionFor(I,new Set([t]))||(t.style.width=`${b}px`,t.style.height=`${M}px`,this._resizeContainer())},end:()=>{let u=this.gridSize,f=parseFloat(t.style.width)||t.getBoundingClientRect().width,v=parseFloat(t.style.height)||t.getBoundingClientRect().height,m=Math.max(u,Math.round(f/u)*u),y=Math.max(u,Math.round(v/u)*u),w=parseFloat(t.getAttribute("data-x"))||0,S=parseFloat(t.getAttribute("data-y"))||0;if(this._isContainerFixed()){let{w:T,h:R}=this._getContainerSize();m=Math.min(m,Math.max(u,T-w)),y=Math.min(y,Math.max(u,R-S))}let _=[this._rectFor(t,w,S,m,y)];this.disableOverlap&&this._anyCollisionFor(_,new Set([t]))||(t.style.width=`${m}px`,t.style.height=`${y}px`),this._resizeContainer(),this._isContainerFixed()&&this._clampAllCardsInside(),this._queueSave("resize-end")}}}),t.addEventListener("mousedown",u=>{this.editMode&&(u.target.closest(".resize-handle")||u.target.closest(".delete-handle")||u.target.closest(".chip")||(u.shiftKey||u.ctrlKey||u.metaKey?(u.stopPropagation(),this._toggleSelection(t)):this._selection.has(t)||(this._clearSelection(),this._toggleSelection(t,!0))))})}async _createCard(t){let o=(await this._helpersPromise||await window.loadCardHelpers()).createCardElement(t);if(o.hass=this.hass,t.type==="custom:mod-card"&&(await new Promise(c=>setTimeout(c,0)),o.setConfig&&typeof o.setConfig=="function"))try{o.setConfig(t)}catch{}return o}_makeWrapper(t){let r=document.createElement("div");if(r.classList.add("card-wrapper"),r.dataset.tabId=this._normalizeTabId(this.activeTab||this.defaultTab),this.editMode&&r.classList.add("editing"),!r.style.zIndex){let f=this._highestZ()+1;r.style.zIndex=String(Math.max(f,6))}let o=document.createElement("div");o.className="chip",o.innerHTML=`
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
    `;let c=document.createElement("button");c.className="mini",c.dataset.act="settings",c.setAttribute("title","Settings"),c.setAttribute("aria-label","Settings"),c.innerHTML='<ha-icon icon="mdi:cog"></ha-icon><span>Settings</span>',o.appendChild(c);let s=document.createElement("div");s.className="delete-handle",s.innerHTML='<ha-icon icon="mdi:close-thick"></ha-icon>',s.addEventListener("click",f=>{var v,m;f.stopPropagation(),this._selection.size>1&&this._selection.has(r)?(Array.from(this._selection).forEach(w=>w.remove()),this._clearSelection(),this._resizeContainer(),this._queueSave("delete-multi"),(v=this._ensurePlaceholderIfEmpty)==null||v.call(this)):(r.remove(),this._resizeContainer(),this._queueSave("delete"),(m=this._ensurePlaceholderIfEmpty)==null||m.call(this))});try{this._addTabSelectorToChip(r,r.dataset.tabId)}catch{}o.addEventListener("click",async f=>{var m,y,w,S,_,T;f.stopPropagation();let v=(w=(y=(m=f.target)==null?void 0:m.closest("button"))==null?void 0:y.dataset)==null?void 0:w.act;if(v){if(v==="delete")this._selection.size>1&&this._selection.has(r)?(Array.from(this._selection).forEach(C=>C.remove()),this._clearSelection(),this._resizeContainer(),this._queueSave("delete-multi"),this._ensurePlaceholderIfEmpty()):(r.remove(),this._resizeContainer(),this._queueSave("delete"),this._ensurePlaceholderIfEmpty());else if(v==="duplicate"||v==="copy"){let R=this._selection.size>1&&this._selection.has(r)?Array.from(this._selection):[r];for(let C of R){let O=this._extractCardConfig(C.firstElementChild)||{},z=await this._createCard(O),b=this._makeWrapper(z);b.style.width=C.style.width,b.style.height=C.style.height;try{C.style&&C.style.overflow&&(b.style.overflow=C.style.overflow),C.dataset&&C.dataset.overflow&&(b.dataset.overflow=C.dataset.overflow);let F=C.firstElementChild,N=b.firstElementChild;F&&N&&F.style&&F.style.overflow&&(N.style.overflow=F.style.overflow)}catch{}let M=(parseFloat(C.getAttribute("data-x"))||0)+this.gridSize,I=(parseFloat(C.getAttribute("data-y"))||0)+this.gridSize;this._setCardPosition(b,M,I);{let F=this._highestZ()+1;b.style.zIndex=String(Math.max(F,6))}try{let F=(S=C.dataset)==null?void 0:S.tabId;F&&(b.dataset.tabId=F)}catch{}this.cardContainer.appendChild(b);try{(_=this._addTabSelectorToChip)==null||_.call(this,b,b.dataset.tabId)}catch{}try{this._rebuildOnce(b.firstElementChild)}catch{}this._initCardInteract(b)}this._resizeContainer(),this._queueSave("duplicate")}else if(v==="front")this._adjustZ(r,1);else if(v==="back")this._adjustZ(r,-1);else if(v==="front-most"){let R=this._selection.size>1&&this._selection.has(r)?Array.from(this._selection):[r];R.sort((O,z)=>{let b=parseInt(O.style.zIndex||"1",10),M=parseInt(z.style.zIndex||"1",10);return b-M});let C=this._highestZ();for(let O of R)C+=1,O.style.zIndex=String(C);this._queueSave("z-change")}else if(v==="back-most"){let R=this._selection.size>1&&this._selection.has(r)?Array.from(this._selection):[r];R.sort((z,b)=>{let M=parseInt(z.style.zIndex||"1",10);return parseInt(b.style.zIndex||"1",10)-M});let C=1/0;this.cardContainer.querySelectorAll(".card-wrapper").forEach(z=>{let b=parseInt(z.style.zIndex||"1",10);b<C&&(C=b)}),isFinite(C)||(C=1);let O=C;for(let z of R)O-=1,z.style.zIndex=String(Math.max(6,O));this._queueSave("z-change")}else if(v==="edit"){let R=this._extractCardConfig(r.firstElementChild)||{};await this._openSmartPicker("edit",R,async C=>{var b,M,I;let O=r.firstElementChild,z=await this._createCard(C);try{r.dataset.cfg=JSON.stringify(C),(b=this._hasCardModDeep)!=null&&b.call(this,C)?r.dataset.needsCardMod="true":delete r.dataset.needsCardMod}catch{}r.replaceChild(z,O),await In();try{if(z.hass=this.hass,(M=z.requestUpdate)==null||M.call(z),z.updateComplete)try{await z.updateComplete}catch{}}catch{}try{this._rebuildOnce(z)}catch{}try{z.dispatchEvent(new Event("ll-rebuild",{bubbles:!0,composed:!0}))}catch{}(I=this._resizeContainer)==null||I.call(this);try{clearTimeout(this._saveTimer),await this._saveLayout(!0)}catch(F){console.warn("Save before reload failed",F)}window.location.reload()})}else if(v==="settings")try{(T=this._openCardSettingsMenu)==null||T.call(this,r)}catch{}}});let l=document.createElement("div");l.className="shield";let u=document.createElement("div");u.classList.add("resize-handle"),this.editMode||(u.style.display="none"),u.title="Resize",u.innerHTML='<ha-icon icon="mdi:resize-bottom-right"></ha-icon>';try{let f=t._config||t.config;f&&typeof f=="object"&&Object.keys(f).length&&(r.dataset.cfg=JSON.stringify(f),this._hasCardModDeep(f)&&(r.dataset.needsCardMod="true"))}catch{}r.append(t,l,o,s,u);try{this._rebuildOnce(t)}catch{}return r.addEventListener("dblclick",f=>{if(this.editMode&&!(f.target.closest(".resize-handle")||f.target.closest(".delete-handle")||f.target.closest(".chip"))){f.stopPropagation();try{let v=r.querySelector('.chip button[data-act="edit"]');v&&v.click()}catch{}}}),r}_makePlaceholderAt(t=0,r=0,o=400,c=400){let s=document.createElement("div");s.classList.add("card-wrapper","ddc-placeholder"),s.dataset.placeholder="1",this.editMode&&s.classList.add("editing"),this._setCardPosition(s,t,r),s.style.width=`${o}px`,s.style.height=`${c}px`,s.style.zIndex=String(this._highestZ()+1);let l=document.createElement("div");l.className="ddc-placeholder-inner",l.setAttribute("aria-hidden","true");let u=document.createElement("div");u.className="ddc-hero";let f=this.heroImage;if(f){let w=document.createElement("img");w.src=f,w.alt="",u.appendChild(w)}let v=document.createElement("div");v.className="ddc-title",v.textContent="Drag & Drop Card";let m=document.createElement("div");m.className="ddc-sub",m.textContent="Hold me / double click me to enter Edit mode",u.append(v,m),l.appendChild(u),s.addEventListener("dblclick",w=>{w.stopPropagation(),this._toggleEditMode(!0)});let y=document.createElement("div");return y.className="shield",s.append(l,y),s}_processCardModOnce(){var r;if(this._cardModProcessed)return;this._cardModProcessed=!0,(((r=this.cardContainer)==null?void 0:r.querySelectorAll('[data-needs-card-mod="true"]'))||[]).forEach(o=>{let c=o.firstElementChild;if(!c)return;let s=c._config||c.config;if(s){if(s.type==="custom:mod-card")setTimeout(()=>{if(c.updateComplete)c.updateComplete.then(()=>{c.requestUpdate()});else if(c.setConfig)try{c.setConfig({...s})}catch{}},100);else if(s.card_mod&&c.setConfig)try{c.setConfig({...s})}catch{}}})}_showEmptyPlaceholder(){var c,s,l;if(this.cardContainer.querySelector(".ddc-placeholder"))return;let t=200,r=200,o=this._makePlaceholderAt(0,0,t,r);this.cardContainer.appendChild(o),this._resizeContainer();try{let u=(c=this.getBoundingClientRect)==null?void 0:c.call(this),f=(l=(s=this.cardContainer)==null?void 0:s.getBoundingClientRect)==null?void 0:l.call(s);if(u&&f){let v=(u.width-t)/2,m=(u.height-r)/2,y=v-(f.left-u.left),w=m-(f.top-u.top);(!Number.isFinite(y)||y<0)&&(y=0),(!Number.isFinite(w)||w<0)&&(w=0),this._setCardPosition(o,y,w)}}catch{}this._syncEmptyStateUI()}_hideEmptyPlaceholder(){this.cardContainer.querySelectorAll(".ddc-placeholder").forEach(t=>t.remove())}_ensurePlaceholderIfEmpty(){var r;this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)").length===0&&this._showEmptyPlaceholder(),(r=this._applyAutoScale)==null||r.call(this),this._syncEmptyStateUI()}_adjustZ(t,r){let c=parseInt(t.style.zIndex||"1",10)+r;c=Math.max(1,Math.min(9999,c)),t.style.zIndex=String(c),this._queueSave("z-change")}_highestZ(){let t=5;return this.cardContainer.querySelectorAll(".card-wrapper").forEach(r=>{let o=parseInt(r.style.zIndex||"0",10);o>t&&(t=o)}),t}_setCardPosition(t,r,o){let c=Math.round(r),s=Math.round(o);t.style.transform=`translate3d(${c}px, ${s}px, 0)`,t.setAttribute("data-x",String(c)),t.setAttribute("data-y",String(s))}_computeDesignSize(){let t=this.cardContainer;if(!t)return{w:1,h:1};if(this._isContainerFixed()){let{w:l,h:u}=this._resolveFixedSize();return{w:Math.max(1,l),h:Math.max(1,u)}}let r=0,o=0,c=Array.from(t.querySelectorAll(".card-wrapper"));if(!c.length){let l=t.getBoundingClientRect();return{w:Math.max(1,l.width||1),h:Math.max(1,l.height||1)}}for(let l of c){let u=parseFloat(l.getAttribute("data-x-raw")||l.getAttribute("data-x")||"0")||0,f=parseFloat(l.getAttribute("data-y-raw")||l.getAttribute("data-y")||"0")||0,v=parseFloat(l.style.width)||l.getBoundingClientRect().width||0,m=parseFloat(l.style.height)||l.getBoundingClientRect().height||0,y=u+v,w=f+m;y>r&&(r=y),w>o&&(o=w)}let s=Math.max(1,this.gridSize||10);return r=Math.ceil(r/s)*s,o=Math.ceil(o/s)*s,{w:Math.max(1,r),h:Math.max(1,o)}}_startScaleWatch(){if(!this.autoResizeCards||this.__scaleRAF)return;let t=()=>{var l,u,f;if(!this.autoResizeCards){this.__scaleRAF=null;return}let r=1;try{let v=(l=this.getBoundingClientRect)==null?void 0:l.call(this);r=Math.max(1,v&&v.width||this.offsetWidth||1)}catch{r=Math.max(1,this.offsetWidth||1)}let o=this.__lastScaleW||0,c=Math.abs(r-o);(!o||c>=20)&&(this.__lastScaleW=r,String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(u=this._applyAutoFillNoScale)==null||u.call(this):(f=this._applyAutoScale)==null||f.call(this)),this.__scaleRAF=requestAnimationFrame(t)};this.__scaleRAF=requestAnimationFrame(t)}_stopScaleWatch(){if(this.__scaleRAF){try{cancelAnimationFrame(this.__scaleRAF)}catch{}this.__scaleRAF=null}}_applyAutoScale(){var u,f,v,m,y,w,S,_,T,R,C,O,z,b,M,I,F,N,H,Q,B,V;let t="dynamic";try{if(t=String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase(),t==="auto"){(u=this._applyAutoFillNoScale)==null||u.call(this),this.removeAttribute("ddc-fixed-ui"),(v=(f=this.style)==null?void 0:f.removeProperty)==null||v.call(f,"--ddc-ui-width");return}}catch{}let r=this.cardContainer;if(!r)return;try{(this.autoResizeCards||t==="auto")&&typeof this._ensureScaleWrapper=="function"&&this._ensureScaleWrapper()}catch{}if(!this.autoResizeCards){let $=typeof this._computeDesignSize=="function"?this._computeDesignSize():{w:r.offsetWidth||1,h:r.offsetHeight||1};if(t==="dynamic"){try{(m=this._computeHaSidebarGutters_)==null||m.call(this)}catch{}this.removeAttribute("ddc-fixed-ui"),(w=(y=this.style)==null?void 0:y.removeProperty)==null||w.call(y,"--ddc-ui-width")}else this.removeAttribute("ddc-fixed-ui"),(_=(S=this.style)==null?void 0:S.removeProperty)==null||_.call(S,"--ddc-ui-width");let le=`${$.w}px`,_e=`${$.h}px`,Re=r.style.width===le,ge=r.style.height===_e,fe=r.style.transform==="scale(1)";if(!(Re&&ge&&fe)&&(r.style.width=le,r.style.height=_e,r.style.transform="scale(1)",r.style.transformOrigin="top left",r.style.position="absolute",r.style.top="0",r.style.left="0",this.__pointerScaleX=1,this.__pointerScaleY=1,this.__scaleOuter)){let he=this.parentElement&&((R=(T=this.parentElement).getBoundingClientRect)==null?void 0:R.call(T).width)||this.offsetParent&&((O=(C=this.offsetParent).getBoundingClientRect)==null?void 0:O.call(C).width)||this.getBoundingClientRect&&this.getBoundingClientRect().width||this.offsetWidth||$.w,He=`${Math.max(1,he)}px`,Ye=`${Math.max(1,$.h)}px`;this.__scaleOuter.style.width!==He&&(this.__scaleOuter.style.width=He),this.__scaleOuter.style.height!==Ye&&(this.__scaleOuter.style.height=Ye)}try{(z=this._syncTabsWidth_)==null||z.call(this)}catch{}return}this.removeAttribute("ddc-fixed-ui"),(M=(b=this.style)==null?void 0:b.removeProperty)==null||M.call(b,"--ddc-ui-width");let o=typeof this._computeDesignSize=="function"?this._computeDesignSize():{w:r.offsetWidth||1,h:r.offsetHeight||1},c=this.parentElement&&((F=(I=this.parentElement).getBoundingClientRect)==null?void 0:F.call(I).width)||this.offsetParent&&((H=(N=this.offsetParent).getBoundingClientRect)==null?void 0:H.call(N).width)||this.getBoundingClientRect&&this.getBoundingClientRect().width||this.offsetWidth||o.w,s=Math.max(1,c),l=s/Math.max(1,o.w);this.__scaleOuter&&(this.__scaleOuter.style.width=`${s}px`,this.__scaleOuter.style.height=`${Math.max(1,o.h*l)}px`),r.style.width=`${o.w}px`,r.style.height=`${o.h}px`,r.style.transform=`scale(${l})`,r.style.transformOrigin="top left",r.style.position="absolute",r.style.top="0",r.style.left="0",this.__pointerScaleX=l||1,this.__pointerScaleY=l||1;try{(Q=this._syncTabsWidth_)==null||Q.call(this)}catch{}try{(B=this._layoutYtBackground_)==null||B.call(this)}catch{}try{(V=this._requestGridButtonsUpdateSoon)==null||V.call(this)}catch{}}_applyAutoFillNoScale(){var t,r,o,c,s,l,u;if(!this.__applyingAutoFill){this.__applyingAutoFill=!0;try{try{(t=this._ensureScaleWrapper)==null||t.call(this)}catch{}let f=this.__scaleOuter||((o=(r=this.shadowRoot)==null?void 0:r.querySelector)==null?void 0:o.call(r,".ddc-scale-outer"))||this,v=this.cardContainer||((s=(c=this.shadowRoot)==null?void 0:c.querySelector)==null?void 0:s.call(c,"#cardContainer"));if(!f||!v)return;f.style.overflow="hidden",f.style.overflowX="auto",f.style.overflowY="hidden",f.style.width="100%";let m=f.getBoundingClientRect(),y=Math.max(1,Math.round(m.width||0)),w=Math.max(1,Math.round(m.height||0));if(w<150){let I=Math.max(0,Math.round(m.top||0)),F=Math.max(1,window.innerHeight||document.documentElement.clientHeight||0),N=Math.max(1,F-I-8);Math.abs(N-w)>4&&(f.style.height=N+"px",m=f.getBoundingClientRect(),y=Math.max(1,Math.round(m.width||0)),w=Math.max(1,Math.round(m.height||0)))}let S=0,_=0,T=Array.from(v.querySelectorAll(".card-wrapper"));if(T.length){let I=v.getBoundingClientRect();for(let F of T){let N=F.getBoundingClientRect(),H=N.left-I.left+N.width,Q=N.top-I.top+N.height;H>S&&(S=H),Q>_&&(_=Q)}}else S=v.scrollWidth||v.offsetWidth||y,_=v.scrollHeight||v.offsetHeight||w;let R=Number(this.gridSize||1)||1,C=Math.max(1,Math.round(Math.ceil(S/R)*R)),O=Math.max(1,Math.round(Math.ceil(_/R)*R)),z=y>C?y:C,b=w>O?w:O;if(v.style.transform="none",v.style.transformOrigin="left top",this.__pointerScaleX=1,this.__pointerScaleY=1,v.style.width=`${z}px`,v.style.height=`${b}px`,f){let I=0;try{let H=f.getBoundingClientRect();I=Math.max(0,Math.round(H.top||0))}catch{}let F=Math.max(1,window.innerHeight||document.documentElement.clientHeight||0),N=Math.max(1,F-I-8);f.style.height=`${b}px`}v.style.position=v.style.position||"absolute",v.style.top=v.style.top||"0",v.style.left=v.style.left||"0";let M=this.tabsBar;M&&this.tabsPosition!=="left"&&(M.style.width="100%",M.style.maxWidth="100%")}finally{try{(l=this._layoutYtBackground_)==null||l.call(this)}catch{}try{(u=this._requestGridButtonsUpdateSoon)==null||u.call(this)}catch{}requestAnimationFrame(()=>{this.__applyingAutoFill=!1})}}}_resizeContainer(){var s,l;let t=this.cardContainer;if(!t||this._isContainerFixed())return;let r=Array.from(t.querySelectorAll(".card-wrapper")),o=0,c=0;r.forEach(u=>{let f=u.getBoundingClientRect(),v=t.getBoundingClientRect(),m=f.left-v.left+f.width,y=f.top-v.top+f.height;o=Math.max(o,m),c=Math.max(c,y)}),t.style.width=`${Math.ceil(o/this.gridSize)*this.gridSize||100}px`,t.style.height=`${Math.ceil(c/this.gridSize)*this.gridSize||100}px`;try{(s=this._syncTabsWidth_)==null||s.call(this)}catch{}try{(l=this._requestGridButtonsUpdateSoon)==null||l.call(this)}catch{}}_pushCardsOutOfTheWay(t,r,o,c,s){if(!this.__collisionOriginals)return;let l=new Set(t.map(C=>C.el)),u=Array.from(this.cardContainer.querySelectorAll(".card-wrapper")).filter(C=>!C.dataset.placeholder),f=this._isContainerFixed(),{w:v,h:m}=this._getContainerSize();for(let C of u){if(l.has(C))continue;let O=this.__collisionOriginals.get(C);if(O){C.setAttribute("data-x-raw",String(O.x)),C.setAttribute("data-y-raw",String(O.y));let z=c?Math.round(O.x/s)*s:O.x,b=c?Math.round(O.y/s)*s:O.y;this._setCardPosition(C,z,b)}}let y=t.map(C=>({x:C.snapX,y:C.snapY,w:C.w,h:C.h})),w=new Map,S=new Map;for(let C of u){let O=parseFloat(C.style.width)||C.getBoundingClientRect().width,z=parseFloat(C.style.height)||C.getBoundingClientRect().height;S.set(C,{w:O,h:z})}let _=r>0?1:r<0?-1:0,T=o>0?1:o<0?-1:0,R=Math.abs(r)>=Math.abs(o);for(let C of u){if(l.has(C))continue;let O=this.__collisionOriginals.get(C);if(!O)continue;let{x:z,y:b}=O,{w:M,h:I}=S.get(C),F=!1;for(let N of y)if(this._rectsOverlap({x:N.x,y:N.y,w:N.w,h:N.h},{x:z,y:b,w:M,h:I})){F=!0,R&&_!==0?z=_>0?N.x+N.w:N.x-M:!R&&T!==0?b=T>0?N.y+N.h:N.y-I:z=N.x+N.w;break}if(F){let N=0,H=R?_!==0?_*s:s:0,Q=R?0:T!==0?T*s:s;for(;N<100;){let B={x:z,y:b,w:M,h:I},V=!1;for(let $ of y)if(this._rectsOverlap(B,$)){V=!0;break}if(!V){for(let[,$]of w)if(this._rectsOverlap(B,$)){V=!0;break}}if(!V&&f&&(z<0||b<0||z+M>v||b+I>m)&&(V=!0),!V)break;z+=H,b+=Q,N++}f&&(z=Math.max(0,Math.min(z,Math.max(0,v-M))),b=Math.max(0,Math.min(b,Math.max(0,m-I))))}w.set(C,{x:z,y:b,w:M,h:I}),y.push({x:z,y:b,w:M,h:I})}for(let[C,O]of w){C.setAttribute("data-x-raw",String(O.x)),C.setAttribute("data-y-raw",String(O.y));let z=c?Math.round(O.x/s)*s:O.x,b=c?Math.round(O.y/s)*s:O.y;this._setCardPosition(C,z,b)}}_rectFor(t,r=null,o=null,c=null,s=null){let l=r!=null?r:parseFloat(t.getAttribute("data-x"))||0,u=o!=null?o:parseFloat(t.getAttribute("data-y"))||0,f=c!=null?c:parseFloat(t.style.width)||t.getBoundingClientRect().width||0,v=s!=null?s:parseFloat(t.style.height)||t.getBoundingClientRect().height||0;return{x:l,y:u,w:f,h:v,el:t}}_rectsOverlap(t,r,o=.5){return!(t.x+t.w<=r.x+o||r.x+r.w<=t.x+o||t.y+t.h<=r.y+o||r.y+r.h<=t.y+o)}_anyCollisionFor(t,r){let o=Array.from(this.cardContainer.querySelectorAll(".card-wrapper")).filter(s=>!r.has(s)&&!s.dataset.placeholder);if(!o.length)return!1;let c=o.map(s=>this._rectFor(s));for(let s of t)for(let l of c)if(this._rectsOverlap(s,l))return!0;return!1}_extractCardConfig(t){var o;if(!t)return{};let r=t._config||t.config;if(r&&typeof r=="object"&&Object.keys(r).length)try{return typeof structuredClone=="function"?structuredClone(r):JSON.parse(JSON.stringify(r))}catch{return{...r}}try{let c=t.closest?t.closest(".card-wrapper"):null,s=(o=c==null?void 0:c.dataset)==null?void 0:o.cfg;if(s){let l=JSON.parse(s);if(l&&typeof l=="object")return l}}catch{}return{}}async _openCardManager(){await this._openSmartPicker("add")}_catalog(){return[{id:"favorites",name:"Favorites",items:[]},{id:"recent",name:"Recent",items:[]},{id:"basics",name:"Basics",items:[{type:"entities",name:"Entities",icon:"mdi:format-list-bulleted"},{type:"entity",name:"Entity",icon:"mdi:checkbox-blank-circle-outline"},{type:"tile",name:"Tile",icon:"mdi:view-grid-outline"},{type:"button",name:"Button",icon:"mdi:gesture-tap-button"},{type:"glance",name:"Glance",icon:"mdi:eye-outline"},{type:"markdown",name:"Markdown",icon:"mdi:language-markdown"},{type:"custom_card",name:"Custom Card",icon:"mdi:puzzle-outline"}]},{id:"sensors",name:"Sensors",items:[{type:"sensor",name:"Sensor",icon:"mdi:antenna"},{type:"gauge",name:"Gauge",icon:"mdi:gauge"},{type:"history-graph",name:"History graph",icon:"mdi:chart-line"},{type:"statistics-graph",name:"Statistics graph",icon:"mdi:chart-bar"}]},{id:"visual",name:"Visual",items:[{type:"picture-entity",name:"Picture entity",icon:"mdi:image-outline"},{type:"picture-glance",name:"Picture glance",icon:"mdi:image-multiple-outline"},{type:"weather-forecast",name:"Weather",icon:"mdi:weather-partly-cloudy"},{type:"map",name:"Map",icon:"mdi:map"},{type:"iframe",name:"iFrame",icon:"mdi:application"}]},{id:"controls",name:"Controls",items:[{type:"light",name:"Light",icon:"mdi:lightbulb-outline"},{type:"thermostat",name:"Thermostat",icon:"mdi:thermostat"},{type:"media-control",name:"Media control",icon:"mdi:play-circle-outline"},{type:"alarm-panel",name:"Alarm panel",icon:"mdi:shield-home-outline"},{type:"area",name:"Area",icon:"mdi:map-marker"}]}]}async _getEditorElementForType(t,r){try{console.info("[ddc:editor] Requesting editor element",{type:t,cfg:r})}catch{}let o=await this._helpersPromise||await window.loadCardHelpers();try{typeof t=="string"&&t&&!t.startsWith("custom:")&&t!=="custom_card"&&await this._ensureCardModuleLoaded(t,r)}catch{}if(typeof t=="string"&&t==="entity")try{return await this._getEntityCardEditor(r||{})}catch(v){console.warn("[ddc:editor] Custom entity editor failed",v)}let c=async()=>{try{if(o.getCardElementClass)return await o.getCardElementClass(t);let v;if(r&&typeof r=="object")v={type:t,...r};else{let y;try{y=await this._getStubConfigForType(t)}catch{}v=y&&typeof y=="object"?{...y}:{type:t}}let m=o.createCardElement(v);return(m==null?void 0:m.constructor)||null}catch{return null}};try{let v=await c();if(v){if(typeof v.getConfigElement=="function"){let m=await v.getConfigElement();if(m){try{console.info("[ddc:editor] Found static class editor",{type:t})}catch{}return m}}if(typeof v.getConfigForm=="function")try{let m=await v.getConfigForm();if(m&&m.schema){try{await customElements.whenDefined("ha-form")}catch{}let y=document.createElement("ha-form");y.hass=this.hass,y.schema=Array.isArray(m.schema)?m.schema.map(w=>({...w})):m.schema,typeof m.computeLabel=="function"&&(y.computeLabel=m.computeLabel.bind(v)),typeof m.computeHelper=="function"&&(y.computeHelper=m.computeHelper.bind(v)),y.data={...r},y.addEventListener("value-changed",w=>{});try{console.info("[ddc:editor] Generated form editor via getConfigForm",{type:t})}catch{}return y}}catch{}}}catch{}if(typeof t=="string"&&(t.startsWith("custom:")||t==="custom_card"))try{let v;try{v=await this._getStubConfigForType(t)}catch{}let m=v&&typeof v=="object"?{...v}:{type:t},y=o.createCardElement(m);if(y.hass=this.hass,typeof y.getConfigElement=="function"){let w=await y.getConfigElement();if(w){try{console.info("[ddc:editor] Found instance-level editor",{type:t})}catch{}return w}}}catch{}let s=String(t).replace(/^custom:/,""),u=(Array.isArray(window.customCards)?window.customCards:[]).find(v=>(v==null?void 0:v.type)===s||(v==null?void 0:v.type)===t||(v==null?void 0:v.type)===`custom:${s}`),f=[];u!=null&&u.editor&&f.push(u.editor),f.push(`${s}-editor`,`${s}-config-editor`),s&&typeof s=="string"&&f.push(`hui-${s}-card-editor`);for(let v of f)if(!(!v||typeof v!="string"))for(let m of[0,100,300,700,1500,3e3])try{if(customElements.get(v)||await Promise.race([customElements.whenDefined(v),new Promise(y=>setTimeout(y,m))]),customElements.get(v)){try{console.info("[ddc:editor] Found editor by tag",{type:t,tag:v})}catch{}return document.createElement(v)}}catch{}return null}async _ensureCardModuleLoaded(t,r){try{let o=await this._helpersPromise||await window.loadCardHelpers(),c;if(r&&typeof r=="object")c={type:t,...r};else{let u;try{u=await this._getStubConfigForType(t)}catch{}c=u&&typeof u=="object"?{...u}:{type:t}}let s=o.createCardElement(c);s.hass=this.hass;let l=document.createElement("div");l.style.cssText="position:fixed;left:-9999px;top:-9999px;opacity:0;pointer-events:none;",l.appendChild(s),document.body.appendChild(l),await new Promise(u=>requestAnimationFrame(u)),l.remove();try{console.info("[ddc:editor] Warmed card module",{type:t})}catch{}}catch{}}_ensureOverlayZFix(){if(document.querySelector("style[data-ddc-overlay-fix]"))return;let t=document.createElement("style");t.setAttribute("data-ddc-overlay-fix",""),t.textContent=`
      /* Make common HA overlays float above our modal */
      vaadin-combo-box-overlay,
      vaadin-overlay-backdrop,
      mwc-menu-surface,
      .mdc-menu-surface--open {
        z-index: 1000000 !important;
      }
    `,document.head.appendChild(t)}_customCardsFromRegistry(){return(Array.isArray(window.customCards)?window.customCards:[]).map(r=>{var o;return{type:(o=r==null?void 0:r.type)!=null&&o.startsWith("custom:")?r.type:`custom:${r==null?void 0:r.type}`,name:(r==null?void 0:r.name)||(r==null?void 0:r.type)||"Custom card",icon:"mdi:puzzle-outline",description:(r==null?void 0:r.description)||"",editorTag:(r==null?void 0:r.editor)||null}}).filter(r=>typeof r.type=="string"&&r.type.startsWith("custom:"))}_schemaForType(t){let r=c=>c,o=[];return{entities:r({fields:[{key:"entities",type:"entities",multi:!0,domains:o,label:"Entities"}]}),entity:r({fields:[{key:"entity",type:"entity",multi:!1,domains:o,label:"Entity"}]}),sensor:r({fields:[{key:"entity",type:"entity",multi:!1,domains:["sensor"],label:"Sensor"},{key:"name",type:"text",label:"Name (optional)"}]}),gauge:r({fields:[{key:"entity",type:"entity",multi:!1,domains:["sensor","number","input_number"],label:"Numeric entity"},{key:"min",type:"number",label:"Min",step:"any"},{key:"max",type:"number",label:"Max",step:"any"}]}),"history-graph":r({fields:[{key:"entities",type:"entities",multi:!0,domains:o,label:"Entities (multiselect)"},{key:"hours_to_show",type:"number",label:"Hours to show",default:24}]}),"statistics-graph":r({fields:[{key:"entities",type:"entities",multi:!0,domains:["sensor","number","input_number"],label:"Entities (multiselect)"},{key:"chart_type",type:"select",options:["line","bar"],label:"Chart type",default:"line"},{key:"statistic",type:"select",options:["mean","min","max","sum"],label:"Statistic",default:"mean"}]}),glance:r({fields:[{key:"entities",type:"entities",multi:!0,domains:o,label:"Entities (multiselect)"}]}),"picture-glance":r({fields:[{key:"entities",type:"entities",multi:!0,domains:o,label:"Entities (multiselect)"},{key:"image",type:"text",label:"Image URL (optional)"}]}),"picture-entity":r({fields:[{key:"entity",type:"entity",multi:!1,domains:o,label:"Entity"},{key:"image",type:"text",label:"Image URL (optional)"}]}),"weather-forecast":r({fields:[{key:"entity",type:"entity",multi:!1,domains:["weather"],label:"Weather entity"}]}),map:r({fields:[{key:"entities",type:"entities",multi:!0,domains:["device_tracker","person"],label:"Trackers / people (multiselect)"},{key:"default_zoom",type:"number",label:"Default zoom",default:14}]}),"media-control":r({fields:[{key:"entity",type:"entity",multi:!1,domains:["media_player"],label:"Media player"}]}),light:r({fields:[{key:"entity",type:"entity",multi:!1,domains:["light"],label:"Light"}]}),thermostat:r({fields:[{key:"entity",type:"entity",multi:!1,domains:["climate"],label:"Climate"}]}),"alarm-panel":r({fields:[{key:"entity",type:"entity",multi:!1,domains:["alarm_control_panel"],label:"Alarm"}]}),markdown:r({fields:[{key:"content",type:"textarea",label:"Markdown"}]}),tile:r({fields:[{key:"entity",type:"entity",multi:!1,domains:o,label:"Entity"}]}),button:r({fields:[{key:"entity",type:"entity",multi:!1,domains:o,label:"Entity (optional)"}]}),iframe:r({fields:[{key:"url",type:"text",label:"URL"}]}),area:r({fields:[{key:"area",type:"text",label:"Area ID"}]})}[t]||{fields:[]}}async _getEntityCardEditor(t={}){let r=document.createElement("div");r.style.display="flex",r.style.flexDirection="column",r.style.gap="12px",r.style.padding="8px 0",r.style.overflow="visible",r._cfg={type:"entity",...t||{}};let o=()=>{let O={type:"entity"};["entity","name","icon","attribute","unit","state_color","theme"].forEach(z=>{let b=r._cfg[z];b!==void 0&&b!==""&&b!==null&&(O[z]=b)}),r.dispatchEvent(new CustomEvent("config-changed",{detail:{config:O}}))},c=document.createElement("div");c.style.display="flex",c.style.flexDirection="column",c.style.gap="4px";let s=document.createElement("span");s.textContent="Entity",s.style.fontSize=".8rem",s.style.opacity="0.8";let l=document.createElement("ha-entity-picker");l.setAttribute("label","Select entity"),l.addEventListener("value-changed",O=>{var b,M,I;O.stopPropagation();let z=(I=O.detail&&((b=O.detail.value)!=null?b:O.detail))!=null?I:(M=O.target)==null?void 0:M.value;r._cfg.entity=z||"";try{u()}catch{}o()}),c.appendChild(s),c.appendChild(l),r.appendChild(c);let u=()=>{},f=document.createElement("div");f.style.display="grid",f.style.gridTemplateColumns="1fr 1fr",f.style.columnGap="12px",f.style.rowGap="12px";let v=(O,z)=>{let b=document.createElement("div");b.style.display="flex",b.style.flexDirection="column",b.style.gap="4px";let M=document.createElement("span");M.textContent=O,M.style.fontSize=".8rem",M.style.opacity="0.8",b.appendChild(M),b.appendChild(z),f.appendChild(b)},m;customElements.get("ha-textfield")?(m=document.createElement("ha-textfield"),m.setAttribute("label","Name"),m.addEventListener("input",()=>{r._cfg.name=m.value||void 0,o()})):(m=document.createElement("input"),m.type="text",m.placeholder="Name",m.addEventListener("input",()=>{r._cfg.name=m.value||void 0,o()}),Object.assign(m.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})),v("Name",m);let y;customElements.get("ha-icon-picker")?(y=document.createElement("ha-icon-picker"),y.setAttribute("label","Icon"),y.addEventListener("value-changed",O=>{var z;O.stopPropagation(),r._cfg.icon=((z=O.detail)==null?void 0:z.value)||void 0,o()}),Object.assign(y.style,{position:"relative",zIndex:"1000"})):customElements.get("ha-textfield")?(y=document.createElement("ha-textfield"),y.setAttribute("label","Icon"),y.addEventListener("input",()=>{r._cfg.icon=y.value||void 0,o()})):(y=document.createElement("input"),y.type="text",y.placeholder="mdi:icon",y.addEventListener("input",()=>{r._cfg.icon=y.value||void 0,o()}),Object.assign(y.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})),v("Icon",y);let w;if(u=()=>{var H,Q;let O=[],z=(H=r._cfg)==null?void 0:H.entity,b=r._hass;if(z&&b&&b.states&&b.states[z]&&b.states[z].attributes)try{O=Object.keys(b.states[z].attributes||{}).filter(B=>B&&typeof B=="string"),O.sort()}catch{}let M=w&&typeof w.value!="undefined"?w.value:void 0,I=((w==null?void 0:w.tagName)||"").toLowerCase(),F={min_color_temp_kelvin:"Minimum color temperature (Kelvin)",max_color_temp_kelvin:"Maximum color temperature (Kelvin)",min_color_temp_mireds:"Minimum color temperature (mireds)",max_color_temp_mireds:"Maximum color temperature (mireds)",min_mireds:"Minimum color temperature (mireds)",max_mireds:"Maximum color temperature (mireds)",effect_list:"Available effects",color_mode:"Color mode",brightness:"Brightness",hs_color:"Hs color",rgb_color:"Rgb color",xy_color:"Xy color",entity_id:"Entity ID",friendly_name:"Friendly name",icon:"Icon"},N=B=>F[B]?F[B]:B.split("_").map(V=>V&&(V.toLowerCase()==="kelvin"?"Kelvin":V.toLowerCase()==="mireds"?"mireds":V.charAt(0).toUpperCase()+V.slice(1))).join(" ");if(I==="ha-combo-box"){let B=O.map(V=>({value:V,label:N(V)}));B.unshift({value:"",label:""}),w.items=B,M&&O.includes(M)?w.value=M:w.value=""}else if(I==="ha-select"){w.innerHTML="";let B=document.createElement("mwc-list-item");B.setAttribute("value",""),B.textContent="",w.appendChild(B);for(let V of O){let $=document.createElement("mwc-list-item");$.setAttribute("value",V),$.textContent=N(V),w.appendChild($)}M&&O.includes(M)?w.value=M:w.value="",(Q=w.requestUpdate)==null||Q.call(w)}else if(I==="select"){w.innerHTML="";let B=document.createElement("option");B.value="",B.textContent="",w.appendChild(B);for(let V of O){let $=document.createElement("option");$.value=V,$.textContent=N(V),w.appendChild($)}M&&O.includes(M)&&(w.value=M)}},customElements.get("ha-combo-box"))w=document.createElement("ha-combo-box"),w.setAttribute("label","Attribute"),w.setAttribute("item-label-path","label"),w.setAttribute("item-value-path","value"),w.setAttribute("allow-custom-value","false"),w.addEventListener("value-changed",O=>{var b,M;O.stopPropagation();let z=(M=(b=O.detail)==null?void 0:b.value)!=null?M:w.value;r._cfg.attribute=z||void 0,o()});else if(customElements.get("ha-select"))w=document.createElement("ha-select"),w.setAttribute("label","Attribute"),w.addEventListener("selected",O=>{O.stopPropagation(),r._cfg.attribute=w.value||void 0,o()}),Object.assign(w.style,{position:"relative",zIndex:"1000"});else{w=document.createElement("select");let O=document.createElement("option");O.value="",O.textContent="",w.appendChild(O),w.addEventListener("change",z=>{z.stopPropagation(),r._cfg.attribute=w.value||void 0,o()}),Object.assign(w.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),Object.assign(w.style,{position:"relative",zIndex:"1000"})}u(),v("Attribute",w);let S;customElements.get("ha-textfield")?(S=document.createElement("ha-textfield"),S.setAttribute("label","Unit"),S.addEventListener("input",()=>{r._cfg.unit=S.value||void 0,o()})):(S=document.createElement("input"),S.type="text",S.placeholder="Unit",S.addEventListener("input",()=>{r._cfg.unit=S.value||void 0,o()}),Object.assign(S.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})),v("Unit",S);let _;if(customElements.get("ha-select"))_=document.createElement("ha-select"),_.setAttribute("label","Theme (optional)"),_.addEventListener("selected",O=>{O.stopPropagation(),r._cfg.theme=_.value||void 0,o()});else{_=document.createElement("select");let O=document.createElement("option");O.value="",O.textContent="",_.appendChild(O),_.addEventListener("change",z=>{z.stopPropagation(),r._cfg.theme=_.value||void 0,o()}),Object.assign(_.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})}v("Theme (optional)",_);let T;customElements.get("ha-switch")?(T=document.createElement("ha-switch"),T.addEventListener("change",()=>{r._cfg.state_color=!!T.checked,o()})):(T=document.createElement("input"),T.type="checkbox",T.addEventListener("change",()=>{r._cfg.state_color=!!T.checked,o()}));let R=document.createElement("div");R.style.display="flex",R.style.alignItems="center",R.style.gap="8px";let C=document.createElement("span");return C.textContent="Show state color",C.style.fontSize=".8rem",C.style.opacity="0.8",R.appendChild(C),R.appendChild(T),f.appendChild(R),r.appendChild(f),r.setConfig=(O={})=>{r._cfg={type:"entity",...O||{}};let z=r._cfg;if(l&&("value"in l&&(l.value=z.entity||""),l.setAttribute&&l.setAttribute("value",z.entity||"")),m&&(m.value=z.name||""),y&&(y.value=z.icon||""),w){try{u()}catch{}w.value=z.attribute||""}S&&(S.value=z.unit||""),_&&(_.value=z.theme||""),T&&"checked"in T&&(T.checked=!!z.state_color)},Object.defineProperty(r,"hass",{get(){return this._hass},set(O){var z;if(this._hass=O,l){try{l.hass=O}catch{}customElements.get("ha-entity-picker")||customElements.whenDefined("ha-entity-picker").then(()=>{var b;try{l.hass=this._hass,(b=l.requestUpdate)==null||b.call(l)}catch{}}).catch(()=>{})}if(y){try{y.hass=O}catch{}customElements.get("ha-icon-picker")||customElements.whenDefined("ha-icon-picker").then(()=>{var b;try{y.hass=this._hass,(b=y.requestUpdate)==null||b.call(y)}catch{}}).catch(()=>{})}if(_){let b=[];O&&O.themes&&(O.themes.themes?b=Object.keys(O.themes.themes):typeof O.themes=="object"&&(b=Object.keys(O.themes).filter(F=>F!=="default_theme")));let M=_.value,I=(_.tagName||"").toLowerCase();if(I==="ha-select"){_.innerHTML="";let F=document.createElement("mwc-list-item");F.setAttribute("value",""),F.textContent="",_.appendChild(F);for(let N of b){let H=document.createElement("mwc-list-item");H.setAttribute("value",N),H.textContent=N,_.appendChild(H)}M&&b.includes(M)?_.value=M:M||(_.value=""),(z=_.requestUpdate)==null||z.call(_)}else if(I==="select"){_.innerHTML="";let F=document.createElement("option");F.value="",F.textContent="",_.appendChild(F);for(let N of b){let H=document.createElement("option");H.value=N,H.textContent=N,_.appendChild(H)}M&&Array.from(_.options).some(N=>N.value===M)&&(_.value=M)}}try{u()}catch{}}}),r.setConfig(t||{}),r}_shapeBySchema(t,r={}){let o=this._schemaForType(t)||{fields:[]},c={...r,type:t};for(let s of o.fields){let l=c[s.key];if(s.type==="entities"){let f=(Array.isArray(l)?l:l!=null&&l!==""?[l]:[]).filter(Boolean);f.length?c[s.key]=f:delete c[s.key]}else if(s.type==="entity")Array.isArray(l)&&(l=l[0]),l==null||l===""?delete c[s.key]:c[s.key]=String(l);else if(s.type==="number")if(l==null||l==="")delete c[s.key];else{let u=Number(l);Number.isFinite(u)?c[s.key]=u:delete c[s.key]}else(s.type==="select"||s.type==="text"||s.type==="textarea")&&(l==null||l===""?delete c[s.key]:c[s.key]=l)}return c}_statesList(t){var c;let r=Object.keys(((c=this.hass)==null?void 0:c.states)||{});if(!t||!t.length)return r;if(!this.__domainIndex||this.__domainIndex._gen!==r.length){let s={};for(let l of r){let u=l.split(".")[0];(s[u]||(s[u]=[])).push(l)}this.__domainIndex={_gen:r.length,map:s}}let o=[];for(let s of t)this.__domainIndex.map[s]&&o.push(...this.__domainIndex.map[s]);return o}_isNumericEntity(t){var c,s;let r=(s=(c=this.hass)==null?void 0:c.states)==null?void 0:s[t];if(!r)return!1;let o=Number(r.state);return Number.isFinite(o)}_getFaves(){try{return new Set(JSON.parse(localStorage.getItem("ddc_faves")||"[]"))}catch{return new Set}}_setFaves(t){try{localStorage.setItem("ddc_faves",JSON.stringify(Array.from(t)))}catch{}}_getRecent(){try{return JSON.parse(localStorage.getItem("ddc_recent_types")||"[]")}catch{return[]}}_pushRecent(t){try{let r=this._getRecent().filter(o=>o!==t);r.unshift(t),r.length>10&&(r.length=10),localStorage.setItem("ddc_recent_types",JSON.stringify(r))}catch{}}async _ensureCodeMirror(){if(!this.__cmReady){if(!document.querySelector("link[data-cm-core]")){let t=document.createElement("link");t.rel="stylesheet",t.href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.css",t.setAttribute("data-cm-core",""),document.head.appendChild(t)}await new Promise(t=>{if(window.CodeMirror)return t();let r=document.createElement("script");r.src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.js",r.onload=t,document.head.appendChild(r)}),await new Promise(t=>{var o,c;if((c=(o=window.CodeMirror)==null?void 0:o.mimeModes)!=null&&c.yaml)return t();let r=document.createElement("script");r.src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/yaml/yaml.min.js",r.onload=t,document.head.appendChild(r)}),this.__cmReady=!0}}async _mountYamlEditor(t,r,o,c){let s=f=>window.jsyaml?window.jsyaml.dump(f):JSON.stringify(f,null,2),l=f=>window.jsyaml?window.jsyaml.load(f):JSON.parse(f);t.innerHTML="";let u=s(r);if(customElements.get("ha-code-editor")){let f=document.createElement("ha-code-editor");f.mode="yaml",f.hass=this.hass,f.value=u,f.style.display="block",f.style.height="260px",t.appendChild(f);let v=!1;return f.addEventListener("value-changed",m=>{var w,S,_;if(v)return;let y=(_=(S=(w=m.detail)==null?void 0:w.value)!=null?S:f.value)!=null?_:"";try{o(l(y))}catch(T){c==null||c(T)}}),{setValue:m=>{var w;let y=s(m);((w=f.value)!=null?w:"")!==y&&(v=!0,f.value=y,v=!1)}}}try{await this._ensureCodeMirror();let f=window.CodeMirror(t,{value:u,mode:"yaml",lineNumbers:!0,lineWrapping:!0,indentUnit:2,tabSize:2}),v=!1;return f.on("change",()=>{if(v)return;let m=f.getValue();try{o(l(m))}catch(y){c==null||c(y)}}),{setValue:m=>{let y=s(m);f.getValue()!==y&&(v=!0,f.setValue(y),v=!1)}}}catch{let f=document.createElement("textarea");return f.style.width="100%",f.style.height="260px",f.value=u,f.addEventListener("input",()=>{try{o(l(f.value))}catch(v){c==null||c(v)}}),t.appendChild(f),{setValue:v=>{let m=s(v);f.value!==m&&(f.value=m)}}}}_createVirtualList({container:t,items:r,rowHeight:o=36,renderRow:c}){t.style.position="relative",t.style.overflow="auto";let s=document.createElement("div");s.style.height=`${r.length*o}px`,t.innerHTML="",t.appendChild(s);let l=new Map,u=()=>{let f=t.scrollTop,v=t.clientHeight,m=Math.max(0,Math.floor(f/o)-6),y=Math.min(r.length-1,Math.ceil((f+v)/o)+6);for(let[w,S]of l)(w<m||w>y)&&(S.remove(),l.delete(w));for(let w=m;w<=y;w++){if(l.has(w))continue;let S=c(r[w],w);S.style.position="absolute",S.style.left="0",S.style.right="0",S.style.top=`${w*o}px`,l.set(w,S),t.appendChild(S)}};return t.addEventListener("scroll",u,{passive:!0}),new ResizeObserver(u).observe(t),u(),{refresh(f){if(f){r=f,s.style.height=`${r.length*o}px`;for(let[,v]of l)v.remove();l.clear()}u()}}}async _openSmartPicker(t="add",r=null,o=null){let c=()=>s.remove(),s=document.createElement("div");s.className="modal",s.innerHTML=`
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
      </div>`,this.shadowRoot.appendChild(s);let l=s.querySelector("#leftPane"),u=s.querySelector("#addBtn"),f=s.querySelector("#footAdd"),v=s.querySelector("#cancelBtn"),m=s.querySelector("#footCancel"),y=s.querySelector("#search"),w=s.querySelector("#cardHost"),S=s.querySelector("#editorHost"),_=s.querySelector("#editorSpin"),T=s.querySelector("#quickFill"),R=s.querySelector("#yamlHost"),C=s.querySelector("#yamlErr"),O=s.querySelector("#yamlSec"),z=s.querySelector("#tabVisual"),b=s.querySelector("#tabYaml"),M=s.querySelector("#tabVis"),I=s.querySelector("#visSec"),F=s.querySelector("#visHost"),N=s.querySelector("#err"),H=s.querySelector("#previewSpin"),Q=j=>{u.disabled=f.disabled=!j},B=j=>{j?(N.hidden=!1,N.textContent=j):(N.hidden=!0,N.textContent="")},V=this._getFaves(),$=this._getRecent(),le=this._catalog(),_e=le.find(j=>j.id==="favorites"),Re=le.find(j=>j.id==="recent"),ge=le.flatMap(j=>j.items||[]);_e.items=ge.filter(j=>V.has(j.type)),Re.items=$.map(j=>ge.find(K=>K.type===j)).filter(Boolean);let fe=this._customCardsFromRegistry();fe.length&&le.push({id:"custom",name:"Custom (installed)",items:fe});let he=s.querySelector("#quickFillSec");he&&(he.style.display="none");let He=s.querySelector("#optionsSec .hd"),Ye,Oe,Ue=()=>{if(!Oe)return;let j=$e&&V.has($e),K=Oe.querySelector("ha-icon");K&&K.setAttribute("icon",j?"mdi:star":"mdi:star-outline")},ot=j=>{if(Ye){let K=ge.find(Se=>Se.type===j),ye=K?K.name:j||"";Ye.textContent=ye}Ue()};if(He&&!He.querySelector(".sel-info")){let j=He.querySelector("span");j&&(j.style.display="none"),Ye=document.createElement("span"),Ye.className="sel-info",Ye.style.flex="1",Ye.style.fontWeight="bold",Ye.style.paddingRight="8px",He.insertBefore(Ye,He.firstChild),Oe=document.createElement("button"),Oe.className="icon-btn",Oe.setAttribute("title","Favorite"),Object.assign(Oe.style,{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"28px",height:"28px",borderRadius:"6px",border:"1px solid var(--divider-color)",background:"var(--primary-background-color)",padding:"0",marginLeft:"4px",cursor:"pointer"}),Oe.innerHTML='<ha-icon icon="mdi:star-outline"></ha-icon>',He.appendChild(Oe),Oe.addEventListener("click",K=>{K.stopPropagation(),$e&&(V.has($e)?V.delete($e):V.add($e),this._setFaves(V),Ue(),ct())})}let st="visual",re=j=>{let K=j==="yaml",ye=j==="vis",Se=!K&&!ye;z.classList.toggle("active",Se),z.setAttribute("aria-selected",String(Se)),b.classList.toggle("active",K),b.setAttribute("aria-selected",String(K)),M&&(M.classList.toggle("active",ye),M.setAttribute("aria-selected",String(ye))),S.parentElement.style.display=Se?"":"none",O.style.display=K?"":"none",I&&(I.style.display=ye?"":"none"),K?O.scrollIntoView({behavior:"smooth",block:"start"}):ye&&I&&I.scrollIntoView({behavior:"smooth",block:"start"}),st=K?"yaml":ye?"vis":"visual"};z.addEventListener("click",async()=>{var j;if(re("visual"),!Le)await Tt(ae);else try{(j=Le.setConfig)==null||j.call(Le,ae)}catch{}}),b.addEventListener("click",()=>re("yaml")),M&&M.addEventListener("click",()=>{re("vis");try{Fe(ae)}catch{}}),re("visual");let ut=()=>{let j=y.value.trim().toLowerCase();return le.map(K=>({...K,items:(K.items||[]).filter(ye=>!j||ye.name.toLowerCase().includes(j)||ye.type.toLowerCase().includes(j))})).filter(K=>K.items&&K.items.length||K.id==="favorites"||K.id==="recent")},ct=()=>{let j=ut();l.innerHTML="",j.forEach(K=>{let ye=document.createElement("div");ye.style.padding="12px",ye.style.borderBottom="1px solid var(--divider-color)";let Se=document.createElement("h4");if(Se.textContent=K.name,Se.style.margin="0 0 10px 0",Se.style.fontSize=".92rem",Se.style.opacity=".85",ye.appendChild(Se),!K.items.length&&(K.id==="favorites"||K.id==="recent")){let de=document.createElement("div");de.style.opacity=".6",de.style.fontSize=".85rem",de.textContent=K.id==="favorites"?"No favorites yet.":"No recent items yet.",ye.appendChild(de)}else K.items.forEach(de=>{let ze=document.createElement("button");ze.innerHTML=`<span style="display:inline-flex;align-items:center;gap:8px">
              <ha-icon icon="${de.icon}"></ha-icon><span>${de.name}</span>
            </span>`,Object.assign(ze.style,{display:"block",width:"100%",textAlign:"left",border:"none",background:"transparent",padding:"8px",borderRadius:"10px",cursor:"pointer"}),ze.addEventListener("click",async()=>{Ie(ze),await yt(de.type)}),ye.appendChild(ze)});l.appendChild(ye)})},Ie=j=>{l.querySelectorAll("button").forEach(K=>{K.classList.remove("active"),K.style.background="transparent",K.style.color=""}),j&&(j.classList.add("active"),j.style.background="rgba(3,169,244,.12)",j.style.color="var(--primary-color)")},ae=null,$e=null,Ce=null,Le=null,ft=null,gt=0,Bt=null,lt="",At=(j,K)=>{var Y;let ye=this._schemaForType(j);if(T.innerHTML="",!ye.fields.length){T.innerHTML='<div style="opacity:.7;font-size:.9rem">No quick fill for this card \u2014 use the editors below.</div>';return}let Se=Object.keys(((Y=this.hass)==null?void 0:Y.states)||{}),de=document.createElement("div"),ze=(Z,Me,U,Qe)=>{let Ve=document.createElement("div");Object.assign(Ve.style,{padding:"8px 10px",border:"1px solid var(--divider-color)",borderRadius:"10px",cursor:"pointer",userSelect:"none",display:"flex",alignItems:"center",gap:"8px"}),Ve.innerHTML=`<ha-icon icon="mdi:checkbox-blank-outline"></ha-icon><span>${Z}</span>`,Me.includes(Z)&&(Ve.style.background="rgba(3,169,244,.12)",Ve.style.borderColor="var(--primary-color)",Ve.querySelector("ha-icon").setAttribute("icon","mdi:checkbox-marked")),Ve.addEventListener("click",async()=>{let nt=Me.indexOf(Z);nt>=0?Me.splice(nt,1):Me.push(Z);let je=Me.includes(Z);Ve.style.background=je?"rgba(3,169,244,.12)":"",Ve.style.borderColor=je?"var(--primary-color)":"var(--divider-color)",Ve.querySelector("ha-icon").setAttribute("icon",je?"mdi:checkbox-marked":"mdi:checkbox-blank-outline"),ae=this._shapeBySchema(j,{...ae,[Qe]:[...Me]}),mt(ae),Ce==null||Ce.setValue(ae)}),U.appendChild(Ve)};ye.fields.forEach(Z=>{var Qe,Ve,nt,je,rt,et,tt,Ge,Xe;let Me=document.createElement("div");Object.assign(Me.style,{display:"flex",gap:"8px",alignItems:"center",marginBottom:"8px"});let U=document.createElement("label");if(U.textContent=Z.label||Z.key,U.style.minWidth="130px",Z.type==="entities"){let Pe=document.createElement("div");Pe.style.flex="1";let ve=document.createElement("input");Object.assign(ve,{placeholder:"Filter entities\u2026"}),Object.assign(ve.style,{width:"100%",padding:"8px 10px",borderRadius:"10px",border:"1px solid var(--divider-color)",background:"var(--card-background-color)",color:"var(--primary-text-color)"});let Ee=document.createElement("div");Object.assign(Ee.style,{maxHeight:"220px",overflow:"auto",marginTop:"8px",border:"1px solid var(--divider-color)",borderRadius:"10px",padding:"6px"});let Be=Z.domains&&Z.domains.length?this._statesList(Z.domains):Se,Ae=Array.isArray(K[Z.key])?[...K[Z.key]]:K[Z.key]?[K[Z.key]]:[],se=ee=>{let J=document.createElement("div");Object.assign(J.style,{padding:"6px 10px",margin:"4px 0",border:"1px solid var(--divider-color)",borderRadius:"10px",cursor:"pointer",display:"flex",alignItems:"center",gap:"8px",background:""});let L=document.createElement("ha-icon");L.setAttribute("icon","mdi:checkbox-blank-outline"),L.style.setProperty("--mdc-icon-size","18px");let W=document.createElement("span");W.textContent=ee,W.style.whiteSpace="nowrap",W.style.overflow="hidden",W.style.textOverflow="ellipsis",J.append(L,W);let te=()=>{let oe=Ae.includes(ee);J.style.background=oe?"rgba(3,169,244,.12)":"",J.style.borderColor=oe?"var(--primary-color)":"var(--divider-color)",L.setAttribute("icon",oe?"mdi:checkbox-marked":"mdi:checkbox-blank-outline")};return te(),J.addEventListener("click",()=>{let oe=Ae.indexOf(ee);oe>=0?Ae.splice(oe,1):Ae.push(ee),ae=this._shapeBySchema(j,{...ae,[Z.key]:[...Ae]}),mt(ae),Ce==null||Ce.setValue(ae),te()}),J},ne=Be;this._createVirtualList({container:Ee,items:ne,rowHeight:36,renderRow:se}),ve.addEventListener("input",()=>{let ee=ve.value.trim().toLowerCase();ne=Be.filter(J=>!ee||J.toLowerCase().includes(ee)),this._createVirtualList({container:Ee,items:ne,rowHeight:36,renderRow:se})}),Pe.append(ve,Ee),Me.append(U,Pe),ae=this._shapeBySchema(j,{...K,[Z.key]:Ae})}if(Z.type==="entity"){let Pe=document.createElement("div");Pe.style.flex="1",Pe.style.position="relative";let ve=document.createElement("input");ve.setAttribute("list","ddc_entlist_"+Z.key),Object.assign(ve.style,{width:"100%",padding:"8px 10px 8px 36px",borderRadius:"10px",border:"1px solid var(--divider-color)"}),ve.placeholder=`Select ${((Qe=Z.label)==null?void 0:Qe.toLowerCase())||"entity"}\u2026`;let Ee=document.createElement("ha-icon");Ee.setAttribute("icon","mdi:magnify"),Object.assign(Ee.style,{position:"absolute",left:"10px",top:"8px",width:"18px",height:"18px","--mdc-icon-size":"18px",opacity:".7"});let Be=document.createElement("datalist");Be.id="ddc_entlist_"+Z.key;let Ae=Z.domains&&Z.domains.length?this._statesList(Z.domains):Object.keys(((Ve=this.hass)==null?void 0:Ve.states)||{});Be.innerHTML=Ae.map(se=>`<option value="${se}">`).join(""),ve.value=Array.isArray(K[Z.key])?K[Z.key][0]||"":K[Z.key]||"",ve.addEventListener("change",async()=>{ae=this._shapeBySchema(j,{...ae,[Z.key]:ve.value||void 0}),mt(ae),Ce==null||Ce.setValue(ae)}),Pe.append(Ee,ve,Be),Me.append(U,Pe)}if(Z.type==="number"){let Pe=document.createElement("div");Pe.style.flex="1",Pe.style.position="relative";let ve=document.createElement("input");ve.type="number",Z.step&&(ve.step=Z.step),Object.assign(ve.style,{width:"100%",padding:"8px 10px 8px 36px",borderRadius:"10px",border:"1px solid var(--divider-color)"});let Ee=document.createElement("ha-icon");Ee.setAttribute("icon","mdi:counter"),Object.assign(Ee.style,{position:"absolute",left:"10px",top:"8px","--mdc-icon-size":"18px",width:"18px",height:"18px",opacity:".7"}),ve.value=(je=(nt=K[Z.key])!=null?nt:Z.default)!=null?je:"",ve.addEventListener("input",async()=>{let Be=ve.value===""?void 0:Number(ve.value);ae=this._shapeBySchema(j,{...ae,[Z.key]:isNaN(Be)?void 0:Be}),mt(ae),Ce==null||Ce.setValue(ae)}),Pe.append(Ee,ve),Me.append(U,Pe)}if(Z.type==="select"){let Pe=document.createElement("div");Pe.style.flex="1",Pe.style.position="relative";let ve=document.createElement("select");Object.assign(ve.style,{width:"100%",padding:"8px 10px 8px 36px",borderRadius:"10px",border:"1px solid var(--divider-color)"});let Ee=document.createElement("ha-icon");Ee.setAttribute("icon","mdi:format-list-bulleted"),Object.assign(Ee.style,{position:"absolute",left:"10px",top:"8px","--mdc-icon-size":"18px",width:"18px",height:"18px",opacity:".7"}),(Z.options||[]).forEach(Be=>{let Ae=document.createElement("option");Ae.value=Be,ve.appendChild(Ae)}),ve.value=(tt=(rt=K[Z.key])!=null?rt:Z.default)!=null?tt:((et=Z.options)==null?void 0:et[0])||"",ve.addEventListener("change",async()=>{ae=this._shapeBySchema(j,{...ae,[Z.key]:ve.value}),mt(ae),Ce==null||Ce.setValue(ae)}),Pe.append(Ee,ve),Me.append(U,Pe)}if(Z.type==="text"){let Pe=document.createElement("div");Pe.style.flex="1",Pe.style.position="relative";let ve=document.createElement("input");ve.type="text",Object.assign(ve.style,{width:"100%",padding:"8px 10px 8px 36px",borderRadius:"10px",border:"1px solid var(--divider-color)"});let Ee=document.createElement("ha-icon");Ee.setAttribute("icon","mdi:text"),Object.assign(Ee.style,{position:"absolute",left:"10px",top:"8px","--mdc-icon-size":"18px",width:"18px",height:"18px",opacity:".7"}),ve.value=(Ge=K[Z.key])!=null?Ge:"",ve.addEventListener("input",async()=>{ae=this._shapeBySchema(j,{...ae,[Z.key]:ve.value||void 0}),mt(ae),Ce==null||Ce.setValue(ae)}),Pe.append(Ee,ve),Me.append(U,Pe)}if(Z.type==="textarea"){let Pe=document.createElement("textarea");Object.assign(Pe.style,{flex:"1",minHeight:"120px",padding:"8px 10px",borderRadius:"10px",border:"1px solid var(--divider-color)"}),Pe.value=(Xe=K[Z.key])!=null?Xe:"",Pe.addEventListener("input",async()=>{ae=this._shapeBySchema(j,{...ae,[Z.key]:Pe.value||""}),mt(ae),Ce==null||Ce.setValue(ae)}),Me.append(U,Pe)}de.appendChild(Me)}),T.innerHTML="",T.appendChild(de)},xt=new WeakMap,Wt=j=>{if(!F)return;let K=Array.isArray(j==null?void 0:j.visibility)?j.visibility.map(ze=>({...ze})):[],ye=()=>Fe(ae),Se=()=>{var ze;K=K.filter(Y=>Y&&typeof Y=="object"&&Y.condition),ae={...ae,visibility:K};try{Ce==null||Ce.setValue(ae)}catch{}try{(ze=Le==null?void 0:Le.setConfig)==null||ze.call(Le,ae)}catch{}mt(ae)},de=()=>{if(F.innerHTML="",!K||!K.length){let Y=document.createElement("div");Y.style.opacity=".7",Y.style.fontSize=".9rem",Y.style.marginBottom="8px",Y.textContent="No conditions defined \u2013 this card is always visible.",F.appendChild(Y)}K.forEach((Y,Z)=>{let Me=document.createElement("div");Object.assign(Me.style,{display:"flex",flexDirection:"column",gap:"6px",marginBottom:"12px",border:"1px solid var(--divider-color)",borderRadius:"8px",padding:"8px"});let U=document.createElement("div");Object.assign(U.style,{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"4px"});let Qe=document.createElement("div");Qe.style.display="flex",Qe.style.alignItems="center",Qe.style.gap="6px";let Ve=document.createElement("ha-icon"),nt="mdi:filter",je=Y.condition||"state";je==="numeric_state"?nt="mdi:numeric":je==="screen"?nt="mdi:monitor":je==="user"?nt="mdi:account":je==="state"&&(nt="mdi:state-machine"),Ve.setAttribute("icon",nt);let rt=document.createElement("span");rt.style.fontWeight="bold",rt.style.textTransform="capitalize",rt.textContent=je==="numeric_state"?"Entity numeric state":je==="state"?"Entity state":je==="screen"?"Screen":"User",Qe.appendChild(Ve),Qe.appendChild(rt),U.appendChild(Qe);let et=document.createElement("button");et.setAttribute("title","Remove condition"),et.innerHTML='<ha-icon icon="mdi:trash-can-outline"></ha-icon>',Object.assign(et.style,{border:"none",background:"transparent",cursor:"pointer",padding:"4px",display:"inline-flex",alignItems:"center"}),et.style.position="relative",et.style.zIndex="1000",et.addEventListener("click",Be=>{Be.preventDefault(),Be.stopPropagation();let Ae=K.indexOf(Y);Ae>-1&&K.splice(Ae,1),ae.visibility=K,de(),Se()}),U.appendChild(et),Me.appendChild(U);let tt=document.createElement("div");tt.style.display="flex",tt.style.gap="8px";let Ge=document.createElement("label");Ge.textContent="Type",Ge.style.fontSize=".85rem",Ge.style.marginRight="4px";let Xe=document.createElement("select");["state","numeric_state","screen","user"].forEach(Be=>{let Ae=document.createElement("option");Ae.value=Be,Ae.textContent=Be.replace("_"," "),Xe.appendChild(Ae)}),Xe.value=je,Xe.addEventListener("change",()=>{Y.condition=Xe.value,delete Y.entity,delete Y.state,delete Y.state_not,delete Y.above,delete Y.below,delete Y.media_query,delete Y.users,de(),Se()}),tt.appendChild(Ge),tt.appendChild(Xe),Me.appendChild(tt);let Pe=document.createElement("div");Object.assign(Pe.style,{display:"flex",flexWrap:"wrap",gap:"8px",alignItems:"center"});let ve=(Be,Ae)=>{let se=document.createElement("div");se.style.display="flex",se.style.flexDirection="column",se.style.gap="4px",se.style.minWidth="150px";let ne=document.createElement("span");ne.textContent=Be,ne.style.fontSize=".75rem",se.appendChild(ne),se.appendChild(Ae),Pe.appendChild(se)};(()=>{var Be,Ae;if(Pe.innerHTML="",Y.condition==="state"){let se;customElements.get("ha-entity-picker")?(se=document.createElement("ha-entity-picker"),se.hass=this.hass,se.setAttribute("label","Select entity"),se.removeAttribute("hide-clear-icon"),se.value=Y.entity||"",se.addEventListener("value-changed",J=>{J.stopPropagation(),Y.entity=J.detail.value||"",Se()})):(se=document.createElement("input"),se.value=Y.entity||"",se.addEventListener("input",()=>{Y.entity=se.value.trim(),Se()}),Object.assign(se.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})),ve("Entity",se);let ne;if(customElements.get("ha-select")){ne=document.createElement("ha-select");let J=document.createElement("mwc-list-item");J.setAttribute("value","state"),J.textContent="State is equal to";let L=document.createElement("mwc-list-item");L.setAttribute("value","state_not"),L.textContent="State is not equal to",ne.appendChild(J),ne.appendChild(L),ne.value=Y.state_not!=null?"state_not":"state",ne.addEventListener("selected",W=>{W.stopPropagation();let te=Y.state_not!=null?Y.state_not:Y.state;ne.value==="state_not"?(Y.state_not=te,delete Y.state):(Y.state=te,delete Y.state_not),Se()})}else ne=document.createElement("select"),ne.innerHTML='<option value="state">State is equal to</option><option value="state_not">State is not equal to</option>',ne.value=Y.state_not!=null?"state_not":"state",Object.assign(ne.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),ne.addEventListener("change",J=>{J.stopPropagation();let L=Y.state_not!=null?Y.state_not:Y.state;ne.value==="state_not"?(Y.state_not=L,delete Y.state):(Y.state=L,delete Y.state_not),Se()});ve("Match type",ne);let ee;customElements.get("ha-textfield")?(ee=document.createElement("ha-textfield"),ee.value=(Y.state_not!=null?Y.state_not:Y.state)||"",ee.setAttribute("label",""),ee.addEventListener("input",J=>{J.stopPropagation();let L=ne.value;Y[L]=ee.value;let W=L==="state"?"state_not":"state";delete Y[W],Se()})):(ee=document.createElement("input"),ee.value=(Y.state_not!=null?Y.state_not:Y.state)||"",Object.assign(ee.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),ee.addEventListener("input",J=>{J.stopPropagation();let L=ne.value;Y[L]=ee.value;let W=L==="state"?"state_not":"state";delete Y[W],Se()})),ve("State",ee)}else if(Y.condition==="numeric_state"){let se;customElements.get("ha-entity-picker")?(se=document.createElement("ha-entity-picker"),se.hass=this.hass,se.setAttribute("label","Select entity"),se.removeAttribute("hide-clear-icon"),se.value=Y.entity||"",se.addEventListener("value-changed",J=>{J.stopPropagation(),Y.entity=J.detail.value||"",Se()})):(se=document.createElement("input"),se.value=Y.entity||"",se.addEventListener("input",()=>{Y.entity=se.value.trim(),Se()}),Object.assign(se.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})),ve("Entity",se);let ne;customElements.get("ha-textfield")?(ne=document.createElement("ha-textfield"),ne.setAttribute("type","number"),ne.value=Y.above!=null?Y.above:"",ne.addEventListener("input",J=>{J.stopPropagation();let L=ne.value;L===""||isNaN(Number(L))?delete Y.above:Y.above=Number(L),Se()})):(ne=document.createElement("input"),ne.type="number",ne.value=Y.above!=null?Y.above:"",Object.assign(ne.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),ne.addEventListener("input",()=>{let J=ne.value;J===""||isNaN(Number(J))?delete Y.above:Y.above=Number(J),Se()})),ve("Above",ne);let ee;customElements.get("ha-textfield")?(ee=document.createElement("ha-textfield"),ee.setAttribute("type","number"),ee.value=Y.below!=null?Y.below:"",ee.addEventListener("input",J=>{J.stopPropagation();let L=ee.value;L===""||isNaN(Number(L))?delete Y.below:Y.below=Number(L),Se()})):(ee=document.createElement("input"),ee.type="number",ee.value=Y.below!=null?Y.below:"",Object.assign(ee.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),ee.addEventListener("input",()=>{let J=ee.value;J===""||isNaN(Number(J))?delete Y.below:Y.below=Number(J),Se()})),ve("Below",ee)}else if(Y.condition==="screen"){let se=document.createElement("select"),ne=[{label:"Custom",value:""},{label:"Mobile (max-width: 599px)",value:"(max-width: 599px)"},{label:"Tablet (600px - 991px)",value:"(min-width: 600px) and (max-width: 991px)"},{label:"Desktop (min-width: 992px)",value:"(min-width: 992px)"}];if(ne.forEach(ee=>{let J=document.createElement("option");J.value=ee.value,J.textContent=ee.label,se.appendChild(J)}),se.value=(Ae=(Be=ne.find(ee=>ee.value===(Y.media_query||"")))==null?void 0:Be.value)!=null?Ae:"",se.addEventListener("change",()=>{Y.media_query=se.value,Se()}),ve("Screen size",se),se.value===""){let ee=document.createElement("input");ee.placeholder="e.g. (min-width: 1280px)",ee.value=Y.media_query||"",ee.addEventListener("input",()=>{Y.media_query=ee.value,Se()}),ve("Custom query",ee)}}else if(Y.condition==="user"){let se;customElements.get("ha-user-picker")?(se=document.createElement("ha-user-picker"),se.hass=this.hass,se.value=Array.isArray(Y.users)?Y.users:[],se.addEventListener("value-changed",ne=>{Y.users=Array.isArray(ne.detail.value)?ne.detail.value:[ne.detail.value],Se()})):(se=document.createElement("input"),se.value=Array.isArray(Y.users)?Y.users.join(","):"",se.addEventListener("input",()=>{Y.users=se.value.split(",").map(ne=>ne.trim()).filter(Boolean),Se()})),ve("Users",se)}})(),Me.appendChild(Pe),F.appendChild(Me)});let ze=document.createElement("button");ze.className="btn",ze.innerHTML='<ha-icon icon="mdi:plus"></ha-icon><span style="margin-left:6px">Add condition</span>',Object.assign(ze.style,{marginTop:"8px"}),ze.addEventListener("click",()=>{K.push({condition:"state",entity:"",state:""}),ae.visibility=K,de(),Se()}),F.appendChild(ze)};de()},Fe=j=>{if(!F)return;let K=Array.isArray(j==null?void 0:j.visibility)?j.visibility:[],ye=null,Se=async()=>{if(ye)return ye;try{if(this.hass&&typeof this.hass.callWS=="function")try{let Z=await this.hass.callWS({type:"config/auth/list"});if(Array.isArray(Z))return ye=Z,Z}catch{}if(this.hass&&typeof this.hass.callApi=="function")try{let Z=await this.hass.callApi("get","users");if(Array.isArray(Z))return ye=Z,Z}catch{}let Y=[];if(this.hass&&this.hass.users&&Array.isArray(this.hass.users)&&Y.push(...this.hass.users),this.hass&&this.hass.userData&&Array.isArray(this.hass.userData.users)&&Y.push(...this.hass.userData.users),this.hass&&this.hass.authorizedUsers&&Array.isArray(this.hass.authorizedUsers)&&Y.push(...this.hass.authorizedUsers),Y.length){let Z=new Map;Y.forEach(U=>{let Qe=U.id||U.user_id||U.uid||U.name||"";Z.has(Qe)||Z.set(Qe,U)});let Me=Array.from(Z.values());return ye=Me,Me}}catch{}return ye=[],[]},de=()=>{var Y;K=K.filter(Z=>Z&&typeof Z=="object"&&Z.condition),ae.visibility=K;try{Ce==null||Ce.setValue(ae)}catch{}try{(Y=Le==null?void 0:Le.setConfig)==null||Y.call(Le,ae)}catch{}mt(ae)},ze=()=>{F.innerHTML="";let Y=document.createElement("div");Y.style.opacity=".75",Y.style.fontSize=".85rem",Y.style.marginBottom="12px",Y.textContent="The card will be shown when ALL conditions below are fulfilled. If no conditions are set, the card will always be shown.",F.appendChild(Y);let Z=(U,Qe)=>{U.forEach((je,rt)=>{Me(je,U,rt,Qe)});let Ve=document.createElement("div");Ve.style.marginTop="8px";let nt=document.createElement("button");nt.className="btn",nt.innerHTML='<ha-icon icon="mdi:plus"></ha-icon><span style="margin-left:6px">Add condition</span>',Object.assign(nt.style,{display:"flex",alignItems:"center",gap:"6px",padding:"6px 12px",border:"none",borderRadius:"20px",background:"var(--primary-color)",color:"var(--text-primary-color, #fff)",cursor:"pointer",fontWeight:"500"}),nt.addEventListener("click",je=>{je.stopPropagation();let rt=Ve.querySelector(".add-menu");if(rt){rt.remove();return}let et=document.createElement("div");et.className="add-menu",Object.assign(et.style,{position:"relative",marginTop:"4px",border:"1px solid var(--divider-color)",borderRadius:"8px",background:"var(--card-background-color, var(--secondary-background-color))",boxShadow:"0 2px 4px rgba(0,0,0,0.2)"}),[{type:"numeric_state",label:"Entity numeric state",icon:"mdi:numeric"},{type:"state",label:"Entity state",icon:"mdi:state-machine"},{type:"screen",label:"Screen",icon:"mdi:monitor"},{type:"user",label:"User",icon:"mdi:account"},{type:"and",label:"And",icon:"mdi:logic-and"},{type:"or",label:"Or",icon:"mdi:logic-or"}].forEach(Ge=>{let Xe=document.createElement("div");Xe.style.display="flex",Xe.style.alignItems="center",Xe.style.gap="8px",Xe.style.padding="6px 12px",Xe.style.cursor="pointer",Xe.addEventListener("mouseenter",()=>Xe.style.background="var(--hover-color, #444)"),Xe.addEventListener("mouseleave",()=>Xe.style.background=""),Xe.addEventListener("click",()=>{et.remove();let Ee;Ge.type==="and"||Ge.type==="or"?Ee={condition:Ge.type,conditions:[]}:Ge.type==="state"?Ee={condition:"state",entity:"",state:""}:Ge.type==="numeric_state"?Ee={condition:"numeric_state",entity:""}:Ge.type==="screen"?Ee={condition:"screen",media_query:""}:Ge.type==="user"&&(Ee={condition:"user",users:[]}),U.push(Ee),xt.set(Ee,!0),de(),ze()});let Pe=document.createElement("ha-icon");Pe.setAttribute("icon",Ge.icon),Xe.appendChild(Pe);let ve=document.createElement("span");ve.textContent=Ge.label,Xe.appendChild(ve),et.appendChild(Xe)}),Ve.appendChild(et)}),Ve.appendChild(nt),Qe.appendChild(Ve)},Me=(U,Qe,Ve,nt)=>{let je=U.condition||"state",rt=xt.get(U);rt===void 0&&(rt=K.length===1);let et=document.createElement("div");Object.assign(et.style,{display:"flex",flexDirection:"column",border:"1px solid var(--divider-color)",borderLeft:"3px solid var(--primary-color)",borderRadius:"12px",padding:"16px",marginBottom:"20px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",boxShadow:"var(--ha-card-box-shadow, 0 2px 6px rgba(0, 0, 0, 0.15))"});let tt=document.createElement("div");tt.style.display="flex",tt.style.alignItems="center",tt.style.justifyContent="space-between",tt.style.marginBottom="8px",tt.style.borderBottom="1px solid var(--divider-color)",tt.style.paddingBottom="4px",tt.style.position="relative";let Ge=document.createElement("div");Ge.style.display="flex",Ge.style.alignItems="center",Ge.style.gap="6px";let Xe=document.createElement("button");Xe.innerHTML=`<ha-icon icon="${rt?"mdi:chevron-down":"mdi:chevron-right"}"></ha-icon>`,Object.assign(Xe.style,{border:"none",background:"transparent",cursor:"pointer",padding:"4px",display:"inline-flex",alignItems:"center"}),Xe.addEventListener("click",Ae=>{Ae.stopPropagation(),xt.set(U,!rt),ze()}),Ge.appendChild(Xe);let Pe=document.createElement("ha-icon"),ve="mdi:filter";je==="numeric_state"?ve="mdi:numeric":je==="screen"?ve="mdi:monitor":je==="user"?ve="mdi:account":je==="state"?ve="mdi:state-machine":je==="and"?ve="mdi:logic-and":je==="or"&&(ve="mdi:logic-or"),Pe.setAttribute("icon",ve),Ge.appendChild(Pe);let Ee=document.createElement("span");Ee.style.fontWeight="600",Ee.style.fontSize="0.95rem",Ee.style.textTransform="capitalize",Ee.textContent=je==="numeric_state"?"Entity numeric state":je==="state"?"Entity state":je==="screen"?"Screen":je==="user"?"User":je==="and"?"And":"Or",Ge.appendChild(Ee),tt.appendChild(Ge);let Be=document.createElement("button");if(Be.setAttribute("title","Remove condition"),Be.innerHTML='<ha-icon icon="mdi:trash-can-outline"></ha-icon>',Object.assign(Be.style,{border:"none",background:"transparent",cursor:"pointer",padding:"4px",display:"inline-flex",alignItems:"center"}),Be.style.position="relative",Be.style.zIndex="1000",Be.addEventListener("click",Ae=>{Ae.preventDefault(),Ae.stopPropagation();let se=Qe.indexOf(U);se>-1&&Qe.splice(se,1),de(),ze()}),tt.appendChild(Be),et.appendChild(tt),je!=="and"&&je!=="or"){if(rt){let Ae=document.createElement("div");Object.assign(Ae.style,{display:"flex",flexDirection:"column",gap:"14px",alignItems:"stretch"});let se=(ne,ee)=>{let J=document.createElement("div");J.style.display="flex",J.style.flexDirection="column",J.style.gap="4px";let L=document.createElement("span");L.textContent=ne,L.style.fontSize=".75rem",J.appendChild(L),J.appendChild(ee),Ae.appendChild(J);let W=(ee.tagName||"").toLowerCase();(W==="input"||W==="select")&&Object.assign(ee.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})};if(U.condition==="state"){let ne=document.createElement("ha-entity-picker");ne.value=U.entity||"",ne.hass=this.hass,ne.setAttribute("label","Select entity"),ne.addEventListener("value-changed",L=>{U.entity=L.detail.value||"",de()}),customElements.get("ha-entity-picker")||customElements.whenDefined("ha-entity-picker").then(()=>{ze()}).catch(()=>{}),se("Entity",ne);let ee;if(customElements.get("ha-select")){ee=document.createElement("ha-select");let L=document.createElement("mwc-list-item");L.setAttribute("value","state"),L.textContent="State is equal to";let W=document.createElement("mwc-list-item");W.setAttribute("value","state_not"),W.textContent="State is not equal to",ee.appendChild(L),ee.appendChild(W),ee.value=U.state_not!=null?"state_not":"state",ee.addEventListener("selected",te=>{te.stopPropagation();let oe=U.state_not!=null?U.state_not:U.state;ee.value==="state_not"?(U.state_not=oe,delete U.state):(U.state=oe,delete U.state_not),de()})}else ee=document.createElement("select"),ee.innerHTML='<option value="state">State is equal to</option><option value="state_not">State is not equal to</option>',ee.value=U.state_not!=null?"state_not":"state",ee.addEventListener("change",L=>{L.stopPropagation();let W=U.state_not!=null?U.state_not:U.state;ee.value==="state_not"?(U.state_not=W,delete U.state):(U.state=W,delete U.state_not),de()}),Object.assign(ee.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"});se("Match type",ee);let J;customElements.get("ha-textfield")?(J=document.createElement("ha-textfield"),J.value=(U.state_not!=null?U.state_not:U.state)||"",J.setAttribute("label",""),J.addEventListener("input",L=>{L.stopPropagation();let W=ee.value;U[W]=J.value;let te=W==="state"?"state_not":"state";delete U[te],de()})):(J=document.createElement("input"),J.value=(U.state_not!=null?U.state_not:U.state)||"",Object.assign(J.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),J.addEventListener("input",L=>{L.stopPropagation();let W=ee.value;U[W]=J.value;let te=W==="state"?"state_not":"state";delete U[te],de()})),se("State",J)}else if(U.condition==="numeric_state"){let ne=document.createElement("ha-entity-picker");ne.value=U.entity||"",ne.hass=this.hass,ne.setAttribute("label","Select entity"),ne.removeAttribute("hide-clear-icon"),ne.addEventListener("value-changed",L=>{U.entity=L.detail.value||"",de()}),customElements.get("ha-entity-picker")||customElements.whenDefined("ha-entity-picker").then(()=>{ze()}).catch(()=>{}),se("Entity",ne);let ee;customElements.get("ha-textfield")?(ee=document.createElement("ha-textfield"),ee.setAttribute("type","number"),ee.value=U.above!=null?U.above:"",ee.addEventListener("input",L=>{L.stopPropagation();let W=ee.value;W===""||isNaN(Number(W))?delete U.above:U.above=Number(W),de()})):(ee=document.createElement("input"),ee.type="number",ee.value=U.above!=null?U.above:"",Object.assign(ee.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),ee.addEventListener("input",()=>{let L=ee.value;L===""||isNaN(Number(L))?delete U.above:U.above=Number(L),de()})),se("Above",ee);let J;customElements.get("ha-textfield")?(J=document.createElement("ha-textfield"),J.setAttribute("type","number"),J.value=U.below!=null?U.below:"",J.addEventListener("input",L=>{L.stopPropagation();let W=J.value;W===""||isNaN(Number(W))?delete U.below:U.below=Number(W),de()})):(J=document.createElement("input"),J.type="number",J.value=U.below!=null?U.below:"",Object.assign(J.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),J.addEventListener("input",()=>{let L=J.value;L===""||isNaN(Number(L))?delete U.below:U.below=Number(L),de()})),se("Below",J)}else if(U.condition==="screen"){let ne=[{label:"Mobile",query:"(max-width: 599px)"},{label:"Tablet (min: 768px)",query:"(min-width: 768px)"},{label:"Desktop (min: 1024px)",query:"(min-width: 1024px)"},{label:"Wide (min: 1280px)",query:"(min-width: 1280px)"}];Array.isArray(U.media_query_list)||(U.media_query_list=[]);let ee=document.createElement("div");ee.style.display="flex",ee.style.flexDirection="column",ee.style.gap="4px",ne.forEach(J=>{let L=document.createElement("label");L.style.display="flex",L.style.alignItems="center",L.style.gap="6px";let W=document.createElement("input");W.type="checkbox",W.checked=U.media_query_list.includes(J.query),W.addEventListener("change",()=>{W.checked?U.media_query_list.push(J.query):U.media_query_list=U.media_query_list.filter(oe=>oe!==J.query),U.media_query=U.media_query_list.join(","),de()});let te=document.createElement("span");te.textContent=J.label,L.appendChild(W),L.appendChild(te),ee.appendChild(L)}),se("Screen sizes",ee)}else if(U.condition==="user"){let ne;if(customElements.get("ha-user-picker"))ne=document.createElement("ha-user-picker"),ne.hass=this.hass,ne.setAttribute("label","Select user"),ne.value=Array.isArray(U.users)?U.users:[],ne.addEventListener("value-changed",ee=>{let J=ee.detail.value;U.users=Array.isArray(J)?J:[J],de()});else{ne=document.createElement("div"),ne.style.display="flex",ne.style.flexDirection="column",ne.style.gap="4px";let ee=document.createElement("span");ee.style.opacity="0.7",ee.style.fontSize=".85rem",ee.textContent="Loading users\u2026",ne.appendChild(ee);let J=Array.isArray(U.users)?U.users:[];Se().then(L=>{if(ne.innerHTML="",Array.isArray(L)&&L.length)L.forEach(W=>{let te=W.id||W.user_id||W.uid||W.name||"",oe=W.name||te,ke=document.createElement("label");ke.style.display="flex",ke.style.alignItems="center",ke.style.gap="6px",ke.style.padding="4px 0";let ue=document.createElement("input");ue.type="checkbox",ue.checked=J.includes(te)||J.includes(oe),ue.addEventListener("change",()=>{let qe=Array.isArray(U.users)?U.users.slice():[];ue.checked?qe.includes(te)||qe.push(te):qe=qe.filter(We=>We!==te&&We!==oe),U.users=qe,de()});let be=document.createElement("span");be.textContent=oe,ke.appendChild(ue),ke.appendChild(be),ne.appendChild(ke)});else{let W=document.createElement("input");W.value=Array.isArray(U.users)?U.users.join(","):"",Object.assign(W.style,{padding:"6px 10px",borderRadius:"6px",border:"1px solid var(--divider-color)",background:"var(--card-background-color, var(--secondary-background-color))",color:"var(--primary-text-color, inherit)"});let te=()=>{U.users=W.value.split(",").map(oe=>oe.trim()).filter(Boolean),de()};W.addEventListener("change",te),W.addEventListener("blur",te),ne.appendChild(W)}})}se("Users",ne)}et.appendChild(Ae)}}else if(rt){Array.isArray(U.conditions)||(U.conditions=[]);let Ae=document.createElement("div");Ae.style.marginLeft="16px",Z(U.conditions,Ae),et.appendChild(Ae)}nt.appendChild(et)};Z(K,F)};ze()},mt=j=>{if(((j==null?void 0:j.type)||"")==="custom_card"){lt=JSON.stringify(j||{}),w.innerHTML='<div style="opacity:.6;font-size:.9rem;padding:8px">Preview not available for the custom card placeholder. Use the YAML editor.</div>',H.hidden=!0;return}let K=JSON.stringify(j||{});K!==lt&&(lt=K,Bt&&clearTimeout(Bt),Bt=setTimeout(async()=>{let ye=++gt;H.hidden=!1,w.innerHTML="",await In();try{let Se=await this._helpersPromise||await window.loadCardHelpers();if(ye!==gt)return;let de=Se.createCardElement(j);if(de.hass=this.hass,ye!==gt)return;w.appendChild(de)}catch{}finally{ye===gt&&(H.hidden=!0)}},150))},Tt=async j=>{var Se;let K=++gt;_.hidden=!1,S.innerHTML="",await lc();let ye=j.type||$e;if(ft=await this._getEditorElementForType(ye,j),ye==="custom_card"){let de=document.createElement("div");return de.style.opacity=".7",de.style.fontSize=".9rem",de.textContent="Custom card placeholder: use the YAML editor to paste the card type and options.",S.appendChild(de),Le=null,st!=="yaml"&&re("yaml"),Q(!0),_.hidden=!0,!1}if(!ft){let de=document.createElement("div");return de.style.opacity=".7",de.style.fontSize=".9rem",de.textContent="This card does not support a visual editor. Please use the YAML tab to configure it.",K===gt&&(S.appendChild(de),_.hidden=!0),Le=null,Q(!0),st!=="visual"&&re("yaml"),!1}try{ft.hass=this.hass,ft.isConnected||S.appendChild(ft),await Promise.resolve();try{ft.setConfig(j)}catch{}try{let ze=await this._helpersPromise||await window.loadCardHelpers(),Y=ze.getCardElementClass?await ze.getCardElementClass(j.type||$e):null;if(Y!=null&&Y.getStubConfig){let Z=Object.keys(((Se=this.hass)==null?void 0:Se.states)||{}),Me=Qe=>Z.filter(Ve=>Ve.startsWith(Qe+".")),U=await Y.getStubConfig(this.hass,Z,Me);U&&(j=this._shapeBySchema(j.type||$e,{...U}))}}catch{}await Promise.resolve();try{ft.setConfig(j)}catch{}Le&&this.__onEditorChange&&(Le.removeEventListener("config-changed",this.__onEditorChange),Le.removeEventListener("value-changed",this.__onEditorChange));let de=async ze=>{var Me,U,Qe;let Y=(Qe=(Me=ze.detail)==null?void 0:Me.config)!=null?Qe:(U=ze.detail)==null?void 0:U.value;if(!Y)return;let Z=Y.type||$e;$e=Z,ae=this._shapeBySchema(Z,Y),B(""),Q(!0),At($e,ae),mt(ae),Ce==null||Ce.setValue(ae)};return this.__onEditorChange=de,ft.addEventListener("config-changed",de),ft.addEventListener("value-changed",de),Le=ft,st!=="yaml"&&re("visual"),Q(!0),!0}finally{K===gt&&(_.hidden=!0)}},ii=async j=>{Ce=await this._mountYamlEditor(R,j,async K=>{var ye,Se;try{let de=(K==null?void 0:K.type)||$e,ze=this._shapeBySchema(de,K||{}),Y=de!==$e;if($e=de,ae=ze,C.hidden=!0,C.textContent="",Q(!0),Y){if(At($e,ae),Le){try{(ye=Le.setConfig)==null||ye.call(Le,ae)}catch{}st!=="yaml"&&re("visual")}try{Fe(ae)}catch{}}else{try{(Se=Le==null?void 0:Le.setConfig)==null||Se.call(Le,ae)}catch{}mt(ae);try{Fe(ae)}catch{}}}catch(de){C.hidden=!1,C.textContent=`Invalid config: ${String((de==null?void 0:de.message)||de)}`,Q(!1)}},K=>{C.hidden=!1,C.textContent=`Invalid YAML: ${String((K==null?void 0:K.message)||K)}`,Q(!1)})},Ot=async j=>{if(this.__stubCache.has(j))return{...this.__stubCache.get(j)};let K=await this._getStubConfigForType(j);return this.__stubCache.set(j,{...K}),{...K}},yt=async j=>{C.hidden=!0,C.textContent="",B(""),$e=j;try{typeof ot=="function"&&ot(j)}catch{}let K=t==="edit"&&r&&r.type===j?{...r}:await Ot(j);ae=this._shapeBySchema(j,K),Le=null,At(j,ae),await ii(ae),await In(),mt(ae);try{Fe(ae)}catch{}try{let ye=await Tt(ae);re(ye?"visual":"yaml")}catch{re("yaml")}Q(!0)},It=async()=>{if(!ae)return;let j=this._shapeBySchema($e,ae);t==="edit"&&typeof o=="function"?await o(j):(await this._addPickedCardToLayout(j),this._pushRecent((j||{}).type)),c()};v.addEventListener("click",c),m.addEventListener("click",c),u.addEventListener("click",It),f.addEventListener("click",It),s.addEventListener("keydown",j=>{j.key==="Escape"&&c(),j.key==="Enter"&&!u.disabled&&It()});let Mt=null;y.addEventListener("input",()=>{Mt&&clearTimeout(Mt),Mt=setTimeout(ct,120)}),ct(),t==="edit"&&r?(await yt(r.type||"entities"),Q(!0)):(await yt((()=>{var ye;return(((ye=this._getRecent)==null?void 0:ye.call(this))||[]).find(Boolean)||"entities"})()),Q(!0))}async _getStubConfigForType(t){var v;let r=await this._helpersPromise||await window.loadCardHelpers(),o=null;if(t==="custom_card")return null;try{r.getCardElementClass&&(o=await r.getCardElementClass(t))}catch{}let c=Object.keys(((v=this.hass)==null?void 0:v.states)||{}),s=m=>c.filter(y=>y.startsWith(m+".")),l={type:t};if(o!=null&&o.getStubConfig)try{let m=await o.getStubConfig(this.hass,c,s);if(t!=="entity")return m;m&&typeof m=="object"&&(l={...l,...m})}catch{}let u=c[0],f=s("sensor")[0]||u;if(["entity","sensor","button","gauge","tile","light","thermostat","media-control","alarm-panel","picture-entity","weather-forecast","map"].includes(t)){let m={sensor:f,gauge:s("sensor").find(this._isNumericEntity.bind(this))||f,"media-control":s("media_player")[0]||u,light:s("light")[0]||u,thermostat:s("climate")[0]||u,"alarm-panel":s("alarm_control_panel")[0]||u,"weather-forecast":s("weather")[0]||u,map:s("device_tracker")[0]||s("person")[0]||u}[t]||f||u;["entity","sensor","button","gauge","tile","light","thermostat","media-control","alarm-panel","picture-entity"].includes(t)?l.entity=m:t==="weather-forecast"?(l.entity=m,l.show_current=!0,l.show_forecast=!0,l.forecast_type="daily"):t==="map"&&(l.entities=[m].filter(Boolean),l.theme_mode="auto")}if(["entities","glance","picture-glance","history-graph","statistics-graph"].includes(t)){let m=y=>(y!=null&&y.length?c.filter(w=>y.includes(w.split(".")[0])):c).slice(0,3);t==="statistics-graph"?l.entities=m(["sensor","number","input_number"]):l.entities=m()}if(t==="markdown"&&(l.content="Markdown card"),t==="sensor"&&(l.graph="line"),t==="button"&&(l.show_name=!0,l.show_icon=!0),t==="tile"&&(l.features_position="bottom",l.vertical=!1),t==="picture-glance"&&(l.title=l.title||"Glance",l.image=l.image||"https://demo.home-assistant.io/stub_config/kitchen.png"),t==="picture-entity"&&(l.image=l.image||"https://demo.home-assistant.io/stub_config/bedroom.png"),t==="iframe"&&(l.url=l.url||"https://www.home-assistant.io",l.aspect_ratio=l.aspect_ratio||"50%"),t==="alarm-panel"&&(l.states=l.states||["arm_home","arm_away"]),t==="area")try{let m=this.hass&&this.hass.areas?Object.values(this.hass.areas):[];m.length?l.area=m[0].area_id||m[0].name||m[0].id:l.area=u?u.split(".")[0]:"default_area",l.display_type="picture",l.alert_classes=l.alert_classes||["moisture","motion"],l.sensor_classes=l.sensor_classes||["temperature","humidity"],l.features_position="bottom"}catch{}return l}_getNextAvailablePosition(){let t=Array.from(this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)")),r=new Set,o=this.gridSize;t.forEach(l=>{let u=parseFloat(l.getAttribute("data-x"))||0,f=parseFloat(l.getAttribute("data-y"))||0,v=parseFloat(getComputedStyle(l).width)||100,m=parseFloat(getComputedStyle(l).height)||100,y=Math.floor(u/o),w=Math.floor(f/o),S=Math.floor((u+v)/o),_=Math.floor((f+m)/o);for(let T=y;T<S;T++)for(let R=w;R<_;R++)r.add(`${T}-${R}`)});let c=0,s=0;for(;r.has(`${c}-${s}`);)c+=6,c>60&&(c=0,s+=6);return{x:c*o,y:s*o}}async _addPickedCardToLayout(t){this._hideEmptyPlaceholder();let r=await this._createCard(t),o=this._makeWrapper(r),c=this._getNextAvailablePosition();this._setCardPosition(o,c.x,c.y),o.style.width=`${14*this.gridSize}px`,o.style.height=`${10*this.gridSize}px`;{let s=this._highestZ()+1;o.style.zIndex=String(Math.max(s,6))}this.cardContainer.appendChild(o);try{this._rebuildOnce(o.firstElementChild)}catch{}this._initCardInteract(o),this._resizeContainer(),this._queueSave("add"),this._toast("Card added to layout."),this._syncEmptyStateUI();try{this._applyVisibility_()}catch{}}_toggleSelection(t,r=null){let o=r==null?!this._selection.has(t):!!r;o?this._selection.add(t):this._selection.delete(t),t.classList.toggle("selected",o)}_clearSelection(){for(let t of this._selection)t.classList.remove("selected");this._selection.clear()}_copySelection(){var t,r,o;try{let c=this._selection?Array.from(this._selection):[];if(!c.length){(t=this._toast)==null||t.call(this,"Nothing selected to copy.");return}let s=1/0,l=1/0,u=[];for(let f of c){if(f.dataset.placeholder)continue;let v=parseFloat(f.getAttribute("data-x"))||0,m=parseFloat(f.getAttribute("data-y"))||0;v<s&&(s=v),m<l&&(l=m)}for(let f of c){if(f.dataset.placeholder)continue;let v=this._extractCardConfig(f.firstElementChild)||{},m=parseFloat(f.getAttribute("data-x"))||0,y=parseFloat(f.getAttribute("data-y"))||0,w=f.style.width||`${f.getBoundingClientRect().width}px`,S=f.style.height||`${f.getBoundingClientRect().height}px`;u.push({cfg:v,dx:m-s,dy:y-l,width:w,height:S})}window.__DDC_CLIPBOARD__={items:u},(r=this._toast)==null||r.call(this,`Copied ${u.length} card${u.length===1?"":"s"}.`)}catch(c){console.warn("[drag-and-drop-card] Copy failed",c),(o=this._toast)==null||o.call(this,"Copy failed.")}}async _pasteClipboard(){var t,r,o,c;try{let s=window.__DDC_CLIPBOARD__;if(!s||!Array.isArray(s.items)||!s.items.length){(t=this._toast)==null||t.call(this,"Clipboard is empty.");return}let l=s.items,u=1,f;do{let y=this.gridSize*u,w=this.gridSize*u;f=l.map(S=>{let _=parseFloat(S.width)||0,T=parseFloat(S.height)||0;return{x:y+(S.dx||0),y:w+(S.dy||0),w:_,h:T}}),u+=1}while(this._anyCollisionFor(f,new Set));let v=this.gridSize*(u-1),m=this.gridSize*(u-1);for(let y of l){let w=y.cfg||{},S=await this._createCard(w),_=this._makeWrapper(S);_.style.width=y.width,_.style.height=y.height;let T=v+(y.dx||0),R=m+(y.dy||0);this._setCardPosition(_,T,R);{let C=this._highestZ()+1;_.style.zIndex=String(Math.max(C,6))}try{let C=this._normalizeTabId(this.activeTab||this.defaultTab);C&&(_.dataset.tabId=C)}catch{}this.cardContainer.appendChild(_);try{this._rebuildOnce(_.firstElementChild)}catch{}this._initCardInteract(_)}this._resizeContainer(),this._applyActiveTab(),(r=this._queueSave)==null||r.call(this,"paste"),(o=this._toast)==null||o.call(this,`Pasted ${l.length} card${l.length===1?"":"s"}.`)}catch(s){console.warn("[drag-and-drop-card] Paste failed",s),(c=this._toast)==null||c.call(this,"Paste failed.")}}_installSelectionMarquee(){let t=this.cardContainer,r=0,o=0,c=null,s=!1,l=y=>{let w=t.getBoundingClientRect(),S="touches"in y&&y.touches[0]?y.touches[0].clientX:y.clientX,_="touches"in y&&y.touches[0]?y.touches[0].clientY:y.clientY,T=this.__pointerScaleX||1,R=this.__pointerScaleY||1;return{x:(S-w.left)/T,y:(_-w.top)/R}},u=(y,w)=>{let S=Math.min(y,r),_=Math.max(y,r),T=Math.min(w,o),R=Math.max(w,o);c.style.left=`${S}px`,c.style.top=`${T}px`,c.style.width=`${_-S}px`,c.style.height=`${R-T}px`;let C=c.getBoundingClientRect(),O=t.querySelectorAll(".card-wrapper:not(.ddc-placeholder)");this._clearSelection(),O.forEach(z=>{let b=z.getBoundingClientRect();!(b.right<C.left||b.left>C.right||b.bottom<C.top||b.top>C.bottom)&&this._toggleSelection(z,!0)})},f=y=>{if(!this.editMode||y.target.closest(".card-wrapper"))return;s=!0;let w=l(y);r=w.x,o=w.y,c=document.createElement("div"),c.className="marquee",c.style.left=`${r}px`,c.style.top=`${o}px`,t.appendChild(c),y.preventDefault()},v=y=>{!s||!c||u(l(y).x,l(y).y)},m=()=>{s&&(s=!1,c&&c.remove(),c=null)};t.addEventListener("mousedown",f),window.addEventListener("mousemove",v),window.addEventListener("mouseup",m),t.addEventListener("touchstart",y=>{this.editMode&&(y.target.closest(".card-wrapper")||f(y))},{passive:!1}),window.addEventListener("touchmove",y=>{v(y)},{passive:!0}),window.addEventListener("touchend",m),window.addEventListener("touchcancel",m)}async _openDiagnostics(){var u,f;let t=document.createElement("div");t.className="modal";let r=this.storageKey||"(none)",o=this._backendOK&&!!this.storageKey,c=v=>v.slice(-200).map(m=>`<div style="font-family:monospace;font-size:.85rem;line-height:1.3">
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
                <div>Storage key (raw \u2192 slug)</div><div><code>${this._safe(((u=this._config)==null?void 0:u.storage_key)||"")}</code> \u2192 <code>${this._safe(r)}</code></div>
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
      </div>`;let s=()=>t.remove();t.querySelector("#closeDiag").addEventListener("click",s),this.shadowRoot.appendChild(t);let l=()=>{let v=t.querySelector("#logArea"),m=y=>y.slice(-200).map(w=>`<div style="font-family:monospace;font-size:.85rem;line-height:1.3">
          <span style="opacity:.6">${w.t}</span>
          <b style="margin-left:6px;color:#03a9f4">[${w.kind}]</b>
          <span style="margin-left:6px">${this._safe(w.msg)}</span>
          ${w.extra?`<pre style="margin:4px 0 0 0;white-space:pre-wrap;background:var(--card-background-color);border:1px solid var(--divider-color);border-radius:8px;padding:6px;max-height:160px;overflow:auto">${this._safe(JSON.stringify(w.extra,null,2))}</pre>`:""}
        </div>`).join("");v.innerHTML=m(this._dbgDump()),v.scrollTop=v.scrollHeight};t.querySelector("#refreshKeys").addEventListener("click",async()=>{try{this._dbgPush("probe","Manual refresh"),await this._probeBackend()}finally{l()}}),t.querySelector("#forceSave").addEventListener("click",async()=>{await this._saveLayout(!1),l()}),t.querySelector("#exportJson").addEventListener("click",()=>{let m=Array.from(this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)")).map(_=>{let T=parseFloat(_.getAttribute("data-x"))||0,R=parseFloat(_.getAttribute("data-y"))||0,C=parseFloat(_.style.width)||_.getBoundingClientRect().width,O=parseFloat(_.style.height)||_.getBoundingClientRect().height,z=parseInt(_.style.zIndex||"1",10),b=this._extractCardConfig(_.firstElementChild),M=_.dataset.tabId||this.defaultTab;return{card:b,position:{x:T,y:R},size:{width:C,height:O},z,tabId:M}}),y={version:2,options:this._exportableOptions(),cards:m},w=new Blob([JSON.stringify(y,null,2)],{type:"application/json"}),S=document.createElement("a");S.href=URL.createObjectURL(w),S.download=`ddc_${this.storageKey||"layout"}.json`,S.click(),URL.revokeObjectURL(S.href)}),t.querySelector("#importJson").addEventListener("click",async()=>{let v=document.createElement("input");v.type="file",v.accept="application/json",v.onchange=async()=>{var S,_,T,R,C,O,z,b,M,I,F,N,H;let m=(S=v.files)==null?void 0:S[0];if(!m)return;let y=await m.text();try{let Q=JSON.parse(y);if(this._dbgPush("import","Loaded file",{bytes:y.length}),this.cardContainer.innerHTML="",(_=Q.cards)!=null&&_.length)for(let B of Q.cards)if(!(B!=null&&B.card)||typeof B.card=="object"&&Object.keys(B.card).length===0){let V=this._makePlaceholderAt(((T=B.position)==null?void 0:T.x)||0,((R=B.position)==null?void 0:R.y)||0,((C=B.size)==null?void 0:C.width)||200,((O=B.size)==null?void 0:O.height)||200);this.cardContainer.appendChild(V)}else{let V=await this._createCard(B.card),$=this._makeWrapper(V);this._setCardPosition($,((z=B.position)==null?void 0:z.x)||0,((b=B.position)==null?void 0:b.y)||0),$.dataset.tabId=this._normalizeTabId(B.tabId||B.tab_id||this.defaultTab),this._setCardPosition($,((M=B.position)==null?void 0:M.x)||0,((I=B.position)==null?void 0:I.y)||0),$.style.width=`${((F=B.size)==null?void 0:F.width)||140}px`,$.style.height=`${((N=B.size)==null?void 0:N.height)||100}px`,this.cardContainer.appendChild($);try{this._rebuildOnce($.firstElementChild)}catch{}this._initCardInteract($)}else this._showEmptyPlaceholder(),(H=this._applyAutoScale)==null||H.call(this);this._resizeContainer(),await this._saveLayout(!1)}catch(Q){this._dbgPush("import","Parse failed",{error:String(Q)})}let w=new Event("ddc-logrefresh");window.dispatchEvent(w)},v.click()}),t.querySelector("#testRoundtrip").addEventListener("click",async()=>{if(!this._backendOK)return this._dbgPush("test","Backend not reachable, aborting"),l();let v=(this.storageKey||"ddc_test")+"_selftest",m={t:Date.now(),msg:"roundtrip"};try{await this._saveLayoutToBackend(v,m);let y=await this._loadLayoutFromBackend(v);this._dbgPush("test","Round-trip result",{wrote:m,read:y})}catch(y){this._dbgPush("test","Round-trip failed",{error:String(y)})}l()}),l()}_openDashboardSettings(){var U,Qe,Ve,nt,je,rt,et,tt,Ge,Xe,Pe,ve,Ee,Be,Ae,se,ne,ee,J;let t=document.createElement("div");t.className="modal",this._ensureSettingsStyles_(),t.innerHTML=`
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

`;let r=this.shadowRoot.querySelector(".modal");if(r){try{r.remove()}catch{}this.__settingsModal===r&&(this.__settingsModal=null)}if(this.__settingsModal){try{this.__settingsModal.remove()}catch{}this.__settingsModal=null}this.__settingsModal=t,this.shadowRoot.appendChild(t);let o=t.querySelector("#ddc-setting-autoResize"),c=t.querySelector("#ddc-setting-gridSize"),s=t.querySelector("#ddc-setting-animate"),l=t.querySelector("#ddc-setting-hideHdr"),u=t.querySelector("#ddc-setting-hideSbar"),f=t.querySelector("#ddc-setting-dragSnap"),v=t.querySelector("#ddc-setting-autoSave"),m=t.querySelector("#ddc-setting-autoSaveDebounce"),y=t.querySelector("#ddc-setting-sizeMode"),w=t.querySelector("#ddc-setting-orient"),S=t.querySelector("#ddc-setting-disableOverlap"),_=t.querySelector("#ddc-setting-editPin"),T=t.querySelector("#ddc-setting-containerBg"),R=t.querySelector("#ddc-setting-cardBg"),C=t.querySelector("#ddc-setting-cardShadow"),O=t.querySelector("#ddc-setting-bgImg"),z=t.querySelector("#ddc-bg-repeat"),b=t.querySelector("#ddc-bg-size"),M=t.querySelector("#ddc-bg-position"),I=t.querySelector("#ddc-bg-attachment"),F=t.querySelector("#ddc-bg-opacity"),N=t.querySelector("#ddc-bg-opacity-out"),H=t.querySelector("#ddc-setting-debug"),Q=t.querySelector("#ddc-setting-screenSaverEnabled"),B=t.querySelector("#ddc-setting-screenSaverDelay"),V=t.querySelector("#ddc-screenSaverDelayOut"),$=t.querySelector("#ddc-bg-mode"),le=t.querySelector('[data-bg-section="image"]'),_e=t.querySelector('[data-bg-section="particles"]'),Re=t.querySelector('[data-bg-section="youtube"]'),ge=t.querySelector("#ddc-particles-url"),fe=t.querySelector("#ddc-particles-pointer"),he=t.querySelector("#ddc-youtube-url"),He=t.querySelector("#ddc-youtube-start"),Ye=t.querySelector("#ddc-youtube-end"),Oe=t.querySelector("#ddc-youtube-mute"),Ue=t.querySelector("#ddc-youtube-loop"),ot=t.querySelector("#ddc-youtube-size"),st=t.querySelector("#ddc-youtube-position"),re=t.querySelector("#ddc-youtube-attachment"),ut=t.querySelector("#ddc-youtube-opacity"),ct=t.querySelector("#ddc-youtube-opacity-out"),Ie=((U=this._config)==null?void 0:U.background_image)||{},ae=((Qe=this._config)==null?void 0:Qe.background_mode)||((nt=(Ve=this._config)==null?void 0:Ve.background_image)!=null&&nt.src?"image":"none");$&&($.value=String(ae));let $e=((je=this._config)==null?void 0:je.background_particles)||{};ge&&(ge.value=$e.config_url||""),fe&&(fe.checked=!!$e.pointer_events);let Ce=((rt=this._config)==null?void 0:rt.background_youtube)||{},Le=Ce.url||Ce.video_id||"";if(he&&(he.value=Le),He&&(He.value=(et=Ce.start)!=null?et:""),Ye&&(Ye.value=(tt=Ce.end)!=null?tt:""),Oe&&(Oe.checked=Ce.mute!==!1),Ue&&(Ue.checked=Ce.loop!==!1),ot&&(ot.value=String(Ce.size||"cover")),st&&(st.value=String(Ce.position||"center")),re&&(re.value=String(Ce.attachment||"scroll")),ut){let L=Math.round((Ce.opacity!=null?Ce.opacity:1)*100);ut.value=String(L),ct&&(ct.textContent=L+"%"),ut.addEventListener("input",()=>{let W=Math.max(0,Math.min(100,parseInt(ut.value||"100",10)));ct&&(ct.textContent=W+"%")})}let ft=()=>{let L=($==null?void 0:$.value)||"none";le&&(le.style.display=L==="image"?"":"none"),_e&&(_e.style.display=L==="particles"?"":"none"),Re&&(Re.style.display=L==="youtube"?"":"none")};$==null||$.addEventListener("change",ft),ft();let gt=t.querySelector('[aria-labelledby="lbl-auto-resize"]'),Bt=()=>{let L=(y==null?void 0:y.value)||"dynamic";gt&&(gt.style.display=L==="dynamic"?"":"none")};if(Bt(),y==null||y.addEventListener("change",Bt),o&&(o.checked=!!this.autoResizeCards),c&&(c.value=String(this.gridSize||100)),s&&(s.checked=!!this.animateCards),l&&(l.checked=!!this.hideHaHeader),u&&(u.checked=!!this.hideHaSidebar),f&&(f.checked=!!this.dragLiveSnap),v&&(v.checked=!!this.autoSave),m&&(m.value=String((Ge=this.autoSaveDebounce)!=null?Ge:800)),y&&(y.value=String(this.containerSizeMode||"dynamic")),w&&(w.value=String(this.containerPresetOrient||"auto")),S&&(S.checked=!!this.disableOverlap),T&&(T.value=String(this.containerBackground||"")),R&&(R.value=String(this.cardBackground||"")),O){let L=((ve=(Xe=this._config)==null?void 0:Xe.background_image)!=null?ve:(Pe=this._config)==null?void 0:Pe.bg_image)||{};O.value=L.src?String(L.src):""}if(H&&(H.checked=!!this.debug),C&&(C.checked=!!this.cardShadowEnabled),z&&(z.value=String(Ie.repeat||"no-repeat")),b&&(b.value=String(Ie.size||"cover")),M&&(M.value=String(Ie.position||"center center")),I&&(I.value=String(Ie.attachment||"scroll")),F){let L=Math.round((Ie.opacity!=null?Ie.opacity:1)*100);F.value=String(L),N&&(N.textContent=`${L}%`),F.addEventListener("input",()=>{let W=Math.max(0,Math.min(100,parseInt(F.value||"100",10)));N.textContent=`${W}%`,this.style.setProperty("--ddc-bg-opacity",String(W/100))})}if(C&&C.addEventListener("change",()=>{try{C.checked?this.style.setProperty("--ddc-card-shadow","0 8px 24px rgba(0,0,0,.35)"):this.style.removeProperty("--ddc-card-shadow")}catch{}}),Q&&(Q.checked=!!this.screenSaverEnabled,Q.addEventListener("change",()=>{this.screenSaverEnabled=Q.checked,typeof this._updateScreensaverSettings=="function"&&this._updateScreensaverSettings()})),B){let L=this.screenSaverDelay!=null?Number(this.screenSaverDelay):3e5,W=Math.round(L/6e4);(!Number.isFinite(W)||W<1)&&(W=5),W>60&&(W=60),B.value=String(W),V&&(V.textContent=`${W} min`),B.addEventListener("input",()=>{let te=parseInt(B.value||"1",10),oe=Math.max(1,Math.min(60,isNaN(te)?1:te));V&&(V.textContent=`${oe} min`),this.screenSaverDelay=oe*6e4,typeof this._updateScreensaverSettings=="function"&&this._updateScreensaverSettings()})}try{if(_){let L=this.config&&this.config.edit_mode_pin!=null?String(this.config.edit_mode_pin):"",W=this.editModePin!=null?String(this.editModePin):"";_.value=W||L||"",_.disabled=!1,_.readOnly=!1}}catch{}let lt=t.querySelector("#ddc-setting-gridSize"),At=t.querySelector("#ddc-grid-out"),xt=t.querySelector("#ddc-grid-demo"),Wt=t.querySelector("#ddc-grid-meta"),Fe=t.querySelector("#ddc-setting-gridSizeInput"),mt=()=>{if(!xt||!Wt)return;let L=xt.getBoundingClientRect(),W=Math.max(1,parseInt(lt.value||"100",10)),te=Math.max(1,Math.floor(L.width/W)),oe=Math.max(1,Math.floor(L.height/W));Wt.innerHTML=`
        <ha-icon icon="mdi:grid"></ha-icon>
        <span>${W}px \xB7 ${te}\xD7${oe}</span>
      `},Tt=()=>{let L=Math.max(1,parseInt(lt.value||"100",10));At&&(At.textContent=`${L} px`),xt&&xt.style.setProperty("--g",`${L}px`),mt()};if(lt&&(lt.value||(lt.value=String(this.gridSize||100)),lt.addEventListener("input",()=>{Fe&&(Fe.value=lt.value),Tt()}),Fe&&(Fe.value=lt.value),Tt()),Fe&&Fe.addEventListener("input",()=>{let L=Math.max(1,Math.min(400,parseInt(Fe.value||"100",10)));lt.value=String(L),Tt()}),xt){let L=new ResizeObserver(()=>mt());L.observe(xt),(Be=(Ee=this.__ddcGridRO)==null?void 0:Ee.disconnect)==null||Be.call(Ee),this.__ddcGridRO=L}t.querySelectorAll(".chip").forEach(L=>{L.addEventListener("click",()=>{var ke,ue;t.querySelectorAll(".chip").forEach(be=>be.setAttribute("aria-pressed","false")),L.setAttribute("aria-pressed","true");let W=parseInt(L.dataset.w,10),te=parseInt(L.dataset.h,10),oe=t.querySelector("#ddc-setting-sizeMode");oe.value="fixed_custom",(ue=(ke=typeof y!="undefined"&&y)==null?void 0:ke.dispatchEvent)==null||ue.call(ke,new Event("change")),setTimeout(()=>{var We,Je,Ze;(We=t.querySelector("#ddc-setting-custW"))==null||We.setAttribute("value",String(W)),(Ze=(Je=t.querySelector("#ddc-setting-custW"))==null?void 0:Je.dispatchEvent)==null||Ze.call(Je,new Event("change"));let be=t.querySelector("#ddc-setting-custW");be&&(be.value=String(W));let qe=t.querySelector("#ddc-setting-custH");qe&&(qe.value=String(te))},0)})});let ii=["#ffffff","#f5f7fa","#ebeff5","#121212","#1f2937","#334155","#ff6b6b","#fcbf49","#ffe66d","#4ecdc4","#1a535c","#6b5b95","#f6f5f5","#00aaff","#ff00ff","#00ff00","var(--card-background-color)","var(--ha-card-background)","transparent","rgba(255,255,255,0.4)","rgba(0,0,0,0.3)","rgba(0,128,255,0.3)","rgba(255,0,128,0.3)","rgba(255,255,0,0.3)","rgba(0,255,128,0.3)"],Ot=(L,W,te)=>{let oe=t.querySelector(L),ke=t.querySelector(W),ue=t.querySelector(te);!oe||!ke||(oe.innerHTML="",ii.forEach((be,qe)=>{let We=document.createElement("button");We.type="button",We.className="swatch",We.title=be,We.style.background=be.startsWith("var(")?getComputedStyle(this).getPropertyValue(be.slice(4,-1)).trim()||"#fff":be,We.setAttribute("aria-pressed","false"),We.addEventListener("click",()=>{oe.querySelectorAll(".swatch").forEach(Je=>Je.setAttribute("aria-pressed","false")),We.setAttribute("aria-pressed","true"),ke.value=be,/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(be)&&ue&&(ue.value=be);try{ke.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}catch{}}),oe.appendChild(We),String(ke.value).trim()===be&&We.setAttribute("aria-pressed","true")}))};Ot("#ddc-swatches-containerBg","#ddc-setting-containerBg","#ddc-color-containerBg"),Ot("#ddc-swatches-cardBg","#ddc-setting-cardBg","#ddc-color-cardBg"),[["#ddc-color-containerBg","#ddc-setting-containerBg"],["#ddc-color-cardBg","#ddc-setting-cardBg"]].forEach(([L,W])=>{let te=t.querySelector(L),oe=t.querySelector(W);if(!te||!oe)return;let ke=(String(oe.value||"").match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)||[])[0];ke&&(te.value=ke),te.addEventListener("input",()=>{oe.value=te.value}),oe.addEventListener("change",()=>{let ue=(String(oe.value||"").match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)||[])[0];ue&&(te.value=ue)})});let yt=t.querySelector("#ddc-setting-bgImg"),It=t.querySelector("#ddc-bg-thumb"),Mt=L=>{It&&(It.style.backgroundImage=L?`url(${L})`:"none")};yt!=null&&yt.value&&Mt(yt.value),yt==null||yt.addEventListener("input",()=>{let L=(yt.value||"").trim();Mt(L||"")}),(Ae=t.querySelector("#ddc-clear-bg"))==null||Ae.addEventListener("click",()=>{var te,oe;yt&&(yt.value=""),Mt("");let{background_image:L,...W}=this._config||{};this._config=W,this.style.setProperty("--ddc-bg-image","none"),(te=this._applyBackgroundFromConfig)==null||te.call(this),(oe=this._persistThisCardConfigToStorage_)==null||oe.call(this)}),t.addEventListener("click",L=>{L.target===t&&(L.stopPropagation(),Me())});let me=L=>{L.key==="Escape"&&(L.stopPropagation(),Me())};document.addEventListener("keydown",me,{once:!0}),setTimeout(()=>{var L;return(L=t.querySelector("#ddc-setting-gridSize"))==null?void 0:L.focus()},0);try{let L=t.querySelector("#ddc-setting-sizeExtras"),W=()=>{var oe,ke;if(!L)return;L.innerHTML="";let te=(y==null?void 0:y.value)||"dynamic";if(te==="fixed_custom"){let ue=document.createElement("label");ue.style.display="flex",ue.style.flexDirection="column",ue.style.fontSize=".95rem",ue.style.marginBottom="10px";let be=document.createElement("span");be.textContent="Custom width (px)",be.style.marginBottom="4px";let qe=document.createElement("input");qe.type="number",qe.id="ddc-setting-custW",qe.min="100",qe.max="10000",qe.step="10",qe.style.padding="6px",qe.style.border="1px solid var(--divider-color,rgba(0,0,0,.3))",qe.style.borderRadius="6px",qe.value=String((oe=this.containerFixedWidth)!=null?oe:800),ue.appendChild(be),ue.appendChild(qe);let We=document.createElement("label");We.style.display="flex",We.style.flexDirection="column",We.style.fontSize=".95rem",We.style.marginBottom="10px";let Je=document.createElement("span");Je.textContent="Custom height (px)",Je.style.marginBottom="4px";let Ze=document.createElement("input");Ze.type="number",Ze.id="ddc-setting-custH",Ze.min="100",Ze.max="10000",Ze.step="10",Ze.style.padding="6px",Ze.style.border="1px solid var(--divider-color,rgba(0,0,0,.3))",Ze.style.borderRadius="6px",Ze.value=String((ke=this.containerFixedHeight)!=null?ke:600),We.appendChild(Je),We.appendChild(Ze),L.appendChild(ue),L.appendChild(We)}else if(te==="preset"){let ue=document.createElement("label");ue.style.display="flex",ue.style.flexDirection="column",ue.style.fontSize=".95rem",ue.style.marginBottom="10px";let be=document.createElement("span");be.textContent="Preset size",be.style.marginBottom="4px";let qe=document.createElement("select");qe.id="ddc-setting-preset",qe.style.padding="6px",qe.style.border="1px solid var(--divider-color,rgba(0,0,0,.3))",qe.style.borderRadius="6px",(typeof e!="undefined"&&e._sizePresets?e._sizePresets():[]).forEach(Je=>{let Ze=document.createElement("option");Ze.value=Je.key,Ze.textContent=`${Je.label||Je.key} (${Je.w}\xD7${Je.h})`,qe.appendChild(Ze)}),qe.value=String(this.containerPreset||"fhd"),ue.appendChild(be),ue.appendChild(qe),L.appendChild(ue)}};W(),y==null||y.addEventListener("change",W)}catch(L){console.warn("[drag-and-drop-card] Failed to build container size extras",L)}let j=()=>{var W,te,oe,ke,ue;return((ue=(ke=(te=(W=this._config)==null?void 0:W.options)==null?void 0:te.tabs)!=null?ke:(oe=this._config)==null?void 0:oe.tabs)!=null?ue:[]).map(be=>{var qe,We,Je,Ze,Lt,Dt,Pt;return typeof be=="string"?{id:be,label:be,icon:"",label_mode:"both",__raw:{id:be,label:be}}:{id:(Je=(We=(qe=be.id)!=null?qe:be.key)!=null?We:be.label)!=null?Je:"tab",label:(Lt=(Ze=be.label)!=null?Ze:be.id)!=null?Lt:"Tab",icon:(Dt=be.icon)!=null?Dt:"",label_mode:(Pt=be.label_mode)!=null?Pt:"both",__raw:be}})},K=async(L,W)=>{var oe,ke,ue;let te=L.map(be=>({...be.__raw,id:be.id,label:be.label,icon:be.icon||"",label_mode:be.label_mode||"both"}));(oe=this._config)!=null&&oe.options?this._config.options={...this._config.options||{},tabs:te,default_tab:W!=null?W:(ke=this._config.options)==null?void 0:ke.default_tab}:(this._config.tabs=te,W&&(this._config.default_tab=W));try{await this._persistThisCardConfigToStorage_()}catch(be){console.warn("[drag-and-drop-card] Could not persist tabs",be)}(ue=this.requestUpdate)==null||ue.call(this)},ye=()=>{var L,W,te,oe;return((W=(L=this._config)==null?void 0:L.options)==null?void 0:W.default_tab)||((te=this._config)==null?void 0:te.default_tab)||((oe=j()[0])==null?void 0:oe.id)},Se=t.querySelector("#ddc-tabs-list"),de=()=>{let L=j(),W=ye();if(Se.innerHTML="",!L.length){let te=document.createElement("div");te.className="hint",te.textContent="No tabs yet. Add one below.",Se.appendChild(te);return}L.forEach((te,oe)=>{let ke=document.createElement("div");ke.className="tab-row";let ue=document.createElement("input");ue.type="radio",ue.name="ddc-default-tab",ue.value=te.id,ue.checked=te.id===W,ue.title="Set as default tab",ue.addEventListener("change",async()=>{await K(L,te.id)});let be=document.createElement("div");be.className="tab-name";let qe=document.createElement("ha-icon");qe.setAttribute("icon",te.icon||"mdi:tab");let We=document.createElement("input");We.value=te.icon||"",We.placeholder="mdi:home",We.title="Tab icon (mdi:...)",We.style.width="160px",We.addEventListener("change",async()=>{te.icon=We.value.trim(),qe.setAttribute("icon",te.icon||"mdi:tab"),L[oe]=te,await K(L,W)});let Je=document.createElement("input");Je.value=te.label,Je.placeholder="Tab name",Je.style.flex="1",Je.addEventListener("change",async()=>{te.label=Je.value.trim()||te.id,L[oe]=te,await K(L,W)});let Ze=document.createElement("div");Ze.className="tab-icon-wrap",Ze.appendChild(qe),Ze.appendChild(We),be.appendChild(Ze),be.appendChild(Je);let Lt=document.createElement("div");Lt.className="mode-chips";let Dt=(qt,Ft)=>{let bt=document.createElement("button");return bt.type="button",bt.className="chip",bt.textContent=Ft,bt.setAttribute("aria-pressed",String((te.label_mode||"both")===qt)),bt.addEventListener("click",async()=>{Lt.querySelectorAll(".chip").forEach(Kt=>Kt.setAttribute("aria-pressed","false")),bt.setAttribute("aria-pressed","true"),te.label_mode=qt,L[oe]=te,await K(L,W)}),bt};Lt.appendChild(Dt("icon","Icon")),Lt.appendChild(Dt("text","Text")),Lt.appendChild(Dt("both","Both"));let Pt=document.createElement("div");Pt.className="tab-actions";let wt=document.createElement("button");wt.className="icon-btn danger",wt.innerHTML='<ha-icon icon="mdi:trash-can-outline"></ha-icon>',wt.title="Delete tab",wt.addEventListener("click",async()=>{var bt,Kt;let qt=j().filter(ni=>ni.id!==te.id),Ft=W;te.id===W&&(Ft=(bt=qt[0])==null?void 0:bt.id),await K(qt,Ft);try{(Kt=this._reassignCardsToTab_)==null||Kt.call(this,te.id,Ft)}catch{}de()}),Pt.appendChild(Lt),Pt.appendChild(wt),ke.appendChild(ue),ke.appendChild(be),ke.appendChild(Pt),Se.appendChild(ke)})};de(),(se=t.querySelector("#ddc-add-tab-btn"))==null||se.addEventListener("click",async()=>{let L=t.querySelector("#ddc-new-tab-name"),W=((L==null?void 0:L.value)||"").trim();if(!W)return;let te=j(),oe=W.replace(/\s+/g,"-").toLowerCase(),ke=2;for(;te.some(ue=>ue.id===oe);)oe=`${oe}-${ke++}`;te.push({id:oe,label:W,icon:"",label_mode:"both",__raw:{id:oe,label:W}}),await K(te,ye()),L.value="",de()});let ze=t.querySelector("#ddc-clear-bg");ze&&ze.addEventListener("click",()=>{var te,oe,ke;let L=t.querySelector("#ddc-setting-bgImg"),W=t.querySelector("#ddc-bg-thumb");L&&(L.value=""),W&&(W.style.backgroundImage="none");try{if((te=this._config)!=null&&te.background_image){let{background_image:ue,...be}=this._config;this._config=be}(oe=this._applyBackgroundImageFromConfig)==null||oe.call(this),(ke=this._persistThisCardConfigToStorage_)==null||ke.call(this)}catch(ue){console.warn("[drag-and-drop-card] Failed to clear background image",ue)}});let Y=["linear-gradient(135deg, #1e3a8a, #0ea5e9)","linear-gradient(135deg, #111827, #1f2937)","linear-gradient(135deg, #0f766e, #22c55e)","linear-gradient(135deg, #7c3aed, #06b6d4)","linear-gradient(135deg, #f97316, #f43f5e)","linear-gradient(135deg, #eab308, #22d3ee)","radial-gradient(circle at 30% 20%, #2dd4bf, #1e293b)","radial-gradient(circle at 70% 80%, #f59e0b, #7c3aed)"],Z=(L,W)=>{let te=t.querySelector(L),oe=t.querySelector(W);!te||!oe||(te.innerHTML="",Y.forEach(ke=>{let ue=document.createElement("button");ue.type="button",ue.className="gradient",ue.style.background=ke,ue.setAttribute("aria-pressed","false"),ue.title=ke,ue.addEventListener("click",()=>{te.querySelectorAll(".gradient").forEach(be=>be.setAttribute("aria-pressed","false")),ue.setAttribute("aria-pressed","true"),oe.value=ke;try{String(W||"").toLowerCase().includes("cardbg")?(this.cardBackground=ke,this.style.setProperty("--ddc-card-bg",ke)):(this.containerBackground=ke,this.style.setProperty("--ddc-bg",ke))}catch{}}),te.appendChild(ue),String(oe.value).trim()===ke&&ue.setAttribute("aria-pressed","true")}))};Z("#ddc-gradients-containerBg","#ddc-setting-containerBg"),Z("#ddc-gradients-cardBg","#ddc-setting-cardBg"),T&&T.addEventListener("input",()=>{let L=(T.value||"").trim();try{this.containerBackground=L,this.style.setProperty("--ddc-bg",L)}catch{}}),R&&R.addEventListener("input",()=>{let L=(R.value||"").trim();try{this.cardBackground=L,this.style.setProperty("--ddc-card-bg",L)}catch{}});let Me=()=>{var L,W;try{(W=(L=this.__ddcGridRO)==null?void 0:L.disconnect)==null||W.call(L),this.__ddcGridRO=null}catch{}try{t.remove()}catch{}this.__settingsModal===t&&(this.__settingsModal=null)};(ne=t.querySelector("#ddc-settings-close"))==null||ne.addEventListener("click",L=>{L.stopPropagation(),Me()}),(ee=t.querySelector("#ddc-settings-cancel"))==null||ee.addEventListener("click",L=>{L.stopPropagation(),Me()}),(J=t.querySelector("#ddc-settings-save"))==null||J.addEventListener("click",L=>{var Gt,Yi,wi,Si,hi,$i,Ki,ki,Ui,Vi,Ci,Ei,Gi,fi,Xi,Ai,Ji,ai;L.stopPropagation();let W=(y==null?void 0:y.value)||"dynamic",te=W==="dynamic"&&!!(o!=null&&o.checked),oe=parseInt((c==null?void 0:c.value)||"0",10),ke=!!(s!=null&&s.checked),ue=!!(l!=null&&l.checked),be=!!(u!=null&&u.checked),qe=!!(f!=null&&f.checked),We=!!(v!=null&&v.checked),Je=parseInt((m==null?void 0:m.value)||"0",10),Ze=(w==null?void 0:w.value)||"auto",Lt=!!(S!=null&&S.checked),Dt=((T==null?void 0:T.value)||"").trim(),Pt=((R==null?void 0:R.value)||"").trim(),wt=((O==null?void 0:O.value)||"").trim(),qt=!!(H!=null&&H.checked),Ft=((_==null?void 0:_.value)||"").trim(),bt=($==null?void 0:$.value)||"none",Kt=((ge==null?void 0:ge.value)||"").trim(),ni=!!(fe!=null&&fe.checked),pn=((he==null?void 0:he.value)||"").trim(),ui=parseInt((He==null?void 0:He.value)||"",10),Hi=parseInt((Ye==null?void 0:Ye.value)||"",10),ji=!!(Oe!=null&&Oe.checked),Wi=!!(Ue!=null&&Ue.checked),_i=(ot==null?void 0:ot.value)||"cover",hn=(st==null?void 0:st.value)||"center",pi=ut?Math.max(0,Math.min(100,parseInt(ut.value||"100",10)))/100:1,Ut=(re==null?void 0:re.value)||"scroll",Vt=!!(C!=null&&C.checked),xi=!!(Q!=null&&Q.checked),ri=parseInt((B==null?void 0:B.value)||"1",10),Ht=(Number.isFinite(ri)?ri:1)*6e4;try{if(this.autoResizeCards=te,!this.autoResizeCards&&this.__ddcResizeObs){try{this.__ddcResizeObs.disconnect()}catch{}this.__ddcResizeObs=null,this.__ddcOnWinResize&&(window.removeEventListener("resize",this.__ddcOnWinResize),this.__ddcOnWinResize=null)}if(this.autoResizeCards&&!this.__ddcResizeObs){this.__ddcResizeObs=new ResizeObserver(()=>{var it;return(it=this._applyAutoScale)==null?void 0:it.call(this)});try{this.__ddcResizeObs.observe(this)}catch{}try{this.__ddcResizeObs.observe(this.cardContainer)}catch{}window.addEventListener("resize",this.__ddcOnWinResize=()=>{var it;return(it=this._applyAutoScale)==null?void 0:it.call(this)})}this.autoResizeCards||String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(Gt=this._startScaleWatch)==null||Gt.call(this):(Yi=this._stopScaleWatch)==null||Yi.call(this),(wi=this._applyAutoScale)==null||wi.call(this),!isNaN(oe)&&oe>0&&oe!==this.gridSize&&(this.gridSize=oe,(Si=this._applyGridVars)==null||Si.call(this),(hi=this._resizeContainer)==null||hi.call(this)),this.cardShadowEnabled=Vt,this.cardShadowEnabled?this.style.setProperty("--ddc-card-shadow","0 8px 24px rgba(0,0,0,.35)"):this.style.removeProperty("--ddc-card-shadow"),this.editModePin=Ft,this._config={...this._config||{},edit_mode_pin:Ft};let Ti=qe!==this.dragLiveSnap;this.dragLiveSnap=qe,Ti&&(($i=this._initInteract)==null||$i.call(this)),this.autoSave=We,!isNaN(Je)&&Je>0&&(this.autoSaveDebounce=Je);let Qi=W!==this.containerSizeMode;this.containerSizeMode=W;let Zi=Ze!==this.containerPresetOrient;if(this.containerPresetOrient=Ze,(Qi||Zi)&&((Ki=this._resizeContainer)==null||Ki.call(this)),W==="fixed_custom"){let it=parseInt(((ki=t.querySelector("#ddc-setting-custW"))==null?void 0:ki.value)||"0",10),dt=parseInt(((Ui=t.querySelector("#ddc-setting-custH"))==null?void 0:Ui.value)||"0",10);!isNaN(it)&&it>0&&(this.containerFixedWidth=it),!isNaN(dt)&&dt>0&&(this.containerFixedHeight=dt),(Vi=this._resizeContainer)==null||Vi.call(this)}else if(W==="preset"){let it=(Ci=t.querySelector("#ddc-setting-preset"))==null?void 0:Ci.value;it&&(this.containerPreset=it),(Ei=this._resizeContainer)==null||Ei.call(this)}if(this.disableOverlap=Lt,Dt)this.containerBackground=Dt,this.style.setProperty("--ddc-bg",this.containerBackground),this._config=this._config||{},this._config.container_background=this.containerBackground;else{this.containerBackground="";try{this.style.removeProperty("--ddc-bg")}catch{}this._config=this._config||{},this._config.container_background=this.containerBackground}if(Pt)this.cardBackground=Pt,this.style.setProperty("--ddc-card-bg",this.cardBackground),this._config=this._config||{},this._config.card_background=this.cardBackground;else{this.cardBackground="";try{this.style.removeProperty("--ddc-card-bg")}catch{}this._config=this._config||{},this._config.card_background=this.cardBackground}if(wt){let it=this._config&&this._config.background_image||{};this._config={...this._config,background_image:{...it,src:wt}}}else{let{background_image:it,...dt}=this._config||{};this._config=dt}this.debug=qt,this.animateCards=ke,this.hideHaHeader=ue,this.hideHaSidebar=be,(Gi=this._applyHaChromeVisibility_)==null||Gi.call(this);let Oi=this._config&&this._config.background_image||{},zi=(z==null?void 0:z.value)||"no-repeat",Mi=(b==null?void 0:b.value)||"cover",en=(M==null?void 0:M.value)||"center center",Xt=(I==null?void 0:I.value)||"scroll",oi=F?Math.max(0,Math.min(100,parseInt(F.value||"100",10)))/100:1;if(this._config=this._config||{},this._config.background_mode=bt,bt!=="image"&&!wt){let{background_image:it,...dt}=this._config||{};this._config=dt}if(bt==="particles")this._config.background_particles={config_url:Kt||void 0,pointer_events:ni||void 0};else{let{background_particles:it,...dt}=this._config||{};this._config=dt}if(bt==="youtube")this._config.background_youtube={url:pn||void 0,start:Number.isFinite(ui)?ui:void 0,end:Number.isFinite(Hi)?Hi:void 0,mute:ji!==!0?ji:void 0,loop:Wi!==!0?Wi:void 0,size:_i&&_i!="cover"?_i:void 0,position:hn||void 0,attachment:Ut&&Ut!=="scroll"?Ut:void 0,opacity:pi!=null&&pi!==1?pi:void 0};else{let{background_youtube:it,...dt}=this._config||{};this._config=dt}if(this.screenSaverEnabled=xi,this.screenSaverDelay=Ht,(fi=this._updateScreensaverSettings)==null||fi.call(this),wt)this._config={...this._config,background_image:{...Oi,src:wt,repeat:zi,size:Mi,position:en,attachment:Xt,opacity:oi}};else if(Oi.src)this._config={...this._config,background_image:{...Oi,repeat:zi,size:Mi,position:en,attachment:Xt,opacity:oi}};else{let{background_image:it,...dt}=this._config||{};this._config=dt}(Xi=this._applyBackgroundFromConfig)==null||Xi.call(this);try{this._config||(this._config={}),this._config.grid=this.gridSize,this._config.auto_resize_cards=!!this.autoResizeCards,this._config.drag_live_snap=!!this.dragLiveSnap,this._config.auto_save=!!this.autoSave,this._config.auto_save_debounce=this.autoSaveDebounce,this._config.container_size_mode=this.containerSizeMode,this._config.container_preset_orientation=this.containerPresetOrient,this._config.container_fixed_width=this.containerFixedWidth,this._config.container_fixed_height=this.containerFixedHeight,this._config.container_preset=this.containerPreset,this._config.disable_overlap=!!this.disableOverlap,this.containerBackground!==void 0?this._config.container_background=this.containerBackground:this._config&&delete this._config.container_background,this.cardBackground!==void 0?this._config.card_background=this.cardBackground:this._config&&delete this._config.card_background,this._config.card_shadow=!!this.cardShadowEnabled,this._config.debug=!!this.debug,this._config.animate_cards=!!this.animateCards,this._config.hide_HA_Header=!!this.hideHaHeader,this._config.hide_HA_Sidebar=!!this.hideHaSidebar,this._config.screen_saver_enabled=!!this.screenSaverEnabled,this._config.screen_saver_delay=this.screenSaverDelay}catch(it){console.warn("[drag-and-drop-card] Failed to update config",it)}try{let it=((Ai=this._exportableOptions)==null?void 0:Ai.call(this))||{},dt=(Ji=this._persistThisCardConfigToStorage_)==null?void 0:Ji.call(this);dt&&typeof dt.catch=="function"&&dt.catch(Li=>{console.warn("[drag-and-drop-card] Storage save failed (is this a YAML dashboard?)",Li)});let gi=(ai=this._persistOptionsToYaml)==null?void 0:ai.call(this,it,{noDownload:!0});gi&&typeof gi.catch=="function"&&gi.catch(Li=>{console.warn("[drag-and-drop-card] YAML persist failed",Li)})}catch(it){console.warn("[drag-and-drop-card] Unexpected error persisting settings",it)}}catch(Ti){console.warn("[drag-and-drop-card] Failed to apply settings",Ti)}Me()})}_exportableOptions(){var s,l,u;let t=this._config||{},r=(f,v)=>Object.fromEntries(v.map(m=>[m,f==null?void 0:f[m]]).filter(([,m])=>m!==void 0)),o=t.background_mode||((s=t.background_image)!=null&&s.src?"image":t.background_youtube?"youtube":t.background_particles?"particles":"none"),c={storage_key:this.storageKey||void 0,grid:this.gridSize,drag_live_snap:!!this.dragLiveSnap,auto_save:!!this.autoSave,auto_save_debounce:this.autoSaveDebounce,disable_overlap:!!this.disableOverlap,debug:!!this.debug,edit_mode_pin:this.editModePin||void 0,container_size_mode:this.containerSizeMode,container_preset_orientation:this.containerPresetOrient,container_fixed_width:(l=this.containerFixedWidth)!=null?l:void 0,container_fixed_height:(u=this.containerFixedHeight)!=null?u:void 0,container_preset:this.containerPreset,auto_resize_cards:!!this.autoResizeCards,container_background:this.containerBackground,card_background:this.cardBackground,card_shadow:!!this.cardShadowEnabled,animate_cards:!!this.animateCards,hide_HA_Header:!!this.hideHaHeader,hide_HA_Sidebar:!!this.hideHaSidebar,tabs:this.tabs,tabs_position:this.tabsPosition,default_tab:this.defaultTab,hide_tabs_when_single:!!this.hideTabsWhenSingle,background_mode:o,background_image:t.background_image?r(t.background_image,["src","repeat","size","position","attachment","opacity"]):void 0,background_particles:t.background_particles?r(t.background_particles,["config_url","pointer_events"]):void 0,background_youtube:t.background_youtube?r(t.background_youtube,["url","start","end","mute","loop","size","position","attachment","opacity"]):void 0,screen_saver_enabled:!!this.screenSaverEnabled,screen_saver_delay:this.screenSaverDelay};return Object.keys(c).forEach(f=>c[f]===void 0&&delete c[f]),c}_applyImportedOptions(t={},r=!0){var o,c,s,l,u,f,v,m,y,w,S;if(t&&Object.prototype.hasOwnProperty.call(t,"storage_key")&&this._isInHaEditorPreview())try{let _={type:"custom:drag-and-drop-card",...this._config||{}};this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:_},bubbles:!0,composed:!0}))}catch{}if(this._config={...this._config||{},...t},"storage_key"in t&&(this.storageKey=t.storage_key||void 0),this._syncEditorsStorageKey(),"grid"in t&&(this.gridSize=Number(t.grid)||10),"drag_live_snap"in t&&(this.dragLiveSnap=!!t.drag_live_snap),"auto_save"in t&&(this.autoSave=!!t.auto_save),"auto_save_debounce"in t&&(this.autoSaveDebounce=Number(t.auto_save_debounce)||800),"container_background"in t&&(this.containerBackground=(o=t.container_background)!=null?o:"transparent"),"card_background"in t&&(this.cardBackground=(c=t.card_background)!=null?c:"var(--ha-card-background, var(--card-background-color))"),"card_shadow"in t&&(this.cardShadowEnabled=!!t.card_shadow),"debug"in t&&(this.debug=!!t.debug),"disable_overlap"in t&&(this.disableOverlap=!!t.disable_overlap),"container_size_mode"in t){this.containerSizeMode=t.container_size_mode||"dynamic";let _=String(this.containerSizeMode||"dynamic").toLowerCase();_==="dynamic"&&(this.autoResizeCards=!0),this.autoResizeCards||_==="auto"?(s=this._startScaleWatch)==null||s.call(this):(l=this._stopScaleWatch)==null||l.call(this),(u=this._applyAutoScale)==null||u.call(this)}if("container_fixed_width"in t&&(this.containerFixedWidth=Number(t.container_fixed_width)||null),"container_fixed_height"in t&&(this.containerFixedHeight=Number(t.container_fixed_height)||null),"container_preset"in t&&(this.containerPreset=t.container_preset||"fhd"),"container_preset_orientation"in t&&(this.containerPresetOrient=t.container_preset_orientation||"auto"),"auto_resize_cards"in t){let _=String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase();_==="dynamic"?this.autoResizeCards=!0:this.autoResizeCards=!!t.auto_resize_cards,this.autoResizeCards||_==="auto"?(f=this._startScaleWatch)==null||f.call(this):(v=this._stopScaleWatch)==null||v.call(this),(m=this._applyAutoScale)==null||m.call(this)}if("screen_saver_enabled"in t&&(this.screenSaverEnabled=!!t.screen_saver_enabled),"screen_saver_delay"in t){let _=Number(t.screen_saver_delay);this.screenSaverDelay=Number.isFinite(_)&&_>0?_:this.screenSaverDelay}("screen_saver_enabled"in t||"screen_saver_delay"in t)&&typeof this._updateScreensaverSettings=="function"&&this._updateScreensaverSettings(),this.style.setProperty("--ddc-bg",this.containerBackground),this.style.setProperty("--ddc-card-bg",this.cardBackground),this.cardShadowEnabled?this.style.setProperty("--ddc-card-shadow","0 8px 24px rgba(0,0,0,.35)"):this.style.removeProperty("--ddc-card-shadow"),this._applyGridVars(),r&&(this._applyContainerSizingFromConfig(!0),(y=this._applyAutoScale)==null||y.call(this),this._resizeContainer(),(w=this._updateStoreBadge)==null||w.call(this),(S=this._applyAutoScale)==null||S.call(this))}_exportDesign(){let r=Array.from(this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)")).map(u=>{let f=parseFloat(u.getAttribute("data-x"))||0,v=parseFloat(u.getAttribute("data-y"))||0,m=parseFloat(u.style.width)||u.getBoundingClientRect().width,y=parseFloat(u.style.height)||u.getBoundingClientRect().height,w=parseInt(u.style.zIndex||"1",10),S=this._extractCardConfig(u.firstElementChild),_=u.dataset.tabId||this.defaultTab,T={card:S,position:{x:f,y:v},size:{width:m,height:y},z:w,tabId:_},R=u.style.overflow;return R&&R!==""&&(T.overflow=R),T}),o={version:2,options:this._exportableOptions(),cards:r};this._config&&this._config.card_mod&&(o.options=o.options||{},o.options.card_mod=this._config.card_mod);let c=`DragAndDrop_Design_${this.storageKey||"layout"}.json`,s=new Blob([JSON.stringify(o,null,2)],{type:"application/json"}),l=document.createElement("a");l.href=URL.createObjectURL(s),l.download=c,l.click(),URL.revokeObjectURL(l.href),this._toast("Design exported.")}_importDesign(){let t=document.createElement("input");t.type="file",t.accept="application/json";let r=!0,o=!1,c=["grid","drag_live_snap","auto_save","auto_save_debounce","debug","disable_overlap","card_mod","storage_key","animate_cards","auto_resize_cards","container_background","card_background","container_size_mode","container_fixed_width","container_fixed_height","container_preset","container_preset_orientation","tabs","tabs_position","default_tab","hide_tabs_when_single","hide_HA_Header","hide_HA_Sidebar","background_mode","background_image","background_particles","background_youtube","screen_saver_enabled","screen_saver_delay"];t.onchange=async()=>{var u,f,v,m,y,w,S,_,T,R,C,O,z,b,M,I,F,N,H,Q,B,V,$,le,_e,Re,ge,fe,he,He,Ye,Oe,Ue,ot,st,re,ut,ct,Ie,ae,$e,Ce,Le,ft,gt,Bt,lt,At,xt,Wt;let s=(u=t.files)==null?void 0:u[0];if(!s)return;let l=await s.text();try{let Fe=JSON.parse(l),mt=this.storageKey||((f=this._config)==null?void 0:f.storage_key)||null,Tt=!!(Fe.options&&Array.isArray(Fe.options.tabs)),ii=Array.isArray(Fe.cards)&&Fe.cards.some(me=>(me==null?void 0:me.tabId)||(me==null?void 0:me.tab_id)),Ot=[];Tt?Ot=Fe.options.tabs:ii?Ot=Array.from(new Set(Fe.cards.map(j=>(j==null?void 0:j.tabId)||(j==null?void 0:j.tab_id)).filter(Boolean))).map(j=>({id:j,label:j})):Ot=[{id:"default",label:"Layout"}];let yt=((v=Fe.options)==null?void 0:v.tabs_position)==="left"?"left":this.tabsPosition||"top",It=((m=Fe.options)==null?void 0:m.default_tab)||((y=Ot[0])==null?void 0:y.id)||"default",Mt=((w=Fe.options)==null?void 0:w.hide_tabs_when_single)!==void 0?!!Fe.options.hide_tabs_when_single:!0;if(Fe.options){let me={...Fe.options};if(o||delete me.storage_key,r){let j=this._config||{type:"custom:drag-and-drop-card"};for(let K of c)K==="storage_key"&&!o||!(K in me)&&K in j&&delete j[K];try{this.cardContainer&&(this.cardContainer.style.background="",this.cardContainer.style.width="",this.cardContainer.style.height=""),(_=(S=this.style)==null?void 0:S.removeProperty)==null||_.call(S,"--ddc-container-bg"),(R=(T=this.style)==null?void 0:T.removeProperty)==null||R.call(T,"--ddc-card-bg")}catch{}if(this._config={...j,...me},"card_mod"in me||delete this._config.card_mod,"animate_cards"in me&&(this.animateCards=!!me.animate_cards),"auto_resize_cards"in me&&(this.autoResizeCards=!!me.auto_resize_cards),"hide_HA_Header"in me||"hide_HA_Sidebar"in me)try{(C=this._applyHaChromeVisibility_)==null||C.call(this)}catch{}if("background_mode"in me||"background_image"in me||"background_particles"in me||"background_youtube"in me)try{(O=this._applyBackgroundFromConfig)==null||O.call(this)}catch{}if(o&&me.storage_key&&(this.storageKey=me.storage_key),this._opts){this._opts={...this._opts,...me};for(let K of c)K in me||delete this._opts[K]}(z=this._applyOptionsToDom)==null||z.call(this,this._config),(b=this.requestUpdate)==null||b.call(this)}else this._applyImportedOptions(me,!0),me.card_mod!==void 0&&(this._config=this._config||{},this._config.card_mod=me.card_mod,(M=this.requestUpdate)==null||M.call(this))}else if(typeof Fe.grid=="number"){let me={grid:Fe.grid};r?this._config={...this._config||{},...me}:this._applyImportedOptions(me,!0),(I=this.requestUpdate)==null||I.call(this)}(!Array.isArray(this.tabs)||!this.tabs.length)&&(this.tabs=Ot),this.tabsPosition||(this.tabsPosition=yt),this.defaultTab||(this.defaultTab=It),this.hideTabsWhenSingle===void 0&&(this.hideTabsWhenSingle=Mt),(H=(N=(F=this.rootEl)==null?void 0:F.classList)==null?void 0:N.toggle)==null||H.call(N,"ddc-tabs-left-layout",this.tabsPosition==="left");try{let me=((Q=this._config)==null?void 0:Q.storage_key)||this.storageKey||null,j=(B=Fe.options)!=null?B:typeof Fe.grid=="number"?{grid:Fe.grid}:{},K={...j,tabs:($=(V=j.tabs)!=null?V:this.tabs)!=null?$:[],tabs_position:(_e=(le=j.tabs_position)!=null?le:this.tabsPosition)!=null?_e:"top",default_tab:(Ye=(Re=j.default_tab)!=null?Re:this.defaultTab)!=null?Ye:((fe=(ge=j.tabs)==null?void 0:ge[0])==null?void 0:fe.id)||((He=(he=this.tabs)==null?void 0:he[0])==null?void 0:He.id)||"default",hide_tabs_when_single:(Ue=j.hide_tabs_when_single)!=null?Ue:(Oe=this.hideTabsWhenSingle)!=null?Oe:!0};if(o||delete K.storage_key,!me)console.warn("[ddc:import] No storage_key on this card; aborting YAML persist.");else{let ye=await((ot=this._persistOptionsToYaml)==null?void 0:ot.call(this,K,{forceTargetKey:String(me),noDownload:!0,replace:!0,wipeUnknownKeys:!0})),Se=!!(ye&&ye.yamlSaved);(st=console.debug)==null||st.call(console,"[ddc:import] YAML persist result:",Se)}try{let ye={type:"custom:drag-and-drop-card",...this._config||{}};ye.tabs=K.tabs,ye.tabs_position=K.tabs_position,ye.default_tab=K.default_tab,ye.hide_tabs_when_single=!!K.hide_tabs_when_single,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:ye},bubbles:!0,composed:!0}))}catch{}}catch(me){console.warn("[ddc:import] YAML persist failed:",me)}if(this.cardContainer.innerHTML="",Array.isArray(Fe.cards)&&Fe.cards.length)for(let me of Fe.cards){let j=((re=me.position)==null?void 0:re.x)||0,K=((ut=me.position)==null?void 0:ut.y)||0,ye=((ct=me.size)==null?void 0:ct.width)||140,Se=((Ie=me.size)==null?void 0:Ie.height)||100,de=me.z,ze=this._normalizeTabId(me.tabId||me.tab_id||this.defaultTab);if(!(me!=null&&me.card)||typeof me.card=="object"&&!Object.keys(me.card).length){let Me=this._makePlaceholderAt(j,K,ye,Se);Me.dataset.tabId=ze,this.cardContainer.appendChild(Me);continue}let Y=await this._createCard(me.card),Z=this._makeWrapper(Y);if(Z.dataset.tabId=ze,this._setCardPosition(Z,j,K),Z.style.width=`${ye}px`,Z.style.height=`${Se}px`,de!=null&&(Z.style.zIndex=String(de)),me.overflow){Z.style.overflow=me.overflow,Z.dataset.overflow=me.overflow;let Me=Z.firstElementChild;Me&&(Me.style.overflow=me.overflow)}this.cardContainer.appendChild(Z);try{this._rebuildOnce(Z.firstElementChild)}catch{}this._initCardInteract(Z)}else this._showEmptyPlaceholder(),(ae=this._applyAutoScale)==null||ae.call(this);($e=this._applyOptionsToDom)==null||$e.call(this,this._config),this._resizeContainer();try{(ft=(Le=(Ce=this.rootEl)==null?void 0:Ce.classList)==null?void 0:Le.toggle)==null||ft.call(Le,"ddc-tabs-left-layout",this.tabsPosition==="left"),(gt=this._renderTabs)==null||gt.call(this),(Bt=this._applyActiveTab)==null||Bt.call(this)}catch{}try{this._saveTimer&&clearTimeout(this._saveTimer),await this._saveLayout(!0),(lt=this._toast)==null||lt.call(this,"Design imported & saved. Reloading..."),window.location.reload()}catch(me){console.warn("[ddc:import] saveLayout failed",me),(At=this._markDirty)==null||At.call(this,"import"),(xt=this._toast)==null||xt.call(this,"Design imported \u2014 click Apply to save.")}}catch(Fe){console.error("Import failed",Fe),(Wt=this._toast)==null||Wt.call(this,"Import failed \u2014 invalid file.")}},t.click()}_getLovelace(){var s,l;let t=0,r=this;for(;r&&t++<20;){let u=(s=r.getRootNode)==null?void 0:s.call(r),f=u==null?void 0:u.host;if((f==null?void 0:f.tagName)==="HUI-ROOT")return f.lovelace;r=f||r.parentElement}let o=new Set,c=[document];for(;c.length;){let u=c.shift();if(!(!u||o.has(u))){if(o.add(u),((l=u.host)==null?void 0:l.tagName)==="HUI-ROOT")return u.host.lovelace;if(u.tagName==="HUI-ROOT")return u.lovelace;if(u.shadowRoot&&c.push(u.shadowRoot),u.children)for(let f of u.children)c.push(f)}}}_scanDdcCards(t){let r=[],o=(s,l,u)=>{(u==null?void 0:u.type)==="custom:drag-and-drop-card"&&r.push({view:s,path:[...l],card:u})},c=(s,l,u)=>{if(s){if(Array.isArray(s)){s.forEach((f,v)=>c(f,l,u.concat(v)));return}if(typeof s=="object"){"type"in s&&o(l,u,s);for(let[f,v]of Object.entries(s))f==="views"&&Array.isArray(v)?v.forEach((m,y)=>c(m,y,["views",y])):(Array.isArray(v)||v&&typeof v=="object")&&c(v,l,u.concat(f))}}};return c(t,-1,[]),r}async _persistOptionsToYaml(t,{prevKey:r=null,patchAllInCurrentViewIfNoKey:o=!1}={}){var c,s,l,u,f,v,m,y,w;try{let S=this._getLovelace();if(!S)return console.debug("[ddc:import] persist: no lovelace root"),!1;if(typeof S.saveConfig!="function")return console.debug("[ddc:import] persist: dashboard not in Storage mode"),!1;let _=JSON.parse(JSON.stringify(S.config)),T=this._scanDdcCards(_),R=(c=S.current_view)!=null?c:0;console.debug("[ddc:import] persist: found DDC cards",T.map(M=>({view:M.view,path:M.path.join("."),storage_key:M.card.storage_key||null})));let C=(s=t==null?void 0:t.storage_key)!=null?s:null,O=[];r&&O.push(r),C&&O.push(C),this.storageKey&&O.push(this.storageKey),(l=this._config)!=null&&l.storage_key&&O.push(this._config.storage_key);let z=T.filter(M=>M.card.storage_key&&O.includes(M.card.storage_key));if(!z.length){let M=T.filter(I=>I.view===R);M.length===1&&(z=M)}if(!z.length&&T.length===1&&(z=T),!z.length)return console.debug("[ddc:import] persist: no target. Provide a unique storage_key on this card and import again.",{prevKey:r,newKey:C,storageKey:this.storageKey}),!1;let b={type:"custom:drag-and-drop-card",...t};"storage_key"in b&&delete b.storage_key,"storageKey"in b&&delete b.storageKey;for(let M of z){let I=_;for(let H of M.path)I=I[H];let F=(w=(y=(v=(u=I==null?void 0:I.storage_key)!=null?u:I==null?void 0:I.storageKey)!=null?v:(f=I==null?void 0:I.options)==null?void 0:f.storage_key)!=null?y:(m=I==null?void 0:I.options)==null?void 0:m.storageKey)!=null?w:null,N=!!(r&&C&&F===r&&C!==r);if(Object.assign(I,b),I&&typeof I.options=="object"&&I.options!==null)for(let[H,Q]of Object.entries(t||{}))H==="storage_key"||H==="storageKey"||H==="type"||(I.options[H]=Q);N?I.storage_key=String(C):F&&(I.storage_key=String(F)),"storageKey"in I&&delete I.storageKey}return console.debug("[ddc:import] persist \u2192 saving",{patched:z.length,keysTried:O,patch}),await S.saveConfig(_),!0}catch(S){return console.warn("[ddc:import] persist error",S),!1}}_queueSave(t="auto"){this._markDirty(t),this.autoSave&&(this._loading||this.editMode&&(this._dbgPush("autosave","Queued",{reason:t,debounce:this.autoSaveDebounce}),clearTimeout(this._saveTimer),this._saveTimer=setTimeout(()=>this._saveLayout(!0),this.autoSaveDebounce)))}async _saveLayout(t=!0){let o=Array.from(this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)")).map(s=>{let l=parseFloat(s.getAttribute("data-x"))||0,u=parseFloat(s.getAttribute("data-y"))||0,f=parseFloat(s.style.width)||s.getBoundingClientRect().width,v=parseFloat(s.style.height)||s.getBoundingClientRect().height,m=parseInt(s.style.zIndex||"1",10),y=this._extractCardConfig(s.firstElementChild),w=s.dataset.tabId||this.defaultTab,S=s.style.overflow&&s.style.overflow!==""?s.style.overflow:null,_={card:y,position:{x:l,y:u},size:{width:f,height:v},z:m,tabId:w};return S&&(_.overflow=S),_}),c={version:2,options:this._exportableOptions(),cards:o};try{localStorage.setItem(`ddc_local_${this.storageKey||"default"}`,JSON.stringify(c))}catch{}if(!this.storageKey){t||this._toast("Saved locally (no storage_key set)."),this.__dirty=!1,this._updateApplyBtn();return}try{await this._saveLayoutToBackend(this.storageKey,c),t||this._toast("Layout saved."),this.__dirty=!1,this._updateApplyBtn()}catch(s){console.error("Backend save failed",s),this._dbgPush("save","Backend save failed",{error:String(s)}),t||this._toast("Backend save failed \u2014 kept local copy.")}}async _probeBackend(){this._backendOK=!1;let t=performance.now();try{this._dbgPush("probe","GET /api/dragdrop_storage (list keys)");let r=await this.hass.callApi("get","dragdrop_storage"),o=Math.round(performance.now()-t);this._dbgPush("probe",`OK (${o} ms)`,r),this._backendOK=!!r}catch(r){let o=Math.round(performance.now()-t);this._dbgPush("probe",`FAILED (${o} ms)`,{error:String(r)}),this._backendOK=!1}this._updateStoreBadge()}async _loadLayoutFromBackend(t){let r=`dragdrop_storage/${encodeURIComponent(t)}`,o=performance.now();try{this._dbgPush("load",`GET /api/${r}`);let c=await this.hass.callApi("get",r),s=Math.round(performance.now()-o);return this._dbgPush("load",`OK (${s} ms)`,{bytes:JSON.stringify(c||"").length}),c}catch(c){let s=Math.round(performance.now()-o);return this._dbgPush("load",`FAILED (${s} ms)`,{error:String(c)}),null}}async _saveLayoutToBackend(t,r){let o=`dragdrop_storage/${encodeURIComponent(t)}`,c=JSON.stringify(r).length,s=performance.now();try{this._dbgPush("save",`POST /api/${o}`,{bytes:c});let l=await this.hass.callApi("post",o,r),u=Math.round(performance.now()-s);return this._dbgPush("save",`OK (${u} ms)`,l),l}catch(l){let u=Math.round(performance.now()-s);throw this._dbgPush("save",`FAILED (${u} ms)`,{error:String(l),bytes:c}),l}}async _saveOptionsToBackend(t,r){var o;try{let c=await this._loadLayoutFromBackend(t),s={version:2,...c||{},options:r||((o=this._exportableOptions)==null?void 0:o.call(this))||{}};return c&&Array.isArray(c.cards)&&(s.cards=c.cards),await this._saveLayoutToBackend(t,s),!0}catch(c){return console.warn("[ddc] saveOptionsToBackend failed",c),!1}}_updateStoreBadge(){let t=this.storeBadge;if(!t)return;let r=this._backendOK&&!!this.storageKey;t.textContent=r?"storage: backend - OK":"storage: local. Your Changes are NOT being SAVED. You need to download the Drag and Drop Card backend integration",t.style.background=r?"rgba(76,175,80,.15)":"rgba(255,193,7,.15)",t.style.borderColor=r?"rgba(76,175,80,.45)":"rgba(255,193,7,.45)"}_ensureScreenSaverStyles(){var t;if(!((t=this.shadowRoot)!=null&&t.querySelector("#ddc-screensaver-styles")))try{let r=document.createElement("style");r.id="ddc-screensaver-styles",r.textContent=`
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
      `,this.shadowRoot.appendChild(r)}catch(r){console.warn("[drag-and-drop-card] Failed to inject screensaver styles",r)}}_ensureScreenSaverGlobalStyles(){if(!document.head.querySelector("#ddc-screensaver-global-styles"))try{let t=document.createElement("style");t.id="ddc-screensaver-global-styles",t.textContent=`
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
      `,document.head.appendChild(t)}catch(t){console.warn("[drag-and-drop-card] Failed to inject global screensaver styles",t)}}_ensureScreenSaverOverlay(){var o;if(this._ensureScreenSaverGlobalStyles(),!this._screenSaverOverlayId){let c=((o=this.config)==null?void 0:o.id)||`ddc_${Math.random().toString(36).slice(2)}`;this._screenSaverOverlayId=`ddc-screensaver-overlay-${c}`}let t=this._screenSaverOverlayId;if(this.screenSaverOverlay&&this.screenSaverOverlay.parentNode===document.body)return;if(this.screenSaverOverlay&&!this.screenSaverOverlay.parentNode){document.body.appendChild(this.screenSaverOverlay);return}let r=document.createElement("div");r.className="screensaver-overlay",r.id=t,r.innerHTML=`
      <div class="screensaver-content" id="${t}-content">
        <div class="screensaver-clock" id="${t}-clock"></div>
        <div class="screensaver-date" id="${t}-date"></div>
        <div class="screensaver-calendar" id="${t}-calendar"></div>
      </div>
    `,r.addEventListener("click",()=>this._deactivateScreenSaver()),r.addEventListener("keydown",()=>this._deactivateScreenSaver()),this.screenSaverOverlay=r,document.body.appendChild(r)}_attachScreensaverListeners(){if(this._screensaverActivityHandler)return;let t=()=>this._resetScreensaverTimer();this._screensaverActivityHandler=t,this._screensaverEvents=["mousemove","mousedown","click","keydown","wheel","scroll","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointercancel"],this._screensaverEvents.forEach(r=>{document.addEventListener(r,t,!0)})}_resetScreensaverTimer(){if(this._screensaverTimer&&(clearTimeout(this._screensaverTimer),this._screensaverTimer=null),!this._shouldUseScreensaver()){this.screensaverActive&&this._deactivateScreenSaver();return}this.screensaverActive&&this._deactivateScreenSaver();let t=Number(this.screenSaverDelay)||5*6e4;this._screensaverTimer=setTimeout(()=>{this._activateScreenSaver()},t)}_activateScreenSaver(){if(this._shouldUseScreensaver()&&(this._ensureScreenSaverOverlay(),!!this.screenSaverOverlay)){this.screensaverActive=!0,this.screenSaverOverlay.classList.add("active");try{this.tabsBar&&(this.__savedTabsDisplay=this.tabsBar.style.display,this.tabsBar.style.display="none")}catch{}this._updateScreenSaverClock(),this._clockInterval&&clearInterval(this._clockInterval),this._clockInterval=setInterval(()=>this._updateScreenSaverClock(),1e3)}}_deactivateScreenSaver(){if(this.screensaverActive){this.screensaverActive=!1,this.screenSaverOverlay&&this.screenSaverOverlay.classList.remove("active"),this._clockInterval&&(clearInterval(this._clockInterval),this._clockInterval=null);try{this.tabsBar&&(this.__savedTabsDisplay!=null?this.tabsBar.style.display=this.__savedTabsDisplay:this.tabsBar.style.display="")}catch{}this._resetScreensaverTimer()}}_updateScreenSaverClock(){let t=this.screenSaverOverlay,r=t==null?void 0:t.querySelector(".screensaver-clock"),o=t==null?void 0:t.querySelector(".screensaver-date"),c=new Date;r&&(r.textContent=c.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"})),o&&(o.textContent=c.toLocaleDateString([],{weekday:"long",year:"numeric",month:"long",day:"numeric"}));try{this._updateScreenSaverCalendar()}catch{}}_updateScreenSaverCalendar(){var S;let t=(S=this.screenSaverOverlay)==null?void 0:S.querySelector(".screensaver-calendar");if(!t)return;let r=new Date,o=void 0,c=r.getFullYear(),s=r.getMonth(),l=r.toLocaleDateString(o,{month:"long"}),u=[];for(let _=0;_<7;_++){let T=new Date(1970,0,4+_);u.push(T.toLocaleDateString(o,{weekday:"short"}))}let f=new Date(c,s,1).getDay(),v=new Date(c,s+1,0).getDate(),m=new Date(c,s,0).getDate(),y=[];for(let _=0;_<f;_++)y.push({day:m-(f-1)+_,other:!0});for(let _=1;_<=v;_++){let T=_===r.getDate();y.push({day:_,today:T,other:!1})}for(;y.length<42;){let _=y.length-f-v+1;y.push({day:_,other:!0})}let w="";w+=`<div class="calendar-header">${l} ${c}</div>`,w+='<div class="calendar-grid">';for(let _=0;_<7;_++)w+=`<div class="header">${u[_]}</div>`;y.forEach((_,T)=>{let R=[];_.other&&R.push("other-month"),_.today&&R.push("today");let C=T%7;(C===0||C===6)&&R.push("weekend"),w+=`<div class="${R.join(" ")}">${_.day}</div>`}),w+="</div>",t.innerHTML=w}_updateScreensaverSettings(){this.screenSaverEnabled?(this._ensureScreenSaverOverlay(),this._attachScreensaverListeners(),this._resetScreensaverTimer()):(this._screensaverTimer&&(clearTimeout(this._screensaverTimer),this._screensaverTimer=null),this.screensaverActive&&this._deactivateScreenSaver())}_shouldUseScreensaver(){try{if(!this.screenSaverEnabled||this.editMode||typeof this._isInHaEditorPreview=="function"&&this._isInHaEditorPreview()||!this.isConnected)return!1}catch{return!1}return!0}_toast(t){let r=new Event("hass-notification");r.detail={message:t},window.dispatchEvent(r)}_huiRoot(){var t,r,o,c,s,l;try{let u=document.querySelector("home-assistant"),f=(t=u==null?void 0:u.shadowRoot)==null?void 0:t.querySelector("home-assistant-main"),v=((r=f==null?void 0:f.shadowRoot)==null?void 0:r.querySelector("ha-drawer"))||f,m=((o=v==null?void 0:v.shadowRoot)==null?void 0:o.querySelector("partial-panel-resolver"))||v,y=((c=m==null?void 0:m.shadowRoot)==null?void 0:c.querySelector("ha-panel-lovelace"))||((s=v==null?void 0:v.shadowRoot)==null?void 0:s.querySelector("ha-panel-lovelace"));return((l=y==null?void 0:y.shadowRoot)==null?void 0:l.querySelector("hui-root"))||null}catch{return null}}getCardSize(){return 3}};if(!customElements.get("drag-and-drop-card")){if(Object.assign(ti.prototype,{_updateGridButtonsVisibility(){var o,c,s,l;let e=!!this.editMode,t=Number((l=(s=(o=this._config)==null?void 0:o.grid)!=null?s:(c=this._options)==null?void 0:c.grid)!=null?l:10)>=10,r=this.cardContainer;if(!e||!t){this._destroyGridCanvas(),r&&r.classList.toggle("grid-on",e);return}this._buildOrUpdateGridCanvas(),r&&r.classList.remove("grid-on")},_requestGridButtonsUpdateSoon(){clearTimeout(this._gridLayoutT),this._gridLayoutT=setTimeout(()=>this._updateGridButtonsVisibility(),50)},_buildOrUpdateGridCanvas(){var v,m,y,w;let e=this.cardContainer;if(!e||!e.isConnected)return;let p=Number((w=(y=(v=this._config)==null?void 0:v.grid)!=null?y:(m=this._options)==null?void 0:m.grid)!=null?w:10);if(this._gridCellSize=p,!this._gridCanvas){let S=document.createElement("canvas");S.className="ddc-grid-canvas",e.insertBefore(S,e.firstChild||null),this._gridCanvas=S,this._gridCtx=S.getContext("2d"),S.addEventListener("pointerdown",_=>this._onGridPointerDown(_),{passive:!0}),S.addEventListener("pointermove",_=>this._onGridPointerMove(_),{passive:!0}),S.addEventListener("pointerup",_=>this._onGridPointerUp(_),{passive:!0}),S.addEventListener("pointercancel",_=>this._onGridPointerCancel(_),{passive:!0}),S.addEventListener("lostpointercapture",_=>this._onGridPointerCancel(_),{passive:!0})}let t=e.getBoundingClientRect(),{sx:r,sy:o}=this._getContainerScale_(),c=r&&isFinite(r)?1/r:1,s=o&&isFinite(o)?1/o:1,l=t.width*c,u=t.height*s,f=Math.max(1,window.devicePixelRatio||1);this._gridCanvas.width=Math.max(1,Math.round(l*f)),this._gridCanvas.height=Math.max(1,Math.round(u*f)),this._gridCanvas.style.width=l+"px",this._gridCanvas.style.height=u+"px",this._gridCols=Math.max(1,Math.ceil(l/p)),this._gridRows=Math.max(1,Math.ceil(u/p)),this._buildGridTile_(p,f),this._markGridDirty()},_destroyGridCanvas(){var e;cancelAnimationFrame(this._gridRAF),this._gridRAF=0,(e=this._gridCanvas)!=null&&e.parentElement&&this._gridCanvas.parentElement.removeChild(this._gridCanvas),this._gridCanvas=null,this._gridCtx=null,this._gridTile=null,this._gridDown=!1,this._gridHoverCol=this._gridHoverRow=-1},_buildGridTile_(e,p){e=e/2;let t=Math.min(10,e*.25),r=Math.max(1,Math.round(e*p)),o=r,c=document.createElement("canvas");c.width=r,c.height=o;let s=c.getContext("2d");s.scale(p,p);let l=0,u=0,f=e,v=e;s.clearRect(0,0,r,o),s.beginPath();let m=Math.min(t,f/2,v/2);s.moveTo(l+m,u),s.arcTo(l+f,u,l+f,u+v,m),s.arcTo(l+f,u+v,l,u+v,m),s.arcTo(l,u+v,l,u,m),s.arcTo(l,u,l+f,u,m),s.closePath(),s.fillStyle="rgba(255,255,255,0.08)",s.fill(),s.strokeStyle="rgba(255,255,255,0.12)",s.lineWidth=1,s.stroke(),this._gridTile=c},_markGridDirty(){this._gridDirty||(this._gridDirty=!0,this._gridRAF=requestAnimationFrame(()=>{this._gridDirty=!1,this._renderGridCanvas_()}))},_renderGridCanvas_(){let e=this._gridCanvas;if(!e)return;let p=this._gridCtx,t=Math.max(1,window.devicePixelRatio||1),r=this._gridCellSize||10,o=this._canvasScale||1;if(p.clearRect(0,0,e.width,e.height),this._gridTile){let c=p.createPattern(this._gridTile,"repeat");p.save(),p.scale(t,t),p.fillStyle=c,p.fillRect(0,0,e.width/t,e.height/t),p.restore()}if(this._gridHoverCol>=0&&this._gridHoverRow>=0){p.save(),p.scale(t,t),p.fillStyle="rgba(0, 160, 255, 0.30)",p.strokeStyle="rgba(0, 160, 255, 0.60)",p.lineWidth=1;let c=this._gridHoverCol*r,s=this._gridHoverRow*r,l=r,u=r;this._roundRect_(p,c,s,l,u,Math.min(10,r*.25)),p.fill(),p.stroke(),p.restore()}if(this._gridDown&&this._gridStartCol>=0&&this._gridStartRow>=0&&this._gridCurrCol>=0&&this._gridCurrRow>=0){let c=Math.min(this._gridStartCol,this._gridCurrCol),s=Math.max(this._gridStartCol,this._gridCurrCol),l=Math.min(this._gridStartRow,this._gridCurrRow),u=Math.max(this._gridStartRow,this._gridCurrRow),f=c*r*o,v=l*r*o,m=(s-c+1)*r*o,y=(u-l+1)*r*o;p.save(),p.scale(t,t),p.fillStyle="rgba(0, 160, 255, 0.22)",p.strokeStyle="rgba(0, 160, 255, 0.45)",p.lineWidth=2,this._roundRect_(p,f,v,m,y,Math.min(12,r*.3)),p.fill(),p.stroke(),p.restore()}},_roundRect_(e,p,t,r,o,c){let s=Math.min(c,r/2,o/2);e.beginPath(),e.moveTo(p+s,t),e.arcTo(p+r,t,p+r,t+o,s),e.arcTo(p+r,t+o,p,t+o,s),e.arcTo(p,t+o,p,t,s),e.arcTo(p,t,p+r,t,s),e.closePath()},_emptySpaceAt_(e,p){let t=document.elementFromPoint(e,p);return!t||!t.closest||!t.closest(".card-wrapper, .resize-handle, .ddc-chip, .shield")},_locToCell_(e,p){let t=this._gridCanvas;if(!t)return{col:-1,row:-1};let r=t.getBoundingClientRect(),{sx:o,sy:c}=this._getContainerScale_(),s=(e-r.left)/(o||1),l=(p-r.top)/(c||1),u=this._gridCellSize||10,f=Math.min(this._gridCols-1,Math.max(0,Math.floor(s/u))),v=Math.min(this._gridRows-1,Math.max(0,Math.floor(l/u)));return{col:f,row:v}},_onGridPointerDown(e){var r,o;if(!this._emptySpaceAt_(e.clientX,e.clientY))return;let{col:p,row:t}=this._locToCell_(e.clientX,e.clientY);this._gridDown=!0,this._gridStartCol=p,this._gridStartRow=t,this._gridCurrCol=p,this._gridCurrRow=t,this._markGridDirty(),(o=(r=e.currentTarget).setPointerCapture)==null||o.call(r,e.pointerId)},_onGridPointerMove(e){let{col:p,row:t}=this._locToCell_(e.clientX,e.clientY);if((p!==this._gridHoverCol||t!==this._gridHoverRow)&&(this._gridHoverCol=p,this._gridHoverRow=t,this._markGridDirty()),!this._gridDown)return;let{col:r,row:o}=this._locToCell_(e.clientX,e.clientY);(r!==this._gridCurrCol||o!==this._gridCurrRow)&&(this._gridCurrCol=r,this._gridCurrRow=o,this._markGridDirty())},async _onGridPointerUp(e){if(!this._gridDown)return;this._gridDown=!1;let p=Math.min(this._gridStartCol,this._gridCurrCol),t=Math.max(this._gridStartCol,this._gridCurrCol),r=Math.min(this._gridStartRow,this._gridCurrRow),o=Math.max(this._gridStartRow,this._gridCurrRow);if((t-p+1)*(o-r+1)<2){this._markGridDirty();return}let s=this._gridCellSize||10,l=p*s,u=r*s,f=(t-p+1)*s,v=(o-r+1)*s;this._markGridDirty(),this._promptNewCardForRect_({x:l,y:u,w:f,h:v})},_onGridPointerCancel(){this._gridDown=!1,this._markGridDirty()},_installGridObservers_(){try{this.__gridRO&&this.__gridRO.disconnect(),this.__gridRO=new ResizeObserver(()=>this._requestGridButtonsUpdateSoon()),this.cardContainer&&this.__gridRO.observe(this.cardContainer)}catch{}clearInterval(this.__gridPollT),this.__gridPrevEditMode=void 0,this.__gridPollT=setInterval(()=>{let e=!!this.editMode;e!==this.__gridPrevEditMode&&(this.__gridPrevEditMode=e,this._updateGridButtonsVisibility())},300)},_uninstallGridObservers_(){var e,p;try{(p=(e=this.__gridRO)==null?void 0:e.disconnect)==null||p.call(e)}catch{}this.__gridRO=null,clearInterval(this.__gridPollT),this.__gridPollT=null},_gridRectToCardRect_({x:e,y:p,w:t,h:r}){let o=this.cardContainer,c=this._gridCanvas;if(!o||!c)return{x:e,y:p,w:t,h:r};let s=getComputedStyle(o),l=parseFloat(s.paddingLeft)||0,u=parseFloat(s.paddingTop)||0,f=parseFloat(s.borderLeftWidth)||0,v=parseFloat(s.borderTopWidth)||0,m=o.scrollLeft||0,y=o.scrollTop||0,w=e+l+f+m,S=p+u+v+y;return{x:w,y:S,w:t,h:r}},_getContainerScale_(){let e=this.cardContainer;if(!e)return{sx:1,sy:1};let p=getComputedStyle(e).transform;if(!p||p==="none")return{sx:1,sy:1};let t=p.match(/matrix\(([^)]+)\)/);if(t){let[o,,,c]=t[1].split(",").map(s=>parseFloat(s.trim()));return{sx:isFinite(o)&&o?o:1,sy:isFinite(c)&&c?c:1}}let r=p.match(/matrix3d\(([^)]+)\)/);if(r){let o=r[1].split(",").map(c=>parseFloat(c.trim()));return{sx:isFinite(o[0])&&o[0]?o[0]:1,sy:isFinite(o[5])&&o[5]?o[5]:1}}return{sx:1,sy:1}},_canvasRectToContainerRect_({x:e,y:p,w:t,h:r}){let o=this.cardContainer,c=this._gridCanvas;if(!o||!c)return{x:e,y:p,w:t,h:r};let s=getComputedStyle(o),l=parseFloat(s.paddingLeft)||0,u=parseFloat(s.paddingTop)||0,f=parseFloat(s.borderLeftWidth)||0,v=parseFloat(s.borderTopWidth)||0,{sx:m,sy:y}=this._getContainerScale_(),w=c.getBoundingClientRect(),S=o.getBoundingClientRect(),_=w.left+e,T=w.top+p,R=_-S.left,C=T-S.top;R-=l+f,C-=u+v;let O=m?1/m:1,z=y?1/y:1,b=R*O,M=C*z,I=t*O,F=r*z;return{x:b,y:M,w:I,h:F}},async _promptNewCardForRect_({x:e,y:p,w:t,h:r}){var o,c,s,l,u;try{let f=this._gridCellSize||Number((l=(s=(o=this._config)==null?void 0:o.grid)!=null?s:(c=this._options)==null?void 0:c.grid)!=null?l:10),v=R=>Math.round(R/f)*f,m=v(e),y=v(p),w=Math.max(f,v(t)),S=Math.max(f,v(r)),_;try{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&typeof this._canvasRectToContainerRect_=="function"?_=this._canvasRectToContainerRect_({x:m,y,w,h:S}):typeof this._gridRectToCardRect_=="function"?_=this._gridRectToCardRect_({x:m,y,w,h:S}):_={x:m,y,w,h:S}}catch{_={x:m,y,w,h:S}}let T={x:Math.round(_.x),y:Math.round(_.y),w:Math.round(_.w),h:Math.round(_.h)};try{let R=this.cardContainer;if(R){let C=Array.from(R.querySelectorAll(".card-wrapper:not(.ddc-placeholder)")),O=this._normalizeTabId(this.activeTab||this.defaultTab),z=(M,I)=>!(I.x>=M.x+M.w||I.x+I.w<=M.x||I.y>=M.y+M.h||I.y+I.h<=M.y),b=0;for(let M of C){if((M.dataset.tabId?this._normalizeTabId(M.dataset.tabId):O)!==O)continue;let F=getComputedStyle(M);if(F.display==="none"||F.visibility==="hidden")continue;let N=parseFloat(M.getAttribute("data-x"))||0,H=parseFloat(M.getAttribute("data-y"))||0,Q=parseFloat(M.style.width)||M.getBoundingClientRect().width,B=parseFloat(M.style.height)||M.getBoundingClientRect().height;if(z(T,{x:N,y:H,w:Q,h:B})&&(b++,b>=2))break}if(b>=2){this.__pendingAddRect=null;try{(u=this._toast)==null||u.call(this,"Area already contains multiple cards.")}catch{}return}}}catch(R){console.warn("[ddc] selection-area card count check failed",R)}this.__pendingAddRect=T,await this._openSmartPicker("add",null,null)}catch(f){console.warn("[ddc] _promptNewCardForRect_ failed",f)}}}),!ti.prototype.__addPickedPatched){let e=ti.prototype._addPickedCardToLayout;ti.prototype._addPickedCardToLayout=async function(p){var t,r,o,c,s,l,u,f,v;if(this&&this.__pendingAddRect){let{x:m,y,w,h:S}=this.__pendingAddRect;this.__pendingAddRect=null;try{(t=this._hideEmptyPlaceholder)==null||t.call(this)}catch{}let _=await this._createCard(p),T=this._makeWrapper(_),C=String(this.containerSizeMode||this.container_size_mode||((r=this._config)==null?void 0:r.container_size_mode)||"dynamic").toLowerCase()==="auto",O=C?-11:11,z=C?-11:11,b=Math.round(m)-O,M=Math.round(y)-z;this._setCardPosition(T,b,M),T.style.width=`${Math.round(w)}px`,T.style.height=`${Math.round(S)}px`;{let I=this._highestZ()+1;T.style.zIndex=String(Math.max(I,6))}T.dataset.tabId=this._normalizeTabId(this.activeTab||this.defaultTab),this.cardContainer.appendChild(T);try{(o=this._rebuildOnce)==null||o.call(this,T.firstElementChild)}catch{}try{(c=this._initCardInteract)==null||c.call(this,T)}catch{}try{(s=this._resizeContainer)==null||s.call(this)}catch{}try{(l=this._queueSave)==null||l.call(this,"add")}catch{}try{(u=this._toast)==null||u.call(this,"Card added to selection.")}catch{}try{(f=this._syncEmptyStateUI)==null||f.call(this)}catch{}try{(v=this._applyVisibility_)==null||v.call(this)}catch{}requestAnimationFrame(()=>{var I,F,N,H;try{String(this.containerSizeMode||this.container_size_mode||((I=this._config)==null?void 0:I.container_size_mode)||"dynamic").toLowerCase()==="auto"?(F=this._applyAutoFillNoScale)==null||F.call(this):this.autoResizeCards&&((N=this._applyAutoScale)==null||N.call(this)),(H=this._requestGridButtonsUpdateSoon)==null||H.call(this)}catch{}});return}return await e.call(this,p)},ti.prototype.__addPickedPatched=!0}customElements.define("drag-and-drop-card",ti);try{Array.isArray(window.customCards)||(window.customCards=[]),window.customCards.some(p=>p&&typeof p.type=="string"&&p.type.toLowerCase()==="custom:drag-and-drop-card")||window.customCards.push({type:"drag-and-drop-card",name:"Drag & Drop Card",description:"Flexible grid layout card with drag\u2011and\u2011drop editing.",preview:!1,icon:"mdi:cursor-move"})}catch(e){console.warn("[drag-and-drop-card] Failed to register card in customCards",e)}}(()=>{let e=new WeakSet,p=s=>{try{if(!(s instanceof Element))return!1;let l=s.localName||"";return l?!!(l==="ha-card"||l.endsWith("-card")):!1}catch{return!1}},t=s=>{try{if(!s||e.has(s))return;e.add(s),s.dispatchEvent(new Event("ll-rebuild",{bubbles:!0,composed:!0}))}catch{}},r=s=>{var l,u;try{if(!s)return;s instanceof Element&&p(s)&&t(s);let f=(u=(l=(s instanceof ShadowRoot,s)).querySelectorAll)==null?void 0:u.call(l,"*");if(!f)return;for(let v of f){p(v)&&t(v);let m=v.shadowRoot;if(m)try{r(m)}catch{}}}catch{}},o=s=>{try{if(!s||s.__ddcCardModIntegrated)return;s.__ddcCardModIntegrated=!0;let l=s.shadowRoot||s;r(l);let u=new MutationObserver(f=>{for(let v of f)if(!(!v.addedNodes||!v.addedNodes.length))for(let m of v.addedNodes)(m instanceof Element||m instanceof ShadowRoot)&&r(m)});u.observe(l,{childList:!0,subtree:!0}),s.__ddcCardModIntegratedObserver=u,setTimeout(()=>{try{r(l)}catch{}},250),setTimeout(()=>{try{r(l)}catch{}},1e3)}catch{}},c=()=>{try{document.querySelectorAll("drag-and-drop-card").forEach(o)}catch{}};if(window.customElements&&window.customElements.whenDefined)window.customElements.whenDefined("drag-and-drop-card").then(()=>{c();let s=window.customElements.get("drag-and-drop-card");if(s&&s.prototype){let u=s.prototype.connectedCallback;s.prototype.connectedCallback=function(){try{u&&u.call(this)}finally{o(this)}}}new MutationObserver(()=>c()).observe(document.documentElement,{childList:!0,subtree:!0})});else{let s=setInterval(c,1e3);setTimeout(()=>clearInterval(s),1e4)}})();(function(){let e="drag-and-drop-card",p=customElements.get(e);if(!p){console.warn("[ddc:augment] Could not find custom element",e);return}function t(){var _,T;try{let R=0,C=this;for(;C&&R++<20;){let b=(_=C.getRootNode)==null?void 0:_.call(C),M=b==null?void 0:b.host;if((M==null?void 0:M.tagName)==="HUI-ROOT")return M.lovelace;C=M||C.parentElement}let O=new Set,z=[document];for(;z.length;){let b=z.shift();if(!(!b||O.has(b))){if(O.add(b),((T=b.host)==null?void 0:T.tagName)==="HUI-ROOT")return b.host.lovelace;if(b.tagName==="HUI-ROOT")return b.lovelace;if(b.shadowRoot&&z.push(b.shadowRoot),b.children)for(let M of b.children)z.push(M)}}}catch{}}function r(_){let T=[],R=(O,z,b)=>{(b==null?void 0:b.type)==="custom:drag-and-drop-card"&&T.push({view:O,path:[...z],card:b})},C=(O,z,b)=>{if(O){if(Array.isArray(O)){O.forEach((M,I)=>C(M,z,b.concat(I)));return}if(typeof O=="object"){"type"in O&&R(z,b,O);for(let[M,I]of Object.entries(O))M==="views"&&Array.isArray(I)?I.forEach((F,N)=>C(F,N,["views",N])):(Array.isArray(I)||I&&typeof I=="object")&&C(I,z,b.concat(M))}}};return C(_,-1,[]),T}function o(_,T,R){let C=new Date().toISOString().replace(/[:.]/g,"-"),O=T.map(b=>{let M=_;for(let I of b.path)M=M[I];return{view:b.view,path:b.path,storage_key:M&&M.storage_key||null,before:M,patch:R}}),z={kind:"ddc-import-backup",created_at:C,count:O.length,items:O};try{let b=`ddc.backup.${C}`;localStorage.setItem(b,JSON.stringify(z));let M=Object.keys(localStorage).filter(I=>I.startsWith("ddc.backup.")).sort().reverse();for(let I of M.slice(10))localStorage.removeItem(I)}catch{}return{name:`ddc_backup_${C}.json`,data:z}}function c(_,T){try{let R=new Blob([JSON.stringify(T,null,2)],{type:"application/json"}),C=URL.createObjectURL(R),O=document.createElement("a");O.href=C,O.download=_,document.body.appendChild(O),O.click(),O.remove(),setTimeout(()=>URL.revokeObjectURL(C),1500)}catch(R){console.warn("[ddc:backup] download failed",R)}}function s(_){if(_)try{let T="ddc.recent.keys",R=JSON.parse(localStorage.getItem(T)||"[]");R.includes(_)||R.unshift(_),localStorage.setItem(T,JSON.stringify(R.slice(0,20)))}catch{}}function l(){try{return JSON.parse(localStorage.getItem("ddc.recent.keys")||"[]")}catch{return[]}}function u(){var T,R;let _=new Set;try{let C=Object.keys(localStorage).filter(O=>O.startsWith("ddc.backup.")).sort().reverse();for(let O of C)try{let z=JSON.parse(localStorage.getItem(O)||"null");if(z&&z.items)for(let b of z.items){let M=((T=b==null?void 0:b.before)==null?void 0:T.storage_key)||((R=b==null?void 0:b.patch)==null?void 0:R.storage_key);M&&_.add(M)}}catch{}}catch{}return Array.from(_)}async function f(_,{forceTargetKey:T=null,onlyThisCard:R=!1,prevKey:C,noDownload:O}={}){var le,_e,Re,ge,fe;let z=((le=this._getLovelace)==null?void 0:le.call(this))||t.call(this);if(!z)return console.debug("[ddc:import] persist: no lovelace root"),!1;if(typeof z.saveConfig!="function")return console.debug("[ddc:import] persist: dashboard not in Storage mode"),!1;let b=he=>typeof he=="string"?he.trim():null,M=b(T)||b((_e=this==null?void 0:this._config)==null?void 0:_e.storage_key)||b(this==null?void 0:this.storageKey)||b(C);if(!M)return console.warn("[ddc:import] persist: missing target storage_key on this card; aborting"),!1;let I=JSON.parse(JSON.stringify(z.config)),F=(this._scanDdcCards||r)(I);console.debug("[ddc:import] persist: found DDC cards",F.map(he=>({view:he.view,path:he.path.join("."),storage_key:he.card&&(he.card.storage_key||he.card.storageKey)||null})));let N=F.filter(he=>{var Ye,Oe,Ue,ot,st,re,ut,ct,Ie;return((Ie=(re=(Ue=b((Ye=he.card)==null?void 0:Ye.storage_key))!=null?Ue:b((Oe=he.card)==null?void 0:Oe.storageKey))!=null?re:b((st=(ot=he.card)==null?void 0:ot.options)==null?void 0:st.storage_key))!=null?Ie:b((ct=(ut=he.card)==null?void 0:ut.options)==null?void 0:ct.storageKey))===M});if(N.length!==1)return console.warn("[ddc:import] persist: expected exactly one target with key, got",N.length,{myKey:M}),!1;let H={type:"custom:drag-and-drop-card",..._||{}};"storage_key"in H&&delete H.storage_key,"storageKey"in H&&delete H.storageKey,H!=null&&H.options&&("storage_key"in H.options&&delete H.options.storage_key,"storageKey"in H.options&&delete H.options.storageKey);let Q=Array.isArray(H.cards)?H.cards:null;delete H.cards;try{let he=o==null?void 0:o(z.config,N,H);he&&(console.debug("[ddc:import] backup created",{file:he.name,items:(Re=he.data)==null?void 0:Re.count}),!O&&typeof c=="function"&&c(he.name,he.data))}catch(he){console.debug("[ddc:import] backup skipped/error:",(he==null?void 0:he.message)||he)}let B=N[0],V=I;for(let he of B.path)V=V[he];let $=(fe=(ge=b(V==null?void 0:V.storage_key))!=null?ge:b(V==null?void 0:V.storageKey))!=null?fe:null;return Object.assign(V,H),$?V.storage_key=$:V.storage_key=M,"storageKey"in V&&delete V.storageKey,console.debug("[ddc:import] persist \u2192 saving",{patched:1,into_key:V.storage_key,ignored_file_key:b(_==null?void 0:_.storage_key)||b(_==null?void 0:_.storageKey)||null}),await z.saveConfig(I),{yamlSaved:!0,cardsForStorage:Q}}async function v(){var R;let _=C=>{if(!C)return[];if(Array.isArray(C))return C;if(Array.isArray(C==null?void 0:C.keys))return C.keys;if(Array.isArray(C==null?void 0:C.dashboards))return C.dashboards;if(Array.isArray(C==null?void 0:C.entries))return C.entries.map(O=>O.key||O.id||O.name).filter(Boolean);if(Array.isArray(C==null?void 0:C.items))return C.items.map(O=>O.key||O.id||O.name).filter(Boolean);if(typeof C=="object"){for(let O of Object.values(C))if(Array.isArray(O)&&O.every(z=>typeof z=="string"))return O}return[]};try{if((R=this==null?void 0:this.hass)!=null&&R.callApi){let C=await this.hass.callApi("get","dragdrop_storage"),O=_(C);if(O.length)return O}}catch(C){console.debug("[ddc:switcher] hass.callApi dragdrop_storage failed",C)}let T=["/api/dragdrop_storage","/api/dragdrop_storage/keys","/api/dragdrop_storage/list","/api/dragdrop_storage?all=1"];for(let C of T)try{let z=await(await fetch(C,{cache:"no-store"})).json(),b=_(z);if(b.length)return b}catch{}return[]}async function m(_){let T=z=>{if(!z)return null;if(z.options||z.cards)return z;if(typeof z.design=="object")return z.design;if(typeof z.payload=="object")return z.payload;try{if(typeof z=="string")return JSON.parse(z)}catch{}return null},R=async(z,b,M)=>{var I;try{if((I=this==null?void 0:this.hass)!=null&&I.callApi){let F=await this.hass.callApi(z,b,M),N=T(F);if(N)return N}}catch{}return null},C=async z=>{try{let b=await fetch(z,{cache:"no-store"}),M=b.headers.get("content-type")||"";if(M.includes("application/json")||M.includes("text/plain")){let I=await b.json().catch(()=>null)||await b.text().catch(()=>null),F=T(I);if(F)return F}}catch{}return null},O=encodeURIComponent(_);return await(R("get",`dragdrop_storage/${O}`)||C(`/api/dragdrop_storage/${O}`)||C(`/api/dragdrop_storage?key=${O}`)||R("post","dragdrop_storage/get",{key:_})||null)}async function y(_,{source:T="switcher",newKey:R=null}={}){var z,b,M,I,F,N,H,Q,B,V,$,le,_e,Re,ge,fe,he,He,Ye,Oe,Ue,ot,st,re,ut,ct;if(!_||typeof _!="object")throw new Error("Invalid design payload");let C=this.storageKey||((z=this._config)==null?void 0:z.storage_key)||null;try{(b=this._dbgInit)==null||b.call(this),(M=this._dbgPush)==null||M.call(this,"import","Begin import (programmatic)",{source:T,newKey:R})}catch{}if(_.options){let{storage_key:Ie,...ae}=_.options;(I=this._applyImportedOptions)==null||I.call(this,ae,!0)}else typeof _.grid=="number"&&((F=this._applyImportedOptions)==null||F.call(this,{grid:_.grid},!0));let O=R||((N=_==null?void 0:_.options)==null?void 0:N.storage_key)||C;if(O){this.storageKey=O,this._config={...this._config||{},storage_key:O};try{(H=this._syncEditorsStorageKey)==null||H.call(this)}catch{}}try{let Ie=(Q=_.options)!=null?Q:typeof _.grid=="number"?{grid:_.grid}:{};await((B=this._persistOptionsToYaml)==null?void 0:B.call(this,{...Ie,storage_key:O},{prevKey:C,noDownload:T==="switcher"}))}catch(Ie){console.warn("[ddc:apply] persist failed",Ie)}try{if(this.cardContainer.innerHTML="",Array.isArray(_.cards)&&_.cards.length)for(let Ie of _.cards)if(!(Ie!=null&&Ie.card)||typeof Ie.card=="object"&&Object.keys(Ie.card).length===0){let ae=(Re=this._makePlaceholderAt)==null?void 0:Re.call(this,((V=Ie.position)==null?void 0:V.x)||0,(($=Ie.position)==null?void 0:$.y)||0,((le=Ie.size)==null?void 0:le.width)||200,((_e=Ie.size)==null?void 0:_e.height)||200);ae&&this.cardContainer.appendChild(ae)}else{let ae=await this._createCard(Ie.card),$e=this._makeWrapper(ae);(he=this._setCardPosition)==null||he.call(this,$e,((ge=Ie.position)==null?void 0:ge.x)||0,((fe=Ie.position)==null?void 0:fe.y)||0),$e.style.width=`${((He=Ie.size)==null?void 0:He.width)||140}px`,$e.style.height=`${((Ye=Ie.size)==null?void 0:Ye.height)||100}px`,Ie.z!=null&&($e.style.zIndex=String(Ie.z)),this.cardContainer.appendChild($e);try{(Oe=this._rebuildOnce)==null||Oe.call(this,$e.firstElementChild)}catch{}(Ue=this._initCardInteract)==null||Ue.call(this,$e)}else(ot=this._showEmptyPlaceholder)==null||ot.call(this);(st=this._resizeContainer)==null||st.call(this),(re=this._markDirty)==null||re.call(this,"import"),(ut=this._toast)==null||ut.call(this,T==="switcher"?`Loaded layout "${O}"`:"Design imported")}catch(Ie){console.error("[ddc:apply] rebuild failed",Ie),(ct=this._toast)==null||ct.call(this,"Import failed during rebuild.")}}function w(){var _,T;try{let R=this.shadowRoot||this.renderRoot||this,C=R.querySelector(".ddc-switcher-inline");if(!C)return;let O=((_=this._getLovelace)==null?void 0:_.call(this))||t.call(this),z=!1;try{let b=(T=R.getRootNode&&R.getRootNode())==null?void 0:T.host;z=!!(O&&(O.editMode===!0||b&&b.editMode===!0))}catch{}C.style.display=z?"inline-flex":"none"}catch{}}function S(){try{if(this._ddcSwitcherInstalled)return;let T=(this.shadowRoot||this.renderRoot||this).querySelector(".toolbar");if(!T)return;let R=document.createElement("div");R.className="ddc-switcher-inline",Object.assign(R.style,{display:"inline-flex",gap:"6px",alignItems:"center",marginLeft:"auto"});let C=document.createElement("span");C.textContent="Layout:",C.style.fontSize="12px",C.style.opacity="0.8";let O=document.createElement("select");Object.assign(O.style,{fontSize:"12px",padding:"4px 6px",borderRadius:"8px",border:"1px solid var(--divider-color, #999)",background:"var(--card-background-color, #fff)"}),O.title="Select stored layout (storage_key)",O.id="ddcKeySelect";let z=document.createElement("button");z.className="btn secondary",z.type="button",z.style.padding="6px 10px",z.innerHTML='<ha-icon icon="mdi:refresh"></ha-icon><span style="margin-left:6px">Refresh</span>';let b=document.createElement("button");b.className="btn secondary",b.type="button",b.style.padding="6px 10px",b.style.display="inline-flex",b.style.alignItems="center",b.style.gap="6px",b.style.background="#ef4444",b.style.color="#fff",b.style.border="none",b.style.borderRadius="8px",b.style.cursor="pointer",b.style.fontWeight="600",b.innerHTML='<ha-icon icon="mdi:trash-can-outline"></ha-icon><span style="margin-left:6px">Delete</span>',b.title="Delete selected layout";let M=document.createElement("button");M.className="btn secondary",M.type="button",M.style.padding="6px 10px",M.style.display="inline-flex",M.style.alignItems="center",M.style.gap="6px",M.style.background="#3b82f6",M.style.color="#fff",M.style.border="none",M.style.borderRadius="8px",M.style.cursor="pointer",M.style.fontWeight="600",M.innerHTML='<ha-icon icon="mdi:undo"></ha-icon><span style="margin-left:6px">Restore</span>',M.title="Restore last deleted layout",R.appendChild(C),R.appendChild(O),R.appendChild(z),R.appendChild(b),R.appendChild(M),T.appendChild(R),this._ddcSwitcherInstalled=!0;let I=async()=>{let F=this.storageKey||this._config&&this._config.storage_key||"",N=await v.call(this),H=u(),Q=l(),B=fe=>Array.from(new Set(fe.filter(Boolean))),V=[];try{V=JSON.parse(localStorage.getItem("ddc.deleted.keys")||"[]")}catch{}let $=[...this._ddcDeletedKeys||[],...V],le=B(N).filter(fe=>!$.includes(fe)),_e=B(H).filter(fe=>!$.includes(fe)),Re=B(Q).filter(fe=>!$.includes(fe));if(O.innerHTML="",F&&!$.includes(F)&&!le.includes(F)&&!_e.includes(F)&&!Re.includes(F)){let fe=document.createElement("option");fe.value=F,fe.textContent=`${F} (current)`,fe.selected=!0,O.appendChild(fe)}let ge=(fe,he)=>{if(!he.length)return;let He=document.createElement("optgroup");He.label=fe,he.forEach(Ye=>{let Oe=document.createElement("option");Oe.value=Ye,Oe.textContent=`${Ye}`,Ye===F&&(Oe.selected=!0),He.appendChild(Oe)}),O.appendChild(He)};if(ge("Server",le),ge("Backups",_e),ge("Recent",Re),!O.children.length){let fe=document.createElement("option");fe.value="",fe.textContent="\u2014 none \u2014",fe.selected=!0,O.appendChild(fe)}w.call(this);try{let fe=O.value||"";b.disabled=!fe,M.disabled=!(this._ddcDeletedLayouts&&this._ddcDeletedLayouts.length)}catch{}};I(),z.addEventListener("click",I),b.addEventListener("click",async()=>{var Q,B,V,$,le;let F=O.value||"";if(!F){(Q=this._toast)==null||Q.call(this,"No layout selected.");return}try{if(typeof window!="undefined"&&window.confirm&&!window.confirm(`Delete layout "${F}"?`))return}catch{}let N=null;try{N=await m.call(this,F)}catch{}N&&(this._ddcDeletedLayouts||(this._ddcDeletedLayouts=[]),this._ddcDeletedLayouts.unshift({key:F,design:N}),this._ddcDeletedLayouts=this._ddcDeletedLayouts.slice(0,5));try{this._ddcDeletedKeys||(this._ddcDeletedKeys=[]),this._ddcDeletedKeys.includes(F)||this._ddcDeletedKeys.push(F)}catch{}try{let _e=JSON.parse(localStorage.getItem("ddc.deleted.keys")||"[]");_e.includes(F)||(_e.push(F),localStorage.setItem("ddc.deleted.keys",JSON.stringify(_e)))}catch{}let H=!1;try{(B=this==null?void 0:this.hass)!=null&&B.callApi&&(await this.hass.callApi("delete",`dragdrop_storage/${encodeURIComponent(F)}`),H=!0)}catch{H=!1}if(!H)try{(V=this==null?void 0:this.hass)!=null&&V.callApi&&(await this.hass.callApi("delete",`drag_and_drop_card_backend/${encodeURIComponent(F)}`),H=!0)}catch{H=!1}if(!H)try{let _e=await fetch(`/api/drag_and_drop_card_backend/${encodeURIComponent(F)}`,{method:"DELETE"});_e&&_e.ok&&(H=!0)}catch{}try{localStorage.removeItem(`ddc_local_${F}`)}catch{}H?($=this._toast)==null||$.call(this,`Deleted layout "${F}"`):(le=this._toast)==null||le.call(this,`Failed to delete layout "${F}"`),await I()}),M.addEventListener("click",async()=>{var B,V,$,le;if(!this._ddcDeletedLayouts||this._ddcDeletedLayouts.length===0){(B=this._toast)==null||B.call(this,"Nothing to restore.");return}let F=this._ddcDeletedLayouts.shift(),N=F.key,H=F.design,Q=!1;try{(V=this==null?void 0:this.hass)!=null&&V.callApi&&(await this.hass.callApi("post",`dragdrop_storage/${encodeURIComponent(N)}`,H),Q=!0)}catch{}if(!Q)try{let _e=await fetch(`/api/dragdrop_storage/${encodeURIComponent(N)}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(H)});_e&&_e.ok&&(Q=!0)}catch{}try{localStorage.setItem(`ddc_local_${N}`,JSON.stringify(H))}catch{}Q?($=this._toast)==null||$.call(this,`Restored layout "${N}"`):(le=this._toast)==null||le.call(this,`Failed to restore layout "${N}"`);try{this._ddcDeletedKeys&&(this._ddcDeletedKeys=this._ddcDeletedKeys.filter(_e=>_e!==N))}catch{}try{let _e=JSON.parse(localStorage.getItem("ddc.deleted.keys")||"[]"),Re=_e.indexOf(N);Re>=0&&(_e.splice(Re,1),localStorage.setItem("ddc.deleted.keys",JSON.stringify(_e)))}catch{}await I()}),O.addEventListener("change",async F=>{var H,Q,B,V,$,le,_e,Re;let N=String(F.target.value||"");if(N&&!this._ddcLoadingFromKey){this._ddcLoadingFromKey=!0;try{let ge=await m.call(this,N);if(!ge){(H=this._toast)==null||H.call(this,`No layout found for "${N}"`);return}await y.call(this,ge,{source:"switcher",newKey:N}),(Q=this._resizeContainer)==null||Q.call(this),(B=this._toast)==null||B.call(this,`Loaded layout "${N}"`);let fe=String(((V=this._config)==null?void 0:V.storage_key)||this.storageKey||""),he=!1;try{let He=fe?{forceTargetKey:fe,noDownload:!0}:{noDownload:!0};he=await this._persistOptionsToYaml({storage_key:N},He)}catch(He){console.warn("[ddc:switcher] failed to persist storage_key to YAML",He),($=this._toast)==null||$.call(this,"Failed to persist selected layout. Keeping current.");return}if(this.storageKey=N,this._config&&(this._config.storage_key=N),!he){console.warn("[ddc:switcher] persist returned false (likely YAML mode). Skipping reload.");return}try{this._saveTimer&&clearTimeout(this._saveTimer),await this._saveLayout(!0)}catch(He){console.warn("[ddc:switcher] saveLayout failed",He),(le=this._markDirty)==null||le.call(this,"switcher"),(_e=this._toast)==null||_e.call(this,"Layout loaded \u2014 click Apply to save.");return}window.location.reload(),window.location.reload()}catch(ge){console.warn("[ddc:switcher] load/apply failed",ge),(Re=this._toast)==null||Re.call(this,"Failed to load layout.")}finally{this._ddcLoadingFromKey=!1}}}),this._ddcVisTimer&&clearInterval(this._ddcVisTimer),this._ddcVisTimer=setInterval(()=>w.call(this),800),w.call(this)}catch(_){console.warn("[ddc:switcher] inline install failed",_)}}p.prototype._getLovelace||(p.prototype._getLovelace=t),p.prototype._scanDdcCards||(p.prototype._scanDdcCards=r),p.prototype._persistOptionsToYaml=f,p.prototype._applyDesignObject||(p.prototype._applyDesignObject=y);try{let _=Object.getOwnPropertyDescriptor(p.prototype,"hass");if(_&&(_.set||_.get)){let T=_.set;Object.defineProperty(p.prototype,"hass",{configurable:!0,enumerable:!0,set(R){T&&T.call(this,R);try{S.call(this)}catch{}},get:_.get||function(){return this._hass}})}else if(typeof p.prototype.setHass=="function"){let T=p.prototype.setHass;p.prototype.setHass=function(R){T&&T.call(this,R);try{S.call(this)}catch{}}}else{let T=p.prototype.updated||p.prototype.firstUpdated;p.prototype.updated=function(...R){T&&T.apply(this,R);try{S.call(this)}catch{}}}}catch(_){console.warn("[ddc:switcher] wrap hass setter failed",_)}})();
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
