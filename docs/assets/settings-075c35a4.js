import{k as r,S as t,T as n,l as a,Q as o}from"./index-f4aa6c71.js";const u=async()=>await r({options:{code:t.MEMBERS_MC,index_position:1,limit:"10000",scope:t.MEMBERS_MC,table:n.SETTINGS}}),S=()=>a({queryKey:[o.MC_SETTINGS],queryFn:()=>s(),staleTime:1e3*60*60*24});async function s(){try{const e=await u();return e!=null&&e[0]?e==null?void 0:e[0]:null}catch(e){return console.log(e),null}}export{S as u};