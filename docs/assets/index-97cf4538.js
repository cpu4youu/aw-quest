import{s as n,R as e,_ as s,j as t,B as r}from"./index-16dc8d70.js";import{I as d}from"./info-builder-1b607b3c.js";const c=n("div",{d:"flex",align:"center",justify:"center",direction:"column",position:"relative",w:"100%"}),x=n("div",{d:"flex",align:"center",justify:"center",direction:"column",position:"relative",h:"165px",w:"100%",zIndex:1,img:{zIndex:-1,position:"absolute",h:"165px",w:"100%",objectFit:"cover",inset:0}}),p=n("h2",{d:"flex",align:"center",justify:"center",gap:"10px",color:"$white500",fs:"40px",ff:"$heading",textShadow:"0px 4px 4px rgba(0, 0, 0, 0.5)",w:"100%","@sm":{fs:"24px"}}),u=n("a",{d:"flex",align:"center",justify:"center",color:"$white500",svg:{mt:"10px",w:"40px",h:"40px"},"@sm":{svg:{mt:"5px",w:"30px",h:"30px"}}}),h=n("div",{d:"flex",align:"center",justify:"center",direction:"column",w:"100%",maxW:"1275px",mt:"20px",gap:"4px","@md":{mb:"10px"},"@sm":{mt:"0px",pt:"40px",px:"10px",justify:"flex-start",overflow:"auto",direction:"column"}}),m=n("div",{d:"flex",align:"center",justify:"flex-start",padding:"3px 3px 10px",overflowX:"auto",overflowY:"hidden",gap:"4px",w:"100%",button:{w:"100%",maxW:"150px",minW:"150px",h:"75px",fs:"20px"},variants:{activeButton:{mine:{"button:nth-child(1)":{border:"2px solid $white500"}},"mine-config":{"button:nth-child(2)":{border:"2px solid $white500"}},deposit:{"button:nth-child(3)":{border:"2px solid $white500"}},stake:{"button:nth-child(4)":{border:"2px solid $white500"}},unstake:{"button:nth-child(5)":{border:"2px solid $white500"}},tutorial:{"button:nth-child(6)":{border:"2px solid $white500"}}}}}),a=e.lazy(()=>s(()=>import("./index-16dc8d70.js").then(o=>o.aV),["assets/index-16dc8d70.js","assets/index-55fec1ff.css"])),f=e.lazy(()=>s(()=>import("./index-e8e11703.js"),["assets/index-e8e11703.js","assets/index-16dc8d70.js","assets/index-55fec1ff.css","assets/index.esm-a8d32040.js","assets/info-builder-1b607b3c.js"])),g=e.lazy(()=>s(()=>import("./index-1ab832ff.js"),["assets/index-1ab832ff.js","assets/index-16dc8d70.js","assets/index-55fec1ff.css","assets/index.esm-fd450f83.js","assets/inventory-query-284a4d6e.js"])),j=e.lazy(()=>s(()=>import("./index-8c55360b.js"),["assets/index-8c55360b.js","assets/index-16dc8d70.js","assets/index-55fec1ff.css","assets/inventory-query-284a4d6e.js"])),_=e.lazy(()=>s(()=>import("./index-e9112c5f.js"),["assets/index-e9112c5f.js","assets/index-16dc8d70.js","assets/index-55fec1ff.css","assets/index.esm-0368d095.js","assets/check-0cb804a5.js","assets/index-30a49241.js","assets/index.esm-db82f281.js","assets/index-8bfc2aae.js","assets/index-5b9e3a71.js","assets/index-7505f97e.js","assets/gradient-border-0cda9d4d.js"])),b=()=>{const[o,i]=e.useState("mine"),l=e.useMemo(()=>{switch(o){case"mine":return t.jsx(a,{});case"mine-config":return t.jsx(_,{});case"stake":return t.jsx(g,{});case"unstake":return t.jsx(j,{});case"deposit":return t.jsx(f,{});case"tutorial":return t.jsx(a,{});default:return t.jsx(a,{})}},[o]);return t.jsxs(c,{children:[t.jsxs(x,{children:[t.jsxs(p,{children:["Tool Loaning"," ",t.jsx(u,{href:"https://medium.com/@miningmatters/ae7416e78f75",target:"_blank",children:t.jsx(d,{})})]}),t.jsx("img",{src:"/assets/background/bg-tool-loaning.jpeg",alt:""})]}),t.jsxs(h,{children:[t.jsxs(m,{activeButton:o,children:[t.jsx(r,{onClick:()=>i("mine"),rounded:!1,color:"transparentWhite05",children:"Mine"}),t.jsx(r,{onClick:()=>i("mine-config"),rounded:!1,color:"transparentWhite05",children:"Loaning Config"}),t.jsx(r,{onClick:()=>i("deposit"),rounded:!1,color:"transparentWhite05",noBorder:!0,children:"Deposit"}),t.jsx(r,{onClick:()=>i("stake"),rounded:!1,color:"transparentWhite05",children:"Stake"}),t.jsx(r,{onClick:()=>i("unstake"),rounded:!1,color:"transparentWhite05",children:"Unstake"})]}),l]})]})};export{b as default};
