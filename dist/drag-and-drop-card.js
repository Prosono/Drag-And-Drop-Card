var La=Object.create;var Li=Object.defineProperty;var za=Object.getOwnPropertyDescriptor;var Ma=Object.getOwnPropertyNames;var Ia=Object.getPrototypeOf,Da=Object.prototype.hasOwnProperty;var Ra=(e,u,t)=>u in e?Li(e,u,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[u]=t;var Fa=(e,u)=>()=>(u||e((u={exports:{}}).exports,u),u.exports);var Ba=(e,u,t,a)=>{if(u&&typeof u=="object"||typeof u=="function")for(let o of Ma(u))!Da.call(e,o)&&o!==t&&Li(e,o,{get:()=>u[o],enumerable:!(a=za(u,o))||a.enumerable});return e};var Na=(e,u,t)=>(t=e!=null?La(Ia(e)):{},Ba(u||!e||!e.__esModule?Li(t,"default",{value:e,enumerable:!0}):t,e));var kn=(e,u,t)=>Ra(e,typeof u!="symbol"?u+"":u,t);var Sn=Fa((zi,Nt)=>{(function(e,u){typeof zi=="object"&&typeof Nt!="undefined"?Nt.exports=u():typeof define=="function"&&define.amd?define(u):(e=typeof globalThis!="undefined"?globalThis:e||self).interact=u()})(zi,(function(){"use strict";function e(n,i){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);i&&(s=s.filter((function(p){return Object.getOwnPropertyDescriptor(n,p).enumerable}))),r.push.apply(r,s)}return r}function u(n){for(var i=1;i<arguments.length;i++){var r=arguments[i]!=null?arguments[i]:{};i%2?e(Object(r),!0).forEach((function(s){c(n,s,r[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach((function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))}))}return n}function t(n){return t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},t(n)}function a(n,i){if(!(n instanceof i))throw new TypeError("Cannot call a class as a function")}function o(n,i){for(var r=0;r<i.length;r++){var s=i[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(n,w(s.key),s)}}function l(n,i,r){return i&&o(n.prototype,i),r&&o(n,r),Object.defineProperty(n,"prototype",{writable:!1}),n}function c(n,i,r){return(i=w(i))in n?Object.defineProperty(n,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[i]=r,n}function d(n,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(i&&i.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),i&&v(n,i)}function f(n){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},f(n)}function v(n,i){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,s){return r.__proto__=s,r},v(n,i)}function y(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function _(n){var i=(function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch{return!1}})();return function(){var r,s=f(n);if(i){var p=f(this).constructor;r=Reflect.construct(s,arguments,p)}else r=s.apply(this,arguments);return(function(h,m){if(m&&(typeof m=="object"||typeof m=="function"))return m;if(m!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return y(h)})(this,r)}}function g(){return g=typeof Reflect!="undefined"&&Reflect.get?Reflect.get.bind():function(n,i,r){var s=(function(h,m){for(;!Object.prototype.hasOwnProperty.call(h,m)&&(h=f(h))!==null;);return h})(n,i);if(s){var p=Object.getOwnPropertyDescriptor(s,i);return p.get?p.get.call(arguments.length<3?n:r):p.value}},g.apply(this,arguments)}function w(n){var i=(function(r,s){if(typeof r!="object"||r===null)return r;var p=r[Symbol.toPrimitive];if(p!==void 0){var h=p.call(r,s||"default");if(typeof h!="object")return h;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(r)})(n,"string");return typeof i=="symbol"?i:i+""}var L=function(n){return!(!n||!n.Window)&&n instanceof n.Window},E=void 0,P=void 0;function D(n){E=n;var i=n.document.createTextNode("");i.ownerDocument!==n.document&&typeof n.wrap=="function"&&n.wrap(i)===i&&(n=n.wrap(n)),P=n}function C(n){return L(n)?n:(n.ownerDocument||n).defaultView||P.window}typeof window!="undefined"&&window&&D(window);var A=function(n){return!!n&&t(n)==="object"},O=function(n){return typeof n=="function"},b={window:function(n){return n===P||L(n)},docFrag:function(n){return A(n)&&n.nodeType===11},object:A,func:O,number:function(n){return typeof n=="number"},bool:function(n){return typeof n=="boolean"},string:function(n){return typeof n=="string"},element:function(n){if(!n||t(n)!=="object")return!1;var i=C(n)||P;return/object|function/.test(typeof Element=="undefined"?"undefined":t(Element))?n instanceof Element||n instanceof i.Element:n.nodeType===1&&typeof n.nodeName=="string"},plainObject:function(n){return A(n)&&!!n.constructor&&/function Object\b/.test(n.constructor.toString())},array:function(n){return A(n)&&n.length!==void 0&&O(n.splice)}};function M(n){var i=n.interaction;if(i.prepared.name==="drag"){var r=i.prepared.axis;r==="x"?(i.coords.cur.page.y=i.coords.start.page.y,i.coords.cur.client.y=i.coords.start.client.y,i.coords.velocity.client.y=0,i.coords.velocity.page.y=0):r==="y"&&(i.coords.cur.page.x=i.coords.start.page.x,i.coords.cur.client.x=i.coords.start.client.x,i.coords.velocity.client.x=0,i.coords.velocity.page.x=0)}}function R(n){var i=n.iEvent,r=n.interaction;if(r.prepared.name==="drag"){var s=r.prepared.axis;if(s==="x"||s==="y"){var p=s==="x"?"y":"x";i.page[p]=r.coords.start.page[p],i.client[p]=r.coords.start.client[p],i.delta[p]=0}}}var ee={id:"actions/drag",install:function(n){var i=n.actions,r=n.Interactable,s=n.defaults;r.prototype.draggable=ee.draggable,i.map.drag=ee,i.methodDict.drag="draggable",s.actions.drag=ee.defaults},listeners:{"interactions:before-action-move":M,"interactions:action-resume":M,"interactions:action-move":R,"auto-start:check":function(n){var i=n.interaction,r=n.interactable,s=n.buttons,p=r.options.drag;if(p&&p.enabled&&(!i.pointerIsDown||!/mouse|pointer/.test(i.pointerType)||(s&r.options.drag.mouseButtons)!=0))return n.action={name:"drag",axis:p.lockAxis==="start"?p.startAxis:p.lockAxis},!1}},draggable:function(n){return b.object(n)?(this.options.drag.enabled=n.enabled!==!1,this.setPerAction("drag",n),this.setOnEvents("drag",n),/^(xy|x|y|start)$/.test(n.lockAxis)&&(this.options.drag.lockAxis=n.lockAxis),/^(xy|x|y)$/.test(n.startAxis)&&(this.options.drag.startAxis=n.startAxis),this):b.bool(n)?(this.options.drag.enabled=n,this):this.options.drag},beforeMove:M,move:R,defaults:{startAxis:"xy",lockAxis:"xy"},getCursor:function(){return"move"},filterEventType:function(n){return n.search("drag")===0}},q=ee,K={init:function(n){var i=n;K.document=i.document,K.DocumentFragment=i.DocumentFragment||ae,K.SVGElement=i.SVGElement||ae,K.SVGSVGElement=i.SVGSVGElement||ae,K.SVGElementInstance=i.SVGElementInstance||ae,K.Element=i.Element||ae,K.HTMLElement=i.HTMLElement||K.Element,K.Event=i.Event,K.Touch=i.Touch||ae,K.PointerEvent=i.PointerEvent||i.MSPointerEvent},document:null,DocumentFragment:null,SVGElement:null,SVGSVGElement:null,SVGElementInstance:null,Element:null,HTMLElement:null,Event:null,Touch:null,PointerEvent:null};function ae(){}var ie=K,$={init:function(n){var i=ie.Element,r=n.navigator||{};$.supportsTouch="ontouchstart"in n||b.func(n.DocumentTouch)&&ie.document instanceof n.DocumentTouch,$.supportsPointerEvent=r.pointerEnabled!==!1&&!!ie.PointerEvent,$.isIOS=/iP(hone|od|ad)/.test(r.platform),$.isIOS7=/iP(hone|od|ad)/.test(r.platform)&&/OS 7[^\d]/.test(r.appVersion),$.isIe9=/MSIE 9/.test(r.userAgent),$.isOperaMobile=r.appName==="Opera"&&$.supportsTouch&&/Presto/.test(r.userAgent),$.prefixedMatchesSelector="matches"in i.prototype?"matches":"webkitMatchesSelector"in i.prototype?"webkitMatchesSelector":"mozMatchesSelector"in i.prototype?"mozMatchesSelector":"oMatchesSelector"in i.prototype?"oMatchesSelector":"msMatchesSelector",$.pEventTypes=$.supportsPointerEvent?ie.PointerEvent===n.MSPointerEvent?{up:"MSPointerUp",down:"MSPointerDown",over:"mouseover",out:"mouseout",move:"MSPointerMove",cancel:"MSPointerCancel"}:{up:"pointerup",down:"pointerdown",over:"pointerover",out:"pointerout",move:"pointermove",cancel:"pointercancel"}:null,$.wheelEvent=ie.document&&"onmousewheel"in ie.document?"mousewheel":"wheel"},supportsTouch:null,supportsPointerEvent:null,isIOS7:null,isIOS:null,isIe9:null,isOperaMobile:null,prefixedMatchesSelector:null,pEventTypes:null,wheelEvent:null},me=$;function _e(n,i){if(n.contains)return n.contains(i);for(;i;){if(i===n)return!0;i=i.parentNode}return!1}function Je(n,i){for(;b.element(n);){if(je(n,i))return n;n=We(n)}return null}function We(n){var i=n.parentNode;if(b.docFrag(i)){for(;(i=i.host)&&b.docFrag(i););return i}return i}function je(n,i){return P!==E&&(i=i.replace(/\/deep\//g," ")),n[me.prefixedMatchesSelector](i)}var Ke=function(n){return n.parentNode||n.host};function ke(n,i){for(var r,s=[],p=n;(r=Ke(p))&&p!==i&&r!==p.ownerDocument;)s.unshift(p),p=r;return s}function rt(n,i,r){for(;b.element(n);){if(je(n,i))return!0;if((n=We(n))===r)return je(n,i)}return!1}function Qe(n){return n.correspondingUseElement||n}function Ze(n){var i=n instanceof ie.SVGElement?n.getBoundingClientRect():n.getClientRects()[0];return i&&{left:i.left,right:i.right,top:i.top,bottom:i.bottom,width:i.width||i.right-i.left,height:i.height||i.bottom-i.top}}function at(n){var i,r=Ze(n);if(!me.isIOS7&&r){var s={x:(i=(i=C(n))||P).scrollX||i.document.documentElement.scrollLeft,y:i.scrollY||i.document.documentElement.scrollTop};r.left+=s.x,r.right+=s.x,r.top+=s.y,r.bottom+=s.y}return r}function it(n){for(var i=[];n;)i.push(n),n=We(n);return i}function ot(n){return!!b.string(n)&&(ie.document.querySelector(n),!0)}function se(n,i){for(var r in i)n[r]=i[r];return n}function ut(n,i,r){return n==="parent"?We(r):n==="self"?i.getRect(r):Je(r,n)}function nt(n,i,r,s){var p=n;return b.string(p)?p=ut(p,i,r):b.func(p)&&(p=p.apply(void 0,s)),b.element(p)&&(p=at(p)),p}function Re(n){return n&&{x:"x"in n?n.x:n.left,y:"y"in n?n.y:n.top}}function oe(n){return!n||"x"in n&&"y"in n||((n=se({},n)).x=n.left||0,n.y=n.top||0,n.width=n.width||(n.right||0)-n.x,n.height=n.height||(n.bottom||0)-n.y),n}function Le(n,i,r){n.left&&(i.left+=r.x),n.right&&(i.right+=r.x),n.top&&(i.top+=r.y),n.bottom&&(i.bottom+=r.y),i.width=i.right-i.left,i.height=i.bottom-i.top}function Oe(n,i,r){var s=r&&n.options[r];return Re(nt(s&&s.origin||n.options.origin,n,i,[n&&i]))||{x:0,y:0}}function Te(n,i){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(k){return!0},s=arguments.length>3?arguments[3]:void 0;if(s=s||{},b.string(n)&&n.search(" ")!==-1&&(n=lt(n)),b.array(n))return n.forEach((function(k){return Te(k,i,r,s)})),s;if(b.object(n)&&(i=n,n=""),b.func(i)&&r(n))s[n]=s[n]||[],s[n].push(i);else if(b.array(i))for(var p=0,h=i;p<h.length;p++){var m=h[p];Te(n,m,r,s)}else if(b.object(i))for(var x in i)Te(lt(x).map((function(k){return"".concat(n).concat(k)})),i[x],r,s);return s}function lt(n){return n.trim().split(/ +/)}var dt=function(n,i){return Math.sqrt(n*n+i*i)},Ct=["webkit","moz"];function gt(n,i){n.__set||(n.__set={});var r=function(p){if(Ct.some((function(h){return p.indexOf(h)===0})))return 1;typeof n[p]!="function"&&p!=="__set"&&Object.defineProperty(n,p,{get:function(){return p in n.__set?n.__set[p]:n.__set[p]=i[p]},set:function(h){n.__set[p]=h},configurable:!0})};for(var s in i)r(s);return n}function _t(n,i){n.page=n.page||{},n.page.x=i.page.x,n.page.y=i.page.y,n.client=n.client||{},n.client.x=i.client.x,n.client.y=i.client.y,n.timeStamp=i.timeStamp}function Ne(n){n.page.x=0,n.page.y=0,n.client.x=0,n.client.y=0}function Rt(n){return n instanceof ie.Event||n instanceof ie.Touch}function yt(n,i,r){return n=n||"page",(r=r||{}).x=i[n+"X"],r.y=i[n+"Y"],r}function st(n,i){return i=i||{x:0,y:0},me.isOperaMobile&&Rt(n)?(yt("screen",n,i),i.x+=window.scrollX,i.y+=window.scrollY):yt("page",n,i),i}function ht(n){return b.number(n.pointerId)?n.pointerId:n.identifier}function J(n,i,r){var s=i.length>1?ce(i):i[0];st(s,n.page),(function(p,h){h=h||{},me.isOperaMobile&&Rt(p)?yt("screen",p,h):yt("client",p,h)})(s,n.client),n.timeStamp=r}function fe(n){var i=[];return b.array(n)?(i[0]=n[0],i[1]=n[1]):n.type==="touchend"?n.touches.length===1?(i[0]=n.touches[0],i[1]=n.changedTouches[0]):n.touches.length===0&&(i[0]=n.changedTouches[0],i[1]=n.changedTouches[1]):(i[0]=n.touches[0],i[1]=n.touches[1]),i}function ce(n){for(var i={pageX:0,pageY:0,clientX:0,clientY:0,screenX:0,screenY:0},r=0;r<n.length;r++){var s=n[r];for(var p in i)i[p]+=s[p]}for(var h in i)i[h]/=n.length;return i}function Y(n){if(!n.length)return null;var i=fe(n),r=Math.min(i[0].pageX,i[1].pageX),s=Math.min(i[0].pageY,i[1].pageY),p=Math.max(i[0].pageX,i[1].pageX),h=Math.max(i[0].pageY,i[1].pageY);return{x:r,y:s,left:r,top:s,right:p,bottom:h,width:p-r,height:h-s}}function pe(n,i){var r=i+"X",s=i+"Y",p=fe(n),h=p[0][r]-p[1][r],m=p[0][s]-p[1][s];return dt(h,m)}function le(n,i){var r=i+"X",s=i+"Y",p=fe(n),h=p[1][r]-p[0][r],m=p[1][s]-p[0][s];return 180*Math.atan2(m,h)/Math.PI}function I(n){return b.string(n.pointerType)?n.pointerType:b.number(n.pointerType)?[void 0,void 0,"touch","pen","mouse"][n.pointerType]:/touch/.test(n.type||"")||n instanceof ie.Touch?"touch":"mouse"}function N(n){var i=b.func(n.composedPath)?n.composedPath():n.path;return[Qe(i?i[0]:n.target),Qe(n.currentTarget)]}var te=(function(){function n(i){a(this,n),this.immediatePropagationStopped=!1,this.propagationStopped=!1,this._interaction=i}return l(n,[{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}]),n})();Object.defineProperty(te.prototype,"interaction",{get:function(){return this._interaction._proxy},set:function(){}});var ne=function(n,i){for(var r=0;r<i.length;r++){var s=i[r];n.push(s)}return n},X=function(n){return ne([],n)},ye=function(n,i){for(var r=0;r<n.length;r++)if(i(n[r],r,n))return r;return-1},F=function(n,i){return n[ye(n,i)]},Q=(function(n){d(r,n);var i=_(r);function r(s,p,h){var m;a(this,r),(m=i.call(this,p._interaction)).dropzone=void 0,m.dragEvent=void 0,m.relatedTarget=void 0,m.draggable=void 0,m.propagationStopped=!1,m.immediatePropagationStopped=!1;var x=h==="dragleave"?s.prev:s.cur,k=x.element,T=x.dropzone;return m.type=h,m.target=k,m.currentTarget=k,m.dropzone=T,m.dragEvent=p,m.relatedTarget=p.target,m.draggable=p.interactable,m.timeStamp=p.timeStamp,m}return l(r,[{key:"reject",value:function(){var s=this,p=this._interaction.dropState;if(this.type==="dropactivate"||this.dropzone&&p.cur.dropzone===this.dropzone&&p.cur.element===this.target)if(p.prev.dropzone=this.dropzone,p.prev.element=this.target,p.rejected=!0,p.events.enter=null,this.stopImmediatePropagation(),this.type==="dropactivate"){var h=p.activeDrops,m=ye(h,(function(k){var T=k.dropzone,S=k.element;return T===s.dropzone&&S===s.target}));p.activeDrops.splice(m,1);var x=new r(p,this.dragEvent,"dropdeactivate");x.dropzone=this.dropzone,x.target=this.target,this.dropzone.fire(x)}else this.dropzone.fire(new r(p,this.dragEvent,"dragleave"))}},{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}]),r})(te);function Ce(n,i){for(var r=0,s=n.slice();r<s.length;r++){var p=s[r],h=p.dropzone,m=p.element;i.dropzone=h,i.target=m,h.fire(i),i.propagationStopped=i.immediatePropagationStopped=!1}}function H(n,i){for(var r=(function(h,m){for(var x=[],k=0,T=h.interactables.list;k<T.length;k++){var S=T[k];if(S.options.drop.enabled){var z=S.options.drop.accept;if(!(b.element(z)&&z!==m||b.string(z)&&!je(m,z)||b.func(z)&&!z({dropzone:S,draggableElement:m})))for(var B=0,U=S.getAllElements();B<U.length;B++){var W=U[B];W!==m&&x.push({dropzone:S,element:W,rect:S.getRect(W)})}}}return x})(n,i),s=0;s<r.length;s++){var p=r[s];p.rect=p.dropzone.getRect(p.element)}return r}function Fe(n,i,r){for(var s=n.dropState,p=n.interactable,h=n.element,m=[],x=0,k=s.activeDrops;x<k.length;x++){var T=k[x],S=T.dropzone,z=T.element,B=T.rect,U=S.dropCheck(i,r,p,h,z,B);m.push(U?z:null)}var W=(function(Z){for(var he,ue,be,ze=[],Be=0;Be<Z.length;Be++){var Ee=Z[Be],De=Z[he];if(Ee&&Be!==he)if(De){var bt=Ke(Ee),et=Ke(De);if(bt!==Ee.ownerDocument)if(et!==Ee.ownerDocument)if(bt!==et){ze=ze.length?ze:ke(De);var St=void 0;if(De instanceof ie.HTMLElement&&Ee instanceof ie.SVGElement&&!(Ee instanceof ie.SVGSVGElement)){if(Ee===et)continue;St=Ee.ownerSVGElement}else St=Ee;for(var At=ke(St,De.ownerDocument),Ot=0;At[Ot]&&At[Ot]===ze[Ot];)Ot++;var ui=[At[Ot-1],At[Ot],ze[Ot]];if(ui[0])for(var Jt=ui[0].lastChild;Jt;){if(Jt===ui[1]){he=Be,ze=At;break}if(Jt===ui[2])break;Jt=Jt.previousSibling}}else be=De,(parseInt(C(ue=Ee).getComputedStyle(ue).zIndex,10)||0)>=(parseInt(C(be).getComputedStyle(be).zIndex,10)||0)&&(he=Be);else he=Be}else he=Be}return he})(m);return s.activeDrops[W]||null}function Pe(n,i,r){var s=n.dropState,p={enter:null,leave:null,activate:null,deactivate:null,move:null,drop:null};return r.type==="dragstart"&&(p.activate=new Q(s,r,"dropactivate"),p.activate.target=null,p.activate.dropzone=null),r.type==="dragend"&&(p.deactivate=new Q(s,r,"dropdeactivate"),p.deactivate.target=null,p.deactivate.dropzone=null),s.rejected||(s.cur.element!==s.prev.element&&(s.prev.dropzone&&(p.leave=new Q(s,r,"dragleave"),r.dragLeave=p.leave.target=s.prev.element,r.prevDropzone=p.leave.dropzone=s.prev.dropzone),s.cur.dropzone&&(p.enter=new Q(s,r,"dragenter"),r.dragEnter=s.cur.element,r.dropzone=s.cur.dropzone)),r.type==="dragend"&&s.cur.dropzone&&(p.drop=new Q(s,r,"drop"),r.dropzone=s.cur.dropzone,r.relatedTarget=s.cur.element),r.type==="dragmove"&&s.cur.dropzone&&(p.move=new Q(s,r,"dropmove"),r.dropzone=s.cur.dropzone)),p}function $e(n,i){var r=n.dropState,s=r.activeDrops,p=r.cur,h=r.prev;i.leave&&h.dropzone.fire(i.leave),i.enter&&p.dropzone.fire(i.enter),i.move&&p.dropzone.fire(i.move),i.drop&&p.dropzone.fire(i.drop),i.deactivate&&Ce(s,i.deactivate),r.prev.dropzone=p.dropzone,r.prev.element=p.element}function Me(n,i){var r=n.interaction,s=n.iEvent,p=n.event;if(s.type==="dragmove"||s.type==="dragend"){var h=r.dropState;i.dynamicDrop&&(h.activeDrops=H(i,r.element));var m=s,x=Fe(r,m,p);h.rejected=h.rejected&&!!x&&x.dropzone===h.cur.dropzone&&x.element===h.cur.element,h.cur.dropzone=x&&x.dropzone,h.cur.element=x&&x.element,h.events=Pe(r,0,m)}}var Xe={id:"actions/drop",install:function(n){var i=n.actions,r=n.interactStatic,s=n.Interactable,p=n.defaults;n.usePlugin(q),s.prototype.dropzone=function(h){return(function(m,x){if(b.object(x)){if(m.options.drop.enabled=x.enabled!==!1,x.listeners){var k=Te(x.listeners),T=Object.keys(k).reduce((function(z,B){return z[/^(enter|leave)/.test(B)?"drag".concat(B):/^(activate|deactivate|move)/.test(B)?"drop".concat(B):B]=k[B],z}),{}),S=m.options.drop.listeners;S&&m.off(S),m.on(T),m.options.drop.listeners=T}return b.func(x.ondrop)&&m.on("drop",x.ondrop),b.func(x.ondropactivate)&&m.on("dropactivate",x.ondropactivate),b.func(x.ondropdeactivate)&&m.on("dropdeactivate",x.ondropdeactivate),b.func(x.ondragenter)&&m.on("dragenter",x.ondragenter),b.func(x.ondragleave)&&m.on("dragleave",x.ondragleave),b.func(x.ondropmove)&&m.on("dropmove",x.ondropmove),/^(pointer|center)$/.test(x.overlap)?m.options.drop.overlap=x.overlap:b.number(x.overlap)&&(m.options.drop.overlap=Math.max(Math.min(1,x.overlap),0)),"accept"in x&&(m.options.drop.accept=x.accept),"checker"in x&&(m.options.drop.checker=x.checker),m}return b.bool(x)?(m.options.drop.enabled=x,m):m.options.drop})(this,h)},s.prototype.dropCheck=function(h,m,x,k,T,S){return(function(z,B,U,W,Z,he,ue){var be=!1;if(!(ue=ue||z.getRect(he)))return!!z.options.drop.checker&&z.options.drop.checker(B,U,be,z,he,W,Z);var ze=z.options.drop.overlap;if(ze==="pointer"){var Be=Oe(W,Z,"drag"),Ee=st(B);Ee.x+=Be.x,Ee.y+=Be.y;var De=Ee.x>ue.left&&Ee.x<ue.right,bt=Ee.y>ue.top&&Ee.y<ue.bottom;be=De&&bt}var et=W.getRect(Z);if(et&&ze==="center"){var St=et.left+et.width/2,At=et.top+et.height/2;be=St>=ue.left&&St<=ue.right&&At>=ue.top&&At<=ue.bottom}return et&&b.number(ze)&&(be=Math.max(0,Math.min(ue.right,et.right)-Math.max(ue.left,et.left))*Math.max(0,Math.min(ue.bottom,et.bottom)-Math.max(ue.top,et.top))/(et.width*et.height)>=ze),z.options.drop.checker&&(be=z.options.drop.checker(B,U,be,z,he,W,Z)),be})(this,h,m,x,k,T,S)},r.dynamicDrop=function(h){return b.bool(h)?(n.dynamicDrop=h,r):n.dynamicDrop},se(i.phaselessTypes,{dragenter:!0,dragleave:!0,dropactivate:!0,dropdeactivate:!0,dropmove:!0,drop:!0}),i.methodDict.drop="dropzone",n.dynamicDrop=!1,p.actions.drop=Xe.defaults},listeners:{"interactions:before-action-start":function(n){var i=n.interaction;i.prepared.name==="drag"&&(i.dropState={cur:{dropzone:null,element:null},prev:{dropzone:null,element:null},rejected:null,events:null,activeDrops:[]})},"interactions:after-action-start":function(n,i){var r=n.interaction,s=(n.event,n.iEvent);if(r.prepared.name==="drag"){var p=r.dropState;p.activeDrops=[],p.events={},p.activeDrops=H(i,r.element),p.events=Pe(r,0,s),p.events.activate&&(Ce(p.activeDrops,p.events.activate),i.fire("actions/drop:start",{interaction:r,dragEvent:s}))}},"interactions:action-move":Me,"interactions:after-action-move":function(n,i){var r=n.interaction,s=n.iEvent;if(r.prepared.name==="drag"){var p=r.dropState;$e(r,p.events),i.fire("actions/drop:move",{interaction:r,dragEvent:s}),p.events={}}},"interactions:action-end":function(n,i){if(n.interaction.prepared.name==="drag"){var r=n.interaction,s=n.iEvent;Me(n,i),$e(r,r.dropState.events),i.fire("actions/drop:end",{interaction:r,dragEvent:s})}},"interactions:stop":function(n){var i=n.interaction;if(i.prepared.name==="drag"){var r=i.dropState;r&&(r.activeDrops=null,r.events=null,r.cur.dropzone=null,r.cur.element=null,r.prev.dropzone=null,r.prev.element=null,r.rejected=!1)}}},getActiveDrops:H,getDrop:Fe,getDropEvents:Pe,fireDropEvents:$e,filterEventType:function(n){return n.search("drag")===0||n.search("drop")===0},defaults:{enabled:!1,accept:null,overlap:"pointer"}},Ue=Xe;function Ve(n){var i=n.interaction,r=n.iEvent,s=n.phase;if(i.prepared.name==="gesture"){var p=i.pointers.map((function(T){return T.pointer})),h=s==="start",m=s==="end",x=i.interactable.options.deltaSource;if(r.touches=[p[0],p[1]],h)r.distance=pe(p,x),r.box=Y(p),r.scale=1,r.ds=0,r.angle=le(p,x),r.da=0,i.gesture.startDistance=r.distance,i.gesture.startAngle=r.angle;else if(m||i.pointers.length<2){var k=i.prevEvent;r.distance=k.distance,r.box=k.box,r.scale=k.scale,r.ds=0,r.angle=k.angle,r.da=0}else r.distance=pe(p,x),r.box=Y(p),r.scale=r.distance/i.gesture.startDistance,r.angle=le(p,x),r.ds=r.scale-i.gesture.scale,r.da=r.angle-i.gesture.angle;i.gesture.distance=r.distance,i.gesture.angle=r.angle,b.number(r.scale)&&r.scale!==1/0&&!isNaN(r.scale)&&(i.gesture.scale=r.scale)}}var qe={id:"actions/gesture",before:["actions/drag","actions/resize"],install:function(n){var i=n.actions,r=n.Interactable,s=n.defaults;r.prototype.gesturable=function(p){return b.object(p)?(this.options.gesture.enabled=p.enabled!==!1,this.setPerAction("gesture",p),this.setOnEvents("gesture",p),this):b.bool(p)?(this.options.gesture.enabled=p,this):this.options.gesture},i.map.gesture=qe,i.methodDict.gesture="gesturable",s.actions.gesture=qe.defaults},listeners:{"interactions:action-start":Ve,"interactions:action-move":Ve,"interactions:action-end":Ve,"interactions:new":function(n){n.interaction.gesture={angle:0,distance:0,scale:1,startAngle:0,startDistance:0}},"auto-start:check":function(n){if(!(n.interaction.pointers.length<2)){var i=n.interactable.options.gesture;if(i&&i.enabled)return n.action={name:"gesture"},!1}}},defaults:{},getCursor:function(){return""},filterEventType:function(n){return n.search("gesture")===0}},He=qe;function Ae(n,i,r,s,p,h,m){if(!i)return!1;if(i===!0){var x=b.number(h.width)?h.width:h.right-h.left,k=b.number(h.height)?h.height:h.bottom-h.top;if(m=Math.min(m,Math.abs((n==="left"||n==="right"?x:k)/2)),x<0&&(n==="left"?n="right":n==="right"&&(n="left")),k<0&&(n==="top"?n="bottom":n==="bottom"&&(n="top")),n==="left"){var T=x>=0?h.left:h.right;return r.x<T+m}if(n==="top"){var S=k>=0?h.top:h.bottom;return r.y<S+m}if(n==="right")return r.x>(x>=0?h.right:h.left)-m;if(n==="bottom")return r.y>(k>=0?h.bottom:h.top)-m}return!!b.element(s)&&(b.element(i)?i===s:rt(s,i,p))}function ge(n){var i=n.iEvent,r=n.interaction;if(r.prepared.name==="resize"&&r.resizeAxes){var s=i;r.interactable.options.resize.square?(r.resizeAxes==="y"?s.delta.x=s.delta.y:s.delta.y=s.delta.x,s.axes="xy"):(s.axes=r.resizeAxes,r.resizeAxes==="x"?s.delta.y=0:r.resizeAxes==="y"&&(s.delta.x=0))}}var Se,Ie,we={id:"actions/resize",before:["actions/drag"],install:function(n){var i=n.actions,r=n.browser,s=n.Interactable,p=n.defaults;we.cursors=(function(h){return h.isIe9?{x:"e-resize",y:"s-resize",xy:"se-resize",top:"n-resize",left:"w-resize",bottom:"s-resize",right:"e-resize",topleft:"se-resize",bottomright:"se-resize",topright:"ne-resize",bottomleft:"ne-resize"}:{x:"ew-resize",y:"ns-resize",xy:"nwse-resize",top:"ns-resize",left:"ew-resize",bottom:"ns-resize",right:"ew-resize",topleft:"nwse-resize",bottomright:"nwse-resize",topright:"nesw-resize",bottomleft:"nesw-resize"}})(r),we.defaultMargin=r.supportsTouch||r.supportsPointerEvent?20:10,s.prototype.resizable=function(h){return(function(m,x,k){return b.object(x)?(m.options.resize.enabled=x.enabled!==!1,m.setPerAction("resize",x),m.setOnEvents("resize",x),b.string(x.axis)&&/^x$|^y$|^xy$/.test(x.axis)?m.options.resize.axis=x.axis:x.axis===null&&(m.options.resize.axis=k.defaults.actions.resize.axis),b.bool(x.preserveAspectRatio)?m.options.resize.preserveAspectRatio=x.preserveAspectRatio:b.bool(x.square)&&(m.options.resize.square=x.square),m):b.bool(x)?(m.options.resize.enabled=x,m):m.options.resize})(this,h,n)},i.map.resize=we,i.methodDict.resize="resizable",p.actions.resize=we.defaults},listeners:{"interactions:new":function(n){n.interaction.resizeAxes="xy"},"interactions:action-start":function(n){(function(i){var r=i.iEvent,s=i.interaction;if(s.prepared.name==="resize"&&s.prepared.edges){var p=r,h=s.rect;s._rects={start:se({},h),corrected:se({},h),previous:se({},h),delta:{left:0,right:0,width:0,top:0,bottom:0,height:0}},p.edges=s.prepared.edges,p.rect=s._rects.corrected,p.deltaRect=s._rects.delta}})(n),ge(n)},"interactions:action-move":function(n){(function(i){var r=i.iEvent,s=i.interaction;if(s.prepared.name==="resize"&&s.prepared.edges){var p=r,h=s.interactable.options.resize.invert,m=h==="reposition"||h==="negate",x=s.rect,k=s._rects,T=k.start,S=k.corrected,z=k.delta,B=k.previous;if(se(B,S),m){if(se(S,x),h==="reposition"){if(S.top>S.bottom){var U=S.top;S.top=S.bottom,S.bottom=U}if(S.left>S.right){var W=S.left;S.left=S.right,S.right=W}}}else S.top=Math.min(x.top,T.bottom),S.bottom=Math.max(x.bottom,T.top),S.left=Math.min(x.left,T.right),S.right=Math.max(x.right,T.left);for(var Z in S.width=S.right-S.left,S.height=S.bottom-S.top,S)z[Z]=S[Z]-B[Z];p.edges=s.prepared.edges,p.rect=S,p.deltaRect=z}})(n),ge(n)},"interactions:action-end":function(n){var i=n.iEvent,r=n.interaction;if(r.prepared.name==="resize"&&r.prepared.edges){var s=i;s.edges=r.prepared.edges,s.rect=r._rects.corrected,s.deltaRect=r._rects.delta}},"auto-start:check":function(n){var i=n.interaction,r=n.interactable,s=n.element,p=n.rect,h=n.buttons;if(p){var m=se({},i.coords.cur.page),x=r.options.resize;if(x&&x.enabled&&(!i.pointerIsDown||!/mouse|pointer/.test(i.pointerType)||(h&x.mouseButtons)!=0)){if(b.object(x.edges)){var k={left:!1,right:!1,top:!1,bottom:!1};for(var T in k)k[T]=Ae(T,x.edges[T],m,i._latestPointer.eventTarget,s,p,x.margin||we.defaultMargin);k.left=k.left&&!k.right,k.top=k.top&&!k.bottom,(k.left||k.right||k.top||k.bottom)&&(n.action={name:"resize",edges:k})}else{var S=x.axis!=="y"&&m.x>p.right-we.defaultMargin,z=x.axis!=="x"&&m.y>p.bottom-we.defaultMargin;(S||z)&&(n.action={name:"resize",axes:(S?"x":"")+(z?"y":"")})}return!n.action&&void 0}}}},defaults:{square:!1,preserveAspectRatio:!1,axis:"xy",margin:NaN,edges:null,invert:"none"},cursors:null,getCursor:function(n){var i=n.edges,r=n.axis,s=n.name,p=we.cursors,h=null;if(r)h=p[s+r];else if(i){for(var m="",x=0,k=["top","bottom","left","right"];x<k.length;x++){var T=k[x];i[T]&&(m+=T)}h=p[m]}return h},filterEventType:function(n){return n.search("resize")===0},defaultMargin:null},de=we,re={id:"actions",install:function(n){n.usePlugin(He),n.usePlugin(de),n.usePlugin(q),n.usePlugin(Ue)}},G=0,V={request:function(n){return Se(n)},cancel:function(n){return Ie(n)},init:function(n){if(Se=n.requestAnimationFrame,Ie=n.cancelAnimationFrame,!Se)for(var i=["ms","moz","webkit","o"],r=0;r<i.length;r++){var s=i[r];Se=n["".concat(s,"RequestAnimationFrame")],Ie=n["".concat(s,"CancelAnimationFrame")]||n["".concat(s,"CancelRequestAnimationFrame")]}Se=Se&&Se.bind(n),Ie=Ie&&Ie.bind(n),Se||(Se=function(p){var h=Date.now(),m=Math.max(0,16-(h-G)),x=n.setTimeout((function(){p(h+m)}),m);return G=h+m,x},Ie=function(p){return clearTimeout(p)})}},j={defaults:{enabled:!1,margin:60,container:null,speed:300},now:Date.now,interaction:null,i:0,x:0,y:0,isScrolling:!1,prevTime:0,margin:0,speed:0,start:function(n){j.isScrolling=!0,V.cancel(j.i),n.autoScroll=j,j.interaction=n,j.prevTime=j.now(),j.i=V.request(j.scroll)},stop:function(){j.isScrolling=!1,j.interaction&&(j.interaction.autoScroll=null),V.cancel(j.i)},scroll:function(){var n=j.interaction,i=n.interactable,r=n.element,s=n.prepared.name,p=i.options[s].autoScroll,h=ve(p.container,i,r),m=j.now(),x=(m-j.prevTime)/1e3,k=p.speed*x;if(k>=1){var T={x:j.x*k,y:j.y*k};if(T.x||T.y){var S=Ye(h);b.window(h)?h.scrollBy(T.x,T.y):h&&(h.scrollLeft+=T.x,h.scrollTop+=T.y);var z=Ye(h),B={x:z.x-S.x,y:z.y-S.y};(B.x||B.y)&&i.fire({type:"autoscroll",target:r,interactable:i,delta:B,interaction:n,container:h})}j.prevTime=m}j.isScrolling&&(V.cancel(j.i),j.i=V.request(j.scroll))},check:function(n,i){var r;return(r=n.options[i].autoScroll)==null?void 0:r.enabled},onInteractionMove:function(n){var i=n.interaction,r=n.pointer;if(i.interacting()&&j.check(i.interactable,i.prepared.name))if(i.simulation)j.x=j.y=0;else{var s,p,h,m,x=i.interactable,k=i.element,T=i.prepared.name,S=x.options[T].autoScroll,z=ve(S.container,x,k);if(b.window(z))m=r.clientX<j.margin,s=r.clientY<j.margin,p=r.clientX>z.innerWidth-j.margin,h=r.clientY>z.innerHeight-j.margin;else{var B=Ze(z);m=r.clientX<B.left+j.margin,s=r.clientY<B.top+j.margin,p=r.clientX>B.right-j.margin,h=r.clientY>B.bottom-j.margin}j.x=p?1:m?-1:0,j.y=h?1:s?-1:0,j.isScrolling||(j.margin=S.margin,j.speed=S.speed,j.start(i))}}};function ve(n,i,r){return(b.string(n)?ut(n,i,r):n)||C(r)}function Ye(n){return b.window(n)&&(n=window.document.body),{x:n.scrollLeft,y:n.scrollTop}}var tt={id:"auto-scroll",install:function(n){var i=n.defaults,r=n.actions;n.autoScroll=j,j.now=function(){return n.now()},r.phaselessTypes.autoscroll=!0,i.perAction.autoScroll=j.defaults},listeners:{"interactions:new":function(n){n.interaction.autoScroll=null},"interactions:destroy":function(n){n.interaction.autoScroll=null,j.stop(),j.interaction&&(j.interaction=null)},"interactions:stop":j.stop,"interactions:action-move":function(n){return j.onInteractionMove(n)}}},Et=tt;function Ge(n,i){var r=!1;return function(){return r||(P.console.warn(i),r=!0),n.apply(this,arguments)}}function wt(n,i){return n.name=i.name,n.axis=i.axis,n.edges=i.edges,n}function Ft(n){return b.bool(n)?(this.options.styleCursor=n,this):n===null?(delete this.options.styleCursor,this):this.options.styleCursor}function ni(n){return b.func(n)?(this.options.actionChecker=n,this):n===null?(delete this.options.actionChecker,this):this.options.actionChecker}var Or={id:"auto-start/interactableMethods",install:function(n){var i=n.Interactable;i.prototype.getAction=function(r,s,p,h){var m=(function(x,k,T,S,z){var B=x.getRect(S),U=k.buttons||{0:1,1:4,3:8,4:16}[k.button],W={action:null,interactable:x,interaction:T,element:S,rect:B,buttons:U};return z.fire("auto-start:check",W),W.action})(this,s,p,h,n);return this.options.actionChecker?this.options.actionChecker(r,s,m,this,h,p):m},i.prototype.ignoreFrom=Ge((function(r){return this._backCompatOption("ignoreFrom",r)}),"Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."),i.prototype.allowFrom=Ge((function(r){return this._backCompatOption("allowFrom",r)}),"Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."),i.prototype.actionChecker=ni,i.prototype.styleCursor=Ft}};function Gi(n,i,r,s,p){return i.testIgnoreAllow(i.options[n.name],r,s)&&i.options[n.name].enabled&&ri(i,r,n,p)?n:null}function Pr(n,i,r,s,p,h,m){for(var x=0,k=s.length;x<k;x++){var T=s[x],S=p[x],z=T.getAction(i,r,n,S);if(z){var B=Gi(z,T,S,h,m);if(B)return{action:B,interactable:T,element:S}}}return{action:null,interactable:null,element:null}}function Xi(n,i,r,s,p){var h=[],m=[],x=s;function k(S){h.push(S),m.push(x)}for(;b.element(x);){h=[],m=[],p.interactables.forEachMatch(x,k);var T=Pr(n,i,r,h,m,s,p);if(T.action&&!T.interactable.options[T.action.name].manualStart)return T;x=We(x)}return{action:null,interactable:null,element:null}}function Ji(n,i,r){var s=i.action,p=i.interactable,h=i.element;s=s||{name:null},n.interactable=p,n.element=h,wt(n.prepared,s),n.rect=p&&s.name?p.getRect(h):null,Zi(n,r),r.fire("autoStart:prepared",{interaction:n})}function ri(n,i,r,s){var p=n.options,h=p[r.name].max,m=p[r.name].maxPerElement,x=s.autoStart.maxInteractions,k=0,T=0,S=0;if(!(h&&m&&x))return!1;for(var z=0,B=s.interactions.list;z<B.length;z++){var U=B[z],W=U.prepared.name;if(U.interacting()&&(++k>=x||U.interactable===n&&((T+=W===r.name?1:0)>=h||U.element===i&&(S++,W===r.name&&S>=m))))return!1}return x>0}function Qi(n,i){return b.number(n)?(i.autoStart.maxInteractions=n,this):i.autoStart.maxInteractions}function bi(n,i,r){var s=r.autoStart.cursorElement;s&&s!==n&&(s.style.cursor=""),n.ownerDocument.documentElement.style.cursor=i,n.style.cursor=i,r.autoStart.cursorElement=i?n:null}function Zi(n,i){var r=n.interactable,s=n.element,p=n.prepared;if(n.pointerType==="mouse"&&r&&r.options.styleCursor){var h="";if(p.name){var m=r.options[p.name].cursorChecker;h=b.func(m)?m(p,r,s,n._interacting):i.actions.map[p.name].getCursor(p)}bi(n.element,h||"",i)}else i.autoStart.cursorElement&&bi(i.autoStart.cursorElement,"",i)}var Lr={id:"auto-start/base",before:["actions"],install:function(n){var i=n.interactStatic,r=n.defaults;n.usePlugin(Or),r.base.actionChecker=null,r.base.styleCursor=!0,se(r.perAction,{manualStart:!1,max:1/0,maxPerElement:1,allowFrom:null,ignoreFrom:null,mouseButtons:1}),i.maxInteractions=function(s){return Qi(s,n)},n.autoStart={maxInteractions:1/0,withinInteractionLimit:ri,cursorElement:null}},listeners:{"interactions:down":function(n,i){var r=n.interaction,s=n.pointer,p=n.event,h=n.eventTarget;r.interacting()||Ji(r,Xi(r,s,p,h,i),i)},"interactions:move":function(n,i){(function(r,s){var p=r.interaction,h=r.pointer,m=r.event,x=r.eventTarget;p.pointerType!=="mouse"||p.pointerIsDown||p.interacting()||Ji(p,Xi(p,h,m,x,s),s)})(n,i),(function(r,s){var p=r.interaction;if(p.pointerIsDown&&!p.interacting()&&p.pointerWasMoved&&p.prepared.name){s.fire("autoStart:before-start",r);var h=p.interactable,m=p.prepared.name;m&&h&&(h.options[m].manualStart||!ri(h,p.element,p.prepared,s)?p.stop():(p.start(p.prepared,h,p.element),Zi(p,s)))}})(n,i)},"interactions:stop":function(n,i){var r=n.interaction,s=r.interactable;s&&s.options.styleCursor&&bi(r.element,"",i)}},maxInteractions:Qi,withinInteractionLimit:ri,validateAction:Gi},xi=Lr,zr={id:"auto-start/dragAxis",listeners:{"autoStart:before-start":function(n,i){var r=n.interaction,s=n.eventTarget,p=n.dx,h=n.dy;if(r.prepared.name==="drag"){var m=Math.abs(p),x=Math.abs(h),k=r.interactable.options.drag,T=k.startAxis,S=m>x?"x":m<x?"y":"xy";if(r.prepared.axis=k.lockAxis==="start"?S[0]:k.lockAxis,S!=="xy"&&T!=="xy"&&T!==S){r.prepared.name=null;for(var z=s,B=function(W){if(W!==r.interactable){var Z=r.interactable.options.drag;if(!Z.manualStart&&W.testIgnoreAllow(Z,z,s)){var he=W.getAction(r.downPointer,r.downEvent,r,z);if(he&&he.name==="drag"&&(function(ue,be){if(!be)return!1;var ze=be.options.drag.startAxis;return ue==="xy"||ze==="xy"||ze===ue})(S,W)&&xi.validateAction(he,W,z,s,i))return W}}};b.element(z);){var U=i.interactables.forEachMatch(z,B);if(U){r.prepared.name="drag",r.interactable=U,r.element=z;break}z=We(z)}}}}}};function _i(n){var i=n.prepared&&n.prepared.name;if(!i)return null;var r=n.interactable.options;return r[i].hold||r[i].delay}var Mr={id:"auto-start/hold",install:function(n){var i=n.defaults;n.usePlugin(xi),i.perAction.hold=0,i.perAction.delay=0},listeners:{"interactions:new":function(n){n.interaction.autoStartHoldTimer=null},"autoStart:prepared":function(n){var i=n.interaction,r=_i(i);r>0&&(i.autoStartHoldTimer=setTimeout((function(){i.start(i.prepared,i.interactable,i.element)}),r))},"interactions:move":function(n){var i=n.interaction,r=n.duplicate;i.autoStartHoldTimer&&i.pointerWasMoved&&!r&&(clearTimeout(i.autoStartHoldTimer),i.autoStartHoldTimer=null)},"autoStart:before-start":function(n){var i=n.interaction;_i(i)>0&&(i.prepared.name=null)}},getHoldDuration:_i},Ir=Mr,Dr={id:"auto-start",install:function(n){n.usePlugin(xi),n.usePlugin(Ir),n.usePlugin(zr)}},Rr=function(n){return/^(always|never|auto)$/.test(n)?(this.options.preventDefault=n,this):b.bool(n)?(this.options.preventDefault=n?"always":"never",this):this.options.preventDefault};function Fr(n){var i=n.interaction,r=n.event;i.interactable&&i.interactable.checkAndPreventDefault(r)}var en={id:"core/interactablePreventDefault",install:function(n){var i=n.Interactable;i.prototype.preventDefault=Rr,i.prototype.checkAndPreventDefault=function(r){return(function(s,p,h){var m=s.options.preventDefault;if(m!=="never")if(m!=="always"){if(p.events.supportsPassive&&/^touch(start|move)$/.test(h.type)){var x=C(h.target).document,k=p.getDocOptions(x);if(!k||!k.events||k.events.passive!==!1)return}/^(mouse|pointer|touch)*(down|start)/i.test(h.type)||b.element(h.target)&&je(h.target,"input,select,textarea,[contenteditable=true],[contenteditable=true] *")||h.preventDefault()}else h.preventDefault()})(this,n,r)},n.interactions.docEvents.push({type:"dragstart",listener:function(r){for(var s=0,p=n.interactions.list;s<p.length;s++){var h=p[s];if(h.element&&(h.element===r.target||_e(h.element,r.target)))return void h.interactable.checkAndPreventDefault(r)}}})},listeners:["down","move","up","cancel"].reduce((function(n,i){return n["interactions:".concat(i)]=Fr,n}),{})};function ai(n,i){if(i.phaselessTypes[n])return!0;for(var r in i.map)if(n.indexOf(r)===0&&n.substr(r.length)in i.phases)return!0;return!1}function jt(n){var i={};for(var r in n){var s=n[r];b.plainObject(s)?i[r]=jt(s):b.array(s)?i[r]=X(s):i[r]=s}return i}var wi=(function(){function n(i){a(this,n),this.states=[],this.startOffset={left:0,right:0,top:0,bottom:0},this.startDelta=void 0,this.result=void 0,this.endResult=void 0,this.startEdges=void 0,this.edges=void 0,this.interaction=void 0,this.interaction=i,this.result=oi(),this.edges={left:!1,right:!1,top:!1,bottom:!1}}return l(n,[{key:"start",value:function(i,r){var s,p,h=i.phase,m=this.interaction,x=(function(T){var S=T.interactable.options[T.prepared.name],z=S.modifiers;return z&&z.length?z:["snap","snapSize","snapEdges","restrict","restrictEdges","restrictSize"].map((function(B){var U=S[B];return U&&U.enabled&&{options:U,methods:U._methods}})).filter((function(B){return!!B}))})(m);this.prepareStates(x),this.startEdges=se({},m.edges),this.edges=se({},this.startEdges),this.startOffset=(s=m.rect,p=r,s?{left:p.x-s.left,top:p.y-s.top,right:s.right-p.x,bottom:s.bottom-p.y}:{left:0,top:0,right:0,bottom:0}),this.startDelta={x:0,y:0};var k=this.fillArg({phase:h,pageCoords:r,preEnd:!1});return this.result=oi(),this.startAll(k),this.result=this.setAll(k)}},{key:"fillArg",value:function(i){var r=this.interaction;return i.interaction=r,i.interactable=r.interactable,i.element=r.element,i.rect||(i.rect=r.rect),i.edges||(i.edges=this.startEdges),i.startOffset=this.startOffset,i}},{key:"startAll",value:function(i){for(var r=0,s=this.states;r<s.length;r++){var p=s[r];p.methods.start&&(i.state=p,p.methods.start(i))}}},{key:"setAll",value:function(i){var r=i.phase,s=i.preEnd,p=i.skipModifiers,h=i.rect,m=i.edges;i.coords=se({},i.pageCoords),i.rect=se({},h),i.edges=se({},m);for(var x=p?this.states.slice(p):this.states,k=oi(i.coords,i.rect),T=0;T<x.length;T++){var S,z=x[T],B=z.options,U=se({},i.coords),W=null;(S=z.methods)!=null&&S.set&&this.shouldDo(B,s,r)&&(i.state=z,W=z.methods.set(i),Le(i.edges,i.rect,{x:i.coords.x-U.x,y:i.coords.y-U.y})),k.eventProps.push(W)}se(this.edges,i.edges),k.delta.x=i.coords.x-i.pageCoords.x,k.delta.y=i.coords.y-i.pageCoords.y,k.rectDelta.left=i.rect.left-h.left,k.rectDelta.right=i.rect.right-h.right,k.rectDelta.top=i.rect.top-h.top,k.rectDelta.bottom=i.rect.bottom-h.bottom;var Z=this.result.coords,he=this.result.rect;if(Z&&he){var ue=k.rect.left!==he.left||k.rect.right!==he.right||k.rect.top!==he.top||k.rect.bottom!==he.bottom;k.changed=ue||Z.x!==k.coords.x||Z.y!==k.coords.y}return k}},{key:"applyToInteraction",value:function(i){var r=this.interaction,s=i.phase,p=r.coords.cur,h=r.coords.start,m=this.result,x=this.startDelta,k=m.delta;s==="start"&&se(this.startDelta,m.delta);for(var T=0,S=[[h,x],[p,k]];T<S.length;T++){var z=S[T],B=z[0],U=z[1];B.page.x+=U.x,B.page.y+=U.y,B.client.x+=U.x,B.client.y+=U.y}var W=this.result.rectDelta,Z=i.rect||r.rect;Z.left+=W.left,Z.right+=W.right,Z.top+=W.top,Z.bottom+=W.bottom,Z.width=Z.right-Z.left,Z.height=Z.bottom-Z.top}},{key:"setAndApply",value:function(i){var r=this.interaction,s=i.phase,p=i.preEnd,h=i.skipModifiers,m=this.setAll(this.fillArg({preEnd:p,phase:s,pageCoords:i.modifiedCoords||r.coords.cur.page}));if(this.result=m,!m.changed&&(!h||h<this.states.length)&&r.interacting())return!1;if(i.modifiedCoords){var x=r.coords.cur.page,k={x:i.modifiedCoords.x-x.x,y:i.modifiedCoords.y-x.y};m.coords.x+=k.x,m.coords.y+=k.y,m.delta.x+=k.x,m.delta.y+=k.y}this.applyToInteraction(i)}},{key:"beforeEnd",value:function(i){var r=i.interaction,s=i.event,p=this.states;if(p&&p.length){for(var h=!1,m=0;m<p.length;m++){var x=p[m];i.state=x;var k=x.options,T=x.methods,S=T.beforeEnd&&T.beforeEnd(i);if(S)return this.endResult=S,!1;h=h||!h&&this.shouldDo(k,!0,i.phase,!0)}h&&r.move({event:s,preEnd:!0})}}},{key:"stop",value:function(i){var r=i.interaction;if(this.states&&this.states.length){var s=se({states:this.states,interactable:r.interactable,element:r.element,rect:null},i);this.fillArg(s);for(var p=0,h=this.states;p<h.length;p++){var m=h[p];s.state=m,m.methods.stop&&m.methods.stop(s)}this.states=null,this.endResult=null}}},{key:"prepareStates",value:function(i){this.states=[];for(var r=0;r<i.length;r++){var s=i[r],p=s.options,h=s.methods,m=s.name;this.states.push({options:p,methods:h,index:r,name:m})}return this.states}},{key:"restoreInteractionCoords",value:function(i){var r=i.interaction,s=r.coords,p=r.rect,h=r.modification;if(h.result){for(var m=h.startDelta,x=h.result,k=x.delta,T=x.rectDelta,S=0,z=[[s.start,m],[s.cur,k]];S<z.length;S++){var B=z[S],U=B[0],W=B[1];U.page.x-=W.x,U.page.y-=W.y,U.client.x-=W.x,U.client.y-=W.y}p.left-=T.left,p.right-=T.right,p.top-=T.top,p.bottom-=T.bottom}}},{key:"shouldDo",value:function(i,r,s,p){return!(!i||i.enabled===!1||p&&!i.endOnly||i.endOnly&&!r||s==="start"&&!i.setStart)}},{key:"copyFrom",value:function(i){this.startOffset=i.startOffset,this.startDelta=i.startDelta,this.startEdges=i.startEdges,this.edges=i.edges,this.states=i.states.map((function(r){return jt(r)})),this.result=oi(se({},i.result.coords),se({},i.result.rect))}},{key:"destroy",value:function(){for(var i in this)this[i]=null}}]),n})();function oi(n,i){return{rect:i,coords:n,delta:{x:0,y:0},rectDelta:{left:0,right:0,top:0,bottom:0},eventProps:[],changed:!0}}function Lt(n,i){var r=n.defaults,s={start:n.start,set:n.set,beforeEnd:n.beforeEnd,stop:n.stop},p=function(h){var m=h||{};for(var x in m.enabled=m.enabled!==!1,r)x in m||(m[x]=r[x]);var k={options:m,methods:s,name:i,enable:function(){return m.enabled=!0,k},disable:function(){return m.enabled=!1,k}};return k};return i&&typeof i=="string"&&(p._defaults=r,p._methods=s),p}function Ut(n){var i=n.iEvent,r=n.interaction.modification.result;r&&(i.modifiers=r.eventProps)}var Br={id:"modifiers/base",before:["actions"],install:function(n){n.defaults.perAction.modifiers=[]},listeners:{"interactions:new":function(n){var i=n.interaction;i.modification=new wi(i)},"interactions:before-action-start":function(n){var i=n.interaction,r=n.interaction.modification;r.start(n,i.coords.start.page),i.edges=r.edges,r.applyToInteraction(n)},"interactions:before-action-move":function(n){var i=n.interaction,r=i.modification,s=r.setAndApply(n);return i.edges=r.edges,s},"interactions:before-action-end":function(n){var i=n.interaction,r=i.modification,s=r.beforeEnd(n);return i.edges=r.startEdges,s},"interactions:action-start":Ut,"interactions:action-move":Ut,"interactions:action-end":Ut,"interactions:after-action-start":function(n){return n.interaction.modification.restoreInteractionCoords(n)},"interactions:after-action-move":function(n){return n.interaction.modification.restoreInteractionCoords(n)},"interactions:stop":function(n){return n.interaction.modification.stop(n)}}},tn=Br,nn={base:{preventDefault:"auto",deltaSource:"page"},perAction:{enabled:!1,origin:{x:0,y:0}},actions:{}},ki=(function(n){d(r,n);var i=_(r);function r(s,p,h,m,x,k,T){var S;a(this,r),(S=i.call(this,s)).relatedTarget=null,S.screenX=void 0,S.screenY=void 0,S.button=void 0,S.buttons=void 0,S.ctrlKey=void 0,S.shiftKey=void 0,S.altKey=void 0,S.metaKey=void 0,S.page=void 0,S.client=void 0,S.delta=void 0,S.rect=void 0,S.x0=void 0,S.y0=void 0,S.t0=void 0,S.dt=void 0,S.duration=void 0,S.clientX0=void 0,S.clientY0=void 0,S.velocity=void 0,S.speed=void 0,S.swipe=void 0,S.axes=void 0,S.preEnd=void 0,x=x||s.element;var z=s.interactable,B=(z&&z.options||nn).deltaSource,U=Oe(z,x,h),W=m==="start",Z=m==="end",he=W?y(S):s.prevEvent,ue=W?s.coords.start:Z?{page:he.page,client:he.client,timeStamp:s.coords.cur.timeStamp}:s.coords.cur;return S.page=se({},ue.page),S.client=se({},ue.client),S.rect=se({},s.rect),S.timeStamp=ue.timeStamp,Z||(S.page.x-=U.x,S.page.y-=U.y,S.client.x-=U.x,S.client.y-=U.y),S.ctrlKey=p.ctrlKey,S.altKey=p.altKey,S.shiftKey=p.shiftKey,S.metaKey=p.metaKey,S.button=p.button,S.buttons=p.buttons,S.target=x,S.currentTarget=x,S.preEnd=k,S.type=T||h+(m||""),S.interactable=z,S.t0=W?s.pointers[s.pointers.length-1].downTime:he.t0,S.x0=s.coords.start.page.x-U.x,S.y0=s.coords.start.page.y-U.y,S.clientX0=s.coords.start.client.x-U.x,S.clientY0=s.coords.start.client.y-U.y,S.delta=W||Z?{x:0,y:0}:{x:S[B].x-he[B].x,y:S[B].y-he[B].y},S.dt=s.coords.delta.timeStamp,S.duration=S.timeStamp-S.t0,S.velocity=se({},s.coords.velocity[B]),S.speed=dt(S.velocity.x,S.velocity.y),S.swipe=Z||m==="inertiastart"?S.getSwipe():null,S}return l(r,[{key:"getSwipe",value:function(){var s=this._interaction;if(s.prevEvent.speed<600||this.timeStamp-s.prevEvent.timeStamp>150)return null;var p=180*Math.atan2(s.prevEvent.velocityY,s.prevEvent.velocityX)/Math.PI;p<0&&(p+=360);var h=112.5<=p&&p<247.5,m=202.5<=p&&p<337.5;return{up:m,down:!m&&22.5<=p&&p<157.5,left:h,right:!h&&(292.5<=p||p<67.5),angle:p,speed:s.prevEvent.speed,velocity:{x:s.prevEvent.velocityX,y:s.prevEvent.velocityY}}}},{key:"preventDefault",value:function(){}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}}]),r})(te);Object.defineProperties(ki.prototype,{pageX:{get:function(){return this.page.x},set:function(n){this.page.x=n}},pageY:{get:function(){return this.page.y},set:function(n){this.page.y=n}},clientX:{get:function(){return this.client.x},set:function(n){this.client.x=n}},clientY:{get:function(){return this.client.y},set:function(n){this.client.y=n}},dx:{get:function(){return this.delta.x},set:function(n){this.delta.x=n}},dy:{get:function(){return this.delta.y},set:function(n){this.delta.y=n}},velocityX:{get:function(){return this.velocity.x},set:function(n){this.velocity.x=n}},velocityY:{get:function(){return this.velocity.y},set:function(n){this.velocity.y=n}}});var Nr=l((function n(i,r,s,p,h){a(this,n),this.id=void 0,this.pointer=void 0,this.event=void 0,this.downTime=void 0,this.downTarget=void 0,this.id=i,this.pointer=r,this.event=s,this.downTime=p,this.downTarget=h})),qr=(function(n){return n.interactable="",n.element="",n.prepared="",n.pointerIsDown="",n.pointerWasMoved="",n._proxy="",n})({}),rn=(function(n){return n.start="",n.move="",n.end="",n.stop="",n.interacting="",n})({}),Hr=0,jr=(function(){function n(i){var r=this,s=i.pointerType,p=i.scopeFire;a(this,n),this.interactable=null,this.element=null,this.rect=null,this._rects=void 0,this.edges=null,this._scopeFire=void 0,this.prepared={name:null,axis:null,edges:null},this.pointerType=void 0,this.pointers=[],this.downEvent=null,this.downPointer={},this._latestPointer={pointer:null,event:null,eventTarget:null},this.prevEvent=null,this.pointerIsDown=!1,this.pointerWasMoved=!1,this._interacting=!1,this._ending=!1,this._stopped=!0,this._proxy=void 0,this.simulation=null,this.doMove=Ge((function(S){this.move(S)}),"The interaction.doMove() method has been renamed to interaction.move()"),this.coords={start:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},prev:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},cur:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},delta:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},velocity:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0}},this._id=Hr++,this._scopeFire=p,this.pointerType=s;var h=this;this._proxy={};var m=function(S){Object.defineProperty(r._proxy,S,{get:function(){return h[S]}})};for(var x in qr)m(x);var k=function(S){Object.defineProperty(r._proxy,S,{value:function(){return h[S].apply(h,arguments)}})};for(var T in rn)k(T);this._scopeFire("interactions:new",{interaction:this})}return l(n,[{key:"pointerMoveTolerance",get:function(){return 1}},{key:"pointerDown",value:function(i,r,s){var p=this.updatePointer(i,r,s,!0),h=this.pointers[p];this._scopeFire("interactions:down",{pointer:i,event:r,eventTarget:s,pointerIndex:p,pointerInfo:h,type:"down",interaction:this})}},{key:"start",value:function(i,r,s){return!(this.interacting()||!this.pointerIsDown||this.pointers.length<(i.name==="gesture"?2:1)||!r.options[i.name].enabled)&&(wt(this.prepared,i),this.interactable=r,this.element=s,this.rect=r.getRect(s),this.edges=this.prepared.edges?se({},this.prepared.edges):{left:!0,right:!0,top:!0,bottom:!0},this._stopped=!1,this._interacting=this._doPhase({interaction:this,event:this.downEvent,phase:"start"})&&!this._stopped,this._interacting)}},{key:"pointerMove",value:function(i,r,s){this.simulation||this.modification&&this.modification.endResult||this.updatePointer(i,r,s,!1);var p,h,m=this.coords.cur.page.x===this.coords.prev.page.x&&this.coords.cur.page.y===this.coords.prev.page.y&&this.coords.cur.client.x===this.coords.prev.client.x&&this.coords.cur.client.y===this.coords.prev.client.y;this.pointerIsDown&&!this.pointerWasMoved&&(p=this.coords.cur.client.x-this.coords.start.client.x,h=this.coords.cur.client.y-this.coords.start.client.y,this.pointerWasMoved=dt(p,h)>this.pointerMoveTolerance);var x,k,T,S=this.getPointerIndex(i),z={pointer:i,pointerIndex:S,pointerInfo:this.pointers[S],event:r,type:"move",eventTarget:s,dx:p,dy:h,duplicate:m,interaction:this};m||(x=this.coords.velocity,k=this.coords.delta,T=Math.max(k.timeStamp/1e3,.001),x.page.x=k.page.x/T,x.page.y=k.page.y/T,x.client.x=k.client.x/T,x.client.y=k.client.y/T,x.timeStamp=T),this._scopeFire("interactions:move",z),m||this.simulation||(this.interacting()&&(z.type=null,this.move(z)),this.pointerWasMoved&&_t(this.coords.prev,this.coords.cur))}},{key:"move",value:function(i){i&&i.event||Ne(this.coords.delta),(i=se({pointer:this._latestPointer.pointer,event:this._latestPointer.event,eventTarget:this._latestPointer.eventTarget,interaction:this},i||{})).phase="move",this._doPhase(i)}},{key:"pointerUp",value:function(i,r,s,p){var h=this.getPointerIndex(i);h===-1&&(h=this.updatePointer(i,r,s,!1));var m=/cancel$/i.test(r.type)?"cancel":"up";this._scopeFire("interactions:".concat(m),{pointer:i,pointerIndex:h,pointerInfo:this.pointers[h],event:r,eventTarget:s,type:m,curEventTarget:p,interaction:this}),this.simulation||this.end(r),this.removePointer(i,r)}},{key:"documentBlur",value:function(i){this.end(i),this._scopeFire("interactions:blur",{event:i,type:"blur",interaction:this})}},{key:"end",value:function(i){var r;this._ending=!0,i=i||this._latestPointer.event,this.interacting()&&(r=this._doPhase({event:i,interaction:this,phase:"end"})),this._ending=!1,r===!0&&this.stop()}},{key:"currentAction",value:function(){return this._interacting?this.prepared.name:null}},{key:"interacting",value:function(){return this._interacting}},{key:"stop",value:function(){this._scopeFire("interactions:stop",{interaction:this}),this.interactable=this.element=null,this._interacting=!1,this._stopped=!0,this.prepared.name=this.prevEvent=null}},{key:"getPointerIndex",value:function(i){var r=ht(i);return this.pointerType==="mouse"||this.pointerType==="pen"?this.pointers.length-1:ye(this.pointers,(function(s){return s.id===r}))}},{key:"getPointerInfo",value:function(i){return this.pointers[this.getPointerIndex(i)]}},{key:"updatePointer",value:function(i,r,s,p){var h,m,x,k=ht(i),T=this.getPointerIndex(i),S=this.pointers[T];return p=p!==!1&&(p||/(down|start)$/i.test(r.type)),S?S.pointer=i:(S=new Nr(k,i,r,null,null),T=this.pointers.length,this.pointers.push(S)),J(this.coords.cur,this.pointers.map((function(z){return z.pointer})),this._now()),h=this.coords.delta,m=this.coords.prev,x=this.coords.cur,h.page.x=x.page.x-m.page.x,h.page.y=x.page.y-m.page.y,h.client.x=x.client.x-m.client.x,h.client.y=x.client.y-m.client.y,h.timeStamp=x.timeStamp-m.timeStamp,p&&(this.pointerIsDown=!0,S.downTime=this.coords.cur.timeStamp,S.downTarget=s,gt(this.downPointer,i),this.interacting()||(_t(this.coords.start,this.coords.cur),_t(this.coords.prev,this.coords.cur),this.downEvent=r,this.pointerWasMoved=!1)),this._updateLatestPointer(i,r,s),this._scopeFire("interactions:update-pointer",{pointer:i,event:r,eventTarget:s,down:p,pointerInfo:S,pointerIndex:T,interaction:this}),T}},{key:"removePointer",value:function(i,r){var s=this.getPointerIndex(i);if(s!==-1){var p=this.pointers[s];this._scopeFire("interactions:remove-pointer",{pointer:i,event:r,eventTarget:null,pointerIndex:s,pointerInfo:p,interaction:this}),this.pointers.splice(s,1),this.pointerIsDown=!1}}},{key:"_updateLatestPointer",value:function(i,r,s){this._latestPointer.pointer=i,this._latestPointer.event=r,this._latestPointer.eventTarget=s}},{key:"destroy",value:function(){this._latestPointer.pointer=null,this._latestPointer.event=null,this._latestPointer.eventTarget=null}},{key:"_createPreparedEvent",value:function(i,r,s,p){return new ki(this,i,this.prepared.name,r,this.element,s,p)}},{key:"_fireEvent",value:function(i){var r;(r=this.interactable)==null||r.fire(i),(!this.prevEvent||i.timeStamp>=this.prevEvent.timeStamp)&&(this.prevEvent=i)}},{key:"_doPhase",value:function(i){var r=i.event,s=i.phase,p=i.preEnd,h=i.type,m=this.rect;if(m&&s==="move"&&(Le(this.edges,m,this.coords.delta[this.interactable.options.deltaSource]),m.width=m.right-m.left,m.height=m.bottom-m.top),this._scopeFire("interactions:before-action-".concat(s),i)===!1)return!1;var x=i.iEvent=this._createPreparedEvent(r,s,p,h);return this._scopeFire("interactions:action-".concat(s),i),s==="start"&&(this.prevEvent=x),this._fireEvent(x),this._scopeFire("interactions:after-action-".concat(s),i),!0}},{key:"_now",value:function(){return Date.now()}}]),n})();function an(n){on(n.interaction)}function on(n){if(!(function(r){return!(!r.offset.pending.x&&!r.offset.pending.y)})(n))return!1;var i=n.offset.pending;return Si(n.coords.cur,i),Si(n.coords.delta,i),Le(n.edges,n.rect,i),i.x=0,i.y=0,!0}function Kr(n){var i=n.x,r=n.y;this.offset.pending.x+=i,this.offset.pending.y+=r,this.offset.total.x+=i,this.offset.total.y+=r}function Si(n,i){var r=n.page,s=n.client,p=i.x,h=i.y;r.x+=p,r.y+=h,s.x+=p,s.y+=h}rn.offsetBy="";var $r={id:"offset",before:["modifiers","pointer-events","actions","inertia"],install:function(n){n.Interaction.prototype.offsetBy=Kr},listeners:{"interactions:new":function(n){n.interaction.offset={total:{x:0,y:0},pending:{x:0,y:0}}},"interactions:update-pointer":function(n){return(function(i){i.pointerIsDown&&(Si(i.coords.cur,i.offset.total),i.offset.pending.x=0,i.offset.pending.y=0)})(n.interaction)},"interactions:before-action-start":an,"interactions:before-action-move":an,"interactions:before-action-end":function(n){var i=n.interaction;if(on(i))return i.move({offset:!0}),i.end(),!1},"interactions:stop":function(n){var i=n.interaction;i.offset.total.x=0,i.offset.total.y=0,i.offset.pending.x=0,i.offset.pending.y=0}}},sn=$r,Wr=(function(){function n(i){a(this,n),this.active=!1,this.isModified=!1,this.smoothEnd=!1,this.allowResume=!1,this.modification=void 0,this.modifierCount=0,this.modifierArg=void 0,this.startCoords=void 0,this.t0=0,this.v0=0,this.te=0,this.targetOffset=void 0,this.modifiedOffset=void 0,this.currentOffset=void 0,this.lambda_v0=0,this.one_ve_v0=0,this.timeout=void 0,this.interaction=void 0,this.interaction=i}return l(n,[{key:"start",value:function(i){var r=this.interaction,s=si(r);if(!s||!s.enabled)return!1;var p=r.coords.velocity.client,h=dt(p.x,p.y),m=this.modification||(this.modification=new wi(r));if(m.copyFrom(r.modification),this.t0=r._now(),this.allowResume=s.allowResume,this.v0=h,this.currentOffset={x:0,y:0},this.startCoords=r.coords.cur.page,this.modifierArg=m.fillArg({pageCoords:this.startCoords,preEnd:!0,phase:"inertiastart"}),this.t0-r.coords.cur.timeStamp<50&&h>s.minSpeed&&h>s.endSpeed)this.startInertia();else{if(m.result=m.setAll(this.modifierArg),!m.result.changed)return!1;this.startSmoothEnd()}return r.modification.result.rect=null,r.offsetBy(this.targetOffset),r._doPhase({interaction:r,event:i,phase:"inertiastart"}),r.offsetBy({x:-this.targetOffset.x,y:-this.targetOffset.y}),r.modification.result.rect=null,this.active=!0,r.simulation=this,!0}},{key:"startInertia",value:function(){var i=this,r=this.interaction.coords.velocity.client,s=si(this.interaction),p=s.resistance,h=-Math.log(s.endSpeed/this.v0)/p;this.targetOffset={x:(r.x-h)/p,y:(r.y-h)/p},this.te=h,this.lambda_v0=p/this.v0,this.one_ve_v0=1-s.endSpeed/this.v0;var m=this.modification,x=this.modifierArg;x.pageCoords={x:this.startCoords.x+this.targetOffset.x,y:this.startCoords.y+this.targetOffset.y},m.result=m.setAll(x),m.result.changed&&(this.isModified=!0,this.modifiedOffset={x:this.targetOffset.x+m.result.delta.x,y:this.targetOffset.y+m.result.delta.y}),this.onNextFrame((function(){return i.inertiaTick()}))}},{key:"startSmoothEnd",value:function(){var i=this;this.smoothEnd=!0,this.isModified=!0,this.targetOffset={x:this.modification.result.delta.x,y:this.modification.result.delta.y},this.onNextFrame((function(){return i.smoothEndTick()}))}},{key:"onNextFrame",value:function(i){var r=this;this.timeout=V.request((function(){r.active&&i()}))}},{key:"inertiaTick",value:function(){var i,r,s,p,h,m,x,k=this,T=this.interaction,S=si(T).resistance,z=(T._now()-this.t0)/1e3;if(z<this.te){var B,U=1-(Math.exp(-S*z)-this.lambda_v0)/this.one_ve_v0;this.isModified?(i=0,r=0,s=this.targetOffset.x,p=this.targetOffset.y,h=this.modifiedOffset.x,m=this.modifiedOffset.y,B={x:cn(x=U,i,s,h),y:cn(x,r,p,m)}):B={x:this.targetOffset.x*U,y:this.targetOffset.y*U};var W={x:B.x-this.currentOffset.x,y:B.y-this.currentOffset.y};this.currentOffset.x+=W.x,this.currentOffset.y+=W.y,T.offsetBy(W),T.move(),this.onNextFrame((function(){return k.inertiaTick()}))}else T.offsetBy({x:this.modifiedOffset.x-this.currentOffset.x,y:this.modifiedOffset.y-this.currentOffset.y}),this.end()}},{key:"smoothEndTick",value:function(){var i=this,r=this.interaction,s=r._now()-this.t0,p=si(r).smoothEndDuration;if(s<p){var h={x:ln(s,0,this.targetOffset.x,p),y:ln(s,0,this.targetOffset.y,p)},m={x:h.x-this.currentOffset.x,y:h.y-this.currentOffset.y};this.currentOffset.x+=m.x,this.currentOffset.y+=m.y,r.offsetBy(m),r.move({skipModifiers:this.modifierCount}),this.onNextFrame((function(){return i.smoothEndTick()}))}else r.offsetBy({x:this.targetOffset.x-this.currentOffset.x,y:this.targetOffset.y-this.currentOffset.y}),this.end()}},{key:"resume",value:function(i){var r=i.pointer,s=i.event,p=i.eventTarget,h=this.interaction;h.offsetBy({x:-this.currentOffset.x,y:-this.currentOffset.y}),h.updatePointer(r,s,p,!0),h._doPhase({interaction:h,event:s,phase:"resume"}),_t(h.coords.prev,h.coords.cur),this.stop()}},{key:"end",value:function(){this.interaction.move(),this.interaction.end(),this.stop()}},{key:"stop",value:function(){this.active=this.smoothEnd=!1,this.interaction.simulation=null,V.cancel(this.timeout)}}]),n})();function si(n){var i=n.interactable,r=n.prepared;return i&&i.options&&r.name&&i.options[r.name].inertia}var Yr={id:"inertia",before:["modifiers","actions"],install:function(n){var i=n.defaults;n.usePlugin(sn),n.usePlugin(tn),n.actions.phases.inertiastart=!0,n.actions.phases.resume=!0,i.perAction.inertia={enabled:!1,resistance:10,minSpeed:100,endSpeed:10,allowResume:!0,smoothEndDuration:300}},listeners:{"interactions:new":function(n){var i=n.interaction;i.inertia=new Wr(i)},"interactions:before-action-end":function(n){var i=n.interaction,r=n.event;return(!i._interacting||i.simulation||!i.inertia.start(r))&&null},"interactions:down":function(n){var i=n.interaction,r=n.eventTarget,s=i.inertia;if(s.active)for(var p=r;b.element(p);){if(p===i.element){s.resume(n);break}p=We(p)}},"interactions:stop":function(n){var i=n.interaction.inertia;i.active&&i.stop()},"interactions:before-action-resume":function(n){var i=n.interaction.modification;i.stop(n),i.start(n,n.interaction.coords.cur.page),i.applyToInteraction(n)},"interactions:before-action-inertiastart":function(n){return n.interaction.modification.setAndApply(n)},"interactions:action-resume":Ut,"interactions:action-inertiastart":Ut,"interactions:after-action-inertiastart":function(n){return n.interaction.modification.restoreInteractionCoords(n)},"interactions:after-action-resume":function(n){return n.interaction.modification.restoreInteractionCoords(n)}}};function cn(n,i,r,s){var p=1-n;return p*p*i+2*p*n*r+n*n*s}function ln(n,i,r,s){return-r*(n/=s)*(n-2)+i}var Ur=Yr;function dn(n,i){for(var r=0;r<i.length;r++){var s=i[r];if(n.immediatePropagationStopped)break;s(n)}}var pn=(function(){function n(i){a(this,n),this.options=void 0,this.types={},this.propagationStopped=!1,this.immediatePropagationStopped=!1,this.global=void 0,this.options=se({},i||{})}return l(n,[{key:"fire",value:function(i){var r,s=this.global;(r=this.types[i.type])&&dn(i,r),!i.propagationStopped&&s&&(r=s[i.type])&&dn(i,r)}},{key:"on",value:function(i,r){var s=Te(i,r);for(i in s)this.types[i]=ne(this.types[i]||[],s[i])}},{key:"off",value:function(i,r){var s=Te(i,r);for(i in s){var p=this.types[i];if(p&&p.length)for(var h=0,m=s[i];h<m.length;h++){var x=m[h],k=p.indexOf(x);k!==-1&&p.splice(k,1)}}}},{key:"getRect",value:function(i){return null}}]),n})(),Vr=(function(){function n(i){a(this,n),this.currentTarget=void 0,this.originalEvent=void 0,this.type=void 0,this.originalEvent=i,gt(this,i)}return l(n,[{key:"preventOriginalDefault",value:function(){this.originalEvent.preventDefault()}},{key:"stopPropagation",value:function(){this.originalEvent.stopPropagation()}},{key:"stopImmediatePropagation",value:function(){this.originalEvent.stopImmediatePropagation()}}]),n})();function Vt(n){return b.object(n)?{capture:!!n.capture,passive:!!n.passive}:{capture:!!n,passive:!1}}function ci(n,i){return n===i||(typeof n=="boolean"?!!i.capture===n&&!i.passive:!!n.capture==!!i.capture&&!!n.passive==!!i.passive)}var Gr={id:"events",install:function(n){var i,r=[],s={},p=[],h={add:m,remove:x,addDelegate:function(S,z,B,U,W){var Z=Vt(W);if(!s[B]){s[B]=[];for(var he=0;he<p.length;he++){var ue=p[he];m(ue,B,k),m(ue,B,T,!0)}}var be=s[B],ze=F(be,(function(Be){return Be.selector===S&&Be.context===z}));ze||(ze={selector:S,context:z,listeners:[]},be.push(ze)),ze.listeners.push({func:U,options:Z})},removeDelegate:function(S,z,B,U,W){var Z,he=Vt(W),ue=s[B],be=!1;if(ue)for(Z=ue.length-1;Z>=0;Z--){var ze=ue[Z];if(ze.selector===S&&ze.context===z){for(var Be=ze.listeners,Ee=Be.length-1;Ee>=0;Ee--){var De=Be[Ee];if(De.func===U&&ci(De.options,he)){Be.splice(Ee,1),Be.length||(ue.splice(Z,1),x(z,B,k),x(z,B,T,!0)),be=!0;break}}if(be)break}}},delegateListener:k,delegateUseCapture:T,delegatedEvents:s,documents:p,targets:r,supportsOptions:!1,supportsPassive:!1};function m(S,z,B,U){if(S.addEventListener){var W=Vt(U),Z=F(r,(function(he){return he.eventTarget===S}));Z||(Z={eventTarget:S,events:{}},r.push(Z)),Z.events[z]||(Z.events[z]=[]),F(Z.events[z],(function(he){return he.func===B&&ci(he.options,W)}))||(S.addEventListener(z,B,h.supportsOptions?W:W.capture),Z.events[z].push({func:B,options:W}))}}function x(S,z,B,U){if(S.addEventListener&&S.removeEventListener){var W=ye(r,(function(bt){return bt.eventTarget===S})),Z=r[W];if(Z&&Z.events)if(z!=="all"){var he=!1,ue=Z.events[z];if(ue){if(B==="all"){for(var be=ue.length-1;be>=0;be--){var ze=ue[be];x(S,z,ze.func,ze.options)}return}for(var Be=Vt(U),Ee=0;Ee<ue.length;Ee++){var De=ue[Ee];if(De.func===B&&ci(De.options,Be)){S.removeEventListener(z,B,h.supportsOptions?Be:Be.capture),ue.splice(Ee,1),ue.length===0&&(delete Z.events[z],he=!0);break}}}he&&!Object.keys(Z.events).length&&r.splice(W,1)}else for(z in Z.events)Z.events.hasOwnProperty(z)&&x(S,z,"all")}}function k(S,z){for(var B=Vt(z),U=new Vr(S),W=s[S.type],Z=N(S)[0],he=Z;b.element(he);){for(var ue=0;ue<W.length;ue++){var be=W[ue],ze=be.selector,Be=be.context;if(je(he,ze)&&_e(Be,Z)&&_e(Be,he)){var Ee=be.listeners;U.currentTarget=he;for(var De=0;De<Ee.length;De++){var bt=Ee[De];ci(bt.options,B)&&bt.func(U)}}}he=We(he)}}function T(S){return k(S,!0)}return(i=n.document)==null||i.createElement("div").addEventListener("test",null,{get capture(){return h.supportsOptions=!0},get passive(){return h.supportsPassive=!0}}),n.events=h,h}},Ei={methodOrder:["simulationResume","mouseOrPen","hasPointer","idle"],search:function(n){for(var i=0,r=Ei.methodOrder;i<r.length;i++){var s=r[i],p=Ei[s](n);if(p)return p}return null},simulationResume:function(n){var i=n.pointerType,r=n.eventType,s=n.eventTarget,p=n.scope;if(!/down|start/i.test(r))return null;for(var h=0,m=p.interactions.list;h<m.length;h++){var x=m[h],k=s;if(x.simulation&&x.simulation.allowResume&&x.pointerType===i)for(;k;){if(k===x.element)return x;k=We(k)}}return null},mouseOrPen:function(n){var i,r=n.pointerId,s=n.pointerType,p=n.eventType,h=n.scope;if(s!=="mouse"&&s!=="pen")return null;for(var m=0,x=h.interactions.list;m<x.length;m++){var k=x[m];if(k.pointerType===s){if(k.simulation&&!un(k,r))continue;if(k.interacting())return k;i||(i=k)}}if(i)return i;for(var T=0,S=h.interactions.list;T<S.length;T++){var z=S[T];if(!(z.pointerType!==s||/down/i.test(p)&&z.simulation))return z}return null},hasPointer:function(n){for(var i=n.pointerId,r=0,s=n.scope.interactions.list;r<s.length;r++){var p=s[r];if(un(p,i))return p}return null},idle:function(n){for(var i=n.pointerType,r=0,s=n.scope.interactions.list;r<s.length;r++){var p=s[r];if(p.pointers.length===1){var h=p.interactable;if(h&&(!h.options.gesture||!h.options.gesture.enabled))continue}else if(p.pointers.length>=2)continue;if(!p.interacting()&&i===p.pointerType)return p}return null}};function un(n,i){return n.pointers.some((function(r){return r.id===i}))}var Xr=Ei,Ci=["pointerDown","pointerMove","pointerUp","updatePointer","removePointer","windowBlur"];function hn(n,i){return function(r){var s=i.interactions.list,p=I(r),h=N(r),m=h[0],x=h[1],k=[];if(/^touch/.test(r.type)){i.prevTouchTime=i.now();for(var T=0,S=r.changedTouches;T<S.length;T++){var z=S[T],B={pointer:z,pointerId:ht(z),pointerType:p,eventType:r.type,eventTarget:m,curEventTarget:x,scope:i},U=fn(B);k.push([B.pointer,B.eventTarget,B.curEventTarget,U])}}else{var W=!1;if(!me.supportsPointerEvent&&/mouse/.test(r.type)){for(var Z=0;Z<s.length&&!W;Z++)W=s[Z].pointerType!=="mouse"&&s[Z].pointerIsDown;W=W||i.now()-i.prevTouchTime<500||r.timeStamp===0}if(!W){var he={pointer:r,pointerId:ht(r),pointerType:p,eventType:r.type,curEventTarget:x,eventTarget:m,scope:i},ue=fn(he);k.push([he.pointer,he.eventTarget,he.curEventTarget,ue])}}for(var be=0;be<k.length;be++){var ze=k[be],Be=ze[0],Ee=ze[1],De=ze[2];ze[3][n](Be,r,Ee,De)}}}function fn(n){var i=n.pointerType,r=n.scope,s={interaction:Xr.search(n),searchDetails:n};return r.fire("interactions:find",s),s.interaction||r.interactions.new({pointerType:i})}function Ai(n,i){var r=n.doc,s=n.scope,p=n.options,h=s.interactions.docEvents,m=s.events,x=m[i];for(var k in s.browser.isIOS&&!p.events&&(p.events={passive:!1}),m.delegatedEvents)x(r,k,m.delegateListener),x(r,k,m.delegateUseCapture,!0);for(var T=p&&p.events,S=0;S<h.length;S++){var z=h[S];x(r,z.type,z.listener,T)}}var Jr={id:"core/interactions",install:function(n){for(var i={},r=0;r<Ci.length;r++){var s=Ci[r];i[s]=hn(s,n)}var p,h=me.pEventTypes;function m(){for(var x=0,k=n.interactions.list;x<k.length;x++){var T=k[x];if(T.pointerIsDown&&T.pointerType==="touch"&&!T._interacting)for(var S=function(){var U=B[z];n.documents.some((function(W){return _e(W.doc,U.downTarget)}))||T.removePointer(U.pointer,U.event)},z=0,B=T.pointers;z<B.length;z++)S()}}(p=ie.PointerEvent?[{type:h.down,listener:m},{type:h.down,listener:i.pointerDown},{type:h.move,listener:i.pointerMove},{type:h.up,listener:i.pointerUp},{type:h.cancel,listener:i.pointerUp}]:[{type:"mousedown",listener:i.pointerDown},{type:"mousemove",listener:i.pointerMove},{type:"mouseup",listener:i.pointerUp},{type:"touchstart",listener:m},{type:"touchstart",listener:i.pointerDown},{type:"touchmove",listener:i.pointerMove},{type:"touchend",listener:i.pointerUp},{type:"touchcancel",listener:i.pointerUp}]).push({type:"blur",listener:function(x){for(var k=0,T=n.interactions.list;k<T.length;k++)T[k].documentBlur(x)}}),n.prevTouchTime=0,n.Interaction=(function(x){d(T,x);var k=_(T);function T(){return a(this,T),k.apply(this,arguments)}return l(T,[{key:"pointerMoveTolerance",get:function(){return n.interactions.pointerMoveTolerance},set:function(S){n.interactions.pointerMoveTolerance=S}},{key:"_now",value:function(){return n.now()}}]),T})(jr),n.interactions={list:[],new:function(x){x.scopeFire=function(T,S){return n.fire(T,S)};var k=new n.Interaction(x);return n.interactions.list.push(k),k},listeners:i,docEvents:p,pointerMoveTolerance:1},n.usePlugin(en)},listeners:{"scope:add-document":function(n){return Ai(n,"add")},"scope:remove-document":function(n){return Ai(n,"remove")},"interactable:unset":function(n,i){for(var r=n.interactable,s=i.interactions.list.length-1;s>=0;s--){var p=i.interactions.list[s];p.interactable===r&&(p.stop(),i.fire("interactions:destroy",{interaction:p}),p.destroy(),i.interactions.list.length>2&&i.interactions.list.splice(s,1))}}},onDocSignal:Ai,doOnInteractions:hn,methodNames:Ci},Qr=Jr,zt=(function(n){return n[n.On=0]="On",n[n.Off=1]="Off",n})(zt||{}),Zr=(function(){function n(i,r,s,p){a(this,n),this.target=void 0,this.options=void 0,this._actions=void 0,this.events=new pn,this._context=void 0,this._win=void 0,this._doc=void 0,this._scopeEvents=void 0,this._actions=r.actions,this.target=i,this._context=r.context||s,this._win=C(ot(i)?this._context:i),this._doc=this._win.document,this._scopeEvents=p,this.set(r)}return l(n,[{key:"_defaults",get:function(){return{base:{},perAction:{},actions:{}}}},{key:"setOnEvents",value:function(i,r){return b.func(r.onstart)&&this.on("".concat(i,"start"),r.onstart),b.func(r.onmove)&&this.on("".concat(i,"move"),r.onmove),b.func(r.onend)&&this.on("".concat(i,"end"),r.onend),b.func(r.oninertiastart)&&this.on("".concat(i,"inertiastart"),r.oninertiastart),this}},{key:"updatePerActionListeners",value:function(i,r,s){var p,h=this,m=(p=this._actions.map[i])==null?void 0:p.filterEventType,x=function(k){return(m==null||m(k))&&ai(k,h._actions)};(b.array(r)||b.object(r))&&this._onOff(zt.Off,i,r,void 0,x),(b.array(s)||b.object(s))&&this._onOff(zt.On,i,s,void 0,x)}},{key:"setPerAction",value:function(i,r){var s=this._defaults;for(var p in r){var h=p,m=this.options[i],x=r[h];h==="listeners"&&this.updatePerActionListeners(i,m.listeners,x),b.array(x)?m[h]=X(x):b.plainObject(x)?(m[h]=se(m[h]||{},jt(x)),b.object(s.perAction[h])&&"enabled"in s.perAction[h]&&(m[h].enabled=x.enabled!==!1)):b.bool(x)&&b.object(s.perAction[h])?m[h].enabled=x:m[h]=x}}},{key:"getRect",value:function(i){return i=i||(b.element(this.target)?this.target:null),b.string(this.target)&&(i=i||this._context.querySelector(this.target)),at(i)}},{key:"rectChecker",value:function(i){var r=this;return b.func(i)?(this.getRect=function(s){var p=se({},i.apply(r,s));return"width"in p||(p.width=p.right-p.left,p.height=p.bottom-p.top),p},this):i===null?(delete this.getRect,this):this.getRect}},{key:"_backCompatOption",value:function(i,r){if(ot(r)||b.object(r)){for(var s in this.options[i]=r,this._actions.map)this.options[s][i]=r;return this}return this.options[i]}},{key:"origin",value:function(i){return this._backCompatOption("origin",i)}},{key:"deltaSource",value:function(i){return i==="page"||i==="client"?(this.options.deltaSource=i,this):this.options.deltaSource}},{key:"getAllElements",value:function(){var i=this.target;return b.string(i)?Array.from(this._context.querySelectorAll(i)):b.func(i)&&i.getAllElements?i.getAllElements():b.element(i)?[i]:[]}},{key:"context",value:function(){return this._context}},{key:"inContext",value:function(i){return this._context===i.ownerDocument||_e(this._context,i)}},{key:"testIgnoreAllow",value:function(i,r,s){return!this.testIgnore(i.ignoreFrom,r,s)&&this.testAllow(i.allowFrom,r,s)}},{key:"testAllow",value:function(i,r,s){return!i||!!b.element(s)&&(b.string(i)?rt(s,i,r):!!b.element(i)&&_e(i,s))}},{key:"testIgnore",value:function(i,r,s){return!(!i||!b.element(s))&&(b.string(i)?rt(s,i,r):!!b.element(i)&&_e(i,s))}},{key:"fire",value:function(i){return this.events.fire(i),this}},{key:"_onOff",value:function(i,r,s,p,h){b.object(r)&&!b.array(r)&&(p=s,s=null);var m=Te(r,s,h);for(var x in m){x==="wheel"&&(x=me.wheelEvent);for(var k=0,T=m[x];k<T.length;k++){var S=T[k];ai(x,this._actions)?this.events[i===zt.On?"on":"off"](x,S):b.string(this.target)?this._scopeEvents[i===zt.On?"addDelegate":"removeDelegate"](this.target,this._context,x,S,p):this._scopeEvents[i===zt.On?"add":"remove"](this.target,x,S,p)}}return this}},{key:"on",value:function(i,r,s){return this._onOff(zt.On,i,r,s)}},{key:"off",value:function(i,r,s){return this._onOff(zt.Off,i,r,s)}},{key:"set",value:function(i){var r=this._defaults;for(var s in b.object(i)||(i={}),this.options=jt(r.base),this._actions.methodDict){var p=s,h=this._actions.methodDict[p];this.options[p]={},this.setPerAction(p,se(se({},r.perAction),r.actions[p])),this[h](i[p])}for(var m in i)m!=="getRect"?b.func(this[m])&&this[m](i[m]):this.rectChecker(i.getRect);return this}},{key:"unset",value:function(){if(b.string(this.target))for(var i in this._scopeEvents.delegatedEvents)for(var r=this._scopeEvents.delegatedEvents[i],s=r.length-1;s>=0;s--){var p=r[s],h=p.selector,m=p.context,x=p.listeners;h===this.target&&m===this._context&&r.splice(s,1);for(var k=x.length-1;k>=0;k--)this._scopeEvents.removeDelegate(this.target,this._context,i,x[k][0],x[k][1])}else this._scopeEvents.remove(this.target,"all")}}]),n})(),ea=(function(){function n(i){var r=this;a(this,n),this.list=[],this.selectorMap={},this.scope=void 0,this.scope=i,i.addListeners({"interactable:unset":function(s){var p=s.interactable,h=p.target,m=b.string(h)?r.selectorMap[h]:h[r.scope.id],x=ye(m,(function(k){return k===p}));m.splice(x,1)}})}return l(n,[{key:"new",value:function(i,r){r=se(r||{},{actions:this.scope.actions});var s=new this.scope.Interactable(i,r,this.scope.document,this.scope.events);return this.scope.addDocument(s._doc),this.list.push(s),b.string(i)?(this.selectorMap[i]||(this.selectorMap[i]=[]),this.selectorMap[i].push(s)):(s.target[this.scope.id]||Object.defineProperty(i,this.scope.id,{value:[],configurable:!0}),i[this.scope.id].push(s)),this.scope.fire("interactable:new",{target:i,options:r,interactable:s,win:this.scope._win}),s}},{key:"getExisting",value:function(i,r){var s=r&&r.context||this.scope.document,p=b.string(i),h=p?this.selectorMap[i]:i[this.scope.id];if(h)return F(h,(function(m){return m._context===s&&(p||m.inContext(i))}))}},{key:"forEachMatch",value:function(i,r){for(var s=0,p=this.list;s<p.length;s++){var h=p[s],m=void 0;if((b.string(h.target)?b.element(i)&&je(i,h.target):i===h.target)&&h.inContext(i)&&(m=r(h)),m!==void 0)return m}}}]),n})(),ta=(function(){function n(){var i=this;a(this,n),this.id="__interact_scope_".concat(Math.floor(100*Math.random())),this.isInitialized=!1,this.listenerMaps=[],this.browser=me,this.defaults=jt(nn),this.Eventable=pn,this.actions={map:{},phases:{start:!0,move:!0,end:!0},methodDict:{},phaselessTypes:{}},this.interactStatic=(function(s){var p=function h(m,x){var k=s.interactables.getExisting(m,x);return k||((k=s.interactables.new(m,x)).events.global=h.globalEvents),k};return p.getPointerAverage=ce,p.getTouchBBox=Y,p.getTouchDistance=pe,p.getTouchAngle=le,p.getElementRect=at,p.getElementClientRect=Ze,p.matchesSelector=je,p.closest=Je,p.globalEvents={},p.version="1.10.27",p.scope=s,p.use=function(h,m){return this.scope.usePlugin(h,m),this},p.isSet=function(h,m){return!!this.scope.interactables.get(h,m&&m.context)},p.on=Ge((function(h,m,x){if(b.string(h)&&h.search(" ")!==-1&&(h=h.trim().split(/ +/)),b.array(h)){for(var k=0,T=h;k<T.length;k++){var S=T[k];this.on(S,m,x)}return this}if(b.object(h)){for(var z in h)this.on(z,h[z],m);return this}return ai(h,this.scope.actions)?this.globalEvents[h]?this.globalEvents[h].push(m):this.globalEvents[h]=[m]:this.scope.events.add(this.scope.document,h,m,{options:x}),this}),"The interact.on() method is being deprecated"),p.off=Ge((function(h,m,x){if(b.string(h)&&h.search(" ")!==-1&&(h=h.trim().split(/ +/)),b.array(h)){for(var k=0,T=h;k<T.length;k++){var S=T[k];this.off(S,m,x)}return this}if(b.object(h)){for(var z in h)this.off(z,h[z],m);return this}var B;return ai(h,this.scope.actions)?h in this.globalEvents&&(B=this.globalEvents[h].indexOf(m))!==-1&&this.globalEvents[h].splice(B,1):this.scope.events.remove(this.scope.document,h,m,x),this}),"The interact.off() method is being deprecated"),p.debug=function(){return this.scope},p.supportsTouch=function(){return me.supportsTouch},p.supportsPointerEvent=function(){return me.supportsPointerEvent},p.stop=function(){for(var h=0,m=this.scope.interactions.list;h<m.length;h++)m[h].stop();return this},p.pointerMoveTolerance=function(h){return b.number(h)?(this.scope.interactions.pointerMoveTolerance=h,this):this.scope.interactions.pointerMoveTolerance},p.addDocument=function(h,m){this.scope.addDocument(h,m)},p.removeDocument=function(h){this.scope.removeDocument(h)},p})(this),this.InteractEvent=ki,this.Interactable=void 0,this.interactables=new ea(this),this._win=void 0,this.document=void 0,this.window=void 0,this.documents=[],this._plugins={list:[],map:{}},this.onWindowUnload=function(s){return i.removeDocument(s.target)};var r=this;this.Interactable=(function(s){d(h,s);var p=_(h);function h(){return a(this,h),p.apply(this,arguments)}return l(h,[{key:"_defaults",get:function(){return r.defaults}},{key:"set",value:function(m){return g(f(h.prototype),"set",this).call(this,m),r.fire("interactable:set",{options:m,interactable:this}),this}},{key:"unset",value:function(){g(f(h.prototype),"unset",this).call(this);var m=r.interactables.list.indexOf(this);m<0||(r.interactables.list.splice(m,1),r.fire("interactable:unset",{interactable:this}))}}]),h})(Zr)}return l(n,[{key:"addListeners",value:function(i,r){this.listenerMaps.push({id:r,map:i})}},{key:"fire",value:function(i,r){for(var s=0,p=this.listenerMaps;s<p.length;s++){var h=p[s].map[i];if(h&&h(r,this,i)===!1)return!1}}},{key:"init",value:function(i){return this.isInitialized?this:(function(r,s){return r.isInitialized=!0,b.window(s)&&D(s),ie.init(s),me.init(s),V.init(s),r.window=s,r.document=s.document,r.usePlugin(Qr),r.usePlugin(Gr),r})(this,i)}},{key:"pluginIsInstalled",value:function(i){var r=i.id;return r?!!this._plugins.map[r]:this._plugins.list.indexOf(i)!==-1}},{key:"usePlugin",value:function(i,r){if(!this.isInitialized)return this;if(this.pluginIsInstalled(i))return this;if(i.id&&(this._plugins.map[i.id]=i),this._plugins.list.push(i),i.install&&i.install(this,r),i.listeners&&i.before){for(var s=0,p=this.listenerMaps.length,h=i.before.reduce((function(x,k){return x[k]=!0,x[gn(k)]=!0,x}),{});s<p;s++){var m=this.listenerMaps[s].id;if(m&&(h[m]||h[gn(m)]))break}this.listenerMaps.splice(s,0,{id:i.id,map:i.listeners})}else i.listeners&&this.listenerMaps.push({id:i.id,map:i.listeners});return this}},{key:"addDocument",value:function(i,r){if(this.getDocIndex(i)!==-1)return!1;var s=C(i);r=r?se({},r):{},this.documents.push({doc:i,options:r}),this.events.documents.push(i),i!==this.document&&this.events.add(s,"unload",this.onWindowUnload),this.fire("scope:add-document",{doc:i,window:s,scope:this,options:r})}},{key:"removeDocument",value:function(i){var r=this.getDocIndex(i),s=C(i),p=this.documents[r].options;this.events.remove(s,"unload",this.onWindowUnload),this.documents.splice(r,1),this.events.documents.splice(r,1),this.fire("scope:remove-document",{doc:i,window:s,scope:this,options:p})}},{key:"getDocIndex",value:function(i){for(var r=0;r<this.documents.length;r++)if(this.documents[r].doc===i)return r;return-1}},{key:"getDocOptions",value:function(i){var r=this.getDocIndex(i);return r===-1?null:this.documents[r].options}},{key:"now",value:function(){return(this.window.Date||Date).now()}}]),n})();function gn(n){return n&&n.replace(/\/.*$/,"")}var mn=new ta,vt=mn.interactStatic,ia=typeof globalThis!="undefined"?globalThis:window;mn.init(ia);var na=Object.freeze({__proto__:null,edgeTarget:function(){},elements:function(){},grid:function(n){var i=[["x","y"],["left","top"],["right","bottom"],["width","height"]].filter((function(s){var p=s[0],h=s[1];return p in n||h in n})),r=function(s,p){for(var h=n.range,m=n.limits,x=m===void 0?{left:-1/0,right:1/0,top:-1/0,bottom:1/0}:m,k=n.offset,T=k===void 0?{x:0,y:0}:k,S={range:h,grid:n,x:null,y:null},z=0;z<i.length;z++){var B=i[z],U=B[0],W=B[1],Z=Math.round((s-T.x)/n[U]),he=Math.round((p-T.y)/n[W]);S[U]=Math.max(x.left,Math.min(x.right,Z*n[U]+T.x)),S[W]=Math.max(x.top,Math.min(x.bottom,he*n[W]+T.y))}return S};return r.grid=n,r.coordFields=i,r}}),ra={id:"snappers",install:function(n){var i=n.interactStatic;i.snappers=se(i.snappers||{},na),i.createSnapGrid=i.snappers.grid}},aa=ra,oa={start:function(n){var i=n.state,r=n.rect,s=n.edges,p=n.pageCoords,h=i.options,m=h.ratio,x=h.enabled,k=i.options,T=k.equalDelta,S=k.modifiers;m==="preserve"&&(m=r.width/r.height),i.startCoords=se({},p),i.startRect=se({},r),i.ratio=m,i.equalDelta=T;var z=i.linkedEdges={top:s.top||s.left&&!s.bottom,left:s.left||s.top&&!s.right,bottom:s.bottom||s.right&&!s.top,right:s.right||s.bottom&&!s.left};if(i.xIsPrimaryAxis=!(!s.left&&!s.right),i.equalDelta){var B=(z.left?1:-1)*(z.top?1:-1);i.edgeSign={x:B,y:B}}else i.edgeSign={x:z.left?-1:1,y:z.top?-1:1};if(x!==!1&&se(s,z),S!=null&&S.length){var U=new wi(n.interaction);U.copyFrom(n.interaction.modification),U.prepareStates(S),i.subModification=U,U.startAll(u({},n))}},set:function(n){var i=n.state,r=n.rect,s=n.coords,p=i.linkedEdges,h=se({},s),m=i.equalDelta?sa:ca;if(se(n.edges,p),m(i,i.xIsPrimaryAxis,s,r),!i.subModification)return null;var x=se({},r);Le(p,x,{x:s.x-h.x,y:s.y-h.y});var k=i.subModification.setAll(u(u({},n),{},{rect:x,edges:p,pageCoords:s,prevCoords:s,prevRect:x})),T=k.delta;return k.changed&&(m(i,Math.abs(T.x)>Math.abs(T.y),k.coords,k.rect),se(s,k.coords)),k.eventProps},defaults:{ratio:"preserve",equalDelta:!1,modifiers:[],enabled:!1}};function sa(n,i,r){var s=n.startCoords,p=n.edgeSign;i?r.y=s.y+(r.x-s.x)*p.y:r.x=s.x+(r.y-s.y)*p.x}function ca(n,i,r,s){var p=n.startRect,h=n.startCoords,m=n.ratio,x=n.edgeSign;if(i){var k=s.width/m;r.y=h.y+(k-p.height)*x.y}else{var T=s.height*m;r.x=h.x+(T-p.width)*x.x}}var la=Lt(oa,"aspectRatio"),yn=function(){};yn._defaults={};var li=yn;function Bt(n,i,r){return b.func(n)?nt(n,i.interactable,i.element,[r.x,r.y,i]):nt(n,i.interactable,i.element)}var di={start:function(n){var i=n.rect,r=n.startOffset,s=n.state,p=n.interaction,h=n.pageCoords,m=s.options,x=m.elementRect,k=se({left:0,top:0,right:0,bottom:0},m.offset||{});if(i&&x){var T=Bt(m.restriction,p,h);if(T){var S=T.right-T.left-i.width,z=T.bottom-T.top-i.height;S<0&&(k.left+=S,k.right+=S),z<0&&(k.top+=z,k.bottom+=z)}k.left+=r.left-i.width*x.left,k.top+=r.top-i.height*x.top,k.right+=r.right-i.width*(1-x.right),k.bottom+=r.bottom-i.height*(1-x.bottom)}s.offset=k},set:function(n){var i=n.coords,r=n.interaction,s=n.state,p=s.options,h=s.offset,m=Bt(p.restriction,r,i);if(m){var x=(function(k){return!k||"left"in k&&"top"in k||((k=se({},k)).left=k.x||0,k.top=k.y||0,k.right=k.right||k.left+k.width,k.bottom=k.bottom||k.top+k.height),k})(m);i.x=Math.max(Math.min(x.right-h.right,i.x),x.left+h.left),i.y=Math.max(Math.min(x.bottom-h.bottom,i.y),x.top+h.top)}},defaults:{restriction:null,elementRect:null,offset:null,endOnly:!1,enabled:!1}},da=Lt(di,"restrict"),vn={top:1/0,left:1/0,bottom:-1/0,right:-1/0},bn={top:-1/0,left:-1/0,bottom:1/0,right:1/0};function xn(n,i){for(var r=0,s=["top","left","bottom","right"];r<s.length;r++){var p=s[r];p in n||(n[p]=i[p])}return n}var Gt={noInner:vn,noOuter:bn,start:function(n){var i,r=n.interaction,s=n.startOffset,p=n.state,h=p.options;h&&(i=Re(Bt(h.offset,r,r.coords.start.page))),i=i||{x:0,y:0},p.offset={top:i.y+s.top,left:i.x+s.left,bottom:i.y-s.bottom,right:i.x-s.right}},set:function(n){var i=n.coords,r=n.edges,s=n.interaction,p=n.state,h=p.offset,m=p.options;if(r){var x=se({},i),k=Bt(m.inner,s,x)||{},T=Bt(m.outer,s,x)||{};xn(k,vn),xn(T,bn),r.top?i.y=Math.min(Math.max(T.top+h.top,x.y),k.top+h.top):r.bottom&&(i.y=Math.max(Math.min(T.bottom+h.bottom,x.y),k.bottom+h.bottom)),r.left?i.x=Math.min(Math.max(T.left+h.left,x.x),k.left+h.left):r.right&&(i.x=Math.max(Math.min(T.right+h.right,x.x),k.right+h.right))}},defaults:{inner:null,outer:null,offset:null,endOnly:!1,enabled:!1}},pa=Lt(Gt,"restrictEdges"),ua=se({get elementRect(){return{top:0,left:0,bottom:1,right:1}},set elementRect(n){}},di.defaults),ha=Lt({start:di.start,set:di.set,defaults:ua},"restrictRect"),fa={width:-1/0,height:-1/0},ga={width:1/0,height:1/0},ma=Lt({start:function(n){return Gt.start(n)},set:function(n){var i=n.interaction,r=n.state,s=n.rect,p=n.edges,h=r.options;if(p){var m=oe(Bt(h.min,i,n.coords))||fa,x=oe(Bt(h.max,i,n.coords))||ga;r.options={endOnly:h.endOnly,inner:se({},Gt.noInner),outer:se({},Gt.noOuter)},p.top?(r.options.inner.top=s.bottom-m.height,r.options.outer.top=s.bottom-x.height):p.bottom&&(r.options.inner.bottom=s.top+m.height,r.options.outer.bottom=s.top+x.height),p.left?(r.options.inner.left=s.right-m.width,r.options.outer.left=s.right-x.width):p.right&&(r.options.inner.right=s.left+m.width,r.options.outer.right=s.left+x.width),Gt.set(n),r.options=h}},defaults:{min:null,max:null,endOnly:!1,enabled:!1}},"restrictSize"),Ti={start:function(n){var i,r=n.interaction,s=n.interactable,p=n.element,h=n.rect,m=n.state,x=n.startOffset,k=m.options,T=k.offsetWithOrigin?(function(B){var U=B.interaction.element,W=Re(nt(B.state.options.origin,null,null,[U])),Z=W||Oe(B.interactable,U,B.interaction.prepared.name);return Z})(n):{x:0,y:0};if(k.offset==="startCoords")i={x:r.coords.start.page.x,y:r.coords.start.page.y};else{var S=nt(k.offset,s,p,[r]);(i=Re(S)||{x:0,y:0}).x+=T.x,i.y+=T.y}var z=k.relativePoints;m.offsets=h&&z&&z.length?z.map((function(B,U){return{index:U,relativePoint:B,x:x.left-h.width*B.x+i.x,y:x.top-h.height*B.y+i.y}})):[{index:0,relativePoint:null,x:i.x,y:i.y}]},set:function(n){var i=n.interaction,r=n.coords,s=n.state,p=s.options,h=s.offsets,m=Oe(i.interactable,i.element,i.prepared.name),x=se({},r),k=[];p.offsetWithOrigin||(x.x-=m.x,x.y-=m.y);for(var T=0,S=h;T<S.length;T++)for(var z=S[T],B=x.x-z.x,U=x.y-z.y,W=0,Z=p.targets.length;W<Z;W++){var he=p.targets[W],ue=void 0;(ue=b.func(he)?he(B,U,i._proxy,z,W):he)&&k.push({x:(b.number(ue.x)?ue.x:B)+z.x,y:(b.number(ue.y)?ue.y:U)+z.y,range:b.number(ue.range)?ue.range:p.range,source:he,index:W,offset:z})}for(var be={target:null,inRange:!1,distance:0,range:0,delta:{x:0,y:0}},ze=0;ze<k.length;ze++){var Be=k[ze],Ee=Be.range,De=Be.x-x.x,bt=Be.y-x.y,et=dt(De,bt),St=et<=Ee;Ee===1/0&&be.inRange&&be.range!==1/0&&(St=!1),be.target&&!(St?be.inRange&&Ee!==1/0?et/Ee<be.distance/be.range:Ee===1/0&&be.range!==1/0||et<be.distance:!be.inRange&&et<be.distance)||(be.target=Be,be.distance=et,be.range=Ee,be.inRange=St,be.delta.x=De,be.delta.y=bt)}return be.inRange&&(r.x=be.target.x,r.y=be.target.y),s.closest=be,be},defaults:{range:1/0,targets:null,offset:null,offsetWithOrigin:!0,origin:null,relativePoints:null,endOnly:!1,enabled:!1}},ya=Lt(Ti,"snap"),pi={start:function(n){var i=n.state,r=n.edges,s=i.options;if(!r)return null;n.state={options:{targets:null,relativePoints:[{x:r.left?0:1,y:r.top?0:1}],offset:s.offset||"self",origin:{x:0,y:0},range:s.range}},i.targetFields=i.targetFields||[["width","height"],["x","y"]],Ti.start(n),i.offsets=n.state.offsets,n.state=i},set:function(n){var i=n.interaction,r=n.state,s=n.coords,p=r.options,h=r.offsets,m={x:s.x-h[0].x,y:s.y-h[0].y};r.options=se({},p),r.options.targets=[];for(var x=0,k=p.targets||[];x<k.length;x++){var T=k[x],S=void 0;if(S=b.func(T)?T(m.x,m.y,i):T){for(var z=0,B=r.targetFields;z<B.length;z++){var U=B[z],W=U[0],Z=U[1];if(W in S||Z in S){S.x=S[W],S.y=S[Z];break}}r.options.targets.push(S)}}var he=Ti.set(n);return r.options=p,he},defaults:{range:1/0,targets:null,offset:null,endOnly:!1,enabled:!1}},va=Lt(pi,"snapSize"),Oi={aspectRatio:la,restrictEdges:pa,restrict:da,restrictRect:ha,restrictSize:ma,snapEdges:Lt({start:function(n){var i=n.edges;return i?(n.state.targetFields=n.state.targetFields||[[i.left?"left":"right",i.top?"top":"bottom"]],pi.start(n)):null},set:pi.set,defaults:se(jt(pi.defaults),{targets:void 0,range:void 0,offset:{x:0,y:0}})},"snapEdges"),snap:ya,snapSize:va,spring:li,avoid:li,transform:li,rubberband:li},ba={id:"modifiers",install:function(n){var i=n.interactStatic;for(var r in n.usePlugin(tn),n.usePlugin(aa),i.modifiers=Oi,Oi){var s=Oi[r],p=s._defaults,h=s._methods;p._methods=h,n.defaults.perAction[r]=p}}},xa=ba,_n=(function(n){d(r,n);var i=_(r);function r(s,p,h,m,x,k){var T;if(a(this,r),gt(y(T=i.call(this,x)),h),h!==p&&gt(y(T),p),T.timeStamp=k,T.originalEvent=h,T.type=s,T.pointerId=ht(p),T.pointerType=I(p),T.target=m,T.currentTarget=null,s==="tap"){var S=x.getPointerIndex(p);T.dt=T.timeStamp-x.pointers[S].downTime;var z=T.timeStamp-x.tapTime;T.double=!!x.prevTap&&x.prevTap.type!=="doubletap"&&x.prevTap.target===T.target&&z<500}else s==="doubletap"&&(T.dt=p.timeStamp-x.tapTime,T.double=!0);return T}return l(r,[{key:"_subtractOrigin",value:function(s){var p=s.x,h=s.y;return this.pageX-=p,this.pageY-=h,this.clientX-=p,this.clientY-=h,this}},{key:"_addOrigin",value:function(s){var p=s.x,h=s.y;return this.pageX+=p,this.pageY+=h,this.clientX+=p,this.clientY+=h,this}},{key:"preventDefault",value:function(){this.originalEvent.preventDefault()}}]),r})(te),Xt={id:"pointer-events/base",before:["inertia","modifiers","auto-start","actions"],install:function(n){n.pointerEvents=Xt,n.defaults.actions.pointerEvents=Xt.defaults,se(n.actions.phaselessTypes,Xt.types)},listeners:{"interactions:new":function(n){var i=n.interaction;i.prevTap=null,i.tapTime=0},"interactions:update-pointer":function(n){var i=n.down,r=n.pointerInfo;!i&&r.hold||(r.hold={duration:1/0,timeout:null})},"interactions:move":function(n,i){var r=n.interaction,s=n.pointer,p=n.event,h=n.eventTarget;n.duplicate||r.pointerIsDown&&!r.pointerWasMoved||(r.pointerIsDown&&Pi(n),Mt({interaction:r,pointer:s,event:p,eventTarget:h,type:"move"},i))},"interactions:down":function(n,i){(function(r,s){for(var p=r.interaction,h=r.pointer,m=r.event,x=r.eventTarget,k=r.pointerIndex,T=p.pointers[k].hold,S=it(x),z={interaction:p,pointer:h,event:m,eventTarget:x,type:"hold",targets:[],path:S,node:null},B=0;B<S.length;B++){var U=S[B];z.node=U,s.fire("pointerEvents:collect-targets",z)}if(z.targets.length){for(var W=1/0,Z=0,he=z.targets;Z<he.length;Z++){var ue=he[Z].eventable.options.holdDuration;ue<W&&(W=ue)}T.duration=W,T.timeout=setTimeout((function(){Mt({interaction:p,eventTarget:x,pointer:h,event:m,type:"hold"},s)}),W)}})(n,i),Mt(n,i)},"interactions:up":function(n,i){Pi(n),Mt(n,i),(function(r,s){var p=r.interaction,h=r.pointer,m=r.event,x=r.eventTarget;p.pointerWasMoved||Mt({interaction:p,eventTarget:x,pointer:h,event:m,type:"tap"},s)})(n,i)},"interactions:cancel":function(n,i){Pi(n),Mt(n,i)}},PointerEvent:_n,fire:Mt,collectEventTargets:wn,defaults:{holdDuration:600,ignoreFrom:null,allowFrom:null,origin:{x:0,y:0}},types:{down:!0,move:!0,up:!0,cancel:!0,tap:!0,doubletap:!0,hold:!0}};function Mt(n,i){var r=n.interaction,s=n.pointer,p=n.event,h=n.eventTarget,m=n.type,x=n.targets,k=x===void 0?wn(n,i):x,T=new _n(m,s,p,h,r,i.now());i.fire("pointerEvents:new",{pointerEvent:T});for(var S={interaction:r,pointer:s,event:p,eventTarget:h,targets:k,type:m,pointerEvent:T},z=0;z<k.length;z++){var B=k[z];for(var U in B.props||{})T[U]=B.props[U];var W=Oe(B.eventable,B.node);if(T._subtractOrigin(W),T.eventable=B.eventable,T.currentTarget=B.node,B.eventable.fire(T),T._addOrigin(W),T.immediatePropagationStopped||T.propagationStopped&&z+1<k.length&&k[z+1].node!==T.currentTarget)break}if(i.fire("pointerEvents:fired",S),m==="tap"){var Z=T.double?Mt({interaction:r,pointer:s,event:p,eventTarget:h,type:"doubletap"},i):T;r.prevTap=Z,r.tapTime=Z.timeStamp}return T}function wn(n,i){var r=n.interaction,s=n.pointer,p=n.event,h=n.eventTarget,m=n.type,x=r.getPointerIndex(s),k=r.pointers[x];if(m==="tap"&&(r.pointerWasMoved||!k||k.downTarget!==h))return[];for(var T=it(h),S={interaction:r,pointer:s,event:p,eventTarget:h,type:m,path:T,targets:[],node:null},z=0;z<T.length;z++){var B=T[z];S.node=B,i.fire("pointerEvents:collect-targets",S)}return m==="hold"&&(S.targets=S.targets.filter((function(U){var W,Z;return U.eventable.options.holdDuration===((W=r.pointers[x])==null||(Z=W.hold)==null?void 0:Z.duration)}))),S.targets}function Pi(n){var i=n.interaction,r=n.pointerIndex,s=i.pointers[r].hold;s&&s.timeout&&(clearTimeout(s.timeout),s.timeout=null)}var _a=Object.freeze({__proto__:null,default:Xt});function wa(n){var i=n.interaction;i.holdIntervalHandle&&(clearInterval(i.holdIntervalHandle),i.holdIntervalHandle=null)}var ka={id:"pointer-events/holdRepeat",install:function(n){n.usePlugin(Xt);var i=n.pointerEvents;i.defaults.holdRepeatInterval=0,i.types.holdrepeat=n.actions.phaselessTypes.holdrepeat=!0},listeners:["move","up","cancel","endall"].reduce((function(n,i){return n["pointerEvents:".concat(i)]=wa,n}),{"pointerEvents:new":function(n){var i=n.pointerEvent;i.type==="hold"&&(i.count=(i.count||0)+1)},"pointerEvents:fired":function(n,i){var r=n.interaction,s=n.pointerEvent,p=n.eventTarget,h=n.targets;if(s.type==="hold"&&h.length){var m=h[0].eventable.options.holdRepeatInterval;m<=0||(r.holdIntervalHandle=setTimeout((function(){i.pointerEvents.fire({interaction:r,eventTarget:p,type:"hold",pointer:s,event:s},i)}),m))}}})},Sa=ka,Ea={id:"pointer-events/interactableTargets",install:function(n){var i=n.Interactable;i.prototype.pointerEvents=function(s){return se(this.events.options,s),this};var r=i.prototype._backCompatOption;i.prototype._backCompatOption=function(s,p){var h=r.call(this,s,p);return h===this&&(this.events.options[s]=p),h}},listeners:{"pointerEvents:collect-targets":function(n,i){var r=n.targets,s=n.node,p=n.type,h=n.eventTarget;i.interactables.forEachMatch(s,(function(m){var x=m.events,k=x.options;x.types[p]&&x.types[p].length&&m.testIgnoreAllow(k,s,h)&&r.push({node:s,eventable:x,props:{interactable:m}})}))},"interactable:new":function(n){var i=n.interactable;i.events.getRect=function(r){return i.getRect(r)}},"interactable:set":function(n,i){var r=n.interactable,s=n.options;se(r.events.options,i.pointerEvents.defaults),se(r.events.options,s.pointerEvents||{})}}},Ca=Ea,Aa={id:"pointer-events",install:function(n){n.usePlugin(_a),n.usePlugin(Sa),n.usePlugin(Ca)}},Ta=Aa,Oa={id:"reflow",install:function(n){var i=n.Interactable;n.actions.phases.reflow=!0,i.prototype.reflow=function(r){return(function(s,p,h){for(var m=s.getAllElements(),x=h.window.Promise,k=x?[]:null,T=function(){var z=m[S],B=s.getRect(z);if(!B)return 1;var U,W=F(h.interactions.list,(function(ue){return ue.interacting()&&ue.interactable===s&&ue.element===z&&ue.prepared.name===p.name}));if(W)W.move(),k&&(U=W._reflowPromise||new x((function(ue){W._reflowResolve=ue})));else{var Z=oe(B),he=(function(ue){return{coords:ue,get page(){return this.coords.page},get client(){return this.coords.client},get timeStamp(){return this.coords.timeStamp},get pageX(){return this.coords.page.x},get pageY(){return this.coords.page.y},get clientX(){return this.coords.client.x},get clientY(){return this.coords.client.y},get pointerId(){return this.coords.pointerId},get target(){return this.coords.target},get type(){return this.coords.type},get pointerType(){return this.coords.pointerType},get buttons(){return this.coords.buttons},preventDefault:function(){}}})({page:{x:Z.x,y:Z.y},client:{x:Z.x,y:Z.y},timeStamp:h.now()});U=(function(ue,be,ze,Be,Ee){var De=ue.interactions.new({pointerType:"reflow"}),bt={interaction:De,event:Ee,pointer:Ee,eventTarget:ze,phase:"reflow"};De.interactable=be,De.element=ze,De.prevEvent=Ee,De.updatePointer(Ee,Ee,ze,!0),Ne(De.coords.delta),wt(De.prepared,Be),De._doPhase(bt);var et=ue.window,St=et.Promise,At=St?new St((function(Ot){De._reflowResolve=Ot})):void 0;return De._reflowPromise=At,De.start(Be,be,ze),De._interacting?(De.move(bt),De.end(Ee)):(De.stop(),De._reflowResolve()),De.removePointer(Ee,Ee),At})(h,s,z,p,he)}k&&k.push(U)},S=0;S<m.length&&!T();S++);return k&&x.all(k).then((function(){return s}))})(this,r,n)}},listeners:{"interactions:stop":function(n,i){var r=n.interaction;r.pointerType==="reflow"&&(r._reflowResolve&&r._reflowResolve(),(function(s,p){s.splice(s.indexOf(p),1)})(i.interactions.list,r))}}},Pa=Oa;if(vt.use(en),vt.use(sn),vt.use(Ta),vt.use(Ur),vt.use(xa),vt.use(Dr),vt.use(re),vt.use(Et),vt.use(Pa),vt.default=vt,(typeof Nt=="undefined"?"undefined":t(Nt))==="object"&&Nt)try{Nt.exports=vt}catch{}return vt.default=vt,vt}))});var Tr=Na(Sn(),1);function qn(e){return typeof e=="undefined"||e===null}function qa(e){return typeof e=="object"&&e!==null}function Ha(e){return Array.isArray(e)?e:qn(e)?[]:[e]}function ja(e,u){var t,a,o,l;if(u)for(l=Object.keys(u),t=0,a=l.length;t<a;t+=1)o=l[t],e[o]=u[o];return e}function Ka(e,u){var t="",a;for(a=0;a<u;a+=1)t+=e;return t}function $a(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var Wa=qn,Ya=qa,Ua=Ha,Va=Ka,Ga=$a,Xa=ja,pt={isNothing:Wa,isObject:Ya,toArray:Ua,repeat:Va,isNegativeZero:Ga,extend:Xa};function Hn(e,u){var t="",a=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(t+='in "'+e.mark.name+'" '),t+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!u&&e.mark.snippet&&(t+=`

`+e.mark.snippet),a+" "+t):a}function Zt(e,u){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=u,this.message=Hn(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Zt.prototype=Object.create(Error.prototype);Zt.prototype.constructor=Zt;Zt.prototype.toString=function(u){return this.name+": "+Hn(this,u)};var xt=Zt;function Mi(e,u,t,a,o){var l="",c="",d=Math.floor(o/2)-1;return a-u>d&&(l=" ... ",u=a-d+l.length),t-a>d&&(c=" ...",t=a+d-c.length),{str:l+e.slice(u,t).replace(/\t/g,"\u2192")+c,pos:a-u+l.length}}function Ii(e,u){return pt.repeat(" ",u-e.length)+e}function Ja(e,u){if(u=Object.create(u||null),!e.buffer)return null;u.maxLength||(u.maxLength=79),typeof u.indent!="number"&&(u.indent=1),typeof u.linesBefore!="number"&&(u.linesBefore=3),typeof u.linesAfter!="number"&&(u.linesAfter=2);for(var t=/\r?\n|\r|\0/g,a=[0],o=[],l,c=-1;l=t.exec(e.buffer);)o.push(l.index),a.push(l.index+l[0].length),e.position<=l.index&&c<0&&(c=a.length-2);c<0&&(c=a.length-1);var d="",f,v,y=Math.min(e.line+u.linesAfter,o.length).toString().length,_=u.maxLength-(u.indent+y+3);for(f=1;f<=u.linesBefore&&!(c-f<0);f++)v=Mi(e.buffer,a[c-f],o[c-f],e.position-(a[c]-a[c-f]),_),d=pt.repeat(" ",u.indent)+Ii((e.line-f+1).toString(),y)+" | "+v.str+`
`+d;for(v=Mi(e.buffer,a[c],o[c],e.position,_),d+=pt.repeat(" ",u.indent)+Ii((e.line+1).toString(),y)+" | "+v.str+`
`,d+=pt.repeat("-",u.indent+y+3+v.pos)+`^
`,f=1;f<=u.linesAfter&&!(c+f>=o.length);f++)v=Mi(e.buffer,a[c+f],o[c+f],e.position-(a[c]-a[c+f]),_),d+=pt.repeat(" ",u.indent)+Ii((e.line+f+1).toString(),y)+" | "+v.str+`
`;return d.replace(/\n$/,"")}var Qa=Ja,Za=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],eo=["scalar","sequence","mapping"];function to(e){var u={};return e!==null&&Object.keys(e).forEach(function(t){e[t].forEach(function(a){u[String(a)]=t})}),u}function io(e,u){if(u=u||{},Object.keys(u).forEach(function(t){if(Za.indexOf(t)===-1)throw new xt('Unknown option "'+t+'" is met in definition of "'+e+'" YAML type.')}),this.options=u,this.tag=e,this.kind=u.kind||null,this.resolve=u.resolve||function(){return!0},this.construct=u.construct||function(t){return t},this.instanceOf=u.instanceOf||null,this.predicate=u.predicate||null,this.represent=u.represent||null,this.representName=u.representName||null,this.defaultStyle=u.defaultStyle||null,this.multi=u.multi||!1,this.styleAliases=to(u.styleAliases||null),eo.indexOf(this.kind)===-1)throw new xt('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var ft=io;function En(e,u){var t=[];return e[u].forEach(function(a){var o=t.length;t.forEach(function(l,c){l.tag===a.tag&&l.kind===a.kind&&l.multi===a.multi&&(o=c)}),t[o]=a}),t}function no(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},u,t;function a(o){o.multi?(e.multi[o.kind].push(o),e.multi.fallback.push(o)):e[o.kind][o.tag]=e.fallback[o.tag]=o}for(u=0,t=arguments.length;u<t;u+=1)arguments[u].forEach(a);return e}function Ri(e){return this.extend(e)}Ri.prototype.extend=function(u){var t=[],a=[];if(u instanceof ft)a.push(u);else if(Array.isArray(u))a=a.concat(u);else if(u&&(Array.isArray(u.implicit)||Array.isArray(u.explicit)))u.implicit&&(t=t.concat(u.implicit)),u.explicit&&(a=a.concat(u.explicit));else throw new xt("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");t.forEach(function(l){if(!(l instanceof ft))throw new xt("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(l.loadKind&&l.loadKind!=="scalar")throw new xt("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(l.multi)throw new xt("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),a.forEach(function(l){if(!(l instanceof ft))throw new xt("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var o=Object.create(Ri.prototype);return o.implicit=(this.implicit||[]).concat(t),o.explicit=(this.explicit||[]).concat(a),o.compiledImplicit=En(o,"implicit"),o.compiledExplicit=En(o,"explicit"),o.compiledTypeMap=no(o.compiledImplicit,o.compiledExplicit),o};var jn=Ri,Kn=new ft("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),$n=new ft("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),Wn=new ft("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),Yn=new jn({explicit:[Kn,$n,Wn]});function ro(e){if(e===null)return!0;var u=e.length;return u===1&&e==="~"||u===4&&(e==="null"||e==="Null"||e==="NULL")}function ao(){return null}function oo(e){return e===null}var Un=new ft("tag:yaml.org,2002:null",{kind:"scalar",resolve:ro,construct:ao,predicate:oo,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function so(e){if(e===null)return!1;var u=e.length;return u===4&&(e==="true"||e==="True"||e==="TRUE")||u===5&&(e==="false"||e==="False"||e==="FALSE")}function co(e){return e==="true"||e==="True"||e==="TRUE"}function lo(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var Vn=new ft("tag:yaml.org,2002:bool",{kind:"scalar",resolve:so,construct:co,predicate:lo,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function po(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function uo(e){return 48<=e&&e<=55}function ho(e){return 48<=e&&e<=57}function fo(e){if(e===null)return!1;var u=e.length,t=0,a=!1,o;if(!u)return!1;if(o=e[t],(o==="-"||o==="+")&&(o=e[++t]),o==="0"){if(t+1===u)return!0;if(o=e[++t],o==="b"){for(t++;t<u;t++)if(o=e[t],o!=="_"){if(o!=="0"&&o!=="1")return!1;a=!0}return a&&o!=="_"}if(o==="x"){for(t++;t<u;t++)if(o=e[t],o!=="_"){if(!po(e.charCodeAt(t)))return!1;a=!0}return a&&o!=="_"}if(o==="o"){for(t++;t<u;t++)if(o=e[t],o!=="_"){if(!uo(e.charCodeAt(t)))return!1;a=!0}return a&&o!=="_"}}if(o==="_")return!1;for(;t<u;t++)if(o=e[t],o!=="_"){if(!ho(e.charCodeAt(t)))return!1;a=!0}return!(!a||o==="_")}function go(e){var u=e,t=1,a;if(u.indexOf("_")!==-1&&(u=u.replace(/_/g,"")),a=u[0],(a==="-"||a==="+")&&(a==="-"&&(t=-1),u=u.slice(1),a=u[0]),u==="0")return 0;if(a==="0"){if(u[1]==="b")return t*parseInt(u.slice(2),2);if(u[1]==="x")return t*parseInt(u.slice(2),16);if(u[1]==="o")return t*parseInt(u.slice(2),8)}return t*parseInt(u,10)}function mo(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!pt.isNegativeZero(e)}var Gn=new ft("tag:yaml.org,2002:int",{kind:"scalar",resolve:fo,construct:go,predicate:mo,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),yo=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function vo(e){return!(e===null||!yo.test(e)||e[e.length-1]==="_")}function bo(e){var u,t;return u=e.replace(/_/g,"").toLowerCase(),t=u[0]==="-"?-1:1,"+-".indexOf(u[0])>=0&&(u=u.slice(1)),u===".inf"?t===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:u===".nan"?NaN:t*parseFloat(u,10)}var xo=/^[-+]?[0-9]+e/;function _o(e,u){var t;if(isNaN(e))switch(u){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(u){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(u){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(pt.isNegativeZero(e))return"-0.0";return t=e.toString(10),xo.test(t)?t.replace("e",".e"):t}function wo(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||pt.isNegativeZero(e))}var Xn=new ft("tag:yaml.org,2002:float",{kind:"scalar",resolve:vo,construct:bo,predicate:wo,represent:_o,defaultStyle:"lowercase"}),Jn=Yn.extend({implicit:[Un,Vn,Gn,Xn]}),Qn=Jn,Zn=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),er=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function ko(e){return e===null?!1:Zn.exec(e)!==null||er.exec(e)!==null}function So(e){var u,t,a,o,l,c,d,f=0,v=null,y,_,g;if(u=Zn.exec(e),u===null&&(u=er.exec(e)),u===null)throw new Error("Date resolve error");if(t=+u[1],a=+u[2]-1,o=+u[3],!u[4])return new Date(Date.UTC(t,a,o));if(l=+u[4],c=+u[5],d=+u[6],u[7]){for(f=u[7].slice(0,3);f.length<3;)f+="0";f=+f}return u[9]&&(y=+u[10],_=+(u[11]||0),v=(y*60+_)*6e4,u[9]==="-"&&(v=-v)),g=new Date(Date.UTC(t,a,o,l,c,d,f)),v&&g.setTime(g.getTime()-v),g}function Eo(e){return e.toISOString()}var tr=new ft("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:ko,construct:So,instanceOf:Date,represent:Eo});function Co(e){return e==="<<"||e===null}var ir=new ft("tag:yaml.org,2002:merge",{kind:"scalar",resolve:Co}),Hi=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function Ao(e){if(e===null)return!1;var u,t,a=0,o=e.length,l=Hi;for(t=0;t<o;t++)if(u=l.indexOf(e.charAt(t)),!(u>64)){if(u<0)return!1;a+=6}return a%8===0}function To(e){var u,t,a=e.replace(/[\r\n=]/g,""),o=a.length,l=Hi,c=0,d=[];for(u=0;u<o;u++)u%4===0&&u&&(d.push(c>>16&255),d.push(c>>8&255),d.push(c&255)),c=c<<6|l.indexOf(a.charAt(u));return t=o%4*6,t===0?(d.push(c>>16&255),d.push(c>>8&255),d.push(c&255)):t===18?(d.push(c>>10&255),d.push(c>>2&255)):t===12&&d.push(c>>4&255),new Uint8Array(d)}function Oo(e){var u="",t=0,a,o,l=e.length,c=Hi;for(a=0;a<l;a++)a%3===0&&a&&(u+=c[t>>18&63],u+=c[t>>12&63],u+=c[t>>6&63],u+=c[t&63]),t=(t<<8)+e[a];return o=l%3,o===0?(u+=c[t>>18&63],u+=c[t>>12&63],u+=c[t>>6&63],u+=c[t&63]):o===2?(u+=c[t>>10&63],u+=c[t>>4&63],u+=c[t<<2&63],u+=c[64]):o===1&&(u+=c[t>>2&63],u+=c[t<<4&63],u+=c[64],u+=c[64]),u}function Po(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var nr=new ft("tag:yaml.org,2002:binary",{kind:"scalar",resolve:Ao,construct:To,predicate:Po,represent:Oo}),Lo=Object.prototype.hasOwnProperty,zo=Object.prototype.toString;function Mo(e){if(e===null)return!0;var u=[],t,a,o,l,c,d=e;for(t=0,a=d.length;t<a;t+=1){if(o=d[t],c=!1,zo.call(o)!=="[object Object]")return!1;for(l in o)if(Lo.call(o,l))if(!c)c=!0;else return!1;if(!c)return!1;if(u.indexOf(l)===-1)u.push(l);else return!1}return!0}function Io(e){return e!==null?e:[]}var rr=new ft("tag:yaml.org,2002:omap",{kind:"sequence",resolve:Mo,construct:Io}),Do=Object.prototype.toString;function Ro(e){if(e===null)return!0;var u,t,a,o,l,c=e;for(l=new Array(c.length),u=0,t=c.length;u<t;u+=1){if(a=c[u],Do.call(a)!=="[object Object]"||(o=Object.keys(a),o.length!==1))return!1;l[u]=[o[0],a[o[0]]]}return!0}function Fo(e){if(e===null)return[];var u,t,a,o,l,c=e;for(l=new Array(c.length),u=0,t=c.length;u<t;u+=1)a=c[u],o=Object.keys(a),l[u]=[o[0],a[o[0]]];return l}var ar=new ft("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:Ro,construct:Fo}),Bo=Object.prototype.hasOwnProperty;function No(e){if(e===null)return!0;var u,t=e;for(u in t)if(Bo.call(t,u)&&t[u]!==null)return!1;return!0}function qo(e){return e!==null?e:{}}var or=new ft("tag:yaml.org,2002:set",{kind:"mapping",resolve:No,construct:qo}),ji=Qn.extend({implicit:[tr,ir],explicit:[nr,rr,ar,or]}),Dt=Object.prototype.hasOwnProperty,hi=1,sr=2,cr=3,fi=4,Di=1,Ho=2,Cn=3,jo=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,Ko=/[\x85\u2028\u2029]/,$o=/[,\[\]\{\}]/,lr=/^(?:!|!!|![a-z\-]+!)$/i,dr=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function An(e){return Object.prototype.toString.call(e)}function Tt(e){return e===10||e===13}function Ht(e){return e===9||e===32}function kt(e){return e===9||e===32||e===10||e===13}function $t(e){return e===44||e===91||e===93||e===123||e===125}function Wo(e){var u;return 48<=e&&e<=57?e-48:(u=e|32,97<=u&&u<=102?u-97+10:-1)}function Yo(e){return e===120?2:e===117?4:e===85?8:0}function Uo(e){return 48<=e&&e<=57?e-48:-1}function Tn(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"\x85":e===95?"\xA0":e===76?"\u2028":e===80?"\u2029":""}function Vo(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}var pr=new Array(256),ur=new Array(256);for(qt=0;qt<256;qt++)pr[qt]=Tn(qt)?1:0,ur[qt]=Tn(qt);var qt;function Go(e,u){this.input=e,this.filename=u.filename||null,this.schema=u.schema||ji,this.onWarning=u.onWarning||null,this.legacy=u.legacy||!1,this.json=u.json||!1,this.listener=u.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function hr(e,u){var t={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return t.snippet=Qa(t),new xt(u,t)}function xe(e,u){throw hr(e,u)}function gi(e,u){e.onWarning&&e.onWarning.call(null,hr(e,u))}var On={YAML:function(u,t,a){var o,l,c;u.version!==null&&xe(u,"duplication of %YAML directive"),a.length!==1&&xe(u,"YAML directive accepts exactly one argument"),o=/^([0-9]+)\.([0-9]+)$/.exec(a[0]),o===null&&xe(u,"ill-formed argument of the YAML directive"),l=parseInt(o[1],10),c=parseInt(o[2],10),l!==1&&xe(u,"unacceptable YAML version of the document"),u.version=a[0],u.checkLineBreaks=c<2,c!==1&&c!==2&&gi(u,"unsupported YAML version of the document")},TAG:function(u,t,a){var o,l;a.length!==2&&xe(u,"TAG directive accepts exactly two arguments"),o=a[0],l=a[1],lr.test(o)||xe(u,"ill-formed tag handle (first argument) of the TAG directive"),Dt.call(u.tagMap,o)&&xe(u,'there is a previously declared suffix for "'+o+'" tag handle'),dr.test(l)||xe(u,"ill-formed tag prefix (second argument) of the TAG directive");try{l=decodeURIComponent(l)}catch{xe(u,"tag prefix is malformed: "+l)}u.tagMap[o]=l}};function It(e,u,t,a){var o,l,c,d;if(u<t){if(d=e.input.slice(u,t),a)for(o=0,l=d.length;o<l;o+=1)c=d.charCodeAt(o),c===9||32<=c&&c<=1114111||xe(e,"expected valid JSON character");else jo.test(d)&&xe(e,"the stream contains non-printable characters");e.result+=d}}function Pn(e,u,t,a){var o,l,c,d;for(pt.isObject(t)||xe(e,"cannot merge mappings; the provided source object is unacceptable"),o=Object.keys(t),c=0,d=o.length;c<d;c+=1)l=o[c],Dt.call(u,l)||(u[l]=t[l],a[l]=!0)}function Wt(e,u,t,a,o,l,c,d,f){var v,y;if(Array.isArray(o))for(o=Array.prototype.slice.call(o),v=0,y=o.length;v<y;v+=1)Array.isArray(o[v])&&xe(e,"nested arrays are not supported inside keys"),typeof o=="object"&&An(o[v])==="[object Object]"&&(o[v]="[object Object]");if(typeof o=="object"&&An(o)==="[object Object]"&&(o="[object Object]"),o=String(o),u===null&&(u={}),a==="tag:yaml.org,2002:merge")if(Array.isArray(l))for(v=0,y=l.length;v<y;v+=1)Pn(e,u,l[v],t);else Pn(e,u,l,t);else!e.json&&!Dt.call(t,o)&&Dt.call(u,o)&&(e.line=c||e.line,e.lineStart=d||e.lineStart,e.position=f||e.position,xe(e,"duplicated mapping key")),o==="__proto__"?Object.defineProperty(u,o,{configurable:!0,enumerable:!0,writable:!0,value:l}):u[o]=l,delete t[o];return u}function Ki(e){var u;u=e.input.charCodeAt(e.position),u===10?e.position++:u===13?(e.position++,e.input.charCodeAt(e.position)===10&&e.position++):xe(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}function ct(e,u,t){for(var a=0,o=e.input.charCodeAt(e.position);o!==0;){for(;Ht(o);)o===9&&e.firstTabInLine===-1&&(e.firstTabInLine=e.position),o=e.input.charCodeAt(++e.position);if(u&&o===35)do o=e.input.charCodeAt(++e.position);while(o!==10&&o!==13&&o!==0);if(Tt(o))for(Ki(e),o=e.input.charCodeAt(e.position),a++,e.lineIndent=0;o===32;)e.lineIndent++,o=e.input.charCodeAt(++e.position);else break}return t!==-1&&a!==0&&e.lineIndent<t&&gi(e,"deficient indentation"),a}function vi(e){var u=e.position,t;return t=e.input.charCodeAt(u),!!((t===45||t===46)&&t===e.input.charCodeAt(u+1)&&t===e.input.charCodeAt(u+2)&&(u+=3,t=e.input.charCodeAt(u),t===0||kt(t)))}function $i(e,u){u===1?e.result+=" ":u>1&&(e.result+=pt.repeat(`
`,u-1))}function Xo(e,u,t){var a,o,l,c,d,f,v,y,_=e.kind,g=e.result,w;if(w=e.input.charCodeAt(e.position),kt(w)||$t(w)||w===35||w===38||w===42||w===33||w===124||w===62||w===39||w===34||w===37||w===64||w===96||(w===63||w===45)&&(o=e.input.charCodeAt(e.position+1),kt(o)||t&&$t(o)))return!1;for(e.kind="scalar",e.result="",l=c=e.position,d=!1;w!==0;){if(w===58){if(o=e.input.charCodeAt(e.position+1),kt(o)||t&&$t(o))break}else if(w===35){if(a=e.input.charCodeAt(e.position-1),kt(a))break}else{if(e.position===e.lineStart&&vi(e)||t&&$t(w))break;if(Tt(w))if(f=e.line,v=e.lineStart,y=e.lineIndent,ct(e,!1,-1),e.lineIndent>=u){d=!0,w=e.input.charCodeAt(e.position);continue}else{e.position=c,e.line=f,e.lineStart=v,e.lineIndent=y;break}}d&&(It(e,l,c,!1),$i(e,e.line-f),l=c=e.position,d=!1),Ht(w)||(c=e.position+1),w=e.input.charCodeAt(++e.position)}return It(e,l,c,!1),e.result?!0:(e.kind=_,e.result=g,!1)}function Jo(e,u){var t,a,o;if(t=e.input.charCodeAt(e.position),t!==39)return!1;for(e.kind="scalar",e.result="",e.position++,a=o=e.position;(t=e.input.charCodeAt(e.position))!==0;)if(t===39)if(It(e,a,e.position,!0),t=e.input.charCodeAt(++e.position),t===39)a=e.position,e.position++,o=e.position;else return!0;else Tt(t)?(It(e,a,o,!0),$i(e,ct(e,!1,u)),a=o=e.position):e.position===e.lineStart&&vi(e)?xe(e,"unexpected end of the document within a single quoted scalar"):(e.position++,o=e.position);xe(e,"unexpected end of the stream within a single quoted scalar")}function Qo(e,u){var t,a,o,l,c,d;if(d=e.input.charCodeAt(e.position),d!==34)return!1;for(e.kind="scalar",e.result="",e.position++,t=a=e.position;(d=e.input.charCodeAt(e.position))!==0;){if(d===34)return It(e,t,e.position,!0),e.position++,!0;if(d===92){if(It(e,t,e.position,!0),d=e.input.charCodeAt(++e.position),Tt(d))ct(e,!1,u);else if(d<256&&pr[d])e.result+=ur[d],e.position++;else if((c=Yo(d))>0){for(o=c,l=0;o>0;o--)d=e.input.charCodeAt(++e.position),(c=Wo(d))>=0?l=(l<<4)+c:xe(e,"expected hexadecimal character");e.result+=Vo(l),e.position++}else xe(e,"unknown escape sequence");t=a=e.position}else Tt(d)?(It(e,t,a,!0),$i(e,ct(e,!1,u)),t=a=e.position):e.position===e.lineStart&&vi(e)?xe(e,"unexpected end of the document within a double quoted scalar"):(e.position++,a=e.position)}xe(e,"unexpected end of the stream within a double quoted scalar")}function Zo(e,u){var t=!0,a,o,l,c=e.tag,d,f=e.anchor,v,y,_,g,w,L=Object.create(null),E,P,D,C;if(C=e.input.charCodeAt(e.position),C===91)y=93,w=!1,d=[];else if(C===123)y=125,w=!0,d={};else return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=d),C=e.input.charCodeAt(++e.position);C!==0;){if(ct(e,!0,u),C=e.input.charCodeAt(e.position),C===y)return e.position++,e.tag=c,e.anchor=f,e.kind=w?"mapping":"sequence",e.result=d,!0;t?C===44&&xe(e,"expected the node content, but found ','"):xe(e,"missed comma between flow collection entries"),P=E=D=null,_=g=!1,C===63&&(v=e.input.charCodeAt(e.position+1),kt(v)&&(_=g=!0,e.position++,ct(e,!0,u))),a=e.line,o=e.lineStart,l=e.position,Yt(e,u,hi,!1,!0),P=e.tag,E=e.result,ct(e,!0,u),C=e.input.charCodeAt(e.position),(g||e.line===a)&&C===58&&(_=!0,C=e.input.charCodeAt(++e.position),ct(e,!0,u),Yt(e,u,hi,!1,!0),D=e.result),w?Wt(e,d,L,P,E,D,a,o,l):_?d.push(Wt(e,null,L,P,E,D,a,o,l)):d.push(E),ct(e,!0,u),C=e.input.charCodeAt(e.position),C===44?(t=!0,C=e.input.charCodeAt(++e.position)):t=!1}xe(e,"unexpected end of the stream within a flow collection")}function es(e,u){var t,a,o=Di,l=!1,c=!1,d=u,f=0,v=!1,y,_;if(_=e.input.charCodeAt(e.position),_===124)a=!1;else if(_===62)a=!0;else return!1;for(e.kind="scalar",e.result="";_!==0;)if(_=e.input.charCodeAt(++e.position),_===43||_===45)Di===o?o=_===43?Cn:Ho:xe(e,"repeat of a chomping mode identifier");else if((y=Uo(_))>=0)y===0?xe(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):c?xe(e,"repeat of an indentation width identifier"):(d=u+y-1,c=!0);else break;if(Ht(_)){do _=e.input.charCodeAt(++e.position);while(Ht(_));if(_===35)do _=e.input.charCodeAt(++e.position);while(!Tt(_)&&_!==0)}for(;_!==0;){for(Ki(e),e.lineIndent=0,_=e.input.charCodeAt(e.position);(!c||e.lineIndent<d)&&_===32;)e.lineIndent++,_=e.input.charCodeAt(++e.position);if(!c&&e.lineIndent>d&&(d=e.lineIndent),Tt(_)){f++;continue}if(e.lineIndent<d){o===Cn?e.result+=pt.repeat(`
`,l?1+f:f):o===Di&&l&&(e.result+=`
`);break}for(a?Ht(_)?(v=!0,e.result+=pt.repeat(`
`,l?1+f:f)):v?(v=!1,e.result+=pt.repeat(`
`,f+1)):f===0?l&&(e.result+=" "):e.result+=pt.repeat(`
`,f):e.result+=pt.repeat(`
`,l?1+f:f),l=!0,c=!0,f=0,t=e.position;!Tt(_)&&_!==0;)_=e.input.charCodeAt(++e.position);It(e,t,e.position,!1)}return!0}function Ln(e,u){var t,a=e.tag,o=e.anchor,l=[],c,d=!1,f;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=l),f=e.input.charCodeAt(e.position);f!==0&&(e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,xe(e,"tab characters must not be used in indentation")),!(f!==45||(c=e.input.charCodeAt(e.position+1),!kt(c))));){if(d=!0,e.position++,ct(e,!0,-1)&&e.lineIndent<=u){l.push(null),f=e.input.charCodeAt(e.position);continue}if(t=e.line,Yt(e,u,cr,!1,!0),l.push(e.result),ct(e,!0,-1),f=e.input.charCodeAt(e.position),(e.line===t||e.lineIndent>u)&&f!==0)xe(e,"bad indentation of a sequence entry");else if(e.lineIndent<u)break}return d?(e.tag=a,e.anchor=o,e.kind="sequence",e.result=l,!0):!1}function ts(e,u,t){var a,o,l,c,d,f,v=e.tag,y=e.anchor,_={},g=Object.create(null),w=null,L=null,E=null,P=!1,D=!1,C;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=_),C=e.input.charCodeAt(e.position);C!==0;){if(!P&&e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,xe(e,"tab characters must not be used in indentation")),a=e.input.charCodeAt(e.position+1),l=e.line,(C===63||C===58)&&kt(a))C===63?(P&&(Wt(e,_,g,w,L,null,c,d,f),w=L=E=null),D=!0,P=!0,o=!0):P?(P=!1,o=!0):xe(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,C=a;else{if(c=e.line,d=e.lineStart,f=e.position,!Yt(e,t,sr,!1,!0))break;if(e.line===l){for(C=e.input.charCodeAt(e.position);Ht(C);)C=e.input.charCodeAt(++e.position);if(C===58)C=e.input.charCodeAt(++e.position),kt(C)||xe(e,"a whitespace character is expected after the key-value separator within a block mapping"),P&&(Wt(e,_,g,w,L,null,c,d,f),w=L=E=null),D=!0,P=!1,o=!1,w=e.tag,L=e.result;else if(D)xe(e,"can not read an implicit mapping pair; a colon is missed");else return e.tag=v,e.anchor=y,!0}else if(D)xe(e,"can not read a block mapping entry; a multiline key may not be an implicit key");else return e.tag=v,e.anchor=y,!0}if((e.line===l||e.lineIndent>u)&&(P&&(c=e.line,d=e.lineStart,f=e.position),Yt(e,u,fi,!0,o)&&(P?L=e.result:E=e.result),P||(Wt(e,_,g,w,L,E,c,d,f),w=L=E=null),ct(e,!0,-1),C=e.input.charCodeAt(e.position)),(e.line===l||e.lineIndent>u)&&C!==0)xe(e,"bad indentation of a mapping entry");else if(e.lineIndent<u)break}return P&&Wt(e,_,g,w,L,null,c,d,f),D&&(e.tag=v,e.anchor=y,e.kind="mapping",e.result=_),D}function is(e){var u,t=!1,a=!1,o,l,c;if(c=e.input.charCodeAt(e.position),c!==33)return!1;if(e.tag!==null&&xe(e,"duplication of a tag property"),c=e.input.charCodeAt(++e.position),c===60?(t=!0,c=e.input.charCodeAt(++e.position)):c===33?(a=!0,o="!!",c=e.input.charCodeAt(++e.position)):o="!",u=e.position,t){do c=e.input.charCodeAt(++e.position);while(c!==0&&c!==62);e.position<e.length?(l=e.input.slice(u,e.position),c=e.input.charCodeAt(++e.position)):xe(e,"unexpected end of the stream within a verbatim tag")}else{for(;c!==0&&!kt(c);)c===33&&(a?xe(e,"tag suffix cannot contain exclamation marks"):(o=e.input.slice(u-1,e.position+1),lr.test(o)||xe(e,"named tag handle cannot contain such characters"),a=!0,u=e.position+1)),c=e.input.charCodeAt(++e.position);l=e.input.slice(u,e.position),$o.test(l)&&xe(e,"tag suffix cannot contain flow indicator characters")}l&&!dr.test(l)&&xe(e,"tag name cannot contain such characters: "+l);try{l=decodeURIComponent(l)}catch{xe(e,"tag name is malformed: "+l)}return t?e.tag=l:Dt.call(e.tagMap,o)?e.tag=e.tagMap[o]+l:o==="!"?e.tag="!"+l:o==="!!"?e.tag="tag:yaml.org,2002:"+l:xe(e,'undeclared tag handle "'+o+'"'),!0}function ns(e){var u,t;if(t=e.input.charCodeAt(e.position),t!==38)return!1;for(e.anchor!==null&&xe(e,"duplication of an anchor property"),t=e.input.charCodeAt(++e.position),u=e.position;t!==0&&!kt(t)&&!$t(t);)t=e.input.charCodeAt(++e.position);return e.position===u&&xe(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(u,e.position),!0}function rs(e){var u,t,a;if(a=e.input.charCodeAt(e.position),a!==42)return!1;for(a=e.input.charCodeAt(++e.position),u=e.position;a!==0&&!kt(a)&&!$t(a);)a=e.input.charCodeAt(++e.position);return e.position===u&&xe(e,"name of an alias node must contain at least one character"),t=e.input.slice(u,e.position),Dt.call(e.anchorMap,t)||xe(e,'unidentified alias "'+t+'"'),e.result=e.anchorMap[t],ct(e,!0,-1),!0}function Yt(e,u,t,a,o){var l,c,d,f=1,v=!1,y=!1,_,g,w,L,E,P;if(e.listener!==null&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,l=c=d=fi===t||cr===t,a&&ct(e,!0,-1)&&(v=!0,e.lineIndent>u?f=1:e.lineIndent===u?f=0:e.lineIndent<u&&(f=-1)),f===1)for(;is(e)||ns(e);)ct(e,!0,-1)?(v=!0,d=l,e.lineIndent>u?f=1:e.lineIndent===u?f=0:e.lineIndent<u&&(f=-1)):d=!1;if(d&&(d=v||o),(f===1||fi===t)&&(hi===t||sr===t?E=u:E=u+1,P=e.position-e.lineStart,f===1?d&&(Ln(e,P)||ts(e,P,E))||Zo(e,E)?y=!0:(c&&es(e,E)||Jo(e,E)||Qo(e,E)?y=!0:rs(e)?(y=!0,(e.tag!==null||e.anchor!==null)&&xe(e,"alias node should not have any properties")):Xo(e,E,hi===t)&&(y=!0,e.tag===null&&(e.tag="?")),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):f===0&&(y=d&&Ln(e,P))),e.tag===null)e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);else if(e.tag==="?"){for(e.result!==null&&e.kind!=="scalar"&&xe(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),_=0,g=e.implicitTypes.length;_<g;_+=1)if(L=e.implicitTypes[_],L.resolve(e.result)){e.result=L.construct(e.result),e.tag=L.tag,e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);break}}else if(e.tag!=="!"){if(Dt.call(e.typeMap[e.kind||"fallback"],e.tag))L=e.typeMap[e.kind||"fallback"][e.tag];else for(L=null,w=e.typeMap.multi[e.kind||"fallback"],_=0,g=w.length;_<g;_+=1)if(e.tag.slice(0,w[_].tag.length)===w[_].tag){L=w[_];break}L||xe(e,"unknown tag !<"+e.tag+">"),e.result!==null&&L.kind!==e.kind&&xe(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+L.kind+'", not "'+e.kind+'"'),L.resolve(e.result,e.tag)?(e.result=L.construct(e.result,e.tag),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):xe(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")}return e.listener!==null&&e.listener("close",e),e.tag!==null||e.anchor!==null||y}function as(e){var u=e.position,t,a,o,l=!1,c;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);(c=e.input.charCodeAt(e.position))!==0&&(ct(e,!0,-1),c=e.input.charCodeAt(e.position),!(e.lineIndent>0||c!==37));){for(l=!0,c=e.input.charCodeAt(++e.position),t=e.position;c!==0&&!kt(c);)c=e.input.charCodeAt(++e.position);for(a=e.input.slice(t,e.position),o=[],a.length<1&&xe(e,"directive name must not be less than one character in length");c!==0;){for(;Ht(c);)c=e.input.charCodeAt(++e.position);if(c===35){do c=e.input.charCodeAt(++e.position);while(c!==0&&!Tt(c));break}if(Tt(c))break;for(t=e.position;c!==0&&!kt(c);)c=e.input.charCodeAt(++e.position);o.push(e.input.slice(t,e.position))}c!==0&&Ki(e),Dt.call(On,a)?On[a](e,a,o):gi(e,'unknown document directive "'+a+'"')}if(ct(e,!0,-1),e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45?(e.position+=3,ct(e,!0,-1)):l&&xe(e,"directives end mark is expected"),Yt(e,e.lineIndent-1,fi,!1,!0),ct(e,!0,-1),e.checkLineBreaks&&Ko.test(e.input.slice(u,e.position))&&gi(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&vi(e)){e.input.charCodeAt(e.position)===46&&(e.position+=3,ct(e,!0,-1));return}if(e.position<e.length-1)xe(e,"end of the stream or a document separator is expected");else return}function fr(e,u){e=String(e),u=u||{},e.length!==0&&(e.charCodeAt(e.length-1)!==10&&e.charCodeAt(e.length-1)!==13&&(e+=`
`),e.charCodeAt(0)===65279&&(e=e.slice(1)));var t=new Go(e,u),a=e.indexOf("\0");for(a!==-1&&(t.position=a,xe(t,"null byte is not allowed in input")),t.input+="\0";t.input.charCodeAt(t.position)===32;)t.lineIndent+=1,t.position+=1;for(;t.position<t.length-1;)as(t);return t.documents}function os(e,u,t){u!==null&&typeof u=="object"&&typeof t=="undefined"&&(t=u,u=null);var a=fr(e,t);if(typeof u!="function")return a;for(var o=0,l=a.length;o<l;o+=1)u(a[o])}function ss(e,u){var t=fr(e,u);if(t.length!==0){if(t.length===1)return t[0];throw new xt("expected a single document in the stream, but found more")}}var cs=os,ls=ss,gr={loadAll:cs,load:ls},mr=Object.prototype.toString,yr=Object.prototype.hasOwnProperty,Wi=65279,ds=9,ei=10,ps=13,us=32,hs=33,fs=34,Fi=35,gs=37,ms=38,ys=39,vs=42,vr=44,bs=45,mi=58,xs=61,_s=62,ws=63,ks=64,br=91,xr=93,Ss=96,_r=123,Es=124,wr=125,mt={};mt[0]="\\0";mt[7]="\\a";mt[8]="\\b";mt[9]="\\t";mt[10]="\\n";mt[11]="\\v";mt[12]="\\f";mt[13]="\\r";mt[27]="\\e";mt[34]='\\"';mt[92]="\\\\";mt[133]="\\N";mt[160]="\\_";mt[8232]="\\L";mt[8233]="\\P";var Cs=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],As=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function Ts(e,u){var t,a,o,l,c,d,f;if(u===null)return{};for(t={},a=Object.keys(u),o=0,l=a.length;o<l;o+=1)c=a[o],d=String(u[c]),c.slice(0,2)==="!!"&&(c="tag:yaml.org,2002:"+c.slice(2)),f=e.compiledTypeMap.fallback[c],f&&yr.call(f.styleAliases,d)&&(d=f.styleAliases[d]),t[c]=d;return t}function Os(e){var u,t,a;if(u=e.toString(16).toUpperCase(),e<=255)t="x",a=2;else if(e<=65535)t="u",a=4;else if(e<=4294967295)t="U",a=8;else throw new xt("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+t+pt.repeat("0",a-u.length)+u}var Ps=1,ti=2;function Ls(e){this.schema=e.schema||ji,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=pt.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=Ts(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.quotingType=e.quotingType==='"'?ti:Ps,this.forceQuotes=e.forceQuotes||!1,this.replacer=typeof e.replacer=="function"?e.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function zn(e,u){for(var t=pt.repeat(" ",u),a=0,o=-1,l="",c,d=e.length;a<d;)o=e.indexOf(`
`,a),o===-1?(c=e.slice(a),a=d):(c=e.slice(a,o+1),a=o+1),c.length&&c!==`
`&&(l+=t),l+=c;return l}function Bi(e,u){return`
`+pt.repeat(" ",e.indent*u)}function zs(e,u){var t,a,o;for(t=0,a=e.implicitTypes.length;t<a;t+=1)if(o=e.implicitTypes[t],o.resolve(u))return!0;return!1}function yi(e){return e===us||e===ds}function ii(e){return 32<=e&&e<=126||161<=e&&e<=55295&&e!==8232&&e!==8233||57344<=e&&e<=65533&&e!==Wi||65536<=e&&e<=1114111}function Mn(e){return ii(e)&&e!==Wi&&e!==ps&&e!==ei}function In(e,u,t){var a=Mn(e),o=a&&!yi(e);return(t?a:a&&e!==vr&&e!==br&&e!==xr&&e!==_r&&e!==wr)&&e!==Fi&&!(u===mi&&!o)||Mn(u)&&!yi(u)&&e===Fi||u===mi&&o}function Ms(e){return ii(e)&&e!==Wi&&!yi(e)&&e!==bs&&e!==ws&&e!==mi&&e!==vr&&e!==br&&e!==xr&&e!==_r&&e!==wr&&e!==Fi&&e!==ms&&e!==vs&&e!==hs&&e!==Es&&e!==xs&&e!==_s&&e!==ys&&e!==fs&&e!==gs&&e!==ks&&e!==Ss}function Is(e){return!yi(e)&&e!==mi}function Qt(e,u){var t=e.charCodeAt(u),a;return t>=55296&&t<=56319&&u+1<e.length&&(a=e.charCodeAt(u+1),a>=56320&&a<=57343)?(t-55296)*1024+a-56320+65536:t}function kr(e){var u=/^\n* /;return u.test(e)}var Sr=1,Ni=2,Er=3,Cr=4,Kt=5;function Ds(e,u,t,a,o,l,c,d){var f,v=0,y=null,_=!1,g=!1,w=a!==-1,L=-1,E=Ms(Qt(e,0))&&Is(Qt(e,e.length-1));if(u||c)for(f=0;f<e.length;v>=65536?f+=2:f++){if(v=Qt(e,f),!ii(v))return Kt;E=E&&In(v,y,d),y=v}else{for(f=0;f<e.length;v>=65536?f+=2:f++){if(v=Qt(e,f),v===ei)_=!0,w&&(g=g||f-L-1>a&&e[L+1]!==" ",L=f);else if(!ii(v))return Kt;E=E&&In(v,y,d),y=v}g=g||w&&f-L-1>a&&e[L+1]!==" "}return!_&&!g?E&&!c&&!o(e)?Sr:l===ti?Kt:Ni:t>9&&kr(e)?Kt:c?l===ti?Kt:Ni:g?Cr:Er}function Rs(e,u,t,a,o){e.dump=(function(){if(u.length===0)return e.quotingType===ti?'""':"''";if(!e.noCompatMode&&(Cs.indexOf(u)!==-1||As.test(u)))return e.quotingType===ti?'"'+u+'"':"'"+u+"'";var l=e.indent*Math.max(1,t),c=e.lineWidth===-1?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-l),d=a||e.flowLevel>-1&&t>=e.flowLevel;function f(v){return zs(e,v)}switch(Ds(u,d,e.indent,c,f,e.quotingType,e.forceQuotes&&!a,o)){case Sr:return u;case Ni:return"'"+u.replace(/'/g,"''")+"'";case Er:return"|"+Dn(u,e.indent)+Rn(zn(u,l));case Cr:return">"+Dn(u,e.indent)+Rn(zn(Fs(u,c),l));case Kt:return'"'+Bs(u)+'"';default:throw new xt("impossible error: invalid scalar style")}})()}function Dn(e,u){var t=kr(e)?String(u):"",a=e[e.length-1]===`
`,o=a&&(e[e.length-2]===`
`||e===`
`),l=o?"+":a?"":"-";return t+l+`
`}function Rn(e){return e[e.length-1]===`
`?e.slice(0,-1):e}function Fs(e,u){for(var t=/(\n+)([^\n]*)/g,a=(function(){var v=e.indexOf(`
`);return v=v!==-1?v:e.length,t.lastIndex=v,Fn(e.slice(0,v),u)})(),o=e[0]===`
`||e[0]===" ",l,c;c=t.exec(e);){var d=c[1],f=c[2];l=f[0]===" ",a+=d+(!o&&!l&&f!==""?`
`:"")+Fn(f,u),o=l}return a}function Fn(e,u){if(e===""||e[0]===" ")return e;for(var t=/ [^ ]/g,a,o=0,l,c=0,d=0,f="";a=t.exec(e);)d=a.index,d-o>u&&(l=c>o?c:d,f+=`
`+e.slice(o,l),o=l+1),c=d;return f+=`
`,e.length-o>u&&c>o?f+=e.slice(o,c)+`
`+e.slice(c+1):f+=e.slice(o),f.slice(1)}function Bs(e){for(var u="",t=0,a,o=0;o<e.length;t>=65536?o+=2:o++)t=Qt(e,o),a=mt[t],!a&&ii(t)?(u+=e[o],t>=65536&&(u+=e[o+1])):u+=a||Os(t);return u}function Ns(e,u,t){var a="",o=e.tag,l,c,d;for(l=0,c=t.length;l<c;l+=1)d=t[l],e.replacer&&(d=e.replacer.call(t,String(l),d)),(Pt(e,u,d,!1,!1)||typeof d=="undefined"&&Pt(e,u,null,!1,!1))&&(a!==""&&(a+=","+(e.condenseFlow?"":" ")),a+=e.dump);e.tag=o,e.dump="["+a+"]"}function Bn(e,u,t,a){var o="",l=e.tag,c,d,f;for(c=0,d=t.length;c<d;c+=1)f=t[c],e.replacer&&(f=e.replacer.call(t,String(c),f)),(Pt(e,u+1,f,!0,!0,!1,!0)||typeof f=="undefined"&&Pt(e,u+1,null,!0,!0,!1,!0))&&((!a||o!=="")&&(o+=Bi(e,u)),e.dump&&ei===e.dump.charCodeAt(0)?o+="-":o+="- ",o+=e.dump);e.tag=l,e.dump=o||"[]"}function qs(e,u,t){var a="",o=e.tag,l=Object.keys(t),c,d,f,v,y;for(c=0,d=l.length;c<d;c+=1)y="",a!==""&&(y+=", "),e.condenseFlow&&(y+='"'),f=l[c],v=t[f],e.replacer&&(v=e.replacer.call(t,f,v)),Pt(e,u,f,!1,!1)&&(e.dump.length>1024&&(y+="? "),y+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),Pt(e,u,v,!1,!1)&&(y+=e.dump,a+=y));e.tag=o,e.dump="{"+a+"}"}function Hs(e,u,t,a){var o="",l=e.tag,c=Object.keys(t),d,f,v,y,_,g;if(e.sortKeys===!0)c.sort();else if(typeof e.sortKeys=="function")c.sort(e.sortKeys);else if(e.sortKeys)throw new xt("sortKeys must be a boolean or a function");for(d=0,f=c.length;d<f;d+=1)g="",(!a||o!=="")&&(g+=Bi(e,u)),v=c[d],y=t[v],e.replacer&&(y=e.replacer.call(t,v,y)),Pt(e,u+1,v,!0,!0,!0)&&(_=e.tag!==null&&e.tag!=="?"||e.dump&&e.dump.length>1024,_&&(e.dump&&ei===e.dump.charCodeAt(0)?g+="?":g+="? "),g+=e.dump,_&&(g+=Bi(e,u)),Pt(e,u+1,y,!0,_)&&(e.dump&&ei===e.dump.charCodeAt(0)?g+=":":g+=": ",g+=e.dump,o+=g));e.tag=l,e.dump=o||"{}"}function Nn(e,u,t){var a,o,l,c,d,f;for(o=t?e.explicitTypes:e.implicitTypes,l=0,c=o.length;l<c;l+=1)if(d=o[l],(d.instanceOf||d.predicate)&&(!d.instanceOf||typeof u=="object"&&u instanceof d.instanceOf)&&(!d.predicate||d.predicate(u))){if(t?d.multi&&d.representName?e.tag=d.representName(u):e.tag=d.tag:e.tag="?",d.represent){if(f=e.styleMap[d.tag]||d.defaultStyle,mr.call(d.represent)==="[object Function]")a=d.represent(u,f);else if(yr.call(d.represent,f))a=d.represent[f](u,f);else throw new xt("!<"+d.tag+'> tag resolver accepts not "'+f+'" style');e.dump=a}return!0}return!1}function Pt(e,u,t,a,o,l,c){e.tag=null,e.dump=t,Nn(e,t,!1)||Nn(e,t,!0);var d=mr.call(e.dump),f=a,v;a&&(a=e.flowLevel<0||e.flowLevel>u);var y=d==="[object Object]"||d==="[object Array]",_,g;if(y&&(_=e.duplicates.indexOf(t),g=_!==-1),(e.tag!==null&&e.tag!=="?"||g||e.indent!==2&&u>0)&&(o=!1),g&&e.usedDuplicates[_])e.dump="*ref_"+_;else{if(y&&g&&!e.usedDuplicates[_]&&(e.usedDuplicates[_]=!0),d==="[object Object]")a&&Object.keys(e.dump).length!==0?(Hs(e,u,e.dump,o),g&&(e.dump="&ref_"+_+e.dump)):(qs(e,u,e.dump),g&&(e.dump="&ref_"+_+" "+e.dump));else if(d==="[object Array]")a&&e.dump.length!==0?(e.noArrayIndent&&!c&&u>0?Bn(e,u-1,e.dump,o):Bn(e,u,e.dump,o),g&&(e.dump="&ref_"+_+e.dump)):(Ns(e,u,e.dump),g&&(e.dump="&ref_"+_+" "+e.dump));else if(d==="[object String]")e.tag!=="?"&&Rs(e,e.dump,u,l,f);else{if(d==="[object Undefined]")return!1;if(e.skipInvalid)return!1;throw new xt("unacceptable kind of an object to dump "+d)}e.tag!==null&&e.tag!=="?"&&(v=encodeURI(e.tag[0]==="!"?e.tag.slice(1):e.tag).replace(/!/g,"%21"),e.tag[0]==="!"?v="!"+v:v.slice(0,18)==="tag:yaml.org,2002:"?v="!!"+v.slice(18):v="!<"+v+">",e.dump=v+" "+e.dump)}return!0}function js(e,u){var t=[],a=[],o,l;for(qi(e,t,a),o=0,l=a.length;o<l;o+=1)u.duplicates.push(t[a[o]]);u.usedDuplicates=new Array(l)}function qi(e,u,t){var a,o,l;if(e!==null&&typeof e=="object")if(o=u.indexOf(e),o!==-1)t.indexOf(o)===-1&&t.push(o);else if(u.push(e),Array.isArray(e))for(o=0,l=e.length;o<l;o+=1)qi(e[o],u,t);else for(a=Object.keys(e),o=0,l=a.length;o<l;o+=1)qi(e[a[o]],u,t)}function Ks(e,u){u=u||{};var t=new Ls(u);t.noRefs||js(e,t);var a=e;return t.replacer&&(a=t.replacer.call({"":a},"",a)),Pt(t,0,a,!0,!0)?t.dump+`
`:""}var $s=Ks,Ws={dump:$s};function Yi(e,u){return function(){throw new Error("Function yaml."+e+" is removed in js-yaml 4. Use yaml."+u+" instead, which is now safe by default.")}}var Ys=ft,Us=jn,Vs=Yn,Gs=Jn,Xs=Qn,Js=ji,Qs=gr.load,Zs=gr.loadAll,ec=Ws.dump,tc=xt,ic={binary:nr,float:Xn,map:Wn,null:Un,pairs:ar,set:or,timestamp:tr,bool:Vn,int:Gn,merge:ir,omap:rr,seq:$n,str:Kn},nc=Yi("safeLoad","load"),rc=Yi("safeLoadAll","loadAll"),ac=Yi("safeDump","dump"),oc={Type:Ys,Schema:Us,FAILSAFE_SCHEMA:Vs,JSON_SCHEMA:Gs,CORE_SCHEMA:Xs,DEFAULT_SCHEMA:Js,load:Qs,loadAll:Zs,dump:ec,YAMLException:tc,types:ic,safeLoad:nc,safeLoadAll:rc,safeDump:ac},Ar=oc;window.interact||(window.interact=Tr.default);window.jsyaml||(window.jsyaml=Ar);var sc="0.9.5";console.info(`%c drag-and-drop-card %c v${sc} `,"color:#fff;background:#03a9f4;font-weight:700;padding:2px 6px;border-radius:3px 0 0 3px","color:#03303a;background:#bdeaff;padding:2px 6px;border-radius:0 3px 3px 0");var cc=(e,...u)=>console.debug(`[drag-and-drop-card] ${e}`,...u);console.info("%c drag-and-drop-card loaded","color:#03a9f4;font-weight:700;");var Ui=()=>new Promise(e=>requestAnimationFrame(()=>e())),lc=()=>new Promise(e=>window.requestIdleCallback?requestIdleCallback(()=>e()):setTimeout(e,0)),Vi=class e extends HTMLElement{constructor(){super();kn(this,"__booting",!1);this.shadowRoot||this.attachShadow({mode:"open"}),this.__rebuiltCards=new WeakSet}_updateTabsA11y_(){var o;let t=this.tabsBar;if(!t)return;t.setAttribute("role","tablist"),t.querySelectorAll(".ddc-tab").forEach((l,c)=>{let d=l.classList.contains("active");l.setAttribute("role","tab"),l.setAttribute("aria-selected",String(d)),l.setAttribute("tabindex",d?"0":"-1"),l.dataset.index=String(c)}),this.__tabsKeyHandler||(this.__tabsKeyHandler=l=>{if(!["ArrowLeft","ArrowRight","Home","End"].includes(l.key))return;let d=Array.from(t.querySelectorAll(".ddc-tab"));if(!d.length)return;l.preventDefault();let f=d.findIndex(g=>g===document.activeElement),v=d.findIndex(g=>g.classList.contains("active")),y=f>=0?f:v>=0?v:0;l.key==="ArrowRight"&&(y=Math.min(d.length-1,y+1)),l.key==="ArrowLeft"&&(y=Math.max(0,y-1)),l.key==="Home"&&(y=0),l.key==="End"&&(y=d.length-1);let _=d[y];if(_){try{_.focus({preventScroll:!1})}catch{}_.click()}},t.addEventListener("keydown",this.__tabsKeyHandler)),this.__tabsScrollHandler||(this.__tabsScrollHandler=()=>{var l;return(l=this._updateTabOverflowShadows_)==null?void 0:l.call(this)},t.addEventListener("scroll",this.__tabsScrollHandler,{passive:!0})),(o=this._updateTabOverflowShadows_)==null||o.call(this)}_getCurrentDashboardUrlPath_(){let a=(window.location.pathname||"/").replace(/^\/+/,"").split("/")[0]||"lovelace";return a==="lovelace"?null:a}async _ensureCardIdSeededInStorage_(){var a;if((a=this.config)!=null&&a.id)return this.config.id;let t=crypto!=null&&crypto.randomUUID?crypto.randomUUID():"ddc_"+Math.random().toString(36).slice(2);this.config={...this.config,id:t};try{let o=this._getCurrentDashboardUrlPath_(),l=await this.hass.callWS(o?{type:"lovelace/config",url_path:o}:{type:"lovelace/config"}),c=this._findThisCardPathRecursive_(l,w=>(w==null?void 0:w.type)==="custom:drag-and-drop-card"&&(!w.id||w.id===t));if(!c)return t;let{viewIndex:d,cardIndex:f,parentPath:v}=c,y=l.views[d],g={...this._getCardByPath_(y,v,f),id:t};this._setCardByPath_(y,v,f,g),await this.hass.callWS(o?{type:"lovelace/config/save",url_path:o,config:l}:{type:"lovelace/config/save",config:l})}catch{}return t}async _persistThisCardConfigToStorage_(){var g,w;await this._ensureCardIdSeededInStorage_();let t={type:"custom:drag-and-drop-card",id:(g=this.config)==null?void 0:g.id,...this._config},a=this._getCurrentDashboardUrlPath_(),o=await this.hass.callWS(a?{type:"lovelace/config",url_path:a}:{type:"lovelace/config"}),l=this._findThisCardPathRecursive_(o,L=>{var E;return(L==null?void 0:L.type)==="custom:drag-and-drop-card"&&(L==null?void 0:L.id)===((E=this.config)==null?void 0:E.id)});if(!l)throw new Error("Card not found in Lovelace config");let{viewIndex:c,cardIndex:d,parentPath:f}=l,v=o.views[c],_={...this._getCardByPath_(v,f,d),...t};this._setCardByPath_(v,f,d,_),await this.hass.callWS(a?{type:"lovelace/config/save",url_path:a,config:o}:{type:"lovelace/config/save",config:o}),this.config=_,(w=this.requestUpdate)==null||w.call(this)}_findThisCardPathRecursive_(t,a){let o=(t==null?void 0:t.views)||[];for(let l=0;l<o.length;l++){let c=this._findInCardTree_(o[l],a);if(c)return{viewIndex:l,...c}}return null}_findInCardTree_(t,a,o=[]){var c;let l=(t==null?void 0:t.cards)||[];for(let d=0;d<l.length;d++){let f=l[d];if(a(f))return{cardIndex:d,parentPath:o};if((c=f==null?void 0:f.cards)!=null&&c.length){let v=this._findInCardTree_(f,a,o.concat(d));if(v)return v}}return null}_getCardByPath_(t,a,o){let l=t;for(let c of a||[])l=l.cards[c];return l.cards[o]}_setCardByPath_(t,a,o,l){let c=t;for(let d of a||[])c=c.cards[d];c.cards[o]=l}_ensureToolbarStyles_(){try{if(this.shadowRoot.querySelector("#ddc-toolbar-styles"))return;let a=document.createElement("style");a.id="ddc-toolbar-styles",a.textContent=`/* ===== Edit toolbar ===== */
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
  }`,this.shadowRoot.appendChild(a)}catch(t){console.warn("Toolbar style inject failed",t)}}_ensureSettingsStyles_(){if(this.shadowRoot.querySelector("#ddc-settings-styles"))return;let t=document.createElement("style");t.id="ddc-settings-styles",t.textContent=`
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
  `,this.shadowRoot.appendChild(t)}_setHeaderVisible_(t=!0){var a,o,l,c,d;try{(((a=this._deepQueryAll)==null?void 0:a.call(this,"app-header, ha-top-app-bar, ha-top-app-bar-fixed, mwc-top-app-bar-fixed, ha-header-bar, app-toolbar, ha-toolbar"))||[]).forEach(g=>{g&&(g.dataset.ddcPrevDisplayHeader===void 0&&(g.dataset.ddcPrevDisplayHeader=g.style.display||"",g.dataset.ddcPrevMinH=g.style.minHeight||"",g.dataset.ddcPrevH=g.style.height||"",g.dataset.ddcPrevVis=g.style.visibility||""),t?(g.style.display=g.dataset.ddcPrevDisplayHeader||"",g.style.minHeight=g.dataset.ddcPrevMinH||"",g.style.height=g.dataset.ddcPrevH||"",g.style.visibility=g.dataset.ddcPrevVis||"",g.removeAttribute("hidden")):(g.style.display="none",g.style.minHeight="0",g.style.height="0",g.style.visibility="hidden",g.setAttribute("hidden","")))}),(((o=this._deepQueryAll)==null?void 0:o.call(this,'[slot="actionItems"], ha-icon-button, ha-button-menu, assist-button, search-input, ha-quick-bar, ha-mwc-menu'))||[]).forEach(g=>{g&&(g.dataset.ddcPrevDisplayAction===void 0&&(g.dataset.ddcPrevDisplayAction=g.style.display||"",g.dataset.ddcPrevVisAction=g.style.visibility||""),t?(g.style.display=g.dataset.ddcPrevDisplayAction||"",g.style.visibility=g.dataset.ddcPrevVisAction||""):(g.style.display="none",g.style.visibility="hidden"))}),[...((l=this._deepQueryAll)==null?void 0:l.call(this,"ha-app-layout"))||[],...((c=this._deepQueryAll)==null?void 0:c.call(this,"home-assistant-main"))||[],document.documentElement,document.body].filter(Boolean).forEach(g=>{if(g)if(g.dataset.ddcPrevHdrVars===void 0&&(g.dataset.ddcPrevHdrVars=JSON.stringify({mdc:g.style.getPropertyValue("--mdc-top-app-bar-height")||"",app:g.style.getPropertyValue("--app-header-height")||"",hdr:g.style.getPropertyValue("--header-height")||"",hah:g.style.getPropertyValue("--ha-header-height")||"",pad:g.style&&(g.style.paddingTop||"")||""})),t)try{let w=JSON.parse(g.dataset.ddcPrevHdrVars||"{}");g.style.setProperty("--mdc-top-app-bar-height",w.mdc||""),g.style.setProperty("--app-header-height",w.app||""),g.style.setProperty("--header-height",w.hdr||""),g.style.setProperty("--ha-header-height",w.hah||""),w.pad!==void 0&&(g.style.paddingTop=w.pad||"")}catch{}else{g.style.setProperty("--mdc-top-app-bar-height","0px"),g.style.setProperty("--app-header-height","0px"),g.style.setProperty("--header-height","0px"),g.style.setProperty("--ha-header-height","0px");try{g.style.paddingTop="0px"}catch{}}}),(((d=this._deepQueryAll)==null?void 0:d.call(this,"#contentContainer"))||[]).forEach(g=>{g&&(g.dataset.ddcPrevContentPadTop===void 0&&(g.dataset.ddcPrevContentPadTop=g.style&&(g.style.paddingTop||"")||""),g.style.paddingTop=t?g.dataset.ddcPrevContentPadTop||"":"0px")})}catch{}}_setSidebarVisible_(t=!0){var a,o;try{(((a=this._deepQueryAll)==null?void 0:a.call(this,"ha-sidebar"))||[]).forEach(d=>{d&&(d.dataset.ddcPrevDisplaySidebar===void 0&&(d.dataset.ddcPrevDisplaySidebar=d.style.display||""),d.style.display=t?d.dataset.ddcPrevDisplaySidebar||"":"none")}),(((o=this._deepQueryAll)==null?void 0:o.call(this,"ha-drawer"))||[]).forEach(d=>{if(d){d.dataset.ddcPrevDrawerWidth===void 0&&(d.dataset.ddcPrevDrawerWidth=d.style.getPropertyValue("--mdc-drawer-width")||""),t?d.style.setProperty("--mdc-drawer-width",d.dataset.ddcPrevDrawerWidth||""):d.style.setProperty("--mdc-drawer-width","0px");try{!t&&typeof d.close=="function"&&d.close()}catch{}}})}catch{}}_applyHaChromeVisibility_(){var t;try{let a=!!this.editMode||((t=this._isInHaEditorPreview)==null?void 0:t.call(this));a||!this.hideHaHeader?this._setHeaderVisible_(!0):this._setHeaderVisible_(!1),a||!this.hideHaSidebar?this._setSidebarVisible_(!0):this._setSidebarVisible_(!1)}catch{}}_applyBackgroundImageFromConfig(){var l;let t=this._config||{},a=t.background_image||t.bg_image||null,o=this.cardContainer;if(o)if(a&&a.src){let c=String(a.src).trim(),d=a.repeat===!0||a.repeat==="repeat"?"repeat":"no-repeat",f=Math.max(0,Math.min(1,Number((l=a.opacity)!=null?l:1))),v=a.size||"cover",y=a.position||"center center",_=a.attachment||"scroll",g=a.filter||"none";o.style.setProperty("--ddc-bg-image",c?`url("${c.replace(/"/g,'"')}")`:"none"),o.style.setProperty("--ddc-bg-repeat",d),o.style.setProperty("--ddc-bg-opacity",String(f)),o.style.setProperty("--ddc-bg-size",v),o.style.setProperty("--ddc-bg-position",y),o.style.setProperty("--ddc-bg-attachment",_),o.style.setProperty("--ddc-bg-filter",g),o.classList.add("has-bg-image")}else o.style.removeProperty("--ddc-bg-image"),o.style.removeProperty("--ddc-bg-repeat"),o.style.removeProperty("--ddc-bg-opacity"),o.style.removeProperty("--ddc-bg-size"),o.style.removeProperty("--ddc-bg-position"),o.style.removeProperty("--ddc-bg-attachment"),o.style.removeProperty("--ddc-bg-filter"),o.classList.remove("has-bg-image")}_evaluateVisibility_(t){try{let a=this.hass||this._hass;if(!Array.isArray(t)||t.length===0)return!0;let o=l=>{var d,f,v,y,_;if(!l||typeof l!="object")return!0;let c=l.condition||l.type||"state";if(c==="and"||c==="or"){let g=Array.isArray(l.conditions)?l.conditions:[];return g.length===0?!0:c==="and"?g.every(w=>o(w)):g.some(w=>o(w))}if(c==="state"){let g=l.entity;if(!g)return!0;let w=(d=a==null?void 0:a.states)==null?void 0:d[g];if(!w)return!1;let L=String((f=w.state)!=null?f:"");return l.state!==void 0?(Array.isArray(l.state)?l.state:[l.state]).some(P=>String(P)===L):l.state_not!==void 0?!(Array.isArray(l.state_not)?l.state_not:[l.state_not]).some(P=>String(P)===L):!0}if(c==="numeric_state"){let g=l.entity;if(!g)return!0;let w=(v=a==null?void 0:a.states)==null?void 0:v[g];if(!w)return!1;let L=parseFloat(w.state);return!(isNaN(L)||l.above!==void 0&&!(L>Number(l.above))||l.below!==void 0&&!(L<Number(l.below)))}if(c==="screen"){let g=l.media_query||l.query;if(!g||typeof g!="string")return!0;try{return window.matchMedia(g).matches}catch{return!0}}if(c==="user"){let g=Array.isArray(l.users)?l.users:l.user?[l.user]:[];if(!g.length)return!0;let w=((y=a==null?void 0:a.user)==null?void 0:y.id)||((_=a==null?void 0:a.user)==null?void 0:_.id)||null;return w?g.includes(w):!0}return!0};return t.every(l=>o(l))}catch(a){return console.warn("[ddc:visibility] evaluate error",a),!0}}_applyVisibility_(){var t;try{let a=((t=this.cardContainer)==null?void 0:t.children)||[],o=this._normalizeTabId(this.activeTab);for(let l of a){if(!l||!l.firstElementChild||this._normalizeTabId(l.dataset.tabId)!==o)continue;let f=(this._extractCardConfig(l.firstElementChild)||{}).visibility,v=this.editMode?!0:this._evaluateVisibility_(f);l.style.display=v?"":"none"}}catch(a){console.warn("[ddc:visibility] apply error",a)}}async _onKeyDown_(t){var d,f,v,y,_,g,w,L,E,P;if(!this.editMode||this._isTypingTarget_(t.target))return;let a=Number(this.gridSize||10),o=t.altKey?1:t.shiftKey?a*5:a,l=0,c=0;switch(t.key){case"ArrowLeft":l=-o;break;case"ArrowRight":l=o;break;case"ArrowUp":c=-o;break;case"ArrowDown":c=o;break}if(l||c){t.preventDefault(),this._moveSelectionBy_(l,c,{liveSnap:!t.altKey});return}if(t.key==="Delete"||t.key==="Backspace"){let D=this._selection&&this._selection.size?Array.from(this._selection):[];if(!D.length)return;t.preventDefault(),D.forEach(C=>C.remove()),(d=this._clearSelection)==null||d.call(this),(f=this._resizeContainer)==null||f.call(this),(v=this._queueSave)==null||v.call(this,"delete-key"),(y=this._ensurePlaceholderIfEmpty)==null||y.call(this);return}if((t.ctrlKey||t.metaKey)&&(t.key==="d"||t.key==="D")){t.preventDefault(),await this._duplicateSelection_();return}if((t.ctrlKey||t.metaKey)&&t.key==="]"){t.preventDefault(),this._selection&&((g=(_=this._selection).forEach)==null||g.call(_,D=>{var C;return(C=this._adjustZ)==null?void 0:C.call(this,D,1)})),(w=this._queueSave)==null||w.call(this,"z-up");return}if((t.ctrlKey||t.metaKey)&&t.key==="["){t.preventDefault(),this._selection&&((E=(L=this._selection).forEach)==null||E.call(L,D=>{var C;return(C=this._adjustZ)==null?void 0:C.call(this,D,-1)})),(P=this._queueSave)==null||P.call(this,"z-down");return}}async _duplicateSelection_(){var a,o,l,c,d,f,v,y,_,g,w,L;if(!this._selection||!this._selection.size)return;let t=Array.from(this._selection);for(let E of t)try{let P=((a=this._extractCardConfig)==null?void 0:a.call(this,E.firstElementChild))||{},D=await((o=this._createCard)==null?void 0:o.call(this,P)),C=(l=this._makeWrapper)==null?void 0:l.call(this,D);if(!D||!C)continue;C.style.width=E.style.width,C.style.height=E.style.height;let A=Number(this.gridSize||10),O=(parseFloat(E.getAttribute("data-x"))||0)+A,b=(parseFloat(E.getAttribute("data-y"))||0)+A;(c=this._setCardPosition)==null||c.call(this,C,O,b),C.style.zIndex=String((((d=this._highestZ)==null?void 0:d.call(this))||0)+1);try{let M=(f=E.dataset)==null?void 0:f.tabId;M&&(C.dataset.tabId=M)}catch{}(v=this.cardContainer)==null||v.appendChild(C);try{(y=this._addTabSelectorToChip)==null||y.call(this,C,C.dataset.tabId)}catch{}try{(_=this._rebuildOnce)==null||_.call(this,C.firstElementChild)}catch{}try{(g=this._initCardInteract)==null||g.call(this,C)}catch{}}catch{}try{(w=this._resizeContainer)==null||w.call(this)}catch{}try{(L=this._queueSave)==null||L.call(this,"duplicate")}catch{}}_moveSelectionBy_(t,a,{liveSnap:o=!0}={}){var y,_,g,w,L;if(!this._selection||!this._selection.size)return;let l=Array.from(this._selection),c=Number(this.gridSize||10),d=(y=this._isContainerFixed)==null?void 0:y.call(this),f=((_=this._getContainerSize)==null?void 0:_.call(this))||{w:1/0,h:1/0},v=l.map(E=>{let P=parseFloat(E.getAttribute("data-x-raw"))||parseFloat(E.getAttribute("data-x"))||0,D=parseFloat(E.getAttribute("data-y-raw"))||parseFloat(E.getAttribute("data-y"))||0,C=parseFloat(E.style.width)||E.getBoundingClientRect().width,A=parseFloat(E.style.height)||E.getBoundingClientRect().height,O=P+t,b=D+a;d&&(O=Math.max(0,Math.min(O,Math.max(0,f.w-C))),b=Math.max(0,Math.min(b,Math.max(0,f.h-A))));let M=o?Math.round(O/c)*c:O,R=o?Math.round(b/c)*c:b;return{el:E,rawX:O,rawY:b,snapX:M,snapY:R,w:C,h:A}});if(this.disableOverlap&&typeof this._pushCardsOutOfTheWay=="function")try{this._pushCardsOutOfTheWay(v,t,a,o,c)}catch{}for(let E of v){E.el.setAttribute("data-x-raw",String(E.rawX)),E.el.setAttribute("data-y-raw",String(E.rawY));try{(g=this._setCardPosition)==null||g.call(this,E.el,E.snapX,E.snapY)}catch{}}try{(w=this._resizeContainer)==null||w.call(this)}catch{}try{(L=this._queueSave)==null||L.call(this,"nudge")}catch{}}_syncTabsWidth_(){try{let t=this.tabsBar;if(!t)return;if(this.tabsPosition==="left"){t.style.width="",t.style.maxWidth="";return}let a=this.cardContainer||this.__scaleOuter;if(!a)return;let o=0;try{let l=a.getBoundingClientRect();o=l&&l.width?l.width:0}catch{}if(o<=0&&this.__scaleOuter&&this.__scaleOuter!==a)try{let l=this.__scaleOuter.getBoundingClientRect();o=l&&l.width?l.width:0}catch{}o>0&&(t.style.width=`${o}px`,t.style.maxWidth=`${o}px`)}catch{}}_isTypingTarget_(t){var l,c,d,f;if(!t||t===window||t===document)return!1;let a=(l=t.closest)==null?void 0:l.call(t,'input, textarea, [contenteditable="true"], ha-textfield, mwc-textfield');if(!a)return!1;let o=((d=(c=a.tagName)==null?void 0:c.toLowerCase)==null?void 0:d.call(c))||"";return o==="input"||o==="textarea"||((f=a.hasAttribute)==null?void 0:f.call(a,"contenteditable"))}_scheduleReflowAndScale(){this.__reflowRAF||(this.__reflowRAF=requestAnimationFrame(()=>{var t,a;this.__reflowRAF=null;try{(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="dynamic"&&((t=this._resizeContainer)==null||t.call(this))}catch{}try{(a=this._applyAutoScale)==null||a.call(this)}catch{}}))}__ddcBindPointerListeners(){if(!this.__ddcPtrBound){this.__ddcPtrBound=!0,this.__onDDCPointerDown=t=>{var a,o;try{if(t.button!==void 0&&t.button!==0)return;let l=((a=t.composedPath)==null?void 0:a.call(t))||[],c=null;for(let d of l)if(d&&d.classList&&d.classList.contains("card-wrapper")){c=d;break}if(!c)return;this.__ddcDragging=!0,this.__scaleOuter&&(this.__prevOverflow=this.__scaleOuter.style.overflow,this.__scaleOuter.style.overflow="visible"),(o=this._scheduleReflowAndScale)==null||o.call(this)}catch{}},this.__onDDCPointerMove=t=>{var a;try{if(!this.__ddcDragging)return;(a=this._scheduleReflowAndScale)==null||a.call(this)}catch{}},this.__onDDCPointerUp=t=>{var a;try{if(!this.__ddcDragging)return;this.__ddcDragging=!1,this.__scaleOuter&&(this.__scaleOuter.style.overflow=this.__prevOverflow||"");try{(a=this._applyAutoScale)==null||a.call(this)}catch{}}catch{}};try{this.addEventListener("pointerdown",this.__onDDCPointerDown,{passive:!0})}catch{}try{this.addEventListener("pointermove",this.__onDDCPointerMove,{passive:!0})}catch{}try{window.addEventListener("pointerup",this.__onDDCPointerUp,{passive:!0})}catch{}try{window.addEventListener("pointercancel",this.__onDDCPointerUp,{passive:!0})}catch{}}}_renderEditToolbar_(){this.shadowRoot.querySelectorAll(".ddc-toolbar").forEach(g=>g.remove()),this._ensureToolbarStyles_();let t=document.createElement("div");t.className="ddc-toolbar";let a=document.createElement("div");a.className="ddc-t-group",a.append(this._mkBtn_("add_card","mdi:plus-box","Add card (A)","primary"),this._mkBtn_("snap_toggle","mdi:magnet","Toggle snap (G)"),this._mkBtn_("align_grid","mdi:grid","Align to grid"));let o=document.createElement("div");o.className="ddc-t-group";let l=document.createElement("div");l.className="ddc-t-status";let c=document.createElement("div");c.className="ddc-t-dot"+(this.__dirty?" dirty":"");let d=document.createElement("span");d.textContent=this.__dirty?"Unsaved changes":`Saved${this.__lastSavedAt?" \xB7 "+this.__lastSavedAt:""}`,l.append(c,d),o.appendChild(l);let f=document.createElement("div");f.className="ddc-t-group",f.append(this._mkBtn_("reload","mdi:refresh","Reload (R)","ghost"),this._mkBtn_("open_hads","mdi:alpha-h-box-outline","Open HACS/HADS","ghost"),this._mkBtn_("apply","mdi:content-save","Apply / Save (S)","primary"),this._mkBtn_("exit_edit","mdi:logout-variant","Exit edit (Esc)","danger"));let v=document.createElement("div");v.className="ddc-t-group ddc-t-row",v.append(a);let y=document.createElement("div");y.className="ddc-t-group ddc-t-row",y.append(o);let _=document.createElement("div");_.className="ddc-t-group ddc-t-row",_.append(f),t.append(v,document.createElement("div")).lastChild.className="ddc-t-sep",t.append(y,document.createElement("div")).lastChild.className="ddc-t-sep",t.append(_),t.addEventListener("click",g=>{let w=g.target.closest("[data-action]");w&&this._onToolbarAction_(w.dataset.action,{button:w,bar:t,dot:c,txt:d})}),this.shadowRoot.appendChild(t);try{this.__toolbarRO&&this.__toolbarRO.disconnect(),this.__toolbarRO=new ResizeObserver(g=>{for(let w of g)t.classList.toggle("compact",w.contentRect.width<980)}),this.__toolbarRO.observe(t)}catch{}this.__toolbarKeyHandler=g=>{if(!(!this.editMode&&!this.isEditing)){if(g.key==="a"||g.key==="A")return this._onToolbarAction_("add_card");if(g.key==="s"||g.key==="S")return this._onToolbarAction_("apply");if(g.key==="r"||g.key==="R")return this._onToolbarAction_("reload");if(g.key==="g"||g.key==="G")return this._onToolbarAction_("snap_toggle");if(g.key==="Escape")return this._onToolbarAction_("exit_edit")}},window.addEventListener("keydown",this.__toolbarKeyHandler)}async _onToolbarAction_(t,a={}){var o,l,c,d,f,v,y,_,g,w,L;switch(t){case"add_card":(o=this._openAddCardDialog_)!=null&&o.call(this)||(l=this._addNewCard_)!=null&&l.call(this)||((c=this._openEntityPicker_)==null||c.call(this));break;case"snap_toggle":{this.dragLiveSnap=!this.dragLiveSnap,(d=this._initInteract)==null||d.call(this),(f=this._toast_)==null||f.call(this,`Live snap ${this.dragLiveSnap?"ON":"OFF"}`);break}case"align_grid":(v=this._alignAllToGrid_)==null||v.call(this,this.gridSize);break;case"reload":(y=this._reloadLayout_)==null||y.call(this);break;case"open_hads":(_=this._openHACS_)!=null&&_.call(this)||window.open("/hacs","_blank")||window.open("/hacsfiles","_blank");break;case"apply":{let E=()=>{this._setDirty_(!1),a!=null&&a.txt&&(a.txt.textContent=`Saved \xB7 ${this.__lastSavedAt}`),a!=null&&a.dot&&a.dot.classList.remove("dirty","error")},P=()=>{a!=null&&a.dot&&a.dot.classList.add("error")};try{this._saveLayoutNow_?await this._saveLayoutNow_():this._persistThisCardConfigToStorage_?await this._persistThisCardConfigToStorage_():(g=this._queueSave)==null||g.call(this,"toolbar-apply",!0),this.__lastSavedAt=new Date().toLocaleTimeString(),E()}catch(D){console.warn(D),P()}break}case"exit_edit":if((w=this._toggleEditMode)!=null&&w.call(this,!1)||(L=this._exitEditMode_)!=null&&L.call(this)||(this.isEditing=!1),this.__toolbarKeyHandler&&(window.removeEventListener("keydown",this.__toolbarKeyHandler),this.__toolbarKeyHandler=null),this.__toolbarRO){try{this.__toolbarRO.disconnect()}catch{}this.__toolbarRO=null}this.shadowRoot.querySelectorAll(".ddc-toolbar").forEach(E=>E.remove());break}}_ensureScaleWrapper(){let t=this.cardContainer;if(!t||this.__scaleOuter&&this.__scaleOuter.contains(t))return;let a=document.createElement("div");a.className="ddc-scale-outer",Object.assign(a.style,{position:"relative",width:"100%",overflow:"hidden"}),t.parentNode&&(t.parentNode.insertBefore(a,t),a.appendChild(t)),Object.assign(t.style,{position:"absolute",top:"0",left:"0",transformOrigin:"top left"}),this.__scaleOuter=a}_hasCardModDeep(t){try{if(!t||typeof t!="object")return!1;if(t.card_mod||t.type==="custom:mod-card")return!0;if(t.card)return this._hasCardModDeep(t.card);if(Array.isArray(t.cards)){for(let a of t.cards)if(this._hasCardModDeep(a))return!0}return!1}catch{return!1}}_rebuildOnce(t){try{if(!t||(this.__rebuiltCards||(this.__rebuiltCards=new WeakSet),this.__rebuiltCards.has(t)))return;this.__rebuiltCards.add(t),t.dispatchEvent(new Event("ll-rebuild",{bubbles:!0,composed:!0}))}catch{}}_deepQueryAll(t,a=document){let o=[],l=c=>{if(!c)return;if(c.querySelectorAll)try{c.querySelectorAll(t).forEach(v=>o.push(v))}catch{}let d=document.createTreeWalker(c,NodeFilter.SHOW_ELEMENT,null),f=c;for(;f;){let v=f.shadowRoot;v&&l(v),f=d.nextNode()}};return l(a),o}_syncEditorsStorageKey(){try{let t=this.storageKey||"";this._deepQueryAll("#storage_key").forEach(o=>{try{o&&o.tagName==="INPUT"&&o.value!==t&&(o.value=t,o.dispatchEvent(new Event("input",{bubbles:!0})),o.dispatchEvent(new Event("change",{bubbles:!0})))}catch{}})}catch{}}static _genKey(){var a,o;return`layout_${((o=(a=globalThis.crypto)==null?void 0:a.randomUUID)==null?void 0:o.call(a))||`${Date.now().toString(36)}_${Math.random().toString(36).slice(2,8)}`}`}static getStubConfig(){return{type:"custom:drag-and-drop-card",storage_key:this._genKey(),grid:10,drag_live_snap:!1,auto_save:!0,auto_save_debounce:800,container_size_mode:"dynamic",hero_image:"https://i.postimg.cc/CxsWQgwp/Chat-GPT-Image-Sep-5-2025-09-26-16-AM.png"}}static getConfigElement(){let t=document.createElement("div");t.innerHTML=`
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
  `;let a=()=>{let y=f();c.disabled=!y},o=()=>{let y=t.getConfig();t.dispatchEvent(new CustomEvent("config-changed",{detail:{config:y}})),a()},l=()=>{let y=t.querySelector("#sizeMode").value;t.querySelector("#sizeCustom").style.display=y==="fixed_custom"?"inline-flex":"none",t.querySelector("#sizePresetWrap").style.display=y==="preset"?"inline-flex":"none"},c=t.querySelector("#applyBtn"),d=t.querySelector("#revertBtn");["#sizeMode","#sizePreset","#sizeOrientation"].forEach(y=>{let _=t.querySelector(y);if(_){try{_.fixedMenuPosition=!0}catch{}_.addEventListener("closed",g=>g.stopPropagation())}}),t.setConfig=(y={})=>{var g,w,L,E,P,D,C,A;t._config={type:y.type||"custom:drag-and-drop-card",...y},t._config.storage_key||(t._config.storage_key=`layout_${((g=crypto==null?void 0:crypto.randomUUID)==null?void 0:g.call(crypto))||Date.now().toString(36)}`,t.__autokeyPending=!0),t.querySelector("#storage_key").value=t._config.storage_key||"",t.querySelector("#grid").value=(w=t._config.grid)!=null?w:10,t.querySelector("#liveSnap").checked=!!t._config.drag_live_snap,t.querySelector("#autoSave").checked=t._config.auto_save!==!1,t.querySelector("#autoSaveDebounce").value=(L=t._config.auto_save_debounce)!=null?L:800,t.querySelector("#containerBg").value=(E=t._config.container_background)!=null?E:"transparent",t.querySelector("#cardBg").value=(P=t._config.card_background)!=null?P:"var(--ha-card-background, var(--card-background-color))",t.querySelector("#debug").checked=!!t._config.debug,t.querySelector("#noOverlap").checked=!!t._config.disable_overlap,t.querySelector("#autoResize").checked=!!t._config.auto_resize_cards,t.querySelector("#animateCards").checked=!!t._config.animate_cards,t.querySelector("#sizeMode").value=t._config.container_size_mode||"dynamic",t.querySelector("#sizeW").value=(D=t._config.container_fixed_width)!=null?D:"",t.querySelector("#sizeH").value=(C=t._config.container_fixed_height)!=null?C:"",t.querySelector("#sizeOrientation").value=t._config.container_preset_orientation||"auto";let _=t.querySelector("#sizePreset");if(!_.__filled){let O=(((A=this._sizePresets)==null?void 0:A.call(this))||[]).reduce((b,M)=>{var R;return(b[R=M.group||"other"]||(b[R]=[])).push(M),b},{});_.innerHTML="";for(let[b,M]of Object.entries(O)){let R=document.createElement("optgroup");R.label=b.replace(/(^.|-.?)/g,q=>q.toUpperCase()),M.forEach(q=>{let K=document.createElement("mwc-list-item");K.value=q.key,K.textContent=`${q.label} (${q.w}\xD7${q.h})`,R.appendChild(K)});let ee=document.createElement("mwc-list-item");ee.setAttribute("disabled",""),ee.textContent=`\u2014 ${R.label} \u2014`,_.appendChild(ee),Array.from(R.children).forEach(q=>_.appendChild(q))}_.__filled=!0}t._config.container_preset&&(_.value=t._config.container_preset),l(),a(),t.__autokeyPending&&(t.__autokeyPending=!1,o())},t.getConfig=()=>{let y={...t._config||{}};return y.storage_key=t.querySelector("#storage_key").value||"",y.grid=Number(t.querySelector("#grid").value||10),y.drag_live_snap=!!t.querySelector("#liveSnap").checked,y.auto_save=!!t.querySelector("#autoSave").checked,y.auto_save_debounce=Number(t.querySelector("#autoSaveDebounce").value||800),y.container_background=t.querySelector("#containerBg").value||"transparent",y.card_background=t.querySelector("#cardBg").value||"var(--ha-card-background, var(--card-background-color))",y.debug=!!t.querySelector("#debug").checked,y.disable_overlap=!!t.querySelector("#noOverlap").checked,y.auto_resize_cards=!!t.querySelector("#autoResize").checked,y.animate_cards=!!t.querySelector("#animateCards").checked,y.container_size_mode=t.querySelector("#sizeMode").value,y.container_fixed_width=Number(t.querySelector("#sizeW").value||0)||void 0,y.container_fixed_height=Number(t.querySelector("#sizeH").value||0)||void 0,y.container_preset=t.querySelector("#sizePreset").value||void 0,y.container_preset_orientation=t.querySelector("#sizeOrientation").value||"auto",y};let f=()=>{let y=t.getConfig(),_=t._config||{};try{return JSON.stringify(y)!==JSON.stringify(_)}catch{return!0}},v=(y,_="input")=>{var g;return(g=t.querySelector(y))==null?void 0:g.addEventListener(_,()=>{y==="#sizeMode"&&l(),a()})};return v("#storage_key"),v("#grid"),v("#liveSnap","change"),v("#autoSave","change"),v("#autoSaveDebounce"),v("#containerBg"),v("#cardBg"),v("#debug","change"),v("#noOverlap","change"),v("#autoResize","change"),v("#animateCards","change"),v("#sizeMode","change"),v("#sizeW"),v("#sizeH"),v("#sizePreset","selected"),v("#sizeOrientation","selected"),c==null||c.addEventListener("click",()=>{o()}),d==null||d.addEventListener("click",()=>t.setConfig(t._config)),t}static _sizePresets(){return[{key:"iphone-14-pro",label:"iPhone 14 Pro",w:393,h:852,group:"phone"},{key:"iphone-14-pro-max",label:"iPhone 14 Pro Max",w:430,h:932,group:"phone"},{key:"iphone-se-2",label:"iPhone SE (2/3rd gen)",w:375,h:667,group:"phone"},{key:"pixel-7",label:"Pixel 7",w:412,h:915,group:"phone"},{key:"galaxy-s8",label:"Galaxy S8",w:360,h:740,group:"phone"},{key:"galaxy-s20-ultra",label:"Galaxy S20 Ultra",w:412,h:915,group:"phone"},{key:"ipad-9-7",label:'iPad 9.7"',w:768,h:1024,group:"tablet"},{key:"ipad-11-pro",label:'iPad Pro 11"',w:834,h:1194,group:"tablet"},{key:"ipad-12-9-pro",label:'iPad Pro 12.9"',w:1024,h:1366,group:"tablet"},{key:"surface-go-3",label:"Surface Go 3",w:800,h:1280,group:"tablet"},{key:"hd",label:"HD",w:1366,h:768,group:"desktop"},{key:"wxga-plus",label:"WXGA+",w:1440,h:900,group:"desktop"},{key:"fhd",label:"Full HD",w:1920,h:1080,group:"desktop"},{key:"qhd",label:"2K / QHD",w:2560,h:1440,group:"desktop"},{key:"uhd-4k",label:"4K UHD",w:3840,h:2160,group:"desktop"}]}_isContainerFixed(){return this.containerSizeMode!=="dynamic"}_resolveFixedSize(){if(this.containerSizeMode==="fixed_custom"){let t=Math.max(100,Number(this.containerFixedWidth||0)),a=Math.max(100,Number(this.containerFixedHeight||0));return{w:t,h:a}}if(this.containerSizeMode==="preset"){let t=e._sizePresets().find(l=>l.key===this.containerPreset)||e._sizePresets().find(l=>l.key==="fhd");if(!t)return{w:1920,h:1080};let a=t.w,o=t.h;return this.containerPresetOrient==="portrait"&&a>o&&([a,o]=[o,a]),this.containerPresetOrient==="landscape"&&o>a&&([a,o]=[o,a]),{w:a,h:o}}return null}_applyContainerSizingFromConfig(t=!1){var o,l;let a=this.cardContainer;if(a)if(this._isContainerFixed()){let{w:c,h:d}=this._resolveFixedSize();a.style.width=`${c}px`,a.style.height=`${d}px`,a.style.overflow="hidden",t||(o=this._dbgPush)==null||o.call(this,"size","Applied fixed size",{w:c,h:d,mode:this.containerSizeMode,preset:this.containerPreset,orient:this.containerPresetOrient}),this._clampAllCardsInside()}else a.style.overflow="hidden",t||(l=this._dbgPush)==null||l.call(this,"size","Applied dynamic size"),this._resizeContainer()}_getContainerSize(){let t=this.cardContainer;if(!t)return{w:0,h:0};let a=parseFloat(getComputedStyle(t).width)||t.getBoundingClientRect().width,o=parseFloat(getComputedStyle(t).height)||t.getBoundingClientRect().height;return{w:a,h:o}}_clampAllCardsInside(){if(!this._isContainerFixed())return;let{w:t,h:a}=this._getContainerSize();this.cardContainer.querySelectorAll(".card-wrapper").forEach(l=>{let c=parseFloat(l.getAttribute("data-x"))||0,d=parseFloat(l.getAttribute("data-y"))||0,f=parseFloat(l.style.width)||l.getBoundingClientRect().width,v=parseFloat(l.style.height)||l.getBoundingClientRect().height,y=Math.max(0,Math.min(c,Math.max(0,t-f))),_=Math.max(0,Math.min(d,Math.max(0,a-v))),g=Math.min(f,t),w=Math.min(v,a);(g!==f||w!==v)&&(l.style.width=`${g}px`,l.style.height=`${w}px`);let L=Math.max(0,Math.min(y,Math.max(0,t-g))),E=Math.max(0,Math.min(_,Math.max(0,a-w)));this._setCardPosition(l,L,E)})}_applyGridVars(){var a;let t=`${this.gridSize||10}px`;this.style.setProperty("--ddc-grid-size",t),(a=this.cardContainer)==null||a.style.setProperty("--ddc-grid-size",t)}_dbgInit(){if(!this.__dbgReady){this.__dbgReady=!0,this._dbgBuffer=[],this._dbgMax=400;try{window.DDC=this}catch{}}}_dbgPush(t,a,o=null){let l={t:new Date().toISOString(),kind:t,msg:a,extra:o};this._dbgBuffer.push(l),this._dbgBuffer.length>this._dbgMax&&this._dbgBuffer.shift(),this.debug&&console.debug(`%c[ddc:${t}]%c ${a}`,"color:#03a9f4","color:unset",o!=null?o:"")}_dbgDump(){return[...this._dbgBuffer]}_safe(t){return String(t).replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a])}setConfig(t={}){var l,c,d,f,v,y,_,g,w,L,E,P,D,C,A,O,b,M,R,ee,q,K,ae,ie;let a=this.storageKey;this.config={...t},(!this.config.storage_key||this.config.storage_key==="")&&(this.config.storage_key=this.constructor._genKey()),this.storageKey=this.config.storage_key,t.storage_key||(this.storageKey?t={...t,storage_key:this.storageKey}:(this.storageKey=`layout_${((l=crypto==null?void 0:crypto.randomUUID)==null?void 0:l.call(crypto))||Date.now().toString(36)}`,t={...t,storage_key:this.storageKey})),this._config=t,this.storageKey=t.storage_key,this._syncEditorsStorageKey(),this.storageKey=t.storage_key||void 0,this._syncEditorsStorageKey(),this.gridSize=Number((c=t.grid)!=null?c:10),this.dragLiveSnap=!!t.drag_live_snap,this.autoSave=t.auto_save!==!1,this.autoSaveDebounce=Number((d=t.auto_save_debounce)!=null?d:800),this.editModePin=this.editModePin!=null?this.editModePin:(v=(f=t.edit_mode_pin)!=null?f:t.editModePin)!=null?v:"",this.containerBackground=(y=t.container_background)!=null?y:"transparent",this.cardBackground=(_=t.card_background)!=null?_:"var(--ha-card-background, var(--card-background-color))",this.hideHaHeader=!!((w=(g=t.hide_HA_Header)!=null?g:t.hide_ha_header)!=null&&w),this.hideHaSidebar=!!((E=(L=t.hide_HA_Sidebar)!=null?L:t.hide_ha_sidebar)!=null&&E),this.debug=!!t.debug,this.editMode=!1,this._backendOK=!1,this.disableOverlap=!!t.disable_overlap,this.containerSizeMode=t.container_size_mode||"dynamic",this.autoResizeCards=!!t.auto_resize_cards,this.animateCards=!!t.animate_cards,this.autoResizeCards?(P=this._startScaleWatch)==null||P.call(this):(D=this._stopScaleWatch)==null||D.call(this),(C=this._applyAutoScale)==null||C.call(this),this.containerFixedWidth=Number((A=t.container_fixed_width)!=null?A:0)||null,this.containerFixedHeight=Number((O=t.container_fixed_height)!=null?O:0)||null,this.containerPreset=t.container_preset||"fullhd",this.containerPresetOrient=t.container_preset_orientation||"auto",this.heroImage=(t==null?void 0:t.hero_image)||"https://i.postimg.cc/CxsWQgwp/Chat-GPT-Image-Sep-5-2025-09-26-16-AM.png",this.tabs=Array.isArray(t.tabs)?t.tabs:[],this.tabsPosition=t.tabs_position==="left"?"left":"top",this.defaultTab=t.default_tab||((M=(b=this.tabs[0])==null?void 0:b.id)!=null?M:"default"),this.hideTabsWhenSingle=t.hide_tabs_when_single!==!1,this.activeTab=this.defaultTab;try{let $=localStorage.getItem(`ddc_lasttab_${this.storageKey}`);$&&this.tabs.some(me=>me.id===$)&&(this.activeTab=$)}catch{}this.rootEl&&this.rootEl.classList.toggle("ddc-tabs-left-layout",this.tabsPosition==="left"),this.cardContainer&&this._applyContainerSizingFromConfig(!1);let o=a!==this.storageKey;if(this.editMode&&!this.__booting&&!o)try{this._isInHaEditorPreview()||this._queueSave("config-change")}catch{}this._applyGridVars();try{(R=this._applyBackgroundImageFromConfig)==null||R.call(this)}catch{}try{(ee=this._applyHaChromeVisibility_)==null||ee.call(this)}catch{}if(this._ensureOverlayZFix(),this._selection=new Set,this.__groupDrag=null,this.__editorCache=new Map,this.__stubCache=new Map,this._dbgInit(),this._dbgPush("init","Card configured",{storageKey_raw:t.storage_key,storageKey_slug:this.storageKey,autoSave:this.autoSave,grid:this.gridSize}),this.style.setProperty("--ddc-bg",this.containerBackground),this.style.setProperty("--ddc-card-bg",this.cardBackground),!window.jsyaml){let $=document.createElement("script");$.src="https://cdnjs.cloudflare.com/ajax/libs/js-yaml/4.1.0/js-yaml.min.js",document.head.appendChild($)}if(!window.interact){let $=document.createElement("script");$.src="https://cdn.jsdelivr.net/npm/interactjs/dist/interact.min.js",$.onload=()=>this._initInteract(),document.head.appendChild($)}if(this._helpersPromise=typeof window.loadCardHelpers=="function"?window.loadCardHelpers().catch(()=>null):Promise.resolve(null),!this._built){this._built=!0,this.shadowRoot.innerHTML=`
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
      .card-wrapper.editing{ border-color:var(--primary-color,#03a9f4); touch-action: none; }
      .card-wrapper.editing::after{
        content:""; position:absolute; inset:0; border:1px dashed var(--primary-color,#03a9f4);
        border-radius:12px; pointer-events:none; opacity:.35; z-index:5; box-sizing:border-box;
      }

      .shield{position:absolute; inset:0; z-index:10; background:transparent; pointer-events:none}
      .card-wrapper.editing .shield, .card-wrapper.dragging .shield{pointer-events:auto; cursor:grab}

      .resize-handle{
        display:none; position:absolute; bottom:0; right:0; width:40px; height:40px;
        background:var(--primary-color); color:#fff; border-top-left-radius:40px;
        cursor:se-resize; z-index:999; box-shadow:0 3px 8px rgba(0,0,0,.28);
        display:flex; align-items:center; justify-content:center;
        transition:background .15s, transform .1s, box-shadow .15s;
      }
      .resize-handle:hover{ transform:scale(1.05); box-shadow:0 6px 16px rgba(0,0,0,.35); filter:brightness(1.05); }
      .card-wrapper.editing .resize-handle{ display:flex }
      .resize-handle ha-icon{ --mdc-icon-size:20px; width:20px; height:20px; pointer-events:none; }

      /* Delete handle */
      .delete-handle{
        display:none; position:absolute; top:0; left:0; width:40px; height:40px;
        background:linear-gradient(135deg, rgba(236,72,72,.9) 0%, rgba(255,105,97,1) 100%);
        color:#fff; border-bottom-right-radius:40px; z-index:999;
        box-shadow:0 3px 8px rgba(0,0,0,.28); cursor:pointer; align-items:center; justify-content:center;
        transition:background .15s, transform .1s, box-shadow .15s;
      }
      .delete-handle:hover{ transform:scale(1.05); box-shadow:0 6px 16px rgba(0,0,0,.35); filter:brightness(1.05); }
      .card-wrapper.editing .delete-handle{ display:flex }
      .delete-handle ha-icon{ --mdc-icon-size:20px; width:20px; height:20px; pointer-events:none; }

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
  top: max(env(safe-area-inset-top, 0px), 0px);
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
  top: max(env(safe-area-inset-top,0px), 0px);
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
          <div class="card-container" id="cardContainer"></div>
        </div>


      `,this.cardContainer=this.shadowRoot.querySelector("#cardContainer");try{(q=this._applyBackgroundImageFromConfig)==null||q.call(this)}catch{}this.addButton=this.shadowRoot.querySelector("#addCardBtn"),this.reloadBtn=this.shadowRoot.querySelector("#reloadBtn"),this.diagBtn=this.shadowRoot.querySelector("#diagBtn"),this.exitEditBtn=this.shadowRoot.querySelector("#exitEditBtn"),this.storeBadge=this.shadowRoot.querySelector("#storeBadge"),this.exportBtn=this.shadowRoot.querySelector("#exportBtn"),this.importBtn=this.shadowRoot.querySelector("#importBtn"),this.exploreBtn=this.shadowRoot.querySelector("#exploreBtn"),this.applyLayoutBtn=this.shadowRoot.querySelector("#applyLayoutBtn"),this.copyBtn=this.shadowRoot.querySelector("#copyBtn"),this.pasteBtn=this.shadowRoot.querySelector("#pasteBtn"),this.settingsBtn=this.shadowRoot.querySelector("#settingsBtn"),this.tabsBar=this.shadowRoot.querySelector("#tabsBar"),this.rootEl=this.shadowRoot.querySelector(".ddc-root");try{this._renderTabs(),this._applyActiveTab()}catch{}this._applyGridVars(),this.addButton.addEventListener("click",()=>{this.editMode||this._toggleEditMode(!0),this._openCardManager()}),this.reloadBtn.addEventListener("click",()=>this._initialLoad(!0)),this.diagBtn.addEventListener("click",()=>this._openDiagnostics()),this.exitEditBtn.addEventListener("click",()=>this._toggleEditMode(!1)),this.exportBtn.addEventListener("click",()=>this._exportDesign()),this.importBtn.addEventListener("click",()=>this._importDesign()),this.applyLayoutBtn.addEventListener("click",()=>this._saveLayout(!1)),this.copyBtn&&this.copyBtn.addEventListener("click",()=>this._copySelection()),this.pasteBtn&&this.pasteBtn.addEventListener("click",()=>this._pasteClipboard()),this.settingsBtn&&this.settingsBtn.addEventListener("click",()=>this._openDashboardSettings()),window.addEventListener("keydown",$=>{var me;if(this.editMode){if(($.ctrlKey||$.metaKey)&&($.key==="s"||$.key==="S")&&($.preventDefault(),this._saveLayout(!1)),!this.__ddcResizeObs&&this.autoResizeCards){this.__ddcResizeObs=new ResizeObserver(()=>{var _e;return(_e=this._applyAutoScale)==null?void 0:_e.call(this)});try{this.__ddcResizeObs.observe(this)}catch{}try{this.__ddcResizeObs.observe(this.cardContainer)}catch{}try{this.parentElement&&this.__ddcResizeObs.observe(this.parentElement)}catch{}try{this.offsetParent&&this.__ddcResizeObs.observe(this.offsetParent)}catch{}window.addEventListener("resize",this.__ddcOnWinResize=()=>{var _e;return(_e=this._applyAutoScale)==null?void 0:_e.call(this)})}(me=this._applyAutoScale)==null||me.call(this)}}),this.exploreBtn.addEventListener("click",()=>window.open("https://hads.smarti.dev/","_blank","noopener,noreferrer")),this._applyContainerSizingFromConfig(!0),(K=this._applyAutoScale)==null||K.call(this),this._installLongPressToEnterEdit(),(ae=this._startScaleWatch)==null||ae.call(this),window.addEventListener("keydown",$=>{var me;$.key==="Escape"&&this.editMode&&this._toggleEditMode(!1),this.__ddcResizeObs||(this.__ddcResizeObs=new ResizeObserver(()=>{var _e;return(_e=this._applyAutoScale)==null?void 0:_e.call(this)}),this.__ddcResizeObs.observe(this),this.__ddcResizeObs.observe(this.cardContainer),window.addEventListener("resize",this.__ddcOnWinResize=()=>{var _e;return(_e=this._applyAutoScale)==null?void 0:_e.call(this)})),(me=this._applyAutoScale)==null||me.call(this)}),this._installSelectionMarquee(),this.cardContainer.addEventListener("mousedown",$=>{this.editMode&&($.target.closest(".card-wrapper")||!$.shiftKey&&!$.ctrlKey&&!$.metaKey&&this._clearSelection())})}try{this._isInHaEditorPreview()||this._queueSave("config-change")}catch{}this._updateStoreBadge(),this.cardContainer&&this._toggleEditMode(!1),this.__cfgReady=!0,o&&this.__booted?this._initialLoad(!0):!this.__booted&&this.__probed?(this.__booted=!0,this._initialLoad()):(this._applyContainerSizingFromConfig(!0),(ie=this._applyAutoScale)==null||ie.call(this),this._resizeContainer())}connectedCallback(){var t,a;try{(t=this._applyHaChromeVisibility_)==null||t.call(this)}catch{}if(this.__keyHandlerBound||(this.__keyHandler=o=>this._onKeyDown_(o),window.addEventListener("keydown",this.__keyHandler),this.__keyHandlerBound=!0),this.__boundExitEdit||(this.__boundExitEdit=()=>this._toggleEditMode(!1)),window.addEventListener("pagehide",this.__boundExitEdit),window.addEventListener("beforeunload",this.__boundExitEdit),this.__onVis=()=>{document.visibilityState==="hidden"&&this._toggleEditMode(!1)},document.addEventListener("visibilitychange",this.__onVis),this._toggleEditMode(!1),!this.__visObs){let o=new IntersectionObserver(l=>{l.some(c=>c.isIntersecting)&&requestAnimationFrame(()=>this._applyAutoScale&&this._applyAutoScale())},{root:null,threshold:0});o.observe(this),this.__visObs=o}this.__ddcOnWinResize=this.__ddcOnWinResize||(()=>this._applyAutoScale&&this._applyAutoScale()),window.addEventListener("resize",this.__ddcOnWinResize);try{(a=this.__ddcBindPointerListeners)==null||a.call(this)}catch{}}disconnectedCallback(){var t,a,o,l,c;try{(t=this._setHeaderVisible_)==null||t.call(this,!0),(a=this._setSidebarVisible_)==null||a.call(this,!0)}catch{}try{(o=this._applyHaChromeVisibility_)==null||o.call(this)}catch{}this.__keyHandlerBound&&this.__keyHandler&&(window.removeEventListener("keydown",this.__keyHandler),this.__keyHandlerBound=!1,this.__keyHandler=null),this.__keyHandlerBound||(this.__keyHandler=d=>this._onKeyDown_(d),window.addEventListener("keydown",this.__keyHandler),this.__keyHandlerBound=!0),window.removeEventListener("pagehide",this.__boundExitEdit),window.removeEventListener("beforeunload",this.__boundExitEdit),document.removeEventListener("visibilitychange",this.__onVis);try{(l=this.__ddcResizeObs)==null||l.disconnect()}catch{}if(this.__ddcResizeObs=null,(c=this._stopScaleWatch)==null||c.call(this),this.__ddcOnWinResize&&(window.removeEventListener("resize",this.__ddcOnWinResize),this.__ddcOnWinResize=null),this.__lpInstalled&&this.__lpHandlers){let d=this.cardContainer;d==null||d.removeEventListener("mousedown",this.__lpHandlers.mouseDown),window.removeEventListener("mousemove",this.__lpHandlers.mouseMove),window.removeEventListener("mouseup",this.__lpHandlers.mouseUp),window.removeEventListener("contextmenu",this.__lpHandlers.contextMenu),d==null||d.removeEventListener("touchstart",this.__lpHandlers.touchStart),window.removeEventListener("touchmove",this.__lpHandlers.touchMove),window.removeEventListener("touchend",this.__lpHandlers.touchEnd),window.removeEventListener("touchcancel",this.__lpHandlers.touchCancel),this.__lpInstalled=!1,this.__lpHandlers=null}try{this.__visObs&&this.__visObs.disconnect()}catch{}this.__visObs=null,this.__ddcOnWinResize&&window.removeEventListener("resize",this.__ddcOnWinResize);try{this.__ddcPtrBound&&(this.removeEventListener("pointerdown",this.__onDDCPointerDown),this.removeEventListener("pointermove",this.__onDDCPointerMove),window.removeEventListener("pointerup",this.__onDDCPointerUp),window.removeEventListener("pointercancel",this.__onDDCPointerUp),this.__ddcPtrBound=!1)}catch{}}set hass(t){var o;this._hass=t,cc("set hass"),!this.__probed&&t&&(this.__probed=!0,this._probeBackend().then(()=>{this.__probed=!0,!this.__booted&&this.__cfgReady&&(this.__booted=!0,this._initialLoad(!0))}));let a=((o=this.cardContainer)==null?void 0:o.children)||[];for(let l of a){let c=l.firstElementChild;c&&c.hass!==t&&(c.hass=t)}try{this._applyVisibility_()}catch{}}get hass(){return this._hass}async _initialLoad(t=!1){var a,o,l,c,d,f,v,y,_,g,w,L,E,P,D,C;if(!this.__booting){this.__booting=!0;try{this._loading=!0,t&&this.cardContainer&&(this.cardContainer.innerHTML=""),this._dbgPush("boot","Initial load start",{force:t});let A=[],O=null;if(this._backendOK&&this.storageKey)try{O=await this._loadLayoutFromBackend(this.storageKey)}catch(q){this._dbgPush("boot","Backend load failed",{error:String(q)})}if(!O&&this.storageKey){let q=null;try{q=JSON.parse(localStorage.getItem(`ddc_local_${this.storageKey}`)||"null")}catch{}if(q)if(this._dbgPush("boot","Found local snapshot",{bytes:JSON.stringify(q).length}),this._backendOK)try{await this._saveLayoutToBackend(this.storageKey,q),this._dbgPush("boot","Migrated local -> backend"),O=q}catch(K){this._dbgPush("boot","Migration failed, staying local",{error:String(K)}),O=q}else O=q}!O&&((o=(a=this._config)==null?void 0:a.cards)!=null&&o.length)&&(this._dbgPush("boot","Using embedded config"),O={cards:this._config.cards});let b={...this._config||{}};if(O!=null&&O.options){let{storage_key:q,...K}=O.options;this._applyImportedOptions(K,!0)}else typeof(O==null?void 0:O.grid)=="number"&&this._applyImportedOptions({grid:O.grid},!0);let M=["storage_key","grid","drag_live_snap","auto_save","auto_save_debounce","container_background","card_background","debug","disable_overlap","container_size_mode","container_fixed_width","container_fixed_height","container_preset","container_preset_orientation","tabs","tabs_position","default_tab","hide_tabs_when_single","auto_resize_cards"],R={};for(let q of M)b[q]!==void 0&&(R[q]=b[q]);Object.keys(R).length&&this._applyImportedOptions(R,!0);let ee=!1;if((l=O==null?void 0:O.cards)!=null&&l.length){for(let q of O.cards){if(!(q!=null&&q.card)||typeof q.card=="object"&&Object.keys(q.card).length===0){let ie=this._makePlaceholderAt(((c=q.position)==null?void 0:c.x)||0,((d=q.position)==null?void 0:d.y)||0,((f=q.size)==null?void 0:f.width)||200,((v=q.size)==null?void 0:v.height)||200);this.cardContainer.appendChild(ie);try{this._rebuildOnce(ie.firstElementChild)}catch{}ee=!0;continue}let K=await this._createCard(q.card),ae=this._makeWrapper(K);this.editMode&&ae.classList.add("editing"),ae.dataset.tabId=this._normalizeTabId(q.tabId||q.tab_id||this.defaultTab),this._setCardPosition(ae,((y=q.position)==null?void 0:y.x)||0,((_=q.position)==null?void 0:_.y)||0),ae.style.width=`${(w=(g=q.size)==null?void 0:g.width)!=null?w:14*this.gridSize}px`,ae.style.height=`${(E=(L=q.size)==null?void 0:L.height)!=null?E:10*this.gridSize}px`,q.z!=null&&(ae.style.zIndex=String(q.z)),this.cardContainer.appendChild(ae);try{this._rebuildOnce(ae.firstElementChild)}catch{}this._initCardInteract(ae),ee=!0}this._resizeContainer(),(P=this._applyAutoScale)==null||P.call(this),this._dbgPush("boot","Layout applied",{count:O.cards.length})}ee||(this._showEmptyPlaceholder(),(D=this._applyAutoScale)==null||D.call(this),this._dbgPush("boot","No saved layout found; showing placeholder")),this._updateStoreBadge(),this._syncEmptyStateUI(),t&&(this._cardModProcessed=!1),setTimeout(()=>{this._processCardModOnce()},100);try{A.forEach(q=>{try{q.dispatchEvent(new Event("ll-rebuild",{bubbles:!0,composed:!0}))}catch{}})}catch{}}finally{this._loading=!1,this.__booting=!1,this.__dirty=!1,(C=this._updateApplyBtn)==null||C.call(this);try{this._renderTabs(),this._applyActiveTab()}catch{}try{this._applyVisibility_()}catch{}}}}_normalizeTabId(t){let a=Array.isArray(this.tabs)?this.tabs.map(o=>o.id):[];return a.length?t&&a.includes(t)?t:this.defaultTab||a[0]:this.defaultTab||"default"}_renderTabs(){var o,l,c;let t=this.tabsBar;if(!t)return;let a=Array.isArray(this.tabs)?this.tabs:[];if(!a.length||a.length===1&&this.hideTabsWhenSingle){t.style.display="none";return}t.style.display="",t.className="ddc-tabs "+(this.tabsPosition==="left"?"ddc-tabs-left":""),t.innerHTML="";for(let d of a){let f=document.createElement("button");f.className="ddc-tab"+(d.id===this.activeTab?" active":""),f.dataset.tabId=d.id,f.title=d.label||d.id,f.innerHTML=`${d.icon?`<ha-icon icon="${d.icon}"></ha-icon>`:""}<span class="ddc-tab-label">${(o=d.label)!=null?o:d.id}</span>`,f.addEventListener("click",()=>{if(this.activeTab!==d.id){this.activeTab=d.id;try{localStorage.setItem(`ddc_lasttab_${this.storageKey}`,d.id)}catch{}this._applyActiveTab(),this._renderTabs();try{this._applyVisibility_()}catch{}}}),t.appendChild(f)}this.rootEl&&this.rootEl.classList.toggle("ddc-tabs-left-layout",this.tabsPosition==="left");try{(l=this._updateTabsA11y_)==null||l.call(this)}catch{}try{(c=this._syncTabsWidth_)==null||c.call(this)}catch{}}_applyActiveTab(){var o,l,c;let t=this._normalizeTabId(this.activeTab);(((l=(o=this.cardContainer)==null?void 0:o.querySelectorAll)==null?void 0:l.call(o,".card-wrapper"))||[]).forEach(d=>{var v;let f=d.dataset.tabId?this._normalizeTabId(d.dataset.tabId):this.defaultTab;if(!this.tabs||!this.tabs.length){d.style.display="",d.inert=!1,d.classList.remove("ddc-hidden");return}f===t?(d.style.display="",d.inert=!1,d.classList.remove("ddc-hidden")):(d.style.display="none",d.inert=!0,d.classList.add("ddc-hidden"),d.classList.remove("ddc-selected"),(v=this._applyAutoScale)==null||v.call(this))});try{this._clearSelection()}catch{}try{this.animateCards&&((c=this._animateCards)==null||c.call(this))}catch{}}_animateCards(){var t,a,o,l;try{let c=((a=(t=this.cardContainer)==null?void 0:t.querySelectorAll)==null?void 0:a.call(t,".card-wrapper"))||[],d=(l=(o=window.matchMedia)==null?void 0:o.call(window,"(prefers-reduced-motion: reduce)"))==null?void 0:l.matches,f=800,v=.8,_=f*.3,g=f-_;c.forEach(w=>{var b,M,R;let L=(b=window.getComputedStyle)==null?void 0:b.call(window,w);if(w.style.display==="none"||L&&L.display==="none"||w.classList.contains("ddc-hidden"))return;let P=L&&L.transform&&L.transform!=="none"?L.transform:"",D=100*v,C=`${P} translate3d(0, ${D}%, 0)`,A=`${P} translate3d(0, 0, 0)`,O=Math.random()*(g*Math.min(v,2));if(d){try{w.animate([{opacity:0},{opacity:1}],{duration:f*.15,delay:O,easing:"linear",fill:"backwards"})}catch{w.style.opacity="0",setTimeout(()=>{w.style.transition=`opacity ${f*.15}ms linear`,w.style.opacity="1"},O)}return}try{w.style.willChange="opacity, transform";let ee="cubic-bezier(0.4, 0, 0.2, 1)";w.animate([{opacity:0},{opacity:1}],{duration:_,delay:O,easing:"linear",fill:"backwards"}),(R=(M=w.animate([{transform:C},{transform:A}],{duration:_,delay:O,easing:ee,fill:"backwards"})).addEventListener)==null||R.call(M,"finish",()=>{w.style.willChange=""})}catch{w.style.opacity="0",w.style.transform=C,w.style.willChange="opacity, transform",setTimeout(()=>{w.style.transition=`opacity ${_}ms linear, transform ${_}ms cubic-bezier(0.4,0,0.2,1)`,w.style.opacity="1",w.style.transform=A,setTimeout(()=>{w.style.transition="",w.style.willChange=""},_+60)},O)}})}catch(c){console.warn("[ddc:animate] animation error",c)}}_addTabSelectorToChip(t,a=null){if(!this.tabs||!this.tabs.length)return;let o=t.querySelector(".chip");if(!o)return;let l=o.querySelector("select.ddc-chip-tab");l||(l=document.createElement("select"),l.className="ddc-chip-tab",l.style.marginLeft="6px",l.title="Assign to tab",o.appendChild(l)),l.innerHTML="";for(let d of this.tabs){let f=document.createElement("option");f.value=d.id,f.textContent=d.label||d.id,l.appendChild(f)}let c=this._normalizeTabId(a||t.dataset.tabId||this.activeTab||this.defaultTab);l.value=c,t.dataset.tabId=c,l.onchange=()=>{t.dataset.tabId=this._normalizeTabId(l.value),this._applyActiveTab();try{this._applyVisibility_()}catch{}try{this._queueSave("tab-change")}catch{}}}_toggleEditMode(t=null){var w,L,E,P,D,C,A,O,b,M,R,ee,q;try{(w=this.__clearPressTimer)==null||w.call(this)}catch{}let a=t===null?!this.editMode:!!t,o=!this.editMode&&a;try{let K=this.config&&this.config.edit_mode_pin!=null?String(this.config.edit_mode_pin):"",ie=((this.editModePin!=null?String(this.editModePin):"")||K).trim();if(a&&!this.editMode&&ie){let $=window.prompt("Enter PIN / password to open Edit Mode:");if($===null)return;if(String($).trim()!==ie){(L=this._toast)==null||L.call(this,"Incorrect PIN/password.");return}}}catch{}let l=this.renderRoot||this.shadowRoot||this,c=(E=l==null?void 0:l.querySelector)==null?void 0:E.call(l,".ddc-toolbar.streamlined.v2, .ddc-toolbar.streamlined.v3"),d=(K,ae)=>{try{K&&(K.style.display=ae)}catch{}},f="inline-block",v="none",y=()=>{d(this.addButton,f),d(this.reloadBtn,f),d(this.diagBtn,f),d(this.exitEditBtn,f),d(this.exportBtn,f),d(this.importBtn,f),d(this.exploreBtn,f),d(this.storeBadge,f),d(this.applyLayoutBtn,f),d(this.copyBtn,f),d(this.pasteBtn,f),d(this.settingsBtn,f)},_=()=>{d(this.addButton,v),d(this.reloadBtn,v),d(this.diagBtn,v),d(this.exitEditBtn,v),d(this.exportBtn,v),d(this.importBtn,v),d(this.exploreBtn,v),d(this.storeBadge,v),d(this.applyLayoutBtn,v),d(this.copyBtn,v),d(this.pasteBtn,v),d(this.settingsBtn,v)};if(c)if(a)c.setAttribute("data-force-open","1"),c.style.display="grid",y(),requestAnimationFrame(()=>{let ae=c.scrollHeight||0;c.style.setProperty("--open-h",ae+"px"),c.classList.add("is-open")});else{c.setAttribute("data-force-open","1"),c.style.display="grid";let ae=c.scrollHeight||0;c.style.setProperty("--open-h",ae+"px"),requestAnimationFrame(()=>{c.classList.remove("is-open")}),setTimeout(()=>{_(),c.removeAttribute("data-force-open")},260)}else a?y():_();if(this.editMode=a,(P=this._syncEmptyStateUI)==null||P.call(this),(D=this.cardContainer)==null||D.classList.toggle("grid-on",this.editMode),(((A=(C=this.cardContainer)==null?void 0:C.querySelectorAll)==null?void 0:A.call(C,".card-wrapper"))||[]).forEach(K=>{K.classList.toggle("editing",this.editMode);let ae=K.querySelector(".resize-handle");ae&&(ae.style.display=this.editMode?"flex":"none"),!K.dataset.placeholder&&window.interact&&window.interact(K).draggable(this.editMode).resizable(this.editMode),K.style.touchAction=this.editMode?"none":"auto"}),this.editMode||(O=this._clearSelection)==null||O.call(this),this.editMode||(b=this.cardContainer)==null||b.querySelectorAll(".card-wrapper.dragging").forEach(K=>K.classList.remove("dragging")),o){let K=(M=this.__lastHoldX)!=null?M:null,ae=(R=this.__lastHoldY)!=null?R:null;(ee=this._playEditRipple)==null||ee.call(this,K,ae)}try{(q=this._applyHaChromeVisibility_)==null||q.call(this)}catch{}}_isInHaEditorPreview(){let t=this;for(;t;){let a=t.nodeType===1&&t.localName?t.localName.toLowerCase():"";if(a==="hui-card-editor"||a==="hui-dialog-edit-card"||a==="hui-card-preview"||a==="ha-dialog"||a==="mwc-dialog")return!0;let o=t.getRootNode&&t.getRootNode();t=t.parentElement||o&&o.host||null}return!1}_installLongPressToEnterEdit(){if(this.__lpInstalled)return;this.__lpInstalled=!0;let t=this.cardContainer;if(!t)return;let a=800,o=18,l=b=>!!b&&typeof b=="object"&&b.nodeType===1,c=(b,M)=>{try{return!!(b&&M&&typeof b.contains=="function"&&l(M)&&b.contains(M))}catch{return!1}},d=b=>c(this.cardContainer,b),f=b=>{var ee,q,K;let M=(q=(ee=b.target)==null?void 0:ee.closest)==null?void 0:q.call(ee,".card-wrapper");if(l(M)&&d(M)&&!M.classList.contains("ddc-placeholder"))return!0;let R=typeof b.composedPath=="function"?b.composedPath():[];for(let ae of R)if(l(ae)&&d(ae)&&(K=ae.classList)!=null&&K.contains("card-wrapper")&&!ae.classList.contains("ddc-placeholder"))return!0;return!1},v=(b,M)=>{let R=document.createElement("div");R.className="ddc-press-ring",document.body.appendChild(R),Object.assign(R.style,{position:"fixed",left:`${b}px`,top:`${M}px`,zIndex:"100000",width:"44px",height:"44px",pointerEvents:"none",marginLeft:"-22px",marginTop:"-22px",filter:"drop-shadow(0 2px 6px rgba(0,0,0,.35))"}),R.innerHTML=`
      <svg viewBox="0 0 44 44" aria-hidden="true" style="width:44px;height:44px">
        <circle cx="22" cy="22" r="18" style="stroke:rgba(255,255,255,.45);stroke-width:4;fill:none"></circle>
        <circle class="pr-fg" cx="22" cy="22" r="18" style="stroke:var(--primary-color);stroke-width:4;fill:none;stroke-linecap:round"></circle>
        <circle cx="22" cy="22" r="2" style="fill:var(--primary-color);opacity:.95"></circle>
      </svg>`;let ee=R.querySelector(".pr-fg"),q=18,K=2*Math.PI*q;return ee.style.strokeDasharray=`${K}`,ee.style.strokeDashoffset=`${K}`,requestAnimationFrame(()=>{ee.style.transition=`stroke-dashoffset ${a}ms linear`,ee.style.strokeDashoffset="0"}),{el:R,move(ae,ie){R.style.left=`${ae}px`,R.style.top=`${ie}px`},remove(){try{R.remove()}catch{}}}},y=null,_=null,g=0,w=0,L=null,E=()=>{y&&clearTimeout(y),y=null,_==null||_.remove(),_=null};this.__clearPressTimer=E;let P=b=>{b.pointerType==="mouse"&&b.button!==0||this._isInHaEditorPreview()||!d(b.target)||f(b)||(L=b.pointerId,g=b.clientX,w=b.clientY,this.__lastHoldX=g,this.__lastHoldY=w,_=v(g,w),y=setTimeout(()=>{var R;E();let M=!this.editMode;this._toggleEditMode(M),(R=this._toast)==null||R.call(this,`Edit mode ${M?"enabled":"disabled"}`)},a))},D=b=>{y==null||b.pointerId!==L||(_==null||_.move(b.clientX,b.clientY),(Math.abs(b.clientX-g)>o||Math.abs(b.clientY-w)>o)&&E())},C=b=>{b.pointerId===L&&(E(),L=null)},A=b=>{if(y)return b.preventDefault(),b.stopPropagation(),!1},O=b=>{var R;if(this._isInHaEditorPreview()||!d(b.target)||f(b))return;let M=!this.editMode;this._toggleEditMode(M),(R=this._toast)==null||R.call(this,`Edit mode ${M?"enabled":"disabled"}`)};t.addEventListener("pointerdown",P),window.addEventListener("pointermove",D,{passive:!0}),window.addEventListener("pointerup",C,{passive:!0}),window.addEventListener("pointercancel",C,{passive:!0}),window.addEventListener("contextmenu",A),t.addEventListener("dblclick",O),this.__lpHandlers={onPointerDown:P,onPointerMove:D,onPointerUpOrCancel:C,onContextMenu:A,onDblClick:O}}_isLayoutEmpty(){let t=this.cardContainer;return t?t.querySelectorAll(".card-wrapper:not(.ddc-placeholder)").length===0:!0}_syncEmptyStateUI(){let t=this._isLayoutEmpty();if(this.addButton){let o=this.editMode||t;this.addButton.style.display=o?"inline-block":"none",this.addButton.classList.toggle("cta-empty",!this.editMode&&t)}let a=o=>o&&(o.style.display=this.editMode?"inline-block":"none");a(this.reloadBtn),a(this.diagBtn),a(this.exitEditBtn),a(this.exportBtn),a(this.importBtn),a(this.exploreBtn),a(this.storeBadge),a(this.applyLayoutBtn)}_updateApplyBtn(){this.applyLayoutBtn&&(this.applyLayoutBtn.disabled=!this.__dirty)}_markDirty(t=""){var a;this.__dirty=!0,this._updateApplyBtn(),(a=this._dbgPush)==null||a.call(this,"dirty","Marked dirty",{reason:t})}_playEditRipple(t=null,a=null){let o=this.cardContainer;if(!o)return;let l=o.getBoundingClientRect(),c=t==null?l.left+l.width/2:t,d=a==null?l.top+l.height/2:a,f=c-l.left,v=d-l.top,y=document.createElement("div");y.className="ddc-ripple-veil",y.style.setProperty("--rip-x",`${f}px`),y.style.setProperty("--rip-y",`${v}px`),o.appendChild(y),setTimeout(()=>y.remove(),450)}_initInteract(){this.cardContainer.querySelectorAll(".card-wrapper").forEach(a=>this._initCardInteract(a))}_initCardInteract(t){if(!window.interact||t.dataset.placeholder)return;let a=this.gridSize,o=!!this.dragLiveSnap,c=[window.interact.modifiers.restrictRect({restriction:"parent",endOnly:!0})];if(this.dragLiveSnap){let d=window.interact.snappers.grid({x:this.gridSize,y:this.gridSize});c.push(window.interact.modifiers.snap({targets:[d],range:1/0,offset:"startCoords"}))}window.interact(t).draggable({enabled:this.editMode,inertia:!1,modifiers:c,listeners:{start:d=>{this._selection.has(t)||(!(d!=null&&d.shiftKey)&&!(d!=null&&d.ctrlKey)&&!(d!=null&&d.metaKey)&&this._clearSelection(),this._toggleSelection(t,!0));let f=Array.from(this._selection);this.__groupDrag={leader:t,members:f,startRaw:new Map(f.map(y=>[y,{x:parseFloat(y.getAttribute("data-x-raw"))||parseFloat(y.getAttribute("data-x"))||0,y:parseFloat(y.getAttribute("data-y-raw"))||parseFloat(y.getAttribute("data-y"))||0,w:parseFloat(y.style.width)||y.getBoundingClientRect().width,h:parseFloat(y.style.height)||y.getBoundingClientRect().height}]))},this.__collisionOriginals=new Map,this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)").forEach(y=>{let _=parseFloat(y.getAttribute("data-x-raw"))||parseFloat(y.getAttribute("data-x"))||0,g=parseFloat(y.getAttribute("data-y-raw"))||parseFloat(y.getAttribute("data-y"))||0;this.__collisionOriginals.set(y,{x:_,y:g})}),f.forEach(y=>{y.classList.add("dragging"),y.getAttribute("data-x-raw")===null&&y.setAttribute("data-x-raw",y.getAttribute("data-x")||"0"),y.getAttribute("data-y-raw")===null&&y.setAttribute("data-y-raw",y.getAttribute("data-y")||"0")})},move:d=>{if(!this.__groupDrag)return;let f=this.gridSize,v=!!this.dragLiveSnap,y=this.__groupDrag.leader,_=this.__groupDrag.startRaw.get(y),g=(parseFloat(y.getAttribute("data-x-raw"))||_.x)+d.dx,w=(parseFloat(y.getAttribute("data-y-raw"))||_.y)+d.dy,L=g-_.x,E=w-_.y,P=this.__groupDrag.members.map(D=>{let C=this.__groupDrag.startRaw.get(D),A=C.x+L,O=C.y+E,b=v?Math.round(A/f)*f:A,M=v?Math.round(O/f)*f:O;return{el:D,rawX:A,rawY:O,snapX:b,snapY:M,w:C.w,h:C.h}});this.disableOverlap&&this._pushCardsOutOfTheWay(P,L,E,v,f),y.setAttribute("data-x-raw",String(g)),y.setAttribute("data-y-raw",String(w));for(let D of P)D.el.setAttribute("data-x-raw",String(D.rawX)),D.el.setAttribute("data-y-raw",String(D.rawY)),this._setCardPosition(D.el,D.snapX,D.snapY);this._resizeContainer()},end:d=>{if(!this.__groupDrag)return;let f=this.gridSize,v=this.__groupDrag.members.map(y=>{let _=parseFloat(y.getAttribute("data-x-raw"))||parseFloat(y.getAttribute("data-x"))||0,g=parseFloat(y.getAttribute("data-y-raw"))||parseFloat(y.getAttribute("data-y"))||0,w=Math.round(_/f)*f,L=Math.round(g/f)*f,E=parseFloat(y.style.width)||y.getBoundingClientRect().width,P=parseFloat(y.style.height)||y.getBoundingClientRect().height;return{el:y,rawX:_,rawY:g,snapX:w,snapY:L,w:E,h:P}});this.disableOverlap&&this._pushCardsOutOfTheWay(v,0,0,!1,f);for(let y of v)this._setCardPosition(y.el,y.snapX,y.snapY),y.el.setAttribute("data-x-raw",String(y.snapX)),y.el.setAttribute("data-y-raw",String(y.snapY));for(let y of this.__groupDrag.members)y.classList.remove("dragging");this._resizeContainer(),this._isContainerFixed()&&this._clampAllCardsInside(),this._queueSave(this.__groupDrag.members.length>1?"group-drag-end":"drag-end"),this.__groupDrag=null,this.__collisionOriginals=null}}}),window.interact(t).resizable({enabled:this.editMode,edges:{right:".resize-handle",bottom:".resize-handle"},inertia:!1,listeners:{move:d=>{let f=this.gridSize,v=!!this.dragLiveSnap,y=parseFloat(t.style.width)||t.getBoundingClientRect().width,_=parseFloat(t.style.height)||t.getBoundingClientRect().height,{width:g,height:w}=d.rect,L=v?Math.max(f,Math.round(g/f)*f):g,E=v?Math.max(f,Math.round(w/f)*f):w,P=parseFloat(t.getAttribute("data-x"))||0,D=parseFloat(t.getAttribute("data-y"))||0,C=L,A=E;if(this._isContainerFixed()){let{w:b,h:M}=this._getContainerSize();C=Math.min(L,Math.max(this.gridSize,b-P)),A=Math.min(E,Math.max(this.gridSize,M-D))}let O=[this._rectFor(t,P,D,C,A)];this.disableOverlap&&this._anyCollisionFor(O,new Set([t]))||(t.style.width=`${C}px`,t.style.height=`${A}px`,this._resizeContainer())},end:()=>{let d=this.gridSize,f=parseFloat(t.style.width)||t.getBoundingClientRect().width,v=parseFloat(t.style.height)||t.getBoundingClientRect().height,y=Math.max(d,Math.round(f/d)*d),_=Math.max(d,Math.round(v/d)*d),g=parseFloat(t.getAttribute("data-x"))||0,w=parseFloat(t.getAttribute("data-y"))||0;if(this._isContainerFixed()){let{w:E,h:P}=this._getContainerSize();y=Math.min(y,Math.max(d,E-g)),_=Math.min(_,Math.max(d,P-w))}let L=[this._rectFor(t,g,w,y,_)];this.disableOverlap&&this._anyCollisionFor(L,new Set([t]))||(t.style.width=`${y}px`,t.style.height=`${_}px`),this._resizeContainer(),this._isContainerFixed()&&this._clampAllCardsInside(),this._queueSave("resize-end")}}}),t.addEventListener("mousedown",d=>{this.editMode&&(d.target.closest(".resize-handle")||d.target.closest(".delete-handle")||d.target.closest(".chip")||(d.shiftKey||d.ctrlKey||d.metaKey?(d.stopPropagation(),this._toggleSelection(t)):this._selection.has(t)||(this._clearSelection(),this._toggleSelection(t,!0))))})}async _createCard(t){let o=(await this._helpersPromise||await window.loadCardHelpers()).createCardElement(t);if(o.hass=this.hass,t.type==="custom:mod-card"&&(await new Promise(l=>setTimeout(l,0)),o.setConfig&&typeof o.setConfig=="function"))try{o.setConfig(t)}catch{}return o}_makeWrapper(t){let a=document.createElement("div");a.classList.add("card-wrapper"),a.dataset.tabId=this._normalizeTabId(this.activeTab||this.defaultTab),this.editMode&&a.classList.add("editing"),a.style.zIndex||(a.style.zIndex=String(this._highestZ()+1));let o=document.createElement("div");o.className="chip",o.innerHTML=`
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
    `;let l=document.createElement("div");l.className="delete-handle",l.innerHTML='<ha-icon icon="mdi:close-thick"></ha-icon>',l.addEventListener("click",f=>{var v,y;f.stopPropagation(),this._selection.size>1&&this._selection.has(a)?(Array.from(this._selection).forEach(g=>g.remove()),this._clearSelection(),this._resizeContainer(),this._queueSave("delete-multi"),(v=this._ensurePlaceholderIfEmpty)==null||v.call(this)):(a.remove(),this._resizeContainer(),this._queueSave("delete"),(y=this._ensurePlaceholderIfEmpty)==null||y.call(this))});try{this._addTabSelectorToChip(a,a.dataset.tabId)}catch{}o.addEventListener("click",async f=>{var y,_,g,w,L;f.stopPropagation();let v=(g=(_=(y=f.target)==null?void 0:y.closest("button"))==null?void 0:_.dataset)==null?void 0:g.act;if(v){if(v==="delete")this._selection.size>1&&this._selection.has(a)?(Array.from(this._selection).forEach(P=>P.remove()),this._clearSelection(),this._resizeContainer(),this._queueSave("delete-multi"),this._ensurePlaceholderIfEmpty()):(a.remove(),this._resizeContainer(),this._queueSave("delete"),this._ensurePlaceholderIfEmpty());else if(v==="duplicate"||v==="copy"){let E=this._selection.size>1&&this._selection.has(a)?Array.from(this._selection):[a];for(let P of E){let D=this._extractCardConfig(P.firstElementChild)||{},C=await this._createCard(D),A=this._makeWrapper(C);A.style.width=P.style.width,A.style.height=P.style.height;let O=(parseFloat(P.getAttribute("data-x"))||0)+this.gridSize,b=(parseFloat(P.getAttribute("data-y"))||0)+this.gridSize;this._setCardPosition(A,O,b),A.style.zIndex=String(this._highestZ()+1);try{let M=(w=P.dataset)==null?void 0:w.tabId;M&&(A.dataset.tabId=M)}catch{}this.cardContainer.appendChild(A);try{(L=this._addTabSelectorToChip)==null||L.call(this,A,A.dataset.tabId)}catch{}try{this._rebuildOnce(A.firstElementChild)}catch{}this._initCardInteract(A)}this._resizeContainer(),this._queueSave("duplicate")}else if(v==="front")this._adjustZ(a,1);else if(v==="back")this._adjustZ(a,-1);else if(v==="front-most"){let E=this._selection.size>1&&this._selection.has(a)?Array.from(this._selection):[a];E.sort((D,C)=>{let A=parseInt(D.style.zIndex||"1",10),O=parseInt(C.style.zIndex||"1",10);return A-O});let P=this._highestZ();for(let D of E)P+=1,D.style.zIndex=String(P);this._queueSave("z-change")}else if(v==="back-most"){let E=this._selection.size>1&&this._selection.has(a)?Array.from(this._selection):[a];E.sort((C,A)=>{let O=parseInt(C.style.zIndex||"1",10);return parseInt(A.style.zIndex||"1",10)-O});let P=1/0;this.cardContainer.querySelectorAll(".card-wrapper").forEach(C=>{let A=parseInt(C.style.zIndex||"1",10);A<P&&(P=A)}),isFinite(P)||(P=1);let D=P;for(let C of E)D-=1,C.style.zIndex=String(Math.max(1,D));this._queueSave("z-change")}else if(v==="edit"){let E=this._extractCardConfig(a.firstElementChild)||{};await this._openSmartPicker("edit",E,async P=>{var A,O,b;let D=a.firstElementChild,C=await this._createCard(P);try{a.dataset.cfg=JSON.stringify(P),(A=this._hasCardModDeep)!=null&&A.call(this,P)?a.dataset.needsCardMod="true":delete a.dataset.needsCardMod}catch{}a.replaceChild(C,D),await Ui();try{if(C.hass=this.hass,(O=C.requestUpdate)==null||O.call(C),C.updateComplete)try{await C.updateComplete}catch{}}catch{}try{this._rebuildOnce(C)}catch{}try{C.dispatchEvent(new Event("ll-rebuild",{bubbles:!0,composed:!0}))}catch{}(b=this._resizeContainer)==null||b.call(this);try{clearTimeout(this._saveTimer),await this._saveLayout(!0)}catch(M){console.warn("Save before reload failed",M)}window.location.reload()})}}});let c=document.createElement("div");c.className="shield";let d=document.createElement("div");d.classList.add("resize-handle"),this.editMode||(d.style.display="none"),d.title="Resize",d.innerHTML='<ha-icon icon="mdi:resize-bottom-right"></ha-icon>';try{let f=t._config||t.config;f&&typeof f=="object"&&Object.keys(f).length&&(a.dataset.cfg=JSON.stringify(f),this._hasCardModDeep(f)&&(a.dataset.needsCardMod="true"))}catch{}a.append(t,c,o,l,d);try{this._rebuildOnce(t)}catch{}return a}_makePlaceholderAt(t=0,a=0,o=400,l=400){let c=document.createElement("div");c.classList.add("card-wrapper","ddc-placeholder"),c.dataset.placeholder="1",this.editMode&&c.classList.add("editing"),this._setCardPosition(c,t,a),c.style.width=`${o}px`,c.style.height=`${l}px`,c.style.zIndex=String(this._highestZ()+1);let d=document.createElement("div");d.className="ddc-placeholder-inner",d.setAttribute("aria-hidden","true");let f=document.createElement("div");f.className="ddc-hero";let v=this.heroImage;if(v){let w=document.createElement("img");w.src=v,w.alt="",f.appendChild(w)}let y=document.createElement("div");y.className="ddc-title",y.textContent="Drag & Drop Card";let _=document.createElement("div");_.className="ddc-sub",_.textContent="Hold me / double click me to enter Edit mode",f.append(y,_),d.appendChild(f),c.addEventListener("dblclick",w=>{w.stopPropagation(),this._toggleEditMode(!0)});let g=document.createElement("div");return g.className="shield",c.append(d,g),c}_processCardModOnce(){var a;if(this._cardModProcessed)return;this._cardModProcessed=!0,(((a=this.cardContainer)==null?void 0:a.querySelectorAll('[data-needs-card-mod="true"]'))||[]).forEach(o=>{let l=o.firstElementChild;if(!l)return;let c=l._config||l.config;if(c){if(c.type==="custom:mod-card")setTimeout(()=>{if(l.updateComplete)l.updateComplete.then(()=>{l.requestUpdate()});else if(l.setConfig)try{l.setConfig({...c})}catch{}},100);else if(c.card_mod&&l.setConfig)try{l.setConfig({...c})}catch{}}})}_showEmptyPlaceholder(){if(this.cardContainer.querySelector(".ddc-placeholder"))return;let t=this._makePlaceholderAt(0,0,200,200);this.cardContainer.appendChild(t),this._resizeContainer(),this._syncEmptyStateUI()}_hideEmptyPlaceholder(){this.cardContainer.querySelectorAll(".ddc-placeholder").forEach(t=>t.remove())}_ensurePlaceholderIfEmpty(){var a;this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)").length===0&&this._showEmptyPlaceholder(),(a=this._applyAutoScale)==null||a.call(this),this._syncEmptyStateUI()}_adjustZ(t,a){let l=parseInt(t.style.zIndex||"1",10)+a;l=Math.max(1,Math.min(9999,l)),t.style.zIndex=String(l),this._queueSave("z-change")}_highestZ(){let t=0;return this.cardContainer.querySelectorAll(".card-wrapper").forEach(a=>{let o=parseInt(a.style.zIndex||"0",10);o>t&&(t=o)}),t}_setCardPosition(t,a,o){let l=Math.round(a),c=Math.round(o);t.style.transform=`translate3d(${l}px, ${c}px, 0)`,t.setAttribute("data-x",String(l)),t.setAttribute("data-y",String(c)),t.setAttribute("data-x-raw",String(l)),t.setAttribute("data-y-raw",String(c))}_computeDesignSize(){let t=this.cardContainer;if(!t)return{w:1,h:1};if(this._isContainerFixed()){let{w:d,h:f}=this._resolveFixedSize();return{w:Math.max(1,d),h:Math.max(1,f)}}let a=0,o=0,l=Array.from(t.querySelectorAll(".card-wrapper"));if(!l.length){let d=t.getBoundingClientRect();return{w:Math.max(1,d.width||1),h:Math.max(1,d.height||1)}}for(let d of l){let f=parseFloat(d.getAttribute("data-x-raw")||d.getAttribute("data-x")||"0")||0,v=parseFloat(d.getAttribute("data-y-raw")||d.getAttribute("data-y")||"0")||0,y=parseFloat(d.style.width)||d.getBoundingClientRect().width||0,_=parseFloat(d.style.height)||d.getBoundingClientRect().height||0,g=f+y,w=v+_;g>a&&(a=g),w>o&&(o=w)}let c=Math.max(1,this.gridSize||10);return a=Math.ceil(a/c)*c,o=Math.ceil(o/c)*c,{w:Math.max(1,a),h:Math.max(1,o)}}_startScaleWatch(){if(!this.autoResizeCards||this.__scaleRAF)return;let t=()=>{var l;if(!this.autoResizeCards){this.__scaleRAF=null;return}let a=this.getBoundingClientRect(),o=Math.max(1,a.width||0);o!==this.__lastScaleW&&(this.__lastScaleW=o,(l=this._applyAutoScale)==null||l.call(this)),this.__scaleRAF=requestAnimationFrame(t)};this.__scaleRAF=requestAnimationFrame(t)}_stopScaleWatch(){if(this.__scaleRAF){try{cancelAnimationFrame(this.__scaleRAF)}catch{}this.__scaleRAF=null}}_applyAutoScale(){var d,f,v,y,_,g,w,L,E,P;let t=this.cardContainer;if(!t)return;if(typeof this._ensureScaleWrapper=="function"&&this._ensureScaleWrapper(),!this.autoResizeCards){let D=typeof this._computeDesignSize=="function"?this._computeDesignSize():{w:t.offsetWidth||1,h:t.offsetHeight||1};if(t.style.width=`${D.w}px`,t.style.height=`${D.h}px`,t.style.transform="scale(1)",t.style.transformOrigin="top left",t.style.position="absolute",t.style.top="0",t.style.left="0",this.__scaleOuter){let C=this.parentElement&&((f=(d=this.parentElement).getBoundingClientRect)==null?void 0:f.call(d).width)||this.offsetParent&&((y=(v=this.offsetParent).getBoundingClientRect)==null?void 0:y.call(v).width)||this.getBoundingClientRect&&this.getBoundingClientRect().width||this.offsetWidth||D.w;this.__scaleOuter.style.width=`${Math.max(1,C)}px`,this.__scaleOuter.style.height=`${Math.max(1,D.h)}px`}try{(_=this._syncTabsWidth_)==null||_.call(this)}catch{}return}let a=typeof this._computeDesignSize=="function"?this._computeDesignSize():{w:t.offsetWidth||1,h:t.offsetHeight||1},o=this.parentElement&&((w=(g=this.parentElement).getBoundingClientRect)==null?void 0:w.call(g).width)||this.offsetParent&&((E=(L=this.offsetParent).getBoundingClientRect)==null?void 0:E.call(L).width)||this.getBoundingClientRect&&this.getBoundingClientRect().width||this.offsetWidth||a.w,l=Math.max(1,o),c=Math.min(l/Math.max(1,a.w),1);this.__scaleOuter&&(this.__scaleOuter.style.width=`${l}px`,this.__scaleOuter.style.height=`${Math.max(1,a.h*c)}px`),t.style.width=`${a.w}px`,t.style.height=`${a.h}px`,t.style.transform=`scale(${c})`,t.style.transformOrigin="top left",t.style.position="absolute",t.style.top="0",t.style.left="0";try{(P=this._syncTabsWidth_)==null||P.call(this)}catch{}}_resizeContainer(){var c;let t=this.cardContainer;if(!t||this._isContainerFixed())return;let a=Array.from(t.querySelectorAll(".card-wrapper")),o=0,l=0;a.forEach(d=>{let f=d.getBoundingClientRect(),v=t.getBoundingClientRect(),y=f.left-v.left+f.width,_=f.top-v.top+f.height;o=Math.max(o,y),l=Math.max(l,_)}),t.style.width=`${Math.ceil(o/this.gridSize)*this.gridSize||100}px`,t.style.height=`${Math.ceil(l/this.gridSize)*this.gridSize||100}px`;try{(c=this._syncTabsWidth_)==null||c.call(this)}catch{}}_pushCardsOutOfTheWay(t,a,o,l,c){if(!this.__collisionOriginals)return;let d=new Set(t.map(C=>C.el)),f=Array.from(this.cardContainer.querySelectorAll(".card-wrapper")).filter(C=>!C.dataset.placeholder),v=this._isContainerFixed(),{w:y,h:_}=this._getContainerSize();for(let C of f){if(d.has(C))continue;let A=this.__collisionOriginals.get(C);if(A){C.setAttribute("data-x-raw",String(A.x)),C.setAttribute("data-y-raw",String(A.y));let O=l?Math.round(A.x/c)*c:A.x,b=l?Math.round(A.y/c)*c:A.y;this._setCardPosition(C,O,b)}}let g=t.map(C=>({x:C.snapX,y:C.snapY,w:C.w,h:C.h})),w=new Map,L=new Map;for(let C of f){let A=parseFloat(C.style.width)||C.getBoundingClientRect().width,O=parseFloat(C.style.height)||C.getBoundingClientRect().height;L.set(C,{w:A,h:O})}let E=a>0?1:a<0?-1:0,P=o>0?1:o<0?-1:0,D=Math.abs(a)>=Math.abs(o);for(let C of f){if(d.has(C))continue;let A=this.__collisionOriginals.get(C);if(!A)continue;let{x:O,y:b}=A,{w:M,h:R}=L.get(C),ee=!1;for(let q of g)if(this._rectsOverlap({x:q.x,y:q.y,w:q.w,h:q.h},{x:O,y:b,w:M,h:R})){ee=!0,D&&E!==0?O=E>0?q.x+q.w:q.x-M:!D&&P!==0?b=P>0?q.y+q.h:q.y-R:O=q.x+q.w;break}if(ee){let q=0,K=D?E!==0?E*c:c:0,ae=D?0:P!==0?P*c:c;for(;q<100;){let ie={x:O,y:b,w:M,h:R},$=!1;for(let me of g)if(this._rectsOverlap(ie,me)){$=!0;break}if(!$){for(let[,me]of w)if(this._rectsOverlap(ie,me)){$=!0;break}}if(!$&&v&&(O<0||b<0||O+M>y||b+R>_)&&($=!0),!$)break;O+=K,b+=ae,q++}v&&(O=Math.max(0,Math.min(O,Math.max(0,y-M))),b=Math.max(0,Math.min(b,Math.max(0,_-R))))}w.set(C,{x:O,y:b,w:M,h:R}),g.push({x:O,y:b,w:M,h:R})}for(let[C,A]of w){C.setAttribute("data-x-raw",String(A.x)),C.setAttribute("data-y-raw",String(A.y));let O=l?Math.round(A.x/c)*c:A.x,b=l?Math.round(A.y/c)*c:A.y;this._setCardPosition(C,O,b)}}_rectFor(t,a=null,o=null,l=null,c=null){let d=a!=null?a:parseFloat(t.getAttribute("data-x"))||0,f=o!=null?o:parseFloat(t.getAttribute("data-y"))||0,v=l!=null?l:parseFloat(t.style.width)||t.getBoundingClientRect().width||0,y=c!=null?c:parseFloat(t.style.height)||t.getBoundingClientRect().height||0;return{x:d,y:f,w:v,h:y,el:t}}_rectsOverlap(t,a,o=.5){return!(t.x+t.w<=a.x+o||a.x+a.w<=t.x+o||t.y+t.h<=a.y+o||a.y+a.h<=t.y+o)}_anyCollisionFor(t,a){let o=Array.from(this.cardContainer.querySelectorAll(".card-wrapper")).filter(c=>!a.has(c)&&!c.dataset.placeholder);if(!o.length)return!1;let l=o.map(c=>this._rectFor(c));for(let c of t)for(let d of l)if(this._rectsOverlap(c,d))return!0;return!1}_extractCardConfig(t){var o;if(!t)return{};let a=t._config||t.config;if(a&&typeof a=="object"&&Object.keys(a).length)return a;try{let l=t.closest?t.closest(".card-wrapper"):null,c=(o=l==null?void 0:l.dataset)==null?void 0:o.cfg;if(c){let d=JSON.parse(c);if(d&&typeof d=="object")return d}}catch{}return{}}async _openCardManager(){await this._openSmartPicker("add")}_catalog(){return[{id:"favorites",name:"Favorites",items:[]},{id:"recent",name:"Recent",items:[]},{id:"basics",name:"Basics",items:[{type:"entities",name:"Entities",icon:"mdi:format-list-bulleted"},{type:"entity",name:"Entity",icon:"mdi:checkbox-blank-circle-outline"},{type:"tile",name:"Tile",icon:"mdi:view-grid-outline"},{type:"button",name:"Button",icon:"mdi:gesture-tap-button"},{type:"glance",name:"Glance",icon:"mdi:eye-outline"},{type:"markdown",name:"Markdown",icon:"mdi:language-markdown"},{type:"custom_card",name:"Custom Card",icon:"mdi:puzzle-outline"}]},{id:"sensors",name:"Sensors",items:[{type:"sensor",name:"Sensor",icon:"mdi:antenna"},{type:"gauge",name:"Gauge",icon:"mdi:gauge"},{type:"history-graph",name:"History graph",icon:"mdi:chart-line"},{type:"statistics-graph",name:"Statistics graph",icon:"mdi:chart-bar"}]},{id:"visual",name:"Visual",items:[{type:"picture-entity",name:"Picture entity",icon:"mdi:image-outline"},{type:"picture-glance",name:"Picture glance",icon:"mdi:image-multiple-outline"},{type:"weather-forecast",name:"Weather",icon:"mdi:weather-partly-cloudy"},{type:"map",name:"Map",icon:"mdi:map"},{type:"iframe",name:"iFrame",icon:"mdi:application"}]},{id:"controls",name:"Controls",items:[{type:"light",name:"Light",icon:"mdi:lightbulb-outline"},{type:"thermostat",name:"Thermostat",icon:"mdi:thermostat"},{type:"media-control",name:"Media control",icon:"mdi:play-circle-outline"},{type:"alarm-panel",name:"Alarm panel",icon:"mdi:shield-home-outline"},{type:"area",name:"Area",icon:"mdi:map-marker"}]}]}async _getEditorElementForType(t,a){try{console.info("[ddc:editor] Requesting editor element",{type:t,cfg:a})}catch{}let o=await this._helpersPromise||await window.loadCardHelpers();try{typeof t=="string"&&t&&!t.startsWith("custom:")&&t!=="custom_card"&&await this._ensureCardModuleLoaded(t,a)}catch{}if(typeof t=="string"&&t==="entity")try{return await this._getEntityCardEditor(a||{})}catch(y){console.warn("[ddc:editor] Custom entity editor failed",y)}let l=async()=>{try{if(o.getCardElementClass)return await o.getCardElementClass(t);let y;if(a&&typeof a=="object")y={type:t,...a};else{let g;try{g=await this._getStubConfigForType(t)}catch{}y=g&&typeof g=="object"?{...g}:{type:t}}let _=o.createCardElement(y);return(_==null?void 0:_.constructor)||null}catch{return null}};try{let y=await l();if(y){if(typeof y.getConfigElement=="function"){let _=await y.getConfigElement();if(_){try{console.info("[ddc:editor] Found static class editor",{type:t})}catch{}return _}}if(typeof y.getConfigForm=="function")try{let _=await y.getConfigForm();if(_&&_.schema){try{await customElements.whenDefined("ha-form")}catch{}let g=document.createElement("ha-form");g.hass=this.hass,g.schema=Array.isArray(_.schema)?_.schema.map(w=>({...w})):_.schema,typeof _.computeLabel=="function"&&(g.computeLabel=_.computeLabel.bind(y)),typeof _.computeHelper=="function"&&(g.computeHelper=_.computeHelper.bind(y)),g.data={...a},g.addEventListener("value-changed",w=>{});try{console.info("[ddc:editor] Generated form editor via getConfigForm",{type:t})}catch{}return g}}catch{}}}catch{}if(typeof t=="string"&&(t.startsWith("custom:")||t==="custom_card"))try{let y;try{y=await this._getStubConfigForType(t)}catch{}let _=y&&typeof y=="object"?{...y}:{type:t},g=o.createCardElement(_);if(g.hass=this.hass,typeof g.getConfigElement=="function"){let w=await g.getConfigElement();if(w){try{console.info("[ddc:editor] Found instance-level editor",{type:t})}catch{}return w}}}catch{}let c=String(t).replace(/^custom:/,""),f=(Array.isArray(window.customCards)?window.customCards:[]).find(y=>(y==null?void 0:y.type)===c||(y==null?void 0:y.type)===t||(y==null?void 0:y.type)===`custom:${c}`),v=[];f!=null&&f.editor&&v.push(f.editor),v.push(`${c}-editor`,`${c}-config-editor`),c&&typeof c=="string"&&v.push(`hui-${c}-card-editor`);for(let y of v)if(!(!y||typeof y!="string"))for(let _ of[0,100,300,700,1500,3e3])try{if(customElements.get(y)||await Promise.race([customElements.whenDefined(y),new Promise(g=>setTimeout(g,_))]),customElements.get(y)){try{console.info("[ddc:editor] Found editor by tag",{type:t,tag:y})}catch{}return document.createElement(y)}}catch{}return null}async _ensureCardModuleLoaded(t,a){try{let o=await this._helpersPromise||await window.loadCardHelpers(),l;if(a&&typeof a=="object")l={type:t,...a};else{let f;try{f=await this._getStubConfigForType(t)}catch{}l=f&&typeof f=="object"?{...f}:{type:t}}let c=o.createCardElement(l);c.hass=this.hass;let d=document.createElement("div");d.style.cssText="position:fixed;left:-9999px;top:-9999px;opacity:0;pointer-events:none;",d.appendChild(c),document.body.appendChild(d),await new Promise(f=>requestAnimationFrame(f)),d.remove();try{console.info("[ddc:editor] Warmed card module",{type:t})}catch{}}catch{}}_ensureOverlayZFix(){if(document.querySelector("style[data-ddc-overlay-fix]"))return;let t=document.createElement("style");t.setAttribute("data-ddc-overlay-fix",""),t.textContent=`
      /* Make common HA overlays float above our modal */
      vaadin-combo-box-overlay,
      vaadin-overlay-backdrop,
      mwc-menu-surface,
      .mdc-menu-surface--open {
        z-index: 1000000 !important;
      }
    `,document.head.appendChild(t)}_customCardsFromRegistry(){return(Array.isArray(window.customCards)?window.customCards:[]).map(a=>{var o;return{type:(o=a==null?void 0:a.type)!=null&&o.startsWith("custom:")?a.type:`custom:${a==null?void 0:a.type}`,name:(a==null?void 0:a.name)||(a==null?void 0:a.type)||"Custom card",icon:"mdi:puzzle-outline",description:(a==null?void 0:a.description)||"",editorTag:(a==null?void 0:a.editor)||null}}).filter(a=>typeof a.type=="string"&&a.type.startsWith("custom:"))}_schemaForType(t){let a=l=>l,o=[];return{entities:a({fields:[{key:"entities",type:"entities",multi:!0,domains:o,label:"Entities"}]}),entity:a({fields:[{key:"entity",type:"entity",multi:!1,domains:o,label:"Entity"}]}),sensor:a({fields:[{key:"entity",type:"entity",multi:!1,domains:["sensor"],label:"Sensor"},{key:"name",type:"text",label:"Name (optional)"}]}),gauge:a({fields:[{key:"entity",type:"entity",multi:!1,domains:["sensor","number","input_number"],label:"Numeric entity"},{key:"min",type:"number",label:"Min",step:"any"},{key:"max",type:"number",label:"Max",step:"any"}]}),"history-graph":a({fields:[{key:"entities",type:"entities",multi:!0,domains:o,label:"Entities (multiselect)"},{key:"hours_to_show",type:"number",label:"Hours to show",default:24}]}),"statistics-graph":a({fields:[{key:"entities",type:"entities",multi:!0,domains:["sensor","number","input_number"],label:"Entities (multiselect)"},{key:"chart_type",type:"select",options:["line","bar"],label:"Chart type",default:"line"},{key:"statistic",type:"select",options:["mean","min","max","sum"],label:"Statistic",default:"mean"}]}),glance:a({fields:[{key:"entities",type:"entities",multi:!0,domains:o,label:"Entities (multiselect)"}]}),"picture-glance":a({fields:[{key:"entities",type:"entities",multi:!0,domains:o,label:"Entities (multiselect)"},{key:"image",type:"text",label:"Image URL (optional)"}]}),"picture-entity":a({fields:[{key:"entity",type:"entity",multi:!1,domains:o,label:"Entity"},{key:"image",type:"text",label:"Image URL (optional)"}]}),"weather-forecast":a({fields:[{key:"entity",type:"entity",multi:!1,domains:["weather"],label:"Weather entity"}]}),map:a({fields:[{key:"entities",type:"entities",multi:!0,domains:["device_tracker","person"],label:"Trackers / people (multiselect)"},{key:"default_zoom",type:"number",label:"Default zoom",default:14}]}),"media-control":a({fields:[{key:"entity",type:"entity",multi:!1,domains:["media_player"],label:"Media player"}]}),light:a({fields:[{key:"entity",type:"entity",multi:!1,domains:["light"],label:"Light"}]}),thermostat:a({fields:[{key:"entity",type:"entity",multi:!1,domains:["climate"],label:"Climate"}]}),"alarm-panel":a({fields:[{key:"entity",type:"entity",multi:!1,domains:["alarm_control_panel"],label:"Alarm"}]}),markdown:a({fields:[{key:"content",type:"textarea",label:"Markdown"}]}),tile:a({fields:[{key:"entity",type:"entity",multi:!1,domains:o,label:"Entity"}]}),button:a({fields:[{key:"entity",type:"entity",multi:!1,domains:o,label:"Entity (optional)"}]}),iframe:a({fields:[{key:"url",type:"text",label:"URL"}]}),area:a({fields:[{key:"area",type:"text",label:"Area ID"}]})}[t]||{fields:[]}}async _getEntityCardEditor(t={}){let a=document.createElement("div");a.style.display="flex",a.style.flexDirection="column",a.style.gap="12px",a.style.padding="8px 0",a.style.overflow="visible",a._cfg={type:"entity",...t||{}};let o=()=>{let A={type:"entity"};["entity","name","icon","attribute","unit","state_color","theme"].forEach(O=>{let b=a._cfg[O];b!==void 0&&b!==""&&b!==null&&(A[O]=b)}),a.dispatchEvent(new CustomEvent("config-changed",{detail:{config:A}}))},l=document.createElement("div");l.style.display="flex",l.style.flexDirection="column",l.style.gap="4px";let c=document.createElement("span");c.textContent="Entity",c.style.fontSize=".8rem",c.style.opacity="0.8";let d=document.createElement("ha-entity-picker");d.setAttribute("label","Select entity"),d.addEventListener("value-changed",A=>{var b,M,R;A.stopPropagation();let O=(R=A.detail&&((b=A.detail.value)!=null?b:A.detail))!=null?R:(M=A.target)==null?void 0:M.value;a._cfg.entity=O||"";try{f()}catch{}o()}),l.appendChild(c),l.appendChild(d),a.appendChild(l);let f=()=>{},v=document.createElement("div");v.style.display="grid",v.style.gridTemplateColumns="1fr 1fr",v.style.columnGap="12px",v.style.rowGap="12px";let y=(A,O)=>{let b=document.createElement("div");b.style.display="flex",b.style.flexDirection="column",b.style.gap="4px";let M=document.createElement("span");M.textContent=A,M.style.fontSize=".8rem",M.style.opacity="0.8",b.appendChild(M),b.appendChild(O),v.appendChild(b)},_;customElements.get("ha-textfield")?(_=document.createElement("ha-textfield"),_.setAttribute("label","Name"),_.addEventListener("input",()=>{a._cfg.name=_.value||void 0,o()})):(_=document.createElement("input"),_.type="text",_.placeholder="Name",_.addEventListener("input",()=>{a._cfg.name=_.value||void 0,o()}),Object.assign(_.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})),y("Name",_);let g;customElements.get("ha-icon-picker")?(g=document.createElement("ha-icon-picker"),g.setAttribute("label","Icon"),g.addEventListener("value-changed",A=>{var O;A.stopPropagation(),a._cfg.icon=((O=A.detail)==null?void 0:O.value)||void 0,o()}),Object.assign(g.style,{position:"relative",zIndex:"1000"})):customElements.get("ha-textfield")?(g=document.createElement("ha-textfield"),g.setAttribute("label","Icon"),g.addEventListener("input",()=>{a._cfg.icon=g.value||void 0,o()})):(g=document.createElement("input"),g.type="text",g.placeholder="mdi:icon",g.addEventListener("input",()=>{a._cfg.icon=g.value||void 0,o()}),Object.assign(g.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})),y("Icon",g);let w;if(f=()=>{var K,ae;let A=[],O=(K=a._cfg)==null?void 0:K.entity,b=a._hass;if(O&&b&&b.states&&b.states[O]&&b.states[O].attributes)try{A=Object.keys(b.states[O].attributes||{}).filter(ie=>ie&&typeof ie=="string"),A.sort()}catch{}let M=w&&typeof w.value!="undefined"?w.value:void 0,R=((w==null?void 0:w.tagName)||"").toLowerCase(),ee={min_color_temp_kelvin:"Minimum color temperature (Kelvin)",max_color_temp_kelvin:"Maximum color temperature (Kelvin)",min_color_temp_mireds:"Minimum color temperature (mireds)",max_color_temp_mireds:"Maximum color temperature (mireds)",min_mireds:"Minimum color temperature (mireds)",max_mireds:"Maximum color temperature (mireds)",effect_list:"Available effects",color_mode:"Color mode",brightness:"Brightness",hs_color:"Hs color",rgb_color:"Rgb color",xy_color:"Xy color",entity_id:"Entity ID",friendly_name:"Friendly name",icon:"Icon"},q=ie=>ee[ie]?ee[ie]:ie.split("_").map($=>$&&($.toLowerCase()==="kelvin"?"Kelvin":$.toLowerCase()==="mireds"?"mireds":$.charAt(0).toUpperCase()+$.slice(1))).join(" ");if(R==="ha-combo-box"){let ie=A.map($=>({value:$,label:q($)}));ie.unshift({value:"",label:""}),w.items=ie,M&&A.includes(M)?w.value=M:w.value=""}else if(R==="ha-select"){w.innerHTML="";let ie=document.createElement("mwc-list-item");ie.setAttribute("value",""),ie.textContent="",w.appendChild(ie);for(let $ of A){let me=document.createElement("mwc-list-item");me.setAttribute("value",$),me.textContent=q($),w.appendChild(me)}M&&A.includes(M)?w.value=M:w.value="",(ae=w.requestUpdate)==null||ae.call(w)}else if(R==="select"){w.innerHTML="";let ie=document.createElement("option");ie.value="",ie.textContent="",w.appendChild(ie);for(let $ of A){let me=document.createElement("option");me.value=$,me.textContent=q($),w.appendChild(me)}M&&A.includes(M)&&(w.value=M)}},customElements.get("ha-combo-box"))w=document.createElement("ha-combo-box"),w.setAttribute("label","Attribute"),w.setAttribute("item-label-path","label"),w.setAttribute("item-value-path","value"),w.setAttribute("allow-custom-value","false"),w.addEventListener("value-changed",A=>{var b,M;A.stopPropagation();let O=(M=(b=A.detail)==null?void 0:b.value)!=null?M:w.value;a._cfg.attribute=O||void 0,o()});else if(customElements.get("ha-select"))w=document.createElement("ha-select"),w.setAttribute("label","Attribute"),w.addEventListener("selected",A=>{A.stopPropagation(),a._cfg.attribute=w.value||void 0,o()}),Object.assign(w.style,{position:"relative",zIndex:"1000"});else{w=document.createElement("select");let A=document.createElement("option");A.value="",A.textContent="",w.appendChild(A),w.addEventListener("change",O=>{O.stopPropagation(),a._cfg.attribute=w.value||void 0,o()}),Object.assign(w.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),Object.assign(w.style,{position:"relative",zIndex:"1000"})}f(),y("Attribute",w);let L;customElements.get("ha-textfield")?(L=document.createElement("ha-textfield"),L.setAttribute("label","Unit"),L.addEventListener("input",()=>{a._cfg.unit=L.value||void 0,o()})):(L=document.createElement("input"),L.type="text",L.placeholder="Unit",L.addEventListener("input",()=>{a._cfg.unit=L.value||void 0,o()}),Object.assign(L.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})),y("Unit",L);let E;if(customElements.get("ha-select"))E=document.createElement("ha-select"),E.setAttribute("label","Theme (optional)"),E.addEventListener("selected",A=>{A.stopPropagation(),a._cfg.theme=E.value||void 0,o()});else{E=document.createElement("select");let A=document.createElement("option");A.value="",A.textContent="",E.appendChild(A),E.addEventListener("change",O=>{O.stopPropagation(),a._cfg.theme=E.value||void 0,o()}),Object.assign(E.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})}y("Theme (optional)",E);let P;customElements.get("ha-switch")?(P=document.createElement("ha-switch"),P.addEventListener("change",()=>{a._cfg.state_color=!!P.checked,o()})):(P=document.createElement("input"),P.type="checkbox",P.addEventListener("change",()=>{a._cfg.state_color=!!P.checked,o()}));let D=document.createElement("div");D.style.display="flex",D.style.alignItems="center",D.style.gap="8px";let C=document.createElement("span");return C.textContent="Show state color",C.style.fontSize=".8rem",C.style.opacity="0.8",D.appendChild(C),D.appendChild(P),v.appendChild(D),a.appendChild(v),a.setConfig=(A={})=>{a._cfg={type:"entity",...A||{}};let O=a._cfg;if(d&&("value"in d&&(d.value=O.entity||""),d.setAttribute&&d.setAttribute("value",O.entity||"")),_&&(_.value=O.name||""),g&&(g.value=O.icon||""),w){try{f()}catch{}w.value=O.attribute||""}L&&(L.value=O.unit||""),E&&(E.value=O.theme||""),P&&"checked"in P&&(P.checked=!!O.state_color)},Object.defineProperty(a,"hass",{get(){return this._hass},set(A){var O;if(this._hass=A,d){try{d.hass=A}catch{}customElements.get("ha-entity-picker")||customElements.whenDefined("ha-entity-picker").then(()=>{var b;try{d.hass=this._hass,(b=d.requestUpdate)==null||b.call(d)}catch{}}).catch(()=>{})}if(g){try{g.hass=A}catch{}customElements.get("ha-icon-picker")||customElements.whenDefined("ha-icon-picker").then(()=>{var b;try{g.hass=this._hass,(b=g.requestUpdate)==null||b.call(g)}catch{}}).catch(()=>{})}if(E){let b=[];A&&A.themes&&(A.themes.themes?b=Object.keys(A.themes.themes):typeof A.themes=="object"&&(b=Object.keys(A.themes).filter(ee=>ee!=="default_theme")));let M=E.value,R=(E.tagName||"").toLowerCase();if(R==="ha-select"){E.innerHTML="";let ee=document.createElement("mwc-list-item");ee.setAttribute("value",""),ee.textContent="",E.appendChild(ee);for(let q of b){let K=document.createElement("mwc-list-item");K.setAttribute("value",q),K.textContent=q,E.appendChild(K)}M&&b.includes(M)?E.value=M:M||(E.value=""),(O=E.requestUpdate)==null||O.call(E)}else if(R==="select"){E.innerHTML="";let ee=document.createElement("option");ee.value="",ee.textContent="",E.appendChild(ee);for(let q of b){let K=document.createElement("option");K.value=q,K.textContent=q,E.appendChild(K)}M&&Array.from(E.options).some(q=>q.value===M)&&(E.value=M)}}try{f()}catch{}}}),a.setConfig(t||{}),a}_shapeBySchema(t,a={}){let o=this._schemaForType(t)||{fields:[]},l={...a,type:t};for(let c of o.fields){let d=l[c.key];if(c.type==="entities"){let v=(Array.isArray(d)?d:d!=null&&d!==""?[d]:[]).filter(Boolean);v.length?l[c.key]=v:delete l[c.key]}else if(c.type==="entity")Array.isArray(d)&&(d=d[0]),d==null||d===""?delete l[c.key]:l[c.key]=String(d);else if(c.type==="number")if(d==null||d==="")delete l[c.key];else{let f=Number(d);Number.isFinite(f)?l[c.key]=f:delete l[c.key]}else(c.type==="select"||c.type==="text"||c.type==="textarea")&&(d==null||d===""?delete l[c.key]:l[c.key]=d)}return l}_statesList(t){var l;let a=Object.keys(((l=this.hass)==null?void 0:l.states)||{});if(!t||!t.length)return a;if(!this.__domainIndex||this.__domainIndex._gen!==a.length){let c={};for(let d of a){let f=d.split(".")[0];(c[f]||(c[f]=[])).push(d)}this.__domainIndex={_gen:a.length,map:c}}let o=[];for(let c of t)this.__domainIndex.map[c]&&o.push(...this.__domainIndex.map[c]);return o}_isNumericEntity(t){var l,c;let a=(c=(l=this.hass)==null?void 0:l.states)==null?void 0:c[t];if(!a)return!1;let o=Number(a.state);return Number.isFinite(o)}_getFaves(){try{return new Set(JSON.parse(localStorage.getItem("ddc_faves")||"[]"))}catch{return new Set}}_setFaves(t){try{localStorage.setItem("ddc_faves",JSON.stringify(Array.from(t)))}catch{}}_getRecent(){try{return JSON.parse(localStorage.getItem("ddc_recent_types")||"[]")}catch{return[]}}_pushRecent(t){try{let a=this._getRecent().filter(o=>o!==t);a.unshift(t),a.length>10&&(a.length=10),localStorage.setItem("ddc_recent_types",JSON.stringify(a))}catch{}}async _ensureCodeMirror(){if(!this.__cmReady){if(!document.querySelector("link[data-cm-core]")){let t=document.createElement("link");t.rel="stylesheet",t.href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.css",t.setAttribute("data-cm-core",""),document.head.appendChild(t)}await new Promise(t=>{if(window.CodeMirror)return t();let a=document.createElement("script");a.src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.js",a.onload=t,document.head.appendChild(a)}),await new Promise(t=>{var o,l;if((l=(o=window.CodeMirror)==null?void 0:o.mimeModes)!=null&&l.yaml)return t();let a=document.createElement("script");a.src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/yaml/yaml.min.js",a.onload=t,document.head.appendChild(a)}),this.__cmReady=!0}}async _mountYamlEditor(t,a,o,l){let c=v=>window.jsyaml?window.jsyaml.dump(v):JSON.stringify(v,null,2),d=v=>window.jsyaml?window.jsyaml.load(v):JSON.parse(v);t.innerHTML="";let f=c(a);if(customElements.get("ha-code-editor")){let v=document.createElement("ha-code-editor");v.mode="yaml",v.hass=this.hass,v.value=f,v.style.display="block",v.style.height="260px",t.appendChild(v);let y=!1;return v.addEventListener("value-changed",_=>{var w,L,E;if(y)return;let g=(E=(L=(w=_.detail)==null?void 0:w.value)!=null?L:v.value)!=null?E:"";try{o(d(g))}catch(P){l==null||l(P)}}),{setValue:_=>{var w;let g=c(_);((w=v.value)!=null?w:"")!==g&&(y=!0,v.value=g,y=!1)}}}try{await this._ensureCodeMirror();let v=window.CodeMirror(t,{value:f,mode:"yaml",lineNumbers:!0,lineWrapping:!0,indentUnit:2,tabSize:2}),y=!1;return v.on("change",()=>{if(y)return;let _=v.getValue();try{o(d(_))}catch(g){l==null||l(g)}}),{setValue:_=>{let g=c(_);v.getValue()!==g&&(y=!0,v.setValue(g),y=!1)}}}catch{let v=document.createElement("textarea");return v.style.width="100%",v.style.height="260px",v.value=f,v.addEventListener("input",()=>{try{o(d(v.value))}catch(y){l==null||l(y)}}),t.appendChild(v),{setValue:y=>{let _=c(y);v.value!==_&&(v.value=_)}}}}_createVirtualList({container:t,items:a,rowHeight:o=36,renderRow:l}){t.style.position="relative",t.style.overflow="auto";let c=document.createElement("div");c.style.height=`${a.length*o}px`,t.innerHTML="",t.appendChild(c);let d=new Map,f=()=>{let v=t.scrollTop,y=t.clientHeight,_=Math.max(0,Math.floor(v/o)-6),g=Math.min(a.length-1,Math.ceil((v+y)/o)+6);for(let[w,L]of d)(w<_||w>g)&&(L.remove(),d.delete(w));for(let w=_;w<=g;w++){if(d.has(w))continue;let L=l(a[w],w);L.style.position="absolute",L.style.left="0",L.style.right="0",L.style.top=`${w*o}px`,d.set(w,L),t.appendChild(L)}};return t.addEventListener("scroll",f,{passive:!0}),new ResizeObserver(f).observe(t),f(),{refresh(v){if(v){a=v,c.style.height=`${a.length*o}px`;for(let[,y]of d)y.remove();d.clear()}f()}}}async _openSmartPicker(t="add",a=null,o=null){let l=()=>c.remove(),c=document.createElement("div");c.className="modal",c.innerHTML=`
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
      </div>`,this.shadowRoot.appendChild(c);let d=c.querySelector("#leftPane"),f=c.querySelector("#addBtn"),v=c.querySelector("#footAdd"),y=c.querySelector("#cancelBtn"),_=c.querySelector("#footCancel"),g=c.querySelector("#search"),w=c.querySelector("#cardHost"),L=c.querySelector("#editorHost"),E=c.querySelector("#editorSpin"),P=c.querySelector("#quickFill"),D=c.querySelector("#yamlHost"),C=c.querySelector("#yamlErr"),A=c.querySelector("#yamlSec"),O=c.querySelector("#tabVisual"),b=c.querySelector("#tabYaml"),M=c.querySelector("#tabVis"),R=c.querySelector("#visSec"),ee=c.querySelector("#visHost"),q=c.querySelector("#err"),K=c.querySelector("#previewSpin"),ae=I=>{f.disabled=v.disabled=!I},ie=I=>{I?(q.hidden=!1,q.textContent=I):(q.hidden=!0,q.textContent="")},$=this._getFaves(),me=this._getRecent(),_e=this._catalog(),Je=_e.find(I=>I.id==="favorites"),We=_e.find(I=>I.id==="recent"),je=_e.flatMap(I=>I.items||[]);Je.items=je.filter(I=>$.has(I.type)),We.items=me.map(I=>je.find(N=>N.type===I)).filter(Boolean);let Ke=this._customCardsFromRegistry();Ke.length&&_e.push({id:"custom",name:"Custom (installed)",items:Ke});let ke=c.querySelector("#quickFillSec");ke&&(ke.style.display="none");let rt=c.querySelector("#optionsSec .hd"),Qe,Ze,at=()=>{if(!Ze)return;let I=Le&&$.has(Le),N=Ze.querySelector("ha-icon");N&&N.setAttribute("icon",I?"mdi:star":"mdi:star-outline")},it=I=>{if(Qe){let N=je.find(ne=>ne.type===I),te=N?N.name:I||"";Qe.textContent=te}at()};if(rt&&!rt.querySelector(".sel-info")){let I=rt.querySelector("span");I&&(I.style.display="none"),Qe=document.createElement("span"),Qe.className="sel-info",Qe.style.flex="1",Qe.style.fontWeight="bold",Qe.style.paddingRight="8px",rt.insertBefore(Qe,rt.firstChild),Ze=document.createElement("button"),Ze.className="icon-btn",Ze.setAttribute("title","Favorite"),Object.assign(Ze.style,{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"28px",height:"28px",borderRadius:"6px",border:"1px solid var(--divider-color)",background:"var(--primary-background-color)",padding:"0",marginLeft:"4px",cursor:"pointer"}),Ze.innerHTML='<ha-icon icon="mdi:star-outline"></ha-icon>',rt.appendChild(Ze),Ze.addEventListener("click",N=>{N.stopPropagation(),Le&&($.has(Le)?$.delete(Le):$.add(Le),this._setFaves($),at(),nt())})}let ot="visual",se=I=>{let N=I==="yaml",te=I==="vis",ne=!N&&!te;O.classList.toggle("active",ne),O.setAttribute("aria-selected",String(ne)),b.classList.toggle("active",N),b.setAttribute("aria-selected",String(N)),M&&(M.classList.toggle("active",te),M.setAttribute("aria-selected",String(te))),L.parentElement.style.display=ne?"":"none",A.style.display=N?"":"none",R&&(R.style.display=te?"":"none"),N?A.scrollIntoView({behavior:"smooth",block:"start"}):te&&R&&R.scrollIntoView({behavior:"smooth",block:"start"}),ot=N?"yaml":te?"vis":"visual"};O.addEventListener("click",async()=>{var I;if(se("visual"),!Te)await ht(oe);else try{(I=Te.setConfig)==null||I.call(Te,oe)}catch{}}),b.addEventListener("click",()=>se("yaml")),M&&M.addEventListener("click",()=>{se("vis");try{yt(oe)}catch{}}),se("visual");let ut=()=>{let I=g.value.trim().toLowerCase();return _e.map(N=>({...N,items:(N.items||[]).filter(te=>!I||te.name.toLowerCase().includes(I)||te.type.toLowerCase().includes(I))})).filter(N=>N.items&&N.items.length||N.id==="favorites"||N.id==="recent")},nt=()=>{let I=ut();d.innerHTML="",I.forEach(N=>{let te=document.createElement("div");te.style.padding="12px",te.style.borderBottom="1px solid var(--divider-color)";let ne=document.createElement("h4");if(ne.textContent=N.name,ne.style.margin="0 0 10px 0",ne.style.fontSize=".92rem",ne.style.opacity=".85",te.appendChild(ne),!N.items.length&&(N.id==="favorites"||N.id==="recent")){let X=document.createElement("div");X.style.opacity=".6",X.style.fontSize=".85rem",X.textContent=N.id==="favorites"?"No favorites yet.":"No recent items yet.",te.appendChild(X)}else N.items.forEach(X=>{let ye=document.createElement("button");ye.innerHTML=`<span style="display:inline-flex;align-items:center;gap:8px">
              <ha-icon icon="${X.icon}"></ha-icon><span>${X.name}</span>
            </span>`,Object.assign(ye.style,{display:"block",width:"100%",textAlign:"left",border:"none",background:"transparent",padding:"8px",borderRadius:"10px",cursor:"pointer"}),ye.addEventListener("click",async()=>{Re(ye),await ce(X.type)}),te.appendChild(ye)});d.appendChild(te)})},Re=I=>{d.querySelectorAll("button").forEach(N=>{N.classList.remove("active"),N.style.background="transparent",N.style.color=""}),I&&(I.classList.add("active"),I.style.background="rgba(3,169,244,.12)",I.style.color="var(--primary-color)")},oe=null,Le=null,Oe=null,Te=null,lt=null,dt=0,Ct=null,gt="",_t=(I,N)=>{var F;let te=this._schemaForType(I);if(P.innerHTML="",!te.fields.length){P.innerHTML='<div style="opacity:.7;font-size:.9rem">No quick fill for this card \u2014 use the editors below.</div>';return}let ne=Object.keys(((F=this.hass)==null?void 0:F.states)||{}),X=document.createElement("div"),ye=(Q,Ce,H,Fe)=>{let Pe=document.createElement("div");Object.assign(Pe.style,{padding:"8px 10px",border:"1px solid var(--divider-color)",borderRadius:"10px",cursor:"pointer",userSelect:"none",display:"flex",alignItems:"center",gap:"8px"}),Pe.innerHTML=`<ha-icon icon="mdi:checkbox-blank-outline"></ha-icon><span>${Q}</span>`,Ce.includes(Q)&&(Pe.style.background="rgba(3,169,244,.12)",Pe.style.borderColor="var(--primary-color)",Pe.querySelector("ha-icon").setAttribute("icon","mdi:checkbox-marked")),Pe.addEventListener("click",async()=>{let $e=Ce.indexOf(Q);$e>=0?Ce.splice($e,1):Ce.push(Q);let Me=Ce.includes(Q);Pe.style.background=Me?"rgba(3,169,244,.12)":"",Pe.style.borderColor=Me?"var(--primary-color)":"var(--divider-color)",Pe.querySelector("ha-icon").setAttribute("icon",Me?"mdi:checkbox-marked":"mdi:checkbox-blank-outline"),oe=this._shapeBySchema(I,{...oe,[Fe]:[...Ce]}),st(oe),Oe==null||Oe.setValue(oe)}),H.appendChild(Pe)};te.fields.forEach(Q=>{var Fe,Pe,$e,Me,Xe,Ue,Ve,qe,He;let Ce=document.createElement("div");Object.assign(Ce.style,{display:"flex",gap:"8px",alignItems:"center",marginBottom:"8px"});let H=document.createElement("label");if(H.textContent=Q.label||Q.key,H.style.minWidth="130px",Q.type==="entities"){let Ae=document.createElement("div");Ae.style.flex="1";let ge=document.createElement("input");Object.assign(ge,{placeholder:"Filter entities\u2026"}),Object.assign(ge.style,{width:"100%",padding:"8px 10px",borderRadius:"10px",border:"1px solid var(--divider-color)",background:"var(--card-background-color)",color:"var(--primary-text-color)"});let Se=document.createElement("div");Object.assign(Se.style,{maxHeight:"220px",overflow:"auto",marginTop:"8px",border:"1px solid var(--divider-color)",borderRadius:"10px",padding:"6px"});let Ie=Q.domains&&Q.domains.length?this._statesList(Q.domains):ne,we=Array.isArray(N[Q.key])?[...N[Q.key]]:N[Q.key]?[N[Q.key]]:[],de=G=>{let V=document.createElement("div");Object.assign(V.style,{padding:"6px 10px",margin:"4px 0",border:"1px solid var(--divider-color)",borderRadius:"10px",cursor:"pointer",display:"flex",alignItems:"center",gap:"8px",background:""});let j=document.createElement("ha-icon");j.setAttribute("icon","mdi:checkbox-blank-outline"),j.style.setProperty("--mdc-icon-size","18px");let ve=document.createElement("span");ve.textContent=G,ve.style.whiteSpace="nowrap",ve.style.overflow="hidden",ve.style.textOverflow="ellipsis",V.append(j,ve);let Ye=()=>{let tt=we.includes(G);V.style.background=tt?"rgba(3,169,244,.12)":"",V.style.borderColor=tt?"var(--primary-color)":"var(--divider-color)",j.setAttribute("icon",tt?"mdi:checkbox-marked":"mdi:checkbox-blank-outline")};return Ye(),V.addEventListener("click",()=>{let tt=we.indexOf(G);tt>=0?we.splice(tt,1):we.push(G),oe=this._shapeBySchema(I,{...oe,[Q.key]:[...we]}),st(oe),Oe==null||Oe.setValue(oe),Ye()}),V},re=Ie;this._createVirtualList({container:Se,items:re,rowHeight:36,renderRow:de}),ge.addEventListener("input",()=>{let G=ge.value.trim().toLowerCase();re=Ie.filter(V=>!G||V.toLowerCase().includes(G)),this._createVirtualList({container:Se,items:re,rowHeight:36,renderRow:de})}),Ae.append(ge,Se),Ce.append(H,Ae),oe=this._shapeBySchema(I,{...N,[Q.key]:we})}if(Q.type==="entity"){let Ae=document.createElement("div");Ae.style.flex="1",Ae.style.position="relative";let ge=document.createElement("input");ge.setAttribute("list","ddc_entlist_"+Q.key),Object.assign(ge.style,{width:"100%",padding:"8px 10px 8px 36px",borderRadius:"10px",border:"1px solid var(--divider-color)"}),ge.placeholder=`Select ${((Fe=Q.label)==null?void 0:Fe.toLowerCase())||"entity"}\u2026`;let Se=document.createElement("ha-icon");Se.setAttribute("icon","mdi:magnify"),Object.assign(Se.style,{position:"absolute",left:"10px",top:"8px",width:"18px",height:"18px","--mdc-icon-size":"18px",opacity:".7"});let Ie=document.createElement("datalist");Ie.id="ddc_entlist_"+Q.key;let we=Q.domains&&Q.domains.length?this._statesList(Q.domains):Object.keys(((Pe=this.hass)==null?void 0:Pe.states)||{});Ie.innerHTML=we.map(de=>`<option value="${de}">`).join(""),ge.value=Array.isArray(N[Q.key])?N[Q.key][0]||"":N[Q.key]||"",ge.addEventListener("change",async()=>{oe=this._shapeBySchema(I,{...oe,[Q.key]:ge.value||void 0}),st(oe),Oe==null||Oe.setValue(oe)}),Ae.append(Se,ge,Ie),Ce.append(H,Ae)}if(Q.type==="number"){let Ae=document.createElement("div");Ae.style.flex="1",Ae.style.position="relative";let ge=document.createElement("input");ge.type="number",Q.step&&(ge.step=Q.step),Object.assign(ge.style,{width:"100%",padding:"8px 10px 8px 36px",borderRadius:"10px",border:"1px solid var(--divider-color)"});let Se=document.createElement("ha-icon");Se.setAttribute("icon","mdi:counter"),Object.assign(Se.style,{position:"absolute",left:"10px",top:"8px","--mdc-icon-size":"18px",width:"18px",height:"18px",opacity:".7"}),ge.value=(Me=($e=N[Q.key])!=null?$e:Q.default)!=null?Me:"",ge.addEventListener("input",async()=>{let Ie=ge.value===""?void 0:Number(ge.value);oe=this._shapeBySchema(I,{...oe,[Q.key]:isNaN(Ie)?void 0:Ie}),st(oe),Oe==null||Oe.setValue(oe)}),Ae.append(Se,ge),Ce.append(H,Ae)}if(Q.type==="select"){let Ae=document.createElement("div");Ae.style.flex="1",Ae.style.position="relative";let ge=document.createElement("select");Object.assign(ge.style,{width:"100%",padding:"8px 10px 8px 36px",borderRadius:"10px",border:"1px solid var(--divider-color)"});let Se=document.createElement("ha-icon");Se.setAttribute("icon","mdi:format-list-bulleted"),Object.assign(Se.style,{position:"absolute",left:"10px",top:"8px","--mdc-icon-size":"18px",width:"18px",height:"18px",opacity:".7"}),(Q.options||[]).forEach(Ie=>{let we=document.createElement("option");we.value=Ie,ge.appendChild(we)}),ge.value=(Ve=(Xe=N[Q.key])!=null?Xe:Q.default)!=null?Ve:((Ue=Q.options)==null?void 0:Ue[0])||"",ge.addEventListener("change",async()=>{oe=this._shapeBySchema(I,{...oe,[Q.key]:ge.value}),st(oe),Oe==null||Oe.setValue(oe)}),Ae.append(Se,ge),Ce.append(H,Ae)}if(Q.type==="text"){let Ae=document.createElement("div");Ae.style.flex="1",Ae.style.position="relative";let ge=document.createElement("input");ge.type="text",Object.assign(ge.style,{width:"100%",padding:"8px 10px 8px 36px",borderRadius:"10px",border:"1px solid var(--divider-color)"});let Se=document.createElement("ha-icon");Se.setAttribute("icon","mdi:text"),Object.assign(Se.style,{position:"absolute",left:"10px",top:"8px","--mdc-icon-size":"18px",width:"18px",height:"18px",opacity:".7"}),ge.value=(qe=N[Q.key])!=null?qe:"",ge.addEventListener("input",async()=>{oe=this._shapeBySchema(I,{...oe,[Q.key]:ge.value||void 0}),st(oe),Oe==null||Oe.setValue(oe)}),Ae.append(Se,ge),Ce.append(H,Ae)}if(Q.type==="textarea"){let Ae=document.createElement("textarea");Object.assign(Ae.style,{flex:"1",minHeight:"120px",padding:"8px 10px",borderRadius:"10px",border:"1px solid var(--divider-color)"}),Ae.value=(He=N[Q.key])!=null?He:"",Ae.addEventListener("input",async()=>{oe=this._shapeBySchema(I,{...oe,[Q.key]:Ae.value||""}),st(oe),Oe==null||Oe.setValue(oe)}),Ce.append(H,Ae)}X.appendChild(Ce)}),P.innerHTML="",P.appendChild(X)},Ne=new WeakMap,Rt=I=>{if(!ee)return;let N=Array.isArray(I==null?void 0:I.visibility)?I.visibility.map(ye=>({...ye})):[],te=()=>yt(oe),ne=()=>{var ye;N=N.filter(F=>F&&typeof F=="object"&&F.condition),oe={...oe,visibility:N};try{Oe==null||Oe.setValue(oe)}catch{}try{(ye=Te==null?void 0:Te.setConfig)==null||ye.call(Te,oe)}catch{}st(oe)},X=()=>{if(ee.innerHTML="",!N||!N.length){let F=document.createElement("div");F.style.opacity=".7",F.style.fontSize=".9rem",F.style.marginBottom="8px",F.textContent="No conditions defined \u2013 this card is always visible.",ee.appendChild(F)}N.forEach((F,Q)=>{let Ce=document.createElement("div");Object.assign(Ce.style,{display:"flex",flexDirection:"column",gap:"6px",marginBottom:"12px",border:"1px solid var(--divider-color)",borderRadius:"8px",padding:"8px"});let H=document.createElement("div");Object.assign(H.style,{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"4px"});let Fe=document.createElement("div");Fe.style.display="flex",Fe.style.alignItems="center",Fe.style.gap="6px";let Pe=document.createElement("ha-icon"),$e="mdi:filter",Me=F.condition||"state";Me==="numeric_state"?$e="mdi:numeric":Me==="screen"?$e="mdi:monitor":Me==="user"?$e="mdi:account":Me==="state"&&($e="mdi:state-machine"),Pe.setAttribute("icon",$e);let Xe=document.createElement("span");Xe.style.fontWeight="bold",Xe.style.textTransform="capitalize",Xe.textContent=Me==="numeric_state"?"Entity numeric state":Me==="state"?"Entity state":Me==="screen"?"Screen":"User",Fe.appendChild(Pe),Fe.appendChild(Xe),H.appendChild(Fe);let Ue=document.createElement("button");Ue.setAttribute("title","Remove condition"),Ue.innerHTML='<ha-icon icon="mdi:trash-can-outline"></ha-icon>',Object.assign(Ue.style,{border:"none",background:"transparent",cursor:"pointer",padding:"4px",display:"inline-flex",alignItems:"center"}),Ue.style.position="relative",Ue.style.zIndex="1000",Ue.addEventListener("click",Ie=>{Ie.preventDefault(),Ie.stopPropagation();let we=N.indexOf(F);we>-1&&N.splice(we,1),oe.visibility=N,X(),ne()}),H.appendChild(Ue),Ce.appendChild(H);let Ve=document.createElement("div");Ve.style.display="flex",Ve.style.gap="8px";let qe=document.createElement("label");qe.textContent="Type",qe.style.fontSize=".85rem",qe.style.marginRight="4px";let He=document.createElement("select");["state","numeric_state","screen","user"].forEach(Ie=>{let we=document.createElement("option");we.value=Ie,we.textContent=Ie.replace("_"," "),He.appendChild(we)}),He.value=Me,He.addEventListener("change",()=>{F.condition=He.value,delete F.entity,delete F.state,delete F.state_not,delete F.above,delete F.below,delete F.media_query,delete F.users,X(),ne()}),Ve.appendChild(qe),Ve.appendChild(He),Ce.appendChild(Ve);let Ae=document.createElement("div");Object.assign(Ae.style,{display:"flex",flexWrap:"wrap",gap:"8px",alignItems:"center"});let ge=(Ie,we)=>{let de=document.createElement("div");de.style.display="flex",de.style.flexDirection="column",de.style.gap="4px",de.style.minWidth="150px";let re=document.createElement("span");re.textContent=Ie,re.style.fontSize=".75rem",de.appendChild(re),de.appendChild(we),Ae.appendChild(de)};(()=>{var Ie,we;if(Ae.innerHTML="",F.condition==="state"){let de;customElements.get("ha-entity-picker")?(de=document.createElement("ha-entity-picker"),de.hass=this.hass,de.setAttribute("label","Select entity"),de.removeAttribute("hide-clear-icon"),de.value=F.entity||"",de.addEventListener("value-changed",V=>{V.stopPropagation(),F.entity=V.detail.value||"",ne()})):(de=document.createElement("input"),de.value=F.entity||"",de.addEventListener("input",()=>{F.entity=de.value.trim(),ne()}),Object.assign(de.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})),ge("Entity",de);let re;if(customElements.get("ha-select")){re=document.createElement("ha-select");let V=document.createElement("mwc-list-item");V.setAttribute("value","state"),V.textContent="State is equal to";let j=document.createElement("mwc-list-item");j.setAttribute("value","state_not"),j.textContent="State is not equal to",re.appendChild(V),re.appendChild(j),re.value=F.state_not!=null?"state_not":"state",re.addEventListener("selected",ve=>{ve.stopPropagation();let Ye=F.state_not!=null?F.state_not:F.state;re.value==="state_not"?(F.state_not=Ye,delete F.state):(F.state=Ye,delete F.state_not),ne()})}else re=document.createElement("select"),re.innerHTML='<option value="state">State is equal to</option><option value="state_not">State is not equal to</option>',re.value=F.state_not!=null?"state_not":"state",Object.assign(re.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),re.addEventListener("change",V=>{V.stopPropagation();let j=F.state_not!=null?F.state_not:F.state;re.value==="state_not"?(F.state_not=j,delete F.state):(F.state=j,delete F.state_not),ne()});ge("Match type",re);let G;customElements.get("ha-textfield")?(G=document.createElement("ha-textfield"),G.value=(F.state_not!=null?F.state_not:F.state)||"",G.setAttribute("label",""),G.addEventListener("input",V=>{V.stopPropagation();let j=re.value;F[j]=G.value;let ve=j==="state"?"state_not":"state";delete F[ve],ne()})):(G=document.createElement("input"),G.value=(F.state_not!=null?F.state_not:F.state)||"",Object.assign(G.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),G.addEventListener("input",V=>{V.stopPropagation();let j=re.value;F[j]=G.value;let ve=j==="state"?"state_not":"state";delete F[ve],ne()})),ge("State",G)}else if(F.condition==="numeric_state"){let de;customElements.get("ha-entity-picker")?(de=document.createElement("ha-entity-picker"),de.hass=this.hass,de.setAttribute("label","Select entity"),de.removeAttribute("hide-clear-icon"),de.value=F.entity||"",de.addEventListener("value-changed",V=>{V.stopPropagation(),F.entity=V.detail.value||"",ne()})):(de=document.createElement("input"),de.value=F.entity||"",de.addEventListener("input",()=>{F.entity=de.value.trim(),ne()}),Object.assign(de.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})),ge("Entity",de);let re;customElements.get("ha-textfield")?(re=document.createElement("ha-textfield"),re.setAttribute("type","number"),re.value=F.above!=null?F.above:"",re.addEventListener("input",V=>{V.stopPropagation();let j=re.value;j===""||isNaN(Number(j))?delete F.above:F.above=Number(j),ne()})):(re=document.createElement("input"),re.type="number",re.value=F.above!=null?F.above:"",Object.assign(re.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),re.addEventListener("input",()=>{let V=re.value;V===""||isNaN(Number(V))?delete F.above:F.above=Number(V),ne()})),ge("Above",re);let G;customElements.get("ha-textfield")?(G=document.createElement("ha-textfield"),G.setAttribute("type","number"),G.value=F.below!=null?F.below:"",G.addEventListener("input",V=>{V.stopPropagation();let j=G.value;j===""||isNaN(Number(j))?delete F.below:F.below=Number(j),ne()})):(G=document.createElement("input"),G.type="number",G.value=F.below!=null?F.below:"",Object.assign(G.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),G.addEventListener("input",()=>{let V=G.value;V===""||isNaN(Number(V))?delete F.below:F.below=Number(V),ne()})),ge("Below",G)}else if(F.condition==="screen"){let de=document.createElement("select"),re=[{label:"Custom",value:""},{label:"Mobile (max-width: 599px)",value:"(max-width: 599px)"},{label:"Tablet (600px - 991px)",value:"(min-width: 600px) and (max-width: 991px)"},{label:"Desktop (min-width: 992px)",value:"(min-width: 992px)"}];if(re.forEach(G=>{let V=document.createElement("option");V.value=G.value,V.textContent=G.label,de.appendChild(V)}),de.value=(we=(Ie=re.find(G=>G.value===(F.media_query||"")))==null?void 0:Ie.value)!=null?we:"",de.addEventListener("change",()=>{F.media_query=de.value,ne()}),ge("Screen size",de),de.value===""){let G=document.createElement("input");G.placeholder="e.g. (min-width: 1280px)",G.value=F.media_query||"",G.addEventListener("input",()=>{F.media_query=G.value,ne()}),ge("Custom query",G)}}else if(F.condition==="user"){let de;customElements.get("ha-user-picker")?(de=document.createElement("ha-user-picker"),de.hass=this.hass,de.value=Array.isArray(F.users)?F.users:[],de.addEventListener("value-changed",re=>{F.users=Array.isArray(re.detail.value)?re.detail.value:[re.detail.value],ne()})):(de=document.createElement("input"),de.value=Array.isArray(F.users)?F.users.join(","):"",de.addEventListener("input",()=>{F.users=de.value.split(",").map(re=>re.trim()).filter(Boolean),ne()})),ge("Users",de)}})(),Ce.appendChild(Ae),ee.appendChild(Ce)});let ye=document.createElement("button");ye.className="btn",ye.innerHTML='<ha-icon icon="mdi:plus"></ha-icon><span style="margin-left:6px">Add condition</span>',Object.assign(ye.style,{marginTop:"8px"}),ye.addEventListener("click",()=>{N.push({condition:"state",entity:"",state:""}),oe.visibility=N,X(),ne()}),ee.appendChild(ye)};X()},yt=I=>{if(!ee)return;let N=Array.isArray(I==null?void 0:I.visibility)?I.visibility:[],te=null,ne=async()=>{if(te)return te;try{if(this.hass&&typeof this.hass.callWS=="function")try{let Q=await this.hass.callWS({type:"config/auth/list"});if(Array.isArray(Q))return te=Q,Q}catch{}if(this.hass&&typeof this.hass.callApi=="function")try{let Q=await this.hass.callApi("get","users");if(Array.isArray(Q))return te=Q,Q}catch{}let F=[];if(this.hass&&this.hass.users&&Array.isArray(this.hass.users)&&F.push(...this.hass.users),this.hass&&this.hass.userData&&Array.isArray(this.hass.userData.users)&&F.push(...this.hass.userData.users),this.hass&&this.hass.authorizedUsers&&Array.isArray(this.hass.authorizedUsers)&&F.push(...this.hass.authorizedUsers),F.length){let Q=new Map;F.forEach(H=>{let Fe=H.id||H.user_id||H.uid||H.name||"";Q.has(Fe)||Q.set(Fe,H)});let Ce=Array.from(Q.values());return te=Ce,Ce}}catch{}return te=[],[]},X=()=>{var F;N=N.filter(Q=>Q&&typeof Q=="object"&&Q.condition),oe.visibility=N;try{Oe==null||Oe.setValue(oe)}catch{}try{(F=Te==null?void 0:Te.setConfig)==null||F.call(Te,oe)}catch{}st(oe)},ye=()=>{ee.innerHTML="";let F=document.createElement("div");F.style.opacity=".75",F.style.fontSize=".85rem",F.style.marginBottom="12px",F.textContent="The card will be shown when ALL conditions below are fulfilled. If no conditions are set, the card will always be shown.",ee.appendChild(F);let Q=(H,Fe)=>{H.forEach((Me,Xe)=>{Ce(Me,H,Xe,Fe)});let Pe=document.createElement("div");Pe.style.marginTop="8px";let $e=document.createElement("button");$e.className="btn",$e.innerHTML='<ha-icon icon="mdi:plus"></ha-icon><span style="margin-left:6px">Add condition</span>',Object.assign($e.style,{display:"flex",alignItems:"center",gap:"6px",padding:"6px 12px",border:"none",borderRadius:"20px",background:"var(--primary-color)",color:"var(--text-primary-color, #fff)",cursor:"pointer",fontWeight:"500"}),$e.addEventListener("click",Me=>{Me.stopPropagation();let Xe=Pe.querySelector(".add-menu");if(Xe){Xe.remove();return}let Ue=document.createElement("div");Ue.className="add-menu",Object.assign(Ue.style,{position:"relative",marginTop:"4px",border:"1px solid var(--divider-color)",borderRadius:"8px",background:"var(--card-background-color, var(--secondary-background-color))",boxShadow:"0 2px 4px rgba(0,0,0,0.2)"}),[{type:"numeric_state",label:"Entity numeric state",icon:"mdi:numeric"},{type:"state",label:"Entity state",icon:"mdi:state-machine"},{type:"screen",label:"Screen",icon:"mdi:monitor"},{type:"user",label:"User",icon:"mdi:account"},{type:"and",label:"And",icon:"mdi:logic-and"},{type:"or",label:"Or",icon:"mdi:logic-or"}].forEach(qe=>{let He=document.createElement("div");He.style.display="flex",He.style.alignItems="center",He.style.gap="8px",He.style.padding="6px 12px",He.style.cursor="pointer",He.addEventListener("mouseenter",()=>He.style.background="var(--hover-color, #444)"),He.addEventListener("mouseleave",()=>He.style.background=""),He.addEventListener("click",()=>{Ue.remove();let Se;qe.type==="and"||qe.type==="or"?Se={condition:qe.type,conditions:[]}:qe.type==="state"?Se={condition:"state",entity:"",state:""}:qe.type==="numeric_state"?Se={condition:"numeric_state",entity:""}:qe.type==="screen"?Se={condition:"screen",media_query:""}:qe.type==="user"&&(Se={condition:"user",users:[]}),H.push(Se),Ne.set(Se,!0),X(),ye()});let Ae=document.createElement("ha-icon");Ae.setAttribute("icon",qe.icon),He.appendChild(Ae);let ge=document.createElement("span");ge.textContent=qe.label,He.appendChild(ge),Ue.appendChild(He)}),Pe.appendChild(Ue)}),Pe.appendChild($e),Fe.appendChild(Pe)},Ce=(H,Fe,Pe,$e)=>{let Me=H.condition||"state",Xe=Ne.get(H);Xe===void 0&&(Xe=N.length===1);let Ue=document.createElement("div");Object.assign(Ue.style,{display:"flex",flexDirection:"column",border:"1px solid var(--divider-color)",borderLeft:"3px solid var(--primary-color)",borderRadius:"12px",padding:"16px",marginBottom:"20px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",boxShadow:"var(--ha-card-box-shadow, 0 2px 6px rgba(0, 0, 0, 0.15))"});let Ve=document.createElement("div");Ve.style.display="flex",Ve.style.alignItems="center",Ve.style.justifyContent="space-between",Ve.style.marginBottom="8px",Ve.style.borderBottom="1px solid var(--divider-color)",Ve.style.paddingBottom="4px",Ve.style.position="relative";let qe=document.createElement("div");qe.style.display="flex",qe.style.alignItems="center",qe.style.gap="6px";let He=document.createElement("button");He.innerHTML=`<ha-icon icon="${Xe?"mdi:chevron-down":"mdi:chevron-right"}"></ha-icon>`,Object.assign(He.style,{border:"none",background:"transparent",cursor:"pointer",padding:"4px",display:"inline-flex",alignItems:"center"}),He.addEventListener("click",we=>{we.stopPropagation(),Ne.set(H,!Xe),ye()}),qe.appendChild(He);let Ae=document.createElement("ha-icon"),ge="mdi:filter";Me==="numeric_state"?ge="mdi:numeric":Me==="screen"?ge="mdi:monitor":Me==="user"?ge="mdi:account":Me==="state"?ge="mdi:state-machine":Me==="and"?ge="mdi:logic-and":Me==="or"&&(ge="mdi:logic-or"),Ae.setAttribute("icon",ge),qe.appendChild(Ae);let Se=document.createElement("span");Se.style.fontWeight="600",Se.style.fontSize="0.95rem",Se.style.textTransform="capitalize",Se.textContent=Me==="numeric_state"?"Entity numeric state":Me==="state"?"Entity state":Me==="screen"?"Screen":Me==="user"?"User":Me==="and"?"And":"Or",qe.appendChild(Se),Ve.appendChild(qe);let Ie=document.createElement("button");if(Ie.setAttribute("title","Remove condition"),Ie.innerHTML='<ha-icon icon="mdi:trash-can-outline"></ha-icon>',Object.assign(Ie.style,{border:"none",background:"transparent",cursor:"pointer",padding:"4px",display:"inline-flex",alignItems:"center"}),Ie.style.position="relative",Ie.style.zIndex="1000",Ie.addEventListener("click",we=>{we.preventDefault(),we.stopPropagation();let de=Fe.indexOf(H);de>-1&&Fe.splice(de,1),X(),ye()}),Ve.appendChild(Ie),Ue.appendChild(Ve),Me!=="and"&&Me!=="or"){if(Xe){let we=document.createElement("div");Object.assign(we.style,{display:"flex",flexDirection:"column",gap:"14px",alignItems:"stretch"});let de=(re,G)=>{let V=document.createElement("div");V.style.display="flex",V.style.flexDirection="column",V.style.gap="4px";let j=document.createElement("span");j.textContent=re,j.style.fontSize=".75rem",V.appendChild(j),V.appendChild(G),we.appendChild(V);let ve=(G.tagName||"").toLowerCase();(ve==="input"||ve==="select")&&Object.assign(G.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})};if(H.condition==="state"){let re=document.createElement("ha-entity-picker");re.value=H.entity||"",re.hass=this.hass,re.setAttribute("label","Select entity"),re.addEventListener("value-changed",j=>{H.entity=j.detail.value||"",X()}),customElements.get("ha-entity-picker")||customElements.whenDefined("ha-entity-picker").then(()=>{ye()}).catch(()=>{}),de("Entity",re);let G;if(customElements.get("ha-select")){G=document.createElement("ha-select");let j=document.createElement("mwc-list-item");j.setAttribute("value","state"),j.textContent="State is equal to";let ve=document.createElement("mwc-list-item");ve.setAttribute("value","state_not"),ve.textContent="State is not equal to",G.appendChild(j),G.appendChild(ve),G.value=H.state_not!=null?"state_not":"state",G.addEventListener("selected",Ye=>{Ye.stopPropagation();let tt=H.state_not!=null?H.state_not:H.state;G.value==="state_not"?(H.state_not=tt,delete H.state):(H.state=tt,delete H.state_not),X()})}else G=document.createElement("select"),G.innerHTML='<option value="state">State is equal to</option><option value="state_not">State is not equal to</option>',G.value=H.state_not!=null?"state_not":"state",G.addEventListener("change",j=>{j.stopPropagation();let ve=H.state_not!=null?H.state_not:H.state;G.value==="state_not"?(H.state_not=ve,delete H.state):(H.state=ve,delete H.state_not),X()}),Object.assign(G.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"});de("Match type",G);let V;customElements.get("ha-textfield")?(V=document.createElement("ha-textfield"),V.value=(H.state_not!=null?H.state_not:H.state)||"",V.setAttribute("label",""),V.addEventListener("input",j=>{j.stopPropagation();let ve=G.value;H[ve]=V.value;let Ye=ve==="state"?"state_not":"state";delete H[Ye],X()})):(V=document.createElement("input"),V.value=(H.state_not!=null?H.state_not:H.state)||"",Object.assign(V.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),V.addEventListener("input",j=>{j.stopPropagation();let ve=G.value;H[ve]=V.value;let Ye=ve==="state"?"state_not":"state";delete H[Ye],X()})),de("State",V)}else if(H.condition==="numeric_state"){let re=document.createElement("ha-entity-picker");re.value=H.entity||"",re.hass=this.hass,re.setAttribute("label","Select entity"),re.removeAttribute("hide-clear-icon"),re.addEventListener("value-changed",j=>{H.entity=j.detail.value||"",X()}),customElements.get("ha-entity-picker")||customElements.whenDefined("ha-entity-picker").then(()=>{ye()}).catch(()=>{}),de("Entity",re);let G;customElements.get("ha-textfield")?(G=document.createElement("ha-textfield"),G.setAttribute("type","number"),G.value=H.above!=null?H.above:"",G.addEventListener("input",j=>{j.stopPropagation();let ve=G.value;ve===""||isNaN(Number(ve))?delete H.above:H.above=Number(ve),X()})):(G=document.createElement("input"),G.type="number",G.value=H.above!=null?H.above:"",Object.assign(G.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),G.addEventListener("input",()=>{let j=G.value;j===""||isNaN(Number(j))?delete H.above:H.above=Number(j),X()})),de("Above",G);let V;customElements.get("ha-textfield")?(V=document.createElement("ha-textfield"),V.setAttribute("type","number"),V.value=H.below!=null?H.below:"",V.addEventListener("input",j=>{j.stopPropagation();let ve=V.value;ve===""||isNaN(Number(ve))?delete H.below:H.below=Number(ve),X()})):(V=document.createElement("input"),V.type="number",V.value=H.below!=null?H.below:"",Object.assign(V.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),V.addEventListener("input",()=>{let j=V.value;j===""||isNaN(Number(j))?delete H.below:H.below=Number(j),X()})),de("Below",V)}else if(H.condition==="screen"){let re=[{label:"Mobile",query:"(max-width: 599px)"},{label:"Tablet (min: 768px)",query:"(min-width: 768px)"},{label:"Desktop (min: 1024px)",query:"(min-width: 1024px)"},{label:"Wide (min: 1280px)",query:"(min-width: 1280px)"}];Array.isArray(H.media_query_list)||(H.media_query_list=[]);let G=document.createElement("div");G.style.display="flex",G.style.flexDirection="column",G.style.gap="4px",re.forEach(V=>{let j=document.createElement("label");j.style.display="flex",j.style.alignItems="center",j.style.gap="6px";let ve=document.createElement("input");ve.type="checkbox",ve.checked=H.media_query_list.includes(V.query),ve.addEventListener("change",()=>{ve.checked?H.media_query_list.push(V.query):H.media_query_list=H.media_query_list.filter(tt=>tt!==V.query),H.media_query=H.media_query_list.join(","),X()});let Ye=document.createElement("span");Ye.textContent=V.label,j.appendChild(ve),j.appendChild(Ye),G.appendChild(j)}),de("Screen sizes",G)}else if(H.condition==="user"){let re;if(customElements.get("ha-user-picker"))re=document.createElement("ha-user-picker"),re.hass=this.hass,re.setAttribute("label","Select user"),re.value=Array.isArray(H.users)?H.users:[],re.addEventListener("value-changed",G=>{let V=G.detail.value;H.users=Array.isArray(V)?V:[V],X()});else{re=document.createElement("div"),re.style.display="flex",re.style.flexDirection="column",re.style.gap="4px";let G=document.createElement("span");G.style.opacity="0.7",G.style.fontSize=".85rem",G.textContent="Loading users\u2026",re.appendChild(G);let V=Array.isArray(H.users)?H.users:[];ne().then(j=>{if(re.innerHTML="",Array.isArray(j)&&j.length)j.forEach(ve=>{let Ye=ve.id||ve.user_id||ve.uid||ve.name||"",tt=ve.name||Ye,Et=document.createElement("label");Et.style.display="flex",Et.style.alignItems="center",Et.style.gap="6px",Et.style.padding="4px 0";let Ge=document.createElement("input");Ge.type="checkbox",Ge.checked=V.includes(Ye)||V.includes(tt),Ge.addEventListener("change",()=>{let Ft=Array.isArray(H.users)?H.users.slice():[];Ge.checked?Ft.includes(Ye)||Ft.push(Ye):Ft=Ft.filter(ni=>ni!==Ye&&ni!==tt),H.users=Ft,X()});let wt=document.createElement("span");wt.textContent=tt,Et.appendChild(Ge),Et.appendChild(wt),re.appendChild(Et)});else{let ve=document.createElement("input");ve.value=Array.isArray(H.users)?H.users.join(","):"",Object.assign(ve.style,{padding:"6px 10px",borderRadius:"6px",border:"1px solid var(--divider-color)",background:"var(--card-background-color, var(--secondary-background-color))",color:"var(--primary-text-color, inherit)"});let Ye=()=>{H.users=ve.value.split(",").map(tt=>tt.trim()).filter(Boolean),X()};ve.addEventListener("change",Ye),ve.addEventListener("blur",Ye),re.appendChild(ve)}})}de("Users",re)}Ue.appendChild(we)}}else if(Xe){Array.isArray(H.conditions)||(H.conditions=[]);let we=document.createElement("div");we.style.marginLeft="16px",Q(H.conditions,we),Ue.appendChild(we)}$e.appendChild(Ue)};Q(N,ee)};ye()},st=I=>{if(((I==null?void 0:I.type)||"")==="custom_card"){gt=JSON.stringify(I||{}),w.innerHTML='<div style="opacity:.6;font-size:.9rem;padding:8px">Preview not available for the custom card placeholder. Use the YAML editor.</div>',K.hidden=!0;return}let N=JSON.stringify(I||{});N!==gt&&(gt=N,Ct&&clearTimeout(Ct),Ct=setTimeout(async()=>{let te=++dt;K.hidden=!1,w.innerHTML="",await Ui();try{let ne=await this._helpersPromise||await window.loadCardHelpers();if(te!==dt)return;let X=ne.createCardElement(I);if(X.hass=this.hass,te!==dt)return;w.appendChild(X)}catch{}finally{te===dt&&(K.hidden=!0)}},150))},ht=async I=>{var ne;let N=++dt;E.hidden=!1,L.innerHTML="",await lc();let te=I.type||Le;if(lt=await this._getEditorElementForType(te,I),te==="custom_card"){let X=document.createElement("div");return X.style.opacity=".7",X.style.fontSize=".9rem",X.textContent="Custom card placeholder: use the YAML editor to paste the card type and options.",L.appendChild(X),Te=null,ot!=="yaml"&&se("yaml"),ae(!0),E.hidden=!0,!1}if(!lt){let X=document.createElement("div");return X.style.opacity=".7",X.style.fontSize=".9rem",X.textContent="This card does not support a visual editor. Please use the YAML tab to configure it.",N===dt&&(L.appendChild(X),E.hidden=!0),Te=null,ae(!0),ot!=="visual"&&se("yaml"),!1}try{lt.hass=this.hass,lt.isConnected||L.appendChild(lt),await Promise.resolve();try{lt.setConfig(I)}catch{}try{let ye=await this._helpersPromise||await window.loadCardHelpers(),F=ye.getCardElementClass?await ye.getCardElementClass(I.type||Le):null;if(F!=null&&F.getStubConfig){let Q=Object.keys(((ne=this.hass)==null?void 0:ne.states)||{}),Ce=Fe=>Q.filter(Pe=>Pe.startsWith(Fe+".")),H=await F.getStubConfig(this.hass,Q,Ce);H&&(I=this._shapeBySchema(I.type||Le,{...H}))}}catch{}await Promise.resolve();try{lt.setConfig(I)}catch{}Te&&this.__onEditorChange&&(Te.removeEventListener("config-changed",this.__onEditorChange),Te.removeEventListener("value-changed",this.__onEditorChange));let X=async ye=>{var Ce,H,Fe;let F=(Fe=(Ce=ye.detail)==null?void 0:Ce.config)!=null?Fe:(H=ye.detail)==null?void 0:H.value;if(!F)return;let Q=F.type||Le;Le=Q,oe=this._shapeBySchema(Q,F),ie(""),ae(!0),_t(Le,oe),st(oe),Oe==null||Oe.setValue(oe)};return this.__onEditorChange=X,lt.addEventListener("config-changed",X),lt.addEventListener("value-changed",X),Te=lt,ot!=="yaml"&&se("visual"),ae(!0),!0}finally{N===dt&&(E.hidden=!0)}},J=async I=>{Oe=await this._mountYamlEditor(D,I,async N=>{var te,ne;try{let X=(N==null?void 0:N.type)||Le,ye=this._shapeBySchema(X,N||{}),F=X!==Le;if(Le=X,oe=ye,C.hidden=!0,C.textContent="",ae(!0),F){if(_t(Le,oe),Te){try{(te=Te.setConfig)==null||te.call(Te,oe)}catch{}ot!=="yaml"&&se("visual")}try{yt(oe)}catch{}}else{try{(ne=Te==null?void 0:Te.setConfig)==null||ne.call(Te,oe)}catch{}st(oe);try{yt(oe)}catch{}}}catch(X){C.hidden=!1,C.textContent=`Invalid config: ${String((X==null?void 0:X.message)||X)}`,ae(!1)}},N=>{C.hidden=!1,C.textContent=`Invalid YAML: ${String((N==null?void 0:N.message)||N)}`,ae(!1)})},fe=async I=>{if(this.__stubCache.has(I))return{...this.__stubCache.get(I)};let N=await this._getStubConfigForType(I);return this.__stubCache.set(I,{...N}),{...N}},ce=async I=>{C.hidden=!0,C.textContent="",ie(""),Le=I;try{typeof it=="function"&&it(I)}catch{}let N=t==="edit"&&a&&a.type===I?{...a}:await fe(I);oe=this._shapeBySchema(I,N),Te=null,_t(I,oe),await J(oe),await Ui(),st(oe);try{yt(oe)}catch{}try{let te=await ht(oe);se(te?"visual":"yaml")}catch{se("yaml")}ae(!0)},Y=async()=>{if(!oe)return;let I=this._shapeBySchema(Le,oe);t==="edit"&&typeof o=="function"?await o(I):(await this._addPickedCardToLayout(I),this._pushRecent((I||{}).type)),l()};y.addEventListener("click",l),_.addEventListener("click",l),f.addEventListener("click",Y),v.addEventListener("click",Y),c.addEventListener("keydown",I=>{I.key==="Escape"&&l(),I.key==="Enter"&&!f.disabled&&Y()});let pe=null;g.addEventListener("input",()=>{pe&&clearTimeout(pe),pe=setTimeout(nt,120)}),nt(),await ce((()=>{var te;return(((te=this._getRecent)==null?void 0:te.call(this))||[]).find(Boolean)||"entities"})()),ae(!0),t==="edit"&&a&&(await ce(a.type||"entities"),ae(!0))}async _getStubConfigForType(t){var y;let a=await this._helpersPromise||await window.loadCardHelpers(),o=null;if(t==="custom_card")return null;try{a.getCardElementClass&&(o=await a.getCardElementClass(t))}catch{}let l=Object.keys(((y=this.hass)==null?void 0:y.states)||{}),c=_=>l.filter(g=>g.startsWith(_+".")),d={type:t};if(o!=null&&o.getStubConfig)try{let _=await o.getStubConfig(this.hass,l,c);if(t!=="entity")return _;_&&typeof _=="object"&&(d={...d,..._})}catch{}let f=l[0],v=c("sensor")[0]||f;if(["entity","sensor","button","gauge","tile","light","thermostat","media-control","alarm-panel","picture-entity","weather-forecast","map"].includes(t)){let _={sensor:v,gauge:c("sensor").find(this._isNumericEntity.bind(this))||v,"media-control":c("media_player")[0]||f,light:c("light")[0]||f,thermostat:c("climate")[0]||f,"alarm-panel":c("alarm_control_panel")[0]||f,"weather-forecast":c("weather")[0]||f,map:c("device_tracker")[0]||c("person")[0]||f}[t]||v||f;["entity","sensor","button","gauge","tile","light","thermostat","media-control","alarm-panel","picture-entity"].includes(t)?d.entity=_:t==="weather-forecast"?(d.entity=_,d.show_current=!0,d.show_forecast=!0,d.forecast_type="daily"):t==="map"&&(d.entities=[_].filter(Boolean),d.theme_mode="auto")}if(["entities","glance","picture-glance","history-graph","statistics-graph"].includes(t)){let _=g=>(g!=null&&g.length?l.filter(w=>g.includes(w.split(".")[0])):l).slice(0,3);t==="statistics-graph"?d.entities=_(["sensor","number","input_number"]):d.entities=_()}if(t==="markdown"&&(d.content="Markdown card"),t==="sensor"&&(d.graph="line"),t==="button"&&(d.show_name=!0,d.show_icon=!0),t==="tile"&&(d.features_position="bottom",d.vertical=!1),t==="picture-glance"&&(d.title=d.title||"Glance",d.image=d.image||"https://demo.home-assistant.io/stub_config/kitchen.png"),t==="picture-entity"&&(d.image=d.image||"https://demo.home-assistant.io/stub_config/bedroom.png"),t==="iframe"&&(d.url=d.url||"https://www.home-assistant.io",d.aspect_ratio=d.aspect_ratio||"50%"),t==="alarm-panel"&&(d.states=d.states||["arm_home","arm_away"]),t==="area")try{let _=this.hass&&this.hass.areas?Object.values(this.hass.areas):[];_.length?d.area=_[0].area_id||_[0].name||_[0].id:d.area=f?f.split(".")[0]:"default_area",d.display_type="picture",d.alert_classes=d.alert_classes||["moisture","motion"],d.sensor_classes=d.sensor_classes||["temperature","humidity"],d.features_position="bottom"}catch{}return d}_getNextAvailablePosition(){let t=Array.from(this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)")),a=new Set,o=this.gridSize;t.forEach(d=>{let f=parseFloat(d.getAttribute("data-x"))||0,v=parseFloat(d.getAttribute("data-y"))||0,y=parseFloat(getComputedStyle(d).width)||100,_=parseFloat(getComputedStyle(d).height)||100,g=Math.floor(f/o),w=Math.floor(v/o),L=Math.floor((f+y)/o),E=Math.floor((v+_)/o);for(let P=g;P<L;P++)for(let D=w;D<E;D++)a.add(`${P}-${D}`)});let l=0,c=0;for(;a.has(`${l}-${c}`);)l+=6,l>60&&(l=0,c+=6);return{x:l*o,y:c*o}}async _addPickedCardToLayout(t){this._hideEmptyPlaceholder();let a=await this._createCard(t),o=this._makeWrapper(a),l=this._getNextAvailablePosition();this._setCardPosition(o,l.x,l.y),o.style.width=`${14*this.gridSize}px`,o.style.height=`${10*this.gridSize}px`,o.style.zIndex=String(this._highestZ()+1),this.cardContainer.appendChild(o);try{this._rebuildOnce(o.firstElementChild)}catch{}this._initCardInteract(o),this._resizeContainer(),this._queueSave("add"),this._toast("Card added to layout."),this._syncEmptyStateUI();try{this._applyVisibility_()}catch{}}_toggleSelection(t,a=null){let o=a==null?!this._selection.has(t):!!a;o?this._selection.add(t):this._selection.delete(t),t.classList.toggle("selected",o)}_clearSelection(){for(let t of this._selection)t.classList.remove("selected");this._selection.clear()}_copySelection(){var t,a,o;try{let l=this._selection?Array.from(this._selection):[];if(!l.length){(t=this._toast)==null||t.call(this,"Nothing selected to copy.");return}let c=1/0,d=1/0,f=[];for(let v of l){if(v.dataset.placeholder)continue;let y=parseFloat(v.getAttribute("data-x"))||0,_=parseFloat(v.getAttribute("data-y"))||0;y<c&&(c=y),_<d&&(d=_)}for(let v of l){if(v.dataset.placeholder)continue;let y=this._extractCardConfig(v.firstElementChild)||{},_=parseFloat(v.getAttribute("data-x"))||0,g=parseFloat(v.getAttribute("data-y"))||0,w=v.style.width||`${v.getBoundingClientRect().width}px`,L=v.style.height||`${v.getBoundingClientRect().height}px`;f.push({cfg:y,dx:_-c,dy:g-d,width:w,height:L})}window.__DDC_CLIPBOARD__={items:f},(a=this._toast)==null||a.call(this,`Copied ${f.length} card${f.length===1?"":"s"}.`)}catch(l){console.warn("[drag-and-drop-card] Copy failed",l),(o=this._toast)==null||o.call(this,"Copy failed.")}}async _pasteClipboard(){var t,a,o,l;try{let c=window.__DDC_CLIPBOARD__;if(!c||!Array.isArray(c.items)||!c.items.length){(t=this._toast)==null||t.call(this,"Clipboard is empty.");return}let d=c.items,f=1,v;do{let g=this.gridSize*f,w=this.gridSize*f;v=d.map(L=>{let E=parseFloat(L.width)||0,P=parseFloat(L.height)||0;return{x:g+(L.dx||0),y:w+(L.dy||0),w:E,h:P}}),f+=1}while(this._anyCollisionFor(v,new Set));let y=this.gridSize*(f-1),_=this.gridSize*(f-1);for(let g of d){let w=g.cfg||{},L=await this._createCard(w),E=this._makeWrapper(L);E.style.width=g.width,E.style.height=g.height;let P=y+(g.dx||0),D=_+(g.dy||0);this._setCardPosition(E,P,D),E.style.zIndex=String(this._highestZ()+1);try{let C=this._normalizeTabId(this.activeTab||this.defaultTab);C&&(E.dataset.tabId=C)}catch{}this.cardContainer.appendChild(E);try{this._rebuildOnce(E.firstElementChild)}catch{}this._initCardInteract(E)}this._resizeContainer(),this._applyActiveTab(),(a=this._queueSave)==null||a.call(this,"paste"),(o=this._toast)==null||o.call(this,`Pasted ${d.length} card${d.length===1?"":"s"}.`)}catch(c){console.warn("[drag-and-drop-card] Paste failed",c),(l=this._toast)==null||l.call(this,"Paste failed.")}}_installSelectionMarquee(){let t=this.cardContainer,a=0,o=0,l=null,c=!1,d=g=>{let w=t.getBoundingClientRect(),L="touches"in g&&g.touches[0]?g.touches[0].clientX:g.clientX,E="touches"in g&&g.touches[0]?g.touches[0].clientY:g.clientY;return{x:L-w.left,y:E-w.top}},f=(g,w)=>{let L=Math.min(g,a),E=Math.max(g,a),P=Math.min(w,o),D=Math.max(w,o);l.style.left=`${L}px`,l.style.top=`${P}px`,l.style.width=`${E-L}px`,l.style.height=`${D-P}px`;let C=l.getBoundingClientRect(),A=t.querySelectorAll(".card-wrapper:not(.ddc-placeholder)");this._clearSelection(),A.forEach(O=>{let b=O.getBoundingClientRect();!(b.right<C.left||b.left>C.right||b.bottom<C.top||b.top>C.bottom)&&this._toggleSelection(O,!0)})},v=g=>{if(!this.editMode||g.target.closest(".card-wrapper"))return;c=!0;let w=d(g);a=w.x,o=w.y,l=document.createElement("div"),l.className="marquee",l.style.left=`${a}px`,l.style.top=`${o}px`,t.appendChild(l),g.preventDefault()},y=g=>{!c||!l||f(d(g).x,d(g).y)},_=()=>{c&&(c=!1,l&&l.remove(),l=null)};t.addEventListener("mousedown",v),window.addEventListener("mousemove",y),window.addEventListener("mouseup",_),t.addEventListener("touchstart",g=>{this.editMode&&(g.target.closest(".card-wrapper")||v(g))},{passive:!1}),window.addEventListener("touchmove",g=>{y(g)},{passive:!1}),window.addEventListener("touchend",_),window.addEventListener("touchcancel",_)}async _openDiagnostics(){var f,v;let t=document.createElement("div");t.className="modal";let a=this.storageKey||"(none)",o=this._backendOK&&!!this.storageKey,l=y=>y.slice(-200).map(_=>`<div style="font-family:monospace;font-size:.85rem;line-height:1.3">
        <span style="opacity:.6">${_.t}</span>
        <b style="margin-left:6px;color:#03a9f4">[${_.kind}]</b>
        <span style="margin-left:6px">${this._safe(_.msg)}</span>
        ${_.extra?`<pre style="margin:4px 0 0 0;white-space:pre-wrap;background:var(--card-background-color);border:1px solid var(--divider-color);border-radius:8px;padding:6px;max-height:160px;overflow:auto">${this._safe(JSON.stringify(_.extra,null,2))}</pre>`:""}
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
                <div>Storage key (raw \u2192 slug)</div><div><code>${this._safe(((f=this._config)==null?void 0:f.storage_key)||"")}</code> \u2192 <code>${this._safe(a)}</code></div>
                <div>Backend reachable</div><div><b>${this._backendOK?"YES":"NO"}</b></div>
                <div>Persist target</div><div><b>${o?"Host (backend)":"Browser (localStorage)"}</b></div>
                <div>Auto-save</div><div>${this.autoSave?`ON (${this.autoSaveDebounce} ms)`:"OFF"}</div>
                <div>Cards mounted</div><div>${((v=this.cardContainer)==null?void 0:v.querySelectorAll(".card-wrapper:not(.ddc-placeholder)").length)||0}</div>
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
            <div class="bd" id="logArea" style="padding:12px;max-height:420px;overflow:auto">${l(this._dbgDump())}</div>
          </div>
        </div>
      </div>`;let c=()=>t.remove();t.querySelector("#closeDiag").addEventListener("click",c),this.shadowRoot.appendChild(t);let d=()=>{let y=t.querySelector("#logArea"),_=g=>g.slice(-200).map(w=>`<div style="font-family:monospace;font-size:.85rem;line-height:1.3">
          <span style="opacity:.6">${w.t}</span>
          <b style="margin-left:6px;color:#03a9f4">[${w.kind}]</b>
          <span style="margin-left:6px">${this._safe(w.msg)}</span>
          ${w.extra?`<pre style="margin:4px 0 0 0;white-space:pre-wrap;background:var(--card-background-color);border:1px solid var(--divider-color);border-radius:8px;padding:6px;max-height:160px;overflow:auto">${this._safe(JSON.stringify(w.extra,null,2))}</pre>`:""}
        </div>`).join("");y.innerHTML=_(this._dbgDump()),y.scrollTop=y.scrollHeight};t.querySelector("#refreshKeys").addEventListener("click",async()=>{try{this._dbgPush("probe","Manual refresh"),await this._probeBackend()}finally{d()}}),t.querySelector("#forceSave").addEventListener("click",async()=>{await this._saveLayout(!1),d()}),t.querySelector("#exportJson").addEventListener("click",()=>{let _=Array.from(this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)")).map(E=>{let P=parseFloat(E.getAttribute("data-x"))||0,D=parseFloat(E.getAttribute("data-y"))||0,C=parseFloat(E.style.width)||E.getBoundingClientRect().width,A=parseFloat(E.style.height)||E.getBoundingClientRect().height,O=parseInt(E.style.zIndex||"1",10),b=this._extractCardConfig(E.firstElementChild),M=E.dataset.tabId||this.defaultTab;return{card:b,position:{x:P,y:D},size:{width:C,height:A},z:O,tabId:M}}),g={version:2,options:this._exportableOptions(),cards:_},w=new Blob([JSON.stringify(g,null,2)],{type:"application/json"}),L=document.createElement("a");L.href=URL.createObjectURL(w),L.download=`ddc_${this.storageKey||"layout"}.json`,L.click(),URL.revokeObjectURL(L.href)}),t.querySelector("#importJson").addEventListener("click",async()=>{let y=document.createElement("input");y.type="file",y.accept="application/json",y.onchange=async()=>{var L,E,P,D,C,A,O,b,M,R,ee,q,K;let _=(L=y.files)==null?void 0:L[0];if(!_)return;let g=await _.text();try{let ae=JSON.parse(g);if(this._dbgPush("import","Loaded file",{bytes:g.length}),this.cardContainer.innerHTML="",(E=ae.cards)!=null&&E.length)for(let ie of ae.cards)if(!(ie!=null&&ie.card)||typeof ie.card=="object"&&Object.keys(ie.card).length===0){let $=this._makePlaceholderAt(((P=ie.position)==null?void 0:P.x)||0,((D=ie.position)==null?void 0:D.y)||0,((C=ie.size)==null?void 0:C.width)||200,((A=ie.size)==null?void 0:A.height)||200);this.cardContainer.appendChild($)}else{let $=await this._createCard(ie.card),me=this._makeWrapper($);this._setCardPosition(me,((O=ie.position)==null?void 0:O.x)||0,((b=ie.position)==null?void 0:b.y)||0),me.dataset.tabId=this._normalizeTabId(ie.tabId||ie.tab_id||this.defaultTab),this._setCardPosition(me,((M=ie.position)==null?void 0:M.x)||0,((R=ie.position)==null?void 0:R.y)||0),me.style.width=`${((ee=ie.size)==null?void 0:ee.width)||140}px`,me.style.height=`${((q=ie.size)==null?void 0:q.height)||100}px`,this.cardContainer.appendChild(me);try{this._rebuildOnce(me.firstElementChild)}catch{}this._initCardInteract(me)}else this._showEmptyPlaceholder(),(K=this._applyAutoScale)==null||K.call(this);this._resizeContainer(),await this._saveLayout(!1)}catch(ae){this._dbgPush("import","Parse failed",{error:String(ae)})}let w=new Event("ddc-logrefresh");window.dispatchEvent(w)},y.click()}),t.querySelector("#testRoundtrip").addEventListener("click",async()=>{if(!this._backendOK)return this._dbgPush("test","Backend not reachable, aborting"),d();let y=(this.storageKey||"ddc_test")+"_selftest",_={t:Date.now(),msg:"roundtrip"};try{await this._saveLayoutToBackend(y,_);let g=await this._loadLayoutFromBackend(y);this._dbgPush("test","Round-trip result",{wrote:_,read:g})}catch(g){this._dbgPush("test","Round-trip failed",{error:String(g)})}d()}),d()}_openDashboardSettings(){var Oe,Te,lt,dt,Ct,gt,_t,Ne,Rt,yt,st,ht;let t=document.createElement("div");t.className="modal",this._ensureSettingsStyles_(),t.innerHTML=`
  <div class="dialog modern" role="dialog" aria-modal="true">
    <div class="dlg-head">
      <h3>Dashboard Settings</h3>
      <button class="icon-btn" id="ddc-settings-close" title="Close"><ha-icon icon="mdi:close"></ha-icon></button>
    </div>

    <div class="settings-body">

      <!-- Layout -->
      <section class="card">
        <div class="section-head">
          <ha-icon icon="mdi:view-grid-plus-outline"></ha-icon>
          <h4>Layout</h4>
        </div>
        <p class="caption">Control grid density, canvas sizing, and card behavior.</p>

        <!-- GRID SIZE -->
        <div class="setting">
          <div class="row">
            <div class="title">
              <ha-icon icon="mdi:grid"></ha-icon>
              <label for="ddc-setting-gridSize">Grid size</label>
            </div>
            <div class="control">
              <div class="range-wrap">
                <input type="range" id="ddc-setting-gridSize" min="1" max="400" step="1" />
                <output id="ddc-grid-out">100 px</output>
              </div>
            </div>
          </div>
          <div class="hint">Cards snap every <b>N</b> pixels. Lower values give a denser grid for finer placement.</div>
        </div>

      <div class="preview" style="margin-top:6px">
        <div class="grid-demo" id="ddc-grid-demo">
          <div class="grid-meta-badge" id="ddc-grid-meta"></div>
        </div>
      </div>


        <!-- QUICK CANVAS SIZES -->
        <div class="setting">
          <div class="row">
            <div class="title">
              <ha-icon icon="mdi:move-resize"></ha-icon>
              <span>Quick canvas sizes</span>
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
        <div class="setting">
          <div class="row">
            <div class="title">
              <ha-icon icon="mdi:resize"></ha-icon>
              <label for="ddc-setting-autoResize">Auto resize cards</label>
            </div>
            <div class="control">
              <ha-switch id="ddc-setting-autoResize"></ha-switch>
            </div>
          </div>
          <div class="hint">Scale the layout with the viewport. Off = fixed canvas size.</div>
        </div>

        <!-- LIVE SNAP -->
        <div class="setting">
          <div class="row">
            <div class="title">
              <ha-icon icon="mdi:drag-variant"></ha-icon>
              <label for="ddc-setting-dragSnap">Live snap while dragging</label>
            </div>
            <div class="control">
              <ha-switch id="ddc-setting-dragSnap"></ha-switch>
            </div>
          </div>
          <div class="hint">While dragging, cards snap to the nearest grid lines in real time.</div>
        </div>

        <!-- OVERLAP -->
        <div class="setting">
          <div class="row">
            <div class="title">
              <ha-icon icon="mdi:animation"></ha-icon>
              <label for="ddc-setting-disableOverlap">Prevent overlap</label>
            </div>
            <div class="control">
              <ha-switch id="ddc-setting-disableOverlap"></ha-switch>
            </div>
          </div>
          <div class="hint">Blocks placements that would overlap another card.</div>
        </div>

        <div class="divider"></div>

        <!-- SIZE MODE -->
        <div class="setting">
          <div class="row">
            <div class="title">
              <ha-icon icon="mdi:move-resize"></ha-icon>
              <label for="ddc-setting-sizeMode">Container size mode</label>
            </div>
            <div class="control">
              <select id="ddc-setting-sizeMode">
                <option value="dynamic">Dynamic</option>
                <option value="preset">Preset</option>
                <option value="fixed_custom">Fixed (custom)</option>
              </select>
            </div>
          </div>
          <div class="hint">Dynamic fits the available space. Preset uses common screen sizes. Fixed lets you specify width & height.</div>
        </div>

        <!-- SIZE EXTRAS (injected) -->
        <div id="ddc-setting-sizeExtras"></div>

        <!-- ORIENTATION -->
        <div class="setting">
          <div class="row">
            <div class="title">
              <ha-icon icon="mdi:phone-rotate-landscape"></ha-icon>
              <label for="ddc-setting-orient">Orientation</label>
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

        <div class="divider"></div>

        <!-- AUTOSAVE -->
        <div class="setting">
          <div class="row">
            <div class="title">
              <ha-icon icon="mdi:content-save"></ha-icon>
              <label for="ddc-setting-autoSave">Auto save</label>
            </div>
            <div class="control">
              <ha-switch id="ddc-setting-autoSave"></ha-switch>
            </div>
          </div>
          <div class="hint">Automatically persist layout changes after you drag or edit.</div>
        </div>

        <!-- AUTOSAVE DELAY -->
        <div class="setting">
          <div class="row">
            <div class="title">
              <ha-icon icon="mdi:timer-outline"></ha-icon>
              <label for="ddc-setting-autoSaveDebounce">Auto save delay (ms)</label>
            </div>
            <div class="control">
              <input type="number" id="ddc-setting-autoSaveDebounce" min="100" max="10000" step="50" />
            </div>
          </div>
          <div class="hint">Wait time after the last change before saving. Lower = more frequent saves.</div>
        </div>
      </section>

        <!-- EDIT MODE PIN/PASSWORD -->
        <div class="setting">
          <div class="row">
            <div class="title">
              <ha-icon icon="mdi:lock-outline"></ha-icon>
              <label for="ddc-setting-editPin">Edit mode PIN / password</label>
            </div>
            <div class="control">
              <input type="password" id="ddc-setting-editPin" placeholder="Leave blank to disable" />
            </div>
          </div>
          <div class="hint">If set, this code is required to enter Edit Mode.</div>
        </div>


      <!-- Appearance -->
      <section class="card">
        <div class="section-head">
          <ha-icon icon="mdi:palette-swatch"></ha-icon>
          <h4>Appearance</h4>
        </div>
        <p class="caption">Choose backgrounds and colors. Use theme vars like <code>var(--ha-card-background)</code>.</p>

        <!-- CONTAINER BG -->
        <div class="setting">
          <div class="row">
            <div class="title">
              <ha-icon icon="mdi:palette-swatch"></ha-icon>
              <label for="ddc-setting-containerBg">Container background</label>
            </div>
            <div class="control" style="flex:1">
              <div class="color-pair" style="margin-bottom:8px">
                <input type="color" id="ddc-color-containerBg" />
                <input type="text" id="ddc-setting-containerBg" placeholder="transparent \xB7 #123456 \xB7 var(--ha-card-background)" />
              </div>
            </div>
          </div>
          <div class="swatches" id="ddc-swatches-containerBg"></div>
          <div class="gradients" id="ddc-gradients-containerBg" style="margin-top:6px"></div>
          <div class="hint">Accepts plain colors or theme variables.</div>
        </div>

        <!-- CARD BG -->
        <div class="setting">
          <div class="row">
            <div class="title">
              <ha-icon icon="mdi:palette-swatch"></ha-icon>
              <label for="ddc-setting-cardBg">Card background</label>
            </div>
            <div class="control" style="flex:1">
              <div class="color-pair" style="margin-bottom:8px">
                <input type="color" id="ddc-color-cardBg" />
                <input type="text" id="ddc-setting-cardBg" placeholder="#121212 \xB7 var(--ha-card-background)" />
              </div>
            </div>
          </div>
          <div class="swatches" id="ddc-swatches-cardBg"></div>
          <div class="gradients" id="ddc-gradients-cardBg" style="margin-top:6px"></div>
          <div class="hint">Affects the background of each draggable card container.</div>
        </div>

        <div class="divider"></div>

      <!-- BACKGROUND IMAGE -->
      <div class="setting">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:image-outline"></ha-icon>
            <label for="ddc-setting-bgImg">Background image</label>
          </div>
          <div class="control" style="flex:1; flex-direction:column; align-items:flex-start">
            <div class="input-file">
              <label class="file-btn" for="ddc-file-bg">Upload image</label>
              <input id="ddc-file-bg" type="file" accept="image/*" />
              <div class="thumb" id="ddc-bg-thumb"></div>
              <button type="button" class="btn secondary" id="ddc-clear-bg">Delete</button>
            </div>

            <div class="row" style="margin-top:8px; width:100%">
              <label style="flex:0 0 auto" for="ddc-setting-bgImg">or URL</label>
              <input type="text" id="ddc-setting-bgImg" placeholder="https://\u2026 or /local/\u2026" style="flex:1"/>
            </div>

            <!-- NEW: options -->
            <div class="bg-opts" style="width:100%">
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
              <div style="display:flex; align-items:center; gap:10px">
                <input type="range" id="ddc-bg-opacity" min="0" max="100" step="1" style="width:220px" />
                <output id="ddc-bg-opacity-out">100%</output>
              </div>
            </div>
          </div>
        </div>
        <div class="hint">Uploads are saved inline as data-URLs. For large files, host under <code>/local/</code> and paste the URL.</div>
      </div>
      </section>

      <!-- Behaviour -->
      <section class="card">
        <div class="section-head">
          <ha-icon icon="mdi:tune"></ha-icon>
          <h4>Behaviour</h4>
        </div>
        <p class="caption">Animation, logging, and Home Assistant chrome visibility.</p>

        <!-- ANIMATE -->
        <div class="setting">
          <div class="row">
            <div class="title">
              <ha-icon icon="mdi:play-box"></ha-icon>
              <label for="ddc-setting-animate">Animate cards</label>
            </div>
            <div class="control">
              <ha-switch id="ddc-setting-animate"></ha-switch>
            </div>
          </div>
          <div class="hint">Smooth transitions when moving and resizing cards.</div>
        </div>

        <!-- DEBUG -->
        <div class="setting">
          <div class="row">
            <div class="title">
              <ha-icon icon="mdi:bug-play-outline"></ha-icon>
              <label for="ddc-setting-debug">Enable debug logging</label>
            </div>
            <div class="control">
              <ha-switch id="ddc-setting-debug"></ha-switch>
            </div>
          </div>
          <div class="hint">Extra console logs for troubleshooting layout issues.</div>
        </div>

        <!-- HIDE HEADER -->
        <div class="setting">
          <div class="row">
            <div class="title">
              <ha-icon icon="mdi:page-layout-header"></ha-icon>
              <label for="ddc-setting-hideHdr">Hide HA Header</label>
              <ha-icon class="suffix" icon="mdi:thumbs-up-down" title="Preference"></ha-icon>
            </div>
            <div class="control">
              <ha-switch id="ddc-setting-hideHdr"></ha-switch>
            </div>
          </div>
          <div class="hint">Removes the top app bar (Search / Assist / Edit). It auto-shows in Edit mode.</div>
        </div>

        <!-- HIDE SIDEBAR -->
        <div class="setting">
          <div class="row">
            <div class="title">
              <ha-icon icon="mdi:page-layout-sidebar-left"></ha-icon>
              <label for="ddc-setting-hideSbar">Hide HA Sidebar</label>
              <ha-icon class="suffix" icon="mdi:thumbs-up-down" title="Preference"></ha-icon>
            </div>
            <div class="control">
              <ha-switch id="ddc-setting-hideSbar"></ha-switch>
            </div>
          </div>
          <div class="hint">Hides the left navigation drawer to maximize canvas space.</div>
        </div>
      </section>


      <!-- Tabs -->
    <section class="card tabs-card">
      <div class="section-head">
        <ha-icon icon="mdi:tab"></ha-icon>
        <h4>Tabs</h4>
      </div>
      <p class="caption">Create, rename, delete, and choose the default tab. Cards use <code>tabId</code> to decide where they appear.</p>

      <!-- Current tabs list -->
      <div id="ddc-tabs-list"></div>

      <!-- Add new tab -->
      <div class="setting" style="margin-top:8px">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:tab-plus"></ha-icon>
            <label for="ddc-new-tab-name">Add tab</label>
          </div>
          <div class="control" style="flex:1">
            <input type="text" id="ddc-new-tab-name" placeholder="e.g. Lights" />
            <button class="btn primary" id="ddc-add-tab-btn">Add</button>
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
`;let a=this.shadowRoot.querySelector(".modal");if(a){try{a.remove()}catch{}this.__settingsModal===a&&(this.__settingsModal=null)}if(this.__settingsModal){try{this.__settingsModal.remove()}catch{}this.__settingsModal=null}this.__settingsModal=t,this.shadowRoot.appendChild(t);let o=t.querySelector("#ddc-setting-autoResize"),l=t.querySelector("#ddc-setting-gridSize"),c=t.querySelector("#ddc-setting-animate"),d=t.querySelector("#ddc-setting-hideHdr"),f=t.querySelector("#ddc-setting-hideSbar"),v=t.querySelector("#ddc-setting-dragSnap"),y=t.querySelector("#ddc-setting-autoSave"),_=t.querySelector("#ddc-setting-autoSaveDebounce"),g=t.querySelector("#ddc-setting-sizeMode"),w=t.querySelector("#ddc-setting-orient"),L=t.querySelector("#ddc-setting-disableOverlap"),E=t.querySelector("#ddc-setting-editPin"),P=t.querySelector("#ddc-setting-containerBg"),D=t.querySelector("#ddc-setting-cardBg"),C=t.querySelector("#ddc-setting-bgImg"),A=t.querySelector("#ddc-bg-repeat"),O=t.querySelector("#ddc-bg-size"),b=t.querySelector("#ddc-bg-position"),M=t.querySelector("#ddc-bg-attachment"),R=t.querySelector("#ddc-bg-opacity"),ee=t.querySelector("#ddc-bg-opacity-out"),q=t.querySelector("#ddc-setting-debug"),K=((Oe=this._config)==null?void 0:Oe.background_image)||{};if(o&&(o.checked=!!this.autoResizeCards),l&&(l.value=String(this.gridSize||100)),c&&(c.checked=!!this.animateCards),d&&(d.checked=!!this.hideHaHeader),f&&(f.checked=!!this.hideHaSidebar),v&&(v.checked=!!this.dragLiveSnap),y&&(y.checked=!!this.autoSave),_&&(_.value=String((Te=this.autoSaveDebounce)!=null?Te:800)),g&&(g.value=String(this.containerSizeMode||"dynamic")),w&&(w.value=String(this.containerPresetOrient||"auto")),L&&(L.checked=!!this.disableOverlap),P&&(P.value=String(this.containerBackground||"")),D&&(D.value=String(this.cardBackground||"")),C){let J=((Ct=(lt=this._config)==null?void 0:lt.background_image)!=null?Ct:(dt=this._config)==null?void 0:dt.bg_image)||{};C.value=J.src?String(J.src):""}if(q&&(q.checked=!!this.debug),A&&(A.value=String(K.repeat||"no-repeat")),O&&(O.value=String(K.size||"cover")),b&&(b.value=String(K.position||"center center")),M&&(M.value=String(K.attachment||"scroll")),R){let J=Math.round((K.opacity!=null?K.opacity:1)*100);R.value=String(J),ee&&(ee.textContent=`${J}%`),R.addEventListener("input",()=>{let fe=Math.max(0,Math.min(100,parseInt(R.value||"100",10)));ee.textContent=`${fe}%`,this.style.setProperty("--ddc-bg-opacity",String(fe/100))})}try{if(E){let J=this.config&&this.config.edit_mode_pin!=null?String(this.config.edit_mode_pin):"",fe=this.editModePin!=null?String(this.editModePin):"";E.value=fe||J||"",E.disabled=!1,E.readOnly=!1}}catch{}let ae=t.querySelector("#ddc-setting-gridSize"),ie=t.querySelector("#ddc-grid-out"),$=t.querySelector("#ddc-grid-demo"),me=t.querySelector("#ddc-grid-meta"),_e=()=>{if(!$||!me)return;let J=$.getBoundingClientRect(),fe=Math.max(1,parseInt(ae.value||"100",10)),ce=Math.max(1,Math.floor(J.width/fe)),Y=Math.max(1,Math.floor(J.height/fe));me.innerHTML=`
        <ha-icon icon="mdi:grid"></ha-icon>
        <span>${fe}px \xB7 ${ce}\xD7${Y}</span>
      `},Je=()=>{let J=Math.max(1,parseInt(ae.value||"100",10));ie&&(ie.textContent=`${J} px`),$&&$.style.setProperty("--g",`${J}px`),_e()};if(ae&&(ae.value||(ae.value=String(this.gridSize||100)),ae.addEventListener("input",Je),Je()),$){let J=new ResizeObserver(()=>_e());J.observe($),(_t=(gt=this.__ddcGridRO)==null?void 0:gt.disconnect)==null||_t.call(gt),this.__ddcGridRO=J}t.querySelectorAll(".chip").forEach(J=>{J.addEventListener("click",()=>{var pe,le;t.querySelectorAll(".chip").forEach(I=>I.setAttribute("aria-pressed","false")),J.setAttribute("aria-pressed","true");let fe=parseInt(J.dataset.w,10),ce=parseInt(J.dataset.h,10),Y=t.querySelector("#ddc-setting-sizeMode");Y.value="fixed_custom",(le=(pe=typeof g!="undefined"&&g)==null?void 0:pe.dispatchEvent)==null||le.call(pe,new Event("change")),setTimeout(()=>{var te,ne,X;(te=t.querySelector("#ddc-setting-custW"))==null||te.setAttribute("value",String(fe)),(X=(ne=t.querySelector("#ddc-setting-custW"))==null?void 0:ne.dispatchEvent)==null||X.call(ne,new Event("change"));let I=t.querySelector("#ddc-setting-custW");I&&(I.value=String(fe));let N=t.querySelector("#ddc-setting-custH");N&&(N.value=String(ce))},0)})});let We=["#ffffff","#f5f7fa","#ebeff5","#121212","#1f2937","#334155","var(--card-background-color)","var(--ha-card-background)","transparent"],je=(J,fe,ce)=>{let Y=t.querySelector(J),pe=t.querySelector(fe),le=t.querySelector(ce);!Y||!pe||(Y.innerHTML="",We.forEach((I,N)=>{let te=document.createElement("button");te.type="button",te.className="swatch",te.title=I,te.style.background=I.startsWith("var(")?getComputedStyle(this).getPropertyValue(I.slice(4,-1)).trim()||"#fff":I,te.setAttribute("aria-pressed","false"),te.addEventListener("click",()=>{Y.querySelectorAll(".swatch").forEach(ne=>ne.setAttribute("aria-pressed","false")),te.setAttribute("aria-pressed","true"),pe.value=I,/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(I)&&le&&(le.value=I)}),Y.appendChild(te),String(pe.value).trim()===I&&te.setAttribute("aria-pressed","true")}))};je("#ddc-swatches-containerBg","#ddc-setting-containerBg","#ddc-color-containerBg"),je("#ddc-swatches-cardBg","#ddc-setting-cardBg","#ddc-color-cardBg"),[["#ddc-color-containerBg","#ddc-setting-containerBg"],["#ddc-color-cardBg","#ddc-setting-cardBg"]].forEach(([J,fe])=>{let ce=t.querySelector(J),Y=t.querySelector(fe);if(!ce||!Y)return;let pe=(String(Y.value||"").match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)||[])[0];pe&&(ce.value=pe),ce.addEventListener("input",()=>{Y.value=ce.value}),Y.addEventListener("change",()=>{let le=(String(Y.value||"").match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)||[])[0];le&&(ce.value=le)})});let Ke=t.querySelector("#ddc-file-bg"),ke=t.querySelector("#ddc-setting-bgImg"),rt=t.querySelector("#ddc-bg-thumb"),Qe=J=>{rt&&(rt.style.backgroundImage=J?`url(${J})`:"none")};ke!=null&&ke.value&&Qe(ke.value),Ke==null||Ke.addEventListener("change",async()=>{var ce;let J=(ce=Ke.files)==null?void 0:ce[0];if(!J)return;let fe=new FileReader;fe.onload=()=>{ke.value=String(fe.result||""),Qe(ke.value),this.style.setProperty("--ddc-bg-image",`url("${ke.value}")`)},fe.readAsDataURL(J)}),(Ne=t.querySelector("#ddc-clear-bg"))==null||Ne.addEventListener("click",()=>{var ce,Y;ke&&(ke.value=""),Qe("");let{background_image:J,...fe}=this._config||{};this._config=fe,this.style.setProperty("--ddc-bg-image","none"),(ce=this._applyBackgroundImageFromConfig_)==null||ce.call(this),(Y=this._persistThisCardConfigToStorage_)==null||Y.call(this)}),t.addEventListener("click",J=>{J.target===t&&(J.stopPropagation(),Le())});let Ze=J=>{J.key==="Escape"&&(J.stopPropagation(),Le())};document.addEventListener("keydown",Ze,{once:!0}),setTimeout(()=>{var J;return(J=t.querySelector("#ddc-setting-gridSize"))==null?void 0:J.focus()},0);try{let J=t.querySelector("#ddc-setting-sizeExtras"),fe=()=>{var Y,pe;if(!J)return;J.innerHTML="";let ce=(g==null?void 0:g.value)||"dynamic";if(ce==="fixed_custom"){let le=document.createElement("label");le.style.display="flex",le.style.flexDirection="column",le.style.fontSize=".95rem",le.style.marginBottom="10px";let I=document.createElement("span");I.textContent="Custom width (px)",I.style.marginBottom="4px";let N=document.createElement("input");N.type="number",N.id="ddc-setting-custW",N.min="100",N.max="10000",N.step="10",N.style.padding="6px",N.style.border="1px solid var(--divider-color,rgba(0,0,0,.3))",N.style.borderRadius="6px",N.value=String((Y=this.containerFixedWidth)!=null?Y:800),le.appendChild(I),le.appendChild(N);let te=document.createElement("label");te.style.display="flex",te.style.flexDirection="column",te.style.fontSize=".95rem",te.style.marginBottom="10px";let ne=document.createElement("span");ne.textContent="Custom height (px)",ne.style.marginBottom="4px";let X=document.createElement("input");X.type="number",X.id="ddc-setting-custH",X.min="100",X.max="10000",X.step="10",X.style.padding="6px",X.style.border="1px solid var(--divider-color,rgba(0,0,0,.3))",X.style.borderRadius="6px",X.value=String((pe=this.containerFixedHeight)!=null?pe:600),te.appendChild(ne),te.appendChild(X),J.appendChild(le),J.appendChild(te)}else if(ce==="preset"){let le=document.createElement("label");le.style.display="flex",le.style.flexDirection="column",le.style.fontSize=".95rem",le.style.marginBottom="10px";let I=document.createElement("span");I.textContent="Preset size",I.style.marginBottom="4px";let N=document.createElement("select");N.id="ddc-setting-preset",N.style.padding="6px",N.style.border="1px solid var(--divider-color,rgba(0,0,0,.3))",N.style.borderRadius="6px",(typeof e!="undefined"&&e._sizePresets?e._sizePresets():[]).forEach(ne=>{let X=document.createElement("option");X.value=ne.key,X.textContent=`${ne.label||ne.key} (${ne.w}\xD7${ne.h})`,N.appendChild(X)}),N.value=String(this.containerPreset||"fhd"),le.appendChild(I),le.appendChild(N),J.appendChild(le)}};fe(),g==null||g.addEventListener("change",fe)}catch(J){console.warn("[drag-and-drop-card] Failed to build container size extras",J)}let at=()=>{var fe,ce,Y,pe,le;return((le=(pe=(ce=(fe=this._config)==null?void 0:fe.options)==null?void 0:ce.tabs)!=null?pe:(Y=this._config)==null?void 0:Y.tabs)!=null?le:[]).map(I=>{var N,te,ne,X,ye,F,Q;return typeof I=="string"?{id:I,label:I,icon:"",label_mode:"both",__raw:{id:I,label:I}}:{id:(ne=(te=(N=I.id)!=null?N:I.key)!=null?te:I.label)!=null?ne:"tab",label:(ye=(X=I.label)!=null?X:I.id)!=null?ye:"Tab",icon:(F=I.icon)!=null?F:"",label_mode:(Q=I.label_mode)!=null?Q:"both",__raw:I}})},it=async(J,fe)=>{var Y,pe,le;let ce=J.map(I=>({...I.__raw,id:I.id,label:I.label,icon:I.icon||"",label_mode:I.label_mode||"both"}));(Y=this._config)!=null&&Y.options?this._config.options={...this._config.options||{},tabs:ce,default_tab:fe!=null?fe:(pe=this._config.options)==null?void 0:pe.default_tab}:(this._config.tabs=ce,fe&&(this._config.default_tab=fe));try{await this._persistThisCardConfigToStorage_()}catch(I){console.warn("[drag-and-drop-card] Could not persist tabs",I)}(le=this.requestUpdate)==null||le.call(this)},ot=()=>{var J,fe,ce,Y;return((fe=(J=this._config)==null?void 0:J.options)==null?void 0:fe.default_tab)||((ce=this._config)==null?void 0:ce.default_tab)||((Y=at()[0])==null?void 0:Y.id)},se=t.querySelector("#ddc-tabs-list"),ut=()=>{let J=at(),fe=ot();if(se.innerHTML="",!J.length){let ce=document.createElement("div");ce.className="hint",ce.textContent="No tabs yet. Add one below.",se.appendChild(ce);return}J.forEach((ce,Y)=>{let pe=document.createElement("div");pe.className="tab-row";let le=document.createElement("input");le.type="radio",le.name="ddc-default-tab",le.value=ce.id,le.checked=ce.id===fe,le.title="Set as default tab",le.addEventListener("change",async()=>{await it(J,ce.id)});let I=document.createElement("div");I.className="tab-name";let N=document.createElement("ha-icon");N.setAttribute("icon",ce.icon||"mdi:tab");let te=document.createElement("input");te.value=ce.icon||"",te.placeholder="mdi:home",te.title="Tab icon (mdi:...)",te.style.width="160px",te.addEventListener("change",async()=>{ce.icon=te.value.trim(),N.setAttribute("icon",ce.icon||"mdi:tab"),J[Y]=ce,await it(J,fe)});let ne=document.createElement("input");ne.value=ce.label,ne.placeholder="Tab name",ne.style.flex="1",ne.addEventListener("change",async()=>{ce.label=ne.value.trim()||ce.id,J[Y]=ce,await it(J,fe)});let X=document.createElement("div");X.className="tab-icon-wrap",X.appendChild(N),X.appendChild(te),I.appendChild(X),I.appendChild(ne);let ye=document.createElement("div");ye.className="mode-chips";let F=(H,Fe)=>{let Pe=document.createElement("button");return Pe.type="button",Pe.className="chip",Pe.textContent=Fe,Pe.setAttribute("aria-pressed",String((ce.label_mode||"both")===H)),Pe.addEventListener("click",async()=>{ye.querySelectorAll(".chip").forEach($e=>$e.setAttribute("aria-pressed","false")),Pe.setAttribute("aria-pressed","true"),ce.label_mode=H,J[Y]=ce,await it(J,fe)}),Pe};ye.appendChild(F("icon","Icon")),ye.appendChild(F("text","Text")),ye.appendChild(F("both","Both"));let Q=document.createElement("div");Q.className="tab-actions";let Ce=document.createElement("button");Ce.className="icon-btn danger",Ce.innerHTML='<ha-icon icon="mdi:trash-can-outline"></ha-icon>',Ce.title="Delete tab",Ce.addEventListener("click",async()=>{var Pe,$e;let H=at().filter(Me=>Me.id!==ce.id),Fe=fe;ce.id===fe&&(Fe=(Pe=H[0])==null?void 0:Pe.id),await it(H,Fe);try{($e=this._reassignCardsToTab_)==null||$e.call(this,ce.id,Fe)}catch{}ut()}),Q.appendChild(ye),Q.appendChild(Ce),pe.appendChild(le),pe.appendChild(I),pe.appendChild(Q),se.appendChild(pe)})};ut(),(Rt=t.querySelector("#ddc-add-tab-btn"))==null||Rt.addEventListener("click",async()=>{let J=t.querySelector("#ddc-new-tab-name"),fe=((J==null?void 0:J.value)||"").trim();if(!fe)return;let ce=at(),Y=fe.replace(/\s+/g,"-").toLowerCase(),pe=2;for(;ce.some(le=>le.id===Y);)Y=`${Y}-${pe++}`;ce.push({id:Y,label:fe,icon:"",label_mode:"both",__raw:{id:Y,label:fe}}),await it(ce,ot()),J.value="",ut()});let nt=t.querySelector("#ddc-clear-bg");nt&&nt.addEventListener("click",()=>{var ce,Y,pe;let J=t.querySelector("#ddc-setting-bgImg"),fe=t.querySelector("#ddc-bg-thumb");J&&(J.value=""),fe&&(fe.style.backgroundImage="none");try{if((ce=this._config)!=null&&ce.background_image){let{background_image:le,...I}=this._config;this._config=I}(Y=this._applyBackgroundImageFromConfig)==null||Y.call(this),(pe=this._persistThisCardConfigToStorage_)==null||pe.call(this)}catch(le){console.warn("[drag-and-drop-card] Failed to clear background image",le)}});let Re=["linear-gradient(135deg, #1e3a8a, #0ea5e9)","linear-gradient(135deg, #111827, #1f2937)","linear-gradient(135deg, #0f766e, #22c55e)","linear-gradient(135deg, #7c3aed, #06b6d4)","linear-gradient(135deg, #f97316, #f43f5e)","linear-gradient(135deg, #eab308, #22d3ee)","radial-gradient(circle at 30% 20%, #2dd4bf, #1e293b)","radial-gradient(circle at 70% 80%, #f59e0b, #7c3aed)"],oe=(J,fe)=>{let ce=t.querySelector(J),Y=t.querySelector(fe);!ce||!Y||(ce.innerHTML="",Re.forEach(pe=>{let le=document.createElement("button");le.type="button",le.className="gradient",le.style.background=pe,le.setAttribute("aria-pressed","false"),le.title=pe,le.addEventListener("click",()=>{ce.querySelectorAll(".gradient").forEach(I=>I.setAttribute("aria-pressed","false")),le.setAttribute("aria-pressed","true"),Y.value=pe;try{this.containerBackground=pe,this.style.setProperty("--ddc-bg",pe)}catch{}}),ce.appendChild(le),String(Y.value).trim()===pe&&le.setAttribute("aria-pressed","true")}))};oe("#ddc-gradients-containerBg","#ddc-setting-containerBg"),oe("#ddc-gradients-cardBg","#ddc-setting-cardBg");let Le=()=>{var J,fe;try{(fe=(J=this.__ddcGridRO)==null?void 0:J.disconnect)==null||fe.call(J),this.__ddcGridRO=null}catch{}try{t.remove()}catch{}this.__settingsModal===t&&(this.__settingsModal=null)};(yt=t.querySelector("#ddc-settings-close"))==null||yt.addEventListener("click",J=>{J.stopPropagation(),Le()}),(st=t.querySelector("#ddc-settings-cancel"))==null||st.addEventListener("click",J=>{J.stopPropagation(),Le()}),(ht=t.querySelector("#ddc-settings-save"))==null||ht.addEventListener("click",J=>{var Pe,$e,Me,Xe,Ue,Ve,qe,He,Ae,ge,Se,Ie,we;J.stopPropagation();let fe=!!(o!=null&&o.checked),ce=parseInt((l==null?void 0:l.value)||"0",10),Y=!!(c!=null&&c.checked),pe=!!(d!=null&&d.checked),le=!!(f!=null&&f.checked),I=!!(v!=null&&v.checked),N=!!(y!=null&&y.checked),te=parseInt((_==null?void 0:_.value)||"0",10),ne=(g==null?void 0:g.value)||"dynamic",X=(w==null?void 0:w.value)||"auto",ye=!!(L!=null&&L.checked),F=((P==null?void 0:P.value)||"").trim(),Q=((D==null?void 0:D.value)||"").trim(),Ce=((C==null?void 0:C.value)||"").trim(),H=!!(q!=null&&q.checked),Fe=((E==null?void 0:E.value)||"").trim();try{this.autoResizeCards=fe,this.autoResizeCards?(Pe=this._startScaleWatch)==null||Pe.call(this):($e=this._stopScaleWatch)==null||$e.call(this),!isNaN(ce)&&ce>0&&ce!==this.gridSize&&(this.gridSize=ce,(Me=this._applyGridVars)==null||Me.call(this),(Xe=this._resizeContainer)==null||Xe.call(this)),this.editModePin=Fe,this._config={...this._config||{},edit_mode_pin:Fe};let de=I!==this.dragLiveSnap;this.dragLiveSnap=I,de&&((Ue=this._initInteract)==null||Ue.call(this)),this.autoSave=N,!isNaN(te)&&te>0&&(this.autoSaveDebounce=te);let re=ne!==this.containerSizeMode;this.containerSizeMode=ne;let G=X!==this.containerPresetOrient;if(this.containerPresetOrient=X,(re||G)&&((Ve=this._resizeContainer)==null||Ve.call(this)),ne==="fixed_custom"){let Ge=parseInt(((qe=t.querySelector("#ddc-setting-custW"))==null?void 0:qe.value)||"0",10),wt=parseInt(((He=t.querySelector("#ddc-setting-custH"))==null?void 0:He.value)||"0",10);!isNaN(Ge)&&Ge>0&&(this.containerFixedWidth=Ge),!isNaN(wt)&&wt>0&&(this.containerFixedHeight=wt),(Ae=this._resizeContainer)==null||Ae.call(this)}else if(ne==="preset"){let Ge=(ge=t.querySelector("#ddc-setting-preset"))==null?void 0:ge.value;Ge&&(this.containerPreset=Ge),(Se=this._resizeContainer)==null||Se.call(this)}if(this.disableOverlap=ye,F&&(this.containerBackground=F,this.style.setProperty("--ddc-bg",this.containerBackground)),Q&&(this.cardBackground=Q,this.style.setProperty("--ddc-card-bg",this.cardBackground)),Ce){let Ge=this._config&&this._config.background_image||{};this._config={...this._config,background_image:{...Ge,src:Ce}}}else{let{background_image:Ge,...wt}=this._config||{};this._config=wt}this.debug=H,this.animateCards=Y,this.hideHaHeader=pe,this.hideHaSidebar=le,(Ie=this._applyHaChromeVisibility_)==null||Ie.call(this);let V=this._config&&this._config.background_image||{},j=(A==null?void 0:A.value)||"no-repeat",ve=(O==null?void 0:O.value)||"cover",Ye=(b==null?void 0:b.value)||"center center",tt=(M==null?void 0:M.value)||"scroll",Et=R?Math.max(0,Math.min(100,parseInt(R.value||"100",10)))/100:1;if(Ce)this._config={...this._config,background_image:{...V,src:Ce,repeat:j,size:ve,position:Ye,attachment:tt,opacity:Et}};else if(V.src)this._config={...this._config,background_image:{...V,repeat:j,size:ve,position:Ye,attachment:tt,opacity:Et}};else{let{background_image:Ge,...wt}=this._config||{};this._config=wt}(we=this._applyBackgroundImageFromConfig_)==null||we.call(this);try{this._config||(this._config={}),this._config.grid=this.gridSize,this._config.auto_resize_cards=!!this.autoResizeCards,this._config.drag_live_snap=!!this.dragLiveSnap,this._config.auto_save=!!this.autoSave,this._config.auto_save_debounce=this.autoSaveDebounce,this._config.container_size_mode=this.containerSizeMode,this._config.container_preset_orientation=this.containerPresetOrient,this._config.container_fixed_width=this.containerFixedWidth,this._config.container_fixed_height=this.containerFixedHeight,this._config.container_preset=this.containerPreset,this._config.disable_overlap=!!this.disableOverlap,this._config.container_background=this.containerBackground,this._config.card_background=this.cardBackground,this._config.debug=!!this.debug,this._config.animate_cards=!!this.animateCards,this._config.hide_HA_Header=!!this.hideHaHeader,this._config.hide_HA_Sidebar=!!this.hideHaSidebar}catch(Ge){console.warn("[drag-and-drop-card] Failed to update config",Ge)}this._persistThisCardConfigToStorage_().catch(Ge=>{console.warn("[drag-and-drop-card] Storage save failed (is this a YAML dashboard?)",Ge)})}catch(de){console.warn("[drag-and-drop-card] Failed to apply settings",de)}Le()})}_exportableOptions(){var a,o;let t={storage_key:this.storageKey||void 0,grid:this.gridSize,container_background:this.containerBackground,card_background:this.cardBackground,disable_overlap:!!this.disableOverlap,drag_live_snap:!!this.dragLiveSnap,auto_save:!!this.autoSave,auto_save_debounce:this.autoSaveDebounce,edit_mode_pin:this.editModePin||void 0,debug:!!this.debug,container_size_mode:this.containerSizeMode,container_preset_orientation:this.containerPresetOrient,container_fixed_width:(a=this.containerFixedWidth)!=null?a:void 0,container_fixed_height:(o=this.containerFixedHeight)!=null?o:void 0,container_preset:this.containerPreset,tabs:this.tabs,tabs_position:this.tabsPosition,default_tab:this.defaultTab,hide_tabs_when_single:!!this.hideTabsWhenSingle,auto_resize_cards:!!this.autoResizeCards};return Object.keys(t).forEach(l=>t[l]===void 0&&delete t[l]),t}_applyImportedOptions(t={},a=!0){var o,l,c,d,f,v,y,_;if(t&&Object.prototype.hasOwnProperty.call(t,"storage_key")&&this._isInHaEditorPreview())try{let g={type:"custom:drag-and-drop-card",...this._config||{}};this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:g},bubbles:!0,composed:!0}))}catch{}this._config={...this._config||{},...t},"storage_key"in t&&(this.storageKey=t.storage_key||void 0),this._syncEditorsStorageKey(),"grid"in t&&(this.gridSize=Number(t.grid)||10),"drag_live_snap"in t&&(this.dragLiveSnap=!!t.drag_live_snap),"auto_save"in t&&(this.autoSave=!!t.auto_save),"auto_save_debounce"in t&&(this.autoSaveDebounce=Number(t.auto_save_debounce)||800),"container_background"in t&&(this.containerBackground=(o=t.container_background)!=null?o:"transparent"),"card_background"in t&&(this.cardBackground=(l=t.card_background)!=null?l:"var(--ha-card-background, var(--card-background-color))"),"debug"in t&&(this.debug=!!t.debug),"disable_overlap"in t&&(this.disableOverlap=!!t.disable_overlap),"container_size_mode"in t&&(this.containerSizeMode=t.container_size_mode||"dynamic"),"container_fixed_width"in t&&(this.containerFixedWidth=Number(t.container_fixed_width)||null),"container_fixed_height"in t&&(this.containerFixedHeight=Number(t.container_fixed_height)||null),"container_preset"in t&&(this.containerPreset=t.container_preset||"fhd"),"container_preset_orientation"in t&&(this.containerPresetOrient=t.container_preset_orientation||"auto"),"auto_resize_cards"in t&&(this.autoResizeCards=!!t.auto_resize_cards,this.autoResizeCards?(c=this._startScaleWatch)==null||c.call(this):(d=this._stopScaleWatch)==null||d.call(this),(f=this._applyAutoScale)==null||f.call(this)),this.style.setProperty("--ddc-bg",this.containerBackground),this.style.setProperty("--ddc-card-bg",this.cardBackground),this._applyGridVars(),a&&(this._applyContainerSizingFromConfig(!0),(v=this._applyAutoScale)==null||v.call(this),this._resizeContainer(),(y=this._updateStoreBadge)==null||y.call(this),(_=this._applyAutoScale)==null||_.call(this))}_exportDesign(){let a=Array.from(this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)")).map(f=>{let v=parseFloat(f.getAttribute("data-x"))||0,y=parseFloat(f.getAttribute("data-y"))||0,_=parseFloat(f.style.width)||f.getBoundingClientRect().width,g=parseFloat(f.style.height)||f.getBoundingClientRect().height,w=parseInt(f.style.zIndex||"1",10),L=this._extractCardConfig(f.firstElementChild),E=f.dataset.tabId||this.defaultTab;return{card:L,position:{x:v,y},size:{width:_,height:g},z:w,tabId:E}}),o={version:2,options:this._exportableOptions(),cards:a};this._config&&this._config.card_mod&&(o.options=o.options||{},o.options.card_mod=this._config.card_mod);let l=`DragAndDrop_Design_${this.storageKey||"layout"}.json`,c=new Blob([JSON.stringify(o,null,2)],{type:"application/json"}),d=document.createElement("a");d.href=URL.createObjectURL(c),d.download=l,d.click(),URL.revokeObjectURL(d.href),this._toast("Design exported.")}_importDesign(){let t=document.createElement("input");t.type="file",t.accept="application/json";let a=!0,o=!1,l=["grid","drag_live_snap","auto_save","auto_save_debounce","container_background","card_background","debug","disable_overlap","container_size_mode","container_fixed_width","container_fixed_height","container_preset","container_preset_orientation","tabs","tabs_position","default_tab","hide_tabs_when_single","card_mod","storage_key"];t.onchange=async()=>{var f,v,y,_,g,w,L,E,P,D,C,A,O,b,M,R,ee,q,K,ae,ie,$,me,_e,Je,We,je,Ke,ke,rt,Qe,Ze,at,it,ot,se,ut,nt,Re,oe,Le,Oe,Te,lt,dt,Ct,gt,_t;let c=(f=t.files)==null?void 0:f[0];if(!c)return;let d=await c.text();try{let Ne=JSON.parse(d),Rt=this.storageKey||((v=this._config)==null?void 0:v.storage_key)||null,yt=!!(Ne.options&&Array.isArray(Ne.options.tabs)),st=Array.isArray(Ne.cards)&&Ne.cards.some(Y=>(Y==null?void 0:Y.tabId)||(Y==null?void 0:Y.tab_id)),ht=[];yt?ht=Ne.options.tabs:st?ht=Array.from(new Set(Ne.cards.map(pe=>(pe==null?void 0:pe.tabId)||(pe==null?void 0:pe.tab_id)).filter(Boolean))).map(pe=>({id:pe,label:pe})):ht=[{id:"default",label:"Layout"}];let J=((y=Ne.options)==null?void 0:y.tabs_position)==="left"?"left":this.tabsPosition||"top",fe=((_=Ne.options)==null?void 0:_.default_tab)||((g=ht[0])==null?void 0:g.id)||"default",ce=((w=Ne.options)==null?void 0:w.hide_tabs_when_single)!==void 0?!!Ne.options.hide_tabs_when_single:!0;if(Ne.options){let Y={...Ne.options};if(o||delete Y.storage_key,a){let pe=this._config||{type:"custom:drag-and-drop-card"};for(let le of l)le==="storage_key"&&!o||!(le in Y)&&le in pe&&delete pe[le];try{this.cardContainer&&(this.cardContainer.style.background="",this.cardContainer.style.width="",this.cardContainer.style.height=""),(E=(L=this.style)==null?void 0:L.removeProperty)==null||E.call(L,"--ddc-container-bg"),(D=(P=this.style)==null?void 0:P.removeProperty)==null||D.call(P,"--ddc-card-bg")}catch{}if(this._config={...pe,...Y},"card_mod"in Y||delete this._config.card_mod,o&&Y.storage_key&&(this.storageKey=Y.storage_key),this._opts){this._opts={...this._opts,...Y};for(let le of l)le in Y||delete this._opts[le]}(C=this._applyOptionsToDom)==null||C.call(this,this._config),(A=this.requestUpdate)==null||A.call(this)}else this._applyImportedOptions(Y,!0),Y.card_mod!==void 0&&(this._config=this._config||{},this._config.card_mod=Y.card_mod,(O=this.requestUpdate)==null||O.call(this))}else if(typeof Ne.grid=="number"){let Y={grid:Ne.grid};a?this._config={...this._config||{},...Y}:this._applyImportedOptions(Y,!0),(b=this.requestUpdate)==null||b.call(this)}(!Array.isArray(this.tabs)||!this.tabs.length)&&(this.tabs=ht),this.tabsPosition||(this.tabsPosition=J),this.defaultTab||(this.defaultTab=fe),this.hideTabsWhenSingle===void 0&&(this.hideTabsWhenSingle=ce),(ee=(R=(M=this.rootEl)==null?void 0:M.classList)==null?void 0:R.toggle)==null||ee.call(R,"ddc-tabs-left-layout",this.tabsPosition==="left");try{let Y=((q=this._config)==null?void 0:q.storage_key)||this.storageKey||null,pe=(K=Ne.options)!=null?K:typeof Ne.grid=="number"?{grid:Ne.grid}:{},le={...pe,tabs:(ie=(ae=pe.tabs)!=null?ae:this.tabs)!=null?ie:[],tabs_position:(me=($=pe.tabs_position)!=null?$:this.tabsPosition)!=null?me:"top",default_tab:(ke=(_e=pe.default_tab)!=null?_e:this.defaultTab)!=null?ke:((We=(Je=pe.tabs)==null?void 0:Je[0])==null?void 0:We.id)||((Ke=(je=this.tabs)==null?void 0:je[0])==null?void 0:Ke.id)||"default",hide_tabs_when_single:(Qe=pe.hide_tabs_when_single)!=null?Qe:(rt=this.hideTabsWhenSingle)!=null?rt:!0};if(o||delete le.storage_key,!Y)console.warn("[ddc:import] No storage_key on this card; aborting YAML persist.");else{let I=await((Ze=this._persistOptionsToYaml)==null?void 0:Ze.call(this,le,{forceTargetKey:String(Y),noDownload:!0,replace:!0,wipeUnknownKeys:!0})),N=!!(I&&I.yamlSaved);(at=console.debug)==null||at.call(console,"[ddc:import] YAML persist result:",N)}try{let I={type:"custom:drag-and-drop-card",...this._config||{}};I.tabs=le.tabs,I.tabs_position=le.tabs_position,I.default_tab=le.default_tab,I.hide_tabs_when_single=!!le.hide_tabs_when_single,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:I},bubbles:!0,composed:!0}))}catch{}}catch(Y){console.warn("[ddc:import] YAML persist failed:",Y)}if(this.cardContainer.innerHTML="",Array.isArray(Ne.cards)&&Ne.cards.length)for(let Y of Ne.cards){let pe=((it=Y.position)==null?void 0:it.x)||0,le=((ot=Y.position)==null?void 0:ot.y)||0,I=((se=Y.size)==null?void 0:se.width)||140,N=((ut=Y.size)==null?void 0:ut.height)||100,te=Y.z,ne=this._normalizeTabId(Y.tabId||Y.tab_id||this.defaultTab);if(!(Y!=null&&Y.card)||typeof Y.card=="object"&&!Object.keys(Y.card).length){let F=this._makePlaceholderAt(pe,le,I,N);F.dataset.tabId=ne,this.cardContainer.appendChild(F);continue}let X=await this._createCard(Y.card),ye=this._makeWrapper(X);ye.dataset.tabId=ne,this._setCardPosition(ye,pe,le),ye.style.width=`${I}px`,ye.style.height=`${N}px`,te!=null&&(ye.style.zIndex=String(te)),this.cardContainer.appendChild(ye);try{this._rebuildOnce(ye.firstElementChild)}catch{}this._initCardInteract(ye)}else this._showEmptyPlaceholder(),(nt=this._applyAutoScale)==null||nt.call(this);(Re=this._applyOptionsToDom)==null||Re.call(this,this._config),this._resizeContainer();try{(Oe=(Le=(oe=this.rootEl)==null?void 0:oe.classList)==null?void 0:Le.toggle)==null||Oe.call(Le,"ddc-tabs-left-layout",this.tabsPosition==="left"),(Te=this._renderTabs)==null||Te.call(this),(lt=this._applyActiveTab)==null||lt.call(this)}catch{}try{this._saveTimer&&clearTimeout(this._saveTimer),await this._saveLayout(!0),(dt=this._toast)==null||dt.call(this,"Design imported & saved. Reloading..."),window.location.reload()}catch(Y){console.warn("[ddc:import] saveLayout failed",Y),(Ct=this._markDirty)==null||Ct.call(this,"import"),(gt=this._toast)==null||gt.call(this,"Design imported \u2014 click Apply to save.")}}catch(Ne){console.error("Import failed",Ne),(_t=this._toast)==null||_t.call(this,"Import failed \u2014 invalid file.")}},t.click()}_getLovelace(){var c,d;let t=0,a=this;for(;a&&t++<20;){let f=(c=a.getRootNode)==null?void 0:c.call(a),v=f==null?void 0:f.host;if((v==null?void 0:v.tagName)==="HUI-ROOT")return v.lovelace;a=v||a.parentElement}let o=new Set,l=[document];for(;l.length;){let f=l.shift();if(!(!f||o.has(f))){if(o.add(f),((d=f.host)==null?void 0:d.tagName)==="HUI-ROOT")return f.host.lovelace;if(f.tagName==="HUI-ROOT")return f.lovelace;if(f.shadowRoot&&l.push(f.shadowRoot),f.children)for(let v of f.children)l.push(v)}}}_scanDdcCards(t){let a=[],o=(c,d,f)=>{(f==null?void 0:f.type)==="custom:drag-and-drop-card"&&a.push({view:c,path:[...d],card:f})},l=(c,d,f)=>{if(c){if(Array.isArray(c)){c.forEach((v,y)=>l(v,d,f.concat(y)));return}if(typeof c=="object"){"type"in c&&o(d,f,c);for(let[v,y]of Object.entries(c))v==="views"&&Array.isArray(y)?y.forEach((_,g)=>l(_,g,["views",g])):(Array.isArray(y)||y&&typeof y=="object")&&l(y,d,f.concat(v))}}};return l(t,-1,[]),a}async _persistOptionsToYaml(t,{prevKey:a=null,patchAllInCurrentViewIfNoKey:o=!1}={}){var l,c,d,f,v,y,_,g,w;try{let L=this._getLovelace();if(!L)return console.debug("[ddc:import] persist: no lovelace root"),!1;if(typeof L.saveConfig!="function")return console.debug("[ddc:import] persist: dashboard not in Storage mode"),!1;let E=JSON.parse(JSON.stringify(L.config)),P=this._scanDdcCards(E),D=(l=L.current_view)!=null?l:0;console.debug("[ddc:import] persist: found DDC cards",P.map(M=>({view:M.view,path:M.path.join("."),storage_key:M.card.storage_key||null})));let C=(c=t==null?void 0:t.storage_key)!=null?c:null,A=[];a&&A.push(a),C&&A.push(C),this.storageKey&&A.push(this.storageKey),(d=this._config)!=null&&d.storage_key&&A.push(this._config.storage_key);let O=P.filter(M=>M.card.storage_key&&A.includes(M.card.storage_key));if(!O.length){let M=P.filter(R=>R.view===D);M.length===1&&(O=M)}if(!O.length&&P.length===1&&(O=P),!O.length)return console.debug("[ddc:import] persist: no target. Provide a unique storage_key on this card and import again.",{prevKey:a,newKey:C,storageKey:this.storageKey}),!1;let b={type:"custom:drag-and-drop-card",...t};"storage_key"in b&&delete b.storage_key,"storageKey"in b&&delete b.storageKey;for(let M of O){let R=E;for(let K of M.path)R=R[K];let ee=(w=(g=(y=(f=R==null?void 0:R.storage_key)!=null?f:R==null?void 0:R.storageKey)!=null?y:(v=R==null?void 0:R.options)==null?void 0:v.storage_key)!=null?g:(_=R==null?void 0:R.options)==null?void 0:_.storageKey)!=null?w:null,q=!!(a&&C&&ee===a&&C!==a);Object.assign(R,b),q?R.storage_key=String(C):ee&&(R.storage_key=String(ee)),"storageKey"in R&&delete R.storageKey}return console.debug("[ddc:import] persist \u2192 saving",{patched:O.length,keysTried:A,patch}),await L.saveConfig(E),!0}catch(L){return console.warn("[ddc:import] persist error",L),!1}}_queueSave(t="auto"){this._markDirty(t),this.autoSave&&(this._loading||this.editMode&&(this._dbgPush("autosave","Queued",{reason:t,debounce:this.autoSaveDebounce}),clearTimeout(this._saveTimer),this._saveTimer=setTimeout(()=>this._saveLayout(!0),this.autoSaveDebounce)))}async _saveLayout(t=!0){let o=Array.from(this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)")).map(c=>{let d=parseFloat(c.getAttribute("data-x"))||0,f=parseFloat(c.getAttribute("data-y"))||0,v=parseFloat(c.style.width)||c.getBoundingClientRect().width,y=parseFloat(c.style.height)||c.getBoundingClientRect().height,_=parseInt(c.style.zIndex||"1",10),g=this._extractCardConfig(c.firstElementChild),w=c.dataset.tabId||this.defaultTab;return{card:g,position:{x:d,y:f},size:{width:v,height:y},z:_,tabId:w}}),l={version:2,options:this._exportableOptions(),cards:o};try{localStorage.setItem(`ddc_local_${this.storageKey||"default"}`,JSON.stringify(l))}catch{}if(!this.storageKey){t||this._toast("Saved locally (no storage_key set)."),this.__dirty=!1,this._updateApplyBtn();return}try{await this._saveLayoutToBackend(this.storageKey,l),t||this._toast("Layout saved."),this.__dirty=!1,this._updateApplyBtn()}catch(c){console.error("Backend save failed",c),this._dbgPush("save","Backend save failed",{error:String(c)}),t||this._toast("Backend save failed \u2014 kept local copy.")}}async _probeBackend(){this._backendOK=!1;let t=performance.now();try{this._dbgPush("probe","GET /api/dragdrop_storage (list keys)");let a=await this.hass.callApi("get","dragdrop_storage"),o=Math.round(performance.now()-t);this._dbgPush("probe",`OK (${o} ms)`,a),this._backendOK=!!a}catch(a){let o=Math.round(performance.now()-t);this._dbgPush("probe",`FAILED (${o} ms)`,{error:String(a)}),this._backendOK=!1}this._updateStoreBadge()}async _loadLayoutFromBackend(t){let a=`dragdrop_storage/${encodeURIComponent(t)}`,o=performance.now();try{this._dbgPush("load",`GET /api/${a}`);let l=await this.hass.callApi("get",a),c=Math.round(performance.now()-o);return this._dbgPush("load",`OK (${c} ms)`,{bytes:JSON.stringify(l||"").length}),l}catch(l){let c=Math.round(performance.now()-o);return this._dbgPush("load",`FAILED (${c} ms)`,{error:String(l)}),null}}async _saveLayoutToBackend(t,a){let o=`dragdrop_storage/${encodeURIComponent(t)}`,l=JSON.stringify(a).length,c=performance.now();try{this._dbgPush("save",`POST /api/${o}`,{bytes:l});let d=await this.hass.callApi("post",o,a),f=Math.round(performance.now()-c);return this._dbgPush("save",`OK (${f} ms)`,d),d}catch(d){let f=Math.round(performance.now()-c);throw this._dbgPush("save",`FAILED (${f} ms)`,{error:String(d),bytes:l}),d}}_updateStoreBadge(){let t=this.storeBadge;if(!t)return;let a=this._backendOK&&!!this.storageKey;t.textContent=a?"storage: backend - OK":"storage: local. Your Changes are NOT being SAVED. You need to download the Drag and Drop Card backend integration",t.style.background=a?"rgba(76,175,80,.15)":"rgba(255,193,7,.15)",t.style.borderColor=a?"rgba(76,175,80,.45)":"rgba(255,193,7,.45)"}_toast(t){let a=new Event("hass-notification");a.detail={message:t},window.dispatchEvent(a)}_huiRoot(){var t,a,o,l,c,d;try{let f=document.querySelector("home-assistant"),v=(t=f==null?void 0:f.shadowRoot)==null?void 0:t.querySelector("home-assistant-main"),y=((a=v==null?void 0:v.shadowRoot)==null?void 0:a.querySelector("ha-drawer"))||v,_=((o=y==null?void 0:y.shadowRoot)==null?void 0:o.querySelector("partial-panel-resolver"))||y,g=((l=_==null?void 0:_.shadowRoot)==null?void 0:l.querySelector("ha-panel-lovelace"))||((c=y==null?void 0:y.shadowRoot)==null?void 0:c.querySelector("ha-panel-lovelace"));return((d=g==null?void 0:g.shadowRoot)==null?void 0:d.querySelector("hui-root"))||null}catch{return null}}getCardSize(){return 3}};customElements.get("drag-and-drop-card")||customElements.define("drag-and-drop-card",Vi);(()=>{try{let e=window.customCards=window.customCards||[];e.some(u=>u.type==="drag-and-drop-card")||e.push({type:"drag-and-drop-card",name:"Drag & Drop Card",description:"Freeform drag/resize/snap-to-grid canvas for Lovelace cards.",preview:!1})}catch{}})();(()=>{let e=new WeakSet,u=c=>{try{if(!(c instanceof Element))return!1;let d=c.localName||"";return d?!!(d==="ha-card"||d.endsWith("-card")):!1}catch{return!1}},t=c=>{try{if(!c||e.has(c))return;e.add(c),c.dispatchEvent(new Event("ll-rebuild",{bubbles:!0,composed:!0}))}catch{}},a=c=>{var d,f;try{if(!c)return;c instanceof Element&&u(c)&&t(c);let v=(f=(d=(c instanceof ShadowRoot,c)).querySelectorAll)==null?void 0:f.call(d,"*");if(!v)return;for(let y of v){u(y)&&t(y);let _=y.shadowRoot;if(_)try{a(_)}catch{}}}catch{}},o=c=>{try{if(!c||c.__ddcCardModIntegrated)return;c.__ddcCardModIntegrated=!0;let d=c.shadowRoot||c;a(d);let f=new MutationObserver(v=>{for(let y of v)if(!(!y.addedNodes||!y.addedNodes.length))for(let _ of y.addedNodes)(_ instanceof Element||_ instanceof ShadowRoot)&&a(_)});f.observe(d,{childList:!0,subtree:!0}),c.__ddcCardModIntegratedObserver=f,setTimeout(()=>{try{a(d)}catch{}},250),setTimeout(()=>{try{a(d)}catch{}},1e3)}catch{}},l=()=>{try{document.querySelectorAll("drag-and-drop-card").forEach(o)}catch{}};if(window.customElements&&window.customElements.whenDefined)window.customElements.whenDefined("drag-and-drop-card").then(()=>{l();let c=window.customElements.get("drag-and-drop-card");if(c&&c.prototype){let f=c.prototype.connectedCallback;c.prototype.connectedCallback=function(){try{f&&f.call(this)}finally{o(this)}}}new MutationObserver(()=>l()).observe(document.documentElement,{childList:!0,subtree:!0})});else{let c=setInterval(l,1e3);setTimeout(()=>clearInterval(c),1e4)}})();(function(){let e="drag-and-drop-card",u=customElements.get(e);if(!u){console.warn("[ddc:augment] Could not find custom element",e);return}function t(){var E,P;try{let D=0,C=this;for(;C&&D++<20;){let b=(E=C.getRootNode)==null?void 0:E.call(C),M=b==null?void 0:b.host;if((M==null?void 0:M.tagName)==="HUI-ROOT")return M.lovelace;C=M||C.parentElement}let A=new Set,O=[document];for(;O.length;){let b=O.shift();if(!(!b||A.has(b))){if(A.add(b),((P=b.host)==null?void 0:P.tagName)==="HUI-ROOT")return b.host.lovelace;if(b.tagName==="HUI-ROOT")return b.lovelace;if(b.shadowRoot&&O.push(b.shadowRoot),b.children)for(let M of b.children)O.push(M)}}}catch{}}function a(E){let P=[],D=(A,O,b)=>{(b==null?void 0:b.type)==="custom:drag-and-drop-card"&&P.push({view:A,path:[...O],card:b})},C=(A,O,b)=>{if(A){if(Array.isArray(A)){A.forEach((M,R)=>C(M,O,b.concat(R)));return}if(typeof A=="object"){"type"in A&&D(O,b,A);for(let[M,R]of Object.entries(A))M==="views"&&Array.isArray(R)?R.forEach((ee,q)=>C(ee,q,["views",q])):(Array.isArray(R)||R&&typeof R=="object")&&C(R,O,b.concat(M))}}};return C(E,-1,[]),P}function o(E,P,D){let C=new Date().toISOString().replace(/[:.]/g,"-"),A=P.map(b=>{let M=E;for(let R of b.path)M=M[R];return{view:b.view,path:b.path,storage_key:M&&M.storage_key||null,before:M,patch:D}}),O={kind:"ddc-import-backup",created_at:C,count:A.length,items:A};try{let b=`ddc.backup.${C}`;localStorage.setItem(b,JSON.stringify(O));let M=Object.keys(localStorage).filter(R=>R.startsWith("ddc.backup.")).sort().reverse();for(let R of M.slice(10))localStorage.removeItem(R)}catch{}return{name:`ddc_backup_${C}.json`,data:O}}function l(E,P){try{let D=new Blob([JSON.stringify(P,null,2)],{type:"application/json"}),C=URL.createObjectURL(D),A=document.createElement("a");A.href=C,A.download=E,document.body.appendChild(A),A.click(),A.remove(),setTimeout(()=>URL.revokeObjectURL(C),1500)}catch(D){console.warn("[ddc:backup] download failed",D)}}function c(E){if(E)try{let P="ddc.recent.keys",D=JSON.parse(localStorage.getItem(P)||"[]");D.includes(E)||D.unshift(E),localStorage.setItem(P,JSON.stringify(D.slice(0,20)))}catch{}}function d(){try{return JSON.parse(localStorage.getItem("ddc.recent.keys")||"[]")}catch{return[]}}function f(){var P,D;let E=new Set;try{let C=Object.keys(localStorage).filter(A=>A.startsWith("ddc.backup.")).sort().reverse();for(let A of C)try{let O=JSON.parse(localStorage.getItem(A)||"null");if(O&&O.items)for(let b of O.items){let M=((P=b==null?void 0:b.before)==null?void 0:P.storage_key)||((D=b==null?void 0:b.patch)==null?void 0:D.storage_key);M&&E.add(M)}}catch{}}catch{}return Array.from(E)}async function v(E,{forceTargetKey:P=null,onlyThisCard:D=!1,prevKey:C,noDownload:A}={}){var _e,Je,We,je,Ke;let O=((_e=this._getLovelace)==null?void 0:_e.call(this))||t.call(this);if(!O)return console.debug("[ddc:import] persist: no lovelace root"),!1;if(typeof O.saveConfig!="function")return console.debug("[ddc:import] persist: dashboard not in Storage mode"),!1;let b=ke=>typeof ke=="string"?ke.trim():null,M=b(P)||b((Je=this==null?void 0:this._config)==null?void 0:Je.storage_key)||b(this==null?void 0:this.storageKey)||b(C);if(!M)return console.warn("[ddc:import] persist: missing target storage_key on this card; aborting"),!1;let R=JSON.parse(JSON.stringify(O.config)),ee=(this._scanDdcCards||a)(R);console.debug("[ddc:import] persist: found DDC cards",ee.map(ke=>({view:ke.view,path:ke.path.join("."),storage_key:ke.card&&(ke.card.storage_key||ke.card.storageKey)||null})));let q=ee.filter(ke=>{var Qe,Ze,at,it,ot,se,ut,nt,Re;return((Re=(se=(at=b((Qe=ke.card)==null?void 0:Qe.storage_key))!=null?at:b((Ze=ke.card)==null?void 0:Ze.storageKey))!=null?se:b((ot=(it=ke.card)==null?void 0:it.options)==null?void 0:ot.storage_key))!=null?Re:b((nt=(ut=ke.card)==null?void 0:ut.options)==null?void 0:nt.storageKey))===M});if(q.length!==1)return console.warn("[ddc:import] persist: expected exactly one target with key, got",q.length,{myKey:M}),!1;let K={type:"custom:drag-and-drop-card",...E||{}};"storage_key"in K&&delete K.storage_key,"storageKey"in K&&delete K.storageKey,K!=null&&K.options&&("storage_key"in K.options&&delete K.options.storage_key,"storageKey"in K.options&&delete K.options.storageKey);let ae=Array.isArray(K.cards)?K.cards:null;delete K.cards;try{let ke=o==null?void 0:o(O.config,q,K);ke&&(console.debug("[ddc:import] backup created",{file:ke.name,items:(We=ke.data)==null?void 0:We.count}),!A&&typeof l=="function"&&l(ke.name,ke.data))}catch(ke){console.debug("[ddc:import] backup skipped/error:",(ke==null?void 0:ke.message)||ke)}let ie=q[0],$=R;for(let ke of ie.path)$=$[ke];let me=(Ke=(je=b($==null?void 0:$.storage_key))!=null?je:b($==null?void 0:$.storageKey))!=null?Ke:null;return Object.assign($,K),me?$.storage_key=me:$.storage_key=M,"storageKey"in $&&delete $.storageKey,console.debug("[ddc:import] persist \u2192 saving",{patched:1,into_key:$.storage_key,ignored_file_key:b(E==null?void 0:E.storage_key)||b(E==null?void 0:E.storageKey)||null}),await O.saveConfig(R),{yamlSaved:!0,cardsForStorage:ae}}async function y(){var D;let E=C=>{if(!C)return[];if(Array.isArray(C))return C;if(Array.isArray(C==null?void 0:C.keys))return C.keys;if(Array.isArray(C==null?void 0:C.dashboards))return C.dashboards;if(Array.isArray(C==null?void 0:C.entries))return C.entries.map(A=>A.key||A.id||A.name).filter(Boolean);if(Array.isArray(C==null?void 0:C.items))return C.items.map(A=>A.key||A.id||A.name).filter(Boolean);if(typeof C=="object"){for(let A of Object.values(C))if(Array.isArray(A)&&A.every(O=>typeof O=="string"))return A}return[]};try{if((D=this==null?void 0:this.hass)!=null&&D.callApi){let C=await this.hass.callApi("get","dragdrop_storage"),A=E(C);if(A.length)return A}}catch(C){console.debug("[ddc:switcher] hass.callApi dragdrop_storage failed",C)}let P=["/api/dragdrop_storage","/api/dragdrop_storage/keys","/api/dragdrop_storage/list","/api/dragdrop_storage?all=1"];for(let C of P)try{let O=await(await fetch(C,{cache:"no-store"})).json(),b=E(O);if(b.length)return b}catch{}return[]}async function _(E){let P=O=>{if(!O)return null;if(O.options||O.cards)return O;if(typeof O.design=="object")return O.design;if(typeof O.payload=="object")return O.payload;try{if(typeof O=="string")return JSON.parse(O)}catch{}return null},D=async(O,b,M)=>{var R;try{if((R=this==null?void 0:this.hass)!=null&&R.callApi){let ee=await this.hass.callApi(O,b,M),q=P(ee);if(q)return q}}catch{}return null},C=async O=>{try{let b=await fetch(O,{cache:"no-store"}),M=b.headers.get("content-type")||"";if(M.includes("application/json")||M.includes("text/plain")){let R=await b.json().catch(()=>null)||await b.text().catch(()=>null),ee=P(R);if(ee)return ee}}catch{}return null},A=encodeURIComponent(E);return await(D("get",`dragdrop_storage/${A}`)||C(`/api/dragdrop_storage/${A}`)||C(`/api/dragdrop_storage?key=${A}`)||D("post","dragdrop_storage/get",{key:E})||null)}async function g(E,{source:P="switcher",newKey:D=null}={}){var O,b,M,R,ee,q,K,ae,ie,$,me,_e,Je,We,je,Ke,ke,rt,Qe,Ze,at,it,ot,se,ut,nt;if(!E||typeof E!="object")throw new Error("Invalid design payload");let C=this.storageKey||((O=this._config)==null?void 0:O.storage_key)||null;try{(b=this._dbgInit)==null||b.call(this),(M=this._dbgPush)==null||M.call(this,"import","Begin import (programmatic)",{source:P,newKey:D})}catch{}if(E.options){let{storage_key:Re,...oe}=E.options;(R=this._applyImportedOptions)==null||R.call(this,oe,!0)}else typeof E.grid=="number"&&((ee=this._applyImportedOptions)==null||ee.call(this,{grid:E.grid},!0));let A=D||((q=E==null?void 0:E.options)==null?void 0:q.storage_key)||C;if(A){this.storageKey=A,this._config={...this._config||{},storage_key:A};try{(K=this._syncEditorsStorageKey)==null||K.call(this)}catch{}}try{let Re=(ae=E.options)!=null?ae:typeof E.grid=="number"?{grid:E.grid}:{};await((ie=this._persistOptionsToYaml)==null?void 0:ie.call(this,{...Re,storage_key:A},{prevKey:C,noDownload:P==="switcher"}))}catch(Re){console.warn("[ddc:apply] persist failed",Re)}try{if(this.cardContainer.innerHTML="",Array.isArray(E.cards)&&E.cards.length)for(let Re of E.cards)if(!(Re!=null&&Re.card)||typeof Re.card=="object"&&Object.keys(Re.card).length===0){let oe=(We=this._makePlaceholderAt)==null?void 0:We.call(this,(($=Re.position)==null?void 0:$.x)||0,((me=Re.position)==null?void 0:me.y)||0,((_e=Re.size)==null?void 0:_e.width)||200,((Je=Re.size)==null?void 0:Je.height)||200);oe&&this.cardContainer.appendChild(oe)}else{let oe=await this._createCard(Re.card),Le=this._makeWrapper(oe);(ke=this._setCardPosition)==null||ke.call(this,Le,((je=Re.position)==null?void 0:je.x)||0,((Ke=Re.position)==null?void 0:Ke.y)||0),Le.style.width=`${((rt=Re.size)==null?void 0:rt.width)||140}px`,Le.style.height=`${((Qe=Re.size)==null?void 0:Qe.height)||100}px`,Re.z!=null&&(Le.style.zIndex=String(Re.z)),this.cardContainer.appendChild(Le);try{(Ze=this._rebuildOnce)==null||Ze.call(this,Le.firstElementChild)}catch{}(at=this._initCardInteract)==null||at.call(this,Le)}else(it=this._showEmptyPlaceholder)==null||it.call(this);(ot=this._resizeContainer)==null||ot.call(this),(se=this._markDirty)==null||se.call(this,"import"),(ut=this._toast)==null||ut.call(this,P==="switcher"?`Loaded layout "${A}"`:"Design imported")}catch(Re){console.error("[ddc:apply] rebuild failed",Re),(nt=this._toast)==null||nt.call(this,"Import failed during rebuild.")}}function w(){var E,P;try{let D=this.shadowRoot||this.renderRoot||this,C=D.querySelector(".ddc-switcher-inline");if(!C)return;let A=((E=this._getLovelace)==null?void 0:E.call(this))||t.call(this),O=!1;try{let b=(P=D.getRootNode&&D.getRootNode())==null?void 0:P.host;O=!!(A&&(A.editMode===!0||b&&b.editMode===!0))}catch{}C.style.display=O?"inline-flex":"none"}catch{}}function L(){try{if(this._ddcSwitcherInstalled)return;let P=(this.shadowRoot||this.renderRoot||this).querySelector(".toolbar");if(!P)return;let D=document.createElement("div");D.className="ddc-switcher-inline",Object.assign(D.style,{display:"inline-flex",gap:"6px",alignItems:"center",marginLeft:"auto"});let C=document.createElement("span");C.textContent="Layout:",C.style.fontSize="12px",C.style.opacity="0.8";let A=document.createElement("select");Object.assign(A.style,{fontSize:"12px",padding:"4px 6px",borderRadius:"8px",border:"1px solid var(--divider-color, #999)",background:"var(--card-background-color, #fff)"}),A.title="Select stored layout (storage_key)",A.id="ddcKeySelect";let O=document.createElement("button");O.className="btn secondary",O.type="button",O.style.padding="6px 10px",O.innerHTML='<ha-icon icon="mdi:refresh"></ha-icon><span style="margin-left:6px">Refresh</span>',D.appendChild(C),D.appendChild(A),D.appendChild(O),P.appendChild(D),this._ddcSwitcherInstalled=!0;let b=async()=>{let M=this.storageKey||this._config&&this._config.storage_key||"",R=await y.call(this),ee=f(),q=d(),K=_e=>Array.from(new Set(_e.filter(Boolean))),ae=K(R),ie=K(ee),$=K(q);if(A.innerHTML="",M&&!ae.includes(M)&&!ie.includes(M)&&!$.includes(M)){let _e=document.createElement("option");_e.value=M,_e.textContent=`${M} (current)`,_e.selected=!0,A.appendChild(_e)}let me=(_e,Je)=>{if(!Je.length)return;let We=document.createElement("optgroup");We.label=_e,Je.forEach(je=>{let Ke=document.createElement("option");Ke.value=je,Ke.textContent=je,je===M&&(Ke.selected=!0),We.appendChild(Ke)}),A.appendChild(We)};if(me("Server",ae),me("Backups",ie),me("Recent",$),!A.children.length){let _e=document.createElement("option");_e.value="",_e.textContent="\u2014 none \u2014",_e.selected=!0,A.appendChild(_e)}w.call(this)};b(),O.addEventListener("click",b),A.addEventListener("change",async M=>{var ee,q,K,ae,ie,$,me,_e;let R=String(M.target.value||"");if(R&&!this._ddcLoadingFromKey){this._ddcLoadingFromKey=!0;try{let Je=await _.call(this,R);if(!Je){(ee=this._toast)==null||ee.call(this,`No layout found for "${R}"`);return}await g.call(this,Je,{source:"switcher",newKey:R}),(q=this._resizeContainer)==null||q.call(this),(K=this._toast)==null||K.call(this,`Loaded layout "${R}"`);let We=String(((ae=this._config)==null?void 0:ae.storage_key)||this.storageKey||""),je=!1;try{let Ke=We?{forceTargetKey:We,noDownload:!0}:{noDownload:!0};je=await this._persistOptionsToYaml({storage_key:R},Ke)}catch(Ke){console.warn("[ddc:switcher] failed to persist storage_key to YAML",Ke),(ie=this._toast)==null||ie.call(this,"Failed to persist selected layout. Keeping current.");return}if(this.storageKey=R,this._config&&(this._config.storage_key=R),!je){console.warn("[ddc:switcher] persist returned false (likely YAML mode). Skipping reload.");return}try{this._saveTimer&&clearTimeout(this._saveTimer),await this._saveLayout(!0)}catch(Ke){console.warn("[ddc:switcher] saveLayout failed",Ke),($=this._markDirty)==null||$.call(this,"switcher"),(me=this._toast)==null||me.call(this,"Layout loaded \u2014 click Apply to save.");return}window.location.reload(),window.location.reload()}catch(Je){console.warn("[ddc:switcher] load/apply failed",Je),(_e=this._toast)==null||_e.call(this,"Failed to load layout.")}finally{this._ddcLoadingFromKey=!1}}}),this._ddcVisTimer&&clearInterval(this._ddcVisTimer),this._ddcVisTimer=setInterval(()=>w.call(this),800),w.call(this)}catch(E){console.warn("[ddc:switcher] inline install failed",E)}}u.prototype._getLovelace||(u.prototype._getLovelace=t),u.prototype._scanDdcCards||(u.prototype._scanDdcCards=a),u.prototype._persistOptionsToYaml=v,u.prototype._applyDesignObject||(u.prototype._applyDesignObject=g);try{let E=Object.getOwnPropertyDescriptor(u.prototype,"hass");if(E&&(E.set||E.get)){let P=E.set;Object.defineProperty(u.prototype,"hass",{configurable:!0,enumerable:!0,set(D){P&&P.call(this,D);try{L.call(this)}catch{}},get:E.get||function(){return this._hass}})}else if(typeof u.prototype.setHass=="function"){let P=u.prototype.setHass;u.prototype.setHass=function(D){P&&P.call(this,D);try{L.call(this)}catch{}}}else{let P=u.prototype.updated||u.prototype.firstUpdated;u.prototype.updated=function(...D){P&&P.apply(this,D);try{L.call(this)}catch{}}}}catch(E){console.warn("[ddc:switcher] wrap hass setter failed",E)}})();
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
