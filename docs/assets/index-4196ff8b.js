import{s as o,B as W,h as a,aA as M,j as t,S as _,u as q,y as U,m as H,x as D,b as A,aE as B,aF as E,l as F}from"./index-1c2b050a.js";import{N as O}from"./index-7c0fb944.js";import{$ as Q,c as N,d as X,g as G,e as V}from"./index-d1e26790.js";import{e as J}from"./index-0ebe5245.js";import{G as K}from"./gradient-border-8b3aed06.js";import{S as P}from"./index-3a554073.js";import"./index.esm-29cc6fbb.js";import"./index.esm-08ba3a32.js";import"./index-45355aef.js";const Y=o("div",{d:"flex",align:"center",justify:"center",direction:"column",position:"relative",w:"100%","@sm":{px:"0px"}}),Z=o("div",{d:"flex",align:"center",justify:"center",direction:"column",position:"relative",h:"165px",w:"100%",zIndex:1,img:{zIndex:-1,position:"absolute",h:"165px",w:"100%",objectFit:"cover",inset:0}}),ee=o("h2",{d:"flex",align:"center",justify:"center",color:"$white500",fs:"40px",ff:"$heading",textShadow:"0px 4px 4px rgba(0, 0, 0, 0.5)",w:"100%","@sm":{fs:"24px"}}),te=o("div",{gap:"40px",w:"100%",maxWidth:"1200px",mt:"40px",px:"15px",d:"grid",gridTemplateColumns:"1fr 1fr",gridTemplateAreas:"'user level' 'user level' 'stats stats'","@sm":{gridTemplateAreas:"'user user' 'level level' 'stats stats'"}}),ne=o("form",{d:"flex",align:"flex-start",justify:"flex-start",direction:"column",gridArea:"user",gap:"15px",bg:"rgba(255, 255, 255, 0.03)",br:"10px",padding:"20px 35px",w:"100%",label:{color:"$white500",fs:"16px",fw:"$normal"},".select":{w:"360px","[data-radix-popper-content-wrapper]":{w:"inherit"},">button":{w:"360px"}},variants:{disabled:{true:{pointerEvents:"none",position:"relative","&::after":{content:"Membership Not Active",position:"absolute",top:"0",left:"0",display:"flex",align:"center",justify:"center",color:"$white500",ff:"$heading",fs:"32px",textAlign:"center",textShadow:"0px 0px 10px rgba(255, 255, 255, .5)",w:"100%",h:"100%",bg:"rgba(0, 0, 0, .7)",br:"22px",zIndex:"1","@sm":{fs:"24px"}}}}},"@md":{">div":{maxW:"100%"}},"@sm":{padding:"20px 10px",label:{fs:"12px"},".select":{w:"250px","[data-radix-popper-content-wrapper]":{w:"inherit"}}}}),I=o(W,{w:"100%",maxW:"360px",h:"50px",mt:"20px",fs:"20px",ff:"$body","@md":{maxW:"100%"}}),R=o("h2",{d:"flex",align:"center",justify:"center",color:"$white500",ff:"$heading",fs:"24px",textAlign:"left"});o("div",{d:"flex",align:"flex-start",justify:"center",direction:"column",color:"$white500",textAlign:"left"});o("p",{d:"flex",align:"center",justify:"center",color:"$white500",fs:"12px",ff:"$heading"});o("p",{d:"flex",align:"center",justify:"center",mt:"0",color:"$blue100",textTransform:"uppercase",fs:"24px",ff:"$heading"});const re=o("div",{d:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px",w:"100%","@sm":{gridTemplateColumns:"1fr"}}),j=o("div",{d:"flex",align:"flex-start",justify:"flex-start",direction:"column",color:"$white500",w:"100%","@sm":{direction:"row"}}),S=o("div",{d:"flex",align:"flex-start",justify:"flex-start",color:"$white500",ff:"$heading",fs:"14px",w:"100%","@md":{fs:"12px"},"@sm":{fs:"11px",fw:"$bold"}}),y=o("div",{d:"flex",align:"flex-start",justify:"flex-start",ff:"$heading",fs:"24px",w:"100%",svg:{m:"auto 5px",w:"20px",h:"20px"},"@md":{fs:"20px"},"@sm":{justify:"space-between",w:"95px",fw:"$bold",fs:"10px",svg:{w:"15px",h:"15px"}}}),se=o("div",{d:"flex",align:"flex-start",justify:"flex-start",direction:"column",gridArea:"level",gap:"15px",bg:"rgba(255, 255, 255, 0.03)",br:"10px",minH:"290px",padding:"20px 35px",w:"100%","@sm":{padding:"20px"}}),oe=o("div",{d:"flex",align:"center",justify:"center",direction:"column",w:"100%"}),ie=o("div",{d:"flex",align:"center",justify:"center",position:"relative",mt:"5px",w:"100%",h:"20px",br:"5px ",bg:"rgba(121, 121, 121, 0.59)"}),ae=o("div",{d:"flex",align:"center",justify:"center",position:"absolute",left:"0px",h:"20px",br:"5px ",bg:"#00BAFF"}),ce=o("div",{d:"flex",align:"center",justify:"center",direction:"column",ff:"$heading",fs:"16px",mr:"auto",mt:"10px",color:"$white500","@md":{fs:"14px"},"@sm":{fs:"12px"}});function le(r){const i=a.useRef({value:r,previous:r});return a.useMemo(()=>(i.current.value!==r&&(i.current.previous=i.current.value,i.current.value=r),i.current.previous),[r])}const L="Switch",[de,Pe]=Q(L),[pe,xe]=de(L),fe=a.forwardRef((r,i)=>{const{__scopeSwitch:s,name:e,checked:c,defaultChecked:d,required:x,disabled:f,value:u="on",onCheckedChange:h,...g}=r,[p,m]=a.useState(null),k=X(i,n=>m(n)),$=a.useRef(!1),w=p?!!p.closest("form"):!0,[b=!1,v]=G({prop:c,defaultProp:d,onChange:h});return a.createElement(pe,{scope:s,checked:b,disabled:f},a.createElement(N.button,M({type:"button",role:"switch","aria-checked":b,"aria-required":x,"data-state":z(b),"data-disabled":f?"":void 0,disabled:f,value:u},g,{ref:k,onClick:V(r.onClick,n=>{v(l=>!l),w&&($.current=n.isPropagationStopped(),$.current||n.stopPropagation())})})),w&&a.createElement(he,{control:p,bubbles:!$.current,name:e,value:u,checked:b,required:x,disabled:f,style:{transform:"translateX(-100%)"}}))}),ue="SwitchThumb",be=a.forwardRef((r,i)=>{const{__scopeSwitch:s,...e}=r,c=xe(ue,s);return a.createElement(N.span,M({"data-state":z(c.checked),"data-disabled":c.disabled?"":void 0},e,{ref:i}))}),he=r=>{const{control:i,checked:s,bubbles:e=!0,...c}=r,d=a.useRef(null),x=le(s),f=J(i);return a.useEffect(()=>{const u=d.current,h=window.HTMLInputElement.prototype,p=Object.getOwnPropertyDescriptor(h,"checked").set;if(x!==s&&p){const m=new Event("click",{bubbles:e});p.call(u,s),u.dispatchEvent(m)}},[x,s,e]),a.createElement("input",M({type:"checkbox","aria-hidden":!0,defaultChecked:s},c,{tabIndex:-1,ref:d,style:{...r.style,...f,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function z(r){return r?"checked":"unchecked"}const ge=fe,me=o("div",{d:"flex",align:"flex-start",justify:"flex-start",direction:"column",gap:"5px"}),$e=o("label",{fs:"12px",ff:"$heading",color:"$white500"}),we=o(ge,{all:"unset",width:88,height:35,backgroundColor:"#131313",borderRadius:"9999px",position:"relative",boxShadow:"0 2px 10px $black300",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",svg:{"&:first-of-type":{position:"absolute",inset:"0",zIndex:1,w:"100%",h:"100%",rect:{strokeWidth:"3px",width:"calc(100% - 3px) !important",height:"calc(100% - 3px) !important",x:"1.5px",y:"1.5px"}}}}),ve=o(be,{display:"block",width:21,height:21,borderRadius:"9999px",boxShadow:"0 2px 2px $black300",transition:"all 0.3s",transform:"translateX(5px)",willChange:"transform",backgroundColor:"#d3d3d3",'&[data-state="checked"]':{transform:"translateX(60px)",backgroundColor:"#FFB31F",marginRight:"2px"}}),je=({label:r,...i})=>t.jsxs(me,{children:[t.jsx($e,{children:r}),t.jsxs(we,{...i,children:[t.jsx(K,{}),t.jsx(ve,{})]})]});async function Se(r,i,s){const{executeTransaction:e}=q(),c=ye(r,i,s);return!!await e(c)}function ye(r,i,s){return{actions:[{account:_.FEDERATION,name:"settag",authorization:[{actor:r.name,permission:r.requestPermission}],data:{account:r.name,tag:i}},{account:_.MEMBERS_MC,name:"setcpu",authorization:[{actor:r.name,permission:r.requestPermission}],data:{wallet:r.name,freecpu:s}}]}}const C=[{value:"gold",label:"Normal Mining"},{value:"green",label:"Favorite Lands By Shards"},{value:"orange",label:"Favorite Lands By TLM"},{value:"blue",label:"Mine Maximizer"},{value:"red",label:"Tool Loaning"}],Ie=()=>{var b,v;const{unAuthorize:r}=U(),{isSmall:i}=H(),{data:s}=D(),e=A(n=>n.user),c=s==null?void 0:s.find(n=>n.level===(e==null?void 0:e.level)),[d,x]=a.useState(!0),[f,u]=a.useState(C.find(n=>n.value===(e==null?void 0:e.miningType))??C[1]),[h,g]=a.useState(void 0),p=a.useMemo(()=>(s==null?void 0:s.findIndex(n=>n.level===(e==null?void 0:e.level)))??0,[s,e==null?void 0:e.level]),m=((e==null?void 0:e.experience)??0)/((c==null?void 0:c.xp_to_level_up)??100)*100;async function k(n){n.preventDefault();const l={name:n.target.input.value};if(!e)return null;try{await Se(e,l.name,d?1:0)&&F.success("Settings updated successfully")}catch{F.error("Error updating settings")}}function $(n){A.setState(l=>({...l,user:l.user?{...l.user,miningType:(n==null?void 0:n.value)??"gold"}:null})),u(n??C[1]),localStorage.setItem("miningType",(n==null?void 0:n.value)??"gold")}function w(n){g(n);const l=E.findIndex(T=>T.value===(n==null?void 0:n.value)).toString();localStorage.setItem(`${B}_server`,l??"0"),window.location.reload()}return a.useEffect(()=>{const n=localStorage.getItem(`${B}_server`),l=E[Number(n??0)];g(l),x((e==null?void 0:e.freecpu)===1)},[e]),t.jsxs(Y,{children:[t.jsxs(Z,{children:[t.jsx(ee,{children:"User Area"}),t.jsx("img",{src:"/assets/background/bg-user-area.jpeg",alt:""})]}),t.jsxs(te,{children:[t.jsxs(ne,{disabled:!(e!=null&&e.member),onSubmit:k,children:[t.jsx(R,{children:"User Settings"}),t.jsx(O,{label:"Player Tag",defaultValue:e==null?void 0:e.playertag,borderColor1:"#FFB31F",borderColor2:"#FFB31F"}),t.jsx(je,{id:"minersUnion",checked:d,onCheckedChange:()=>x(!d),label:"Help Mission control run smoothly, receive CPU in return"}),t.jsx(P,{className:"select",title:"Tool Loaning",label:"Mining button type in header",selected:f,options:C,onSelected:$}),t.jsx(P,{isLoading:!h,className:"select",title:"Tool Loaning",label:"API Endpoint",selected:h,options:E,onSelected:w}),t.jsx(I,{color:"solidBlue",rounded:!1,type:"submit",children:"Save"})]}),t.jsxs(se,{children:[t.jsx(R,{children:"Player Level"}),t.jsxs(re,{children:[t.jsxs(j,{children:[t.jsx(S,{children:"Current Level"}),t.jsx(y,{children:(e==null?void 0:e.level)??1})]}),t.jsxs(j,{children:[t.jsx(S,{children:"Questing Multiplier"}),t.jsx(y,{children:Number(((b=s==null?void 0:s[p])==null?void 0:b.quest_power)??0).toFixed(2)})]}),t.jsxs(j,{children:[t.jsx(S,{children:"Next Level"}),t.jsx(y,{children:((e==null?void 0:e.level)??1)+1})]}),t.jsxs(j,{children:[t.jsx(S,{children:"Questing Multiplier"}),t.jsx(y,{children:Number(((v=s==null?void 0:s[p+1])==null?void 0:v.quest_power)??0).toFixed(2)})]})]}),t.jsxs(oe,{children:[t.jsxs(ce,{children:[(e==null?void 0:e.experience)??0,"/",(c==null?void 0:c.xp_to_level_up)??0," experience to level up"]}),t.jsx(ie,{children:t.jsx(ae,{style:{width:`${m}%`}})})]}),i&&t.jsx(I,{color:"solidBlue",rounded:!1,onClick:r,children:"Logout"})]})]})]})};export{Ie as default,C as options};