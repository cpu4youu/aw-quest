import{g as r,S as o,aJ as u,T as i,a as l,Q as c,aK as y}from"./index-508e1e45.js";const S=async e=>{var t;const a=await r({options:{code:o.AWLNDRATINGS,index_position:1,limit:"1000",scope:u[e],table:i.plntconfigs}});return((t=a==null?void 0:a[0])==null?void 0:t.data)??[]},f=()=>l({queryKey:[c.plntConfigState],queryFn:()=>T(),staleTime:1e3*60*60});async function T(){try{const e=async(t,s)=>{const n=await S(s);return!n||(n==null?void 0:n.length)===0||(t={...await t,[s]:n[0].value}),t};return await y.reduce(e,{})??{}}catch(e){return console.log(e),{}}}export{f as u};
