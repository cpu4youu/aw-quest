import{f as t,ap as l,e as R,s as b,j as f}from"./index-eb91888a.js";import{a as A,c as v,p as w,$ as h,d as C,m as p,e as M,j,i as m,n as k}from"./index-e56dd575.js";import{b as T,h as N,$ as S,a as z}from"./Combination-01aec476.js";const E="Dialog",[y,be]=A(E),[L,d]=y(E),G=e=>{const{__scopeDialog:r,children:c,open:a,defaultOpen:n,onOpenChange:o,modal:s=!0}=e,i=t.useRef(null),u=t.useRef(null),[g=!1,x]=j({prop:a,defaultProp:n,onChange:o});return t.createElement(L,{scope:r,triggerRef:i,contentRef:u,contentId:m(),titleId:m(),descriptionId:m(),open:g,onOpenChange:x,onOpenToggle:t.useCallback(()=>x(F=>!F),[x]),modal:s},c)},B="DialogTrigger",U=t.forwardRef((e,r)=>{const{__scopeDialog:c,...a}=e,n=d(B,c),o=C(r,n.triggerRef);return t.createElement(h.button,l({type:"button","aria-haspopup":"dialog","aria-expanded":n.open,"aria-controls":n.contentId,"data-state":_(n.open)},a,{ref:o,onClick:p(e.onClick,n.onOpenToggle)}))}),O="DialogPortal",[H,I]=y(O,{forceMount:void 0}),K=e=>{const{__scopeDialog:r,forceMount:c,children:a,container:n}=e,o=d(O,r);return t.createElement(H,{scope:r,forceMount:c},t.Children.map(a,s=>t.createElement(v,{present:c||o.open},t.createElement(k,{asChild:!0,container:n},s))))},D="DialogOverlay",V=t.forwardRef((e,r)=>{const c=I(D,e.__scopeDialog),{forceMount:a=c.forceMount,...n}=e,o=d(D,e.__scopeDialog);return o.modal?t.createElement(v,{present:a||o.open},t.createElement(X,l({},n,{ref:r}))):null}),X=t.forwardRef((e,r)=>{const{__scopeDialog:c,...a}=e,n=d(D,c);return t.createElement(T,{as:w,allowPinchZoom:!0,shards:[n.contentRef]},t.createElement(h.div,l({"data-state":_(n.open)},a,{ref:r,style:{pointerEvents:"auto",...a.style}})))}),$="DialogContent",Y=t.forwardRef((e,r)=>{const c=I($,e.__scopeDialog),{forceMount:a=c.forceMount,...n}=e,o=d($,e.__scopeDialog);return t.createElement(v,{present:a||o.open},o.modal?t.createElement(Z,l({},n,{ref:r})):t.createElement(q,l({},n,{ref:r})))}),Z=t.forwardRef((e,r)=>{const c=d($,e.__scopeDialog),a=t.useRef(null),n=C(r,c.contentRef,a);return t.useEffect(()=>{const o=a.current;if(o)return N(o)},[]),t.createElement(P,l({},e,{ref:n,trapFocus:c.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:p(e.onCloseAutoFocus,o=>{var s;o.preventDefault(),(s=c.triggerRef.current)===null||s===void 0||s.focus()}),onPointerDownOutside:p(e.onPointerDownOutside,o=>{const s=o.detail.originalEvent,i=s.button===0&&s.ctrlKey===!0;(s.button===2||i)&&o.preventDefault()}),onFocusOutside:p(e.onFocusOutside,o=>o.preventDefault())}))}),q=t.forwardRef((e,r)=>{const c=d($,e.__scopeDialog),a=t.useRef(!1),n=t.useRef(!1);return t.createElement(P,l({},e,{ref:r,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:o=>{var s;if((s=e.onCloseAutoFocus)===null||s===void 0||s.call(e,o),!o.defaultPrevented){var i;a.current||(i=c.triggerRef.current)===null||i===void 0||i.focus(),o.preventDefault()}a.current=!1,n.current=!1},onInteractOutside:o=>{var s,i;(s=e.onInteractOutside)===null||s===void 0||s.call(e,o),o.defaultPrevented||(a.current=!0,o.detail.originalEvent.type==="pointerdown"&&(n.current=!0));const u=o.target;((i=c.triggerRef.current)===null||i===void 0?void 0:i.contains(u))&&o.preventDefault(),o.detail.originalEvent.type==="focusin"&&n.current&&o.preventDefault()}}))}),P=t.forwardRef((e,r)=>{const{__scopeDialog:c,trapFocus:a,onOpenAutoFocus:n,onCloseAutoFocus:o,...s}=e,i=d($,c),u=t.useRef(null),g=C(r,u);return S(),t.createElement(t.Fragment,null,t.createElement(z,{asChild:!0,loop:!0,trapped:a,onMountAutoFocus:n,onUnmountAutoFocus:o},t.createElement(M,l({role:"dialog",id:i.contentId,"aria-describedby":i.descriptionId,"aria-labelledby":i.titleId,"data-state":_(i.open)},s,{ref:g,onDismiss:()=>i.onOpenChange(!1)}))),!1)}),J="DialogClose",Q=t.forwardRef((e,r)=>{const{__scopeDialog:c,...a}=e,n=d(J,c);return t.createElement(h.button,l({type:"button"},a,{ref:r,onClick:p(e.onClick,()=>n.onOpenChange(!1))}))});function _(e){return e?"open":"closed"}const W=G,ee=U,te=K,oe=V,ne=Y,ce=Q,re=R({"0%":{opacity:0},"100%":{opacity:1}}),ae=R({"0%":{opacity:0,transform:"translate(-50%, -48%) scale(.96)"},"100%":{opacity:1,transform:"translate(-50%, -50%) scale(1)"}}),se=b(oe,{position:"fixed",inset:0,zIndex:90,backgroundColor:"rgba(0, 0, 0, 0.5)","@media (prefers-reduced-motion: no-preference)":{animation:`${re} 150ms cubic-bezier(0.16, 1, 0.3, 1)`}}),ie=b(ne,{display:"flex",alignItems:"center",justify:"center",flexDirection:"column",backgroundColor:"$white",position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",padding:"15px",borderRadius:18,zIndex:90,bg:"#05101E",border:"3px solid #00BAFF","@media (prefers-reduced-motion: no-preference)":{animation:`${ae} 150ms cubic-bezier(0.16, 1, 0.3, 1)`},"&:focus":{outline:"none"}}),le=b(ce,{all:"unset",borderRadius:"100%",display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"-15px",right:"-15px",zIndex:100,"&:hover":{cursor:"pointer"},variants:{position:{corner:{top:"-15px",right:"-15px"},inside:{top:"15px",right:"15px"}}}}),de=b("div",{all:"unset",fontFamily:"inherit",borderRadius:"100%",height:"25px",width:"25px",display:"flex",alignItems:"center",justifyContent:"center",color:"$white500",fw:"$bold","&:hover":{cursor:"pointer"}}),fe=b("div",{all:"unset",fontFamily:"inherit",borderRadius:"100%",height:"25px",width:"25px",display:"flex",alignItems:"center",justifyContent:"center","&:hover":{cursor:"pointer"}}),ge=({children:e,closePosition:r="corner",closeType:c="primary"})=>f.jsxs(te,{children:[f.jsx(se,{}),f.jsxs(ie,{children:[e,f.jsxs(le,{"aria-label":"Close",position:r,children:[c==="primary"&&f.jsx(de,{children:"X"}),c==="secondary"&&f.jsx(fe,{children:f.jsx("img",{src:"/assets/icons/gradient-close.png",alt:"close icon"})})]})]})]}),xe=W,me=ee;export{xe as D,me as a,ge as b};
