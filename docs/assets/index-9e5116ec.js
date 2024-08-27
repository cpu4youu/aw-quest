import{s as t,S as T,u as M,R as i,_ as a,h as x,ay as R,b as d,D as A,j as e,B as C,k as j,l as $}from"./index-d440dabc.js";import{u as D}from"./index-93aab64f.js";import{I as E}from"./index-d57163af.js";import"./index.esm-7a6d8713.js";import"./info-builder-50c075c2.js";import"./index-4b471552.js";import"./index-ea76b77d.js";import"./index.esm-d3c09165.js";const I=t("div",{d:"flex",align:"center",justify:"center",direction:"column",position:"relative",w:"100%",">button:last-child":{mt:"40px",h:"40px",w:"220px",".button":{fs:"24px",h:"40px",w:"100%"}},"@md":{py:"40px"},"@sm":{px:"0px"}}),L=t("div",{d:"flex",align:"center",justify:"center",direction:"column",position:"relative",h:"165px",w:"100%",zIndex:1,img:{zIndex:-1,position:"absolute",h:"165px",w:"100%",objectFit:"cover",inset:0}}),k=t("h2",{d:"flex",align:"center",justify:"center",color:"$white500",fs:"40px",ff:"$heading",textShadow:"0px 4px 4px rgba(0, 0, 0, 0.5)",w:"100%","@sm":{fs:"24px"}}),w=t("h2",{d:"flex",align:"center",justify:"center",maxW:"482px",color:"$white500",m:"30px 0px 30px",fs:"24px",ff:"$heading",textAlign:"center",textTransform:"uppercase",textShadow:"0px 4px 4px rgba(0, 0, 0, 0.5)",w:"100%","@sm":{fs:"18px"}}),y=t("p",{maxW:"982px",color:"$white500",m:"0px 0px 30px",fs:"20px",ff:"$heading",textAlign:"center",textShadow:"0px 4px 4px rgba(0, 0, 0, 0.5)",w:"100%",svg:{verticalAlign:"sub",w:"23px",h:"23px",mr:"3px"},"@sm":{fs:"18px"}}),O=t("div",{d:"flex",align:"flex-start",justify:"flex-start",direction:"column",w:"100%",maxW:"931px",padding:"10px 20px",br:"10px",border:"3px solid #00BAFF",variants:{isRevoked:{true:{borderColor:"$red500"}}}});t("h3",{fs:"20px",ff:"$body",color:"$white500","@sm":{fs:"14px"}});const W=t("p",{fs:"20px",ff:"$body",span:{fw:"$bold"},color:"$white500","@sm":{fs:"14px"}}),N=t("div",{d:"flex",align:"center",justify:"center",direction:"column",w:"100%",mt:"20px",px:"5px",">button":{marginTop:"20px",h:"40px"},"@sm":{gap:"10px"}}),P=t("div",{d:"flex",align:"center",justify:"center",gap:"10px",w:"100%",maxW:"650px","@sm":{flexWrap:"wrap",gap:"10px"}}),u=t("div",{d:"flex",align:"center",justify:"center",direction:"column",gap:"10px","@sm":{align:"flex-start"}}),m=t("span",{color:"$white500",textTransform:"uppercase",fs:"16px",ff:"$heading",textShadow:"0px 4px 4px rgba(0, 0, 0, 0.5)","@sm":{align:"flex-start",gap:"10px"}}),z=t("div",{d:"flex",align:"center",justify:"center",direction:"column",gap:"0px",w:"100%",mb:"20px",">div":{w:"100%",maxW:"450px",">div":{bg:"#D9D9D9",borderColor:"#697078","&:hover":{borderColor:"#697078"},input:{color:"black"}}},"@sm":{align:"flex-start",gap:"10px"}}),V=t("p",{color:"#848484",fs:"18px",ff:"$body",textShadow:"0px 4px 4px rgba(0, 0, 0, 0.5)","@sm":{textAlign:"center",w:"100%",fs:"16px"}}),B=t("div",{d:"flex",align:"center",justify:"center",direction:"column",gap:"10px",mt:"20px",w:"100%",maxW:"350px"}),F=t("div",{d:"flex",align:"center",justify:"center",gap:"20px","a:first-child>svg":{w:"40px",h:"40px"},w:"100%",maxW:"350px"}),G=t("span",{color:"#848484",fs:"16px",ff:"$body",textShadow:"0px 4px 4px rgba(0, 0, 0, 0.5)","@sm":{align:"flex-start",gap:"10px"}});async function U(n,r){const{executeTransaction:o}=M(),c=q(n,r);return!!await o(c)}function q(n,r){return{actions:[{account:T.ALIEN_WORLDS,name:"transfer",authorization:[{actor:n.name,permission:n.authorization.permission}],data:{from:n.name,memo:`signup${r?`,${r}`:""}`,quantity:"25.0000 TLM",to:"members.mc"}}]}}const J=i.lazy(()=>a(()=>import("./tlm-fcda5965.js"),["assets/tlm-fcda5965.js","assets/index-d440dabc.js","assets/index-55fec1ff.css"])),H=i.lazy(()=>a(()=>import("./star-fc69c705.js"),["assets/star-fc69c705.js","assets/index-d440dabc.js","assets/index-55fec1ff.css"])),Q=i.lazy(()=>a(()=>import("./discord-e20befc0.js"),["assets/discord-e20befc0.js","assets/index-d440dabc.js","assets/index-55fec1ff.css"])),X=i.lazy(()=>a(()=>import("./medium-5fe28e35.js"),["assets/medium-5fe28e35.js","assets/index-d440dabc.js","assets/index-55fec1ff.css"])),ie=()=>{var b;const n=x.useContext(R.UALContext),r=d(s=>s.user),o=d(s=>s.updateAuth),c=d(s=>s.updateMember),[f]=A(),v=f.get("ref"),l=x.useRef(null),[h,g]=x.useState(!1);async function S(){var s;try{if(g(!0),!r)return;const p=(s=l.current)==null?void 0:s.value;if(!await U(r,p))throw new Error("Error on sign up");await j(1e3),await o(n),await j(1e3),await c(),$.success("Sign up request sent successfully"),D.setState(_=>({..._,isSelectNewMember:!1}))}catch(p){console.log(p)}finally{g(!1)}}return e.jsxs(I,{children:[e.jsxs(L,{children:[e.jsx(k,{children:"Membership"}),e.jsx("img",{src:"/assets/background/bg-member.jpeg",alt:""})]}),e.jsx(w,{children:"JOIN MISSION CONTROL"}),e.jsx(y,{children:"By becoming a member you will instantly unlock:"}),e.jsxs(N,{children:[e.jsxs(P,{children:[e.jsxs(u,{children:[e.jsx(m,{children:"tool loaning"}),e.jsx("img",{src:"/assets/membership/tool_loaning.jpeg",alt:""})]}),e.jsxs(u,{children:[e.jsx(m,{children:"Mining features"}),e.jsx("img",{src:"/assets/membership/mining_features.jpeg",alt:""})]}),e.jsxs(u,{children:[e.jsx(m,{children:"Gain MC Points"}),e.jsx("img",{src:"/assets/membership/gain_mc_points.jpeg",alt:""})]})]}),e.jsx(w,{children:"RECRUIT A FRIEND"}),e.jsxs(y,{children:["If you were referred by another player, please enter that ","player's"," WAX wallet in the field below. As a thank you, this player will earn bonus MC Points ",e.jsx(H,{})," every time you spend them and receive TLM ",e.jsx(J,{})," each time you mine using Tool Loaning. This bonus begins once you become a verified member and lasts for 180 days. Rest assured, this comes at no additional cost to you."]}),e.jsxs(z,{children:[e.jsx(E,{ref:l,label:"",defaultValue:v||"",value:(b=l.current)==null?void 0:b.value}),e.jsx(V,{children:"The selection cannot be changed after the application"})]}),e.jsx(O,{children:e.jsxs(W,{children:[`Membership in Mission Control doesn't guarantee verification. Only accounts that comply
            with Alien Worlds' Terms of Service and are confirmed as the sole account in Mission
            Control will be verified. Regular checks are conducted by our team.`,e.jsx("br",{}),e.jsx("br",{}),`Membership can be revoked for inappropriate behavior or suspected ToS breaches. The
            membership fee is non-refundable to deter system exploitation.`]})}),e.jsx(C,{rounded:!1,noBorder:!0,color:"solidBlue",disabled:h,isLoading:h,onClick:S,children:"JOIN NOW (25 TLM)"})]}),e.jsxs(B,{children:[e.jsx(G,{children:"Get to know us on"}),e.jsxs(F,{children:[e.jsx("a",{href:"https://discord.gg/EmpMt7NDsV",target:"_blank",rel:"noreferrer",children:e.jsx(Q,{color:"white"})}),e.jsx("a",{href:"https://medium.com/mining-matters/welcome-to-mission-control-50369cdf7ebe",target:"_blank",rel:"noreferrer",children:e.jsx(X,{})})]})]})]})};export{ie as default};
