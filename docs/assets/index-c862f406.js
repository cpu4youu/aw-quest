import{s as t,j as e,E as l,c as d,R as a,_ as o,h as r}from"./index-508e1e45.js";const x=t("div",{d:"flex",align:"center",justify:"flex-start",direction:"column",w:"100%",h:"calc(100vh - 165px)"}),p=t("div",{d:"flex",align:"center",justify:"center",direction:"column",position:"relative",h:"165px",w:"100%",zIndex:1,img:{zIndex:-1,position:"absolute",h:"165px",w:"100%",objectFit:"cover",inset:0}}),u=t("h2",{d:"flex",align:"center",justify:"center",color:"$white500",fs:"40px",ff:"$heading",textShadow:"0px 4px 4px rgba(0, 0, 0, 0.5)",w:"100%","@sm":{fs:"24px"}}),m=t("div",{d:"flex",align:"center",justify:"center",direction:"column",margin:"auto",w:"100%",maxW:"1190px","@md":{d:"flex",flexWrap:"wrap"}}),i=()=>e.jsxs(x,{children:[e.jsxs(p,{children:[e.jsx(u,{children:"Zapp’s Zap Emporium"}),e.jsx("img",{src:"/assets/background/bg-emporium.webp",alt:""})]}),e.jsx(m,{children:e.jsx(l,{size:"lg",colorSchema:"light"})})]}),g=d((s,n)=>({selectedPage:"main",onChangePage:c=>{s({selectedPage:c})}})),f=a.lazy(()=>o(()=>import("./index-86755ff8.js"),["assets/index-86755ff8.js","assets/index-508e1e45.js","assets/index-55fec1ff.css","assets/emporium-tasks-56ba477f.js","assets/index.esm-0df4c8c1.js"])),j=a.lazy(()=>o(()=>import("./index-d749d266.js"),["assets/index-d749d266.js","assets/index-508e1e45.js","assets/index-55fec1ff.css","assets/emporium-tasks-56ba477f.js","assets/index.esm-0df4c8c1.js","assets/index.esm-b39ee2a2.js","assets/index-3203d926.js","assets/index-1bafec2e.js","assets/index-7e34d914.js"])),h=()=>g(n=>n.selectedPage)==="history"?e.jsx(r.Suspense,{fallback:e.jsx(i,{}),children:e.jsx(f,{})}):e.jsx(r.Suspense,{fallback:e.jsx(i,{}),children:e.jsx(j,{})}),b=Object.freeze(Object.defineProperty({__proto__:null,default:h},Symbol.toStringTag,{value:"Module"}));export{i as L,b as i,g as u};
