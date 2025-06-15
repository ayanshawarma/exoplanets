var Cv=r=>{throw TypeError(r)};var nd=(r,t,n)=>t.has(r)||Cv("Cannot "+n);var pt=(r,t,n)=>(nd(r,t,"read from private field"),n?n.call(r):t.get(r)),we=(r,t,n)=>t.has(r)?Cv("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(r):t.set(r,n),ce=(r,t,n,a)=>(nd(r,t,"write to private field"),a?a.call(r,n):t.set(r,n),n),Pn=(r,t,n)=>(nd(r,t,"access private method"),n);var ac=(r,t,n,a)=>({set _(l){ce(r,t,l,n)},get _(){return pt(r,t,a)}});function dM(r,t){for(var n=0;n<t.length;n++){const a=t[n];if(typeof a!="string"&&!Array.isArray(a)){for(const l in a)if(l!=="default"&&!(l in r)){const u=Object.getOwnPropertyDescriptor(a,l);u&&Object.defineProperty(r,l,u.get?u:{enumerable:!0,get:()=>a[l]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function n(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(l){if(l.ep)return;l.ep=!0;const u=n(l);fetch(l.href,u)}})();function hy(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var id={exports:{}},yl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wv;function pM(){if(wv)return yl;wv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,l,u){var f=null;if(u!==void 0&&(f=""+u),l.key!==void 0&&(f=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:r,type:a,key:f,ref:l!==void 0?l:null,props:u}}return yl.Fragment=t,yl.jsx=n,yl.jsxs=n,yl}var Dv;function mM(){return Dv||(Dv=1,id.exports=pM()),id.exports}var Xt=mM(),ad={exports:{}},he={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uv;function gM(){if(Uv)return he;Uv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function v(L){return L===null||typeof L!="object"?null:(L=_&&L[_]||L["@@iterator"],typeof L=="function"?L:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,b={};function x(L,J,yt){this.props=L,this.context=J,this.refs=b,this.updater=yt||M}x.prototype.isReactComponent={},x.prototype.setState=function(L,J){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,J,"setState")},x.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function y(){}y.prototype=x.prototype;function N(L,J,yt){this.props=L,this.context=J,this.refs=b,this.updater=yt||M}var U=N.prototype=new y;U.constructor=N,E(U,x.prototype),U.isPureReactComponent=!0;var D=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},B=Object.prototype.hasOwnProperty;function H(L,J,yt,xt,K,mt){return yt=mt.ref,{$$typeof:r,type:L,key:J,ref:yt!==void 0?yt:null,props:mt}}function X(L,J){return H(L.type,J,void 0,void 0,void 0,L.props)}function w(L){return typeof L=="object"&&L!==null&&L.$$typeof===r}function C(L){var J={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(yt){return J[yt]})}var G=/\/+/g;function ot(L,J){return typeof L=="object"&&L!==null&&L.key!=null?C(""+L.key):J.toString(36)}function st(){}function gt(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(st,st):(L.status="pending",L.then(function(J){L.status==="pending"&&(L.status="fulfilled",L.value=J)},function(J){L.status==="pending"&&(L.status="rejected",L.reason=J)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function ut(L,J,yt,xt,K){var mt=typeof L;(mt==="undefined"||mt==="boolean")&&(L=null);var St=!1;if(L===null)St=!0;else switch(mt){case"bigint":case"string":case"number":St=!0;break;case"object":switch(L.$$typeof){case r:case t:St=!0;break;case g:return St=L._init,ut(St(L._payload),J,yt,xt,K)}}if(St)return K=K(L),St=xt===""?"."+ot(L,0):xt,D(K)?(yt="",St!=null&&(yt=St.replace(G,"$&/")+"/"),ut(K,J,yt,"",function(se){return se})):K!=null&&(w(K)&&(K=X(K,yt+(K.key==null||L&&L.key===K.key?"":(""+K.key).replace(G,"$&/")+"/")+St)),J.push(K)),1;St=0;var Rt=xt===""?".":xt+":";if(D(L))for(var Ct=0;Ct<L.length;Ct++)xt=L[Ct],mt=Rt+ot(xt,Ct),St+=ut(xt,J,yt,mt,K);else if(Ct=v(L),typeof Ct=="function")for(L=Ct.call(L),Ct=0;!(xt=L.next()).done;)xt=xt.value,mt=Rt+ot(xt,Ct++),St+=ut(xt,J,yt,mt,K);else if(mt==="object"){if(typeof L.then=="function")return ut(gt(L),J,yt,xt,K);throw J=String(L),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return St}function I(L,J,yt){if(L==null)return L;var xt=[],K=0;return ut(L,xt,"","",function(mt){return J.call(yt,mt,K++)}),xt}function Z(L){if(L._status===-1){var J=L._result;J=J(),J.then(function(yt){(L._status===0||L._status===-1)&&(L._status=1,L._result=yt)},function(yt){(L._status===0||L._status===-1)&&(L._status=2,L._result=yt)}),L._status===-1&&(L._status=0,L._result=J)}if(L._status===1)return L._result.default;throw L._result}var q=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function Et(){}return he.Children={map:I,forEach:function(L,J,yt){I(L,function(){J.apply(this,arguments)},yt)},count:function(L){var J=0;return I(L,function(){J++}),J},toArray:function(L){return I(L,function(J){return J})||[]},only:function(L){if(!w(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},he.Component=x,he.Fragment=n,he.Profiler=l,he.PureComponent=N,he.StrictMode=a,he.Suspense=p,he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,he.__COMPILER_RUNTIME={__proto__:null,c:function(L){return F.H.useMemoCache(L)}},he.cache=function(L){return function(){return L.apply(null,arguments)}},he.cloneElement=function(L,J,yt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var xt=E({},L.props),K=L.key,mt=void 0;if(J!=null)for(St in J.ref!==void 0&&(mt=void 0),J.key!==void 0&&(K=""+J.key),J)!B.call(J,St)||St==="key"||St==="__self"||St==="__source"||St==="ref"&&J.ref===void 0||(xt[St]=J[St]);var St=arguments.length-2;if(St===1)xt.children=yt;else if(1<St){for(var Rt=Array(St),Ct=0;Ct<St;Ct++)Rt[Ct]=arguments[Ct+2];xt.children=Rt}return H(L.type,K,void 0,void 0,mt,xt)},he.createContext=function(L){return L={$$typeof:f,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},he.createElement=function(L,J,yt){var xt,K={},mt=null;if(J!=null)for(xt in J.key!==void 0&&(mt=""+J.key),J)B.call(J,xt)&&xt!=="key"&&xt!=="__self"&&xt!=="__source"&&(K[xt]=J[xt]);var St=arguments.length-2;if(St===1)K.children=yt;else if(1<St){for(var Rt=Array(St),Ct=0;Ct<St;Ct++)Rt[Ct]=arguments[Ct+2];K.children=Rt}if(L&&L.defaultProps)for(xt in St=L.defaultProps,St)K[xt]===void 0&&(K[xt]=St[xt]);return H(L,mt,void 0,void 0,null,K)},he.createRef=function(){return{current:null}},he.forwardRef=function(L){return{$$typeof:d,render:L}},he.isValidElement=w,he.lazy=function(L){return{$$typeof:g,_payload:{_status:-1,_result:L},_init:Z}},he.memo=function(L,J){return{$$typeof:m,type:L,compare:J===void 0?null:J}},he.startTransition=function(L){var J=F.T,yt={};F.T=yt;try{var xt=L(),K=F.S;K!==null&&K(yt,xt),typeof xt=="object"&&xt!==null&&typeof xt.then=="function"&&xt.then(Et,q)}catch(mt){q(mt)}finally{F.T=J}},he.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},he.use=function(L){return F.H.use(L)},he.useActionState=function(L,J,yt){return F.H.useActionState(L,J,yt)},he.useCallback=function(L,J){return F.H.useCallback(L,J)},he.useContext=function(L){return F.H.useContext(L)},he.useDebugValue=function(){},he.useDeferredValue=function(L,J){return F.H.useDeferredValue(L,J)},he.useEffect=function(L,J,yt){var xt=F.H;if(typeof yt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return xt.useEffect(L,J)},he.useId=function(){return F.H.useId()},he.useImperativeHandle=function(L,J,yt){return F.H.useImperativeHandle(L,J,yt)},he.useInsertionEffect=function(L,J){return F.H.useInsertionEffect(L,J)},he.useLayoutEffect=function(L,J){return F.H.useLayoutEffect(L,J)},he.useMemo=function(L,J){return F.H.useMemo(L,J)},he.useOptimistic=function(L,J){return F.H.useOptimistic(L,J)},he.useReducer=function(L,J,yt){return F.H.useReducer(L,J,yt)},he.useRef=function(L){return F.H.useRef(L)},he.useState=function(L){return F.H.useState(L)},he.useSyncExternalStore=function(L,J,yt){return F.H.useSyncExternalStore(L,J,yt)},he.useTransition=function(){return F.H.useTransition()},he.version="19.1.0",he}var Lv;function Ip(){return Lv||(Lv=1,ad.exports=gM()),ad.exports}var wt=Ip();const dy=hy(wt),_M=dM({__proto__:null,default:dy},[wt]);var rd={exports:{}},xl={},sd={exports:{}},od={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nv;function vM(){return Nv||(Nv=1,function(r){function t(I,Z){var q=I.length;I.push(Z);t:for(;0<q;){var Et=q-1>>>1,L=I[Et];if(0<l(L,Z))I[Et]=Z,I[q]=L,q=Et;else break t}}function n(I){return I.length===0?null:I[0]}function a(I){if(I.length===0)return null;var Z=I[0],q=I.pop();if(q!==Z){I[0]=q;t:for(var Et=0,L=I.length,J=L>>>1;Et<J;){var yt=2*(Et+1)-1,xt=I[yt],K=yt+1,mt=I[K];if(0>l(xt,q))K<L&&0>l(mt,xt)?(I[Et]=mt,I[K]=q,Et=K):(I[Et]=xt,I[yt]=q,Et=yt);else if(K<L&&0>l(mt,q))I[Et]=mt,I[K]=q,Et=K;else break t}}return Z}function l(I,Z){var q=I.sortIndex-Z.sortIndex;return q!==0?q:I.id-Z.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();r.unstable_now=function(){return f.now()-d}}var p=[],m=[],g=1,_=null,v=3,M=!1,E=!1,b=!1,x=!1,y=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function D(I){for(var Z=n(m);Z!==null;){if(Z.callback===null)a(m);else if(Z.startTime<=I)a(m),Z.sortIndex=Z.expirationTime,t(p,Z);else break;Z=n(m)}}function F(I){if(b=!1,D(I),!E)if(n(p)!==null)E=!0,B||(B=!0,ot());else{var Z=n(m);Z!==null&&ut(F,Z.startTime-I)}}var B=!1,H=-1,X=5,w=-1;function C(){return x?!0:!(r.unstable_now()-w<X)}function G(){if(x=!1,B){var I=r.unstable_now();w=I;var Z=!0;try{t:{E=!1,b&&(b=!1,N(H),H=-1),M=!0;var q=v;try{e:{for(D(I),_=n(p);_!==null&&!(_.expirationTime>I&&C());){var Et=_.callback;if(typeof Et=="function"){_.callback=null,v=_.priorityLevel;var L=Et(_.expirationTime<=I);if(I=r.unstable_now(),typeof L=="function"){_.callback=L,D(I),Z=!0;break e}_===n(p)&&a(p),D(I)}else a(p);_=n(p)}if(_!==null)Z=!0;else{var J=n(m);J!==null&&ut(F,J.startTime-I),Z=!1}}break t}finally{_=null,v=q,M=!1}Z=void 0}}finally{Z?ot():B=!1}}}var ot;if(typeof U=="function")ot=function(){U(G)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,gt=st.port2;st.port1.onmessage=G,ot=function(){gt.postMessage(null)}}else ot=function(){y(G,0)};function ut(I,Z){H=y(function(){I(r.unstable_now())},Z)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(I){I.callback=null},r.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<I?Math.floor(1e3/I):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_next=function(I){switch(v){case 1:case 2:case 3:var Z=3;break;default:Z=v}var q=v;v=Z;try{return I()}finally{v=q}},r.unstable_requestPaint=function(){x=!0},r.unstable_runWithPriority=function(I,Z){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var q=v;v=I;try{return Z()}finally{v=q}},r.unstable_scheduleCallback=function(I,Z,q){var Et=r.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?Et+q:Et):q=Et,I){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=q+L,I={id:g++,callback:Z,priorityLevel:I,startTime:q,expirationTime:L,sortIndex:-1},q>Et?(I.sortIndex=q,t(m,I),n(p)===null&&I===n(m)&&(b?(N(H),H=-1):b=!0,ut(F,q-Et))):(I.sortIndex=L,t(p,I),E||M||(E=!0,B||(B=!0,ot()))),I},r.unstable_shouldYield=C,r.unstable_wrapCallback=function(I){var Z=v;return function(){var q=v;v=Z;try{return I.apply(this,arguments)}finally{v=q}}}}(od)),od}var Ov;function yM(){return Ov||(Ov=1,sd.exports=vM()),sd.exports}var ld={exports:{}},zn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pv;function xM(){if(Pv)return zn;Pv=1;var r=Ip();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(p,m,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:p,containerInfo:m,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return zn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,zn.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return u(p,m,null,g)},zn.flushSync=function(p){var m=f.T,g=a.p;try{if(f.T=null,a.p=2,p)return p()}finally{f.T=m,a.p=g,a.d.f()}},zn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,a.d.C(p,m))},zn.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},zn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,_=d(g,m.crossOrigin),v=typeof m.integrity=="string"?m.integrity:void 0,M=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?a.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:M}):g==="script"&&a.d.X(p,{crossOrigin:_,integrity:v,fetchPriority:M,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},zn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=d(m.as,m.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&a.d.M(p)},zn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,_=d(g,m.crossOrigin);a.d.L(p,g,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},zn.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=d(m.as,m.crossOrigin);a.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else a.d.m(p)},zn.requestFormReset=function(p){a.d.r(p)},zn.unstable_batchedUpdates=function(p,m){return p(m)},zn.useFormState=function(p,m,g){return f.H.useFormState(p,m,g)},zn.useFormStatus=function(){return f.H.useHostTransitionStatus()},zn.version="19.1.0",zn}var zv;function py(){if(zv)return ld.exports;zv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),ld.exports=xM(),ld.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iv;function SM(){if(Iv)return xl;Iv=1;var r=yM(),t=Ip(),n=py();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function d(e){if(u(e)!==e)throw Error(a(188))}function p(e){var i=e.alternate;if(!i){if(i=u(e),i===null)throw Error(a(188));return i!==e?null:e}for(var s=e,o=i;;){var c=s.return;if(c===null)break;var h=c.alternate;if(h===null){if(o=c.return,o!==null){s=o;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===s)return d(c),e;if(h===o)return d(c),i;h=h.sibling}throw Error(a(188))}if(s.return!==o.return)s=c,o=h;else{for(var S=!1,A=c.child;A;){if(A===s){S=!0,s=c,o=h;break}if(A===o){S=!0,o=c,s=h;break}A=A.sibling}if(!S){for(A=h.child;A;){if(A===s){S=!0,s=h,o=c;break}if(A===o){S=!0,o=h,s=c;break}A=A.sibling}if(!S)throw Error(a(189))}}if(s.alternate!==o)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:i}function m(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=m(e),i!==null)return i;e=e.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),N=Symbol.for("react.consumer"),U=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function ot(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var st=Symbol.for("react.client.reference");function gt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===st?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case x:return"Profiler";case b:return"StrictMode";case F:return"Suspense";case B:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case U:return(e.displayName||"Context")+".Provider";case N:return(e._context.displayName||"Context")+".Consumer";case D:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case H:return i=e.displayName||null,i!==null?i:gt(e.type)||"Memo";case X:i=e._payload,e=e._init;try{return gt(e(i))}catch{}}return null}var ut=Array.isArray,I=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},Et=[],L=-1;function J(e){return{current:e}}function yt(e){0>L||(e.current=Et[L],Et[L]=null,L--)}function xt(e,i){L++,Et[L]=e.current,e.current=i}var K=J(null),mt=J(null),St=J(null),Rt=J(null);function Ct(e,i){switch(xt(St,i),xt(mt,e),xt(K,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?nv(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=nv(i),e=iv(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}yt(K),xt(K,e)}function se(){yt(K),yt(mt),yt(St)}function Qt(e){e.memoizedState!==null&&xt(Rt,e);var i=K.current,s=iv(i,e.type);i!==s&&(xt(mt,e),xt(K,s))}function Le(e){mt.current===e&&(yt(K),yt(mt)),Rt.current===e&&(yt(Rt),pl._currentValue=q)}var Pe=Object.prototype.hasOwnProperty,_e=r.unstable_scheduleCallback,P=r.unstable_cancelCallback,We=r.unstable_shouldYield,fe=r.unstable_requestPaint,ue=r.unstable_now,Gt=r.unstable_getCurrentPriorityLevel,xe=r.unstable_ImmediatePriority,jt=r.unstable_UserBlockingPriority,ae=r.unstable_NormalPriority,Qe=r.unstable_LowPriority,O=r.unstable_IdlePriority,T=r.log,et=r.unstable_setDisableYieldValue,ft=null,ht=null;function lt(e){if(typeof T=="function"&&et(e),ht&&typeof ht.setStrictMode=="function")try{ht.setStrictMode(ft,e)}catch{}}var Pt=Math.clz32?Math.clz32:Wt,Ut=Math.log,Ht=Math.LN2;function Wt(e){return e>>>=0,e===0?32:31-(Ut(e)/Ht|0)|0}var Mt=256,It=4194304;function Zt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Kt(e,i,s){var o=e.pendingLanes;if(o===0)return 0;var c=0,h=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~h,o!==0?c=Zt(o):(S&=A,S!==0?c=Zt(S):s||(s=A&~e,s!==0&&(c=Zt(s))))):(A=o&~h,A!==0?c=Zt(A):S!==0?c=Zt(S):s||(s=o&~e,s!==0&&(c=Zt(s)))),c===0?0:i!==0&&i!==c&&(i&h)===0&&(h=c&-c,s=i&-i,h>=s||h===32&&(s&4194048)!==0)?i:c}function Dt(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function oe(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k(){var e=Mt;return Mt<<=1,(Mt&4194048)===0&&(Mt=256),e}function Nt(){var e=It;return It<<=1,(It&62914560)===0&&(It=4194304),e}function Tt(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function Bt(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function At(e,i,s,o,c,h){var S=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var A=e.entanglements,z=e.expirationTimes,$=e.hiddenUpdates;for(s=S&~s;0<s;){var ct=31-Pt(s),_t=1<<ct;A[ct]=0,z[ct]=-1;var nt=$[ct];if(nt!==null)for($[ct]=null,ct=0;ct<nt.length;ct++){var it=nt[ct];it!==null&&(it.lane&=-536870913)}s&=~_t}o!==0&&vt(e,o,0),h!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=h&~(S&~i))}function vt(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var o=31-Pt(i);e.entangledLanes|=i,e.entanglements[o]=e.entanglements[o]|1073741824|s&4194090}function Vt(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var o=31-Pt(s),c=1<<o;c&i|e[o]&i&&(e[o]|=i),s&=~c}}function re(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ze(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Re(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:Mv(e.type))}function ti(e,i){var s=Z.p;try{return Z.p=e,i()}finally{Z.p=s}}var Sn=Math.random().toString(36).slice(2),pn="__reactFiber$"+Sn,Rn="__reactProps$"+Sn,Yn="__reactContainer$"+Sn,Sr="__reactEvents$"+Sn,jl="__reactListeners$"+Sn,Zl="__reactHandles$"+Sn,Mr="__reactResources$"+Sn,wa="__reactMarker$"+Sn;function Da(e){delete e[pn],delete e[Rn],delete e[Sr],delete e[jl],delete e[Zl]}function Zi(e){var i=e[pn];if(i)return i;for(var s=e.parentNode;s;){if(i=s[Yn]||s[pn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=ov(e);e!==null;){if(s=e[pn])return s;e=ov(e)}return i}e=s,s=e.parentNode}return null}function Ki(e){if(e=e[pn]||e[Yn]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function Er(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function Ua(e){var i=e[Mr];return i||(i=e[Mr]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function un(e){e[wa]=!0}var Kl=new Set,Ql={};function Qi(e,i){R(e,i),R(e+"Capture",i)}function R(e,i){for(Ql[e]=i,e=0;e<i.length;e++)Kl.add(i[e])}var Y=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),at={},rt={};function j(e){return Pe.call(rt,e)?!0:Pe.call(at,e)?!1:Y.test(e)?rt[e]=!0:(at[e]=!0,!1)}function bt(e,i,s){if(j(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function Lt(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function zt(e,i,s,o){if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+o)}}var Ft,ee;function Jt(e){if(Ft===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Ft=i&&i[1]||"",ee=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ft+e+ee}var qt=!1;function me(e,i){if(!e||qt)return"";qt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(it){var nt=it}Reflect.construct(e,[],_t)}else{try{_t.call()}catch(it){nt=it}e.call(_t.prototype)}}else{try{throw Error()}catch(it){nt=it}(_t=e())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(it){if(it&&nt&&typeof it.stack=="string")return[it.stack,nt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),S=h[0],A=h[1];if(S&&A){var z=S.split(`
`),$=A.split(`
`);for(c=o=0;o<z.length&&!z[o].includes("DetermineComponentFrameRoot");)o++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(o===z.length||c===$.length)for(o=z.length-1,c=$.length-1;1<=o&&0<=c&&z[o]!==$[c];)c--;for(;1<=o&&0<=c;o--,c--)if(z[o]!==$[c]){if(o!==1||c!==1)do if(o--,c--,0>c||z[o]!==$[c]){var ct=`
`+z[o].replace(" at new "," at ");return e.displayName&&ct.includes("<anonymous>")&&(ct=ct.replace("<anonymous>",e.displayName)),ct}while(1<=o&&0<=c);break}}}finally{qt=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?Jt(s):""}function Ne(e){switch(e.tag){case 26:case 27:case 5:return Jt(e.type);case 16:return Jt("Lazy");case 13:return Jt("Suspense");case 19:return Jt("SuspenseList");case 0:case 15:return me(e.type,!1);case 11:return me(e.type.render,!1);case 1:return me(e.type,!0);case 31:return Jt("Activity");default:return""}}function je(e){try{var i="";do i+=Ne(e),e=e.return;while(e);return i}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function Ee(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Te(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function $t(e){var i=Te(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),o=""+e[i];if(!e.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,h=s.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return c.call(this)},set:function(S){o=""+S,h.call(this,S)}}),Object.defineProperty(e,i,{enumerable:s.enumerable}),{getValue:function(){return o},setValue:function(S){o=""+S},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function en(e){e._valueTracker||(e._valueTracker=$t(e))}function Ae(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),o="";return e&&(o=Te(e)?e.checked?"true":"false":e.value),e=o,e!==s?(i.setValue(e),!0):!1}function Ln(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var La=/[\n"\\]/g;function Ze(e){return e.replace(La,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Ji(e,i,s,o,c,h,S,A){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),i!=null?S==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+Ee(i)):e.value!==""+Ee(i)&&(e.value=""+Ee(i)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),i!=null?Nn(e,S,Ee(i)):s!=null?Nn(e,S,Ee(s)):o!=null&&e.removeAttribute("value"),c==null&&h!=null&&(e.defaultChecked=!!h),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+Ee(A):e.removeAttribute("name")}function qe(e,i,s,o,c,h,S,A){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),i!=null||s!=null){if(!(h!=="submit"&&h!=="reset"||i!=null))return;s=s!=null?""+Ee(s):"",i=i!=null?""+Ee(i):s,A||i===e.value||(e.value=i),e.defaultValue=i}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S)}function Nn(e,i,s){i==="number"&&Ln(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function mn(e,i,s,o){if(e=e.options,i){i={};for(var c=0;c<s.length;c++)i["$"+s[c]]=!0;for(s=0;s<e.length;s++)c=i.hasOwnProperty("$"+e[s].value),e[s].selected!==c&&(e[s].selected=c),c&&o&&(e[s].defaultSelected=!0)}else{for(s=""+Ee(s),i=null,c=0;c<e.length;c++){if(e[c].value===s){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}i!==null||e[c].disabled||(i=e[c])}i!==null&&(i.selected=!0)}}function Mn(e,i,s){if(i!=null&&(i=""+Ee(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+Ee(s):""}function Cn(e,i,s,o){if(i==null){if(o!=null){if(s!=null)throw Error(a(92));if(ut(o)){if(1<o.length)throw Error(a(93));o=o[0]}s=o}s==null&&(s=""),i=s}s=Ee(i),e.defaultValue=s,o=e.textContent,o===s&&o!==""&&o!==null&&(e.value=o)}function zi(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var $i=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function nm(e,i,s){var o=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?o?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":o?e.setProperty(i,s):typeof s!="number"||s===0||$i.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function im(e,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,s!=null){for(var o in s)!s.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in i)o=i[c],i.hasOwnProperty(c)&&s[c]!==o&&nm(e,c,o)}else for(var h in i)i.hasOwnProperty(h)&&nm(e,h,i[h])}function tf(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),hx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Jl(e){return hx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var ef=null;function nf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ls=null,us=null;function am(e){var i=Ki(e);if(i&&(e=i.stateNode)){var s=e[Rn]||null;t:switch(e=i.stateNode,i.type){case"input":if(Ji(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Ze(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var o=s[i];if(o!==e&&o.form===e.form){var c=o[Rn]||null;if(!c)throw Error(a(90));Ji(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(i=0;i<s.length;i++)o=s[i],o.form===e.form&&Ae(o)}break t;case"textarea":Mn(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&mn(e,!!s.multiple,i,!1)}}}var af=!1;function rm(e,i,s){if(af)return e(i,s);af=!0;try{var o=e(i);return o}finally{if(af=!1,(ls!==null||us!==null)&&(Iu(),ls&&(i=ls,e=us,us=ls=null,am(i),e)))for(i=0;i<e.length;i++)am(e[i])}}function Ro(e,i){var s=e.stateNode;if(s===null)return null;var o=s[Rn]||null;if(o===null)return null;s=o[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var ta=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rf=!1;if(ta)try{var Co={};Object.defineProperty(Co,"passive",{get:function(){rf=!0}}),window.addEventListener("test",Co,Co),window.removeEventListener("test",Co,Co)}catch{rf=!1}var Na=null,sf=null,$l=null;function sm(){if($l)return $l;var e,i=sf,s=i.length,o,c="value"in Na?Na.value:Na.textContent,h=c.length;for(e=0;e<s&&i[e]===c[e];e++);var S=s-e;for(o=1;o<=S&&i[s-o]===c[h-o];o++);return $l=c.slice(e,1<o?1-o:void 0)}function tu(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function eu(){return!0}function om(){return!1}function jn(e){function i(s,o,c,h,S){this._reactName=s,this._targetInst=c,this.type=o,this.nativeEvent=h,this.target=S,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(s=e[A],this[A]=s?s(h):h[A]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?eu:om,this.isPropagationStopped=om,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=eu)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=eu)},persist:function(){},isPersistent:eu}),i}var Tr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nu=jn(Tr),wo=g({},Tr,{view:0,detail:0}),dx=jn(wo),of,lf,Do,iu=g({},wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Do&&(Do&&e.type==="mousemove"?(of=e.screenX-Do.screenX,lf=e.screenY-Do.screenY):lf=of=0,Do=e),of)},movementY:function(e){return"movementY"in e?e.movementY:lf}}),lm=jn(iu),px=g({},iu,{dataTransfer:0}),mx=jn(px),gx=g({},wo,{relatedTarget:0}),uf=jn(gx),_x=g({},Tr,{animationName:0,elapsedTime:0,pseudoElement:0}),vx=jn(_x),yx=g({},Tr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xx=jn(yx),Sx=g({},Tr,{data:0}),um=jn(Sx),Mx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ex={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bx(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=Tx[e])?!!i[e]:!1}function cf(){return bx}var Ax=g({},wo,{key:function(e){if(e.key){var i=Mx[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=tu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ex[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cf,charCode:function(e){return e.type==="keypress"?tu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?tu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Rx=jn(Ax),Cx=g({},iu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cm=jn(Cx),wx=g({},wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cf}),Dx=jn(wx),Ux=g({},Tr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lx=jn(Ux),Nx=g({},iu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ox=jn(Nx),Px=g({},Tr,{newState:0,oldState:0}),zx=jn(Px),Ix=[9,13,27,32],ff=ta&&"CompositionEvent"in window,Uo=null;ta&&"documentMode"in document&&(Uo=document.documentMode);var Bx=ta&&"TextEvent"in window&&!Uo,fm=ta&&(!ff||Uo&&8<Uo&&11>=Uo),hm=" ",dm=!1;function pm(e,i){switch(e){case"keyup":return Ix.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var cs=!1;function Fx(e,i){switch(e){case"compositionend":return mm(i);case"keypress":return i.which!==32?null:(dm=!0,hm);case"textInput":return e=i.data,e===hm&&dm?null:e;default:return null}}function Hx(e,i){if(cs)return e==="compositionend"||!ff&&pm(e,i)?(e=sm(),$l=sf=Na=null,cs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return fm&&i.locale!=="ko"?null:i.data;default:return null}}var Gx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gm(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Gx[e.type]:i==="textarea"}function _m(e,i,s,o){ls?us?us.push(o):us=[o]:ls=o,i=ku(i,"onChange"),0<i.length&&(s=new nu("onChange","change",null,s,o),e.push({event:s,listeners:i}))}var Lo=null,No=null;function Vx(e){Q_(e,0)}function au(e){var i=Er(e);if(Ae(i))return e}function vm(e,i){if(e==="change")return i}var ym=!1;if(ta){var hf;if(ta){var df="oninput"in document;if(!df){var xm=document.createElement("div");xm.setAttribute("oninput","return;"),df=typeof xm.oninput=="function"}hf=df}else hf=!1;ym=hf&&(!document.documentMode||9<document.documentMode)}function Sm(){Lo&&(Lo.detachEvent("onpropertychange",Mm),No=Lo=null)}function Mm(e){if(e.propertyName==="value"&&au(No)){var i=[];_m(i,No,e,nf(e)),rm(Vx,i)}}function kx(e,i,s){e==="focusin"?(Sm(),Lo=i,No=s,Lo.attachEvent("onpropertychange",Mm)):e==="focusout"&&Sm()}function Xx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return au(No)}function Wx(e,i){if(e==="click")return au(i)}function qx(e,i){if(e==="input"||e==="change")return au(i)}function Yx(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var ei=typeof Object.is=="function"?Object.is:Yx;function Oo(e,i){if(ei(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),o=Object.keys(i);if(s.length!==o.length)return!1;for(o=0;o<s.length;o++){var c=s[o];if(!Pe.call(i,c)||!ei(e[c],i[c]))return!1}return!0}function Em(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Tm(e,i){var s=Em(e);e=0;for(var o;s;){if(s.nodeType===3){if(o=e+s.textContent.length,e<=i&&o>=i)return{node:s,offset:i-e};e=o}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=Em(s)}}function bm(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?bm(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Am(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=Ln(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=Ln(e.document)}return i}function pf(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var jx=ta&&"documentMode"in document&&11>=document.documentMode,fs=null,mf=null,Po=null,gf=!1;function Rm(e,i,s){var o=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;gf||fs==null||fs!==Ln(o)||(o=fs,"selectionStart"in o&&pf(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Po&&Oo(Po,o)||(Po=o,o=ku(mf,"onSelect"),0<o.length&&(i=new nu("onSelect","select",null,i,s),e.push({event:i,listeners:o}),i.target=fs)))}function br(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var hs={animationend:br("Animation","AnimationEnd"),animationiteration:br("Animation","AnimationIteration"),animationstart:br("Animation","AnimationStart"),transitionrun:br("Transition","TransitionRun"),transitionstart:br("Transition","TransitionStart"),transitioncancel:br("Transition","TransitionCancel"),transitionend:br("Transition","TransitionEnd")},_f={},Cm={};ta&&(Cm=document.createElement("div").style,"AnimationEvent"in window||(delete hs.animationend.animation,delete hs.animationiteration.animation,delete hs.animationstart.animation),"TransitionEvent"in window||delete hs.transitionend.transition);function Ar(e){if(_f[e])return _f[e];if(!hs[e])return e;var i=hs[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in Cm)return _f[e]=i[s];return e}var wm=Ar("animationend"),Dm=Ar("animationiteration"),Um=Ar("animationstart"),Zx=Ar("transitionrun"),Kx=Ar("transitionstart"),Qx=Ar("transitioncancel"),Lm=Ar("transitionend"),Nm=new Map,vf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vf.push("scrollEnd");function Ei(e,i){Nm.set(e,i),Qi(i,[e])}var Om=new WeakMap;function ci(e,i){if(typeof e=="object"&&e!==null){var s=Om.get(e);return s!==void 0?s:(i={value:e,source:i,stack:je(i)},Om.set(e,i),i)}return{value:e,source:i,stack:je(i)}}var fi=[],ds=0,yf=0;function ru(){for(var e=ds,i=yf=ds=0;i<e;){var s=fi[i];fi[i++]=null;var o=fi[i];fi[i++]=null;var c=fi[i];fi[i++]=null;var h=fi[i];if(fi[i++]=null,o!==null&&c!==null){var S=o.pending;S===null?c.next=c:(c.next=S.next,S.next=c),o.pending=c}h!==0&&Pm(s,c,h)}}function su(e,i,s,o){fi[ds++]=e,fi[ds++]=i,fi[ds++]=s,fi[ds++]=o,yf|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function xf(e,i,s,o){return su(e,i,s,o),ou(e)}function ps(e,i){return su(e,null,null,i),ou(e)}function Pm(e,i,s){e.lanes|=s;var o=e.alternate;o!==null&&(o.lanes|=s);for(var c=!1,h=e.return;h!==null;)h.childLanes|=s,o=h.alternate,o!==null&&(o.childLanes|=s),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(c=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,c&&i!==null&&(c=31-Pt(s),e=h.hiddenUpdates,o=e[c],o===null?e[c]=[i]:o.push(i),i.lane=s|536870912),h):null}function ou(e){if(50<sl)throw sl=0,Ah=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var ms={};function Jx(e,i,s,o){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(e,i,s,o){return new Jx(e,i,s,o)}function Sf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ea(e,i){var s=e.alternate;return s===null?(s=ni(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function zm(e,i){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function lu(e,i,s,o,c,h){var S=0;if(o=e,typeof e=="function")Sf(e)&&(S=1);else if(typeof e=="string")S=tM(e,s,K.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case w:return e=ni(31,s,i,c),e.elementType=w,e.lanes=h,e;case E:return Rr(s.children,c,h,i);case b:S=8,c|=24;break;case x:return e=ni(12,s,i,c|2),e.elementType=x,e.lanes=h,e;case F:return e=ni(13,s,i,c),e.elementType=F,e.lanes=h,e;case B:return e=ni(19,s,i,c),e.elementType=B,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case y:case U:S=10;break t;case N:S=9;break t;case D:S=11;break t;case H:S=14;break t;case X:S=16,o=null;break t}S=29,s=Error(a(130,e===null?"null":typeof e,"")),o=null}return i=ni(S,s,i,c),i.elementType=e,i.type=o,i.lanes=h,i}function Rr(e,i,s,o){return e=ni(7,e,o,i),e.lanes=s,e}function Mf(e,i,s){return e=ni(6,e,null,i),e.lanes=s,e}function Ef(e,i,s){return i=ni(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var gs=[],_s=0,uu=null,cu=0,hi=[],di=0,Cr=null,na=1,ia="";function wr(e,i){gs[_s++]=cu,gs[_s++]=uu,uu=e,cu=i}function Im(e,i,s){hi[di++]=na,hi[di++]=ia,hi[di++]=Cr,Cr=e;var o=na;e=ia;var c=32-Pt(o)-1;o&=~(1<<c),s+=1;var h=32-Pt(i)+c;if(30<h){var S=c-c%5;h=(o&(1<<S)-1).toString(32),o>>=S,c-=S,na=1<<32-Pt(i)+c|s<<c|o,ia=h+e}else na=1<<h|s<<c|o,ia=e}function Tf(e){e.return!==null&&(wr(e,1),Im(e,1,0))}function bf(e){for(;e===uu;)uu=gs[--_s],gs[_s]=null,cu=gs[--_s],gs[_s]=null;for(;e===Cr;)Cr=hi[--di],hi[di]=null,ia=hi[--di],hi[di]=null,na=hi[--di],hi[di]=null}var Hn=null,nn=null,Oe=!1,Dr=null,Ii=!1,Af=Error(a(519));function Ur(e){var i=Error(a(418,""));throw Bo(ci(i,e)),Af}function Bm(e){var i=e.stateNode,s=e.type,o=e.memoizedProps;switch(i[pn]=e,i[Rn]=o,s){case"dialog":Me("cancel",i),Me("close",i);break;case"iframe":case"object":case"embed":Me("load",i);break;case"video":case"audio":for(s=0;s<ll.length;s++)Me(ll[s],i);break;case"source":Me("error",i);break;case"img":case"image":case"link":Me("error",i),Me("load",i);break;case"details":Me("toggle",i);break;case"input":Me("invalid",i),qe(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),en(i);break;case"select":Me("invalid",i);break;case"textarea":Me("invalid",i),Cn(i,o.value,o.defaultValue,o.children),en(i)}s=o.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||o.suppressHydrationWarning===!0||ev(i.textContent,s)?(o.popover!=null&&(Me("beforetoggle",i),Me("toggle",i)),o.onScroll!=null&&Me("scroll",i),o.onScrollEnd!=null&&Me("scrollend",i),o.onClick!=null&&(i.onclick=Xu),i=!0):i=!1,i||Ur(e)}function Fm(e){for(Hn=e.return;Hn;)switch(Hn.tag){case 5:case 13:Ii=!1;return;case 27:case 3:Ii=!0;return;default:Hn=Hn.return}}function zo(e){if(e!==Hn)return!1;if(!Oe)return Fm(e),Oe=!0,!1;var i=e.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||Vh(e.type,e.memoizedProps)),s=!s),s&&nn&&Ur(e),Fm(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(s=e.data,s==="/$"){if(i===0){nn=bi(e.nextSibling);break t}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++;e=e.nextSibling}nn=null}}else i===27?(i=nn,Za(e.type)?(e=qh,qh=null,nn=e):nn=i):nn=Hn?bi(e.stateNode.nextSibling):null;return!0}function Io(){nn=Hn=null,Oe=!1}function Hm(){var e=Dr;return e!==null&&(Qn===null?Qn=e:Qn.push.apply(Qn,e),Dr=null),e}function Bo(e){Dr===null?Dr=[e]:Dr.push(e)}var Rf=J(null),Lr=null,aa=null;function Oa(e,i,s){xt(Rf,i._currentValue),i._currentValue=s}function ra(e){e._currentValue=Rf.current,yt(Rf)}function Cf(e,i,s){for(;e!==null;){var o=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),e===s)break;e=e.return}}function wf(e,i,s,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var h=c.dependencies;if(h!==null){var S=c.child;h=h.firstContext;t:for(;h!==null;){var A=h;h=c;for(var z=0;z<i.length;z++)if(A.context===i[z]){h.lanes|=s,A=h.alternate,A!==null&&(A.lanes|=s),Cf(h.return,s,e),o||(S=null);break t}h=A.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(a(341));S.lanes|=s,h=S.alternate,h!==null&&(h.lanes|=s),Cf(S,s,e),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===e){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function Fo(e,i,s,o){e=null;for(var c=i,h=!1;c!==null;){if(!h){if((c.flags&524288)!==0)h=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(a(387));if(S=S.memoizedProps,S!==null){var A=c.type;ei(c.pendingProps.value,S.value)||(e!==null?e.push(A):e=[A])}}else if(c===Rt.current){if(S=c.alternate,S===null)throw Error(a(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(pl):e=[pl])}c=c.return}e!==null&&wf(i,e,s,o),i.flags|=262144}function fu(e){for(e=e.firstContext;e!==null;){if(!ei(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Nr(e){Lr=e,aa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function On(e){return Gm(Lr,e)}function hu(e,i){return Lr===null&&Nr(e),Gm(e,i)}function Gm(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},aa===null){if(e===null)throw Error(a(308));aa=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else aa=aa.next=i;return s}var $x=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,o){e.push(o)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},tS=r.unstable_scheduleCallback,eS=r.unstable_NormalPriority,gn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Df(){return{controller:new $x,data:new Map,refCount:0}}function Ho(e){e.refCount--,e.refCount===0&&tS(eS,function(){e.controller.abort()})}var Go=null,Uf=0,vs=0,ys=null;function nS(e,i){if(Go===null){var s=Go=[];Uf=0,vs=Nh(),ys={status:"pending",value:void 0,then:function(o){s.push(o)}}}return Uf++,i.then(Vm,Vm),i}function Vm(){if(--Uf===0&&Go!==null){ys!==null&&(ys.status="fulfilled");var e=Go;Go=null,vs=0,ys=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function iS(e,i){var s=[],o={status:"pending",value:null,reason:null,then:function(c){s.push(c)}};return e.then(function(){o.status="fulfilled",o.value=i;for(var c=0;c<s.length;c++)(0,s[c])(i)},function(c){for(o.status="rejected",o.reason=c,c=0;c<s.length;c++)(0,s[c])(void 0)}),o}var km=I.S;I.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&nS(e,i),km!==null&&km(e,i)};var Or=J(null);function Lf(){var e=Or.current;return e!==null?e:Ke.pooledCache}function du(e,i){i===null?xt(Or,Or.current):xt(Or,i.pool)}function Xm(){var e=Lf();return e===null?null:{parent:gn._currentValue,pool:e}}var Vo=Error(a(460)),Wm=Error(a(474)),pu=Error(a(542)),Nf={then:function(){}};function qm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function mu(){}function Ym(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(mu,mu),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Zm(e),e;default:if(typeof i.status=="string")i.then(mu,mu);else{if(e=Ke,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(o){if(i.status==="pending"){var c=i;c.status="fulfilled",c.value=o}},function(o){if(i.status==="pending"){var c=i;c.status="rejected",c.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Zm(e),e}throw ko=i,Vo}}var ko=null;function jm(){if(ko===null)throw Error(a(459));var e=ko;return ko=null,e}function Zm(e){if(e===Vo||e===pu)throw Error(a(483))}var Pa=!1;function Of(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Pf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ia(e,i,s){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ie&2)!==0){var c=o.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),o.pending=i,i=ou(e),Pm(e,null,s),i}return su(e,o,i,s),ou(e)}function Xo(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var o=i.lanes;o&=e.pendingLanes,s|=o,i.lanes=s,Vt(e,s)}}function zf(e,i){var s=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,s===o)){var c=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var S={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};h===null?c=h=S:h=h.next=S,s=s.next}while(s!==null);h===null?c=h=i:h=h.next=i}else c=h=i;s={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var If=!1;function Wo(){if(If){var e=ys;if(e!==null)throw e}}function qo(e,i,s,o){If=!1;var c=e.updateQueue;Pa=!1;var h=c.firstBaseUpdate,S=c.lastBaseUpdate,A=c.shared.pending;if(A!==null){c.shared.pending=null;var z=A,$=z.next;z.next=null,S===null?h=$:S.next=$,S=z;var ct=e.alternate;ct!==null&&(ct=ct.updateQueue,A=ct.lastBaseUpdate,A!==S&&(A===null?ct.firstBaseUpdate=$:A.next=$,ct.lastBaseUpdate=z))}if(h!==null){var _t=c.baseState;S=0,ct=$=z=null,A=h;do{var nt=A.lane&-536870913,it=nt!==A.lane;if(it?(be&nt)===nt:(o&nt)===nt){nt!==0&&nt===vs&&(If=!0),ct!==null&&(ct=ct.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var ie=e,te=A;nt=i;var Ve=s;switch(te.tag){case 1:if(ie=te.payload,typeof ie=="function"){_t=ie.call(Ve,_t,nt);break t}_t=ie;break t;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=te.payload,nt=typeof ie=="function"?ie.call(Ve,_t,nt):ie,nt==null)break t;_t=g({},_t,nt);break t;case 2:Pa=!0}}nt=A.callback,nt!==null&&(e.flags|=64,it&&(e.flags|=8192),it=c.callbacks,it===null?c.callbacks=[nt]:it.push(nt))}else it={lane:nt,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ct===null?($=ct=it,z=_t):ct=ct.next=it,S|=nt;if(A=A.next,A===null){if(A=c.shared.pending,A===null)break;it=A,A=it.next,it.next=null,c.lastBaseUpdate=it,c.shared.pending=null}}while(!0);ct===null&&(z=_t),c.baseState=z,c.firstBaseUpdate=$,c.lastBaseUpdate=ct,h===null&&(c.shared.lanes=0),Wa|=S,e.lanes=S,e.memoizedState=_t}}function Km(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function Qm(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)Km(s[e],i)}var xs=J(null),gu=J(0);function Jm(e,i){e=ha,xt(gu,e),xt(xs,i),ha=e|i.baseLanes}function Bf(){xt(gu,ha),xt(xs,xs.current)}function Ff(){ha=gu.current,yt(xs),yt(gu)}var Ba=0,ge=null,He=null,cn=null,_u=!1,Ss=!1,Pr=!1,vu=0,Yo=0,Ms=null,aS=0;function sn(){throw Error(a(321))}function Hf(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!ei(e[s],i[s]))return!1;return!0}function Gf(e,i,s,o,c,h){return Ba=h,ge=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,I.H=e===null||e.memoizedState===null?Pg:zg,Pr=!1,h=s(o,c),Pr=!1,Ss&&(h=tg(i,s,o,c)),$m(e),h}function $m(e){I.H=Tu;var i=He!==null&&He.next!==null;if(Ba=0,cn=He=ge=null,_u=!1,Yo=0,Ms=null,i)throw Error(a(300));e===null||En||(e=e.dependencies,e!==null&&fu(e)&&(En=!0))}function tg(e,i,s,o){ge=e;var c=0;do{if(Ss&&(Ms=null),Yo=0,Ss=!1,25<=c)throw Error(a(301));if(c+=1,cn=He=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}I.H=fS,h=i(s,o)}while(Ss);return h}function rS(){var e=I.H,i=e.useState()[0];return i=typeof i.then=="function"?jo(i):i,e=e.useState()[0],(He!==null?He.memoizedState:null)!==e&&(ge.flags|=1024),i}function Vf(){var e=vu!==0;return vu=0,e}function kf(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function Xf(e){if(_u){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}_u=!1}Ba=0,cn=He=ge=null,Ss=!1,Yo=vu=0,Ms=null}function Zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?ge.memoizedState=cn=e:cn=cn.next=e,cn}function fn(){if(He===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var i=cn===null?ge.memoizedState:cn.next;if(i!==null)cn=i,He=e;else{if(e===null)throw ge.alternate===null?Error(a(467)):Error(a(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},cn===null?ge.memoizedState=cn=e:cn=cn.next=e}return cn}function Wf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function jo(e){var i=Yo;return Yo+=1,Ms===null&&(Ms=[]),e=Ym(Ms,e,i),i=ge,(cn===null?i.memoizedState:cn.next)===null&&(i=i.alternate,I.H=i===null||i.memoizedState===null?Pg:zg),e}function yu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return jo(e);if(e.$$typeof===U)return On(e)}throw Error(a(438,String(e)))}function qf(e){var i=null,s=ge.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var o=ge.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(c){return c.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Wf(),ge.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),o=0;o<e;o++)s[o]=C;return i.index++,s}function sa(e,i){return typeof i=="function"?i(e):i}function xu(e){var i=fn();return Yf(i,He,e)}function Yf(e,i,s){var o=e.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=s;var c=e.baseQueue,h=o.pending;if(h!==null){if(c!==null){var S=c.next;c.next=h.next,h.next=S}i.baseQueue=c=h,o.pending=null}if(h=e.baseState,c===null)e.memoizedState=h;else{i=c.next;var A=S=null,z=null,$=i,ct=!1;do{var _t=$.lane&-536870913;if(_t!==$.lane?(be&_t)===_t:(Ba&_t)===_t){var nt=$.revertLane;if(nt===0)z!==null&&(z=z.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),_t===vs&&(ct=!0);else if((Ba&nt)===nt){$=$.next,nt===vs&&(ct=!0);continue}else _t={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},z===null?(A=z=_t,S=h):z=z.next=_t,ge.lanes|=nt,Wa|=nt;_t=$.action,Pr&&s(h,_t),h=$.hasEagerState?$.eagerState:s(h,_t)}else nt={lane:_t,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},z===null?(A=z=nt,S=h):z=z.next=nt,ge.lanes|=_t,Wa|=_t;$=$.next}while($!==null&&$!==i);if(z===null?S=h:z.next=A,!ei(h,e.memoizedState)&&(En=!0,ct&&(s=ys,s!==null)))throw s;e.memoizedState=h,e.baseState=S,e.baseQueue=z,o.lastRenderedState=h}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function jf(e){var i=fn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var o=s.dispatch,c=s.pending,h=i.memoizedState;if(c!==null){s.pending=null;var S=c=c.next;do h=e(h,S.action),S=S.next;while(S!==c);ei(h,i.memoizedState)||(En=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),s.lastRenderedState=h}return[h,o]}function eg(e,i,s){var o=ge,c=fn(),h=Oe;if(h){if(s===void 0)throw Error(a(407));s=s()}else s=i();var S=!ei((He||c).memoizedState,s);S&&(c.memoizedState=s,En=!0),c=c.queue;var A=ag.bind(null,o,c,e);if(Zo(2048,8,A,[e]),c.getSnapshot!==i||S||cn!==null&&cn.memoizedState.tag&1){if(o.flags|=2048,Es(9,Su(),ig.bind(null,o,c,s,i),null),Ke===null)throw Error(a(349));h||(Ba&124)!==0||ng(o,i,s)}return s}function ng(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=ge.updateQueue,i===null?(i=Wf(),ge.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function ig(e,i,s,o){i.value=s,i.getSnapshot=o,rg(i)&&sg(e)}function ag(e,i,s){return s(function(){rg(i)&&sg(e)})}function rg(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!ei(e,s)}catch{return!0}}function sg(e){var i=ps(e,2);i!==null&&oi(i,e,2)}function Zf(e){var i=Zn();if(typeof e=="function"){var s=e;if(e=s(),Pr){lt(!0);try{s()}finally{lt(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:e},i}function og(e,i,s,o){return e.baseState=s,Yf(e,He,typeof o=="function"?o:sa)}function sS(e,i,s,o,c){if(Eu(e))throw Error(a(485));if(e=i.action,e!==null){var h={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){h.listeners.push(S)}};I.T!==null?s(!0):h.isTransition=!1,o(h),s=i.pending,s===null?(h.next=i.pending=h,lg(i,h)):(h.next=s.next,i.pending=s.next=h)}}function lg(e,i){var s=i.action,o=i.payload,c=e.state;if(i.isTransition){var h=I.T,S={};I.T=S;try{var A=s(c,o),z=I.S;z!==null&&z(S,A),ug(e,i,A)}catch($){Kf(e,i,$)}finally{I.T=h}}else try{h=s(c,o),ug(e,i,h)}catch($){Kf(e,i,$)}}function ug(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(o){cg(e,i,o)},function(o){return Kf(e,i,o)}):cg(e,i,s)}function cg(e,i,s){i.status="fulfilled",i.value=s,fg(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,lg(e,s)))}function Kf(e,i,s){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=s,fg(i),i=i.next;while(i!==o)}e.action=null}function fg(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function hg(e,i){return i}function dg(e,i){if(Oe){var s=Ke.formState;if(s!==null){t:{var o=ge;if(Oe){if(nn){e:{for(var c=nn,h=Ii;c.nodeType!==8;){if(!h){c=null;break e}if(c=bi(c.nextSibling),c===null){c=null;break e}}h=c.data,c=h==="F!"||h==="F"?c:null}if(c){nn=bi(c.nextSibling),o=c.data==="F!";break t}}Ur(o)}o=!1}o&&(i=s[0])}}return s=Zn(),s.memoizedState=s.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hg,lastRenderedState:i},s.queue=o,s=Lg.bind(null,ge,o),o.dispatch=s,o=Zf(!1),h=eh.bind(null,ge,!1,o.queue),o=Zn(),c={state:i,dispatch:null,action:e,pending:null},o.queue=c,s=sS.bind(null,ge,c,h,s),c.dispatch=s,o.memoizedState=e,[i,s,!1]}function pg(e){var i=fn();return mg(i,He,e)}function mg(e,i,s){if(i=Yf(e,i,hg)[0],e=xu(sa)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=jo(i)}catch(S){throw S===Vo?pu:S}else o=i;i=fn();var c=i.queue,h=c.dispatch;return s!==i.memoizedState&&(ge.flags|=2048,Es(9,Su(),oS.bind(null,c,s),null)),[o,h,e]}function oS(e,i){e.action=i}function gg(e){var i=fn(),s=He;if(s!==null)return mg(i,s,e);fn(),i=i.memoizedState,s=fn();var o=s.queue.dispatch;return s.memoizedState=e,[i,o,!1]}function Es(e,i,s,o){return e={tag:e,create:s,deps:o,inst:i,next:null},i=ge.updateQueue,i===null&&(i=Wf(),ge.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(o=s.next,s.next=e,e.next=o,i.lastEffect=e),e}function Su(){return{destroy:void 0,resource:void 0}}function _g(){return fn().memoizedState}function Mu(e,i,s,o){var c=Zn();o=o===void 0?null:o,ge.flags|=e,c.memoizedState=Es(1|i,Su(),s,o)}function Zo(e,i,s,o){var c=fn();o=o===void 0?null:o;var h=c.memoizedState.inst;He!==null&&o!==null&&Hf(o,He.memoizedState.deps)?c.memoizedState=Es(i,h,s,o):(ge.flags|=e,c.memoizedState=Es(1|i,h,s,o))}function vg(e,i){Mu(8390656,8,e,i)}function yg(e,i){Zo(2048,8,e,i)}function xg(e,i){return Zo(4,2,e,i)}function Sg(e,i){return Zo(4,4,e,i)}function Mg(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Eg(e,i,s){s=s!=null?s.concat([e]):null,Zo(4,4,Mg.bind(null,i,e),s)}function Qf(){}function Tg(e,i){var s=fn();i=i===void 0?null:i;var o=s.memoizedState;return i!==null&&Hf(i,o[1])?o[0]:(s.memoizedState=[e,i],e)}function bg(e,i){var s=fn();i=i===void 0?null:i;var o=s.memoizedState;if(i!==null&&Hf(i,o[1]))return o[0];if(o=e(),Pr){lt(!0);try{e()}finally{lt(!1)}}return s.memoizedState=[o,i],o}function Jf(e,i,s){return s===void 0||(Ba&1073741824)!==0?e.memoizedState=i:(e.memoizedState=s,e=C_(),ge.lanes|=e,Wa|=e,s)}function Ag(e,i,s,o){return ei(s,i)?s:xs.current!==null?(e=Jf(e,s,o),ei(e,i)||(En=!0),e):(Ba&42)===0?(En=!0,e.memoizedState=s):(e=C_(),ge.lanes|=e,Wa|=e,i)}function Rg(e,i,s,o,c){var h=Z.p;Z.p=h!==0&&8>h?h:8;var S=I.T,A={};I.T=A,eh(e,!1,i,s);try{var z=c(),$=I.S;if($!==null&&$(A,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var ct=iS(z,o);Ko(e,i,ct,si(e))}else Ko(e,i,o,si(e))}catch(_t){Ko(e,i,{then:function(){},status:"rejected",reason:_t},si())}finally{Z.p=h,I.T=S}}function lS(){}function $f(e,i,s,o){if(e.tag!==5)throw Error(a(476));var c=Cg(e).queue;Rg(e,c,i,q,s===null?lS:function(){return wg(e),s(o)})}function Cg(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:q},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function wg(e){var i=Cg(e).next.queue;Ko(e,i,{},si())}function th(){return On(pl)}function Dg(){return fn().memoizedState}function Ug(){return fn().memoizedState}function uS(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=si();e=za(s);var o=Ia(i,e,s);o!==null&&(oi(o,i,s),Xo(o,i,s)),i={cache:Df()},e.payload=i;return}i=i.return}}function cS(e,i,s){var o=si();s={lane:o,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},Eu(e)?Ng(i,s):(s=xf(e,i,s,o),s!==null&&(oi(s,e,o),Og(s,i,o)))}function Lg(e,i,s){var o=si();Ko(e,i,s,o)}function Ko(e,i,s,o){var c={lane:o,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(Eu(e))Ng(i,c);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var S=i.lastRenderedState,A=h(S,s);if(c.hasEagerState=!0,c.eagerState=A,ei(A,S))return su(e,i,c,0),Ke===null&&ru(),!1}catch{}finally{}if(s=xf(e,i,c,o),s!==null)return oi(s,e,o),Og(s,i,o),!0}return!1}function eh(e,i,s,o){if(o={lane:2,revertLane:Nh(),action:o,hasEagerState:!1,eagerState:null,next:null},Eu(e)){if(i)throw Error(a(479))}else i=xf(e,s,o,2),i!==null&&oi(i,e,2)}function Eu(e){var i=e.alternate;return e===ge||i!==null&&i===ge}function Ng(e,i){Ss=_u=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function Og(e,i,s){if((s&4194048)!==0){var o=i.lanes;o&=e.pendingLanes,s|=o,i.lanes=s,Vt(e,s)}}var Tu={readContext:On,use:yu,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn},Pg={readContext:On,use:yu,useCallback:function(e,i){return Zn().memoizedState=[e,i===void 0?null:i],e},useContext:On,useEffect:vg,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,Mu(4194308,4,Mg.bind(null,i,e),s)},useLayoutEffect:function(e,i){return Mu(4194308,4,e,i)},useInsertionEffect:function(e,i){Mu(4,2,e,i)},useMemo:function(e,i){var s=Zn();i=i===void 0?null:i;var o=e();if(Pr){lt(!0);try{e()}finally{lt(!1)}}return s.memoizedState=[o,i],o},useReducer:function(e,i,s){var o=Zn();if(s!==void 0){var c=s(i);if(Pr){lt(!0);try{s(i)}finally{lt(!1)}}}else c=i;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=cS.bind(null,ge,e),[o.memoizedState,e]},useRef:function(e){var i=Zn();return e={current:e},i.memoizedState=e},useState:function(e){e=Zf(e);var i=e.queue,s=Lg.bind(null,ge,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:Qf,useDeferredValue:function(e,i){var s=Zn();return Jf(s,e,i)},useTransition:function(){var e=Zf(!1);return e=Rg.bind(null,ge,e.queue,!0,!1),Zn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var o=ge,c=Zn();if(Oe){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),Ke===null)throw Error(a(349));(be&124)!==0||ng(o,i,s)}c.memoizedState=s;var h={value:s,getSnapshot:i};return c.queue=h,vg(ag.bind(null,o,h,e),[e]),o.flags|=2048,Es(9,Su(),ig.bind(null,o,h,s,i),null),s},useId:function(){var e=Zn(),i=Ke.identifierPrefix;if(Oe){var s=ia,o=na;s=(o&~(1<<32-Pt(o)-1)).toString(32)+s,i="«"+i+"R"+s,s=vu++,0<s&&(i+="H"+s.toString(32)),i+="»"}else s=aS++,i="«"+i+"r"+s.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:th,useFormState:dg,useActionState:dg,useOptimistic:function(e){var i=Zn();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=eh.bind(null,ge,!0,s),s.dispatch=i,[e,i]},useMemoCache:qf,useCacheRefresh:function(){return Zn().memoizedState=uS.bind(null,ge)}},zg={readContext:On,use:yu,useCallback:Tg,useContext:On,useEffect:yg,useImperativeHandle:Eg,useInsertionEffect:xg,useLayoutEffect:Sg,useMemo:bg,useReducer:xu,useRef:_g,useState:function(){return xu(sa)},useDebugValue:Qf,useDeferredValue:function(e,i){var s=fn();return Ag(s,He.memoizedState,e,i)},useTransition:function(){var e=xu(sa)[0],i=fn().memoizedState;return[typeof e=="boolean"?e:jo(e),i]},useSyncExternalStore:eg,useId:Dg,useHostTransitionStatus:th,useFormState:pg,useActionState:pg,useOptimistic:function(e,i){var s=fn();return og(s,He,e,i)},useMemoCache:qf,useCacheRefresh:Ug},fS={readContext:On,use:yu,useCallback:Tg,useContext:On,useEffect:yg,useImperativeHandle:Eg,useInsertionEffect:xg,useLayoutEffect:Sg,useMemo:bg,useReducer:jf,useRef:_g,useState:function(){return jf(sa)},useDebugValue:Qf,useDeferredValue:function(e,i){var s=fn();return He===null?Jf(s,e,i):Ag(s,He.memoizedState,e,i)},useTransition:function(){var e=jf(sa)[0],i=fn().memoizedState;return[typeof e=="boolean"?e:jo(e),i]},useSyncExternalStore:eg,useId:Dg,useHostTransitionStatus:th,useFormState:gg,useActionState:gg,useOptimistic:function(e,i){var s=fn();return He!==null?og(s,He,e,i):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:qf,useCacheRefresh:Ug},Ts=null,Qo=0;function bu(e){var i=Qo;return Qo+=1,Ts===null&&(Ts=[]),Ym(Ts,e,i)}function Jo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Au(e,i){throw i.$$typeof===_?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Ig(e){var i=e._init;return i(e._payload)}function Bg(e){function i(W,V){if(e){var Q=W.deletions;Q===null?(W.deletions=[V],W.flags|=16):Q.push(V)}}function s(W,V){if(!e)return null;for(;V!==null;)i(W,V),V=V.sibling;return null}function o(W){for(var V=new Map;W!==null;)W.key!==null?V.set(W.key,W):V.set(W.index,W),W=W.sibling;return V}function c(W,V){return W=ea(W,V),W.index=0,W.sibling=null,W}function h(W,V,Q){return W.index=Q,e?(Q=W.alternate,Q!==null?(Q=Q.index,Q<V?(W.flags|=67108866,V):Q):(W.flags|=67108866,V)):(W.flags|=1048576,V)}function S(W){return e&&W.alternate===null&&(W.flags|=67108866),W}function A(W,V,Q,dt){return V===null||V.tag!==6?(V=Mf(Q,W.mode,dt),V.return=W,V):(V=c(V,Q),V.return=W,V)}function z(W,V,Q,dt){var kt=Q.type;return kt===E?ct(W,V,Q.props.children,dt,Q.key):V!==null&&(V.elementType===kt||typeof kt=="object"&&kt!==null&&kt.$$typeof===X&&Ig(kt)===V.type)?(V=c(V,Q.props),Jo(V,Q),V.return=W,V):(V=lu(Q.type,Q.key,Q.props,null,W.mode,dt),Jo(V,Q),V.return=W,V)}function $(W,V,Q,dt){return V===null||V.tag!==4||V.stateNode.containerInfo!==Q.containerInfo||V.stateNode.implementation!==Q.implementation?(V=Ef(Q,W.mode,dt),V.return=W,V):(V=c(V,Q.children||[]),V.return=W,V)}function ct(W,V,Q,dt,kt){return V===null||V.tag!==7?(V=Rr(Q,W.mode,dt,kt),V.return=W,V):(V=c(V,Q),V.return=W,V)}function _t(W,V,Q){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Mf(""+V,W.mode,Q),V.return=W,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case v:return Q=lu(V.type,V.key,V.props,null,W.mode,Q),Jo(Q,V),Q.return=W,Q;case M:return V=Ef(V,W.mode,Q),V.return=W,V;case X:var dt=V._init;return V=dt(V._payload),_t(W,V,Q)}if(ut(V)||ot(V))return V=Rr(V,W.mode,Q,null),V.return=W,V;if(typeof V.then=="function")return _t(W,bu(V),Q);if(V.$$typeof===U)return _t(W,hu(W,V),Q);Au(W,V)}return null}function nt(W,V,Q,dt){var kt=V!==null?V.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return kt!==null?null:A(W,V,""+Q,dt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case v:return Q.key===kt?z(W,V,Q,dt):null;case M:return Q.key===kt?$(W,V,Q,dt):null;case X:return kt=Q._init,Q=kt(Q._payload),nt(W,V,Q,dt)}if(ut(Q)||ot(Q))return kt!==null?null:ct(W,V,Q,dt,null);if(typeof Q.then=="function")return nt(W,V,bu(Q),dt);if(Q.$$typeof===U)return nt(W,V,hu(W,Q),dt);Au(W,Q)}return null}function it(W,V,Q,dt,kt){if(typeof dt=="string"&&dt!==""||typeof dt=="number"||typeof dt=="bigint")return W=W.get(Q)||null,A(V,W,""+dt,kt);if(typeof dt=="object"&&dt!==null){switch(dt.$$typeof){case v:return W=W.get(dt.key===null?Q:dt.key)||null,z(V,W,dt,kt);case M:return W=W.get(dt.key===null?Q:dt.key)||null,$(V,W,dt,kt);case X:var ve=dt._init;return dt=ve(dt._payload),it(W,V,Q,dt,kt)}if(ut(dt)||ot(dt))return W=W.get(Q)||null,ct(V,W,dt,kt,null);if(typeof dt.then=="function")return it(W,V,Q,bu(dt),kt);if(dt.$$typeof===U)return it(W,V,Q,hu(V,dt),kt);Au(V,dt)}return null}function ie(W,V,Q,dt){for(var kt=null,ve=null,Yt=V,ne=V=0,bn=null;Yt!==null&&ne<Q.length;ne++){Yt.index>ne?(bn=Yt,Yt=null):bn=Yt.sibling;var Ce=nt(W,Yt,Q[ne],dt);if(Ce===null){Yt===null&&(Yt=bn);break}e&&Yt&&Ce.alternate===null&&i(W,Yt),V=h(Ce,V,ne),ve===null?kt=Ce:ve.sibling=Ce,ve=Ce,Yt=bn}if(ne===Q.length)return s(W,Yt),Oe&&wr(W,ne),kt;if(Yt===null){for(;ne<Q.length;ne++)Yt=_t(W,Q[ne],dt),Yt!==null&&(V=h(Yt,V,ne),ve===null?kt=Yt:ve.sibling=Yt,ve=Yt);return Oe&&wr(W,ne),kt}for(Yt=o(Yt);ne<Q.length;ne++)bn=it(Yt,W,ne,Q[ne],dt),bn!==null&&(e&&bn.alternate!==null&&Yt.delete(bn.key===null?ne:bn.key),V=h(bn,V,ne),ve===null?kt=bn:ve.sibling=bn,ve=bn);return e&&Yt.forEach(function(tr){return i(W,tr)}),Oe&&wr(W,ne),kt}function te(W,V,Q,dt){if(Q==null)throw Error(a(151));for(var kt=null,ve=null,Yt=V,ne=V=0,bn=null,Ce=Q.next();Yt!==null&&!Ce.done;ne++,Ce=Q.next()){Yt.index>ne?(bn=Yt,Yt=null):bn=Yt.sibling;var tr=nt(W,Yt,Ce.value,dt);if(tr===null){Yt===null&&(Yt=bn);break}e&&Yt&&tr.alternate===null&&i(W,Yt),V=h(tr,V,ne),ve===null?kt=tr:ve.sibling=tr,ve=tr,Yt=bn}if(Ce.done)return s(W,Yt),Oe&&wr(W,ne),kt;if(Yt===null){for(;!Ce.done;ne++,Ce=Q.next())Ce=_t(W,Ce.value,dt),Ce!==null&&(V=h(Ce,V,ne),ve===null?kt=Ce:ve.sibling=Ce,ve=Ce);return Oe&&wr(W,ne),kt}for(Yt=o(Yt);!Ce.done;ne++,Ce=Q.next())Ce=it(Yt,W,ne,Ce.value,dt),Ce!==null&&(e&&Ce.alternate!==null&&Yt.delete(Ce.key===null?ne:Ce.key),V=h(Ce,V,ne),ve===null?kt=Ce:ve.sibling=Ce,ve=Ce);return e&&Yt.forEach(function(hM){return i(W,hM)}),Oe&&wr(W,ne),kt}function Ve(W,V,Q,dt){if(typeof Q=="object"&&Q!==null&&Q.type===E&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case v:t:{for(var kt=Q.key;V!==null;){if(V.key===kt){if(kt=Q.type,kt===E){if(V.tag===7){s(W,V.sibling),dt=c(V,Q.props.children),dt.return=W,W=dt;break t}}else if(V.elementType===kt||typeof kt=="object"&&kt!==null&&kt.$$typeof===X&&Ig(kt)===V.type){s(W,V.sibling),dt=c(V,Q.props),Jo(dt,Q),dt.return=W,W=dt;break t}s(W,V);break}else i(W,V);V=V.sibling}Q.type===E?(dt=Rr(Q.props.children,W.mode,dt,Q.key),dt.return=W,W=dt):(dt=lu(Q.type,Q.key,Q.props,null,W.mode,dt),Jo(dt,Q),dt.return=W,W=dt)}return S(W);case M:t:{for(kt=Q.key;V!==null;){if(V.key===kt)if(V.tag===4&&V.stateNode.containerInfo===Q.containerInfo&&V.stateNode.implementation===Q.implementation){s(W,V.sibling),dt=c(V,Q.children||[]),dt.return=W,W=dt;break t}else{s(W,V);break}else i(W,V);V=V.sibling}dt=Ef(Q,W.mode,dt),dt.return=W,W=dt}return S(W);case X:return kt=Q._init,Q=kt(Q._payload),Ve(W,V,Q,dt)}if(ut(Q))return ie(W,V,Q,dt);if(ot(Q)){if(kt=ot(Q),typeof kt!="function")throw Error(a(150));return Q=kt.call(Q),te(W,V,Q,dt)}if(typeof Q.then=="function")return Ve(W,V,bu(Q),dt);if(Q.$$typeof===U)return Ve(W,V,hu(W,Q),dt);Au(W,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,V!==null&&V.tag===6?(s(W,V.sibling),dt=c(V,Q),dt.return=W,W=dt):(s(W,V),dt=Mf(Q,W.mode,dt),dt.return=W,W=dt),S(W)):s(W,V)}return function(W,V,Q,dt){try{Qo=0;var kt=Ve(W,V,Q,dt);return Ts=null,kt}catch(Yt){if(Yt===Vo||Yt===pu)throw Yt;var ve=ni(29,Yt,null,W.mode);return ve.lanes=dt,ve.return=W,ve}finally{}}}var bs=Bg(!0),Fg=Bg(!1),pi=J(null),Bi=null;function Fa(e){var i=e.alternate;xt(_n,_n.current&1),xt(pi,e),Bi===null&&(i===null||xs.current!==null||i.memoizedState!==null)&&(Bi=e)}function Hg(e){if(e.tag===22){if(xt(_n,_n.current),xt(pi,e),Bi===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(Bi=e)}}else Ha()}function Ha(){xt(_n,_n.current),xt(pi,pi.current)}function oa(e){yt(pi),Bi===e&&(Bi=null),yt(_n)}var _n=J(0);function Ru(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||Wh(s)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function nh(e,i,s,o){i=e.memoizedState,s=s(o,i),s=s==null?i:g({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var ih={enqueueSetState:function(e,i,s){e=e._reactInternals;var o=si(),c=za(o);c.payload=i,s!=null&&(c.callback=s),i=Ia(e,c,o),i!==null&&(oi(i,e,o),Xo(i,e,o))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var o=si(),c=za(o);c.tag=1,c.payload=i,s!=null&&(c.callback=s),i=Ia(e,c,o),i!==null&&(oi(i,e,o),Xo(i,e,o))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=si(),o=za(s);o.tag=2,i!=null&&(o.callback=i),i=Ia(e,o,s),i!==null&&(oi(i,e,s),Xo(i,e,s))}};function Gg(e,i,s,o,c,h,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,S):i.prototype&&i.prototype.isPureReactComponent?!Oo(s,o)||!Oo(c,h):!0}function Vg(e,i,s,o){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,o),i.state!==e&&ih.enqueueReplaceState(i,i.state,null)}function zr(e,i){var s=i;if("ref"in i){s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}if(e=e.defaultProps){s===i&&(s=g({},s));for(var c in e)s[c]===void 0&&(s[c]=e[c])}return s}var Cu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function kg(e){Cu(e)}function Xg(e){console.error(e)}function Wg(e){Cu(e)}function wu(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function qg(e,i,s){try{var o=e.onCaughtError;o(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function ah(e,i,s){return s=za(s),s.tag=3,s.payload={element:null},s.callback=function(){wu(e,i)},s}function Yg(e){return e=za(e),e.tag=3,e}function jg(e,i,s,o){var c=s.type.getDerivedStateFromError;if(typeof c=="function"){var h=o.value;e.payload=function(){return c(h)},e.callback=function(){qg(i,s,o)}}var S=s.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){qg(i,s,o),typeof c!="function"&&(qa===null?qa=new Set([this]):qa.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function hS(e,i,s,o,c){if(s.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=s.alternate,i!==null&&Fo(i,s,c,!0),s=pi.current,s!==null){switch(s.tag){case 13:return Bi===null?Ch():s.alternate===null&&an===0&&(an=3),s.flags&=-257,s.flags|=65536,s.lanes=c,o===Nf?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([o]):i.add(o),Dh(e,o,c)),!1;case 22:return s.flags|=65536,o===Nf?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([o]):s.add(o)),Dh(e,o,c)),!1}throw Error(a(435,s.tag))}return Dh(e,o,c),Ch(),!1}if(Oe)return i=pi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=c,o!==Af&&(e=Error(a(422),{cause:o}),Bo(ci(e,s)))):(o!==Af&&(i=Error(a(423),{cause:o}),Bo(ci(i,s))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=ci(o,s),c=ah(e.stateNode,o,c),zf(e,c),an!==4&&(an=2)),!1;var h=Error(a(520),{cause:o});if(h=ci(h,s),rl===null?rl=[h]:rl.push(h),an!==4&&(an=2),i===null)return!0;o=ci(o,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=c&-c,s.lanes|=e,e=ah(s.stateNode,o,e),zf(s,e),!1;case 1:if(i=s.type,h=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(qa===null||!qa.has(h))))return s.flags|=65536,c&=-c,s.lanes|=c,c=Yg(c),jg(c,e,s,o),zf(s,c),!1}s=s.return}while(s!==null);return!1}var Zg=Error(a(461)),En=!1;function wn(e,i,s,o){i.child=e===null?Fg(i,null,s,o):bs(i,e.child,s,o)}function Kg(e,i,s,o,c){s=s.render;var h=i.ref;if("ref"in o){var S={};for(var A in o)A!=="ref"&&(S[A]=o[A])}else S=o;return Nr(i),o=Gf(e,i,s,S,h,c),A=Vf(),e!==null&&!En?(kf(e,i,c),la(e,i,c)):(Oe&&A&&Tf(i),i.flags|=1,wn(e,i,o,c),i.child)}function Qg(e,i,s,o,c){if(e===null){var h=s.type;return typeof h=="function"&&!Sf(h)&&h.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=h,Jg(e,i,h,o,c)):(e=lu(s.type,null,o,i,i.mode,c),e.ref=i.ref,e.return=i,i.child=e)}if(h=e.child,!hh(e,c)){var S=h.memoizedProps;if(s=s.compare,s=s!==null?s:Oo,s(S,o)&&e.ref===i.ref)return la(e,i,c)}return i.flags|=1,e=ea(h,o),e.ref=i.ref,e.return=i,i.child=e}function Jg(e,i,s,o,c){if(e!==null){var h=e.memoizedProps;if(Oo(h,o)&&e.ref===i.ref)if(En=!1,i.pendingProps=o=h,hh(e,c))(e.flags&131072)!==0&&(En=!0);else return i.lanes=e.lanes,la(e,i,c)}return rh(e,i,s,o,c)}function $g(e,i,s){var o=i.pendingProps,c=o.children,h=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((i.flags&128)!==0){if(o=h!==null?h.baseLanes|s:s,e!==null){for(c=i.child=e.child,h=0;c!==null;)h=h|c.lanes|c.childLanes,c=c.sibling;i.childLanes=h&~o}else i.childLanes=0,i.child=null;return t_(e,i,o,s)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&du(i,h!==null?h.cachePool:null),h!==null?Jm(i,h):Bf(),Hg(i);else return i.lanes=i.childLanes=536870912,t_(e,i,h!==null?h.baseLanes|s:s,s)}else h!==null?(du(i,h.cachePool),Jm(i,h),Ha(),i.memoizedState=null):(e!==null&&du(i,null),Bf(),Ha());return wn(e,i,c,s),i.child}function t_(e,i,s,o){var c=Lf();return c=c===null?null:{parent:gn._currentValue,pool:c},i.memoizedState={baseLanes:s,cachePool:c},e!==null&&du(i,null),Bf(),Hg(i),e!==null&&Fo(e,i,o,!0),null}function Du(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(i.flags|=4194816)}}function rh(e,i,s,o,c){return Nr(i),s=Gf(e,i,s,o,void 0,c),o=Vf(),e!==null&&!En?(kf(e,i,c),la(e,i,c)):(Oe&&o&&Tf(i),i.flags|=1,wn(e,i,s,c),i.child)}function e_(e,i,s,o,c,h){return Nr(i),i.updateQueue=null,s=tg(i,o,s,c),$m(e),o=Vf(),e!==null&&!En?(kf(e,i,h),la(e,i,h)):(Oe&&o&&Tf(i),i.flags|=1,wn(e,i,s,h),i.child)}function n_(e,i,s,o,c){if(Nr(i),i.stateNode===null){var h=ms,S=s.contextType;typeof S=="object"&&S!==null&&(h=On(S)),h=new s(o,h),i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=ih,i.stateNode=h,h._reactInternals=i,h=i.stateNode,h.props=o,h.state=i.memoizedState,h.refs={},Of(i),S=s.contextType,h.context=typeof S=="object"&&S!==null?On(S):ms,h.state=i.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&(nh(i,s,S,o),h.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(S=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),S!==h.state&&ih.enqueueReplaceState(h,h.state,null),qo(i,o,h,c),Wo(),h.state=i.memoizedState),typeof h.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(e===null){h=i.stateNode;var A=i.memoizedProps,z=zr(s,A);h.props=z;var $=h.context,ct=s.contextType;S=ms,typeof ct=="object"&&ct!==null&&(S=On(ct));var _t=s.getDerivedStateFromProps;ct=typeof _t=="function"||typeof h.getSnapshotBeforeUpdate=="function",A=i.pendingProps!==A,ct||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(A||$!==S)&&Vg(i,h,o,S),Pa=!1;var nt=i.memoizedState;h.state=nt,qo(i,o,h,c),Wo(),$=i.memoizedState,A||nt!==$||Pa?(typeof _t=="function"&&(nh(i,s,_t,o),$=i.memoizedState),(z=Pa||Gg(i,s,z,o,nt,$,S))?(ct||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(i.flags|=4194308)):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=$),h.props=o,h.state=$,h.context=S,o=z):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{h=i.stateNode,Pf(e,i),S=i.memoizedProps,ct=zr(s,S),h.props=ct,_t=i.pendingProps,nt=h.context,$=s.contextType,z=ms,typeof $=="object"&&$!==null&&(z=On($)),A=s.getDerivedStateFromProps,($=typeof A=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(S!==_t||nt!==z)&&Vg(i,h,o,z),Pa=!1,nt=i.memoizedState,h.state=nt,qo(i,o,h,c),Wo();var it=i.memoizedState;S!==_t||nt!==it||Pa||e!==null&&e.dependencies!==null&&fu(e.dependencies)?(typeof A=="function"&&(nh(i,s,A,o),it=i.memoizedState),(ct=Pa||Gg(i,s,ct,o,nt,it,z)||e!==null&&e.dependencies!==null&&fu(e.dependencies))?($||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,it,z),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,it,z)),typeof h.componentDidUpdate=="function"&&(i.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof h.componentDidUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=it),h.props=o,h.state=it,h.context=z,o=ct):(typeof h.componentDidUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(i.flags|=1024),o=!1)}return h=o,Du(e,i),o=(i.flags&128)!==0,h||o?(h=i.stateNode,s=o&&typeof s.getDerivedStateFromError!="function"?null:h.render(),i.flags|=1,e!==null&&o?(i.child=bs(i,e.child,null,c),i.child=bs(i,null,s,c)):wn(e,i,s,c),i.memoizedState=h.state,e=i.child):e=la(e,i,c),e}function i_(e,i,s,o){return Io(),i.flags|=256,wn(e,i,s,o),i.child}var sh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function oh(e){return{baseLanes:e,cachePool:Xm()}}function lh(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=mi),e}function a_(e,i,s){var o=i.pendingProps,c=!1,h=(i.flags&128)!==0,S;if((S=h)||(S=e!==null&&e.memoizedState===null?!1:(_n.current&2)!==0),S&&(c=!0,i.flags&=-129),S=(i.flags&32)!==0,i.flags&=-33,e===null){if(Oe){if(c?Fa(i):Ha(),Oe){var A=nn,z;if(z=A){t:{for(z=A,A=Ii;z.nodeType!==8;){if(!A){A=null;break t}if(z=bi(z.nextSibling),z===null){A=null;break t}}A=z}A!==null?(i.memoizedState={dehydrated:A,treeContext:Cr!==null?{id:na,overflow:ia}:null,retryLane:536870912,hydrationErrors:null},z=ni(18,null,null,0),z.stateNode=A,z.return=i,i.child=z,Hn=i,nn=null,z=!0):z=!1}z||Ur(i)}if(A=i.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return Wh(A)?i.lanes=32:i.lanes=536870912,null;oa(i)}return A=o.children,o=o.fallback,c?(Ha(),c=i.mode,A=Uu({mode:"hidden",children:A},c),o=Rr(o,c,s,null),A.return=i,o.return=i,A.sibling=o,i.child=A,c=i.child,c.memoizedState=oh(s),c.childLanes=lh(e,S,s),i.memoizedState=sh,o):(Fa(i),uh(i,A))}if(z=e.memoizedState,z!==null&&(A=z.dehydrated,A!==null)){if(h)i.flags&256?(Fa(i),i.flags&=-257,i=ch(e,i,s)):i.memoizedState!==null?(Ha(),i.child=e.child,i.flags|=128,i=null):(Ha(),c=o.fallback,A=i.mode,o=Uu({mode:"visible",children:o.children},A),c=Rr(c,A,s,null),c.flags|=2,o.return=i,c.return=i,o.sibling=c,i.child=o,bs(i,e.child,null,s),o=i.child,o.memoizedState=oh(s),o.childLanes=lh(e,S,s),i.memoizedState=sh,i=c);else if(Fa(i),Wh(A)){if(S=A.nextSibling&&A.nextSibling.dataset,S)var $=S.dgst;S=$,o=Error(a(419)),o.stack="",o.digest=S,Bo({value:o,source:null,stack:null}),i=ch(e,i,s)}else if(En||Fo(e,i,s,!1),S=(s&e.childLanes)!==0,En||S){if(S=Ke,S!==null&&(o=s&-s,o=(o&42)!==0?1:re(o),o=(o&(S.suspendedLanes|s))!==0?0:o,o!==0&&o!==z.retryLane))throw z.retryLane=o,ps(e,o),oi(S,e,o),Zg;A.data==="$?"||Ch(),i=ch(e,i,s)}else A.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=z.treeContext,nn=bi(A.nextSibling),Hn=i,Oe=!0,Dr=null,Ii=!1,e!==null&&(hi[di++]=na,hi[di++]=ia,hi[di++]=Cr,na=e.id,ia=e.overflow,Cr=i),i=uh(i,o.children),i.flags|=4096);return i}return c?(Ha(),c=o.fallback,A=i.mode,z=e.child,$=z.sibling,o=ea(z,{mode:"hidden",children:o.children}),o.subtreeFlags=z.subtreeFlags&65011712,$!==null?c=ea($,c):(c=Rr(c,A,s,null),c.flags|=2),c.return=i,o.return=i,o.sibling=c,i.child=o,o=c,c=i.child,A=e.child.memoizedState,A===null?A=oh(s):(z=A.cachePool,z!==null?($=gn._currentValue,z=z.parent!==$?{parent:$,pool:$}:z):z=Xm(),A={baseLanes:A.baseLanes|s,cachePool:z}),c.memoizedState=A,c.childLanes=lh(e,S,s),i.memoizedState=sh,o):(Fa(i),s=e.child,e=s.sibling,s=ea(s,{mode:"visible",children:o.children}),s.return=i,s.sibling=null,e!==null&&(S=i.deletions,S===null?(i.deletions=[e],i.flags|=16):S.push(e)),i.child=s,i.memoizedState=null,s)}function uh(e,i){return i=Uu({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Uu(e,i){return e=ni(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function ch(e,i,s){return bs(i,e.child,null,s),e=uh(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function r_(e,i,s){e.lanes|=i;var o=e.alternate;o!==null&&(o.lanes|=i),Cf(e.return,i,s)}function fh(e,i,s,o,c){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:s,tailMode:c}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=o,h.tail=s,h.tailMode=c)}function s_(e,i,s){var o=i.pendingProps,c=o.revealOrder,h=o.tail;if(wn(e,i,o.children,s),o=_n.current,(o&2)!==0)o=o&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&r_(e,s,i);else if(e.tag===19)r_(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(xt(_n,o),c){case"forwards":for(s=i.child,c=null;s!==null;)e=s.alternate,e!==null&&Ru(e)===null&&(c=s),s=s.sibling;s=c,s===null?(c=i.child,i.child=null):(c=s.sibling,s.sibling=null),fh(i,!1,c,s,h);break;case"backwards":for(s=null,c=i.child,i.child=null;c!==null;){if(e=c.alternate,e!==null&&Ru(e)===null){i.child=c;break}e=c.sibling,c.sibling=s,s=c,c=e}fh(i,!0,s,null,h);break;case"together":fh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function la(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),Wa|=i.lanes,(s&i.childLanes)===0)if(e!==null){if(Fo(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,s=ea(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=ea(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function hh(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&fu(e)))}function dS(e,i,s){switch(i.tag){case 3:Ct(i,i.stateNode.containerInfo),Oa(i,gn,e.memoizedState.cache),Io();break;case 27:case 5:Qt(i);break;case 4:Ct(i,i.stateNode.containerInfo);break;case 10:Oa(i,i.type,i.memoizedProps.value);break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(Fa(i),i.flags|=128,null):(s&i.child.childLanes)!==0?a_(e,i,s):(Fa(i),e=la(e,i,s),e!==null?e.sibling:null);Fa(i);break;case 19:var c=(e.flags&128)!==0;if(o=(s&i.childLanes)!==0,o||(Fo(e,i,s,!1),o=(s&i.childLanes)!==0),c){if(o)return s_(e,i,s);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),xt(_n,_n.current),o)break;return null;case 22:case 23:return i.lanes=0,$g(e,i,s);case 24:Oa(i,gn,e.memoizedState.cache)}return la(e,i,s)}function o_(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)En=!0;else{if(!hh(e,s)&&(i.flags&128)===0)return En=!1,dS(e,i,s);En=(e.flags&131072)!==0}else En=!1,Oe&&(i.flags&1048576)!==0&&Im(i,cu,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var o=i.elementType,c=o._init;if(o=c(o._payload),i.type=o,typeof o=="function")Sf(o)?(e=zr(o,e),i.tag=1,i=n_(null,i,o,e,s)):(i.tag=0,i=rh(null,i,o,e,s));else{if(o!=null){if(c=o.$$typeof,c===D){i.tag=11,i=Kg(null,i,o,e,s);break t}else if(c===H){i.tag=14,i=Qg(null,i,o,e,s);break t}}throw i=gt(o)||o,Error(a(306,i,""))}}return i;case 0:return rh(e,i,i.type,i.pendingProps,s);case 1:return o=i.type,c=zr(o,i.pendingProps),n_(e,i,o,c,s);case 3:t:{if(Ct(i,i.stateNode.containerInfo),e===null)throw Error(a(387));o=i.pendingProps;var h=i.memoizedState;c=h.element,Pf(e,i),qo(i,o,null,s);var S=i.memoizedState;if(o=S.cache,Oa(i,gn,o),o!==h.cache&&wf(i,[gn],s,!0),Wo(),o=S.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:S.cache},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){i=i_(e,i,o,s);break t}else if(o!==c){c=ci(Error(a(424)),i),Bo(c),i=i_(e,i,o,s);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(nn=bi(e.firstChild),Hn=i,Oe=!0,Dr=null,Ii=!0,s=Fg(i,null,o,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Io(),o===c){i=la(e,i,s);break t}wn(e,i,o,s)}i=i.child}return i;case 26:return Du(e,i),e===null?(s=fv(i.type,null,i.pendingProps,null))?i.memoizedState=s:Oe||(s=i.type,e=i.pendingProps,o=Wu(St.current).createElement(s),o[pn]=i,o[Rn]=e,Un(o,s,e),un(o),i.stateNode=o):i.memoizedState=fv(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Qt(i),e===null&&Oe&&(o=i.stateNode=lv(i.type,i.pendingProps,St.current),Hn=i,Ii=!0,c=nn,Za(i.type)?(qh=c,nn=bi(o.firstChild)):nn=c),wn(e,i,i.pendingProps.children,s),Du(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Oe&&((c=o=nn)&&(o=GS(o,i.type,i.pendingProps,Ii),o!==null?(i.stateNode=o,Hn=i,nn=bi(o.firstChild),Ii=!1,c=!0):c=!1),c||Ur(i)),Qt(i),c=i.type,h=i.pendingProps,S=e!==null?e.memoizedProps:null,o=h.children,Vh(c,h)?o=null:S!==null&&Vh(c,S)&&(i.flags|=32),i.memoizedState!==null&&(c=Gf(e,i,rS,null,null,s),pl._currentValue=c),Du(e,i),wn(e,i,o,s),i.child;case 6:return e===null&&Oe&&((e=s=nn)&&(s=VS(s,i.pendingProps,Ii),s!==null?(i.stateNode=s,Hn=i,nn=null,e=!0):e=!1),e||Ur(i)),null;case 13:return a_(e,i,s);case 4:return Ct(i,i.stateNode.containerInfo),o=i.pendingProps,e===null?i.child=bs(i,null,o,s):wn(e,i,o,s),i.child;case 11:return Kg(e,i,i.type,i.pendingProps,s);case 7:return wn(e,i,i.pendingProps,s),i.child;case 8:return wn(e,i,i.pendingProps.children,s),i.child;case 12:return wn(e,i,i.pendingProps.children,s),i.child;case 10:return o=i.pendingProps,Oa(i,i.type,o.value),wn(e,i,o.children,s),i.child;case 9:return c=i.type._context,o=i.pendingProps.children,Nr(i),c=On(c),o=o(c),i.flags|=1,wn(e,i,o,s),i.child;case 14:return Qg(e,i,i.type,i.pendingProps,s);case 15:return Jg(e,i,i.type,i.pendingProps,s);case 19:return s_(e,i,s);case 31:return o=i.pendingProps,s=i.mode,o={mode:o.mode,children:o.children},e===null?(s=Uu(o,s),s.ref=i.ref,i.child=s,s.return=i,i=s):(s=ea(e.child,o),s.ref=i.ref,i.child=s,s.return=i,i=s),i;case 22:return $g(e,i,s);case 24:return Nr(i),o=On(gn),e===null?(c=Lf(),c===null&&(c=Ke,h=Df(),c.pooledCache=h,h.refCount++,h!==null&&(c.pooledCacheLanes|=s),c=h),i.memoizedState={parent:o,cache:c},Of(i),Oa(i,gn,c)):((e.lanes&s)!==0&&(Pf(e,i),qo(i,null,null,s),Wo()),c=e.memoizedState,h=i.memoizedState,c.parent!==o?(c={parent:o,cache:o},i.memoizedState=c,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=c),Oa(i,gn,o)):(o=h.cache,Oa(i,gn,o),o!==c.cache&&wf(i,[gn],s,!0))),wn(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function ua(e){e.flags|=4}function l_(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!gv(i)){if(i=pi.current,i!==null&&((be&4194048)===be?Bi!==null:(be&62914560)!==be&&(be&536870912)===0||i!==Bi))throw ko=Nf,Wm;e.flags|=8192}}function Lu(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Nt():536870912,e.lanes|=i,ws|=i)}function $o(e,i){if(!Oe)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function $e(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,o=0;if(i)for(var c=e.child;c!==null;)s|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)s|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=s,i}function pS(e,i,s){var o=i.pendingProps;switch(bf(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(i),null;case 1:return $e(i),null;case 3:return s=i.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),ra(gn),se(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(zo(i)?ua(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Hm())),$e(i),null;case 26:return s=i.memoizedState,e===null?(ua(i),s!==null?($e(i),l_(i,s)):($e(i),i.flags&=-16777217)):s?s!==e.memoizedState?(ua(i),$e(i),l_(i,s)):($e(i),i.flags&=-16777217):(e.memoizedProps!==o&&ua(i),$e(i),i.flags&=-16777217),null;case 27:Le(i),s=St.current;var c=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==o&&ua(i);else{if(!o){if(i.stateNode===null)throw Error(a(166));return $e(i),null}e=K.current,zo(i)?Bm(i):(e=lv(c,o,s),i.stateNode=e,ua(i))}return $e(i),null;case 5:if(Le(i),s=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&ua(i);else{if(!o){if(i.stateNode===null)throw Error(a(166));return $e(i),null}if(e=K.current,zo(i))Bm(i);else{switch(c=Wu(St.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?c.createElement(s,{is:o.is}):c.createElement(s)}}e[pn]=i,e[Rn]=o;t:for(c=i.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===i)break t;for(;c.sibling===null;){if(c.return===null||c.return===i)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}i.stateNode=e;t:switch(Un(e,s,o),s){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&ua(i)}}return $e(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==o&&ua(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(a(166));if(e=St.current,zo(i)){if(e=i.stateNode,s=i.memoizedProps,o=null,c=Hn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[pn]=i,e=!!(e.nodeValue===s||o!==null&&o.suppressHydrationWarning===!0||ev(e.nodeValue,s)),e||Ur(i)}else e=Wu(e).createTextNode(o),e[pn]=i,i.stateNode=e}return $e(i),null;case 13:if(o=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=zo(i),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(a(318));if(c=i.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(a(317));c[pn]=i}else Io(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;$e(i),c=!1}else c=Hm(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return i.flags&256?(oa(i),i):(oa(i),null)}if(oa(i),(i.flags&128)!==0)return i.lanes=s,i;if(s=o!==null,e=e!==null&&e.memoizedState!==null,s){o=i.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var h=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==c&&(o.flags|=2048)}return s!==e&&s&&(i.child.flags|=8192),Lu(i,i.updateQueue),$e(i),null;case 4:return se(),e===null&&Ih(i.stateNode.containerInfo),$e(i),null;case 10:return ra(i.type),$e(i),null;case 19:if(yt(_n),c=i.memoizedState,c===null)return $e(i),null;if(o=(i.flags&128)!==0,h=c.rendering,h===null)if(o)$o(c,!1);else{if(an!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(h=Ru(e),h!==null){for(i.flags|=128,$o(c,!1),e=h.updateQueue,i.updateQueue=e,Lu(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)zm(s,e),s=s.sibling;return xt(_n,_n.current&1|2),i.child}e=e.sibling}c.tail!==null&&ue()>Pu&&(i.flags|=128,o=!0,$o(c,!1),i.lanes=4194304)}else{if(!o)if(e=Ru(h),e!==null){if(i.flags|=128,o=!0,e=e.updateQueue,i.updateQueue=e,Lu(i,e),$o(c,!0),c.tail===null&&c.tailMode==="hidden"&&!h.alternate&&!Oe)return $e(i),null}else 2*ue()-c.renderingStartTime>Pu&&s!==536870912&&(i.flags|=128,o=!0,$o(c,!1),i.lanes=4194304);c.isBackwards?(h.sibling=i.child,i.child=h):(e=c.last,e!==null?e.sibling=h:i.child=h,c.last=h)}return c.tail!==null?(i=c.tail,c.rendering=i,c.tail=i.sibling,c.renderingStartTime=ue(),i.sibling=null,e=_n.current,xt(_n,o?e&1|2:e&1),i):($e(i),null);case 22:case 23:return oa(i),Ff(),o=i.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(s&536870912)!==0&&(i.flags&128)===0&&($e(i),i.subtreeFlags&6&&(i.flags|=8192)):$e(i),s=i.updateQueue,s!==null&&Lu(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==s&&(i.flags|=2048),e!==null&&yt(Or),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),ra(gn),$e(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function mS(e,i){switch(bf(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return ra(gn),se(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return Le(i),null;case 13:if(oa(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Io()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return yt(_n),null;case 4:return se(),null;case 10:return ra(i.type),null;case 22:case 23:return oa(i),Ff(),e!==null&&yt(Or),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return ra(gn),null;case 25:return null;default:return null}}function u_(e,i){switch(bf(i),i.tag){case 3:ra(gn),se();break;case 26:case 27:case 5:Le(i);break;case 4:se();break;case 13:oa(i);break;case 19:yt(_n);break;case 10:ra(i.type);break;case 22:case 23:oa(i),Ff(),e!==null&&yt(Or);break;case 24:ra(gn)}}function tl(e,i){try{var s=i.updateQueue,o=s!==null?s.lastEffect:null;if(o!==null){var c=o.next;s=c;do{if((s.tag&e)===e){o=void 0;var h=s.create,S=s.inst;o=h(),S.destroy=o}s=s.next}while(s!==c)}}catch(A){Ye(i,i.return,A)}}function Ga(e,i,s){try{var o=i.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var h=c.next;o=h;do{if((o.tag&e)===e){var S=o.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,c=i;var z=s,$=A;try{$()}catch(ct){Ye(c,z,ct)}}}o=o.next}while(o!==h)}}catch(ct){Ye(i,i.return,ct)}}function c_(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{Qm(i,s)}catch(o){Ye(e,e.return,o)}}}function f_(e,i,s){s.props=zr(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(o){Ye(e,i,o)}}function el(e,i){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof s=="function"?e.refCleanup=s(o):s.current=o}}catch(c){Ye(e,i,c)}}function Fi(e,i){var s=e.ref,o=e.refCleanup;if(s!==null)if(typeof o=="function")try{o()}catch(c){Ye(e,i,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(c){Ye(e,i,c)}else s.current=null}function h_(e){var i=e.type,s=e.memoizedProps,o=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&o.focus();break t;case"img":s.src?o.src=s.src:s.srcSet&&(o.srcset=s.srcSet)}}catch(c){Ye(e,e.return,c)}}function dh(e,i,s){try{var o=e.stateNode;zS(o,e.type,s,i),o[Rn]=i}catch(c){Ye(e,e.return,c)}}function d_(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Za(e.type)||e.tag===4}function ph(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||d_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Za(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function mh(e,i,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(e),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=Xu));else if(o!==4&&(o===27&&Za(e.type)&&(s=e.stateNode,i=null),e=e.child,e!==null))for(mh(e,i,s),e=e.sibling;e!==null;)mh(e,i,s),e=e.sibling}function Nu(e,i,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(o!==4&&(o===27&&Za(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(Nu(e,i,s),e=e.sibling;e!==null;)Nu(e,i,s),e=e.sibling}function p_(e){var i=e.stateNode,s=e.memoizedProps;try{for(var o=e.type,c=i.attributes;c.length;)i.removeAttributeNode(c[0]);Un(i,o,s),i[pn]=e,i[Rn]=s}catch(h){Ye(e,e.return,h)}}var ca=!1,on=!1,gh=!1,m_=typeof WeakSet=="function"?WeakSet:Set,Tn=null;function gS(e,i){if(e=e.containerInfo,Hh=Qu,e=Am(e),pf(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var o=s.getSelection&&s.getSelection();if(o&&o.rangeCount!==0){s=o.anchorNode;var c=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{s.nodeType,h.nodeType}catch{s=null;break t}var S=0,A=-1,z=-1,$=0,ct=0,_t=e,nt=null;e:for(;;){for(var it;_t!==s||c!==0&&_t.nodeType!==3||(A=S+c),_t!==h||o!==0&&_t.nodeType!==3||(z=S+o),_t.nodeType===3&&(S+=_t.nodeValue.length),(it=_t.firstChild)!==null;)nt=_t,_t=it;for(;;){if(_t===e)break e;if(nt===s&&++$===c&&(A=S),nt===h&&++ct===o&&(z=S),(it=_t.nextSibling)!==null)break;_t=nt,nt=_t.parentNode}_t=it}s=A===-1||z===-1?null:{start:A,end:z}}else s=null}s=s||{start:0,end:0}}else s=null;for(Gh={focusedElem:e,selectionRange:s},Qu=!1,Tn=i;Tn!==null;)if(i=Tn,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,Tn=e;else for(;Tn!==null;){switch(i=Tn,h=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,s=i,c=h.memoizedProps,h=h.memoizedState,o=s.stateNode;try{var ie=zr(s.type,c,s.elementType===s.type);e=o.getSnapshotBeforeUpdate(ie,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(te){Ye(s,s.return,te)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)Xh(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Xh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,Tn=e;break}Tn=i.return}}function g_(e,i,s){var o=s.flags;switch(s.tag){case 0:case 11:case 15:Va(e,s),o&4&&tl(5,s);break;case 1:if(Va(e,s),o&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(S){Ye(s,s.return,S)}else{var c=zr(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(c,i,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Ye(s,s.return,S)}}o&64&&c_(s),o&512&&el(s,s.return);break;case 3:if(Va(e,s),o&64&&(e=s.updateQueue,e!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Qm(e,i)}catch(S){Ye(s,s.return,S)}}break;case 27:i===null&&o&4&&p_(s);case 26:case 5:Va(e,s),i===null&&o&4&&h_(s),o&512&&el(s,s.return);break;case 12:Va(e,s);break;case 13:Va(e,s),o&4&&y_(e,s),o&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=bS.bind(null,s),kS(e,s))));break;case 22:if(o=s.memoizedState!==null||ca,!o){i=i!==null&&i.memoizedState!==null||on,c=ca;var h=on;ca=o,(on=i)&&!h?ka(e,s,(s.subtreeFlags&8772)!==0):Va(e,s),ca=c,on=h}break;case 30:break;default:Va(e,s)}}function __(e){var i=e.alternate;i!==null&&(e.alternate=null,__(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&Da(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Je=null,Kn=!1;function fa(e,i,s){for(s=s.child;s!==null;)v_(e,i,s),s=s.sibling}function v_(e,i,s){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(ft,s)}catch{}switch(s.tag){case 26:on||Fi(s,i),fa(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:on||Fi(s,i);var o=Je,c=Kn;Za(s.type)&&(Je=s.stateNode,Kn=!1),fa(e,i,s),cl(s.stateNode),Je=o,Kn=c;break;case 5:on||Fi(s,i);case 6:if(o=Je,c=Kn,Je=null,fa(e,i,s),Je=o,Kn=c,Je!==null)if(Kn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(s.stateNode)}catch(h){Ye(s,i,h)}else try{Je.removeChild(s.stateNode)}catch(h){Ye(s,i,h)}break;case 18:Je!==null&&(Kn?(e=Je,sv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),vl(e)):sv(Je,s.stateNode));break;case 4:o=Je,c=Kn,Je=s.stateNode.containerInfo,Kn=!0,fa(e,i,s),Je=o,Kn=c;break;case 0:case 11:case 14:case 15:on||Ga(2,s,i),on||Ga(4,s,i),fa(e,i,s);break;case 1:on||(Fi(s,i),o=s.stateNode,typeof o.componentWillUnmount=="function"&&f_(s,i,o)),fa(e,i,s);break;case 21:fa(e,i,s);break;case 22:on=(o=on)||s.memoizedState!==null,fa(e,i,s),on=o;break;default:fa(e,i,s)}}function y_(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{vl(e)}catch(s){Ye(i,i.return,s)}}function _S(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new m_),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new m_),i;default:throw Error(a(435,e.tag))}}function _h(e,i){var s=_S(e);i.forEach(function(o){var c=AS.bind(null,e,o);s.has(o)||(s.add(o),o.then(c,c))})}function ii(e,i){var s=i.deletions;if(s!==null)for(var o=0;o<s.length;o++){var c=s[o],h=e,S=i,A=S;t:for(;A!==null;){switch(A.tag){case 27:if(Za(A.type)){Je=A.stateNode,Kn=!1;break t}break;case 5:Je=A.stateNode,Kn=!1;break t;case 3:case 4:Je=A.stateNode.containerInfo,Kn=!0;break t}A=A.return}if(Je===null)throw Error(a(160));v_(h,S,c),Je=null,Kn=!1,h=c.alternate,h!==null&&(h.return=null),c.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)x_(i,e),i=i.sibling}var Ti=null;function x_(e,i){var s=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ii(i,e),ai(e),o&4&&(Ga(3,e,e.return),tl(3,e),Ga(5,e,e.return));break;case 1:ii(i,e),ai(e),o&512&&(on||s===null||Fi(s,s.return)),o&64&&ca&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?o:s.concat(o))));break;case 26:var c=Ti;if(ii(i,e),ai(e),o&512&&(on||s===null||Fi(s,s.return)),o&4){var h=s!==null?s.memoizedState:null;if(o=e.memoizedState,s===null)if(o===null)if(e.stateNode===null){t:{o=e.type,s=e.memoizedProps,c=c.ownerDocument||c;e:switch(o){case"title":h=c.getElementsByTagName("title")[0],(!h||h[wa]||h[pn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=c.createElement(o),c.head.insertBefore(h,c.querySelector("head > title"))),Un(h,o,s),h[pn]=e,un(h),o=h;break t;case"link":var S=pv("link","href",c).get(o+(s.href||""));if(S){for(var A=0;A<S.length;A++)if(h=S[A],h.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&h.getAttribute("rel")===(s.rel==null?null:s.rel)&&h.getAttribute("title")===(s.title==null?null:s.title)&&h.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){S.splice(A,1);break e}}h=c.createElement(o),Un(h,o,s),c.head.appendChild(h);break;case"meta":if(S=pv("meta","content",c).get(o+(s.content||""))){for(A=0;A<S.length;A++)if(h=S[A],h.getAttribute("content")===(s.content==null?null:""+s.content)&&h.getAttribute("name")===(s.name==null?null:s.name)&&h.getAttribute("property")===(s.property==null?null:s.property)&&h.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&h.getAttribute("charset")===(s.charSet==null?null:s.charSet)){S.splice(A,1);break e}}h=c.createElement(o),Un(h,o,s),c.head.appendChild(h);break;default:throw Error(a(468,o))}h[pn]=e,un(h),o=h}e.stateNode=o}else mv(c,e.type,e.stateNode);else e.stateNode=dv(c,o,e.memoizedProps);else h!==o?(h===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):h.count--,o===null?mv(c,e.type,e.stateNode):dv(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&dh(e,e.memoizedProps,s.memoizedProps)}break;case 27:ii(i,e),ai(e),o&512&&(on||s===null||Fi(s,s.return)),s!==null&&o&4&&dh(e,e.memoizedProps,s.memoizedProps);break;case 5:if(ii(i,e),ai(e),o&512&&(on||s===null||Fi(s,s.return)),e.flags&32){c=e.stateNode;try{zi(c,"")}catch(it){Ye(e,e.return,it)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,dh(e,c,s!==null?s.memoizedProps:c)),o&1024&&(gh=!0);break;case 6:if(ii(i,e),ai(e),o&4){if(e.stateNode===null)throw Error(a(162));o=e.memoizedProps,s=e.stateNode;try{s.nodeValue=o}catch(it){Ye(e,e.return,it)}}break;case 3:if(ju=null,c=Ti,Ti=qu(i.containerInfo),ii(i,e),Ti=c,ai(e),o&4&&s!==null&&s.memoizedState.isDehydrated)try{vl(i.containerInfo)}catch(it){Ye(e,e.return,it)}gh&&(gh=!1,S_(e));break;case 4:o=Ti,Ti=qu(e.stateNode.containerInfo),ii(i,e),ai(e),Ti=o;break;case 12:ii(i,e),ai(e);break;case 13:ii(i,e),ai(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Eh=ue()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,_h(e,o)));break;case 22:c=e.memoizedState!==null;var z=s!==null&&s.memoizedState!==null,$=ca,ct=on;if(ca=$||c,on=ct||z,ii(i,e),on=ct,ca=$,ai(e),o&8192)t:for(i=e.stateNode,i._visibility=c?i._visibility&-2:i._visibility|1,c&&(s===null||z||ca||on||Ir(e)),s=null,i=e;;){if(i.tag===5||i.tag===26){if(s===null){z=s=i;try{if(h=z.stateNode,c)S=h.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{A=z.stateNode;var _t=z.memoizedProps.style,nt=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;A.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(it){Ye(z,z.return,it)}}}else if(i.tag===6){if(s===null){z=i;try{z.stateNode.nodeValue=c?"":z.memoizedProps}catch(it){Ye(z,z.return,it)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=e.updateQueue,o!==null&&(s=o.retryQueue,s!==null&&(o.retryQueue=null,_h(e,s))));break;case 19:ii(i,e),ai(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,_h(e,o)));break;case 30:break;case 21:break;default:ii(i,e),ai(e)}}function ai(e){var i=e.flags;if(i&2){try{for(var s,o=e.return;o!==null;){if(d_(o)){s=o;break}o=o.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var c=s.stateNode,h=ph(e);Nu(e,h,c);break;case 5:var S=s.stateNode;s.flags&32&&(zi(S,""),s.flags&=-33);var A=ph(e);Nu(e,A,S);break;case 3:case 4:var z=s.stateNode.containerInfo,$=ph(e);mh(e,$,z);break;default:throw Error(a(161))}}catch(ct){Ye(e,e.return,ct)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function S_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;S_(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Va(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)g_(e,i.alternate,i),i=i.sibling}function Ir(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Ga(4,i,i.return),Ir(i);break;case 1:Fi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&f_(i,i.return,s),Ir(i);break;case 27:cl(i.stateNode);case 26:case 5:Fi(i,i.return),Ir(i);break;case 22:i.memoizedState===null&&Ir(i);break;case 30:Ir(i);break;default:Ir(i)}e=e.sibling}}function ka(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,c=e,h=i,S=h.flags;switch(h.tag){case 0:case 11:case 15:ka(c,h,s),tl(4,h);break;case 1:if(ka(c,h,s),o=h,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){Ye(o,o.return,$)}if(o=h,c=o.updateQueue,c!==null){var A=o.stateNode;try{var z=c.shared.hiddenCallbacks;if(z!==null)for(c.shared.hiddenCallbacks=null,c=0;c<z.length;c++)Km(z[c],A)}catch($){Ye(o,o.return,$)}}s&&S&64&&c_(h),el(h,h.return);break;case 27:p_(h);case 26:case 5:ka(c,h,s),s&&o===null&&S&4&&h_(h),el(h,h.return);break;case 12:ka(c,h,s);break;case 13:ka(c,h,s),s&&S&4&&y_(c,h);break;case 22:h.memoizedState===null&&ka(c,h,s),el(h,h.return);break;case 30:break;default:ka(c,h,s)}i=i.sibling}}function vh(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&Ho(s))}function yh(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Ho(e))}function Hi(e,i,s,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)M_(e,i,s,o),i=i.sibling}function M_(e,i,s,o){var c=i.flags;switch(i.tag){case 0:case 11:case 15:Hi(e,i,s,o),c&2048&&tl(9,i);break;case 1:Hi(e,i,s,o);break;case 3:Hi(e,i,s,o),c&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Ho(e)));break;case 12:if(c&2048){Hi(e,i,s,o),e=i.stateNode;try{var h=i.memoizedProps,S=h.id,A=h.onPostCommit;typeof A=="function"&&A(S,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(z){Ye(i,i.return,z)}}else Hi(e,i,s,o);break;case 13:Hi(e,i,s,o);break;case 23:break;case 22:h=i.stateNode,S=i.alternate,i.memoizedState!==null?h._visibility&2?Hi(e,i,s,o):nl(e,i):h._visibility&2?Hi(e,i,s,o):(h._visibility|=2,As(e,i,s,o,(i.subtreeFlags&10256)!==0)),c&2048&&vh(S,i);break;case 24:Hi(e,i,s,o),c&2048&&yh(i.alternate,i);break;default:Hi(e,i,s,o)}}function As(e,i,s,o,c){for(c=c&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var h=e,S=i,A=s,z=o,$=S.flags;switch(S.tag){case 0:case 11:case 15:As(h,S,A,z,c),tl(8,S);break;case 23:break;case 22:var ct=S.stateNode;S.memoizedState!==null?ct._visibility&2?As(h,S,A,z,c):nl(h,S):(ct._visibility|=2,As(h,S,A,z,c)),c&&$&2048&&vh(S.alternate,S);break;case 24:As(h,S,A,z,c),c&&$&2048&&yh(S.alternate,S);break;default:As(h,S,A,z,c)}i=i.sibling}}function nl(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,o=i,c=o.flags;switch(o.tag){case 22:nl(s,o),c&2048&&vh(o.alternate,o);break;case 24:nl(s,o),c&2048&&yh(o.alternate,o);break;default:nl(s,o)}i=i.sibling}}var il=8192;function Rs(e){if(e.subtreeFlags&il)for(e=e.child;e!==null;)E_(e),e=e.sibling}function E_(e){switch(e.tag){case 26:Rs(e),e.flags&il&&e.memoizedState!==null&&nM(Ti,e.memoizedState,e.memoizedProps);break;case 5:Rs(e);break;case 3:case 4:var i=Ti;Ti=qu(e.stateNode.containerInfo),Rs(e),Ti=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=il,il=16777216,Rs(e),il=i):Rs(e));break;default:Rs(e)}}function T_(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function al(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];Tn=o,A_(o,e)}T_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)b_(e),e=e.sibling}function b_(e){switch(e.tag){case 0:case 11:case 15:al(e),e.flags&2048&&Ga(9,e,e.return);break;case 3:al(e);break;case 12:al(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,Ou(e)):al(e);break;default:al(e)}}function Ou(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];Tn=o,A_(o,e)}T_(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Ga(8,i,i.return),Ou(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,Ou(i));break;default:Ou(i)}e=e.sibling}}function A_(e,i){for(;Tn!==null;){var s=Tn;switch(s.tag){case 0:case 11:case 15:Ga(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var o=s.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Ho(s.memoizedState.cache)}if(o=s.child,o!==null)o.return=s,Tn=o;else t:for(s=e;Tn!==null;){o=Tn;var c=o.sibling,h=o.return;if(__(o),o===s){Tn=null;break t}if(c!==null){c.return=h,Tn=c;break t}Tn=h}}}var vS={getCacheForType:function(e){var i=On(gn),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s}},yS=typeof WeakMap=="function"?WeakMap:Map,Ie=0,Ke=null,Se=null,be=0,Be=0,ri=null,Xa=!1,Cs=!1,xh=!1,ha=0,an=0,Wa=0,Br=0,Sh=0,mi=0,ws=0,rl=null,Qn=null,Mh=!1,Eh=0,Pu=1/0,zu=null,qa=null,Dn=0,Ya=null,Ds=null,Us=0,Th=0,bh=null,R_=null,sl=0,Ah=null;function si(){if((Ie&2)!==0&&be!==0)return be&-be;if(I.T!==null){var e=vs;return e!==0?e:Nh()}return Re()}function C_(){mi===0&&(mi=(be&536870912)===0||Oe?k():536870912);var e=pi.current;return e!==null&&(e.flags|=32),mi}function oi(e,i,s){(e===Ke&&(Be===2||Be===9)||e.cancelPendingCommit!==null)&&(Ls(e,0),ja(e,be,mi,!1)),Bt(e,s),((Ie&2)===0||e!==Ke)&&(e===Ke&&((Ie&2)===0&&(Br|=s),an===4&&ja(e,be,mi,!1)),Gi(e))}function w_(e,i,s){if((Ie&6)!==0)throw Error(a(327));var o=!s&&(i&124)===0&&(i&e.expiredLanes)===0||Dt(e,i),c=o?MS(e,i):wh(e,i,!0),h=o;do{if(c===0){Cs&&!o&&ja(e,i,0,!1);break}else{if(s=e.current.alternate,h&&!xS(s)){c=wh(e,i,!1),h=!1;continue}if(c===2){if(h=i,e.errorRecoveryDisabledLanes&h)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){i=S;t:{var A=e;c=rl;var z=A.current.memoizedState.isDehydrated;if(z&&(Ls(A,S).flags|=256),S=wh(A,S,!1),S!==2){if(xh&&!z){A.errorRecoveryDisabledLanes|=h,Br|=h,c=4;break t}h=Qn,Qn=c,h!==null&&(Qn===null?Qn=h:Qn.push.apply(Qn,h))}c=S}if(h=!1,c!==2)continue}}if(c===1){Ls(e,0),ja(e,i,0,!0);break}t:{switch(o=e,h=c,h){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:ja(o,i,mi,!Xa);break t;case 2:Qn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(c=Eh+300-ue(),10<c)){if(ja(o,i,mi,!Xa),Kt(o,0,!0)!==0)break t;o.timeoutHandle=av(D_.bind(null,o,s,Qn,zu,Mh,i,mi,Br,ws,Xa,h,2,-0,0),c);break t}D_(o,s,Qn,zu,Mh,i,mi,Br,ws,Xa,h,0,-0,0)}}break}while(!0);Gi(e)}function D_(e,i,s,o,c,h,S,A,z,$,ct,_t,nt,it){if(e.timeoutHandle=-1,_t=i.subtreeFlags,(_t&8192||(_t&16785408)===16785408)&&(dl={stylesheets:null,count:0,unsuspend:eM},E_(i),_t=iM(),_t!==null)){e.cancelPendingCommit=_t(I_.bind(null,e,i,h,s,o,c,S,A,z,ct,1,nt,it)),ja(e,h,S,!$);return}I_(e,i,h,s,o,c,S,A,z)}function xS(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var o=0;o<s.length;o++){var c=s[o],h=c.getSnapshot;c=c.value;try{if(!ei(h(),c))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ja(e,i,s,o){i&=~Sh,i&=~Br,e.suspendedLanes|=i,e.pingedLanes&=~i,o&&(e.warmLanes|=i),o=e.expirationTimes;for(var c=i;0<c;){var h=31-Pt(c),S=1<<h;o[h]=-1,c&=~S}s!==0&&vt(e,s,i)}function Iu(){return(Ie&6)===0?(ol(0),!1):!0}function Rh(){if(Se!==null){if(Be===0)var e=Se.return;else e=Se,aa=Lr=null,Xf(e),Ts=null,Qo=0,e=Se;for(;e!==null;)u_(e.alternate,e),e=e.return;Se=null}}function Ls(e,i){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,BS(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),Rh(),Ke=e,Se=s=ea(e.current,null),be=i,Be=0,ri=null,Xa=!1,Cs=Dt(e,i),xh=!1,ws=mi=Sh=Br=Wa=an=0,Qn=rl=null,Mh=!1,(i&8)!==0&&(i|=i&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=i;0<o;){var c=31-Pt(o),h=1<<c;i|=e[c],o&=~h}return ha=i,ru(),s}function U_(e,i){ge=null,I.H=Tu,i===Vo||i===pu?(i=jm(),Be=3):i===Wm?(i=jm(),Be=4):Be=i===Zg?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ri=i,Se===null&&(an=1,wu(e,ci(i,e.current)))}function L_(){var e=I.H;return I.H=Tu,e===null?Tu:e}function N_(){var e=I.A;return I.A=vS,e}function Ch(){an=4,Xa||(be&4194048)!==be&&pi.current!==null||(Cs=!0),(Wa&134217727)===0&&(Br&134217727)===0||Ke===null||ja(Ke,be,mi,!1)}function wh(e,i,s){var o=Ie;Ie|=2;var c=L_(),h=N_();(Ke!==e||be!==i)&&(zu=null,Ls(e,i)),i=!1;var S=an;t:do try{if(Be!==0&&Se!==null){var A=Se,z=ri;switch(Be){case 8:Rh(),S=6;break t;case 3:case 2:case 9:case 6:pi.current===null&&(i=!0);var $=Be;if(Be=0,ri=null,Ns(e,A,z,$),s&&Cs){S=0;break t}break;default:$=Be,Be=0,ri=null,Ns(e,A,z,$)}}SS(),S=an;break}catch(ct){U_(e,ct)}while(!0);return i&&e.shellSuspendCounter++,aa=Lr=null,Ie=o,I.H=c,I.A=h,Se===null&&(Ke=null,be=0,ru()),S}function SS(){for(;Se!==null;)O_(Se)}function MS(e,i){var s=Ie;Ie|=2;var o=L_(),c=N_();Ke!==e||be!==i?(zu=null,Pu=ue()+500,Ls(e,i)):Cs=Dt(e,i);t:do try{if(Be!==0&&Se!==null){i=Se;var h=ri;e:switch(Be){case 1:Be=0,ri=null,Ns(e,i,h,1);break;case 2:case 9:if(qm(h)){Be=0,ri=null,P_(i);break}i=function(){Be!==2&&Be!==9||Ke!==e||(Be=7),Gi(e)},h.then(i,i);break t;case 3:Be=7;break t;case 4:Be=5;break t;case 7:qm(h)?(Be=0,ri=null,P_(i)):(Be=0,ri=null,Ns(e,i,h,7));break;case 5:var S=null;switch(Se.tag){case 26:S=Se.memoizedState;case 5:case 27:var A=Se;if(!S||gv(S)){Be=0,ri=null;var z=A.sibling;if(z!==null)Se=z;else{var $=A.return;$!==null?(Se=$,Bu($)):Se=null}break e}}Be=0,ri=null,Ns(e,i,h,5);break;case 6:Be=0,ri=null,Ns(e,i,h,6);break;case 8:Rh(),an=6;break t;default:throw Error(a(462))}}ES();break}catch(ct){U_(e,ct)}while(!0);return aa=Lr=null,I.H=o,I.A=c,Ie=s,Se!==null?0:(Ke=null,be=0,ru(),an)}function ES(){for(;Se!==null&&!We();)O_(Se)}function O_(e){var i=o_(e.alternate,e,ha);e.memoizedProps=e.pendingProps,i===null?Bu(e):Se=i}function P_(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=e_(s,i,i.pendingProps,i.type,void 0,be);break;case 11:i=e_(s,i,i.pendingProps,i.type.render,i.ref,be);break;case 5:Xf(i);default:u_(s,i),i=Se=zm(i,ha),i=o_(s,i,ha)}e.memoizedProps=e.pendingProps,i===null?Bu(e):Se=i}function Ns(e,i,s,o){aa=Lr=null,Xf(i),Ts=null,Qo=0;var c=i.return;try{if(hS(e,c,i,s,be)){an=1,wu(e,ci(s,e.current)),Se=null;return}}catch(h){if(c!==null)throw Se=c,h;an=1,wu(e,ci(s,e.current)),Se=null;return}i.flags&32768?(Oe||o===1?e=!0:Cs||(be&536870912)!==0?e=!1:(Xa=e=!0,(o===2||o===9||o===3||o===6)&&(o=pi.current,o!==null&&o.tag===13&&(o.flags|=16384))),z_(i,e)):Bu(i)}function Bu(e){var i=e;do{if((i.flags&32768)!==0){z_(i,Xa);return}e=i.return;var s=pS(i.alternate,i,ha);if(s!==null){Se=s;return}if(i=i.sibling,i!==null){Se=i;return}Se=i=e}while(i!==null);an===0&&(an=5)}function z_(e,i){do{var s=mS(e.alternate,e);if(s!==null){s.flags&=32767,Se=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){Se=e;return}Se=e=s}while(e!==null);an=6,Se=null}function I_(e,i,s,o,c,h,S,A,z){e.cancelPendingCommit=null;do Fu();while(Dn!==0);if((Ie&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(h=i.lanes|i.childLanes,h|=yf,At(e,s,h,S,A,z),e===Ke&&(Se=Ke=null,be=0),Ds=i,Ya=e,Us=s,Th=h,bh=c,R_=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,RS(ae,function(){return V_(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,c=Z.p,Z.p=2,S=Ie,Ie|=4;try{gS(e,i,s)}finally{Ie=S,Z.p=c,I.T=o}}Dn=1,B_(),F_(),H_()}}function B_(){if(Dn===1){Dn=0;var e=Ya,i=Ds,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=I.T,I.T=null;var o=Z.p;Z.p=2;var c=Ie;Ie|=4;try{x_(i,e);var h=Gh,S=Am(e.containerInfo),A=h.focusedElem,z=h.selectionRange;if(S!==A&&A&&A.ownerDocument&&bm(A.ownerDocument.documentElement,A)){if(z!==null&&pf(A)){var $=z.start,ct=z.end;if(ct===void 0&&(ct=$),"selectionStart"in A)A.selectionStart=$,A.selectionEnd=Math.min(ct,A.value.length);else{var _t=A.ownerDocument||document,nt=_t&&_t.defaultView||window;if(nt.getSelection){var it=nt.getSelection(),ie=A.textContent.length,te=Math.min(z.start,ie),Ve=z.end===void 0?te:Math.min(z.end,ie);!it.extend&&te>Ve&&(S=Ve,Ve=te,te=S);var W=Tm(A,te),V=Tm(A,Ve);if(W&&V&&(it.rangeCount!==1||it.anchorNode!==W.node||it.anchorOffset!==W.offset||it.focusNode!==V.node||it.focusOffset!==V.offset)){var Q=_t.createRange();Q.setStart(W.node,W.offset),it.removeAllRanges(),te>Ve?(it.addRange(Q),it.extend(V.node,V.offset)):(Q.setEnd(V.node,V.offset),it.addRange(Q))}}}}for(_t=[],it=A;it=it.parentNode;)it.nodeType===1&&_t.push({element:it,left:it.scrollLeft,top:it.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<_t.length;A++){var dt=_t[A];dt.element.scrollLeft=dt.left,dt.element.scrollTop=dt.top}}Qu=!!Hh,Gh=Hh=null}finally{Ie=c,Z.p=o,I.T=s}}e.current=i,Dn=2}}function F_(){if(Dn===2){Dn=0;var e=Ya,i=Ds,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=I.T,I.T=null;var o=Z.p;Z.p=2;var c=Ie;Ie|=4;try{g_(e,i.alternate,i)}finally{Ie=c,Z.p=o,I.T=s}}Dn=3}}function H_(){if(Dn===4||Dn===3){Dn=0,fe();var e=Ya,i=Ds,s=Us,o=R_;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Dn=5:(Dn=0,Ds=Ya=null,G_(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(qa=null),ze(s),i=i.stateNode,ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(ft,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=I.T,c=Z.p,Z.p=2,I.T=null;try{for(var h=e.onRecoverableError,S=0;S<o.length;S++){var A=o[S];h(A.value,{componentStack:A.stack})}}finally{I.T=i,Z.p=c}}(Us&3)!==0&&Fu(),Gi(e),c=e.pendingLanes,(s&4194090)!==0&&(c&42)!==0?e===Ah?sl++:(sl=0,Ah=e):sl=0,ol(0)}}function G_(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Ho(i)))}function Fu(e){return B_(),F_(),H_(),V_()}function V_(){if(Dn!==5)return!1;var e=Ya,i=Th;Th=0;var s=ze(Us),o=I.T,c=Z.p;try{Z.p=32>s?32:s,I.T=null,s=bh,bh=null;var h=Ya,S=Us;if(Dn=0,Ds=Ya=null,Us=0,(Ie&6)!==0)throw Error(a(331));var A=Ie;if(Ie|=4,b_(h.current),M_(h,h.current,S,s),Ie=A,ol(0,!1),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(ft,h)}catch{}return!0}finally{Z.p=c,I.T=o,G_(e,i)}}function k_(e,i,s){i=ci(s,i),i=ah(e.stateNode,i,2),e=Ia(e,i,2),e!==null&&(Bt(e,2),Gi(e))}function Ye(e,i,s){if(e.tag===3)k_(e,e,s);else for(;i!==null;){if(i.tag===3){k_(i,e,s);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(qa===null||!qa.has(o))){e=ci(s,e),s=Yg(2),o=Ia(i,s,2),o!==null&&(jg(s,o,i,e),Bt(o,2),Gi(o));break}}i=i.return}}function Dh(e,i,s){var o=e.pingCache;if(o===null){o=e.pingCache=new yS;var c=new Set;o.set(i,c)}else c=o.get(i),c===void 0&&(c=new Set,o.set(i,c));c.has(s)||(xh=!0,c.add(s),e=TS.bind(null,e,i,s),i.then(e,e))}function TS(e,i,s){var o=e.pingCache;o!==null&&o.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,Ke===e&&(be&s)===s&&(an===4||an===3&&(be&62914560)===be&&300>ue()-Eh?(Ie&2)===0&&Ls(e,0):Sh|=s,ws===be&&(ws=0)),Gi(e)}function X_(e,i){i===0&&(i=Nt()),e=ps(e,i),e!==null&&(Bt(e,i),Gi(e))}function bS(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),X_(e,s)}function AS(e,i){var s=0;switch(e.tag){case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(s=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(i),X_(e,s)}function RS(e,i){return _e(e,i)}var Hu=null,Os=null,Uh=!1,Gu=!1,Lh=!1,Fr=0;function Gi(e){e!==Os&&e.next===null&&(Os===null?Hu=Os=e:Os=Os.next=e),Gu=!0,Uh||(Uh=!0,wS())}function ol(e,i){if(!Lh&&Gu){Lh=!0;do for(var s=!1,o=Hu;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var h=0;else{var S=o.suspendedLanes,A=o.pingedLanes;h=(1<<31-Pt(42|e)+1)-1,h&=c&~(S&~A),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(s=!0,j_(o,h))}else h=be,h=Kt(o,o===Ke?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Dt(o,h)||(s=!0,j_(o,h));o=o.next}while(s);Lh=!1}}function CS(){W_()}function W_(){Gu=Uh=!1;var e=0;Fr!==0&&(IS()&&(e=Fr),Fr=0);for(var i=ue(),s=null,o=Hu;o!==null;){var c=o.next,h=q_(o,i);h===0?(o.next=null,s===null?Hu=c:s.next=c,c===null&&(Os=s)):(s=o,(e!==0||(h&3)!==0)&&(Gu=!0)),o=c}ol(e)}function q_(e,i){for(var s=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var S=31-Pt(h),A=1<<S,z=c[S];z===-1?((A&s)===0||(A&o)!==0)&&(c[S]=oe(A,i)):z<=i&&(e.expiredLanes|=A),h&=~A}if(i=Ke,s=be,s=Kt(e,e===i?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,s===0||e===i&&(Be===2||Be===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&P(o),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||Dt(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(o!==null&&P(o),ze(s)){case 2:case 8:s=jt;break;case 32:s=ae;break;case 268435456:s=O;break;default:s=ae}return o=Y_.bind(null,e),s=_e(s,o),e.callbackPriority=i,e.callbackNode=s,i}return o!==null&&o!==null&&P(o),e.callbackPriority=2,e.callbackNode=null,2}function Y_(e,i){if(Dn!==0&&Dn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(Fu()&&e.callbackNode!==s)return null;var o=be;return o=Kt(e,e===Ke?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(w_(e,o,i),q_(e,ue()),e.callbackNode!=null&&e.callbackNode===s?Y_.bind(null,e):null)}function j_(e,i){if(Fu())return null;w_(e,i,!0)}function wS(){FS(function(){(Ie&6)!==0?_e(xe,CS):W_()})}function Nh(){return Fr===0&&(Fr=k()),Fr}function Z_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Jl(""+e)}function K_(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function DS(e,i,s,o,c){if(i==="submit"&&s&&s.stateNode===c){var h=Z_((c[Rn]||null).action),S=o.submitter;S&&(i=(i=S[Rn]||null)?Z_(i.formAction):S.getAttribute("formAction"),i!==null&&(h=i,S=null));var A=new nu("action","action",null,o,c);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Fr!==0){var z=S?K_(c,S):new FormData(c);$f(s,{pending:!0,data:z,method:c.method,action:h},null,z)}}else typeof h=="function"&&(A.preventDefault(),z=S?K_(c,S):new FormData(c),$f(s,{pending:!0,data:z,method:c.method,action:h},h,z))},currentTarget:c}]})}}for(var Oh=0;Oh<vf.length;Oh++){var Ph=vf[Oh],US=Ph.toLowerCase(),LS=Ph[0].toUpperCase()+Ph.slice(1);Ei(US,"on"+LS)}Ei(wm,"onAnimationEnd"),Ei(Dm,"onAnimationIteration"),Ei(Um,"onAnimationStart"),Ei("dblclick","onDoubleClick"),Ei("focusin","onFocus"),Ei("focusout","onBlur"),Ei(Zx,"onTransitionRun"),Ei(Kx,"onTransitionStart"),Ei(Qx,"onTransitionCancel"),Ei(Lm,"onTransitionEnd"),R("onMouseEnter",["mouseout","mouseover"]),R("onMouseLeave",["mouseout","mouseover"]),R("onPointerEnter",["pointerout","pointerover"]),R("onPointerLeave",["pointerout","pointerover"]),Qi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Qi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Qi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Qi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Qi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Qi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ll="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),NS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ll));function Q_(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var o=e[s],c=o.event;o=o.listeners;t:{var h=void 0;if(i)for(var S=o.length-1;0<=S;S--){var A=o[S],z=A.instance,$=A.currentTarget;if(A=A.listener,z!==h&&c.isPropagationStopped())break t;h=A,c.currentTarget=$;try{h(c)}catch(ct){Cu(ct)}c.currentTarget=null,h=z}else for(S=0;S<o.length;S++){if(A=o[S],z=A.instance,$=A.currentTarget,A=A.listener,z!==h&&c.isPropagationStopped())break t;h=A,c.currentTarget=$;try{h(c)}catch(ct){Cu(ct)}c.currentTarget=null,h=z}}}}function Me(e,i){var s=i[Sr];s===void 0&&(s=i[Sr]=new Set);var o=e+"__bubble";s.has(o)||(J_(i,e,2,!1),s.add(o))}function zh(e,i,s){var o=0;i&&(o|=4),J_(s,e,o,i)}var Vu="_reactListening"+Math.random().toString(36).slice(2);function Ih(e){if(!e[Vu]){e[Vu]=!0,Kl.forEach(function(s){s!=="selectionchange"&&(NS.has(s)||zh(s,!1,e),zh(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[Vu]||(i[Vu]=!0,zh("selectionchange",!1,i))}}function J_(e,i,s,o){switch(Mv(i)){case 2:var c=sM;break;case 8:c=oM;break;default:c=Qh}s=c.bind(null,i,s,e),c=void 0,!rf||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(i,s,{capture:!0,passive:c}):e.addEventListener(i,s,!0):c!==void 0?e.addEventListener(i,s,{passive:c}):e.addEventListener(i,s,!1)}function Bh(e,i,s,o,c){var h=o;if((i&1)===0&&(i&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var A=o.stateNode.containerInfo;if(A===c)break;if(S===4)for(S=o.return;S!==null;){var z=S.tag;if((z===3||z===4)&&S.stateNode.containerInfo===c)return;S=S.return}for(;A!==null;){if(S=Zi(A),S===null)return;if(z=S.tag,z===5||z===6||z===26||z===27){o=h=S;continue t}A=A.parentNode}}o=o.return}rm(function(){var $=h,ct=nf(s),_t=[];t:{var nt=Nm.get(e);if(nt!==void 0){var it=nu,ie=e;switch(e){case"keypress":if(tu(s)===0)break t;case"keydown":case"keyup":it=Rx;break;case"focusin":ie="focus",it=uf;break;case"focusout":ie="blur",it=uf;break;case"beforeblur":case"afterblur":it=uf;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":it=lm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":it=mx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":it=Dx;break;case wm:case Dm:case Um:it=vx;break;case Lm:it=Lx;break;case"scroll":case"scrollend":it=dx;break;case"wheel":it=Ox;break;case"copy":case"cut":case"paste":it=xx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":it=cm;break;case"toggle":case"beforetoggle":it=zx}var te=(i&4)!==0,Ve=!te&&(e==="scroll"||e==="scrollend"),W=te?nt!==null?nt+"Capture":null:nt;te=[];for(var V=$,Q;V!==null;){var dt=V;if(Q=dt.stateNode,dt=dt.tag,dt!==5&&dt!==26&&dt!==27||Q===null||W===null||(dt=Ro(V,W),dt!=null&&te.push(ul(V,dt,Q))),Ve)break;V=V.return}0<te.length&&(nt=new it(nt,ie,null,s,ct),_t.push({event:nt,listeners:te}))}}if((i&7)===0){t:{if(nt=e==="mouseover"||e==="pointerover",it=e==="mouseout"||e==="pointerout",nt&&s!==ef&&(ie=s.relatedTarget||s.fromElement)&&(Zi(ie)||ie[Yn]))break t;if((it||nt)&&(nt=ct.window===ct?ct:(nt=ct.ownerDocument)?nt.defaultView||nt.parentWindow:window,it?(ie=s.relatedTarget||s.toElement,it=$,ie=ie?Zi(ie):null,ie!==null&&(Ve=u(ie),te=ie.tag,ie!==Ve||te!==5&&te!==27&&te!==6)&&(ie=null)):(it=null,ie=$),it!==ie)){if(te=lm,dt="onMouseLeave",W="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(te=cm,dt="onPointerLeave",W="onPointerEnter",V="pointer"),Ve=it==null?nt:Er(it),Q=ie==null?nt:Er(ie),nt=new te(dt,V+"leave",it,s,ct),nt.target=Ve,nt.relatedTarget=Q,dt=null,Zi(ct)===$&&(te=new te(W,V+"enter",ie,s,ct),te.target=Q,te.relatedTarget=Ve,dt=te),Ve=dt,it&&ie)e:{for(te=it,W=ie,V=0,Q=te;Q;Q=Ps(Q))V++;for(Q=0,dt=W;dt;dt=Ps(dt))Q++;for(;0<V-Q;)te=Ps(te),V--;for(;0<Q-V;)W=Ps(W),Q--;for(;V--;){if(te===W||W!==null&&te===W.alternate)break e;te=Ps(te),W=Ps(W)}te=null}else te=null;it!==null&&$_(_t,nt,it,te,!1),ie!==null&&Ve!==null&&$_(_t,Ve,ie,te,!0)}}t:{if(nt=$?Er($):window,it=nt.nodeName&&nt.nodeName.toLowerCase(),it==="select"||it==="input"&&nt.type==="file")var kt=vm;else if(gm(nt))if(ym)kt=qx;else{kt=Xx;var ve=kx}else it=nt.nodeName,!it||it.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?$&&tf($.elementType)&&(kt=vm):kt=Wx;if(kt&&(kt=kt(e,$))){_m(_t,kt,s,ct);break t}ve&&ve(e,nt,$),e==="focusout"&&$&&nt.type==="number"&&$.memoizedProps.value!=null&&Nn(nt,"number",nt.value)}switch(ve=$?Er($):window,e){case"focusin":(gm(ve)||ve.contentEditable==="true")&&(fs=ve,mf=$,Po=null);break;case"focusout":Po=mf=fs=null;break;case"mousedown":gf=!0;break;case"contextmenu":case"mouseup":case"dragend":gf=!1,Rm(_t,s,ct);break;case"selectionchange":if(jx)break;case"keydown":case"keyup":Rm(_t,s,ct)}var Yt;if(ff)t:{switch(e){case"compositionstart":var ne="onCompositionStart";break t;case"compositionend":ne="onCompositionEnd";break t;case"compositionupdate":ne="onCompositionUpdate";break t}ne=void 0}else cs?pm(e,s)&&(ne="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(ne="onCompositionStart");ne&&(fm&&s.locale!=="ko"&&(cs||ne!=="onCompositionStart"?ne==="onCompositionEnd"&&cs&&(Yt=sm()):(Na=ct,sf="value"in Na?Na.value:Na.textContent,cs=!0)),ve=ku($,ne),0<ve.length&&(ne=new um(ne,e,null,s,ct),_t.push({event:ne,listeners:ve}),Yt?ne.data=Yt:(Yt=mm(s),Yt!==null&&(ne.data=Yt)))),(Yt=Bx?Fx(e,s):Hx(e,s))&&(ne=ku($,"onBeforeInput"),0<ne.length&&(ve=new um("onBeforeInput","beforeinput",null,s,ct),_t.push({event:ve,listeners:ne}),ve.data=Yt)),DS(_t,e,$,s,ct)}Q_(_t,i)})}function ul(e,i,s){return{instance:e,listener:i,currentTarget:s}}function ku(e,i){for(var s=i+"Capture",o=[];e!==null;){var c=e,h=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||h===null||(c=Ro(e,s),c!=null&&o.unshift(ul(e,c,h)),c=Ro(e,i),c!=null&&o.push(ul(e,c,h))),e.tag===3)return o;e=e.return}return[]}function Ps(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function $_(e,i,s,o,c){for(var h=i._reactName,S=[];s!==null&&s!==o;){var A=s,z=A.alternate,$=A.stateNode;if(A=A.tag,z!==null&&z===o)break;A!==5&&A!==26&&A!==27||$===null||(z=$,c?($=Ro(s,h),$!=null&&S.unshift(ul(s,$,z))):c||($=Ro(s,h),$!=null&&S.push(ul(s,$,z)))),s=s.return}S.length!==0&&e.push({event:i,listeners:S})}var OS=/\r\n?/g,PS=/\u0000|\uFFFD/g;function tv(e){return(typeof e=="string"?e:""+e).replace(OS,`
`).replace(PS,"")}function ev(e,i){return i=tv(i),tv(e)===i}function Xu(){}function Ge(e,i,s,o,c,h){switch(s){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||zi(e,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&zi(e,""+o);break;case"className":Lt(e,"class",o);break;case"tabIndex":Lt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Lt(e,s,o);break;case"style":im(e,o,h);break;case"data":if(i!=="object"){Lt(e,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=Jl(""+o),e.setAttribute(s,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(s==="formAction"?(i!=="input"&&Ge(e,i,"name",c.name,c,null),Ge(e,i,"formEncType",c.formEncType,c,null),Ge(e,i,"formMethod",c.formMethod,c,null),Ge(e,i,"formTarget",c.formTarget,c,null)):(Ge(e,i,"encType",c.encType,c,null),Ge(e,i,"method",c.method,c,null),Ge(e,i,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=Jl(""+o),e.setAttribute(s,o);break;case"onClick":o!=null&&(e.onclick=Xu);break;case"onScroll":o!=null&&Me("scroll",e);break;case"onScrollEnd":o!=null&&Me("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(c.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}s=Jl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""+o):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":o===!0?e.setAttribute(s,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,o):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(s,o):e.removeAttribute(s);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(s):e.setAttribute(s,o);break;case"popover":Me("beforetoggle",e),Me("toggle",e),bt(e,"popover",o);break;case"xlinkActuate":zt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":zt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":zt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":zt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":zt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":zt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":zt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":zt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":zt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":bt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=fx.get(s)||s,bt(e,s,o))}}function Fh(e,i,s,o,c,h){switch(s){case"style":im(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(c.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof o=="string"?zi(e,o):(typeof o=="number"||typeof o=="bigint")&&zi(e,""+o);break;case"onScroll":o!=null&&Me("scroll",e);break;case"onScrollEnd":o!=null&&Me("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Xu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ql.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(c=s.endsWith("Capture"),i=s.slice(2,c?s.length-7:void 0),h=e[Rn]||null,h=h!=null?h[s]:null,typeof h=="function"&&e.removeEventListener(i,h,c),typeof o=="function")){typeof h!="function"&&h!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,o,c);break t}s in e?e[s]=o:o===!0?e.setAttribute(s,""):bt(e,s,o)}}}function Un(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",e),Me("load",e);var o=!1,c=!1,h;for(h in s)if(s.hasOwnProperty(h)){var S=s[h];if(S!=null)switch(h){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ge(e,i,h,S,s,null)}}c&&Ge(e,i,"srcSet",s.srcSet,s,null),o&&Ge(e,i,"src",s.src,s,null);return;case"input":Me("invalid",e);var A=h=S=c=null,z=null,$=null;for(o in s)if(s.hasOwnProperty(o)){var ct=s[o];if(ct!=null)switch(o){case"name":c=ct;break;case"type":S=ct;break;case"checked":z=ct;break;case"defaultChecked":$=ct;break;case"value":h=ct;break;case"defaultValue":A=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(a(137,i));break;default:Ge(e,i,o,ct,s,null)}}qe(e,h,A,z,$,S,c,!1),en(e);return;case"select":Me("invalid",e),o=S=h=null;for(c in s)if(s.hasOwnProperty(c)&&(A=s[c],A!=null))switch(c){case"value":h=A;break;case"defaultValue":S=A;break;case"multiple":o=A;default:Ge(e,i,c,A,s,null)}i=h,s=S,e.multiple=!!o,i!=null?mn(e,!!o,i,!1):s!=null&&mn(e,!!o,s,!0);return;case"textarea":Me("invalid",e),h=c=o=null;for(S in s)if(s.hasOwnProperty(S)&&(A=s[S],A!=null))switch(S){case"value":o=A;break;case"defaultValue":c=A;break;case"children":h=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:Ge(e,i,S,A,s,null)}Cn(e,o,c,h),en(e);return;case"option":for(z in s)if(s.hasOwnProperty(z)&&(o=s[z],o!=null))switch(z){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ge(e,i,z,o,s,null)}return;case"dialog":Me("beforetoggle",e),Me("toggle",e),Me("cancel",e),Me("close",e);break;case"iframe":case"object":Me("load",e);break;case"video":case"audio":for(o=0;o<ll.length;o++)Me(ll[o],e);break;case"image":Me("error",e),Me("load",e);break;case"details":Me("toggle",e);break;case"embed":case"source":case"link":Me("error",e),Me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in s)if(s.hasOwnProperty($)&&(o=s[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ge(e,i,$,o,s,null)}return;default:if(tf(i)){for(ct in s)s.hasOwnProperty(ct)&&(o=s[ct],o!==void 0&&Fh(e,i,ct,o,s,void 0));return}}for(A in s)s.hasOwnProperty(A)&&(o=s[A],o!=null&&Ge(e,i,A,o,s,null))}function zS(e,i,s,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,h=null,S=null,A=null,z=null,$=null,ct=null;for(it in s){var _t=s[it];if(s.hasOwnProperty(it)&&_t!=null)switch(it){case"checked":break;case"value":break;case"defaultValue":z=_t;default:o.hasOwnProperty(it)||Ge(e,i,it,null,o,_t)}}for(var nt in o){var it=o[nt];if(_t=s[nt],o.hasOwnProperty(nt)&&(it!=null||_t!=null))switch(nt){case"type":h=it;break;case"name":c=it;break;case"checked":$=it;break;case"defaultChecked":ct=it;break;case"value":S=it;break;case"defaultValue":A=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(a(137,i));break;default:it!==_t&&Ge(e,i,nt,it,o,_t)}}Ji(e,S,A,z,$,ct,h,c);return;case"select":it=S=A=nt=null;for(h in s)if(z=s[h],s.hasOwnProperty(h)&&z!=null)switch(h){case"value":break;case"multiple":it=z;default:o.hasOwnProperty(h)||Ge(e,i,h,null,o,z)}for(c in o)if(h=o[c],z=s[c],o.hasOwnProperty(c)&&(h!=null||z!=null))switch(c){case"value":nt=h;break;case"defaultValue":A=h;break;case"multiple":S=h;default:h!==z&&Ge(e,i,c,h,o,z)}i=A,s=S,o=it,nt!=null?mn(e,!!s,nt,!1):!!o!=!!s&&(i!=null?mn(e,!!s,i,!0):mn(e,!!s,s?[]:"",!1));return;case"textarea":it=nt=null;for(A in s)if(c=s[A],s.hasOwnProperty(A)&&c!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Ge(e,i,A,null,o,c)}for(S in o)if(c=o[S],h=s[S],o.hasOwnProperty(S)&&(c!=null||h!=null))switch(S){case"value":nt=c;break;case"defaultValue":it=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(a(91));break;default:c!==h&&Ge(e,i,S,c,o,h)}Mn(e,nt,it);return;case"option":for(var ie in s)if(nt=s[ie],s.hasOwnProperty(ie)&&nt!=null&&!o.hasOwnProperty(ie))switch(ie){case"selected":e.selected=!1;break;default:Ge(e,i,ie,null,o,nt)}for(z in o)if(nt=o[z],it=s[z],o.hasOwnProperty(z)&&nt!==it&&(nt!=null||it!=null))switch(z){case"selected":e.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:Ge(e,i,z,nt,o,it)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in s)nt=s[te],s.hasOwnProperty(te)&&nt!=null&&!o.hasOwnProperty(te)&&Ge(e,i,te,null,o,nt);for($ in o)if(nt=o[$],it=s[$],o.hasOwnProperty($)&&nt!==it&&(nt!=null||it!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(a(137,i));break;default:Ge(e,i,$,nt,o,it)}return;default:if(tf(i)){for(var Ve in s)nt=s[Ve],s.hasOwnProperty(Ve)&&nt!==void 0&&!o.hasOwnProperty(Ve)&&Fh(e,i,Ve,void 0,o,nt);for(ct in o)nt=o[ct],it=s[ct],!o.hasOwnProperty(ct)||nt===it||nt===void 0&&it===void 0||Fh(e,i,ct,nt,o,it);return}}for(var W in s)nt=s[W],s.hasOwnProperty(W)&&nt!=null&&!o.hasOwnProperty(W)&&Ge(e,i,W,null,o,nt);for(_t in o)nt=o[_t],it=s[_t],!o.hasOwnProperty(_t)||nt===it||nt==null&&it==null||Ge(e,i,_t,nt,o,it)}var Hh=null,Gh=null;function Wu(e){return e.nodeType===9?e:e.ownerDocument}function nv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function iv(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function Vh(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var kh=null;function IS(){var e=window.event;return e&&e.type==="popstate"?e===kh?!1:(kh=e,!0):(kh=null,!1)}var av=typeof setTimeout=="function"?setTimeout:void 0,BS=typeof clearTimeout=="function"?clearTimeout:void 0,rv=typeof Promise=="function"?Promise:void 0,FS=typeof queueMicrotask=="function"?queueMicrotask:typeof rv<"u"?function(e){return rv.resolve(null).then(e).catch(HS)}:av;function HS(e){setTimeout(function(){throw e})}function Za(e){return e==="head"}function sv(e,i){var s=i,o=0,c=0;do{var h=s.nextSibling;if(e.removeChild(s),h&&h.nodeType===8)if(s=h.data,s==="/$"){if(0<o&&8>o){s=o;var S=e.ownerDocument;if(s&1&&cl(S.documentElement),s&2&&cl(S.body),s&4)for(s=S.head,cl(s),S=s.firstChild;S;){var A=S.nextSibling,z=S.nodeName;S[wa]||z==="SCRIPT"||z==="STYLE"||z==="LINK"&&S.rel.toLowerCase()==="stylesheet"||s.removeChild(S),S=A}}if(c===0){e.removeChild(h),vl(i);return}c--}else s==="$"||s==="$?"||s==="$!"?c++:o=s.charCodeAt(0)-48;else o=0;s=h}while(s);vl(i)}function Xh(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Xh(s),Da(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function GS(e,i,s,o){for(;e.nodeType===1;){var c=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[wa])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var h=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=bi(e.nextSibling),e===null)break}return null}function VS(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=bi(e.nextSibling),e===null))return null;return e}function Wh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function kS(e,i){var s=e.ownerDocument;if(e.data!=="$?"||s.readyState==="complete")i();else{var o=function(){i(),s.removeEventListener("DOMContentLoaded",o)};s.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function bi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var qh=null;function ov(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return e;i--}else s==="/$"&&i++}e=e.previousSibling}return null}function lv(e,i,s){switch(i=Wu(s),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function cl(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Da(e)}var gi=new Map,uv=new Set;function qu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var da=Z.d;Z.d={f:XS,r:WS,D:qS,C:YS,L:jS,m:ZS,X:QS,S:KS,M:JS};function XS(){var e=da.f(),i=Iu();return e||i}function WS(e){var i=Ki(e);i!==null&&i.tag===5&&i.type==="form"?wg(i):da.r(e)}var zs=typeof document>"u"?null:document;function cv(e,i,s){var o=zs;if(o&&typeof i=="string"&&i){var c=Ze(i);c='link[rel="'+e+'"][href="'+c+'"]',typeof s=="string"&&(c+='[crossorigin="'+s+'"]'),uv.has(c)||(uv.add(c),e={rel:e,crossOrigin:s,href:i},o.querySelector(c)===null&&(i=o.createElement("link"),Un(i,"link",e),un(i),o.head.appendChild(i)))}}function qS(e){da.D(e),cv("dns-prefetch",e,null)}function YS(e,i){da.C(e,i),cv("preconnect",e,i)}function jS(e,i,s){da.L(e,i,s);var o=zs;if(o&&e&&i){var c='link[rel="preload"][as="'+Ze(i)+'"]';i==="image"&&s&&s.imageSrcSet?(c+='[imagesrcset="'+Ze(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(c+='[imagesizes="'+Ze(s.imageSizes)+'"]')):c+='[href="'+Ze(e)+'"]';var h=c;switch(i){case"style":h=Is(e);break;case"script":h=Bs(e)}gi.has(h)||(e=g({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),gi.set(h,e),o.querySelector(c)!==null||i==="style"&&o.querySelector(fl(h))||i==="script"&&o.querySelector(hl(h))||(i=o.createElement("link"),Un(i,"link",e),un(i),o.head.appendChild(i)))}}function ZS(e,i){da.m(e,i);var s=zs;if(s&&e){var o=i&&typeof i.as=="string"?i.as:"script",c='link[rel="modulepreload"][as="'+Ze(o)+'"][href="'+Ze(e)+'"]',h=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Bs(e)}if(!gi.has(h)&&(e=g({rel:"modulepreload",href:e},i),gi.set(h,e),s.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(hl(h)))return}o=s.createElement("link"),Un(o,"link",e),un(o),s.head.appendChild(o)}}}function KS(e,i,s){da.S(e,i,s);var o=zs;if(o&&e){var c=Ua(o).hoistableStyles,h=Is(e);i=i||"default";var S=c.get(h);if(!S){var A={loading:0,preload:null};if(S=o.querySelector(fl(h)))A.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":i},s),(s=gi.get(h))&&Yh(e,s);var z=S=o.createElement("link");un(z),Un(z,"link",e),z._p=new Promise(function($,ct){z.onload=$,z.onerror=ct}),z.addEventListener("load",function(){A.loading|=1}),z.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Yu(S,i,o)}S={type:"stylesheet",instance:S,count:1,state:A},c.set(h,S)}}}function QS(e,i){da.X(e,i);var s=zs;if(s&&e){var o=Ua(s).hoistableScripts,c=Bs(e),h=o.get(c);h||(h=s.querySelector(hl(c)),h||(e=g({src:e,async:!0},i),(i=gi.get(c))&&jh(e,i),h=s.createElement("script"),un(h),Un(h,"link",e),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(c,h))}}function JS(e,i){da.M(e,i);var s=zs;if(s&&e){var o=Ua(s).hoistableScripts,c=Bs(e),h=o.get(c);h||(h=s.querySelector(hl(c)),h||(e=g({src:e,async:!0,type:"module"},i),(i=gi.get(c))&&jh(e,i),h=s.createElement("script"),un(h),Un(h,"link",e),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(c,h))}}function fv(e,i,s,o){var c=(c=St.current)?qu(c):null;if(!c)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Is(s.href),s=Ua(c).hoistableStyles,o=s.get(i),o||(o={type:"style",instance:null,count:0,state:null},s.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=Is(s.href);var h=Ua(c).hoistableStyles,S=h.get(e);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,S),(h=c.querySelector(fl(e)))&&!h._p&&(S.instance=h,S.state.loading=5),gi.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},gi.set(e,s),h||$S(c,e,s,S.state))),i&&o===null)throw Error(a(528,""));return S}if(i&&o!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Bs(s),s=Ua(c).hoistableScripts,o=s.get(i),o||(o={type:"script",instance:null,count:0,state:null},s.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Is(e){return'href="'+Ze(e)+'"'}function fl(e){return'link[rel="stylesheet"]['+e+"]"}function hv(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function $S(e,i,s,o){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=e.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),Un(i,"link",s),un(i),e.head.appendChild(i))}function Bs(e){return'[src="'+Ze(e)+'"]'}function hl(e){return"script[async]"+e}function dv(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var o=e.querySelector('style[data-href~="'+Ze(s.href)+'"]');if(o)return i.instance=o,un(o),o;var c=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),un(o),Un(o,"style",c),Yu(o,s.precedence,e),i.instance=o;case"stylesheet":c=Is(s.href);var h=e.querySelector(fl(c));if(h)return i.state.loading|=4,i.instance=h,un(h),h;o=hv(s),(c=gi.get(c))&&Yh(o,c),h=(e.ownerDocument||e).createElement("link"),un(h);var S=h;return S._p=new Promise(function(A,z){S.onload=A,S.onerror=z}),Un(h,"link",o),i.state.loading|=4,Yu(h,s.precedence,e),i.instance=h;case"script":return h=Bs(s.src),(c=e.querySelector(hl(h)))?(i.instance=c,un(c),c):(o=s,(c=gi.get(h))&&(o=g({},s),jh(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),un(c),Un(c,"link",o),e.head.appendChild(c),i.instance=c);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,Yu(o,s.precedence,e));return i.instance}function Yu(e,i,s){for(var o=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,h=c,S=0;S<o.length;S++){var A=o[S];if(A.dataset.precedence===i)h=A;else if(h!==c)break}h?h.parentNode.insertBefore(e,h.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function Yh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function jh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var ju=null;function pv(e,i,s){if(ju===null){var o=new Map,c=ju=new Map;c.set(s,o)}else c=ju,o=c.get(s),o||(o=new Map,c.set(s,o));if(o.has(e))return o;for(o.set(e,null),s=s.getElementsByTagName(e),c=0;c<s.length;c++){var h=s[c];if(!(h[wa]||h[pn]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var S=h.getAttribute(i)||"";S=e+S;var A=o.get(S);A?A.push(h):o.set(S,[h])}}return o}function mv(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function tM(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function gv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var dl=null;function eM(){}function nM(e,i,s){if(dl===null)throw Error(a(475));var o=dl;if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var c=Is(s.href),h=e.querySelector(fl(c));if(h){e=h._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=Zu.bind(o),e.then(o,o)),i.state.loading|=4,i.instance=h,un(h);return}h=e.ownerDocument||e,s=hv(s),(c=gi.get(c))&&Yh(s,c),h=h.createElement("link"),un(h);var S=h;S._p=new Promise(function(A,z){S.onload=A,S.onerror=z}),Un(h,"link",s),i.instance=h}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(o.count++,i=Zu.bind(o),e.addEventListener("load",i),e.addEventListener("error",i))}}function iM(){if(dl===null)throw Error(a(475));var e=dl;return e.stylesheets&&e.count===0&&Zh(e,e.stylesheets),0<e.count?function(i){var s=setTimeout(function(){if(e.stylesheets&&Zh(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(s)}}:null}function Zu(){if(this.count--,this.count===0){if(this.stylesheets)Zh(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ku=null;function Zh(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ku=new Map,i.forEach(aM,e),Ku=null,Zu.call(e))}function aM(e,i){if(!(i.state.loading&4)){var s=Ku.get(e);if(s)var o=s.get(null);else{s=new Map,Ku.set(e,s);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<c.length;h++){var S=c[h];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(s.set(S.dataset.precedence,S),o=S)}o&&s.set(null,o)}c=i.instance,S=c.getAttribute("data-precedence"),h=s.get(S)||o,h===o&&s.set(null,c),s.set(S,c),this.count++,o=Zu.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),h?h.parentNode.insertBefore(c,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),i.state.loading|=4}}var pl={$$typeof:U,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function rM(e,i,s,o,c,h,S,A){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Tt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tt(0),this.hiddenUpdates=Tt(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=h,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function _v(e,i,s,o,c,h,S,A,z,$,ct,_t){return e=new rM(e,i,s,S,A,z,$,_t),i=1,h===!0&&(i|=24),h=ni(3,null,null,i),e.current=h,h.stateNode=e,i=Df(),i.refCount++,e.pooledCache=i,i.refCount++,h.memoizedState={element:o,isDehydrated:s,cache:i},Of(h),e}function vv(e){return e?(e=ms,e):ms}function yv(e,i,s,o,c,h){c=vv(c),o.context===null?o.context=c:o.pendingContext=c,o=za(i),o.payload={element:s},h=h===void 0?null:h,h!==null&&(o.callback=h),s=Ia(e,o,i),s!==null&&(oi(s,e,i),Xo(s,e,i))}function xv(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function Kh(e,i){xv(e,i),(e=e.alternate)&&xv(e,i)}function Sv(e){if(e.tag===13){var i=ps(e,67108864);i!==null&&oi(i,e,67108864),Kh(e,67108864)}}var Qu=!0;function sM(e,i,s,o){var c=I.T;I.T=null;var h=Z.p;try{Z.p=2,Qh(e,i,s,o)}finally{Z.p=h,I.T=c}}function oM(e,i,s,o){var c=I.T;I.T=null;var h=Z.p;try{Z.p=8,Qh(e,i,s,o)}finally{Z.p=h,I.T=c}}function Qh(e,i,s,o){if(Qu){var c=Jh(o);if(c===null)Bh(e,i,o,Ju,s),Ev(e,o);else if(uM(c,e,i,s,o))o.stopPropagation();else if(Ev(e,o),i&4&&-1<lM.indexOf(e)){for(;c!==null;){var h=Ki(c);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var S=Zt(h.pendingLanes);if(S!==0){var A=h;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var z=1<<31-Pt(S);A.entanglements[1]|=z,S&=~z}Gi(h),(Ie&6)===0&&(Pu=ue()+500,ol(0))}}break;case 13:A=ps(h,2),A!==null&&oi(A,h,2),Iu(),Kh(h,2)}if(h=Jh(o),h===null&&Bh(e,i,o,Ju,s),h===c)break;c=h}c!==null&&o.stopPropagation()}else Bh(e,i,o,null,s)}}function Jh(e){return e=nf(e),$h(e)}var Ju=null;function $h(e){if(Ju=null,e=Zi(e),e!==null){var i=u(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=f(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Ju=e,null}function Mv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Gt()){case xe:return 2;case jt:return 8;case ae:case Qe:return 32;case O:return 268435456;default:return 32}default:return 32}}var td=!1,Ka=null,Qa=null,Ja=null,ml=new Map,gl=new Map,$a=[],lM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ev(e,i){switch(e){case"focusin":case"focusout":Ka=null;break;case"dragenter":case"dragleave":Qa=null;break;case"mouseover":case"mouseout":Ja=null;break;case"pointerover":case"pointerout":ml.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":gl.delete(i.pointerId)}}function _l(e,i,s,o,c,h){return e===null||e.nativeEvent!==h?(e={blockedOn:i,domEventName:s,eventSystemFlags:o,nativeEvent:h,targetContainers:[c]},i!==null&&(i=Ki(i),i!==null&&Sv(i)),e):(e.eventSystemFlags|=o,i=e.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),e)}function uM(e,i,s,o,c){switch(i){case"focusin":return Ka=_l(Ka,e,i,s,o,c),!0;case"dragenter":return Qa=_l(Qa,e,i,s,o,c),!0;case"mouseover":return Ja=_l(Ja,e,i,s,o,c),!0;case"pointerover":var h=c.pointerId;return ml.set(h,_l(ml.get(h)||null,e,i,s,o,c)),!0;case"gotpointercapture":return h=c.pointerId,gl.set(h,_l(gl.get(h)||null,e,i,s,o,c)),!0}return!1}function Tv(e){var i=Zi(e.target);if(i!==null){var s=u(i);if(s!==null){if(i=s.tag,i===13){if(i=f(s),i!==null){e.blockedOn=i,ti(e.priority,function(){if(s.tag===13){var o=si();o=re(o);var c=ps(s,o);c!==null&&oi(c,s,o),Kh(s,o)}});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $u(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=Jh(e.nativeEvent);if(s===null){s=e.nativeEvent;var o=new s.constructor(s.type,s);ef=o,s.target.dispatchEvent(o),ef=null}else return i=Ki(s),i!==null&&Sv(i),e.blockedOn=s,!1;i.shift()}return!0}function bv(e,i,s){$u(e)&&s.delete(i)}function cM(){td=!1,Ka!==null&&$u(Ka)&&(Ka=null),Qa!==null&&$u(Qa)&&(Qa=null),Ja!==null&&$u(Ja)&&(Ja=null),ml.forEach(bv),gl.forEach(bv)}function tc(e,i){e.blockedOn===i&&(e.blockedOn=null,td||(td=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,cM)))}var ec=null;function Av(e){ec!==e&&(ec=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){ec===e&&(ec=null);for(var i=0;i<e.length;i+=3){var s=e[i],o=e[i+1],c=e[i+2];if(typeof o!="function"){if($h(o||s)===null)continue;break}var h=Ki(s);h!==null&&(e.splice(i,3),i-=3,$f(h,{pending:!0,data:c,method:s.method,action:o},o,c))}}))}function vl(e){function i(z){return tc(z,e)}Ka!==null&&tc(Ka,e),Qa!==null&&tc(Qa,e),Ja!==null&&tc(Ja,e),ml.forEach(i),gl.forEach(i);for(var s=0;s<$a.length;s++){var o=$a[s];o.blockedOn===e&&(o.blockedOn=null)}for(;0<$a.length&&(s=$a[0],s.blockedOn===null);)Tv(s),s.blockedOn===null&&$a.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(o=0;o<s.length;o+=3){var c=s[o],h=s[o+1],S=c[Rn]||null;if(typeof h=="function")S||Av(s);else if(S){var A=null;if(h&&h.hasAttribute("formAction")){if(c=h,S=h[Rn]||null)A=S.formAction;else if($h(c)!==null)continue}else A=S.action;typeof A=="function"?s[o+1]=A:(s.splice(o,3),o-=3),Av(s)}}}function ed(e){this._internalRoot=e}nc.prototype.render=ed.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,o=si();yv(s,o,e,i,null,null)},nc.prototype.unmount=ed.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;yv(e.current,2,null,e,null,null),Iu(),i[Yn]=null}};function nc(e){this._internalRoot=e}nc.prototype.unstable_scheduleHydration=function(e){if(e){var i=Re();e={blockedOn:null,target:e,priority:i};for(var s=0;s<$a.length&&i!==0&&i<$a[s].priority;s++);$a.splice(s,0,e),s===0&&Tv(e)}};var Rv=t.version;if(Rv!=="19.1.0")throw Error(a(527,Rv,"19.1.0"));Z.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=p(i),e=e!==null?m(e):null,e=e===null?null:e.stateNode,e};var fM={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ic.isDisabled&&ic.supportsFiber)try{ft=ic.inject(fM),ht=ic}catch{}}return xl.createRoot=function(e,i){if(!l(e))throw Error(a(299));var s=!1,o="",c=kg,h=Xg,S=Wg,A=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(c=i.onUncaughtError),i.onCaughtError!==void 0&&(h=i.onCaughtError),i.onRecoverableError!==void 0&&(S=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(A=i.unstable_transitionCallbacks)),i=_v(e,1,!1,null,null,s,o,c,h,S,A,null),e[Yn]=i.current,Ih(e),new ed(i)},xl.hydrateRoot=function(e,i,s){if(!l(e))throw Error(a(299));var o=!1,c="",h=kg,S=Xg,A=Wg,z=null,$=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onUncaughtError!==void 0&&(h=s.onUncaughtError),s.onCaughtError!==void 0&&(S=s.onCaughtError),s.onRecoverableError!==void 0&&(A=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(z=s.unstable_transitionCallbacks),s.formState!==void 0&&($=s.formState)),i=_v(e,1,!0,i,s??null,o,c,h,S,A,z,$),i.context=vv(null),s=i.current,o=si(),o=re(o),c=za(o),c.callback=null,Ia(s,c,o),s=o,i.current.lanes=s,Bt(i,s),Gi(i),e[Yn]=i.current,Ih(e),new nc(i)},xl.version="19.1.0",xl}var Bv;function MM(){if(Bv)return rd.exports;Bv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),rd.exports=SM(),rd.exports}var EM=MM();const TM=hy(EM);var Wc=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(r){return this.listeners.add(r),this.onSubscribe(),()=>{this.listeners.delete(r),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},qc=typeof window>"u"||"Deno"in globalThis;function wi(){}function bM(r,t){return typeof r=="function"?r(t):r}function AM(r){return typeof r=="number"&&r>=0&&r!==1/0}function RM(r,t){return Math.max(r+(t||0)-Date.now(),0)}function Vd(r,t){return typeof r=="function"?r(t):r}function CM(r,t){return typeof r=="function"?r(t):r}function Fv(r,t){const{type:n="all",exact:a,fetchStatus:l,predicate:u,queryKey:f,stale:d}=r;if(f){if(a){if(t.queryHash!==Bp(f,t.options))return!1}else if(!Ol(t.queryKey,f))return!1}if(n!=="all"){const p=t.isActive();if(n==="active"&&!p||n==="inactive"&&p)return!1}return!(typeof d=="boolean"&&t.isStale()!==d||l&&l!==t.state.fetchStatus||u&&!u(t))}function Hv(r,t){const{exact:n,status:a,predicate:l,mutationKey:u}=r;if(u){if(!t.options.mutationKey)return!1;if(n){if(Nl(t.options.mutationKey)!==Nl(u))return!1}else if(!Ol(t.options.mutationKey,u))return!1}return!(a&&t.state.status!==a||l&&!l(t))}function Bp(r,t){return((t==null?void 0:t.queryKeyHashFn)||Nl)(r)}function Nl(r){return JSON.stringify(r,(t,n)=>kd(n)?Object.keys(n).sort().reduce((a,l)=>(a[l]=n[l],a),{}):n)}function Ol(r,t){return r===t?!0:typeof r!=typeof t?!1:r&&t&&typeof r=="object"&&typeof t=="object"?Object.keys(t).every(n=>Ol(r[n],t[n])):!1}function my(r,t){if(r===t)return r;const n=Gv(r)&&Gv(t);if(n||kd(r)&&kd(t)){const a=n?r:Object.keys(r),l=a.length,u=n?t:Object.keys(t),f=u.length,d=n?[]:{},p=new Set(a);let m=0;for(let g=0;g<f;g++){const _=n?g:u[g];(!n&&p.has(_)||n)&&r[_]===void 0&&t[_]===void 0?(d[_]=void 0,m++):(d[_]=my(r[_],t[_]),d[_]===r[_]&&r[_]!==void 0&&m++)}return l===f&&m===l?r:d}return t}function Gv(r){return Array.isArray(r)&&r.length===Object.keys(r).length}function kd(r){if(!Vv(r))return!1;const t=r.constructor;if(t===void 0)return!0;const n=t.prototype;return!(!Vv(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(r)!==Object.prototype)}function Vv(r){return Object.prototype.toString.call(r)==="[object Object]"}function wM(r){return new Promise(t=>{setTimeout(t,r)})}function DM(r,t,n){return typeof n.structuralSharing=="function"?n.structuralSharing(r,t):n.structuralSharing!==!1?my(r,t):t}function UM(r,t,n=0){const a=[...r,t];return n&&a.length>n?a.slice(1):a}function LM(r,t,n=0){const a=[t,...r];return n&&a.length>n?a.slice(0,-1):a}var Fp=Symbol();function gy(r,t){return!r.queryFn&&(t!=null&&t.initialPromise)?()=>t.initialPromise:!r.queryFn||r.queryFn===Fp?()=>Promise.reject(new Error(`Missing queryFn: '${r.queryHash}'`)):r.queryFn}var Qr,cr,uo,ay,NM=(ay=class extends Wc{constructor(){super();we(this,Qr);we(this,cr);we(this,uo);ce(this,uo,t=>{if(!qc&&window.addEventListener){const n=()=>t();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){pt(this,cr)||this.setEventListener(pt(this,uo))}onUnsubscribe(){var t;this.hasListeners()||((t=pt(this,cr))==null||t.call(this),ce(this,cr,void 0))}setEventListener(t){var n;ce(this,uo,t),(n=pt(this,cr))==null||n.call(this),ce(this,cr,t(a=>{typeof a=="boolean"?this.setFocused(a):this.onFocus()}))}setFocused(t){pt(this,Qr)!==t&&(ce(this,Qr,t),this.onFocus())}onFocus(){const t=this.isFocused();this.listeners.forEach(n=>{n(t)})}isFocused(){var t;return typeof pt(this,Qr)=="boolean"?pt(this,Qr):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"}},Qr=new WeakMap,cr=new WeakMap,uo=new WeakMap,ay),_y=new NM,co,fr,fo,ry,OM=(ry=class extends Wc{constructor(){super();we(this,co,!0);we(this,fr);we(this,fo);ce(this,fo,t=>{if(!qc&&window.addEventListener){const n=()=>t(!0),a=()=>t(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",a,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",a)}}})}onSubscribe(){pt(this,fr)||this.setEventListener(pt(this,fo))}onUnsubscribe(){var t;this.hasListeners()||((t=pt(this,fr))==null||t.call(this),ce(this,fr,void 0))}setEventListener(t){var n;ce(this,fo,t),(n=pt(this,fr))==null||n.call(this),ce(this,fr,t(this.setOnline.bind(this)))}setOnline(t){pt(this,co)!==t&&(ce(this,co,t),this.listeners.forEach(a=>{a(t)}))}isOnline(){return pt(this,co)}},co=new WeakMap,fr=new WeakMap,fo=new WeakMap,ry),Fc=new OM;function PM(){let r,t;const n=new Promise((l,u)=>{r=l,t=u});n.status="pending",n.catch(()=>{});function a(l){Object.assign(n,l),delete n.resolve,delete n.reject}return n.resolve=l=>{a({status:"fulfilled",value:l}),r(l)},n.reject=l=>{a({status:"rejected",reason:l}),t(l)},n}function zM(r){return Math.min(1e3*2**r,3e4)}function vy(r){return(r??"online")==="online"?Fc.isOnline():!0}var yy=class extends Error{constructor(r){super("CancelledError"),this.revert=r==null?void 0:r.revert,this.silent=r==null?void 0:r.silent}};function ud(r){return r instanceof yy}function xy(r){let t=!1,n=0,a=!1,l;const u=PM(),f=b=>{var x;a||(v(new yy(b)),(x=r.abort)==null||x.call(r))},d=()=>{t=!0},p=()=>{t=!1},m=()=>_y.isFocused()&&(r.networkMode==="always"||Fc.isOnline())&&r.canRun(),g=()=>vy(r.networkMode)&&r.canRun(),_=b=>{var x;a||(a=!0,(x=r.onSuccess)==null||x.call(r,b),l==null||l(),u.resolve(b))},v=b=>{var x;a||(a=!0,(x=r.onError)==null||x.call(r,b),l==null||l(),u.reject(b))},M=()=>new Promise(b=>{var x;l=y=>{(a||m())&&b(y)},(x=r.onPause)==null||x.call(r)}).then(()=>{var b;l=void 0,a||(b=r.onContinue)==null||b.call(r)}),E=()=>{if(a)return;let b;const x=n===0?r.initialPromise:void 0;try{b=x??r.fn()}catch(y){b=Promise.reject(y)}Promise.resolve(b).then(_).catch(y=>{var B;if(a)return;const N=r.retry??(qc?0:3),U=r.retryDelay??zM,D=typeof U=="function"?U(n,y):U,F=N===!0||typeof N=="number"&&n<N||typeof N=="function"&&N(n,y);if(t||!F){v(y);return}n++,(B=r.onFail)==null||B.call(r,n,y),wM(D).then(()=>m()?void 0:M()).then(()=>{t?v(y):E()})})};return{promise:u,cancel:f,continue:()=>(l==null||l(),u),cancelRetry:d,continueRetry:p,canStart:g,start:()=>(g()?E():M().then(E),u)}}var IM=r=>setTimeout(r,0);function BM(){let r=[],t=0,n=d=>{d()},a=d=>{d()},l=IM;const u=d=>{t?r.push(d):l(()=>{n(d)})},f=()=>{const d=r;r=[],d.length&&l(()=>{a(()=>{d.forEach(p=>{n(p)})})})};return{batch:d=>{let p;t++;try{p=d()}finally{t--,t||f()}return p},batchCalls:d=>(...p)=>{u(()=>{d(...p)})},schedule:u,setNotifyFunction:d=>{n=d},setBatchNotifyFunction:d=>{a=d},setScheduler:d=>{l=d}}}var Xn=BM(),Jr,sy,Sy=(sy=class{constructor(){we(this,Jr)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),AM(this.gcTime)&&ce(this,Jr,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(r){this.gcTime=Math.max(this.gcTime||0,r??(qc?1/0:5*60*1e3))}clearGcTimeout(){pt(this,Jr)&&(clearTimeout(pt(this,Jr)),ce(this,Jr,void 0))}},Jr=new WeakMap,sy),ho,po,vi,$r,Fn,Vl,ts,Di,ya,oy,FM=(oy=class extends Sy{constructor(t){super();we(this,Di);we(this,ho);we(this,po);we(this,vi);we(this,$r);we(this,Fn);we(this,Vl);we(this,ts);ce(this,ts,!1),ce(this,Vl,t.defaultOptions),this.setOptions(t.options),this.observers=[],ce(this,$r,t.client),ce(this,vi,pt(this,$r).getQueryCache()),this.queryKey=t.queryKey,this.queryHash=t.queryHash,ce(this,ho,GM(this.options)),this.state=t.state??pt(this,ho),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var t;return(t=pt(this,Fn))==null?void 0:t.promise}setOptions(t){this.options={...pt(this,Vl),...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&pt(this,vi).remove(this)}setData(t,n){const a=DM(this.state.data,t,this.options);return Pn(this,Di,ya).call(this,{data:a,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),a}setState(t,n){Pn(this,Di,ya).call(this,{type:"setState",state:t,setStateOptions:n})}cancel(t){var a,l;const n=(a=pt(this,Fn))==null?void 0:a.promise;return(l=pt(this,Fn))==null||l.cancel(t),n?n.then(wi).catch(wi):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(pt(this,ho))}isActive(){return this.observers.some(t=>CM(t.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Fp||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(t=>Vd(t.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(t=0){return this.state.data===void 0?!0:t==="static"?!1:this.state.isInvalidated?!0:!RM(this.state.dataUpdatedAt,t)}onFocus(){var n;const t=this.observers.find(a=>a.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(n=pt(this,Fn))==null||n.continue()}onOnline(){var n;const t=this.observers.find(a=>a.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(n=pt(this,Fn))==null||n.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),pt(this,vi).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(n=>n!==t),this.observers.length||(pt(this,Fn)&&(pt(this,ts)?pt(this,Fn).cancel({revert:!0}):pt(this,Fn).cancelRetry()),this.scheduleGc()),pt(this,vi).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Pn(this,Di,ya).call(this,{type:"invalidate"})}fetch(t,n){var m,g,_;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(pt(this,Fn))return pt(this,Fn).continueRetry(),pt(this,Fn).promise}if(t&&this.setOptions(t),!this.options.queryFn){const v=this.observers.find(M=>M.options.queryFn);v&&this.setOptions(v.options)}const a=new AbortController,l=v=>{Object.defineProperty(v,"signal",{enumerable:!0,get:()=>(ce(this,ts,!0),a.signal)})},u=()=>{const v=gy(this.options,n),E=(()=>{const b={client:pt(this,$r),queryKey:this.queryKey,meta:this.meta};return l(b),b})();return ce(this,ts,!1),this.options.persister?this.options.persister(v,E,this):v(E)},d=(()=>{const v={fetchOptions:n,options:this.options,queryKey:this.queryKey,client:pt(this,$r),state:this.state,fetchFn:u};return l(v),v})();(m=this.options.behavior)==null||m.onFetch(d,this),ce(this,po,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((g=d.fetchOptions)==null?void 0:g.meta))&&Pn(this,Di,ya).call(this,{type:"fetch",meta:(_=d.fetchOptions)==null?void 0:_.meta});const p=v=>{var M,E,b,x;ud(v)&&v.silent||Pn(this,Di,ya).call(this,{type:"error",error:v}),ud(v)||((E=(M=pt(this,vi).config).onError)==null||E.call(M,v,this),(x=(b=pt(this,vi).config).onSettled)==null||x.call(b,this.state.data,v,this)),this.scheduleGc()};return ce(this,Fn,xy({initialPromise:n==null?void 0:n.initialPromise,fn:d.fetchFn,abort:a.abort.bind(a),onSuccess:v=>{var M,E,b,x;if(v===void 0){p(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(v)}catch(y){p(y);return}(E=(M=pt(this,vi).config).onSuccess)==null||E.call(M,v,this),(x=(b=pt(this,vi).config).onSettled)==null||x.call(b,v,this.state.error,this),this.scheduleGc()},onError:p,onFail:(v,M)=>{Pn(this,Di,ya).call(this,{type:"failed",failureCount:v,error:M})},onPause:()=>{Pn(this,Di,ya).call(this,{type:"pause"})},onContinue:()=>{Pn(this,Di,ya).call(this,{type:"continue"})},retry:d.options.retry,retryDelay:d.options.retryDelay,networkMode:d.options.networkMode,canRun:()=>!0})),pt(this,Fn).start()}},ho=new WeakMap,po=new WeakMap,vi=new WeakMap,$r=new WeakMap,Fn=new WeakMap,Vl=new WeakMap,ts=new WeakMap,Di=new WeakSet,ya=function(t){const n=a=>{switch(t.type){case"failed":return{...a,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...a,fetchStatus:"paused"};case"continue":return{...a,fetchStatus:"fetching"};case"fetch":return{...a,...HM(a.data,this.options),fetchMeta:t.meta??null};case"success":return{...a,data:t.data,dataUpdateCount:a.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const l=t.error;return ud(l)&&l.revert&&pt(this,po)?{...pt(this,po),fetchStatus:"idle"}:{...a,error:l,errorUpdateCount:a.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:a.fetchFailureCount+1,fetchFailureReason:l,fetchStatus:"idle",status:"error"};case"invalidate":return{...a,isInvalidated:!0};case"setState":return{...a,...t.state}}};this.state=n(this.state),Xn.batch(()=>{this.observers.forEach(a=>{a.onQueryUpdate()}),pt(this,vi).notify({query:this,type:"updated",action:t})})},oy);function HM(r,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:vy(t.networkMode)?"fetching":"paused",...r===void 0&&{error:null,status:"pending"}}}function GM(r){const t=typeof r.initialData=="function"?r.initialData():r.initialData,n=t!==void 0,a=n?typeof r.initialDataUpdatedAt=="function"?r.initialDataUpdatedAt():r.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?a??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var Vi,ly,VM=(ly=class extends Wc{constructor(t={}){super();we(this,Vi);this.config=t,ce(this,Vi,new Map)}build(t,n,a){const l=n.queryKey,u=n.queryHash??Bp(l,n);let f=this.get(u);return f||(f=new FM({client:t,queryKey:l,queryHash:u,options:t.defaultQueryOptions(n),state:a,defaultOptions:t.getQueryDefaults(l)}),this.add(f)),f}add(t){pt(this,Vi).has(t.queryHash)||(pt(this,Vi).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const n=pt(this,Vi).get(t.queryHash);n&&(t.destroy(),n===t&&pt(this,Vi).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){Xn.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return pt(this,Vi).get(t)}getAll(){return[...pt(this,Vi).values()]}find(t){const n={exact:!0,...t};return this.getAll().find(a=>Fv(n,a))}findAll(t={}){const n=this.getAll();return Object.keys(t).length>0?n.filter(a=>Fv(t,a)):n}notify(t){Xn.batch(()=>{this.listeners.forEach(n=>{n(t)})})}onFocus(){Xn.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){Xn.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},Vi=new WeakMap,ly),ki,kn,es,Xi,or,uy,kM=(uy=class extends Sy{constructor(t){super();we(this,Xi);we(this,ki);we(this,kn);we(this,es);this.mutationId=t.mutationId,ce(this,kn,t.mutationCache),ce(this,ki,[]),this.state=t.state||XM(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){pt(this,ki).includes(t)||(pt(this,ki).push(t),this.clearGcTimeout(),pt(this,kn).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){ce(this,ki,pt(this,ki).filter(n=>n!==t)),this.scheduleGc(),pt(this,kn).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){pt(this,ki).length||(this.state.status==="pending"?this.scheduleGc():pt(this,kn).remove(this))}continue(){var t;return((t=pt(this,es))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var u,f,d,p,m,g,_,v,M,E,b,x,y,N,U,D,F,B,H,X;const n=()=>{Pn(this,Xi,or).call(this,{type:"continue"})};ce(this,es,xy({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(w,C)=>{Pn(this,Xi,or).call(this,{type:"failed",failureCount:w,error:C})},onPause:()=>{Pn(this,Xi,or).call(this,{type:"pause"})},onContinue:n,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>pt(this,kn).canRun(this)}));const a=this.state.status==="pending",l=!pt(this,es).canStart();try{if(a)n();else{Pn(this,Xi,or).call(this,{type:"pending",variables:t,isPaused:l}),await((f=(u=pt(this,kn).config).onMutate)==null?void 0:f.call(u,t,this));const C=await((p=(d=this.options).onMutate)==null?void 0:p.call(d,t));C!==this.state.context&&Pn(this,Xi,or).call(this,{type:"pending",context:C,variables:t,isPaused:l})}const w=await pt(this,es).start();return await((g=(m=pt(this,kn).config).onSuccess)==null?void 0:g.call(m,w,t,this.state.context,this)),await((v=(_=this.options).onSuccess)==null?void 0:v.call(_,w,t,this.state.context)),await((E=(M=pt(this,kn).config).onSettled)==null?void 0:E.call(M,w,null,this.state.variables,this.state.context,this)),await((x=(b=this.options).onSettled)==null?void 0:x.call(b,w,null,t,this.state.context)),Pn(this,Xi,or).call(this,{type:"success",data:w}),w}catch(w){try{throw await((N=(y=pt(this,kn).config).onError)==null?void 0:N.call(y,w,t,this.state.context,this)),await((D=(U=this.options).onError)==null?void 0:D.call(U,w,t,this.state.context)),await((B=(F=pt(this,kn).config).onSettled)==null?void 0:B.call(F,void 0,w,this.state.variables,this.state.context,this)),await((X=(H=this.options).onSettled)==null?void 0:X.call(H,void 0,w,t,this.state.context)),w}finally{Pn(this,Xi,or).call(this,{type:"error",error:w})}}finally{pt(this,kn).runNext(this)}}},ki=new WeakMap,kn=new WeakMap,es=new WeakMap,Xi=new WeakSet,or=function(t){const n=a=>{switch(t.type){case"failed":return{...a,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...a,isPaused:!0};case"continue":return{...a,isPaused:!1};case"pending":return{...a,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...a,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...a,data:void 0,error:t.error,failureCount:a.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=n(this.state),Xn.batch(()=>{pt(this,ki).forEach(a=>{a.onMutationUpdate(t)}),pt(this,kn).notify({mutation:this,type:"updated",action:t})})},uy);function XM(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Sa,Ui,kl,cy,WM=(cy=class extends Wc{constructor(t={}){super();we(this,Sa);we(this,Ui);we(this,kl);this.config=t,ce(this,Sa,new Set),ce(this,Ui,new Map),ce(this,kl,0)}build(t,n,a){const l=new kM({mutationCache:this,mutationId:++ac(this,kl)._,options:t.defaultMutationOptions(n),state:a});return this.add(l),l}add(t){pt(this,Sa).add(t);const n=rc(t);if(typeof n=="string"){const a=pt(this,Ui).get(n);a?a.push(t):pt(this,Ui).set(n,[t])}this.notify({type:"added",mutation:t})}remove(t){if(pt(this,Sa).delete(t)){const n=rc(t);if(typeof n=="string"){const a=pt(this,Ui).get(n);if(a)if(a.length>1){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}else a[0]===t&&pt(this,Ui).delete(n)}}this.notify({type:"removed",mutation:t})}canRun(t){const n=rc(t);if(typeof n=="string"){const a=pt(this,Ui).get(n),l=a==null?void 0:a.find(u=>u.state.status==="pending");return!l||l===t}else return!0}runNext(t){var a;const n=rc(t);if(typeof n=="string"){const l=(a=pt(this,Ui).get(n))==null?void 0:a.find(u=>u!==t&&u.state.isPaused);return(l==null?void 0:l.continue())??Promise.resolve()}else return Promise.resolve()}clear(){Xn.batch(()=>{pt(this,Sa).forEach(t=>{this.notify({type:"removed",mutation:t})}),pt(this,Sa).clear(),pt(this,Ui).clear()})}getAll(){return Array.from(pt(this,Sa))}find(t){const n={exact:!0,...t};return this.getAll().find(a=>Hv(n,a))}findAll(t={}){return this.getAll().filter(n=>Hv(t,n))}notify(t){Xn.batch(()=>{this.listeners.forEach(n=>{n(t)})})}resumePausedMutations(){const t=this.getAll().filter(n=>n.state.isPaused);return Xn.batch(()=>Promise.all(t.map(n=>n.continue().catch(wi))))}},Sa=new WeakMap,Ui=new WeakMap,kl=new WeakMap,cy);function rc(r){var t;return(t=r.options.scope)==null?void 0:t.id}function kv(r){return{onFetch:(t,n)=>{var g,_,v,M,E;const a=t.options,l=(v=(_=(g=t.fetchOptions)==null?void 0:g.meta)==null?void 0:_.fetchMore)==null?void 0:v.direction,u=((M=t.state.data)==null?void 0:M.pages)||[],f=((E=t.state.data)==null?void 0:E.pageParams)||[];let d={pages:[],pageParams:[]},p=0;const m=async()=>{let b=!1;const x=U=>{Object.defineProperty(U,"signal",{enumerable:!0,get:()=>(t.signal.aborted?b=!0:t.signal.addEventListener("abort",()=>{b=!0}),t.signal)})},y=gy(t.options,t.fetchOptions),N=async(U,D,F)=>{if(b)return Promise.reject();if(D==null&&U.pages.length)return Promise.resolve(U);const H=(()=>{const G={client:t.client,queryKey:t.queryKey,pageParam:D,direction:F?"backward":"forward",meta:t.options.meta};return x(G),G})(),X=await y(H),{maxPages:w}=t.options,C=F?LM:UM;return{pages:C(U.pages,X,w),pageParams:C(U.pageParams,D,w)}};if(l&&u.length){const U=l==="backward",D=U?qM:Xv,F={pages:u,pageParams:f},B=D(a,F);d=await N(F,B,U)}else{const U=r??u.length;do{const D=p===0?f[0]??a.initialPageParam:Xv(a,d);if(p>0&&D==null)break;d=await N(d,D),p++}while(p<U)}return d};t.options.persister?t.fetchFn=()=>{var b,x;return(x=(b=t.options).persister)==null?void 0:x.call(b,m,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n)}:t.fetchFn=m}}}function Xv(r,{pages:t,pageParams:n}){const a=t.length-1;return t.length>0?r.getNextPageParam(t[a],t,n[a],n):void 0}function qM(r,{pages:t,pageParams:n}){var a;return t.length>0?(a=r.getPreviousPageParam)==null?void 0:a.call(r,t[0],t,n[0],n):void 0}var rn,hr,dr,mo,go,pr,_o,vo,fy,YM=(fy=class{constructor(r={}){we(this,rn);we(this,hr);we(this,dr);we(this,mo);we(this,go);we(this,pr);we(this,_o);we(this,vo);ce(this,rn,r.queryCache||new VM),ce(this,hr,r.mutationCache||new WM),ce(this,dr,r.defaultOptions||{}),ce(this,mo,new Map),ce(this,go,new Map),ce(this,pr,0)}mount(){ac(this,pr)._++,pt(this,pr)===1&&(ce(this,_o,_y.subscribe(async r=>{r&&(await this.resumePausedMutations(),pt(this,rn).onFocus())})),ce(this,vo,Fc.subscribe(async r=>{r&&(await this.resumePausedMutations(),pt(this,rn).onOnline())})))}unmount(){var r,t;ac(this,pr)._--,pt(this,pr)===0&&((r=pt(this,_o))==null||r.call(this),ce(this,_o,void 0),(t=pt(this,vo))==null||t.call(this),ce(this,vo,void 0))}isFetching(r){return pt(this,rn).findAll({...r,fetchStatus:"fetching"}).length}isMutating(r){return pt(this,hr).findAll({...r,status:"pending"}).length}getQueryData(r){var n;const t=this.defaultQueryOptions({queryKey:r});return(n=pt(this,rn).get(t.queryHash))==null?void 0:n.state.data}ensureQueryData(r){const t=this.defaultQueryOptions(r),n=pt(this,rn).build(this,t),a=n.state.data;return a===void 0?this.fetchQuery(r):(r.revalidateIfStale&&n.isStaleByTime(Vd(t.staleTime,n))&&this.prefetchQuery(t),Promise.resolve(a))}getQueriesData(r){return pt(this,rn).findAll(r).map(({queryKey:t,state:n})=>{const a=n.data;return[t,a]})}setQueryData(r,t,n){const a=this.defaultQueryOptions({queryKey:r}),l=pt(this,rn).get(a.queryHash),u=l==null?void 0:l.state.data,f=bM(t,u);if(f!==void 0)return pt(this,rn).build(this,a).setData(f,{...n,manual:!0})}setQueriesData(r,t,n){return Xn.batch(()=>pt(this,rn).findAll(r).map(({queryKey:a})=>[a,this.setQueryData(a,t,n)]))}getQueryState(r){var n;const t=this.defaultQueryOptions({queryKey:r});return(n=pt(this,rn).get(t.queryHash))==null?void 0:n.state}removeQueries(r){const t=pt(this,rn);Xn.batch(()=>{t.findAll(r).forEach(n=>{t.remove(n)})})}resetQueries(r,t){const n=pt(this,rn);return Xn.batch(()=>(n.findAll(r).forEach(a=>{a.reset()}),this.refetchQueries({type:"active",...r},t)))}cancelQueries(r,t={}){const n={revert:!0,...t},a=Xn.batch(()=>pt(this,rn).findAll(r).map(l=>l.cancel(n)));return Promise.all(a).then(wi).catch(wi)}invalidateQueries(r,t={}){return Xn.batch(()=>(pt(this,rn).findAll(r).forEach(n=>{n.invalidate()}),(r==null?void 0:r.refetchType)==="none"?Promise.resolve():this.refetchQueries({...r,type:(r==null?void 0:r.refetchType)??(r==null?void 0:r.type)??"active"},t)))}refetchQueries(r,t={}){const n={...t,cancelRefetch:t.cancelRefetch??!0},a=Xn.batch(()=>pt(this,rn).findAll(r).filter(l=>!l.isDisabled()&&!l.isStatic()).map(l=>{let u=l.fetch(void 0,n);return n.throwOnError||(u=u.catch(wi)),l.state.fetchStatus==="paused"?Promise.resolve():u}));return Promise.all(a).then(wi)}fetchQuery(r){const t=this.defaultQueryOptions(r);t.retry===void 0&&(t.retry=!1);const n=pt(this,rn).build(this,t);return n.isStaleByTime(Vd(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(r){return this.fetchQuery(r).then(wi).catch(wi)}fetchInfiniteQuery(r){return r.behavior=kv(r.pages),this.fetchQuery(r)}prefetchInfiniteQuery(r){return this.fetchInfiniteQuery(r).then(wi).catch(wi)}ensureInfiniteQueryData(r){return r.behavior=kv(r.pages),this.ensureQueryData(r)}resumePausedMutations(){return Fc.isOnline()?pt(this,hr).resumePausedMutations():Promise.resolve()}getQueryCache(){return pt(this,rn)}getMutationCache(){return pt(this,hr)}getDefaultOptions(){return pt(this,dr)}setDefaultOptions(r){ce(this,dr,r)}setQueryDefaults(r,t){pt(this,mo).set(Nl(r),{queryKey:r,defaultOptions:t})}getQueryDefaults(r){const t=[...pt(this,mo).values()],n={};return t.forEach(a=>{Ol(r,a.queryKey)&&Object.assign(n,a.defaultOptions)}),n}setMutationDefaults(r,t){pt(this,go).set(Nl(r),{mutationKey:r,defaultOptions:t})}getMutationDefaults(r){const t=[...pt(this,go).values()],n={};return t.forEach(a=>{Ol(r,a.mutationKey)&&Object.assign(n,a.defaultOptions)}),n}defaultQueryOptions(r){if(r._defaulted)return r;const t={...pt(this,dr).queries,...this.getQueryDefaults(r.queryKey),...r,_defaulted:!0};return t.queryHash||(t.queryHash=Bp(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===Fp&&(t.enabled=!1),t}defaultMutationOptions(r){return r!=null&&r._defaulted?r:{...pt(this,dr).mutations,...(r==null?void 0:r.mutationKey)&&this.getMutationDefaults(r.mutationKey),...r,_defaulted:!0}}clear(){pt(this,rn).clear(),pt(this,hr).clear()}},rn=new WeakMap,hr=new WeakMap,dr=new WeakMap,mo=new WeakMap,go=new WeakMap,pr=new WeakMap,_o=new WeakMap,vo=new WeakMap,fy);py();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pl(){return Pl=Object.assign?Object.assign.bind():function(r){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])}return r},Pl.apply(this,arguments)}var mr;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})(mr||(mr={}));const Wv="popstate";function jM(r){r===void 0&&(r={});function t(a,l){let{pathname:u,search:f,hash:d}=a.location;return Xd("",{pathname:u,search:f,hash:d},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(a,l){return typeof l=="string"?l:Hc(l)}return KM(t,n,null,r)}function dn(r,t){if(r===!1||r===null||typeof r>"u")throw new Error(t)}function My(r,t){if(!r){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ZM(){return Math.random().toString(36).substr(2,8)}function qv(r,t){return{usr:r.state,key:r.key,idx:t}}function Xd(r,t,n,a){return n===void 0&&(n=null),Pl({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof t=="string"?To(t):t,{state:n,key:t&&t.key||a||ZM()})}function Hc(r){let{pathname:t="/",search:n="",hash:a=""}=r;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),a&&a!=="#"&&(t+=a.charAt(0)==="#"?a:"#"+a),t}function To(r){let t={};if(r){let n=r.indexOf("#");n>=0&&(t.hash=r.substr(n),r=r.substr(0,n));let a=r.indexOf("?");a>=0&&(t.search=r.substr(a),r=r.substr(0,a)),r&&(t.pathname=r)}return t}function KM(r,t,n,a){a===void 0&&(a={});let{window:l=document.defaultView,v5Compat:u=!1}=a,f=l.history,d=mr.Pop,p=null,m=g();m==null&&(m=0,f.replaceState(Pl({},f.state,{idx:m}),""));function g(){return(f.state||{idx:null}).idx}function _(){d=mr.Pop;let x=g(),y=x==null?null:x-m;m=x,p&&p({action:d,location:b.location,delta:y})}function v(x,y){d=mr.Push;let N=Xd(b.location,x,y);m=g()+1;let U=qv(N,m),D=b.createHref(N);try{f.pushState(U,"",D)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;l.location.assign(D)}u&&p&&p({action:d,location:b.location,delta:1})}function M(x,y){d=mr.Replace;let N=Xd(b.location,x,y);m=g();let U=qv(N,m),D=b.createHref(N);f.replaceState(U,"",D),u&&p&&p({action:d,location:b.location,delta:0})}function E(x){let y=l.location.origin!=="null"?l.location.origin:l.location.href,N=typeof x=="string"?x:Hc(x);return N=N.replace(/ $/,"%20"),dn(y,"No window.location.(origin|href) available to create URL for href: "+N),new URL(N,y)}let b={get action(){return d},get location(){return r(l,f)},listen(x){if(p)throw new Error("A history only accepts one active listener");return l.addEventListener(Wv,_),p=x,()=>{l.removeEventListener(Wv,_),p=null}},createHref(x){return t(l,x)},createURL:E,encodeLocation(x){let y=E(x);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:v,replace:M,go(x){return f.go(x)}};return b}var Yv;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})(Yv||(Yv={}));function QM(r,t,n){return n===void 0&&(n="/"),JM(r,t,n)}function JM(r,t,n,a){let l=typeof t=="string"?To(t):t,u=Hp(l.pathname||"/",n);if(u==null)return null;let f=Ey(r);$M(f);let d=null;for(let p=0;d==null&&p<f.length;++p){let m=fE(u);d=lE(f[p],m)}return d}function Ey(r,t,n,a){t===void 0&&(t=[]),n===void 0&&(n=[]),a===void 0&&(a="");let l=(u,f,d)=>{let p={relativePath:d===void 0?u.path||"":d,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};p.relativePath.startsWith("/")&&(dn(p.relativePath.startsWith(a),'Absolute route path "'+p.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),p.relativePath=p.relativePath.slice(a.length));let m=gr([a,p.relativePath]),g=n.concat(p);u.children&&u.children.length>0&&(dn(u.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+m+'".')),Ey(u.children,t,g,m)),!(u.path==null&&!u.index)&&t.push({path:m,score:sE(m,u.index),routesMeta:g})};return r.forEach((u,f)=>{var d;if(u.path===""||!((d=u.path)!=null&&d.includes("?")))l(u,f);else for(let p of Ty(u.path))l(u,f,p)}),t}function Ty(r){let t=r.split("/");if(t.length===0)return[];let[n,...a]=t,l=n.endsWith("?"),u=n.replace(/\?$/,"");if(a.length===0)return l?[u,""]:[u];let f=Ty(a.join("/")),d=[];return d.push(...f.map(p=>p===""?u:[u,p].join("/"))),l&&d.push(...f),d.map(p=>r.startsWith("/")&&p===""?"/":p)}function $M(r){r.sort((t,n)=>t.score!==n.score?n.score-t.score:oE(t.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}const tE=/^:[\w-]+$/,eE=3,nE=2,iE=1,aE=10,rE=-2,jv=r=>r==="*";function sE(r,t){let n=r.split("/"),a=n.length;return n.some(jv)&&(a+=rE),t&&(a+=nE),n.filter(l=>!jv(l)).reduce((l,u)=>l+(tE.test(u)?eE:u===""?iE:aE),a)}function oE(r,t){return r.length===t.length&&r.slice(0,-1).every((a,l)=>a===t[l])?r[r.length-1]-t[t.length-1]:0}function lE(r,t,n){let{routesMeta:a}=r,l={},u="/",f=[];for(let d=0;d<a.length;++d){let p=a[d],m=d===a.length-1,g=u==="/"?t:t.slice(u.length)||"/",_=uE({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},g),v=p.route;if(!_)return null;Object.assign(l,_.params),f.push({params:l,pathname:gr([u,_.pathname]),pathnameBase:mE(gr([u,_.pathnameBase])),route:v}),_.pathnameBase!=="/"&&(u=gr([u,_.pathnameBase]))}return f}function uE(r,t){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[n,a]=cE(r.path,r.caseSensitive,r.end),l=t.match(n);if(!l)return null;let u=l[0],f=u.replace(/(.)\/+$/,"$1"),d=l.slice(1);return{params:a.reduce((m,g,_)=>{let{paramName:v,isOptional:M}=g;if(v==="*"){let b=d[_]||"";f=u.slice(0,u.length-b.length).replace(/(.)\/+$/,"$1")}const E=d[_];return M&&!E?m[v]=void 0:m[v]=(E||"").replace(/%2F/g,"/"),m},{}),pathname:u,pathnameBase:f,pattern:r}}function cE(r,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),My(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let a=[],l="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,d,p)=>(a.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(a.push({paramName:"*"}),l+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":r!==""&&r!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),a]}function fE(r){try{return r.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return My(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),r}}function Hp(r,t){if(t==="/")return r;if(!r.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=r.charAt(n);return a&&a!=="/"?null:r.slice(n)||"/"}function hE(r,t){t===void 0&&(t="/");let{pathname:n,search:a="",hash:l=""}=typeof r=="string"?To(r):r;return{pathname:n?n.startsWith("/")?n:dE(n,t):t,search:gE(a),hash:_E(l)}}function dE(r,t){let n=t.replace(/\/+$/,"").split("/");return r.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function cd(r,t,n,a){return"Cannot include a '"+r+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function pE(r){return r.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function by(r,t){let n=pE(r);return t?n.map((a,l)=>l===n.length-1?a.pathname:a.pathnameBase):n.map(a=>a.pathnameBase)}function Ay(r,t,n,a){a===void 0&&(a=!1);let l;typeof r=="string"?l=To(r):(l=Pl({},r),dn(!l.pathname||!l.pathname.includes("?"),cd("?","pathname","search",l)),dn(!l.pathname||!l.pathname.includes("#"),cd("#","pathname","hash",l)),dn(!l.search||!l.search.includes("#"),cd("#","search","hash",l)));let u=r===""||l.pathname==="",f=u?"/":l.pathname,d;if(f==null)d=n;else{let _=t.length-1;if(!a&&f.startsWith("..")){let v=f.split("/");for(;v[0]==="..";)v.shift(),_-=1;l.pathname=v.join("/")}d=_>=0?t[_]:"/"}let p=hE(l,d),m=f&&f!=="/"&&f.endsWith("/"),g=(u||f===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(m||g)&&(p.pathname+="/"),p}const gr=r=>r.join("/").replace(/\/\/+/g,"/"),mE=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),gE=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,_E=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function vE(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const Ry=["post","put","patch","delete"];new Set(Ry);const yE=["get",...Ry];new Set(yE);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zl(){return zl=Object.assign?Object.assign.bind():function(r){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])}return r},zl.apply(this,arguments)}const Gp=wt.createContext(null),xE=wt.createContext(null),rs=wt.createContext(null),Yc=wt.createContext(null),ss=wt.createContext({outlet:null,matches:[],isDataRoute:!1}),Cy=wt.createContext(null);function SE(r,t){let{relative:n}=t===void 0?{}:t;Xl()||dn(!1);let{basename:a,navigator:l}=wt.useContext(rs),{hash:u,pathname:f,search:d}=Dy(r,{relative:n}),p=f;return a!=="/"&&(p=f==="/"?a:gr([a,f])),l.createHref({pathname:p,search:d,hash:u})}function Xl(){return wt.useContext(Yc)!=null}function jc(){return Xl()||dn(!1),wt.useContext(Yc).location}function wy(r){wt.useContext(rs).static||wt.useLayoutEffect(r)}function ME(){let{isDataRoute:r}=wt.useContext(ss);return r?PE():EE()}function EE(){Xl()||dn(!1);let r=wt.useContext(Gp),{basename:t,future:n,navigator:a}=wt.useContext(rs),{matches:l}=wt.useContext(ss),{pathname:u}=jc(),f=JSON.stringify(by(l,n.v7_relativeSplatPath)),d=wt.useRef(!1);return wy(()=>{d.current=!0}),wt.useCallback(function(m,g){if(g===void 0&&(g={}),!d.current)return;if(typeof m=="number"){a.go(m);return}let _=Ay(m,JSON.parse(f),u,g.relative==="path");r==null&&t!=="/"&&(_.pathname=_.pathname==="/"?t:gr([t,_.pathname])),(g.replace?a.replace:a.push)(_,g.state,g)},[t,a,f,u,r])}function Dy(r,t){let{relative:n}=t===void 0?{}:t,{future:a}=wt.useContext(rs),{matches:l}=wt.useContext(ss),{pathname:u}=jc(),f=JSON.stringify(by(l,a.v7_relativeSplatPath));return wt.useMemo(()=>Ay(r,JSON.parse(f),u,n==="path"),[r,f,u,n])}function TE(r,t){return bE(r,t)}function bE(r,t,n,a){Xl()||dn(!1);let{navigator:l}=wt.useContext(rs),{matches:u}=wt.useContext(ss),f=u[u.length-1],d=f?f.params:{};f&&f.pathname;let p=f?f.pathnameBase:"/";f&&f.route;let m=jc(),g;if(t){var _;let x=typeof t=="string"?To(t):t;p==="/"||(_=x.pathname)!=null&&_.startsWith(p)||dn(!1),g=x}else g=m;let v=g.pathname||"/",M=v;if(p!=="/"){let x=p.replace(/^\//,"").split("/");M="/"+v.replace(/^\//,"").split("/").slice(x.length).join("/")}let E=QM(r,{pathname:M}),b=DE(E&&E.map(x=>Object.assign({},x,{params:Object.assign({},d,x.params),pathname:gr([p,l.encodeLocation?l.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?p:gr([p,l.encodeLocation?l.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),u,n,a);return t&&b?wt.createElement(Yc.Provider,{value:{location:zl({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:mr.Pop}},b):b}function AE(){let r=OE(),t=vE(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),n=r instanceof Error?r.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return wt.createElement(wt.Fragment,null,wt.createElement("h2",null,"Unexpected Application Error!"),wt.createElement("h3",{style:{fontStyle:"italic"}},t),n?wt.createElement("pre",{style:l},n):null,null)}const RE=wt.createElement(AE,null);class CE extends wt.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?wt.createElement(ss.Provider,{value:this.props.routeContext},wt.createElement(Cy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function wE(r){let{routeContext:t,match:n,children:a}=r,l=wt.useContext(Gp);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),wt.createElement(ss.Provider,{value:t},a)}function DE(r,t,n,a){var l;if(t===void 0&&(t=[]),n===void 0&&(n=null),a===void 0&&(a=null),r==null){var u;if(!n)return null;if(n.errors)r=n.matches;else if((u=a)!=null&&u.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)r=n.matches;else return null}let f=r,d=(l=n)==null?void 0:l.errors;if(d!=null){let g=f.findIndex(_=>_.route.id&&(d==null?void 0:d[_.route.id])!==void 0);g>=0||dn(!1),f=f.slice(0,Math.min(f.length,g+1))}let p=!1,m=-1;if(n&&a&&a.v7_partialHydration)for(let g=0;g<f.length;g++){let _=f[g];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(m=g),_.route.id){let{loaderData:v,errors:M}=n,E=_.route.loader&&v[_.route.id]===void 0&&(!M||M[_.route.id]===void 0);if(_.route.lazy||E){p=!0,m>=0?f=f.slice(0,m+1):f=[f[0]];break}}}return f.reduceRight((g,_,v)=>{let M,E=!1,b=null,x=null;n&&(M=d&&_.route.id?d[_.route.id]:void 0,b=_.route.errorElement||RE,p&&(m<0&&v===0?(zE("route-fallback"),E=!0,x=null):m===v&&(E=!0,x=_.route.hydrateFallbackElement||null)));let y=t.concat(f.slice(0,v+1)),N=()=>{let U;return M?U=b:E?U=x:_.route.Component?U=wt.createElement(_.route.Component,null):_.route.element?U=_.route.element:U=g,wt.createElement(wE,{match:_,routeContext:{outlet:g,matches:y,isDataRoute:n!=null},children:U})};return n&&(_.route.ErrorBoundary||_.route.errorElement||v===0)?wt.createElement(CE,{location:n.location,revalidation:n.revalidation,component:b,error:M,children:N(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):N()},null)}var Uy=function(r){return r.UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r}(Uy||{}),Ly=function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r}(Ly||{});function UE(r){let t=wt.useContext(Gp);return t||dn(!1),t}function LE(r){let t=wt.useContext(xE);return t||dn(!1),t}function NE(r){let t=wt.useContext(ss);return t||dn(!1),t}function Ny(r){let t=NE(),n=t.matches[t.matches.length-1];return n.route.id||dn(!1),n.route.id}function OE(){var r;let t=wt.useContext(Cy),n=LE(),a=Ny();return t!==void 0?t:(r=n.errors)==null?void 0:r[a]}function PE(){let{router:r}=UE(Uy.UseNavigateStable),t=Ny(Ly.UseNavigateStable),n=wt.useRef(!1);return wy(()=>{n.current=!0}),wt.useCallback(function(l,u){u===void 0&&(u={}),n.current&&(typeof l=="number"?r.navigate(l):r.navigate(l,zl({fromRouteId:t},u)))},[r,t])}const Zv={};function zE(r,t,n){Zv[r]||(Zv[r]=!0)}function IE(r,t){r==null||r.v7_startTransition,r==null||r.v7_relativeSplatPath}function Wd(r){dn(!1)}function BE(r){let{basename:t="/",children:n=null,location:a,navigationType:l=mr.Pop,navigator:u,static:f=!1,future:d}=r;Xl()&&dn(!1);let p=t.replace(/^\/*/,"/"),m=wt.useMemo(()=>({basename:p,navigator:u,static:f,future:zl({v7_relativeSplatPath:!1},d)}),[p,d,u,f]);typeof a=="string"&&(a=To(a));let{pathname:g="/",search:_="",hash:v="",state:M=null,key:E="default"}=a,b=wt.useMemo(()=>{let x=Hp(g,p);return x==null?null:{location:{pathname:x,search:_,hash:v,state:M,key:E},navigationType:l}},[p,g,_,v,M,E,l]);return b==null?null:wt.createElement(rs.Provider,{value:m},wt.createElement(Yc.Provider,{children:n,value:b}))}function FE(r){let{children:t,location:n}=r;return TE(qd(t),n)}new Promise(()=>{});function qd(r,t){t===void 0&&(t=[]);let n=[];return wt.Children.forEach(r,(a,l)=>{if(!wt.isValidElement(a))return;let u=[...t,l];if(a.type===wt.Fragment){n.push.apply(n,qd(a.props.children,u));return}a.type!==Wd&&dn(!1),!a.props.index||!a.props.children||dn(!1);let f={id:a.props.id||u.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(f.children=qd(a.props.children,u)),n.push(f)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yd(){return Yd=Object.assign?Object.assign.bind():function(r){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])}return r},Yd.apply(this,arguments)}function HE(r,t){if(r==null)return{};var n={},a=Object.keys(r),l,u;for(u=0;u<a.length;u++)l=a[u],!(t.indexOf(l)>=0)&&(n[l]=r[l]);return n}function GE(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function VE(r,t){return r.button===0&&(!t||t==="_self")&&!GE(r)}const kE=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],XE="6";try{window.__reactRouterVersion=XE}catch{}const WE="startTransition",Kv=_M[WE];function qE(r){let{basename:t,children:n,future:a,window:l}=r,u=wt.useRef();u.current==null&&(u.current=jM({window:l,v5Compat:!0}));let f=u.current,[d,p]=wt.useState({action:f.action,location:f.location}),{v7_startTransition:m}=a||{},g=wt.useCallback(_=>{m&&Kv?Kv(()=>p(_)):p(_)},[p,m]);return wt.useLayoutEffect(()=>f.listen(g),[f,g]),wt.useEffect(()=>IE(a),[a]),wt.createElement(BE,{basename:t,children:n,location:d.location,navigationType:d.action,navigator:f,future:a})}const YE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",jE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qv=wt.forwardRef(function(t,n){let{onClick:a,relative:l,reloadDocument:u,replace:f,state:d,target:p,to:m,preventScrollReset:g,viewTransition:_}=t,v=HE(t,kE),{basename:M}=wt.useContext(rs),E,b=!1;if(typeof m=="string"&&jE.test(m)&&(E=m,YE))try{let U=new URL(window.location.href),D=m.startsWith("//")?new URL(U.protocol+m):new URL(m),F=Hp(D.pathname,M);D.origin===U.origin&&F!=null?m=F+D.search+D.hash:b=!0}catch{}let x=SE(m,{relative:l}),y=ZE(m,{replace:f,state:d,target:p,preventScrollReset:g,relative:l,viewTransition:_});function N(U){a&&a(U),U.defaultPrevented||y(U)}return wt.createElement("a",Yd({},v,{href:E||x,onClick:b||u?a:N,ref:n,target:p}))});var Jv;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState"})(Jv||(Jv={}));var $v;(function(r){r.UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})($v||($v={}));function ZE(r,t){let{target:n,replace:a,state:l,preventScrollReset:u,relative:f,viewTransition:d}=t===void 0?{}:t,p=ME(),m=jc(),g=Dy(r,{relative:f});return wt.useCallback(_=>{if(VE(_,n)){_.preventDefault();let v=a!==void 0?a:Hc(m)===Hc(g);p(r,{replace:v,state:l,preventScrollReset:u,relative:f,viewTransition:d})}},[m,p,g,a,l,n,r,u,f,d])}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vp="177",ro={ROTATE:0,DOLLY:1,PAN:2},io={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},KE=0,t0=1,QE=2,Oy=1,JE=2,xa=3,yr=0,$n=1,Ma=2,_r=0,so=1,e0=2,n0=3,i0=4,$E=5,Yr=100,tT=101,eT=102,nT=103,iT=104,aT=200,rT=201,sT=202,oT=203,jd=204,Zd=205,lT=206,uT=207,cT=208,fT=209,hT=210,dT=211,pT=212,mT=213,gT=214,Kd=0,Qd=1,Jd=2,yo=3,$d=4,tp=5,ep=6,np=7,Py=0,_T=1,vT=2,vr=0,yT=1,xT=2,ST=3,MT=4,ET=5,TT=6,bT=7,zy=300,xo=301,So=302,ip=303,ap=304,Zc=306,rp=1e3,Zr=1001,sp=1002,Oi=1003,AT=1004,sc=1005,qi=1006,fd=1007,Kr=1008,Ra=1009,Iy=1010,By=1011,Il=1012,kp=1013,ns=1014,Ea=1015,Wl=1016,Xp=1017,Wp=1018,Bl=1020,Fy=35902,Hy=1021,Gy=1022,Ni=1023,Fl=1026,Hl=1027,Vy=1028,qp=1029,ky=1030,Yp=1031,jp=1033,Nc=33776,Oc=33777,Pc=33778,zc=33779,op=35840,lp=35841,up=35842,cp=35843,fp=36196,hp=37492,dp=37496,pp=37808,mp=37809,gp=37810,_p=37811,vp=37812,yp=37813,xp=37814,Sp=37815,Mp=37816,Ep=37817,Tp=37818,bp=37819,Ap=37820,Rp=37821,Ic=36492,Cp=36494,wp=36495,Xy=36283,Dp=36284,Up=36285,Lp=36286,RT=3200,CT=3201,wT=0,DT=1,ur="",yi="srgb",Mo="srgb-linear",Gc="linear",ke="srgb",Fs=7680,a0=519,UT=512,LT=513,NT=514,Wy=515,OT=516,PT=517,zT=518,IT=519,Np=35044,r0="300 es",Ta=2e3,Vc=2001;class os{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const l=a[t];if(l!==void 0){const u=l.indexOf(n);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const l=a.slice(0);for(let u=0,f=l.length;u<f;u++)l[u].call(this,t);t.target=null}}}const In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let s0=1234567;const Ul=Math.PI/180,Gl=180/Math.PI;function ba(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(In[r&255]+In[r>>8&255]+In[r>>16&255]+In[r>>24&255]+"-"+In[t&255]+In[t>>8&255]+"-"+In[t>>16&15|64]+In[t>>24&255]+"-"+In[n&63|128]+In[n>>8&255]+"-"+In[n>>16&255]+In[n>>24&255]+In[a&255]+In[a>>8&255]+In[a>>16&255]+In[a>>24&255]).toLowerCase()}function ye(r,t,n){return Math.max(t,Math.min(n,r))}function Zp(r,t){return(r%t+t)%t}function BT(r,t,n,a,l){return a+(r-t)*(l-a)/(n-t)}function FT(r,t,n){return r!==t?(n-r)/(t-r):0}function Ll(r,t,n){return(1-n)*r+n*t}function HT(r,t,n,a){return Ll(r,t,1-Math.exp(-n*a))}function GT(r,t=1){return t-Math.abs(Zp(r,t*2)-t)}function VT(r,t,n){return r<=t?0:r>=n?1:(r=(r-t)/(n-t),r*r*(3-2*r))}function kT(r,t,n){return r<=t?0:r>=n?1:(r=(r-t)/(n-t),r*r*r*(r*(r*6-15)+10))}function XT(r,t){return r+Math.floor(Math.random()*(t-r+1))}function WT(r,t){return r+Math.random()*(t-r)}function qT(r){return r*(.5-Math.random())}function YT(r){r!==void 0&&(s0=r);let t=s0+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function jT(r){return r*Ul}function ZT(r){return r*Gl}function KT(r){return(r&r-1)===0&&r!==0}function QT(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function JT(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function $T(r,t,n,a,l){const u=Math.cos,f=Math.sin,d=u(n/2),p=f(n/2),m=u((t+a)/2),g=f((t+a)/2),_=u((t-a)/2),v=f((t-a)/2),M=u((a-t)/2),E=f((a-t)/2);switch(l){case"XYX":r.set(d*g,p*_,p*v,d*m);break;case"YZY":r.set(p*v,d*g,p*_,d*m);break;case"ZXZ":r.set(p*_,p*v,d*g,d*m);break;case"XZX":r.set(d*g,p*E,p*M,d*m);break;case"YXY":r.set(p*M,d*g,p*E,d*m);break;case"ZYZ":r.set(p*E,p*M,d*g,d*m);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Li(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Fe(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Cl={DEG2RAD:Ul,RAD2DEG:Gl,generateUUID:ba,clamp:ye,euclideanModulo:Zp,mapLinear:BT,inverseLerp:FT,lerp:Ll,damp:HT,pingpong:GT,smoothstep:VT,smootherstep:kT,randInt:XT,randFloat:WT,randFloatSpread:qT,seededRandom:YT,degToRad:jT,radToDeg:ZT,isPowerOfTwo:KT,ceilPowerOfTwo:QT,floorPowerOfTwo:JT,setQuaternionFromProperEuler:$T,normalize:Fe,denormalize:Li};class le{constructor(t=0,n=0){le.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,l=t.elements;return this.x=l[0]*n+l[3]*a+l[6],this.y=l[1]*n+l[4]*a+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=ye(this.x,t.x,n.x),this.y=ye(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=ye(this.x,t,n),this.y=ye(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ye(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(ye(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),l=Math.sin(n),u=this.x-t.x,f=this.y-t.y;return this.x=u*a-f*l+t.x,this.y=u*l+f*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class is{constructor(t=0,n=0,a=0,l=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=l}static slerpFlat(t,n,a,l,u,f,d){let p=a[l+0],m=a[l+1],g=a[l+2],_=a[l+3];const v=u[f+0],M=u[f+1],E=u[f+2],b=u[f+3];if(d===0){t[n+0]=p,t[n+1]=m,t[n+2]=g,t[n+3]=_;return}if(d===1){t[n+0]=v,t[n+1]=M,t[n+2]=E,t[n+3]=b;return}if(_!==b||p!==v||m!==M||g!==E){let x=1-d;const y=p*v+m*M+g*E+_*b,N=y>=0?1:-1,U=1-y*y;if(U>Number.EPSILON){const F=Math.sqrt(U),B=Math.atan2(F,y*N);x=Math.sin(x*B)/F,d=Math.sin(d*B)/F}const D=d*N;if(p=p*x+v*D,m=m*x+M*D,g=g*x+E*D,_=_*x+b*D,x===1-d){const F=1/Math.sqrt(p*p+m*m+g*g+_*_);p*=F,m*=F,g*=F,_*=F}}t[n]=p,t[n+1]=m,t[n+2]=g,t[n+3]=_}static multiplyQuaternionsFlat(t,n,a,l,u,f){const d=a[l],p=a[l+1],m=a[l+2],g=a[l+3],_=u[f],v=u[f+1],M=u[f+2],E=u[f+3];return t[n]=d*E+g*_+p*M-m*v,t[n+1]=p*E+g*v+m*_-d*M,t[n+2]=m*E+g*M+d*v-p*_,t[n+3]=g*E-d*_-p*v-m*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,l){return this._x=t,this._y=n,this._z=a,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,l=t._y,u=t._z,f=t._order,d=Math.cos,p=Math.sin,m=d(a/2),g=d(l/2),_=d(u/2),v=p(a/2),M=p(l/2),E=p(u/2);switch(f){case"XYZ":this._x=v*g*_+m*M*E,this._y=m*M*_-v*g*E,this._z=m*g*E+v*M*_,this._w=m*g*_-v*M*E;break;case"YXZ":this._x=v*g*_+m*M*E,this._y=m*M*_-v*g*E,this._z=m*g*E-v*M*_,this._w=m*g*_+v*M*E;break;case"ZXY":this._x=v*g*_-m*M*E,this._y=m*M*_+v*g*E,this._z=m*g*E+v*M*_,this._w=m*g*_-v*M*E;break;case"ZYX":this._x=v*g*_-m*M*E,this._y=m*M*_+v*g*E,this._z=m*g*E-v*M*_,this._w=m*g*_+v*M*E;break;case"YZX":this._x=v*g*_+m*M*E,this._y=m*M*_+v*g*E,this._z=m*g*E-v*M*_,this._w=m*g*_-v*M*E;break;case"XZY":this._x=v*g*_-m*M*E,this._y=m*M*_-v*g*E,this._z=m*g*E+v*M*_,this._w=m*g*_+v*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,l=Math.sin(a);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],l=n[4],u=n[8],f=n[1],d=n[5],p=n[9],m=n[2],g=n[6],_=n[10],v=a+d+_;if(v>0){const M=.5/Math.sqrt(v+1);this._w=.25/M,this._x=(g-p)*M,this._y=(u-m)*M,this._z=(f-l)*M}else if(a>d&&a>_){const M=2*Math.sqrt(1+a-d-_);this._w=(g-p)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(u+m)/M}else if(d>_){const M=2*Math.sqrt(1+d-a-_);this._w=(u-m)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(p+g)/M}else{const M=2*Math.sqrt(1+_-a-d);this._w=(f-l)/M,this._x=(u+m)/M,this._y=(p+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<Number.EPSILON?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const l=Math.min(1,n/a);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,l=t._y,u=t._z,f=t._w,d=n._x,p=n._y,m=n._z,g=n._w;return this._x=a*g+f*d+l*m-u*p,this._y=l*g+f*p+u*d-a*m,this._z=u*g+f*m+a*p-l*d,this._w=f*g-a*d-l*p-u*m,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const a=this._x,l=this._y,u=this._z,f=this._w;let d=f*t._w+a*t._x+l*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=f,this._x=a,this._y=l,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const M=1-n;return this._w=M*f+n*this._w,this._x=M*a+n*this._x,this._y=M*l+n*this._y,this._z=M*u+n*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,d),_=Math.sin((1-n)*g)/m,v=Math.sin(n*g)/m;return this._w=f*_+this._w*v,this._x=a*_+this._x*v,this._y=l*_+this._y*v,this._z=u*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),l=Math.sqrt(1-a),u=Math.sqrt(a);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(n),u*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class tt{constructor(t=0,n=0,a=0){tt.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(o0.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(o0.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,l=this.z,u=t.elements;return this.x=u[0]*n+u[3]*a+u[6]*l,this.y=u[1]*n+u[4]*a+u[7]*l,this.z=u[2]*n+u[5]*a+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,l=this.z,u=t.elements,f=1/(u[3]*n+u[7]*a+u[11]*l+u[15]);return this.x=(u[0]*n+u[4]*a+u[8]*l+u[12])*f,this.y=(u[1]*n+u[5]*a+u[9]*l+u[13])*f,this.z=(u[2]*n+u[6]*a+u[10]*l+u[14])*f,this}applyQuaternion(t){const n=this.x,a=this.y,l=this.z,u=t.x,f=t.y,d=t.z,p=t.w,m=2*(f*l-d*a),g=2*(d*n-u*l),_=2*(u*a-f*n);return this.x=n+p*m+f*_-d*g,this.y=a+p*g+d*m-u*_,this.z=l+p*_+u*g-f*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,l=this.z,u=t.elements;return this.x=u[0]*n+u[4]*a+u[8]*l,this.y=u[1]*n+u[5]*a+u[9]*l,this.z=u[2]*n+u[6]*a+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=ye(this.x,t.x,n.x),this.y=ye(this.y,t.y,n.y),this.z=ye(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=ye(this.x,t,n),this.y=ye(this.y,t,n),this.z=ye(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ye(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,l=t.y,u=t.z,f=n.x,d=n.y,p=n.z;return this.x=l*p-u*d,this.y=u*f-a*p,this.z=a*d-l*f,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return hd.copy(this).projectOnVector(t),this.sub(hd)}reflect(t){return this.sub(hd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(ye(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,l=this.z-t.z;return n*n+a*a+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const l=Math.sin(n)*t;return this.x=l*Math.sin(a),this.y=Math.cos(n)*t,this.z=l*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=l,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hd=new tt,o0=new is;class de{constructor(t,n,a,l,u,f,d,p,m){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,l,u,f,d,p,m)}set(t,n,a,l,u,f,d,p,m){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=n,g[4]=u,g[5]=p,g[6]=a,g[7]=f,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,l=n.elements,u=this.elements,f=a[0],d=a[3],p=a[6],m=a[1],g=a[4],_=a[7],v=a[2],M=a[5],E=a[8],b=l[0],x=l[3],y=l[6],N=l[1],U=l[4],D=l[7],F=l[2],B=l[5],H=l[8];return u[0]=f*b+d*N+p*F,u[3]=f*x+d*U+p*B,u[6]=f*y+d*D+p*H,u[1]=m*b+g*N+_*F,u[4]=m*x+g*U+_*B,u[7]=m*y+g*D+_*H,u[2]=v*b+M*N+E*F,u[5]=v*x+M*U+E*B,u[8]=v*y+M*D+E*H,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],l=t[2],u=t[3],f=t[4],d=t[5],p=t[6],m=t[7],g=t[8];return n*f*g-n*d*m-a*u*g+a*d*p+l*u*m-l*f*p}invert(){const t=this.elements,n=t[0],a=t[1],l=t[2],u=t[3],f=t[4],d=t[5],p=t[6],m=t[7],g=t[8],_=g*f-d*m,v=d*p-g*u,M=m*u-f*p,E=n*_+a*v+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=_*b,t[1]=(l*m-g*a)*b,t[2]=(d*a-l*f)*b,t[3]=v*b,t[4]=(g*n-l*p)*b,t[5]=(l*u-d*n)*b,t[6]=M*b,t[7]=(a*p-m*n)*b,t[8]=(f*n-a*u)*b,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,l,u,f,d){const p=Math.cos(u),m=Math.sin(u);return this.set(a*p,a*m,-a*(p*f+m*d)+f+t,-l*m,l*p,-l*(-m*f+p*d)+d+n,0,0,1),this}scale(t,n){return this.premultiply(dd.makeScale(t,n)),this}rotate(t){return this.premultiply(dd.makeRotation(-t)),this}translate(t,n){return this.premultiply(dd.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let l=0;l<9;l++)if(n[l]!==a[l])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const dd=new de;function qy(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function kc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function tb(){const r=kc("canvas");return r.style.display="block",r}const l0={};function oo(r){r in l0||(l0[r]=!0,console.warn(r))}function eb(r,t,n){return new Promise(function(a,l){function u(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:a()}}setTimeout(u,n)})}function nb(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ib(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const u0=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),c0=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ab(){const r={enabled:!0,workingColorSpace:Mo,spaces:{},convert:function(l,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===ke&&(l.r=Aa(l.r),l.g=Aa(l.g),l.b=Aa(l.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===ke&&(l.r=lo(l.r),l.g=lo(l.g),l.b=lo(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ur?Gc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,f){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return oo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return oo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[Mo]:{primaries:t,whitePoint:a,transfer:Gc,toXYZ:u0,fromXYZ:c0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:yi},outputColorSpaceConfig:{drawingBufferColorSpace:yi}},[yi]:{primaries:t,whitePoint:a,transfer:ke,toXYZ:u0,fromXYZ:c0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:yi}}}),r}const De=ab();function Aa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function lo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Hs;class rb{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{Hs===void 0&&(Hs=kc("canvas")),Hs.width=t.width,Hs.height=t.height;const l=Hs.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),a=Hs}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=kc("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const l=a.getImageData(0,0,t.width,t.height),u=l.data;for(let f=0;f<u.length;f++)u[f]=Aa(u[f]/255)*255;return a.putImageData(l,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Aa(n[a]/255)*255):n[a]=Aa(n[a]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let sb=0;class Kp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sb++}),this.uuid=ba(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?u.push(pd(l[f].image)):u.push(pd(l[f]))}else u=pd(l);a.url=u}return n||(t.images[this.uuid]=a),a}}function pd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?rb.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ob=0;const md=new tt;class Wn extends os{constructor(t=Wn.DEFAULT_IMAGE,n=Wn.DEFAULT_MAPPING,a=Zr,l=Zr,u=qi,f=Kr,d=Ni,p=Ra,m=Wn.DEFAULT_ANISOTROPY,g=ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ob++}),this.uuid=ba(),this.name="",this.source=new Kp(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=l,this.magFilter=u,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(md).x}get height(){return this.source.getSize(md).y}get depth(){return this.source.getSize(md).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}l&&a&&l.isVector2&&a.isVector2||l&&a&&l.isVector3&&a.isVector3||l&&a&&l.isMatrix3&&a.isMatrix3?l.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zy)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case rp:t.x=t.x-Math.floor(t.x);break;case Zr:t.x=t.x<0?0:1;break;case sp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case rp:t.y=t.y-Math.floor(t.y);break;case Zr:t.y=t.y<0?0:1;break;case sp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=zy;Wn.DEFAULT_ANISOTROPY=1;class ln{constructor(t=0,n=0,a=0,l=1){ln.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,l){return this.x=t,this.y=n,this.z=a,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,l=this.z,u=this.w,f=t.elements;return this.x=f[0]*n+f[4]*a+f[8]*l+f[12]*u,this.y=f[1]*n+f[5]*a+f[9]*l+f[13]*u,this.z=f[2]*n+f[6]*a+f[10]*l+f[14]*u,this.w=f[3]*n+f[7]*a+f[11]*l+f[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,l,u;const p=t.elements,m=p[0],g=p[4],_=p[8],v=p[1],M=p[5],E=p[9],b=p[2],x=p[6],y=p[10];if(Math.abs(g-v)<.01&&Math.abs(_-b)<.01&&Math.abs(E-x)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+b)<.1&&Math.abs(E+x)<.1&&Math.abs(m+M+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const U=(m+1)/2,D=(M+1)/2,F=(y+1)/2,B=(g+v)/4,H=(_+b)/4,X=(E+x)/4;return U>D&&U>F?U<.01?(a=0,l=.707106781,u=.707106781):(a=Math.sqrt(U),l=B/a,u=H/a):D>F?D<.01?(a=.707106781,l=0,u=.707106781):(l=Math.sqrt(D),a=B/l,u=X/l):F<.01?(a=.707106781,l=.707106781,u=0):(u=Math.sqrt(F),a=H/u,l=X/u),this.set(a,l,u,n),this}let N=Math.sqrt((x-E)*(x-E)+(_-b)*(_-b)+(v-g)*(v-g));return Math.abs(N)<.001&&(N=1),this.x=(x-E)/N,this.y=(_-b)/N,this.z=(v-g)/N,this.w=Math.acos((m+M+y-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=ye(this.x,t.x,n.x),this.y=ye(this.y,t.y,n.y),this.z=ye(this.z,t.z,n.z),this.w=ye(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=ye(this.x,t,n),this.y=ye(this.y,t,n),this.z=ye(this.z,t,n),this.w=ye(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ye(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lb extends os{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new ln(0,0,t,n),this.scissorTest=!1,this.viewport=new ln(0,0,t,n);const l={width:t,height:n,depth:a.depth},u=new Wn(l);this.textures=[];const f=a.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const n={minFilter:qi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=n,this.textures[l].image.depth=a,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const l=Object.assign({},t.textures[n].image);this.textures[n].source=new Kp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class as extends lb{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class Yy extends Wn{constructor(t=null,n=1,a=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:l},this.magFilter=Oi,this.minFilter=Oi,this.wrapR=Zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ub extends Wn{constructor(t=null,n=1,a=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:l},this.magFilter=Oi,this.minFilter=Oi,this.wrapR=Zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ql{constructor(t=new tt(1/0,1/0,1/0),n=new tt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(Ai.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(Ai.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=Ai.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const u=a.getAttribute("position");if(n===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,Ai):Ai.fromBufferAttribute(u,f),Ai.applyMatrix4(t.matrixWorld),this.expandByPoint(Ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),oc.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),oc.copy(a.boundingBox)),oc.applyMatrix4(t.matrixWorld),this.union(oc)}const l=t.children;for(let u=0,f=l.length;u<f;u++)this.expandByObject(l[u],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ai),Ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Sl),lc.subVectors(this.max,Sl),Gs.subVectors(t.a,Sl),Vs.subVectors(t.b,Sl),ks.subVectors(t.c,Sl),er.subVectors(Vs,Gs),nr.subVectors(ks,Vs),Hr.subVectors(Gs,ks);let n=[0,-er.z,er.y,0,-nr.z,nr.y,0,-Hr.z,Hr.y,er.z,0,-er.x,nr.z,0,-nr.x,Hr.z,0,-Hr.x,-er.y,er.x,0,-nr.y,nr.x,0,-Hr.y,Hr.x,0];return!gd(n,Gs,Vs,ks,lc)||(n=[1,0,0,0,1,0,0,0,1],!gd(n,Gs,Vs,ks,lc))?!1:(uc.crossVectors(er,nr),n=[uc.x,uc.y,uc.z],gd(n,Gs,Vs,ks,lc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const pa=[new tt,new tt,new tt,new tt,new tt,new tt,new tt,new tt],Ai=new tt,oc=new ql,Gs=new tt,Vs=new tt,ks=new tt,er=new tt,nr=new tt,Hr=new tt,Sl=new tt,lc=new tt,uc=new tt,Gr=new tt;function gd(r,t,n,a,l){for(let u=0,f=r.length-3;u<=f;u+=3){Gr.fromArray(r,u);const d=l.x*Math.abs(Gr.x)+l.y*Math.abs(Gr.y)+l.z*Math.abs(Gr.z),p=t.dot(Gr),m=n.dot(Gr),g=a.dot(Gr);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>d)return!1}return!0}const cb=new ql,Ml=new tt,_d=new tt;class Kc{constructor(t=new tt,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):cb.setFromPoints(t).getCenter(a);let l=0;for(let u=0,f=t.length;u<f;u++)l=Math.max(l,a.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ml.subVectors(t,this.center);const n=Ml.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),l=(a-this.radius)*.5;this.center.addScaledVector(Ml,l/a),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_d.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ml.copy(t.center).add(_d)),this.expandByPoint(Ml.copy(t.center).sub(_d))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ma=new tt,vd=new tt,cc=new tt,ir=new tt,yd=new tt,fc=new tt,xd=new tt;class Qc{constructor(t=new tt,n=new tt(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ma)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=ma.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(ma.copy(this.origin).addScaledVector(this.direction,n),ma.distanceToSquared(t))}distanceSqToSegment(t,n,a,l){vd.copy(t).add(n).multiplyScalar(.5),cc.copy(n).sub(t).normalize(),ir.copy(this.origin).sub(vd);const u=t.distanceTo(n)*.5,f=-this.direction.dot(cc),d=ir.dot(this.direction),p=-ir.dot(cc),m=ir.lengthSq(),g=Math.abs(1-f*f);let _,v,M,E;if(g>0)if(_=f*p-d,v=f*d-p,E=u*g,_>=0)if(v>=-E)if(v<=E){const b=1/g;_*=b,v*=b,M=_*(_+f*v+2*d)+v*(f*_+v+2*p)+m}else v=u,_=Math.max(0,-(f*v+d)),M=-_*_+v*(v+2*p)+m;else v=-u,_=Math.max(0,-(f*v+d)),M=-_*_+v*(v+2*p)+m;else v<=-E?(_=Math.max(0,-(-f*u+d)),v=_>0?-u:Math.min(Math.max(-u,-p),u),M=-_*_+v*(v+2*p)+m):v<=E?(_=0,v=Math.min(Math.max(-u,-p),u),M=v*(v+2*p)+m):(_=Math.max(0,-(f*u+d)),v=_>0?u:Math.min(Math.max(-u,-p),u),M=-_*_+v*(v+2*p)+m);else v=f>0?-u:u,_=Math.max(0,-(f*v+d)),M=-_*_+v*(v+2*p)+m;return a&&a.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(vd).addScaledVector(cc,v),M}intersectSphere(t,n){ma.subVectors(t.center,this.origin);const a=ma.dot(this.direction),l=ma.dot(ma)-a*a,u=t.radius*t.radius;if(l>u)return null;const f=Math.sqrt(u-l),d=a-f,p=a+f;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,l,u,f,d,p;const m=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return m>=0?(a=(t.min.x-v.x)*m,l=(t.max.x-v.x)*m):(a=(t.max.x-v.x)*m,l=(t.min.x-v.x)*m),g>=0?(u=(t.min.y-v.y)*g,f=(t.max.y-v.y)*g):(u=(t.max.y-v.y)*g,f=(t.min.y-v.y)*g),a>f||u>l||((u>a||isNaN(a))&&(a=u),(f<l||isNaN(l))&&(l=f),_>=0?(d=(t.min.z-v.z)*_,p=(t.max.z-v.z)*_):(d=(t.max.z-v.z)*_,p=(t.min.z-v.z)*_),a>p||d>l)||((d>a||a!==a)&&(a=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(a>=0?a:l,n)}intersectsBox(t){return this.intersectBox(t,ma)!==null}intersectTriangle(t,n,a,l,u){yd.subVectors(n,t),fc.subVectors(a,t),xd.crossVectors(yd,fc);let f=this.direction.dot(xd),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;ir.subVectors(this.origin,t);const p=d*this.direction.dot(fc.crossVectors(ir,fc));if(p<0)return null;const m=d*this.direction.dot(yd.cross(ir));if(m<0||p+m>f)return null;const g=-d*ir.dot(xd);return g<0?null:this.at(g/f,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(t,n,a,l,u,f,d,p,m,g,_,v,M,E,b,x){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,l,u,f,d,p,m,g,_,v,M,E,b,x)}set(t,n,a,l,u,f,d,p,m,g,_,v,M,E,b,x){const y=this.elements;return y[0]=t,y[4]=n,y[8]=a,y[12]=l,y[1]=u,y[5]=f,y[9]=d,y[13]=p,y[2]=m,y[6]=g,y[10]=_,y[14]=v,y[3]=M,y[7]=E,y[11]=b,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,a=t.elements,l=1/Xs.setFromMatrixColumn(t,0).length(),u=1/Xs.setFromMatrixColumn(t,1).length(),f=1/Xs.setFromMatrixColumn(t,2).length();return n[0]=a[0]*l,n[1]=a[1]*l,n[2]=a[2]*l,n[3]=0,n[4]=a[4]*u,n[5]=a[5]*u,n[6]=a[6]*u,n[7]=0,n[8]=a[8]*f,n[9]=a[9]*f,n[10]=a[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,l=t.y,u=t.z,f=Math.cos(a),d=Math.sin(a),p=Math.cos(l),m=Math.sin(l),g=Math.cos(u),_=Math.sin(u);if(t.order==="XYZ"){const v=f*g,M=f*_,E=d*g,b=d*_;n[0]=p*g,n[4]=-p*_,n[8]=m,n[1]=M+E*m,n[5]=v-b*m,n[9]=-d*p,n[2]=b-v*m,n[6]=E+M*m,n[10]=f*p}else if(t.order==="YXZ"){const v=p*g,M=p*_,E=m*g,b=m*_;n[0]=v+b*d,n[4]=E*d-M,n[8]=f*m,n[1]=f*_,n[5]=f*g,n[9]=-d,n[2]=M*d-E,n[6]=b+v*d,n[10]=f*p}else if(t.order==="ZXY"){const v=p*g,M=p*_,E=m*g,b=m*_;n[0]=v-b*d,n[4]=-f*_,n[8]=E+M*d,n[1]=M+E*d,n[5]=f*g,n[9]=b-v*d,n[2]=-f*m,n[6]=d,n[10]=f*p}else if(t.order==="ZYX"){const v=f*g,M=f*_,E=d*g,b=d*_;n[0]=p*g,n[4]=E*m-M,n[8]=v*m+b,n[1]=p*_,n[5]=b*m+v,n[9]=M*m-E,n[2]=-m,n[6]=d*p,n[10]=f*p}else if(t.order==="YZX"){const v=f*p,M=f*m,E=d*p,b=d*m;n[0]=p*g,n[4]=b-v*_,n[8]=E*_+M,n[1]=_,n[5]=f*g,n[9]=-d*g,n[2]=-m*g,n[6]=M*_+E,n[10]=v-b*_}else if(t.order==="XZY"){const v=f*p,M=f*m,E=d*p,b=d*m;n[0]=p*g,n[4]=-_,n[8]=m*g,n[1]=v*_+b,n[5]=f*g,n[9]=M*_-E,n[2]=E*_-M,n[6]=d*g,n[10]=b*_+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fb,t,hb)}lookAt(t,n,a){const l=this.elements;return li.subVectors(t,n),li.lengthSq()===0&&(li.z=1),li.normalize(),ar.crossVectors(a,li),ar.lengthSq()===0&&(Math.abs(a.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),ar.crossVectors(a,li)),ar.normalize(),hc.crossVectors(li,ar),l[0]=ar.x,l[4]=hc.x,l[8]=li.x,l[1]=ar.y,l[5]=hc.y,l[9]=li.y,l[2]=ar.z,l[6]=hc.z,l[10]=li.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,l=n.elements,u=this.elements,f=a[0],d=a[4],p=a[8],m=a[12],g=a[1],_=a[5],v=a[9],M=a[13],E=a[2],b=a[6],x=a[10],y=a[14],N=a[3],U=a[7],D=a[11],F=a[15],B=l[0],H=l[4],X=l[8],w=l[12],C=l[1],G=l[5],ot=l[9],st=l[13],gt=l[2],ut=l[6],I=l[10],Z=l[14],q=l[3],Et=l[7],L=l[11],J=l[15];return u[0]=f*B+d*C+p*gt+m*q,u[4]=f*H+d*G+p*ut+m*Et,u[8]=f*X+d*ot+p*I+m*L,u[12]=f*w+d*st+p*Z+m*J,u[1]=g*B+_*C+v*gt+M*q,u[5]=g*H+_*G+v*ut+M*Et,u[9]=g*X+_*ot+v*I+M*L,u[13]=g*w+_*st+v*Z+M*J,u[2]=E*B+b*C+x*gt+y*q,u[6]=E*H+b*G+x*ut+y*Et,u[10]=E*X+b*ot+x*I+y*L,u[14]=E*w+b*st+x*Z+y*J,u[3]=N*B+U*C+D*gt+F*q,u[7]=N*H+U*G+D*ut+F*Et,u[11]=N*X+U*ot+D*I+F*L,u[15]=N*w+U*st+D*Z+F*J,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],l=t[8],u=t[12],f=t[1],d=t[5],p=t[9],m=t[13],g=t[2],_=t[6],v=t[10],M=t[14],E=t[3],b=t[7],x=t[11],y=t[15];return E*(+u*p*_-l*m*_-u*d*v+a*m*v+l*d*M-a*p*M)+b*(+n*p*M-n*m*v+u*f*v-l*f*M+l*m*g-u*p*g)+x*(+n*m*_-n*d*M-u*f*_+a*f*M+u*d*g-a*m*g)+y*(-l*d*g-n*p*_+n*d*v+l*f*_-a*f*v+a*p*g)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=n,l[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],l=t[2],u=t[3],f=t[4],d=t[5],p=t[6],m=t[7],g=t[8],_=t[9],v=t[10],M=t[11],E=t[12],b=t[13],x=t[14],y=t[15],N=_*x*m-b*v*m+b*p*M-d*x*M-_*p*y+d*v*y,U=E*v*m-g*x*m-E*p*M+f*x*M+g*p*y-f*v*y,D=g*b*m-E*_*m+E*d*M-f*b*M-g*d*y+f*_*y,F=E*_*p-g*b*p-E*d*v+f*b*v+g*d*x-f*_*x,B=n*N+a*U+l*D+u*F;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/B;return t[0]=N*H,t[1]=(b*v*u-_*x*u-b*l*M+a*x*M+_*l*y-a*v*y)*H,t[2]=(d*x*u-b*p*u+b*l*m-a*x*m-d*l*y+a*p*y)*H,t[3]=(_*p*u-d*v*u-_*l*m+a*v*m+d*l*M-a*p*M)*H,t[4]=U*H,t[5]=(g*x*u-E*v*u+E*l*M-n*x*M-g*l*y+n*v*y)*H,t[6]=(E*p*u-f*x*u-E*l*m+n*x*m+f*l*y-n*p*y)*H,t[7]=(f*v*u-g*p*u+g*l*m-n*v*m-f*l*M+n*p*M)*H,t[8]=D*H,t[9]=(E*_*u-g*b*u-E*a*M+n*b*M+g*a*y-n*_*y)*H,t[10]=(f*b*u-E*d*u+E*a*m-n*b*m-f*a*y+n*d*y)*H,t[11]=(g*d*u-f*_*u-g*a*m+n*_*m+f*a*M-n*d*M)*H,t[12]=F*H,t[13]=(g*b*l-E*_*l+E*a*v-n*b*v-g*a*x+n*_*x)*H,t[14]=(E*d*l-f*b*l-E*a*p+n*b*p+f*a*x-n*d*x)*H,t[15]=(f*_*l-g*d*l+g*a*p-n*_*p-f*a*v+n*d*v)*H,this}scale(t){const n=this.elements,a=t.x,l=t.y,u=t.z;return n[0]*=a,n[4]*=l,n[8]*=u,n[1]*=a,n[5]*=l,n[9]*=u,n[2]*=a,n[6]*=l,n[10]*=u,n[3]*=a,n[7]*=l,n[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,l))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),l=Math.sin(n),u=1-a,f=t.x,d=t.y,p=t.z,m=u*f,g=u*d;return this.set(m*f+a,m*d-l*p,m*p+l*d,0,m*d+l*p,g*d+a,g*p-l*f,0,m*p-l*d,g*p+l*f,u*p*p+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,l,u,f){return this.set(1,a,u,0,t,1,f,0,n,l,1,0,0,0,0,1),this}compose(t,n,a){const l=this.elements,u=n._x,f=n._y,d=n._z,p=n._w,m=u+u,g=f+f,_=d+d,v=u*m,M=u*g,E=u*_,b=f*g,x=f*_,y=d*_,N=p*m,U=p*g,D=p*_,F=a.x,B=a.y,H=a.z;return l[0]=(1-(b+y))*F,l[1]=(M+D)*F,l[2]=(E-U)*F,l[3]=0,l[4]=(M-D)*B,l[5]=(1-(v+y))*B,l[6]=(x+N)*B,l[7]=0,l[8]=(E+U)*H,l[9]=(x-N)*H,l[10]=(1-(v+b))*H,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,n,a){const l=this.elements;let u=Xs.set(l[0],l[1],l[2]).length();const f=Xs.set(l[4],l[5],l[6]).length(),d=Xs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],Ri.copy(this);const m=1/u,g=1/f,_=1/d;return Ri.elements[0]*=m,Ri.elements[1]*=m,Ri.elements[2]*=m,Ri.elements[4]*=g,Ri.elements[5]*=g,Ri.elements[6]*=g,Ri.elements[8]*=_,Ri.elements[9]*=_,Ri.elements[10]*=_,n.setFromRotationMatrix(Ri),a.x=u,a.y=f,a.z=d,this}makePerspective(t,n,a,l,u,f,d=Ta){const p=this.elements,m=2*u/(n-t),g=2*u/(a-l),_=(n+t)/(n-t),v=(a+l)/(a-l);let M,E;if(d===Ta)M=-(f+u)/(f-u),E=-2*f*u/(f-u);else if(d===Vc)M=-f/(f-u),E=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=g,p[9]=v,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,n,a,l,u,f,d=Ta){const p=this.elements,m=1/(n-t),g=1/(a-l),_=1/(f-u),v=(n+t)*m,M=(a+l)*g;let E,b;if(d===Ta)E=(f+u)*_,b=-2*_;else if(d===Vc)E=u*_,b=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-v,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=b,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let l=0;l<16;l++)if(n[l]!==a[l])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const Xs=new tt,Ri=new tn,fb=new tt(0,0,0),hb=new tt(1,1,1),ar=new tt,hc=new tt,li=new tt,f0=new tn,h0=new is;class Ca{constructor(t=0,n=0,a=0,l=Ca.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,l=this._order){return this._x=t,this._y=n,this._z=a,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const l=t.elements,u=l[0],f=l[4],d=l[8],p=l[1],m=l[5],g=l[9],_=l[2],v=l[6],M=l[10];switch(n){case"XYZ":this._y=Math.asin(ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(ye(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-ye(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,M),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(ye(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-ye(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return f0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(f0,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return h0.setFromEuler(this),this.setFromQuaternion(h0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ca.DEFAULT_ORDER="XYZ";class Qp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let db=0;const d0=new tt,Ws=new is,ga=new tn,dc=new tt,El=new tt,pb=new tt,mb=new is,p0=new tt(1,0,0),m0=new tt(0,1,0),g0=new tt(0,0,1),_0={type:"added"},gb={type:"removed"},qs={type:"childadded",child:null},Sd={type:"childremoved",child:null};class qn extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:db++}),this.uuid=ba(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qn.DEFAULT_UP.clone();const t=new tt,n=new Ca,a=new is,l=new tt(1,1,1);function u(){a.setFromEuler(n,!1)}function f(){n.setFromQuaternion(a,void 0,!1)}n._onChange(u),a._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tn},normalMatrix:{value:new de}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Ws.setFromAxisAngle(t,n),this.quaternion.multiply(Ws),this}rotateOnWorldAxis(t,n){return Ws.setFromAxisAngle(t,n),this.quaternion.premultiply(Ws),this}rotateX(t){return this.rotateOnAxis(p0,t)}rotateY(t){return this.rotateOnAxis(m0,t)}rotateZ(t){return this.rotateOnAxis(g0,t)}translateOnAxis(t,n){return d0.copy(t).applyQuaternion(this.quaternion),this.position.add(d0.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(p0,t)}translateY(t){return this.translateOnAxis(m0,t)}translateZ(t){return this.translateOnAxis(g0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ga.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?dc.copy(t):dc.set(t,n,a);const l=this.parent;this.updateWorldMatrix(!0,!1),El.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ga.lookAt(El,dc,this.up):ga.lookAt(dc,El,this.up),this.quaternion.setFromRotationMatrix(ga),l&&(ga.extractRotation(l.matrixWorld),Ws.setFromRotationMatrix(ga),this.quaternion.premultiply(Ws.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_0),qs.child=t,this.dispatchEvent(qs),qs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(gb),Sd.child=t,this.dispatchEvent(Sd),Sd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ga.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ga.multiply(t.parent.matrixWorld)),t.applyMatrix4(ga),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_0),qs.child=t,this.dispatchEvent(qs),qs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,l=this.children.length;a<l;a++){const f=this.children[a].getObjectByProperty(t,n);if(f!==void 0)return f}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(El,t,pb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(El,mb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,l=n.length;a<l;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,l=n.length;a<l;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,l=n.length;a<l;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const _=p[m];u(t.shapes,_)}else u(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(t.materials,this.material[p]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(u(t.animations,p))}}if(n){const d=f(t.geometries),p=f(t.materials),m=f(t.textures),g=f(t.images),_=f(t.shapes),v=f(t.skeletons),M=f(t.animations),E=f(t.nodes);d.length>0&&(a.geometries=d),p.length>0&&(a.materials=p),m.length>0&&(a.textures=m),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),v.length>0&&(a.skeletons=v),M.length>0&&(a.animations=M),E.length>0&&(a.nodes=E)}return a.object=l,a;function f(d){const p=[];for(const m in d){const g=d[m];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const l=t.children[a];this.add(l.clone())}return this}}qn.DEFAULT_UP=new tt(0,1,0);qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ci=new tt,_a=new tt,Md=new tt,va=new tt,Ys=new tt,js=new tt,v0=new tt,Ed=new tt,Td=new tt,bd=new tt,Ad=new ln,Rd=new ln,Cd=new ln;class Si{constructor(t=new tt,n=new tt,a=new tt){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,l){l.subVectors(a,n),Ci.subVectors(t,n),l.cross(Ci);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,n,a,l,u){Ci.subVectors(l,n),_a.subVectors(a,n),Md.subVectors(t,n);const f=Ci.dot(Ci),d=Ci.dot(_a),p=Ci.dot(Md),m=_a.dot(_a),g=_a.dot(Md),_=f*m-d*d;if(_===0)return u.set(0,0,0),null;const v=1/_,M=(m*p-d*g)*v,E=(f*g-d*p)*v;return u.set(1-M-E,E,M)}static containsPoint(t,n,a,l){return this.getBarycoord(t,n,a,l,va)===null?!1:va.x>=0&&va.y>=0&&va.x+va.y<=1}static getInterpolation(t,n,a,l,u,f,d,p){return this.getBarycoord(t,n,a,l,va)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,va.x),p.addScaledVector(f,va.y),p.addScaledVector(d,va.z),p)}static getInterpolatedAttribute(t,n,a,l,u,f){return Ad.setScalar(0),Rd.setScalar(0),Cd.setScalar(0),Ad.fromBufferAttribute(t,n),Rd.fromBufferAttribute(t,a),Cd.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Ad,u.x),f.addScaledVector(Rd,u.y),f.addScaledVector(Cd,u.z),f}static isFrontFacing(t,n,a,l){return Ci.subVectors(a,n),_a.subVectors(t,n),Ci.cross(_a).dot(l)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,l){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,n,a,l){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ci.subVectors(this.c,this.b),_a.subVectors(this.a,this.b),Ci.cross(_a).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Si.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Si.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,l,u){return Si.getInterpolation(t,this.a,this.b,this.c,n,a,l,u)}containsPoint(t){return Si.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Si.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,l=this.b,u=this.c;let f,d;Ys.subVectors(l,a),js.subVectors(u,a),Ed.subVectors(t,a);const p=Ys.dot(Ed),m=js.dot(Ed);if(p<=0&&m<=0)return n.copy(a);Td.subVectors(t,l);const g=Ys.dot(Td),_=js.dot(Td);if(g>=0&&_<=g)return n.copy(l);const v=p*_-g*m;if(v<=0&&p>=0&&g<=0)return f=p/(p-g),n.copy(a).addScaledVector(Ys,f);bd.subVectors(t,u);const M=Ys.dot(bd),E=js.dot(bd);if(E>=0&&M<=E)return n.copy(u);const b=M*m-p*E;if(b<=0&&m>=0&&E<=0)return d=m/(m-E),n.copy(a).addScaledVector(js,d);const x=g*E-M*_;if(x<=0&&_-g>=0&&M-E>=0)return v0.subVectors(u,l),d=(_-g)/(_-g+(M-E)),n.copy(l).addScaledVector(v0,d);const y=1/(x+b+v);return f=b*y,d=v*y,n.copy(a).addScaledVector(Ys,f).addScaledVector(js,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const jy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rr={h:0,s:0,l:0},pc={h:0,s:0,l:0};function wd(r,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(t-r)*6*n:n<1/2?t:n<2/3?r+(t-r)*6*(2/3-n):r}class Ue{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=yi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,De.colorSpaceToWorking(this,n),this}setRGB(t,n,a,l=De.workingColorSpace){return this.r=t,this.g=n,this.b=a,De.colorSpaceToWorking(this,l),this}setHSL(t,n,a,l=De.workingColorSpace){if(t=Zp(t,1),n=ye(n,0,1),a=ye(a,0,1),n===0)this.r=this.g=this.b=a;else{const u=a<=.5?a*(1+n):a+n-a*n,f=2*a-u;this.r=wd(f,u,t+1/3),this.g=wd(f,u,t),this.b=wd(f,u,t-1/3)}return De.colorSpaceToWorking(this,l),this}setStyle(t,n=yi){function a(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=yi){const a=jy[t.toLowerCase()];return a!==void 0?this.setHex(a,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Aa(t.r),this.g=Aa(t.g),this.b=Aa(t.b),this}copyLinearToSRGB(t){return this.r=lo(t.r),this.g=lo(t.g),this.b=lo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=yi){return De.workingToColorSpace(Bn.copy(this),t),Math.round(ye(Bn.r*255,0,255))*65536+Math.round(ye(Bn.g*255,0,255))*256+Math.round(ye(Bn.b*255,0,255))}getHexString(t=yi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=De.workingColorSpace){De.workingToColorSpace(Bn.copy(this),n);const a=Bn.r,l=Bn.g,u=Bn.b,f=Math.max(a,l,u),d=Math.min(a,l,u);let p,m;const g=(d+f)/2;if(d===f)p=0,m=0;else{const _=f-d;switch(m=g<=.5?_/(f+d):_/(2-f-d),f){case a:p=(l-u)/_+(l<u?6:0);break;case l:p=(u-a)/_+2;break;case u:p=(a-l)/_+4;break}p/=6}return t.h=p,t.s=m,t.l=g,t}getRGB(t,n=De.workingColorSpace){return De.workingToColorSpace(Bn.copy(this),n),t.r=Bn.r,t.g=Bn.g,t.b=Bn.b,t}getStyle(t=yi){De.workingToColorSpace(Bn.copy(this),t);const n=Bn.r,a=Bn.g,l=Bn.b;return t!==yi?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(l*255)})`}offsetHSL(t,n,a){return this.getHSL(rr),this.setHSL(rr.h+t,rr.s+n,rr.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(rr),t.getHSL(pc);const a=Ll(rr.h,pc.h,n),l=Ll(rr.s,pc.s,n),u=Ll(rr.l,pc.l,n);return this.setHSL(a,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,l=this.b,u=t.elements;return this.r=u[0]*n+u[3]*a+u[6]*l,this.g=u[1]*n+u[4]*a+u[7]*l,this.b=u[2]*n+u[5]*a+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bn=new Ue;Ue.NAMES=jy;let _b=0;class bo extends os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_b++}),this.uuid=ba(),this.name="",this.type="Material",this.blending=so,this.side=yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jd,this.blendDst=Zd,this.blendEquation=Yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=a0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fs,this.stencilZFail=Fs,this.stencilZPass=Fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(a):l&&l.isVector3&&a&&a.isVector3?l.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==so&&(a.blending=this.blending),this.side!==yr&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==jd&&(a.blendSrc=this.blendSrc),this.blendDst!==Zd&&(a.blendDst=this.blendDst),this.blendEquation!==Yr&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==yo&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==a0&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fs&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Fs&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Fs&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function l(u){const f=[];for(const d in u){const p=u[d];delete p.metadata,f.push(p)}return f}if(n){const u=l(t.textures),f=l(t.images);u.length>0&&(a.textures=u),f.length>0&&(a.images=f)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const l=n.length;a=new Array(l);for(let u=0;u!==l;++u)a[u]=n[u].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Jp extends bo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ca,this.combine=Py,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const hn=new tt,mc=new le;let vb=0;class Mi{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vb++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=Np,this.updateRanges=[],this.gpuType=Ea,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=n.array[a+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)mc.fromBufferAttribute(this,n),mc.applyMatrix3(t),this.setXY(n,mc.x,mc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)hn.fromBufferAttribute(this,n),hn.applyMatrix3(t),this.setXYZ(n,hn.x,hn.y,hn.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)hn.fromBufferAttribute(this,n),hn.applyMatrix4(t),this.setXYZ(n,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)hn.fromBufferAttribute(this,n),hn.applyNormalMatrix(t),this.setXYZ(n,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)hn.fromBufferAttribute(this,n),hn.transformDirection(t),this.setXYZ(n,hn.x,hn.y,hn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=Li(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=Fe(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Li(n,this.array)),n}setX(t,n){return this.normalized&&(n=Fe(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Li(n,this.array)),n}setY(t,n){return this.normalized&&(n=Fe(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Li(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Fe(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Li(n,this.array)),n}setW(t,n){return this.normalized&&(n=Fe(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=Fe(n,this.array),a=Fe(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,l){return t*=this.itemSize,this.normalized&&(n=Fe(n,this.array),a=Fe(a,this.array),l=Fe(l,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=l,this}setXYZW(t,n,a,l,u){return t*=this.itemSize,this.normalized&&(n=Fe(n,this.array),a=Fe(a,this.array),l=Fe(l,this.array),u=Fe(u,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Np&&(t.usage=this.usage),t}}class Zy extends Mi{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class Ky extends Mi{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class ji extends Mi{constructor(t,n,a){super(new Float32Array(t),n,a)}}let yb=0;const _i=new tn,Dd=new qn,Zs=new tt,ui=new ql,Tl=new ql,An=new tt;class Pi extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yb++}),this.uuid=ba(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qy(t)?Ky:Zy)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const u=new de().getNormalMatrix(t);a.applyNormalMatrix(u),a.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _i.makeRotationFromQuaternion(t),this.applyMatrix4(_i),this}rotateX(t){return _i.makeRotationX(t),this.applyMatrix4(_i),this}rotateY(t){return _i.makeRotationY(t),this.applyMatrix4(_i),this}rotateZ(t){return _i.makeRotationZ(t),this.applyMatrix4(_i),this}translate(t,n,a){return _i.makeTranslation(t,n,a),this.applyMatrix4(_i),this}scale(t,n,a){return _i.makeScale(t,n,a),this.applyMatrix4(_i),this}lookAt(t){return Dd.lookAt(t),Dd.updateMatrix(),this.applyMatrix4(Dd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let l=0,u=t.length;l<u;l++){const f=t[l];a.push(f.x,f.y,f.z||0)}this.setAttribute("position",new ji(a,3))}else{const a=Math.min(t.length,n.count);for(let l=0;l<a;l++){const u=t[l];n.setXYZ(l,u.x,u.y,u.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ql);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new tt(-1/0,-1/0,-1/0),new tt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,l=n.length;a<l;a++){const u=n[a];ui.setFromBufferAttribute(u),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kc);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new tt,1/0);return}if(t){const a=this.boundingSphere.center;if(ui.setFromBufferAttribute(t),n)for(let u=0,f=n.length;u<f;u++){const d=n[u];Tl.setFromBufferAttribute(d),this.morphTargetsRelative?(An.addVectors(ui.min,Tl.min),ui.expandByPoint(An),An.addVectors(ui.max,Tl.max),ui.expandByPoint(An)):(ui.expandByPoint(Tl.min),ui.expandByPoint(Tl.max))}ui.getCenter(a);let l=0;for(let u=0,f=t.count;u<f;u++)An.fromBufferAttribute(t,u),l=Math.max(l,a.distanceToSquared(An));if(n)for(let u=0,f=n.length;u<f;u++){const d=n[u],p=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)An.fromBufferAttribute(d,m),p&&(Zs.fromBufferAttribute(t,m),An.add(Zs)),l=Math.max(l,a.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,l=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mi(new Float32Array(4*a.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let X=0;X<a.count;X++)d[X]=new tt,p[X]=new tt;const m=new tt,g=new tt,_=new tt,v=new le,M=new le,E=new le,b=new tt,x=new tt;function y(X,w,C){m.fromBufferAttribute(a,X),g.fromBufferAttribute(a,w),_.fromBufferAttribute(a,C),v.fromBufferAttribute(u,X),M.fromBufferAttribute(u,w),E.fromBufferAttribute(u,C),g.sub(m),_.sub(m),M.sub(v),E.sub(v);const G=1/(M.x*E.y-E.x*M.y);isFinite(G)&&(b.copy(g).multiplyScalar(E.y).addScaledVector(_,-M.y).multiplyScalar(G),x.copy(_).multiplyScalar(M.x).addScaledVector(g,-E.x).multiplyScalar(G),d[X].add(b),d[w].add(b),d[C].add(b),p[X].add(x),p[w].add(x),p[C].add(x))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let X=0,w=N.length;X<w;++X){const C=N[X],G=C.start,ot=C.count;for(let st=G,gt=G+ot;st<gt;st+=3)y(t.getX(st+0),t.getX(st+1),t.getX(st+2))}const U=new tt,D=new tt,F=new tt,B=new tt;function H(X){F.fromBufferAttribute(l,X),B.copy(F);const w=d[X];U.copy(w),U.sub(F.multiplyScalar(F.dot(w))).normalize(),D.crossVectors(B,w);const G=D.dot(p[X])<0?-1:1;f.setXYZW(X,U.x,U.y,U.z,G)}for(let X=0,w=N.length;X<w;++X){const C=N[X],G=C.start,ot=C.count;for(let st=G,gt=G+ot;st<gt;st+=3)H(t.getX(st+0)),H(t.getX(st+1)),H(t.getX(st+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Mi(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,M=a.count;v<M;v++)a.setXYZ(v,0,0,0);const l=new tt,u=new tt,f=new tt,d=new tt,p=new tt,m=new tt,g=new tt,_=new tt;if(t)for(let v=0,M=t.count;v<M;v+=3){const E=t.getX(v+0),b=t.getX(v+1),x=t.getX(v+2);l.fromBufferAttribute(n,E),u.fromBufferAttribute(n,b),f.fromBufferAttribute(n,x),g.subVectors(f,u),_.subVectors(l,u),g.cross(_),d.fromBufferAttribute(a,E),p.fromBufferAttribute(a,b),m.fromBufferAttribute(a,x),d.add(g),p.add(g),m.add(g),a.setXYZ(E,d.x,d.y,d.z),a.setXYZ(b,p.x,p.y,p.z),a.setXYZ(x,m.x,m.y,m.z)}else for(let v=0,M=n.count;v<M;v+=3)l.fromBufferAttribute(n,v+0),u.fromBufferAttribute(n,v+1),f.fromBufferAttribute(n,v+2),g.subVectors(f,u),_.subVectors(l,u),g.cross(_),a.setXYZ(v+0,g.x,g.y,g.z),a.setXYZ(v+1,g.x,g.y,g.z),a.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)An.fromBufferAttribute(t,n),An.normalize(),t.setXYZ(n,An.x,An.y,An.z)}toNonIndexed(){function t(d,p){const m=d.array,g=d.itemSize,_=d.normalized,v=new m.constructor(p.length*g);let M=0,E=0;for(let b=0,x=p.length;b<x;b++){d.isInterleavedBufferAttribute?M=p[b]*d.data.stride+d.offset:M=p[b]*g;for(let y=0;y<g;y++)v[E++]=m[M++]}return new Mi(v,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Pi,a=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=t(p,a);n.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let g=0,_=m.length;g<_;g++){const v=m[g],M=t(v,a);p.push(M)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const m=a[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let _=0,v=m.length;_<v;_++){const M=m[_];g.push(M.toJSON(t.data))}g.length>0&&(l[p]=g,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const l=t.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(n))}const u=t.morphAttributes;for(const m in u){const g=[],_=u[m];for(let v=0,M=_.length;v<M;v++)g.push(_[v].clone(n));this.morphAttributes[m]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let m=0,g=f.length;m<g;m++){const _=f[m];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const y0=new tn,Vr=new Qc,gc=new Kc,x0=new tt,_c=new tt,vc=new tt,yc=new tt,Ud=new tt,xc=new tt,S0=new tt,Sc=new tt;class Yi extends qn{constructor(t=new Pi,n=new Jp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const l=n[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,n){const a=this.geometry,l=a.attributes.position,u=a.morphAttributes.position,f=a.morphTargetsRelative;n.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){xc.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const g=d[p],_=u[p];g!==0&&(Ud.fromBufferAttribute(_,t),f?xc.addScaledVector(Ud,g):xc.addScaledVector(Ud.sub(n),g))}n.add(xc)}return n}raycast(t,n){const a=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),gc.copy(a.boundingSphere),gc.applyMatrix4(u),Vr.copy(t.ray).recast(t.near),!(gc.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(gc,x0)===null||Vr.origin.distanceToSquared(x0)>(t.far-t.near)**2))&&(y0.copy(u).invert(),Vr.copy(t.ray).applyMatrix4(y0),!(a.boundingBox!==null&&Vr.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,Vr)))}_computeIntersections(t,n,a){let l;const u=this.geometry,f=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,g=u.attributes.uv1,_=u.attributes.normal,v=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,b=v.length;E<b;E++){const x=v[E],y=f[x.materialIndex],N=Math.max(x.start,M.start),U=Math.min(d.count,Math.min(x.start+x.count,M.start+M.count));for(let D=N,F=U;D<F;D+=3){const B=d.getX(D),H=d.getX(D+1),X=d.getX(D+2);l=Mc(this,y,t,a,m,g,_,B,H,X),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=x.materialIndex,n.push(l))}}else{const E=Math.max(0,M.start),b=Math.min(d.count,M.start+M.count);for(let x=E,y=b;x<y;x+=3){const N=d.getX(x),U=d.getX(x+1),D=d.getX(x+2);l=Mc(this,f,t,a,m,g,_,N,U,D),l&&(l.faceIndex=Math.floor(x/3),n.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let E=0,b=v.length;E<b;E++){const x=v[E],y=f[x.materialIndex],N=Math.max(x.start,M.start),U=Math.min(p.count,Math.min(x.start+x.count,M.start+M.count));for(let D=N,F=U;D<F;D+=3){const B=D,H=D+1,X=D+2;l=Mc(this,y,t,a,m,g,_,B,H,X),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=x.materialIndex,n.push(l))}}else{const E=Math.max(0,M.start),b=Math.min(p.count,M.start+M.count);for(let x=E,y=b;x<y;x+=3){const N=x,U=x+1,D=x+2;l=Mc(this,f,t,a,m,g,_,N,U,D),l&&(l.faceIndex=Math.floor(x/3),n.push(l))}}}}function xb(r,t,n,a,l,u,f,d){let p;if(t.side===$n?p=a.intersectTriangle(f,u,l,!0,d):p=a.intersectTriangle(l,u,f,t.side===yr,d),p===null)return null;Sc.copy(d),Sc.applyMatrix4(r.matrixWorld);const m=n.ray.origin.distanceTo(Sc);return m<n.near||m>n.far?null:{distance:m,point:Sc.clone(),object:r}}function Mc(r,t,n,a,l,u,f,d,p,m){r.getVertexPosition(d,_c),r.getVertexPosition(p,vc),r.getVertexPosition(m,yc);const g=xb(r,t,n,a,_c,vc,yc,S0);if(g){const _=new tt;Si.getBarycoord(S0,_c,vc,yc,_),l&&(g.uv=Si.getInterpolatedAttribute(l,d,p,m,_,new le)),u&&(g.uv1=Si.getInterpolatedAttribute(u,d,p,m,_,new le)),f&&(g.normal=Si.getInterpolatedAttribute(f,d,p,m,_,new tt),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const v={a:d,b:p,c:m,normal:new tt,materialIndex:0};Si.getNormal(_c,vc,yc,v.normal),g.face=v,g.barycoord=_}return g}class Yl extends Pi{constructor(t=1,n=1,a=1,l=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:l,heightSegments:u,depthSegments:f};const d=this;l=Math.floor(l),u=Math.floor(u),f=Math.floor(f);const p=[],m=[],g=[],_=[];let v=0,M=0;E("z","y","x",-1,-1,a,n,t,f,u,0),E("z","y","x",1,-1,a,n,-t,f,u,1),E("x","z","y",1,1,t,a,n,l,f,2),E("x","z","y",1,-1,t,a,-n,l,f,3),E("x","y","z",1,-1,t,n,a,l,u,4),E("x","y","z",-1,-1,t,n,-a,l,u,5),this.setIndex(p),this.setAttribute("position",new ji(m,3)),this.setAttribute("normal",new ji(g,3)),this.setAttribute("uv",new ji(_,2));function E(b,x,y,N,U,D,F,B,H,X,w){const C=D/H,G=F/X,ot=D/2,st=F/2,gt=B/2,ut=H+1,I=X+1;let Z=0,q=0;const Et=new tt;for(let L=0;L<I;L++){const J=L*G-st;for(let yt=0;yt<ut;yt++){const xt=yt*C-ot;Et[b]=xt*N,Et[x]=J*U,Et[y]=gt,m.push(Et.x,Et.y,Et.z),Et[b]=0,Et[x]=0,Et[y]=B>0?1:-1,g.push(Et.x,Et.y,Et.z),_.push(yt/H),_.push(1-L/X),Z+=1}}for(let L=0;L<X;L++)for(let J=0;J<H;J++){const yt=v+J+ut*L,xt=v+J+ut*(L+1),K=v+(J+1)+ut*(L+1),mt=v+(J+1)+ut*L;p.push(yt,xt,mt),p.push(xt,K,mt),q+=6}d.addGroup(M,q,w),M+=q,v+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Eo(r){const t={};for(const n in r){t[n]={};for(const a in r[n]){const l=r[n][a];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=l.clone():Array.isArray(l)?t[n][a]=l.slice():t[n][a]=l}}return t}function Vn(r){const t={};for(let n=0;n<r.length;n++){const a=Eo(r[n]);for(const l in a)t[l]=a[l]}return t}function Sb(r){const t=[];for(let n=0;n<r.length;n++)t.push(r[n].clone());return t}function Qy(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:De.workingColorSpace}const Mb={clone:Eo,merge:Vn};var Eb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xr extends bo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Eb,this.fragmentShader=Tb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Eo(t.uniforms),this.uniformsGroups=Sb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?n.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?n.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[l]={type:"m4",value:f.toArray()}:n.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const l in this.extensions)this.extensions[l]===!0&&(a[l]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class Jy extends qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=Ta}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const sr=new tt,M0=new le,E0=new le;class xi extends Jy{constructor(t=50,n=1,a=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=l,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Gl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ul*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Gl*2*Math.atan(Math.tan(Ul*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(sr.x,sr.y).multiplyScalar(-t/sr.z),sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(sr.x,sr.y).multiplyScalar(-t/sr.z)}getViewSize(t,n){return this.getViewBounds(t,M0,E0),n.subVectors(E0,M0)}setViewOffset(t,n,a,l,u,f){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Ul*.5*this.fov)/this.zoom,a=2*n,l=this.aspect*a,u=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;u+=f.offsetX*l/p,n-=f.offsetY*a/m,l*=f.width/p,a*=f.height/m}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,n,n-a,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ks=-90,Qs=1;class bb extends qn{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new xi(Ks,Qs,t,n);l.layers=this.layers,this.add(l);const u=new xi(Ks,Qs,t,n);u.layers=this.layers,this.add(u);const f=new xi(Ks,Qs,t,n);f.layers=this.layers,this.add(f);const d=new xi(Ks,Qs,t,n);d.layers=this.layers,this.add(d);const p=new xi(Ks,Qs,t,n);p.layers=this.layers,this.add(p);const m=new xi(Ks,Qs,t,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,l,u,f,d,p]=n;for(const m of n)this.remove(m);if(t===Ta)a.up.set(0,1,0),a.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Vc)a.up.set(0,-1,0),a.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of n)this.add(m),m.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,p,m,g]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const b=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,l),t.render(n,u),t.setRenderTarget(a,1,l),t.render(n,f),t.setRenderTarget(a,2,l),t.render(n,d),t.setRenderTarget(a,3,l),t.render(n,p),t.setRenderTarget(a,4,l),t.render(n,m),a.texture.generateMipmaps=b,t.setRenderTarget(a,5,l),t.render(n,g),t.setRenderTarget(_,v,M),t.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class $y extends Wn{constructor(t=[],n=xo,a,l,u,f,d,p,m,g){super(t,n,a,l,u,f,d,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ab extends as{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},l=[a,a,a,a,a,a];this.texture=new $y(l),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Yl(5,5,5),u=new xr({name:"CubemapFromEquirect",uniforms:Eo(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:$n,blending:_r});u.uniforms.tEquirect.value=n;const f=new Yi(l,u),d=n.minFilter;return n.minFilter===Kr&&(n.minFilter=qi),new bb(1,10,this).update(t,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,n=!0,a=!0,l=!0){const u=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(n,a,l);t.setRenderTarget(u)}}class wl extends qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rb={type:"move"};class Ld{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new tt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new tt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new tt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new tt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let l=null,u=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(m&&t.hand){f=!0;for(const b of t.hand.values()){const x=n.getJointPose(b,a),y=this._getHandJoint(m,b);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=x.radius),y.visible=x!==null}const g=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],v=g.position.distanceTo(_.position),M=.02,E=.005;m.inputState.pinching&&v>M+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&v<=M-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(u=n.getPose(t.gripSpace,a),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=n.getPose(t.targetRaySpace,a),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Rb)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new wl;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}class Cb extends qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ca,this.environmentIntensity=1,this.environmentRotation=new Ca,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class wb{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=Np,this.updateRanges=[],this.version=0,this.uuid=ba()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,a){t*=this.stride,a*=n.stride;for(let l=0,u=this.stride;l<u;l++)this.array[t+l]=n.array[a+l];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ba()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(n,this.stride);return a.setUsage(this.usage),a}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ba()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Gn=new tt;class Xc{constructor(t,n,a,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=a,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,a=this.data.count;n<a;n++)Gn.fromBufferAttribute(this,n),Gn.applyMatrix4(t),this.setXYZ(n,Gn.x,Gn.y,Gn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)Gn.fromBufferAttribute(this,n),Gn.applyNormalMatrix(t),this.setXYZ(n,Gn.x,Gn.y,Gn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)Gn.fromBufferAttribute(this,n),Gn.transformDirection(t),this.setXYZ(n,Gn.x,Gn.y,Gn.z);return this}getComponent(t,n){let a=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(a=Li(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=Fe(a,this.array)),this.data.array[t*this.data.stride+this.offset+n]=a,this}setX(t,n){return this.normalized&&(n=Fe(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=Fe(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=Fe(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=Fe(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=Li(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=Li(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=Li(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=Li(n,this.array)),n}setXY(t,n,a){return t=t*this.data.stride+this.offset,this.normalized&&(n=Fe(n,this.array),a=Fe(a,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this}setXYZ(t,n,a,l){return t=t*this.data.stride+this.offset,this.normalized&&(n=Fe(n,this.array),a=Fe(a,this.array),l=Fe(l,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this.data.array[t+2]=l,this}setXYZW(t,n,a,l,u){return t=t*this.data.stride+this.offset,this.normalized&&(n=Fe(n,this.array),a=Fe(a,this.array),l=Fe(l,this.array),u=Fe(u,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this.data.array[t+2]=l,this.data.array[t+3]=u,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const l=a*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)n.push(this.data.array[l+u])}return new Mi(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Xc(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const l=a*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)n.push(this.data.array[l+u])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class tx extends bo{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Js;const bl=new tt,$s=new tt,to=new tt,eo=new le,Al=new le,ex=new tn,Ec=new tt,Rl=new tt,Tc=new tt,T0=new le,Nd=new le,b0=new le;class Db extends qn{constructor(t=new tx){if(super(),this.isSprite=!0,this.type="Sprite",Js===void 0){Js=new Pi;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),a=new wb(n,5);Js.setIndex([0,1,2,0,2,3]),Js.setAttribute("position",new Xc(a,3,0,!1)),Js.setAttribute("uv",new Xc(a,2,3,!1))}this.geometry=Js,this.material=t,this.center=new le(.5,.5),this.count=1}raycast(t,n){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),$s.setFromMatrixScale(this.matrixWorld),ex.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),to.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$s.multiplyScalar(-to.z);const a=this.material.rotation;let l,u;a!==0&&(u=Math.cos(a),l=Math.sin(a));const f=this.center;bc(Ec.set(-.5,-.5,0),to,f,$s,l,u),bc(Rl.set(.5,-.5,0),to,f,$s,l,u),bc(Tc.set(.5,.5,0),to,f,$s,l,u),T0.set(0,0),Nd.set(1,0),b0.set(1,1);let d=t.ray.intersectTriangle(Ec,Rl,Tc,!1,bl);if(d===null&&(bc(Rl.set(-.5,.5,0),to,f,$s,l,u),Nd.set(0,1),d=t.ray.intersectTriangle(Ec,Tc,Rl,!1,bl),d===null))return;const p=t.ray.origin.distanceTo(bl);p<t.near||p>t.far||n.push({distance:p,point:bl.clone(),uv:Si.getInterpolation(bl,Ec,Rl,Tc,T0,Nd,b0,new le),face:null,object:this})}copy(t,n){return super.copy(t,n),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function bc(r,t,n,a,l,u){eo.subVectors(r,n).addScalar(.5).multiply(a),l!==void 0?(Al.x=u*eo.x-l*eo.y,Al.y=l*eo.x+u*eo.y):Al.copy(eo),r.copy(t),r.x+=Al.x,r.y+=Al.y,r.applyMatrix4(ex)}const Od=new tt,Ub=new tt,Lb=new de;class lr{constructor(t=new tt(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,l){return this.normal.set(t,n,a),this.constant=l,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const l=Od.subVectors(a,n).cross(Ub.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(Od),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:n.copy(t.start).addScaledVector(a,u)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||Lb.getNormalMatrix(t),l=this.coplanarPoint(Od).applyMatrix4(t),u=this.normal.applyMatrix3(a).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kr=new Kc,Ac=new tt;class nx{constructor(t=new lr,n=new lr,a=new lr,l=new lr,u=new lr,f=new lr){this.planes=[t,n,a,l,u,f]}set(t,n,a,l,u,f){const d=this.planes;return d[0].copy(t),d[1].copy(n),d[2].copy(a),d[3].copy(l),d[4].copy(u),d[5].copy(f),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=Ta){const a=this.planes,l=t.elements,u=l[0],f=l[1],d=l[2],p=l[3],m=l[4],g=l[5],_=l[6],v=l[7],M=l[8],E=l[9],b=l[10],x=l[11],y=l[12],N=l[13],U=l[14],D=l[15];if(a[0].setComponents(p-u,v-m,x-M,D-y).normalize(),a[1].setComponents(p+u,v+m,x+M,D+y).normalize(),a[2].setComponents(p+f,v+g,x+E,D+N).normalize(),a[3].setComponents(p-f,v-g,x-E,D-N).normalize(),a[4].setComponents(p-d,v-_,x-b,D-U).normalize(),n===Ta)a[5].setComponents(p+d,v+_,x+b,D+U).normalize();else if(n===Vc)a[5].setComponents(d,_,b,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),kr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(kr)}intersectsSprite(t){return kr.center.set(0,0,0),kr.radius=.7071067811865476,kr.applyMatrix4(t.matrixWorld),this.intersectsSphere(kr)}intersectsSphere(t){const n=this.planes,a=t.center,l=-t.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(a)<l)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const l=n[a];if(Ac.x=l.normal.x>0?t.max.x:t.min.x,Ac.y=l.normal.y>0?t.max.y:t.min.y,Ac.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Ac)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ix extends bo{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const A0=new tn,Op=new Qc,Rc=new Kc,Cc=new tt;class Nb extends qn{constructor(t=new Pi,n=new ix){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const a=this.geometry,l=this.matrixWorld,u=t.params.Points.threshold,f=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Rc.copy(a.boundingSphere),Rc.applyMatrix4(l),Rc.radius+=u,t.ray.intersectsSphere(Rc)===!1)return;A0.copy(l).invert(),Op.copy(t.ray).applyMatrix4(A0);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=a.index,_=a.attributes.position;if(m!==null){const v=Math.max(0,f.start),M=Math.min(m.count,f.start+f.count);for(let E=v,b=M;E<b;E++){const x=m.getX(E);Cc.fromBufferAttribute(_,x),R0(Cc,x,p,l,t,n,this)}}else{const v=Math.max(0,f.start),M=Math.min(_.count,f.start+f.count);for(let E=v,b=M;E<b;E++)Cc.fromBufferAttribute(_,E),R0(Cc,E,p,l,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const l=n[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function R0(r,t,n,a,l,u,f){const d=Op.distanceSqToPoint(r);if(d<n){const p=new tt;Op.closestPointToPoint(r,p),p.applyMatrix4(a);const m=l.ray.origin.distanceTo(p);if(m<l.near||m>l.far)return;u.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:t,face:null,faceIndex:null,barycoord:null,object:f})}}class Ob extends Wn{constructor(t,n,a,l,u,f,d,p,m){super(t,n,a,l,u,f,d,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ax extends Wn{constructor(t,n,a=ns,l,u,f,d=Oi,p=Oi,m,g=Fl,_=1){if(g!==Fl&&g!==Hl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:n,depth:_};super(v,l,u,f,d,p,g,a,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Kp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Jc extends Pi{constructor(t=1,n=1,a=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:l};const u=t/2,f=n/2,d=Math.floor(a),p=Math.floor(l),m=d+1,g=p+1,_=t/d,v=n/p,M=[],E=[],b=[],x=[];for(let y=0;y<g;y++){const N=y*v-f;for(let U=0;U<m;U++){const D=U*_-u;E.push(D,-N,0),b.push(0,0,1),x.push(U/d),x.push(1-y/p)}}for(let y=0;y<p;y++)for(let N=0;N<d;N++){const U=N+m*y,D=N+m*(y+1),F=N+1+m*(y+1),B=N+1+m*y;M.push(U,D,B),M.push(D,F,B)}this.setIndex(M),this.setAttribute("position",new ji(E,3)),this.setAttribute("normal",new ji(b,3)),this.setAttribute("uv",new ji(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jc(t.width,t.height,t.widthSegments,t.heightSegments)}}class $p extends Pi{constructor(t=1,n=32,a=16,l=0,u=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:a,phiStart:l,phiLength:u,thetaStart:f,thetaLength:d},n=Math.max(3,Math.floor(n)),a=Math.max(2,Math.floor(a));const p=Math.min(f+d,Math.PI);let m=0;const g=[],_=new tt,v=new tt,M=[],E=[],b=[],x=[];for(let y=0;y<=a;y++){const N=[],U=y/a;let D=0;y===0&&f===0?D=.5/n:y===a&&p===Math.PI&&(D=-.5/n);for(let F=0;F<=n;F++){const B=F/n;_.x=-t*Math.cos(l+B*u)*Math.sin(f+U*d),_.y=t*Math.cos(f+U*d),_.z=t*Math.sin(l+B*u)*Math.sin(f+U*d),E.push(_.x,_.y,_.z),v.copy(_).normalize(),b.push(v.x,v.y,v.z),x.push(B+D,1-U),N.push(m++)}g.push(N)}for(let y=0;y<a;y++)for(let N=0;N<n;N++){const U=g[y][N+1],D=g[y][N],F=g[y+1][N],B=g[y+1][N+1];(y!==0||f>0)&&M.push(U,D,B),(y!==a-1||p<Math.PI)&&M.push(D,F,B)}this.setIndex(M),this.setAttribute("position",new ji(E,3)),this.setAttribute("normal",new ji(b,3)),this.setAttribute("uv",new ji(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $p(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Pb extends bo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=RT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class zb extends bo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ib extends Jy{constructor(t=-1,n=1,a=1,l=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=l,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,l,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=a-t,f=a+t,d=l+n,p=l-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,f=u+m*this.view.width,d-=g*this.view.offsetY,p=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Bb extends xi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const C0=new tn;class Fb{constructor(t,n,a=0,l=1/0){this.ray=new Qc(t,n),this.near=a,this.far=l,this.camera=null,this.layers=new Qp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return C0.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(C0),this}intersectObject(t,n=!0,a=[]){return Pp(t,this,a,n),a.sort(w0),a}intersectObjects(t,n=!0,a=[]){for(let l=0,u=t.length;l<u;l++)Pp(t[l],this,a,n);return a.sort(w0),a}}function w0(r,t){return r.distance-t.distance}function Pp(r,t,n,a){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,n)===!1&&(l=!1),l===!0&&a===!0){const u=r.children;for(let f=0,d=u.length;f<d;f++)Pp(u[f],t,n,!0)}}class D0{constructor(t=1,n=0,a=0){this.radius=t,this.phi=n,this.theta=a}set(t,n,a){return this.radius=t,this.phi=n,this.theta=a,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ye(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,a){return this.radius=Math.sqrt(t*t+n*n+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,a),this.phi=Math.acos(ye(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Hb extends os{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function U0(r,t,n,a){const l=Gb(a);switch(n){case Hy:return r*t;case Vy:return r*t/l.components*l.byteLength;case qp:return r*t/l.components*l.byteLength;case ky:return r*t*2/l.components*l.byteLength;case Yp:return r*t*2/l.components*l.byteLength;case Gy:return r*t*3/l.components*l.byteLength;case Ni:return r*t*4/l.components*l.byteLength;case jp:return r*t*4/l.components*l.byteLength;case Nc:case Oc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Pc:case zc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case lp:case cp:return Math.max(r,16)*Math.max(t,8)/4;case op:case up:return Math.max(r,8)*Math.max(t,8)/2;case fp:case hp:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case dp:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case pp:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case mp:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case gp:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case _p:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case vp:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case yp:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case xp:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Sp:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Mp:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Ep:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Tp:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case bp:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Ap:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Rp:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Ic:case Cp:case wp:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Xy:case Dp:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Up:case Lp:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Gb(r){switch(r){case Ra:case Iy:return{byteLength:1,components:1};case Il:case By:case Wl:return{byteLength:2,components:1};case Xp:case Wp:return{byteLength:2,components:4};case ns:case kp:case Ea:return{byteLength:4,components:1};case Fy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function rx(){let r=null,t=!1,n=null,a=null;function l(u,f){n(u,f),a=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&n!==null&&(a=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(u){n=u},setContext:function(u){r=u}}}function Vb(r){const t=new WeakMap;function n(d,p){const m=d.array,g=d.usage,_=m.byteLength,v=r.createBuffer();r.bindBuffer(p,v),r.bufferData(p,m,g),d.onUploadCallback();let M;if(m instanceof Float32Array)M=r.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=r.SHORT;else if(m instanceof Uint32Array)M=r.UNSIGNED_INT;else if(m instanceof Int32Array)M=r.INT;else if(m instanceof Int8Array)M=r.BYTE;else if(m instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:_}}function a(d,p,m){const g=p.array,_=p.updateRanges;if(r.bindBuffer(m,d),_.length===0)r.bufferSubData(m,0,g);else{_.sort((M,E)=>M.start-E.start);let v=0;for(let M=1;M<_.length;M++){const E=_[v],b=_[M];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++v,_[v]=b)}_.length=v+1;for(let M=0,E=_.length;M<E;M++){const b=_[M];r.bufferSubData(m,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=t.get(d);p&&(r.deleteBuffer(p.buffer),t.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=t.get(d);if(m===void 0)t.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(m.buffer,d,p),m.version=d.version}}return{get:l,remove:u,update:f}}var kb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Wb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Kb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Jb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$b=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,nA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,iA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,aA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,hA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,dA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,mA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_A=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yA="gl_FragColor = linearToOutputTexel( gl_FragColor );",xA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,SA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,MA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,EA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,TA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,AA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,RA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,DA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,UA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,LA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,NA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,OA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,PA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,IA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,BA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,FA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,HA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,GA=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,VA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,XA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,WA=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qA=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YA=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jA=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ZA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,KA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,QA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,JA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$A=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,t1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,e1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,n1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,i1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,r1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,o1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,l1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,f1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,h1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,d1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,p1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,m1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,g1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,v1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,y1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,x1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,S1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,M1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,E1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,T1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,b1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,A1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,R1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,C1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,w1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,D1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,U1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,L1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,N1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,O1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,P1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,z1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,I1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,B1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,F1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,H1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,G1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const V1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,k1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Z1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,K1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Q1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,J1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,iR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,oR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_R=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,SR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pe={alphahash_fragment:kb,alphahash_pars_fragment:Xb,alphamap_fragment:Wb,alphamap_pars_fragment:qb,alphatest_fragment:Yb,alphatest_pars_fragment:jb,aomap_fragment:Zb,aomap_pars_fragment:Kb,batching_pars_vertex:Qb,batching_vertex:Jb,begin_vertex:$b,beginnormal_vertex:tA,bsdfs:eA,iridescence_fragment:nA,bumpmap_pars_fragment:iA,clipping_planes_fragment:aA,clipping_planes_pars_fragment:rA,clipping_planes_pars_vertex:sA,clipping_planes_vertex:oA,color_fragment:lA,color_pars_fragment:uA,color_pars_vertex:cA,color_vertex:fA,common:hA,cube_uv_reflection_fragment:dA,defaultnormal_vertex:pA,displacementmap_pars_vertex:mA,displacementmap_vertex:gA,emissivemap_fragment:_A,emissivemap_pars_fragment:vA,colorspace_fragment:yA,colorspace_pars_fragment:xA,envmap_fragment:SA,envmap_common_pars_fragment:MA,envmap_pars_fragment:EA,envmap_pars_vertex:TA,envmap_physical_pars_fragment:PA,envmap_vertex:bA,fog_vertex:AA,fog_pars_vertex:RA,fog_fragment:CA,fog_pars_fragment:wA,gradientmap_pars_fragment:DA,lightmap_pars_fragment:UA,lights_lambert_fragment:LA,lights_lambert_pars_fragment:NA,lights_pars_begin:OA,lights_toon_fragment:zA,lights_toon_pars_fragment:IA,lights_phong_fragment:BA,lights_phong_pars_fragment:FA,lights_physical_fragment:HA,lights_physical_pars_fragment:GA,lights_fragment_begin:VA,lights_fragment_maps:kA,lights_fragment_end:XA,logdepthbuf_fragment:WA,logdepthbuf_pars_fragment:qA,logdepthbuf_pars_vertex:YA,logdepthbuf_vertex:jA,map_fragment:ZA,map_pars_fragment:KA,map_particle_fragment:QA,map_particle_pars_fragment:JA,metalnessmap_fragment:$A,metalnessmap_pars_fragment:t1,morphinstance_vertex:e1,morphcolor_vertex:n1,morphnormal_vertex:i1,morphtarget_pars_vertex:a1,morphtarget_vertex:r1,normal_fragment_begin:s1,normal_fragment_maps:o1,normal_pars_fragment:l1,normal_pars_vertex:u1,normal_vertex:c1,normalmap_pars_fragment:f1,clearcoat_normal_fragment_begin:h1,clearcoat_normal_fragment_maps:d1,clearcoat_pars_fragment:p1,iridescence_pars_fragment:m1,opaque_fragment:g1,packing:_1,premultiplied_alpha_fragment:v1,project_vertex:y1,dithering_fragment:x1,dithering_pars_fragment:S1,roughnessmap_fragment:M1,roughnessmap_pars_fragment:E1,shadowmap_pars_fragment:T1,shadowmap_pars_vertex:b1,shadowmap_vertex:A1,shadowmask_pars_fragment:R1,skinbase_vertex:C1,skinning_pars_vertex:w1,skinning_vertex:D1,skinnormal_vertex:U1,specularmap_fragment:L1,specularmap_pars_fragment:N1,tonemapping_fragment:O1,tonemapping_pars_fragment:P1,transmission_fragment:z1,transmission_pars_fragment:I1,uv_pars_fragment:B1,uv_pars_vertex:F1,uv_vertex:H1,worldpos_vertex:G1,background_vert:V1,background_frag:k1,backgroundCube_vert:X1,backgroundCube_frag:W1,cube_vert:q1,cube_frag:Y1,depth_vert:j1,depth_frag:Z1,distanceRGBA_vert:K1,distanceRGBA_frag:Q1,equirect_vert:J1,equirect_frag:$1,linedashed_vert:tR,linedashed_frag:eR,meshbasic_vert:nR,meshbasic_frag:iR,meshlambert_vert:aR,meshlambert_frag:rR,meshmatcap_vert:sR,meshmatcap_frag:oR,meshnormal_vert:lR,meshnormal_frag:uR,meshphong_vert:cR,meshphong_frag:fR,meshphysical_vert:hR,meshphysical_frag:dR,meshtoon_vert:pR,meshtoon_frag:mR,points_vert:gR,points_frag:_R,shadow_vert:vR,shadow_frag:yR,sprite_vert:xR,sprite_frag:SR},Ot={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},Wi={basic:{uniforms:Vn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:Vn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Ue(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:Vn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:Vn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:Vn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new Ue(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:Vn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:Vn([Ot.points,Ot.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:Vn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:Vn([Ot.common,Ot.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:Vn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:Vn([Ot.sprite,Ot.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distanceRGBA:{uniforms:Vn([Ot.common,Ot.displacementmap,{referencePosition:{value:new tt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distanceRGBA_vert,fragmentShader:pe.distanceRGBA_frag},shadow:{uniforms:Vn([Ot.lights,Ot.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};Wi.physical={uniforms:Vn([Wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const wc={r:0,b:0,g:0},Xr=new Ca,MR=new tn;function ER(r,t,n,a,l,u,f){const d=new Ue(0);let p=u===!0?0:1,m,g,_=null,v=0,M=null;function E(U){let D=U.isScene===!0?U.background:null;return D&&D.isTexture&&(D=(U.backgroundBlurriness>0?n:t).get(D)),D}function b(U){let D=!1;const F=E(U);F===null?y(d,p):F&&F.isColor&&(y(F,1),D=!0);const B=r.xr.getEnvironmentBlendMode();B==="additive"?a.buffers.color.setClear(0,0,0,1,f):B==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,f),(r.autoClear||D)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(U,D){const F=E(D);F&&(F.isCubeTexture||F.mapping===Zc)?(g===void 0&&(g=new Yi(new Yl(1,1,1),new xr({name:"BackgroundCubeMaterial",uniforms:Eo(Wi.backgroundCube.uniforms),vertexShader:Wi.backgroundCube.vertexShader,fragmentShader:Wi.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(B,H,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Xr.copy(D.backgroundRotation),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),g.material.uniforms.envMap.value=F,g.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(MR.makeRotationFromEuler(Xr)),g.material.toneMapped=De.getTransfer(F.colorSpace)!==ke,(_!==F||v!==F.version||M!==r.toneMapping)&&(g.material.needsUpdate=!0,_=F,v=F.version,M=r.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):F&&F.isTexture&&(m===void 0&&(m=new Yi(new Jc(2,2),new xr({name:"BackgroundMaterial",uniforms:Eo(Wi.background.uniforms),vertexShader:Wi.background.vertexShader,fragmentShader:Wi.background.fragmentShader,side:yr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=F,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=De.getTransfer(F.colorSpace)!==ke,F.matrixAutoUpdate===!0&&F.updateMatrix(),m.material.uniforms.uvTransform.value.copy(F.matrix),(_!==F||v!==F.version||M!==r.toneMapping)&&(m.material.needsUpdate=!0,_=F,v=F.version,M=r.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null))}function y(U,D){U.getRGB(wc,Qy(r)),a.buffers.color.setClear(wc.r,wc.g,wc.b,D,f)}function N(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,D=1){d.set(U),p=D,y(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(U){p=U,y(d,p)},render:b,addToRenderList:x,dispose:N}}function TR(r,t){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},l=v(null);let u=l,f=!1;function d(C,G,ot,st,gt){let ut=!1;const I=_(st,ot,G);u!==I&&(u=I,m(u.object)),ut=M(C,st,ot,gt),ut&&E(C,st,ot,gt),gt!==null&&t.update(gt,r.ELEMENT_ARRAY_BUFFER),(ut||f)&&(f=!1,D(C,G,ot,st),gt!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(gt).buffer))}function p(){return r.createVertexArray()}function m(C){return r.bindVertexArray(C)}function g(C){return r.deleteVertexArray(C)}function _(C,G,ot){const st=ot.wireframe===!0;let gt=a[C.id];gt===void 0&&(gt={},a[C.id]=gt);let ut=gt[G.id];ut===void 0&&(ut={},gt[G.id]=ut);let I=ut[st];return I===void 0&&(I=v(p()),ut[st]=I),I}function v(C){const G=[],ot=[],st=[];for(let gt=0;gt<n;gt++)G[gt]=0,ot[gt]=0,st[gt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:ot,attributeDivisors:st,object:C,attributes:{},index:null}}function M(C,G,ot,st){const gt=u.attributes,ut=G.attributes;let I=0;const Z=ot.getAttributes();for(const q in Z)if(Z[q].location>=0){const L=gt[q];let J=ut[q];if(J===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(J=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(J=C.instanceColor)),L===void 0||L.attribute!==J||J&&L.data!==J.data)return!0;I++}return u.attributesNum!==I||u.index!==st}function E(C,G,ot,st){const gt={},ut=G.attributes;let I=0;const Z=ot.getAttributes();for(const q in Z)if(Z[q].location>=0){let L=ut[q];L===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(L=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(L=C.instanceColor));const J={};J.attribute=L,L&&L.data&&(J.data=L.data),gt[q]=J,I++}u.attributes=gt,u.attributesNum=I,u.index=st}function b(){const C=u.newAttributes;for(let G=0,ot=C.length;G<ot;G++)C[G]=0}function x(C){y(C,0)}function y(C,G){const ot=u.newAttributes,st=u.enabledAttributes,gt=u.attributeDivisors;ot[C]=1,st[C]===0&&(r.enableVertexAttribArray(C),st[C]=1),gt[C]!==G&&(r.vertexAttribDivisor(C,G),gt[C]=G)}function N(){const C=u.newAttributes,G=u.enabledAttributes;for(let ot=0,st=G.length;ot<st;ot++)G[ot]!==C[ot]&&(r.disableVertexAttribArray(ot),G[ot]=0)}function U(C,G,ot,st,gt,ut,I){I===!0?r.vertexAttribIPointer(C,G,ot,gt,ut):r.vertexAttribPointer(C,G,ot,st,gt,ut)}function D(C,G,ot,st){b();const gt=st.attributes,ut=ot.getAttributes(),I=G.defaultAttributeValues;for(const Z in ut){const q=ut[Z];if(q.location>=0){let Et=gt[Z];if(Et===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(Et=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(Et=C.instanceColor)),Et!==void 0){const L=Et.normalized,J=Et.itemSize,yt=t.get(Et);if(yt===void 0)continue;const xt=yt.buffer,K=yt.type,mt=yt.bytesPerElement,St=K===r.INT||K===r.UNSIGNED_INT||Et.gpuType===kp;if(Et.isInterleavedBufferAttribute){const Rt=Et.data,Ct=Rt.stride,se=Et.offset;if(Rt.isInstancedInterleavedBuffer){for(let Qt=0;Qt<q.locationSize;Qt++)y(q.location+Qt,Rt.meshPerAttribute);C.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=Rt.meshPerAttribute*Rt.count)}else for(let Qt=0;Qt<q.locationSize;Qt++)x(q.location+Qt);r.bindBuffer(r.ARRAY_BUFFER,xt);for(let Qt=0;Qt<q.locationSize;Qt++)U(q.location+Qt,J/q.locationSize,K,L,Ct*mt,(se+J/q.locationSize*Qt)*mt,St)}else{if(Et.isInstancedBufferAttribute){for(let Rt=0;Rt<q.locationSize;Rt++)y(q.location+Rt,Et.meshPerAttribute);C.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let Rt=0;Rt<q.locationSize;Rt++)x(q.location+Rt);r.bindBuffer(r.ARRAY_BUFFER,xt);for(let Rt=0;Rt<q.locationSize;Rt++)U(q.location+Rt,J/q.locationSize,K,L,J*mt,J/q.locationSize*Rt*mt,St)}}else if(I!==void 0){const L=I[Z];if(L!==void 0)switch(L.length){case 2:r.vertexAttrib2fv(q.location,L);break;case 3:r.vertexAttrib3fv(q.location,L);break;case 4:r.vertexAttrib4fv(q.location,L);break;default:r.vertexAttrib1fv(q.location,L)}}}}N()}function F(){X();for(const C in a){const G=a[C];for(const ot in G){const st=G[ot];for(const gt in st)g(st[gt].object),delete st[gt];delete G[ot]}delete a[C]}}function B(C){if(a[C.id]===void 0)return;const G=a[C.id];for(const ot in G){const st=G[ot];for(const gt in st)g(st[gt].object),delete st[gt];delete G[ot]}delete a[C.id]}function H(C){for(const G in a){const ot=a[G];if(ot[C.id]===void 0)continue;const st=ot[C.id];for(const gt in st)g(st[gt].object),delete st[gt];delete ot[C.id]}}function X(){w(),f=!0,u!==l&&(u=l,m(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:X,resetDefaultState:w,dispose:F,releaseStatesOfGeometry:B,releaseStatesOfProgram:H,initAttributes:b,enableAttribute:x,disableUnusedAttributes:N}}function bR(r,t,n){let a;function l(m){a=m}function u(m,g){r.drawArrays(a,m,g),n.update(g,a,1)}function f(m,g,_){_!==0&&(r.drawArraysInstanced(a,m,g,_),n.update(g,a,_))}function d(m,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,m,0,g,0,_);let M=0;for(let E=0;E<_;E++)M+=g[E];n.update(M,a,1)}function p(m,g,_,v){if(_===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<m.length;E++)f(m[E],g[E],v[E]);else{M.multiDrawArraysInstancedWEBGL(a,m,0,g,0,v,0,_);let E=0;for(let b=0;b<_;b++)E+=g[b]*v[b];n.update(E,a,1)}}this.setMode=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function AR(r,t,n,a){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const H=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(H){return!(H!==Ni&&a.convert(H)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(H){const X=H===Wl&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(H!==Ra&&a.convert(H)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&H!==Ea&&!X)}function p(H){if(H==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const _=n.logarithmicDepthBuffer===!0,v=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),N=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),F=E>0,B=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:_,reverseDepthBuffer:v,maxTextures:M,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:N,maxVaryings:U,maxFragmentUniforms:D,vertexTextures:F,maxSamples:B}}function RR(r){const t=this;let n=null,a=0,l=!1,u=!1;const f=new lr,d=new de,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const M=_.length!==0||v||a!==0||l;return l=v,a=_.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,v){n=g(_,v,0)},this.setState=function(_,v,M){const E=_.clippingPlanes,b=_.clipIntersection,x=_.clipShadows,y=r.get(_);if(!l||E===null||E.length===0||u&&!x)u?g(null):m();else{const N=u?0:a,U=N*4;let D=y.clippingState||null;p.value=D,D=g(E,v,U,M);for(let F=0;F!==U;++F)D[F]=n[F];y.clippingState=D,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=N}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function g(_,v,M,E){const b=_!==null?_.length:0;let x=null;if(b!==0){if(x=p.value,E!==!0||x===null){const y=M+b*4,N=v.matrixWorldInverse;d.getNormalMatrix(N),(x===null||x.length<y)&&(x=new Float32Array(y));for(let U=0,D=M;U!==b;++U,D+=4)f.copy(_[U]).applyMatrix4(N,d),f.normal.toArray(x,D),x[D+3]=f.constant}p.value=x,p.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,x}}function CR(r){let t=new WeakMap;function n(f,d){return d===ip?f.mapping=xo:d===ap&&(f.mapping=So),f}function a(f){if(f&&f.isTexture){const d=f.mapping;if(d===ip||d===ap)if(t.has(f)){const p=t.get(f).texture;return n(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new Ab(p.height);return m.fromEquirectangularTexture(r,f),t.set(f,m),f.addEventListener("dispose",l),n(m.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(){t=new WeakMap}return{get:a,dispose:u}}const ao=4,L0=[.125,.215,.35,.446,.526,.582],jr=20,Pd=new Ib,N0=new Ue;let zd=null,Id=0,Bd=0,Fd=!1;const qr=(1+Math.sqrt(5))/2,no=1/qr,O0=[new tt(-qr,no,0),new tt(qr,no,0),new tt(-no,0,qr),new tt(no,0,qr),new tt(0,qr,-no),new tt(0,qr,no),new tt(-1,1,-1),new tt(1,1,-1),new tt(-1,1,1),new tt(1,1,1)],wR=new tt;class P0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,a=.1,l=100,u={}){const{size:f=256,position:d=wR}=u;zd=this._renderer.getRenderTarget(),Id=this._renderer.getActiveCubeFace(),Bd=this._renderer.getActiveMipmapLevel(),Fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,a,l,p,d),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=B0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=I0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(zd,Id,Bd),this._renderer.xr.enabled=Fd,t.scissorTest=!1,Dc(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===xo||t.mapping===So?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),zd=this._renderer.getRenderTarget(),Id=this._renderer.getActiveCubeFace(),Bd=this._renderer.getActiveMipmapLevel(),Fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:qi,minFilter:qi,generateMipmaps:!1,type:Wl,format:Ni,colorSpace:Mo,depthBuffer:!1},l=z0(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=z0(t,n,a);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=DR(u)),this._blurMaterial=UR(u,t,n)}return l}_compileMaterial(t){const n=new Yi(this._lodPlanes[0],t);this._renderer.compile(n,Pd)}_sceneToCubeUV(t,n,a,l,u){const p=new xi(90,1,n,a),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,M=_.toneMapping;_.getClearColor(N0),_.toneMapping=vr,_.autoClear=!1;const E=new Jp({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1}),b=new Yi(new Yl,E);let x=!1;const y=t.background;y?y.isColor&&(E.color.copy(y),t.background=null,x=!0):(E.color.copy(N0),x=!0);for(let N=0;N<6;N++){const U=N%3;U===0?(p.up.set(0,m[N],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+g[N],u.y,u.z)):U===1?(p.up.set(0,0,m[N]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+g[N],u.z)):(p.up.set(0,m[N],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+g[N]));const D=this._cubeSize;Dc(l,U*D,N>2?D:0,D,D),_.setRenderTarget(l),x&&_.render(b,p),_.render(t,p)}b.geometry.dispose(),b.material.dispose(),_.toneMapping=M,_.autoClear=v,t.background=y}_textureToCubeUV(t,n){const a=this._renderer,l=t.mapping===xo||t.mapping===So;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=B0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=I0());const u=l?this._cubemapMaterial:this._equirectMaterial,f=new Yi(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=t;const p=this._cubeSize;Dc(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(f,Pd)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=O0[(l-u-1)%O0.length];this._blur(t,u-1,u,f,d)}n.autoClear=a}_blur(t,n,a,l,u){const f=this._pingPongRenderTarget;this._halfBlur(t,f,n,a,l,"latitudinal",u),this._halfBlur(f,t,a,a,l,"longitudinal",u)}_halfBlur(t,n,a,l,u,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new Yi(this._lodPlanes[l],m),v=m.uniforms,M=this._sizeLods[a]-1,E=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*jr-1),b=u/E,x=isFinite(u)?1+Math.floor(g*b):jr;x>jr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${jr}`);const y=[];let N=0;for(let H=0;H<jr;++H){const X=H/b,w=Math.exp(-X*X/2);y.push(w),H===0?N+=w:H<x&&(N+=2*w)}for(let H=0;H<y.length;H++)y[H]=y[H]/N;v.envMap.value=t.texture,v.samples.value=x,v.weights.value=y,v.latitudinal.value=f==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:U}=this;v.dTheta.value=E,v.mipInt.value=U-a;const D=this._sizeLods[l],F=3*D*(l>U-ao?l-U+ao:0),B=4*(this._cubeSize-D);Dc(n,F,B,3*D,2*D),p.setRenderTarget(n),p.render(_,Pd)}}function DR(r){const t=[],n=[],a=[];let l=r;const u=r-ao+1+L0.length;for(let f=0;f<u;f++){const d=Math.pow(2,l);n.push(d);let p=1/d;f>r-ao?p=L0[f-r+ao-1]:f===0&&(p=0),a.push(p);const m=1/(d-2),g=-m,_=1+m,v=[g,g,_,g,_,_,g,g,_,_,g,_],M=6,E=6,b=3,x=2,y=1,N=new Float32Array(b*E*M),U=new Float32Array(x*E*M),D=new Float32Array(y*E*M);for(let B=0;B<M;B++){const H=B%3*2/3-1,X=B>2?0:-1,w=[H,X,0,H+2/3,X,0,H+2/3,X+1,0,H,X,0,H+2/3,X+1,0,H,X+1,0];N.set(w,b*E*B),U.set(v,x*E*B);const C=[B,B,B,B,B,B];D.set(C,y*E*B)}const F=new Pi;F.setAttribute("position",new Mi(N,b)),F.setAttribute("uv",new Mi(U,x)),F.setAttribute("faceIndex",new Mi(D,y)),t.push(F),l>ao&&l--}return{lodPlanes:t,sizeLods:n,sigmas:a}}function z0(r,t,n){const a=new as(r,t,n);return a.texture.mapping=Zc,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Dc(r,t,n,a,l){r.viewport.set(t,n,a,l),r.scissor.set(t,n,a,l)}function UR(r,t,n){const a=new Float32Array(jr),l=new tt(0,1,0);return new xr({name:"SphericalGaussianBlur",defines:{n:jr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:tm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function I0(){return new xr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function B0(){return new xr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function tm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function LR(r){let t=new WeakMap,n=null;function a(d){if(d&&d.isTexture){const p=d.mapping,m=p===ip||p===ap,g=p===xo||p===So;if(m||g){let _=t.get(d);const v=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==v)return n===null&&(n=new P0(r)),_=m?n.fromEquirectangular(d,_):n.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const M=d.image;return m&&M&&M.height>0||g&&M&&l(M)?(n===null&&(n=new P0(r)),_=m?n.fromEquirectangular(d):n.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",u),_.texture):null}}}return d}function l(d){let p=0;const m=6;for(let g=0;g<m;g++)d[g]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function f(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:f}}function NR(r){const t={};function n(a){if(t[a]!==void 0)return t[a];let l;switch(a){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(a)}return t[a]=l,l}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const l=n(a);return l===null&&oo("THREE.WebGLRenderer: "+a+" extension not supported."),l}}}function OR(r,t,n,a){const l={},u=new WeakMap;function f(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);v.removeEventListener("dispose",f),delete l[v.id];const M=u.get(v);M&&(t.remove(M),u.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function d(_,v){return l[v.id]===!0||(v.addEventListener("dispose",f),l[v.id]=!0,n.memory.geometries++),v}function p(_){const v=_.attributes;for(const M in v)t.update(v[M],r.ARRAY_BUFFER)}function m(_){const v=[],M=_.index,E=_.attributes.position;let b=0;if(M!==null){const N=M.array;b=M.version;for(let U=0,D=N.length;U<D;U+=3){const F=N[U+0],B=N[U+1],H=N[U+2];v.push(F,B,B,H,H,F)}}else if(E!==void 0){const N=E.array;b=E.version;for(let U=0,D=N.length/3-1;U<D;U+=3){const F=U+0,B=U+1,H=U+2;v.push(F,B,B,H,H,F)}}else return;const x=new(qy(v)?Ky:Zy)(v,1);x.version=b;const y=u.get(_);y&&t.remove(y),u.set(_,x)}function g(_){const v=u.get(_);if(v){const M=_.index;M!==null&&v.version<M.version&&m(_)}else m(_);return u.get(_)}return{get:d,update:p,getWireframeAttribute:g}}function PR(r,t,n){let a;function l(v){a=v}let u,f;function d(v){u=v.type,f=v.bytesPerElement}function p(v,M){r.drawElements(a,M,u,v*f),n.update(M,a,1)}function m(v,M,E){E!==0&&(r.drawElementsInstanced(a,M,u,v*f,E),n.update(M,a,E))}function g(v,M,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,M,0,u,v,0,E);let x=0;for(let y=0;y<E;y++)x+=M[y];n.update(x,a,1)}function _(v,M,E,b){if(E===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<v.length;y++)m(v[y]/f,M[y],b[y]);else{x.multiDrawElementsInstancedWEBGL(a,M,0,u,v,0,b,0,E);let y=0;for(let N=0;N<E;N++)y+=M[N]*b[N];n.update(y,a,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function zR(r){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(u,f,d){switch(n.calls++,f){case r.TRIANGLES:n.triangles+=d*(u/3);break;case r.LINES:n.lines+=d*(u/2);break;case r.LINE_STRIP:n.lines+=d*(u-1);break;case r.LINE_LOOP:n.lines+=d*u;break;case r.POINTS:n.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:l,update:a}}function IR(r,t,n){const a=new WeakMap,l=new ln;function u(f,d,p){const m=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let v=a.get(d);if(v===void 0||v.count!==_){let C=function(){X.dispose(),a.delete(d),d.removeEventListener("dispose",C)};var M=C;v!==void 0&&v.texture.dispose();const E=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,x=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],N=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let D=0;E===!0&&(D=1),b===!0&&(D=2),x===!0&&(D=3);let F=d.attributes.position.count*D,B=1;F>t.maxTextureSize&&(B=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const H=new Float32Array(F*B*4*_),X=new Yy(H,F,B,_);X.type=Ea,X.needsUpdate=!0;const w=D*4;for(let G=0;G<_;G++){const ot=y[G],st=N[G],gt=U[G],ut=F*B*4*G;for(let I=0;I<ot.count;I++){const Z=I*w;E===!0&&(l.fromBufferAttribute(ot,I),H[ut+Z+0]=l.x,H[ut+Z+1]=l.y,H[ut+Z+2]=l.z,H[ut+Z+3]=0),b===!0&&(l.fromBufferAttribute(st,I),H[ut+Z+4]=l.x,H[ut+Z+5]=l.y,H[ut+Z+6]=l.z,H[ut+Z+7]=0),x===!0&&(l.fromBufferAttribute(gt,I),H[ut+Z+8]=l.x,H[ut+Z+9]=l.y,H[ut+Z+10]=l.z,H[ut+Z+11]=gt.itemSize===4?l.w:1)}}v={count:_,texture:X,size:new le(F,B)},a.set(d,v),d.addEventListener("dispose",C)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",f.morphTexture,n);else{let E=0;for(let x=0;x<m.length;x++)E+=m[x];const b=d.morphTargetsRelative?1:1-E;p.getUniforms().setValue(r,"morphTargetBaseInfluence",b),p.getUniforms().setValue(r,"morphTargetInfluences",m)}p.getUniforms().setValue(r,"morphTargetsTexture",v.texture,n),p.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:u}}function BR(r,t,n,a){let l=new WeakMap;function u(p){const m=a.render.frame,g=p.geometry,_=t.get(p,g);if(l.get(_)!==m&&(t.update(_),l.set(_,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(n.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,r.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const v=p.skeleton;l.get(v)!==m&&(v.update(),l.set(v,m))}return _}function f(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:u,dispose:f}}const sx=new Wn,F0=new ax(1,1),ox=new Yy,lx=new ub,ux=new $y,H0=[],G0=[],V0=new Float32Array(16),k0=new Float32Array(9),X0=new Float32Array(4);function Ao(r,t,n){const a=r[0];if(a<=0||a>0)return r;const l=t*n;let u=H0[l];if(u===void 0&&(u=new Float32Array(l),H0[l]=u),t!==0){a.toArray(u,0);for(let f=1,d=0;f!==t;++f)d+=n,r[f].toArray(u,d)}return u}function yn(r,t){if(r.length!==t.length)return!1;for(let n=0,a=r.length;n<a;n++)if(r[n]!==t[n])return!1;return!0}function xn(r,t){for(let n=0,a=t.length;n<a;n++)r[n]=t[n]}function $c(r,t){let n=G0[t];n===void 0&&(n=new Int32Array(t),G0[t]=n);for(let a=0;a!==t;++a)n[a]=r.allocateTextureUnit();return n}function FR(r,t){const n=this.cache;n[0]!==t&&(r.uniform1f(this.addr,t),n[0]=t)}function HR(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(yn(n,t))return;r.uniform2fv(this.addr,t),xn(n,t)}}function GR(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(yn(n,t))return;r.uniform3fv(this.addr,t),xn(n,t)}}function VR(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(yn(n,t))return;r.uniform4fv(this.addr,t),xn(n,t)}}function kR(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(yn(n,t))return;r.uniformMatrix2fv(this.addr,!1,t),xn(n,t)}else{if(yn(n,a))return;X0.set(a),r.uniformMatrix2fv(this.addr,!1,X0),xn(n,a)}}function XR(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(yn(n,t))return;r.uniformMatrix3fv(this.addr,!1,t),xn(n,t)}else{if(yn(n,a))return;k0.set(a),r.uniformMatrix3fv(this.addr,!1,k0),xn(n,a)}}function WR(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(yn(n,t))return;r.uniformMatrix4fv(this.addr,!1,t),xn(n,t)}else{if(yn(n,a))return;V0.set(a),r.uniformMatrix4fv(this.addr,!1,V0),xn(n,a)}}function qR(r,t){const n=this.cache;n[0]!==t&&(r.uniform1i(this.addr,t),n[0]=t)}function YR(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(yn(n,t))return;r.uniform2iv(this.addr,t),xn(n,t)}}function jR(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(yn(n,t))return;r.uniform3iv(this.addr,t),xn(n,t)}}function ZR(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(yn(n,t))return;r.uniform4iv(this.addr,t),xn(n,t)}}function KR(r,t){const n=this.cache;n[0]!==t&&(r.uniform1ui(this.addr,t),n[0]=t)}function QR(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(yn(n,t))return;r.uniform2uiv(this.addr,t),xn(n,t)}}function JR(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(yn(n,t))return;r.uniform3uiv(this.addr,t),xn(n,t)}}function $R(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(yn(n,t))return;r.uniform4uiv(this.addr,t),xn(n,t)}}function tC(r,t,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l);let u;this.type===r.SAMPLER_2D_SHADOW?(F0.compareFunction=Wy,u=F0):u=sx,n.setTexture2D(t||u,l)}function eC(r,t,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),n.setTexture3D(t||lx,l)}function nC(r,t,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),n.setTextureCube(t||ux,l)}function iC(r,t,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),n.setTexture2DArray(t||ox,l)}function aC(r){switch(r){case 5126:return FR;case 35664:return HR;case 35665:return GR;case 35666:return VR;case 35674:return kR;case 35675:return XR;case 35676:return WR;case 5124:case 35670:return qR;case 35667:case 35671:return YR;case 35668:case 35672:return jR;case 35669:case 35673:return ZR;case 5125:return KR;case 36294:return QR;case 36295:return JR;case 36296:return $R;case 35678:case 36198:case 36298:case 36306:case 35682:return tC;case 35679:case 36299:case 36307:return eC;case 35680:case 36300:case 36308:case 36293:return nC;case 36289:case 36303:case 36311:case 36292:return iC}}function rC(r,t){r.uniform1fv(this.addr,t)}function sC(r,t){const n=Ao(t,this.size,2);r.uniform2fv(this.addr,n)}function oC(r,t){const n=Ao(t,this.size,3);r.uniform3fv(this.addr,n)}function lC(r,t){const n=Ao(t,this.size,4);r.uniform4fv(this.addr,n)}function uC(r,t){const n=Ao(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function cC(r,t){const n=Ao(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function fC(r,t){const n=Ao(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function hC(r,t){r.uniform1iv(this.addr,t)}function dC(r,t){r.uniform2iv(this.addr,t)}function pC(r,t){r.uniform3iv(this.addr,t)}function mC(r,t){r.uniform4iv(this.addr,t)}function gC(r,t){r.uniform1uiv(this.addr,t)}function _C(r,t){r.uniform2uiv(this.addr,t)}function vC(r,t){r.uniform3uiv(this.addr,t)}function yC(r,t){r.uniform4uiv(this.addr,t)}function xC(r,t,n){const a=this.cache,l=t.length,u=$c(n,l);yn(a,u)||(r.uniform1iv(this.addr,u),xn(a,u));for(let f=0;f!==l;++f)n.setTexture2D(t[f]||sx,u[f])}function SC(r,t,n){const a=this.cache,l=t.length,u=$c(n,l);yn(a,u)||(r.uniform1iv(this.addr,u),xn(a,u));for(let f=0;f!==l;++f)n.setTexture3D(t[f]||lx,u[f])}function MC(r,t,n){const a=this.cache,l=t.length,u=$c(n,l);yn(a,u)||(r.uniform1iv(this.addr,u),xn(a,u));for(let f=0;f!==l;++f)n.setTextureCube(t[f]||ux,u[f])}function EC(r,t,n){const a=this.cache,l=t.length,u=$c(n,l);yn(a,u)||(r.uniform1iv(this.addr,u),xn(a,u));for(let f=0;f!==l;++f)n.setTexture2DArray(t[f]||ox,u[f])}function TC(r){switch(r){case 5126:return rC;case 35664:return sC;case 35665:return oC;case 35666:return lC;case 35674:return uC;case 35675:return cC;case 35676:return fC;case 5124:case 35670:return hC;case 35667:case 35671:return dC;case 35668:case 35672:return pC;case 35669:case 35673:return mC;case 5125:return gC;case 36294:return _C;case 36295:return vC;case 36296:return yC;case 35678:case 36198:case 36298:case 36306:case 35682:return xC;case 35679:case 36299:case 36307:return SC;case 35680:case 36300:case 36308:case 36293:return MC;case 36289:case 36303:case 36311:case 36292:return EC}}class bC{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=aC(n.type)}}class AC{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=TC(n.type)}}class RC{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const l=this.seq;for(let u=0,f=l.length;u!==f;++u){const d=l[u];d.setValue(t,n[d.id],a)}}}const Hd=/(\w+)(\])?(\[|\.)?/g;function W0(r,t){r.seq.push(t),r.map[t.id]=t}function CC(r,t,n){const a=r.name,l=a.length;for(Hd.lastIndex=0;;){const u=Hd.exec(a),f=Hd.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===l){W0(n,m===void 0?new bC(d,r,t):new AC(d,r,t));break}else{let _=n.map[d];_===void 0&&(_=new RC(d),W0(n,_)),n=_}}}class Bc{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let l=0;l<a;++l){const u=t.getActiveUniform(n,l),f=t.getUniformLocation(n,u.name);CC(u,f,this)}}setValue(t,n,a,l){const u=this.map[n];u!==void 0&&u.setValue(t,a,l)}setOptional(t,n,a){const l=n[a];l!==void 0&&this.setValue(t,a,l)}static upload(t,n,a,l){for(let u=0,f=n.length;u!==f;++u){const d=n[u],p=a[d.id];p.needsUpdate!==!1&&d.setValue(t,p.value,l)}}static seqWithValue(t,n){const a=[];for(let l=0,u=t.length;l!==u;++l){const f=t[l];f.id in n&&a.push(f)}return a}}function q0(r,t,n){const a=r.createShader(t);return r.shaderSource(a,n),r.compileShader(a),a}const wC=37297;let DC=0;function UC(r,t){const n=r.split(`
`),a=[],l=Math.max(t-6,0),u=Math.min(t+6,n.length);for(let f=l;f<u;f++){const d=f+1;a.push(`${d===t?">":" "} ${d}: ${n[f]}`)}return a.join(`
`)}const Y0=new de;function LC(r){De._getMatrix(Y0,De.workingColorSpace,r);const t=`mat3( ${Y0.elements.map(n=>n.toFixed(4))} )`;switch(De.getTransfer(r)){case Gc:return[t,"LinearTransferOETF"];case ke:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function j0(r,t,n){const a=r.getShaderParameter(t,r.COMPILE_STATUS),l=r.getShaderInfoLog(t).trim();if(a&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+l+`

`+UC(r.getShaderSource(t),f)}else return l}function NC(r,t){const n=LC(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function OC(r,t){let n;switch(t){case yT:n="Linear";break;case xT:n="Reinhard";break;case ST:n="Cineon";break;case MT:n="ACESFilmic";break;case TT:n="AgX";break;case bT:n="Neutral";break;case ET:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Uc=new tt;function PC(){De.getLuminanceCoefficients(Uc);const r=Uc.x.toFixed(4),t=Uc.y.toFixed(4),n=Uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zC(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Dl).join(`
`)}function IC(r){const t=[];for(const n in r){const a=r[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function BC(r,t){const n={},a=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<a;l++){const u=r.getActiveAttrib(t,l),f=u.name;let d=1;u.type===r.FLOAT_MAT2&&(d=2),u.type===r.FLOAT_MAT3&&(d=3),u.type===r.FLOAT_MAT4&&(d=4),n[f]={type:u.type,location:r.getAttribLocation(t,f),locationSize:d}}return n}function Dl(r){return r!==""}function Z0(r,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function K0(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const FC=/^[ \t]*#include +<([\w\d./]+)>/gm;function zp(r){return r.replace(FC,GC)}const HC=new Map;function GC(r,t){let n=pe[t];if(n===void 0){const a=HC.get(t);if(a!==void 0)n=pe[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return zp(n)}const VC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Q0(r){return r.replace(VC,kC)}function kC(r,t,n,a){let l="";for(let u=parseInt(t);u<parseInt(n);u++)l+=a.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function J0(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function XC(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Oy?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===JE?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===xa&&(t="SHADOWMAP_TYPE_VSM"),t}function WC(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case xo:case So:t="ENVMAP_TYPE_CUBE";break;case Zc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function qC(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case So:t="ENVMAP_MODE_REFRACTION";break}return t}function YC(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Py:t="ENVMAP_BLENDING_MULTIPLY";break;case _T:t="ENVMAP_BLENDING_MIX";break;case vT:t="ENVMAP_BLENDING_ADD";break}return t}function jC(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:a,maxMip:n}}function ZC(r,t,n,a){const l=r.getContext(),u=n.defines;let f=n.vertexShader,d=n.fragmentShader;const p=XC(n),m=WC(n),g=qC(n),_=YC(n),v=jC(n),M=zC(n),E=IC(u),b=l.createProgram();let x,y,N=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Dl).join(`
`),x.length>0&&(x+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Dl).join(`
`),y.length>0&&(y+=`
`)):(x=[J0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dl).join(`
`),y=[J0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==vr?"#define TONE_MAPPING":"",n.toneMapping!==vr?pe.tonemapping_pars_fragment:"",n.toneMapping!==vr?OC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,NC("linearToOutputTexel",n.outputColorSpace),PC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Dl).join(`
`)),f=zp(f),f=Z0(f,n),f=K0(f,n),d=zp(d),d=Z0(d,n),d=K0(d,n),f=Q0(f),d=Q0(d),n.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,x=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,y=["#define varying in",n.glslVersion===r0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===r0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const U=N+x+f,D=N+y+d,F=q0(l,l.VERTEX_SHADER,U),B=q0(l,l.FRAGMENT_SHADER,D);l.attachShader(b,F),l.attachShader(b,B),n.index0AttributeName!==void 0?l.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b);function H(G){if(r.debug.checkShaderErrors){const ot=l.getProgramInfoLog(b).trim(),st=l.getShaderInfoLog(F).trim(),gt=l.getShaderInfoLog(B).trim();let ut=!0,I=!0;if(l.getProgramParameter(b,l.LINK_STATUS)===!1)if(ut=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,b,F,B);else{const Z=j0(l,F,"vertex"),q=j0(l,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ot+`
`+Z+`
`+q)}else ot!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ot):(st===""||gt==="")&&(I=!1);I&&(G.diagnostics={runnable:ut,programLog:ot,vertexShader:{log:st,prefix:x},fragmentShader:{log:gt,prefix:y}})}l.deleteShader(F),l.deleteShader(B),X=new Bc(l,b),w=BC(l,b)}let X;this.getUniforms=function(){return X===void 0&&H(this),X};let w;this.getAttributes=function(){return w===void 0&&H(this),w};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(b,wC)),C},this.destroy=function(){a.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=DC++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=F,this.fragmentShader=B,this}let KC=0;class QC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,l=this._getShaderStage(n),u=this._getShaderStage(a),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new JC(t),n.set(t,a)),a}}class JC{constructor(t){this.id=KC++,this.code=t,this.usedTimes=0}}function $C(r,t,n,a,l,u,f){const d=new Qp,p=new QC,m=new Set,g=[],_=l.logarithmicDepthBuffer,v=l.vertexTextures;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(w){return m.add(w),w===0?"uv":`uv${w}`}function x(w,C,G,ot,st){const gt=ot.fog,ut=st.geometry,I=w.isMeshStandardMaterial?ot.environment:null,Z=(w.isMeshStandardMaterial?n:t).get(w.envMap||I),q=Z&&Z.mapping===Zc?Z.image.height:null,Et=E[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const L=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,J=L!==void 0?L.length:0;let yt=0;ut.morphAttributes.position!==void 0&&(yt=1),ut.morphAttributes.normal!==void 0&&(yt=2),ut.morphAttributes.color!==void 0&&(yt=3);let xt,K,mt,St;if(Et){const Re=Wi[Et];xt=Re.vertexShader,K=Re.fragmentShader}else xt=w.vertexShader,K=w.fragmentShader,p.update(w),mt=p.getVertexShaderID(w),St=p.getFragmentShaderID(w);const Rt=r.getRenderTarget(),Ct=r.state.buffers.depth.getReversed(),se=st.isInstancedMesh===!0,Qt=st.isBatchedMesh===!0,Le=!!w.map,Pe=!!w.matcap,_e=!!Z,P=!!w.aoMap,We=!!w.lightMap,fe=!!w.bumpMap,ue=!!w.normalMap,Gt=!!w.displacementMap,xe=!!w.emissiveMap,jt=!!w.metalnessMap,ae=!!w.roughnessMap,Qe=w.anisotropy>0,O=w.clearcoat>0,T=w.dispersion>0,et=w.iridescence>0,ft=w.sheen>0,ht=w.transmission>0,lt=Qe&&!!w.anisotropyMap,Pt=O&&!!w.clearcoatMap,Ut=O&&!!w.clearcoatNormalMap,Ht=O&&!!w.clearcoatRoughnessMap,Wt=et&&!!w.iridescenceMap,Mt=et&&!!w.iridescenceThicknessMap,It=ft&&!!w.sheenColorMap,Zt=ft&&!!w.sheenRoughnessMap,Kt=!!w.specularMap,Dt=!!w.specularColorMap,oe=!!w.specularIntensityMap,k=ht&&!!w.transmissionMap,Nt=ht&&!!w.thicknessMap,Tt=!!w.gradientMap,Bt=!!w.alphaMap,At=w.alphaTest>0,vt=!!w.alphaHash,Vt=!!w.extensions;let re=vr;w.toneMapped&&(Rt===null||Rt.isXRRenderTarget===!0)&&(re=r.toneMapping);const ze={shaderID:Et,shaderType:w.type,shaderName:w.name,vertexShader:xt,fragmentShader:K,defines:w.defines,customVertexShaderID:mt,customFragmentShaderID:St,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:Qt,batchingColor:Qt&&st._colorsTexture!==null,instancing:se,instancingColor:se&&st.instanceColor!==null,instancingMorph:se&&st.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:Rt===null?r.outputColorSpace:Rt.isXRRenderTarget===!0?Rt.texture.colorSpace:Mo,alphaToCoverage:!!w.alphaToCoverage,map:Le,matcap:Pe,envMap:_e,envMapMode:_e&&Z.mapping,envMapCubeUVHeight:q,aoMap:P,lightMap:We,bumpMap:fe,normalMap:ue,displacementMap:v&&Gt,emissiveMap:xe,normalMapObjectSpace:ue&&w.normalMapType===DT,normalMapTangentSpace:ue&&w.normalMapType===wT,metalnessMap:jt,roughnessMap:ae,anisotropy:Qe,anisotropyMap:lt,clearcoat:O,clearcoatMap:Pt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:Ht,dispersion:T,iridescence:et,iridescenceMap:Wt,iridescenceThicknessMap:Mt,sheen:ft,sheenColorMap:It,sheenRoughnessMap:Zt,specularMap:Kt,specularColorMap:Dt,specularIntensityMap:oe,transmission:ht,transmissionMap:k,thicknessMap:Nt,gradientMap:Tt,opaque:w.transparent===!1&&w.blending===so&&w.alphaToCoverage===!1,alphaMap:Bt,alphaTest:At,alphaHash:vt,combine:w.combine,mapUv:Le&&b(w.map.channel),aoMapUv:P&&b(w.aoMap.channel),lightMapUv:We&&b(w.lightMap.channel),bumpMapUv:fe&&b(w.bumpMap.channel),normalMapUv:ue&&b(w.normalMap.channel),displacementMapUv:Gt&&b(w.displacementMap.channel),emissiveMapUv:xe&&b(w.emissiveMap.channel),metalnessMapUv:jt&&b(w.metalnessMap.channel),roughnessMapUv:ae&&b(w.roughnessMap.channel),anisotropyMapUv:lt&&b(w.anisotropyMap.channel),clearcoatMapUv:Pt&&b(w.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&b(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ht&&b(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Wt&&b(w.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&b(w.iridescenceThicknessMap.channel),sheenColorMapUv:It&&b(w.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&b(w.sheenRoughnessMap.channel),specularMapUv:Kt&&b(w.specularMap.channel),specularColorMapUv:Dt&&b(w.specularColorMap.channel),specularIntensityMapUv:oe&&b(w.specularIntensityMap.channel),transmissionMapUv:k&&b(w.transmissionMap.channel),thicknessMapUv:Nt&&b(w.thicknessMap.channel),alphaMapUv:Bt&&b(w.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(ue||Qe),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!ut.attributes.uv&&(Le||Bt),fog:!!gt,useFog:w.fog===!0,fogExp2:!!gt&&gt.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Ct,skinning:st.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:yt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&G.length>0,shadowMapType:r.shadowMap.type,toneMapping:re,decodeVideoTexture:Le&&w.map.isVideoTexture===!0&&De.getTransfer(w.map.colorSpace)===ke,decodeVideoTextureEmissive:xe&&w.emissiveMap.isVideoTexture===!0&&De.getTransfer(w.emissiveMap.colorSpace)===ke,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ma,flipSided:w.side===$n,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Vt&&w.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&w.extensions.multiDraw===!0||Qt)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ze.vertexUv1s=m.has(1),ze.vertexUv2s=m.has(2),ze.vertexUv3s=m.has(3),m.clear(),ze}function y(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const G in w.defines)C.push(G),C.push(w.defines[G]);return w.isRawShaderMaterial===!1&&(N(C,w),U(C,w),C.push(r.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function N(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function U(w,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),w.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),w.push(d.mask)}function D(w){const C=E[w.type];let G;if(C){const ot=Wi[C];G=Mb.clone(ot.uniforms)}else G=w.uniforms;return G}function F(w,C){let G;for(let ot=0,st=g.length;ot<st;ot++){const gt=g[ot];if(gt.cacheKey===C){G=gt,++G.usedTimes;break}}return G===void 0&&(G=new ZC(r,C,w,u),g.push(G)),G}function B(w){if(--w.usedTimes===0){const C=g.indexOf(w);g[C]=g[g.length-1],g.pop(),w.destroy()}}function H(w){p.remove(w)}function X(){p.dispose()}return{getParameters:x,getProgramCacheKey:y,getUniforms:D,acquireProgram:F,releaseProgram:B,releaseShaderCache:H,programs:g,dispose:X}}function tw(){let r=new WeakMap;function t(f){return r.has(f)}function n(f){let d=r.get(f);return d===void 0&&(d={},r.set(f,d)),d}function a(f){r.delete(f)}function l(f,d,p){r.get(f)[d]=p}function u(){r=new WeakMap}return{has:t,get:n,remove:a,update:l,dispose:u}}function ew(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function $0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function ty(){const r=[];let t=0;const n=[],a=[],l=[];function u(){t=0,n.length=0,a.length=0,l.length=0}function f(_,v,M,E,b,x){let y=r[t];return y===void 0?(y={id:_.id,object:_,geometry:v,material:M,groupOrder:E,renderOrder:_.renderOrder,z:b,group:x},r[t]=y):(y.id=_.id,y.object=_,y.geometry=v,y.material=M,y.groupOrder=E,y.renderOrder=_.renderOrder,y.z=b,y.group=x),t++,y}function d(_,v,M,E,b,x){const y=f(_,v,M,E,b,x);M.transmission>0?a.push(y):M.transparent===!0?l.push(y):n.push(y)}function p(_,v,M,E,b,x){const y=f(_,v,M,E,b,x);M.transmission>0?a.unshift(y):M.transparent===!0?l.unshift(y):n.unshift(y)}function m(_,v){n.length>1&&n.sort(_||ew),a.length>1&&a.sort(v||$0),l.length>1&&l.sort(v||$0)}function g(){for(let _=t,v=r.length;_<v;_++){const M=r[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:a,transparent:l,init:u,push:d,unshift:p,finish:g,sort:m}}function nw(){let r=new WeakMap;function t(a,l){const u=r.get(a);let f;return u===void 0?(f=new ty,r.set(a,[f])):l>=u.length?(f=new ty,u.push(f)):f=u[l],f}function n(){r=new WeakMap}return{get:t,dispose:n}}function iw(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new tt,color:new Ue};break;case"SpotLight":n={position:new tt,direction:new tt,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new tt,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":n={direction:new tt,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":n={color:new Ue,position:new tt,halfWidth:new tt,halfHeight:new tt};break}return r[t.id]=n,n}}}function aw(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=n,n}}}let rw=0;function sw(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function ow(r){const t=new iw,n=aw(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)a.probe.push(new tt);const l=new tt,u=new tn,f=new tn;function d(m){let g=0,_=0,v=0;for(let w=0;w<9;w++)a.probe[w].set(0,0,0);let M=0,E=0,b=0,x=0,y=0,N=0,U=0,D=0,F=0,B=0,H=0;m.sort(sw);for(let w=0,C=m.length;w<C;w++){const G=m[w],ot=G.color,st=G.intensity,gt=G.distance,ut=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=ot.r*st,_+=ot.g*st,v+=ot.b*st;else if(G.isLightProbe){for(let I=0;I<9;I++)a.probe[I].addScaledVector(G.sh.coefficients[I],st);H++}else if(G.isDirectionalLight){const I=t.get(G);if(I.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const Z=G.shadow,q=n.get(G);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,a.directionalShadow[M]=q,a.directionalShadowMap[M]=ut,a.directionalShadowMatrix[M]=G.shadow.matrix,N++}a.directional[M]=I,M++}else if(G.isSpotLight){const I=t.get(G);I.position.setFromMatrixPosition(G.matrixWorld),I.color.copy(ot).multiplyScalar(st),I.distance=gt,I.coneCos=Math.cos(G.angle),I.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),I.decay=G.decay,a.spot[b]=I;const Z=G.shadow;if(G.map&&(a.spotLightMap[F]=G.map,F++,Z.updateMatrices(G),G.castShadow&&B++),a.spotLightMatrix[b]=Z.matrix,G.castShadow){const q=n.get(G);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,a.spotShadow[b]=q,a.spotShadowMap[b]=ut,D++}b++}else if(G.isRectAreaLight){const I=t.get(G);I.color.copy(ot).multiplyScalar(st),I.halfWidth.set(G.width*.5,0,0),I.halfHeight.set(0,G.height*.5,0),a.rectArea[x]=I,x++}else if(G.isPointLight){const I=t.get(G);if(I.color.copy(G.color).multiplyScalar(G.intensity),I.distance=G.distance,I.decay=G.decay,G.castShadow){const Z=G.shadow,q=n.get(G);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,q.shadowCameraNear=Z.camera.near,q.shadowCameraFar=Z.camera.far,a.pointShadow[E]=q,a.pointShadowMap[E]=ut,a.pointShadowMatrix[E]=G.shadow.matrix,U++}a.point[E]=I,E++}else if(G.isHemisphereLight){const I=t.get(G);I.skyColor.copy(G.color).multiplyScalar(st),I.groundColor.copy(G.groundColor).multiplyScalar(st),a.hemi[y]=I,y++}}x>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ot.LTC_FLOAT_1,a.rectAreaLTC2=Ot.LTC_FLOAT_2):(a.rectAreaLTC1=Ot.LTC_HALF_1,a.rectAreaLTC2=Ot.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=_,a.ambient[2]=v;const X=a.hash;(X.directionalLength!==M||X.pointLength!==E||X.spotLength!==b||X.rectAreaLength!==x||X.hemiLength!==y||X.numDirectionalShadows!==N||X.numPointShadows!==U||X.numSpotShadows!==D||X.numSpotMaps!==F||X.numLightProbes!==H)&&(a.directional.length=M,a.spot.length=b,a.rectArea.length=x,a.point.length=E,a.hemi.length=y,a.directionalShadow.length=N,a.directionalShadowMap.length=N,a.pointShadow.length=U,a.pointShadowMap.length=U,a.spotShadow.length=D,a.spotShadowMap.length=D,a.directionalShadowMatrix.length=N,a.pointShadowMatrix.length=U,a.spotLightMatrix.length=D+F-B,a.spotLightMap.length=F,a.numSpotLightShadowsWithMaps=B,a.numLightProbes=H,X.directionalLength=M,X.pointLength=E,X.spotLength=b,X.rectAreaLength=x,X.hemiLength=y,X.numDirectionalShadows=N,X.numPointShadows=U,X.numSpotShadows=D,X.numSpotMaps=F,X.numLightProbes=H,a.version=rw++)}function p(m,g){let _=0,v=0,M=0,E=0,b=0;const x=g.matrixWorldInverse;for(let y=0,N=m.length;y<N;y++){const U=m[y];if(U.isDirectionalLight){const D=a.directional[_];D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(x),_++}else if(U.isSpotLight){const D=a.spot[M];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(x),D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(x),M++}else if(U.isRectAreaLight){const D=a.rectArea[E];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(x),f.identity(),u.copy(U.matrixWorld),u.premultiply(x),f.extractRotation(u),D.halfWidth.set(U.width*.5,0,0),D.halfHeight.set(0,U.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),E++}else if(U.isPointLight){const D=a.point[v];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(x),v++}else if(U.isHemisphereLight){const D=a.hemi[b];D.direction.setFromMatrixPosition(U.matrixWorld),D.direction.transformDirection(x),b++}}}return{setup:d,setupView:p,state:a}}function ey(r){const t=new ow(r),n=[],a=[];function l(g){m.camera=g,n.length=0,a.length=0}function u(g){n.push(g)}function f(g){a.push(g)}function d(){t.setup(n)}function p(g){t.setupView(n,g)}const m={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:f}}function lw(r){let t=new WeakMap;function n(l,u=0){const f=t.get(l);let d;return f===void 0?(d=new ey(r),t.set(l,[d])):u>=f.length?(d=new ey(r),f.push(d)):d=f[u],d}function a(){t=new WeakMap}return{get:n,dispose:a}}const uw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function fw(r,t,n){let a=new nx;const l=new le,u=new le,f=new ln,d=new Pb({depthPacking:CT}),p=new zb,m={},g=n.maxTextureSize,_={[yr]:$n,[$n]:yr,[Ma]:Ma},v=new xr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:uw,fragmentShader:cw}),M=v.clone();M.defines.HORIZONTAL_PASS=1;const E=new Pi;E.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Yi(E,v),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oy;let y=this.type;this.render=function(B,H,X){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||B.length===0)return;const w=r.getRenderTarget(),C=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),ot=r.state;ot.setBlending(_r),ot.buffers.color.setClear(1,1,1,1),ot.buffers.depth.setTest(!0),ot.setScissorTest(!1);const st=y!==xa&&this.type===xa,gt=y===xa&&this.type!==xa;for(let ut=0,I=B.length;ut<I;ut++){const Z=B[ut],q=Z.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const Et=q.getFrameExtents();if(l.multiply(Et),u.copy(q.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/Et.x),l.x=u.x*Et.x,q.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/Et.y),l.y=u.y*Et.y,q.mapSize.y=u.y)),q.map===null||st===!0||gt===!0){const J=this.type!==xa?{minFilter:Oi,magFilter:Oi}:{};q.map!==null&&q.map.dispose(),q.map=new as(l.x,l.y,J),q.map.texture.name=Z.name+".shadowMap",q.camera.updateProjectionMatrix()}r.setRenderTarget(q.map),r.clear();const L=q.getViewportCount();for(let J=0;J<L;J++){const yt=q.getViewport(J);f.set(u.x*yt.x,u.y*yt.y,u.x*yt.z,u.y*yt.w),ot.viewport(f),q.updateMatrices(Z,J),a=q.getFrustum(),D(H,X,q.camera,Z,this.type)}q.isPointLightShadow!==!0&&this.type===xa&&N(q,X),q.needsUpdate=!1}y=this.type,x.needsUpdate=!1,r.setRenderTarget(w,C,G)};function N(B,H){const X=t.update(b);v.defines.VSM_SAMPLES!==B.blurSamples&&(v.defines.VSM_SAMPLES=B.blurSamples,M.defines.VSM_SAMPLES=B.blurSamples,v.needsUpdate=!0,M.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new as(l.x,l.y)),v.uniforms.shadow_pass.value=B.map.texture,v.uniforms.resolution.value=B.mapSize,v.uniforms.radius.value=B.radius,r.setRenderTarget(B.mapPass),r.clear(),r.renderBufferDirect(H,null,X,v,b,null),M.uniforms.shadow_pass.value=B.mapPass.texture,M.uniforms.resolution.value=B.mapSize,M.uniforms.radius.value=B.radius,r.setRenderTarget(B.map),r.clear(),r.renderBufferDirect(H,null,X,M,b,null)}function U(B,H,X,w){let C=null;const G=X.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(G!==void 0)C=G;else if(C=X.isPointLight===!0?p:d,r.localClippingEnabled&&H.clipShadows===!0&&Array.isArray(H.clippingPlanes)&&H.clippingPlanes.length!==0||H.displacementMap&&H.displacementScale!==0||H.alphaMap&&H.alphaTest>0||H.map&&H.alphaTest>0||H.alphaToCoverage===!0){const ot=C.uuid,st=H.uuid;let gt=m[ot];gt===void 0&&(gt={},m[ot]=gt);let ut=gt[st];ut===void 0&&(ut=C.clone(),gt[st]=ut,H.addEventListener("dispose",F)),C=ut}if(C.visible=H.visible,C.wireframe=H.wireframe,w===xa?C.side=H.shadowSide!==null?H.shadowSide:H.side:C.side=H.shadowSide!==null?H.shadowSide:_[H.side],C.alphaMap=H.alphaMap,C.alphaTest=H.alphaToCoverage===!0?.5:H.alphaTest,C.map=H.map,C.clipShadows=H.clipShadows,C.clippingPlanes=H.clippingPlanes,C.clipIntersection=H.clipIntersection,C.displacementMap=H.displacementMap,C.displacementScale=H.displacementScale,C.displacementBias=H.displacementBias,C.wireframeLinewidth=H.wireframeLinewidth,C.linewidth=H.linewidth,X.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ot=r.properties.get(C);ot.light=X}return C}function D(B,H,X,w,C){if(B.visible===!1)return;if(B.layers.test(H.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&C===xa)&&(!B.frustumCulled||a.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,B.matrixWorld);const st=t.update(B),gt=B.material;if(Array.isArray(gt)){const ut=st.groups;for(let I=0,Z=ut.length;I<Z;I++){const q=ut[I],Et=gt[q.materialIndex];if(Et&&Et.visible){const L=U(B,Et,w,C);B.onBeforeShadow(r,B,H,X,st,L,q),r.renderBufferDirect(X,null,st,L,B,q),B.onAfterShadow(r,B,H,X,st,L,q)}}}else if(gt.visible){const ut=U(B,gt,w,C);B.onBeforeShadow(r,B,H,X,st,ut,null),r.renderBufferDirect(X,null,st,ut,B,null),B.onAfterShadow(r,B,H,X,st,ut,null)}}const ot=B.children;for(let st=0,gt=ot.length;st<gt;st++)D(ot[st],H,X,w,C)}function F(B){B.target.removeEventListener("dispose",F);for(const X in m){const w=m[X],C=B.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const hw={[Kd]:Qd,[Jd]:ep,[$d]:np,[yo]:tp,[Qd]:Kd,[ep]:Jd,[np]:$d,[tp]:yo};function dw(r,t){function n(){let k=!1;const Nt=new ln;let Tt=null;const Bt=new ln(0,0,0,0);return{setMask:function(At){Tt!==At&&!k&&(r.colorMask(At,At,At,At),Tt=At)},setLocked:function(At){k=At},setClear:function(At,vt,Vt,re,ze){ze===!0&&(At*=re,vt*=re,Vt*=re),Nt.set(At,vt,Vt,re),Bt.equals(Nt)===!1&&(r.clearColor(At,vt,Vt,re),Bt.copy(Nt))},reset:function(){k=!1,Tt=null,Bt.set(-1,0,0,0)}}}function a(){let k=!1,Nt=!1,Tt=null,Bt=null,At=null;return{setReversed:function(vt){if(Nt!==vt){const Vt=t.get("EXT_clip_control");vt?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),Nt=vt;const re=At;At=null,this.setClear(re)}},getReversed:function(){return Nt},setTest:function(vt){vt?Rt(r.DEPTH_TEST):Ct(r.DEPTH_TEST)},setMask:function(vt){Tt!==vt&&!k&&(r.depthMask(vt),Tt=vt)},setFunc:function(vt){if(Nt&&(vt=hw[vt]),Bt!==vt){switch(vt){case Kd:r.depthFunc(r.NEVER);break;case Qd:r.depthFunc(r.ALWAYS);break;case Jd:r.depthFunc(r.LESS);break;case yo:r.depthFunc(r.LEQUAL);break;case $d:r.depthFunc(r.EQUAL);break;case tp:r.depthFunc(r.GEQUAL);break;case ep:r.depthFunc(r.GREATER);break;case np:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Bt=vt}},setLocked:function(vt){k=vt},setClear:function(vt){At!==vt&&(Nt&&(vt=1-vt),r.clearDepth(vt),At=vt)},reset:function(){k=!1,Tt=null,Bt=null,At=null,Nt=!1}}}function l(){let k=!1,Nt=null,Tt=null,Bt=null,At=null,vt=null,Vt=null,re=null,ze=null;return{setTest:function(Re){k||(Re?Rt(r.STENCIL_TEST):Ct(r.STENCIL_TEST))},setMask:function(Re){Nt!==Re&&!k&&(r.stencilMask(Re),Nt=Re)},setFunc:function(Re,ti,Sn){(Tt!==Re||Bt!==ti||At!==Sn)&&(r.stencilFunc(Re,ti,Sn),Tt=Re,Bt=ti,At=Sn)},setOp:function(Re,ti,Sn){(vt!==Re||Vt!==ti||re!==Sn)&&(r.stencilOp(Re,ti,Sn),vt=Re,Vt=ti,re=Sn)},setLocked:function(Re){k=Re},setClear:function(Re){ze!==Re&&(r.clearStencil(Re),ze=Re)},reset:function(){k=!1,Nt=null,Tt=null,Bt=null,At=null,vt=null,Vt=null,re=null,ze=null}}}const u=new n,f=new a,d=new l,p=new WeakMap,m=new WeakMap;let g={},_={},v=new WeakMap,M=[],E=null,b=!1,x=null,y=null,N=null,U=null,D=null,F=null,B=null,H=new Ue(0,0,0),X=0,w=!1,C=null,G=null,ot=null,st=null,gt=null;const ut=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,Z=0;const q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(q)[1]),I=Z>=1):q.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),I=Z>=2);let Et=null,L={};const J=r.getParameter(r.SCISSOR_BOX),yt=r.getParameter(r.VIEWPORT),xt=new ln().fromArray(J),K=new ln().fromArray(yt);function mt(k,Nt,Tt,Bt){const At=new Uint8Array(4),vt=r.createTexture();r.bindTexture(k,vt),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Vt=0;Vt<Tt;Vt++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(Nt,0,r.RGBA,1,1,Bt,0,r.RGBA,r.UNSIGNED_BYTE,At):r.texImage2D(Nt+Vt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,At);return vt}const St={};St[r.TEXTURE_2D]=mt(r.TEXTURE_2D,r.TEXTURE_2D,1),St[r.TEXTURE_CUBE_MAP]=mt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[r.TEXTURE_2D_ARRAY]=mt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),St[r.TEXTURE_3D]=mt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),Rt(r.DEPTH_TEST),f.setFunc(yo),fe(!1),ue(t0),Rt(r.CULL_FACE),P(_r);function Rt(k){g[k]!==!0&&(r.enable(k),g[k]=!0)}function Ct(k){g[k]!==!1&&(r.disable(k),g[k]=!1)}function se(k,Nt){return _[k]!==Nt?(r.bindFramebuffer(k,Nt),_[k]=Nt,k===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Nt),k===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Nt),!0):!1}function Qt(k,Nt){let Tt=M,Bt=!1;if(k){Tt=v.get(Nt),Tt===void 0&&(Tt=[],v.set(Nt,Tt));const At=k.textures;if(Tt.length!==At.length||Tt[0]!==r.COLOR_ATTACHMENT0){for(let vt=0,Vt=At.length;vt<Vt;vt++)Tt[vt]=r.COLOR_ATTACHMENT0+vt;Tt.length=At.length,Bt=!0}}else Tt[0]!==r.BACK&&(Tt[0]=r.BACK,Bt=!0);Bt&&r.drawBuffers(Tt)}function Le(k){return E!==k?(r.useProgram(k),E=k,!0):!1}const Pe={[Yr]:r.FUNC_ADD,[tT]:r.FUNC_SUBTRACT,[eT]:r.FUNC_REVERSE_SUBTRACT};Pe[nT]=r.MIN,Pe[iT]=r.MAX;const _e={[aT]:r.ZERO,[rT]:r.ONE,[sT]:r.SRC_COLOR,[jd]:r.SRC_ALPHA,[hT]:r.SRC_ALPHA_SATURATE,[cT]:r.DST_COLOR,[lT]:r.DST_ALPHA,[oT]:r.ONE_MINUS_SRC_COLOR,[Zd]:r.ONE_MINUS_SRC_ALPHA,[fT]:r.ONE_MINUS_DST_COLOR,[uT]:r.ONE_MINUS_DST_ALPHA,[dT]:r.CONSTANT_COLOR,[pT]:r.ONE_MINUS_CONSTANT_COLOR,[mT]:r.CONSTANT_ALPHA,[gT]:r.ONE_MINUS_CONSTANT_ALPHA};function P(k,Nt,Tt,Bt,At,vt,Vt,re,ze,Re){if(k===_r){b===!0&&(Ct(r.BLEND),b=!1);return}if(b===!1&&(Rt(r.BLEND),b=!0),k!==$E){if(k!==x||Re!==w){if((y!==Yr||D!==Yr)&&(r.blendEquation(r.FUNC_ADD),y=Yr,D=Yr),Re)switch(k){case so:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case e0:r.blendFunc(r.ONE,r.ONE);break;case n0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case i0:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case so:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case e0:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case n0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case i0:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}N=null,U=null,F=null,B=null,H.set(0,0,0),X=0,x=k,w=Re}return}At=At||Nt,vt=vt||Tt,Vt=Vt||Bt,(Nt!==y||At!==D)&&(r.blendEquationSeparate(Pe[Nt],Pe[At]),y=Nt,D=At),(Tt!==N||Bt!==U||vt!==F||Vt!==B)&&(r.blendFuncSeparate(_e[Tt],_e[Bt],_e[vt],_e[Vt]),N=Tt,U=Bt,F=vt,B=Vt),(re.equals(H)===!1||ze!==X)&&(r.blendColor(re.r,re.g,re.b,ze),H.copy(re),X=ze),x=k,w=!1}function We(k,Nt){k.side===Ma?Ct(r.CULL_FACE):Rt(r.CULL_FACE);let Tt=k.side===$n;Nt&&(Tt=!Tt),fe(Tt),k.blending===so&&k.transparent===!1?P(_r):P(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),f.setFunc(k.depthFunc),f.setTest(k.depthTest),f.setMask(k.depthWrite),u.setMask(k.colorWrite);const Bt=k.stencilWrite;d.setTest(Bt),Bt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),xe(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Rt(r.SAMPLE_ALPHA_TO_COVERAGE):Ct(r.SAMPLE_ALPHA_TO_COVERAGE)}function fe(k){C!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),C=k)}function ue(k){k!==KE?(Rt(r.CULL_FACE),k!==G&&(k===t0?r.cullFace(r.BACK):k===QE?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ct(r.CULL_FACE),G=k}function Gt(k){k!==ot&&(I&&r.lineWidth(k),ot=k)}function xe(k,Nt,Tt){k?(Rt(r.POLYGON_OFFSET_FILL),(st!==Nt||gt!==Tt)&&(r.polygonOffset(Nt,Tt),st=Nt,gt=Tt)):Ct(r.POLYGON_OFFSET_FILL)}function jt(k){k?Rt(r.SCISSOR_TEST):Ct(r.SCISSOR_TEST)}function ae(k){k===void 0&&(k=r.TEXTURE0+ut-1),Et!==k&&(r.activeTexture(k),Et=k)}function Qe(k,Nt,Tt){Tt===void 0&&(Et===null?Tt=r.TEXTURE0+ut-1:Tt=Et);let Bt=L[Tt];Bt===void 0&&(Bt={type:void 0,texture:void 0},L[Tt]=Bt),(Bt.type!==k||Bt.texture!==Nt)&&(Et!==Tt&&(r.activeTexture(Tt),Et=Tt),r.bindTexture(k,Nt||St[k]),Bt.type=k,Bt.texture=Nt)}function O(){const k=L[Et];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function et(){try{r.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ft(){try{r.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ht(){try{r.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function lt(){try{r.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pt(){try{r.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ut(){try{r.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ht(){try{r.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Wt(){try{r.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Mt(){try{r.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function It(k){xt.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),xt.copy(k))}function Zt(k){K.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),K.copy(k))}function Kt(k,Nt){let Tt=m.get(Nt);Tt===void 0&&(Tt=new WeakMap,m.set(Nt,Tt));let Bt=Tt.get(k);Bt===void 0&&(Bt=r.getUniformBlockIndex(Nt,k.name),Tt.set(k,Bt))}function Dt(k,Nt){const Bt=m.get(Nt).get(k);p.get(Nt)!==Bt&&(r.uniformBlockBinding(Nt,Bt,k.__bindingPointIndex),p.set(Nt,Bt))}function oe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},Et=null,L={},_={},v=new WeakMap,M=[],E=null,b=!1,x=null,y=null,N=null,U=null,D=null,F=null,B=null,H=new Ue(0,0,0),X=0,w=!1,C=null,G=null,ot=null,st=null,gt=null,xt.set(0,0,r.canvas.width,r.canvas.height),K.set(0,0,r.canvas.width,r.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:Rt,disable:Ct,bindFramebuffer:se,drawBuffers:Qt,useProgram:Le,setBlending:P,setMaterial:We,setFlipSided:fe,setCullFace:ue,setLineWidth:Gt,setPolygonOffset:xe,setScissorTest:jt,activeTexture:ae,bindTexture:Qe,unbindTexture:O,compressedTexImage2D:T,compressedTexImage3D:et,texImage2D:Wt,texImage3D:Mt,updateUBOMapping:Kt,uniformBlockBinding:Dt,texStorage2D:Ut,texStorage3D:Ht,texSubImage2D:ft,texSubImage3D:ht,compressedTexSubImage2D:lt,compressedTexSubImage3D:Pt,scissor:It,viewport:Zt,reset:oe}}function pw(r,t,n,a,l,u,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new le,g=new WeakMap;let _;const v=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,T){return M?new OffscreenCanvas(O,T):kc("canvas")}function b(O,T,et){let ft=1;const ht=Qe(O);if((ht.width>et||ht.height>et)&&(ft=et/Math.max(ht.width,ht.height)),ft<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const lt=Math.floor(ft*ht.width),Pt=Math.floor(ft*ht.height);_===void 0&&(_=E(lt,Pt));const Ut=T?E(lt,Pt):_;return Ut.width=lt,Ut.height=Pt,Ut.getContext("2d").drawImage(O,0,0,lt,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+lt+"x"+Pt+")."),Ut}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),O;return O}function x(O){return O.generateMipmaps}function y(O){r.generateMipmap(O)}function N(O){return O.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?r.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(O,T,et,ft,ht=!1){if(O!==null){if(r[O]!==void 0)return r[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let lt=T;if(T===r.RED&&(et===r.FLOAT&&(lt=r.R32F),et===r.HALF_FLOAT&&(lt=r.R16F),et===r.UNSIGNED_BYTE&&(lt=r.R8)),T===r.RED_INTEGER&&(et===r.UNSIGNED_BYTE&&(lt=r.R8UI),et===r.UNSIGNED_SHORT&&(lt=r.R16UI),et===r.UNSIGNED_INT&&(lt=r.R32UI),et===r.BYTE&&(lt=r.R8I),et===r.SHORT&&(lt=r.R16I),et===r.INT&&(lt=r.R32I)),T===r.RG&&(et===r.FLOAT&&(lt=r.RG32F),et===r.HALF_FLOAT&&(lt=r.RG16F),et===r.UNSIGNED_BYTE&&(lt=r.RG8)),T===r.RG_INTEGER&&(et===r.UNSIGNED_BYTE&&(lt=r.RG8UI),et===r.UNSIGNED_SHORT&&(lt=r.RG16UI),et===r.UNSIGNED_INT&&(lt=r.RG32UI),et===r.BYTE&&(lt=r.RG8I),et===r.SHORT&&(lt=r.RG16I),et===r.INT&&(lt=r.RG32I)),T===r.RGB_INTEGER&&(et===r.UNSIGNED_BYTE&&(lt=r.RGB8UI),et===r.UNSIGNED_SHORT&&(lt=r.RGB16UI),et===r.UNSIGNED_INT&&(lt=r.RGB32UI),et===r.BYTE&&(lt=r.RGB8I),et===r.SHORT&&(lt=r.RGB16I),et===r.INT&&(lt=r.RGB32I)),T===r.RGBA_INTEGER&&(et===r.UNSIGNED_BYTE&&(lt=r.RGBA8UI),et===r.UNSIGNED_SHORT&&(lt=r.RGBA16UI),et===r.UNSIGNED_INT&&(lt=r.RGBA32UI),et===r.BYTE&&(lt=r.RGBA8I),et===r.SHORT&&(lt=r.RGBA16I),et===r.INT&&(lt=r.RGBA32I)),T===r.RGB&&et===r.UNSIGNED_INT_5_9_9_9_REV&&(lt=r.RGB9_E5),T===r.RGBA){const Pt=ht?Gc:De.getTransfer(ft);et===r.FLOAT&&(lt=r.RGBA32F),et===r.HALF_FLOAT&&(lt=r.RGBA16F),et===r.UNSIGNED_BYTE&&(lt=Pt===ke?r.SRGB8_ALPHA8:r.RGBA8),et===r.UNSIGNED_SHORT_4_4_4_4&&(lt=r.RGBA4),et===r.UNSIGNED_SHORT_5_5_5_1&&(lt=r.RGB5_A1)}return(lt===r.R16F||lt===r.R32F||lt===r.RG16F||lt===r.RG32F||lt===r.RGBA16F||lt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function D(O,T){let et;return O?T===null||T===ns||T===Bl?et=r.DEPTH24_STENCIL8:T===Ea?et=r.DEPTH32F_STENCIL8:T===Il&&(et=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ns||T===Bl?et=r.DEPTH_COMPONENT24:T===Ea?et=r.DEPTH_COMPONENT32F:T===Il&&(et=r.DEPTH_COMPONENT16),et}function F(O,T){return x(O)===!0||O.isFramebufferTexture&&O.minFilter!==Oi&&O.minFilter!==qi?Math.log2(Math.max(T.width,T.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?T.mipmaps.length:1}function B(O){const T=O.target;T.removeEventListener("dispose",B),X(T),T.isVideoTexture&&g.delete(T)}function H(O){const T=O.target;T.removeEventListener("dispose",H),C(T)}function X(O){const T=a.get(O);if(T.__webglInit===void 0)return;const et=O.source,ft=v.get(et);if(ft){const ht=ft[T.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&w(O),Object.keys(ft).length===0&&v.delete(et)}a.remove(O)}function w(O){const T=a.get(O);r.deleteTexture(T.__webglTexture);const et=O.source,ft=v.get(et);delete ft[T.__cacheKey],f.memory.textures--}function C(O){const T=a.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),a.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(T.__webglFramebuffer[ft]))for(let ht=0;ht<T.__webglFramebuffer[ft].length;ht++)r.deleteFramebuffer(T.__webglFramebuffer[ft][ht]);else r.deleteFramebuffer(T.__webglFramebuffer[ft]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[ft])}else{if(Array.isArray(T.__webglFramebuffer))for(let ft=0;ft<T.__webglFramebuffer.length;ft++)r.deleteFramebuffer(T.__webglFramebuffer[ft]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ft=0;ft<T.__webglColorRenderbuffer.length;ft++)T.__webglColorRenderbuffer[ft]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[ft]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const et=O.textures;for(let ft=0,ht=et.length;ft<ht;ft++){const lt=a.get(et[ft]);lt.__webglTexture&&(r.deleteTexture(lt.__webglTexture),f.memory.textures--),a.remove(et[ft])}a.remove(O)}let G=0;function ot(){G=0}function st(){const O=G;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),G+=1,O}function gt(O){const T=[];return T.push(O.wrapS),T.push(O.wrapT),T.push(O.wrapR||0),T.push(O.magFilter),T.push(O.minFilter),T.push(O.anisotropy),T.push(O.internalFormat),T.push(O.format),T.push(O.type),T.push(O.generateMipmaps),T.push(O.premultiplyAlpha),T.push(O.flipY),T.push(O.unpackAlignment),T.push(O.colorSpace),T.join()}function ut(O,T){const et=a.get(O);if(O.isVideoTexture&&jt(O),O.isRenderTargetTexture===!1&&O.version>0&&et.__version!==O.version){const ft=O.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{St(et,O,T);return}}n.bindTexture(r.TEXTURE_2D,et.__webglTexture,r.TEXTURE0+T)}function I(O,T){const et=a.get(O);if(O.version>0&&et.__version!==O.version){St(et,O,T);return}n.bindTexture(r.TEXTURE_2D_ARRAY,et.__webglTexture,r.TEXTURE0+T)}function Z(O,T){const et=a.get(O);if(O.version>0&&et.__version!==O.version){St(et,O,T);return}n.bindTexture(r.TEXTURE_3D,et.__webglTexture,r.TEXTURE0+T)}function q(O,T){const et=a.get(O);if(O.version>0&&et.__version!==O.version){Rt(et,O,T);return}n.bindTexture(r.TEXTURE_CUBE_MAP,et.__webglTexture,r.TEXTURE0+T)}const Et={[rp]:r.REPEAT,[Zr]:r.CLAMP_TO_EDGE,[sp]:r.MIRRORED_REPEAT},L={[Oi]:r.NEAREST,[AT]:r.NEAREST_MIPMAP_NEAREST,[sc]:r.NEAREST_MIPMAP_LINEAR,[qi]:r.LINEAR,[fd]:r.LINEAR_MIPMAP_NEAREST,[Kr]:r.LINEAR_MIPMAP_LINEAR},J={[UT]:r.NEVER,[IT]:r.ALWAYS,[LT]:r.LESS,[Wy]:r.LEQUAL,[NT]:r.EQUAL,[zT]:r.GEQUAL,[OT]:r.GREATER,[PT]:r.NOTEQUAL};function yt(O,T){if(T.type===Ea&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===qi||T.magFilter===fd||T.magFilter===sc||T.magFilter===Kr||T.minFilter===qi||T.minFilter===fd||T.minFilter===sc||T.minFilter===Kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(O,r.TEXTURE_WRAP_S,Et[T.wrapS]),r.texParameteri(O,r.TEXTURE_WRAP_T,Et[T.wrapT]),(O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY)&&r.texParameteri(O,r.TEXTURE_WRAP_R,Et[T.wrapR]),r.texParameteri(O,r.TEXTURE_MAG_FILTER,L[T.magFilter]),r.texParameteri(O,r.TEXTURE_MIN_FILTER,L[T.minFilter]),T.compareFunction&&(r.texParameteri(O,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(O,r.TEXTURE_COMPARE_FUNC,J[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Oi||T.minFilter!==sc&&T.minFilter!==Kr||T.type===Ea&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||a.get(T).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");r.texParameterf(O,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),a.get(T).__currentAnisotropy=T.anisotropy}}}function xt(O,T){let et=!1;O.__webglInit===void 0&&(O.__webglInit=!0,T.addEventListener("dispose",B));const ft=T.source;let ht=v.get(ft);ht===void 0&&(ht={},v.set(ft,ht));const lt=gt(T);if(lt!==O.__cacheKey){ht[lt]===void 0&&(ht[lt]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,et=!0),ht[lt].usedTimes++;const Pt=ht[O.__cacheKey];Pt!==void 0&&(ht[O.__cacheKey].usedTimes--,Pt.usedTimes===0&&w(T)),O.__cacheKey=lt,O.__webglTexture=ht[lt].texture}return et}function K(O,T,et){return Math.floor(Math.floor(O/et)/T)}function mt(O,T,et,ft){const lt=O.updateRanges;if(lt.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,et,ft,T.data);else{lt.sort((Mt,It)=>Mt.start-It.start);let Pt=0;for(let Mt=1;Mt<lt.length;Mt++){const It=lt[Pt],Zt=lt[Mt],Kt=It.start+It.count,Dt=K(Zt.start,T.width,4),oe=K(It.start,T.width,4);Zt.start<=Kt+1&&Dt===oe&&K(Zt.start+Zt.count-1,T.width,4)===Dt?It.count=Math.max(It.count,Zt.start+Zt.count-It.start):(++Pt,lt[Pt]=Zt)}lt.length=Pt+1;const Ut=r.getParameter(r.UNPACK_ROW_LENGTH),Ht=r.getParameter(r.UNPACK_SKIP_PIXELS),Wt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let Mt=0,It=lt.length;Mt<It;Mt++){const Zt=lt[Mt],Kt=Math.floor(Zt.start/4),Dt=Math.ceil(Zt.count/4),oe=Kt%T.width,k=Math.floor(Kt/T.width),Nt=Dt,Tt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,oe),r.pixelStorei(r.UNPACK_SKIP_ROWS,k),n.texSubImage2D(r.TEXTURE_2D,0,oe,k,Nt,Tt,et,ft,T.data)}O.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ut),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ht),r.pixelStorei(r.UNPACK_SKIP_ROWS,Wt)}}function St(O,T,et){let ft=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ft=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ft=r.TEXTURE_3D);const ht=xt(O,T),lt=T.source;n.bindTexture(ft,O.__webglTexture,r.TEXTURE0+et);const Pt=a.get(lt);if(lt.version!==Pt.__version||ht===!0){n.activeTexture(r.TEXTURE0+et);const Ut=De.getPrimaries(De.workingColorSpace),Ht=T.colorSpace===ur?null:De.getPrimaries(T.colorSpace),Wt=T.colorSpace===ur||Ut===Ht?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let Mt=b(T.image,!1,l.maxTextureSize);Mt=ae(T,Mt);const It=u.convert(T.format,T.colorSpace),Zt=u.convert(T.type);let Kt=U(T.internalFormat,It,Zt,T.colorSpace,T.isVideoTexture);yt(ft,T);let Dt;const oe=T.mipmaps,k=T.isVideoTexture!==!0,Nt=Pt.__version===void 0||ht===!0,Tt=lt.dataReady,Bt=F(T,Mt);if(T.isDepthTexture)Kt=D(T.format===Hl,T.type),Nt&&(k?n.texStorage2D(r.TEXTURE_2D,1,Kt,Mt.width,Mt.height):n.texImage2D(r.TEXTURE_2D,0,Kt,Mt.width,Mt.height,0,It,Zt,null));else if(T.isDataTexture)if(oe.length>0){k&&Nt&&n.texStorage2D(r.TEXTURE_2D,Bt,Kt,oe[0].width,oe[0].height);for(let At=0,vt=oe.length;At<vt;At++)Dt=oe[At],k?Tt&&n.texSubImage2D(r.TEXTURE_2D,At,0,0,Dt.width,Dt.height,It,Zt,Dt.data):n.texImage2D(r.TEXTURE_2D,At,Kt,Dt.width,Dt.height,0,It,Zt,Dt.data);T.generateMipmaps=!1}else k?(Nt&&n.texStorage2D(r.TEXTURE_2D,Bt,Kt,Mt.width,Mt.height),Tt&&mt(T,Mt,It,Zt)):n.texImage2D(r.TEXTURE_2D,0,Kt,Mt.width,Mt.height,0,It,Zt,Mt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){k&&Nt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Bt,Kt,oe[0].width,oe[0].height,Mt.depth);for(let At=0,vt=oe.length;At<vt;At++)if(Dt=oe[At],T.format!==Ni)if(It!==null)if(k){if(Tt)if(T.layerUpdates.size>0){const Vt=U0(Dt.width,Dt.height,T.format,T.type);for(const re of T.layerUpdates){const ze=Dt.data.subarray(re*Vt/Dt.data.BYTES_PER_ELEMENT,(re+1)*Vt/Dt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,At,0,0,re,Dt.width,Dt.height,1,It,ze)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,At,0,0,0,Dt.width,Dt.height,Mt.depth,It,Dt.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,At,Kt,Dt.width,Dt.height,Mt.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Tt&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,At,0,0,0,Dt.width,Dt.height,Mt.depth,It,Zt,Dt.data):n.texImage3D(r.TEXTURE_2D_ARRAY,At,Kt,Dt.width,Dt.height,Mt.depth,0,It,Zt,Dt.data)}else{k&&Nt&&n.texStorage2D(r.TEXTURE_2D,Bt,Kt,oe[0].width,oe[0].height);for(let At=0,vt=oe.length;At<vt;At++)Dt=oe[At],T.format!==Ni?It!==null?k?Tt&&n.compressedTexSubImage2D(r.TEXTURE_2D,At,0,0,Dt.width,Dt.height,It,Dt.data):n.compressedTexImage2D(r.TEXTURE_2D,At,Kt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Tt&&n.texSubImage2D(r.TEXTURE_2D,At,0,0,Dt.width,Dt.height,It,Zt,Dt.data):n.texImage2D(r.TEXTURE_2D,At,Kt,Dt.width,Dt.height,0,It,Zt,Dt.data)}else if(T.isDataArrayTexture)if(k){if(Nt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Bt,Kt,Mt.width,Mt.height,Mt.depth),Tt)if(T.layerUpdates.size>0){const At=U0(Mt.width,Mt.height,T.format,T.type);for(const vt of T.layerUpdates){const Vt=Mt.data.subarray(vt*At/Mt.data.BYTES_PER_ELEMENT,(vt+1)*At/Mt.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,vt,Mt.width,Mt.height,1,It,Zt,Vt)}T.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,It,Zt,Mt.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,Kt,Mt.width,Mt.height,Mt.depth,0,It,Zt,Mt.data);else if(T.isData3DTexture)k?(Nt&&n.texStorage3D(r.TEXTURE_3D,Bt,Kt,Mt.width,Mt.height,Mt.depth),Tt&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,It,Zt,Mt.data)):n.texImage3D(r.TEXTURE_3D,0,Kt,Mt.width,Mt.height,Mt.depth,0,It,Zt,Mt.data);else if(T.isFramebufferTexture){if(Nt)if(k)n.texStorage2D(r.TEXTURE_2D,Bt,Kt,Mt.width,Mt.height);else{let At=Mt.width,vt=Mt.height;for(let Vt=0;Vt<Bt;Vt++)n.texImage2D(r.TEXTURE_2D,Vt,Kt,At,vt,0,It,Zt,null),At>>=1,vt>>=1}}else if(oe.length>0){if(k&&Nt){const At=Qe(oe[0]);n.texStorage2D(r.TEXTURE_2D,Bt,Kt,At.width,At.height)}for(let At=0,vt=oe.length;At<vt;At++)Dt=oe[At],k?Tt&&n.texSubImage2D(r.TEXTURE_2D,At,0,0,It,Zt,Dt):n.texImage2D(r.TEXTURE_2D,At,Kt,It,Zt,Dt);T.generateMipmaps=!1}else if(k){if(Nt){const At=Qe(Mt);n.texStorage2D(r.TEXTURE_2D,Bt,Kt,At.width,At.height)}Tt&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,It,Zt,Mt)}else n.texImage2D(r.TEXTURE_2D,0,Kt,It,Zt,Mt);x(T)&&y(ft),Pt.__version=lt.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function Rt(O,T,et){if(T.image.length!==6)return;const ft=xt(O,T),ht=T.source;n.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+et);const lt=a.get(ht);if(ht.version!==lt.__version||ft===!0){n.activeTexture(r.TEXTURE0+et);const Pt=De.getPrimaries(De.workingColorSpace),Ut=T.colorSpace===ur?null:De.getPrimaries(T.colorSpace),Ht=T.colorSpace===ur||Pt===Ut?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);const Wt=T.isCompressedTexture||T.image[0].isCompressedTexture,Mt=T.image[0]&&T.image[0].isDataTexture,It=[];for(let vt=0;vt<6;vt++)!Wt&&!Mt?It[vt]=b(T.image[vt],!0,l.maxCubemapSize):It[vt]=Mt?T.image[vt].image:T.image[vt],It[vt]=ae(T,It[vt]);const Zt=It[0],Kt=u.convert(T.format,T.colorSpace),Dt=u.convert(T.type),oe=U(T.internalFormat,Kt,Dt,T.colorSpace),k=T.isVideoTexture!==!0,Nt=lt.__version===void 0||ft===!0,Tt=ht.dataReady;let Bt=F(T,Zt);yt(r.TEXTURE_CUBE_MAP,T);let At;if(Wt){k&&Nt&&n.texStorage2D(r.TEXTURE_CUBE_MAP,Bt,oe,Zt.width,Zt.height);for(let vt=0;vt<6;vt++){At=It[vt].mipmaps;for(let Vt=0;Vt<At.length;Vt++){const re=At[Vt];T.format!==Ni?Kt!==null?k?Tt&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Vt,0,0,re.width,re.height,Kt,re.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Vt,oe,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Tt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Vt,0,0,re.width,re.height,Kt,Dt,re.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Vt,oe,re.width,re.height,0,Kt,Dt,re.data)}}}else{if(At=T.mipmaps,k&&Nt){At.length>0&&Bt++;const vt=Qe(It[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,Bt,oe,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(Mt){k?Tt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,It[vt].width,It[vt].height,Kt,Dt,It[vt].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,oe,It[vt].width,It[vt].height,0,Kt,Dt,It[vt].data);for(let Vt=0;Vt<At.length;Vt++){const ze=At[Vt].image[vt].image;k?Tt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Vt+1,0,0,ze.width,ze.height,Kt,Dt,ze.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Vt+1,oe,ze.width,ze.height,0,Kt,Dt,ze.data)}}else{k?Tt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Kt,Dt,It[vt]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,oe,Kt,Dt,It[vt]);for(let Vt=0;Vt<At.length;Vt++){const re=At[Vt];k?Tt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Vt+1,0,0,Kt,Dt,re.image[vt]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Vt+1,oe,Kt,Dt,re.image[vt])}}}x(T)&&y(r.TEXTURE_CUBE_MAP),lt.__version=ht.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function Ct(O,T,et,ft,ht,lt){const Pt=u.convert(et.format,et.colorSpace),Ut=u.convert(et.type),Ht=U(et.internalFormat,Pt,Ut,et.colorSpace),Wt=a.get(T),Mt=a.get(et);if(Mt.__renderTarget=T,!Wt.__hasExternalTextures){const It=Math.max(1,T.width>>lt),Zt=Math.max(1,T.height>>lt);ht===r.TEXTURE_3D||ht===r.TEXTURE_2D_ARRAY?n.texImage3D(ht,lt,Ht,It,Zt,T.depth,0,Pt,Ut,null):n.texImage2D(ht,lt,Ht,It,Zt,0,Pt,Ut,null)}n.bindFramebuffer(r.FRAMEBUFFER,O),xe(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ft,ht,Mt.__webglTexture,0,Gt(T)):(ht===r.TEXTURE_2D||ht>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ft,ht,Mt.__webglTexture,lt),n.bindFramebuffer(r.FRAMEBUFFER,null)}function se(O,T,et){if(r.bindRenderbuffer(r.RENDERBUFFER,O),T.depthBuffer){const ft=T.depthTexture,ht=ft&&ft.isDepthTexture?ft.type:null,lt=D(T.stencilBuffer,ht),Pt=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ut=Gt(T);xe(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ut,lt,T.width,T.height):et?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ut,lt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,lt,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Pt,r.RENDERBUFFER,O)}else{const ft=T.textures;for(let ht=0;ht<ft.length;ht++){const lt=ft[ht],Pt=u.convert(lt.format,lt.colorSpace),Ut=u.convert(lt.type),Ht=U(lt.internalFormat,Pt,Ut,lt.colorSpace),Wt=Gt(T);et&&xe(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Wt,Ht,T.width,T.height):xe(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Wt,Ht,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Ht,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Qt(O,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(r.FRAMEBUFFER,O),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ft=a.get(T.depthTexture);ft.__renderTarget=T,(!ft.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ut(T.depthTexture,0);const ht=ft.__webglTexture,lt=Gt(T);if(T.depthTexture.format===Fl)xe(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ht,0,lt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ht,0);else if(T.depthTexture.format===Hl)xe(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ht,0,lt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function Le(O){const T=a.get(O),et=O.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==O.depthTexture){const ft=O.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ft){const ht=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ft.removeEventListener("dispose",ht)};ft.addEventListener("dispose",ht),T.__depthDisposeCallback=ht}T.__boundDepthTexture=ft}if(O.depthTexture&&!T.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");const ft=O.texture.mipmaps;ft&&ft.length>0?Qt(T.__webglFramebuffer[0],O):Qt(T.__webglFramebuffer,O)}else if(et){T.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(n.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[ft]),T.__webglDepthbuffer[ft]===void 0)T.__webglDepthbuffer[ft]=r.createRenderbuffer(),se(T.__webglDepthbuffer[ft],O,!1);else{const ht=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,lt=T.__webglDepthbuffer[ft];r.bindRenderbuffer(r.RENDERBUFFER,lt),r.framebufferRenderbuffer(r.FRAMEBUFFER,ht,r.RENDERBUFFER,lt)}}else{const ft=O.texture.mipmaps;if(ft&&ft.length>0?n.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),se(T.__webglDepthbuffer,O,!1);else{const ht=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,lt=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,lt),r.framebufferRenderbuffer(r.FRAMEBUFFER,ht,r.RENDERBUFFER,lt)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function Pe(O,T,et){const ft=a.get(O);T!==void 0&&Ct(ft.__webglFramebuffer,O,O.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),et!==void 0&&Le(O)}function _e(O){const T=O.texture,et=a.get(O),ft=a.get(T);O.addEventListener("dispose",H);const ht=O.textures,lt=O.isWebGLCubeRenderTarget===!0,Pt=ht.length>1;if(Pt||(ft.__webglTexture===void 0&&(ft.__webglTexture=r.createTexture()),ft.__version=T.version,f.memory.textures++),lt){et.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer[Ut]=[];for(let Ht=0;Ht<T.mipmaps.length;Ht++)et.__webglFramebuffer[Ut][Ht]=r.createFramebuffer()}else et.__webglFramebuffer[Ut]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer=[];for(let Ut=0;Ut<T.mipmaps.length;Ut++)et.__webglFramebuffer[Ut]=r.createFramebuffer()}else et.__webglFramebuffer=r.createFramebuffer();if(Pt)for(let Ut=0,Ht=ht.length;Ut<Ht;Ut++){const Wt=a.get(ht[Ut]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=r.createTexture(),f.memory.textures++)}if(O.samples>0&&xe(O)===!1){et.__webglMultisampledFramebuffer=r.createFramebuffer(),et.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Ut=0;Ut<ht.length;Ut++){const Ht=ht[Ut];et.__webglColorRenderbuffer[Ut]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,et.__webglColorRenderbuffer[Ut]);const Wt=u.convert(Ht.format,Ht.colorSpace),Mt=u.convert(Ht.type),It=U(Ht.internalFormat,Wt,Mt,Ht.colorSpace,O.isXRRenderTarget===!0),Zt=Gt(O);r.renderbufferStorageMultisample(r.RENDERBUFFER,Zt,It,O.width,O.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ut,r.RENDERBUFFER,et.__webglColorRenderbuffer[Ut])}r.bindRenderbuffer(r.RENDERBUFFER,null),O.depthBuffer&&(et.__webglDepthRenderbuffer=r.createRenderbuffer(),se(et.__webglDepthRenderbuffer,O,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(lt){n.bindTexture(r.TEXTURE_CUBE_MAP,ft.__webglTexture),yt(r.TEXTURE_CUBE_MAP,T);for(let Ut=0;Ut<6;Ut++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ht=0;Ht<T.mipmaps.length;Ht++)Ct(et.__webglFramebuffer[Ut][Ht],O,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Ht);else Ct(et.__webglFramebuffer[Ut],O,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);x(T)&&y(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Pt){for(let Ut=0,Ht=ht.length;Ut<Ht;Ut++){const Wt=ht[Ut],Mt=a.get(Wt);n.bindTexture(r.TEXTURE_2D,Mt.__webglTexture),yt(r.TEXTURE_2D,Wt),Ct(et.__webglFramebuffer,O,Wt,r.COLOR_ATTACHMENT0+Ut,r.TEXTURE_2D,0),x(Wt)&&y(r.TEXTURE_2D)}n.unbindTexture()}else{let Ut=r.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ut=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Ut,ft.__webglTexture),yt(Ut,T),T.mipmaps&&T.mipmaps.length>0)for(let Ht=0;Ht<T.mipmaps.length;Ht++)Ct(et.__webglFramebuffer[Ht],O,T,r.COLOR_ATTACHMENT0,Ut,Ht);else Ct(et.__webglFramebuffer,O,T,r.COLOR_ATTACHMENT0,Ut,0);x(T)&&y(Ut),n.unbindTexture()}O.depthBuffer&&Le(O)}function P(O){const T=O.textures;for(let et=0,ft=T.length;et<ft;et++){const ht=T[et];if(x(ht)){const lt=N(O),Pt=a.get(ht).__webglTexture;n.bindTexture(lt,Pt),y(lt),n.unbindTexture()}}}const We=[],fe=[];function ue(O){if(O.samples>0){if(xe(O)===!1){const T=O.textures,et=O.width,ft=O.height;let ht=r.COLOR_BUFFER_BIT;const lt=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Pt=a.get(O),Ut=T.length>1;if(Ut)for(let Wt=0;Wt<T.length;Wt++)n.bindFramebuffer(r.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Wt,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,Pt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Wt,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const Ht=O.texture.mipmaps;Ht&&Ht.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Wt=0;Wt<T.length;Wt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(ht|=r.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(ht|=r.STENCIL_BUFFER_BIT)),Ut){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Pt.__webglColorRenderbuffer[Wt]);const Mt=a.get(T[Wt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Mt,0)}r.blitFramebuffer(0,0,et,ft,0,0,et,ft,ht,r.NEAREST),p===!0&&(We.length=0,fe.length=0,We.push(r.COLOR_ATTACHMENT0+Wt),O.depthBuffer&&O.resolveDepthBuffer===!1&&(We.push(lt),fe.push(lt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,fe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,We))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ut)for(let Wt=0;Wt<T.length;Wt++){n.bindFramebuffer(r.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Wt,r.RENDERBUFFER,Pt.__webglColorRenderbuffer[Wt]);const Mt=a.get(T[Wt]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,Pt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Wt,r.TEXTURE_2D,Mt,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&p){const T=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function Gt(O){return Math.min(l.maxSamples,O.samples)}function xe(O){const T=a.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function jt(O){const T=f.render.frame;g.get(O)!==T&&(g.set(O,T),O.update())}function ae(O,T){const et=O.colorSpace,ft=O.format,ht=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||et!==Mo&&et!==ur&&(De.getTransfer(et)===ke?(ft!==Ni||ht!==Ra)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),T}function Qe(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(m.width=O.naturalWidth||O.width,m.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(m.width=O.displayWidth,m.height=O.displayHeight):(m.width=O.width,m.height=O.height),m}this.allocateTextureUnit=st,this.resetTextureUnits=ot,this.setTexture2D=ut,this.setTexture2DArray=I,this.setTexture3D=Z,this.setTextureCube=q,this.rebindTextures=Pe,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=xe}function mw(r,t){function n(a,l=ur){let u;const f=De.getTransfer(l);if(a===Ra)return r.UNSIGNED_BYTE;if(a===Xp)return r.UNSIGNED_SHORT_4_4_4_4;if(a===Wp)return r.UNSIGNED_SHORT_5_5_5_1;if(a===Fy)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===Iy)return r.BYTE;if(a===By)return r.SHORT;if(a===Il)return r.UNSIGNED_SHORT;if(a===kp)return r.INT;if(a===ns)return r.UNSIGNED_INT;if(a===Ea)return r.FLOAT;if(a===Wl)return r.HALF_FLOAT;if(a===Hy)return r.ALPHA;if(a===Gy)return r.RGB;if(a===Ni)return r.RGBA;if(a===Fl)return r.DEPTH_COMPONENT;if(a===Hl)return r.DEPTH_STENCIL;if(a===Vy)return r.RED;if(a===qp)return r.RED_INTEGER;if(a===ky)return r.RG;if(a===Yp)return r.RG_INTEGER;if(a===jp)return r.RGBA_INTEGER;if(a===Nc||a===Oc||a===Pc||a===zc)if(f===ke)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(a===Nc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Oc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Pc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===zc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(a===Nc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Oc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Pc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===zc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===op||a===lp||a===up||a===cp)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(a===op)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===lp)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===up)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===cp)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===fp||a===hp||a===dp)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(a===fp||a===hp)return f===ke?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(a===dp)return f===ke?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===pp||a===mp||a===gp||a===_p||a===vp||a===yp||a===xp||a===Sp||a===Mp||a===Ep||a===Tp||a===bp||a===Ap||a===Rp)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(a===pp)return f===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===mp)return f===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===gp)return f===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===_p)return f===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===vp)return f===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===yp)return f===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===xp)return f===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Sp)return f===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Mp)return f===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Ep)return f===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Tp)return f===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===bp)return f===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Ap)return f===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Rp)return f===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Ic||a===Cp||a===wp)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(a===Ic)return f===ke?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Cp)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===wp)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Xy||a===Dp||a===Up||a===Lp)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(a===Ic)return u.COMPRESSED_RED_RGTC1_EXT;if(a===Dp)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Up)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Lp)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Bl?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:n}}const gw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_w=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class vw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,a){if(this.texture===null){const l=new Wn,u=t.properties.get(l);u.__webglTexture=n.texture,(n.depthNear!==a.depthNear||n.depthFar!==a.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new xr({vertexShader:gw,fragmentShader:_w,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Yi(new Jc(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yw extends os{constructor(t,n){super();const a=this;let l=null,u=1,f=null,d="local-floor",p=1,m=null,g=null,_=null,v=null,M=null,E=null;const b=new vw,x=n.getContextAttributes();let y=null,N=null;const U=[],D=[],F=new le;let B=null;const H=new xi;H.viewport=new ln;const X=new xi;X.viewport=new ln;const w=[H,X],C=new Bb;let G=null,ot=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let mt=U[K];return mt===void 0&&(mt=new Ld,U[K]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(K){let mt=U[K];return mt===void 0&&(mt=new Ld,U[K]=mt),mt.getGripSpace()},this.getHand=function(K){let mt=U[K];return mt===void 0&&(mt=new Ld,U[K]=mt),mt.getHandSpace()};function st(K){const mt=D.indexOf(K.inputSource);if(mt===-1)return;const St=U[mt];St!==void 0&&(St.update(K.inputSource,K.frame,m||f),St.dispatchEvent({type:K.type,data:K.inputSource}))}function gt(){l.removeEventListener("select",st),l.removeEventListener("selectstart",st),l.removeEventListener("selectend",st),l.removeEventListener("squeeze",st),l.removeEventListener("squeezestart",st),l.removeEventListener("squeezeend",st),l.removeEventListener("end",gt),l.removeEventListener("inputsourceschange",ut);for(let K=0;K<U.length;K++){const mt=D[K];mt!==null&&(D[K]=null,U[K].disconnect(mt))}G=null,ot=null,b.reset(),t.setRenderTarget(y),M=null,v=null,_=null,l=null,N=null,xt.stop(),a.isPresenting=!1,t.setPixelRatio(B),t.setSize(F.width,F.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){u=K,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){d=K,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(K){m=K},this.getBaseLayer=function(){return v!==null?v:M},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(K){if(l=K,l!==null){if(y=t.getRenderTarget(),l.addEventListener("select",st),l.addEventListener("selectstart",st),l.addEventListener("selectend",st),l.addEventListener("squeeze",st),l.addEventListener("squeezestart",st),l.addEventListener("squeezeend",st),l.addEventListener("end",gt),l.addEventListener("inputsourceschange",ut),x.xrCompatible!==!0&&await n.makeXRCompatible(),B=t.getPixelRatio(),t.getSize(F),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,Rt=null,Ct=null;x.depth&&(Ct=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,St=x.stencil?Hl:Fl,Rt=x.stencil?Bl:ns);const se={colorFormat:n.RGBA8,depthFormat:Ct,scaleFactor:u};_=new XRWebGLBinding(l,n),v=_.createProjectionLayer(se),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),N=new as(v.textureWidth,v.textureHeight,{format:Ni,type:Ra,depthTexture:new ax(v.textureWidth,v.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const St={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,n,St),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),N=new as(M.framebufferWidth,M.framebufferHeight,{format:Ni,type:Ra,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await l.requestReferenceSpace(d),xt.setContext(l),xt.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function ut(K){for(let mt=0;mt<K.removed.length;mt++){const St=K.removed[mt],Rt=D.indexOf(St);Rt>=0&&(D[Rt]=null,U[Rt].disconnect(St))}for(let mt=0;mt<K.added.length;mt++){const St=K.added[mt];let Rt=D.indexOf(St);if(Rt===-1){for(let se=0;se<U.length;se++)if(se>=D.length){D.push(St),Rt=se;break}else if(D[se]===null){D[se]=St,Rt=se;break}if(Rt===-1)break}const Ct=U[Rt];Ct&&Ct.connect(St)}}const I=new tt,Z=new tt;function q(K,mt,St){I.setFromMatrixPosition(mt.matrixWorld),Z.setFromMatrixPosition(St.matrixWorld);const Rt=I.distanceTo(Z),Ct=mt.projectionMatrix.elements,se=St.projectionMatrix.elements,Qt=Ct[14]/(Ct[10]-1),Le=Ct[14]/(Ct[10]+1),Pe=(Ct[9]+1)/Ct[5],_e=(Ct[9]-1)/Ct[5],P=(Ct[8]-1)/Ct[0],We=(se[8]+1)/se[0],fe=Qt*P,ue=Qt*We,Gt=Rt/(-P+We),xe=Gt*-P;if(mt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(xe),K.translateZ(Gt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ct[10]===-1)K.projectionMatrix.copy(mt.projectionMatrix),K.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{const jt=Qt+Gt,ae=Le+Gt,Qe=fe-xe,O=ue+(Rt-xe),T=Pe*Le/ae*jt,et=_e*Le/ae*jt;K.projectionMatrix.makePerspective(Qe,O,T,et,jt,ae),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Et(K,mt){mt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(mt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(l===null)return;let mt=K.near,St=K.far;b.texture!==null&&(b.depthNear>0&&(mt=b.depthNear),b.depthFar>0&&(St=b.depthFar)),C.near=X.near=H.near=mt,C.far=X.far=H.far=St,(G!==C.near||ot!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),G=C.near,ot=C.far),H.layers.mask=K.layers.mask|2,X.layers.mask=K.layers.mask|4,C.layers.mask=H.layers.mask|X.layers.mask;const Rt=K.parent,Ct=C.cameras;Et(C,Rt);for(let se=0;se<Ct.length;se++)Et(Ct[se],Rt);Ct.length===2?q(C,H,X):C.projectionMatrix.copy(H.projectionMatrix),L(K,C,Rt)};function L(K,mt,St){St===null?K.matrix.copy(mt.matrixWorld):(K.matrix.copy(St.matrixWorld),K.matrix.invert(),K.matrix.multiply(mt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(mt.projectionMatrix),K.projectionMatrixInverse.copy(mt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Gl*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(v===null&&M===null))return p},this.setFoveation=function(K){p=K,v!==null&&(v.fixedFoveation=K),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=K)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(C)};let J=null;function yt(K,mt){if(g=mt.getViewerPose(m||f),E=mt,g!==null){const St=g.views;M!==null&&(t.setRenderTargetFramebuffer(N,M.framebuffer),t.setRenderTarget(N));let Rt=!1;St.length!==C.cameras.length&&(C.cameras.length=0,Rt=!0);for(let Qt=0;Qt<St.length;Qt++){const Le=St[Qt];let Pe=null;if(M!==null)Pe=M.getViewport(Le);else{const P=_.getViewSubImage(v,Le);Pe=P.viewport,Qt===0&&(t.setRenderTargetTextures(N,P.colorTexture,P.depthStencilTexture),t.setRenderTarget(N))}let _e=w[Qt];_e===void 0&&(_e=new xi,_e.layers.enable(Qt),_e.viewport=new ln,w[Qt]=_e),_e.matrix.fromArray(Le.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(Le.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),Qt===0&&(C.matrix.copy(_e.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Rt===!0&&C.cameras.push(_e)}const Ct=l.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&_){const Qt=_.getDepthInformation(St[0]);Qt&&Qt.isValid&&Qt.texture&&b.init(t,Qt,l.renderState)}}for(let St=0;St<U.length;St++){const Rt=D[St],Ct=U[St];Rt!==null&&Ct!==void 0&&Ct.update(Rt,mt,m||f)}J&&J(K,mt),mt.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:mt}),E=null}const xt=new rx;xt.setAnimationLoop(yt),this.setAnimationLoop=function(K){J=K},this.dispose=function(){}}}const Wr=new Ca,xw=new tn;function Sw(r,t){function n(x,y){x.matrixAutoUpdate===!0&&x.updateMatrix(),y.value.copy(x.matrix)}function a(x,y){y.color.getRGB(x.fogColor.value,Qy(r)),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function l(x,y,N,U,D){y.isMeshBasicMaterial||y.isMeshLambertMaterial?u(x,y):y.isMeshToonMaterial?(u(x,y),_(x,y)):y.isMeshPhongMaterial?(u(x,y),g(x,y)):y.isMeshStandardMaterial?(u(x,y),v(x,y),y.isMeshPhysicalMaterial&&M(x,y,D)):y.isMeshMatcapMaterial?(u(x,y),E(x,y)):y.isMeshDepthMaterial?u(x,y):y.isMeshDistanceMaterial?(u(x,y),b(x,y)):y.isMeshNormalMaterial?u(x,y):y.isLineBasicMaterial?(f(x,y),y.isLineDashedMaterial&&d(x,y)):y.isPointsMaterial?p(x,y,N,U):y.isSpriteMaterial?m(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function u(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map,n(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,n(y.alphaMap,x.alphaMapTransform)),y.bumpMap&&(x.bumpMap.value=y.bumpMap,n(y.bumpMap,x.bumpMapTransform),x.bumpScale.value=y.bumpScale,y.side===$n&&(x.bumpScale.value*=-1)),y.normalMap&&(x.normalMap.value=y.normalMap,n(y.normalMap,x.normalMapTransform),x.normalScale.value.copy(y.normalScale),y.side===$n&&x.normalScale.value.negate()),y.displacementMap&&(x.displacementMap.value=y.displacementMap,n(y.displacementMap,x.displacementMapTransform),x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,x.emissiveMapTransform)),y.specularMap&&(x.specularMap.value=y.specularMap,n(y.specularMap,x.specularMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);const N=t.get(y),U=N.envMap,D=N.envMapRotation;U&&(x.envMap.value=U,Wr.copy(D),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),x.envMapRotation.value.setFromMatrix4(xw.makeRotationFromEuler(Wr)),x.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap&&(x.lightMap.value=y.lightMap,x.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,x.lightMapTransform)),y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,x.aoMapTransform))}function f(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,y.map&&(x.map.value=y.map,n(y.map,x.mapTransform))}function d(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function p(x,y,N,U){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*N,x.scale.value=U*.5,y.map&&(x.map.value=y.map,n(y.map,x.uvTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,n(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function m(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map,n(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,n(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function g(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function _(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function v(x,y){x.metalness.value=y.metalness,y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,x.metalnessMapTransform)),x.roughness.value=y.roughness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,x.roughnessMapTransform)),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function M(x,y,N){x.ior.value=y.ior,y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,x.sheenColorMapTransform)),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,x.sheenRoughnessMapTransform))),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,x.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(x.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===$n&&x.clearcoatNormalScale.value.negate())),y.dispersion>0&&(x.dispersion.value=y.dispersion),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,x.iridescenceMapTransform)),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=N.texture,x.transmissionSamplerSize.value.set(N.width,N.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,x.transmissionMapTransform)),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(x.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(x.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,x.specularColorMapTransform)),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,y){y.matcap&&(x.matcap.value=y.matcap)}function b(x,y){const N=t.get(y).light;x.referencePosition.value.setFromMatrixPosition(N.matrixWorld),x.nearDistance.value=N.shadow.camera.near,x.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:l}}function Mw(r,t,n,a){let l={},u={},f=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(N,U){const D=U.program;a.uniformBlockBinding(N,D)}function m(N,U){let D=l[N.id];D===void 0&&(E(N),D=g(N),l[N.id]=D,N.addEventListener("dispose",x));const F=U.program;a.updateUBOMapping(N,F);const B=t.render.frame;u[N.id]!==B&&(v(N),u[N.id]=B)}function g(N){const U=_();N.__bindingPointIndex=U;const D=r.createBuffer(),F=N.__size,B=N.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,F,B),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,D),D}function _(){for(let N=0;N<d;N++)if(f.indexOf(N)===-1)return f.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(N){const U=l[N.id],D=N.uniforms,F=N.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let B=0,H=D.length;B<H;B++){const X=Array.isArray(D[B])?D[B]:[D[B]];for(let w=0,C=X.length;w<C;w++){const G=X[w];if(M(G,B,w,F)===!0){const ot=G.__offset,st=Array.isArray(G.value)?G.value:[G.value];let gt=0;for(let ut=0;ut<st.length;ut++){const I=st[ut],Z=b(I);typeof I=="number"||typeof I=="boolean"?(G.__data[0]=I,r.bufferSubData(r.UNIFORM_BUFFER,ot+gt,G.__data)):I.isMatrix3?(G.__data[0]=I.elements[0],G.__data[1]=I.elements[1],G.__data[2]=I.elements[2],G.__data[3]=0,G.__data[4]=I.elements[3],G.__data[5]=I.elements[4],G.__data[6]=I.elements[5],G.__data[7]=0,G.__data[8]=I.elements[6],G.__data[9]=I.elements[7],G.__data[10]=I.elements[8],G.__data[11]=0):(I.toArray(G.__data,gt),gt+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ot,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(N,U,D,F){const B=N.value,H=U+"_"+D;if(F[H]===void 0)return typeof B=="number"||typeof B=="boolean"?F[H]=B:F[H]=B.clone(),!0;{const X=F[H];if(typeof B=="number"||typeof B=="boolean"){if(X!==B)return F[H]=B,!0}else if(X.equals(B)===!1)return X.copy(B),!0}return!1}function E(N){const U=N.uniforms;let D=0;const F=16;for(let H=0,X=U.length;H<X;H++){const w=Array.isArray(U[H])?U[H]:[U[H]];for(let C=0,G=w.length;C<G;C++){const ot=w[C],st=Array.isArray(ot.value)?ot.value:[ot.value];for(let gt=0,ut=st.length;gt<ut;gt++){const I=st[gt],Z=b(I),q=D%F,Et=q%Z.boundary,L=q+Et;D+=Et,L!==0&&F-L<Z.storage&&(D+=F-L),ot.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),ot.__offset=D,D+=Z.storage}}}const B=D%F;return B>0&&(D+=F-B),N.__size=D,N.__cache={},this}function b(N){const U={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(U.boundary=4,U.storage=4):N.isVector2?(U.boundary=8,U.storage=8):N.isVector3||N.isColor?(U.boundary=16,U.storage=12):N.isVector4?(U.boundary=16,U.storage=16):N.isMatrix3?(U.boundary=48,U.storage=48):N.isMatrix4?(U.boundary=64,U.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),U}function x(N){const U=N.target;U.removeEventListener("dispose",x);const D=f.indexOf(U.__bindingPointIndex);f.splice(D,1),r.deleteBuffer(l[U.id]),delete l[U.id],delete u[U.id]}function y(){for(const N in l)r.deleteBuffer(l[N]);f=[],l={},u={}}return{bind:p,update:m,dispose:y}}class Ew{constructor(t={}){const{canvas:n=tb(),context:a=null,depth:l=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let M;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=a.getContextAttributes().alpha}else M=f;const E=new Uint32Array(4),b=new Int32Array(4);let x=null,y=null;const N=[],U=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let F=!1;this._outputColorSpace=yi;let B=0,H=0,X=null,w=-1,C=null;const G=new ln,ot=new ln;let st=null;const gt=new Ue(0);let ut=0,I=n.width,Z=n.height,q=1,Et=null,L=null;const J=new ln(0,0,I,Z),yt=new ln(0,0,I,Z);let xt=!1;const K=new nx;let mt=!1,St=!1;const Rt=new tn,Ct=new tn,se=new tt,Qt=new ln,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pe=!1;function _e(){return X===null?q:1}let P=a;function We(R,Y){return n.getContext(R,Y)}try{const R={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Vp}`),n.addEventListener("webglcontextlost",Bt,!1),n.addEventListener("webglcontextrestored",At,!1),n.addEventListener("webglcontextcreationerror",vt,!1),P===null){const Y="webgl2";if(P=We(Y,R),P===null)throw We(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let fe,ue,Gt,xe,jt,ae,Qe,O,T,et,ft,ht,lt,Pt,Ut,Ht,Wt,Mt,It,Zt,Kt,Dt,oe,k;function Nt(){fe=new NR(P),fe.init(),Dt=new mw(P,fe),ue=new AR(P,fe,t,Dt),Gt=new dw(P,fe),ue.reverseDepthBuffer&&v&&Gt.buffers.depth.setReversed(!0),xe=new zR(P),jt=new tw,ae=new pw(P,fe,Gt,jt,ue,Dt,xe),Qe=new CR(D),O=new LR(D),T=new Vb(P),oe=new TR(P,T),et=new OR(P,T,xe,oe),ft=new BR(P,et,T,xe),It=new IR(P,ue,ae),Ht=new RR(jt),ht=new $C(D,Qe,O,fe,ue,oe,Ht),lt=new Sw(D,jt),Pt=new nw,Ut=new lw(fe),Mt=new ER(D,Qe,O,Gt,ft,M,p),Wt=new fw(D,ft,ue),k=new Mw(P,xe,ue,Gt),Zt=new bR(P,fe,xe),Kt=new PR(P,fe,xe),xe.programs=ht.programs,D.capabilities=ue,D.extensions=fe,D.properties=jt,D.renderLists=Pt,D.shadowMap=Wt,D.state=Gt,D.info=xe}Nt();const Tt=new yw(D,P);this.xr=Tt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const R=fe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=fe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(R){R!==void 0&&(q=R,this.setSize(I,Z,!1))},this.getSize=function(R){return R.set(I,Z)},this.setSize=function(R,Y,at=!0){if(Tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=R,Z=Y,n.width=Math.floor(R*q),n.height=Math.floor(Y*q),at===!0&&(n.style.width=R+"px",n.style.height=Y+"px"),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(I*q,Z*q).floor()},this.setDrawingBufferSize=function(R,Y,at){I=R,Z=Y,q=at,n.width=Math.floor(R*at),n.height=Math.floor(Y*at),this.setViewport(0,0,R,Y)},this.getCurrentViewport=function(R){return R.copy(G)},this.getViewport=function(R){return R.copy(J)},this.setViewport=function(R,Y,at,rt){R.isVector4?J.set(R.x,R.y,R.z,R.w):J.set(R,Y,at,rt),Gt.viewport(G.copy(J).multiplyScalar(q).round())},this.getScissor=function(R){return R.copy(yt)},this.setScissor=function(R,Y,at,rt){R.isVector4?yt.set(R.x,R.y,R.z,R.w):yt.set(R,Y,at,rt),Gt.scissor(ot.copy(yt).multiplyScalar(q).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(R){Gt.setScissorTest(xt=R)},this.setOpaqueSort=function(R){Et=R},this.setTransparentSort=function(R){L=R},this.getClearColor=function(R){return R.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor(...arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,at=!0){let rt=0;if(R){let j=!1;if(X!==null){const bt=X.texture.format;j=bt===jp||bt===Yp||bt===qp}if(j){const bt=X.texture.type,Lt=bt===Ra||bt===ns||bt===Il||bt===Bl||bt===Xp||bt===Wp,zt=Mt.getClearColor(),Ft=Mt.getClearAlpha(),ee=zt.r,Jt=zt.g,qt=zt.b;Lt?(E[0]=ee,E[1]=Jt,E[2]=qt,E[3]=Ft,P.clearBufferuiv(P.COLOR,0,E)):(b[0]=ee,b[1]=Jt,b[2]=qt,b[3]=Ft,P.clearBufferiv(P.COLOR,0,b))}else rt|=P.COLOR_BUFFER_BIT}Y&&(rt|=P.DEPTH_BUFFER_BIT),at&&(rt|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Bt,!1),n.removeEventListener("webglcontextrestored",At,!1),n.removeEventListener("webglcontextcreationerror",vt,!1),Mt.dispose(),Pt.dispose(),Ut.dispose(),jt.dispose(),Qe.dispose(),O.dispose(),ft.dispose(),oe.dispose(),k.dispose(),ht.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",pn),Tt.removeEventListener("sessionend",Rn),Yn.stop()};function Bt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const R=xe.autoReset,Y=Wt.enabled,at=Wt.autoUpdate,rt=Wt.needsUpdate,j=Wt.type;Nt(),xe.autoReset=R,Wt.enabled=Y,Wt.autoUpdate=at,Wt.needsUpdate=rt,Wt.type=j}function vt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Vt(R){const Y=R.target;Y.removeEventListener("dispose",Vt),re(Y)}function re(R){ze(R),jt.remove(R)}function ze(R){const Y=jt.get(R).programs;Y!==void 0&&(Y.forEach(function(at){ht.releaseProgram(at)}),R.isShaderMaterial&&ht.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,at,rt,j,bt){Y===null&&(Y=Le);const Lt=j.isMesh&&j.matrixWorld.determinant()<0,zt=Er(R,Y,at,rt,j);Gt.setMaterial(rt,Lt);let Ft=at.index,ee=1;if(rt.wireframe===!0){if(Ft=et.getWireframeAttribute(at),Ft===void 0)return;ee=2}const Jt=at.drawRange,qt=at.attributes.position;let me=Jt.start*ee,Ne=(Jt.start+Jt.count)*ee;bt!==null&&(me=Math.max(me,bt.start*ee),Ne=Math.min(Ne,(bt.start+bt.count)*ee)),Ft!==null?(me=Math.max(me,0),Ne=Math.min(Ne,Ft.count)):qt!=null&&(me=Math.max(me,0),Ne=Math.min(Ne,qt.count));const je=Ne-me;if(je<0||je===1/0)return;oe.setup(j,rt,zt,at,Ft);let Ee,Te=Zt;if(Ft!==null&&(Ee=T.get(Ft),Te=Kt,Te.setIndex(Ee)),j.isMesh)rt.wireframe===!0?(Gt.setLineWidth(rt.wireframeLinewidth*_e()),Te.setMode(P.LINES)):Te.setMode(P.TRIANGLES);else if(j.isLine){let $t=rt.linewidth;$t===void 0&&($t=1),Gt.setLineWidth($t*_e()),j.isLineSegments?Te.setMode(P.LINES):j.isLineLoop?Te.setMode(P.LINE_LOOP):Te.setMode(P.LINE_STRIP)}else j.isPoints?Te.setMode(P.POINTS):j.isSprite&&Te.setMode(P.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)oo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Te.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(fe.get("WEBGL_multi_draw"))Te.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const $t=j._multiDrawStarts,en=j._multiDrawCounts,Ae=j._multiDrawCount,Ln=Ft?T.get(Ft).bytesPerElement:1,La=jt.get(rt).currentProgram.getUniforms();for(let Ze=0;Ze<Ae;Ze++)La.setValue(P,"_gl_DrawID",Ze),Te.render($t[Ze]/Ln,en[Ze])}else if(j.isInstancedMesh)Te.renderInstances(me,je,j.count);else if(at.isInstancedBufferGeometry){const $t=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,en=Math.min(at.instanceCount,$t);Te.renderInstances(me,je,en)}else Te.render(me,je)};function Re(R,Y,at){R.transparent===!0&&R.side===Ma&&R.forceSinglePass===!1?(R.side=$n,R.needsUpdate=!0,Da(R,Y,at),R.side=yr,R.needsUpdate=!0,Da(R,Y,at),R.side=Ma):Da(R,Y,at)}this.compile=function(R,Y,at=null){at===null&&(at=R),y=Ut.get(at),y.init(Y),U.push(y),at.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(y.pushLight(j),j.castShadow&&y.pushShadow(j))}),R!==at&&R.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(y.pushLight(j),j.castShadow&&y.pushShadow(j))}),y.setupLights();const rt=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const bt=j.material;if(bt)if(Array.isArray(bt))for(let Lt=0;Lt<bt.length;Lt++){const zt=bt[Lt];Re(zt,at,j),rt.add(zt)}else Re(bt,at,j),rt.add(bt)}),y=U.pop(),rt},this.compileAsync=function(R,Y,at=null){const rt=this.compile(R,Y,at);return new Promise(j=>{function bt(){if(rt.forEach(function(Lt){jt.get(Lt).currentProgram.isReady()&&rt.delete(Lt)}),rt.size===0){j(R);return}setTimeout(bt,10)}fe.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let ti=null;function Sn(R){ti&&ti(R)}function pn(){Yn.stop()}function Rn(){Yn.start()}const Yn=new rx;Yn.setAnimationLoop(Sn),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(R){ti=R,Tt.setAnimationLoop(R),R===null?Yn.stop():Yn.start()},Tt.addEventListener("sessionstart",pn),Tt.addEventListener("sessionend",Rn),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(Y),Y=Tt.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,Y,X),y=Ut.get(R,U.length),y.init(Y),U.push(y),Ct.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),K.setFromProjectionMatrix(Ct),St=this.localClippingEnabled,mt=Ht.init(this.clippingPlanes,St),x=Pt.get(R,N.length),x.init(),N.push(x),Tt.enabled===!0&&Tt.isPresenting===!0){const bt=D.xr.getDepthSensingMesh();bt!==null&&Sr(bt,Y,-1/0,D.sortObjects)}Sr(R,Y,0,D.sortObjects),x.finish(),D.sortObjects===!0&&x.sort(Et,L),Pe=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,Pe&&Mt.addToRenderList(x,R),this.info.render.frame++,mt===!0&&Ht.beginShadows();const at=y.state.shadowsArray;Wt.render(at,R,Y),mt===!0&&Ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=x.opaque,j=x.transmissive;if(y.setupLights(),Y.isArrayCamera){const bt=Y.cameras;if(j.length>0)for(let Lt=0,zt=bt.length;Lt<zt;Lt++){const Ft=bt[Lt];Zl(rt,j,R,Ft)}Pe&&Mt.render(R);for(let Lt=0,zt=bt.length;Lt<zt;Lt++){const Ft=bt[Lt];jl(x,R,Ft,Ft.viewport)}}else j.length>0&&Zl(rt,j,R,Y),Pe&&Mt.render(R),jl(x,R,Y);X!==null&&H===0&&(ae.updateMultisampleRenderTarget(X),ae.updateRenderTargetMipmap(X)),R.isScene===!0&&R.onAfterRender(D,R,Y),oe.resetDefaultState(),w=-1,C=null,U.pop(),U.length>0?(y=U[U.length-1],mt===!0&&Ht.setGlobalState(D.clippingPlanes,y.state.camera)):y=null,N.pop(),N.length>0?x=N[N.length-1]:x=null};function Sr(R,Y,at,rt){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)at=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)y.pushLight(R),R.castShadow&&y.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||K.intersectsSprite(R)){rt&&Qt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ct);const Lt=ft.update(R),zt=R.material;zt.visible&&x.push(R,Lt,zt,at,Qt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||K.intersectsObject(R))){const Lt=ft.update(R),zt=R.material;if(rt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Qt.copy(R.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),Qt.copy(Lt.boundingSphere.center)),Qt.applyMatrix4(R.matrixWorld).applyMatrix4(Ct)),Array.isArray(zt)){const Ft=Lt.groups;for(let ee=0,Jt=Ft.length;ee<Jt;ee++){const qt=Ft[ee],me=zt[qt.materialIndex];me&&me.visible&&x.push(R,Lt,me,at,Qt.z,qt)}}else zt.visible&&x.push(R,Lt,zt,at,Qt.z,null)}}const bt=R.children;for(let Lt=0,zt=bt.length;Lt<zt;Lt++)Sr(bt[Lt],Y,at,rt)}function jl(R,Y,at,rt){const j=R.opaque,bt=R.transmissive,Lt=R.transparent;y.setupLightsView(at),mt===!0&&Ht.setGlobalState(D.clippingPlanes,at),rt&&Gt.viewport(G.copy(rt)),j.length>0&&Mr(j,Y,at),bt.length>0&&Mr(bt,Y,at),Lt.length>0&&Mr(Lt,Y,at),Gt.buffers.depth.setTest(!0),Gt.buffers.depth.setMask(!0),Gt.buffers.color.setMask(!0),Gt.setPolygonOffset(!1)}function Zl(R,Y,at,rt){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[rt.id]===void 0&&(y.state.transmissionRenderTarget[rt.id]=new as(1,1,{generateMipmaps:!0,type:fe.has("EXT_color_buffer_half_float")||fe.has("EXT_color_buffer_float")?Wl:Ra,minFilter:Kr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace}));const bt=y.state.transmissionRenderTarget[rt.id],Lt=rt.viewport||G;bt.setSize(Lt.z*D.transmissionResolutionScale,Lt.w*D.transmissionResolutionScale);const zt=D.getRenderTarget();D.setRenderTarget(bt),D.getClearColor(gt),ut=D.getClearAlpha(),ut<1&&D.setClearColor(16777215,.5),D.clear(),Pe&&Mt.render(at);const Ft=D.toneMapping;D.toneMapping=vr;const ee=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),y.setupLightsView(rt),mt===!0&&Ht.setGlobalState(D.clippingPlanes,rt),Mr(R,at,rt),ae.updateMultisampleRenderTarget(bt),ae.updateRenderTargetMipmap(bt),fe.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let qt=0,me=Y.length;qt<me;qt++){const Ne=Y[qt],je=Ne.object,Ee=Ne.geometry,Te=Ne.material,$t=Ne.group;if(Te.side===Ma&&je.layers.test(rt.layers)){const en=Te.side;Te.side=$n,Te.needsUpdate=!0,wa(je,at,rt,Ee,Te,$t),Te.side=en,Te.needsUpdate=!0,Jt=!0}}Jt===!0&&(ae.updateMultisampleRenderTarget(bt),ae.updateRenderTargetMipmap(bt))}D.setRenderTarget(zt),D.setClearColor(gt,ut),ee!==void 0&&(rt.viewport=ee),D.toneMapping=Ft}function Mr(R,Y,at){const rt=Y.isScene===!0?Y.overrideMaterial:null;for(let j=0,bt=R.length;j<bt;j++){const Lt=R[j],zt=Lt.object,Ft=Lt.geometry,ee=Lt.group;let Jt=Lt.material;Jt.allowOverride===!0&&rt!==null&&(Jt=rt),zt.layers.test(at.layers)&&wa(zt,Y,at,Ft,Jt,ee)}}function wa(R,Y,at,rt,j,bt){R.onBeforeRender(D,Y,at,rt,j,bt),R.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(D,Y,at,rt,R,bt),j.transparent===!0&&j.side===Ma&&j.forceSinglePass===!1?(j.side=$n,j.needsUpdate=!0,D.renderBufferDirect(at,Y,rt,j,R,bt),j.side=yr,j.needsUpdate=!0,D.renderBufferDirect(at,Y,rt,j,R,bt),j.side=Ma):D.renderBufferDirect(at,Y,rt,j,R,bt),R.onAfterRender(D,Y,at,rt,j,bt)}function Da(R,Y,at){Y.isScene!==!0&&(Y=Le);const rt=jt.get(R),j=y.state.lights,bt=y.state.shadowsArray,Lt=j.state.version,zt=ht.getParameters(R,j.state,bt,Y,at),Ft=ht.getProgramCacheKey(zt);let ee=rt.programs;rt.environment=R.isMeshStandardMaterial?Y.environment:null,rt.fog=Y.fog,rt.envMap=(R.isMeshStandardMaterial?O:Qe).get(R.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,ee===void 0&&(R.addEventListener("dispose",Vt),ee=new Map,rt.programs=ee);let Jt=ee.get(Ft);if(Jt!==void 0){if(rt.currentProgram===Jt&&rt.lightsStateVersion===Lt)return Ki(R,zt),Jt}else zt.uniforms=ht.getUniforms(R),R.onBeforeCompile(zt,D),Jt=ht.acquireProgram(zt,Ft),ee.set(Ft,Jt),rt.uniforms=zt.uniforms;const qt=rt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(qt.clippingPlanes=Ht.uniform),Ki(R,zt),rt.needsLights=un(R),rt.lightsStateVersion=Lt,rt.needsLights&&(qt.ambientLightColor.value=j.state.ambient,qt.lightProbe.value=j.state.probe,qt.directionalLights.value=j.state.directional,qt.directionalLightShadows.value=j.state.directionalShadow,qt.spotLights.value=j.state.spot,qt.spotLightShadows.value=j.state.spotShadow,qt.rectAreaLights.value=j.state.rectArea,qt.ltc_1.value=j.state.rectAreaLTC1,qt.ltc_2.value=j.state.rectAreaLTC2,qt.pointLights.value=j.state.point,qt.pointLightShadows.value=j.state.pointShadow,qt.hemisphereLights.value=j.state.hemi,qt.directionalShadowMap.value=j.state.directionalShadowMap,qt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,qt.spotShadowMap.value=j.state.spotShadowMap,qt.spotLightMatrix.value=j.state.spotLightMatrix,qt.spotLightMap.value=j.state.spotLightMap,qt.pointShadowMap.value=j.state.pointShadowMap,qt.pointShadowMatrix.value=j.state.pointShadowMatrix),rt.currentProgram=Jt,rt.uniformsList=null,Jt}function Zi(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=Bc.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function Ki(R,Y){const at=jt.get(R);at.outputColorSpace=Y.outputColorSpace,at.batching=Y.batching,at.batchingColor=Y.batchingColor,at.instancing=Y.instancing,at.instancingColor=Y.instancingColor,at.instancingMorph=Y.instancingMorph,at.skinning=Y.skinning,at.morphTargets=Y.morphTargets,at.morphNormals=Y.morphNormals,at.morphColors=Y.morphColors,at.morphTargetsCount=Y.morphTargetsCount,at.numClippingPlanes=Y.numClippingPlanes,at.numIntersection=Y.numClipIntersection,at.vertexAlphas=Y.vertexAlphas,at.vertexTangents=Y.vertexTangents,at.toneMapping=Y.toneMapping}function Er(R,Y,at,rt,j){Y.isScene!==!0&&(Y=Le),ae.resetTextureUnits();const bt=Y.fog,Lt=rt.isMeshStandardMaterial?Y.environment:null,zt=X===null?D.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Mo,Ft=(rt.isMeshStandardMaterial?O:Qe).get(rt.envMap||Lt),ee=rt.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,Jt=!!at.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),qt=!!at.morphAttributes.position,me=!!at.morphAttributes.normal,Ne=!!at.morphAttributes.color;let je=vr;rt.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(je=D.toneMapping);const Ee=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,Te=Ee!==void 0?Ee.length:0,$t=jt.get(rt),en=y.state.lights;if(mt===!0&&(St===!0||R!==C)){const Mn=R===C&&rt.id===w;Ht.setState(rt,R,Mn)}let Ae=!1;rt.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==en.state.version||$t.outputColorSpace!==zt||j.isBatchedMesh&&$t.batching===!1||!j.isBatchedMesh&&$t.batching===!0||j.isBatchedMesh&&$t.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&$t.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&$t.instancing===!1||!j.isInstancedMesh&&$t.instancing===!0||j.isSkinnedMesh&&$t.skinning===!1||!j.isSkinnedMesh&&$t.skinning===!0||j.isInstancedMesh&&$t.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&$t.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&$t.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&$t.instancingMorph===!1&&j.morphTexture!==null||$t.envMap!==Ft||rt.fog===!0&&$t.fog!==bt||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==Ht.numPlanes||$t.numIntersection!==Ht.numIntersection)||$t.vertexAlphas!==ee||$t.vertexTangents!==Jt||$t.morphTargets!==qt||$t.morphNormals!==me||$t.morphColors!==Ne||$t.toneMapping!==je||$t.morphTargetsCount!==Te)&&(Ae=!0):(Ae=!0,$t.__version=rt.version);let Ln=$t.currentProgram;Ae===!0&&(Ln=Da(rt,Y,j));let La=!1,Ze=!1,Ji=!1;const qe=Ln.getUniforms(),Nn=$t.uniforms;if(Gt.useProgram(Ln.program)&&(La=!0,Ze=!0,Ji=!0),rt.id!==w&&(w=rt.id,Ze=!0),La||C!==R){Gt.buffers.depth.getReversed()?(Rt.copy(R.projectionMatrix),nb(Rt),ib(Rt),qe.setValue(P,"projectionMatrix",Rt)):qe.setValue(P,"projectionMatrix",R.projectionMatrix),qe.setValue(P,"viewMatrix",R.matrixWorldInverse);const Cn=qe.map.cameraPosition;Cn!==void 0&&Cn.setValue(P,se.setFromMatrixPosition(R.matrixWorld)),ue.logarithmicDepthBuffer&&qe.setValue(P,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&qe.setValue(P,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,Ze=!0,Ji=!0)}if(j.isSkinnedMesh){qe.setOptional(P,j,"bindMatrix"),qe.setOptional(P,j,"bindMatrixInverse");const Mn=j.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),qe.setValue(P,"boneTexture",Mn.boneTexture,ae))}j.isBatchedMesh&&(qe.setOptional(P,j,"batchingTexture"),qe.setValue(P,"batchingTexture",j._matricesTexture,ae),qe.setOptional(P,j,"batchingIdTexture"),qe.setValue(P,"batchingIdTexture",j._indirectTexture,ae),qe.setOptional(P,j,"batchingColorTexture"),j._colorsTexture!==null&&qe.setValue(P,"batchingColorTexture",j._colorsTexture,ae));const mn=at.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&It.update(j,at,Ln),(Ze||$t.receiveShadow!==j.receiveShadow)&&($t.receiveShadow=j.receiveShadow,qe.setValue(P,"receiveShadow",j.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(Nn.envMap.value=Ft,Nn.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&Y.environment!==null&&(Nn.envMapIntensity.value=Y.environmentIntensity),Ze&&(qe.setValue(P,"toneMappingExposure",D.toneMappingExposure),$t.needsLights&&Ua(Nn,Ji),bt&&rt.fog===!0&&lt.refreshFogUniforms(Nn,bt),lt.refreshMaterialUniforms(Nn,rt,q,Z,y.state.transmissionRenderTarget[R.id]),Bc.upload(P,Zi($t),Nn,ae)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Bc.upload(P,Zi($t),Nn,ae),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&qe.setValue(P,"center",j.center),qe.setValue(P,"modelViewMatrix",j.modelViewMatrix),qe.setValue(P,"normalMatrix",j.normalMatrix),qe.setValue(P,"modelMatrix",j.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const Mn=rt.uniformsGroups;for(let Cn=0,zi=Mn.length;Cn<zi;Cn++){const $i=Mn[Cn];k.update($i,Ln),k.bind($i,Ln)}}return Ln}function Ua(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function un(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(R,Y,at){const rt=jt.get(R);rt.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),jt.get(R.texture).__webglTexture=Y,jt.get(R.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:at,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const at=jt.get(R);at.__webglFramebuffer=Y,at.__useDefaultFramebuffer=Y===void 0};const Kl=P.createFramebuffer();this.setRenderTarget=function(R,Y=0,at=0){X=R,B=Y,H=at;let rt=!0,j=null,bt=!1,Lt=!1;if(R){const Ft=jt.get(R);if(Ft.__useDefaultFramebuffer!==void 0)Gt.bindFramebuffer(P.FRAMEBUFFER,null),rt=!1;else if(Ft.__webglFramebuffer===void 0)ae.setupRenderTarget(R);else if(Ft.__hasExternalTextures)ae.rebindTextures(R,jt.get(R.texture).__webglTexture,jt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const qt=R.depthTexture;if(Ft.__boundDepthTexture!==qt){if(qt!==null&&jt.has(qt)&&(R.width!==qt.image.width||R.height!==qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(R)}}const ee=R.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(Lt=!0);const Jt=jt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Jt[Y])?j=Jt[Y][at]:j=Jt[Y],bt=!0):R.samples>0&&ae.useMultisampledRTT(R)===!1?j=jt.get(R).__webglMultisampledFramebuffer:Array.isArray(Jt)?j=Jt[at]:j=Jt,G.copy(R.viewport),ot.copy(R.scissor),st=R.scissorTest}else G.copy(J).multiplyScalar(q).floor(),ot.copy(yt).multiplyScalar(q).floor(),st=xt;if(at!==0&&(j=Kl),Gt.bindFramebuffer(P.FRAMEBUFFER,j)&&rt&&Gt.drawBuffers(R,j),Gt.viewport(G),Gt.scissor(ot),Gt.setScissorTest(st),bt){const Ft=jt.get(R.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ft.__webglTexture,at)}else if(Lt){const Ft=jt.get(R.texture),ee=Y;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ft.__webglTexture,at,ee)}else if(R!==null&&at!==0){const Ft=jt.get(R.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ft.__webglTexture,at)}w=-1},this.readRenderTargetPixels=function(R,Y,at,rt,j,bt,Lt,zt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=jt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ft=Ft[Lt]),Ft){Gt.bindFramebuffer(P.FRAMEBUFFER,Ft);try{const ee=R.textures[zt],Jt=ee.format,qt=ee.type;if(!ue.textureFormatReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ue.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-rt&&at>=0&&at<=R.height-j&&(R.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+zt),P.readPixels(Y,at,rt,j,Dt.convert(Jt),Dt.convert(qt),bt))}finally{const ee=X!==null?jt.get(X).__webglFramebuffer:null;Gt.bindFramebuffer(P.FRAMEBUFFER,ee)}}},this.readRenderTargetPixelsAsync=async function(R,Y,at,rt,j,bt,Lt,zt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=jt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ft=Ft[Lt]),Ft)if(Y>=0&&Y<=R.width-rt&&at>=0&&at<=R.height-j){Gt.bindFramebuffer(P.FRAMEBUFFER,Ft);const ee=R.textures[zt],Jt=ee.format,qt=ee.type;if(!ue.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ue.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const me=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,me),P.bufferData(P.PIXEL_PACK_BUFFER,bt.byteLength,P.STREAM_READ),R.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+zt),P.readPixels(Y,at,rt,j,Dt.convert(Jt),Dt.convert(qt),0);const Ne=X!==null?jt.get(X).__webglFramebuffer:null;Gt.bindFramebuffer(P.FRAMEBUFFER,Ne);const je=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await eb(P,je,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,me),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,bt),P.deleteBuffer(me),P.deleteSync(je),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,at=0){const rt=Math.pow(2,-at),j=Math.floor(R.image.width*rt),bt=Math.floor(R.image.height*rt),Lt=Y!==null?Y.x:0,zt=Y!==null?Y.y:0;ae.setTexture2D(R,0),P.copyTexSubImage2D(P.TEXTURE_2D,at,0,0,Lt,zt,j,bt),Gt.unbindTexture()};const Ql=P.createFramebuffer(),Qi=P.createFramebuffer();this.copyTextureToTexture=function(R,Y,at=null,rt=null,j=0,bt=null){bt===null&&(j!==0?(oo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),bt=j,j=0):bt=0);let Lt,zt,Ft,ee,Jt,qt,me,Ne,je;const Ee=R.isCompressedTexture?R.mipmaps[bt]:R.image;if(at!==null)Lt=at.max.x-at.min.x,zt=at.max.y-at.min.y,Ft=at.isBox3?at.max.z-at.min.z:1,ee=at.min.x,Jt=at.min.y,qt=at.isBox3?at.min.z:0;else{const mn=Math.pow(2,-j);Lt=Math.floor(Ee.width*mn),zt=Math.floor(Ee.height*mn),R.isDataArrayTexture?Ft=Ee.depth:R.isData3DTexture?Ft=Math.floor(Ee.depth*mn):Ft=1,ee=0,Jt=0,qt=0}rt!==null?(me=rt.x,Ne=rt.y,je=rt.z):(me=0,Ne=0,je=0);const Te=Dt.convert(Y.format),$t=Dt.convert(Y.type);let en;Y.isData3DTexture?(ae.setTexture3D(Y,0),en=P.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(ae.setTexture2DArray(Y,0),en=P.TEXTURE_2D_ARRAY):(ae.setTexture2D(Y,0),en=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,Y.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,Y.unpackAlignment);const Ae=P.getParameter(P.UNPACK_ROW_LENGTH),Ln=P.getParameter(P.UNPACK_IMAGE_HEIGHT),La=P.getParameter(P.UNPACK_SKIP_PIXELS),Ze=P.getParameter(P.UNPACK_SKIP_ROWS),Ji=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ee.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ee.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ee),P.pixelStorei(P.UNPACK_SKIP_ROWS,Jt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,qt);const qe=R.isDataArrayTexture||R.isData3DTexture,Nn=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const mn=jt.get(R),Mn=jt.get(Y),Cn=jt.get(mn.__renderTarget),zi=jt.get(Mn.__renderTarget);Gt.bindFramebuffer(P.READ_FRAMEBUFFER,Cn.__webglFramebuffer),Gt.bindFramebuffer(P.DRAW_FRAMEBUFFER,zi.__webglFramebuffer);for(let $i=0;$i<Ft;$i++)qe&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,jt.get(R).__webglTexture,j,qt+$i),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,jt.get(Y).__webglTexture,bt,je+$i)),P.blitFramebuffer(ee,Jt,Lt,zt,me,Ne,Lt,zt,P.DEPTH_BUFFER_BIT,P.NEAREST);Gt.bindFramebuffer(P.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(j!==0||R.isRenderTargetTexture||jt.has(R)){const mn=jt.get(R),Mn=jt.get(Y);Gt.bindFramebuffer(P.READ_FRAMEBUFFER,Ql),Gt.bindFramebuffer(P.DRAW_FRAMEBUFFER,Qi);for(let Cn=0;Cn<Ft;Cn++)qe?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,mn.__webglTexture,j,qt+Cn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,mn.__webglTexture,j),Nn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Mn.__webglTexture,bt,je+Cn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Mn.__webglTexture,bt),j!==0?P.blitFramebuffer(ee,Jt,Lt,zt,me,Ne,Lt,zt,P.COLOR_BUFFER_BIT,P.NEAREST):Nn?P.copyTexSubImage3D(en,bt,me,Ne,je+Cn,ee,Jt,Lt,zt):P.copyTexSubImage2D(en,bt,me,Ne,ee,Jt,Lt,zt);Gt.bindFramebuffer(P.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Nn?R.isDataTexture||R.isData3DTexture?P.texSubImage3D(en,bt,me,Ne,je,Lt,zt,Ft,Te,$t,Ee.data):Y.isCompressedArrayTexture?P.compressedTexSubImage3D(en,bt,me,Ne,je,Lt,zt,Ft,Te,Ee.data):P.texSubImage3D(en,bt,me,Ne,je,Lt,zt,Ft,Te,$t,Ee):R.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,bt,me,Ne,Lt,zt,Te,$t,Ee.data):R.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,bt,me,Ne,Ee.width,Ee.height,Te,Ee.data):P.texSubImage2D(P.TEXTURE_2D,bt,me,Ne,Lt,zt,Te,$t,Ee);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ae),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ln),P.pixelStorei(P.UNPACK_SKIP_PIXELS,La),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ze),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ji),bt===0&&Y.generateMipmaps&&P.generateMipmap(en),Gt.unbindTexture()},this.copyTextureToTexture3D=function(R,Y,at=null,rt=null,j=0){return oo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,Y,at,rt,j)},this.initRenderTarget=function(R){jt.get(R).__webglFramebuffer===void 0&&ae.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ae.setTextureCube(R,0):R.isData3DTexture?ae.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ae.setTexture2DArray(R,0):ae.setTexture2D(R,0),Gt.unbindTexture()},this.resetState=function(){B=0,H=0,X=null,Gt.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ta}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=De._getDrawingBufferColorSpace(t),n.unpackColorSpace=De._getUnpackColorSpace()}}const ny={type:"change"},em={type:"start"},cx={type:"end"},Lc=new Qc,iy=new lr,Tw=Math.cos(70*Cl.DEG2RAD),vn=new tt,Jn=2*Math.PI,Xe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Gd=1e-6;class bw extends Hb{constructor(t,n=null){super(t,n),this.state=Xe.NONE,this.target=new tt,this.cursor=new tt,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ro.ROTATE,MIDDLE:ro.DOLLY,RIGHT:ro.PAN},this.touches={ONE:io.ROTATE,TWO:io.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new tt,this._lastQuaternion=new is,this._lastTargetPosition=new tt,this._quat=new is().setFromUnitVectors(t.up,new tt(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new D0,this._sphericalDelta=new D0,this._scale=1,this._panOffset=new tt,this._rotateStart=new le,this._rotateEnd=new le,this._rotateDelta=new le,this._panStart=new le,this._panEnd=new le,this._panDelta=new le,this._dollyStart=new le,this._dollyEnd=new le,this._dollyDelta=new le,this._dollyDirection=new tt,this._mouse=new le,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Rw.bind(this),this._onPointerDown=Aw.bind(this),this._onPointerUp=Cw.bind(this),this._onContextMenu=Pw.bind(this),this._onMouseWheel=Uw.bind(this),this._onKeyDown=Lw.bind(this),this._onTouchStart=Nw.bind(this),this._onTouchMove=Ow.bind(this),this._onMouseDown=ww.bind(this),this._onMouseMove=Dw.bind(this),this._interceptControlDown=zw.bind(this),this._interceptControlUp=Iw.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ny),this.update(),this.state=Xe.NONE}update(t=null){const n=this.object.position;vn.copy(n).sub(this.target),vn.applyQuaternion(this._quat),this._spherical.setFromVector3(vn),this.autoRotate&&this.state===Xe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let a=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(a)&&isFinite(l)&&(a<-Math.PI?a+=Jn:a>Math.PI&&(a-=Jn),l<-Math.PI?l+=Jn:l>Math.PI&&(l-=Jn),a<=l?this._spherical.theta=Math.max(a,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(a+l)/2?Math.max(a,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let u=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),u=f!=this._spherical.radius}if(vn.setFromSpherical(this._spherical),vn.applyQuaternion(this._quatInverse),n.copy(this.target).add(vn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const d=vn.length();f=this._clampDistance(d*this._scale);const p=d-f;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),u=!!p}else if(this.object.isOrthographicCamera){const d=new tt(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),u=p!==this.object.zoom;const m=new tt(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(d),this.object.updateMatrixWorld(),f=vn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(Lc.origin.copy(this.object.position),Lc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Lc.direction))<Tw?this.object.lookAt(this.target):(iy.setFromNormalAndCoplanarPoint(this.object.up,this.target),Lc.intersectPlane(iy,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),u=!0)}return this._scale=1,this._performCursorZoom=!1,u||this._lastPosition.distanceToSquared(this.object.position)>Gd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Gd||this._lastTargetPosition.distanceToSquared(this.target)>Gd?(this.dispatchEvent(ny),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Jn/60*this.autoRotateSpeed*t:Jn/60/60*this.autoRotateSpeed}_getZoomScale(t){const n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){vn.setFromMatrixColumn(n,0),vn.multiplyScalar(-t),this._panOffset.add(vn)}_panUp(t,n){this.screenSpacePanning===!0?vn.setFromMatrixColumn(n,1):(vn.setFromMatrixColumn(n,0),vn.crossVectors(this.object.up,vn)),vn.multiplyScalar(t),this._panOffset.add(vn)}_pan(t,n){const a=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;vn.copy(l).sub(this.target);let u=vn.length();u*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*u/a.clientHeight,this.object.matrix),this._panUp(2*n*u/a.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/a.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/a.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const a=this.domElement.getBoundingClientRect(),l=t-a.left,u=n-a.top,f=a.width,d=a.height;this._mouse.x=l/f*2-1,this._mouse.y=-(u/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Jn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Jn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),l=.5*(t.pageY+n.y);this._rotateStart.set(a,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),l=.5*(t.pageY+n.y);this._panStart.set(a,l)}}_handleTouchStartDolly(t){const n=this._getSecondPointerPosition(t),a=t.pageX-n.x,l=t.pageY-n.y,u=Math.sqrt(a*a+l*l);this._dollyStart.set(0,u)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const a=this._getSecondPointerPosition(t),l=.5*(t.pageX+a.x),u=.5*(t.pageY+a.y);this._rotateEnd.set(l,u)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Jn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Jn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),l=.5*(t.pageY+n.y);this._panEnd.set(a,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const n=this._getSecondPointerPosition(t),a=t.pageX-n.x,l=t.pageY-n.y,u=Math.sqrt(a*a+l*l);this._dollyEnd.set(0,u),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+n.x)*.5,d=(t.pageY+n.y)*.5;this._updateZoomParameters(f,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new le,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){const n=t.deltaMode,a={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:a.deltaY*=16;break;case 2:a.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(a.deltaY*=10),a}}function Aw(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function Rw(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function Cw(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(cx),this.state=Xe.NONE;break;case 1:const t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function ww(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ro.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Xe.DOLLY;break;case ro.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Xe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Xe.ROTATE}break;case ro.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Xe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Xe.PAN}break;default:this.state=Xe.NONE}this.state!==Xe.NONE&&this.dispatchEvent(em)}function Dw(r){switch(this.state){case Xe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Xe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Xe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function Uw(r){this.enabled===!1||this.enableZoom===!1||this.state!==Xe.NONE||(r.preventDefault(),this.dispatchEvent(em),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(cx))}function Lw(r){this.enabled!==!1&&this._handleKeyDown(r)}function Nw(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case io.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Xe.TOUCH_ROTATE;break;case io.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Xe.TOUCH_PAN;break;default:this.state=Xe.NONE}break;case 2:switch(this.touches.TWO){case io.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Xe.TOUCH_DOLLY_PAN;break;case io.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Xe.TOUCH_DOLLY_ROTATE;break;default:this.state=Xe.NONE}break;default:this.state=Xe.NONE}this.state!==Xe.NONE&&this.dispatchEvent(em)}function Ow(r){switch(this._trackPointer(r),this.state){case Xe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Xe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Xe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Xe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Xe.NONE}}function Pw(r){this.enabled!==!1&&r.preventDefault()}function zw(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Iw(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Bw(r,t){const n=r/180*Math.PI,a=t/180*Math.PI,l=Math.cos(a)*Math.cos(n),u=Math.cos(a)*Math.sin(n),f=Math.sin(a);return[l,u,f]}function Fw({x:r,y:t,name:n,mass:a}){return Xt.jsxs("div",{style:{position:"fixed",pointerEvents:"none",top:t+10,left:r+10},className:"bg-black/80 text-star text-sm px-2 py-1 rounded",children:[n,a]})}function Hw({planet:r,onClose:t}){var n;return Xt.jsx("div",{className:"fixed inset-0 bg-black/70 flex items-center justify-center",children:Xt.jsxs("div",{className:"bg-midnight text-star p-6 rounded-lg max-w-sm w-full space-y-4",children:[Xt.jsx("button",{onClick:t,className:"text-red-400 float-right",children:"✕"}),Xt.jsx("h2",{className:"text-2xl font-bold",children:r.hostname}),Xt.jsxs("p",{children:["Distance: ",((n=r.pl_masse)==null?void 0:n.toFixed(1))??"?"," ly"]}),Xt.jsxs("p",{children:["Method: ",r.disc_year]})]})})}function Gw(){var D,F;const[r,t]=wt.useState([]),[n,a]=wt.useState(!0),[l,u]=wt.useState(null),[f,d]=wt.useState(null),[p,m]=wt.useState({x:0,y:0}),[g,_]=wt.useState(!0),v=wt.useRef(null),M=wt.useRef(void 0),E=wt.useRef(void 0),b=wt.useRef(void 0),x=wt.useRef(void 0),y=wt.useRef(null),N=wt.useRef(new le),U=wt.useRef(new Fb);return wt.useEffect(()=>{fetch("/exoplanets.json").then(B=>B.json()).then(B=>{t(B),a(!1)}).catch(console.error)},[]),wt.useEffect(()=>{const B=new Audio("/cinematic-ambient-interstellar-music-153570.mp3");return B.loop=!0,B.volume=.3,B.play().catch(()=>{}),y.current=B,()=>{B.pause(),B.currentTime=0}},[]),wt.useEffect(()=>{if(!v.current||n)return;v.current.innerHTML="";const B=v.current.clientWidth,H=v.current.clientHeight,X=new Cb,w=new wl;X.add(w),E.current=w,X.background=new Ue(724759);const C=new xi(75,B/H,.1,1e7);x.current=C;const G=new Ew({antialias:!0});G.setSize(B,H),v.current.appendChild(G.domElement);const ot=new bw(C,G.domElement);ot.enablePan=!0,ot.enableZoom=!0;const st=r.map(P=>P.sy_dist*3.26156),gt=Math.min(...st),ut=Math.max(...st),I=r.map(P=>P.sy_vmag),Z=Math.min(...I),q=Math.max(...I),Et=.15;C.position.z=ut*.8,C.far=ut*2,C.updateProjectionMatrix(),ot.maxDistance=ut*2;const L=1e4,J=new Float32Array(L*3);for(let P=0;P<L;P++){const We=Math.random(),fe=Math.random(),ue=2*Math.PI*We,Gt=Math.acos(2*fe-1);J[3*P]=ut*Math.sin(Gt)*Math.cos(ue),J[3*P+1]=ut*Math.sin(Gt)*Math.sin(ue),J[3*P+2]=ut*Math.cos(Gt)}const yt=new Pi;yt.setAttribute("position",new Mi(J,3));const xt=new ix({size:.5,color:2236962}),K=new Nb(yt,xt);w.add(K),K.userData.isStarfield=!0;const mt=new $p(ut*.005,16,16),St=new Jp({color:3368703}),Rt=new Yi(mt,St);w.add(Rt);const Ct=document.createElement("canvas");Ct.width=Ct.height=64;const se=Ct.getContext("2d");r.forEach((P,We)=>{const ue=(P.sy_dist*3.26156-gt)/(ut-gt),Gt=Math.pow(ue,Et)*ut,[xe,jt,ae]=Bw(P.ra,P.dec),Qe=(P.sy_vmag-Z)/(q-Z),O=Cl.lerp(1,.2,Qe),T=Cl.lerp(1,.3,Qe),et=new Ue().setHSL(.15,O,T),ft=P.pl_rade??1,ht=Cl.clamp((ft-.5)/(20-.5),0,1),lt=Cl.lerp(4,40,ht);se.clearRect(0,0,64,64),se.fillStyle=et.getStyle(),se.beginPath(),se.arc(32,32,31,0,2*Math.PI),se.fill();const Pt=new Ob(Ct),Ut=new tx({map:Pt,transparent:!0,depthWrite:!1}),Ht=new Db(Ut);Ht.scale.set(lt,lt,1),Ht.position.set(xe*Gt,jt*Gt,ae*Gt),Ht.userData.isStarfield=!1,Ht.userData.planetIndex=We,w.add(Ht),M.current=Ht});const Qt=P=>{const We=P.clientX/B*2-1,fe=-(P.clientY/H)*2+1;N.current.set(We,fe),m({x:P.clientX,y:P.clientY})};window.addEventListener("pointermove",Qt);const Le=P=>{U.current.setFromCamera(N.current,C);const We=U.current.intersectObjects(w.children,!0);if(We.length){const fe=We[0].object.userData.planetIndex;fe!==void 0&&(d(fe),ot.target.copy(We[0].object.position),ot.update())}};G.domElement.addEventListener("click",Le);const Pe=()=>{if(M.current){U.current.setFromCamera(N.current,C);const P=U.current.intersectObject(M.current);u(P.length?P[0].index:null)}requestAnimationFrame(Pe)};Pe();const _e=()=>{g&&(w.rotation.y+=5e-4),ot.update(),G.render(X,C),b.current=requestAnimationFrame(_e)};return _e(),()=>{G.domElement.removeEventListener("click",Le),cancelAnimationFrame(b.current),window.removeEventListener("pointermove",Qt),X.clear(),yt.dispose(),xt.dispose(),mt.dispose(),St.dispose(),Ct.remove()}},[r,n,g]),Xt.jsxs("div",{ref:v,className:"h-screen relative",children:[n&&Xt.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black",children:Xt.jsx("span",{className:"text-white text-xl",children:"Loading planets…"})}),Xt.jsx("button",{onClick:()=>_(B=>!B),className:"absolute top-2 left-2 z-10 bg-black/50 text-white p-2 rounded",children:g?"Stop Rotate":"Start Rotate"}),l!==null&&Xt.jsx(Fw,{x:p.x,y:p.y,name:(D=r[l])==null?void 0:D.pl_name,mass:(F=r[l])==null?void 0:F.pl_masse}),f!==null&&Xt.jsx(Hw,{planet:r[f],onClose:()=>d(null)})]})}function Vw(){const[r,t]=wt.useState([]),[n,a]=wt.useState(!0);if(wt.useEffect(()=>{fetch("/exoplanets.json").then(u=>u.json()).then(u=>{t(u),a(!1)}).catch(console.error)},[]),n)return Xt.jsx("div",{className:"flex items-center justify-center h-full",children:Xt.jsx("p",{className:"text-star text-lg",children:"Loading planets…"})});const l=({label:u,help:f})=>Xt.jsx("dt",{className:"font-medium",title:f,children:u});return Xt.jsxs("div",{className:"p-6",children:[Xt.jsx("h1",{className:"text-2xl font-bold text-white mb-4",children:"Exoplanet Catalog"}),Xt.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:r.map(u=>Xt.jsxs("div",{className:"bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all",children:[Xt.jsxs("div",{className:"flex justify-between items-center mb-4",children:[Xt.jsx("h2",{className:"text-xl font-semibold text-white",children:u.pl_name}),Xt.jsx("span",{className:"text-yellow-400 text-2xl",children:"⭐"})]}),Xt.jsxs("dl",{className:"grid grid-cols-2 gap-x-4 gap-y-2 text-gray-300 text-sm",children:[Xt.jsx(l,{label:"Host Star",help:"Name of the star this planet orbits."}),Xt.jsx("dd",{children:u.hostname}),Xt.jsx(l,{label:"Planet Letter",help:"Letter designation of the planet around its star."}),Xt.jsx("dd",{children:u.pl_letter}),Xt.jsx(l,{label:"Distance",help:"Distance to this planetary system in light years."}),Xt.jsx("dd",{children:u.sy_dist!=null?`${(u.sy_dist*3.26156).toFixed(1)} ly`:"—"}),Xt.jsx(l,{label:"Discovered",help:"Year this exoplanet was first discovered."}),Xt.jsx("dd",{children:u.disc_year}),Xt.jsx(l,{label:"Orbital Period",help:"Time planet takes to complete one orbit around its star (days)."}),Xt.jsx("dd",{children:u.pl_orbper!=null?`${u.pl_orbper.toFixed(2)} d`:"—"}),Xt.jsx(l,{label:"Radius",help:"Size of planet, in Earth radii (Earth = 1)."}),Xt.jsx("dd",{children:u.pl_rade!=null?`${u.pl_rade.toFixed(2)} R⊕`:"—"}),Xt.jsx(l,{label:"Mass (M·sin i)",help:"Planet mass (or M·sin i) in Earth masses (Earth = 1)."}),Xt.jsx("dd",{children:u.pl_bmasse!=null?`${u.pl_bmasse.toFixed(2)} M⊕`:"—"}),Xt.jsx(l,{label:"Density",help:"Mass per unit volume, in g/cm³ (Earth ≈ 5.5)."}),Xt.jsx("dd",{children:u.pl_dens!=null?`${u.pl_dens.toFixed(2)} g/cm³`:"—"}),Xt.jsx(l,{label:"Brightness (B/V)",help:"Johnson B and V magnitudes (lower = brighter)."}),Xt.jsx("dd",{children:u.sy_bmag!=null&&u.sy_vmag!=null&&`${u.sy_bmag.toFixed(2)}/${u.sy_vmag.toFixed(2)}`}),Xt.jsx(l,{label:"Coordinates (RA/Dec)",help:"Celestial longitude (RA) and latitude (Dec) in degrees."}),Xt.jsx("dd",{children:`${u.ra.toFixed(2)}°, ${u.dec.toFixed(2)}°`}),Xt.jsx(l,{label:"Galactic Lat/Lon",help:"Position relative to Milky Way plane in degrees."}),Xt.jsx("dd",{children:`${u.glat.toFixed(2)}°, ${u.glon.toFixed(2)}°`})]})]},u.pl_name))})]})}function kw(){return Xt.jsxs("div",{className:"min-h-screen flex flex-col",children:[Xt.jsxs("header",{className:"p-4 flex justify-between bg-midnight text-star",children:[Xt.jsx("h1",{className:"text-2xl font-bold",children:"Star"}),Xt.jsxs("nav",{className:"space-x-4",children:[Xt.jsx(Qv,{to:"/",children:"Sky"}),Xt.jsx(Qv,{to:"/list",children:"Exoplanets"})]})]}),Xt.jsx("main",{className:"flex-grow",children:Xt.jsxs(FE,{children:[Xt.jsx(Wd,{path:"/",element:Xt.jsx(Gw,{})}),Xt.jsx(Wd,{path:"list",element:Xt.jsx(Vw,{})})]})})]})}new YM;TM.createRoot(document.getElementById("root")).render(Xt.jsx(dy.StrictMode,{children:Xt.jsx(qE,{basename:"/exoplanets/",children:Xt.jsxs(Xt.Fragment,{children:[console.log("/exoplanets/"),Xt.jsx(kw,{})]})})}));
