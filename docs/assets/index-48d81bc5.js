import{s as o,S as L,u as A,R as p,_ as E,aU as F,aS as R,b as M,j as t,B as _,aV as u,aN as m,aW as N,aM as V,k as I,aT as W,l as z}from"./index-d440dabc.js";import{a as H}from"./index.esm-742152ad.js";import{C as D}from"./check-0f060375.js";import{S as G}from"./index-2e8cf479.js";import"./index.esm-02c13ede.js";import"./index-0276742f.js";import"./index-660d587c.js";import"./index-9130a77a.js";import"./gradient-border-54de8113.js";const P=o("div",{d:"flex",align:"flex-start",justify:"center",direction:"column",mt:"35px",w:"100%",button:{w:"100%",h:"45px",fs:"16px",maxW:"230px",minW:"130px",minH:"unset",">div":{border:"none"}}}),Q=o("h2",{d:"flex",align:"center",justify:"center",mb:"15px",fs:"20px",color:"$white500"}),U=o("div",{d:"flex",align:"center",gap:"15px",w:"100%",mb:"15px"}),$=o("div",{d:"grid",gridTemplateColumns:"repeat(2, minmax(160px, 1fr))",gap:"15px",mt:"15px",w:"100%","@sm":{gridTemplateColumns:"repeat(1, minmax(160px, 1fr))",justify:"center"}}),q=o("div",{d:"flex",align:"center",justify:"center",gap:"25px",px:"5px","@sm":{mt:"5px",align:"flex-start",w:"100%",gap:"15px"},"@xsm":{gap:"5px",direction:"column",button:{mb:"3px",w:"100%",maxW:"100%",minW:"unset",minH:"unset"}}}),J=o("div",{d:"flex",align:"center",justify:"flex-start",position:"relative",input:{opacity:0,zIndex:1,w:"25px",h:"25px","& ~ div svg":{d:"none"}},"input:checked ~ div":{bg:"#333333",svg:{d:"flex"}},"@sm":{ml:"auto",img:{w:"55px"}}}),K=o("div",{d:"flex",align:"center",justify:"center",direction:"column",position:"absolute",top:"0px",left:"0px",w:"25px",h:"25px",bg:"#fff",border:"3px solid #5A5A5A",borderRadius:"6px",svg:{w:"15px",h:"15px",path:{fill:"white"}}}),X=o("div",{d:"flex",align:"center",justify:"flex-end",gap:"5px","@sm":{gap:"15px"}}),w=o("div",{d:"flex",align:"center",justify:"center",gap:"5px",textShadow:"2px 1px 4px rgba(0, 0, 0)",svg:{filter:"drop-shadow(3px 5px 2px rgb(0 0 0 / 0.6))",w:"20px",h:"20px"}}),j=o("p",{d:"flex",align:"center",justify:"center",w:"max-content",color:"$white500",textShadow:"2px 1px 4px rgba(0, 0, 0)",fs:"12px",ff:"$heading",fw:"400"});async function Y(s,i){const{executeTransaction:c}=A(),f=Z(s,i);return!!await c(f)}function Z(s,i){return{actions:[{account:L.TOOLS_MC,name:"settemplist",authorization:[{actor:s.name,permission:s.authorization.permission}],data:{wallet:s.name,temp_ids:i}}]}}const ee=p.lazy(()=>E(()=>import("./pickaxe-7e238cb1.js"),["assets/pickaxe-7e238cb1.js","assets/index-d440dabc.js","assets/index-55fec1ff.css"])),b=[{label:"Sort by rarity",value:"rarity"},{label:"Sort by name",value:"name"},{label:"Sort by shine",value:"shine"}],pe=()=>{var v,y,S;const{data:s}=F(),{data:i}=R(),c=M(e=>e.user),f=p.useCallback(()=>{var e,n;return(((e=i==null?void 0:i.tempid_allow_list)==null?void 0:e.length)||0)>0?(i==null?void 0:i.tempid_allow_list)??[]:((n=s==null?void 0:s.toolsOv)==null?void 0:n.filter(r=>{var a;return r.allowed===1&&!((a=i==null?void 0:i.tempid_allow_list)!=null&&a.some(g=>g===r.template_id))}).map(r=>r.template_id))??[]},[i,s]),[l,d]=p.useState(f()),[x,C]=p.useState(!1),[h,k]=p.useState({label:"Sort by rarity",value:"rarity"});async function T(){if(c){C(!0);try{await Y(c,l)&&(await I(2e3),W(),z.success("Config saved"))}catch(e){console.error("Error staking tool",e)}finally{C(!1)}}}function O(e,n){var a;const r=(a=e.target)==null?void 0:a.checked;d(r?[...l,n.template_id]:l.filter(g=>g!==n.template_id))}function B(){var e,n;if(((e=s==null?void 0:s.toolsOv)==null?void 0:e.length)===l.length)d([]);else{const r=((n=s==null?void 0:s.toolsOv)==null?void 0:n.map(a=>a.template_id))??[];d(r)}}return t.jsxs(P,{children:[t.jsx(Q,{children:"ENABLE OR DISABLE TOOLS FOR USE WITH THE MINE BUTTON"}),t.jsxs(U,{children:[t.jsx(_,{isLoading:x,disabled:x,onClick:T,rounded:!1,color:"solidBlue",children:"Save Config"}),t.jsx(_,{isLoading:x,disabled:x,onClick:B,rounded:!1,color:"solidBlue",children:"Check All"})]}),t.jsx(G,{title:"",selected:h,onSelected:e=>k(e||b[0]),options:b,borderColor1:"#FFB31F",borderColor2:"#FFB31F"}),t.jsx($,{children:(S=(y=(v=s==null?void 0:s.toolsOv)==null?void 0:v.filter(e=>e.allowed===1))==null?void 0:y.sort((e,n)=>h.value==="name"?e.tool_name.localeCompare(n.tool_name):h.value==="shine"?u[e.shine]-u[n.shine]||m[e.rarity]-m[n.rarity]:m[e.rarity]-m[n.rarity]||e.tool_name.localeCompare(n.tool_name)||u[e.shine]-u[n.shine]))==null?void 0:S.map((e,n)=>t.jsx(N,{showShine:!0,showNumberBracket:!0,direction:"row",tool:e,children:t.jsxs(q,{children:[t.jsxs(X,{children:[t.jsxs(w,{children:[t.jsx(ee,{}),t.jsx(j,{children:e.mining_power/10})]}),t.jsxs(w,{children:[t.jsx(V,{}),t.jsx(j,{children:e.nft_power/10})]}),t.jsxs(w,{children:[t.jsx(H,{color:"white"}),t.jsxs(j,{children:[e.cooldown_seconds," sec"]})]})]}),t.jsxs(J,{children:[t.jsx("input",{type:"checkbox",checked:l.some(r=>r===e.template_id),onChange:r=>O(r,e),required:!0}),t.jsx(K,{children:t.jsx(D,{})})]})]})},n))})]})};export{pe as default};
