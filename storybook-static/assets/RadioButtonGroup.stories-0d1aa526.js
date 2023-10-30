import{j as t,a as m}from"./jsx-runtime-29545a09.js";import{r as b}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const c=({id:e,name:s,value:a,selected:r,label:p,onChange:o})=>t("div",{className:"radio",children:m("label",{className:"radio-label",htmlFor:e,children:[t("input",{className:"radio-state",type:"radio",id:e,name:s,value:a,onChange:o,checked:r===a}),t("span",{className:"custom-radio"}),t("span",{className:"label-text",children:p})]})}),u=({name:e,options:s})=>{const[a,r]=b.useState(null),p=o=>{r(o.target.value)};return t("div",{className:"radio-button-group",children:s.map(o=>t(c,{name:e,selected:a,onChange:p,...o},o.label))})};c.__docgenInfo={description:"",methods:[],displayName:"RadioButton"};u.__docgenInfo={description:"",methods:[],displayName:"T1RadioButtonGroup"};const _={title:"Components/Radio Buttons",component:u},n={args:{options:[{id:"opt1",label:"Option 1",value:"opt1"},{id:"opt2",label:"Option 2",value:"opt2"},{id:"opt3",label:"Option 3",value:"opt3"}]}};var i,l,d;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    options: [{
      id: "opt1",
      label: "Option 1",
      value: "opt1"
    }, {
      id: "opt2",
      label: "Option 2",
      value: "opt2"
    }, {
      id: "opt3",
      label: "Option 3",
      value: "opt3"
    }]
  }
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const v=["Type_One"];export{n as Type_One,v as __namedExportsOrder,_ as default};
//# sourceMappingURL=RadioButtonGroup.stories-0d1aa526.js.map
