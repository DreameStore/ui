"use strict";(self.webpackChunk_dreame_ui_kit=self.webpackChunk_dreame_ui_kit||[]).push([[473],{"./src/components/icons/Icons.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Colored:()=>Colored,ListOfIcons:()=>ListOfIcons,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Text__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Text/index.ts"),_DiscountIcon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/icons/DiscountIcon.tsx"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/icons/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Icons"},icons=Object.entries(___WEBPACK_IMPORTED_MODULE_2__),IconWrapper=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"flex items-center\tjustify-center flex-col p-8 bg-[#ffffff]",...props});IconWrapper.displayName="IconWrapper";const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_DiscountIcon__WEBPACK_IMPORTED_MODULE_1__.R,{...args});Template.displayName="Template";const Basic=Template.bind({}),Colored=Template.bind({});Colored.args={color:"magenta"};const ListTemplate=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"grid grid-cols-4 gap-4 p-4 bg-button-tertiary",children:icons.map((_ref=>{let[key,icon]=_ref;const Icon=icon;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(IconWrapper,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"mb-4",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Icon,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_0__.x,{size:"sm",weight:"semibold",children:`<${key} />`})]},key)}))});ListTemplate.displayName="ListTemplate";const ListOfIcons=ListTemplate.bind({});Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"args => <DiscountIcon {...args} />",...Basic.parameters?.docs?.source}}},Colored.parameters={...Colored.parameters,docs:{...Colored.parameters?.docs,source:{originalSource:"args => <DiscountIcon {...args} />",...Colored.parameters?.docs?.source}}},ListOfIcons.parameters={...ListOfIcons.parameters,docs:{...ListOfIcons.parameters?.docs,source:{originalSource:'() => <div className="grid grid-cols-4 gap-4 p-4 bg-button-tertiary">\n    {icons.map(([key, icon]) => {\n    const Icon = icon;\n    return <IconWrapper key={key}>\n          <div className="mb-4">\n            <Icon />\n          </div>\n          <Text size="sm" weight="semibold">\n            {`<${key} />`}\n          </Text>\n        </IconWrapper>;\n  })}\n  </div>',...ListOfIcons.parameters?.docs?.source}}};const __namedExportsOrder=["Basic","Colored","ListOfIcons"]},"./src/components/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});var clsx_m=__webpack_require__("./node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.1_webpack@5.89.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.1_webpack@5.89.0/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.1_webpack@5.89.0/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.1_webpack@5.89.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.1_webpack@5.89.0/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.1_webpack@5.89.0/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Text_module=__webpack_require__("./node_modules/.pnpm/css-loader@6.7.1_webpack@5.89.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/.pnpm/postcss-loader@7.0.1_postcss@8.4.31_webpack@5.89.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Text/Text.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Text_module.Z,options);const Text_Text_module=Text_module.Z&&Text_module.Z.locals?Text_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const Text=_ref=>{let{as="p",size="base",color,weight,className,...rest}=_ref;const classes=(0,clsx_m.Z)({[Text_Text_module["txt-primary"]]:!color,[Text_Text_module["txt-secondary"]]:"secondary"===color,[Text_Text_module["txt-tertiary"]]:"tertiary"===color,[Text_Text_module["txt-error"]]:"error"===color,[Text_Text_module["txt-success"]]:"success"===color,[Text_Text_module["txt-xs"]]:"xs"===size,[Text_Text_module["txt-sm"]]:"sm"===size,[Text_Text_module["txt-md"]]:"md"===size,[Text_Text_module["txt-base"]]:"base"===size,[Text_Text_module["txt-lg"]]:"lg"===size,[Text_Text_module["txt-xl"]]:"xl"===size,[Text_Text_module["txt-bold"]]:"bold"===weight,[Text_Text_module["txt-semibold"]]:"semibold"===weight,[Text_Text_module["txt-regular"]]:"regular"===weight},className),CustomTag=as;return(0,jsx_runtime.jsx)(CustomTag,{className:classes,...rest})};Text.displayName="Text";try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{as:{defaultValue:{value:"p"},description:"",name:"as",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"symbol"'},{value:'"object"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}},size:{defaultValue:{value:"base"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"base"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"error"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"success"'}]}},weight:{defaultValue:null,description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"normal"'},{value:'"regular"'},{value:'"semibold"'},{value:'"bold"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Text/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/components/Text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Text/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>_Text__WEBPACK_IMPORTED_MODULE_0__.x});var _Text__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Text/Text.tsx")},"./node_modules/.pnpm/css-loader@6.7.1_webpack@5.89.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/.pnpm/postcss-loader@7.0.1_postcss@8.4.31_webpack@5.89.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Text/Text.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_7_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/css-loader@6.7.1_webpack@5.89.0/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_7_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_7_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/css-loader@6.7.1_webpack@5.89.0/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_7_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".SsKMtMvxLyjRUTwyQQl4 {\n\n    --tw-text-opacity: 1;\n\n    color: rgb(57 64 82 / var(--tw-text-opacity))\n}\n\n.v26xu9fKeA7C_1bUPYWi {\n\n    --tw-text-opacity: 1;\n\n    color: rgb(138 145 159 / var(--tw-text-opacity))\n}\n\n.DeqR2mdOZhhphEyo_Ifx {\n\n    --tw-text-opacity: 1;\n\n    color: rgb(238 241 247 / var(--tw-text-opacity))\n}\n\n.XcWCAP0YDUYLGGlgQXge {\n\n    --tw-text-opacity: 1;\n\n    color: rgb(182 87 87 / var(--tw-text-opacity))\n}\n\n.GdvqUz7HskVa5iTTl2RT {\n\n    --tw-text-opacity: 1;\n\n    color: rgb(44 155 42 / var(--tw-text-opacity))\n}\n\n.MFOzf69P5Zlz5TwYBsMY {\n\n    font-size: 1.1rem;\n\n    line-height: 1.6rem\n}\n\n.U9iXAdieYzd3aV04S0BG {\n\n    font-size: 1.2rem;\n\n    line-height: 2.1rem\n}\n\n.ct5ErN76y2cHY13GZ0W_ {\n\n    font-size: 1.6rem;\n\n    line-height: 2.3rem\n}\n\n.PxM1lNjBwYqUAW1LPhIU {\n\n    font-size: 1.4rem;\n\n    line-height: 2.1rem\n}\n\n.J3SlLirxhubf0SKDEa1s {\n\n    font-size: 2.4rem;\n\n    line-height: 3.2rem\n}\n\n.INLGcVimrNdQWe2qqu9X {\n\n    font-size: 3.2rem;\n\n    line-height: 4.6rem\n}\n\n.dEtEBiitdno9OjNJn4k1 {\n\n    font-weight: 700\n}\n\n.ZzFyYFoof8347JlajMby {\n\n    font-weight: 600\n}\n\n.WTbboTMI7K6IrfCXI1pU {\n\n    font-weight: 500\n}\n","",{version:3,sources:["webpack://./src/components/Text/Text.module.css"],names:[],mappings:"AACE;;IAAA,oBAAwB;;IAAxB;AAAwB;;AAIxB;;IAAA,oBAA0B;;IAA1B;AAA0B;;AAI1B;;IAAA,oBAAyB;;IAAzB;AAAyB;;AAIzB;;IAAA,oBAAsB;;IAAtB;AAAsB;;AAItB;;IAAA,oBAAwB;;IAAxB;AAAwB;;AAIxB;;IAAA,iBAAc;;IAAd;AAAc;;AAId;;IAAA,iBAAc;;IAAd;AAAc;;AAId;;IAAA,iBAAc;;IAAd;AAAc;;AAId;;IAAA,iBAAgB;;IAAhB;AAAgB;;AAIhB;;IAAA,iBAAc;;IAAd;AAAc;;AAId;;IAAA,iBAAc;;IAAd;AAAc;;AAId;;IAAA;AAAgB;;AAIhB;;IAAA;AAAoB;;AAIpB;;IAAA;AAAmB",sourcesContent:[".txt-primary {\n  @apply text-text-primary;\n}\n\n.txt-secondary {\n  @apply text-text-secondary;\n}\n\n.txt-tertiary {\n  @apply text-text-tertiary;\n}\n\n.txt-error {\n  @apply text-text-error;\n}\n\n.txt-success {\n  @apply text-text-success;\n}\n\n.txt-xs {\n  @apply text-xs;\n}\n\n.txt-sm {\n  @apply text-sm;\n}\n\n.txt-md {\n  @apply text-md;\n}\n\n.txt-base {\n  @apply text-base;\n}\n\n.txt-lg {\n  @apply text-lg;\n}\n\n.txt-xl {\n  @apply text-xl;\n}\n\n.txt-bold {\n  @apply font-bold;\n}\n\n.txt-semibold {\n  @apply font-semibold;\n}\n\n.txt-regular {\n  @apply font-regular;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"txt-primary":"SsKMtMvxLyjRUTwyQQl4","txt-secondary":"v26xu9fKeA7C_1bUPYWi","txt-tertiary":"DeqR2mdOZhhphEyo_Ifx","txt-error":"XcWCAP0YDUYLGGlgQXge","txt-success":"GdvqUz7HskVa5iTTl2RT","txt-xs":"MFOzf69P5Zlz5TwYBsMY","txt-sm":"U9iXAdieYzd3aV04S0BG","txt-md":"ct5ErN76y2cHY13GZ0W_","txt-base":"PxM1lNjBwYqUAW1LPhIU","txt-lg":"J3SlLirxhubf0SKDEa1s","txt-xl":"INLGcVimrNdQWe2qqu9X","txt-bold":"dEtEBiitdno9OjNJn4k1","txt-semibold":"ZzFyYFoof8347JlajMby","txt-regular":"WTbboTMI7K6IrfCXI1pU"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);