function n(e,i=1){const o=["","k","M","B","T"];let t=0,f=e;for(;f>=1e3&&t<o.length-1;)f/=1e3,t++;return`${e>999?f.toFixed(i):Math.floor(e)} ${o[t]}`}export{n as f};
