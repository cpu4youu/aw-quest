import{k as m,S as l,T as g,l as _,Q as d,b as c,q as h,J as y,W as b,m as f,K as M,M as O,O as v}from"./index-98ed5c5a.js";import{a as E,t as p,o as R}from"./user-miners-query-4e3734b1.js";const x=async e=>{const t=await m({options:{code:l.TOOLS_MC,index_position:1,limit:"10000",scope:l.TOOLS_MC,table:g.wallets,reverse:!0,lower_bound:e,upper_bound:e}});return t==null?void 0:t[0]},z=()=>_({queryKey:[d.toolsWallets],queryFn:()=>A(),staleTime:1e3*60*20,enabled:!!c.getState().user});async function C(){return await h.invalidateQueries([d.toolsWallets])}async function A(){try{const e=c.getState().user;if(!e)return;const t=await x(e.name);return t||void 0}catch(e){console.log(e);return}}const L=async e=>await m({options:{code:l.TOOLS_MC,index_position:3,key_type:"i64",limit:"10000",scope:l.TOOLS_MC,table:g.tools,reverse:!0,lower_bound:e,upper_bound:e}}),N=async e=>await m({options:{code:l.TOOLS_MC,index_position:1,limit:"10000",scope:l.TOOLS_MC,table:g.toolov,upper_bound:e,lower_bound:e}}),B=()=>_({queryKey:[d.toolsMc],queryFn:()=>Q(),staleTime:1e3*60*20,enabled:!!c.getState().user});async function I(){return await h.invalidateQueries([d.toolsMc])}async function Q(){try{const e=c.getState().user;if(!e)return;const t=await L(e.name),i=await N();if(!t)return{stakedTools:[],toolsOv:i||[]};const{getTemplates:u}=E,w=await u({template_id:t.map(({template_id:s})=>s).join(","),page:1,limit:100,order:"desc"});return{stakedTools:t==null?void 0:t.map(s=>{const n=w.find(a=>a.template_id===String(s.template_id)),o=i==null?void 0:i.find(a=>a.template_id===s.template_id);return n?{...n.immutable_data,...o,...s}:s}),toolsOv:i||[]}}catch(e){console.log(e);return}}function U(e){var t;return e?((t=e[0])==null?void 0:t.toUpperCase())+e.slice(1):""}function T(e,t){var i,u;if(console.log({err:e}),!!e)return e instanceof y.RpcError&&console.log(JSON.stringify(e.json,null,2)),e&&(e!=null&&e.message)?U((u=(i=e==null?void 0:e.message)==null?void 0:i.replace("assertion failure with message: ",""))==null?void 0:u.replace("- 3","")):t??e.message}const k=async e=>{const t=await m({options:{code:l.M__FEDERATION,index_position:1,limit:"1000",scope:l.M__FEDERATION,table:g.MINERCLAIM,lower_bound:e,upper_bound:e}});return(t==null?void 0:t[0])??null},J=()=>_({queryKey:[d.MINER_CLAIM],queryFn:()=>F(),staleTime:1e3*60*60*24,enabled:!!c.getState().user});async function q(){return await h.invalidateQueries(d.MINER_CLAIM)}async function F(){const e=c.getState().user;if(!e)return null;try{return await k(e.name)}catch(t){return console.log(t),null}}function P(){async function e(r,s){try{const n=c.getState().user,o=c.getState().ual;if(!o)throw new Error("UAL is not initialized");if(!n)throw new Error("User is not logged in");const a=n.userType;return o.activeUser instanceof b?await u(o,r):a==="anchor"?await i(o,r):a==="wax"?await t(r,s):!1}catch(n){return console.log(n),f.error(T(n),p),!1}}async function t(r,s){const n=c.getState().ual;if(!n)throw new Error("UAL is not initialized");try{const o=await n.activeUser.signTransaction(r,{blocksBehind:3,expireSeconds:1200,...s});return console.log("returned",o),!0}catch(o){return console.log(o),o.message==="assertion failure with message: ERR::MINE_TOO_SOON::Mine too soon"?(await R(),await I(),await C(),await q(),f.error("This tool was used recently. Please use another or wait until the cooldown expires",p)):f.error(T(o),p),!1}}async function i(r,s){try{const n={actions:s.actions.filter(a=>(a==null?void 0:a.account)!=="cpu.mc")},o=await r.activeUser.signTransaction(n,{blocksBehind:3,expireSeconds:1200});return console.log("returned",o),!0}catch(n){return console.log(n),f.error(T(n),p),!1}}async function u(r,s){console.log("ual-wombat",r);try{const n={actions:s.actions.filter(o=>(o==null?void 0:o.account)!=="cpu.mc")};return await r.activeUser.signTransaction(n,{expireSeconds:120,blocksBehind:3}),!0}catch(n){return console.log(n),f.error(T(n),p),!1}}async function w(r){const s=localStorage.getItem(`${M}_server`),o=`https:${O[Number(s)].value}`,a=new y.JsonRpc(o,{fetch}),S=new v.JsSignatureProvider(["5KfNZXk82jua4CEnir7KRC4eyG8VaGzgfu6myXRnLLL6mjjsESj"]);return new y.Api({rpc:a,signatureProvider:S,textDecoder:new TextDecoder,textEncoder:new TextEncoder}).serializeActions(r)}return{executeTransaction:e,serializeActions:w}}export{C as a,q as b,B as c,P as d,J as e,N as g,I as o,z as u};
