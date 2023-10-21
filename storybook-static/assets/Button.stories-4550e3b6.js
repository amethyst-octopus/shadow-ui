import{j as l}from"./jsx-runtime-29545a09.js";import{r as d}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const a=({text:c,onPress:o,style:u,additionalDirectives:p})=>{const[i,t]=d.useState(!1);return l("button",{onMouseLeave:()=>t(!1),onFocus:()=>t(!0),onBlur:()=>t(!1),onClick:()=>{t(!0),o&&o()},tabIndex:0,className:i?"button button-focus":"button",style:u,...p,children:c})};a.__docgenInfo={description:"",methods:[],displayName:"T1Button"};const y={title:"Components/Buttons",component:a},e={argTypes:{onPress:{type:"function"}},args:{text:"Label"}};var n,s,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  argTypes: {
    onPress: {
      type: 'function'
    }
  },
  args: {
    text: 'Label'
  }
}`,...(r=(s=e.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const _=["Type_One"];export{e as Type_One,_ as __namedExportsOrder,y as default};
//# sourceMappingURL=Button.stories-4550e3b6.js.map
