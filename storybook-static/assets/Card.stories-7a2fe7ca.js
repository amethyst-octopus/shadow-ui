import{a as g,j as d}from"./jsx-runtime-29545a09.js";import{r as s}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";function m(t){if(t.length==4){let o=t.slice(1,2),l=t.slice(2,3),a=t.slice(3,4);return o=parseInt(o+o,16),l=parseInt(l+l,16),a=parseInt(a+a,16),{r:o,g:l,b:a}}const e=parseInt(t.slice(1,3),16),n=parseInt(t.slice(3,5),16),r=parseInt(t.slice(5,7),16);return{r:e,g:n,b:r}}function i(t){let e="#";for(let n in t){const r=t[n].toString(16);e+=r.length===2?r:"0"+r}return e}function f(t){let e=m(t),n={};for(let o in e){let l=Math.round(Math.min(Math.max(0,e[o]+e[o]*.15),255));n[o]=l}n=i(n);let r={};for(let o in e){let l=Math.round(Math.min(Math.max(0,e[o]+e[o]*-.15),255));r[o]=l}return r=i(r),{lightShadow:n,darkShadow:r}}function h(){const t=window.getComputedStyle(document.body,null).getPropertyValue("background-color"),e=window.getComputedStyle(document.body.parentElement,null).getPropertyValue("background-color");return t==="rgba(0, 0, 0, 0)"||!t?e:t}function x(t){t=t.replace(/[^0-9,]/g,"").split(",");let e={};return e.r=parseInt(t[0]),e.g=parseInt(t[1]),e.b=parseInt(t[2]),e}function b(){let t=h(),e=x(t);return i(e)}const p=({bgColor:t=b(),media:e,text:n})=>{const[r]=s.useState(t),[o,l]=s.useState({});s.useEffect(()=>{l(f(r))},[r]);let a={margin:"2rem",maxWidth:"30%",display:"flex",overflow:"hidden",flexDirection:"column",borderRadius:"50px",background:r,boxShadow:`20px 20px 40px ${o.darkShadow},
                 -20px -20px 40px ${o.lightShadow}`},u={borderRadius:"50px",padding:"1rem",paddingBottom:"0.2rem",maxHeight:"33.33%"},c={paddingRight:"1rem",paddingLeft:"1rem"};return e?g("div",{style:a,children:[d("img",{style:u,src:e}),d("p",{style:c,children:n})]}):d("div",{style:a,children:d("p",{style:c,children:n})})};p.__docgenInfo={description:"",methods:[],displayName:"T1Card",props:{bgColor:{defaultValue:{value:"startingHexColor()",computed:!0},required:!1}}};const w={component:p,title:"Components/Cards"},I=[];export{I as __namedExportsOrder,w as default};
//# sourceMappingURL=Card.stories-7a2fe7ca.js.map
