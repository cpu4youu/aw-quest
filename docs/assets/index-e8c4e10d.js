import{s as i,g as F,S as $,T as I,a as P,Q as B,R as L,_ as H,b as G,h as j,j as e,aG as T}from"./index-508e1e45.js";import{c as O}from"./index-23caa6fc.js";import{b as Q}from"./index.esm-79d1de83.js";import{b as _,u as D}from"./index-fe6c3d52.js";import{m as p}from"./mcpFormatNumber-1b3dda04.js";import"./index-3203d926.js";import"./index-1bafec2e.js";import"./index-7e34d914.js";import"./index-072389ed.js";const Y=i("div",{d:"flex",align:"center",justify:"center",direction:"column",w:"100%","@sm":{padding:"0 15px"}}),N=i("div",{d:"flex",align:"center",justify:"center",w:"100%",maxW:"1250px",mx:"auto",my:"20px",svg:{cursor:"pointer",mr:"auto"}}),q=i("div",{d:"flex",align:"center",justify:"center",direction:"column",w:"100%",maxW:"1250px","@md":{d:"flex",flexWrap:"wrap"}}),z=i("h2",{color:"$white500",fs:"24px",ff:"$heading",mr:"auto"}),K=i("div",{d:"grid",gap:"5px",mt:"20px",w:"100%",maxW:"1250px"}),V=i("div",{d:"grid",gap:"5px",maxH:"555px",overflowY:"auto",w:"100%",maxW:"1250px"}),U=i("div",{d:"grid",gridTemplateColumns:"0.5fr repeat(4, 1fr) 3fr",gap:"10px",w:"100%",h:"37px",maxW:"1250px",bg:"rgba(0, 0, 0, 0.27)",px:"20px",span:{d:"flex",align:"center",justify:"flex-start",color:"#797979",fs:"16px",fw:"bold",ff:"$heading"},"@sm":{gridTemplateColumns:"0.5fr repeat(4, 1fr)",gap:"5x",pl:"10px",pr:"10px",span:{fs:"12px","&:last-child":{d:"none"}}}}),S=i("button",{d:"flex",align:"center",justify:"flex-start",color:"#797979",fs:"16px",fw:"bold",ff:"$heading","&:hover":{color:"$yellow500"},variants:{selected:{true:{color:"$yellow500"}}},"@sm":{fs:"12px","&:last-child":{d:"none"}}}),J=i("div",{d:"grid",alignItems:"center",justifyContent:"center",gridTemplateColumns:"0.5fr repeat(4, 1fr) 3fr",gap:"10px",minH:"55px",w:"100%",maxW:"1250px",bg:"rgba(72, 150, 222, 0.27)",pl:"20px",pr:"10px",mb:"15px",span:{d:"flex",align:"center",justify:"flex-start",color:"white",fs:"16px",fw:"bold",ff:"$heading"},"@sm":{h:"unset",gridTemplateColumns:"0.5fr repeat(4, 1fr)",gridTemplateRows:"0.8fr 2fr",gap:"5px",pl:"10px",pr:"10px",span:{fs:"12px"}}}),X=i("div",{d:"grid",gridTemplateColumns:"0.5fr repeat(4, 1fr) 3fr",gap:"10px",w:"100%",maxW:"1250px",bg:"rgba(0, 0, 0, 0.27)",pl:"20px",span:{d:"flex",align:"center",justify:"space-between",gap:"15px",color:"#797979",fs:"16px",fw:"bold",ff:"$heading",svg:{mr:"5px"}},"@sm":{h:"unset",gridTemplateColumns:"0.5fr repeat(4, 1fr)",gridTemplateRows:"0.8fr 2fr",gap:"5px",pl:"10px",pr:"10px",span:{fs:"12px"}}}),y=i("div",{d:"flex",flexWrap:"wrap",gap:"5px",py:"5px",">span":{d:"flex",gap:"5px"},"@sm":{gridColumnStart:1,gridColumnEnd:5,align:"center",justify:"center"}}),b=i("div",{d:"flex",align:"center",justify:"center",direction:"column",img:{objectFit:"cover",br:"10px",w:"37px",h:"37px"},span:{d:"flex",align:"center",justify:"flex-start",mt:"-10px",textShadow:"-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white",color:"black !important",fs:"16px",fw:"bold",ff:"$heading"}}),Z=async s=>await F({options:{code:$.GAME_MC,index_position:s,key_type:"i64",limit:"100",scope:$.GAME_MC,table:I.PLAYERS,reverse:!0}}),ee=s=>P({queryKey:[B.LeaderBoard,s],queryFn:()=>re(s),staleTime:1e3*60*60});async function re(s){try{const o=await Z(s);return o?ne(o):null}catch(o){return console.log(o),null}}async function ne(s){return s==null?void 0:s.map(o=>{var l,w,g;(l=o.buildings)==null||l.sort((n,h)=>_.findIndex(x=>x.label===n.buildingid)-_.findIndex(x=>x.label===h.buildingid));const c=(w=o.buildings)==null?void 0:w.filter(n=>n.building_type==="production"),d=(g=o.buildings)==null?void 0:g.filter(n=>n.building_type!=="production");return{...o,buildings:{production:c,special:d}}})}const se=L.lazy(()=>H(()=>import("./index-e376cc77.js"),["assets/index-e376cc77.js","assets/index-508e1e45.js","assets/index-55fec1ff.css","assets/info-builder-56a1192d.js"])),fe=()=>{var A,E,k,M,R;G(r=>r.user);const{data:s,isLoading:o}=D(),[c,d]=L.useState(3),{data:l,isLoading:w}=ee(c);function g(){O.setState(r=>({...r,selectedProduction:null}))}const n=j.useMemo(()=>{var f,u,t;if(!s)return;(f=s==null?void 0:s.buildings)==null||f.sort((m,W)=>_.findIndex(v=>v.label===m.buildingid)-_.findIndex(v=>v.label===W.buildingid));const r=(u=s.buildings)==null?void 0:u.filter(m=>m.building_type==="production"),a=(t=s.buildings)==null?void 0:t.filter(m=>m.building_type!=="production");return{...s,buildings:{production:r,special:a}}},[]),h=j.useMemo(()=>!l||!s?-1:l.findIndex(r=>r.wallet===s.wallet)+1,[l,s]),x=j.useCallback(r=>{if(r<3)return e.jsx(T,{color:"#FFAD0E"});if(r<10)return e.jsx(T,{color:"#9CBFCA"});if(r<75)return e.jsx(T,{color:"#B64C00"})},[]),C=j.useCallback(r=>{switch(r){case"mcp":d(2);break;case"score":d(3);break;case"rMin":d(4);break;default:d(3)}},[]);return e.jsxs(Y,{children:[e.jsx(se,{}),e.jsx(N,{children:e.jsx(Q,{onClick:g,color:"white",size:30})}),e.jsxs(q,{children:[e.jsx(z,{children:"SEASON LEADERBOARD"}),e.jsxs(K,{children:[e.jsxs(U,{children:[e.jsx("span",{children:"Rank"}),e.jsx("span",{children:"Gamertag"}),e.jsx(S,{selected:c===3,onClick:()=>C("score"),children:"Score🏆"}),e.jsx(S,{selected:c===4,onClick:()=>C("rMin"),children:"Я / min"}),e.jsx(S,{selected:c===2,onClick:()=>C("mcp"),children:"MCP earned"}),e.jsx("span",{children:"Buildings"})]}),e.jsxs(J,{children:[e.jsx("span",{children:h===0?"> 100":h}),e.jsx("span",{children:n==null?void 0:n.gamertag}),e.jsx("span",{children:p((n==null?void 0:n.score_building)||0,3)}),e.jsx("span",{children:p((n==null?void 0:n.gamecurrency_per_minute)||0,3)}),e.jsx("span",{children:p((n==null?void 0:n.score_mcp)||0,3)}),e.jsxs(y,{children:[(E=(A=n==null?void 0:n.buildings)==null?void 0:A.production)==null?void 0:E.map(r=>e.jsxs(b,{children:[e.jsx("img",{src:`/assets/mcp/${r==null?void 0:r.buildingid}.png`,alt:""}),e.jsx("span",{children:r.building_level===0?"-":r.building_level})]},r.buildingid)),e.jsx("span",{children:(M=(k=n==null?void 0:n.buildings)==null?void 0:k.special)==null?void 0:M.map(r=>e.jsxs(b,{children:[e.jsx("img",{src:`/assets/mcp/${r==null?void 0:r.buildingid}.png`,alt:""}),e.jsx("span",{children:r.building_level===0?"-":r.building_level})]},r.buildingid))})]})]}),e.jsx(V,{children:(R=l==null?void 0:l.sort((r,a)=>c!==3?0:a.score_building-r.score_building||a.gamecurrency_per_minute-r.gamecurrency_per_minute))==null?void 0:R.map((r,a)=>{var f,u;return e.jsxs(X,{children:[e.jsxs("span",{children:[a+1," ",c===3&&x(a)]}),e.jsx("span",{children:r.gamertag}),e.jsx("span",{children:p(r.score_building,3)}),e.jsx("span",{children:p((r==null?void 0:r.gamecurrency_per_minute)||0,3)}),e.jsx("span",{children:p((r==null?void 0:r.score_mcp)||0,3)}),e.jsxs(y,{children:[(f=r.buildings.production)==null?void 0:f.map(t=>e.jsxs(b,{children:[e.jsx("img",{src:`/assets/mcp/${t==null?void 0:t.buildingid}.png`,alt:""}),e.jsx("span",{children:t.building_level===0?"-":t.building_level})]},t.buildingid)),e.jsx("span",{children:(u=r.buildings.special)==null?void 0:u.map(t=>e.jsxs(b,{children:[e.jsx("img",{src:`/assets/mcp/${t==null?void 0:t.buildingid}.png`,alt:""}),e.jsx("span",{children:t.building_level===0?"-":t.building_level})]},t.buildingid))})]})]},r.wallet)})})]})]})]})};export{fe as default};
