import{k as D,S as g,T as O,q as d,Q as _,l as Q,f as A}from"./index-98ed5c5a.js";import{p as T,g as R}from"./lands-db275151.js";import{a as E}from"./user-miners-query-4e3734b1.js";const M=async()=>await D({options:{code:g.MISSION_CONTROL,index_position:1,limit:"1000",scope:g.MISSION_CONTROL,table:O.LANDS}}),G=(o,e)=>{const a=d.getQueryData(_.TOOLS),n=d.getQueryData(_.LANDSTYPE),s=d.getQueryData(_.plntConfigState);return Q({queryKey:[_.LANDS,o,e],queryFn:()=>F(o,e),staleTime:1e3*60*60*24,enabled:!!a&&!!n&&!!s})};async function j(){return await d.refetchQueries(_.LANDS)}async function F(o,e){try{const a=await Promise.all(T.map(async r=>{const m=await R(r);return{title:r,img:`/assets/planets/${r}.png`,data:(m==null?void 0:m.pool_buckets.map(f=>({...f,value_formatted:A(f==null?void 0:f.value)??0})))??[]}})),n=P(a),s=await q(n,o,e),i=B(s);return{list:s,highestValue:i}}catch(a){console.log(a);return}}function P(o){return o.reduce((e,a)=>(a.data.forEach(n=>{var s,i;!e[n.key]&&n.value_formatted>0&&(e[n.key]={data:[]}),(i=(s=e[n.key])==null?void 0:s.data)==null||i.push({title:a.title,img:a.img,value:n.value,value_formatted:n.value_formatted})}),e),{})}function k(o,e){var n;const a=d.getQueryData(_.TOOLS);return o==="red"?{[(e==null?void 0:e.rarity)??""]:(e==null?void 0:e.mining_power)??0}:(n=a==null?void 0:a.userTools)==null?void 0:n.reduce((s,i)=>{const r=i==null?void 0:i.rarity;return s[r]?{...s,[r]:s[r]+(Number(i==null?void 0:i.mining_power)??0)}:{...s,[r]:(i==null?void 0:i.mining_power)??0}},{})}const V=async(o,e)=>{var r,m,f;const a=o.data.commission/1e4,n=d.getQueryData(_.plntConfigState),i=(((f=(m=(r=n==null?void 0:n[e.toLowerCase()])==null?void 0:r.find(({key:c})=>c==="min_commission"))==null?void 0:m.value)==null?void 0:f[1])||0)/1e4;return a<i?i:a};async function q(o,e,a){const n=k(e,a),s=await M();if(!n)return;const i=[],r=d.getQueryData(_.LANDSTYPE),m=r==null?void 0:r.find(l=>l.landname==="Geothermal Springs"),{getAssets:f}=E,c=await f({collection_name:"alien.worlds",schema_name:"land.worlds",ids:"1099512958192,1099512958746,1099512959648,1099512959709,1099512961065,1099512961484",page:1,limit:1e3}),p=await Promise.all(Object.keys(n).map(async(l,y)=>await Promise.all(o==null?void 0:o[l].data.map(async u=>{const t=s==null?void 0:s.find(v=>v.planet===u.title.toLowerCase()),C=c==null?void 0:c.find(v=>v.data.name.split("on ")[1].toLowerCase()===u.title.toLowerCase()),w=n[l]*((m==null?void 0:m.mining_power_mod)??0)/1e4,L=(w>=.8?.8:w)*u.value_formatted,N=t?await V(C,t.planet):0,h=L*N,S=L-h;return y===0&&i.push({img:u.img,title:u.title,value:"",value_formatted:0,land_name:t==null?void 0:t.land_name,location:t==null?void 0:t.location,asset_id:t==null?void 0:t.asset_id}),{img:u.img,title:u.title,value:`${S.toFixed(5)} TLM`,value_formatted:S,land_name:t==null?void 0:t.land_name,location:t==null?void 0:t.location,asset_id:t==null?void 0:t.asset_id}}))));return p==null?void 0:p.reduce((l,y)=>(y==null||y.forEach((u,t)=>{l[t]={...l[t],value_formatted:l[t].value_formatted+u.value_formatted,value:`${(l[t].value_formatted+u.value_formatted).toFixed(5)} TLM`}}),l),i)}function B(o){return o==null?void 0:o.reduce((e,a)=>a.value_formatted>e.value_formatted?a:e)}export{B as a,P as g,j as o,q as r,G as u};
