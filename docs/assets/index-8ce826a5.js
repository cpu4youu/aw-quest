import{s as p,j as t,R as v,_ as N,e as q,h as H,S as f,k as T,T as S,m as P,l as F,Q as V,q as z,b as g,C as E,D as $,r as I,B as K}from"./index-98ed5c5a.js";import{S as d}from"./styles-a11a090e.js";import{d as w}from"./defaultAvatar-1b3d0260.js";import{S as k}from"./index-264228b5.js";import{d as Y}from"./use-transaction-ec00d926.js";import{s as C}from"./sleep-da79c358.js";import{A as J}from"./axios-43b00e28.js";import{t as X}from"./user-miners-query-4e3734b1.js";import{u as Z}from"./use-media-5b113697.js";import"./index.esm-7dbaa8d1.js";import"./index-47cc9419.js";import"./index-9ecc9db5.js";import"./index-93ccba54.js";import"./iconBase-adc33132.js";const ee=p("div",{d:"flex",align:"center",justify:"center",direction:"column",position:"relative",gap:"20px",w:"100%",px:"40px",h2:{mt:"30px",color:"$white500",letterSpacing:"2px",textShadow:" 0px 4px 4px rgba(0, 0, 0, 0.5)"}}),te=()=>t.jsx(ee,{children:t.jsx("h2",{children:"No candidates to this planet"})}),ne=p("div",{d:"flex",align:"center",justify:"center",direction:"column",position:"relative",gap:"20px",w:"100%",px:"40px",".nfts":{w:"100%",h:"70px",br:"10px"}}),oe=()=>t.jsxs(ne,{children:[t.jsx(d,{className:"nfts"}),t.jsx(d,{className:"nfts"}),t.jsx(d,{className:"nfts"}),t.jsx(d,{className:"nfts"})]}),re=p("div",{d:"grid",gridTemplateColumns:"1.5fr 1.35fr 1.15fr 0.95fr",minH:"100px",bg:"rgba(0, 0, 0, .3)",w:"100%",padding:"5px 0","&:hover":{boxShadow:"0px 0px 15px rgba(255,255,255,0.5)"},"@sm":{padding:"0 5px 0 0",gap:"15px",gridTemplateColumns:"0.8fr 1.4fr 0.9fr"}}),ie=p("div",{d:"flex",align:"center",justify:"space-around",gap:"50px",margin:"0 auto 0 45px",img:{br:"50%",h:"70px",w:"70px"},variants:{position:{true:{img:{border:"1px solid #EBB309"}},false:{img:{border:"1px solid #5F5F5F"}}}},"@sm":{gap:"0px",margin:"0 auto 0 15px",img:{h:"40px",w:"40px"}}}),se=p("div",{d:"flex",align:"center",justify:"center",color:"$white500",w:"40px",fs:"24px",fw:"$bold",ff:"$heading","@sm":{fs:"20px"}}),ae=p("span",{d:"flex",align:"center",justify:"center",textAlign:"center",color:"$white500",my:"auto",w:"100%",fw:"$bold",fs:"16px",ff:"$heading",lineHeight:"17px","@sm":{justify:"center",fs:"10px"}}),le=p("span",{d:"flex",align:"center",justify:"center",color:"$white500",gap:"5px",w:"100%",fs:"20px",ff:"$heading","@sm":{d:"none"}}),ce=p("div",{d:"flex",align:"center",justify:"center",color:"$white500",gap:"10px",w:"100%",fs:"20px",ff:"$heading","@sm":{gap:"10px",fs:"10px"}}),pe=v.lazy(()=>N(()=>import("./bolt-51bfdd04.js"),["assets/bolt-51bfdd04.js","assets/index-98ed5c5a.js","assets/index-55fec1ff.css"])),xe=({data:e,position:r})=>{var l;const n=v.useRef(null);function i(){n!=null&&n.current&&(n.current.src=w)}return t.jsxs(re,{children:[t.jsxs(ie,{position:r<2,children:[t.jsx("img",{ref:n,src:(e==null?void 0:e.image)??w,onError:i,alt:"avatar user image"}),t.jsx(se,{children:r+1})]}),t.jsx(ae,{children:(e==null?void 0:e.givenName)??(e==null?void 0:e.candidate_name)}),t.jsx(le,{children:e==null?void 0:e.candidate_name}),t.jsxs(ce,{children:[((l=e==null?void 0:e.votes)==null?void 0:l.toLocaleString("en-US"))??0,t.jsx(pe,{type:2})]})]})},ue=p("div",{d:"flex",align:"center",justify:"center",direction:"column",position:"relative",zIndex:"12",w:"100%"}),fe=p("div",{d:"flex",align:"center",justify:"center",direction:"column",position:"relative",h:"165px",w:"100%",zIndex:1,img:{zIndex:-1,position:"absolute",h:"165px",w:"100%",objectFit:"cover",inset:0}}),me=p("h2",{d:"flex",align:"center",justify:"center",gap:"10px",color:"$white500",fs:"40px",ff:"$heading",textShadow:"0px 4px 4px rgba(0, 0, 0, 0.5)",w:"100%","@sm":{fs:"24px"}}),de=p("a",{d:"flex",align:"center",justify:"center",color:"$white500",svg:{mt:"10px",w:"40px",h:"40px"},"@sm":{svg:{mt:"5px",w:"30px",h:"30px"}}}),ge=p("div",{d:"flex",align:"flex-start",justify:"flex-start",direction:"column",gridArea:"content",padding:"20px 20px 30px",gap:"7px",w:"100%",maxW:"1190px"}),he=p("h2",{d:"flex",align:"center",justify:"center",gap:"10px",color:"$white500",m:"30px 0 30px",w:"100%",svg:{w:"40px",h:"40px"},"@sm":{px:"10px"}}),we=p("div",{d:"grid",gridTemplateColumns:"1.5fr 1.2fr 1fr 1fr",gridTemplateAreas:"'header header header header' 'content content content content'",mt:"50px",h:"40px",w:"100%",bg:"rgba(0, 0, 0, .3)","@sm":{gridTemplateColumns:"0.8fr 1.4fr 0.9fr"}}),y=p("span",{d:"flex",align:"center",justify:"center",color:"$white500",fs:"20px",ff:"$heading",fw:"$bold",textShadow:"1px 1px 10px black",textAlign:"center",h:"40px","&:nth-child(4)":{pr:"10px"},"@sm":{fs:"10px",fw:"$normal",w:"100% !important"}}),ve=q({"0%":{backgroundPosition:"0% 0%"},"100%":{backgroundPosition:"-135% 0%"}}),_e=p("div",{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",w:"100%",gap:"30px",">button":{minWidth:"100%",height:"50px",fs:"20px"}}),je=p("div",{display:"flex",alignItems:"flex-start",justifyContent:"center",w:"100%",gap:"30px","@sm":{flexWrap:"wrap"}}),L=p("div",{display:"flex",alignItems:"center",justifyContent:"flex-start",flexDirection:"column",padding:"40px",h:"100%",w:"100%",bg:"rgba(0, 0, 0, .3)",br:"10px","@md":{padding:"20px"},"@sm":{h:"max-content",padding:"20px"}}),B=p("div",{display:"flex",alignItems:"center",justifyContent:"space-between",h:"100%",w:"450px","@md":{w:"100%"}}),M=p("div",{d:"flex",align:"center",justify:"center",br:"9999999px",border:"5px solid grey",overflow:"hidden",position:"relative",w:"100px",h:"100px",img:{position:"absolute",inset:"-2px",w:"100px",h:"100px"},variants:{rarity:{Abundant:{borderColor:"#737373"},Common:{borderColor:"#232323"},Rare:{borderColor:"#3d74e9"},Epic:{borderColor:"#8719f0"},Legendary:{borderColor:"#da992e"},Mythical:{borderColor:"#d20066"}}},"@sm":{w:"80px",h:"80px",img:{w:"80px",h:"80px"}}}),b=p("div",{display:"flex",alignItems:"flex-start",justifyContent:"center",w:"450px",h:"230px",color:"$white500",mt:"20px",textAlign:"center",fs:"16px",ff:"$heading",maxH:"400px",overflow:"auto",strong:{fs:"26px"},".loading":{background:"linear-gradient( -90deg, rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0.15) ,rgba(255, 255, 255, 0.35))",backgroundSize:"400% 400%",animation:`${ve} 1.2s ease-in-out infinite`,h:"100%",w:"100%"},"@md":{w:"100%"},"@sm":{fs:"12px"}}),ye={type:"ranking",planet:{label:"Naron",value:"naron"}},G=H((e,r)=>({voteFilters:ye,updateVoteFilters:n=>be(e,n),votePower:0,updateVotePower:n=>Te(e,n),votePowerValue:0,updateVotePowerValue:n=>Se(e,n)}));function be(e,r){e(n=>({...n,voteFilters:{...n.voteFilters,...r}}))}function Te(e,r){e(n=>({...n,votePower:r}))}function Se(e,r){e(n=>({...n,votePowerValue:r}))}async function Ve(e,r,n,i){const{executeTransaction:l}=Y(),c=Ie(e,r,n,i);return!!await l(c)}function Ie(e,r,n,i){return{actions:[{account:"cpu.mc",name:"paycpu",authorization:[{actor:"cpu.mc",permission:"cosign"}],data:{wallet:e.name,type:4}},{account:f.VOTING_MC,name:"claimpower",authorization:[{actor:e.name,permission:e.authorization.permission}],data:{wallet:e.name,claim_user_cpu:!0}},{account:f.VOTING_MC,name:"castvote",authorization:[{actor:e.name,permission:e.authorization.permission}],data:{wallet:e.name,new_candidates:r,planet:n,votes:i}}]}}const Ce=async e=>await T({options:{code:f.DAO_WORLDS,index_position:1,limit:"1000",scope:e,table:S.CANDIDATES}}),Ne=async e=>await T({options:{code:f.VOTING_MC,index_position:3,key_type:"i64",limit:"1000",lower_bound:e,upper_bound:e,scope:f.VOTING_MC,table:S.CANDIDATES}}),O=J.create({baseURL:"https://api.alienworlds.io/v2/dao/"});O.interceptors.response.use(e=>e.data,e=>{var n,i;const r=((i=(n=e.response)==null?void 0:n.data)==null?void 0:i.message)||e.message;return P.error(r,X),Promise.reject(e)});const Ee=async()=>await T({options:{code:f.VOTING_MC,index_position:1,limit:"1000",scope:f.VOTING_MC,table:S.blocklist}}),$e=e=>F({queryKey:[V.CANDIDATES,e],queryFn:()=>De(e||"eyeke"),staleTime:1e3*60*5});async function Ae(){return await z.invalidateQueries(V.CANDIDATES)}async function De(e){try{const r=await Ce(e),n=await Ne(e),i=await O.get(`${e}/candidates?walletId=aa`);if(!n||!r)return[];const l=Re(n,r,i),c=await Ee();return c!=null&&c.length?l.filter(u=>c==null?void 0:c.some(o=>o.wallet!==u.account)):l}catch(r){return console.log(r),null}}function Re(e,r,n){return r.filter(c=>c.is_active===1).map(c=>{const a=e.find(o=>o.wallet===c.candidate_name),u=n==null?void 0:n.find(o=>o.account===c.candidate_name);return{...c,...u,...a}}).sort((c,a)=>a.votes-c.votes)}const ke=async()=>{const e=await T({options:{code:f.VOTING_MC,index_position:1,limit:"1000",scope:f.VOTING_MC,table:S.CONFIG_MEMBERS}});return(e==null?void 0:e[0])??null},Le=()=>F({queryKey:[V.VOTES],queryFn:()=>Be(),staleTime:1e3*60*5,enabled:!!g.getState().user});async function Q(){return await z.invalidateQueries(V.VOTES)}async function Be(){const e=g.getState().user;if(!e)return{current_vote_power:0,max_vote_power:0};try{const r=await ke(),n=G.getState().updateVotePower,i=e==null?void 0:e.vote_power;let l=(e==null?void 0:e.last_voteclaim_shards)??0,c=(e==null?void 0:e.total_points)??0;if(!(e!=null&&e.total_points)){const o=await E(e.name);c=(o==null?void 0:o.total_points)??0}if(!(e!=null&&e.last_voteclaim_shards)){const o=await $(e.name);l=(o==null?void 0:o.last_voteclaim_shards)??0}let a=i+(c-l);const u=(r==null?void 0:r.max_votes)??0;return a>u&&(a=u),n(a),{current_vote_power:a,max_vote_power:u}}catch(r){return console.log(r),{current_vote_power:0,max_vote_power:0}}}const Me=({candidates:e,isLoading:r})=>{const n=G(s=>s.votePower),i=g(s=>s.user),l=v.useRef(null),c=(e==null?void 0:e.map(s=>({label:s.givenName||s.candidate_name,value:s.candidate_name,...s})))??[],a=[{label:"None",value:"none"},...c],u=a==null?void 0:a[0],[o,m]=I.useState(u),[x,U]=I.useState(u);function A(s,h){h==="first"&&m(s),h==="second"&&U(s)}function D(){return[o==null?void 0:o.value,x==null?void 0:x.value].filter(s=>s!=="none")}async function W(){const s=D();if(!i||!s||((s==null?void 0:s.length)??0)===0||!n)return null;try{if(await Ve(i,s,"eyeke",Number(n))){if(await C(1200),i){const _=await E(i==null?void 0:i.name),j=await $(i==null?void 0:i.name);if(!_||!j)return;g.setState({user:{...i,total_points:_==null?void 0:_.total_points,member:j==null?void 0:j.member}})}await C(1200),await Ae(),await Q(),P.success("Vote successfully registered")}}catch(h){console.log(h)}}function R(){l!=null&&l.current&&(l.current.src=w)}return t.jsxs(_e,{children:[t.jsxs(je,{children:[t.jsx(L,{children:t.jsxs(t.Fragment,{children:[t.jsxs(B,{children:[t.jsx(k,{isLoading:r,onSelected:s=>A(s,"first"),options:a==null?void 0:a.filter(s=>(s==null?void 0:s.value)!==(x==null?void 0:x.value)),title:"None",selected:{label:o==null?void 0:o.label,value:o==null?void 0:o.value},borderColor1:"#FFB31F",borderColor2:"#FFB31F"}),t.jsx(M,{rarity:i==null?void 0:i.avatarrarity,children:t.jsx("img",{ref:l,onError:R,src:o!=null&&o.image?o.image:w,alt:""})})]}),((a==null?void 0:a.length)??0)>0?t.jsx(b,{children:r?t.jsx(d,{className:"loading"}):(o==null?void 0:o.description)||"This candidate doesn't have description"}):t.jsx(b,{children:t.jsx("strong",{children:"No candidates to this planet"})})]})}),t.jsx(L,{children:t.jsxs(t.Fragment,{children:[t.jsxs(B,{children:[t.jsx(k,{isLoading:r,onSelected:s=>A(s,"second"),options:a==null?void 0:a.filter(s=>(s==null?void 0:s.value)!==(o==null?void 0:o.value)),title:"None",selected:{label:x==null?void 0:x.label,value:x==null?void 0:x.value}}),t.jsx(M,{rarity:i==null?void 0:i.avatarrarity,children:t.jsx("img",{ref:l,onError:R,src:x!=null&&x.image?x.image:w,alt:""})})]}),((a==null?void 0:a.length)??0)>0?t.jsx(b,{children:r?t.jsx(d,{className:"loading"}):(x==null?void 0:x.description)||"This candidate doesn't have description"}):t.jsx(b,{children:t.jsx("strong",{children:"No candidates to this planet"})})]})})]}),t.jsx(K,{onClick:W,disabled:n<=0||D().length===0,color:"solidBlue",noBorder:!0,rounded:!1,children:"Cast Vote"})]})},Pe=v.lazy(()=>N(()=>import("./bolt-51bfdd04.js"),["assets/bolt-51bfdd04.js","assets/index-98ed5c5a.js","assets/index-55fec1ff.css"])),Fe=v.lazy(()=>N(()=>import("./info-builder-e2ff2392.js"),["assets/info-builder-e2ff2392.js","assets/index-98ed5c5a.js","assets/index-55fec1ff.css"])),tt=()=>{var a,u;const{isSmall:e}=Z(),{data:r}=Le(),{data:n,isLoading:i}=$e("eyeke"),l=g(o=>o.user);async function c(){if(l){const o=await E(l==null?void 0:l.name),m=await $(l==null?void 0:l.name);if(!o||!m)return;g.setState({user:{...l,total_points:o==null?void 0:o.total_points,member:m==null?void 0:m.member}}),await C(2e3),Q()}}return I.useEffect(()=>{c()},[]),t.jsxs(ue,{children:[t.jsxs(fe,{children:[t.jsxs(me,{children:["Eyeke Voting",t.jsx(de,{href:"https://medium.com/mining-matters/feature-spotlight-voting-db0d7d9354e6",target:"_blank",children:t.jsx(Fe,{})})]}),t.jsx("img",{src:"/assets/background/bg-voting.jpeg",alt:""})]}),t.jsxs(ge,{children:[t.jsxs(he,{children:[(a=r==null?void 0:r.current_vote_power)==null?void 0:a.toLocaleString("en-US")," /"," ",(u=r==null?void 0:r.max_vote_power)==null?void 0:u.toLocaleString("en-US")," ",t.jsx(Pe,{type:2})]}),t.jsx(Me,{isLoading:i,candidates:n}),t.jsxs(we,{children:[t.jsx(y,{children:"Rank"}),t.jsx(y,{children:"Candidate"}),!e&&t.jsx(y,{children:"Wallet"}),t.jsx(y,{children:"Votes"})]}),i?t.jsx(oe,{}):(n==null?void 0:n.length)===0?t.jsx(te,{}):n==null?void 0:n.map((o,m)=>t.jsx(xe,{position:m,data:o},o.candidate_name))]})]})};export{tt as default};
