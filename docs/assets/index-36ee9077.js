import{s as e,e as x,j as t,I as p,B as l}from"./index-f4aa6c71.js";import{u as c}from"./information-query-13787e53.js";const d=e("div",{d:"flex",align:"center",justify:"center",direction:"column",gap:"30px",w:"100%",mt:"40px","@md":{justify:"center",padding:"0px 20px",flexWrap:"wrap"},"@sm":{padding:"0px "}}),m=e("h2",{w:"100%",color:"$white500"}),f=e("div",{d:"flex",align:"flex-start",justify:"flex-start",gap:"50px",w:"100%","@md":{gap:"20px"},"@sm":{direction:"column"}}),g=e("div",{d:"flex",align:"flex-start",justify:"center",direction:"column",w:"100%",maxW:"200px",h:"420px",">a":{w:"100%",mt:"auto",button:{h:"20px",minH:"35px",minW:"100%",fs:"12px"}},"@sm":{maxW:"100%",position:"relative",">a":{position:"absolute",bottom:"40px",left:"10px",w:"200px",button:{h:"40px"}}},"@xxsm":{w:"255px",h:"auto",m:"auto",">a":{top:"200px",bottom:"unset",left:"10px",w:"200px",button:{h:"40px"}}}}),u=e("div",{d:"flex",align:"center",justify:"center",position:"relative",h:"330px",w:"100%",gap:"10px",img:{border:" 1px solid #F4F4F4",objectFit:"cover",w:"100%",h:"330px"},"@xxsm":{h:"auto",img:{w:"255px",h:"255px"}}});e("p",{w:"100%",color:"#BEBEBE",ff:"$heading",fs:"12px",fw:"700","@sm":{fs:"12px"}});const h=e("p",{w:"100%",my:"5px",color:"$white500",ff:"$heading",fs:"14px",fw:"800"});e("p",{w:"100%",color:"$white500",ff:"$heading",fs:"10px",fw:"$thin","@sm":{fw:"500",fs:"12px"}});const w=x({"0%":{backgroundPosition:"0% 0%"},"100%":{backgroundPosition:"-135% 0%"}}),j=e("div",{mt:"10px",w:"100%",height:"200px",background:"linear-gradient( -90deg, rgba(3, 16, 32, 0.40), rgba(3, 16, 32, 0.75) ,rgba(3, 16, 32, 0.40))",br:"10px",backgroundSize:"400% 400%",animation:`${w} 1.2s ease-in-out infinite`}),y=()=>{var n,s;const{data:o,isLoading:r}=c();return t.jsxs(d,{children:[t.jsx(m,{children:"TUTORIALS"}),t.jsx(f,{children:r?Array.from({length:3},i=>i).map((i,a)=>t.jsx(j,{},a)):(s=(n=o==null?void 0:o.all)==null?void 0:n.slice(0,8))==null?void 0:s.map(i=>t.jsxs(g,{children:[t.jsx(u,{children:t.jsx("img",{src:`${p}/ipfs/${i.image}`,alt:"medium image"})}),t.jsx(h,{children:i.title}),t.jsx("a",{target:"_blank",href:i.link,rel:"noreferrer",children:t.jsx(l,{color:"gradientPink",children:"Learn more"})})]},i.link))})]})};export{y as default};