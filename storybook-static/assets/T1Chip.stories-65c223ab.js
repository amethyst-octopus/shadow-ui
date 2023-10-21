import{a as u,j as o}from"./jsx-runtime-29545a09.js";import{r as c}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const i=({label:p,onSelect:d,initialState:t=!1,children:m,style:f})=>{const[s,a]=c.useState(t),h=()=>{a(!s),d()};return c.useEffect(()=>{a(t)},[t]),u("div",{role:"checkbox",className:s?"t1-chip selected":"t1-chip",style:f,onClick:h,children:[o("div",{class:"t1-chip-icon",children:m}),o("div",{class:"t1-chip-label-container",children:p})]})};i.__docgenInfo={description:"",methods:[],displayName:"T1Chip",props:{initialState:{defaultValue:{value:"false",computed:!1},required:!1}}};const T={component:i,title:"Components/Chips",expanded:!0,argTypes:{onSelect:{control:{type:"function"}},initialState:{control:"boolean"}}},e={args:{label:"Liminal Space",initialState:!1,onSelect:()=>{}}};var n,l,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'Liminal Space',
    initialState: false,
    onSelect: () => {}
  }
}`,...(r=(l=e.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};const _=["Type_One"];export{e as Type_One,_ as __namedExportsOrder,T as default};
//# sourceMappingURL=T1Chip.stories-65c223ab.js.map
