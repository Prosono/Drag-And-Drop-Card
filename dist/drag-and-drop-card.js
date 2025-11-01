var La=Object.create;var pn=Object.defineProperty;var Ma=Object.getOwnPropertyDescriptor;var Pa=Object.getOwnPropertyNames;var Ia=Object.getPrototypeOf,Ra=Object.prototype.hasOwnProperty;var Da=(t,h,e)=>h in t?pn(t,h,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[h]=e;var Fa=(t,h)=>()=>(h||t((h={exports:{}}).exports,h),h.exports);var Ba=(t,h,e,r)=>{if(h&&typeof h=="object"||typeof h=="function")for(let o of Pa(h))!Ra.call(t,o)&&o!==e&&pn(t,o,{get:()=>h[o],enumerable:!(r=Ma(h,o))||r.enumerable});return t};var Na=(t,h,e)=>(e=t!=null?La(Ia(t)):{},Ba(h||!t||!t.__esModule?pn(e,"default",{value:t,enumerable:!0}):e,t));var jn=(t,h,e)=>Da(t,typeof h!="symbol"?h+"":h,e);var Wn=Fa((un,ei)=>{(function(t,h){typeof un=="object"&&typeof ei!="undefined"?ei.exports=h():typeof define=="function"&&define.amd?define(h):(t=typeof globalThis!="undefined"?globalThis:t||self).interact=h()})(un,(function(){"use strict";function t(n,i){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);i&&(l=l.filter((function(p){return Object.getOwnPropertyDescriptor(n,p).enumerable}))),a.push.apply(a,l)}return a}function h(n){for(var i=1;i<arguments.length;i++){var a=arguments[i]!=null?arguments[i]:{};i%2?t(Object(a),!0).forEach((function(l){s(n,l,a[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(l){Object.defineProperty(n,l,Object.getOwnPropertyDescriptor(a,l))}))}return n}function e(n){return e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},e(n)}function r(n,i){if(!(n instanceof i))throw new TypeError("Cannot call a class as a function")}function o(n,i){for(var a=0;a<i.length;a++){var l=i[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(n,w(l.key),l)}}function c(n,i,a){return i&&o(n.prototype,i),a&&o(n,a),Object.defineProperty(n,"prototype",{writable:!1}),n}function s(n,i,a){return(i=w(i))in n?Object.defineProperty(n,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[i]=a,n}function d(n,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(i&&i.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),i&&g(n,i)}function u(n){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},u(n)}function g(n,i){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,l){return a.__proto__=l,a},g(n,i)}function m(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function b(n){var i=(function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch{return!1}})();return function(){var a,l=u(n);if(i){var p=u(this).constructor;a=Reflect.construct(l,arguments,p)}else a=l.apply(this,arguments);return(function(f,v){if(v&&(typeof v=="object"||typeof v=="function"))return v;if(v!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return m(f)})(this,a)}}function y(){return y=typeof Reflect!="undefined"&&Reflect.get?Reflect.get.bind():function(n,i,a){var l=(function(f,v){for(;!Object.prototype.hasOwnProperty.call(f,v)&&(f=u(f))!==null;);return f})(n,i);if(l){var p=Object.getOwnPropertyDescriptor(l,i);return p.get?p.get.call(arguments.length<3?n:a):p.value}},y.apply(this,arguments)}function w(n){var i=(function(a,l){if(typeof a!="object"||a===null)return a;var p=a[Symbol.toPrimitive];if(p!==void 0){var f=p.call(a,l||"default");if(typeof f!="object")return f;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(a)})(n,"string");return typeof i=="symbol"?i:i+""}var T=function(n){return!(!n||!n.Window)&&n instanceof n.Window},S=void 0,O=void 0;function P(n){S=n;var i=n.document.createTextNode("");i.ownerDocument!==n.document&&typeof n.wrap=="function"&&n.wrap(i)===i&&(n=n.wrap(n)),O=n}function C(n){return T(n)?n:(n.ownerDocument||n).defaultView||O.window}typeof window!="undefined"&&window&&P(window);var A=function(n){return!!n&&e(n)==="object"},M=function(n){return typeof n=="function"},_={window:function(n){return n===O||T(n)},docFrag:function(n){return A(n)&&n.nodeType===11},object:A,func:M,number:function(n){return typeof n=="number"},bool:function(n){return typeof n=="boolean"},string:function(n){return typeof n=="string"},element:function(n){if(!n||e(n)!=="object")return!1;var i=C(n)||O;return/object|function/.test(typeof Element=="undefined"?"undefined":e(Element))?n instanceof Element||n instanceof i.Element:n.nodeType===1&&typeof n.nodeName=="string"},plainObject:function(n){return A(n)&&!!n.constructor&&/function Object\b/.test(n.constructor.toString())},array:function(n){return A(n)&&n.length!==void 0&&M(n.splice)}};function L(n){var i=n.interaction;if(i.prepared.name==="drag"){var a=i.prepared.axis;a==="x"?(i.coords.cur.page.y=i.coords.start.page.y,i.coords.cur.client.y=i.coords.start.client.y,i.coords.velocity.client.y=0,i.coords.velocity.page.y=0):a==="y"&&(i.coords.cur.page.x=i.coords.start.page.x,i.coords.cur.client.x=i.coords.start.client.x,i.coords.velocity.client.x=0,i.coords.velocity.page.x=0)}}function D(n){var i=n.iEvent,a=n.interaction;if(a.prepared.name==="drag"){var l=a.prepared.axis;if(l==="x"||l==="y"){var p=l==="x"?"y":"x";i.page[p]=a.coords.start.page[p],i.client[p]=a.coords.start.client[p],i.delta[p]=0}}}var K={id:"actions/drag",install:function(n){var i=n.actions,a=n.Interactable,l=n.defaults;a.prototype.draggable=K.draggable,i.map.drag=K,i.methodDict.drag="draggable",l.actions.drag=K.defaults},listeners:{"interactions:before-action-move":L,"interactions:action-resume":L,"interactions:action-move":D,"auto-start:check":function(n){var i=n.interaction,a=n.interactable,l=n.buttons,p=a.options.drag;if(p&&p.enabled&&(!i.pointerIsDown||!/mouse|pointer/.test(i.pointerType)||(l&a.options.drag.mouseButtons)!=0))return n.action={name:"drag",axis:p.lockAxis==="start"?p.startAxis:p.lockAxis},!1}},draggable:function(n){return _.object(n)?(this.options.drag.enabled=n.enabled!==!1,this.setPerAction("drag",n),this.setOnEvents("drag",n),/^(xy|x|y|start)$/.test(n.lockAxis)&&(this.options.drag.lockAxis=n.lockAxis),/^(xy|x|y)$/.test(n.startAxis)&&(this.options.drag.startAxis=n.startAxis),this):_.bool(n)?(this.options.drag.enabled=n,this):this.options.drag},beforeMove:L,move:D,defaults:{startAxis:"xy",lockAxis:"xy"},getCursor:function(){return"move"},filterEventType:function(n){return n.search("drag")===0}},J=K,U={init:function(n){var i=n;U.document=i.document,U.DocumentFragment=i.DocumentFragment||ae,U.SVGElement=i.SVGElement||ae,U.SVGSVGElement=i.SVGSVGElement||ae,U.SVGElementInstance=i.SVGElementInstance||ae,U.Element=i.Element||ae,U.HTMLElement=i.HTMLElement||U.Element,U.Event=i.Event,U.Touch=i.Touch||ae,U.PointerEvent=i.PointerEvent||i.MSPointerEvent},document:null,DocumentFragment:null,SVGElement:null,SVGSVGElement:null,SVGElementInstance:null,Element:null,HTMLElement:null,Event:null,Touch:null,PointerEvent:null};function ae(){}var H=U,G={init:function(n){var i=H.Element,a=n.navigator||{};G.supportsTouch="ontouchstart"in n||_.func(n.DocumentTouch)&&H.document instanceof n.DocumentTouch,G.supportsPointerEvent=a.pointerEnabled!==!1&&!!H.PointerEvent,G.isIOS=/iP(hone|od|ad)/.test(a.platform),G.isIOS7=/iP(hone|od|ad)/.test(a.platform)&&/OS 7[^\d]/.test(a.appVersion),G.isIe9=/MSIE 9/.test(a.userAgent),G.isOperaMobile=a.appName==="Opera"&&G.supportsTouch&&/Presto/.test(a.userAgent),G.prefixedMatchesSelector="matches"in i.prototype?"matches":"webkitMatchesSelector"in i.prototype?"webkitMatchesSelector":"mozMatchesSelector"in i.prototype?"mozMatchesSelector":"oMatchesSelector"in i.prototype?"oMatchesSelector":"msMatchesSelector",G.pEventTypes=G.supportsPointerEvent?H.PointerEvent===n.MSPointerEvent?{up:"MSPointerUp",down:"MSPointerDown",over:"mouseover",out:"mouseout",move:"MSPointerMove",cancel:"MSPointerCancel"}:{up:"pointerup",down:"pointerdown",over:"pointerover",out:"pointerout",move:"pointermove",cancel:"pointercancel"}:null,G.wheelEvent=H.document&&"onmousewheel"in H.document?"mousewheel":"wheel"},supportsTouch:null,supportsPointerEvent:null,isIOS7:null,isIOS:null,isIe9:null,isOperaMobile:null,prefixedMatchesSelector:null,pEventTypes:null,wheelEvent:null},ee=G;function pe(n,i){if(n.contains)return n.contains(i);for(;i;){if(i===n)return!0;i=i.parentNode}return!1}function We(n,i){for(;_.element(n);){if(Te(n,i))return n;n=fe(n)}return null}function fe(n){var i=n.parentNode;if(_.docFrag(i)){for(;(i=i.host)&&_.docFrag(i););return i}return i}function Te(n,i){return O!==S&&(i=i.replace(/\/deep\//g," ")),n[ee.prefixedMatchesSelector](i)}var Ce=function(n){return n.parentNode||n.host};function ke(n,i){for(var a,l=[],p=n;(a=Ce(p))&&p!==i&&a!==p.ownerDocument;)l.unshift(p),p=a;return l}function Xe(n,i,a){for(;_.element(n);){if(Te(n,i))return!0;if((n=fe(n))===a)return Te(n,i)}return!1}function Je(n){return n.correspondingUseElement||n}function Ue(n){var i=n instanceof H.SVGElement?n.getBoundingClientRect():n.getClientRects()[0];return i&&{left:i.left,right:i.right,top:i.top,bottom:i.bottom,width:i.width||i.right-i.left,height:i.height||i.bottom-i.top}}function at(n){var i,a=Ue(n);if(!ee.isIOS7&&a){var l={x:(i=(i=C(n))||O).scrollX||i.document.documentElement.scrollLeft,y:i.scrollY||i.document.documentElement.scrollTop};a.left+=l.x,a.right+=l.x,a.top+=l.y,a.bottom+=l.y}return a}function ct(n){for(var i=[];n;)i.push(n),n=fe(n);return i}function nt(n){return!!_.string(n)&&(H.document.querySelector(n),!0)}function ne(n,i){for(var a in i)n[a]=i[a];return n}function ht(n,i,a){return n==="parent"?fe(a):n==="self"?i.getRect(a):We(a,n)}function et(n,i,a,l){var p=n;return _.string(p)?p=ht(p,i,a):_.func(p)&&(p=p.apply(void 0,l)),_.element(p)&&(p=at(p)),p}function Ne(n){return n&&{x:"x"in n?n.x:n.left,y:"y"in n?n.y:n.top}}function re(n){return!n||"x"in n&&"y"in n||((n=ne({},n)).x=n.left||0,n.y=n.top||0,n.width=n.width||(n.right||0)-n.x,n.height=n.height||(n.bottom||0)-n.y),n}function Ee(n,i,a){n.left&&(i.left+=a.x),n.right&&(i.right+=a.x),n.top&&(i.top+=a.y),n.bottom&&(i.bottom+=a.y),i.width=i.right-i.left,i.height=i.bottom-i.top}function Le(n,i,a){var l=a&&n.options[a];return Ne(et(l&&l.origin||n.options.origin,n,i,[n&&i]))||{x:0,y:0}}function Ae(n,i){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(k){return!0},l=arguments.length>3?arguments[3]:void 0;if(l=l||{},_.string(n)&&n.search(" ")!==-1&&(n=rt(n)),_.array(n))return n.forEach((function(k){return Ae(k,i,a,l)})),l;if(_.object(n)&&(i=n,n=""),_.func(i)&&a(n))l[n]=l[n]||[],l[n].push(i);else if(_.array(i))for(var p=0,f=i;p<f.length;p++){var v=f[p];Ae(n,v,a,l)}else if(_.object(i))for(var x in i)Ae(rt(x).map((function(k){return"".concat(n).concat(k)})),i[x],a,l);return l}function rt(n){return n.trim().split(/ +/)}var pt=function(n,i){return Math.sqrt(n*n+i*i)},vt=["webkit","moz"];function kt(n,i){n.__set||(n.__set={});var a=function(p){if(vt.some((function(f){return p.indexOf(f)===0})))return 1;typeof n[p]!="function"&&p!=="__set"&&Object.defineProperty(n,p,{get:function(){return p in n.__set?n.__set[p]:n.__set[p]=i[p]},set:function(f){n.__set[p]=f},configurable:!0})};for(var l in i)a(l);return n}function Ct(n,i){n.page=n.page||{},n.page.x=i.page.x,n.page.y=i.page.y,n.client=n.client||{},n.client.x=i.client.x,n.client.y=i.client.y,n.timeStamp=i.timeStamp}function Lt(n){n.page.x=0,n.page.y=0,n.client.x=0,n.client.y=0}function Wt(n){return n instanceof H.Event||n instanceof H.Touch}function qe(n,i,a){return n=n||"page",(a=a||{}).x=i[n+"X"],a.y=i[n+"Y"],a}function ot(n,i){return i=i||{x:0,y:0},ee.isOperaMobile&&Wt(n)?(qe("screen",n,i),i.x+=window.scrollX,i.y+=window.scrollY):qe("page",n,i),i}function st(n){return _.number(n.pointerId)?n.pointerId:n.identifier}function Yt(n,i,a){var l=i.length>1?Dt(i):i[0];ot(l,n.page),(function(p,f){f=f||{},ee.isOperaMobile&&Wt(p)?qe("screen",p,f):qe("client",p,f)})(l,n.client),n.timeStamp=a}function bt(n){var i=[];return _.array(n)?(i[0]=n[0],i[1]=n[1]):n.type==="touchend"?n.touches.length===1?(i[0]=n.touches[0],i[1]=n.changedTouches[0]):n.touches.length===0&&(i[0]=n.changedTouches[0],i[1]=n.changedTouches[1]):(i[0]=n.touches[0],i[1]=n.touches[1]),i}function Dt(n){for(var i={pageX:0,pageY:0,clientX:0,clientY:0,screenX:0,screenY:0},a=0;a<n.length;a++){var l=n[a];for(var p in i)i[p]+=l[p]}for(var f in i)i[f]/=n.length;return i}function Et(n){if(!n.length)return null;var i=bt(n),a=Math.min(i[0].pageX,i[1].pageX),l=Math.min(i[0].pageY,i[1].pageY),p=Math.max(i[0].pageX,i[1].pageX),f=Math.max(i[0].pageY,i[1].pageY);return{x:a,y:l,left:a,top:l,right:p,bottom:f,width:p-a,height:f-l}}function gt(n,i){var a=i+"X",l=i+"Y",p=bt(n),f=p[0][a]-p[1][a],v=p[0][l]-p[1][l];return pt(f,v)}function ge(n,i){var a=i+"X",l=i+"Y",p=bt(n),f=p[1][a]-p[0][a],v=p[1][l]-p[0][l];return 180*Math.atan2(v,f)/Math.PI}function j(n){return _.string(n.pointerType)?n.pointerType:_.number(n.pointerType)?[void 0,void 0,"touch","pen","mouse"][n.pointerType]:/touch/.test(n.type||"")||n instanceof H.Touch?"touch":"mouse"}function $(n){var i=_.func(n.composedPath)?n.composedPath():n.path;return[Je(i?i[0]:n.target),Je(n.currentTarget)]}var ue=(function(){function n(i){r(this,n),this.immediatePropagationStopped=!1,this.propagationStopped=!1,this._interaction=i}return c(n,[{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}]),n})();Object.defineProperty(ue.prototype,"interaction",{get:function(){return this._interaction._proxy},set:function(){}});var ve=function(n,i){for(var a=0;a<i.length;a++){var l=i[a];n.push(l)}return n},le=function(n){return ve([],n)},_e=function(n,i){for(var a=0;a<n.length;a++)if(i(n[a],a,n))return a;return-1},W=function(n,i){return n[_e(n,i)]},Z=(function(n){d(a,n);var i=b(a);function a(l,p,f){var v;r(this,a),(v=i.call(this,p._interaction)).dropzone=void 0,v.dragEvent=void 0,v.relatedTarget=void 0,v.draggable=void 0,v.propagationStopped=!1,v.immediatePropagationStopped=!1;var x=f==="dragleave"?l.prev:l.cur,k=x.element,z=x.dropzone;return v.type=f,v.target=k,v.currentTarget=k,v.dropzone=z,v.dragEvent=p,v.relatedTarget=p.target,v.draggable=p.interactable,v.timeStamp=p.timeStamp,v}return c(a,[{key:"reject",value:function(){var l=this,p=this._interaction.dropState;if(this.type==="dropactivate"||this.dropzone&&p.cur.dropzone===this.dropzone&&p.cur.element===this.target)if(p.prev.dropzone=this.dropzone,p.prev.element=this.target,p.rejected=!0,p.events.enter=null,this.stopImmediatePropagation(),this.type==="dropactivate"){var f=p.activeDrops,v=_e(f,(function(k){var z=k.dropzone,E=k.element;return z===l.dropzone&&E===l.target}));p.activeDrops.splice(v,1);var x=new a(p,this.dragEvent,"dropdeactivate");x.dropzone=this.dropzone,x.target=this.target,this.dropzone.fire(x)}else this.dropzone.fire(new a(p,this.dragEvent,"dragleave"))}},{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}]),a})(ue);function Re(n,i){for(var a=0,l=n.slice();a<l.length;a++){var p=l[a],f=p.dropzone,v=p.element;i.dropzone=f,i.target=v,f.fire(i),i.propagationStopped=i.immediatePropagationStopped=!1}}function Y(n,i){for(var a=(function(f,v){for(var x=[],k=0,z=f.interactables.list;k<z.length;k++){var E=z[k];if(E.options.drop.enabled){var I=E.options.drop.accept;if(!(_.element(I)&&I!==v||_.string(I)&&!Te(v,I)||_.func(I)&&!I({dropzone:E,draggableElement:v})))for(var q=0,Q=E.getAllElements();q<Q.length;q++){var X=Q[q];X!==v&&x.push({dropzone:E,element:X,rect:E.getRect(X)})}}}return x})(n,i),l=0;l<a.length;l++){var p=a[l];p.rect=p.dropzone.getRect(p.element)}return a}function Ke(n,i,a){for(var l=n.dropState,p=n.interactable,f=n.element,v=[],x=0,k=l.activeDrops;x<k.length;x++){var z=k[x],E=z.dropzone,I=z.element,q=z.rect,Q=E.dropCheck(i,a,p,f,I,q);v.push(Q?I:null)}var X=(function(te){for(var de,ce,me,Me=[],He=0;He<te.length;He++){var Se=te[He],Ie=te[de];if(Se&&He!==de)if(Ie){var wt=Ce(Se),it=Ce(Ie);if(wt!==Se.ownerDocument)if(it!==Se.ownerDocument)if(wt!==it){Me=Me.length?Me:ke(Ie);var zt=void 0;if(Ie instanceof H.HTMLElement&&Se instanceof H.SVGElement&&!(Se instanceof H.SVGSVGElement)){if(Se===it)continue;zt=Se.ownerSVGElement}else zt=Se;for(var Rt=ke(zt,Ie.ownerDocument),Ht=0;Rt[Ht]&&Rt[Ht]===Me[Ht];)Ht++;var Vi=[Rt[Ht-1],Rt[Ht],Me[Ht]];if(Vi[0])for(var Oi=Vi[0].lastChild;Oi;){if(Oi===Vi[1]){de=He,Me=Rt;break}if(Oi===Vi[2])break;Oi=Oi.previousSibling}}else me=Ie,(parseInt(C(ce=Se).getComputedStyle(ce).zIndex,10)||0)>=(parseInt(C(me).getComputedStyle(me).zIndex,10)||0)&&(de=He);else de=He}else de=He}return de})(v);return l.activeDrops[X]||null}function Ye(n,i,a){var l=n.dropState,p={enter:null,leave:null,activate:null,deactivate:null,move:null,drop:null};return a.type==="dragstart"&&(p.activate=new Z(l,a,"dropactivate"),p.activate.target=null,p.activate.dropzone=null),a.type==="dragend"&&(p.deactivate=new Z(l,a,"dropdeactivate"),p.deactivate.target=null,p.deactivate.dropzone=null),l.rejected||(l.cur.element!==l.prev.element&&(l.prev.dropzone&&(p.leave=new Z(l,a,"dragleave"),a.dragLeave=p.leave.target=l.prev.element,a.prevDropzone=p.leave.dropzone=l.prev.dropzone),l.cur.dropzone&&(p.enter=new Z(l,a,"dragenter"),a.dragEnter=l.cur.element,a.dropzone=l.cur.dropzone)),a.type==="dragend"&&l.cur.dropzone&&(p.drop=new Z(l,a,"drop"),a.dropzone=l.cur.dropzone,a.relatedTarget=l.cur.element),a.type==="dragmove"&&l.cur.dropzone&&(p.move=new Z(l,a,"dropmove"),a.dropzone=l.cur.dropzone)),p}function Qe(n,i){var a=n.dropState,l=a.activeDrops,p=a.cur,f=a.prev;i.leave&&f.dropzone.fire(i.leave),i.enter&&p.dropzone.fire(i.enter),i.move&&p.dropzone.fire(i.move),i.drop&&p.dropzone.fire(i.drop),i.deactivate&&Re(l,i.deactivate),a.prev.dropzone=p.dropzone,a.prev.element=p.element}function Fe(n,i){var a=n.interaction,l=n.iEvent,p=n.event;if(l.type==="dragmove"||l.type==="dragend"){var f=a.dropState;i.dynamicDrop&&(f.activeDrops=Y(i,a.element));var v=l,x=Ke(a,v,p);f.rejected=f.rejected&&!!x&&x.dropzone===f.cur.dropzone&&x.element===f.cur.element,f.cur.dropzone=x&&x.dropzone,f.cur.element=x&&x.element,f.events=Ye(a,0,v)}}var tt={id:"actions/drop",install:function(n){var i=n.actions,a=n.interactStatic,l=n.Interactable,p=n.defaults;n.usePlugin(J),l.prototype.dropzone=function(f){return(function(v,x){if(_.object(x)){if(v.options.drop.enabled=x.enabled!==!1,x.listeners){var k=Ae(x.listeners),z=Object.keys(k).reduce((function(I,q){return I[/^(enter|leave)/.test(q)?"drag".concat(q):/^(activate|deactivate|move)/.test(q)?"drop".concat(q):q]=k[q],I}),{}),E=v.options.drop.listeners;E&&v.off(E),v.on(z),v.options.drop.listeners=z}return _.func(x.ondrop)&&v.on("drop",x.ondrop),_.func(x.ondropactivate)&&v.on("dropactivate",x.ondropactivate),_.func(x.ondropdeactivate)&&v.on("dropdeactivate",x.ondropdeactivate),_.func(x.ondragenter)&&v.on("dragenter",x.ondragenter),_.func(x.ondragleave)&&v.on("dragleave",x.ondragleave),_.func(x.ondropmove)&&v.on("dropmove",x.ondropmove),/^(pointer|center)$/.test(x.overlap)?v.options.drop.overlap=x.overlap:_.number(x.overlap)&&(v.options.drop.overlap=Math.max(Math.min(1,x.overlap),0)),"accept"in x&&(v.options.drop.accept=x.accept),"checker"in x&&(v.options.drop.checker=x.checker),v}return _.bool(x)?(v.options.drop.enabled=x,v):v.options.drop})(this,f)},l.prototype.dropCheck=function(f,v,x,k,z,E){return(function(I,q,Q,X,te,de,ce){var me=!1;if(!(ce=ce||I.getRect(de)))return!!I.options.drop.checker&&I.options.drop.checker(q,Q,me,I,de,X,te);var Me=I.options.drop.overlap;if(Me==="pointer"){var He=Le(X,te,"drag"),Se=ot(q);Se.x+=He.x,Se.y+=He.y;var Ie=Se.x>ce.left&&Se.x<ce.right,wt=Se.y>ce.top&&Se.y<ce.bottom;me=Ie&&wt}var it=X.getRect(te);if(it&&Me==="center"){var zt=it.left+it.width/2,Rt=it.top+it.height/2;me=zt>=ce.left&&zt<=ce.right&&Rt>=ce.top&&Rt<=ce.bottom}return it&&_.number(Me)&&(me=Math.max(0,Math.min(ce.right,it.right)-Math.max(ce.left,it.left))*Math.max(0,Math.min(ce.bottom,it.bottom)-Math.max(ce.top,it.top))/(it.width*it.height)>=Me),I.options.drop.checker&&(me=I.options.drop.checker(q,Q,me,I,de,X,te)),me})(this,f,v,x,k,z,E)},a.dynamicDrop=function(f){return _.bool(f)?(n.dynamicDrop=f,a):n.dynamicDrop},ne(i.phaselessTypes,{dragenter:!0,dragleave:!0,dropactivate:!0,dropdeactivate:!0,dropmove:!0,drop:!0}),i.methodDict.drop="dropzone",n.dynamicDrop=!1,p.actions.drop=tt.defaults},listeners:{"interactions:before-action-start":function(n){var i=n.interaction;i.prepared.name==="drag"&&(i.dropState={cur:{dropzone:null,element:null},prev:{dropzone:null,element:null},rejected:null,events:null,activeDrops:[]})},"interactions:after-action-start":function(n,i){var a=n.interaction,l=(n.event,n.iEvent);if(a.prepared.name==="drag"){var p=a.dropState;p.activeDrops=[],p.events={},p.activeDrops=Y(i,a.element),p.events=Ye(a,0,l),p.events.activate&&(Re(p.activeDrops,p.events.activate),i.fire("actions/drop:start",{interaction:a,dragEvent:l}))}},"interactions:action-move":Fe,"interactions:after-action-move":function(n,i){var a=n.interaction,l=n.iEvent;if(a.prepared.name==="drag"){var p=a.dropState;Qe(a,p.events),i.fire("actions/drop:move",{interaction:a,dragEvent:l}),p.events={}}},"interactions:action-end":function(n,i){if(n.interaction.prepared.name==="drag"){var a=n.interaction,l=n.iEvent;Fe(n,i),Qe(a,a.dropState.events),i.fire("actions/drop:end",{interaction:a,dragEvent:l})}},"interactions:stop":function(n){var i=n.interaction;if(i.prepared.name==="drag"){var a=i.dropState;a&&(a.activeDrops=null,a.events=null,a.cur.dropzone=null,a.cur.element=null,a.prev.dropzone=null,a.prev.element=null,a.rejected=!1)}}},getActiveDrops:Y,getDrop:Ke,getDropEvents:Ye,fireDropEvents:Qe,filterEventType:function(n){return n.search("drag")===0||n.search("drop")===0},defaults:{enabled:!1,accept:null,overlap:"pointer"}},Ve=tt;function Ge(n){var i=n.interaction,a=n.iEvent,l=n.phase;if(i.prepared.name==="gesture"){var p=i.pointers.map((function(z){return z.pointer})),f=l==="start",v=l==="end",x=i.interactable.options.deltaSource;if(a.touches=[p[0],p[1]],f)a.distance=gt(p,x),a.box=Et(p),a.scale=1,a.ds=0,a.angle=ge(p,x),a.da=0,i.gesture.startDistance=a.distance,i.gesture.startAngle=a.angle;else if(v||i.pointers.length<2){var k=i.prevEvent;a.distance=k.distance,a.box=k.box,a.scale=k.scale,a.ds=0,a.angle=k.angle,a.da=0}else a.distance=gt(p,x),a.box=Et(p),a.scale=a.distance/i.gesture.startDistance,a.angle=ge(p,x),a.ds=a.scale-i.gesture.scale,a.da=a.angle-i.gesture.angle;i.gesture.distance=a.distance,i.gesture.angle=a.angle,_.number(a.scale)&&a.scale!==1/0&&!isNaN(a.scale)&&(i.gesture.scale=a.scale)}}var $e={id:"actions/gesture",before:["actions/drag","actions/resize"],install:function(n){var i=n.actions,a=n.Interactable,l=n.defaults;a.prototype.gesturable=function(p){return _.object(p)?(this.options.gesture.enabled=p.enabled!==!1,this.setPerAction("gesture",p),this.setOnEvents("gesture",p),this):_.bool(p)?(this.options.gesture.enabled=p,this):this.options.gesture},i.map.gesture=$e,i.methodDict.gesture="gesturable",l.actions.gesture=$e.defaults},listeners:{"interactions:action-start":Ge,"interactions:action-move":Ge,"interactions:action-end":Ge,"interactions:new":function(n){n.interaction.gesture={angle:0,distance:0,scale:1,startAngle:0,startDistance:0}},"auto-start:check":function(n){if(!(n.interaction.pointers.length<2)){var i=n.interactable.options.gesture;if(i&&i.enabled)return n.action={name:"gesture"},!1}}},defaults:{},getCursor:function(){return""},filterEventType:function(n){return n.search("gesture")===0}},je=$e;function Oe(n,i,a,l,p,f,v){if(!i)return!1;if(i===!0){var x=_.number(f.width)?f.width:f.right-f.left,k=_.number(f.height)?f.height:f.bottom-f.top;if(v=Math.min(v,Math.abs((n==="left"||n==="right"?x:k)/2)),x<0&&(n==="left"?n="right":n==="right"&&(n="left")),k<0&&(n==="top"?n="bottom":n==="bottom"&&(n="top")),n==="left"){var z=x>=0?f.left:f.right;return a.x<z+v}if(n==="top"){var E=k>=0?f.top:f.bottom;return a.y<E+v}if(n==="right")return a.x>(x>=0?f.right:f.left)-v;if(n==="bottom")return a.y>(k>=0?f.bottom:f.top)-v}return!!_.element(l)&&(_.element(i)?i===l:Xe(l,i,p))}function he(n){var i=n.iEvent,a=n.interaction;if(a.prepared.name==="resize"&&a.resizeAxes){var l=i;a.interactable.options.resize.square?(a.resizeAxes==="y"?l.delta.x=l.delta.y:l.delta.y=l.delta.x,l.axes="xy"):(l.axes=a.resizeAxes,a.resizeAxes==="x"?l.delta.y=0:a.resizeAxes==="y"&&(l.delta.x=0))}}var we,Pe,xe={id:"actions/resize",before:["actions/drag"],install:function(n){var i=n.actions,a=n.browser,l=n.Interactable,p=n.defaults;xe.cursors=(function(f){return f.isIe9?{x:"e-resize",y:"s-resize",xy:"se-resize",top:"n-resize",left:"w-resize",bottom:"s-resize",right:"e-resize",topleft:"se-resize",bottomright:"se-resize",topright:"ne-resize",bottomleft:"ne-resize"}:{x:"ew-resize",y:"ns-resize",xy:"nwse-resize",top:"ns-resize",left:"ew-resize",bottom:"ns-resize",right:"ew-resize",topleft:"nwse-resize",bottomright:"nwse-resize",topright:"nesw-resize",bottomleft:"nesw-resize"}})(a),xe.defaultMargin=a.supportsTouch||a.supportsPointerEvent?20:10,l.prototype.resizable=function(f){return(function(v,x,k){return _.object(x)?(v.options.resize.enabled=x.enabled!==!1,v.setPerAction("resize",x),v.setOnEvents("resize",x),_.string(x.axis)&&/^x$|^y$|^xy$/.test(x.axis)?v.options.resize.axis=x.axis:x.axis===null&&(v.options.resize.axis=k.defaults.actions.resize.axis),_.bool(x.preserveAspectRatio)?v.options.resize.preserveAspectRatio=x.preserveAspectRatio:_.bool(x.square)&&(v.options.resize.square=x.square),v):_.bool(x)?(v.options.resize.enabled=x,v):v.options.resize})(this,f,n)},i.map.resize=xe,i.methodDict.resize="resizable",p.actions.resize=xe.defaults},listeners:{"interactions:new":function(n){n.interaction.resizeAxes="xy"},"interactions:action-start":function(n){(function(i){var a=i.iEvent,l=i.interaction;if(l.prepared.name==="resize"&&l.prepared.edges){var p=a,f=l.rect;l._rects={start:ne({},f),corrected:ne({},f),previous:ne({},f),delta:{left:0,right:0,width:0,top:0,bottom:0,height:0}},p.edges=l.prepared.edges,p.rect=l._rects.corrected,p.deltaRect=l._rects.delta}})(n),he(n)},"interactions:action-move":function(n){(function(i){var a=i.iEvent,l=i.interaction;if(l.prepared.name==="resize"&&l.prepared.edges){var p=a,f=l.interactable.options.resize.invert,v=f==="reposition"||f==="negate",x=l.rect,k=l._rects,z=k.start,E=k.corrected,I=k.delta,q=k.previous;if(ne(q,E),v){if(ne(E,x),f==="reposition"){if(E.top>E.bottom){var Q=E.top;E.top=E.bottom,E.bottom=Q}if(E.left>E.right){var X=E.left;E.left=E.right,E.right=X}}}else E.top=Math.min(x.top,z.bottom),E.bottom=Math.max(x.bottom,z.top),E.left=Math.min(x.left,z.right),E.right=Math.max(x.right,z.left);for(var te in E.width=E.right-E.left,E.height=E.bottom-E.top,E)I[te]=E[te]-q[te];p.edges=l.prepared.edges,p.rect=E,p.deltaRect=I}})(n),he(n)},"interactions:action-end":function(n){var i=n.iEvent,a=n.interaction;if(a.prepared.name==="resize"&&a.prepared.edges){var l=i;l.edges=a.prepared.edges,l.rect=a._rects.corrected,l.deltaRect=a._rects.delta}},"auto-start:check":function(n){var i=n.interaction,a=n.interactable,l=n.element,p=n.rect,f=n.buttons;if(p){var v=ne({},i.coords.cur.page),x=a.options.resize;if(x&&x.enabled&&(!i.pointerIsDown||!/mouse|pointer/.test(i.pointerType)||(f&x.mouseButtons)!=0)){if(_.object(x.edges)){var k={left:!1,right:!1,top:!1,bottom:!1};for(var z in k)k[z]=Oe(z,x.edges[z],v,i._latestPointer.eventTarget,l,p,x.margin||xe.defaultMargin);k.left=k.left&&!k.right,k.top=k.top&&!k.bottom,(k.left||k.right||k.top||k.bottom)&&(n.action={name:"resize",edges:k})}else{var E=x.axis!=="y"&&v.x>p.right-xe.defaultMargin,I=x.axis!=="x"&&v.y>p.bottom-xe.defaultMargin;(E||I)&&(n.action={name:"resize",axes:(E?"x":"")+(I?"y":"")})}return!n.action&&void 0}}}},defaults:{square:!1,preserveAspectRatio:!1,axis:"xy",margin:NaN,edges:null,invert:"none"},cursors:null,getCursor:function(n){var i=n.edges,a=n.axis,l=n.name,p=xe.cursors,f=null;if(a)f=p[l+a];else if(i){for(var v="",x=0,k=["top","bottom","left","right"];x<k.length;x++){var z=k[x];i[z]&&(v+=z)}f=p[v]}return f},filterEventType:function(n){return n.search("resize")===0},defaultMargin:null},se=xe,R={id:"actions",install:function(n){n.usePlugin(je),n.usePlugin(se),n.usePlugin(J),n.usePlugin(Ve)}},N=0,B={request:function(n){return we(n)},cancel:function(n){return Pe(n)},init:function(n){if(we=n.requestAnimationFrame,Pe=n.cancelAnimationFrame,!we)for(var i=["ms","moz","webkit","o"],a=0;a<i.length;a++){var l=i[a];we=n["".concat(l,"RequestAnimationFrame")],Pe=n["".concat(l,"CancelAnimationFrame")]||n["".concat(l,"CancelRequestAnimationFrame")]}we=we&&we.bind(n),Pe=Pe&&Pe.bind(n),we||(we=function(p){var f=Date.now(),v=Math.max(0,16-(f-N)),x=n.setTimeout((function(){p(f+v)}),v);return N=f+v,x},Pe=function(p){return clearTimeout(p)})}},F={defaults:{enabled:!1,margin:60,container:null,speed:300},now:Date.now,interaction:null,i:0,x:0,y:0,isScrolling:!1,prevTime:0,margin:0,speed:0,start:function(n){F.isScrolling=!0,B.cancel(F.i),n.autoScroll=F,F.interaction=n,F.prevTime=F.now(),F.i=B.request(F.scroll)},stop:function(){F.isScrolling=!1,F.interaction&&(F.interaction.autoScroll=null),B.cancel(F.i)},scroll:function(){var n=F.interaction,i=n.interactable,a=n.element,l=n.prepared.name,p=i.options[l].autoScroll,f=V(p.container,i,a),v=F.now(),x=(v-F.prevTime)/1e3,k=p.speed*x;if(k>=1){var z={x:F.x*k,y:F.y*k};if(z.x||z.y){var E=ie(f);_.window(f)?f.scrollBy(z.x,z.y):f&&(f.scrollLeft+=z.x,f.scrollTop+=z.y);var I=ie(f),q={x:I.x-E.x,y:I.y-E.y};(q.x||q.y)&&i.fire({type:"autoscroll",target:a,interactable:i,delta:q,interaction:n,container:f})}F.prevTime=v}F.isScrolling&&(B.cancel(F.i),F.i=B.request(F.scroll))},check:function(n,i){var a;return(a=n.options[i].autoScroll)==null?void 0:a.enabled},onInteractionMove:function(n){var i=n.interaction,a=n.pointer;if(i.interacting()&&F.check(i.interactable,i.prepared.name))if(i.simulation)F.x=F.y=0;else{var l,p,f,v,x=i.interactable,k=i.element,z=i.prepared.name,E=x.options[z].autoScroll,I=V(E.container,x,k);if(_.window(I))v=a.clientX<F.margin,l=a.clientY<F.margin,p=a.clientX>I.innerWidth-F.margin,f=a.clientY>I.innerHeight-F.margin;else{var q=Ue(I);v=a.clientX<q.left+F.margin,l=a.clientY<q.top+F.margin,p=a.clientX>q.right-F.margin,f=a.clientY>q.bottom-F.margin}F.x=p?1:v?-1:0,F.y=f?1:l?-1:0,F.isScrolling||(F.margin=E.margin,F.speed=E.speed,F.start(i))}}};function V(n,i,a){return(_.string(n)?ht(n,i,a):n)||C(a)}function ie(n){return _.window(n)&&(n=window.document.body),{x:n.scrollLeft,y:n.scrollTop}}var oe={id:"auto-scroll",install:function(n){var i=n.defaults,a=n.actions;n.autoScroll=F,F.now=function(){return n.now()},a.phaselessTypes.autoscroll=!0,i.perAction.autoScroll=F.defaults},listeners:{"interactions:new":function(n){n.interaction.autoScroll=null},"interactions:destroy":function(n){n.interaction.autoScroll=null,F.stop(),F.interaction&&(F.interaction=null)},"interactions:stop":F.stop,"interactions:action-move":function(n){return F.onInteractionMove(n)}}},ze=oe;function be(n,i){var a=!1;return function(){return a||(O.console.warn(i),a=!0),n.apply(this,arguments)}}function Be(n,i){return n.name=i.name,n.axis=i.axis,n.edges=i.edges,n}function De(n){return _.bool(n)?(this.options.styleCursor=n,this):n===null?(delete this.options.styleCursor,this):this.options.styleCursor}function mt(n){return _.func(n)?(this.options.actionChecker=n,this):n===null?(delete this.options.actionChecker,this):this.options.actionChecker}var Mt={id:"auto-start/interactableMethods",install:function(n){var i=n.Interactable;i.prototype.getAction=function(a,l,p,f){var v=(function(x,k,z,E,I){var q=x.getRect(E),Q=k.buttons||{0:1,1:4,3:8,4:16}[k.button],X={action:null,interactable:x,interaction:z,element:E,rect:q,buttons:Q};return I.fire("auto-start:check",X),X.action})(this,l,p,f,n);return this.options.actionChecker?this.options.actionChecker(a,l,v,this,f,p):v},i.prototype.ignoreFrom=be((function(a){return this._backCompatOption("ignoreFrom",a)}),"Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."),i.prototype.allowFrom=be((function(a){return this._backCompatOption("allowFrom",a)}),"Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."),i.prototype.actionChecker=mt,i.prototype.styleCursor=De}};function Ot(n,i,a,l,p){return i.testIgnoreAllow(i.options[n.name],a,l)&&i.options[n.name].enabled&&lt(i,a,n,p)?n:null}function Tt(n,i,a,l,p,f,v){for(var x=0,k=l.length;x<k;x++){var z=l[x],E=p[x],I=z.getAction(i,a,n,E);if(I){var q=Ot(I,z,E,f,v);if(q)return{action:q,interactable:z,element:E}}}return{action:null,interactable:null,element:null}}function Ft(n,i,a,l,p){var f=[],v=[],x=l;function k(E){f.push(E),v.push(x)}for(;_.element(x);){f=[],v=[],p.interactables.forEachMatch(x,k);var z=Tt(n,i,a,f,v,l,p);if(z.action&&!z.interactable.options[z.action.name].manualStart)return z;x=fe(x)}return{action:null,interactable:null,element:null}}function Pt(n,i,a){var l=i.action,p=i.interactable,f=i.element;l=l||{name:null},n.interactable=p,n.element=f,Be(n.prepared,l),n.rect=p&&l.name?p.getRect(f):null,Ii(n,a),a.fire("autoStart:prepared",{interaction:n})}function lt(n,i,a,l){var p=n.options,f=p[a.name].max,v=p[a.name].maxPerElement,x=l.autoStart.maxInteractions,k=0,z=0,E=0;if(!(f&&v&&x))return!1;for(var I=0,q=l.interactions.list;I<q.length;I++){var Q=q[I],X=Q.prepared.name;if(Q.interacting()&&(++k>=x||Q.interactable===n&&((z+=X===a.name?1:0)>=f||Q.element===i&&(E++,X===a.name&&E>=v))))return!1}return x>0}function Nt(n,i){return _.number(n)?(i.autoStart.maxInteractions=n,this):i.autoStart.maxInteractions}function Xt(n,i,a){var l=a.autoStart.cursorElement;l&&l!==n&&(l.style.cursor=""),n.ownerDocument.documentElement.style.cursor=i,n.style.cursor=i,a.autoStart.cursorElement=i?n:null}function Ii(n,i){var a=n.interactable,l=n.element,p=n.prepared;if(n.pointerType==="mouse"&&a&&a.options.styleCursor){var f="";if(p.name){var v=a.options[p.name].cursorChecker;f=_.func(v)?v(p,a,l,n._interacting):i.actions.map[p.name].getCursor(p)}Xt(n.element,f||"",i)}else i.autoStart.cursorElement&&Xt(i.autoStart.cursorElement,"",i)}var Ri={id:"auto-start/base",before:["actions"],install:function(n){var i=n.interactStatic,a=n.defaults;n.usePlugin(Mt),a.base.actionChecker=null,a.base.styleCursor=!0,ne(a.perAction,{manualStart:!1,max:1/0,maxPerElement:1,allowFrom:null,ignoreFrom:null,mouseButtons:1}),i.maxInteractions=function(l){return Nt(l,n)},n.autoStart={maxInteractions:1/0,withinInteractionLimit:lt,cursorElement:null}},listeners:{"interactions:down":function(n,i){var a=n.interaction,l=n.pointer,p=n.event,f=n.eventTarget;a.interacting()||Pt(a,Ft(a,l,p,f,i),i)},"interactions:move":function(n,i){(function(a,l){var p=a.interaction,f=a.pointer,v=a.event,x=a.eventTarget;p.pointerType!=="mouse"||p.pointerIsDown||p.interacting()||Pt(p,Ft(p,f,v,x,l),l)})(n,i),(function(a,l){var p=a.interaction;if(p.pointerIsDown&&!p.interacting()&&p.pointerWasMoved&&p.prepared.name){l.fire("autoStart:before-start",a);var f=p.interactable,v=p.prepared.name;v&&f&&(f.options[v].manualStart||!lt(f,p.element,p.prepared,l)?p.stop():(p.start(p.prepared,f,p.element),Ii(p,l)))}})(n,i)},"interactions:stop":function(n,i){var a=n.interaction,l=a.interactable;l&&l.options.styleCursor&&Xt(a.element,"",i)}},maxInteractions:Nt,withinInteractionLimit:lt,validateAction:Ot},ni=Ri,Di={id:"auto-start/dragAxis",listeners:{"autoStart:before-start":function(n,i){var a=n.interaction,l=n.eventTarget,p=n.dx,f=n.dy;if(a.prepared.name==="drag"){var v=Math.abs(p),x=Math.abs(f),k=a.interactable.options.drag,z=k.startAxis,E=v>x?"x":v<x?"y":"xy";if(a.prepared.axis=k.lockAxis==="start"?E[0]:k.lockAxis,E!=="xy"&&z!=="xy"&&z!==E){a.prepared.name=null;for(var I=l,q=function(X){if(X!==a.interactable){var te=a.interactable.options.drag;if(!te.manualStart&&X.testIgnoreAllow(te,I,l)){var de=X.getAction(a.downPointer,a.downEvent,a,I);if(de&&de.name==="drag"&&(function(ce,me){if(!me)return!1;var Me=me.options.drag.startAxis;return ce==="xy"||Me==="xy"||Me===ce})(E,X)&&ni.validateAction(de,X,I,l,i))return X}}};_.element(I);){var Q=i.interactables.forEachMatch(I,q);if(Q){a.prepared.name="drag",a.interactable=Q,a.element=I;break}I=fe(I)}}}}}};function ri(n){var i=n.prepared&&n.prepared.name;if(!i)return null;var a=n.interactable.options;return a[i].hold||a[i].delay}var hi={id:"auto-start/hold",install:function(n){var i=n.defaults;n.usePlugin(ni),i.perAction.hold=0,i.perAction.delay=0},listeners:{"interactions:new":function(n){n.interaction.autoStartHoldTimer=null},"autoStart:prepared":function(n){var i=n.interaction,a=ri(i);a>0&&(i.autoStartHoldTimer=setTimeout((function(){i.start(i.prepared,i.interactable,i.element)}),a))},"interactions:move":function(n){var i=n.interaction,a=n.duplicate;i.autoStartHoldTimer&&i.pointerWasMoved&&!a&&(clearTimeout(i.autoStartHoldTimer),i.autoStartHoldTimer=null)},"autoStart:before-start":function(n){var i=n.interaction;ri(i)>0&&(i.prepared.name=null)}},getHoldDuration:ri},tn=hi,fi={id:"auto-start",install:function(n){n.usePlugin(ni),n.usePlugin(tn),n.usePlugin(Di)}},gi=function(n){return/^(always|never|auto)$/.test(n)?(this.options.preventDefault=n,this):_.bool(n)?(this.options.preventDefault=n?"always":"never",this):this.options.preventDefault};function nn(n){var i=n.interaction,a=n.event;i.interactable&&i.interactable.checkAndPreventDefault(a)}var mi={id:"core/interactablePreventDefault",install:function(n){var i=n.Interactable;i.prototype.preventDefault=gi,i.prototype.checkAndPreventDefault=function(a){return(function(l,p,f){var v=l.options.preventDefault;if(v!=="never")if(v!=="always"){if(p.events.supportsPassive&&/^touch(start|move)$/.test(f.type)){var x=C(f.target).document,k=p.getDocOptions(x);if(!k||!k.events||k.events.passive!==!1)return}/^(mouse|pointer|touch)*(down|start)/i.test(f.type)||_.element(f.target)&&Te(f.target,"input,select,textarea,[contenteditable=true],[contenteditable=true] *")||f.preventDefault()}else f.preventDefault()})(this,n,a)},n.interactions.docEvents.push({type:"dragstart",listener:function(a){for(var l=0,p=n.interactions.list;l<p.length;l++){var f=p[l];if(f.element&&(f.element===a.target||pe(f.element,a.target)))return void f.interactable.checkAndPreventDefault(a)}}})},listeners:["down","move","up","cancel"].reduce((function(n,i){return n["interactions:".concat(i)]=nn,n}),{})};function ai(n,i){if(i.phaselessTypes[n])return!0;for(var a in i.map)if(n.indexOf(a)===0&&n.substr(a.length)in i.phases)return!0;return!1}function qt(n){var i={};for(var a in n){var l=n[a];_.plainObject(l)?i[a]=qt(l):_.array(l)?i[a]=le(l):i[a]=l}return i}var oi=(function(){function n(i){r(this,n),this.states=[],this.startOffset={left:0,right:0,top:0,bottom:0},this.startDelta=void 0,this.result=void 0,this.endResult=void 0,this.startEdges=void 0,this.edges=void 0,this.interaction=void 0,this.interaction=i,this.result=Jt(),this.edges={left:!1,right:!1,top:!1,bottom:!1}}return c(n,[{key:"start",value:function(i,a){var l,p,f=i.phase,v=this.interaction,x=(function(z){var E=z.interactable.options[z.prepared.name],I=E.modifiers;return I&&I.length?I:["snap","snapSize","snapEdges","restrict","restrictEdges","restrictSize"].map((function(q){var Q=E[q];return Q&&Q.enabled&&{options:Q,methods:Q._methods}})).filter((function(q){return!!q}))})(v);this.prepareStates(x),this.startEdges=ne({},v.edges),this.edges=ne({},this.startEdges),this.startOffset=(l=v.rect,p=a,l?{left:p.x-l.left,top:p.y-l.top,right:l.right-p.x,bottom:l.bottom-p.y}:{left:0,top:0,right:0,bottom:0}),this.startDelta={x:0,y:0};var k=this.fillArg({phase:f,pageCoords:a,preEnd:!1});return this.result=Jt(),this.startAll(k),this.result=this.setAll(k)}},{key:"fillArg",value:function(i){var a=this.interaction;return i.interaction=a,i.interactable=a.interactable,i.element=a.element,i.rect||(i.rect=a.rect),i.edges||(i.edges=this.startEdges),i.startOffset=this.startOffset,i}},{key:"startAll",value:function(i){for(var a=0,l=this.states;a<l.length;a++){var p=l[a];p.methods.start&&(i.state=p,p.methods.start(i))}}},{key:"setAll",value:function(i){var a=i.phase,l=i.preEnd,p=i.skipModifiers,f=i.rect,v=i.edges;i.coords=ne({},i.pageCoords),i.rect=ne({},f),i.edges=ne({},v);for(var x=p?this.states.slice(p):this.states,k=Jt(i.coords,i.rect),z=0;z<x.length;z++){var E,I=x[z],q=I.options,Q=ne({},i.coords),X=null;(E=I.methods)!=null&&E.set&&this.shouldDo(q,l,a)&&(i.state=I,X=I.methods.set(i),Ee(i.edges,i.rect,{x:i.coords.x-Q.x,y:i.coords.y-Q.y})),k.eventProps.push(X)}ne(this.edges,i.edges),k.delta.x=i.coords.x-i.pageCoords.x,k.delta.y=i.coords.y-i.pageCoords.y,k.rectDelta.left=i.rect.left-f.left,k.rectDelta.right=i.rect.right-f.right,k.rectDelta.top=i.rect.top-f.top,k.rectDelta.bottom=i.rect.bottom-f.bottom;var te=this.result.coords,de=this.result.rect;if(te&&de){var ce=k.rect.left!==de.left||k.rect.right!==de.right||k.rect.top!==de.top||k.rect.bottom!==de.bottom;k.changed=ce||te.x!==k.coords.x||te.y!==k.coords.y}return k}},{key:"applyToInteraction",value:function(i){var a=this.interaction,l=i.phase,p=a.coords.cur,f=a.coords.start,v=this.result,x=this.startDelta,k=v.delta;l==="start"&&ne(this.startDelta,v.delta);for(var z=0,E=[[f,x],[p,k]];z<E.length;z++){var I=E[z],q=I[0],Q=I[1];q.page.x+=Q.x,q.page.y+=Q.y,q.client.x+=Q.x,q.client.y+=Q.y}var X=this.result.rectDelta,te=i.rect||a.rect;te.left+=X.left,te.right+=X.right,te.top+=X.top,te.bottom+=X.bottom,te.width=te.right-te.left,te.height=te.bottom-te.top}},{key:"setAndApply",value:function(i){var a=this.interaction,l=i.phase,p=i.preEnd,f=i.skipModifiers,v=this.setAll(this.fillArg({preEnd:p,phase:l,pageCoords:i.modifiedCoords||a.coords.cur.page}));if(this.result=v,!v.changed&&(!f||f<this.states.length)&&a.interacting())return!1;if(i.modifiedCoords){var x=a.coords.cur.page,k={x:i.modifiedCoords.x-x.x,y:i.modifiedCoords.y-x.y};v.coords.x+=k.x,v.coords.y+=k.y,v.delta.x+=k.x,v.delta.y+=k.y}this.applyToInteraction(i)}},{key:"beforeEnd",value:function(i){var a=i.interaction,l=i.event,p=this.states;if(p&&p.length){for(var f=!1,v=0;v<p.length;v++){var x=p[v];i.state=x;var k=x.options,z=x.methods,E=z.beforeEnd&&z.beforeEnd(i);if(E)return this.endResult=E,!1;f=f||!f&&this.shouldDo(k,!0,i.phase,!0)}f&&a.move({event:l,preEnd:!0})}}},{key:"stop",value:function(i){var a=i.interaction;if(this.states&&this.states.length){var l=ne({states:this.states,interactable:a.interactable,element:a.element,rect:null},i);this.fillArg(l);for(var p=0,f=this.states;p<f.length;p++){var v=f[p];l.state=v,v.methods.stop&&v.methods.stop(l)}this.states=null,this.endResult=null}}},{key:"prepareStates",value:function(i){this.states=[];for(var a=0;a<i.length;a++){var l=i[a],p=l.options,f=l.methods,v=l.name;this.states.push({options:p,methods:f,index:a,name:v})}return this.states}},{key:"restoreInteractionCoords",value:function(i){var a=i.interaction,l=a.coords,p=a.rect,f=a.modification;if(f.result){for(var v=f.startDelta,x=f.result,k=x.delta,z=x.rectDelta,E=0,I=[[l.start,v],[l.cur,k]];E<I.length;E++){var q=I[E],Q=q[0],X=q[1];Q.page.x-=X.x,Q.page.y-=X.y,Q.client.x-=X.x,Q.client.y-=X.y}p.left-=z.left,p.right-=z.right,p.top-=z.top,p.bottom-=z.bottom}}},{key:"shouldDo",value:function(i,a,l,p){return!(!i||i.enabled===!1||p&&!i.endOnly||i.endOnly&&!a||l==="start"&&!i.setStart)}},{key:"copyFrom",value:function(i){this.startOffset=i.startOffset,this.startDelta=i.startDelta,this.startEdges=i.startEdges,this.edges=i.edges,this.states=i.states.map((function(a){return qt(a)})),this.result=Jt(ne({},i.result.coords),ne({},i.result.rect))}},{key:"destroy",value:function(){for(var i in this)this[i]=null}}]),n})();function Jt(n,i){return{rect:i,coords:n,delta:{x:0,y:0},rectDelta:{left:0,right:0,top:0,bottom:0},eventProps:[],changed:!0}}function It(n,i){var a=n.defaults,l={start:n.start,set:n.set,beforeEnd:n.beforeEnd,stop:n.stop},p=function(f){var v=f||{};for(var x in v.enabled=v.enabled!==!1,a)x in v||(v[x]=a[x]);var k={options:v,methods:l,name:i,enable:function(){return v.enabled=!0,k},disable:function(){return v.enabled=!1,k}};return k};return i&&typeof i=="string"&&(p._defaults=a,p._methods=l),p}function $t(n){var i=n.iEvent,a=n.interaction.modification.result;a&&(i.modifiers=a.eventProps)}var Fi={id:"modifiers/base",before:["actions"],install:function(n){n.defaults.perAction.modifiers=[]},listeners:{"interactions:new":function(n){var i=n.interaction;i.modification=new oi(i)},"interactions:before-action-start":function(n){var i=n.interaction,a=n.interaction.modification;a.start(n,i.coords.start.page),i.edges=a.edges,a.applyToInteraction(n)},"interactions:before-action-move":function(n){var i=n.interaction,a=i.modification,l=a.setAndApply(n);return i.edges=a.edges,l},"interactions:before-action-end":function(n){var i=n.interaction,a=i.modification,l=a.beforeEnd(n);return i.edges=a.startEdges,l},"interactions:action-start":$t,"interactions:action-move":$t,"interactions:action-end":$t,"interactions:after-action-start":function(n){return n.interaction.modification.restoreInteractionCoords(n)},"interactions:after-action-move":function(n){return n.interaction.modification.restoreInteractionCoords(n)},"interactions:stop":function(n){return n.interaction.modification.stop(n)}}},yi=Fi,vi={base:{preventDefault:"auto",deltaSource:"page"},perAction:{enabled:!1,origin:{x:0,y:0}},actions:{}},si=(function(n){d(a,n);var i=b(a);function a(l,p,f,v,x,k,z){var E;r(this,a),(E=i.call(this,l)).relatedTarget=null,E.screenX=void 0,E.screenY=void 0,E.button=void 0,E.buttons=void 0,E.ctrlKey=void 0,E.shiftKey=void 0,E.altKey=void 0,E.metaKey=void 0,E.page=void 0,E.client=void 0,E.delta=void 0,E.rect=void 0,E.x0=void 0,E.y0=void 0,E.t0=void 0,E.dt=void 0,E.duration=void 0,E.clientX0=void 0,E.clientY0=void 0,E.velocity=void 0,E.speed=void 0,E.swipe=void 0,E.axes=void 0,E.preEnd=void 0,x=x||l.element;var I=l.interactable,q=(I&&I.options||vi).deltaSource,Q=Le(I,x,f),X=v==="start",te=v==="end",de=X?m(E):l.prevEvent,ce=X?l.coords.start:te?{page:de.page,client:de.client,timeStamp:l.coords.cur.timeStamp}:l.coords.cur;return E.page=ne({},ce.page),E.client=ne({},ce.client),E.rect=ne({},l.rect),E.timeStamp=ce.timeStamp,te||(E.page.x-=Q.x,E.page.y-=Q.y,E.client.x-=Q.x,E.client.y-=Q.y),E.ctrlKey=p.ctrlKey,E.altKey=p.altKey,E.shiftKey=p.shiftKey,E.metaKey=p.metaKey,E.button=p.button,E.buttons=p.buttons,E.target=x,E.currentTarget=x,E.preEnd=k,E.type=z||f+(v||""),E.interactable=I,E.t0=X?l.pointers[l.pointers.length-1].downTime:de.t0,E.x0=l.coords.start.page.x-Q.x,E.y0=l.coords.start.page.y-Q.y,E.clientX0=l.coords.start.client.x-Q.x,E.clientY0=l.coords.start.client.y-Q.y,E.delta=X||te?{x:0,y:0}:{x:E[q].x-de[q].x,y:E[q].y-de[q].y},E.dt=l.coords.delta.timeStamp,E.duration=E.timeStamp-E.t0,E.velocity=ne({},l.coords.velocity[q]),E.speed=pt(E.velocity.x,E.velocity.y),E.swipe=te||v==="inertiastart"?E.getSwipe():null,E}return c(a,[{key:"getSwipe",value:function(){var l=this._interaction;if(l.prevEvent.speed<600||this.timeStamp-l.prevEvent.timeStamp>150)return null;var p=180*Math.atan2(l.prevEvent.velocityY,l.prevEvent.velocityX)/Math.PI;p<0&&(p+=360);var f=112.5<=p&&p<247.5,v=202.5<=p&&p<337.5;return{up:v,down:!v&&22.5<=p&&p<157.5,left:f,right:!f&&(292.5<=p||p<67.5),angle:p,speed:l.prevEvent.speed,velocity:{x:l.prevEvent.velocityX,y:l.prevEvent.velocityY}}}},{key:"preventDefault",value:function(){}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}}]),a})(ue);Object.defineProperties(si.prototype,{pageX:{get:function(){return this.page.x},set:function(n){this.page.x=n}},pageY:{get:function(){return this.page.y},set:function(n){this.page.y=n}},clientX:{get:function(){return this.client.x},set:function(n){this.client.x=n}},clientY:{get:function(){return this.client.y},set:function(n){this.client.y=n}},dx:{get:function(){return this.delta.x},set:function(n){this.delta.x=n}},dy:{get:function(){return this.delta.y},set:function(n){this.delta.y=n}},velocityX:{get:function(){return this.velocity.x},set:function(n){this.velocity.x=n}},velocityY:{get:function(){return this.velocity.y},set:function(n){this.velocity.y=n}}});var Bi=c((function n(i,a,l,p,f){r(this,n),this.id=void 0,this.pointer=void 0,this.event=void 0,this.downTime=void 0,this.downTarget=void 0,this.id=i,this.pointer=a,this.event=l,this.downTime=p,this.downTarget=f})),Ni=(function(n){return n.interactable="",n.element="",n.prepared="",n.pointerIsDown="",n.pointerWasMoved="",n._proxy="",n})({}),bi=(function(n){return n.start="",n.move="",n.end="",n.stop="",n.interacting="",n})({}),qi=0,Hi=(function(){function n(i){var a=this,l=i.pointerType,p=i.scopeFire;r(this,n),this.interactable=null,this.element=null,this.rect=null,this._rects=void 0,this.edges=null,this._scopeFire=void 0,this.prepared={name:null,axis:null,edges:null},this.pointerType=void 0,this.pointers=[],this.downEvent=null,this.downPointer={},this._latestPointer={pointer:null,event:null,eventTarget:null},this.prevEvent=null,this.pointerIsDown=!1,this.pointerWasMoved=!1,this._interacting=!1,this._ending=!1,this._stopped=!0,this._proxy=void 0,this.simulation=null,this.doMove=be((function(E){this.move(E)}),"The interaction.doMove() method has been renamed to interaction.move()"),this.coords={start:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},prev:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},cur:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},delta:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},velocity:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0}},this._id=qi++,this._scopeFire=p,this.pointerType=l;var f=this;this._proxy={};var v=function(E){Object.defineProperty(a._proxy,E,{get:function(){return f[E]}})};for(var x in Ni)v(x);var k=function(E){Object.defineProperty(a._proxy,E,{value:function(){return f[E].apply(f,arguments)}})};for(var z in bi)k(z);this._scopeFire("interactions:new",{interaction:this})}return c(n,[{key:"pointerMoveTolerance",get:function(){return 1}},{key:"pointerDown",value:function(i,a,l){var p=this.updatePointer(i,a,l,!0),f=this.pointers[p];this._scopeFire("interactions:down",{pointer:i,event:a,eventTarget:l,pointerIndex:p,pointerInfo:f,type:"down",interaction:this})}},{key:"start",value:function(i,a,l){return!(this.interacting()||!this.pointerIsDown||this.pointers.length<(i.name==="gesture"?2:1)||!a.options[i.name].enabled)&&(Be(this.prepared,i),this.interactable=a,this.element=l,this.rect=a.getRect(l),this.edges=this.prepared.edges?ne({},this.prepared.edges):{left:!0,right:!0,top:!0,bottom:!0},this._stopped=!1,this._interacting=this._doPhase({interaction:this,event:this.downEvent,phase:"start"})&&!this._stopped,this._interacting)}},{key:"pointerMove",value:function(i,a,l){this.simulation||this.modification&&this.modification.endResult||this.updatePointer(i,a,l,!1);var p,f,v=this.coords.cur.page.x===this.coords.prev.page.x&&this.coords.cur.page.y===this.coords.prev.page.y&&this.coords.cur.client.x===this.coords.prev.client.x&&this.coords.cur.client.y===this.coords.prev.client.y;this.pointerIsDown&&!this.pointerWasMoved&&(p=this.coords.cur.client.x-this.coords.start.client.x,f=this.coords.cur.client.y-this.coords.start.client.y,this.pointerWasMoved=pt(p,f)>this.pointerMoveTolerance);var x,k,z,E=this.getPointerIndex(i),I={pointer:i,pointerIndex:E,pointerInfo:this.pointers[E],event:a,type:"move",eventTarget:l,dx:p,dy:f,duplicate:v,interaction:this};v||(x=this.coords.velocity,k=this.coords.delta,z=Math.max(k.timeStamp/1e3,.001),x.page.x=k.page.x/z,x.page.y=k.page.y/z,x.client.x=k.client.x/z,x.client.y=k.client.y/z,x.timeStamp=z),this._scopeFire("interactions:move",I),v||this.simulation||(this.interacting()&&(I.type=null,this.move(I)),this.pointerWasMoved&&Ct(this.coords.prev,this.coords.cur))}},{key:"move",value:function(i){i&&i.event||Lt(this.coords.delta),(i=ne({pointer:this._latestPointer.pointer,event:this._latestPointer.event,eventTarget:this._latestPointer.eventTarget,interaction:this},i||{})).phase="move",this._doPhase(i)}},{key:"pointerUp",value:function(i,a,l,p){var f=this.getPointerIndex(i);f===-1&&(f=this.updatePointer(i,a,l,!1));var v=/cancel$/i.test(a.type)?"cancel":"up";this._scopeFire("interactions:".concat(v),{pointer:i,pointerIndex:f,pointerInfo:this.pointers[f],event:a,eventTarget:l,type:v,curEventTarget:p,interaction:this}),this.simulation||this.end(a),this.removePointer(i,a)}},{key:"documentBlur",value:function(i){this.end(i),this._scopeFire("interactions:blur",{event:i,type:"blur",interaction:this})}},{key:"end",value:function(i){var a;this._ending=!0,i=i||this._latestPointer.event,this.interacting()&&(a=this._doPhase({event:i,interaction:this,phase:"end"})),this._ending=!1,a===!0&&this.stop()}},{key:"currentAction",value:function(){return this._interacting?this.prepared.name:null}},{key:"interacting",value:function(){return this._interacting}},{key:"stop",value:function(){this._scopeFire("interactions:stop",{interaction:this}),this.interactable=this.element=null,this._interacting=!1,this._stopped=!0,this.prepared.name=this.prevEvent=null}},{key:"getPointerIndex",value:function(i){var a=st(i);return this.pointerType==="mouse"||this.pointerType==="pen"?this.pointers.length-1:_e(this.pointers,(function(l){return l.id===a}))}},{key:"getPointerInfo",value:function(i){return this.pointers[this.getPointerIndex(i)]}},{key:"updatePointer",value:function(i,a,l,p){var f,v,x,k=st(i),z=this.getPointerIndex(i),E=this.pointers[z];return p=p!==!1&&(p||/(down|start)$/i.test(a.type)),E?E.pointer=i:(E=new Bi(k,i,a,null,null),z=this.pointers.length,this.pointers.push(E)),Yt(this.coords.cur,this.pointers.map((function(I){return I.pointer})),this._now()),f=this.coords.delta,v=this.coords.prev,x=this.coords.cur,f.page.x=x.page.x-v.page.x,f.page.y=x.page.y-v.page.y,f.client.x=x.client.x-v.client.x,f.client.y=x.client.y-v.client.y,f.timeStamp=x.timeStamp-v.timeStamp,p&&(this.pointerIsDown=!0,E.downTime=this.coords.cur.timeStamp,E.downTarget=l,kt(this.downPointer,i),this.interacting()||(Ct(this.coords.start,this.coords.cur),Ct(this.coords.prev,this.coords.cur),this.downEvent=a,this.pointerWasMoved=!1)),this._updateLatestPointer(i,a,l),this._scopeFire("interactions:update-pointer",{pointer:i,event:a,eventTarget:l,down:p,pointerInfo:E,pointerIndex:z,interaction:this}),z}},{key:"removePointer",value:function(i,a){var l=this.getPointerIndex(i);if(l!==-1){var p=this.pointers[l];this._scopeFire("interactions:remove-pointer",{pointer:i,event:a,eventTarget:null,pointerIndex:l,pointerInfo:p,interaction:this}),this.pointers.splice(l,1),this.pointerIsDown=!1}}},{key:"_updateLatestPointer",value:function(i,a,l){this._latestPointer.pointer=i,this._latestPointer.event=a,this._latestPointer.eventTarget=l}},{key:"destroy",value:function(){this._latestPointer.pointer=null,this._latestPointer.event=null,this._latestPointer.eventTarget=null}},{key:"_createPreparedEvent",value:function(i,a,l,p){return new si(this,i,this.prepared.name,a,this.element,l,p)}},{key:"_fireEvent",value:function(i){var a;(a=this.interactable)==null||a.fire(i),(!this.prevEvent||i.timeStamp>=this.prevEvent.timeStamp)&&(this.prevEvent=i)}},{key:"_doPhase",value:function(i){var a=i.event,l=i.phase,p=i.preEnd,f=i.type,v=this.rect;if(v&&l==="move"&&(Ee(this.edges,v,this.coords.delta[this.interactable.options.deltaSource]),v.width=v.right-v.left,v.height=v.bottom-v.top),this._scopeFire("interactions:before-action-".concat(l),i)===!1)return!1;var x=i.iEvent=this._createPreparedEvent(a,l,p,f);return this._scopeFire("interactions:action-".concat(l),i),l==="start"&&(this.prevEvent=x),this._fireEvent(x),this._scopeFire("interactions:after-action-".concat(l),i),!0}},{key:"_now",value:function(){return Date.now()}}]),n})();function _i(n){ci(n.interaction)}function ci(n){if(!(function(a){return!(!a.offset.pending.x&&!a.offset.pending.y)})(n))return!1;var i=n.offset.pending;return xi(n.coords.cur,i),xi(n.coords.delta,i),Ee(n.edges,n.rect,i),i.x=0,i.y=0,!0}function rn(n){var i=n.x,a=n.y;this.offset.pending.x+=i,this.offset.pending.y+=a,this.offset.total.x+=i,this.offset.total.y+=a}function xi(n,i){var a=n.page,l=n.client,p=i.x,f=i.y;a.x+=p,a.y+=f,l.x+=p,l.y+=f}bi.offsetBy="";var wi={id:"offset",before:["modifiers","pointer-events","actions","inertia"],install:function(n){n.Interaction.prototype.offsetBy=rn},listeners:{"interactions:new":function(n){n.interaction.offset={total:{x:0,y:0},pending:{x:0,y:0}}},"interactions:update-pointer":function(n){return(function(i){i.pointerIsDown&&(xi(i.coords.cur,i.offset.total),i.offset.pending.x=0,i.offset.pending.y=0)})(n.interaction)},"interactions:before-action-start":_i,"interactions:before-action-move":_i,"interactions:before-action-end":function(n){var i=n.interaction;if(ci(i))return i.move({offset:!0}),i.end(),!1},"interactions:stop":function(n){var i=n.interaction;i.offset.total.x=0,i.offset.total.y=0,i.offset.pending.x=0,i.offset.pending.y=0}}},Si=wi,ji=(function(){function n(i){r(this,n),this.active=!1,this.isModified=!1,this.smoothEnd=!1,this.allowResume=!1,this.modification=void 0,this.modifierCount=0,this.modifierArg=void 0,this.startCoords=void 0,this.t0=0,this.v0=0,this.te=0,this.targetOffset=void 0,this.modifiedOffset=void 0,this.currentOffset=void 0,this.lambda_v0=0,this.one_ve_v0=0,this.timeout=void 0,this.interaction=void 0,this.interaction=i}return c(n,[{key:"start",value:function(i){var a=this.interaction,l=Qt(a);if(!l||!l.enabled)return!1;var p=a.coords.velocity.client,f=pt(p.x,p.y),v=this.modification||(this.modification=new oi(a));if(v.copyFrom(a.modification),this.t0=a._now(),this.allowResume=l.allowResume,this.v0=f,this.currentOffset={x:0,y:0},this.startCoords=a.coords.cur.page,this.modifierArg=v.fillArg({pageCoords:this.startCoords,preEnd:!0,phase:"inertiastart"}),this.t0-a.coords.cur.timeStamp<50&&f>l.minSpeed&&f>l.endSpeed)this.startInertia();else{if(v.result=v.setAll(this.modifierArg),!v.result.changed)return!1;this.startSmoothEnd()}return a.modification.result.rect=null,a.offsetBy(this.targetOffset),a._doPhase({interaction:a,event:i,phase:"inertiastart"}),a.offsetBy({x:-this.targetOffset.x,y:-this.targetOffset.y}),a.modification.result.rect=null,this.active=!0,a.simulation=this,!0}},{key:"startInertia",value:function(){var i=this,a=this.interaction.coords.velocity.client,l=Qt(this.interaction),p=l.resistance,f=-Math.log(l.endSpeed/this.v0)/p;this.targetOffset={x:(a.x-f)/p,y:(a.y-f)/p},this.te=f,this.lambda_v0=p/this.v0,this.one_ve_v0=1-l.endSpeed/this.v0;var v=this.modification,x=this.modifierArg;x.pageCoords={x:this.startCoords.x+this.targetOffset.x,y:this.startCoords.y+this.targetOffset.y},v.result=v.setAll(x),v.result.changed&&(this.isModified=!0,this.modifiedOffset={x:this.targetOffset.x+v.result.delta.x,y:this.targetOffset.y+v.result.delta.y}),this.onNextFrame((function(){return i.inertiaTick()}))}},{key:"startSmoothEnd",value:function(){var i=this;this.smoothEnd=!0,this.isModified=!0,this.targetOffset={x:this.modification.result.delta.x,y:this.modification.result.delta.y},this.onNextFrame((function(){return i.smoothEndTick()}))}},{key:"onNextFrame",value:function(i){var a=this;this.timeout=B.request((function(){a.active&&i()}))}},{key:"inertiaTick",value:function(){var i,a,l,p,f,v,x,k=this,z=this.interaction,E=Qt(z).resistance,I=(z._now()-this.t0)/1e3;if(I<this.te){var q,Q=1-(Math.exp(-E*I)-this.lambda_v0)/this.one_ve_v0;this.isModified?(i=0,a=0,l=this.targetOffset.x,p=this.targetOffset.y,f=this.modifiedOffset.x,v=this.modifiedOffset.y,q={x:ki(x=Q,i,l,f),y:ki(x,a,p,v)}):q={x:this.targetOffset.x*Q,y:this.targetOffset.y*Q};var X={x:q.x-this.currentOffset.x,y:q.y-this.currentOffset.y};this.currentOffset.x+=X.x,this.currentOffset.y+=X.y,z.offsetBy(X),z.move(),this.onNextFrame((function(){return k.inertiaTick()}))}else z.offsetBy({x:this.modifiedOffset.x-this.currentOffset.x,y:this.modifiedOffset.y-this.currentOffset.y}),this.end()}},{key:"smoothEndTick",value:function(){var i=this,a=this.interaction,l=a._now()-this.t0,p=Qt(a).smoothEndDuration;if(l<p){var f={x:Ze(l,0,this.targetOffset.x,p),y:Ze(l,0,this.targetOffset.y,p)},v={x:f.x-this.currentOffset.x,y:f.y-this.currentOffset.y};this.currentOffset.x+=v.x,this.currentOffset.y+=v.y,a.offsetBy(v),a.move({skipModifiers:this.modifierCount}),this.onNextFrame((function(){return i.smoothEndTick()}))}else a.offsetBy({x:this.targetOffset.x-this.currentOffset.x,y:this.targetOffset.y-this.currentOffset.y}),this.end()}},{key:"resume",value:function(i){var a=i.pointer,l=i.event,p=i.eventTarget,f=this.interaction;f.offsetBy({x:-this.currentOffset.x,y:-this.currentOffset.y}),f.updatePointer(a,l,p,!0),f._doPhase({interaction:f,event:l,phase:"resume"}),Ct(f.coords.prev,f.coords.cur),this.stop()}},{key:"end",value:function(){this.interaction.move(),this.interaction.end(),this.stop()}},{key:"stop",value:function(){this.active=this.smoothEnd=!1,this.interaction.simulation=null,B.cancel(this.timeout)}}]),n})();function Qt(n){var i=n.interactable,a=n.prepared;return i&&i.options&&a.name&&i.options[a.name].inertia}var Wi={id:"inertia",before:["modifiers","actions"],install:function(n){var i=n.defaults;n.usePlugin(Si),n.usePlugin(yi),n.actions.phases.inertiastart=!0,n.actions.phases.resume=!0,i.perAction.inertia={enabled:!1,resistance:10,minSpeed:100,endSpeed:10,allowResume:!0,smoothEndDuration:300}},listeners:{"interactions:new":function(n){var i=n.interaction;i.inertia=new ji(i)},"interactions:before-action-end":function(n){var i=n.interaction,a=n.event;return(!i._interacting||i.simulation||!i.inertia.start(a))&&null},"interactions:down":function(n){var i=n.interaction,a=n.eventTarget,l=i.inertia;if(l.active)for(var p=a;_.element(p);){if(p===i.element){l.resume(n);break}p=fe(p)}},"interactions:stop":function(n){var i=n.interaction.inertia;i.active&&i.stop()},"interactions:before-action-resume":function(n){var i=n.interaction.modification;i.stop(n),i.start(n,n.interaction.coords.cur.page),i.applyToInteraction(n)},"interactions:before-action-inertiastart":function(n){return n.interaction.modification.setAndApply(n)},"interactions:action-resume":$t,"interactions:action-inertiastart":$t,"interactions:after-action-inertiastart":function(n){return n.interaction.modification.restoreInteractionCoords(n)},"interactions:after-action-resume":function(n){return n.interaction.modification.restoreInteractionCoords(n)}}};function ki(n,i,a,l){var p=1-n;return p*p*i+2*p*n*a+n*n*l}function Ze(n,i,a,l){return-a*(n/=l)*(n-2)+i}var _t=Wi;function Tn(n,i){for(var a=0;a<i.length;a++){var l=i[a];if(n.immediatePropagationStopped)break;l(n)}}var zn=(function(){function n(i){r(this,n),this.options=void 0,this.types={},this.propagationStopped=!1,this.immediatePropagationStopped=!1,this.global=void 0,this.options=ne({},i||{})}return c(n,[{key:"fire",value:function(i){var a,l=this.global;(a=this.types[i.type])&&Tn(i,a),!i.propagationStopped&&l&&(a=l[i.type])&&Tn(i,a)}},{key:"on",value:function(i,a){var l=Ae(i,a);for(i in l)this.types[i]=ve(this.types[i]||[],l[i])}},{key:"off",value:function(i,a){var l=Ae(i,a);for(i in l){var p=this.types[i];if(p&&p.length)for(var f=0,v=l[i];f<v.length;f++){var x=v[f],k=p.indexOf(x);k!==-1&&p.splice(k,1)}}}},{key:"getRect",value:function(i){return null}}]),n})(),Vr=(function(){function n(i){r(this,n),this.currentTarget=void 0,this.originalEvent=void 0,this.type=void 0,this.originalEvent=i,kt(this,i)}return c(n,[{key:"preventOriginalDefault",value:function(){this.originalEvent.preventDefault()}},{key:"stopPropagation",value:function(){this.originalEvent.stopPropagation()}},{key:"stopImmediatePropagation",value:function(){this.originalEvent.stopImmediatePropagation()}}]),n})();function Ci(n){return _.object(n)?{capture:!!n.capture,passive:!!n.passive}:{capture:!!n,passive:!1}}function Yi(n,i){return n===i||(typeof n=="boolean"?!!i.capture===n&&!i.passive:!!n.capture==!!i.capture&&!!n.passive==!!i.passive)}var Gr={id:"events",install:function(n){var i,a=[],l={},p=[],f={add:v,remove:x,addDelegate:function(E,I,q,Q,X){var te=Ci(X);if(!l[q]){l[q]=[];for(var de=0;de<p.length;de++){var ce=p[de];v(ce,q,k),v(ce,q,z,!0)}}var me=l[q],Me=W(me,(function(He){return He.selector===E&&He.context===I}));Me||(Me={selector:E,context:I,listeners:[]},me.push(Me)),Me.listeners.push({func:Q,options:te})},removeDelegate:function(E,I,q,Q,X){var te,de=Ci(X),ce=l[q],me=!1;if(ce)for(te=ce.length-1;te>=0;te--){var Me=ce[te];if(Me.selector===E&&Me.context===I){for(var He=Me.listeners,Se=He.length-1;Se>=0;Se--){var Ie=He[Se];if(Ie.func===Q&&Yi(Ie.options,de)){He.splice(Se,1),He.length||(ce.splice(te,1),x(I,q,k),x(I,q,z,!0)),me=!0;break}}if(me)break}}},delegateListener:k,delegateUseCapture:z,delegatedEvents:l,documents:p,targets:a,supportsOptions:!1,supportsPassive:!1};function v(E,I,q,Q){if(E.addEventListener){var X=Ci(Q),te=W(a,(function(de){return de.eventTarget===E}));te||(te={eventTarget:E,events:{}},a.push(te)),te.events[I]||(te.events[I]=[]),W(te.events[I],(function(de){return de.func===q&&Yi(de.options,X)}))||(E.addEventListener(I,q,f.supportsOptions?X:X.capture),te.events[I].push({func:q,options:X}))}}function x(E,I,q,Q){if(E.addEventListener&&E.removeEventListener){var X=_e(a,(function(wt){return wt.eventTarget===E})),te=a[X];if(te&&te.events)if(I!=="all"){var de=!1,ce=te.events[I];if(ce){if(q==="all"){for(var me=ce.length-1;me>=0;me--){var Me=ce[me];x(E,I,Me.func,Me.options)}return}for(var He=Ci(Q),Se=0;Se<ce.length;Se++){var Ie=ce[Se];if(Ie.func===q&&Yi(Ie.options,He)){E.removeEventListener(I,q,f.supportsOptions?He:He.capture),ce.splice(Se,1),ce.length===0&&(delete te.events[I],de=!0);break}}}de&&!Object.keys(te.events).length&&a.splice(X,1)}else for(I in te.events)te.events.hasOwnProperty(I)&&x(E,I,"all")}}function k(E,I){for(var q=Ci(I),Q=new Vr(E),X=l[E.type],te=$(E)[0],de=te;_.element(de);){for(var ce=0;ce<X.length;ce++){var me=X[ce],Me=me.selector,He=me.context;if(Te(de,Me)&&pe(He,te)&&pe(He,de)){var Se=me.listeners;Q.currentTarget=de;for(var Ie=0;Ie<Se.length;Ie++){var wt=Se[Ie];Yi(wt.options,q)&&wt.func(Q)}}}de=fe(de)}}function z(E){return k(E,!0)}return(i=n.document)==null||i.createElement("div").addEventListener("test",null,{get capture(){return f.supportsOptions=!0},get passive(){return f.supportsPassive=!0}}),n.events=f,f}},an={methodOrder:["simulationResume","mouseOrPen","hasPointer","idle"],search:function(n){for(var i=0,a=an.methodOrder;i<a.length;i++){var l=a[i],p=an[l](n);if(p)return p}return null},simulationResume:function(n){var i=n.pointerType,a=n.eventType,l=n.eventTarget,p=n.scope;if(!/down|start/i.test(a))return null;for(var f=0,v=p.interactions.list;f<v.length;f++){var x=v[f],k=l;if(x.simulation&&x.simulation.allowResume&&x.pointerType===i)for(;k;){if(k===x.element)return x;k=fe(k)}}return null},mouseOrPen:function(n){var i,a=n.pointerId,l=n.pointerType,p=n.eventType,f=n.scope;if(l!=="mouse"&&l!=="pen")return null;for(var v=0,x=f.interactions.list;v<x.length;v++){var k=x[v];if(k.pointerType===l){if(k.simulation&&!Ln(k,a))continue;if(k.interacting())return k;i||(i=k)}}if(i)return i;for(var z=0,E=f.interactions.list;z<E.length;z++){var I=E[z];if(!(I.pointerType!==l||/down/i.test(p)&&I.simulation))return I}return null},hasPointer:function(n){for(var i=n.pointerId,a=0,l=n.scope.interactions.list;a<l.length;a++){var p=l[a];if(Ln(p,i))return p}return null},idle:function(n){for(var i=n.pointerType,a=0,l=n.scope.interactions.list;a<l.length;a++){var p=l[a];if(p.pointers.length===1){var f=p.interactable;if(f&&(!f.options.gesture||!f.options.gesture.enabled))continue}else if(p.pointers.length>=2)continue;if(!p.interacting()&&i===p.pointerType)return p}return null}};function Ln(n,i){return n.pointers.some((function(a){return a.id===i}))}var Xr=an,on=["pointerDown","pointerMove","pointerUp","updatePointer","removePointer","windowBlur"];function Mn(n,i){return function(a){var l=i.interactions.list,p=j(a),f=$(a),v=f[0],x=f[1],k=[];if(/^touch/.test(a.type)){i.prevTouchTime=i.now();for(var z=0,E=a.changedTouches;z<E.length;z++){var I=E[z],q={pointer:I,pointerId:st(I),pointerType:p,eventType:a.type,eventTarget:v,curEventTarget:x,scope:i},Q=Pn(q);k.push([q.pointer,q.eventTarget,q.curEventTarget,Q])}}else{var X=!1;if(!ee.supportsPointerEvent&&/mouse/.test(a.type)){for(var te=0;te<l.length&&!X;te++)X=l[te].pointerType!=="mouse"&&l[te].pointerIsDown;X=X||i.now()-i.prevTouchTime<500||a.timeStamp===0}if(!X){var de={pointer:a,pointerId:st(a),pointerType:p,eventType:a.type,curEventTarget:x,eventTarget:v,scope:i},ce=Pn(de);k.push([de.pointer,de.eventTarget,de.curEventTarget,ce])}}for(var me=0;me<k.length;me++){var Me=k[me],He=Me[0],Se=Me[1],Ie=Me[2];Me[3][n](He,a,Se,Ie)}}}function Pn(n){var i=n.pointerType,a=n.scope,l={interaction:Xr.search(n),searchDetails:n};return a.fire("interactions:find",l),l.interaction||a.interactions.new({pointerType:i})}function sn(n,i){var a=n.doc,l=n.scope,p=n.options,f=l.interactions.docEvents,v=l.events,x=v[i];for(var k in l.browser.isIOS&&!p.events&&(p.events={passive:!1}),v.delegatedEvents)x(a,k,v.delegateListener),x(a,k,v.delegateUseCapture,!0);for(var z=p&&p.events,E=0;E<f.length;E++){var I=f[E];x(a,I.type,I.listener,z)}}var Jr={id:"core/interactions",install:function(n){for(var i={},a=0;a<on.length;a++){var l=on[a];i[l]=Mn(l,n)}var p,f=ee.pEventTypes;function v(){for(var x=0,k=n.interactions.list;x<k.length;x++){var z=k[x];if(z.pointerIsDown&&z.pointerType==="touch"&&!z._interacting)for(var E=function(){var Q=q[I];n.documents.some((function(X){return pe(X.doc,Q.downTarget)}))||z.removePointer(Q.pointer,Q.event)},I=0,q=z.pointers;I<q.length;I++)E()}}(p=H.PointerEvent?[{type:f.down,listener:v},{type:f.down,listener:i.pointerDown},{type:f.move,listener:i.pointerMove},{type:f.up,listener:i.pointerUp},{type:f.cancel,listener:i.pointerUp}]:[{type:"mousedown",listener:i.pointerDown},{type:"mousemove",listener:i.pointerMove},{type:"mouseup",listener:i.pointerUp},{type:"touchstart",listener:v},{type:"touchstart",listener:i.pointerDown},{type:"touchmove",listener:i.pointerMove},{type:"touchend",listener:i.pointerUp},{type:"touchcancel",listener:i.pointerUp}]).push({type:"blur",listener:function(x){for(var k=0,z=n.interactions.list;k<z.length;k++)z[k].documentBlur(x)}}),n.prevTouchTime=0,n.Interaction=(function(x){d(z,x);var k=b(z);function z(){return r(this,z),k.apply(this,arguments)}return c(z,[{key:"pointerMoveTolerance",get:function(){return n.interactions.pointerMoveTolerance},set:function(E){n.interactions.pointerMoveTolerance=E}},{key:"_now",value:function(){return n.now()}}]),z})(Hi),n.interactions={list:[],new:function(x){x.scopeFire=function(z,E){return n.fire(z,E)};var k=new n.Interaction(x);return n.interactions.list.push(k),k},listeners:i,docEvents:p,pointerMoveTolerance:1},n.usePlugin(mi)},listeners:{"scope:add-document":function(n){return sn(n,"add")},"scope:remove-document":function(n){return sn(n,"remove")},"interactable:unset":function(n,i){for(var a=n.interactable,l=i.interactions.list.length-1;l>=0;l--){var p=i.interactions.list[l];p.interactable===a&&(p.stop(),i.fire("interactions:destroy",{interaction:p}),p.destroy(),i.interactions.list.length>2&&i.interactions.list.splice(l,1))}}},onDocSignal:sn,doOnInteractions:Mn,methodNames:on},Qr=Jr,Kt=(function(n){return n[n.On=0]="On",n[n.Off=1]="Off",n})(Kt||{}),Zr=(function(){function n(i,a,l,p){r(this,n),this.target=void 0,this.options=void 0,this._actions=void 0,this.events=new zn,this._context=void 0,this._win=void 0,this._doc=void 0,this._scopeEvents=void 0,this._actions=a.actions,this.target=i,this._context=a.context||l,this._win=C(nt(i)?this._context:i),this._doc=this._win.document,this._scopeEvents=p,this.set(a)}return c(n,[{key:"_defaults",get:function(){return{base:{},perAction:{},actions:{}}}},{key:"setOnEvents",value:function(i,a){return _.func(a.onstart)&&this.on("".concat(i,"start"),a.onstart),_.func(a.onmove)&&this.on("".concat(i,"move"),a.onmove),_.func(a.onend)&&this.on("".concat(i,"end"),a.onend),_.func(a.oninertiastart)&&this.on("".concat(i,"inertiastart"),a.oninertiastart),this}},{key:"updatePerActionListeners",value:function(i,a,l){var p,f=this,v=(p=this._actions.map[i])==null?void 0:p.filterEventType,x=function(k){return(v==null||v(k))&&ai(k,f._actions)};(_.array(a)||_.object(a))&&this._onOff(Kt.Off,i,a,void 0,x),(_.array(l)||_.object(l))&&this._onOff(Kt.On,i,l,void 0,x)}},{key:"setPerAction",value:function(i,a){var l=this._defaults;for(var p in a){var f=p,v=this.options[i],x=a[f];f==="listeners"&&this.updatePerActionListeners(i,v.listeners,x),_.array(x)?v[f]=le(x):_.plainObject(x)?(v[f]=ne(v[f]||{},qt(x)),_.object(l.perAction[f])&&"enabled"in l.perAction[f]&&(v[f].enabled=x.enabled!==!1)):_.bool(x)&&_.object(l.perAction[f])?v[f].enabled=x:v[f]=x}}},{key:"getRect",value:function(i){return i=i||(_.element(this.target)?this.target:null),_.string(this.target)&&(i=i||this._context.querySelector(this.target)),at(i)}},{key:"rectChecker",value:function(i){var a=this;return _.func(i)?(this.getRect=function(l){var p=ne({},i.apply(a,l));return"width"in p||(p.width=p.right-p.left,p.height=p.bottom-p.top),p},this):i===null?(delete this.getRect,this):this.getRect}},{key:"_backCompatOption",value:function(i,a){if(nt(a)||_.object(a)){for(var l in this.options[i]=a,this._actions.map)this.options[l][i]=a;return this}return this.options[i]}},{key:"origin",value:function(i){return this._backCompatOption("origin",i)}},{key:"deltaSource",value:function(i){return i==="page"||i==="client"?(this.options.deltaSource=i,this):this.options.deltaSource}},{key:"getAllElements",value:function(){var i=this.target;return _.string(i)?Array.from(this._context.querySelectorAll(i)):_.func(i)&&i.getAllElements?i.getAllElements():_.element(i)?[i]:[]}},{key:"context",value:function(){return this._context}},{key:"inContext",value:function(i){return this._context===i.ownerDocument||pe(this._context,i)}},{key:"testIgnoreAllow",value:function(i,a,l){return!this.testIgnore(i.ignoreFrom,a,l)&&this.testAllow(i.allowFrom,a,l)}},{key:"testAllow",value:function(i,a,l){return!i||!!_.element(l)&&(_.string(i)?Xe(l,i,a):!!_.element(i)&&pe(i,l))}},{key:"testIgnore",value:function(i,a,l){return!(!i||!_.element(l))&&(_.string(i)?Xe(l,i,a):!!_.element(i)&&pe(i,l))}},{key:"fire",value:function(i){return this.events.fire(i),this}},{key:"_onOff",value:function(i,a,l,p,f){_.object(a)&&!_.array(a)&&(p=l,l=null);var v=Ae(a,l,f);for(var x in v){x==="wheel"&&(x=ee.wheelEvent);for(var k=0,z=v[x];k<z.length;k++){var E=z[k];ai(x,this._actions)?this.events[i===Kt.On?"on":"off"](x,E):_.string(this.target)?this._scopeEvents[i===Kt.On?"addDelegate":"removeDelegate"](this.target,this._context,x,E,p):this._scopeEvents[i===Kt.On?"add":"remove"](this.target,x,E,p)}}return this}},{key:"on",value:function(i,a,l){return this._onOff(Kt.On,i,a,l)}},{key:"off",value:function(i,a,l){return this._onOff(Kt.Off,i,a,l)}},{key:"set",value:function(i){var a=this._defaults;for(var l in _.object(i)||(i={}),this.options=qt(a.base),this._actions.methodDict){var p=l,f=this._actions.methodDict[p];this.options[p]={},this.setPerAction(p,ne(ne({},a.perAction),a.actions[p])),this[f](i[p])}for(var v in i)v!=="getRect"?_.func(this[v])&&this[v](i[v]):this.rectChecker(i.getRect);return this}},{key:"unset",value:function(){if(_.string(this.target))for(var i in this._scopeEvents.delegatedEvents)for(var a=this._scopeEvents.delegatedEvents[i],l=a.length-1;l>=0;l--){var p=a[l],f=p.selector,v=p.context,x=p.listeners;f===this.target&&v===this._context&&a.splice(l,1);for(var k=x.length-1;k>=0;k--)this._scopeEvents.removeDelegate(this.target,this._context,i,x[k][0],x[k][1])}else this._scopeEvents.remove(this.target,"all")}}]),n})(),ea=(function(){function n(i){var a=this;r(this,n),this.list=[],this.selectorMap={},this.scope=void 0,this.scope=i,i.addListeners({"interactable:unset":function(l){var p=l.interactable,f=p.target,v=_.string(f)?a.selectorMap[f]:f[a.scope.id],x=_e(v,(function(k){return k===p}));v.splice(x,1)}})}return c(n,[{key:"new",value:function(i,a){a=ne(a||{},{actions:this.scope.actions});var l=new this.scope.Interactable(i,a,this.scope.document,this.scope.events);return this.scope.addDocument(l._doc),this.list.push(l),_.string(i)?(this.selectorMap[i]||(this.selectorMap[i]=[]),this.selectorMap[i].push(l)):(l.target[this.scope.id]||Object.defineProperty(i,this.scope.id,{value:[],configurable:!0}),i[this.scope.id].push(l)),this.scope.fire("interactable:new",{target:i,options:a,interactable:l,win:this.scope._win}),l}},{key:"getExisting",value:function(i,a){var l=a&&a.context||this.scope.document,p=_.string(i),f=p?this.selectorMap[i]:i[this.scope.id];if(f)return W(f,(function(v){return v._context===l&&(p||v.inContext(i))}))}},{key:"forEachMatch",value:function(i,a){for(var l=0,p=this.list;l<p.length;l++){var f=p[l],v=void 0;if((_.string(f.target)?_.element(i)&&Te(i,f.target):i===f.target)&&f.inContext(i)&&(v=a(f)),v!==void 0)return v}}}]),n})(),ta=(function(){function n(){var i=this;r(this,n),this.id="__interact_scope_".concat(Math.floor(100*Math.random())),this.isInitialized=!1,this.listenerMaps=[],this.browser=ee,this.defaults=qt(vi),this.Eventable=zn,this.actions={map:{},phases:{start:!0,move:!0,end:!0},methodDict:{},phaselessTypes:{}},this.interactStatic=(function(l){var p=function f(v,x){var k=l.interactables.getExisting(v,x);return k||((k=l.interactables.new(v,x)).events.global=f.globalEvents),k};return p.getPointerAverage=Dt,p.getTouchBBox=Et,p.getTouchDistance=gt,p.getTouchAngle=ge,p.getElementRect=at,p.getElementClientRect=Ue,p.matchesSelector=Te,p.closest=We,p.globalEvents={},p.version="1.10.27",p.scope=l,p.use=function(f,v){return this.scope.usePlugin(f,v),this},p.isSet=function(f,v){return!!this.scope.interactables.get(f,v&&v.context)},p.on=be((function(f,v,x){if(_.string(f)&&f.search(" ")!==-1&&(f=f.trim().split(/ +/)),_.array(f)){for(var k=0,z=f;k<z.length;k++){var E=z[k];this.on(E,v,x)}return this}if(_.object(f)){for(var I in f)this.on(I,f[I],v);return this}return ai(f,this.scope.actions)?this.globalEvents[f]?this.globalEvents[f].push(v):this.globalEvents[f]=[v]:this.scope.events.add(this.scope.document,f,v,{options:x}),this}),"The interact.on() method is being deprecated"),p.off=be((function(f,v,x){if(_.string(f)&&f.search(" ")!==-1&&(f=f.trim().split(/ +/)),_.array(f)){for(var k=0,z=f;k<z.length;k++){var E=z[k];this.off(E,v,x)}return this}if(_.object(f)){for(var I in f)this.off(I,f[I],v);return this}var q;return ai(f,this.scope.actions)?f in this.globalEvents&&(q=this.globalEvents[f].indexOf(v))!==-1&&this.globalEvents[f].splice(q,1):this.scope.events.remove(this.scope.document,f,v,x),this}),"The interact.off() method is being deprecated"),p.debug=function(){return this.scope},p.supportsTouch=function(){return ee.supportsTouch},p.supportsPointerEvent=function(){return ee.supportsPointerEvent},p.stop=function(){for(var f=0,v=this.scope.interactions.list;f<v.length;f++)v[f].stop();return this},p.pointerMoveTolerance=function(f){return _.number(f)?(this.scope.interactions.pointerMoveTolerance=f,this):this.scope.interactions.pointerMoveTolerance},p.addDocument=function(f,v){this.scope.addDocument(f,v)},p.removeDocument=function(f){this.scope.removeDocument(f)},p})(this),this.InteractEvent=si,this.Interactable=void 0,this.interactables=new ea(this),this._win=void 0,this.document=void 0,this.window=void 0,this.documents=[],this._plugins={list:[],map:{}},this.onWindowUnload=function(l){return i.removeDocument(l.target)};var a=this;this.Interactable=(function(l){d(f,l);var p=b(f);function f(){return r(this,f),p.apply(this,arguments)}return c(f,[{key:"_defaults",get:function(){return a.defaults}},{key:"set",value:function(v){return y(u(f.prototype),"set",this).call(this,v),a.fire("interactable:set",{options:v,interactable:this}),this}},{key:"unset",value:function(){y(u(f.prototype),"unset",this).call(this);var v=a.interactables.list.indexOf(this);v<0||(a.interactables.list.splice(v,1),a.fire("interactable:unset",{interactable:this}))}}]),f})(Zr)}return c(n,[{key:"addListeners",value:function(i,a){this.listenerMaps.push({id:a,map:i})}},{key:"fire",value:function(i,a){for(var l=0,p=this.listenerMaps;l<p.length;l++){var f=p[l].map[i];if(f&&f(a,this,i)===!1)return!1}}},{key:"init",value:function(i){return this.isInitialized?this:(function(a,l){return a.isInitialized=!0,_.window(l)&&P(l),H.init(l),ee.init(l),B.init(l),a.window=l,a.document=l.document,a.usePlugin(Qr),a.usePlugin(Gr),a})(this,i)}},{key:"pluginIsInstalled",value:function(i){var a=i.id;return a?!!this._plugins.map[a]:this._plugins.list.indexOf(i)!==-1}},{key:"usePlugin",value:function(i,a){if(!this.isInitialized)return this;if(this.pluginIsInstalled(i))return this;if(i.id&&(this._plugins.map[i.id]=i),this._plugins.list.push(i),i.install&&i.install(this,a),i.listeners&&i.before){for(var l=0,p=this.listenerMaps.length,f=i.before.reduce((function(x,k){return x[k]=!0,x[In(k)]=!0,x}),{});l<p;l++){var v=this.listenerMaps[l].id;if(v&&(f[v]||f[In(v)]))break}this.listenerMaps.splice(l,0,{id:i.id,map:i.listeners})}else i.listeners&&this.listenerMaps.push({id:i.id,map:i.listeners});return this}},{key:"addDocument",value:function(i,a){if(this.getDocIndex(i)!==-1)return!1;var l=C(i);a=a?ne({},a):{},this.documents.push({doc:i,options:a}),this.events.documents.push(i),i!==this.document&&this.events.add(l,"unload",this.onWindowUnload),this.fire("scope:add-document",{doc:i,window:l,scope:this,options:a})}},{key:"removeDocument",value:function(i){var a=this.getDocIndex(i),l=C(i),p=this.documents[a].options;this.events.remove(l,"unload",this.onWindowUnload),this.documents.splice(a,1),this.events.documents.splice(a,1),this.fire("scope:remove-document",{doc:i,window:l,scope:this,options:p})}},{key:"getDocIndex",value:function(i){for(var a=0;a<this.documents.length;a++)if(this.documents[a].doc===i)return a;return-1}},{key:"getDocOptions",value:function(i){var a=this.getDocIndex(i);return a===-1?null:this.documents[a].options}},{key:"now",value:function(){return(this.window.Date||Date).now()}}]),n})();function In(n){return n&&n.replace(/\/.*$/,"")}var Rn=new ta,xt=Rn.interactStatic,ia=typeof globalThis!="undefined"?globalThis:window;Rn.init(ia);var na=Object.freeze({__proto__:null,edgeTarget:function(){},elements:function(){},grid:function(n){var i=[["x","y"],["left","top"],["right","bottom"],["width","height"]].filter((function(l){var p=l[0],f=l[1];return p in n||f in n})),a=function(l,p){for(var f=n.range,v=n.limits,x=v===void 0?{left:-1/0,right:1/0,top:-1/0,bottom:1/0}:v,k=n.offset,z=k===void 0?{x:0,y:0}:k,E={range:f,grid:n,x:null,y:null},I=0;I<i.length;I++){var q=i[I],Q=q[0],X=q[1],te=Math.round((l-z.x)/n[Q]),de=Math.round((p-z.y)/n[X]);E[Q]=Math.max(x.left,Math.min(x.right,te*n[Q]+z.x)),E[X]=Math.max(x.top,Math.min(x.bottom,de*n[X]+z.y))}return E};return a.grid=n,a.coordFields=i,a}}),ra={id:"snappers",install:function(n){var i=n.interactStatic;i.snappers=ne(i.snappers||{},na),i.createSnapGrid=i.snappers.grid}},aa=ra,oa={start:function(n){var i=n.state,a=n.rect,l=n.edges,p=n.pageCoords,f=i.options,v=f.ratio,x=f.enabled,k=i.options,z=k.equalDelta,E=k.modifiers;v==="preserve"&&(v=a.width/a.height),i.startCoords=ne({},p),i.startRect=ne({},a),i.ratio=v,i.equalDelta=z;var I=i.linkedEdges={top:l.top||l.left&&!l.bottom,left:l.left||l.top&&!l.right,bottom:l.bottom||l.right&&!l.top,right:l.right||l.bottom&&!l.left};if(i.xIsPrimaryAxis=!(!l.left&&!l.right),i.equalDelta){var q=(I.left?1:-1)*(I.top?1:-1);i.edgeSign={x:q,y:q}}else i.edgeSign={x:I.left?-1:1,y:I.top?-1:1};if(x!==!1&&ne(l,I),E!=null&&E.length){var Q=new oi(n.interaction);Q.copyFrom(n.interaction.modification),Q.prepareStates(E),i.subModification=Q,Q.startAll(h({},n))}},set:function(n){var i=n.state,a=n.rect,l=n.coords,p=i.linkedEdges,f=ne({},l),v=i.equalDelta?sa:ca;if(ne(n.edges,p),v(i,i.xIsPrimaryAxis,l,a),!i.subModification)return null;var x=ne({},a);Ee(p,x,{x:l.x-f.x,y:l.y-f.y});var k=i.subModification.setAll(h(h({},n),{},{rect:x,edges:p,pageCoords:l,prevCoords:l,prevRect:x})),z=k.delta;return k.changed&&(v(i,Math.abs(z.x)>Math.abs(z.y),k.coords,k.rect),ne(l,k.coords)),k.eventProps},defaults:{ratio:"preserve",equalDelta:!1,modifiers:[],enabled:!1}};function sa(n,i,a){var l=n.startCoords,p=n.edgeSign;i?a.y=l.y+(a.x-l.x)*p.y:a.x=l.x+(a.y-l.y)*p.x}function ca(n,i,a,l){var p=n.startRect,f=n.startCoords,v=n.ratio,x=n.edgeSign;if(i){var k=l.width/v;a.y=f.y+(k-p.height)*x.y}else{var z=l.height*v;a.x=f.x+(z-p.width)*x.x}}var la=It(oa,"aspectRatio"),Dn=function(){};Dn._defaults={};var $i=Dn;function Zt(n,i,a){return _.func(n)?et(n,i.interactable,i.element,[a.x,a.y,i]):et(n,i.interactable,i.element)}var Ki={start:function(n){var i=n.rect,a=n.startOffset,l=n.state,p=n.interaction,f=n.pageCoords,v=l.options,x=v.elementRect,k=ne({left:0,top:0,right:0,bottom:0},v.offset||{});if(i&&x){var z=Zt(v.restriction,p,f);if(z){var E=z.right-z.left-i.width,I=z.bottom-z.top-i.height;E<0&&(k.left+=E,k.right+=E),I<0&&(k.top+=I,k.bottom+=I)}k.left+=a.left-i.width*x.left,k.top+=a.top-i.height*x.top,k.right+=a.right-i.width*(1-x.right),k.bottom+=a.bottom-i.height*(1-x.bottom)}l.offset=k},set:function(n){var i=n.coords,a=n.interaction,l=n.state,p=l.options,f=l.offset,v=Zt(p.restriction,a,i);if(v){var x=(function(k){return!k||"left"in k&&"top"in k||((k=ne({},k)).left=k.x||0,k.top=k.y||0,k.right=k.right||k.left+k.width,k.bottom=k.bottom||k.top+k.height),k})(v);i.x=Math.max(Math.min(x.right-f.right,i.x),x.left+f.left),i.y=Math.max(Math.min(x.bottom-f.bottom,i.y),x.top+f.top)}},defaults:{restriction:null,elementRect:null,offset:null,endOnly:!1,enabled:!1}},da=It(Ki,"restrict"),Fn={top:1/0,left:1/0,bottom:-1/0,right:-1/0},Bn={top:-1/0,left:-1/0,bottom:1/0,right:1/0};function Nn(n,i){for(var a=0,l=["top","left","bottom","right"];a<l.length;a++){var p=l[a];p in n||(n[p]=i[p])}return n}var Ei={noInner:Fn,noOuter:Bn,start:function(n){var i,a=n.interaction,l=n.startOffset,p=n.state,f=p.options;f&&(i=Ne(Zt(f.offset,a,a.coords.start.page))),i=i||{x:0,y:0},p.offset={top:i.y+l.top,left:i.x+l.left,bottom:i.y-l.bottom,right:i.x-l.right}},set:function(n){var i=n.coords,a=n.edges,l=n.interaction,p=n.state,f=p.offset,v=p.options;if(a){var x=ne({},i),k=Zt(v.inner,l,x)||{},z=Zt(v.outer,l,x)||{};Nn(k,Fn),Nn(z,Bn),a.top?i.y=Math.min(Math.max(z.top+f.top,x.y),k.top+f.top):a.bottom&&(i.y=Math.max(Math.min(z.bottom+f.bottom,x.y),k.bottom+f.bottom)),a.left?i.x=Math.min(Math.max(z.left+f.left,x.x),k.left+f.left):a.right&&(i.x=Math.max(Math.min(z.right+f.right,x.x),k.right+f.right))}},defaults:{inner:null,outer:null,offset:null,endOnly:!1,enabled:!1}},pa=It(Ei,"restrictEdges"),ua=ne({get elementRect(){return{top:0,left:0,bottom:1,right:1}},set elementRect(n){}},Ki.defaults),ha=It({start:Ki.start,set:Ki.set,defaults:ua},"restrictRect"),fa={width:-1/0,height:-1/0},ga={width:1/0,height:1/0},ma=It({start:function(n){return Ei.start(n)},set:function(n){var i=n.interaction,a=n.state,l=n.rect,p=n.edges,f=a.options;if(p){var v=re(Zt(f.min,i,n.coords))||fa,x=re(Zt(f.max,i,n.coords))||ga;a.options={endOnly:f.endOnly,inner:ne({},Ei.noInner),outer:ne({},Ei.noOuter)},p.top?(a.options.inner.top=l.bottom-v.height,a.options.outer.top=l.bottom-x.height):p.bottom&&(a.options.inner.bottom=l.top+v.height,a.options.outer.bottom=l.top+x.height),p.left?(a.options.inner.left=l.right-v.width,a.options.outer.left=l.right-x.width):p.right&&(a.options.inner.right=l.left+v.width,a.options.outer.right=l.left+x.width),Ei.set(n),a.options=f}},defaults:{min:null,max:null,endOnly:!1,enabled:!1}},"restrictSize"),cn={start:function(n){var i,a=n.interaction,l=n.interactable,p=n.element,f=n.rect,v=n.state,x=n.startOffset,k=v.options,z=k.offsetWithOrigin?(function(q){var Q=q.interaction.element,X=Ne(et(q.state.options.origin,null,null,[Q])),te=X||Le(q.interactable,Q,q.interaction.prepared.name);return te})(n):{x:0,y:0};if(k.offset==="startCoords")i={x:a.coords.start.page.x,y:a.coords.start.page.y};else{var E=et(k.offset,l,p,[a]);(i=Ne(E)||{x:0,y:0}).x+=z.x,i.y+=z.y}var I=k.relativePoints;v.offsets=f&&I&&I.length?I.map((function(q,Q){return{index:Q,relativePoint:q,x:x.left-f.width*q.x+i.x,y:x.top-f.height*q.y+i.y}})):[{index:0,relativePoint:null,x:i.x,y:i.y}]},set:function(n){var i=n.interaction,a=n.coords,l=n.state,p=l.options,f=l.offsets,v=Le(i.interactable,i.element,i.prepared.name),x=ne({},a),k=[];p.offsetWithOrigin||(x.x-=v.x,x.y-=v.y);for(var z=0,E=f;z<E.length;z++)for(var I=E[z],q=x.x-I.x,Q=x.y-I.y,X=0,te=p.targets.length;X<te;X++){var de=p.targets[X],ce=void 0;(ce=_.func(de)?de(q,Q,i._proxy,I,X):de)&&k.push({x:(_.number(ce.x)?ce.x:q)+I.x,y:(_.number(ce.y)?ce.y:Q)+I.y,range:_.number(ce.range)?ce.range:p.range,source:de,index:X,offset:I})}for(var me={target:null,inRange:!1,distance:0,range:0,delta:{x:0,y:0}},Me=0;Me<k.length;Me++){var He=k[Me],Se=He.range,Ie=He.x-x.x,wt=He.y-x.y,it=pt(Ie,wt),zt=it<=Se;Se===1/0&&me.inRange&&me.range!==1/0&&(zt=!1),me.target&&!(zt?me.inRange&&Se!==1/0?it/Se<me.distance/me.range:Se===1/0&&me.range!==1/0||it<me.distance:!me.inRange&&it<me.distance)||(me.target=He,me.distance=it,me.range=Se,me.inRange=zt,me.delta.x=Ie,me.delta.y=wt)}return me.inRange&&(a.x=me.target.x,a.y=me.target.y),l.closest=me,me},defaults:{range:1/0,targets:null,offset:null,offsetWithOrigin:!0,origin:null,relativePoints:null,endOnly:!1,enabled:!1}},ya=It(cn,"snap"),Ui={start:function(n){var i=n.state,a=n.edges,l=i.options;if(!a)return null;n.state={options:{targets:null,relativePoints:[{x:a.left?0:1,y:a.top?0:1}],offset:l.offset||"self",origin:{x:0,y:0},range:l.range}},i.targetFields=i.targetFields||[["width","height"],["x","y"]],cn.start(n),i.offsets=n.state.offsets,n.state=i},set:function(n){var i=n.interaction,a=n.state,l=n.coords,p=a.options,f=a.offsets,v={x:l.x-f[0].x,y:l.y-f[0].y};a.options=ne({},p),a.options.targets=[];for(var x=0,k=p.targets||[];x<k.length;x++){var z=k[x],E=void 0;if(E=_.func(z)?z(v.x,v.y,i):z){for(var I=0,q=a.targetFields;I<q.length;I++){var Q=q[I],X=Q[0],te=Q[1];if(X in E||te in E){E.x=E[X],E.y=E[te];break}}a.options.targets.push(E)}}var de=cn.set(n);return a.options=p,de},defaults:{range:1/0,targets:null,offset:null,endOnly:!1,enabled:!1}},va=It(Ui,"snapSize"),ln={aspectRatio:la,restrictEdges:pa,restrict:da,restrictRect:ha,restrictSize:ma,snapEdges:It({start:function(n){var i=n.edges;return i?(n.state.targetFields=n.state.targetFields||[[i.left?"left":"right",i.top?"top":"bottom"]],Ui.start(n)):null},set:Ui.set,defaults:ne(qt(Ui.defaults),{targets:void 0,range:void 0,offset:{x:0,y:0}})},"snapEdges"),snap:ya,snapSize:va,spring:$i,avoid:$i,transform:$i,rubberband:$i},ba={id:"modifiers",install:function(n){var i=n.interactStatic;for(var a in n.usePlugin(yi),n.usePlugin(aa),i.modifiers=ln,ln){var l=ln[a],p=l._defaults,f=l._methods;p._methods=f,n.defaults.perAction[a]=p}}},_a=ba,qn=(function(n){d(a,n);var i=b(a);function a(l,p,f,v,x,k){var z;if(r(this,a),kt(m(z=i.call(this,x)),f),f!==p&&kt(m(z),p),z.timeStamp=k,z.originalEvent=f,z.type=l,z.pointerId=st(p),z.pointerType=j(p),z.target=v,z.currentTarget=null,l==="tap"){var E=x.getPointerIndex(p);z.dt=z.timeStamp-x.pointers[E].downTime;var I=z.timeStamp-x.tapTime;z.double=!!x.prevTap&&x.prevTap.type!=="doubletap"&&x.prevTap.target===z.target&&I<500}else l==="doubletap"&&(z.dt=p.timeStamp-x.tapTime,z.double=!0);return z}return c(a,[{key:"_subtractOrigin",value:function(l){var p=l.x,f=l.y;return this.pageX-=p,this.pageY-=f,this.clientX-=p,this.clientY-=f,this}},{key:"_addOrigin",value:function(l){var p=l.x,f=l.y;return this.pageX+=p,this.pageY+=f,this.clientX+=p,this.clientY+=f,this}},{key:"preventDefault",value:function(){this.originalEvent.preventDefault()}}]),a})(ue),Ai={id:"pointer-events/base",before:["inertia","modifiers","auto-start","actions"],install:function(n){n.pointerEvents=Ai,n.defaults.actions.pointerEvents=Ai.defaults,ne(n.actions.phaselessTypes,Ai.types)},listeners:{"interactions:new":function(n){var i=n.interaction;i.prevTap=null,i.tapTime=0},"interactions:update-pointer":function(n){var i=n.down,a=n.pointerInfo;!i&&a.hold||(a.hold={duration:1/0,timeout:null})},"interactions:move":function(n,i){var a=n.interaction,l=n.pointer,p=n.event,f=n.eventTarget;n.duplicate||a.pointerIsDown&&!a.pointerWasMoved||(a.pointerIsDown&&dn(n),Ut({interaction:a,pointer:l,event:p,eventTarget:f,type:"move"},i))},"interactions:down":function(n,i){(function(a,l){for(var p=a.interaction,f=a.pointer,v=a.event,x=a.eventTarget,k=a.pointerIndex,z=p.pointers[k].hold,E=ct(x),I={interaction:p,pointer:f,event:v,eventTarget:x,type:"hold",targets:[],path:E,node:null},q=0;q<E.length;q++){var Q=E[q];I.node=Q,l.fire("pointerEvents:collect-targets",I)}if(I.targets.length){for(var X=1/0,te=0,de=I.targets;te<de.length;te++){var ce=de[te].eventable.options.holdDuration;ce<X&&(X=ce)}z.duration=X,z.timeout=setTimeout((function(){Ut({interaction:p,eventTarget:x,pointer:f,event:v,type:"hold"},l)}),X)}})(n,i),Ut(n,i)},"interactions:up":function(n,i){dn(n),Ut(n,i),(function(a,l){var p=a.interaction,f=a.pointer,v=a.event,x=a.eventTarget;p.pointerWasMoved||Ut({interaction:p,eventTarget:x,pointer:f,event:v,type:"tap"},l)})(n,i)},"interactions:cancel":function(n,i){dn(n),Ut(n,i)}},PointerEvent:qn,fire:Ut,collectEventTargets:Hn,defaults:{holdDuration:600,ignoreFrom:null,allowFrom:null,origin:{x:0,y:0}},types:{down:!0,move:!0,up:!0,cancel:!0,tap:!0,doubletap:!0,hold:!0}};function Ut(n,i){var a=n.interaction,l=n.pointer,p=n.event,f=n.eventTarget,v=n.type,x=n.targets,k=x===void 0?Hn(n,i):x,z=new qn(v,l,p,f,a,i.now());i.fire("pointerEvents:new",{pointerEvent:z});for(var E={interaction:a,pointer:l,event:p,eventTarget:f,targets:k,type:v,pointerEvent:z},I=0;I<k.length;I++){var q=k[I];for(var Q in q.props||{})z[Q]=q.props[Q];var X=Le(q.eventable,q.node);if(z._subtractOrigin(X),z.eventable=q.eventable,z.currentTarget=q.node,q.eventable.fire(z),z._addOrigin(X),z.immediatePropagationStopped||z.propagationStopped&&I+1<k.length&&k[I+1].node!==z.currentTarget)break}if(i.fire("pointerEvents:fired",E),v==="tap"){var te=z.double?Ut({interaction:a,pointer:l,event:p,eventTarget:f,type:"doubletap"},i):z;a.prevTap=te,a.tapTime=te.timeStamp}return z}function Hn(n,i){var a=n.interaction,l=n.pointer,p=n.event,f=n.eventTarget,v=n.type,x=a.getPointerIndex(l),k=a.pointers[x];if(v==="tap"&&(a.pointerWasMoved||!k||k.downTarget!==f))return[];for(var z=ct(f),E={interaction:a,pointer:l,event:p,eventTarget:f,type:v,path:z,targets:[],node:null},I=0;I<z.length;I++){var q=z[I];E.node=q,i.fire("pointerEvents:collect-targets",E)}return v==="hold"&&(E.targets=E.targets.filter((function(Q){var X,te;return Q.eventable.options.holdDuration===((X=a.pointers[x])==null||(te=X.hold)==null?void 0:te.duration)}))),E.targets}function dn(n){var i=n.interaction,a=n.pointerIndex,l=i.pointers[a].hold;l&&l.timeout&&(clearTimeout(l.timeout),l.timeout=null)}var xa=Object.freeze({__proto__:null,default:Ai});function wa(n){var i=n.interaction;i.holdIntervalHandle&&(clearInterval(i.holdIntervalHandle),i.holdIntervalHandle=null)}var Sa={id:"pointer-events/holdRepeat",install:function(n){n.usePlugin(Ai);var i=n.pointerEvents;i.defaults.holdRepeatInterval=0,i.types.holdrepeat=n.actions.phaselessTypes.holdrepeat=!0},listeners:["move","up","cancel","endall"].reduce((function(n,i){return n["pointerEvents:".concat(i)]=wa,n}),{"pointerEvents:new":function(n){var i=n.pointerEvent;i.type==="hold"&&(i.count=(i.count||0)+1)},"pointerEvents:fired":function(n,i){var a=n.interaction,l=n.pointerEvent,p=n.eventTarget,f=n.targets;if(l.type==="hold"&&f.length){var v=f[0].eventable.options.holdRepeatInterval;v<=0||(a.holdIntervalHandle=setTimeout((function(){i.pointerEvents.fire({interaction:a,eventTarget:p,type:"hold",pointer:l,event:l},i)}),v))}}})},ka=Sa,Ca={id:"pointer-events/interactableTargets",install:function(n){var i=n.Interactable;i.prototype.pointerEvents=function(l){return ne(this.events.options,l),this};var a=i.prototype._backCompatOption;i.prototype._backCompatOption=function(l,p){var f=a.call(this,l,p);return f===this&&(this.events.options[l]=p),f}},listeners:{"pointerEvents:collect-targets":function(n,i){var a=n.targets,l=n.node,p=n.type,f=n.eventTarget;i.interactables.forEachMatch(l,(function(v){var x=v.events,k=x.options;x.types[p]&&x.types[p].length&&v.testIgnoreAllow(k,l,f)&&a.push({node:l,eventable:x,props:{interactable:v}})}))},"interactable:new":function(n){var i=n.interactable;i.events.getRect=function(a){return i.getRect(a)}},"interactable:set":function(n,i){var a=n.interactable,l=n.options;ne(a.events.options,i.pointerEvents.defaults),ne(a.events.options,l.pointerEvents||{})}}},Ea=Ca,Aa={id:"pointer-events",install:function(n){n.usePlugin(xa),n.usePlugin(ka),n.usePlugin(Ea)}},Oa=Aa,Ta={id:"reflow",install:function(n){var i=n.Interactable;n.actions.phases.reflow=!0,i.prototype.reflow=function(a){return(function(l,p,f){for(var v=l.getAllElements(),x=f.window.Promise,k=x?[]:null,z=function(){var I=v[E],q=l.getRect(I);if(!q)return 1;var Q,X=W(f.interactions.list,(function(ce){return ce.interacting()&&ce.interactable===l&&ce.element===I&&ce.prepared.name===p.name}));if(X)X.move(),k&&(Q=X._reflowPromise||new x((function(ce){X._reflowResolve=ce})));else{var te=re(q),de=(function(ce){return{coords:ce,get page(){return this.coords.page},get client(){return this.coords.client},get timeStamp(){return this.coords.timeStamp},get pageX(){return this.coords.page.x},get pageY(){return this.coords.page.y},get clientX(){return this.coords.client.x},get clientY(){return this.coords.client.y},get pointerId(){return this.coords.pointerId},get target(){return this.coords.target},get type(){return this.coords.type},get pointerType(){return this.coords.pointerType},get buttons(){return this.coords.buttons},preventDefault:function(){}}})({page:{x:te.x,y:te.y},client:{x:te.x,y:te.y},timeStamp:f.now()});Q=(function(ce,me,Me,He,Se){var Ie=ce.interactions.new({pointerType:"reflow"}),wt={interaction:Ie,event:Se,pointer:Se,eventTarget:Me,phase:"reflow"};Ie.interactable=me,Ie.element=Me,Ie.prevEvent=Se,Ie.updatePointer(Se,Se,Me,!0),Lt(Ie.coords.delta),Be(Ie.prepared,He),Ie._doPhase(wt);var it=ce.window,zt=it.Promise,Rt=zt?new zt((function(Ht){Ie._reflowResolve=Ht})):void 0;return Ie._reflowPromise=Rt,Ie.start(He,me,Me),Ie._interacting?(Ie.move(wt),Ie.end(Se)):(Ie.stop(),Ie._reflowResolve()),Ie.removePointer(Se,Se),Rt})(f,l,I,p,de)}k&&k.push(Q)},E=0;E<v.length&&!z();E++);return k&&x.all(k).then((function(){return l}))})(this,a,n)}},listeners:{"interactions:stop":function(n,i){var a=n.interaction;a.pointerType==="reflow"&&(a._reflowResolve&&a._reflowResolve(),(function(l,p){l.splice(l.indexOf(p),1)})(i.interactions.list,a))}}},za=Ta;if(xt.use(mi),xt.use(Si),xt.use(Oa),xt.use(_t),xt.use(_a),xt.use(fi),xt.use(R),xt.use(ze),xt.use(za),xt.default=xt,(typeof ei=="undefined"?"undefined":e(ei))==="object"&&ei)try{ei.exports=xt}catch{}return xt.default=xt,xt}))});var Ur=Na(Wn(),1);function ar(t){return typeof t=="undefined"||t===null}function qa(t){return typeof t=="object"&&t!==null}function Ha(t){return Array.isArray(t)?t:ar(t)?[]:[t]}function ja(t,h){var e,r,o,c;if(h)for(c=Object.keys(h),e=0,r=c.length;e<r;e+=1)o=c[e],t[o]=h[o];return t}function Wa(t,h){var e="",r;for(r=0;r<h;r+=1)e+=t;return e}function Ya(t){return t===0&&Number.NEGATIVE_INFINITY===1/t}var $a=ar,Ka=qa,Ua=Ha,Va=Wa,Ga=Ya,Xa=ja,ut={isNothing:$a,isObject:Ka,toArray:Ua,repeat:Va,isNegativeZero:Ga,extend:Xa};function or(t,h){var e="",r=t.reason||"(unknown reason)";return t.mark?(t.mark.name&&(e+='in "'+t.mark.name+'" '),e+="("+(t.mark.line+1)+":"+(t.mark.column+1)+")",!h&&t.mark.snippet&&(e+=`

`+t.mark.snippet),r+" "+e):r}function zi(t,h){Error.call(this),this.name="YAMLException",this.reason=t,this.mark=h,this.message=or(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}zi.prototype=Object.create(Error.prototype);zi.prototype.constructor=zi;zi.prototype.toString=function(h){return this.name+": "+or(this,h)};var St=zi;function hn(t,h,e,r,o){var c="",s="",d=Math.floor(o/2)-1;return r-h>d&&(c=" ... ",h=r-d+c.length),e-r>d&&(s=" ...",e=r+d-s.length),{str:c+t.slice(h,e).replace(/\t/g,"\u2192")+s,pos:r-h+c.length}}function fn(t,h){return ut.repeat(" ",h-t.length)+t}function Ja(t,h){if(h=Object.create(h||null),!t.buffer)return null;h.maxLength||(h.maxLength=79),typeof h.indent!="number"&&(h.indent=1),typeof h.linesBefore!="number"&&(h.linesBefore=3),typeof h.linesAfter!="number"&&(h.linesAfter=2);for(var e=/\r?\n|\r|\0/g,r=[0],o=[],c,s=-1;c=e.exec(t.buffer);)o.push(c.index),r.push(c.index+c[0].length),t.position<=c.index&&s<0&&(s=r.length-2);s<0&&(s=r.length-1);var d="",u,g,m=Math.min(t.line+h.linesAfter,o.length).toString().length,b=h.maxLength-(h.indent+m+3);for(u=1;u<=h.linesBefore&&!(s-u<0);u++)g=hn(t.buffer,r[s-u],o[s-u],t.position-(r[s]-r[s-u]),b),d=ut.repeat(" ",h.indent)+fn((t.line-u+1).toString(),m)+" | "+g.str+`
`+d;for(g=hn(t.buffer,r[s],o[s],t.position,b),d+=ut.repeat(" ",h.indent)+fn((t.line+1).toString(),m)+" | "+g.str+`
`,d+=ut.repeat("-",h.indent+m+3+g.pos)+`^
`,u=1;u<=h.linesAfter&&!(s+u>=o.length);u++)g=hn(t.buffer,r[s+u],o[s+u],t.position-(r[s]-r[s+u]),b),d+=ut.repeat(" ",h.indent)+fn((t.line+u+1).toString(),m)+" | "+g.str+`
`;return d.replace(/\n$/,"")}var Qa=Ja,Za=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],eo=["scalar","sequence","mapping"];function to(t){var h={};return t!==null&&Object.keys(t).forEach(function(e){t[e].forEach(function(r){h[String(r)]=e})}),h}function io(t,h){if(h=h||{},Object.keys(h).forEach(function(e){if(Za.indexOf(e)===-1)throw new St('Unknown option "'+e+'" is met in definition of "'+t+'" YAML type.')}),this.options=h,this.tag=t,this.kind=h.kind||null,this.resolve=h.resolve||function(){return!0},this.construct=h.construct||function(e){return e},this.instanceOf=h.instanceOf||null,this.predicate=h.predicate||null,this.represent=h.represent||null,this.representName=h.representName||null,this.defaultStyle=h.defaultStyle||null,this.multi=h.multi||!1,this.styleAliases=to(h.styleAliases||null),eo.indexOf(this.kind)===-1)throw new St('Unknown kind "'+this.kind+'" is specified for "'+t+'" YAML type.')}var ft=io;function Yn(t,h){var e=[];return t[h].forEach(function(r){var o=e.length;e.forEach(function(c,s){c.tag===r.tag&&c.kind===r.kind&&c.multi===r.multi&&(o=s)}),e[o]=r}),e}function no(){var t={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},h,e;function r(o){o.multi?(t.multi[o.kind].push(o),t.multi.fallback.push(o)):t[o.kind][o.tag]=t.fallback[o.tag]=o}for(h=0,e=arguments.length;h<e;h+=1)arguments[h].forEach(r);return t}function mn(t){return this.extend(t)}mn.prototype.extend=function(h){var e=[],r=[];if(h instanceof ft)r.push(h);else if(Array.isArray(h))r=r.concat(h);else if(h&&(Array.isArray(h.implicit)||Array.isArray(h.explicit)))h.implicit&&(e=e.concat(h.implicit)),h.explicit&&(r=r.concat(h.explicit));else throw new St("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");e.forEach(function(c){if(!(c instanceof ft))throw new St("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(c.loadKind&&c.loadKind!=="scalar")throw new St("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(c.multi)throw new St("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),r.forEach(function(c){if(!(c instanceof ft))throw new St("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var o=Object.create(mn.prototype);return o.implicit=(this.implicit||[]).concat(e),o.explicit=(this.explicit||[]).concat(r),o.compiledImplicit=Yn(o,"implicit"),o.compiledExplicit=Yn(o,"explicit"),o.compiledTypeMap=no(o.compiledImplicit,o.compiledExplicit),o};var sr=mn,cr=new ft("tag:yaml.org,2002:str",{kind:"scalar",construct:function(t){return t!==null?t:""}}),lr=new ft("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(t){return t!==null?t:[]}}),dr=new ft("tag:yaml.org,2002:map",{kind:"mapping",construct:function(t){return t!==null?t:{}}}),pr=new sr({explicit:[cr,lr,dr]});function ro(t){if(t===null)return!0;var h=t.length;return h===1&&t==="~"||h===4&&(t==="null"||t==="Null"||t==="NULL")}function ao(){return null}function oo(t){return t===null}var ur=new ft("tag:yaml.org,2002:null",{kind:"scalar",resolve:ro,construct:ao,predicate:oo,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function so(t){if(t===null)return!1;var h=t.length;return h===4&&(t==="true"||t==="True"||t==="TRUE")||h===5&&(t==="false"||t==="False"||t==="FALSE")}function co(t){return t==="true"||t==="True"||t==="TRUE"}function lo(t){return Object.prototype.toString.call(t)==="[object Boolean]"}var hr=new ft("tag:yaml.org,2002:bool",{kind:"scalar",resolve:so,construct:co,predicate:lo,represent:{lowercase:function(t){return t?"true":"false"},uppercase:function(t){return t?"TRUE":"FALSE"},camelcase:function(t){return t?"True":"False"}},defaultStyle:"lowercase"});function po(t){return 48<=t&&t<=57||65<=t&&t<=70||97<=t&&t<=102}function uo(t){return 48<=t&&t<=55}function ho(t){return 48<=t&&t<=57}function fo(t){if(t===null)return!1;var h=t.length,e=0,r=!1,o;if(!h)return!1;if(o=t[e],(o==="-"||o==="+")&&(o=t[++e]),o==="0"){if(e+1===h)return!0;if(o=t[++e],o==="b"){for(e++;e<h;e++)if(o=t[e],o!=="_"){if(o!=="0"&&o!=="1")return!1;r=!0}return r&&o!=="_"}if(o==="x"){for(e++;e<h;e++)if(o=t[e],o!=="_"){if(!po(t.charCodeAt(e)))return!1;r=!0}return r&&o!=="_"}if(o==="o"){for(e++;e<h;e++)if(o=t[e],o!=="_"){if(!uo(t.charCodeAt(e)))return!1;r=!0}return r&&o!=="_"}}if(o==="_")return!1;for(;e<h;e++)if(o=t[e],o!=="_"){if(!ho(t.charCodeAt(e)))return!1;r=!0}return!(!r||o==="_")}function go(t){var h=t,e=1,r;if(h.indexOf("_")!==-1&&(h=h.replace(/_/g,"")),r=h[0],(r==="-"||r==="+")&&(r==="-"&&(e=-1),h=h.slice(1),r=h[0]),h==="0")return 0;if(r==="0"){if(h[1]==="b")return e*parseInt(h.slice(2),2);if(h[1]==="x")return e*parseInt(h.slice(2),16);if(h[1]==="o")return e*parseInt(h.slice(2),8)}return e*parseInt(h,10)}function mo(t){return Object.prototype.toString.call(t)==="[object Number]"&&t%1===0&&!ut.isNegativeZero(t)}var fr=new ft("tag:yaml.org,2002:int",{kind:"scalar",resolve:fo,construct:go,predicate:mo,represent:{binary:function(t){return t>=0?"0b"+t.toString(2):"-0b"+t.toString(2).slice(1)},octal:function(t){return t>=0?"0o"+t.toString(8):"-0o"+t.toString(8).slice(1)},decimal:function(t){return t.toString(10)},hexadecimal:function(t){return t>=0?"0x"+t.toString(16).toUpperCase():"-0x"+t.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),yo=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function vo(t){return!(t===null||!yo.test(t)||t[t.length-1]==="_")}function bo(t){var h,e;return h=t.replace(/_/g,"").toLowerCase(),e=h[0]==="-"?-1:1,"+-".indexOf(h[0])>=0&&(h=h.slice(1)),h===".inf"?e===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:h===".nan"?NaN:e*parseFloat(h,10)}var _o=/^[-+]?[0-9]+e/;function xo(t,h){var e;if(isNaN(t))switch(h){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===t)switch(h){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===t)switch(h){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(ut.isNegativeZero(t))return"-0.0";return e=t.toString(10),_o.test(e)?e.replace("e",".e"):e}function wo(t){return Object.prototype.toString.call(t)==="[object Number]"&&(t%1!==0||ut.isNegativeZero(t))}var gr=new ft("tag:yaml.org,2002:float",{kind:"scalar",resolve:vo,construct:bo,predicate:wo,represent:xo,defaultStyle:"lowercase"}),mr=pr.extend({implicit:[ur,hr,fr,gr]}),yr=mr,vr=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),br=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function So(t){return t===null?!1:vr.exec(t)!==null||br.exec(t)!==null}function ko(t){var h,e,r,o,c,s,d,u=0,g=null,m,b,y;if(h=vr.exec(t),h===null&&(h=br.exec(t)),h===null)throw new Error("Date resolve error");if(e=+h[1],r=+h[2]-1,o=+h[3],!h[4])return new Date(Date.UTC(e,r,o));if(c=+h[4],s=+h[5],d=+h[6],h[7]){for(u=h[7].slice(0,3);u.length<3;)u+="0";u=+u}return h[9]&&(m=+h[10],b=+(h[11]||0),g=(m*60+b)*6e4,h[9]==="-"&&(g=-g)),y=new Date(Date.UTC(e,r,o,c,s,d,u)),g&&y.setTime(y.getTime()-g),y}function Co(t){return t.toISOString()}var _r=new ft("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:So,construct:ko,instanceOf:Date,represent:Co});function Eo(t){return t==="<<"||t===null}var xr=new ft("tag:yaml.org,2002:merge",{kind:"scalar",resolve:Eo}),xn=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function Ao(t){if(t===null)return!1;var h,e,r=0,o=t.length,c=xn;for(e=0;e<o;e++)if(h=c.indexOf(t.charAt(e)),!(h>64)){if(h<0)return!1;r+=6}return r%8===0}function Oo(t){var h,e,r=t.replace(/[\r\n=]/g,""),o=r.length,c=xn,s=0,d=[];for(h=0;h<o;h++)h%4===0&&h&&(d.push(s>>16&255),d.push(s>>8&255),d.push(s&255)),s=s<<6|c.indexOf(r.charAt(h));return e=o%4*6,e===0?(d.push(s>>16&255),d.push(s>>8&255),d.push(s&255)):e===18?(d.push(s>>10&255),d.push(s>>2&255)):e===12&&d.push(s>>4&255),new Uint8Array(d)}function To(t){var h="",e=0,r,o,c=t.length,s=xn;for(r=0;r<c;r++)r%3===0&&r&&(h+=s[e>>18&63],h+=s[e>>12&63],h+=s[e>>6&63],h+=s[e&63]),e=(e<<8)+t[r];return o=c%3,o===0?(h+=s[e>>18&63],h+=s[e>>12&63],h+=s[e>>6&63],h+=s[e&63]):o===2?(h+=s[e>>10&63],h+=s[e>>4&63],h+=s[e<<2&63],h+=s[64]):o===1&&(h+=s[e>>2&63],h+=s[e<<4&63],h+=s[64],h+=s[64]),h}function zo(t){return Object.prototype.toString.call(t)==="[object Uint8Array]"}var wr=new ft("tag:yaml.org,2002:binary",{kind:"scalar",resolve:Ao,construct:Oo,predicate:zo,represent:To}),Lo=Object.prototype.hasOwnProperty,Mo=Object.prototype.toString;function Po(t){if(t===null)return!0;var h=[],e,r,o,c,s,d=t;for(e=0,r=d.length;e<r;e+=1){if(o=d[e],s=!1,Mo.call(o)!=="[object Object]")return!1;for(c in o)if(Lo.call(o,c))if(!s)s=!0;else return!1;if(!s)return!1;if(h.indexOf(c)===-1)h.push(c);else return!1}return!0}function Io(t){return t!==null?t:[]}var Sr=new ft("tag:yaml.org,2002:omap",{kind:"sequence",resolve:Po,construct:Io}),Ro=Object.prototype.toString;function Do(t){if(t===null)return!0;var h,e,r,o,c,s=t;for(c=new Array(s.length),h=0,e=s.length;h<e;h+=1){if(r=s[h],Ro.call(r)!=="[object Object]"||(o=Object.keys(r),o.length!==1))return!1;c[h]=[o[0],r[o[0]]]}return!0}function Fo(t){if(t===null)return[];var h,e,r,o,c,s=t;for(c=new Array(s.length),h=0,e=s.length;h<e;h+=1)r=s[h],o=Object.keys(r),c[h]=[o[0],r[o[0]]];return c}var kr=new ft("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:Do,construct:Fo}),Bo=Object.prototype.hasOwnProperty;function No(t){if(t===null)return!0;var h,e=t;for(h in e)if(Bo.call(e,h)&&e[h]!==null)return!1;return!0}function qo(t){return t!==null?t:{}}var Cr=new ft("tag:yaml.org,2002:set",{kind:"mapping",resolve:No,construct:qo}),wn=yr.extend({implicit:[_r,xr],explicit:[wr,Sr,kr,Cr]}),Gt=Object.prototype.hasOwnProperty,Gi=1,Er=2,Ar=3,Xi=4,gn=1,Ho=2,$n=3,jo=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,Wo=/[\x85\u2028\u2029]/,Yo=/[,\[\]\{\}]/,Or=/^(?:!|!!|![a-z\-]+!)$/i,Tr=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function Kn(t){return Object.prototype.toString.call(t)}function Bt(t){return t===10||t===13}function ii(t){return t===9||t===32}function At(t){return t===9||t===32||t===10||t===13}function di(t){return t===44||t===91||t===93||t===123||t===125}function $o(t){var h;return 48<=t&&t<=57?t-48:(h=t|32,97<=h&&h<=102?h-97+10:-1)}function Ko(t){return t===120?2:t===117?4:t===85?8:0}function Uo(t){return 48<=t&&t<=57?t-48:-1}function Un(t){return t===48?"\0":t===97?"\x07":t===98?"\b":t===116||t===9?"	":t===110?`
`:t===118?"\v":t===102?"\f":t===114?"\r":t===101?"\x1B":t===32?" ":t===34?'"':t===47?"/":t===92?"\\":t===78?"\x85":t===95?"\xA0":t===76?"\u2028":t===80?"\u2029":""}function Vo(t){return t<=65535?String.fromCharCode(t):String.fromCharCode((t-65536>>10)+55296,(t-65536&1023)+56320)}var zr=new Array(256),Lr=new Array(256);for(ti=0;ti<256;ti++)zr[ti]=Un(ti)?1:0,Lr[ti]=Un(ti);var ti;function Go(t,h){this.input=t,this.filename=h.filename||null,this.schema=h.schema||wn,this.onWarning=h.onWarning||null,this.legacy=h.legacy||!1,this.json=h.json||!1,this.listener=h.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=t.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function Mr(t,h){var e={name:t.filename,buffer:t.input.slice(0,-1),position:t.position,line:t.line,column:t.position-t.lineStart};return e.snippet=Qa(e),new St(h,e)}function ye(t,h){throw Mr(t,h)}function Ji(t,h){t.onWarning&&t.onWarning.call(null,Mr(t,h))}var Vn={YAML:function(h,e,r){var o,c,s;h.version!==null&&ye(h,"duplication of %YAML directive"),r.length!==1&&ye(h,"YAML directive accepts exactly one argument"),o=/^([0-9]+)\.([0-9]+)$/.exec(r[0]),o===null&&ye(h,"ill-formed argument of the YAML directive"),c=parseInt(o[1],10),s=parseInt(o[2],10),c!==1&&ye(h,"unacceptable YAML version of the document"),h.version=r[0],h.checkLineBreaks=s<2,s!==1&&s!==2&&Ji(h,"unsupported YAML version of the document")},TAG:function(h,e,r){var o,c;r.length!==2&&ye(h,"TAG directive accepts exactly two arguments"),o=r[0],c=r[1],Or.test(o)||ye(h,"ill-formed tag handle (first argument) of the TAG directive"),Gt.call(h.tagMap,o)&&ye(h,'there is a previously declared suffix for "'+o+'" tag handle'),Tr.test(c)||ye(h,"ill-formed tag prefix (second argument) of the TAG directive");try{c=decodeURIComponent(c)}catch{ye(h,"tag prefix is malformed: "+c)}h.tagMap[o]=c}};function Vt(t,h,e,r){var o,c,s,d;if(h<e){if(d=t.input.slice(h,e),r)for(o=0,c=d.length;o<c;o+=1)s=d.charCodeAt(o),s===9||32<=s&&s<=1114111||ye(t,"expected valid JSON character");else jo.test(d)&&ye(t,"the stream contains non-printable characters");t.result+=d}}function Gn(t,h,e,r){var o,c,s,d;for(ut.isObject(e)||ye(t,"cannot merge mappings; the provided source object is unacceptable"),o=Object.keys(e),s=0,d=o.length;s<d;s+=1)c=o[s],Gt.call(h,c)||(h[c]=e[c],r[c]=!0)}function pi(t,h,e,r,o,c,s,d,u){var g,m;if(Array.isArray(o))for(o=Array.prototype.slice.call(o),g=0,m=o.length;g<m;g+=1)Array.isArray(o[g])&&ye(t,"nested arrays are not supported inside keys"),typeof o=="object"&&Kn(o[g])==="[object Object]"&&(o[g]="[object Object]");if(typeof o=="object"&&Kn(o)==="[object Object]"&&(o="[object Object]"),o=String(o),h===null&&(h={}),r==="tag:yaml.org,2002:merge")if(Array.isArray(c))for(g=0,m=c.length;g<m;g+=1)Gn(t,h,c[g],e);else Gn(t,h,c,e);else!t.json&&!Gt.call(e,o)&&Gt.call(h,o)&&(t.line=s||t.line,t.lineStart=d||t.lineStart,t.position=u||t.position,ye(t,"duplicated mapping key")),o==="__proto__"?Object.defineProperty(h,o,{configurable:!0,enumerable:!0,writable:!0,value:c}):h[o]=c,delete e[o];return h}function Sn(t){var h;h=t.input.charCodeAt(t.position),h===10?t.position++:h===13?(t.position++,t.input.charCodeAt(t.position)===10&&t.position++):ye(t,"a line break is expected"),t.line+=1,t.lineStart=t.position,t.firstTabInLine=-1}function dt(t,h,e){for(var r=0,o=t.input.charCodeAt(t.position);o!==0;){for(;ii(o);)o===9&&t.firstTabInLine===-1&&(t.firstTabInLine=t.position),o=t.input.charCodeAt(++t.position);if(h&&o===35)do o=t.input.charCodeAt(++t.position);while(o!==10&&o!==13&&o!==0);if(Bt(o))for(Sn(t),o=t.input.charCodeAt(t.position),r++,t.lineIndent=0;o===32;)t.lineIndent++,o=t.input.charCodeAt(++t.position);else break}return e!==-1&&r!==0&&t.lineIndent<e&&Ji(t,"deficient indentation"),r}function en(t){var h=t.position,e;return e=t.input.charCodeAt(h),!!((e===45||e===46)&&e===t.input.charCodeAt(h+1)&&e===t.input.charCodeAt(h+2)&&(h+=3,e=t.input.charCodeAt(h),e===0||At(e)))}function kn(t,h){h===1?t.result+=" ":h>1&&(t.result+=ut.repeat(`
`,h-1))}function Xo(t,h,e){var r,o,c,s,d,u,g,m,b=t.kind,y=t.result,w;if(w=t.input.charCodeAt(t.position),At(w)||di(w)||w===35||w===38||w===42||w===33||w===124||w===62||w===39||w===34||w===37||w===64||w===96||(w===63||w===45)&&(o=t.input.charCodeAt(t.position+1),At(o)||e&&di(o)))return!1;for(t.kind="scalar",t.result="",c=s=t.position,d=!1;w!==0;){if(w===58){if(o=t.input.charCodeAt(t.position+1),At(o)||e&&di(o))break}else if(w===35){if(r=t.input.charCodeAt(t.position-1),At(r))break}else{if(t.position===t.lineStart&&en(t)||e&&di(w))break;if(Bt(w))if(u=t.line,g=t.lineStart,m=t.lineIndent,dt(t,!1,-1),t.lineIndent>=h){d=!0,w=t.input.charCodeAt(t.position);continue}else{t.position=s,t.line=u,t.lineStart=g,t.lineIndent=m;break}}d&&(Vt(t,c,s,!1),kn(t,t.line-u),c=s=t.position,d=!1),ii(w)||(s=t.position+1),w=t.input.charCodeAt(++t.position)}return Vt(t,c,s,!1),t.result?!0:(t.kind=b,t.result=y,!1)}function Jo(t,h){var e,r,o;if(e=t.input.charCodeAt(t.position),e!==39)return!1;for(t.kind="scalar",t.result="",t.position++,r=o=t.position;(e=t.input.charCodeAt(t.position))!==0;)if(e===39)if(Vt(t,r,t.position,!0),e=t.input.charCodeAt(++t.position),e===39)r=t.position,t.position++,o=t.position;else return!0;else Bt(e)?(Vt(t,r,o,!0),kn(t,dt(t,!1,h)),r=o=t.position):t.position===t.lineStart&&en(t)?ye(t,"unexpected end of the document within a single quoted scalar"):(t.position++,o=t.position);ye(t,"unexpected end of the stream within a single quoted scalar")}function Qo(t,h){var e,r,o,c,s,d;if(d=t.input.charCodeAt(t.position),d!==34)return!1;for(t.kind="scalar",t.result="",t.position++,e=r=t.position;(d=t.input.charCodeAt(t.position))!==0;){if(d===34)return Vt(t,e,t.position,!0),t.position++,!0;if(d===92){if(Vt(t,e,t.position,!0),d=t.input.charCodeAt(++t.position),Bt(d))dt(t,!1,h);else if(d<256&&zr[d])t.result+=Lr[d],t.position++;else if((s=Ko(d))>0){for(o=s,c=0;o>0;o--)d=t.input.charCodeAt(++t.position),(s=$o(d))>=0?c=(c<<4)+s:ye(t,"expected hexadecimal character");t.result+=Vo(c),t.position++}else ye(t,"unknown escape sequence");e=r=t.position}else Bt(d)?(Vt(t,e,r,!0),kn(t,dt(t,!1,h)),e=r=t.position):t.position===t.lineStart&&en(t)?ye(t,"unexpected end of the document within a double quoted scalar"):(t.position++,r=t.position)}ye(t,"unexpected end of the stream within a double quoted scalar")}function Zo(t,h){var e=!0,r,o,c,s=t.tag,d,u=t.anchor,g,m,b,y,w,T=Object.create(null),S,O,P,C;if(C=t.input.charCodeAt(t.position),C===91)m=93,w=!1,d=[];else if(C===123)m=125,w=!0,d={};else return!1;for(t.anchor!==null&&(t.anchorMap[t.anchor]=d),C=t.input.charCodeAt(++t.position);C!==0;){if(dt(t,!0,h),C=t.input.charCodeAt(t.position),C===m)return t.position++,t.tag=s,t.anchor=u,t.kind=w?"mapping":"sequence",t.result=d,!0;e?C===44&&ye(t,"expected the node content, but found ','"):ye(t,"missed comma between flow collection entries"),O=S=P=null,b=y=!1,C===63&&(g=t.input.charCodeAt(t.position+1),At(g)&&(b=y=!0,t.position++,dt(t,!0,h))),r=t.line,o=t.lineStart,c=t.position,ui(t,h,Gi,!1,!0),O=t.tag,S=t.result,dt(t,!0,h),C=t.input.charCodeAt(t.position),(y||t.line===r)&&C===58&&(b=!0,C=t.input.charCodeAt(++t.position),dt(t,!0,h),ui(t,h,Gi,!1,!0),P=t.result),w?pi(t,d,T,O,S,P,r,o,c):b?d.push(pi(t,null,T,O,S,P,r,o,c)):d.push(S),dt(t,!0,h),C=t.input.charCodeAt(t.position),C===44?(e=!0,C=t.input.charCodeAt(++t.position)):e=!1}ye(t,"unexpected end of the stream within a flow collection")}function es(t,h){var e,r,o=gn,c=!1,s=!1,d=h,u=0,g=!1,m,b;if(b=t.input.charCodeAt(t.position),b===124)r=!1;else if(b===62)r=!0;else return!1;for(t.kind="scalar",t.result="";b!==0;)if(b=t.input.charCodeAt(++t.position),b===43||b===45)gn===o?o=b===43?$n:Ho:ye(t,"repeat of a chomping mode identifier");else if((m=Uo(b))>=0)m===0?ye(t,"bad explicit indentation width of a block scalar; it cannot be less than one"):s?ye(t,"repeat of an indentation width identifier"):(d=h+m-1,s=!0);else break;if(ii(b)){do b=t.input.charCodeAt(++t.position);while(ii(b));if(b===35)do b=t.input.charCodeAt(++t.position);while(!Bt(b)&&b!==0)}for(;b!==0;){for(Sn(t),t.lineIndent=0,b=t.input.charCodeAt(t.position);(!s||t.lineIndent<d)&&b===32;)t.lineIndent++,b=t.input.charCodeAt(++t.position);if(!s&&t.lineIndent>d&&(d=t.lineIndent),Bt(b)){u++;continue}if(t.lineIndent<d){o===$n?t.result+=ut.repeat(`
`,c?1+u:u):o===gn&&c&&(t.result+=`
`);break}for(r?ii(b)?(g=!0,t.result+=ut.repeat(`
`,c?1+u:u)):g?(g=!1,t.result+=ut.repeat(`
`,u+1)):u===0?c&&(t.result+=" "):t.result+=ut.repeat(`
`,u):t.result+=ut.repeat(`
`,c?1+u:u),c=!0,s=!0,u=0,e=t.position;!Bt(b)&&b!==0;)b=t.input.charCodeAt(++t.position);Vt(t,e,t.position,!1)}return!0}function Xn(t,h){var e,r=t.tag,o=t.anchor,c=[],s,d=!1,u;if(t.firstTabInLine!==-1)return!1;for(t.anchor!==null&&(t.anchorMap[t.anchor]=c),u=t.input.charCodeAt(t.position);u!==0&&(t.firstTabInLine!==-1&&(t.position=t.firstTabInLine,ye(t,"tab characters must not be used in indentation")),!(u!==45||(s=t.input.charCodeAt(t.position+1),!At(s))));){if(d=!0,t.position++,dt(t,!0,-1)&&t.lineIndent<=h){c.push(null),u=t.input.charCodeAt(t.position);continue}if(e=t.line,ui(t,h,Ar,!1,!0),c.push(t.result),dt(t,!0,-1),u=t.input.charCodeAt(t.position),(t.line===e||t.lineIndent>h)&&u!==0)ye(t,"bad indentation of a sequence entry");else if(t.lineIndent<h)break}return d?(t.tag=r,t.anchor=o,t.kind="sequence",t.result=c,!0):!1}function ts(t,h,e){var r,o,c,s,d,u,g=t.tag,m=t.anchor,b={},y=Object.create(null),w=null,T=null,S=null,O=!1,P=!1,C;if(t.firstTabInLine!==-1)return!1;for(t.anchor!==null&&(t.anchorMap[t.anchor]=b),C=t.input.charCodeAt(t.position);C!==0;){if(!O&&t.firstTabInLine!==-1&&(t.position=t.firstTabInLine,ye(t,"tab characters must not be used in indentation")),r=t.input.charCodeAt(t.position+1),c=t.line,(C===63||C===58)&&At(r))C===63?(O&&(pi(t,b,y,w,T,null,s,d,u),w=T=S=null),P=!0,O=!0,o=!0):O?(O=!1,o=!0):ye(t,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),t.position+=1,C=r;else{if(s=t.line,d=t.lineStart,u=t.position,!ui(t,e,Er,!1,!0))break;if(t.line===c){for(C=t.input.charCodeAt(t.position);ii(C);)C=t.input.charCodeAt(++t.position);if(C===58)C=t.input.charCodeAt(++t.position),At(C)||ye(t,"a whitespace character is expected after the key-value separator within a block mapping"),O&&(pi(t,b,y,w,T,null,s,d,u),w=T=S=null),P=!0,O=!1,o=!1,w=t.tag,T=t.result;else if(P)ye(t,"can not read an implicit mapping pair; a colon is missed");else return t.tag=g,t.anchor=m,!0}else if(P)ye(t,"can not read a block mapping entry; a multiline key may not be an implicit key");else return t.tag=g,t.anchor=m,!0}if((t.line===c||t.lineIndent>h)&&(O&&(s=t.line,d=t.lineStart,u=t.position),ui(t,h,Xi,!0,o)&&(O?T=t.result:S=t.result),O||(pi(t,b,y,w,T,S,s,d,u),w=T=S=null),dt(t,!0,-1),C=t.input.charCodeAt(t.position)),(t.line===c||t.lineIndent>h)&&C!==0)ye(t,"bad indentation of a mapping entry");else if(t.lineIndent<h)break}return O&&pi(t,b,y,w,T,null,s,d,u),P&&(t.tag=g,t.anchor=m,t.kind="mapping",t.result=b),P}function is(t){var h,e=!1,r=!1,o,c,s;if(s=t.input.charCodeAt(t.position),s!==33)return!1;if(t.tag!==null&&ye(t,"duplication of a tag property"),s=t.input.charCodeAt(++t.position),s===60?(e=!0,s=t.input.charCodeAt(++t.position)):s===33?(r=!0,o="!!",s=t.input.charCodeAt(++t.position)):o="!",h=t.position,e){do s=t.input.charCodeAt(++t.position);while(s!==0&&s!==62);t.position<t.length?(c=t.input.slice(h,t.position),s=t.input.charCodeAt(++t.position)):ye(t,"unexpected end of the stream within a verbatim tag")}else{for(;s!==0&&!At(s);)s===33&&(r?ye(t,"tag suffix cannot contain exclamation marks"):(o=t.input.slice(h-1,t.position+1),Or.test(o)||ye(t,"named tag handle cannot contain such characters"),r=!0,h=t.position+1)),s=t.input.charCodeAt(++t.position);c=t.input.slice(h,t.position),Yo.test(c)&&ye(t,"tag suffix cannot contain flow indicator characters")}c&&!Tr.test(c)&&ye(t,"tag name cannot contain such characters: "+c);try{c=decodeURIComponent(c)}catch{ye(t,"tag name is malformed: "+c)}return e?t.tag=c:Gt.call(t.tagMap,o)?t.tag=t.tagMap[o]+c:o==="!"?t.tag="!"+c:o==="!!"?t.tag="tag:yaml.org,2002:"+c:ye(t,'undeclared tag handle "'+o+'"'),!0}function ns(t){var h,e;if(e=t.input.charCodeAt(t.position),e!==38)return!1;for(t.anchor!==null&&ye(t,"duplication of an anchor property"),e=t.input.charCodeAt(++t.position),h=t.position;e!==0&&!At(e)&&!di(e);)e=t.input.charCodeAt(++t.position);return t.position===h&&ye(t,"name of an anchor node must contain at least one character"),t.anchor=t.input.slice(h,t.position),!0}function rs(t){var h,e,r;if(r=t.input.charCodeAt(t.position),r!==42)return!1;for(r=t.input.charCodeAt(++t.position),h=t.position;r!==0&&!At(r)&&!di(r);)r=t.input.charCodeAt(++t.position);return t.position===h&&ye(t,"name of an alias node must contain at least one character"),e=t.input.slice(h,t.position),Gt.call(t.anchorMap,e)||ye(t,'unidentified alias "'+e+'"'),t.result=t.anchorMap[e],dt(t,!0,-1),!0}function ui(t,h,e,r,o){var c,s,d,u=1,g=!1,m=!1,b,y,w,T,S,O;if(t.listener!==null&&t.listener("open",t),t.tag=null,t.anchor=null,t.kind=null,t.result=null,c=s=d=Xi===e||Ar===e,r&&dt(t,!0,-1)&&(g=!0,t.lineIndent>h?u=1:t.lineIndent===h?u=0:t.lineIndent<h&&(u=-1)),u===1)for(;is(t)||ns(t);)dt(t,!0,-1)?(g=!0,d=c,t.lineIndent>h?u=1:t.lineIndent===h?u=0:t.lineIndent<h&&(u=-1)):d=!1;if(d&&(d=g||o),(u===1||Xi===e)&&(Gi===e||Er===e?S=h:S=h+1,O=t.position-t.lineStart,u===1?d&&(Xn(t,O)||ts(t,O,S))||Zo(t,S)?m=!0:(s&&es(t,S)||Jo(t,S)||Qo(t,S)?m=!0:rs(t)?(m=!0,(t.tag!==null||t.anchor!==null)&&ye(t,"alias node should not have any properties")):Xo(t,S,Gi===e)&&(m=!0,t.tag===null&&(t.tag="?")),t.anchor!==null&&(t.anchorMap[t.anchor]=t.result)):u===0&&(m=d&&Xn(t,O))),t.tag===null)t.anchor!==null&&(t.anchorMap[t.anchor]=t.result);else if(t.tag==="?"){for(t.result!==null&&t.kind!=="scalar"&&ye(t,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+t.kind+'"'),b=0,y=t.implicitTypes.length;b<y;b+=1)if(T=t.implicitTypes[b],T.resolve(t.result)){t.result=T.construct(t.result),t.tag=T.tag,t.anchor!==null&&(t.anchorMap[t.anchor]=t.result);break}}else if(t.tag!=="!"){if(Gt.call(t.typeMap[t.kind||"fallback"],t.tag))T=t.typeMap[t.kind||"fallback"][t.tag];else for(T=null,w=t.typeMap.multi[t.kind||"fallback"],b=0,y=w.length;b<y;b+=1)if(t.tag.slice(0,w[b].tag.length)===w[b].tag){T=w[b];break}T||ye(t,"unknown tag !<"+t.tag+">"),t.result!==null&&T.kind!==t.kind&&ye(t,"unacceptable node kind for !<"+t.tag+'> tag; it should be "'+T.kind+'", not "'+t.kind+'"'),T.resolve(t.result,t.tag)?(t.result=T.construct(t.result,t.tag),t.anchor!==null&&(t.anchorMap[t.anchor]=t.result)):ye(t,"cannot resolve a node with !<"+t.tag+"> explicit tag")}return t.listener!==null&&t.listener("close",t),t.tag!==null||t.anchor!==null||m}function as(t){var h=t.position,e,r,o,c=!1,s;for(t.version=null,t.checkLineBreaks=t.legacy,t.tagMap=Object.create(null),t.anchorMap=Object.create(null);(s=t.input.charCodeAt(t.position))!==0&&(dt(t,!0,-1),s=t.input.charCodeAt(t.position),!(t.lineIndent>0||s!==37));){for(c=!0,s=t.input.charCodeAt(++t.position),e=t.position;s!==0&&!At(s);)s=t.input.charCodeAt(++t.position);for(r=t.input.slice(e,t.position),o=[],r.length<1&&ye(t,"directive name must not be less than one character in length");s!==0;){for(;ii(s);)s=t.input.charCodeAt(++t.position);if(s===35){do s=t.input.charCodeAt(++t.position);while(s!==0&&!Bt(s));break}if(Bt(s))break;for(e=t.position;s!==0&&!At(s);)s=t.input.charCodeAt(++t.position);o.push(t.input.slice(e,t.position))}s!==0&&Sn(t),Gt.call(Vn,r)?Vn[r](t,r,o):Ji(t,'unknown document directive "'+r+'"')}if(dt(t,!0,-1),t.lineIndent===0&&t.input.charCodeAt(t.position)===45&&t.input.charCodeAt(t.position+1)===45&&t.input.charCodeAt(t.position+2)===45?(t.position+=3,dt(t,!0,-1)):c&&ye(t,"directives end mark is expected"),ui(t,t.lineIndent-1,Xi,!1,!0),dt(t,!0,-1),t.checkLineBreaks&&Wo.test(t.input.slice(h,t.position))&&Ji(t,"non-ASCII line breaks are interpreted as content"),t.documents.push(t.result),t.position===t.lineStart&&en(t)){t.input.charCodeAt(t.position)===46&&(t.position+=3,dt(t,!0,-1));return}if(t.position<t.length-1)ye(t,"end of the stream or a document separator is expected");else return}function Pr(t,h){t=String(t),h=h||{},t.length!==0&&(t.charCodeAt(t.length-1)!==10&&t.charCodeAt(t.length-1)!==13&&(t+=`
`),t.charCodeAt(0)===65279&&(t=t.slice(1)));var e=new Go(t,h),r=t.indexOf("\0");for(r!==-1&&(e.position=r,ye(e,"null byte is not allowed in input")),e.input+="\0";e.input.charCodeAt(e.position)===32;)e.lineIndent+=1,e.position+=1;for(;e.position<e.length-1;)as(e);return e.documents}function os(t,h,e){h!==null&&typeof h=="object"&&typeof e=="undefined"&&(e=h,h=null);var r=Pr(t,e);if(typeof h!="function")return r;for(var o=0,c=r.length;o<c;o+=1)h(r[o])}function ss(t,h){var e=Pr(t,h);if(e.length!==0){if(e.length===1)return e[0];throw new St("expected a single document in the stream, but found more")}}var cs=os,ls=ss,Ir={loadAll:cs,load:ls},Rr=Object.prototype.toString,Dr=Object.prototype.hasOwnProperty,Cn=65279,ds=9,Li=10,ps=13,us=32,hs=33,fs=34,yn=35,gs=37,ms=38,ys=39,vs=42,Fr=44,bs=45,Qi=58,_s=61,xs=62,ws=63,Ss=64,Br=91,Nr=93,ks=96,qr=123,Cs=124,Hr=125,yt={};yt[0]="\\0";yt[7]="\\a";yt[8]="\\b";yt[9]="\\t";yt[10]="\\n";yt[11]="\\v";yt[12]="\\f";yt[13]="\\r";yt[27]="\\e";yt[34]='\\"';yt[92]="\\\\";yt[133]="\\N";yt[160]="\\_";yt[8232]="\\L";yt[8233]="\\P";var Es=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],As=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function Os(t,h){var e,r,o,c,s,d,u;if(h===null)return{};for(e={},r=Object.keys(h),o=0,c=r.length;o<c;o+=1)s=r[o],d=String(h[s]),s.slice(0,2)==="!!"&&(s="tag:yaml.org,2002:"+s.slice(2)),u=t.compiledTypeMap.fallback[s],u&&Dr.call(u.styleAliases,d)&&(d=u.styleAliases[d]),e[s]=d;return e}function Ts(t){var h,e,r;if(h=t.toString(16).toUpperCase(),t<=255)e="x",r=2;else if(t<=65535)e="u",r=4;else if(t<=4294967295)e="U",r=8;else throw new St("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+e+ut.repeat("0",r-h.length)+h}var zs=1,Mi=2;function Ls(t){this.schema=t.schema||wn,this.indent=Math.max(1,t.indent||2),this.noArrayIndent=t.noArrayIndent||!1,this.skipInvalid=t.skipInvalid||!1,this.flowLevel=ut.isNothing(t.flowLevel)?-1:t.flowLevel,this.styleMap=Os(this.schema,t.styles||null),this.sortKeys=t.sortKeys||!1,this.lineWidth=t.lineWidth||80,this.noRefs=t.noRefs||!1,this.noCompatMode=t.noCompatMode||!1,this.condenseFlow=t.condenseFlow||!1,this.quotingType=t.quotingType==='"'?Mi:zs,this.forceQuotes=t.forceQuotes||!1,this.replacer=typeof t.replacer=="function"?t.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function Jn(t,h){for(var e=ut.repeat(" ",h),r=0,o=-1,c="",s,d=t.length;r<d;)o=t.indexOf(`
`,r),o===-1?(s=t.slice(r),r=d):(s=t.slice(r,o+1),r=o+1),s.length&&s!==`
`&&(c+=e),c+=s;return c}function vn(t,h){return`
`+ut.repeat(" ",t.indent*h)}function Ms(t,h){var e,r,o;for(e=0,r=t.implicitTypes.length;e<r;e+=1)if(o=t.implicitTypes[e],o.resolve(h))return!0;return!1}function Zi(t){return t===us||t===ds}function Pi(t){return 32<=t&&t<=126||161<=t&&t<=55295&&t!==8232&&t!==8233||57344<=t&&t<=65533&&t!==Cn||65536<=t&&t<=1114111}function Qn(t){return Pi(t)&&t!==Cn&&t!==ps&&t!==Li}function Zn(t,h,e){var r=Qn(t),o=r&&!Zi(t);return(e?r:r&&t!==Fr&&t!==Br&&t!==Nr&&t!==qr&&t!==Hr)&&t!==yn&&!(h===Qi&&!o)||Qn(h)&&!Zi(h)&&t===yn||h===Qi&&o}function Ps(t){return Pi(t)&&t!==Cn&&!Zi(t)&&t!==bs&&t!==ws&&t!==Qi&&t!==Fr&&t!==Br&&t!==Nr&&t!==qr&&t!==Hr&&t!==yn&&t!==ms&&t!==vs&&t!==hs&&t!==Cs&&t!==_s&&t!==xs&&t!==ys&&t!==fs&&t!==gs&&t!==Ss&&t!==ks}function Is(t){return!Zi(t)&&t!==Qi}function Ti(t,h){var e=t.charCodeAt(h),r;return e>=55296&&e<=56319&&h+1<t.length&&(r=t.charCodeAt(h+1),r>=56320&&r<=57343)?(e-55296)*1024+r-56320+65536:e}function jr(t){var h=/^\n* /;return h.test(t)}var Wr=1,bn=2,Yr=3,$r=4,li=5;function Rs(t,h,e,r,o,c,s,d){var u,g=0,m=null,b=!1,y=!1,w=r!==-1,T=-1,S=Ps(Ti(t,0))&&Is(Ti(t,t.length-1));if(h||s)for(u=0;u<t.length;g>=65536?u+=2:u++){if(g=Ti(t,u),!Pi(g))return li;S=S&&Zn(g,m,d),m=g}else{for(u=0;u<t.length;g>=65536?u+=2:u++){if(g=Ti(t,u),g===Li)b=!0,w&&(y=y||u-T-1>r&&t[T+1]!==" ",T=u);else if(!Pi(g))return li;S=S&&Zn(g,m,d),m=g}y=y||w&&u-T-1>r&&t[T+1]!==" "}return!b&&!y?S&&!s&&!o(t)?Wr:c===Mi?li:bn:e>9&&jr(t)?li:s?c===Mi?li:bn:y?$r:Yr}function Ds(t,h,e,r,o){t.dump=(function(){if(h.length===0)return t.quotingType===Mi?'""':"''";if(!t.noCompatMode&&(Es.indexOf(h)!==-1||As.test(h)))return t.quotingType===Mi?'"'+h+'"':"'"+h+"'";var c=t.indent*Math.max(1,e),s=t.lineWidth===-1?-1:Math.max(Math.min(t.lineWidth,40),t.lineWidth-c),d=r||t.flowLevel>-1&&e>=t.flowLevel;function u(g){return Ms(t,g)}switch(Rs(h,d,t.indent,s,u,t.quotingType,t.forceQuotes&&!r,o)){case Wr:return h;case bn:return"'"+h.replace(/'/g,"''")+"'";case Yr:return"|"+er(h,t.indent)+tr(Jn(h,c));case $r:return">"+er(h,t.indent)+tr(Jn(Fs(h,s),c));case li:return'"'+Bs(h)+'"';default:throw new St("impossible error: invalid scalar style")}})()}function er(t,h){var e=jr(t)?String(h):"",r=t[t.length-1]===`
`,o=r&&(t[t.length-2]===`
`||t===`
`),c=o?"+":r?"":"-";return e+c+`
`}function tr(t){return t[t.length-1]===`
`?t.slice(0,-1):t}function Fs(t,h){for(var e=/(\n+)([^\n]*)/g,r=(function(){var g=t.indexOf(`
`);return g=g!==-1?g:t.length,e.lastIndex=g,ir(t.slice(0,g),h)})(),o=t[0]===`
`||t[0]===" ",c,s;s=e.exec(t);){var d=s[1],u=s[2];c=u[0]===" ",r+=d+(!o&&!c&&u!==""?`
`:"")+ir(u,h),o=c}return r}function ir(t,h){if(t===""||t[0]===" ")return t;for(var e=/ [^ ]/g,r,o=0,c,s=0,d=0,u="";r=e.exec(t);)d=r.index,d-o>h&&(c=s>o?s:d,u+=`
`+t.slice(o,c),o=c+1),s=d;return u+=`
`,t.length-o>h&&s>o?u+=t.slice(o,s)+`
`+t.slice(s+1):u+=t.slice(o),u.slice(1)}function Bs(t){for(var h="",e=0,r,o=0;o<t.length;e>=65536?o+=2:o++)e=Ti(t,o),r=yt[e],!r&&Pi(e)?(h+=t[o],e>=65536&&(h+=t[o+1])):h+=r||Ts(e);return h}function Ns(t,h,e){var r="",o=t.tag,c,s,d;for(c=0,s=e.length;c<s;c+=1)d=e[c],t.replacer&&(d=t.replacer.call(e,String(c),d)),(jt(t,h,d,!1,!1)||typeof d=="undefined"&&jt(t,h,null,!1,!1))&&(r!==""&&(r+=","+(t.condenseFlow?"":" ")),r+=t.dump);t.tag=o,t.dump="["+r+"]"}function nr(t,h,e,r){var o="",c=t.tag,s,d,u;for(s=0,d=e.length;s<d;s+=1)u=e[s],t.replacer&&(u=t.replacer.call(e,String(s),u)),(jt(t,h+1,u,!0,!0,!1,!0)||typeof u=="undefined"&&jt(t,h+1,null,!0,!0,!1,!0))&&((!r||o!=="")&&(o+=vn(t,h)),t.dump&&Li===t.dump.charCodeAt(0)?o+="-":o+="- ",o+=t.dump);t.tag=c,t.dump=o||"[]"}function qs(t,h,e){var r="",o=t.tag,c=Object.keys(e),s,d,u,g,m;for(s=0,d=c.length;s<d;s+=1)m="",r!==""&&(m+=", "),t.condenseFlow&&(m+='"'),u=c[s],g=e[u],t.replacer&&(g=t.replacer.call(e,u,g)),jt(t,h,u,!1,!1)&&(t.dump.length>1024&&(m+="? "),m+=t.dump+(t.condenseFlow?'"':"")+":"+(t.condenseFlow?"":" "),jt(t,h,g,!1,!1)&&(m+=t.dump,r+=m));t.tag=o,t.dump="{"+r+"}"}function Hs(t,h,e,r){var o="",c=t.tag,s=Object.keys(e),d,u,g,m,b,y;if(t.sortKeys===!0)s.sort();else if(typeof t.sortKeys=="function")s.sort(t.sortKeys);else if(t.sortKeys)throw new St("sortKeys must be a boolean or a function");for(d=0,u=s.length;d<u;d+=1)y="",(!r||o!=="")&&(y+=vn(t,h)),g=s[d],m=e[g],t.replacer&&(m=t.replacer.call(e,g,m)),jt(t,h+1,g,!0,!0,!0)&&(b=t.tag!==null&&t.tag!=="?"||t.dump&&t.dump.length>1024,b&&(t.dump&&Li===t.dump.charCodeAt(0)?y+="?":y+="? "),y+=t.dump,b&&(y+=vn(t,h)),jt(t,h+1,m,!0,b)&&(t.dump&&Li===t.dump.charCodeAt(0)?y+=":":y+=": ",y+=t.dump,o+=y));t.tag=c,t.dump=o||"{}"}function rr(t,h,e){var r,o,c,s,d,u;for(o=e?t.explicitTypes:t.implicitTypes,c=0,s=o.length;c<s;c+=1)if(d=o[c],(d.instanceOf||d.predicate)&&(!d.instanceOf||typeof h=="object"&&h instanceof d.instanceOf)&&(!d.predicate||d.predicate(h))){if(e?d.multi&&d.representName?t.tag=d.representName(h):t.tag=d.tag:t.tag="?",d.represent){if(u=t.styleMap[d.tag]||d.defaultStyle,Rr.call(d.represent)==="[object Function]")r=d.represent(h,u);else if(Dr.call(d.represent,u))r=d.represent[u](h,u);else throw new St("!<"+d.tag+'> tag resolver accepts not "'+u+'" style');t.dump=r}return!0}return!1}function jt(t,h,e,r,o,c,s){t.tag=null,t.dump=e,rr(t,e,!1)||rr(t,e,!0);var d=Rr.call(t.dump),u=r,g;r&&(r=t.flowLevel<0||t.flowLevel>h);var m=d==="[object Object]"||d==="[object Array]",b,y;if(m&&(b=t.duplicates.indexOf(e),y=b!==-1),(t.tag!==null&&t.tag!=="?"||y||t.indent!==2&&h>0)&&(o=!1),y&&t.usedDuplicates[b])t.dump="*ref_"+b;else{if(m&&y&&!t.usedDuplicates[b]&&(t.usedDuplicates[b]=!0),d==="[object Object]")r&&Object.keys(t.dump).length!==0?(Hs(t,h,t.dump,o),y&&(t.dump="&ref_"+b+t.dump)):(qs(t,h,t.dump),y&&(t.dump="&ref_"+b+" "+t.dump));else if(d==="[object Array]")r&&t.dump.length!==0?(t.noArrayIndent&&!s&&h>0?nr(t,h-1,t.dump,o):nr(t,h,t.dump,o),y&&(t.dump="&ref_"+b+t.dump)):(Ns(t,h,t.dump),y&&(t.dump="&ref_"+b+" "+t.dump));else if(d==="[object String]")t.tag!=="?"&&Ds(t,t.dump,h,c,u);else{if(d==="[object Undefined]")return!1;if(t.skipInvalid)return!1;throw new St("unacceptable kind of an object to dump "+d)}t.tag!==null&&t.tag!=="?"&&(g=encodeURI(t.tag[0]==="!"?t.tag.slice(1):t.tag).replace(/!/g,"%21"),t.tag[0]==="!"?g="!"+g:g.slice(0,18)==="tag:yaml.org,2002:"?g="!!"+g.slice(18):g="!<"+g+">",t.dump=g+" "+t.dump)}return!0}function js(t,h){var e=[],r=[],o,c;for(_n(t,e,r),o=0,c=r.length;o<c;o+=1)h.duplicates.push(e[r[o]]);h.usedDuplicates=new Array(c)}function _n(t,h,e){var r,o,c;if(t!==null&&typeof t=="object")if(o=h.indexOf(t),o!==-1)e.indexOf(o)===-1&&e.push(o);else if(h.push(t),Array.isArray(t))for(o=0,c=t.length;o<c;o+=1)_n(t[o],h,e);else for(r=Object.keys(t),o=0,c=r.length;o<c;o+=1)_n(t[r[o]],h,e)}function Ws(t,h){h=h||{};var e=new Ls(h);e.noRefs||js(t,e);var r=t;return e.replacer&&(r=e.replacer.call({"":r},"",r)),jt(e,0,r,!0,!0)?e.dump+`
`:""}var Ys=Ws,$s={dump:Ys};function En(t,h){return function(){throw new Error("Function yaml."+t+" is removed in js-yaml 4. Use yaml."+h+" instead, which is now safe by default.")}}var Ks=ft,Us=sr,Vs=pr,Gs=mr,Xs=yr,Js=wn,Qs=Ir.load,Zs=Ir.loadAll,ec=$s.dump,tc=St,ic={binary:wr,float:gr,map:dr,null:ur,pairs:kr,set:Cr,timestamp:_r,bool:hr,int:fr,merge:xr,omap:Sr,seq:lr,str:cr},nc=En("safeLoad","load"),rc=En("safeLoadAll","loadAll"),ac=En("safeDump","dump"),oc={Type:Ks,Schema:Us,FAILSAFE_SCHEMA:Vs,JSON_SCHEMA:Gs,CORE_SCHEMA:Xs,DEFAULT_SCHEMA:Js,load:Qs,loadAll:Zs,dump:ec,YAMLException:tc,types:ic,safeLoad:nc,safeLoadAll:rc,safeDump:ac},Kr=oc;window.interact||(window.interact=Ur.default);window.jsyaml||(window.jsyaml=Kr);var sc="0.9.5";console.info(`%c drag-and-drop-card %c v${sc} `,"color:#fff;background:#03a9f4;font-weight:700;padding:2px 6px;border-radius:3px 0 0 3px","color:#03303a;background:#bdeaff;padding:2px 6px;border-radius:0 3px 3px 0");var cc=(t,...h)=>console.debug(`[drag-and-drop-card] ${t}`,...h);console.info("%c drag-and-drop-card loaded","color:#03a9f4;font-weight:700;");var An=()=>new Promise(t=>requestAnimationFrame(()=>t())),lc=()=>new Promise(t=>window.requestIdleCallback?requestIdleCallback(()=>t()):setTimeout(t,0)),On=class t extends HTMLElement{constructor(){super();jn(this,"__booting",!1);this.shadowRoot||this.attachShadow({mode:"open"}),this.__rebuiltCards=new WeakSet}_updateTabsA11y_(){var o;let e=this.tabsBar;if(!e)return;e.setAttribute("role","tablist"),e.querySelectorAll(".ddc-tab").forEach((c,s)=>{let d=c.classList.contains("active");c.setAttribute("role","tab"),c.setAttribute("aria-selected",String(d)),c.setAttribute("tabindex",d?"0":"-1"),c.dataset.index=String(s)}),this.__tabsKeyHandler||(this.__tabsKeyHandler=c=>{if(!["ArrowLeft","ArrowRight","Home","End"].includes(c.key))return;let d=Array.from(e.querySelectorAll(".ddc-tab"));if(!d.length)return;c.preventDefault();let u=d.findIndex(y=>y===document.activeElement),g=d.findIndex(y=>y.classList.contains("active")),m=u>=0?u:g>=0?g:0;c.key==="ArrowRight"&&(m=Math.min(d.length-1,m+1)),c.key==="ArrowLeft"&&(m=Math.max(0,m-1)),c.key==="Home"&&(m=0),c.key==="End"&&(m=d.length-1);let b=d[m];if(b){try{b.focus({preventScroll:!1})}catch{}b.click()}},e.addEventListener("keydown",this.__tabsKeyHandler)),this.__tabsScrollHandler||(this.__tabsScrollHandler=()=>{var c;return(c=this._updateTabOverflowShadows_)==null?void 0:c.call(this)},e.addEventListener("scroll",this.__tabsScrollHandler,{passive:!0})),(o=this._updateTabOverflowShadows_)==null||o.call(this)}_getCurrentDashboardUrlPath_(){let r=(window.location.pathname||"/").replace(/^\/+/,"").split("/")[0]||"lovelace";return r==="lovelace"?null:r}async _ensureCardIdSeededInStorage_(){var r;if((r=this.config)!=null&&r.id)return this.config.id;let e=crypto!=null&&crypto.randomUUID?crypto.randomUUID():"ddc_"+Math.random().toString(36).slice(2);this.config={...this.config,id:e};try{let o=this._getCurrentDashboardUrlPath_(),c=await this.hass.callWS(o?{type:"lovelace/config",url_path:o}:{type:"lovelace/config"}),s=this._findThisCardPathRecursive_(c,w=>(w==null?void 0:w.type)==="custom:drag-and-drop-card"&&(!w.id||w.id===e));if(!s)return e;let{viewIndex:d,cardIndex:u,parentPath:g}=s,m=c.views[d],y={...this._getCardByPath_(m,g,u),id:e};this._setCardByPath_(m,g,u,y),await this.hass.callWS(o?{type:"lovelace/config/save",url_path:o,config:c}:{type:"lovelace/config/save",config:c})}catch{}return e}async _persistThisCardConfigToStorage_(){var y,w;await this._ensureCardIdSeededInStorage_();let e={type:"custom:drag-and-drop-card",id:(y=this.config)==null?void 0:y.id,...this._config},r=this._getCurrentDashboardUrlPath_(),o=await this.hass.callWS(r?{type:"lovelace/config",url_path:r}:{type:"lovelace/config"}),c=this._findThisCardPathRecursive_(o,T=>{var S;return(T==null?void 0:T.type)==="custom:drag-and-drop-card"&&(T==null?void 0:T.id)===((S=this.config)==null?void 0:S.id)});if(!c)throw new Error("Card not found in Lovelace config");let{viewIndex:s,cardIndex:d,parentPath:u}=c,g=o.views[s],b={...this._getCardByPath_(g,u,d),...e};this._setCardByPath_(g,u,d,b),await this.hass.callWS(r?{type:"lovelace/config/save",url_path:r,config:o}:{type:"lovelace/config/save",config:o}),this.config=b,(w=this.requestUpdate)==null||w.call(this)}_findThisCardPathRecursive_(e,r){let o=(e==null?void 0:e.views)||[];for(let c=0;c<o.length;c++){let s=this._findInCardTree_(o[c],r);if(s)return{viewIndex:c,...s}}return null}_findInCardTree_(e,r,o=[]){var s;let c=(e==null?void 0:e.cards)||[];for(let d=0;d<c.length;d++){let u=c[d];if(r(u))return{cardIndex:d,parentPath:o};if((s=u==null?void 0:u.cards)!=null&&s.length){let g=this._findInCardTree_(u,r,o.concat(d));if(g)return g}}return null}_getCardByPath_(e,r,o){let c=e;for(let s of r||[])c=c.cards[s];return c.cards[o]}_setCardByPath_(e,r,o,c){let s=e;for(let d of r||[])s=s.cards[d];s.cards[o]=c}_ensureToolbarStyles_(){try{if(this.shadowRoot.querySelector("#ddc-toolbar-styles"))return;let r=document.createElement("style");r.id="ddc-toolbar-styles",r.textContent=`/* ===== Edit toolbar ===== */
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
  }`,this.shadowRoot.appendChild(r)}catch(e){console.warn("Toolbar style inject failed",e)}}_ensureSettingsStyles_(){if(this.shadowRoot.querySelector("#ddc-settings-styles"))return;let e=document.createElement("style");e.id="ddc-settings-styles",e.textContent=`
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
  `,this.shadowRoot.appendChild(e)}_setHeaderVisible_(e=!0){var r,o,c,s,d;try{(((r=this._deepQueryAll)==null?void 0:r.call(this,"app-header, ha-top-app-bar, ha-top-app-bar-fixed, mwc-top-app-bar-fixed, ha-header-bar, app-toolbar, ha-toolbar"))||[]).forEach(y=>{y&&(y.dataset.ddcPrevDisplayHeader===void 0&&(y.dataset.ddcPrevDisplayHeader=y.style.display||"",y.dataset.ddcPrevMinH=y.style.minHeight||"",y.dataset.ddcPrevH=y.style.height||"",y.dataset.ddcPrevVis=y.style.visibility||""),e?(y.style.display=y.dataset.ddcPrevDisplayHeader||"",y.style.minHeight=y.dataset.ddcPrevMinH||"",y.style.height=y.dataset.ddcPrevH||"",y.style.visibility=y.dataset.ddcPrevVis||"",y.removeAttribute("hidden")):(y.style.display="none",y.style.minHeight="0",y.style.height="0",y.style.visibility="hidden",y.setAttribute("hidden","")))}),(((o=this._deepQueryAll)==null?void 0:o.call(this,'[slot="actionItems"], ha-icon-button, ha-button-menu, assist-button, search-input, ha-quick-bar, ha-mwc-menu'))||[]).forEach(y=>{y&&(y.dataset.ddcPrevDisplayAction===void 0&&(y.dataset.ddcPrevDisplayAction=y.style.display||"",y.dataset.ddcPrevVisAction=y.style.visibility||""),e?(y.style.display=y.dataset.ddcPrevDisplayAction||"",y.style.visibility=y.dataset.ddcPrevVisAction||""):(y.style.display="none",y.style.visibility="hidden"))}),[...((c=this._deepQueryAll)==null?void 0:c.call(this,"ha-app-layout"))||[],...((s=this._deepQueryAll)==null?void 0:s.call(this,"home-assistant-main"))||[],document.documentElement,document.body].filter(Boolean).forEach(y=>{if(y)if(y.dataset.ddcPrevHdrVars===void 0&&(y.dataset.ddcPrevHdrVars=JSON.stringify({mdc:y.style.getPropertyValue("--mdc-top-app-bar-height")||"",app:y.style.getPropertyValue("--app-header-height")||"",hdr:y.style.getPropertyValue("--header-height")||"",hah:y.style.getPropertyValue("--ha-header-height")||"",pad:y.style&&(y.style.paddingTop||"")||""})),e)try{let w=JSON.parse(y.dataset.ddcPrevHdrVars||"{}");y.style.setProperty("--mdc-top-app-bar-height",w.mdc||""),y.style.setProperty("--app-header-height",w.app||""),y.style.setProperty("--header-height",w.hdr||""),y.style.setProperty("--ha-header-height",w.hah||""),w.pad!==void 0&&(y.style.paddingTop=w.pad||"")}catch{}else{y.style.setProperty("--mdc-top-app-bar-height","0px"),y.style.setProperty("--app-header-height","0px"),y.style.setProperty("--header-height","0px"),y.style.setProperty("--ha-header-height","0px");try{y.style.paddingTop="0px"}catch{}}}),(((d=this._deepQueryAll)==null?void 0:d.call(this,"#contentContainer"))||[]).forEach(y=>{y&&(y.dataset.ddcPrevContentPadTop===void 0&&(y.dataset.ddcPrevContentPadTop=y.style&&(y.style.paddingTop||"")||""),y.style.paddingTop=e?y.dataset.ddcPrevContentPadTop||"":"0px")})}catch{}}_setSidebarVisible_(e=!0){var r,o;try{(((r=this._deepQueryAll)==null?void 0:r.call(this,"ha-sidebar"))||[]).forEach(d=>{d&&(d.dataset.ddcPrevDisplaySidebar===void 0&&(d.dataset.ddcPrevDisplaySidebar=d.style.display||""),d.style.display=e?d.dataset.ddcPrevDisplaySidebar||"":"none")}),(((o=this._deepQueryAll)==null?void 0:o.call(this,"ha-drawer"))||[]).forEach(d=>{if(d){d.dataset.ddcPrevDrawerWidth===void 0&&(d.dataset.ddcPrevDrawerWidth=d.style.getPropertyValue("--mdc-drawer-width")||""),e?d.style.setProperty("--mdc-drawer-width",d.dataset.ddcPrevDrawerWidth||""):d.style.setProperty("--mdc-drawer-width","0px");try{!e&&typeof d.close=="function"&&d.close()}catch{}}})}catch{}}_applyHaChromeVisibility_(){var e;try{let r=!!this.editMode||((e=this._isInHaEditorPreview)==null?void 0:e.call(this));r||!this.hideHaHeader?this._setHeaderVisible_(!0):this._setHeaderVisible_(!1),r||!this.hideHaSidebar?this._setSidebarVisible_(!0):this._setSidebarVisible_(!1)}catch{}}_applyBackgroundImageFromConfig(){var c;try{let s=navigator.userAgent||"";if(/iPad|iPhone|iPod/.test(s)&&r&&typeof r.src=="string"&&r.src.startsWith("data:")&&r.src.length>3e5){console.warn("[drag-and-drop-card] Skipping large inline background on iOS for stability.");return}}catch{}let e=this._config||{},r=e.background_image||e.bg_image||null,o=this.cardContainer;if(o)if(r&&r.src){let s=String(r.src).trim(),d=r.repeat===!0||r.repeat==="repeat"?"repeat":"no-repeat",u=Math.max(0,Math.min(1,Number((c=r.opacity)!=null?c:1))),g=r.size||"cover",m=r.position||"center center",b=r.attachment||"scroll",y=r.filter||"none";o.style.setProperty("--ddc-bg-image",s?`url("${s.replace(/"/g,'"')}")`:"none"),o.style.setProperty("--ddc-bg-repeat",d),o.style.setProperty("--ddc-bg-opacity",String(u)),o.style.setProperty("--ddc-bg-size",g),o.style.setProperty("--ddc-bg-position",m),o.style.setProperty("--ddc-bg-attachment",b),o.style.setProperty("--ddc-bg-filter",y),o.classList.add("has-bg-image")}else o.style.removeProperty("--ddc-bg-image"),o.style.removeProperty("--ddc-bg-repeat"),o.style.removeProperty("--ddc-bg-opacity"),o.style.removeProperty("--ddc-bg-size"),o.style.removeProperty("--ddc-bg-position"),o.style.removeProperty("--ddc-bg-attachment"),o.style.removeProperty("--ddc-bg-filter"),o.classList.remove("has-bg-image")}_applyBackgroundFromConfig(){var e,r,o,c,s,d,u,g;try{let m=((e=this._config)==null?void 0:e.background_mode)||((o=(r=this._config)==null?void 0:r.background_image)!=null&&o.src?"image":"none");if((c=this._destroyParticles_)==null||c.call(this),(s=this._destroyYouTube_)==null||s.call(this),m!=="image"){let b=this.cardContainer;b&&(b.style.removeProperty("--ddc-bg-image"),b.style.removeProperty("--ddc-bg-repeat"),b.style.removeProperty("--ddc-bg-opacity"),b.style.removeProperty("--ddc-bg-size"),b.style.removeProperty("--ddc-bg-position"),b.style.removeProperty("--ddc-bg-attachment"),b.style.removeProperty("--ddc-bg-filter"),b.classList.remove("has-bg-image"))}if(m==="image"){(d=this._applyBackgroundImageFromConfig)==null||d.call(this);return}if(m==="particles"){let b=((u=this._config)==null?void 0:u.background_particles)||{};this._attachParticlesBackground_(b);return}if(m==="youtube"){let b=((g=this._config)==null?void 0:g.background_youtube)||{};this._attachYouTubeBackground_(b);return}}catch(m){console.warn("[drag-and-drop-card] _applyBackgroundFromConfig failed:",m)}}_ensureBgHost_(){let e=this.cardContainer;if(!e)return null;let r=e.querySelector("#ddcBgHost");return r?r.innerHTML="":(r=document.createElement("div"),r.className="ddc-bg-host",r.id="ddcBgHost",r.setAttribute("aria-hidden","true"),e.prepend(r)),r}async _loadScriptOnce_(e){if(!e)throw new Error("script src required");if(this.__scriptCache||(this.__scriptCache=new Map),this.__scriptCache.has(e))return this.__scriptCache.get(e);let r=new Promise((o,c)=>{let s=document.createElement("script");s.src=e,s.async=!0,s.onload=()=>o(!0),s.onerror=()=>c(new Error("failed to load "+e)),document.head.appendChild(s)});return this.__scriptCache.set(e,r),r}_getRenderRoot_(){return this.renderRoot||this.shadowRoot||this}_withScopedDocument_(e){let r=this._getRenderRoot_();if(!r||r===document||!r.querySelector)return e();let o=document,c=o.getElementById.bind(o),s=o.querySelector?o.querySelector.bind(o):null;o.getElementById=d=>{try{let u=window.CSS&&CSS.escape?CSS.escape(String(d)):String(d);return r.querySelector("#"+u)||c(d)}catch{return c(d)}},s&&(o.querySelector=d=>{try{return r.querySelector(d)||s(d)}catch{return s(d)}});try{return e()}finally{o.getElementById=c,s&&(o.querySelector=s)}}async _ensureParticles_(){if(window.particlesJS)return!0;if(!this.__particlesLoadPromise){let e=r=>new Promise((o,c)=>{let s=document.createElement("script");s.src=r,s.async=!0,s.onload=()=>o(!0),s.onerror=()=>c(new Error("Failed to load "+r)),document.head.appendChild(s)});this.__particlesLoadPromise=e("/local/particles.min.js").catch(()=>e("https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js")).then(()=>!!window.particlesJS).catch(()=>!1)}return this.__particlesLoadPromise}_attachParticlesBackground_(e={}){var g,m;let r=(g=this._ensureBgHost_)==null?void 0:g.call(this);if(!r)return;try{(m=this._destroyParticles_)==null||m.call(this)}catch{}r.innerHTML="";let o=document.createElement("div");o.id="ddcParticles",o.className="particles-js",o.style.position="absolute",o.style.inset="0",r.appendChild(o);let c={particles:{number:{value:70,density:{enable:!0,value_area:900}},color:{value:"#ffffff"},shape:{type:"circle"},opacity:{value:.4},size:{value:3,random:!0},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.3,width:1},move:{enable:!0,speed:2,out_mode:"out"}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1},onclick:{enable:!1},resize:!0},modes:{repulse:{distance:100},push:{particles_nb:4}}},retina_detect:!0},s=!!e.pointer_events,d=e.config||JSON.parse(JSON.stringify(c));s?(d.interactivity.events.onhover={enable:!0,mode:"repulse"},d.interactivity.events.onclick={enable:!0,mode:"push"},r.style.pointerEvents="auto"):r.style.pointerEvents="none",(async()=>{var w;if(!await((w=this._ensureParticles_)==null?void 0:w.call(this))||!window.particlesJS)return;await(typeof requestAnimationFrame=="function"?new Promise(T=>requestAnimationFrame(()=>T())):Promise.resolve()),await(typeof requestAnimationFrame=="function"?new Promise(T=>requestAnimationFrame(()=>T())):Promise.resolve());let y=d;if(e.config_url)try{y=await(await fetch(e.config_url,{cache:"no-store"})).json()}catch(T){console.warn("[drag-and-drop-card] Failed to fetch particles config; falling back to defaults",T),y=d}this._withScopedDocument_(()=>{if(!Array.isArray(window.pJSDom))try{window.pJSDom=[]}catch{}window.particlesJS("ddcParticles",y)}),Array.isArray(window.pJSDom)&&window.pJSDom.length&&(this.__particlesInst=window.pJSDom[window.pJSDom.length-1])})(),this.__particlesHost=r}_destroyParticles_(){try{Array.isArray(window.pJSDom)||(window.pJSDom=[]),window.pJSDom.length&&(window.pJSDom.forEach(e=>{var r,o,c,s,d,u,g,m;try{(s=(c=(o=(r=e.pJS)==null?void 0:r.fn)==null?void 0:o.vendors)==null?void 0:c.destroy)==null||s.call(c)}catch{}try{(m=(g=(u=(d=e.pJS)==null?void 0:d.fn)==null?void 0:u.vendors)==null?void 0:g.destroypJS)==null||m.call(g)}catch{}}),window.pJSDom.length=0)}catch{}this.__particlesHost&&(this.__particlesHost.innerHTML=""),this.__particlesHost=null,this.__particlesInst=null}_parseYouTubeId_(e){if(!e)return null;let r=String(e).trim(),o=r.match(/(?:youtube\.com\/.*[?&]v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([A-Za-z0-9_-]{11})/)||r.match(/^([A-Za-z0-9_-]{11})$/);return o?o[1]:null}async _ensureYouTube_(){var e;return(e=window.YT)!=null&&e.Player?!0:(this.__ytReadyPromise||(this.__ytReadyPromise=new Promise(r=>{var s;let o=()=>r(!0);if((s=window.YT)!=null&&s.Player)return o();window.onYouTubeIframeAPIReady=o;let c=document.createElement("script");c.src="https://www.youtube.com/iframe_api",c.async=!0,c.onerror=()=>r(!1),document.head.appendChild(c)})),this.__ytReadyPromise)}_attachYouTubeIframeDirect_(e,r,{start:o,end:c,mute:s=!0,loop:d=!0}={}){var b;let u=new URLSearchParams({autoplay:"1",mute:s?"1":"0",controls:"0",playsinline:"1",rel:"0",modestbranding:"1",iv_load_policy:"3",loop:d?"1":"0"});d&&u.set("playlist",r),Number.isFinite(o)&&u.set("start",String(o)),Number.isFinite(c)&&u.set("end",String(c));let g=`https://www.youtube.com/embed/${r}?${u.toString()}`,m=document.createElement("iframe");m.src=g,m.setAttribute("frameborder","0"),m.setAttribute("allow","autoplay; encrypted-media; picture-in-picture; fullscreen"),m.setAttribute("allowfullscreen","true"),m.style.position="absolute",m.style.inset="0",m.style.width="100%",m.style.height="100%",e.appendChild(m),this.__ytWrap=e,(b=this._layoutYtBackground_)==null||b.call(this)}_attachYouTubeBackground_(e={}){this.__ytSize=e.size||"cover",this.__ytPosition=e.position||"center",this.__ytOpacity=e.opacity!=null?Math.max(0,Math.min(1,Number(e.opacity))):1,this.__ytAttachment=e.attachment||"scroll";let r=String(this.__ytPosition).toLowerCase(),o=.5,c=.5;r.includes("left")?o=0:r.includes("right")&&(o=1),r.includes("top")?c=0:r.includes("bottom")&&(c=1),(r==="center"||r==="centre"||r==="middle")&&(o=.5,c=.5),this.__ytAx=o,this.__ytAy=c;let s=this._ensureBgHost_();if(!s)return;let d=this._parseYouTubeId_(e.video_id||e.url);if(!d){console.warn("[drag-and-drop-card] No YouTube video id");return}let u=document.createElement("div");u.className="yt-bg",this.__ytAttachment==="fixed"?(u.style.position="fixed",u.style.left="0",u.style.top="0",u.style.width="100%",u.style.height="100%"):(u.style.position="absolute",u.style.inset="0"),u.style.opacity=String(this.__ytOpacity),u.style.filter="none",u.style.pointerEvents="none",s.appendChild(u);let g=document.createElement("div");g.id="ddcYtFrame",g.style.position="absolute",g.style.left="0",g.style.top="0",g.style.width="100%",g.style.height="100%",u.appendChild(g);let m=Number.isFinite(e.start)?Number(e.start):void 0,b=Number.isFinite(e.end)?Number(e.end):void 0,y=e.mute!==!1,w=e.loop!==!1;(async()=>{if(!await this._ensureYouTube_()||!(window.YT&&window.YT.Player)){if(this._attachYouTubeIframeDirect_(u,d,{start:m,end:b,mute:y,loop:w}),!this.__ytResizeObs){this.__ytResizeObs=new ResizeObserver(()=>{var O;return(O=this._layoutYtBackground_)==null?void 0:O.call(this)});try{this.__ytResizeObs.observe(this.cardContainer)}catch{}window.addEventListener("resize",this.__ytOnWinResize=()=>{var O;return(O=this._layoutYtBackground_)==null?void 0:O.call(this)})}return}if(this.__ytPlayer=new window.YT.Player(g,{width:"100%",height:"100%",videoId:d,playerVars:{autoplay:1,controls:0,disablekb:1,fs:0,iv_load_policy:3,modestbranding:1,rel:0,playsinline:1,loop:w?1:0,playlist:w?d:void 0,start:m,end:b},events:{onReady:O=>{var P;try{y&&O.target.mute(),O.target.playVideo()}catch{}(P=this._layoutYtBackground_)==null||P.call(this)},onStateChange:O=>{if(O.data===window.YT.PlayerState.ENDED&&w)try{let P=Number.isFinite(m)?m:0,C=window.performance&&performance.now?performance.now():Date.now();(!this.__ytLastLoopAt||C-this.__ytLastLoopAt>1500)&&(this.__ytLastLoopAt=C,O.target.seekTo(P,!0),O.target.playVideo())}catch{}}}}),!this.__ytResizeObs){this.__ytResizeObs=new ResizeObserver(()=>{var O;return(O=this._layoutYtBackground_)==null?void 0:O.call(this)});try{this.__ytResizeObs.observe(this.cardContainer)}catch{}window.addEventListener("resize",this.__ytOnWinResize=()=>{var O;return(O=this._layoutYtBackground_)==null?void 0:O.call(this)})}})(),this.__ytWrap=u}_layoutYtBackground_(){var e,r,o,c,s,d,u,g;try{if(!this.__ytWrap)return;let m=this.__scaleOuter||this.cardContainer,b=0,y=0;try{b=parseFloat((r=(e=this.cardContainer)==null?void 0:e.style)==null?void 0:r.width)||((o=this.cardContainer)==null?void 0:o.scrollWidth)||((c=this.cardContainer)==null?void 0:c.offsetWidth)||0,y=parseFloat((d=(s=this.cardContainer)==null?void 0:s.style)==null?void 0:d.height)||((u=this.cardContainer)==null?void 0:u.scrollHeight)||((g=this.cardContainer)==null?void 0:g.offsetHeight)||0}catch{}let w,T;try{if(String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"){let G=m.getBoundingClientRect();if(w=G.width,b>0){let ee=Math.min(w/b,1);T=y*ee}else T=G.height}else w=b||m.getBoundingClientRect().width,T=y||m.getBoundingClientRect().height}catch{let H=m.getBoundingClientRect();w=H.width,T=H.height}let S=this.__ytAttachment==="fixed",O=S&&window.innerWidth||w,P=S&&window.innerHeight||T;if(!w||!T)return;let C=this.__ytSize||"cover",A=16/9,M=S?O/P:w/T,_,L,D=0,K=0;C==="100% 100%"||C==="fill"||C==="stretch"?(_=S?O:w,L=S?P:T,D=0,K=0):C==="contain"?M>A?(L=S?P:T,_=(S?P:T)*A,K=0,D=(w-_)/2):(_=S?O:w,L=(S?O:w)/A,D=0,K=(T-L)/2):M>A?(_=S?O:w,L=(S?O:w)/A,D=0,K=(T-L)/2):(L=S?P:T,_=(S?P:T)*A,K=0,D=(w-_)/2),this.__ytWrap.style.overflow="hidden";let J=this.__ytAx!=null?this.__ytAx:.5,U=this.__ytAy!=null?this.__ytAy:.5;D=((S?O:w)-_)*J,K=((S?P:T)-L)*U;let ae=this.__ytWrap.querySelector("iframe")||this.__ytWrap;ae.style.width=`${_}px`,ae.style.height=`${L}px`,ae.style.left=`${D}px`,ae.style.top=`${K}px`}catch{}}_destroyYouTube_(){var e,r,o;try{(r=(e=this.__ytPlayer)==null?void 0:e.destroy)==null||r.call(e)}catch{}if(this.__ytPlayer=null,this.__ytResizeObs){try{this.__ytResizeObs.disconnect()}catch{}this.__ytResizeObs=null}this.__ytOnWinResize&&(window.removeEventListener("resize",this.__ytOnWinResize),this.__ytOnWinResize=null),(o=this.__ytWrap)!=null&&o.parentNode&&this.__ytWrap.parentNode.removeChild(this.__ytWrap),this.__ytWrap=null}_evaluateVisibility_(e){try{let r=this.hass||this._hass;if(!Array.isArray(e)||e.length===0)return!0;let o=c=>{var d,u,g,m,b;if(!c||typeof c!="object")return!0;let s=c.condition||c.type||"state";if(s==="and"||s==="or"){let y=Array.isArray(c.conditions)?c.conditions:[];return y.length===0?!0:s==="and"?y.every(w=>o(w)):y.some(w=>o(w))}if(s==="state"){let y=c.entity;if(!y)return!0;let w=(d=r==null?void 0:r.states)==null?void 0:d[y];if(!w)return!1;let T=String((u=w.state)!=null?u:"");return c.state!==void 0?(Array.isArray(c.state)?c.state:[c.state]).some(O=>String(O)===T):c.state_not!==void 0?!(Array.isArray(c.state_not)?c.state_not:[c.state_not]).some(O=>String(O)===T):!0}if(s==="numeric_state"){let y=c.entity;if(!y)return!0;let w=(g=r==null?void 0:r.states)==null?void 0:g[y];if(!w)return!1;let T=parseFloat(w.state);return!(isNaN(T)||c.above!==void 0&&!(T>Number(c.above))||c.below!==void 0&&!(T<Number(c.below)))}if(s==="screen"){let y=c.media_query||c.query;if(!y||typeof y!="string")return!0;try{return window.matchMedia(y).matches}catch{return!0}}if(s==="user"){let y=Array.isArray(c.users)?c.users:c.user?[c.user]:[];if(!y.length)return!0;let w=((m=r==null?void 0:r.user)==null?void 0:m.id)||((b=r==null?void 0:r.user)==null?void 0:b.id)||null;return w?y.includes(w):!0}return!0};return e.every(c=>o(c))}catch(r){return console.warn("[ddc:visibility] evaluate error",r),!0}}_applyVisibility_(){var e;try{let r=((e=this.cardContainer)==null?void 0:e.children)||[],o=this._normalizeTabId(this.activeTab);for(let c of r){if(!c||!c.firstElementChild||this._normalizeTabId(c.dataset.tabId)!==o)continue;let u=(this._extractCardConfig(c.firstElementChild)||{}).visibility,g=this.editMode?!0:this._evaluateVisibility_(u);c.style.display=g?"":"none"}}catch(r){console.warn("[ddc:visibility] apply error",r)}}async _onKeyDown_(e){var d,u,g,m,b,y,w,T,S,O;if(!this.editMode||this._isTypingTarget_(e.target))return;let r=Number(this.gridSize||10),o=e.altKey?1:e.shiftKey?r*5:r,c=0,s=0;switch(e.key){case"ArrowLeft":c=-o;break;case"ArrowRight":c=o;break;case"ArrowUp":s=-o;break;case"ArrowDown":s=o;break}if(c||s){e.preventDefault(),this._moveSelectionBy_(c,s,{liveSnap:!e.altKey});return}if(e.key==="Delete"||e.key==="Backspace"){let P=this._selection&&this._selection.size?Array.from(this._selection):[];if(!P.length)return;e.preventDefault(),P.forEach(C=>C.remove()),(d=this._clearSelection)==null||d.call(this),(u=this._resizeContainer)==null||u.call(this),(g=this._queueSave)==null||g.call(this,"delete-key"),(m=this._ensurePlaceholderIfEmpty)==null||m.call(this);return}if((e.ctrlKey||e.metaKey)&&(e.key==="d"||e.key==="D")){e.preventDefault(),await this._duplicateSelection_();return}if((e.ctrlKey||e.metaKey)&&e.key==="]"){e.preventDefault(),this._selection&&((y=(b=this._selection).forEach)==null||y.call(b,P=>{var C;return(C=this._adjustZ)==null?void 0:C.call(this,P,1)})),(w=this._queueSave)==null||w.call(this,"z-up");return}if((e.ctrlKey||e.metaKey)&&e.key==="["){e.preventDefault(),this._selection&&((S=(T=this._selection).forEach)==null||S.call(T,P=>{var C;return(C=this._adjustZ)==null?void 0:C.call(this,P,-1)})),(O=this._queueSave)==null||O.call(this,"z-down");return}}async _duplicateSelection_(){var r,o,c,s,d,u,g,m,b,y,w,T;if(!this._selection||!this._selection.size)return;let e=Array.from(this._selection);for(let S of e)try{let O=((r=this._extractCardConfig)==null?void 0:r.call(this,S.firstElementChild))||{},P=await((o=this._createCard)==null?void 0:o.call(this,O)),C=(c=this._makeWrapper)==null?void 0:c.call(this,P);if(!P||!C)continue;C.style.width=S.style.width,C.style.height=S.style.height;let A=Number(this.gridSize||10),M=(parseFloat(S.getAttribute("data-x"))||0)+A,_=(parseFloat(S.getAttribute("data-y"))||0)+A;(s=this._setCardPosition)==null||s.call(this,C,M,_),C.style.zIndex=String((((d=this._highestZ)==null?void 0:d.call(this))||0)+1);try{let L=(u=S.dataset)==null?void 0:u.tabId;L&&(C.dataset.tabId=L)}catch{}(g=this.cardContainer)==null||g.appendChild(C);try{(m=this._addTabSelectorToChip)==null||m.call(this,C,C.dataset.tabId)}catch{}try{(b=this._rebuildOnce)==null||b.call(this,C.firstElementChild)}catch{}try{(y=this._initCardInteract)==null||y.call(this,C)}catch{}}catch{}try{(w=this._resizeContainer)==null||w.call(this)}catch{}try{(T=this._queueSave)==null||T.call(this,"duplicate")}catch{}}_moveSelectionBy_(e,r,{liveSnap:o=!0}={}){var m,b,y,w,T;if(!this._selection||!this._selection.size)return;let c=Array.from(this._selection),s=Number(this.gridSize||10),d=(m=this._isContainerFixed)==null?void 0:m.call(this),u=((b=this._getContainerSize)==null?void 0:b.call(this))||{w:1/0,h:1/0},g=c.map(S=>{let O=parseFloat(S.getAttribute("data-x-raw"))||parseFloat(S.getAttribute("data-x"))||0,P=parseFloat(S.getAttribute("data-y-raw"))||parseFloat(S.getAttribute("data-y"))||0,C=parseFloat(S.style.width)||S.getBoundingClientRect().width,A=parseFloat(S.style.height)||S.getBoundingClientRect().height,M=O+e,_=P+r;d&&(M=Math.max(0,Math.min(M,Math.max(0,u.w-C))),_=Math.max(0,Math.min(_,Math.max(0,u.h-A))));let L=o?Math.round(M/s)*s:M,D=o?Math.round(_/s)*s:_;return{el:S,rawX:M,rawY:_,snapX:L,snapY:D,w:C,h:A}});if(this.disableOverlap&&typeof this._pushCardsOutOfTheWay=="function")try{this._pushCardsOutOfTheWay(g,e,r,o,s)}catch{}for(let S of g){S.el.setAttribute("data-x-raw",String(S.rawX)),S.el.setAttribute("data-y-raw",String(S.rawY));try{(y=this._setCardPosition)==null||y.call(this,S.el,S.snapX,S.snapY)}catch{}}try{(w=this._resizeContainer)==null||w.call(this)}catch{}try{(T=this._queueSave)==null||T.call(this,"nudge")}catch{}}_syncTabsWidth_(){try{if(String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto")return;let r=this.tabsBar;if(!r)return;if(this.tabsPosition==="left"){r.style.width="",r.style.maxWidth="";return}let o=this.cardContainer||this.__scaleOuter;if(!o)return;let c=0;try{let s=o.getBoundingClientRect();c=s&&s.width?s.width:0}catch{}if(c<=0&&this.__scaleOuter&&this.__scaleOuter!==o)try{let s=this.__scaleOuter.getBoundingClientRect();c=s&&s.width?s.width:0}catch{}c>0&&(r.style.width=`${c}px`,r.style.maxWidth=`${c}px`)}catch{}}_isTypingTarget_(e){var c,s,d,u;if(!e||e===window||e===document)return!1;let r=(c=e.closest)==null?void 0:c.call(e,'input, textarea, [contenteditable="true"], ha-textfield, mwc-textfield');if(!r)return!1;let o=((d=(s=r.tagName)==null?void 0:s.toLowerCase)==null?void 0:d.call(s))||"";return o==="input"||o==="textarea"||((u=r.hasAttribute)==null?void 0:u.call(r,"contenteditable"))}_scheduleReflowAndScale(){this.__reflowRAF||(this.__reflowRAF=requestAnimationFrame(()=>{var e,r,o;this.__reflowRAF=null;try{(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="dynamic"&&((e=this._resizeContainer)==null||e.call(this))}catch{}try{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(r=this._applyAutoFillNoScale)==null||r.call(this):(o=this._applyAutoScale)==null||o.call(this)}catch{}}))}__ddcBindPointerListeners(){if(!this.__ddcPtrBound){this.__ddcPtrBound=!0,this.__onDDCPointerDown=e=>{var r,o;try{if(e.button!==void 0&&e.button!==0)return;let c=((r=e.composedPath)==null?void 0:r.call(e))||[],s=null;for(let d of c)if(d&&d.classList&&d.classList.contains("card-wrapper")){s=d;break}if(!s)return;this.__ddcDragging=!0,this.__scaleOuter&&(this.__prevOverflow=this.__scaleOuter.style.overflow,this.__scaleOuter.style.overflow="visible"),(o=this._scheduleReflowAndScale)==null||o.call(this)}catch{}},this.__onDDCPointerMove=e=>{var r;try{if(!this.__ddcDragging)return;(r=this._scheduleReflowAndScale)==null||r.call(this)}catch{}},this.__onDDCPointerUp=e=>{var r,o;try{if(!this.__ddcDragging)return;this.__ddcDragging=!1,this.__scaleOuter&&(this.__scaleOuter.style.overflow=this.__prevOverflow||"");try{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(r=this._applyAutoFillNoScale)==null||r.call(this):(o=this._applyAutoScale)==null||o.call(this)}catch{}}catch{}};try{this.addEventListener("pointerdown",this.__onDDCPointerDown,{passive:!0})}catch{}try{this.addEventListener("pointermove",this.__onDDCPointerMove,{passive:!0})}catch{}try{window.addEventListener("pointerup",this.__onDDCPointerUp,{passive:!0})}catch{}try{window.addEventListener("pointercancel",this.__onDDCPointerUp,{passive:!0})}catch{}}}_renderEditToolbar_(){this.shadowRoot.querySelectorAll(".ddc-toolbar").forEach(y=>y.remove()),this._ensureToolbarStyles_();let e=document.createElement("div");e.className="ddc-toolbar";let r=document.createElement("div");r.className="ddc-t-group",r.append(this._mkBtn_("add_card","mdi:plus-box","Add card (A)","primary"),this._mkBtn_("snap_toggle","mdi:magnet","Toggle snap (G)"),this._mkBtn_("align_grid","mdi:grid","Align to grid"));let o=document.createElement("div");o.className="ddc-t-group";let c=document.createElement("div");c.className="ddc-t-status";let s=document.createElement("div");s.className="ddc-t-dot"+(this.__dirty?" dirty":"");let d=document.createElement("span");d.textContent=this.__dirty?"Unsaved changes":`Saved${this.__lastSavedAt?" \xB7 "+this.__lastSavedAt:""}`,c.append(s,d),o.appendChild(c);let u=document.createElement("div");u.className="ddc-t-group",u.append(this._mkBtn_("reload","mdi:refresh","Reload (R)","ghost"),this._mkBtn_("open_hads","mdi:alpha-h-box-outline","Open HACS/HADS","ghost"),this._mkBtn_("apply","mdi:content-save","Apply / Save (S)","primary"),this._mkBtn_("exit_edit","mdi:logout-variant","Exit edit (Esc)","danger"));let g=document.createElement("div");g.className="ddc-t-group ddc-t-row",g.append(r);let m=document.createElement("div");m.className="ddc-t-group ddc-t-row",m.append(o);let b=document.createElement("div");b.className="ddc-t-group ddc-t-row",b.append(u),e.append(g,document.createElement("div")).lastChild.className="ddc-t-sep",e.append(m,document.createElement("div")).lastChild.className="ddc-t-sep",e.append(b),e.addEventListener("click",y=>{let w=y.target.closest("[data-action]");w&&this._onToolbarAction_(w.dataset.action,{button:w,bar:e,dot:s,txt:d})}),this.shadowRoot.appendChild(e);try{this.__toolbarRO&&this.__toolbarRO.disconnect(),this.__toolbarRO=new ResizeObserver(y=>{for(let w of y)e.classList.toggle("compact",w.contentRect.width<980)}),this.__toolbarRO.observe(e)}catch{}this.__toolbarKeyHandler=y=>{if(!(!this.editMode&&!this.isEditing)){if(y.key==="a"||y.key==="A")return this._onToolbarAction_("add_card");if(y.key==="s"||y.key==="S")return this._onToolbarAction_("apply");if(y.key==="r"||y.key==="R")return this._onToolbarAction_("reload");if(y.key==="g"||y.key==="G")return this._onToolbarAction_("snap_toggle");if(y.key==="Escape")return this._onToolbarAction_("exit_edit")}},window.addEventListener("keydown",this.__toolbarKeyHandler)}async _onToolbarAction_(e,r={}){var o,c,s,d,u,g,m,b,y,w,T;switch(e){case"add_card":(o=this._openAddCardDialog_)!=null&&o.call(this)||(c=this._addNewCard_)!=null&&c.call(this)||((s=this._openEntityPicker_)==null||s.call(this));break;case"snap_toggle":{this.dragLiveSnap=!this.dragLiveSnap,(d=this._initInteract)==null||d.call(this),(u=this._toast_)==null||u.call(this,`Live snap ${this.dragLiveSnap?"ON":"OFF"}`);break}case"align_grid":(g=this._alignAllToGrid_)==null||g.call(this,this.gridSize);break;case"reload":(m=this._reloadLayout_)==null||m.call(this);break;case"open_hads":(b=this._openHACS_)!=null&&b.call(this)||window.open("/hacs","_blank")||window.open("/hacsfiles","_blank");break;case"apply":{let S=()=>{this._setDirty_(!1),r!=null&&r.txt&&(r.txt.textContent=`Saved \xB7 ${this.__lastSavedAt}`),r!=null&&r.dot&&r.dot.classList.remove("dirty","error")},O=()=>{r!=null&&r.dot&&r.dot.classList.add("error")};try{this._saveLayoutNow_?await this._saveLayoutNow_():this._persistThisCardConfigToStorage_?await this._persistThisCardConfigToStorage_():(y=this._queueSave)==null||y.call(this,"toolbar-apply",!0),this.__lastSavedAt=new Date().toLocaleTimeString(),S()}catch(P){console.warn(P),O()}break}case"exit_edit":if((w=this._toggleEditMode)!=null&&w.call(this,!1)||(T=this._exitEditMode_)!=null&&T.call(this)||(this.isEditing=!1),this.__toolbarKeyHandler&&(window.removeEventListener("keydown",this.__toolbarKeyHandler),this.__toolbarKeyHandler=null),this.__toolbarRO){try{this.__toolbarRO.disconnect()}catch{}this.__toolbarRO=null}this.shadowRoot.querySelectorAll(".ddc-toolbar").forEach(S=>S.remove());break}}_ensureScaleWrapper(){let e=this.cardContainer;if(!e||this.__scaleOuter&&this.__scaleOuter.contains(e))return;let r=document.createElement("div");r.className="ddc-scale-outer",Object.assign(r.style,{position:"relative",width:"100%",overflow:"hidden"}),e.parentNode&&(e.parentNode.insertBefore(r,e),r.appendChild(e)),Object.assign(e.style,{position:"absolute",top:"0",left:"0",transformOrigin:"top left"}),this.__scaleOuter=r}_hasCardModDeep(e){try{if(!e||typeof e!="object")return!1;if(e.card_mod||e.type==="custom:mod-card")return!0;if(e.card)return this._hasCardModDeep(e.card);if(Array.isArray(e.cards)){for(let r of e.cards)if(this._hasCardModDeep(r))return!0}return!1}catch{return!1}}_rebuildOnce(e){try{if(!e||(this.__rebuiltCards||(this.__rebuiltCards=new WeakSet),this.__rebuiltCards.has(e)))return;this.__rebuiltCards.add(e),e.dispatchEvent(new Event("ll-rebuild",{bubbles:!0,composed:!0}))}catch{}}_deepQueryAll(e,r=document){let o=[],c=s=>{if(!s)return;if(s.querySelectorAll)try{s.querySelectorAll(e).forEach(g=>o.push(g))}catch{}let d=document.createTreeWalker(s,NodeFilter.SHOW_ELEMENT,null),u=s;for(;u;){let g=u.shadowRoot;g&&c(g),u=d.nextNode()}};return c(r),o}_syncEditorsStorageKey(){try{let e=this.storageKey||"";this._deepQueryAll("#storage_key").forEach(o=>{try{o&&o.tagName==="INPUT"&&o.value!==e&&(o.value=e,o.dispatchEvent(new Event("input",{bubbles:!0})),o.dispatchEvent(new Event("change",{bubbles:!0})))}catch{}})}catch{}}static _genKey(){var r,o;return`layout_${((o=(r=globalThis.crypto)==null?void 0:r.randomUUID)==null?void 0:o.call(r))||`${Date.now().toString(36)}_${Math.random().toString(36).slice(2,8)}`}`}static getStubConfig(){return{type:"custom:drag-and-drop-card",storage_key:this._genKey(),grid:10,drag_live_snap:!1,auto_save:!0,auto_save_debounce:800,container_size_mode:"dynamic",hero_image:"https://i.postimg.cc/CxsWQgwp/Chat-GPT-Image-Sep-5-2025-09-26-16-AM.png"}}static getConfigElement(){let e=document.createElement("div");e.innerHTML=`
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
  `;let r=()=>{let m=u();s.disabled=!m},o=()=>{let m=e.getConfig();e.dispatchEvent(new CustomEvent("config-changed",{detail:{config:m}})),r()},c=()=>{var b,y,w,T;let m=(T=(w=(b=e.querySelector("#sizeMode"))==null?void 0:b.value)!=null?w:(y=e.querySelector("#ddc-setting-sizeMode"))==null?void 0:y.value)!=null?T:"dynamic";e.querySelector("#sizeCustom").style.display=m==="fixed_custom"?"inline-flex":"none",e.querySelector("#sizePresetWrap").style.display=m==="preset"?"inline-flex":"none"},s=e.querySelector("#applyBtn"),d=e.querySelector("#revertBtn");["#sizeMode","#sizePreset","#sizeOrientation"].forEach(m=>{let b=e.querySelector(m);if(b){try{b.fixedMenuPosition=!0}catch{}b.addEventListener("closed",y=>y.stopPropagation())}}),e.setConfig=(m={})=>{var w,T,S,O,P,C,A,M;e._config={type:m.type||"custom:drag-and-drop-card",...m},e._config.storage_key||(e._config.storage_key=`layout_${((w=crypto==null?void 0:crypto.randomUUID)==null?void 0:w.call(crypto))||Date.now().toString(36)}`,e.__autokeyPending=!0),e.querySelector("#storage_key").value=e._config.storage_key||"",e.querySelector("#grid").value=(T=e._config.grid)!=null?T:10,e.querySelector("#liveSnap").checked=!!e._config.drag_live_snap,e.querySelector("#autoSave").checked=e._config.auto_save!==!1,e.querySelector("#autoSaveDebounce").value=(S=e._config.auto_save_debounce)!=null?S:800,e.querySelector("#containerBg").value=(O=e._config.container_background)!=null?O:"transparent",e.querySelector("#cardBg").value=(P=e._config.card_background)!=null?P:"var(--ha-card-background, var(--card-background-color))",e.querySelector("#debug").checked=!!e._config.debug,e.querySelector("#noOverlap").checked=!!e._config.disable_overlap,e.querySelector("#autoResize").checked=!!e._config.auto_resize_cards,e.querySelector("#animateCards").checked=!!e._config.animate_cards;let b=e.querySelector("#sizeMode")||e.querySelector("#ddc-setting-sizeMode");b&&(b.value=e._config.container_size_mode||"dynamic"),e.querySelector("#sizeW").value=(C=e._config.container_fixed_width)!=null?C:"",e.querySelector("#sizeH").value=(A=e._config.container_fixed_height)!=null?A:"",e.querySelector("#sizeOrientation").value=e._config.container_preset_orientation||"auto";let y=e.querySelector("#sizePreset");if(!y.__filled){let _=(((M=this._sizePresets)==null?void 0:M.call(this))||[]).reduce((L,D)=>{var K;return(L[K=D.group||"other"]||(L[K]=[])).push(D),L},{});y.innerHTML="";for(let[L,D]of Object.entries(_)){let K=document.createElement("optgroup");K.label=L.replace(/(^.|-.?)/g,U=>U.toUpperCase()),D.forEach(U=>{let ae=document.createElement("mwc-list-item");ae.value=U.key,ae.textContent=`${U.label} (${U.w}\xD7${U.h})`,K.appendChild(ae)});let J=document.createElement("mwc-list-item");J.setAttribute("disabled",""),J.textContent=`\u2014 ${K.label} \u2014`,y.appendChild(J),Array.from(K.children).forEach(U=>y.appendChild(U))}y.__filled=!0}e._config.container_preset&&(y.value=e._config.container_preset),c(),r(),e.__autokeyPending&&(e.__autokeyPending=!1,o())},e.getConfig=()=>{var b,y,w,T;let m={...e._config||{}};return m.storage_key=e.querySelector("#storage_key").value||"",m.grid=Number(e.querySelector("#grid").value||10),m.drag_live_snap=!!e.querySelector("#liveSnap").checked,m.auto_save=!!e.querySelector("#autoSave").checked,m.auto_save_debounce=Number(e.querySelector("#autoSaveDebounce").value||800),m.container_background=e.querySelector("#containerBg").value||"transparent",m.card_background=e.querySelector("#cardBg").value||"var(--ha-card-background, var(--card-background-color))",m.debug=!!e.querySelector("#debug").checked,m.disable_overlap=!!e.querySelector("#noOverlap").checked,m.auto_resize_cards=!!e.querySelector("#autoResize").checked,m.animate_cards=!!e.querySelector("#animateCards").checked,m.container_size_mode=(T=(w=(b=e.querySelector("#sizeMode"))==null?void 0:b.value)!=null?w:(y=e.querySelector("#ddc-setting-sizeMode"))==null?void 0:y.value)!=null?T:"dynamic",m.container_fixed_width=Number(e.querySelector("#sizeW").value||0)||void 0,m.container_fixed_height=Number(e.querySelector("#sizeH").value||0)||void 0,m.container_preset=e.querySelector("#sizePreset").value||void 0,m.container_preset_orientation=e.querySelector("#sizeOrientation").value||"auto",m};let u=()=>{let m=e.getConfig(),b=e._config||{};try{return JSON.stringify(m)!==JSON.stringify(b)}catch{return!0}},g=(m,b="input")=>{var y;return(y=e.querySelector(m))==null?void 0:y.addEventListener(b,()=>{m==="#sizeMode"&&c(),r()})};return g("#storage_key"),g("#grid"),g("#liveSnap","change"),g("#autoSave","change"),g("#autoSaveDebounce"),g("#containerBg"),g("#cardBg"),g("#debug","change"),g("#noOverlap","change"),g("#autoResize","change"),g("#animateCards","change"),g("#sizeMode","change"),g("#ddc-setting-sizeMode","change"),g("#sizeW"),g("#sizeH"),g("#sizePreset","selected"),g("#sizeOrientation","selected"),s==null||s.addEventListener("click",()=>{o()}),d==null||d.addEventListener("click",()=>e.setConfig(e._config)),e}static _sizePresets(){return[{key:"iphone-14-pro",label:"iPhone 14 Pro",w:393,h:852,group:"phone"},{key:"iphone-14-pro-max",label:"iPhone 14 Pro Max",w:430,h:932,group:"phone"},{key:"iphone-se-2",label:"iPhone SE (2/3rd gen)",w:375,h:667,group:"phone"},{key:"pixel-7",label:"Pixel 7",w:412,h:915,group:"phone"},{key:"galaxy-s8",label:"Galaxy S8",w:360,h:740,group:"phone"},{key:"galaxy-s20-ultra",label:"Galaxy S20 Ultra",w:412,h:915,group:"phone"},{key:"ipad-9-7",label:'iPad 9.7"',w:768,h:1024,group:"tablet"},{key:"ipad-11-pro",label:'iPad Pro 11"',w:834,h:1194,group:"tablet"},{key:"ipad-12-9-pro",label:'iPad Pro 12.9"',w:1024,h:1366,group:"tablet"},{key:"surface-go-3",label:"Surface Go 3",w:800,h:1280,group:"tablet"},{key:"hd",label:"HD",w:1366,h:768,group:"desktop"},{key:"wxga-plus",label:"WXGA+",w:1440,h:900,group:"desktop"},{key:"fhd",label:"Full HD",w:1920,h:1080,group:"desktop"},{key:"qhd",label:"2K / QHD",w:2560,h:1440,group:"desktop"},{key:"uhd-4k",label:"4K UHD",w:3840,h:2160,group:"desktop"}]}_isContainerFixed(){return this.containerSizeMode==="fixed_custom"||this.containerSizeMode==="preset"||this.containerSizeMode==="fixed"}_resolveFixedSize(){if(this.containerSizeMode==="fixed_custom"){let e=Math.max(100,Number(this.containerFixedWidth||0)),r=Math.max(100,Number(this.containerFixedHeight||0));return{w:e,h:r}}if(this.containerSizeMode==="preset"){let e=t._sizePresets().find(c=>c.key===this.containerPreset)||t._sizePresets().find(c=>c.key==="fhd");if(!e)return{w:1920,h:1080};let r=e.w,o=e.h;return this.containerPresetOrient==="portrait"&&r>o&&([r,o]=[o,r]),this.containerPresetOrient==="landscape"&&o>r&&([r,o]=[o,r]),{w:r,h:o}}return null}_applyContainerSizingFromConfig(e=!1){var o,c;let r=this.cardContainer;if(r)if(this._isContainerFixed()){let{w:s,h:d}=this._resolveFixedSize();r.style.width=`${s}px`,r.style.height=`${d}px`,r.style.overflow="hidden",e||(o=this._dbgPush)==null||o.call(this,"size","Applied fixed size",{w:s,h:d,mode:this.containerSizeMode,preset:this.containerPreset,orient:this.containerPresetOrient}),this._clampAllCardsInside()}else r.style.overflow="hidden",e||(c=this._dbgPush)==null||c.call(this,"size","Applied dynamic size"),this._resizeContainer()}_getContainerSize(){let e=this.cardContainer;if(!e)return{w:0,h:0};let r=parseFloat(getComputedStyle(e).width)||e.getBoundingClientRect().width,o=parseFloat(getComputedStyle(e).height)||e.getBoundingClientRect().height;return{w:r,h:o}}_clampAllCardsInside(){if(!this._isContainerFixed())return;let{w:e,h:r}=this._getContainerSize();this.cardContainer.querySelectorAll(".card-wrapper").forEach(c=>{let s=parseFloat(c.getAttribute("data-x"))||0,d=parseFloat(c.getAttribute("data-y"))||0,u=parseFloat(c.style.width)||c.getBoundingClientRect().width,g=parseFloat(c.style.height)||c.getBoundingClientRect().height,m=Math.max(0,Math.min(s,Math.max(0,e-u))),b=Math.max(0,Math.min(d,Math.max(0,r-g))),y=Math.min(u,e),w=Math.min(g,r);(y!==u||w!==g)&&(c.style.width=`${y}px`,c.style.height=`${w}px`);let T=Math.max(0,Math.min(m,Math.max(0,e-y))),S=Math.max(0,Math.min(b,Math.max(0,r-w)));this._setCardPosition(c,T,S)})}_computeHaSidebarGutters_(){var o;let e=56;try{let c=document.querySelector("home-assistant"),s=c==null?void 0:c.shadowRoot,d=s==null?void 0:s.querySelector("ha-drawer, app-drawer, ha-sidebar, .drawer, .menu"),u=(o=d==null?void 0:d.getBoundingClientRect)==null?void 0:o.call(d);Math.max(document.documentElement.clientWidth||0,window.innerWidth||0)<=870?e=0:u!=null&&u.width&&(e=Math.max(0,Math.min(256,Math.round(u.width))))}catch{}let r=0;try{this.style.setProperty("--ddc-left-gutter",`${e}px`),this.style.setProperty("--ddc-right-gutter",`${r}px`)}catch{}}_applyGridVars(){var r;let e=`${this.gridSize||10}px`;this.style.setProperty("--ddc-grid-size",e),(r=this.cardContainer)==null||r.style.setProperty("--ddc-grid-size",e)}_dbgInit(){if(!this.__dbgReady){this.__dbgReady=!0,this._dbgBuffer=[],this._dbgMax=400;try{window.DDC=this}catch{}}}_dbgPush(e,r,o=null){let c={t:new Date().toISOString(),kind:e,msg:r,extra:o};this._dbgBuffer.push(c),this._dbgBuffer.length>this._dbgMax&&this._dbgBuffer.shift(),this.debug&&console.debug(`%c[ddc:${e}]%c ${r}`,"color:#03a9f4","color:unset",o!=null?o:"")}_dbgDump(){return[...this._dbgBuffer]}_safe(e){return String(e).replace(/[&<>"']/g,r=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[r])}setConfig(e={}){var s,d,u,g,m,b,y,w,T,S,O,P,C,A,M,_,L,D,K,J,U,ae,H,G,ee,pe,We;let r=this.storageKey;this.config={...e},(!this.config.storage_key||this.config.storage_key==="")&&(this.config.storage_key=this.constructor._genKey()),this.storageKey=this.config.storage_key,e.storage_key||(this.storageKey?e={...e,storage_key:this.storageKey}:(this.storageKey=`layout_${((s=crypto==null?void 0:crypto.randomUUID)==null?void 0:s.call(crypto))||Date.now().toString(36)}`,e={...e,storage_key:this.storageKey})),this._config=e,this.storageKey=e.storage_key,this._syncEditorsStorageKey(),this.storageKey=e.storage_key||void 0,this._syncEditorsStorageKey(),this.gridSize=Number((d=e.grid)!=null?d:10),this.dragLiveSnap=!!e.drag_live_snap,this.autoSave=e.auto_save!==!1,this.autoSaveDebounce=Number((u=e.auto_save_debounce)!=null?u:800),this.editModePin=this.editModePin!=null?this.editModePin:(m=(g=e.edit_mode_pin)!=null?g:e.editModePin)!=null?m:"",this.containerBackground=(b=e.container_background)!=null?b:"transparent",this.cardBackground=(y=e.card_background)!=null?y:"var(--ha-card-background, var(--card-background-color))",this.hideHaHeader=!!((T=(w=e.hide_HA_Header)!=null?w:e.hide_ha_header)!=null&&T),this.hideHaSidebar=!!((O=(S=e.hide_HA_Sidebar)!=null?S:e.hide_ha_sidebar)!=null&&O),this.debug=!!e.debug,this.editMode=!1,this._backendOK=!1,this.disableOverlap=!!e.disable_overlap,this.containerSizeMode=e.container_size_mode||"dynamic",this.autoResizeCards=!!e.auto_resize_cards,this.animateCards=!!e.animate_cards,this.screenSaverEnabled=!!((P=e.screen_saver_enabled)!=null&&P);let o=Number(e.screen_saver_delay);this.screenSaverDelay=Number.isFinite(o)&&o>0?o:5*6e4,this.autoResizeCards||String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(C=this._startScaleWatch)==null||C.call(this):(A=this._stopScaleWatch)==null||A.call(this),(M=this._applyAutoScale)==null||M.call(this),this.containerFixedWidth=Number((_=e.container_fixed_width)!=null?_:0)||null,this.containerFixedHeight=Number((L=e.container_fixed_height)!=null?L:0)||null,this.containerPreset=e.container_preset||"fullhd",this.containerPresetOrient=e.container_preset_orientation||"auto",this.heroImage=(e==null?void 0:e.hero_image)||"https://i.postimg.cc/CxsWQgwp/Chat-GPT-Image-Sep-5-2025-09-26-16-AM.png",this.tabs=Array.isArray(e.tabs)?e.tabs:[],this.tabsPosition=e.tabs_position==="left"?"left":"top",this.defaultTab=e.default_tab||((K=(D=this.tabs[0])==null?void 0:D.id)!=null?K:"default"),this.hideTabsWhenSingle=e.hide_tabs_when_single!==!1,this.activeTab=this.defaultTab;try{let fe=localStorage.getItem(`ddc_lasttab_${this.storageKey}`);fe&&this.tabs.some(Te=>Te.id===fe)&&(this.activeTab=fe)}catch{}this.rootEl&&this.rootEl.classList.toggle("ddc-tabs-left-layout",this.tabsPosition==="left"),this.cardContainer&&this._applyContainerSizingFromConfig(!1);let c=r!==this.storageKey;if(this.editMode&&!this.__booting&&!c)try{this._isInHaEditorPreview()||this._queueSave("config-change")}catch{}this._applyGridVars();try{(J=this._applyBackgroundImageFromConfig)==null||J.call(this)}catch{}try{(U=this._applyHaChromeVisibility_)==null||U.call(this)}catch{}this._ensureOverlayZFix();try{(ae=this._updateScreensaverSettings)==null||ae.call(this)}catch{}if(this._selection=new Set,this.__groupDrag=null,this.__editorCache=new Map,this.__stubCache=new Map,this._dbgInit(),this._dbgPush("init","Card configured",{storageKey_raw:e.storage_key,storageKey_slug:this.storageKey,autoSave:this.autoSave,grid:this.gridSize}),this.style.setProperty("--ddc-bg",this.containerBackground),this.style.setProperty("--ddc-card-bg",this.cardBackground),!window.jsyaml){let fe=document.createElement("script");fe.src="https://cdnjs.cloudflare.com/ajax/libs/js-yaml/4.1.0/js-yaml.min.js",document.head.appendChild(fe)}if(!window.interact){let fe=document.createElement("script");fe.src="https://cdn.jsdelivr.net/npm/interactjs/dist/interact.min.js",fe.onload=()=>this._initInteract(),document.head.appendChild(fe)}if(this._helpersPromise=typeof window.loadCardHelpers=="function"?window.loadCardHelpers().catch(()=>null):Promise.resolve(null),!this._built){this._built=!0,this.shadowRoot.innerHTML=`
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



      `,this.cardContainer=this.shadowRoot.querySelector("#cardContainer");try{(H=this._applyBackgroundFromConfig)==null||H.call(this)}catch{}try{(G=this._updateScreensaverSettings)==null||G.call(this)}catch{}this.addButton=this.shadowRoot.querySelector("#addCardBtn"),this.reloadBtn=this.shadowRoot.querySelector("#reloadBtn"),this.diagBtn=this.shadowRoot.querySelector("#diagBtn"),this.exitEditBtn=this.shadowRoot.querySelector("#exitEditBtn"),this.storeBadge=this.shadowRoot.querySelector("#storeBadge"),this.exportBtn=this.shadowRoot.querySelector("#exportBtn"),this.importBtn=this.shadowRoot.querySelector("#importBtn"),this.exploreBtn=this.shadowRoot.querySelector("#exploreBtn"),this.applyLayoutBtn=this.shadowRoot.querySelector("#applyLayoutBtn"),this.copyBtn=this.shadowRoot.querySelector("#copyBtn"),this.pasteBtn=this.shadowRoot.querySelector("#pasteBtn"),this.settingsBtn=this.shadowRoot.querySelector("#settingsBtn"),this.tabsBar=this.shadowRoot.querySelector("#tabsBar"),this.rootEl=this.shadowRoot.querySelector(".ddc-root");try{this._renderTabs(),this._applyActiveTab()}catch{}this._applyGridVars(),this.addButton.addEventListener("click",()=>{this.editMode||this._toggleEditMode(!0),this._openCardManager()}),this.reloadBtn.addEventListener("click",()=>this._initialLoad(!0)),this.diagBtn.addEventListener("click",()=>this._openDiagnostics()),this.exitEditBtn.addEventListener("click",()=>this._toggleEditMode(!1)),this.exportBtn.addEventListener("click",()=>this._exportDesign()),this.importBtn.addEventListener("click",()=>this._importDesign()),this.applyLayoutBtn.addEventListener("click",()=>this._saveLayout(!1)),this.copyBtn&&this.copyBtn.addEventListener("click",()=>this._copySelection()),this.pasteBtn&&this.pasteBtn.addEventListener("click",()=>this._pasteClipboard()),this.settingsBtn&&this.settingsBtn.addEventListener("click",()=>this._openDashboardSettings()),window.addEventListener("keydown",fe=>{var Te;if(this.editMode){if((fe.ctrlKey||fe.metaKey)&&(fe.key==="s"||fe.key==="S")&&(fe.preventDefault(),this._saveLayout(!1)),!this.__ddcResizeObs&&this.autoResizeCards){this.__ddcResizeObs=new ResizeObserver(()=>{var Ce;return(Ce=this._applyAutoScale)==null?void 0:Ce.call(this)});try{this.__ddcResizeObs.observe(this)}catch{}try{this.__ddcResizeObs.observe(this.cardContainer)}catch{}try{this.parentElement&&this.__ddcResizeObs.observe(this.parentElement)}catch{}try{this.offsetParent&&this.__ddcResizeObs.observe(this.offsetParent)}catch{}window.addEventListener("resize",this.__ddcOnWinResize=()=>{var Ce;return(Ce=this._applyAutoScale)==null?void 0:Ce.call(this)})}(Te=this._applyAutoScale)==null||Te.call(this)}}),this.exploreBtn.addEventListener("click",()=>window.open("https://hads.smarti.dev/","_blank","noopener,noreferrer")),this._applyContainerSizingFromConfig(!0),(ee=this._applyAutoScale)==null||ee.call(this),this._installLongPressToEnterEdit(),(pe=this._startScaleWatch)==null||pe.call(this),window.addEventListener("keydown",fe=>{var Te;if(fe.key==="Escape"&&this.editMode&&this._toggleEditMode(!1),!this.__ddcResizeObs&&this.autoResizeCards){this.__ddcResizeObs=new ResizeObserver(()=>{var Ce;return(Ce=this._applyAutoScale)==null?void 0:Ce.call(this)});try{this.__ddcResizeObs.observe(this)}catch{}try{this.__ddcResizeObs.observe(this.cardContainer)}catch{}window.addEventListener("resize",this.__ddcOnWinResize=()=>{var Ce;return(Ce=this._applyAutoScale)==null?void 0:Ce.call(this)})}(Te=this._applyAutoScale)==null||Te.call(this)}),this._installSelectionMarquee(),this.cardContainer.addEventListener("mousedown",fe=>{this.editMode&&(fe.target.closest(".card-wrapper")||!fe.shiftKey&&!fe.ctrlKey&&!fe.metaKey&&this._clearSelection())})}try{this._isInHaEditorPreview()||this._queueSave("config-change")}catch{}this._updateStoreBadge(),this.cardContainer&&this._toggleEditMode(!1),this.__cfgReady=!0,c&&this.__booted?this._initialLoad(!0):!this.__booted&&this.__probed?(this.__booted=!0,this._initialLoad()):(this._applyContainerSizingFromConfig(!0),(We=this._applyAutoScale)==null||We.call(this),this._resizeContainer())}_startInitialAutosize(){var e,r;try{if(this.__autoInitStarted)return;this.__autoInitStarted=!0;let o=!1,c=()=>{o||(o=!0,requestAnimationFrame(()=>{var y;o=!1;try{(y=this._applyAutoScale)==null||y.call(this)}catch{}}))};requestAnimationFrame(()=>{c(),requestAnimationFrame(c)}),setTimeout(c,0);try{(r=(e=document.fonts)==null?void 0:e.ready)==null||r.then(c)}catch{}let s=String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase(),d=this.cardContainer||this.querySelector("#cardContainer");if(!d)return;let u={childList:!0,subtree:!0,attributes:!0,attributeFilter:["style","class"]},g={childList:!0,subtree:!0},m=this.autoResizeCards||s==="auto",b=new MutationObserver(()=>c());b.observe(d,m?u:g),this.__autoInitMO=b,setTimeout(()=>{try{b.disconnect()}catch{}this.__autoInitMO=null},2e3)}catch{}}connectedCallback(){var e,r,o,c,s;(e=this._startInitialAutosize)==null||e.call(this);try{(r=this._applyHaChromeVisibility_)==null||r.call(this),this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var u;return(u=this._applyAutoFillNoScale)==null?void 0:u.call(this)})});try{(o=this._ensureScreenSaverStyles)==null||o.call(this),(c=this._updateScreensaverSettings)==null||c.call(this)}catch{}}catch{this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var u;return(u=this._applyAutoFillNoScale)==null?void 0:u.call(this)})})}if(this.__keyHandlerBound||(this.__keyHandler=d=>this._onKeyDown_(d),window.addEventListener("keydown",this.__keyHandler),this.__keyHandlerBound=!0,this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var u;return(u=this._applyAutoFillNoScale)==null?void 0:u.call(this)})})),this.__boundExitEdit||(this.__boundExitEdit=()=>this._toggleEditMode(!1),this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var u;return(u=this._applyAutoFillNoScale)==null?void 0:u.call(this)})})),window.addEventListener("pagehide",this.__boundExitEdit),window.addEventListener("beforeunload",this.__boundExitEdit),this.__onVis=()=>{document.visibilityState==="hidden"&&this._toggleEditMode(!1),this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var u;return(u=this._applyAutoFillNoScale)==null?void 0:u.call(this)})})},document.addEventListener("visibilitychange",this.__onVis),this._toggleEditMode(!1),!this.__visObs){let d=new IntersectionObserver(u=>{u.some(g=>g.isIntersecting)&&(requestAnimationFrame(()=>this._applyAutoScale&&this._applyAutoScale()),d.observe(this),this.__visObs=d)});this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var g;return(g=this._applyAutoFillNoScale)==null?void 0:g.call(this)})})}this.__ddcOnWinResize=this.__ddcOnWinResize||(()=>{var d,u;if(this.hasAttribute("ddc-fixed-ui"))try{(d=this._computeHaSidebarGutters_)==null||d.call(this)}catch{}(u=this._applyAutoScale)==null||u.call(this)});try{let d=String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase();this.autoResizeCards||d==="auto"?window.addEventListener("resize",this.__ddcOnWinResize):window.removeEventListener("resize",this.__ddcOnWinResize)}catch{}try{(s=this.__ddcBindPointerListeners)==null||s.call(this),this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var u;return(u=this._applyAutoFillNoScale)==null?void 0:u.call(this)})})}catch{this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var u;return(u=this._applyAutoFillNoScale)==null?void 0:u.call(this)})})}this.addEventListener("ddc:dragend",()=>{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&requestAnimationFrame(()=>{var u;return(u=this._applyAutoFillNoScale)==null?void 0:u.call(this)})})}disconnectedCallback(){var e,r,o,c,s,d,u;try{(e=this._setHeaderVisible_)==null||e.call(this,!0),(r=this._setSidebarVisible_)==null||r.call(this,!0)}catch{}try{(o=this._applyHaChromeVisibility_)==null||o.call(this)}catch{}this.__keyHandlerBound&&this.__keyHandler&&(window.removeEventListener("keydown",this.__keyHandler),this.__keyHandlerBound=!1,this.__keyHandler=null),this.__keyHandlerBound||(this.__keyHandler=g=>this._onKeyDown_(g),window.addEventListener("keydown",this.__keyHandler),this.__keyHandlerBound=!0);try{(c=this._destroyParticles_)==null||c.call(this)}catch{}try{(s=this._destroyYouTube_)==null||s.call(this)}catch{}window.removeEventListener("pagehide",this.__boundExitEdit),window.removeEventListener("beforeunload",this.__boundExitEdit),document.removeEventListener("visibilitychange",this.__onVis);try{this._screensaverTimer&&(clearTimeout(this._screensaverTimer),this._screensaverTimer=null),this._clockInterval&&(clearInterval(this._clockInterval),this._clockInterval=null),this._screensaverActivityHandler&&(this._screensaverEvents||[]).forEach(m=>{document.removeEventListener(m,this._screensaverActivityHandler,!0)}),this.screenSaverOverlay&&this.screenSaverOverlay.parentNode&&this.screenSaverOverlay.parentNode.removeChild(this.screenSaverOverlay)}catch{}try{(d=this.__ddcResizeObs)==null||d.disconnect()}catch{}if(this.__ddcResizeObs=null,(u=this._stopScaleWatch)==null||u.call(this),this.__ddcOnWinResize&&(window.removeEventListener("resize",this.__ddcOnWinResize),this.__ddcOnWinResize=null),this.__lpInstalled&&this.__lpHandlers){let g=this.cardContainer;g==null||g.removeEventListener("mousedown",this.__lpHandlers.mouseDown),window.removeEventListener("mousemove",this.__lpHandlers.mouseMove),window.removeEventListener("mouseup",this.__lpHandlers.mouseUp),window.removeEventListener("contextmenu",this.__lpHandlers.contextMenu),g==null||g.removeEventListener("touchstart",this.__lpHandlers.touchStart),window.removeEventListener("touchmove",this.__lpHandlers.touchMove),window.removeEventListener("touchend",this.__lpHandlers.touchEnd),window.removeEventListener("touchcancel",this.__lpHandlers.touchCancel),this.__lpInstalled=!1,this.__lpHandlers=null}try{this.__visObs&&this.__visObs.disconnect()}catch{}this.__visObs=null,this.__ddcOnWinResize&&window.removeEventListener("resize",this.__ddcOnWinResize);try{this.__ddcPtrBound&&(this.removeEventListener("pointerdown",this.__onDDCPointerDown),this.removeEventListener("pointermove",this.__onDDCPointerMove),window.removeEventListener("pointerup",this.__onDDCPointerUp),window.removeEventListener("pointercancel",this.__onDDCPointerUp),this.__ddcPtrBound=!1)}catch{}}set hass(e){var o;this._hass=e,cc("set hass"),!this.__probed&&e&&(this.__probed=!0,this._probeBackend().then(()=>{this.__probed=!0,!this.__booted&&this.__cfgReady&&(this.__booted=!0,this._initialLoad(!0))}));let r=((o=this.cardContainer)==null?void 0:o.children)||[];for(let c of r){let s=c.firstElementChild;s&&s.hass!==e&&(s.hass=e)}try{this._applyVisibility_()}catch{}}get hass(){return this._hass}async _initialLoad(e=!1){var r,o,c,s,d,u,g,m,b,y,w,T,S,O,P,C,A,M,_;if(!this.__booting){this.__booting=!0;try{this._loading=!0,e&&this.cardContainer&&(this.cardContainer.innerHTML=""),this._dbgPush("boot","Initial load start",{force:e});let L=[],D=null;if(this._backendOK&&this.storageKey)try{D=await this._loadLayoutFromBackend(this.storageKey)}catch(H){this._dbgPush("boot","Backend load failed",{error:String(H)})}if(!D&&this.storageKey){let H=null;try{H=JSON.parse(localStorage.getItem(`ddc_local_${this.storageKey}`)||"null")}catch{}if(H)if(this._dbgPush("boot","Found local snapshot",{bytes:JSON.stringify(H).length}),this._backendOK)try{await this._saveLayoutToBackend(this.storageKey,H),this._dbgPush("boot","Migrated local -> backend"),D=H}catch(G){this._dbgPush("boot","Migration failed, staying local",{error:String(G)}),D=H}else D=H}!D&&((o=(r=this._config)==null?void 0:r.cards)!=null&&o.length)&&(this._dbgPush("boot","Using embedded config"),D={cards:this._config.cards});let K={...this._config||{}};if(D!=null&&D.options){let{storage_key:H,...G}=D.options;this._applyImportedOptions(G,!0)}else typeof(D==null?void 0:D.grid)=="number"&&this._applyImportedOptions({grid:D.grid},!0);let J=["storage_key","grid","drag_live_snap","auto_save","auto_save_debounce","container_background","card_background","debug","disable_overlap","container_size_mode","container_fixed_width","container_fixed_height","container_preset","container_preset_orientation","tabs","tabs_position","default_tab","hide_tabs_when_single","auto_resize_cards"],U={};for(let H of J)K[H]!==void 0&&(U[H]=K[H]);Object.keys(U).length&&this._applyImportedOptions(U,!0);let ae=!1;if((c=D==null?void 0:D.cards)!=null&&c.length){for(let H of D.cards){if(!(H!=null&&H.card)||typeof H.card=="object"&&Object.keys(H.card).length===0){let pe=this._makePlaceholderAt(((s=H.position)==null?void 0:s.x)||0,((d=H.position)==null?void 0:d.y)||0,((u=H.size)==null?void 0:u.width)||200,((g=H.size)==null?void 0:g.height)||200);this.cardContainer.appendChild(pe);try{this._rebuildOnce(pe.firstElementChild)}catch{}ae=!0;continue}let G=await this._createCard(H.card),ee=this._makeWrapper(G);this.editMode&&ee.classList.add("editing"),ee.dataset.tabId=this._normalizeTabId(H.tabId||H.tab_id||this.defaultTab),this._setCardPosition(ee,((m=H.position)==null?void 0:m.x)||0,((b=H.position)==null?void 0:b.y)||0),ee.style.width=`${(w=(y=H.size)==null?void 0:y.width)!=null?w:14*this.gridSize}px`,ee.style.height=`${(S=(T=H.size)==null?void 0:T.height)!=null?S:10*this.gridSize}px`,H.z!=null&&(ee.style.zIndex=String(H.z)),this.cardContainer.appendChild(ee);try{this._rebuildOnce(ee.firstElementChild)}catch{}this._initCardInteract(ee),ae=!0}this._resizeContainer(),(O=this._applyAutoScale)==null||O.call(this),this._dbgPush("boot","Layout applied",{count:D.cards.length})}ae||(this._showEmptyPlaceholder(),(P=this._applyAutoScale)==null||P.call(this),this._dbgPush("boot","No saved layout found; showing placeholder")),this._updateStoreBadge(),this._syncEmptyStateUI(),e&&(this._cardModProcessed=!1),setTimeout(()=>{this._processCardModOnce()},100);try{L.forEach(H=>{try{H.dispatchEvent(new Event("ll-rebuild",{bubbles:!0,composed:!0}))}catch{}})}catch{}}finally{this._loading=!1,this.__booting=!1,this.__dirty=!1,(C=this._updateApplyBtn)==null||C.call(this);try{this._renderTabs(),this._applyActiveTab()}catch{}try{this._applyVisibility_()}catch{}try{let L=(M=(A=this.cardContainer)==null?void 0:A.querySelector)==null?void 0:M.call(A,"#ddcBgHost");(!L||!L.firstChild)&&((_=this._applyBackgroundFromConfig)==null||_.call(this))}catch{}}}}_normalizeTabId(e){let r=Array.isArray(this.tabs)?this.tabs.map(o=>o.id):[];return r.length?e&&r.includes(e)?e:this.defaultTab||r[0]:this.defaultTab||"default"}_renderTabs(){var o,c,s,d;let e=this.tabsBar;if(!e)return;let r=Array.isArray(this.tabs)?this.tabs:[];if(!r.length||r.length===1&&this.hideTabsWhenSingle){e.style.display="none";return}e.style.display="",e.className="ddc-tabs "+(this.tabsPosition==="left"?"ddc-tabs-left":""),e.innerHTML="";try{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"&&(e.style.width="100%",e.style.maxWidth="100%")}catch{}for(let u of r){let g=document.createElement("button");g.className="ddc-tab"+(u.id===this.activeTab?" active":""),g.dataset.tabId=u.id,g.title=u.label||u.id,g.innerHTML=`${u.icon?`<ha-icon icon="${u.icon}"></ha-icon>`:""}<span class="ddc-tab-label">${(o=u.label)!=null?o:u.id}</span>`,g.addEventListener("click",()=>{var m,b,y;if(this.activeTab!==u.id){this.activeTab=u.id;try{localStorage.setItem(`ddc_lasttab_${this.storageKey}`,u.id)}catch{}this._applyActiveTab(),this._renderTabs();try{this._applyVisibility_()}catch{}try{let w=(b=(m=this.cardContainer)==null?void 0:m.querySelector)==null?void 0:b.call(m,"#ddcBgHost");(!w||!w.firstChild)&&((y=this._applyBackgroundFromConfig)==null||y.call(this))}catch{}}}),e.appendChild(g)}this.rootEl&&this.rootEl.classList.toggle("ddc-tabs-left-layout",this.tabsPosition==="left");try{(c=this._updateTabsA11y_)==null||c.call(this)}catch{}try{(s=this._syncTabsWidth_)==null||s.call(this)}catch{}try{let u=(d=e.querySelector)==null?void 0:d.call(e,".ddc-tab.active");u&&e.scrollWidth>e.clientWidth&&u.scrollIntoView({behavior:"auto",block:"nearest",inline:"nearest"})}catch{}}_applyActiveTab(){var o,c,s,d,u;let e=this._normalizeTabId(this.activeTab);(((c=(o=this.cardContainer)==null?void 0:o.querySelectorAll)==null?void 0:c.call(o,".card-wrapper"))||[]).forEach(g=>{let m=g.dataset.tabId?this._normalizeTabId(g.dataset.tabId):this.defaultTab;if(!this.tabs||!this.tabs.length){g.style.display="",g.inert=!1,g.classList.remove("ddc-hidden");return}m===e?(g.style.display="",g.inert=!1,g.classList.remove("ddc-hidden")):(g.style.display="none",g.inert=!0,g.classList.add("ddc-hidden"),g.classList.remove("ddc-selected"))});try{String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(s=this._applyAutoFillNoScale)==null||s.call(this):(d=this._applyAutoScale)==null||d.call(this)}catch{}try{this._clearSelection()}catch{}try{this.animateCards&&((u=this._animateCards)==null||u.call(this))}catch{}}_animateCards(){var e,r,o,c;try{let s=((r=(e=this.cardContainer)==null?void 0:e.querySelectorAll)==null?void 0:r.call(e,".card-wrapper"))||[],d=(c=(o=window.matchMedia)==null?void 0:o.call(window,"(prefers-reduced-motion: reduce)"))==null?void 0:c.matches,u=800,g=.8,b=u*.3,y=u-b;s.forEach(w=>{var _,L,D;let T=(_=window.getComputedStyle)==null?void 0:_.call(window,w);if(w.style.display==="none"||T&&T.display==="none"||w.classList.contains("ddc-hidden"))return;let O=T&&T.transform&&T.transform!=="none"?T.transform:"",P=100*g,C=`${O} translate3d(0, ${P}%, 0)`,A=`${O} translate3d(0, 0, 0)`,M=Math.random()*(y*Math.min(g,2));if(d){try{w.animate([{opacity:0},{opacity:1}],{duration:u*.15,delay:M,easing:"linear",fill:"backwards"})}catch{w.style.opacity="0",setTimeout(()=>{w.style.transition=`opacity ${u*.15}ms linear`,w.style.opacity="1"},M)}return}try{w.style.willChange="opacity, transform";let K="cubic-bezier(0.4, 0, 0.2, 1)";w.animate([{opacity:0},{opacity:1}],{duration:b,delay:M,easing:"linear",fill:"backwards"}),(D=(L=w.animate([{transform:C},{transform:A}],{duration:b,delay:M,easing:K,fill:"backwards"})).addEventListener)==null||D.call(L,"finish",()=>{w.style.willChange=""})}catch{w.style.opacity="0",w.style.transform=C,w.style.willChange="opacity, transform",setTimeout(()=>{w.style.transition=`opacity ${b}ms linear, transform ${b}ms cubic-bezier(0.4,0,0.2,1)`,w.style.opacity="1",w.style.transform=A,setTimeout(()=>{w.style.transition="",w.style.willChange=""},b+60)},M)}})}catch(s){console.warn("[ddc:animate] animation error",s)}}_addTabSelectorToChip(e,r=null){if(!this.tabs||!this.tabs.length)return;let o=e.querySelector(".chip");if(!o)return;let c=o.querySelector("select.ddc-chip-tab");c||(c=document.createElement("select"),c.className="ddc-chip-tab",c.style.marginLeft="6px",c.title="Assign to tab",o.appendChild(c)),c.innerHTML="";for(let d of this.tabs){let u=document.createElement("option");u.value=d.id,u.textContent=d.label||d.id,c.appendChild(u)}let s=this._normalizeTabId(r||e.dataset.tabId||this.activeTab||this.defaultTab);c.value=s,e.dataset.tabId=s,c.onchange=()=>{var d,u,g;e.dataset.tabId=this._normalizeTabId(c.value),this._applyActiveTab();try{this._applyVisibility_()}catch{}try{let m=(u=(d=this.cardContainer)==null?void 0:d.querySelector)==null?void 0:u.call(d,"#ddcBgHost");(!m||!m.firstChild)&&((g=this._applyBackgroundFromConfig)==null||g.call(this))}catch{}try{this._queueSave("tab-change")}catch{}}}_toggleEditMode(e=null){var w,T,S,O,P,C,A,M,_,L,D,K,J,U,ae,H,G;try{(w=this.__clearPressTimer)==null||w.call(this)}catch{}let r=e===null?!this.editMode:!!e,o=!this.editMode&&r;try{let ee=this.config&&this.config.edit_mode_pin!=null?String(this.config.edit_mode_pin):"",We=((this.editModePin!=null?String(this.editModePin):"")||ee).trim();if(r&&!this.editMode&&We){let fe=window.prompt("Enter PIN / password to open Edit Mode:");if(fe===null)return;if(String(fe).trim()!==We){(T=this._toast)==null||T.call(this,"Incorrect PIN/password.");return}}}catch{}let c=this.renderRoot||this.shadowRoot||this,s=(S=c==null?void 0:c.querySelector)==null?void 0:S.call(c,".ddc-toolbar.streamlined.v2, .ddc-toolbar.streamlined.v3"),d=(ee,pe)=>{try{ee&&(ee.style.display=pe)}catch{}},u="inline-block",g="none",m=()=>{d(this.addButton,u),d(this.reloadBtn,u),d(this.diagBtn,u),d(this.exitEditBtn,u),d(this.exportBtn,u),d(this.importBtn,u),d(this.exploreBtn,u),d(this.storeBadge,u),d(this.applyLayoutBtn,u),d(this.copyBtn,u),d(this.pasteBtn,u),d(this.settingsBtn,u)},b=()=>{d(this.addButton,g),d(this.reloadBtn,g),d(this.diagBtn,g),d(this.exitEditBtn,g),d(this.exportBtn,g),d(this.importBtn,g),d(this.exploreBtn,g),d(this.storeBadge,g),d(this.applyLayoutBtn,g),d(this.copyBtn,g),d(this.pasteBtn,g),d(this.settingsBtn,g)};if(s)if(r)s.setAttribute("data-force-open","1"),s.style.display="grid",m(),requestAnimationFrame(()=>{let pe=s.scrollHeight||0;s.style.setProperty("--open-h",pe+"px"),s.classList.add("is-open")});else{s.setAttribute("data-force-open","1"),s.style.display="grid";let pe=s.scrollHeight||0;s.style.setProperty("--open-h",pe+"px"),requestAnimationFrame(()=>{s.classList.remove("is-open")}),setTimeout(()=>{b(),s.removeAttribute("data-force-open")},260)}else r?m():b();if(this.editMode=r,(O=this._syncEmptyStateUI)==null||O.call(this),(P=this.cardContainer)==null||P.classList.toggle("grid-on",this.editMode),(((A=(C=this.cardContainer)==null?void 0:C.querySelectorAll)==null?void 0:A.call(C,".card-wrapper"))||[]).forEach(ee=>{ee.classList.toggle("editing",this.editMode);let pe=ee.querySelector(".resize-handle");pe&&(pe.style.display=this.editMode?"flex":"none"),!ee.dataset.placeholder&&window.interact&&window.interact(ee).draggable(this.editMode).resizable(this.editMode),ee.style.touchAction=this.editMode?"none":"auto"}),this.editMode||(M=this._clearSelection)==null||M.call(this),this.editMode||(_=this.cardContainer)==null||_.querySelectorAll(".card-wrapper.dragging").forEach(ee=>ee.classList.remove("dragging")),o){let ee=(L=this.__lastHoldX)!=null?L:null,pe=(D=this.__lastHoldY)!=null?D:null;(K=this._playEditRipple)==null||K.call(this,ee,pe)}try{(J=this._applyHaChromeVisibility_)==null||J.call(this)}catch{}try{let ee=((ae=(U=this.shadowRoot)==null?void 0:U.querySelector)==null?void 0:ae.call(U,".ddc-root"))||((G=(H=this.renderRoot)==null?void 0:H.querySelector)==null?void 0:G.call(H,".ddc-root"))||null;if(ee){let pe=0;if(r&&s)try{pe=s.scrollHeight||s.offsetHeight||0}catch{}ee.style.setProperty("--ddc-toolbar-height",pe+"px")}}catch{}}_isInHaEditorPreview(){let e=this;for(;e;){let r=e.nodeType===1&&e.localName?e.localName.toLowerCase():"";if(r==="hui-card-editor"||r==="hui-dialog-edit-card"||r==="hui-card-preview"||r==="ha-dialog"||r==="mwc-dialog")return!0;let o=e.getRootNode&&e.getRootNode();e=e.parentElement||o&&o.host||null}return!1}_installLongPressToEnterEdit(){if(this.__lpInstalled)return;this.__lpInstalled=!0;let e=this.cardContainer;if(!e)return;let r=800,o=18,c=_=>!!_&&typeof _=="object"&&_.nodeType===1,s=(_,L)=>{try{return!!(_&&L&&typeof _.contains=="function"&&c(L)&&_.contains(L))}catch{return!1}},d=_=>s(this.cardContainer,_),u=_=>{var K,J,U;let L=(J=(K=_.target)==null?void 0:K.closest)==null?void 0:J.call(K,".card-wrapper");if(c(L)&&d(L)&&!L.classList.contains("ddc-placeholder"))return!0;let D=typeof _.composedPath=="function"?_.composedPath():[];for(let ae of D)if(c(ae)&&d(ae)&&(U=ae.classList)!=null&&U.contains("card-wrapper")&&!ae.classList.contains("ddc-placeholder"))return!0;return!1},g=(_,L)=>{let D=document.createElement("div");D.className="ddc-press-ring",document.body.appendChild(D),Object.assign(D.style,{position:"fixed",left:`${_}px`,top:`${L}px`,zIndex:"100000",width:"44px",height:"44px",pointerEvents:"none",marginLeft:"-22px",marginTop:"-22px",filter:"drop-shadow(0 2px 6px rgba(0,0,0,.35))"}),D.innerHTML=`
      <svg viewBox="0 0 44 44" aria-hidden="true" style="width:44px;height:44px">
        <circle cx="22" cy="22" r="18" style="stroke:rgba(255,255,255,.45);stroke-width:4;fill:none"></circle>
        <circle class="pr-fg" cx="22" cy="22" r="18" style="stroke:var(--primary-color);stroke-width:4;fill:none;stroke-linecap:round"></circle>
        <circle cx="22" cy="22" r="2" style="fill:var(--primary-color);opacity:.95"></circle>
      </svg>`;let K=D.querySelector(".pr-fg"),J=18,U=2*Math.PI*J;return K.style.strokeDasharray=`${U}`,K.style.strokeDashoffset=`${U}`,requestAnimationFrame(()=>{K.style.transition=`stroke-dashoffset ${r}ms linear`,K.style.strokeDashoffset="0"}),{el:D,move(ae,H){D.style.left=`${ae}px`,D.style.top=`${H}px`},remove(){try{D.remove()}catch{}}}},m=null,b=null,y=0,w=0,T=null,S=()=>{m&&clearTimeout(m),m=null,b==null||b.remove(),b=null};this.__clearPressTimer=S;let O=_=>{_.pointerType==="mouse"&&_.button!==0||this._isInHaEditorPreview()||!d(_.target)||u(_)||(T=_.pointerId,y=_.clientX,w=_.clientY,this.__lastHoldX=y,this.__lastHoldY=w,b=g(y,w),m=setTimeout(()=>{var D;S();let L=!this.editMode;this._toggleEditMode(L),(D=this._toast)==null||D.call(this,`Edit mode ${L?"enabled":"disabled"}`)},r))},P=_=>{m==null||_.pointerId!==T||(b==null||b.move(_.clientX,_.clientY),(Math.abs(_.clientX-y)>o||Math.abs(_.clientY-w)>o)&&S())},C=_=>{_.pointerId===T&&(S(),T=null)},A=_=>{if(m)return _.preventDefault(),_.stopPropagation(),!1},M=_=>{var D;if(this._isInHaEditorPreview()||!d(_.target)||u(_))return;let L=!this.editMode;this._toggleEditMode(L),(D=this._toast)==null||D.call(this,`Edit mode ${L?"enabled":"disabled"}`)};e.addEventListener("pointerdown",O),window.addEventListener("pointermove",P,{passive:!0}),window.addEventListener("pointerup",C,{passive:!0}),window.addEventListener("pointercancel",C,{passive:!0}),window.addEventListener("contextmenu",A),e.addEventListener("dblclick",M),this.__lpHandlers={onPointerDown:O,onPointerMove:P,onPointerUpOrCancel:C,onContextMenu:A,onDblClick:M}}_isLayoutEmpty(){let e=this.cardContainer;return e?e.querySelectorAll(".card-wrapper:not(.ddc-placeholder)").length===0:!0}_syncEmptyStateUI(){let e=this._isLayoutEmpty();if(this.addButton){let o=this.editMode||e;this.addButton.style.display=o?"inline-block":"none",this.addButton.classList.toggle("cta-empty",!this.editMode&&e)}let r=o=>o&&(o.style.display=this.editMode?"inline-block":"none");r(this.reloadBtn),r(this.diagBtn),r(this.exitEditBtn),r(this.exportBtn),r(this.importBtn),r(this.exploreBtn),r(this.storeBadge),r(this.applyLayoutBtn)}_updateApplyBtn(){this.applyLayoutBtn&&(this.applyLayoutBtn.disabled=!this.__dirty)}_markDirty(e=""){var r;this.__dirty=!0,this._updateApplyBtn(),(r=this._dbgPush)==null||r.call(this,"dirty","Marked dirty",{reason:e})}_playEditRipple(e=null,r=null){let o=this.cardContainer;if(!o)return;let c=o.getBoundingClientRect(),s=e==null?c.left+c.width/2:e,d=r==null?c.top+c.height/2:r,u=s-c.left,g=d-c.top,m=document.createElement("div");m.className="ddc-ripple-veil",m.style.setProperty("--rip-x",`${u}px`),m.style.setProperty("--rip-y",`${g}px`),o.appendChild(m),setTimeout(()=>m.remove(),450)}_initInteract(){this.cardContainer.querySelectorAll(".card-wrapper").forEach(r=>this._initCardInteract(r))}_initCardInteract(e){if(!window.interact||e.dataset.placeholder)return;let r=this.gridSize,o=!!this.dragLiveSnap,s=[window.interact.modifiers.restrictRect({restriction:"parent",endOnly:!0})];if(this.dragLiveSnap){let d=window.interact.snappers.grid({x:this.gridSize,y:this.gridSize});s.push(window.interact.modifiers.snap({targets:[d],range:1/0,offset:"startCoords"}))}window.interact(e).draggable({enabled:this.editMode,inertia:!1,modifiers:s,listeners:{start:d=>{this._selection.has(e)||(!(d!=null&&d.shiftKey)&&!(d!=null&&d.ctrlKey)&&!(d!=null&&d.metaKey)&&this._clearSelection(),this._toggleSelection(e,!0));let u=Array.from(this._selection);this.__groupDrag={leader:e,members:u,startRaw:new Map(u.map(m=>[m,{x:parseFloat(m.getAttribute("data-x-raw"))||parseFloat(m.getAttribute("data-x"))||0,y:parseFloat(m.getAttribute("data-y-raw"))||parseFloat(m.getAttribute("data-y"))||0,w:parseFloat(m.style.width)||m.getBoundingClientRect().width,h:parseFloat(m.style.height)||m.getBoundingClientRect().height}]))},this.__collisionOriginals=new Map,this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)").forEach(m=>{let b=parseFloat(m.getAttribute("data-x-raw"))||parseFloat(m.getAttribute("data-x"))||0,y=parseFloat(m.getAttribute("data-y-raw"))||parseFloat(m.getAttribute("data-y"))||0;this.__collisionOriginals.set(m,{x:b,y})}),u.forEach(m=>{m.classList.add("dragging"),m.getAttribute("data-x-raw")===null&&m.setAttribute("data-x-raw",m.getAttribute("data-x")||"0"),m.getAttribute("data-y-raw")===null&&m.setAttribute("data-y-raw",m.getAttribute("data-y")||"0")})},move:d=>{if(!this.__groupDrag)return;let u=this.gridSize,g=!!this.dragLiveSnap,m=this.__groupDrag.leader,b=this.__groupDrag.startRaw.get(m),y=(parseFloat(m.getAttribute("data-x-raw"))||b.x)+d.dx,w=(parseFloat(m.getAttribute("data-y-raw"))||b.y)+d.dy,T=y-b.x,S=w-b.y,O=this.__groupDrag.members.map(P=>{let C=this.__groupDrag.startRaw.get(P),A=C.x+T,M=C.y+S,_=g?Math.round(A/u)*u:A,L=g?Math.round(M/u)*u:M;return{el:P,rawX:A,rawY:M,snapX:_,snapY:L,w:C.w,h:C.h}});this.disableOverlap&&this._pushCardsOutOfTheWay(O,T,S,g,u),m.setAttribute("data-x-raw",String(y)),m.setAttribute("data-y-raw",String(w));for(let P of O)P.el.setAttribute("data-x-raw",String(P.rawX)),P.el.setAttribute("data-y-raw",String(P.rawY)),this._setCardPosition(P.el,P.snapX,P.snapY);this._resizeContainer()},end:d=>{if(!this.__groupDrag)return;let u=this.gridSize,g=this.__groupDrag.members.map(m=>{let b=parseFloat(m.getAttribute("data-x-raw"))||parseFloat(m.getAttribute("data-x"))||0,y=parseFloat(m.getAttribute("data-y-raw"))||parseFloat(m.getAttribute("data-y"))||0,w=Math.round(b/u)*u,T=Math.round(y/u)*u,S=parseFloat(m.style.width)||m.getBoundingClientRect().width,O=parseFloat(m.style.height)||m.getBoundingClientRect().height;return{el:m,rawX:b,rawY:y,snapX:w,snapY:T,w:S,h:O}});this.disableOverlap&&this._pushCardsOutOfTheWay(g,0,0,!1,u);for(let m of g)this._setCardPosition(m.el,m.snapX,m.snapY),m.el.setAttribute("data-x-raw",String(m.snapX)),m.el.setAttribute("data-y-raw",String(m.snapY));for(let m of this.__groupDrag.members)m.classList.remove("dragging");this._resizeContainer(),this._isContainerFixed()&&this._clampAllCardsInside(),this._queueSave(this.__groupDrag.members.length>1?"group-drag-end":"drag-end"),this.__groupDrag=null,this.__collisionOriginals=null}}}),window.interact(e).resizable({enabled:this.editMode,edges:{right:".resize-handle",bottom:".resize-handle"},inertia:!1,listeners:{move:d=>{let u=this.gridSize,g=!!this.dragLiveSnap,m=parseFloat(e.style.width)||e.getBoundingClientRect().width,b=parseFloat(e.style.height)||e.getBoundingClientRect().height,{width:y,height:w}=d.rect,T=g?Math.max(u,Math.round(y/u)*u):y,S=g?Math.max(u,Math.round(w/u)*u):w,O=parseFloat(e.getAttribute("data-x"))||0,P=parseFloat(e.getAttribute("data-y"))||0,C=T,A=S;if(this._isContainerFixed()){let{w:_,h:L}=this._getContainerSize();C=Math.min(T,Math.max(this.gridSize,_-O)),A=Math.min(S,Math.max(this.gridSize,L-P))}let M=[this._rectFor(e,O,P,C,A)];this.disableOverlap&&this._anyCollisionFor(M,new Set([e]))||(e.style.width=`${C}px`,e.style.height=`${A}px`,this._resizeContainer())},end:()=>{let d=this.gridSize,u=parseFloat(e.style.width)||e.getBoundingClientRect().width,g=parseFloat(e.style.height)||e.getBoundingClientRect().height,m=Math.max(d,Math.round(u/d)*d),b=Math.max(d,Math.round(g/d)*d),y=parseFloat(e.getAttribute("data-x"))||0,w=parseFloat(e.getAttribute("data-y"))||0;if(this._isContainerFixed()){let{w:S,h:O}=this._getContainerSize();m=Math.min(m,Math.max(d,S-y)),b=Math.min(b,Math.max(d,O-w))}let T=[this._rectFor(e,y,w,m,b)];this.disableOverlap&&this._anyCollisionFor(T,new Set([e]))||(e.style.width=`${m}px`,e.style.height=`${b}px`),this._resizeContainer(),this._isContainerFixed()&&this._clampAllCardsInside(),this._queueSave("resize-end")}}}),e.addEventListener("mousedown",d=>{this.editMode&&(d.target.closest(".resize-handle")||d.target.closest(".delete-handle")||d.target.closest(".chip")||(d.shiftKey||d.ctrlKey||d.metaKey?(d.stopPropagation(),this._toggleSelection(e)):this._selection.has(e)||(this._clearSelection(),this._toggleSelection(e,!0))))})}async _createCard(e){let o=(await this._helpersPromise||await window.loadCardHelpers()).createCardElement(e);if(o.hass=this.hass,e.type==="custom:mod-card"&&(await new Promise(c=>setTimeout(c,0)),o.setConfig&&typeof o.setConfig=="function"))try{o.setConfig(e)}catch{}return o}_makeWrapper(e){let r=document.createElement("div");r.classList.add("card-wrapper"),r.dataset.tabId=this._normalizeTabId(this.activeTab||this.defaultTab),this.editMode&&r.classList.add("editing"),r.style.zIndex||(r.style.zIndex=String(this._highestZ()+1));let o=document.createElement("div");o.className="chip",o.innerHTML=`
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
    `;let c=document.createElement("div");c.className="delete-handle",c.innerHTML='<ha-icon icon="mdi:close-thick"></ha-icon>',c.addEventListener("click",u=>{var g,m;u.stopPropagation(),this._selection.size>1&&this._selection.has(r)?(Array.from(this._selection).forEach(y=>y.remove()),this._clearSelection(),this._resizeContainer(),this._queueSave("delete-multi"),(g=this._ensurePlaceholderIfEmpty)==null||g.call(this)):(r.remove(),this._resizeContainer(),this._queueSave("delete"),(m=this._ensurePlaceholderIfEmpty)==null||m.call(this))});try{this._addTabSelectorToChip(r,r.dataset.tabId)}catch{}o.addEventListener("click",async u=>{var m,b,y,w,T;u.stopPropagation();let g=(y=(b=(m=u.target)==null?void 0:m.closest("button"))==null?void 0:b.dataset)==null?void 0:y.act;if(g){if(g==="delete")this._selection.size>1&&this._selection.has(r)?(Array.from(this._selection).forEach(O=>O.remove()),this._clearSelection(),this._resizeContainer(),this._queueSave("delete-multi"),this._ensurePlaceholderIfEmpty()):(r.remove(),this._resizeContainer(),this._queueSave("delete"),this._ensurePlaceholderIfEmpty());else if(g==="duplicate"||g==="copy"){let S=this._selection.size>1&&this._selection.has(r)?Array.from(this._selection):[r];for(let O of S){let P=this._extractCardConfig(O.firstElementChild)||{},C=await this._createCard(P),A=this._makeWrapper(C);A.style.width=O.style.width,A.style.height=O.style.height;let M=(parseFloat(O.getAttribute("data-x"))||0)+this.gridSize,_=(parseFloat(O.getAttribute("data-y"))||0)+this.gridSize;this._setCardPosition(A,M,_),A.style.zIndex=String(this._highestZ()+1);try{let L=(w=O.dataset)==null?void 0:w.tabId;L&&(A.dataset.tabId=L)}catch{}this.cardContainer.appendChild(A);try{(T=this._addTabSelectorToChip)==null||T.call(this,A,A.dataset.tabId)}catch{}try{this._rebuildOnce(A.firstElementChild)}catch{}this._initCardInteract(A)}this._resizeContainer(),this._queueSave("duplicate")}else if(g==="front")this._adjustZ(r,1);else if(g==="back")this._adjustZ(r,-1);else if(g==="front-most"){let S=this._selection.size>1&&this._selection.has(r)?Array.from(this._selection):[r];S.sort((P,C)=>{let A=parseInt(P.style.zIndex||"1",10),M=parseInt(C.style.zIndex||"1",10);return A-M});let O=this._highestZ();for(let P of S)O+=1,P.style.zIndex=String(O);this._queueSave("z-change")}else if(g==="back-most"){let S=this._selection.size>1&&this._selection.has(r)?Array.from(this._selection):[r];S.sort((C,A)=>{let M=parseInt(C.style.zIndex||"1",10);return parseInt(A.style.zIndex||"1",10)-M});let O=1/0;this.cardContainer.querySelectorAll(".card-wrapper").forEach(C=>{let A=parseInt(C.style.zIndex||"1",10);A<O&&(O=A)}),isFinite(O)||(O=1);let P=O;for(let C of S)P-=1,C.style.zIndex=String(Math.max(1,P));this._queueSave("z-change")}else if(g==="edit"){let S=this._extractCardConfig(r.firstElementChild)||{};await this._openSmartPicker("edit",S,async O=>{var A,M,_;let P=r.firstElementChild,C=await this._createCard(O);try{r.dataset.cfg=JSON.stringify(O),(A=this._hasCardModDeep)!=null&&A.call(this,O)?r.dataset.needsCardMod="true":delete r.dataset.needsCardMod}catch{}r.replaceChild(C,P),await An();try{if(C.hass=this.hass,(M=C.requestUpdate)==null||M.call(C),C.updateComplete)try{await C.updateComplete}catch{}}catch{}try{this._rebuildOnce(C)}catch{}try{C.dispatchEvent(new Event("ll-rebuild",{bubbles:!0,composed:!0}))}catch{}(_=this._resizeContainer)==null||_.call(this);try{clearTimeout(this._saveTimer),await this._saveLayout(!0)}catch(L){console.warn("Save before reload failed",L)}window.location.reload()})}}});let s=document.createElement("div");s.className="shield";let d=document.createElement("div");d.classList.add("resize-handle"),this.editMode||(d.style.display="none"),d.title="Resize",d.innerHTML='<ha-icon icon="mdi:resize-bottom-right"></ha-icon>';try{let u=e._config||e.config;u&&typeof u=="object"&&Object.keys(u).length&&(r.dataset.cfg=JSON.stringify(u),this._hasCardModDeep(u)&&(r.dataset.needsCardMod="true"))}catch{}r.append(e,s,o,c,d);try{this._rebuildOnce(e)}catch{}return r}_makePlaceholderAt(e=0,r=0,o=400,c=400){let s=document.createElement("div");s.classList.add("card-wrapper","ddc-placeholder"),s.dataset.placeholder="1",this.editMode&&s.classList.add("editing"),this._setCardPosition(s,e,r),s.style.width=`${o}px`,s.style.height=`${c}px`,s.style.zIndex=String(this._highestZ()+1);let d=document.createElement("div");d.className="ddc-placeholder-inner",d.setAttribute("aria-hidden","true");let u=document.createElement("div");u.className="ddc-hero";let g=this.heroImage;if(g){let w=document.createElement("img");w.src=g,w.alt="",u.appendChild(w)}let m=document.createElement("div");m.className="ddc-title",m.textContent="Drag & Drop Card";let b=document.createElement("div");b.className="ddc-sub",b.textContent="Hold me / double click me to enter Edit mode",u.append(m,b),d.appendChild(u),s.addEventListener("dblclick",w=>{w.stopPropagation(),this._toggleEditMode(!0)});let y=document.createElement("div");return y.className="shield",s.append(d,y),s}_processCardModOnce(){var r;if(this._cardModProcessed)return;this._cardModProcessed=!0,(((r=this.cardContainer)==null?void 0:r.querySelectorAll('[data-needs-card-mod="true"]'))||[]).forEach(o=>{let c=o.firstElementChild;if(!c)return;let s=c._config||c.config;if(s){if(s.type==="custom:mod-card")setTimeout(()=>{if(c.updateComplete)c.updateComplete.then(()=>{c.requestUpdate()});else if(c.setConfig)try{c.setConfig({...s})}catch{}},100);else if(s.card_mod&&c.setConfig)try{c.setConfig({...s})}catch{}}})}_showEmptyPlaceholder(){if(this.cardContainer.querySelector(".ddc-placeholder"))return;let e=this._makePlaceholderAt(0,0,200,200);this.cardContainer.appendChild(e),this._resizeContainer(),this._syncEmptyStateUI()}_hideEmptyPlaceholder(){this.cardContainer.querySelectorAll(".ddc-placeholder").forEach(e=>e.remove())}_ensurePlaceholderIfEmpty(){var r;this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)").length===0&&this._showEmptyPlaceholder(),(r=this._applyAutoScale)==null||r.call(this),this._syncEmptyStateUI()}_adjustZ(e,r){let c=parseInt(e.style.zIndex||"1",10)+r;c=Math.max(1,Math.min(9999,c)),e.style.zIndex=String(c),this._queueSave("z-change")}_highestZ(){let e=0;return this.cardContainer.querySelectorAll(".card-wrapper").forEach(r=>{let o=parseInt(r.style.zIndex||"0",10);o>e&&(e=o)}),e}_setCardPosition(e,r,o){let c=Math.round(r),s=Math.round(o);e.style.transform=`translate3d(${c}px, ${s}px, 0)`,e.setAttribute("data-x",String(c)),e.setAttribute("data-y",String(s)),e.setAttribute("data-x-raw",String(c)),e.setAttribute("data-y-raw",String(s))}_computeDesignSize(){let e=this.cardContainer;if(!e)return{w:1,h:1};if(this._isContainerFixed()){let{w:d,h:u}=this._resolveFixedSize();return{w:Math.max(1,d),h:Math.max(1,u)}}let r=0,o=0,c=Array.from(e.querySelectorAll(".card-wrapper"));if(!c.length){let d=e.getBoundingClientRect();return{w:Math.max(1,d.width||1),h:Math.max(1,d.height||1)}}for(let d of c){let u=parseFloat(d.getAttribute("data-x-raw")||d.getAttribute("data-x")||"0")||0,g=parseFloat(d.getAttribute("data-y-raw")||d.getAttribute("data-y")||"0")||0,m=parseFloat(d.style.width)||d.getBoundingClientRect().width||0,b=parseFloat(d.style.height)||d.getBoundingClientRect().height||0,y=u+m,w=g+b;y>r&&(r=y),w>o&&(o=w)}let s=Math.max(1,this.gridSize||10);return r=Math.ceil(r/s)*s,o=Math.ceil(o/s)*s,{w:Math.max(1,r),h:Math.max(1,o)}}_startScaleWatch(){if(!this.autoResizeCards||this.__scaleRAF)return;let e=()=>{var c,s;if(!this.autoResizeCards){this.__scaleRAF=null;return}let r=this.getBoundingClientRect(),o=Math.max(1,r.width||0);o!==this.__lastScaleW&&(this.__lastScaleW=o,String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(c=this._applyAutoFillNoScale)==null||c.call(this):(s=this._applyAutoScale)==null||s.call(this)),this.__scaleRAF=requestAnimationFrame(e)};this.__scaleRAF=requestAnimationFrame(e)}_stopScaleWatch(){if(this.__scaleRAF){try{cancelAnimationFrame(this.__scaleRAF)}catch{}this.__scaleRAF=null}}_applyAutoScale(){var u,g,m,b,y,w,T,S,O,P,C,A,M,_,L,D,K,J,U,ae,H;let e="dynamic";try{if(e=String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase(),e==="auto"){(u=this._applyAutoFillNoScale)==null||u.call(this),this.removeAttribute("ddc-fixed-ui"),(m=(g=this.style)==null?void 0:g.removeProperty)==null||m.call(g,"--ddc-ui-width");return}}catch{}let r=this.cardContainer;if(!r)return;try{(this.autoResizeCards||e==="auto")&&typeof this._ensureScaleWrapper=="function"&&this._ensureScaleWrapper()}catch{}if(!this.autoResizeCards){let G=typeof this._computeDesignSize=="function"?this._computeDesignSize():{w:r.offsetWidth||1,h:r.offsetHeight||1};if(e==="dynamic"){try{(b=this._computeHaSidebarGutters_)==null||b.call(this)}catch{}this.setAttribute("ddc-fixed-ui",""),(w=(y=this.style)==null?void 0:y.setProperty)==null||w.call(y,"--ddc-ui-width",`${G.w}px`)}else this.removeAttribute("ddc-fixed-ui"),(S=(T=this.style)==null?void 0:T.removeProperty)==null||S.call(T,"--ddc-ui-width");let ee=`${G.w}px`,pe=`${G.h}px`,We=r.style.width===ee,fe=r.style.height===pe,Te=r.style.transform==="scale(1)";if(!(We&&fe&&Te)&&(r.style.width=ee,r.style.height=pe,r.style.transform="scale(1)",r.style.transformOrigin="top left",r.style.position="absolute",r.style.top="0",r.style.left="0",this.__scaleOuter)){let Ce=this.parentElement&&((P=(O=this.parentElement).getBoundingClientRect)==null?void 0:P.call(O).width)||this.offsetParent&&((A=(C=this.offsetParent).getBoundingClientRect)==null?void 0:A.call(C).width)||this.getBoundingClientRect&&this.getBoundingClientRect().width||this.offsetWidth||G.w,ke=`${Math.max(1,Ce)}px`,Xe=`${Math.max(1,G.h)}px`;this.__scaleOuter.style.width!==ke&&(this.__scaleOuter.style.width=ke),this.__scaleOuter.style.height!==Xe&&(this.__scaleOuter.style.height=Xe)}try{(M=this._syncTabsWidth_)==null||M.call(this)}catch{}return}this.removeAttribute("ddc-fixed-ui"),(L=(_=this.style)==null?void 0:_.removeProperty)==null||L.call(_,"--ddc-ui-width");let o=typeof this._computeDesignSize=="function"?this._computeDesignSize():{w:r.offsetWidth||1,h:r.offsetHeight||1},c=this.parentElement&&((K=(D=this.parentElement).getBoundingClientRect)==null?void 0:K.call(D).width)||this.offsetParent&&((U=(J=this.offsetParent).getBoundingClientRect)==null?void 0:U.call(J).width)||this.getBoundingClientRect&&this.getBoundingClientRect().width||this.offsetWidth||o.w,s=Math.max(1,c),d=Math.min(s/Math.max(1,o.w),1);this.__scaleOuter&&(this.__scaleOuter.style.width=`${s}px`,this.__scaleOuter.style.height=`${Math.max(1,o.h*d)}px`),r.style.width=`${o.w}px`,r.style.height=`${o.h}px`,r.style.transform=`scale(${d})`,r.style.transformOrigin="top left",r.style.position="absolute",r.style.top="0",r.style.left="0";try{(ae=this._syncTabsWidth_)==null||ae.call(this)}catch{}try{(H=this._layoutYtBackground_)==null||H.call(this)}catch{}}_applyAutoFillNoScale(){var e,r,o,c,s,d;if(!this.__applyingAutoFill){this.__applyingAutoFill=!0;try{try{(e=this._ensureScaleWrapper)==null||e.call(this)}catch{}let u=this.__scaleOuter||((o=(r=this.shadowRoot)==null?void 0:r.querySelector)==null?void 0:o.call(r,".ddc-scale-outer"))||this,g=this.cardContainer||((s=(c=this.shadowRoot)==null?void 0:c.querySelector)==null?void 0:s.call(c,"#cardContainer"));if(!u||!g)return;u.style.overflow="hidden",u.style.overflowX="auto",u.style.overflowY="hidden",u.style.width="100%";let m=u.getBoundingClientRect(),b=Math.max(1,Math.round(m.width||0)),y=Math.max(1,Math.round(m.height||0));if(y<150){let L=Math.max(0,Math.round(m.top||0)),D=Math.max(1,window.innerHeight||document.documentElement.clientHeight||0),K=Math.max(1,D-L-8);Math.abs(K-y)>4&&(u.style.height=K+"px",m=u.getBoundingClientRect(),b=Math.max(1,Math.round(m.width||0)),y=Math.max(1,Math.round(m.height||0)))}let w=0,T=0,S=Array.from(g.querySelectorAll(".card-wrapper"));if(S.length){let L=g.getBoundingClientRect();for(let D of S){let K=D.getBoundingClientRect(),J=K.left-L.left+K.width,U=K.top-L.top+K.height;J>w&&(w=J),U>T&&(T=U)}}else w=g.scrollWidth||g.offsetWidth||b,T=g.scrollHeight||g.offsetHeight||y;let O=Number(this.gridSize||1)||1,P=Math.max(1,Math.round(Math.ceil(w/O)*O)),C=Math.max(1,Math.round(Math.ceil(T/O)*O)),A=b>P?b:P,M=y>C?y:C;if(g.style.transform="none",g.style.transformOrigin="left top",g.style.width=`${A}px`,g.style.height=`${M}px`,u){let L=0;try{let J=u.getBoundingClientRect();L=Math.max(0,Math.round(J.top||0))}catch{}let D=Math.max(1,window.innerHeight||document.documentElement.clientHeight||0),K=Math.max(1,D-L-8);u.style.height=`${M}px`}g.style.position=g.style.position||"absolute",g.style.top=g.style.top||"0",g.style.left=g.style.left||"0";let _=this.tabsBar;_&&this.tabsPosition!=="left"&&(_.style.width="100%",_.style.maxWidth="100%")}finally{try{(d=this._layoutYtBackground_)==null||d.call(this)}catch{}requestAnimationFrame(()=>{this.__applyingAutoFill=!1})}}}_resizeContainer(){var s;let e=this.cardContainer;if(!e||this._isContainerFixed())return;let r=Array.from(e.querySelectorAll(".card-wrapper")),o=0,c=0;r.forEach(d=>{let u=d.getBoundingClientRect(),g=e.getBoundingClientRect(),m=u.left-g.left+u.width,b=u.top-g.top+u.height;o=Math.max(o,m),c=Math.max(c,b)}),e.style.width=`${Math.ceil(o/this.gridSize)*this.gridSize||100}px`,e.style.height=`${Math.ceil(c/this.gridSize)*this.gridSize||100}px`;try{(s=this._syncTabsWidth_)==null||s.call(this)}catch{}}_pushCardsOutOfTheWay(e,r,o,c,s){if(!this.__collisionOriginals)return;let d=new Set(e.map(C=>C.el)),u=Array.from(this.cardContainer.querySelectorAll(".card-wrapper")).filter(C=>!C.dataset.placeholder),g=this._isContainerFixed(),{w:m,h:b}=this._getContainerSize();for(let C of u){if(d.has(C))continue;let A=this.__collisionOriginals.get(C);if(A){C.setAttribute("data-x-raw",String(A.x)),C.setAttribute("data-y-raw",String(A.y));let M=c?Math.round(A.x/s)*s:A.x,_=c?Math.round(A.y/s)*s:A.y;this._setCardPosition(C,M,_)}}let y=e.map(C=>({x:C.snapX,y:C.snapY,w:C.w,h:C.h})),w=new Map,T=new Map;for(let C of u){let A=parseFloat(C.style.width)||C.getBoundingClientRect().width,M=parseFloat(C.style.height)||C.getBoundingClientRect().height;T.set(C,{w:A,h:M})}let S=r>0?1:r<0?-1:0,O=o>0?1:o<0?-1:0,P=Math.abs(r)>=Math.abs(o);for(let C of u){if(d.has(C))continue;let A=this.__collisionOriginals.get(C);if(!A)continue;let{x:M,y:_}=A,{w:L,h:D}=T.get(C),K=!1;for(let J of y)if(this._rectsOverlap({x:J.x,y:J.y,w:J.w,h:J.h},{x:M,y:_,w:L,h:D})){K=!0,P&&S!==0?M=S>0?J.x+J.w:J.x-L:!P&&O!==0?_=O>0?J.y+J.h:J.y-D:M=J.x+J.w;break}if(K){let J=0,U=P?S!==0?S*s:s:0,ae=P?0:O!==0?O*s:s;for(;J<100;){let H={x:M,y:_,w:L,h:D},G=!1;for(let ee of y)if(this._rectsOverlap(H,ee)){G=!0;break}if(!G){for(let[,ee]of w)if(this._rectsOverlap(H,ee)){G=!0;break}}if(!G&&g&&(M<0||_<0||M+L>m||_+D>b)&&(G=!0),!G)break;M+=U,_+=ae,J++}g&&(M=Math.max(0,Math.min(M,Math.max(0,m-L))),_=Math.max(0,Math.min(_,Math.max(0,b-D))))}w.set(C,{x:M,y:_,w:L,h:D}),y.push({x:M,y:_,w:L,h:D})}for(let[C,A]of w){C.setAttribute("data-x-raw",String(A.x)),C.setAttribute("data-y-raw",String(A.y));let M=c?Math.round(A.x/s)*s:A.x,_=c?Math.round(A.y/s)*s:A.y;this._setCardPosition(C,M,_)}}_rectFor(e,r=null,o=null,c=null,s=null){let d=r!=null?r:parseFloat(e.getAttribute("data-x"))||0,u=o!=null?o:parseFloat(e.getAttribute("data-y"))||0,g=c!=null?c:parseFloat(e.style.width)||e.getBoundingClientRect().width||0,m=s!=null?s:parseFloat(e.style.height)||e.getBoundingClientRect().height||0;return{x:d,y:u,w:g,h:m,el:e}}_rectsOverlap(e,r,o=.5){return!(e.x+e.w<=r.x+o||r.x+r.w<=e.x+o||e.y+e.h<=r.y+o||r.y+r.h<=e.y+o)}_anyCollisionFor(e,r){let o=Array.from(this.cardContainer.querySelectorAll(".card-wrapper")).filter(s=>!r.has(s)&&!s.dataset.placeholder);if(!o.length)return!1;let c=o.map(s=>this._rectFor(s));for(let s of e)for(let d of c)if(this._rectsOverlap(s,d))return!0;return!1}_extractCardConfig(e){var o;if(!e)return{};let r=e._config||e.config;if(r&&typeof r=="object"&&Object.keys(r).length)return r;try{let c=e.closest?e.closest(".card-wrapper"):null,s=(o=c==null?void 0:c.dataset)==null?void 0:o.cfg;if(s){let d=JSON.parse(s);if(d&&typeof d=="object")return d}}catch{}return{}}async _openCardManager(){await this._openSmartPicker("add")}_catalog(){return[{id:"favorites",name:"Favorites",items:[]},{id:"recent",name:"Recent",items:[]},{id:"basics",name:"Basics",items:[{type:"entities",name:"Entities",icon:"mdi:format-list-bulleted"},{type:"entity",name:"Entity",icon:"mdi:checkbox-blank-circle-outline"},{type:"tile",name:"Tile",icon:"mdi:view-grid-outline"},{type:"button",name:"Button",icon:"mdi:gesture-tap-button"},{type:"glance",name:"Glance",icon:"mdi:eye-outline"},{type:"markdown",name:"Markdown",icon:"mdi:language-markdown"},{type:"custom_card",name:"Custom Card",icon:"mdi:puzzle-outline"}]},{id:"sensors",name:"Sensors",items:[{type:"sensor",name:"Sensor",icon:"mdi:antenna"},{type:"gauge",name:"Gauge",icon:"mdi:gauge"},{type:"history-graph",name:"History graph",icon:"mdi:chart-line"},{type:"statistics-graph",name:"Statistics graph",icon:"mdi:chart-bar"}]},{id:"visual",name:"Visual",items:[{type:"picture-entity",name:"Picture entity",icon:"mdi:image-outline"},{type:"picture-glance",name:"Picture glance",icon:"mdi:image-multiple-outline"},{type:"weather-forecast",name:"Weather",icon:"mdi:weather-partly-cloudy"},{type:"map",name:"Map",icon:"mdi:map"},{type:"iframe",name:"iFrame",icon:"mdi:application"}]},{id:"controls",name:"Controls",items:[{type:"light",name:"Light",icon:"mdi:lightbulb-outline"},{type:"thermostat",name:"Thermostat",icon:"mdi:thermostat"},{type:"media-control",name:"Media control",icon:"mdi:play-circle-outline"},{type:"alarm-panel",name:"Alarm panel",icon:"mdi:shield-home-outline"},{type:"area",name:"Area",icon:"mdi:map-marker"}]}]}async _getEditorElementForType(e,r){try{console.info("[ddc:editor] Requesting editor element",{type:e,cfg:r})}catch{}let o=await this._helpersPromise||await window.loadCardHelpers();try{typeof e=="string"&&e&&!e.startsWith("custom:")&&e!=="custom_card"&&await this._ensureCardModuleLoaded(e,r)}catch{}if(typeof e=="string"&&e==="entity")try{return await this._getEntityCardEditor(r||{})}catch(m){console.warn("[ddc:editor] Custom entity editor failed",m)}let c=async()=>{try{if(o.getCardElementClass)return await o.getCardElementClass(e);let m;if(r&&typeof r=="object")m={type:e,...r};else{let y;try{y=await this._getStubConfigForType(e)}catch{}m=y&&typeof y=="object"?{...y}:{type:e}}let b=o.createCardElement(m);return(b==null?void 0:b.constructor)||null}catch{return null}};try{let m=await c();if(m){if(typeof m.getConfigElement=="function"){let b=await m.getConfigElement();if(b){try{console.info("[ddc:editor] Found static class editor",{type:e})}catch{}return b}}if(typeof m.getConfigForm=="function")try{let b=await m.getConfigForm();if(b&&b.schema){try{await customElements.whenDefined("ha-form")}catch{}let y=document.createElement("ha-form");y.hass=this.hass,y.schema=Array.isArray(b.schema)?b.schema.map(w=>({...w})):b.schema,typeof b.computeLabel=="function"&&(y.computeLabel=b.computeLabel.bind(m)),typeof b.computeHelper=="function"&&(y.computeHelper=b.computeHelper.bind(m)),y.data={...r},y.addEventListener("value-changed",w=>{});try{console.info("[ddc:editor] Generated form editor via getConfigForm",{type:e})}catch{}return y}}catch{}}}catch{}if(typeof e=="string"&&(e.startsWith("custom:")||e==="custom_card"))try{let m;try{m=await this._getStubConfigForType(e)}catch{}let b=m&&typeof m=="object"?{...m}:{type:e},y=o.createCardElement(b);if(y.hass=this.hass,typeof y.getConfigElement=="function"){let w=await y.getConfigElement();if(w){try{console.info("[ddc:editor] Found instance-level editor",{type:e})}catch{}return w}}}catch{}let s=String(e).replace(/^custom:/,""),u=(Array.isArray(window.customCards)?window.customCards:[]).find(m=>(m==null?void 0:m.type)===s||(m==null?void 0:m.type)===e||(m==null?void 0:m.type)===`custom:${s}`),g=[];u!=null&&u.editor&&g.push(u.editor),g.push(`${s}-editor`,`${s}-config-editor`),s&&typeof s=="string"&&g.push(`hui-${s}-card-editor`);for(let m of g)if(!(!m||typeof m!="string"))for(let b of[0,100,300,700,1500,3e3])try{if(customElements.get(m)||await Promise.race([customElements.whenDefined(m),new Promise(y=>setTimeout(y,b))]),customElements.get(m)){try{console.info("[ddc:editor] Found editor by tag",{type:e,tag:m})}catch{}return document.createElement(m)}}catch{}return null}async _ensureCardModuleLoaded(e,r){try{let o=await this._helpersPromise||await window.loadCardHelpers(),c;if(r&&typeof r=="object")c={type:e,...r};else{let u;try{u=await this._getStubConfigForType(e)}catch{}c=u&&typeof u=="object"?{...u}:{type:e}}let s=o.createCardElement(c);s.hass=this.hass;let d=document.createElement("div");d.style.cssText="position:fixed;left:-9999px;top:-9999px;opacity:0;pointer-events:none;",d.appendChild(s),document.body.appendChild(d),await new Promise(u=>requestAnimationFrame(u)),d.remove();try{console.info("[ddc:editor] Warmed card module",{type:e})}catch{}}catch{}}_ensureOverlayZFix(){if(document.querySelector("style[data-ddc-overlay-fix]"))return;let e=document.createElement("style");e.setAttribute("data-ddc-overlay-fix",""),e.textContent=`
      /* Make common HA overlays float above our modal */
      vaadin-combo-box-overlay,
      vaadin-overlay-backdrop,
      mwc-menu-surface,
      .mdc-menu-surface--open {
        z-index: 1000000 !important;
      }
    `,document.head.appendChild(e)}_customCardsFromRegistry(){return(Array.isArray(window.customCards)?window.customCards:[]).map(r=>{var o;return{type:(o=r==null?void 0:r.type)!=null&&o.startsWith("custom:")?r.type:`custom:${r==null?void 0:r.type}`,name:(r==null?void 0:r.name)||(r==null?void 0:r.type)||"Custom card",icon:"mdi:puzzle-outline",description:(r==null?void 0:r.description)||"",editorTag:(r==null?void 0:r.editor)||null}}).filter(r=>typeof r.type=="string"&&r.type.startsWith("custom:"))}_schemaForType(e){let r=c=>c,o=[];return{entities:r({fields:[{key:"entities",type:"entities",multi:!0,domains:o,label:"Entities"}]}),entity:r({fields:[{key:"entity",type:"entity",multi:!1,domains:o,label:"Entity"}]}),sensor:r({fields:[{key:"entity",type:"entity",multi:!1,domains:["sensor"],label:"Sensor"},{key:"name",type:"text",label:"Name (optional)"}]}),gauge:r({fields:[{key:"entity",type:"entity",multi:!1,domains:["sensor","number","input_number"],label:"Numeric entity"},{key:"min",type:"number",label:"Min",step:"any"},{key:"max",type:"number",label:"Max",step:"any"}]}),"history-graph":r({fields:[{key:"entities",type:"entities",multi:!0,domains:o,label:"Entities (multiselect)"},{key:"hours_to_show",type:"number",label:"Hours to show",default:24}]}),"statistics-graph":r({fields:[{key:"entities",type:"entities",multi:!0,domains:["sensor","number","input_number"],label:"Entities (multiselect)"},{key:"chart_type",type:"select",options:["line","bar"],label:"Chart type",default:"line"},{key:"statistic",type:"select",options:["mean","min","max","sum"],label:"Statistic",default:"mean"}]}),glance:r({fields:[{key:"entities",type:"entities",multi:!0,domains:o,label:"Entities (multiselect)"}]}),"picture-glance":r({fields:[{key:"entities",type:"entities",multi:!0,domains:o,label:"Entities (multiselect)"},{key:"image",type:"text",label:"Image URL (optional)"}]}),"picture-entity":r({fields:[{key:"entity",type:"entity",multi:!1,domains:o,label:"Entity"},{key:"image",type:"text",label:"Image URL (optional)"}]}),"weather-forecast":r({fields:[{key:"entity",type:"entity",multi:!1,domains:["weather"],label:"Weather entity"}]}),map:r({fields:[{key:"entities",type:"entities",multi:!0,domains:["device_tracker","person"],label:"Trackers / people (multiselect)"},{key:"default_zoom",type:"number",label:"Default zoom",default:14}]}),"media-control":r({fields:[{key:"entity",type:"entity",multi:!1,domains:["media_player"],label:"Media player"}]}),light:r({fields:[{key:"entity",type:"entity",multi:!1,domains:["light"],label:"Light"}]}),thermostat:r({fields:[{key:"entity",type:"entity",multi:!1,domains:["climate"],label:"Climate"}]}),"alarm-panel":r({fields:[{key:"entity",type:"entity",multi:!1,domains:["alarm_control_panel"],label:"Alarm"}]}),markdown:r({fields:[{key:"content",type:"textarea",label:"Markdown"}]}),tile:r({fields:[{key:"entity",type:"entity",multi:!1,domains:o,label:"Entity"}]}),button:r({fields:[{key:"entity",type:"entity",multi:!1,domains:o,label:"Entity (optional)"}]}),iframe:r({fields:[{key:"url",type:"text",label:"URL"}]}),area:r({fields:[{key:"area",type:"text",label:"Area ID"}]})}[e]||{fields:[]}}async _getEntityCardEditor(e={}){let r=document.createElement("div");r.style.display="flex",r.style.flexDirection="column",r.style.gap="12px",r.style.padding="8px 0",r.style.overflow="visible",r._cfg={type:"entity",...e||{}};let o=()=>{let A={type:"entity"};["entity","name","icon","attribute","unit","state_color","theme"].forEach(M=>{let _=r._cfg[M];_!==void 0&&_!==""&&_!==null&&(A[M]=_)}),r.dispatchEvent(new CustomEvent("config-changed",{detail:{config:A}}))},c=document.createElement("div");c.style.display="flex",c.style.flexDirection="column",c.style.gap="4px";let s=document.createElement("span");s.textContent="Entity",s.style.fontSize=".8rem",s.style.opacity="0.8";let d=document.createElement("ha-entity-picker");d.setAttribute("label","Select entity"),d.addEventListener("value-changed",A=>{var _,L,D;A.stopPropagation();let M=(D=A.detail&&((_=A.detail.value)!=null?_:A.detail))!=null?D:(L=A.target)==null?void 0:L.value;r._cfg.entity=M||"";try{u()}catch{}o()}),c.appendChild(s),c.appendChild(d),r.appendChild(c);let u=()=>{},g=document.createElement("div");g.style.display="grid",g.style.gridTemplateColumns="1fr 1fr",g.style.columnGap="12px",g.style.rowGap="12px";let m=(A,M)=>{let _=document.createElement("div");_.style.display="flex",_.style.flexDirection="column",_.style.gap="4px";let L=document.createElement("span");L.textContent=A,L.style.fontSize=".8rem",L.style.opacity="0.8",_.appendChild(L),_.appendChild(M),g.appendChild(_)},b;customElements.get("ha-textfield")?(b=document.createElement("ha-textfield"),b.setAttribute("label","Name"),b.addEventListener("input",()=>{r._cfg.name=b.value||void 0,o()})):(b=document.createElement("input"),b.type="text",b.placeholder="Name",b.addEventListener("input",()=>{r._cfg.name=b.value||void 0,o()}),Object.assign(b.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})),m("Name",b);let y;customElements.get("ha-icon-picker")?(y=document.createElement("ha-icon-picker"),y.setAttribute("label","Icon"),y.addEventListener("value-changed",A=>{var M;A.stopPropagation(),r._cfg.icon=((M=A.detail)==null?void 0:M.value)||void 0,o()}),Object.assign(y.style,{position:"relative",zIndex:"1000"})):customElements.get("ha-textfield")?(y=document.createElement("ha-textfield"),y.setAttribute("label","Icon"),y.addEventListener("input",()=>{r._cfg.icon=y.value||void 0,o()})):(y=document.createElement("input"),y.type="text",y.placeholder="mdi:icon",y.addEventListener("input",()=>{r._cfg.icon=y.value||void 0,o()}),Object.assign(y.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})),m("Icon",y);let w;if(u=()=>{var U,ae;let A=[],M=(U=r._cfg)==null?void 0:U.entity,_=r._hass;if(M&&_&&_.states&&_.states[M]&&_.states[M].attributes)try{A=Object.keys(_.states[M].attributes||{}).filter(H=>H&&typeof H=="string"),A.sort()}catch{}let L=w&&typeof w.value!="undefined"?w.value:void 0,D=((w==null?void 0:w.tagName)||"").toLowerCase(),K={min_color_temp_kelvin:"Minimum color temperature (Kelvin)",max_color_temp_kelvin:"Maximum color temperature (Kelvin)",min_color_temp_mireds:"Minimum color temperature (mireds)",max_color_temp_mireds:"Maximum color temperature (mireds)",min_mireds:"Minimum color temperature (mireds)",max_mireds:"Maximum color temperature (mireds)",effect_list:"Available effects",color_mode:"Color mode",brightness:"Brightness",hs_color:"Hs color",rgb_color:"Rgb color",xy_color:"Xy color",entity_id:"Entity ID",friendly_name:"Friendly name",icon:"Icon"},J=H=>K[H]?K[H]:H.split("_").map(G=>G&&(G.toLowerCase()==="kelvin"?"Kelvin":G.toLowerCase()==="mireds"?"mireds":G.charAt(0).toUpperCase()+G.slice(1))).join(" ");if(D==="ha-combo-box"){let H=A.map(G=>({value:G,label:J(G)}));H.unshift({value:"",label:""}),w.items=H,L&&A.includes(L)?w.value=L:w.value=""}else if(D==="ha-select"){w.innerHTML="";let H=document.createElement("mwc-list-item");H.setAttribute("value",""),H.textContent="",w.appendChild(H);for(let G of A){let ee=document.createElement("mwc-list-item");ee.setAttribute("value",G),ee.textContent=J(G),w.appendChild(ee)}L&&A.includes(L)?w.value=L:w.value="",(ae=w.requestUpdate)==null||ae.call(w)}else if(D==="select"){w.innerHTML="";let H=document.createElement("option");H.value="",H.textContent="",w.appendChild(H);for(let G of A){let ee=document.createElement("option");ee.value=G,ee.textContent=J(G),w.appendChild(ee)}L&&A.includes(L)&&(w.value=L)}},customElements.get("ha-combo-box"))w=document.createElement("ha-combo-box"),w.setAttribute("label","Attribute"),w.setAttribute("item-label-path","label"),w.setAttribute("item-value-path","value"),w.setAttribute("allow-custom-value","false"),w.addEventListener("value-changed",A=>{var _,L;A.stopPropagation();let M=(L=(_=A.detail)==null?void 0:_.value)!=null?L:w.value;r._cfg.attribute=M||void 0,o()});else if(customElements.get("ha-select"))w=document.createElement("ha-select"),w.setAttribute("label","Attribute"),w.addEventListener("selected",A=>{A.stopPropagation(),r._cfg.attribute=w.value||void 0,o()}),Object.assign(w.style,{position:"relative",zIndex:"1000"});else{w=document.createElement("select");let A=document.createElement("option");A.value="",A.textContent="",w.appendChild(A),w.addEventListener("change",M=>{M.stopPropagation(),r._cfg.attribute=w.value||void 0,o()}),Object.assign(w.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),Object.assign(w.style,{position:"relative",zIndex:"1000"})}u(),m("Attribute",w);let T;customElements.get("ha-textfield")?(T=document.createElement("ha-textfield"),T.setAttribute("label","Unit"),T.addEventListener("input",()=>{r._cfg.unit=T.value||void 0,o()})):(T=document.createElement("input"),T.type="text",T.placeholder="Unit",T.addEventListener("input",()=>{r._cfg.unit=T.value||void 0,o()}),Object.assign(T.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})),m("Unit",T);let S;if(customElements.get("ha-select"))S=document.createElement("ha-select"),S.setAttribute("label","Theme (optional)"),S.addEventListener("selected",A=>{A.stopPropagation(),r._cfg.theme=S.value||void 0,o()});else{S=document.createElement("select");let A=document.createElement("option");A.value="",A.textContent="",S.appendChild(A),S.addEventListener("change",M=>{M.stopPropagation(),r._cfg.theme=S.value||void 0,o()}),Object.assign(S.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})}m("Theme (optional)",S);let O;customElements.get("ha-switch")?(O=document.createElement("ha-switch"),O.addEventListener("change",()=>{r._cfg.state_color=!!O.checked,o()})):(O=document.createElement("input"),O.type="checkbox",O.addEventListener("change",()=>{r._cfg.state_color=!!O.checked,o()}));let P=document.createElement("div");P.style.display="flex",P.style.alignItems="center",P.style.gap="8px";let C=document.createElement("span");return C.textContent="Show state color",C.style.fontSize=".8rem",C.style.opacity="0.8",P.appendChild(C),P.appendChild(O),g.appendChild(P),r.appendChild(g),r.setConfig=(A={})=>{r._cfg={type:"entity",...A||{}};let M=r._cfg;if(d&&("value"in d&&(d.value=M.entity||""),d.setAttribute&&d.setAttribute("value",M.entity||"")),b&&(b.value=M.name||""),y&&(y.value=M.icon||""),w){try{u()}catch{}w.value=M.attribute||""}T&&(T.value=M.unit||""),S&&(S.value=M.theme||""),O&&"checked"in O&&(O.checked=!!M.state_color)},Object.defineProperty(r,"hass",{get(){return this._hass},set(A){var M;if(this._hass=A,d){try{d.hass=A}catch{}customElements.get("ha-entity-picker")||customElements.whenDefined("ha-entity-picker").then(()=>{var _;try{d.hass=this._hass,(_=d.requestUpdate)==null||_.call(d)}catch{}}).catch(()=>{})}if(y){try{y.hass=A}catch{}customElements.get("ha-icon-picker")||customElements.whenDefined("ha-icon-picker").then(()=>{var _;try{y.hass=this._hass,(_=y.requestUpdate)==null||_.call(y)}catch{}}).catch(()=>{})}if(S){let _=[];A&&A.themes&&(A.themes.themes?_=Object.keys(A.themes.themes):typeof A.themes=="object"&&(_=Object.keys(A.themes).filter(K=>K!=="default_theme")));let L=S.value,D=(S.tagName||"").toLowerCase();if(D==="ha-select"){S.innerHTML="";let K=document.createElement("mwc-list-item");K.setAttribute("value",""),K.textContent="",S.appendChild(K);for(let J of _){let U=document.createElement("mwc-list-item");U.setAttribute("value",J),U.textContent=J,S.appendChild(U)}L&&_.includes(L)?S.value=L:L||(S.value=""),(M=S.requestUpdate)==null||M.call(S)}else if(D==="select"){S.innerHTML="";let K=document.createElement("option");K.value="",K.textContent="",S.appendChild(K);for(let J of _){let U=document.createElement("option");U.value=J,U.textContent=J,S.appendChild(U)}L&&Array.from(S.options).some(J=>J.value===L)&&(S.value=L)}}try{u()}catch{}}}),r.setConfig(e||{}),r}_shapeBySchema(e,r={}){let o=this._schemaForType(e)||{fields:[]},c={...r,type:e};for(let s of o.fields){let d=c[s.key];if(s.type==="entities"){let g=(Array.isArray(d)?d:d!=null&&d!==""?[d]:[]).filter(Boolean);g.length?c[s.key]=g:delete c[s.key]}else if(s.type==="entity")Array.isArray(d)&&(d=d[0]),d==null||d===""?delete c[s.key]:c[s.key]=String(d);else if(s.type==="number")if(d==null||d==="")delete c[s.key];else{let u=Number(d);Number.isFinite(u)?c[s.key]=u:delete c[s.key]}else(s.type==="select"||s.type==="text"||s.type==="textarea")&&(d==null||d===""?delete c[s.key]:c[s.key]=d)}return c}_statesList(e){var c;let r=Object.keys(((c=this.hass)==null?void 0:c.states)||{});if(!e||!e.length)return r;if(!this.__domainIndex||this.__domainIndex._gen!==r.length){let s={};for(let d of r){let u=d.split(".")[0];(s[u]||(s[u]=[])).push(d)}this.__domainIndex={_gen:r.length,map:s}}let o=[];for(let s of e)this.__domainIndex.map[s]&&o.push(...this.__domainIndex.map[s]);return o}_isNumericEntity(e){var c,s;let r=(s=(c=this.hass)==null?void 0:c.states)==null?void 0:s[e];if(!r)return!1;let o=Number(r.state);return Number.isFinite(o)}_getFaves(){try{return new Set(JSON.parse(localStorage.getItem("ddc_faves")||"[]"))}catch{return new Set}}_setFaves(e){try{localStorage.setItem("ddc_faves",JSON.stringify(Array.from(e)))}catch{}}_getRecent(){try{return JSON.parse(localStorage.getItem("ddc_recent_types")||"[]")}catch{return[]}}_pushRecent(e){try{let r=this._getRecent().filter(o=>o!==e);r.unshift(e),r.length>10&&(r.length=10),localStorage.setItem("ddc_recent_types",JSON.stringify(r))}catch{}}async _ensureCodeMirror(){if(!this.__cmReady){if(!document.querySelector("link[data-cm-core]")){let e=document.createElement("link");e.rel="stylesheet",e.href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.css",e.setAttribute("data-cm-core",""),document.head.appendChild(e)}await new Promise(e=>{if(window.CodeMirror)return e();let r=document.createElement("script");r.src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.js",r.onload=e,document.head.appendChild(r)}),await new Promise(e=>{var o,c;if((c=(o=window.CodeMirror)==null?void 0:o.mimeModes)!=null&&c.yaml)return e();let r=document.createElement("script");r.src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/yaml/yaml.min.js",r.onload=e,document.head.appendChild(r)}),this.__cmReady=!0}}async _mountYamlEditor(e,r,o,c){let s=g=>window.jsyaml?window.jsyaml.dump(g):JSON.stringify(g,null,2),d=g=>window.jsyaml?window.jsyaml.load(g):JSON.parse(g);e.innerHTML="";let u=s(r);if(customElements.get("ha-code-editor")){let g=document.createElement("ha-code-editor");g.mode="yaml",g.hass=this.hass,g.value=u,g.style.display="block",g.style.height="260px",e.appendChild(g);let m=!1;return g.addEventListener("value-changed",b=>{var w,T,S;if(m)return;let y=(S=(T=(w=b.detail)==null?void 0:w.value)!=null?T:g.value)!=null?S:"";try{o(d(y))}catch(O){c==null||c(O)}}),{setValue:b=>{var w;let y=s(b);((w=g.value)!=null?w:"")!==y&&(m=!0,g.value=y,m=!1)}}}try{await this._ensureCodeMirror();let g=window.CodeMirror(e,{value:u,mode:"yaml",lineNumbers:!0,lineWrapping:!0,indentUnit:2,tabSize:2}),m=!1;return g.on("change",()=>{if(m)return;let b=g.getValue();try{o(d(b))}catch(y){c==null||c(y)}}),{setValue:b=>{let y=s(b);g.getValue()!==y&&(m=!0,g.setValue(y),m=!1)}}}catch{let g=document.createElement("textarea");return g.style.width="100%",g.style.height="260px",g.value=u,g.addEventListener("input",()=>{try{o(d(g.value))}catch(m){c==null||c(m)}}),e.appendChild(g),{setValue:m=>{let b=s(m);g.value!==b&&(g.value=b)}}}}_createVirtualList({container:e,items:r,rowHeight:o=36,renderRow:c}){e.style.position="relative",e.style.overflow="auto";let s=document.createElement("div");s.style.height=`${r.length*o}px`,e.innerHTML="",e.appendChild(s);let d=new Map,u=()=>{let g=e.scrollTop,m=e.clientHeight,b=Math.max(0,Math.floor(g/o)-6),y=Math.min(r.length-1,Math.ceil((g+m)/o)+6);for(let[w,T]of d)(w<b||w>y)&&(T.remove(),d.delete(w));for(let w=b;w<=y;w++){if(d.has(w))continue;let T=c(r[w],w);T.style.position="absolute",T.style.left="0",T.style.right="0",T.style.top=`${w*o}px`,d.set(w,T),e.appendChild(T)}};return e.addEventListener("scroll",u,{passive:!0}),new ResizeObserver(u).observe(e),u(),{refresh(g){if(g){r=g,s.style.height=`${r.length*o}px`;for(let[,m]of d)m.remove();d.clear()}u()}}}async _openSmartPicker(e="add",r=null,o=null){let c=()=>s.remove(),s=document.createElement("div");s.className="modal",s.innerHTML=`
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
      </div>`,this.shadowRoot.appendChild(s);let d=s.querySelector("#leftPane"),u=s.querySelector("#addBtn"),g=s.querySelector("#footAdd"),m=s.querySelector("#cancelBtn"),b=s.querySelector("#footCancel"),y=s.querySelector("#search"),w=s.querySelector("#cardHost"),T=s.querySelector("#editorHost"),S=s.querySelector("#editorSpin"),O=s.querySelector("#quickFill"),P=s.querySelector("#yamlHost"),C=s.querySelector("#yamlErr"),A=s.querySelector("#yamlSec"),M=s.querySelector("#tabVisual"),_=s.querySelector("#tabYaml"),L=s.querySelector("#tabVis"),D=s.querySelector("#visSec"),K=s.querySelector("#visHost"),J=s.querySelector("#err"),U=s.querySelector("#previewSpin"),ae=j=>{u.disabled=g.disabled=!j},H=j=>{j?(J.hidden=!1,J.textContent=j):(J.hidden=!0,J.textContent="")},G=this._getFaves(),ee=this._getRecent(),pe=this._catalog(),We=pe.find(j=>j.id==="favorites"),fe=pe.find(j=>j.id==="recent"),Te=pe.flatMap(j=>j.items||[]);We.items=Te.filter(j=>G.has(j.type)),fe.items=ee.map(j=>Te.find($=>$.type===j)).filter(Boolean);let Ce=this._customCardsFromRegistry();Ce.length&&pe.push({id:"custom",name:"Custom (installed)",items:Ce});let ke=s.querySelector("#quickFillSec");ke&&(ke.style.display="none");let Xe=s.querySelector("#optionsSec .hd"),Je,Ue,at=()=>{if(!Ue)return;let j=Ee&&G.has(Ee),$=Ue.querySelector("ha-icon");$&&$.setAttribute("icon",j?"mdi:star":"mdi:star-outline")},ct=j=>{if(Je){let $=Te.find(ve=>ve.type===j),ue=$?$.name:j||"";Je.textContent=ue}at()};if(Xe&&!Xe.querySelector(".sel-info")){let j=Xe.querySelector("span");j&&(j.style.display="none"),Je=document.createElement("span"),Je.className="sel-info",Je.style.flex="1",Je.style.fontWeight="bold",Je.style.paddingRight="8px",Xe.insertBefore(Je,Xe.firstChild),Ue=document.createElement("button"),Ue.className="icon-btn",Ue.setAttribute("title","Favorite"),Object.assign(Ue.style,{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"28px",height:"28px",borderRadius:"6px",border:"1px solid var(--divider-color)",background:"var(--primary-background-color)",padding:"0",marginLeft:"4px",cursor:"pointer"}),Ue.innerHTML='<ha-icon icon="mdi:star-outline"></ha-icon>',Xe.appendChild(Ue),Ue.addEventListener("click",$=>{$.stopPropagation(),Ee&&(G.has(Ee)?G.delete(Ee):G.add(Ee),this._setFaves(G),at(),et())})}let nt="visual",ne=j=>{let $=j==="yaml",ue=j==="vis",ve=!$&&!ue;M.classList.toggle("active",ve),M.setAttribute("aria-selected",String(ve)),_.classList.toggle("active",$),_.setAttribute("aria-selected",String($)),L&&(L.classList.toggle("active",ue),L.setAttribute("aria-selected",String(ue))),T.parentElement.style.display=ve?"":"none",A.style.display=$?"":"none",D&&(D.style.display=ue?"":"none"),$?A.scrollIntoView({behavior:"smooth",block:"start"}):ue&&D&&D.scrollIntoView({behavior:"smooth",block:"start"}),nt=$?"yaml":ue?"vis":"visual"};M.addEventListener("click",async()=>{var j;if(ne("visual"),!Ae)await st(re);else try{(j=Ae.setConfig)==null||j.call(Ae,re)}catch{}}),_.addEventListener("click",()=>ne("yaml")),L&&L.addEventListener("click",()=>{ne("vis");try{qe(re)}catch{}}),ne("visual");let ht=()=>{let j=y.value.trim().toLowerCase();return pe.map($=>({...$,items:($.items||[]).filter(ue=>!j||ue.name.toLowerCase().includes(j)||ue.type.toLowerCase().includes(j))})).filter($=>$.items&&$.items.length||$.id==="favorites"||$.id==="recent")},et=()=>{let j=ht();d.innerHTML="",j.forEach($=>{let ue=document.createElement("div");ue.style.padding="12px",ue.style.borderBottom="1px solid var(--divider-color)";let ve=document.createElement("h4");if(ve.textContent=$.name,ve.style.margin="0 0 10px 0",ve.style.fontSize=".92rem",ve.style.opacity=".85",ue.appendChild(ve),!$.items.length&&($.id==="favorites"||$.id==="recent")){let le=document.createElement("div");le.style.opacity=".6",le.style.fontSize=".85rem",le.textContent=$.id==="favorites"?"No favorites yet.":"No recent items yet.",ue.appendChild(le)}else $.items.forEach(le=>{let _e=document.createElement("button");_e.innerHTML=`<span style="display:inline-flex;align-items:center;gap:8px">
              <ha-icon icon="${le.icon}"></ha-icon><span>${le.name}</span>
            </span>`,Object.assign(_e.style,{display:"block",width:"100%",textAlign:"left",border:"none",background:"transparent",padding:"8px",borderRadius:"10px",cursor:"pointer"}),_e.addEventListener("click",async()=>{Ne(_e),await Dt(le.type)}),ue.appendChild(_e)});d.appendChild(ue)})},Ne=j=>{d.querySelectorAll("button").forEach($=>{$.classList.remove("active"),$.style.background="transparent",$.style.color=""}),j&&(j.classList.add("active"),j.style.background="rgba(3,169,244,.12)",j.style.color="var(--primary-color)")},re=null,Ee=null,Le=null,Ae=null,rt=null,pt=0,vt=null,kt="",Ct=(j,$)=>{var W;let ue=this._schemaForType(j);if(O.innerHTML="",!ue.fields.length){O.innerHTML='<div style="opacity:.7;font-size:.9rem">No quick fill for this card \u2014 use the editors below.</div>';return}let ve=Object.keys(((W=this.hass)==null?void 0:W.states)||{}),le=document.createElement("div"),_e=(Z,Re,Y,Ke)=>{let Ye=document.createElement("div");Object.assign(Ye.style,{padding:"8px 10px",border:"1px solid var(--divider-color)",borderRadius:"10px",cursor:"pointer",userSelect:"none",display:"flex",alignItems:"center",gap:"8px"}),Ye.innerHTML=`<ha-icon icon="mdi:checkbox-blank-outline"></ha-icon><span>${Z}</span>`,Re.includes(Z)&&(Ye.style.background="rgba(3,169,244,.12)",Ye.style.borderColor="var(--primary-color)",Ye.querySelector("ha-icon").setAttribute("icon","mdi:checkbox-marked")),Ye.addEventListener("click",async()=>{let Qe=Re.indexOf(Z);Qe>=0?Re.splice(Qe,1):Re.push(Z);let Fe=Re.includes(Z);Ye.style.background=Fe?"rgba(3,169,244,.12)":"",Ye.style.borderColor=Fe?"var(--primary-color)":"var(--divider-color)",Ye.querySelector("ha-icon").setAttribute("icon",Fe?"mdi:checkbox-marked":"mdi:checkbox-blank-outline"),re=this._shapeBySchema(j,{...re,[Ke]:[...Re]}),ot(re),Le==null||Le.setValue(re)}),Y.appendChild(Ye)};ue.fields.forEach(Z=>{var Ke,Ye,Qe,Fe,tt,Ve,Ge,$e,je;let Re=document.createElement("div");Object.assign(Re.style,{display:"flex",gap:"8px",alignItems:"center",marginBottom:"8px"});let Y=document.createElement("label");if(Y.textContent=Z.label||Z.key,Y.style.minWidth="130px",Z.type==="entities"){let Oe=document.createElement("div");Oe.style.flex="1";let he=document.createElement("input");Object.assign(he,{placeholder:"Filter entities\u2026"}),Object.assign(he.style,{width:"100%",padding:"8px 10px",borderRadius:"10px",border:"1px solid var(--divider-color)",background:"var(--card-background-color)",color:"var(--primary-text-color)"});let we=document.createElement("div");Object.assign(we.style,{maxHeight:"220px",overflow:"auto",marginTop:"8px",border:"1px solid var(--divider-color)",borderRadius:"10px",padding:"6px"});let Pe=Z.domains&&Z.domains.length?this._statesList(Z.domains):ve,xe=Array.isArray($[Z.key])?[...$[Z.key]]:$[Z.key]?[$[Z.key]]:[],se=N=>{let B=document.createElement("div");Object.assign(B.style,{padding:"6px 10px",margin:"4px 0",border:"1px solid var(--divider-color)",borderRadius:"10px",cursor:"pointer",display:"flex",alignItems:"center",gap:"8px",background:""});let F=document.createElement("ha-icon");F.setAttribute("icon","mdi:checkbox-blank-outline"),F.style.setProperty("--mdc-icon-size","18px");let V=document.createElement("span");V.textContent=N,V.style.whiteSpace="nowrap",V.style.overflow="hidden",V.style.textOverflow="ellipsis",B.append(F,V);let ie=()=>{let oe=xe.includes(N);B.style.background=oe?"rgba(3,169,244,.12)":"",B.style.borderColor=oe?"var(--primary-color)":"var(--divider-color)",F.setAttribute("icon",oe?"mdi:checkbox-marked":"mdi:checkbox-blank-outline")};return ie(),B.addEventListener("click",()=>{let oe=xe.indexOf(N);oe>=0?xe.splice(oe,1):xe.push(N),re=this._shapeBySchema(j,{...re,[Z.key]:[...xe]}),ot(re),Le==null||Le.setValue(re),ie()}),B},R=Pe;this._createVirtualList({container:we,items:R,rowHeight:36,renderRow:se}),he.addEventListener("input",()=>{let N=he.value.trim().toLowerCase();R=Pe.filter(B=>!N||B.toLowerCase().includes(N)),this._createVirtualList({container:we,items:R,rowHeight:36,renderRow:se})}),Oe.append(he,we),Re.append(Y,Oe),re=this._shapeBySchema(j,{...$,[Z.key]:xe})}if(Z.type==="entity"){let Oe=document.createElement("div");Oe.style.flex="1",Oe.style.position="relative";let he=document.createElement("input");he.setAttribute("list","ddc_entlist_"+Z.key),Object.assign(he.style,{width:"100%",padding:"8px 10px 8px 36px",borderRadius:"10px",border:"1px solid var(--divider-color)"}),he.placeholder=`Select ${((Ke=Z.label)==null?void 0:Ke.toLowerCase())||"entity"}\u2026`;let we=document.createElement("ha-icon");we.setAttribute("icon","mdi:magnify"),Object.assign(we.style,{position:"absolute",left:"10px",top:"8px",width:"18px",height:"18px","--mdc-icon-size":"18px",opacity:".7"});let Pe=document.createElement("datalist");Pe.id="ddc_entlist_"+Z.key;let xe=Z.domains&&Z.domains.length?this._statesList(Z.domains):Object.keys(((Ye=this.hass)==null?void 0:Ye.states)||{});Pe.innerHTML=xe.map(se=>`<option value="${se}">`).join(""),he.value=Array.isArray($[Z.key])?$[Z.key][0]||"":$[Z.key]||"",he.addEventListener("change",async()=>{re=this._shapeBySchema(j,{...re,[Z.key]:he.value||void 0}),ot(re),Le==null||Le.setValue(re)}),Oe.append(we,he,Pe),Re.append(Y,Oe)}if(Z.type==="number"){let Oe=document.createElement("div");Oe.style.flex="1",Oe.style.position="relative";let he=document.createElement("input");he.type="number",Z.step&&(he.step=Z.step),Object.assign(he.style,{width:"100%",padding:"8px 10px 8px 36px",borderRadius:"10px",border:"1px solid var(--divider-color)"});let we=document.createElement("ha-icon");we.setAttribute("icon","mdi:counter"),Object.assign(we.style,{position:"absolute",left:"10px",top:"8px","--mdc-icon-size":"18px",width:"18px",height:"18px",opacity:".7"}),he.value=(Fe=(Qe=$[Z.key])!=null?Qe:Z.default)!=null?Fe:"",he.addEventListener("input",async()=>{let Pe=he.value===""?void 0:Number(he.value);re=this._shapeBySchema(j,{...re,[Z.key]:isNaN(Pe)?void 0:Pe}),ot(re),Le==null||Le.setValue(re)}),Oe.append(we,he),Re.append(Y,Oe)}if(Z.type==="select"){let Oe=document.createElement("div");Oe.style.flex="1",Oe.style.position="relative";let he=document.createElement("select");Object.assign(he.style,{width:"100%",padding:"8px 10px 8px 36px",borderRadius:"10px",border:"1px solid var(--divider-color)"});let we=document.createElement("ha-icon");we.setAttribute("icon","mdi:format-list-bulleted"),Object.assign(we.style,{position:"absolute",left:"10px",top:"8px","--mdc-icon-size":"18px",width:"18px",height:"18px",opacity:".7"}),(Z.options||[]).forEach(Pe=>{let xe=document.createElement("option");xe.value=Pe,he.appendChild(xe)}),he.value=(Ge=(tt=$[Z.key])!=null?tt:Z.default)!=null?Ge:((Ve=Z.options)==null?void 0:Ve[0])||"",he.addEventListener("change",async()=>{re=this._shapeBySchema(j,{...re,[Z.key]:he.value}),ot(re),Le==null||Le.setValue(re)}),Oe.append(we,he),Re.append(Y,Oe)}if(Z.type==="text"){let Oe=document.createElement("div");Oe.style.flex="1",Oe.style.position="relative";let he=document.createElement("input");he.type="text",Object.assign(he.style,{width:"100%",padding:"8px 10px 8px 36px",borderRadius:"10px",border:"1px solid var(--divider-color)"});let we=document.createElement("ha-icon");we.setAttribute("icon","mdi:text"),Object.assign(we.style,{position:"absolute",left:"10px",top:"8px","--mdc-icon-size":"18px",width:"18px",height:"18px",opacity:".7"}),he.value=($e=$[Z.key])!=null?$e:"",he.addEventListener("input",async()=>{re=this._shapeBySchema(j,{...re,[Z.key]:he.value||void 0}),ot(re),Le==null||Le.setValue(re)}),Oe.append(we,he),Re.append(Y,Oe)}if(Z.type==="textarea"){let Oe=document.createElement("textarea");Object.assign(Oe.style,{flex:"1",minHeight:"120px",padding:"8px 10px",borderRadius:"10px",border:"1px solid var(--divider-color)"}),Oe.value=(je=$[Z.key])!=null?je:"",Oe.addEventListener("input",async()=>{re=this._shapeBySchema(j,{...re,[Z.key]:Oe.value||""}),ot(re),Le==null||Le.setValue(re)}),Re.append(Y,Oe)}le.appendChild(Re)}),O.innerHTML="",O.appendChild(le)},Lt=new WeakMap,Wt=j=>{if(!K)return;let $=Array.isArray(j==null?void 0:j.visibility)?j.visibility.map(_e=>({..._e})):[],ue=()=>qe(re),ve=()=>{var _e;$=$.filter(W=>W&&typeof W=="object"&&W.condition),re={...re,visibility:$};try{Le==null||Le.setValue(re)}catch{}try{(_e=Ae==null?void 0:Ae.setConfig)==null||_e.call(Ae,re)}catch{}ot(re)},le=()=>{if(K.innerHTML="",!$||!$.length){let W=document.createElement("div");W.style.opacity=".7",W.style.fontSize=".9rem",W.style.marginBottom="8px",W.textContent="No conditions defined \u2013 this card is always visible.",K.appendChild(W)}$.forEach((W,Z)=>{let Re=document.createElement("div");Object.assign(Re.style,{display:"flex",flexDirection:"column",gap:"6px",marginBottom:"12px",border:"1px solid var(--divider-color)",borderRadius:"8px",padding:"8px"});let Y=document.createElement("div");Object.assign(Y.style,{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"4px"});let Ke=document.createElement("div");Ke.style.display="flex",Ke.style.alignItems="center",Ke.style.gap="6px";let Ye=document.createElement("ha-icon"),Qe="mdi:filter",Fe=W.condition||"state";Fe==="numeric_state"?Qe="mdi:numeric":Fe==="screen"?Qe="mdi:monitor":Fe==="user"?Qe="mdi:account":Fe==="state"&&(Qe="mdi:state-machine"),Ye.setAttribute("icon",Qe);let tt=document.createElement("span");tt.style.fontWeight="bold",tt.style.textTransform="capitalize",tt.textContent=Fe==="numeric_state"?"Entity numeric state":Fe==="state"?"Entity state":Fe==="screen"?"Screen":"User",Ke.appendChild(Ye),Ke.appendChild(tt),Y.appendChild(Ke);let Ve=document.createElement("button");Ve.setAttribute("title","Remove condition"),Ve.innerHTML='<ha-icon icon="mdi:trash-can-outline"></ha-icon>',Object.assign(Ve.style,{border:"none",background:"transparent",cursor:"pointer",padding:"4px",display:"inline-flex",alignItems:"center"}),Ve.style.position="relative",Ve.style.zIndex="1000",Ve.addEventListener("click",Pe=>{Pe.preventDefault(),Pe.stopPropagation();let xe=$.indexOf(W);xe>-1&&$.splice(xe,1),re.visibility=$,le(),ve()}),Y.appendChild(Ve),Re.appendChild(Y);let Ge=document.createElement("div");Ge.style.display="flex",Ge.style.gap="8px";let $e=document.createElement("label");$e.textContent="Type",$e.style.fontSize=".85rem",$e.style.marginRight="4px";let je=document.createElement("select");["state","numeric_state","screen","user"].forEach(Pe=>{let xe=document.createElement("option");xe.value=Pe,xe.textContent=Pe.replace("_"," "),je.appendChild(xe)}),je.value=Fe,je.addEventListener("change",()=>{W.condition=je.value,delete W.entity,delete W.state,delete W.state_not,delete W.above,delete W.below,delete W.media_query,delete W.users,le(),ve()}),Ge.appendChild($e),Ge.appendChild(je),Re.appendChild(Ge);let Oe=document.createElement("div");Object.assign(Oe.style,{display:"flex",flexWrap:"wrap",gap:"8px",alignItems:"center"});let he=(Pe,xe)=>{let se=document.createElement("div");se.style.display="flex",se.style.flexDirection="column",se.style.gap="4px",se.style.minWidth="150px";let R=document.createElement("span");R.textContent=Pe,R.style.fontSize=".75rem",se.appendChild(R),se.appendChild(xe),Oe.appendChild(se)};(()=>{var Pe,xe;if(Oe.innerHTML="",W.condition==="state"){let se;customElements.get("ha-entity-picker")?(se=document.createElement("ha-entity-picker"),se.hass=this.hass,se.setAttribute("label","Select entity"),se.removeAttribute("hide-clear-icon"),se.value=W.entity||"",se.addEventListener("value-changed",B=>{B.stopPropagation(),W.entity=B.detail.value||"",ve()})):(se=document.createElement("input"),se.value=W.entity||"",se.addEventListener("input",()=>{W.entity=se.value.trim(),ve()}),Object.assign(se.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})),he("Entity",se);let R;if(customElements.get("ha-select")){R=document.createElement("ha-select");let B=document.createElement("mwc-list-item");B.setAttribute("value","state"),B.textContent="State is equal to";let F=document.createElement("mwc-list-item");F.setAttribute("value","state_not"),F.textContent="State is not equal to",R.appendChild(B),R.appendChild(F),R.value=W.state_not!=null?"state_not":"state",R.addEventListener("selected",V=>{V.stopPropagation();let ie=W.state_not!=null?W.state_not:W.state;R.value==="state_not"?(W.state_not=ie,delete W.state):(W.state=ie,delete W.state_not),ve()})}else R=document.createElement("select"),R.innerHTML='<option value="state">State is equal to</option><option value="state_not">State is not equal to</option>',R.value=W.state_not!=null?"state_not":"state",Object.assign(R.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),R.addEventListener("change",B=>{B.stopPropagation();let F=W.state_not!=null?W.state_not:W.state;R.value==="state_not"?(W.state_not=F,delete W.state):(W.state=F,delete W.state_not),ve()});he("Match type",R);let N;customElements.get("ha-textfield")?(N=document.createElement("ha-textfield"),N.value=(W.state_not!=null?W.state_not:W.state)||"",N.setAttribute("label",""),N.addEventListener("input",B=>{B.stopPropagation();let F=R.value;W[F]=N.value;let V=F==="state"?"state_not":"state";delete W[V],ve()})):(N=document.createElement("input"),N.value=(W.state_not!=null?W.state_not:W.state)||"",Object.assign(N.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),N.addEventListener("input",B=>{B.stopPropagation();let F=R.value;W[F]=N.value;let V=F==="state"?"state_not":"state";delete W[V],ve()})),he("State",N)}else if(W.condition==="numeric_state"){let se;customElements.get("ha-entity-picker")?(se=document.createElement("ha-entity-picker"),se.hass=this.hass,se.setAttribute("label","Select entity"),se.removeAttribute("hide-clear-icon"),se.value=W.entity||"",se.addEventListener("value-changed",B=>{B.stopPropagation(),W.entity=B.detail.value||"",ve()})):(se=document.createElement("input"),se.value=W.entity||"",se.addEventListener("input",()=>{W.entity=se.value.trim(),ve()}),Object.assign(se.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})),he("Entity",se);let R;customElements.get("ha-textfield")?(R=document.createElement("ha-textfield"),R.setAttribute("type","number"),R.value=W.above!=null?W.above:"",R.addEventListener("input",B=>{B.stopPropagation();let F=R.value;F===""||isNaN(Number(F))?delete W.above:W.above=Number(F),ve()})):(R=document.createElement("input"),R.type="number",R.value=W.above!=null?W.above:"",Object.assign(R.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),R.addEventListener("input",()=>{let B=R.value;B===""||isNaN(Number(B))?delete W.above:W.above=Number(B),ve()})),he("Above",R);let N;customElements.get("ha-textfield")?(N=document.createElement("ha-textfield"),N.setAttribute("type","number"),N.value=W.below!=null?W.below:"",N.addEventListener("input",B=>{B.stopPropagation();let F=N.value;F===""||isNaN(Number(F))?delete W.below:W.below=Number(F),ve()})):(N=document.createElement("input"),N.type="number",N.value=W.below!=null?W.below:"",Object.assign(N.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),N.addEventListener("input",()=>{let B=N.value;B===""||isNaN(Number(B))?delete W.below:W.below=Number(B),ve()})),he("Below",N)}else if(W.condition==="screen"){let se=document.createElement("select"),R=[{label:"Custom",value:""},{label:"Mobile (max-width: 599px)",value:"(max-width: 599px)"},{label:"Tablet (600px - 991px)",value:"(min-width: 600px) and (max-width: 991px)"},{label:"Desktop (min-width: 992px)",value:"(min-width: 992px)"}];if(R.forEach(N=>{let B=document.createElement("option");B.value=N.value,B.textContent=N.label,se.appendChild(B)}),se.value=(xe=(Pe=R.find(N=>N.value===(W.media_query||"")))==null?void 0:Pe.value)!=null?xe:"",se.addEventListener("change",()=>{W.media_query=se.value,ve()}),he("Screen size",se),se.value===""){let N=document.createElement("input");N.placeholder="e.g. (min-width: 1280px)",N.value=W.media_query||"",N.addEventListener("input",()=>{W.media_query=N.value,ve()}),he("Custom query",N)}}else if(W.condition==="user"){let se;customElements.get("ha-user-picker")?(se=document.createElement("ha-user-picker"),se.hass=this.hass,se.value=Array.isArray(W.users)?W.users:[],se.addEventListener("value-changed",R=>{W.users=Array.isArray(R.detail.value)?R.detail.value:[R.detail.value],ve()})):(se=document.createElement("input"),se.value=Array.isArray(W.users)?W.users.join(","):"",se.addEventListener("input",()=>{W.users=se.value.split(",").map(R=>R.trim()).filter(Boolean),ve()})),he("Users",se)}})(),Re.appendChild(Oe),K.appendChild(Re)});let _e=document.createElement("button");_e.className="btn",_e.innerHTML='<ha-icon icon="mdi:plus"></ha-icon><span style="margin-left:6px">Add condition</span>',Object.assign(_e.style,{marginTop:"8px"}),_e.addEventListener("click",()=>{$.push({condition:"state",entity:"",state:""}),re.visibility=$,le(),ve()}),K.appendChild(_e)};le()},qe=j=>{if(!K)return;let $=Array.isArray(j==null?void 0:j.visibility)?j.visibility:[],ue=null,ve=async()=>{if(ue)return ue;try{if(this.hass&&typeof this.hass.callWS=="function")try{let Z=await this.hass.callWS({type:"config/auth/list"});if(Array.isArray(Z))return ue=Z,Z}catch{}if(this.hass&&typeof this.hass.callApi=="function")try{let Z=await this.hass.callApi("get","users");if(Array.isArray(Z))return ue=Z,Z}catch{}let W=[];if(this.hass&&this.hass.users&&Array.isArray(this.hass.users)&&W.push(...this.hass.users),this.hass&&this.hass.userData&&Array.isArray(this.hass.userData.users)&&W.push(...this.hass.userData.users),this.hass&&this.hass.authorizedUsers&&Array.isArray(this.hass.authorizedUsers)&&W.push(...this.hass.authorizedUsers),W.length){let Z=new Map;W.forEach(Y=>{let Ke=Y.id||Y.user_id||Y.uid||Y.name||"";Z.has(Ke)||Z.set(Ke,Y)});let Re=Array.from(Z.values());return ue=Re,Re}}catch{}return ue=[],[]},le=()=>{var W;$=$.filter(Z=>Z&&typeof Z=="object"&&Z.condition),re.visibility=$;try{Le==null||Le.setValue(re)}catch{}try{(W=Ae==null?void 0:Ae.setConfig)==null||W.call(Ae,re)}catch{}ot(re)},_e=()=>{K.innerHTML="";let W=document.createElement("div");W.style.opacity=".75",W.style.fontSize=".85rem",W.style.marginBottom="12px",W.textContent="The card will be shown when ALL conditions below are fulfilled. If no conditions are set, the card will always be shown.",K.appendChild(W);let Z=(Y,Ke)=>{Y.forEach((Fe,tt)=>{Re(Fe,Y,tt,Ke)});let Ye=document.createElement("div");Ye.style.marginTop="8px";let Qe=document.createElement("button");Qe.className="btn",Qe.innerHTML='<ha-icon icon="mdi:plus"></ha-icon><span style="margin-left:6px">Add condition</span>',Object.assign(Qe.style,{display:"flex",alignItems:"center",gap:"6px",padding:"6px 12px",border:"none",borderRadius:"20px",background:"var(--primary-color)",color:"var(--text-primary-color, #fff)",cursor:"pointer",fontWeight:"500"}),Qe.addEventListener("click",Fe=>{Fe.stopPropagation();let tt=Ye.querySelector(".add-menu");if(tt){tt.remove();return}let Ve=document.createElement("div");Ve.className="add-menu",Object.assign(Ve.style,{position:"relative",marginTop:"4px",border:"1px solid var(--divider-color)",borderRadius:"8px",background:"var(--card-background-color, var(--secondary-background-color))",boxShadow:"0 2px 4px rgba(0,0,0,0.2)"}),[{type:"numeric_state",label:"Entity numeric state",icon:"mdi:numeric"},{type:"state",label:"Entity state",icon:"mdi:state-machine"},{type:"screen",label:"Screen",icon:"mdi:monitor"},{type:"user",label:"User",icon:"mdi:account"},{type:"and",label:"And",icon:"mdi:logic-and"},{type:"or",label:"Or",icon:"mdi:logic-or"}].forEach($e=>{let je=document.createElement("div");je.style.display="flex",je.style.alignItems="center",je.style.gap="8px",je.style.padding="6px 12px",je.style.cursor="pointer",je.addEventListener("mouseenter",()=>je.style.background="var(--hover-color, #444)"),je.addEventListener("mouseleave",()=>je.style.background=""),je.addEventListener("click",()=>{Ve.remove();let we;$e.type==="and"||$e.type==="or"?we={condition:$e.type,conditions:[]}:$e.type==="state"?we={condition:"state",entity:"",state:""}:$e.type==="numeric_state"?we={condition:"numeric_state",entity:""}:$e.type==="screen"?we={condition:"screen",media_query:""}:$e.type==="user"&&(we={condition:"user",users:[]}),Y.push(we),Lt.set(we,!0),le(),_e()});let Oe=document.createElement("ha-icon");Oe.setAttribute("icon",$e.icon),je.appendChild(Oe);let he=document.createElement("span");he.textContent=$e.label,je.appendChild(he),Ve.appendChild(je)}),Ye.appendChild(Ve)}),Ye.appendChild(Qe),Ke.appendChild(Ye)},Re=(Y,Ke,Ye,Qe)=>{let Fe=Y.condition||"state",tt=Lt.get(Y);tt===void 0&&(tt=$.length===1);let Ve=document.createElement("div");Object.assign(Ve.style,{display:"flex",flexDirection:"column",border:"1px solid var(--divider-color)",borderLeft:"3px solid var(--primary-color)",borderRadius:"12px",padding:"16px",marginBottom:"20px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",boxShadow:"var(--ha-card-box-shadow, 0 2px 6px rgba(0, 0, 0, 0.15))"});let Ge=document.createElement("div");Ge.style.display="flex",Ge.style.alignItems="center",Ge.style.justifyContent="space-between",Ge.style.marginBottom="8px",Ge.style.borderBottom="1px solid var(--divider-color)",Ge.style.paddingBottom="4px",Ge.style.position="relative";let $e=document.createElement("div");$e.style.display="flex",$e.style.alignItems="center",$e.style.gap="6px";let je=document.createElement("button");je.innerHTML=`<ha-icon icon="${tt?"mdi:chevron-down":"mdi:chevron-right"}"></ha-icon>`,Object.assign(je.style,{border:"none",background:"transparent",cursor:"pointer",padding:"4px",display:"inline-flex",alignItems:"center"}),je.addEventListener("click",xe=>{xe.stopPropagation(),Lt.set(Y,!tt),_e()}),$e.appendChild(je);let Oe=document.createElement("ha-icon"),he="mdi:filter";Fe==="numeric_state"?he="mdi:numeric":Fe==="screen"?he="mdi:monitor":Fe==="user"?he="mdi:account":Fe==="state"?he="mdi:state-machine":Fe==="and"?he="mdi:logic-and":Fe==="or"&&(he="mdi:logic-or"),Oe.setAttribute("icon",he),$e.appendChild(Oe);let we=document.createElement("span");we.style.fontWeight="600",we.style.fontSize="0.95rem",we.style.textTransform="capitalize",we.textContent=Fe==="numeric_state"?"Entity numeric state":Fe==="state"?"Entity state":Fe==="screen"?"Screen":Fe==="user"?"User":Fe==="and"?"And":"Or",$e.appendChild(we),Ge.appendChild($e);let Pe=document.createElement("button");if(Pe.setAttribute("title","Remove condition"),Pe.innerHTML='<ha-icon icon="mdi:trash-can-outline"></ha-icon>',Object.assign(Pe.style,{border:"none",background:"transparent",cursor:"pointer",padding:"4px",display:"inline-flex",alignItems:"center"}),Pe.style.position="relative",Pe.style.zIndex="1000",Pe.addEventListener("click",xe=>{xe.preventDefault(),xe.stopPropagation();let se=Ke.indexOf(Y);se>-1&&Ke.splice(se,1),le(),_e()}),Ge.appendChild(Pe),Ve.appendChild(Ge),Fe!=="and"&&Fe!=="or"){if(tt){let xe=document.createElement("div");Object.assign(xe.style,{display:"flex",flexDirection:"column",gap:"14px",alignItems:"stretch"});let se=(R,N)=>{let B=document.createElement("div");B.style.display="flex",B.style.flexDirection="column",B.style.gap="4px";let F=document.createElement("span");F.textContent=R,F.style.fontSize=".75rem",B.appendChild(F),B.appendChild(N),xe.appendChild(B);let V=(N.tagName||"").toLowerCase();(V==="input"||V==="select")&&Object.assign(N.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})};if(Y.condition==="state"){let R=document.createElement("ha-entity-picker");R.value=Y.entity||"",R.hass=this.hass,R.setAttribute("label","Select entity"),R.addEventListener("value-changed",F=>{Y.entity=F.detail.value||"",le()}),customElements.get("ha-entity-picker")||customElements.whenDefined("ha-entity-picker").then(()=>{_e()}).catch(()=>{}),se("Entity",R);let N;if(customElements.get("ha-select")){N=document.createElement("ha-select");let F=document.createElement("mwc-list-item");F.setAttribute("value","state"),F.textContent="State is equal to";let V=document.createElement("mwc-list-item");V.setAttribute("value","state_not"),V.textContent="State is not equal to",N.appendChild(F),N.appendChild(V),N.value=Y.state_not!=null?"state_not":"state",N.addEventListener("selected",ie=>{ie.stopPropagation();let oe=Y.state_not!=null?Y.state_not:Y.state;N.value==="state_not"?(Y.state_not=oe,delete Y.state):(Y.state=oe,delete Y.state_not),le()})}else N=document.createElement("select"),N.innerHTML='<option value="state">State is equal to</option><option value="state_not">State is not equal to</option>',N.value=Y.state_not!=null?"state_not":"state",N.addEventListener("change",F=>{F.stopPropagation();let V=Y.state_not!=null?Y.state_not:Y.state;N.value==="state_not"?(Y.state_not=V,delete Y.state):(Y.state=V,delete Y.state_not),le()}),Object.assign(N.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"});se("Match type",N);let B;customElements.get("ha-textfield")?(B=document.createElement("ha-textfield"),B.value=(Y.state_not!=null?Y.state_not:Y.state)||"",B.setAttribute("label",""),B.addEventListener("input",F=>{F.stopPropagation();let V=N.value;Y[V]=B.value;let ie=V==="state"?"state_not":"state";delete Y[ie],le()})):(B=document.createElement("input"),B.value=(Y.state_not!=null?Y.state_not:Y.state)||"",Object.assign(B.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),B.addEventListener("input",F=>{F.stopPropagation();let V=N.value;Y[V]=B.value;let ie=V==="state"?"state_not":"state";delete Y[ie],le()})),se("State",B)}else if(Y.condition==="numeric_state"){let R=document.createElement("ha-entity-picker");R.value=Y.entity||"",R.hass=this.hass,R.setAttribute("label","Select entity"),R.removeAttribute("hide-clear-icon"),R.addEventListener("value-changed",F=>{Y.entity=F.detail.value||"",le()}),customElements.get("ha-entity-picker")||customElements.whenDefined("ha-entity-picker").then(()=>{_e()}).catch(()=>{}),se("Entity",R);let N;customElements.get("ha-textfield")?(N=document.createElement("ha-textfield"),N.setAttribute("type","number"),N.value=Y.above!=null?Y.above:"",N.addEventListener("input",F=>{F.stopPropagation();let V=N.value;V===""||isNaN(Number(V))?delete Y.above:Y.above=Number(V),le()})):(N=document.createElement("input"),N.type="number",N.value=Y.above!=null?Y.above:"",Object.assign(N.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),N.addEventListener("input",()=>{let F=N.value;F===""||isNaN(Number(F))?delete Y.above:Y.above=Number(F),le()})),se("Above",N);let B;customElements.get("ha-textfield")?(B=document.createElement("ha-textfield"),B.setAttribute("type","number"),B.value=Y.below!=null?Y.below:"",B.addEventListener("input",F=>{F.stopPropagation();let V=B.value;V===""||isNaN(Number(V))?delete Y.below:Y.below=Number(V),le()})):(B=document.createElement("input"),B.type="number",B.value=Y.below!=null?Y.below:"",Object.assign(B.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),B.addEventListener("input",()=>{let F=B.value;F===""||isNaN(Number(F))?delete Y.below:Y.below=Number(F),le()})),se("Below",B)}else if(Y.condition==="screen"){let R=[{label:"Mobile",query:"(max-width: 599px)"},{label:"Tablet (min: 768px)",query:"(min-width: 768px)"},{label:"Desktop (min: 1024px)",query:"(min-width: 1024px)"},{label:"Wide (min: 1280px)",query:"(min-width: 1280px)"}];Array.isArray(Y.media_query_list)||(Y.media_query_list=[]);let N=document.createElement("div");N.style.display="flex",N.style.flexDirection="column",N.style.gap="4px",R.forEach(B=>{let F=document.createElement("label");F.style.display="flex",F.style.alignItems="center",F.style.gap="6px";let V=document.createElement("input");V.type="checkbox",V.checked=Y.media_query_list.includes(B.query),V.addEventListener("change",()=>{V.checked?Y.media_query_list.push(B.query):Y.media_query_list=Y.media_query_list.filter(oe=>oe!==B.query),Y.media_query=Y.media_query_list.join(","),le()});let ie=document.createElement("span");ie.textContent=B.label,F.appendChild(V),F.appendChild(ie),N.appendChild(F)}),se("Screen sizes",N)}else if(Y.condition==="user"){let R;if(customElements.get("ha-user-picker"))R=document.createElement("ha-user-picker"),R.hass=this.hass,R.setAttribute("label","Select user"),R.value=Array.isArray(Y.users)?Y.users:[],R.addEventListener("value-changed",N=>{let B=N.detail.value;Y.users=Array.isArray(B)?B:[B],le()});else{R=document.createElement("div"),R.style.display="flex",R.style.flexDirection="column",R.style.gap="4px";let N=document.createElement("span");N.style.opacity="0.7",N.style.fontSize=".85rem",N.textContent="Loading users\u2026",R.appendChild(N);let B=Array.isArray(Y.users)?Y.users:[];ve().then(F=>{if(R.innerHTML="",Array.isArray(F)&&F.length)F.forEach(V=>{let ie=V.id||V.user_id||V.uid||V.name||"",oe=V.name||ie,ze=document.createElement("label");ze.style.display="flex",ze.style.alignItems="center",ze.style.gap="6px",ze.style.padding="4px 0";let be=document.createElement("input");be.type="checkbox",be.checked=B.includes(ie)||B.includes(oe),be.addEventListener("change",()=>{let De=Array.isArray(Y.users)?Y.users.slice():[];be.checked?De.includes(ie)||De.push(ie):De=De.filter(mt=>mt!==ie&&mt!==oe),Y.users=De,le()});let Be=document.createElement("span");Be.textContent=oe,ze.appendChild(be),ze.appendChild(Be),R.appendChild(ze)});else{let V=document.createElement("input");V.value=Array.isArray(Y.users)?Y.users.join(","):"",Object.assign(V.style,{padding:"6px 10px",borderRadius:"6px",border:"1px solid var(--divider-color)",background:"var(--card-background-color, var(--secondary-background-color))",color:"var(--primary-text-color, inherit)"});let ie=()=>{Y.users=V.value.split(",").map(oe=>oe.trim()).filter(Boolean),le()};V.addEventListener("change",ie),V.addEventListener("blur",ie),R.appendChild(V)}})}se("Users",R)}Ve.appendChild(xe)}}else if(tt){Array.isArray(Y.conditions)||(Y.conditions=[]);let xe=document.createElement("div");xe.style.marginLeft="16px",Z(Y.conditions,xe),Ve.appendChild(xe)}Qe.appendChild(Ve)};Z($,K)};_e()},ot=j=>{if(((j==null?void 0:j.type)||"")==="custom_card"){kt=JSON.stringify(j||{}),w.innerHTML='<div style="opacity:.6;font-size:.9rem;padding:8px">Preview not available for the custom card placeholder. Use the YAML editor.</div>',U.hidden=!0;return}let $=JSON.stringify(j||{});$!==kt&&(kt=$,vt&&clearTimeout(vt),vt=setTimeout(async()=>{let ue=++pt;U.hidden=!1,w.innerHTML="",await An();try{let ve=await this._helpersPromise||await window.loadCardHelpers();if(ue!==pt)return;let le=ve.createCardElement(j);if(le.hass=this.hass,ue!==pt)return;w.appendChild(le)}catch{}finally{ue===pt&&(U.hidden=!0)}},150))},st=async j=>{var ve;let $=++pt;S.hidden=!1,T.innerHTML="",await lc();let ue=j.type||Ee;if(rt=await this._getEditorElementForType(ue,j),ue==="custom_card"){let le=document.createElement("div");return le.style.opacity=".7",le.style.fontSize=".9rem",le.textContent="Custom card placeholder: use the YAML editor to paste the card type and options.",T.appendChild(le),Ae=null,nt!=="yaml"&&ne("yaml"),ae(!0),S.hidden=!0,!1}if(!rt){let le=document.createElement("div");return le.style.opacity=".7",le.style.fontSize=".9rem",le.textContent="This card does not support a visual editor. Please use the YAML tab to configure it.",$===pt&&(T.appendChild(le),S.hidden=!0),Ae=null,ae(!0),nt!=="visual"&&ne("yaml"),!1}try{rt.hass=this.hass,rt.isConnected||T.appendChild(rt),await Promise.resolve();try{rt.setConfig(j)}catch{}try{let _e=await this._helpersPromise||await window.loadCardHelpers(),W=_e.getCardElementClass?await _e.getCardElementClass(j.type||Ee):null;if(W!=null&&W.getStubConfig){let Z=Object.keys(((ve=this.hass)==null?void 0:ve.states)||{}),Re=Ke=>Z.filter(Ye=>Ye.startsWith(Ke+".")),Y=await W.getStubConfig(this.hass,Z,Re);Y&&(j=this._shapeBySchema(j.type||Ee,{...Y}))}}catch{}await Promise.resolve();try{rt.setConfig(j)}catch{}Ae&&this.__onEditorChange&&(Ae.removeEventListener("config-changed",this.__onEditorChange),Ae.removeEventListener("value-changed",this.__onEditorChange));let le=async _e=>{var Re,Y,Ke;let W=(Ke=(Re=_e.detail)==null?void 0:Re.config)!=null?Ke:(Y=_e.detail)==null?void 0:Y.value;if(!W)return;let Z=W.type||Ee;Ee=Z,re=this._shapeBySchema(Z,W),H(""),ae(!0),Ct(Ee,re),ot(re),Le==null||Le.setValue(re)};return this.__onEditorChange=le,rt.addEventListener("config-changed",le),rt.addEventListener("value-changed",le),Ae=rt,nt!=="yaml"&&ne("visual"),ae(!0),!0}finally{$===pt&&(S.hidden=!0)}},Yt=async j=>{Le=await this._mountYamlEditor(P,j,async $=>{var ue,ve;try{let le=($==null?void 0:$.type)||Ee,_e=this._shapeBySchema(le,$||{}),W=le!==Ee;if(Ee=le,re=_e,C.hidden=!0,C.textContent="",ae(!0),W){if(Ct(Ee,re),Ae){try{(ue=Ae.setConfig)==null||ue.call(Ae,re)}catch{}nt!=="yaml"&&ne("visual")}try{qe(re)}catch{}}else{try{(ve=Ae==null?void 0:Ae.setConfig)==null||ve.call(Ae,re)}catch{}ot(re);try{qe(re)}catch{}}}catch(le){C.hidden=!1,C.textContent=`Invalid config: ${String((le==null?void 0:le.message)||le)}`,ae(!1)}},$=>{C.hidden=!1,C.textContent=`Invalid YAML: ${String(($==null?void 0:$.message)||$)}`,ae(!1)})},bt=async j=>{if(this.__stubCache.has(j))return{...this.__stubCache.get(j)};let $=await this._getStubConfigForType(j);return this.__stubCache.set(j,{...$}),{...$}},Dt=async j=>{C.hidden=!0,C.textContent="",H(""),Ee=j;try{typeof ct=="function"&&ct(j)}catch{}let $=e==="edit"&&r&&r.type===j?{...r}:await bt(j);re=this._shapeBySchema(j,$),Ae=null,Ct(j,re),await Yt(re),await An(),ot(re);try{qe(re)}catch{}try{let ue=await st(re);ne(ue?"visual":"yaml")}catch{ne("yaml")}ae(!0)},Et=async()=>{if(!re)return;let j=this._shapeBySchema(Ee,re);e==="edit"&&typeof o=="function"?await o(j):(await this._addPickedCardToLayout(j),this._pushRecent((j||{}).type)),c()};m.addEventListener("click",c),b.addEventListener("click",c),u.addEventListener("click",Et),g.addEventListener("click",Et),s.addEventListener("keydown",j=>{j.key==="Escape"&&c(),j.key==="Enter"&&!u.disabled&&Et()});let gt=null;y.addEventListener("input",()=>{gt&&clearTimeout(gt),gt=setTimeout(et,120)}),et(),await Dt((()=>{var ue;return(((ue=this._getRecent)==null?void 0:ue.call(this))||[]).find(Boolean)||"entities"})()),ae(!0),e==="edit"&&r&&(await Dt(r.type||"entities"),ae(!0))}async _getStubConfigForType(e){var m;let r=await this._helpersPromise||await window.loadCardHelpers(),o=null;if(e==="custom_card")return null;try{r.getCardElementClass&&(o=await r.getCardElementClass(e))}catch{}let c=Object.keys(((m=this.hass)==null?void 0:m.states)||{}),s=b=>c.filter(y=>y.startsWith(b+".")),d={type:e};if(o!=null&&o.getStubConfig)try{let b=await o.getStubConfig(this.hass,c,s);if(e!=="entity")return b;b&&typeof b=="object"&&(d={...d,...b})}catch{}let u=c[0],g=s("sensor")[0]||u;if(["entity","sensor","button","gauge","tile","light","thermostat","media-control","alarm-panel","picture-entity","weather-forecast","map"].includes(e)){let b={sensor:g,gauge:s("sensor").find(this._isNumericEntity.bind(this))||g,"media-control":s("media_player")[0]||u,light:s("light")[0]||u,thermostat:s("climate")[0]||u,"alarm-panel":s("alarm_control_panel")[0]||u,"weather-forecast":s("weather")[0]||u,map:s("device_tracker")[0]||s("person")[0]||u}[e]||g||u;["entity","sensor","button","gauge","tile","light","thermostat","media-control","alarm-panel","picture-entity"].includes(e)?d.entity=b:e==="weather-forecast"?(d.entity=b,d.show_current=!0,d.show_forecast=!0,d.forecast_type="daily"):e==="map"&&(d.entities=[b].filter(Boolean),d.theme_mode="auto")}if(["entities","glance","picture-glance","history-graph","statistics-graph"].includes(e)){let b=y=>(y!=null&&y.length?c.filter(w=>y.includes(w.split(".")[0])):c).slice(0,3);e==="statistics-graph"?d.entities=b(["sensor","number","input_number"]):d.entities=b()}if(e==="markdown"&&(d.content="Markdown card"),e==="sensor"&&(d.graph="line"),e==="button"&&(d.show_name=!0,d.show_icon=!0),e==="tile"&&(d.features_position="bottom",d.vertical=!1),e==="picture-glance"&&(d.title=d.title||"Glance",d.image=d.image||"https://demo.home-assistant.io/stub_config/kitchen.png"),e==="picture-entity"&&(d.image=d.image||"https://demo.home-assistant.io/stub_config/bedroom.png"),e==="iframe"&&(d.url=d.url||"https://www.home-assistant.io",d.aspect_ratio=d.aspect_ratio||"50%"),e==="alarm-panel"&&(d.states=d.states||["arm_home","arm_away"]),e==="area")try{let b=this.hass&&this.hass.areas?Object.values(this.hass.areas):[];b.length?d.area=b[0].area_id||b[0].name||b[0].id:d.area=u?u.split(".")[0]:"default_area",d.display_type="picture",d.alert_classes=d.alert_classes||["moisture","motion"],d.sensor_classes=d.sensor_classes||["temperature","humidity"],d.features_position="bottom"}catch{}return d}_getNextAvailablePosition(){let e=Array.from(this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)")),r=new Set,o=this.gridSize;e.forEach(d=>{let u=parseFloat(d.getAttribute("data-x"))||0,g=parseFloat(d.getAttribute("data-y"))||0,m=parseFloat(getComputedStyle(d).width)||100,b=parseFloat(getComputedStyle(d).height)||100,y=Math.floor(u/o),w=Math.floor(g/o),T=Math.floor((u+m)/o),S=Math.floor((g+b)/o);for(let O=y;O<T;O++)for(let P=w;P<S;P++)r.add(`${O}-${P}`)});let c=0,s=0;for(;r.has(`${c}-${s}`);)c+=6,c>60&&(c=0,s+=6);return{x:c*o,y:s*o}}async _addPickedCardToLayout(e){this._hideEmptyPlaceholder();let r=await this._createCard(e),o=this._makeWrapper(r),c=this._getNextAvailablePosition();this._setCardPosition(o,c.x,c.y),o.style.width=`${14*this.gridSize}px`,o.style.height=`${10*this.gridSize}px`,o.style.zIndex=String(this._highestZ()+1),this.cardContainer.appendChild(o);try{this._rebuildOnce(o.firstElementChild)}catch{}this._initCardInteract(o),this._resizeContainer(),this._queueSave("add"),this._toast("Card added to layout."),this._syncEmptyStateUI();try{this._applyVisibility_()}catch{}}_toggleSelection(e,r=null){let o=r==null?!this._selection.has(e):!!r;o?this._selection.add(e):this._selection.delete(e),e.classList.toggle("selected",o)}_clearSelection(){for(let e of this._selection)e.classList.remove("selected");this._selection.clear()}_copySelection(){var e,r,o;try{let c=this._selection?Array.from(this._selection):[];if(!c.length){(e=this._toast)==null||e.call(this,"Nothing selected to copy.");return}let s=1/0,d=1/0,u=[];for(let g of c){if(g.dataset.placeholder)continue;let m=parseFloat(g.getAttribute("data-x"))||0,b=parseFloat(g.getAttribute("data-y"))||0;m<s&&(s=m),b<d&&(d=b)}for(let g of c){if(g.dataset.placeholder)continue;let m=this._extractCardConfig(g.firstElementChild)||{},b=parseFloat(g.getAttribute("data-x"))||0,y=parseFloat(g.getAttribute("data-y"))||0,w=g.style.width||`${g.getBoundingClientRect().width}px`,T=g.style.height||`${g.getBoundingClientRect().height}px`;u.push({cfg:m,dx:b-s,dy:y-d,width:w,height:T})}window.__DDC_CLIPBOARD__={items:u},(r=this._toast)==null||r.call(this,`Copied ${u.length} card${u.length===1?"":"s"}.`)}catch(c){console.warn("[drag-and-drop-card] Copy failed",c),(o=this._toast)==null||o.call(this,"Copy failed.")}}async _pasteClipboard(){var e,r,o,c;try{let s=window.__DDC_CLIPBOARD__;if(!s||!Array.isArray(s.items)||!s.items.length){(e=this._toast)==null||e.call(this,"Clipboard is empty.");return}let d=s.items,u=1,g;do{let y=this.gridSize*u,w=this.gridSize*u;g=d.map(T=>{let S=parseFloat(T.width)||0,O=parseFloat(T.height)||0;return{x:y+(T.dx||0),y:w+(T.dy||0),w:S,h:O}}),u+=1}while(this._anyCollisionFor(g,new Set));let m=this.gridSize*(u-1),b=this.gridSize*(u-1);for(let y of d){let w=y.cfg||{},T=await this._createCard(w),S=this._makeWrapper(T);S.style.width=y.width,S.style.height=y.height;let O=m+(y.dx||0),P=b+(y.dy||0);this._setCardPosition(S,O,P),S.style.zIndex=String(this._highestZ()+1);try{let C=this._normalizeTabId(this.activeTab||this.defaultTab);C&&(S.dataset.tabId=C)}catch{}this.cardContainer.appendChild(S);try{this._rebuildOnce(S.firstElementChild)}catch{}this._initCardInteract(S)}this._resizeContainer(),this._applyActiveTab(),(r=this._queueSave)==null||r.call(this,"paste"),(o=this._toast)==null||o.call(this,`Pasted ${d.length} card${d.length===1?"":"s"}.`)}catch(s){console.warn("[drag-and-drop-card] Paste failed",s),(c=this._toast)==null||c.call(this,"Paste failed.")}}_installSelectionMarquee(){let e=this.cardContainer,r=0,o=0,c=null,s=!1,d=y=>{let w=e.getBoundingClientRect(),T="touches"in y&&y.touches[0]?y.touches[0].clientX:y.clientX,S="touches"in y&&y.touches[0]?y.touches[0].clientY:y.clientY;return{x:T-w.left,y:S-w.top}},u=(y,w)=>{let T=Math.min(y,r),S=Math.max(y,r),O=Math.min(w,o),P=Math.max(w,o);c.style.left=`${T}px`,c.style.top=`${O}px`,c.style.width=`${S-T}px`,c.style.height=`${P-O}px`;let C=c.getBoundingClientRect(),A=e.querySelectorAll(".card-wrapper:not(.ddc-placeholder)");this._clearSelection(),A.forEach(M=>{let _=M.getBoundingClientRect();!(_.right<C.left||_.left>C.right||_.bottom<C.top||_.top>C.bottom)&&this._toggleSelection(M,!0)})},g=y=>{if(!this.editMode||y.target.closest(".card-wrapper"))return;s=!0;let w=d(y);r=w.x,o=w.y,c=document.createElement("div"),c.className="marquee",c.style.left=`${r}px`,c.style.top=`${o}px`,e.appendChild(c),y.preventDefault()},m=y=>{!s||!c||u(d(y).x,d(y).y)},b=()=>{s&&(s=!1,c&&c.remove(),c=null)};e.addEventListener("mousedown",g),window.addEventListener("mousemove",m),window.addEventListener("mouseup",b),e.addEventListener("touchstart",y=>{this.editMode&&(y.target.closest(".card-wrapper")||g(y))},{passive:!1}),window.addEventListener("touchmove",y=>{m(y)},{passive:!0}),window.addEventListener("touchend",b),window.addEventListener("touchcancel",b)}async _openDiagnostics(){var u,g;let e=document.createElement("div");e.className="modal";let r=this.storageKey||"(none)",o=this._backendOK&&!!this.storageKey,c=m=>m.slice(-200).map(b=>`<div style="font-family:monospace;font-size:.85rem;line-height:1.3">
        <span style="opacity:.6">${b.t}</span>
        <b style="margin-left:6px;color:#03a9f4">[${b.kind}]</b>
        <span style="margin-left:6px">${this._safe(b.msg)}</span>
        ${b.extra?`<pre style="margin:4px 0 0 0;white-space:pre-wrap;background:var(--card-background-color);border:1px solid var(--divider-color);border-radius:8px;padding:6px;max-height:160px;overflow:auto">${this._safe(JSON.stringify(b.extra,null,2))}</pre>`:""}
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
                <div>Storage key (raw \u2192 slug)</div><div><code>${this._safe(((u=this._config)==null?void 0:u.storage_key)||"")}</code> \u2192 <code>${this._safe(r)}</code></div>
                <div>Backend reachable</div><div><b>${this._backendOK?"YES":"NO"}</b></div>
                <div>Persist target</div><div><b>${o?"Host (backend)":"Browser (localStorage)"}</b></div>
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
            <div class="bd" id="logArea" style="padding:12px;max-height:420px;overflow:auto">${c(this._dbgDump())}</div>
          </div>
        </div>
      </div>`;let s=()=>e.remove();e.querySelector("#closeDiag").addEventListener("click",s),this.shadowRoot.appendChild(e);let d=()=>{let m=e.querySelector("#logArea"),b=y=>y.slice(-200).map(w=>`<div style="font-family:monospace;font-size:.85rem;line-height:1.3">
          <span style="opacity:.6">${w.t}</span>
          <b style="margin-left:6px;color:#03a9f4">[${w.kind}]</b>
          <span style="margin-left:6px">${this._safe(w.msg)}</span>
          ${w.extra?`<pre style="margin:4px 0 0 0;white-space:pre-wrap;background:var(--card-background-color);border:1px solid var(--divider-color);border-radius:8px;padding:6px;max-height:160px;overflow:auto">${this._safe(JSON.stringify(w.extra,null,2))}</pre>`:""}
        </div>`).join("");m.innerHTML=b(this._dbgDump()),m.scrollTop=m.scrollHeight};e.querySelector("#refreshKeys").addEventListener("click",async()=>{try{this._dbgPush("probe","Manual refresh"),await this._probeBackend()}finally{d()}}),e.querySelector("#forceSave").addEventListener("click",async()=>{await this._saveLayout(!1),d()}),e.querySelector("#exportJson").addEventListener("click",()=>{let b=Array.from(this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)")).map(S=>{let O=parseFloat(S.getAttribute("data-x"))||0,P=parseFloat(S.getAttribute("data-y"))||0,C=parseFloat(S.style.width)||S.getBoundingClientRect().width,A=parseFloat(S.style.height)||S.getBoundingClientRect().height,M=parseInt(S.style.zIndex||"1",10),_=this._extractCardConfig(S.firstElementChild),L=S.dataset.tabId||this.defaultTab;return{card:_,position:{x:O,y:P},size:{width:C,height:A},z:M,tabId:L}}),y={version:2,options:this._exportableOptions(),cards:b},w=new Blob([JSON.stringify(y,null,2)],{type:"application/json"}),T=document.createElement("a");T.href=URL.createObjectURL(w),T.download=`ddc_${this.storageKey||"layout"}.json`,T.click(),URL.revokeObjectURL(T.href)}),e.querySelector("#importJson").addEventListener("click",async()=>{let m=document.createElement("input");m.type="file",m.accept="application/json",m.onchange=async()=>{var T,S,O,P,C,A,M,_,L,D,K,J,U;let b=(T=m.files)==null?void 0:T[0];if(!b)return;let y=await b.text();try{let ae=JSON.parse(y);if(this._dbgPush("import","Loaded file",{bytes:y.length}),this.cardContainer.innerHTML="",(S=ae.cards)!=null&&S.length)for(let H of ae.cards)if(!(H!=null&&H.card)||typeof H.card=="object"&&Object.keys(H.card).length===0){let G=this._makePlaceholderAt(((O=H.position)==null?void 0:O.x)||0,((P=H.position)==null?void 0:P.y)||0,((C=H.size)==null?void 0:C.width)||200,((A=H.size)==null?void 0:A.height)||200);this.cardContainer.appendChild(G)}else{let G=await this._createCard(H.card),ee=this._makeWrapper(G);this._setCardPosition(ee,((M=H.position)==null?void 0:M.x)||0,((_=H.position)==null?void 0:_.y)||0),ee.dataset.tabId=this._normalizeTabId(H.tabId||H.tab_id||this.defaultTab),this._setCardPosition(ee,((L=H.position)==null?void 0:L.x)||0,((D=H.position)==null?void 0:D.y)||0),ee.style.width=`${((K=H.size)==null?void 0:K.width)||140}px`,ee.style.height=`${((J=H.size)==null?void 0:J.height)||100}px`,this.cardContainer.appendChild(ee);try{this._rebuildOnce(ee.firstElementChild)}catch{}this._initCardInteract(ee)}else this._showEmptyPlaceholder(),(U=this._applyAutoScale)==null||U.call(this);this._resizeContainer(),await this._saveLayout(!1)}catch(ae){this._dbgPush("import","Parse failed",{error:String(ae)})}let w=new Event("ddc-logrefresh");window.dispatchEvent(w)},m.click()}),e.querySelector("#testRoundtrip").addEventListener("click",async()=>{if(!this._backendOK)return this._dbgPush("test","Backend not reachable, aborting"),d();let m=(this.storageKey||"ddc_test")+"_selftest",b={t:Date.now(),msg:"roundtrip"};try{await this._saveLayoutToBackend(m,b);let y=await this._loadLayoutFromBackend(m);this._dbgPush("test","Round-trip result",{wrote:b,read:y})}catch(y){this._dbgPush("test","Round-trip failed",{error:String(y)})}d()}),d()}_openDashboardSettings(){var W,Z,Re,Y,Ke,Ye,Qe,Fe,tt,Ve,Ge,$e,je,Oe,he,we,Pe,xe,se;let e=document.createElement("div");e.className="modal",this._ensureSettingsStyles_(),e.innerHTML=`
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

`;let r=this.shadowRoot.querySelector(".modal");if(r){try{r.remove()}catch{}this.__settingsModal===r&&(this.__settingsModal=null)}if(this.__settingsModal){try{this.__settingsModal.remove()}catch{}this.__settingsModal=null}this.__settingsModal=e,this.shadowRoot.appendChild(e);let o=e.querySelector("#ddc-setting-autoResize"),c=e.querySelector("#ddc-setting-gridSize"),s=e.querySelector("#ddc-setting-animate"),d=e.querySelector("#ddc-setting-hideHdr"),u=e.querySelector("#ddc-setting-hideSbar"),g=e.querySelector("#ddc-setting-dragSnap"),m=e.querySelector("#ddc-setting-autoSave"),b=e.querySelector("#ddc-setting-autoSaveDebounce"),y=e.querySelector("#ddc-setting-sizeMode"),w=e.querySelector("#ddc-setting-orient"),T=e.querySelector("#ddc-setting-disableOverlap"),S=e.querySelector("#ddc-setting-editPin"),O=e.querySelector("#ddc-setting-containerBg"),P=e.querySelector("#ddc-setting-cardBg"),C=e.querySelector("#ddc-setting-bgImg"),A=e.querySelector("#ddc-bg-repeat"),M=e.querySelector("#ddc-bg-size"),_=e.querySelector("#ddc-bg-position"),L=e.querySelector("#ddc-bg-attachment"),D=e.querySelector("#ddc-bg-opacity"),K=e.querySelector("#ddc-bg-opacity-out"),J=e.querySelector("#ddc-setting-debug"),U=e.querySelector("#ddc-setting-screenSaverEnabled"),ae=e.querySelector("#ddc-setting-screenSaverDelay"),H=e.querySelector("#ddc-screenSaverDelayOut"),G=e.querySelector("#ddc-bg-mode"),ee=e.querySelector('[data-bg-section="image"]'),pe=e.querySelector('[data-bg-section="particles"]'),We=e.querySelector('[data-bg-section="youtube"]'),fe=e.querySelector("#ddc-particles-url"),Te=e.querySelector("#ddc-particles-pointer"),Ce=e.querySelector("#ddc-youtube-url"),ke=e.querySelector("#ddc-youtube-start"),Xe=e.querySelector("#ddc-youtube-end"),Je=e.querySelector("#ddc-youtube-mute"),Ue=e.querySelector("#ddc-youtube-loop"),at=e.querySelector("#ddc-youtube-size"),ct=e.querySelector("#ddc-youtube-position"),nt=e.querySelector("#ddc-youtube-attachment"),ne=e.querySelector("#ddc-youtube-opacity"),ht=e.querySelector("#ddc-youtube-opacity-out"),et=((W=this._config)==null?void 0:W.background_image)||{},Ne=((Z=this._config)==null?void 0:Z.background_mode)||((Y=(Re=this._config)==null?void 0:Re.background_image)!=null&&Y.src?"image":"none");G&&(G.value=String(Ne));let re=((Ke=this._config)==null?void 0:Ke.background_particles)||{};fe&&(fe.value=re.config_url||""),Te&&(Te.checked=!!re.pointer_events);let Ee=((Ye=this._config)==null?void 0:Ye.background_youtube)||{},Le=Ee.url||Ee.video_id||"";if(Ce&&(Ce.value=Le),ke&&(ke.value=(Qe=Ee.start)!=null?Qe:""),Xe&&(Xe.value=(Fe=Ee.end)!=null?Fe:""),Je&&(Je.checked=Ee.mute!==!1),Ue&&(Ue.checked=Ee.loop!==!1),at&&(at.value=String(Ee.size||"cover")),ct&&(ct.value=String(Ee.position||"center")),nt&&(nt.value=String(Ee.attachment||"scroll")),ne){let R=Math.round((Ee.opacity!=null?Ee.opacity:1)*100);ne.value=String(R),ht&&(ht.textContent=R+"%"),ne.addEventListener("input",()=>{let N=Math.max(0,Math.min(100,parseInt(ne.value||"100",10)));ht&&(ht.textContent=N+"%")})}let Ae=()=>{let R=(G==null?void 0:G.value)||"none";ee&&(ee.style.display=R==="image"?"":"none"),pe&&(pe.style.display=R==="particles"?"":"none"),We&&(We.style.display=R==="youtube"?"":"none")};if(G==null||G.addEventListener("change",Ae),Ae(),o&&(o.checked=!!this.autoResizeCards),c&&(c.value=String(this.gridSize||100)),s&&(s.checked=!!this.animateCards),d&&(d.checked=!!this.hideHaHeader),u&&(u.checked=!!this.hideHaSidebar),g&&(g.checked=!!this.dragLiveSnap),m&&(m.checked=!!this.autoSave),b&&(b.value=String((tt=this.autoSaveDebounce)!=null?tt:800)),y&&(y.value=String(this.containerSizeMode||"dynamic")),w&&(w.value=String(this.containerPresetOrient||"auto")),T&&(T.checked=!!this.disableOverlap),O&&(O.value=String(this.containerBackground||"")),P&&(P.value=String(this.cardBackground||"")),C){let R=(($e=(Ve=this._config)==null?void 0:Ve.background_image)!=null?$e:(Ge=this._config)==null?void 0:Ge.bg_image)||{};C.value=R.src?String(R.src):""}if(J&&(J.checked=!!this.debug),A&&(A.value=String(et.repeat||"no-repeat")),M&&(M.value=String(et.size||"cover")),_&&(_.value=String(et.position||"center center")),L&&(L.value=String(et.attachment||"scroll")),D){let R=Math.round((et.opacity!=null?et.opacity:1)*100);D.value=String(R),K&&(K.textContent=`${R}%`),D.addEventListener("input",()=>{let N=Math.max(0,Math.min(100,parseInt(D.value||"100",10)));K.textContent=`${N}%`,this.style.setProperty("--ddc-bg-opacity",String(N/100))})}if(U&&(U.checked=!!this.screenSaverEnabled,U.addEventListener("change",()=>{this.screenSaverEnabled=U.checked,typeof this._updateScreensaverSettings=="function"&&this._updateScreensaverSettings()})),ae){let R=this.screenSaverDelay!=null?Number(this.screenSaverDelay):3e5,N=Math.round(R/6e4);(!Number.isFinite(N)||N<1)&&(N=5),N>20&&(N=20),ae.value=String(N),H&&(H.textContent=`${N} min`),ae.addEventListener("input",()=>{let B=parseInt(ae.value||"1",10),F=Math.max(1,Math.min(20,isNaN(B)?1:B));H&&(H.textContent=`${F} min`),this.screenSaverDelay=F*6e4,typeof this._updateScreensaverSettings=="function"&&this._updateScreensaverSettings()})}try{if(S){let R=this.config&&this.config.edit_mode_pin!=null?String(this.config.edit_mode_pin):"",N=this.editModePin!=null?String(this.editModePin):"";S.value=N||R||"",S.disabled=!1,S.readOnly=!1}}catch{}let rt=e.querySelector("#ddc-setting-gridSize"),pt=e.querySelector("#ddc-grid-out"),vt=e.querySelector("#ddc-grid-demo"),kt=e.querySelector("#ddc-grid-meta"),Ct=()=>{if(!vt||!kt)return;let R=vt.getBoundingClientRect(),N=Math.max(1,parseInt(rt.value||"100",10)),B=Math.max(1,Math.floor(R.width/N)),F=Math.max(1,Math.floor(R.height/N));kt.innerHTML=`
        <ha-icon icon="mdi:grid"></ha-icon>
        <span>${N}px \xB7 ${B}\xD7${F}</span>
      `},Lt=()=>{let R=Math.max(1,parseInt(rt.value||"100",10));pt&&(pt.textContent=`${R} px`),vt&&vt.style.setProperty("--g",`${R}px`),Ct()};if(rt&&(rt.value||(rt.value=String(this.gridSize||100)),rt.addEventListener("input",Lt),Lt()),vt){let R=new ResizeObserver(()=>Ct());R.observe(vt),(Oe=(je=this.__ddcGridRO)==null?void 0:je.disconnect)==null||Oe.call(je),this.__ddcGridRO=R}e.querySelectorAll(".chip").forEach(R=>{R.addEventListener("click",()=>{var V,ie;e.querySelectorAll(".chip").forEach(oe=>oe.setAttribute("aria-pressed","false")),R.setAttribute("aria-pressed","true");let N=parseInt(R.dataset.w,10),B=parseInt(R.dataset.h,10),F=e.querySelector("#ddc-setting-sizeMode");F.value="fixed_custom",(ie=(V=typeof y!="undefined"&&y)==null?void 0:V.dispatchEvent)==null||ie.call(V,new Event("change")),setTimeout(()=>{var be,Be,De;(be=e.querySelector("#ddc-setting-custW"))==null||be.setAttribute("value",String(N)),(De=(Be=e.querySelector("#ddc-setting-custW"))==null?void 0:Be.dispatchEvent)==null||De.call(Be,new Event("change"));let oe=e.querySelector("#ddc-setting-custW");oe&&(oe.value=String(N));let ze=e.querySelector("#ddc-setting-custH");ze&&(ze.value=String(B))},0)})});let Wt=["#ffffff","#f5f7fa","#ebeff5","#121212","#1f2937","#334155","var(--card-background-color)","var(--ha-card-background)","transparent"],qe=(R,N,B)=>{let F=e.querySelector(R),V=e.querySelector(N),ie=e.querySelector(B);!F||!V||(F.innerHTML="",Wt.forEach((oe,ze)=>{let be=document.createElement("button");be.type="button",be.className="swatch",be.title=oe,be.style.background=oe.startsWith("var(")?getComputedStyle(this).getPropertyValue(oe.slice(4,-1)).trim()||"#fff":oe,be.setAttribute("aria-pressed","false"),be.addEventListener("click",()=>{F.querySelectorAll(".swatch").forEach(Be=>Be.setAttribute("aria-pressed","false")),be.setAttribute("aria-pressed","true"),V.value=oe,/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(oe)&&ie&&(ie.value=oe)}),F.appendChild(be),String(V.value).trim()===oe&&be.setAttribute("aria-pressed","true")}))};qe("#ddc-swatches-containerBg","#ddc-setting-containerBg","#ddc-color-containerBg"),qe("#ddc-swatches-cardBg","#ddc-setting-cardBg","#ddc-color-cardBg"),[["#ddc-color-containerBg","#ddc-setting-containerBg"],["#ddc-color-cardBg","#ddc-setting-cardBg"]].forEach(([R,N])=>{let B=e.querySelector(R),F=e.querySelector(N);if(!B||!F)return;let V=(String(F.value||"").match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)||[])[0];V&&(B.value=V),B.addEventListener("input",()=>{F.value=B.value}),F.addEventListener("change",()=>{let ie=(String(F.value||"").match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)||[])[0];ie&&(B.value=ie)})});let ot=e.querySelector("#ddc-file-bg"),st=e.querySelector("#ddc-setting-bgImg"),Yt=e.querySelector("#ddc-bg-thumb"),bt=R=>{Yt&&(Yt.style.backgroundImage=R?`url(${R})`:"none")};st!=null&&st.value&&bt(st.value),ot==null||ot.addEventListener("change",async()=>{var F;let R=(F=ot.files)==null?void 0:F[0];if(!R)return;let N=/iPad|iPhone|iPod/.test(navigator.userAgent),B=URL.createObjectURL(R);bt(B),this.style.setProperty("--ddc-bg-image",`url("${B}")`),st&&(st.value=""),(async()=>{if(!N)try{let V=new Image;V.src=B,await V.decode();let ie=Math.min(1920/V.naturalWidth,1080/V.naturalHeight,1),oe=Math.round(V.naturalWidth*ie),ze=Math.round(V.naturalHeight*ie),be=document.createElement("canvas");be.width=oe,be.height=ze,be.getContext("2d",{alpha:!1}).drawImage(V,0,0,oe,ze);let De=be.toDataURL("image/jpeg",.7);De&&De.length<3e5&&st&&(st.value=De)}catch{}})()}),(he=e.querySelector("#ddc-clear-bg"))==null||he.addEventListener("click",()=>{var B,F;st&&(st.value=""),bt("");let{background_image:R,...N}=this._config||{};this._config=N,this.style.setProperty("--ddc-bg-image","none"),(B=this._applyBackgroundFromConfig)==null||B.call(this),(F=this._persistThisCardConfigToStorage_)==null||F.call(this)}),e.addEventListener("click",R=>{R.target===e&&(R.stopPropagation(),_e())});let Dt=R=>{R.key==="Escape"&&(R.stopPropagation(),_e())};document.addEventListener("keydown",Dt,{once:!0}),setTimeout(()=>{var R;return(R=e.querySelector("#ddc-setting-gridSize"))==null?void 0:R.focus()},0);try{let R=e.querySelector("#ddc-setting-sizeExtras"),N=()=>{var F,V;if(!R)return;R.innerHTML="";let B=(y==null?void 0:y.value)||"dynamic";if(B==="fixed_custom"){let ie=document.createElement("label");ie.style.display="flex",ie.style.flexDirection="column",ie.style.fontSize=".95rem",ie.style.marginBottom="10px";let oe=document.createElement("span");oe.textContent="Custom width (px)",oe.style.marginBottom="4px";let ze=document.createElement("input");ze.type="number",ze.id="ddc-setting-custW",ze.min="100",ze.max="10000",ze.step="10",ze.style.padding="6px",ze.style.border="1px solid var(--divider-color,rgba(0,0,0,.3))",ze.style.borderRadius="6px",ze.value=String((F=this.containerFixedWidth)!=null?F:800),ie.appendChild(oe),ie.appendChild(ze);let be=document.createElement("label");be.style.display="flex",be.style.flexDirection="column",be.style.fontSize=".95rem",be.style.marginBottom="10px";let Be=document.createElement("span");Be.textContent="Custom height (px)",Be.style.marginBottom="4px";let De=document.createElement("input");De.type="number",De.id="ddc-setting-custH",De.min="100",De.max="10000",De.step="10",De.style.padding="6px",De.style.border="1px solid var(--divider-color,rgba(0,0,0,.3))",De.style.borderRadius="6px",De.value=String((V=this.containerFixedHeight)!=null?V:600),be.appendChild(Be),be.appendChild(De),R.appendChild(ie),R.appendChild(be)}else if(B==="preset"){let ie=document.createElement("label");ie.style.display="flex",ie.style.flexDirection="column",ie.style.fontSize=".95rem",ie.style.marginBottom="10px";let oe=document.createElement("span");oe.textContent="Preset size",oe.style.marginBottom="4px";let ze=document.createElement("select");ze.id="ddc-setting-preset",ze.style.padding="6px",ze.style.border="1px solid var(--divider-color,rgba(0,0,0,.3))",ze.style.borderRadius="6px",(typeof t!="undefined"&&t._sizePresets?t._sizePresets():[]).forEach(Be=>{let De=document.createElement("option");De.value=Be.key,De.textContent=`${Be.label||Be.key} (${Be.w}\xD7${Be.h})`,ze.appendChild(De)}),ze.value=String(this.containerPreset||"fhd"),ie.appendChild(oe),ie.appendChild(ze),R.appendChild(ie)}};N(),y==null||y.addEventListener("change",N)}catch(R){console.warn("[drag-and-drop-card] Failed to build container size extras",R)}let Et=()=>{var N,B,F,V,ie;return((ie=(V=(B=(N=this._config)==null?void 0:N.options)==null?void 0:B.tabs)!=null?V:(F=this._config)==null?void 0:F.tabs)!=null?ie:[]).map(oe=>{var ze,be,Be,De,mt,Mt,Ot;return typeof oe=="string"?{id:oe,label:oe,icon:"",label_mode:"both",__raw:{id:oe,label:oe}}:{id:(Be=(be=(ze=oe.id)!=null?ze:oe.key)!=null?be:oe.label)!=null?Be:"tab",label:(mt=(De=oe.label)!=null?De:oe.id)!=null?mt:"Tab",icon:(Mt=oe.icon)!=null?Mt:"",label_mode:(Ot=oe.label_mode)!=null?Ot:"both",__raw:oe}})},gt=async(R,N)=>{var F,V,ie;let B=R.map(oe=>({...oe.__raw,id:oe.id,label:oe.label,icon:oe.icon||"",label_mode:oe.label_mode||"both"}));(F=this._config)!=null&&F.options?this._config.options={...this._config.options||{},tabs:B,default_tab:N!=null?N:(V=this._config.options)==null?void 0:V.default_tab}:(this._config.tabs=B,N&&(this._config.default_tab=N));try{await this._persistThisCardConfigToStorage_()}catch(oe){console.warn("[drag-and-drop-card] Could not persist tabs",oe)}(ie=this.requestUpdate)==null||ie.call(this)},ge=()=>{var R,N,B,F;return((N=(R=this._config)==null?void 0:R.options)==null?void 0:N.default_tab)||((B=this._config)==null?void 0:B.default_tab)||((F=Et()[0])==null?void 0:F.id)},j=e.querySelector("#ddc-tabs-list"),$=()=>{let R=Et(),N=ge();if(j.innerHTML="",!R.length){let B=document.createElement("div");B.className="hint",B.textContent="No tabs yet. Add one below.",j.appendChild(B);return}R.forEach((B,F)=>{let V=document.createElement("div");V.className="tab-row";let ie=document.createElement("input");ie.type="radio",ie.name="ddc-default-tab",ie.value=B.id,ie.checked=B.id===N,ie.title="Set as default tab",ie.addEventListener("change",async()=>{await gt(R,B.id)});let oe=document.createElement("div");oe.className="tab-name";let ze=document.createElement("ha-icon");ze.setAttribute("icon",B.icon||"mdi:tab");let be=document.createElement("input");be.value=B.icon||"",be.placeholder="mdi:home",be.title="Tab icon (mdi:...)",be.style.width="160px",be.addEventListener("change",async()=>{B.icon=be.value.trim(),ze.setAttribute("icon",B.icon||"mdi:tab"),R[F]=B,await gt(R,N)});let Be=document.createElement("input");Be.value=B.label,Be.placeholder="Tab name",Be.style.flex="1",Be.addEventListener("change",async()=>{B.label=Be.value.trim()||B.id,R[F]=B,await gt(R,N)});let De=document.createElement("div");De.className="tab-icon-wrap",De.appendChild(ze),De.appendChild(be),oe.appendChild(De),oe.appendChild(Be);let mt=document.createElement("div");mt.className="mode-chips";let Mt=(Ft,Pt)=>{let lt=document.createElement("button");return lt.type="button",lt.className="chip",lt.textContent=Pt,lt.setAttribute("aria-pressed",String((B.label_mode||"both")===Ft)),lt.addEventListener("click",async()=>{mt.querySelectorAll(".chip").forEach(Nt=>Nt.setAttribute("aria-pressed","false")),lt.setAttribute("aria-pressed","true"),B.label_mode=Ft,R[F]=B,await gt(R,N)}),lt};mt.appendChild(Mt("icon","Icon")),mt.appendChild(Mt("text","Text")),mt.appendChild(Mt("both","Both"));let Ot=document.createElement("div");Ot.className="tab-actions";let Tt=document.createElement("button");Tt.className="icon-btn danger",Tt.innerHTML='<ha-icon icon="mdi:trash-can-outline"></ha-icon>',Tt.title="Delete tab",Tt.addEventListener("click",async()=>{var lt,Nt;let Ft=Et().filter(Xt=>Xt.id!==B.id),Pt=N;B.id===N&&(Pt=(lt=Ft[0])==null?void 0:lt.id),await gt(Ft,Pt);try{(Nt=this._reassignCardsToTab_)==null||Nt.call(this,B.id,Pt)}catch{}$()}),Ot.appendChild(mt),Ot.appendChild(Tt),V.appendChild(ie),V.appendChild(oe),V.appendChild(Ot),j.appendChild(V)})};$(),(we=e.querySelector("#ddc-add-tab-btn"))==null||we.addEventListener("click",async()=>{let R=e.querySelector("#ddc-new-tab-name"),N=((R==null?void 0:R.value)||"").trim();if(!N)return;let B=Et(),F=N.replace(/\s+/g,"-").toLowerCase(),V=2;for(;B.some(ie=>ie.id===F);)F=`${F}-${V++}`;B.push({id:F,label:N,icon:"",label_mode:"both",__raw:{id:F,label:N}}),await gt(B,ge()),R.value="",$()});let ue=e.querySelector("#ddc-clear-bg");ue&&ue.addEventListener("click",()=>{var B,F,V;let R=e.querySelector("#ddc-setting-bgImg"),N=e.querySelector("#ddc-bg-thumb");R&&(R.value=""),N&&(N.style.backgroundImage="none");try{if((B=this._config)!=null&&B.background_image){let{background_image:ie,...oe}=this._config;this._config=oe}(F=this._applyBackgroundImageFromConfig)==null||F.call(this),(V=this._persistThisCardConfigToStorage_)==null||V.call(this)}catch(ie){console.warn("[drag-and-drop-card] Failed to clear background image",ie)}});let ve=["linear-gradient(135deg, #1e3a8a, #0ea5e9)","linear-gradient(135deg, #111827, #1f2937)","linear-gradient(135deg, #0f766e, #22c55e)","linear-gradient(135deg, #7c3aed, #06b6d4)","linear-gradient(135deg, #f97316, #f43f5e)","linear-gradient(135deg, #eab308, #22d3ee)","radial-gradient(circle at 30% 20%, #2dd4bf, #1e293b)","radial-gradient(circle at 70% 80%, #f59e0b, #7c3aed)"],le=(R,N)=>{let B=e.querySelector(R),F=e.querySelector(N);!B||!F||(B.innerHTML="",ve.forEach(V=>{let ie=document.createElement("button");ie.type="button",ie.className="gradient",ie.style.background=V,ie.setAttribute("aria-pressed","false"),ie.title=V,ie.addEventListener("click",()=>{B.querySelectorAll(".gradient").forEach(oe=>oe.setAttribute("aria-pressed","false")),ie.setAttribute("aria-pressed","true"),F.value=V;try{this.containerBackground=V,this.style.setProperty("--ddc-bg",V)}catch{}}),B.appendChild(ie),String(F.value).trim()===V&&ie.setAttribute("aria-pressed","true")}))};le("#ddc-gradients-containerBg","#ddc-setting-containerBg"),le("#ddc-gradients-cardBg","#ddc-setting-cardBg");let _e=()=>{var R,N;try{(N=(R=this.__ddcGridRO)==null?void 0:R.disconnect)==null||N.call(R),this.__ddcGridRO=null}catch{}try{e.remove()}catch{}this.__settingsModal===e&&(this.__settingsModal=null)};(Pe=e.querySelector("#ddc-settings-close"))==null||Pe.addEventListener("click",R=>{R.stopPropagation(),_e()}),(xe=e.querySelector("#ddc-settings-cancel"))==null||xe.addEventListener("click",R=>{R.stopPropagation(),_e()}),(se=e.querySelector("#ddc-settings-save"))==null||se.addEventListener("click",R=>{var qt,oi,Jt,It,$t,Fi,yi,vi,si,Bi,Ni,bi,qi,Hi,_i;R.stopPropagation();let N=!!(o!=null&&o.checked),B=parseInt((c==null?void 0:c.value)||"0",10),F=!!(s!=null&&s.checked),V=!!(d!=null&&d.checked),ie=!!(u!=null&&u.checked),oe=!!(g!=null&&g.checked),ze=!!(m!=null&&m.checked),be=parseInt((b==null?void 0:b.value)||"0",10),Be=(y==null?void 0:y.value)||"dynamic",De=(w==null?void 0:w.value)||"auto",mt=!!(T!=null&&T.checked),Mt=((O==null?void 0:O.value)||"").trim(),Ot=((P==null?void 0:P.value)||"").trim(),Tt=((C==null?void 0:C.value)||"").trim(),Ft=!!(J!=null&&J.checked),Pt=((S==null?void 0:S.value)||"").trim(),lt=(G==null?void 0:G.value)||"none",Nt=((fe==null?void 0:fe.value)||"").trim(),Xt=!!(Te!=null&&Te.checked),Ii=((Ce==null?void 0:Ce.value)||"").trim(),Ri=parseInt((ke==null?void 0:ke.value)||"",10),ni=parseInt((Xe==null?void 0:Xe.value)||"",10),Di=!!(Je!=null&&Je.checked),ri=!!(Ue!=null&&Ue.checked),hi=(at==null?void 0:at.value)||"cover",tn=(ct==null?void 0:ct.value)||"center",fi=ne?Math.max(0,Math.min(100,parseInt(ne.value||"100",10)))/100:1,gi=(nt==null?void 0:nt.value)||"scroll",nn=!!(U!=null&&U.checked),mi=parseInt((ae==null?void 0:ae.value)||"1",10),ai=(Number.isFinite(mi)?mi:1)*6e4;try{if(this.autoResizeCards=N,!this.autoResizeCards&&this.__ddcResizeObs){try{this.__ddcResizeObs.disconnect()}catch{}this.__ddcResizeObs=null,this.__ddcOnWinResize&&(window.removeEventListener("resize",this.__ddcOnWinResize),this.__ddcOnWinResize=null)}if(this.autoResizeCards&&!this.__ddcResizeObs){this.__ddcResizeObs=new ResizeObserver(()=>{var Ze;return(Ze=this._applyAutoScale)==null?void 0:Ze.call(this)});try{this.__ddcResizeObs.observe(this)}catch{}try{this.__ddcResizeObs.observe(this.cardContainer)}catch{}window.addEventListener("resize",this.__ddcOnWinResize=()=>{var Ze;return(Ze=this._applyAutoScale)==null?void 0:Ze.call(this)})}this.autoResizeCards||String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(qt=this._startScaleWatch)==null||qt.call(this):(oi=this._stopScaleWatch)==null||oi.call(this),(Jt=this._applyAutoScale)==null||Jt.call(this),!isNaN(B)&&B>0&&B!==this.gridSize&&(this.gridSize=B,(It=this._applyGridVars)==null||It.call(this),($t=this._resizeContainer)==null||$t.call(this)),this.editModePin=Pt,this._config={...this._config||{},edit_mode_pin:Pt};let ci=oe!==this.dragLiveSnap;this.dragLiveSnap=oe,ci&&((Fi=this._initInteract)==null||Fi.call(this)),this.autoSave=ze,!isNaN(be)&&be>0&&(this.autoSaveDebounce=be);let rn=Be!==this.containerSizeMode;this.containerSizeMode=Be;let xi=De!==this.containerPresetOrient;if(this.containerPresetOrient=De,(rn||xi)&&((yi=this._resizeContainer)==null||yi.call(this)),Be==="fixed_custom"){let Ze=parseInt(((vi=e.querySelector("#ddc-setting-custW"))==null?void 0:vi.value)||"0",10),_t=parseInt(((si=e.querySelector("#ddc-setting-custH"))==null?void 0:si.value)||"0",10);!isNaN(Ze)&&Ze>0&&(this.containerFixedWidth=Ze),!isNaN(_t)&&_t>0&&(this.containerFixedHeight=_t),(Bi=this._resizeContainer)==null||Bi.call(this)}else if(Be==="preset"){let Ze=(Ni=e.querySelector("#ddc-setting-preset"))==null?void 0:Ni.value;Ze&&(this.containerPreset=Ze),(bi=this._resizeContainer)==null||bi.call(this)}if(this.disableOverlap=mt,Mt&&(this.containerBackground=Mt,this.style.setProperty("--ddc-bg",this.containerBackground)),Ot&&(this.cardBackground=Ot,this.style.setProperty("--ddc-card-bg",this.cardBackground)),Tt){let Ze=this._config&&this._config.background_image||{};this._config={...this._config,background_image:{...Ze,src:Tt}}}else{let{background_image:Ze,..._t}=this._config||{};this._config=_t}this.debug=Ft,this.animateCards=F,this.hideHaHeader=V,this.hideHaSidebar=ie,(qi=this._applyHaChromeVisibility_)==null||qi.call(this);let wi=this._config&&this._config.background_image||{},Si=(A==null?void 0:A.value)||"no-repeat",ji=(M==null?void 0:M.value)||"cover",Qt=(_==null?void 0:_.value)||"center center",Wi=(L==null?void 0:L.value)||"scroll",ki=D?Math.max(0,Math.min(100,parseInt(D.value||"100",10)))/100:1;if(this._config=this._config||{},this._config.background_mode=lt,lt!=="image"&&!Tt){let{background_image:Ze,..._t}=this._config||{};this._config=_t}if(lt==="particles")this._config.background_particles={config_url:Nt||void 0,pointer_events:Xt||void 0};else{let{background_particles:Ze,..._t}=this._config||{};this._config=_t}if(lt==="youtube")this._config.background_youtube={url:Ii||void 0,start:Number.isFinite(Ri)?Ri:void 0,end:Number.isFinite(ni)?ni:void 0,mute:Di!==!0?Di:void 0,loop:ri!==!0?ri:void 0,size:hi&&hi!="cover"?hi:void 0,position:tn||void 0,attachment:gi&&gi!=="scroll"?gi:void 0,opacity:fi!=null&&fi!==1?fi:void 0};else{let{background_youtube:Ze,..._t}=this._config||{};this._config=_t}if(this.screenSaverEnabled=nn,this.screenSaverDelay=ai,(Hi=this._updateScreensaverSettings)==null||Hi.call(this),Tt)this._config={...this._config,background_image:{...wi,src:Tt,repeat:Si,size:ji,position:Qt,attachment:Wi,opacity:ki}};else if(wi.src)this._config={...this._config,background_image:{...wi,repeat:Si,size:ji,position:Qt,attachment:Wi,opacity:ki}};else{let{background_image:Ze,..._t}=this._config||{};this._config=_t}(_i=this._applyBackgroundFromConfig)==null||_i.call(this);try{this._config||(this._config={}),this._config.grid=this.gridSize,this._config.auto_resize_cards=!!this.autoResizeCards,this._config.drag_live_snap=!!this.dragLiveSnap,this._config.auto_save=!!this.autoSave,this._config.auto_save_debounce=this.autoSaveDebounce,this._config.container_size_mode=this.containerSizeMode,this._config.container_preset_orientation=this.containerPresetOrient,this._config.container_fixed_width=this.containerFixedWidth,this._config.container_fixed_height=this.containerFixedHeight,this._config.container_preset=this.containerPreset,this._config.disable_overlap=!!this.disableOverlap,this._config.container_background=this.containerBackground,this._config.card_background=this.cardBackground,this._config.debug=!!this.debug,this._config.animate_cards=!!this.animateCards,this._config.hide_HA_Header=!!this.hideHaHeader,this._config.hide_HA_Sidebar=!!this.hideHaSidebar,this._config.screen_saver_enabled=!!this.screenSaverEnabled,this._config.screen_saver_delay=this.screenSaverDelay}catch(Ze){console.warn("[drag-and-drop-card] Failed to update config",Ze)}this._persistThisCardConfigToStorage_().catch(Ze=>{console.warn("[drag-and-drop-card] Storage save failed (is this a YAML dashboard?)",Ze)})}catch(ci){console.warn("[drag-and-drop-card] Failed to apply settings",ci)}_e()})}_exportableOptions(){var s,d,u;let e=this._config||{},r=(g,m)=>Object.fromEntries(m.map(b=>[b,g==null?void 0:g[b]]).filter(([,b])=>b!==void 0)),o=e.background_mode||((s=e.background_image)!=null&&s.src?"image":e.background_youtube?"youtube":e.background_particles?"particles":"none"),c={storage_key:this.storageKey||void 0,grid:this.gridSize,drag_live_snap:!!this.dragLiveSnap,auto_save:!!this.autoSave,auto_save_debounce:this.autoSaveDebounce,disable_overlap:!!this.disableOverlap,debug:!!this.debug,edit_mode_pin:this.editModePin||void 0,container_size_mode:this.containerSizeMode,container_preset_orientation:this.containerPresetOrient,container_fixed_width:(d=this.containerFixedWidth)!=null?d:void 0,container_fixed_height:(u=this.containerFixedHeight)!=null?u:void 0,container_preset:this.containerPreset,auto_resize_cards:!!this.autoResizeCards,container_background:this.containerBackground,card_background:this.cardBackground,animate_cards:!!this.animateCards,hide_HA_Header:!!this.hideHaHeader,hide_HA_Sidebar:!!this.hideHaSidebar,tabs:this.tabs,tabs_position:this.tabsPosition,default_tab:this.defaultTab,hide_tabs_when_single:!!this.hideTabsWhenSingle,background_mode:o,background_image:e.background_image?r(e.background_image,["src","repeat","size","position","attachment","opacity"]):void 0,background_particles:e.background_particles?r(e.background_particles,["config_url","pointer_events"]):void 0,background_youtube:e.background_youtube?r(e.background_youtube,["url","start","end","mute","loop","size","position","attachment","opacity"]):void 0,screen_saver_enabled:!!this.screenSaverEnabled,screen_saver_delay:this.screenSaverDelay};return Object.keys(c).forEach(g=>c[g]===void 0&&delete c[g]),c}_applyImportedOptions(e={},r=!0){var o,c,s,d,u,g,m,b;if(e&&Object.prototype.hasOwnProperty.call(e,"storage_key")&&this._isInHaEditorPreview())try{let y={type:"custom:drag-and-drop-card",...this._config||{}};this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:y},bubbles:!0,composed:!0}))}catch{}if(this._config={...this._config||{},...e},"storage_key"in e&&(this.storageKey=e.storage_key||void 0),this._syncEditorsStorageKey(),"grid"in e&&(this.gridSize=Number(e.grid)||10),"drag_live_snap"in e&&(this.dragLiveSnap=!!e.drag_live_snap),"auto_save"in e&&(this.autoSave=!!e.auto_save),"auto_save_debounce"in e&&(this.autoSaveDebounce=Number(e.auto_save_debounce)||800),"container_background"in e&&(this.containerBackground=(o=e.container_background)!=null?o:"transparent"),"card_background"in e&&(this.cardBackground=(c=e.card_background)!=null?c:"var(--ha-card-background, var(--card-background-color))"),"debug"in e&&(this.debug=!!e.debug),"disable_overlap"in e&&(this.disableOverlap=!!e.disable_overlap),"container_size_mode"in e&&(this.containerSizeMode=e.container_size_mode||"dynamic"),"container_fixed_width"in e&&(this.containerFixedWidth=Number(e.container_fixed_width)||null),"container_fixed_height"in e&&(this.containerFixedHeight=Number(e.container_fixed_height)||null),"container_preset"in e&&(this.containerPreset=e.container_preset||"fhd"),"container_preset_orientation"in e&&(this.containerPresetOrient=e.container_preset_orientation||"auto"),"auto_resize_cards"in e&&(this.autoResizeCards=!!e.auto_resize_cards,this.autoResizeCards||String(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="auto"?(s=this._startScaleWatch)==null||s.call(this):(d=this._stopScaleWatch)==null||d.call(this),(u=this._applyAutoScale)==null||u.call(this)),"screen_saver_enabled"in e&&(this.screenSaverEnabled=!!e.screen_saver_enabled),"screen_saver_delay"in e){let y=Number(e.screen_saver_delay);this.screenSaverDelay=Number.isFinite(y)&&y>0?y:this.screenSaverDelay}("screen_saver_enabled"in e||"screen_saver_delay"in e)&&typeof this._updateScreensaverSettings=="function"&&this._updateScreensaverSettings(),this.style.setProperty("--ddc-bg",this.containerBackground),this.style.setProperty("--ddc-card-bg",this.cardBackground),this._applyGridVars(),r&&(this._applyContainerSizingFromConfig(!0),(g=this._applyAutoScale)==null||g.call(this),this._resizeContainer(),(m=this._updateStoreBadge)==null||m.call(this),(b=this._applyAutoScale)==null||b.call(this))}_exportDesign(){let r=Array.from(this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)")).map(u=>{let g=parseFloat(u.getAttribute("data-x"))||0,m=parseFloat(u.getAttribute("data-y"))||0,b=parseFloat(u.style.width)||u.getBoundingClientRect().width,y=parseFloat(u.style.height)||u.getBoundingClientRect().height,w=parseInt(u.style.zIndex||"1",10),T=this._extractCardConfig(u.firstElementChild),S=u.dataset.tabId||this.defaultTab;return{card:T,position:{x:g,y:m},size:{width:b,height:y},z:w,tabId:S}}),o={version:2,options:this._exportableOptions(),cards:r};this._config&&this._config.card_mod&&(o.options=o.options||{},o.options.card_mod=this._config.card_mod);let c=`DragAndDrop_Design_${this.storageKey||"layout"}.json`,s=new Blob([JSON.stringify(o,null,2)],{type:"application/json"}),d=document.createElement("a");d.href=URL.createObjectURL(s),d.download=c,d.click(),URL.revokeObjectURL(d.href),this._toast("Design exported.")}_importDesign(){let e=document.createElement("input");e.type="file",e.accept="application/json";let r=!0,o=!1,c=["grid","drag_live_snap","auto_save","auto_save_debounce","debug","disable_overlap","card_mod","storage_key","animate_cards","auto_resize_cards","container_background","card_background","container_size_mode","container_fixed_width","container_fixed_height","container_preset","container_preset_orientation","tabs","tabs_position","default_tab","hide_tabs_when_single","hide_HA_Header","hide_HA_Sidebar","background_mode","background_image","background_particles","background_youtube","screen_saver_enabled","screen_saver_delay"];e.onchange=async()=>{var u,g,m,b,y,w,T,S,O,P,C,A,M,_,L,D,K,J,U,ae,H,G,ee,pe,We,fe,Te,Ce,ke,Xe,Je,Ue,at,ct,nt,ne,ht,et,Ne,re,Ee,Le,Ae,rt,pt,vt,kt,Ct,Lt,Wt;let s=(u=e.files)==null?void 0:u[0];if(!s)return;let d=await s.text();try{let qe=JSON.parse(d),ot=this.storageKey||((g=this._config)==null?void 0:g.storage_key)||null,st=!!(qe.options&&Array.isArray(qe.options.tabs)),Yt=Array.isArray(qe.cards)&&qe.cards.some(ge=>(ge==null?void 0:ge.tabId)||(ge==null?void 0:ge.tab_id)),bt=[];st?bt=qe.options.tabs:Yt?bt=Array.from(new Set(qe.cards.map(j=>(j==null?void 0:j.tabId)||(j==null?void 0:j.tab_id)).filter(Boolean))).map(j=>({id:j,label:j})):bt=[{id:"default",label:"Layout"}];let Dt=((m=qe.options)==null?void 0:m.tabs_position)==="left"?"left":this.tabsPosition||"top",Et=((b=qe.options)==null?void 0:b.default_tab)||((y=bt[0])==null?void 0:y.id)||"default",gt=((w=qe.options)==null?void 0:w.hide_tabs_when_single)!==void 0?!!qe.options.hide_tabs_when_single:!0;if(qe.options){let ge={...qe.options};if(o||delete ge.storage_key,r){let j=this._config||{type:"custom:drag-and-drop-card"};for(let $ of c)$==="storage_key"&&!o||!($ in ge)&&$ in j&&delete j[$];try{this.cardContainer&&(this.cardContainer.style.background="",this.cardContainer.style.width="",this.cardContainer.style.height=""),(S=(T=this.style)==null?void 0:T.removeProperty)==null||S.call(T,"--ddc-container-bg"),(P=(O=this.style)==null?void 0:O.removeProperty)==null||P.call(O,"--ddc-card-bg")}catch{}if(this._config={...j,...ge},"card_mod"in ge||delete this._config.card_mod,"animate_cards"in ge&&(this.animateCards=!!ge.animate_cards),"auto_resize_cards"in ge&&(this.autoResizeCards=!!ge.auto_resize_cards),"hide_HA_Header"in ge||"hide_HA_Sidebar"in ge)try{(C=this._applyHaChromeVisibility_)==null||C.call(this)}catch{}if("background_mode"in ge||"background_image"in ge||"background_particles"in ge||"background_youtube"in ge)try{(A=this._applyBackgroundFromConfig)==null||A.call(this)}catch{}if(o&&ge.storage_key&&(this.storageKey=ge.storage_key),this._opts){this._opts={...this._opts,...ge};for(let $ of c)$ in ge||delete this._opts[$]}(M=this._applyOptionsToDom)==null||M.call(this,this._config),(_=this.requestUpdate)==null||_.call(this)}else this._applyImportedOptions(ge,!0),ge.card_mod!==void 0&&(this._config=this._config||{},this._config.card_mod=ge.card_mod,(L=this.requestUpdate)==null||L.call(this))}else if(typeof qe.grid=="number"){let ge={grid:qe.grid};r?this._config={...this._config||{},...ge}:this._applyImportedOptions(ge,!0),(D=this.requestUpdate)==null||D.call(this)}(!Array.isArray(this.tabs)||!this.tabs.length)&&(this.tabs=bt),this.tabsPosition||(this.tabsPosition=Dt),this.defaultTab||(this.defaultTab=Et),this.hideTabsWhenSingle===void 0&&(this.hideTabsWhenSingle=gt),(U=(J=(K=this.rootEl)==null?void 0:K.classList)==null?void 0:J.toggle)==null||U.call(J,"ddc-tabs-left-layout",this.tabsPosition==="left");try{let ge=((ae=this._config)==null?void 0:ae.storage_key)||this.storageKey||null,j=(H=qe.options)!=null?H:typeof qe.grid=="number"?{grid:qe.grid}:{},$={...j,tabs:(ee=(G=j.tabs)!=null?G:this.tabs)!=null?ee:[],tabs_position:(We=(pe=j.tabs_position)!=null?pe:this.tabsPosition)!=null?We:"top",default_tab:(Je=(fe=j.default_tab)!=null?fe:this.defaultTab)!=null?Je:((Ce=(Te=j.tabs)==null?void 0:Te[0])==null?void 0:Ce.id)||((Xe=(ke=this.tabs)==null?void 0:ke[0])==null?void 0:Xe.id)||"default",hide_tabs_when_single:(at=j.hide_tabs_when_single)!=null?at:(Ue=this.hideTabsWhenSingle)!=null?Ue:!0};if(o||delete $.storage_key,!ge)console.warn("[ddc:import] No storage_key on this card; aborting YAML persist.");else{let ue=await((ct=this._persistOptionsToYaml)==null?void 0:ct.call(this,$,{forceTargetKey:String(ge),noDownload:!0,replace:!0,wipeUnknownKeys:!0})),ve=!!(ue&&ue.yamlSaved);(nt=console.debug)==null||nt.call(console,"[ddc:import] YAML persist result:",ve)}try{let ue={type:"custom:drag-and-drop-card",...this._config||{}};ue.tabs=$.tabs,ue.tabs_position=$.tabs_position,ue.default_tab=$.default_tab,ue.hide_tabs_when_single=!!$.hide_tabs_when_single,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:ue},bubbles:!0,composed:!0}))}catch{}}catch(ge){console.warn("[ddc:import] YAML persist failed:",ge)}if(this.cardContainer.innerHTML="",Array.isArray(qe.cards)&&qe.cards.length)for(let ge of qe.cards){let j=((ne=ge.position)==null?void 0:ne.x)||0,$=((ht=ge.position)==null?void 0:ht.y)||0,ue=((et=ge.size)==null?void 0:et.width)||140,ve=((Ne=ge.size)==null?void 0:Ne.height)||100,le=ge.z,_e=this._normalizeTabId(ge.tabId||ge.tab_id||this.defaultTab);if(!(ge!=null&&ge.card)||typeof ge.card=="object"&&!Object.keys(ge.card).length){let Re=this._makePlaceholderAt(j,$,ue,ve);Re.dataset.tabId=_e,this.cardContainer.appendChild(Re);continue}let W=await this._createCard(ge.card),Z=this._makeWrapper(W);Z.dataset.tabId=_e,this._setCardPosition(Z,j,$),Z.style.width=`${ue}px`,Z.style.height=`${ve}px`,le!=null&&(Z.style.zIndex=String(le)),this.cardContainer.appendChild(Z);try{this._rebuildOnce(Z.firstElementChild)}catch{}this._initCardInteract(Z)}else this._showEmptyPlaceholder(),(re=this._applyAutoScale)==null||re.call(this);(Ee=this._applyOptionsToDom)==null||Ee.call(this,this._config),this._resizeContainer();try{(rt=(Ae=(Le=this.rootEl)==null?void 0:Le.classList)==null?void 0:Ae.toggle)==null||rt.call(Ae,"ddc-tabs-left-layout",this.tabsPosition==="left"),(pt=this._renderTabs)==null||pt.call(this),(vt=this._applyActiveTab)==null||vt.call(this)}catch{}try{this._saveTimer&&clearTimeout(this._saveTimer),await this._saveLayout(!0),(kt=this._toast)==null||kt.call(this,"Design imported & saved. Reloading..."),window.location.reload()}catch(ge){console.warn("[ddc:import] saveLayout failed",ge),(Ct=this._markDirty)==null||Ct.call(this,"import"),(Lt=this._toast)==null||Lt.call(this,"Design imported \u2014 click Apply to save.")}}catch(qe){console.error("Import failed",qe),(Wt=this._toast)==null||Wt.call(this,"Import failed \u2014 invalid file.")}},e.click()}_getLovelace(){var s,d;let e=0,r=this;for(;r&&e++<20;){let u=(s=r.getRootNode)==null?void 0:s.call(r),g=u==null?void 0:u.host;if((g==null?void 0:g.tagName)==="HUI-ROOT")return g.lovelace;r=g||r.parentElement}let o=new Set,c=[document];for(;c.length;){let u=c.shift();if(!(!u||o.has(u))){if(o.add(u),((d=u.host)==null?void 0:d.tagName)==="HUI-ROOT")return u.host.lovelace;if(u.tagName==="HUI-ROOT")return u.lovelace;if(u.shadowRoot&&c.push(u.shadowRoot),u.children)for(let g of u.children)c.push(g)}}}_scanDdcCards(e){let r=[],o=(s,d,u)=>{(u==null?void 0:u.type)==="custom:drag-and-drop-card"&&r.push({view:s,path:[...d],card:u})},c=(s,d,u)=>{if(s){if(Array.isArray(s)){s.forEach((g,m)=>c(g,d,u.concat(m)));return}if(typeof s=="object"){"type"in s&&o(d,u,s);for(let[g,m]of Object.entries(s))g==="views"&&Array.isArray(m)?m.forEach((b,y)=>c(b,y,["views",y])):(Array.isArray(m)||m&&typeof m=="object")&&c(m,d,u.concat(g))}}};return c(e,-1,[]),r}async _persistOptionsToYaml(e,{prevKey:r=null,patchAllInCurrentViewIfNoKey:o=!1}={}){var c,s,d,u,g,m,b,y,w;try{let T=this._getLovelace();if(!T)return console.debug("[ddc:import] persist: no lovelace root"),!1;if(typeof T.saveConfig!="function")return console.debug("[ddc:import] persist: dashboard not in Storage mode"),!1;let S=JSON.parse(JSON.stringify(T.config)),O=this._scanDdcCards(S),P=(c=T.current_view)!=null?c:0;console.debug("[ddc:import] persist: found DDC cards",O.map(L=>({view:L.view,path:L.path.join("."),storage_key:L.card.storage_key||null})));let C=(s=e==null?void 0:e.storage_key)!=null?s:null,A=[];r&&A.push(r),C&&A.push(C),this.storageKey&&A.push(this.storageKey),(d=this._config)!=null&&d.storage_key&&A.push(this._config.storage_key);let M=O.filter(L=>L.card.storage_key&&A.includes(L.card.storage_key));if(!M.length){let L=O.filter(D=>D.view===P);L.length===1&&(M=L)}if(!M.length&&O.length===1&&(M=O),!M.length)return console.debug("[ddc:import] persist: no target. Provide a unique storage_key on this card and import again.",{prevKey:r,newKey:C,storageKey:this.storageKey}),!1;let _={type:"custom:drag-and-drop-card",...e};"storage_key"in _&&delete _.storage_key,"storageKey"in _&&delete _.storageKey;for(let L of M){let D=S;for(let U of L.path)D=D[U];let K=(w=(y=(m=(u=D==null?void 0:D.storage_key)!=null?u:D==null?void 0:D.storageKey)!=null?m:(g=D==null?void 0:D.options)==null?void 0:g.storage_key)!=null?y:(b=D==null?void 0:D.options)==null?void 0:b.storageKey)!=null?w:null,J=!!(r&&C&&K===r&&C!==r);Object.assign(D,_),J?D.storage_key=String(C):K&&(D.storage_key=String(K)),"storageKey"in D&&delete D.storageKey}return console.debug("[ddc:import] persist \u2192 saving",{patched:M.length,keysTried:A,patch}),await T.saveConfig(S),!0}catch(T){return console.warn("[ddc:import] persist error",T),!1}}_queueSave(e="auto"){this._markDirty(e),this.autoSave&&(this._loading||this.editMode&&(this._dbgPush("autosave","Queued",{reason:e,debounce:this.autoSaveDebounce}),clearTimeout(this._saveTimer),this._saveTimer=setTimeout(()=>this._saveLayout(!0),this.autoSaveDebounce)))}async _saveLayout(e=!0){let o=Array.from(this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)")).map(s=>{let d=parseFloat(s.getAttribute("data-x"))||0,u=parseFloat(s.getAttribute("data-y"))||0,g=parseFloat(s.style.width)||s.getBoundingClientRect().width,m=parseFloat(s.style.height)||s.getBoundingClientRect().height,b=parseInt(s.style.zIndex||"1",10),y=this._extractCardConfig(s.firstElementChild),w=s.dataset.tabId||this.defaultTab;return{card:y,position:{x:d,y:u},size:{width:g,height:m},z:b,tabId:w}}),c={version:2,options:this._exportableOptions(),cards:o};try{localStorage.setItem(`ddc_local_${this.storageKey||"default"}`,JSON.stringify(c))}catch{}if(!this.storageKey){e||this._toast("Saved locally (no storage_key set)."),this.__dirty=!1,this._updateApplyBtn();return}try{await this._saveLayoutToBackend(this.storageKey,c),e||this._toast("Layout saved."),this.__dirty=!1,this._updateApplyBtn()}catch(s){console.error("Backend save failed",s),this._dbgPush("save","Backend save failed",{error:String(s)}),e||this._toast("Backend save failed \u2014 kept local copy.")}}async _probeBackend(){this._backendOK=!1;let e=performance.now();try{this._dbgPush("probe","GET /api/dragdrop_storage (list keys)");let r=await this.hass.callApi("get","dragdrop_storage"),o=Math.round(performance.now()-e);this._dbgPush("probe",`OK (${o} ms)`,r),this._backendOK=!!r}catch(r){let o=Math.round(performance.now()-e);this._dbgPush("probe",`FAILED (${o} ms)`,{error:String(r)}),this._backendOK=!1}this._updateStoreBadge()}async _loadLayoutFromBackend(e){let r=`dragdrop_storage/${encodeURIComponent(e)}`,o=performance.now();try{this._dbgPush("load",`GET /api/${r}`);let c=await this.hass.callApi("get",r),s=Math.round(performance.now()-o);return this._dbgPush("load",`OK (${s} ms)`,{bytes:JSON.stringify(c||"").length}),c}catch(c){let s=Math.round(performance.now()-o);return this._dbgPush("load",`FAILED (${s} ms)`,{error:String(c)}),null}}async _saveLayoutToBackend(e,r){let o=`dragdrop_storage/${encodeURIComponent(e)}`,c=JSON.stringify(r).length,s=performance.now();try{this._dbgPush("save",`POST /api/${o}`,{bytes:c});let d=await this.hass.callApi("post",o,r),u=Math.round(performance.now()-s);return this._dbgPush("save",`OK (${u} ms)`,d),d}catch(d){let u=Math.round(performance.now()-s);throw this._dbgPush("save",`FAILED (${u} ms)`,{error:String(d),bytes:c}),d}}_updateStoreBadge(){let e=this.storeBadge;if(!e)return;let r=this._backendOK&&!!this.storageKey;e.textContent=r?"storage: backend - OK":"storage: local. Your Changes are NOT being SAVED. You need to download the Drag and Drop Card backend integration",e.style.background=r?"rgba(76,175,80,.15)":"rgba(255,193,7,.15)",e.style.borderColor=r?"rgba(76,175,80,.45)":"rgba(255,193,7,.45)"}_ensureScreenSaverStyles(){var e;if(!((e=this.shadowRoot)!=null&&e.querySelector("#ddc-screensaver-styles")))try{let r=document.createElement("style");r.id="ddc-screensaver-styles",r.textContent=`
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
      `,this.shadowRoot.appendChild(r)}catch(r){console.warn("[drag-and-drop-card] Failed to inject screensaver styles",r)}}_ensureScreenSaverGlobalStyles(){if(!document.head.querySelector("#ddc-screensaver-global-styles"))try{let e=document.createElement("style");e.id="ddc-screensaver-global-styles",e.textContent=`
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
      `,document.head.appendChild(e)}catch(e){console.warn("[drag-and-drop-card] Failed to inject global screensaver styles",e)}}_ensureScreenSaverOverlay(){var o;if(this._ensureScreenSaverGlobalStyles(),!this._screenSaverOverlayId){let c=((o=this.config)==null?void 0:o.id)||`ddc_${Math.random().toString(36).slice(2)}`;this._screenSaverOverlayId=`ddc-screensaver-overlay-${c}`}let e=this._screenSaverOverlayId;if(this.screenSaverOverlay&&this.screenSaverOverlay.parentNode===document.body)return;if(this.screenSaverOverlay&&!this.screenSaverOverlay.parentNode){document.body.appendChild(this.screenSaverOverlay);return}let r=document.createElement("div");r.className="screensaver-overlay",r.id=e,r.innerHTML=`
      <div class="screensaver-content" id="${e}-content">
        <div class="screensaver-clock" id="${e}-clock"></div>
        <div class="screensaver-date" id="${e}-date"></div>
        <div class="screensaver-calendar" id="${e}-calendar"></div>
      </div>
    `,r.addEventListener("click",()=>this._deactivateScreenSaver()),r.addEventListener("keydown",()=>this._deactivateScreenSaver()),this.screenSaverOverlay=r,document.body.appendChild(r)}_attachScreensaverListeners(){if(this._screensaverActivityHandler)return;let e=()=>this._resetScreensaverTimer();this._screensaverActivityHandler=e,this._screensaverEvents=["mousemove","mousedown","click","keydown","wheel","scroll","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointercancel"],this._screensaverEvents.forEach(r=>{document.addEventListener(r,e,!0)})}_resetScreensaverTimer(){if(this._screensaverTimer&&(clearTimeout(this._screensaverTimer),this._screensaverTimer=null),!this.screenSaverEnabled)return;this.screensaverActive&&this._deactivateScreenSaver();let e=Number(this.screenSaverDelay)||5*6e4;this._screensaverTimer=setTimeout(()=>{this._activateScreenSaver()},e)}_activateScreenSaver(){if(this.screenSaverEnabled&&(this._ensureScreenSaverOverlay(),!!this.screenSaverOverlay)){this.screensaverActive=!0,this.screenSaverOverlay.classList.add("active");try{this.tabsBar&&(this.__savedTabsDisplay=this.tabsBar.style.display,this.tabsBar.style.display="none")}catch{}this._updateScreenSaverClock(),this._clockInterval&&clearInterval(this._clockInterval),this._clockInterval=setInterval(()=>this._updateScreenSaverClock(),1e3)}}_deactivateScreenSaver(){if(this.screensaverActive){this.screensaverActive=!1,this.screenSaverOverlay&&this.screenSaverOverlay.classList.remove("active"),this._clockInterval&&(clearInterval(this._clockInterval),this._clockInterval=null);try{this.tabsBar&&(this.__savedTabsDisplay!=null?this.tabsBar.style.display=this.__savedTabsDisplay:this.tabsBar.style.display="")}catch{}this._resetScreensaverTimer()}}_updateScreenSaverClock(){let e=this.screenSaverOverlay,r=e==null?void 0:e.querySelector(".screensaver-clock"),o=e==null?void 0:e.querySelector(".screensaver-date"),c=new Date;r&&(r.textContent=c.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"})),o&&(o.textContent=c.toLocaleDateString([],{weekday:"long",year:"numeric",month:"long",day:"numeric"}));try{this._updateScreenSaverCalendar()}catch{}}_updateScreenSaverCalendar(){var T;let e=(T=this.screenSaverOverlay)==null?void 0:T.querySelector(".screensaver-calendar");if(!e)return;let r=new Date,o=void 0,c=r.getFullYear(),s=r.getMonth(),d=r.toLocaleDateString(o,{month:"long"}),u=[];for(let S=0;S<7;S++){let O=new Date(1970,0,4+S);u.push(O.toLocaleDateString(o,{weekday:"short"}))}let g=new Date(c,s,1).getDay(),m=new Date(c,s+1,0).getDate(),b=new Date(c,s,0).getDate(),y=[];for(let S=0;S<g;S++)y.push({day:b-(g-1)+S,other:!0});for(let S=1;S<=m;S++){let O=S===r.getDate();y.push({day:S,today:O,other:!1})}for(;y.length<42;){let S=y.length-g-m+1;y.push({day:S,other:!0})}let w="";w+=`<div class="calendar-header">${d} ${c}</div>`,w+='<div class="calendar-grid">';for(let S=0;S<7;S++)w+=`<div class="header">${u[S]}</div>`;y.forEach((S,O)=>{let P=[];S.other&&P.push("other-month"),S.today&&P.push("today");let C=O%7;(C===0||C===6)&&P.push("weekend"),w+=`<div class="${P.join(" ")}">${S.day}</div>`}),w+="</div>",e.innerHTML=w}_updateScreensaverSettings(){this.screenSaverEnabled?(this._ensureScreenSaverOverlay(),this._attachScreensaverListeners(),this._resetScreensaverTimer()):(this._screensaverTimer&&(clearTimeout(this._screensaverTimer),this._screensaverTimer=null),this.screensaverActive&&this._deactivateScreenSaver())}_toast(e){let r=new Event("hass-notification");r.detail={message:e},window.dispatchEvent(r)}_huiRoot(){var e,r,o,c,s,d;try{let u=document.querySelector("home-assistant"),g=(e=u==null?void 0:u.shadowRoot)==null?void 0:e.querySelector("home-assistant-main"),m=((r=g==null?void 0:g.shadowRoot)==null?void 0:r.querySelector("ha-drawer"))||g,b=((o=m==null?void 0:m.shadowRoot)==null?void 0:o.querySelector("partial-panel-resolver"))||m,y=((c=b==null?void 0:b.shadowRoot)==null?void 0:c.querySelector("ha-panel-lovelace"))||((s=m==null?void 0:m.shadowRoot)==null?void 0:s.querySelector("ha-panel-lovelace"));return((d=y==null?void 0:y.shadowRoot)==null?void 0:d.querySelector("hui-root"))||null}catch{return null}}getCardSize(){return 3}};customElements.get("drag-and-drop-card")||customElements.define("drag-and-drop-card",On);(()=>{try{let t=window.customCards=window.customCards||[];t.some(h=>h.type==="drag-and-drop-card")||t.push({type:"drag-and-drop-card",name:"Drag & Drop Card",description:"Freeform drag/resize/snap-to-grid canvas for Lovelace cards.",preview:!1})}catch{}})();(()=>{let t=new WeakSet,h=s=>{try{if(!(s instanceof Element))return!1;let d=s.localName||"";return d?!!(d==="ha-card"||d.endsWith("-card")):!1}catch{return!1}},e=s=>{try{if(!s||t.has(s))return;t.add(s),s.dispatchEvent(new Event("ll-rebuild",{bubbles:!0,composed:!0}))}catch{}},r=s=>{var d,u;try{if(!s)return;s instanceof Element&&h(s)&&e(s);let g=(u=(d=(s instanceof ShadowRoot,s)).querySelectorAll)==null?void 0:u.call(d,"*");if(!g)return;for(let m of g){h(m)&&e(m);let b=m.shadowRoot;if(b)try{r(b)}catch{}}}catch{}},o=s=>{try{if(!s||s.__ddcCardModIntegrated)return;s.__ddcCardModIntegrated=!0;let d=s.shadowRoot||s;r(d);let u=new MutationObserver(g=>{for(let m of g)if(!(!m.addedNodes||!m.addedNodes.length))for(let b of m.addedNodes)(b instanceof Element||b instanceof ShadowRoot)&&r(b)});u.observe(d,{childList:!0,subtree:!0}),s.__ddcCardModIntegratedObserver=u,setTimeout(()=>{try{r(d)}catch{}},250),setTimeout(()=>{try{r(d)}catch{}},1e3)}catch{}},c=()=>{try{document.querySelectorAll("drag-and-drop-card").forEach(o)}catch{}};if(window.customElements&&window.customElements.whenDefined)window.customElements.whenDefined("drag-and-drop-card").then(()=>{c();let s=window.customElements.get("drag-and-drop-card");if(s&&s.prototype){let u=s.prototype.connectedCallback;s.prototype.connectedCallback=function(){try{u&&u.call(this)}finally{o(this)}}}new MutationObserver(()=>c()).observe(document.documentElement,{childList:!0,subtree:!0})});else{let s=setInterval(c,1e3);setTimeout(()=>clearInterval(s),1e4)}})();(function(){let t="drag-and-drop-card",h=customElements.get(t);if(!h){console.warn("[ddc:augment] Could not find custom element",t);return}function e(){var S,O;try{let P=0,C=this;for(;C&&P++<20;){let _=(S=C.getRootNode)==null?void 0:S.call(C),L=_==null?void 0:_.host;if((L==null?void 0:L.tagName)==="HUI-ROOT")return L.lovelace;C=L||C.parentElement}let A=new Set,M=[document];for(;M.length;){let _=M.shift();if(!(!_||A.has(_))){if(A.add(_),((O=_.host)==null?void 0:O.tagName)==="HUI-ROOT")return _.host.lovelace;if(_.tagName==="HUI-ROOT")return _.lovelace;if(_.shadowRoot&&M.push(_.shadowRoot),_.children)for(let L of _.children)M.push(L)}}}catch{}}function r(S){let O=[],P=(A,M,_)=>{(_==null?void 0:_.type)==="custom:drag-and-drop-card"&&O.push({view:A,path:[...M],card:_})},C=(A,M,_)=>{if(A){if(Array.isArray(A)){A.forEach((L,D)=>C(L,M,_.concat(D)));return}if(typeof A=="object"){"type"in A&&P(M,_,A);for(let[L,D]of Object.entries(A))L==="views"&&Array.isArray(D)?D.forEach((K,J)=>C(K,J,["views",J])):(Array.isArray(D)||D&&typeof D=="object")&&C(D,M,_.concat(L))}}};return C(S,-1,[]),O}function o(S,O,P){let C=new Date().toISOString().replace(/[:.]/g,"-"),A=O.map(_=>{let L=S;for(let D of _.path)L=L[D];return{view:_.view,path:_.path,storage_key:L&&L.storage_key||null,before:L,patch:P}}),M={kind:"ddc-import-backup",created_at:C,count:A.length,items:A};try{let _=`ddc.backup.${C}`;localStorage.setItem(_,JSON.stringify(M));let L=Object.keys(localStorage).filter(D=>D.startsWith("ddc.backup.")).sort().reverse();for(let D of L.slice(10))localStorage.removeItem(D)}catch{}return{name:`ddc_backup_${C}.json`,data:M}}function c(S,O){try{let P=new Blob([JSON.stringify(O,null,2)],{type:"application/json"}),C=URL.createObjectURL(P),A=document.createElement("a");A.href=C,A.download=S,document.body.appendChild(A),A.click(),A.remove(),setTimeout(()=>URL.revokeObjectURL(C),1500)}catch(P){console.warn("[ddc:backup] download failed",P)}}function s(S){if(S)try{let O="ddc.recent.keys",P=JSON.parse(localStorage.getItem(O)||"[]");P.includes(S)||P.unshift(S),localStorage.setItem(O,JSON.stringify(P.slice(0,20)))}catch{}}function d(){try{return JSON.parse(localStorage.getItem("ddc.recent.keys")||"[]")}catch{return[]}}function u(){var O,P;let S=new Set;try{let C=Object.keys(localStorage).filter(A=>A.startsWith("ddc.backup.")).sort().reverse();for(let A of C)try{let M=JSON.parse(localStorage.getItem(A)||"null");if(M&&M.items)for(let _ of M.items){let L=((O=_==null?void 0:_.before)==null?void 0:O.storage_key)||((P=_==null?void 0:_.patch)==null?void 0:P.storage_key);L&&S.add(L)}}catch{}}catch{}return Array.from(S)}async function g(S,{forceTargetKey:O=null,onlyThisCard:P=!1,prevKey:C,noDownload:A}={}){var pe,We,fe,Te,Ce;let M=((pe=this._getLovelace)==null?void 0:pe.call(this))||e.call(this);if(!M)return console.debug("[ddc:import] persist: no lovelace root"),!1;if(typeof M.saveConfig!="function")return console.debug("[ddc:import] persist: dashboard not in Storage mode"),!1;let _=ke=>typeof ke=="string"?ke.trim():null,L=_(O)||_((We=this==null?void 0:this._config)==null?void 0:We.storage_key)||_(this==null?void 0:this.storageKey)||_(C);if(!L)return console.warn("[ddc:import] persist: missing target storage_key on this card; aborting"),!1;let D=JSON.parse(JSON.stringify(M.config)),K=(this._scanDdcCards||r)(D);console.debug("[ddc:import] persist: found DDC cards",K.map(ke=>({view:ke.view,path:ke.path.join("."),storage_key:ke.card&&(ke.card.storage_key||ke.card.storageKey)||null})));let J=K.filter(ke=>{var Je,Ue,at,ct,nt,ne,ht,et,Ne;return((Ne=(ne=(at=_((Je=ke.card)==null?void 0:Je.storage_key))!=null?at:_((Ue=ke.card)==null?void 0:Ue.storageKey))!=null?ne:_((nt=(ct=ke.card)==null?void 0:ct.options)==null?void 0:nt.storage_key))!=null?Ne:_((et=(ht=ke.card)==null?void 0:ht.options)==null?void 0:et.storageKey))===L});if(J.length!==1)return console.warn("[ddc:import] persist: expected exactly one target with key, got",J.length,{myKey:L}),!1;let U={type:"custom:drag-and-drop-card",...S||{}};"storage_key"in U&&delete U.storage_key,"storageKey"in U&&delete U.storageKey,U!=null&&U.options&&("storage_key"in U.options&&delete U.options.storage_key,"storageKey"in U.options&&delete U.options.storageKey);let ae=Array.isArray(U.cards)?U.cards:null;delete U.cards;try{let ke=o==null?void 0:o(M.config,J,U);ke&&(console.debug("[ddc:import] backup created",{file:ke.name,items:(fe=ke.data)==null?void 0:fe.count}),!A&&typeof c=="function"&&c(ke.name,ke.data))}catch(ke){console.debug("[ddc:import] backup skipped/error:",(ke==null?void 0:ke.message)||ke)}let H=J[0],G=D;for(let ke of H.path)G=G[ke];let ee=(Ce=(Te=_(G==null?void 0:G.storage_key))!=null?Te:_(G==null?void 0:G.storageKey))!=null?Ce:null;return Object.assign(G,U),ee?G.storage_key=ee:G.storage_key=L,"storageKey"in G&&delete G.storageKey,console.debug("[ddc:import] persist \u2192 saving",{patched:1,into_key:G.storage_key,ignored_file_key:_(S==null?void 0:S.storage_key)||_(S==null?void 0:S.storageKey)||null}),await M.saveConfig(D),{yamlSaved:!0,cardsForStorage:ae}}async function m(){var P;let S=C=>{if(!C)return[];if(Array.isArray(C))return C;if(Array.isArray(C==null?void 0:C.keys))return C.keys;if(Array.isArray(C==null?void 0:C.dashboards))return C.dashboards;if(Array.isArray(C==null?void 0:C.entries))return C.entries.map(A=>A.key||A.id||A.name).filter(Boolean);if(Array.isArray(C==null?void 0:C.items))return C.items.map(A=>A.key||A.id||A.name).filter(Boolean);if(typeof C=="object"){for(let A of Object.values(C))if(Array.isArray(A)&&A.every(M=>typeof M=="string"))return A}return[]};try{if((P=this==null?void 0:this.hass)!=null&&P.callApi){let C=await this.hass.callApi("get","dragdrop_storage"),A=S(C);if(A.length)return A}}catch(C){console.debug("[ddc:switcher] hass.callApi dragdrop_storage failed",C)}let O=["/api/dragdrop_storage","/api/dragdrop_storage/keys","/api/dragdrop_storage/list","/api/dragdrop_storage?all=1"];for(let C of O)try{let M=await(await fetch(C,{cache:"no-store"})).json(),_=S(M);if(_.length)return _}catch{}return[]}async function b(S){let O=M=>{if(!M)return null;if(M.options||M.cards)return M;if(typeof M.design=="object")return M.design;if(typeof M.payload=="object")return M.payload;try{if(typeof M=="string")return JSON.parse(M)}catch{}return null},P=async(M,_,L)=>{var D;try{if((D=this==null?void 0:this.hass)!=null&&D.callApi){let K=await this.hass.callApi(M,_,L),J=O(K);if(J)return J}}catch{}return null},C=async M=>{try{let _=await fetch(M,{cache:"no-store"}),L=_.headers.get("content-type")||"";if(L.includes("application/json")||L.includes("text/plain")){let D=await _.json().catch(()=>null)||await _.text().catch(()=>null),K=O(D);if(K)return K}}catch{}return null},A=encodeURIComponent(S);return await(P("get",`dragdrop_storage/${A}`)||C(`/api/dragdrop_storage/${A}`)||C(`/api/dragdrop_storage?key=${A}`)||P("post","dragdrop_storage/get",{key:S})||null)}async function y(S,{source:O="switcher",newKey:P=null}={}){var M,_,L,D,K,J,U,ae,H,G,ee,pe,We,fe,Te,Ce,ke,Xe,Je,Ue,at,ct,nt,ne,ht,et;if(!S||typeof S!="object")throw new Error("Invalid design payload");let C=this.storageKey||((M=this._config)==null?void 0:M.storage_key)||null;try{(_=this._dbgInit)==null||_.call(this),(L=this._dbgPush)==null||L.call(this,"import","Begin import (programmatic)",{source:O,newKey:P})}catch{}if(S.options){let{storage_key:Ne,...re}=S.options;(D=this._applyImportedOptions)==null||D.call(this,re,!0)}else typeof S.grid=="number"&&((K=this._applyImportedOptions)==null||K.call(this,{grid:S.grid},!0));let A=P||((J=S==null?void 0:S.options)==null?void 0:J.storage_key)||C;if(A){this.storageKey=A,this._config={...this._config||{},storage_key:A};try{(U=this._syncEditorsStorageKey)==null||U.call(this)}catch{}}try{let Ne=(ae=S.options)!=null?ae:typeof S.grid=="number"?{grid:S.grid}:{};await((H=this._persistOptionsToYaml)==null?void 0:H.call(this,{...Ne,storage_key:A},{prevKey:C,noDownload:O==="switcher"}))}catch(Ne){console.warn("[ddc:apply] persist failed",Ne)}try{if(this.cardContainer.innerHTML="",Array.isArray(S.cards)&&S.cards.length)for(let Ne of S.cards)if(!(Ne!=null&&Ne.card)||typeof Ne.card=="object"&&Object.keys(Ne.card).length===0){let re=(fe=this._makePlaceholderAt)==null?void 0:fe.call(this,((G=Ne.position)==null?void 0:G.x)||0,((ee=Ne.position)==null?void 0:ee.y)||0,((pe=Ne.size)==null?void 0:pe.width)||200,((We=Ne.size)==null?void 0:We.height)||200);re&&this.cardContainer.appendChild(re)}else{let re=await this._createCard(Ne.card),Ee=this._makeWrapper(re);(ke=this._setCardPosition)==null||ke.call(this,Ee,((Te=Ne.position)==null?void 0:Te.x)||0,((Ce=Ne.position)==null?void 0:Ce.y)||0),Ee.style.width=`${((Xe=Ne.size)==null?void 0:Xe.width)||140}px`,Ee.style.height=`${((Je=Ne.size)==null?void 0:Je.height)||100}px`,Ne.z!=null&&(Ee.style.zIndex=String(Ne.z)),this.cardContainer.appendChild(Ee);try{(Ue=this._rebuildOnce)==null||Ue.call(this,Ee.firstElementChild)}catch{}(at=this._initCardInteract)==null||at.call(this,Ee)}else(ct=this._showEmptyPlaceholder)==null||ct.call(this);(nt=this._resizeContainer)==null||nt.call(this),(ne=this._markDirty)==null||ne.call(this,"import"),(ht=this._toast)==null||ht.call(this,O==="switcher"?`Loaded layout "${A}"`:"Design imported")}catch(Ne){console.error("[ddc:apply] rebuild failed",Ne),(et=this._toast)==null||et.call(this,"Import failed during rebuild.")}}function w(){var S,O;try{let P=this.shadowRoot||this.renderRoot||this,C=P.querySelector(".ddc-switcher-inline");if(!C)return;let A=((S=this._getLovelace)==null?void 0:S.call(this))||e.call(this),M=!1;try{let _=(O=P.getRootNode&&P.getRootNode())==null?void 0:O.host;M=!!(A&&(A.editMode===!0||_&&_.editMode===!0))}catch{}C.style.display=M?"inline-flex":"none"}catch{}}function T(){try{if(this._ddcSwitcherInstalled)return;let O=(this.shadowRoot||this.renderRoot||this).querySelector(".toolbar");if(!O)return;let P=document.createElement("div");P.className="ddc-switcher-inline",Object.assign(P.style,{display:"inline-flex",gap:"6px",alignItems:"center",marginLeft:"auto"});let C=document.createElement("span");C.textContent="Layout:",C.style.fontSize="12px",C.style.opacity="0.8";let A=document.createElement("select");Object.assign(A.style,{fontSize:"12px",padding:"4px 6px",borderRadius:"8px",border:"1px solid var(--divider-color, #999)",background:"var(--card-background-color, #fff)"}),A.title="Select stored layout (storage_key)",A.id="ddcKeySelect";let M=document.createElement("button");M.className="btn secondary",M.type="button",M.style.padding="6px 10px",M.innerHTML='<ha-icon icon="mdi:refresh"></ha-icon><span style="margin-left:6px">Refresh</span>',P.appendChild(C),P.appendChild(A),P.appendChild(M),O.appendChild(P),this._ddcSwitcherInstalled=!0;let _=async()=>{let L=this.storageKey||this._config&&this._config.storage_key||"",D=await m.call(this),K=u(),J=d(),U=pe=>Array.from(new Set(pe.filter(Boolean))),ae=U(D),H=U(K),G=U(J);if(A.innerHTML="",L&&!ae.includes(L)&&!H.includes(L)&&!G.includes(L)){let pe=document.createElement("option");pe.value=L,pe.textContent=`${L} (current)`,pe.selected=!0,A.appendChild(pe)}let ee=(pe,We)=>{if(!We.length)return;let fe=document.createElement("optgroup");fe.label=pe,We.forEach(Te=>{let Ce=document.createElement("option");Ce.value=Te,Ce.textContent=Te,Te===L&&(Ce.selected=!0),fe.appendChild(Ce)}),A.appendChild(fe)};if(ee("Server",ae),ee("Backups",H),ee("Recent",G),!A.children.length){let pe=document.createElement("option");pe.value="",pe.textContent="\u2014 none \u2014",pe.selected=!0,A.appendChild(pe)}w.call(this)};_(),M.addEventListener("click",_),A.addEventListener("change",async L=>{var K,J,U,ae,H,G,ee,pe;let D=String(L.target.value||"");if(D&&!this._ddcLoadingFromKey){this._ddcLoadingFromKey=!0;try{let We=await b.call(this,D);if(!We){(K=this._toast)==null||K.call(this,`No layout found for "${D}"`);return}await y.call(this,We,{source:"switcher",newKey:D}),(J=this._resizeContainer)==null||J.call(this),(U=this._toast)==null||U.call(this,`Loaded layout "${D}"`);let fe=String(((ae=this._config)==null?void 0:ae.storage_key)||this.storageKey||""),Te=!1;try{let Ce=fe?{forceTargetKey:fe,noDownload:!0}:{noDownload:!0};Te=await this._persistOptionsToYaml({storage_key:D},Ce)}catch(Ce){console.warn("[ddc:switcher] failed to persist storage_key to YAML",Ce),(H=this._toast)==null||H.call(this,"Failed to persist selected layout. Keeping current.");return}if(this.storageKey=D,this._config&&(this._config.storage_key=D),!Te){console.warn("[ddc:switcher] persist returned false (likely YAML mode). Skipping reload.");return}try{this._saveTimer&&clearTimeout(this._saveTimer),await this._saveLayout(!0)}catch(Ce){console.warn("[ddc:switcher] saveLayout failed",Ce),(G=this._markDirty)==null||G.call(this,"switcher"),(ee=this._toast)==null||ee.call(this,"Layout loaded \u2014 click Apply to save.");return}window.location.reload(),window.location.reload()}catch(We){console.warn("[ddc:switcher] load/apply failed",We),(pe=this._toast)==null||pe.call(this,"Failed to load layout.")}finally{this._ddcLoadingFromKey=!1}}}),this._ddcVisTimer&&clearInterval(this._ddcVisTimer),this._ddcVisTimer=setInterval(()=>w.call(this),800),w.call(this)}catch(S){console.warn("[ddc:switcher] inline install failed",S)}}h.prototype._getLovelace||(h.prototype._getLovelace=e),h.prototype._scanDdcCards||(h.prototype._scanDdcCards=r),h.prototype._persistOptionsToYaml=g,h.prototype._applyDesignObject||(h.prototype._applyDesignObject=y);try{let S=Object.getOwnPropertyDescriptor(h.prototype,"hass");if(S&&(S.set||S.get)){let O=S.set;Object.defineProperty(h.prototype,"hass",{configurable:!0,enumerable:!0,set(P){O&&O.call(this,P);try{T.call(this)}catch{}},get:S.get||function(){return this._hass}})}else if(typeof h.prototype.setHass=="function"){let O=h.prototype.setHass;h.prototype.setHass=function(P){O&&O.call(this,P);try{T.call(this)}catch{}}}else{let O=h.prototype.updated||h.prototype.firstUpdated;h.prototype.updated=function(...P){O&&O.apply(this,P);try{T.call(this)}catch{}}}}catch(S){console.warn("[ddc:switcher] wrap hass setter failed",S)}})();
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
