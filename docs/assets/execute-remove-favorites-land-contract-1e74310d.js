import{S as e,u as s}from"./index-d440dabc.js";async function l(n,a){const{executeTransaction:t}=s(),o=i(n,a);return!!await t(o)}function i(n,a){return{actions:[{account:e.M__FEDERATION,name:"setland",authorization:[{actor:n.name,permission:"active"}],data:{account:n.name,land_id:a}}]}}async function f(n,a){const{executeTransaction:t}=s(),o=r(n,a);return!!await t(o)}function r(n,a){return{actions:[{account:e.MEMBERS_MC,name:"remfavland",authorization:[{actor:n.name,permission:n.authorization.permission}],data:{wallet:n.name,asset_id:a}}]}}export{f as a,l as e};
