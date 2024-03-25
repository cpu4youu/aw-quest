import{s as l,e as X,S as D,u as ee,j as t,W as ge,V as we,U as be,b as R,P as y,f as x,m as v,Z as ve,_ as je,$ as Le,a1 as C,a3 as E,a2 as Q,d as T,a0 as Z,a5 as ye,v as Y,B as j,w as Ce,l as Te,L as O,n as S}from"./index-eb91888a.js";import{u as Se}from"./index-51604f6e.js";import{a as Me}from"./index.esm-17f2e4a1.js";import{S as ke}from"./shards-ac8f9d0c.js";import{u as Re,o as F,e as Ee}from"./execute-equip-tools-contract-ee116175.js";import{o as Fe}from"./inventory-query-e5de507b.js";import{e as We}from"./execute-equip-land-contract-2fe71a04.js";import"./info-builder-63fa07f3.js";const _e=l("div",{d:"flex",align:"center",justify:"flex-start",direction:"column",w:"100%",maxW:"1190px",padding:"0 10px",">svg":{mr:"auto",mt:"20px",cursor:"pointer"}}),J=l("h3",{d:"flex",justify:"space-between",w:"100%",mr:"auto",mt:"25px",gap:"10px",fs:"29px",fw:"$bold",ff:"$heading",color:"$white500",">button":{h:"25px",div:{fs:"16px",border:"none",br:"10px"}},"@sm":{fs:"18px",flexWrap:"wrap",span:{w:"100%"}}}),K=l("h4",{w:"100%",textAlign:"center",fs:"22px",fw:"$normal",ff:"$heading",color:"$white500","@sm":{fs:"18px"}}),Ie=l("div",{d:"flex",align:"center",justify:"flex-start",flexWrap:"wrap",gap:"20px",mt:"30px",mb:"30px",w:"100%","@sm":{justify:"center"}}),$e=l("div",{d:"flex",align:"center",justify:"center",w:"100%",variants:{isSelected:{true:{">div:last-child":{border:"3px solid #00BAFF"}}}},"@sm":{flexWrap:"wrap",justify:"center"}}),Ae=l("div",{d:"flex",align:"center",justify:"flex-start",gap:"6px",w:"100%",maxW:"260px"}),Pe=l("div",{w:"82px",h:"82px",border:"3px solid $black500",overflow:"hidden",br:"5px",">img":{w:"82px",h:"82px",objectFit:"cover",objectPosition:"center 3px",scale:"1.9"},variants:{rarity:{Abundant:{borderColor:"#4c4c4c"},Common:{borderColor:"#000000"},Rare:{borderColor:"#3d74e9"},Epic:{borderColor:"#8719f0"},Legendary:{borderColor:"#da992e"},Mythical:{borderColor:"#d20066"}}}}),Ne=l("div",{d:"flex",align:"center",justify:"space-between",br:"8px",padding:"20px",bg:"rgba(255, 255, 255, 0.06)",w:"100%",">button":{h:"25px",br:"10px","&:first-child":{minW:"140px"},div:{fs:"16px",border:"none",br:"10px"}},"@sm":{mt:"10px",padding:"10px",flexWrap:"wrap",justify:"center",gap:"5px",">button":{w:"100%",maxW:"100%",minW:"100%"}}}),Ve=l("div",{d:"flex",align:"flex-start",justify:"center",direction:"column",margin:"auto",w:"100%","@md":{d:"flex",padding:"0 20px",flexWrap:"wrap"},"@sm":{align:"center",padding:"0px"}}),Be=X({"0%":{rotate:"0deg"},"100%":{rotate:"360deg"}}),qe=l("button",{variants:{isLoading:{true:{svg:{animation:`${Be} 1.2s ease-in-out infinite`}}}}}),Ue=l("div",{d:"flex",align:"center",justify:"flex-start",flexWrap:"wrap",gap:"56px",mt:"65px",w:"100%","@md":{d:"flex",justify:"center",padding:"0 20px"},"@sm":{padding:"0 10px"}}),ze=l("div",{d:"flex",align:"flex-start",justify:"flex-start",direction:"column",position:"relative",maxW:"250px",">button":{h:"40px",minH:"40px",minW:"100%",br:"10px",">div":{fs:"14px",border:"none",br:"10px"}},">div:nth-child(3)":{mt:"3px"},"@sm":{w:"100%",maxW:"unset"}}),Ge=l("div",{d:"flex",align:"center",justify:"center",overflow:"hidden",h:"140px",w:"100%",borderRadius:"8px",border:"3px solid rgba(255, 255, 255, 0.06)",">img":{objectFit:"cover",h:"140px",w:"100%"},"@sm":{w:"100%",">img:nth-child(2)":{objectFit:"cover",h:"140px",w:"100%"}}}),W=l("div",{d:"flex",span:{d:"flex",align:"center",justify:"center",gap:"7px",fs:"16px",ff:"$body",color:"$white500","&:nth-child(2)":{ml:"7px"},svg:{w:"20px",h:"20px"}}}),He=l("img",{w:"82px",h:"82px",position:"absolute",left:"-30px",top:"-30px",zIndex:1,"@sm":{left:"-15px",top:"-20px"}}),Qe=l("div",{d:"flex",align:"center",justify:"center",direction:"row",mb:"5px",w:"100%",">button":{h:"25px",minH:"40px",minW:"unset",w:"100%",div:{fs:"16px",border:"none",br:"10px"}},"@sm":{w:"100%",">button":{w:"100%",maxW:"unset",minW:"unset"}}}),se=X({"0%":{backgroundPosition:"0% 0%"},"100%":{backgroundPosition:"-135% 0%"}}),Ze=l("div",{d:"flex",w:"100%",h:"90px",background:"linear-gradient( -90deg, rgba(255,255,255, .05), rgba(255,255,255, 0.07) ,rgba(255,255,255, .05))",br:"10px",backgroundSize:"400% 400%",animation:`${se} 1.2s ease-in-out infinite`,"@sm":{h:"215px",w:"100%"}}),Ye=l("div",{d:"flex",w:"250px",h:"280px",background:"linear-gradient( -90deg, rgba(255,255,255, .05), rgba(255,255,255, 0.07) ,rgba(255,255,255, .05))",br:"10px",backgroundSize:"400% 400%",animation:`${se} 1.2s ease-in-out infinite`,"@sm":{w:"100%",h:"275px"}});async function Oe(a,d){const{executeTransaction:n}=ee(),g=Je(a,d);return!!await n(g)}function Je(a,d){return{actions:[{account:D.MEMBERS_MC,name:"remfavtools",authorization:[{actor:a.name,permission:a.requestPermission}],data:{wallet:a.name,asset_ids:d}}]}}async function Ke(a,d){const{executeTransaction:n}=ee(),g=Xe(a,d);return!!await n(g)}function Xe(a,d){return{actions:[{account:D.MEMBERS_MC,name:"remfavland",authorization:[{actor:a.name,permission:a.requestPermission}],data:{wallet:a.name,asset_id:d}}]}}function De(){return t.jsx("svg",{width:"26",height:"36",viewBox:"0 0 26 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M12.9993 5.4V9C11.217 8.99681 9.47379 9.52292 7.99079 10.5116C6.50779 11.5003 5.35175 12.9071 4.66923 14.5537C3.98672 16.2002 3.80846 18.0123 4.15706 19.7602C4.50567 21.5082 5.36543 23.1133 6.62735 24.372L4.08935 26.91C2.32703 25.1479 1.12685 22.9027 0.640598 20.4584C0.154349 18.0141 0.403873 15.4805 1.35761 13.1781C2.31135 10.8756 3.92646 8.90769 5.99869 7.52319C8.07092 6.1387 10.5072 5.39982 12.9993 5.4ZM21.9093 9.09C23.6717 10.8521 24.8719 13.0973 25.3581 15.5416C25.8443 17.9859 25.5948 20.5195 24.6411 22.8219C23.6873 25.1244 22.0722 27.0923 20 28.4768C17.9278 29.8613 15.4915 30.6002 12.9993 30.6V27C14.7817 27.0032 16.5249 26.4771 18.0079 25.4884C19.4909 24.4996 20.6469 23.0929 21.3295 21.4463C22.012 19.7998 22.1902 17.9877 21.8416 16.2398C21.493 14.4918 20.6333 12.8867 19.3713 11.628L21.9093 9.09ZM12.9993 36L5.79935 28.8L12.9993 21.6V36ZM12.9993 14.4V0L20.1993 7.2L12.9993 14.4Z",fill:"white"})})}const cs=()=>{var P,N;const{data:a,isLoading:d}=Re(),{data:n,isLoading:g}=ge(),{data:u,isLoading:te}=we(),{data:L,isLoading:ne}=be(),o=R(e=>e.user),m=y(e=>e.nonce),ae=y(e=>e.updateHashExpire),_=y(e=>e.isCalculating),I=y(e=>e.updateIsCalculating),[f,p]=x.useState(!1),[,M]=x.useState(!1),re=x.useCallback(e=>{var r;return(((r=n==null?void 0:n.userTools)==null?void 0:r.reduce((i,c)=>i+(c==null?void 0:c.nft_power),0))??0)*(e/10)},[n==null?void 0:n.userTools]);function ie(){Se.setState({selectedPage:"main"})}const $=(P=a==null?void 0:a.favoriteTools)==null?void 0:P.findIndex(e=>e.every(s=>{var r;return(r=n==null?void 0:n.userTools)==null?void 0:r.some(i=>i.asset_id===s.assetId)}));async function oe(e){if(o){p(!0);try{const s=e.map(({assetId:i})=>i).join(",");if(await Ke(o,s)){await v(1e3);const i=await O(o==null?void 0:o.name);R.setState(c=>({...c,user:c.user?{...c.user,...i}:null})),await F(),S.success("Land removed from favorites")}}catch(s){console.error(s)}finally{p(!1)}}}async function ce(e){if(o){p(!0);try{const s=e.map(({assetId:i})=>i).join(",");if(await Oe(o,s)){await v(1e3);const i=await O(o==null?void 0:o.name);R.setState(c=>({...c,user:c.user?{...c.user,...i}:null})),await F(),S.success("Current Land removed from favorites")}}catch(s){console.error(s)}finally{p(!1)}}}async function le(e){if(!(!(n!=null&&n.userTools)||!o)){p(!0);try{const s=e==null?void 0:e.map(({assetId:i})=>Number(i));await Ee(o,s)&&(await v(1e3),A(),await Fe("tool.worlds"),S.success("Tools added to current setup"))}catch(s){console.error(s)}finally{p(!1)}}}async function de(e){if(o){p(!0);try{await We(o,e)&&(await v(1e3),await C(),S.success("Land added to current setup"))}catch(s){console.error(s)}finally{p(!1)}}}async function ue(){await Z(),await C()}const fe=x.useCallback(e=>{var i;const s=L==null?void 0:L.find(c=>c.landtype_id===e);return(((i=n==null?void 0:n.userTools)==null?void 0:i.reduce((c,h)=>c+(h==null?void 0:h.nft_power),0))??0)*((s==null?void 0:s.nft_power_mod)??0)/100},[n==null?void 0:n.userTools,L]),pe=x.useCallback(async e=>{p(!0);try{if(I(!0),await v(500),!o)return null;if(!(m!=null&&m.rand_str)){await ve();const i=new Date;ae(i.setMinutes(i.getMinutes()+1))}const s=(u==null?void 0:u.current_land)===e?void 0:e;await je(o,s)&&(await Le(o==null?void 0:o.name),await ue(),await C())}catch(s){console.log(s)}finally{I(!1),p(!1)}},[o,u,m==null?void 0:m.rand_str]),w=x.useCallback(e=>{var c,h,V,B,q,U,z,G,H;const s=(e??0)/10;if(((c=n==null?void 0:n.userTools)==null?void 0:c.length)===1){const b=s*(((V=(h=n==null?void 0:n.userTools)==null?void 0:h[0])==null?void 0:V.delay)??0);return E(b,n,u)}const r=(B=n==null?void 0:n.userTools)==null?void 0:B.sort((b,he)=>he.delay-b.delay);if(((q=n==null?void 0:n.userTools)==null?void 0:q.length)===2){const b=s*((((U=r==null?void 0:r[0])==null?void 0:U.delay)??0)+(((z=r==null?void 0:r[1])==null?void 0:z.delay)??0)/2);return E(b,n,u)}const i=s*((((G=r==null?void 0:r[0])==null?void 0:G.delay)??0)+(((H=r==null?void 0:r[1])==null?void 0:H.delay)??0));return E(i,n,u)},[n,u]),k=x.useCallback(e=>Q(T(w(e))),[w]),A=x.useCallback(()=>{Z(),ye(),C(),F()},[]),xe=x.useCallback(e=>{var s;return(e[0].estimated_tlm.estimated_tlm-e[0].estimated_tlm.estimated_tlm*(((s=e[0])==null?void 0:s.commission)/1e4)).toFixed(4)},[]),me=d||g||te||ne;return x.useEffect(()=>{const e=setInterval(()=>{a!=null&&a.favoriteLands.every(s=>Q(T(w(s[0].delay)))==="MINE")?(M(s=>!s),clearInterval(e)):M(s=>!s)},1e3);return M(s=>!s),()=>clearInterval(e)},[a==null?void 0:a.favoriteLands,u]),t.jsxs(_e,{children:[t.jsx(Me,{size:30,color:"#fff",onClick:ie}),t.jsxs(J,{children:["Tool Favorites (",a==null?void 0:a.favoriteTools.length,"/3)"]}),t.jsx(Ie,{children:d?Array.from({length:3}).map((e,s)=>t.jsx(Ze,{},s)):(a==null?void 0:a.favoriteTools.length)===0?t.jsx(K,{children:t.jsx("span",{children:"You don't have any favorite tool"})}):(N=a==null?void 0:a.favoriteTools)==null?void 0:N.map((e,s)=>t.jsxs($e,{isSelected:$===s,children:[t.jsx(Ae,{children:e.map(r=>t.jsx(Pe,{rarity:r.rarity,title:r.name,children:t.jsx("img",{src:`https://ipfs.alienworlds.io/ipfs/${r.img}`,alt:r.name})},Y()))}),t.jsxs(Ne,{children:[t.jsx(j,{noBorder:!0,color:"eleventh",disabled:$===s||f,isLoading:f,onClick:()=>le(e),children:"Equip"}),t.jsx(j,{disabled:f,isLoading:f,onClick:()=>ce(e),noBorder:!0,children:"Remove from favorites"})]})]},Y()))}),t.jsxs(Ve,{children:[t.jsxs(J,{children:[t.jsxs("span",{children:["Land Favorites (",a==null?void 0:a.favoriteLands.length,"/20)"]}),t.jsx(qe,{isLoading:me,onClick:A,children:t.jsx(De,{})})]}),t.jsx(Ue,{children:d?Array.from({length:8}).map((e,s)=>t.jsx(Ye,{},s)):(a==null?void 0:a.favoriteLands.length)===0?t.jsx(K,{children:t.jsx("span",{children:"You don't have any favorite land"})}):a==null?void 0:a.favoriteLands.sort((e,s)=>T(w(e[0].delay)).difference-T(w(s[0].delay)).difference).flatMap(e=>t.jsxs(ze,{children:[t.jsx(He,{src:`/assets/planets/${e[0].planetName.toLowerCase()}.png`,alt:e[0].planetName,title:e[0].planetName}),t.jsx(Ge,{children:t.jsx("img",{src:`/assets/lands/${e[0].landName}.webp`,alt:e[0].landName,title:e[0].landName})}),t.jsxs(W,{children:[t.jsx("span",{children:"Estimated TLM:"}),t.jsxs("span",{children:[xe(e),t.jsx(Ce,{})]})]}),t.jsxs(W,{children:[t.jsx("span",{children:"Estimated shards:"}),t.jsxs("span",{children:[fe(e[0].cardid)," ",t.jsx(ke,{})]})]}),t.jsxs(W,{children:[t.jsx("span",{children:"Estimated MCP:"}),t.jsxs("span",{children:[re(e[0].luck).toLocaleString("US-en")," ",t.jsx(Te,{})]})]}),t.jsxs(Qe,{children:[t.jsx(j,{isLoading:f,disabled:f,onClick:()=>de(e[0].assetId),color:"eleventh",children:"Select"}),t.jsx(j,{color:"eleventh",isLoading:f||_,disabled:f||_||k(e[0].delay)!=="MINE",onClick:()=>pe(e[0].assetId),children:k(e[0].delay)==="MINE"?"Mine":k(e[0].delay)})]}),t.jsx(j,{isLoading:f,disabled:f,onClick:()=>oe(e),noBorder:!0,children:"Remove from favorites"})]},e[0].assetId))})]})]})};export{cs as default};
