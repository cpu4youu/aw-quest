import{s as i,e as G,a as E,q as N,Q as y,g as Z,S as d,T as K,u as Y,G as J,R as A,_ as D,b as g,f as c,j as t,m as X,d as ee,B as te,h as M,o as se,k as ne}from"./index-1c0faa59.js";import{u as re,L as ie}from"./index-8b8bce81.js";import{g as oe}from"./emporium-tasks-9c475e03.js";import{a as ae}from"./index.esm-4dd58676.js";import{A as P}from"./atom-f4811a45.js";import{T as ce}from"./index-5b671147.js";import"./index-7c99961f.js";import"./index-ca24d6be.js";const le=i("div",{d:"flex",align:"center",justify:"center",direction:"column",w:"100%"}),pe=i("div",{d:"flex",align:"center",justify:"center",direction:"column",position:"relative",h:"165px",w:"100%",zIndex:1,img:{zIndex:-1,position:"absolute",h:"165px",w:"100%",objectFit:"cover",inset:0},"@md":{h:"105px",img:{h:"105px"}},"@sm":{h:"65px",img:{h:"65px"}}}),ue=i("h2",{d:"flex",align:"center",justify:"center",color:"$white500",fs:"40px",ff:"$heading",textShadow:"0px 4px 4px rgba(0, 0, 0, 0.8)",w:"100%","@sm":{fs:"24px"}}),de=i("div",{d:"flex",align:"center",justify:"center",direction:"column",w:"100%",maxW:"1095px","@md":{px:"30px"},"@sm":{px:"15px"}}),xe=i("div",{d:"flex",align:"center",justify:"center",direction:"column",w:"100%",mt:"48px"}),me=i("h3",{d:"flex",align:"flex-start",justify:"flex-start",direction:"column",w:"100%",color:"$white500",fs:"32px","@sm":{fs:"24px"}}),fe=i("p",{d:"inline-block",w:"100%",maxW:"811px",mt:"18px",mr:"auto",fs:"16px",fw:"$thin",ff:"$body",color:"$white500",span:{textDecoration:"underline"},"@sm":{mt:"10px",fs:"14px"}}),he=i("div",{d:"flex",align:"center",justify:"center",direction:"column",mt:"18px",w:"100%"}),ge=i("h3",{d:"flex",align:"center",justify:"space-between",gap:"10px",w:"100%",color:"$white500",fs:"18px",span:{fs:"32px"},button:{d:"flex",align:"center",justify:"center",gap:"6px",color:"$white500",fw:"$bold",fs:"25px"},"@sm":{fs:"16px",span:{fs:"28px"}}}),ye=i("div",{d:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:"15px",flexWrap:"wrap",mt:"18px",w:"100%","@sm":{gap:"5px"}}),we=i("div",{d:"flex",align:"flex-start",justify:"flex-start",direction:"column",gap:"5px",position:"relative",w:"100%",h:"100%",pb:"5px",border:"3px solid rgba(255, 255, 255, 0.4)",img:{w:"100%",h:"100%",maxH:"135px",objectFit:"cover"},">button":{w:"100%",mt:"auto",">button":{fs:"18px",padding:"0px",mx:"auto",w:"95%",minW:"95%",maxW:"95%",minH:"35px",div:{minH:"35px"}}},variants:{isSelected:{true:{">button":{color:"black"}}}},"@sm":{">button":{fs:"14px"}}}),be=i("div",{d:"flex",align:"center",justify:"center",gap:"10px",position:"absolute",top:"3px",left:"10px",color:"$white500",fs:"24px",fw:"$bold",ff:"$heading",svg:{w:"38px",h:"38px",ml:"-5px",path:{fill:"rgb(246, 168, 0)"}},"@sm":{fs:"16px",left:"5px",top:"0px",svg:{w:"25px",h:"25px"}}}),_e=i("h4",{d:"flex",align:"center",justify:"center",direction:"column",padding:"3px 5px",color:"$white500",fs:"18px",ff:"$heading","@sm":{fs:"14px"}}),je=i("div",{d:"flex",align:"flex-start",justify:"flex-start",direction:"column",gap:"10px",w:"100%",my:"10px",pl:"5px",color:"$white500",fs:"13px",ff:"$body",">svg":{w:"20px",h:"20px"},"@sm":{fs:"12px"}}),Te=i("p",{w:"100%",my:"auto",pl:"5px",color:"$white500",fs:"13px",ff:"$body",svg:{verticalAlign:"sub",w:"16px",h:"16px",my:"auto",mx:"3px","&:last-of-type":{mr:"3px",w:"19px",h:"19px",path:{fill:"rgb(246, 168, 0)"}}},"@sm":{fs:"12px"}}),ve=i("p",{w:"100%",pl:"5px",color:"$white500",fs:"14px",ff:"$body",span:{display:"inline-flex",align:"center",gap:"3px"},svg:{verticalAlign:"sub",w:"16px",h:"16px",mr:"3px"},"@sm":{fs:"12px"}}),Se=G({"0%":{backgroundPosition:"0% 0%"},"100%":{backgroundPosition:"-135% 0%"}}),Ce=i("div",{d:"flex",w:"100%",maxW:"260px",h:"325px",background:"linear-gradient( -90deg, rgba(255,255,255, .05), rgba(255,255,255, 0.07) ,rgba(255,255,255, .05))",br:"10px",backgroundSize:"400% 400%",animation:`${Se} 1.2s ease-in-out infinite`,"@sm":{h:"215px",w:"100%"}}),$e=()=>E({queryKey:[y.Tasks],queryFn:()=>Me(),staleTime:1e3*60*60});async function Le(){return await N.removeQueries([y.Tasks])}async function Me(){try{const n=await oe("active");return n||[]}catch(n){return console.log(n),[]}}const Pe=async()=>{const n=await Z({options:{code:d.EMPORIUM,index_position:1,limit:"10000",scope:d.EMPORIUM,table:K.CONFIG}});return n?n[0]:null},ke=()=>E({queryKey:[y.TasksConfig],queryFn:()=>Ee(),staleTime:1e3*60*60});async function Ee(){try{return await Pe()}catch(n){return console.log(n),null}}async function Ae(n,p,r,o){const{executeTransaction:x}=Y(),m=await De(n,p,r,o);return!!await x(m,{broadcast:!0,sign:!0})}async function De(n,p,r,o){return o==="tlm"?{actions:[{account:d.ALIEN_WORLDS,name:"transfer",authorization:[{actor:n.name,permission:n.requestPermission}],data:{from:n.name,memo:`complete task,${p}`,quantity:`${r.toFixed(4)} TLM`,to:"emporium.mc"}}]}:{actions:[{account:d.EMPORIUM,name:"finishtask",authorization:[{actor:n.name,permission:n.requestPermission}],data:{wallet:n.name,task_id:p,currency_amount:r}}]}}function Ie(n){return J({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"}}]})(n)}const k=A.lazy(()=>D(()=>import("./tlm-9db4cd5a.js"),["assets/tlm-9db4cd5a.js","assets/index-1c0faa59.js","assets/index-55fec1ff.css"])),Ue=A.lazy(()=>D(()=>import("./star-1e0678eb.js"),["assets/star-1e0678eb.js","assets/index-1c0faa59.js","assets/index-55fec1ff.css"])),Ve=()=>{const{data:n,isLoading:p}=$e(),{data:r}=ke(),o=g(e=>e.user),x=g(e=>e.updateMcPoints),m=g(e=>e.updateTLM),w=re(e=>e.onChangePage),[u,b]=c.useState(void 0),[I,U]=c.useState(""),[_,j]=c.useState(!1),[f,B]=c.useState([]);async function R(e){if(!(!o||!e.current_price)){j(!0);try{await Ae(o,e.task_id,e.current_price,e.task_type)&&(await M(1500),await T(),e.task_type==="tlm"&&await m(),e.task_type==="qp"&&await se(),await x(),ne.success("Task completed successfully"))}catch(s){console.error(s)}finally{j(!1)}}}async function T(){await M(1e3),await Le()}function q(e){if(e.task_id===u){R(e);return}b(e.task_id)}function W(){b(void 0)}const v=c.useCallback(()=>{const e=new Date(new Date().toUTCString().substring(0,25)),s=(r==null?void 0:r.progressupdate_seconds)??0,a=Math.floor(e.getTime()/1e3);return new Date((Math.floor(a/s)*s+s)*1e3)},[r==null?void 0:r.progressupdate_seconds]),S=c.useCallback(e=>{const s=e.minutes>0?`${e.minutes>9?e.minutes:`0${e.minutes}`}`:"00",a=e.seconds>9?e.seconds:`0${e.seconds}`,l=e.hours>9?e.hours:`0${e.hours}`;return e.hours>0?`${l}:${s}:${a}`:`${s}:${a}`},[]),C=c.useCallback(e=>{const s=new Date(new Date().toUTCString().substring(0,25)),a=(r==null?void 0:r.progressupdate_seconds)??1,l=(r==null?void 0:r.tick_percent_decrease)??1,F=Math.floor(s.getTime()/1e3),z=Math.floor(new Date(e==null?void 0:e.timestamp_created).getTime()/1e3),O=Math.floor(z/a)*a,H=Math.floor(F/a)*a-O,Q=Math.floor(H/a),V=l*-1/100,L=e.currency_start*Math.pow(1+V,Q);return e.task_type==="tlm"?Math.ceil(L/1e4):Math.floor(L)},[r]),h=c.useCallback(e=>{switch(e){case"qp":return t.jsx(X,{});case"mcp":return t.jsx(Ue,{});case"tlm":return t.jsx(k,{});default:return t.jsx(k,{})}},[]),$=c.useCallback((e,s=0)=>{var a,l;return e==="mcp"?((o==null?void 0:o.mcPoints)??0)<s:e==="tlm"?(Number((a=o==null?void 0:o.userTlm)==null?void 0:a.balance)??0)<s:e==="qp"?(((l=o==null?void 0:o.userWeekly)==null?void 0:l.total_quest_points)??0)<s:!0},[o]);return c.useEffect(()=>{if(n){const e=n.map(s=>({...s,current_price:C(s)}));B(e)}},[n,C]),c.useEffect(()=>{const e=setInterval(()=>{const s=ee(v());U(S(s)),s.minutes===0&&s.seconds===1&&T()},1e3);return()=>clearInterval(e)},[r,S,v]),t.jsx(c.Suspense,{fallback:t.jsx(ie,{}),children:t.jsxs(le,{children:[t.jsxs(pe,{children:[t.jsx(ue,{children:"Zapp’s Zap Emporium"}),t.jsx("img",{src:"/assets/background/bg-emporium.webp",alt:""})]}),t.jsxs(de,{children:[t.jsxs(xe,{children:[t.jsx(me,{children:"Zapp's Tasks"}),t.jsxs(fe,{children:["Zapp is currently trying to advance various pressing issues. Assist him in finishing tasks! Zapp will reward the helping player with Alien Worlds Shards he found on his journeys. Since he consistently dedicates time to these tasks, each one becomes easier to complete over time. Once a task is finished by ",t.jsx("u",{children:"any"})," player, it will be replaced by a new one."]})]}),t.jsxs(he,{children:[t.jsxs(ge,{children:[t.jsxs("p",{children:["Next Task Progress: ",t.jsx("span",{children:I})]}),t.jsxs("button",{onClick:()=>w("history"),children:[t.jsx(Ie,{}),"History"]})]}),t.jsx(ye,{children:p?Array.from({length:8}).map((e,s)=>t.jsx(Ce,{},s)):f==null?void 0:f.map(e=>{var s;return t.jsxs(we,{isSelected:u===e.task_id,children:[t.jsxs(be,{children:[(e.shards/10).toLocaleString("en-US")," ",t.jsx(P,{})]}),t.jsx("img",{src:`/assets/tasks/${e.image}.jpeg`,title:e.title,alt:e.title}),u!==e.task_id&&t.jsx(_e,{children:e.title}),u===e.task_id?t.jsxs(je,{children:[t.jsx(ae,{size:30,color:"#fff",onClick:W}),t.jsxs(Te,{children:["Are you sure you want to spend"," ",t.jsxs(t.Fragment,{children:[(s=e==null?void 0:e.current_price)==null?void 0:s.toLocaleString("en-US"),h(e.task_type)]}),"to complete the task and gain"," ",(e.shards/10).toLocaleString("en-US"),t.jsx(P,{}),"?"]})]}):t.jsx(ve,{children:e.description.split("[currency]").flatMap(a=>{var l;return[a,t.jsxs("span",{children:[(l=e==null?void 0:e.current_price)==null?void 0:l.toLocaleString("en-US"),h(e.task_type)]},a)]}).slice(0,-1)}),t.jsx(ce,{disabled:!$(e.task_type,e.current_price),delayDuration:10,text:t.jsxs(t.Fragment,{children:["Not enough ",h(e.task_type)]}),children:t.jsx(te,{disabled:_||$(e.task_type,e.current_price),isLoading:_,onClick:()=>q(e),color:u===e.task_id?"gradientYellow":"solidBlue",noBorder:!0,rounded:!1,children:u===e.task_id?"Confirm":e.button})})]},e.task_id)})})]})]})]})})};export{Ve as default};
