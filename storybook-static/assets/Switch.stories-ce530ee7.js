import{a as f,j as n}from"./jsx-runtime-29545a09.js";import{r as a}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const p=({inputProps:l,indicatorProps:m,containerProps:h,handleOnClick:t,checked:s})=>{const[c,o]=a.useState(!!s);return a.useEffect(()=>{o(s)},[s]),f("div",{className:"switch",...h,onClick:()=>{o(!c),t&&t()},children:[n("input",{className:"switch-state",type:"checkbox",...l,checked:c}),n("div",{className:"indicator",...m})]})};p.__docgenInfo={description:"",methods:[],displayName:"T1Switch"};const S={component:p,title:"Components/Switches"},e={argTypes:{checked:{control:"boolean"}},args:{checked:!1}};var r,i,d;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  argTypes: {
    checked: {
      control: 'boolean'
    }
  },
  args: {
    checked: false
  }
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const g=["Type_One"];export{e as Type_One,g as __namedExportsOrder,S as default};
//# sourceMappingURL=Switch.stories-ce530ee7.js.map
