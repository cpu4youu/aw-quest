import{f as u,aj as me}from"./index-007aff47.js";import{g as G,b as pe,a as ge}from"./index-bc9f815f.js";let _=0;function it(){u.useEffect(()=>{var e,t;const n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",(e=n[0])!==null&&e!==void 0?e:z()),document.body.insertAdjacentElement("beforeend",(t=n[1])!==null&&t!==void 0?t:z()),_++,()=>{_===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(r=>r.remove()),_--}},[])}function z(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}const D="focusScope.autoFocusOnMount",U="focusScope.autoFocusOnUnmount",Z={bubbles:!1,cancelable:!0},lt=u.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:c,onUnmountAutoFocus:i,...l}=e,[o,S]=u.useState(null),b=G(c),g=G(i),f=u.useRef(null),d=pe(t,a=>S(a)),h=u.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;u.useEffect(()=>{if(r){let a=function(m){if(h.paused||!o)return;const p=m.target;o.contains(p)?f.current=p:C(f.current,{select:!0})},s=function(m){if(h.paused||!o)return;const p=m.relatedTarget;p!==null&&(o.contains(p)||C(f.current,{select:!0}))},v=function(m){if(document.activeElement===document.body)for(const y of m)y.removedNodes.length>0&&C(o)};document.addEventListener("focusin",a),document.addEventListener("focusout",s);const E=new MutationObserver(v);return o&&E.observe(o,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",a),document.removeEventListener("focusout",s),E.disconnect()}}},[r,o,h.paused]),u.useEffect(()=>{if(o){Q.add(h);const a=document.activeElement;if(!o.contains(a)){const v=new CustomEvent(D,Z);o.addEventListener(D,b),o.dispatchEvent(v),v.defaultPrevented||(be($e(oe(o)),{select:!0}),document.activeElement===a&&C(o))}return()=>{o.removeEventListener(D,b),setTimeout(()=>{const v=new CustomEvent(U,Z);o.addEventListener(U,g),o.dispatchEvent(v),v.defaultPrevented||C(a??document.body,{select:!0}),o.removeEventListener(U,g),Q.remove(h)},0)}}},[o,b,g,h]);const w=u.useCallback(a=>{if(!n&&!r||h.paused)return;const s=a.key==="Tab"&&!a.altKey&&!a.ctrlKey&&!a.metaKey,v=document.activeElement;if(s&&v){const E=a.currentTarget,[m,p]=ye(E);m&&p?!a.shiftKey&&v===p?(a.preventDefault(),n&&C(m,{select:!0})):a.shiftKey&&v===m&&(a.preventDefault(),n&&C(p,{select:!0})):v===E&&a.preventDefault()}},[n,r,h.paused]);return u.createElement(ge.div,me({tabIndex:-1},l,{ref:d,onKeyDown:w}))});function be(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(C(r,{select:t}),document.activeElement!==n)return}function ye(e){const t=oe(e),n=q(t,e),r=q(t.reverse(),e);return[n,r]}function oe(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const c=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||c?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function q(e,t){for(const n of e)if(!Ee(n,{upTo:t}))return n}function Ee(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function Se(e){return e instanceof HTMLInputElement&&"select"in e}function C(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&Se(e)&&t&&e.select()}}const Q=we();function we(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=J(e,t),e.unshift(t)},remove(t){var n;e=J(e,t),(n=e[0])===null||n===void 0||n.resume()}}}function J(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function $e(e){return e.filter(t=>t.tagName!=="A")}var Ce=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},k=new WeakMap,N=new WeakMap,F={},j=0,ce=function(e){return e&&(e.host||ce(e.parentNode))},ke=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=ce(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},Te=function(e,t,n,r){var c=ke(t,Array.isArray(e)?e:[e]);F[n]||(F[n]=new WeakMap);var i=F[n],l=[],o=new Set,S=new Set(c),b=function(f){!f||o.has(f)||(o.add(f),b(f.parentNode))};c.forEach(b);var g=function(f){!f||S.has(f)||Array.prototype.forEach.call(f.children,function(d){if(o.has(d))g(d);else{var h=d.getAttribute(r),w=h!==null&&h!=="false",a=(k.get(d)||0)+1,s=(i.get(d)||0)+1;k.set(d,a),i.set(d,s),l.push(d),a===1&&w&&N.set(d,!0),s===1&&d.setAttribute(n,"true"),w||d.setAttribute(r,"true")}})};return g(t),o.clear(),j++,function(){l.forEach(function(f){var d=k.get(f)-1,h=i.get(f)-1;k.set(f,d),i.set(f,h),d||(N.has(f)||f.removeAttribute(r),N.delete(f)),h||f.removeAttribute(n)}),j--,j||(k=new WeakMap,k=new WeakMap,N=new WeakMap,F={})}},st=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),c=t||Ce(e);return c?(r.push.apply(r,Array.from(c.querySelectorAll("[aria-live]"))),Te(r,c,n,"aria-hidden")):function(){return null}},$=function(){return $=Object.assign||function(t){for(var n,r=1,c=arguments.length;r<c;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},$.apply(this,arguments)};function ue(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,r=Object.getOwnPropertySymbols(e);c<r.length;c++)t.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(n[r[c]]=e[r[c]]);return n}function Ae(e,t,n){if(n||arguments.length===2)for(var r=0,c=t.length,i;r<c;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var M="right-scroll-bar-position",O="width-before-scroll-bar",Re="with-scroll-bars-hidden",xe="--removed-body-scroll-bar-size";function H(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function Ne(e,t){var n=u.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var c=n.value;c!==r&&(n.value=r,n.callback(r,c))}}}})[0];return n.callback=t,n.facade}var ee=new WeakMap;function Fe(e,t){var n=Ne(t||null,function(r){return e.forEach(function(c){return H(c,r)})});return u.useLayoutEffect(function(){var r=ee.get(n);if(r){var c=new Set(r),i=new Set(e),l=n.current;c.forEach(function(o){i.has(o)||H(o,null)}),i.forEach(function(o){c.has(o)||H(o,l)})}ee.set(n,e)},[e]),n}function Le(e){return e}function Pe(e,t){t===void 0&&(t=Le);var n=[],r=!1,c={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(i){var l=t(i,r);return n.push(l),function(){n=n.filter(function(o){return o!==l})}},assignSyncMedium:function(i){for(r=!0;n.length;){var l=n;n=[],l.forEach(i)}n={push:function(o){return i(o)},filter:function(){return n}}},assignMedium:function(i){r=!0;var l=[];if(n.length){var o=n;n=[],o.forEach(i),l=n}var S=function(){var g=l;l=[],g.forEach(i)},b=function(){return Promise.resolve().then(S)};b(),n={push:function(g){l.push(g),b()},filter:function(g){return l=l.filter(g),n}}}};return c}function Me(e){e===void 0&&(e={});var t=Pe(null);return t.options=$({async:!0,ssr:!1},e),t}var ie=function(e){var t=e.sideCar,n=ue(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return u.createElement(r,$({},n))};ie.isSideCarExport=!0;function Oe(e,t){return e.useMedium(t),ie}var le=Me(),K=function(){},W=u.forwardRef(function(e,t){var n=u.useRef(null),r=u.useState({onScrollCapture:K,onWheelCapture:K,onTouchMoveCapture:K}),c=r[0],i=r[1],l=e.forwardProps,o=e.children,S=e.className,b=e.removeScrollBar,g=e.enabled,f=e.shards,d=e.sideCar,h=e.noIsolation,w=e.inert,a=e.allowPinchZoom,s=e.as,v=s===void 0?"div":s,E=ue(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),m=d,p=Fe([n,t]),y=$($({},E),c);return u.createElement(u.Fragment,null,g&&u.createElement(m,{sideCar:le,removeScrollBar:b,shards:f,noIsolation:h,inert:w,setCallbacks:i,allowPinchZoom:!!a,lockRef:n}),l?u.cloneElement(u.Children.only(o),$($({},y),{ref:p})):u.createElement(v,$({},y,{className:S,ref:p}),o))});W.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};W.classNames={fullWidth:O,zeroRight:M};var te,Ie=function(){if(te)return te;if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function We(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=Ie();return t&&e.setAttribute("nonce",t),e}function Be(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function _e(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var De=function(){var e=0,t=null;return{add:function(n){e==0&&(t=We())&&(Be(t,n),_e(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},Ue=function(){var e=De();return function(t,n){u.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},se=function(){var e=Ue(),t=function(n){var r=n.styles,c=n.dynamic;return e(r,c),null};return t},je={left:0,top:0,right:0,gap:0},V=function(e){return parseInt(e||"",10)||0},He=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],c=t[e==="padding"?"paddingRight":"marginRight"];return[V(n),V(r),V(c)]},Ke=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return je;var t=He(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},Ve=se(),I="data-scroll-locked",Xe=function(e,t,n,r){var c=e.left,i=e.top,l=e.right,o=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(Re,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(o,"px ").concat(r,`;
  }
  body[`).concat(I,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(c,`px;
    padding-top: `).concat(i,`px;
    padding-right: `).concat(l,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(o,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(o,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(M,` {
    right: `).concat(o,"px ").concat(r,`;
  }
  
  .`).concat(O,` {
    margin-right: `).concat(o,"px ").concat(r,`;
  }
  
  .`).concat(M," .").concat(M,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(O," .").concat(O,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(I,`] {
    `).concat(xe,": ").concat(o,`px;
  }
`)},Ye=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,c=r===void 0?"margin":r,i=u.useMemo(function(){return Ke(c)},[c]);return u.useEffect(function(){return document.body.setAttribute(I,""),function(){document.body.removeAttribute(I)}},[]),u.createElement(Ve,{styles:Xe(i,!t,c,n?"":"!important")})},X=!1;if(typeof window<"u")try{var L=Object.defineProperty({},"passive",{get:function(){return X=!0,!0}});window.addEventListener("test",L,L),window.removeEventListener("test",L,L)}catch{X=!1}var T=X?{passive:!1}:!1,Ge=function(e){return e.tagName==="TEXTAREA"},fe=function(e,t){var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!Ge(e)&&n[t]==="visible")},ze=function(e){return fe(e,"overflowY")},Ze=function(e){return fe(e,"overflowX")},ne=function(e,t){var n=t;do{typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&(n=n.host);var r=de(e,n);if(r){var c=ve(e,n),i=c[1],l=c[2];if(i>l)return!0}n=n.parentNode}while(n&&n!==document.body);return!1},qe=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},Qe=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},de=function(e,t){return e==="v"?ze(t):Ze(t)},ve=function(e,t){return e==="v"?qe(t):Qe(t)},Je=function(e,t){return e==="h"&&t==="rtl"?-1:1},et=function(e,t,n,r,c){var i=Je(e,window.getComputedStyle(t).direction),l=i*r,o=n.target,S=t.contains(o),b=!1,g=l>0,f=0,d=0;do{var h=ve(e,o),w=h[0],a=h[1],s=h[2],v=a-s-i*w;(w||v)&&de(e,o)&&(f+=v,d+=w),o=o.parentNode}while(!S&&o!==document.body||S&&(t.contains(o)||t===o));return(g&&(c&&f===0||!c&&l>f)||!g&&(c&&d===0||!c&&-l>d))&&(b=!0),b},P=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},re=function(e){return[e.deltaX,e.deltaY]},ae=function(e){return e&&"current"in e?e.current:e},tt=function(e,t){return e[0]===t[0]&&e[1]===t[1]},nt=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},rt=0,A=[];function at(e){var t=u.useRef([]),n=u.useRef([0,0]),r=u.useRef(),c=u.useState(rt++)[0],i=u.useState(function(){return se()})[0],l=u.useRef(e);u.useEffect(function(){l.current=e},[e]),u.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(c));var a=Ae([e.lockRef.current],(e.shards||[]).map(ae),!0).filter(Boolean);return a.forEach(function(s){return s.classList.add("allow-interactivity-".concat(c))}),function(){document.body.classList.remove("block-interactivity-".concat(c)),a.forEach(function(s){return s.classList.remove("allow-interactivity-".concat(c))})}}},[e.inert,e.lockRef.current,e.shards]);var o=u.useCallback(function(a,s){if("touches"in a&&a.touches.length===2)return!l.current.allowPinchZoom;var v=P(a),E=n.current,m="deltaX"in a?a.deltaX:E[0]-v[0],p="deltaY"in a?a.deltaY:E[1]-v[1],y,B=a.target,R=Math.abs(m)>Math.abs(p)?"h":"v";if("touches"in a&&R==="h"&&B.type==="range")return!1;var x=ne(R,B);if(!x)return!0;if(x?y=R:(y=R==="v"?"h":"v",x=ne(R,B)),!x)return!1;if(!r.current&&"changedTouches"in a&&(m||p)&&(r.current=y),!y)return!0;var Y=r.current||y;return et(Y,s,a,Y==="h"?m:p,!0)},[]),S=u.useCallback(function(a){var s=a;if(!(!A.length||A[A.length-1]!==i)){var v="deltaY"in s?re(s):P(s),E=t.current.filter(function(y){return y.name===s.type&&y.target===s.target&&tt(y.delta,v)})[0];if(E&&E.should){s.cancelable&&s.preventDefault();return}if(!E){var m=(l.current.shards||[]).map(ae).filter(Boolean).filter(function(y){return y.contains(s.target)}),p=m.length>0?o(s,m[0]):!l.current.noIsolation;p&&s.cancelable&&s.preventDefault()}}},[]),b=u.useCallback(function(a,s,v,E){var m={name:a,delta:s,target:v,should:E};t.current.push(m),setTimeout(function(){t.current=t.current.filter(function(p){return p!==m})},1)},[]),g=u.useCallback(function(a){n.current=P(a),r.current=void 0},[]),f=u.useCallback(function(a){b(a.type,re(a),a.target,o(a,e.lockRef.current))},[]),d=u.useCallback(function(a){b(a.type,P(a),a.target,o(a,e.lockRef.current))},[]);u.useEffect(function(){return A.push(i),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:d}),document.addEventListener("wheel",S,T),document.addEventListener("touchmove",S,T),document.addEventListener("touchstart",g,T),function(){A=A.filter(function(a){return a!==i}),document.removeEventListener("wheel",S,T),document.removeEventListener("touchmove",S,T),document.removeEventListener("touchstart",g,T)}},[]);var h=e.removeScrollBar,w=e.inert;return u.createElement(u.Fragment,null,w?u.createElement(i,{styles:nt(c)}):null,h?u.createElement(Ye,{gapMode:"margin"}):null)}const ot=Oe(le,at);var he=u.forwardRef(function(e,t){return u.createElement(W,$({},e,{ref:t,sideCar:ot}))});he.classNames=W.classNames;const ft=he;export{it as $,lt as a,ft as b,st as h};
