var zo=Object.create;var pn=Object.defineProperty;var Do=Object.getOwnPropertyDescriptor;var Io=Object.getOwnPropertyNames;var Bo=Object.getPrototypeOf,No=Object.prototype.hasOwnProperty;var Fo=(i,w,e)=>w in i?pn(i,w,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[w]=e;var Ho=(i,w)=>()=>(w||i((w={exports:{}}).exports,w),w.exports);var qo=(i,w,e,t)=>{if(w&&typeof w=="object"||typeof w=="function")for(let r of Io(w))!No.call(i,r)&&r!==e&&pn(i,r,{get:()=>w[r],enumerable:!(t=Do(w,r))||t.enumerable});return i};var $o=(i,w,e)=>(e=i!=null?zo(Bo(i)):{},qo(w||!i||!i.__esModule?pn(e,"default",{value:i,enumerable:!0}):e,i));var Ot=(i,w,e)=>Fo(i,typeof w!="symbol"?w+"":w,e);var Tn=Ho((hn,Hi)=>{(function(i,w){typeof hn=="object"&&typeof Hi!="undefined"?Hi.exports=w():typeof define=="function"&&define.amd?define(w):(i=typeof globalThis!="undefined"?globalThis:i||self).interact=w()})(hn,(function(){"use strict";function i(o,n){var d=Object.keys(o);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(o);n&&(f=f.filter((function(y){return Object.getOwnPropertyDescriptor(o,y).enumerable}))),d.push.apply(d,f)}return d}function w(o){for(var n=1;n<arguments.length;n++){var d=arguments[n]!=null?arguments[n]:{};n%2?i(Object(d),!0).forEach((function(f){s(o,f,d[f])})):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(d)):i(Object(d)).forEach((function(f){Object.defineProperty(o,f,Object.getOwnPropertyDescriptor(d,f))}))}return o}function e(o){return e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},e(o)}function t(o,n){if(!(o instanceof n))throw new TypeError("Cannot call a class as a function")}function r(o,n){for(var d=0;d<n.length;d++){var f=n[d];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(o,m(f.key),f)}}function a(o,n,d){return n&&r(o.prototype,n),d&&r(o,d),Object.defineProperty(o,"prototype",{writable:!1}),o}function s(o,n,d){return(n=m(n))in o?Object.defineProperty(o,n,{value:d,enumerable:!0,configurable:!0,writable:!0}):o[n]=d,o}function c(o,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(n&&n.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),Object.defineProperty(o,"prototype",{writable:!1}),n&&g(o,n)}function l(o){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},l(o)}function g(o,n){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(d,f){return d.__proto__=f,d},g(o,n)}function h(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function u(o){var n=(function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch{return!1}})();return function(){var d,f=l(o);if(n){var y=l(this).constructor;d=Reflect.construct(f,arguments,y)}else d=f.apply(this,arguments);return(function(k,T){if(T&&(typeof T=="object"||typeof T=="function"))return T;if(T!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return h(k)})(this,d)}}function p(){return p=typeof Reflect!="undefined"&&Reflect.get?Reflect.get.bind():function(o,n,d){var f=(function(k,T){for(;!Object.prototype.hasOwnProperty.call(k,T)&&(k=l(k))!==null;);return k})(o,n);if(f){var y=Object.getOwnPropertyDescriptor(f,n);return y.get?y.get.call(arguments.length<3?o:d):y.value}},p.apply(this,arguments)}function m(o){var n=(function(d,f){if(typeof d!="object"||d===null)return d;var y=d[Symbol.toPrimitive];if(y!==void 0){var k=y.call(d,f||"default");if(typeof k!="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return(f==="string"?String:Number)(d)})(o,"string");return typeof n=="symbol"?n:n+""}var x=function(o){return!(!o||!o.Window)&&o instanceof o.Window},_=void 0,P=void 0;function O(o){_=o;var n=o.document.createTextNode("");n.ownerDocument!==o.document&&typeof o.wrap=="function"&&o.wrap(n)===n&&(o=o.wrap(o)),P=o}function C(o){return x(o)?o:(o.ownerDocument||o).defaultView||P.window}typeof window!="undefined"&&window&&O(window);var S=function(o){return!!o&&e(o)==="object"},v=function(o){return typeof o=="function"},b={window:function(o){return o===P||x(o)},docFrag:function(o){return S(o)&&o.nodeType===11},object:S,func:v,number:function(o){return typeof o=="number"},bool:function(o){return typeof o=="boolean"},string:function(o){return typeof o=="string"},element:function(o){if(!o||e(o)!=="object")return!1;var n=C(o)||P;return/object|function/.test(typeof Element=="undefined"?"undefined":e(Element))?o instanceof Element||o instanceof n.Element:o.nodeType===1&&typeof o.nodeName=="string"},plainObject:function(o){return S(o)&&!!o.constructor&&/function Object\b/.test(o.constructor.toString())},array:function(o){return S(o)&&o.length!==void 0&&v(o.splice)}};function A(o){var n=o.interaction;if(n.prepared.name==="drag"){var d=n.prepared.axis;d==="x"?(n.coords.cur.page.y=n.coords.start.page.y,n.coords.cur.client.y=n.coords.start.client.y,n.coords.velocity.client.y=0,n.coords.velocity.page.y=0):d==="y"&&(n.coords.cur.page.x=n.coords.start.page.x,n.coords.cur.client.x=n.coords.start.client.x,n.coords.velocity.client.x=0,n.coords.velocity.page.x=0)}}function E(o){var n=o.iEvent,d=o.interaction;if(d.prepared.name==="drag"){var f=d.prepared.axis;if(f==="x"||f==="y"){var y=f==="x"?"y":"x";n.page[y]=d.coords.start.page[y],n.client[y]=d.coords.start.client[y],n.delta[y]=0}}}var R={id:"actions/drag",install:function(o){var n=o.actions,d=o.Interactable,f=o.defaults;d.prototype.draggable=R.draggable,n.map.drag=R,n.methodDict.drag="draggable",f.actions.drag=R.defaults},listeners:{"interactions:before-action-move":A,"interactions:action-resume":A,"interactions:action-move":E,"auto-start:check":function(o){var n=o.interaction,d=o.interactable,f=o.buttons,y=d.options.drag;if(y&&y.enabled&&(!n.pointerIsDown||!/mouse|pointer/.test(n.pointerType)||(f&d.options.drag.mouseButtons)!=0))return o.action={name:"drag",axis:y.lockAxis==="start"?y.startAxis:y.lockAxis},!1}},draggable:function(o){return b.object(o)?(this.options.drag.enabled=o.enabled!==!1,this.setPerAction("drag",o),this.setOnEvents("drag",o),/^(xy|x|y|start)$/.test(o.lockAxis)&&(this.options.drag.lockAxis=o.lockAxis),/^(xy|x|y)$/.test(o.startAxis)&&(this.options.drag.startAxis=o.startAxis),this):b.bool(o)?(this.options.drag.enabled=o,this):this.options.drag},beforeMove:A,move:E,defaults:{startAxis:"xy",lockAxis:"xy"},getCursor:function(){return"move"},filterEventType:function(o){return o.search("drag")===0}},D=R,M={init:function(o){var n=o;M.document=n.document,M.DocumentFragment=n.DocumentFragment||F,M.SVGElement=n.SVGElement||F,M.SVGSVGElement=n.SVGSVGElement||F,M.SVGElementInstance=n.SVGElementInstance||F,M.Element=n.Element||F,M.HTMLElement=n.HTMLElement||M.Element,M.Event=n.Event,M.Touch=n.Touch||F,M.PointerEvent=n.PointerEvent||n.MSPointerEvent},document:null,DocumentFragment:null,SVGElement:null,SVGSVGElement:null,SVGElementInstance:null,Element:null,HTMLElement:null,Event:null,Touch:null,PointerEvent:null};function F(){}var N=M,$={init:function(o){var n=N.Element,d=o.navigator||{};$.supportsTouch="ontouchstart"in o||b.func(o.DocumentTouch)&&N.document instanceof o.DocumentTouch,$.supportsPointerEvent=d.pointerEnabled!==!1&&!!N.PointerEvent,$.isIOS=/iP(hone|od|ad)/.test(d.platform),$.isIOS7=/iP(hone|od|ad)/.test(d.platform)&&/OS 7[^\d]/.test(d.appVersion),$.isIe9=/MSIE 9/.test(d.userAgent),$.isOperaMobile=d.appName==="Opera"&&$.supportsTouch&&/Presto/.test(d.userAgent),$.prefixedMatchesSelector="matches"in n.prototype?"matches":"webkitMatchesSelector"in n.prototype?"webkitMatchesSelector":"mozMatchesSelector"in n.prototype?"mozMatchesSelector":"oMatchesSelector"in n.prototype?"oMatchesSelector":"msMatchesSelector",$.pEventTypes=$.supportsPointerEvent?N.PointerEvent===o.MSPointerEvent?{up:"MSPointerUp",down:"MSPointerDown",over:"mouseover",out:"mouseout",move:"MSPointerMove",cancel:"MSPointerCancel"}:{up:"pointerup",down:"pointerdown",over:"pointerover",out:"pointerout",move:"pointermove",cancel:"pointercancel"}:null,$.wheelEvent=N.document&&"onmousewheel"in N.document?"mousewheel":"wheel"},supportsTouch:null,supportsPointerEvent:null,isIOS7:null,isIOS:null,isIe9:null,isOperaMobile:null,prefixedMatchesSelector:null,pEventTypes:null,wheelEvent:null},Y=$;function X(o,n){if(o.contains)return o.contains(n);for(;n;){if(n===o)return!0;n=n.parentNode}return!1}function le(o,n){for(;b.element(o);){if(ee(o,n))return o;o=re(o)}return null}function re(o){var n=o.parentNode;if(b.docFrag(n)){for(;(n=n.host)&&b.docFrag(n););return n}return n}function ee(o,n){return P!==_&&(n=n.replace(/\/deep\//g," ")),o[Y.prefixedMatchesSelector](n)}var ue=function(o){return o.parentNode||o.host};function se(o,n){for(var d,f=[],y=o;(d=ue(y))&&y!==n&&d!==y.ownerDocument;)f.unshift(y),y=d;return f}function ge(o,n,d){for(;b.element(o);){if(ee(o,n))return!0;if((o=re(o))===d)return ee(o,n)}return!1}function ce(o){return o.correspondingUseElement||o}function H(o){var n=o instanceof N.SVGElement?o.getBoundingClientRect():o.getClientRects()[0];return n&&{left:n.left,right:n.right,top:n.top,bottom:n.bottom,width:n.width||n.right-n.left,height:n.height||n.bottom-n.top}}function V(o){var n,d=H(o);if(!Y.isIOS7&&d){var f={x:(n=(n=C(o))||P).scrollX||n.document.documentElement.scrollLeft,y:n.scrollY||n.document.documentElement.scrollTop};d.left+=f.x,d.right+=f.x,d.top+=f.y,d.bottom+=f.y}return d}function J(o){for(var n=[];o;)n.push(o),o=re(o);return n}function ne(o){return!!b.string(o)&&(N.document.querySelector(o),!0)}function U(o,n){for(var d in n)o[d]=n[d];return o}function xe(o,n,d){return o==="parent"?re(d):o==="self"?n.getRect(d):le(d,o)}function Ne(o,n,d,f){var y=o;return b.string(y)?y=xe(y,n,d):b.func(y)&&(y=y.apply(void 0,f)),b.element(y)&&(y=V(y)),y}function Ue(o){return o&&{x:"x"in o?o.x:o.left,y:"y"in o?o.y:o.top}}function rt(o){return!o||"x"in o&&"y"in o||((o=U({},o)).x=o.left||0,o.y=o.top||0,o.width=o.width||(o.right||0)-o.x,o.height=o.height||(o.bottom||0)-o.y),o}function fe(o,n,d){o.left&&(n.left+=d.x),o.right&&(n.right+=d.x),o.top&&(n.top+=d.y),o.bottom&&(n.bottom+=d.y),n.width=n.right-n.left,n.height=n.bottom-n.top}function me(o,n,d){var f=d&&o.options[d];return Ue(Ne(f&&f.origin||o.options.origin,o,n,[o&&n]))||{x:0,y:0}}function ye(o,n){var d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(z){return!0},f=arguments.length>3?arguments[3]:void 0;if(f=f||{},b.string(o)&&o.search(" ")!==-1&&(o=Ve(o)),b.array(o))return o.forEach((function(z){return ye(z,n,d,f)})),f;if(b.object(o)&&(n=o,o=""),b.func(n)&&d(o))f[o]=f[o]||[],f[o].push(n);else if(b.array(n))for(var y=0,k=n;y<k.length;y++){var T=k[y];ye(o,T,d,f)}else if(b.object(n))for(var L in n)ye(Ve(L).map((function(z){return"".concat(o).concat(z)})),n[L],d,f);return f}function Ve(o){return o.trim().split(/ +/)}var dt=function(o,n){return Math.sqrt(o*o+n*n)},Qe=["webkit","moz"];function je(o,n){o.__set||(o.__set={});var d=function(y){if(Qe.some((function(k){return y.indexOf(k)===0})))return 1;typeof o[y]!="function"&&y!=="__set"&&Object.defineProperty(o,y,{get:function(){return y in o.__set?o.__set[y]:o.__set[y]=n[y]},set:function(k){o.__set[y]=k},configurable:!0})};for(var f in n)d(f);return o}function ut(o,n){o.page=o.page||{},o.page.x=n.page.x,o.page.y=n.page.y,o.client=o.client||{},o.client.x=n.client.x,o.client.y=n.client.y,o.timeStamp=n.timeStamp}function yt(o){o.page.x=0,o.page.y=0,o.client.x=0,o.client.y=0}function bt(o){return o instanceof N.Event||o instanceof N.Touch}function Pt(o,n,d){return o=o||"page",(d=d||{}).x=n[o+"X"],d.y=n[o+"Y"],d}function Oe(o,n){return n=n||{x:0,y:0},Y.isOperaMobile&&bt(o)?(Pt("screen",o,n),n.x+=window.scrollX,n.y+=window.scrollY):Pt("page",o,n),n}function Ke(o){return b.number(o.pointerId)?o.pointerId:o.identifier}function vt(o,n,d){var f=n.length>1?It(n):n[0];Oe(f,o.page),(function(y,k){k=k||{},Y.isOperaMobile&&bt(y)?Pt("screen",y,k):Pt("client",y,k)})(f,o.client),o.timeStamp=d}function Ct(o){var n=[];return b.array(o)?(n[0]=o[0],n[1]=o[1]):o.type==="touchend"?o.touches.length===1?(n[0]=o.touches[0],n[1]=o.changedTouches[0]):o.touches.length===0&&(n[0]=o.changedTouches[0],n[1]=o.changedTouches[1]):(n[0]=o.touches[0],n[1]=o.touches[1]),n}function It(o){for(var n={pageX:0,pageY:0,clientX:0,clientY:0,screenX:0,screenY:0},d=0;d<o.length;d++){var f=o[d];for(var y in n)n[y]+=f[y]}for(var k in n)n[k]/=o.length;return n}function Bt(o){if(!o.length)return null;var n=Ct(o),d=Math.min(n[0].pageX,n[1].pageX),f=Math.min(n[0].pageY,n[1].pageY),y=Math.max(n[0].pageX,n[1].pageX),k=Math.max(n[0].pageY,n[1].pageY);return{x:d,y:f,left:d,top:f,right:y,bottom:k,width:y-d,height:k-f}}function Rt(o,n){var d=n+"X",f=n+"Y",y=Ct(o),k=y[0][d]-y[1][d],T=y[0][f]-y[1][f];return dt(k,T)}function Lt(o,n){var d=n+"X",f=n+"Y",y=Ct(o),k=y[1][d]-y[0][d],T=y[1][f]-y[0][f];return 180*Math.atan2(T,k)/Math.PI}function ii(o){return b.string(o.pointerType)?o.pointerType:b.number(o.pointerType)?[void 0,void 0,"touch","pen","mouse"][o.pointerType]:/touch/.test(o.type||"")||o instanceof N.Touch?"touch":"mouse"}function oe(o){var n=b.func(o.composedPath)?o.composedPath():o.path;return[ce(n?n[0]:o.target),ce(o.currentTarget)]}var ae=(function(){function o(n){t(this,o),this.immediatePropagationStopped=!1,this.propagationStopped=!1,this._interaction=n}return a(o,[{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}]),o})();Object.defineProperty(ae.prototype,"interaction",{get:function(){return this._interaction._proxy},set:function(){}});var He=function(o,n){for(var d=0;d<n.length;d++){var f=n[d];o.push(f)}return o},De=function(o){return He([],o)},Le=function(o,n){for(var d=0;d<o.length;d++)if(n(o[d],d,o))return d;return-1},ze=function(o,n){return o[Le(o,n)]},Q=(function(o){c(d,o);var n=u(d);function d(f,y,k){var T;t(this,d),(T=n.call(this,y._interaction)).dropzone=void 0,T.dragEvent=void 0,T.relatedTarget=void 0,T.draggable=void 0,T.propagationStopped=!1,T.immediatePropagationStopped=!1;var L=k==="dragleave"?f.prev:f.cur,z=L.element,q=L.dropzone;return T.type=k,T.target=z,T.currentTarget=z,T.dropzone=q,T.dragEvent=y,T.relatedTarget=y.target,T.draggable=y.interactable,T.timeStamp=y.timeStamp,T}return a(d,[{key:"reject",value:function(){var f=this,y=this._interaction.dropState;if(this.type==="dropactivate"||this.dropzone&&y.cur.dropzone===this.dropzone&&y.cur.element===this.target)if(y.prev.dropzone=this.dropzone,y.prev.element=this.target,y.rejected=!0,y.events.enter=null,this.stopImmediatePropagation(),this.type==="dropactivate"){var k=y.activeDrops,T=Le(k,(function(z){var q=z.dropzone,B=z.element;return q===f.dropzone&&B===f.target}));y.activeDrops.splice(T,1);var L=new d(y,this.dragEvent,"dropdeactivate");L.dropzone=this.dropzone,L.target=this.target,this.dropzone.fire(L)}else this.dropzone.fire(new d(y,this.dragEvent,"dragleave"))}},{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}]),d})(ae);function Ce(o,n){for(var d=0,f=o.slice();d<f.length;d++){var y=f[d],k=y.dropzone,T=y.element;n.dropzone=k,n.target=T,k.fire(n),n.propagationStopped=n.immediatePropagationStopped=!1}}function tt(o,n){for(var d=(function(k,T){for(var L=[],z=0,q=k.interactables.list;z<q.length;z++){var B=q[z];if(B.options.drop.enabled){var W=B.options.drop.accept;if(!(b.element(W)&&W!==T||b.string(W)&&!ee(T,W)||b.func(W)&&!W({dropzone:B,draggableElement:T})))for(var Z=0,he=B.getAllElements();Z<he.length;Z++){var de=he[Z];de!==T&&L.push({dropzone:B,element:de,rect:B.getRect(de)})}}}return L})(o,n),f=0;f<d.length;f++){var y=d[f];y.rect=y.dropzone.getRect(y.element)}return d}function ie(o,n,d){for(var f=o.dropState,y=o.interactable,k=o.element,T=[],L=0,z=f.activeDrops;L<z.length;L++){var q=z[L],B=q.dropzone,W=q.element,Z=q.rect,he=B.dropCheck(n,d,y,k,W,Z);T.push(he?W:null)}var de=(function(be){for(var Re,Pe,Ae,We=[],at=0;at<be.length;at++){var Je=be[at],it=be[Re];if(Je&&at!==Re)if(it){var Ft=ue(Je),xt=ue(it);if(Ft!==Je.ownerDocument)if(xt!==Je.ownerDocument)if(Ft!==xt){We=We.length?We:se(it);var jt=void 0;if(it instanceof N.HTMLElement&&Je instanceof N.SVGElement&&!(Je instanceof N.SVGSVGElement)){if(Je===xt)continue;jt=Je.ownerSVGElement}else jt=Je;for(var Jt=se(jt,it.ownerDocument),ti=0;Jt[ti]&&Jt[ti]===We[ti];)ti++;var mt=[Jt[ti-1],Jt[ti],We[ti]];if(mt[0])for(var St=mt[0].lastChild;St;){if(St===mt[1]){Re=at,We=Jt;break}if(St===mt[2])break;St=St.previousSibling}}else Ae=it,(parseInt(C(Pe=Je).getComputedStyle(Pe).zIndex,10)||0)>=(parseInt(C(Ae).getComputedStyle(Ae).zIndex,10)||0)&&(Re=at);else Re=at}else Re=at}return Re})(T);return f.activeDrops[de]||null}function Ge(o,n,d){var f=o.dropState,y={enter:null,leave:null,activate:null,deactivate:null,move:null,drop:null};return d.type==="dragstart"&&(y.activate=new Q(f,d,"dropactivate"),y.activate.target=null,y.activate.dropzone=null),d.type==="dragend"&&(y.deactivate=new Q(f,d,"dropdeactivate"),y.deactivate.target=null,y.deactivate.dropzone=null),f.rejected||(f.cur.element!==f.prev.element&&(f.prev.dropzone&&(y.leave=new Q(f,d,"dragleave"),d.dragLeave=y.leave.target=f.prev.element,d.prevDropzone=y.leave.dropzone=f.prev.dropzone),f.cur.dropzone&&(y.enter=new Q(f,d,"dragenter"),d.dragEnter=f.cur.element,d.dropzone=f.cur.dropzone)),d.type==="dragend"&&f.cur.dropzone&&(y.drop=new Q(f,d,"drop"),d.dropzone=f.cur.dropzone,d.relatedTarget=f.cur.element),d.type==="dragmove"&&f.cur.dropzone&&(y.move=new Q(f,d,"dropmove"),d.dropzone=f.cur.dropzone)),y}function ct(o,n){var d=o.dropState,f=d.activeDrops,y=d.cur,k=d.prev;n.leave&&k.dropzone.fire(n.leave),n.enter&&y.dropzone.fire(n.enter),n.move&&y.dropzone.fire(n.move),n.drop&&y.dropzone.fire(n.drop),n.deactivate&&Ce(f,n.deactivate),d.prev.dropzone=y.dropzone,d.prev.element=y.element}function ke(o,n){var d=o.interaction,f=o.iEvent,y=o.event;if(f.type==="dragmove"||f.type==="dragend"){var k=d.dropState;n.dynamicDrop&&(k.activeDrops=tt(n,d.element));var T=f,L=ie(d,T,y);k.rejected=k.rejected&&!!L&&L.dropzone===k.cur.dropzone&&L.element===k.cur.element,k.cur.dropzone=L&&L.dropzone,k.cur.element=L&&L.element,k.events=Ge(d,0,T)}}var Ie={id:"actions/drop",install:function(o){var n=o.actions,d=o.interactStatic,f=o.Interactable,y=o.defaults;o.usePlugin(D),f.prototype.dropzone=function(k){return(function(T,L){if(b.object(L)){if(T.options.drop.enabled=L.enabled!==!1,L.listeners){var z=ye(L.listeners),q=Object.keys(z).reduce((function(W,Z){return W[/^(enter|leave)/.test(Z)?"drag".concat(Z):/^(activate|deactivate|move)/.test(Z)?"drop".concat(Z):Z]=z[Z],W}),{}),B=T.options.drop.listeners;B&&T.off(B),T.on(q),T.options.drop.listeners=q}return b.func(L.ondrop)&&T.on("drop",L.ondrop),b.func(L.ondropactivate)&&T.on("dropactivate",L.ondropactivate),b.func(L.ondropdeactivate)&&T.on("dropdeactivate",L.ondropdeactivate),b.func(L.ondragenter)&&T.on("dragenter",L.ondragenter),b.func(L.ondragleave)&&T.on("dragleave",L.ondragleave),b.func(L.ondropmove)&&T.on("dropmove",L.ondropmove),/^(pointer|center)$/.test(L.overlap)?T.options.drop.overlap=L.overlap:b.number(L.overlap)&&(T.options.drop.overlap=Math.max(Math.min(1,L.overlap),0)),"accept"in L&&(T.options.drop.accept=L.accept),"checker"in L&&(T.options.drop.checker=L.checker),T}return b.bool(L)?(T.options.drop.enabled=L,T):T.options.drop})(this,k)},f.prototype.dropCheck=function(k,T,L,z,q,B){return(function(W,Z,he,de,be,Re,Pe){var Ae=!1;if(!(Pe=Pe||W.getRect(Re)))return!!W.options.drop.checker&&W.options.drop.checker(Z,he,Ae,W,Re,de,be);var We=W.options.drop.overlap;if(We==="pointer"){var at=me(de,be,"drag"),Je=Oe(Z);Je.x+=at.x,Je.y+=at.y;var it=Je.x>Pe.left&&Je.x<Pe.right,Ft=Je.y>Pe.top&&Je.y<Pe.bottom;Ae=it&&Ft}var xt=de.getRect(be);if(xt&&We==="center"){var jt=xt.left+xt.width/2,Jt=xt.top+xt.height/2;Ae=jt>=Pe.left&&jt<=Pe.right&&Jt>=Pe.top&&Jt<=Pe.bottom}return xt&&b.number(We)&&(Ae=Math.max(0,Math.min(Pe.right,xt.right)-Math.max(Pe.left,xt.left))*Math.max(0,Math.min(Pe.bottom,xt.bottom)-Math.max(Pe.top,xt.top))/(xt.width*xt.height)>=We),W.options.drop.checker&&(Ae=W.options.drop.checker(Z,he,Ae,W,Re,de,be)),Ae})(this,k,T,L,z,q,B)},d.dynamicDrop=function(k){return b.bool(k)?(o.dynamicDrop=k,d):o.dynamicDrop},U(n.phaselessTypes,{dragenter:!0,dragleave:!0,dropactivate:!0,dropdeactivate:!0,dropmove:!0,drop:!0}),n.methodDict.drop="dropzone",o.dynamicDrop=!1,y.actions.drop=Ie.defaults},listeners:{"interactions:before-action-start":function(o){var n=o.interaction;n.prepared.name==="drag"&&(n.dropState={cur:{dropzone:null,element:null},prev:{dropzone:null,element:null},rejected:null,events:null,activeDrops:[]})},"interactions:after-action-start":function(o,n){var d=o.interaction,f=(o.event,o.iEvent);if(d.prepared.name==="drag"){var y=d.dropState;y.activeDrops=[],y.events={},y.activeDrops=tt(n,d.element),y.events=Ge(d,0,f),y.events.activate&&(Ce(y.activeDrops,y.events.activate),n.fire("actions/drop:start",{interaction:d,dragEvent:f}))}},"interactions:action-move":ke,"interactions:after-action-move":function(o,n){var d=o.interaction,f=o.iEvent;if(d.prepared.name==="drag"){var y=d.dropState;ct(d,y.events),n.fire("actions/drop:move",{interaction:d,dragEvent:f}),y.events={}}},"interactions:action-end":function(o,n){if(o.interaction.prepared.name==="drag"){var d=o.interaction,f=o.iEvent;ke(o,n),ct(d,d.dropState.events),n.fire("actions/drop:end",{interaction:d,dragEvent:f})}},"interactions:stop":function(o){var n=o.interaction;if(n.prepared.name==="drag"){var d=n.dropState;d&&(d.activeDrops=null,d.events=null,d.cur.dropzone=null,d.cur.element=null,d.prev.dropzone=null,d.prev.element=null,d.rejected=!1)}}},getActiveDrops:tt,getDrop:ie,getDropEvents:Ge,fireDropEvents:ct,filterEventType:function(o){return o.search("drag")===0||o.search("drop")===0},defaults:{enabled:!1,accept:null,overlap:"pointer"}},ht=Ie;function lt(o){var n=o.interaction,d=o.iEvent,f=o.phase;if(n.prepared.name==="gesture"){var y=n.pointers.map((function(q){return q.pointer})),k=f==="start",T=f==="end",L=n.interactable.options.deltaSource;if(d.touches=[y[0],y[1]],k)d.distance=Rt(y,L),d.box=Bt(y),d.scale=1,d.ds=0,d.angle=Lt(y,L),d.da=0,n.gesture.startDistance=d.distance,n.gesture.startAngle=d.angle;else if(T||n.pointers.length<2){var z=n.prevEvent;d.distance=z.distance,d.box=z.box,d.scale=z.scale,d.ds=0,d.angle=z.angle,d.da=0}else d.distance=Rt(y,L),d.box=Bt(y),d.scale=d.distance/n.gesture.startDistance,d.angle=Lt(y,L),d.ds=d.scale-n.gesture.scale,d.da=d.angle-n.gesture.angle;n.gesture.distance=d.distance,n.gesture.angle=d.angle,b.number(d.scale)&&d.scale!==1/0&&!isNaN(d.scale)&&(n.gesture.scale=d.scale)}}var pt={id:"actions/gesture",before:["actions/drag","actions/resize"],install:function(o){var n=o.actions,d=o.Interactable,f=o.defaults;d.prototype.gesturable=function(y){return b.object(y)?(this.options.gesture.enabled=y.enabled!==!1,this.setPerAction("gesture",y),this.setOnEvents("gesture",y),this):b.bool(y)?(this.options.gesture.enabled=y,this):this.options.gesture},n.map.gesture=pt,n.methodDict.gesture="gesturable",f.actions.gesture=pt.defaults},listeners:{"interactions:action-start":lt,"interactions:action-move":lt,"interactions:action-end":lt,"interactions:new":function(o){o.interaction.gesture={angle:0,distance:0,scale:1,startAngle:0,startDistance:0}},"auto-start:check":function(o){if(!(o.interaction.pointers.length<2)){var n=o.interactable.options.gesture;if(n&&n.enabled)return o.action={name:"gesture"},!1}}},defaults:{},getCursor:function(){return""},filterEventType:function(o){return o.search("gesture")===0}},ft=pt;function gt(o,n,d,f,y,k,T){if(!n)return!1;if(n===!0){var L=b.number(k.width)?k.width:k.right-k.left,z=b.number(k.height)?k.height:k.bottom-k.top;if(T=Math.min(T,Math.abs((o==="left"||o==="right"?L:z)/2)),L<0&&(o==="left"?o="right":o==="right"&&(o="left")),z<0&&(o==="top"?o="bottom":o==="bottom"&&(o="top")),o==="left"){var q=L>=0?k.left:k.right;return d.x<q+T}if(o==="top"){var B=z>=0?k.top:k.bottom;return d.y<B+T}if(o==="right")return d.x>(L>=0?k.right:k.left)-T;if(o==="bottom")return d.y>(z>=0?k.bottom:k.top)-T}return!!b.element(f)&&(b.element(n)?n===f:ge(f,n,y))}function Ze(o){var n=o.iEvent,d=o.interaction;if(d.prepared.name==="resize"&&d.resizeAxes){var f=n;d.interactable.options.resize.square?(d.resizeAxes==="y"?f.delta.x=f.delta.y:f.delta.y=f.delta.x,f.axes="xy"):(f.axes=d.resizeAxes,d.resizeAxes==="x"?f.delta.y=0:d.resizeAxes==="y"&&(f.delta.x=0))}}var Se,et,Xe={id:"actions/resize",before:["actions/drag"],install:function(o){var n=o.actions,d=o.browser,f=o.Interactable,y=o.defaults;Xe.cursors=(function(k){return k.isIe9?{x:"e-resize",y:"s-resize",xy:"se-resize",top:"n-resize",left:"w-resize",bottom:"s-resize",right:"e-resize",topleft:"se-resize",bottomright:"se-resize",topright:"ne-resize",bottomleft:"ne-resize"}:{x:"ew-resize",y:"ns-resize",xy:"nwse-resize",top:"ns-resize",left:"ew-resize",bottom:"ns-resize",right:"ew-resize",topleft:"nwse-resize",bottomright:"nwse-resize",topright:"nesw-resize",bottomleft:"nesw-resize"}})(d),Xe.defaultMargin=d.supportsTouch||d.supportsPointerEvent?20:10,f.prototype.resizable=function(k){return(function(T,L,z){return b.object(L)?(T.options.resize.enabled=L.enabled!==!1,T.setPerAction("resize",L),T.setOnEvents("resize",L),b.string(L.axis)&&/^x$|^y$|^xy$/.test(L.axis)?T.options.resize.axis=L.axis:L.axis===null&&(T.options.resize.axis=z.defaults.actions.resize.axis),b.bool(L.preserveAspectRatio)?T.options.resize.preserveAspectRatio=L.preserveAspectRatio:b.bool(L.square)&&(T.options.resize.square=L.square),T):b.bool(L)?(T.options.resize.enabled=L,T):T.options.resize})(this,k,o)},n.map.resize=Xe,n.methodDict.resize="resizable",y.actions.resize=Xe.defaults},listeners:{"interactions:new":function(o){o.interaction.resizeAxes="xy"},"interactions:action-start":function(o){(function(n){var d=n.iEvent,f=n.interaction;if(f.prepared.name==="resize"&&f.prepared.edges){var y=d,k=f.rect;f._rects={start:U({},k),corrected:U({},k),previous:U({},k),delta:{left:0,right:0,width:0,top:0,bottom:0,height:0}},y.edges=f.prepared.edges,y.rect=f._rects.corrected,y.deltaRect=f._rects.delta}})(o),Ze(o)},"interactions:action-move":function(o){(function(n){var d=n.iEvent,f=n.interaction;if(f.prepared.name==="resize"&&f.prepared.edges){var y=d,k=f.interactable.options.resize.invert,T=k==="reposition"||k==="negate",L=f.rect,z=f._rects,q=z.start,B=z.corrected,W=z.delta,Z=z.previous;if(U(Z,B),T){if(U(B,L),k==="reposition"){if(B.top>B.bottom){var he=B.top;B.top=B.bottom,B.bottom=he}if(B.left>B.right){var de=B.left;B.left=B.right,B.right=de}}}else B.top=Math.min(L.top,q.bottom),B.bottom=Math.max(L.bottom,q.top),B.left=Math.min(L.left,q.right),B.right=Math.max(L.right,q.left);for(var be in B.width=B.right-B.left,B.height=B.bottom-B.top,B)W[be]=B[be]-Z[be];y.edges=f.prepared.edges,y.rect=B,y.deltaRect=W}})(o),Ze(o)},"interactions:action-end":function(o){var n=o.iEvent,d=o.interaction;if(d.prepared.name==="resize"&&d.prepared.edges){var f=n;f.edges=d.prepared.edges,f.rect=d._rects.corrected,f.deltaRect=d._rects.delta}},"auto-start:check":function(o){var n=o.interaction,d=o.interactable,f=o.element,y=o.rect,k=o.buttons;if(y){var T=U({},n.coords.cur.page),L=d.options.resize;if(L&&L.enabled&&(!n.pointerIsDown||!/mouse|pointer/.test(n.pointerType)||(k&L.mouseButtons)!=0)){if(b.object(L.edges)){var z={left:!1,right:!1,top:!1,bottom:!1};for(var q in z)z[q]=gt(q,L.edges[q],T,n._latestPointer.eventTarget,f,y,L.margin||Xe.defaultMargin);z.left=z.left&&!z.right,z.top=z.top&&!z.bottom,(z.left||z.right||z.top||z.bottom)&&(o.action={name:"resize",edges:z})}else{var B=L.axis!=="y"&&T.x>y.right-Xe.defaultMargin,W=L.axis!=="x"&&T.y>y.bottom-Xe.defaultMargin;(B||W)&&(o.action={name:"resize",axes:(B?"x":"")+(W?"y":"")})}return!o.action&&void 0}}}},defaults:{square:!1,preserveAspectRatio:!1,axis:"xy",margin:NaN,edges:null,invert:"none"},cursors:null,getCursor:function(o){var n=o.edges,d=o.axis,f=o.name,y=Xe.cursors,k=null;if(d)k=y[f+d];else if(n){for(var T="",L=0,z=["top","bottom","left","right"];L<z.length;L++){var q=z[L];n[q]&&(T+=q)}k=y[T]}return k},filterEventType:function(o){return o.search("resize")===0},defaultMargin:null},nt=Xe,Ee={id:"actions",install:function(o){o.usePlugin(ft),o.usePlugin(nt),o.usePlugin(D),o.usePlugin(ht)}},ve=0,pe={request:function(o){return Se(o)},cancel:function(o){return et(o)},init:function(o){if(Se=o.requestAnimationFrame,et=o.cancelAnimationFrame,!Se)for(var n=["ms","moz","webkit","o"],d=0;d<n.length;d++){var f=n[d];Se=o["".concat(f,"RequestAnimationFrame")],et=o["".concat(f,"CancelAnimationFrame")]||o["".concat(f,"CancelRequestAnimationFrame")]}Se=Se&&Se.bind(o),et=et&&et.bind(o),Se||(Se=function(y){var k=Date.now(),T=Math.max(0,16-(k-ve)),L=o.setTimeout((function(){y(k+T)}),T);return ve=k+T,L},et=function(y){return clearTimeout(y)})}},G={defaults:{enabled:!1,margin:60,container:null,speed:300},now:Date.now,interaction:null,i:0,x:0,y:0,isScrolling:!1,prevTime:0,margin:0,speed:0,start:function(o){G.isScrolling=!0,pe.cancel(G.i),o.autoScroll=G,G.interaction=o,G.prevTime=G.now(),G.i=pe.request(G.scroll)},stop:function(){G.isScrolling=!1,G.interaction&&(G.interaction.autoScroll=null),pe.cancel(G.i)},scroll:function(){var o=G.interaction,n=o.interactable,d=o.element,f=o.prepared.name,y=n.options[f].autoScroll,k=Te(y.container,n,d),T=G.now(),L=(T-G.prevTime)/1e3,z=y.speed*L;if(z>=1){var q={x:G.x*z,y:G.y*z};if(q.x||q.y){var B=Be(k);b.window(k)?k.scrollBy(q.x,q.y):k&&(k.scrollLeft+=q.x,k.scrollTop+=q.y);var W=Be(k),Z={x:W.x-B.x,y:W.y-B.y};(Z.x||Z.y)&&n.fire({type:"autoscroll",target:d,interactable:n,delta:Z,interaction:o,container:k})}G.prevTime=T}G.isScrolling&&(pe.cancel(G.i),G.i=pe.request(G.scroll))},check:function(o,n){var d;return(d=o.options[n].autoScroll)==null?void 0:d.enabled},onInteractionMove:function(o){var n=o.interaction,d=o.pointer;if(n.interacting()&&G.check(n.interactable,n.prepared.name))if(n.simulation)G.x=G.y=0;else{var f,y,k,T,L=n.interactable,z=n.element,q=n.prepared.name,B=L.options[q].autoScroll,W=Te(B.container,L,z);if(b.window(W))T=d.clientX<G.margin,f=d.clientY<G.margin,y=d.clientX>W.innerWidth-G.margin,k=d.clientY>W.innerHeight-G.margin;else{var Z=H(W);T=d.clientX<Z.left+G.margin,f=d.clientY<Z.top+G.margin,y=d.clientX>Z.right-G.margin,k=d.clientY>Z.bottom-G.margin}G.x=y?1:T?-1:0,G.y=k?1:f?-1:0,G.isScrolling||(G.margin=B.margin,G.speed=B.speed,G.start(n))}}};function Te(o,n,d){return(b.string(o)?xe(o,n,d):o)||C(d)}function Be(o){return b.window(o)&&(o=window.document.body),{x:o.scrollLeft,y:o.scrollTop}}var _t={id:"auto-scroll",install:function(o){var n=o.defaults,d=o.actions;o.autoScroll=G,G.now=function(){return o.now()},d.phaselessTypes.autoscroll=!0,n.perAction.autoScroll=G.defaults},listeners:{"interactions:new":function(o){o.interaction.autoScroll=null},"interactions:destroy":function(o){o.interaction.autoScroll=null,G.stop(),G.interaction&&(G.interaction=null)},"interactions:stop":G.stop,"interactions:action-move":function(o){return G.onInteractionMove(o)}}},Et=_t;function At(o,n){var d=!1;return function(){return d||(P.console.warn(n),d=!0),o.apply(this,arguments)}}function ri(o,n){return o.name=n.name,o.axis=n.axis,o.edges=n.edges,o}function bi(o){return b.bool(o)?(this.options.styleCursor=o,this):o===null?(delete this.options.styleCursor,this):this.options.styleCursor}function ci(o){return b.func(o)?(this.options.actionChecker=o,this):o===null?(delete this.options.actionChecker,this):this.options.actionChecker}var Pi={id:"auto-start/interactableMethods",install:function(o){var n=o.Interactable;n.prototype.getAction=function(d,f,y,k){var T=(function(L,z,q,B,W){var Z=L.getRect(B),he=z.buttons||{0:1,1:4,3:8,4:16}[z.button],de={action:null,interactable:L,interaction:q,element:B,rect:Z,buttons:he};return W.fire("auto-start:check",de),de.action})(this,f,y,k,o);return this.options.actionChecker?this.options.actionChecker(d,f,T,this,k,y):T},n.prototype.ignoreFrom=At((function(d){return this._backCompatOption("ignoreFrom",d)}),"Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."),n.prototype.allowFrom=At((function(d){return this._backCompatOption("allowFrom",d)}),"Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."),n.prototype.actionChecker=ci,n.prototype.styleCursor=bi}};function er(o,n,d,f,y){return n.testIgnoreAllow(n.options[o.name],d,f)&&n.options[o.name].enabled&&vi(n,d,o,y)?o:null}function tr(o,n,d,f,y,k,T){for(var L=0,z=f.length;L<z;L++){var q=f[L],B=y[L],W=q.getAction(n,d,o,B);if(W){var Z=er(W,q,B,k,T);if(Z)return{action:Z,interactable:q,element:B}}}return{action:null,interactable:null,element:null}}function Li(o,n,d,f,y){var k=[],T=[],L=f;function z(B){k.push(B),T.push(L)}for(;b.element(L);){k=[],T=[],y.interactables.forEachMatch(L,z);var q=tr(o,n,d,k,T,f,y);if(q.action&&!q.interactable.options[q.action.name].manualStart)return q;L=re(L)}return{action:null,interactable:null,element:null}}function Mi(o,n,d){var f=n.action,y=n.interactable,k=n.element;f=f||{name:null},o.interactable=y,o.element=k,ri(o.prepared,f),o.rect=y&&f.name?y.getRect(k):null,hi(o,d),d.fire("autoStart:prepared",{interaction:o})}function vi(o,n,d,f){var y=o.options,k=y[d.name].max,T=y[d.name].maxPerElement,L=f.autoStart.maxInteractions,z=0,q=0,B=0;if(!(k&&T&&L))return!1;for(var W=0,Z=f.interactions.list;W<Z.length;W++){var he=Z[W],de=he.prepared.name;if(he.interacting()&&(++z>=L||he.interactable===o&&((q+=de===d.name?1:0)>=k||he.element===n&&(B++,de===d.name&&B>=T))))return!1}return L>0}function Qt(o,n){return b.number(o)?(n.autoStart.maxInteractions=o,this):n.autoStart.maxInteractions}function Vi(o,n,d){var f=d.autoStart.cursorElement;f&&f!==o&&(f.style.cursor=""),o.ownerDocument.documentElement.style.cursor=n,o.style.cursor=n,d.autoStart.cursorElement=n?o:null}function hi(o,n){var d=o.interactable,f=o.element,y=o.prepared;if(o.pointerType==="mouse"&&d&&d.options.styleCursor){var k="";if(y.name){var T=d.options[y.name].cursorChecker;k=b.func(T)?T(y,d,f,o._interacting):n.actions.map[y.name].getCursor(y)}Vi(o.element,k||"",n)}else n.autoStart.cursorElement&&Vi(n.autoStart.cursorElement,"",n)}var xr={id:"auto-start/base",before:["actions"],install:function(o){var n=o.interactStatic,d=o.defaults;o.usePlugin(Pi),d.base.actionChecker=null,d.base.styleCursor=!0,U(d.perAction,{manualStart:!1,max:1/0,maxPerElement:1,allowFrom:null,ignoreFrom:null,mouseButtons:1}),n.maxInteractions=function(f){return Qt(f,o)},o.autoStart={maxInteractions:1/0,withinInteractionLimit:vi,cursorElement:null}},listeners:{"interactions:down":function(o,n){var d=o.interaction,f=o.pointer,y=o.event,k=o.eventTarget;d.interacting()||Mi(d,Li(d,f,y,k,n),n)},"interactions:move":function(o,n){(function(d,f){var y=d.interaction,k=d.pointer,T=d.event,L=d.eventTarget;y.pointerType!=="mouse"||y.pointerIsDown||y.interacting()||Mi(y,Li(y,k,T,L,f),f)})(o,n),(function(d,f){var y=d.interaction;if(y.pointerIsDown&&!y.interacting()&&y.pointerWasMoved&&y.prepared.name){f.fire("autoStart:before-start",d);var k=y.interactable,T=y.prepared.name;T&&k&&(k.options[T].manualStart||!vi(k,y.element,y.prepared,f)?y.stop():(y.start(y.prepared,k,y.element),hi(y,f)))}})(o,n)},"interactions:stop":function(o,n){var d=o.interaction,f=d.interactable;f&&f.options.styleCursor&&Vi(d.element,"",n)}},maxInteractions:Qt,withinInteractionLimit:vi,validateAction:er},ni=xr,wr={id:"auto-start/dragAxis",listeners:{"autoStart:before-start":function(o,n){var d=o.interaction,f=o.eventTarget,y=o.dx,k=o.dy;if(d.prepared.name==="drag"){var T=Math.abs(y),L=Math.abs(k),z=d.interactable.options.drag,q=z.startAxis,B=T>L?"x":T<L?"y":"xy";if(d.prepared.axis=z.lockAxis==="start"?B[0]:z.lockAxis,B!=="xy"&&q!=="xy"&&q!==B){d.prepared.name=null;for(var W=f,Z=function(de){if(de!==d.interactable){var be=d.interactable.options.drag;if(!be.manualStart&&de.testIgnoreAllow(be,W,f)){var Re=de.getAction(d.downPointer,d.downEvent,d,W);if(Re&&Re.name==="drag"&&(function(Pe,Ae){if(!Ae)return!1;var We=Ae.options.drag.startAxis;return Pe==="xy"||We==="xy"||We===Pe})(B,de)&&ni.validateAction(Re,de,W,f,n))return de}}};b.element(W);){var he=n.interactables.forEachMatch(W,Z);if(he){d.prepared.name="drag",d.interactable=he,d.element=W;break}W=re(W)}}}}}};function Ri(o){var n=o.prepared&&o.prepared.name;if(!n)return null;var d=o.interactable.options;return d[n].hold||d[n].delay}var tn={id:"auto-start/hold",install:function(o){var n=o.defaults;o.usePlugin(ni),n.perAction.hold=0,n.perAction.delay=0},listeners:{"interactions:new":function(o){o.interaction.autoStartHoldTimer=null},"autoStart:prepared":function(o){var n=o.interaction,d=Ri(n);d>0&&(n.autoStartHoldTimer=setTimeout((function(){n.start(n.prepared,n.interactable,n.element)}),d))},"interactions:move":function(o){var n=o.interaction,d=o.duplicate;n.autoStartHoldTimer&&n.pointerWasMoved&&!d&&(clearTimeout(n.autoStartHoldTimer),n.autoStartHoldTimer=null)},"autoStart:before-start":function(o){var n=o.interaction;Ri(n)>0&&(n.prepared.name=null)}},getHoldDuration:Ri},Zt=tn,Tt={id:"auto-start",install:function(o){o.usePlugin(ni),o.usePlugin(Zt),o.usePlugin(wr)}},rn=function(o){return/^(always|never|auto)$/.test(o)?(this.options.preventDefault=o,this):b.bool(o)?(this.options.preventDefault=o?"always":"never",this):this.options.preventDefault};function nn(o){var n=o.interaction,d=o.event;n.interactable&&n.interactable.checkAndPreventDefault(d)}var kr={id:"core/interactablePreventDefault",install:function(o){var n=o.Interactable;n.prototype.preventDefault=rn,n.prototype.checkAndPreventDefault=function(d){return(function(f,y,k){var T=f.options.preventDefault;if(T!=="never")if(T!=="always"){if(y.events.supportsPassive&&/^touch(start|move)$/.test(k.type)){var L=C(k.target).document,z=y.getDocOptions(L);if(!z||!z.events||z.events.passive!==!1)return}/^(mouse|pointer|touch)*(down|start)/i.test(k.type)||b.element(k.target)&&ee(k.target,"input,select,textarea,[contenteditable=true],[contenteditable=true] *")||k.preventDefault()}else k.preventDefault()})(this,o,d)},o.interactions.docEvents.push({type:"dragstart",listener:function(d){for(var f=0,y=o.interactions.list;f<y.length;f++){var k=y[f];if(k.element&&(k.element===d.target||X(k.element,d.target)))return void k.interactable.checkAndPreventDefault(d)}}})},listeners:["down","move","up","cancel"].reduce((function(o,n){return o["interactions:".concat(n)]=nn,o}),{})};function ui(o,n){if(n.phaselessTypes[o])return!0;for(var d in n.map)if(o.indexOf(d)===0&&o.substr(d.length)in n.phases)return!0;return!1}function gi(o){var n={};for(var d in o){var f=o[d];b.plainObject(f)?n[d]=gi(f):b.array(f)?n[d]=De(f):n[d]=f}return n}var _i=(function(){function o(n){t(this,o),this.states=[],this.startOffset={left:0,right:0,top:0,bottom:0},this.startDelta=void 0,this.result=void 0,this.endResult=void 0,this.startEdges=void 0,this.edges=void 0,this.interaction=void 0,this.interaction=n,this.result=ji(),this.edges={left:!1,right:!1,top:!1,bottom:!1}}return a(o,[{key:"start",value:function(n,d){var f,y,k=n.phase,T=this.interaction,L=(function(q){var B=q.interactable.options[q.prepared.name],W=B.modifiers;return W&&W.length?W:["snap","snapSize","snapEdges","restrict","restrictEdges","restrictSize"].map((function(Z){var he=B[Z];return he&&he.enabled&&{options:he,methods:he._methods}})).filter((function(Z){return!!Z}))})(T);this.prepareStates(L),this.startEdges=U({},T.edges),this.edges=U({},this.startEdges),this.startOffset=(f=T.rect,y=d,f?{left:y.x-f.left,top:y.y-f.top,right:f.right-y.x,bottom:f.bottom-y.y}:{left:0,top:0,right:0,bottom:0}),this.startDelta={x:0,y:0};var z=this.fillArg({phase:k,pageCoords:d,preEnd:!1});return this.result=ji(),this.startAll(z),this.result=this.setAll(z)}},{key:"fillArg",value:function(n){var d=this.interaction;return n.interaction=d,n.interactable=d.interactable,n.element=d.element,n.rect||(n.rect=d.rect),n.edges||(n.edges=this.startEdges),n.startOffset=this.startOffset,n}},{key:"startAll",value:function(n){for(var d=0,f=this.states;d<f.length;d++){var y=f[d];y.methods.start&&(n.state=y,y.methods.start(n))}}},{key:"setAll",value:function(n){var d=n.phase,f=n.preEnd,y=n.skipModifiers,k=n.rect,T=n.edges;n.coords=U({},n.pageCoords),n.rect=U({},k),n.edges=U({},T);for(var L=y?this.states.slice(y):this.states,z=ji(n.coords,n.rect),q=0;q<L.length;q++){var B,W=L[q],Z=W.options,he=U({},n.coords),de=null;(B=W.methods)!=null&&B.set&&this.shouldDo(Z,f,d)&&(n.state=W,de=W.methods.set(n),fe(n.edges,n.rect,{x:n.coords.x-he.x,y:n.coords.y-he.y})),z.eventProps.push(de)}U(this.edges,n.edges),z.delta.x=n.coords.x-n.pageCoords.x,z.delta.y=n.coords.y-n.pageCoords.y,z.rectDelta.left=n.rect.left-k.left,z.rectDelta.right=n.rect.right-k.right,z.rectDelta.top=n.rect.top-k.top,z.rectDelta.bottom=n.rect.bottom-k.bottom;var be=this.result.coords,Re=this.result.rect;if(be&&Re){var Pe=z.rect.left!==Re.left||z.rect.right!==Re.right||z.rect.top!==Re.top||z.rect.bottom!==Re.bottom;z.changed=Pe||be.x!==z.coords.x||be.y!==z.coords.y}return z}},{key:"applyToInteraction",value:function(n){var d=this.interaction,f=n.phase,y=d.coords.cur,k=d.coords.start,T=this.result,L=this.startDelta,z=T.delta;f==="start"&&U(this.startDelta,T.delta);for(var q=0,B=[[k,L],[y,z]];q<B.length;q++){var W=B[q],Z=W[0],he=W[1];Z.page.x+=he.x,Z.page.y+=he.y,Z.client.x+=he.x,Z.client.y+=he.y}var de=this.result.rectDelta,be=n.rect||d.rect;be.left+=de.left,be.right+=de.right,be.top+=de.top,be.bottom+=de.bottom,be.width=be.right-be.left,be.height=be.bottom-be.top}},{key:"setAndApply",value:function(n){var d=this.interaction,f=n.phase,y=n.preEnd,k=n.skipModifiers,T=this.setAll(this.fillArg({preEnd:y,phase:f,pageCoords:n.modifiedCoords||d.coords.cur.page}));if(this.result=T,!T.changed&&(!k||k<this.states.length)&&d.interacting())return!1;if(n.modifiedCoords){var L=d.coords.cur.page,z={x:n.modifiedCoords.x-L.x,y:n.modifiedCoords.y-L.y};T.coords.x+=z.x,T.coords.y+=z.y,T.delta.x+=z.x,T.delta.y+=z.y}this.applyToInteraction(n)}},{key:"beforeEnd",value:function(n){var d=n.interaction,f=n.event,y=this.states;if(y&&y.length){for(var k=!1,T=0;T<y.length;T++){var L=y[T];n.state=L;var z=L.options,q=L.methods,B=q.beforeEnd&&q.beforeEnd(n);if(B)return this.endResult=B,!1;k=k||!k&&this.shouldDo(z,!0,n.phase,!0)}k&&d.move({event:f,preEnd:!0})}}},{key:"stop",value:function(n){var d=n.interaction;if(this.states&&this.states.length){var f=U({states:this.states,interactable:d.interactable,element:d.element,rect:null},n);this.fillArg(f);for(var y=0,k=this.states;y<k.length;y++){var T=k[y];f.state=T,T.methods.stop&&T.methods.stop(f)}this.states=null,this.endResult=null}}},{key:"prepareStates",value:function(n){this.states=[];for(var d=0;d<n.length;d++){var f=n[d],y=f.options,k=f.methods,T=f.name;this.states.push({options:y,methods:k,index:d,name:T})}return this.states}},{key:"restoreInteractionCoords",value:function(n){var d=n.interaction,f=d.coords,y=d.rect,k=d.modification;if(k.result){for(var T=k.startDelta,L=k.result,z=L.delta,q=L.rectDelta,B=0,W=[[f.start,T],[f.cur,z]];B<W.length;B++){var Z=W[B],he=Z[0],de=Z[1];he.page.x-=de.x,he.page.y-=de.y,he.client.x-=de.x,he.client.y-=de.y}y.left-=q.left,y.right-=q.right,y.top-=q.top,y.bottom-=q.bottom}}},{key:"shouldDo",value:function(n,d,f,y){return!(!n||n.enabled===!1||y&&!n.endOnly||n.endOnly&&!d||f==="start"&&!n.setStart)}},{key:"copyFrom",value:function(n){this.startOffset=n.startOffset,this.startDelta=n.startDelta,this.startEdges=n.startEdges,this.edges=n.edges,this.states=n.states.map((function(d){return gi(d)})),this.result=ji(U({},n.result.coords),U({},n.result.rect))}},{key:"destroy",value:function(){for(var n in this)this[n]=null}}]),o})();function ji(o,n){return{rect:n,coords:o,delta:{x:0,y:0},rectDelta:{left:0,right:0,top:0,bottom:0},eventProps:[],changed:!0}}function oi(o,n){var d=o.defaults,f={start:o.start,set:o.set,beforeEnd:o.beforeEnd,stop:o.stop},y=function(k){var T=k||{};for(var L in T.enabled=T.enabled!==!1,d)L in T||(T[L]=d[L]);var z={options:T,methods:f,name:n,enable:function(){return T.enabled=!0,z},disable:function(){return T.enabled=!1,z}};return z};return n&&typeof n=="string"&&(y._defaults=d,y._methods=f),y}function wt(o){var n=o.iEvent,d=o.interaction.modification.result;d&&(n.modifiers=d.eventProps)}var Sr={id:"modifiers/base",before:["actions"],install:function(o){o.defaults.perAction.modifiers=[]},listeners:{"interactions:new":function(o){var n=o.interaction;n.modification=new _i(n)},"interactions:before-action-start":function(o){var n=o.interaction,d=o.interaction.modification;d.start(o,n.coords.start.page),n.edges=d.edges,d.applyToInteraction(o)},"interactions:before-action-move":function(o){var n=o.interaction,d=n.modification,f=d.setAndApply(o);return n.edges=d.edges,f},"interactions:before-action-end":function(o){var n=o.interaction,d=n.modification,f=d.beforeEnd(o);return n.edges=d.startEdges,f},"interactions:action-start":wt,"interactions:action-move":wt,"interactions:action-end":wt,"interactions:after-action-start":function(o){return o.interaction.modification.restoreInteractionCoords(o)},"interactions:after-action-move":function(o){return o.interaction.modification.restoreInteractionCoords(o)},"interactions:stop":function(o){return o.interaction.modification.stop(o)}}},Oi=Sr,ai={base:{preventDefault:"auto",deltaSource:"page"},perAction:{enabled:!1,origin:{x:0,y:0}},actions:{}},ir=(function(o){c(d,o);var n=u(d);function d(f,y,k,T,L,z,q){var B;t(this,d),(B=n.call(this,f)).relatedTarget=null,B.screenX=void 0,B.screenY=void 0,B.button=void 0,B.buttons=void 0,B.ctrlKey=void 0,B.shiftKey=void 0,B.altKey=void 0,B.metaKey=void 0,B.page=void 0,B.client=void 0,B.delta=void 0,B.rect=void 0,B.x0=void 0,B.y0=void 0,B.t0=void 0,B.dt=void 0,B.duration=void 0,B.clientX0=void 0,B.clientY0=void 0,B.velocity=void 0,B.speed=void 0,B.swipe=void 0,B.axes=void 0,B.preEnd=void 0,L=L||f.element;var W=f.interactable,Z=(W&&W.options||ai).deltaSource,he=me(W,L,k),de=T==="start",be=T==="end",Re=de?h(B):f.prevEvent,Pe=de?f.coords.start:be?{page:Re.page,client:Re.client,timeStamp:f.coords.cur.timeStamp}:f.coords.cur;return B.page=U({},Pe.page),B.client=U({},Pe.client),B.rect=U({},f.rect),B.timeStamp=Pe.timeStamp,be||(B.page.x-=he.x,B.page.y-=he.y,B.client.x-=he.x,B.client.y-=he.y),B.ctrlKey=y.ctrlKey,B.altKey=y.altKey,B.shiftKey=y.shiftKey,B.metaKey=y.metaKey,B.button=y.button,B.buttons=y.buttons,B.target=L,B.currentTarget=L,B.preEnd=z,B.type=q||k+(T||""),B.interactable=W,B.t0=de?f.pointers[f.pointers.length-1].downTime:Re.t0,B.x0=f.coords.start.page.x-he.x,B.y0=f.coords.start.page.y-he.y,B.clientX0=f.coords.start.client.x-he.x,B.clientY0=f.coords.start.client.y-he.y,B.delta=de||be?{x:0,y:0}:{x:B[Z].x-Re[Z].x,y:B[Z].y-Re[Z].y},B.dt=f.coords.delta.timeStamp,B.duration=B.timeStamp-B.t0,B.velocity=U({},f.coords.velocity[Z]),B.speed=dt(B.velocity.x,B.velocity.y),B.swipe=be||T==="inertiastart"?B.getSwipe():null,B}return a(d,[{key:"getSwipe",value:function(){var f=this._interaction;if(f.prevEvent.speed<600||this.timeStamp-f.prevEvent.timeStamp>150)return null;var y=180*Math.atan2(f.prevEvent.velocityY,f.prevEvent.velocityX)/Math.PI;y<0&&(y+=360);var k=112.5<=y&&y<247.5,T=202.5<=y&&y<337.5;return{up:T,down:!T&&22.5<=y&&y<157.5,left:k,right:!k&&(292.5<=y||y<67.5),angle:y,speed:f.prevEvent.speed,velocity:{x:f.prevEvent.velocityX,y:f.prevEvent.velocityY}}}},{key:"preventDefault",value:function(){}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}}]),d})(ae);Object.defineProperties(ir.prototype,{pageX:{get:function(){return this.page.x},set:function(o){this.page.x=o}},pageY:{get:function(){return this.page.y},set:function(o){this.page.y=o}},clientX:{get:function(){return this.client.x},set:function(o){this.client.x=o}},clientY:{get:function(){return this.client.y},set:function(o){this.client.y=o}},dx:{get:function(){return this.delta.x},set:function(o){this.delta.x=o}},dy:{get:function(){return this.delta.y},set:function(o){this.delta.y=o}},velocityX:{get:function(){return this.velocity.x},set:function(o){this.velocity.x=o}},velocityY:{get:function(){return this.velocity.y},set:function(o){this.velocity.y=o}}});var Wi=a((function o(n,d,f,y,k){t(this,o),this.id=void 0,this.pointer=void 0,this.event=void 0,this.downTime=void 0,this.downTarget=void 0,this.id=n,this.pointer=d,this.event=f,this.downTime=y,this.downTarget=k})),xi=(function(o){return o.interactable="",o.element="",o.prepared="",o.pointerIsDown="",o.pointerWasMoved="",o._proxy="",o})({}),rr=(function(o){return o.start="",o.move="",o.end="",o.stop="",o.interacting="",o})({}),nr=0,or=(function(){function o(n){var d=this,f=n.pointerType,y=n.scopeFire;t(this,o),this.interactable=null,this.element=null,this.rect=null,this._rects=void 0,this.edges=null,this._scopeFire=void 0,this.prepared={name:null,axis:null,edges:null},this.pointerType=void 0,this.pointers=[],this.downEvent=null,this.downPointer={},this._latestPointer={pointer:null,event:null,eventTarget:null},this.prevEvent=null,this.pointerIsDown=!1,this.pointerWasMoved=!1,this._interacting=!1,this._ending=!1,this._stopped=!0,this._proxy=void 0,this.simulation=null,this.doMove=At((function(B){this.move(B)}),"The interaction.doMove() method has been renamed to interaction.move()"),this.coords={start:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},prev:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},cur:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},delta:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},velocity:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0}},this._id=nr++,this._scopeFire=y,this.pointerType=f;var k=this;this._proxy={};var T=function(B){Object.defineProperty(d._proxy,B,{get:function(){return k[B]}})};for(var L in xi)T(L);var z=function(B){Object.defineProperty(d._proxy,B,{value:function(){return k[B].apply(k,arguments)}})};for(var q in rr)z(q);this._scopeFire("interactions:new",{interaction:this})}return a(o,[{key:"pointerMoveTolerance",get:function(){return 1}},{key:"pointerDown",value:function(n,d,f){var y=this.updatePointer(n,d,f,!0),k=this.pointers[y];this._scopeFire("interactions:down",{pointer:n,event:d,eventTarget:f,pointerIndex:y,pointerInfo:k,type:"down",interaction:this})}},{key:"start",value:function(n,d,f){return!(this.interacting()||!this.pointerIsDown||this.pointers.length<(n.name==="gesture"?2:1)||!d.options[n.name].enabled)&&(ri(this.prepared,n),this.interactable=d,this.element=f,this.rect=d.getRect(f),this.edges=this.prepared.edges?U({},this.prepared.edges):{left:!0,right:!0,top:!0,bottom:!0},this._stopped=!1,this._interacting=this._doPhase({interaction:this,event:this.downEvent,phase:"start"})&&!this._stopped,this._interacting)}},{key:"pointerMove",value:function(n,d,f){this.simulation||this.modification&&this.modification.endResult||this.updatePointer(n,d,f,!1);var y,k,T=this.coords.cur.page.x===this.coords.prev.page.x&&this.coords.cur.page.y===this.coords.prev.page.y&&this.coords.cur.client.x===this.coords.prev.client.x&&this.coords.cur.client.y===this.coords.prev.client.y;this.pointerIsDown&&!this.pointerWasMoved&&(y=this.coords.cur.client.x-this.coords.start.client.x,k=this.coords.cur.client.y-this.coords.start.client.y,this.pointerWasMoved=dt(y,k)>this.pointerMoveTolerance);var L,z,q,B=this.getPointerIndex(n),W={pointer:n,pointerIndex:B,pointerInfo:this.pointers[B],event:d,type:"move",eventTarget:f,dx:y,dy:k,duplicate:T,interaction:this};T||(L=this.coords.velocity,z=this.coords.delta,q=Math.max(z.timeStamp/1e3,.001),L.page.x=z.page.x/q,L.page.y=z.page.y/q,L.client.x=z.client.x/q,L.client.y=z.client.y/q,L.timeStamp=q),this._scopeFire("interactions:move",W),T||this.simulation||(this.interacting()&&(W.type=null,this.move(W)),this.pointerWasMoved&&ut(this.coords.prev,this.coords.cur))}},{key:"move",value:function(n){n&&n.event||yt(this.coords.delta),(n=U({pointer:this._latestPointer.pointer,event:this._latestPointer.event,eventTarget:this._latestPointer.eventTarget,interaction:this},n||{})).phase="move",this._doPhase(n)}},{key:"pointerUp",value:function(n,d,f,y){var k=this.getPointerIndex(n);k===-1&&(k=this.updatePointer(n,d,f,!1));var T=/cancel$/i.test(d.type)?"cancel":"up";this._scopeFire("interactions:".concat(T),{pointer:n,pointerIndex:k,pointerInfo:this.pointers[k],event:d,eventTarget:f,type:T,curEventTarget:y,interaction:this}),this.simulation||this.end(d),this.removePointer(n,d)}},{key:"documentBlur",value:function(n){this.end(n),this._scopeFire("interactions:blur",{event:n,type:"blur",interaction:this})}},{key:"end",value:function(n){var d;this._ending=!0,n=n||this._latestPointer.event,this.interacting()&&(d=this._doPhase({event:n,interaction:this,phase:"end"})),this._ending=!1,d===!0&&this.stop()}},{key:"currentAction",value:function(){return this._interacting?this.prepared.name:null}},{key:"interacting",value:function(){return this._interacting}},{key:"stop",value:function(){this._scopeFire("interactions:stop",{interaction:this}),this.interactable=this.element=null,this._interacting=!1,this._stopped=!0,this.prepared.name=this.prevEvent=null}},{key:"getPointerIndex",value:function(n){var d=Ke(n);return this.pointerType==="mouse"||this.pointerType==="pen"?this.pointers.length-1:Le(this.pointers,(function(f){return f.id===d}))}},{key:"getPointerInfo",value:function(n){return this.pointers[this.getPointerIndex(n)]}},{key:"updatePointer",value:function(n,d,f,y){var k,T,L,z=Ke(n),q=this.getPointerIndex(n),B=this.pointers[q];return y=y!==!1&&(y||/(down|start)$/i.test(d.type)),B?B.pointer=n:(B=new Wi(z,n,d,null,null),q=this.pointers.length,this.pointers.push(B)),vt(this.coords.cur,this.pointers.map((function(W){return W.pointer})),this._now()),k=this.coords.delta,T=this.coords.prev,L=this.coords.cur,k.page.x=L.page.x-T.page.x,k.page.y=L.page.y-T.page.y,k.client.x=L.client.x-T.client.x,k.client.y=L.client.y-T.client.y,k.timeStamp=L.timeStamp-T.timeStamp,y&&(this.pointerIsDown=!0,B.downTime=this.coords.cur.timeStamp,B.downTarget=f,je(this.downPointer,n),this.interacting()||(ut(this.coords.start,this.coords.cur),ut(this.coords.prev,this.coords.cur),this.downEvent=d,this.pointerWasMoved=!1)),this._updateLatestPointer(n,d,f),this._scopeFire("interactions:update-pointer",{pointer:n,event:d,eventTarget:f,down:y,pointerInfo:B,pointerIndex:q,interaction:this}),q}},{key:"removePointer",value:function(n,d){var f=this.getPointerIndex(n);if(f!==-1){var y=this.pointers[f];this._scopeFire("interactions:remove-pointer",{pointer:n,event:d,eventTarget:null,pointerIndex:f,pointerInfo:y,interaction:this}),this.pointers.splice(f,1),this.pointerIsDown=!1}}},{key:"_updateLatestPointer",value:function(n,d,f){this._latestPointer.pointer=n,this._latestPointer.event=d,this._latestPointer.eventTarget=f}},{key:"destroy",value:function(){this._latestPointer.pointer=null,this._latestPointer.event=null,this._latestPointer.eventTarget=null}},{key:"_createPreparedEvent",value:function(n,d,f,y){return new ir(this,n,this.prepared.name,d,this.element,f,y)}},{key:"_fireEvent",value:function(n){var d;(d=this.interactable)==null||d.fire(n),(!this.prevEvent||n.timeStamp>=this.prevEvent.timeStamp)&&(this.prevEvent=n)}},{key:"_doPhase",value:function(n){var d=n.event,f=n.phase,y=n.preEnd,k=n.type,T=this.rect;if(T&&f==="move"&&(fe(this.edges,T,this.coords.delta[this.interactable.options.deltaSource]),T.width=T.right-T.left,T.height=T.bottom-T.top),this._scopeFire("interactions:before-action-".concat(f),n)===!1)return!1;var L=n.iEvent=this._createPreparedEvent(d,f,y,k);return this._scopeFire("interactions:action-".concat(f),n),f==="start"&&(this.prevEvent=L),this._fireEvent(L),this._scopeFire("interactions:after-action-".concat(f),n),!0}},{key:"_now",value:function(){return Date.now()}}]),o})();function ar(o){Cr(o.interaction)}function Cr(o){if(!(function(d){return!(!d.offset.pending.x&&!d.offset.pending.y)})(o))return!1;var n=o.offset.pending;return Ki(o.coords.cur,n),Ki(o.coords.delta,n),fe(o.edges,o.rect,n),n.x=0,n.y=0,!0}function Er(o){var n=o.x,d=o.y;this.offset.pending.x+=n,this.offset.pending.y+=d,this.offset.total.x+=n,this.offset.total.y+=d}function Ki(o,n){var d=o.page,f=o.client,y=n.x,k=n.y;d.x+=y,d.y+=k,f.x+=y,f.y+=k}rr.offsetBy="";var zi={id:"offset",before:["modifiers","pointer-events","actions","inertia"],install:function(o){o.Interaction.prototype.offsetBy=Er},listeners:{"interactions:new":function(o){o.interaction.offset={total:{x:0,y:0},pending:{x:0,y:0}}},"interactions:update-pointer":function(o){return(function(n){n.pointerIsDown&&(Ki(n.coords.cur,n.offset.total),n.offset.pending.x=0,n.offset.pending.y=0)})(o.interaction)},"interactions:before-action-start":ar,"interactions:before-action-move":ar,"interactions:before-action-end":function(o){var n=o.interaction;if(Cr(n))return n.move({offset:!0}),n.end(),!1},"interactions:stop":function(o){var n=o.interaction;n.offset.total.x=0,n.offset.total.y=0,n.offset.pending.x=0,n.offset.pending.y=0}}},sr=zi,Ar=(function(){function o(n){t(this,o),this.active=!1,this.isModified=!1,this.smoothEnd=!1,this.allowResume=!1,this.modification=void 0,this.modifierCount=0,this.modifierArg=void 0,this.startCoords=void 0,this.t0=0,this.v0=0,this.te=0,this.targetOffset=void 0,this.modifiedOffset=void 0,this.currentOffset=void 0,this.lambda_v0=0,this.one_ve_v0=0,this.timeout=void 0,this.interaction=void 0,this.interaction=n}return a(o,[{key:"start",value:function(n){var d=this.interaction,f=Di(d);if(!f||!f.enabled)return!1;var y=d.coords.velocity.client,k=dt(y.x,y.y),T=this.modification||(this.modification=new _i(d));if(T.copyFrom(d.modification),this.t0=d._now(),this.allowResume=f.allowResume,this.v0=k,this.currentOffset={x:0,y:0},this.startCoords=d.coords.cur.page,this.modifierArg=T.fillArg({pageCoords:this.startCoords,preEnd:!0,phase:"inertiastart"}),this.t0-d.coords.cur.timeStamp<50&&k>f.minSpeed&&k>f.endSpeed)this.startInertia();else{if(T.result=T.setAll(this.modifierArg),!T.result.changed)return!1;this.startSmoothEnd()}return d.modification.result.rect=null,d.offsetBy(this.targetOffset),d._doPhase({interaction:d,event:n,phase:"inertiastart"}),d.offsetBy({x:-this.targetOffset.x,y:-this.targetOffset.y}),d.modification.result.rect=null,this.active=!0,d.simulation=this,!0}},{key:"startInertia",value:function(){var n=this,d=this.interaction.coords.velocity.client,f=Di(this.interaction),y=f.resistance,k=-Math.log(f.endSpeed/this.v0)/y;this.targetOffset={x:(d.x-k)/y,y:(d.y-k)/y},this.te=k,this.lambda_v0=y/this.v0,this.one_ve_v0=1-f.endSpeed/this.v0;var T=this.modification,L=this.modifierArg;L.pageCoords={x:this.startCoords.x+this.targetOffset.x,y:this.startCoords.y+this.targetOffset.y},T.result=T.setAll(L),T.result.changed&&(this.isModified=!0,this.modifiedOffset={x:this.targetOffset.x+T.result.delta.x,y:this.targetOffset.y+T.result.delta.y}),this.onNextFrame((function(){return n.inertiaTick()}))}},{key:"startSmoothEnd",value:function(){var n=this;this.smoothEnd=!0,this.isModified=!0,this.targetOffset={x:this.modification.result.delta.x,y:this.modification.result.delta.y},this.onNextFrame((function(){return n.smoothEndTick()}))}},{key:"onNextFrame",value:function(n){var d=this;this.timeout=pe.request((function(){d.active&&n()}))}},{key:"inertiaTick",value:function(){var n,d,f,y,k,T,L,z=this,q=this.interaction,B=Di(q).resistance,W=(q._now()-this.t0)/1e3;if(W<this.te){var Z,he=1-(Math.exp(-B*W)-this.lambda_v0)/this.one_ve_v0;this.isModified?(n=0,d=0,f=this.targetOffset.x,y=this.targetOffset.y,k=this.modifiedOffset.x,T=this.modifiedOffset.y,Z={x:cr(L=he,n,f,k),y:cr(L,d,y,T)}):Z={x:this.targetOffset.x*he,y:this.targetOffset.y*he};var de={x:Z.x-this.currentOffset.x,y:Z.y-this.currentOffset.y};this.currentOffset.x+=de.x,this.currentOffset.y+=de.y,q.offsetBy(de),q.move(),this.onNextFrame((function(){return z.inertiaTick()}))}else q.offsetBy({x:this.modifiedOffset.x-this.currentOffset.x,y:this.modifiedOffset.y-this.currentOffset.y}),this.end()}},{key:"smoothEndTick",value:function(){var n=this,d=this.interaction,f=d._now()-this.t0,y=Di(d).smoothEndDuration;if(f<y){var k={x:dr(f,0,this.targetOffset.x,y),y:dr(f,0,this.targetOffset.y,y)},T={x:k.x-this.currentOffset.x,y:k.y-this.currentOffset.y};this.currentOffset.x+=T.x,this.currentOffset.y+=T.y,d.offsetBy(T),d.move({skipModifiers:this.modifierCount}),this.onNextFrame((function(){return n.smoothEndTick()}))}else d.offsetBy({x:this.targetOffset.x-this.currentOffset.x,y:this.targetOffset.y-this.currentOffset.y}),this.end()}},{key:"resume",value:function(n){var d=n.pointer,f=n.event,y=n.eventTarget,k=this.interaction;k.offsetBy({x:-this.currentOffset.x,y:-this.currentOffset.y}),k.updatePointer(d,f,y,!0),k._doPhase({interaction:k,event:f,phase:"resume"}),ut(k.coords.prev,k.coords.cur),this.stop()}},{key:"end",value:function(){this.interaction.move(),this.interaction.end(),this.stop()}},{key:"stop",value:function(){this.active=this.smoothEnd=!1,this.interaction.simulation=null,pe.cancel(this.timeout)}}]),o})();function Di(o){var n=o.interactable,d=o.prepared;return n&&n.options&&d.name&&n.options[d.name].inertia}var Tr={id:"inertia",before:["modifiers","actions"],install:function(o){var n=o.defaults;o.usePlugin(sr),o.usePlugin(Oi),o.actions.phases.inertiastart=!0,o.actions.phases.resume=!0,n.perAction.inertia={enabled:!1,resistance:10,minSpeed:100,endSpeed:10,allowResume:!0,smoothEndDuration:300}},listeners:{"interactions:new":function(o){var n=o.interaction;n.inertia=new Ar(n)},"interactions:before-action-end":function(o){var n=o.interaction,d=o.event;return(!n._interacting||n.simulation||!n.inertia.start(d))&&null},"interactions:down":function(o){var n=o.interaction,d=o.eventTarget,f=n.inertia;if(f.active)for(var y=d;b.element(y);){if(y===n.element){f.resume(o);break}y=re(y)}},"interactions:stop":function(o){var n=o.interaction.inertia;n.active&&n.stop()},"interactions:before-action-resume":function(o){var n=o.interaction.modification;n.stop(o),n.start(o,o.interaction.coords.cur.page),n.applyToInteraction(o)},"interactions:before-action-inertiastart":function(o){return o.interaction.modification.setAndApply(o)},"interactions:action-resume":wt,"interactions:action-inertiastart":wt,"interactions:after-action-inertiastart":function(o){return o.interaction.modification.restoreInteractionCoords(o)},"interactions:after-action-resume":function(o){return o.interaction.modification.restoreInteractionCoords(o)}}};function cr(o,n,d,f){var y=1-o;return y*y*n+2*y*o*d+o*o*f}function dr(o,n,d,f){return-d*(o/=f)*(o-2)+n}var Pr=Tr;function lr(o,n){for(var d=0;d<n.length;d++){var f=n[d];if(o.immediatePropagationStopped)break;f(o)}}var pr=(function(){function o(n){t(this,o),this.options=void 0,this.types={},this.propagationStopped=!1,this.immediatePropagationStopped=!1,this.global=void 0,this.options=U({},n||{})}return a(o,[{key:"fire",value:function(n){var d,f=this.global;(d=this.types[n.type])&&lr(n,d),!n.propagationStopped&&f&&(d=f[n.type])&&lr(n,d)}},{key:"on",value:function(n,d){var f=ye(n,d);for(n in f)this.types[n]=He(this.types[n]||[],f[n])}},{key:"off",value:function(n,d){var f=ye(n,d);for(n in f){var y=this.types[n];if(y&&y.length)for(var k=0,T=f[n];k<T.length;k++){var L=T[k],z=y.indexOf(L);z!==-1&&y.splice(z,1)}}}},{key:"getRect",value:function(n){return null}}]),o})(),Lr=(function(){function o(n){t(this,o),this.currentTarget=void 0,this.originalEvent=void 0,this.type=void 0,this.originalEvent=n,je(this,n)}return a(o,[{key:"preventOriginalDefault",value:function(){this.originalEvent.preventDefault()}},{key:"stopPropagation",value:function(){this.originalEvent.stopPropagation()}},{key:"stopImmediatePropagation",value:function(){this.originalEvent.stopImmediatePropagation()}}]),o})();function wi(o){return b.object(o)?{capture:!!o.capture,passive:!!o.passive}:{capture:!!o,passive:!1}}function Ii(o,n){return o===n||(typeof o=="boolean"?!!n.capture===o&&!n.passive:!!o.capture==!!n.capture&&!!o.passive==!!n.passive)}var Yi={id:"events",install:function(o){var n,d=[],f={},y=[],k={add:T,remove:L,addDelegate:function(B,W,Z,he,de){var be=wi(de);if(!f[Z]){f[Z]=[];for(var Re=0;Re<y.length;Re++){var Pe=y[Re];T(Pe,Z,z),T(Pe,Z,q,!0)}}var Ae=f[Z],We=ze(Ae,(function(at){return at.selector===B&&at.context===W}));We||(We={selector:B,context:W,listeners:[]},Ae.push(We)),We.listeners.push({func:he,options:be})},removeDelegate:function(B,W,Z,he,de){var be,Re=wi(de),Pe=f[Z],Ae=!1;if(Pe)for(be=Pe.length-1;be>=0;be--){var We=Pe[be];if(We.selector===B&&We.context===W){for(var at=We.listeners,Je=at.length-1;Je>=0;Je--){var it=at[Je];if(it.func===he&&Ii(it.options,Re)){at.splice(Je,1),at.length||(Pe.splice(be,1),L(W,Z,z),L(W,Z,q,!0)),Ae=!0;break}}if(Ae)break}}},delegateListener:z,delegateUseCapture:q,delegatedEvents:f,documents:y,targets:d,supportsOptions:!1,supportsPassive:!1};function T(B,W,Z,he){if(B.addEventListener){var de=wi(he),be=ze(d,(function(Re){return Re.eventTarget===B}));be||(be={eventTarget:B,events:{}},d.push(be)),be.events[W]||(be.events[W]=[]),ze(be.events[W],(function(Re){return Re.func===Z&&Ii(Re.options,de)}))||(B.addEventListener(W,Z,k.supportsOptions?de:de.capture),be.events[W].push({func:Z,options:de}))}}function L(B,W,Z,he){if(B.addEventListener&&B.removeEventListener){var de=Le(d,(function(Ft){return Ft.eventTarget===B})),be=d[de];if(be&&be.events)if(W!=="all"){var Re=!1,Pe=be.events[W];if(Pe){if(Z==="all"){for(var Ae=Pe.length-1;Ae>=0;Ae--){var We=Pe[Ae];L(B,W,We.func,We.options)}return}for(var at=wi(he),Je=0;Je<Pe.length;Je++){var it=Pe[Je];if(it.func===Z&&Ii(it.options,at)){B.removeEventListener(W,Z,k.supportsOptions?at:at.capture),Pe.splice(Je,1),Pe.length===0&&(delete be.events[W],Re=!0);break}}}Re&&!Object.keys(be.events).length&&d.splice(de,1)}else for(W in be.events)be.events.hasOwnProperty(W)&&L(B,W,"all")}}function z(B,W){for(var Z=wi(W),he=new Lr(B),de=f[B.type],be=oe(B)[0],Re=be;b.element(Re);){for(var Pe=0;Pe<de.length;Pe++){var Ae=de[Pe],We=Ae.selector,at=Ae.context;if(ee(Re,We)&&X(at,be)&&X(at,Re)){var Je=Ae.listeners;he.currentTarget=Re;for(var it=0;it<Je.length;it++){var Ft=Je[it];Ii(Ft.options,Z)&&Ft.func(he)}}}Re=re(Re)}}function q(B){return z(B,!0)}return(n=o.document)==null||n.createElement("div").addEventListener("test",null,{get capture(){return k.supportsOptions=!0},get passive(){return k.supportsPassive=!0}}),o.events=k,k}},Ui={methodOrder:["simulationResume","mouseOrPen","hasPointer","idle"],search:function(o){for(var n=0,d=Ui.methodOrder;n<d.length;n++){var f=d[n],y=Ui[f](o);if(y)return y}return null},simulationResume:function(o){var n=o.pointerType,d=o.eventType,f=o.eventTarget,y=o.scope;if(!/down|start/i.test(d))return null;for(var k=0,T=y.interactions.list;k<T.length;k++){var L=T[k],z=f;if(L.simulation&&L.simulation.allowResume&&L.pointerType===n)for(;z;){if(z===L.element)return L;z=re(z)}}return null},mouseOrPen:function(o){var n,d=o.pointerId,f=o.pointerType,y=o.eventType,k=o.scope;if(f!=="mouse"&&f!=="pen")return null;for(var T=0,L=k.interactions.list;T<L.length;T++){var z=L[T];if(z.pointerType===f){if(z.simulation&&!hr(z,d))continue;if(z.interacting())return z;n||(n=z)}}if(n)return n;for(var q=0,B=k.interactions.list;q<B.length;q++){var W=B[q];if(!(W.pointerType!==f||/down/i.test(y)&&W.simulation))return W}return null},hasPointer:function(o){for(var n=o.pointerId,d=0,f=o.scope.interactions.list;d<f.length;d++){var y=f[d];if(hr(y,n))return y}return null},idle:function(o){for(var n=o.pointerType,d=0,f=o.scope.interactions.list;d<f.length;d++){var y=f[d];if(y.pointers.length===1){var k=y.interactable;if(k&&(!k.options.gesture||!k.options.gesture.enabled))continue}else if(y.pointers.length>=2)continue;if(!y.interacting()&&n===y.pointerType)return y}return null}};function hr(o,n){return o.pointers.some((function(d){return d.id===n}))}var Mr=Ui,Gi=["pointerDown","pointerMove","pointerUp","updatePointer","removePointer","windowBlur"];function ur(o,n){return function(d){var f=n.interactions.list,y=ii(d),k=oe(d),T=k[0],L=k[1],z=[];if(/^touch/.test(d.type)){n.prevTouchTime=n.now();for(var q=0,B=d.changedTouches;q<B.length;q++){var W=B[q],Z={pointer:W,pointerId:Ke(W),pointerType:y,eventType:d.type,eventTarget:T,curEventTarget:L,scope:n},he=gr(Z);z.push([Z.pointer,Z.eventTarget,Z.curEventTarget,he])}}else{var de=!1;if(!Y.supportsPointerEvent&&/mouse/.test(d.type)){for(var be=0;be<f.length&&!de;be++)de=f[be].pointerType!=="mouse"&&f[be].pointerIsDown;de=de||n.now()-n.prevTouchTime<500||d.timeStamp===0}if(!de){var Re={pointer:d,pointerId:Ke(d),pointerType:y,eventType:d.type,curEventTarget:L,eventTarget:T,scope:n},Pe=gr(Re);z.push([Re.pointer,Re.eventTarget,Re.curEventTarget,Pe])}}for(var Ae=0;Ae<z.length;Ae++){var We=z[Ae],at=We[0],Je=We[1],it=We[2];We[3][o](at,d,Je,it)}}}function gr(o){var n=o.pointerType,d=o.scope,f={interaction:Mr.search(o),searchDetails:o};return d.fire("interactions:find",f),f.interaction||d.interactions.new({pointerType:n})}function I(o,n){var d=o.doc,f=o.scope,y=o.options,k=f.interactions.docEvents,T=f.events,L=T[n];for(var z in f.browser.isIOS&&!y.events&&(y.events={passive:!1}),T.delegatedEvents)L(d,z,T.delegateListener),L(d,z,T.delegateUseCapture,!0);for(var q=y&&y.events,B=0;B<k.length;B++){var W=k[B];L(d,W.type,W.listener,q)}}var j={id:"core/interactions",install:function(o){for(var n={},d=0;d<Gi.length;d++){var f=Gi[d];n[f]=ur(f,o)}var y,k=Y.pEventTypes;function T(){for(var L=0,z=o.interactions.list;L<z.length;L++){var q=z[L];if(q.pointerIsDown&&q.pointerType==="touch"&&!q._interacting)for(var B=function(){var he=Z[W];o.documents.some((function(de){return X(de.doc,he.downTarget)}))||q.removePointer(he.pointer,he.event)},W=0,Z=q.pointers;W<Z.length;W++)B()}}(y=N.PointerEvent?[{type:k.down,listener:T},{type:k.down,listener:n.pointerDown},{type:k.move,listener:n.pointerMove},{type:k.up,listener:n.pointerUp},{type:k.cancel,listener:n.pointerUp}]:[{type:"mousedown",listener:n.pointerDown},{type:"mousemove",listener:n.pointerMove},{type:"mouseup",listener:n.pointerUp},{type:"touchstart",listener:T},{type:"touchstart",listener:n.pointerDown},{type:"touchmove",listener:n.pointerMove},{type:"touchend",listener:n.pointerUp},{type:"touchcancel",listener:n.pointerUp}]).push({type:"blur",listener:function(L){for(var z=0,q=o.interactions.list;z<q.length;z++)q[z].documentBlur(L)}}),o.prevTouchTime=0,o.Interaction=(function(L){c(q,L);var z=u(q);function q(){return t(this,q),z.apply(this,arguments)}return a(q,[{key:"pointerMoveTolerance",get:function(){return o.interactions.pointerMoveTolerance},set:function(B){o.interactions.pointerMoveTolerance=B}},{key:"_now",value:function(){return o.now()}}]),q})(or),o.interactions={list:[],new:function(L){L.scopeFire=function(q,B){return o.fire(q,B)};var z=new o.Interaction(L);return o.interactions.list.push(z),z},listeners:n,docEvents:y,pointerMoveTolerance:1},o.usePlugin(kr)},listeners:{"scope:add-document":function(o){return I(o,"add")},"scope:remove-document":function(o){return I(o,"remove")},"interactable:unset":function(o,n){for(var d=o.interactable,f=n.interactions.list.length-1;f>=0;f--){var y=n.interactions.list[f];y.interactable===d&&(y.stop(),n.fire("interactions:destroy",{interaction:y}),y.destroy(),n.interactions.list.length>2&&n.interactions.list.splice(f,1))}}},onDocSignal:I,doOnInteractions:ur,methodNames:Gi},K=j,te=(function(o){return o[o.On=0]="On",o[o.Off=1]="Off",o})(te||{}),_e=(function(){function o(n,d,f,y){t(this,o),this.target=void 0,this.options=void 0,this._actions=void 0,this.events=new pr,this._context=void 0,this._win=void 0,this._doc=void 0,this._scopeEvents=void 0,this._actions=d.actions,this.target=n,this._context=d.context||f,this._win=C(ne(n)?this._context:n),this._doc=this._win.document,this._scopeEvents=y,this.set(d)}return a(o,[{key:"_defaults",get:function(){return{base:{},perAction:{},actions:{}}}},{key:"setOnEvents",value:function(n,d){return b.func(d.onstart)&&this.on("".concat(n,"start"),d.onstart),b.func(d.onmove)&&this.on("".concat(n,"move"),d.onmove),b.func(d.onend)&&this.on("".concat(n,"end"),d.onend),b.func(d.oninertiastart)&&this.on("".concat(n,"inertiastart"),d.oninertiastart),this}},{key:"updatePerActionListeners",value:function(n,d,f){var y,k=this,T=(y=this._actions.map[n])==null?void 0:y.filterEventType,L=function(z){return(T==null||T(z))&&ui(z,k._actions)};(b.array(d)||b.object(d))&&this._onOff(te.Off,n,d,void 0,L),(b.array(f)||b.object(f))&&this._onOff(te.On,n,f,void 0,L)}},{key:"setPerAction",value:function(n,d){var f=this._defaults;for(var y in d){var k=y,T=this.options[n],L=d[k];k==="listeners"&&this.updatePerActionListeners(n,T.listeners,L),b.array(L)?T[k]=De(L):b.plainObject(L)?(T[k]=U(T[k]||{},gi(L)),b.object(f.perAction[k])&&"enabled"in f.perAction[k]&&(T[k].enabled=L.enabled!==!1)):b.bool(L)&&b.object(f.perAction[k])?T[k].enabled=L:T[k]=L}}},{key:"getRect",value:function(n){return n=n||(b.element(this.target)?this.target:null),b.string(this.target)&&(n=n||this._context.querySelector(this.target)),V(n)}},{key:"rectChecker",value:function(n){var d=this;return b.func(n)?(this.getRect=function(f){var y=U({},n.apply(d,f));return"width"in y||(y.width=y.right-y.left,y.height=y.bottom-y.top),y},this):n===null?(delete this.getRect,this):this.getRect}},{key:"_backCompatOption",value:function(n,d){if(ne(d)||b.object(d)){for(var f in this.options[n]=d,this._actions.map)this.options[f][n]=d;return this}return this.options[n]}},{key:"origin",value:function(n){return this._backCompatOption("origin",n)}},{key:"deltaSource",value:function(n){return n==="page"||n==="client"?(this.options.deltaSource=n,this):this.options.deltaSource}},{key:"getAllElements",value:function(){var n=this.target;return b.string(n)?Array.from(this._context.querySelectorAll(n)):b.func(n)&&n.getAllElements?n.getAllElements():b.element(n)?[n]:[]}},{key:"context",value:function(){return this._context}},{key:"inContext",value:function(n){return this._context===n.ownerDocument||X(this._context,n)}},{key:"testIgnoreAllow",value:function(n,d,f){return!this.testIgnore(n.ignoreFrom,d,f)&&this.testAllow(n.allowFrom,d,f)}},{key:"testAllow",value:function(n,d,f){return!n||!!b.element(f)&&(b.string(n)?ge(f,n,d):!!b.element(n)&&X(n,f))}},{key:"testIgnore",value:function(n,d,f){return!(!n||!b.element(f))&&(b.string(n)?ge(f,n,d):!!b.element(n)&&X(n,f))}},{key:"fire",value:function(n){return this.events.fire(n),this}},{key:"_onOff",value:function(n,d,f,y,k){b.object(d)&&!b.array(d)&&(y=f,f=null);var T=ye(d,f,k);for(var L in T){L==="wheel"&&(L=Y.wheelEvent);for(var z=0,q=T[L];z<q.length;z++){var B=q[z];ui(L,this._actions)?this.events[n===te.On?"on":"off"](L,B):b.string(this.target)?this._scopeEvents[n===te.On?"addDelegate":"removeDelegate"](this.target,this._context,L,B,y):this._scopeEvents[n===te.On?"add":"remove"](this.target,L,B,y)}}return this}},{key:"on",value:function(n,d,f){return this._onOff(te.On,n,d,f)}},{key:"off",value:function(n,d,f){return this._onOff(te.Off,n,d,f)}},{key:"set",value:function(n){var d=this._defaults;for(var f in b.object(n)||(n={}),this.options=gi(d.base),this._actions.methodDict){var y=f,k=this._actions.methodDict[y];this.options[y]={},this.setPerAction(y,U(U({},d.perAction),d.actions[y])),this[k](n[y])}for(var T in n)T!=="getRect"?b.func(this[T])&&this[T](n[T]):this.rectChecker(n.getRect);return this}},{key:"unset",value:function(){if(b.string(this.target))for(var n in this._scopeEvents.delegatedEvents)for(var d=this._scopeEvents.delegatedEvents[n],f=d.length-1;f>=0;f--){var y=d[f],k=y.selector,T=y.context,L=y.listeners;k===this.target&&T===this._context&&d.splice(f,1);for(var z=L.length-1;z>=0;z--)this._scopeEvents.removeDelegate(this.target,this._context,n,L[z][0],L[z][1])}else this._scopeEvents.remove(this.target,"all")}}]),o})(),we=(function(){function o(n){var d=this;t(this,o),this.list=[],this.selectorMap={},this.scope=void 0,this.scope=n,n.addListeners({"interactable:unset":function(f){var y=f.interactable,k=y.target,T=b.string(k)?d.selectorMap[k]:k[d.scope.id],L=Le(T,(function(z){return z===y}));T.splice(L,1)}})}return a(o,[{key:"new",value:function(n,d){d=U(d||{},{actions:this.scope.actions});var f=new this.scope.Interactable(n,d,this.scope.document,this.scope.events);return this.scope.addDocument(f._doc),this.list.push(f),b.string(n)?(this.selectorMap[n]||(this.selectorMap[n]=[]),this.selectorMap[n].push(f)):(f.target[this.scope.id]||Object.defineProperty(n,this.scope.id,{value:[],configurable:!0}),n[this.scope.id].push(f)),this.scope.fire("interactable:new",{target:n,options:d,interactable:f,win:this.scope._win}),f}},{key:"getExisting",value:function(n,d){var f=d&&d.context||this.scope.document,y=b.string(n),k=y?this.selectorMap[n]:n[this.scope.id];if(k)return ze(k,(function(T){return T._context===f&&(y||T.inContext(n))}))}},{key:"forEachMatch",value:function(n,d){for(var f=0,y=this.list;f<y.length;f++){var k=y[f],T=void 0;if((b.string(k.target)?b.element(n)&&ee(n,k.target):n===k.target)&&k.inContext(n)&&(T=d(k)),T!==void 0)return T}}}]),o})(),Me=(function(){function o(){var n=this;t(this,o),this.id="__interact_scope_".concat(Math.floor(100*Math.random())),this.isInitialized=!1,this.listenerMaps=[],this.browser=Y,this.defaults=gi(ai),this.Eventable=pr,this.actions={map:{},phases:{start:!0,move:!0,end:!0},methodDict:{},phaselessTypes:{}},this.interactStatic=(function(f){var y=function k(T,L){var z=f.interactables.getExisting(T,L);return z||((z=f.interactables.new(T,L)).events.global=k.globalEvents),z};return y.getPointerAverage=It,y.getTouchBBox=Bt,y.getTouchDistance=Rt,y.getTouchAngle=Lt,y.getElementRect=V,y.getElementClientRect=H,y.matchesSelector=ee,y.closest=le,y.globalEvents={},y.version="1.10.27",y.scope=f,y.use=function(k,T){return this.scope.usePlugin(k,T),this},y.isSet=function(k,T){return!!this.scope.interactables.get(k,T&&T.context)},y.on=At((function(k,T,L){if(b.string(k)&&k.search(" ")!==-1&&(k=k.trim().split(/ +/)),b.array(k)){for(var z=0,q=k;z<q.length;z++){var B=q[z];this.on(B,T,L)}return this}if(b.object(k)){for(var W in k)this.on(W,k[W],T);return this}return ui(k,this.scope.actions)?this.globalEvents[k]?this.globalEvents[k].push(T):this.globalEvents[k]=[T]:this.scope.events.add(this.scope.document,k,T,{options:L}),this}),"The interact.on() method is being deprecated"),y.off=At((function(k,T,L){if(b.string(k)&&k.search(" ")!==-1&&(k=k.trim().split(/ +/)),b.array(k)){for(var z=0,q=k;z<q.length;z++){var B=q[z];this.off(B,T,L)}return this}if(b.object(k)){for(var W in k)this.off(W,k[W],T);return this}var Z;return ui(k,this.scope.actions)?k in this.globalEvents&&(Z=this.globalEvents[k].indexOf(T))!==-1&&this.globalEvents[k].splice(Z,1):this.scope.events.remove(this.scope.document,k,T,L),this}),"The interact.off() method is being deprecated"),y.debug=function(){return this.scope},y.supportsTouch=function(){return Y.supportsTouch},y.supportsPointerEvent=function(){return Y.supportsPointerEvent},y.stop=function(){for(var k=0,T=this.scope.interactions.list;k<T.length;k++)T[k].stop();return this},y.pointerMoveTolerance=function(k){return b.number(k)?(this.scope.interactions.pointerMoveTolerance=k,this):this.scope.interactions.pointerMoveTolerance},y.addDocument=function(k,T){this.scope.addDocument(k,T)},y.removeDocument=function(k){this.scope.removeDocument(k)},y})(this),this.InteractEvent=ir,this.Interactable=void 0,this.interactables=new we(this),this._win=void 0,this.document=void 0,this.window=void 0,this.documents=[],this._plugins={list:[],map:{}},this.onWindowUnload=function(f){return n.removeDocument(f.target)};var d=this;this.Interactable=(function(f){c(k,f);var y=u(k);function k(){return t(this,k),y.apply(this,arguments)}return a(k,[{key:"_defaults",get:function(){return d.defaults}},{key:"set",value:function(T){return p(l(k.prototype),"set",this).call(this,T),d.fire("interactable:set",{options:T,interactable:this}),this}},{key:"unset",value:function(){p(l(k.prototype),"unset",this).call(this);var T=d.interactables.list.indexOf(this);T<0||(d.interactables.list.splice(T,1),d.fire("interactable:unset",{interactable:this}))}}]),k})(_e)}return a(o,[{key:"addListeners",value:function(n,d){this.listenerMaps.push({id:d,map:n})}},{key:"fire",value:function(n,d){for(var f=0,y=this.listenerMaps;f<y.length;f++){var k=y[f].map[n];if(k&&k(d,this,n)===!1)return!1}}},{key:"init",value:function(n){return this.isInitialized?this:(function(d,f){return d.isInitialized=!0,b.window(f)&&O(f),N.init(f),Y.init(f),pe.init(f),d.window=f,d.document=f.document,d.usePlugin(K),d.usePlugin(Yi),d})(this,n)}},{key:"pluginIsInstalled",value:function(n){var d=n.id;return d?!!this._plugins.map[d]:this._plugins.list.indexOf(n)!==-1}},{key:"usePlugin",value:function(n,d){if(!this.isInitialized)return this;if(this.pluginIsInstalled(n))return this;if(n.id&&(this._plugins.map[n.id]=n),this._plugins.list.push(n),n.install&&n.install(this,d),n.listeners&&n.before){for(var f=0,y=this.listenerMaps.length,k=n.before.reduce((function(L,z){return L[z]=!0,L[Fe(z)]=!0,L}),{});f<y;f++){var T=this.listenerMaps[f].id;if(T&&(k[T]||k[Fe(T)]))break}this.listenerMaps.splice(f,0,{id:n.id,map:n.listeners})}else n.listeners&&this.listenerMaps.push({id:n.id,map:n.listeners});return this}},{key:"addDocument",value:function(n,d){if(this.getDocIndex(n)!==-1)return!1;var f=C(n);d=d?U({},d):{},this.documents.push({doc:n,options:d}),this.events.documents.push(n),n!==this.document&&this.events.add(f,"unload",this.onWindowUnload),this.fire("scope:add-document",{doc:n,window:f,scope:this,options:d})}},{key:"removeDocument",value:function(n){var d=this.getDocIndex(n),f=C(n),y=this.documents[d].options;this.events.remove(f,"unload",this.onWindowUnload),this.documents.splice(d,1),this.events.documents.splice(d,1),this.fire("scope:remove-document",{doc:n,window:f,scope:this,options:y})}},{key:"getDocIndex",value:function(n){for(var d=0;d<this.documents.length;d++)if(this.documents[d].doc===n)return d;return-1}},{key:"getDocOptions",value:function(n){var d=this.getDocIndex(n);return d===-1?null:this.documents[d].options}},{key:"now",value:function(){return(this.window.Date||Date).now()}}]),o})();function Fe(o){return o&&o.replace(/\/.*$/,"")}var Ye=new Me,qe=Ye.interactStatic,ot=typeof globalThis!="undefined"?globalThis:window;Ye.init(ot);var st=Object.freeze({__proto__:null,edgeTarget:function(){},elements:function(){},grid:function(o){var n=[["x","y"],["left","top"],["right","bottom"],["width","height"]].filter((function(f){var y=f[0],k=f[1];return y in o||k in o})),d=function(f,y){for(var k=o.range,T=o.limits,L=T===void 0?{left:-1/0,right:1/0,top:-1/0,bottom:1/0}:T,z=o.offset,q=z===void 0?{x:0,y:0}:z,B={range:k,grid:o,x:null,y:null},W=0;W<n.length;W++){var Z=n[W],he=Z[0],de=Z[1],be=Math.round((f-q.x)/o[he]),Re=Math.round((y-q.y)/o[de]);B[he]=Math.max(L.left,Math.min(L.right,be*o[he]+q.x)),B[de]=Math.max(L.top,Math.min(L.bottom,Re*o[de]+q.y))}return B};return d.grid=o,d.coordFields=n,d}}),Ht={id:"snappers",install:function(o){var n=o.interactStatic;n.snappers=U(n.snappers||{},st),n.createSnapGrid=n.snappers.grid}},Nt=Ht,Kt={start:function(o){var n=o.state,d=o.rect,f=o.edges,y=o.pageCoords,k=n.options,T=k.ratio,L=k.enabled,z=n.options,q=z.equalDelta,B=z.modifiers;T==="preserve"&&(T=d.width/d.height),n.startCoords=U({},y),n.startRect=U({},d),n.ratio=T,n.equalDelta=q;var W=n.linkedEdges={top:f.top||f.left&&!f.bottom,left:f.left||f.top&&!f.right,bottom:f.bottom||f.right&&!f.top,right:f.right||f.bottom&&!f.left};if(n.xIsPrimaryAxis=!(!f.left&&!f.right),n.equalDelta){var Z=(W.left?1:-1)*(W.top?1:-1);n.edgeSign={x:Z,y:Z}}else n.edgeSign={x:W.left?-1:1,y:W.top?-1:1};if(L!==!1&&U(f,W),B!=null&&B.length){var he=new _i(o.interaction);he.copyFrom(o.interaction.modification),he.prepareStates(B),n.subModification=he,he.startAll(w({},o))}},set:function(o){var n=o.state,d=o.rect,f=o.coords,y=n.linkedEdges,k=U({},f),T=n.equalDelta?qt:Yt;if(U(o.edges,y),T(n,n.xIsPrimaryAxis,f,d),!n.subModification)return null;var L=U({},d);fe(y,L,{x:f.x-k.x,y:f.y-k.y});var z=n.subModification.setAll(w(w({},o),{},{rect:L,edges:y,pageCoords:f,prevCoords:f,prevRect:L})),q=z.delta;return z.changed&&(T(n,Math.abs(q.x)>Math.abs(q.y),z.coords,z.rect),U(f,z.coords)),z.eventProps},defaults:{ratio:"preserve",equalDelta:!1,modifiers:[],enabled:!1}};function qt(o,n,d){var f=o.startCoords,y=o.edgeSign;n?d.y=f.y+(d.x-f.x)*y.y:d.x=f.x+(d.y-f.y)*y.x}function Yt(o,n,d,f){var y=o.startRect,k=o.startCoords,T=o.ratio,L=o.edgeSign;if(n){var z=f.width/T;d.y=k.y+(z-y.height)*L.y}else{var q=f.height*T;d.x=k.x+(q-y.width)*L.x}}var $t=oi(Kt,"aspectRatio"),ei=function(){};ei._defaults={};var kt=ei;function Mt(o,n,d){return b.func(o)?Ne(o,n.interactable,n.element,[d.x,d.y,n]):Ne(o,n.interactable,n.element)}var Ut={start:function(o){var n=o.rect,d=o.startOffset,f=o.state,y=o.interaction,k=o.pageCoords,T=f.options,L=T.elementRect,z=U({left:0,top:0,right:0,bottom:0},T.offset||{});if(n&&L){var q=Mt(T.restriction,y,k);if(q){var B=q.right-q.left-n.width,W=q.bottom-q.top-n.height;B<0&&(z.left+=B,z.right+=B),W<0&&(z.top+=W,z.bottom+=W)}z.left+=d.left-n.width*L.left,z.top+=d.top-n.height*L.top,z.right+=d.right-n.width*(1-L.right),z.bottom+=d.bottom-n.height*(1-L.bottom)}f.offset=z},set:function(o){var n=o.coords,d=o.interaction,f=o.state,y=f.options,k=f.offset,T=Mt(y.restriction,d,n);if(T){var L=(function(z){return!z||"left"in z&&"top"in z||((z=U({},z)).left=z.x||0,z.top=z.y||0,z.right=z.right||z.left+z.width,z.bottom=z.bottom||z.top+z.height),z})(T);n.x=Math.max(Math.min(L.right-k.right,n.x),L.left+k.left),n.y=Math.max(Math.min(L.bottom-k.bottom,n.y),L.top+k.top)}},defaults:{restriction:null,elementRect:null,offset:null,endOnly:!1,enabled:!1}},di=oi(Ut,"restrict"),fi={top:1/0,left:1/0,bottom:-1/0,right:-1/0},ki={top:-1/0,left:-1/0,bottom:1/0,right:1/0};function li(o,n){for(var d=0,f=["top","left","bottom","right"];d<f.length;d++){var y=f[d];y in o||(o[y]=n[y])}return o}var mi={noInner:fi,noOuter:ki,start:function(o){var n,d=o.interaction,f=o.startOffset,y=o.state,k=y.options;k&&(n=Ue(Mt(k.offset,d,d.coords.start.page))),n=n||{x:0,y:0},y.offset={top:n.y+f.top,left:n.x+f.left,bottom:n.y-f.bottom,right:n.x-f.right}},set:function(o){var n=o.coords,d=o.edges,f=o.interaction,y=o.state,k=y.offset,T=y.options;if(d){var L=U({},n),z=Mt(T.inner,f,L)||{},q=Mt(T.outer,f,L)||{};li(z,fi),li(q,ki),d.top?n.y=Math.min(Math.max(q.top+k.top,L.y),z.top+k.top):d.bottom&&(n.y=Math.max(Math.min(q.bottom+k.bottom,L.y),z.bottom+k.bottom)),d.left?n.x=Math.min(Math.max(q.left+k.left,L.x),z.left+k.left):d.right&&(n.x=Math.max(Math.min(q.right+k.right,L.x),z.right+k.right))}},defaults:{inner:null,outer:null,offset:null,endOnly:!1,enabled:!1}},on=oi(mi,"restrictEdges"),an=U({get elementRect(){return{top:0,left:0,bottom:1,right:1}},set elementRect(o){}},Ut.defaults),Rr=oi({start:Ut.start,set:Ut.set,defaults:an},"restrictRect"),Or={width:-1/0,height:-1/0},zr={width:1/0,height:1/0},Dr=oi({start:function(o){return mi.start(o)},set:function(o){var n=o.interaction,d=o.state,f=o.rect,y=o.edges,k=d.options;if(y){var T=rt(Mt(k.min,n,o.coords))||Or,L=rt(Mt(k.max,n,o.coords))||zr;d.options={endOnly:k.endOnly,inner:U({},mi.noInner),outer:U({},mi.noOuter)},y.top?(d.options.inner.top=f.bottom-T.height,d.options.outer.top=f.bottom-L.height):y.bottom&&(d.options.inner.bottom=f.top+T.height,d.options.outer.bottom=f.top+L.height),y.left?(d.options.inner.left=f.right-T.width,d.options.outer.left=f.right-L.width):y.right&&(d.options.inner.right=f.left+T.width,d.options.outer.right=f.left+L.width),mi.set(o),d.options=k}},defaults:{min:null,max:null,endOnly:!1,enabled:!1}},"restrictSize"),Bi={start:function(o){var n,d=o.interaction,f=o.interactable,y=o.element,k=o.rect,T=o.state,L=o.startOffset,z=T.options,q=z.offsetWithOrigin?(function(Z){var he=Z.interaction.element,de=Ue(Ne(Z.state.options.origin,null,null,[he])),be=de||me(Z.interactable,he,Z.interaction.prepared.name);return be})(o):{x:0,y:0};if(z.offset==="startCoords")n={x:d.coords.start.page.x,y:d.coords.start.page.y};else{var B=Ne(z.offset,f,y,[d]);(n=Ue(B)||{x:0,y:0}).x+=q.x,n.y+=q.y}var W=z.relativePoints;T.offsets=k&&W&&W.length?W.map((function(Z,he){return{index:he,relativePoint:Z,x:L.left-k.width*Z.x+n.x,y:L.top-k.height*Z.y+n.y}})):[{index:0,relativePoint:null,x:n.x,y:n.y}]},set:function(o){var n=o.interaction,d=o.coords,f=o.state,y=f.options,k=f.offsets,T=me(n.interactable,n.element,n.prepared.name),L=U({},d),z=[];y.offsetWithOrigin||(L.x-=T.x,L.y-=T.y);for(var q=0,B=k;q<B.length;q++)for(var W=B[q],Z=L.x-W.x,he=L.y-W.y,de=0,be=y.targets.length;de<be;de++){var Re=y.targets[de],Pe=void 0;(Pe=b.func(Re)?Re(Z,he,n._proxy,W,de):Re)&&z.push({x:(b.number(Pe.x)?Pe.x:Z)+W.x,y:(b.number(Pe.y)?Pe.y:he)+W.y,range:b.number(Pe.range)?Pe.range:y.range,source:Re,index:de,offset:W})}for(var Ae={target:null,inRange:!1,distance:0,range:0,delta:{x:0,y:0}},We=0;We<z.length;We++){var at=z[We],Je=at.range,it=at.x-L.x,Ft=at.y-L.y,xt=dt(it,Ft),jt=xt<=Je;Je===1/0&&Ae.inRange&&Ae.range!==1/0&&(jt=!1),Ae.target&&!(jt?Ae.inRange&&Je!==1/0?xt/Je<Ae.distance/Ae.range:Je===1/0&&Ae.range!==1/0||xt<Ae.distance:!Ae.inRange&&xt<Ae.distance)||(Ae.target=at,Ae.distance=xt,Ae.range=Je,Ae.inRange=jt,Ae.delta.x=it,Ae.delta.y=Ft)}return Ae.inRange&&(d.x=Ae.target.x,d.y=Ae.target.y),f.closest=Ae,Ae},defaults:{range:1/0,targets:null,offset:null,offsetWithOrigin:!0,origin:null,relativePoints:null,endOnly:!1,enabled:!1}},sn=oi(Bi,"snap"),Si={start:function(o){var n=o.state,d=o.edges,f=n.options;if(!d)return null;o.state={options:{targets:null,relativePoints:[{x:d.left?0:1,y:d.top?0:1}],offset:f.offset||"self",origin:{x:0,y:0},range:f.range}},n.targetFields=n.targetFields||[["width","height"],["x","y"]],Bi.start(o),n.offsets=o.state.offsets,o.state=n},set:function(o){var n=o.interaction,d=o.state,f=o.coords,y=d.options,k=d.offsets,T={x:f.x-k[0].x,y:f.y-k[0].y};d.options=U({},y),d.options.targets=[];for(var L=0,z=y.targets||[];L<z.length;L++){var q=z[L],B=void 0;if(B=b.func(q)?q(T.x,T.y,n):q){for(var W=0,Z=d.targetFields;W<Z.length;W++){var he=Z[W],de=he[0],be=he[1];if(de in B||be in B){B.x=B[de],B.y=B[be];break}}d.options.targets.push(B)}}var Re=Bi.set(o);return d.options=y,Re},defaults:{range:1/0,targets:null,offset:null,endOnly:!1,enabled:!1}},fr=oi(Si,"snapSize"),Ni={aspectRatio:$t,restrictEdges:on,restrict:di,restrictRect:Rr,restrictSize:Dr,snapEdges:oi({start:function(o){var n=o.edges;return n?(o.state.targetFields=o.state.targetFields||[[n.left?"left":"right",n.top?"top":"bottom"]],Si.start(o)):null},set:Si.set,defaults:U(gi(Si.defaults),{targets:void 0,range:void 0,offset:{x:0,y:0}})},"snapEdges"),snap:sn,snapSize:fr,spring:kt,avoid:kt,transform:kt,rubberband:kt},cn={id:"modifiers",install:function(o){var n=o.interactStatic;for(var d in o.usePlugin(Oi),o.usePlugin(Nt),n.modifiers=Ni,Ni){var f=Ni[d],y=f._defaults,k=f._methods;y._methods=k,o.defaults.perAction[d]=y}}},Ir=cn,Br=(function(o){c(d,o);var n=u(d);function d(f,y,k,T,L,z){var q;if(t(this,d),je(h(q=n.call(this,L)),k),k!==y&&je(h(q),y),q.timeStamp=z,q.originalEvent=k,q.type=f,q.pointerId=Ke(y),q.pointerType=ii(y),q.target=T,q.currentTarget=null,f==="tap"){var B=L.getPointerIndex(y);q.dt=q.timeStamp-L.pointers[B].downTime;var W=q.timeStamp-L.tapTime;q.double=!!L.prevTap&&L.prevTap.type!=="doubletap"&&L.prevTap.target===q.target&&W<500}else f==="doubletap"&&(q.dt=y.timeStamp-L.tapTime,q.double=!0);return q}return a(d,[{key:"_subtractOrigin",value:function(f){var y=f.x,k=f.y;return this.pageX-=y,this.pageY-=k,this.clientX-=y,this.clientY-=k,this}},{key:"_addOrigin",value:function(f){var y=f.x,k=f.y;return this.pageX+=y,this.pageY+=k,this.clientX+=y,this.clientY+=k,this}},{key:"preventDefault",value:function(){this.originalEvent.preventDefault()}}]),d})(ae),Fi={id:"pointer-events/base",before:["inertia","modifiers","auto-start","actions"],install:function(o){o.pointerEvents=Fi,o.defaults.actions.pointerEvents=Fi.defaults,U(o.actions.phaselessTypes,Fi.types)},listeners:{"interactions:new":function(o){var n=o.interaction;n.prevTap=null,n.tapTime=0},"interactions:update-pointer":function(o){var n=o.down,d=o.pointerInfo;!n&&d.hold||(d.hold={duration:1/0,timeout:null})},"interactions:move":function(o,n){var d=o.interaction,f=o.pointer,y=o.event,k=o.eventTarget;o.duplicate||d.pointerIsDown&&!d.pointerWasMoved||(d.pointerIsDown&&Ci(o),si({interaction:d,pointer:f,event:y,eventTarget:k,type:"move"},n))},"interactions:down":function(o,n){(function(d,f){for(var y=d.interaction,k=d.pointer,T=d.event,L=d.eventTarget,z=d.pointerIndex,q=y.pointers[z].hold,B=J(L),W={interaction:y,pointer:k,event:T,eventTarget:L,type:"hold",targets:[],path:B,node:null},Z=0;Z<B.length;Z++){var he=B[Z];W.node=he,f.fire("pointerEvents:collect-targets",W)}if(W.targets.length){for(var de=1/0,be=0,Re=W.targets;be<Re.length;be++){var Pe=Re[be].eventable.options.holdDuration;Pe<de&&(de=Pe)}q.duration=de,q.timeout=setTimeout((function(){si({interaction:y,eventTarget:L,pointer:k,event:T,type:"hold"},f)}),de)}})(o,n),si(o,n)},"interactions:up":function(o,n){Ci(o),si(o,n),(function(d,f){var y=d.interaction,k=d.pointer,T=d.event,L=d.eventTarget;y.pointerWasMoved||si({interaction:y,eventTarget:L,pointer:k,event:T,type:"tap"},f)})(o,n)},"interactions:cancel":function(o,n){Ci(o),si(o,n)}},PointerEvent:Br,fire:si,collectEventTargets:Nr,defaults:{holdDuration:600,ignoreFrom:null,allowFrom:null,origin:{x:0,y:0}},types:{down:!0,move:!0,up:!0,cancel:!0,tap:!0,doubletap:!0,hold:!0}};function si(o,n){var d=o.interaction,f=o.pointer,y=o.event,k=o.eventTarget,T=o.type,L=o.targets,z=L===void 0?Nr(o,n):L,q=new Br(T,f,y,k,d,n.now());n.fire("pointerEvents:new",{pointerEvent:q});for(var B={interaction:d,pointer:f,event:y,eventTarget:k,targets:z,type:T,pointerEvent:q},W=0;W<z.length;W++){var Z=z[W];for(var he in Z.props||{})q[he]=Z.props[he];var de=me(Z.eventable,Z.node);if(q._subtractOrigin(de),q.eventable=Z.eventable,q.currentTarget=Z.node,Z.eventable.fire(q),q._addOrigin(de),q.immediatePropagationStopped||q.propagationStopped&&W+1<z.length&&z[W+1].node!==q.currentTarget)break}if(n.fire("pointerEvents:fired",B),T==="tap"){var be=q.double?si({interaction:d,pointer:f,event:y,eventTarget:k,type:"doubletap"},n):q;d.prevTap=be,d.tapTime=be.timeStamp}return q}function Nr(o,n){var d=o.interaction,f=o.pointer,y=o.event,k=o.eventTarget,T=o.type,L=d.getPointerIndex(f),z=d.pointers[L];if(T==="tap"&&(d.pointerWasMoved||!z||z.downTarget!==k))return[];for(var q=J(k),B={interaction:d,pointer:f,event:y,eventTarget:k,type:T,path:q,targets:[],node:null},W=0;W<q.length;W++){var Z=q[W];B.node=Z,n.fire("pointerEvents:collect-targets",B)}return T==="hold"&&(B.targets=B.targets.filter((function(he){var de,be;return he.eventable.options.holdDuration===((de=d.pointers[L])==null||(be=de.hold)==null?void 0:be.duration)}))),B.targets}function Ci(o){var n=o.interaction,d=o.pointerIndex,f=n.pointers[d].hold;f&&f.timeout&&(clearTimeout(f.timeout),f.timeout=null)}var Fr=Object.freeze({__proto__:null,default:Fi});function Hr(o){var n=o.interaction;n.holdIntervalHandle&&(clearInterval(n.holdIntervalHandle),n.holdIntervalHandle=null)}var qr={id:"pointer-events/holdRepeat",install:function(o){o.usePlugin(Fi);var n=o.pointerEvents;n.defaults.holdRepeatInterval=0,n.types.holdrepeat=o.actions.phaselessTypes.holdrepeat=!0},listeners:["move","up","cancel","endall"].reduce((function(o,n){return o["pointerEvents:".concat(n)]=Hr,o}),{"pointerEvents:new":function(o){var n=o.pointerEvent;n.type==="hold"&&(n.count=(n.count||0)+1)},"pointerEvents:fired":function(o,n){var d=o.interaction,f=o.pointerEvent,y=o.eventTarget,k=o.targets;if(f.type==="hold"&&k.length){var T=k[0].eventable.options.holdRepeatInterval;T<=0||(d.holdIntervalHandle=setTimeout((function(){n.pointerEvents.fire({interaction:d,eventTarget:y,type:"hold",pointer:f,event:f},n)}),T))}}})},$r=qr,Vr={id:"pointer-events/interactableTargets",install:function(o){var n=o.Interactable;n.prototype.pointerEvents=function(f){return U(this.events.options,f),this};var d=n.prototype._backCompatOption;n.prototype._backCompatOption=function(f,y){var k=d.call(this,f,y);return k===this&&(this.events.options[f]=y),k}},listeners:{"pointerEvents:collect-targets":function(o,n){var d=o.targets,f=o.node,y=o.type,k=o.eventTarget;n.interactables.forEachMatch(f,(function(T){var L=T.events,z=L.options;L.types[y]&&L.types[y].length&&T.testIgnoreAllow(z,f,k)&&d.push({node:f,eventable:L,props:{interactable:T}})}))},"interactable:new":function(o){var n=o.interactable;n.events.getRect=function(d){return n.getRect(d)}},"interactable:set":function(o,n){var d=o.interactable,f=o.options;U(d.events.options,n.pointerEvents.defaults),U(d.events.options,f.pointerEvents||{})}}},jr=Vr,Wr={id:"pointer-events",install:function(o){o.usePlugin(Fr),o.usePlugin($r),o.usePlugin(jr)}},Kr=Wr,Yr={id:"reflow",install:function(o){var n=o.Interactable;o.actions.phases.reflow=!0,n.prototype.reflow=function(d){return(function(f,y,k){for(var T=f.getAllElements(),L=k.window.Promise,z=L?[]:null,q=function(){var W=T[B],Z=f.getRect(W);if(!Z)return 1;var he,de=ze(k.interactions.list,(function(Pe){return Pe.interacting()&&Pe.interactable===f&&Pe.element===W&&Pe.prepared.name===y.name}));if(de)de.move(),z&&(he=de._reflowPromise||new L((function(Pe){de._reflowResolve=Pe})));else{var be=rt(Z),Re=(function(Pe){return{coords:Pe,get page(){return this.coords.page},get client(){return this.coords.client},get timeStamp(){return this.coords.timeStamp},get pageX(){return this.coords.page.x},get pageY(){return this.coords.page.y},get clientX(){return this.coords.client.x},get clientY(){return this.coords.client.y},get pointerId(){return this.coords.pointerId},get target(){return this.coords.target},get type(){return this.coords.type},get pointerType(){return this.coords.pointerType},get buttons(){return this.coords.buttons},preventDefault:function(){}}})({page:{x:be.x,y:be.y},client:{x:be.x,y:be.y},timeStamp:k.now()});he=(function(Pe,Ae,We,at,Je){var it=Pe.interactions.new({pointerType:"reflow"}),Ft={interaction:it,event:Je,pointer:Je,eventTarget:We,phase:"reflow"};it.interactable=Ae,it.element=We,it.prevEvent=Je,it.updatePointer(Je,Je,We,!0),yt(it.coords.delta),ri(it.prepared,at),it._doPhase(Ft);var xt=Pe.window,jt=xt.Promise,Jt=jt?new jt((function(ti){it._reflowResolve=ti})):void 0;return it._reflowPromise=Jt,it.start(at,Ae,We),it._interacting?(it.move(Ft),it.end(Je)):(it.stop(),it._reflowResolve()),it.removePointer(Je,Je),Jt})(k,f,W,y,Re)}z&&z.push(he)},B=0;B<T.length&&!q();B++);return z&&L.all(z).then((function(){return f}))})(this,d,o)}},listeners:{"interactions:stop":function(o,n){var d=o.interaction;d.pointerType==="reflow"&&(d._reflowResolve&&d._reflowResolve(),(function(f,y){f.splice(f.indexOf(y),1)})(n.interactions.list,d))}}},Ur=Yr;if(qe.use(kr),qe.use(sr),qe.use(Kr),qe.use(Pr),qe.use(Ir),qe.use(Tt),qe.use(Ee),qe.use(Et),qe.use(Ur),qe.default=qe,(typeof Hi=="undefined"?"undefined":e(Hi))==="object"&&Hi)try{Hi.exports=qe}catch{}return qe.default=qe,qe}))});var Oo=$o(Tn(),1);function jn(i){return typeof i=="undefined"||i===null}function Vo(i){return typeof i=="object"&&i!==null}function jo(i){return Array.isArray(i)?i:jn(i)?[]:[i]}function Wo(i,w){var e,t,r,a;if(w)for(a=Object.keys(w),e=0,t=a.length;e<t;e+=1)r=a[e],i[r]=w[r];return i}function Ko(i,w){var e="",t;for(t=0;t<w;t+=1)e+=i;return e}function Yo(i){return i===0&&Number.NEGATIVE_INFINITY===1/i}var Uo=jn,Go=Vo,Jo=jo,Xo=Ko,Qo=Yo,Zo=Wo,Dt={isNothing:Uo,isObject:Go,toArray:Jo,repeat:Xo,isNegativeZero:Qo,extend:Zo};function Wn(i,w){var e="",t=i.reason||"(unknown reason)";return i.mark?(i.mark.name&&(e+='in "'+i.mark.name+'" '),e+="("+(i.mark.line+1)+":"+(i.mark.column+1)+")",!w&&i.mark.snippet&&(e+=`

`+i.mark.snippet),t+" "+e):t}function yr(i,w){Error.call(this),this.name="YAMLException",this.reason=i,this.mark=w,this.message=Wn(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}yr.prototype=Object.create(Error.prototype);yr.prototype.constructor=yr;yr.prototype.toString=function(w){return this.name+": "+Wn(this,w)};var Gt=yr;function un(i,w,e,t,r){var a="",s="",c=Math.floor(r/2)-1;return t-w>c&&(a=" ... ",w=t-c+a.length),e-t>c&&(s=" ...",e=t+c-s.length),{str:a+i.slice(w,e).replace(/\t/g,"\u2192")+s,pos:t-w+a.length}}function gn(i,w){return Dt.repeat(" ",w-i.length)+i}function ea(i,w){if(w=Object.create(w||null),!i.buffer)return null;w.maxLength||(w.maxLength=79),typeof w.indent!="number"&&(w.indent=1),typeof w.linesBefore!="number"&&(w.linesBefore=3),typeof w.linesAfter!="number"&&(w.linesAfter=2);for(var e=/\r?\n|\r|\0/g,t=[0],r=[],a,s=-1;a=e.exec(i.buffer);)r.push(a.index),t.push(a.index+a[0].length),i.position<=a.index&&s<0&&(s=t.length-2);s<0&&(s=t.length-1);var c="",l,g,h=Math.min(i.line+w.linesAfter,r.length).toString().length,u=w.maxLength-(w.indent+h+3);for(l=1;l<=w.linesBefore&&!(s-l<0);l++)g=un(i.buffer,t[s-l],r[s-l],i.position-(t[s]-t[s-l]),u),c=Dt.repeat(" ",w.indent)+gn((i.line-l+1).toString(),h)+" | "+g.str+`
`+c;for(g=un(i.buffer,t[s],r[s],i.position,u),c+=Dt.repeat(" ",w.indent)+gn((i.line+1).toString(),h)+" | "+g.str+`
`,c+=Dt.repeat("-",w.indent+h+3+g.pos)+`^
`,l=1;l<=w.linesAfter&&!(s+l>=r.length);l++)g=un(i.buffer,t[s+l],r[s+l],i.position-(t[s]-t[s+l]),u),c+=Dt.repeat(" ",w.indent)+gn((i.line+l+1).toString(),h)+" | "+g.str+`
`;return c.replace(/\n$/,"")}var ta=ea,ia=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],ra=["scalar","sequence","mapping"];function na(i){var w={};return i!==null&&Object.keys(i).forEach(function(e){i[e].forEach(function(t){w[String(t)]=e})}),w}function oa(i,w){if(w=w||{},Object.keys(w).forEach(function(e){if(ia.indexOf(e)===-1)throw new Gt('Unknown option "'+e+'" is met in definition of "'+i+'" YAML type.')}),this.options=w,this.tag=i,this.kind=w.kind||null,this.resolve=w.resolve||function(){return!0},this.construct=w.construct||function(e){return e},this.instanceOf=w.instanceOf||null,this.predicate=w.predicate||null,this.represent=w.represent||null,this.representName=w.representName||null,this.defaultStyle=w.defaultStyle||null,this.multi=w.multi||!1,this.styleAliases=na(w.styleAliases||null),ra.indexOf(this.kind)===-1)throw new Gt('Unknown kind "'+this.kind+'" is specified for "'+i+'" YAML type.')}var Vt=oa;function Pn(i,w){var e=[];return i[w].forEach(function(t){var r=e.length;e.forEach(function(a,s){a.tag===t.tag&&a.kind===t.kind&&a.multi===t.multi&&(r=s)}),e[r]=t}),e}function aa(){var i={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},w,e;function t(r){r.multi?(i.multi[r.kind].push(r),i.multi.fallback.push(r)):i[r.kind][r.tag]=i.fallback[r.tag]=r}for(w=0,e=arguments.length;w<e;w+=1)arguments[w].forEach(t);return i}function mn(i){return this.extend(i)}mn.prototype.extend=function(w){var e=[],t=[];if(w instanceof Vt)t.push(w);else if(Array.isArray(w))t=t.concat(w);else if(w&&(Array.isArray(w.implicit)||Array.isArray(w.explicit)))w.implicit&&(e=e.concat(w.implicit)),w.explicit&&(t=t.concat(w.explicit));else throw new Gt("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");e.forEach(function(a){if(!(a instanceof Vt))throw new Gt("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(a.loadKind&&a.loadKind!=="scalar")throw new Gt("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(a.multi)throw new Gt("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),t.forEach(function(a){if(!(a instanceof Vt))throw new Gt("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var r=Object.create(mn.prototype);return r.implicit=(this.implicit||[]).concat(e),r.explicit=(this.explicit||[]).concat(t),r.compiledImplicit=Pn(r,"implicit"),r.compiledExplicit=Pn(r,"explicit"),r.compiledTypeMap=aa(r.compiledImplicit,r.compiledExplicit),r};var Kn=mn,Yn=new Vt("tag:yaml.org,2002:str",{kind:"scalar",construct:function(i){return i!==null?i:""}}),Un=new Vt("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(i){return i!==null?i:[]}}),Gn=new Vt("tag:yaml.org,2002:map",{kind:"mapping",construct:function(i){return i!==null?i:{}}}),Jn=new Kn({explicit:[Yn,Un,Gn]});function sa(i){if(i===null)return!0;var w=i.length;return w===1&&i==="~"||w===4&&(i==="null"||i==="Null"||i==="NULL")}function ca(){return null}function da(i){return i===null}var Xn=new Vt("tag:yaml.org,2002:null",{kind:"scalar",resolve:sa,construct:ca,predicate:da,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function la(i){if(i===null)return!1;var w=i.length;return w===4&&(i==="true"||i==="True"||i==="TRUE")||w===5&&(i==="false"||i==="False"||i==="FALSE")}function pa(i){return i==="true"||i==="True"||i==="TRUE"}function ha(i){return Object.prototype.toString.call(i)==="[object Boolean]"}var Qn=new Vt("tag:yaml.org,2002:bool",{kind:"scalar",resolve:la,construct:pa,predicate:ha,represent:{lowercase:function(i){return i?"true":"false"},uppercase:function(i){return i?"TRUE":"FALSE"},camelcase:function(i){return i?"True":"False"}},defaultStyle:"lowercase"});function ua(i){return 48<=i&&i<=57||65<=i&&i<=70||97<=i&&i<=102}function ga(i){return 48<=i&&i<=55}function fa(i){return 48<=i&&i<=57}function ma(i){if(i===null)return!1;var w=i.length,e=0,t=!1,r;if(!w)return!1;if(r=i[e],(r==="-"||r==="+")&&(r=i[++e]),r==="0"){if(e+1===w)return!0;if(r=i[++e],r==="b"){for(e++;e<w;e++)if(r=i[e],r!=="_"){if(r!=="0"&&r!=="1")return!1;t=!0}return t&&r!=="_"}if(r==="x"){for(e++;e<w;e++)if(r=i[e],r!=="_"){if(!ua(i.charCodeAt(e)))return!1;t=!0}return t&&r!=="_"}if(r==="o"){for(e++;e<w;e++)if(r=i[e],r!=="_"){if(!ga(i.charCodeAt(e)))return!1;t=!0}return t&&r!=="_"}}if(r==="_")return!1;for(;e<w;e++)if(r=i[e],r!=="_"){if(!fa(i.charCodeAt(e)))return!1;t=!0}return!(!t||r==="_")}function ya(i){var w=i,e=1,t;if(w.indexOf("_")!==-1&&(w=w.replace(/_/g,"")),t=w[0],(t==="-"||t==="+")&&(t==="-"&&(e=-1),w=w.slice(1),t=w[0]),w==="0")return 0;if(t==="0"){if(w[1]==="b")return e*parseInt(w.slice(2),2);if(w[1]==="x")return e*parseInt(w.slice(2),16);if(w[1]==="o")return e*parseInt(w.slice(2),8)}return e*parseInt(w,10)}function ba(i){return Object.prototype.toString.call(i)==="[object Number]"&&i%1===0&&!Dt.isNegativeZero(i)}var Zn=new Vt("tag:yaml.org,2002:int",{kind:"scalar",resolve:ma,construct:ya,predicate:ba,represent:{binary:function(i){return i>=0?"0b"+i.toString(2):"-0b"+i.toString(2).slice(1)},octal:function(i){return i>=0?"0o"+i.toString(8):"-0o"+i.toString(8).slice(1)},decimal:function(i){return i.toString(10)},hexadecimal:function(i){return i>=0?"0x"+i.toString(16).toUpperCase():"-0x"+i.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),va=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function _a(i){return!(i===null||!va.test(i)||i[i.length-1]==="_")}function xa(i){var w,e;return w=i.replace(/_/g,"").toLowerCase(),e=w[0]==="-"?-1:1,"+-".indexOf(w[0])>=0&&(w=w.slice(1)),w===".inf"?e===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:w===".nan"?NaN:e*parseFloat(w,10)}var wa=/^[-+]?[0-9]+e/;function ka(i,w){var e;if(isNaN(i))switch(w){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===i)switch(w){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===i)switch(w){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Dt.isNegativeZero(i))return"-0.0";return e=i.toString(10),wa.test(e)?e.replace("e",".e"):e}function Sa(i){return Object.prototype.toString.call(i)==="[object Number]"&&(i%1!==0||Dt.isNegativeZero(i))}var eo=new Vt("tag:yaml.org,2002:float",{kind:"scalar",resolve:_a,construct:xa,predicate:Sa,represent:ka,defaultStyle:"lowercase"}),to=Jn.extend({implicit:[Xn,Qn,Zn,eo]}),io=to,ro=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),no=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function Ca(i){return i===null?!1:ro.exec(i)!==null||no.exec(i)!==null}function Ea(i){var w,e,t,r,a,s,c,l=0,g=null,h,u,p;if(w=ro.exec(i),w===null&&(w=no.exec(i)),w===null)throw new Error("Date resolve error");if(e=+w[1],t=+w[2]-1,r=+w[3],!w[4])return new Date(Date.UTC(e,t,r));if(a=+w[4],s=+w[5],c=+w[6],w[7]){for(l=w[7].slice(0,3);l.length<3;)l+="0";l=+l}return w[9]&&(h=+w[10],u=+(w[11]||0),g=(h*60+u)*6e4,w[9]==="-"&&(g=-g)),p=new Date(Date.UTC(e,t,r,a,s,c,l)),g&&p.setTime(p.getTime()-g),p}function Aa(i){return i.toISOString()}var oo=new Vt("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:Ca,construct:Ea,instanceOf:Date,represent:Aa});function Ta(i){return i==="<<"||i===null}var ao=new Vt("tag:yaml.org,2002:merge",{kind:"scalar",resolve:Ta}),xn=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function Pa(i){if(i===null)return!1;var w,e,t=0,r=i.length,a=xn;for(e=0;e<r;e++)if(w=a.indexOf(i.charAt(e)),!(w>64)){if(w<0)return!1;t+=6}return t%8===0}function La(i){var w,e,t=i.replace(/[\r\n=]/g,""),r=t.length,a=xn,s=0,c=[];for(w=0;w<r;w++)w%4===0&&w&&(c.push(s>>16&255),c.push(s>>8&255),c.push(s&255)),s=s<<6|a.indexOf(t.charAt(w));return e=r%4*6,e===0?(c.push(s>>16&255),c.push(s>>8&255),c.push(s&255)):e===18?(c.push(s>>10&255),c.push(s>>2&255)):e===12&&c.push(s>>4&255),new Uint8Array(c)}function Ma(i){var w="",e=0,t,r,a=i.length,s=xn;for(t=0;t<a;t++)t%3===0&&t&&(w+=s[e>>18&63],w+=s[e>>12&63],w+=s[e>>6&63],w+=s[e&63]),e=(e<<8)+i[t];return r=a%3,r===0?(w+=s[e>>18&63],w+=s[e>>12&63],w+=s[e>>6&63],w+=s[e&63]):r===2?(w+=s[e>>10&63],w+=s[e>>4&63],w+=s[e<<2&63],w+=s[64]):r===1&&(w+=s[e>>2&63],w+=s[e<<4&63],w+=s[64],w+=s[64]),w}function Ra(i){return Object.prototype.toString.call(i)==="[object Uint8Array]"}var so=new Vt("tag:yaml.org,2002:binary",{kind:"scalar",resolve:Pa,construct:La,predicate:Ra,represent:Ma}),Oa=Object.prototype.hasOwnProperty,za=Object.prototype.toString;function Da(i){if(i===null)return!0;var w=[],e,t,r,a,s,c=i;for(e=0,t=c.length;e<t;e+=1){if(r=c[e],s=!1,za.call(r)!=="[object Object]")return!1;for(a in r)if(Oa.call(r,a))if(!s)s=!0;else return!1;if(!s)return!1;if(w.indexOf(a)===-1)w.push(a);else return!1}return!0}function Ia(i){return i!==null?i:[]}var co=new Vt("tag:yaml.org,2002:omap",{kind:"sequence",resolve:Da,construct:Ia}),Ba=Object.prototype.toString;function Na(i){if(i===null)return!0;var w,e,t,r,a,s=i;for(a=new Array(s.length),w=0,e=s.length;w<e;w+=1){if(t=s[w],Ba.call(t)!=="[object Object]"||(r=Object.keys(t),r.length!==1))return!1;a[w]=[r[0],t[r[0]]]}return!0}function Fa(i){if(i===null)return[];var w,e,t,r,a,s=i;for(a=new Array(s.length),w=0,e=s.length;w<e;w+=1)t=s[w],r=Object.keys(t),a[w]=[r[0],t[r[0]]];return a}var lo=new Vt("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:Na,construct:Fa}),Ha=Object.prototype.hasOwnProperty;function qa(i){if(i===null)return!0;var w,e=i;for(w in e)if(Ha.call(e,w)&&e[w]!==null)return!1;return!0}function $a(i){return i!==null?i:{}}var po=new Vt("tag:yaml.org,2002:set",{kind:"mapping",resolve:qa,construct:$a}),wn=io.extend({implicit:[oo,ao],explicit:[so,co,lo,po]}),Ai=Object.prototype.hasOwnProperty,Gr=1,ho=2,uo=3,Jr=4,fn=1,Va=2,Ln=3,ja=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,Wa=/[\x85\u2028\u2029]/,Ka=/[,\[\]\{\}]/,go=/^(?:!|!!|![a-z\-]+!)$/i,fo=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function Mn(i){return Object.prototype.toString.call(i)}function pi(i){return i===10||i===13}function $i(i){return i===9||i===32}function Xt(i){return i===9||i===32||i===10||i===13}function Xi(i){return i===44||i===91||i===93||i===123||i===125}function Ya(i){var w;return 48<=i&&i<=57?i-48:(w=i|32,97<=w&&w<=102?w-97+10:-1)}function Ua(i){return i===120?2:i===117?4:i===85?8:0}function Ga(i){return 48<=i&&i<=57?i-48:-1}function Rn(i){return i===48?"\0":i===97?"\x07":i===98?"\b":i===116||i===9?"	":i===110?`
`:i===118?"\v":i===102?"\f":i===114?"\r":i===101?"\x1B":i===32?" ":i===34?'"':i===47?"/":i===92?"\\":i===78?"\x85":i===95?"\xA0":i===76?"\u2028":i===80?"\u2029":""}function Ja(i){return i<=65535?String.fromCharCode(i):String.fromCharCode((i-65536>>10)+55296,(i-65536&1023)+56320)}var mo=new Array(256),yo=new Array(256);for(qi=0;qi<256;qi++)mo[qi]=Rn(qi)?1:0,yo[qi]=Rn(qi);var qi;function Xa(i,w){this.input=i,this.filename=w.filename||null,this.schema=w.schema||wn,this.onWarning=w.onWarning||null,this.legacy=w.legacy||!1,this.json=w.json||!1,this.listener=w.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=i.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function bo(i,w){var e={name:i.filename,buffer:i.input.slice(0,-1),position:i.position,line:i.line,column:i.position-i.lineStart};return e.snippet=ta(e),new Gt(w,e)}function $e(i,w){throw bo(i,w)}function Xr(i,w){i.onWarning&&i.onWarning.call(null,bo(i,w))}var On={YAML:function(w,e,t){var r,a,s;w.version!==null&&$e(w,"duplication of %YAML directive"),t.length!==1&&$e(w,"YAML directive accepts exactly one argument"),r=/^([0-9]+)\.([0-9]+)$/.exec(t[0]),r===null&&$e(w,"ill-formed argument of the YAML directive"),a=parseInt(r[1],10),s=parseInt(r[2],10),a!==1&&$e(w,"unacceptable YAML version of the document"),w.version=t[0],w.checkLineBreaks=s<2,s!==1&&s!==2&&Xr(w,"unsupported YAML version of the document")},TAG:function(w,e,t){var r,a;t.length!==2&&$e(w,"TAG directive accepts exactly two arguments"),r=t[0],a=t[1],go.test(r)||$e(w,"ill-formed tag handle (first argument) of the TAG directive"),Ai.call(w.tagMap,r)&&$e(w,'there is a previously declared suffix for "'+r+'" tag handle'),fo.test(a)||$e(w,"ill-formed tag prefix (second argument) of the TAG directive");try{a=decodeURIComponent(a)}catch{$e(w,"tag prefix is malformed: "+a)}w.tagMap[r]=a}};function Ei(i,w,e,t){var r,a,s,c;if(w<e){if(c=i.input.slice(w,e),t)for(r=0,a=c.length;r<a;r+=1)s=c.charCodeAt(r),s===9||32<=s&&s<=1114111||$e(i,"expected valid JSON character");else ja.test(c)&&$e(i,"the stream contains non-printable characters");i.result+=c}}function zn(i,w,e,t){var r,a,s,c;for(Dt.isObject(e)||$e(i,"cannot merge mappings; the provided source object is unacceptable"),r=Object.keys(e),s=0,c=r.length;s<c;s+=1)a=r[s],Ai.call(w,a)||(w[a]=e[a],t[a]=!0)}function Qi(i,w,e,t,r,a,s,c,l){var g,h;if(Array.isArray(r))for(r=Array.prototype.slice.call(r),g=0,h=r.length;g<h;g+=1)Array.isArray(r[g])&&$e(i,"nested arrays are not supported inside keys"),typeof r=="object"&&Mn(r[g])==="[object Object]"&&(r[g]="[object Object]");if(typeof r=="object"&&Mn(r)==="[object Object]"&&(r="[object Object]"),r=String(r),w===null&&(w={}),t==="tag:yaml.org,2002:merge")if(Array.isArray(a))for(g=0,h=a.length;g<h;g+=1)zn(i,w,a[g],e);else zn(i,w,a,e);else!i.json&&!Ai.call(e,r)&&Ai.call(w,r)&&(i.line=s||i.line,i.lineStart=c||i.lineStart,i.position=l||i.position,$e(i,"duplicated mapping key")),r==="__proto__"?Object.defineProperty(w,r,{configurable:!0,enumerable:!0,writable:!0,value:a}):w[r]=a,delete e[r];return w}function kn(i){var w;w=i.input.charCodeAt(i.position),w===10?i.position++:w===13?(i.position++,i.input.charCodeAt(i.position)===10&&i.position++):$e(i,"a line break is expected"),i.line+=1,i.lineStart=i.position,i.firstTabInLine=-1}function zt(i,w,e){for(var t=0,r=i.input.charCodeAt(i.position);r!==0;){for(;$i(r);)r===9&&i.firstTabInLine===-1&&(i.firstTabInLine=i.position),r=i.input.charCodeAt(++i.position);if(w&&r===35)do r=i.input.charCodeAt(++i.position);while(r!==10&&r!==13&&r!==0);if(pi(r))for(kn(i),r=i.input.charCodeAt(i.position),t++,i.lineIndent=0;r===32;)i.lineIndent++,r=i.input.charCodeAt(++i.position);else break}return e!==-1&&t!==0&&i.lineIndent<e&&Xr(i,"deficient indentation"),t}function en(i){var w=i.position,e;return e=i.input.charCodeAt(w),!!((e===45||e===46)&&e===i.input.charCodeAt(w+1)&&e===i.input.charCodeAt(w+2)&&(w+=3,e=i.input.charCodeAt(w),e===0||Xt(e)))}function Sn(i,w){w===1?i.result+=" ":w>1&&(i.result+=Dt.repeat(`
`,w-1))}function Qa(i,w,e){var t,r,a,s,c,l,g,h,u=i.kind,p=i.result,m;if(m=i.input.charCodeAt(i.position),Xt(m)||Xi(m)||m===35||m===38||m===42||m===33||m===124||m===62||m===39||m===34||m===37||m===64||m===96||(m===63||m===45)&&(r=i.input.charCodeAt(i.position+1),Xt(r)||e&&Xi(r)))return!1;for(i.kind="scalar",i.result="",a=s=i.position,c=!1;m!==0;){if(m===58){if(r=i.input.charCodeAt(i.position+1),Xt(r)||e&&Xi(r))break}else if(m===35){if(t=i.input.charCodeAt(i.position-1),Xt(t))break}else{if(i.position===i.lineStart&&en(i)||e&&Xi(m))break;if(pi(m))if(l=i.line,g=i.lineStart,h=i.lineIndent,zt(i,!1,-1),i.lineIndent>=w){c=!0,m=i.input.charCodeAt(i.position);continue}else{i.position=s,i.line=l,i.lineStart=g,i.lineIndent=h;break}}c&&(Ei(i,a,s,!1),Sn(i,i.line-l),a=s=i.position,c=!1),$i(m)||(s=i.position+1),m=i.input.charCodeAt(++i.position)}return Ei(i,a,s,!1),i.result?!0:(i.kind=u,i.result=p,!1)}function Za(i,w){var e,t,r;if(e=i.input.charCodeAt(i.position),e!==39)return!1;for(i.kind="scalar",i.result="",i.position++,t=r=i.position;(e=i.input.charCodeAt(i.position))!==0;)if(e===39)if(Ei(i,t,i.position,!0),e=i.input.charCodeAt(++i.position),e===39)t=i.position,i.position++,r=i.position;else return!0;else pi(e)?(Ei(i,t,r,!0),Sn(i,zt(i,!1,w)),t=r=i.position):i.position===i.lineStart&&en(i)?$e(i,"unexpected end of the document within a single quoted scalar"):(i.position++,r=i.position);$e(i,"unexpected end of the stream within a single quoted scalar")}function es(i,w){var e,t,r,a,s,c;if(c=i.input.charCodeAt(i.position),c!==34)return!1;for(i.kind="scalar",i.result="",i.position++,e=t=i.position;(c=i.input.charCodeAt(i.position))!==0;){if(c===34)return Ei(i,e,i.position,!0),i.position++,!0;if(c===92){if(Ei(i,e,i.position,!0),c=i.input.charCodeAt(++i.position),pi(c))zt(i,!1,w);else if(c<256&&mo[c])i.result+=yo[c],i.position++;else if((s=Ua(c))>0){for(r=s,a=0;r>0;r--)c=i.input.charCodeAt(++i.position),(s=Ya(c))>=0?a=(a<<4)+s:$e(i,"expected hexadecimal character");i.result+=Ja(a),i.position++}else $e(i,"unknown escape sequence");e=t=i.position}else pi(c)?(Ei(i,e,t,!0),Sn(i,zt(i,!1,w)),e=t=i.position):i.position===i.lineStart&&en(i)?$e(i,"unexpected end of the document within a double quoted scalar"):(i.position++,t=i.position)}$e(i,"unexpected end of the stream within a double quoted scalar")}function ts(i,w){var e=!0,t,r,a,s=i.tag,c,l=i.anchor,g,h,u,p,m,x=Object.create(null),_,P,O,C;if(C=i.input.charCodeAt(i.position),C===91)h=93,m=!1,c=[];else if(C===123)h=125,m=!0,c={};else return!1;for(i.anchor!==null&&(i.anchorMap[i.anchor]=c),C=i.input.charCodeAt(++i.position);C!==0;){if(zt(i,!0,w),C=i.input.charCodeAt(i.position),C===h)return i.position++,i.tag=s,i.anchor=l,i.kind=m?"mapping":"sequence",i.result=c,!0;e?C===44&&$e(i,"expected the node content, but found ','"):$e(i,"missed comma between flow collection entries"),P=_=O=null,u=p=!1,C===63&&(g=i.input.charCodeAt(i.position+1),Xt(g)&&(u=p=!0,i.position++,zt(i,!0,w))),t=i.line,r=i.lineStart,a=i.position,Zi(i,w,Gr,!1,!0),P=i.tag,_=i.result,zt(i,!0,w),C=i.input.charCodeAt(i.position),(p||i.line===t)&&C===58&&(u=!0,C=i.input.charCodeAt(++i.position),zt(i,!0,w),Zi(i,w,Gr,!1,!0),O=i.result),m?Qi(i,c,x,P,_,O,t,r,a):u?c.push(Qi(i,null,x,P,_,O,t,r,a)):c.push(_),zt(i,!0,w),C=i.input.charCodeAt(i.position),C===44?(e=!0,C=i.input.charCodeAt(++i.position)):e=!1}$e(i,"unexpected end of the stream within a flow collection")}function is(i,w){var e,t,r=fn,a=!1,s=!1,c=w,l=0,g=!1,h,u;if(u=i.input.charCodeAt(i.position),u===124)t=!1;else if(u===62)t=!0;else return!1;for(i.kind="scalar",i.result="";u!==0;)if(u=i.input.charCodeAt(++i.position),u===43||u===45)fn===r?r=u===43?Ln:Va:$e(i,"repeat of a chomping mode identifier");else if((h=Ga(u))>=0)h===0?$e(i,"bad explicit indentation width of a block scalar; it cannot be less than one"):s?$e(i,"repeat of an indentation width identifier"):(c=w+h-1,s=!0);else break;if($i(u)){do u=i.input.charCodeAt(++i.position);while($i(u));if(u===35)do u=i.input.charCodeAt(++i.position);while(!pi(u)&&u!==0)}for(;u!==0;){for(kn(i),i.lineIndent=0,u=i.input.charCodeAt(i.position);(!s||i.lineIndent<c)&&u===32;)i.lineIndent++,u=i.input.charCodeAt(++i.position);if(!s&&i.lineIndent>c&&(c=i.lineIndent),pi(u)){l++;continue}if(i.lineIndent<c){r===Ln?i.result+=Dt.repeat(`
`,a?1+l:l):r===fn&&a&&(i.result+=`
`);break}for(t?$i(u)?(g=!0,i.result+=Dt.repeat(`
`,a?1+l:l)):g?(g=!1,i.result+=Dt.repeat(`
`,l+1)):l===0?a&&(i.result+=" "):i.result+=Dt.repeat(`
`,l):i.result+=Dt.repeat(`
`,a?1+l:l),a=!0,s=!0,l=0,e=i.position;!pi(u)&&u!==0;)u=i.input.charCodeAt(++i.position);Ei(i,e,i.position,!1)}return!0}function Dn(i,w){var e,t=i.tag,r=i.anchor,a=[],s,c=!1,l;if(i.firstTabInLine!==-1)return!1;for(i.anchor!==null&&(i.anchorMap[i.anchor]=a),l=i.input.charCodeAt(i.position);l!==0&&(i.firstTabInLine!==-1&&(i.position=i.firstTabInLine,$e(i,"tab characters must not be used in indentation")),!(l!==45||(s=i.input.charCodeAt(i.position+1),!Xt(s))));){if(c=!0,i.position++,zt(i,!0,-1)&&i.lineIndent<=w){a.push(null),l=i.input.charCodeAt(i.position);continue}if(e=i.line,Zi(i,w,uo,!1,!0),a.push(i.result),zt(i,!0,-1),l=i.input.charCodeAt(i.position),(i.line===e||i.lineIndent>w)&&l!==0)$e(i,"bad indentation of a sequence entry");else if(i.lineIndent<w)break}return c?(i.tag=t,i.anchor=r,i.kind="sequence",i.result=a,!0):!1}function rs(i,w,e){var t,r,a,s,c,l,g=i.tag,h=i.anchor,u={},p=Object.create(null),m=null,x=null,_=null,P=!1,O=!1,C;if(i.firstTabInLine!==-1)return!1;for(i.anchor!==null&&(i.anchorMap[i.anchor]=u),C=i.input.charCodeAt(i.position);C!==0;){if(!P&&i.firstTabInLine!==-1&&(i.position=i.firstTabInLine,$e(i,"tab characters must not be used in indentation")),t=i.input.charCodeAt(i.position+1),a=i.line,(C===63||C===58)&&Xt(t))C===63?(P&&(Qi(i,u,p,m,x,null,s,c,l),m=x=_=null),O=!0,P=!0,r=!0):P?(P=!1,r=!0):$e(i,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),i.position+=1,C=t;else{if(s=i.line,c=i.lineStart,l=i.position,!Zi(i,e,ho,!1,!0))break;if(i.line===a){for(C=i.input.charCodeAt(i.position);$i(C);)C=i.input.charCodeAt(++i.position);if(C===58)C=i.input.charCodeAt(++i.position),Xt(C)||$e(i,"a whitespace character is expected after the key-value separator within a block mapping"),P&&(Qi(i,u,p,m,x,null,s,c,l),m=x=_=null),O=!0,P=!1,r=!1,m=i.tag,x=i.result;else if(O)$e(i,"can not read an implicit mapping pair; a colon is missed");else return i.tag=g,i.anchor=h,!0}else if(O)$e(i,"can not read a block mapping entry; a multiline key may not be an implicit key");else return i.tag=g,i.anchor=h,!0}if((i.line===a||i.lineIndent>w)&&(P&&(s=i.line,c=i.lineStart,l=i.position),Zi(i,w,Jr,!0,r)&&(P?x=i.result:_=i.result),P||(Qi(i,u,p,m,x,_,s,c,l),m=x=_=null),zt(i,!0,-1),C=i.input.charCodeAt(i.position)),(i.line===a||i.lineIndent>w)&&C!==0)$e(i,"bad indentation of a mapping entry");else if(i.lineIndent<w)break}return P&&Qi(i,u,p,m,x,null,s,c,l),O&&(i.tag=g,i.anchor=h,i.kind="mapping",i.result=u),O}function ns(i){var w,e=!1,t=!1,r,a,s;if(s=i.input.charCodeAt(i.position),s!==33)return!1;if(i.tag!==null&&$e(i,"duplication of a tag property"),s=i.input.charCodeAt(++i.position),s===60?(e=!0,s=i.input.charCodeAt(++i.position)):s===33?(t=!0,r="!!",s=i.input.charCodeAt(++i.position)):r="!",w=i.position,e){do s=i.input.charCodeAt(++i.position);while(s!==0&&s!==62);i.position<i.length?(a=i.input.slice(w,i.position),s=i.input.charCodeAt(++i.position)):$e(i,"unexpected end of the stream within a verbatim tag")}else{for(;s!==0&&!Xt(s);)s===33&&(t?$e(i,"tag suffix cannot contain exclamation marks"):(r=i.input.slice(w-1,i.position+1),go.test(r)||$e(i,"named tag handle cannot contain such characters"),t=!0,w=i.position+1)),s=i.input.charCodeAt(++i.position);a=i.input.slice(w,i.position),Ka.test(a)&&$e(i,"tag suffix cannot contain flow indicator characters")}a&&!fo.test(a)&&$e(i,"tag name cannot contain such characters: "+a);try{a=decodeURIComponent(a)}catch{$e(i,"tag name is malformed: "+a)}return e?i.tag=a:Ai.call(i.tagMap,r)?i.tag=i.tagMap[r]+a:r==="!"?i.tag="!"+a:r==="!!"?i.tag="tag:yaml.org,2002:"+a:$e(i,'undeclared tag handle "'+r+'"'),!0}function os(i){var w,e;if(e=i.input.charCodeAt(i.position),e!==38)return!1;for(i.anchor!==null&&$e(i,"duplication of an anchor property"),e=i.input.charCodeAt(++i.position),w=i.position;e!==0&&!Xt(e)&&!Xi(e);)e=i.input.charCodeAt(++i.position);return i.position===w&&$e(i,"name of an anchor node must contain at least one character"),i.anchor=i.input.slice(w,i.position),!0}function as(i){var w,e,t;if(t=i.input.charCodeAt(i.position),t!==42)return!1;for(t=i.input.charCodeAt(++i.position),w=i.position;t!==0&&!Xt(t)&&!Xi(t);)t=i.input.charCodeAt(++i.position);return i.position===w&&$e(i,"name of an alias node must contain at least one character"),e=i.input.slice(w,i.position),Ai.call(i.anchorMap,e)||$e(i,'unidentified alias "'+e+'"'),i.result=i.anchorMap[e],zt(i,!0,-1),!0}function Zi(i,w,e,t,r){var a,s,c,l=1,g=!1,h=!1,u,p,m,x,_,P;if(i.listener!==null&&i.listener("open",i),i.tag=null,i.anchor=null,i.kind=null,i.result=null,a=s=c=Jr===e||uo===e,t&&zt(i,!0,-1)&&(g=!0,i.lineIndent>w?l=1:i.lineIndent===w?l=0:i.lineIndent<w&&(l=-1)),l===1)for(;ns(i)||os(i);)zt(i,!0,-1)?(g=!0,c=a,i.lineIndent>w?l=1:i.lineIndent===w?l=0:i.lineIndent<w&&(l=-1)):c=!1;if(c&&(c=g||r),(l===1||Jr===e)&&(Gr===e||ho===e?_=w:_=w+1,P=i.position-i.lineStart,l===1?c&&(Dn(i,P)||rs(i,P,_))||ts(i,_)?h=!0:(s&&is(i,_)||Za(i,_)||es(i,_)?h=!0:as(i)?(h=!0,(i.tag!==null||i.anchor!==null)&&$e(i,"alias node should not have any properties")):Qa(i,_,Gr===e)&&(h=!0,i.tag===null&&(i.tag="?")),i.anchor!==null&&(i.anchorMap[i.anchor]=i.result)):l===0&&(h=c&&Dn(i,P))),i.tag===null)i.anchor!==null&&(i.anchorMap[i.anchor]=i.result);else if(i.tag==="?"){for(i.result!==null&&i.kind!=="scalar"&&$e(i,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+i.kind+'"'),u=0,p=i.implicitTypes.length;u<p;u+=1)if(x=i.implicitTypes[u],x.resolve(i.result)){i.result=x.construct(i.result),i.tag=x.tag,i.anchor!==null&&(i.anchorMap[i.anchor]=i.result);break}}else if(i.tag!=="!"){if(Ai.call(i.typeMap[i.kind||"fallback"],i.tag))x=i.typeMap[i.kind||"fallback"][i.tag];else for(x=null,m=i.typeMap.multi[i.kind||"fallback"],u=0,p=m.length;u<p;u+=1)if(i.tag.slice(0,m[u].tag.length)===m[u].tag){x=m[u];break}x||$e(i,"unknown tag !<"+i.tag+">"),i.result!==null&&x.kind!==i.kind&&$e(i,"unacceptable node kind for !<"+i.tag+'> tag; it should be "'+x.kind+'", not "'+i.kind+'"'),x.resolve(i.result,i.tag)?(i.result=x.construct(i.result,i.tag),i.anchor!==null&&(i.anchorMap[i.anchor]=i.result)):$e(i,"cannot resolve a node with !<"+i.tag+"> explicit tag")}return i.listener!==null&&i.listener("close",i),i.tag!==null||i.anchor!==null||h}function ss(i){var w=i.position,e,t,r,a=!1,s;for(i.version=null,i.checkLineBreaks=i.legacy,i.tagMap=Object.create(null),i.anchorMap=Object.create(null);(s=i.input.charCodeAt(i.position))!==0&&(zt(i,!0,-1),s=i.input.charCodeAt(i.position),!(i.lineIndent>0||s!==37));){for(a=!0,s=i.input.charCodeAt(++i.position),e=i.position;s!==0&&!Xt(s);)s=i.input.charCodeAt(++i.position);for(t=i.input.slice(e,i.position),r=[],t.length<1&&$e(i,"directive name must not be less than one character in length");s!==0;){for(;$i(s);)s=i.input.charCodeAt(++i.position);if(s===35){do s=i.input.charCodeAt(++i.position);while(s!==0&&!pi(s));break}if(pi(s))break;for(e=i.position;s!==0&&!Xt(s);)s=i.input.charCodeAt(++i.position);r.push(i.input.slice(e,i.position))}s!==0&&kn(i),Ai.call(On,t)?On[t](i,t,r):Xr(i,'unknown document directive "'+t+'"')}if(zt(i,!0,-1),i.lineIndent===0&&i.input.charCodeAt(i.position)===45&&i.input.charCodeAt(i.position+1)===45&&i.input.charCodeAt(i.position+2)===45?(i.position+=3,zt(i,!0,-1)):a&&$e(i,"directives end mark is expected"),Zi(i,i.lineIndent-1,Jr,!1,!0),zt(i,!0,-1),i.checkLineBreaks&&Wa.test(i.input.slice(w,i.position))&&Xr(i,"non-ASCII line breaks are interpreted as content"),i.documents.push(i.result),i.position===i.lineStart&&en(i)){i.input.charCodeAt(i.position)===46&&(i.position+=3,zt(i,!0,-1));return}if(i.position<i.length-1)$e(i,"end of the stream or a document separator is expected");else return}function vo(i,w){i=String(i),w=w||{},i.length!==0&&(i.charCodeAt(i.length-1)!==10&&i.charCodeAt(i.length-1)!==13&&(i+=`
`),i.charCodeAt(0)===65279&&(i=i.slice(1)));var e=new Xa(i,w),t=i.indexOf("\0");for(t!==-1&&(e.position=t,$e(e,"null byte is not allowed in input")),e.input+="\0";e.input.charCodeAt(e.position)===32;)e.lineIndent+=1,e.position+=1;for(;e.position<e.length-1;)ss(e);return e.documents}function cs(i,w,e){w!==null&&typeof w=="object"&&typeof e=="undefined"&&(e=w,w=null);var t=vo(i,e);if(typeof w!="function")return t;for(var r=0,a=t.length;r<a;r+=1)w(t[r])}function ds(i,w){var e=vo(i,w);if(e.length!==0){if(e.length===1)return e[0];throw new Gt("expected a single document in the stream, but found more")}}var ls=cs,ps=ds,_o={loadAll:ls,load:ps},xo=Object.prototype.toString,wo=Object.prototype.hasOwnProperty,Cn=65279,hs=9,br=10,us=13,gs=32,fs=33,ms=34,yn=35,ys=37,bs=38,vs=39,_s=42,ko=44,xs=45,Qr=58,ws=61,ks=62,Ss=63,Cs=64,So=91,Co=93,Es=96,Eo=123,As=124,Ao=125,Wt={};Wt[0]="\\0";Wt[7]="\\a";Wt[8]="\\b";Wt[9]="\\t";Wt[10]="\\n";Wt[11]="\\v";Wt[12]="\\f";Wt[13]="\\r";Wt[27]="\\e";Wt[34]='\\"';Wt[92]="\\\\";Wt[133]="\\N";Wt[160]="\\_";Wt[8232]="\\L";Wt[8233]="\\P";var Ts=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],Ps=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function Ls(i,w){var e,t,r,a,s,c,l;if(w===null)return{};for(e={},t=Object.keys(w),r=0,a=t.length;r<a;r+=1)s=t[r],c=String(w[s]),s.slice(0,2)==="!!"&&(s="tag:yaml.org,2002:"+s.slice(2)),l=i.compiledTypeMap.fallback[s],l&&wo.call(l.styleAliases,c)&&(c=l.styleAliases[c]),e[s]=c;return e}function Ms(i){var w,e,t;if(w=i.toString(16).toUpperCase(),i<=255)e="x",t=2;else if(i<=65535)e="u",t=4;else if(i<=4294967295)e="U",t=8;else throw new Gt("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+e+Dt.repeat("0",t-w.length)+w}var Rs=1,vr=2;function Os(i){this.schema=i.schema||wn,this.indent=Math.max(1,i.indent||2),this.noArrayIndent=i.noArrayIndent||!1,this.skipInvalid=i.skipInvalid||!1,this.flowLevel=Dt.isNothing(i.flowLevel)?-1:i.flowLevel,this.styleMap=Ls(this.schema,i.styles||null),this.sortKeys=i.sortKeys||!1,this.lineWidth=i.lineWidth||80,this.noRefs=i.noRefs||!1,this.noCompatMode=i.noCompatMode||!1,this.condenseFlow=i.condenseFlow||!1,this.quotingType=i.quotingType==='"'?vr:Rs,this.forceQuotes=i.forceQuotes||!1,this.replacer=typeof i.replacer=="function"?i.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function In(i,w){for(var e=Dt.repeat(" ",w),t=0,r=-1,a="",s,c=i.length;t<c;)r=i.indexOf(`
`,t),r===-1?(s=i.slice(t),t=c):(s=i.slice(t,r+1),t=r+1),s.length&&s!==`
`&&(a+=e),a+=s;return a}function bn(i,w){return`
`+Dt.repeat(" ",i.indent*w)}function zs(i,w){var e,t,r;for(e=0,t=i.implicitTypes.length;e<t;e+=1)if(r=i.implicitTypes[e],r.resolve(w))return!0;return!1}function Zr(i){return i===gs||i===hs}function _r(i){return 32<=i&&i<=126||161<=i&&i<=55295&&i!==8232&&i!==8233||57344<=i&&i<=65533&&i!==Cn||65536<=i&&i<=1114111}function Bn(i){return _r(i)&&i!==Cn&&i!==us&&i!==br}function Nn(i,w,e){var t=Bn(i),r=t&&!Zr(i);return(e?t:t&&i!==ko&&i!==So&&i!==Co&&i!==Eo&&i!==Ao)&&i!==yn&&!(w===Qr&&!r)||Bn(w)&&!Zr(w)&&i===yn||w===Qr&&r}function Ds(i){return _r(i)&&i!==Cn&&!Zr(i)&&i!==xs&&i!==Ss&&i!==Qr&&i!==ko&&i!==So&&i!==Co&&i!==Eo&&i!==Ao&&i!==yn&&i!==bs&&i!==_s&&i!==fs&&i!==As&&i!==ws&&i!==ks&&i!==vs&&i!==ms&&i!==ys&&i!==Cs&&i!==Es}function Is(i){return!Zr(i)&&i!==Qr}function mr(i,w){var e=i.charCodeAt(w),t;return e>=55296&&e<=56319&&w+1<i.length&&(t=i.charCodeAt(w+1),t>=56320&&t<=57343)?(e-55296)*1024+t-56320+65536:e}function To(i){var w=/^\n* /;return w.test(i)}var Po=1,vn=2,Lo=3,Mo=4,Ji=5;function Bs(i,w,e,t,r,a,s,c){var l,g=0,h=null,u=!1,p=!1,m=t!==-1,x=-1,_=Ds(mr(i,0))&&Is(mr(i,i.length-1));if(w||s)for(l=0;l<i.length;g>=65536?l+=2:l++){if(g=mr(i,l),!_r(g))return Ji;_=_&&Nn(g,h,c),h=g}else{for(l=0;l<i.length;g>=65536?l+=2:l++){if(g=mr(i,l),g===br)u=!0,m&&(p=p||l-x-1>t&&i[x+1]!==" ",x=l);else if(!_r(g))return Ji;_=_&&Nn(g,h,c),h=g}p=p||m&&l-x-1>t&&i[x+1]!==" "}return!u&&!p?_&&!s&&!r(i)?Po:a===vr?Ji:vn:e>9&&To(i)?Ji:s?a===vr?Ji:vn:p?Mo:Lo}function Ns(i,w,e,t,r){i.dump=(function(){if(w.length===0)return i.quotingType===vr?'""':"''";if(!i.noCompatMode&&(Ts.indexOf(w)!==-1||Ps.test(w)))return i.quotingType===vr?'"'+w+'"':"'"+w+"'";var a=i.indent*Math.max(1,e),s=i.lineWidth===-1?-1:Math.max(Math.min(i.lineWidth,40),i.lineWidth-a),c=t||i.flowLevel>-1&&e>=i.flowLevel;function l(g){return zs(i,g)}switch(Bs(w,c,i.indent,s,l,i.quotingType,i.forceQuotes&&!t,r)){case Po:return w;case vn:return"'"+w.replace(/'/g,"''")+"'";case Lo:return"|"+Fn(w,i.indent)+Hn(In(w,a));case Mo:return">"+Fn(w,i.indent)+Hn(In(Fs(w,s),a));case Ji:return'"'+Hs(w)+'"';default:throw new Gt("impossible error: invalid scalar style")}})()}function Fn(i,w){var e=To(i)?String(w):"",t=i[i.length-1]===`
`,r=t&&(i[i.length-2]===`
`||i===`
`),a=r?"+":t?"":"-";return e+a+`
`}function Hn(i){return i[i.length-1]===`
`?i.slice(0,-1):i}function Fs(i,w){for(var e=/(\n+)([^\n]*)/g,t=(function(){var g=i.indexOf(`
`);return g=g!==-1?g:i.length,e.lastIndex=g,qn(i.slice(0,g),w)})(),r=i[0]===`
`||i[0]===" ",a,s;s=e.exec(i);){var c=s[1],l=s[2];a=l[0]===" ",t+=c+(!r&&!a&&l!==""?`
`:"")+qn(l,w),r=a}return t}function qn(i,w){if(i===""||i[0]===" ")return i;for(var e=/ [^ ]/g,t,r=0,a,s=0,c=0,l="";t=e.exec(i);)c=t.index,c-r>w&&(a=s>r?s:c,l+=`
`+i.slice(r,a),r=a+1),s=c;return l+=`
`,i.length-r>w&&s>r?l+=i.slice(r,s)+`
`+i.slice(s+1):l+=i.slice(r),l.slice(1)}function Hs(i){for(var w="",e=0,t,r=0;r<i.length;e>=65536?r+=2:r++)e=mr(i,r),t=Wt[e],!t&&_r(e)?(w+=i[r],e>=65536&&(w+=i[r+1])):w+=t||Ms(e);return w}function qs(i,w,e){var t="",r=i.tag,a,s,c;for(a=0,s=e.length;a<s;a+=1)c=e[a],i.replacer&&(c=i.replacer.call(e,String(a),c)),(yi(i,w,c,!1,!1)||typeof c=="undefined"&&yi(i,w,null,!1,!1))&&(t!==""&&(t+=","+(i.condenseFlow?"":" ")),t+=i.dump);i.tag=r,i.dump="["+t+"]"}function $n(i,w,e,t){var r="",a=i.tag,s,c,l;for(s=0,c=e.length;s<c;s+=1)l=e[s],i.replacer&&(l=i.replacer.call(e,String(s),l)),(yi(i,w+1,l,!0,!0,!1,!0)||typeof l=="undefined"&&yi(i,w+1,null,!0,!0,!1,!0))&&((!t||r!=="")&&(r+=bn(i,w)),i.dump&&br===i.dump.charCodeAt(0)?r+="-":r+="- ",r+=i.dump);i.tag=a,i.dump=r||"[]"}function $s(i,w,e){var t="",r=i.tag,a=Object.keys(e),s,c,l,g,h;for(s=0,c=a.length;s<c;s+=1)h="",t!==""&&(h+=", "),i.condenseFlow&&(h+='"'),l=a[s],g=e[l],i.replacer&&(g=i.replacer.call(e,l,g)),yi(i,w,l,!1,!1)&&(i.dump.length>1024&&(h+="? "),h+=i.dump+(i.condenseFlow?'"':"")+":"+(i.condenseFlow?"":" "),yi(i,w,g,!1,!1)&&(h+=i.dump,t+=h));i.tag=r,i.dump="{"+t+"}"}function Vs(i,w,e,t){var r="",a=i.tag,s=Object.keys(e),c,l,g,h,u,p;if(i.sortKeys===!0)s.sort();else if(typeof i.sortKeys=="function")s.sort(i.sortKeys);else if(i.sortKeys)throw new Gt("sortKeys must be a boolean or a function");for(c=0,l=s.length;c<l;c+=1)p="",(!t||r!=="")&&(p+=bn(i,w)),g=s[c],h=e[g],i.replacer&&(h=i.replacer.call(e,g,h)),yi(i,w+1,g,!0,!0,!0)&&(u=i.tag!==null&&i.tag!=="?"||i.dump&&i.dump.length>1024,u&&(i.dump&&br===i.dump.charCodeAt(0)?p+="?":p+="? "),p+=i.dump,u&&(p+=bn(i,w)),yi(i,w+1,h,!0,u)&&(i.dump&&br===i.dump.charCodeAt(0)?p+=":":p+=": ",p+=i.dump,r+=p));i.tag=a,i.dump=r||"{}"}function Vn(i,w,e){var t,r,a,s,c,l;for(r=e?i.explicitTypes:i.implicitTypes,a=0,s=r.length;a<s;a+=1)if(c=r[a],(c.instanceOf||c.predicate)&&(!c.instanceOf||typeof w=="object"&&w instanceof c.instanceOf)&&(!c.predicate||c.predicate(w))){if(e?c.multi&&c.representName?i.tag=c.representName(w):i.tag=c.tag:i.tag="?",c.represent){if(l=i.styleMap[c.tag]||c.defaultStyle,xo.call(c.represent)==="[object Function]")t=c.represent(w,l);else if(wo.call(c.represent,l))t=c.represent[l](w,l);else throw new Gt("!<"+c.tag+'> tag resolver accepts not "'+l+'" style');i.dump=t}return!0}return!1}function yi(i,w,e,t,r,a,s){i.tag=null,i.dump=e,Vn(i,e,!1)||Vn(i,e,!0);var c=xo.call(i.dump),l=t,g;t&&(t=i.flowLevel<0||i.flowLevel>w);var h=c==="[object Object]"||c==="[object Array]",u,p;if(h&&(u=i.duplicates.indexOf(e),p=u!==-1),(i.tag!==null&&i.tag!=="?"||p||i.indent!==2&&w>0)&&(r=!1),p&&i.usedDuplicates[u])i.dump="*ref_"+u;else{if(h&&p&&!i.usedDuplicates[u]&&(i.usedDuplicates[u]=!0),c==="[object Object]")t&&Object.keys(i.dump).length!==0?(Vs(i,w,i.dump,r),p&&(i.dump="&ref_"+u+i.dump)):($s(i,w,i.dump),p&&(i.dump="&ref_"+u+" "+i.dump));else if(c==="[object Array]")t&&i.dump.length!==0?(i.noArrayIndent&&!s&&w>0?$n(i,w-1,i.dump,r):$n(i,w,i.dump,r),p&&(i.dump="&ref_"+u+i.dump)):(qs(i,w,i.dump),p&&(i.dump="&ref_"+u+" "+i.dump));else if(c==="[object String]")i.tag!=="?"&&Ns(i,i.dump,w,a,l);else{if(c==="[object Undefined]")return!1;if(i.skipInvalid)return!1;throw new Gt("unacceptable kind of an object to dump "+c)}i.tag!==null&&i.tag!=="?"&&(g=encodeURI(i.tag[0]==="!"?i.tag.slice(1):i.tag).replace(/!/g,"%21"),i.tag[0]==="!"?g="!"+g:g.slice(0,18)==="tag:yaml.org,2002:"?g="!!"+g.slice(18):g="!<"+g+">",i.dump=g+" "+i.dump)}return!0}function js(i,w){var e=[],t=[],r,a;for(_n(i,e,t),r=0,a=t.length;r<a;r+=1)w.duplicates.push(e[t[r]]);w.usedDuplicates=new Array(a)}function _n(i,w,e){var t,r,a;if(i!==null&&typeof i=="object")if(r=w.indexOf(i),r!==-1)e.indexOf(r)===-1&&e.push(r);else if(w.push(i),Array.isArray(i))for(r=0,a=i.length;r<a;r+=1)_n(i[r],w,e);else for(t=Object.keys(i),r=0,a=t.length;r<a;r+=1)_n(i[t[r]],w,e)}function Ws(i,w){w=w||{};var e=new Os(w);e.noRefs||js(i,e);var t=i;return e.replacer&&(t=e.replacer.call({"":t},"",t)),yi(e,0,t,!0,!0)?e.dump+`
`:""}var Ks=Ws,Ys={dump:Ks};function En(i,w){return function(){throw new Error("Function yaml."+i+" is removed in js-yaml 4. Use yaml."+w+" instead, which is now safe by default.")}}var Us=Vt,Gs=Kn,Js=Jn,Xs=to,Qs=io,Zs=wn,ec=_o.load,tc=_o.loadAll,ic=Ys.dump,rc=Gt,nc={binary:so,float:eo,map:Gn,null:Xn,pairs:lo,set:po,timestamp:oo,bool:Qn,int:Zn,merge:ao,omap:co,seq:Un,str:Yn},oc=En("safeLoad","load"),ac=En("safeLoadAll","loadAll"),sc=En("safeDump","dump"),cc={Type:Us,Schema:Gs,FAILSAFE_SCHEMA:Js,JSON_SCHEMA:Xs,CORE_SCHEMA:Qs,DEFAULT_SCHEMA:Zs,load:ec,loadAll:tc,dump:ic,YAMLException:rc,types:nc,safeLoad:oc,safeLoadAll:ac,safeDump:sc},Ro=cc;window.interact||(window.interact=Oo.default);window.jsyaml||(window.jsyaml=Ro);var dc="0.9.5";console.info(`%c drag-and-drop-card %c v${dc} `,"color:#fff;background:#03a9f4;font-weight:700;padding:2px 6px;border-radius:3px 0 0 3px","color:#03303a;background:#bdeaff;padding:2px 6px;border-radius:0 3px 3px 0");console.info("%c drag-and-drop-card loaded","color:#03a9f4;font-weight:700;");var An=()=>new Promise(i=>requestAnimationFrame(()=>i())),lc=()=>new Promise(i=>window.requestIdleCallback?requestIdleCallback(()=>i()):setTimeout(i,0)),Ti=class i extends HTMLElement{constructor(){super();Ot(this,"__booting",!1);Ot(this,"_gridCanvas",null);Ot(this,"_gridCtx",null);Ot(this,"_gridCols",0);Ot(this,"_gridRows",0);Ot(this,"_gridCellSize",0);Ot(this,"_gridDown",!1);Ot(this,"_gridStartCol",-1);Ot(this,"_gridStartRow",-1);Ot(this,"_gridHoverCol",-1);Ot(this,"_gridHoverRow",-1);Ot(this,"_gridCurrCol",-1);Ot(this,"_gridCurrRow",-1);Ot(this,"_gridDirty",!1);Ot(this,"_gridRAF",0);Ot(this,"_gridTile",null);Ot(this,"__gridPrevEditMode");Ot(this,"__gridRO",null);Ot(this,"__gridPollT",null);this.shadowRoot||this.attachShadow({mode:"open"}),this.__rebuiltCards=new WeakSet,this.viewportPreviewMode="live",this._activeResponsiveProfile="desktop",this._activeResponsiveLayoutKey="desktop_landscape",this._responsiveLayouts=null,this._dashboardPackages=[],this.__dashboardThemeAppliedVars=[],this._responsivePreviewOrientations={desktop:"landscape",tablet:"landscape",mobile:"portrait"},this.responsiveViewportProfiles=this._defaultResponsiveViewportProfiles_(),this.__responsiveSwitchSeq=0,this.__toolbarExpanded=!1}_updateTabsA11y_(){var r;let e=this.tabsBar;if(!e)return;e.setAttribute("role","tablist"),e.querySelectorAll(".ddc-tab").forEach((a,s)=>{let c=a.classList.contains("active");a.setAttribute("role","tab"),a.setAttribute("aria-selected",String(c)),a.setAttribute("tabindex",c?"0":"-1"),a.dataset.index=String(s)}),this.__tabsKeyHandler||(this.__tabsKeyHandler=a=>{if(!["ArrowLeft","ArrowRight","Home","End"].includes(a.key))return;let c=Array.from(e.querySelectorAll(".ddc-tab"));if(!c.length)return;a.preventDefault();let l=c.findIndex(p=>p===document.activeElement),g=c.findIndex(p=>p.classList.contains("active")),h=l>=0?l:g>=0?g:0;a.key==="ArrowRight"&&(h=Math.min(c.length-1,h+1)),a.key==="ArrowLeft"&&(h=Math.max(0,h-1)),a.key==="Home"&&(h=0),a.key==="End"&&(h=c.length-1);let u=c[h];if(u){try{u.focus({preventScroll:!1})}catch{}u.click()}},e.addEventListener("keydown",this.__tabsKeyHandler)),this.__tabsScrollHandler||(this.__tabsScrollHandler=()=>{var a;return(a=this._updateTabOverflowShadows_)==null?void 0:a.call(this)},e.addEventListener("scroll",this.__tabsScrollHandler,{passive:!0})),(r=this._updateTabOverflowShadows_)==null||r.call(this)}_getCurrentDashboardUrlPath_(){let t=(window.location.pathname||"/").replace(/^\/+/,"").split("/")[0]||"lovelace";return t==="lovelace"?null:t}async _ensureCardIdSeededInStorage_(){var t;if((t=this.config)!=null&&t.id)return this.config.id;let e=crypto!=null&&crypto.randomUUID?crypto.randomUUID():"ddc_"+Math.random().toString(36).slice(2);this.config={...this.config,id:e};try{let r=this._getCurrentDashboardUrlPath_(),a=await this.hass.callWS(r?{type:"lovelace/config",url_path:r}:{type:"lovelace/config"}),s=this._findThisCardPathRecursive_(a,m=>(m==null?void 0:m.type)==="custom:drag-and-drop-card"&&(!m.id||m.id===e));if(!s)return e;let{viewIndex:c,cardIndex:l,parentPath:g}=s,h=a.views[c],p={...this._getCardByPath_(h,g,l),id:e};this._setCardByPath_(h,g,l,p),await this.hass.callWS(r?{type:"lovelace/config/save",url_path:r,config:a}:{type:"lovelace/config/save",config:a})}catch{}return e}async _persistThisCardConfigToStorage_(){var p,m;await this._ensureCardIdSeededInStorage_();let e={type:"custom:drag-and-drop-card",id:(p=this.config)==null?void 0:p.id,...this._config},t=this._getCurrentDashboardUrlPath_(),r=await this.hass.callWS(t?{type:"lovelace/config",url_path:t}:{type:"lovelace/config"}),a=this._findThisCardPathRecursive_(r,x=>{var _;return(x==null?void 0:x.type)==="custom:drag-and-drop-card"&&(x==null?void 0:x.id)===((_=this.config)==null?void 0:_.id)});if(!a)throw new Error("Card not found in Lovelace config");let{viewIndex:s,cardIndex:c,parentPath:l}=a,g=r.views[s],u={...this._getCardByPath_(g,l,c),...e};this._setCardByPath_(g,l,c,u),await this.hass.callWS(t?{type:"lovelace/config/save",url_path:t,config:r}:{type:"lovelace/config/save",config:r}),this.config=u,(m=this.requestUpdate)==null||m.call(this)}_findThisCardPathRecursive_(e,t){let r=(e==null?void 0:e.views)||[];for(let a=0;a<r.length;a++){let s=this._findInCardTree_(r[a],t);if(s)return{viewIndex:a,...s}}return null}_findInCardTree_(e,t,r=[]){var s;let a=(e==null?void 0:e.cards)||[];for(let c=0;c<a.length;c++){let l=a[c];if(t(l))return{cardIndex:c,parentPath:r};if((s=l==null?void 0:l.cards)!=null&&s.length){let g=this._findInCardTree_(l,t,r.concat(c));if(g)return g}}return null}_getCardByPath_(e,t,r){let a=e;for(let s of t||[])a=a.cards[s];return a.cards[r]}_setCardByPath_(e,t,r,a){let s=e;for(let c of t||[])s=s.cards[c];s.cards[r]=a}_ensureToolbarStyles_(){try{if(this.shadowRoot.querySelector("#ddc-toolbar-styles"))return;let t=document.createElement("style");t.id="ddc-toolbar-styles",t.textContent=`/* ===== Edit toolbar ===== */
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
    .packages-card{
      grid-column:1 / -1;
    }
  }

  @media (min-width: 1280px) {
    .tabs-card, .packages-card { grid-column: 1 / -1; }
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
  }
  `,this.shadowRoot.appendChild(e)}_setHeaderVisible_(e=!0){var t,r,a,s,c,l;try{(((t=this._deepQueryAll)==null?void 0:t.call(this,"app-header, ha-top-app-bar, ha-top-app-bar-fixed, mwc-top-app-bar-fixed, ha-header-bar, app-toolbar, ha-toolbar"))||[]).forEach(x=>{x&&(x.dataset.ddcPrevDisplayHeader===void 0&&(x.dataset.ddcPrevDisplayHeader=x.style.display||"",x.dataset.ddcPrevMinH=x.style.minHeight||"",x.dataset.ddcPrevH=x.style.height||"",x.dataset.ddcPrevVis=x.style.visibility||""),e?(x.style.display=x.dataset.ddcPrevDisplayHeader||"",x.style.minHeight=x.dataset.ddcPrevMinH||"",x.style.height=x.dataset.ddcPrevH||"",x.style.visibility=x.dataset.ddcPrevVis||"",x.removeAttribute("hidden")):(x.style.display="none",x.style.minHeight="0",x.style.height="0",x.style.visibility="hidden",x.setAttribute("hidden","")))}),(((r=this._deepQueryAll)==null?void 0:r.call(this,'[slot="actionItems"], ha-icon-button, ha-button-menu, assist-button, search-input, ha-quick-bar, ha-mwc-menu'))||[]).forEach(x=>{x&&(x.dataset.ddcPrevDisplayAction===void 0&&(x.dataset.ddcPrevDisplayAction=x.style.display||"",x.dataset.ddcPrevVisAction=x.style.visibility||""),e?(x.style.display=x.dataset.ddcPrevDisplayAction||"",x.style.visibility=x.dataset.ddcPrevVisAction||""):(x.style.display="none",x.style.visibility="hidden"))}),[...((a=this._deepQueryAll)==null?void 0:a.call(this,"ha-app-layout"))||[],...((s=this._deepQueryAll)==null?void 0:s.call(this,"home-assistant-main"))||[],document.documentElement,document.body].filter(Boolean).forEach(x=>{if(x)if(x.dataset.ddcPrevHdrVars===void 0&&(x.dataset.ddcPrevHdrVars=JSON.stringify({mdc:x.style.getPropertyValue("--mdc-top-app-bar-height")||"",app:x.style.getPropertyValue("--app-header-height")||"",hdr:x.style.getPropertyValue("--header-height")||"",hah:x.style.getPropertyValue("--ha-header-height")||"",pad:x.style&&(x.style.paddingTop||"")||""})),e)try{let _=JSON.parse(x.dataset.ddcPrevHdrVars||"{}");x.style.setProperty("--mdc-top-app-bar-height",_.mdc||""),x.style.setProperty("--app-header-height",_.app||""),x.style.setProperty("--header-height",_.hdr||""),x.style.setProperty("--ha-header-height",_.hah||""),_.pad!==void 0&&(x.style.paddingTop=_.pad||"")}catch{}else{x.style.setProperty("--mdc-top-app-bar-height","0px"),x.style.setProperty("--app-header-height","0px"),x.style.setProperty("--header-height","0px"),x.style.setProperty("--ha-header-height","0px");try{x.style.paddingTop="0px"}catch{}}}),(((c=this._deepQueryAll)==null?void 0:c.call(this,"#contentContainer"))||[]).forEach(x=>{x&&(x.dataset.ddcPrevContentPadTop===void 0&&(x.dataset.ddcPrevContentPadTop=x.style&&(x.style.paddingTop||"")||""),x.style.paddingTop=e?x.dataset.ddcPrevContentPadTop||"":"0px")}),(((l=this._deepQueryAll)==null?void 0:l.call(this,".main-title"))||[]).forEach(x=>{x&&(x.dataset.ddcPrevDisplayTitle===void 0&&(x.dataset.ddcPrevDisplayTitle=x.style.display||"",x.dataset.ddcPrevVisTitle=x.style.visibility||""),e?(x.style.display=x.dataset.ddcPrevDisplayTitle||"",x.style.visibility=x.dataset.ddcPrevVisTitle||""):(x.style.display="none",x.style.visibility="hidden"))})}catch{}}_setSidebarVisible_(e=!0){var t,r;try{(((t=this._deepQueryAll)==null?void 0:t.call(this,"ha-sidebar"))||[]).forEach(c=>{c&&(c.dataset.ddcPrevDisplaySidebar===void 0&&(c.dataset.ddcPrevDisplaySidebar=c.style.display||""),c.style.display=e?c.dataset.ddcPrevDisplaySidebar||"":"none")}),(((r=this._deepQueryAll)==null?void 0:r.call(this,"ha-drawer"))||[]).forEach(c=>{if(c){c.dataset.ddcPrevDrawerWidth===void 0&&(c.dataset.ddcPrevDrawerWidth=c.style.getPropertyValue("--mdc-drawer-width")||""),e?c.style.setProperty("--mdc-drawer-width",c.dataset.ddcPrevDrawerWidth||""):c.style.setProperty("--mdc-drawer-width","0px");try{!e&&typeof c.close=="function"&&c.close()}catch{}}})}catch{}}_applyHaChromeVisibility_(){var e;try{let t=!!this.editMode||((e=this._isInHaEditorPreview)==null?void 0:e.call(this));t||!this.hideHaHeader?this._setHeaderVisible_(!0):this._setHeaderVisible_(!1),t||!this.hideHaSidebar?this._setSidebarVisible_(!0):this._setSidebarVisible_(!1)}catch{}requestAnimationFrame(()=>{var t,r,a;try{(t=this._computeHaSidebarGutters_)==null||t.call(this)}catch{}try{(r=this._computeHaTopGutter_)==null||r.call(this)}catch{}try{(a=this._refreshToolbarOpenHeight_)==null||a.call(this)}catch{}})}_applyBackgroundImageFromConfig(){var s;try{let c=navigator.userAgent||"";if(/iPad|iPhone|iPod/.test(c)&&t&&typeof t.src=="string"&&t.src.startsWith("data:")&&t.src.length>3e5){console.warn("[drag-and-drop-card] Skipping large inline background on iOS for stability.");return}}catch{}let e=this._config||{},t=e.background_image||e.bg_image||null,r=this.cardContainer;if(!r)return;let a=!!(this.applyBackgroundToPage&&((e.background_mode||"").toLowerCase()==="image"||t!=null&&t.src));if(t&&t.src){let c=String(t.src).trim(),l=t.repeat===!0||t.repeat==="repeat"?"repeat":"no-repeat",g=Math.max(0,Math.min(1,Number((s=t.opacity)!=null?s:1))),h=t.size||"cover",u=t.position||"center center",p=t.attachment||"scroll",m=t.filter||"none";a?(r.style.removeProperty("--ddc-bg-image"),r.style.removeProperty("--ddc-bg-repeat"),r.style.removeProperty("--ddc-bg-opacity"),r.style.removeProperty("--ddc-bg-size"),r.style.removeProperty("--ddc-bg-position"),r.style.removeProperty("--ddc-bg-attachment"),r.style.removeProperty("--ddc-bg-filter"),r.classList.remove("has-bg-image"),r.classList.add("ddc-page-bg-image-active")):(r.style.setProperty("--ddc-bg-image",c?`url("${c.replace(/"/g,'"')}")`:"none"),r.style.setProperty("--ddc-bg-repeat",l),r.style.setProperty("--ddc-bg-opacity",String(g)),r.style.setProperty("--ddc-bg-size",h),r.style.setProperty("--ddc-bg-position",u),r.style.setProperty("--ddc-bg-attachment",p),r.style.setProperty("--ddc-bg-filter",m),r.classList.add("has-bg-image"),r.classList.remove("ddc-page-bg-image-active"))}else r.style.removeProperty("--ddc-bg-image"),r.style.removeProperty("--ddc-bg-repeat"),r.style.removeProperty("--ddc-bg-opacity"),r.style.removeProperty("--ddc-bg-size"),r.style.removeProperty("--ddc-bg-position"),r.style.removeProperty("--ddc-bg-attachment"),r.style.removeProperty("--ddc-bg-filter"),r.classList.remove("has-bg-image"),r.classList.remove("ddc-page-bg-image-active")}_applyBackgroundFromConfig(){var e,t,r,a,s,c,l,g,h,u,p,m,x,_,P,O,C,S,v,b,A;try{let E=((e=this._config)==null?void 0:e.background_mode)||((r=(t=this._config)==null?void 0:t.background_image)!=null&&r.src?"image":"none");if(E==="youtube"){let R=((a=this._config)==null?void 0:a.background_youtube)||{},D=this.applyBackgroundToPage?(s=this._ensurePageBgHost_)==null?void 0:s.call(this):(c=this._ensureBgHost_)==null?void 0:c.call(this),M=(l=this._getYouTubeBackgroundSignature_)==null?void 0:l.call(this,R,{host:D});if(D&&M&&this.__ytWrap&&this.__ytWrap.parentNode===D&&this.__ytBackgroundSignature===M){try{D.style.display="block"}catch{}try{this.__ytWrap.style.display=""}catch{}(g=this._layoutYtBackground_)==null||g.call(this),(h=this._syncPageBackgroundToView_)==null||h.call(this);return}}if((u=this._destroyParticles_)==null||u.call(this),(p=this._destroyYouTube_)==null||p.call(this),(m=this._clearPageDynamicBackground_)==null||m.call(this),E!=="image"){let R=this.cardContainer;R&&(R.style.removeProperty("--ddc-bg-image"),R.style.removeProperty("--ddc-bg-repeat"),R.style.removeProperty("--ddc-bg-opacity"),R.style.removeProperty("--ddc-bg-size"),R.style.removeProperty("--ddc-bg-position"),R.style.removeProperty("--ddc-bg-attachment"),R.style.removeProperty("--ddc-bg-filter"),R.classList.remove("has-bg-image"))}if(E==="image"){(x=this._applyBackgroundImageFromConfig)==null||x.call(this),(_=this._syncPageBackgroundToView_)==null||_.call(this);return}if(E==="particles"){let R=((P=this._config)==null?void 0:P.background_particles)||{},D=this.applyBackgroundToPage?(O=this._ensurePageBgHost_)==null?void 0:O.call(this):null;this._attachParticlesBackground_(R,D),(C=this._syncPageBackgroundToView_)==null||C.call(this);return}if(E==="youtube"){let R=((S=this._config)==null?void 0:S.background_youtube)||{},D=this.applyBackgroundToPage?(v=this._ensurePageBgHost_)==null?void 0:v.call(this):null;this._attachYouTubeBackground_(R,D),(b=this._syncPageBackgroundToView_)==null||b.call(this);return}(A=this._syncPageBackgroundToView_)==null||A.call(this)}catch(E){console.warn("[drag-and-drop-card] _applyBackgroundFromConfig failed:",E)}}_getYouTubeBackgroundSignature_(e={},t={}){var r;try{let a=this._parseYouTubeId_(e.video_id||e.url);if(!a)return"";let s=((r=t==null?void 0:t.host)==null?void 0:r.id)==="ddcPageBgHost"||this.applyBackgroundToPage?"page":"card",c=Number.isFinite(e.start)?Number(e.start):null,l=Number.isFinite(e.end)?Number(e.end):null,g=e.opacity!=null?Math.max(0,Math.min(1,Number(e.opacity))):1;return JSON.stringify({hostMode:s,videoId:a,start:c,end:l,mute:e.mute!==!1,loop:e.loop!==!1,size:String(e.size||"cover"),position:String(e.position||"center"),attachment:String(e.attachment||"scroll"),opacity:g})}catch{return""}}_getAvailableDashboardThemeNames_(){var e,t;try{let r=(t=(e=this.hass)==null?void 0:e.themes)==null?void 0:t.themes;return!r||typeof r!="object"?[]:Object.keys(r).sort((a,s)=>a.localeCompare(s,void 0,{sensitivity:"base"}))}catch{return[]}}_getEffectiveDashboardThemeMode_(){var e,t,r,a;try{let s=(t=(e=this.hass)==null?void 0:e.selectedTheme)==null?void 0:t.dark;if(typeof s=="boolean")return s?"dark":"light"}catch{}try{return(a=(r=window.matchMedia)==null?void 0:r.call(window,"(prefers-color-scheme: dark)"))!=null&&a.matches?"dark":"light"}catch{return"light"}}_getDashboardThemeDefinition_(e=this.dashboardTheme){var t,r,a,s,c,l;try{let g=(a=(r=(t=this.hass)==null?void 0:t.themes)==null?void 0:r.themes)==null?void 0:a[e];if(!g||typeof g!="object")return null;if(g.modes&&typeof g.modes=="object"){let h=this._getEffectiveDashboardThemeMode_(),u=((s=g.modes)==null?void 0:s[h])||((c=g.modes)==null?void 0:c.light)||((l=g.modes)==null?void 0:l.dark)||Object.values(g.modes||{}).find(p=>p&&typeof p=="object");return u&&typeof u=="object"?u:null}return g}catch{return null}}_isDashboardThemeOverrideAllDesignActive_(){return!!(this.dashboardThemeEnabled&&this.dashboardThemeOverrideAllDesign&&this.dashboardTheme)}_getVisualRefreshSignature_(){var e,t,r,a,s,c,l;try{let g=this._config||{},h=g.background_image||g.bg_image||{},u=g.background_particles||{},p=g.background_youtube||{},m=this.dashboardThemeEnabled?String(this.dashboardTheme||"").trim():"",x=m&&this._getDashboardThemeDefinition_(m)||null,_=String(g.background_mode||(h!=null&&h.src?"image":p&&Object.keys(p).length?"youtube":u&&Object.keys(u).length?"particles":"none")).toLowerCase();return JSON.stringify({dashboardThemeEnabled:!!this.dashboardThemeEnabled,dashboardTheme:m,dashboardThemeOverrideAllDesign:!!this.dashboardThemeOverrideAllDesign,effectiveThemeMode:((e=this._getEffectiveDashboardThemeMode_)==null?void 0:e.call(this))||"light",themeDefinition:x,containerBackground:String((t=this.containerBackground)!=null?t:""),cardBackground:String((r=this.cardBackground)!=null?r:""),cardShadowEnabled:!!this.cardShadowEnabled,applyBackgroundToPage:!!this.applyBackgroundToPage,backgroundMode:_,backgroundImage:_==="image"?{src:String((h==null?void 0:h.src)||""),repeat:String((h==null?void 0:h.repeat)||""),size:String((h==null?void 0:h.size)||""),position:String((h==null?void 0:h.position)||""),attachment:String((h==null?void 0:h.attachment)||""),opacity:String((a=h==null?void 0:h.opacity)!=null?a:"")}:null,backgroundParticles:_==="particles"?{config_url:String((u==null?void 0:u.config_url)||""),pointer_events:!!(u!=null&&u.pointer_events),config:(u==null?void 0:u.config)||null}:null,backgroundYoutube:_==="youtube"?{video_id:String((p==null?void 0:p.video_id)||""),start:String((s=p==null?void 0:p.start)!=null?s:""),end:String((c=p==null?void 0:p.end)!=null?c:""),mute:!!(p!=null&&p.mute),controls:!!(p!=null&&p.controls),autoplay:(p==null?void 0:p.autoplay)!==!1,playback_rate:String((l=p==null?void 0:p.playback_rate)!=null?l:"")}:null})}catch{return""}}_scheduleVisibilityRefresh_(){this.__visibilityRefreshRAF||(this.__visibilityRefreshRAF=requestAnimationFrame(()=>{var e;this.__visibilityRefreshRAF=0;try{(e=this._applyVisibility_)==null||e.call(this)}catch{}}))}_scheduleVisualRefresh_(e=!1){var r;let t=((r=this._getVisualRefreshSignature_)==null?void 0:r.call(this))||"";!e&&t&&t===this.__lastVisualRefreshSig||(this.__queuedVisualRefreshSig=t,this.__queuedVisualRefreshForce=!!(this.__queuedVisualRefreshForce||e),!this.__visualRefreshRAF&&(this.__visualRefreshRAF=requestAnimationFrame(()=>{var c,l,g,h;this.__visualRefreshRAF=0;let a=!!this.__queuedVisualRefreshForce;this.__queuedVisualRefreshForce=!1;let s=(g=(l=this.__queuedVisualRefreshSig)!=null?l:(c=this._getVisualRefreshSignature_)==null?void 0:c.call(this))!=null?g:"";if(this.__queuedVisualRefreshSig="",!(!a&&s&&s===this.__lastVisualRefreshSig)){try{(h=this._applyDashboardThemeStyling_)==null||h.call(this)}catch{}this.__lastVisualRefreshSig=s}})))}_refreshAllPerCardStyles_(){var e;try{Array.from(((e=this.cardContainer)==null?void 0:e.children)||[]).forEach(r=>{var a,s,c;!(r instanceof HTMLElement)||!((a=r.classList)!=null&&a.contains("card-wrapper"))||(c=this._applyPerCardStyle_)==null||c.call(this,r,(s=this._extractPerCardStyle_)==null?void 0:s.call(this,r),{persist:!1})})}catch{}}_applyDashboardThemeStyling_(){var e,t,r,a,s;try{let c=this;(Array.isArray(this.__dashboardThemeAppliedVars)?this.__dashboardThemeAppliedVars:[]).forEach(u=>{try{c.style.removeProperty(u)}catch{}}),this.__dashboardThemeAppliedVars=[];let g=this.dashboardThemeEnabled?String(this.dashboardTheme||"").trim():"";if(g){let u=this._getDashboardThemeDefinition_(g);if(u&&typeof u=="object"){for(let[p,m]of Object.entries(u))if(String(p||"").startsWith("--")&&!(m==null||typeof m=="object"))try{c.style.setProperty(p,String(m)),this.__dashboardThemeAppliedVars.push(p)}catch{}}}let h=this._isDashboardThemeOverrideAllDesignActive_();c.style.setProperty("--ddc-bg",h?"var(--lovelace-background, var(--primary-background-color, transparent))":(e=this.containerBackground)!=null?e:"transparent"),c.style.setProperty("--ddc-card-bg",h?"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color, rgba(255,255,255,.06))))":(t=this.cardBackground)!=null?t:"var(--ha-card-background, var(--card-background-color))"),h?c.style.setProperty("--ddc-card-shadow","var(--ha-card-box-shadow, 0 2px 12px rgba(0,0,0,.18))"):this.cardShadowEnabled?c.style.setProperty("--ddc-card-shadow","0 8px 24px rgba(0,0,0,.35)"):c.style.removeProperty("--ddc-card-shadow"),(r=this._refreshAllPerCardStyles_)==null||r.call(this),(a=this._syncPageBackgroundToView_)==null||a.call(this),this.__lastVisualRefreshSig=((s=this._getVisualRefreshSignature_)==null?void 0:s.call(this))||""}catch(c){console.warn("[drag-and-drop-card] Failed to apply dashboard theme styling",c)}}_getPageBackgroundTargets_(){var a,s,c,l,g,h;let e=[],t=new Set,r=u=>{!u||t.has(u)||(t.add(u),e.push(u))};try{let u=(a=this._huiRoot)==null?void 0:a.call(this);r(u),r((c=(s=u==null?void 0:u.shadowRoot)==null?void 0:s.querySelector)==null?void 0:c.call(s,"#view")),r((g=(l=u==null?void 0:u.shadowRoot)==null?void 0:l.querySelector)==null?void 0:g.call(l,"ha-app-layout"))}catch{}try{["ha-panel-lovelace","hui-root","#view","hui-view","hui-panel-view","hui-masonry-view","hui-sections-view","ha-app-layout","partial-panel-resolver"].forEach(u=>{var p;(((p=this._deepQueryAll)==null?void 0:p.call(this,u))||[]).forEach(r)})}catch{}try{let u=this;for(;u;){u instanceof HTMLElement&&r(u);let p=(h=u.getRootNode)==null?void 0:h.call(u),m=p==null?void 0:p.host;if(!m||m===u)break;u=m}}catch{}return e.filter(u=>{let p=String((u==null?void 0:u.tagName)||"").toLowerCase();return(u==null?void 0:u.id)==="view"||p==="ha-panel-lovelace"||p==="hui-root"||p==="hui-view"||p==="hui-panel-view"||p==="hui-masonry-view"||p==="hui-sections-view"||p==="ha-app-layout"||p==="partial-panel-resolver"})}_rememberPageBackgroundTarget_(e){e&&(this.__pageBackgroundPrev||(this.__pageBackgroundPrev=new WeakMap),this.__pageBackgroundTouched||(this.__pageBackgroundTouched=new Set),this.__pageBackgroundPrev.has(e)||this.__pageBackgroundPrev.set(e,{background:e.style.getPropertyValue("background")||"",backgroundColor:e.style.getPropertyValue("background-color")||"",backgroundImage:e.style.getPropertyValue("background-image")||"",backgroundSize:e.style.getPropertyValue("background-size")||"",backgroundRepeat:e.style.getPropertyValue("background-repeat")||"",backgroundPosition:e.style.getPropertyValue("background-position")||"",backgroundAttachment:e.style.getPropertyValue("background-attachment")||"",minHeight:e.style.getPropertyValue("min-height")||"",lovelaceBg:e.style.getPropertyValue("--lovelace-background")||""}),this.__pageBackgroundTouched.add(e))}_clearPageBackground_(){var e;try{clearTimeout(this.__pageBackgroundRetryT),this.__pageBackgroundRetryT=null,(e=this._clearPageDynamicBackground_)==null||e.call(this),Array.from(this.__pageBackgroundTouched||[]).forEach(r=>{var s,c;if(!r)return;let a=(c=(s=this.__pageBackgroundPrev)==null?void 0:s.get)==null?void 0:c.call(s,r);a&&(a.background?r.style.setProperty("background",a.background):r.style.removeProperty("background"),a.backgroundColor?r.style.setProperty("background-color",a.backgroundColor):r.style.removeProperty("background-color"),a.backgroundImage?r.style.setProperty("background-image",a.backgroundImage):r.style.removeProperty("background-image"),a.backgroundSize?r.style.setProperty("background-size",a.backgroundSize):r.style.removeProperty("background-size"),a.backgroundRepeat?r.style.setProperty("background-repeat",a.backgroundRepeat):r.style.removeProperty("background-repeat"),a.backgroundPosition?r.style.setProperty("background-position",a.backgroundPosition):r.style.removeProperty("background-position"),a.backgroundAttachment?r.style.setProperty("background-attachment",a.backgroundAttachment):r.style.removeProperty("background-attachment"),a.minHeight?r.style.setProperty("min-height",a.minHeight):r.style.removeProperty("min-height"),a.lovelaceBg?r.style.setProperty("--lovelace-background",a.lovelaceBg):r.style.removeProperty("--lovelace-background"))}),this.__pageBackgroundTouched=new Set}catch{}}_syncPageBackgroundToView_(e=0){var t,r,a,s,c,l,g;try{clearTimeout(this.__pageBackgroundRetryT),this.__pageBackgroundRetryT=null;let h=!!this.applyBackgroundToPage,u=((t=this._config)==null?void 0:t.background_mode)||((a=(r=this._config)==null?void 0:r.background_image)!=null&&a.src?"image":"none"),p=h&&(u==="particles"||u==="youtube"),m=h?(s=this._getPageBackgroundVisual_)==null?void 0:s.call(this):null;if(!h){(c=this._clearPageBackground_)==null||c.call(this);return}if(!m){p||(l=this._clearPageBackground_)==null||l.call(this);return}let x=((g=this._getPageBackgroundTargets_)==null?void 0:g.call(this))||[];if(!x.length){this.isConnected&&e<8&&(this.__pageBackgroundRetryT=setTimeout(()=>{var _;return(_=this._syncPageBackgroundToView_)==null?void 0:_.call(this,e+1)},180));return}x.forEach(_=>{var O;(O=this._rememberPageBackgroundTarget_)==null||O.call(this,_),m.kind==="image"?(_.style.removeProperty("background"),m.backgroundColor?_.style.setProperty("background-color",m.backgroundColor,"important"):_.style.removeProperty("background-color"),_.style.setProperty("background-image",m.backgroundImage,"important"),_.style.setProperty("background-repeat",m.backgroundRepeat,"important"),_.style.setProperty("background-size",m.backgroundSize,"important"),_.style.setProperty("background-position",m.backgroundPosition,"important"),_.style.setProperty("background-attachment",m.backgroundAttachment,"important")):(_.style.setProperty("background",m.background,"important"),_.style.removeProperty("background-image"),_.style.removeProperty("background-size"),_.style.removeProperty("background-repeat"),_.style.removeProperty("background-position"),_.style.removeProperty("background-attachment"),/gradient\(|url\(/i.test(m.background)?_.style.removeProperty("background-color"):_.style.setProperty("background-color",m.background,"important")),_.style.setProperty("--lovelace-background",m.lovelaceBackground||"");let P=String(_.tagName||"").toLowerCase();(_.id==="view"||P==="hui-view"||P==="hui-panel-view"||P==="hui-masonry-view"||P==="hui-sections-view")&&_.style.setProperty("min-height","100%")})}catch(h){console.warn("[drag-and-drop-card] _syncPageBackgroundToView failed:",h)}}_normalizeMediaUrl_(e=""){var r;let t=String(e||"").trim();if(!t)return"";if(/^(https?:)?\/\//i.test(t)||t.startsWith("data:")||t.startsWith("blob:"))return t;try{if(typeof((r=this.hass)==null?void 0:r.hassUrl)=="function")return this.hass.hassUrl(t)}catch{}return t}_getPageBackgroundVisual_(){var r,a,s,c,l,g;let e=String((r=this.containerBackground)!=null?r:"").trim();if((((a=this._config)==null?void 0:a.background_mode)||((c=(s=this._config)==null?void 0:s.background_image)!=null&&c.src?"image":"none"))==="image"){let h=((l=this._config)==null?void 0:l.background_image)||((g=this._config)==null?void 0:g.bg_image)||null,u=String((h==null?void 0:h.src)||"").trim(),p=this._normalizeMediaUrl_(u);if(p){let m=(h==null?void 0:h.repeat)===!0||(h==null?void 0:h.repeat)==="repeat"?"repeat":String((h==null?void 0:h.repeat)||"no-repeat"),x=String((h==null?void 0:h.size)||"cover"),_=String((h==null?void 0:h.position)||"center center"),P=String((h==null?void 0:h.attachment)||"scroll"),O=/gradient\(/i.test(e)?e:"",C=[`url("${p.replace(/"/g,'\\"')}")`];return O&&C.push(O),{kind:"image",backgroundColor:!O&&e&&!/^transparent$/i.test(e)?e:"",backgroundImage:C.join(", "),backgroundRepeat:O?`${m}, no-repeat`:m,backgroundSize:O?`${x}, auto`:x,backgroundPosition:O?`${_}, center center`:_,backgroundAttachment:O?`${P}, scroll`:P,lovelaceBackground:e||p}}}return!e||/^transparent$/i.test(e)?null:{kind:"fill",background:e,lovelaceBackground:e}}async _browseMediaSource_(e=void 0){if(!this.hass||typeof this.hass.callWS!="function")throw new Error("Home Assistant media browser is not available here.");let t={type:"media_source/browse_media"};e&&(t.media_content_id=e);try{return await this.hass.callWS(t)}catch(r){if(e)throw r;return await this.hass.callWS({type:"media_source/browse_media",media_content_id:"media-source://"})}}async _resolveMediaSourceUrl_(e){if(!e)throw new Error("Missing media item to resolve.");let t=await this.hass.callWS({type:"media_source/resolve_media",media_content_id:e}),r=this._normalizeMediaUrl_((t==null?void 0:t.url)||"");if(!r)throw new Error("Home Assistant did not return a usable media URL.");return r}_isMediaImageItem_(e){let t=String((e==null?void 0:e.media_content_type)||"").toLowerCase(),r=String((e==null?void 0:e.media_class)||"").toLowerCase(),a=`${(e==null?void 0:e.title)||""} ${(e==null?void 0:e.media_content_id)||""}`.toLowerCase();return t.startsWith("image/")||r==="image"||/\.(avif|bmp|gif|jpe?g|png|svg|webp)(?:$|\?)/i.test(a)}async _openMediaLibraryBrowser_(e){var A,E,R,D;if((A=this._ensureSettingsStyles_)==null||A.call(this),!this.hass||typeof this.hass.callWS!="function"){(E=this._toast)==null||E.call(this,"Media library is not available in this view.");return}try{(D=(R=this.__mediaBrowserModal)==null?void 0:R.remove)==null||D.call(R)}catch{}let t=document.createElement("div");t.className="modal",t.id="ddc-media-browser-modal",t.innerHTML=`
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
  `,this.__mediaBrowserModal=t,this.shadowRoot.appendChild(t);let r=t.querySelector("#ddc-media-browser-list"),a=t.querySelector("#ddc-media-browser-path"),s=t.querySelector("#ddc-media-browser-status"),c=t.querySelector("#ddc-media-browser-back"),l=t.querySelector("#ddc-media-browser-refresh"),g=t.querySelector("#ddc-media-browser-close"),h=t.querySelector("#ddc-media-browser-cancel"),u=null,p=[],m=0,x=()=>{try{t.remove()}catch{}this.__mediaBrowserModal===t&&(this.__mediaBrowserModal=null),document.removeEventListener("keydown",_)},_=M=>{M.key==="Escape"&&(M.stopPropagation(),x())},P=(M="",F=!1)=>{s&&(s.textContent=M,s.classList.toggle("is-error",!!F))},O=(M=[])=>[...M].sort((F,N)=>{let $=!!(F!=null&&F.can_expand),Y=!!(N!=null&&N.can_expand);return $!==Y?$?-1:1:String((F==null?void 0:F.title)||"").localeCompare(String((N==null?void 0:N.title)||""),void 0,{sensitivity:"base",numeric:!0})}),C=()=>{let M=["Media",...p.map(F=>F==null?void 0:F.title).filter(Boolean)];u!=null&&u.title&&u.title!==M[M.length-1]&&M.push(u.title),a.textContent=M.join(" / "),c.disabled=p.length===0},S=async M=>{try{P(`Resolving ${(M==null?void 0:M.title)||"image"}...`);let F=await this._resolveMediaSourceUrl_(M==null?void 0:M.media_content_id);e==null||e(F,M),x()}catch(F){P((F==null?void 0:F.message)||"Could not resolve selected media item.",!0)}},v=M=>{u=M||null,C(),r.innerHTML="";let F=O((M==null?void 0:M.children)||[]);if(!F.length){let N=document.createElement("div");N.className="media-browser-empty",N.textContent="No media items found here.",r.appendChild(N),P("");return}F.forEach(N=>{let $=!!(N!=null&&N.can_expand),Y=this._isMediaImageItem_(N),X=document.createElement("div");X.className="media-browser-item";let le=document.createElement("button");le.type="button",le.className="media-browser-primary";let re=document.createElement("div");re.className="media-browser-preview";let ee=this._normalizeMediaUrl_((N==null?void 0:N.thumbnail)||"");ee?(re.style.backgroundImage=`url("${ee.replace(/"/g,'\\"')}")`,re.classList.add("has-thumb")):re.innerHTML=`<ha-icon icon="${$?"mdi:folder-outline":Y?"mdi:image-outline":"mdi:file-outline"}"></ha-icon>`;let ue=document.createElement("div");ue.className="media-browser-copy";let se=document.createElement("div");se.className="media-browser-title",se.textContent=(N==null?void 0:N.title)||(N==null?void 0:N.media_content_id)||"Untitled";let ge=document.createElement("div");ge.className="media-browser-meta";let ce=[$?"Folder":"File",(N==null?void 0:N.media_class)||"",(N==null?void 0:N.media_content_type)||""].filter(Boolean);ge.textContent=ce.join(" \xB7 "),ue.append(se,ge);let H=document.createElement("ha-icon");if(H.setAttribute("icon",$?"mdi:chevron-right":Y?"mdi:check-circle-outline":"mdi:minus-circle-outline"),le.append(re,ue,H),le.addEventListener("click",async()=>{if($){p.push(u),await b(N==null?void 0:N.media_content_id,(N==null?void 0:N.title)||"Folder");return}if(Y){await S(N);return}P("Only image files can be used as background images.",!0)}),X.appendChild(le),Y&&!$){let V=document.createElement("button");V.type="button",V.className="mini-action primary",V.innerHTML='<ha-icon icon="mdi:image-check-outline"></ha-icon><span>Use</span>',V.addEventListener("click",async J=>{J.stopPropagation(),await S(N)}),X.appendChild(V)}else if($){let V=document.createElement("button");V.type="button",V.className="mini-action",V.innerHTML='<ha-icon icon="mdi:folder-open-outline"></ha-icon><span>Open</span>',V.addEventListener("click",async J=>{J.stopPropagation(),p.push(u),await b(N==null?void 0:N.media_content_id,(N==null?void 0:N.title)||"Folder")}),X.appendChild(V)}r.appendChild(X)}),P("")},b=async(M=void 0)=>{let F=++m;r.innerHTML='<div class="media-browser-empty">Loading media\u2026</div>',P("");try{let N=await this._browseMediaSource_(M);if(F!==m)return;v(N)}catch(N){if(F!==m)return;r.innerHTML='<div class="media-browser-empty">Could not load media items.</div>',P((N==null?void 0:N.message)||"Could not load media items from Home Assistant.",!0)}};c==null||c.addEventListener("click",()=>{if(!p.length)return;let M=p.pop();v(M)}),l==null||l.addEventListener("click",()=>b(u==null?void 0:u.media_content_id)),g==null||g.addEventListener("click",x),h==null||h.addEventListener("click",x),t.addEventListener("click",M=>{M.target===t&&x()}),document.addEventListener("keydown",_),await b()}_ensureBgHost_(){let e=this.cardContainer;if(!e)return null;let t=e.querySelector("#ddcBgHost");return t||(t=document.createElement("div"),t.className="ddc-bg-host",t.id="ddcBgHost",t.setAttribute("aria-hidden","true"),e.prepend(t)),t}_ensurePageBgHost_(){let e=this.shadowRoot;if(!e)return null;let t=e.querySelector("#ddcPageBgHost");return t||(t=document.createElement("div"),t.className="ddc-page-bg-host",t.id="ddcPageBgHost",t.setAttribute("aria-hidden","true"),e.insertBefore(t,e.firstChild||null)),t.style.display="block",t}_clearPageDynamicBackground_(){var e,t;try{let r=(t=(e=this.shadowRoot)==null?void 0:e.querySelector)==null?void 0:t.call(e,"#ddcPageBgHost");if(!r)return;r.innerHTML="",r.style.display="none"}catch{}}async _loadScriptOnce_(e){if(!e)throw new Error("script src required");if(this.__scriptCache||(this.__scriptCache=new Map),this.__scriptCache.has(e))return this.__scriptCache.get(e);let t=new Promise((r,a)=>{let s=document.createElement("script");s.src=e,s.async=!0,s.onload=()=>r(!0),s.onerror=()=>a(new Error("failed to load "+e)),document.head.appendChild(s)});return this.__scriptCache.set(e,t),t}_getRenderRoot_(){return this.renderRoot||this.shadowRoot||this}_withScopedDocument_(e){let t=this._getRenderRoot_();if(!t||t===document||!t.querySelector)return e();let r=document,a=r.getElementById.bind(r),s=r.querySelector?r.querySelector.bind(r):null;r.getElementById=c=>{try{let l=window.CSS&&CSS.escape?CSS.escape(String(c)):String(c);return t.querySelector("#"+l)||a(c)}catch{return a(c)}},s&&(r.querySelector=c=>{try{return t.querySelector(c)||s(c)}catch{return s(c)}});try{return e()}finally{r.getElementById=a,s&&(r.querySelector=s)}}async _ensureParticles_(){if(window.particlesJS)return!0;if(!this.__particlesLoadPromise){let e=t=>new Promise((r,a)=>{let s=document.createElement("script");s.src=t,s.async=!0,s.onload=()=>r(!0),s.onerror=()=>a(new Error("Failed to load "+t)),document.head.appendChild(s)});this.__particlesLoadPromise=e("/local/particles.min.js").catch(()=>e("https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js")).then(()=>!!window.particlesJS).catch(()=>!1)}return this.__particlesLoadPromise}_attachParticlesBackground_(e={},t=null){var h,u;let r=t||((h=this._ensureBgHost_)==null?void 0:h.call(this));if(!r)return;try{(u=this._destroyParticles_)==null||u.call(this)}catch{}r.innerHTML="";let a=document.createElement("div");a.id="ddcParticles",a.className="particles-js",a.style.position="absolute",a.style.inset="0",r.appendChild(a);let s={particles:{number:{value:30,density:{enable:!0,value_area:1200}},color:{value:"#ffffff"},shape:{type:"circle"},opacity:{value:.35},size:{value:2.5,random:!0},line_linked:{enable:!1,distance:150,color:"#ffffff",opacity:.3,width:1},move:{enable:!0,speed:.7,out_mode:"out"}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1},onclick:{enable:!1},resize:!0},modes:{repulse:{distance:100},push:{particles_nb:3}}},retina_detect:!1},c=!!e.pointer_events,l=e.config||JSON.parse(JSON.stringify(s));c?(l.interactivity.events.onhover={enable:!0,mode:"repulse"},l.interactivity.events.onclick={enable:!0,mode:"push"},r.style.pointerEvents="auto"):r.style.pointerEvents="none",(async()=>{var x;if(!await((x=this._ensureParticles_)==null?void 0:x.call(this))||!window.particlesJS)return;await(typeof requestAnimationFrame=="function"?new Promise(_=>requestAnimationFrame(()=>_())):Promise.resolve()),await(typeof requestAnimationFrame=="function"?new Promise(_=>requestAnimationFrame(()=>_())):Promise.resolve());let m=l;if(e.config_url)try{m=await(await fetch(e.config_url,{cache:"no-store"})).json()}catch(_){console.warn("[drag-and-drop-card] Failed to fetch particles config; falling back to defaults",_),m=l}this._withScopedDocument_(()=>{if(!Array.isArray(window.pJSDom))try{window.pJSDom=[]}catch{}window.particlesJS("ddcParticles",m)}),Array.isArray(window.pJSDom)&&window.pJSDom.length&&(this.__particlesInst=window.pJSDom[window.pJSDom.length-1])})(),this.__particlesHost=r}_destroyParticles_(){try{Array.isArray(window.pJSDom)||(window.pJSDom=[]),window.pJSDom.length&&(window.pJSDom.forEach(e=>{var t,r,a,s,c,l,g,h;try{(s=(a=(r=(t=e.pJS)==null?void 0:t.fn)==null?void 0:r.vendors)==null?void 0:a.destroy)==null||s.call(a)}catch{}try{(h=(g=(l=(c=e.pJS)==null?void 0:c.fn)==null?void 0:l.vendors)==null?void 0:g.destroypJS)==null||h.call(g)}catch{}}),window.pJSDom.length=0)}catch{}this.__particlesHost&&(this.__particlesHost.innerHTML="",this.__particlesHost.id==="ddcPageBgHost"&&(this.__particlesHost.style.display="none")),this.__particlesHost=null,this.__particlesInst=null}_parseYouTubeId_(e){if(!e)return null;let t=String(e).trim(),r=t.match(/(?:youtube\.com\/.*[?&]v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([A-Za-z0-9_-]{11})/)||t.match(/^([A-Za-z0-9_-]{11})$/);return r?r[1]:null}async _ensureYouTube_(){var e;return(e=window.YT)!=null&&e.Player?!0:(this.__ytReadyPromise||(this.__ytReadyPromise=new Promise(t=>{var s;let r=()=>t(!0);if((s=window.YT)!=null&&s.Player)return r();window.onYouTubeIframeAPIReady=r;let a=document.createElement("script");a.src="https://www.youtube.com/iframe_api",a.async=!0,a.onerror=()=>t(!1),document.head.appendChild(a)})),this.__ytReadyPromise)}_attachYouTubeIframeDirect_(e,t,{start:r,end:a,mute:s=!0,loop:c=!0}={}){var u;let l=new URLSearchParams({autoplay:"1",mute:s?"1":"0",controls:"0",playsinline:"1",rel:"0",modestbranding:"1",iv_load_policy:"3",loop:c?"1":"0"});c&&l.set("playlist",t),Number.isFinite(r)&&l.set("start",String(r)),Number.isFinite(a)&&l.set("end",String(a));let g=`https://www.youtube.com/embed/${t}?${l.toString()}`,h=document.createElement("iframe");h.src=g,h.setAttribute("frameborder","0"),h.setAttribute("allow","autoplay; encrypted-media; picture-in-picture; fullscreen"),h.setAttribute("allowfullscreen","true"),h.style.position="absolute",h.style.inset="0",h.style.width="100%",h.style.height="100%",e.appendChild(h),this.__ytWrap=e,(u=this._layoutYtBackground_)==null||u.call(this)}_attachYouTubeBackground_(e={},t=null){var P;this.__ytSize=e.size||"cover",this.__ytPosition=e.position||"center",this.__ytOpacity=e.opacity!=null?Math.max(0,Math.min(1,Number(e.opacity))):1,this.__ytAttachment=e.attachment||"scroll";let r=String(this.__ytPosition).toLowerCase(),a=.5,s=.5;r.includes("left")?a=0:r.includes("right")&&(a=1),r.includes("top")?s=0:r.includes("bottom")&&(s=1),(r==="center"||r==="centre"||r==="middle")&&(a=.5,s=.5),this.__ytAx=a,this.__ytAy=s;let c=t||this._ensureBgHost_();if(!c)return;let l=this._parseYouTubeId_(e.video_id||e.url);if(!l){console.warn("[drag-and-drop-card] No YouTube video id");return}this.__ytBackgroundSignature=((P=this._getYouTubeBackgroundSignature_)==null?void 0:P.call(this,e,{host:c}))||"";let g=document.createElement("div");g.className="yt-bg",this.__ytAttachment==="fixed"?(g.style.position="fixed",g.style.left="0",g.style.top="0",g.style.width="100%",g.style.height="100%"):(g.style.position="absolute",g.style.inset="0"),g.style.opacity=String(this.__ytOpacity),g.style.filter="none",g.style.pointerEvents="none",c.appendChild(g);let h=document.createElement("div");h.id="ddcYtFrame",h.style.position="absolute",h.style.left="0",h.style.top="0",h.style.width="100%",h.style.height="100%",g.appendChild(h);let u=Number.isFinite(e.start)?Number(e.start):void 0,p=Number.isFinite(e.end)?Number(e.end):void 0,m=e.mute!==!1,x=e.loop!==!1;(async()=>{if(!await this._ensureYouTube_()||!(window.YT&&window.YT.Player)){if(this._attachYouTubeIframeDirect_(g,l,{start:u,end:p,mute:m,loop:x}),!this.__ytResizeObs){this.__ytResizeObs=new ResizeObserver(()=>{var C;return(C=this._layoutYtBackground_)==null?void 0:C.call(this)});try{this.__ytResizeObs.observe(this.cardContainer)}catch{}window.addEventListener("resize",this.__ytOnWinResize=()=>{var C;return(C=this._layoutYtBackground_)==null?void 0:C.call(this)})}return}if(this.__ytPlayer=new window.YT.Player(h,{width:"100%",height:"100%",videoId:l,playerVars:{autoplay:1,controls:0,disablekb:1,fs:0,iv_load_policy:3,modestbranding:1,rel:0,playsinline:1,loop:x?1:0,playlist:x?l:void 0,start:u,end:p},events:{onReady:C=>{var S;try{m&&C.target.mute(),C.target.playVideo()}catch{}(S=this._layoutYtBackground_)==null||S.call(this)},onStateChange:C=>{if(C.data===window.YT.PlayerState.ENDED&&x)try{let S=Number.isFinite(u)?u:0,v=window.performance&&performance.now?performance.now():Date.now();(!this.__ytLastLoopAt||v-this.__ytLastLoopAt>1500)&&(this.__ytLastLoopAt=v,C.target.seekTo(S,!0),C.target.playVideo())}catch{}}}}),!this.__ytResizeObs){this.__ytResizeObs=new ResizeObserver(()=>{var C;return(C=this._layoutYtBackground_)==null?void 0:C.call(this)});try{this.__ytResizeObs.observe(this.cardContainer)}catch{}window.addEventListener("resize",this.__ytOnWinResize=()=>{var C;return(C=this._layoutYtBackground_)==null?void 0:C.call(this)})}})(),this.__ytWrap=g}_layoutYtBackground_(){var e,t,r,a,s,c,l,g,h,u;try{if(!this.__ytWrap)return;if(((t=(e=this.__ytWrap)==null?void 0:e.parentElement)==null?void 0:t.id)==="ddcPageBgHost"){let X=Math.max(window.innerWidth||0,1),le=Math.max(window.innerHeight||0,1),re=this.__ytSize||"cover",ee=16/9,ue=X/le,se=X,ge=le;re==="contain"?ue>ee?(ge=le,se=ge*ee):(se=X,ge=se/ee):re==="100% 100%"||re==="fill"||re==="stretch"||(ue>ee?(se=X,ge=se/ee):(ge=le,se=ge*ee));let ce=this.__ytAx!=null?this.__ytAx:.5,H=this.__ytAy!=null?this.__ytAy:.5,V=(X-se)*ce,J=(le-ge)*H,ne=this.__ytWrap.querySelector("iframe")||this.__ytWrap;ne.style.width=`${se}px`,ne.style.height=`${ge}px`,ne.style.left=`${V}px`,ne.style.top=`${J}px`;return}let m=this.__scaleOuter||this.cardContainer,x=0,_=0;try{x=parseFloat((a=(r=this.cardContainer)==null?void 0:r.style)==null?void 0:a.width)||((s=this.cardContainer)==null?void 0:s.scrollWidth)||((c=this.cardContainer)==null?void 0:c.offsetWidth)||0,_=parseFloat((g=(l=this.cardContainer)==null?void 0:l.style)==null?void 0:g.height)||((h=this.cardContainer)==null?void 0:h.scrollHeight)||((u=this.cardContainer)==null?void 0:u.offsetHeight)||0}catch{}let P,O;try{if(String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"){let le=m.getBoundingClientRect();if(P=le.width,x>0){let re=Math.min(P/x,1);O=_*re}else O=le.height}else P=x||m.getBoundingClientRect().width,O=_||m.getBoundingClientRect().height}catch{let X=m.getBoundingClientRect();P=X.width,O=X.height}let C=this.__ytAttachment==="fixed",S=C&&window.innerWidth||P,v=C&&window.innerHeight||O;if(!P||!O)return;let b=this.__ytSize||"cover",A=16/9,E=C?S/v:P/O,R,D,M=0,F=0;b==="100% 100%"||b==="fill"||b==="stretch"?(R=C?S:P,D=C?v:O,M=0,F=0):b==="contain"?E>A?(D=C?v:O,R=(C?v:O)*A,F=0,M=(P-R)/2):(R=C?S:P,D=(C?S:P)/A,M=0,F=(O-D)/2):E>A?(R=C?S:P,D=(C?S:P)/A,M=0,F=(O-D)/2):(D=C?v:O,R=(C?v:O)*A,F=0,M=(P-R)/2),this.__ytWrap.style.overflow="hidden";let N=this.__ytAx!=null?this.__ytAx:.5,$=this.__ytAy!=null?this.__ytAy:.5;M=((C?S:P)-R)*N,F=((C?v:O)-D)*$;let Y=this.__ytWrap.querySelector("iframe")||this.__ytWrap;Y.style.width=`${R}px`,Y.style.height=`${D}px`,Y.style.left=`${M}px`,Y.style.top=`${F}px`}catch{}}_destroyYouTube_(){var t,r,a,s;let e=null;try{e=((t=this.__ytWrap)==null?void 0:t.parentNode)||null}catch{}try{(a=(r=this.__ytPlayer)==null?void 0:r.destroy)==null||a.call(r)}catch{}if(this.__ytPlayer=null,this.__ytResizeObs){try{this.__ytResizeObs.disconnect()}catch{}this.__ytResizeObs=null}this.__ytOnWinResize&&(window.removeEventListener("resize",this.__ytOnWinResize),this.__ytOnWinResize=null),(s=this.__ytWrap)!=null&&s.parentNode&&this.__ytWrap.parentNode.removeChild(this.__ytWrap);try{(e==null?void 0:e.id)==="ddcPageBgHost"&&(e.style.display="none")}catch{}this.__ytWrap=null,this.__ytBackgroundSignature=""}_evaluateVisibility_(e){try{let t=this.hass||this._hass;if(!Array.isArray(e)||e.length===0)return!0;let r=a=>{var c,l,g,h,u;if(!a||typeof a!="object")return!0;let s=a.condition||a.type||"state";if(s==="and"||s==="or"){let p=Array.isArray(a.conditions)?a.conditions:[];return p.length===0?!0:s==="and"?p.every(m=>r(m)):p.some(m=>r(m))}if(s==="state"){let p=a.entity;if(!p)return!0;let m=(c=t==null?void 0:t.states)==null?void 0:c[p];if(!m)return!1;let x=String((l=m.state)!=null?l:"");return a.state!==void 0?(Array.isArray(a.state)?a.state:[a.state]).some(P=>String(P)===x):a.state_not!==void 0?!(Array.isArray(a.state_not)?a.state_not:[a.state_not]).some(P=>String(P)===x):!0}if(s==="numeric_state"){let p=a.entity;if(!p)return!0;let m=(g=t==null?void 0:t.states)==null?void 0:g[p];if(!m)return!1;let x=parseFloat(m.state);return!(isNaN(x)||a.above!==void 0&&!(x>Number(a.above))||a.below!==void 0&&!(x<Number(a.below)))}if(s==="screen"){let p=a.media_query||a.query;if(!p||typeof p!="string")return!0;try{return window.matchMedia(p).matches}catch{return!0}}if(s==="user"){let p=Array.isArray(a.users)?a.users:a.user?[a.user]:[];if(!p.length)return!0;let m=((h=t==null?void 0:t.user)==null?void 0:h.id)||((u=t==null?void 0:t.user)==null?void 0:u.id)||null;return m?p.includes(m):!0}return!0};return e.every(a=>r(a))}catch(t){return console.warn("[ddc:visibility] evaluate error",t),!0}}_applyVisibility_(){var e;try{let t=((e=this.cardContainer)==null?void 0:e.children)||[],r=this._normalizeTabId(this.activeTab);for(let a of t){if(!a||!a.firstElementChild||this._normalizeTabId(a.dataset.tabId)!==r)continue;let l=(this._extractCardConfig(a.firstElementChild)||{}).visibility,g=this.editMode?!0:this._evaluateVisibility_(l);a.style.display=g?"":"none"}}catch(t){console.warn("[ddc:visibility] apply error",t)}}async _onKeyDown_(e){var c,l,g,h,u,p,m,x,_,P;if(!this.editMode||this._isTypingTarget_(e.target))return;let t=Number(this.gridSize||10),r=e.altKey?1:e.shiftKey?t*5:t,a=0,s=0;switch(e.key){case"ArrowLeft":a=-r;break;case"ArrowRight":a=r;break;case"ArrowUp":s=-r;break;case"ArrowDown":s=r;break}if(a||s){e.preventDefault(),this._moveSelectionBy_(a,s,{liveSnap:!e.altKey});return}if(e.key==="Delete"||e.key==="Backspace"){let O=this._selection&&this._selection.size?Array.from(this._selection):[];if(!O.length)return;e.preventDefault(),O.forEach(C=>C.remove()),(c=this._clearSelection)==null||c.call(this),(l=this._resizeContainer)==null||l.call(this),(g=this._queueSave)==null||g.call(this,"delete-key"),(h=this._ensurePlaceholderIfEmpty)==null||h.call(this);return}if((e.ctrlKey||e.metaKey)&&(e.key==="d"||e.key==="D")){e.preventDefault(),await this._duplicateSelection_();return}if((e.ctrlKey||e.metaKey)&&e.key==="]"){e.preventDefault(),this._selection&&((p=(u=this._selection).forEach)==null||p.call(u,O=>{var C;return(C=this._adjustZ)==null?void 0:C.call(this,O,1)})),(m=this._queueSave)==null||m.call(this,"z-up");return}if((e.ctrlKey||e.metaKey)&&e.key==="["){e.preventDefault(),this._selection&&((_=(x=this._selection).forEach)==null||_.call(x,O=>{var C;return(C=this._adjustZ)==null?void 0:C.call(this,O,-1)})),(P=this._queueSave)==null||P.call(this,"z-down");return}}async _duplicateSelection_(){var t,r,a,s,c,l,g,h,u,p,m,x;if(!this._selection||!this._selection.size)return;let e=Array.from(this._selection);for(let _ of e)try{let P=((t=this._extractCardConfig)==null?void 0:t.call(this,_.firstElementChild))||{},O=await((r=this._createCard)==null?void 0:r.call(this,P)),C=(a=this._makeWrapper)==null?void 0:a.call(this,O);if(!O||!C)continue;C.style.width=_.style.width,C.style.height=_.style.height;let S=Number(this.gridSize||10),v=(parseFloat(_.getAttribute("data-x"))||0)+S,b=(parseFloat(_.getAttribute("data-y"))||0)+S;(s=this._setCardPosition)==null||s.call(this,C,v,b);let A=(((c=this._highestZ)==null?void 0:c.call(this))||0)+1;C.style.zIndex=String(Math.max(A,6));try{let E=(l=_.dataset)==null?void 0:l.tabId;E&&(C.dataset.tabId=E)}catch{}(g=this.cardContainer)==null||g.appendChild(C);try{(h=this._addTabSelectorToChip)==null||h.call(this,C,C.dataset.tabId)}catch{}try{(u=this._rebuildOnce)==null||u.call(this,C.firstElementChild)}catch{}try{(p=this._initCardInteract)==null||p.call(this,C)}catch{}}catch{}try{(m=this._resizeContainer)==null||m.call(this)}catch{}try{(x=this._queueSave)==null||x.call(this,"duplicate")}catch{}}_moveSelectionBy_(e,t,{liveSnap:r=!0}={}){var h,u,p,m,x;if(!this._selection||!this._selection.size)return;let a=Array.from(this._selection),s=Number(this.gridSize||10),c=(h=this._isContainerFixed)==null?void 0:h.call(this),l=((u=this._getContainerSize)==null?void 0:u.call(this))||{w:1/0,h:1/0},g=a.map(_=>{let P=parseFloat(_.getAttribute("data-x-raw"))||parseFloat(_.getAttribute("data-x"))||0,O=parseFloat(_.getAttribute("data-y-raw"))||parseFloat(_.getAttribute("data-y"))||0,C=parseFloat(_.style.width)||_.getBoundingClientRect().width,S=parseFloat(_.style.height)||_.getBoundingClientRect().height,v=P+e,b=O+t;c&&(v=Math.max(0,Math.min(v,Math.max(0,l.w-C))),b=Math.max(0,Math.min(b,Math.max(0,l.h-S))));let A=r?Math.round(v/s)*s:v,E=r?Math.round(b/s)*s:b;return{el:_,rawX:v,rawY:b,snapX:A,snapY:E,w:C,h:S}});if(this.disableOverlap&&typeof this._pushCardsOutOfTheWay=="function")try{this._pushCardsOutOfTheWay(g,e,t,r,s)}catch{}for(let _ of g){_.el.setAttribute("data-x-raw",String(_.rawX)),_.el.setAttribute("data-y-raw",String(_.rawY));try{(p=this._setCardPosition)==null||p.call(this,_.el,_.snapX,_.snapY)}catch{}}try{(m=this._resizeContainer)==null||m.call(this)}catch{}try{(x=this._queueSave)==null||x.call(this,"nudge")}catch{}}_syncTabsWidth_(){var e,t,r,a,s,c,l,g,h,u,p,m,x,_,P,O,C;try{if((e=this._syncTabsPlacement_)==null||e.call(this),(t=this._syncViewportPreviewUI_)==null||t.call(this),(r=this._syncLeftRailViewportPosition_)==null||r.call(this),String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"){(a=this._syncLeftRailViewportPosition_)==null||a.call(this);return}let v=this.tabsBar;if(!v)return;if((s=this._isExplicitViewportPreview_)!=null&&s.call(this)){v.style.width="",v.style.maxWidth="",v.style.marginInline="auto",(c=this._refreshTabsAlignment_)==null||c.call(this);return}try{let E=window.innerWidth||((l=document.documentElement)==null?void 0:l.clientWidth)||0;if(E&&E<=768){v.style.width="",v.style.maxWidth="",(g=this._refreshTabsAlignment_)==null||g.call(this),(h=this._syncLeftRailViewportPosition_)==null||h.call(this);return}}catch{}if(this.tabsPosition==="left"||this.tabsPosition==="top"||this.tabsPosition==="bottom"){v.style.width="",v.style.maxWidth="",v.style.marginInline=(u=this._getViewportPreviewPreset_)!=null&&u.call(this)?"auto":"",(p=this._refreshTabsAlignment_)==null||p.call(this),(m=this._syncLeftRailViewportPosition_)==null||m.call(this);return}let b=this.cardContainer||this.__scaleOuter;if(!b)return;let A=0;try{let E=b.getBoundingClientRect();A=E&&E.width?E.width:0}catch{}if(A<=0&&this.__scaleOuter&&this.__scaleOuter!==b)try{let E=this.__scaleOuter.getBoundingClientRect();A=E&&E.width?E.width:0}catch{}if(A>0){let R=((x=this._getViewportPreviewPreset_)==null?void 0:x.call(this))?Math.min(A,((_=this._getEffectivePreviewWidth_)==null?void 0:_.call(this,A))||A):A;v.style.width=`${R}px`,v.style.maxWidth=`${R}px`}v.style.marginInline=(P=this._getViewportPreviewPreset_)!=null&&P.call(this)?"auto":"",(O=this._refreshTabsAlignment_)==null||O.call(this),(C=this._syncLeftRailViewportPosition_)==null||C.call(this)}catch{}}_syncTabsPlacement_(){var e,t,r,a,s;try{let c=this.tabsBar,l=this.rootEl,g=this.__scaleOuter||this.cardContainer;if(!c||!l||!g||g.parentNode!==l){(t=(e=l==null?void 0:l.classList)==null?void 0:e.toggle)==null||t.call(e,"ddc-tabs-left-layout",this.tabsPosition==="left"),(a=(r=l==null?void 0:l.classList)==null?void 0:r.toggle)==null||a.call(r,"ddc-tabs-bottom-layout",this.tabsPosition==="bottom");return}if((s=this._isExplicitViewportPreview_)!=null&&s.call(this)){g.nextSibling!==c&&l.insertBefore(c,g.nextSibling),l.classList.remove("ddc-tabs-left-layout"),l.classList.remove("ddc-tabs-bottom-layout");return}this.tabsPosition==="bottom"?g.nextSibling!==c&&l.insertBefore(c,g.nextSibling):c.nextSibling!==g&&l.insertBefore(c,g),l.classList.toggle("ddc-tabs-left-layout",this.tabsPosition==="left"),l.classList.toggle("ddc-tabs-bottom-layout",this.tabsPosition==="bottom")}catch{}}_syncLeftRailViewportPosition_(){var e,t,r,a,s,c,l;try{if(this.tabsPosition!=="left"){(t=(e=this.style)==null?void 0:e.removeProperty)==null||t.call(e,"--ddc-left-rail-left");return}let g=window.innerWidth||((r=document.documentElement)==null?void 0:r.clientWidth)||0;if(g&&g<=980){(s=(a=this.style)==null?void 0:a.removeProperty)==null||s.call(a,"--ddc-left-rail-left");return}let h=this.rootEl,u=this.tabsBar;if(!h||!u)return;let p=(c=h.getBoundingClientRect)==null?void 0:c.call(h);if(!p||!Number.isFinite(p.left))return;let m=getComputedStyle(this),x=((l=u.getBoundingClientRect)==null?void 0:l.call(u).width)||parseFloat(m.getPropertyValue("--ddc-left-rail-width"))||92,_=parseFloat(m.getPropertyValue("--ddc-left-gutter"))||0,P=g||p.left+p.width,O=_+x/2+12,C=P-x/2-12,S=p.left+x/2,v=Math.max(O,Math.min(C,S));this.style.setProperty("--ddc-left-rail-left",`${Math.round(v)}px`)}catch{}}_refreshTabsAlignment_(){try{let e=this.tabsBar;if(!e)return;if(e.style.justifyContent="",this.tabsPosition==="left"){e.style.justifyContent="flex-start";return}e.scrollWidth<=e.clientWidth?e.style.justifyContent="center":e.style.justifyContent="flex-start"}catch{}}_isTypingTarget_(e){var a,s,c,l;if(!e||e===window||e===document)return!1;let t=(a=e.closest)==null?void 0:a.call(e,'input, textarea, [contenteditable="true"], ha-textfield, mwc-textfield');if(!t)return!1;let r=((c=(s=t.tagName)==null?void 0:s.toLowerCase)==null?void 0:c.call(s))||"";return r==="input"||r==="textarea"||((l=t.hasAttribute)==null?void 0:l.call(t,"contenteditable"))}_scheduleReflowAndScale(){this.__reflowRAF||(this.__reflowRAF=requestAnimationFrame(()=>{var e,t,r;this.__reflowRAF=null;try{(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="dynamic"&&((e=this._resizeContainer)==null||e.call(this))}catch{}try{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(t=this._applyAutoFillNoScale)==null||t.call(this):(r=this._applyAutoScale)==null||r.call(this)}catch{}}))}__ddcBindPointerListeners(){if(!this.__ddcPtrBound){this.__ddcPtrBound=!0,this.__onDDCPointerDown=e=>{var t,r;try{if(e.button!==void 0&&e.button!==0)return;let a=((t=e.composedPath)==null?void 0:t.call(e))||[],s=null;for(let c of a)if(c&&c.classList&&c.classList.contains("card-wrapper")){s=c;break}if(!s)return;this.__ddcDragging=!0,this.__scaleOuter&&(this.__prevOverflow=this.__scaleOuter.style.overflow,this.__scaleOuter.style.overflow="visible"),(r=this._scheduleReflowAndScale)==null||r.call(this)}catch{}},this.__onDDCPointerMove=e=>{var t;try{if(!this.__ddcDragging)return;(t=this._scheduleReflowAndScale)==null||t.call(this)}catch{}},this.__onDDCPointerUp=e=>{var t,r;try{if(!this.__ddcDragging)return;this.__ddcDragging=!1,this.__scaleOuter&&(this.__scaleOuter.style.overflow=this.__prevOverflow||"");try{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(t=this._applyAutoFillNoScale)==null||t.call(this):(r=this._applyAutoScale)==null||r.call(this)}catch{}}catch{}};try{this.addEventListener("pointerdown",this.__onDDCPointerDown,{passive:!0})}catch{}try{this.addEventListener("pointermove",this.__onDDCPointerMove,{passive:!0})}catch{}try{window.addEventListener("pointerup",this.__onDDCPointerUp,{passive:!0})}catch{}try{window.addEventListener("pointercancel",this.__onDDCPointerUp,{passive:!0})}catch{}}}_renderEditToolbar_(){this.shadowRoot.querySelectorAll(".ddc-toolbar").forEach(p=>p.remove()),this._ensureToolbarStyles_();let e=document.createElement("div");e.className="ddc-toolbar";let t=document.createElement("div");t.className="ddc-t-group",t.append(this._mkBtn_("add_card","mdi:plus-box","Add card (A)","primary"),this._mkBtn_("snap_toggle","mdi:magnet","Toggle snap (G)"),this._mkBtn_("align_grid","mdi:grid","Align to grid"));let r=document.createElement("div");r.className="ddc-t-group";let a=document.createElement("div");a.className="ddc-t-status";let s=document.createElement("div");s.className="ddc-t-dot"+(this.__dirty?" dirty":"");let c=document.createElement("span");c.textContent=this.__dirty?"Unsaved changes":`Saved${this.__lastSavedAt?" \xB7 "+this.__lastSavedAt:""}`,a.append(s,c),r.appendChild(a);let l=document.createElement("div");l.className="ddc-t-group",l.append(this._mkBtn_("reload","mdi:refresh","Reload (R)","ghost"),this._mkBtn_("open_hads","mdi:alpha-h-box-outline","Open HACS/HADS","ghost"),this._mkBtn_("apply","mdi:content-save","Apply / Save (S)","primary"),this._mkBtn_("exit_edit","mdi:logout-variant","Exit edit (Esc)","danger"));let g=document.createElement("div");g.className="ddc-t-group ddc-t-row",g.append(t);let h=document.createElement("div");h.className="ddc-t-group ddc-t-row",h.append(r);let u=document.createElement("div");u.className="ddc-t-group ddc-t-row",u.append(l),e.append(g,document.createElement("div")).lastChild.className="ddc-t-sep",e.append(h,document.createElement("div")).lastChild.className="ddc-t-sep",e.append(u),e.addEventListener("click",p=>{let m=p.target.closest("[data-action]");m&&this._onToolbarAction_(m.dataset.action,{button:m,bar:e,dot:s,txt:c})}),this.shadowRoot.appendChild(e);try{this.__toolbarRO&&this.__toolbarRO.disconnect(),this.__toolbarRO=new ResizeObserver(p=>{for(let m of p)e.classList.toggle("compact",m.contentRect.width<980)}),this.__toolbarRO.observe(e)}catch{}this.__toolbarKeyHandler=p=>{if(!(!this.editMode&&!this.isEditing)){if(p.key==="a"||p.key==="A")return this._onToolbarAction_("add_card");if(p.key==="s"||p.key==="S")return this._onToolbarAction_("apply");if(p.key==="r"||p.key==="R")return this._onToolbarAction_("reload");if(p.key==="g"||p.key==="G")return this._onToolbarAction_("snap_toggle");if(p.key==="Escape")return this._onToolbarAction_("exit_edit")}},window.addEventListener("keydown",this.__toolbarKeyHandler)}async _onToolbarAction_(e,t={}){var r,a,s,c,l,g,h,u,p,m,x;switch(e){case"add_card":(r=this._openAddCardDialog_)!=null&&r.call(this)||(a=this._addNewCard_)!=null&&a.call(this)||((s=this._openEntityPicker_)==null||s.call(this));break;case"snap_toggle":{this.dragLiveSnap=!this.dragLiveSnap,(c=this._initInteract)==null||c.call(this),(l=this._toast_)==null||l.call(this,`Live snap ${this.dragLiveSnap?"ON":"OFF"}`);break}case"align_grid":(g=this._alignAllToGrid_)==null||g.call(this,this.gridSize);break;case"reload":(h=this._reloadLayout_)==null||h.call(this);break;case"open_hads":(u=this._openHACS_)!=null&&u.call(this)||window.open("/hacs","_blank")||window.open("/hacsfiles","_blank");break;case"apply":{let _=()=>{this._setDirty_(!1),t!=null&&t.txt&&(t.txt.textContent=`Saved \xB7 ${this.__lastSavedAt}`),t!=null&&t.dot&&t.dot.classList.remove("dirty","error")},P=()=>{t!=null&&t.dot&&t.dot.classList.add("error")};try{this._saveLayoutNow_?await this._saveLayoutNow_():this._persistThisCardConfigToStorage_?await this._persistThisCardConfigToStorage_():(p=this._queueSave)==null||p.call(this,"toolbar-apply",!0),this.__lastSavedAt=new Date().toLocaleTimeString(),_()}catch(O){console.warn(O),P()}break}case"exit_edit":if((m=this._toggleEditMode)!=null&&m.call(this,!1)||(x=this._exitEditMode_)!=null&&x.call(this)||(this.isEditing=!1),this.__toolbarKeyHandler&&(window.removeEventListener("keydown",this.__toolbarKeyHandler),this.__toolbarKeyHandler=null),this.__toolbarRO){try{this.__toolbarRO.disconnect()}catch{}this.__toolbarRO=null}this.shadowRoot.querySelectorAll(".ddc-toolbar").forEach(_=>_.remove());break}}_ensureScaleWrapper(){let e=this.cardContainer;if(!e||this.__scaleOuter&&this.__scaleOuter.contains(e))return;let t=document.createElement("div");t.className="ddc-scale-outer",Object.assign(t.style,{position:"relative",width:"100%",overflow:"hidden"}),e.parentNode&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),Object.assign(e.style,{position:"absolute",top:"0",left:"0",transformOrigin:"top left"}),this.__scaleOuter=t}_hasCardModDeep(e){try{if(!e||typeof e!="object")return!1;if(e.card_mod||e.type==="custom:mod-card")return!0;if(e.card)return this._hasCardModDeep(e.card);if(Array.isArray(e.cards)){for(let t of e.cards)if(this._hasCardModDeep(t))return!0}return!1}catch{return!1}}_rebuildOnce(e){try{if(!e||(this.__rebuiltCards||(this.__rebuiltCards=new WeakSet),this.__rebuiltCards.has(e)))return;this.__rebuiltCards.add(e),e.dispatchEvent(new Event("ll-rebuild",{bubbles:!0,composed:!0}))}catch{}}_deepQueryAll(e,t=document){let r=[],a=new WeakSet,s=new WeakSet,c=l=>{var u;if(!l||a.has(l))return;if(a.add(l),l.querySelectorAll)try{l.querySelectorAll(e).forEach(p=>{!p||s.has(p)||(s.add(p),r.push(p))})}catch{}let g=null;try{g=document.createTreeWalker(l,NodeFilter.SHOW_ELEMENT,null)}catch{}let h=l;for(;h;){let p=h.shadowRoot;p&&c(p);try{h=((u=g==null?void 0:g.nextNode)==null?void 0:u.call(g))||null}catch{break}}};return c(t),r}_syncEditorsStorageKey(){try{let e=this.storageKey||"";this._deepQueryAll("#storage_key").forEach(r=>{try{r&&r.tagName==="INPUT"&&r.value!==e&&(r.value=e,r.dispatchEvent(new Event("input",{bubbles:!0})),r.dispatchEvent(new Event("change",{bubbles:!0})))}catch{}})}catch{}}static _genKey(){var t,r;return`layout_${((r=(t=globalThis.crypto)==null?void 0:t.randomUUID)==null?void 0:r.call(t))||`${Date.now().toString(36)}_${Math.random().toString(36).slice(2,8)}`}`}static get type(){return"drag-and-drop-card"}static get title(){return"Drag & Drop Card"}static get description(){return"Flexible grid layout card with drag\u2011and\u2011drop editing."}static get icon(){return"mdi:cursor-move"}static get group(){return"custom"}static getStubConfig(){return{type:"custom:drag-and-drop-card",storage_key:this._genKey(),grid:20,drag_live_snap:!0,auto_save:!0,auto_save_debounce:800,container_size_mode:"auto",container_background:"linear-gradient(135deg, #1e3a8a, #0ea5e9)",card_background:"linear-gradient(135deg, #111827, #1f2937)",debug:!1,disable_overlap:!1,auto_resize_cards:!0,background_mode:"none",animate_cards:!0,optimize_for_mobile:!1,mobile_dynamic_behavior:"native",responsive_viewports:{desktop:{width:1430,height:896},tablet:{landscape:{width:1295,height:923},portrait:{width:923,height:1295}},mobile:{landscape:{width:1080,height:500},portrait:{width:500,height:1080}}},container_preset_orientation:"auto",edit_mode_pin:"",container_fixed_width:null,container_fixed_height:null,container_preset:"fullhd",card_shadow:!0,hide_HA_Header:!1,hide_HA_Sidebar:!1,screen_saver_enabled:!0,screen_saver_delay:15e5,tabs:[{id:"home",label:"Home",icon:"mdi:home",label_mode:"both"}],default_tab:"home"}}static getConfigElement(){let e=document.createElement("div");e.style.display="grid",e.style.gridTemplateColumns="1fr",e.style.rowGap="12px";let t=document.createElement("ha-textfield");t.id="storage_key",t.label="Storage key",t.placeholder="Auto-generated if left blank",e.appendChild(t);let r=document.createElement("div");return r.style.fontSize="0.85rem",r.style.opacity="0.7",r.textContent="Unique key for saving layout positions. Leave blank to auto\u2011generate.",e.appendChild(r),e.setConfig=(p={})=>{var m;e._config={type:p.type||"custom:drag-and-drop-card",...p},e._config.storage_key||(e._config.storage_key=`layout_${((m=crypto==null?void 0:crypto.randomUUID)==null?void 0:m.call(crypto))||Date.now().toString(36)}`),t.value=e._config.storage_key||""},e.getConfig=()=>{let p={...e._config||{}};return p.type="custom:drag-and-drop-card",p.storage_key=t.value||"",p},t.addEventListener("input",()=>{e.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e.getConfig()}}))}),e;let a=()=>{let p=h();l.disabled=!p},s=async()=>{var m,x;let p=el.getConfig();el.dispatchEvent(new CustomEvent("config-changed",{detail:{config:p}})),a();try{if(this.storageKey){let _=this._exportableOptions?this._exportableOptions():p;await this._saveOptionsToBackend(this.storageKey,_)}}catch{}try{await this._persistThisCardConfigToStorage_()}catch{try{let P=this._exportableOptions?this._exportableOptions():p;await((m=this._persistOptionsToYaml)==null?void 0:m.call(this,P,{patchAllInCurrentViewIfNoKey:!0}))}catch{}}try{(x=this._applyBackgroundFromConfig)==null||x.call(this)}catch{}},c=()=>{var m,x,_,P;let p=(P=(_=(m=el.querySelector("#sizeMode"))==null?void 0:m.value)!=null?_:(x=el.querySelector("#ddc-setting-sizeMode"))==null?void 0:x.value)!=null?P:"dynamic";el.querySelector("#sizeCustom").style.display=p==="fixed_custom"?"inline-flex":"none",el.querySelector("#sizePresetWrap").style.display=p==="preset"?"inline-flex":"none"},l=el.querySelector("#applyBtn"),g=el.querySelector("#revertBtn");["#sizeMode","#sizePreset","#sizeOrientation"].forEach(p=>{let m=el.querySelector(p);if(m){try{m.fixedMenuPosition=!0}catch{}m.addEventListener("closed",x=>x.stopPropagation())}}),el.setConfig=(p={})=>{var _,P,O,C,S,v,b,A;el._config={type:p.type||"custom:drag-and-drop-card",...p},el._config.storage_key||(el._config.storage_key=`layout_${((_=crypto==null?void 0:crypto.randomUUID)==null?void 0:_.call(crypto))||Date.now().toString(36)}`,el.__autokeyPending=!0),el.querySelector("#storage_key").value=el._config.storage_key||"",el.querySelector("#grid").value=(P=el._config.grid)!=null?P:10,el.querySelector("#liveSnap").checked=!!el._config.drag_live_snap,el.querySelector("#autoSave").checked=el._config.auto_save!==!1,el.querySelector("#autoSaveDebounce").value=(O=el._config.auto_save_debounce)!=null?O:800,el.querySelector("#containerBg").value=(C=el._config.container_background)!=null?C:"transparent",el.querySelector("#cardBg").value=(S=el._config.card_background)!=null?S:"var(--ha-card-background, var(--card-background-color))",el.querySelector("#debug").checked=!!el._config.debug,el.querySelector("#noOverlap").checked=!!el._config.disable_overlap,el.querySelector("#autoResize").checked=!!el._config.auto_resize_cards,el.querySelector("#animateCards").checked=!!el._config.animate_cards;let m=el.querySelector("#sizeMode")||el.querySelector("#ddc-setting-sizeMode");m&&(m.value=el._config.container_size_mode||"dynamic"),el.querySelector("#sizeW").value=(v=el._config.container_fixed_width)!=null?v:"",el.querySelector("#sizeH").value=(b=el._config.container_fixed_height)!=null?b:"",el.querySelector("#sizeOrientation").value=el._config.container_preset_orientation||"auto";let x=el.querySelector("#sizePreset");if(!x.__filled){let E=(((A=this._sizePresets)==null?void 0:A.call(this))||[]).reduce((R,D)=>{var M;return(R[M=D.group||"other"]||(R[M]=[])).push(D),R},{});x.innerHTML="";for(let[R,D]of Object.entries(E)){let M=document.createElement("optgroup");M.label=R.replace(/(^.|-.?)/g,N=>N.toUpperCase()),D.forEach(N=>{let $=document.createElement("mwc-list-item");$.value=N.key,$.textContent=`${N.label} (${N.w}\xD7${N.h})`,M.appendChild($)});let F=document.createElement("mwc-list-item");F.setAttribute("disabled",""),F.textContent=`\u2014 ${M.label} \u2014`,x.appendChild(F),Array.from(M.children).forEach(N=>x.appendChild(N))}x.__filled=!0}el._config.container_preset&&(x.value=el._config.container_preset),c(),a(),el.__autokeyPending&&(el.__autokeyPending=!1,s())},el.getConfig=()=>{var m,x,_,P;let p={...el._config||{}};p.storage_key=el.querySelector("#storage_key").value||"",p.grid=Number(el.querySelector("#grid").value||10),p.drag_live_snap=!!el.querySelector("#liveSnap").checked,p.auto_save=!!el.querySelector("#autoSave").checked,p.auto_save_debounce=Number(el.querySelector("#autoSaveDebounce").value||800),p.container_background=el.querySelector("#containerBg").value||"transparent",p.card_background=el.querySelector("#cardBg").value||"var(--ha-card-background, var(--card-background-color))",p.debug=!!el.querySelector("#debug").checked,p.disable_overlap=!!el.querySelector("#noOverlap").checked,p.auto_resize_cards=!!el.querySelector("#autoResize").checked;try{let O=el.querySelector("#ddc-bg-mode"),C=el.querySelector("#ddc-setting-bgImg"),S=el.querySelector("#ddc-bg-repeat"),v=el.querySelector("#ddc-bg-size"),b=el.querySelector("#ddc-bg-position"),A=el.querySelector("#ddc-bg-attachment"),E=el.querySelector("#ddc-bg-opacity"),R=el.querySelector("#ddc-particles-url"),D=el.querySelector("#ddc-particles-pointer"),M=el.querySelector("#ddc-youtube-url"),F=el.querySelector("#ddc-youtube-start"),N=el.querySelector("#ddc-youtube-end"),$=el.querySelector("#ddc-youtube-mute"),Y=el.querySelector("#ddc-youtube-loop"),X=el.querySelector("#ddc-youtube-size"),le=el.querySelector("#ddc-youtube-position"),re=el.querySelector("#ddc-youtube-attachment"),ee=el.querySelector("#ddc-youtube-opacity"),ue=(O==null?void 0:O.value)||"none";p.background_mode=ue;let se=H=>Math.max(0,Math.min(1,H)),ge=H=>{let V=parseFloat((H==null?void 0:H.value)||"100");return Number.isFinite(V)?se(V/100):1},ce=H=>Object.fromEntries(Object.entries(H).filter(([,V])=>V!=null&&V!==""));if(ue==="image"){let H=((C==null?void 0:C.value)||"").trim();p.background_image=ce({src:H||void 0,repeat:(S==null?void 0:S.value)||"no-repeat",size:(v==null?void 0:v.value)||"cover",position:(b==null?void 0:b.value)||"center center",attachment:(A==null?void 0:A.value)||"scroll",opacity:ge(E)})}if(ue==="particles"&&(p.background_particles=ce({config_url:((R==null?void 0:R.value)||"").trim()||void 0,pointer_events:!!(D!=null&&D.checked)})),ue==="youtube"){let H=V=>{let J=parseInt(((V==null?void 0:V.value)||"").trim(),10);return Number.isFinite(J)?J:void 0};p.background_youtube=ce({url:((M==null?void 0:M.value)||"").trim()||void 0,start:H(F),end:H(N),mute:!!($!=null&&$.checked),loop:!!(Y!=null&&Y.checked),size:(X==null?void 0:X.value)||"cover",position:(le==null?void 0:le.value)||"center center",attachment:(re==null?void 0:re.value)||"scroll",opacity:ge(ee)})}ue!=="image"&&delete p.background_image,ue!=="particles"&&delete p.background_particles,ue!=="youtube"&&delete p.background_youtube}catch{}return p.animate_cards=!!el.querySelector("#animateCards").checked,p.container_size_mode=(P=(_=(m=el.querySelector("#sizeMode"))==null?void 0:m.value)!=null?_:(x=el.querySelector("#ddc-setting-sizeMode"))==null?void 0:x.value)!=null?P:"dynamic",p.container_fixed_width=Number(el.querySelector("#sizeW").value||0)||void 0,p.container_fixed_height=Number(el.querySelector("#sizeH").value||0)||void 0,p.container_preset=el.querySelector("#sizePreset").value||void 0,p.container_preset_orientation=el.querySelector("#sizeOrientation").value||"auto",p};let h=()=>{let p=el.getConfig(),m=el._config||{};try{return JSON.stringify(p)!==JSON.stringify(m)}catch{return!0}},u=(p,m="input")=>{var x;return(x=el.querySelector(p))==null?void 0:x.addEventListener(m,()=>{p==="#sizeMode"&&c(),a()})};return u("#storage_key"),u("#grid"),u("#liveSnap","change"),u("#autoSave","change"),u("#autoSaveDebounce"),u("#containerBg"),u("#cardBg"),u("#debug","change"),u("#noOverlap","change"),u("#autoResize","change"),u("#animateCards","change"),u("#sizeMode","change"),u("#ddc-setting-sizeMode","change"),u("#sizeW"),u("#sizeH"),u("#sizePreset","selected"),u("#sizeOrientation","selected"),l==null||l.addEventListener("click",()=>{s()}),g==null||g.addEventListener("click",()=>el.setConfig(el._config)),el}static _sizePresets(){return[{key:"iphone-14-pro",label:"iPhone 14 Pro",w:393,h:852,group:"phone"},{key:"iphone-14-pro-max",label:"iPhone 14 Pro Max",w:430,h:932,group:"phone"},{key:"iphone-se-2",label:"iPhone SE (2/3rd gen)",w:375,h:667,group:"phone"},{key:"pixel-7",label:"Pixel 7",w:412,h:915,group:"phone"},{key:"galaxy-s8",label:"Galaxy S8",w:360,h:740,group:"phone"},{key:"galaxy-s20-ultra",label:"Galaxy S20 Ultra",w:412,h:915,group:"phone"},{key:"ipad-9-7",label:'iPad 9.7"',w:768,h:1024,group:"tablet"},{key:"ipad-11-pro",label:'iPad Pro 11"',w:834,h:1194,group:"tablet"},{key:"ipad-12-9-pro",label:'iPad Pro 12.9"',w:1024,h:1366,group:"tablet"},{key:"surface-go-3",label:"Surface Go 3",w:800,h:1280,group:"tablet"},{key:"hd",label:"HD",w:1366,h:768,group:"desktop"},{key:"wxga-plus",label:"WXGA+",w:1440,h:900,group:"desktop"},{key:"fhd",label:"Full HD",w:1920,h:1080,group:"desktop"},{key:"qhd",label:"2K / QHD",w:2560,h:1440,group:"desktop"},{key:"uhd-4k",label:"4K UHD",w:3840,h:2160,group:"desktop"}]}_cloneJson_(e){try{return JSON.parse(JSON.stringify(e))}catch{return e!=null?e:null}}_genLayoutCardId_(){var t,r;return`ddc_card_${((r=(t=globalThis.crypto)==null?void 0:t.randomUUID)==null?void 0:r.call(t))||`${Date.now().toString(36)}_${Math.random().toString(36).slice(2,10)}`}`}_responsiveProfileKeys_(){return["desktop","tablet","mobile"]}_responsiveLayoutVariantKeys_(){return["desktop_landscape","tablet_landscape","tablet_portrait","mobile_landscape","mobile_portrait"]}_defaultResponsivePreviewOrientations_(){return{desktop:"landscape",tablet:"landscape",mobile:"portrait"}}_normalizeResponsiveOrientation_(e="desktop",t=null){return e==="desktop"||String(t||"").toLowerCase()==="landscape"?"landscape":"portrait"}_getResponsiveLayoutKey_(e="desktop",t=null){let r=this._responsiveProfileKeys_().includes(e)?e:"desktop";return`${r}_${this._normalizeResponsiveOrientation_(r,t)}`}_splitResponsiveLayoutKey_(e="desktop_landscape"){let[t="desktop",r="landscape"]=String(e||"desktop_landscape").split("_"),a=this._responsiveProfileKeys_().includes(t)?t:"desktop",s=this._normalizeResponsiveOrientation_(a,r);return{profile:a,orientation:s,key:this._getResponsiveLayoutKey_(a,s)}}_getPrimaryResponsiveLayoutKey_(){return"desktop_landscape"}_ensureResponsivePreviewOrientations_(){let t={...this._defaultResponsivePreviewOrientations_(),...this._responsivePreviewOrientations||{}};return t.desktop="landscape",t.tablet=this._normalizeResponsiveOrientation_("tablet",t.tablet),t.mobile=this._normalizeResponsiveOrientation_("mobile",t.mobile),this._responsivePreviewOrientations=t,t}_getStoredResponsivePreviewOrientation_(e="desktop"){let t=this._ensureResponsivePreviewOrientations_();return this._normalizeResponsiveOrientation_(e,t==null?void 0:t[e])}_setStoredResponsivePreviewOrientation_(e="desktop",t=null){let r=this._ensureResponsivePreviewOrientations_(),a=this._normalizeResponsiveOrientation_(e,t);return this._responsivePreviewOrientations={...r,[e]:a},a}_defaultResponsiveViewportProfiles_(){return{desktop_landscape:{width:1430,height:896},tablet_landscape:{width:1295,height:923},tablet_portrait:{width:923,height:1295},mobile_landscape:{width:1080,height:500},mobile_portrait:{width:500,height:1080}}}_getDefaultResponsiveViewportProfile_(e="desktop",t=null){let r=this._defaultResponsiveViewportProfiles_();return r[this._getResponsiveLayoutKey_(e,t)]||r[this._getPrimaryResponsiveLayoutKey_()]}_normalizeResponsiveViewportProfiles_(e=null){let t=e&&typeof e=="object"?e:{},r={},a=(s,c)=>{let l=this._getResponsiveLayoutKey_(s,c),g=t==null?void 0:t[l];if(g&&typeof g=="object")return g;let h=t==null?void 0:t[s];if(h&&typeof h=="object"){let u=h==null?void 0:h[c];if(u&&typeof u=="object")return u;if(Number.isFinite(Number(h.width))||Number.isFinite(Number(h.height)))return h}return null};return this._responsiveLayoutVariantKeys_().forEach(s=>{var p,m;let{profile:c,orientation:l}=this._splitResponsiveLayoutKey_(s),g=this._getDefaultResponsiveViewportProfile_(c,l),h=a(c,l)||g,u=this._getLockedResponsiveViewportProfile_(c,{width:Number((p=h==null?void 0:h.width)!=null?p:g.width)||g.width,height:Number((m=h==null?void 0:h.height)!=null?m:g.height)||g.height},"width",l);r[s]={width:u.width,height:u.height}}),r}_legacyResponsiveViewportProfiles_(){return{desktop:{width:1440,height:900},tablet:{width:834,height:1194},mobile:{width:390,height:844}}}_isLegacyResponsiveViewportProfiles_(e=null){try{if(!e||typeof e!="object"||this._responsiveLayoutVariantKeys_().some(r=>Object.prototype.hasOwnProperty.call(e,r)))return!1;let t=this._legacyResponsiveViewportProfiles_();return this._responsiveProfileKeys_().every(r=>{let a=(e==null?void 0:e[r])||{},s=(t==null?void 0:t[r])||{};return Number(a.width)===Number(s.width)&&Number(a.height)===Number(s.height)})}catch{return!1}}_lockResponsiveViewportValue_(e=0){return Math.max(240,Math.min(6e3,Math.round(Number(e||0)||0)))}_getLockedResponsiveViewportProfile_(e="desktop",t=null,r="width",a=null){var x;let s=this._splitResponsiveLayoutKey_(e),c=this._responsiveProfileKeys_().includes(e)?e:s.profile,l=this._normalizeResponsiveOrientation_(c,a!=null?a:s.orientation),g=this._getDefaultResponsiveViewportProfile_(c,l),h=t||g||{},u=this._lockResponsiveViewportValue_(h.width||g.width||0),p=this._lockResponsiveViewportValue_(h.height||g.height||0);u||(u=g.width||390),p||(p=g.height||844),l==="landscape"&&p>u&&([u,p]=[p,u]),l==="portrait"&&u>p&&([u,p]=[p,u]);let m=(x=this._getPreviewDeviceFrameLock_)==null?void 0:x.call(this,c,u,p,{orientation:l});return m!=null&&m.ratio&&(r==="height"?u=this._lockResponsiveViewportValue_(p*m.ratio):p=this._lockResponsiveViewportValue_(u/m.ratio)),l==="landscape"&&p>u&&([u,p]=[p,u]),l==="portrait"&&u>p&&([u,p]=[p,u]),{width:u,height:p,orientation:(m==null?void 0:m.orientation)||l,ratio:(m==null?void 0:m.ratio)||null}}_ensureResponsiveViewportProfileLock_(e="desktop",t="width",r=null){var h,u;if(!this._responsiveProfileKeys_().includes(e))return null;let a=this._normalizeResponsiveOrientation_(e,r!=null?r:(h=this._getRequestedResponsiveOrientation_)==null?void 0:h.call(this,e)),s=this._getResponsiveLayoutKey_(e,a),c=((u=this._normalizeResponsiveViewportProfiles_(this.responsiveViewportProfiles))==null?void 0:u[s])||{},l=this._getLockedResponsiveViewportProfile_(e,c,t,a);if(Number(c.width)!==Number(l.width)||Number(c.height)!==Number(l.height)){let p=this._normalizeResponsiveViewportProfiles_({...this.responsiveViewportProfiles||{},[s]:{width:l.width,height:l.height}});this.responsiveViewportProfiles=p,this._config={...this._config||{},responsive_viewports:this._cloneJson_(this._serializeResponsiveViewportProfiles_(p))}}return l}_getResponsiveViewportProfile_(e="desktop",t=null){var g,h;let r=this._normalizeResponsiveViewportProfiles_(this.responsiveViewportProfiles),a=this._splitResponsiveLayoutKey_(e),s=this._responsiveProfileKeys_().includes(e)?e:a.profile,c=this._normalizeResponsiveOrientation_(s,(h=t!=null?t:a.orientation)!=null?h:(g=this._getRequestedResponsiveOrientation_)==null?void 0:g.call(this,s)),l=this._getResponsiveLayoutKey_(s,c);return this._getLockedResponsiveViewportProfile_(s,r[l]||r[this._getPrimaryResponsiveLayoutKey_()],"width",c)}_serializeResponsiveViewportProfiles_(e=null){let t=this._normalizeResponsiveViewportProfiles_(e||this.responsiveViewportProfiles);return{desktop:{landscape:this._cloneJson_(t.desktop_landscape)},tablet:{landscape:this._cloneJson_(t.tablet_landscape),portrait:this._cloneJson_(t.tablet_portrait)},mobile:{landscape:this._cloneJson_(t.mobile_landscape),portrait:this._cloneJson_(t.mobile_portrait)}}}_normalizeSavedCardEntry_(e={},t=null){var O,C,S,v,b,A,E,R,D,M,F,N,$,Y,X,le,re,ee;let r=this._cloneJson_(e)||{},a=t||{},s=14*Math.max(1,Number(this.gridSize||10)||10),c=10*Math.max(1,Number(this.gridSize||10)||10),l=r.id||a.id||this._genLayoutCardId_(),g=Number((v=(S=(O=r==null?void 0:r.position)==null?void 0:O.x)!=null?S:(C=a==null?void 0:a.position)==null?void 0:C.x)!=null?v:0)||0,h=Number((R=(E=(b=r==null?void 0:r.position)==null?void 0:b.y)!=null?E:(A=a==null?void 0:a.position)==null?void 0:A.y)!=null?R:0)||0,u=Math.max(1,Number((N=(F=(D=r==null?void 0:r.size)==null?void 0:D.width)!=null?F:(M=a==null?void 0:a.size)==null?void 0:M.width)!=null?N:s)||s),p=Math.max(1,Number((le=(X=($=r==null?void 0:r.size)==null?void 0:$.height)!=null?X:(Y=a==null?void 0:a.size)==null?void 0:Y.height)!=null?le:c)||c),m=Number((ee=(re=r==null?void 0:r.z)!=null?re:a==null?void 0:a.z)!=null?ee:6),x=Number.isFinite(m)?Math.max(1,Math.round(m)):6,_=this._normalizeTabId(r.tabId||r.tab_id||a.tabId||a.tab_id||this.defaultTab),P={...r,id:l,position:{x:g,y:h},size:{width:u,height:p},z:x,tabId:_};return!P.card&&a.card&&(P.card=this._cloneJson_(a.card)),!P.card_style&&a.card_style&&(P.card_style=this._cloneJson_(a.card_style)),!P.cardStyle&&a.cardStyle&&(P.cardStyle=this._cloneJson_(a.cardStyle)),!P.overflow&&a.overflow&&(P.overflow=a.overflow),P}_normalizeResponsiveLayouts_(e=[],t=null){let r=this._responsiveLayoutVariantKeys_(),a=Array.isArray(e)?e:[],s=t||{},c={},l=(p,m)=>{let x=this._getResponsiveLayoutKey_(p,m),_=s==null?void 0:s[x];if(Array.isArray(_))return _;if(Array.isArray(_==null?void 0:_.cards))return _.cards;let P=s==null?void 0:s[p],O=P==null?void 0:P[m];return Array.isArray(O)?O:Array.isArray(O==null?void 0:O.cards)?O.cards:Array.isArray(P)?P:Array.isArray(P==null?void 0:P.cards)?P.cards:null},g=(p,m,x=[])=>{let _=this._getResponsiveLayoutKey_(p,m),P=l(p,m),O=Array.isArray(P)&&P.length?P:x.map(C=>c==null?void 0:c[C]).find(C=>Array.isArray(C)&&C.length)||c[this._getPrimaryResponsiveLayoutKey_()]||a;c[_]=(Array.isArray(O)?O:[]).map(C=>{var v,b;let S=((b=(v=c[this._getPrimaryResponsiveLayoutKey_()])==null?void 0:v.find)==null?void 0:b.call(v,A=>A.id===(C==null?void 0:C.id)))||null;return this._normalizeSavedCardEntry_(C,S)})},h=l("desktop","landscape")||a;c.desktop_landscape=h.map(p=>this._normalizeSavedCardEntry_(p)),g("tablet","landscape",["tablet_portrait","desktop_landscape"]),g("tablet","portrait",["tablet_landscape","desktop_landscape"]),g("mobile","landscape",["mobile_portrait","desktop_landscape"]),g("mobile","portrait",["mobile_landscape","desktop_landscape"]);let u=new Set;return r.forEach(p=>{(c[p]||[]).forEach(m=>u.add(m.id))}),r.forEach(p=>{let m=new Map((c[p]||[]).map(x=>[x.id,x]));u.forEach(x=>{if(m.has(x))return;let _=r.map(P=>{var O,C;return(C=(O=c[P])==null?void 0:O.find)==null?void 0:C.call(O,S=>S.id===x)}).find(Boolean);_&&m.set(x,this._normalizeSavedCardEntry_(_,_))}),c[p]=Array.from(m.values())}),c}_serializeResponsiveLayouts_(e=null,t=null){let r=this._normalizeResponsiveLayouts_(t||[],e||this._responsiveLayouts),a=r.desktop_landscape||t||[],s=r.tablet_landscape||a,c=r.tablet_portrait||s,l=r.mobile_landscape||a,g=r.mobile_portrait||l;return{desktop:{cards:this._cloneJson_(a),landscape:{cards:this._cloneJson_(a)}},tablet:{cards:this._cloneJson_(s),landscape:{cards:this._cloneJson_(s)},portrait:{cards:this._cloneJson_(c)}},mobile:{cards:this._cloneJson_(l),landscape:{cards:this._cloneJson_(l)},portrait:{cards:this._cloneJson_(g)}}}}_defaultConnectorConfig_(){return{entity:"",active_states:"on,home,open,playing,charging,active,>0",arrows:"end",flow_direction:"auto",line_style:"solid",thickness:10,animate_mode:"active",animation_speed:1.8,active_color:"var(--primary-color, #ff9800)",inactive_color:"rgba(148, 163, 184, 0.42)",glow:!0,rounded:!0}}_normalizeConnectorPoint_(e={},t=null){var c,l,g,h;let r=e||t||{},a=Number((l=(c=r.x)!=null?c:t==null?void 0:t.x)!=null?l:0)||0,s=Number((h=(g=r.y)!=null?g:t==null?void 0:t.y)!=null?h:0)||0;return{x:a,y:s}}_normalizeConnectorEntry_(e={},t=null){var m;let r=this._cloneJson_(e)||{},a=t||{},s=this._defaultConnectorConfig_(),c=String(r.id||a.id||`connector_${((m=crypto==null?void 0:crypto.randomUUID)==null?void 0:m.call(crypto))||Math.random().toString(36).slice(2)}`),l=this._normalizeTabId(r.tabId||r.tab_id||a.tabId||a.tab_id||this.activeTab||this.defaultTab),g=Array.isArray(r.points)&&r.points.length?r.points:Array.isArray(a.points)?a.points:[],h=g.map((x,_)=>this._normalizeConnectorPoint_(x,g[_])).filter(x=>Number.isFinite(x.x)&&Number.isFinite(x.y)),u=h.length>=2?h:[this._normalizeConnectorPoint_(h[0]||{x:0,y:0}),this._normalizeConnectorPoint_(h[1]||h[0]||{x:this.gridSize*6,y:0},{x:this.gridSize*6,y:0})],p={...s,...a,...r,id:c,tabId:l,points:u};return p.thickness=Math.max(2,Math.min(28,Number(p.thickness)||s.thickness)),p.animation_speed=Math.max(.4,Math.min(8,Number(p.animation_speed)||s.animation_speed)),p.entity=String(p.entity||"").trim(),p.active_states=String(p.active_states||s.active_states).trim(),p.arrows=["none","start","end","both"].includes(String(p.arrows||"").toLowerCase())?String(p.arrows).toLowerCase():s.arrows,p.flow_direction=["auto","forward","reverse"].includes(String(p.flow_direction||"").toLowerCase())?String(p.flow_direction).toLowerCase():s.flow_direction,p.line_style=["solid","dashed","dotted"].includes(String(p.line_style||"").toLowerCase())?String(p.line_style).toLowerCase():s.line_style,p.animate_mode=["never","active","always"].includes(String(p.animate_mode||"").toLowerCase())?String(p.animate_mode).toLowerCase():s.animate_mode,p.glow=p.glow!==!1,p.rounded=p.rounded!==!1,p}_normalizeResponsiveConnectorLayouts_(e=[],t=null){let r=this._responsiveLayoutVariantKeys_(),a=Array.isArray(e)?e:[],s=t||{},c={},l=(u,p)=>{let m=this._getResponsiveLayoutKey_(u,p),x=s==null?void 0:s[m];if(Array.isArray(x))return x;if(Array.isArray(x==null?void 0:x.connectors))return x.connectors;let _=s==null?void 0:s[u],P=_==null?void 0:_[p];return Array.isArray(P)?P:Array.isArray(P==null?void 0:P.connectors)?P.connectors:Array.isArray(_)?_:Array.isArray(_==null?void 0:_.connectors)?_.connectors:null},g=(u,p,m=[])=>{let x=this._getResponsiveLayoutKey_(u,p),_=l(u,p),P=Array.isArray(_)&&_.length?_:m.map(O=>c==null?void 0:c[O]).find(O=>Array.isArray(O)&&O.length)||c[this._getPrimaryResponsiveLayoutKey_()]||a;c[x]=(Array.isArray(P)?P:[]).map(O=>{var S,v;let C=((v=(S=c[this._getPrimaryResponsiveLayoutKey_()])==null?void 0:S.find)==null?void 0:v.call(S,b=>b.id===(O==null?void 0:O.id)))||null;return this._normalizeConnectorEntry_(O,C)})},h=l("desktop","landscape")||a;return c.desktop_landscape=h.map(u=>this._normalizeConnectorEntry_(u)),g("tablet","landscape",["tablet_portrait","desktop_landscape"]),g("tablet","portrait",["tablet_landscape","desktop_landscape"]),g("mobile","landscape",["mobile_portrait","desktop_landscape"]),g("mobile","portrait",["mobile_landscape","desktop_landscape"]),r.forEach(u=>{c[u]=(c[u]||[]).map(p=>this._normalizeConnectorEntry_(p))}),c}_serializeResponsiveConnectorLayouts_(e=null,t=null){let r=this._normalizeResponsiveConnectorLayouts_(t||[],e||this._responsiveConnectors),a=r.desktop_landscape||t||[],s=r.tablet_landscape||a,c=r.tablet_portrait||s,l=r.mobile_landscape||a,g=r.mobile_portrait||l;return{desktop:{connectors:this._cloneJson_(a),landscape:{connectors:this._cloneJson_(a)}},tablet:{connectors:this._cloneJson_(s),landscape:{connectors:this._cloneJson_(s)},portrait:{connectors:this._cloneJson_(c)}},mobile:{connectors:this._cloneJson_(l),landscape:{connectors:this._cloneJson_(l)},portrait:{connectors:this._cloneJson_(g)}}}}_syncConnectorLayoutsToConfig_(){var e,t,r;try{this._config||(this._config={});let a=this._serializeResponsiveConnectorLayouts_(this._responsiveConnectors);this._config.connectors=this._cloneJson_(((t=(e=a==null?void 0:a.desktop)==null?void 0:e.landscape)==null?void 0:t.connectors)||((r=a==null?void 0:a.desktop)==null?void 0:r.connectors)||[]),this._config.responsive_connectors=this._cloneJson_(a)}catch(a){console.warn("[ddc] Failed to sync connector layouts to config",a)}}_getCurrentConnectorLayoutKey_(){var e;return this._activeResponsiveLayoutKey||((e=this._getRequestedResponsiveLayoutKey_)==null?void 0:e.call(this))||this._getPrimaryResponsiveLayoutKey_()}_getCurrentConnectorEntries_(){var t,r;this._responsiveConnectors||(this._responsiveConnectors=this._normalizeResponsiveConnectorLayouts_(((t=this._config)==null?void 0:t.connectors)||[],((r=this._config)==null?void 0:r.responsive_connectors)||null));let e=this._getCurrentConnectorLayoutKey_();return Array.isArray(this._responsiveConnectors[e])||(this._responsiveConnectors[e]=[]),this._responsiveConnectors[e]}_setCurrentConnectorEntries_(e,{reason:t="connector-change",render:r=!0}={}){var s,c,l,g,h;this._responsiveConnectors||(this._responsiveConnectors=this._normalizeResponsiveConnectorLayouts_(((s=this._config)==null?void 0:s.connectors)||[],((c=this._config)==null?void 0:c.responsive_connectors)||null));let a=this._getCurrentConnectorLayoutKey_();return this._responsiveConnectors[a]=(Array.isArray(e)?e:[]).map(u=>this._normalizeConnectorEntry_(u)),(l=this._syncConnectorLayoutsToConfig_)==null||l.call(this),r&&((g=this._renderConnectors_)==null||g.call(this)),t&&((h=this._queueSave)==null||h.call(this,t)),this._responsiveConnectors[a]}_updateCurrentConnectorEntries_(e,{reason:t="connector-change",render:r=!0}={}){let a=this._cloneJson_(this._getCurrentConnectorEntries_())||[],s=typeof e=="function"?e(a):e;return this._setCurrentConnectorEntries_(Array.isArray(s)?s:a,{reason:t,render:r})}_slugifyPackageToken_(e,t="package"){return String(e!=null?e:"").trim().toLowerCase().replace(/\.ya?ml$/i,"").replace(/[^a-z0-9_-]+/g,"_").replace(/^_+|_+$/g,"")||t}_normalizeDashboardPackages_(e=[]){if(!Array.isArray(e))return[];let t=new Set;return e.map((r,a)=>{var x,_,P;if(!r||typeof r!="object")return null;let s=r.id||r.package_id||`package_${a+1}`,c=String(s).trim()||`package_${a+1}`,l=r.name||r.title||r.filename||c,g=String(l).trim()||c,h=this._slugifyPackageToken_(r.filename||g||c,`package_${a+1}`),u=`${h}.yaml`,p=2;for(;t.has(u);)u=`${h}_${p++}.yaml`;t.add(u);let m=String((P=(_=(x=r.yaml)!=null?x:r.content)!=null?_:r.body)!=null?P:"").replace(/\r\n/g,`
`);return{...this._cloneJson_(r),id:c,name:g,filename:u,yaml:m,enabled:r.enabled!==!1}}).filter(Boolean)}_setDashboardPackages_(e=[]){return this._dashboardPackages=this._normalizeDashboardPackages_(e),this._dashboardPackages}_exportDashboardPackages_(){return this._cloneJson_(this._normalizeDashboardPackages_(this._dashboardPackages))}_captureCurrentLayoutEntries_(){return this.cardContainer?Array.from(this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)")).map(e=>{let t=parseFloat(e.getAttribute("data-x"))||0,r=parseFloat(e.getAttribute("data-y"))||0,a=parseFloat(e.style.width)||e.getBoundingClientRect().width,s=parseFloat(e.style.height)||e.getBoundingClientRect().height,c=parseInt(e.style.zIndex||"1",10),l=this._extractCardConfig(e.firstElementChild),g=e.dataset.tabId||this.defaultTab,h=e.style.overflow&&e.style.overflow!==""?e.style.overflow:null,u={id:e.dataset.layoutCardId||this._genLayoutCardId_(),card:l,position:{x:t,y:r},size:{width:a,height:s},z:c,tabId:g},p=this._extractPerCardStyle_(e);return Object.keys(p).length&&(u.card_style=p),h&&(u.overflow=h),u}):[]}_syncResponsiveLayoutMembership_(e=null){var l,g;if(!this._responsiveLayouts)return;let t=this._responsiveLayoutVariantKeys_(),r=t.includes(e)?e:this._activeResponsiveLayoutKey||((l=this._getRequestedResponsiveLayoutKey_)==null?void 0:l.call(this))||this._getPrimaryResponsiveLayoutKey_(),a=Array.isArray((g=this._responsiveLayouts)==null?void 0:g[r])?this._responsiveLayouts[r]:[],s=new Set(a.map(h=>h.id)),c=new Map(a.map(h=>[h.id,h]));t.forEach(h=>{var m;if(h===r)return;let p=(Array.isArray((m=this._responsiveLayouts)==null?void 0:m[h])?this._responsiveLayouts[h]:[]).filter(x=>s.has(x.id)).map(x=>this._normalizeSavedCardEntry_(x,c.get(x.id)));a.forEach(x=>{p.some(_=>_.id===x.id)||p.push(this._normalizeSavedCardEntry_(x,x))}),this._responsiveLayouts[h]=p})}_persistCurrentResponsiveProfileToMemory_({syncMembership:e=!0}={}){var r;if(this._loading||!this.cardContainer||!this._responsiveLayouts&&!this.cardContainer.querySelector(".card-wrapper:not(.ddc-placeholder)"))return;let t=this._activeResponsiveLayoutKey||((r=this._getRequestedResponsiveLayoutKey_)==null?void 0:r.call(this))||this._getPrimaryResponsiveLayoutKey_();t&&(this._responsiveLayouts||(this._responsiveLayouts=this._normalizeResponsiveLayouts_(this._captureCurrentLayoutEntries_(),null)),this._responsiveLayouts[t]=this._captureCurrentLayoutEntries_(),e&&this._syncResponsiveLayoutMembership_(t))}_getRealViewportMetrics_(){var a,s;let e=window.visualViewport,t=Math.max(1,Math.round((e==null?void 0:e.width)||window.innerWidth||((a=document.documentElement)==null?void 0:a.clientWidth)||1)),r=Math.max(1,Math.round((e==null?void 0:e.height)||window.innerHeight||((s=document.documentElement)==null?void 0:s.clientHeight)||1));return{width:t,height:r,shortEdge:Math.min(t,r),longEdge:Math.max(t,r),isPortrait:r>=t}}_getResponsiveProfileLabel_(e="desktop"){return{desktop:"Desktop",tablet:"Tablet",mobile:"Mobile"}[e]||"Desktop"}_getActualResponsiveProfile_(){var c,l,g,h,u;let e=((c=this._getRealViewportMetrics_)==null?void 0:c.call(this))||{width:0,height:0,shortEdge:0,longEdge:0},t=Math.max(1,Number(e.width||0)||0),r=Math.max(1,Number(e.shortEdge||Math.min(e.width||0,e.height||0))||0),a=Math.max(1,Number(e.longEdge||Math.max(e.width||0,e.height||0))||0),s=!1;try{let p=!!((g=(l=window.matchMedia)==null?void 0:l.call(window,"(pointer: coarse)"))!=null&&g.matches),m=!!((u=(h=window.matchMedia)==null?void 0:h.call(window,"(hover: none)"))!=null&&u.matches),x=Number((navigator==null?void 0:navigator.maxTouchPoints)||0)||0;s=(p||x>1)&&m}catch{}return s?r<600?"mobile":r<1024||a<1400?"tablet":"desktop":t<768?"mobile":t<1180?"tablet":"desktop"}_getRequestedResponsiveProfile_(){var t;let e=String(this.viewportPreviewMode||"live").toLowerCase();return this.editMode&&(e==="desktop"||e==="tablet"||e==="mobile")?e:((t=this._getActualResponsiveProfile_)==null?void 0:t.call(this))||"desktop"}_getRequestedResponsiveOrientation_(e=null){var a,s,c,l;let t=this._responsiveProfileKeys_().includes(e)?e:((a=this._getRequestedResponsiveProfile_)==null?void 0:a.call(this))||"desktop";if(t==="desktop")return"landscape";let r=String(this.viewportPreviewMode||"live").toLowerCase();return this.editMode&&r===t?this._getStoredResponsivePreviewOrientation_(t):(l=(c=(s=this._getRealViewportMetrics_)==null?void 0:s.call(this))==null?void 0:c.isPortrait)==null||l?"portrait":"landscape"}_getRequestedResponsiveLayoutKey_(){var r,a;let e=((r=this._getRequestedResponsiveProfile_)==null?void 0:r.call(this))||"desktop",t=((a=this._getRequestedResponsiveOrientation_)==null?void 0:a.call(this,e))||"landscape";return this._getResponsiveLayoutKey_(e,t)}_ensureConnectorsLayer_(){if(!this.cardContainer)return null;let e=this.cardContainer.querySelector("#ddcConnectorsLayer");return e||(e=document.createElementNS("http://www.w3.org/2000/svg","svg"),e.setAttribute("id","ddcConnectorsLayer"),e.setAttribute("class","ddc-connectors-layer"),e.setAttribute("aria-hidden","true"),this.cardContainer.appendChild(e)),e}_getConnectorCanvasSize_(){var a,s;let e=this.cardContainer;if(!e)return{width:1,height:1};let t=Math.max(1,parseFloat(e.style.width)||e.scrollWidth||e.offsetWidth||((a=e.getBoundingClientRect)==null?void 0:a.call(e).width)||1),r=Math.max(1,parseFloat(e.style.height)||e.scrollHeight||e.offsetHeight||((s=e.getBoundingClientRect)==null?void 0:s.call(e).height)||1);return{width:Math.round(t),height:Math.round(r)}}_eventToConnectorPoint_(e){var c,l,g,h;let t=(c=this._ensureConnectorsLayer_)==null?void 0:c.call(this),r=((l=t==null?void 0:t.getBoundingClientRect)==null?void 0:l.call(t))||((h=(g=this.cardContainer)==null?void 0:g.getBoundingClientRect)==null?void 0:h.call(g));if(!r)return{x:0,y:0};let a=this.__pointerScaleX||1,s=this.__pointerScaleY||1;return{x:(e.clientX-r.left)/a,y:(e.clientY-r.top)/s}}_snapConnectorPoint_(e){let t=Math.max(1,Number(this.gridSize||10)||10);return{x:Math.round((Number(e==null?void 0:e.x)||0)/t)*t,y:Math.round((Number(e==null?void 0:e.y)||0)/t)*t}}_snapConnectorPointToCellOrigin_(e){let t=Math.max(1,Number(this.gridSize||10)||10);return{x:Math.floor((Number(e==null?void 0:e.x)||0)/t)*t,y:Math.floor((Number(e==null?void 0:e.y)||0)/t)*t}}_buildConnectorPathData_(e=[]){return!Array.isArray(e)||e.length<2?"":e.map((t,r)=>`${r===0?"M":"L"} ${Number(t.x)||0} ${Number(t.y)||0}`).join(" ")}_getConnectorResolvedState_(e={}){var p,m,x;let t=String(e.entity||"").trim(),r=t?(m=(p=this.hass)==null?void 0:p.states)==null?void 0:m[t]:null,a=(x=r==null?void 0:r.state)!=null?x:"",s=t?__ddcLineIsActive__(a,e.active_states):!0,c=Number(a),l=String(e.flow_direction||"auto").toLowerCase(),g=l==="reverse"||l==="auto"&&Number.isFinite(c)&&c<0,h=String(e.animate_mode||"active").toLowerCase();return{active:s,reverse:g,animate:h==="always"||h==="active"&&s,stateValue:a}}_pointToSegmentDistance_(e,t,r){let a=r.x-t.x,s=r.y-t.y;if(!a&&!s){let m=e.x-t.x,x=e.y-t.y;return{distanceSq:m*m+x*x,t:0}}let c=((e.x-t.x)*a+(e.y-t.y)*s)/(a*a+s*s),l=Math.max(0,Math.min(1,c)),g=t.x+a*l,h=t.y+s*l,u=e.x-g,p=e.y-h;return{distanceSq:u*u+p*p,t:l}}_insertConnectorPointAtEvent_(e,t){let r=this._snapConnectorPointToCellOrigin_(this._eventToConnectorPoint_(t)),a=!1;this._updateCurrentConnectorEntries_(s=>s.map(c=>{if(c.id!==e)return c;let l=this._normalizeConnectorEntry_(c),g=Array.isArray(l.points)?[...l.points]:[];if(g.length<2)return l;let h=0,u=1/0;for(let p=0;p<g.length-1;p++){let m=this._pointToSegmentDistance_(r,g[p],g[p+1]);m.distanceSq<u&&(u=m.distanceSq,h=p)}return g.splice(h+1,0,r),a=!0,{...l,points:g}}),{reason:a?"connector-junction-add":null,render:!0}),a&&(this._selectedConnectorId=e)}_insertConnectorMidpoint_(e){let t=!1;this._updateCurrentConnectorEntries_(r=>r.map(a=>{if(a.id!==e)return a;let s=this._normalizeConnectorEntry_(a),c=Array.isArray(s.points)?[...s.points]:[];if(c.length<2)return s;let l=0,g=-1;for(let O=0;O<c.length-1;O++){let C=c[O+1].x-c[O].x,S=c[O+1].y-c[O].y,v=C*C+S*S;v>g&&(g=v,l=O)}let h=Math.max(1,Number(this.gridSize||10)||10),u=c[l],p=c[l+1],m=this._snapConnectorPoint_({x:(u.x+p.x)/2,y:(u.y+p.y)/2}),x=p.x-u.x,_=p.y-u.y,P=m;if(Math.abs(x)>=Math.abs(_)){let O=Math.max(h*2,Math.round(Math.abs(x)/6/h)*h||h*2);P=this._snapConnectorPoint_({x:m.x,y:m.y+O*(l%2===0?1:-1)})}else{let O=Math.max(h*2,Math.round(Math.abs(_)/6/h)*h||h*2);P=this._snapConnectorPoint_({x:m.x+O*(l%2===0?1:-1),y:m.y})}return c.some(O=>O.x===P.x&&O.y===P.y)&&(P=this._snapConnectorPoint_({x:m.x+h,y:m.y+h})),c.splice(l+1,0,P),t=!0,{...s,points:c}}),{reason:t?"connector-junction-add":null,render:!0}),t&&(this._selectedConnectorId=e)}_getConnectorById_(e){return(this._getCurrentConnectorEntries_()||[]).find(t=>t.id===e)||null}_getConnectorVisibleRect_(){let e=this.cardContainer,{width:t,height:r}=this._getConnectorCanvasSize_();return e?{left:Math.max(0,Number(e.scrollLeft||0)||0),top:Math.max(0,Number(e.scrollTop||0)||0),width:Math.max(1,Math.min(t,Number(e.clientWidth||t)||t)),height:Math.max(1,Math.min(r,Number(e.clientHeight||r)||r))}:{left:0,top:0,width:t,height:r}}_createConnectorAtViewport_({openSettings:e=!0}={}){var _;if(!this.editMode)return null;let t=this._normalizeTabId(this.activeTab||this.defaultTab),r=Math.max(1,Number(this.gridSize||10)||10),{left:a,top:s,width:c,height:l}=this._getConnectorVisibleRect_(),g=Math.max(r*6,Math.min(r*16,Math.round(c*.26/r)*r||r*8)),h=a+c/2,u=s+l/2,p=this._snapConnectorPoint_({x:h-g/2,y:u}),m=this._snapConnectorPoint_({x:h+g/2,y:u}),x=this._normalizeConnectorEntry_({...this._defaultConnectorConfig_(),id:`connector_${((_=crypto==null?void 0:crypto.randomUUID)==null?void 0:_.call(crypto))||Math.random().toString(36).slice(2)}`,tabId:t,points:[p,m]});return this._connectorDraft=null,this._connectorDrawMode=!1,this._selectedConnectorId=x.id,this._setCurrentConnectorEntries_([...this._getCurrentConnectorEntries_(),x],{reason:"connector-add",render:!0}),e&&requestAnimationFrame(()=>{var P;return(P=this._openConnectorSettings_)==null?void 0:P.call(this,x.id)}),x.id}_isConnectorSettingsOpen_(){var t,r;let e=(r=(t=this.shadowRoot)==null?void 0:t.querySelector)==null?void 0:r.call(t,"#connectorInspector");return!!e&&!e.hidden&&e.classList.contains("is-open")}_setConnectorDrawMode_(e,{finalize:t=!0}={}){var a,s,c,l;let r=!!e;!r&&((s=(a=this._connectorDraft)==null?void 0:a.points)==null?void 0:s.length)>=2&&t?this._finalizeConnectorDraft_({openSettings:!1}):r||this._cancelConnectorDraft_({keepMode:!0}),this._connectorDrawMode=r,r||(this._connectorDraft=null),(c=this._syncConnectorUiState_)==null||c.call(this),(l=this._renderConnectors_)==null||l.call(this)}_toggleConnectorDrawMode_(){this.editMode&&this._createConnectorAtViewport_({openSettings:!0})}_cancelConnectorDraft_({keepMode:e=!1}={}){var t,r;this._connectorDraft=null,e||(this._connectorDrawMode=!1),(t=this._syncConnectorUiState_)==null||t.call(this),(r=this._renderConnectors_)==null||r.call(this)}_finalizeConnectorDraft_({openSettings:e=!0}={}){var a,s;let t=this._connectorDraft;if(!t||!Array.isArray(t.points)||t.points.length<2){this._cancelConnectorDraft_();return}let r=this._normalizeConnectorEntry_({...this._defaultConnectorConfig_(),...t.settings||{},id:`connector_${((a=crypto==null?void 0:crypto.randomUUID)==null?void 0:a.call(crypto))||Math.random().toString(36).slice(2)}`,tabId:this._normalizeTabId(t.tabId||this.activeTab||this.defaultTab),points:t.points});this._selectedConnectorId=r.id,this._connectorDraft=null,this._connectorDrawMode=!1,this._setCurrentConnectorEntries_([...this._getCurrentConnectorEntries_(),r],{reason:"connector-add",render:!0}),(s=this._syncConnectorUiState_)==null||s.call(this),e&&requestAnimationFrame(()=>{var c;return(c=this._openConnectorSettings_)==null?void 0:c.call(this,r.id)})}_syncConnectorUiState_(){var a;let e=this.lineModeBtn;if((a=this.cardContainer)==null||a.classList.toggle("ddc-connector-draw-mode",!!this._connectorDrawMode),!e)return;let t=!!this._connectorDrawMode;e.classList.toggle("is-active",t),e.setAttribute("aria-pressed",String(t)),e.setAttribute("data-tooltip",t?"Finish connector":"Add connector line"),e.setAttribute("title",t?"Finish connector":"Add connector line");let r=e.querySelector(".label");r&&(r.textContent=t?"Finish Line":"Add Line")}_openConnectorSettings_(e){var X,le,re,ee,ue,se,ge,ce;let t=this._getCurrentConnectorEntries_().find(H=>H.id===e);if(!t)return;let r=(le=(X=this.shadowRoot)==null?void 0:X.querySelector)==null?void 0:le.call(X,"#connectorInspector");if(!r)return;try{(re=this.__connectorInspectorCleanup)==null||re.call(this)}catch{}this.__connectorInspectorCleanup=null;let a=((ee=this._getConnectorResolvedState_)==null?void 0:ee.call(this,t))||{active:!0,animate:!1},s=String(t.line_style||"solid").toLowerCase(),c=String((a.active?t.active_color:t.inactive_color)||(a.active?"var(--primary-color, #ff9800)":"rgba(148,163,184,.48)")).trim(),l=s==="dotted"?`repeating-linear-gradient(90deg, ${c} 0 8px, transparent 8px 20px)`:s==="dashed"?`repeating-linear-gradient(90deg, ${c} 0 26px, transparent 26px 40px)`:c,g=t.entity?`${a.active?"Currently active":"Currently idle"} \xB7 ${a.animate?"animated":"static"}`:`Manual connector \xB7 ${a.animate?"animated":"static"}`,h=Array.isArray(t.points)?t.points.length:0,u=Object.keys(((ue=this.hass)==null?void 0:ue.states)||{}).sort((H,V)=>H.localeCompare(V)),p=()=>u.map(H=>`<option value="${this._safe(H)}"></option>`).join(""),m=(H="")=>{var me,ye,Ve,dt;let V=String(H||"").trim(),J=V?(ye=(me=this.hass)==null?void 0:me.states)==null?void 0:ye[V]:null;if(!J)return[];let ne=[],U=new Set,xe=Qe=>{let je=String(Qe!=null?Qe:"").trim();if(!je)return;let ut=je.toLowerCase();U.has(ut)||(U.add(ut),ne.push(je))},Ne=String(V.split(".")[0]||"").toLowerCase(),Ue=String((Ve=J.state)!=null?Ve:"").trim(),rt=Ue.toLowerCase();switch(Ue&&!["unknown","unavailable","none","null"].includes(rt)&&xe(Ue),Array.isArray((dt=J.attributes)==null?void 0:dt.options)&&J.attributes.options.forEach(xe),Ne){case"binary_sensor":case"input_boolean":case"switch":case"light":case"fan":case"automation":case"script":["on","off"].forEach(xe);break;case"lock":["locked","unlocking","unlocked","locking","jammed"].forEach(xe);break;case"cover":["open","opening","closed","closing"].forEach(xe);break;case"person":case"device_tracker":["home","not_home"].forEach(xe);break;case"media_player":["playing","paused","idle","off","standby","buffering"].forEach(xe);break;case"alarm_control_panel":["disarmed","armed_home","armed_away","armed_night","armed_vacation","triggered"].forEach(xe);break;case"climate":["off","heat","cool","heat_cool","auto","dry","fan_only"].forEach(xe);break;case"sun":["above_horizon","below_horizon"].forEach(xe);break;default:break}let fe=Number(Ue);return Number.isFinite(fe)&&[">0","=0","<0","!=0"].forEach(xe),ne.slice(0,18)},x=(H="")=>{var Ue,rt,fe,me,ye;let V=String(H||"").trim(),J=V?(rt=(Ue=this.hass)==null?void 0:Ue.states)==null?void 0:rt[V]:null;if(!V)return{entityText:"Browse Home Assistant entities and bind this connector to one of them.",stateText:"Pick an entity to get smart state suggestions from Home Assistant."};if(!J)return{entityText:"Entity not found in Home Assistant right now.",stateText:"You can still type custom state rules manually, for example on, open, or >0."};let ne=String(V.split(".")[0]||"").replace(/_/g," "),U=String((fe=J.state)!=null?fe:"").trim()||"unknown",xe=String(((me=J.attributes)==null?void 0:me.unit_of_measurement)||"").trim(),Ne=Array.isArray((ye=J.attributes)==null?void 0:ye.options)?J.attributes.options.length:0;return{entityText:`${ne.charAt(0).toUpperCase()}${ne.slice(1)} entity${Ne?` \u2022 ${Ne} option${Ne===1?"":"s"}`:""}`,stateText:`Current state: ${U}${xe?` ${xe}`:""}. Use suggestions below or type custom rules like >0.`}},_=(H,V)=>{let J=String(V||"").trim(),ne=(__ddcLineSplitTokens__(H)||[]).map(xe=>String(xe||"").trim()).filter(Boolean),U=ne.findIndex(xe=>xe.toLowerCase()===J.toLowerCase());return U>=0?ne.splice(U,1):ne.push(J),ne.join(",")};this.__connectorSettingsModal=r,this.__connectorInspectorId=e,r.hidden=!1,r.classList.add("is-open"),r.innerHTML=`
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
            class="ddc-connector-preview-stroke${t.glow!==!1?" is-glow":""}${a.animate?" is-animated":""}"
            style="height:${Math.max(4,Number(t.thickness||10))}px;color:${this._safe(c)};background:${this._safe(l)};"
          ></span>
        </div>
        <div class="ddc-connector-preview-copy">
          <strong>${this._safe(g)}</strong>
          <span>${h} point${h===1?"":"s"} \xB7 ${this._safe(String(t.arrows||"end"))} arrow${String(t.arrows||"end")==="both"?"s":""}</span>
        </div>
      </div>

      <section class="ddc-connector-section">
        <div class="ddc-connector-section-head">
          <div class="ddc-connector-section-title">Behavior</div>
          <p>Drive line activity from Home Assistant state and control flow direction.</p>
        </div>
        <datalist id="connectorEntityList">${p()}</datalist>
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
    </div>`;let P=H=>r.querySelector(H);P("#connectorArrows").value=String(t.arrows||"end"),P("#connectorFlowDirection").value=String(t.flow_direction||"auto"),P("#connectorLineStyle").value=String(t.line_style||"solid"),P("#connectorAnimateMode").value=String(t.animate_mode||"active");let O=P("#connectorEntityHost"),C=P("#connectorEntityMeta"),S=P("#connectorStates"),v=P("#connectorStateMeta"),b=P("#connectorStateSuggestions"),A=P("#connectorStateList"),E=null,R=this._getConnectorById_(e)||t;r.dataset.connectorId=e;let D=(H,V="connector-update")=>{this._updateCurrentConnectorEntries_(J=>J.map(ne=>{if(ne.id!==e)return ne;let U=typeof H=="function"?H(ne):H;return{...ne,...U}}),{reason:V,render:!0}),R=this._getConnectorById_(e)||R,this._selectedConnectorId=e},M=()=>{var H;return E?String(E.value||((H=E.getAttribute)==null?void 0:H.call(E,"value"))||"").trim():""},F=(H=M())=>{let V=x(H);C&&(C.textContent=V.entityText),v&&(v.textContent=V.stateText);let J=m(H);if(A&&(A.innerHTML=J.map(U=>`<option value="${this._safe(U)}"></option>`).join("")),!b||!S)return;let ne=(__ddcLineSplitTokens__(S.value||"")||[]).map(U=>String(U||"").trim().toLowerCase()).filter(Boolean);b.innerHTML=J.length?J.map(U=>`<button type="button" class="ddc-connector-state-chip${ne.includes(String(U).toLowerCase())?" is-active":""}" data-token="${this._safe(U)}">${this._safe(U)}</button>`).join(""):'<div class="ddc-connector-state-empty">No obvious state choices found for this entity yet.</div>',b.querySelectorAll(".ddc-connector-state-chip").forEach(U=>{U.addEventListener("click",()=>{let xe=U.dataset.token||"",Ne=_(S.value||"",xe);S.value=Ne,D({active_states:Ne||""}),F(H)})})};if(O)try{if(customElements.get("ha-entity-picker")){let H=document.createElement("ha-entity-picker");H.hass=this.hass,H.value=String(R.entity||""),H.setAttribute("label","Choose entity"),H.removeAttribute("hide-clear-icon"),E=H,O.appendChild(H),H.addEventListener("value-changed",V=>{var ne,U;V.stopPropagation();let J=String(((ne=V.detail)==null?void 0:ne.value)||V.detail||((U=V.target)==null?void 0:U.value)||"").trim();D({entity:J||""}),F(J)})}else throw new Error("ha-entity-picker unavailable")}catch(H){let V=document.createElement("input");V.id="connectorEntity",V.className="input",V.type="text",V.value=String(R.entity||""),V.placeholder="sensor.example_power",V.setAttribute("list","connectorEntityList"),E=V,O.appendChild(V),V.addEventListener("input",J=>{var U;let ne=String(((U=J.target)==null?void 0:U.value)||"").trim();D({entity:ne||""}),F(ne)}),H!=null&&H.message&&H.message!=="ha-entity-picker unavailable"&&console.warn("[ddc] Falling back to text entity input in connector editor",H)}let N=(H,V="input")=>{if(!H||!H.id)return!1;switch(H.id){case"connectorStates":return D({active_states:H.value||""}),F(),!0;case"connectorArrows":return D({arrows:H.value||"end"}),!0;case"connectorFlowDirection":return D({flow_direction:H.value||"auto"}),!0;case"connectorLineStyle":return D({line_style:H.value||"solid"}),!0;case"connectorAnimateMode":return D({animate_mode:H.value||"active"}),!0;case"connectorThickness":return D({thickness:Number(H.value)||R.thickness}),!0;case"connectorSpeed":return D({animation_speed:Number(H.value)||R.animation_speed}),!0;case"connectorActiveColor":return D({active_color:H.value||R.active_color}),!0;case"connectorInactiveColor":return D({inactive_color:H.value||R.inactive_color}),!0;case"connectorGlow":return V!=="change"?!1:(D({glow:!!H.checked}),!0);case"connectorRounded":return V!=="change"?!1:(D({rounded:!!H.checked}),!0);default:return!1}},$=H=>{!H.target||!r.contains(H.target)||N(H.target,"input")},Y=H=>{!H.target||!r.contains(H.target)||N(H.target,"change")};r.addEventListener("input",$),r.addEventListener("change",Y),this.__connectorInspectorCleanup=()=>{try{r.removeEventListener("input",$)}catch{}try{r.removeEventListener("change",Y)}catch{}};try{F(String(R.entity||"").trim())}catch(H){console.warn("[ddc] Failed to render connector entity/state helpers",H)}(se=P("#connectorCloseBtn"))==null||se.addEventListener("click",()=>{var H;return(H=this._closeConnectorSettings_)==null?void 0:H.call(this)}),(ge=P("#connectorDeleteBtn"))==null||ge.addEventListener("click",()=>{var H;this._setCurrentConnectorEntries_(this._getCurrentConnectorEntries_().filter(V=>V.id!==e),{reason:"connector-delete",render:!0}),this._selectedConnectorId=null,(H=this._closeConnectorSettings_)==null||H.call(this)}),(ce=P("#connectorAddBendBtn"))==null||ce.addEventListener("click",()=>{var H,V;(H=this._insertConnectorMidpoint_)==null||H.call(this,e),this._selectedConnectorId=e,(V=this._renderConnectors_)==null||V.call(this),requestAnimationFrame(()=>{var J;return(J=this._openConnectorSettings_)==null?void 0:J.call(this,e)})})}_closeConnectorSettings_(){var t,r,a;let e=(r=(t=this.shadowRoot)==null?void 0:t.querySelector)==null?void 0:r.call(t,"#connectorInspector");e&&(e.hidden=!0,e.classList.remove("is-open"),e.innerHTML="");try{(a=this.__connectorInspectorCleanup)==null||a.call(this)}catch{}this.__connectorInspectorCleanup=null,this.__connectorSettingsModal=null,this.__connectorInspectorId=null}_renderConnectors_(){var h,u,p;let e=this._ensureConnectorsLayer_();if(!e)return;let{width:t,height:r}=this._getConnectorCanvasSize_();e.setAttribute("viewBox",`0 0 ${t} ${r}`),e.innerHTML="";let a="http://www.w3.org/2000/svg",s=document.createElementNS(a,"defs");e.appendChild(s);let c=this._normalizeTabId(this.activeTab||this.defaultTab),l=(this._getCurrentConnectorEntries_()||[]).filter(m=>this._normalizeTabId(m.tabId||c)===c);if(this._selectedConnectorId&&!l.some(m=>m.id===this._selectedConnectorId)&&(this._selectedConnectorId=null,(h=this._closeConnectorSettings_)==null||h.call(this)),this.editMode&&this._connectorDrawMode){let m=document.createElementNS(a,"rect");m.setAttribute("x","0"),m.setAttribute("y","0"),m.setAttribute("width",String(t)),m.setAttribute("height",String(r)),m.setAttribute("class","ddc-connector-capture"),m.addEventListener("pointermove",x=>{var _,P;this._connectorDrawMode&&(P=(_=this._connectorDraft)==null?void 0:_.points)!=null&&P.length&&(this._connectorDraft.cursor=this._snapConnectorPointToCellOrigin_(this._eventToConnectorPoint_(x)),this._renderConnectors_())}),m.addEventListener("click",x=>{var P,O;x.preventDefault(),x.stopPropagation();let _=this._snapConnectorPointToCellOrigin_(this._eventToConnectorPoint_(x));if(!((O=(P=this._connectorDraft)==null?void 0:P.points)!=null&&O.length))this._connectorDraft={tabId:c,points:[_],cursor:_,settings:this._defaultConnectorConfig_()};else{let C=[...this._connectorDraft.points],S=C[C.length-1];(!S||S.x!==_.x||S.y!==_.y)&&C.push(_),this._connectorDraft={...this._connectorDraft,points:C,cursor:_}}this._renderConnectors_()}),m.addEventListener("dblclick",x=>{var _,P;x.preventDefault(),x.stopPropagation(),((P=(_=this._connectorDraft)==null?void 0:_.points)==null?void 0:P.length)>=2&&this._finalizeConnectorDraft_({openSettings:!0})}),e.appendChild(m)}let g=(m,{draft:x=!1}={})=>{let _=Array.isArray(m.points)?m.points:[];if(_.length<2)return;let P=x?{active:!0,reverse:!1,animate:!0}:this._getConnectorResolvedState_(m),O=P.active?String(m.active_color||this._defaultConnectorConfig_().active_color):String(m.inactive_color||this._defaultConnectorConfig_().inactive_color),C=Math.max(2,Math.min(28,Number(m.thickness)||10)),S=m.rounded!==!1,v=S||String(m.line_style||"").toLowerCase()==="dotted"?"round":"square",b=S?"round":"miter",A=String(m.line_style||"").toLowerCase()==="dashed"?`${Math.max(8,C*1.65)} ${Math.max(6,C*1.05)}`:String(m.line_style||"").toLowerCase()==="dotted"?`0 ${Math.max(8,C*1.35)}`:"",E=this._buildConnectorPathData_(_),D=`ddc_connector_${String(m.id||`draft_${Math.random().toString(36).slice(2)}`)}`,M=document.createElementNS(a,"marker");M.setAttribute("id",`${D}_start`),M.setAttribute("markerWidth","12"),M.setAttribute("markerHeight","12"),M.setAttribute("refX","1.6"),M.setAttribute("refY","6"),M.setAttribute("orient","auto-start-reverse"),M.setAttribute("markerUnits","strokeWidth"),M.innerHTML=`<path d="M 12 0 L 0 6 L 12 12 z" fill="${O.replace(/"/g,"&quot;")}"></path>`,s.appendChild(M);let F=document.createElementNS(a,"marker");F.setAttribute("id",`${D}_end`),F.setAttribute("markerWidth","12"),F.setAttribute("markerHeight","12"),F.setAttribute("refX","10.4"),F.setAttribute("refY","6"),F.setAttribute("orient","auto"),F.setAttribute("markerUnits","strokeWidth"),F.innerHTML=`<path d="M 0 0 L 12 6 L 0 12 z" fill="${O.replace(/"/g,"&quot;")}"></path>`,s.appendChild(F);let N=document.createElementNS(a,"g");N.setAttribute("class",`ddc-connector ${P.active?"is-active":"is-idle"} ${x?"is-draft":""} ${this._selectedConnectorId===m.id?"is-selected":""}`);let $=document.createElementNS(a,"path");$.setAttribute("class","ddc-connector-track"),$.setAttribute("d",E),$.setAttribute("stroke-width",String(C)),$.setAttribute("stroke-linecap",v),$.setAttribute("stroke-linejoin",b),A&&$.setAttribute("stroke-dasharray",A),N.appendChild($);let Y=document.createElementNS(a,"path");Y.setAttribute("class",`ddc-connector-line ${m.glow!==!1?"is-glow":""}`),Y.setAttribute("d",E),Y.setAttribute("stroke",O),Y.setAttribute("color",O),Y.setAttribute("stroke-width",String(C)),Y.setAttribute("stroke-linecap",v),Y.setAttribute("stroke-linejoin",b),A&&Y.setAttribute("stroke-dasharray",A),(m.arrows==="start"||m.arrows==="both")&&Y.setAttribute("marker-start",`url(#${D}_start)`),(m.arrows==="end"||m.arrows==="both")&&Y.setAttribute("marker-end",`url(#${D}_end)`),N.appendChild(Y);let X=document.createElementNS(a,"path");if(X.setAttribute("class","ddc-connector-hit"),X.setAttribute("d",E),X.setAttribute("stroke-width",String(Math.max(18,C+14))),X.addEventListener("click",re=>{var ee,ue;if(re.preventDefault(),re.stopPropagation(),!(!this.editMode||x)&&(this._selectedConnectorId=m.id,!x)){if(re.shiftKey){this._insertConnectorPointAtEvent_(m.id,re),this._selectedConnectorId=m.id,(ee=this._openConnectorSettings_)==null||ee.call(this,m.id),this._renderConnectors_();return}(ue=this._openConnectorSettings_)==null||ue.call(this,m.id),this._renderConnectors_()}}),X.addEventListener("dblclick",re=>{var ee;re.preventDefault(),re.stopPropagation(),!(!this.editMode||x)&&(this._insertConnectorPointAtEvent_(m.id,re),this._selectedConnectorId=m.id,(ee=this._openConnectorSettings_)==null||ee.call(this,m.id),this._renderConnectors_())}),N.appendChild(X),P.animate){let re=document.createElementNS(a,"path");re.setAttribute("class",`ddc-connector-flow ${P.reverse?"reverse":"forward"}`),re.setAttribute("d",E),re.setAttribute("stroke-width",String(Math.max(2,C*.48))),re.setAttribute("stroke-linecap",v),re.setAttribute("stroke-linejoin",b),re.setAttribute("stroke-dasharray",`${Math.max(18,C*2.4)} ${Math.max(10,C*1.35)}`),re.style.animationDuration=`${Math.max(.4,Math.min(8,Number(m.animation_speed)||1.8))}s`,N.appendChild(re)}(this._selectedConnectorId===m.id&&this.editMode||x)&&_.forEach((re,ee)=>{let ue=document.createElementNS(a,"circle");ue.setAttribute("class","ddc-connector-handle"),ue.setAttribute("cx",String(re.x)),ue.setAttribute("cy",String(re.y)),ue.setAttribute("r",String(Math.max(6,C*.72))),x||(ue.addEventListener("pointerdown",se=>{se.preventDefault(),se.stopPropagation(),this.__connectorPointDrag={connectorId:m.id,pointIndex:ee};let ge=H=>{if(!this.__connectorPointDrag)return;let V=this._snapConnectorPointToCellOrigin_(this._eventToConnectorPoint_(H));this._updateCurrentConnectorEntries_(J=>J.map(ne=>{if(ne.id!==m.id)return ne;let U=Array.isArray(ne.points)?[...ne.points]:[];return U[ee]=V,{...ne,points:U}}),{reason:null,render:!0})},ce=()=>{var H;window.removeEventListener("pointermove",ge,!0),window.removeEventListener("pointerup",ce,!0),window.removeEventListener("pointercancel",ce,!0),this.__connectorPointDrag=null,(H=this._queueSave)==null||H.call(this,"connector-point-move")};window.addEventListener("pointermove",ge,!0),window.addEventListener("pointerup",ce,!0),window.addEventListener("pointercancel",ce,!0)}),ue.addEventListener("dblclick",se=>{se.preventDefault(),se.stopPropagation(),!(ee===0||ee===_.length-1||_.length<=2)&&this._setCurrentConnectorEntries_((this._getCurrentConnectorEntries_()||[]).map(ge=>{if(ge.id!==m.id)return ge;let ce=[...ge.points];return ce.splice(ee,1),{...ge,points:ce}}),{reason:"connector-junction-remove",render:!0})})),N.appendChild(ue)}),e.appendChild(N)};if(l.forEach(m=>g(m)),(p=(u=this._connectorDraft)==null?void 0:u.points)!=null&&p.length){let m={...this._defaultConnectorConfig_(),...this._connectorDraft.settings||{},id:"draft",points:this._connectorDraft.cursor?[...this._connectorDraft.points,this._connectorDraft.cursor]:[...this._connectorDraft.points]};g(m,{draft:!0})}}_restoreBackgroundHostToContainer_(){if(!this.cardContainer)return;let e=this.cardContainer.querySelector("#ddcBgHost");e||(e=document.createElement("div"),e.className="ddc-bg-host",e.id="ddcBgHost",e.setAttribute("aria-hidden","true")),this.cardContainer.innerHTML="",this.cardContainer.appendChild(e),this._ensureConnectorsLayer_()}async _buildCardsFromEntries_(e=[],t=0){var a,s,c,l,g,h,u,p,m,x,_,P,O,C,S,v,b,A;this._restoreBackgroundHostToContainer_(),(a=this._clearSelection)==null||a.call(this);let r=!1;for(let E of Array.isArray(e)?e:[]){if(t&&t!==this.__responsiveSwitchSeq)return;let R=this._normalizeSavedCardEntry_(E);if(!(R!=null&&R.card)||typeof R.card=="object"&&Object.keys(R.card).length===0){let F=this._makePlaceholderAt(((s=R.position)==null?void 0:s.x)||0,((c=R.position)==null?void 0:c.y)||0,((l=R.size)==null?void 0:l.width)||200,((g=R.size)==null?void 0:g.height)||200);F.dataset.layoutCardId=R.id,F.dataset.tabId=this._normalizeTabId(R.tabId||this.defaultTab),this.cardContainer.appendChild(F);try{this._rebuildOnce(F.firstElementChild)}catch{}r=!0;continue}let D=await this._createCard(R.card),M=this._makeWrapper(D,{layoutCardId:R.id});if(this.editMode&&M.classList.add("editing"),M.dataset.tabId=this._normalizeTabId(R.tabId||this.defaultTab),this._setCardPosition(M,((h=R.position)==null?void 0:h.x)||0,((u=R.position)==null?void 0:u.y)||0),M.style.width=`${(m=(p=R.size)==null?void 0:p.width)!=null?m:14*this.gridSize}px`,M.style.height=`${(_=(x=R.size)==null?void 0:x.height)!=null?_:10*this.gridSize}px`,R.z!=null&&(M.style.zIndex=String(R.z)),R.overflow)try{M.style.overflow=R.overflow,M.dataset.overflow=R.overflow;let F=M.firstElementChild;F&&(F.style.overflow=R.overflow)}catch{}try{(P=this._applyPerCardStyle_)==null||P.call(this,M,R.card_style||R.cardStyle||null)}catch{}this.cardContainer.appendChild(M);try{this._rebuildOnce(M.firstElementChild)}catch{}this._initCardInteract(M),r=!0}r?(this._resizeContainer(),(C=this._applyAutoScale)==null||C.call(this)):(this._showEmptyPlaceholder(),(O=this._applyAutoScale)==null||O.call(this)),(S=this._syncEmptyStateUI)==null||S.call(this);try{(v=this._renderTabs)==null||v.call(this),(b=this._applyActiveTab)==null||b.call(this)}catch{}try{(A=this._renderConnectors_)==null||A.call(this)}catch{}}async _activateResponsiveProfile_(e,{force:t=!1}={}){var u,p,m,x;let r=this._responsiveProfileKeys_().includes(e)?e:"desktop",a=((u=this._getRequestedResponsiveOrientation_)==null?void 0:u.call(this,r))||"landscape",s=this._getResponsiveLayoutKey_(r,a),c=this._activeResponsiveProfile||null,l=this._activeResponsiveLayoutKey||this._getResponsiveLayoutKey_(c||"desktop","landscape");if(!t&&l===s){(p=this._syncViewportPreviewUI_)==null||p.call(this);return}l&&l!==s&&this._persistCurrentResponsiveProfileToMemory_(),this._activeResponsiveProfile=r,this._activeResponsiveLayoutKey=s,this._setStoredResponsivePreviewOrientation_(r,a);let g=++this.__responsiveSwitchSeq;this._responsiveLayouts||(this._responsiveLayouts=this._normalizeResponsiveLayouts_(this._captureCurrentLayoutEntries_(),null));let h=((m=this._responsiveLayouts)==null?void 0:m[s])||[];await this._buildCardsFromEntries_(h,g),g===this.__responsiveSwitchSeq&&((x=this._syncViewportPreviewUI_)==null||x.call(this))}async _syncResponsiveProfileForViewport_({force:e=!1}={}){var a,s,c,l,g,h;if(this.__booting)return;if(!this._responsiveLayouts&&!((s=(a=this.cardContainer)==null?void 0:a.querySelector)!=null&&s.call(a,".card-wrapper"))){(c=this._syncViewportPreviewUI_)==null||c.call(this);return}let t=((l=this._getRequestedResponsiveProfile_)==null?void 0:l.call(this))||"desktop",r=((g=this._getRequestedResponsiveLayoutKey_)==null?void 0:g.call(this))||this._getPrimaryResponsiveLayoutKey_();if(!e&&r===this._activeResponsiveLayoutKey){(h=this._syncViewportPreviewUI_)==null||h.call(this);return}await this._activateResponsiveProfile_(t,{force:e})}_isContainerFixed(){return this.containerSizeMode==="fixed_custom"||this.containerSizeMode==="preset"||this.containerSizeMode==="fixed"}_resolveFixedSize(){if(this.containerSizeMode==="fixed_custom"){let e=Math.max(100,Number(this.containerFixedWidth||0)),t=Math.max(100,Number(this.containerFixedHeight||0));return{w:e,h:t}}if(this.containerSizeMode==="preset"){let e=i._sizePresets().find(a=>a.key===this.containerPreset)||i._sizePresets().find(a=>a.key==="fhd");if(!e)return{w:1920,h:1080};let t=e.w,r=e.h;return this.containerPresetOrient==="portrait"&&t>r&&([t,r]=[r,t]),this.containerPresetOrient==="landscape"&&r>t&&([t,r]=[r,t]),{w:t,h:r}}return null}_applyContainerSizingFromConfig(e=!1){var r,a;let t=this.cardContainer;if(t)if(this._isContainerFixed()){let{w:s,h:c}=this._resolveFixedSize();t.style.width=`${s}px`,t.style.height=`${c}px`,t.style.overflow="hidden",e||(r=this._dbgPush)==null||r.call(this,"size","Applied fixed size",{w:s,h:c,mode:this.containerSizeMode,preset:this.containerPreset,orient:this.containerPresetOrient}),this._clampAllCardsInside()}else t.style.overflow="hidden",e||(a=this._dbgPush)==null||a.call(this,"size","Applied dynamic size"),this._resizeContainer()}_getContainerSize(){let e=this.cardContainer;if(!e)return{w:0,h:0};let t=parseFloat(getComputedStyle(e).width)||e.getBoundingClientRect().width,r=parseFloat(getComputedStyle(e).height)||e.getBoundingClientRect().height;return{w:t,h:r}}_getOuterGridBufferPx_(){var e;return this.outerGridBuffer?Math.max(0,Number(this.gridSize||((e=this._config)==null?void 0:e.grid)||0)||0):0}_clampAllCardsInside(){if(!this._isContainerFixed())return;let{w:e,h:t}=this._getContainerSize();this.cardContainer.querySelectorAll(".card-wrapper").forEach(a=>{let s=parseFloat(a.getAttribute("data-x"))||0,c=parseFloat(a.getAttribute("data-y"))||0,l=parseFloat(a.style.width)||a.getBoundingClientRect().width,g=parseFloat(a.style.height)||a.getBoundingClientRect().height,h=Math.max(0,Math.min(s,Math.max(0,e-l))),u=Math.max(0,Math.min(c,Math.max(0,t-g))),p=Math.min(l,e),m=Math.min(g,t);(p!==l||m!==g)&&(a.style.width=`${p}px`,a.style.height=`${m}px`);let x=Math.max(0,Math.min(h,Math.max(0,e-p))),_=Math.max(0,Math.min(u,Math.max(0,t-m)));this._setCardPosition(a,x,_)})}_computeHaSidebarGutters_(){var r;let e=56;try{let a=document.querySelector("home-assistant"),s=a==null?void 0:a.shadowRoot,c=s==null?void 0:s.querySelector("ha-drawer, app-drawer, ha-sidebar, .drawer, .menu"),l=(r=c==null?void 0:c.getBoundingClientRect)==null?void 0:r.call(c);Math.max(document.documentElement.clientWidth||0,window.innerWidth||0)<=870?e=0:l!=null&&l.width&&(e=Math.max(0,Math.min(256,Math.round(l.width))))}catch{}let t=0;try{this.style.setProperty("--ddc-left-gutter",`${e}px`),this.style.setProperty("--ddc-right-gutter",`${t}px`)}catch{}}_computeHaTopGutter_(){var r,a;let e=0,t=s=>{let c=parseFloat(String(s!=null?s:"").trim());return Number.isFinite(c)?Math.max(0,c):0};try{[document.documentElement,document.body,...((r=this._deepQueryAll)==null?void 0:r.call(this,"ha-app-layout, home-assistant-main"))||[]].filter(Boolean).forEach(c=>{try{let l=getComputedStyle(c);e=Math.max(e,t(l.getPropertyValue("--header-height")),t(l.getPropertyValue("--ha-header-height")),t(l.getPropertyValue("--app-header-height")),t(l.getPropertyValue("--mdc-top-app-bar-height")))}catch{}})}catch{}try{(((a=this._deepQueryAll)==null?void 0:a.call(this,"app-header, ha-top-app-bar, ha-top-app-bar-fixed, mwc-top-app-bar-fixed, ha-header-bar, app-toolbar, ha-toolbar"))||[]).forEach(c=>{var l;try{if(!c)return;let g=getComputedStyle(c);if(g.display==="none"||g.visibility==="hidden")return;let h=(l=c.getBoundingClientRect)==null?void 0:l.call(c);if(!h||h.height<8||h.width<120||h.bottom<=0||h.top>=Math.max(window.innerHeight||0,1))return;e=Math.max(e,Math.round(h.bottom))}catch{}})}catch{}try{this.style.setProperty("--ddc-top-gutter",`${Math.max(0,Math.round(e))}px`)}catch{}}_applyGridVars(){var t;let e=`${this.gridSize||10}px`;this.style.setProperty("--ddc-grid-size",e),(t=this.cardContainer)==null||t.style.setProperty("--ddc-grid-size",e)}_getViewportPreviewPreset_(){var a;let e=String(this.viewportPreviewMode||"live").toLowerCase();if(!this.editMode||e==="live"||!this._responsiveProfileKeys_().includes(e))return null;let t=((a=this._getRequestedResponsiveOrientation_)==null?void 0:a.call(this,e))||"landscape",r=this._getResponsiveViewportProfile_(e,t);return{id:e,width:r.width,height:r.height,label:this._getResponsiveProfileLabel_(e),orientation:t}}_isExplicitViewportPreview_(){var e;return!!((e=this._getViewportPreviewPreset_)!=null&&e.call(this))}_getViewportMetrics_(){var t,r;let e=(t=this._getViewportPreviewPreset_)==null?void 0:t.call(this);return e!=null&&e.width&&(e!=null&&e.height)?{width:e.width,height:e.height,shortEdge:Math.min(e.width,e.height),longEdge:Math.max(e.width,e.height),isPortrait:e.height>=e.width,preview:e.id}:((r=this._getRealViewportMetrics_)==null?void 0:r.call(this))||{width:1,height:1,shortEdge:1,longEdge:1,isPortrait:!0}}_getEffectivePreviewWidth_(e=1){var l;let t=Math.max(1,Number(e||1)||1),r=(l=this._getViewportPreviewPreset_)==null?void 0:l.call(this);if(!(r!=null&&r.width))return t;let a=String((r==null?void 0:r.id)||"").toLowerCase(),s=a==="desktop"?t<=1600?72:Math.min(680,t*.34):a==="tablet"?t<=1200?64:Math.min(460,t*.28):t<=720?24:Math.min(120,t*.12),c=Math.max(1,t-s);return Math.max(1,Math.min(c,r.width))}_getEffectivePreviewHeight_(){var t;let e=(t=this._getViewportPreviewPreset_)==null?void 0:t.call(this);return e!=null&&e.height?Math.max(1,Number(e.height)||1):0}_getPreviewDeviceFrameOrientation_(e=null,t=0,r=0,a=null){var g,h,u,p,m,x;let s=String(e||((h=(g=this._getViewportPreviewPreset_)==null?void 0:g.call(this))==null?void 0:h.id)||"").toLowerCase();if(s==="desktop")return"landscape";if(a)return this._normalizeResponsiveOrientation_(s,a);let c=Math.max(1,Number(t||((p=(u=this._getViewportPreviewPreset_)==null?void 0:u.call(this))==null?void 0:p.width)||1)||1);return Math.max(1,Number(r||((x=(m=this._getViewportPreviewPreset_)==null?void 0:m.call(this))==null?void 0:x.height)||1)||1)>=c?"portrait":"landscape"}_rotatePreviewDeviceFrameConfig_(e=null,t="portrait"){if(!e)return null;let r=String(e.viewportOrientation||((Number(e.innerHeight||0)||0)>=(Number(e.innerWidth||0)||0)?"portrait":"landscape")).toLowerCase(),a=String(t||r).toLowerCase(),s={...e,baseViewportOrientation:r,orientation:a,displayAssetWidth:Number(e.assetWidth||1280)||1280,displayAssetHeight:Number(e.assetHeight||960)||960,displayViewportLeft:Number(e.measuredViewportLeft||0)||0,displayViewportTop:Number(e.measuredViewportTop||0)||0,displayViewportWidth:Number(e.measuredViewportWidth||1)||1,displayViewportHeight:Number(e.measuredViewportHeight||1)||1,assetRotation:0,viewportInnerWidth:Math.max(1,Number(e.innerWidth||1)||1),viewportInnerHeight:Math.max(1,Number(e.innerHeight||1)||1)};if(a===r||s.id==="desktop")return s;let c=Math.max(1,Number(e.assetWidth||1280)||1280),l=Math.max(1,Number(e.assetHeight||960)||960),g=Math.max(0,Number(e.measuredViewportLeft||0)||0),h=Math.max(0,Number(e.measuredViewportTop||0)||0),u=Math.max(1,Number(e.measuredViewportWidth||1)||1),p=Math.max(1,Number(e.measuredViewportHeight||1)||1);return{...s,orientation:a,displayAssetWidth:l,displayAssetHeight:c,displayViewportLeft:Math.max(0,l-(h+p)),displayViewportTop:g,displayViewportWidth:p,displayViewportHeight:u,assetRotation:90,viewportInnerWidth:Math.max(1,Number(e.innerHeight||1)||1),viewportInnerHeight:Math.max(1,Number(e.innerWidth||1)||1)}}_lockPreviewDeviceFrameViewportRect_(e=null){if(!e)return null;let t={...e},r=Math.max(1,Number(t.viewportInnerWidth||t.innerWidth||1)||1),a=Math.max(1,Number(t.viewportInnerHeight||t.innerHeight||1)||1),s=r/Math.max(1,a),c=Math.max(1,Number(t.displayViewportWidth||t.measuredViewportWidth||1)||1),l=Math.max(1,Number(t.displayViewportHeight||t.measuredViewportHeight||1)||1),g=Math.max(1,l*s),h=Math.max(1,c/Math.max(1e-4,s)),u=Math.abs(g-c),p=Math.abs(h-l);if(u<p){let m=Math.max(1,Math.round(g));t.displayViewportWidth=m,t.measuredViewportWidth=m,t.displayViewportHeight=l,t.measuredViewportHeight=l}else{let m=Math.max(1,Math.round(h));t.displayViewportWidth=c,t.measuredViewportWidth=c,t.displayViewportHeight=m,t.measuredViewportHeight=m}return t}_getPreviewDeviceFrameLock_(e=null,t=0,r=0,a={}){var g;let s=(g=this._getPreviewDeviceFrameConfig_)==null?void 0:g.call(this,e,t,r,a);if(!s)return null;let c=Math.max(1,Number(s.viewportInnerWidth||s.innerWidth||t||1)||1),l=Math.max(1,Number(s.viewportInnerHeight||s.innerHeight||r||1)||1);return{id:s.id,orientation:s.orientation||"landscape",width:c,height:l,ratio:Math.max(1e-4,c/Math.max(1,l))}}_getPreviewDeviceFrameConfig_(e=null,t=0,r=0,a={}){var u,p,m,x,_;let s=String(e||((p=(u=this._getViewportPreviewPreset_)==null?void 0:u.call(this))==null?void 0:p.id)||"").toLowerCase(),l={mobile:{id:"mobile",imageUrl:"https://i.postimg.cc/9QgSw3WG/iphone-frame.png",assetWidth:1280,assetHeight:960,viewportOrientation:"portrait",measuredViewportLeft:474,measuredViewportTop:120,measuredViewportWidth:332,measuredViewportHeight:721,innerWidth:500,innerHeight:1080},tablet:{id:"tablet",imageUrl:"https://i.postimg.cc/137TVx9w/ipad_frame.png",assetWidth:1280,assetHeight:960,viewportOrientation:"landscape",measuredViewportLeft:207,measuredViewportTop:155,measuredViewportWidth:866,measuredViewportHeight:651,innerWidth:1295,innerHeight:923},desktop:{id:"desktop",imageUrl:"https://i.postimg.cc/DwpD4V21/macbook_frame.png",assetWidth:1280,assetHeight:960,viewportOrientation:"landscape",measuredViewportLeft:162,measuredViewportTop:181,measuredViewportWidth:956,measuredViewportHeight:598,innerWidth:1430,innerHeight:896}}[s]||null;if(!l)return null;let g=((m=this._getPreviewDeviceFrameOrientation_)==null?void 0:m.call(this,s,t,r,a==null?void 0:a.orientation))||l.viewportOrientation||"landscape",h=((x=this._rotatePreviewDeviceFrameConfig_)==null?void 0:x.call(this,l,g))||l;return((_=this._lockPreviewDeviceFrameViewportRect_)==null?void 0:_.call(this,h))||h}_getPreviewDeviceFrameMetrics_(e=0,t=0,r=null,a={}){var V,J,ne,U,xe;let s=(V=this._getPreviewDeviceFrameConfig_)==null?void 0:V.call(this,r,e,t,a);if(!s)return null;let c=Math.max(1,Number(e||((ne=(J=this._getViewportPreviewPreset_)==null?void 0:J.call(this))==null?void 0:ne.width)||1)||1),l=Math.max(1,Number(t||((xe=(U=this._getViewportPreviewPreset_)==null?void 0:U.call(this))==null?void 0:xe.height)||1)||1),g=Math.max(1,Number((a==null?void 0:a.displayWidth)||c)||c),h=Math.max(1,Number((a==null?void 0:a.displayHeight)||l)||l),u=Math.max(1,Number(s.viewportInnerWidth||s.innerWidth||c)||c),p=Math.max(1,Number(s.viewportInnerHeight||s.innerHeight||l)||l),m=Math.max(1,Number(s.displayViewportWidth||s.measuredViewportWidth||c)||c),x=Math.max(1,Number(s.displayViewportHeight||s.measuredViewportHeight||l)||l),_=Math.max(0,Number(s.displayViewportLeft||s.measuredViewportLeft||0)||0),P=Math.max(0,Number(s.displayViewportTop||s.measuredViewportTop||0)||0),O=Math.max(1,Number(s.assetWidth||1280)||1280),C=Math.max(1,Number(s.assetHeight||960)||960),S=Math.max(1,Number(s.displayAssetWidth||O)||O),v=Math.max(1,Number(s.displayAssetHeight||C)||C),b=m/u,A=x/p,E=Math.max(1e-4,((Number.isFinite(b)?b:0)+(Number.isFinite(A)?A:0))/2||b||A||1),R=Math.max(1e-4,g/m||1),D=Math.max(1e-4,h/x||R),M=Math.max(1,S/E),F=Math.max(1,v/E),N=Math.max(1,O/E),$=Math.max(1,C/E),Y=g,X=h,le=0,re=0,ee=Math.max(1,S*R),ue=Math.max(1,v*D),se=Math.max(1,O*R),ge=Math.max(1,C*D),ce=Math.max(0,_*R),H=Math.max(0,P*D);return{...s,screenWidth:c,screenHeight:l,displayWidth:g,displayHeight:h,assetWidth:O,assetHeight:C,displayAssetWidth:S,displayAssetHeight:v,innerWidth:u,innerHeight:p,measuredViewportLeft:_,measuredViewportTop:P,measuredViewportWidth:m,measuredViewportHeight:x,viewportLeft:_,viewportTop:P,viewportWidth:u,viewportHeight:p,logicalAssetWidth:M,logicalAssetHeight:F,intrinsicScaleX:b,intrinsicScaleY:A,intrinsicScale:E,renderScale:R,renderScaleX:R,renderScaleY:D,renderedViewportWidth:Y,renderedViewportHeight:X,viewportOffsetX:le,viewportOffsetY:re,frameWidth:ee,frameHeight:ue,logicalOriginalAssetWidth:N,logicalOriginalAssetHeight:$,renderedAssetWidth:se,renderedAssetHeight:ge,renderedViewportLeft:ce,renderedViewportTop:H}}_applyPreviewDeviceFrame_(e=0,t=0,r=null,a={}){var x,_,P,O,C,S;let s=this.__scaleOuter,c=this.rootEl;try{(_=(x=s==null?void 0:s.classList)==null?void 0:x.remove)==null||_.call(x,"ddc-preview-shell")}catch{}let l=((P=c==null?void 0:c.getBoundingClientRect)==null?void 0:P.call(c))||{left:0,top:0},g=((O=s==null?void 0:s.getBoundingClientRect)==null?void 0:O.call(s))||{left:(s==null?void 0:s.offsetLeft)||0,top:(s==null?void 0:s.offsetTop)||0,width:(s==null?void 0:s.offsetWidth)||Math.max(1,Number(e||1)||1),height:(s==null?void 0:s.offsetHeight)||Math.max(1,Number(t||1)||1)},h=(C=this._getPreviewDeviceFrameMetrics_)==null?void 0:C.call(this,e,t,r,{...a,displayWidth:Math.max(1,Number(g.width||1)||1),displayHeight:Math.max(1,Number(g.height||1)||1)});if(c&&(c.classList.toggle("ddc-preview-device-active",!!h),c.classList.toggle("ddc-preview-device-mobile",(h==null?void 0:h.id)==="mobile"),c.classList.toggle("ddc-preview-device-tablet",(h==null?void 0:h.id)==="tablet"),c.classList.toggle("ddc-preview-device-desktop",(h==null?void 0:h.id)==="desktop")),!c||!s||!h)return(S=this.__previewDeviceFrameEl)!=null&&S.isConnected&&this.__previewDeviceFrameEl.remove(),this.__previewDeviceFrameEl=null,h||null;let u=this.__previewDeviceFrameEl;if(!u||!u.isConnected){u=document.createElement("div"),u.className="ddc-preview-device-frame",u.setAttribute("aria-hidden","true");let v=document.createElement("div");v.className="ddc-preview-frame-viewport-box",u.appendChild(v),c.insertBefore(u,s),this.__previewDeviceFrameEl=u}else u.nextSibling!==s&&c.insertBefore(u,s);let p=u.querySelector(".ddc-preview-frame-viewport-box"),m=u.style;return u.dataset.device=h.id,u.dataset.orientation=h.orientation||"landscape",m.width=`${Math.max(1,h.frameWidth)}px`,m.height=`${Math.max(1,h.frameHeight)}px`,m.left=`${Math.round(g.left-l.left+(h.viewportOffsetX||0)-h.viewportLeft*(h.renderScaleX||h.renderScale||1))}px`,m.top=`${Math.round(g.top-l.top+(h.viewportOffsetY||0)-h.viewportTop*(h.renderScaleY||h.renderScale||1))}px`,m.setProperty("--ddc-preview-frame-url",`url("${h.imageUrl}")`),m.setProperty("--ddc-preview-asset-width",`${Math.max(1,h.renderedAssetWidth||h.frameWidth)}px`),m.setProperty("--ddc-preview-asset-height",`${Math.max(1,h.renderedAssetHeight||h.frameHeight)}px`),m.setProperty("--ddc-preview-asset-left",`${Math.round((h.frameWidth-(h.renderedAssetWidth||h.frameWidth))/2)}px`),m.setProperty("--ddc-preview-asset-top",`${Math.round((h.frameHeight-(h.renderedAssetHeight||h.frameHeight))/2)}px`),m.setProperty("--ddc-preview-asset-rotation",`${Number(h.assetRotation||0)||0}deg`),p&&(p.style.left=`${Math.round(h.renderedViewportLeft||0)}px`,p.style.top=`${Math.round(h.renderedViewportTop||0)}px`,p.style.width=`${Math.max(1,h.renderedViewportWidth||h.screenWidth||1)}px`,p.style.height=`${Math.max(1,h.renderedViewportHeight||h.screenHeight||1)}px`,p.dataset.debug=`${this._getResponsiveProfileLabel_(h.id)} ${h.orientation||"landscape"} \xB7 ${Math.round(h.screenWidth)}\xD7${Math.round(h.screenHeight)}`),h}_syncViewportPreviewUI_(){var e,t,r,a,s,c,l,g;try{let h=(t=(e=this.shadowRoot)==null?void 0:e.querySelector)==null?void 0:t.call(e,"#previewModeControls"),u=Array.from(((a=(r=this.shadowRoot)==null?void 0:r.querySelectorAll)==null?void 0:a.call(r,"[data-preview-mode]"))||[]),p=(s=this._getViewportPreviewPreset_)==null?void 0:s.call(this),m=(p==null?void 0:p.id)||"live",x=((c=this._getActualResponsiveProfile_)==null?void 0:c.call(this))||"desktop";h&&(h.style.display=""),u.forEach(_=>{let P=String(_.dataset.previewMode||"live")===m;_.classList.toggle("is-active",P),_.setAttribute("aria-pressed",P?"true":"false"),_.dataset.previewMode==="live"?(_.dataset.profile=x,_.title=`Live viewport (${this._getResponsiveProfileLabel_(x)})`):(_.removeAttribute("data-profile"),_.title=this._getResponsiveProfileLabel_(_.dataset.previewMode||"desktop"))}),this.rootEl&&(this.rootEl.classList.toggle("ddc-preview-active",!!p),this.rootEl.classList.toggle("ddc-preview-docked-tabs",!!p),p!=null&&p.width?this.rootEl.style.setProperty("--ddc-preview-width",`${p.width}px`):this.rootEl.style.removeProperty("--ddc-preview-width"),p!=null&&p.height?this.rootEl.style.setProperty("--ddc-preview-height",`${p.height}px`):this.rootEl.style.removeProperty("--ddc-preview-height")),this.__scaleOuter&&(this.__scaleOuter.style.marginInline=p?"auto":"",this.__scaleOuter.style.maxWidth=p?"100%":""),(l=this._applyPreviewDeviceFrame_)==null||l.call(this,(p==null?void 0:p.width)||0,(p==null?void 0:p.height)||0,(p==null?void 0:p.id)||null,{orientation:(p==null?void 0:p.orientation)||null}),this.tabsBar&&this.tabsPosition!=="left"&&(this.tabsBar.style.marginInline=p?"auto":""),(g=this._syncResponsiveViewportFields_)==null||g.call(this)}catch{}}async _setViewportPreviewMode_(e="live"){var r,a,s,c,l;let t=e==="desktop"||e==="mobile"||e==="tablet"?e:"live";if(this._persistCurrentResponsiveProfileToMemory_(),this.viewportPreviewMode=t,t!=="live"){let g=((r=this._getRequestedResponsiveOrientation_)==null?void 0:r.call(this,t))||"landscape";(a=this._ensureResponsiveViewportProfileLock_)==null||a.call(this,t,"width",g)}this.__ddcTextLockDirty=!0,await this._syncResponsiveProfileForViewport_({force:!0}),(s=this._applyAutoScale)==null||s.call(this),(c=this._syncTabsWidth_)==null||c.call(this),(l=this._scheduleTextResizeLockRefresh_)==null||l.call(this,!0)}_syncResponsiveViewportFields_(){var e,t,r,a,s,c;try{let l=this.previewWidthInput,g=this.previewHeightInput,h=this.previewSwapButton,u=this.previewMeta;if(!l||!g)return;let p=(e=this.shadowRoot)==null?void 0:e.activeElement,m=String(this.viewportPreviewMode||"live").toLowerCase(),x=this._responsiveProfileKeys_().includes(m)?m:null,_=x||this._activeResponsiveProfile||((t=this._getActualResponsiveProfile_)==null?void 0:t.call(this))||"desktop",P=((r=this._getRequestedResponsiveOrientation_)==null?void 0:r.call(this,_))||"landscape";x&&((a=this._ensureResponsiveViewportProfileLock_)==null||a.call(this,x,"width",P));let O=this._getResponsiveViewportProfile_(_,P),C=(s=this._getPreviewDeviceFrameLock_)==null?void 0:s.call(this,_,O.width,O.height,{orientation:P});p!==l&&(l.value=String(Math.round(O.width))),p!==g&&(g.value=String(Math.round(O.height)));let S=!x,v=!!x&&x!=="desktop";l.disabled=S,g.disabled=S,h&&(h.disabled=!v,h.hidden=!v,h.setAttribute("aria-hidden",v?"false":"true"),h.title=v?"Swap orientation":"Orientation swap is only available for mobile and tablet"),u&&(u.textContent=S?`Auto: ${this._getResponsiveProfileLabel_(((c=this._getActualResponsiveProfile_)==null?void 0:c.call(this))||"desktop")}`:`Editing ${this._getResponsiveProfileLabel_(x)} \xB7 ${(C==null?void 0:C.orientation)==="portrait"?"Portrait":"Landscape"} \xB7 ${Math.round(O.width)}\xD7${Math.round(O.height)} \xB7 locked ratio`)}catch{}}_commitResponsiveViewportField_(e="width"){var t,r,a,s;try{let c=String(this.viewportPreviewMode||"live").toLowerCase();if(!this._responsiveProfileKeys_().includes(c))return;let l=e==="height"?this.previewHeightInput:this.previewWidthInput;if(!l)return;let g=String(l.value||"").trim();if(!g){(t=this._syncResponsiveViewportFields_)==null||t.call(this);return}let h=Number(g);if(!Number.isFinite(h)){(r=this._syncResponsiveViewportFields_)==null||r.call(this);return}let u=Math.max(240,Math.min(6e3,Math.round(h)));this._updateResponsiveViewportProfile_(c,{[e]:u},{preferAxis:e==="height"?"height":"width",orientation:((a=this._getRequestedResponsiveOrientation_)==null?void 0:a.call(this,c))||"landscape"}),(s=this._syncResponsiveViewportFields_)==null||s.call(this)}catch{}}_updateResponsiveViewportProfile_(e,t={},r={}){var p,m,x,_,P,O,C,S;if(!this._responsiveProfileKeys_().includes(e))return;let a=this._normalizeResponsiveOrientation_(e,(m=r==null?void 0:r.orientation)!=null?m:(p=this._getRequestedResponsiveOrientation_)==null?void 0:p.call(this,e)),s=this._getResponsiveLayoutKey_(e,a),c=this._getResponsiveViewportProfile_(e,a),l=(r==null?void 0:r.preferAxis)==="height"?"height":"width",g={...t};if(e==="desktop"){let v=Number((x=g.width)!=null?x:c.width)||c.width,b=Number((_=g.height)!=null?_:c.height)||c.height;g.width=Math.max(v,b),g.height=Math.min(v,b)}let h=this._getLockedResponsiveViewportProfile_(e,{...c,...g},l,a),u=this._normalizeResponsiveViewportProfiles_({...this.responsiveViewportProfiles||{},[s]:{...h}});this.responsiveViewportProfiles=u,this._config={...this._config||{},responsive_viewports:this._cloneJson_(this._serializeResponsiveViewportProfiles_(u))},(P=this._syncViewportPreviewUI_)==null||P.call(this),(O=this._applyAutoScale)==null||O.call(this),(C=this._syncTabsWidth_)==null||C.call(this);try{this._isInHaEditorPreview()||(S=this._queueSave)==null||S.call(this,"responsive-viewports")}catch{}}_swapResponsiveViewportOrientation_(){var a,s,c,l,g;let e=String(this.viewportPreviewMode||"live").toLowerCase();if(!this._responsiveProfileKeys_().includes(e)||e==="desktop")return;let r=this._getStoredResponsivePreviewOrientation_(e)==="portrait"?"landscape":"portrait";this._setStoredResponsivePreviewOrientation_(e,r),(a=this._ensureResponsiveViewportProfileLock_)==null||a.call(this,e,"width",r),(s=this._syncResponsiveProfileForViewport_)==null||s.call(this,{force:!0}),(c=this._syncResponsiveViewportFields_)==null||c.call(this),(l=this._syncViewportPreviewUI_)==null||l.call(this),(g=this._applyAutoScale)==null||g.call(this)}_shouldUseUnscaledPreviewCanvas_(){var r,a;return String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()!=="dynamic"||String(this.mobileDynamicBehavior||"native").toLowerCase()!=="native"?!1:(((r=this._getRequestedResponsiveProfile_)==null?void 0:r.call(this))||this._activeResponsiveProfile||((a=this._getActualResponsiveProfile_)==null?void 0:a.call(this))||"desktop")==="mobile"}_isMobileOptimizeActive_(){var e,t,r,a;try{if(!this.optimizeForMobile||(e=this._shouldUseUnscaledPreviewCanvas_)!=null&&e.call(this)||String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()!=="dynamic"||!this.autoResizeCards)return!1;let c=((t=this._getViewportMetrics_)==null?void 0:t.call(this))||{width:0,shortEdge:0,isPortrait:!1},l=(a=(r=window.matchMedia)==null?void 0:r.call(window,"(pointer: coarse)"))==null?void 0:a.matches;return c.shortEdge<=900&&(l||c.width<=820||c.isPortrait)}catch{return!1}}_getMobileScalePlan_(e=1,t=1){var u;let r=((u=this._getViewportMetrics_)==null?void 0:u.call(this))||{width:0,isPortrait:!1},a=Math.max(1,r.width||1),s=r.isPortrait?a<=390?.48:a<=430?.52:a<=520?.58:.64:a<=820?.64:.7,c=r.isPortrait?1.85:1.45,l=Math.max(t,t*c),g=Math.min(s,l),h=Math.max(t,g);return{scale:h,allowPanX:h>t+.001}}_getMobileTextAssistScale_(){var r;let e=((r=this._getViewportMetrics_)==null?void 0:r.call(this))||{width:0,isPortrait:!1},t=Math.max(1,e.width||1);return e.isPortrait?t<=390?.78:t<=430?.82:t<=520?.86:.9:t<=820?.88:.92}_dbgInit(){if(!this.__dbgReady){this.__dbgReady=!0,this._dbgBuffer=[],this._dbgMax=400;try{window.DDC=this}catch{}}}_dbgPush(e,t,r=null){let a={t:new Date().toISOString(),kind:e,msg:t,extra:r};this._dbgBuffer.push(a),this._dbgBuffer.length>this._dbgMax&&this._dbgBuffer.shift(),this.debug&&console.debug(`%c[ddc:${e}]%c ${t}`,"color:#03a9f4","color:unset",r!=null?r:"")}_dbgDump(){return[...this._dbgBuffer]}_safe(e){return String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}setConfig(e={}){var l,g,h,u,p,m,x,_,P,O,C,S,v,b,A,E,R,D,M,F,N,$,Y,X,le,re,ee,ue,se,ge,ce,H,V,J,ne,U,xe,Ne,Ue,rt,fe,me,ye,Ve,dt,Qe,je,ut,yt,bt,Pt,Oe,Ke,vt,Ct,It,Bt,Rt,Lt,ii,oe,ae,He,De,Le,ze,Q,Ce,tt,ie;let t=this.storageKey;this.config={...e},(!this.config.storage_key||this.config.storage_key==="")&&(this.config.storage_key=this.constructor._genKey()),this.storageKey=this.config.storage_key,e.storage_key||(this.storageKey?e={...e,storage_key:this.storageKey}:(this.storageKey=`layout_${((l=crypto==null?void 0:crypto.randomUUID)==null?void 0:l.call(crypto))||Date.now().toString(36)}`,e={...e,storage_key:this.storageKey})),this._config=e,this.storageKey=e.storage_key,this._syncEditorsStorageKey(),this.storageKey=e.storage_key||void 0,this._syncEditorsStorageKey(),this.gridSize=Number((g=e.grid)!=null?g:10),this.dragLiveSnap=!!e.drag_live_snap,this.autoSave=e.auto_save!==!1,this.autoSaveDebounce=Number((h=e.auto_save_debounce)!=null?h:800),this.editModePin=this.editModePin!=null?this.editModePin:(p=(u=e.edit_mode_pin)!=null?u:e.editModePin)!=null?p:"",this.containerBackground=(m=e.container_background)!=null?m:"transparent",this.cardBackground=(x=e.card_background)!=null?x:"var(--ha-card-background, var(--card-background-color))",this.applyBackgroundToPage=!!((P=(_=e.apply_background_to_page)!=null?_:e.applyBackgroundToPage)!=null&&P),this.dashboardThemeEnabled=!!((C=(O=e.dashboard_theme_enabled)!=null?O:e.theme_enabled)!=null&&C),this.dashboardTheme=String((v=(S=e.dashboard_theme)!=null?S:e.theme_name)!=null?v:"").trim(),this.dashboardThemeOverrideAllDesign=!!((A=(b=e.dashboard_theme_override_all_design)!=null?b:e.theme_override_all_design)!=null&&A),this.outerGridBuffer=!!((E=e.outer_grid_buffer)!=null&&E),this.cardShadowEnabled=!!e.card_shadow,this.hideHaHeader=!!((D=(R=e.hide_HA_Header)!=null?R:e.hide_ha_header)!=null&&D),this.hideHaSidebar=!!((F=(M=e.hide_HA_Sidebar)!=null?M:e.hide_ha_sidebar)!=null&&F),this.debug=!!e.debug,this.editMode=!1,this._backendOK=!1,this.disableOverlap=!!e.disable_overlap,this.containerSizeMode=e.container_size_mode||"dynamic",this.doNotResizeText=!!(($=(N=e.do_not_resize_text)!=null?N:e.doNotResizeText)!=null&&$),this.optimizeForMobile=!!((X=(Y=e.optimize_for_mobile)!=null?Y:e.optimizeForMobile)!=null&&X),this.mobileDynamicBehavior=String((re=(le=e.mobile_dynamic_behavior)!=null?le:e.mobileDynamicBehavior)!=null?re:"native").toLowerCase()==="scale"?"scale":"native";let r=e.responsive_viewports||this.responsiveViewportProfiles;this.responsiveViewportProfiles=this._isLegacyResponsiveViewportProfiles_(r)?this._defaultResponsiveViewportProfiles_():this._normalizeResponsiveViewportProfiles_(r),this._responsiveConnectors=this._normalizeResponsiveConnectorLayouts_(e.connectors||[],e.responsive_connectors||null),this._connectorDrawMode=!1,this._connectorDraft=null,this._selectedConnectorId=null,this.__connectorPointDrag=null,String(this.containerSizeMode||"dynamic").toLowerCase()==="dynamic"?this.autoResizeCards=!0:this.autoResizeCards=e.auto_resize_cards!==!1,this.animateCards=!!e.animate_cards,this.screenSaverEnabled=!!((ee=e.screen_saver_enabled)!=null&&ee);let s=Number(e.screen_saver_delay);this.screenSaverDelay=Number.isFinite(s)&&s>0?s:5*6e4,this.autoResizeCards||String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(ue=this._startScaleWatch)==null||ue.call(this):(se=this._stopScaleWatch)==null||se.call(this),(ge=this._applyAutoScale)==null||ge.call(this),this.containerFixedWidth=Number((ce=e.container_fixed_width)!=null?ce:0)||null,this.containerFixedHeight=Number((H=e.container_fixed_height)!=null?H:0)||null,this.containerPreset=e.container_preset||"fullhd",this.containerPresetOrient=e.container_preset_orientation||"auto",this.heroImage=(e==null?void 0:e.hero_image)||"https://i.postimg.cc/CxsWQgwp/Chat-GPT-Image-Sep-5-2025-09-26-16-AM.png",this.tabs=Array.isArray(e.tabs)?e.tabs:[];{let Ge=String(e.tabs_position||"top").toLowerCase();this.tabsPosition=Ge==="left"||Ge==="bottom"?Ge:"top"}this.defaultTab=e.default_tab||((J=(V=this.tabs[0])==null?void 0:V.id)!=null?J:"default"),this.hideTabsWhenSingle=e.hide_tabs_when_single!==!1,this.activeTab=this.defaultTab;try{let Ge=localStorage.getItem(`ddc_lasttab_${this.storageKey}`);Ge&&this.tabs.some(ct=>ct.id===Ge)&&(this.activeTab=Ge)}catch{}(ne=this._syncTabsPlacement_)==null||ne.call(this),this.cardContainer&&this._applyContainerSizingFromConfig(!1);let c=t!==this.storageKey;if(this.editMode&&!this.__booting&&!c)try{this._isInHaEditorPreview()||this._queueSave("config-change")}catch{}this._applyGridVars();try{(U=this._applyBackgroundImageFromConfig)==null||U.call(this)}catch{}try{(xe=this._applyHaChromeVisibility_)==null||xe.call(this)}catch{}this._ensureOverlayZFix();try{(Ne=this._updateScreensaverSettings)==null||Ne.call(this)}catch{}if(this._selection=new Set,this.__groupDrag=null,this.__editorCache=new Map,this.__stubCache=new Map,this._dbgInit(),this._dbgPush("init","Card configured",{storageKey_raw:e.storage_key,storageKey_slug:this.storageKey,autoSave:this.autoSave,grid:this.gridSize}),(Ue=this._applyDashboardThemeStyling_)==null||Ue.call(this),!window.jsyaml){let Ge=document.createElement("script");Ge.src="https://cdnjs.cloudflare.com/ajax/libs/js-yaml/4.1.0/js-yaml.min.js",document.head.appendChild(Ge)}if(!window.interact){let Ge=document.createElement("script");Ge.src="https://cdn.jsdelivr.net/npm/interactjs/dist/interact.min.js",Ge.onload=()=>this._initInteract(),document.head.appendChild(Ge)}if(this._helpersPromise=typeof window.loadCardHelpers=="function"?window.loadCardHelpers().catch(()=>null):Promise.resolve(null),!this._built){this._built=!0,this.shadowRoot.innerHTML=`
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
  border-radius:28px;
  border:1px solid color-mix(in srgb, var(--divider-color, rgba(255,255,255,.12)) 82%, transparent);
  background:
    linear-gradient(180deg, color-mix(in srgb, var(--card-background-color, #151922) 92%, rgba(255,255,255,.08)) 0%, color-mix(in srgb, var(--card-background-color, #151922) 98%, rgba(0,0,0,.18)) 100%);
  box-shadow:0 26px 72px rgba(0,0,0,.34);
  backdrop-filter:blur(22px) saturate(1.08);
  -webkit-backdrop-filter:blur(22px) saturate(1.08);
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
  border-radius:16px;
  border:1px solid color-mix(in srgb, var(--divider-color, rgba(255,255,255,.12)) 74%, transparent);
  background:
    linear-gradient(180deg, rgba(255,255,255,.06) 0%, rgba(255,255,255,.025) 100%);
  color:var(--primary-text-color, #fff);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.05),
    0 8px 18px rgba(0,0,0,.18);
  transition:transform .16s ease, border-color .18s ease, background .18s ease, box-shadow .18s ease;
}
.ddc-connector-close:hover{
  transform:translateY(-1px);
  border-color:color-mix(in srgb, var(--primary-color, #ff9800) 26%, rgba(255,255,255,.18));
  background:
    linear-gradient(180deg, rgba(255,255,255,.09) 0%, rgba(255,255,255,.04) 100%);
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
  border-radius:22px;
  border:1px solid color-mix(in srgb, var(--divider-color, rgba(255,255,255,.12)) 72%, transparent);
  background:
    linear-gradient(180deg, color-mix(in srgb, var(--card-background-color, #151922) 88%, rgba(255,255,255,.06)) 0%, color-mix(in srgb, var(--card-background-color, #151922) 95%, rgba(0,0,0,.12)) 100%);
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
  background:
    linear-gradient(180deg, rgba(255,255,255,.045) 0%, rgba(255,255,255,.02) 100%);
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
  border-radius:16px;
  border:1px solid color-mix(in srgb, var(--divider-color, rgba(255,255,255,.12)) 72%, transparent);
  background:
    linear-gradient(180deg, rgba(255,255,255,.055) 0%, rgba(255,255,255,.025) 100%);
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
  background:
    linear-gradient(180deg, rgba(255,255,255,.07) 0%, rgba(255,255,255,.03) 100%);
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
.ddc-connector-state-chip{
  appearance:none;
  border:1px solid color-mix(in srgb, var(--divider-color, rgba(255,255,255,.12)) 74%, transparent);
  background:
    linear-gradient(180deg, rgba(255,255,255,.045) 0%, rgba(255,255,255,.02) 100%);
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
  border-radius:16px;
  border:1px solid color-mix(in srgb, var(--divider-color, rgba(255,255,255,.12)) 68%, transparent);
  background:rgba(255,255,255,.03);
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
  border-radius:16px;
  font-size:.92rem;
  font-weight:700;
  letter-spacing:.01em;
  transition:transform .16s ease, border-color .18s ease, background .18s ease, box-shadow .18s ease, filter .18s ease;
}
.ddc-connector-inspector .btn:hover{
  transform:translateY(-1px);
}
.ddc-connector-inspector .btn.secondary{
  border:1px solid color-mix(in srgb, var(--divider-color, rgba(255,255,255,.12)) 74%, transparent);
  background:
    linear-gradient(180deg, rgba(255,255,255,.055) 0%, rgba(255,255,255,.025) 100%);
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
          <div class="card-container" id="cardContainer">
            <!-- host for particles.js / YouTube backgrounds -->
            <div class="ddc-bg-host" id="ddcBgHost" aria-hidden="true"></div>
          </div>
          <aside class="ddc-connector-inspector" id="connectorInspector" hidden aria-live="polite"></aside>



      `,this.cardContainer=this.shadowRoot.querySelector("#cardContainer");try{(rt=this._applyBackgroundFromConfig)==null||rt.call(this)}catch{}try{(fe=this._updateScreensaverSettings)==null||fe.call(this)}catch{}this.addButton=this.shadowRoot.querySelector("#addCardBtn"),this.reloadBtn=this.shadowRoot.querySelector("#reloadBtn"),this.diagBtn=this.shadowRoot.querySelector("#diagBtn"),this.exitEditBtn=this.shadowRoot.querySelector("#exitEditBtn"),this.storeBadge=this.shadowRoot.querySelector("#storeBadge"),this.exportBtn=this.shadowRoot.querySelector("#exportBtn"),this.importBtn=this.shadowRoot.querySelector("#importBtn"),this.exploreBtn=this.shadowRoot.querySelector("#exploreBtn"),this.applyLayoutBtn=this.shadowRoot.querySelector("#applyLayoutBtn"),this.toolbarToggleBtn=this.shadowRoot.querySelector("#toolbarToggleBtn"),this.copyBtn=this.shadowRoot.querySelector("#copyBtn"),this.pasteBtn=this.shadowRoot.querySelector("#pasteBtn"),this.lineModeBtn=this.shadowRoot.querySelector("#lineModeBtn"),this.settingsBtn=this.shadowRoot.querySelector("#settingsBtn"),this.tabsBar=this.shadowRoot.querySelector("#tabsBar"),this.rootEl=this.shadowRoot.querySelector(".ddc-root"),this.previewModeControls=this.shadowRoot.querySelector("#previewModeControls"),this.previewModeButtons=Array.from(this.shadowRoot.querySelectorAll("[data-preview-mode]")),this.previewMeta=this.shadowRoot.querySelector("#previewModeMeta"),this.previewWidthInput=this.shadowRoot.querySelector("#previewWidthInput"),this.previewHeightInput=this.shadowRoot.querySelector("#previewHeightInput"),this.previewSwapButton=this.shadowRoot.querySelector("#previewSwapButton"),this.shadowRoot.querySelectorAll(".ddc-toolbar [data-tooltip]").forEach(ke=>{try{let Ie=String(ke.getAttribute("data-tooltip")||"").trim();Ie&&!ke.getAttribute("title")&&ke.setAttribute("title",Ie)}catch{}}),(me=this.toolbarToggleBtn)==null||me.addEventListener("click",()=>{var ke;(ke=this._setToolbarExpanded_)==null||ke.call(this,!this.__toolbarExpanded)});try{(ye=this._ensureStreamlinedToolbarObserver_)==null||ye.call(this)}catch{}this.previewModeButtons.forEach(ke=>{ke.addEventListener("click",()=>this._setViewportPreviewMode_(ke.dataset.previewMode||"live"))});let Ge=()=>{var ke;return(ke=this._commitResponsiveViewportField_)==null?void 0:ke.call(this,"width")},ct=()=>{var ke;return(ke=this._commitResponsiveViewportField_)==null?void 0:ke.call(this,"height")};(Ve=this.previewWidthInput)==null||Ve.addEventListener("change",Ge),(dt=this.previewWidthInput)==null||dt.addEventListener("blur",Ge),(Qe=this.previewHeightInput)==null||Qe.addEventListener("change",ct),(je=this.previewHeightInput)==null||je.addEventListener("blur",ct),(ut=this.previewWidthInput)==null||ut.addEventListener("keydown",ke=>{var Ie,ht;ke.key==="Enter"&&(ke.preventDefault(),Ge(),(ht=(Ie=this.previewWidthInput)==null?void 0:Ie.blur)==null||ht.call(Ie))}),(yt=this.previewHeightInput)==null||yt.addEventListener("keydown",ke=>{var Ie,ht;ke.key==="Enter"&&(ke.preventDefault(),ct(),(ht=(Ie=this.previewHeightInput)==null?void 0:Ie.blur)==null||ht.call(Ie))}),(bt=this.previewWidthInput)==null||bt.addEventListener("wheel",ke=>{ke.preventDefault(),ke.stopPropagation()},{passive:!1}),(Pt=this.previewHeightInput)==null||Pt.addEventListener("wheel",ke=>{ke.preventDefault(),ke.stopPropagation()},{passive:!1}),(Oe=this.previewSwapButton)==null||Oe.addEventListener("click",()=>{var ke;return(ke=this._swapResponsiveViewportOrientation_)==null?void 0:ke.call(this)});try{(Ke=this._syncViewportPreviewUI_)==null||Ke.call(this)}catch{}try{this._renderTabs(),this._applyActiveTab()}catch{}try{(vt=this._syncConnectorUiState_)==null||vt.call(this)}catch{}if(this._applyGridVars(),this.__uiBindingsReady||((Ct=this.addButton)==null||Ct.addEventListener("click",()=>{this.editMode||this._toggleEditMode(!0),this._openCardManager()}),(It=this.reloadBtn)==null||It.addEventListener("click",()=>this._initialLoad(!0)),(Bt=this.diagBtn)==null||Bt.addEventListener("click",()=>this._openDiagnostics()),(Rt=this.exitEditBtn)==null||Rt.addEventListener("click",()=>this._toggleEditMode(!1)),(Lt=this.exportBtn)==null||Lt.addEventListener("click",()=>this._exportDesign()),(ii=this.importBtn)==null||ii.addEventListener("click",()=>this._importDesign()),(oe=this.applyLayoutBtn)==null||oe.addEventListener("click",()=>this._saveLayout(!1)),(ae=this.copyBtn)==null||ae.addEventListener("click",()=>this._copySelection()),(He=this.pasteBtn)==null||He.addEventListener("click",()=>this._pasteClipboard()),(De=this.lineModeBtn)==null||De.addEventListener("click",()=>{var ke;return(ke=this._toggleConnectorDrawMode_)==null?void 0:ke.call(this)}),(Le=this.settingsBtn)==null||Le.addEventListener("click",()=>this._openDashboardSettings()),(ze=this.exploreBtn)==null||ze.addEventListener("click",()=>window.open("https://hads.smarti.dev/","_blank","noopener,noreferrer")),this.__saveShortcutHandler=ke=>{this.editMode&&(ke.ctrlKey||ke.metaKey)&&(ke.key==="s"||ke.key==="S")&&(ke.preventDefault(),this._saveLayout(!1))},window.addEventListener("keydown",this.__saveShortcutHandler),this.__escapeShortcutHandler=ke=>{var lt,pt,ft,gt,Ze,Se,et,Xe,nt,Ee;if(!this.editMode)return;let Ie=ke.target,ht=!!((lt=Ie==null?void 0:Ie.closest)!=null&&lt.call(Ie,"input, textarea, select, ha-code-editor, .CodeMirror"));if(ke.key==="Escape"){if((pt=this._isConnectorSettingsOpen_)!=null&&pt.call(this)){ke.preventDefault(),(ft=this._closeConnectorSettings_)==null||ft.call(this);return}if(this._connectorDrawMode||(Ze=(gt=this._connectorDraft)==null?void 0:gt.points)!=null&&Ze.length){ke.preventDefault(),(Se=this._cancelConnectorDraft_)==null||Se.call(this);return}this._toggleEditMode(!1);return}if(!ht){if(ke.key==="Enter"&&this._connectorDrawMode&&((Xe=(et=this._connectorDraft)==null?void 0:et.points)==null?void 0:Xe.length)>=2){ke.preventDefault(),(nt=this._finalizeConnectorDraft_)==null||nt.call(this,{openSettings:!0});return}if((ke.key==="Delete"||ke.key==="Backspace")&&this._selectedConnectorId){ke.preventDefault();let ve=this._selectedConnectorId;this._selectedConnectorId=null,this._setCurrentConnectorEntries_((this._getCurrentConnectorEntries_()||[]).filter(pe=>pe.id!==ve),{reason:"connector-delete",render:!0}),(Ee=this._closeConnectorSettings_)==null||Ee.call(this)}}},window.addEventListener("keydown",this.__escapeShortcutHandler),this.__containerBlankMouseDown=ke=>{var ht,lt,pt;if(!this.editMode||ke.target.closest(".card-wrapper"))return;let Ie=(ht=this._ensureConnectorsLayer_)==null?void 0:ht.call(this);Ie&&Ie.contains(ke.target)||!ke.shiftKey&&!ke.ctrlKey&&!ke.metaKey&&(this._clearSelection(),this._selectedConnectorId&&(this._selectedConnectorId=null,(lt=this._closeConnectorSettings_)==null||lt.call(this),(pt=this._renderConnectors_)==null||pt.call(this)))},(Q=this.cardContainer)==null||Q.addEventListener("mousedown",this.__containerBlankMouseDown),this.__uiBindingsReady=!0),!this.__ddcResizeObs&&this.autoResizeCards){this.__ddcResizeObs=new ResizeObserver(()=>{var ke;return(ke=this._applyAutoScale)==null?void 0:ke.call(this)});try{this.__ddcResizeObs.observe(this)}catch{}try{this.__ddcResizeObs.observe(this.cardContainer)}catch{}try{this.parentElement&&this.__ddcResizeObs.observe(this.parentElement)}catch{}try{this.offsetParent&&this.__ddcResizeObs.observe(this.offsetParent)}catch{}}else if(this.__ddcResizeObs&&!this.autoResizeCards){try{this.__ddcResizeObs.disconnect()}catch{}this.__ddcResizeObs=null}this._applyContainerSizingFromConfig(!0),(Ce=this._applyAutoScale)==null||Ce.call(this),this._installLongPressToEnterEdit(),(tt=this._startScaleWatch)==null||tt.call(this),this.__selectionMarqueeInstalled||(this._installSelectionMarquee(),this.__selectionMarqueeInstalled=!0)}try{this._isInHaEditorPreview()||this._queueSave("config-change")}catch{}this._updateStoreBadge(),this.cardContainer&&this._toggleEditMode(!1),this.__cfgReady=!0,c&&this.__booted?this._initialLoad(!0):!this.__booted&&this.__probed?(this.__booted=!0,this._initialLoad()):(this._applyContainerSizingFromConfig(!0),(ie=this._applyAutoScale)==null||ie.call(this),this._resizeContainer())}_startInitialAutosize(){var e,t;try{if(this.__autoInitStarted)return;this.__autoInitStarted=!0;let r=!1,a=()=>{r||(r=!0,requestAnimationFrame(()=>{var p;r=!1;try{(p=this._applyAutoScale)==null||p.call(this)}catch{}}))};requestAnimationFrame(()=>{a(),requestAnimationFrame(a)}),setTimeout(a,0);try{(t=(e=document.fonts)==null?void 0:e.ready)==null||t.then(a)}catch{}let s=String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase(),c=this.cardContainer||this.querySelector("#cardContainer");if(!c)return;let l={childList:!0,subtree:!0,attributes:!0,attributeFilter:["style","class"]},g={childList:!0,subtree:!0},h=this.autoResizeCards||s==="auto",u=new MutationObserver(()=>a());u.observe(c,h?l:g),this.__autoInitMO=u,setTimeout(()=>{try{u.disconnect()}catch{}this.__autoInitMO=null},2e3)}catch{}}connectedCallback(){var e,t,r,a,s;try{this._installGridObservers_(),this._updateGridButtonsVisibility()}catch{}(e=this._startInitialAutosize)==null||e.call(this);try{(t=this._applyHaChromeVisibility_)==null||t.call(this),requestAnimationFrame(()=>{var c;return(c=this._syncPageBackgroundToView_)==null?void 0:c.call(this)}),(r=this._ensureScreenSaverStyles)==null||r.call(this),(a=this._updateScreensaverSettings)==null||a.call(this)}catch{}if(this.__autoFillAfterDragHandler||(this.__autoFillAfterDragHandler=()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var l;return(l=this._applyAutoFillNoScale)==null?void 0:l.call(this)})}),this.removeEventListener("ddc:dragend",this.__autoFillAfterDragHandler),this.addEventListener("ddc:dragend",this.__autoFillAfterDragHandler),this.__keyHandlerBound||(this.__keyHandler=c=>this._onKeyDown_(c),window.addEventListener("keydown",this.__keyHandler),this.__keyHandlerBound=!0),this.__boundExitEdit||(this.__boundExitEdit=()=>this._toggleEditMode(!1)),window.addEventListener("pagehide",this.__boundExitEdit),window.addEventListener("beforeunload",this.__boundExitEdit),this.__onVis||(this.__onVis=()=>{document.visibilityState==="hidden"&&this._toggleEditMode(!1)}),document.addEventListener("visibilitychange",this.__onVis),this._toggleEditMode(!1),!this.__visObs){let c=new IntersectionObserver(l=>{l.some(g=>g.isIntersecting)&&requestAnimationFrame(()=>{var g;return(g=this._applyAutoScale)==null?void 0:g.call(this)})});c.observe(this),this.__visObs=c}this.__ddcOnWinResize=this.__ddcOnWinResize||(()=>{var c,l,g,h,u,p;if(this.hasAttribute("ddc-fixed-ui"))try{(c=this._computeHaSidebarGutters_)==null||c.call(this)}catch{}try{(l=this._computeHaTopGutter_)==null||l.call(this)}catch{}(g=this._syncResponsiveProfileForViewport_)==null||g.call(this),(h=this._applyAutoScale)==null||h.call(this),(u=this._refreshToolbarOpenHeight_)==null||u.call(this),(p=this._refreshTabsAlignment_)==null||p.call(this)});try{let c=String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase();this.autoResizeCards||c==="auto"?window.addEventListener("resize",this.__ddcOnWinResize):window.removeEventListener("resize",this.__ddcOnWinResize)}catch{}try{(s=this.__ddcBindPointerListeners)==null||s.call(this)}catch{}}disconnectedCallback(){var e,t,r,a,s,c,l,g,h,u,p,m;try{this._uninstallGridObservers_()}catch{}try{(e=this._setHeaderVisible_)==null||e.call(this,!0),(t=this._setSidebarVisible_)==null||t.call(this,!0)}catch{}try{(r=this._applyHaChromeVisibility_)==null||r.call(this)}catch{}try{(a=this._clearPageBackground_)==null||a.call(this)}catch{}this.__keyHandlerBound&&this.__keyHandler&&(window.removeEventListener("keydown",this.__keyHandler),this.__keyHandlerBound=!1,this.__keyHandler=null),this.__saveShortcutHandler&&(window.removeEventListener("keydown",this.__saveShortcutHandler),this.__saveShortcutHandler=null),this.__escapeShortcutHandler&&(window.removeEventListener("keydown",this.__escapeShortcutHandler),this.__escapeShortcutHandler=null),this.__containerBlankMouseDown&&((s=this.cardContainer)==null||s.removeEventListener("mousedown",this.__containerBlankMouseDown),this.__containerBlankMouseDown=null),this.__uiBindingsReady=!1;try{(c=this._destroyParticles_)==null||c.call(this)}catch{}try{(l=this._destroyYouTube_)==null||l.call(this)}catch{}window.removeEventListener("pagehide",this.__boundExitEdit),window.removeEventListener("beforeunload",this.__boundExitEdit),document.removeEventListener("visibilitychange",this.__onVis),this.__autoFillAfterDragHandler&&this.removeEventListener("ddc:dragend",this.__autoFillAfterDragHandler);try{this._screensaverTimer&&(clearTimeout(this._screensaverTimer),this._screensaverTimer=null),this._clockInterval&&(clearInterval(this._clockInterval),this._clockInterval=null),this._screensaverActivityHandler&&(this._screensaverEvents||[]).forEach(_=>{document.removeEventListener(_,this._screensaverActivityHandler,!0)}),this.screenSaverOverlay&&this.screenSaverOverlay.parentNode&&this.screenSaverOverlay.parentNode.removeChild(this.screenSaverOverlay)}catch{}try{(g=this.__ddcResizeObs)==null||g.disconnect()}catch{}this.__ddcResizeObs=null,(h=this._stopScaleWatch)==null||h.call(this),this.__ddcOnWinResize&&(window.removeEventListener("resize",this.__ddcOnWinResize),this.__ddcOnWinResize=null);try{(u=this.__streamlinedToolbarRO)==null||u.disconnect()}catch{}if(this.__streamlinedToolbarRO=null,this.__streamlinedToolbarROTarget=null,this.__lpInstalled&&this.__lpHandlers){let x=this.cardContainer;x==null||x.removeEventListener("mousedown",this.__lpHandlers.mouseDown),window.removeEventListener("mousemove",this.__lpHandlers.mouseMove),window.removeEventListener("mouseup",this.__lpHandlers.mouseUp),window.removeEventListener("contextmenu",this.__lpHandlers.contextMenu),x==null||x.removeEventListener("touchstart",this.__lpHandlers.touchStart),window.removeEventListener("touchmove",this.__lpHandlers.touchMove),window.removeEventListener("touchend",this.__lpHandlers.touchEnd),window.removeEventListener("touchcancel",this.__lpHandlers.touchCancel),this.__lpInstalled=!1,this.__lpHandlers=null}try{(m=(p=this.__visObs)==null?void 0:p.disconnect)==null||m.call(p)}catch{}this.__visObs=null;try{this.__ddcPtrBound&&(this.removeEventListener("pointerdown",this.__onDDCPointerDown),this.removeEventListener("pointermove",this.__onDDCPointerMove),window.removeEventListener("pointerup",this.__onDDCPointerUp),window.removeEventListener("pointercancel",this.__onDDCPointerUp),this.__ddcPtrBound=!1)}catch{}}set hass(e){var r,a,s;this._hass=e,!this.__probed&&e&&(this.__probed=!0,this._probeBackend().then(()=>{this.__probed=!0,!this.__booted&&this.__cfgReady&&(this.__booted=!0,this._initialLoad(!0))}));let t=((r=this.cardContainer)==null?void 0:r.children)||[];for(let c of t){let l=c.firstElementChild;l&&l.hass!==e&&(l.hass=e)}(a=this._scheduleVisibilityRefresh_)==null||a.call(this),(s=this._scheduleVisualRefresh_)==null||s.call(this)}get hass(){return this._hass}async _initialLoad(e=!1){var t,r,a,s,c,l,g,h,u,p,m;if(!this.__booting){this.__booting=!0;try{this._loading=!0,e&&this.cardContainer&&((t=this._restoreBackgroundHostToContainer_)==null||t.call(this)),this._dbgPush("boot","Initial load start",{force:e});let x=[],_=null;if(this._backendOK&&this.storageKey)try{_=await this._loadLayoutFromBackend(this.storageKey)}catch(E){this._dbgPush("boot","Backend load failed",{error:String(E)})}if(!_&&this.storageKey){let E=null;try{E=JSON.parse(localStorage.getItem(`ddc_local_${this.storageKey}`)||"null")}catch{}if(E)if(this._dbgPush("boot","Found local snapshot",{bytes:JSON.stringify(E).length}),this._backendOK)try{await this._saveLayoutToBackend(this.storageKey,E),this._dbgPush("boot","Migrated local -> backend"),_=E}catch(R){this._dbgPush("boot","Migration failed, staying local",{error:String(R)}),_=E}else _=E}!_&&((a=(r=this._config)==null?void 0:r.cards)!=null&&a.length)&&(this._dbgPush("boot","Using embedded config"),_={cards:this._config.cards}),this._setDashboardPackages_((_==null?void 0:_.packages)||[]);let P={...this._config||{}};if(_!=null&&_.options){let{storage_key:E,...R}=_.options;this._applyImportedOptions(R,!0)}else typeof(_==null?void 0:_.grid)=="number"&&this._applyImportedOptions({grid:_.grid},!0);let O=["storage_key","grid","drag_live_snap","auto_save","auto_save_debounce","container_background","card_background","card_shadow","debug","disable_overlap","container_size_mode","container_fixed_width","container_fixed_height","container_preset","container_preset_orientation","tabs","tabs_position","default_tab","hide_tabs_when_single","auto_resize_cards","optimize_for_mobile","mobile_dynamic_behavior","do_not_resize_text","outer_grid_buffer","dashboard_theme_enabled","dashboard_theme","dashboard_theme_override_all_design","background_mode","background_image","background_particles","background_youtube","responsive_viewports","screen_saver_enabled","screen_saver_delay"],C={};for(let E of O)P[E]!==void 0&&(C[E]=P[E]);Object.keys(C).length&&this._applyImportedOptions(C,!0),this.responsiveViewportProfiles=this._normalizeResponsiveViewportProfiles_(((s=_==null?void 0:_.options)==null?void 0:s.responsive_viewports)||(P==null?void 0:P.responsive_viewports)||this.responsiveViewportProfiles),this._responsiveLayouts=this._normalizeResponsiveLayouts_((_==null?void 0:_.cards)||[],(_==null?void 0:_.responsive_layouts)||null);let S=((c=this._getRequestedResponsiveProfile_)==null?void 0:c.call(this))||"desktop",v=((l=this._getRequestedResponsiveOrientation_)==null?void 0:l.call(this,S))||"landscape",b=this._getResponsiveLayoutKey_(S,v);this._activeResponsiveProfile=S,this._activeResponsiveLayoutKey=b;let A=((g=this._responsiveLayouts)==null?void 0:g[b])||[];await this._buildCardsFromEntries_(A),A.length?this._dbgPush("boot","Layout applied",{count:A.length,profile:b}):this._dbgPush("boot","No saved layout found; showing placeholder"),this._updateStoreBadge(),this._syncEmptyStateUI(),e&&(this._cardModProcessed=!1),setTimeout(()=>{this._processCardModOnce()},100);try{x.forEach(E=>{try{E.dispatchEvent(new Event("ll-rebuild",{bubbles:!0,composed:!0}))}catch{}})}catch{}}finally{this._loading=!1,this.__booting=!1,this.__dirty=!1,(h=this._updateApplyBtn)==null||h.call(this);try{this._renderTabs(),this._applyActiveTab()}catch{}try{this._applyVisibility_()}catch{}try{let x=(p=(u=this.cardContainer)==null?void 0:u.querySelector)==null?void 0:p.call(u,"#ddcBgHost");(!x||!x.firstChild)&&((m=this._applyBackgroundFromConfig)==null||m.call(this))}catch{}}}}_normalizeTabId(e){let t=Array.isArray(this.tabs)?this.tabs.map(r=>r.id):[];return t.length?e&&t.includes(e)?e:this.defaultTab||t[0]:this.defaultTab||"default"}_renderTabs(){var a,s,c,l,g,h,u,p,m,x,_,P,O;let e=this.tabsBar;if(!e)return;let t=Array.isArray(this.tabs)?this.tabs:[];if((a=this._syncTabsPlacement_)==null||a.call(this),!t.length||t.length===1&&this.hideTabsWhenSingle){e.style.display="none",(l=(c=(s=this.rootEl)==null?void 0:s.classList)==null?void 0:c.remove)==null||l.call(c,"ddc-tabs-left-layout"),(u=(h=(g=this.rootEl)==null?void 0:g.classList)==null?void 0:h.remove)==null||u.call(h,"ddc-tabs-bottom-layout");return}e.style.display="";let r=["ddc-tabs"];this.tabsPosition==="left"&&r.push("ddc-tabs-left"),this.tabsPosition==="bottom"&&r.push("ddc-tabs-bottom"),e.className=r.join(" "),e.innerHTML="";try{e.style.width="",e.style.maxWidth=""}catch{}for(let C of t){let S=document.createElement("button");S.className=["ddc-tab",C.icon?"ddc-tab--has-icon":"",C.id===this.activeTab?"active":""].filter(Boolean).join(" "),S.dataset.tabId=C.id,S.title=C.label||C.id,S.setAttribute("aria-label",C.label||C.id),S.innerHTML=`${C.icon?`<ha-icon icon="${C.icon}"></ha-icon>`:""}<span class="ddc-tab-label">${(p=C.label)!=null?p:C.id}</span>`,S.addEventListener("click",()=>{var v,b,A;if(this.activeTab!==C.id){this.activeTab=C.id;try{localStorage.setItem(`ddc_lasttab_${this.storageKey}`,C.id)}catch{}this._applyActiveTab(),this._renderTabs();try{this._applyVisibility_()}catch{}try{let E=(b=(v=this.cardContainer)==null?void 0:v.querySelector)==null?void 0:b.call(v,"#ddcBgHost");(!E||!E.firstChild)&&((A=this._applyBackgroundFromConfig)==null||A.call(this))}catch{}}}),e.appendChild(S)}(m=this._syncTabsPlacement_)==null||m.call(this);try{(x=this._updateTabsA11y_)==null||x.call(this)}catch{}try{(_=this._syncTabsWidth_)==null||_.call(this)}catch{}try{let C=(P=e.querySelector)==null?void 0:P.call(e,".ddc-tab.active");C&&e.scrollWidth>e.clientWidth&&C.scrollIntoView({behavior:"auto",block:"nearest",inline:"nearest"})}catch{}try{(O=this._refreshTabsAlignment_)==null||O.call(this)}catch{}}_applyActiveTab(){var r,a,s,c,l,g;let e=this._normalizeTabId(this.activeTab);(((a=(r=this.cardContainer)==null?void 0:r.querySelectorAll)==null?void 0:a.call(r,".card-wrapper"))||[]).forEach(h=>{let u=h.dataset.tabId?this._normalizeTabId(h.dataset.tabId):this.defaultTab;if(!this.tabs||!this.tabs.length){h.style.display="",h.inert=!1,h.classList.remove("ddc-hidden");return}u===e?(h.style.display="",h.inert=!1,h.classList.remove("ddc-hidden")):(h.style.display="none",h.inert=!0,h.classList.add("ddc-hidden"),h.classList.remove("ddc-selected"))});try{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(s=this._applyAutoFillNoScale)==null||s.call(this):(c=this._applyAutoScale)==null||c.call(this)}catch{}try{this._clearSelection()}catch{}try{(l=this._animateCards)==null||l.call(this)}catch{}try{(g=this._renderConnectors_)==null||g.call(this)}catch{}}_animateCards(){var e,t,r,a;try{let s=((t=(e=this.cardContainer)==null?void 0:e.querySelectorAll)==null?void 0:t.call(e,".card-wrapper"))||[],c=(a=(r=window.matchMedia)==null?void 0:r.call(window,"(prefers-reduced-motion: reduce)"))==null?void 0:a.matches,l=800,g=.8,u=l*.3,p=l-u;s.forEach(m=>{var R,D,M,F;let x=(R=window.getComputedStyle)==null?void 0:R.call(window,m);if(m.style.display==="none"||x&&x.display==="none"||m.classList.contains("ddc-hidden"))return;let P=((D=this._extractPerCardStyle_)==null?void 0:D.call(this,m))||{},O=String(P.animate_cards||"").toLowerCase();if(!(O==="on"||O!=="off"&&this.animateCards))return;let S=x&&x.transform&&x.transform!=="none"?x.transform:"",v=100*g,b=`${S} translate3d(0, ${v}%, 0)`,A=`${S} translate3d(0, 0, 0)`,E=Math.random()*(p*Math.min(g,2));if(c){try{m.animate([{opacity:0},{opacity:1}],{duration:l*.15,delay:E,easing:"linear",fill:"backwards"})}catch{m.style.opacity="0",setTimeout(()=>{m.style.transition=`opacity ${l*.15}ms linear`,m.style.opacity="1"},E)}return}try{m.style.willChange="opacity, transform";let N="cubic-bezier(0.4, 0, 0.2, 1)";m.animate([{opacity:0},{opacity:1}],{duration:u,delay:E,easing:"linear",fill:"backwards"}),(F=(M=m.animate([{transform:b},{transform:A}],{duration:u,delay:E,easing:N,fill:"backwards"})).addEventListener)==null||F.call(M,"finish",()=>{m.style.willChange=""})}catch{m.style.opacity="0",m.style.transform=b,m.style.willChange="opacity, transform",setTimeout(()=>{m.style.transition=`opacity ${u}ms linear, transform ${u}ms cubic-bezier(0.4,0,0.2,1)`,m.style.opacity="1",m.style.transform=A,setTimeout(()=>{m.style.transition="",m.style.willChange=""},u+60)},E)}})}catch(s){console.warn("[ddc:animate] animation error",s)}}_addTabSelectorToChip(e,t=null){if(!this.tabs||!this.tabs.length)return;let r=e.querySelector(".chip");if(!r)return;let a=r.querySelector("select.ddc-chip-tab");a||(a=document.createElement("select"),a.className="ddc-chip-tab",a.style.marginLeft="6px",a.title="Assign to tab",r.appendChild(a)),a.innerHTML="";for(let l of this.tabs){let g=document.createElement("option");g.value=l.id,g.textContent=l.label||l.id,a.appendChild(g)}let s=this._normalizeTabId(t||e.dataset.tabId||this.activeTab||this.defaultTab);a.value=s,e.dataset.tabId=s,a.onchange=()=>{var l,g,h;e.dataset.tabId=this._normalizeTabId(a.value),this._applyActiveTab();try{this._applyVisibility_()}catch{}try{let u=(g=(l=this.cardContainer)==null?void 0:l.querySelector)==null?void 0:g.call(l,"#ddcBgHost");(!u||!u.firstChild)&&((h=this._applyBackgroundFromConfig)==null||h.call(this))}catch{}try{this._queueSave("tab-change")}catch{}};let c=l=>l.stopPropagation();a.addEventListener("mousedown",c),a.addEventListener("pointerdown",c),a.addEventListener("touchstart",c)}_normalizePerCardStyle_(e={}){let t={};for(let r of["background","container_background","text_color","border_color"]){let a=e==null?void 0:e[r];if(a==null)continue;let s=String(a).trim();s&&(t[r]=s)}for(let r of["animate_cards","card_shadow"]){let a=String((e==null?void 0:e[r])||"").trim().toLowerCase();(a==="on"||a==="off")&&(t[r]=a)}return t}_extractPerCardStyle_(e){if(!e)return{};try{return this._normalizePerCardStyle_(JSON.parse(e.dataset.cardStyle||"{}")||{})}catch{return{}}}_applyPerCardStyle_(e,t=null,{persist:r=!0}={}){var h;if(!e)return{};let a=this._normalizePerCardStyle_(t||{}),s=(h=this._isDashboardThemeOverrideAllDesignActive_)==null?void 0:h.call(this),c=s?"":a.background||a.container_background||"",l=s?"":a.container_background||a.background||"";c?e.style.setProperty("--ddc-card-local-bg",c):e.style.removeProperty("--ddc-card-local-bg"),l?(e.style.setProperty("--ddc-card-inner-bg",l),e.style.setProperty("--ha-card-background",l),e.style.setProperty("--card-background-color",l),e.style.setProperty("--paper-card-background-color",l)):(e.style.removeProperty("--ddc-card-inner-bg"),e.style.removeProperty("--ha-card-background"),e.style.removeProperty("--card-background-color"),e.style.removeProperty("--paper-card-background-color")),!s&&a.border_color?e.style.setProperty("--ddc-card-border-color",a.border_color):e.style.removeProperty("--ddc-card-border-color"),s?e.style.removeProperty("--ddc-card-local-shadow"):a.card_shadow==="off"?e.style.setProperty("--ddc-card-local-shadow","none"):a.card_shadow==="on"?e.style.setProperty("--ddc-card-local-shadow","0 8px 24px rgba(0,0,0,.35)"):e.style.removeProperty("--ddc-card-local-shadow");let g=["--primary-text-color","--text-primary-color","--paper-item-icon-color","--state-icon-color","--mdc-theme-text-primary-on-background"];return!s&&a.text_color?(e.style.color=a.text_color,g.forEach(u=>e.style.setProperty(u,a.text_color))):(e.style.removeProperty("color"),g.forEach(u=>e.style.removeProperty(u))),r&&(Object.keys(a).length?e.dataset.cardStyle=JSON.stringify(a):delete e.dataset.cardStyle),a}_closeCardSettingsMenu_(){var t,r,a;let e=this.__cardSettingsMenu;if(e){try{(t=e.cleanup)==null||t.call(e)}catch{}try{(a=(r=e.menu)==null?void 0:r.remove)==null||a.call(r)}catch{}this.__cardSettingsMenu=null}}_positionCardSettingsMenu_(){let e=this.__cardSettingsMenu;if(!(e!=null&&e.menu)||!(e!=null&&e.wrap))return;let{menu:t,wrap:r}=e;if(!t.isConnected||!r.isConnected){this._closeCardSettingsMenu_();return}let a=r.getBoundingClientRect(),s=12,c=Math.max(1,window.innerWidth||document.documentElement.clientWidth||1),l=Math.max(1,window.innerHeight||document.documentElement.clientHeight||1),g=Math.max(220,t.offsetWidth||320),h=Math.max(120,t.offsetHeight||360),u=a.left+(a.width-g)/2,p=a.top+(a.height-h)/2;a.height<h*.6&&(p=a.top+Math.min(40,a.height*.5)),u=Math.min(Math.max(s,u),Math.max(s,c-g-s)),p=Math.min(Math.max(s,p),Math.max(s,l-h-s)),t.style.left=`${Math.round(u)}px`,t.style.top=`${Math.round(p)}px`}_openCardSettingsMenu(e){var ee,ue,se,ge,ce;if(!e)return;if(((ee=this.__cardSettingsMenu)==null?void 0:ee.wrap)===e){this._closeCardSettingsMenu_();return}this._closeCardSettingsMenu_();let t=document.createElement("div");t.className="ddc-card-settings";let r=getComputedStyle(this),a=(...H)=>{for(let V of H){let J=String(r.getPropertyValue(V)||"").trim();if(J&&!/^transparent$/i.test(J)&&!/rgba?\([^)]*,\s*0(?:\.0+)?\s*\)/i.test(J))return J}return"#1f2329"},s=a("--ha-card-background","--card-background-color","--primary-background-color"),c=a("--secondary-background-color","--card-background-color","--primary-background-color");Object.assign(t.style,{position:"fixed",top:"0",left:"0",transform:"none",zIndex:"100000",background:s,border:"1px solid var(--divider-color, rgba(0,0,0,.3))",borderRadius:"12px",padding:"14px",boxShadow:"0 10px 24px rgba(0,0,0,.4)",color:"var(--primary-text-color, #f5f5f5)",minWidth:"220px",maxWidth:"min(340px, calc(100vw - 24px))",maxHeight:"min(560px, calc(100vh - 24px))",display:"flex",flexDirection:"column",gap:"12px",fontSize:".875rem",opacity:"1",mixBlendMode:"normal",overflow:"auto",pointerEvents:"auto",overscrollBehavior:"contain",backdropFilter:"none",WebkitBackdropFilter:"none"});let l=H=>H.stopPropagation();t.addEventListener("pointerdown",l,!0),t.addEventListener("mousedown",l,!0),t.addEventListener("touchstart",l,!0);let g=document.createElement("div");g.textContent="Card Settings",Object.assign(g.style,{fontWeight:"600",fontSize:"1rem",marginBottom:"4px",color:"var(--primary-text-color, #f5f5f5)"}),t.appendChild(g);let h=document.createElement("button");h.className="mini",Object.assign(h.style,{position:"absolute",top:"4px",right:"4px",border:"none",background:"transparent",color:"var(--secondary-text-color, #9ca3af)",cursor:"pointer",width:"24px",height:"24px",display:"flex",alignItems:"center",justifyContent:"center"}),h.setAttribute("title","Close"),h.setAttribute("aria-label","Close settings"),h.innerHTML='<ha-icon icon="mdi:close"></ha-icon>',h.addEventListener("click",H=>{H.stopPropagation(),this._closeCardSettingsMenu_()}),t.appendChild(h);let u=(H,V)=>{let J=document.createElement("div");J.style.display="flex",J.style.alignItems="center",J.style.gap="12px",J.style.width="100%";let ne=document.createElement("span");return ne.textContent=H,ne.style.color="var(--secondary-text-color, #9ca3af)",ne.style.fontWeight="500",ne.style.whiteSpace="nowrap",V.style.flex="1 1 auto",J.appendChild(ne),J.appendChild(V),J},p=H=>{Object.assign(H.style,{appearance:"none",padding:"6px 8px",border:"1px solid var(--divider-color, rgba(0,0,0,.25))",borderRadius:"8px",background:c,color:"var(--primary-text-color, #000)",font:"inherit",lineHeight:"1.4",width:"100%"})},m=this._extractPerCardStyle_(e),x=["transparent","#111827","#1f2937","#334155","#0f766e","#6b5b95","var(--ha-card-background)","rgba(255,255,255,0.24)"],_=["linear-gradient(135deg, #1e3a8a, #0ea5e9)","linear-gradient(135deg, #111827, #1f2937)","linear-gradient(135deg, #0f766e, #22c55e)","linear-gradient(135deg, #7c3aed, #06b6d4)","linear-gradient(135deg, #f97316, #f43f5e)","radial-gradient(circle at 30% 20%, #2dd4bf, #1e293b)"],P=H=>H&&(H.addEventListener("pointerdown",l),H.addEventListener("mousedown",l),H.addEventListener("touchstart",l),H),O=(H,V="#111827")=>{let J=String(H||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);return J?J[0]:V},C=H=>{let V=String(H||"").trim();if(!V)return"transparent";if(V.startsWith("var("))try{let J=V.slice(4,-1).trim();return getComputedStyle(this).getPropertyValue(J).trim()||"transparent"}catch{return"transparent"}return V},S=(H={})=>{let V={...this._extractPerCardStyle_(e),...H};for(let J of Object.keys(V))String(V[J]||"").trim()||delete V[J];this._applyPerCardStyle_(e,V);try{this._queueSave("card-style-change")}catch{}},v=(H,V,J)=>{let ne=document.createElement("select");p(ne),[{value:"",label:"Dashboard default"},{value:"on",label:"Enabled"},{value:"off",label:"Disabled"}].forEach(({value:Ne,label:Ue})=>{let rt=document.createElement("option");rt.value=Ne,rt.textContent=Ue,ne.appendChild(rt)}),ne.value=m[V]||"",P(ne),ne.addEventListener("change",()=>{S({[V]:ne.value})});let U=u(H,ne),xe=document.createElement("div");if(Object.assign(xe.style,{display:"flex",flexDirection:"column",gap:"6px"}),xe.appendChild(U),J){let Ne=document.createElement("div");Ne.textContent=J,Object.assign(Ne.style,{fontSize:".75rem",color:"var(--secondary-text-color, #9ca3af)"}),xe.appendChild(Ne)}return xe},b=(H,V,J,ne,U={})=>{let xe=document.createElement("div");Object.assign(xe.style,{display:"flex",flexDirection:"column",gap:"6px"});let Ne=document.createElement("div");Object.assign(Ne.style,{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"10px"});let Ue=document.createElement("span");Ue.textContent=H,Object.assign(Ue.style,{color:"var(--secondary-text-color, #9ca3af)",fontWeight:"500"});let rt=document.createElement("button");rt.type="button",rt.textContent="Reset",Object.assign(rt.style,{border:"1px solid var(--divider-color, rgba(0,0,0,.25))",borderRadius:"999px",padding:"4px 10px",background:"transparent",color:"var(--primary-text-color, #f5f5f5)",cursor:"pointer",font:"inherit"}),P(rt);let fe=document.createElement("div");Object.assign(fe.style,{display:"flex",alignItems:"center",gap:"8px"});let me=document.createElement("input");me.type="color",me.value=O(m[V],V==="text_color"?"#f8fafc":"#111827"),Object.assign(me.style,{width:"36px",height:"36px",padding:"0",border:"none",background:"transparent",cursor:"pointer",flex:"0 0 36px"}),P(me);let ye=document.createElement("input");ye.type="text",ye.value=m[V]||"",ye.placeholder=J,Object.assign(ye.style,{flex:"1 1 auto",padding:"8px 10px",border:"1px solid var(--divider-color, rgba(0,0,0,.25))",borderRadius:"10px",background:"var(--ha-card-background, var(--card-background-color, #111827))",color:"var(--primary-text-color, #f5f5f5)",font:"inherit"}),P(ye);let Ve=()=>{let Qe=ye.value.trim();xe.querySelectorAll("[data-card-style-value]").forEach(je=>{let ut=je.getAttribute("data-card-style-value")===Qe;je.setAttribute("aria-pressed",ut?"true":"false"),je.style.outline=ut?"2px solid var(--primary-color, #03a9f4)":"none"})};if(me.addEventListener("input",()=>{ye.value=me.value,S({[V]:me.value}),Ve()}),ye.addEventListener("input",()=>{let Qe=ye.value.trim(),je=Qe.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);je&&(me.value=je[0]),S({[V]:Qe}),Ve()}),rt.addEventListener("click",Qe=>{Qe.stopPropagation(),ye.value="",S({[V]:""}),Ve()}),Ne.appendChild(Ue),Ne.appendChild(rt),fe.appendChild(me),fe.appendChild(ye),xe.appendChild(Ne),xe.appendChild(fe),ne){let Qe=document.createElement("div");Qe.textContent=ne,Object.assign(Qe.style,{fontSize:".75rem",color:"var(--secondary-text-color, #9ca3af)"}),xe.appendChild(Qe)}let dt=(Qe,{gradient:je=!1}={})=>{if(!Array.isArray(Qe)||!Qe.length)return;let ut=document.createElement("div");Object.assign(ut.style,{display:"flex",flexWrap:"wrap",gap:"6px"}),Qe.forEach(yt=>{let bt=document.createElement("button");bt.type="button",bt.setAttribute("data-card-style-value",yt),bt.setAttribute("aria-pressed","false"),Object.assign(bt.style,{width:je?"42px":"26px",height:"26px",borderRadius:je?"8px":"7px",border:"1px solid rgba(255,255,255,.18)",background:C(yt),cursor:"pointer",padding:"0"}),bt.title=yt,P(bt),bt.addEventListener("click",Pt=>{Pt.stopPropagation(),ye.value=yt;let Oe=yt.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);Oe&&(me.value=Oe[0]),S({[V]:yt}),Ve()}),ut.appendChild(bt)}),xe.appendChild(ut)};return dt(U.presets||[]),dt(U.gradients||[],{gradient:!0}),Ve(),xe};if(Array.isArray(this.tabs)&&this.tabs.length>1){let H=document.createElement("select");p(H);for(let U of this.tabs){let xe=document.createElement("option");xe.value=U.id,xe.textContent=U.label||U.id,H.appendChild(xe)}let V=e.dataset.tabId||this.defaultTab;H.value=this._normalizeTabId(V),H.addEventListener("change",()=>{var xe;let U=H.value;e.dataset.tabId=this._normalizeTabId(U);try{(xe=this._addTabSelectorToChip)==null||xe.call(this,e,e.dataset.tabId)}catch{}try{this._applyActiveTab()}catch{}try{this._applyVisibility_()}catch{}try{this._queueSave("tab-change")}catch{}}),H.addEventListener("pointerdown",l),H.addEventListener("mousedown",l),H.addEventListener("touchstart",l);let J=u("Tab",H);t.appendChild(J);let ne=document.createElement("div");ne.textContent="Choose which tab this card appears on.",Object.assign(ne.style,{fontSize:".75rem",color:"var(--secondary-text-color, #9ca3af)",marginTop:"2px"}),t.appendChild(ne)}let A=document.createElement("select");p(A);let E=[{value:"",label:"Default"},{value:"visible",label:"Visible"},{value:"hidden",label:"Hidden"},{value:"auto",label:"Scroll"}];for(let H of E){let V=document.createElement("option");V.value=H.value,V.textContent=H.label,A.appendChild(V)}let R=e.dataset.overflow||e.style.overflow||"";A.value=R||"",A.addEventListener("change",()=>{let H=A.value,V=e.firstElementChild;H?(e.style.setProperty("overflow",H,"important"),V&&V.style.setProperty("overflow",H,"important"),e.dataset.overflow=H):(e.style.removeProperty("overflow"),V&&V.style.removeProperty("overflow"),delete e.dataset.overflow);try{this._queueSave("overflow-change")}catch{}}),A.addEventListener("pointerdown",l),A.addEventListener("mousedown",l),A.addEventListener("touchstart",l);let D=u("Overflow",A);t.appendChild(D);let M=document.createElement("div");M.textContent="Control how card content behaves when it exceeds its bounds.",Object.assign(M.style,{fontSize:".75rem",color:"var(--secondary-text-color, #9ca3af)",marginTop:"2px"}),t.appendChild(M);let F=document.createElement("div");Object.assign(F.style,{height:"1px",background:"var(--divider-color, rgba(255,255,255,.12))",margin:"2px 0"}),t.appendChild(F);let N=document.createElement("div");N.textContent="Per-card style",Object.assign(N.style,{fontWeight:"600",color:"var(--primary-text-color, #f5f5f5)"}),t.appendChild(N);let $=document.createElement("div");$.textContent="Overrides Dashboard Settings for this card only.",Object.assign($.style,{fontSize:".75rem",color:"var(--secondary-text-color, #9ca3af)",marginTop:"-6px"}),t.appendChild($),t.appendChild(b("Container background","container_background","transparent \xB7 #123456 \xB7 var(--ha-card-background)","Sets the inner card surface for this card only.",{presets:x,gradients:_})),t.appendChild(b("Card background","background","transparent \xB7 #123456 \xB7 linear-gradient(...)","Sets the outer wrapper/background around this card.",{presets:x,gradients:_})),t.appendChild(b("Text color","text_color","#f8fafc \xB7 var(--primary-text-color)","Applies to text and icons when the card supports inherited theme vars.")),t.appendChild(b("Border color","border_color","#38bdf8","Adds an optional border color around this card.")),t.appendChild(v("Animate cards","animate_cards","Overrides the dashboard animation setting for this card.")),t.appendChild(v("Drop shadow","card_shadow","Overrides the dashboard shadow setting for this card.")),(this.shadowRoot||this).appendChild(t);let X=()=>{var H;return(H=this._positionCardSettingsMenu_)==null?void 0:H.call(this)},le=H=>{let V=typeof H.composedPath=="function"?H.composedPath():[];V.includes(t)||V.includes(e)||this._closeCardSettingsMenu_()},re=H=>{H.key==="Escape"&&this._closeCardSettingsMenu_()};window.addEventListener("resize",X),window.addEventListener("scroll",X,!0),(se=(ue=this.__scaleOuter)==null?void 0:ue.addEventListener)==null||se.call(ue,"scroll",X,{passive:!0}),(ce=(ge=this.cardContainer)==null?void 0:ge.addEventListener)==null||ce.call(ge,"scroll",X,{passive:!0}),document.addEventListener("pointerdown",le,!0),document.addEventListener("keydown",re,!0),this.__cardSettingsMenu={menu:t,wrap:e,cleanup:()=>{var H,V,J,ne;window.removeEventListener("resize",X),window.removeEventListener("scroll",X,!0),(V=(H=this.__scaleOuter)==null?void 0:H.removeEventListener)==null||V.call(H,"scroll",X,{passive:!0}),(ne=(J=this.cardContainer)==null?void 0:J.removeEventListener)==null||ne.call(J,"scroll",X,{passive:!0}),document.removeEventListener("pointerdown",le,!0),document.removeEventListener("keydown",re,!0)}},requestAnimationFrame(()=>{var H;return(H=this._positionCardSettingsMenu_)==null?void 0:H.call(this)})}_toggleEditMode(e=null){var m,x,_,P,O,C,S,v,b,A,E,R,D,M,F,N,$,Y,X,le,re,ee,ue,se;try{(m=this.__clearPressTimer)==null||m.call(this)}catch{}let t=e===null?!this.editMode:!!e,r=!this.editMode&&t;try{let ge=this.config&&this.config.edit_mode_pin!=null?String(this.config.edit_mode_pin):"",H=((this.editModePin!=null?String(this.editModePin):"")||ge).trim();if(t&&!this.editMode&&H){let V=window.prompt("Enter PIN / password to open Edit Mode:");if(V===null)return;if(String(V).trim()!==H){(x=this._toast)==null||x.call(this,"Incorrect PIN/password.");return}}}catch{}let a=this.renderRoot||this.shadowRoot||this,s=(_=a==null?void 0:a.querySelector)==null?void 0:_.call(a,".ddc-toolbar.streamlined.v2, .ddc-toolbar.streamlined.v3"),c=(ge,ce)=>{try{ge&&(ge.style.display=ce)}catch{}},l="inline-block",g="none",h=()=>{c(this.addButton,l),c(this.reloadBtn,l),c(this.diagBtn,l),c(this.exitEditBtn,l),c(this.exportBtn,l),c(this.importBtn,l),c(this.exploreBtn,l),c(this.storeBadge,l),c(this.applyLayoutBtn,l),c(this.copyBtn,l),c(this.pasteBtn,l),c(this.lineModeBtn,l),c(this.settingsBtn,l),c(this.toolbarToggleBtn,"inline-flex")},u=()=>{c(this.addButton,g),c(this.reloadBtn,g),c(this.diagBtn,g),c(this.exitEditBtn,g),c(this.exportBtn,g),c(this.importBtn,g),c(this.exploreBtn,g),c(this.storeBadge,g),c(this.applyLayoutBtn,g),c(this.copyBtn,g),c(this.pasteBtn,g),c(this.lineModeBtn,g),c(this.settingsBtn,g),c(this.toolbarToggleBtn,g)};if(s){try{(P=this._computeHaTopGutter_)==null||P.call(this)}catch{}if(t)s.setAttribute("data-force-open","1"),s.style.display="grid",h(),(O=this._setToolbarExpanded_)==null||O.call(this,!1,{toolbar:s}),requestAnimationFrame(()=>{var H;let ce=s.scrollHeight||0;s.style.setProperty("--open-h",ce+"px"),s.classList.add("is-open"),(H=this._refreshToolbarOpenHeight_)==null||H.call(this),requestAnimationFrame(()=>{var V;return(V=this._refreshToolbarOpenHeight_)==null?void 0:V.call(this)})});else{s.setAttribute("data-force-open","1"),s.style.display="grid";let ce=s.scrollHeight||0;s.style.setProperty("--open-h",ce+"px"),requestAnimationFrame(()=>{s.classList.remove("is-open")}),setTimeout(()=>{var H;(H=this._setToolbarExpanded_)==null||H.call(this,!1,{toolbar:s}),u(),s.removeAttribute("data-force-open")},260)}}else t?h():u();this.editMode=t,t||(this._persistCurrentResponsiveProfileToMemory_(),this.viewportPreviewMode="live",(C=this._closeConnectorSettings_)==null||C.call(this),(S=this._cancelConnectorDraft_)==null||S.call(this),this._selectedConnectorId=null);try{(v=this._syncViewportPreviewUI_)==null||v.call(this)}catch{}(b=this._syncEmptyStateUI)==null||b.call(this),(A=this.cardContainer)==null||A.classList.toggle("grid-on",this.editMode);try{typeof this._resetScreensaverTimer=="function"&&this._resetScreensaverTimer()}catch{}if((((R=(E=this.cardContainer)==null?void 0:E.querySelectorAll)==null?void 0:R.call(E,".card-wrapper"))||[]).forEach(ge=>{ge.classList.toggle("editing",this.editMode);let ce=ge.querySelector(".resize-handle");ce&&(ce.style.display=this.editMode?"flex":"none"),!ge.dataset.placeholder&&window.interact&&window.interact(ge).draggable(this.editMode).resizable(this.editMode),ge.style.touchAction=this.editMode?"none":"auto"}),this.editMode||(D=this._clearSelection)==null||D.call(this),this.editMode||(M=this.cardContainer)==null||M.querySelectorAll(".card-wrapper.dragging").forEach(ge=>ge.classList.remove("dragging")),(F=this._syncConnectorUiState_)==null||F.call(this),r){let ge=(N=this.__lastHoldX)!=null?N:null,ce=($=this.__lastHoldY)!=null?$:null;(Y=this._playEditRipple)==null||Y.call(this,ge,ce)}try{(X=this._applyHaChromeVisibility_)==null||X.call(this)}catch{}try{let ge=((re=(le=this.shadowRoot)==null?void 0:le.querySelector)==null?void 0:re.call(le,".ddc-root"))||((ue=(ee=this.renderRoot)==null?void 0:ee.querySelector)==null?void 0:ue.call(ee,".ddc-root"))||null;if(ge){ge.classList.toggle("ddc-edit-mode-active",!!this.editMode);let ce=0;if(t&&s)try{ce=s.scrollHeight||s.offsetHeight||0}catch{}ge.style.setProperty("--ddc-toolbar-height",ce+"px"),!this.autoResizeCards&&this.cardContainer&&(t&&s?this.cardContainer.style.marginTop=ce+"px":this.cardContainer.style.marginTop="")}}catch{}try{(se=this._syncResponsiveProfileForViewport_)==null||se.call(this,{force:!t}),typeof this._resizeContainer=="function"&&this._resizeContainer(),typeof this._applyAutoScale=="function"&&this._applyAutoScale()}catch{}}_isInHaEditorPreview(){let e=this;for(;e;){let t=e.nodeType===1&&e.localName?e.localName.toLowerCase():"";if(t==="hui-card-editor"||t==="hui-dialog-edit-card"||t==="hui-card-preview"||t==="ha-dialog"||t==="mwc-dialog")return!0;let r=e.getRootNode&&e.getRootNode();e=e.parentElement||r&&r.host||null}return!1}_installLongPressToEnterEdit(){if(this.__lpInstalled)return;this.__lpInstalled=!0;let e=this.cardContainer;if(!e)return;let t=800,r=18,a=b=>!!b&&typeof b=="object"&&b.nodeType===1,s=(b,A)=>{try{return!!(b&&A&&typeof b.contains=="function"&&a(A)&&b.contains(A))}catch{return!1}},c=b=>s(this.cardContainer,b),l=b=>{var R,D,M;let A=(D=(R=b.target)==null?void 0:R.closest)==null?void 0:D.call(R,".card-wrapper");if(a(A)&&c(A)&&!A.classList.contains("ddc-placeholder"))return!0;let E=typeof b.composedPath=="function"?b.composedPath():[];for(let F of E)if(a(F)&&c(F)&&(M=F.classList)!=null&&M.contains("card-wrapper")&&!F.classList.contains("ddc-placeholder"))return!0;return!1},g=(b,A)=>{let E=document.createElement("div");E.className="ddc-press-ring",document.body.appendChild(E),Object.assign(E.style,{position:"fixed",left:`${b}px`,top:`${A}px`,zIndex:"100000",width:"44px",height:"44px",pointerEvents:"none",marginLeft:"-22px",marginTop:"-22px",filter:"drop-shadow(0 2px 6px rgba(0,0,0,.35))"}),E.innerHTML=`
      <svg viewBox="0 0 44 44" aria-hidden="true" style="width:44px;height:44px">
        <circle cx="22" cy="22" r="18" style="stroke:rgba(255,255,255,.45);stroke-width:4;fill:none"></circle>
        <circle class="pr-fg" cx="22" cy="22" r="18" style="stroke:var(--primary-color);stroke-width:4;fill:none;stroke-linecap:round"></circle>
        <circle cx="22" cy="22" r="2" style="fill:var(--primary-color);opacity:.95"></circle>
      </svg>`;let R=E.querySelector(".pr-fg"),D=18,M=2*Math.PI*D;return R.style.strokeDasharray=`${M}`,R.style.strokeDashoffset=`${M}`,requestAnimationFrame(()=>{R.style.transition=`stroke-dashoffset ${t}ms linear`,R.style.strokeDashoffset="0"}),{el:E,move(F,N){E.style.left=`${F}px`,E.style.top=`${N}px`},remove(){try{E.remove()}catch{}}}},h=null,u=null,p=0,m=0,x=null,_=()=>{h&&clearTimeout(h),h=null,u==null||u.remove(),u=null};this.__clearPressTimer=_;let P=b=>{b.pointerType==="mouse"&&b.button!==0||this._isInHaEditorPreview()||!c(b.target)||l(b)||(x=b.pointerId,p=b.clientX,m=b.clientY,this.__lastHoldX=p,this.__lastHoldY=m,u=g(p,m),h=setTimeout(()=>{var E;_();let A=!this.editMode;this._toggleEditMode(A),(E=this._toast)==null||E.call(this,`Edit mode ${A?"enabled":"disabled"}`)},t))},O=b=>{h==null||b.pointerId!==x||(u==null||u.move(b.clientX,b.clientY),(Math.abs(b.clientX-p)>r||Math.abs(b.clientY-m)>r)&&_())},C=b=>{b.pointerId===x&&(_(),x=null)},S=b=>{if(h)return b.preventDefault(),b.stopPropagation(),!1},v=b=>{var E;if(this._isInHaEditorPreview()||!c(b.target)||l(b))return;let A=!this.editMode;this._toggleEditMode(A),(E=this._toast)==null||E.call(this,`Edit mode ${A?"enabled":"disabled"}`)};e.addEventListener("pointerdown",P),window.addEventListener("pointermove",O,{passive:!0}),window.addEventListener("pointerup",C,{passive:!0}),window.addEventListener("pointercancel",C,{passive:!0}),window.addEventListener("contextmenu",S),e.addEventListener("dblclick",v),this.__lpHandlers={onPointerDown:P,onPointerMove:O,onPointerUpOrCancel:C,onContextMenu:S,onDblClick:v}}_isLayoutEmpty(){let e=this.cardContainer;return e?e.querySelectorAll(".card-wrapper:not(.ddc-placeholder)").length===0:!0}_syncEmptyStateUI(){let e=this._isLayoutEmpty();if(this.addButton){let r=this.editMode||e;this.addButton.style.display=r?"inline-block":"none",this.addButton.classList.toggle("cta-empty",!this.editMode&&e)}let t=r=>r&&(r.style.display=this.editMode?"inline-block":"none");t(this.reloadBtn),t(this.diagBtn),t(this.exitEditBtn),t(this.exportBtn),t(this.importBtn),t(this.exploreBtn),t(this.storeBadge),t(this.applyLayoutBtn),t(this.lineModeBtn)}_updateApplyBtn(){this.applyLayoutBtn&&(this.applyLayoutBtn.disabled=!this.__dirty)}_markDirty(e=""){var t;this.__dirty=!0,this._updateApplyBtn(),(t=this._dbgPush)==null||t.call(this,"dirty","Marked dirty",{reason:e})}_playEditRipple(e=null,t=null){let r=this.cardContainer;if(!r)return;let a=r.getBoundingClientRect(),s=e==null?a.left+a.width/2:e,c=t==null?a.top+a.height/2:t,l=s-a.left,g=c-a.top,h=document.createElement("div");h.className="ddc-ripple-veil",h.style.setProperty("--rip-x",`${l}px`),h.style.setProperty("--rip-y",`${g}px`),r.appendChild(h),setTimeout(()=>h.remove(),450)}_initInteract(){this.cardContainer.querySelectorAll(".card-wrapper").forEach(t=>this._initCardInteract(t))}_initCardInteract(e){if(!window.interact||e.dataset.placeholder)return;let t=this.gridSize,r=!!this.dragLiveSnap,s=[window.interact.modifiers.restrictRect({restriction:"parent",endOnly:!0})],c=this.__pointerScaleX&&Math.abs(this.__pointerScaleX-1)>1e-6||this.__pointerScaleY&&Math.abs(this.__pointerScaleY-1)>1e-6;if(this.dragLiveSnap&&!c){let l=window.interact.snappers.grid({x:this.gridSize,y:this.gridSize});s.push(window.interact.modifiers.snap({targets:[l],range:1/0,offset:"startCoords"}))}window.interact(e).draggable({enabled:this.editMode,inertia:!1,modifiers:s,listeners:{start:l=>{this._selection.has(e)||(!(l!=null&&l.shiftKey)&&!(l!=null&&l.ctrlKey)&&!(l!=null&&l.metaKey)&&this._clearSelection(),this._toggleSelection(e,!0));let g=Array.from(this._selection);this.__groupDrag={leader:e,members:g,startRaw:new Map(g.map(u=>[u,{x:parseFloat(u.getAttribute("data-x-raw"))||parseFloat(u.getAttribute("data-x"))||0,y:parseFloat(u.getAttribute("data-y-raw"))||parseFloat(u.getAttribute("data-y"))||0,w:parseFloat(u.style.width)||u.getBoundingClientRect().width,h:parseFloat(u.style.height)||u.getBoundingClientRect().height}]))},this.__collisionOriginals=new Map,this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)").forEach(u=>{let p=parseFloat(u.getAttribute("data-x-raw"))||parseFloat(u.getAttribute("data-x"))||0,m=parseFloat(u.getAttribute("data-y-raw"))||parseFloat(u.getAttribute("data-y"))||0;this.__collisionOriginals.set(u,{x:p,y:m})}),g.forEach(u=>{u.classList.add("dragging"),u.getAttribute("data-x-raw")===null&&u.setAttribute("data-x-raw",u.getAttribute("data-x")||"0"),u.getAttribute("data-y-raw")===null&&u.setAttribute("data-y-raw",u.getAttribute("data-y")||"0")})},move:l=>{if(!this.__groupDrag)return;let g=this.gridSize,h=!!this.dragLiveSnap,u=this.__groupDrag.leader,p=this.__groupDrag.startRaw.get(u),m=this.__pointerScaleX||1,x=this.__pointerScaleY||1,_=(parseFloat(u.getAttribute("data-x-raw"))||p.x)+l.dx/m,P=(parseFloat(u.getAttribute("data-y-raw"))||p.y)+l.dy/x,O=_-p.x,C=P-p.y,S=this.__groupDrag.members.map(v=>{let b=this.__groupDrag.startRaw.get(v),A=b.x+O,E=b.y+C,R=h?Math.round(A/g)*g:A,D=h?Math.round(E/g)*g:E;return{el:v,rawX:A,rawY:E,snapX:R,snapY:D,w:b.w,h:b.h}});this.disableOverlap&&this._pushCardsOutOfTheWay(S,O,C,h,g),u.setAttribute("data-x-raw",String(_)),u.setAttribute("data-y-raw",String(P));for(let v of S)v.el.setAttribute("data-x-raw",String(v.rawX)),v.el.setAttribute("data-y-raw",String(v.rawY)),this._setCardPosition(v.el,v.snapX,v.snapY);this._resizeContainer()},end:l=>{if(!this.__groupDrag)return;let g=this.gridSize,h=this.__groupDrag.members.map(u=>{let p=parseFloat(u.getAttribute("data-x-raw"))||parseFloat(u.getAttribute("data-x"))||0,m=parseFloat(u.getAttribute("data-y-raw"))||parseFloat(u.getAttribute("data-y"))||0,x=Math.round(p/g)*g,_=Math.round(m/g)*g,P=parseFloat(u.style.width)||u.getBoundingClientRect().width,O=parseFloat(u.style.height)||u.getBoundingClientRect().height;return{el:u,rawX:p,rawY:m,snapX:x,snapY:_,w:P,h:O}});this.disableOverlap&&this._pushCardsOutOfTheWay(h,0,0,!1,g);for(let u of h)this._setCardPosition(u.el,u.snapX,u.snapY),u.el.setAttribute("data-x-raw",String(u.snapX)),u.el.setAttribute("data-y-raw",String(u.snapY));for(let u of this.__groupDrag.members)u.classList.remove("dragging");this._resizeContainer(),this._isContainerFixed()&&this._clampAllCardsInside(),this._queueSave(this.__groupDrag.members.length>1?"group-drag-end":"drag-end"),this.__groupDrag=null,this.__collisionOriginals=null}}}),window.interact(e).resizable({enabled:this.editMode,edges:{right:".resize-handle",bottom:".resize-handle"},inertia:!1,listeners:{move:l=>{let g=this.gridSize,h=!!this.dragLiveSnap,u=parseFloat(e.style.width)||e.getBoundingClientRect().width,p=parseFloat(e.style.height)||e.getBoundingClientRect().height,m=this.__pointerScaleX||1,x=this.__pointerScaleY||1,_=l.rect.width/m,P=l.rect.height/x,O=h?Math.max(g,Math.round(_/g)*g):_,C=h?Math.max(g,Math.round(P/g)*g):P,S=parseFloat(e.getAttribute("data-x"))||0,v=parseFloat(e.getAttribute("data-y"))||0,b=O,A=C;if(this._isContainerFixed()){let{w:R,h:D}=this._getContainerSize();b=Math.min(O,Math.max(this.gridSize,R-S)),A=Math.min(C,Math.max(this.gridSize,D-v))}let E=[this._rectFor(e,S,v,b,A)];this.disableOverlap&&this._anyCollisionFor(E,new Set([e]))||(e.style.width=`${b}px`,e.style.height=`${A}px`,this._resizeContainer())},end:()=>{let l=this.gridSize,g=parseFloat(e.style.width)||e.getBoundingClientRect().width,h=parseFloat(e.style.height)||e.getBoundingClientRect().height,u=Math.max(l,Math.round(g/l)*l),p=Math.max(l,Math.round(h/l)*l),m=parseFloat(e.getAttribute("data-x"))||0,x=parseFloat(e.getAttribute("data-y"))||0;if(this._isContainerFixed()){let{w:P,h:O}=this._getContainerSize();u=Math.min(u,Math.max(l,P-m)),p=Math.min(p,Math.max(l,O-x))}let _=[this._rectFor(e,m,x,u,p)];this.disableOverlap&&this._anyCollisionFor(_,new Set([e]))||(e.style.width=`${u}px`,e.style.height=`${p}px`),this._resizeContainer(),this._isContainerFixed()&&this._clampAllCardsInside(),this._queueSave("resize-end")}}}),e.addEventListener("mousedown",l=>{this.editMode&&(l.target.closest(".resize-handle")||l.target.closest(".delete-handle")||l.target.closest(".chip")||(l.shiftKey||l.ctrlKey||l.metaKey?(l.stopPropagation(),this._toggleSelection(e)):this._selection.has(e)||(this._clearSelection(),this._toggleSelection(e,!0))))})}async _createCard(e){var c,l;let t=(()=>{try{return typeof structuredClone=="function"?structuredClone(e||{}):JSON.parse(JSON.stringify(e||{}))}catch{return{...e||{}}}})(),r=String((e==null?void 0:e.type)||"");if(r==="custom:ddc-html-card"){let g=document.createElement("ddc-html-card");return g.__ddcSourceConfig=t,(c=g.setConfig)==null||c.call(g,e),g.hass=this.hass,g}if(r==="custom:ddc-line-card"){let g=document.createElement("ddc-line-card");return g.__ddcSourceConfig=t,(l=g.setConfig)==null||l.call(g,e),g.hass=this.hass,g}let s=(await this._helpersPromise||await window.loadCardHelpers()).createCardElement(e);if(s.__ddcSourceConfig=t,s.hass=this.hass,e.type==="custom:mod-card"&&(await new Promise(g=>setTimeout(g,0)),s.setConfig&&typeof s.setConfig=="function"))try{s.setConfig(e)}catch{}return s}_makeWrapper(e,t={}){var h,u;let r=document.createElement("div");if(r.classList.add("card-wrapper"),r.dataset.tabId=this._normalizeTabId(this.activeTab||this.defaultTab),r.dataset.layoutCardId=t.layoutCardId||((h=e==null?void 0:e.dataset)==null?void 0:h.layoutCardId)||this._genLayoutCardId_(),this.editMode&&r.classList.add("editing"),!r.style.zIndex){let p=this._highestZ()+1;r.style.zIndex=String(Math.max(p,6))}let a=document.createElement("div");a.className="chip",a.innerHTML=`
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
    `;let s=document.createElement("button");s.className="mini",s.dataset.act="settings",s.setAttribute("title","Settings"),s.setAttribute("aria-label","Settings"),s.innerHTML='<ha-icon icon="mdi:cog"></ha-icon><span>Settings</span>',a.appendChild(s);let c=document.createElement("div");c.className="delete-handle",c.innerHTML='<ha-icon icon="mdi:close-thick"></ha-icon>',c.addEventListener("click",p=>{var m,x;p.stopPropagation(),this._selection.size>1&&this._selection.has(r)?(Array.from(this._selection).forEach(P=>P.remove()),this._clearSelection(),this._resizeContainer(),this._queueSave("delete-multi"),(m=this._ensurePlaceholderIfEmpty)==null||m.call(this)):(r.remove(),this._resizeContainer(),this._queueSave("delete"),(x=this._ensurePlaceholderIfEmpty)==null||x.call(this))});try{this._addTabSelectorToChip(r,r.dataset.tabId)}catch{}a.addEventListener("click",async p=>{var x,_,P,O,C,S,v,b;p.stopPropagation();let m=(P=(_=(x=p.target)==null?void 0:x.closest("button"))==null?void 0:_.dataset)==null?void 0:P.act;if(m){if(m==="delete")this._selection.size>1&&this._selection.has(r)?(Array.from(this._selection).forEach(E=>E.remove()),this._clearSelection(),this._resizeContainer(),this._queueSave("delete-multi"),this._ensurePlaceholderIfEmpty()):(r.remove(),this._resizeContainer(),this._queueSave("delete"),this._ensurePlaceholderIfEmpty());else if(m==="duplicate"||m==="copy"){let A=this._selection.size>1&&this._selection.has(r)?Array.from(this._selection):[r];for(let E of A){let R=this._extractCardConfig(E.firstElementChild)||{},D=await this._createCard(R),M=this._makeWrapper(D);M.style.width=E.style.width,M.style.height=E.style.height;try{E.style&&E.style.overflow&&(M.style.overflow=E.style.overflow),E.dataset&&E.dataset.overflow&&(M.dataset.overflow=E.dataset.overflow),E.dataset&&E.dataset.cardStyle&&(M.dataset.cardStyle=E.dataset.cardStyle,(C=this._applyPerCardStyle_)==null||C.call(this,M,((O=this._extractPerCardStyle_)==null?void 0:O.call(this,E))||null));let $=E.firstElementChild,Y=M.firstElementChild;$&&Y&&$.style&&$.style.overflow&&(Y.style.overflow=$.style.overflow)}catch{}let F=(parseFloat(E.getAttribute("data-x"))||0)+this.gridSize,N=(parseFloat(E.getAttribute("data-y"))||0)+this.gridSize;this._setCardPosition(M,F,N);{let $=this._highestZ()+1;M.style.zIndex=String(Math.max($,6))}try{let $=(S=E.dataset)==null?void 0:S.tabId;$&&(M.dataset.tabId=$)}catch{}this.cardContainer.appendChild(M);try{(v=this._addTabSelectorToChip)==null||v.call(this,M,M.dataset.tabId)}catch{}try{this._rebuildOnce(M.firstElementChild)}catch{}this._initCardInteract(M)}this._resizeContainer(),this._queueSave("duplicate")}else if(m==="front")this._adjustZ(r,1);else if(m==="back")this._adjustZ(r,-1);else if(m==="front-most"){let A=this._selection.size>1&&this._selection.has(r)?Array.from(this._selection):[r];A.sort((R,D)=>{let M=parseInt(R.style.zIndex||"1",10),F=parseInt(D.style.zIndex||"1",10);return M-F});let E=this._highestZ();for(let R of A)E+=1,R.style.zIndex=String(E);this._queueSave("z-change")}else if(m==="back-most"){let A=this._selection.size>1&&this._selection.has(r)?Array.from(this._selection):[r];A.sort((D,M)=>{let F=parseInt(D.style.zIndex||"1",10);return parseInt(M.style.zIndex||"1",10)-F});let E=1/0;this.cardContainer.querySelectorAll(".card-wrapper").forEach(D=>{let M=parseInt(D.style.zIndex||"1",10);M<E&&(E=M)}),isFinite(E)||(E=1);let R=E;for(let D of A)R-=1,D.style.zIndex=String(Math.max(6,R));this._queueSave("z-change")}else if(m==="edit"){let A=this._extractCardConfig(r.firstElementChild)||{};await this._openSmartPicker("edit",A,async E=>{var M,F,N;let R=r.firstElementChild,D=await this._createCard(E);try{r.dataset.cfg=JSON.stringify(E),(M=this._hasCardModDeep)!=null&&M.call(this,E)?r.dataset.needsCardMod="true":delete r.dataset.needsCardMod}catch{}r.replaceChild(D,R),await An();try{if(D.hass=this.hass,(F=D.requestUpdate)==null||F.call(D),D.updateComplete)try{await D.updateComplete}catch{}}catch{}try{this._rebuildOnce(D)}catch{}try{D.dispatchEvent(new Event("ll-rebuild",{bubbles:!0,composed:!0}))}catch{}(N=this._resizeContainer)==null||N.call(this);try{clearTimeout(this._saveTimer),await this._saveLayout(!0)}catch($){console.warn("Save before reload failed",$)}window.location.reload()})}else if(m==="settings")try{(b=this._openCardSettingsMenu)==null||b.call(this,r)}catch{}}});let l=document.createElement("div");l.className="shield";let g=document.createElement("div");g.classList.add("resize-handle"),this.editMode||(g.style.display="none"),g.title="Resize",g.innerHTML='<ha-icon icon="mdi:resize-bottom-right"></ha-icon>';try{let p=e._config||e.config;p&&typeof p=="object"&&Object.keys(p).length&&(r.dataset.cfg=JSON.stringify(p),this._hasCardModDeep(p)&&(r.dataset.needsCardMod="true"))}catch{}r.append(e,l,a,c,g);try{this._rebuildOnce(e)}catch{}this.__ddcTextLockDirty=!0;try{(u=this._scheduleTextResizeLockRefresh_)==null||u.call(this,!0)}catch{}return r.addEventListener("dblclick",p=>{if(this.editMode&&!(p.target.closest(".resize-handle")||p.target.closest(".delete-handle")||p.target.closest(".chip"))){p.stopPropagation();try{let m=r.querySelector('.chip button[data-act="edit"]');m&&m.click()}catch{}}}),r}_makePlaceholderAt(e=0,t=0,r=400,a=400){let s=document.createElement("div");s.classList.add("card-wrapper","ddc-placeholder"),s.dataset.placeholder="1",this.editMode&&s.classList.add("editing"),this._setCardPosition(s,e,t),s.style.width=`${r}px`,s.style.height=`${a}px`,s.style.zIndex=String(this._highestZ()+1);let c=document.createElement("div");c.className="ddc-placeholder-inner",c.setAttribute("aria-hidden","true");let l=document.createElement("div");l.className="ddc-hero";let g=this.heroImage;if(g){let m=document.createElement("img");m.src=g,m.alt="",l.appendChild(m)}let h=document.createElement("div");h.className="ddc-title",h.textContent="Drag & Drop Card";let u=document.createElement("div");u.className="ddc-sub",u.textContent="Hold me / double click me to enter Edit mode",l.append(h,u),c.appendChild(l),s.addEventListener("dblclick",m=>{m.stopPropagation(),this._toggleEditMode(!0)});let p=document.createElement("div");return p.className="shield",s.append(c,p),s}_processCardModOnce(){var t;if(this._cardModProcessed)return;this._cardModProcessed=!0,(((t=this.cardContainer)==null?void 0:t.querySelectorAll('[data-needs-card-mod="true"]'))||[]).forEach(r=>{let a=r.firstElementChild;if(!a)return;let s=a._config||a.config;if(s){if(s.type==="custom:mod-card")setTimeout(()=>{if(a.updateComplete)a.updateComplete.then(()=>{a.requestUpdate()});else if(a.setConfig)try{a.setConfig({...s})}catch{}},100);else if(s.card_mod&&a.setConfig)try{a.setConfig({...s})}catch{}}})}_showEmptyPlaceholder(){var a,s,c;if(this.cardContainer.querySelector(".ddc-placeholder"))return;let e=200,t=200,r=this._makePlaceholderAt(0,0,e,t);this.cardContainer.appendChild(r),this._resizeContainer();try{let l=(a=this.getBoundingClientRect)==null?void 0:a.call(this),g=(c=(s=this.cardContainer)==null?void 0:s.getBoundingClientRect)==null?void 0:c.call(s);if(l&&g){let h=(l.width-e)/2,u=(l.height-t)/2,p=h-(g.left-l.left),m=u-(g.top-l.top);(!Number.isFinite(p)||p<0)&&(p=0),(!Number.isFinite(m)||m<0)&&(m=0),this._setCardPosition(r,p,m)}}catch{}this._syncEmptyStateUI()}_hideEmptyPlaceholder(){this.cardContainer.querySelectorAll(".ddc-placeholder").forEach(e=>e.remove())}_ensurePlaceholderIfEmpty(){var t;this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)").length===0&&this._showEmptyPlaceholder(),(t=this._applyAutoScale)==null||t.call(this),this._syncEmptyStateUI()}_adjustZ(e,t){let a=parseInt(e.style.zIndex||"1",10)+t;a=Math.max(1,Math.min(9999,a)),e.style.zIndex=String(a),this._queueSave("z-change")}_highestZ(){let e=5;return this.cardContainer.querySelectorAll(".card-wrapper").forEach(t=>{let r=parseInt(t.style.zIndex||"0",10);r>e&&(e=r)}),e}_setCardPosition(e,t,r){let a=Math.round(t),s=Math.round(r);e.style.transform=`translate3d(${a}px, ${s}px, 0)`,e.setAttribute("data-x",String(a)),e.setAttribute("data-y",String(s))}_computeDesignSize(){var l;let e=this.cardContainer;if(!e)return{w:1,h:1};if(this._isContainerFixed()){let{w:g,h}=this._resolveFixedSize();return{w:Math.max(1,g),h:Math.max(1,h)}}let t=0,r=0,a=Array.from(e.querySelectorAll(".card-wrapper"));if(!a.length){let g=e.getBoundingClientRect();return{w:Math.max(1,g.width||1),h:Math.max(1,g.height||1)}}for(let g of a){let h=parseFloat(g.getAttribute("data-x-raw")||g.getAttribute("data-x")||"0")||0,u=parseFloat(g.getAttribute("data-y-raw")||g.getAttribute("data-y")||"0")||0,p=parseFloat(g.style.width)||g.getBoundingClientRect().width||0,m=parseFloat(g.style.height)||g.getBoundingClientRect().height||0,x=h+p,_=u+m;x>t&&(t=x),_>r&&(r=_)}let s=Math.max(1,this.gridSize||10),c=((l=this._getOuterGridBufferPx_)==null?void 0:l.call(this))||0;return t=Math.ceil(t/s)*s,r=Math.ceil(r/s)*s,{w:Math.max(1,t+c),h:Math.max(1,r+c)}}_startScaleWatch(){if(!this.autoResizeCards||this.__scaleRAF)return;let e=()=>{var c,l,g;if(!this.autoResizeCards){this.__scaleRAF=null;return}let t=1;try{let h=(c=this.getBoundingClientRect)==null?void 0:c.call(this);t=Math.max(1,h&&h.width||this.offsetWidth||1)}catch{t=Math.max(1,this.offsetWidth||1)}let r=this.__lastScaleW||0,a=Math.abs(t-r);(!r||a>=20)&&(this.__lastScaleW=t,String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(l=this._applyAutoFillNoScale)==null||l.call(this):(g=this._applyAutoScale)==null||g.call(this)),this.__scaleRAF=requestAnimationFrame(e)};this.__scaleRAF=requestAnimationFrame(e)}_stopScaleWatch(){if(this.__scaleRAF){try{cancelAnimationFrame(this.__scaleRAF)}catch{}this.__scaleRAF=null}}_setToolbarExpanded_(e=!1,t={}){var r,a,s;try{let c=this.shadowRoot||this.renderRoot||this,l=(t==null?void 0:t.toolbar)||((r=c==null?void 0:c.querySelector)==null?void 0:r.call(c,".ddc-toolbar.streamlined.v2, .ddc-toolbar.streamlined.v3"));if(!l)return;let g=!!e;this.__toolbarExpanded=g,l.classList.toggle("is-collapsed",!g),l.setAttribute("data-toolbar-expanded",g?"1":"0");let h=this.toolbarToggleBtn||l.querySelector("#toolbarToggleBtn");if(h){let u=g?"Collapse toolbar":"Expand toolbar";h.setAttribute("aria-expanded",g?"true":"false"),h.setAttribute("aria-label",u),h.setAttribute("title",u),h.setAttribute("data-tooltip",u);let p=h.querySelector("ha-icon");p&&p.setAttribute("icon",g?"mdi:chevron-up":"mdi:chevron-down")}(a=this._refreshToolbarOpenHeight_)==null||a.call(this),(s=this._syncTabsWidth_)==null||s.call(this)}catch{}}_refreshToolbarOpenHeight_(){var e,t;try{let r=this.shadowRoot||this.renderRoot||this,a=(e=r==null?void 0:r.querySelector)==null?void 0:e.call(r,".ddc-toolbar.streamlined.v2, .ddc-toolbar.streamlined.v3"),s=((t=r==null?void 0:r.querySelector)==null?void 0:t.call(r,".ddc-root"))||null;if(!a){s&&s.style.setProperty("--ddc-toolbar-height","0px"),!this.autoResizeCards&&this.cardContainer&&(this.cardContainer.style.marginTop="");return}requestAnimationFrame(()=>{try{let l=(a.classList.contains("is-open")||a.hasAttribute("data-force-open"))&&(a.scrollHeight||a.offsetHeight)||0;a.style.setProperty("--open-h",`${l}px`),s&&s.style.setProperty("--ddc-toolbar-height",`${l}px`),!this.autoResizeCards&&this.cardContainer&&(this.cardContainer.style.marginTop=l>0?`${l}px`:"")}catch{}})}catch{}}_ensureStreamlinedToolbarObserver_(){var e,t,r;try{let a=this.shadowRoot||this.renderRoot||this,s=(e=a==null?void 0:a.querySelector)==null?void 0:e.call(a,".ddc-toolbar.streamlined.v2, .ddc-toolbar.streamlined.v3");if(!s){try{(t=this.__streamlinedToolbarRO)==null||t.disconnect()}catch{}this.__streamlinedToolbarRO=null,this.__streamlinedToolbarROTarget=null;return}if(this.__streamlinedToolbarRO&&this.__streamlinedToolbarROTarget===s)return;try{(r=this.__streamlinedToolbarRO)==null||r.disconnect()}catch{}this.__streamlinedToolbarRO=new ResizeObserver(()=>{var c;(c=this._refreshToolbarOpenHeight_)==null||c.call(this)}),this.__streamlinedToolbarRO.observe(s),this.__streamlinedToolbarROTarget=s}catch{}}_scheduleTextResizeLockRefresh_(e=!1){e&&(this.__ddcTextLockDirty=!0),!this.__ddcTextLockRAF&&(this.__ddcTextLockRAF=requestAnimationFrame(()=>{this.__ddcTextLockRAF=null,this._applyTextResizeLock_(e)}))}_clearTextResizeLock_(){var t,r;if(this.__ddcTextLockObserver){try{this.__ddcTextLockObserver.disconnect()}catch{}this.__ddcTextLockObserver=null}let e=this.__ddcTextLockTouched;if(e){for(let a of Array.from(e))try{(r=(t=a==null?void 0:a.style)==null?void 0:t.removeProperty)==null||r.call(t,"font-size")}catch{}e.clear()}this.__ddcTextLockActive=!1,this.__ddcTextLockScale=1,this.__ddcTextLockDirty=!1}_ensureTextResizeObserver_(){var l;let e=this.cardContainer,t=String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase(),r=!!this.doNotResizeText||t==="dynamic"&&((l=this._isMobileOptimizeActive_)==null?void 0:l.call(this));if(!e||!r){if(this.__ddcTextLockObserver){try{this.__ddcTextLockObserver.disconnect()}catch{}this.__ddcTextLockObserver=null}return}if(this.__ddcTextLockObserver)try{this.__ddcTextLockObserver.disconnect()}catch{}let a=new MutationObserver(()=>{var g;this.__ddcTextLockDirty=!0,(g=this._scheduleTextResizeLockRefresh_)==null||g.call(this)}),s=new Set,c=g=>{if(!g||s.has(g))return;s.add(g);try{a.observe(g,{childList:!0,subtree:!0,characterData:!0})}catch{}let h=document.createTreeWalker(g,NodeFilter.SHOW_ELEMENT),u=g.nodeType===Node.ELEMENT_NODE?g:h.nextNode();for(;u;)u.shadowRoot&&c(u.shadowRoot),u=h.nextNode()};c(e),Array.from(e.querySelectorAll(".card-wrapper > :first-child")).forEach(g=>c(g)),this.__ddcTextLockObserver=a}_isTextResizeTarget_(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;let t=(e.tagName||"").toLowerCase();return!t||new Set(["style","script","ha-icon","iron-icon","svg","path","img","picture","video","canvas","slot"]).has(t)?!1:["button","input","textarea","select","option","label","legend","summary","a","small","strong","em","b","i"].includes(t)||e.shadowRoot||t.includes("-")?!0:Array.from(e.childNodes||[]).some(a=>a.nodeType===Node.TEXT_NODE&&String(a.textContent||"").trim())}_collectTextResizeTargets_(e,t=[]){if(!e)return t;let r=c=>{this._isTextResizeTarget_(c)&&(t.includes(c)||t.push(c))};e.nodeType===Node.ELEMENT_NODE&&r(e);let a=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT),s=a.nextNode();for(;s;)r(s),s.shadowRoot&&this._collectTextResizeTargets_(s.shadowRoot,t),s=a.nextNode();return t}_applyTextResizeLock_(e=!1){var m,x,_,P,O;let t=this.cardContainer,r=String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase(),a=r==="dynamic"||r==="auto",s=a&&((m=this._isMobileOptimizeActive_)==null?void 0:m.call(this)),c=a&&(!!this.doNotResizeText||s),l=Math.max(1e-4,Number(this.__pointerScaleX||this.__pointerScaleY||1)||1);if(!c){(this.__ddcTextLockActive||this.__ddcTextLockDirty||e)&&this._clearTextResizeLock_();return}if(!t||!e&&!this.__ddcTextLockDirty&&this.__ddcTextLockActive&&Math.abs((this.__ddcTextLockScale||1)-l)<.001)return;this.__ddcTextLockBase||(this.__ddcTextLockBase=new WeakMap),this.__ddcTextLockTouched||(this.__ddcTextLockTouched=new Set),(x=this._ensureTextResizeObserver_)==null||x.call(this);let g=this.doNotResizeText?1:Math.max(l,Math.min(1,((_=this._getMobileTextAssistScale_)==null?void 0:_.call(this))||1)),h=this.doNotResizeText?1/l:Math.max(1,Math.min(1/l,g/l)),u=new Set,p=Array.from(t.querySelectorAll(".card-wrapper > :first-child"));for(let C of p){let S=this._collectTextResizeTargets_(C,[]);for(let v of S){if(!v||u.has(v))continue;if(u.add(v),!this.__ddcTextLockBase.has(v)){let A=parseFloat(getComputedStyle(v).fontSize||"0");if(!Number.isFinite(A)||A<=0)continue;this.__ddcTextLockBase.set(v,A)}let b=this.__ddcTextLockBase.get(v);!Number.isFinite(b)||b<=0||(v.style.setProperty("font-size",`${Math.max(1,b*h).toFixed(3)}px`,"important"),this.__ddcTextLockTouched.add(v))}}for(let C of Array.from(this.__ddcTextLockTouched))if(!(C!=null&&C.isConnected)||!u.has(C)){try{(O=(P=C==null?void 0:C.style)==null?void 0:P.removeProperty)==null||O.call(P,"font-size")}catch{}this.__ddcTextLockTouched.delete(C)}this.__ddcTextLockActive=!0,this.__ddcTextLockScale=l,this.__ddcTextLockDirty=!1}_applyAutoScale(){var m,x,_,P,O,C,S,v,b,A,E,R,D,M,F,N,$,Y,X,le,re,ee,ue,se,ge,ce,H,V,J,ne,U,xe,Ne,Ue,rt,fe,me,ye,Ve,dt,Qe,je,ut;let e="dynamic";try{if(e=String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase(),e==="auto"){(m=this._applyAutoFillNoScale)==null||m.call(this),this.removeAttribute("ddc-fixed-ui"),(_=(x=this.style)==null?void 0:x.removeProperty)==null||_.call(x,"--ddc-ui-width");return}}catch{}let t=this.cardContainer;if(!t)return;try{(this.autoResizeCards||e==="auto"||(P=this._getViewportPreviewPreset_)!=null&&P.call(this))&&typeof this._ensureScaleWrapper=="function"&&this._ensureScaleWrapper()}catch{}if(!this.autoResizeCards){let yt=typeof this._computeDesignSize=="function"?this._computeDesignSize():{w:t.offsetWidth||1,h:t.offsetHeight||1},bt=((O=this._getEffectivePreviewHeight_)==null?void 0:O.call(this))||0,Pt=bt>0;if(e==="dynamic"){try{(C=this._computeHaSidebarGutters_)==null||C.call(this)}catch{}this.removeAttribute("ddc-fixed-ui"),(v=(S=this.style)==null?void 0:S.removeProperty)==null||v.call(S,"--ddc-ui-width")}else this.removeAttribute("ddc-fixed-ui"),(A=(b=this.style)==null?void 0:b.removeProperty)==null||A.call(b,"--ddc-ui-width");let Oe=`${yt.w}px`,Ke=`${yt.h}px`,vt=t.style.width===Oe,Ct=t.style.height===Ke,It=t.style.transform==="scale(1)";if(!(vt&&Ct&&It)&&(t.style.width=Oe,t.style.height=Ke,t.style.transform="scale(1)",t.style.transformOrigin="top left",t.style.position="absolute",t.style.top="0",t.style.left="0",this.__pointerScaleX=1,this.__pointerScaleY=1,this.__scaleOuter)){let Bt=this.parentElement&&((R=(E=this.parentElement).getBoundingClientRect)==null?void 0:R.call(E).width)||this.offsetParent&&((M=(D=this.offsetParent).getBoundingClientRect)==null?void 0:M.call(D).width)||this.getBoundingClientRect&&this.getBoundingClientRect().width||this.offsetWidth||yt.w,Rt=((F=this._getEffectivePreviewWidth_)==null?void 0:F.call(this,Bt))||Bt,Lt=`${Math.max(1,Rt)}px`,ii=`${Math.max(1,Pt?bt:yt.h)}px`;this.__scaleOuter.style.width!==Lt&&(this.__scaleOuter.style.width=Lt),this.__scaleOuter.style.height!==ii&&(this.__scaleOuter.style.height=ii),this.__scaleOuter.style.overflowX=yt.w>Rt?"auto":"hidden",this.__scaleOuter.style.overflowY=Pt?"auto":"hidden",this.__scaleOuter.style.webkitOverflowScrolling=Pt?"touch":"",this.__scaleOuter.style.overscrollBehavior=Pt?"contain":"",this.__scaleOuter.style.marginInline=(N=this._getViewportPreviewPreset_)!=null&&N.call(this)?"auto":"",this.__scaleOuter.style.maxWidth=($=this._getViewportPreviewPreset_)!=null&&$.call(this)?"100%":"",(Y=this._applyPreviewDeviceFrame_)==null||Y.call(this,Rt,Pt?bt:yt.h)}try{(X=this._syncTabsWidth_)==null||X.call(this)}catch{}try{(le=this._scheduleTextResizeLockRefresh_)==null||le.call(this)}catch{}return}this.removeAttribute("ddc-fixed-ui"),(ee=(re=this.style)==null?void 0:re.removeProperty)==null||ee.call(re,"--ddc-ui-width");let r=typeof this._computeDesignSize=="function"?this._computeDesignSize():{w:t.offsetWidth||1,h:t.offsetHeight||1},a=this.parentElement&&((se=(ue=this.parentElement).getBoundingClientRect)==null?void 0:se.call(ue).width)||this.offsetParent&&((ce=(ge=this.offsetParent).getBoundingClientRect)==null?void 0:ce.call(ge).width)||this.getBoundingClientRect&&this.getBoundingClientRect().width||this.offsetWidth||r.w,s=((H=this._getEffectivePreviewHeight_)==null?void 0:H.call(this))||0,c=s>0,l=Math.max(1,((V=this._getEffectivePreviewWidth_)==null?void 0:V.call(this,a))||a);if((J=this._shouldUseUnscaledPreviewCanvas_)==null?void 0:J.call(this)){this.__scaleOuter&&(this.__scaleOuter.style.width=`${l}px`,this.__scaleOuter.style.height=`${Math.max(1,c?s:r.h)}px`,this.__scaleOuter.style.overflowX="auto",this.__scaleOuter.style.overflowY=c?"auto":"hidden",this.__scaleOuter.style.webkitOverflowScrolling="touch",this.__scaleOuter.style.overscrollBehavior=c?"contain":"",this.__scaleOuter.style.marginInline="auto",this.__scaleOuter.style.maxWidth="100%",(ne=this._applyPreviewDeviceFrame_)==null||ne.call(this,l,c?s:r.h)),t.style.width=`${r.w}px`,t.style.height=`${r.h}px`,t.style.transform="scale(1)",t.style.transformOrigin="top left",t.style.position="absolute",t.style.top="0",t.style.left="0",this.__pointerScaleX=1,this.__pointerScaleY=1;try{(U=this._syncTabsWidth_)==null||U.call(this)}catch{}try{(xe=this._layoutYtBackground_)==null||xe.call(this)}catch{}try{(Ne=this._scheduleTextResizeLockRefresh_)==null||Ne.call(this)}catch{}try{(Ue=this._requestGridButtonsUpdateSoon)==null||Ue.call(this)}catch{}return}let h=l/Math.max(1,r.w),u=(rt=this._isMobileOptimizeActive_)!=null&&rt.call(this)?(fe=this._getMobileScalePlan_)==null?void 0:fe.call(this,r.w,h):null,p=Math.max(1e-4,Number((u==null?void 0:u.scale)||h)||h||1);this.__scaleOuter&&(this.__scaleOuter.style.width=`${l}px`,this.__scaleOuter.style.height=`${Math.max(1,c?s:r.h*p)}px`,this.__scaleOuter.style.overflowX=u!=null&&u.allowPanX?"auto":"hidden",this.__scaleOuter.style.overflowY=c?"auto":"hidden",this.__scaleOuter.style.webkitOverflowScrolling=c||u!=null&&u.allowPanX?"touch":"",this.__scaleOuter.style.overscrollBehavior=c?"contain":"",this.__scaleOuter.style.marginInline=(me=this._getViewportPreviewPreset_)!=null&&me.call(this)?"auto":"",this.__scaleOuter.style.maxWidth=(ye=this._getViewportPreviewPreset_)!=null&&ye.call(this)?"100%":"",(Ve=this._applyPreviewDeviceFrame_)==null||Ve.call(this,l,c?s:r.h*p)),t.style.width=`${r.w}px`,t.style.height=`${r.h}px`,t.style.transform=`scale(${p})`,t.style.transformOrigin="top left",t.style.position="absolute",t.style.top="0",t.style.left="0",this.__pointerScaleX=p||1,this.__pointerScaleY=p||1;try{(dt=this._syncTabsWidth_)==null||dt.call(this)}catch{}try{(Qe=this._layoutYtBackground_)==null||Qe.call(this)}catch{}try{(je=this._scheduleTextResizeLockRefresh_)==null||je.call(this)}catch{}try{(ut=this._requestGridButtonsUpdateSoon)==null||ut.call(this)}catch{}}_applyAutoFillNoScale(){var e,t,r,a,s,c,l,g,h,u,p,m,x,_,P,O,C;if(!this.__applyingAutoFill){this.__applyingAutoFill=!0;try{try{(e=this._ensureScaleWrapper)==null||e.call(this)}catch{}let S=this.__scaleOuter||((r=(t=this.shadowRoot)==null?void 0:t.querySelector)==null?void 0:r.call(t,".ddc-scale-outer"))||this,v=this.cardContainer||((s=(a=this.shadowRoot)==null?void 0:a.querySelector)==null?void 0:s.call(a,"#cardContainer"));if(!S||!v)return;let b=((c=this._getEffectivePreviewHeight_)==null?void 0:c.call(this))||0,A=b>0,E=this.parentElement&&((g=(l=this.parentElement).getBoundingClientRect)==null?void 0:g.call(l).width)||this.offsetParent&&((u=(h=this.offsetParent).getBoundingClientRect)==null?void 0:u.call(h).width)||this.getBoundingClientRect&&this.getBoundingClientRect().width||this.offsetWidth||((p=this.cardContainer)==null?void 0:p.offsetWidth)||1,R=((m=this._getEffectivePreviewWidth_)==null?void 0:m.call(this,E))||E;S.style.overflow="hidden",S.style.overflowX="auto",S.style.overflowY=A?"auto":"hidden",S.style.width=A?`${Math.max(1,R)}px`:"100%",S.style.marginInline=A?"auto":"",S.style.maxWidth=A?"100%":"";let D=S.getBoundingClientRect(),M=Math.max(1,Math.round(D.width||0)),F=Math.max(1,Math.round(D.height||0));if(F<150){let V=Math.max(0,Math.round(D.top||0)),J=Math.max(1,window.innerHeight||document.documentElement.clientHeight||0),ne=Math.max(1,J-V-8);Math.abs(ne-F)>4&&(S.style.height=ne+"px",D=S.getBoundingClientRect(),M=Math.max(1,Math.round(D.width||0)),F=Math.max(1,Math.round(D.height||0)))}let N=0,$=0,Y=Array.from(v.querySelectorAll(".card-wrapper"));if(Y.length)for(let V of Y){let J=parseFloat(V.getAttribute("data-x-raw")||V.getAttribute("data-x")||"0")||0,ne=parseFloat(V.getAttribute("data-y-raw")||V.getAttribute("data-y")||"0")||0,U=parseFloat(V.style.width)||V.getBoundingClientRect().width||0,xe=parseFloat(V.style.height)||V.getBoundingClientRect().height||0,Ne=J+U,Ue=ne+xe;Ne>N&&(N=Ne),Ue>$&&($=Ue)}else N=v.scrollWidth||v.offsetWidth||M,$=v.scrollHeight||v.offsetHeight||F;let X=Number(this.gridSize||1)||1,le=((x=this._getOuterGridBufferPx_)==null?void 0:x.call(this))||0,re=Math.max(1,Math.round(Math.ceil(N/X)*X)+le),ee=Math.max(1,Math.round(Math.ceil($/X)*X)+le),ue=A?Math.max(1,R):M,se=A?Math.max(1,b):F,ge=ue>re?ue:re,ce=se>ee?se:ee;v.style.transform="none",v.style.transformOrigin="left top",this.__pointerScaleX=1,this.__pointerScaleY=1,v.style.width=`${ge}px`,v.style.height=`${ce}px`,S&&(A?(S.style.height=`${b}px`,S.style.webkitOverflowScrolling="touch",S.style.overscrollBehavior="contain"):(S.style.height=`${ce}px`,S.style.webkitOverflowScrolling="",S.style.overscrollBehavior=""),(_=this._applyPreviewDeviceFrame_)==null||_.call(this,A?R:0,A?b:0)),v.style.position=v.style.position||"absolute",v.style.top="0",v.style.left="0";let H=this.tabsBar;H&&this.tabsPosition!=="left"&&(H.style.width="100%",H.style.maxWidth="100%");try{(P=this._scheduleTextResizeLockRefresh_)==null||P.call(this)}catch{}}finally{try{(O=this._layoutYtBackground_)==null||O.call(this)}catch{}try{(C=this._requestGridButtonsUpdateSoon)==null||C.call(this)}catch{}requestAnimationFrame(()=>{this.__applyingAutoFill=!1})}}}_resizeContainer(){var l,g,h,u;let e=this.cardContainer;if(!e||this._isContainerFixed())return;let t=Array.from(e.querySelectorAll(".card-wrapper")),r=0,a=0;t.forEach(p=>{let m=parseFloat(p.getAttribute("data-x-raw")||p.getAttribute("data-x")||"0")||0,x=parseFloat(p.getAttribute("data-y-raw")||p.getAttribute("data-y")||"0")||0,_=parseFloat(p.style.width)||p.getBoundingClientRect().width||0,P=parseFloat(p.style.height)||p.getBoundingClientRect().height||0,O=m+_,C=x+P;r=Math.max(r,O),a=Math.max(a,C)});let s=Math.max(1,Number(this.gridSize||1)||1),c=((l=this._getOuterGridBufferPx_)==null?void 0:l.call(this))||0;e.style.width=`${Math.max(100,Math.ceil(r/s)*s+c)}px`,e.style.height=`${Math.max(100,Math.ceil(a/s)*s+c)}px`;try{(g=this._syncTabsWidth_)==null||g.call(this)}catch{}try{(h=this._requestGridButtonsUpdateSoon)==null||h.call(this)}catch{}try{(u=this._renderConnectors_)==null||u.call(this)}catch{}}_pushCardsOutOfTheWay(e,t,r,a,s){if(!this.__collisionOriginals)return;let c=new Set(e.map(C=>C.el)),l=Array.from(this.cardContainer.querySelectorAll(".card-wrapper")).filter(C=>!C.dataset.placeholder),g=this._isContainerFixed(),{w:h,h:u}=this._getContainerSize();for(let C of l){if(c.has(C))continue;let S=this.__collisionOriginals.get(C);if(S){C.setAttribute("data-x-raw",String(S.x)),C.setAttribute("data-y-raw",String(S.y));let v=a?Math.round(S.x/s)*s:S.x,b=a?Math.round(S.y/s)*s:S.y;this._setCardPosition(C,v,b)}}let p=e.map(C=>({x:C.snapX,y:C.snapY,w:C.w,h:C.h})),m=new Map,x=new Map;for(let C of l){let S=parseFloat(C.style.width)||C.getBoundingClientRect().width,v=parseFloat(C.style.height)||C.getBoundingClientRect().height;x.set(C,{w:S,h:v})}let _=t>0?1:t<0?-1:0,P=r>0?1:r<0?-1:0,O=Math.abs(t)>=Math.abs(r);for(let C of l){if(c.has(C))continue;let S=this.__collisionOriginals.get(C);if(!S)continue;let{x:v,y:b}=S,{w:A,h:E}=x.get(C),R=!1;for(let D of p)if(this._rectsOverlap({x:D.x,y:D.y,w:D.w,h:D.h},{x:v,y:b,w:A,h:E})){R=!0,O&&_!==0?v=_>0?D.x+D.w:D.x-A:!O&&P!==0?b=P>0?D.y+D.h:D.y-E:v=D.x+D.w;break}if(R){let D=0,M=O?_!==0?_*s:s:0,F=O?0:P!==0?P*s:s;for(;D<100;){let N={x:v,y:b,w:A,h:E},$=!1;for(let Y of p)if(this._rectsOverlap(N,Y)){$=!0;break}if(!$){for(let[,Y]of m)if(this._rectsOverlap(N,Y)){$=!0;break}}if(!$&&g&&(v<0||b<0||v+A>h||b+E>u)&&($=!0),!$)break;v+=M,b+=F,D++}g&&(v=Math.max(0,Math.min(v,Math.max(0,h-A))),b=Math.max(0,Math.min(b,Math.max(0,u-E))))}m.set(C,{x:v,y:b,w:A,h:E}),p.push({x:v,y:b,w:A,h:E})}for(let[C,S]of m){C.setAttribute("data-x-raw",String(S.x)),C.setAttribute("data-y-raw",String(S.y));let v=a?Math.round(S.x/s)*s:S.x,b=a?Math.round(S.y/s)*s:S.y;this._setCardPosition(C,v,b)}}_rectFor(e,t=null,r=null,a=null,s=null){let c=t!=null?t:parseFloat(e.getAttribute("data-x"))||0,l=r!=null?r:parseFloat(e.getAttribute("data-y"))||0,g=a!=null?a:parseFloat(e.style.width)||e.getBoundingClientRect().width||0,h=s!=null?s:parseFloat(e.style.height)||e.getBoundingClientRect().height||0;return{x:c,y:l,w:g,h,el:e}}_rectsOverlap(e,t,r=.5){return!(e.x+e.w<=t.x+r||t.x+t.w<=e.x+r||e.y+e.h<=t.y+r||t.y+t.h<=e.y+r)}_anyCollisionFor(e,t){let r=Array.from(this.cardContainer.querySelectorAll(".card-wrapper")).filter(s=>!t.has(s)&&!s.dataset.placeholder);if(!r.length)return!1;let a=r.map(s=>this._rectFor(s));for(let s of e)for(let c of a)if(this._rectsOverlap(s,c))return!0;return!1}_extractCardConfig(e){var a;if(!e)return{};try{let s=e.closest?e.closest(".card-wrapper"):null,c=(a=s==null?void 0:s.dataset)==null?void 0:a.cfg;if(c){let l=JSON.parse(c);if(l&&typeof l=="object")return l}}catch{}let t=e.__ddcSourceConfig;if(t&&typeof t=="object"&&Object.keys(t).length)try{return typeof structuredClone=="function"?structuredClone(t):JSON.parse(JSON.stringify(t))}catch{return{...t}}let r=e._config||e.config;if(r&&typeof r=="object"&&Object.keys(r).length)try{return typeof structuredClone=="function"?structuredClone(r):JSON.parse(JSON.stringify(r))}catch{return{...r}}return{}}async _openCardManager(){await this._openSmartPicker("add")}_catalog(){return[{id:"favorites",name:"Favorites",items:[]},{id:"ddc",name:"Drag and drop cards",hint:"Cards in this section are reserved for components that only make sense inside Drag & Drop Card. Connector lines are now drawn directly from the edit toolbar.",items:this._dragAndDropCardsCatalog()},{id:"recent",name:"Recent",items:[]},{id:"basics",name:"Basics",items:[{type:"entities",name:"Entities",icon:"mdi:format-list-bulleted"},{type:"entity",name:"Entity",icon:"mdi:checkbox-blank-circle-outline"},{type:"tile",name:"Tile",icon:"mdi:view-grid-outline"},{type:"button",name:"Button",icon:"mdi:gesture-tap-button"},{type:"glance",name:"Glance",icon:"mdi:eye-outline"},{type:"markdown",name:"Markdown",icon:"mdi:language-markdown"},{type:"custom_card",name:"Custom Card",icon:"mdi:puzzle-outline"}]},{id:"sensors",name:"Sensors",items:[{type:"sensor",name:"Sensor",icon:"mdi:antenna"},{type:"gauge",name:"Gauge",icon:"mdi:gauge"},{type:"history-graph",name:"History graph",icon:"mdi:chart-line"},{type:"statistics-graph",name:"Statistics graph",icon:"mdi:chart-bar"}]},{id:"visual",name:"Visual",items:[{type:"picture-entity",name:"Picture entity",icon:"mdi:image-outline"},{type:"picture-glance",name:"Picture glance",icon:"mdi:image-multiple-outline"},{type:"weather-forecast",name:"Weather",icon:"mdi:weather-partly-cloudy"},{type:"map",name:"Map",icon:"mdi:map"},{type:"iframe",name:"iFrame",icon:"mdi:application"}]},{id:"controls",name:"Controls",items:[{type:"light",name:"Light",icon:"mdi:lightbulb-outline"},{type:"thermostat",name:"Thermostat",icon:"mdi:thermostat"},{type:"media-control",name:"Media control",icon:"mdi:play-circle-outline"},{type:"alarm-panel",name:"Alarm panel",icon:"mdi:shield-home-outline"},{type:"area",name:"Area",icon:"mdi:map-marker"}]}]}_dragAndDropCardsCatalog(){return[{type:"custom:ddc-html-card",name:"HTML / Web card",icon:"mdi:language-html5",description:"Build a custom card with your own HTML, CSS and JavaScript inside Drag & Drop Card."}]}async _getEditorElementForType(e,t){try{console.info("[ddc:editor] Requesting editor element",{type:e,cfg:t})}catch{}let r=await this._helpersPromise||await window.loadCardHelpers();if(e==="custom:ddc-html-card")return document.createElement("ddc-html-card-editor");if(e==="custom:ddc-line-card")return document.createElement("ddc-line-card-editor");try{typeof e=="string"&&e&&!e.startsWith("custom:")&&e!=="custom_card"&&await this._ensureCardModuleLoaded(e,t)}catch{}if(typeof e=="string"&&e==="entity")try{return await this._getEntityCardEditor(t||{})}catch(h){console.warn("[ddc:editor] Custom entity editor failed",h)}let a=async()=>{try{if(r.getCardElementClass)return await r.getCardElementClass(e);let h;if(t&&typeof t=="object")h={type:e,...t};else{let p;try{p=await this._getStubConfigForType(e)}catch{}h=p&&typeof p=="object"?{...p}:{type:e}}let u=r.createCardElement(h);return(u==null?void 0:u.constructor)||null}catch{return null}};try{let h=await a();if(h){if(typeof h.getConfigElement=="function"){let u=await h.getConfigElement();if(u){try{console.info("[ddc:editor] Found static class editor",{type:e})}catch{}return u}}if(typeof h.getConfigForm=="function")try{let u=await h.getConfigForm();if(u&&u.schema){try{await customElements.whenDefined("ha-form")}catch{}let p=document.createElement("ha-form");p.hass=this.hass,p.schema=Array.isArray(u.schema)?u.schema.map(m=>({...m})):u.schema,typeof u.computeLabel=="function"&&(p.computeLabel=u.computeLabel.bind(h)),typeof u.computeHelper=="function"&&(p.computeHelper=u.computeHelper.bind(h)),p.data={...t},p.addEventListener("value-changed",m=>{});try{console.info("[ddc:editor] Generated form editor via getConfigForm",{type:e})}catch{}return p}}catch{}}}catch{}if(typeof e=="string"&&(e.startsWith("custom:")||e==="custom_card"))try{let h;try{h=await this._getStubConfigForType(e)}catch{}let u=h&&typeof h=="object"?{...h}:{type:e},p=r.createCardElement(u);if(p.hass=this.hass,typeof p.getConfigElement=="function"){let m=await p.getConfigElement();if(m){try{console.info("[ddc:editor] Found instance-level editor",{type:e})}catch{}return m}}}catch{}let s=String(e).replace(/^custom:/,""),l=(Array.isArray(window.customCards)?window.customCards:[]).find(h=>(h==null?void 0:h.type)===s||(h==null?void 0:h.type)===e||(h==null?void 0:h.type)===`custom:${s}`),g=[];l!=null&&l.editor&&g.push(l.editor),g.push(`${s}-editor`,`${s}-config-editor`),s&&typeof s=="string"&&g.push(`hui-${s}-card-editor`);for(let h of g)if(!(!h||typeof h!="string"))for(let u of[0,100,300,700,1500,3e3])try{if(customElements.get(h)||await Promise.race([customElements.whenDefined(h),new Promise(p=>setTimeout(p,u))]),customElements.get(h)){try{console.info("[ddc:editor] Found editor by tag",{type:e,tag:h})}catch{}return document.createElement(h)}}catch{}return null}async _ensureCardModuleLoaded(e,t){try{let r=await this._helpersPromise||await window.loadCardHelpers(),a;if(t&&typeof t=="object")a={type:e,...t};else{let l;try{l=await this._getStubConfigForType(e)}catch{}a=l&&typeof l=="object"?{...l}:{type:e}}let s=r.createCardElement(a);s.hass=this.hass;let c=document.createElement("div");c.style.cssText="position:fixed;left:-9999px;top:-9999px;opacity:0;pointer-events:none;",c.appendChild(s),document.body.appendChild(c),await new Promise(l=>requestAnimationFrame(l)),c.remove();try{console.info("[ddc:editor] Warmed card module",{type:e})}catch{}}catch{}}_ensureOverlayZFix(){if(document.querySelector("style[data-ddc-overlay-fix]"))return;let e=document.createElement("style");e.setAttribute("data-ddc-overlay-fix",""),e.textContent=`
      /* Make common HA overlays float above our modal */
      vaadin-combo-box-overlay,
      vaadin-overlay-backdrop,
      mwc-menu-surface,
      .mdc-menu-surface--open {
        z-index: 1000000 !important;
      }
    `,document.head.appendChild(e)}_customCardsFromRegistry(){return(Array.isArray(window.customCards)?window.customCards:[]).map(t=>{var r;return{type:(r=t==null?void 0:t.type)!=null&&r.startsWith("custom:")?t.type:`custom:${t==null?void 0:t.type}`,name:(t==null?void 0:t.name)||(t==null?void 0:t.type)||"Custom card",icon:"mdi:puzzle-outline",description:(t==null?void 0:t.description)||"",editorTag:(t==null?void 0:t.editor)||null}}).filter(t=>typeof t.type=="string"&&t.type.startsWith("custom:"))}_schemaForType(e){let t=a=>a,r=[];return{entities:t({fields:[{key:"entities",type:"entities",multi:!0,domains:r,label:"Entities"}]}),entity:t({fields:[{key:"entity",type:"entity",multi:!1,domains:r,label:"Entity"}]}),sensor:t({fields:[{key:"entity",type:"entity",multi:!1,domains:["sensor"],label:"Sensor"},{key:"name",type:"text",label:"Name (optional)"}]}),gauge:t({fields:[{key:"entity",type:"entity",multi:!1,domains:["sensor","number","input_number"],label:"Numeric entity"},{key:"min",type:"number",label:"Min",step:"any"},{key:"max",type:"number",label:"Max",step:"any"}]}),"history-graph":t({fields:[{key:"entities",type:"entities",multi:!0,domains:r,label:"Entities (multiselect)"},{key:"hours_to_show",type:"number",label:"Hours to show",default:24}]}),"statistics-graph":t({fields:[{key:"entities",type:"entities",multi:!0,domains:["sensor","number","input_number"],label:"Entities (multiselect)"},{key:"chart_type",type:"select",options:["line","bar"],label:"Chart type",default:"line"},{key:"statistic",type:"select",options:["mean","min","max","sum"],label:"Statistic",default:"mean"}]}),glance:t({fields:[{key:"entities",type:"entities",multi:!0,domains:r,label:"Entities (multiselect)"}]}),"picture-glance":t({fields:[{key:"entities",type:"entities",multi:!0,domains:r,label:"Entities (multiselect)"},{key:"image",type:"text",label:"Image URL (optional)"}]}),"picture-entity":t({fields:[{key:"entity",type:"entity",multi:!1,domains:r,label:"Entity"},{key:"image",type:"text",label:"Image URL (optional)"}]}),"weather-forecast":t({fields:[{key:"entity",type:"entity",multi:!1,domains:["weather"],label:"Weather entity"}]}),map:t({fields:[{key:"entities",type:"entities",multi:!0,domains:["device_tracker","person"],label:"Trackers / people (multiselect)"},{key:"default_zoom",type:"number",label:"Default zoom",default:14}]}),"media-control":t({fields:[{key:"entity",type:"entity",multi:!1,domains:["media_player"],label:"Media player"}]}),light:t({fields:[{key:"entity",type:"entity",multi:!1,domains:["light"],label:"Light"}]}),thermostat:t({fields:[{key:"entity",type:"entity",multi:!1,domains:["climate"],label:"Climate"}]}),"alarm-panel":t({fields:[{key:"entity",type:"entity",multi:!1,domains:["alarm_control_panel"],label:"Alarm"}]}),markdown:t({fields:[{key:"content",type:"textarea",label:"Markdown"}]}),tile:t({fields:[{key:"entity",type:"entity",multi:!1,domains:r,label:"Entity"}]}),button:t({fields:[{key:"entity",type:"entity",multi:!1,domains:r,label:"Entity (optional)"}]}),iframe:t({fields:[{key:"url",type:"text",label:"URL"}]}),area:t({fields:[{key:"area",type:"text",label:"Area ID"}]})}[e]||{fields:[]}}async _getEntityCardEditor(e={}){let t=document.createElement("div");t.style.display="flex",t.style.flexDirection="column",t.style.gap="12px",t.style.padding="8px 0",t.style.overflow="visible",t._cfg={type:"entity",...e||{}};let r=()=>{let S={type:"entity"};["entity","name","icon","attribute","unit","state_color","theme"].forEach(v=>{let b=t._cfg[v];b!==void 0&&b!==""&&b!==null&&(S[v]=b)}),t.dispatchEvent(new CustomEvent("config-changed",{detail:{config:S}}))},a=document.createElement("div");a.style.display="flex",a.style.flexDirection="column",a.style.gap="4px";let s=document.createElement("span");s.textContent="Entity",s.style.fontSize=".8rem",s.style.opacity="0.8";let c=document.createElement("ha-entity-picker");c.setAttribute("label","Select entity"),c.addEventListener("value-changed",S=>{var b,A,E;S.stopPropagation();let v=(E=S.detail&&((b=S.detail.value)!=null?b:S.detail))!=null?E:(A=S.target)==null?void 0:A.value;t._cfg.entity=v||"";try{l()}catch{}r()}),a.appendChild(s),a.appendChild(c),t.appendChild(a);let l=()=>{},g=document.createElement("div");g.style.display="grid",g.style.gridTemplateColumns="1fr 1fr",g.style.columnGap="12px",g.style.rowGap="12px";let h=(S,v)=>{let b=document.createElement("div");b.style.display="flex",b.style.flexDirection="column",b.style.gap="4px";let A=document.createElement("span");A.textContent=S,A.style.fontSize=".8rem",A.style.opacity="0.8",b.appendChild(A),b.appendChild(v),g.appendChild(b)},u;customElements.get("ha-textfield")?(u=document.createElement("ha-textfield"),u.setAttribute("label","Name"),u.addEventListener("input",()=>{t._cfg.name=u.value||void 0,r()})):(u=document.createElement("input"),u.type="text",u.placeholder="Name",u.addEventListener("input",()=>{t._cfg.name=u.value||void 0,r()}),Object.assign(u.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})),h("Name",u);let p;customElements.get("ha-icon-picker")?(p=document.createElement("ha-icon-picker"),p.setAttribute("label","Icon"),p.addEventListener("value-changed",S=>{var v;S.stopPropagation(),t._cfg.icon=((v=S.detail)==null?void 0:v.value)||void 0,r()}),Object.assign(p.style,{position:"relative",zIndex:"1000"})):customElements.get("ha-textfield")?(p=document.createElement("ha-textfield"),p.setAttribute("label","Icon"),p.addEventListener("input",()=>{t._cfg.icon=p.value||void 0,r()})):(p=document.createElement("input"),p.type="text",p.placeholder="mdi:icon",p.addEventListener("input",()=>{t._cfg.icon=p.value||void 0,r()}),Object.assign(p.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})),h("Icon",p);let m;if(l=()=>{var M,F;let S=[],v=(M=t._cfg)==null?void 0:M.entity,b=t._hass;if(v&&b&&b.states&&b.states[v]&&b.states[v].attributes)try{S=Object.keys(b.states[v].attributes||{}).filter(N=>N&&typeof N=="string"),S.sort()}catch{}let A=m&&typeof m.value!="undefined"?m.value:void 0,E=((m==null?void 0:m.tagName)||"").toLowerCase(),R={min_color_temp_kelvin:"Minimum color temperature (Kelvin)",max_color_temp_kelvin:"Maximum color temperature (Kelvin)",min_color_temp_mireds:"Minimum color temperature (mireds)",max_color_temp_mireds:"Maximum color temperature (mireds)",min_mireds:"Minimum color temperature (mireds)",max_mireds:"Maximum color temperature (mireds)",effect_list:"Available effects",color_mode:"Color mode",brightness:"Brightness",hs_color:"Hs color",rgb_color:"Rgb color",xy_color:"Xy color",entity_id:"Entity ID",friendly_name:"Friendly name",icon:"Icon"},D=N=>R[N]?R[N]:N.split("_").map($=>$&&($.toLowerCase()==="kelvin"?"Kelvin":$.toLowerCase()==="mireds"?"mireds":$.charAt(0).toUpperCase()+$.slice(1))).join(" ");if(E==="ha-combo-box"){let N=S.map($=>({value:$,label:D($)}));N.unshift({value:"",label:""}),m.items=N,A&&S.includes(A)?m.value=A:m.value=""}else if(E==="ha-select"){m.innerHTML="";let N=document.createElement("mwc-list-item");N.setAttribute("value",""),N.textContent="",m.appendChild(N);for(let $ of S){let Y=document.createElement("mwc-list-item");Y.setAttribute("value",$),Y.textContent=D($),m.appendChild(Y)}A&&S.includes(A)?m.value=A:m.value="",(F=m.requestUpdate)==null||F.call(m)}else if(E==="select"){m.innerHTML="";let N=document.createElement("option");N.value="",N.textContent="",m.appendChild(N);for(let $ of S){let Y=document.createElement("option");Y.value=$,Y.textContent=D($),m.appendChild(Y)}A&&S.includes(A)&&(m.value=A)}},customElements.get("ha-combo-box"))m=document.createElement("ha-combo-box"),m.setAttribute("label","Attribute"),m.setAttribute("item-label-path","label"),m.setAttribute("item-value-path","value"),m.setAttribute("allow-custom-value","false"),m.addEventListener("value-changed",S=>{var b,A;S.stopPropagation();let v=(A=(b=S.detail)==null?void 0:b.value)!=null?A:m.value;t._cfg.attribute=v||void 0,r()});else if(customElements.get("ha-select"))m=document.createElement("ha-select"),m.setAttribute("label","Attribute"),m.addEventListener("selected",S=>{S.stopPropagation(),t._cfg.attribute=m.value||void 0,r()}),Object.assign(m.style,{position:"relative",zIndex:"1000"});else{m=document.createElement("select");let S=document.createElement("option");S.value="",S.textContent="",m.appendChild(S),m.addEventListener("change",v=>{v.stopPropagation(),t._cfg.attribute=m.value||void 0,r()}),Object.assign(m.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),Object.assign(m.style,{position:"relative",zIndex:"1000"})}l(),h("Attribute",m);let x;customElements.get("ha-textfield")?(x=document.createElement("ha-textfield"),x.setAttribute("label","Unit"),x.addEventListener("input",()=>{t._cfg.unit=x.value||void 0,r()})):(x=document.createElement("input"),x.type="text",x.placeholder="Unit",x.addEventListener("input",()=>{t._cfg.unit=x.value||void 0,r()}),Object.assign(x.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})),h("Unit",x);let _;if(customElements.get("ha-select"))_=document.createElement("ha-select"),_.setAttribute("label","Theme (optional)"),_.addEventListener("selected",S=>{S.stopPropagation(),t._cfg.theme=_.value||void 0,r()});else{_=document.createElement("select");let S=document.createElement("option");S.value="",S.textContent="",_.appendChild(S),_.addEventListener("change",v=>{v.stopPropagation(),t._cfg.theme=_.value||void 0,r()}),Object.assign(_.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})}h("Theme (optional)",_);let P;customElements.get("ha-switch")?(P=document.createElement("ha-switch"),P.addEventListener("change",()=>{t._cfg.state_color=!!P.checked,r()})):(P=document.createElement("input"),P.type="checkbox",P.addEventListener("change",()=>{t._cfg.state_color=!!P.checked,r()}));let O=document.createElement("div");O.style.display="flex",O.style.alignItems="center",O.style.gap="8px";let C=document.createElement("span");return C.textContent="Show state color",C.style.fontSize=".8rem",C.style.opacity="0.8",O.appendChild(C),O.appendChild(P),g.appendChild(O),t.appendChild(g),t.setConfig=(S={})=>{t._cfg={type:"entity",...S||{}};let v=t._cfg;if(c&&("value"in c&&(c.value=v.entity||""),c.setAttribute&&c.setAttribute("value",v.entity||"")),u&&(u.value=v.name||""),p&&(p.value=v.icon||""),m){try{l()}catch{}m.value=v.attribute||""}x&&(x.value=v.unit||""),_&&(_.value=v.theme||""),P&&"checked"in P&&(P.checked=!!v.state_color)},Object.defineProperty(t,"hass",{get(){return this._hass},set(S){var v;if(this._hass=S,c){try{c.hass=S}catch{}customElements.get("ha-entity-picker")||customElements.whenDefined("ha-entity-picker").then(()=>{var b;try{c.hass=this._hass,(b=c.requestUpdate)==null||b.call(c)}catch{}}).catch(()=>{})}if(p){try{p.hass=S}catch{}customElements.get("ha-icon-picker")||customElements.whenDefined("ha-icon-picker").then(()=>{var b;try{p.hass=this._hass,(b=p.requestUpdate)==null||b.call(p)}catch{}}).catch(()=>{})}if(_){let b=[];S&&S.themes&&(S.themes.themes?b=Object.keys(S.themes.themes):typeof S.themes=="object"&&(b=Object.keys(S.themes).filter(R=>R!=="default_theme")));let A=_.value,E=(_.tagName||"").toLowerCase();if(E==="ha-select"){_.innerHTML="";let R=document.createElement("mwc-list-item");R.setAttribute("value",""),R.textContent="",_.appendChild(R);for(let D of b){let M=document.createElement("mwc-list-item");M.setAttribute("value",D),M.textContent=D,_.appendChild(M)}A&&b.includes(A)?_.value=A:A||(_.value=""),(v=_.requestUpdate)==null||v.call(_)}else if(E==="select"){_.innerHTML="";let R=document.createElement("option");R.value="",R.textContent="",_.appendChild(R);for(let D of b){let M=document.createElement("option");M.value=D,M.textContent=D,_.appendChild(M)}A&&Array.from(_.options).some(D=>D.value===A)&&(_.value=A)}}try{l()}catch{}}}),t.setConfig(e||{}),t}_shapeBySchema(e,t={}){let r=this._schemaForType(e)||{fields:[]},a={...t,type:e};for(let s of r.fields){let c=a[s.key];if(s.type==="entities"){let g=(Array.isArray(c)?c:c!=null&&c!==""?[c]:[]).filter(Boolean);g.length?a[s.key]=g:delete a[s.key]}else if(s.type==="entity")Array.isArray(c)&&(c=c[0]),c==null||c===""?delete a[s.key]:a[s.key]=String(c);else if(s.type==="number")if(c==null||c==="")delete a[s.key];else{let l=Number(c);Number.isFinite(l)?a[s.key]=l:delete a[s.key]}else(s.type==="select"||s.type==="text"||s.type==="textarea")&&(c==null||c===""?delete a[s.key]:a[s.key]=c)}return a}_statesList(e){var a;let t=Object.keys(((a=this.hass)==null?void 0:a.states)||{});if(!e||!e.length)return t;if(!this.__domainIndex||this.__domainIndex._gen!==t.length){let s={};for(let c of t){let l=c.split(".")[0];(s[l]||(s[l]=[])).push(c)}this.__domainIndex={_gen:t.length,map:s}}let r=[];for(let s of e)this.__domainIndex.map[s]&&r.push(...this.__domainIndex.map[s]);return r}_isNumericEntity(e){var a,s;let t=(s=(a=this.hass)==null?void 0:a.states)==null?void 0:s[e];if(!t)return!1;let r=Number(t.state);return Number.isFinite(r)}_getFaves(){try{return new Set(JSON.parse(localStorage.getItem("ddc_faves")||"[]"))}catch{return new Set}}_setFaves(e){try{localStorage.setItem("ddc_faves",JSON.stringify(Array.from(e)))}catch{}}_getRecent(){try{return JSON.parse(localStorage.getItem("ddc_recent_types")||"[]")}catch{return[]}}_pushRecent(e){try{let t=this._getRecent().filter(r=>r!==e);t.unshift(e),t.length>10&&(t.length=10),localStorage.setItem("ddc_recent_types",JSON.stringify(t))}catch{}}async _ensureCodeMirror(){if(!this.__cmReady){if(!document.querySelector("link[data-cm-core]")){let e=document.createElement("link");e.rel="stylesheet",e.href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.css",e.setAttribute("data-cm-core",""),document.head.appendChild(e)}await new Promise(e=>{if(window.CodeMirror)return e();let t=document.createElement("script");t.src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.js",t.onload=e,document.head.appendChild(t)}),await new Promise(e=>{var r,a;if((a=(r=window.CodeMirror)==null?void 0:r.mimeModes)!=null&&a.yaml)return e();let t=document.createElement("script");t.src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/yaml/yaml.min.js",t.onload=e,document.head.appendChild(t)}),this.__cmReady=!0}}async _mountYamlEditor(e,t,r,a){let s=h=>window.jsyaml?window.jsyaml.dump(h):JSON.stringify(h,null,2),c=h=>window.jsyaml?window.jsyaml.load(h):JSON.parse(h);e.innerHTML="";let l=s(t),g=null;if(customElements.get("ha-code-editor")){let h=document.createElement("ha-code-editor");h.mode="yaml",h.hass=this.hass,h.value=l,h.style.display="block",h.style.height="260px",e.appendChild(h);let u=!1;return h.addEventListener("value-changed",p=>{var x,_,P;if(u)return;let m=(P=(_=(x=p.detail)==null?void 0:x.value)!=null?_:h.value)!=null?P:"";if(g!==null&&m===g){g=null;return}try{r(c(m))}catch(O){a==null||a(O)}}),{setValue:p=>{var x;let m=s(p);((x=h.value)!=null?x:"")!==m&&(g=m,u=!0,h.value=m,u=!1)}}}try{await this._ensureCodeMirror();let h=window.CodeMirror(e,{value:l,mode:"yaml",lineNumbers:!0,lineWrapping:!0,indentUnit:2,tabSize:2}),u=!1;return h.on("change",()=>{if(u)return;let p=h.getValue();if(g!==null&&p===g){g=null;return}try{r(c(p))}catch(m){a==null||a(m)}}),{setValue:p=>{let m=s(p);h.getValue()!==m&&(g=m,u=!0,h.setValue(m),u=!1)}}}catch{let h=document.createElement("textarea");return h.style.width="100%",h.style.height="260px",h.value=l,h.addEventListener("input",()=>{if(g!==null&&h.value===g){g=null;return}try{r(c(h.value))}catch(u){a==null||a(u)}}),e.appendChild(h),{setValue:u=>{let p=s(u);h.value!==p&&(g=p,h.value=p)}}}}_createVirtualList({container:e,items:t,rowHeight:r=36,renderRow:a}){e.style.position="relative",e.style.overflow="auto";let s=document.createElement("div");s.style.height=`${t.length*r}px`,e.innerHTML="",e.appendChild(s);let c=new Map,l=()=>{let g=e.scrollTop,h=e.clientHeight,u=Math.max(0,Math.floor(g/r)-6),p=Math.min(t.length-1,Math.ceil((g+h)/r)+6);for(let[m,x]of c)(m<u||m>p)&&(x.remove(),c.delete(m));for(let m=u;m<=p;m++){if(c.has(m))continue;let x=a(t[m],m);x.style.position="absolute",x.style.left="0",x.style.right="0",x.style.top=`${m*r}px`,c.set(m,x),e.appendChild(x)}};return e.addEventListener("scroll",l,{passive:!0}),new ResizeObserver(l).observe(e),l(),{refresh(g){if(g){t=g,s.style.height=`${t.length*r}px`;for(let[,h]of c)h.remove();c.clear()}l()}}}async _openSmartPicker(e="add",t=null,r=null){let a=()=>s.remove(),s=document.createElement("div");s.className="modal smart-picker-modal",s.innerHTML=`
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
      </div>`,this.shadowRoot.appendChild(s);let c=s.querySelector("#leftPane"),l=s.querySelector("#addBtn"),g=s.querySelector("#footAdd"),h=s.querySelector("#cancelBtn"),u=s.querySelector("#footCancel"),p=s.querySelector("#search"),m=s.querySelector("#cardHost"),x=s.querySelector("#editorHost"),_=s.querySelector("#editorSpin"),P=s.querySelector("#quickFill"),O=s.querySelector("#yamlHost"),C=s.querySelector("#yamlErr"),S=s.querySelector("#yamlSec"),v=s.querySelector("#tabVisual"),b=s.querySelector("#tabYaml"),A=s.querySelector("#tabVis"),E=s.querySelector("#visSec"),R=s.querySelector("#visHost"),D=s.querySelector("#err"),M=s.querySelector("#previewSpin"),F=oe=>{l.disabled=g.disabled=!oe},N=oe=>{oe?(D.hidden=!1,D.textContent=oe):(D.hidden=!0,D.textContent="")},$=this._getFaves(),Y=this._getRecent(),X=this._catalog(),le=X.find(oe=>oe.id==="favorites"),re=X.find(oe=>oe.id==="recent"),ee=X.find(oe=>oe.id==="ddc");if(ee){let oe=new Map;[...this._dragAndDropCardsCatalog(),...ee.items||[]].forEach(ae=>{ae!=null&&ae.type&&oe.set(ae.type,ae)}),ee.items=Array.from(oe.values())}let ue=X.flatMap(oe=>oe.items||[]);le.items=ue.filter(oe=>$.has(oe.type)),re.items=Y.map(oe=>ue.find(ae=>ae.type===oe)).filter(Boolean);let se=this._customCardsFromRegistry();se.length&&X.push({id:"custom",name:"Custom (installed)",items:se});let ge=s.querySelector("#quickFillSec");ge&&(ge.style.display="none");let ce=s.querySelector("#optionsSec .hd"),H,V,J=()=>{if(!V)return;let oe=me&&$.has(me),ae=V.querySelector("ha-icon");ae&&ae.setAttribute("icon",oe?"mdi:star":"mdi:star-outline")},ne=oe=>{if(H){let ae=ue.find(De=>De.type===oe),He=ae?ae.name:oe||"";H.textContent=He}J()};if(ce&&!ce.querySelector(".sel-info")){let oe=ce.querySelector("span");oe&&(oe.style.display="none"),H=document.createElement("span"),H.className="sel-info",H.style.flex="1",H.style.fontWeight="bold",H.style.paddingRight="8px",ce.insertBefore(H,ce.firstChild),V=document.createElement("button"),V.className="icon-btn",V.setAttribute("title","Favorite"),Object.assign(V.style,{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"28px",height:"28px",borderRadius:"6px",border:"1px solid var(--divider-color)",background:"var(--primary-background-color)",padding:"0",marginLeft:"4px",cursor:"pointer"}),V.innerHTML='<ha-icon icon="mdi:star-outline"></ha-icon>',ce.appendChild(V),V.addEventListener("click",ae=>{ae.stopPropagation(),me&&($.has(me)?$.delete(me):$.add(me),this._setFaves($),J(),Ue())})}let U="visual",xe=oe=>{let ae=oe==="yaml",He=oe==="vis",De=!ae&&!He;v.classList.toggle("active",De),v.setAttribute("aria-selected",String(De)),b.classList.toggle("active",ae),b.setAttribute("aria-selected",String(ae)),A&&(A.classList.toggle("active",He),A.setAttribute("aria-selected",String(He))),x.parentElement.style.display=De?"":"none",S.style.display=ae?"":"none",E&&(E.style.display=He?"":"none"),ae?S.scrollIntoView({behavior:"smooth",block:"start"}):He&&E&&E.scrollIntoView({behavior:"smooth",block:"start"}),U=ae?"yaml":He?"vis":"visual"};v.addEventListener("click",async()=>{var oe;if(xe("visual"),!Ve)await vt(fe);else try{(oe=Ve.setConfig)==null||oe.call(Ve,fe)}catch{}}),b.addEventListener("click",()=>xe("yaml")),A&&A.addEventListener("click",()=>{xe("vis");try{Oe(fe)}catch{}}),xe("visual");let Ne=()=>{let oe=p.value.trim().toLowerCase();return X.map(ae=>{let He=ae.id==="ddc"?Array.from(new Map([...this._dragAndDropCardsCatalog(),...ae.items||[]].filter(De=>!!(De!=null&&De.type)).map(De=>[De.type,De])).values()):ae.items||[];return{...ae,items:He.filter(De=>!oe||De.name.toLowerCase().includes(oe)||De.type.toLowerCase().includes(oe))}}).filter(ae=>ae.items&&ae.items.length||ae.id==="favorites"||ae.id==="recent"||!oe&&ae.id==="ddc")},Ue=()=>{let oe=Ne();c.innerHTML="",oe.forEach(ae=>{let He=document.createElement("section");He.className="picker-category";let De=document.createElement("h4");if(De.className="picker-category-title",De.textContent=ae.name,He.appendChild(De),!ae.items.length&&(ae.id==="favorites"||ae.id==="recent"||ae.id==="ddc")){let Le=document.createElement("div");Le.className="picker-category-note",ae.id==="favorites"?Le.textContent="No favorites yet.":ae.id==="recent"?Le.textContent="No recent items yet.":Le.innerHTML=`<strong>Reserved for Drag & Drop Card</strong><span>${ae.hint||"Cards that only work inside Drag & Drop Card will appear here."}</span>`,He.appendChild(Le)}else ae.items.forEach(Le=>{let ze=document.createElement("button");ze.className="picker-item",ze.innerHTML=`
              <ha-icon icon="${Le.icon}"></ha-icon>
              <span class="picker-item-meta">
                <span class="picker-item-name">${Le.name}</span>
                <span class="picker-item-subtitle">${ae.name}</span>
              </span>`,ze.addEventListener("click",async()=>{rt(ze),await Bt(Le.type)}),He.appendChild(ze)});c.appendChild(He)})},rt=oe=>{c.querySelectorAll(".picker-item").forEach(ae=>{ae.classList.remove("active")}),oe&&oe.classList.add("active")},fe=null,me=null,ye=null,Ve=null,dt=null,Qe=0,je=null,ut="",yt=(oe,ae)=>{var Q;let He=this._schemaForType(oe);if(P.innerHTML="",!He.fields.length){P.innerHTML='<div style="opacity:.7;font-size:.9rem">No quick fill for this card \u2014 use the editors below.</div>';return}let De=Object.keys(((Q=this.hass)==null?void 0:Q.states)||{}),Le=document.createElement("div"),ze=(Ce,tt,ie,Ge)=>{let ct=document.createElement("div");Object.assign(ct.style,{padding:"8px 10px",border:"1px solid var(--divider-color)",borderRadius:"10px",cursor:"pointer",userSelect:"none",display:"flex",alignItems:"center",gap:"8px"}),ct.innerHTML=`<ha-icon icon="mdi:checkbox-blank-outline"></ha-icon><span>${Ce}</span>`,tt.includes(Ce)&&(ct.style.background="rgba(3,169,244,.12)",ct.style.borderColor="var(--primary-color)",ct.querySelector("ha-icon").setAttribute("icon","mdi:checkbox-marked")),ct.addEventListener("click",async()=>{let ke=tt.indexOf(Ce);ke>=0?tt.splice(ke,1):tt.push(Ce);let Ie=tt.includes(Ce);ct.style.background=Ie?"rgba(3,169,244,.12)":"",ct.style.borderColor=Ie?"var(--primary-color)":"var(--divider-color)",ct.querySelector("ha-icon").setAttribute("icon",Ie?"mdi:checkbox-marked":"mdi:checkbox-blank-outline"),fe=this._shapeBySchema(oe,{...fe,[Ge]:[...tt]}),Ke(fe),ye==null||ye.setValue(fe)}),ie.appendChild(ct)};He.fields.forEach(Ce=>{var Ge,ct,ke,Ie,ht,lt,pt,ft,gt;let tt=document.createElement("div");Object.assign(tt.style,{display:"flex",gap:"8px",alignItems:"center",marginBottom:"8px"});let ie=document.createElement("label");if(ie.textContent=Ce.label||Ce.key,ie.style.minWidth="130px",Ce.type==="entities"){let Ze=document.createElement("div");Ze.style.flex="1";let Se=document.createElement("input");Object.assign(Se,{placeholder:"Filter entities\u2026"}),Object.assign(Se.style,{width:"100%",padding:"8px 10px",borderRadius:"10px",border:"1px solid var(--divider-color)",background:"var(--card-background-color)",color:"var(--primary-text-color)"});let et=document.createElement("div");Object.assign(et.style,{maxHeight:"220px",overflow:"auto",marginTop:"8px",border:"1px solid var(--divider-color)",borderRadius:"10px",padding:"6px"});let Xe=Ce.domains&&Ce.domains.length?this._statesList(Ce.domains):De,nt=Array.isArray(ae[Ce.key])?[...ae[Ce.key]]:ae[Ce.key]?[ae[Ce.key]]:[],Ee=pe=>{let G=document.createElement("div");Object.assign(G.style,{padding:"6px 10px",margin:"4px 0",border:"1px solid var(--divider-color)",borderRadius:"10px",cursor:"pointer",display:"flex",alignItems:"center",gap:"8px",background:""});let Te=document.createElement("ha-icon");Te.setAttribute("icon","mdi:checkbox-blank-outline"),Te.style.setProperty("--mdc-icon-size","18px");let Be=document.createElement("span");Be.textContent=pe,Be.style.whiteSpace="nowrap",Be.style.overflow="hidden",Be.style.textOverflow="ellipsis",G.append(Te,Be);let _t=()=>{let Et=nt.includes(pe);G.style.background=Et?"rgba(3,169,244,.12)":"",G.style.borderColor=Et?"var(--primary-color)":"var(--divider-color)",Te.setAttribute("icon",Et?"mdi:checkbox-marked":"mdi:checkbox-blank-outline")};return _t(),G.addEventListener("click",()=>{let Et=nt.indexOf(pe);Et>=0?nt.splice(Et,1):nt.push(pe),fe=this._shapeBySchema(oe,{...fe,[Ce.key]:[...nt]}),Ke(fe),ye==null||ye.setValue(fe),_t()}),G},ve=Xe;this._createVirtualList({container:et,items:ve,rowHeight:36,renderRow:Ee}),Se.addEventListener("input",()=>{let pe=Se.value.trim().toLowerCase();ve=Xe.filter(G=>!pe||G.toLowerCase().includes(pe)),this._createVirtualList({container:et,items:ve,rowHeight:36,renderRow:Ee})}),Ze.append(Se,et),tt.append(ie,Ze),fe=this._shapeBySchema(oe,{...ae,[Ce.key]:nt})}if(Ce.type==="entity"){let Ze=document.createElement("div");Ze.style.flex="1",Ze.style.position="relative";let Se=document.createElement("input");Se.setAttribute("list","ddc_entlist_"+Ce.key),Object.assign(Se.style,{width:"100%",padding:"8px 10px 8px 36px",borderRadius:"10px",border:"1px solid var(--divider-color)"}),Se.placeholder=`Select ${((Ge=Ce.label)==null?void 0:Ge.toLowerCase())||"entity"}\u2026`;let et=document.createElement("ha-icon");et.setAttribute("icon","mdi:magnify"),Object.assign(et.style,{position:"absolute",left:"10px",top:"8px",width:"18px",height:"18px","--mdc-icon-size":"18px",opacity:".7"});let Xe=document.createElement("datalist");Xe.id="ddc_entlist_"+Ce.key;let nt=Ce.domains&&Ce.domains.length?this._statesList(Ce.domains):Object.keys(((ct=this.hass)==null?void 0:ct.states)||{});Xe.innerHTML=nt.map(Ee=>`<option value="${Ee}">`).join(""),Se.value=Array.isArray(ae[Ce.key])?ae[Ce.key][0]||"":ae[Ce.key]||"",Se.addEventListener("change",async()=>{fe=this._shapeBySchema(oe,{...fe,[Ce.key]:Se.value||void 0}),Ke(fe),ye==null||ye.setValue(fe)}),Ze.append(et,Se,Xe),tt.append(ie,Ze)}if(Ce.type==="number"){let Ze=document.createElement("div");Ze.style.flex="1",Ze.style.position="relative";let Se=document.createElement("input");Se.type="number",Ce.step&&(Se.step=Ce.step),Object.assign(Se.style,{width:"100%",padding:"8px 10px 8px 36px",borderRadius:"10px",border:"1px solid var(--divider-color)"});let et=document.createElement("ha-icon");et.setAttribute("icon","mdi:counter"),Object.assign(et.style,{position:"absolute",left:"10px",top:"8px","--mdc-icon-size":"18px",width:"18px",height:"18px",opacity:".7"}),Se.value=(Ie=(ke=ae[Ce.key])!=null?ke:Ce.default)!=null?Ie:"",Se.addEventListener("input",async()=>{let Xe=Se.value===""?void 0:Number(Se.value);fe=this._shapeBySchema(oe,{...fe,[Ce.key]:isNaN(Xe)?void 0:Xe}),Ke(fe),ye==null||ye.setValue(fe)}),Ze.append(et,Se),tt.append(ie,Ze)}if(Ce.type==="select"){let Ze=document.createElement("div");Ze.style.flex="1",Ze.style.position="relative";let Se=document.createElement("select");Object.assign(Se.style,{width:"100%",padding:"8px 10px 8px 36px",borderRadius:"10px",border:"1px solid var(--divider-color)"});let et=document.createElement("ha-icon");et.setAttribute("icon","mdi:format-list-bulleted"),Object.assign(et.style,{position:"absolute",left:"10px",top:"8px","--mdc-icon-size":"18px",width:"18px",height:"18px",opacity:".7"}),(Ce.options||[]).forEach(Xe=>{let nt=document.createElement("option");nt.value=Xe,Se.appendChild(nt)}),Se.value=(pt=(ht=ae[Ce.key])!=null?ht:Ce.default)!=null?pt:((lt=Ce.options)==null?void 0:lt[0])||"",Se.addEventListener("change",async()=>{fe=this._shapeBySchema(oe,{...fe,[Ce.key]:Se.value}),Ke(fe),ye==null||ye.setValue(fe)}),Ze.append(et,Se),tt.append(ie,Ze)}if(Ce.type==="text"){let Ze=document.createElement("div");Ze.style.flex="1",Ze.style.position="relative";let Se=document.createElement("input");Se.type="text",Object.assign(Se.style,{width:"100%",padding:"8px 10px 8px 36px",borderRadius:"10px",border:"1px solid var(--divider-color)"});let et=document.createElement("ha-icon");et.setAttribute("icon","mdi:text"),Object.assign(et.style,{position:"absolute",left:"10px",top:"8px","--mdc-icon-size":"18px",width:"18px",height:"18px",opacity:".7"}),Se.value=(ft=ae[Ce.key])!=null?ft:"",Se.addEventListener("input",async()=>{fe=this._shapeBySchema(oe,{...fe,[Ce.key]:Se.value||void 0}),Ke(fe),ye==null||ye.setValue(fe)}),Ze.append(et,Se),tt.append(ie,Ze)}if(Ce.type==="textarea"){let Ze=document.createElement("textarea");Object.assign(Ze.style,{flex:"1",minHeight:"120px",padding:"8px 10px",borderRadius:"10px",border:"1px solid var(--divider-color)"}),Ze.value=(gt=ae[Ce.key])!=null?gt:"",Ze.addEventListener("input",async()=>{fe=this._shapeBySchema(oe,{...fe,[Ce.key]:Ze.value||""}),Ke(fe),ye==null||ye.setValue(fe)}),tt.append(ie,Ze)}Le.appendChild(tt)}),P.innerHTML="",P.appendChild(Le)},bt=new WeakMap,Pt=oe=>{if(!R)return;let ae=Array.isArray(oe==null?void 0:oe.visibility)?oe.visibility.map(ze=>({...ze})):[],He=()=>Oe(fe),De=()=>{var ze;ae=ae.filter(Q=>Q&&typeof Q=="object"&&Q.condition),fe={...fe,visibility:ae};try{ye==null||ye.setValue(fe)}catch{}try{(ze=Ve==null?void 0:Ve.setConfig)==null||ze.call(Ve,fe)}catch{}Ke(fe)},Le=()=>{if(R.innerHTML="",!ae||!ae.length){let Q=document.createElement("div");Q.style.opacity=".7",Q.style.fontSize=".9rem",Q.style.marginBottom="8px",Q.textContent="No conditions defined \u2013 this card is always visible.",R.appendChild(Q)}ae.forEach((Q,Ce)=>{let tt=document.createElement("div");Object.assign(tt.style,{display:"flex",flexDirection:"column",gap:"6px",marginBottom:"12px",border:"1px solid var(--divider-color)",borderRadius:"8px",padding:"8px"});let ie=document.createElement("div");Object.assign(ie.style,{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"4px"});let Ge=document.createElement("div");Ge.style.display="flex",Ge.style.alignItems="center",Ge.style.gap="6px";let ct=document.createElement("ha-icon"),ke="mdi:filter",Ie=Q.condition||"state";Ie==="numeric_state"?ke="mdi:numeric":Ie==="screen"?ke="mdi:monitor":Ie==="user"?ke="mdi:account":Ie==="state"&&(ke="mdi:state-machine"),ct.setAttribute("icon",ke);let ht=document.createElement("span");ht.style.fontWeight="bold",ht.style.textTransform="capitalize",ht.textContent=Ie==="numeric_state"?"Entity numeric state":Ie==="state"?"Entity state":Ie==="screen"?"Screen":"User",Ge.appendChild(ct),Ge.appendChild(ht),ie.appendChild(Ge);let lt=document.createElement("button");lt.setAttribute("title","Remove condition"),lt.innerHTML='<ha-icon icon="mdi:trash-can-outline"></ha-icon>',Object.assign(lt.style,{border:"none",background:"transparent",cursor:"pointer",padding:"4px",display:"inline-flex",alignItems:"center"}),lt.style.position="relative",lt.style.zIndex="1000",lt.addEventListener("click",Xe=>{Xe.preventDefault(),Xe.stopPropagation();let nt=ae.indexOf(Q);nt>-1&&ae.splice(nt,1),fe.visibility=ae,Le(),De()}),ie.appendChild(lt),tt.appendChild(ie);let pt=document.createElement("div");pt.style.display="flex",pt.style.gap="8px";let ft=document.createElement("label");ft.textContent="Type",ft.style.fontSize=".85rem",ft.style.marginRight="4px";let gt=document.createElement("select");["state","numeric_state","screen","user"].forEach(Xe=>{let nt=document.createElement("option");nt.value=Xe,nt.textContent=Xe.replace("_"," "),gt.appendChild(nt)}),gt.value=Ie,gt.addEventListener("change",()=>{Q.condition=gt.value,delete Q.entity,delete Q.state,delete Q.state_not,delete Q.above,delete Q.below,delete Q.media_query,delete Q.users,Le(),De()}),pt.appendChild(ft),pt.appendChild(gt),tt.appendChild(pt);let Ze=document.createElement("div");Object.assign(Ze.style,{display:"flex",flexWrap:"wrap",gap:"8px",alignItems:"center"});let Se=(Xe,nt)=>{let Ee=document.createElement("div");Ee.style.display="flex",Ee.style.flexDirection="column",Ee.style.gap="4px",Ee.style.minWidth="150px";let ve=document.createElement("span");ve.textContent=Xe,ve.style.fontSize=".75rem",Ee.appendChild(ve),Ee.appendChild(nt),Ze.appendChild(Ee)};(()=>{var Xe,nt;if(Ze.innerHTML="",Q.condition==="state"){let Ee;customElements.get("ha-entity-picker")?(Ee=document.createElement("ha-entity-picker"),Ee.hass=this.hass,Ee.setAttribute("label","Select entity"),Ee.removeAttribute("hide-clear-icon"),Ee.value=Q.entity||"",Ee.addEventListener("value-changed",G=>{G.stopPropagation(),Q.entity=G.detail.value||"",De()})):(Ee=document.createElement("input"),Ee.value=Q.entity||"",Ee.addEventListener("input",()=>{Q.entity=Ee.value.trim(),De()}),Object.assign(Ee.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})),Se("Entity",Ee);let ve;if(customElements.get("ha-select")){ve=document.createElement("ha-select");let G=document.createElement("mwc-list-item");G.setAttribute("value","state"),G.textContent="State is equal to";let Te=document.createElement("mwc-list-item");Te.setAttribute("value","state_not"),Te.textContent="State is not equal to",ve.appendChild(G),ve.appendChild(Te),ve.value=Q.state_not!=null?"state_not":"state",ve.addEventListener("selected",Be=>{Be.stopPropagation();let _t=Q.state_not!=null?Q.state_not:Q.state;ve.value==="state_not"?(Q.state_not=_t,delete Q.state):(Q.state=_t,delete Q.state_not),De()})}else ve=document.createElement("select"),ve.innerHTML='<option value="state">State is equal to</option><option value="state_not">State is not equal to</option>',ve.value=Q.state_not!=null?"state_not":"state",Object.assign(ve.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),ve.addEventListener("change",G=>{G.stopPropagation();let Te=Q.state_not!=null?Q.state_not:Q.state;ve.value==="state_not"?(Q.state_not=Te,delete Q.state):(Q.state=Te,delete Q.state_not),De()});Se("Match type",ve);let pe;customElements.get("ha-textfield")?(pe=document.createElement("ha-textfield"),pe.value=(Q.state_not!=null?Q.state_not:Q.state)||"",pe.setAttribute("label",""),pe.addEventListener("input",G=>{G.stopPropagation();let Te=ve.value;Q[Te]=pe.value;let Be=Te==="state"?"state_not":"state";delete Q[Be],De()})):(pe=document.createElement("input"),pe.value=(Q.state_not!=null?Q.state_not:Q.state)||"",Object.assign(pe.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),pe.addEventListener("input",G=>{G.stopPropagation();let Te=ve.value;Q[Te]=pe.value;let Be=Te==="state"?"state_not":"state";delete Q[Be],De()})),Se("State",pe)}else if(Q.condition==="numeric_state"){let Ee;customElements.get("ha-entity-picker")?(Ee=document.createElement("ha-entity-picker"),Ee.hass=this.hass,Ee.setAttribute("label","Select entity"),Ee.removeAttribute("hide-clear-icon"),Ee.value=Q.entity||"",Ee.addEventListener("value-changed",G=>{G.stopPropagation(),Q.entity=G.detail.value||"",De()})):(Ee=document.createElement("input"),Ee.value=Q.entity||"",Ee.addEventListener("input",()=>{Q.entity=Ee.value.trim(),De()}),Object.assign(Ee.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})),Se("Entity",Ee);let ve;customElements.get("ha-textfield")?(ve=document.createElement("ha-textfield"),ve.setAttribute("type","number"),ve.value=Q.above!=null?Q.above:"",ve.addEventListener("input",G=>{G.stopPropagation();let Te=ve.value;Te===""||isNaN(Number(Te))?delete Q.above:Q.above=Number(Te),De()})):(ve=document.createElement("input"),ve.type="number",ve.value=Q.above!=null?Q.above:"",Object.assign(ve.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),ve.addEventListener("input",()=>{let G=ve.value;G===""||isNaN(Number(G))?delete Q.above:Q.above=Number(G),De()})),Se("Above",ve);let pe;customElements.get("ha-textfield")?(pe=document.createElement("ha-textfield"),pe.setAttribute("type","number"),pe.value=Q.below!=null?Q.below:"",pe.addEventListener("input",G=>{G.stopPropagation();let Te=pe.value;Te===""||isNaN(Number(Te))?delete Q.below:Q.below=Number(Te),De()})):(pe=document.createElement("input"),pe.type="number",pe.value=Q.below!=null?Q.below:"",Object.assign(pe.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),pe.addEventListener("input",()=>{let G=pe.value;G===""||isNaN(Number(G))?delete Q.below:Q.below=Number(G),De()})),Se("Below",pe)}else if(Q.condition==="screen"){let Ee=document.createElement("select"),ve=[{label:"Custom",value:""},{label:"Mobile (max-width: 599px)",value:"(max-width: 599px)"},{label:"Tablet (600px - 991px)",value:"(min-width: 600px) and (max-width: 991px)"},{label:"Desktop (min-width: 992px)",value:"(min-width: 992px)"}];if(ve.forEach(pe=>{let G=document.createElement("option");G.value=pe.value,G.textContent=pe.label,Ee.appendChild(G)}),Ee.value=(nt=(Xe=ve.find(pe=>pe.value===(Q.media_query||"")))==null?void 0:Xe.value)!=null?nt:"",Ee.addEventListener("change",()=>{Q.media_query=Ee.value,De()}),Se("Screen size",Ee),Ee.value===""){let pe=document.createElement("input");pe.placeholder="e.g. (min-width: 1280px)",pe.value=Q.media_query||"",pe.addEventListener("input",()=>{Q.media_query=pe.value,De()}),Se("Custom query",pe)}}else if(Q.condition==="user"){let Ee;customElements.get("ha-user-picker")?(Ee=document.createElement("ha-user-picker"),Ee.hass=this.hass,Ee.value=Array.isArray(Q.users)?Q.users:[],Ee.addEventListener("value-changed",ve=>{Q.users=Array.isArray(ve.detail.value)?ve.detail.value:[ve.detail.value],De()})):(Ee=document.createElement("input"),Ee.value=Array.isArray(Q.users)?Q.users.join(","):"",Ee.addEventListener("input",()=>{Q.users=Ee.value.split(",").map(ve=>ve.trim()).filter(Boolean),De()})),Se("Users",Ee)}})(),tt.appendChild(Ze),R.appendChild(tt)});let ze=document.createElement("button");ze.className="btn",ze.innerHTML='<ha-icon icon="mdi:plus"></ha-icon><span style="margin-left:6px">Add condition</span>',Object.assign(ze.style,{marginTop:"8px"}),ze.addEventListener("click",()=>{ae.push({condition:"state",entity:"",state:""}),fe.visibility=ae,Le(),De()}),R.appendChild(ze)};Le()},Oe=oe=>{if(!R)return;let ae=Array.isArray(oe==null?void 0:oe.visibility)?oe.visibility:[],He=null,De=async()=>{if(He)return He;try{if(this.hass&&typeof this.hass.callWS=="function")try{let Ce=await this.hass.callWS({type:"config/auth/list"});if(Array.isArray(Ce))return He=Ce,Ce}catch{}if(this.hass&&typeof this.hass.callApi=="function")try{let Ce=await this.hass.callApi("get","users");if(Array.isArray(Ce))return He=Ce,Ce}catch{}let Q=[];if(this.hass&&this.hass.users&&Array.isArray(this.hass.users)&&Q.push(...this.hass.users),this.hass&&this.hass.userData&&Array.isArray(this.hass.userData.users)&&Q.push(...this.hass.userData.users),this.hass&&this.hass.authorizedUsers&&Array.isArray(this.hass.authorizedUsers)&&Q.push(...this.hass.authorizedUsers),Q.length){let Ce=new Map;Q.forEach(ie=>{let Ge=ie.id||ie.user_id||ie.uid||ie.name||"";Ce.has(Ge)||Ce.set(Ge,ie)});let tt=Array.from(Ce.values());return He=tt,tt}}catch{}return He=[],[]},Le=()=>{var Q;ae=ae.filter(Ce=>Ce&&typeof Ce=="object"&&Ce.condition),fe.visibility=ae;try{ye==null||ye.setValue(fe)}catch{}try{(Q=Ve==null?void 0:Ve.setConfig)==null||Q.call(Ve,fe)}catch{}Ke(fe)},ze=()=>{R.innerHTML="";let Q=document.createElement("div");Q.style.opacity=".75",Q.style.fontSize=".85rem",Q.style.marginBottom="12px",Q.textContent="The card will be shown when ALL conditions below are fulfilled. If no conditions are set, the card will always be shown.",R.appendChild(Q);let Ce=(ie,Ge)=>{ie.forEach((Ie,ht)=>{tt(Ie,ie,ht,Ge)});let ct=document.createElement("div");ct.style.marginTop="8px";let ke=document.createElement("button");ke.className="btn",ke.innerHTML='<ha-icon icon="mdi:plus"></ha-icon><span style="margin-left:6px">Add condition</span>',Object.assign(ke.style,{display:"flex",alignItems:"center",gap:"6px",padding:"6px 12px",border:"none",borderRadius:"20px",background:"var(--primary-color)",color:"var(--text-primary-color, #fff)",cursor:"pointer",fontWeight:"500"}),ke.addEventListener("click",Ie=>{Ie.stopPropagation();let ht=ct.querySelector(".add-menu");if(ht){ht.remove();return}let lt=document.createElement("div");lt.className="add-menu",Object.assign(lt.style,{position:"relative",marginTop:"4px",border:"1px solid var(--divider-color)",borderRadius:"8px",background:"var(--card-background-color, var(--secondary-background-color))",boxShadow:"0 2px 4px rgba(0,0,0,0.2)"}),[{type:"numeric_state",label:"Entity numeric state",icon:"mdi:numeric"},{type:"state",label:"Entity state",icon:"mdi:state-machine"},{type:"screen",label:"Screen",icon:"mdi:monitor"},{type:"user",label:"User",icon:"mdi:account"},{type:"and",label:"And",icon:"mdi:logic-and"},{type:"or",label:"Or",icon:"mdi:logic-or"}].forEach(ft=>{let gt=document.createElement("div");gt.style.display="flex",gt.style.alignItems="center",gt.style.gap="8px",gt.style.padding="6px 12px",gt.style.cursor="pointer",gt.addEventListener("mouseenter",()=>gt.style.background="var(--hover-color, #444)"),gt.addEventListener("mouseleave",()=>gt.style.background=""),gt.addEventListener("click",()=>{lt.remove();let et;ft.type==="and"||ft.type==="or"?et={condition:ft.type,conditions:[]}:ft.type==="state"?et={condition:"state",entity:"",state:""}:ft.type==="numeric_state"?et={condition:"numeric_state",entity:""}:ft.type==="screen"?et={condition:"screen",media_query:""}:ft.type==="user"&&(et={condition:"user",users:[]}),ie.push(et),bt.set(et,!0),Le(),ze()});let Ze=document.createElement("ha-icon");Ze.setAttribute("icon",ft.icon),gt.appendChild(Ze);let Se=document.createElement("span");Se.textContent=ft.label,gt.appendChild(Se),lt.appendChild(gt)}),ct.appendChild(lt)}),ct.appendChild(ke),Ge.appendChild(ct)},tt=(ie,Ge,ct,ke)=>{let Ie=ie.condition||"state",ht=bt.get(ie);ht===void 0&&(ht=ae.length===1);let lt=document.createElement("div");Object.assign(lt.style,{display:"flex",flexDirection:"column",border:"1px solid var(--divider-color)",borderLeft:"3px solid var(--primary-color)",borderRadius:"12px",padding:"16px",marginBottom:"20px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",boxShadow:"var(--ha-card-box-shadow, 0 2px 6px rgba(0, 0, 0, 0.15))"});let pt=document.createElement("div");pt.style.display="flex",pt.style.alignItems="center",pt.style.justifyContent="space-between",pt.style.marginBottom="8px",pt.style.borderBottom="1px solid var(--divider-color)",pt.style.paddingBottom="4px",pt.style.position="relative";let ft=document.createElement("div");ft.style.display="flex",ft.style.alignItems="center",ft.style.gap="6px";let gt=document.createElement("button");gt.innerHTML=`<ha-icon icon="${ht?"mdi:chevron-down":"mdi:chevron-right"}"></ha-icon>`,Object.assign(gt.style,{border:"none",background:"transparent",cursor:"pointer",padding:"4px",display:"inline-flex",alignItems:"center"}),gt.addEventListener("click",nt=>{nt.stopPropagation(),bt.set(ie,!ht),ze()}),ft.appendChild(gt);let Ze=document.createElement("ha-icon"),Se="mdi:filter";Ie==="numeric_state"?Se="mdi:numeric":Ie==="screen"?Se="mdi:monitor":Ie==="user"?Se="mdi:account":Ie==="state"?Se="mdi:state-machine":Ie==="and"?Se="mdi:logic-and":Ie==="or"&&(Se="mdi:logic-or"),Ze.setAttribute("icon",Se),ft.appendChild(Ze);let et=document.createElement("span");et.style.fontWeight="600",et.style.fontSize="0.95rem",et.style.textTransform="capitalize",et.textContent=Ie==="numeric_state"?"Entity numeric state":Ie==="state"?"Entity state":Ie==="screen"?"Screen":Ie==="user"?"User":Ie==="and"?"And":"Or",ft.appendChild(et),pt.appendChild(ft);let Xe=document.createElement("button");if(Xe.setAttribute("title","Remove condition"),Xe.innerHTML='<ha-icon icon="mdi:trash-can-outline"></ha-icon>',Object.assign(Xe.style,{border:"none",background:"transparent",cursor:"pointer",padding:"4px",display:"inline-flex",alignItems:"center"}),Xe.style.position="relative",Xe.style.zIndex="1000",Xe.addEventListener("click",nt=>{nt.preventDefault(),nt.stopPropagation();let Ee=Ge.indexOf(ie);Ee>-1&&Ge.splice(Ee,1),Le(),ze()}),pt.appendChild(Xe),lt.appendChild(pt),Ie!=="and"&&Ie!=="or"){if(ht){let nt=document.createElement("div");Object.assign(nt.style,{display:"flex",flexDirection:"column",gap:"14px",alignItems:"stretch"});let Ee=(ve,pe)=>{let G=document.createElement("div");G.style.display="flex",G.style.flexDirection="column",G.style.gap="4px";let Te=document.createElement("span");Te.textContent=ve,Te.style.fontSize=".75rem",G.appendChild(Te),G.appendChild(pe),nt.appendChild(G);let Be=(pe.tagName||"").toLowerCase();(Be==="input"||Be==="select")&&Object.assign(pe.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})};if(ie.condition==="state"){let ve=document.createElement("ha-entity-picker");ve.value=ie.entity||"",ve.hass=this.hass,ve.setAttribute("label","Select entity"),ve.addEventListener("value-changed",Te=>{ie.entity=Te.detail.value||"",Le()}),customElements.get("ha-entity-picker")||customElements.whenDefined("ha-entity-picker").then(()=>{ze()}).catch(()=>{}),Ee("Entity",ve);let pe;if(customElements.get("ha-select")){pe=document.createElement("ha-select");let Te=document.createElement("mwc-list-item");Te.setAttribute("value","state"),Te.textContent="State is equal to";let Be=document.createElement("mwc-list-item");Be.setAttribute("value","state_not"),Be.textContent="State is not equal to",pe.appendChild(Te),pe.appendChild(Be),pe.value=ie.state_not!=null?"state_not":"state",pe.addEventListener("selected",_t=>{_t.stopPropagation();let Et=ie.state_not!=null?ie.state_not:ie.state;pe.value==="state_not"?(ie.state_not=Et,delete ie.state):(ie.state=Et,delete ie.state_not),Le()})}else pe=document.createElement("select"),pe.innerHTML='<option value="state">State is equal to</option><option value="state_not">State is not equal to</option>',pe.value=ie.state_not!=null?"state_not":"state",pe.addEventListener("change",Te=>{Te.stopPropagation();let Be=ie.state_not!=null?ie.state_not:ie.state;pe.value==="state_not"?(ie.state_not=Be,delete ie.state):(ie.state=Be,delete ie.state_not),Le()}),Object.assign(pe.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"});Ee("Match type",pe);let G;customElements.get("ha-textfield")?(G=document.createElement("ha-textfield"),G.value=(ie.state_not!=null?ie.state_not:ie.state)||"",G.setAttribute("label",""),G.addEventListener("input",Te=>{Te.stopPropagation();let Be=pe.value;ie[Be]=G.value;let _t=Be==="state"?"state_not":"state";delete ie[_t],Le()})):(G=document.createElement("input"),G.value=(ie.state_not!=null?ie.state_not:ie.state)||"",Object.assign(G.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),G.addEventListener("input",Te=>{Te.stopPropagation();let Be=pe.value;ie[Be]=G.value;let _t=Be==="state"?"state_not":"state";delete ie[_t],Le()})),Ee("State",G)}else if(ie.condition==="numeric_state"){let ve=document.createElement("ha-entity-picker");ve.value=ie.entity||"",ve.hass=this.hass,ve.setAttribute("label","Select entity"),ve.removeAttribute("hide-clear-icon"),ve.addEventListener("value-changed",Te=>{ie.entity=Te.detail.value||"",Le()}),customElements.get("ha-entity-picker")||customElements.whenDefined("ha-entity-picker").then(()=>{ze()}).catch(()=>{}),Ee("Entity",ve);let pe;customElements.get("ha-textfield")?(pe=document.createElement("ha-textfield"),pe.setAttribute("type","number"),pe.value=ie.above!=null?ie.above:"",pe.addEventListener("input",Te=>{Te.stopPropagation();let Be=pe.value;Be===""||isNaN(Number(Be))?delete ie.above:ie.above=Number(Be),Le()})):(pe=document.createElement("input"),pe.type="number",pe.value=ie.above!=null?ie.above:"",Object.assign(pe.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),pe.addEventListener("input",()=>{let Te=pe.value;Te===""||isNaN(Number(Te))?delete ie.above:ie.above=Number(Te),Le()})),Ee("Above",pe);let G;customElements.get("ha-textfield")?(G=document.createElement("ha-textfield"),G.setAttribute("type","number"),G.value=ie.below!=null?ie.below:"",G.addEventListener("input",Te=>{Te.stopPropagation();let Be=G.value;Be===""||isNaN(Number(Be))?delete ie.below:ie.below=Number(Be),Le()})):(G=document.createElement("input"),G.type="number",G.value=ie.below!=null?ie.below:"",Object.assign(G.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),G.addEventListener("input",()=>{let Te=G.value;Te===""||isNaN(Number(Te))?delete ie.below:ie.below=Number(Te),Le()})),Ee("Below",G)}else if(ie.condition==="screen"){let ve=[{label:"Mobile",query:"(max-width: 599px)"},{label:"Tablet (min: 768px)",query:"(min-width: 768px)"},{label:"Desktop (min: 1024px)",query:"(min-width: 1024px)"},{label:"Wide (min: 1280px)",query:"(min-width: 1280px)"}];Array.isArray(ie.media_query_list)||(ie.media_query_list=[]);let pe=document.createElement("div");pe.style.display="flex",pe.style.flexDirection="column",pe.style.gap="4px",ve.forEach(G=>{let Te=document.createElement("label");Te.style.display="flex",Te.style.alignItems="center",Te.style.gap="6px";let Be=document.createElement("input");Be.type="checkbox",Be.checked=ie.media_query_list.includes(G.query),Be.addEventListener("change",()=>{Be.checked?ie.media_query_list.push(G.query):ie.media_query_list=ie.media_query_list.filter(Et=>Et!==G.query),ie.media_query=ie.media_query_list.join(","),Le()});let _t=document.createElement("span");_t.textContent=G.label,Te.appendChild(Be),Te.appendChild(_t),pe.appendChild(Te)}),Ee("Screen sizes",pe)}else if(ie.condition==="user"){let ve;if(customElements.get("ha-user-picker"))ve=document.createElement("ha-user-picker"),ve.hass=this.hass,ve.setAttribute("label","Select user"),ve.value=Array.isArray(ie.users)?ie.users:[],ve.addEventListener("value-changed",pe=>{let G=pe.detail.value;ie.users=Array.isArray(G)?G:[G],Le()});else{ve=document.createElement("div"),ve.style.display="flex",ve.style.flexDirection="column",ve.style.gap="4px";let pe=document.createElement("span");pe.style.opacity="0.7",pe.style.fontSize=".85rem",pe.textContent="Loading users\u2026",ve.appendChild(pe);let G=Array.isArray(ie.users)?ie.users:[];De().then(Te=>{if(ve.innerHTML="",Array.isArray(Te)&&Te.length)Te.forEach(Be=>{let _t=Be.id||Be.user_id||Be.uid||Be.name||"",Et=Be.name||_t,At=document.createElement("label");At.style.display="flex",At.style.alignItems="center",At.style.gap="6px",At.style.padding="4px 0";let ri=document.createElement("input");ri.type="checkbox",ri.checked=G.includes(_t)||G.includes(Et),ri.addEventListener("change",()=>{let ci=Array.isArray(ie.users)?ie.users.slice():[];ri.checked?ci.includes(_t)||ci.push(_t):ci=ci.filter(Pi=>Pi!==_t&&Pi!==Et),ie.users=ci,Le()});let bi=document.createElement("span");bi.textContent=Et,At.appendChild(ri),At.appendChild(bi),ve.appendChild(At)});else{let Be=document.createElement("input");Be.value=Array.isArray(ie.users)?ie.users.join(","):"",Object.assign(Be.style,{padding:"6px 10px",borderRadius:"6px",border:"1px solid var(--divider-color)",background:"var(--card-background-color, var(--secondary-background-color))",color:"var(--primary-text-color, inherit)"});let _t=()=>{ie.users=Be.value.split(",").map(Et=>Et.trim()).filter(Boolean),Le()};Be.addEventListener("change",_t),Be.addEventListener("blur",_t),ve.appendChild(Be)}})}Ee("Users",ve)}lt.appendChild(nt)}}else if(ht){Array.isArray(ie.conditions)||(ie.conditions=[]);let nt=document.createElement("div");nt.style.marginLeft="16px",Ce(ie.conditions,nt),lt.appendChild(nt)}ke.appendChild(lt)};Ce(ae,R)};ze()},Ke=oe=>{if(((oe==null?void 0:oe.type)||"")==="custom_card"){ut=JSON.stringify(oe||{}),m.innerHTML='<div style="opacity:.6;font-size:.9rem;padding:8px">Preview not available for the custom card placeholder. Use the YAML editor.</div>',M.hidden=!0;return}let ae=JSON.stringify(oe||{});ae!==ut&&(ut=ae,je&&clearTimeout(je),je=setTimeout(async()=>{var De,Le;let He=++Qe;M.hidden=!1,m.innerHTML="",await An();try{if(He!==Qe)return;let ze=null,Q=String((oe==null?void 0:oe.type)||"");if(Q==="custom:ddc-html-card")ze=document.createElement("ddc-html-card"),(De=ze.setConfig)==null||De.call(ze,oe),ze.hass=this.hass;else if(Q==="custom:ddc-line-card")ze=document.createElement("ddc-line-card"),(Le=ze.setConfig)==null||Le.call(ze,oe),ze.hass=this.hass;else{let Ce=await this._helpersPromise||await window.loadCardHelpers();if(He!==Qe)return;ze=Ce.createCardElement(oe),ze.hass=this.hass}if(He!==Qe)return;m.appendChild(ze)}catch{}finally{He===Qe&&(M.hidden=!0)}},150))},vt=async oe=>{var De;let ae=++Qe;_.hidden=!1,x.innerHTML="",await lc();let He=oe.type||me;if(dt=await this._getEditorElementForType(He,oe),He==="custom_card"){let Le=document.createElement("div");return Le.style.opacity=".7",Le.style.fontSize=".9rem",Le.textContent="Custom card placeholder: use the YAML editor to paste the card type and options.",x.appendChild(Le),Ve=null,U!=="yaml"&&xe("yaml"),F(!0),_.hidden=!0,!1}if(!dt){let Le=document.createElement("div");return Le.style.opacity=".7",Le.style.fontSize=".9rem",Le.textContent="This card does not support a visual editor. Please use the YAML tab to configure it.",ae===Qe&&(x.appendChild(Le),_.hidden=!0),Ve=null,F(!0),U!=="visual"&&xe("yaml"),!1}try{dt.hass=this.hass,dt.isConnected||x.appendChild(dt),await Promise.resolve();try{dt.setConfig(oe)}catch{}try{let ze=await this._helpersPromise||await window.loadCardHelpers(),Q=ze.getCardElementClass?await ze.getCardElementClass(oe.type||me):null;if(Q!=null&&Q.getStubConfig){let Ce=Object.keys(((De=this.hass)==null?void 0:De.states)||{}),tt=Ge=>Ce.filter(ct=>ct.startsWith(Ge+".")),ie=await Q.getStubConfig(this.hass,Ce,tt);ie&&(oe=this._shapeBySchema(oe.type||me,{...ie}))}}catch{}await Promise.resolve();try{dt.setConfig(oe)}catch{}Ve&&this.__onEditorChange&&(Ve.removeEventListener("config-changed",this.__onEditorChange),Ve.removeEventListener("value-changed",this.__onEditorChange));let Le=async ze=>{var tt,ie,Ge;let Q=(Ge=(tt=ze.detail)==null?void 0:tt.config)!=null?Ge:(ie=ze.detail)==null?void 0:ie.value;if(!Q)return;let Ce=Q.type||me;me=Ce,fe=this._shapeBySchema(Ce,Q),N(""),F(!0),yt(me,fe),Ke(fe),ye==null||ye.setValue(fe)};return this.__onEditorChange=Le,dt.addEventListener("config-changed",Le),dt.addEventListener("value-changed",Le),Ve=dt,U!=="yaml"&&xe("visual"),F(!0),!0}finally{ae===Qe&&(_.hidden=!0)}},Ct=async oe=>{ye=await this._mountYamlEditor(O,oe,async ae=>{var He,De;try{let Le=(ae==null?void 0:ae.type)||me,ze=this._shapeBySchema(Le,ae||{}),Q=Le!==me;if(me=Le,fe=ze,C.hidden=!0,C.textContent="",F(!0),Q){if(yt(me,fe),Ve){try{(He=Ve.setConfig)==null||He.call(Ve,fe)}catch{}U!=="yaml"&&xe("visual")}try{Oe(fe)}catch{}}else{try{(De=Ve==null?void 0:Ve.setConfig)==null||De.call(Ve,fe)}catch{}Ke(fe);try{Oe(fe)}catch{}}}catch(Le){C.hidden=!1,C.textContent=`Invalid config: ${String((Le==null?void 0:Le.message)||Le)}`,F(!1)}},ae=>{C.hidden=!1,C.textContent=`Invalid YAML: ${String((ae==null?void 0:ae.message)||ae)}`,F(!1)})},It=async oe=>{if(this.__stubCache.has(oe))return{...this.__stubCache.get(oe)};let ae=await this._getStubConfigForType(oe);return this.__stubCache.set(oe,{...ae}),{...ae}},Bt=async oe=>{C.hidden=!0,C.textContent="",N(""),me=oe;try{typeof ne=="function"&&ne(oe)}catch{}let ae=e==="edit"&&t&&t.type===oe?{...t}:await It(oe);fe=this._shapeBySchema(oe,ae),Ve=null,yt(oe,fe),await Ct(fe),await An(),Ke(fe);try{Oe(fe)}catch{}try{let He=await vt(fe);xe(He?"visual":"yaml")}catch{xe("yaml")}F(!0)},Rt=async()=>{if(!fe)return;let oe=this._shapeBySchema(me,fe);e==="edit"&&typeof r=="function"?await r(oe):(await this._addPickedCardToLayout(oe),this._pushRecent((oe||{}).type)),a()};h.addEventListener("click",a),u.addEventListener("click",a),l.addEventListener("click",Rt),g.addEventListener("click",Rt),s.addEventListener("keydown",oe=>{oe.key==="Escape"&&a(),oe.key==="Enter"&&!l.disabled&&Rt()});let Lt=null;p.addEventListener("input",()=>{Lt&&clearTimeout(Lt),Lt=setTimeout(Ue,120)}),Ue(),e==="edit"&&t?(await Bt(t.type||"entities"),F(!0)):(await Bt((()=>{var He;return(((He=this._getRecent)==null?void 0:He.call(this))||[]).find(Boolean)||"entities"})()),F(!0))}async _getStubConfigForType(e){var h;let t=await this._helpersPromise||await window.loadCardHelpers(),r=null;if(e==="custom_card")return null;if(e==="custom:ddc-line-card")return{type:"custom:ddc-line-card",title:"",entity:"",active_states:"on,home,open,playing,charging,active,>0",direction:"horizontal",arrows:"end",flow_direction:"auto",line_style:"solid",thickness:10,animate_mode:"active",animation_speed:1.8,active_color:"var(--primary-color, #ff9800)",inactive_color:"rgba(148, 163, 184, 0.42)",glow:!0,rounded:!0};if(e==="custom:ddc-html-card")return{type:"custom:ddc-html-card",title:"HTML / Web card",html:`<div class="ddc-html-demo">
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
};`,rerun_on_hass_update:!1};try{t.getCardElementClass&&(r=await t.getCardElementClass(e))}catch{}let a=Object.keys(((h=this.hass)==null?void 0:h.states)||{}),s=u=>a.filter(p=>p.startsWith(u+".")),c={type:e};if(r!=null&&r.getStubConfig)try{let u=await r.getStubConfig(this.hass,a,s);if(e!=="entity")return u;u&&typeof u=="object"&&(c={...c,...u})}catch{}let l=a[0],g=s("sensor")[0]||l;if(["entity","sensor","button","gauge","tile","light","thermostat","media-control","alarm-panel","picture-entity","weather-forecast","map"].includes(e)){let u={sensor:g,gauge:s("sensor").find(this._isNumericEntity.bind(this))||g,"media-control":s("media_player")[0]||l,light:s("light")[0]||l,thermostat:s("climate")[0]||l,"alarm-panel":s("alarm_control_panel")[0]||l,"weather-forecast":s("weather")[0]||l,map:s("device_tracker")[0]||s("person")[0]||l}[e]||g||l;["entity","sensor","button","gauge","tile","light","thermostat","media-control","alarm-panel","picture-entity"].includes(e)?c.entity=u:e==="weather-forecast"?(c.entity=u,c.show_current=!0,c.show_forecast=!0,c.forecast_type="daily"):e==="map"&&(c.entities=[u].filter(Boolean),c.theme_mode="auto")}if(["entities","glance","picture-glance","history-graph","statistics-graph"].includes(e)){let u=p=>(p!=null&&p.length?a.filter(m=>p.includes(m.split(".")[0])):a).slice(0,3);e==="statistics-graph"?c.entities=u(["sensor","number","input_number"]):c.entities=u()}if(e==="markdown"&&(c.content="Markdown card"),e==="sensor"&&(c.graph="line"),e==="button"&&(c.show_name=!0,c.show_icon=!0),e==="tile"&&(c.features_position="bottom",c.vertical=!1),e==="picture-glance"&&(c.title=c.title||"Glance",c.image=c.image||"https://demo.home-assistant.io/stub_config/kitchen.png"),e==="picture-entity"&&(c.image=c.image||"https://demo.home-assistant.io/stub_config/bedroom.png"),e==="iframe"&&(c.url=c.url||"https://www.home-assistant.io",c.aspect_ratio=c.aspect_ratio||"50%"),e==="alarm-panel"&&(c.states=c.states||["arm_home","arm_away"]),e==="area")try{let u=this.hass&&this.hass.areas?Object.values(this.hass.areas):[];u.length?c.area=u[0].area_id||u[0].name||u[0].id:c.area=l?l.split(".")[0]:"default_area",c.display_type="picture",c.alert_classes=c.alert_classes||["moisture","motion"],c.sensor_classes=c.sensor_classes||["temperature","humidity"],c.features_position="bottom"}catch{}return c}_getNextAvailablePosition(){let e=Array.from(this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)")),t=new Set,r=this.gridSize;e.forEach(c=>{let l=parseFloat(c.getAttribute("data-x"))||0,g=parseFloat(c.getAttribute("data-y"))||0,h=parseFloat(getComputedStyle(c).width)||100,u=parseFloat(getComputedStyle(c).height)||100,p=Math.floor(l/r),m=Math.floor(g/r),x=Math.floor((l+h)/r),_=Math.floor((g+u)/r);for(let P=p;P<x;P++)for(let O=m;O<_;O++)t.add(`${P}-${O}`)});let a=0,s=0;for(;t.has(`${a}-${s}`);)a+=6,a>60&&(a=0,s+=6);return{x:a*r,y:s*r}}async _addPickedCardToLayout(e){this._hideEmptyPlaceholder();let t=await this._createCard(e),r=this._makeWrapper(t),a=this._getNextAvailablePosition();if(this._setCardPosition(r,a.x,a.y),String((e==null?void 0:e.type)||"")==="custom:ddc-line-card"){let c=["vertical","diagonal-up","diagonal-down"].includes(String((e==null?void 0:e.direction)||"").toLowerCase());r.style.width=`${(c?5:16)*this.gridSize}px`,r.style.height=`${(c?14:4)*this.gridSize}px`}else r.style.width=`${14*this.gridSize}px`,r.style.height=`${10*this.gridSize}px`;{let c=this._highestZ()+1;r.style.zIndex=String(Math.max(c,6))}this.cardContainer.appendChild(r);try{this._rebuildOnce(r.firstElementChild)}catch{}this._initCardInteract(r),this._resizeContainer(),this._queueSave("add"),this._toast("Card added to layout."),this._syncEmptyStateUI();try{this._applyVisibility_()}catch{}}_toggleSelection(e,t=null){let r=t==null?!this._selection.has(e):!!t;r?this._selection.add(e):this._selection.delete(e),e.classList.toggle("selected",r)}_clearSelection(){for(let e of this._selection)e.classList.remove("selected");this._selection.clear()}_copySelection(){var e,t,r;try{let a=this._selection?Array.from(this._selection):[];if(!a.length){(e=this._toast)==null||e.call(this,"Nothing selected to copy.");return}let s=1/0,c=1/0,l=[];for(let g of a){if(g.dataset.placeholder)continue;let h=parseFloat(g.getAttribute("data-x"))||0,u=parseFloat(g.getAttribute("data-y"))||0;h<s&&(s=h),u<c&&(c=u)}for(let g of a){if(g.dataset.placeholder)continue;let h=this._extractCardConfig(g.firstElementChild)||{},u=parseFloat(g.getAttribute("data-x"))||0,p=parseFloat(g.getAttribute("data-y"))||0,m=g.style.width||`${g.getBoundingClientRect().width}px`,x=g.style.height||`${g.getBoundingClientRect().height}px`;l.push({cfg:h,dx:u-s,dy:p-c,width:m,height:x})}window.__DDC_CLIPBOARD__={items:l},(t=this._toast)==null||t.call(this,`Copied ${l.length} card${l.length===1?"":"s"}.`)}catch(a){console.warn("[drag-and-drop-card] Copy failed",a),(r=this._toast)==null||r.call(this,"Copy failed.")}}async _pasteClipboard(){var e,t,r,a;try{let s=window.__DDC_CLIPBOARD__;if(!s||!Array.isArray(s.items)||!s.items.length){(e=this._toast)==null||e.call(this,"Clipboard is empty.");return}let c=s.items,l=1,g;do{let p=this.gridSize*l,m=this.gridSize*l;g=c.map(x=>{let _=parseFloat(x.width)||0,P=parseFloat(x.height)||0;return{x:p+(x.dx||0),y:m+(x.dy||0),w:_,h:P}}),l+=1}while(this._anyCollisionFor(g,new Set));let h=this.gridSize*(l-1),u=this.gridSize*(l-1);for(let p of c){let m=p.cfg||{},x=await this._createCard(m),_=this._makeWrapper(x);_.style.width=p.width,_.style.height=p.height;let P=h+(p.dx||0),O=u+(p.dy||0);this._setCardPosition(_,P,O);{let C=this._highestZ()+1;_.style.zIndex=String(Math.max(C,6))}try{let C=this._normalizeTabId(this.activeTab||this.defaultTab);C&&(_.dataset.tabId=C)}catch{}this.cardContainer.appendChild(_);try{this._rebuildOnce(_.firstElementChild)}catch{}this._initCardInteract(_)}this._resizeContainer(),this._applyActiveTab(),(t=this._queueSave)==null||t.call(this,"paste"),(r=this._toast)==null||r.call(this,`Pasted ${c.length} card${c.length===1?"":"s"}.`)}catch(s){console.warn("[drag-and-drop-card] Paste failed",s),(a=this._toast)==null||a.call(this,"Paste failed.")}}_installSelectionMarquee(){let e=this.cardContainer,t=0,r=0,a=null,s=!1,c=p=>{let m=e.getBoundingClientRect(),x="touches"in p&&p.touches[0]?p.touches[0].clientX:p.clientX,_="touches"in p&&p.touches[0]?p.touches[0].clientY:p.clientY,P=this.__pointerScaleX||1,O=this.__pointerScaleY||1;return{x:(x-m.left)/P,y:(_-m.top)/O}},l=(p,m)=>{let x=Math.min(p,t),_=Math.max(p,t),P=Math.min(m,r),O=Math.max(m,r);a.style.left=`${x}px`,a.style.top=`${P}px`,a.style.width=`${_-x}px`,a.style.height=`${O-P}px`;let C=a.getBoundingClientRect(),S=e.querySelectorAll(".card-wrapper:not(.ddc-placeholder)");this._clearSelection(),S.forEach(v=>{let b=v.getBoundingClientRect();!(b.right<C.left||b.left>C.right||b.bottom<C.top||b.top>C.bottom)&&this._toggleSelection(v,!0)})},g=p=>{if(!this.editMode||p.target.closest(".card-wrapper"))return;s=!0;let m=c(p);t=m.x,r=m.y,a=document.createElement("div"),a.className="marquee",a.style.left=`${t}px`,a.style.top=`${r}px`,e.appendChild(a),p.preventDefault()},h=p=>{!s||!a||l(c(p).x,c(p).y)},u=()=>{s&&(s=!1,a&&a.remove(),a=null)};e.addEventListener("mousedown",g),window.addEventListener("mousemove",h),window.addEventListener("mouseup",u),e.addEventListener("touchstart",p=>{this.editMode&&(p.target.closest(".card-wrapper")||g(p))},{passive:!1}),window.addEventListener("touchmove",p=>{h(p)},{passive:!0}),window.addEventListener("touchend",u),window.addEventListener("touchcancel",u)}async _openDiagnostics(){var l,g;let e=document.createElement("div");e.className="modal";let t=this.storageKey||"(none)",r=this._backendOK&&!!this.storageKey,a=h=>h.slice(-200).map(u=>`<div style="font-family:monospace;font-size:.85rem;line-height:1.3">
        <span style="opacity:.6">${u.t}</span>
        <b style="margin-left:6px;color:#03a9f4">[${u.kind}]</b>
        <span style="margin-left:6px">${this._safe(u.msg)}</span>
        ${u.extra?`<pre style="margin:4px 0 0 0;white-space:pre-wrap;background:var(--card-background-color);border:1px solid var(--divider-color);border-radius:8px;padding:6px;max-height:160px;overflow:auto">${this._safe(JSON.stringify(u.extra,null,2))}</pre>`:""}
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
                <div>Persist target</div><div><b>${r?"Host (backend)":"Browser (localStorage)"}</b></div>
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
            <div class="bd" id="logArea" style="padding:12px;max-height:420px;overflow:auto">${a(this._dbgDump())}</div>
          </div>
        </div>
      </div>`;let s=()=>e.remove();e.querySelector("#closeDiag").addEventListener("click",s),this.shadowRoot.appendChild(e);let c=()=>{let h=e.querySelector("#logArea"),u=p=>p.slice(-200).map(m=>`<div style="font-family:monospace;font-size:.85rem;line-height:1.3">
          <span style="opacity:.6">${m.t}</span>
          <b style="margin-left:6px;color:#03a9f4">[${m.kind}]</b>
          <span style="margin-left:6px">${this._safe(m.msg)}</span>
          ${m.extra?`<pre style="margin:4px 0 0 0;white-space:pre-wrap;background:var(--card-background-color);border:1px solid var(--divider-color);border-radius:8px;padding:6px;max-height:160px;overflow:auto">${this._safe(JSON.stringify(m.extra,null,2))}</pre>`:""}
        </div>`).join("");h.innerHTML=u(this._dbgDump()),h.scrollTop=h.scrollHeight};e.querySelector("#refreshKeys").addEventListener("click",async()=>{try{this._dbgPush("probe","Manual refresh"),await this._probeBackend()}finally{c()}}),e.querySelector("#forceSave").addEventListener("click",async()=>{await this._saveLayout(!1),c()}),e.querySelector("#exportJson").addEventListener("click",()=>{var x;this._persistCurrentResponsiveProfileToMemory_();let h=((x=this._responsiveLayouts)==null?void 0:x[this._getPrimaryResponsiveLayoutKey_()])||this._captureCurrentLayoutEntries_(),u={version:3,options:this._exportableOptions(),cards:h,responsive_layouts:this._cloneJson_(this._serializeResponsiveLayouts_(this._responsiveLayouts,h)),packages:this._exportDashboardPackages_()},p=new Blob([JSON.stringify(u,null,2)],{type:"application/json"}),m=document.createElement("a");m.href=URL.createObjectURL(p),m.download=`ddc_${this.storageKey||"layout"}.json`,m.click(),URL.revokeObjectURL(m.href)}),e.querySelector("#importJson").addEventListener("click",async()=>{let h=document.createElement("input");h.type="file",h.accept="application/json",h.onchange=async()=>{var x,_;let u=(x=h.files)==null?void 0:x[0];if(!u)return;let p=await u.text();try{let P=JSON.parse(p);this._dbgPush("import","Loaded file",{bytes:p.length}),this._setDashboardPackages_(P.packages||[]),this.responsiveViewportProfiles=this._normalizeResponsiveViewportProfiles_(((_=P.options)==null?void 0:_.responsive_viewports)||this.responsiveViewportProfiles),this._responsiveLayouts=this._normalizeResponsiveLayouts_(P.cards||[],P.responsive_layouts||null),await this._syncResponsiveProfileForViewport_({force:!0}),this._resizeContainer(),await this._saveLayout(!1)}catch(P){this._dbgPush("import","Parse failed",{error:String(P)})}let m=new Event("ddc-logrefresh");window.dispatchEvent(m)},h.click()}),e.querySelector("#testRoundtrip").addEventListener("click",async()=>{if(!this._backendOK)return this._dbgPush("test","Backend not reachable, aborting"),c();let h=(this.storageKey||"ddc_test")+"_selftest",u={t:Date.now(),msg:"roundtrip"};try{await this._saveLayoutToBackend(h,u);let p=await this._loadLayoutFromBackend(h);this._dbgPush("test","Round-trip result",{wrote:u,read:p})}catch(p){this._dbgPush("test","Round-trip failed",{error:String(p)})}c()}),c()}_openDashboardSettings(){var sr,Ar,Di,Tr,cr,dr,Pr,lr,pr,Lr,wi,Ii,Yi,Ui,hr,Mr,Gi,ur,gr;let e=document.createElement("div");e.className="modal",this._ensureSettingsStyles_(),e.innerHTML=`
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

`;let t=this.shadowRoot.querySelector(".modal");if(t){try{t.remove()}catch{}this.__settingsModal===t&&(this.__settingsModal=null)}if(this.__settingsModal){try{this.__settingsModal.remove()}catch{}this.__settingsModal=null}this.__settingsModal=e,this.shadowRoot.appendChild(e);let r=e.querySelector("#ddc-setting-autoResize"),a=e.querySelector("#ddc-setting-gridSize"),s=e.querySelector("#ddc-setting-animate"),c=e.querySelector("#ddc-setting-hideHdr"),l=e.querySelector("#ddc-setting-hideSbar"),g=e.querySelector("#ddc-setting-dragSnap"),h=e.querySelector("#ddc-setting-autoSave"),u=e.querySelector("#ddc-setting-autoSaveDebounce"),p=e.querySelector("#ddc-setting-sizeMode"),m=e.querySelector("#ddc-setting-optimizeForMobile"),x=e.querySelector("#ddc-setting-optimizeForMobileHint"),_=e.querySelector("#ddc-setting-mobileDynamicBehavior"),P=e.querySelector("#ddc-setting-mobileDynamicBehaviorHint"),O=e.querySelector("#ddc-setting-doNotResizeText"),C=e.querySelector("#ddc-setting-doNotResizeTextHint"),S=e.querySelector("#ddc-setting-outerGridBuffer"),v=e.querySelector("#ddc-setting-orient"),b=e.querySelector("#ddc-setting-disableOverlap"),A=e.querySelector("#ddc-setting-editPin"),E=e.querySelector("#ddc-setting-dashboardThemeEnabled"),R=e.querySelector("#ddc-setting-dashboardThemeEnabledHint"),D=e.querySelector("#ddc-setting-dashboardTheme"),M=e.querySelector("#ddc-setting-dashboardThemeHint"),F=e.querySelector("#ddc-setting-dashboardThemeOverrideAllDesign"),N=e.querySelector("#ddc-setting-dashboardThemeOverrideAllDesignHint"),$=e.querySelector("#ddc-setting-containerBg"),Y=e.querySelector("#ddc-setting-applyPageBackground"),X=e.querySelector("#ddc-setting-cardBg"),le=e.querySelector("#ddc-randomize-allStyle"),re=e.querySelector("#ddc-randomize-containerBg"),ee=e.querySelector("#ddc-randomize-cardBg"),ue=e.querySelector("#ddc-randomize-particles"),se=e.querySelector("#ddc-setting-cardShadow"),ge=e.querySelector("#ddc-setting-bgImg"),ce=e.querySelector("#ddc-browse-media-library"),H=e.querySelector("#ddc-bg-repeat"),V=e.querySelector("#ddc-bg-size"),J=e.querySelector("#ddc-bg-position"),ne=e.querySelector("#ddc-bg-attachment"),U=e.querySelector("#ddc-bg-opacity"),xe=e.querySelector("#ddc-bg-opacity-out"),Ne=e.querySelector("#ddc-setting-debug"),Ue=e.querySelector("#ddc-setting-screenSaverEnabled"),rt=e.querySelector("#ddc-setting-screenSaverDelay"),fe=e.querySelector("#ddc-screenSaverDelayOut"),me=e.querySelector("#ddc-bg-mode"),ye=e.querySelector('[data-bg-section="image"]'),Ve=e.querySelector('[data-bg-section="particles"]'),dt=e.querySelector('[data-bg-section="youtube"]'),Qe=e.querySelector("#ddc-particles-url"),je=e.querySelector("#ddc-particles-pointer"),ut=e.querySelector("#ddc-youtube-url"),yt=e.querySelector("#ddc-youtube-start"),bt=e.querySelector("#ddc-youtube-end"),Pt=e.querySelector("#ddc-youtube-mute"),Oe=e.querySelector("#ddc-youtube-loop"),Ke=e.querySelector("#ddc-youtube-size"),vt=e.querySelector("#ddc-youtube-position"),Ct=e.querySelector("#ddc-youtube-attachment"),It=e.querySelector("#ddc-youtube-opacity"),Bt=e.querySelector("#ddc-youtube-opacity-out"),Rt=e.querySelector("#ddc-setting-tabsPosition"),Lt=e.querySelector("#ddc-packages-list"),ii=Array.from(e.querySelectorAll(".ddc-feature-add-btn")),oe=e.querySelector("#ddc-package-diagnostics-btn"),ae=e.querySelector("#ddc-package-diagnostics"),He=((sr=this._config)==null?void 0:sr.background_image)||{},De=((Ar=this._config)==null?void 0:Ar.background_mode)||((Tr=(Di=this._config)==null?void 0:Di.background_image)!=null&&Tr.src?"image":"none");me&&(me.value=String(De));let Le=((cr=this._config)==null?void 0:cr.background_particles)||{},ze=I=>{try{return JSON.parse(JSON.stringify(I!=null?I:null))}catch{return null}},Q={automation:{label:"Automation",icon:"mdi:robot-outline",description:"Create one Home Assistant automation and keep the YAML bundled with this dashboard."},script:{label:"Script",icon:"mdi:script-text-outline",description:"Add a reusable Home Assistant script to this dashboard package bundle."},input_boolean:{label:"Input boolean",icon:"mdi:toggle-switch-outline",description:"Create a toggle helper that can be used across cards, automations, and scripts."},input_select:{label:"Input select",icon:"mdi:format-list-bulleted-square",description:"Create a selectable helper with a list of options."},input_text:{label:"Input text",icon:"mdi:form-textbox",description:"Create a text helper you can write to from cards, scripts, or automations."},input_number:{label:"Input number",icon:"mdi:numeric",description:"Create a numeric helper for counters, setpoints, or quick controls."},template_sensor:{label:"Template sensor",icon:"mdi:chart-bell-curve-cumulative",description:"Create a template sensor that derives values from other Home Assistant entities."},misc:{label:"Misc",icon:"mdi:code-tags",description:"Use raw package YAML for anything that does not fit the guided feature shortcuts."}},Ce=Object.keys(Q),tt=I=>Object.prototype.hasOwnProperty.call(Q,I),ie=I=>{var j;return((j=Q[I])==null?void 0:j.label)||Q.misc.label},Ge=I=>{var j;return((j=Q[I])==null?void 0:j.icon)||Q.misc.icon},ct=I=>{var j;return((j=Q[I])==null?void 0:j.description)||Q.misc.description},ke=I=>{var j;if(!I)return"Unknown error";if(typeof I=="string")return I;if((j=I==null?void 0:I.body)!=null&&j.message)return String(I.body.message);if(I!=null&&I.message)return String(I.message);try{return JSON.stringify(I)}catch{}return String(I)},Ie=(I,j="feature")=>this._slugifyPackageToken_(I,j).replace(/-/g,"_"),ht=(I="")=>{let j=String(I||"").trim();if(!j)return"misc";let te=[["automation",/^\s*automation\s*:/m],["script",/^\s*script\s*:/m],["input_boolean",/^\s*input_boolean\s*:/m],["input_select",/^\s*input_select\s*:/m],["input_text",/^\s*input_text\s*:/m],["input_number",/^\s*input_number\s*:/m],["template_sensor",/^\s*template\s*:/m]].filter(([,_e])=>_e.test(j)).map(([_e])=>_e);return te.length===1?te[0]:"misc"},lt=(I,j)=>{let K=String(j||ie(I)).trim()||ie(I),te=Ie(K,I);switch(I){case"automation":return`automation:
  - alias: ${K}
    id: ${te}
    trigger: []
    condition: []
    action: []
`;case"script":return`script:
  ${te}:
    alias: ${K}
    sequence: []
`;case"input_boolean":return`input_boolean:
  ${te}:
    name: ${K}
    icon: mdi:toggle-switch
`;case"input_select":return`input_select:
  ${te}:
    name: ${K}
    options:
      - Option 1
      - Option 2
`;case"input_text":return`input_text:
  ${te}:
    name: ${K}
    max: 100
`;case"input_number":return`input_number:
  ${te}:
    name: ${K}
    min: 0
    max: 100
    step: 1
    mode: slider
`;case"template_sensor":return`template:
  - sensor:
      - name: ${K}
        unique_id: ${te}
        state: "ready"
`;case"misc":default:return`# Add any Home Assistant package YAML here.
`}},pt=(I,j,K=1)=>{let te=tt(j)?j:"feature";return`${this._slugifyPackageToken_(I||`${te}_${K}`,`${te}_${K}`)}.yaml`},ft=I=>{let j=ie(I),K=Se.filter(te=>String(te.feature_type||"misc")===I).length+1;return`${j} ${K}`},gt=(I="misc")=>{let j=tt(I)?I:"misc",K=Se.length+1,te=ft(j);return{id:`package_${Date.now()}_${K}`,name:te,filename:pt(te,j,K),yaml:lt(j,te),enabled:!0,feature_type:j,__filenameDirty:!1,__yamlDirty:!1}},Ze=(I={},j=0)=>{var te,_e,we,Me,Fe,Ye,qe,ot,st;let K=tt(I.feature_type)?I.feature_type:ht((we=(_e=(te=I.yaml)!=null?te:I.content)!=null?_e:I.body)!=null?we:"");return{id:String(I.id||I.package_id||`package_${j+1}`),name:String(I.name||I.title||I.filename||`package_${j+1}`),filename:String(I.filename||""),yaml:String((Ye=(Fe=(Me=I.yaml)!=null?Me:I.content)!=null?Fe:I.body)!=null?Ye:"").replace(/\r\n/g,`
`),enabled:I.enabled!==!1,feature_type:K,__filenameDirty:!!String(I.filename||"").trim(),__yamlDirty:!!String((st=(ot=(qe=I.yaml)!=null?qe:I.content)!=null?ot:I.body)!=null?st:"").trim()}},Se=this._exportDashboardPackages_().map((I,j)=>Ze(I,j)),et=(I="")=>String(I||"").split(`
`).map(K=>K.trim()).find(K=>K&&!K.startsWith("#"))||"No YAML added yet.",Xe=(I,j=!1)=>{ae&&(ae.style.color=j?"var(--error-color, #ef4444)":"var(--secondary-text-color)",ae.textContent=I||"Run package sync diagnostics to verify backend support, package directory, and detected files.")},nt=()=>{var te;if(!D)return;let I=((te=this._getAvailableDashboardThemeNames_)==null?void 0:te.call(this))||[],j=String(D.value||this.dashboardTheme||"").trim();D.innerHTML="";let K=document.createElement("option");K.value="",K.textContent=I.length?"Select theme\u2026":"No themes found",D.appendChild(K),I.forEach(_e=>{let we=document.createElement("option");we.value=_e,we.textContent=_e,D.appendChild(we)}),j&&I.includes(j)?D.value=j:D.value=""},Ee=()=>{var te;let I=!!(E!=null&&E.checked),K=(((te=this._getAvailableDashboardThemeNames_)==null?void 0:te.call(this))||[]).length>0;D&&(D.disabled=!I||!K),F&&(F.disabled=!I||!String((D==null?void 0:D.value)||"").trim()),R&&(R.textContent=K?"Applies a Home Assistant theme to this dashboard so theme variables can style cards, text, buttons, and surfaces.":"No Home Assistant themes were detected yet. The toggle is stored, but you need available HA themes before you can pick one."),M&&(M.textContent=K?I?"Choose which Home Assistant theme this dashboard should inherit variables from.":"Turn on dashboard theme styling to choose a theme.":"No themes were found from Home Assistant."),N&&(N.textContent=!I||!String((D==null?void 0:D.value)||"").trim()?"Select and enable a dashboard theme before theme override mode can take control.":"When enabled, the selected theme wins over dashboard surface colors, card shadows, and per-card design overrides.")},ve=()=>{var I;try{this.dashboardThemeEnabled=!!(E!=null&&E.checked),this.dashboardTheme=String((D==null?void 0:D.value)||"").trim(),this.dashboardThemeOverrideAllDesign=!!(F!=null&&F.checked),(I=this._applyDashboardThemeStyling_)==null||I.call(this)}catch{}},pe=async()=>{Xe("Checking backend package sync...");try{let I=await this.hass.callApi("get","dragdrop_storage_package_status");if(!I||I.ok===!1){Xe(`Package diagnostics failed.${I!=null&&I.error?` ${I.error}`:""}`,!0);return}let j=[`Backend package sync: ${I.supports_package_sync?"supported":"unknown"}`,`Packages directory: ${I.directory||"(missing)"}`,`Directory exists: ${I.directory_exists?"yes":"no"}`,`Looks writable: ${I.directory_writable?"yes":"no"}`,`configuration.yaml found: ${I.configuration_exists?"yes":"no"}`,`configuration has "packages:": ${I.configuration_mentions_packages?"yes":"no"}`,`configuration includes packages dir: ${I.configuration_includes_packages_dir_named||I.configuration_includes_packages_dir_merge_named?"yes":"no"}`,`Detected DDC package files: ${Array.isArray(I.files)&&I.files.length?I.files.join(", "):"none"}`];Xe(j.join(`
`))}catch(I){Xe(`Package diagnostics request failed: ${ke(I)}`,!0)}},G=null,Te=()=>{var I;try{(I=G==null?void 0:G.remove)==null||I.call(G)}catch{}G=null},Be=I=>{var $t,ei;let j=Se[I];if(!j)return;Te();let K=tt(j.feature_type)?j.feature_type:"misc",te=document.createElement("div");te.className="feature-editor-shell",te.innerHTML=`
        <div class="feature-editor-backdrop"></div>
        <div class="feature-editor-modal" role="dialog" aria-modal="true" aria-labelledby="ddc-feature-editor-title">
          <div class="feature-editor-head">
            <div>
              <h5 id="ddc-feature-editor-title">Edit ${this._safe(ie(K))}</h5>
              <p>${this._safe(ct(K))}</p>
            </div>
            <button type="button" class="icon-btn" id="ddc-feature-editor-close" title="Close editor">
              <ha-icon icon="mdi:close"></ha-icon>
            </button>
          </div>
          <div class="feature-editor-grid">
            <div class="feature-editor-field">
              <label for="ddc-feature-editor-name">Feature name</label>
              <input id="ddc-feature-editor-name" type="text" value="${this._safe(j.name||"")}" />
            </div>
            <div class="feature-editor-field">
              <label for="ddc-feature-editor-type">Feature type</label>
              <input id="ddc-feature-editor-type" type="text" value="${this._safe(ie(K))}" readonly />
            </div>
            <div class="feature-editor-field full">
              <label for="ddc-feature-editor-file">Package file name</label>
              <input id="ddc-feature-editor-file" type="text" value="${this._safe(j.filename||"")}" placeholder="${this._safe(pt(j.name,K,I+1))}" />
            </div>
            <div class="feature-editor-field full">
              <label for="ddc-feature-editor-yaml">YAML content</label>
              <textarea id="ddc-feature-editor-yaml" spellcheck="false" placeholder="${this._safe(lt(K,j.name||ie(K)))}">${this._safe(j.yaml||"")}</textarea>
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
      `,e.appendChild(te),G=te;let _e=te.querySelector("#ddc-feature-editor-name"),we=te.querySelector("#ddc-feature-editor-file"),Me=te.querySelector("#ddc-feature-editor-yaml"),Fe=te.querySelector("#ddc-feature-editor-enabled"),Ye=te.querySelector("#ddc-feature-editor-close"),qe=te.querySelector("#ddc-feature-editor-cancel"),ot=te.querySelector("#ddc-feature-editor-save"),st=te.querySelector(".feature-editor-backdrop"),Ht=!!j.__filenameDirty,Nt=!!j.__yamlDirty;Fe&&(Fe.checked=j.enabled!==!1);let Kt=()=>{let kt=String((_e==null?void 0:_e.value)||"").trim()||ie(K);if(!Ht||!String((we==null?void 0:we.value)||"").trim()){let Mt=pt(kt,K,I+1);we&&(we.value=Mt)}if(!Nt){let Mt=lt(K,kt);Me&&(Me.value=Mt)}};_e==null||_e.addEventListener("input",Kt),we==null||we.addEventListener("input",()=>{Ht=!0}),Me==null||Me.addEventListener("input",()=>{Nt=!0});let qt=()=>{var kt,Mt,Ut;Te();try{(Ut=(Mt=(kt=Lt==null?void 0:Lt.querySelector)==null?void 0:kt.call(Lt,`[data-feature-index="${I}"] .feature-edit-btn`))==null?void 0:Mt.focus)==null||Ut.call(Mt)}catch{}},Yt=()=>{var di,fi,ki,li;let kt=String((_e==null?void 0:_e.value)||"").trim()||ie(K),Mt=String((we==null?void 0:we.value)||"").trim()||pt(kt,K,I+1),Ut=String((Me==null?void 0:Me.value)||"").replace(/\r\n/g,`
`);if(((di=Fe==null?void 0:Fe.checked)==null||di)&&Ut.trim())try{(ki=(fi=window.jsyaml)==null?void 0:fi.load)==null||ki.call(fi,Ut)}catch{(li=this._toast)==null||li.call(this,`Invalid YAML in ${ie(K).toLowerCase()} "${kt}".`);return}Se[I]={...Se[I],name:kt,filename:Mt,yaml:Ut,enabled:!!(Fe!=null&&Fe.checked),feature_type:K,__filenameDirty:Ht||!!Mt.trim(),__yamlDirty:Nt||!!Ut.trim()},Te(),_t()};Ye==null||Ye.addEventListener("click",qt),qe==null||qe.addEventListener("click",qt),st==null||st.addEventListener("click",qt),ot==null||ot.addEventListener("click",Yt),te.addEventListener("keydown",kt=>{kt.key==="Escape"&&(kt.preventDefault(),qt()),(kt.metaKey||kt.ctrlKey)&&kt.key.toLowerCase()==="s"&&(kt.preventDefault(),Yt())});try{($t=_e==null?void 0:_e.focus)==null||$t.call(_e),(ei=_e==null?void 0:_e.select)==null||ei.call(_e)}catch{}},_t=()=>{if(!Lt)return;if(Lt.innerHTML="",!Se.length){let j=document.createElement("div");j.className="package-empty",j.textContent="No features added yet. Use the quick buttons above to create helpers, automations, scripts, template sensors, or a misc package block.",Lt.appendChild(j);return}let I=document.createElement("div");I.className="feature-list",Se.forEach((j,K)=>{let te=document.createElement("div"),_e=tt(j.feature_type)?j.feature_type:ht(j.yaml||""),we=et(j.yaml||"");te.className="feature-card",te.dataset.featureIndex=String(K),te.innerHTML=`
          <div class="feature-card-main">
            <div class="feature-card-head">
              <span class="feature-type-badge"><ha-icon icon="${this._safe(Ge(_e))}"></ha-icon>${this._safe(ie(_e))}</span>
              <span class="feature-card-title">${this._safe(j.name||ie(_e))}</span>
            </div>
            <div class="feature-card-meta">
              <code>${this._safe(j.filename||pt(j.name,_e,K+1))}</code>
              <span>${j.enabled!==!1?"Enabled":"Disabled"}</span>
            </div>
            <div class="feature-card-summary">${this._safe(we)}</div>
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
        `;let Me=te.querySelector(".feature-enabled"),Fe=te.querySelector(".feature-edit-btn"),Ye=te.querySelector(".feature-delete-btn");Me&&(Me.checked=j.enabled!==!1),Me==null||Me.addEventListener("change",()=>{Se[K].enabled=!!Me.checked}),Fe==null||Fe.addEventListener("click",()=>Be(K)),Ye==null||Ye.addEventListener("click",()=>{Se.splice(K,1),_t()}),I.appendChild(te)}),Lt.appendChild(I)},Et=ze(Le.config);Qe&&(Qe.value=Le.config_url||""),je&&(je.checked=!!Le.pointer_events),Rt&&(Rt.value=String(this.tabsPosition||"top")),nt();let At=((dr=this._config)==null?void 0:dr.background_youtube)||{},ri=At.url||At.video_id||"";if(ut&&(ut.value=ri),yt&&(yt.value=(Pr=At.start)!=null?Pr:""),bt&&(bt.value=(lr=At.end)!=null?lr:""),Pt&&(Pt.checked=At.mute!==!1),Oe&&(Oe.checked=At.loop!==!1),Ke&&(Ke.value=String(At.size||"cover")),vt&&(vt.value=String(At.position||"center")),Ct&&(Ct.value=String(At.attachment||"scroll")),It){let I=Math.round((At.opacity!=null?At.opacity:1)*100);It.value=String(I),Bt&&(Bt.textContent=I+"%"),It.addEventListener("input",()=>{let j=Math.max(0,Math.min(100,parseInt(It.value||"100",10)));Bt&&(Bt.textContent=j+"%")})}let bi=()=>{let I=(me==null?void 0:me.value)||"none";ye&&(ye.style.display=I==="image"?"":"none"),Ve&&(Ve.style.display=I==="particles"?"":"none"),dt&&(dt.style.display=I==="youtube"?"":"none")};me==null||me.addEventListener("change",bi),bi();let ci=e.querySelector('[aria-labelledby="lbl-auto-resize"]'),Pi=e.querySelector('[aria-labelledby="lbl-mobile-optimize"]'),er=e.querySelector('[aria-labelledby="lbl-mobile-dynamic-behavior"]'),tr=()=>{let I=(p==null?void 0:p.value)||"dynamic";ci&&(ci.style.display=I==="dynamic"?"":"none")},Li=()=>{let j=((p==null?void 0:p.value)||"dynamic")==="dynamic",K=String((_==null?void 0:_.value)||this.mobileDynamicBehavior||"native").toLowerCase();er&&(er.style.display=j?"":"none"),P&&(P.textContent=j?K==="scale"?"Scale to fit keeps the current Dynamic behavior on mobile. Native canvas keeps scale at 1 and uses horizontal pan/scroll when needed.":"Native canvas keeps the mobile layout at scale 1 in Dynamic mode, so you can treat mobile differently and pan horizontally if needed.":"Stored, but only used while the container size mode is Dynamic.")},Mi=()=>{let j=((p==null?void 0:p.value)||"dynamic")==="dynamic";Pi&&(Pi.style.display=j?"":"none");let K=String((_==null?void 0:_.value)||this.mobileDynamicBehavior||"native").toLowerCase();x&&(x.textContent=j?K==="scale"?"In Dynamic mode, keeps narrow screens more readable by avoiding extreme downscaling, softening text shrink, and allowing horizontal pan when needed.":"When Mobile dynamic behavior is set to Native canvas, this only still affects other narrow Dynamic cases that continue to use scaling.":"Stored, but only used while the container size mode is Dynamic.")},vi=()=>{let I=(p==null?void 0:p.value)||"dynamic",j=I==="dynamic"||I==="auto";C&&(C.textContent=j?"Keeps text at its design size when the canvas scale changes. Best suited for Dynamic and Auto.":"Stored, but only used while the container size mode is Dynamic or Auto.")};if(tr(),Li(),Mi(),vi(),p==null||p.addEventListener("change",tr),p==null||p.addEventListener("change",Li),p==null||p.addEventListener("change",Mi),p==null||p.addEventListener("change",vi),_==null||_.addEventListener("change",Li),_==null||_.addEventListener("change",Mi),r&&(r.checked=!!this.autoResizeCards),a&&(a.value=String(this.gridSize||100)),s&&(s.checked=!!this.animateCards),c&&(c.checked=!!this.hideHaHeader),l&&(l.checked=!!this.hideHaSidebar),g&&(g.checked=!!this.dragLiveSnap),h&&(h.checked=!!this.autoSave),u&&(u.value=String((pr=this.autoSaveDebounce)!=null?pr:800)),p&&(p.value=String(this.containerSizeMode||"dynamic")),tr(),_&&(_.value=String(this.mobileDynamicBehavior||"native")),Li(),Mi(),vi(),m&&(m.checked=!!this.optimizeForMobile),O&&(O.checked=!!this.doNotResizeText),S&&(S.checked=!!this.outerGridBuffer),v&&(v.value=String(this.containerPresetOrient||"auto")),b&&(b.checked=!!this.disableOverlap),E&&(E.checked=!!this.dashboardThemeEnabled),D&&(D.value=String(this.dashboardTheme||"")),F&&(F.checked=!!this.dashboardThemeOverrideAllDesign),Ee(),$&&($.value=String(this.containerBackground||"")),Y&&(Y.checked=!!this.applyBackgroundToPage),X&&(X.value=String(this.cardBackground||"")),ge){let I=((Ii=(Lr=this._config)==null?void 0:Lr.background_image)!=null?Ii:(wi=this._config)==null?void 0:wi.bg_image)||{};ge.value=I.src?String(I.src):""}if(Ne&&(Ne.checked=!!this.debug),se&&(se.checked=!!this.cardShadowEnabled),H&&(H.value=String(He.repeat||"no-repeat")),V&&(V.value=String(He.size||"cover")),J&&(J.value=String(He.position||"center center")),ne&&(ne.value=String(He.attachment||"scroll")),U){let I=Math.round((He.opacity!=null?He.opacity:1)*100);U.value=String(I),xe&&(xe.textContent=`${I}%`),U.addEventListener("input",()=>{let j=Math.max(0,Math.min(100,parseInt(U.value||"100",10)));xe.textContent=`${j}%`,this.style.setProperty("--ddc-bg-opacity",String(j/100))})}if(se&&se.addEventListener("change",()=>{var I;try{this.cardShadowEnabled=!!se.checked,(I=this._applyDashboardThemeStyling_)==null||I.call(this)}catch{}}),E==null||E.addEventListener("change",()=>{Ee(),ve()}),D==null||D.addEventListener("change",()=>{Ee(),ve()}),F==null||F.addEventListener("change",()=>{Ee(),ve()}),Ue&&(Ue.checked=!!this.screenSaverEnabled,Ue.addEventListener("change",()=>{this.screenSaverEnabled=Ue.checked,typeof this._updateScreensaverSettings=="function"&&this._updateScreensaverSettings()})),rt){let I=this.screenSaverDelay!=null?Number(this.screenSaverDelay):3e5,j=Math.round(I/6e4);(!Number.isFinite(j)||j<1)&&(j=5),j>60&&(j=60),rt.value=String(j),fe&&(fe.textContent=`${j} min`),rt.addEventListener("input",()=>{let K=parseInt(rt.value||"1",10),te=Math.max(1,Math.min(60,isNaN(K)?1:K));fe&&(fe.textContent=`${te} min`),this.screenSaverDelay=te*6e4,typeof this._updateScreensaverSettings=="function"&&this._updateScreensaverSettings()})}try{if(A){let I=this.config&&this.config.edit_mode_pin!=null?String(this.config.edit_mode_pin):"",j=this.editModePin!=null?String(this.editModePin):"";A.value=j||I||"",A.disabled=!1,A.readOnly=!1}}catch{}let Qt=e.querySelector("#ddc-setting-gridSize"),Vi=e.querySelector("#ddc-grid-out"),hi=e.querySelector("#ddc-grid-demo"),xr=e.querySelector("#ddc-grid-meta"),ni=e.querySelector("#ddc-setting-gridSizeInput"),wr=()=>{if(!hi||!xr)return;let I=hi.getBoundingClientRect(),j=Math.max(1,parseInt(Qt.value||"100",10)),K=Math.max(1,Math.floor(I.width/j)),te=Math.max(1,Math.floor(I.height/j));xr.innerHTML=`
        <ha-icon icon="mdi:grid"></ha-icon>
        <span>${j}px \xB7 ${K}\xD7${te}</span>
      `},Ri=()=>{let I=Math.max(1,parseInt(Qt.value||"100",10));Vi&&(Vi.textContent=`${I} px`),hi&&hi.style.setProperty("--g",`${I}px`),wr()};if(Qt&&(Qt.value||(Qt.value=String(this.gridSize||100)),Qt.addEventListener("input",()=>{ni&&(ni.value=Qt.value),Ri()}),ni&&(ni.value=Qt.value),Ri()),ni&&ni.addEventListener("input",()=>{let I=Math.max(1,Math.min(400,parseInt(ni.value||"100",10)));Qt.value=String(I),Ri()}),hi){let I=new ResizeObserver(()=>wr());I.observe(hi),(Ui=(Yi=this.__ddcGridRO)==null?void 0:Yi.disconnect)==null||Ui.call(Yi),this.__ddcGridRO=I}e.querySelectorAll(".chip").forEach(I=>{I.addEventListener("click",()=>{var _e,we;e.querySelectorAll(".chip").forEach(Me=>Me.setAttribute("aria-pressed","false")),I.setAttribute("aria-pressed","true");let j=parseInt(I.dataset.w,10),K=parseInt(I.dataset.h,10),te=e.querySelector("#ddc-setting-sizeMode");te.value="fixed_custom",(we=(_e=typeof p!="undefined"&&p)==null?void 0:_e.dispatchEvent)==null||we.call(_e,new Event("change")),setTimeout(()=>{var Ye,qe,ot;(Ye=e.querySelector("#ddc-setting-custW"))==null||Ye.setAttribute("value",String(j)),(ot=(qe=e.querySelector("#ddc-setting-custW"))==null?void 0:qe.dispatchEvent)==null||ot.call(qe,new Event("change"));let Me=e.querySelector("#ddc-setting-custW");Me&&(Me.value=String(j));let Fe=e.querySelector("#ddc-setting-custH");Fe&&(Fe.value=String(K))},0)})});let tn=["#ffffff","#f5f7fa","#ebeff5","#121212","#1f2937","#334155","#ff6b6b","#fcbf49","#ffe66d","#4ecdc4","#1a535c","#6b5b95","#f6f5f5","#00aaff","#ff00ff","#00ff00","var(--card-background-color)","var(--ha-card-background)","transparent","rgba(255,255,255,0.4)","rgba(0,0,0,0.3)","rgba(0,128,255,0.3)","rgba(255,0,128,0.3)","rgba(255,255,0,0.3)","rgba(0,255,128,0.3)"],Zt=I=>I[Math.floor(Math.random()*I.length)],Tt=(I,j,K=0)=>{let te=I+Math.random()*(j-I);return Number(te.toFixed(K))},rn=["#0f172a","#1e293b","#334155","#0f766e","#14532d","#7c2d12","#7f1d1d","#581c87","#1d4ed8","#065f46","#111827","#3f3f46","rgba(255,255,255,0.24)","rgba(15,23,42,0.56)","rgba(249,115,22,0.28)","rgba(20,184,166,0.28)","rgba(59,130,246,0.28)","rgba(244,63,94,0.24)"],nn=["#111827","#1f2937","#0f172a","#172033","#1a2332","#202938","rgba(15,23,42,0.72)","rgba(30,41,59,0.78)","rgba(17,24,39,0.84)","rgba(8,47,73,0.72)","rgba(49,46,129,0.7)","rgba(69,10,10,0.7)"],kr=I=>{let j=Zt(I),K=Zt(I);j===K&&(K=Zt(I.filter(we=>we!==j)||I));let te=Math.round(Tt(110,320));return(Math.random()>.45?"linear":"radial")==="linear"?`linear-gradient(${te}deg, ${j}, ${K})`:`radial-gradient(circle at ${Math.round(Tt(20,80))}% ${Math.round(Tt(18,82))}%, ${j}, ${K})`},ui=(I="container")=>{let j=I==="card"?nn:rn;return Math.random()>.45?kr(j):Zt(j)},gi=(I,j,K)=>{I&&I.querySelectorAll(j).forEach(te=>{let _e=(te.title||"").trim()===String(K).trim();te.setAttribute("aria-pressed",_e?"true":"false")})},_i=({input:I,picker:j,value:K,kind:te})=>{var _e;if(I){if(I.value=K,j){let we=(String(K||"").match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)||[])[0];we&&(j.value=we)}gi(I.closest(".color-stack"),".swatch",K),gi(I.closest(".color-stack"),".gradient",K);try{I.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}catch{}try{te==="card"?this.cardBackground=K:this.containerBackground=K,(_e=this._applyDashboardThemeStyling_)==null||_e.call(this)}catch{}}},ji=()=>{let I=["#ffffff","#f8fafc","#38bdf8","#22d3ee","#34d399","#f59e0b","#fb7185","#c084fc","#facc15"],j=["none","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left"];return{particles:{number:{value:Math.round(Tt(16,72)),density:{enable:!0,value_area:Math.round(Tt(700,1600))}},color:{value:Zt(I)},shape:{type:Zt(["circle","triangle","edge","star","polygon"])},opacity:{value:Tt(.14,.55,2),random:!0,anim:{enable:Math.random()>.6,speed:Tt(.2,1.4,2),opacity_min:Tt(.05,.2,2),sync:!1}},size:{value:Tt(1.6,5.4,1),random:!0,anim:{enable:Math.random()>.72,speed:Tt(1.5,8.5,1),size_min:Tt(.4,1.5,1),sync:!1}},line_linked:{enable:Math.random()>.45,distance:Math.round(Tt(90,220)),color:Zt(I),opacity:Tt(.08,.28,2),width:Tt(.6,1.6,1)},move:{enable:!0,speed:Tt(.3,2.4,2),direction:Zt(j),random:Math.random()>.55,straight:Math.random()>.8,out_mode:"out"}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!!(je!=null&&je.checked),mode:Zt(["repulse","grab","bubble"])},onclick:{enable:!!(je!=null&&je.checked),mode:Zt(["push","repulse"])},resize:!0},modes:{repulse:{distance:Math.round(Tt(70,140))},push:{particles_nb:Math.round(Tt(2,6))},bubble:{distance:Math.round(Tt(100,180)),size:Tt(3,7,1),duration:Tt(1.2,2.8,1),opacity:Tt(.25,.6,2)},grab:{distance:Math.round(Tt(110,170)),line_linked:{opacity:Tt(.18,.45,2)}}}},retina_detect:!1}},oi=(I,j,K)=>{let te=e.querySelector(I),_e=e.querySelector(j),we=e.querySelector(K);!te||!_e||(te.innerHTML="",tn.forEach((Me,Fe)=>{let Ye=document.createElement("button");Ye.type="button",Ye.className="swatch",Ye.title=Me,Ye.style.background=Me.startsWith("var(")?getComputedStyle(this).getPropertyValue(Me.slice(4,-1)).trim()||"#fff":Me,Ye.setAttribute("aria-pressed","false"),Ye.addEventListener("click",()=>{te.querySelectorAll(".swatch").forEach(qe=>qe.setAttribute("aria-pressed","false")),Ye.setAttribute("aria-pressed","true"),_e.value=Me,/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(Me)&&we&&(we.value=Me);try{_e.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}catch{}}),te.appendChild(Ye),String(_e.value).trim()===Me&&Ye.setAttribute("aria-pressed","true")}))};oi("#ddc-swatches-containerBg","#ddc-setting-containerBg","#ddc-color-containerBg"),oi("#ddc-swatches-cardBg","#ddc-setting-cardBg","#ddc-color-cardBg"),[["#ddc-color-containerBg","#ddc-setting-containerBg"],["#ddc-color-cardBg","#ddc-setting-cardBg"]].forEach(([I,j])=>{let K=e.querySelector(I),te=e.querySelector(j);if(!K||!te)return;let _e=(String(te.value||"").match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)||[])[0];_e&&(K.value=_e),K.addEventListener("input",()=>{te.value=K.value}),te.addEventListener("change",()=>{let we=(String(te.value||"").match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)||[])[0];we&&(K.value=we)})});let wt=e.querySelector("#ddc-setting-bgImg"),Sr=e.querySelector("#ddc-bg-thumb"),Oi=I=>{Sr&&(Sr.style.backgroundImage=I?`url(${I})`:"none")},ai=()=>{var I,j;try{let K=((wt==null?void 0:wt.value)||"").trim(),te=K?{...this._config&&this._config.background_image||{},src:K,repeat:(H==null?void 0:H.value)||"no-repeat",size:(V==null?void 0:V.value)||"cover",position:(J==null?void 0:J.value)||"center center",attachment:(ne==null?void 0:ne.value)||"scroll",opacity:U?Math.max(0,Math.min(100,parseInt(U.value||"100",10)))/100:1}:null;if(te)this._config={...this._config||{},background_mode:((me==null?void 0:me.value)||"none")==="image"?"image":((I=this._config)==null?void 0:I.background_mode)||"image",background_image:te};else if(((me==null?void 0:me.value)||"none")==="image"){let{background_image:_e,...we}=this._config||{};this._config=we}(j=this._applyBackgroundFromConfig)==null||j.call(this)}catch{}};ce&&(ce.disabled=!(this.hass&&typeof this.hass.callWS=="function"),ce.addEventListener("click",async()=>{await this._openMediaLibraryBrowser_(async I=>{if(wt){wt.value=I,Oi(I),ai();try{wt.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),wt.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}catch{}}})})),wt!=null&&wt.value&&Oi(wt.value),wt==null||wt.addEventListener("input",()=>{let I=(wt.value||"").trim();Oi(I||""),((me==null?void 0:me.value)||"none")==="image"&&ai()}),wt==null||wt.addEventListener("change",ai),H==null||H.addEventListener("change",()=>{((me==null?void 0:me.value)||"none")==="image"&&ai()}),V==null||V.addEventListener("change",()=>{((me==null?void 0:me.value)||"none")==="image"&&ai()}),J==null||J.addEventListener("change",()=>{((me==null?void 0:me.value)||"none")==="image"&&ai()}),ne==null||ne.addEventListener("change",()=>{((me==null?void 0:me.value)||"none")==="image"&&ai()}),U==null||U.addEventListener("input",()=>{((me==null?void 0:me.value)||"none")==="image"&&ai()}),(hr=e.querySelector("#ddc-clear-bg"))==null||hr.addEventListener("click",()=>{var K,te;wt&&(wt.value=""),Oi("");let{background_image:I,...j}=this._config||{};this._config=j,this.style.setProperty("--ddc-bg-image","none"),(K=this._applyBackgroundFromConfig)==null||K.call(this),(te=this._persistThisCardConfigToStorage_)==null||te.call(this)}),e.addEventListener("click",I=>{I.target===e&&(I.stopPropagation(),zi())});let ir=I=>{I.key==="Escape"&&(I.stopPropagation(),zi())};document.addEventListener("keydown",ir,{once:!0}),setTimeout(()=>{var I;return(I=e.querySelector("#ddc-setting-gridSize"))==null?void 0:I.focus()},0);try{let I=e.querySelector("#ddc-setting-sizeExtras"),j=()=>{var te,_e;if(!I)return;I.innerHTML="";let K=(p==null?void 0:p.value)||"dynamic";if(K==="fixed_custom"){let we=document.createElement("label");we.style.display="flex",we.style.flexDirection="column",we.style.fontSize=".95rem",we.style.marginBottom="10px";let Me=document.createElement("span");Me.textContent="Custom width (px)",Me.style.marginBottom="4px";let Fe=document.createElement("input");Fe.type="number",Fe.id="ddc-setting-custW",Fe.min="100",Fe.max="10000",Fe.step="10",Fe.style.padding="6px",Fe.style.border="1px solid var(--divider-color,rgba(0,0,0,.3))",Fe.style.borderRadius="6px",Fe.value=String((te=this.containerFixedWidth)!=null?te:800),we.appendChild(Me),we.appendChild(Fe);let Ye=document.createElement("label");Ye.style.display="flex",Ye.style.flexDirection="column",Ye.style.fontSize=".95rem",Ye.style.marginBottom="10px";let qe=document.createElement("span");qe.textContent="Custom height (px)",qe.style.marginBottom="4px";let ot=document.createElement("input");ot.type="number",ot.id="ddc-setting-custH",ot.min="100",ot.max="10000",ot.step="10",ot.style.padding="6px",ot.style.border="1px solid var(--divider-color,rgba(0,0,0,.3))",ot.style.borderRadius="6px",ot.value=String((_e=this.containerFixedHeight)!=null?_e:600),Ye.appendChild(qe),Ye.appendChild(ot),I.appendChild(we),I.appendChild(Ye)}else if(K==="preset"){let we=document.createElement("label");we.style.display="flex",we.style.flexDirection="column",we.style.fontSize=".95rem",we.style.marginBottom="10px";let Me=document.createElement("span");Me.textContent="Preset size",Me.style.marginBottom="4px";let Fe=document.createElement("select");Fe.id="ddc-setting-preset",Fe.style.padding="6px",Fe.style.border="1px solid var(--divider-color,rgba(0,0,0,.3))",Fe.style.borderRadius="6px",(typeof i!="undefined"&&i._sizePresets?i._sizePresets():[]).forEach(qe=>{let ot=document.createElement("option");ot.value=qe.key,ot.textContent=`${qe.label||qe.key} (${qe.w}\xD7${qe.h})`,Fe.appendChild(ot)}),Fe.value=String(this.containerPreset||"fhd"),we.appendChild(Me),we.appendChild(Fe),I.appendChild(we)}};j(),p==null||p.addEventListener("change",j)}catch(I){console.warn("[drag-and-drop-card] Failed to build container size extras",I)}let Wi=()=>{var j,K,te,_e,we;return((we=(_e=(K=(j=this._config)==null?void 0:j.options)==null?void 0:K.tabs)!=null?_e:(te=this._config)==null?void 0:te.tabs)!=null?we:[]).map(Me=>{var Fe,Ye,qe,ot,st,Ht,Nt;return typeof Me=="string"?{id:Me,label:Me,icon:"",label_mode:"both",__raw:{id:Me,label:Me}}:{id:(qe=(Ye=(Fe=Me.id)!=null?Fe:Me.key)!=null?Ye:Me.label)!=null?qe:"tab",label:(st=(ot=Me.label)!=null?ot:Me.id)!=null?st:"Tab",icon:(Ht=Me.icon)!=null?Ht:"",label_mode:(Nt=Me.label_mode)!=null?Nt:"both",__raw:Me}})},xi=async(I,j)=>{var _e,we,Me,Fe,Ye,qe,ot;let K=I.map(st=>({...st.__raw,id:st.id,label:st.label,icon:st.icon||"",label_mode:st.label_mode||"both"})),te=(we=j!=null?j:(_e=K[0])==null?void 0:_e.id)!=null?we:"default";(Me=this._config)!=null&&Me.options?this._config.options={...this._config.options||{},tabs:K,default_tab:te}:this._config.tabs=K,this._config.tabs=K,this._config.default_tab=te,this.tabs=K.map(st=>{var Ht,Nt,Kt,qt,Yt;return{...st,id:(Kt=(Nt=(Ht=st.id)!=null?Ht:st.key)!=null?Nt:st.label)!=null?Kt:"tab",label:(Yt=(qt=st.label)!=null?qt:st.id)!=null?Yt:"Tab",icon:st.icon||"",label_mode:st.label_mode||"both"}}),this.defaultTab=te,this.tabs.some(st=>st.id===this.activeTab)||(this.activeTab=this.defaultTab);try{(Fe=this._renderTabs)==null||Fe.call(this)}catch{}try{(Ye=this._applyActiveTab)==null||Ye.call(this)}catch{}try{(qe=this._applyVisibility_)==null||qe.call(this)}catch{}try{await this._persistThisCardConfigToStorage_()}catch(st){console.warn("[drag-and-drop-card] Could not persist tabs",st)}(ot=this.requestUpdate)==null||ot.call(this)},rr=()=>{var I,j,K,te;return((j=(I=this._config)==null?void 0:I.options)==null?void 0:j.default_tab)||((K=this._config)==null?void 0:K.default_tab)||((te=Wi()[0])==null?void 0:te.id)},nr=e.querySelector("#ddc-tabs-list"),or=()=>{let I=Wi(),j=rr();if(nr.innerHTML="",!I.length){let K=document.createElement("div");K.className="hint",K.textContent="No tabs yet. Add one below.",nr.appendChild(K);return}I.forEach((K,te)=>{let _e=document.createElement("div");_e.className="tab-row";let we=document.createElement("input");we.type="radio",we.name="ddc-default-tab",we.value=K.id,we.checked=K.id===j,we.title="Set as default tab",we.addEventListener("change",async()=>{await xi(I,K.id)});let Me=document.createElement("div");Me.className="tab-name";let Fe=document.createElement("ha-icon");Fe.setAttribute("icon",K.icon||"mdi:tab");let Ye=document.createElement("input");Ye.value=K.icon||"",Ye.placeholder="mdi:home",Ye.title="Tab icon (mdi:...)",Ye.style.width="160px",Ye.addEventListener("change",async()=>{K.icon=Ye.value.trim(),Fe.setAttribute("icon",K.icon||"mdi:tab"),I[te]=K,await xi(I,j)});let qe=document.createElement("input");qe.value=K.label,qe.placeholder="Tab name",qe.style.flex="1",qe.addEventListener("change",async()=>{K.label=qe.value.trim()||K.id,I[te]=K,await xi(I,j)});let ot=document.createElement("div");ot.className="tab-icon-wrap",ot.appendChild(Fe),ot.appendChild(Ye),Me.appendChild(ot),Me.appendChild(qe);let st=document.createElement("div");st.className="mode-chips";let Ht=(qt,Yt)=>{let $t=document.createElement("button");return $t.type="button",$t.className="chip",$t.textContent=Yt,$t.setAttribute("aria-pressed",String((K.label_mode||"both")===qt)),$t.addEventListener("click",async()=>{st.querySelectorAll(".chip").forEach(ei=>ei.setAttribute("aria-pressed","false")),$t.setAttribute("aria-pressed","true"),K.label_mode=qt,I[te]=K,await xi(I,j)}),$t};st.appendChild(Ht("icon","Icon")),st.appendChild(Ht("text","Text")),st.appendChild(Ht("both","Both"));let Nt=document.createElement("div");Nt.className="tab-actions";let Kt=document.createElement("button");Kt.className="icon-btn danger",Kt.innerHTML='<ha-icon icon="mdi:trash-can-outline"></ha-icon>',Kt.title="Delete tab",Kt.addEventListener("click",async()=>{var $t,ei;let qt=Wi().filter(kt=>kt.id!==K.id),Yt=j;K.id===j&&(Yt=($t=qt[0])==null?void 0:$t.id),await xi(qt,Yt);try{(ei=this._reassignCardsToTab_)==null||ei.call(this,K.id,Yt)}catch{}or()}),Nt.appendChild(st),Nt.appendChild(Kt),_e.appendChild(we),_e.appendChild(Me),_e.appendChild(Nt),nr.appendChild(_e)})};or(),_t(),Xe(""),oe==null||oe.addEventListener("click",pe),(Mr=e.querySelector("#ddc-add-tab-btn"))==null||Mr.addEventListener("click",async()=>{let I=e.querySelector("#ddc-new-tab-name"),j=((I==null?void 0:I.value)||"").trim();if(!j)return;let K=Wi(),te=j.replace(/\s+/g,"-").toLowerCase(),_e=2;for(;K.some(we=>we.id===te);)te=`${te}-${_e++}`;K.push({id:te,label:j,icon:"",label_mode:"both",__raw:{id:te,label:j}}),await xi(K,rr()),I.value="",or()}),ii.forEach(I=>{I.addEventListener("click",()=>{let j=String(I.dataset.featureType||"misc");Se.push(gt(j)),_t(),Be(Se.length-1)})});let ar=e.querySelector("#ddc-clear-bg");ar&&ar.addEventListener("click",()=>{var K,te,_e;let I=e.querySelector("#ddc-setting-bgImg"),j=e.querySelector("#ddc-bg-thumb");I&&(I.value=""),j&&(j.style.backgroundImage="none");try{if((K=this._config)!=null&&K.background_image){let{background_image:we,...Me}=this._config;this._config=Me}(te=this._applyBackgroundFromConfig)==null||te.call(this),(_e=this._persistThisCardConfigToStorage_)==null||_e.call(this)}catch(we){console.warn("[drag-and-drop-card] Failed to clear background image",we)}});let Cr=["linear-gradient(135deg, #1e3a8a, #0ea5e9)","linear-gradient(135deg, #111827, #1f2937)","linear-gradient(135deg, #0f766e, #22c55e)","linear-gradient(135deg, #7c3aed, #06b6d4)","linear-gradient(135deg, #f97316, #f43f5e)","linear-gradient(135deg, #eab308, #22d3ee)","radial-gradient(circle at 30% 20%, #2dd4bf, #1e293b)","radial-gradient(circle at 70% 80%, #f59e0b, #7c3aed)"],Er=(I,j)=>{let K=e.querySelector(I),te=e.querySelector(j);!K||!te||(K.innerHTML="",Cr.forEach(_e=>{let we=document.createElement("button");we.type="button",we.className="gradient",we.style.background=_e,we.setAttribute("aria-pressed","false"),we.title=_e,we.addEventListener("click",()=>{var Me;K.querySelectorAll(".gradient").forEach(Fe=>Fe.setAttribute("aria-pressed","false")),we.setAttribute("aria-pressed","true"),te.value=_e;try{String(j||"").toLowerCase().includes("cardbg")?this.cardBackground=_e:this.containerBackground=_e,(Me=this._applyDashboardThemeStyling_)==null||Me.call(this)}catch{}}),K.appendChild(we),String(te.value).trim()===_e&&we.setAttribute("aria-pressed","true")}))};Er("#ddc-gradients-containerBg","#ddc-setting-containerBg"),Er("#ddc-gradients-cardBg","#ddc-setting-cardBg");let Ki=()=>{var I,j;Et=ji(),me&&(me.value="particles"),Qe&&(Qe.value=""),bi(),this._config={...this._config||{},background_mode:"particles",background_particles:{...((I=this._config)==null?void 0:I.background_particles)||{},config_url:void 0,config:ze(Et),pointer_events:!!(je!=null&&je.checked)}},(j=this._applyBackgroundFromConfig)==null||j.call(this)};re==null||re.addEventListener("click",()=>{_i({input:$,picker:e.querySelector("#ddc-color-containerBg"),value:ui("container"),kind:"container"})}),ee==null||ee.addEventListener("click",()=>{_i({input:X,picker:e.querySelector("#ddc-color-cardBg"),value:ui("card"),kind:"card"})}),le==null||le.addEventListener("click",()=>{_i({input:$,picker:e.querySelector("#ddc-color-containerBg"),value:ui("container"),kind:"container"}),_i({input:X,picker:e.querySelector("#ddc-color-cardBg"),value:ui("card"),kind:"card"}),Ki()}),ue==null||ue.addEventListener("click",()=>{Ki()}),je==null||je.addEventListener("change",()=>{var I,j;((me==null?void 0:me.value)||"none")==="particles"&&(this._config={...this._config||{},background_mode:"particles",background_particles:{...((I=this._config)==null?void 0:I.background_particles)||{},config_url:((Qe==null?void 0:Qe.value)||"").trim()||void 0,config:ze(Et)||void 0,pointer_events:!!je.checked}},(j=this._applyBackgroundFromConfig)==null||j.call(this))}),$&&$.addEventListener("input",()=>{var j;let I=($.value||"").trim();try{this.containerBackground=I,(j=this._applyDashboardThemeStyling_)==null||j.call(this)}catch{}}),Y&&Y.addEventListener("change",()=>{var I;try{this.applyBackgroundToPage=!!Y.checked,(I=this._applyBackgroundFromConfig)==null||I.call(this)}catch{}}),X&&X.addEventListener("input",()=>{var j;let I=(X.value||"").trim();try{this.cardBackground=I,(j=this._applyDashboardThemeStyling_)==null||j.call(this)}catch{}});let zi=()=>{var I,j;try{Te()}catch{}try{(j=(I=this.__ddcGridRO)==null?void 0:I.disconnect)==null||j.call(I),this.__ddcGridRO=null}catch{}try{e.remove()}catch{}this.__settingsModal===e&&(this.__settingsModal=null)};(Gi=e.querySelector("#ddc-settings-close"))==null||Gi.addEventListener("click",I=>{I.stopPropagation(),zi()}),(ur=e.querySelector("#ddc-settings-cancel"))==null||ur.addEventListener("click",I=>{I.stopPropagation(),zi()}),(gr=e.querySelector("#ddc-settings-save"))==null||gr.addEventListener("click",async I=>{var Ci,Fr,Hr,qr,$r,Vr,jr,Wr,Kr,Yr,Ur,o,n,d,f,y,k,T,L,z,q,B,W,Z,he,de,be,Re,Pe;I.stopPropagation();let j=(p==null?void 0:p.value)||"dynamic",K=j==="dynamic"?r?!!r.checked:!0:!!(r!=null&&r.checked),te=parseInt((a==null?void 0:a.value)||"0",10),_e=!!(s!=null&&s.checked),we=!!(c!=null&&c.checked),Me=!!(l!=null&&l.checked),Fe=!!(g!=null&&g.checked),Ye=!!(h!=null&&h.checked),qe=parseInt((u==null?void 0:u.value)||"0",10),ot=(v==null?void 0:v.value)||"auto",st=!!(m!=null&&m.checked),Ht=String((_==null?void 0:_.value)||this.mobileDynamicBehavior||"native").toLowerCase()==="scale"?"scale":"native",Nt=!!(O!=null&&O.checked),Kt=!!(S!=null&&S.checked),qt=!!(b!=null&&b.checked),Yt=!!(E!=null&&E.checked),$t=String((D==null?void 0:D.value)||"").trim(),ei=!!(F!=null&&F.checked),kt=(($==null?void 0:$.value)||"").trim(),Mt=!!(Y!=null&&Y.checked),Ut=((X==null?void 0:X.value)||"").trim(),di=((ge==null?void 0:ge.value)||"").trim(),fi=!!(Ne!=null&&Ne.checked),ki=((A==null?void 0:A.value)||"").trim(),li=(me==null?void 0:me.value)||"none",mi=((Qe==null?void 0:Qe.value)||"").trim(),on=!!(je!=null&&je.checked),an=((ut==null?void 0:ut.value)||"").trim(),Rr=parseInt((yt==null?void 0:yt.value)||"",10),Or=parseInt((bt==null?void 0:bt.value)||"",10),zr=!!(Pt!=null&&Pt.checked),Dr=!!(Oe!=null&&Oe.checked),Bi=(Ke==null?void 0:Ke.value)||"cover",sn=(vt==null?void 0:vt.value)||"center",Si=It?Math.max(0,Math.min(100,parseInt(It.value||"100",10)))/100:1,fr=(Ct==null?void 0:Ct.value)||"scroll",Ni=String((Rt==null?void 0:Rt.value)||this.tabsPosition||"top").toLowerCase(),cn=Ni==="left"||Ni==="bottom"?Ni:"top",Ir=this._normalizeDashboardPackages_(Se.map((Ae,We)=>({id:String(Ae.id||`package_${We+1}`).trim()||`package_${We+1}`,name:String(Ae.name||`Package ${We+1}`).trim()||`Package ${We+1}`,filename:String(Ae.filename||"").trim(),yaml:String(Ae.yaml||"").replace(/\r\n/g,`
`),enabled:Ae.enabled!==!1,feature_type:tt(Ae.feature_type)?Ae.feature_type:"misc"})));for(let Ae of Ir){let We=String(Ae.yaml||"").trim();if(!(!Ae.enabled||!We))try{(Fr=(Ci=window.jsyaml)==null?void 0:Ci.load)==null||Fr.call(Ci,We)}catch(at){console.warn("[drag-and-drop-card] Invalid package YAML",Ae.name,at),(Hr=this._toast)==null||Hr.call(this,`Invalid YAML in feature "${Ae.name||Ae.filename||Ae.id}".`);return}}let Br=!!(se!=null&&se.checked),Fi=!!(Ue!=null&&Ue.checked),si=parseInt((rt==null?void 0:rt.value)||"1",10),Nr=(Number.isFinite(si)?si:1)*6e4;try{if(this.autoResizeCards=K,!this.autoResizeCards&&this.__ddcResizeObs){try{this.__ddcResizeObs.disconnect()}catch{}this.__ddcResizeObs=null,this.__ddcOnWinResize&&(window.removeEventListener("resize",this.__ddcOnWinResize),this.__ddcOnWinResize=null)}if(this.autoResizeCards&&!this.__ddcResizeObs){this.__ddcResizeObs=new ResizeObserver(()=>{var mt;return(mt=this._applyAutoScale)==null?void 0:mt.call(this)});try{this.__ddcResizeObs.observe(this)}catch{}try{this.__ddcResizeObs.observe(this.cardContainer)}catch{}this.__ddcOnWinResize=this.__ddcOnWinResize||(()=>{var mt,St;(mt=this._syncResponsiveProfileForViewport_)==null||mt.call(this),(St=this._applyAutoScale)==null||St.call(this)}),window.addEventListener("resize",this.__ddcOnWinResize)}this.autoResizeCards||String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(qr=this._startScaleWatch)==null||qr.call(this):($r=this._stopScaleWatch)==null||$r.call(this),(Vr=this._applyAutoScale)==null||Vr.call(this),!isNaN(te)&&te>0&&te!==this.gridSize&&(this.gridSize=te,(jr=this._applyGridVars)==null||jr.call(this),(Wr=this._resizeContainer)==null||Wr.call(this)),this.cardShadowEnabled=Br,this.editModePin=ki,this._config={...this._config||{},edit_mode_pin:ki};let Ae=Fe!==this.dragLiveSnap;this.dragLiveSnap=Fe,Ae&&((Kr=this._initInteract)==null||Kr.call(this)),this.autoSave=Ye,!isNaN(qe)&&qe>0&&(this.autoSaveDebounce=qe);let We=j!==this.containerSizeMode,at=Kt!==!!this.outerGridBuffer;this.containerSizeMode=j,this.optimizeForMobile=st,this.mobileDynamicBehavior=Ht,this.doNotResizeText=Nt,this.outerGridBuffer=Kt,this.dashboardThemeEnabled=Yt,this.dashboardTheme=$t,this.dashboardThemeOverrideAllDesign=ei;let Je=ot!==this.containerPresetOrient;if(this.containerPresetOrient=ot,(We||Je||at)&&((Yr=this._resizeContainer)==null||Yr.call(this)),(Ur=this._syncViewportPreviewUI_)==null||Ur.call(this),j==="fixed_custom"){let mt=parseInt(((o=e.querySelector("#ddc-setting-custW"))==null?void 0:o.value)||"0",10),St=parseInt(((n=e.querySelector("#ddc-setting-custH"))==null?void 0:n.value)||"0",10);!isNaN(mt)&&mt>0&&(this.containerFixedWidth=mt),!isNaN(St)&&St>0&&(this.containerFixedHeight=St),(d=this._resizeContainer)==null||d.call(this)}else if(j==="preset"){let mt=(f=e.querySelector("#ddc-setting-preset"))==null?void 0:f.value;mt&&(this.containerPreset=mt),(y=this._resizeContainer)==null||y.call(this)}if((k=this._applyAutoScale)==null||k.call(this),this.tabsPosition=cn,this._config=this._config||{},this._config.options&&(this._config.options={...this._config.options||{},tabs_position:this.tabsPosition}),this._config.tabs_position=this.tabsPosition,(T=this._syncTabsPlacement_)==null||T.call(this),(L=this._renderTabs)==null||L.call(this),(z=this._applyActiveTab)==null||z.call(this),(q=this._syncTabsWidth_)==null||q.call(this),this.disableOverlap=qt,kt?(this.containerBackground=kt,this._config=this._config||{},this._config.container_background=this.containerBackground):(this.containerBackground="",this._config=this._config||{},this._config.container_background=this.containerBackground),this.applyBackgroundToPage=Mt,this._config=this._config||{},this._config.apply_background_to_page=!!this.applyBackgroundToPage,Ut?(this.cardBackground=Ut,this._config=this._config||{},this._config.card_background=this.cardBackground):(this.cardBackground="",this._config=this._config||{},this._config.card_background=this.cardBackground),this._config.dashboard_theme_enabled=!!this.dashboardThemeEnabled,this._config.dashboard_theme=this.dashboardTheme||"",this._config.dashboard_theme_override_all_design=!!this.dashboardThemeOverrideAllDesign,(B=this._applyDashboardThemeStyling_)==null||B.call(this),di){let mt=this._config&&this._config.background_image||{};this._config={...this._config,background_image:{...mt,src:di}}}else{let{background_image:mt,...St}=this._config||{};this._config=St}this.debug=fi,this.animateCards=_e,this.hideHaHeader=we,this.hideHaSidebar=Me,(W=this._applyHaChromeVisibility_)==null||W.call(this);let it=this._config&&this._config.background_image||{},Ft=(H==null?void 0:H.value)||"no-repeat",xt=(V==null?void 0:V.value)||"cover",jt=(J==null?void 0:J.value)||"center center",Jt=(ne==null?void 0:ne.value)||"scroll",ti=U?Math.max(0,Math.min(100,parseInt(U.value||"100",10)))/100:1;if(this._config=this._config||{},this._config.background_mode=li,li!=="image"&&!di){let{background_image:mt,...St}=this._config||{};this._config=St}if(li==="particles")this._config.background_particles={config_url:mi||void 0,config:!mi&&Et?ze(Et):void 0,pointer_events:on||void 0};else{let{background_particles:mt,...St}=this._config||{};this._config=St}if(li==="youtube")this._config.background_youtube={url:an||void 0,start:Number.isFinite(Rr)?Rr:void 0,end:Number.isFinite(Or)?Or:void 0,mute:zr!==!0?zr:void 0,loop:Dr!==!0?Dr:void 0,size:Bi&&Bi!="cover"?Bi:void 0,position:sn||void 0,attachment:fr&&fr!=="scroll"?fr:void 0,opacity:Si!=null&&Si!==1?Si:void 0};else{let{background_youtube:mt,...St}=this._config||{};this._config=St}if(this.screenSaverEnabled=Fi,this.screenSaverDelay=Nr,(Z=this._updateScreensaverSettings)==null||Z.call(this),di)this._config={...this._config,background_image:{...it,src:di,repeat:Ft,size:xt,position:jt,attachment:Jt,opacity:ti}};else if(it.src)this._config={...this._config,background_image:{...it,repeat:Ft,size:xt,position:jt,attachment:Jt,opacity:ti}};else{let{background_image:mt,...St}=this._config||{};this._config=St}(he=this._applyBackgroundFromConfig)==null||he.call(this);try{this._config||(this._config={}),this._config.grid=this.gridSize,this._config.auto_resize_cards=!!this.autoResizeCards,this._config.drag_live_snap=!!this.dragLiveSnap,this._config.auto_save=!!this.autoSave,this._config.auto_save_debounce=this.autoSaveDebounce,this._config.container_size_mode=this.containerSizeMode,this._config.container_preset_orientation=this.containerPresetOrient,this._config.optimize_for_mobile=!!this.optimizeForMobile,this._config.mobile_dynamic_behavior=this.mobileDynamicBehavior||"native",this._config.do_not_resize_text=!!this.doNotResizeText,this._config.outer_grid_buffer=!!this.outerGridBuffer,this._config.dashboard_theme_enabled=!!this.dashboardThemeEnabled,this._config.dashboard_theme=this.dashboardTheme||"",this._config.dashboard_theme_override_all_design=!!this.dashboardThemeOverrideAllDesign,this._config.container_fixed_width=this.containerFixedWidth,this._config.container_fixed_height=this.containerFixedHeight,this._config.container_preset=this.containerPreset,this._config.disable_overlap=!!this.disableOverlap,this.containerBackground!==void 0?this._config.container_background=this.containerBackground:this._config&&delete this._config.container_background,this._config.apply_background_to_page=!!this.applyBackgroundToPage,this.cardBackground!==void 0?this._config.card_background=this.cardBackground:this._config&&delete this._config.card_background,this._config.card_shadow=!!this.cardShadowEnabled,this._config.debug=!!this.debug,this._config.animate_cards=!!this.animateCards,this._config.hide_HA_Header=!!this.hideHaHeader,this._config.hide_HA_Sidebar=!!this.hideHaSidebar,this._config.screen_saver_enabled=!!this.screenSaverEnabled,this._config.screen_saver_delay=this.screenSaverDelay}catch(mt){console.warn("[drag-and-drop-card] Failed to update config",mt)}this.__ddcTextLockDirty=!0,(de=this._scheduleTextResizeLockRefresh_)==null||de.call(this,!0);try{let mt=((be=this._exportableOptions)==null?void 0:be.call(this))||{},St=(Re=this._persistThisCardConfigToStorage_)==null?void 0:Re.call(this);St&&typeof St.catch=="function"&&St.catch(ln=>{console.warn("[drag-and-drop-card] Storage save failed (is this a YAML dashboard?)",ln)});let dn=(Pe=this._persistOptionsToYaml)==null?void 0:Pe.call(this,mt,{noDownload:!0});dn&&typeof dn.catch=="function"&&dn.catch(ln=>{console.warn("[drag-and-drop-card] YAML persist failed",ln)})}catch(mt){console.warn("[drag-and-drop-card] Unexpected error persisting settings",mt)}try{this._setDashboardPackages_(Ir),await this._saveLayout(!0)}catch(mt){console.warn("[drag-and-drop-card] Failed to persist package bundles",mt)}}catch(Ae){console.warn("[drag-and-drop-card] Failed to apply settings",Ae)}zi()})}_exportableOptions(){var s,c,l,g,h;let e=this._config||{},t=(u,p)=>Object.fromEntries(p.map(m=>[m,u==null?void 0:u[m]]).filter(([,m])=>m!==void 0)),r=e.background_mode||((s=e.background_image)!=null&&s.src?"image":e.background_youtube?"youtube":e.background_particles?"particles":"none"),a={storage_key:this.storageKey||void 0,grid:this.gridSize,drag_live_snap:!!this.dragLiveSnap,auto_save:!!this.autoSave,auto_save_debounce:this.autoSaveDebounce,disable_overlap:!!this.disableOverlap,debug:!!this.debug,edit_mode_pin:this.editModePin||void 0,container_size_mode:this.containerSizeMode,container_preset_orientation:this.containerPresetOrient,container_fixed_width:(c=this.containerFixedWidth)!=null?c:void 0,container_fixed_height:(l=this.containerFixedHeight)!=null?l:void 0,container_preset:this.containerPreset,auto_resize_cards:!!this.autoResizeCards,optimize_for_mobile:!!this.optimizeForMobile,mobile_dynamic_behavior:this.mobileDynamicBehavior||"native",do_not_resize_text:!!this.doNotResizeText,outer_grid_buffer:!!this.outerGridBuffer,responsive_viewports:this._cloneJson_(this._serializeResponsiveViewportProfiles_(this.responsiveViewportProfiles)),connectors:this._cloneJson_(((h=this._responsiveConnectors)==null?void 0:h[((g=this._getPrimaryResponsiveLayoutKey_)==null?void 0:g.call(this))||"desktop_landscape"])||[]),responsive_connectors:this._cloneJson_(this._serializeResponsiveConnectorLayouts_(this._responsiveConnectors)),container_background:this.containerBackground,apply_background_to_page:!!this.applyBackgroundToPage,card_background:this.cardBackground,card_shadow:!!this.cardShadowEnabled,dashboard_theme_enabled:!!this.dashboardThemeEnabled,dashboard_theme:this.dashboardTheme||void 0,dashboard_theme_override_all_design:!!this.dashboardThemeOverrideAllDesign,animate_cards:!!this.animateCards,hide_HA_Header:!!this.hideHaHeader,hide_HA_Sidebar:!!this.hideHaSidebar,tabs:this.tabs,tabs_position:this.tabsPosition,default_tab:this.defaultTab,hide_tabs_when_single:!!this.hideTabsWhenSingle,background_mode:r,background_image:e.background_image?t(e.background_image,["src","repeat","size","position","attachment","opacity"]):void 0,background_particles:e.background_particles?t(e.background_particles,["config_url","pointer_events","config"]):void 0,background_youtube:e.background_youtube?t(e.background_youtube,["url","start","end","mute","loop","size","position","attachment","opacity"]):void 0,screen_saver_enabled:!!this.screenSaverEnabled,screen_saver_delay:this.screenSaverDelay};return Object.keys(a).forEach(u=>a[u]===void 0&&delete a[u]),a}_applyImportedOptions(e={},t=!0){var r,a,s,c,l,g,h,u,p,m,x,_,P,O,C,S,v,b,A,E,R,D,M,F;if(e&&Object.prototype.hasOwnProperty.call(e,"storage_key")&&this._isInHaEditorPreview())try{let N={type:"custom:drag-and-drop-card",...this._config||{}};this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:N},bubbles:!0,composed:!0}))}catch{}if(this._config={...this._config||{},...e},"storage_key"in e&&(this.storageKey=e.storage_key||void 0),this._syncEditorsStorageKey(),"grid"in e&&(this.gridSize=Number(e.grid)||10),"drag_live_snap"in e&&(this.dragLiveSnap=!!e.drag_live_snap),"auto_save"in e&&(this.autoSave=!!e.auto_save),"auto_save_debounce"in e&&(this.autoSaveDebounce=Number(e.auto_save_debounce)||800),"do_not_resize_text"in e&&(this.doNotResizeText=!!e.do_not_resize_text),"optimize_for_mobile"in e&&(this.optimizeForMobile=!!e.optimize_for_mobile),"mobile_dynamic_behavior"in e&&(this.mobileDynamicBehavior=String(e.mobile_dynamic_behavior||"native").toLowerCase()==="scale"?"scale":"native"),"outer_grid_buffer"in e&&(this.outerGridBuffer=!!e.outer_grid_buffer),"responsive_viewports"in e&&(this.responsiveViewportProfiles=this._normalizeResponsiveViewportProfiles_(e.responsive_viewports)),("responsive_connectors"in e||"connectors"in e)&&(this._responsiveConnectors=this._normalizeResponsiveConnectorLayouts_(e.connectors||[],e.responsive_connectors||null),this._connectorDraft=null,this._selectedConnectorId=null),"container_background"in e&&(this.containerBackground=(r=e.container_background)!=null?r:"transparent"),"apply_background_to_page"in e&&(this.applyBackgroundToPage=!!e.apply_background_to_page),"card_background"in e&&(this.cardBackground=(a=e.card_background)!=null?a:"var(--ha-card-background, var(--card-background-color))"),"card_shadow"in e&&(this.cardShadowEnabled=!!e.card_shadow),("dashboard_theme_enabled"in e||"theme_enabled"in e)&&(this.dashboardThemeEnabled=!!((s=e.dashboard_theme_enabled)!=null?s:e.theme_enabled)),("dashboard_theme"in e||"theme_name"in e)&&(this.dashboardTheme=String((l=(c=e.dashboard_theme)!=null?c:e.theme_name)!=null?l:"").trim()),("dashboard_theme_override_all_design"in e||"theme_override_all_design"in e)&&(this.dashboardThemeOverrideAllDesign=!!((g=e.dashboard_theme_override_all_design)!=null?g:e.theme_override_all_design)),"debug"in e&&(this.debug=!!e.debug),"disable_overlap"in e&&(this.disableOverlap=!!e.disable_overlap),"container_size_mode"in e){this.containerSizeMode=e.container_size_mode||"dynamic";let N=String(this.containerSizeMode||"dynamic").toLowerCase();N==="dynamic"&&(this.autoResizeCards=!0),this.autoResizeCards||N==="auto"?(h=this._startScaleWatch)==null||h.call(this):(u=this._stopScaleWatch)==null||u.call(this),(p=this._syncViewportPreviewUI_)==null||p.call(this),(m=this._applyAutoScale)==null||m.call(this)}if("container_fixed_width"in e&&(this.containerFixedWidth=Number(e.container_fixed_width)||null),"container_fixed_height"in e&&(this.containerFixedHeight=Number(e.container_fixed_height)||null),"container_preset"in e&&(this.containerPreset=e.container_preset||"fhd"),"container_preset_orientation"in e&&(this.containerPresetOrient=e.container_preset_orientation||"auto"),"auto_resize_cards"in e){let N=String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase();N==="dynamic"?this.autoResizeCards=!0:this.autoResizeCards=!!e.auto_resize_cards,this.autoResizeCards||N==="auto"?(x=this._startScaleWatch)==null||x.call(this):(_=this._stopScaleWatch)==null||_.call(this),(P=this._syncViewportPreviewUI_)==null||P.call(this),(O=this._applyAutoScale)==null||O.call(this)}if("screen_saver_enabled"in e&&(this.screenSaverEnabled=!!e.screen_saver_enabled),"screen_saver_delay"in e){let N=Number(e.screen_saver_delay);this.screenSaverDelay=Number.isFinite(N)&&N>0?N:this.screenSaverDelay}if(("screen_saver_enabled"in e||"screen_saver_delay"in e)&&typeof this._updateScreensaverSettings=="function"&&this._updateScreensaverSettings(),"tabs_position"in e){let N=String(e.tabs_position||"top").toLowerCase();this.tabsPosition=N==="left"||N==="bottom"?N:"top",(C=this._syncTabsPlacement_)==null||C.call(this)}(S=this._applyDashboardThemeStyling_)==null||S.call(this),this._applyGridVars(),t&&(this._applyContainerSizingFromConfig(!0),(v=this._applyAutoScale)==null||v.call(this),this._resizeContainer(),(b=this._updateStoreBadge)==null||b.call(this),(A=this._applyAutoScale)==null||A.call(this)),"tabs_position"in e&&((E=this._renderTabs)==null||E.call(this),(R=this._applyActiveTab)==null||R.call(this),(D=this._syncTabsWidth_)==null||D.call(this)),(M=this._renderConnectors)==null||M.call(this),this.__ddcTextLockDirty=!0,(F=this._scheduleTextResizeLockRefresh_)==null||F.call(this,!0)}_exportDesign(){var c;this._persistCurrentResponsiveProfileToMemory_();let e=((c=this._responsiveLayouts)==null?void 0:c[this._getPrimaryResponsiveLayoutKey_()])||this._captureCurrentLayoutEntries_(),t={version:3,options:this._exportableOptions(),cards:e,responsive_layouts:this._cloneJson_(this._serializeResponsiveLayouts_(this._responsiveLayouts,e)),packages:this._exportDashboardPackages_()};this._config&&this._config.card_mod&&(t.options=t.options||{},t.options.card_mod=this._config.card_mod);let r=`DragAndDrop_Design_${this.storageKey||"layout"}.json`,a=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),s=document.createElement("a");s.href=URL.createObjectURL(a),s.download=r,s.click(),URL.revokeObjectURL(s.href),this._toast("Design exported.")}_importDesign(){let e=document.createElement("input");e.type="file",e.accept="application/json";let t=!0,r=!1,a=["grid","drag_live_snap","auto_save","auto_save_debounce","debug","disable_overlap","card_mod","storage_key","animate_cards","auto_resize_cards","optimize_for_mobile","mobile_dynamic_behavior","do_not_resize_text","outer_grid_buffer","responsive_viewports","connectors","responsive_connectors","container_background","apply_background_to_page","card_background","card_shadow","dashboard_theme_enabled","dashboard_theme","dashboard_theme_override_all_design","container_size_mode","container_fixed_width","container_fixed_height","container_preset","container_preset_orientation","tabs","tabs_position","default_tab","hide_tabs_when_single","hide_HA_Header","hide_HA_Sidebar","background_mode","background_image","background_particles","background_youtube","screen_saver_enabled","screen_saver_delay"];e.onchange=async()=>{var l,g,h,u,p,m,x,_,P,O,C,S,v,b,A,E,R,D,M,F,N,$,Y,X,le,re,ee,ue,se,ge,ce,H,V,J,ne,U,xe,Ne,Ue,rt,fe,me;let s=(l=e.files)==null?void 0:l[0];if(!s)return;let c=await s.text();try{let ye=JSON.parse(c),Ve=this.storageKey||((g=this._config)==null?void 0:g.storage_key)||null;this._setDashboardPackages_(ye.packages||[]);let dt=!!(ye.options&&Array.isArray(ye.options.tabs)),Qe=Array.isArray(ye.cards)&&ye.cards.some(Oe=>(Oe==null?void 0:Oe.tabId)||(Oe==null?void 0:Oe.tab_id)),je=[];dt?je=ye.options.tabs:Qe?je=Array.from(new Set(ye.cards.map(Ke=>(Ke==null?void 0:Ke.tabId)||(Ke==null?void 0:Ke.tab_id)).filter(Boolean))).map(Ke=>({id:Ke,label:Ke})):je=[{id:"default",label:"Layout"}];let ut=String(((h=ye.options)==null?void 0:h.tabs_position)||this.tabsPosition||"top").toLowerCase(),yt=ut==="left"||ut==="bottom"?ut:"top",bt=((u=ye.options)==null?void 0:u.default_tab)||((p=je[0])==null?void 0:p.id)||"default",Pt=((m=ye.options)==null?void 0:m.hide_tabs_when_single)!==void 0?!!ye.options.hide_tabs_when_single:!0;if(ye.options){let Oe={...ye.options};if(r||delete Oe.storage_key,t){let Ke=this._config||{type:"custom:drag-and-drop-card"};for(let vt of a)vt==="storage_key"&&!r||!(vt in Oe)&&vt in Ke&&delete Ke[vt];try{this.cardContainer&&(this.cardContainer.style.background="",this.cardContainer.style.width="",this.cardContainer.style.height=""),(_=(x=this.style)==null?void 0:x.removeProperty)==null||_.call(x,"--ddc-container-bg"),(O=(P=this.style)==null?void 0:P.removeProperty)==null||O.call(P,"--ddc-card-bg")}catch{}if(this._config={...Ke,...Oe},"card_mod"in Oe||delete this._config.card_mod,"animate_cards"in Oe&&(this.animateCards=!!Oe.animate_cards),"auto_resize_cards"in Oe&&(this.autoResizeCards=!!Oe.auto_resize_cards),"optimize_for_mobile"in Oe&&(this.optimizeForMobile=!!Oe.optimize_for_mobile),"mobile_dynamic_behavior"in Oe&&(this.mobileDynamicBehavior=String(Oe.mobile_dynamic_behavior||"native").toLowerCase()==="scale"?"scale":"native"),"hide_HA_Header"in Oe||"hide_HA_Sidebar"in Oe)try{(C=this._applyHaChromeVisibility_)==null||C.call(this)}catch{}if("background_mode"in Oe||"background_image"in Oe||"background_particles"in Oe||"background_youtube"in Oe)try{(S=this._applyBackgroundFromConfig)==null||S.call(this)}catch{}if(r&&Oe.storage_key&&(this.storageKey=Oe.storage_key),this._opts){this._opts={...this._opts,...Oe};for(let vt of a)vt in Oe||delete this._opts[vt]}(v=this._applyOptionsToDom)==null||v.call(this,this._config),(b=this.requestUpdate)==null||b.call(this)}else this._applyImportedOptions(Oe,!0),Oe.card_mod!==void 0&&(this._config=this._config||{},this._config.card_mod=Oe.card_mod,(A=this.requestUpdate)==null||A.call(this))}else if(typeof ye.grid=="number"){let Oe={grid:ye.grid};t?this._config={...this._config||{},...Oe}:this._applyImportedOptions(Oe,!0),(E=this.requestUpdate)==null||E.call(this)}(!Array.isArray(this.tabs)||!this.tabs.length)&&(this.tabs=je),this.tabsPosition||(this.tabsPosition=yt),this.defaultTab||(this.defaultTab=bt),this.hideTabsWhenSingle===void 0&&(this.hideTabsWhenSingle=Pt),(R=this._syncTabsPlacement_)==null||R.call(this);try{let Oe=((D=this._config)==null?void 0:D.storage_key)||this.storageKey||null,Ke=(M=ye.options)!=null?M:typeof ye.grid=="number"?{grid:ye.grid}:{},vt={...Ke,tabs:(N=(F=Ke.tabs)!=null?F:this.tabs)!=null?N:[],tabs_position:(Y=($=Ke.tabs_position)!=null?$:this.tabsPosition)!=null?Y:"top",default_tab:(se=(X=Ke.default_tab)!=null?X:this.defaultTab)!=null?se:((re=(le=Ke.tabs)==null?void 0:le[0])==null?void 0:re.id)||((ue=(ee=this.tabs)==null?void 0:ee[0])==null?void 0:ue.id)||"default",hide_tabs_when_single:(ce=Ke.hide_tabs_when_single)!=null?ce:(ge=this.hideTabsWhenSingle)!=null?ge:!0};if(r||delete vt.storage_key,!Oe)console.warn("[ddc:import] No storage_key on this card; aborting YAML persist.");else{let Ct=await((H=this._persistOptionsToYaml)==null?void 0:H.call(this,vt,{forceTargetKey:String(Oe),noDownload:!0,replace:!0,wipeUnknownKeys:!0})),It=!!(Ct&&Ct.yamlSaved);(V=console.debug)==null||V.call(console,"[ddc:import] YAML persist result:",It)}try{let Ct={type:"custom:drag-and-drop-card",...this._config||{}};Ct.tabs=vt.tabs,Ct.tabs_position=vt.tabs_position,Ct.default_tab=vt.default_tab,Ct.hide_tabs_when_single=!!vt.hide_tabs_when_single,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:Ct},bubbles:!0,composed:!0}))}catch{}}catch(Oe){console.warn("[ddc:import] YAML persist failed:",Oe)}this.responsiveViewportProfiles=this._normalizeResponsiveViewportProfiles_(((J=ye.options)==null?void 0:J.responsive_viewports)||this.responsiveViewportProfiles),this._responsiveLayouts=this._normalizeResponsiveLayouts_(ye.cards||[],ye.responsive_layouts||null),await this._syncResponsiveProfileForViewport_({force:!0}),(ne=this._applyOptionsToDom)==null||ne.call(this,this._config),this._resizeContainer();try{(U=this._syncTabsPlacement_)==null||U.call(this),(xe=this._renderTabs)==null||xe.call(this),(Ne=this._applyActiveTab)==null||Ne.call(this)}catch{}try{this._saveTimer&&clearTimeout(this._saveTimer),await this._saveLayout(!0),(Ue=this._toast)==null||Ue.call(this,"Design imported & saved. Reloading..."),window.location.reload()}catch(Oe){console.warn("[ddc:import] saveLayout failed",Oe),(rt=this._markDirty)==null||rt.call(this,"import"),(fe=this._toast)==null||fe.call(this,"Design imported \u2014 click Apply to save.")}}catch(ye){console.error("Import failed",ye),(me=this._toast)==null||me.call(this,"Import failed \u2014 invalid file.")}},e.click()}_getLovelace(){var s,c;let e=0,t=this;for(;t&&e++<20;){let l=(s=t.getRootNode)==null?void 0:s.call(t),g=l==null?void 0:l.host;if((g==null?void 0:g.tagName)==="HUI-ROOT")return g.lovelace;t=g||t.parentElement}let r=new Set,a=[document];for(;a.length;){let l=a.shift();if(!(!l||r.has(l))){if(r.add(l),((c=l.host)==null?void 0:c.tagName)==="HUI-ROOT")return l.host.lovelace;if(l.tagName==="HUI-ROOT")return l.lovelace;if(l.shadowRoot&&a.push(l.shadowRoot),l.children)for(let g of l.children)a.push(g)}}}_scanDdcCards(e){let t=[],r=(s,c,l)=>{(l==null?void 0:l.type)==="custom:drag-and-drop-card"&&t.push({view:s,path:[...c],card:l})},a=(s,c,l)=>{if(s){if(Array.isArray(s)){s.forEach((g,h)=>a(g,c,l.concat(h)));return}if(typeof s=="object"){"type"in s&&r(c,l,s);for(let[g,h]of Object.entries(s))g==="views"&&Array.isArray(h)?h.forEach((u,p)=>a(u,p,["views",p])):(Array.isArray(h)||h&&typeof h=="object")&&a(h,c,l.concat(g))}}};return a(e,-1,[]),t}async _persistOptionsToYaml(e,{prevKey:t=null,patchAllInCurrentViewIfNoKey:r=!1}={}){var a,s,c,l,g,h,u,p,m;try{let x=this._getLovelace();if(!x)return console.debug("[ddc:import] persist: no lovelace root"),!1;if(typeof x.saveConfig!="function")return console.debug("[ddc:import] persist: dashboard not in Storage mode"),!1;let _=JSON.parse(JSON.stringify(x.config)),P=this._scanDdcCards(_),O=(a=x.current_view)!=null?a:0;console.debug("[ddc:import] persist: found DDC cards",P.map(A=>({view:A.view,path:A.path.join("."),storage_key:A.card.storage_key||null})));let C=(s=e==null?void 0:e.storage_key)!=null?s:null,S=[];t&&S.push(t),C&&S.push(C),this.storageKey&&S.push(this.storageKey),(c=this._config)!=null&&c.storage_key&&S.push(this._config.storage_key);let v=P.filter(A=>A.card.storage_key&&S.includes(A.card.storage_key));if(!v.length){let A=P.filter(E=>E.view===O);A.length===1&&(v=A)}if(!v.length&&P.length===1&&(v=P),!v.length)return console.debug("[ddc:import] persist: no target. Provide a unique storage_key on this card and import again.",{prevKey:t,newKey:C,storageKey:this.storageKey}),!1;let b={type:"custom:drag-and-drop-card",...e};"storage_key"in b&&delete b.storage_key,"storageKey"in b&&delete b.storageKey;for(let A of v){let E=_;for(let M of A.path)E=E[M];let R=(m=(p=(h=(l=E==null?void 0:E.storage_key)!=null?l:E==null?void 0:E.storageKey)!=null?h:(g=E==null?void 0:E.options)==null?void 0:g.storage_key)!=null?p:(u=E==null?void 0:E.options)==null?void 0:u.storageKey)!=null?m:null,D=!!(t&&C&&R===t&&C!==t);if(Object.assign(E,b),E&&typeof E.options=="object"&&E.options!==null)for(let[M,F]of Object.entries(e||{}))M==="storage_key"||M==="storageKey"||M==="type"||(E.options[M]=F);D?E.storage_key=String(C):R&&(E.storage_key=String(R)),"storageKey"in E&&delete E.storageKey}return console.debug("[ddc:import] persist \u2192 saving",{patched:v.length,keysTried:S,patch}),await x.saveConfig(_),!0}catch(x){return console.warn("[ddc:import] persist error",x),!1}}_queueSave(e="auto"){this._markDirty(e),this.autoSave&&(this._loading||this.editMode&&(this._dbgPush("autosave","Queued",{reason:e,debounce:this.autoSaveDebounce}),clearTimeout(this._saveTimer),this._saveTimer=setTimeout(()=>this._saveLayout(!0),this.autoSaveDebounce)))}async _saveLayout(e=!0){var a;this._persistCurrentResponsiveProfileToMemory_();let t=((a=this._responsiveLayouts)==null?void 0:a[this._getPrimaryResponsiveLayoutKey_()])||this._captureCurrentLayoutEntries_(),r={version:3,options:this._exportableOptions(),cards:t,responsive_layouts:this._cloneJson_(this._serializeResponsiveLayouts_(this._responsiveLayouts,t)),packages:this._exportDashboardPackages_()};try{localStorage.setItem(`ddc_local_${this.storageKey||"default"}`,JSON.stringify(r))}catch{}if(!this.storageKey){e||this._toast("Saved locally (no storage_key set)."),this.__dirty=!1,this._updateApplyBtn();return}try{await this._saveLayoutToBackend(this.storageKey,r),e||this._toast("Layout saved."),this.__dirty=!1,this._updateApplyBtn()}catch(s){console.error("Backend save failed",s),this._dbgPush("save","Backend save failed",{error:String(s)}),e||this._toast("Backend save failed \u2014 kept local copy.")}}async _probeBackend(){this._backendOK=!1;let e=performance.now();try{this._dbgPush("probe","GET /api/dragdrop_storage (list keys)");let t=await this.hass.callApi("get","dragdrop_storage"),r=Math.round(performance.now()-e);this._dbgPush("probe",`OK (${r} ms)`,t),this._backendOK=!!t}catch(t){let r=Math.round(performance.now()-e);this._dbgPush("probe",`FAILED (${r} ms)`,{error:String(t)}),this._backendOK=!1}this._updateStoreBadge()}async _loadLayoutFromBackend(e){let t=`dragdrop_storage/${encodeURIComponent(e)}`,r=performance.now();try{this._dbgPush("load",`GET /api/${t}`);let a=await this.hass.callApi("get",t),s=Math.round(performance.now()-r);return this._dbgPush("load",`OK (${s} ms)`,{bytes:JSON.stringify(a||"").length}),a}catch(a){let s=Math.round(performance.now()-r);return this._dbgPush("load",`FAILED (${s} ms)`,{error:String(a)}),null}}async _saveLayoutToBackend(e,t){var l,g,h,u,p,m;let r=`dragdrop_storage/${encodeURIComponent(e)}`,a=JSON.stringify(t).length,s=Array.isArray(t==null?void 0:t.packages)&&t.packages.some(x=>!x||typeof x!="object"||x.enabled===!1?!1:String(x.yaml||"").trim().length>0),c=performance.now();try{this._dbgPush("save",`POST /api/${r}`,{bytes:a});let x=await this.hass.callApi("post",r,t),_=Math.round(performance.now()-c);return this._dbgPush("save",`OK (${_} ms)`,x),s&&!("package_sync"in(x||{}))?(this._dbgPush("packages","Package sync unsupported by backend",x),console.warn("[ddc] backend save succeeded, but no package_sync info was returned. Backend may be outdated."),(l=this._toast)==null||l.call(this,"Features were saved in dashboard JSON, but this backend does not report package sync. Update the Drag And Drop Card backend in Home Assistant.")):((g=x==null?void 0:x.package_sync)==null?void 0:g.ok)===!1?(this._dbgPush("packages","Package sync failed",x.package_sync),console.warn("[ddc] package sync failed",x.package_sync),(u=this._toast)==null||u.call(this,`Package sync failed: ${((h=x==null?void 0:x.package_sync)==null?void 0:h.error)||"unknown error"}`)):(p=x==null?void 0:x.package_sync)!=null&&p.count&&(this._dbgPush("packages","Package sync OK",x.package_sync),(m=this._toast)==null||m.call(this,`Synced ${x.package_sync.count} feature package file${x.package_sync.count===1?"":"s"} to Home Assistant.`)),x}catch(x){let _=Math.round(performance.now()-c);throw this._dbgPush("save",`FAILED (${_} ms)`,{error:String(x),bytes:a}),x}}async _saveOptionsToBackend(e,t){var r;try{let a=await this._loadLayoutFromBackend(e),s={version:3,...a||{},options:t||((r=this._exportableOptions)==null?void 0:r.call(this))||{}};return a&&Array.isArray(a.cards)&&(s.cards=a.cards),await this._saveLayoutToBackend(e,s),!0}catch(a){return console.warn("[ddc] saveOptionsToBackend failed",a),!1}}_updateStoreBadge(){let e=this.storeBadge;if(!e)return;let t=this._backendOK&&!!this.storageKey;e.textContent=t?"storage: backend - OK":"storage: local. Your Changes are NOT being SAVED. You need to download the Drag and Drop Card backend integration",e.style.background=t?"rgba(76,175,80,.15)":"rgba(255,193,7,.15)",e.style.borderColor=t?"rgba(76,175,80,.45)":"rgba(255,193,7,.45)"}_ensureScreenSaverStyles(){var e;if(!((e=this.shadowRoot)!=null&&e.querySelector("#ddc-screensaver-styles")))try{let t=document.createElement("style");t.id="ddc-screensaver-styles",t.textContent=`
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
      `,document.head.appendChild(e)}catch(e){console.warn("[drag-and-drop-card] Failed to inject global screensaver styles",e)}}_ensureScreenSaverOverlay(){var r;if(this._ensureScreenSaverGlobalStyles(),!this._screenSaverOverlayId){let a=((r=this.config)==null?void 0:r.id)||`ddc_${Math.random().toString(36).slice(2)}`;this._screenSaverOverlayId=`ddc-screensaver-overlay-${a}`}let e=this._screenSaverOverlayId;if(this.screenSaverOverlay&&this.screenSaverOverlay.parentNode===document.body)return;if(this.screenSaverOverlay&&!this.screenSaverOverlay.parentNode){document.body.appendChild(this.screenSaverOverlay);return}let t=document.createElement("div");t.className="screensaver-overlay",t.id=e,t.innerHTML=`
      <div class="screensaver-content" id="${e}-content">
        <div class="screensaver-clock" id="${e}-clock"></div>
        <div class="screensaver-date" id="${e}-date"></div>
        <div class="screensaver-calendar" id="${e}-calendar"></div>
      </div>
    `,t.addEventListener("click",()=>this._deactivateScreenSaver()),t.addEventListener("keydown",()=>this._deactivateScreenSaver()),this.screenSaverOverlay=t,document.body.appendChild(t)}_attachScreensaverListeners(){if(this._screensaverActivityHandler)return;let e=()=>this._resetScreensaverTimer();this._screensaverActivityHandler=e,this._screensaverEvents=["mousemove","mousedown","click","keydown","wheel","scroll","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointercancel"],this._screensaverEvents.forEach(t=>{document.addEventListener(t,e,!0)})}_resetScreensaverTimer(){if(this._screensaverTimer&&(clearTimeout(this._screensaverTimer),this._screensaverTimer=null),!this._shouldUseScreensaver()){this.screensaverActive&&this._deactivateScreenSaver();return}this.screensaverActive&&this._deactivateScreenSaver();let e=Number(this.screenSaverDelay)||5*6e4;this._screensaverTimer=setTimeout(()=>{this._activateScreenSaver()},e)}_activateScreenSaver(){if(this._shouldUseScreensaver()&&(this._ensureScreenSaverOverlay(),!!this.screenSaverOverlay)){this.screensaverActive=!0,this.screenSaverOverlay.classList.add("active");try{this.tabsBar&&(this.__savedTabsDisplay=this.tabsBar.style.display,this.tabsBar.style.display="none")}catch{}this._updateScreenSaverClock(),this._clockInterval&&clearInterval(this._clockInterval),this._clockInterval=setInterval(()=>this._updateScreenSaverClock(),1e3)}}_deactivateScreenSaver(){if(this.screensaverActive){this.screensaverActive=!1,this.screenSaverOverlay&&this.screenSaverOverlay.classList.remove("active"),this._clockInterval&&(clearInterval(this._clockInterval),this._clockInterval=null);try{this.tabsBar&&(this.__savedTabsDisplay!=null?this.tabsBar.style.display=this.__savedTabsDisplay:this.tabsBar.style.display="")}catch{}this._resetScreensaverTimer()}}_updateScreenSaverClock(){let e=this.screenSaverOverlay,t=e==null?void 0:e.querySelector(".screensaver-clock"),r=e==null?void 0:e.querySelector(".screensaver-date"),a=new Date;t&&(t.textContent=a.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"})),r&&(r.textContent=a.toLocaleDateString([],{weekday:"long",year:"numeric",month:"long",day:"numeric"}));try{this._updateScreenSaverCalendar()}catch{}}_updateScreenSaverCalendar(){var x;let e=(x=this.screenSaverOverlay)==null?void 0:x.querySelector(".screensaver-calendar");if(!e)return;let t=new Date,r=void 0,a=t.getFullYear(),s=t.getMonth(),c=t.toLocaleDateString(r,{month:"long"}),l=[];for(let _=0;_<7;_++){let P=new Date(1970,0,4+_);l.push(P.toLocaleDateString(r,{weekday:"short"}))}let g=new Date(a,s,1).getDay(),h=new Date(a,s+1,0).getDate(),u=new Date(a,s,0).getDate(),p=[];for(let _=0;_<g;_++)p.push({day:u-(g-1)+_,other:!0});for(let _=1;_<=h;_++){let P=_===t.getDate();p.push({day:_,today:P,other:!1})}for(;p.length<42;){let _=p.length-g-h+1;p.push({day:_,other:!0})}let m="";m+=`<div class="calendar-header">${c} ${a}</div>`,m+='<div class="calendar-grid">';for(let _=0;_<7;_++)m+=`<div class="header">${l[_]}</div>`;p.forEach((_,P)=>{let O=[];_.other&&O.push("other-month"),_.today&&O.push("today");let C=P%7;(C===0||C===6)&&O.push("weekend"),m+=`<div class="${O.join(" ")}">${_.day}</div>`}),m+="</div>",e.innerHTML=m}_updateScreensaverSettings(){this.screenSaverEnabled?(this._ensureScreenSaverOverlay(),this._attachScreensaverListeners(),this._resetScreensaverTimer()):(this._screensaverTimer&&(clearTimeout(this._screensaverTimer),this._screensaverTimer=null),this.screensaverActive&&this._deactivateScreenSaver())}_shouldUseScreensaver(){try{if(!this.screenSaverEnabled||this.editMode||typeof this._isInHaEditorPreview=="function"&&this._isInHaEditorPreview()||!this.isConnected)return!1}catch{return!1}return!0}_toast(e){let t=new Event("hass-notification");t.detail={message:e},window.dispatchEvent(t)}_huiRoot(){var e,t,r,a,s,c;try{let l=document.querySelector("home-assistant"),g=(e=l==null?void 0:l.shadowRoot)==null?void 0:e.querySelector("home-assistant-main"),h=((t=g==null?void 0:g.shadowRoot)==null?void 0:t.querySelector("ha-drawer"))||g,u=((r=h==null?void 0:h.shadowRoot)==null?void 0:r.querySelector("partial-panel-resolver"))||h,p=((a=u==null?void 0:u.shadowRoot)==null?void 0:a.querySelector("ha-panel-lovelace"))||((s=h==null?void 0:h.shadowRoot)==null?void 0:s.querySelector("ha-panel-lovelace"));return((c=p==null?void 0:p.shadowRoot)==null?void 0:c.querySelector("hui-root"))||null}catch{return null}}getCardSize(){return 3}};if(!customElements.get("drag-and-drop-card")){let s=function(S,v){var R;let b=String((S==null?void 0:S.type)||""),A=a[b];if(!A)return null;let E=document.createElement(A);try{(R=E.setConfig)==null||R.call(E,S)}catch{}try{E.hass=v}catch{}return E},c=function(S,v,b){return Math.min(b,Math.max(v,S))},l=function(S,v,b=-1/0,A=1/0){let E=Number(S);return Number.isFinite(E)?c(E,b,A):v},g=function(S){return String(S||"").split(",").map(v=>v.trim()).filter(Boolean)},h=function(S){return String(S!=null?S:"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},u=function(S){return h(S).replace(/"/g,"&quot;")},p=function(S){let v=String(S!=null?S:"").trim().toLowerCase();return v?!["0","off","false","closed","idle","unavailable","unknown","none"].includes(v):!1},m=function(S,v){let b=String(S!=null?S:"").trim(),A=b.toLowerCase(),E=String(v!=null?v:"").trim();if(!E)return!1;let R=E.match(/^(>=|<=|>|<|==|=|!=)\s*(-?\d+(?:\.\d+)?)$/);if(R){let M=Number(b),F=Number(R[2]);if(!Number.isFinite(M)||!Number.isFinite(F))return!1;switch(R[1]){case">":return M>F;case"<":return M<F;case">=":return M>=F;case"<=":return M<=F;case"=":case"==":return M===F;case"!=":return M!==F;default:return!1}}let D=E.toLowerCase();return D==="truthy"?p(S):D==="falsy"?!p(S):D==="!off"?A!=="off":A===D},x=function(S,v){let b=g(v);return b.length?b.some(A=>m(S,A)):p(S)};if(Object.assign(Ti.prototype,{_updateGridButtonsVisibility(){var E,R,D,M;let S=!!this.editMode,b=Number((M=(D=(E=this._config)==null?void 0:E.grid)!=null?D:(R=this._options)==null?void 0:R.grid)!=null?M:10)>=10,A=this.cardContainer;if(!S||!b){this._destroyGridCanvas(),A&&A.classList.toggle("grid-on",S);return}this._buildOrUpdateGridCanvas(),A&&A.classList.remove("grid-on")},_requestGridButtonsUpdateSoon(){clearTimeout(this._gridLayoutT),this._gridLayoutT=setTimeout(()=>this._updateGridButtonsVisibility(),50)},_buildOrUpdateGridCanvas(){var $,Y,X,le;let S=this.cardContainer;if(!S||!S.isConnected)return;let v=Number((le=(X=($=this._config)==null?void 0:$.grid)!=null?X:(Y=this._options)==null?void 0:Y.grid)!=null?le:10);if(this._gridCellSize=v,!this._gridCanvas){let re=document.createElement("canvas");re.className="ddc-grid-canvas",S.insertBefore(re,S.firstChild||null),this._gridCanvas=re,this._gridCtx=re.getContext("2d"),re.addEventListener("pointerdown",ee=>this._onGridPointerDown(ee),{passive:!0}),re.addEventListener("pointermove",ee=>this._onGridPointerMove(ee),{passive:!0}),re.addEventListener("pointerup",ee=>this._onGridPointerUp(ee),{passive:!0}),re.addEventListener("pointercancel",ee=>this._onGridPointerCancel(ee),{passive:!0}),re.addEventListener("lostpointercapture",ee=>this._onGridPointerCancel(ee),{passive:!0})}let b=S.getBoundingClientRect(),{sx:A,sy:E}=this._getContainerScale_(),R=A&&isFinite(A)?1/A:1,D=E&&isFinite(E)?1/E:1,M=b.width*R,F=b.height*D,N=Math.max(1,window.devicePixelRatio||1);this._gridCanvas.width=Math.max(1,Math.round(M*N)),this._gridCanvas.height=Math.max(1,Math.round(F*N)),this._gridCanvas.style.width=M+"px",this._gridCanvas.style.height=F+"px",this._gridCols=Math.max(1,Math.ceil(M/v)),this._gridRows=Math.max(1,Math.ceil(F/v)),this._buildGridTile_(v,N),this._markGridDirty()},_destroyGridCanvas(){var S;cancelAnimationFrame(this._gridRAF),this._gridRAF=0,(S=this._gridCanvas)!=null&&S.parentElement&&this._gridCanvas.parentElement.removeChild(this._gridCanvas),this._gridCanvas=null,this._gridCtx=null,this._gridTile=null,this._gridDown=!1,this._gridHoverCol=this._gridHoverRow=-1},_buildGridTile_(S,v){let b=Math.min(10,S*.25),A=Math.max(1,Math.round(S)),E=A,R=document.createElement("canvas");R.width=A,R.height=E;let D=R.getContext("2d"),M=0,F=0,N=S,$=S;D.clearRect(0,0,A,E),D.beginPath();let Y=Math.min(b,N/2,$/2);D.moveTo(M+Y,F),D.arcTo(M+N,F,M+N,F+$,Y),D.arcTo(M+N,F+$,M,F+$,Y),D.arcTo(M,F+$,M,F,Y),D.arcTo(M,F,M+N,F,Y),D.closePath(),D.fillStyle="rgba(255,255,255,0.08)",D.fill(),D.strokeStyle="rgba(255,255,255,0.12)",D.lineWidth=1,D.stroke(),this._gridTile=R},_markGridDirty(){this._gridDirty||(this._gridDirty=!0,this._gridRAF=requestAnimationFrame(()=>{this._gridDirty=!1,this._renderGridCanvas_()}))},_renderGridCanvas_(){let S=this._gridCanvas;if(!S)return;let v=this._gridCtx,b=Math.max(1,window.devicePixelRatio||1),A=this._gridCellSize||10;if(v.clearRect(0,0,S.width,S.height),this._gridTile){let E=v.createPattern(this._gridTile,"repeat");v.save(),v.scale(b,b),v.fillStyle=E,v.fillRect(0,0,S.width/b,S.height/b),v.restore()}if(this._gridHoverCol>=0&&this._gridHoverRow>=0){v.save(),v.scale(b,b),v.fillStyle="rgba(0, 160, 255, 0.30)",v.strokeStyle="rgba(0, 160, 255, 0.60)",v.lineWidth=1;let E=this._gridHoverCol*A,R=this._gridHoverRow*A,D=A,M=A;this._roundRect_(v,E,R,D,M,Math.min(10,A*.25)),v.fill(),v.stroke(),v.restore()}if(this._gridDown&&this._gridStartCol>=0&&this._gridStartRow>=0&&this._gridCurrCol>=0&&this._gridCurrRow>=0){let E=Math.min(this._gridStartCol,this._gridCurrCol),R=Math.max(this._gridStartCol,this._gridCurrCol),D=Math.min(this._gridStartRow,this._gridCurrRow),M=Math.max(this._gridStartRow,this._gridCurrRow),F=E*A,N=D*A,$=(R-E+1)*A,Y=(M-D+1)*A;v.save(),v.scale(b,b),v.fillStyle="rgba(0, 160, 255, 0.22)",v.strokeStyle="rgba(0, 160, 255, 0.45)",v.lineWidth=2,this._roundRect_(v,F,N,$,Y,Math.min(12,A*.3)),v.fill(),v.stroke(),v.restore()}},_roundRect_(S,v,b,A,E,R){let D=Math.min(R,A/2,E/2);S.beginPath(),S.moveTo(v+D,b),S.arcTo(v+A,b,v+A,b+E,D),S.arcTo(v+A,b+E,v,b+E,D),S.arcTo(v,b+E,v,b,D),S.arcTo(v,b,v+A,b,D),S.closePath()},_emptySpaceAt_(S,v){let b=document.elementFromPoint(S,v);return!b||!b.closest||!b.closest(".card-wrapper, .resize-handle, .ddc-chip, .shield")},_locToCell_(S,v){let b=this._gridCanvas;if(!b)return{col:-1,row:-1};let A=b.getBoundingClientRect(),{sx:E,sy:R}=this._getContainerScale_(),D=(S-A.left)/(E||1),M=(v-A.top)/(R||1),F=this._gridCellSize||10,N=Math.min(this._gridCols-1,Math.max(0,Math.floor(D/F))),$=Math.min(this._gridRows-1,Math.max(0,Math.floor(M/F)));return{col:N,row:$}},_onGridPointerDown(S){var A,E;if(!this._emptySpaceAt_(S.clientX,S.clientY))return;let{col:v,row:b}=this._locToCell_(S.clientX,S.clientY);this._gridDown=!0,this._gridStartCol=v,this._gridStartRow=b,this._gridCurrCol=v,this._gridCurrRow=b,this._markGridDirty(),(E=(A=S.currentTarget).setPointerCapture)==null||E.call(A,S.pointerId)},_onGridPointerMove(S){let{col:v,row:b}=this._locToCell_(S.clientX,S.clientY);if((v!==this._gridHoverCol||b!==this._gridHoverRow)&&(this._gridHoverCol=v,this._gridHoverRow=b,this._markGridDirty()),!this._gridDown)return;let{col:A,row:E}=this._locToCell_(S.clientX,S.clientY);(A!==this._gridCurrCol||E!==this._gridCurrRow)&&(this._gridCurrCol=A,this._gridCurrRow=E,this._markGridDirty())},async _onGridPointerUp(S){if(!this._gridDown)return;this._gridDown=!1;let v=Math.min(this._gridStartCol,this._gridCurrCol),b=Math.max(this._gridStartCol,this._gridCurrCol),A=Math.min(this._gridStartRow,this._gridCurrRow),E=Math.max(this._gridStartRow,this._gridCurrRow);if((b-v+1)*(E-A+1)<2){this._markGridDirty();return}let D=this._gridCellSize||10,M=v*D,F=A*D,N=(b-v+1)*D,$=(E-A+1)*D;this._markGridDirty(),this._promptNewCardForRect_({x:M,y:F,w:N,h:$})},_onGridPointerCancel(){this._gridDown=!1,this._markGridDirty()},_installGridObservers_(){try{this.__gridRO&&this.__gridRO.disconnect(),this.__gridRO=new ResizeObserver(()=>this._requestGridButtonsUpdateSoon()),this.cardContainer&&this.__gridRO.observe(this.cardContainer)}catch{}clearInterval(this.__gridPollT),this.__gridPrevEditMode=void 0,this.__gridPollT=setInterval(()=>{let S=!!this.editMode;S!==this.__gridPrevEditMode&&(this.__gridPrevEditMode=S,this._updateGridButtonsVisibility())},300)},_uninstallGridObservers_(){var S,v;try{(v=(S=this.__gridRO)==null?void 0:S.disconnect)==null||v.call(S)}catch{}this.__gridRO=null,clearInterval(this.__gridPollT),this.__gridPollT=null},_gridRectToCardRect_({x:S,y:v,w:b,h:A}){let E=this.cardContainer,R=this._gridCanvas;if(!E||!R)return{x:S,y:v,w:b,h:A};let D=E.scrollLeft||0,M=E.scrollTop||0,F=S+D,N=v+M;return{x:F,y:N,w:b,h:A}},_getContainerScale_(){let S=this.cardContainer;if(!S)return{sx:1,sy:1};let v=getComputedStyle(S).transform;if(!v||v==="none")return{sx:1,sy:1};let b=v.match(/matrix\(([^)]+)\)/);if(b){let[E,,,R]=b[1].split(",").map(D=>parseFloat(D.trim()));return{sx:isFinite(E)&&E?E:1,sy:isFinite(R)&&R?R:1}}let A=v.match(/matrix3d\(([^)]+)\)/);if(A){let E=A[1].split(",").map(R=>parseFloat(R.trim()));return{sx:isFinite(E[0])&&E[0]?E[0]:1,sy:isFinite(E[5])&&E[5]?E[5]:1}}return{sx:1,sy:1}},_canvasRectToContainerRect_({x:S,y:v,w:b,h:A}){let E=this.cardContainer,R=this._gridCanvas;if(!E||!R)return{x:S,y:v,w:b,h:A};let D=getComputedStyle(E),M=parseFloat(D.borderLeftWidth)||0,F=parseFloat(D.borderTopWidth)||0,{sx:N,sy:$}=this._getContainerScale_(),Y=R.getBoundingClientRect(),X=E.getBoundingClientRect(),le=Y.left+S,re=Y.top+v,ee=le-X.left,ue=re-X.top;ee-=M,ue-=F;let se=N?1/N:1,ge=$?1/$:1,ce=ee*se,H=ue*ge,V=b*se,J=A*ge;return{x:ce,y:H,w:V,h:J}},async _promptNewCardForRect_({x:S,y:v,w:b,h:A}){var E,R,D,M,F;try{let N=this._gridCellSize||Number((M=(D=(E=this._config)==null?void 0:E.grid)!=null?D:(R=this._options)==null?void 0:R.grid)!=null?M:10),$=se=>Math.round(se/N)*N,Y=$(S),X=$(v),le=Math.max(N,$(b)),re=Math.max(N,$(A)),ee;try{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&typeof this._canvasRectToContainerRect_=="function"?ee=this._canvasRectToContainerRect_({x:Y,y:X,w:le,h:re}):typeof this._gridRectToCardRect_=="function"?ee=this._gridRectToCardRect_({x:Y,y:X,w:le,h:re}):ee={x:Y,y:X,w:le,h:re}}catch{ee={x:Y,y:X,w:le,h:re}}let ue={x:Math.round(ee.x),y:Math.round(ee.y),w:Math.round(ee.w),h:Math.round(ee.h)};try{let se=this.cardContainer;if(se){let ge=Array.from(se.querySelectorAll(".card-wrapper:not(.ddc-placeholder)")),ce=this._normalizeTabId(this.activeTab||this.defaultTab),H=(J,ne)=>!(ne.x>=J.x+J.w||ne.x+ne.w<=J.x||ne.y>=J.y+J.h||ne.y+ne.h<=J.y),V=0;for(let J of ge){if((J.dataset.tabId?this._normalizeTabId(J.dataset.tabId):ce)!==ce)continue;let U=getComputedStyle(J);if(U.display==="none"||U.visibility==="hidden")continue;let xe=parseFloat(J.getAttribute("data-x"))||0,Ne=parseFloat(J.getAttribute("data-y"))||0,Ue=parseFloat(J.style.width)||J.getBoundingClientRect().width,rt=parseFloat(J.style.height)||J.getBoundingClientRect().height;if(H(ue,{x:xe,y:Ne,w:Ue,h:rt})&&(V++,V>=2))break}if(V>=2){this.__pendingAddRect=null;try{(F=this._toast)==null||F.call(this,"Area already contains multiple cards.")}catch{}return}}}catch(se){console.warn("[ddc] selection-area card count check failed",se)}this.__pendingAddRect=ue,await this._openSmartPicker("add",null,null)}catch(N){console.warn("[ddc] _promptNewCardForRect_ failed",N)}}}),!Ti.prototype.__addPickedPatched){let S=Ti.prototype._addPickedCardToLayout;Ti.prototype._addPickedCardToLayout=async function(v){var b,A,E,R,D,M,F,N,$;if(this&&this.__pendingAddRect){let{x:Y,y:X,w:le,h:re}=this.__pendingAddRect;this.__pendingAddRect=null;try{(b=this._hideEmptyPlaceholder)==null||b.call(this)}catch{}let ee=await this._createCard(v),ue=this._makeWrapper(ee),ge=String(this.containerSizeMode||this.container_size_mode||((A=this._config)==null?void 0:A.container_size_mode)||"dynamic").toLowerCase()==="auto",ce=ge?-11:11,H=ge?-11:11,V=Math.round(Y)-ce,J=Math.round(X)-H;this._setCardPosition(ue,V,J),ue.style.width=`${Math.round(le)}px`,ue.style.height=`${Math.round(re)}px`;{let ne=this._highestZ()+1;ue.style.zIndex=String(Math.max(ne,6))}ue.dataset.tabId=this._normalizeTabId(this.activeTab||this.defaultTab),this.cardContainer.appendChild(ue);try{(E=this._rebuildOnce)==null||E.call(this,ue.firstElementChild)}catch{}try{(R=this._initCardInteract)==null||R.call(this,ue)}catch{}try{(D=this._resizeContainer)==null||D.call(this)}catch{}try{(M=this._queueSave)==null||M.call(this,"add")}catch{}try{(F=this._toast)==null||F.call(this,"Card added to selection.")}catch{}try{(N=this._syncEmptyStateUI)==null||N.call(this)}catch{}try{($=this._applyVisibility_)==null||$.call(this)}catch{}requestAnimationFrame(()=>{var ne,U,xe,Ne;try{String(this.containerSizeMode||this.container_size_mode||((ne=this._config)==null?void 0:ne.container_size_mode)||"dynamic").toLowerCase()==="auto"?(U=this._applyAutoFillNoScale)==null||U.call(this):this.autoResizeCards&&((xe=this._applyAutoScale)==null||xe.call(this)),(Ne=this._requestGridButtonsUpdateSoon)==null||Ne.call(this)}catch{}});return}return await S.call(this,v)},Ti.prototype.__addPickedPatched=!0}let i="ddc-html-card",w="ddc-html-card-editor",e="ddc-line-card",t="ddc-line-card-editor",r=Object.getPrototypeOf(async function(){}).constructor,a={"custom:ddc-html-card":i,"custom:ddc-line-card":e};class _ extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config=null,this._hass=null,this._shellReady=!1}static getStubConfig(){return{type:"custom:ddc-line-card",title:"",entity:"",active_states:"on,home,open,playing,charging,active,>0",direction:"horizontal",arrows:"end",flow_direction:"auto",line_style:"solid",thickness:10,animate_mode:"active",animation_speed:1.8,active_color:"var(--primary-color, #ff9800)",inactive_color:"rgba(148, 163, 184, 0.42)",glow:!0,rounded:!0}}static async getConfigElement(){return document.createElement(t)}async getConfigElement(){return document.createElement(t)}setConfig(v){this._config={..._.getStubConfig(),...v||{}},this._renderCard_()}set hass(v){this._hass=v,this._renderCard_()}get hass(){return this._hass}connectedCallback(){this._config&&this._renderCard_()}getCardSize(){return 1}_ensureShell_(){this._shellReady||!this.shadowRoot||(this.shadowRoot.innerHTML=`
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
        </ha-card>`,this._shellEl=this.shadowRoot.querySelector(".shell"),this._titleEl=this.shadowRoot.querySelector(".line-title"),this._canvasEl=this.shadowRoot.querySelector(".canvas"),this._shellReady=!0)}_resolveDirection_(){var A;let v=String(((A=this._config)==null?void 0:A.direction)||"horizontal").toLowerCase();if(v!=="auto")return v;let b=this.getBoundingClientRect();return b.width>=b.height?"horizontal":"vertical"}_buildPath_(v){switch(v){case"vertical":return{path:"M 50 10 L 50 90",start:[50,10],end:[50,90]};case"diagonal-up":return{path:"M 10 90 L 90 10",start:[10,90],end:[90,10]};case"diagonal-down":return{path:"M 10 10 L 90 90",start:[10,10],end:[90,90]};case"elbow-right-down":return{path:"M 10 12 L 68 12 L 68 90 L 90 90",start:[10,12],end:[90,90]};case"elbow-right-up":return{path:"M 10 90 L 68 90 L 68 10 L 90 10",start:[10,90],end:[90,10]};case"elbow-left-down":return{path:"M 90 10 L 32 10 L 32 90 L 10 90",start:[90,10],end:[10,90]};case"elbow-left-up":return{path:"M 90 90 L 32 90 L 32 10 L 10 10",start:[90,90],end:[10,10]};case"horizontal":default:return{path:"M 10 50 L 90 50",start:[10,50],end:[90,50]}}}_getLineStyle_(v,b,A){let E=String(v||"solid").toLowerCase(),R=A||E==="dotted"?"round":"square",D=A?"round":"miter",M="";return E==="dashed"?M=`${Math.max(8,b*1.65)} ${Math.max(6,b*1.05)}`:E==="dotted"&&(M=`0 ${Math.max(8,b*1.35)}`),{cap:R,join:D,dasharray:M}}_renderCard_(){var ye,Ve,dt;if(!this._config||(this._ensureShell_(),!this._shellEl||!this._canvasEl))return;let v=this._config||{},b=String(v.entity||"").trim(),A=b?(Ve=(ye=this._hass)==null?void 0:ye.states)==null?void 0:Ve[b]:null,E=(dt=A==null?void 0:A.state)!=null?dt:"",R=b?x(E,v.active_states):!0,D=l(v.thickness,10,2,28),M=String(v.active_color||"var(--primary-color, #ff9800)"),F=String(v.inactive_color||"rgba(148, 163, 184, 0.42)"),N=String(v.animate_mode||"active").toLowerCase(),$=N==="always"||N==="active"&&R,Y=`${l(v.animation_speed,1.8,.4,8).toFixed(2)}s`,X=this._resolveDirection_(),le=String(v.arrows||"end").toLowerCase(),re=String(v.flow_direction||"auto").toLowerCase(),ee=Number(E),ue=re==="auto"?Number.isFinite(ee)&&ee<0?"reverse":"forward":re==="reverse"?"reverse":"forward",se=v.rounded!==!1,ge=le==="start"||le==="both",ce=le==="end"||le==="both",H=R?M:F,{path:V,start:J,end:ne}=this._buildPath_(X),{cap:U,join:xe,dasharray:Ne}=this._getLineStyle_(v.line_style,D,se),Ue=`${Math.max(18,D*2.4)} ${Math.max(10,D*1.35)}`,rt=String(v.title||"").trim(),fe=ge?"url(#ddc-line-arrow-start)":"none",me=ce?"url(#ddc-line-arrow-end)":"none";this._shellEl.style.setProperty("--ddc-line-active",M),this._shellEl.style.setProperty("--ddc-line-inactive",F),this._shellEl.style.setProperty("--ddc-line-color",H),this._shellEl.style.setProperty("--ddc-line-thickness",`${D}`),this._shellEl.style.setProperty("--ddc-line-speed",Y),this._shellEl.classList.toggle("is-active",R),this._shellEl.classList.toggle("is-idle",!R),this._shellEl.classList.toggle("is-animating",$),this._shellEl.classList.toggle("is-glow",v.glow!==!1),this._shellEl.classList.toggle("show-start-dot",!ge),this._shellEl.classList.toggle("show-end-dot",!ce),this._titleEl.hidden=!rt,this._titleEl.textContent=rt,this._canvasEl.innerHTML=`
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" role="presentation" aria-hidden="true">
          <defs>
            <marker id="ddc-line-arrow-end" markerWidth="12" markerHeight="12" refX="10.4" refY="6" orient="auto" markerUnits="strokeWidth">
              <path d="M 0 0 L 12 6 L 0 12 z" fill="${u(H)}"></path>
            </marker>
            <marker id="ddc-line-arrow-start" markerWidth="12" markerHeight="12" refX="1.6" refY="6" orient="auto-start-reverse" markerUnits="strokeWidth">
              <path d="M 12 0 L 0 6 L 12 12 z" fill="${u(H)}"></path>
            </marker>
          </defs>
          <path
            class="track"
            d="${V}"
            stroke-linecap="${U}"
            stroke-linejoin="${xe}"
            ${Ne?`stroke-dasharray="${Ne}"`:""}
          ></path>
          <path
            class="line"
            d="${V}"
            marker-start="${fe}"
            marker-end="${me}"
            stroke-linecap="${U}"
            stroke-linejoin="${xe}"
            ${Ne?`stroke-dasharray="${Ne}"`:""}
          ></path>
          <path
            class="flow ${ue==="reverse"?"reverse":"forward"}"
            d="${V}"
            marker-start="${ge&&ue==="reverse"?fe:"none"}"
            marker-end="${ce&&ue!=="reverse"?me:"none"}"
            stroke-dasharray="${Ue}"
            stroke-linecap="${U}"
            stroke-linejoin="${xe}"
          ></path>
          <circle class="endpoint start" cx="${J[0]}" cy="${J[1]}" r="${Math.max(2.8,Math.min(7.5,D*.52))}"></circle>
          <circle class="endpoint end" cx="${ne[0]}" cy="${ne[1]}" r="${Math.max(2.8,Math.min(7.5,D*.52))}"></circle>
        </svg>`}}class P extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config=_.getStubConfig(),this._emitTimer=null,this._configSig=""}setConfig(v){let b={..._.getStubConfig(),...v||{}},A=JSON.stringify(b);A!==this._configSig&&(this._configSig=A,this._config=b,this._renderEditor_())}set hass(v){this._hass=v,this.shadowRoot.childElementCount||this._renderEditor_()}_queueEmit_(){clearTimeout(this._emitTimer),this._emitTimer=setTimeout(()=>{this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:{...this._config}}}))},120)}_bindText_(v,b){let A=this.shadowRoot.querySelector(v);A&&A.addEventListener("input",()=>{this._config[b]=A.value,this._queueEmit_()})}_bindSelect_(v,b){let A=this.shadowRoot.querySelector(v);A&&A.addEventListener("change",()=>{this._config[b]=A.value,this._queueEmit_()})}_bindNumber_(v,b){let A=this.shadowRoot.querySelector(v);if(!A)return;let E=()=>{let R=A.value===""?"":Number(A.value);this._config[b]=Number.isFinite(R)?R:this._config[b],this._queueEmit_()};A.addEventListener("change",E),A.addEventListener("blur",E)}_bindCheckbox_(v,b){let A=this.shadowRoot.querySelector(v);A&&A.addEventListener("change",()=>{this._config[b]=!!A.checked,this._queueEmit_()})}_renderEditor_(){var A,E,R;let v=this._config||_.getStubConfig(),b=Object.keys(((A=this._hass)==null?void 0:A.states)||{}).sort((D,M)=>D.localeCompare(M)).map(D=>`<option value="${u(D)}"></option>`).join("");this.shadowRoot.innerHTML=`
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

          <datalist id="ddc-line-entities">${b}</datalist>

          <div class="grid">
            <label class="field">
              <span>Title</span>
              <input id="title" type="text" value="${u(v.title||"")}" placeholder="Optional label">
            </label>

            <label class="field">
              <span>Entity</span>
              <input id="entity" type="text" list="ddc-line-entities" value="${u(v.entity||"")}" placeholder="sensor.energy_flow">
              <span class="hint">Used to decide active state and auto flow direction.</span>
            </label>

            <label class="field full">
              <span>Active states</span>
              <input id="active_states" type="text" value="${u(v.active_states||"")}" placeholder="on,home,open,>0">
              <span class="hint">Comma-separated. Supports exact states and numeric rules like <code>&gt;0</code>, <code>&lt;=10</code>.</span>
            </label>

            <label class="field">
              <span>Direction</span>
              <select id="direction">
                ${this._option_("horizontal","Horizontal",v.direction)}
                ${this._option_("vertical","Vertical",v.direction)}
                ${this._option_("diagonal-down","Diagonal down",v.direction)}
                ${this._option_("diagonal-up","Diagonal up",v.direction)}
                ${this._option_("elbow-right-down","Elbow right down",v.direction)}
                ${this._option_("elbow-right-up","Elbow right up",v.direction)}
                ${this._option_("elbow-left-down","Elbow left down",v.direction)}
                ${this._option_("elbow-left-up","Elbow left up",v.direction)}
                ${this._option_("auto","Auto (width/height)",v.direction)}
              </select>
            </label>

            <label class="field">
              <span>Arrows</span>
              <select id="arrows">
                ${this._option_("none","No arrows",v.arrows)}
                ${this._option_("start","Arrow at start",v.arrows)}
                ${this._option_("end","Arrow at end",v.arrows)}
                ${this._option_("both","Arrow at both ends",v.arrows)}
              </select>
            </label>

            <label class="field">
              <span>Flow direction</span>
              <select id="flow_direction">
                ${this._option_("auto","Auto from entity value",v.flow_direction)}
                ${this._option_("forward","Forward",v.flow_direction)}
                ${this._option_("reverse","Reverse",v.flow_direction)}
              </select>
            </label>

            <label class="field">
              <span>Line style</span>
              <select id="line_style">
                ${this._option_("solid","Solid",v.line_style)}
                ${this._option_("dashed","Dashed",v.line_style)}
                ${this._option_("dotted","Dotted",v.line_style)}
              </select>
            </label>

            <label class="field">
              <span>Animate</span>
              <select id="animate_mode">
                ${this._option_("active","Only when active",v.animate_mode)}
                ${this._option_("always","Always",v.animate_mode)}
                ${this._option_("never","Never",v.animate_mode)}
              </select>
            </label>

            <label class="field">
              <span>Thickness</span>
              <input id="thickness" type="number" min="2" max="28" step="1" value="${u((E=v.thickness)!=null?E:10)}">
            </label>

            <label class="field">
              <span>Animation speed (s)</span>
              <input id="animation_speed" type="number" min="0.4" max="8" step="0.1" value="${u((R=v.animation_speed)!=null?R:1.8)}">
            </label>

            <label class="field">
              <span>Active color</span>
              <input id="active_color" type="text" value="${u(v.active_color||"")}" placeholder="var(--primary-color)">
            </label>

            <label class="field">
              <span>Inactive color</span>
              <input id="inactive_color" type="text" value="${u(v.inactive_color||"")}" placeholder="rgba(148,163,184,.42)">
            </label>

            <div class="field full">
              <span>Toggles</span>
              <div class="toggles">
                <label class="switch">
                  <input id="glow" type="checkbox" ${v.glow!==!1?"checked":""}>
                  <span>Glow</span>
                </label>
                <label class="switch">
                  <input id="rounded" type="checkbox" ${v.rounded!==!1?"checked":""}>
                  <span>Rounded corners / caps</span>
                </label>
              </div>
            </div>
          </div>
        </div>`,this._bindText_("#title","title"),this._bindText_("#entity","entity"),this._bindText_("#active_states","active_states"),this._bindText_("#active_color","active_color"),this._bindText_("#inactive_color","inactive_color"),this._bindSelect_("#direction","direction"),this._bindSelect_("#arrows","arrows"),this._bindSelect_("#flow_direction","flow_direction"),this._bindSelect_("#line_style","line_style"),this._bindSelect_("#animate_mode","animate_mode"),this._bindNumber_("#thickness","thickness"),this._bindNumber_("#animation_speed","animation_speed"),this._bindCheckbox_("#glow","glow"),this._bindCheckbox_("#rounded","rounded")}_option_(v,b,A){return`<option value="${u(v)}" ${String(A||"")===v?"selected":""}>${h(b)}</option>`}}class O extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config=null,this._hass=null,this._styleSig="",this._jsSig="",this._scriptCleanup=null,this._scriptUpdate=null,this._scriptToken=0,this._rerunTimer=null,this._shellReady=!1,this._liveStatesProxy=null}static getStubConfig(){return{type:"custom:ddc-html-card",title:"HTML / Web card",html:"<div>Hello from Drag & Drop Card.</div>",css:"",js:"",rerun_on_hass_update:!1}}static async getConfigElement(){return document.createElement(w)}async getConfigElement(){return document.createElement(w)}setConfig(v){this._config={type:"custom:ddc-html-card",title:"",html:"",css:"",js:"",rerun_on_hass_update:!1,...v||{}},this._renderCardShell_(),this._applyTemplate_()}set hass(v){if(this._hass=v,!!this._config){if(this._dispatchRuntimeUpdate_("hass"),this._scriptUpdate){try{this._scriptUpdate(this._buildRuntimeContext_("update"))}catch(b){this._showRuntimeError_(b)}return}this._config.rerun_on_hass_update&&String(this._config.js||"").trim()&&(clearTimeout(this._rerunTimer),this._rerunTimer=setTimeout(()=>this._runUserScript_("hass-rerun"),60))}}get hass(){return this._hass}connectedCallback(){this._config&&this._renderCardShell_()}disconnectedCallback(){clearTimeout(this._rerunTimer),this._teardownUserScript_()}getCardSize(){return 4}_renderCardShell_(){var b;if(!this.shadowRoot)return;this._shellReady||(this.shadowRoot.innerHTML=`
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
          </ha-card>`,this._titleEl=this.shadowRoot.querySelector(".title"),this._runtimeEl=this.shadowRoot.querySelector(".runtime"),this._contentEl=this.shadowRoot.querySelector(".runtime-content"),this._styleEl=this.shadowRoot.querySelector(".runtime-style-anchor"),this._errorEl=this.shadowRoot.querySelector(".runtime-error"),this._shellReady=!0);let v=String(((b=this._config)==null?void 0:b.title)||"").trim();this._titleEl.textContent=v,this._titleEl.classList.toggle("show",!!v)}_applyTemplate_(){var D,M,F,N;if(this._renderCardShell_(),!this._contentEl)return;let v=String(((D=this._config)==null?void 0:D.html)||""),b=String(((M=this._config)==null?void 0:M.css)||""),A=String(((F=this._config)==null?void 0:F.js)||""),E=JSON.stringify({title:((N=this._config)==null?void 0:N.title)||"",html:v,css:b}),R=E!==this._styleSig;R&&(this._styleSig=E,this._styleEl.textContent=b,this._contentEl.innerHTML=v.trim()?v:'<div class="empty"><strong>HTML / Web card</strong><span>Add your own HTML, CSS and JavaScript in the visual editor to start building this card.</span></div>'),A!==this._jsSig||R?(this._jsSig=A,this._runUserScript_("config")):this._dispatchRuntimeUpdate_("template")}_buildRuntimeContext_(v="update"){let b=this._hass,A=this._getLiveStatesProxy_(),E=this._contentEl,R=this,D=[],M={query(F,N=E){var $;return(($=N==null?void 0:N.querySelector)==null?void 0:$.call(N,F))||null},queryAll(F,N=E){var $;return Array.from((($=N==null?void 0:N.querySelectorAll)==null?void 0:$.call(N,F))||[])},entity(F){var N,$;return(($=(N=R._hass)==null?void 0:N.states)==null?void 0:$[F])||null},state(F){var N,$,Y;return(Y=($=(N=R._hass)==null?void 0:N.states)==null?void 0:$[F])==null?void 0:Y.state},attr(F,N){var $,Y,X,le;return(le=(X=(Y=($=R._hass)==null?void 0:$.states)==null?void 0:Y[F])==null?void 0:X.attributes)==null?void 0:le[N]},callService(F,N,$={},Y){var X,le;return(le=(X=R._hass)==null?void 0:X.callService)==null?void 0:le.call(X,F,N,$,Y)},fire(F,N={}){R.dispatchEvent(new CustomEvent(F,{detail:N,bubbles:!0,composed:!0}))},listen(F,N,$,Y){if(!(F!=null&&F.addEventListener))return()=>{};F.addEventListener(N,$,Y);let X=()=>F.removeEventListener(N,$,Y);return D.push(X),X},requestRerun(){R._runUserScript_("manual")},formatState(F){var Y,X,le;let N=(X=(Y=R._hass)==null?void 0:Y.states)==null?void 0:X[F];return N?`${((le=N.attributes)==null?void 0:le.friendly_name)||F}: ${N.state}`:""}};return{hass:b,states:A,config:this._config,root:E,host:R,helpers:M,reason:v,listeners:D}}_getLiveStatesProxy_(){if(this._liveStatesProxy)return this._liveStatesProxy;let v=this;return this._liveStatesProxy=new Proxy({},{get(b,A){var R;return A===Symbol.toStringTag?"Object":(((R=v._hass)==null?void 0:R.states)||{})[A]},has(b,A){var E;return A in(((E=v._hass)==null?void 0:E.states)||{})},ownKeys(){var b;return Reflect.ownKeys(((b=v._hass)==null?void 0:b.states)||{})},getOwnPropertyDescriptor(b,A){var R;let E=((R=v._hass)==null?void 0:R.states)||{};if(A in E)return{value:E[A],writable:!1,enumerable:!0,configurable:!0}}}),this._liveStatesProxy}_teardownUserScript_(){var v;try{(v=this._scriptCleanup)==null||v.call(this)}catch{}this._scriptCleanup=null,this._scriptUpdate=null}async _runUserScript_(v="config"){var R;clearTimeout(this._rerunTimer),this._teardownUserScript_(),this._showRuntimeError_("");let b=String(((R=this._config)==null?void 0:R.js)||"").trim();if(!b||!this._contentEl){this._dispatchRuntimeUpdate_(v);return}let A=++this._scriptToken,E=this._buildRuntimeContext_(v);try{let M=await new r("hass","states","config","root","host","helpers","reason",`${b}`)(E.hass,E.states,E.config,E.root,E.host,E.helpers,E.reason);if(A!==this._scriptToken)return;if(Array.isArray(E.listeners)&&E.listeners.length){let F=()=>{E.listeners.forEach(N=>{try{N==null||N()}catch{}})};if(typeof M=="function"){let N=M;this._scriptCleanup=()=>{F(),N()}}else M&&typeof M.destroy=="function"?this._scriptCleanup=()=>{F(),M.destroy()}:this._scriptCleanup=F}else typeof M=="function"?this._scriptCleanup=M:M&&typeof M.destroy=="function"&&(this._scriptCleanup=M.destroy.bind(M));if(M&&typeof M.update=="function"){this._scriptUpdate=M.update.bind(M);try{this._scriptUpdate(this._buildRuntimeContext_("after-init"))}catch(F){this._showRuntimeError_(F)}}else this._dispatchRuntimeUpdate_("after-init")}catch(D){A===this._scriptToken&&this._showRuntimeError_(D)}}_dispatchRuntimeUpdate_(v="update"){if(this._contentEl)try{this._contentEl.dispatchEvent(new CustomEvent("ddc-hass-update",{detail:this._buildRuntimeContext_(v),bubbles:!1,composed:!1}))}catch{}}_showRuntimeError_(v){if(!this._errorEl)return;let b=v?String((v==null?void 0:v.stack)||(v==null?void 0:v.message)||v):"";this._errorEl.textContent=b,this._errorEl.classList.toggle("show",!!b)}}class C extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config={type:"custom:ddc-html-card",title:"",html:"",css:"",js:"",rerun_on_hass_update:!1},this._emitTimer=null,this._configSig=""}setConfig(v){let b={type:"custom:ddc-html-card",title:"",html:"",css:"",js:"",rerun_on_hass_update:!1,...v||{}},A=JSON.stringify(b);A!==this._configSig&&(this._configSig=A,this._config=b,this._renderEditor_())}set hass(v){this._hass=v}_queueEmit_(){clearTimeout(this._emitTimer),this._emitTimer=setTimeout(()=>{this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:{...this._config}}}))},120)}_bindField_(v,b){let A=this.shadowRoot.querySelector(v);A&&A.addEventListener("input",()=>{this._config[b]=A.value,this._queueEmit_()})}_renderEditor_(){let v=this._config||{};this.shadowRoot.innerHTML=`
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
                <input id="title" type="text" placeholder="Optional title shown above the custom content" value="${this._escapeHtmlAttr_(v.title||"")}">
              </label>
              <label class="switch">
                <input id="rerun" type="checkbox" ${v.rerun_on_hass_update?"checked":""}>
                <span>Re-run JS on state updates</span>
              </label>
            </div>

            <label class="field">
              <span>HTML</span>
              <span class="hint">Rendered inside the card body.</span>
              <textarea id="html" spellcheck="false">${this._escapeTextarea_(v.html||"")}</textarea>
            </label>

            <label class="field">
              <span>CSS</span>
              <span class="hint">Scoped to this card.</span>
              <textarea id="css" spellcheck="false">${this._escapeTextarea_(v.css||"")}</textarea>
            </label>

            <label class="field">
              <span>JavaScript</span>
              <span class="hint">Runs inside the card. Use <code>helpers.callService(...)</code> for HA actions.</span>
              <textarea id="js" spellcheck="false">${this._escapeTextarea_(v.js||"")}</textarea>
            </label>
          </div>
        </div>`,this._bindField_("#title","title"),this._bindField_("#html","html"),this._bindField_("#css","css"),this._bindField_("#js","js");let b=this.shadowRoot.querySelector("#rerun");b==null||b.addEventListener("change",()=>{this._config.rerun_on_hass_update=!!b.checked,this._queueEmit_()})}_escapeTextarea_(v){return String(v).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}_escapeHtmlAttr_(v){return String(v).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}}customElements.get(e)||customElements.define(e,_),customElements.get(t)||customElements.define(t,P),customElements.get(i)||customElements.define(i,O),customElements.get(w)||customElements.define(w,C),customElements.define("drag-and-drop-card",Ti);try{Array.isArray(window.customCards)||(window.customCards=[]),window.customCards.some(v=>v&&typeof v.type=="string"&&v.type.toLowerCase()==="custom:drag-and-drop-card")||window.customCards.push({type:"drag-and-drop-card",name:"Drag & Drop Card",description:"Flexible grid layout card with drag\u2011and\u2011drop editing.",preview:!1,icon:"mdi:cursor-move"})}catch(S){console.warn("[drag-and-drop-card] Failed to register card in customCards",S)}}(()=>{let i=new WeakSet,w=s=>{try{if(!(s instanceof Element))return!1;let c=s.localName||"";return c?!!(c==="ha-card"||c.endsWith("-card")):!1}catch{return!1}},e=s=>{try{if(!s||i.has(s))return;i.add(s),s.dispatchEvent(new Event("ll-rebuild",{bubbles:!0,composed:!0}))}catch{}},t=s=>{var c,l;try{if(!s)return;s instanceof Element&&w(s)&&e(s);let g=(l=(c=(s instanceof ShadowRoot,s)).querySelectorAll)==null?void 0:l.call(c,"*");if(!g)return;for(let h of g){w(h)&&e(h);let u=h.shadowRoot;if(u)try{t(u)}catch{}}}catch{}},r=s=>{try{if(!s||s.__ddcCardModIntegrated)return;s.__ddcCardModIntegrated=!0;let c=s.shadowRoot||s;t(c);let l=new MutationObserver(g=>{for(let h of g)if(!(!h.addedNodes||!h.addedNodes.length))for(let u of h.addedNodes)(u instanceof Element||u instanceof ShadowRoot)&&t(u)});l.observe(c,{childList:!0,subtree:!0}),s.__ddcCardModIntegratedObserver=l,setTimeout(()=>{try{t(c)}catch{}},250),setTimeout(()=>{try{t(c)}catch{}},1e3)}catch{}},a=()=>{try{document.querySelectorAll("drag-and-drop-card").forEach(r)}catch{}};if(window.customElements&&window.customElements.whenDefined)window.customElements.whenDefined("drag-and-drop-card").then(()=>{a();let s=window.customElements.get("drag-and-drop-card");if(s&&s.prototype){let l=s.prototype.connectedCallback;s.prototype.connectedCallback=function(){try{l&&l.call(this)}finally{r(this)}}}new MutationObserver(()=>a()).observe(document.documentElement,{childList:!0,subtree:!0})});else{let s=setInterval(a,1e3);setTimeout(()=>clearInterval(s),1e4)}})();(function(){let i="drag-and-drop-card",w=customElements.get(i);if(!w){console.warn("[ddc:augment] Could not find custom element",i);return}function e(){var _,P;try{let O=0,C=this;for(;C&&O++<20;){let b=(_=C.getRootNode)==null?void 0:_.call(C),A=b==null?void 0:b.host;if((A==null?void 0:A.tagName)==="HUI-ROOT")return A.lovelace;C=A||C.parentElement}let S=new Set,v=[document];for(;v.length;){let b=v.shift();if(!(!b||S.has(b))){if(S.add(b),((P=b.host)==null?void 0:P.tagName)==="HUI-ROOT")return b.host.lovelace;if(b.tagName==="HUI-ROOT")return b.lovelace;if(b.shadowRoot&&v.push(b.shadowRoot),b.children)for(let A of b.children)v.push(A)}}}catch{}}function t(_){let P=[],O=(S,v,b)=>{(b==null?void 0:b.type)==="custom:drag-and-drop-card"&&P.push({view:S,path:[...v],card:b})},C=(S,v,b)=>{if(S){if(Array.isArray(S)){S.forEach((A,E)=>C(A,v,b.concat(E)));return}if(typeof S=="object"){"type"in S&&O(v,b,S);for(let[A,E]of Object.entries(S))A==="views"&&Array.isArray(E)?E.forEach((R,D)=>C(R,D,["views",D])):(Array.isArray(E)||E&&typeof E=="object")&&C(E,v,b.concat(A))}}};return C(_,-1,[]),P}function r(_,P,O){let C=new Date().toISOString().replace(/[:.]/g,"-"),S=P.map(b=>{let A=_;for(let E of b.path)A=A[E];return{view:b.view,path:b.path,storage_key:A&&A.storage_key||null,before:A,patch:O}}),v={kind:"ddc-import-backup",created_at:C,count:S.length,items:S};try{let b=`ddc.backup.${C}`;localStorage.setItem(b,JSON.stringify(v));let A=Object.keys(localStorage).filter(E=>E.startsWith("ddc.backup.")).sort().reverse();for(let E of A.slice(10))localStorage.removeItem(E)}catch{}return{name:`ddc_backup_${C}.json`,data:v}}function a(_,P){try{let O=new Blob([JSON.stringify(P,null,2)],{type:"application/json"}),C=URL.createObjectURL(O),S=document.createElement("a");S.href=C,S.download=_,document.body.appendChild(S),S.click(),S.remove(),setTimeout(()=>URL.revokeObjectURL(C),1500)}catch(O){console.warn("[ddc:backup] download failed",O)}}function s(_){if(_)try{let P="ddc.recent.keys",O=JSON.parse(localStorage.getItem(P)||"[]");O.includes(_)||O.unshift(_),localStorage.setItem(P,JSON.stringify(O.slice(0,20)))}catch{}}function c(){try{return JSON.parse(localStorage.getItem("ddc.recent.keys")||"[]")}catch{return[]}}function l(){var P,O;let _=new Set;try{let C=Object.keys(localStorage).filter(S=>S.startsWith("ddc.backup.")).sort().reverse();for(let S of C)try{let v=JSON.parse(localStorage.getItem(S)||"null");if(v&&v.items)for(let b of v.items){let A=((P=b==null?void 0:b.before)==null?void 0:P.storage_key)||((O=b==null?void 0:b.patch)==null?void 0:O.storage_key);A&&_.add(A)}}catch{}}catch{}return Array.from(_)}async function g(_,{forceTargetKey:P=null,onlyThisCard:O=!1,prevKey:C,noDownload:S}={}){var X,le,re,ee,ue;let v=((X=this._getLovelace)==null?void 0:X.call(this))||e.call(this);if(!v)return console.debug("[ddc:import] persist: no lovelace root"),!1;if(typeof v.saveConfig!="function")return console.debug("[ddc:import] persist: dashboard not in Storage mode"),!1;let b=se=>typeof se=="string"?se.trim():null,A=b(P)||b((le=this==null?void 0:this._config)==null?void 0:le.storage_key)||b(this==null?void 0:this.storageKey)||b(C);if(!A)return console.warn("[ddc:import] persist: missing target storage_key on this card; aborting"),!1;let E=JSON.parse(JSON.stringify(v.config)),R=(this._scanDdcCards||t)(E);console.debug("[ddc:import] persist: found DDC cards",R.map(se=>({view:se.view,path:se.path.join("."),storage_key:se.card&&(se.card.storage_key||se.card.storageKey)||null})));let D=R.filter(se=>{var ce,H,V,J,ne,U,xe,Ne,Ue;return((Ue=(U=(V=b((ce=se.card)==null?void 0:ce.storage_key))!=null?V:b((H=se.card)==null?void 0:H.storageKey))!=null?U:b((ne=(J=se.card)==null?void 0:J.options)==null?void 0:ne.storage_key))!=null?Ue:b((Ne=(xe=se.card)==null?void 0:xe.options)==null?void 0:Ne.storageKey))===A});if(D.length!==1)return console.warn("[ddc:import] persist: expected exactly one target with key, got",D.length,{myKey:A}),!1;let M={type:"custom:drag-and-drop-card",..._||{}};"storage_key"in M&&delete M.storage_key,"storageKey"in M&&delete M.storageKey,M!=null&&M.options&&("storage_key"in M.options&&delete M.options.storage_key,"storageKey"in M.options&&delete M.options.storageKey);let F=Array.isArray(M.cards)?M.cards:null;delete M.cards;try{let se=r==null?void 0:r(v.config,D,M);se&&(console.debug("[ddc:import] backup created",{file:se.name,items:(re=se.data)==null?void 0:re.count}),!S&&typeof a=="function"&&a(se.name,se.data))}catch(se){console.debug("[ddc:import] backup skipped/error:",(se==null?void 0:se.message)||se)}let N=D[0],$=E;for(let se of N.path)$=$[se];let Y=(ue=(ee=b($==null?void 0:$.storage_key))!=null?ee:b($==null?void 0:$.storageKey))!=null?ue:null;return Object.assign($,M),Y?$.storage_key=Y:$.storage_key=A,"storageKey"in $&&delete $.storageKey,console.debug("[ddc:import] persist \u2192 saving",{patched:1,into_key:$.storage_key,ignored_file_key:b(_==null?void 0:_.storage_key)||b(_==null?void 0:_.storageKey)||null}),await v.saveConfig(E),{yamlSaved:!0,cardsForStorage:F}}async function h(){var O;let _=C=>{if(!C)return[];if(Array.isArray(C))return C;if(Array.isArray(C==null?void 0:C.keys))return C.keys;if(Array.isArray(C==null?void 0:C.dashboards))return C.dashboards;if(Array.isArray(C==null?void 0:C.entries))return C.entries.map(S=>S.key||S.id||S.name).filter(Boolean);if(Array.isArray(C==null?void 0:C.items))return C.items.map(S=>S.key||S.id||S.name).filter(Boolean);if(typeof C=="object"){for(let S of Object.values(C))if(Array.isArray(S)&&S.every(v=>typeof v=="string"))return S}return[]};try{if((O=this==null?void 0:this.hass)!=null&&O.callApi){let C=await this.hass.callApi("get","dragdrop_storage"),S=_(C);if(S.length)return S}}catch(C){console.debug("[ddc:switcher] hass.callApi dragdrop_storage failed",C)}let P=["/api/dragdrop_storage","/api/dragdrop_storage/keys","/api/dragdrop_storage/list","/api/dragdrop_storage?all=1"];for(let C of P)try{let v=await(await fetch(C,{cache:"no-store"})).json(),b=_(v);if(b.length)return b}catch{}return[]}async function u(_){let P=v=>{if(!v)return null;if(v.options||v.cards)return v;if(typeof v.design=="object")return v.design;if(typeof v.payload=="object")return v.payload;try{if(typeof v=="string")return JSON.parse(v)}catch{}return null},O=async(v,b,A)=>{var E;try{if((E=this==null?void 0:this.hass)!=null&&E.callApi){let R=await this.hass.callApi(v,b,A),D=P(R);if(D)return D}}catch{}return null},C=async v=>{try{let b=await fetch(v,{cache:"no-store"}),A=b.headers.get("content-type")||"";if(A.includes("application/json")||A.includes("text/plain")){let E=await b.json().catch(()=>null)||await b.text().catch(()=>null),R=P(E);if(R)return R}}catch{}return null},S=encodeURIComponent(_);return await(O("get",`dragdrop_storage/${S}`)||C(`/api/dragdrop_storage/${S}`)||C(`/api/dragdrop_storage?key=${S}`)||O("post","dragdrop_storage/get",{key:_})||null)}async function p(_,{source:P="switcher",newKey:O=null}={}){var v,b,A,E,R,D,M,F,N,$,Y,X,le,re,ee;if(!_||typeof _!="object")throw new Error("Invalid design payload");let C=this.storageKey||((v=this._config)==null?void 0:v.storage_key)||null;try{(b=this._dbgInit)==null||b.call(this),(A=this._dbgPush)==null||A.call(this,"import","Begin import (programmatic)",{source:P,newKey:O})}catch{}if(_.options){let{storage_key:ue,...se}=_.options;(E=this._applyImportedOptions)==null||E.call(this,se,!0)}else typeof _.grid=="number"&&((R=this._applyImportedOptions)==null||R.call(this,{grid:_.grid},!0));let S=O||((D=_==null?void 0:_.options)==null?void 0:D.storage_key)||C;if(S){this.storageKey=S,this._config={...this._config||{},storage_key:S};try{(M=this._syncEditorsStorageKey)==null||M.call(this)}catch{}}try{let ue=(F=_.options)!=null?F:typeof _.grid=="number"?{grid:_.grid}:{};await((N=this._persistOptionsToYaml)==null?void 0:N.call(this,{...ue,storage_key:S},{prevKey:C,noDownload:P==="switcher"}))}catch(ue){console.warn("[ddc:apply] persist failed",ue)}try{this.responsiveViewportProfiles=this._normalizeResponsiveViewportProfiles_((($=_.options)==null?void 0:$.responsive_viewports)||this.responsiveViewportProfiles),this._responsiveLayouts=this._normalizeResponsiveLayouts_(_.cards||[],_.responsive_layouts||null),await((Y=this._syncResponsiveProfileForViewport_)==null?void 0:Y.call(this,{force:!0})),(X=this._resizeContainer)==null||X.call(this),(le=this._markDirty)==null||le.call(this,"import"),(re=this._toast)==null||re.call(this,P==="switcher"?`Loaded layout "${S}"`:"Design imported")}catch(ue){console.error("[ddc:apply] rebuild failed",ue),(ee=this._toast)==null||ee.call(this,"Import failed during rebuild.")}}function m(){var _,P,O,C;try{let S=this.shadowRoot||this.renderRoot||this,v=S.querySelector(".ddc-switcher-inline");if(!v)return;let b=(_=v.closest)==null?void 0:_.call(v,".sec-layouts"),A=((P=this._getLovelace)==null?void 0:P.call(this))||e.call(this),E=!1;try{let R=(O=S.getRootNode&&S.getRootNode())==null?void 0:O.host;E=!!(this.editMode||A&&(A.editMode===!0||R&&R.editMode===!0))}catch{}v.style.display=E?"inline-flex":"none",b&&(b.style.display=E?"":"none"),(C=this._refreshToolbarOpenHeight_)==null||C.call(this)}catch{}}function x(){var _;try{if(this._ddcSwitcherInstalled)return;let O=(this.shadowRoot||this.renderRoot||this).querySelector(".toolbar");if(!O)return;let C=O.querySelector(".sec-layouts .layout-host");if(!C){let M=document.createElement("section");M.className="ddc-sec sec-layouts",M.setAttribute("aria-label","Layouts"),M.style.display="none",M.innerHTML=`
          <header class="ddc-sec-head">
            <span class="ddc-sec-dot" aria-hidden="true"></span>
            <span class="ddc-sec-title">Layouts</span>
          </header>
          <div class="ddc-row center">
            <div class="layout-host"></div>
          </div>
        `,O.appendChild(M),C=M.querySelector(".layout-host")}let S=document.createElement("div");S.className="ddc-switcher-inline";let v=document.createElement("span");v.className="label",v.textContent="Layout:";let b=document.createElement("select");b.title="Select stored layout (storage_key)",b.id="ddcKeySelect";let A=document.createElement("button");A.className="btn secondary",A.type="button",A.innerHTML='<ha-icon icon="mdi:refresh"></ha-icon><span style="margin-left:6px">Refresh</span>';let E=document.createElement("button");E.className="btn danger",E.type="button",E.innerHTML='<ha-icon icon="mdi:trash-can-outline"></ha-icon><span style="margin-left:6px">Delete</span>',E.title="Delete selected layout";let R=document.createElement("button");R.className="btn info",R.type="button",R.innerHTML='<ha-icon icon="mdi:undo"></ha-icon><span style="margin-left:6px">Restore</span>',R.title="Restore last deleted layout",S.appendChild(v),S.appendChild(b),S.appendChild(A),S.appendChild(E),S.appendChild(R),C.appendChild(S),this._ddcSwitcherInstalled=!0,(_=this._refreshToolbarOpenHeight_)==null||_.call(this);let D=async()=>{var ge;let M=this.storageKey||this._config&&this._config.storage_key||"",F=await h.call(this),N=l(),$=c(),Y=ce=>Array.from(new Set(ce.filter(Boolean))),X=[];try{X=JSON.parse(localStorage.getItem("ddc.deleted.keys")||"[]")}catch{}let le=[...this._ddcDeletedKeys||[],...X],re=Y(F).filter(ce=>!le.includes(ce)),ee=Y(N).filter(ce=>!le.includes(ce)),ue=Y($).filter(ce=>!le.includes(ce));if(b.innerHTML="",M&&!le.includes(M)&&!re.includes(M)&&!ee.includes(M)&&!ue.includes(M)){let ce=document.createElement("option");ce.value=M,ce.textContent=`${M} (current)`,ce.selected=!0,b.appendChild(ce)}let se=(ce,H)=>{if(!H.length)return;let V=document.createElement("optgroup");V.label=ce,H.forEach(J=>{let ne=document.createElement("option");ne.value=J,ne.textContent=`${J}`,J===M&&(ne.selected=!0),V.appendChild(ne)}),b.appendChild(V)};if(se("Server",re),se("Backups",ee),se("Recent",ue),!b.children.length){let ce=document.createElement("option");ce.value="",ce.textContent="\u2014 none \u2014",ce.selected=!0,b.appendChild(ce)}m.call(this),(ge=this._refreshToolbarOpenHeight_)==null||ge.call(this);try{let ce=b.value||"";E.disabled=!ce,R.disabled=!(this._ddcDeletedLayouts&&this._ddcDeletedLayouts.length)}catch{}};D(),A.addEventListener("click",D),E.addEventListener("click",async()=>{var $,Y,X,le,re;let M=b.value||"";if(!M){($=this._toast)==null||$.call(this,"No layout selected.");return}try{if(typeof window!="undefined"&&window.confirm&&!window.confirm(`Delete layout "${M}"?`))return}catch{}let F=null;try{F=await u.call(this,M)}catch{}F&&(this._ddcDeletedLayouts||(this._ddcDeletedLayouts=[]),this._ddcDeletedLayouts.unshift({key:M,design:F}),this._ddcDeletedLayouts=this._ddcDeletedLayouts.slice(0,5));try{this._ddcDeletedKeys||(this._ddcDeletedKeys=[]),this._ddcDeletedKeys.includes(M)||this._ddcDeletedKeys.push(M)}catch{}try{let ee=JSON.parse(localStorage.getItem("ddc.deleted.keys")||"[]");ee.includes(M)||(ee.push(M),localStorage.setItem("ddc.deleted.keys",JSON.stringify(ee)))}catch{}let N=!1;try{(Y=this==null?void 0:this.hass)!=null&&Y.callApi&&(await this.hass.callApi("delete",`dragdrop_storage/${encodeURIComponent(M)}`),N=!0)}catch{N=!1}if(!N)try{(X=this==null?void 0:this.hass)!=null&&X.callApi&&(await this.hass.callApi("delete",`drag_and_drop_card_backend/${encodeURIComponent(M)}`),N=!0)}catch{N=!1}if(!N)try{let ee=await fetch(`/api/drag_and_drop_card_backend/${encodeURIComponent(M)}`,{method:"DELETE"});ee&&ee.ok&&(N=!0)}catch{}try{localStorage.removeItem(`ddc_local_${M}`)}catch{}N?(le=this._toast)==null||le.call(this,`Deleted layout "${M}"`):(re=this._toast)==null||re.call(this,`Failed to delete layout "${M}"`),await D()}),R.addEventListener("click",async()=>{var Y,X,le,re;if(!this._ddcDeletedLayouts||this._ddcDeletedLayouts.length===0){(Y=this._toast)==null||Y.call(this,"Nothing to restore.");return}let M=this._ddcDeletedLayouts.shift(),F=M.key,N=M.design,$=!1;try{(X=this==null?void 0:this.hass)!=null&&X.callApi&&(await this.hass.callApi("post",`dragdrop_storage/${encodeURIComponent(F)}`,N),$=!0)}catch{}if(!$)try{let ee=await fetch(`/api/dragdrop_storage/${encodeURIComponent(F)}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(N)});ee&&ee.ok&&($=!0)}catch{}try{localStorage.setItem(`ddc_local_${F}`,JSON.stringify(N))}catch{}$?(le=this._toast)==null||le.call(this,`Restored layout "${F}"`):(re=this._toast)==null||re.call(this,`Failed to restore layout "${F}"`);try{this._ddcDeletedKeys&&(this._ddcDeletedKeys=this._ddcDeletedKeys.filter(ee=>ee!==F))}catch{}try{let ee=JSON.parse(localStorage.getItem("ddc.deleted.keys")||"[]"),ue=ee.indexOf(F);ue>=0&&(ee.splice(ue,1),localStorage.setItem("ddc.deleted.keys",JSON.stringify(ee)))}catch{}await D()}),b.addEventListener("change",async M=>{var N,$,Y,X,le,re,ee,ue;let F=String(M.target.value||"");if(F&&!this._ddcLoadingFromKey){this._ddcLoadingFromKey=!0;try{let se=await u.call(this,F);if(!se){(N=this._toast)==null||N.call(this,`No layout found for "${F}"`);return}await p.call(this,se,{source:"switcher",newKey:F}),($=this._resizeContainer)==null||$.call(this),(Y=this._toast)==null||Y.call(this,`Loaded layout "${F}"`);let ge=String(((X=this._config)==null?void 0:X.storage_key)||this.storageKey||""),ce=!1;try{let H=ge?{forceTargetKey:ge,noDownload:!0}:{noDownload:!0};ce=await this._persistOptionsToYaml({storage_key:F},H)}catch(H){console.warn("[ddc:switcher] failed to persist storage_key to YAML",H),(le=this._toast)==null||le.call(this,"Failed to persist selected layout. Keeping current.");return}if(this.storageKey=F,this._config&&(this._config.storage_key=F),!ce){console.warn("[ddc:switcher] persist returned false (likely YAML mode). Skipping reload.");return}try{this._saveTimer&&clearTimeout(this._saveTimer),await this._saveLayout(!0)}catch(H){console.warn("[ddc:switcher] saveLayout failed",H),(re=this._markDirty)==null||re.call(this,"switcher"),(ee=this._toast)==null||ee.call(this,"Layout loaded \u2014 click Apply to save.");return}window.location.reload(),window.location.reload()}catch(se){console.warn("[ddc:switcher] load/apply failed",se),(ue=this._toast)==null||ue.call(this,"Failed to load layout.")}finally{this._ddcLoadingFromKey=!1}}}),this._ddcVisTimer&&clearInterval(this._ddcVisTimer),this._ddcVisTimer=setInterval(()=>m.call(this),800),m.call(this)}catch(P){console.warn("[ddc:switcher] inline install failed",P)}}w.prototype._getLovelace||(w.prototype._getLovelace=e),w.prototype._scanDdcCards||(w.prototype._scanDdcCards=t),w.prototype._persistOptionsToYaml=g,w.prototype._applyDesignObject||(w.prototype._applyDesignObject=p);try{let _=Object.getOwnPropertyDescriptor(w.prototype,"hass");if(_&&(_.set||_.get)){let P=_.set;Object.defineProperty(w.prototype,"hass",{configurable:!0,enumerable:!0,set(O){P&&P.call(this,O);try{x.call(this)}catch{}},get:_.get||function(){return this._hass}})}else if(typeof w.prototype.setHass=="function"){let P=w.prototype.setHass;w.prototype.setHass=function(O){P&&P.call(this,O);try{x.call(this)}catch{}}}else{let P=w.prototype.updated||w.prototype.firstUpdated;w.prototype.updated=function(...O){P&&P.apply(this,O);try{x.call(this)}catch{}}}}catch(_){console.warn("[ddc:switcher] wrap hass setter failed",_)}})();
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
