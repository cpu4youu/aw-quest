import{S as R,u as M,s as c,R as O,_ as P,f as g,z,b as T,K as u,n as w,i as b,j as n,B as j,h as A,o as $,ak as S,k as I,aj as L}from"./index-e08ba55d.js";import{A as B}from"./index.esm-528d6f21.js";import{i as N}from"./index-63d5f89a.js";async function q(s,a,i){const{executeTransaction:r}=M(),l=y(a,i,s);return!!await r(l)}function y(s,a,i){return{actions:[{account:R.MISSION_CONTROL,name:"claimweek",authorization:[{actor:i.name,permission:i.requestPermission}],data:{wallet:i.name,week_id:a,boost_percentage:s}}]}}async function F(s,a){const{executeTransaction:i}=M(),r=U(a,s);return!!await i(r)}function U(s,a){return{actions:[{account:R.MISSION_CONTROL,name:"claimweektlm",authorization:[{actor:a.name,permission:a.requestPermission}],data:{wallet:a.name,week_id:s}}]}}const V=c("div",{d:"flex",align:"center",justify:"center",direction:"column",position:"relative",zIndex:"12",w:"100%",maxW:"1190px"}),G=c("h2",{d:"flex",align:"center",justify:"center",color:"$white500",textShadow:"0px 4px 4px rgba(0, 0, 0, 0.5)",fs:"40px",w:"100%",mt:"60px","@sm":{fs:"26px"}}),Q=c("div",{d:"flex",align:"center",justify:"center",padding:"5px 20px 5px 10px",border:"1px solid rgba(0, 0, 0, 0.4)",br:"13px",bg:"$blue100",w:"100%",h:"85px",mt:"60px",svg:{color:"$white500",w:"25px",h:"25px",mr:"auto"},"@sm":{d:"none"}}),K=c("span",{w:"100%",color:"$white500",textAlign:"center",fs:"16px",fw:"$bold",ff:"$heading","@lg":{fs:"12px"},"@md":{fs:"10px"},"@sm":{}}),J=c("div",{d:"flex",align:"center",justify:"space-between",gap:"20px",w:"100%",mt:"30px","@md":{direction:"column",padding:"0 20px"}}),X=c("div",{d:"flex",align:"center",justify:"center",direction:"column",gap:"5px",w:"100%",mt:"auto",">p":{color:"$white500",textAlign:"center",fs:"16px",fw:"$bold",ff:"$heading"},">button":{maxW:"200px",minW:"200px",opacity:"1 !important",minH:"40px",maxH:"40px",div:{gap:"5px",fs:"20px",minH:"40px",maxH:"40px"}},"@md":{direction:"column",padding:"0 20px"}}),Y=c("div",{d:"flex",align:"center",justify:"center",direction:"column",maxW:"255px",h:"386px",padding:"15px",br:"18px",bg:"rgb(3 16 32 / 70%)",">button":{mt:"auto",maxW:"200px",minW:"200px",opacity:"1 !important",minH:"40px",maxH:"40px",div:{gap:"5px",fs:"20px",minH:"40px",maxH:"40px"}},variants:{order:{0:{order:3,"@md":{order:0}},1:{order:2,"@md":{order:1}},2:{order:1,"@md":{order:2}},3:{order:0,"@md":{order:3}}}},"@md":{h:"auto",w:"100%",maxW:"100%"}}),Z=c("h4",{d:"flex",align:"center",justify:"center",color:"$white500",textTransform:"uppercase",fs:"24px",mb:"50px",w:"100%"}),k=c("span",{d:"flex",align:"center",justify:"center",color:"$white500",textAlign:"center",ff:"$heading",fs:"18px",mb:"10px",w:"100%","@md":{mb:"20px"}}),W=c("span",{textAlign:"center",ff:"$heading",fw:"$bold",fs:"18px",color:"$white500",mb:"auto",w:"100%",span:{color:"#F6A800"},"@md":{mb:"20px"}}),tt=O.lazy(()=>P(()=>import("./star-ec2298d2.js"),["assets/star-ec2298d2.js","assets/index-e08ba55d.js","assets/index-55fec1ff.css"])),v=O.lazy(()=>P(()=>import("./tlm-85517a29.js"),["assets/tlm-85517a29.js","assets/index-e08ba55d.js","assets/index-55fec1ff.css"])),it=()=>{const s=g.useContext(z.UALContext),a=T(t=>t.user),i=T(t=>t.updateAuth),r=u(t=>t.settings),l=u(t=>t.weeklies),m=u(t=>t.currentWeek),p=u(t=>t.claimWeeks),C=u(t=>t.updateClaimWeeks),[h,x]=g.useState(!1),f=g.useMemo(()=>{const t=l==null?void 0:l.filter(e=>e.total_quest_points_user_week>0&&N(w,new Date(e==null?void 0:e.expiresDate))&&b(w,new Date((e==null?void 0:e.end_date)??"")));return[0,1,2,3].map(e=>({week_id:((m==null?void 0:m.week_id)??0)-(e+1),isAfter:!0,userTLM:0})).map(e=>{const o=t.find(({week_id:_})=>e.week_id===_);if(o){const _=((o==null?void 0:o.initial_prize_pool_formatted)??0)*((o==null?void 0:o.total_quest_points)??1)/((o==null?void 0:o.total_quest_points_week)??1);if(!(p==null?void 0:p.find(H=>H===`${o==null?void 0:o.week_id}`)))return{...o,userTLM:_,isAfter:b(w,(o==null?void 0:o.expiresDate)??w)}}return e})},[l,m,p]);async function D(t){if(!a||!((t??0)>=0))return null;x(!0);try{if(!await q(a,0,`${t}`))throw new Error("Purchase error from contract");await A(3e3),await $(),await S(),await i(s),C([...p,`${t}`]),x(!1),I.success("Claim successfully!",L)}catch(d){console.log(d),x(!1)}}async function E(t){if(!a||!((t??0)>=0))return null;x(!0);try{if(!await F(a,`${t}`))throw new Error("Purchase error from contract");await A(3e3),await $(),await S(),await i(s),C([...p,`${t}`]),x(!1),I.success("Claim successfully!",L)}catch(d){console.log(d),x(!1)}}return n.jsxs(V,{children:[n.jsx(G,{children:"Weekly Rewards"}),n.jsxs(Q,{children:[n.jsx(B,{}),n.jsx(K,{children:"Rewards are available for a maximum of 4 weeks. Any unclaimed rewards are returned to Mission Control."})]}),n.jsx(J,{children:f&&f.length>0&&(f==null?void 0:f.map((t,d)=>n.jsxs(Y,{order:d,children:[n.jsxs(Z,{children:["Week ",t.week_id]}),!(t!=null&&t.isAfter)&&n.jsxs(W,{children:["Total reward of the week:"," ",n.jsxs("span",{children:[t.userTLM.toFixed(4)," ",n.jsx(v,{})]})]}),n.jsx(k,{children:t!=null&&t.isAfter?"These rewards were either already claimed by you, or you did not participate in this week.":"To claim your reward, you have two options:"}),t!=null&&t.isAfter?n.jsx(j,{color:"gradientBlack",disabled:!0,isLoading:h,children:"Claimed"}):n.jsxs(X,{children:[n.jsx("p",{children:"CLAIM USING"}),n.jsxs(j,{color:"gradientPink",isLoading:h,disabled:((a==null?void 0:a.mcPoints)??0)<((r==null?void 0:r.cost_nftpoints_claim)??0),onClick:()=>D(t==null?void 0:t.week_id),children:[(r==null?void 0:r.cost_nftpoints_claim.toLocaleString("en-US",{maximumFractionDigits:0}))??0," ",n.jsx(tt,{color:"#fff"})]}),n.jsxs(j,{color:"gradientBlue",isLoading:h,onClick:()=>E(t==null?void 0:t.week_id),children:[(t.userTLM/2).toFixed(4)," ",n.jsx(v,{color:"#fff"})]})]})]},t.week_id)))})]})};export{it as default};
