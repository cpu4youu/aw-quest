function l(e,i=1){const r=["","","k","M","B","T"];let t=0,o=e;for(;o>=1e3&&t<r.length-1;)o/=1e3,t++;return`${e>999?o.toFixed(i).replace(".",","):Math.floor(e)} ${r[t]}`}export{l as m};
