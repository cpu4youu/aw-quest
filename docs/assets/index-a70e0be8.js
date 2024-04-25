import{s as r,e as w,a as T,Q as v,R as x,_ as f,f as c,j as s,m as _}from"./index-a6e28a92.js";import{g as S}from"./emporium-tasks-46365918.js";import{a as L}from"./index.esm-49f6a6b5.js";import{u as $,L as E}from"./index-c4c98250.js";import{A}from"./atom-5cf7955e.js";const P=r("div",{d:"flex",align:"center",justify:"center",direction:"column",w:"100%"}),F=r("div",{d:"flex",align:"center",justify:"center",direction:"column",position:"relative",h:"165px",w:"100%",zIndex:1,img:{zIndex:-1,position:"absolute",h:"165px",w:"100%",objectFit:"cover",inset:0},"@md":{h:"105px",img:{h:"105px"}},"@sm":{h:"65px",img:{h:"65px"}}}),C=r("h2",{d:"flex",align:"center",justify:"center",color:"$white500",fs:"40px",ff:"$heading",textShadow:"0px 4px 4px rgba(0, 0, 0, 0.8)",w:"100%","@sm":{fs:"24px"}}),D=r("div",{d:"flex",align:"center",justify:"center",direction:"column",w:"100%",maxW:"1095px","@md":{px:"30px"},"@sm":{px:"15px"}}),R=r("div",{d:"flex",align:"flex-start",justify:"center",direction:"column",gap:"10px",w:"100%",mt:"48px"}),l=r("h3",{d:"flex",align:"flex-start",justify:"flex-start",direction:"column",w:"100%",color:"$white500",fs:"32px","@sm":{fs:"24px"}}),z=r("div",{d:"flex",align:"center",justify:"center",direction:"column",mt:"18px",w:"100%"}),I=r("div",{d:"grid",gridTemplateColumns:"1fr 1fr 2fr 1fr 1fr",gap:"10px",w:"100%",h:"33px",mb:"5px",padding:"5px 0px 5px 10px",bg:"rgba(0,0,0,0.27)",span:{color:"#797979",ff:"$heading",fs:"18px",fw:"$bold"},"@sm":{gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr",gap:"5px",span:{textAlign:"center",fs:"13px"}}}),M=r("div",{d:"grid",gap:"5px",w:"100%","@sm":{gap:"5px"}}),V=r("div",{d:"flex",w:"100%",mt:"20px",h3:{align:"center"},"@sm":{gap:"5px"}}),W=r("div",{d:"grid",gridTemplateColumns:"1fr 1fr 2fr 1fr 1fr",position:"relative",gap:"10px",w:"100%",h:"55px",pl:"10px",bg:"rgba(0,0,0,0.27)",img:{w:"100px",h:"55px",objectFit:"contain"},span:{d:"flex",align:"center",gap:"5px","&:nth-child(3)":{justify:"center",gap:"10px"},color:"#797979",ff:"$heading",fs:"16px",fw:"$bold"},p:{d:"flex",w:"100%",color:"#797979",ff:"$heading",fs:"16px",fw:"$bold"},svg:{verticalAlign:"sub",path:{fill:"rgb(246, 168, 0)"}},"@sm":{gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr",gap:"5px",img:{w:"55px",h:"55px"},svg:{w:"15px",h:"15px"},span:{align:"center",justify:"center",fs:"12px",">p":{display:"none"}}}}),H=w({"0%":{backgroundPosition:"0% 0%"},"100%":{backgroundPosition:"-135% 0%"}}),Q=r("div",{d:"flex",w:"100%",maxW:"260px",h:"325px",background:"linear-gradient( -90deg, rgba(255,255,255, .05), rgba(255,255,255, 0.07) ,rgba(255,255,255, .05))",br:"10px",backgroundSize:"400% 400%",animation:`${H} 1.2s ease-in-out infinite`,"@sm":{h:"215px",w:"100%"}}),k=()=>T({queryKey:[v.DesativeTasks],queryFn:()=>G(),staleTime:1e3*60*60});async function G(){try{const i=await S("completed");return i||[]}catch(i){return console.log(i),[]}}const d=x.lazy(()=>f(()=>import("./tlm-101137f1.js"),["assets/tlm-101137f1.js","assets/index-a6e28a92.js","assets/index-55fec1ff.css"])),q=x.lazy(()=>f(()=>import("./star-ca68017d.js"),["assets/star-ca68017d.js","assets/index-a6e28a92.js","assets/index-55fec1ff.css"])),Z=()=>{var o;const{data:i,isLoading:m}=k(),u=$(e=>e.onChangePage),[p,g]=c.useState([]),h=c.useCallback(()=>{u("main")},[]),j=c.useCallback(e=>{switch(e){case"qp":return s.jsx(_,{});case"mcp":return s.jsx(q,{});case"tlm":return s.jsx(d,{});default:return s.jsx(d,{})}},[]),y=e=>{const t=+new Date(new Date().toUTCString().substring(0,25))-+e;let a={days:0,hours:0,minutes:0,seconds:0};return t>0&&(a={days:Math.floor(t/(1e3*60*60)/24),hours:Math.floor(t/(1e3*60*60)%24),minutes:Math.floor(t/1e3/60%60),seconds:Math.floor(t/1e3%60)}),{...a,difference:t}},b=e=>{if(e){const n=e.days?`${e.days}d`:"",t=e.hours>0?`${e.hours>9?`${e.hours}h`:`0${e.hours}h`}`:"";return`${n}${t}${e.minutes}min`}return"less than 1 min"};return c.useEffect(()=>{if(i){const e=i.map(n=>{const t=y(new Date(n.timestamp_closed));return{...n,timeLeft:t,timeLeftFormatted:b(t)}});g(e)}},[i]),s.jsx(c.Suspense,{fallback:s.jsx(E,{}),children:s.jsxs(P,{children:[s.jsxs(F,{children:[s.jsx(C,{children:"Zapp’s Zap Emporium"}),s.jsx("img",{src:"/assets/background/bg-emporium.webp",alt:""})]}),s.jsxs(D,{children:[s.jsxs(R,{children:[s.jsx(L,{size:30,color:"#fff",onClick:h,style:{cursor:"pointer"}}),s.jsx(l,{children:"ZAPP’S TASK HISTORY"})]}),s.jsxs(z,{children:[s.jsxs(I,{children:[s.jsx("span",{children:"Time elapsed"}),s.jsx("span",{children:"Wallet"}),s.jsx("span",{children:"Task"}),s.jsx("span",{children:"Shards"}),s.jsx("span",{children:"Support"})]}),s.jsx(M,{children:m?Array.from({length:8}).map((e,n)=>s.jsx(Q,{},n)):p.length===0?s.jsx(V,{children:s.jsx(l,{children:"No task history founded"})}):(o=p==null?void 0:p.sort((e,n)=>{var t,a;return(((t=e.timeLeft)==null?void 0:t.difference)??0)-(((a=n.timeLeft)==null?void 0:a.difference)??0)}))==null?void 0:o.map(e=>s.jsxs(W,{children:[s.jsxs("span",{children:["~ ",e==null?void 0:e.timeLeftFormatted]}),s.jsx("span",{children:e==null?void 0:e.user}),s.jsxs("span",{children:[s.jsx("img",{src:`/assets/tasks/${e.image}.jpeg`,alt:e.title,title:e.title}),s.jsx("p",{children:e.title})]}),s.jsxs("span",{children:[e.shards/10," ",s.jsx(A,{})]}),s.jsxs("span",{children:[(e.task_type==="tlm"?Math.ceil(e.currency_end/1e4):e.currency_end).toLocaleString("en-US"),j(e.task_type)]})]},e.task_id))})]})]})]})})};export{Z as default};
