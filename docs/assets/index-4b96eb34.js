import{c as q,s as r,aw as Y,S as w,u as D,g as k,T as I,ab as K,l as M,ax as G,a as A,Q as N,q as R,b,h as T,j as t,B as Q,k as C,R as O,e as H,m as J}from"./index-d440dabc.js";import{S as $}from"./index-2e8cf479.js";import{B as z}from"./bolt-51549a99.js";import{N as X}from"./index-9b8cf60e.js";import{S as j}from"./styles-0d328b95.js";import{d as U}from"./defaultAvatar-b2015a5e.js";import"./index.esm-02c13ede.js";import"./index-0276742f.js";import"./index-660d587c.js";import"./index-9130a77a.js";import"./gradient-border-54de8113.js";import"./index.esm-d3c09165.js";const Z={type:"ranking",planet:{label:"Naron",value:"naron"}},m=q((e,s)=>({voteFilters:Z,updateVoteFilters:n=>ee(e,n),votePower:0,updateVotePower:n=>te(e,n),votePowerValue:0,updateVotePowerValue:n=>ne(e,n)}));function ee(e,s){e(n=>({...n,voteFilters:{...n.voteFilters,...s}}))}function te(e,s){e(n=>({...n,votePower:s}))}function ne(e,s){e(n=>({...n,votePowerValue:s}))}const se=r("div",{d:"flex",align:"center",justify:"center",direction:"column",mt:"25px",gap:"30px",w:"100%","@sm":{gap:"20px"}}),oe=r("div",{d:"flex",align:"center",justify:"center",gap:"25px"}),ae=r("div",{d:"flex",align:"center",justify:"center",gap:"10px",color:"$white500",fs:"30px",ff:"$heading",fw:"$bold",svg:{h:"30px",w:"30px"}}),ie=r("div",{d:"flex",align:"flex-start",justify:"center",gap:"30px",w:"100%",">div":{minWidth:"200px",gap:"0",">button":{w:"250px",h:"55px",br:"15px",maxW:"auto"},">div":{h:"55px",br:"15px"}},">button":{h:"55px",fs:"18px",padding:"0px"},input:{textAlign:"right"},"@sm":{h:"100px",gap:"10px",align:"center",direction:"column-reverse"}}),E=r("button",{d:"flex",align:"center",justify:"center",color:"$white500",fs:"24px",ff:"$heading",fw:"$bold",textShadow:"1px 1px 10px black",variants:{selected:{true:{color:"$yellow500"}}},"@sm":{fs:"16px"}});r("div",{d:"flex",align:"center",justify:"center",gap:"20px",".game":{w:"100px",h:"70px"}});async function re(e){const{executeTransaction:s}=D(),n=await le(e);return!!await s(n,{broadcast:!0,sign:!0})}async function le(e){const s=await Y(),n={actions:[{account:"cpu.mc",name:"paycpu",authorization:[{actor:"cpu.mc",permission:"cosign"}],data:{wallet:e.name,type:4}},{account:w.HQ_MU,name:"claimpower",authorization:[{actor:e.name,permission:e.authorization.permission}],data:{wallet:e.name,claim_user_cpu:!0}}]};return s||n.actions[0].authorization.unshift({actor:e.name,permission:"active"}),n}const ce=async e=>await k({options:{code:w.DAO_WORLDS,index_position:1,limit:"1000",scope:e,table:I.CANDIDATES}}),pe=async e=>await k({options:{code:w.HQ_MU,index_position:3,key_type:"i64",limit:"1000",lower_bound:e,upper_bound:e,scope:w.HQ_MU,table:I.CANDIDATES}}),B=K.create({baseURL:"https://api.alienworlds.io/v2/dao/"});B.interceptors.response.use(e=>e.data,e=>{var n,o;const s=((o=(n=e.response)==null?void 0:n.data)==null?void 0:o.message)||e.message;return M.error(s,G),Promise.reject(e)});const ue=e=>A({queryKey:[N.CANDIDATES,e],queryFn:()=>xe(e||"naron"),staleTime:1e3*60*60});async function L(){return await R.invalidateQueries(N.CANDIDATES)}async function xe(e){try{const s=await ce(e),n=await pe(e),o=await B.get(`${e}/candidates?walletId=aa`);return!n||!s?[]:fe(n,s,o)}catch(s){return console.log(s),null}}function fe(e,s,n){return s.filter(i=>i.is_active===1).map(i=>{const d=e.find(f=>f.wallet===i.candidate_name),p=n==null?void 0:n.find(f=>f.account===i.candidate_name);return{...i,...p,...d}}).sort((i,d)=>d.votes-i.votes)}const de=async()=>{const e=await k({options:{code:w.HQ_MU,index_position:1,limit:"1000",scope:w.HQ_MU,table:I.CONFIG_MEMBERS}});return(e==null?void 0:e[0])??null},ge=()=>A({queryKey:[N.VOTES],queryFn:()=>me(),staleTime:1e3*60*60,enabled:!!b.getState().user});async function W(){return await R.invalidateQueries(N.VOTES)}async function me(){const e=b.getState().user;if(!e)return 0;try{const s=await de(),n=m.getState().updateVotePower,o=new Date,i=Date.UTC(o.getUTCFullYear(),o.getUTCMonth(),o.getUTCDate(),o.getUTCHours(),o.getUTCMinutes(),o.getUTCSeconds(),o.getUTCMilliseconds())/1e3,p=new Date((e==null?void 0:e.last_vote)??o).getTime()/1e3,c=(i-p)/86400,h=((e==null?void 0:e.vote_power)??0)*Math.pow(1+(Number(s==null?void 0:s.decay_per_day)??0)*-1,Math.floor(c));return n(h),h}catch(s){return console.log(s),0}}const P=[{label:"Naron",value:"naron"},{label:"Neri",value:"nerix"},{label:"Eyeke",value:"eyeke"}],he=()=>{const{data:e}=ge(),s=b(l=>l.user),n=b(l=>l.updateMember),o=m(l=>l.voteFilters),u=m(l=>l.updateVotePowerValue),[i,d]=T.useState(o.planet),[p,f]=T.useState(0);function c(l,g){if(g){if(typeof g=="string"&&l==="type"){m.setState(v=>({...v,voteFilters:{...v.voteFilters,type:g}}));return}if(l==="planet"&&typeof g=="object"){d({value:g.value,label:g.label}),m.setState(v=>({...v,voteFilters:{...v.voteFilters,planet:{value:g.value,label:g.label}}}));return}}}function h(l){f(l.target.value),u(l.target.value)}function x(l){f(l),u(l)}async function S(){if(s)try{await re(s)&&(await C(1200),await n(),await C(800),await L(),await W(),M.success("Votes claimed successfully!"))}catch(l){console.log(l)}}return t.jsxs(se,{children:[t.jsxs(oe,{children:[t.jsx(E,{selected:o.type==="ranking",onClick:()=>c("type","ranking"),children:"Ranking"}),t.jsx(E,{selected:o.type==="vote",onClick:()=>c("type","vote"),children:"Vote"})]}),t.jsxs(ae,{children:[e==null?void 0:e.toLocaleString("en-US"),t.jsx(z,{})]}),t.jsx(ie,{children:o.type==="vote"?t.jsxs(t.Fragment,{children:[t.jsx($,{onSelected:l=>c("planet",l),options:P,title:"Planet",selected:{label:i==null?void 0:i.label,value:i==null?void 0:i.value}}),t.jsx(X,{type:"number",titleInside:"Votes",placeholder:"0",min:0,onChange:h,value:p,maxButton:!0,onClickMaxButton:()=>x(Math.floor(e??0))})]}):t.jsxs(t.Fragment,{children:[t.jsx($,{onSelected:l=>c("planet",l),options:P,title:"Planet",selected:{label:i==null?void 0:i.label,value:i==null?void 0:i.value}}),t.jsx(Q,{onClick:S,color:"gradientPink",children:"Claim Votes"})]})})]})},ve=r("div",{d:"flex",align:"center",justify:"center",direction:"column",position:"relative",gap:"20px",w:"100%",px:"40px",h2:{mt:"30px",color:"$white500",letterSpacing:"2px",textShadow:" 0px 4px 4px rgba(0, 0, 0, 0.5)"}}),we=()=>t.jsx(ve,{children:t.jsx("h2",{children:"No candidates to this planet"})}),je=r("div",{d:"flex",align:"center",justify:"center",direction:"column",position:"relative",gap:"20px",w:"100%",px:"40px",".nfts":{w:"100%",h:"70px",br:"10px"}}),be=()=>t.jsxs(je,{children:[t.jsx(j,{className:"nfts"}),t.jsx(j,{className:"nfts"}),t.jsx(j,{className:"nfts"}),t.jsx(j,{className:"nfts"})]}),ye=r("div",{d:"grid",gridTemplateColumns:"1.5fr 1.35fr 1.15fr 0.95fr",minH:"100px",bg:"rgba(3, 16, 32, 0.65)",w:"100%",padding:"5px 0","&:hover":{boxShadow:"0px 0px 15px rgba(255,255,255,0.5)"},"@sm":{padding:"0 5px 0 0",gap:"15px",gridTemplateColumns:"0.8fr 1.4fr 0.9fr"}}),Te=r("div",{d:"flex",align:"center",justify:"space-around",gap:"50px",margin:"0 auto 0 45px",img:{br:"50%",h:"70px",w:"70px"},variants:{position:{true:{img:{border:"1px solid #EBB309"}},false:{img:{border:"1px solid #5F5F5F"}}}},"@sm":{gap:"0px",margin:"0 auto 0 15px",img:{h:"40px",w:"40px"}}}),Se=r("div",{d:"flex",align:"center",justify:"center",color:"$white500",w:"40px",fs:"24px",fw:"$bold",ff:"$heading","@sm":{fs:"20px"}}),_e=r("span",{d:"flex",align:"center",justify:"center",textAlign:"center",color:"$white500",my:"auto",w:"100%",fw:"$bold",fs:"16px",ff:"$heading",lineHeight:"17px","@sm":{justify:"center",fs:"10px"}}),Ve=r("span",{d:"flex",align:"center",justify:"center",color:"$white500",gap:"5px",w:"100%",fs:"20px",ff:"$heading","@sm":{d:"none"}}),Ce=r("div",{d:"flex",align:"center",justify:"center",color:"$white500",gap:"10px",w:"100%",fs:"20px",ff:"$heading","@sm":{gap:"10px",fs:"10px"}}),$e=({data:e,position:s})=>{var u;const n=O.useRef(null);function o(){n!=null&&n.current&&(n.current.src=U)}return t.jsxs(ye,{children:[t.jsxs(Te,{position:s<2,children:[t.jsx("img",{ref:n,src:(e==null?void 0:e.image)??U,onError:o,alt:"avatar user image"}),t.jsx(Se,{children:s+1})]}),t.jsx(_e,{children:(e==null?void 0:e.givenName)??(e==null?void 0:e.candidate_name)}),t.jsx(Ve,{children:e==null?void 0:e.candidate_name}),t.jsxs(Ce,{children:[((u=e==null?void 0:e.votes)==null?void 0:u.toLocaleString("en-US"))??0,t.jsx(z,{})]})]})},Ne=H({"0%":{transform:"rotate(360deg)"},"100%":{transform:" rotate(0deg)"}}),ke=r("div",{d:"flex",align:"center",justify:"center",direction:"column",position:"relative",zIndex:"12",w:"100%",maxW:"1190px"});r("button",{d:"flex",align:"center",justify:"center",position:"absolute",right:"40px",top:"35px",animationName:`${Ne}`,animationDuration:"1s",animationTimingFunction:"ease",variants:{isFetching:{true:{animationIterationCount:"infinite"}}},"@sm":{svg:{w:"30px",h:"30px"}}});r("div",{d:"flex",align:"center",justify:"center",position:"absolute",right:"10px",top:"0px",zIndex:13,gap:"20px",img:{w:"30px"},"@sm":{position:"relative",order:1,mt:"20px"}});r("div",{d:"flex",align:"center",justify:"flex-start",direction:"column",zIndex:12,pt:"60px",pl:"20px",pr:"30px",w:"100%",bg:"url(/assets/background/border.png)",bgSize:"100% 100%",backgroundPosition:"center",bgRepeat:"no-repeat",position:"relative","@sm":{px:"10px"}});const Ie=r("h2",{d:"flex",align:"center",justify:"center",color:"$white500",textShadow:"0px 4px 4px rgba(0, 0, 0, 0.5)",fs:"40px",mt:"50px",w:"100%","@sm":{mt:"0px",fs:"26px"}}),Me=r("div",{d:"grid",gridTemplateColumns:"1.5fr 1.2fr 1fr 1fr",gridTemplateAreas:"'header header header header' 'content content content content'",mt:"50px",w:"100%","@sm":{gridTemplateColumns:"0.8fr 1.4fr 0.9fr"}});r("div",{d:"flex",align:"flex-start",justify:"flex-start",w:"100%"});const _=r("span",{color:"$white500",fs:"20px",ff:"$heading",fw:"$bold",textShadow:"1px 1px 10px black",textAlign:" center","&:nth-child(4)":{pr:"10px"},"@sm":{fs:"10px",fw:"$normal",w:"100% !important"}}),Ue=r("div",{d:"flex",align:"flex-start",justify:"flex-start",direction:"column",gridArea:"content",h:"calc(100vh - 390px)",overflowY:"auto",padding:"20px 20px 30px",gap:"12px",w:"100%",variants:{type:{vote:{"@sm":{h:"100%",padding:"10px 5px 30px"}},ranking:{"@sm":{h:"calc(100vh - 350px)",padding:"10px 5px 30px"}}}}}),Ee=H({"0%":{backgroundPosition:"0% 0%"},"100%":{backgroundPosition:"-135% 0%"}}),Pe=r("div",{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",w:"100%",gap:"30px"}),Fe=r("div",{display:"flex",alignItems:"flex-start",justifyContent:"center",w:"100%",gap:"30px","@sm":{flexWrap:"wrap"}}),F=r("div",{display:"flex",alignItems:"center",justifyContent:"flex-start",flexDirection:"column",padding:"40px",h:"100%",w:"100%",bg:"rgba(3, 16, 32, 0.65)",br:"22px","@sm":{h:"max-content",padding:"20px 10px"}}),V=r("div",{display:"flex",alignItems:"flex-start",justifyContent:"center",w:"450px",h:"230px",color:"$white500",mt:"20px",textAlign:"center",fs:"16px",ff:"$heading",maxH:"400px",overflow:"auto",strong:{fs:"26px"},".loading":{background:"linear-gradient( -90deg, rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0.15) ,rgba(255, 255, 255, 0.35))",backgroundSize:"400% 400%",animation:`${Ee} 1.2s ease-in-out infinite`,h:"100%",w:"100%"},"@sm":{w:"100%",fs:"12px"}});async function De(e,s,n,o){const{executeTransaction:u}=D(),i=Ae(e,s,n,o);return!!await u(i)}function Ae(e,s,n,o){return{actions:[{account:w.HQ_MU,name:"castvote",authorization:[{actor:e.name,permission:e.authorization.permission}],data:{wallet:e.name,new_candidates:s,planet:n,votes:o}}]}}const Re=({candidates:e,isLoading:s})=>{const n=m(a=>a.voteFilters),o=m(a=>a.votePowerValue),u=b(a=>a.user),i=b(a=>a.updateMember),d=(e==null?void 0:e.map(a=>({label:a.givenName||a.candidate_name,value:a.candidate_name,...a})))??[],p=[{label:"None",value:"none"},...d],f=p==null?void 0:p[0],[c,h]=T.useState(f),[x,S]=T.useState(f);function l(a,y){y==="first"&&h(a),y==="second"&&S(a)}function g(){return[c==null?void 0:c.value,x==null?void 0:x.value].filter(a=>a!=="none")}async function v(){const a=g();if(!u||!a||((a==null?void 0:a.length)??0)===0||!n.planet.value||!o)return null;try{await De(u,a,n.planet.value,Number(o))&&(await C(1200),await i(),await C(800),await L(),await W(),M.success("Vote successfully registered"))}catch(y){console.log(y)}}return T.useEffect(()=>{h(f),S(f)},[n]),t.jsxs(Pe,{children:[t.jsxs(Fe,{children:[t.jsx(F,{children:t.jsxs(t.Fragment,{children:[t.jsx($,{isLoading:s,onSelected:a=>l(a,"first"),options:p==null?void 0:p.filter(a=>(a==null?void 0:a.value)!==(x==null?void 0:x.value)),title:"None",selected:{label:c==null?void 0:c.label,value:c==null?void 0:c.value}}),((p==null?void 0:p.length)??0)>0?t.jsx(V,{children:s?t.jsx(j,{className:"loading"}):(c==null?void 0:c.description)||"This candidate doesn't have description"}):t.jsx(V,{children:t.jsx("strong",{children:"No candidates to this planet"})})]})}),t.jsx(F,{children:t.jsxs(t.Fragment,{children:[t.jsx($,{isLoading:s,onSelected:a=>l(a,"second"),options:p==null?void 0:p.filter(a=>(a==null?void 0:a.value)!==(c==null?void 0:c.value)),title:"None",selected:{label:x==null?void 0:x.label,value:x==null?void 0:x.value}}),((p==null?void 0:p.length)??0)>0?t.jsx(V,{children:s?t.jsx(j,{className:"loading"}):(x==null?void 0:x.description)||"This candidate doesn't have description"}):t.jsx(V,{children:t.jsx("strong",{children:"No candidates to this planet"})})]})})]}),t.jsx(Q,{onClick:v,disabled:o<=0||g().length===0,color:"gradientPink",children:"VOTE"})]})},Xe=()=>{const{isSmall:e}=J(),s=m(i=>i.voteFilters),n=m(i=>i.voteFilters),{data:o,isLoading:u}=ue(n==null?void 0:n.planet.value);return t.jsxs(ke,{children:[t.jsx(Ie,{children:"Voting"}),t.jsx(he,{}),t.jsxs(Me,{children:[s.type==="ranking"&&t.jsxs(t.Fragment,{children:[t.jsx(_,{children:"Rank"}),t.jsx(_,{children:"Candidate"}),!e&&t.jsx(_,{children:"Wallet"}),t.jsx(_,{children:"Votes"})]}),t.jsx(Ue,{type:s.type,children:s.type==="vote"?t.jsx(Re,{isLoading:u,candidates:o}):u?t.jsx(be,{}):(o==null?void 0:o.length)===0?t.jsx(we,{}):o==null?void 0:o.map((i,d)=>t.jsx($e,{position:d,data:i},i.candidate_name))})]})]})};export{Xe as default};
