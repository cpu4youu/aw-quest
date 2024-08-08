import{s as r,e as ue,a as Z,Q as F,V as ee,R as l,_ as $,W as xe,aL as pe,h as L,b as A,j as t,aK as le,aG as fe,B as I,k as T,a1 as we,l as V,O as Y,aI as H}from"./index-63995674.js";import{B as he}from"./bolt-a0451dd3.js";import{u as ge}from"./index-d68241dd.js";import{a as je}from"./index.esm-c6471765.js";import{e as ye,a as be}from"./execute-remove-favorites-land-contract-a1a3255b.js";import{e as ve}from"./execute-add-favorites-land-contract copy-947ece68.js";import{u as _e}from"./get-planet-config-1514182f.js";import"./info-builder-14733544.js";const Se=["Rocky Desert","Grassland","Dormant Volcano","Icy Mountains","Rocky Crater","Sandy Desert","Mountains","Icy Desert","Rocky Coastline","Plains","Methane Swampland","Small Island","Dunes","Tree Forest","Geothermal Springs","Active Volcano","Mushroom Forest","Inland River","Grass Coastline","Sandy Coastline"],Le=r("div",{d:"flex",align:"center",justify:"flex-start",direction:"column",w:"100%",maxW:"1190px",padding:"0 10px",">svg":{mr:"auto",mt:"20px",cursor:"pointer"}}),W=r("h3",{d:"flex",mr:"auto",mt:"25px",gap:"10px",w:"100%",fs:"29px",fw:"$bold",ff:"$heading",color:"$white500","@sm":{fs:"18px",flexWrap:"wrap",span:{w:"100%"}}}),$e=r("div",{d:"flex",align:"center",justify:"flex-start",flexWrap:"wrap",gap:"20px",mt:"30px",mb:"30px",w:"100%","@sm":{justify:"center"}}),Ce=r("button",{d:"flex",align:"center",justify:"flex-start",direction:"column",variants:{isSelected:{true:{filter:"drop-shadow(0 0 0.75rem rgb(0, 186, 255))"}}}}),ke=r("p",{fs:"18px",fw:"$bold",ff:"$heading",color:"$white500",textTransform:"uppercase",mb:"10px"}),Re=r("img",{w:"75px",h:"75px"}),X=r("div",{d:"flex",align:"flex-start",justify:"center",direction:"column",margin:"auto",w:"100%","@md":{d:"flex",padding:"0 20px",flexWrap:"wrap"},"@sm":{align:"center",padding:"0px"}}),Ae=r("div",{d:"flex",align:"center",justify:"flex-start",flexWrap:"wrap",gap:"5px",mt:"15px",w:"100%",maxW:"900px","@md":{d:"flex",padding:"0 20px",flexWrap:"wrap"},"@sm":{justify:"center",padding:"0px"}}),Ie=r("button",{w:"82px",h:"82px",img:{objectFit:"cover",w:"82px",h:"82px"},"&:disabled":{cursor:"not-allowed",opacity:.5,filter:"grayscale(100%)"},variants:{isSelected:{true:{img:{border:"3px solid #00BAFF"}}}}}),E=r("div",{d:"flex",align:"center",justify:"center",gap:"5px",fs:"20px",ff:"$heading",fw:"$bold",color:"$white500",svg:{w:"30px",h:"30px"},"@sm":{}}),Te=r("button",{d:"flex",align:"center",justify:"center",ml:"auto",svg:{w:"30px",h:"30px"},"@sm":{}}),Ve=r("div",{d:"flex",align:"center",justify:"flex-start",gap:"15px",my:"25px",svg:{w:"30px",h:"30px"},"@sm":{flexWrap:"wrap"}}),J=r("div",{d:"flex",align:"center",justify:"center",gap:"5px",fs:"18px",ff:"$heading",fw:"$medium",color:"$white500",input:{padding:"5px",border:"2px solid $white500",br:"5px",h:"40px",w:"55px",maxW:"150px",fs:"18px",ff:"$heading",fw:"$medium","&.owner":{w:"150px"}},"@sm":{}}),We=r("button",{d:"flex",align:"center",justify:"center",ml:"auto",svg:{w:"30px",h:"30px"},"@sm":{}});r("p",{maxW:"900px",mr:"auto",fs:"18px",ff:"$body",fw:"$medium",color:"$white500","@sm":{fs:"18px"}});const Ee=r("div",{d:"flex",align:"center",justify:"flex-start",flexWrap:"wrap",gap:"25px",mt:"15px",w:"100%","@md":{d:"flex",justify:"center",padding:"0 20px"},"@sm":{padding:"0 10px"}}),Ge=r("div",{d:"flex",align:"flex-start",justify:"flex-start",direction:"column",position:"relative",span:{fs:"16px",ff:"$body",color:"$white500"},"@sm":{w:"100%",img:{objectFit:"cover",h:"140px",w:"100%"}}}),Ne=r("div",{d:"flex",align:"flex-start",justify:"flex-start",position:"absolute",fs:"16px",ff:"$heading",fw:"$bold",textShadow:"0px 2px 2px #000",color:"$white500",left:"5px",top:"5px","@sm":{w:"100%"}}),De=r("div",{d:"flex",align:"flex-start",justify:"flex-start",gap:"5px",w:"100%",">button":{h:"45px",w:"100%",maxW:"unset",minW:"unset",padding:"0",br:"10px","&:last-child":{w:"60px"},div:{br:"10px",fs:"16px",border:"none"}},"@sm":{w:"100%",">button":{"&:last-child":{w:"100%"}}}}),G=ue({"0%":{backgroundPosition:"0% 0%"},"100%":{backgroundPosition:"-135% 0%"}}),Oe=r("div",{d:"flex",w:"50%",h:"50px",mt:"10px",background:"linear-gradient( -90deg, rgba(255,255,255, .05), rgba(255,255,255, 0.07) ,rgba(255,255,255, .05))",br:"10px",backgroundSize:"400% 400%",animation:`${G} 1.2s ease-in-out infinite`,"@sm":{h:"60px",w:"100%"}}),ze=r("div",{d:"flex",w:"85%",h:"50px",mt:"10px",background:"linear-gradient( -90deg, rgba(255,255,255, .05), rgba(255,255,255, 0.07) ,rgba(255,255,255, .05))",br:"10px",backgroundSize:"400% 400%",animation:`${G} 1.2s ease-in-out infinite`,"@sm":{h:"120px",w:"100%"}}),Qe=r("div",{d:"flex",w:"240px",h:"220px",background:"linear-gradient( -90deg, rgba(255,255,255, .05), rgba(255,255,255, 0.07) ,rgba(255,255,255, .05))",br:"10px",backgroundSize:"400% 400%",animation:`${G} 1.2s ease-in-out infinite`,"@sm":{w:"100%",h:"240px"}}),Me=o=>Z({queryKey:[o,F.AvailableLands],queryFn:()=>Ue(o),staleTime:1e3*60*60});async function Ue(o){if(!o)return[];try{const{getTemplates:s}=ee;return(await s({collection_name:"alien.worlds",schema_name:"land.worlds",match:o,page:1,limit:100,order:"desc"})).map(h=>{const w=h.immutable_data.name.split(" on ");return{...h.immutable_data,planetName:w[1]||"",landName:w[0]||""}})}catch(s){return console.log(s),[]}}const qe=(o,s)=>Z({queryKey:[o,F.AvailableLands,s],queryFn:()=>Pe(o,s),staleTime:1e3*60*60});async function Pe(o,s){var f,h,w,d;if(!o)return[];try{const{getAssets:j}=ee;let x={collection_name:"alien.worlds",schema_name:"land.worlds",match:o,page:1,limit:1e3};return s!=null&&s.owner&&(x={collection_name:"alien.worlds",schema_name:"land.worlds",owner:s.owner,match:o,page:1,limit:1e3}),(f=s==null?void 0:s.coordinates)!=null&&f.x&&(x={collection_name:"alien.worlds",schema_name:"land.worlds",owner:s==null?void 0:s.owner,"immutable_data:number.x":s.coordinates.x,match:o.split(" on ")[1],page:1,limit:1e3}),(h=s==null?void 0:s.coordinates)!=null&&h.y&&(x={collection_name:"alien.worlds",schema_name:"land.worlds",owner:s==null?void 0:s.owner,"immutable_data:number.y":s.coordinates.y,match:o.split(" on ")[1],page:1,limit:1e3}),(w=s==null?void 0:s.coordinates)!=null&&w.x&&((d=s==null?void 0:s.coordinates)!=null&&d.y)&&(x={collection_name:"alien.worlds",schema_name:"land.worlds",owner:s==null?void 0:s.owner,"immutable_data:number.x":s.coordinates.x,"immutable_data:number.y":s.coordinates.y,match:o.split(" on ")[1],page:1,limit:1e3}),s!=null&&s.template_whitelist&&(x={collection_name:"alien.worlds",schema_name:"land.worlds",template_whitelist:s==null?void 0:s.template_whitelist.join(","),owner:s.owner,match:o,page:1,limit:1e3}),(await j(x)).map(u=>{const p=u.data.name.split(" on ");return{...u.data,assetId:u.asset_id,owner:u.owner,planetName:p[1]||"",landName:p[0]||""}})}catch(j){return console.log(j),[]}}const Be=l.lazy(()=>$(()=>import("./filter-05a1a4c0.js"),["assets/filter-05a1a4c0.js","assets/index-63995674.js","assets/index-55fec1ff.css"])),Ke=l.lazy(()=>$(()=>import("./search-2523a56f.js"),["assets/search-2523a56f.js","assets/index-63995674.js","assets/index-55fec1ff.css"])),Ye=l.lazy(()=>$(()=>import("./hearth-825d708a.js"),["assets/hearth-825d708a.js","assets/index-63995674.js","assets/index-55fec1ff.css"])),He=l.lazy(()=>$(()=>import("./hearth-broken-055fd5dc.js"),["assets/hearth-broken-055fd5dc.js","assets/index-63995674.js","assets/index-55fec1ff.css"])),Xe=l.lazy(()=>$(()=>import("./pickaxe-211f571a.js"),["assets/pickaxe-211f571a.js","assets/index-63995674.js","assets/index-55fec1ff.css"])),rt=()=>{var z,Q,M,U,q;const{data:o}=xe(),{data:s}=_e(),{data:f,isLoading:h}=pe(),w={template_whitelist:(o==null?void 0:o.landName)==="Mountains"?["19546","19530","19510","19496","19478","19463"]:[],owner:"",coordinates:{x:void 0,y:void 0}},[d,j]=L.useState(o==null?void 0:o.planetName),[x,N]=L.useState(o==null?void 0:o.landName),[u,p]=L.useState(!1),[D,te]=L.useState(!1),[C,y]=L.useState(w),m=A(e=>e.user),b=l.useRef(null),v=l.useRef(null),g=l.useRef(null);function se(){ge.setState({selectedPage:"main"})}function oe(e){j(e),y(n=>{var i;return{...n,owner:((i=g.current)==null?void 0:i.value)??""}})}function ne(e){var n,i;N(e),y(e==="Mountains"?{template_whitelist:["19546","19530","19510","19496","19478","19463"],owner:((n=g.current)==null?void 0:n.value)??"",coordinates:{x:void 0,y:void 0}}:{template_whitelist:[],owner:((i=g.current)==null?void 0:i.value)??"",coordinates:{x:void 0,y:void 0}})}function re(){var e,n,i,c,_,S,k,P,B,K;if(x==="Mountains"){y({template_whitelist:["19546","19530","19510","19496","19478","19463"],owner:((e=g.current)==null?void 0:e.value)??"",coordinates:{x:(n=b.current)!=null&&n.value?Number((i=b.current)==null?void 0:i.value):void 0,y:(c=v.current)!=null&&c.value?Number((_=v.current)==null?void 0:_.value):void 0}});return}y({owner:((S=g.current)==null?void 0:S.value)??"",coordinates:{x:(k=b.current)!=null&&k.value?Number((P=b.current)==null?void 0:P.value):void 0,y:(B=v.current)!=null&&B.value?Number((K=v.current)==null?void 0:K.value):void 0}})}async function ae(e){if(m){p(!0);try{await ye(m,e)&&(await T(1e3),await we(),V.success("Land added to current setup"))}catch(n){console.error(n)}finally{p(!1)}}}async function ie(e){if(m){p(!0);try{if(await ve(m,e)){await T(1e3);const i=await Y(m==null?void 0:m.name);A.setState(c=>({...c,user:c.user?{...c.user,...i}:null})),await H(),V.success("Current Land added to favorites")}}catch(n){console.error(n)}finally{p(!1)}}}async function ce(e){if(m){p(!0);try{if(await be(m,e)){await T(1e3);const i=await Y(m==null?void 0:m.name);A.setState(c=>({...c,user:c.user?{...c.user,...i}:null})),await H(),V.success("Land removed from favorites")}}catch(n){console.error(n)}finally{p(!1)}}}const me=e=>f==null?void 0:f.favoriteLands.some(n=>n.map(({assetId:i})=>i).join(",")===e),{data:R}=Me(d),{data:a,isLoading:O}=qe(`${x} on ${d}`,C),de=e=>{var c,_,S;const i=(((S=(_=(c=s==null?void 0:s[(d==null?void 0:d.toLowerCase())||""])==null?void 0:c.find(({key:k})=>k==="min_commission"))==null?void 0:_.value)==null?void 0:S[1])||0)/100;return e<i?i:e};return t.jsxs(Le,{children:[t.jsx(je,{size:30,color:"#fff",onClick:se}),t.jsx(W,{children:"Planet"}),t.jsx($e,{children:le.map(e=>t.jsxs(Ce,{onClick:()=>oe(e),isSelected:(d==null?void 0:d.toLowerCase())===e,children:[t.jsx(ke,{children:e}),t.jsx(Re,{src:`/assets/planets/${e}.png`,alt:e,title:e})]},e))}),t.jsxs(X,{children:[t.jsx(W,{children:"Land Type"}),t.jsx(Ae,{children:Se.map(e=>t.jsx(Ie,{onClick:()=>ne(e),disabled:!(R!=null&&R.some(n=>n.landName===e)),isSelected:x===e,children:t.jsx("img",{src:`/assets/lands/${e}.webp`,alt:e,title:e})},e))})]}),t.jsxs(X,{children:[O?t.jsxs(t.Fragment,{children:[t.jsx(Oe,{}),t.jsx(ze,{})]}):t.jsxs(t.Fragment,{children:[t.jsxs(W,{children:[a!=null&&a[0]?t.jsxs(t.Fragment,{children:[t.jsx("span",{children:(z=a==null?void 0:a[0])==null?void 0:z.landName}),t.jsxs(E,{children:[t.jsx(fe,{}),(((Q=a==null?void 0:a[0])==null?void 0:Q.luck)/10).toLocaleString("US-en")]}),t.jsxs(E,{children:[t.jsx(Xe,{}),(((M=a==null?void 0:a[0])==null?void 0:M.ease)/10).toLocaleString("US-en")]}),t.jsxs(E,{children:[t.jsx(he,{fill:!0,color:"white"}),(((U=a==null?void 0:a[0])==null?void 0:U.delay)/10).toLocaleString("US-en")]})]}):t.jsx("span",{children:"No lands found"}),t.jsx(Te,{onClick:()=>te(!D),children:t.jsx(Be,{})})]}),D&&t.jsxs(Ve,{children:[t.jsxs(J,{children:["Coordinates",t.jsx("input",{ref:b,type:"text",defaultValue:C.coordinates.x}),":",t.jsx("input",{ref:v,type:"text",defaultValue:C.coordinates.y})]}),t.jsxs(J,{children:["Owner",t.jsx("input",{ref:g,className:"owner",type:"text",defaultValue:C.owner})]}),t.jsx(We,{onClick:re,children:t.jsx(Ke,{})})]})]}),t.jsx(Ee,{children:O?Array.from({length:8}).map((e,n)=>t.jsx(Qe,{},n)):(q=a==null?void 0:a.sort((e,n)=>e.commission-n.commission))==null?void 0:q.map(e=>t.jsxs(Ge,{children:[t.jsxs(Ne,{children:[e==null?void 0:e.x,":",e==null?void 0:e.y]}),t.jsx("img",{src:`/assets/lands/${e.landName}.webp`,alt:e.landName,title:e.landName}),t.jsxs("span",{children:["Commission: ",de((e==null?void 0:e.commission)/100)," %"]}),t.jsxs("span",{children:["Owner: ",e==null?void 0:e.owner]}),t.jsxs(De,{children:[t.jsx(I,{isLoading:u,disabled:u,onClick:()=>ae(e.assetId),color:"solidBlue",children:"Select"}),me(e.assetId)?t.jsx(I,{isLoading:u,disabled:u,onClick:()=>ce(e.assetId),children:t.jsx(He,{})}):t.jsx(I,{isLoading:u,disabled:u,onClick:()=>ie(e.assetId),color:"gradientYellow",children:t.jsx(Ye,{})})]})]},e.assetId))})]})]})};export{rt as default};
