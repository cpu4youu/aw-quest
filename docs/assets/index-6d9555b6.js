import{s as n,ab as u,ac as y,f as v,j as e,h as b,b as _,ad as $,k as S,e as F,M as Q,ae as k,i as C,p as w,af as A,o as W,ag as q}from"./index-a29f3f38.js";import{S as m}from"./styles-d826908f.js";import{S as N}from"./index-cb1b72e6.js";import{H as I}from"./index.esm-052a6e12.js";import"./index.esm-ae7ea788.js";import"./index-e4c1d2b6.js";import"./Combination-5dba634e.js";import"./gradient-border-e0008645.js";const L=n("div",{d:"flex",align:"center",justify:"center",direction:"column",mt:"25px",gap:"30px",w:"100%","@sm":{gap:"20px"}}),R=n("div",{d:"flex",align:"center",justify:"center",gap:"25px"}),j=n("button",{d:"flex",align:"center",justify:"center",color:"$white500",fs:"24px",ff:"$heading",fw:"$bold",textShadow:"1px 1px 10px black",variants:{selected:{true:{color:"$yellow500"}}},"@sm":{fs:"16px"}}),T=n("div",{d:"flex",align:"center",justify:"center",gap:"20px",">div":{minWidth:"200px"},"@sm":{">div":{minW:"200px",">button":{w:"100%",maxW:"auto"}}}}),G=n("div",{d:"flex",align:"center",justify:"center",gap:"20px",".game":{w:"100px",h:"70px"}}),z=()=>{var g;const t=u(l=>l.questFilters),x=u(l=>l.quests),{data:r,isLoading:f}=y(),[a,o]=v.useState(t.game),d=(g=r==null?void 0:r.filter(l=>x.some(c=>c.quest_collection===l.collection)))==null?void 0:g.map(l=>({...l,label:l.colrealname,value:l.collection}));function i(l,c){c&&(typeof c=="string"?u.setState(p=>({...p,questFilters:{...p.questFilters,type:l==="type"?c:p.questFilters.type}})):(o({value:c.value,label:c.label}),u.setState(p=>({...p,questFilters:{...p.questFilters,game:l==="game"?{value:c.value,label:c.label}:p.questFilters.game}}))))}const s=[{label:"All Games",value:"all"},...d||[]];return e.jsxs(L,{children:[e.jsxs(R,{children:[e.jsx(j,{selected:t.type==="all",onClick:()=>i("type","all"),children:"All"}),e.jsx(j,{selected:t.type==="available",onClick:()=>i("type","available"),children:"Available"}),e.jsx(j,{selected:t.type==="completed",onClick:()=>i("type","completed"),children:"Completed"})]}),e.jsx(T,{children:f?e.jsx(G,{children:e.jsx(m,{children:e.jsx("div",{className:"game"})})}):e.jsx(N,{onSelected:l=>i("game",l),options:s,title:"All Games",selected:{label:a==null?void 0:a.label,value:a==null?void 0:a.value}})})]})},D=n("div",{d:"flex",align:"center",justify:"center",direction:"column",position:"relative",gap:"20px",w:"100%",px:"40px",h2:{mt:"30px",color:"$white500",letterSpacing:"2px",textShadow:" 0px 4px 4px rgba(0, 0, 0, 0.5)"}}),H=()=>e.jsx(D,{children:e.jsx("h2",{children:"No quest listing"})}),E=n("div",{d:"flex",align:"center",justify:"center",direction:"column",position:"relative",gap:"20px",w:"100%",px:"40px",".nfts":{w:"100%",h:"70px",br:"10px"}}),M=()=>e.jsxs(E,{children:[e.jsx(m,{className:"nfts"}),e.jsx(m,{className:"nfts"}),e.jsx(m,{className:"nfts"}),e.jsx(m,{className:"nfts"})]}),P=n("div",{d:"grid",gridTemplateColumns:"1.5fr 1.35fr 1.15fr 0.95fr",minH:"100px",bg:"rgba(3, 16, 32, 0.65)",w:"100%",padding:"5px 0","&:hover":{boxShadow:"0px 0px 15px rgba(255,255,255,0.5)"},"@sm":{gridTemplateColumns:"1.1fr 1.5fr 1fr 0.9fr"}}),B=n("div",{d:"flex",align:"center",justify:"space-around",w:"100%",img:{h:"45px",w:"auto"},">a ":{w:"100%",maxW:"100px",h:"30px",fs:"16px",textDecoration:"none !important"}}),U=n("div",{d:"flex",align:"center",justify:"center",color:"$white500",w:"max-content",fw:"$bold",ff:"$heading"}),O=n("span",{d:"flex",align:"center",justify:"center",textAlign:"center",color:"$white500",my:"auto",w:"100%",fw:"$bold",fs:"16px",ff:"$heading",lineHeight:"17px","@sm":{justify:"flex-start",fs:"10px"}}),V=n("span",{d:"flex",align:"center",justify:"center",color:"$white500",gap:"5px",w:"100%",fs:"20px",ff:"$heading",svg:{w:"35px"},"@sm":{fs:"12px",svg:{w:"15px"}}}),Y=n("div",{d:"flex",align:"center",justify:"center",color:"$white500",gap:"10px",w:"100%",fs:"20px",ff:"$heading","@sm":{fs:"12px"}}),J=({data:t})=>{var a;const{isSmall:x}=b(),r=_(o=>o.user),f=(a=r==null?void 0:r.userWeekly)==null?void 0:a.quest_id_array.reduce((o,d)=>o+=Number(d)===t.quest_id?1:0,0);return e.jsxs(P,{children:[e.jsxs(B,{children:[e.jsx($,{to:t==null?void 0:t.game_website,children:e.jsx("img",{src:t==null?void 0:t.game_logo_url,alt:""})}),!x&&e.jsx(U,{children:t.game_real_name})]}),e.jsx(O,{children:t.quest_description}),e.jsxs(V,{children:[f??0,"/",t.quest_max_completions," "]}),e.jsxs(Y,{children:[t.quest_points_per_completion,e.jsx(S,{})]})]})},K=F({"0%":{transform:"rotate(360deg)"},"100%":{transform:" rotate(0deg)"}}),X=n("div",{d:"flex",align:"center",justify:"center",direction:"column",position:"relative",zIndex:"12",w:"100%",maxW:"1190px"}),Z=n("button",{d:"flex",align:"center",justify:"center",position:"absolute",right:"40px",top:"35px",animationName:`${K}`,animationDuration:"1s",animationTimingFunction:"ease",variants:{isFetching:{true:{animationIterationCount:"infinite"}}},"@sm":{svg:{w:"30px",h:"30px"}}});n("div",{d:"flex",align:"center",justify:"center",position:"absolute",right:"10px",top:"0px",zIndex:13,gap:"20px",img:{w:"30px"},"@sm":{position:"relative",order:1,mt:"20px"}});n("div",{d:"flex",align:"center",justify:"flex-start",direction:"column",zIndex:12,pt:"60px",pl:"20px",pr:"30px",w:"100%",bg:"url(/assets/background/border.png)",bgSize:"100% 100%",backgroundPosition:"center",bgRepeat:"no-repeat",position:"relative","@sm":{px:"10px"}});n("h2",{d:"flex",align:"center",justify:"center",color:"$white500",textShadow:"0px 4px 4px rgba(0, 0, 0, 0.5)",fs:"40px",w:"100%","@sm":{fs:"26px"}});const ee=n("div",{d:"grid",gridTemplateColumns:"1.5fr 1.2fr 1fr 1fr",gridTemplateAreas:"'header header header header' 'content content content content'",mt:"20px",w:"100%","@sm":{gridTemplateColumns:"1fr 1.2fr 1fr 1fr"}});n("div",{d:"flex",align:"flex-start",justify:"flex-start",w:"100%"});const h=n("span",{color:"$white500",fs:"20px",ff:"$heading",fw:"$bold",textShadow:"1px 1px 10px black",textAlign:" center","&:nth-child(4)":{pr:"10px"},"@sm":{fs:"10px",fw:"$normal",w:"100% !important"}}),te=n("div",{d:"flex",align:"flex-start",justify:"flex-start",direction:"column",gridArea:"content",h:"calc(100vh - 390px)",overflowY:"auto",padding:"20px 20px 30px",mt:"18px",gap:"12px",w:"100%","@sm":{h:"calc(100vh - 350px)",padding:"10px 5px 30px"}}),pe=()=>{const t=u(i=>i.questFilters),x=u(i=>i.quests),r=Q(i=>i.currentUserWeekly),{isFetching:f,isLoading:a}=k(),o=v.useMemo(()=>{var i;return(i=x==null?void 0:x.filter(s=>C(new Date(s.quest_end_date),w)))==null?void 0:i.map(s=>{const g=A(new Date(w),{start:new Date(s.quest_start_date),end:new Date(s.quest_end_date)}),l=r==null?void 0:r.quest_id_array.reduce((c,p)=>c+=p===(s==null?void 0:s.quest_id)?1:0,0);return{...s,isActive:g,completedQuests:l}}).filter(s=>t.type==="available"&&t.game.value==="all"?s.isActive&&s.completedQuests!==s.quest_max_completions:t.type==="available"&&t.game.value===s.quest_collection?s.isActive&&t.game.value===s.quest_collection&&s.completedQuests!==s.quest_max_completions:t.type==="all"&&t.game.value===s.quest_collection?t.game.value===s.quest_collection:t.type==="all"&&t.game.value==="all"?!0:t.type==="completed"&&t.game.value===s.quest_collection?s.completedQuests===s.quest_max_completions&&t.game.value===s.quest_collection:t.type==="completed"&&t.game.value==="all"?s.completedQuests===s.quest_max_completions:!1)},[r,t,x]);function d(){W(),q()}return v.useEffect(()=>{d()},[]),e.jsxs(X,{children:[e.jsx(Z,{isFetching:f,onClick:d,children:e.jsx(I,{color:"#FF01FF",size:40})}),e.jsx(z,{}),e.jsxs(ee,{children:[e.jsx(h,{children:"Game"}),e.jsx(h,{children:"Description"}),e.jsx(h,{children:"Completions"}),e.jsx(h,{children:"Questing Points"}),e.jsx(te,{children:a?e.jsx(M,{}):(o==null?void 0:o.length)===0?e.jsx(H,{}):o==null?void 0:o.map(i=>e.jsx(J,{data:i},i.quest_id))})]})]})};export{pe as default};
