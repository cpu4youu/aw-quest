import{s as x,g as A,S as l,T as D,a as E,Q as p,b as f,i as H,p as N,q as $,u as _,M as V,R as O,j as t,w,B as T,t as Q,o as Z,m as J,al as X}from"./index-a29f3f38.js";import{N as nn}from"./index-2760c0ab.js";import{A as y}from"./index.esm-f71988b6.js";import{i as I}from"./index-a93f2ff8.js";import"./index.esm-052a6e12.js";import"./gradient-border-e0008645.js";const tn=x("div",{d:"flex",align:"center",justify:"center",direction:"column",position:"relative",w:"100%",maxWidth:"1330px","@sm":{px:"0px"}}),en=x("h2",{d:"flex",align:"center",justify:"center",mt:"10px",color:"$white500",textShadow:"0px 4px 4px rgba(0, 0, 0, 0.5)",fs:"40px",ff:"$heading",w:"100%","@sm":{fs:"26px"}}),an=x("div",{d:"flex",align:"center",justify:"center",direction:"column",gap:"20px",w:"100%",mt:"40px",px:"15px",bg:"rgba(3, 16, 32,  .55)",br:"22px",padding:"20px 35px","@sm":{padding:"20px"}}),g=x("div",{d:"grid",gridTemplateColumns:"2fr 1fr 1fr 2fr",gap:"15px",w:"100%",maxH:"50px",">div:nth-child(2)":{maxW:"180px"},"@lg":{gridTemplateColumns:"2fr 1.3fr 1fr 2fr",button:{fs:"12px",minW:"100%",maxW:"150px"}},"@sm":{d:"flex",align:"center",justify:"center",direction:"column",maxH:"100%",">div:nth-child(2)":{maxW:"100%"},button:{h:"30px"}}}),M=x("div",{d:"flex",align:"flex-start",justify:"flex-start",direction:"column",color:"$white500",mr:"auto","@sm":{w:"100%",justify:"space-between",direction:"row"}}),j=x("div",{d:"flex",align:"flex-start",justify:"flex-start",ff:"$heading",fs:"14px",w:"100%","@md":{fs:"12px"},"@sm":{fs:"11px",fw:"$bold"}}),b=x("div",{d:"flex",align:"flex-start",justify:"flex-start",ff:"$heading",fs:"24px",w:"100%",svg:{m:"auto 5px",w:"20px",h:"20px"},"@md":{fs:"18px"},"@sm":{justify:"space-between",w:"max-content",fw:"$bold",fs:"12px",svg:{w:"15px",h:"15px"}}}),L=x("div",{d:"flex",align:"center",justify:"center",padding:"5px 20px 5px 10px",border:"1px solid rgba(0, 0, 0, 0.4)",br:"13px",bg:"$blue100",svg:{color:"$white500",w:"25px",h:"25px",mr:"auto"},"@sm":{d:"none"}}),C=x("span",{w:"100%",color:"$white500",textAlign:"center",fs:"14px",fw:"$bold",ff:"$heading","@lg":{fs:"12px"},"@md":{fs:"10px"},"@sm":{}}),rn=async()=>await A({options:{code:l.HQ_MU,index_position:1,limit:"1000",scope:l.HQ_MU,table:D.TLMDROPS}})??null,sn=async n=>await A({options:{code:l.HQ_MU,index_position:3,limit:"1000",key_type:"i64",scope:l.HQ_MU,table:D.TLMBIDS,lower_bound:n,upper_bound:n}})??null,on=()=>E({queryKey:[p.SPECIAL_MINING],queryFn:()=>ln(),staleTime:1e3*60*60*24,enabled:!!f.getState().user});async function cn(){return await $.invalidateQueries(p.SPECIAL_MINING)}async function ln(){const n=f.getState().user;if(!n)return null;try{const e=await sn(n.name),r=await rn();return e?e==null?void 0:e.reduce((o,m)=>{const d=r==null?void 0:r.find(u=>u.index===m.pool_index&&H(N,new Date(u.endtime)));if(!d)return o;const S=((m==null?void 0:m.total_bid)??0)/((d==null?void 0:d.total_power)??1),i=(d==null?void 0:d.rewards.replace(" TLM",""))??"1";return o+S*Number(i)},0):0}catch(e){return console.log(e),null}}const un=async n=>{const e=await A({options:{code:l.M__FEDERATION,index_position:1,limit:"1000",scope:l.M__FEDERATION,table:D.MINERCLAIM,lower_bound:n,upper_bound:n}});return(e==null?void 0:e[0])??null},dn=()=>E({queryKey:[p.MINER_CLAIM],queryFn:()=>fn(),staleTime:1e3*60*60*24,enabled:!!f.getState().user});async function mn(){return await $.invalidateQueries(p.MINER_CLAIM)}async function fn(){const n=f.getState().user;if(!n)return null;try{return await un(n.name)}catch(e){return console.log(e),null}}const xn=async n=>{const e=await A({options:{code:l.M__FEDERATION,index_position:1,limit:"1000",scope:l.M__FEDERATION,table:D.LANDCOMMS,lower_bound:n,upper_bound:n}});return(e==null?void 0:e[0])??null},pn=()=>E({queryKey:[p.LAND_COMMS],queryFn:()=>wn(),staleTime:1e3*60*60*24,enabled:!!f.getState().user});async function hn(){return await $.invalidateQueries(p.LAND_COMMS)}async function wn(){const n=f.getState().user;if(!n)return null;try{return await xn(n.name)}catch(e){return console.log(e),null}}const Tn=async n=>{const e=await A({options:{code:l.AWLNDRATINGS,index_position:1,limit:"1000",scope:l.AWLNDRATINGS,table:D.PAYOUTS,lower_bound:n,upper_bound:n}});return(e==null?void 0:e[0])??null},yn=()=>E({queryKey:[p.PAYOUTS],queryFn:()=>Mn(),staleTime:1e3*60*60*24,enabled:!!f.getState().user});async function gn(){return await $.invalidateQueries(p.PAYOUTS)}async function Mn(){const n=f.getState().user;if(!n)return null;try{return await Tn(n.name)}catch(e){return console.log(e),null}}async function jn(n,e){const r=bn(n,e),{executeTransaction:c}=_();return!!await c(r)}function bn(n,e){const{tokenTransferData:r}=Ln(e,n.name);return{actions:[{account:l.ALIEN_WORLDS,name:"transfer",authorization:[{actor:n.name,permission:n.requestPermission}],data:r}]}}function Ln(n,e){return{tokenTransferData:{from:e,memo:"deposit",quantity:n,to:"members.mc"}}}async function Cn(n,e){const{executeTransaction:r}=_(),c=_n(n,e);return!!await r(c)}function _n(n,e){return{actions:[{account:l.HQ_MU,name:"withdrawtlm",authorization:[{actor:n.name,permission:n.requestPermission}],data:{wallet:n.name}},{account:l.MEMBERS_MC,name:"withdrawdepo",authorization:[{actor:n.name,permission:n.requestPermission}],data:{wallet:n.name,amount:e}}]}}async function Sn(n){const{executeTransaction:e}=_(),r=An(n);return!!await e(r)}function An(n){return{actions:[{account:l.HQ_MU,name:"claimtlm",authorization:[{actor:n.name,permission:n.requestPermission}],data:{wallet:n.name}}]}}async function Dn(n){const{executeTransaction:e}=_(),r=Rn(n);return!!await e(r)}function Rn(n){return{actions:[{account:l.M__FEDERATION,name:"claimmines",authorization:[{actor:n.name,permission:n.requestPermission}],data:{receiver:n.name}}]}}async function En(n){const{executeTransaction:e}=_(),r=$n(n);return!!await e(r)}function $n(n){return{actions:[{account:l.M__FEDERATION,name:"claimcomms",authorization:[{actor:n.name,permission:n.requestPermission}],data:{receiver:n.name}}]}}async function qn(n){const{executeTransaction:e}=_(),r=vn(n);return!!await e(r)}function vn(n){return{actions:[{account:l.AWLNDRATINGS,name:"claimpay",authorization:[{actor:n.name,permission:n.requestPermission}],data:{receiver:n.name}}]}}async function In(n,e,r){const{executeTransaction:c}=_(),o=Nn(e,r,n);return!!await c(o)}function Nn(n,e,r){return{actions:e.map(o=>({account:l.MISSION_CONTROL,name:"claimweek",authorization:[{actor:r.name,permission:r.requestPermission}],data:{wallet:r.name,week_id:o,boost_percentage:n}}))}}function Pn(n){const e=n.getFullYear(),r=n.getMonth()+1>9?n.getMonth()+1:`0${n.getMonth()+1}`,c=n.getDate()>9?n.getDate():`0${n.getDate()}`,o=n.getHours()>9?n.getHours():`0${n.getHours()}`,m=n.getMinutes()>9?n.getMinutes():`0${n.getMinutes()}`,d=n.getSeconds()>9?n.getSeconds():`0${n.getSeconds()}`;return`${e}-${r}-${c}T${o}:${m}:${d}`}const Wn={addTLM:!1,withdrawTLM:!1,claimTLM:!1,claimMines:!1,claimComms:!1,claimPay:!1,weekReward:!1},zn=()=>{var P,W,F;const n=f(a=>a.user),e=f(a=>a.updateMember),r=V(a=>a.weeklies),{data:c}=on(),{data:o}=dn(),{data:m}=pn(),{data:d}=yn(),S=O.useRef(null),[i,u]=O.useState(Wn),q=r==null?void 0:r.reduce((a,s)=>{const R=((s==null?void 0:s.initial_prize_pool_formatted)??0)*((s==null?void 0:s.total_quest_points)??1)/((s==null?void 0:s.total_quest_points_week)??1);return s.week_id&&s.total_quest_points_user_week>0&&I(new Date,new Date(s==null?void 0:s.expiresDate))&&H(new Date,new Date((s==null?void 0:s.end_date)??""))?{total:a.total+R,weeks:[...a.weeks,s.week_id]}:{total:a.total,weeks:[...a.weeks]}},{total:0,weeks:[]});async function U(){var a,s;if(!(!n||!((a=S.current)!=null&&a.value))){u({...i,addTLM:!0});try{if(!await jn(n,`${Number((s=S.current)==null?void 0:s.value).toFixed(4)} TLM`))throw new Error("Buy TLM error from contract");await h()}catch(R){console.log(R)}finally{u({...i,addTLM:!1})}}}async function B(a){if(n){u({...i,withdrawTLM:!0});try{if(!await Cn(n,a))throw new Error("Withdrawn TLM error from contract");await h()}catch(s){console.log(s)}finally{u({...i,withdrawTLM:!1})}}}async function z(){if(n){u({...i,claimTLM:!0});try{if(!await Sn(n))throw new Error("Claim TLM error from contract");await h()}catch(a){console.log(a)}finally{u({...i,claimTLM:!1})}}}async function k(){if(n){u({...i,claimMines:!0});try{if(!await Dn(n))throw new Error("Claim Mines error from contract");await h()}catch(a){console.log(a)}finally{u({...i,claimMines:!1})}}}async function G(){if(n){u({...i,claimComms:!0});try{if(!await En(n))throw new Error("Claim Comms error from contract");await h()}catch(a){console.log(a)}finally{u({...i,claimComms:!1})}}}async function Y(){if(n){u({...i,claimPay:!0});try{if(!await qn(n))throw new Error("Claim Pay error from contract");await h()}catch(a){console.log(a)}finally{u({...i,claimPay:!1})}}}async function K(){if(n){u({...i,weekReward:!1});try{if(!await In(n,0,q.weeks))throw new Error("Week Reward error from contract");await h(),await Z()}catch(a){console.log(a)}finally{u({...i,weekReward:!1})}}}async function h(){if(!(n!=null&&n.name))return null;await J(500);const a=await X(n==null?void 0:n.name);f.setState(s=>({...s,user:s.user?{...s.user,userTlm:a}:null})),await e(),await cn(),await mn(),await hn(),await gn()}const v=new Date((o==null?void 0:o.timestamp)||new Date);return t.jsxs(tn,{children:[t.jsx(en,{children:"Trilium Vault"}),t.jsxs(an,{children:[t.jsxs(g,{children:[t.jsxs(M,{children:[t.jsx(j,{children:"TLM in wallet"}),t.jsxs(b,{children:[((P=n==null?void 0:n.userTlm)==null?void 0:P.balance)??"0.0000",t.jsx(w,{})]})]}),t.jsx(nn,{type:"number",defaultValue:10,ref:S}),t.jsx(T,{isLoading:i.addTLM,onClick:U,color:"quarterly",children:"Deposit"}),t.jsxs(L,{children:[t.jsx(y,{}),t.jsx(C,{children:"The TLM currently in your wallet"})]})]}),t.jsxs(g,{children:[t.jsxs(M,{children:[t.jsx(j,{children:"Deposited TLM"}),t.jsxs(b,{children:[(Q((W=n==null?void 0:n.HqMember)==null?void 0:W.deposit)+((n==null?void 0:n.tlm_deposit)??0)/1e4).toFixed(4),t.jsx(w,{})]})]}),t.jsx("div",{}),t.jsx(T,{isLoading:i.withdrawTLM,disabled:Q((F=n==null?void 0:n.HqMember)==null?void 0:F.deposit)+((n==null?void 0:n.tlm_deposit)??0)/1e4===0,onClick:()=>B((n==null?void 0:n.tlm_deposit)??0),color:"quarterly",children:"Withdraw"}),t.jsxs(L,{children:[t.jsx(y,{}),t.jsx(C,{children:"Used for Crowdfunding Campaigns, Land Events & more."})]})]}),t.jsxs(g,{children:[t.jsxs(M,{children:[t.jsx(j,{children:"Earned by Missions"}),t.jsxs(b,{children:[c==null?void 0:c.toFixed(4),t.jsx(w,{})]})]}),t.jsx("div",{}),t.jsx(T,{isLoading:i.claimTLM,disabled:(c??0)===0,onClick:z,color:"quarterly",children:"Claim"}),t.jsxs(L,{children:[t.jsx(y,{}),t.jsx(C,{children:"Earned by taking part in Missions"})]})]}),t.jsxs(g,{children:[t.jsxs(M,{children:[t.jsx(j,{children:"Alien Worlds Mining Rewards"}),t.jsxs(b,{children:[(o==null?void 0:o.amount.replace(" TLM",""))??"0.0000"," ",t.jsx(w,{})]})]}),t.jsx("div",{}),t.jsx(T,{isLoading:i.claimMines,disabled:((o==null?void 0:o.amount)??0)===0||I(N,v),onClick:k,color:"quarterly",children:"Claim"}),t.jsxs(L,{children:[t.jsx(y,{}),t.jsxs(C,{children:["Earned by mining in Alien Worlds",I(N,v)&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),`Available on ${new Date(`${Pn(v)}.000Z`).toLocaleString()}`]})]})]})]}),t.jsxs(g,{children:[t.jsxs(M,{children:[t.jsx(j,{children:"Alien Worlds Land Commission"}),t.jsxs(b,{children:[(m==null?void 0:m.comms.replace(" TLM",""))??"0.0000"," ",t.jsx(w,{})]})]}),t.jsx("div",{}),t.jsx(T,{isLoading:i.claimComms,disabled:((m==null?void 0:m.comms)??0)===0,onClick:G,color:"quarterly",children:"Claim"}),t.jsxs(L,{children:[t.jsx(y,{}),t.jsx(C,{children:"Earned by players mining on your land"})]})]}),t.jsxs(g,{children:[t.jsxs(M,{children:[t.jsx(j,{children:"Alien Worlds DTAL"}),t.jsxs(b,{children:[(d==null?void 0:d.payoutAmount.replace(" TLM",""))??"0.0000"," ",t.jsx(w,{})]})]}),t.jsx("div",{}),t.jsx(T,{isLoading:i.claimPay,disabled:((d==null?void 0:d.payoutAmount)??0)===0,onClick:Y,color:"quarterly",children:"Claim"}),t.jsxs(L,{children:[t.jsx(y,{}),t.jsx(C,{children:"Daily Trilium Allocation for Landowners"})]})]}),t.jsxs(g,{children:[t.jsxs(M,{children:[t.jsx(j,{children:"Weekly Rewards"}),t.jsxs(b,{children:[q.total.toFixed(4)," ",t.jsx(w,{})]})]}),t.jsx("div",{}),t.jsx(T,{isLoading:i.weekReward,disabled:q.total===0,onClick:K,color:"quarterly",children:"Claim"}),t.jsxs(L,{children:[t.jsx(y,{}),t.jsx(C,{children:"Earned by completing quests. Costs 10,000 MC Points per week to claim."})]})]})]})]})};export{zn as default};
