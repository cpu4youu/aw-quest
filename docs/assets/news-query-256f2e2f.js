import{g as S,S as p,T as g,c as w,a as F,Q as T,a7 as h,m as A}from"./index-a29f3f38.js";const y=async()=>await S({options:{code:p.MISSION_CONTROL,index_position:1,limit:"10000",scope:p.MISSION_CONTROL,table:g.BLOGS}}),d={label:"All",value:"all"},b=w((t,r)=>({newsFilters:[d],updateNewsFilters:e=>m(t,e),newsFiltersSelected:d,updateNewsFiltersSelected:e=>N(t,e)}));function m(t,r){t(e=>({...e,newsFilters:[d,...r]}))}function N(t,r){t(e=>({...e,newsFiltersSelected:r}))}const q=()=>F({queryKey:[T.NEWS],queryFn:()=>v(),staleTime:1e3*60*60});async function v(){try{const t=await y();if(!t)return null;const r=O(t),e=C(r),n=b.getState().updateNewsFilters;return n(e),await x(r)}catch(t){return console.log(t),null}}function C(t){return t.map(r=>{if(r.blogid==="mining-matters"){const e=b.getState().updateNewsFiltersSelected;e({label:r.blogname,value:r.blogid})}return{label:r.blogname,value:r.blogid}})}function O(t){const r=t.map(e=>({...e,url:`https%3A%2F%2Fmedium.com%2Ffeed%2F${e.blogid}`}));return[...r,{id:r[r.length-1].id+1,blogid:"alien-articles",blogname:"Alienw.com",url:"https%3A%2F%2Falienw.com%2Ffeed"}]}async function x(t){const r=await _(t);return{all:r.reduce((n,a)=>{var l;return((l=a==null?void 0:a.loadedArticles)==null?void 0:l.length)>0&&n.push(a.loadedArticles),n},[]).flat().sort((n,a)=>new Date(n.published).getTime()>new Date(a.published).getTime()?-1:1),...r.reduce((n,a)=>{var l;return n[a.blogid]=(l=a==null?void 0:a.loadedArticles)==null?void 0:l.sort((s,o)=>new Date(s.published).getTime()>new Date(o.published).getTime()?-1:1),n},{})}}const i=["https://rss-to-json-serverless-api.vercel.app/api?feedURL=","https://api.rss2json.com/v1/api.json?rss_url=","https://api.apyhub.com/convert/rss-url/json","https://rss-to-json-mc.vercel.app/api?url="];async function _(t){const r=[];for(const e of t){let n=0,a=0,l=!1;do try{if(i[n]==="https://api.apyhub.com/convert/rss-url/json"){const s={method:"POST",url:"https://api.apyhub.com/convert/rss-url/json",params:{detailed:"true"},headers:{"apy-token":"APY0RZnFoIUDElOH2WDX0UTaoNLdIXvSVWsUV5vjr0hnzu94p2eV0S32khkFBrO53pz4vjBVWoWdsA","Content-Type":"application/json"},data:{url:decodeURIComponent(e.url)}},{data:o}=await h.request(s);l=!1;const u=f(o,i[n]);r.push({...e,loadedArticles:u})}else{const{data:s}=await h(`${i[n]}${e.url}`);l=!1;const o=f(s,i[n]);r.push({...e,loadedArticles:o})}await A(1e3)}catch{l=!0,n++,n===i.length&&(a++,n=0),a===3&&(l=!1)}while(l)}return r}function f(t,r){return r==="https://api.apyhub.com/convert/rss-url/json"?t==null?void 0:t.items.map(e=>{var o,u,c;const a=new DOMParser().parseFromString(e.content_html,"text/html"),l=a.querySelector("p"),s=a.querySelector("img");return!l||!l.textContent?{...e,description:"",thumbnail:s==null?void 0:s.getAttribute("src")}:{...e,link:e.url,author:(e==null?void 0:e.authors[0].name)??((o=t==null?void 0:t.feed)==null?void 0:o.title),published:e.date_published,description:l.textContent,thumbnail:(s==null?void 0:s.getAttribute("src"))??((u=e==null?void 0:e.enclosure)==null?void 0:u.thumbnail)??((c=t==null?void 0:t.feed)==null?void 0:c.image)}}):r==="https://api.rss2json.com/v1/api.json?rss_url="?t==null?void 0:t.items.map(e=>{var o,u,c;const a=new DOMParser().parseFromString(e.content,"text/html"),l=a.querySelector("p"),s=a.querySelector("img");return{...e,author:(e==null?void 0:e.author)??((o=t==null?void 0:t.feed)==null?void 0:o.title),published:e.pubDate,description:(l==null?void 0:l.textContent)||"",thumbnail:(s==null?void 0:s.getAttribute("src"))??((u=e==null?void 0:e.enclosure)==null?void 0:u.thumbnail)??((c=t==null?void 0:t.feed)==null?void 0:c.image)}}):t==null?void 0:t.items.map(e=>{var o,u;const a=new DOMParser().parseFromString(e.content,"text/html"),l=a.querySelector("p"),s=a.querySelector("img");return!l||!l.textContent?{...e,description:"",thumbnail:s==null?void 0:s.getAttribute("src")}:{...e,author:(e==null?void 0:e.author)??(t==null?void 0:t.title),description:l.textContent,thumbnail:(s==null?void 0:s.getAttribute("src"))||((u=(o=e==null?void 0:e.media)==null?void 0:o.thumbnail)==null?void 0:u.url)||(t==null?void 0:t.image)}})}export{b as a,q as u};
