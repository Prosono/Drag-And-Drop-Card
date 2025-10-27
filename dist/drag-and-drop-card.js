var La=Object.create;var Gi=Object.defineProperty;var za=Object.getOwnPropertyDescriptor;var Ma=Object.getOwnPropertyNames;var Ia=Object.getPrototypeOf,Ra=Object.prototype.hasOwnProperty;var Da=(e,u,t)=>u in e?Gi(e,u,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[u]=t;var Ba=(e,u)=>()=>(u||e((u={exports:{}}).exports,u),u.exports);var Fa=(e,u,t,r)=>{if(u&&typeof u=="object"||typeof u=="function")for(let o of Ma(u))!Ra.call(e,o)&&o!==t&&Gi(e,o,{get:()=>u[o],enumerable:!(r=za(u,o))||r.enumerable});return e};var Na=(e,u,t)=>(t=e!=null?La(Ia(e)):{},Fa(u||!e||!e.__esModule?Gi(t,"default",{value:e,enumerable:!0}):t,e));var Mn=(e,u,t)=>Da(e,typeof u!="symbol"?u+"":u,t);var In=Ba((Xi,Ut)=>{(function(e,u){typeof Xi=="object"&&typeof Ut!="undefined"?Ut.exports=u():typeof define=="function"&&define.amd?define(u):(e=typeof globalThis!="undefined"?globalThis:e||self).interact=u()})(Xi,(function(){"use strict";function e(n,i){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);i&&(c=c.filter((function(p){return Object.getOwnPropertyDescriptor(n,p).enumerable}))),a.push.apply(a,c)}return a}function u(n){for(var i=1;i<arguments.length;i++){var a=arguments[i]!=null?arguments[i]:{};i%2?e(Object(a),!0).forEach((function(c){s(n,c,a[c])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):e(Object(a)).forEach((function(c){Object.defineProperty(n,c,Object.getOwnPropertyDescriptor(a,c))}))}return n}function t(n){return t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},t(n)}function r(n,i){if(!(n instanceof i))throw new TypeError("Cannot call a class as a function")}function o(n,i){for(var a=0;a<i.length;a++){var c=i[a];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(n,w(c.key),c)}}function l(n,i,a){return i&&o(n.prototype,i),a&&o(n,a),Object.defineProperty(n,"prototype",{writable:!1}),n}function s(n,i,a){return(i=w(i))in n?Object.defineProperty(n,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[i]=a,n}function d(n,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(i&&i.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),i&&y(n,i)}function f(n){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},f(n)}function y(n,i){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,c){return a.__proto__=c,a},y(n,i)}function g(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function b(n){var i=(function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch{return!1}})();return function(){var a,c=f(n);if(i){var p=f(this).constructor;a=Reflect.construct(c,arguments,p)}else a=c.apply(this,arguments);return(function(h,v){if(v&&(typeof v=="object"||typeof v=="function"))return v;if(v!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return g(h)})(this,a)}}function m(){return m=typeof Reflect!="undefined"&&Reflect.get?Reflect.get.bind():function(n,i,a){var c=(function(h,v){for(;!Object.prototype.hasOwnProperty.call(h,v)&&(h=f(h))!==null;);return h})(n,i);if(c){var p=Object.getOwnPropertyDescriptor(c,i);return p.get?p.get.call(arguments.length<3?n:a):p.value}},m.apply(this,arguments)}function w(n){var i=(function(a,c){if(typeof a!="object"||a===null)return a;var p=a[Symbol.toPrimitive];if(p!==void 0){var h=p.call(a,c||"default");if(typeof h!="object")return h;throw new TypeError("@@toPrimitive must return a primitive value.")}return(c==="string"?String:Number)(a)})(n,"string");return typeof i=="symbol"?i:i+""}var O=function(n){return!(!n||!n.Window)&&n instanceof n.Window},E=void 0,P=void 0;function R(n){E=n;var i=n.document.createTextNode("");i.ownerDocument!==n.document&&typeof n.wrap=="function"&&n.wrap(i)===i&&(n=n.wrap(n)),P=n}function C(n){return O(n)?n:(n.ownerDocument||n).defaultView||P.window}typeof window!="undefined"&&window&&R(window);var A=function(n){return!!n&&t(n)==="object"},L=function(n){return typeof n=="function"},x={window:function(n){return n===P||O(n)},docFrag:function(n){return A(n)&&n.nodeType===11},object:A,func:L,number:function(n){return typeof n=="number"},bool:function(n){return typeof n=="boolean"},string:function(n){return typeof n=="string"},element:function(n){if(!n||t(n)!=="object")return!1;var i=C(n)||P;return/object|function/.test(typeof Element=="undefined"?"undefined":t(Element))?n instanceof Element||n instanceof i.Element:n.nodeType===1&&typeof n.nodeName=="string"},plainObject:function(n){return A(n)&&!!n.constructor&&/function Object\b/.test(n.constructor.toString())},array:function(n){return A(n)&&n.length!==void 0&&L(n.splice)}};function M(n){var i=n.interaction;if(i.prepared.name==="drag"){var a=i.prepared.axis;a==="x"?(i.coords.cur.page.y=i.coords.start.page.y,i.coords.cur.client.y=i.coords.start.client.y,i.coords.velocity.client.y=0,i.coords.velocity.page.y=0):a==="y"&&(i.coords.cur.page.x=i.coords.start.page.x,i.coords.cur.client.x=i.coords.start.client.x,i.coords.velocity.client.x=0,i.coords.velocity.page.x=0)}}function I(n){var i=n.iEvent,a=n.interaction;if(a.prepared.name==="drag"){var c=a.prepared.axis;if(c==="x"||c==="y"){var p=c==="x"?"y":"x";i.page[p]=a.coords.start.page[p],i.client[p]=a.coords.start.client[p],i.delta[p]=0}}}var re={id:"actions/drag",install:function(n){var i=n.actions,a=n.Interactable,c=n.defaults;a.prototype.draggable=re.draggable,i.map.drag=re,i.methodDict.drag="draggable",c.actions.drag=re.defaults},listeners:{"interactions:before-action-move":M,"interactions:action-resume":M,"interactions:action-move":I,"auto-start:check":function(n){var i=n.interaction,a=n.interactable,c=n.buttons,p=a.options.drag;if(p&&p.enabled&&(!i.pointerIsDown||!/mouse|pointer/.test(i.pointerType)||(c&a.options.drag.mouseButtons)!=0))return n.action={name:"drag",axis:p.lockAxis==="start"?p.startAxis:p.lockAxis},!1}},draggable:function(n){return x.object(n)?(this.options.drag.enabled=n.enabled!==!1,this.setPerAction("drag",n),this.setOnEvents("drag",n),/^(xy|x|y|start)$/.test(n.lockAxis)&&(this.options.drag.lockAxis=n.lockAxis),/^(xy|x|y)$/.test(n.startAxis)&&(this.options.drag.startAxis=n.startAxis),this):x.bool(n)?(this.options.drag.enabled=n,this):this.options.drag},beforeMove:M,move:I,defaults:{startAxis:"xy",lockAxis:"xy"},getCursor:function(){return"move"},filterEventType:function(n){return n.search("drag")===0}},ie=re,U={init:function(n){var i=n;U.document=i.document,U.DocumentFragment=i.DocumentFragment||ue,U.SVGElement=i.SVGElement||ue,U.SVGSVGElement=i.SVGSVGElement||ue,U.SVGElementInstance=i.SVGElementInstance||ue,U.Element=i.Element||ue,U.HTMLElement=i.HTMLElement||U.Element,U.Event=i.Event,U.Touch=i.Touch||ue,U.PointerEvent=i.PointerEvent||i.MSPointerEvent},document:null,DocumentFragment:null,SVGElement:null,SVGSVGElement:null,SVGElementInstance:null,Element:null,HTMLElement:null,Event:null,Touch:null,PointerEvent:null};function ue(){}var H=U,V={init:function(n){var i=H.Element,a=n.navigator||{};V.supportsTouch="ontouchstart"in n||x.func(n.DocumentTouch)&&H.document instanceof n.DocumentTouch,V.supportsPointerEvent=a.pointerEnabled!==!1&&!!H.PointerEvent,V.isIOS=/iP(hone|od|ad)/.test(a.platform),V.isIOS7=/iP(hone|od|ad)/.test(a.platform)&&/OS 7[^\d]/.test(a.appVersion),V.isIe9=/MSIE 9/.test(a.userAgent),V.isOperaMobile=a.appName==="Opera"&&V.supportsTouch&&/Presto/.test(a.userAgent),V.prefixedMatchesSelector="matches"in i.prototype?"matches":"webkitMatchesSelector"in i.prototype?"webkitMatchesSelector":"mozMatchesSelector"in i.prototype?"mozMatchesSelector":"oMatchesSelector"in i.prototype?"oMatchesSelector":"msMatchesSelector",V.pEventTypes=V.supportsPointerEvent?H.PointerEvent===n.MSPointerEvent?{up:"MSPointerUp",down:"MSPointerDown",over:"mouseover",out:"mouseout",move:"MSPointerMove",cancel:"MSPointerCancel"}:{up:"pointerup",down:"pointerdown",over:"pointerover",out:"pointerout",move:"pointermove",cancel:"pointercancel"}:null,V.wheelEvent=H.document&&"onmousewheel"in H.document?"mousewheel":"wheel"},supportsTouch:null,supportsPointerEvent:null,isIOS7:null,isIOS:null,isIe9:null,isOperaMobile:null,prefixedMatchesSelector:null,pEventTypes:null,wheelEvent:null},de=V;function me(n,i){if(n.contains)return n.contains(i);for(;i;){if(i===n)return!0;i=i.parentNode}return!1}function Ye(n,i){for(;x.element(n);){if(Re(n,i))return n;n=Fe(n)}return null}function Fe(n){var i=n.parentNode;if(x.docFrag(i)){for(;(i=i.host)&&x.docFrag(i););return i}return i}function Re(n,i){return P!==E&&(i=i.replace(/\/deep\//g," ")),n[de.prefixedMatchesSelector](i)}var qe=function(n){return n.parentNode||n.host};function Se(n,i){for(var a,c=[],p=n;(a=qe(p))&&p!==i&&a!==p.ownerDocument;)c.unshift(p),p=a;return c}function Qe(n,i,a){for(;x.element(n);){if(Re(n,i))return!0;if((n=Fe(n))===a)return Re(n,i)}return!1}function et(n){return n.correspondingUseElement||n}function Ve(n){var i=n instanceof H.SVGElement?n.getBoundingClientRect():n.getClientRects()[0];return i&&{left:i.left,right:i.right,top:i.top,bottom:i.bottom,width:i.width||i.right-i.left,height:i.height||i.bottom-i.top}}function tt(n){var i,a=Ve(n);if(!de.isIOS7&&a){var c={x:(i=(i=C(n))||P).scrollX||i.document.documentElement.scrollLeft,y:i.scrollY||i.document.documentElement.scrollTop};a.left+=c.x,a.right+=c.x,a.top+=c.y,a.bottom+=c.y}return a}function ft(n){for(var i=[];n;)i.push(n),n=Fe(n);return i}function at(n){return!!x.string(n)&&(H.document.querySelector(n),!0)}function ce(n,i){for(var a in i)n[a]=i[a];return n}function gt(n,i,a){return n==="parent"?Fe(a):n==="self"?i.getRect(a):Ye(a,n)}function Ge(n,i,a,c){var p=n;return x.string(p)?p=gt(p,i,a):x.func(p)&&(p=p.apply(void 0,c)),x.element(p)&&(p=tt(p)),p}function Oe(n){return n&&{x:"x"in n?n.x:n.left,y:"y"in n?n.y:n.top}}function le(n){return!n||"x"in n&&"y"in n||((n=ce({},n)).x=n.left||0,n.y=n.top||0,n.width=n.width||(n.right||0)-n.x,n.height=n.height||(n.bottom||0)-n.y),n}function Pe(n,i,a){n.left&&(i.left+=a.x),n.right&&(i.right+=a.x),n.top&&(i.top+=a.y),n.bottom&&(i.bottom+=a.y),i.width=i.right-i.left,i.height=i.bottom-i.top}function Ce(n,i,a){var c=a&&n.options[a];return Oe(Ge(c&&c.origin||n.options.origin,n,i,[n&&i]))||{x:0,y:0}}function Ee(n,i){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(k){return!0},c=arguments.length>3?arguments[3]:void 0;if(c=c||{},x.string(n)&&n.search(" ")!==-1&&(n=nt(n)),x.array(n))return n.forEach((function(k){return Ee(k,i,a,c)})),c;if(x.object(n)&&(i=n,n=""),x.func(i)&&a(n))c[n]=c[n]||[],c[n].push(i);else if(x.array(i))for(var p=0,h=i;p<h.length;p++){var v=h[p];Ee(n,v,a,c)}else if(x.object(i))for(var _ in i)Ee(nt(_).map((function(k){return"".concat(n).concat(k)})),i[_],a,c);return c}function nt(n){return n.trim().split(/ +/)}var $e=function(n,i){return Math.sqrt(n*n+i*i)},Ct=["webkit","moz"];function yt(n,i){n.__set||(n.__set={});var a=function(p){if(Ct.some((function(h){return p.indexOf(h)===0})))return 1;typeof n[p]!="function"&&p!=="__set"&&Object.defineProperty(n,p,{get:function(){return p in n.__set?n.__set[p]:n.__set[p]=i[p]},set:function(h){n.__set[p]=h},configurable:!0})};for(var c in i)a(c);return n}function St(n,i){n.page=n.page||{},n.page.x=i.page.x,n.page.y=i.page.y,n.client=n.client||{},n.client.x=i.client.x,n.client.y=i.client.y,n.timeStamp=i.timeStamp}function De(n){n.page.x=0,n.page.y=0,n.client.x=0,n.client.y=0}function At(n){return n instanceof H.Event||n instanceof H.Touch}function vt(n,i,a){return n=n||"page",(a=a||{}).x=i[n+"X"],a.y=i[n+"Y"],a}function rt(n,i){return i=i||{x:0,y:0},de.isOperaMobile&&At(n)?(vt("screen",n,i),i.x+=window.scrollX,i.y+=window.scrollY):vt("page",n,i),i}function dt(n){return x.number(n.pointerId)?n.pointerId:n.identifier}function Rt(n,i,a){var c=i.length>1?Tt(i):i[0];rt(c,n.page),(function(p,h){h=h||{},de.isOperaMobile&&At(p)?vt("screen",p,h):vt("client",p,h)})(c,n.client),n.timeStamp=a}function zt(n){var i=[];return x.array(n)?(i[0]=n[0],i[1]=n[1]):n.type==="touchend"?n.touches.length===1?(i[0]=n.touches[0],i[1]=n.changedTouches[0]):n.touches.length===0&&(i[0]=n.changedTouches[0],i[1]=n.changedTouches[1]):(i[0]=n.touches[0],i[1]=n.touches[1]),i}function Tt(n){for(var i={pageX:0,pageY:0,clientX:0,clientY:0,screenX:0,screenY:0},a=0;a<n.length;a++){var c=n[a];for(var p in i)i[p]+=c[p]}for(var h in i)i[h]/=n.length;return i}function ye(n){if(!n.length)return null;var i=zt(n),a=Math.min(i[0].pageX,i[1].pageX),c=Math.min(i[0].pageY,i[1].pageY),p=Math.max(i[0].pageX,i[1].pageX),h=Math.max(i[0].pageY,i[1].pageY);return{x:a,y:c,left:a,top:c,right:p,bottom:h,width:p-a,height:h-c}}function Be(n,i){var a=i+"X",c=i+"Y",p=zt(n),h=p[0][a]-p[1][a],v=p[0][c]-p[1][c];return $e(h,v)}function Xe(n,i){var a=i+"X",c=i+"Y",p=zt(n),h=p[1][a]-p[0][a],v=p[1][c]-p[0][c];return 180*Math.atan2(v,h)/Math.PI}function K(n){return x.string(n.pointerType)?n.pointerType:x.number(n.pointerType)?[void 0,void 0,"touch","pen","mouse"][n.pointerType]:/touch/.test(n.type||"")||n instanceof H.Touch?"touch":"mouse"}function Z(n){var i=x.func(n.composedPath)?n.composedPath():n.path;return[et(i?i[0]:n.target),et(n.currentTarget)]}var xe=(function(){function n(i){r(this,n),this.immediatePropagationStopped=!1,this.propagationStopped=!1,this._interaction=i}return l(n,[{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}]),n})();Object.defineProperty(xe.prototype,"interaction",{get:function(){return this._interaction._proxy},set:function(){}});var _e=function(n,i){for(var a=0;a<i.length;a++){var c=i[a];n.push(c)}return n},he=function(n){return _e([],n)},we=function(n,i){for(var a=0;a<n.length;a++)if(i(n[a],a,n))return a;return-1},F=function(n,i){return n[we(n,i)]},se=(function(n){d(a,n);var i=b(a);function a(c,p,h){var v;r(this,a),(v=i.call(this,p._interaction)).dropzone=void 0,v.dragEvent=void 0,v.relatedTarget=void 0,v.draggable=void 0,v.propagationStopped=!1,v.immediatePropagationStopped=!1;var _=h==="dragleave"?c.prev:c.cur,k=_.element,T=_.dropzone;return v.type=h,v.target=k,v.currentTarget=k,v.dropzone=T,v.dragEvent=p,v.relatedTarget=p.target,v.draggable=p.interactable,v.timeStamp=p.timeStamp,v}return l(a,[{key:"reject",value:function(){var c=this,p=this._interaction.dropState;if(this.type==="dropactivate"||this.dropzone&&p.cur.dropzone===this.dropzone&&p.cur.element===this.target)if(p.prev.dropzone=this.dropzone,p.prev.element=this.target,p.rejected=!0,p.events.enter=null,this.stopImmediatePropagation(),this.type==="dropactivate"){var h=p.activeDrops,v=we(h,(function(k){var T=k.dropzone,S=k.element;return T===c.dropzone&&S===c.target}));p.activeDrops.splice(v,1);var _=new a(p,this.dragEvent,"dropdeactivate");_.dropzone=this.dropzone,_.target=this.target,this.dropzone.fire(_)}else this.dropzone.fire(new a(p,this.dragEvent,"dragleave"))}},{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}]),a})(xe);function ze(n,i){for(var a=0,c=n.slice();a<c.length;a++){var p=c[a],h=p.dropzone,v=p.element;i.dropzone=h,i.target=v,h.fire(i),i.propagationStopped=i.immediatePropagationStopped=!1}}function W(n,i){for(var a=(function(h,v){for(var _=[],k=0,T=h.interactables.list;k<T.length;k++){var S=T[k];if(S.options.drop.enabled){var z=S.options.drop.accept;if(!(x.element(z)&&z!==v||x.string(z)&&!Re(v,z)||x.func(z)&&!z({dropzone:S,draggableElement:v})))for(var D=0,ee=S.getAllElements();D<ee.length;D++){var Q=ee[D];Q!==v&&_.push({dropzone:S,element:Q,rect:S.getRect(Q)})}}}return _})(n,i),c=0;c<a.length;c++){var p=a[c];p.rect=p.dropzone.getRect(p.element)}return a}function Ne(n,i,a){for(var c=n.dropState,p=n.interactable,h=n.element,v=[],_=0,k=c.activeDrops;_<k.length;_++){var T=k[_],S=T.dropzone,z=T.element,D=T.rect,ee=S.dropCheck(i,a,p,h,z,D);v.push(ee?z:null)}var Q=(function(ne){for(var ge,pe,ve,Ae=[],Ie=0;Ie<ne.length;Ie++){var ke=ne[Ie],Te=ne[ge];if(ke&&Ie!==ge)if(Te){var xt=qe(ke),Ze=qe(Te);if(xt!==ke.ownerDocument)if(Ze!==ke.ownerDocument)if(xt!==Ze){Ae=Ae.length?Ae:Se(Te);var Et=void 0;if(Te instanceof H.HTMLElement&&ke instanceof H.SVGElement&&!(ke instanceof H.SVGSVGElement)){if(ke===Ze)continue;Et=ke.ownerSVGElement}else Et=ke;for(var Pt=Se(Et,Te.ownerDocument),Mt=0;Pt[Mt]&&Pt[Mt]===Ae[Mt];)Mt++;var Ii=[Pt[Mt-1],Pt[Mt],Ae[Mt]];if(Ii[0])for(var fi=Ii[0].lastChild;fi;){if(fi===Ii[1]){ge=Ie,Ae=Pt;break}if(fi===Ii[2])break;fi=fi.previousSibling}}else ve=Te,(parseInt(C(pe=ke).getComputedStyle(pe).zIndex,10)||0)>=(parseInt(C(ve).getComputedStyle(ve).zIndex,10)||0)&&(ge=Ie);else ge=Ie}else ge=Ie}return ge})(v);return c.activeDrops[Q]||null}function He(n,i,a){var c=n.dropState,p={enter:null,leave:null,activate:null,deactivate:null,move:null,drop:null};return a.type==="dragstart"&&(p.activate=new se(c,a,"dropactivate"),p.activate.target=null,p.activate.dropzone=null),a.type==="dragend"&&(p.deactivate=new se(c,a,"dropdeactivate"),p.deactivate.target=null,p.deactivate.dropzone=null),c.rejected||(c.cur.element!==c.prev.element&&(c.prev.dropzone&&(p.leave=new se(c,a,"dragleave"),a.dragLeave=p.leave.target=c.prev.element,a.prevDropzone=p.leave.dropzone=c.prev.dropzone),c.cur.dropzone&&(p.enter=new se(c,a,"dragenter"),a.dragEnter=c.cur.element,a.dropzone=c.cur.dropzone)),a.type==="dragend"&&c.cur.dropzone&&(p.drop=new se(c,a,"drop"),a.dropzone=c.cur.dropzone,a.relatedTarget=c.cur.element),a.type==="dragmove"&&c.cur.dropzone&&(p.move=new se(c,a,"dropmove"),a.dropzone=c.cur.dropzone)),p}function Ue(n,i){var a=n.dropState,c=a.activeDrops,p=a.cur,h=a.prev;i.leave&&h.dropzone.fire(i.leave),i.enter&&p.dropzone.fire(i.enter),i.move&&p.dropzone.fire(i.move),i.drop&&p.dropzone.fire(i.drop),i.deactivate&&ze(c,i.deactivate),a.prev.dropzone=p.dropzone,a.prev.element=p.element}function Le(n,i){var a=n.interaction,c=n.iEvent,p=n.event;if(c.type==="dragmove"||c.type==="dragend"){var h=a.dropState;i.dynamicDrop&&(h.activeDrops=W(i,a.element));var v=c,_=Ne(a,v,p);h.rejected=h.rejected&&!!_&&_.dropzone===h.cur.dropzone&&_.element===h.cur.element,h.cur.dropzone=_&&_.dropzone,h.cur.element=_&&_.element,h.events=He(a,0,v)}}var Je={id:"actions/drop",install:function(n){var i=n.actions,a=n.interactStatic,c=n.Interactable,p=n.defaults;n.usePlugin(ie),c.prototype.dropzone=function(h){return(function(v,_){if(x.object(_)){if(v.options.drop.enabled=_.enabled!==!1,_.listeners){var k=Ee(_.listeners),T=Object.keys(k).reduce((function(z,D){return z[/^(enter|leave)/.test(D)?"drag".concat(D):/^(activate|deactivate|move)/.test(D)?"drop".concat(D):D]=k[D],z}),{}),S=v.options.drop.listeners;S&&v.off(S),v.on(T),v.options.drop.listeners=T}return x.func(_.ondrop)&&v.on("drop",_.ondrop),x.func(_.ondropactivate)&&v.on("dropactivate",_.ondropactivate),x.func(_.ondropdeactivate)&&v.on("dropdeactivate",_.ondropdeactivate),x.func(_.ondragenter)&&v.on("dragenter",_.ondragenter),x.func(_.ondragleave)&&v.on("dragleave",_.ondragleave),x.func(_.ondropmove)&&v.on("dropmove",_.ondropmove),/^(pointer|center)$/.test(_.overlap)?v.options.drop.overlap=_.overlap:x.number(_.overlap)&&(v.options.drop.overlap=Math.max(Math.min(1,_.overlap),0)),"accept"in _&&(v.options.drop.accept=_.accept),"checker"in _&&(v.options.drop.checker=_.checker),v}return x.bool(_)?(v.options.drop.enabled=_,v):v.options.drop})(this,h)},c.prototype.dropCheck=function(h,v,_,k,T,S){return(function(z,D,ee,Q,ne,ge,pe){var ve=!1;if(!(pe=pe||z.getRect(ge)))return!!z.options.drop.checker&&z.options.drop.checker(D,ee,ve,z,ge,Q,ne);var Ae=z.options.drop.overlap;if(Ae==="pointer"){var Ie=Ce(Q,ne,"drag"),ke=rt(D);ke.x+=Ie.x,ke.y+=Ie.y;var Te=ke.x>pe.left&&ke.x<pe.right,xt=ke.y>pe.top&&ke.y<pe.bottom;ve=Te&&xt}var Ze=Q.getRect(ne);if(Ze&&Ae==="center"){var Et=Ze.left+Ze.width/2,Pt=Ze.top+Ze.height/2;ve=Et>=pe.left&&Et<=pe.right&&Pt>=pe.top&&Pt<=pe.bottom}return Ze&&x.number(Ae)&&(ve=Math.max(0,Math.min(pe.right,Ze.right)-Math.max(pe.left,Ze.left))*Math.max(0,Math.min(pe.bottom,Ze.bottom)-Math.max(pe.top,Ze.top))/(Ze.width*Ze.height)>=Ae),z.options.drop.checker&&(ve=z.options.drop.checker(D,ee,ve,z,ge,Q,ne)),ve})(this,h,v,_,k,T,S)},a.dynamicDrop=function(h){return x.bool(h)?(n.dynamicDrop=h,a):n.dynamicDrop},ce(i.phaselessTypes,{dragenter:!0,dragleave:!0,dropactivate:!0,dropdeactivate:!0,dropmove:!0,drop:!0}),i.methodDict.drop="dropzone",n.dynamicDrop=!1,p.actions.drop=Je.defaults},listeners:{"interactions:before-action-start":function(n){var i=n.interaction;i.prepared.name==="drag"&&(i.dropState={cur:{dropzone:null,element:null},prev:{dropzone:null,element:null},rejected:null,events:null,activeDrops:[]})},"interactions:after-action-start":function(n,i){var a=n.interaction,c=(n.event,n.iEvent);if(a.prepared.name==="drag"){var p=a.dropState;p.activeDrops=[],p.events={},p.activeDrops=W(i,a.element),p.events=He(a,0,c),p.events.activate&&(ze(p.activeDrops,p.events.activate),i.fire("actions/drop:start",{interaction:a,dragEvent:c}))}},"interactions:action-move":Le,"interactions:after-action-move":function(n,i){var a=n.interaction,c=n.iEvent;if(a.prepared.name==="drag"){var p=a.dropState;Ue(a,p.events),i.fire("actions/drop:move",{interaction:a,dragEvent:c}),p.events={}}},"interactions:action-end":function(n,i){if(n.interaction.prepared.name==="drag"){var a=n.interaction,c=n.iEvent;Le(n,i),Ue(a,a.dropState.events),i.fire("actions/drop:end",{interaction:a,dragEvent:c})}},"interactions:stop":function(n){var i=n.interaction;if(i.prepared.name==="drag"){var a=i.dropState;a&&(a.activeDrops=null,a.events=null,a.cur.dropzone=null,a.cur.element=null,a.prev.dropzone=null,a.prev.element=null,a.rejected=!1)}}},getActiveDrops:W,getDrop:Ne,getDropEvents:He,fireDropEvents:Ue,filterEventType:function(n){return n.search("drag")===0||n.search("drop")===0},defaults:{enabled:!1,accept:null,overlap:"pointer"}},We=Je;function Ke(n){var i=n.interaction,a=n.iEvent,c=n.phase;if(i.prepared.name==="gesture"){var p=i.pointers.map((function(T){return T.pointer})),h=c==="start",v=c==="end",_=i.interactable.options.deltaSource;if(a.touches=[p[0],p[1]],h)a.distance=Be(p,_),a.box=ye(p),a.scale=1,a.ds=0,a.angle=Xe(p,_),a.da=0,i.gesture.startDistance=a.distance,i.gesture.startAngle=a.angle;else if(v||i.pointers.length<2){var k=i.prevEvent;a.distance=k.distance,a.box=k.box,a.scale=k.scale,a.ds=0,a.angle=k.angle,a.da=0}else a.distance=Be(p,_),a.box=ye(p),a.scale=a.distance/i.gesture.startDistance,a.angle=Xe(p,_),a.ds=a.scale-i.gesture.scale,a.da=a.angle-i.gesture.angle;i.gesture.distance=a.distance,i.gesture.angle=a.angle,x.number(a.scale)&&a.scale!==1/0&&!isNaN(a.scale)&&(i.gesture.scale=a.scale)}}var j={id:"actions/gesture",before:["actions/drag","actions/resize"],install:function(n){var i=n.actions,a=n.Interactable,c=n.defaults;a.prototype.gesturable=function(p){return x.object(p)?(this.options.gesture.enabled=p.enabled!==!1,this.setPerAction("gesture",p),this.setOnEvents("gesture",p),this):x.bool(p)?(this.options.gesture.enabled=p,this):this.options.gesture},i.map.gesture=j,i.methodDict.gesture="gesturable",c.actions.gesture=j.defaults},listeners:{"interactions:action-start":Ke,"interactions:action-move":Ke,"interactions:action-end":Ke,"interactions:new":function(n){n.interaction.gesture={angle:0,distance:0,scale:1,startAngle:0,startDistance:0}},"auto-start:check":function(n){if(!(n.interaction.pointers.length<2)){var i=n.interactable.options.gesture;if(i&&i.enabled)return n.action={name:"gesture"},!1}}},defaults:{},getCursor:function(){return""},filterEventType:function(n){return n.search("gesture")===0}},ae=j;function $(n,i,a,c,p,h,v){if(!i)return!1;if(i===!0){var _=x.number(h.width)?h.width:h.right-h.left,k=x.number(h.height)?h.height:h.bottom-h.top;if(v=Math.min(v,Math.abs((n==="left"||n==="right"?_:k)/2)),_<0&&(n==="left"?n="right":n==="right"&&(n="left")),k<0&&(n==="top"?n="bottom":n==="bottom"&&(n="top")),n==="left"){var T=_>=0?h.left:h.right;return a.x<T+v}if(n==="top"){var S=k>=0?h.top:h.bottom;return a.y<S+v}if(n==="right")return a.x>(_>=0?h.right:h.left)-v;if(n==="bottom")return a.y>(k>=0?h.bottom:h.top)-v}return!!x.element(c)&&(x.element(i)?i===c:Qe(c,i,p))}function G(n){var i=n.iEvent,a=n.interaction;if(a.prepared.name==="resize"&&a.resizeAxes){var c=i;a.interactable.options.resize.square?(a.resizeAxes==="y"?c.delta.x=c.delta.y:c.delta.y=c.delta.x,c.axes="xy"):(c.axes=a.resizeAxes,a.resizeAxes==="x"?c.delta.y=0:a.resizeAxes==="y"&&(c.delta.x=0))}}var oe,te,X={id:"actions/resize",before:["actions/drag"],install:function(n){var i=n.actions,a=n.browser,c=n.Interactable,p=n.defaults;X.cursors=(function(h){return h.isIe9?{x:"e-resize",y:"s-resize",xy:"se-resize",top:"n-resize",left:"w-resize",bottom:"s-resize",right:"e-resize",topleft:"se-resize",bottomright:"se-resize",topright:"ne-resize",bottomleft:"ne-resize"}:{x:"ew-resize",y:"ns-resize",xy:"nwse-resize",top:"ns-resize",left:"ew-resize",bottom:"ns-resize",right:"ew-resize",topleft:"nwse-resize",bottomright:"nwse-resize",topright:"nesw-resize",bottomleft:"nesw-resize"}})(a),X.defaultMargin=a.supportsTouch||a.supportsPointerEvent?20:10,c.prototype.resizable=function(h){return(function(v,_,k){return x.object(_)?(v.options.resize.enabled=_.enabled!==!1,v.setPerAction("resize",_),v.setOnEvents("resize",_),x.string(_.axis)&&/^x$|^y$|^xy$/.test(_.axis)?v.options.resize.axis=_.axis:_.axis===null&&(v.options.resize.axis=k.defaults.actions.resize.axis),x.bool(_.preserveAspectRatio)?v.options.resize.preserveAspectRatio=_.preserveAspectRatio:x.bool(_.square)&&(v.options.resize.square=_.square),v):x.bool(_)?(v.options.resize.enabled=_,v):v.options.resize})(this,h,n)},i.map.resize=X,i.methodDict.resize="resizable",p.actions.resize=X.defaults},listeners:{"interactions:new":function(n){n.interaction.resizeAxes="xy"},"interactions:action-start":function(n){(function(i){var a=i.iEvent,c=i.interaction;if(c.prepared.name==="resize"&&c.prepared.edges){var p=a,h=c.rect;c._rects={start:ce({},h),corrected:ce({},h),previous:ce({},h),delta:{left:0,right:0,width:0,top:0,bottom:0,height:0}},p.edges=c.prepared.edges,p.rect=c._rects.corrected,p.deltaRect=c._rects.delta}})(n),G(n)},"interactions:action-move":function(n){(function(i){var a=i.iEvent,c=i.interaction;if(c.prepared.name==="resize"&&c.prepared.edges){var p=a,h=c.interactable.options.resize.invert,v=h==="reposition"||h==="negate",_=c.rect,k=c._rects,T=k.start,S=k.corrected,z=k.delta,D=k.previous;if(ce(D,S),v){if(ce(S,_),h==="reposition"){if(S.top>S.bottom){var ee=S.top;S.top=S.bottom,S.bottom=ee}if(S.left>S.right){var Q=S.left;S.left=S.right,S.right=Q}}}else S.top=Math.min(_.top,T.bottom),S.bottom=Math.max(_.bottom,T.top),S.left=Math.min(_.left,T.right),S.right=Math.max(_.right,T.left);for(var ne in S.width=S.right-S.left,S.height=S.bottom-S.top,S)z[ne]=S[ne]-D[ne];p.edges=c.prepared.edges,p.rect=S,p.deltaRect=z}})(n),G(n)},"interactions:action-end":function(n){var i=n.iEvent,a=n.interaction;if(a.prepared.name==="resize"&&a.prepared.edges){var c=i;c.edges=a.prepared.edges,c.rect=a._rects.corrected,c.deltaRect=a._rects.delta}},"auto-start:check":function(n){var i=n.interaction,a=n.interactable,c=n.element,p=n.rect,h=n.buttons;if(p){var v=ce({},i.coords.cur.page),_=a.options.resize;if(_&&_.enabled&&(!i.pointerIsDown||!/mouse|pointer/.test(i.pointerType)||(h&_.mouseButtons)!=0)){if(x.object(_.edges)){var k={left:!1,right:!1,top:!1,bottom:!1};for(var T in k)k[T]=$(T,_.edges[T],v,i._latestPointer.eventTarget,c,p,_.margin||X.defaultMargin);k.left=k.left&&!k.right,k.top=k.top&&!k.bottom,(k.left||k.right||k.top||k.bottom)&&(n.action={name:"resize",edges:k})}else{var S=_.axis!=="y"&&v.x>p.right-X.defaultMargin,z=_.axis!=="x"&&v.y>p.bottom-X.defaultMargin;(S||z)&&(n.action={name:"resize",axes:(S?"x":"")+(z?"y":"")})}return!n.action&&void 0}}}},defaults:{square:!1,preserveAspectRatio:!1,axis:"xy",margin:NaN,edges:null,invert:"none"},cursors:null,getCursor:function(n){var i=n.edges,a=n.axis,c=n.name,p=X.cursors,h=null;if(a)h=p[c+a];else if(i){for(var v="",_=0,k=["top","bottom","left","right"];_<k.length;_++){var T=k[_];i[T]&&(v+=T)}h=p[v]}return h},filterEventType:function(n){return n.search("resize")===0},defaultMargin:null},J=X,Y={id:"actions",install:function(n){n.usePlugin(ae),n.usePlugin(J),n.usePlugin(ie),n.usePlugin(We)}},N=0,q={request:function(n){return oe(n)},cancel:function(n){return te(n)},init:function(n){if(oe=n.requestAnimationFrame,te=n.cancelAnimationFrame,!oe)for(var i=["ms","moz","webkit","o"],a=0;a<i.length;a++){var c=i[a];oe=n["".concat(c,"RequestAnimationFrame")],te=n["".concat(c,"CancelAnimationFrame")]||n["".concat(c,"CancelRequestAnimationFrame")]}oe=oe&&oe.bind(n),te=te&&te.bind(n),oe||(oe=function(p){var h=Date.now(),v=Math.max(0,16-(h-N)),_=n.setTimeout((function(){p(h+v)}),v);return N=h+v,_},te=function(p){return clearTimeout(p)})}},B={defaults:{enabled:!1,margin:60,container:null,speed:300},now:Date.now,interaction:null,i:0,x:0,y:0,isScrolling:!1,prevTime:0,margin:0,speed:0,start:function(n){B.isScrolling=!0,q.cancel(B.i),n.autoScroll=B,B.interaction=n,B.prevTime=B.now(),B.i=q.request(B.scroll)},stop:function(){B.isScrolling=!1,B.interaction&&(B.interaction.autoScroll=null),q.cancel(B.i)},scroll:function(){var n=B.interaction,i=n.interactable,a=n.element,c=n.prepared.name,p=i.options[c].autoScroll,h=fe(p.container,i,a),v=B.now(),_=(v-B.prevTime)/1e3,k=p.speed*_;if(k>=1){var T={x:B.x*k,y:B.y*k};if(T.x||T.y){var S=Me(h);x.window(h)?h.scrollBy(T.x,T.y):h&&(h.scrollLeft+=T.x,h.scrollTop+=T.y);var z=Me(h),D={x:z.x-S.x,y:z.y-S.y};(D.x||D.y)&&i.fire({type:"autoscroll",target:a,interactable:i,delta:D,interaction:n,container:h})}B.prevTime=v}B.isScrolling&&(q.cancel(B.i),B.i=q.request(B.scroll))},check:function(n,i){var a;return(a=n.options[i].autoScroll)==null?void 0:a.enabled},onInteractionMove:function(n){var i=n.interaction,a=n.pointer;if(i.interacting()&&B.check(i.interactable,i.prepared.name))if(i.simulation)B.x=B.y=0;else{var c,p,h,v,_=i.interactable,k=i.element,T=i.prepared.name,S=_.options[T].autoScroll,z=fe(S.container,_,k);if(x.window(z))v=a.clientX<B.margin,c=a.clientY<B.margin,p=a.clientX>z.innerWidth-B.margin,h=a.clientY>z.innerHeight-B.margin;else{var D=Ve(z);v=a.clientX<D.left+B.margin,c=a.clientY<D.top+B.margin,p=a.clientX>D.right-B.margin,h=a.clientY>D.bottom-B.margin}B.x=p?1:v?-1:0,B.y=h?1:c?-1:0,B.isScrolling||(B.margin=S.margin,B.speed=S.speed,B.start(i))}}};function fe(n,i,a){return(x.string(n)?gt(n,i,a):n)||C(a)}function Me(n){return x.window(n)&&(n=window.document.body),{x:n.scrollLeft,y:n.scrollTop}}var je={id:"auto-scroll",install:function(n){var i=n.defaults,a=n.actions;n.autoScroll=B,B.now=function(){return n.now()},a.phaselessTypes.autoscroll=!0,i.perAction.autoScroll=B.defaults},listeners:{"interactions:new":function(n){n.interaction.autoScroll=null},"interactions:destroy":function(n){n.interaction.autoScroll=null,B.stop(),B.interaction&&(B.interaction=null)},"interactions:stop":B.stop,"interactions:action-move":function(n){return B.onInteractionMove(n)}}},pt=je;function ot(n,i){var a=!1;return function(){return a||(P.console.warn(i),a=!0),n.apply(this,arguments)}}function it(n,i){return n.name=i.name,n.axis=i.axis,n.edges=i.edges,n}function wt(n){return x.bool(n)?(this.options.styleCursor=n,this):n===null?(delete this.options.styleCursor,this):this.options.styleCursor}function Dt(n){return x.func(n)?(this.options.actionChecker=n,this):n===null?(delete this.options.actionChecker,this):this.options.actionChecker}var Hi={id:"auto-start/interactableMethods",install:function(n){var i=n.Interactable;i.prototype.getAction=function(a,c,p,h){var v=(function(_,k,T,S,z){var D=_.getRect(S),ee=k.buttons||{0:1,1:4,3:8,4:16}[k.button],Q={action:null,interactable:_,interaction:T,element:S,rect:D,buttons:ee};return z.fire("auto-start:check",Q),Q.action})(this,c,p,h,n);return this.options.actionChecker?this.options.actionChecker(a,c,v,this,h,p):v},i.prototype.ignoreFrom=ot((function(a){return this._backCompatOption("ignoreFrom",a)}),"Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."),i.prototype.allowFrom=ot((function(a){return this._backCompatOption("allowFrom",a)}),"Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."),i.prototype.actionChecker=Dt,i.prototype.styleCursor=wt}};function ai(n,i,a,c,p){return i.testIgnoreAllow(i.options[n.name],a,c)&&i.options[n.name].enabled&&Yt(i,a,n,p)?n:null}function xi(n,i,a,c,p,h,v){for(var _=0,k=c.length;_<k;_++){var T=c[_],S=p[_],z=T.getAction(i,a,n,S);if(z){var D=ai(z,T,S,h,v);if(D)return{action:D,interactable:T,element:S}}}return{action:null,interactable:null,element:null}}function oi(n,i,a,c,p){var h=[],v=[],_=c;function k(S){h.push(S),v.push(_)}for(;x.element(_);){h=[],v=[],p.interactables.forEachMatch(_,k);var T=xi(n,i,a,h,v,c,p);if(T.action&&!T.interactable.options[T.action.name].manualStart)return T;_=Fe(_)}return{action:null,interactable:null,element:null}}function si(n,i,a){var c=i.action,p=i.interactable,h=i.element;c=c||{name:null},n.interactable=p,n.element=h,it(n.prepared,c),n.rect=p&&c.name?p.getRect(h):null,li(n,a),a.fire("autoStart:prepared",{interaction:n})}function Yt(n,i,a,c){var p=n.options,h=p[a.name].max,v=p[a.name].maxPerElement,_=c.autoStart.maxInteractions,k=0,T=0,S=0;if(!(h&&v&&_))return!1;for(var z=0,D=c.interactions.list;z<D.length;z++){var ee=D[z],Q=ee.prepared.name;if(ee.interacting()&&(++k>=_||ee.interactable===n&&((T+=Q===a.name?1:0)>=h||ee.element===i&&(S++,Q===a.name&&S>=v))))return!1}return _>0}function ci(n,i){return x.number(n)?(i.autoStart.maxInteractions=n,this):i.autoStart.maxInteractions}function Xt(n,i,a){var c=a.autoStart.cursorElement;c&&c!==n&&(c.style.cursor=""),n.ownerDocument.documentElement.style.cursor=i,n.style.cursor=i,a.autoStart.cursorElement=i?n:null}function li(n,i){var a=n.interactable,c=n.element,p=n.prepared;if(n.pointerType==="mouse"&&a&&a.options.styleCursor){var h="";if(p.name){var v=a.options[p.name].cursorChecker;h=x.func(v)?v(p,a,c,n._interacting):i.actions.map[p.name].getCursor(p)}Xt(n.element,h||"",i)}else i.autoStart.cursorElement&&Xt(i.autoStart.cursorElement,"",i)}var _i={id:"auto-start/base",before:["actions"],install:function(n){var i=n.interactStatic,a=n.defaults;n.usePlugin(Hi),a.base.actionChecker=null,a.base.styleCursor=!0,ce(a.perAction,{manualStart:!1,max:1/0,maxPerElement:1,allowFrom:null,ignoreFrom:null,mouseButtons:1}),i.maxInteractions=function(c){return ci(c,n)},n.autoStart={maxInteractions:1/0,withinInteractionLimit:Yt,cursorElement:null}},listeners:{"interactions:down":function(n,i){var a=n.interaction,c=n.pointer,p=n.event,h=n.eventTarget;a.interacting()||si(a,oi(a,c,p,h,i),i)},"interactions:move":function(n,i){(function(a,c){var p=a.interaction,h=a.pointer,v=a.event,_=a.eventTarget;p.pointerType!=="mouse"||p.pointerIsDown||p.interacting()||si(p,oi(p,h,v,_,c),c)})(n,i),(function(a,c){var p=a.interaction;if(p.pointerIsDown&&!p.interacting()&&p.pointerWasMoved&&p.prepared.name){c.fire("autoStart:before-start",a);var h=p.interactable,v=p.prepared.name;v&&h&&(h.options[v].manualStart||!Yt(h,p.element,p.prepared,c)?p.stop():(p.start(p.prepared,h,p.element),li(p,c)))}})(n,i)},"interactions:stop":function(n,i){var a=n.interaction,c=a.interactable;c&&c.options.styleCursor&&Xt(a.element,"",i)}},maxInteractions:ci,withinInteractionLimit:Yt,validateAction:ai},Jt=_i,wi={id:"auto-start/dragAxis",listeners:{"autoStart:before-start":function(n,i){var a=n.interaction,c=n.eventTarget,p=n.dx,h=n.dy;if(a.prepared.name==="drag"){var v=Math.abs(p),_=Math.abs(h),k=a.interactable.options.drag,T=k.startAxis,S=v>_?"x":v<_?"y":"xy";if(a.prepared.axis=k.lockAxis==="start"?S[0]:k.lockAxis,S!=="xy"&&T!=="xy"&&T!==S){a.prepared.name=null;for(var z=c,D=function(Q){if(Q!==a.interactable){var ne=a.interactable.options.drag;if(!ne.manualStart&&Q.testIgnoreAllow(ne,z,c)){var ge=Q.getAction(a.downPointer,a.downEvent,a,z);if(ge&&ge.name==="drag"&&(function(pe,ve){if(!ve)return!1;var Ae=ve.options.drag.startAxis;return pe==="xy"||Ae==="xy"||Ae===pe})(S,Q)&&Jt.validateAction(ge,Q,z,c,i))return Q}}};x.element(z);){var ee=i.interactables.forEachMatch(z,D);if(ee){a.prepared.name="drag",a.interactable=ee,a.element=z;break}z=Fe(z)}}}}}};function Qt(n){var i=n.prepared&&n.prepared.name;if(!i)return null;var a=n.interactable.options;return a[i].hold||a[i].delay}var ki={id:"auto-start/hold",install:function(n){var i=n.defaults;n.usePlugin(Jt),i.perAction.hold=0,i.perAction.delay=0},listeners:{"interactions:new":function(n){n.interaction.autoStartHoldTimer=null},"autoStart:prepared":function(n){var i=n.interaction,a=Qt(i);a>0&&(i.autoStartHoldTimer=setTimeout((function(){i.start(i.prepared,i.interactable,i.element)}),a))},"interactions:move":function(n){var i=n.interaction,a=n.duplicate;i.autoStartHoldTimer&&i.pointerWasMoved&&!a&&(clearTimeout(i.autoStartHoldTimer),i.autoStartHoldTimer=null)},"autoStart:before-start":function(n){var i=n.interaction;Qt(i)>0&&(i.prepared.name=null)}},getHoldDuration:Qt},Si=ki,Ei={id:"auto-start",install:function(n){n.usePlugin(Jt),n.usePlugin(Si),n.usePlugin(wi)}},Ci=function(n){return/^(always|never|auto)$/.test(n)?(this.options.preventDefault=n,this):x.bool(n)?(this.options.preventDefault=n?"always":"never",this):this.options.preventDefault};function Ai(n){var i=n.interaction,a=n.event;i.interactable&&i.interactable.checkAndPreventDefault(a)}var Zt={id:"core/interactablePreventDefault",install:function(n){var i=n.Interactable;i.prototype.preventDefault=Ci,i.prototype.checkAndPreventDefault=function(a){return(function(c,p,h){var v=c.options.preventDefault;if(v!=="never")if(v!=="always"){if(p.events.supportsPassive&&/^touch(start|move)$/.test(h.type)){var _=C(h.target).document,k=p.getDocOptions(_);if(!k||!k.events||k.events.passive!==!1)return}/^(mouse|pointer|touch)*(down|start)/i.test(h.type)||x.element(h.target)&&Re(h.target,"input,select,textarea,[contenteditable=true],[contenteditable=true] *")||h.preventDefault()}else h.preventDefault()})(this,n,a)},n.interactions.docEvents.push({type:"dragstart",listener:function(a){for(var c=0,p=n.interactions.list;c<p.length;c++){var h=p[c];if(h.element&&(h.element===a.target||me(h.element,a.target)))return void h.interactable.checkAndPreventDefault(a)}}})},listeners:["down","move","up","cancel"].reduce((function(n,i){return n["interactions:".concat(i)]=Ai,n}),{})};function ei(n,i){if(i.phaselessTypes[n])return!0;for(var a in i.map)if(n.indexOf(a)===0&&n.substr(a.length)in i.phases)return!0;return!1}function Bt(n){var i={};for(var a in n){var c=n[a];x.plainObject(c)?i[a]=Bt(c):x.array(c)?i[a]=he(c):i[a]=c}return i}var Wt=(function(){function n(i){r(this,n),this.states=[],this.startOffset={left:0,right:0,top:0,bottom:0},this.startDelta=void 0,this.result=void 0,this.endResult=void 0,this.startEdges=void 0,this.edges=void 0,this.interaction=void 0,this.interaction=i,this.result=Kt(),this.edges={left:!1,right:!1,top:!1,bottom:!1}}return l(n,[{key:"start",value:function(i,a){var c,p,h=i.phase,v=this.interaction,_=(function(T){var S=T.interactable.options[T.prepared.name],z=S.modifiers;return z&&z.length?z:["snap","snapSize","snapEdges","restrict","restrictEdges","restrictSize"].map((function(D){var ee=S[D];return ee&&ee.enabled&&{options:ee,methods:ee._methods}})).filter((function(D){return!!D}))})(v);this.prepareStates(_),this.startEdges=ce({},v.edges),this.edges=ce({},this.startEdges),this.startOffset=(c=v.rect,p=a,c?{left:p.x-c.left,top:p.y-c.top,right:c.right-p.x,bottom:c.bottom-p.y}:{left:0,top:0,right:0,bottom:0}),this.startDelta={x:0,y:0};var k=this.fillArg({phase:h,pageCoords:a,preEnd:!1});return this.result=Kt(),this.startAll(k),this.result=this.setAll(k)}},{key:"fillArg",value:function(i){var a=this.interaction;return i.interaction=a,i.interactable=a.interactable,i.element=a.element,i.rect||(i.rect=a.rect),i.edges||(i.edges=this.startEdges),i.startOffset=this.startOffset,i}},{key:"startAll",value:function(i){for(var a=0,c=this.states;a<c.length;a++){var p=c[a];p.methods.start&&(i.state=p,p.methods.start(i))}}},{key:"setAll",value:function(i){var a=i.phase,c=i.preEnd,p=i.skipModifiers,h=i.rect,v=i.edges;i.coords=ce({},i.pageCoords),i.rect=ce({},h),i.edges=ce({},v);for(var _=p?this.states.slice(p):this.states,k=Kt(i.coords,i.rect),T=0;T<_.length;T++){var S,z=_[T],D=z.options,ee=ce({},i.coords),Q=null;(S=z.methods)!=null&&S.set&&this.shouldDo(D,c,a)&&(i.state=z,Q=z.methods.set(i),Pe(i.edges,i.rect,{x:i.coords.x-ee.x,y:i.coords.y-ee.y})),k.eventProps.push(Q)}ce(this.edges,i.edges),k.delta.x=i.coords.x-i.pageCoords.x,k.delta.y=i.coords.y-i.pageCoords.y,k.rectDelta.left=i.rect.left-h.left,k.rectDelta.right=i.rect.right-h.right,k.rectDelta.top=i.rect.top-h.top,k.rectDelta.bottom=i.rect.bottom-h.bottom;var ne=this.result.coords,ge=this.result.rect;if(ne&&ge){var pe=k.rect.left!==ge.left||k.rect.right!==ge.right||k.rect.top!==ge.top||k.rect.bottom!==ge.bottom;k.changed=pe||ne.x!==k.coords.x||ne.y!==k.coords.y}return k}},{key:"applyToInteraction",value:function(i){var a=this.interaction,c=i.phase,p=a.coords.cur,h=a.coords.start,v=this.result,_=this.startDelta,k=v.delta;c==="start"&&ce(this.startDelta,v.delta);for(var T=0,S=[[h,_],[p,k]];T<S.length;T++){var z=S[T],D=z[0],ee=z[1];D.page.x+=ee.x,D.page.y+=ee.y,D.client.x+=ee.x,D.client.y+=ee.y}var Q=this.result.rectDelta,ne=i.rect||a.rect;ne.left+=Q.left,ne.right+=Q.right,ne.top+=Q.top,ne.bottom+=Q.bottom,ne.width=ne.right-ne.left,ne.height=ne.bottom-ne.top}},{key:"setAndApply",value:function(i){var a=this.interaction,c=i.phase,p=i.preEnd,h=i.skipModifiers,v=this.setAll(this.fillArg({preEnd:p,phase:c,pageCoords:i.modifiedCoords||a.coords.cur.page}));if(this.result=v,!v.changed&&(!h||h<this.states.length)&&a.interacting())return!1;if(i.modifiedCoords){var _=a.coords.cur.page,k={x:i.modifiedCoords.x-_.x,y:i.modifiedCoords.y-_.y};v.coords.x+=k.x,v.coords.y+=k.y,v.delta.x+=k.x,v.delta.y+=k.y}this.applyToInteraction(i)}},{key:"beforeEnd",value:function(i){var a=i.interaction,c=i.event,p=this.states;if(p&&p.length){for(var h=!1,v=0;v<p.length;v++){var _=p[v];i.state=_;var k=_.options,T=_.methods,S=T.beforeEnd&&T.beforeEnd(i);if(S)return this.endResult=S,!1;h=h||!h&&this.shouldDo(k,!0,i.phase,!0)}h&&a.move({event:c,preEnd:!0})}}},{key:"stop",value:function(i){var a=i.interaction;if(this.states&&this.states.length){var c=ce({states:this.states,interactable:a.interactable,element:a.element,rect:null},i);this.fillArg(c);for(var p=0,h=this.states;p<h.length;p++){var v=h[p];c.state=v,v.methods.stop&&v.methods.stop(c)}this.states=null,this.endResult=null}}},{key:"prepareStates",value:function(i){this.states=[];for(var a=0;a<i.length;a++){var c=i[a],p=c.options,h=c.methods,v=c.name;this.states.push({options:p,methods:h,index:a,name:v})}return this.states}},{key:"restoreInteractionCoords",value:function(i){var a=i.interaction,c=a.coords,p=a.rect,h=a.modification;if(h.result){for(var v=h.startDelta,_=h.result,k=_.delta,T=_.rectDelta,S=0,z=[[c.start,v],[c.cur,k]];S<z.length;S++){var D=z[S],ee=D[0],Q=D[1];ee.page.x-=Q.x,ee.page.y-=Q.y,ee.client.x-=Q.x,ee.client.y-=Q.y}p.left-=T.left,p.right-=T.right,p.top-=T.top,p.bottom-=T.bottom}}},{key:"shouldDo",value:function(i,a,c,p){return!(!i||i.enabled===!1||p&&!i.endOnly||i.endOnly&&!a||c==="start"&&!i.setStart)}},{key:"copyFrom",value:function(i){this.startOffset=i.startOffset,this.startDelta=i.startDelta,this.startEdges=i.startEdges,this.edges=i.edges,this.states=i.states.map((function(a){return Bt(a)})),this.result=Kt(ce({},i.result.coords),ce({},i.result.rect))}},{key:"destroy",value:function(){for(var i in this)this[i]=null}}]),n})();function Kt(n,i){return{rect:i,coords:n,delta:{x:0,y:0},rectDelta:{left:0,right:0,top:0,bottom:0},eventProps:[],changed:!0}}function Ot(n,i){var a=n.defaults,c={start:n.start,set:n.set,beforeEnd:n.beforeEnd,stop:n.stop},p=function(h){var v=h||{};for(var _ in v.enabled=v.enabled!==!1,a)_ in v||(v[_]=a[_]);var k={options:v,methods:c,name:i,enable:function(){return v.enabled=!0,k},disable:function(){return v.enabled=!1,k}};return k};return i&&typeof i=="string"&&(p._defaults=a,p._methods=c),p}function Ft(n){var i=n.iEvent,a=n.interaction.modification.result;a&&(i.modifiers=a.eventProps)}var Ti={id:"modifiers/base",before:["actions"],install:function(n){n.defaults.perAction.modifiers=[]},listeners:{"interactions:new":function(n){var i=n.interaction;i.modification=new Wt(i)},"interactions:before-action-start":function(n){var i=n.interaction,a=n.interaction.modification;a.start(n,i.coords.start.page),i.edges=a.edges,a.applyToInteraction(n)},"interactions:before-action-move":function(n){var i=n.interaction,a=i.modification,c=a.setAndApply(n);return i.edges=a.edges,c},"interactions:before-action-end":function(n){var i=n.interaction,a=i.modification,c=a.beforeEnd(n);return i.edges=a.startEdges,c},"interactions:action-start":Ft,"interactions:action-move":Ft,"interactions:action-end":Ft,"interactions:after-action-start":function(n){return n.interaction.modification.restoreInteractionCoords(n)},"interactions:after-action-move":function(n){return n.interaction.modification.restoreInteractionCoords(n)},"interactions:stop":function(n){return n.interaction.modification.stop(n)}}},di=Ti,st={base:{preventDefault:"auto",deltaSource:"page"},perAction:{enabled:!1,origin:{x:0,y:0}},actions:{}},ut=(function(n){d(a,n);var i=b(a);function a(c,p,h,v,_,k,T){var S;r(this,a),(S=i.call(this,c)).relatedTarget=null,S.screenX=void 0,S.screenY=void 0,S.button=void 0,S.buttons=void 0,S.ctrlKey=void 0,S.shiftKey=void 0,S.altKey=void 0,S.metaKey=void 0,S.page=void 0,S.client=void 0,S.delta=void 0,S.rect=void 0,S.x0=void 0,S.y0=void 0,S.t0=void 0,S.dt=void 0,S.duration=void 0,S.clientX0=void 0,S.clientY0=void 0,S.velocity=void 0,S.speed=void 0,S.swipe=void 0,S.axes=void 0,S.preEnd=void 0,_=_||c.element;var z=c.interactable,D=(z&&z.options||st).deltaSource,ee=Ce(z,_,h),Q=v==="start",ne=v==="end",ge=Q?g(S):c.prevEvent,pe=Q?c.coords.start:ne?{page:ge.page,client:ge.client,timeStamp:c.coords.cur.timeStamp}:c.coords.cur;return S.page=ce({},pe.page),S.client=ce({},pe.client),S.rect=ce({},c.rect),S.timeStamp=pe.timeStamp,ne||(S.page.x-=ee.x,S.page.y-=ee.y,S.client.x-=ee.x,S.client.y-=ee.y),S.ctrlKey=p.ctrlKey,S.altKey=p.altKey,S.shiftKey=p.shiftKey,S.metaKey=p.metaKey,S.button=p.button,S.buttons=p.buttons,S.target=_,S.currentTarget=_,S.preEnd=k,S.type=T||h+(v||""),S.interactable=z,S.t0=Q?c.pointers[c.pointers.length-1].downTime:ge.t0,S.x0=c.coords.start.page.x-ee.x,S.y0=c.coords.start.page.y-ee.y,S.clientX0=c.coords.start.client.x-ee.x,S.clientY0=c.coords.start.client.y-ee.y,S.delta=Q||ne?{x:0,y:0}:{x:S[D].x-ge[D].x,y:S[D].y-ge[D].y},S.dt=c.coords.delta.timeStamp,S.duration=S.timeStamp-S.t0,S.velocity=ce({},c.coords.velocity[D]),S.speed=$e(S.velocity.x,S.velocity.y),S.swipe=ne||v==="inertiastart"?S.getSwipe():null,S}return l(a,[{key:"getSwipe",value:function(){var c=this._interaction;if(c.prevEvent.speed<600||this.timeStamp-c.prevEvent.timeStamp>150)return null;var p=180*Math.atan2(c.prevEvent.velocityY,c.prevEvent.velocityX)/Math.PI;p<0&&(p+=360);var h=112.5<=p&&p<247.5,v=202.5<=p&&p<337.5;return{up:v,down:!v&&22.5<=p&&p<157.5,left:h,right:!h&&(292.5<=p||p<67.5),angle:p,speed:c.prevEvent.speed,velocity:{x:c.prevEvent.velocityX,y:c.prevEvent.velocityY}}}},{key:"preventDefault",value:function(){}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}}]),a})(xe);Object.defineProperties(ut.prototype,{pageX:{get:function(){return this.page.x},set:function(n){this.page.x=n}},pageY:{get:function(){return this.page.y},set:function(n){this.page.y=n}},clientX:{get:function(){return this.client.x},set:function(n){this.client.x=n}},clientY:{get:function(){return this.client.y},set:function(n){this.client.y=n}},dx:{get:function(){return this.delta.x},set:function(n){this.delta.x=n}},dy:{get:function(){return this.delta.y},set:function(n){this.delta.y=n}},velocityX:{get:function(){return this.velocity.x},set:function(n){this.velocity.x=n}},velocityY:{get:function(){return this.velocity.y},set:function(n){this.velocity.y=n}}});var Nr=l((function n(i,a,c,p,h){r(this,n),this.id=void 0,this.pointer=void 0,this.event=void 0,this.downTime=void 0,this.downTarget=void 0,this.id=i,this.pointer=a,this.event=c,this.downTime=p,this.downTarget=h})),qr=(function(n){return n.interactable="",n.element="",n.prepared="",n.pointerIsDown="",n.pointerWasMoved="",n._proxy="",n})({}),fn=(function(n){return n.start="",n.move="",n.end="",n.stop="",n.interacting="",n})({}),Hr=0,jr=(function(){function n(i){var a=this,c=i.pointerType,p=i.scopeFire;r(this,n),this.interactable=null,this.element=null,this.rect=null,this._rects=void 0,this.edges=null,this._scopeFire=void 0,this.prepared={name:null,axis:null,edges:null},this.pointerType=void 0,this.pointers=[],this.downEvent=null,this.downPointer={},this._latestPointer={pointer:null,event:null,eventTarget:null},this.prevEvent=null,this.pointerIsDown=!1,this.pointerWasMoved=!1,this._interacting=!1,this._ending=!1,this._stopped=!0,this._proxy=void 0,this.simulation=null,this.doMove=ot((function(S){this.move(S)}),"The interaction.doMove() method has been renamed to interaction.move()"),this.coords={start:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},prev:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},cur:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},delta:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},velocity:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0}},this._id=Hr++,this._scopeFire=p,this.pointerType=c;var h=this;this._proxy={};var v=function(S){Object.defineProperty(a._proxy,S,{get:function(){return h[S]}})};for(var _ in qr)v(_);var k=function(S){Object.defineProperty(a._proxy,S,{value:function(){return h[S].apply(h,arguments)}})};for(var T in fn)k(T);this._scopeFire("interactions:new",{interaction:this})}return l(n,[{key:"pointerMoveTolerance",get:function(){return 1}},{key:"pointerDown",value:function(i,a,c){var p=this.updatePointer(i,a,c,!0),h=this.pointers[p];this._scopeFire("interactions:down",{pointer:i,event:a,eventTarget:c,pointerIndex:p,pointerInfo:h,type:"down",interaction:this})}},{key:"start",value:function(i,a,c){return!(this.interacting()||!this.pointerIsDown||this.pointers.length<(i.name==="gesture"?2:1)||!a.options[i.name].enabled)&&(it(this.prepared,i),this.interactable=a,this.element=c,this.rect=a.getRect(c),this.edges=this.prepared.edges?ce({},this.prepared.edges):{left:!0,right:!0,top:!0,bottom:!0},this._stopped=!1,this._interacting=this._doPhase({interaction:this,event:this.downEvent,phase:"start"})&&!this._stopped,this._interacting)}},{key:"pointerMove",value:function(i,a,c){this.simulation||this.modification&&this.modification.endResult||this.updatePointer(i,a,c,!1);var p,h,v=this.coords.cur.page.x===this.coords.prev.page.x&&this.coords.cur.page.y===this.coords.prev.page.y&&this.coords.cur.client.x===this.coords.prev.client.x&&this.coords.cur.client.y===this.coords.prev.client.y;this.pointerIsDown&&!this.pointerWasMoved&&(p=this.coords.cur.client.x-this.coords.start.client.x,h=this.coords.cur.client.y-this.coords.start.client.y,this.pointerWasMoved=$e(p,h)>this.pointerMoveTolerance);var _,k,T,S=this.getPointerIndex(i),z={pointer:i,pointerIndex:S,pointerInfo:this.pointers[S],event:a,type:"move",eventTarget:c,dx:p,dy:h,duplicate:v,interaction:this};v||(_=this.coords.velocity,k=this.coords.delta,T=Math.max(k.timeStamp/1e3,.001),_.page.x=k.page.x/T,_.page.y=k.page.y/T,_.client.x=k.client.x/T,_.client.y=k.client.y/T,_.timeStamp=T),this._scopeFire("interactions:move",z),v||this.simulation||(this.interacting()&&(z.type=null,this.move(z)),this.pointerWasMoved&&St(this.coords.prev,this.coords.cur))}},{key:"move",value:function(i){i&&i.event||De(this.coords.delta),(i=ce({pointer:this._latestPointer.pointer,event:this._latestPointer.event,eventTarget:this._latestPointer.eventTarget,interaction:this},i||{})).phase="move",this._doPhase(i)}},{key:"pointerUp",value:function(i,a,c,p){var h=this.getPointerIndex(i);h===-1&&(h=this.updatePointer(i,a,c,!1));var v=/cancel$/i.test(a.type)?"cancel":"up";this._scopeFire("interactions:".concat(v),{pointer:i,pointerIndex:h,pointerInfo:this.pointers[h],event:a,eventTarget:c,type:v,curEventTarget:p,interaction:this}),this.simulation||this.end(a),this.removePointer(i,a)}},{key:"documentBlur",value:function(i){this.end(i),this._scopeFire("interactions:blur",{event:i,type:"blur",interaction:this})}},{key:"end",value:function(i){var a;this._ending=!0,i=i||this._latestPointer.event,this.interacting()&&(a=this._doPhase({event:i,interaction:this,phase:"end"})),this._ending=!1,a===!0&&this.stop()}},{key:"currentAction",value:function(){return this._interacting?this.prepared.name:null}},{key:"interacting",value:function(){return this._interacting}},{key:"stop",value:function(){this._scopeFire("interactions:stop",{interaction:this}),this.interactable=this.element=null,this._interacting=!1,this._stopped=!0,this.prepared.name=this.prevEvent=null}},{key:"getPointerIndex",value:function(i){var a=dt(i);return this.pointerType==="mouse"||this.pointerType==="pen"?this.pointers.length-1:we(this.pointers,(function(c){return c.id===a}))}},{key:"getPointerInfo",value:function(i){return this.pointers[this.getPointerIndex(i)]}},{key:"updatePointer",value:function(i,a,c,p){var h,v,_,k=dt(i),T=this.getPointerIndex(i),S=this.pointers[T];return p=p!==!1&&(p||/(down|start)$/i.test(a.type)),S?S.pointer=i:(S=new Nr(k,i,a,null,null),T=this.pointers.length,this.pointers.push(S)),Rt(this.coords.cur,this.pointers.map((function(z){return z.pointer})),this._now()),h=this.coords.delta,v=this.coords.prev,_=this.coords.cur,h.page.x=_.page.x-v.page.x,h.page.y=_.page.y-v.page.y,h.client.x=_.client.x-v.client.x,h.client.y=_.client.y-v.client.y,h.timeStamp=_.timeStamp-v.timeStamp,p&&(this.pointerIsDown=!0,S.downTime=this.coords.cur.timeStamp,S.downTarget=c,yt(this.downPointer,i),this.interacting()||(St(this.coords.start,this.coords.cur),St(this.coords.prev,this.coords.cur),this.downEvent=a,this.pointerWasMoved=!1)),this._updateLatestPointer(i,a,c),this._scopeFire("interactions:update-pointer",{pointer:i,event:a,eventTarget:c,down:p,pointerInfo:S,pointerIndex:T,interaction:this}),T}},{key:"removePointer",value:function(i,a){var c=this.getPointerIndex(i);if(c!==-1){var p=this.pointers[c];this._scopeFire("interactions:remove-pointer",{pointer:i,event:a,eventTarget:null,pointerIndex:c,pointerInfo:p,interaction:this}),this.pointers.splice(c,1),this.pointerIsDown=!1}}},{key:"_updateLatestPointer",value:function(i,a,c){this._latestPointer.pointer=i,this._latestPointer.event=a,this._latestPointer.eventTarget=c}},{key:"destroy",value:function(){this._latestPointer.pointer=null,this._latestPointer.event=null,this._latestPointer.eventTarget=null}},{key:"_createPreparedEvent",value:function(i,a,c,p){return new ut(this,i,this.prepared.name,a,this.element,c,p)}},{key:"_fireEvent",value:function(i){var a;(a=this.interactable)==null||a.fire(i),(!this.prevEvent||i.timeStamp>=this.prevEvent.timeStamp)&&(this.prevEvent=i)}},{key:"_doPhase",value:function(i){var a=i.event,c=i.phase,p=i.preEnd,h=i.type,v=this.rect;if(v&&c==="move"&&(Pe(this.edges,v,this.coords.delta[this.interactable.options.deltaSource]),v.width=v.right-v.left,v.height=v.bottom-v.top),this._scopeFire("interactions:before-action-".concat(c),i)===!1)return!1;var _=i.iEvent=this._createPreparedEvent(a,c,p,h);return this._scopeFire("interactions:action-".concat(c),i),c==="start"&&(this.prevEvent=_),this._fireEvent(_),this._scopeFire("interactions:after-action-".concat(c),i),!0}},{key:"_now",value:function(){return Date.now()}}]),n})();function gn(n){mn(n.interaction)}function mn(n){if(!(function(a){return!(!a.offset.pending.x&&!a.offset.pending.y)})(n))return!1;var i=n.offset.pending;return ji(n.coords.cur,i),ji(n.coords.delta,i),Pe(n.edges,n.rect,i),i.x=0,i.y=0,!0}function Yr(n){var i=n.x,a=n.y;this.offset.pending.x+=i,this.offset.pending.y+=a,this.offset.total.x+=i,this.offset.total.y+=a}function ji(n,i){var a=n.page,c=n.client,p=i.x,h=i.y;a.x+=p,a.y+=h,c.x+=p,c.y+=h}fn.offsetBy="";var Wr={id:"offset",before:["modifiers","pointer-events","actions","inertia"],install:function(n){n.Interaction.prototype.offsetBy=Yr},listeners:{"interactions:new":function(n){n.interaction.offset={total:{x:0,y:0},pending:{x:0,y:0}}},"interactions:update-pointer":function(n){return(function(i){i.pointerIsDown&&(ji(i.coords.cur,i.offset.total),i.offset.pending.x=0,i.offset.pending.y=0)})(n.interaction)},"interactions:before-action-start":gn,"interactions:before-action-move":gn,"interactions:before-action-end":function(n){var i=n.interaction;if(mn(i))return i.move({offset:!0}),i.end(),!1},"interactions:stop":function(n){var i=n.interaction;i.offset.total.x=0,i.offset.total.y=0,i.offset.pending.x=0,i.offset.pending.y=0}}},yn=Wr,Kr=(function(){function n(i){r(this,n),this.active=!1,this.isModified=!1,this.smoothEnd=!1,this.allowResume=!1,this.modification=void 0,this.modifierCount=0,this.modifierArg=void 0,this.startCoords=void 0,this.t0=0,this.v0=0,this.te=0,this.targetOffset=void 0,this.modifiedOffset=void 0,this.currentOffset=void 0,this.lambda_v0=0,this.one_ve_v0=0,this.timeout=void 0,this.interaction=void 0,this.interaction=i}return l(n,[{key:"start",value:function(i){var a=this.interaction,c=Oi(a);if(!c||!c.enabled)return!1;var p=a.coords.velocity.client,h=$e(p.x,p.y),v=this.modification||(this.modification=new Wt(a));if(v.copyFrom(a.modification),this.t0=a._now(),this.allowResume=c.allowResume,this.v0=h,this.currentOffset={x:0,y:0},this.startCoords=a.coords.cur.page,this.modifierArg=v.fillArg({pageCoords:this.startCoords,preEnd:!0,phase:"inertiastart"}),this.t0-a.coords.cur.timeStamp<50&&h>c.minSpeed&&h>c.endSpeed)this.startInertia();else{if(v.result=v.setAll(this.modifierArg),!v.result.changed)return!1;this.startSmoothEnd()}return a.modification.result.rect=null,a.offsetBy(this.targetOffset),a._doPhase({interaction:a,event:i,phase:"inertiastart"}),a.offsetBy({x:-this.targetOffset.x,y:-this.targetOffset.y}),a.modification.result.rect=null,this.active=!0,a.simulation=this,!0}},{key:"startInertia",value:function(){var i=this,a=this.interaction.coords.velocity.client,c=Oi(this.interaction),p=c.resistance,h=-Math.log(c.endSpeed/this.v0)/p;this.targetOffset={x:(a.x-h)/p,y:(a.y-h)/p},this.te=h,this.lambda_v0=p/this.v0,this.one_ve_v0=1-c.endSpeed/this.v0;var v=this.modification,_=this.modifierArg;_.pageCoords={x:this.startCoords.x+this.targetOffset.x,y:this.startCoords.y+this.targetOffset.y},v.result=v.setAll(_),v.result.changed&&(this.isModified=!0,this.modifiedOffset={x:this.targetOffset.x+v.result.delta.x,y:this.targetOffset.y+v.result.delta.y}),this.onNextFrame((function(){return i.inertiaTick()}))}},{key:"startSmoothEnd",value:function(){var i=this;this.smoothEnd=!0,this.isModified=!0,this.targetOffset={x:this.modification.result.delta.x,y:this.modification.result.delta.y},this.onNextFrame((function(){return i.smoothEndTick()}))}},{key:"onNextFrame",value:function(i){var a=this;this.timeout=q.request((function(){a.active&&i()}))}},{key:"inertiaTick",value:function(){var i,a,c,p,h,v,_,k=this,T=this.interaction,S=Oi(T).resistance,z=(T._now()-this.t0)/1e3;if(z<this.te){var D,ee=1-(Math.exp(-S*z)-this.lambda_v0)/this.one_ve_v0;this.isModified?(i=0,a=0,c=this.targetOffset.x,p=this.targetOffset.y,h=this.modifiedOffset.x,v=this.modifiedOffset.y,D={x:vn(_=ee,i,c,h),y:vn(_,a,p,v)}):D={x:this.targetOffset.x*ee,y:this.targetOffset.y*ee};var Q={x:D.x-this.currentOffset.x,y:D.y-this.currentOffset.y};this.currentOffset.x+=Q.x,this.currentOffset.y+=Q.y,T.offsetBy(Q),T.move(),this.onNextFrame((function(){return k.inertiaTick()}))}else T.offsetBy({x:this.modifiedOffset.x-this.currentOffset.x,y:this.modifiedOffset.y-this.currentOffset.y}),this.end()}},{key:"smoothEndTick",value:function(){var i=this,a=this.interaction,c=a._now()-this.t0,p=Oi(a).smoothEndDuration;if(c<p){var h={x:bn(c,0,this.targetOffset.x,p),y:bn(c,0,this.targetOffset.y,p)},v={x:h.x-this.currentOffset.x,y:h.y-this.currentOffset.y};this.currentOffset.x+=v.x,this.currentOffset.y+=v.y,a.offsetBy(v),a.move({skipModifiers:this.modifierCount}),this.onNextFrame((function(){return i.smoothEndTick()}))}else a.offsetBy({x:this.targetOffset.x-this.currentOffset.x,y:this.targetOffset.y-this.currentOffset.y}),this.end()}},{key:"resume",value:function(i){var a=i.pointer,c=i.event,p=i.eventTarget,h=this.interaction;h.offsetBy({x:-this.currentOffset.x,y:-this.currentOffset.y}),h.updatePointer(a,c,p,!0),h._doPhase({interaction:h,event:c,phase:"resume"}),St(h.coords.prev,h.coords.cur),this.stop()}},{key:"end",value:function(){this.interaction.move(),this.interaction.end(),this.stop()}},{key:"stop",value:function(){this.active=this.smoothEnd=!1,this.interaction.simulation=null,q.cancel(this.timeout)}}]),n})();function Oi(n){var i=n.interactable,a=n.prepared;return i&&i.options&&a.name&&i.options[a.name].inertia}var $r={id:"inertia",before:["modifiers","actions"],install:function(n){var i=n.defaults;n.usePlugin(yn),n.usePlugin(di),n.actions.phases.inertiastart=!0,n.actions.phases.resume=!0,i.perAction.inertia={enabled:!1,resistance:10,minSpeed:100,endSpeed:10,allowResume:!0,smoothEndDuration:300}},listeners:{"interactions:new":function(n){var i=n.interaction;i.inertia=new Kr(i)},"interactions:before-action-end":function(n){var i=n.interaction,a=n.event;return(!i._interacting||i.simulation||!i.inertia.start(a))&&null},"interactions:down":function(n){var i=n.interaction,a=n.eventTarget,c=i.inertia;if(c.active)for(var p=a;x.element(p);){if(p===i.element){c.resume(n);break}p=Fe(p)}},"interactions:stop":function(n){var i=n.interaction.inertia;i.active&&i.stop()},"interactions:before-action-resume":function(n){var i=n.interaction.modification;i.stop(n),i.start(n,n.interaction.coords.cur.page),i.applyToInteraction(n)},"interactions:before-action-inertiastart":function(n){return n.interaction.modification.setAndApply(n)},"interactions:action-resume":Ft,"interactions:action-inertiastart":Ft,"interactions:after-action-inertiastart":function(n){return n.interaction.modification.restoreInteractionCoords(n)},"interactions:after-action-resume":function(n){return n.interaction.modification.restoreInteractionCoords(n)}}};function vn(n,i,a,c){var p=1-n;return p*p*i+2*p*n*a+n*n*c}function bn(n,i,a,c){return-a*(n/=c)*(n-2)+i}var Ur=$r;function xn(n,i){for(var a=0;a<i.length;a++){var c=i[a];if(n.immediatePropagationStopped)break;c(n)}}var _n=(function(){function n(i){r(this,n),this.options=void 0,this.types={},this.propagationStopped=!1,this.immediatePropagationStopped=!1,this.global=void 0,this.options=ce({},i||{})}return l(n,[{key:"fire",value:function(i){var a,c=this.global;(a=this.types[i.type])&&xn(i,a),!i.propagationStopped&&c&&(a=c[i.type])&&xn(i,a)}},{key:"on",value:function(i,a){var c=Ee(i,a);for(i in c)this.types[i]=_e(this.types[i]||[],c[i])}},{key:"off",value:function(i,a){var c=Ee(i,a);for(i in c){var p=this.types[i];if(p&&p.length)for(var h=0,v=c[i];h<v.length;h++){var _=v[h],k=p.indexOf(_);k!==-1&&p.splice(k,1)}}}},{key:"getRect",value:function(i){return null}}]),n})(),Vr=(function(){function n(i){r(this,n),this.currentTarget=void 0,this.originalEvent=void 0,this.type=void 0,this.originalEvent=i,yt(this,i)}return l(n,[{key:"preventOriginalDefault",value:function(){this.originalEvent.preventDefault()}},{key:"stopPropagation",value:function(){this.originalEvent.stopPropagation()}},{key:"stopImmediatePropagation",value:function(){this.originalEvent.stopImmediatePropagation()}}]),n})();function pi(n){return x.object(n)?{capture:!!n.capture,passive:!!n.passive}:{capture:!!n,passive:!1}}function Pi(n,i){return n===i||(typeof n=="boolean"?!!i.capture===n&&!i.passive:!!n.capture==!!i.capture&&!!n.passive==!!i.passive)}var Gr={id:"events",install:function(n){var i,a=[],c={},p=[],h={add:v,remove:_,addDelegate:function(S,z,D,ee,Q){var ne=pi(Q);if(!c[D]){c[D]=[];for(var ge=0;ge<p.length;ge++){var pe=p[ge];v(pe,D,k),v(pe,D,T,!0)}}var ve=c[D],Ae=F(ve,(function(Ie){return Ie.selector===S&&Ie.context===z}));Ae||(Ae={selector:S,context:z,listeners:[]},ve.push(Ae)),Ae.listeners.push({func:ee,options:ne})},removeDelegate:function(S,z,D,ee,Q){var ne,ge=pi(Q),pe=c[D],ve=!1;if(pe)for(ne=pe.length-1;ne>=0;ne--){var Ae=pe[ne];if(Ae.selector===S&&Ae.context===z){for(var Ie=Ae.listeners,ke=Ie.length-1;ke>=0;ke--){var Te=Ie[ke];if(Te.func===ee&&Pi(Te.options,ge)){Ie.splice(ke,1),Ie.length||(pe.splice(ne,1),_(z,D,k),_(z,D,T,!0)),ve=!0;break}}if(ve)break}}},delegateListener:k,delegateUseCapture:T,delegatedEvents:c,documents:p,targets:a,supportsOptions:!1,supportsPassive:!1};function v(S,z,D,ee){if(S.addEventListener){var Q=pi(ee),ne=F(a,(function(ge){return ge.eventTarget===S}));ne||(ne={eventTarget:S,events:{}},a.push(ne)),ne.events[z]||(ne.events[z]=[]),F(ne.events[z],(function(ge){return ge.func===D&&Pi(ge.options,Q)}))||(S.addEventListener(z,D,h.supportsOptions?Q:Q.capture),ne.events[z].push({func:D,options:Q}))}}function _(S,z,D,ee){if(S.addEventListener&&S.removeEventListener){var Q=we(a,(function(xt){return xt.eventTarget===S})),ne=a[Q];if(ne&&ne.events)if(z!=="all"){var ge=!1,pe=ne.events[z];if(pe){if(D==="all"){for(var ve=pe.length-1;ve>=0;ve--){var Ae=pe[ve];_(S,z,Ae.func,Ae.options)}return}for(var Ie=pi(ee),ke=0;ke<pe.length;ke++){var Te=pe[ke];if(Te.func===D&&Pi(Te.options,Ie)){S.removeEventListener(z,D,h.supportsOptions?Ie:Ie.capture),pe.splice(ke,1),pe.length===0&&(delete ne.events[z],ge=!0);break}}}ge&&!Object.keys(ne.events).length&&a.splice(Q,1)}else for(z in ne.events)ne.events.hasOwnProperty(z)&&_(S,z,"all")}}function k(S,z){for(var D=pi(z),ee=new Vr(S),Q=c[S.type],ne=Z(S)[0],ge=ne;x.element(ge);){for(var pe=0;pe<Q.length;pe++){var ve=Q[pe],Ae=ve.selector,Ie=ve.context;if(Re(ge,Ae)&&me(Ie,ne)&&me(Ie,ge)){var ke=ve.listeners;ee.currentTarget=ge;for(var Te=0;Te<ke.length;Te++){var xt=ke[Te];Pi(xt.options,D)&&xt.func(ee)}}}ge=Fe(ge)}}function T(S){return k(S,!0)}return(i=n.document)==null||i.createElement("div").addEventListener("test",null,{get capture(){return h.supportsOptions=!0},get passive(){return h.supportsPassive=!0}}),n.events=h,h}},Yi={methodOrder:["simulationResume","mouseOrPen","hasPointer","idle"],search:function(n){for(var i=0,a=Yi.methodOrder;i<a.length;i++){var c=a[i],p=Yi[c](n);if(p)return p}return null},simulationResume:function(n){var i=n.pointerType,a=n.eventType,c=n.eventTarget,p=n.scope;if(!/down|start/i.test(a))return null;for(var h=0,v=p.interactions.list;h<v.length;h++){var _=v[h],k=c;if(_.simulation&&_.simulation.allowResume&&_.pointerType===i)for(;k;){if(k===_.element)return _;k=Fe(k)}}return null},mouseOrPen:function(n){var i,a=n.pointerId,c=n.pointerType,p=n.eventType,h=n.scope;if(c!=="mouse"&&c!=="pen")return null;for(var v=0,_=h.interactions.list;v<_.length;v++){var k=_[v];if(k.pointerType===c){if(k.simulation&&!wn(k,a))continue;if(k.interacting())return k;i||(i=k)}}if(i)return i;for(var T=0,S=h.interactions.list;T<S.length;T++){var z=S[T];if(!(z.pointerType!==c||/down/i.test(p)&&z.simulation))return z}return null},hasPointer:function(n){for(var i=n.pointerId,a=0,c=n.scope.interactions.list;a<c.length;a++){var p=c[a];if(wn(p,i))return p}return null},idle:function(n){for(var i=n.pointerType,a=0,c=n.scope.interactions.list;a<c.length;a++){var p=c[a];if(p.pointers.length===1){var h=p.interactable;if(h&&(!h.options.gesture||!h.options.gesture.enabled))continue}else if(p.pointers.length>=2)continue;if(!p.interacting()&&i===p.pointerType)return p}return null}};function wn(n,i){return n.pointers.some((function(a){return a.id===i}))}var Xr=Yi,Wi=["pointerDown","pointerMove","pointerUp","updatePointer","removePointer","windowBlur"];function kn(n,i){return function(a){var c=i.interactions.list,p=K(a),h=Z(a),v=h[0],_=h[1],k=[];if(/^touch/.test(a.type)){i.prevTouchTime=i.now();for(var T=0,S=a.changedTouches;T<S.length;T++){var z=S[T],D={pointer:z,pointerId:dt(z),pointerType:p,eventType:a.type,eventTarget:v,curEventTarget:_,scope:i},ee=Sn(D);k.push([D.pointer,D.eventTarget,D.curEventTarget,ee])}}else{var Q=!1;if(!de.supportsPointerEvent&&/mouse/.test(a.type)){for(var ne=0;ne<c.length&&!Q;ne++)Q=c[ne].pointerType!=="mouse"&&c[ne].pointerIsDown;Q=Q||i.now()-i.prevTouchTime<500||a.timeStamp===0}if(!Q){var ge={pointer:a,pointerId:dt(a),pointerType:p,eventType:a.type,curEventTarget:_,eventTarget:v,scope:i},pe=Sn(ge);k.push([ge.pointer,ge.eventTarget,ge.curEventTarget,pe])}}for(var ve=0;ve<k.length;ve++){var Ae=k[ve],Ie=Ae[0],ke=Ae[1],Te=Ae[2];Ae[3][n](Ie,a,ke,Te)}}}function Sn(n){var i=n.pointerType,a=n.scope,c={interaction:Xr.search(n),searchDetails:n};return a.fire("interactions:find",c),c.interaction||a.interactions.new({pointerType:i})}function Ki(n,i){var a=n.doc,c=n.scope,p=n.options,h=c.interactions.docEvents,v=c.events,_=v[i];for(var k in c.browser.isIOS&&!p.events&&(p.events={passive:!1}),v.delegatedEvents)_(a,k,v.delegateListener),_(a,k,v.delegateUseCapture,!0);for(var T=p&&p.events,S=0;S<h.length;S++){var z=h[S];_(a,z.type,z.listener,T)}}var Jr={id:"core/interactions",install:function(n){for(var i={},a=0;a<Wi.length;a++){var c=Wi[a];i[c]=kn(c,n)}var p,h=de.pEventTypes;function v(){for(var _=0,k=n.interactions.list;_<k.length;_++){var T=k[_];if(T.pointerIsDown&&T.pointerType==="touch"&&!T._interacting)for(var S=function(){var ee=D[z];n.documents.some((function(Q){return me(Q.doc,ee.downTarget)}))||T.removePointer(ee.pointer,ee.event)},z=0,D=T.pointers;z<D.length;z++)S()}}(p=H.PointerEvent?[{type:h.down,listener:v},{type:h.down,listener:i.pointerDown},{type:h.move,listener:i.pointerMove},{type:h.up,listener:i.pointerUp},{type:h.cancel,listener:i.pointerUp}]:[{type:"mousedown",listener:i.pointerDown},{type:"mousemove",listener:i.pointerMove},{type:"mouseup",listener:i.pointerUp},{type:"touchstart",listener:v},{type:"touchstart",listener:i.pointerDown},{type:"touchmove",listener:i.pointerMove},{type:"touchend",listener:i.pointerUp},{type:"touchcancel",listener:i.pointerUp}]).push({type:"blur",listener:function(_){for(var k=0,T=n.interactions.list;k<T.length;k++)T[k].documentBlur(_)}}),n.prevTouchTime=0,n.Interaction=(function(_){d(T,_);var k=b(T);function T(){return r(this,T),k.apply(this,arguments)}return l(T,[{key:"pointerMoveTolerance",get:function(){return n.interactions.pointerMoveTolerance},set:function(S){n.interactions.pointerMoveTolerance=S}},{key:"_now",value:function(){return n.now()}}]),T})(jr),n.interactions={list:[],new:function(_){_.scopeFire=function(T,S){return n.fire(T,S)};var k=new n.Interaction(_);return n.interactions.list.push(k),k},listeners:i,docEvents:p,pointerMoveTolerance:1},n.usePlugin(Zt)},listeners:{"scope:add-document":function(n){return Ki(n,"add")},"scope:remove-document":function(n){return Ki(n,"remove")},"interactable:unset":function(n,i){for(var a=n.interactable,c=i.interactions.list.length-1;c>=0;c--){var p=i.interactions.list[c];p.interactable===a&&(p.stop(),i.fire("interactions:destroy",{interaction:p}),p.destroy(),i.interactions.list.length>2&&i.interactions.list.splice(c,1))}}},onDocSignal:Ki,doOnInteractions:kn,methodNames:Wi},Qr=Jr,Nt=(function(n){return n[n.On=0]="On",n[n.Off=1]="Off",n})(Nt||{}),Zr=(function(){function n(i,a,c,p){r(this,n),this.target=void 0,this.options=void 0,this._actions=void 0,this.events=new _n,this._context=void 0,this._win=void 0,this._doc=void 0,this._scopeEvents=void 0,this._actions=a.actions,this.target=i,this._context=a.context||c,this._win=C(at(i)?this._context:i),this._doc=this._win.document,this._scopeEvents=p,this.set(a)}return l(n,[{key:"_defaults",get:function(){return{base:{},perAction:{},actions:{}}}},{key:"setOnEvents",value:function(i,a){return x.func(a.onstart)&&this.on("".concat(i,"start"),a.onstart),x.func(a.onmove)&&this.on("".concat(i,"move"),a.onmove),x.func(a.onend)&&this.on("".concat(i,"end"),a.onend),x.func(a.oninertiastart)&&this.on("".concat(i,"inertiastart"),a.oninertiastart),this}},{key:"updatePerActionListeners",value:function(i,a,c){var p,h=this,v=(p=this._actions.map[i])==null?void 0:p.filterEventType,_=function(k){return(v==null||v(k))&&ei(k,h._actions)};(x.array(a)||x.object(a))&&this._onOff(Nt.Off,i,a,void 0,_),(x.array(c)||x.object(c))&&this._onOff(Nt.On,i,c,void 0,_)}},{key:"setPerAction",value:function(i,a){var c=this._defaults;for(var p in a){var h=p,v=this.options[i],_=a[h];h==="listeners"&&this.updatePerActionListeners(i,v.listeners,_),x.array(_)?v[h]=he(_):x.plainObject(_)?(v[h]=ce(v[h]||{},Bt(_)),x.object(c.perAction[h])&&"enabled"in c.perAction[h]&&(v[h].enabled=_.enabled!==!1)):x.bool(_)&&x.object(c.perAction[h])?v[h].enabled=_:v[h]=_}}},{key:"getRect",value:function(i){return i=i||(x.element(this.target)?this.target:null),x.string(this.target)&&(i=i||this._context.querySelector(this.target)),tt(i)}},{key:"rectChecker",value:function(i){var a=this;return x.func(i)?(this.getRect=function(c){var p=ce({},i.apply(a,c));return"width"in p||(p.width=p.right-p.left,p.height=p.bottom-p.top),p},this):i===null?(delete this.getRect,this):this.getRect}},{key:"_backCompatOption",value:function(i,a){if(at(a)||x.object(a)){for(var c in this.options[i]=a,this._actions.map)this.options[c][i]=a;return this}return this.options[i]}},{key:"origin",value:function(i){return this._backCompatOption("origin",i)}},{key:"deltaSource",value:function(i){return i==="page"||i==="client"?(this.options.deltaSource=i,this):this.options.deltaSource}},{key:"getAllElements",value:function(){var i=this.target;return x.string(i)?Array.from(this._context.querySelectorAll(i)):x.func(i)&&i.getAllElements?i.getAllElements():x.element(i)?[i]:[]}},{key:"context",value:function(){return this._context}},{key:"inContext",value:function(i){return this._context===i.ownerDocument||me(this._context,i)}},{key:"testIgnoreAllow",value:function(i,a,c){return!this.testIgnore(i.ignoreFrom,a,c)&&this.testAllow(i.allowFrom,a,c)}},{key:"testAllow",value:function(i,a,c){return!i||!!x.element(c)&&(x.string(i)?Qe(c,i,a):!!x.element(i)&&me(i,c))}},{key:"testIgnore",value:function(i,a,c){return!(!i||!x.element(c))&&(x.string(i)?Qe(c,i,a):!!x.element(i)&&me(i,c))}},{key:"fire",value:function(i){return this.events.fire(i),this}},{key:"_onOff",value:function(i,a,c,p,h){x.object(a)&&!x.array(a)&&(p=c,c=null);var v=Ee(a,c,h);for(var _ in v){_==="wheel"&&(_=de.wheelEvent);for(var k=0,T=v[_];k<T.length;k++){var S=T[k];ei(_,this._actions)?this.events[i===Nt.On?"on":"off"](_,S):x.string(this.target)?this._scopeEvents[i===Nt.On?"addDelegate":"removeDelegate"](this.target,this._context,_,S,p):this._scopeEvents[i===Nt.On?"add":"remove"](this.target,_,S,p)}}return this}},{key:"on",value:function(i,a,c){return this._onOff(Nt.On,i,a,c)}},{key:"off",value:function(i,a,c){return this._onOff(Nt.Off,i,a,c)}},{key:"set",value:function(i){var a=this._defaults;for(var c in x.object(i)||(i={}),this.options=Bt(a.base),this._actions.methodDict){var p=c,h=this._actions.methodDict[p];this.options[p]={},this.setPerAction(p,ce(ce({},a.perAction),a.actions[p])),this[h](i[p])}for(var v in i)v!=="getRect"?x.func(this[v])&&this[v](i[v]):this.rectChecker(i.getRect);return this}},{key:"unset",value:function(){if(x.string(this.target))for(var i in this._scopeEvents.delegatedEvents)for(var a=this._scopeEvents.delegatedEvents[i],c=a.length-1;c>=0;c--){var p=a[c],h=p.selector,v=p.context,_=p.listeners;h===this.target&&v===this._context&&a.splice(c,1);for(var k=_.length-1;k>=0;k--)this._scopeEvents.removeDelegate(this.target,this._context,i,_[k][0],_[k][1])}else this._scopeEvents.remove(this.target,"all")}}]),n})(),ea=(function(){function n(i){var a=this;r(this,n),this.list=[],this.selectorMap={},this.scope=void 0,this.scope=i,i.addListeners({"interactable:unset":function(c){var p=c.interactable,h=p.target,v=x.string(h)?a.selectorMap[h]:h[a.scope.id],_=we(v,(function(k){return k===p}));v.splice(_,1)}})}return l(n,[{key:"new",value:function(i,a){a=ce(a||{},{actions:this.scope.actions});var c=new this.scope.Interactable(i,a,this.scope.document,this.scope.events);return this.scope.addDocument(c._doc),this.list.push(c),x.string(i)?(this.selectorMap[i]||(this.selectorMap[i]=[]),this.selectorMap[i].push(c)):(c.target[this.scope.id]||Object.defineProperty(i,this.scope.id,{value:[],configurable:!0}),i[this.scope.id].push(c)),this.scope.fire("interactable:new",{target:i,options:a,interactable:c,win:this.scope._win}),c}},{key:"getExisting",value:function(i,a){var c=a&&a.context||this.scope.document,p=x.string(i),h=p?this.selectorMap[i]:i[this.scope.id];if(h)return F(h,(function(v){return v._context===c&&(p||v.inContext(i))}))}},{key:"forEachMatch",value:function(i,a){for(var c=0,p=this.list;c<p.length;c++){var h=p[c],v=void 0;if((x.string(h.target)?x.element(i)&&Re(i,h.target):i===h.target)&&h.inContext(i)&&(v=a(h)),v!==void 0)return v}}}]),n})(),ta=(function(){function n(){var i=this;r(this,n),this.id="__interact_scope_".concat(Math.floor(100*Math.random())),this.isInitialized=!1,this.listenerMaps=[],this.browser=de,this.defaults=Bt(st),this.Eventable=_n,this.actions={map:{},phases:{start:!0,move:!0,end:!0},methodDict:{},phaselessTypes:{}},this.interactStatic=(function(c){var p=function h(v,_){var k=c.interactables.getExisting(v,_);return k||((k=c.interactables.new(v,_)).events.global=h.globalEvents),k};return p.getPointerAverage=Tt,p.getTouchBBox=ye,p.getTouchDistance=Be,p.getTouchAngle=Xe,p.getElementRect=tt,p.getElementClientRect=Ve,p.matchesSelector=Re,p.closest=Ye,p.globalEvents={},p.version="1.10.27",p.scope=c,p.use=function(h,v){return this.scope.usePlugin(h,v),this},p.isSet=function(h,v){return!!this.scope.interactables.get(h,v&&v.context)},p.on=ot((function(h,v,_){if(x.string(h)&&h.search(" ")!==-1&&(h=h.trim().split(/ +/)),x.array(h)){for(var k=0,T=h;k<T.length;k++){var S=T[k];this.on(S,v,_)}return this}if(x.object(h)){for(var z in h)this.on(z,h[z],v);return this}return ei(h,this.scope.actions)?this.globalEvents[h]?this.globalEvents[h].push(v):this.globalEvents[h]=[v]:this.scope.events.add(this.scope.document,h,v,{options:_}),this}),"The interact.on() method is being deprecated"),p.off=ot((function(h,v,_){if(x.string(h)&&h.search(" ")!==-1&&(h=h.trim().split(/ +/)),x.array(h)){for(var k=0,T=h;k<T.length;k++){var S=T[k];this.off(S,v,_)}return this}if(x.object(h)){for(var z in h)this.off(z,h[z],v);return this}var D;return ei(h,this.scope.actions)?h in this.globalEvents&&(D=this.globalEvents[h].indexOf(v))!==-1&&this.globalEvents[h].splice(D,1):this.scope.events.remove(this.scope.document,h,v,_),this}),"The interact.off() method is being deprecated"),p.debug=function(){return this.scope},p.supportsTouch=function(){return de.supportsTouch},p.supportsPointerEvent=function(){return de.supportsPointerEvent},p.stop=function(){for(var h=0,v=this.scope.interactions.list;h<v.length;h++)v[h].stop();return this},p.pointerMoveTolerance=function(h){return x.number(h)?(this.scope.interactions.pointerMoveTolerance=h,this):this.scope.interactions.pointerMoveTolerance},p.addDocument=function(h,v){this.scope.addDocument(h,v)},p.removeDocument=function(h){this.scope.removeDocument(h)},p})(this),this.InteractEvent=ut,this.Interactable=void 0,this.interactables=new ea(this),this._win=void 0,this.document=void 0,this.window=void 0,this.documents=[],this._plugins={list:[],map:{}},this.onWindowUnload=function(c){return i.removeDocument(c.target)};var a=this;this.Interactable=(function(c){d(h,c);var p=b(h);function h(){return r(this,h),p.apply(this,arguments)}return l(h,[{key:"_defaults",get:function(){return a.defaults}},{key:"set",value:function(v){return m(f(h.prototype),"set",this).call(this,v),a.fire("interactable:set",{options:v,interactable:this}),this}},{key:"unset",value:function(){m(f(h.prototype),"unset",this).call(this);var v=a.interactables.list.indexOf(this);v<0||(a.interactables.list.splice(v,1),a.fire("interactable:unset",{interactable:this}))}}]),h})(Zr)}return l(n,[{key:"addListeners",value:function(i,a){this.listenerMaps.push({id:a,map:i})}},{key:"fire",value:function(i,a){for(var c=0,p=this.listenerMaps;c<p.length;c++){var h=p[c].map[i];if(h&&h(a,this,i)===!1)return!1}}},{key:"init",value:function(i){return this.isInitialized?this:(function(a,c){return a.isInitialized=!0,x.window(c)&&R(c),H.init(c),de.init(c),q.init(c),a.window=c,a.document=c.document,a.usePlugin(Qr),a.usePlugin(Gr),a})(this,i)}},{key:"pluginIsInstalled",value:function(i){var a=i.id;return a?!!this._plugins.map[a]:this._plugins.list.indexOf(i)!==-1}},{key:"usePlugin",value:function(i,a){if(!this.isInitialized)return this;if(this.pluginIsInstalled(i))return this;if(i.id&&(this._plugins.map[i.id]=i),this._plugins.list.push(i),i.install&&i.install(this,a),i.listeners&&i.before){for(var c=0,p=this.listenerMaps.length,h=i.before.reduce((function(_,k){return _[k]=!0,_[En(k)]=!0,_}),{});c<p;c++){var v=this.listenerMaps[c].id;if(v&&(h[v]||h[En(v)]))break}this.listenerMaps.splice(c,0,{id:i.id,map:i.listeners})}else i.listeners&&this.listenerMaps.push({id:i.id,map:i.listeners});return this}},{key:"addDocument",value:function(i,a){if(this.getDocIndex(i)!==-1)return!1;var c=C(i);a=a?ce({},a):{},this.documents.push({doc:i,options:a}),this.events.documents.push(i),i!==this.document&&this.events.add(c,"unload",this.onWindowUnload),this.fire("scope:add-document",{doc:i,window:c,scope:this,options:a})}},{key:"removeDocument",value:function(i){var a=this.getDocIndex(i),c=C(i),p=this.documents[a].options;this.events.remove(c,"unload",this.onWindowUnload),this.documents.splice(a,1),this.events.documents.splice(a,1),this.fire("scope:remove-document",{doc:i,window:c,scope:this,options:p})}},{key:"getDocIndex",value:function(i){for(var a=0;a<this.documents.length;a++)if(this.documents[a].doc===i)return a;return-1}},{key:"getDocOptions",value:function(i){var a=this.getDocIndex(i);return a===-1?null:this.documents[a].options}},{key:"now",value:function(){return(this.window.Date||Date).now()}}]),n})();function En(n){return n&&n.replace(/\/.*$/,"")}var Cn=new ta,bt=Cn.interactStatic,ia=typeof globalThis!="undefined"?globalThis:window;Cn.init(ia);var na=Object.freeze({__proto__:null,edgeTarget:function(){},elements:function(){},grid:function(n){var i=[["x","y"],["left","top"],["right","bottom"],["width","height"]].filter((function(c){var p=c[0],h=c[1];return p in n||h in n})),a=function(c,p){for(var h=n.range,v=n.limits,_=v===void 0?{left:-1/0,right:1/0,top:-1/0,bottom:1/0}:v,k=n.offset,T=k===void 0?{x:0,y:0}:k,S={range:h,grid:n,x:null,y:null},z=0;z<i.length;z++){var D=i[z],ee=D[0],Q=D[1],ne=Math.round((c-T.x)/n[ee]),ge=Math.round((p-T.y)/n[Q]);S[ee]=Math.max(_.left,Math.min(_.right,ne*n[ee]+T.x)),S[Q]=Math.max(_.top,Math.min(_.bottom,ge*n[Q]+T.y))}return S};return a.grid=n,a.coordFields=i,a}}),ra={id:"snappers",install:function(n){var i=n.interactStatic;i.snappers=ce(i.snappers||{},na),i.createSnapGrid=i.snappers.grid}},aa=ra,oa={start:function(n){var i=n.state,a=n.rect,c=n.edges,p=n.pageCoords,h=i.options,v=h.ratio,_=h.enabled,k=i.options,T=k.equalDelta,S=k.modifiers;v==="preserve"&&(v=a.width/a.height),i.startCoords=ce({},p),i.startRect=ce({},a),i.ratio=v,i.equalDelta=T;var z=i.linkedEdges={top:c.top||c.left&&!c.bottom,left:c.left||c.top&&!c.right,bottom:c.bottom||c.right&&!c.top,right:c.right||c.bottom&&!c.left};if(i.xIsPrimaryAxis=!(!c.left&&!c.right),i.equalDelta){var D=(z.left?1:-1)*(z.top?1:-1);i.edgeSign={x:D,y:D}}else i.edgeSign={x:z.left?-1:1,y:z.top?-1:1};if(_!==!1&&ce(c,z),S!=null&&S.length){var ee=new Wt(n.interaction);ee.copyFrom(n.interaction.modification),ee.prepareStates(S),i.subModification=ee,ee.startAll(u({},n))}},set:function(n){var i=n.state,a=n.rect,c=n.coords,p=i.linkedEdges,h=ce({},c),v=i.equalDelta?sa:ca;if(ce(n.edges,p),v(i,i.xIsPrimaryAxis,c,a),!i.subModification)return null;var _=ce({},a);Pe(p,_,{x:c.x-h.x,y:c.y-h.y});var k=i.subModification.setAll(u(u({},n),{},{rect:_,edges:p,pageCoords:c,prevCoords:c,prevRect:_})),T=k.delta;return k.changed&&(v(i,Math.abs(T.x)>Math.abs(T.y),k.coords,k.rect),ce(c,k.coords)),k.eventProps},defaults:{ratio:"preserve",equalDelta:!1,modifiers:[],enabled:!1}};function sa(n,i,a){var c=n.startCoords,p=n.edgeSign;i?a.y=c.y+(a.x-c.x)*p.y:a.x=c.x+(a.y-c.y)*p.x}function ca(n,i,a,c){var p=n.startRect,h=n.startCoords,v=n.ratio,_=n.edgeSign;if(i){var k=c.width/v;a.y=h.y+(k-p.height)*_.y}else{var T=c.height*v;a.x=h.x+(T-p.width)*_.x}}var la=Ot(oa,"aspectRatio"),An=function(){};An._defaults={};var Li=An;function $t(n,i,a){return x.func(n)?Ge(n,i.interactable,i.element,[a.x,a.y,i]):Ge(n,i.interactable,i.element)}var zi={start:function(n){var i=n.rect,a=n.startOffset,c=n.state,p=n.interaction,h=n.pageCoords,v=c.options,_=v.elementRect,k=ce({left:0,top:0,right:0,bottom:0},v.offset||{});if(i&&_){var T=$t(v.restriction,p,h);if(T){var S=T.right-T.left-i.width,z=T.bottom-T.top-i.height;S<0&&(k.left+=S,k.right+=S),z<0&&(k.top+=z,k.bottom+=z)}k.left+=a.left-i.width*_.left,k.top+=a.top-i.height*_.top,k.right+=a.right-i.width*(1-_.right),k.bottom+=a.bottom-i.height*(1-_.bottom)}c.offset=k},set:function(n){var i=n.coords,a=n.interaction,c=n.state,p=c.options,h=c.offset,v=$t(p.restriction,a,i);if(v){var _=(function(k){return!k||"left"in k&&"top"in k||((k=ce({},k)).left=k.x||0,k.top=k.y||0,k.right=k.right||k.left+k.width,k.bottom=k.bottom||k.top+k.height),k})(v);i.x=Math.max(Math.min(_.right-h.right,i.x),_.left+h.left),i.y=Math.max(Math.min(_.bottom-h.bottom,i.y),_.top+h.top)}},defaults:{restriction:null,elementRect:null,offset:null,endOnly:!1,enabled:!1}},da=Ot(zi,"restrict"),Tn={top:1/0,left:1/0,bottom:-1/0,right:-1/0},On={top:-1/0,left:-1/0,bottom:1/0,right:1/0};function Pn(n,i){for(var a=0,c=["top","left","bottom","right"];a<c.length;a++){var p=c[a];p in n||(n[p]=i[p])}return n}var ui={noInner:Tn,noOuter:On,start:function(n){var i,a=n.interaction,c=n.startOffset,p=n.state,h=p.options;h&&(i=Oe($t(h.offset,a,a.coords.start.page))),i=i||{x:0,y:0},p.offset={top:i.y+c.top,left:i.x+c.left,bottom:i.y-c.bottom,right:i.x-c.right}},set:function(n){var i=n.coords,a=n.edges,c=n.interaction,p=n.state,h=p.offset,v=p.options;if(a){var _=ce({},i),k=$t(v.inner,c,_)||{},T=$t(v.outer,c,_)||{};Pn(k,Tn),Pn(T,On),a.top?i.y=Math.min(Math.max(T.top+h.top,_.y),k.top+h.top):a.bottom&&(i.y=Math.max(Math.min(T.bottom+h.bottom,_.y),k.bottom+h.bottom)),a.left?i.x=Math.min(Math.max(T.left+h.left,_.x),k.left+h.left):a.right&&(i.x=Math.max(Math.min(T.right+h.right,_.x),k.right+h.right))}},defaults:{inner:null,outer:null,offset:null,endOnly:!1,enabled:!1}},pa=Ot(ui,"restrictEdges"),ua=ce({get elementRect(){return{top:0,left:0,bottom:1,right:1}},set elementRect(n){}},zi.defaults),ha=Ot({start:zi.start,set:zi.set,defaults:ua},"restrictRect"),fa={width:-1/0,height:-1/0},ga={width:1/0,height:1/0},ma=Ot({start:function(n){return ui.start(n)},set:function(n){var i=n.interaction,a=n.state,c=n.rect,p=n.edges,h=a.options;if(p){var v=le($t(h.min,i,n.coords))||fa,_=le($t(h.max,i,n.coords))||ga;a.options={endOnly:h.endOnly,inner:ce({},ui.noInner),outer:ce({},ui.noOuter)},p.top?(a.options.inner.top=c.bottom-v.height,a.options.outer.top=c.bottom-_.height):p.bottom&&(a.options.inner.bottom=c.top+v.height,a.options.outer.bottom=c.top+_.height),p.left?(a.options.inner.left=c.right-v.width,a.options.outer.left=c.right-_.width):p.right&&(a.options.inner.right=c.left+v.width,a.options.outer.right=c.left+_.width),ui.set(n),a.options=h}},defaults:{min:null,max:null,endOnly:!1,enabled:!1}},"restrictSize"),$i={start:function(n){var i,a=n.interaction,c=n.interactable,p=n.element,h=n.rect,v=n.state,_=n.startOffset,k=v.options,T=k.offsetWithOrigin?(function(D){var ee=D.interaction.element,Q=Oe(Ge(D.state.options.origin,null,null,[ee])),ne=Q||Ce(D.interactable,ee,D.interaction.prepared.name);return ne})(n):{x:0,y:0};if(k.offset==="startCoords")i={x:a.coords.start.page.x,y:a.coords.start.page.y};else{var S=Ge(k.offset,c,p,[a]);(i=Oe(S)||{x:0,y:0}).x+=T.x,i.y+=T.y}var z=k.relativePoints;v.offsets=h&&z&&z.length?z.map((function(D,ee){return{index:ee,relativePoint:D,x:_.left-h.width*D.x+i.x,y:_.top-h.height*D.y+i.y}})):[{index:0,relativePoint:null,x:i.x,y:i.y}]},set:function(n){var i=n.interaction,a=n.coords,c=n.state,p=c.options,h=c.offsets,v=Ce(i.interactable,i.element,i.prepared.name),_=ce({},a),k=[];p.offsetWithOrigin||(_.x-=v.x,_.y-=v.y);for(var T=0,S=h;T<S.length;T++)for(var z=S[T],D=_.x-z.x,ee=_.y-z.y,Q=0,ne=p.targets.length;Q<ne;Q++){var ge=p.targets[Q],pe=void 0;(pe=x.func(ge)?ge(D,ee,i._proxy,z,Q):ge)&&k.push({x:(x.number(pe.x)?pe.x:D)+z.x,y:(x.number(pe.y)?pe.y:ee)+z.y,range:x.number(pe.range)?pe.range:p.range,source:ge,index:Q,offset:z})}for(var ve={target:null,inRange:!1,distance:0,range:0,delta:{x:0,y:0}},Ae=0;Ae<k.length;Ae++){var Ie=k[Ae],ke=Ie.range,Te=Ie.x-_.x,xt=Ie.y-_.y,Ze=$e(Te,xt),Et=Ze<=ke;ke===1/0&&ve.inRange&&ve.range!==1/0&&(Et=!1),ve.target&&!(Et?ve.inRange&&ke!==1/0?Ze/ke<ve.distance/ve.range:ke===1/0&&ve.range!==1/0||Ze<ve.distance:!ve.inRange&&Ze<ve.distance)||(ve.target=Ie,ve.distance=Ze,ve.range=ke,ve.inRange=Et,ve.delta.x=Te,ve.delta.y=xt)}return ve.inRange&&(a.x=ve.target.x,a.y=ve.target.y),c.closest=ve,ve},defaults:{range:1/0,targets:null,offset:null,offsetWithOrigin:!0,origin:null,relativePoints:null,endOnly:!1,enabled:!1}},ya=Ot($i,"snap"),Mi={start:function(n){var i=n.state,a=n.edges,c=i.options;if(!a)return null;n.state={options:{targets:null,relativePoints:[{x:a.left?0:1,y:a.top?0:1}],offset:c.offset||"self",origin:{x:0,y:0},range:c.range}},i.targetFields=i.targetFields||[["width","height"],["x","y"]],$i.start(n),i.offsets=n.state.offsets,n.state=i},set:function(n){var i=n.interaction,a=n.state,c=n.coords,p=a.options,h=a.offsets,v={x:c.x-h[0].x,y:c.y-h[0].y};a.options=ce({},p),a.options.targets=[];for(var _=0,k=p.targets||[];_<k.length;_++){var T=k[_],S=void 0;if(S=x.func(T)?T(v.x,v.y,i):T){for(var z=0,D=a.targetFields;z<D.length;z++){var ee=D[z],Q=ee[0],ne=ee[1];if(Q in S||ne in S){S.x=S[Q],S.y=S[ne];break}}a.options.targets.push(S)}}var ge=$i.set(n);return a.options=p,ge},defaults:{range:1/0,targets:null,offset:null,endOnly:!1,enabled:!1}},va=Ot(Mi,"snapSize"),Ui={aspectRatio:la,restrictEdges:pa,restrict:da,restrictRect:ha,restrictSize:ma,snapEdges:Ot({start:function(n){var i=n.edges;return i?(n.state.targetFields=n.state.targetFields||[[i.left?"left":"right",i.top?"top":"bottom"]],Mi.start(n)):null},set:Mi.set,defaults:ce(Bt(Mi.defaults),{targets:void 0,range:void 0,offset:{x:0,y:0}})},"snapEdges"),snap:ya,snapSize:va,spring:Li,avoid:Li,transform:Li,rubberband:Li},ba={id:"modifiers",install:function(n){var i=n.interactStatic;for(var a in n.usePlugin(di),n.usePlugin(aa),i.modifiers=Ui,Ui){var c=Ui[a],p=c._defaults,h=c._methods;p._methods=h,n.defaults.perAction[a]=p}}},xa=ba,Ln=(function(n){d(a,n);var i=b(a);function a(c,p,h,v,_,k){var T;if(r(this,a),yt(g(T=i.call(this,_)),h),h!==p&&yt(g(T),p),T.timeStamp=k,T.originalEvent=h,T.type=c,T.pointerId=dt(p),T.pointerType=K(p),T.target=v,T.currentTarget=null,c==="tap"){var S=_.getPointerIndex(p);T.dt=T.timeStamp-_.pointers[S].downTime;var z=T.timeStamp-_.tapTime;T.double=!!_.prevTap&&_.prevTap.type!=="doubletap"&&_.prevTap.target===T.target&&z<500}else c==="doubletap"&&(T.dt=p.timeStamp-_.tapTime,T.double=!0);return T}return l(a,[{key:"_subtractOrigin",value:function(c){var p=c.x,h=c.y;return this.pageX-=p,this.pageY-=h,this.clientX-=p,this.clientY-=h,this}},{key:"_addOrigin",value:function(c){var p=c.x,h=c.y;return this.pageX+=p,this.pageY+=h,this.clientX+=p,this.clientY+=h,this}},{key:"preventDefault",value:function(){this.originalEvent.preventDefault()}}]),a})(xe),hi={id:"pointer-events/base",before:["inertia","modifiers","auto-start","actions"],install:function(n){n.pointerEvents=hi,n.defaults.actions.pointerEvents=hi.defaults,ce(n.actions.phaselessTypes,hi.types)},listeners:{"interactions:new":function(n){var i=n.interaction;i.prevTap=null,i.tapTime=0},"interactions:update-pointer":function(n){var i=n.down,a=n.pointerInfo;!i&&a.hold||(a.hold={duration:1/0,timeout:null})},"interactions:move":function(n,i){var a=n.interaction,c=n.pointer,p=n.event,h=n.eventTarget;n.duplicate||a.pointerIsDown&&!a.pointerWasMoved||(a.pointerIsDown&&Vi(n),qt({interaction:a,pointer:c,event:p,eventTarget:h,type:"move"},i))},"interactions:down":function(n,i){(function(a,c){for(var p=a.interaction,h=a.pointer,v=a.event,_=a.eventTarget,k=a.pointerIndex,T=p.pointers[k].hold,S=ft(_),z={interaction:p,pointer:h,event:v,eventTarget:_,type:"hold",targets:[],path:S,node:null},D=0;D<S.length;D++){var ee=S[D];z.node=ee,c.fire("pointerEvents:collect-targets",z)}if(z.targets.length){for(var Q=1/0,ne=0,ge=z.targets;ne<ge.length;ne++){var pe=ge[ne].eventable.options.holdDuration;pe<Q&&(Q=pe)}T.duration=Q,T.timeout=setTimeout((function(){qt({interaction:p,eventTarget:_,pointer:h,event:v,type:"hold"},c)}),Q)}})(n,i),qt(n,i)},"interactions:up":function(n,i){Vi(n),qt(n,i),(function(a,c){var p=a.interaction,h=a.pointer,v=a.event,_=a.eventTarget;p.pointerWasMoved||qt({interaction:p,eventTarget:_,pointer:h,event:v,type:"tap"},c)})(n,i)},"interactions:cancel":function(n,i){Vi(n),qt(n,i)}},PointerEvent:Ln,fire:qt,collectEventTargets:zn,defaults:{holdDuration:600,ignoreFrom:null,allowFrom:null,origin:{x:0,y:0}},types:{down:!0,move:!0,up:!0,cancel:!0,tap:!0,doubletap:!0,hold:!0}};function qt(n,i){var a=n.interaction,c=n.pointer,p=n.event,h=n.eventTarget,v=n.type,_=n.targets,k=_===void 0?zn(n,i):_,T=new Ln(v,c,p,h,a,i.now());i.fire("pointerEvents:new",{pointerEvent:T});for(var S={interaction:a,pointer:c,event:p,eventTarget:h,targets:k,type:v,pointerEvent:T},z=0;z<k.length;z++){var D=k[z];for(var ee in D.props||{})T[ee]=D.props[ee];var Q=Ce(D.eventable,D.node);if(T._subtractOrigin(Q),T.eventable=D.eventable,T.currentTarget=D.node,D.eventable.fire(T),T._addOrigin(Q),T.immediatePropagationStopped||T.propagationStopped&&z+1<k.length&&k[z+1].node!==T.currentTarget)break}if(i.fire("pointerEvents:fired",S),v==="tap"){var ne=T.double?qt({interaction:a,pointer:c,event:p,eventTarget:h,type:"doubletap"},i):T;a.prevTap=ne,a.tapTime=ne.timeStamp}return T}function zn(n,i){var a=n.interaction,c=n.pointer,p=n.event,h=n.eventTarget,v=n.type,_=a.getPointerIndex(c),k=a.pointers[_];if(v==="tap"&&(a.pointerWasMoved||!k||k.downTarget!==h))return[];for(var T=ft(h),S={interaction:a,pointer:c,event:p,eventTarget:h,type:v,path:T,targets:[],node:null},z=0;z<T.length;z++){var D=T[z];S.node=D,i.fire("pointerEvents:collect-targets",S)}return v==="hold"&&(S.targets=S.targets.filter((function(ee){var Q,ne;return ee.eventable.options.holdDuration===((Q=a.pointers[_])==null||(ne=Q.hold)==null?void 0:ne.duration)}))),S.targets}function Vi(n){var i=n.interaction,a=n.pointerIndex,c=i.pointers[a].hold;c&&c.timeout&&(clearTimeout(c.timeout),c.timeout=null)}var _a=Object.freeze({__proto__:null,default:hi});function wa(n){var i=n.interaction;i.holdIntervalHandle&&(clearInterval(i.holdIntervalHandle),i.holdIntervalHandle=null)}var ka={id:"pointer-events/holdRepeat",install:function(n){n.usePlugin(hi);var i=n.pointerEvents;i.defaults.holdRepeatInterval=0,i.types.holdrepeat=n.actions.phaselessTypes.holdrepeat=!0},listeners:["move","up","cancel","endall"].reduce((function(n,i){return n["pointerEvents:".concat(i)]=wa,n}),{"pointerEvents:new":function(n){var i=n.pointerEvent;i.type==="hold"&&(i.count=(i.count||0)+1)},"pointerEvents:fired":function(n,i){var a=n.interaction,c=n.pointerEvent,p=n.eventTarget,h=n.targets;if(c.type==="hold"&&h.length){var v=h[0].eventable.options.holdRepeatInterval;v<=0||(a.holdIntervalHandle=setTimeout((function(){i.pointerEvents.fire({interaction:a,eventTarget:p,type:"hold",pointer:c,event:c},i)}),v))}}})},Sa=ka,Ea={id:"pointer-events/interactableTargets",install:function(n){var i=n.Interactable;i.prototype.pointerEvents=function(c){return ce(this.events.options,c),this};var a=i.prototype._backCompatOption;i.prototype._backCompatOption=function(c,p){var h=a.call(this,c,p);return h===this&&(this.events.options[c]=p),h}},listeners:{"pointerEvents:collect-targets":function(n,i){var a=n.targets,c=n.node,p=n.type,h=n.eventTarget;i.interactables.forEachMatch(c,(function(v){var _=v.events,k=_.options;_.types[p]&&_.types[p].length&&v.testIgnoreAllow(k,c,h)&&a.push({node:c,eventable:_,props:{interactable:v}})}))},"interactable:new":function(n){var i=n.interactable;i.events.getRect=function(a){return i.getRect(a)}},"interactable:set":function(n,i){var a=n.interactable,c=n.options;ce(a.events.options,i.pointerEvents.defaults),ce(a.events.options,c.pointerEvents||{})}}},Ca=Ea,Aa={id:"pointer-events",install:function(n){n.usePlugin(_a),n.usePlugin(Sa),n.usePlugin(Ca)}},Ta=Aa,Oa={id:"reflow",install:function(n){var i=n.Interactable;n.actions.phases.reflow=!0,i.prototype.reflow=function(a){return(function(c,p,h){for(var v=c.getAllElements(),_=h.window.Promise,k=_?[]:null,T=function(){var z=v[S],D=c.getRect(z);if(!D)return 1;var ee,Q=F(h.interactions.list,(function(pe){return pe.interacting()&&pe.interactable===c&&pe.element===z&&pe.prepared.name===p.name}));if(Q)Q.move(),k&&(ee=Q._reflowPromise||new _((function(pe){Q._reflowResolve=pe})));else{var ne=le(D),ge=(function(pe){return{coords:pe,get page(){return this.coords.page},get client(){return this.coords.client},get timeStamp(){return this.coords.timeStamp},get pageX(){return this.coords.page.x},get pageY(){return this.coords.page.y},get clientX(){return this.coords.client.x},get clientY(){return this.coords.client.y},get pointerId(){return this.coords.pointerId},get target(){return this.coords.target},get type(){return this.coords.type},get pointerType(){return this.coords.pointerType},get buttons(){return this.coords.buttons},preventDefault:function(){}}})({page:{x:ne.x,y:ne.y},client:{x:ne.x,y:ne.y},timeStamp:h.now()});ee=(function(pe,ve,Ae,Ie,ke){var Te=pe.interactions.new({pointerType:"reflow"}),xt={interaction:Te,event:ke,pointer:ke,eventTarget:Ae,phase:"reflow"};Te.interactable=ve,Te.element=Ae,Te.prevEvent=ke,Te.updatePointer(ke,ke,Ae,!0),De(Te.coords.delta),it(Te.prepared,Ie),Te._doPhase(xt);var Ze=pe.window,Et=Ze.Promise,Pt=Et?new Et((function(Mt){Te._reflowResolve=Mt})):void 0;return Te._reflowPromise=Pt,Te.start(Ie,ve,Ae),Te._interacting?(Te.move(xt),Te.end(ke)):(Te.stop(),Te._reflowResolve()),Te.removePointer(ke,ke),Pt})(h,c,z,p,ge)}k&&k.push(ee)},S=0;S<v.length&&!T();S++);return k&&_.all(k).then((function(){return c}))})(this,a,n)}},listeners:{"interactions:stop":function(n,i){var a=n.interaction;a.pointerType==="reflow"&&(a._reflowResolve&&a._reflowResolve(),(function(c,p){c.splice(c.indexOf(p),1)})(i.interactions.list,a))}}},Pa=Oa;if(bt.use(Zt),bt.use(yn),bt.use(Ta),bt.use(Ur),bt.use(xa),bt.use(Ei),bt.use(Y),bt.use(pt),bt.use(Pa),bt.default=bt,(typeof Ut=="undefined"?"undefined":t(Ut))==="object"&&Ut)try{Ut.exports=bt}catch{}return bt.default=bt,bt}))});var Fr=Na(In(),1);function Xn(e){return typeof e=="undefined"||e===null}function qa(e){return typeof e=="object"&&e!==null}function Ha(e){return Array.isArray(e)?e:Xn(e)?[]:[e]}function ja(e,u){var t,r,o,l;if(u)for(l=Object.keys(u),t=0,r=l.length;t<r;t+=1)o=l[t],e[o]=u[o];return e}function Ya(e,u){var t="",r;for(r=0;r<u;r+=1)t+=e;return t}function Wa(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var Ka=Xn,$a=qa,Ua=Ha,Va=Ya,Ga=Wa,Xa=ja,lt={isNothing:Ka,isObject:$a,toArray:Ua,repeat:Va,isNegativeZero:Ga,extend:Xa};function Jn(e,u){var t="",r=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(t+='in "'+e.mark.name+'" '),t+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!u&&e.mark.snippet&&(t+=`

`+e.mark.snippet),r+" "+t):r}function mi(e,u){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=u,this.message=Jn(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}mi.prototype=Object.create(Error.prototype);mi.prototype.constructor=mi;mi.prototype.toString=function(u){return this.name+": "+Jn(this,u)};var _t=mi;function Ji(e,u,t,r,o){var l="",s="",d=Math.floor(o/2)-1;return r-u>d&&(l=" ... ",u=r-d+l.length),t-r>d&&(s=" ...",t=r+d-s.length),{str:l+e.slice(u,t).replace(/\t/g,"\u2192")+s,pos:r-u+l.length}}function Qi(e,u){return lt.repeat(" ",u-e.length)+e}function Ja(e,u){if(u=Object.create(u||null),!e.buffer)return null;u.maxLength||(u.maxLength=79),typeof u.indent!="number"&&(u.indent=1),typeof u.linesBefore!="number"&&(u.linesBefore=3),typeof u.linesAfter!="number"&&(u.linesAfter=2);for(var t=/\r?\n|\r|\0/g,r=[0],o=[],l,s=-1;l=t.exec(e.buffer);)o.push(l.index),r.push(l.index+l[0].length),e.position<=l.index&&s<0&&(s=r.length-2);s<0&&(s=r.length-1);var d="",f,y,g=Math.min(e.line+u.linesAfter,o.length).toString().length,b=u.maxLength-(u.indent+g+3);for(f=1;f<=u.linesBefore&&!(s-f<0);f++)y=Ji(e.buffer,r[s-f],o[s-f],e.position-(r[s]-r[s-f]),b),d=lt.repeat(" ",u.indent)+Qi((e.line-f+1).toString(),g)+" | "+y.str+`
`+d;for(y=Ji(e.buffer,r[s],o[s],e.position,b),d+=lt.repeat(" ",u.indent)+Qi((e.line+1).toString(),g)+" | "+y.str+`
`,d+=lt.repeat("-",u.indent+g+3+y.pos)+`^
`,f=1;f<=u.linesAfter&&!(s+f>=o.length);f++)y=Ji(e.buffer,r[s+f],o[s+f],e.position-(r[s]-r[s+f]),b),d+=lt.repeat(" ",u.indent)+Qi((e.line+f+1).toString(),g)+" | "+y.str+`
`;return d.replace(/\n$/,"")}var Qa=Ja,Za=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],eo=["scalar","sequence","mapping"];function to(e){var u={};return e!==null&&Object.keys(e).forEach(function(t){e[t].forEach(function(r){u[String(r)]=t})}),u}function io(e,u){if(u=u||{},Object.keys(u).forEach(function(t){if(Za.indexOf(t)===-1)throw new _t('Unknown option "'+t+'" is met in definition of "'+e+'" YAML type.')}),this.options=u,this.tag=e,this.kind=u.kind||null,this.resolve=u.resolve||function(){return!0},this.construct=u.construct||function(t){return t},this.instanceOf=u.instanceOf||null,this.predicate=u.predicate||null,this.represent=u.represent||null,this.representName=u.representName||null,this.defaultStyle=u.defaultStyle||null,this.multi=u.multi||!1,this.styleAliases=to(u.styleAliases||null),eo.indexOf(this.kind)===-1)throw new _t('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var ht=io;function Rn(e,u){var t=[];return e[u].forEach(function(r){var o=t.length;t.forEach(function(l,s){l.tag===r.tag&&l.kind===r.kind&&l.multi===r.multi&&(o=s)}),t[o]=r}),t}function no(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},u,t;function r(o){o.multi?(e.multi[o.kind].push(o),e.multi.fallback.push(o)):e[o.kind][o.tag]=e.fallback[o.tag]=o}for(u=0,t=arguments.length;u<t;u+=1)arguments[u].forEach(r);return e}function en(e){return this.extend(e)}en.prototype.extend=function(u){var t=[],r=[];if(u instanceof ht)r.push(u);else if(Array.isArray(u))r=r.concat(u);else if(u&&(Array.isArray(u.implicit)||Array.isArray(u.explicit)))u.implicit&&(t=t.concat(u.implicit)),u.explicit&&(r=r.concat(u.explicit));else throw new _t("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");t.forEach(function(l){if(!(l instanceof ht))throw new _t("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(l.loadKind&&l.loadKind!=="scalar")throw new _t("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(l.multi)throw new _t("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),r.forEach(function(l){if(!(l instanceof ht))throw new _t("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var o=Object.create(en.prototype);return o.implicit=(this.implicit||[]).concat(t),o.explicit=(this.explicit||[]).concat(r),o.compiledImplicit=Rn(o,"implicit"),o.compiledExplicit=Rn(o,"explicit"),o.compiledTypeMap=no(o.compiledImplicit,o.compiledExplicit),o};var Qn=en,Zn=new ht("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),er=new ht("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),tr=new ht("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),ir=new Qn({explicit:[Zn,er,tr]});function ro(e){if(e===null)return!0;var u=e.length;return u===1&&e==="~"||u===4&&(e==="null"||e==="Null"||e==="NULL")}function ao(){return null}function oo(e){return e===null}var nr=new ht("tag:yaml.org,2002:null",{kind:"scalar",resolve:ro,construct:ao,predicate:oo,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function so(e){if(e===null)return!1;var u=e.length;return u===4&&(e==="true"||e==="True"||e==="TRUE")||u===5&&(e==="false"||e==="False"||e==="FALSE")}function co(e){return e==="true"||e==="True"||e==="TRUE"}function lo(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var rr=new ht("tag:yaml.org,2002:bool",{kind:"scalar",resolve:so,construct:co,predicate:lo,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function po(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function uo(e){return 48<=e&&e<=55}function ho(e){return 48<=e&&e<=57}function fo(e){if(e===null)return!1;var u=e.length,t=0,r=!1,o;if(!u)return!1;if(o=e[t],(o==="-"||o==="+")&&(o=e[++t]),o==="0"){if(t+1===u)return!0;if(o=e[++t],o==="b"){for(t++;t<u;t++)if(o=e[t],o!=="_"){if(o!=="0"&&o!=="1")return!1;r=!0}return r&&o!=="_"}if(o==="x"){for(t++;t<u;t++)if(o=e[t],o!=="_"){if(!po(e.charCodeAt(t)))return!1;r=!0}return r&&o!=="_"}if(o==="o"){for(t++;t<u;t++)if(o=e[t],o!=="_"){if(!uo(e.charCodeAt(t)))return!1;r=!0}return r&&o!=="_"}}if(o==="_")return!1;for(;t<u;t++)if(o=e[t],o!=="_"){if(!ho(e.charCodeAt(t)))return!1;r=!0}return!(!r||o==="_")}function go(e){var u=e,t=1,r;if(u.indexOf("_")!==-1&&(u=u.replace(/_/g,"")),r=u[0],(r==="-"||r==="+")&&(r==="-"&&(t=-1),u=u.slice(1),r=u[0]),u==="0")return 0;if(r==="0"){if(u[1]==="b")return t*parseInt(u.slice(2),2);if(u[1]==="x")return t*parseInt(u.slice(2),16);if(u[1]==="o")return t*parseInt(u.slice(2),8)}return t*parseInt(u,10)}function mo(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!lt.isNegativeZero(e)}var ar=new ht("tag:yaml.org,2002:int",{kind:"scalar",resolve:fo,construct:go,predicate:mo,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),yo=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function vo(e){return!(e===null||!yo.test(e)||e[e.length-1]==="_")}function bo(e){var u,t;return u=e.replace(/_/g,"").toLowerCase(),t=u[0]==="-"?-1:1,"+-".indexOf(u[0])>=0&&(u=u.slice(1)),u===".inf"?t===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:u===".nan"?NaN:t*parseFloat(u,10)}var xo=/^[-+]?[0-9]+e/;function _o(e,u){var t;if(isNaN(e))switch(u){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(u){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(u){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(lt.isNegativeZero(e))return"-0.0";return t=e.toString(10),xo.test(t)?t.replace("e",".e"):t}function wo(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||lt.isNegativeZero(e))}var or=new ht("tag:yaml.org,2002:float",{kind:"scalar",resolve:vo,construct:bo,predicate:wo,represent:_o,defaultStyle:"lowercase"}),sr=ir.extend({implicit:[nr,rr,ar,or]}),cr=sr,lr=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),dr=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function ko(e){return e===null?!1:lr.exec(e)!==null||dr.exec(e)!==null}function So(e){var u,t,r,o,l,s,d,f=0,y=null,g,b,m;if(u=lr.exec(e),u===null&&(u=dr.exec(e)),u===null)throw new Error("Date resolve error");if(t=+u[1],r=+u[2]-1,o=+u[3],!u[4])return new Date(Date.UTC(t,r,o));if(l=+u[4],s=+u[5],d=+u[6],u[7]){for(f=u[7].slice(0,3);f.length<3;)f+="0";f=+f}return u[9]&&(g=+u[10],b=+(u[11]||0),y=(g*60+b)*6e4,u[9]==="-"&&(y=-y)),m=new Date(Date.UTC(t,r,o,l,s,d,f)),y&&m.setTime(m.getTime()-y),m}function Eo(e){return e.toISOString()}var pr=new ht("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:ko,construct:So,instanceOf:Date,represent:Eo});function Co(e){return e==="<<"||e===null}var ur=new ht("tag:yaml.org,2002:merge",{kind:"scalar",resolve:Co}),on=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function Ao(e){if(e===null)return!1;var u,t,r=0,o=e.length,l=on;for(t=0;t<o;t++)if(u=l.indexOf(e.charAt(t)),!(u>64)){if(u<0)return!1;r+=6}return r%8===0}function To(e){var u,t,r=e.replace(/[\r\n=]/g,""),o=r.length,l=on,s=0,d=[];for(u=0;u<o;u++)u%4===0&&u&&(d.push(s>>16&255),d.push(s>>8&255),d.push(s&255)),s=s<<6|l.indexOf(r.charAt(u));return t=o%4*6,t===0?(d.push(s>>16&255),d.push(s>>8&255),d.push(s&255)):t===18?(d.push(s>>10&255),d.push(s>>2&255)):t===12&&d.push(s>>4&255),new Uint8Array(d)}function Oo(e){var u="",t=0,r,o,l=e.length,s=on;for(r=0;r<l;r++)r%3===0&&r&&(u+=s[t>>18&63],u+=s[t>>12&63],u+=s[t>>6&63],u+=s[t&63]),t=(t<<8)+e[r];return o=l%3,o===0?(u+=s[t>>18&63],u+=s[t>>12&63],u+=s[t>>6&63],u+=s[t&63]):o===2?(u+=s[t>>10&63],u+=s[t>>4&63],u+=s[t<<2&63],u+=s[64]):o===1&&(u+=s[t>>2&63],u+=s[t<<4&63],u+=s[64],u+=s[64]),u}function Po(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var hr=new ht("tag:yaml.org,2002:binary",{kind:"scalar",resolve:Ao,construct:To,predicate:Po,represent:Oo}),Lo=Object.prototype.hasOwnProperty,zo=Object.prototype.toString;function Mo(e){if(e===null)return!0;var u=[],t,r,o,l,s,d=e;for(t=0,r=d.length;t<r;t+=1){if(o=d[t],s=!1,zo.call(o)!=="[object Object]")return!1;for(l in o)if(Lo.call(o,l))if(!s)s=!0;else return!1;if(!s)return!1;if(u.indexOf(l)===-1)u.push(l);else return!1}return!0}function Io(e){return e!==null?e:[]}var fr=new ht("tag:yaml.org,2002:omap",{kind:"sequence",resolve:Mo,construct:Io}),Ro=Object.prototype.toString;function Do(e){if(e===null)return!0;var u,t,r,o,l,s=e;for(l=new Array(s.length),u=0,t=s.length;u<t;u+=1){if(r=s[u],Ro.call(r)!=="[object Object]"||(o=Object.keys(r),o.length!==1))return!1;l[u]=[o[0],r[o[0]]]}return!0}function Bo(e){if(e===null)return[];var u,t,r,o,l,s=e;for(l=new Array(s.length),u=0,t=s.length;u<t;u+=1)r=s[u],o=Object.keys(r),l[u]=[o[0],r[o[0]]];return l}var gr=new ht("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:Do,construct:Bo}),Fo=Object.prototype.hasOwnProperty;function No(e){if(e===null)return!0;var u,t=e;for(u in t)if(Fo.call(t,u)&&t[u]!==null)return!1;return!0}function qo(e){return e!==null?e:{}}var mr=new ht("tag:yaml.org,2002:set",{kind:"mapping",resolve:No,construct:qo}),sn=cr.extend({implicit:[pr,ur],explicit:[hr,fr,gr,mr]}),jt=Object.prototype.hasOwnProperty,Ri=1,yr=2,vr=3,Di=4,Zi=1,Ho=2,Dn=3,jo=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,Yo=/[\x85\u2028\u2029]/,Wo=/[,\[\]\{\}]/,br=/^(?:!|!!|![a-z\-]+!)$/i,xr=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function Bn(e){return Object.prototype.toString.call(e)}function Lt(e){return e===10||e===13}function Gt(e){return e===9||e===32}function kt(e){return e===9||e===32||e===10||e===13}function ii(e){return e===44||e===91||e===93||e===123||e===125}function Ko(e){var u;return 48<=e&&e<=57?e-48:(u=e|32,97<=u&&u<=102?u-97+10:-1)}function $o(e){return e===120?2:e===117?4:e===85?8:0}function Uo(e){return 48<=e&&e<=57?e-48:-1}function Fn(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"\x85":e===95?"\xA0":e===76?"\u2028":e===80?"\u2029":""}function Vo(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}var _r=new Array(256),wr=new Array(256);for(Vt=0;Vt<256;Vt++)_r[Vt]=Fn(Vt)?1:0,wr[Vt]=Fn(Vt);var Vt;function Go(e,u){this.input=e,this.filename=u.filename||null,this.schema=u.schema||sn,this.onWarning=u.onWarning||null,this.legacy=u.legacy||!1,this.json=u.json||!1,this.listener=u.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function kr(e,u){var t={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return t.snippet=Qa(t),new _t(u,t)}function be(e,u){throw kr(e,u)}function Bi(e,u){e.onWarning&&e.onWarning.call(null,kr(e,u))}var Nn={YAML:function(u,t,r){var o,l,s;u.version!==null&&be(u,"duplication of %YAML directive"),r.length!==1&&be(u,"YAML directive accepts exactly one argument"),o=/^([0-9]+)\.([0-9]+)$/.exec(r[0]),o===null&&be(u,"ill-formed argument of the YAML directive"),l=parseInt(o[1],10),s=parseInt(o[2],10),l!==1&&be(u,"unacceptable YAML version of the document"),u.version=r[0],u.checkLineBreaks=s<2,s!==1&&s!==2&&Bi(u,"unsupported YAML version of the document")},TAG:function(u,t,r){var o,l;r.length!==2&&be(u,"TAG directive accepts exactly two arguments"),o=r[0],l=r[1],br.test(o)||be(u,"ill-formed tag handle (first argument) of the TAG directive"),jt.call(u.tagMap,o)&&be(u,'there is a previously declared suffix for "'+o+'" tag handle'),xr.test(l)||be(u,"ill-formed tag prefix (second argument) of the TAG directive");try{l=decodeURIComponent(l)}catch{be(u,"tag prefix is malformed: "+l)}u.tagMap[o]=l}};function Ht(e,u,t,r){var o,l,s,d;if(u<t){if(d=e.input.slice(u,t),r)for(o=0,l=d.length;o<l;o+=1)s=d.charCodeAt(o),s===9||32<=s&&s<=1114111||be(e,"expected valid JSON character");else jo.test(d)&&be(e,"the stream contains non-printable characters");e.result+=d}}function qn(e,u,t,r){var o,l,s,d;for(lt.isObject(t)||be(e,"cannot merge mappings; the provided source object is unacceptable"),o=Object.keys(t),s=0,d=o.length;s<d;s+=1)l=o[s],jt.call(u,l)||(u[l]=t[l],r[l]=!0)}function ni(e,u,t,r,o,l,s,d,f){var y,g;if(Array.isArray(o))for(o=Array.prototype.slice.call(o),y=0,g=o.length;y<g;y+=1)Array.isArray(o[y])&&be(e,"nested arrays are not supported inside keys"),typeof o=="object"&&Bn(o[y])==="[object Object]"&&(o[y]="[object Object]");if(typeof o=="object"&&Bn(o)==="[object Object]"&&(o="[object Object]"),o=String(o),u===null&&(u={}),r==="tag:yaml.org,2002:merge")if(Array.isArray(l))for(y=0,g=l.length;y<g;y+=1)qn(e,u,l[y],t);else qn(e,u,l,t);else!e.json&&!jt.call(t,o)&&jt.call(u,o)&&(e.line=s||e.line,e.lineStart=d||e.lineStart,e.position=f||e.position,be(e,"duplicated mapping key")),o==="__proto__"?Object.defineProperty(u,o,{configurable:!0,enumerable:!0,writable:!0,value:l}):u[o]=l,delete t[o];return u}function cn(e){var u;u=e.input.charCodeAt(e.position),u===10?e.position++:u===13?(e.position++,e.input.charCodeAt(e.position)===10&&e.position++):be(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}function ct(e,u,t){for(var r=0,o=e.input.charCodeAt(e.position);o!==0;){for(;Gt(o);)o===9&&e.firstTabInLine===-1&&(e.firstTabInLine=e.position),o=e.input.charCodeAt(++e.position);if(u&&o===35)do o=e.input.charCodeAt(++e.position);while(o!==10&&o!==13&&o!==0);if(Lt(o))for(cn(e),o=e.input.charCodeAt(e.position),r++,e.lineIndent=0;o===32;)e.lineIndent++,o=e.input.charCodeAt(++e.position);else break}return t!==-1&&r!==0&&e.lineIndent<t&&Bi(e,"deficient indentation"),r}function qi(e){var u=e.position,t;return t=e.input.charCodeAt(u),!!((t===45||t===46)&&t===e.input.charCodeAt(u+1)&&t===e.input.charCodeAt(u+2)&&(u+=3,t=e.input.charCodeAt(u),t===0||kt(t)))}function ln(e,u){u===1?e.result+=" ":u>1&&(e.result+=lt.repeat(`
`,u-1))}function Xo(e,u,t){var r,o,l,s,d,f,y,g,b=e.kind,m=e.result,w;if(w=e.input.charCodeAt(e.position),kt(w)||ii(w)||w===35||w===38||w===42||w===33||w===124||w===62||w===39||w===34||w===37||w===64||w===96||(w===63||w===45)&&(o=e.input.charCodeAt(e.position+1),kt(o)||t&&ii(o)))return!1;for(e.kind="scalar",e.result="",l=s=e.position,d=!1;w!==0;){if(w===58){if(o=e.input.charCodeAt(e.position+1),kt(o)||t&&ii(o))break}else if(w===35){if(r=e.input.charCodeAt(e.position-1),kt(r))break}else{if(e.position===e.lineStart&&qi(e)||t&&ii(w))break;if(Lt(w))if(f=e.line,y=e.lineStart,g=e.lineIndent,ct(e,!1,-1),e.lineIndent>=u){d=!0,w=e.input.charCodeAt(e.position);continue}else{e.position=s,e.line=f,e.lineStart=y,e.lineIndent=g;break}}d&&(Ht(e,l,s,!1),ln(e,e.line-f),l=s=e.position,d=!1),Gt(w)||(s=e.position+1),w=e.input.charCodeAt(++e.position)}return Ht(e,l,s,!1),e.result?!0:(e.kind=b,e.result=m,!1)}function Jo(e,u){var t,r,o;if(t=e.input.charCodeAt(e.position),t!==39)return!1;for(e.kind="scalar",e.result="",e.position++,r=o=e.position;(t=e.input.charCodeAt(e.position))!==0;)if(t===39)if(Ht(e,r,e.position,!0),t=e.input.charCodeAt(++e.position),t===39)r=e.position,e.position++,o=e.position;else return!0;else Lt(t)?(Ht(e,r,o,!0),ln(e,ct(e,!1,u)),r=o=e.position):e.position===e.lineStart&&qi(e)?be(e,"unexpected end of the document within a single quoted scalar"):(e.position++,o=e.position);be(e,"unexpected end of the stream within a single quoted scalar")}function Qo(e,u){var t,r,o,l,s,d;if(d=e.input.charCodeAt(e.position),d!==34)return!1;for(e.kind="scalar",e.result="",e.position++,t=r=e.position;(d=e.input.charCodeAt(e.position))!==0;){if(d===34)return Ht(e,t,e.position,!0),e.position++,!0;if(d===92){if(Ht(e,t,e.position,!0),d=e.input.charCodeAt(++e.position),Lt(d))ct(e,!1,u);else if(d<256&&_r[d])e.result+=wr[d],e.position++;else if((s=$o(d))>0){for(o=s,l=0;o>0;o--)d=e.input.charCodeAt(++e.position),(s=Ko(d))>=0?l=(l<<4)+s:be(e,"expected hexadecimal character");e.result+=Vo(l),e.position++}else be(e,"unknown escape sequence");t=r=e.position}else Lt(d)?(Ht(e,t,r,!0),ln(e,ct(e,!1,u)),t=r=e.position):e.position===e.lineStart&&qi(e)?be(e,"unexpected end of the document within a double quoted scalar"):(e.position++,r=e.position)}be(e,"unexpected end of the stream within a double quoted scalar")}function Zo(e,u){var t=!0,r,o,l,s=e.tag,d,f=e.anchor,y,g,b,m,w,O=Object.create(null),E,P,R,C;if(C=e.input.charCodeAt(e.position),C===91)g=93,w=!1,d=[];else if(C===123)g=125,w=!0,d={};else return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=d),C=e.input.charCodeAt(++e.position);C!==0;){if(ct(e,!0,u),C=e.input.charCodeAt(e.position),C===g)return e.position++,e.tag=s,e.anchor=f,e.kind=w?"mapping":"sequence",e.result=d,!0;t?C===44&&be(e,"expected the node content, but found ','"):be(e,"missed comma between flow collection entries"),P=E=R=null,b=m=!1,C===63&&(y=e.input.charCodeAt(e.position+1),kt(y)&&(b=m=!0,e.position++,ct(e,!0,u))),r=e.line,o=e.lineStart,l=e.position,ri(e,u,Ri,!1,!0),P=e.tag,E=e.result,ct(e,!0,u),C=e.input.charCodeAt(e.position),(m||e.line===r)&&C===58&&(b=!0,C=e.input.charCodeAt(++e.position),ct(e,!0,u),ri(e,u,Ri,!1,!0),R=e.result),w?ni(e,d,O,P,E,R,r,o,l):b?d.push(ni(e,null,O,P,E,R,r,o,l)):d.push(E),ct(e,!0,u),C=e.input.charCodeAt(e.position),C===44?(t=!0,C=e.input.charCodeAt(++e.position)):t=!1}be(e,"unexpected end of the stream within a flow collection")}function es(e,u){var t,r,o=Zi,l=!1,s=!1,d=u,f=0,y=!1,g,b;if(b=e.input.charCodeAt(e.position),b===124)r=!1;else if(b===62)r=!0;else return!1;for(e.kind="scalar",e.result="";b!==0;)if(b=e.input.charCodeAt(++e.position),b===43||b===45)Zi===o?o=b===43?Dn:Ho:be(e,"repeat of a chomping mode identifier");else if((g=Uo(b))>=0)g===0?be(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):s?be(e,"repeat of an indentation width identifier"):(d=u+g-1,s=!0);else break;if(Gt(b)){do b=e.input.charCodeAt(++e.position);while(Gt(b));if(b===35)do b=e.input.charCodeAt(++e.position);while(!Lt(b)&&b!==0)}for(;b!==0;){for(cn(e),e.lineIndent=0,b=e.input.charCodeAt(e.position);(!s||e.lineIndent<d)&&b===32;)e.lineIndent++,b=e.input.charCodeAt(++e.position);if(!s&&e.lineIndent>d&&(d=e.lineIndent),Lt(b)){f++;continue}if(e.lineIndent<d){o===Dn?e.result+=lt.repeat(`
`,l?1+f:f):o===Zi&&l&&(e.result+=`
`);break}for(r?Gt(b)?(y=!0,e.result+=lt.repeat(`
`,l?1+f:f)):y?(y=!1,e.result+=lt.repeat(`
`,f+1)):f===0?l&&(e.result+=" "):e.result+=lt.repeat(`
`,f):e.result+=lt.repeat(`
`,l?1+f:f),l=!0,s=!0,f=0,t=e.position;!Lt(b)&&b!==0;)b=e.input.charCodeAt(++e.position);Ht(e,t,e.position,!1)}return!0}function Hn(e,u){var t,r=e.tag,o=e.anchor,l=[],s,d=!1,f;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=l),f=e.input.charCodeAt(e.position);f!==0&&(e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,be(e,"tab characters must not be used in indentation")),!(f!==45||(s=e.input.charCodeAt(e.position+1),!kt(s))));){if(d=!0,e.position++,ct(e,!0,-1)&&e.lineIndent<=u){l.push(null),f=e.input.charCodeAt(e.position);continue}if(t=e.line,ri(e,u,vr,!1,!0),l.push(e.result),ct(e,!0,-1),f=e.input.charCodeAt(e.position),(e.line===t||e.lineIndent>u)&&f!==0)be(e,"bad indentation of a sequence entry");else if(e.lineIndent<u)break}return d?(e.tag=r,e.anchor=o,e.kind="sequence",e.result=l,!0):!1}function ts(e,u,t){var r,o,l,s,d,f,y=e.tag,g=e.anchor,b={},m=Object.create(null),w=null,O=null,E=null,P=!1,R=!1,C;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=b),C=e.input.charCodeAt(e.position);C!==0;){if(!P&&e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,be(e,"tab characters must not be used in indentation")),r=e.input.charCodeAt(e.position+1),l=e.line,(C===63||C===58)&&kt(r))C===63?(P&&(ni(e,b,m,w,O,null,s,d,f),w=O=E=null),R=!0,P=!0,o=!0):P?(P=!1,o=!0):be(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,C=r;else{if(s=e.line,d=e.lineStart,f=e.position,!ri(e,t,yr,!1,!0))break;if(e.line===l){for(C=e.input.charCodeAt(e.position);Gt(C);)C=e.input.charCodeAt(++e.position);if(C===58)C=e.input.charCodeAt(++e.position),kt(C)||be(e,"a whitespace character is expected after the key-value separator within a block mapping"),P&&(ni(e,b,m,w,O,null,s,d,f),w=O=E=null),R=!0,P=!1,o=!1,w=e.tag,O=e.result;else if(R)be(e,"can not read an implicit mapping pair; a colon is missed");else return e.tag=y,e.anchor=g,!0}else if(R)be(e,"can not read a block mapping entry; a multiline key may not be an implicit key");else return e.tag=y,e.anchor=g,!0}if((e.line===l||e.lineIndent>u)&&(P&&(s=e.line,d=e.lineStart,f=e.position),ri(e,u,Di,!0,o)&&(P?O=e.result:E=e.result),P||(ni(e,b,m,w,O,E,s,d,f),w=O=E=null),ct(e,!0,-1),C=e.input.charCodeAt(e.position)),(e.line===l||e.lineIndent>u)&&C!==0)be(e,"bad indentation of a mapping entry");else if(e.lineIndent<u)break}return P&&ni(e,b,m,w,O,null,s,d,f),R&&(e.tag=y,e.anchor=g,e.kind="mapping",e.result=b),R}function is(e){var u,t=!1,r=!1,o,l,s;if(s=e.input.charCodeAt(e.position),s!==33)return!1;if(e.tag!==null&&be(e,"duplication of a tag property"),s=e.input.charCodeAt(++e.position),s===60?(t=!0,s=e.input.charCodeAt(++e.position)):s===33?(r=!0,o="!!",s=e.input.charCodeAt(++e.position)):o="!",u=e.position,t){do s=e.input.charCodeAt(++e.position);while(s!==0&&s!==62);e.position<e.length?(l=e.input.slice(u,e.position),s=e.input.charCodeAt(++e.position)):be(e,"unexpected end of the stream within a verbatim tag")}else{for(;s!==0&&!kt(s);)s===33&&(r?be(e,"tag suffix cannot contain exclamation marks"):(o=e.input.slice(u-1,e.position+1),br.test(o)||be(e,"named tag handle cannot contain such characters"),r=!0,u=e.position+1)),s=e.input.charCodeAt(++e.position);l=e.input.slice(u,e.position),Wo.test(l)&&be(e,"tag suffix cannot contain flow indicator characters")}l&&!xr.test(l)&&be(e,"tag name cannot contain such characters: "+l);try{l=decodeURIComponent(l)}catch{be(e,"tag name is malformed: "+l)}return t?e.tag=l:jt.call(e.tagMap,o)?e.tag=e.tagMap[o]+l:o==="!"?e.tag="!"+l:o==="!!"?e.tag="tag:yaml.org,2002:"+l:be(e,'undeclared tag handle "'+o+'"'),!0}function ns(e){var u,t;if(t=e.input.charCodeAt(e.position),t!==38)return!1;for(e.anchor!==null&&be(e,"duplication of an anchor property"),t=e.input.charCodeAt(++e.position),u=e.position;t!==0&&!kt(t)&&!ii(t);)t=e.input.charCodeAt(++e.position);return e.position===u&&be(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(u,e.position),!0}function rs(e){var u,t,r;if(r=e.input.charCodeAt(e.position),r!==42)return!1;for(r=e.input.charCodeAt(++e.position),u=e.position;r!==0&&!kt(r)&&!ii(r);)r=e.input.charCodeAt(++e.position);return e.position===u&&be(e,"name of an alias node must contain at least one character"),t=e.input.slice(u,e.position),jt.call(e.anchorMap,t)||be(e,'unidentified alias "'+t+'"'),e.result=e.anchorMap[t],ct(e,!0,-1),!0}function ri(e,u,t,r,o){var l,s,d,f=1,y=!1,g=!1,b,m,w,O,E,P;if(e.listener!==null&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,l=s=d=Di===t||vr===t,r&&ct(e,!0,-1)&&(y=!0,e.lineIndent>u?f=1:e.lineIndent===u?f=0:e.lineIndent<u&&(f=-1)),f===1)for(;is(e)||ns(e);)ct(e,!0,-1)?(y=!0,d=l,e.lineIndent>u?f=1:e.lineIndent===u?f=0:e.lineIndent<u&&(f=-1)):d=!1;if(d&&(d=y||o),(f===1||Di===t)&&(Ri===t||yr===t?E=u:E=u+1,P=e.position-e.lineStart,f===1?d&&(Hn(e,P)||ts(e,P,E))||Zo(e,E)?g=!0:(s&&es(e,E)||Jo(e,E)||Qo(e,E)?g=!0:rs(e)?(g=!0,(e.tag!==null||e.anchor!==null)&&be(e,"alias node should not have any properties")):Xo(e,E,Ri===t)&&(g=!0,e.tag===null&&(e.tag="?")),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):f===0&&(g=d&&Hn(e,P))),e.tag===null)e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);else if(e.tag==="?"){for(e.result!==null&&e.kind!=="scalar"&&be(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),b=0,m=e.implicitTypes.length;b<m;b+=1)if(O=e.implicitTypes[b],O.resolve(e.result)){e.result=O.construct(e.result),e.tag=O.tag,e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);break}}else if(e.tag!=="!"){if(jt.call(e.typeMap[e.kind||"fallback"],e.tag))O=e.typeMap[e.kind||"fallback"][e.tag];else for(O=null,w=e.typeMap.multi[e.kind||"fallback"],b=0,m=w.length;b<m;b+=1)if(e.tag.slice(0,w[b].tag.length)===w[b].tag){O=w[b];break}O||be(e,"unknown tag !<"+e.tag+">"),e.result!==null&&O.kind!==e.kind&&be(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+O.kind+'", not "'+e.kind+'"'),O.resolve(e.result,e.tag)?(e.result=O.construct(e.result,e.tag),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):be(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")}return e.listener!==null&&e.listener("close",e),e.tag!==null||e.anchor!==null||g}function as(e){var u=e.position,t,r,o,l=!1,s;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);(s=e.input.charCodeAt(e.position))!==0&&(ct(e,!0,-1),s=e.input.charCodeAt(e.position),!(e.lineIndent>0||s!==37));){for(l=!0,s=e.input.charCodeAt(++e.position),t=e.position;s!==0&&!kt(s);)s=e.input.charCodeAt(++e.position);for(r=e.input.slice(t,e.position),o=[],r.length<1&&be(e,"directive name must not be less than one character in length");s!==0;){for(;Gt(s);)s=e.input.charCodeAt(++e.position);if(s===35){do s=e.input.charCodeAt(++e.position);while(s!==0&&!Lt(s));break}if(Lt(s))break;for(t=e.position;s!==0&&!kt(s);)s=e.input.charCodeAt(++e.position);o.push(e.input.slice(t,e.position))}s!==0&&cn(e),jt.call(Nn,r)?Nn[r](e,r,o):Bi(e,'unknown document directive "'+r+'"')}if(ct(e,!0,-1),e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45?(e.position+=3,ct(e,!0,-1)):l&&be(e,"directives end mark is expected"),ri(e,e.lineIndent-1,Di,!1,!0),ct(e,!0,-1),e.checkLineBreaks&&Yo.test(e.input.slice(u,e.position))&&Bi(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&qi(e)){e.input.charCodeAt(e.position)===46&&(e.position+=3,ct(e,!0,-1));return}if(e.position<e.length-1)be(e,"end of the stream or a document separator is expected");else return}function Sr(e,u){e=String(e),u=u||{},e.length!==0&&(e.charCodeAt(e.length-1)!==10&&e.charCodeAt(e.length-1)!==13&&(e+=`
`),e.charCodeAt(0)===65279&&(e=e.slice(1)));var t=new Go(e,u),r=e.indexOf("\0");for(r!==-1&&(t.position=r,be(t,"null byte is not allowed in input")),t.input+="\0";t.input.charCodeAt(t.position)===32;)t.lineIndent+=1,t.position+=1;for(;t.position<t.length-1;)as(t);return t.documents}function os(e,u,t){u!==null&&typeof u=="object"&&typeof t=="undefined"&&(t=u,u=null);var r=Sr(e,t);if(typeof u!="function")return r;for(var o=0,l=r.length;o<l;o+=1)u(r[o])}function ss(e,u){var t=Sr(e,u);if(t.length!==0){if(t.length===1)return t[0];throw new _t("expected a single document in the stream, but found more")}}var cs=os,ls=ss,Er={loadAll:cs,load:ls},Cr=Object.prototype.toString,Ar=Object.prototype.hasOwnProperty,dn=65279,ds=9,yi=10,ps=13,us=32,hs=33,fs=34,tn=35,gs=37,ms=38,ys=39,vs=42,Tr=44,bs=45,Fi=58,xs=61,_s=62,ws=63,ks=64,Or=91,Pr=93,Ss=96,Lr=123,Es=124,zr=125,mt={};mt[0]="\\0";mt[7]="\\a";mt[8]="\\b";mt[9]="\\t";mt[10]="\\n";mt[11]="\\v";mt[12]="\\f";mt[13]="\\r";mt[27]="\\e";mt[34]='\\"';mt[92]="\\\\";mt[133]="\\N";mt[160]="\\_";mt[8232]="\\L";mt[8233]="\\P";var Cs=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],As=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function Ts(e,u){var t,r,o,l,s,d,f;if(u===null)return{};for(t={},r=Object.keys(u),o=0,l=r.length;o<l;o+=1)s=r[o],d=String(u[s]),s.slice(0,2)==="!!"&&(s="tag:yaml.org,2002:"+s.slice(2)),f=e.compiledTypeMap.fallback[s],f&&Ar.call(f.styleAliases,d)&&(d=f.styleAliases[d]),t[s]=d;return t}function Os(e){var u,t,r;if(u=e.toString(16).toUpperCase(),e<=255)t="x",r=2;else if(e<=65535)t="u",r=4;else if(e<=4294967295)t="U",r=8;else throw new _t("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+t+lt.repeat("0",r-u.length)+u}var Ps=1,vi=2;function Ls(e){this.schema=e.schema||sn,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=lt.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=Ts(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.quotingType=e.quotingType==='"'?vi:Ps,this.forceQuotes=e.forceQuotes||!1,this.replacer=typeof e.replacer=="function"?e.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function jn(e,u){for(var t=lt.repeat(" ",u),r=0,o=-1,l="",s,d=e.length;r<d;)o=e.indexOf(`
`,r),o===-1?(s=e.slice(r),r=d):(s=e.slice(r,o+1),r=o+1),s.length&&s!==`
`&&(l+=t),l+=s;return l}function nn(e,u){return`
`+lt.repeat(" ",e.indent*u)}function zs(e,u){var t,r,o;for(t=0,r=e.implicitTypes.length;t<r;t+=1)if(o=e.implicitTypes[t],o.resolve(u))return!0;return!1}function Ni(e){return e===us||e===ds}function bi(e){return 32<=e&&e<=126||161<=e&&e<=55295&&e!==8232&&e!==8233||57344<=e&&e<=65533&&e!==dn||65536<=e&&e<=1114111}function Yn(e){return bi(e)&&e!==dn&&e!==ps&&e!==yi}function Wn(e,u,t){var r=Yn(e),o=r&&!Ni(e);return(t?r:r&&e!==Tr&&e!==Or&&e!==Pr&&e!==Lr&&e!==zr)&&e!==tn&&!(u===Fi&&!o)||Yn(u)&&!Ni(u)&&e===tn||u===Fi&&o}function Ms(e){return bi(e)&&e!==dn&&!Ni(e)&&e!==bs&&e!==ws&&e!==Fi&&e!==Tr&&e!==Or&&e!==Pr&&e!==Lr&&e!==zr&&e!==tn&&e!==ms&&e!==vs&&e!==hs&&e!==Es&&e!==xs&&e!==_s&&e!==ys&&e!==fs&&e!==gs&&e!==ks&&e!==Ss}function Is(e){return!Ni(e)&&e!==Fi}function gi(e,u){var t=e.charCodeAt(u),r;return t>=55296&&t<=56319&&u+1<e.length&&(r=e.charCodeAt(u+1),r>=56320&&r<=57343)?(t-55296)*1024+r-56320+65536:t}function Mr(e){var u=/^\n* /;return u.test(e)}var Ir=1,rn=2,Rr=3,Dr=4,ti=5;function Rs(e,u,t,r,o,l,s,d){var f,y=0,g=null,b=!1,m=!1,w=r!==-1,O=-1,E=Ms(gi(e,0))&&Is(gi(e,e.length-1));if(u||s)for(f=0;f<e.length;y>=65536?f+=2:f++){if(y=gi(e,f),!bi(y))return ti;E=E&&Wn(y,g,d),g=y}else{for(f=0;f<e.length;y>=65536?f+=2:f++){if(y=gi(e,f),y===yi)b=!0,w&&(m=m||f-O-1>r&&e[O+1]!==" ",O=f);else if(!bi(y))return ti;E=E&&Wn(y,g,d),g=y}m=m||w&&f-O-1>r&&e[O+1]!==" "}return!b&&!m?E&&!s&&!o(e)?Ir:l===vi?ti:rn:t>9&&Mr(e)?ti:s?l===vi?ti:rn:m?Dr:Rr}function Ds(e,u,t,r,o){e.dump=(function(){if(u.length===0)return e.quotingType===vi?'""':"''";if(!e.noCompatMode&&(Cs.indexOf(u)!==-1||As.test(u)))return e.quotingType===vi?'"'+u+'"':"'"+u+"'";var l=e.indent*Math.max(1,t),s=e.lineWidth===-1?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-l),d=r||e.flowLevel>-1&&t>=e.flowLevel;function f(y){return zs(e,y)}switch(Rs(u,d,e.indent,s,f,e.quotingType,e.forceQuotes&&!r,o)){case Ir:return u;case rn:return"'"+u.replace(/'/g,"''")+"'";case Rr:return"|"+Kn(u,e.indent)+$n(jn(u,l));case Dr:return">"+Kn(u,e.indent)+$n(jn(Bs(u,s),l));case ti:return'"'+Fs(u)+'"';default:throw new _t("impossible error: invalid scalar style")}})()}function Kn(e,u){var t=Mr(e)?String(u):"",r=e[e.length-1]===`
`,o=r&&(e[e.length-2]===`
`||e===`
`),l=o?"+":r?"":"-";return t+l+`
`}function $n(e){return e[e.length-1]===`
`?e.slice(0,-1):e}function Bs(e,u){for(var t=/(\n+)([^\n]*)/g,r=(function(){var y=e.indexOf(`
`);return y=y!==-1?y:e.length,t.lastIndex=y,Un(e.slice(0,y),u)})(),o=e[0]===`
`||e[0]===" ",l,s;s=t.exec(e);){var d=s[1],f=s[2];l=f[0]===" ",r+=d+(!o&&!l&&f!==""?`
`:"")+Un(f,u),o=l}return r}function Un(e,u){if(e===""||e[0]===" ")return e;for(var t=/ [^ ]/g,r,o=0,l,s=0,d=0,f="";r=t.exec(e);)d=r.index,d-o>u&&(l=s>o?s:d,f+=`
`+e.slice(o,l),o=l+1),s=d;return f+=`
`,e.length-o>u&&s>o?f+=e.slice(o,s)+`
`+e.slice(s+1):f+=e.slice(o),f.slice(1)}function Fs(e){for(var u="",t=0,r,o=0;o<e.length;t>=65536?o+=2:o++)t=gi(e,o),r=mt[t],!r&&bi(t)?(u+=e[o],t>=65536&&(u+=e[o+1])):u+=r||Os(t);return u}function Ns(e,u,t){var r="",o=e.tag,l,s,d;for(l=0,s=t.length;l<s;l+=1)d=t[l],e.replacer&&(d=e.replacer.call(t,String(l),d)),(It(e,u,d,!1,!1)||typeof d=="undefined"&&It(e,u,null,!1,!1))&&(r!==""&&(r+=","+(e.condenseFlow?"":" ")),r+=e.dump);e.tag=o,e.dump="["+r+"]"}function Vn(e,u,t,r){var o="",l=e.tag,s,d,f;for(s=0,d=t.length;s<d;s+=1)f=t[s],e.replacer&&(f=e.replacer.call(t,String(s),f)),(It(e,u+1,f,!0,!0,!1,!0)||typeof f=="undefined"&&It(e,u+1,null,!0,!0,!1,!0))&&((!r||o!=="")&&(o+=nn(e,u)),e.dump&&yi===e.dump.charCodeAt(0)?o+="-":o+="- ",o+=e.dump);e.tag=l,e.dump=o||"[]"}function qs(e,u,t){var r="",o=e.tag,l=Object.keys(t),s,d,f,y,g;for(s=0,d=l.length;s<d;s+=1)g="",r!==""&&(g+=", "),e.condenseFlow&&(g+='"'),f=l[s],y=t[f],e.replacer&&(y=e.replacer.call(t,f,y)),It(e,u,f,!1,!1)&&(e.dump.length>1024&&(g+="? "),g+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),It(e,u,y,!1,!1)&&(g+=e.dump,r+=g));e.tag=o,e.dump="{"+r+"}"}function Hs(e,u,t,r){var o="",l=e.tag,s=Object.keys(t),d,f,y,g,b,m;if(e.sortKeys===!0)s.sort();else if(typeof e.sortKeys=="function")s.sort(e.sortKeys);else if(e.sortKeys)throw new _t("sortKeys must be a boolean or a function");for(d=0,f=s.length;d<f;d+=1)m="",(!r||o!=="")&&(m+=nn(e,u)),y=s[d],g=t[y],e.replacer&&(g=e.replacer.call(t,y,g)),It(e,u+1,y,!0,!0,!0)&&(b=e.tag!==null&&e.tag!=="?"||e.dump&&e.dump.length>1024,b&&(e.dump&&yi===e.dump.charCodeAt(0)?m+="?":m+="? "),m+=e.dump,b&&(m+=nn(e,u)),It(e,u+1,g,!0,b)&&(e.dump&&yi===e.dump.charCodeAt(0)?m+=":":m+=": ",m+=e.dump,o+=m));e.tag=l,e.dump=o||"{}"}function Gn(e,u,t){var r,o,l,s,d,f;for(o=t?e.explicitTypes:e.implicitTypes,l=0,s=o.length;l<s;l+=1)if(d=o[l],(d.instanceOf||d.predicate)&&(!d.instanceOf||typeof u=="object"&&u instanceof d.instanceOf)&&(!d.predicate||d.predicate(u))){if(t?d.multi&&d.representName?e.tag=d.representName(u):e.tag=d.tag:e.tag="?",d.represent){if(f=e.styleMap[d.tag]||d.defaultStyle,Cr.call(d.represent)==="[object Function]")r=d.represent(u,f);else if(Ar.call(d.represent,f))r=d.represent[f](u,f);else throw new _t("!<"+d.tag+'> tag resolver accepts not "'+f+'" style');e.dump=r}return!0}return!1}function It(e,u,t,r,o,l,s){e.tag=null,e.dump=t,Gn(e,t,!1)||Gn(e,t,!0);var d=Cr.call(e.dump),f=r,y;r&&(r=e.flowLevel<0||e.flowLevel>u);var g=d==="[object Object]"||d==="[object Array]",b,m;if(g&&(b=e.duplicates.indexOf(t),m=b!==-1),(e.tag!==null&&e.tag!=="?"||m||e.indent!==2&&u>0)&&(o=!1),m&&e.usedDuplicates[b])e.dump="*ref_"+b;else{if(g&&m&&!e.usedDuplicates[b]&&(e.usedDuplicates[b]=!0),d==="[object Object]")r&&Object.keys(e.dump).length!==0?(Hs(e,u,e.dump,o),m&&(e.dump="&ref_"+b+e.dump)):(qs(e,u,e.dump),m&&(e.dump="&ref_"+b+" "+e.dump));else if(d==="[object Array]")r&&e.dump.length!==0?(e.noArrayIndent&&!s&&u>0?Vn(e,u-1,e.dump,o):Vn(e,u,e.dump,o),m&&(e.dump="&ref_"+b+e.dump)):(Ns(e,u,e.dump),m&&(e.dump="&ref_"+b+" "+e.dump));else if(d==="[object String]")e.tag!=="?"&&Ds(e,e.dump,u,l,f);else{if(d==="[object Undefined]")return!1;if(e.skipInvalid)return!1;throw new _t("unacceptable kind of an object to dump "+d)}e.tag!==null&&e.tag!=="?"&&(y=encodeURI(e.tag[0]==="!"?e.tag.slice(1):e.tag).replace(/!/g,"%21"),e.tag[0]==="!"?y="!"+y:y.slice(0,18)==="tag:yaml.org,2002:"?y="!!"+y.slice(18):y="!<"+y+">",e.dump=y+" "+e.dump)}return!0}function js(e,u){var t=[],r=[],o,l;for(an(e,t,r),o=0,l=r.length;o<l;o+=1)u.duplicates.push(t[r[o]]);u.usedDuplicates=new Array(l)}function an(e,u,t){var r,o,l;if(e!==null&&typeof e=="object")if(o=u.indexOf(e),o!==-1)t.indexOf(o)===-1&&t.push(o);else if(u.push(e),Array.isArray(e))for(o=0,l=e.length;o<l;o+=1)an(e[o],u,t);else for(r=Object.keys(e),o=0,l=r.length;o<l;o+=1)an(e[r[o]],u,t)}function Ys(e,u){u=u||{};var t=new Ls(u);t.noRefs||js(e,t);var r=e;return t.replacer&&(r=t.replacer.call({"":r},"",r)),It(t,0,r,!0,!0)?t.dump+`
`:""}var Ws=Ys,Ks={dump:Ws};function pn(e,u){return function(){throw new Error("Function yaml."+e+" is removed in js-yaml 4. Use yaml."+u+" instead, which is now safe by default.")}}var $s=ht,Us=Qn,Vs=ir,Gs=sr,Xs=cr,Js=sn,Qs=Er.load,Zs=Er.loadAll,ec=Ks.dump,tc=_t,ic={binary:hr,float:or,map:tr,null:nr,pairs:gr,set:mr,timestamp:pr,bool:rr,int:ar,merge:ur,omap:fr,seq:er,str:Zn},nc=pn("safeLoad","load"),rc=pn("safeLoadAll","loadAll"),ac=pn("safeDump","dump"),oc={Type:$s,Schema:Us,FAILSAFE_SCHEMA:Vs,JSON_SCHEMA:Gs,CORE_SCHEMA:Xs,DEFAULT_SCHEMA:Js,load:Qs,loadAll:Zs,dump:ec,YAMLException:tc,types:ic,safeLoad:nc,safeLoadAll:rc,safeDump:ac},Br=oc;window.interact||(window.interact=Fr.default);window.jsyaml||(window.jsyaml=Br);var sc="0.9.5";console.info(`%c drag-and-drop-card %c v${sc} `,"color:#fff;background:#03a9f4;font-weight:700;padding:2px 6px;border-radius:3px 0 0 3px","color:#03303a;background:#bdeaff;padding:2px 6px;border-radius:0 3px 3px 0");var cc=(e,...u)=>console.debug(`[drag-and-drop-card] ${e}`,...u);console.info("%c drag-and-drop-card loaded","color:#03a9f4;font-weight:700;");var un=()=>new Promise(e=>requestAnimationFrame(()=>e())),lc=()=>new Promise(e=>window.requestIdleCallback?requestIdleCallback(()=>e()):setTimeout(e,0)),hn=class e extends HTMLElement{constructor(){super();Mn(this,"__booting",!1);this.shadowRoot||this.attachShadow({mode:"open"}),this.__rebuiltCards=new WeakSet}_updateTabsA11y_(){var o;let t=this.tabsBar;if(!t)return;t.setAttribute("role","tablist"),t.querySelectorAll(".ddc-tab").forEach((l,s)=>{let d=l.classList.contains("active");l.setAttribute("role","tab"),l.setAttribute("aria-selected",String(d)),l.setAttribute("tabindex",d?"0":"-1"),l.dataset.index=String(s)}),this.__tabsKeyHandler||(this.__tabsKeyHandler=l=>{if(!["ArrowLeft","ArrowRight","Home","End"].includes(l.key))return;let d=Array.from(t.querySelectorAll(".ddc-tab"));if(!d.length)return;l.preventDefault();let f=d.findIndex(m=>m===document.activeElement),y=d.findIndex(m=>m.classList.contains("active")),g=f>=0?f:y>=0?y:0;l.key==="ArrowRight"&&(g=Math.min(d.length-1,g+1)),l.key==="ArrowLeft"&&(g=Math.max(0,g-1)),l.key==="Home"&&(g=0),l.key==="End"&&(g=d.length-1);let b=d[g];if(b){try{b.focus({preventScroll:!1})}catch{}b.click()}},t.addEventListener("keydown",this.__tabsKeyHandler)),this.__tabsScrollHandler||(this.__tabsScrollHandler=()=>{var l;return(l=this._updateTabOverflowShadows_)==null?void 0:l.call(this)},t.addEventListener("scroll",this.__tabsScrollHandler,{passive:!0})),(o=this._updateTabOverflowShadows_)==null||o.call(this)}_getCurrentDashboardUrlPath_(){let r=(window.location.pathname||"/").replace(/^\/+/,"").split("/")[0]||"lovelace";return r==="lovelace"?null:r}async _ensureCardIdSeededInStorage_(){var r;if((r=this.config)!=null&&r.id)return this.config.id;let t=crypto!=null&&crypto.randomUUID?crypto.randomUUID():"ddc_"+Math.random().toString(36).slice(2);this.config={...this.config,id:t};try{let o=this._getCurrentDashboardUrlPath_(),l=await this.hass.callWS(o?{type:"lovelace/config",url_path:o}:{type:"lovelace/config"}),s=this._findThisCardPathRecursive_(l,w=>(w==null?void 0:w.type)==="custom:drag-and-drop-card"&&(!w.id||w.id===t));if(!s)return t;let{viewIndex:d,cardIndex:f,parentPath:y}=s,g=l.views[d],m={...this._getCardByPath_(g,y,f),id:t};this._setCardByPath_(g,y,f,m),await this.hass.callWS(o?{type:"lovelace/config/save",url_path:o,config:l}:{type:"lovelace/config/save",config:l})}catch{}return t}async _persistThisCardConfigToStorage_(){var m,w;await this._ensureCardIdSeededInStorage_();let t={type:"custom:drag-and-drop-card",id:(m=this.config)==null?void 0:m.id,...this._config},r=this._getCurrentDashboardUrlPath_(),o=await this.hass.callWS(r?{type:"lovelace/config",url_path:r}:{type:"lovelace/config"}),l=this._findThisCardPathRecursive_(o,O=>{var E;return(O==null?void 0:O.type)==="custom:drag-and-drop-card"&&(O==null?void 0:O.id)===((E=this.config)==null?void 0:E.id)});if(!l)throw new Error("Card not found in Lovelace config");let{viewIndex:s,cardIndex:d,parentPath:f}=l,y=o.views[s],b={...this._getCardByPath_(y,f,d),...t};this._setCardByPath_(y,f,d,b),await this.hass.callWS(r?{type:"lovelace/config/save",url_path:r,config:o}:{type:"lovelace/config/save",config:o}),this.config=b,(w=this.requestUpdate)==null||w.call(this)}_findThisCardPathRecursive_(t,r){let o=(t==null?void 0:t.views)||[];for(let l=0;l<o.length;l++){let s=this._findInCardTree_(o[l],r);if(s)return{viewIndex:l,...s}}return null}_findInCardTree_(t,r,o=[]){var s;let l=(t==null?void 0:t.cards)||[];for(let d=0;d<l.length;d++){let f=l[d];if(r(f))return{cardIndex:d,parentPath:o};if((s=f==null?void 0:f.cards)!=null&&s.length){let y=this._findInCardTree_(f,r,o.concat(d));if(y)return y}}return null}_getCardByPath_(t,r,o){let l=t;for(let s of r||[])l=l.cards[s];return l.cards[o]}_setCardByPath_(t,r,o,l){let s=t;for(let d of r||[])s=s.cards[d];s.cards[o]=l}_ensureToolbarStyles_(){try{if(this.shadowRoot.querySelector("#ddc-toolbar-styles"))return;let r=document.createElement("style");r.id="ddc-toolbar-styles",r.textContent=`/* ===== Edit toolbar ===== */
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
  `,this.shadowRoot.appendChild(t)}_setHeaderVisible_(t=!0){var r,o,l,s,d;try{(((r=this._deepQueryAll)==null?void 0:r.call(this,"app-header, ha-top-app-bar, ha-top-app-bar-fixed, mwc-top-app-bar-fixed, ha-header-bar, app-toolbar, ha-toolbar"))||[]).forEach(m=>{m&&(m.dataset.ddcPrevDisplayHeader===void 0&&(m.dataset.ddcPrevDisplayHeader=m.style.display||"",m.dataset.ddcPrevMinH=m.style.minHeight||"",m.dataset.ddcPrevH=m.style.height||"",m.dataset.ddcPrevVis=m.style.visibility||""),t?(m.style.display=m.dataset.ddcPrevDisplayHeader||"",m.style.minHeight=m.dataset.ddcPrevMinH||"",m.style.height=m.dataset.ddcPrevH||"",m.style.visibility=m.dataset.ddcPrevVis||"",m.removeAttribute("hidden")):(m.style.display="none",m.style.minHeight="0",m.style.height="0",m.style.visibility="hidden",m.setAttribute("hidden","")))}),(((o=this._deepQueryAll)==null?void 0:o.call(this,'[slot="actionItems"], ha-icon-button, ha-button-menu, assist-button, search-input, ha-quick-bar, ha-mwc-menu'))||[]).forEach(m=>{m&&(m.dataset.ddcPrevDisplayAction===void 0&&(m.dataset.ddcPrevDisplayAction=m.style.display||"",m.dataset.ddcPrevVisAction=m.style.visibility||""),t?(m.style.display=m.dataset.ddcPrevDisplayAction||"",m.style.visibility=m.dataset.ddcPrevVisAction||""):(m.style.display="none",m.style.visibility="hidden"))}),[...((l=this._deepQueryAll)==null?void 0:l.call(this,"ha-app-layout"))||[],...((s=this._deepQueryAll)==null?void 0:s.call(this,"home-assistant-main"))||[],document.documentElement,document.body].filter(Boolean).forEach(m=>{if(m)if(m.dataset.ddcPrevHdrVars===void 0&&(m.dataset.ddcPrevHdrVars=JSON.stringify({mdc:m.style.getPropertyValue("--mdc-top-app-bar-height")||"",app:m.style.getPropertyValue("--app-header-height")||"",hdr:m.style.getPropertyValue("--header-height")||"",hah:m.style.getPropertyValue("--ha-header-height")||"",pad:m.style&&(m.style.paddingTop||"")||""})),t)try{let w=JSON.parse(m.dataset.ddcPrevHdrVars||"{}");m.style.setProperty("--mdc-top-app-bar-height",w.mdc||""),m.style.setProperty("--app-header-height",w.app||""),m.style.setProperty("--header-height",w.hdr||""),m.style.setProperty("--ha-header-height",w.hah||""),w.pad!==void 0&&(m.style.paddingTop=w.pad||"")}catch{}else{m.style.setProperty("--mdc-top-app-bar-height","0px"),m.style.setProperty("--app-header-height","0px"),m.style.setProperty("--header-height","0px"),m.style.setProperty("--ha-header-height","0px");try{m.style.paddingTop="0px"}catch{}}}),(((d=this._deepQueryAll)==null?void 0:d.call(this,"#contentContainer"))||[]).forEach(m=>{m&&(m.dataset.ddcPrevContentPadTop===void 0&&(m.dataset.ddcPrevContentPadTop=m.style&&(m.style.paddingTop||"")||""),m.style.paddingTop=t?m.dataset.ddcPrevContentPadTop||"":"0px")})}catch{}}_setSidebarVisible_(t=!0){var r,o;try{(((r=this._deepQueryAll)==null?void 0:r.call(this,"ha-sidebar"))||[]).forEach(d=>{d&&(d.dataset.ddcPrevDisplaySidebar===void 0&&(d.dataset.ddcPrevDisplaySidebar=d.style.display||""),d.style.display=t?d.dataset.ddcPrevDisplaySidebar||"":"none")}),(((o=this._deepQueryAll)==null?void 0:o.call(this,"ha-drawer"))||[]).forEach(d=>{if(d){d.dataset.ddcPrevDrawerWidth===void 0&&(d.dataset.ddcPrevDrawerWidth=d.style.getPropertyValue("--mdc-drawer-width")||""),t?d.style.setProperty("--mdc-drawer-width",d.dataset.ddcPrevDrawerWidth||""):d.style.setProperty("--mdc-drawer-width","0px");try{!t&&typeof d.close=="function"&&d.close()}catch{}}})}catch{}}_applyHaChromeVisibility_(){var t;try{let r=!!this.editMode||((t=this._isInHaEditorPreview)==null?void 0:t.call(this));r||!this.hideHaHeader?this._setHeaderVisible_(!0):this._setHeaderVisible_(!1),r||!this.hideHaSidebar?this._setSidebarVisible_(!0):this._setSidebarVisible_(!1)}catch{}}_applyBackgroundImageFromConfig(){var l;let t=this._config||{},r=t.background_image||t.bg_image||null,o=this.cardContainer;if(o)if(r&&r.src){let s=String(r.src).trim(),d=r.repeat===!0||r.repeat==="repeat"?"repeat":"no-repeat",f=Math.max(0,Math.min(1,Number((l=r.opacity)!=null?l:1))),y=r.size||"cover",g=r.position||"center center",b=r.attachment||"scroll",m=r.filter||"none";o.style.setProperty("--ddc-bg-image",s?`url("${s.replace(/"/g,'"')}")`:"none"),o.style.setProperty("--ddc-bg-repeat",d),o.style.setProperty("--ddc-bg-opacity",String(f)),o.style.setProperty("--ddc-bg-size",y),o.style.setProperty("--ddc-bg-position",g),o.style.setProperty("--ddc-bg-attachment",b),o.style.setProperty("--ddc-bg-filter",m),o.classList.add("has-bg-image")}else o.style.removeProperty("--ddc-bg-image"),o.style.removeProperty("--ddc-bg-repeat"),o.style.removeProperty("--ddc-bg-opacity"),o.style.removeProperty("--ddc-bg-size"),o.style.removeProperty("--ddc-bg-position"),o.style.removeProperty("--ddc-bg-attachment"),o.style.removeProperty("--ddc-bg-filter"),o.classList.remove("has-bg-image")}_applyBackgroundFromConfig(){var t,r,o,l,s,d,f,y;try{let g=((t=this._config)==null?void 0:t.background_mode)||((o=(r=this._config)==null?void 0:r.background_image)!=null&&o.src?"image":"none");if((l=this._destroyParticles_)==null||l.call(this),(s=this._destroyYouTube_)==null||s.call(this),g!=="image"){let b=this.cardContainer;b&&(b.style.removeProperty("--ddc-bg-image"),b.style.removeProperty("--ddc-bg-repeat"),b.style.removeProperty("--ddc-bg-opacity"),b.style.removeProperty("--ddc-bg-size"),b.style.removeProperty("--ddc-bg-position"),b.style.removeProperty("--ddc-bg-attachment"),b.style.removeProperty("--ddc-bg-filter"),b.classList.remove("has-bg-image"))}if(g==="image"){(d=this._applyBackgroundImageFromConfig)==null||d.call(this);return}if(g==="particles"){let b=((f=this._config)==null?void 0:f.background_particles)||{};this._attachParticlesBackground_(b);return}if(g==="youtube"){let b=((y=this._config)==null?void 0:y.background_youtube)||{};this._attachYouTubeBackground_(b);return}}catch(g){console.warn("[drag-and-drop-card] _applyBackgroundFromConfig failed:",g)}}_ensureBgHost_(){let t=this.cardContainer;if(!t)return null;let r=t.querySelector("#ddcBgHost");return r?r.innerHTML="":(r=document.createElement("div"),r.className="ddc-bg-host",r.id="ddcBgHost",r.setAttribute("aria-hidden","true"),t.prepend(r)),r}async _loadScriptOnce_(t){if(!t)throw new Error("script src required");if(this.__scriptCache||(this.__scriptCache=new Map),this.__scriptCache.has(t))return this.__scriptCache.get(t);let r=new Promise((o,l)=>{let s=document.createElement("script");s.src=t,s.async=!0,s.onload=()=>o(!0),s.onerror=()=>l(new Error("failed to load "+t)),document.head.appendChild(s)});return this.__scriptCache.set(t,r),r}_getRenderRoot_(){return this.renderRoot||this.shadowRoot||this}_withScopedDocument_(t){let r=this._getRenderRoot_();if(!r||r===document||!r.querySelector)return t();let o=document,l=o.getElementById.bind(o),s=o.querySelector?o.querySelector.bind(o):null;o.getElementById=d=>{try{let f=window.CSS&&CSS.escape?CSS.escape(String(d)):String(d);return r.querySelector("#"+f)||l(d)}catch{return l(d)}},s&&(o.querySelector=d=>{try{return r.querySelector(d)||s(d)}catch{return s(d)}});try{return t()}finally{o.getElementById=l,s&&(o.querySelector=s)}}async _ensureParticles_(){if(window.particlesJS)return!0;if(!this.__particlesLoadPromise){let t=r=>new Promise((o,l)=>{let s=document.createElement("script");s.src=r,s.async=!0,s.onload=()=>o(!0),s.onerror=()=>l(new Error("Failed to load "+r)),document.head.appendChild(s)});this.__particlesLoadPromise=t("/local/particles.min.js").catch(()=>t("https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js")).then(()=>!!window.particlesJS).catch(()=>!1)}return this.__particlesLoadPromise}_attachParticlesBackground_(t={}){var y,g;let r=(y=this._ensureBgHost_)==null?void 0:y.call(this);if(!r)return;try{(g=this._destroyParticles_)==null||g.call(this)}catch{}r.innerHTML="";let o=document.createElement("div");o.id="ddcParticles",o.className="particles-js",o.style.position="absolute",o.style.inset="0",r.appendChild(o);let l={particles:{number:{value:70,density:{enable:!0,value_area:900}},color:{value:"#ffffff"},shape:{type:"circle"},opacity:{value:.4},size:{value:3,random:!0},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.3,width:1},move:{enable:!0,speed:2,out_mode:"out"}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1},onclick:{enable:!1},resize:!0},modes:{repulse:{distance:100},push:{particles_nb:4}}},retina_detect:!0},s=!!t.pointer_events,d=t.config||JSON.parse(JSON.stringify(l));s?(d.interactivity.events.onhover={enable:!0,mode:"repulse"},d.interactivity.events.onclick={enable:!0,mode:"push"},r.style.pointerEvents="auto"):r.style.pointerEvents="none",(async()=>{var w;if(!await((w=this._ensureParticles_)==null?void 0:w.call(this))||!window.particlesJS)return;await(typeof requestAnimationFrame=="function"?new Promise(O=>requestAnimationFrame(()=>O())):Promise.resolve()),await(typeof requestAnimationFrame=="function"?new Promise(O=>requestAnimationFrame(()=>O())):Promise.resolve());let m=d;if(t.config_url)try{m=await(await fetch(t.config_url,{cache:"no-store"})).json()}catch(O){console.warn("[drag-and-drop-card] Failed to fetch particles config; falling back to defaults",O),m=d}this._withScopedDocument_(()=>{if(!Array.isArray(window.pJSDom))try{window.pJSDom=[]}catch{}window.particlesJS("ddcParticles",m)}),Array.isArray(window.pJSDom)&&window.pJSDom.length&&(this.__particlesInst=window.pJSDom[window.pJSDom.length-1])})(),this.__particlesHost=r}_destroyParticles_(){try{Array.isArray(window.pJSDom)||(window.pJSDom=[]),window.pJSDom.length&&(window.pJSDom.forEach(t=>{var r,o,l,s,d,f,y,g;try{(s=(l=(o=(r=t.pJS)==null?void 0:r.fn)==null?void 0:o.vendors)==null?void 0:l.destroy)==null||s.call(l)}catch{}try{(g=(y=(f=(d=t.pJS)==null?void 0:d.fn)==null?void 0:f.vendors)==null?void 0:y.destroypJS)==null||g.call(y)}catch{}}),window.pJSDom.length=0)}catch{}this.__particlesHost&&(this.__particlesHost.innerHTML=""),this.__particlesHost=null,this.__particlesInst=null}_parseYouTubeId_(t){if(!t)return null;let r=String(t).trim(),o=r.match(/(?:youtube\.com\/.*[?&]v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([A-Za-z0-9_-]{11})/)||r.match(/^([A-Za-z0-9_-]{11})$/);return o?o[1]:null}async _ensureYouTube_(){var t;return(t=window.YT)!=null&&t.Player?!0:(this.__ytReadyPromise||(this.__ytReadyPromise=new Promise(r=>{var s;let o=()=>r(!0);if((s=window.YT)!=null&&s.Player)return o();window.onYouTubeIframeAPIReady=o;let l=document.createElement("script");l.src="https://www.youtube.com/iframe_api",l.async=!0,l.onerror=()=>r(!1),document.head.appendChild(l)})),this.__ytReadyPromise)}_attachYouTubeIframeDirect_(t,r,{start:o,end:l,mute:s=!0,loop:d=!0}={}){var b;let f=new URLSearchParams({autoplay:"1",mute:s?"1":"0",controls:"0",playsinline:"1",rel:"0",modestbranding:"1",iv_load_policy:"3",loop:d?"1":"0"});d&&f.set("playlist",r),Number.isFinite(o)&&f.set("start",String(o)),Number.isFinite(l)&&f.set("end",String(l));let y=`https://www.youtube.com/embed/${r}?${f.toString()}`,g=document.createElement("iframe");g.src=y,g.setAttribute("frameborder","0"),g.setAttribute("allow","autoplay; encrypted-media; picture-in-picture; fullscreen"),g.setAttribute("allowfullscreen","true"),g.style.position="absolute",g.style.inset="0",g.style.width="100%",g.style.height="100%",t.appendChild(g),this.__ytWrap=t,(b=this._layoutYtBackground_)==null||b.call(this)}_attachYouTubeBackground_(t={}){let r=this._ensureBgHost_();if(!r)return;let o=this._parseYouTubeId_(t.video_id||t.url);if(!o){console.warn("[drag-and-drop-card] No YouTube video id");return}let l=document.createElement("div");l.className="yt-bg",l.style.position="absolute",l.style.inset="0",l.style.pointerEvents="none",r.appendChild(l);let s=document.createElement("div");s.id="ddcYtFrame",s.style.position="absolute",s.style.left="0",s.style.top="0",s.style.width="100%",s.style.height="100%",l.appendChild(s);let d=Number.isFinite(t.start)?Number(t.start):void 0,f=Number.isFinite(t.end)?Number(t.end):void 0,y=t.mute!==!1,g=t.loop!==!1;(async()=>{if(!await this._ensureYouTube_()||!(window.YT&&window.YT.Player)){if(this._attachYouTubeIframeDirect_(l,o,{start:d,end:f,mute:y,loop:g}),!this.__ytResizeObs){this.__ytResizeObs=new ResizeObserver(()=>{var w;return(w=this._layoutYtBackground_)==null?void 0:w.call(this)});try{this.__ytResizeObs.observe(this.cardContainer)}catch{}window.addEventListener("resize",this.__ytOnWinResize=()=>{var w;return(w=this._layoutYtBackground_)==null?void 0:w.call(this)})}return}if(this.__ytPlayer=new window.YT.Player(s,{width:"100%",height:"100%",videoId:o,playerVars:{autoplay:1,controls:0,disablekb:1,fs:0,iv_load_policy:3,modestbranding:1,rel:0,playsinline:1,loop:g?1:0,playlist:g?o:void 0,start:d,end:f},events:{onReady:w=>{var O;try{y&&w.target.mute(),w.target.playVideo()}catch{}(O=this._layoutYtBackground_)==null||O.call(this)},onStateChange:w=>{if(w.data===window.YT.PlayerState.ENDED&&g)try{let O=Number.isFinite(d)?d:0,E=window.performance&&performance.now?performance.now():Date.now();(!this.__ytLastLoopAt||E-this.__ytLastLoopAt>1500)&&(this.__ytLastLoopAt=E,w.target.seekTo(O,!0),w.target.playVideo())}catch{}}}}),!this.__ytResizeObs){this.__ytResizeObs=new ResizeObserver(()=>{var w;return(w=this._layoutYtBackground_)==null?void 0:w.call(this)});try{this.__ytResizeObs.observe(this.cardContainer)}catch{}window.addEventListener("resize",this.__ytOnWinResize=()=>{var w;return(w=this._layoutYtBackground_)==null?void 0:w.call(this)})}})(),this.__ytWrap=l}_layoutYtBackground_(){try{if(!this.__ytWrap)return;let t=this.cardContainer.getBoundingClientRect(),r=t.width,o=t.height;if(!r||!o)return;let l=16/9,s=r/o,d,f,y,g;s>l?(d=r,f=r/l,y=0,g=(o-f)/2):(f=o,d=o*l,g=0,y=(r-d)/2),this.__ytWrap.style.overflow="hidden";let b=this.__ytWrap.querySelector("iframe")||this.__ytWrap;b.style.width=`${d}px`,b.style.height=`${f}px`,b.style.left=`${y}px`,b.style.top=`${g}px`}catch{}}_destroyYouTube_(){var t,r,o;try{(r=(t=this.__ytPlayer)==null?void 0:t.destroy)==null||r.call(t)}catch{}if(this.__ytPlayer=null,this.__ytResizeObs){try{this.__ytResizeObs.disconnect()}catch{}this.__ytResizeObs=null}this.__ytOnWinResize&&(window.removeEventListener("resize",this.__ytOnWinResize),this.__ytOnWinResize=null),(o=this.__ytWrap)!=null&&o.parentNode&&this.__ytWrap.parentNode.removeChild(this.__ytWrap),this.__ytWrap=null}_evaluateVisibility_(t){try{let r=this.hass||this._hass;if(!Array.isArray(t)||t.length===0)return!0;let o=l=>{var d,f,y,g,b;if(!l||typeof l!="object")return!0;let s=l.condition||l.type||"state";if(s==="and"||s==="or"){let m=Array.isArray(l.conditions)?l.conditions:[];return m.length===0?!0:s==="and"?m.every(w=>o(w)):m.some(w=>o(w))}if(s==="state"){let m=l.entity;if(!m)return!0;let w=(d=r==null?void 0:r.states)==null?void 0:d[m];if(!w)return!1;let O=String((f=w.state)!=null?f:"");return l.state!==void 0?(Array.isArray(l.state)?l.state:[l.state]).some(P=>String(P)===O):l.state_not!==void 0?!(Array.isArray(l.state_not)?l.state_not:[l.state_not]).some(P=>String(P)===O):!0}if(s==="numeric_state"){let m=l.entity;if(!m)return!0;let w=(y=r==null?void 0:r.states)==null?void 0:y[m];if(!w)return!1;let O=parseFloat(w.state);return!(isNaN(O)||l.above!==void 0&&!(O>Number(l.above))||l.below!==void 0&&!(O<Number(l.below)))}if(s==="screen"){let m=l.media_query||l.query;if(!m||typeof m!="string")return!0;try{return window.matchMedia(m).matches}catch{return!0}}if(s==="user"){let m=Array.isArray(l.users)?l.users:l.user?[l.user]:[];if(!m.length)return!0;let w=((g=r==null?void 0:r.user)==null?void 0:g.id)||((b=r==null?void 0:r.user)==null?void 0:b.id)||null;return w?m.includes(w):!0}return!0};return t.every(l=>o(l))}catch(r){return console.warn("[ddc:visibility] evaluate error",r),!0}}_applyVisibility_(){var t;try{let r=((t=this.cardContainer)==null?void 0:t.children)||[],o=this._normalizeTabId(this.activeTab);for(let l of r){if(!l||!l.firstElementChild||this._normalizeTabId(l.dataset.tabId)!==o)continue;let f=(this._extractCardConfig(l.firstElementChild)||{}).visibility,y=this.editMode?!0:this._evaluateVisibility_(f);l.style.display=y?"":"none"}}catch(r){console.warn("[ddc:visibility] apply error",r)}}async _onKeyDown_(t){var d,f,y,g,b,m,w,O,E,P;if(!this.editMode||this._isTypingTarget_(t.target))return;let r=Number(this.gridSize||10),o=t.altKey?1:t.shiftKey?r*5:r,l=0,s=0;switch(t.key){case"ArrowLeft":l=-o;break;case"ArrowRight":l=o;break;case"ArrowUp":s=-o;break;case"ArrowDown":s=o;break}if(l||s){t.preventDefault(),this._moveSelectionBy_(l,s,{liveSnap:!t.altKey});return}if(t.key==="Delete"||t.key==="Backspace"){let R=this._selection&&this._selection.size?Array.from(this._selection):[];if(!R.length)return;t.preventDefault(),R.forEach(C=>C.remove()),(d=this._clearSelection)==null||d.call(this),(f=this._resizeContainer)==null||f.call(this),(y=this._queueSave)==null||y.call(this,"delete-key"),(g=this._ensurePlaceholderIfEmpty)==null||g.call(this);return}if((t.ctrlKey||t.metaKey)&&(t.key==="d"||t.key==="D")){t.preventDefault(),await this._duplicateSelection_();return}if((t.ctrlKey||t.metaKey)&&t.key==="]"){t.preventDefault(),this._selection&&((m=(b=this._selection).forEach)==null||m.call(b,R=>{var C;return(C=this._adjustZ)==null?void 0:C.call(this,R,1)})),(w=this._queueSave)==null||w.call(this,"z-up");return}if((t.ctrlKey||t.metaKey)&&t.key==="["){t.preventDefault(),this._selection&&((E=(O=this._selection).forEach)==null||E.call(O,R=>{var C;return(C=this._adjustZ)==null?void 0:C.call(this,R,-1)})),(P=this._queueSave)==null||P.call(this,"z-down");return}}async _duplicateSelection_(){var r,o,l,s,d,f,y,g,b,m,w,O;if(!this._selection||!this._selection.size)return;let t=Array.from(this._selection);for(let E of t)try{let P=((r=this._extractCardConfig)==null?void 0:r.call(this,E.firstElementChild))||{},R=await((o=this._createCard)==null?void 0:o.call(this,P)),C=(l=this._makeWrapper)==null?void 0:l.call(this,R);if(!R||!C)continue;C.style.width=E.style.width,C.style.height=E.style.height;let A=Number(this.gridSize||10),L=(parseFloat(E.getAttribute("data-x"))||0)+A,x=(parseFloat(E.getAttribute("data-y"))||0)+A;(s=this._setCardPosition)==null||s.call(this,C,L,x),C.style.zIndex=String((((d=this._highestZ)==null?void 0:d.call(this))||0)+1);try{let M=(f=E.dataset)==null?void 0:f.tabId;M&&(C.dataset.tabId=M)}catch{}(y=this.cardContainer)==null||y.appendChild(C);try{(g=this._addTabSelectorToChip)==null||g.call(this,C,C.dataset.tabId)}catch{}try{(b=this._rebuildOnce)==null||b.call(this,C.firstElementChild)}catch{}try{(m=this._initCardInteract)==null||m.call(this,C)}catch{}}catch{}try{(w=this._resizeContainer)==null||w.call(this)}catch{}try{(O=this._queueSave)==null||O.call(this,"duplicate")}catch{}}_moveSelectionBy_(t,r,{liveSnap:o=!0}={}){var g,b,m,w,O;if(!this._selection||!this._selection.size)return;let l=Array.from(this._selection),s=Number(this.gridSize||10),d=(g=this._isContainerFixed)==null?void 0:g.call(this),f=((b=this._getContainerSize)==null?void 0:b.call(this))||{w:1/0,h:1/0},y=l.map(E=>{let P=parseFloat(E.getAttribute("data-x-raw"))||parseFloat(E.getAttribute("data-x"))||0,R=parseFloat(E.getAttribute("data-y-raw"))||parseFloat(E.getAttribute("data-y"))||0,C=parseFloat(E.style.width)||E.getBoundingClientRect().width,A=parseFloat(E.style.height)||E.getBoundingClientRect().height,L=P+t,x=R+r;d&&(L=Math.max(0,Math.min(L,Math.max(0,f.w-C))),x=Math.max(0,Math.min(x,Math.max(0,f.h-A))));let M=o?Math.round(L/s)*s:L,I=o?Math.round(x/s)*s:x;return{el:E,rawX:L,rawY:x,snapX:M,snapY:I,w:C,h:A}});if(this.disableOverlap&&typeof this._pushCardsOutOfTheWay=="function")try{this._pushCardsOutOfTheWay(y,t,r,o,s)}catch{}for(let E of y){E.el.setAttribute("data-x-raw",String(E.rawX)),E.el.setAttribute("data-y-raw",String(E.rawY));try{(m=this._setCardPosition)==null||m.call(this,E.el,E.snapX,E.snapY)}catch{}}try{(w=this._resizeContainer)==null||w.call(this)}catch{}try{(O=this._queueSave)==null||O.call(this,"nudge")}catch{}}_syncTabsWidth_(){try{let t=this.tabsBar;if(!t)return;if(this.tabsPosition==="left"){t.style.width="",t.style.maxWidth="";return}let r=this.cardContainer||this.__scaleOuter;if(!r)return;let o=0;try{let l=r.getBoundingClientRect();o=l&&l.width?l.width:0}catch{}if(o<=0&&this.__scaleOuter&&this.__scaleOuter!==r)try{let l=this.__scaleOuter.getBoundingClientRect();o=l&&l.width?l.width:0}catch{}o>0&&(t.style.width=`${o}px`,t.style.maxWidth=`${o}px`)}catch{}}_isTypingTarget_(t){var l,s,d,f;if(!t||t===window||t===document)return!1;let r=(l=t.closest)==null?void 0:l.call(t,'input, textarea, [contenteditable="true"], ha-textfield, mwc-textfield');if(!r)return!1;let o=((d=(s=r.tagName)==null?void 0:s.toLowerCase)==null?void 0:d.call(s))||"";return o==="input"||o==="textarea"||((f=r.hasAttribute)==null?void 0:f.call(r,"contenteditable"))}_scheduleReflowAndScale(){this.__reflowRAF||(this.__reflowRAF=requestAnimationFrame(()=>{var t,r;this.__reflowRAF=null;try{(this.containerSizeMode||this.container_size_mode||"dynamic").toLowerCase()==="dynamic"&&((t=this._resizeContainer)==null||t.call(this))}catch{}try{(r=this._applyAutoScale)==null||r.call(this)}catch{}}))}__ddcBindPointerListeners(){if(!this.__ddcPtrBound){this.__ddcPtrBound=!0,this.__onDDCPointerDown=t=>{var r,o;try{if(t.button!==void 0&&t.button!==0)return;let l=((r=t.composedPath)==null?void 0:r.call(t))||[],s=null;for(let d of l)if(d&&d.classList&&d.classList.contains("card-wrapper")){s=d;break}if(!s)return;this.__ddcDragging=!0,this.__scaleOuter&&(this.__prevOverflow=this.__scaleOuter.style.overflow,this.__scaleOuter.style.overflow="visible"),(o=this._scheduleReflowAndScale)==null||o.call(this)}catch{}},this.__onDDCPointerMove=t=>{var r;try{if(!this.__ddcDragging)return;(r=this._scheduleReflowAndScale)==null||r.call(this)}catch{}},this.__onDDCPointerUp=t=>{var r;try{if(!this.__ddcDragging)return;this.__ddcDragging=!1,this.__scaleOuter&&(this.__scaleOuter.style.overflow=this.__prevOverflow||"");try{(r=this._applyAutoScale)==null||r.call(this)}catch{}}catch{}};try{this.addEventListener("pointerdown",this.__onDDCPointerDown,{passive:!0})}catch{}try{this.addEventListener("pointermove",this.__onDDCPointerMove,{passive:!0})}catch{}try{window.addEventListener("pointerup",this.__onDDCPointerUp,{passive:!0})}catch{}try{window.addEventListener("pointercancel",this.__onDDCPointerUp,{passive:!0})}catch{}}}_renderEditToolbar_(){this.shadowRoot.querySelectorAll(".ddc-toolbar").forEach(m=>m.remove()),this._ensureToolbarStyles_();let t=document.createElement("div");t.className="ddc-toolbar";let r=document.createElement("div");r.className="ddc-t-group",r.append(this._mkBtn_("add_card","mdi:plus-box","Add card (A)","primary"),this._mkBtn_("snap_toggle","mdi:magnet","Toggle snap (G)"),this._mkBtn_("align_grid","mdi:grid","Align to grid"));let o=document.createElement("div");o.className="ddc-t-group";let l=document.createElement("div");l.className="ddc-t-status";let s=document.createElement("div");s.className="ddc-t-dot"+(this.__dirty?" dirty":"");let d=document.createElement("span");d.textContent=this.__dirty?"Unsaved changes":`Saved${this.__lastSavedAt?" \xB7 "+this.__lastSavedAt:""}`,l.append(s,d),o.appendChild(l);let f=document.createElement("div");f.className="ddc-t-group",f.append(this._mkBtn_("reload","mdi:refresh","Reload (R)","ghost"),this._mkBtn_("open_hads","mdi:alpha-h-box-outline","Open HACS/HADS","ghost"),this._mkBtn_("apply","mdi:content-save","Apply / Save (S)","primary"),this._mkBtn_("exit_edit","mdi:logout-variant","Exit edit (Esc)","danger"));let y=document.createElement("div");y.className="ddc-t-group ddc-t-row",y.append(r);let g=document.createElement("div");g.className="ddc-t-group ddc-t-row",g.append(o);let b=document.createElement("div");b.className="ddc-t-group ddc-t-row",b.append(f),t.append(y,document.createElement("div")).lastChild.className="ddc-t-sep",t.append(g,document.createElement("div")).lastChild.className="ddc-t-sep",t.append(b),t.addEventListener("click",m=>{let w=m.target.closest("[data-action]");w&&this._onToolbarAction_(w.dataset.action,{button:w,bar:t,dot:s,txt:d})}),this.shadowRoot.appendChild(t);try{this.__toolbarRO&&this.__toolbarRO.disconnect(),this.__toolbarRO=new ResizeObserver(m=>{for(let w of m)t.classList.toggle("compact",w.contentRect.width<980)}),this.__toolbarRO.observe(t)}catch{}this.__toolbarKeyHandler=m=>{if(!(!this.editMode&&!this.isEditing)){if(m.key==="a"||m.key==="A")return this._onToolbarAction_("add_card");if(m.key==="s"||m.key==="S")return this._onToolbarAction_("apply");if(m.key==="r"||m.key==="R")return this._onToolbarAction_("reload");if(m.key==="g"||m.key==="G")return this._onToolbarAction_("snap_toggle");if(m.key==="Escape")return this._onToolbarAction_("exit_edit")}},window.addEventListener("keydown",this.__toolbarKeyHandler)}async _onToolbarAction_(t,r={}){var o,l,s,d,f,y,g,b,m,w,O;switch(t){case"add_card":(o=this._openAddCardDialog_)!=null&&o.call(this)||(l=this._addNewCard_)!=null&&l.call(this)||((s=this._openEntityPicker_)==null||s.call(this));break;case"snap_toggle":{this.dragLiveSnap=!this.dragLiveSnap,(d=this._initInteract)==null||d.call(this),(f=this._toast_)==null||f.call(this,`Live snap ${this.dragLiveSnap?"ON":"OFF"}`);break}case"align_grid":(y=this._alignAllToGrid_)==null||y.call(this,this.gridSize);break;case"reload":(g=this._reloadLayout_)==null||g.call(this);break;case"open_hads":(b=this._openHACS_)!=null&&b.call(this)||window.open("/hacs","_blank")||window.open("/hacsfiles","_blank");break;case"apply":{let E=()=>{this._setDirty_(!1),r!=null&&r.txt&&(r.txt.textContent=`Saved \xB7 ${this.__lastSavedAt}`),r!=null&&r.dot&&r.dot.classList.remove("dirty","error")},P=()=>{r!=null&&r.dot&&r.dot.classList.add("error")};try{this._saveLayoutNow_?await this._saveLayoutNow_():this._persistThisCardConfigToStorage_?await this._persistThisCardConfigToStorage_():(m=this._queueSave)==null||m.call(this,"toolbar-apply",!0),this.__lastSavedAt=new Date().toLocaleTimeString(),E()}catch(R){console.warn(R),P()}break}case"exit_edit":if((w=this._toggleEditMode)!=null&&w.call(this,!1)||(O=this._exitEditMode_)!=null&&O.call(this)||(this.isEditing=!1),this.__toolbarKeyHandler&&(window.removeEventListener("keydown",this.__toolbarKeyHandler),this.__toolbarKeyHandler=null),this.__toolbarRO){try{this.__toolbarRO.disconnect()}catch{}this.__toolbarRO=null}this.shadowRoot.querySelectorAll(".ddc-toolbar").forEach(E=>E.remove());break}}_ensureScaleWrapper(){let t=this.cardContainer;if(!t||this.__scaleOuter&&this.__scaleOuter.contains(t))return;let r=document.createElement("div");r.className="ddc-scale-outer",Object.assign(r.style,{position:"relative",width:"100%",overflow:"hidden"}),t.parentNode&&(t.parentNode.insertBefore(r,t),r.appendChild(t)),Object.assign(t.style,{position:"absolute",top:"0",left:"0",transformOrigin:"top left"}),this.__scaleOuter=r}_hasCardModDeep(t){try{if(!t||typeof t!="object")return!1;if(t.card_mod||t.type==="custom:mod-card")return!0;if(t.card)return this._hasCardModDeep(t.card);if(Array.isArray(t.cards)){for(let r of t.cards)if(this._hasCardModDeep(r))return!0}return!1}catch{return!1}}_rebuildOnce(t){try{if(!t||(this.__rebuiltCards||(this.__rebuiltCards=new WeakSet),this.__rebuiltCards.has(t)))return;this.__rebuiltCards.add(t),t.dispatchEvent(new Event("ll-rebuild",{bubbles:!0,composed:!0}))}catch{}}_deepQueryAll(t,r=document){let o=[],l=s=>{if(!s)return;if(s.querySelectorAll)try{s.querySelectorAll(t).forEach(y=>o.push(y))}catch{}let d=document.createTreeWalker(s,NodeFilter.SHOW_ELEMENT,null),f=s;for(;f;){let y=f.shadowRoot;y&&l(y),f=d.nextNode()}};return l(r),o}_syncEditorsStorageKey(){try{let t=this.storageKey||"";this._deepQueryAll("#storage_key").forEach(o=>{try{o&&o.tagName==="INPUT"&&o.value!==t&&(o.value=t,o.dispatchEvent(new Event("input",{bubbles:!0})),o.dispatchEvent(new Event("change",{bubbles:!0})))}catch{}})}catch{}}static _genKey(){var r,o;return`layout_${((o=(r=globalThis.crypto)==null?void 0:r.randomUUID)==null?void 0:o.call(r))||`${Date.now().toString(36)}_${Math.random().toString(36).slice(2,8)}`}`}static getStubConfig(){return{type:"custom:drag-and-drop-card",storage_key:this._genKey(),grid:10,drag_live_snap:!1,auto_save:!0,auto_save_debounce:800,container_size_mode:"dynamic",hero_image:"https://i.postimg.cc/CxsWQgwp/Chat-GPT-Image-Sep-5-2025-09-26-16-AM.png"}}static getConfigElement(){let t=document.createElement("div");t.innerHTML=`
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
  `;let r=()=>{let g=f();s.disabled=!g},o=()=>{let g=t.getConfig();t.dispatchEvent(new CustomEvent("config-changed",{detail:{config:g}})),r()},l=()=>{let g=t.querySelector("#sizeMode").value;t.querySelector("#sizeCustom").style.display=g==="fixed_custom"?"inline-flex":"none",t.querySelector("#sizePresetWrap").style.display=g==="preset"?"inline-flex":"none"},s=t.querySelector("#applyBtn"),d=t.querySelector("#revertBtn");["#sizeMode","#sizePreset","#sizeOrientation"].forEach(g=>{let b=t.querySelector(g);if(b){try{b.fixedMenuPosition=!0}catch{}b.addEventListener("closed",m=>m.stopPropagation())}}),t.setConfig=(g={})=>{var m,w,O,E,P,R,C,A;t._config={type:g.type||"custom:drag-and-drop-card",...g},t._config.storage_key||(t._config.storage_key=`layout_${((m=crypto==null?void 0:crypto.randomUUID)==null?void 0:m.call(crypto))||Date.now().toString(36)}`,t.__autokeyPending=!0),t.querySelector("#storage_key").value=t._config.storage_key||"",t.querySelector("#grid").value=(w=t._config.grid)!=null?w:10,t.querySelector("#liveSnap").checked=!!t._config.drag_live_snap,t.querySelector("#autoSave").checked=t._config.auto_save!==!1,t.querySelector("#autoSaveDebounce").value=(O=t._config.auto_save_debounce)!=null?O:800,t.querySelector("#containerBg").value=(E=t._config.container_background)!=null?E:"transparent",t.querySelector("#cardBg").value=(P=t._config.card_background)!=null?P:"var(--ha-card-background, var(--card-background-color))",t.querySelector("#debug").checked=!!t._config.debug,t.querySelector("#noOverlap").checked=!!t._config.disable_overlap,t.querySelector("#autoResize").checked=!!t._config.auto_resize_cards,t.querySelector("#animateCards").checked=!!t._config.animate_cards,t.querySelector("#sizeMode").value=t._config.container_size_mode||"dynamic",t.querySelector("#sizeW").value=(R=t._config.container_fixed_width)!=null?R:"",t.querySelector("#sizeH").value=(C=t._config.container_fixed_height)!=null?C:"",t.querySelector("#sizeOrientation").value=t._config.container_preset_orientation||"auto";let b=t.querySelector("#sizePreset");if(!b.__filled){let L=(((A=this._sizePresets)==null?void 0:A.call(this))||[]).reduce((x,M)=>{var I;return(x[I=M.group||"other"]||(x[I]=[])).push(M),x},{});b.innerHTML="";for(let[x,M]of Object.entries(L)){let I=document.createElement("optgroup");I.label=x.replace(/(^.|-.?)/g,ie=>ie.toUpperCase()),M.forEach(ie=>{let U=document.createElement("mwc-list-item");U.value=ie.key,U.textContent=`${ie.label} (${ie.w}\xD7${ie.h})`,I.appendChild(U)});let re=document.createElement("mwc-list-item");re.setAttribute("disabled",""),re.textContent=`\u2014 ${I.label} \u2014`,b.appendChild(re),Array.from(I.children).forEach(ie=>b.appendChild(ie))}b.__filled=!0}t._config.container_preset&&(b.value=t._config.container_preset),l(),r(),t.__autokeyPending&&(t.__autokeyPending=!1,o())},t.getConfig=()=>{let g={...t._config||{}};return g.storage_key=t.querySelector("#storage_key").value||"",g.grid=Number(t.querySelector("#grid").value||10),g.drag_live_snap=!!t.querySelector("#liveSnap").checked,g.auto_save=!!t.querySelector("#autoSave").checked,g.auto_save_debounce=Number(t.querySelector("#autoSaveDebounce").value||800),g.container_background=t.querySelector("#containerBg").value||"transparent",g.card_background=t.querySelector("#cardBg").value||"var(--ha-card-background, var(--card-background-color))",g.debug=!!t.querySelector("#debug").checked,g.disable_overlap=!!t.querySelector("#noOverlap").checked,g.auto_resize_cards=!!t.querySelector("#autoResize").checked,g.animate_cards=!!t.querySelector("#animateCards").checked,g.container_size_mode=t.querySelector("#sizeMode").value,g.container_fixed_width=Number(t.querySelector("#sizeW").value||0)||void 0,g.container_fixed_height=Number(t.querySelector("#sizeH").value||0)||void 0,g.container_preset=t.querySelector("#sizePreset").value||void 0,g.container_preset_orientation=t.querySelector("#sizeOrientation").value||"auto",g};let f=()=>{let g=t.getConfig(),b=t._config||{};try{return JSON.stringify(g)!==JSON.stringify(b)}catch{return!0}},y=(g,b="input")=>{var m;return(m=t.querySelector(g))==null?void 0:m.addEventListener(b,()=>{g==="#sizeMode"&&l(),r()})};return y("#storage_key"),y("#grid"),y("#liveSnap","change"),y("#autoSave","change"),y("#autoSaveDebounce"),y("#containerBg"),y("#cardBg"),y("#debug","change"),y("#noOverlap","change"),y("#autoResize","change"),y("#animateCards","change"),y("#sizeMode","change"),y("#sizeW"),y("#sizeH"),y("#sizePreset","selected"),y("#sizeOrientation","selected"),s==null||s.addEventListener("click",()=>{o()}),d==null||d.addEventListener("click",()=>t.setConfig(t._config)),t}static _sizePresets(){return[{key:"iphone-14-pro",label:"iPhone 14 Pro",w:393,h:852,group:"phone"},{key:"iphone-14-pro-max",label:"iPhone 14 Pro Max",w:430,h:932,group:"phone"},{key:"iphone-se-2",label:"iPhone SE (2/3rd gen)",w:375,h:667,group:"phone"},{key:"pixel-7",label:"Pixel 7",w:412,h:915,group:"phone"},{key:"galaxy-s8",label:"Galaxy S8",w:360,h:740,group:"phone"},{key:"galaxy-s20-ultra",label:"Galaxy S20 Ultra",w:412,h:915,group:"phone"},{key:"ipad-9-7",label:'iPad 9.7"',w:768,h:1024,group:"tablet"},{key:"ipad-11-pro",label:'iPad Pro 11"',w:834,h:1194,group:"tablet"},{key:"ipad-12-9-pro",label:'iPad Pro 12.9"',w:1024,h:1366,group:"tablet"},{key:"surface-go-3",label:"Surface Go 3",w:800,h:1280,group:"tablet"},{key:"hd",label:"HD",w:1366,h:768,group:"desktop"},{key:"wxga-plus",label:"WXGA+",w:1440,h:900,group:"desktop"},{key:"fhd",label:"Full HD",w:1920,h:1080,group:"desktop"},{key:"qhd",label:"2K / QHD",w:2560,h:1440,group:"desktop"},{key:"uhd-4k",label:"4K UHD",w:3840,h:2160,group:"desktop"}]}_isContainerFixed(){return this.containerSizeMode!=="dynamic"}_resolveFixedSize(){if(this.containerSizeMode==="fixed_custom"){let t=Math.max(100,Number(this.containerFixedWidth||0)),r=Math.max(100,Number(this.containerFixedHeight||0));return{w:t,h:r}}if(this.containerSizeMode==="preset"){let t=e._sizePresets().find(l=>l.key===this.containerPreset)||e._sizePresets().find(l=>l.key==="fhd");if(!t)return{w:1920,h:1080};let r=t.w,o=t.h;return this.containerPresetOrient==="portrait"&&r>o&&([r,o]=[o,r]),this.containerPresetOrient==="landscape"&&o>r&&([r,o]=[o,r]),{w:r,h:o}}return null}_applyContainerSizingFromConfig(t=!1){var o,l;let r=this.cardContainer;if(r)if(this._isContainerFixed()){let{w:s,h:d}=this._resolveFixedSize();r.style.width=`${s}px`,r.style.height=`${d}px`,r.style.overflow="hidden",t||(o=this._dbgPush)==null||o.call(this,"size","Applied fixed size",{w:s,h:d,mode:this.containerSizeMode,preset:this.containerPreset,orient:this.containerPresetOrient}),this._clampAllCardsInside()}else r.style.overflow="hidden",t||(l=this._dbgPush)==null||l.call(this,"size","Applied dynamic size"),this._resizeContainer()}_getContainerSize(){let t=this.cardContainer;if(!t)return{w:0,h:0};let r=parseFloat(getComputedStyle(t).width)||t.getBoundingClientRect().width,o=parseFloat(getComputedStyle(t).height)||t.getBoundingClientRect().height;return{w:r,h:o}}_clampAllCardsInside(){if(!this._isContainerFixed())return;let{w:t,h:r}=this._getContainerSize();this.cardContainer.querySelectorAll(".card-wrapper").forEach(l=>{let s=parseFloat(l.getAttribute("data-x"))||0,d=parseFloat(l.getAttribute("data-y"))||0,f=parseFloat(l.style.width)||l.getBoundingClientRect().width,y=parseFloat(l.style.height)||l.getBoundingClientRect().height,g=Math.max(0,Math.min(s,Math.max(0,t-f))),b=Math.max(0,Math.min(d,Math.max(0,r-y))),m=Math.min(f,t),w=Math.min(y,r);(m!==f||w!==y)&&(l.style.width=`${m}px`,l.style.height=`${w}px`);let O=Math.max(0,Math.min(g,Math.max(0,t-m))),E=Math.max(0,Math.min(b,Math.max(0,r-w)));this._setCardPosition(l,O,E)})}_applyGridVars(){var r;let t=`${this.gridSize||10}px`;this.style.setProperty("--ddc-grid-size",t),(r=this.cardContainer)==null||r.style.setProperty("--ddc-grid-size",t)}_dbgInit(){if(!this.__dbgReady){this.__dbgReady=!0,this._dbgBuffer=[],this._dbgMax=400;try{window.DDC=this}catch{}}}_dbgPush(t,r,o=null){let l={t:new Date().toISOString(),kind:t,msg:r,extra:o};this._dbgBuffer.push(l),this._dbgBuffer.length>this._dbgMax&&this._dbgBuffer.shift(),this.debug&&console.debug(`%c[ddc:${t}]%c ${r}`,"color:#03a9f4","color:unset",o!=null?o:"")}_dbgDump(){return[...this._dbgBuffer]}_safe(t){return String(t).replace(/[&<>"']/g,r=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[r])}setConfig(t={}){var l,s,d,f,y,g,b,m,w,O,E,P,R,C,A,L,x,M,I,re,ie,U,ue,H;let r=this.storageKey;this.config={...t},(!this.config.storage_key||this.config.storage_key==="")&&(this.config.storage_key=this.constructor._genKey()),this.storageKey=this.config.storage_key,t.storage_key||(this.storageKey?t={...t,storage_key:this.storageKey}:(this.storageKey=`layout_${((l=crypto==null?void 0:crypto.randomUUID)==null?void 0:l.call(crypto))||Date.now().toString(36)}`,t={...t,storage_key:this.storageKey})),this._config=t,this.storageKey=t.storage_key,this._syncEditorsStorageKey(),this.storageKey=t.storage_key||void 0,this._syncEditorsStorageKey(),this.gridSize=Number((s=t.grid)!=null?s:10),this.dragLiveSnap=!!t.drag_live_snap,this.autoSave=t.auto_save!==!1,this.autoSaveDebounce=Number((d=t.auto_save_debounce)!=null?d:800),this.editModePin=this.editModePin!=null?this.editModePin:(y=(f=t.edit_mode_pin)!=null?f:t.editModePin)!=null?y:"",this.containerBackground=(g=t.container_background)!=null?g:"transparent",this.cardBackground=(b=t.card_background)!=null?b:"var(--ha-card-background, var(--card-background-color))",this.hideHaHeader=!!((w=(m=t.hide_HA_Header)!=null?m:t.hide_ha_header)!=null&&w),this.hideHaSidebar=!!((E=(O=t.hide_HA_Sidebar)!=null?O:t.hide_ha_sidebar)!=null&&E),this.debug=!!t.debug,this.editMode=!1,this._backendOK=!1,this.disableOverlap=!!t.disable_overlap,this.containerSizeMode=t.container_size_mode||"dynamic",this.autoResizeCards=!!t.auto_resize_cards,this.animateCards=!!t.animate_cards,this.autoResizeCards?(P=this._startScaleWatch)==null||P.call(this):(R=this._stopScaleWatch)==null||R.call(this),(C=this._applyAutoScale)==null||C.call(this),this.containerFixedWidth=Number((A=t.container_fixed_width)!=null?A:0)||null,this.containerFixedHeight=Number((L=t.container_fixed_height)!=null?L:0)||null,this.containerPreset=t.container_preset||"fullhd",this.containerPresetOrient=t.container_preset_orientation||"auto",this.heroImage=(t==null?void 0:t.hero_image)||"https://i.postimg.cc/CxsWQgwp/Chat-GPT-Image-Sep-5-2025-09-26-16-AM.png",this.tabs=Array.isArray(t.tabs)?t.tabs:[],this.tabsPosition=t.tabs_position==="left"?"left":"top",this.defaultTab=t.default_tab||((M=(x=this.tabs[0])==null?void 0:x.id)!=null?M:"default"),this.hideTabsWhenSingle=t.hide_tabs_when_single!==!1,this.activeTab=this.defaultTab;try{let V=localStorage.getItem(`ddc_lasttab_${this.storageKey}`);V&&this.tabs.some(de=>de.id===V)&&(this.activeTab=V)}catch{}this.rootEl&&this.rootEl.classList.toggle("ddc-tabs-left-layout",this.tabsPosition==="left"),this.cardContainer&&this._applyContainerSizingFromConfig(!1);let o=r!==this.storageKey;if(this.editMode&&!this.__booting&&!o)try{this._isInHaEditorPreview()||this._queueSave("config-change")}catch{}this._applyGridVars();try{(I=this._applyBackgroundImageFromConfig)==null||I.call(this)}catch{}try{(re=this._applyHaChromeVisibility_)==null||re.call(this)}catch{}if(this._ensureOverlayZFix(),this._selection=new Set,this.__groupDrag=null,this.__editorCache=new Map,this.__stubCache=new Map,this._dbgInit(),this._dbgPush("init","Card configured",{storageKey_raw:t.storage_key,storageKey_slug:this.storageKey,autoSave:this.autoSave,grid:this.gridSize}),this.style.setProperty("--ddc-bg",this.containerBackground),this.style.setProperty("--ddc-card-bg",this.cardBackground),!window.jsyaml){let V=document.createElement("script");V.src="https://cdnjs.cloudflare.com/ajax/libs/js-yaml/4.1.0/js-yaml.min.js",document.head.appendChild(V)}if(!window.interact){let V=document.createElement("script");V.src="https://cdn.jsdelivr.net/npm/interactjs/dist/interact.min.js",V.onload=()=>this._initInteract(),document.head.appendChild(V)}if(this._helpersPromise=typeof window.loadCardHelpers=="function"?window.loadCardHelpers().catch(()=>null):Promise.resolve(null),!this._built){this._built=!0,this.shadowRoot.innerHTML=`
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
          <div class="card-container" id="cardContainer">
            <!-- host for particles.js / YouTube backgrounds -->
            <div class="ddc-bg-host" id="ddcBgHost" aria-hidden="true"></div>
          </div>



      `,this.cardContainer=this.shadowRoot.querySelector("#cardContainer");try{(ie=this._applyBackgroundFromConfig)==null||ie.call(this)}catch{}this.addButton=this.shadowRoot.querySelector("#addCardBtn"),this.reloadBtn=this.shadowRoot.querySelector("#reloadBtn"),this.diagBtn=this.shadowRoot.querySelector("#diagBtn"),this.exitEditBtn=this.shadowRoot.querySelector("#exitEditBtn"),this.storeBadge=this.shadowRoot.querySelector("#storeBadge"),this.exportBtn=this.shadowRoot.querySelector("#exportBtn"),this.importBtn=this.shadowRoot.querySelector("#importBtn"),this.exploreBtn=this.shadowRoot.querySelector("#exploreBtn"),this.applyLayoutBtn=this.shadowRoot.querySelector("#applyLayoutBtn"),this.copyBtn=this.shadowRoot.querySelector("#copyBtn"),this.pasteBtn=this.shadowRoot.querySelector("#pasteBtn"),this.settingsBtn=this.shadowRoot.querySelector("#settingsBtn"),this.tabsBar=this.shadowRoot.querySelector("#tabsBar"),this.rootEl=this.shadowRoot.querySelector(".ddc-root");try{this._renderTabs(),this._applyActiveTab()}catch{}this._applyGridVars(),this.addButton.addEventListener("click",()=>{this.editMode||this._toggleEditMode(!0),this._openCardManager()}),this.reloadBtn.addEventListener("click",()=>this._initialLoad(!0)),this.diagBtn.addEventListener("click",()=>this._openDiagnostics()),this.exitEditBtn.addEventListener("click",()=>this._toggleEditMode(!1)),this.exportBtn.addEventListener("click",()=>this._exportDesign()),this.importBtn.addEventListener("click",()=>this._importDesign()),this.applyLayoutBtn.addEventListener("click",()=>this._saveLayout(!1)),this.copyBtn&&this.copyBtn.addEventListener("click",()=>this._copySelection()),this.pasteBtn&&this.pasteBtn.addEventListener("click",()=>this._pasteClipboard()),this.settingsBtn&&this.settingsBtn.addEventListener("click",()=>this._openDashboardSettings()),window.addEventListener("keydown",V=>{var de;if(this.editMode){if((V.ctrlKey||V.metaKey)&&(V.key==="s"||V.key==="S")&&(V.preventDefault(),this._saveLayout(!1)),!this.__ddcResizeObs&&this.autoResizeCards){this.__ddcResizeObs=new ResizeObserver(()=>{var me;return(me=this._applyAutoScale)==null?void 0:me.call(this)});try{this.__ddcResizeObs.observe(this)}catch{}try{this.__ddcResizeObs.observe(this.cardContainer)}catch{}try{this.parentElement&&this.__ddcResizeObs.observe(this.parentElement)}catch{}try{this.offsetParent&&this.__ddcResizeObs.observe(this.offsetParent)}catch{}window.addEventListener("resize",this.__ddcOnWinResize=()=>{var me;return(me=this._applyAutoScale)==null?void 0:me.call(this)})}(de=this._applyAutoScale)==null||de.call(this)}}),this.exploreBtn.addEventListener("click",()=>window.open("https://hads.smarti.dev/","_blank","noopener,noreferrer")),this._applyContainerSizingFromConfig(!0),(U=this._applyAutoScale)==null||U.call(this),this._installLongPressToEnterEdit(),(ue=this._startScaleWatch)==null||ue.call(this),window.addEventListener("keydown",V=>{var de;V.key==="Escape"&&this.editMode&&this._toggleEditMode(!1),this.__ddcResizeObs||(this.__ddcResizeObs=new ResizeObserver(()=>{var me;return(me=this._applyAutoScale)==null?void 0:me.call(this)}),this.__ddcResizeObs.observe(this),this.__ddcResizeObs.observe(this.cardContainer),window.addEventListener("resize",this.__ddcOnWinResize=()=>{var me;return(me=this._applyAutoScale)==null?void 0:me.call(this)})),(de=this._applyAutoScale)==null||de.call(this)}),this._installSelectionMarquee(),this.cardContainer.addEventListener("mousedown",V=>{this.editMode&&(V.target.closest(".card-wrapper")||!V.shiftKey&&!V.ctrlKey&&!V.metaKey&&this._clearSelection())})}try{this._isInHaEditorPreview()||this._queueSave("config-change")}catch{}this._updateStoreBadge(),this.cardContainer&&this._toggleEditMode(!1),this.__cfgReady=!0,o&&this.__booted?this._initialLoad(!0):!this.__booted&&this.__probed?(this.__booted=!0,this._initialLoad()):(this._applyContainerSizingFromConfig(!0),(H=this._applyAutoScale)==null||H.call(this),this._resizeContainer())}connectedCallback(){var t,r;try{(t=this._applyHaChromeVisibility_)==null||t.call(this)}catch{}if(this.__keyHandlerBound||(this.__keyHandler=o=>this._onKeyDown_(o),window.addEventListener("keydown",this.__keyHandler),this.__keyHandlerBound=!0),this.__boundExitEdit||(this.__boundExitEdit=()=>this._toggleEditMode(!1)),window.addEventListener("pagehide",this.__boundExitEdit),window.addEventListener("beforeunload",this.__boundExitEdit),this.__onVis=()=>{document.visibilityState==="hidden"&&this._toggleEditMode(!1)},document.addEventListener("visibilitychange",this.__onVis),this._toggleEditMode(!1),!this.__visObs){let o=new IntersectionObserver(l=>{l.some(s=>s.isIntersecting)&&requestAnimationFrame(()=>this._applyAutoScale&&this._applyAutoScale())},{root:null,threshold:0});o.observe(this),this.__visObs=o}this.__ddcOnWinResize=this.__ddcOnWinResize||(()=>this._applyAutoScale&&this._applyAutoScale()),window.addEventListener("resize",this.__ddcOnWinResize);try{(r=this.__ddcBindPointerListeners)==null||r.call(this)}catch{}}disconnectedCallback(){var t,r,o,l,s,d,f;try{(t=this._setHeaderVisible_)==null||t.call(this,!0),(r=this._setSidebarVisible_)==null||r.call(this,!0)}catch{}try{(o=this._applyHaChromeVisibility_)==null||o.call(this)}catch{}this.__keyHandlerBound&&this.__keyHandler&&(window.removeEventListener("keydown",this.__keyHandler),this.__keyHandlerBound=!1,this.__keyHandler=null),this.__keyHandlerBound||(this.__keyHandler=y=>this._onKeyDown_(y),window.addEventListener("keydown",this.__keyHandler),this.__keyHandlerBound=!0);try{(l=this._destroyParticles_)==null||l.call(this)}catch{}try{(s=this._destroyYouTube_)==null||s.call(this)}catch{}window.removeEventListener("pagehide",this.__boundExitEdit),window.removeEventListener("beforeunload",this.__boundExitEdit),document.removeEventListener("visibilitychange",this.__onVis);try{(d=this.__ddcResizeObs)==null||d.disconnect()}catch{}if(this.__ddcResizeObs=null,(f=this._stopScaleWatch)==null||f.call(this),this.__ddcOnWinResize&&(window.removeEventListener("resize",this.__ddcOnWinResize),this.__ddcOnWinResize=null),this.__lpInstalled&&this.__lpHandlers){let y=this.cardContainer;y==null||y.removeEventListener("mousedown",this.__lpHandlers.mouseDown),window.removeEventListener("mousemove",this.__lpHandlers.mouseMove),window.removeEventListener("mouseup",this.__lpHandlers.mouseUp),window.removeEventListener("contextmenu",this.__lpHandlers.contextMenu),y==null||y.removeEventListener("touchstart",this.__lpHandlers.touchStart),window.removeEventListener("touchmove",this.__lpHandlers.touchMove),window.removeEventListener("touchend",this.__lpHandlers.touchEnd),window.removeEventListener("touchcancel",this.__lpHandlers.touchCancel),this.__lpInstalled=!1,this.__lpHandlers=null}try{this.__visObs&&this.__visObs.disconnect()}catch{}this.__visObs=null,this.__ddcOnWinResize&&window.removeEventListener("resize",this.__ddcOnWinResize);try{this.__ddcPtrBound&&(this.removeEventListener("pointerdown",this.__onDDCPointerDown),this.removeEventListener("pointermove",this.__onDDCPointerMove),window.removeEventListener("pointerup",this.__onDDCPointerUp),window.removeEventListener("pointercancel",this.__onDDCPointerUp),this.__ddcPtrBound=!1)}catch{}}set hass(t){var o;this._hass=t,cc("set hass"),!this.__probed&&t&&(this.__probed=!0,this._probeBackend().then(()=>{this.__probed=!0,!this.__booted&&this.__cfgReady&&(this.__booted=!0,this._initialLoad(!0))}));let r=((o=this.cardContainer)==null?void 0:o.children)||[];for(let l of r){let s=l.firstElementChild;s&&s.hass!==t&&(s.hass=t)}try{this._applyVisibility_()}catch{}}get hass(){return this._hass}async _initialLoad(t=!1){var r,o,l,s,d,f,y,g,b,m,w,O,E,P,R,C,A,L,x;if(!this.__booting){this.__booting=!0;try{this._loading=!0,t&&this.cardContainer&&(this.cardContainer.innerHTML=""),this._dbgPush("boot","Initial load start",{force:t});let M=[],I=null;if(this._backendOK&&this.storageKey)try{I=await this._loadLayoutFromBackend(this.storageKey)}catch(H){this._dbgPush("boot","Backend load failed",{error:String(H)})}if(!I&&this.storageKey){let H=null;try{H=JSON.parse(localStorage.getItem(`ddc_local_${this.storageKey}`)||"null")}catch{}if(H)if(this._dbgPush("boot","Found local snapshot",{bytes:JSON.stringify(H).length}),this._backendOK)try{await this._saveLayoutToBackend(this.storageKey,H),this._dbgPush("boot","Migrated local -> backend"),I=H}catch(V){this._dbgPush("boot","Migration failed, staying local",{error:String(V)}),I=H}else I=H}!I&&((o=(r=this._config)==null?void 0:r.cards)!=null&&o.length)&&(this._dbgPush("boot","Using embedded config"),I={cards:this._config.cards});let re={...this._config||{}};if(I!=null&&I.options){let{storage_key:H,...V}=I.options;this._applyImportedOptions(V,!0)}else typeof(I==null?void 0:I.grid)=="number"&&this._applyImportedOptions({grid:I.grid},!0);let ie=["storage_key","grid","drag_live_snap","auto_save","auto_save_debounce","container_background","card_background","debug","disable_overlap","container_size_mode","container_fixed_width","container_fixed_height","container_preset","container_preset_orientation","tabs","tabs_position","default_tab","hide_tabs_when_single","auto_resize_cards"],U={};for(let H of ie)re[H]!==void 0&&(U[H]=re[H]);Object.keys(U).length&&this._applyImportedOptions(U,!0);let ue=!1;if((l=I==null?void 0:I.cards)!=null&&l.length){for(let H of I.cards){if(!(H!=null&&H.card)||typeof H.card=="object"&&Object.keys(H.card).length===0){let me=this._makePlaceholderAt(((s=H.position)==null?void 0:s.x)||0,((d=H.position)==null?void 0:d.y)||0,((f=H.size)==null?void 0:f.width)||200,((y=H.size)==null?void 0:y.height)||200);this.cardContainer.appendChild(me);try{this._rebuildOnce(me.firstElementChild)}catch{}ue=!0;continue}let V=await this._createCard(H.card),de=this._makeWrapper(V);this.editMode&&de.classList.add("editing"),de.dataset.tabId=this._normalizeTabId(H.tabId||H.tab_id||this.defaultTab),this._setCardPosition(de,((g=H.position)==null?void 0:g.x)||0,((b=H.position)==null?void 0:b.y)||0),de.style.width=`${(w=(m=H.size)==null?void 0:m.width)!=null?w:14*this.gridSize}px`,de.style.height=`${(E=(O=H.size)==null?void 0:O.height)!=null?E:10*this.gridSize}px`,H.z!=null&&(de.style.zIndex=String(H.z)),this.cardContainer.appendChild(de);try{this._rebuildOnce(de.firstElementChild)}catch{}this._initCardInteract(de),ue=!0}this._resizeContainer(),(P=this._applyAutoScale)==null||P.call(this),this._dbgPush("boot","Layout applied",{count:I.cards.length})}ue||(this._showEmptyPlaceholder(),(R=this._applyAutoScale)==null||R.call(this),this._dbgPush("boot","No saved layout found; showing placeholder")),this._updateStoreBadge(),this._syncEmptyStateUI(),t&&(this._cardModProcessed=!1),setTimeout(()=>{this._processCardModOnce()},100);try{M.forEach(H=>{try{H.dispatchEvent(new Event("ll-rebuild",{bubbles:!0,composed:!0}))}catch{}})}catch{}}finally{this._loading=!1,this.__booting=!1,this.__dirty=!1,(C=this._updateApplyBtn)==null||C.call(this);try{this._renderTabs(),this._applyActiveTab()}catch{}try{this._applyVisibility_()}catch{}try{let M=(L=(A=this.cardContainer)==null?void 0:A.querySelector)==null?void 0:L.call(A,"#ddcBgHost");(!M||!M.firstChild)&&((x=this._applyBackgroundFromConfig)==null||x.call(this))}catch{}}}}_normalizeTabId(t){let r=Array.isArray(this.tabs)?this.tabs.map(o=>o.id):[];return r.length?t&&r.includes(t)?t:this.defaultTab||r[0]:this.defaultTab||"default"}_renderTabs(){var o,l,s;let t=this.tabsBar;if(!t)return;let r=Array.isArray(this.tabs)?this.tabs:[];if(!r.length||r.length===1&&this.hideTabsWhenSingle){t.style.display="none";return}t.style.display="",t.className="ddc-tabs "+(this.tabsPosition==="left"?"ddc-tabs-left":""),t.innerHTML="";for(let d of r){let f=document.createElement("button");f.className="ddc-tab"+(d.id===this.activeTab?" active":""),f.dataset.tabId=d.id,f.title=d.label||d.id,f.innerHTML=`${d.icon?`<ha-icon icon="${d.icon}"></ha-icon>`:""}<span class="ddc-tab-label">${(o=d.label)!=null?o:d.id}</span>`,f.addEventListener("click",()=>{var y,g,b;if(this.activeTab!==d.id){this.activeTab=d.id;try{localStorage.setItem(`ddc_lasttab_${this.storageKey}`,d.id)}catch{}this._applyActiveTab(),this._renderTabs();try{this._applyVisibility_()}catch{}try{let m=(g=(y=this.cardContainer)==null?void 0:y.querySelector)==null?void 0:g.call(y,"#ddcBgHost");(!m||!m.firstChild)&&((b=this._applyBackgroundFromConfig)==null||b.call(this))}catch{}}}),t.appendChild(f)}this.rootEl&&this.rootEl.classList.toggle("ddc-tabs-left-layout",this.tabsPosition==="left");try{(l=this._updateTabsA11y_)==null||l.call(this)}catch{}try{(s=this._syncTabsWidth_)==null||s.call(this)}catch{}}_applyActiveTab(){var o,l,s;let t=this._normalizeTabId(this.activeTab);(((l=(o=this.cardContainer)==null?void 0:o.querySelectorAll)==null?void 0:l.call(o,".card-wrapper"))||[]).forEach(d=>{var y;let f=d.dataset.tabId?this._normalizeTabId(d.dataset.tabId):this.defaultTab;if(!this.tabs||!this.tabs.length){d.style.display="",d.inert=!1,d.classList.remove("ddc-hidden");return}f===t?(d.style.display="",d.inert=!1,d.classList.remove("ddc-hidden")):(d.style.display="none",d.inert=!0,d.classList.add("ddc-hidden"),d.classList.remove("ddc-selected"),(y=this._applyAutoScale)==null||y.call(this))});try{this._clearSelection()}catch{}try{this.animateCards&&((s=this._animateCards)==null||s.call(this))}catch{}}_animateCards(){var t,r,o,l;try{let s=((r=(t=this.cardContainer)==null?void 0:t.querySelectorAll)==null?void 0:r.call(t,".card-wrapper"))||[],d=(l=(o=window.matchMedia)==null?void 0:o.call(window,"(prefers-reduced-motion: reduce)"))==null?void 0:l.matches,f=800,y=.8,b=f*.3,m=f-b;s.forEach(w=>{var x,M,I;let O=(x=window.getComputedStyle)==null?void 0:x.call(window,w);if(w.style.display==="none"||O&&O.display==="none"||w.classList.contains("ddc-hidden"))return;let P=O&&O.transform&&O.transform!=="none"?O.transform:"",R=100*y,C=`${P} translate3d(0, ${R}%, 0)`,A=`${P} translate3d(0, 0, 0)`,L=Math.random()*(m*Math.min(y,2));if(d){try{w.animate([{opacity:0},{opacity:1}],{duration:f*.15,delay:L,easing:"linear",fill:"backwards"})}catch{w.style.opacity="0",setTimeout(()=>{w.style.transition=`opacity ${f*.15}ms linear`,w.style.opacity="1"},L)}return}try{w.style.willChange="opacity, transform";let re="cubic-bezier(0.4, 0, 0.2, 1)";w.animate([{opacity:0},{opacity:1}],{duration:b,delay:L,easing:"linear",fill:"backwards"}),(I=(M=w.animate([{transform:C},{transform:A}],{duration:b,delay:L,easing:re,fill:"backwards"})).addEventListener)==null||I.call(M,"finish",()=>{w.style.willChange=""})}catch{w.style.opacity="0",w.style.transform=C,w.style.willChange="opacity, transform",setTimeout(()=>{w.style.transition=`opacity ${b}ms linear, transform ${b}ms cubic-bezier(0.4,0,0.2,1)`,w.style.opacity="1",w.style.transform=A,setTimeout(()=>{w.style.transition="",w.style.willChange=""},b+60)},L)}})}catch(s){console.warn("[ddc:animate] animation error",s)}}_addTabSelectorToChip(t,r=null){if(!this.tabs||!this.tabs.length)return;let o=t.querySelector(".chip");if(!o)return;let l=o.querySelector("select.ddc-chip-tab");l||(l=document.createElement("select"),l.className="ddc-chip-tab",l.style.marginLeft="6px",l.title="Assign to tab",o.appendChild(l)),l.innerHTML="";for(let d of this.tabs){let f=document.createElement("option");f.value=d.id,f.textContent=d.label||d.id,l.appendChild(f)}let s=this._normalizeTabId(r||t.dataset.tabId||this.activeTab||this.defaultTab);l.value=s,t.dataset.tabId=s,l.onchange=()=>{var d,f,y;t.dataset.tabId=this._normalizeTabId(l.value),this._applyActiveTab();try{this._applyVisibility_()}catch{}try{let g=(f=(d=this.cardContainer)==null?void 0:d.querySelector)==null?void 0:f.call(d,"#ddcBgHost");(!g||!g.firstChild)&&((y=this._applyBackgroundFromConfig)==null||y.call(this))}catch{}try{this._queueSave("tab-change")}catch{}}}_toggleEditMode(t=null){var w,O,E,P,R,C,A,L,x,M,I,re,ie;try{(w=this.__clearPressTimer)==null||w.call(this)}catch{}let r=t===null?!this.editMode:!!t,o=!this.editMode&&r;try{let U=this.config&&this.config.edit_mode_pin!=null?String(this.config.edit_mode_pin):"",H=((this.editModePin!=null?String(this.editModePin):"")||U).trim();if(r&&!this.editMode&&H){let V=window.prompt("Enter PIN / password to open Edit Mode:");if(V===null)return;if(String(V).trim()!==H){(O=this._toast)==null||O.call(this,"Incorrect PIN/password.");return}}}catch{}let l=this.renderRoot||this.shadowRoot||this,s=(E=l==null?void 0:l.querySelector)==null?void 0:E.call(l,".ddc-toolbar.streamlined.v2, .ddc-toolbar.streamlined.v3"),d=(U,ue)=>{try{U&&(U.style.display=ue)}catch{}},f="inline-block",y="none",g=()=>{d(this.addButton,f),d(this.reloadBtn,f),d(this.diagBtn,f),d(this.exitEditBtn,f),d(this.exportBtn,f),d(this.importBtn,f),d(this.exploreBtn,f),d(this.storeBadge,f),d(this.applyLayoutBtn,f),d(this.copyBtn,f),d(this.pasteBtn,f),d(this.settingsBtn,f)},b=()=>{d(this.addButton,y),d(this.reloadBtn,y),d(this.diagBtn,y),d(this.exitEditBtn,y),d(this.exportBtn,y),d(this.importBtn,y),d(this.exploreBtn,y),d(this.storeBadge,y),d(this.applyLayoutBtn,y),d(this.copyBtn,y),d(this.pasteBtn,y),d(this.settingsBtn,y)};if(s)if(r)s.setAttribute("data-force-open","1"),s.style.display="grid",g(),requestAnimationFrame(()=>{let ue=s.scrollHeight||0;s.style.setProperty("--open-h",ue+"px"),s.classList.add("is-open")});else{s.setAttribute("data-force-open","1"),s.style.display="grid";let ue=s.scrollHeight||0;s.style.setProperty("--open-h",ue+"px"),requestAnimationFrame(()=>{s.classList.remove("is-open")}),setTimeout(()=>{b(),s.removeAttribute("data-force-open")},260)}else r?g():b();if(this.editMode=r,(P=this._syncEmptyStateUI)==null||P.call(this),(R=this.cardContainer)==null||R.classList.toggle("grid-on",this.editMode),(((A=(C=this.cardContainer)==null?void 0:C.querySelectorAll)==null?void 0:A.call(C,".card-wrapper"))||[]).forEach(U=>{U.classList.toggle("editing",this.editMode);let ue=U.querySelector(".resize-handle");ue&&(ue.style.display=this.editMode?"flex":"none"),!U.dataset.placeholder&&window.interact&&window.interact(U).draggable(this.editMode).resizable(this.editMode),U.style.touchAction=this.editMode?"none":"auto"}),this.editMode||(L=this._clearSelection)==null||L.call(this),this.editMode||(x=this.cardContainer)==null||x.querySelectorAll(".card-wrapper.dragging").forEach(U=>U.classList.remove("dragging")),o){let U=(M=this.__lastHoldX)!=null?M:null,ue=(I=this.__lastHoldY)!=null?I:null;(re=this._playEditRipple)==null||re.call(this,U,ue)}try{(ie=this._applyHaChromeVisibility_)==null||ie.call(this)}catch{}}_isInHaEditorPreview(){let t=this;for(;t;){let r=t.nodeType===1&&t.localName?t.localName.toLowerCase():"";if(r==="hui-card-editor"||r==="hui-dialog-edit-card"||r==="hui-card-preview"||r==="ha-dialog"||r==="mwc-dialog")return!0;let o=t.getRootNode&&t.getRootNode();t=t.parentElement||o&&o.host||null}return!1}_installLongPressToEnterEdit(){if(this.__lpInstalled)return;this.__lpInstalled=!0;let t=this.cardContainer;if(!t)return;let r=800,o=18,l=x=>!!x&&typeof x=="object"&&x.nodeType===1,s=(x,M)=>{try{return!!(x&&M&&typeof x.contains=="function"&&l(M)&&x.contains(M))}catch{return!1}},d=x=>s(this.cardContainer,x),f=x=>{var re,ie,U;let M=(ie=(re=x.target)==null?void 0:re.closest)==null?void 0:ie.call(re,".card-wrapper");if(l(M)&&d(M)&&!M.classList.contains("ddc-placeholder"))return!0;let I=typeof x.composedPath=="function"?x.composedPath():[];for(let ue of I)if(l(ue)&&d(ue)&&(U=ue.classList)!=null&&U.contains("card-wrapper")&&!ue.classList.contains("ddc-placeholder"))return!0;return!1},y=(x,M)=>{let I=document.createElement("div");I.className="ddc-press-ring",document.body.appendChild(I),Object.assign(I.style,{position:"fixed",left:`${x}px`,top:`${M}px`,zIndex:"100000",width:"44px",height:"44px",pointerEvents:"none",marginLeft:"-22px",marginTop:"-22px",filter:"drop-shadow(0 2px 6px rgba(0,0,0,.35))"}),I.innerHTML=`
      <svg viewBox="0 0 44 44" aria-hidden="true" style="width:44px;height:44px">
        <circle cx="22" cy="22" r="18" style="stroke:rgba(255,255,255,.45);stroke-width:4;fill:none"></circle>
        <circle class="pr-fg" cx="22" cy="22" r="18" style="stroke:var(--primary-color);stroke-width:4;fill:none;stroke-linecap:round"></circle>
        <circle cx="22" cy="22" r="2" style="fill:var(--primary-color);opacity:.95"></circle>
      </svg>`;let re=I.querySelector(".pr-fg"),ie=18,U=2*Math.PI*ie;return re.style.strokeDasharray=`${U}`,re.style.strokeDashoffset=`${U}`,requestAnimationFrame(()=>{re.style.transition=`stroke-dashoffset ${r}ms linear`,re.style.strokeDashoffset="0"}),{el:I,move(ue,H){I.style.left=`${ue}px`,I.style.top=`${H}px`},remove(){try{I.remove()}catch{}}}},g=null,b=null,m=0,w=0,O=null,E=()=>{g&&clearTimeout(g),g=null,b==null||b.remove(),b=null};this.__clearPressTimer=E;let P=x=>{x.pointerType==="mouse"&&x.button!==0||this._isInHaEditorPreview()||!d(x.target)||f(x)||(O=x.pointerId,m=x.clientX,w=x.clientY,this.__lastHoldX=m,this.__lastHoldY=w,b=y(m,w),g=setTimeout(()=>{var I;E();let M=!this.editMode;this._toggleEditMode(M),(I=this._toast)==null||I.call(this,`Edit mode ${M?"enabled":"disabled"}`)},r))},R=x=>{g==null||x.pointerId!==O||(b==null||b.move(x.clientX,x.clientY),(Math.abs(x.clientX-m)>o||Math.abs(x.clientY-w)>o)&&E())},C=x=>{x.pointerId===O&&(E(),O=null)},A=x=>{if(g)return x.preventDefault(),x.stopPropagation(),!1},L=x=>{var I;if(this._isInHaEditorPreview()||!d(x.target)||f(x))return;let M=!this.editMode;this._toggleEditMode(M),(I=this._toast)==null||I.call(this,`Edit mode ${M?"enabled":"disabled"}`)};t.addEventListener("pointerdown",P),window.addEventListener("pointermove",R,{passive:!0}),window.addEventListener("pointerup",C,{passive:!0}),window.addEventListener("pointercancel",C,{passive:!0}),window.addEventListener("contextmenu",A),t.addEventListener("dblclick",L),this.__lpHandlers={onPointerDown:P,onPointerMove:R,onPointerUpOrCancel:C,onContextMenu:A,onDblClick:L}}_isLayoutEmpty(){let t=this.cardContainer;return t?t.querySelectorAll(".card-wrapper:not(.ddc-placeholder)").length===0:!0}_syncEmptyStateUI(){let t=this._isLayoutEmpty();if(this.addButton){let o=this.editMode||t;this.addButton.style.display=o?"inline-block":"none",this.addButton.classList.toggle("cta-empty",!this.editMode&&t)}let r=o=>o&&(o.style.display=this.editMode?"inline-block":"none");r(this.reloadBtn),r(this.diagBtn),r(this.exitEditBtn),r(this.exportBtn),r(this.importBtn),r(this.exploreBtn),r(this.storeBadge),r(this.applyLayoutBtn)}_updateApplyBtn(){this.applyLayoutBtn&&(this.applyLayoutBtn.disabled=!this.__dirty)}_markDirty(t=""){var r;this.__dirty=!0,this._updateApplyBtn(),(r=this._dbgPush)==null||r.call(this,"dirty","Marked dirty",{reason:t})}_playEditRipple(t=null,r=null){let o=this.cardContainer;if(!o)return;let l=o.getBoundingClientRect(),s=t==null?l.left+l.width/2:t,d=r==null?l.top+l.height/2:r,f=s-l.left,y=d-l.top,g=document.createElement("div");g.className="ddc-ripple-veil",g.style.setProperty("--rip-x",`${f}px`),g.style.setProperty("--rip-y",`${y}px`),o.appendChild(g),setTimeout(()=>g.remove(),450)}_initInteract(){this.cardContainer.querySelectorAll(".card-wrapper").forEach(r=>this._initCardInteract(r))}_initCardInteract(t){if(!window.interact||t.dataset.placeholder)return;let r=this.gridSize,o=!!this.dragLiveSnap,s=[window.interact.modifiers.restrictRect({restriction:"parent",endOnly:!0})];if(this.dragLiveSnap){let d=window.interact.snappers.grid({x:this.gridSize,y:this.gridSize});s.push(window.interact.modifiers.snap({targets:[d],range:1/0,offset:"startCoords"}))}window.interact(t).draggable({enabled:this.editMode,inertia:!1,modifiers:s,listeners:{start:d=>{this._selection.has(t)||(!(d!=null&&d.shiftKey)&&!(d!=null&&d.ctrlKey)&&!(d!=null&&d.metaKey)&&this._clearSelection(),this._toggleSelection(t,!0));let f=Array.from(this._selection);this.__groupDrag={leader:t,members:f,startRaw:new Map(f.map(g=>[g,{x:parseFloat(g.getAttribute("data-x-raw"))||parseFloat(g.getAttribute("data-x"))||0,y:parseFloat(g.getAttribute("data-y-raw"))||parseFloat(g.getAttribute("data-y"))||0,w:parseFloat(g.style.width)||g.getBoundingClientRect().width,h:parseFloat(g.style.height)||g.getBoundingClientRect().height}]))},this.__collisionOriginals=new Map,this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)").forEach(g=>{let b=parseFloat(g.getAttribute("data-x-raw"))||parseFloat(g.getAttribute("data-x"))||0,m=parseFloat(g.getAttribute("data-y-raw"))||parseFloat(g.getAttribute("data-y"))||0;this.__collisionOriginals.set(g,{x:b,y:m})}),f.forEach(g=>{g.classList.add("dragging"),g.getAttribute("data-x-raw")===null&&g.setAttribute("data-x-raw",g.getAttribute("data-x")||"0"),g.getAttribute("data-y-raw")===null&&g.setAttribute("data-y-raw",g.getAttribute("data-y")||"0")})},move:d=>{if(!this.__groupDrag)return;let f=this.gridSize,y=!!this.dragLiveSnap,g=this.__groupDrag.leader,b=this.__groupDrag.startRaw.get(g),m=(parseFloat(g.getAttribute("data-x-raw"))||b.x)+d.dx,w=(parseFloat(g.getAttribute("data-y-raw"))||b.y)+d.dy,O=m-b.x,E=w-b.y,P=this.__groupDrag.members.map(R=>{let C=this.__groupDrag.startRaw.get(R),A=C.x+O,L=C.y+E,x=y?Math.round(A/f)*f:A,M=y?Math.round(L/f)*f:L;return{el:R,rawX:A,rawY:L,snapX:x,snapY:M,w:C.w,h:C.h}});this.disableOverlap&&this._pushCardsOutOfTheWay(P,O,E,y,f),g.setAttribute("data-x-raw",String(m)),g.setAttribute("data-y-raw",String(w));for(let R of P)R.el.setAttribute("data-x-raw",String(R.rawX)),R.el.setAttribute("data-y-raw",String(R.rawY)),this._setCardPosition(R.el,R.snapX,R.snapY);this._resizeContainer()},end:d=>{if(!this.__groupDrag)return;let f=this.gridSize,y=this.__groupDrag.members.map(g=>{let b=parseFloat(g.getAttribute("data-x-raw"))||parseFloat(g.getAttribute("data-x"))||0,m=parseFloat(g.getAttribute("data-y-raw"))||parseFloat(g.getAttribute("data-y"))||0,w=Math.round(b/f)*f,O=Math.round(m/f)*f,E=parseFloat(g.style.width)||g.getBoundingClientRect().width,P=parseFloat(g.style.height)||g.getBoundingClientRect().height;return{el:g,rawX:b,rawY:m,snapX:w,snapY:O,w:E,h:P}});this.disableOverlap&&this._pushCardsOutOfTheWay(y,0,0,!1,f);for(let g of y)this._setCardPosition(g.el,g.snapX,g.snapY),g.el.setAttribute("data-x-raw",String(g.snapX)),g.el.setAttribute("data-y-raw",String(g.snapY));for(let g of this.__groupDrag.members)g.classList.remove("dragging");this._resizeContainer(),this._isContainerFixed()&&this._clampAllCardsInside(),this._queueSave(this.__groupDrag.members.length>1?"group-drag-end":"drag-end"),this.__groupDrag=null,this.__collisionOriginals=null}}}),window.interact(t).resizable({enabled:this.editMode,edges:{right:".resize-handle",bottom:".resize-handle"},inertia:!1,listeners:{move:d=>{let f=this.gridSize,y=!!this.dragLiveSnap,g=parseFloat(t.style.width)||t.getBoundingClientRect().width,b=parseFloat(t.style.height)||t.getBoundingClientRect().height,{width:m,height:w}=d.rect,O=y?Math.max(f,Math.round(m/f)*f):m,E=y?Math.max(f,Math.round(w/f)*f):w,P=parseFloat(t.getAttribute("data-x"))||0,R=parseFloat(t.getAttribute("data-y"))||0,C=O,A=E;if(this._isContainerFixed()){let{w:x,h:M}=this._getContainerSize();C=Math.min(O,Math.max(this.gridSize,x-P)),A=Math.min(E,Math.max(this.gridSize,M-R))}let L=[this._rectFor(t,P,R,C,A)];this.disableOverlap&&this._anyCollisionFor(L,new Set([t]))||(t.style.width=`${C}px`,t.style.height=`${A}px`,this._resizeContainer())},end:()=>{let d=this.gridSize,f=parseFloat(t.style.width)||t.getBoundingClientRect().width,y=parseFloat(t.style.height)||t.getBoundingClientRect().height,g=Math.max(d,Math.round(f/d)*d),b=Math.max(d,Math.round(y/d)*d),m=parseFloat(t.getAttribute("data-x"))||0,w=parseFloat(t.getAttribute("data-y"))||0;if(this._isContainerFixed()){let{w:E,h:P}=this._getContainerSize();g=Math.min(g,Math.max(d,E-m)),b=Math.min(b,Math.max(d,P-w))}let O=[this._rectFor(t,m,w,g,b)];this.disableOverlap&&this._anyCollisionFor(O,new Set([t]))||(t.style.width=`${g}px`,t.style.height=`${b}px`),this._resizeContainer(),this._isContainerFixed()&&this._clampAllCardsInside(),this._queueSave("resize-end")}}}),t.addEventListener("mousedown",d=>{this.editMode&&(d.target.closest(".resize-handle")||d.target.closest(".delete-handle")||d.target.closest(".chip")||(d.shiftKey||d.ctrlKey||d.metaKey?(d.stopPropagation(),this._toggleSelection(t)):this._selection.has(t)||(this._clearSelection(),this._toggleSelection(t,!0))))})}async _createCard(t){let o=(await this._helpersPromise||await window.loadCardHelpers()).createCardElement(t);if(o.hass=this.hass,t.type==="custom:mod-card"&&(await new Promise(l=>setTimeout(l,0)),o.setConfig&&typeof o.setConfig=="function"))try{o.setConfig(t)}catch{}return o}_makeWrapper(t){let r=document.createElement("div");r.classList.add("card-wrapper"),r.dataset.tabId=this._normalizeTabId(this.activeTab||this.defaultTab),this.editMode&&r.classList.add("editing"),r.style.zIndex||(r.style.zIndex=String(this._highestZ()+1));let o=document.createElement("div");o.className="chip",o.innerHTML=`
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
    `;let l=document.createElement("div");l.className="delete-handle",l.innerHTML='<ha-icon icon="mdi:close-thick"></ha-icon>',l.addEventListener("click",f=>{var y,g;f.stopPropagation(),this._selection.size>1&&this._selection.has(r)?(Array.from(this._selection).forEach(m=>m.remove()),this._clearSelection(),this._resizeContainer(),this._queueSave("delete-multi"),(y=this._ensurePlaceholderIfEmpty)==null||y.call(this)):(r.remove(),this._resizeContainer(),this._queueSave("delete"),(g=this._ensurePlaceholderIfEmpty)==null||g.call(this))});try{this._addTabSelectorToChip(r,r.dataset.tabId)}catch{}o.addEventListener("click",async f=>{var g,b,m,w,O;f.stopPropagation();let y=(m=(b=(g=f.target)==null?void 0:g.closest("button"))==null?void 0:b.dataset)==null?void 0:m.act;if(y){if(y==="delete")this._selection.size>1&&this._selection.has(r)?(Array.from(this._selection).forEach(P=>P.remove()),this._clearSelection(),this._resizeContainer(),this._queueSave("delete-multi"),this._ensurePlaceholderIfEmpty()):(r.remove(),this._resizeContainer(),this._queueSave("delete"),this._ensurePlaceholderIfEmpty());else if(y==="duplicate"||y==="copy"){let E=this._selection.size>1&&this._selection.has(r)?Array.from(this._selection):[r];for(let P of E){let R=this._extractCardConfig(P.firstElementChild)||{},C=await this._createCard(R),A=this._makeWrapper(C);A.style.width=P.style.width,A.style.height=P.style.height;let L=(parseFloat(P.getAttribute("data-x"))||0)+this.gridSize,x=(parseFloat(P.getAttribute("data-y"))||0)+this.gridSize;this._setCardPosition(A,L,x),A.style.zIndex=String(this._highestZ()+1);try{let M=(w=P.dataset)==null?void 0:w.tabId;M&&(A.dataset.tabId=M)}catch{}this.cardContainer.appendChild(A);try{(O=this._addTabSelectorToChip)==null||O.call(this,A,A.dataset.tabId)}catch{}try{this._rebuildOnce(A.firstElementChild)}catch{}this._initCardInteract(A)}this._resizeContainer(),this._queueSave("duplicate")}else if(y==="front")this._adjustZ(r,1);else if(y==="back")this._adjustZ(r,-1);else if(y==="front-most"){let E=this._selection.size>1&&this._selection.has(r)?Array.from(this._selection):[r];E.sort((R,C)=>{let A=parseInt(R.style.zIndex||"1",10),L=parseInt(C.style.zIndex||"1",10);return A-L});let P=this._highestZ();for(let R of E)P+=1,R.style.zIndex=String(P);this._queueSave("z-change")}else if(y==="back-most"){let E=this._selection.size>1&&this._selection.has(r)?Array.from(this._selection):[r];E.sort((C,A)=>{let L=parseInt(C.style.zIndex||"1",10);return parseInt(A.style.zIndex||"1",10)-L});let P=1/0;this.cardContainer.querySelectorAll(".card-wrapper").forEach(C=>{let A=parseInt(C.style.zIndex||"1",10);A<P&&(P=A)}),isFinite(P)||(P=1);let R=P;for(let C of E)R-=1,C.style.zIndex=String(Math.max(1,R));this._queueSave("z-change")}else if(y==="edit"){let E=this._extractCardConfig(r.firstElementChild)||{};await this._openSmartPicker("edit",E,async P=>{var A,L,x;let R=r.firstElementChild,C=await this._createCard(P);try{r.dataset.cfg=JSON.stringify(P),(A=this._hasCardModDeep)!=null&&A.call(this,P)?r.dataset.needsCardMod="true":delete r.dataset.needsCardMod}catch{}r.replaceChild(C,R),await un();try{if(C.hass=this.hass,(L=C.requestUpdate)==null||L.call(C),C.updateComplete)try{await C.updateComplete}catch{}}catch{}try{this._rebuildOnce(C)}catch{}try{C.dispatchEvent(new Event("ll-rebuild",{bubbles:!0,composed:!0}))}catch{}(x=this._resizeContainer)==null||x.call(this);try{clearTimeout(this._saveTimer),await this._saveLayout(!0)}catch(M){console.warn("Save before reload failed",M)}window.location.reload()})}}});let s=document.createElement("div");s.className="shield";let d=document.createElement("div");d.classList.add("resize-handle"),this.editMode||(d.style.display="none"),d.title="Resize",d.innerHTML='<ha-icon icon="mdi:resize-bottom-right"></ha-icon>';try{let f=t._config||t.config;f&&typeof f=="object"&&Object.keys(f).length&&(r.dataset.cfg=JSON.stringify(f),this._hasCardModDeep(f)&&(r.dataset.needsCardMod="true"))}catch{}r.append(t,s,o,l,d);try{this._rebuildOnce(t)}catch{}return r}_makePlaceholderAt(t=0,r=0,o=400,l=400){let s=document.createElement("div");s.classList.add("card-wrapper","ddc-placeholder"),s.dataset.placeholder="1",this.editMode&&s.classList.add("editing"),this._setCardPosition(s,t,r),s.style.width=`${o}px`,s.style.height=`${l}px`,s.style.zIndex=String(this._highestZ()+1);let d=document.createElement("div");d.className="ddc-placeholder-inner",d.setAttribute("aria-hidden","true");let f=document.createElement("div");f.className="ddc-hero";let y=this.heroImage;if(y){let w=document.createElement("img");w.src=y,w.alt="",f.appendChild(w)}let g=document.createElement("div");g.className="ddc-title",g.textContent="Drag & Drop Card";let b=document.createElement("div");b.className="ddc-sub",b.textContent="Hold me / double click me to enter Edit mode",f.append(g,b),d.appendChild(f),s.addEventListener("dblclick",w=>{w.stopPropagation(),this._toggleEditMode(!0)});let m=document.createElement("div");return m.className="shield",s.append(d,m),s}_processCardModOnce(){var r;if(this._cardModProcessed)return;this._cardModProcessed=!0,(((r=this.cardContainer)==null?void 0:r.querySelectorAll('[data-needs-card-mod="true"]'))||[]).forEach(o=>{let l=o.firstElementChild;if(!l)return;let s=l._config||l.config;if(s){if(s.type==="custom:mod-card")setTimeout(()=>{if(l.updateComplete)l.updateComplete.then(()=>{l.requestUpdate()});else if(l.setConfig)try{l.setConfig({...s})}catch{}},100);else if(s.card_mod&&l.setConfig)try{l.setConfig({...s})}catch{}}})}_showEmptyPlaceholder(){if(this.cardContainer.querySelector(".ddc-placeholder"))return;let t=this._makePlaceholderAt(0,0,200,200);this.cardContainer.appendChild(t),this._resizeContainer(),this._syncEmptyStateUI()}_hideEmptyPlaceholder(){this.cardContainer.querySelectorAll(".ddc-placeholder").forEach(t=>t.remove())}_ensurePlaceholderIfEmpty(){var r;this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)").length===0&&this._showEmptyPlaceholder(),(r=this._applyAutoScale)==null||r.call(this),this._syncEmptyStateUI()}_adjustZ(t,r){let l=parseInt(t.style.zIndex||"1",10)+r;l=Math.max(1,Math.min(9999,l)),t.style.zIndex=String(l),this._queueSave("z-change")}_highestZ(){let t=0;return this.cardContainer.querySelectorAll(".card-wrapper").forEach(r=>{let o=parseInt(r.style.zIndex||"0",10);o>t&&(t=o)}),t}_setCardPosition(t,r,o){let l=Math.round(r),s=Math.round(o);t.style.transform=`translate3d(${l}px, ${s}px, 0)`,t.setAttribute("data-x",String(l)),t.setAttribute("data-y",String(s)),t.setAttribute("data-x-raw",String(l)),t.setAttribute("data-y-raw",String(s))}_computeDesignSize(){let t=this.cardContainer;if(!t)return{w:1,h:1};if(this._isContainerFixed()){let{w:d,h:f}=this._resolveFixedSize();return{w:Math.max(1,d),h:Math.max(1,f)}}let r=0,o=0,l=Array.from(t.querySelectorAll(".card-wrapper"));if(!l.length){let d=t.getBoundingClientRect();return{w:Math.max(1,d.width||1),h:Math.max(1,d.height||1)}}for(let d of l){let f=parseFloat(d.getAttribute("data-x-raw")||d.getAttribute("data-x")||"0")||0,y=parseFloat(d.getAttribute("data-y-raw")||d.getAttribute("data-y")||"0")||0,g=parseFloat(d.style.width)||d.getBoundingClientRect().width||0,b=parseFloat(d.style.height)||d.getBoundingClientRect().height||0,m=f+g,w=y+b;m>r&&(r=m),w>o&&(o=w)}let s=Math.max(1,this.gridSize||10);return r=Math.ceil(r/s)*s,o=Math.ceil(o/s)*s,{w:Math.max(1,r),h:Math.max(1,o)}}_startScaleWatch(){if(!this.autoResizeCards||this.__scaleRAF)return;let t=()=>{var l;if(!this.autoResizeCards){this.__scaleRAF=null;return}let r=this.getBoundingClientRect(),o=Math.max(1,r.width||0);o!==this.__lastScaleW&&(this.__lastScaleW=o,(l=this._applyAutoScale)==null||l.call(this)),this.__scaleRAF=requestAnimationFrame(t)};this.__scaleRAF=requestAnimationFrame(t)}_stopScaleWatch(){if(this.__scaleRAF){try{cancelAnimationFrame(this.__scaleRAF)}catch{}this.__scaleRAF=null}}_applyAutoScale(){var d,f,y,g,b,m,w,O,E,P;let t=this.cardContainer;if(!t)return;if(typeof this._ensureScaleWrapper=="function"&&this._ensureScaleWrapper(),!this.autoResizeCards){let R=typeof this._computeDesignSize=="function"?this._computeDesignSize():{w:t.offsetWidth||1,h:t.offsetHeight||1};if(t.style.width=`${R.w}px`,t.style.height=`${R.h}px`,t.style.transform="scale(1)",t.style.transformOrigin="top left",t.style.position="absolute",t.style.top="0",t.style.left="0",this.__scaleOuter){let C=this.parentElement&&((f=(d=this.parentElement).getBoundingClientRect)==null?void 0:f.call(d).width)||this.offsetParent&&((g=(y=this.offsetParent).getBoundingClientRect)==null?void 0:g.call(y).width)||this.getBoundingClientRect&&this.getBoundingClientRect().width||this.offsetWidth||R.w;this.__scaleOuter.style.width=`${Math.max(1,C)}px`,this.__scaleOuter.style.height=`${Math.max(1,R.h)}px`}try{(b=this._syncTabsWidth_)==null||b.call(this)}catch{}return}let r=typeof this._computeDesignSize=="function"?this._computeDesignSize():{w:t.offsetWidth||1,h:t.offsetHeight||1},o=this.parentElement&&((w=(m=this.parentElement).getBoundingClientRect)==null?void 0:w.call(m).width)||this.offsetParent&&((E=(O=this.offsetParent).getBoundingClientRect)==null?void 0:E.call(O).width)||this.getBoundingClientRect&&this.getBoundingClientRect().width||this.offsetWidth||r.w,l=Math.max(1,o),s=Math.min(l/Math.max(1,r.w),1);this.__scaleOuter&&(this.__scaleOuter.style.width=`${l}px`,this.__scaleOuter.style.height=`${Math.max(1,r.h*s)}px`),t.style.width=`${r.w}px`,t.style.height=`${r.h}px`,t.style.transform=`scale(${s})`,t.style.transformOrigin="top left",t.style.position="absolute",t.style.top="0",t.style.left="0";try{(P=this._syncTabsWidth_)==null||P.call(this)}catch{}}_resizeContainer(){var s;let t=this.cardContainer;if(!t||this._isContainerFixed())return;let r=Array.from(t.querySelectorAll(".card-wrapper")),o=0,l=0;r.forEach(d=>{let f=d.getBoundingClientRect(),y=t.getBoundingClientRect(),g=f.left-y.left+f.width,b=f.top-y.top+f.height;o=Math.max(o,g),l=Math.max(l,b)}),t.style.width=`${Math.ceil(o/this.gridSize)*this.gridSize||100}px`,t.style.height=`${Math.ceil(l/this.gridSize)*this.gridSize||100}px`;try{(s=this._syncTabsWidth_)==null||s.call(this)}catch{}}_pushCardsOutOfTheWay(t,r,o,l,s){if(!this.__collisionOriginals)return;let d=new Set(t.map(C=>C.el)),f=Array.from(this.cardContainer.querySelectorAll(".card-wrapper")).filter(C=>!C.dataset.placeholder),y=this._isContainerFixed(),{w:g,h:b}=this._getContainerSize();for(let C of f){if(d.has(C))continue;let A=this.__collisionOriginals.get(C);if(A){C.setAttribute("data-x-raw",String(A.x)),C.setAttribute("data-y-raw",String(A.y));let L=l?Math.round(A.x/s)*s:A.x,x=l?Math.round(A.y/s)*s:A.y;this._setCardPosition(C,L,x)}}let m=t.map(C=>({x:C.snapX,y:C.snapY,w:C.w,h:C.h})),w=new Map,O=new Map;for(let C of f){let A=parseFloat(C.style.width)||C.getBoundingClientRect().width,L=parseFloat(C.style.height)||C.getBoundingClientRect().height;O.set(C,{w:A,h:L})}let E=r>0?1:r<0?-1:0,P=o>0?1:o<0?-1:0,R=Math.abs(r)>=Math.abs(o);for(let C of f){if(d.has(C))continue;let A=this.__collisionOriginals.get(C);if(!A)continue;let{x:L,y:x}=A,{w:M,h:I}=O.get(C),re=!1;for(let ie of m)if(this._rectsOverlap({x:ie.x,y:ie.y,w:ie.w,h:ie.h},{x:L,y:x,w:M,h:I})){re=!0,R&&E!==0?L=E>0?ie.x+ie.w:ie.x-M:!R&&P!==0?x=P>0?ie.y+ie.h:ie.y-I:L=ie.x+ie.w;break}if(re){let ie=0,U=R?E!==0?E*s:s:0,ue=R?0:P!==0?P*s:s;for(;ie<100;){let H={x:L,y:x,w:M,h:I},V=!1;for(let de of m)if(this._rectsOverlap(H,de)){V=!0;break}if(!V){for(let[,de]of w)if(this._rectsOverlap(H,de)){V=!0;break}}if(!V&&y&&(L<0||x<0||L+M>g||x+I>b)&&(V=!0),!V)break;L+=U,x+=ue,ie++}y&&(L=Math.max(0,Math.min(L,Math.max(0,g-M))),x=Math.max(0,Math.min(x,Math.max(0,b-I))))}w.set(C,{x:L,y:x,w:M,h:I}),m.push({x:L,y:x,w:M,h:I})}for(let[C,A]of w){C.setAttribute("data-x-raw",String(A.x)),C.setAttribute("data-y-raw",String(A.y));let L=l?Math.round(A.x/s)*s:A.x,x=l?Math.round(A.y/s)*s:A.y;this._setCardPosition(C,L,x)}}_rectFor(t,r=null,o=null,l=null,s=null){let d=r!=null?r:parseFloat(t.getAttribute("data-x"))||0,f=o!=null?o:parseFloat(t.getAttribute("data-y"))||0,y=l!=null?l:parseFloat(t.style.width)||t.getBoundingClientRect().width||0,g=s!=null?s:parseFloat(t.style.height)||t.getBoundingClientRect().height||0;return{x:d,y:f,w:y,h:g,el:t}}_rectsOverlap(t,r,o=.5){return!(t.x+t.w<=r.x+o||r.x+r.w<=t.x+o||t.y+t.h<=r.y+o||r.y+r.h<=t.y+o)}_anyCollisionFor(t,r){let o=Array.from(this.cardContainer.querySelectorAll(".card-wrapper")).filter(s=>!r.has(s)&&!s.dataset.placeholder);if(!o.length)return!1;let l=o.map(s=>this._rectFor(s));for(let s of t)for(let d of l)if(this._rectsOverlap(s,d))return!0;return!1}_extractCardConfig(t){var o;if(!t)return{};let r=t._config||t.config;if(r&&typeof r=="object"&&Object.keys(r).length)return r;try{let l=t.closest?t.closest(".card-wrapper"):null,s=(o=l==null?void 0:l.dataset)==null?void 0:o.cfg;if(s){let d=JSON.parse(s);if(d&&typeof d=="object")return d}}catch{}return{}}async _openCardManager(){await this._openSmartPicker("add")}_catalog(){return[{id:"favorites",name:"Favorites",items:[]},{id:"recent",name:"Recent",items:[]},{id:"basics",name:"Basics",items:[{type:"entities",name:"Entities",icon:"mdi:format-list-bulleted"},{type:"entity",name:"Entity",icon:"mdi:checkbox-blank-circle-outline"},{type:"tile",name:"Tile",icon:"mdi:view-grid-outline"},{type:"button",name:"Button",icon:"mdi:gesture-tap-button"},{type:"glance",name:"Glance",icon:"mdi:eye-outline"},{type:"markdown",name:"Markdown",icon:"mdi:language-markdown"},{type:"custom_card",name:"Custom Card",icon:"mdi:puzzle-outline"}]},{id:"sensors",name:"Sensors",items:[{type:"sensor",name:"Sensor",icon:"mdi:antenna"},{type:"gauge",name:"Gauge",icon:"mdi:gauge"},{type:"history-graph",name:"History graph",icon:"mdi:chart-line"},{type:"statistics-graph",name:"Statistics graph",icon:"mdi:chart-bar"}]},{id:"visual",name:"Visual",items:[{type:"picture-entity",name:"Picture entity",icon:"mdi:image-outline"},{type:"picture-glance",name:"Picture glance",icon:"mdi:image-multiple-outline"},{type:"weather-forecast",name:"Weather",icon:"mdi:weather-partly-cloudy"},{type:"map",name:"Map",icon:"mdi:map"},{type:"iframe",name:"iFrame",icon:"mdi:application"}]},{id:"controls",name:"Controls",items:[{type:"light",name:"Light",icon:"mdi:lightbulb-outline"},{type:"thermostat",name:"Thermostat",icon:"mdi:thermostat"},{type:"media-control",name:"Media control",icon:"mdi:play-circle-outline"},{type:"alarm-panel",name:"Alarm panel",icon:"mdi:shield-home-outline"},{type:"area",name:"Area",icon:"mdi:map-marker"}]}]}async _getEditorElementForType(t,r){try{console.info("[ddc:editor] Requesting editor element",{type:t,cfg:r})}catch{}let o=await this._helpersPromise||await window.loadCardHelpers();try{typeof t=="string"&&t&&!t.startsWith("custom:")&&t!=="custom_card"&&await this._ensureCardModuleLoaded(t,r)}catch{}if(typeof t=="string"&&t==="entity")try{return await this._getEntityCardEditor(r||{})}catch(g){console.warn("[ddc:editor] Custom entity editor failed",g)}let l=async()=>{try{if(o.getCardElementClass)return await o.getCardElementClass(t);let g;if(r&&typeof r=="object")g={type:t,...r};else{let m;try{m=await this._getStubConfigForType(t)}catch{}g=m&&typeof m=="object"?{...m}:{type:t}}let b=o.createCardElement(g);return(b==null?void 0:b.constructor)||null}catch{return null}};try{let g=await l();if(g){if(typeof g.getConfigElement=="function"){let b=await g.getConfigElement();if(b){try{console.info("[ddc:editor] Found static class editor",{type:t})}catch{}return b}}if(typeof g.getConfigForm=="function")try{let b=await g.getConfigForm();if(b&&b.schema){try{await customElements.whenDefined("ha-form")}catch{}let m=document.createElement("ha-form");m.hass=this.hass,m.schema=Array.isArray(b.schema)?b.schema.map(w=>({...w})):b.schema,typeof b.computeLabel=="function"&&(m.computeLabel=b.computeLabel.bind(g)),typeof b.computeHelper=="function"&&(m.computeHelper=b.computeHelper.bind(g)),m.data={...r},m.addEventListener("value-changed",w=>{});try{console.info("[ddc:editor] Generated form editor via getConfigForm",{type:t})}catch{}return m}}catch{}}}catch{}if(typeof t=="string"&&(t.startsWith("custom:")||t==="custom_card"))try{let g;try{g=await this._getStubConfigForType(t)}catch{}let b=g&&typeof g=="object"?{...g}:{type:t},m=o.createCardElement(b);if(m.hass=this.hass,typeof m.getConfigElement=="function"){let w=await m.getConfigElement();if(w){try{console.info("[ddc:editor] Found instance-level editor",{type:t})}catch{}return w}}}catch{}let s=String(t).replace(/^custom:/,""),f=(Array.isArray(window.customCards)?window.customCards:[]).find(g=>(g==null?void 0:g.type)===s||(g==null?void 0:g.type)===t||(g==null?void 0:g.type)===`custom:${s}`),y=[];f!=null&&f.editor&&y.push(f.editor),y.push(`${s}-editor`,`${s}-config-editor`),s&&typeof s=="string"&&y.push(`hui-${s}-card-editor`);for(let g of y)if(!(!g||typeof g!="string"))for(let b of[0,100,300,700,1500,3e3])try{if(customElements.get(g)||await Promise.race([customElements.whenDefined(g),new Promise(m=>setTimeout(m,b))]),customElements.get(g)){try{console.info("[ddc:editor] Found editor by tag",{type:t,tag:g})}catch{}return document.createElement(g)}}catch{}return null}async _ensureCardModuleLoaded(t,r){try{let o=await this._helpersPromise||await window.loadCardHelpers(),l;if(r&&typeof r=="object")l={type:t,...r};else{let f;try{f=await this._getStubConfigForType(t)}catch{}l=f&&typeof f=="object"?{...f}:{type:t}}let s=o.createCardElement(l);s.hass=this.hass;let d=document.createElement("div");d.style.cssText="position:fixed;left:-9999px;top:-9999px;opacity:0;pointer-events:none;",d.appendChild(s),document.body.appendChild(d),await new Promise(f=>requestAnimationFrame(f)),d.remove();try{console.info("[ddc:editor] Warmed card module",{type:t})}catch{}}catch{}}_ensureOverlayZFix(){if(document.querySelector("style[data-ddc-overlay-fix]"))return;let t=document.createElement("style");t.setAttribute("data-ddc-overlay-fix",""),t.textContent=`
      /* Make common HA overlays float above our modal */
      vaadin-combo-box-overlay,
      vaadin-overlay-backdrop,
      mwc-menu-surface,
      .mdc-menu-surface--open {
        z-index: 1000000 !important;
      }
    `,document.head.appendChild(t)}_customCardsFromRegistry(){return(Array.isArray(window.customCards)?window.customCards:[]).map(r=>{var o;return{type:(o=r==null?void 0:r.type)!=null&&o.startsWith("custom:")?r.type:`custom:${r==null?void 0:r.type}`,name:(r==null?void 0:r.name)||(r==null?void 0:r.type)||"Custom card",icon:"mdi:puzzle-outline",description:(r==null?void 0:r.description)||"",editorTag:(r==null?void 0:r.editor)||null}}).filter(r=>typeof r.type=="string"&&r.type.startsWith("custom:"))}_schemaForType(t){let r=l=>l,o=[];return{entities:r({fields:[{key:"entities",type:"entities",multi:!0,domains:o,label:"Entities"}]}),entity:r({fields:[{key:"entity",type:"entity",multi:!1,domains:o,label:"Entity"}]}),sensor:r({fields:[{key:"entity",type:"entity",multi:!1,domains:["sensor"],label:"Sensor"},{key:"name",type:"text",label:"Name (optional)"}]}),gauge:r({fields:[{key:"entity",type:"entity",multi:!1,domains:["sensor","number","input_number"],label:"Numeric entity"},{key:"min",type:"number",label:"Min",step:"any"},{key:"max",type:"number",label:"Max",step:"any"}]}),"history-graph":r({fields:[{key:"entities",type:"entities",multi:!0,domains:o,label:"Entities (multiselect)"},{key:"hours_to_show",type:"number",label:"Hours to show",default:24}]}),"statistics-graph":r({fields:[{key:"entities",type:"entities",multi:!0,domains:["sensor","number","input_number"],label:"Entities (multiselect)"},{key:"chart_type",type:"select",options:["line","bar"],label:"Chart type",default:"line"},{key:"statistic",type:"select",options:["mean","min","max","sum"],label:"Statistic",default:"mean"}]}),glance:r({fields:[{key:"entities",type:"entities",multi:!0,domains:o,label:"Entities (multiselect)"}]}),"picture-glance":r({fields:[{key:"entities",type:"entities",multi:!0,domains:o,label:"Entities (multiselect)"},{key:"image",type:"text",label:"Image URL (optional)"}]}),"picture-entity":r({fields:[{key:"entity",type:"entity",multi:!1,domains:o,label:"Entity"},{key:"image",type:"text",label:"Image URL (optional)"}]}),"weather-forecast":r({fields:[{key:"entity",type:"entity",multi:!1,domains:["weather"],label:"Weather entity"}]}),map:r({fields:[{key:"entities",type:"entities",multi:!0,domains:["device_tracker","person"],label:"Trackers / people (multiselect)"},{key:"default_zoom",type:"number",label:"Default zoom",default:14}]}),"media-control":r({fields:[{key:"entity",type:"entity",multi:!1,domains:["media_player"],label:"Media player"}]}),light:r({fields:[{key:"entity",type:"entity",multi:!1,domains:["light"],label:"Light"}]}),thermostat:r({fields:[{key:"entity",type:"entity",multi:!1,domains:["climate"],label:"Climate"}]}),"alarm-panel":r({fields:[{key:"entity",type:"entity",multi:!1,domains:["alarm_control_panel"],label:"Alarm"}]}),markdown:r({fields:[{key:"content",type:"textarea",label:"Markdown"}]}),tile:r({fields:[{key:"entity",type:"entity",multi:!1,domains:o,label:"Entity"}]}),button:r({fields:[{key:"entity",type:"entity",multi:!1,domains:o,label:"Entity (optional)"}]}),iframe:r({fields:[{key:"url",type:"text",label:"URL"}]}),area:r({fields:[{key:"area",type:"text",label:"Area ID"}]})}[t]||{fields:[]}}async _getEntityCardEditor(t={}){let r=document.createElement("div");r.style.display="flex",r.style.flexDirection="column",r.style.gap="12px",r.style.padding="8px 0",r.style.overflow="visible",r._cfg={type:"entity",...t||{}};let o=()=>{let A={type:"entity"};["entity","name","icon","attribute","unit","state_color","theme"].forEach(L=>{let x=r._cfg[L];x!==void 0&&x!==""&&x!==null&&(A[L]=x)}),r.dispatchEvent(new CustomEvent("config-changed",{detail:{config:A}}))},l=document.createElement("div");l.style.display="flex",l.style.flexDirection="column",l.style.gap="4px";let s=document.createElement("span");s.textContent="Entity",s.style.fontSize=".8rem",s.style.opacity="0.8";let d=document.createElement("ha-entity-picker");d.setAttribute("label","Select entity"),d.addEventListener("value-changed",A=>{var x,M,I;A.stopPropagation();let L=(I=A.detail&&((x=A.detail.value)!=null?x:A.detail))!=null?I:(M=A.target)==null?void 0:M.value;r._cfg.entity=L||"";try{f()}catch{}o()}),l.appendChild(s),l.appendChild(d),r.appendChild(l);let f=()=>{},y=document.createElement("div");y.style.display="grid",y.style.gridTemplateColumns="1fr 1fr",y.style.columnGap="12px",y.style.rowGap="12px";let g=(A,L)=>{let x=document.createElement("div");x.style.display="flex",x.style.flexDirection="column",x.style.gap="4px";let M=document.createElement("span");M.textContent=A,M.style.fontSize=".8rem",M.style.opacity="0.8",x.appendChild(M),x.appendChild(L),y.appendChild(x)},b;customElements.get("ha-textfield")?(b=document.createElement("ha-textfield"),b.setAttribute("label","Name"),b.addEventListener("input",()=>{r._cfg.name=b.value||void 0,o()})):(b=document.createElement("input"),b.type="text",b.placeholder="Name",b.addEventListener("input",()=>{r._cfg.name=b.value||void 0,o()}),Object.assign(b.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})),g("Name",b);let m;customElements.get("ha-icon-picker")?(m=document.createElement("ha-icon-picker"),m.setAttribute("label","Icon"),m.addEventListener("value-changed",A=>{var L;A.stopPropagation(),r._cfg.icon=((L=A.detail)==null?void 0:L.value)||void 0,o()}),Object.assign(m.style,{position:"relative",zIndex:"1000"})):customElements.get("ha-textfield")?(m=document.createElement("ha-textfield"),m.setAttribute("label","Icon"),m.addEventListener("input",()=>{r._cfg.icon=m.value||void 0,o()})):(m=document.createElement("input"),m.type="text",m.placeholder="mdi:icon",m.addEventListener("input",()=>{r._cfg.icon=m.value||void 0,o()}),Object.assign(m.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})),g("Icon",m);let w;if(f=()=>{var U,ue;let A=[],L=(U=r._cfg)==null?void 0:U.entity,x=r._hass;if(L&&x&&x.states&&x.states[L]&&x.states[L].attributes)try{A=Object.keys(x.states[L].attributes||{}).filter(H=>H&&typeof H=="string"),A.sort()}catch{}let M=w&&typeof w.value!="undefined"?w.value:void 0,I=((w==null?void 0:w.tagName)||"").toLowerCase(),re={min_color_temp_kelvin:"Minimum color temperature (Kelvin)",max_color_temp_kelvin:"Maximum color temperature (Kelvin)",min_color_temp_mireds:"Minimum color temperature (mireds)",max_color_temp_mireds:"Maximum color temperature (mireds)",min_mireds:"Minimum color temperature (mireds)",max_mireds:"Maximum color temperature (mireds)",effect_list:"Available effects",color_mode:"Color mode",brightness:"Brightness",hs_color:"Hs color",rgb_color:"Rgb color",xy_color:"Xy color",entity_id:"Entity ID",friendly_name:"Friendly name",icon:"Icon"},ie=H=>re[H]?re[H]:H.split("_").map(V=>V&&(V.toLowerCase()==="kelvin"?"Kelvin":V.toLowerCase()==="mireds"?"mireds":V.charAt(0).toUpperCase()+V.slice(1))).join(" ");if(I==="ha-combo-box"){let H=A.map(V=>({value:V,label:ie(V)}));H.unshift({value:"",label:""}),w.items=H,M&&A.includes(M)?w.value=M:w.value=""}else if(I==="ha-select"){w.innerHTML="";let H=document.createElement("mwc-list-item");H.setAttribute("value",""),H.textContent="",w.appendChild(H);for(let V of A){let de=document.createElement("mwc-list-item");de.setAttribute("value",V),de.textContent=ie(V),w.appendChild(de)}M&&A.includes(M)?w.value=M:w.value="",(ue=w.requestUpdate)==null||ue.call(w)}else if(I==="select"){w.innerHTML="";let H=document.createElement("option");H.value="",H.textContent="",w.appendChild(H);for(let V of A){let de=document.createElement("option");de.value=V,de.textContent=ie(V),w.appendChild(de)}M&&A.includes(M)&&(w.value=M)}},customElements.get("ha-combo-box"))w=document.createElement("ha-combo-box"),w.setAttribute("label","Attribute"),w.setAttribute("item-label-path","label"),w.setAttribute("item-value-path","value"),w.setAttribute("allow-custom-value","false"),w.addEventListener("value-changed",A=>{var x,M;A.stopPropagation();let L=(M=(x=A.detail)==null?void 0:x.value)!=null?M:w.value;r._cfg.attribute=L||void 0,o()});else if(customElements.get("ha-select"))w=document.createElement("ha-select"),w.setAttribute("label","Attribute"),w.addEventListener("selected",A=>{A.stopPropagation(),r._cfg.attribute=w.value||void 0,o()}),Object.assign(w.style,{position:"relative",zIndex:"1000"});else{w=document.createElement("select");let A=document.createElement("option");A.value="",A.textContent="",w.appendChild(A),w.addEventListener("change",L=>{L.stopPropagation(),r._cfg.attribute=w.value||void 0,o()}),Object.assign(w.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),Object.assign(w.style,{position:"relative",zIndex:"1000"})}f(),g("Attribute",w);let O;customElements.get("ha-textfield")?(O=document.createElement("ha-textfield"),O.setAttribute("label","Unit"),O.addEventListener("input",()=>{r._cfg.unit=O.value||void 0,o()})):(O=document.createElement("input"),O.type="text",O.placeholder="Unit",O.addEventListener("input",()=>{r._cfg.unit=O.value||void 0,o()}),Object.assign(O.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})),g("Unit",O);let E;if(customElements.get("ha-select"))E=document.createElement("ha-select"),E.setAttribute("label","Theme (optional)"),E.addEventListener("selected",A=>{A.stopPropagation(),r._cfg.theme=E.value||void 0,o()});else{E=document.createElement("select");let A=document.createElement("option");A.value="",A.textContent="",E.appendChild(A),E.addEventListener("change",L=>{L.stopPropagation(),r._cfg.theme=E.value||void 0,o()}),Object.assign(E.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})}g("Theme (optional)",E);let P;customElements.get("ha-switch")?(P=document.createElement("ha-switch"),P.addEventListener("change",()=>{r._cfg.state_color=!!P.checked,o()})):(P=document.createElement("input"),P.type="checkbox",P.addEventListener("change",()=>{r._cfg.state_color=!!P.checked,o()}));let R=document.createElement("div");R.style.display="flex",R.style.alignItems="center",R.style.gap="8px";let C=document.createElement("span");return C.textContent="Show state color",C.style.fontSize=".8rem",C.style.opacity="0.8",R.appendChild(C),R.appendChild(P),y.appendChild(R),r.appendChild(y),r.setConfig=(A={})=>{r._cfg={type:"entity",...A||{}};let L=r._cfg;if(d&&("value"in d&&(d.value=L.entity||""),d.setAttribute&&d.setAttribute("value",L.entity||"")),b&&(b.value=L.name||""),m&&(m.value=L.icon||""),w){try{f()}catch{}w.value=L.attribute||""}O&&(O.value=L.unit||""),E&&(E.value=L.theme||""),P&&"checked"in P&&(P.checked=!!L.state_color)},Object.defineProperty(r,"hass",{get(){return this._hass},set(A){var L;if(this._hass=A,d){try{d.hass=A}catch{}customElements.get("ha-entity-picker")||customElements.whenDefined("ha-entity-picker").then(()=>{var x;try{d.hass=this._hass,(x=d.requestUpdate)==null||x.call(d)}catch{}}).catch(()=>{})}if(m){try{m.hass=A}catch{}customElements.get("ha-icon-picker")||customElements.whenDefined("ha-icon-picker").then(()=>{var x;try{m.hass=this._hass,(x=m.requestUpdate)==null||x.call(m)}catch{}}).catch(()=>{})}if(E){let x=[];A&&A.themes&&(A.themes.themes?x=Object.keys(A.themes.themes):typeof A.themes=="object"&&(x=Object.keys(A.themes).filter(re=>re!=="default_theme")));let M=E.value,I=(E.tagName||"").toLowerCase();if(I==="ha-select"){E.innerHTML="";let re=document.createElement("mwc-list-item");re.setAttribute("value",""),re.textContent="",E.appendChild(re);for(let ie of x){let U=document.createElement("mwc-list-item");U.setAttribute("value",ie),U.textContent=ie,E.appendChild(U)}M&&x.includes(M)?E.value=M:M||(E.value=""),(L=E.requestUpdate)==null||L.call(E)}else if(I==="select"){E.innerHTML="";let re=document.createElement("option");re.value="",re.textContent="",E.appendChild(re);for(let ie of x){let U=document.createElement("option");U.value=ie,U.textContent=ie,E.appendChild(U)}M&&Array.from(E.options).some(ie=>ie.value===M)&&(E.value=M)}}try{f()}catch{}}}),r.setConfig(t||{}),r}_shapeBySchema(t,r={}){let o=this._schemaForType(t)||{fields:[]},l={...r,type:t};for(let s of o.fields){let d=l[s.key];if(s.type==="entities"){let y=(Array.isArray(d)?d:d!=null&&d!==""?[d]:[]).filter(Boolean);y.length?l[s.key]=y:delete l[s.key]}else if(s.type==="entity")Array.isArray(d)&&(d=d[0]),d==null||d===""?delete l[s.key]:l[s.key]=String(d);else if(s.type==="number")if(d==null||d==="")delete l[s.key];else{let f=Number(d);Number.isFinite(f)?l[s.key]=f:delete l[s.key]}else(s.type==="select"||s.type==="text"||s.type==="textarea")&&(d==null||d===""?delete l[s.key]:l[s.key]=d)}return l}_statesList(t){var l;let r=Object.keys(((l=this.hass)==null?void 0:l.states)||{});if(!t||!t.length)return r;if(!this.__domainIndex||this.__domainIndex._gen!==r.length){let s={};for(let d of r){let f=d.split(".")[0];(s[f]||(s[f]=[])).push(d)}this.__domainIndex={_gen:r.length,map:s}}let o=[];for(let s of t)this.__domainIndex.map[s]&&o.push(...this.__domainIndex.map[s]);return o}_isNumericEntity(t){var l,s;let r=(s=(l=this.hass)==null?void 0:l.states)==null?void 0:s[t];if(!r)return!1;let o=Number(r.state);return Number.isFinite(o)}_getFaves(){try{return new Set(JSON.parse(localStorage.getItem("ddc_faves")||"[]"))}catch{return new Set}}_setFaves(t){try{localStorage.setItem("ddc_faves",JSON.stringify(Array.from(t)))}catch{}}_getRecent(){try{return JSON.parse(localStorage.getItem("ddc_recent_types")||"[]")}catch{return[]}}_pushRecent(t){try{let r=this._getRecent().filter(o=>o!==t);r.unshift(t),r.length>10&&(r.length=10),localStorage.setItem("ddc_recent_types",JSON.stringify(r))}catch{}}async _ensureCodeMirror(){if(!this.__cmReady){if(!document.querySelector("link[data-cm-core]")){let t=document.createElement("link");t.rel="stylesheet",t.href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.css",t.setAttribute("data-cm-core",""),document.head.appendChild(t)}await new Promise(t=>{if(window.CodeMirror)return t();let r=document.createElement("script");r.src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.js",r.onload=t,document.head.appendChild(r)}),await new Promise(t=>{var o,l;if((l=(o=window.CodeMirror)==null?void 0:o.mimeModes)!=null&&l.yaml)return t();let r=document.createElement("script");r.src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/yaml/yaml.min.js",r.onload=t,document.head.appendChild(r)}),this.__cmReady=!0}}async _mountYamlEditor(t,r,o,l){let s=y=>window.jsyaml?window.jsyaml.dump(y):JSON.stringify(y,null,2),d=y=>window.jsyaml?window.jsyaml.load(y):JSON.parse(y);t.innerHTML="";let f=s(r);if(customElements.get("ha-code-editor")){let y=document.createElement("ha-code-editor");y.mode="yaml",y.hass=this.hass,y.value=f,y.style.display="block",y.style.height="260px",t.appendChild(y);let g=!1;return y.addEventListener("value-changed",b=>{var w,O,E;if(g)return;let m=(E=(O=(w=b.detail)==null?void 0:w.value)!=null?O:y.value)!=null?E:"";try{o(d(m))}catch(P){l==null||l(P)}}),{setValue:b=>{var w;let m=s(b);((w=y.value)!=null?w:"")!==m&&(g=!0,y.value=m,g=!1)}}}try{await this._ensureCodeMirror();let y=window.CodeMirror(t,{value:f,mode:"yaml",lineNumbers:!0,lineWrapping:!0,indentUnit:2,tabSize:2}),g=!1;return y.on("change",()=>{if(g)return;let b=y.getValue();try{o(d(b))}catch(m){l==null||l(m)}}),{setValue:b=>{let m=s(b);y.getValue()!==m&&(g=!0,y.setValue(m),g=!1)}}}catch{let y=document.createElement("textarea");return y.style.width="100%",y.style.height="260px",y.value=f,y.addEventListener("input",()=>{try{o(d(y.value))}catch(g){l==null||l(g)}}),t.appendChild(y),{setValue:g=>{let b=s(g);y.value!==b&&(y.value=b)}}}}_createVirtualList({container:t,items:r,rowHeight:o=36,renderRow:l}){t.style.position="relative",t.style.overflow="auto";let s=document.createElement("div");s.style.height=`${r.length*o}px`,t.innerHTML="",t.appendChild(s);let d=new Map,f=()=>{let y=t.scrollTop,g=t.clientHeight,b=Math.max(0,Math.floor(y/o)-6),m=Math.min(r.length-1,Math.ceil((y+g)/o)+6);for(let[w,O]of d)(w<b||w>m)&&(O.remove(),d.delete(w));for(let w=b;w<=m;w++){if(d.has(w))continue;let O=l(r[w],w);O.style.position="absolute",O.style.left="0",O.style.right="0",O.style.top=`${w*o}px`,d.set(w,O),t.appendChild(O)}};return t.addEventListener("scroll",f,{passive:!0}),new ResizeObserver(f).observe(t),f(),{refresh(y){if(y){r=y,s.style.height=`${r.length*o}px`;for(let[,g]of d)g.remove();d.clear()}f()}}}async _openSmartPicker(t="add",r=null,o=null){let l=()=>s.remove(),s=document.createElement("div");s.className="modal",s.innerHTML=`
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
      </div>`,this.shadowRoot.appendChild(s);let d=s.querySelector("#leftPane"),f=s.querySelector("#addBtn"),y=s.querySelector("#footAdd"),g=s.querySelector("#cancelBtn"),b=s.querySelector("#footCancel"),m=s.querySelector("#search"),w=s.querySelector("#cardHost"),O=s.querySelector("#editorHost"),E=s.querySelector("#editorSpin"),P=s.querySelector("#quickFill"),R=s.querySelector("#yamlHost"),C=s.querySelector("#yamlErr"),A=s.querySelector("#yamlSec"),L=s.querySelector("#tabVisual"),x=s.querySelector("#tabYaml"),M=s.querySelector("#tabVis"),I=s.querySelector("#visSec"),re=s.querySelector("#visHost"),ie=s.querySelector("#err"),U=s.querySelector("#previewSpin"),ue=K=>{f.disabled=y.disabled=!K},H=K=>{K?(ie.hidden=!1,ie.textContent=K):(ie.hidden=!0,ie.textContent="")},V=this._getFaves(),de=this._getRecent(),me=this._catalog(),Ye=me.find(K=>K.id==="favorites"),Fe=me.find(K=>K.id==="recent"),Re=me.flatMap(K=>K.items||[]);Ye.items=Re.filter(K=>V.has(K.type)),Fe.items=de.map(K=>Re.find(Z=>Z.type===K)).filter(Boolean);let qe=this._customCardsFromRegistry();qe.length&&me.push({id:"custom",name:"Custom (installed)",items:qe});let Se=s.querySelector("#quickFillSec");Se&&(Se.style.display="none");let Qe=s.querySelector("#optionsSec .hd"),et,Ve,tt=()=>{if(!Ve)return;let K=Pe&&V.has(Pe),Z=Ve.querySelector("ha-icon");Z&&Z.setAttribute("icon",K?"mdi:star":"mdi:star-outline")},ft=K=>{if(et){let Z=Re.find(_e=>_e.type===K),xe=Z?Z.name:K||"";et.textContent=xe}tt()};if(Qe&&!Qe.querySelector(".sel-info")){let K=Qe.querySelector("span");K&&(K.style.display="none"),et=document.createElement("span"),et.className="sel-info",et.style.flex="1",et.style.fontWeight="bold",et.style.paddingRight="8px",Qe.insertBefore(et,Qe.firstChild),Ve=document.createElement("button"),Ve.className="icon-btn",Ve.setAttribute("title","Favorite"),Object.assign(Ve.style,{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"28px",height:"28px",borderRadius:"6px",border:"1px solid var(--divider-color)",background:"var(--primary-background-color)",padding:"0",marginLeft:"4px",cursor:"pointer"}),Ve.innerHTML='<ha-icon icon="mdi:star-outline"></ha-icon>',Qe.appendChild(Ve),Ve.addEventListener("click",Z=>{Z.stopPropagation(),Pe&&(V.has(Pe)?V.delete(Pe):V.add(Pe),this._setFaves(V),tt(),Ge())})}let at="visual",ce=K=>{let Z=K==="yaml",xe=K==="vis",_e=!Z&&!xe;L.classList.toggle("active",_e),L.setAttribute("aria-selected",String(_e)),x.classList.toggle("active",Z),x.setAttribute("aria-selected",String(Z)),M&&(M.classList.toggle("active",xe),M.setAttribute("aria-selected",String(xe))),O.parentElement.style.display=_e?"":"none",A.style.display=Z?"":"none",I&&(I.style.display=xe?"":"none"),Z?A.scrollIntoView({behavior:"smooth",block:"start"}):xe&&I&&I.scrollIntoView({behavior:"smooth",block:"start"}),at=Z?"yaml":xe?"vis":"visual"};L.addEventListener("click",async()=>{var K;if(ce("visual"),!Ee)await dt(le);else try{(K=Ee.setConfig)==null||K.call(Ee,le)}catch{}}),x.addEventListener("click",()=>ce("yaml")),M&&M.addEventListener("click",()=>{ce("vis");try{vt(le)}catch{}}),ce("visual");let gt=()=>{let K=m.value.trim().toLowerCase();return me.map(Z=>({...Z,items:(Z.items||[]).filter(xe=>!K||xe.name.toLowerCase().includes(K)||xe.type.toLowerCase().includes(K))})).filter(Z=>Z.items&&Z.items.length||Z.id==="favorites"||Z.id==="recent")},Ge=()=>{let K=gt();d.innerHTML="",K.forEach(Z=>{let xe=document.createElement("div");xe.style.padding="12px",xe.style.borderBottom="1px solid var(--divider-color)";let _e=document.createElement("h4");if(_e.textContent=Z.name,_e.style.margin="0 0 10px 0",_e.style.fontSize=".92rem",_e.style.opacity=".85",xe.appendChild(_e),!Z.items.length&&(Z.id==="favorites"||Z.id==="recent")){let he=document.createElement("div");he.style.opacity=".6",he.style.fontSize=".85rem",he.textContent=Z.id==="favorites"?"No favorites yet.":"No recent items yet.",xe.appendChild(he)}else Z.items.forEach(he=>{let we=document.createElement("button");we.innerHTML=`<span style="display:inline-flex;align-items:center;gap:8px">
              <ha-icon icon="${he.icon}"></ha-icon><span>${he.name}</span>
            </span>`,Object.assign(we.style,{display:"block",width:"100%",textAlign:"left",border:"none",background:"transparent",padding:"8px",borderRadius:"10px",cursor:"pointer"}),we.addEventListener("click",async()=>{Oe(we),await Tt(he.type)}),xe.appendChild(we)});d.appendChild(xe)})},Oe=K=>{d.querySelectorAll("button").forEach(Z=>{Z.classList.remove("active"),Z.style.background="transparent",Z.style.color=""}),K&&(K.classList.add("active"),K.style.background="rgba(3,169,244,.12)",K.style.color="var(--primary-color)")},le=null,Pe=null,Ce=null,Ee=null,nt=null,$e=0,Ct=null,yt="",St=(K,Z)=>{var F;let xe=this._schemaForType(K);if(P.innerHTML="",!xe.fields.length){P.innerHTML='<div style="opacity:.7;font-size:.9rem">No quick fill for this card \u2014 use the editors below.</div>';return}let _e=Object.keys(((F=this.hass)==null?void 0:F.states)||{}),he=document.createElement("div"),we=(se,ze,W,Ne)=>{let He=document.createElement("div");Object.assign(He.style,{padding:"8px 10px",border:"1px solid var(--divider-color)",borderRadius:"10px",cursor:"pointer",userSelect:"none",display:"flex",alignItems:"center",gap:"8px"}),He.innerHTML=`<ha-icon icon="mdi:checkbox-blank-outline"></ha-icon><span>${se}</span>`,ze.includes(se)&&(He.style.background="rgba(3,169,244,.12)",He.style.borderColor="var(--primary-color)",He.querySelector("ha-icon").setAttribute("icon","mdi:checkbox-marked")),He.addEventListener("click",async()=>{let Ue=ze.indexOf(se);Ue>=0?ze.splice(Ue,1):ze.push(se);let Le=ze.includes(se);He.style.background=Le?"rgba(3,169,244,.12)":"",He.style.borderColor=Le?"var(--primary-color)":"var(--divider-color)",He.querySelector("ha-icon").setAttribute("icon",Le?"mdi:checkbox-marked":"mdi:checkbox-blank-outline"),le=this._shapeBySchema(K,{...le,[Ne]:[...ze]}),rt(le),Ce==null||Ce.setValue(le)}),W.appendChild(He)};xe.fields.forEach(se=>{var Ne,He,Ue,Le,Je,We,Ke,j,ae;let ze=document.createElement("div");Object.assign(ze.style,{display:"flex",gap:"8px",alignItems:"center",marginBottom:"8px"});let W=document.createElement("label");if(W.textContent=se.label||se.key,W.style.minWidth="130px",se.type==="entities"){let $=document.createElement("div");$.style.flex="1";let G=document.createElement("input");Object.assign(G,{placeholder:"Filter entities\u2026"}),Object.assign(G.style,{width:"100%",padding:"8px 10px",borderRadius:"10px",border:"1px solid var(--divider-color)",background:"var(--card-background-color)",color:"var(--primary-text-color)"});let oe=document.createElement("div");Object.assign(oe.style,{maxHeight:"220px",overflow:"auto",marginTop:"8px",border:"1px solid var(--divider-color)",borderRadius:"10px",padding:"6px"});let te=se.domains&&se.domains.length?this._statesList(se.domains):_e,X=Array.isArray(Z[se.key])?[...Z[se.key]]:Z[se.key]?[Z[se.key]]:[],J=N=>{let q=document.createElement("div");Object.assign(q.style,{padding:"6px 10px",margin:"4px 0",border:"1px solid var(--divider-color)",borderRadius:"10px",cursor:"pointer",display:"flex",alignItems:"center",gap:"8px",background:""});let B=document.createElement("ha-icon");B.setAttribute("icon","mdi:checkbox-blank-outline"),B.style.setProperty("--mdc-icon-size","18px");let fe=document.createElement("span");fe.textContent=N,fe.style.whiteSpace="nowrap",fe.style.overflow="hidden",fe.style.textOverflow="ellipsis",q.append(B,fe);let Me=()=>{let je=X.includes(N);q.style.background=je?"rgba(3,169,244,.12)":"",q.style.borderColor=je?"var(--primary-color)":"var(--divider-color)",B.setAttribute("icon",je?"mdi:checkbox-marked":"mdi:checkbox-blank-outline")};return Me(),q.addEventListener("click",()=>{let je=X.indexOf(N);je>=0?X.splice(je,1):X.push(N),le=this._shapeBySchema(K,{...le,[se.key]:[...X]}),rt(le),Ce==null||Ce.setValue(le),Me()}),q},Y=te;this._createVirtualList({container:oe,items:Y,rowHeight:36,renderRow:J}),G.addEventListener("input",()=>{let N=G.value.trim().toLowerCase();Y=te.filter(q=>!N||q.toLowerCase().includes(N)),this._createVirtualList({container:oe,items:Y,rowHeight:36,renderRow:J})}),$.append(G,oe),ze.append(W,$),le=this._shapeBySchema(K,{...Z,[se.key]:X})}if(se.type==="entity"){let $=document.createElement("div");$.style.flex="1",$.style.position="relative";let G=document.createElement("input");G.setAttribute("list","ddc_entlist_"+se.key),Object.assign(G.style,{width:"100%",padding:"8px 10px 8px 36px",borderRadius:"10px",border:"1px solid var(--divider-color)"}),G.placeholder=`Select ${((Ne=se.label)==null?void 0:Ne.toLowerCase())||"entity"}\u2026`;let oe=document.createElement("ha-icon");oe.setAttribute("icon","mdi:magnify"),Object.assign(oe.style,{position:"absolute",left:"10px",top:"8px",width:"18px",height:"18px","--mdc-icon-size":"18px",opacity:".7"});let te=document.createElement("datalist");te.id="ddc_entlist_"+se.key;let X=se.domains&&se.domains.length?this._statesList(se.domains):Object.keys(((He=this.hass)==null?void 0:He.states)||{});te.innerHTML=X.map(J=>`<option value="${J}">`).join(""),G.value=Array.isArray(Z[se.key])?Z[se.key][0]||"":Z[se.key]||"",G.addEventListener("change",async()=>{le=this._shapeBySchema(K,{...le,[se.key]:G.value||void 0}),rt(le),Ce==null||Ce.setValue(le)}),$.append(oe,G,te),ze.append(W,$)}if(se.type==="number"){let $=document.createElement("div");$.style.flex="1",$.style.position="relative";let G=document.createElement("input");G.type="number",se.step&&(G.step=se.step),Object.assign(G.style,{width:"100%",padding:"8px 10px 8px 36px",borderRadius:"10px",border:"1px solid var(--divider-color)"});let oe=document.createElement("ha-icon");oe.setAttribute("icon","mdi:counter"),Object.assign(oe.style,{position:"absolute",left:"10px",top:"8px","--mdc-icon-size":"18px",width:"18px",height:"18px",opacity:".7"}),G.value=(Le=(Ue=Z[se.key])!=null?Ue:se.default)!=null?Le:"",G.addEventListener("input",async()=>{let te=G.value===""?void 0:Number(G.value);le=this._shapeBySchema(K,{...le,[se.key]:isNaN(te)?void 0:te}),rt(le),Ce==null||Ce.setValue(le)}),$.append(oe,G),ze.append(W,$)}if(se.type==="select"){let $=document.createElement("div");$.style.flex="1",$.style.position="relative";let G=document.createElement("select");Object.assign(G.style,{width:"100%",padding:"8px 10px 8px 36px",borderRadius:"10px",border:"1px solid var(--divider-color)"});let oe=document.createElement("ha-icon");oe.setAttribute("icon","mdi:format-list-bulleted"),Object.assign(oe.style,{position:"absolute",left:"10px",top:"8px","--mdc-icon-size":"18px",width:"18px",height:"18px",opacity:".7"}),(se.options||[]).forEach(te=>{let X=document.createElement("option");X.value=te,G.appendChild(X)}),G.value=(Ke=(Je=Z[se.key])!=null?Je:se.default)!=null?Ke:((We=se.options)==null?void 0:We[0])||"",G.addEventListener("change",async()=>{le=this._shapeBySchema(K,{...le,[se.key]:G.value}),rt(le),Ce==null||Ce.setValue(le)}),$.append(oe,G),ze.append(W,$)}if(se.type==="text"){let $=document.createElement("div");$.style.flex="1",$.style.position="relative";let G=document.createElement("input");G.type="text",Object.assign(G.style,{width:"100%",padding:"8px 10px 8px 36px",borderRadius:"10px",border:"1px solid var(--divider-color)"});let oe=document.createElement("ha-icon");oe.setAttribute("icon","mdi:text"),Object.assign(oe.style,{position:"absolute",left:"10px",top:"8px","--mdc-icon-size":"18px",width:"18px",height:"18px",opacity:".7"}),G.value=(j=Z[se.key])!=null?j:"",G.addEventListener("input",async()=>{le=this._shapeBySchema(K,{...le,[se.key]:G.value||void 0}),rt(le),Ce==null||Ce.setValue(le)}),$.append(oe,G),ze.append(W,$)}if(se.type==="textarea"){let $=document.createElement("textarea");Object.assign($.style,{flex:"1",minHeight:"120px",padding:"8px 10px",borderRadius:"10px",border:"1px solid var(--divider-color)"}),$.value=(ae=Z[se.key])!=null?ae:"",$.addEventListener("input",async()=>{le=this._shapeBySchema(K,{...le,[se.key]:$.value||""}),rt(le),Ce==null||Ce.setValue(le)}),ze.append(W,$)}he.appendChild(ze)}),P.innerHTML="",P.appendChild(he)},De=new WeakMap,At=K=>{if(!re)return;let Z=Array.isArray(K==null?void 0:K.visibility)?K.visibility.map(we=>({...we})):[],xe=()=>vt(le),_e=()=>{var we;Z=Z.filter(F=>F&&typeof F=="object"&&F.condition),le={...le,visibility:Z};try{Ce==null||Ce.setValue(le)}catch{}try{(we=Ee==null?void 0:Ee.setConfig)==null||we.call(Ee,le)}catch{}rt(le)},he=()=>{if(re.innerHTML="",!Z||!Z.length){let F=document.createElement("div");F.style.opacity=".7",F.style.fontSize=".9rem",F.style.marginBottom="8px",F.textContent="No conditions defined \u2013 this card is always visible.",re.appendChild(F)}Z.forEach((F,se)=>{let ze=document.createElement("div");Object.assign(ze.style,{display:"flex",flexDirection:"column",gap:"6px",marginBottom:"12px",border:"1px solid var(--divider-color)",borderRadius:"8px",padding:"8px"});let W=document.createElement("div");Object.assign(W.style,{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"4px"});let Ne=document.createElement("div");Ne.style.display="flex",Ne.style.alignItems="center",Ne.style.gap="6px";let He=document.createElement("ha-icon"),Ue="mdi:filter",Le=F.condition||"state";Le==="numeric_state"?Ue="mdi:numeric":Le==="screen"?Ue="mdi:monitor":Le==="user"?Ue="mdi:account":Le==="state"&&(Ue="mdi:state-machine"),He.setAttribute("icon",Ue);let Je=document.createElement("span");Je.style.fontWeight="bold",Je.style.textTransform="capitalize",Je.textContent=Le==="numeric_state"?"Entity numeric state":Le==="state"?"Entity state":Le==="screen"?"Screen":"User",Ne.appendChild(He),Ne.appendChild(Je),W.appendChild(Ne);let We=document.createElement("button");We.setAttribute("title","Remove condition"),We.innerHTML='<ha-icon icon="mdi:trash-can-outline"></ha-icon>',Object.assign(We.style,{border:"none",background:"transparent",cursor:"pointer",padding:"4px",display:"inline-flex",alignItems:"center"}),We.style.position="relative",We.style.zIndex="1000",We.addEventListener("click",te=>{te.preventDefault(),te.stopPropagation();let X=Z.indexOf(F);X>-1&&Z.splice(X,1),le.visibility=Z,he(),_e()}),W.appendChild(We),ze.appendChild(W);let Ke=document.createElement("div");Ke.style.display="flex",Ke.style.gap="8px";let j=document.createElement("label");j.textContent="Type",j.style.fontSize=".85rem",j.style.marginRight="4px";let ae=document.createElement("select");["state","numeric_state","screen","user"].forEach(te=>{let X=document.createElement("option");X.value=te,X.textContent=te.replace("_"," "),ae.appendChild(X)}),ae.value=Le,ae.addEventListener("change",()=>{F.condition=ae.value,delete F.entity,delete F.state,delete F.state_not,delete F.above,delete F.below,delete F.media_query,delete F.users,he(),_e()}),Ke.appendChild(j),Ke.appendChild(ae),ze.appendChild(Ke);let $=document.createElement("div");Object.assign($.style,{display:"flex",flexWrap:"wrap",gap:"8px",alignItems:"center"});let G=(te,X)=>{let J=document.createElement("div");J.style.display="flex",J.style.flexDirection="column",J.style.gap="4px",J.style.minWidth="150px";let Y=document.createElement("span");Y.textContent=te,Y.style.fontSize=".75rem",J.appendChild(Y),J.appendChild(X),$.appendChild(J)};(()=>{var te,X;if($.innerHTML="",F.condition==="state"){let J;customElements.get("ha-entity-picker")?(J=document.createElement("ha-entity-picker"),J.hass=this.hass,J.setAttribute("label","Select entity"),J.removeAttribute("hide-clear-icon"),J.value=F.entity||"",J.addEventListener("value-changed",q=>{q.stopPropagation(),F.entity=q.detail.value||"",_e()})):(J=document.createElement("input"),J.value=F.entity||"",J.addEventListener("input",()=>{F.entity=J.value.trim(),_e()}),Object.assign(J.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})),G("Entity",J);let Y;if(customElements.get("ha-select")){Y=document.createElement("ha-select");let q=document.createElement("mwc-list-item");q.setAttribute("value","state"),q.textContent="State is equal to";let B=document.createElement("mwc-list-item");B.setAttribute("value","state_not"),B.textContent="State is not equal to",Y.appendChild(q),Y.appendChild(B),Y.value=F.state_not!=null?"state_not":"state",Y.addEventListener("selected",fe=>{fe.stopPropagation();let Me=F.state_not!=null?F.state_not:F.state;Y.value==="state_not"?(F.state_not=Me,delete F.state):(F.state=Me,delete F.state_not),_e()})}else Y=document.createElement("select"),Y.innerHTML='<option value="state">State is equal to</option><option value="state_not">State is not equal to</option>',Y.value=F.state_not!=null?"state_not":"state",Object.assign(Y.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),Y.addEventListener("change",q=>{q.stopPropagation();let B=F.state_not!=null?F.state_not:F.state;Y.value==="state_not"?(F.state_not=B,delete F.state):(F.state=B,delete F.state_not),_e()});G("Match type",Y);let N;customElements.get("ha-textfield")?(N=document.createElement("ha-textfield"),N.value=(F.state_not!=null?F.state_not:F.state)||"",N.setAttribute("label",""),N.addEventListener("input",q=>{q.stopPropagation();let B=Y.value;F[B]=N.value;let fe=B==="state"?"state_not":"state";delete F[fe],_e()})):(N=document.createElement("input"),N.value=(F.state_not!=null?F.state_not:F.state)||"",Object.assign(N.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),N.addEventListener("input",q=>{q.stopPropagation();let B=Y.value;F[B]=N.value;let fe=B==="state"?"state_not":"state";delete F[fe],_e()})),G("State",N)}else if(F.condition==="numeric_state"){let J;customElements.get("ha-entity-picker")?(J=document.createElement("ha-entity-picker"),J.hass=this.hass,J.setAttribute("label","Select entity"),J.removeAttribute("hide-clear-icon"),J.value=F.entity||"",J.addEventListener("value-changed",q=>{q.stopPropagation(),F.entity=q.detail.value||"",_e()})):(J=document.createElement("input"),J.value=F.entity||"",J.addEventListener("input",()=>{F.entity=J.value.trim(),_e()}),Object.assign(J.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})),G("Entity",J);let Y;customElements.get("ha-textfield")?(Y=document.createElement("ha-textfield"),Y.setAttribute("type","number"),Y.value=F.above!=null?F.above:"",Y.addEventListener("input",q=>{q.stopPropagation();let B=Y.value;B===""||isNaN(Number(B))?delete F.above:F.above=Number(B),_e()})):(Y=document.createElement("input"),Y.type="number",Y.value=F.above!=null?F.above:"",Object.assign(Y.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),Y.addEventListener("input",()=>{let q=Y.value;q===""||isNaN(Number(q))?delete F.above:F.above=Number(q),_e()})),G("Above",Y);let N;customElements.get("ha-textfield")?(N=document.createElement("ha-textfield"),N.setAttribute("type","number"),N.value=F.below!=null?F.below:"",N.addEventListener("input",q=>{q.stopPropagation();let B=N.value;B===""||isNaN(Number(B))?delete F.below:F.below=Number(B),_e()})):(N=document.createElement("input"),N.type="number",N.value=F.below!=null?F.below:"",Object.assign(N.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),N.addEventListener("input",()=>{let q=N.value;q===""||isNaN(Number(q))?delete F.below:F.below=Number(q),_e()})),G("Below",N)}else if(F.condition==="screen"){let J=document.createElement("select"),Y=[{label:"Custom",value:""},{label:"Mobile (max-width: 599px)",value:"(max-width: 599px)"},{label:"Tablet (600px - 991px)",value:"(min-width: 600px) and (max-width: 991px)"},{label:"Desktop (min-width: 992px)",value:"(min-width: 992px)"}];if(Y.forEach(N=>{let q=document.createElement("option");q.value=N.value,q.textContent=N.label,J.appendChild(q)}),J.value=(X=(te=Y.find(N=>N.value===(F.media_query||"")))==null?void 0:te.value)!=null?X:"",J.addEventListener("change",()=>{F.media_query=J.value,_e()}),G("Screen size",J),J.value===""){let N=document.createElement("input");N.placeholder="e.g. (min-width: 1280px)",N.value=F.media_query||"",N.addEventListener("input",()=>{F.media_query=N.value,_e()}),G("Custom query",N)}}else if(F.condition==="user"){let J;customElements.get("ha-user-picker")?(J=document.createElement("ha-user-picker"),J.hass=this.hass,J.value=Array.isArray(F.users)?F.users:[],J.addEventListener("value-changed",Y=>{F.users=Array.isArray(Y.detail.value)?Y.detail.value:[Y.detail.value],_e()})):(J=document.createElement("input"),J.value=Array.isArray(F.users)?F.users.join(","):"",J.addEventListener("input",()=>{F.users=J.value.split(",").map(Y=>Y.trim()).filter(Boolean),_e()})),G("Users",J)}})(),ze.appendChild($),re.appendChild(ze)});let we=document.createElement("button");we.className="btn",we.innerHTML='<ha-icon icon="mdi:plus"></ha-icon><span style="margin-left:6px">Add condition</span>',Object.assign(we.style,{marginTop:"8px"}),we.addEventListener("click",()=>{Z.push({condition:"state",entity:"",state:""}),le.visibility=Z,he(),_e()}),re.appendChild(we)};he()},vt=K=>{if(!re)return;let Z=Array.isArray(K==null?void 0:K.visibility)?K.visibility:[],xe=null,_e=async()=>{if(xe)return xe;try{if(this.hass&&typeof this.hass.callWS=="function")try{let se=await this.hass.callWS({type:"config/auth/list"});if(Array.isArray(se))return xe=se,se}catch{}if(this.hass&&typeof this.hass.callApi=="function")try{let se=await this.hass.callApi("get","users");if(Array.isArray(se))return xe=se,se}catch{}let F=[];if(this.hass&&this.hass.users&&Array.isArray(this.hass.users)&&F.push(...this.hass.users),this.hass&&this.hass.userData&&Array.isArray(this.hass.userData.users)&&F.push(...this.hass.userData.users),this.hass&&this.hass.authorizedUsers&&Array.isArray(this.hass.authorizedUsers)&&F.push(...this.hass.authorizedUsers),F.length){let se=new Map;F.forEach(W=>{let Ne=W.id||W.user_id||W.uid||W.name||"";se.has(Ne)||se.set(Ne,W)});let ze=Array.from(se.values());return xe=ze,ze}}catch{}return xe=[],[]},he=()=>{var F;Z=Z.filter(se=>se&&typeof se=="object"&&se.condition),le.visibility=Z;try{Ce==null||Ce.setValue(le)}catch{}try{(F=Ee==null?void 0:Ee.setConfig)==null||F.call(Ee,le)}catch{}rt(le)},we=()=>{re.innerHTML="";let F=document.createElement("div");F.style.opacity=".75",F.style.fontSize=".85rem",F.style.marginBottom="12px",F.textContent="The card will be shown when ALL conditions below are fulfilled. If no conditions are set, the card will always be shown.",re.appendChild(F);let se=(W,Ne)=>{W.forEach((Le,Je)=>{ze(Le,W,Je,Ne)});let He=document.createElement("div");He.style.marginTop="8px";let Ue=document.createElement("button");Ue.className="btn",Ue.innerHTML='<ha-icon icon="mdi:plus"></ha-icon><span style="margin-left:6px">Add condition</span>',Object.assign(Ue.style,{display:"flex",alignItems:"center",gap:"6px",padding:"6px 12px",border:"none",borderRadius:"20px",background:"var(--primary-color)",color:"var(--text-primary-color, #fff)",cursor:"pointer",fontWeight:"500"}),Ue.addEventListener("click",Le=>{Le.stopPropagation();let Je=He.querySelector(".add-menu");if(Je){Je.remove();return}let We=document.createElement("div");We.className="add-menu",Object.assign(We.style,{position:"relative",marginTop:"4px",border:"1px solid var(--divider-color)",borderRadius:"8px",background:"var(--card-background-color, var(--secondary-background-color))",boxShadow:"0 2px 4px rgba(0,0,0,0.2)"}),[{type:"numeric_state",label:"Entity numeric state",icon:"mdi:numeric"},{type:"state",label:"Entity state",icon:"mdi:state-machine"},{type:"screen",label:"Screen",icon:"mdi:monitor"},{type:"user",label:"User",icon:"mdi:account"},{type:"and",label:"And",icon:"mdi:logic-and"},{type:"or",label:"Or",icon:"mdi:logic-or"}].forEach(j=>{let ae=document.createElement("div");ae.style.display="flex",ae.style.alignItems="center",ae.style.gap="8px",ae.style.padding="6px 12px",ae.style.cursor="pointer",ae.addEventListener("mouseenter",()=>ae.style.background="var(--hover-color, #444)"),ae.addEventListener("mouseleave",()=>ae.style.background=""),ae.addEventListener("click",()=>{We.remove();let oe;j.type==="and"||j.type==="or"?oe={condition:j.type,conditions:[]}:j.type==="state"?oe={condition:"state",entity:"",state:""}:j.type==="numeric_state"?oe={condition:"numeric_state",entity:""}:j.type==="screen"?oe={condition:"screen",media_query:""}:j.type==="user"&&(oe={condition:"user",users:[]}),W.push(oe),De.set(oe,!0),he(),we()});let $=document.createElement("ha-icon");$.setAttribute("icon",j.icon),ae.appendChild($);let G=document.createElement("span");G.textContent=j.label,ae.appendChild(G),We.appendChild(ae)}),He.appendChild(We)}),He.appendChild(Ue),Ne.appendChild(He)},ze=(W,Ne,He,Ue)=>{let Le=W.condition||"state",Je=De.get(W);Je===void 0&&(Je=Z.length===1);let We=document.createElement("div");Object.assign(We.style,{display:"flex",flexDirection:"column",border:"1px solid var(--divider-color)",borderLeft:"3px solid var(--primary-color)",borderRadius:"12px",padding:"16px",marginBottom:"20px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",boxShadow:"var(--ha-card-box-shadow, 0 2px 6px rgba(0, 0, 0, 0.15))"});let Ke=document.createElement("div");Ke.style.display="flex",Ke.style.alignItems="center",Ke.style.justifyContent="space-between",Ke.style.marginBottom="8px",Ke.style.borderBottom="1px solid var(--divider-color)",Ke.style.paddingBottom="4px",Ke.style.position="relative";let j=document.createElement("div");j.style.display="flex",j.style.alignItems="center",j.style.gap="6px";let ae=document.createElement("button");ae.innerHTML=`<ha-icon icon="${Je?"mdi:chevron-down":"mdi:chevron-right"}"></ha-icon>`,Object.assign(ae.style,{border:"none",background:"transparent",cursor:"pointer",padding:"4px",display:"inline-flex",alignItems:"center"}),ae.addEventListener("click",X=>{X.stopPropagation(),De.set(W,!Je),we()}),j.appendChild(ae);let $=document.createElement("ha-icon"),G="mdi:filter";Le==="numeric_state"?G="mdi:numeric":Le==="screen"?G="mdi:monitor":Le==="user"?G="mdi:account":Le==="state"?G="mdi:state-machine":Le==="and"?G="mdi:logic-and":Le==="or"&&(G="mdi:logic-or"),$.setAttribute("icon",G),j.appendChild($);let oe=document.createElement("span");oe.style.fontWeight="600",oe.style.fontSize="0.95rem",oe.style.textTransform="capitalize",oe.textContent=Le==="numeric_state"?"Entity numeric state":Le==="state"?"Entity state":Le==="screen"?"Screen":Le==="user"?"User":Le==="and"?"And":"Or",j.appendChild(oe),Ke.appendChild(j);let te=document.createElement("button");if(te.setAttribute("title","Remove condition"),te.innerHTML='<ha-icon icon="mdi:trash-can-outline"></ha-icon>',Object.assign(te.style,{border:"none",background:"transparent",cursor:"pointer",padding:"4px",display:"inline-flex",alignItems:"center"}),te.style.position="relative",te.style.zIndex="1000",te.addEventListener("click",X=>{X.preventDefault(),X.stopPropagation();let J=Ne.indexOf(W);J>-1&&Ne.splice(J,1),he(),we()}),Ke.appendChild(te),We.appendChild(Ke),Le!=="and"&&Le!=="or"){if(Je){let X=document.createElement("div");Object.assign(X.style,{display:"flex",flexDirection:"column",gap:"14px",alignItems:"stretch"});let J=(Y,N)=>{let q=document.createElement("div");q.style.display="flex",q.style.flexDirection="column",q.style.gap="4px";let B=document.createElement("span");B.textContent=Y,B.style.fontSize=".75rem",q.appendChild(B),q.appendChild(N),X.appendChild(q);let fe=(N.tagName||"").toLowerCase();(fe==="input"||fe==="select")&&Object.assign(N.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"})};if(W.condition==="state"){let Y=document.createElement("ha-entity-picker");Y.value=W.entity||"",Y.hass=this.hass,Y.setAttribute("label","Select entity"),Y.addEventListener("value-changed",B=>{W.entity=B.detail.value||"",he()}),customElements.get("ha-entity-picker")||customElements.whenDefined("ha-entity-picker").then(()=>{we()}).catch(()=>{}),J("Entity",Y);let N;if(customElements.get("ha-select")){N=document.createElement("ha-select");let B=document.createElement("mwc-list-item");B.setAttribute("value","state"),B.textContent="State is equal to";let fe=document.createElement("mwc-list-item");fe.setAttribute("value","state_not"),fe.textContent="State is not equal to",N.appendChild(B),N.appendChild(fe),N.value=W.state_not!=null?"state_not":"state",N.addEventListener("selected",Me=>{Me.stopPropagation();let je=W.state_not!=null?W.state_not:W.state;N.value==="state_not"?(W.state_not=je,delete W.state):(W.state=je,delete W.state_not),he()})}else N=document.createElement("select"),N.innerHTML='<option value="state">State is equal to</option><option value="state_not">State is not equal to</option>',N.value=W.state_not!=null?"state_not":"state",N.addEventListener("change",B=>{B.stopPropagation();let fe=W.state_not!=null?W.state_not:W.state;N.value==="state_not"?(W.state_not=fe,delete W.state):(W.state=fe,delete W.state_not),he()}),Object.assign(N.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"});J("Match type",N);let q;customElements.get("ha-textfield")?(q=document.createElement("ha-textfield"),q.value=(W.state_not!=null?W.state_not:W.state)||"",q.setAttribute("label",""),q.addEventListener("input",B=>{B.stopPropagation();let fe=N.value;W[fe]=q.value;let Me=fe==="state"?"state_not":"state";delete W[Me],he()})):(q=document.createElement("input"),q.value=(W.state_not!=null?W.state_not:W.state)||"",Object.assign(q.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),q.addEventListener("input",B=>{B.stopPropagation();let fe=N.value;W[fe]=q.value;let Me=fe==="state"?"state_not":"state";delete W[Me],he()})),J("State",q)}else if(W.condition==="numeric_state"){let Y=document.createElement("ha-entity-picker");Y.value=W.entity||"",Y.hass=this.hass,Y.setAttribute("label","Select entity"),Y.removeAttribute("hide-clear-icon"),Y.addEventListener("value-changed",B=>{W.entity=B.detail.value||"",he()}),customElements.get("ha-entity-picker")||customElements.whenDefined("ha-entity-picker").then(()=>{we()}).catch(()=>{}),J("Entity",Y);let N;customElements.get("ha-textfield")?(N=document.createElement("ha-textfield"),N.setAttribute("type","number"),N.value=W.above!=null?W.above:"",N.addEventListener("input",B=>{B.stopPropagation();let fe=N.value;fe===""||isNaN(Number(fe))?delete W.above:W.above=Number(fe),he()})):(N=document.createElement("input"),N.type="number",N.value=W.above!=null?W.above:"",Object.assign(N.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),N.addEventListener("input",()=>{let B=N.value;B===""||isNaN(Number(B))?delete W.above:W.above=Number(B),he()})),J("Above",N);let q;customElements.get("ha-textfield")?(q=document.createElement("ha-textfield"),q.setAttribute("type","number"),q.value=W.below!=null?W.below:"",q.addEventListener("input",B=>{B.stopPropagation();let fe=q.value;fe===""||isNaN(Number(fe))?delete W.below:W.below=Number(fe),he()})):(q=document.createElement("input"),q.type="number",q.value=W.below!=null?W.below:"",Object.assign(q.style,{padding:"8px 10px",borderRadius:"8px",background:"var(--ha-card-background, var(--card-background-color, var(--secondary-background-color)))",border:"1px solid var(--divider-color)",color:"var(--primary-text-color, inherit)",width:"100%",boxSizing:"border-box"}),q.addEventListener("input",()=>{let B=q.value;B===""||isNaN(Number(B))?delete W.below:W.below=Number(B),he()})),J("Below",q)}else if(W.condition==="screen"){let Y=[{label:"Mobile",query:"(max-width: 599px)"},{label:"Tablet (min: 768px)",query:"(min-width: 768px)"},{label:"Desktop (min: 1024px)",query:"(min-width: 1024px)"},{label:"Wide (min: 1280px)",query:"(min-width: 1280px)"}];Array.isArray(W.media_query_list)||(W.media_query_list=[]);let N=document.createElement("div");N.style.display="flex",N.style.flexDirection="column",N.style.gap="4px",Y.forEach(q=>{let B=document.createElement("label");B.style.display="flex",B.style.alignItems="center",B.style.gap="6px";let fe=document.createElement("input");fe.type="checkbox",fe.checked=W.media_query_list.includes(q.query),fe.addEventListener("change",()=>{fe.checked?W.media_query_list.push(q.query):W.media_query_list=W.media_query_list.filter(je=>je!==q.query),W.media_query=W.media_query_list.join(","),he()});let Me=document.createElement("span");Me.textContent=q.label,B.appendChild(fe),B.appendChild(Me),N.appendChild(B)}),J("Screen sizes",N)}else if(W.condition==="user"){let Y;if(customElements.get("ha-user-picker"))Y=document.createElement("ha-user-picker"),Y.hass=this.hass,Y.setAttribute("label","Select user"),Y.value=Array.isArray(W.users)?W.users:[],Y.addEventListener("value-changed",N=>{let q=N.detail.value;W.users=Array.isArray(q)?q:[q],he()});else{Y=document.createElement("div"),Y.style.display="flex",Y.style.flexDirection="column",Y.style.gap="4px";let N=document.createElement("span");N.style.opacity="0.7",N.style.fontSize=".85rem",N.textContent="Loading users\u2026",Y.appendChild(N);let q=Array.isArray(W.users)?W.users:[];_e().then(B=>{if(Y.innerHTML="",Array.isArray(B)&&B.length)B.forEach(fe=>{let Me=fe.id||fe.user_id||fe.uid||fe.name||"",je=fe.name||Me,pt=document.createElement("label");pt.style.display="flex",pt.style.alignItems="center",pt.style.gap="6px",pt.style.padding="4px 0";let ot=document.createElement("input");ot.type="checkbox",ot.checked=q.includes(Me)||q.includes(je),ot.addEventListener("change",()=>{let wt=Array.isArray(W.users)?W.users.slice():[];ot.checked?wt.includes(Me)||wt.push(Me):wt=wt.filter(Dt=>Dt!==Me&&Dt!==je),W.users=wt,he()});let it=document.createElement("span");it.textContent=je,pt.appendChild(ot),pt.appendChild(it),Y.appendChild(pt)});else{let fe=document.createElement("input");fe.value=Array.isArray(W.users)?W.users.join(","):"",Object.assign(fe.style,{padding:"6px 10px",borderRadius:"6px",border:"1px solid var(--divider-color)",background:"var(--card-background-color, var(--secondary-background-color))",color:"var(--primary-text-color, inherit)"});let Me=()=>{W.users=fe.value.split(",").map(je=>je.trim()).filter(Boolean),he()};fe.addEventListener("change",Me),fe.addEventListener("blur",Me),Y.appendChild(fe)}})}J("Users",Y)}We.appendChild(X)}}else if(Je){Array.isArray(W.conditions)||(W.conditions=[]);let X=document.createElement("div");X.style.marginLeft="16px",se(W.conditions,X),We.appendChild(X)}Ue.appendChild(We)};se(Z,re)};we()},rt=K=>{if(((K==null?void 0:K.type)||"")==="custom_card"){yt=JSON.stringify(K||{}),w.innerHTML='<div style="opacity:.6;font-size:.9rem;padding:8px">Preview not available for the custom card placeholder. Use the YAML editor.</div>',U.hidden=!0;return}let Z=JSON.stringify(K||{});Z!==yt&&(yt=Z,Ct&&clearTimeout(Ct),Ct=setTimeout(async()=>{let xe=++$e;U.hidden=!1,w.innerHTML="",await un();try{let _e=await this._helpersPromise||await window.loadCardHelpers();if(xe!==$e)return;let he=_e.createCardElement(K);if(he.hass=this.hass,xe!==$e)return;w.appendChild(he)}catch{}finally{xe===$e&&(U.hidden=!0)}},150))},dt=async K=>{var _e;let Z=++$e;E.hidden=!1,O.innerHTML="",await lc();let xe=K.type||Pe;if(nt=await this._getEditorElementForType(xe,K),xe==="custom_card"){let he=document.createElement("div");return he.style.opacity=".7",he.style.fontSize=".9rem",he.textContent="Custom card placeholder: use the YAML editor to paste the card type and options.",O.appendChild(he),Ee=null,at!=="yaml"&&ce("yaml"),ue(!0),E.hidden=!0,!1}if(!nt){let he=document.createElement("div");return he.style.opacity=".7",he.style.fontSize=".9rem",he.textContent="This card does not support a visual editor. Please use the YAML tab to configure it.",Z===$e&&(O.appendChild(he),E.hidden=!0),Ee=null,ue(!0),at!=="visual"&&ce("yaml"),!1}try{nt.hass=this.hass,nt.isConnected||O.appendChild(nt),await Promise.resolve();try{nt.setConfig(K)}catch{}try{let we=await this._helpersPromise||await window.loadCardHelpers(),F=we.getCardElementClass?await we.getCardElementClass(K.type||Pe):null;if(F!=null&&F.getStubConfig){let se=Object.keys(((_e=this.hass)==null?void 0:_e.states)||{}),ze=Ne=>se.filter(He=>He.startsWith(Ne+".")),W=await F.getStubConfig(this.hass,se,ze);W&&(K=this._shapeBySchema(K.type||Pe,{...W}))}}catch{}await Promise.resolve();try{nt.setConfig(K)}catch{}Ee&&this.__onEditorChange&&(Ee.removeEventListener("config-changed",this.__onEditorChange),Ee.removeEventListener("value-changed",this.__onEditorChange));let he=async we=>{var ze,W,Ne;let F=(Ne=(ze=we.detail)==null?void 0:ze.config)!=null?Ne:(W=we.detail)==null?void 0:W.value;if(!F)return;let se=F.type||Pe;Pe=se,le=this._shapeBySchema(se,F),H(""),ue(!0),St(Pe,le),rt(le),Ce==null||Ce.setValue(le)};return this.__onEditorChange=he,nt.addEventListener("config-changed",he),nt.addEventListener("value-changed",he),Ee=nt,at!=="yaml"&&ce("visual"),ue(!0),!0}finally{Z===$e&&(E.hidden=!0)}},Rt=async K=>{Ce=await this._mountYamlEditor(R,K,async Z=>{var xe,_e;try{let he=(Z==null?void 0:Z.type)||Pe,we=this._shapeBySchema(he,Z||{}),F=he!==Pe;if(Pe=he,le=we,C.hidden=!0,C.textContent="",ue(!0),F){if(St(Pe,le),Ee){try{(xe=Ee.setConfig)==null||xe.call(Ee,le)}catch{}at!=="yaml"&&ce("visual")}try{vt(le)}catch{}}else{try{(_e=Ee==null?void 0:Ee.setConfig)==null||_e.call(Ee,le)}catch{}rt(le);try{vt(le)}catch{}}}catch(he){C.hidden=!1,C.textContent=`Invalid config: ${String((he==null?void 0:he.message)||he)}`,ue(!1)}},Z=>{C.hidden=!1,C.textContent=`Invalid YAML: ${String((Z==null?void 0:Z.message)||Z)}`,ue(!1)})},zt=async K=>{if(this.__stubCache.has(K))return{...this.__stubCache.get(K)};let Z=await this._getStubConfigForType(K);return this.__stubCache.set(K,{...Z}),{...Z}},Tt=async K=>{C.hidden=!0,C.textContent="",H(""),Pe=K;try{typeof ft=="function"&&ft(K)}catch{}let Z=t==="edit"&&r&&r.type===K?{...r}:await zt(K);le=this._shapeBySchema(K,Z),Ee=null,St(K,le),await Rt(le),await un(),rt(le);try{vt(le)}catch{}try{let xe=await dt(le);ce(xe?"visual":"yaml")}catch{ce("yaml")}ue(!0)},ye=async()=>{if(!le)return;let K=this._shapeBySchema(Pe,le);t==="edit"&&typeof o=="function"?await o(K):(await this._addPickedCardToLayout(K),this._pushRecent((K||{}).type)),l()};g.addEventListener("click",l),b.addEventListener("click",l),f.addEventListener("click",ye),y.addEventListener("click",ye),s.addEventListener("keydown",K=>{K.key==="Escape"&&l(),K.key==="Enter"&&!f.disabled&&ye()});let Be=null;m.addEventListener("input",()=>{Be&&clearTimeout(Be),Be=setTimeout(Ge,120)}),Ge(),await Tt((()=>{var xe;return(((xe=this._getRecent)==null?void 0:xe.call(this))||[]).find(Boolean)||"entities"})()),ue(!0),t==="edit"&&r&&(await Tt(r.type||"entities"),ue(!0))}async _getStubConfigForType(t){var g;let r=await this._helpersPromise||await window.loadCardHelpers(),o=null;if(t==="custom_card")return null;try{r.getCardElementClass&&(o=await r.getCardElementClass(t))}catch{}let l=Object.keys(((g=this.hass)==null?void 0:g.states)||{}),s=b=>l.filter(m=>m.startsWith(b+".")),d={type:t};if(o!=null&&o.getStubConfig)try{let b=await o.getStubConfig(this.hass,l,s);if(t!=="entity")return b;b&&typeof b=="object"&&(d={...d,...b})}catch{}let f=l[0],y=s("sensor")[0]||f;if(["entity","sensor","button","gauge","tile","light","thermostat","media-control","alarm-panel","picture-entity","weather-forecast","map"].includes(t)){let b={sensor:y,gauge:s("sensor").find(this._isNumericEntity.bind(this))||y,"media-control":s("media_player")[0]||f,light:s("light")[0]||f,thermostat:s("climate")[0]||f,"alarm-panel":s("alarm_control_panel")[0]||f,"weather-forecast":s("weather")[0]||f,map:s("device_tracker")[0]||s("person")[0]||f}[t]||y||f;["entity","sensor","button","gauge","tile","light","thermostat","media-control","alarm-panel","picture-entity"].includes(t)?d.entity=b:t==="weather-forecast"?(d.entity=b,d.show_current=!0,d.show_forecast=!0,d.forecast_type="daily"):t==="map"&&(d.entities=[b].filter(Boolean),d.theme_mode="auto")}if(["entities","glance","picture-glance","history-graph","statistics-graph"].includes(t)){let b=m=>(m!=null&&m.length?l.filter(w=>m.includes(w.split(".")[0])):l).slice(0,3);t==="statistics-graph"?d.entities=b(["sensor","number","input_number"]):d.entities=b()}if(t==="markdown"&&(d.content="Markdown card"),t==="sensor"&&(d.graph="line"),t==="button"&&(d.show_name=!0,d.show_icon=!0),t==="tile"&&(d.features_position="bottom",d.vertical=!1),t==="picture-glance"&&(d.title=d.title||"Glance",d.image=d.image||"https://demo.home-assistant.io/stub_config/kitchen.png"),t==="picture-entity"&&(d.image=d.image||"https://demo.home-assistant.io/stub_config/bedroom.png"),t==="iframe"&&(d.url=d.url||"https://www.home-assistant.io",d.aspect_ratio=d.aspect_ratio||"50%"),t==="alarm-panel"&&(d.states=d.states||["arm_home","arm_away"]),t==="area")try{let b=this.hass&&this.hass.areas?Object.values(this.hass.areas):[];b.length?d.area=b[0].area_id||b[0].name||b[0].id:d.area=f?f.split(".")[0]:"default_area",d.display_type="picture",d.alert_classes=d.alert_classes||["moisture","motion"],d.sensor_classes=d.sensor_classes||["temperature","humidity"],d.features_position="bottom"}catch{}return d}_getNextAvailablePosition(){let t=Array.from(this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)")),r=new Set,o=this.gridSize;t.forEach(d=>{let f=parseFloat(d.getAttribute("data-x"))||0,y=parseFloat(d.getAttribute("data-y"))||0,g=parseFloat(getComputedStyle(d).width)||100,b=parseFloat(getComputedStyle(d).height)||100,m=Math.floor(f/o),w=Math.floor(y/o),O=Math.floor((f+g)/o),E=Math.floor((y+b)/o);for(let P=m;P<O;P++)for(let R=w;R<E;R++)r.add(`${P}-${R}`)});let l=0,s=0;for(;r.has(`${l}-${s}`);)l+=6,l>60&&(l=0,s+=6);return{x:l*o,y:s*o}}async _addPickedCardToLayout(t){this._hideEmptyPlaceholder();let r=await this._createCard(t),o=this._makeWrapper(r),l=this._getNextAvailablePosition();this._setCardPosition(o,l.x,l.y),o.style.width=`${14*this.gridSize}px`,o.style.height=`${10*this.gridSize}px`,o.style.zIndex=String(this._highestZ()+1),this.cardContainer.appendChild(o);try{this._rebuildOnce(o.firstElementChild)}catch{}this._initCardInteract(o),this._resizeContainer(),this._queueSave("add"),this._toast("Card added to layout."),this._syncEmptyStateUI();try{this._applyVisibility_()}catch{}}_toggleSelection(t,r=null){let o=r==null?!this._selection.has(t):!!r;o?this._selection.add(t):this._selection.delete(t),t.classList.toggle("selected",o)}_clearSelection(){for(let t of this._selection)t.classList.remove("selected");this._selection.clear()}_copySelection(){var t,r,o;try{let l=this._selection?Array.from(this._selection):[];if(!l.length){(t=this._toast)==null||t.call(this,"Nothing selected to copy.");return}let s=1/0,d=1/0,f=[];for(let y of l){if(y.dataset.placeholder)continue;let g=parseFloat(y.getAttribute("data-x"))||0,b=parseFloat(y.getAttribute("data-y"))||0;g<s&&(s=g),b<d&&(d=b)}for(let y of l){if(y.dataset.placeholder)continue;let g=this._extractCardConfig(y.firstElementChild)||{},b=parseFloat(y.getAttribute("data-x"))||0,m=parseFloat(y.getAttribute("data-y"))||0,w=y.style.width||`${y.getBoundingClientRect().width}px`,O=y.style.height||`${y.getBoundingClientRect().height}px`;f.push({cfg:g,dx:b-s,dy:m-d,width:w,height:O})}window.__DDC_CLIPBOARD__={items:f},(r=this._toast)==null||r.call(this,`Copied ${f.length} card${f.length===1?"":"s"}.`)}catch(l){console.warn("[drag-and-drop-card] Copy failed",l),(o=this._toast)==null||o.call(this,"Copy failed.")}}async _pasteClipboard(){var t,r,o,l;try{let s=window.__DDC_CLIPBOARD__;if(!s||!Array.isArray(s.items)||!s.items.length){(t=this._toast)==null||t.call(this,"Clipboard is empty.");return}let d=s.items,f=1,y;do{let m=this.gridSize*f,w=this.gridSize*f;y=d.map(O=>{let E=parseFloat(O.width)||0,P=parseFloat(O.height)||0;return{x:m+(O.dx||0),y:w+(O.dy||0),w:E,h:P}}),f+=1}while(this._anyCollisionFor(y,new Set));let g=this.gridSize*(f-1),b=this.gridSize*(f-1);for(let m of d){let w=m.cfg||{},O=await this._createCard(w),E=this._makeWrapper(O);E.style.width=m.width,E.style.height=m.height;let P=g+(m.dx||0),R=b+(m.dy||0);this._setCardPosition(E,P,R),E.style.zIndex=String(this._highestZ()+1);try{let C=this._normalizeTabId(this.activeTab||this.defaultTab);C&&(E.dataset.tabId=C)}catch{}this.cardContainer.appendChild(E);try{this._rebuildOnce(E.firstElementChild)}catch{}this._initCardInteract(E)}this._resizeContainer(),this._applyActiveTab(),(r=this._queueSave)==null||r.call(this,"paste"),(o=this._toast)==null||o.call(this,`Pasted ${d.length} card${d.length===1?"":"s"}.`)}catch(s){console.warn("[drag-and-drop-card] Paste failed",s),(l=this._toast)==null||l.call(this,"Paste failed.")}}_installSelectionMarquee(){let t=this.cardContainer,r=0,o=0,l=null,s=!1,d=m=>{let w=t.getBoundingClientRect(),O="touches"in m&&m.touches[0]?m.touches[0].clientX:m.clientX,E="touches"in m&&m.touches[0]?m.touches[0].clientY:m.clientY;return{x:O-w.left,y:E-w.top}},f=(m,w)=>{let O=Math.min(m,r),E=Math.max(m,r),P=Math.min(w,o),R=Math.max(w,o);l.style.left=`${O}px`,l.style.top=`${P}px`,l.style.width=`${E-O}px`,l.style.height=`${R-P}px`;let C=l.getBoundingClientRect(),A=t.querySelectorAll(".card-wrapper:not(.ddc-placeholder)");this._clearSelection(),A.forEach(L=>{let x=L.getBoundingClientRect();!(x.right<C.left||x.left>C.right||x.bottom<C.top||x.top>C.bottom)&&this._toggleSelection(L,!0)})},y=m=>{if(!this.editMode||m.target.closest(".card-wrapper"))return;s=!0;let w=d(m);r=w.x,o=w.y,l=document.createElement("div"),l.className="marquee",l.style.left=`${r}px`,l.style.top=`${o}px`,t.appendChild(l),m.preventDefault()},g=m=>{!s||!l||f(d(m).x,d(m).y)},b=()=>{s&&(s=!1,l&&l.remove(),l=null)};t.addEventListener("mousedown",y),window.addEventListener("mousemove",g),window.addEventListener("mouseup",b),t.addEventListener("touchstart",m=>{this.editMode&&(m.target.closest(".card-wrapper")||y(m))},{passive:!1}),window.addEventListener("touchmove",m=>{g(m)},{passive:!1}),window.addEventListener("touchend",b),window.addEventListener("touchcancel",b)}async _openDiagnostics(){var f,y;let t=document.createElement("div");t.className="modal";let r=this.storageKey||"(none)",o=this._backendOK&&!!this.storageKey,l=g=>g.slice(-200).map(b=>`<div style="font-family:monospace;font-size:.85rem;line-height:1.3">
        <span style="opacity:.6">${b.t}</span>
        <b style="margin-left:6px;color:#03a9f4">[${b.kind}]</b>
        <span style="margin-left:6px">${this._safe(b.msg)}</span>
        ${b.extra?`<pre style="margin:4px 0 0 0;white-space:pre-wrap;background:var(--card-background-color);border:1px solid var(--divider-color);border-radius:8px;padding:6px;max-height:160px;overflow:auto">${this._safe(JSON.stringify(b.extra,null,2))}</pre>`:""}
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
                <div>Storage key (raw \u2192 slug)</div><div><code>${this._safe(((f=this._config)==null?void 0:f.storage_key)||"")}</code> \u2192 <code>${this._safe(r)}</code></div>
                <div>Backend reachable</div><div><b>${this._backendOK?"YES":"NO"}</b></div>
                <div>Persist target</div><div><b>${o?"Host (backend)":"Browser (localStorage)"}</b></div>
                <div>Auto-save</div><div>${this.autoSave?`ON (${this.autoSaveDebounce} ms)`:"OFF"}</div>
                <div>Cards mounted</div><div>${((y=this.cardContainer)==null?void 0:y.querySelectorAll(".card-wrapper:not(.ddc-placeholder)").length)||0}</div>
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
      </div>`;let s=()=>t.remove();t.querySelector("#closeDiag").addEventListener("click",s),this.shadowRoot.appendChild(t);let d=()=>{let g=t.querySelector("#logArea"),b=m=>m.slice(-200).map(w=>`<div style="font-family:monospace;font-size:.85rem;line-height:1.3">
          <span style="opacity:.6">${w.t}</span>
          <b style="margin-left:6px;color:#03a9f4">[${w.kind}]</b>
          <span style="margin-left:6px">${this._safe(w.msg)}</span>
          ${w.extra?`<pre style="margin:4px 0 0 0;white-space:pre-wrap;background:var(--card-background-color);border:1px solid var(--divider-color);border-radius:8px;padding:6px;max-height:160px;overflow:auto">${this._safe(JSON.stringify(w.extra,null,2))}</pre>`:""}
        </div>`).join("");g.innerHTML=b(this._dbgDump()),g.scrollTop=g.scrollHeight};t.querySelector("#refreshKeys").addEventListener("click",async()=>{try{this._dbgPush("probe","Manual refresh"),await this._probeBackend()}finally{d()}}),t.querySelector("#forceSave").addEventListener("click",async()=>{await this._saveLayout(!1),d()}),t.querySelector("#exportJson").addEventListener("click",()=>{let b=Array.from(this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)")).map(E=>{let P=parseFloat(E.getAttribute("data-x"))||0,R=parseFloat(E.getAttribute("data-y"))||0,C=parseFloat(E.style.width)||E.getBoundingClientRect().width,A=parseFloat(E.style.height)||E.getBoundingClientRect().height,L=parseInt(E.style.zIndex||"1",10),x=this._extractCardConfig(E.firstElementChild),M=E.dataset.tabId||this.defaultTab;return{card:x,position:{x:P,y:R},size:{width:C,height:A},z:L,tabId:M}}),m={version:2,options:this._exportableOptions(),cards:b},w=new Blob([JSON.stringify(m,null,2)],{type:"application/json"}),O=document.createElement("a");O.href=URL.createObjectURL(w),O.download=`ddc_${this.storageKey||"layout"}.json`,O.click(),URL.revokeObjectURL(O.href)}),t.querySelector("#importJson").addEventListener("click",async()=>{let g=document.createElement("input");g.type="file",g.accept="application/json",g.onchange=async()=>{var O,E,P,R,C,A,L,x,M,I,re,ie,U;let b=(O=g.files)==null?void 0:O[0];if(!b)return;let m=await b.text();try{let ue=JSON.parse(m);if(this._dbgPush("import","Loaded file",{bytes:m.length}),this.cardContainer.innerHTML="",(E=ue.cards)!=null&&E.length)for(let H of ue.cards)if(!(H!=null&&H.card)||typeof H.card=="object"&&Object.keys(H.card).length===0){let V=this._makePlaceholderAt(((P=H.position)==null?void 0:P.x)||0,((R=H.position)==null?void 0:R.y)||0,((C=H.size)==null?void 0:C.width)||200,((A=H.size)==null?void 0:A.height)||200);this.cardContainer.appendChild(V)}else{let V=await this._createCard(H.card),de=this._makeWrapper(V);this._setCardPosition(de,((L=H.position)==null?void 0:L.x)||0,((x=H.position)==null?void 0:x.y)||0),de.dataset.tabId=this._normalizeTabId(H.tabId||H.tab_id||this.defaultTab),this._setCardPosition(de,((M=H.position)==null?void 0:M.x)||0,((I=H.position)==null?void 0:I.y)||0),de.style.width=`${((re=H.size)==null?void 0:re.width)||140}px`,de.style.height=`${((ie=H.size)==null?void 0:ie.height)||100}px`,this.cardContainer.appendChild(de);try{this._rebuildOnce(de.firstElementChild)}catch{}this._initCardInteract(de)}else this._showEmptyPlaceholder(),(U=this._applyAutoScale)==null||U.call(this);this._resizeContainer(),await this._saveLayout(!1)}catch(ue){this._dbgPush("import","Parse failed",{error:String(ue)})}let w=new Event("ddc-logrefresh");window.dispatchEvent(w)},g.click()}),t.querySelector("#testRoundtrip").addEventListener("click",async()=>{if(!this._backendOK)return this._dbgPush("test","Backend not reachable, aborting"),d();let g=(this.storageKey||"ddc_test")+"_selftest",b={t:Date.now(),msg:"roundtrip"};try{await this._saveLayoutToBackend(g,b);let m=await this._loadLayoutFromBackend(g);this._dbgPush("test","Round-trip result",{wrote:b,read:m})}catch(m){this._dbgPush("test","Round-trip failed",{error:String(m)})}d()}),d()}_openDashboardSettings(){var Be,Xe,K,Z,xe,_e,he,we,F,se,ze,W,Ne,He,Ue,Le,Je,We,Ke;let t=document.createElement("div");t.className="modal",this._ensureSettingsStyles_(),t.innerHTML=`
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

        <!-- BACKGROUND MODE -->
      <div class="setting">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:layers-triple"></ha-icon>
            <label for="ddc-bg-mode">Background type</label>
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

      <!-- BACKGROUND IMAGE -->
      <div class="setting" data-bg-section="image">
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

      <!-- BACKGROUND: PARTICLES -->
      <div class="setting" data-bg-section="particles" style="display:none">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:blur"></ha-icon>
            <label>Particles.js</label>
          </div>
          <div class="control" style="flex-direction:column; align-items:flex-start; gap:8px;">
            <label for="ddc-particles-url">Config JSON URL (optional)</label>
            <input type="text" id="ddc-particles-url" placeholder="/local/particles.json or https://\u2026">
            <div class="hint">If empty, a sensible default is used. For HACS, prefer hosting the library + JSON under <code>/config/www</code> (served as <code>/local/\u2026</code>).</div>

            <label style="display:flex;align-items:center;gap:8px;">
              <ha-switch id="ddc-particles-pointer"></ha-switch>
              Enable pointer interactivity (hover/click)
            </label>
            <div class="hint">Leave off if you want guaranteed unobstructed dragging.</div>
          </div>
        </div>
      </div>

      <!-- BACKGROUND: YOUTUBE -->
      <div class="setting" data-bg-section="youtube" style="display:none">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:youtube"></ha-icon>
            <label>YouTube background</label>
          </div>
          <div class="control" style="flex-direction:column; align-items:flex-start; gap:8px;">
            <label for="ddc-youtube-url">YouTube URL or video ID</label>
            <input type="text" id="ddc-youtube-url" placeholder="https://youtu.be/\u2026 or dQw4w9WgXcQ">

            <div style="display:flex; gap:12px; width:100%; max-width:420px;">
              <label style="flex:1;">
                <span>Start (s)</span>
                <input type="number" id="ddc-youtube-start" min="0" step="1" style="width:100%">
              </label>
              <label style="flex:1;">
                <span>End (s)</span>
                <input type="number" id="ddc-youtube-end" min="1" step="1" style="width:100%">
              </label>
            </div>

            <div style="display:flex; gap:18px; align-items:center;">
              <label style="display:flex;align-items:center;gap:8px;">
                <ha-switch id="ddc-youtube-mute" checked></ha-switch> Mute
              </label>
              <label style="display:flex;align-items:center;gap:8px;">
                <ha-switch id="ddc-youtube-loop" checked></ha-switch> Loop
              </label>
            </div>

            <div class="hint">Video plays muted, fills the canvas (\u201Ccover\u201D), sits under the grid and cards, and ignores pointer events so dragging remains smooth.</div>
          </div>
        </div>
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
`;let r=this.shadowRoot.querySelector(".modal");if(r){try{r.remove()}catch{}this.__settingsModal===r&&(this.__settingsModal=null)}if(this.__settingsModal){try{this.__settingsModal.remove()}catch{}this.__settingsModal=null}this.__settingsModal=t,this.shadowRoot.appendChild(t);let o=t.querySelector("#ddc-setting-autoResize"),l=t.querySelector("#ddc-setting-gridSize"),s=t.querySelector("#ddc-setting-animate"),d=t.querySelector("#ddc-setting-hideHdr"),f=t.querySelector("#ddc-setting-hideSbar"),y=t.querySelector("#ddc-setting-dragSnap"),g=t.querySelector("#ddc-setting-autoSave"),b=t.querySelector("#ddc-setting-autoSaveDebounce"),m=t.querySelector("#ddc-setting-sizeMode"),w=t.querySelector("#ddc-setting-orient"),O=t.querySelector("#ddc-setting-disableOverlap"),E=t.querySelector("#ddc-setting-editPin"),P=t.querySelector("#ddc-setting-containerBg"),R=t.querySelector("#ddc-setting-cardBg"),C=t.querySelector("#ddc-setting-bgImg"),A=t.querySelector("#ddc-bg-repeat"),L=t.querySelector("#ddc-bg-size"),x=t.querySelector("#ddc-bg-position"),M=t.querySelector("#ddc-bg-attachment"),I=t.querySelector("#ddc-bg-opacity"),re=t.querySelector("#ddc-bg-opacity-out"),ie=t.querySelector("#ddc-setting-debug"),U=t.querySelector("#ddc-bg-mode"),ue=t.querySelector('[data-bg-section="image"]'),H=t.querySelector('[data-bg-section="particles"]'),V=t.querySelector('[data-bg-section="youtube"]'),de=t.querySelector("#ddc-particles-url"),me=t.querySelector("#ddc-particles-pointer"),Ye=t.querySelector("#ddc-youtube-url"),Fe=t.querySelector("#ddc-youtube-start"),Re=t.querySelector("#ddc-youtube-end"),qe=t.querySelector("#ddc-youtube-mute"),Se=t.querySelector("#ddc-youtube-loop"),Qe=((Be=this._config)==null?void 0:Be.background_image)||{},et=((Xe=this._config)==null?void 0:Xe.background_mode)||((Z=(K=this._config)==null?void 0:K.background_image)!=null&&Z.src?"image":"none");U&&(U.value=String(et));let Ve=((xe=this._config)==null?void 0:xe.background_particles)||{};de&&(de.value=Ve.config_url||""),me&&(me.checked=!!Ve.pointer_events);let tt=((_e=this._config)==null?void 0:_e.background_youtube)||{},ft=tt.url||tt.video_id||"";Ye&&(Ye.value=ft),Fe&&(Fe.value=(he=tt.start)!=null?he:""),Re&&(Re.value=(we=tt.end)!=null?we:""),qe&&(qe.checked=tt.mute!==!1),Se&&(Se.checked=tt.loop!==!1);let at=()=>{let j=(U==null?void 0:U.value)||"none";ue&&(ue.style.display=j==="image"?"":"none"),H&&(H.style.display=j==="particles"?"":"none"),V&&(V.style.display=j==="youtube"?"":"none")};if(U==null||U.addEventListener("change",at),at(),o&&(o.checked=!!this.autoResizeCards),l&&(l.value=String(this.gridSize||100)),s&&(s.checked=!!this.animateCards),d&&(d.checked=!!this.hideHaHeader),f&&(f.checked=!!this.hideHaSidebar),y&&(y.checked=!!this.dragLiveSnap),g&&(g.checked=!!this.autoSave),b&&(b.value=String((F=this.autoSaveDebounce)!=null?F:800)),m&&(m.value=String(this.containerSizeMode||"dynamic")),w&&(w.value=String(this.containerPresetOrient||"auto")),O&&(O.checked=!!this.disableOverlap),P&&(P.value=String(this.containerBackground||"")),R&&(R.value=String(this.cardBackground||"")),C){let j=((W=(se=this._config)==null?void 0:se.background_image)!=null?W:(ze=this._config)==null?void 0:ze.bg_image)||{};C.value=j.src?String(j.src):""}if(ie&&(ie.checked=!!this.debug),A&&(A.value=String(Qe.repeat||"no-repeat")),L&&(L.value=String(Qe.size||"cover")),x&&(x.value=String(Qe.position||"center center")),M&&(M.value=String(Qe.attachment||"scroll")),I){let j=Math.round((Qe.opacity!=null?Qe.opacity:1)*100);I.value=String(j),re&&(re.textContent=`${j}%`),I.addEventListener("input",()=>{let ae=Math.max(0,Math.min(100,parseInt(I.value||"100",10)));re.textContent=`${ae}%`,this.style.setProperty("--ddc-bg-opacity",String(ae/100))})}try{if(E){let j=this.config&&this.config.edit_mode_pin!=null?String(this.config.edit_mode_pin):"",ae=this.editModePin!=null?String(this.editModePin):"";E.value=ae||j||"",E.disabled=!1,E.readOnly=!1}}catch{}let ce=t.querySelector("#ddc-setting-gridSize"),gt=t.querySelector("#ddc-grid-out"),Ge=t.querySelector("#ddc-grid-demo"),Oe=t.querySelector("#ddc-grid-meta"),le=()=>{if(!Ge||!Oe)return;let j=Ge.getBoundingClientRect(),ae=Math.max(1,parseInt(ce.value||"100",10)),$=Math.max(1,Math.floor(j.width/ae)),G=Math.max(1,Math.floor(j.height/ae));Oe.innerHTML=`
        <ha-icon icon="mdi:grid"></ha-icon>
        <span>${ae}px \xB7 ${$}\xD7${G}</span>
      `},Pe=()=>{let j=Math.max(1,parseInt(ce.value||"100",10));gt&&(gt.textContent=`${j} px`),Ge&&Ge.style.setProperty("--g",`${j}px`),le()};if(ce&&(ce.value||(ce.value=String(this.gridSize||100)),ce.addEventListener("input",Pe),Pe()),Ge){let j=new ResizeObserver(()=>le());j.observe(Ge),(He=(Ne=this.__ddcGridRO)==null?void 0:Ne.disconnect)==null||He.call(Ne),this.__ddcGridRO=j}t.querySelectorAll(".chip").forEach(j=>{j.addEventListener("click",()=>{var oe,te;t.querySelectorAll(".chip").forEach(X=>X.setAttribute("aria-pressed","false")),j.setAttribute("aria-pressed","true");let ae=parseInt(j.dataset.w,10),$=parseInt(j.dataset.h,10),G=t.querySelector("#ddc-setting-sizeMode");G.value="fixed_custom",(te=(oe=typeof m!="undefined"&&m)==null?void 0:oe.dispatchEvent)==null||te.call(oe,new Event("change")),setTimeout(()=>{var Y,N,q;(Y=t.querySelector("#ddc-setting-custW"))==null||Y.setAttribute("value",String(ae)),(q=(N=t.querySelector("#ddc-setting-custW"))==null?void 0:N.dispatchEvent)==null||q.call(N,new Event("change"));let X=t.querySelector("#ddc-setting-custW");X&&(X.value=String(ae));let J=t.querySelector("#ddc-setting-custH");J&&(J.value=String($))},0)})});let Ce=["#ffffff","#f5f7fa","#ebeff5","#121212","#1f2937","#334155","var(--card-background-color)","var(--ha-card-background)","transparent"],Ee=(j,ae,$)=>{let G=t.querySelector(j),oe=t.querySelector(ae),te=t.querySelector($);!G||!oe||(G.innerHTML="",Ce.forEach((X,J)=>{let Y=document.createElement("button");Y.type="button",Y.className="swatch",Y.title=X,Y.style.background=X.startsWith("var(")?getComputedStyle(this).getPropertyValue(X.slice(4,-1)).trim()||"#fff":X,Y.setAttribute("aria-pressed","false"),Y.addEventListener("click",()=>{G.querySelectorAll(".swatch").forEach(N=>N.setAttribute("aria-pressed","false")),Y.setAttribute("aria-pressed","true"),oe.value=X,/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(X)&&te&&(te.value=X)}),G.appendChild(Y),String(oe.value).trim()===X&&Y.setAttribute("aria-pressed","true")}))};Ee("#ddc-swatches-containerBg","#ddc-setting-containerBg","#ddc-color-containerBg"),Ee("#ddc-swatches-cardBg","#ddc-setting-cardBg","#ddc-color-cardBg"),[["#ddc-color-containerBg","#ddc-setting-containerBg"],["#ddc-color-cardBg","#ddc-setting-cardBg"]].forEach(([j,ae])=>{let $=t.querySelector(j),G=t.querySelector(ae);if(!$||!G)return;let oe=(String(G.value||"").match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)||[])[0];oe&&($.value=oe),$.addEventListener("input",()=>{G.value=$.value}),G.addEventListener("change",()=>{let te=(String(G.value||"").match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)||[])[0];te&&($.value=te)})});let nt=t.querySelector("#ddc-file-bg"),$e=t.querySelector("#ddc-setting-bgImg"),Ct=t.querySelector("#ddc-bg-thumb"),yt=j=>{Ct&&(Ct.style.backgroundImage=j?`url(${j})`:"none")};$e!=null&&$e.value&&yt($e.value),nt==null||nt.addEventListener("change",async()=>{var $;let j=($=nt.files)==null?void 0:$[0];if(!j)return;let ae=new FileReader;ae.onload=()=>{$e.value=String(ae.result||""),yt($e.value),this.style.setProperty("--ddc-bg-image",`url("${$e.value}")`)},ae.readAsDataURL(j)}),(Ue=t.querySelector("#ddc-clear-bg"))==null||Ue.addEventListener("click",()=>{var $,G;$e&&($e.value=""),yt("");let{background_image:j,...ae}=this._config||{};this._config=ae,this.style.setProperty("--ddc-bg-image","none"),($=this._applyBackgroundFromConfig)==null||$.call(this),(G=this._persistThisCardConfigToStorage_)==null||G.call(this)}),t.addEventListener("click",j=>{j.target===t&&(j.stopPropagation(),ye())});let St=j=>{j.key==="Escape"&&(j.stopPropagation(),ye())};document.addEventListener("keydown",St,{once:!0}),setTimeout(()=>{var j;return(j=t.querySelector("#ddc-setting-gridSize"))==null?void 0:j.focus()},0);try{let j=t.querySelector("#ddc-setting-sizeExtras"),ae=()=>{var G,oe;if(!j)return;j.innerHTML="";let $=(m==null?void 0:m.value)||"dynamic";if($==="fixed_custom"){let te=document.createElement("label");te.style.display="flex",te.style.flexDirection="column",te.style.fontSize=".95rem",te.style.marginBottom="10px";let X=document.createElement("span");X.textContent="Custom width (px)",X.style.marginBottom="4px";let J=document.createElement("input");J.type="number",J.id="ddc-setting-custW",J.min="100",J.max="10000",J.step="10",J.style.padding="6px",J.style.border="1px solid var(--divider-color,rgba(0,0,0,.3))",J.style.borderRadius="6px",J.value=String((G=this.containerFixedWidth)!=null?G:800),te.appendChild(X),te.appendChild(J);let Y=document.createElement("label");Y.style.display="flex",Y.style.flexDirection="column",Y.style.fontSize=".95rem",Y.style.marginBottom="10px";let N=document.createElement("span");N.textContent="Custom height (px)",N.style.marginBottom="4px";let q=document.createElement("input");q.type="number",q.id="ddc-setting-custH",q.min="100",q.max="10000",q.step="10",q.style.padding="6px",q.style.border="1px solid var(--divider-color,rgba(0,0,0,.3))",q.style.borderRadius="6px",q.value=String((oe=this.containerFixedHeight)!=null?oe:600),Y.appendChild(N),Y.appendChild(q),j.appendChild(te),j.appendChild(Y)}else if($==="preset"){let te=document.createElement("label");te.style.display="flex",te.style.flexDirection="column",te.style.fontSize=".95rem",te.style.marginBottom="10px";let X=document.createElement("span");X.textContent="Preset size",X.style.marginBottom="4px";let J=document.createElement("select");J.id="ddc-setting-preset",J.style.padding="6px",J.style.border="1px solid var(--divider-color,rgba(0,0,0,.3))",J.style.borderRadius="6px",(typeof e!="undefined"&&e._sizePresets?e._sizePresets():[]).forEach(N=>{let q=document.createElement("option");q.value=N.key,q.textContent=`${N.label||N.key} (${N.w}\xD7${N.h})`,J.appendChild(q)}),J.value=String(this.containerPreset||"fhd"),te.appendChild(X),te.appendChild(J),j.appendChild(te)}};ae(),m==null||m.addEventListener("change",ae)}catch(j){console.warn("[drag-and-drop-card] Failed to build container size extras",j)}let De=()=>{var ae,$,G,oe,te;return((te=(oe=($=(ae=this._config)==null?void 0:ae.options)==null?void 0:$.tabs)!=null?oe:(G=this._config)==null?void 0:G.tabs)!=null?te:[]).map(X=>{var J,Y,N,q,B,fe,Me;return typeof X=="string"?{id:X,label:X,icon:"",label_mode:"both",__raw:{id:X,label:X}}:{id:(N=(Y=(J=X.id)!=null?J:X.key)!=null?Y:X.label)!=null?N:"tab",label:(B=(q=X.label)!=null?q:X.id)!=null?B:"Tab",icon:(fe=X.icon)!=null?fe:"",label_mode:(Me=X.label_mode)!=null?Me:"both",__raw:X}})},At=async(j,ae)=>{var G,oe,te;let $=j.map(X=>({...X.__raw,id:X.id,label:X.label,icon:X.icon||"",label_mode:X.label_mode||"both"}));(G=this._config)!=null&&G.options?this._config.options={...this._config.options||{},tabs:$,default_tab:ae!=null?ae:(oe=this._config.options)==null?void 0:oe.default_tab}:(this._config.tabs=$,ae&&(this._config.default_tab=ae));try{await this._persistThisCardConfigToStorage_()}catch(X){console.warn("[drag-and-drop-card] Could not persist tabs",X)}(te=this.requestUpdate)==null||te.call(this)},vt=()=>{var j,ae,$,G;return((ae=(j=this._config)==null?void 0:j.options)==null?void 0:ae.default_tab)||(($=this._config)==null?void 0:$.default_tab)||((G=De()[0])==null?void 0:G.id)},rt=t.querySelector("#ddc-tabs-list"),dt=()=>{let j=De(),ae=vt();if(rt.innerHTML="",!j.length){let $=document.createElement("div");$.className="hint",$.textContent="No tabs yet. Add one below.",rt.appendChild($);return}j.forEach(($,G)=>{let oe=document.createElement("div");oe.className="tab-row";let te=document.createElement("input");te.type="radio",te.name="ddc-default-tab",te.value=$.id,te.checked=$.id===ae,te.title="Set as default tab",te.addEventListener("change",async()=>{await At(j,$.id)});let X=document.createElement("div");X.className="tab-name";let J=document.createElement("ha-icon");J.setAttribute("icon",$.icon||"mdi:tab");let Y=document.createElement("input");Y.value=$.icon||"",Y.placeholder="mdi:home",Y.title="Tab icon (mdi:...)",Y.style.width="160px",Y.addEventListener("change",async()=>{$.icon=Y.value.trim(),J.setAttribute("icon",$.icon||"mdi:tab"),j[G]=$,await At(j,ae)});let N=document.createElement("input");N.value=$.label,N.placeholder="Tab name",N.style.flex="1",N.addEventListener("change",async()=>{$.label=N.value.trim()||$.id,j[G]=$,await At(j,ae)});let q=document.createElement("div");q.className="tab-icon-wrap",q.appendChild(J),q.appendChild(Y),X.appendChild(q),X.appendChild(N);let B=document.createElement("div");B.className="mode-chips";let fe=(pt,ot)=>{let it=document.createElement("button");return it.type="button",it.className="chip",it.textContent=ot,it.setAttribute("aria-pressed",String(($.label_mode||"both")===pt)),it.addEventListener("click",async()=>{B.querySelectorAll(".chip").forEach(wt=>wt.setAttribute("aria-pressed","false")),it.setAttribute("aria-pressed","true"),$.label_mode=pt,j[G]=$,await At(j,ae)}),it};B.appendChild(fe("icon","Icon")),B.appendChild(fe("text","Text")),B.appendChild(fe("both","Both"));let Me=document.createElement("div");Me.className="tab-actions";let je=document.createElement("button");je.className="icon-btn danger",je.innerHTML='<ha-icon icon="mdi:trash-can-outline"></ha-icon>',je.title="Delete tab",je.addEventListener("click",async()=>{var it,wt;let pt=De().filter(Dt=>Dt.id!==$.id),ot=ae;$.id===ae&&(ot=(it=pt[0])==null?void 0:it.id),await At(pt,ot);try{(wt=this._reassignCardsToTab_)==null||wt.call(this,$.id,ot)}catch{}dt()}),Me.appendChild(B),Me.appendChild(je),oe.appendChild(te),oe.appendChild(X),oe.appendChild(Me),rt.appendChild(oe)})};dt(),(Le=t.querySelector("#ddc-add-tab-btn"))==null||Le.addEventListener("click",async()=>{let j=t.querySelector("#ddc-new-tab-name"),ae=((j==null?void 0:j.value)||"").trim();if(!ae)return;let $=De(),G=ae.replace(/\s+/g,"-").toLowerCase(),oe=2;for(;$.some(te=>te.id===G);)G=`${G}-${oe++}`;$.push({id:G,label:ae,icon:"",label_mode:"both",__raw:{id:G,label:ae}}),await At($,vt()),j.value="",dt()});let Rt=t.querySelector("#ddc-clear-bg");Rt&&Rt.addEventListener("click",()=>{var $,G,oe;let j=t.querySelector("#ddc-setting-bgImg"),ae=t.querySelector("#ddc-bg-thumb");j&&(j.value=""),ae&&(ae.style.backgroundImage="none");try{if(($=this._config)!=null&&$.background_image){let{background_image:te,...X}=this._config;this._config=X}(G=this._applyBackgroundImageFromConfig)==null||G.call(this),(oe=this._persistThisCardConfigToStorage_)==null||oe.call(this)}catch(te){console.warn("[drag-and-drop-card] Failed to clear background image",te)}});let zt=["linear-gradient(135deg, #1e3a8a, #0ea5e9)","linear-gradient(135deg, #111827, #1f2937)","linear-gradient(135deg, #0f766e, #22c55e)","linear-gradient(135deg, #7c3aed, #06b6d4)","linear-gradient(135deg, #f97316, #f43f5e)","linear-gradient(135deg, #eab308, #22d3ee)","radial-gradient(circle at 30% 20%, #2dd4bf, #1e293b)","radial-gradient(circle at 70% 80%, #f59e0b, #7c3aed)"],Tt=(j,ae)=>{let $=t.querySelector(j),G=t.querySelector(ae);!$||!G||($.innerHTML="",zt.forEach(oe=>{let te=document.createElement("button");te.type="button",te.className="gradient",te.style.background=oe,te.setAttribute("aria-pressed","false"),te.title=oe,te.addEventListener("click",()=>{$.querySelectorAll(".gradient").forEach(X=>X.setAttribute("aria-pressed","false")),te.setAttribute("aria-pressed","true"),G.value=oe;try{this.containerBackground=oe,this.style.setProperty("--ddc-bg",oe)}catch{}}),$.appendChild(te),String(G.value).trim()===oe&&te.setAttribute("aria-pressed","true")}))};Tt("#ddc-gradients-containerBg","#ddc-setting-containerBg"),Tt("#ddc-gradients-cardBg","#ddc-setting-cardBg");let ye=()=>{var j,ae;try{(ae=(j=this.__ddcGridRO)==null?void 0:j.disconnect)==null||ae.call(j),this.__ddcGridRO=null}catch{}try{t.remove()}catch{}this.__settingsModal===t&&(this.__settingsModal=null)};(Je=t.querySelector("#ddc-settings-close"))==null||Je.addEventListener("click",j=>{j.stopPropagation(),ye()}),(We=t.querySelector("#ddc-settings-cancel"))==null||We.addEventListener("click",j=>{j.stopPropagation(),ye()}),(Ke=t.querySelector("#ddc-settings-save"))==null||Ke.addEventListener("click",j=>{var Yt,ci,Xt,li,_i,Jt,wi,Qt,ki,Si,Ei,Ci,Ai;j.stopPropagation();let ae=!!(o!=null&&o.checked),$=parseInt((l==null?void 0:l.value)||"0",10),G=!!(s!=null&&s.checked),oe=!!(d!=null&&d.checked),te=!!(f!=null&&f.checked),X=!!(y!=null&&y.checked),J=!!(g!=null&&g.checked),Y=parseInt((b==null?void 0:b.value)||"0",10),N=(m==null?void 0:m.value)||"dynamic",q=(w==null?void 0:w.value)||"auto",B=!!(O!=null&&O.checked),fe=((P==null?void 0:P.value)||"").trim(),Me=((R==null?void 0:R.value)||"").trim(),je=((C==null?void 0:C.value)||"").trim(),pt=!!(ie!=null&&ie.checked),ot=((E==null?void 0:E.value)||"").trim(),it=(U==null?void 0:U.value)||"none",wt=((de==null?void 0:de.value)||"").trim(),Dt=!!(me!=null&&me.checked),Hi=((Ye==null?void 0:Ye.value)||"").trim(),ai=parseInt((Fe==null?void 0:Fe.value)||"",10),xi=parseInt((Re==null?void 0:Re.value)||"",10),oi=!!(qe!=null&&qe.checked),si=!!(Se!=null&&Se.checked);try{this.autoResizeCards=ae,this.autoResizeCards?(Yt=this._startScaleWatch)==null||Yt.call(this):(ci=this._stopScaleWatch)==null||ci.call(this),!isNaN($)&&$>0&&$!==this.gridSize&&(this.gridSize=$,(Xt=this._applyGridVars)==null||Xt.call(this),(li=this._resizeContainer)==null||li.call(this)),this.editModePin=ot,this._config={...this._config||{},edit_mode_pin:ot};let Zt=X!==this.dragLiveSnap;this.dragLiveSnap=X,Zt&&((_i=this._initInteract)==null||_i.call(this)),this.autoSave=J,!isNaN(Y)&&Y>0&&(this.autoSaveDebounce=Y);let ei=N!==this.containerSizeMode;this.containerSizeMode=N;let Bt=q!==this.containerPresetOrient;if(this.containerPresetOrient=q,(ei||Bt)&&((Jt=this._resizeContainer)==null||Jt.call(this)),N==="fixed_custom"){let st=parseInt(((wi=t.querySelector("#ddc-setting-custW"))==null?void 0:wi.value)||"0",10),ut=parseInt(((Qt=t.querySelector("#ddc-setting-custH"))==null?void 0:Qt.value)||"0",10);!isNaN(st)&&st>0&&(this.containerFixedWidth=st),!isNaN(ut)&&ut>0&&(this.containerFixedHeight=ut),(ki=this._resizeContainer)==null||ki.call(this)}else if(N==="preset"){let st=(Si=t.querySelector("#ddc-setting-preset"))==null?void 0:Si.value;st&&(this.containerPreset=st),(Ei=this._resizeContainer)==null||Ei.call(this)}if(this.disableOverlap=B,fe&&(this.containerBackground=fe,this.style.setProperty("--ddc-bg",this.containerBackground)),Me&&(this.cardBackground=Me,this.style.setProperty("--ddc-card-bg",this.cardBackground)),je){let st=this._config&&this._config.background_image||{};this._config={...this._config,background_image:{...st,src:je}}}else{let{background_image:st,...ut}=this._config||{};this._config=ut}this.debug=pt,this.animateCards=G,this.hideHaHeader=oe,this.hideHaSidebar=te,(Ci=this._applyHaChromeVisibility_)==null||Ci.call(this);let Wt=this._config&&this._config.background_image||{},Kt=(A==null?void 0:A.value)||"no-repeat",Ot=(L==null?void 0:L.value)||"cover",Ft=(x==null?void 0:x.value)||"center center",Ti=(M==null?void 0:M.value)||"scroll",di=I?Math.max(0,Math.min(100,parseInt(I.value||"100",10)))/100:1;if(this._config=this._config||{},this._config.background_mode=it,it!=="image"&&!je){let{background_image:st,...ut}=this._config||{};this._config=ut}if(it==="particles")this._config.background_particles={config_url:wt||void 0,pointer_events:Dt||void 0};else{let{background_particles:st,...ut}=this._config||{};this._config=ut}if(it==="youtube")this._config.background_youtube={url:Hi||void 0,start:Number.isFinite(ai)?ai:void 0,end:Number.isFinite(xi)?xi:void 0,mute:oi!==!0?oi:void 0,loop:si!==!0?si:void 0};else{let{background_youtube:st,...ut}=this._config||{};this._config=ut}if(je)this._config={...this._config,background_image:{...Wt,src:je,repeat:Kt,size:Ot,position:Ft,attachment:Ti,opacity:di}};else if(Wt.src)this._config={...this._config,background_image:{...Wt,repeat:Kt,size:Ot,position:Ft,attachment:Ti,opacity:di}};else{let{background_image:st,...ut}=this._config||{};this._config=ut}(Ai=this._applyBackgroundFromConfig)==null||Ai.call(this);try{this._config||(this._config={}),this._config.grid=this.gridSize,this._config.auto_resize_cards=!!this.autoResizeCards,this._config.drag_live_snap=!!this.dragLiveSnap,this._config.auto_save=!!this.autoSave,this._config.auto_save_debounce=this.autoSaveDebounce,this._config.container_size_mode=this.containerSizeMode,this._config.container_preset_orientation=this.containerPresetOrient,this._config.container_fixed_width=this.containerFixedWidth,this._config.container_fixed_height=this.containerFixedHeight,this._config.container_preset=this.containerPreset,this._config.disable_overlap=!!this.disableOverlap,this._config.container_background=this.containerBackground,this._config.card_background=this.cardBackground,this._config.debug=!!this.debug,this._config.animate_cards=!!this.animateCards,this._config.hide_HA_Header=!!this.hideHaHeader,this._config.hide_HA_Sidebar=!!this.hideHaSidebar}catch(st){console.warn("[drag-and-drop-card] Failed to update config",st)}this._persistThisCardConfigToStorage_().catch(st=>{console.warn("[drag-and-drop-card] Storage save failed (is this a YAML dashboard?)",st)})}catch(Zt){console.warn("[drag-and-drop-card] Failed to apply settings",Zt)}ye()})}_exportableOptions(){var r,o;let t={storage_key:this.storageKey||void 0,grid:this.gridSize,container_background:this.containerBackground,card_background:this.cardBackground,disable_overlap:!!this.disableOverlap,drag_live_snap:!!this.dragLiveSnap,auto_save:!!this.autoSave,auto_save_debounce:this.autoSaveDebounce,edit_mode_pin:this.editModePin||void 0,debug:!!this.debug,container_size_mode:this.containerSizeMode,container_preset_orientation:this.containerPresetOrient,container_fixed_width:(r=this.containerFixedWidth)!=null?r:void 0,container_fixed_height:(o=this.containerFixedHeight)!=null?o:void 0,container_preset:this.containerPreset,tabs:this.tabs,tabs_position:this.tabsPosition,default_tab:this.defaultTab,hide_tabs_when_single:!!this.hideTabsWhenSingle,auto_resize_cards:!!this.autoResizeCards};return Object.keys(t).forEach(l=>t[l]===void 0&&delete t[l]),t}_applyImportedOptions(t={},r=!0){var o,l,s,d,f,y,g,b;if(t&&Object.prototype.hasOwnProperty.call(t,"storage_key")&&this._isInHaEditorPreview())try{let m={type:"custom:drag-and-drop-card",...this._config||{}};this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:m},bubbles:!0,composed:!0}))}catch{}this._config={...this._config||{},...t},"storage_key"in t&&(this.storageKey=t.storage_key||void 0),this._syncEditorsStorageKey(),"grid"in t&&(this.gridSize=Number(t.grid)||10),"drag_live_snap"in t&&(this.dragLiveSnap=!!t.drag_live_snap),"auto_save"in t&&(this.autoSave=!!t.auto_save),"auto_save_debounce"in t&&(this.autoSaveDebounce=Number(t.auto_save_debounce)||800),"container_background"in t&&(this.containerBackground=(o=t.container_background)!=null?o:"transparent"),"card_background"in t&&(this.cardBackground=(l=t.card_background)!=null?l:"var(--ha-card-background, var(--card-background-color))"),"debug"in t&&(this.debug=!!t.debug),"disable_overlap"in t&&(this.disableOverlap=!!t.disable_overlap),"container_size_mode"in t&&(this.containerSizeMode=t.container_size_mode||"dynamic"),"container_fixed_width"in t&&(this.containerFixedWidth=Number(t.container_fixed_width)||null),"container_fixed_height"in t&&(this.containerFixedHeight=Number(t.container_fixed_height)||null),"container_preset"in t&&(this.containerPreset=t.container_preset||"fhd"),"container_preset_orientation"in t&&(this.containerPresetOrient=t.container_preset_orientation||"auto"),"auto_resize_cards"in t&&(this.autoResizeCards=!!t.auto_resize_cards,this.autoResizeCards?(s=this._startScaleWatch)==null||s.call(this):(d=this._stopScaleWatch)==null||d.call(this),(f=this._applyAutoScale)==null||f.call(this)),this.style.setProperty("--ddc-bg",this.containerBackground),this.style.setProperty("--ddc-card-bg",this.cardBackground),this._applyGridVars(),r&&(this._applyContainerSizingFromConfig(!0),(y=this._applyAutoScale)==null||y.call(this),this._resizeContainer(),(g=this._updateStoreBadge)==null||g.call(this),(b=this._applyAutoScale)==null||b.call(this))}_exportDesign(){let r=Array.from(this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)")).map(f=>{let y=parseFloat(f.getAttribute("data-x"))||0,g=parseFloat(f.getAttribute("data-y"))||0,b=parseFloat(f.style.width)||f.getBoundingClientRect().width,m=parseFloat(f.style.height)||f.getBoundingClientRect().height,w=parseInt(f.style.zIndex||"1",10),O=this._extractCardConfig(f.firstElementChild),E=f.dataset.tabId||this.defaultTab;return{card:O,position:{x:y,y:g},size:{width:b,height:m},z:w,tabId:E}}),o={version:2,options:this._exportableOptions(),cards:r};this._config&&this._config.card_mod&&(o.options=o.options||{},o.options.card_mod=this._config.card_mod);let l=`DragAndDrop_Design_${this.storageKey||"layout"}.json`,s=new Blob([JSON.stringify(o,null,2)],{type:"application/json"}),d=document.createElement("a");d.href=URL.createObjectURL(s),d.download=l,d.click(),URL.revokeObjectURL(d.href),this._toast("Design exported.")}_importDesign(){let t=document.createElement("input");t.type="file",t.accept="application/json";let r=!0,o=!1,l=["grid","drag_live_snap","auto_save","auto_save_debounce","container_background","card_background","debug","disable_overlap","container_size_mode","container_fixed_width","container_fixed_height","container_preset","container_preset_orientation","tabs","tabs_position","default_tab","hide_tabs_when_single","card_mod","storage_key"];t.onchange=async()=>{var f,y,g,b,m,w,O,E,P,R,C,A,L,x,M,I,re,ie,U,ue,H,V,de,me,Ye,Fe,Re,qe,Se,Qe,et,Ve,tt,ft,at,ce,gt,Ge,Oe,le,Pe,Ce,Ee,nt,$e,Ct,yt,St;let s=(f=t.files)==null?void 0:f[0];if(!s)return;let d=await s.text();try{let De=JSON.parse(d),At=this.storageKey||((y=this._config)==null?void 0:y.storage_key)||null,vt=!!(De.options&&Array.isArray(De.options.tabs)),rt=Array.isArray(De.cards)&&De.cards.some(ye=>(ye==null?void 0:ye.tabId)||(ye==null?void 0:ye.tab_id)),dt=[];vt?dt=De.options.tabs:rt?dt=Array.from(new Set(De.cards.map(Be=>(Be==null?void 0:Be.tabId)||(Be==null?void 0:Be.tab_id)).filter(Boolean))).map(Be=>({id:Be,label:Be})):dt=[{id:"default",label:"Layout"}];let Rt=((g=De.options)==null?void 0:g.tabs_position)==="left"?"left":this.tabsPosition||"top",zt=((b=De.options)==null?void 0:b.default_tab)||((m=dt[0])==null?void 0:m.id)||"default",Tt=((w=De.options)==null?void 0:w.hide_tabs_when_single)!==void 0?!!De.options.hide_tabs_when_single:!0;if(De.options){let ye={...De.options};if(o||delete ye.storage_key,r){let Be=this._config||{type:"custom:drag-and-drop-card"};for(let Xe of l)Xe==="storage_key"&&!o||!(Xe in ye)&&Xe in Be&&delete Be[Xe];try{this.cardContainer&&(this.cardContainer.style.background="",this.cardContainer.style.width="",this.cardContainer.style.height=""),(E=(O=this.style)==null?void 0:O.removeProperty)==null||E.call(O,"--ddc-container-bg"),(R=(P=this.style)==null?void 0:P.removeProperty)==null||R.call(P,"--ddc-card-bg")}catch{}if(this._config={...Be,...ye},"card_mod"in ye||delete this._config.card_mod,o&&ye.storage_key&&(this.storageKey=ye.storage_key),this._opts){this._opts={...this._opts,...ye};for(let Xe of l)Xe in ye||delete this._opts[Xe]}(C=this._applyOptionsToDom)==null||C.call(this,this._config),(A=this.requestUpdate)==null||A.call(this)}else this._applyImportedOptions(ye,!0),ye.card_mod!==void 0&&(this._config=this._config||{},this._config.card_mod=ye.card_mod,(L=this.requestUpdate)==null||L.call(this))}else if(typeof De.grid=="number"){let ye={grid:De.grid};r?this._config={...this._config||{},...ye}:this._applyImportedOptions(ye,!0),(x=this.requestUpdate)==null||x.call(this)}(!Array.isArray(this.tabs)||!this.tabs.length)&&(this.tabs=dt),this.tabsPosition||(this.tabsPosition=Rt),this.defaultTab||(this.defaultTab=zt),this.hideTabsWhenSingle===void 0&&(this.hideTabsWhenSingle=Tt),(re=(I=(M=this.rootEl)==null?void 0:M.classList)==null?void 0:I.toggle)==null||re.call(I,"ddc-tabs-left-layout",this.tabsPosition==="left");try{let ye=((ie=this._config)==null?void 0:ie.storage_key)||this.storageKey||null,Be=(U=De.options)!=null?U:typeof De.grid=="number"?{grid:De.grid}:{},Xe={...Be,tabs:(H=(ue=Be.tabs)!=null?ue:this.tabs)!=null?H:[],tabs_position:(de=(V=Be.tabs_position)!=null?V:this.tabsPosition)!=null?de:"top",default_tab:(Se=(me=Be.default_tab)!=null?me:this.defaultTab)!=null?Se:((Fe=(Ye=Be.tabs)==null?void 0:Ye[0])==null?void 0:Fe.id)||((qe=(Re=this.tabs)==null?void 0:Re[0])==null?void 0:qe.id)||"default",hide_tabs_when_single:(et=Be.hide_tabs_when_single)!=null?et:(Qe=this.hideTabsWhenSingle)!=null?Qe:!0};if(o||delete Xe.storage_key,!ye)console.warn("[ddc:import] No storage_key on this card; aborting YAML persist.");else{let K=await((Ve=this._persistOptionsToYaml)==null?void 0:Ve.call(this,Xe,{forceTargetKey:String(ye),noDownload:!0,replace:!0,wipeUnknownKeys:!0})),Z=!!(K&&K.yamlSaved);(tt=console.debug)==null||tt.call(console,"[ddc:import] YAML persist result:",Z)}try{let K={type:"custom:drag-and-drop-card",...this._config||{}};K.tabs=Xe.tabs,K.tabs_position=Xe.tabs_position,K.default_tab=Xe.default_tab,K.hide_tabs_when_single=!!Xe.hide_tabs_when_single,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:K},bubbles:!0,composed:!0}))}catch{}}catch(ye){console.warn("[ddc:import] YAML persist failed:",ye)}if(this.cardContainer.innerHTML="",Array.isArray(De.cards)&&De.cards.length)for(let ye of De.cards){let Be=((ft=ye.position)==null?void 0:ft.x)||0,Xe=((at=ye.position)==null?void 0:at.y)||0,K=((ce=ye.size)==null?void 0:ce.width)||140,Z=((gt=ye.size)==null?void 0:gt.height)||100,xe=ye.z,_e=this._normalizeTabId(ye.tabId||ye.tab_id||this.defaultTab);if(!(ye!=null&&ye.card)||typeof ye.card=="object"&&!Object.keys(ye.card).length){let F=this._makePlaceholderAt(Be,Xe,K,Z);F.dataset.tabId=_e,this.cardContainer.appendChild(F);continue}let he=await this._createCard(ye.card),we=this._makeWrapper(he);we.dataset.tabId=_e,this._setCardPosition(we,Be,Xe),we.style.width=`${K}px`,we.style.height=`${Z}px`,xe!=null&&(we.style.zIndex=String(xe)),this.cardContainer.appendChild(we);try{this._rebuildOnce(we.firstElementChild)}catch{}this._initCardInteract(we)}else this._showEmptyPlaceholder(),(Ge=this._applyAutoScale)==null||Ge.call(this);(Oe=this._applyOptionsToDom)==null||Oe.call(this,this._config),this._resizeContainer();try{(Ce=(Pe=(le=this.rootEl)==null?void 0:le.classList)==null?void 0:Pe.toggle)==null||Ce.call(Pe,"ddc-tabs-left-layout",this.tabsPosition==="left"),(Ee=this._renderTabs)==null||Ee.call(this),(nt=this._applyActiveTab)==null||nt.call(this)}catch{}try{this._saveTimer&&clearTimeout(this._saveTimer),await this._saveLayout(!0),($e=this._toast)==null||$e.call(this,"Design imported & saved. Reloading..."),window.location.reload()}catch(ye){console.warn("[ddc:import] saveLayout failed",ye),(Ct=this._markDirty)==null||Ct.call(this,"import"),(yt=this._toast)==null||yt.call(this,"Design imported \u2014 click Apply to save.")}}catch(De){console.error("Import failed",De),(St=this._toast)==null||St.call(this,"Import failed \u2014 invalid file.")}},t.click()}_getLovelace(){var s,d;let t=0,r=this;for(;r&&t++<20;){let f=(s=r.getRootNode)==null?void 0:s.call(r),y=f==null?void 0:f.host;if((y==null?void 0:y.tagName)==="HUI-ROOT")return y.lovelace;r=y||r.parentElement}let o=new Set,l=[document];for(;l.length;){let f=l.shift();if(!(!f||o.has(f))){if(o.add(f),((d=f.host)==null?void 0:d.tagName)==="HUI-ROOT")return f.host.lovelace;if(f.tagName==="HUI-ROOT")return f.lovelace;if(f.shadowRoot&&l.push(f.shadowRoot),f.children)for(let y of f.children)l.push(y)}}}_scanDdcCards(t){let r=[],o=(s,d,f)=>{(f==null?void 0:f.type)==="custom:drag-and-drop-card"&&r.push({view:s,path:[...d],card:f})},l=(s,d,f)=>{if(s){if(Array.isArray(s)){s.forEach((y,g)=>l(y,d,f.concat(g)));return}if(typeof s=="object"){"type"in s&&o(d,f,s);for(let[y,g]of Object.entries(s))y==="views"&&Array.isArray(g)?g.forEach((b,m)=>l(b,m,["views",m])):(Array.isArray(g)||g&&typeof g=="object")&&l(g,d,f.concat(y))}}};return l(t,-1,[]),r}async _persistOptionsToYaml(t,{prevKey:r=null,patchAllInCurrentViewIfNoKey:o=!1}={}){var l,s,d,f,y,g,b,m,w;try{let O=this._getLovelace();if(!O)return console.debug("[ddc:import] persist: no lovelace root"),!1;if(typeof O.saveConfig!="function")return console.debug("[ddc:import] persist: dashboard not in Storage mode"),!1;let E=JSON.parse(JSON.stringify(O.config)),P=this._scanDdcCards(E),R=(l=O.current_view)!=null?l:0;console.debug("[ddc:import] persist: found DDC cards",P.map(M=>({view:M.view,path:M.path.join("."),storage_key:M.card.storage_key||null})));let C=(s=t==null?void 0:t.storage_key)!=null?s:null,A=[];r&&A.push(r),C&&A.push(C),this.storageKey&&A.push(this.storageKey),(d=this._config)!=null&&d.storage_key&&A.push(this._config.storage_key);let L=P.filter(M=>M.card.storage_key&&A.includes(M.card.storage_key));if(!L.length){let M=P.filter(I=>I.view===R);M.length===1&&(L=M)}if(!L.length&&P.length===1&&(L=P),!L.length)return console.debug("[ddc:import] persist: no target. Provide a unique storage_key on this card and import again.",{prevKey:r,newKey:C,storageKey:this.storageKey}),!1;let x={type:"custom:drag-and-drop-card",...t};"storage_key"in x&&delete x.storage_key,"storageKey"in x&&delete x.storageKey;for(let M of L){let I=E;for(let U of M.path)I=I[U];let re=(w=(m=(g=(f=I==null?void 0:I.storage_key)!=null?f:I==null?void 0:I.storageKey)!=null?g:(y=I==null?void 0:I.options)==null?void 0:y.storage_key)!=null?m:(b=I==null?void 0:I.options)==null?void 0:b.storageKey)!=null?w:null,ie=!!(r&&C&&re===r&&C!==r);Object.assign(I,x),ie?I.storage_key=String(C):re&&(I.storage_key=String(re)),"storageKey"in I&&delete I.storageKey}return console.debug("[ddc:import] persist \u2192 saving",{patched:L.length,keysTried:A,patch}),await O.saveConfig(E),!0}catch(O){return console.warn("[ddc:import] persist error",O),!1}}_queueSave(t="auto"){this._markDirty(t),this.autoSave&&(this._loading||this.editMode&&(this._dbgPush("autosave","Queued",{reason:t,debounce:this.autoSaveDebounce}),clearTimeout(this._saveTimer),this._saveTimer=setTimeout(()=>this._saveLayout(!0),this.autoSaveDebounce)))}async _saveLayout(t=!0){let o=Array.from(this.cardContainer.querySelectorAll(".card-wrapper:not(.ddc-placeholder)")).map(s=>{let d=parseFloat(s.getAttribute("data-x"))||0,f=parseFloat(s.getAttribute("data-y"))||0,y=parseFloat(s.style.width)||s.getBoundingClientRect().width,g=parseFloat(s.style.height)||s.getBoundingClientRect().height,b=parseInt(s.style.zIndex||"1",10),m=this._extractCardConfig(s.firstElementChild),w=s.dataset.tabId||this.defaultTab;return{card:m,position:{x:d,y:f},size:{width:y,height:g},z:b,tabId:w}}),l={version:2,options:this._exportableOptions(),cards:o};try{localStorage.setItem(`ddc_local_${this.storageKey||"default"}`,JSON.stringify(l))}catch{}if(!this.storageKey){t||this._toast("Saved locally (no storage_key set)."),this.__dirty=!1,this._updateApplyBtn();return}try{await this._saveLayoutToBackend(this.storageKey,l),t||this._toast("Layout saved."),this.__dirty=!1,this._updateApplyBtn()}catch(s){console.error("Backend save failed",s),this._dbgPush("save","Backend save failed",{error:String(s)}),t||this._toast("Backend save failed \u2014 kept local copy.")}}async _probeBackend(){this._backendOK=!1;let t=performance.now();try{this._dbgPush("probe","GET /api/dragdrop_storage (list keys)");let r=await this.hass.callApi("get","dragdrop_storage"),o=Math.round(performance.now()-t);this._dbgPush("probe",`OK (${o} ms)`,r),this._backendOK=!!r}catch(r){let o=Math.round(performance.now()-t);this._dbgPush("probe",`FAILED (${o} ms)`,{error:String(r)}),this._backendOK=!1}this._updateStoreBadge()}async _loadLayoutFromBackend(t){let r=`dragdrop_storage/${encodeURIComponent(t)}`,o=performance.now();try{this._dbgPush("load",`GET /api/${r}`);let l=await this.hass.callApi("get",r),s=Math.round(performance.now()-o);return this._dbgPush("load",`OK (${s} ms)`,{bytes:JSON.stringify(l||"").length}),l}catch(l){let s=Math.round(performance.now()-o);return this._dbgPush("load",`FAILED (${s} ms)`,{error:String(l)}),null}}async _saveLayoutToBackend(t,r){let o=`dragdrop_storage/${encodeURIComponent(t)}`,l=JSON.stringify(r).length,s=performance.now();try{this._dbgPush("save",`POST /api/${o}`,{bytes:l});let d=await this.hass.callApi("post",o,r),f=Math.round(performance.now()-s);return this._dbgPush("save",`OK (${f} ms)`,d),d}catch(d){let f=Math.round(performance.now()-s);throw this._dbgPush("save",`FAILED (${f} ms)`,{error:String(d),bytes:l}),d}}_updateStoreBadge(){let t=this.storeBadge;if(!t)return;let r=this._backendOK&&!!this.storageKey;t.textContent=r?"storage: backend - OK":"storage: local. Your Changes are NOT being SAVED. You need to download the Drag and Drop Card backend integration",t.style.background=r?"rgba(76,175,80,.15)":"rgba(255,193,7,.15)",t.style.borderColor=r?"rgba(76,175,80,.45)":"rgba(255,193,7,.45)"}_toast(t){let r=new Event("hass-notification");r.detail={message:t},window.dispatchEvent(r)}_huiRoot(){var t,r,o,l,s,d;try{let f=document.querySelector("home-assistant"),y=(t=f==null?void 0:f.shadowRoot)==null?void 0:t.querySelector("home-assistant-main"),g=((r=y==null?void 0:y.shadowRoot)==null?void 0:r.querySelector("ha-drawer"))||y,b=((o=g==null?void 0:g.shadowRoot)==null?void 0:o.querySelector("partial-panel-resolver"))||g,m=((l=b==null?void 0:b.shadowRoot)==null?void 0:l.querySelector("ha-panel-lovelace"))||((s=g==null?void 0:g.shadowRoot)==null?void 0:s.querySelector("ha-panel-lovelace"));return((d=m==null?void 0:m.shadowRoot)==null?void 0:d.querySelector("hui-root"))||null}catch{return null}}getCardSize(){return 3}};customElements.get("drag-and-drop-card")||customElements.define("drag-and-drop-card",hn);(()=>{try{let e=window.customCards=window.customCards||[];e.some(u=>u.type==="drag-and-drop-card")||e.push({type:"drag-and-drop-card",name:"Drag & Drop Card",description:"Freeform drag/resize/snap-to-grid canvas for Lovelace cards.",preview:!1})}catch{}})();(()=>{let e=new WeakSet,u=s=>{try{if(!(s instanceof Element))return!1;let d=s.localName||"";return d?!!(d==="ha-card"||d.endsWith("-card")):!1}catch{return!1}},t=s=>{try{if(!s||e.has(s))return;e.add(s),s.dispatchEvent(new Event("ll-rebuild",{bubbles:!0,composed:!0}))}catch{}},r=s=>{var d,f;try{if(!s)return;s instanceof Element&&u(s)&&t(s);let y=(f=(d=(s instanceof ShadowRoot,s)).querySelectorAll)==null?void 0:f.call(d,"*");if(!y)return;for(let g of y){u(g)&&t(g);let b=g.shadowRoot;if(b)try{r(b)}catch{}}}catch{}},o=s=>{try{if(!s||s.__ddcCardModIntegrated)return;s.__ddcCardModIntegrated=!0;let d=s.shadowRoot||s;r(d);let f=new MutationObserver(y=>{for(let g of y)if(!(!g.addedNodes||!g.addedNodes.length))for(let b of g.addedNodes)(b instanceof Element||b instanceof ShadowRoot)&&r(b)});f.observe(d,{childList:!0,subtree:!0}),s.__ddcCardModIntegratedObserver=f,setTimeout(()=>{try{r(d)}catch{}},250),setTimeout(()=>{try{r(d)}catch{}},1e3)}catch{}},l=()=>{try{document.querySelectorAll("drag-and-drop-card").forEach(o)}catch{}};if(window.customElements&&window.customElements.whenDefined)window.customElements.whenDefined("drag-and-drop-card").then(()=>{l();let s=window.customElements.get("drag-and-drop-card");if(s&&s.prototype){let f=s.prototype.connectedCallback;s.prototype.connectedCallback=function(){try{f&&f.call(this)}finally{o(this)}}}new MutationObserver(()=>l()).observe(document.documentElement,{childList:!0,subtree:!0})});else{let s=setInterval(l,1e3);setTimeout(()=>clearInterval(s),1e4)}})();(function(){let e="drag-and-drop-card",u=customElements.get(e);if(!u){console.warn("[ddc:augment] Could not find custom element",e);return}function t(){var E,P;try{let R=0,C=this;for(;C&&R++<20;){let x=(E=C.getRootNode)==null?void 0:E.call(C),M=x==null?void 0:x.host;if((M==null?void 0:M.tagName)==="HUI-ROOT")return M.lovelace;C=M||C.parentElement}let A=new Set,L=[document];for(;L.length;){let x=L.shift();if(!(!x||A.has(x))){if(A.add(x),((P=x.host)==null?void 0:P.tagName)==="HUI-ROOT")return x.host.lovelace;if(x.tagName==="HUI-ROOT")return x.lovelace;if(x.shadowRoot&&L.push(x.shadowRoot),x.children)for(let M of x.children)L.push(M)}}}catch{}}function r(E){let P=[],R=(A,L,x)=>{(x==null?void 0:x.type)==="custom:drag-and-drop-card"&&P.push({view:A,path:[...L],card:x})},C=(A,L,x)=>{if(A){if(Array.isArray(A)){A.forEach((M,I)=>C(M,L,x.concat(I)));return}if(typeof A=="object"){"type"in A&&R(L,x,A);for(let[M,I]of Object.entries(A))M==="views"&&Array.isArray(I)?I.forEach((re,ie)=>C(re,ie,["views",ie])):(Array.isArray(I)||I&&typeof I=="object")&&C(I,L,x.concat(M))}}};return C(E,-1,[]),P}function o(E,P,R){let C=new Date().toISOString().replace(/[:.]/g,"-"),A=P.map(x=>{let M=E;for(let I of x.path)M=M[I];return{view:x.view,path:x.path,storage_key:M&&M.storage_key||null,before:M,patch:R}}),L={kind:"ddc-import-backup",created_at:C,count:A.length,items:A};try{let x=`ddc.backup.${C}`;localStorage.setItem(x,JSON.stringify(L));let M=Object.keys(localStorage).filter(I=>I.startsWith("ddc.backup.")).sort().reverse();for(let I of M.slice(10))localStorage.removeItem(I)}catch{}return{name:`ddc_backup_${C}.json`,data:L}}function l(E,P){try{let R=new Blob([JSON.stringify(P,null,2)],{type:"application/json"}),C=URL.createObjectURL(R),A=document.createElement("a");A.href=C,A.download=E,document.body.appendChild(A),A.click(),A.remove(),setTimeout(()=>URL.revokeObjectURL(C),1500)}catch(R){console.warn("[ddc:backup] download failed",R)}}function s(E){if(E)try{let P="ddc.recent.keys",R=JSON.parse(localStorage.getItem(P)||"[]");R.includes(E)||R.unshift(E),localStorage.setItem(P,JSON.stringify(R.slice(0,20)))}catch{}}function d(){try{return JSON.parse(localStorage.getItem("ddc.recent.keys")||"[]")}catch{return[]}}function f(){var P,R;let E=new Set;try{let C=Object.keys(localStorage).filter(A=>A.startsWith("ddc.backup.")).sort().reverse();for(let A of C)try{let L=JSON.parse(localStorage.getItem(A)||"null");if(L&&L.items)for(let x of L.items){let M=((P=x==null?void 0:x.before)==null?void 0:P.storage_key)||((R=x==null?void 0:x.patch)==null?void 0:R.storage_key);M&&E.add(M)}}catch{}}catch{}return Array.from(E)}async function y(E,{forceTargetKey:P=null,onlyThisCard:R=!1,prevKey:C,noDownload:A}={}){var me,Ye,Fe,Re,qe;let L=((me=this._getLovelace)==null?void 0:me.call(this))||t.call(this);if(!L)return console.debug("[ddc:import] persist: no lovelace root"),!1;if(typeof L.saveConfig!="function")return console.debug("[ddc:import] persist: dashboard not in Storage mode"),!1;let x=Se=>typeof Se=="string"?Se.trim():null,M=x(P)||x((Ye=this==null?void 0:this._config)==null?void 0:Ye.storage_key)||x(this==null?void 0:this.storageKey)||x(C);if(!M)return console.warn("[ddc:import] persist: missing target storage_key on this card; aborting"),!1;let I=JSON.parse(JSON.stringify(L.config)),re=(this._scanDdcCards||r)(I);console.debug("[ddc:import] persist: found DDC cards",re.map(Se=>({view:Se.view,path:Se.path.join("."),storage_key:Se.card&&(Se.card.storage_key||Se.card.storageKey)||null})));let ie=re.filter(Se=>{var et,Ve,tt,ft,at,ce,gt,Ge,Oe;return((Oe=(ce=(tt=x((et=Se.card)==null?void 0:et.storage_key))!=null?tt:x((Ve=Se.card)==null?void 0:Ve.storageKey))!=null?ce:x((at=(ft=Se.card)==null?void 0:ft.options)==null?void 0:at.storage_key))!=null?Oe:x((Ge=(gt=Se.card)==null?void 0:gt.options)==null?void 0:Ge.storageKey))===M});if(ie.length!==1)return console.warn("[ddc:import] persist: expected exactly one target with key, got",ie.length,{myKey:M}),!1;let U={type:"custom:drag-and-drop-card",...E||{}};"storage_key"in U&&delete U.storage_key,"storageKey"in U&&delete U.storageKey,U!=null&&U.options&&("storage_key"in U.options&&delete U.options.storage_key,"storageKey"in U.options&&delete U.options.storageKey);let ue=Array.isArray(U.cards)?U.cards:null;delete U.cards;try{let Se=o==null?void 0:o(L.config,ie,U);Se&&(console.debug("[ddc:import] backup created",{file:Se.name,items:(Fe=Se.data)==null?void 0:Fe.count}),!A&&typeof l=="function"&&l(Se.name,Se.data))}catch(Se){console.debug("[ddc:import] backup skipped/error:",(Se==null?void 0:Se.message)||Se)}let H=ie[0],V=I;for(let Se of H.path)V=V[Se];let de=(qe=(Re=x(V==null?void 0:V.storage_key))!=null?Re:x(V==null?void 0:V.storageKey))!=null?qe:null;return Object.assign(V,U),de?V.storage_key=de:V.storage_key=M,"storageKey"in V&&delete V.storageKey,console.debug("[ddc:import] persist \u2192 saving",{patched:1,into_key:V.storage_key,ignored_file_key:x(E==null?void 0:E.storage_key)||x(E==null?void 0:E.storageKey)||null}),await L.saveConfig(I),{yamlSaved:!0,cardsForStorage:ue}}async function g(){var R;let E=C=>{if(!C)return[];if(Array.isArray(C))return C;if(Array.isArray(C==null?void 0:C.keys))return C.keys;if(Array.isArray(C==null?void 0:C.dashboards))return C.dashboards;if(Array.isArray(C==null?void 0:C.entries))return C.entries.map(A=>A.key||A.id||A.name).filter(Boolean);if(Array.isArray(C==null?void 0:C.items))return C.items.map(A=>A.key||A.id||A.name).filter(Boolean);if(typeof C=="object"){for(let A of Object.values(C))if(Array.isArray(A)&&A.every(L=>typeof L=="string"))return A}return[]};try{if((R=this==null?void 0:this.hass)!=null&&R.callApi){let C=await this.hass.callApi("get","dragdrop_storage"),A=E(C);if(A.length)return A}}catch(C){console.debug("[ddc:switcher] hass.callApi dragdrop_storage failed",C)}let P=["/api/dragdrop_storage","/api/dragdrop_storage/keys","/api/dragdrop_storage/list","/api/dragdrop_storage?all=1"];for(let C of P)try{let L=await(await fetch(C,{cache:"no-store"})).json(),x=E(L);if(x.length)return x}catch{}return[]}async function b(E){let P=L=>{if(!L)return null;if(L.options||L.cards)return L;if(typeof L.design=="object")return L.design;if(typeof L.payload=="object")return L.payload;try{if(typeof L=="string")return JSON.parse(L)}catch{}return null},R=async(L,x,M)=>{var I;try{if((I=this==null?void 0:this.hass)!=null&&I.callApi){let re=await this.hass.callApi(L,x,M),ie=P(re);if(ie)return ie}}catch{}return null},C=async L=>{try{let x=await fetch(L,{cache:"no-store"}),M=x.headers.get("content-type")||"";if(M.includes("application/json")||M.includes("text/plain")){let I=await x.json().catch(()=>null)||await x.text().catch(()=>null),re=P(I);if(re)return re}}catch{}return null},A=encodeURIComponent(E);return await(R("get",`dragdrop_storage/${A}`)||C(`/api/dragdrop_storage/${A}`)||C(`/api/dragdrop_storage?key=${A}`)||R("post","dragdrop_storage/get",{key:E})||null)}async function m(E,{source:P="switcher",newKey:R=null}={}){var L,x,M,I,re,ie,U,ue,H,V,de,me,Ye,Fe,Re,qe,Se,Qe,et,Ve,tt,ft,at,ce,gt,Ge;if(!E||typeof E!="object")throw new Error("Invalid design payload");let C=this.storageKey||((L=this._config)==null?void 0:L.storage_key)||null;try{(x=this._dbgInit)==null||x.call(this),(M=this._dbgPush)==null||M.call(this,"import","Begin import (programmatic)",{source:P,newKey:R})}catch{}if(E.options){let{storage_key:Oe,...le}=E.options;(I=this._applyImportedOptions)==null||I.call(this,le,!0)}else typeof E.grid=="number"&&((re=this._applyImportedOptions)==null||re.call(this,{grid:E.grid},!0));let A=R||((ie=E==null?void 0:E.options)==null?void 0:ie.storage_key)||C;if(A){this.storageKey=A,this._config={...this._config||{},storage_key:A};try{(U=this._syncEditorsStorageKey)==null||U.call(this)}catch{}}try{let Oe=(ue=E.options)!=null?ue:typeof E.grid=="number"?{grid:E.grid}:{};await((H=this._persistOptionsToYaml)==null?void 0:H.call(this,{...Oe,storage_key:A},{prevKey:C,noDownload:P==="switcher"}))}catch(Oe){console.warn("[ddc:apply] persist failed",Oe)}try{if(this.cardContainer.innerHTML="",Array.isArray(E.cards)&&E.cards.length)for(let Oe of E.cards)if(!(Oe!=null&&Oe.card)||typeof Oe.card=="object"&&Object.keys(Oe.card).length===0){let le=(Fe=this._makePlaceholderAt)==null?void 0:Fe.call(this,((V=Oe.position)==null?void 0:V.x)||0,((de=Oe.position)==null?void 0:de.y)||0,((me=Oe.size)==null?void 0:me.width)||200,((Ye=Oe.size)==null?void 0:Ye.height)||200);le&&this.cardContainer.appendChild(le)}else{let le=await this._createCard(Oe.card),Pe=this._makeWrapper(le);(Se=this._setCardPosition)==null||Se.call(this,Pe,((Re=Oe.position)==null?void 0:Re.x)||0,((qe=Oe.position)==null?void 0:qe.y)||0),Pe.style.width=`${((Qe=Oe.size)==null?void 0:Qe.width)||140}px`,Pe.style.height=`${((et=Oe.size)==null?void 0:et.height)||100}px`,Oe.z!=null&&(Pe.style.zIndex=String(Oe.z)),this.cardContainer.appendChild(Pe);try{(Ve=this._rebuildOnce)==null||Ve.call(this,Pe.firstElementChild)}catch{}(tt=this._initCardInteract)==null||tt.call(this,Pe)}else(ft=this._showEmptyPlaceholder)==null||ft.call(this);(at=this._resizeContainer)==null||at.call(this),(ce=this._markDirty)==null||ce.call(this,"import"),(gt=this._toast)==null||gt.call(this,P==="switcher"?`Loaded layout "${A}"`:"Design imported")}catch(Oe){console.error("[ddc:apply] rebuild failed",Oe),(Ge=this._toast)==null||Ge.call(this,"Import failed during rebuild.")}}function w(){var E,P;try{let R=this.shadowRoot||this.renderRoot||this,C=R.querySelector(".ddc-switcher-inline");if(!C)return;let A=((E=this._getLovelace)==null?void 0:E.call(this))||t.call(this),L=!1;try{let x=(P=R.getRootNode&&R.getRootNode())==null?void 0:P.host;L=!!(A&&(A.editMode===!0||x&&x.editMode===!0))}catch{}C.style.display=L?"inline-flex":"none"}catch{}}function O(){try{if(this._ddcSwitcherInstalled)return;let P=(this.shadowRoot||this.renderRoot||this).querySelector(".toolbar");if(!P)return;let R=document.createElement("div");R.className="ddc-switcher-inline",Object.assign(R.style,{display:"inline-flex",gap:"6px",alignItems:"center",marginLeft:"auto"});let C=document.createElement("span");C.textContent="Layout:",C.style.fontSize="12px",C.style.opacity="0.8";let A=document.createElement("select");Object.assign(A.style,{fontSize:"12px",padding:"4px 6px",borderRadius:"8px",border:"1px solid var(--divider-color, #999)",background:"var(--card-background-color, #fff)"}),A.title="Select stored layout (storage_key)",A.id="ddcKeySelect";let L=document.createElement("button");L.className="btn secondary",L.type="button",L.style.padding="6px 10px",L.innerHTML='<ha-icon icon="mdi:refresh"></ha-icon><span style="margin-left:6px">Refresh</span>',R.appendChild(C),R.appendChild(A),R.appendChild(L),P.appendChild(R),this._ddcSwitcherInstalled=!0;let x=async()=>{let M=this.storageKey||this._config&&this._config.storage_key||"",I=await g.call(this),re=f(),ie=d(),U=me=>Array.from(new Set(me.filter(Boolean))),ue=U(I),H=U(re),V=U(ie);if(A.innerHTML="",M&&!ue.includes(M)&&!H.includes(M)&&!V.includes(M)){let me=document.createElement("option");me.value=M,me.textContent=`${M} (current)`,me.selected=!0,A.appendChild(me)}let de=(me,Ye)=>{if(!Ye.length)return;let Fe=document.createElement("optgroup");Fe.label=me,Ye.forEach(Re=>{let qe=document.createElement("option");qe.value=Re,qe.textContent=Re,Re===M&&(qe.selected=!0),Fe.appendChild(qe)}),A.appendChild(Fe)};if(de("Server",ue),de("Backups",H),de("Recent",V),!A.children.length){let me=document.createElement("option");me.value="",me.textContent="\u2014 none \u2014",me.selected=!0,A.appendChild(me)}w.call(this)};x(),L.addEventListener("click",x),A.addEventListener("change",async M=>{var re,ie,U,ue,H,V,de,me;let I=String(M.target.value||"");if(I&&!this._ddcLoadingFromKey){this._ddcLoadingFromKey=!0;try{let Ye=await b.call(this,I);if(!Ye){(re=this._toast)==null||re.call(this,`No layout found for "${I}"`);return}await m.call(this,Ye,{source:"switcher",newKey:I}),(ie=this._resizeContainer)==null||ie.call(this),(U=this._toast)==null||U.call(this,`Loaded layout "${I}"`);let Fe=String(((ue=this._config)==null?void 0:ue.storage_key)||this.storageKey||""),Re=!1;try{let qe=Fe?{forceTargetKey:Fe,noDownload:!0}:{noDownload:!0};Re=await this._persistOptionsToYaml({storage_key:I},qe)}catch(qe){console.warn("[ddc:switcher] failed to persist storage_key to YAML",qe),(H=this._toast)==null||H.call(this,"Failed to persist selected layout. Keeping current.");return}if(this.storageKey=I,this._config&&(this._config.storage_key=I),!Re){console.warn("[ddc:switcher] persist returned false (likely YAML mode). Skipping reload.");return}try{this._saveTimer&&clearTimeout(this._saveTimer),await this._saveLayout(!0)}catch(qe){console.warn("[ddc:switcher] saveLayout failed",qe),(V=this._markDirty)==null||V.call(this,"switcher"),(de=this._toast)==null||de.call(this,"Layout loaded \u2014 click Apply to save.");return}window.location.reload(),window.location.reload()}catch(Ye){console.warn("[ddc:switcher] load/apply failed",Ye),(me=this._toast)==null||me.call(this,"Failed to load layout.")}finally{this._ddcLoadingFromKey=!1}}}),this._ddcVisTimer&&clearInterval(this._ddcVisTimer),this._ddcVisTimer=setInterval(()=>w.call(this),800),w.call(this)}catch(E){console.warn("[ddc:switcher] inline install failed",E)}}u.prototype._getLovelace||(u.prototype._getLovelace=t),u.prototype._scanDdcCards||(u.prototype._scanDdcCards=r),u.prototype._persistOptionsToYaml=y,u.prototype._applyDesignObject||(u.prototype._applyDesignObject=m);try{let E=Object.getOwnPropertyDescriptor(u.prototype,"hass");if(E&&(E.set||E.get)){let P=E.set;Object.defineProperty(u.prototype,"hass",{configurable:!0,enumerable:!0,set(R){P&&P.call(this,R);try{O.call(this)}catch{}},get:E.get||function(){return this._hass}})}else if(typeof u.prototype.setHass=="function"){let P=u.prototype.setHass;u.prototype.setHass=function(R){P&&P.call(this,R);try{O.call(this)}catch{}}}else{let P=u.prototype.updated||u.prototype.firstUpdated;u.prototype.updated=function(...R){P&&P.apply(this,R);try{O.call(this)}catch{}}}}catch(E){console.warn("[ddc:switcher] wrap hass setter failed",E)}})();
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
