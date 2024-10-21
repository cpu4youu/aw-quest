import{P as u,X as o,a6 as p,s as x,R as T,_ as S,b as I,c as y,r as D,n as $,j as a}from"./index-f4aa6c71.js";import{f as L}from"./format-currency-usd-c3f487ff.js";import{i as R}from"./index-02db6826.js";import{i as E}from"./index-ce587e2e.js";import{d as Y}from"./index-eed71dca.js";import{e as A}from"./index-202fc0c5.js";import"./index-ea76b77d.js";import"./index-335dcdf8.js";function v(r,t){u(2,arguments);var e=o(r),n=o(t),i=e.getTime()-n.getTime();return i<0?-1:i>0?1:i}var F=6e4,P=36e5;function C(r,t){u(2,arguments);var e=o(r),n=o(t),i=e.getFullYear()-n.getFullYear(),d=e.getMonth()-n.getMonth();return i*12+d}function N(r,t){u(2,arguments);var e=o(r),n=o(t);return e.getFullYear()-n.getFullYear()}function j(r,t){return u(2,arguments),o(r).getTime()-o(t).getTime()}var b={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(t){return t<0?Math.ceil(t):Math.floor(t)}},q="trunc";function _(r){return r?b[r]:b[q]}function z(r,t,e){u(2,arguments);var n=j(r,t)/P;return _(e==null?void 0:e.roundingMethod)(n)}function O(r,t,e){u(2,arguments);var n=j(r,t)/F;return _(e==null?void 0:e.roundingMethod)(n)}function U(r){u(1,arguments);var t=o(r),e=t.getMonth();return t.setFullYear(t.getFullYear(),e+1,0),t.setHours(23,59,59,999),t}function V(r){u(1,arguments);var t=o(r);return A(t).getTime()===U(t).getTime()}function H(r,t){u(2,arguments);var e=o(r),n=o(t),i=v(e,n),d=Math.abs(C(e,n)),l;if(d<1)l=0;else{e.getMonth()===1&&e.getDate()>27&&e.setDate(30),e.setMonth(e.getMonth()-i*d);var s=v(e,n)===-i;V(o(r))&&d===1&&v(r,n)===1&&(s=!1),l=i*(d-Number(s))}return l===0?0:l}function G(r,t,e){u(2,arguments);var n=j(r,t)/1e3;return _(e==null?void 0:e.roundingMethod)(n)}function B(r,t){u(2,arguments);var e=o(r),n=o(t),i=v(e,n),d=Math.abs(N(e,n));e.setFullYear(1584),n.setFullYear(1584);var l=v(e,n)===-i,s=i*(d-Number(l));return s===0?0:s}function K(r){u(1,arguments);var t=o(r.start),e=o(r.end);if(isNaN(t.getTime()))throw new RangeError("Start Date is invalid");if(isNaN(e.getTime()))throw new RangeError("End Date is invalid");var n={};n.years=Math.abs(B(e,t));var i=v(e,t),d=p(t,{years:i*n.years});n.months=Math.abs(H(e,d));var l=p(d,{months:i*n.months});n.days=Math.abs(Y(e,l));var s=p(l,{days:i*n.days});n.hours=Math.abs(z(e,s));var f=p(s,{hours:i*n.hours});n.minutes=Math.abs(O(e,f));var c=p(f,{minutes:i*n.minutes});return n.seconds=Math.abs(G(e,c)),n}const Q=x("div",{d:"flex",align:"flex-start",justify:"center",direction:"column",maxWidth:"525px",w:"100%","@sm":{align:"center",padding:"20px 10px",bg:"rgba(255, 255, 255, 0.05)"}}),X=x("h2",{w:"100%",color:"$white500"}),J=x("div",{d:"flex",align:"center",justify:"center",direction:"column",gap:"5px",mt:"15px",w:"100%",color:"$white500"}),h=x("div",{d:"flex",align:"center",justify:"space-between",gap:"5px",w:"100%",color:"$white500"}),g=x("span",{d:"flex",align:"center",justify:"center",gap:"5px",w:"100%",h:"45px",textAlign:"center",fw:"$normal",fs:"20px",ff:"$body",bg:"rgba(255, 255, 255, 0.03)",color:"$white500",variants:{highlight:{true:{fw:"$bold",color:"$yellow400"}}},"@xsm":{fs:"14px"}}),m=x("span",{d:"flex",align:"center",justify:"center",gap:"5px",bg:"rgba(255, 255, 255, 0.03)",w:"100%",h:"45px",ff:"$body",fw:"$normal",color:"$white500",variants:{highlight:{true:{fw:"$bold",color:"$yellow400"}}}}),M=T.lazy(()=>S(()=>import("./quest-5abc1527.js"),["assets/quest-5abc1527.js","assets/index-f4aa6c71.js","assets/index-55fec1ff.css"])),w=T.lazy(()=>S(()=>import("./tlm-8faf5efb.js"),["assets/tlm-8faf5efb.js","assets/index-f4aa6c71.js","assets/index-55fec1ff.css"])),st=()=>{var l;const r=I(s=>s.user),t=y(s=>s.currentWeek),e=y(s=>s.weeks),n=D.useMemo(()=>{const s=new Date,f=new Date(s.setDate(s.getDate()-7));return e==null?void 0:e.find(c=>R(f,new Date((c==null?void 0:c.end_date)??""))&&E(f,new Date((c==null?void 0:c.start_date)??"")))},[e]),i=((t==null?void 0:t.initial_prize_pool_formatted)??0)/(((t==null?void 0:t.total_quest_points)??0)/100),d=D.useMemo(()=>{const s=K({start:$,end:new Date((t==null?void 0:t.end_date)??"")});let f="";return s.days&&(f+=`${s.days}d `),s.hours&&(f+=`${s.hours}h `),s.minutes&&(f+=`${s.minutes}m `),f},[t==null?void 0:t.end_date]);return a.jsxs(Q,{children:[a.jsx(X,{children:"WEEKLY STATISTICS"}),a.jsxs(J,{children:[a.jsxs(h,{children:[a.jsx(g,{highlight:!0,children:"Prize Pool"}),a.jsxs(m,{highlight:!0,children:[L((t==null?void 0:t.initial_prize_pool_formatted)??0),a.jsx(w,{})]})]}),a.jsxs(h,{children:[a.jsxs(g,{children:["Total ",a.jsx(M,{})]}),a.jsxs(m,{children:[t==null?void 0:t.total_quest_points.toLocaleString("en-US")," "]})]}),a.jsxs(h,{children:[a.jsxs(g,{children:["Your ",a.jsx(M,{})]}),a.jsx(m,{children:(((l=r==null?void 0:r.userWeekly)==null?void 0:l.total_quest_points)??0).toLocaleString("en-US")})]}),a.jsxs(h,{children:[a.jsxs(g,{children:["Last Week Total ",a.jsx(M,{})]}),a.jsx(m,{children:((n==null?void 0:n.total_quest_points)??0).toLocaleString("en-US")})]}),a.jsxs(h,{children:[a.jsxs(g,{children:["Current TLM per 100 ",a.jsx(M,{})]}),a.jsxs(m,{children:[i.toLocaleString("en-US")," ",a.jsx(w,{color:"#fff"})]})]}),a.jsxs(h,{children:[a.jsx(g,{children:"Week ends in"}),a.jsx(m,{children:d})]})]})]})};export{st as default};