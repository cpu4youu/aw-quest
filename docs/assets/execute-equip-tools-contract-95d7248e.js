import{S as s,u as e}from"./index-6c229e74.js";async function u(n,t){const{executeTransaction:a}=e(),o=c(n,t);return!!await a(o)}function c(n,t){return{actions:[{account:s.M__FEDERATION,name:"setbag",authorization:[{actor:n.name,permission:n.requestPermission}],data:{account:n.name,items:t}}]}}export{u as e};
