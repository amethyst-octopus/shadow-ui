import{j as e,a as p}from"./jsx-runtime-29545a09.js";import{r as h}from"./index-76fb7be0.js";import{F as b}from"./index.es-12263286.js";import"./_commonjsHelpers-de833af9.js";import"./index-edafa35b.js";import"./index-8d47fad6.js";const n=({id:s,initialState:r=!1,label:i})=>{const[o,m]=h.useState(r);return e("div",{className:"checkbox",children:p("label",{className:"checkbox-label",htmlFor:s,children:[e("input",{className:"checkbox-state",type:"checkbox",id:s,onChange:()=>{m(!o)},checked:o}),e("span",{className:"custom-checkbox",children:o?e(b,{className:"checkbox-icon",icon:"fa-solid fa-check"}):null}),e("span",{className:"label-text",children:i})]})})};n.__docgenInfo={description:"",methods:[],displayName:"T1Checkbox",props:{initialState:{defaultValue:{value:"false",computed:!1},required:!1}}};const N={title:"Components/Checkbox",component:n,argTypes:{initialState:{control:"boolean"}}},a={args:{label:"Checkbox label",initialState:!1}};var c,t,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox label',
    initialState: false
  }
}`,...(l=(t=a.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};const _=["Type_One"];export{a as Type_One,_ as __namedExportsOrder,N as default};
//# sourceMappingURL=Checkbox.stories-3760b058.js.map
