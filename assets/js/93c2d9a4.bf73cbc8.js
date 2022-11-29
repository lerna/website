"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[822],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(t),g=r,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||o;return t?a.createElement(m,i(i({ref:n},c),{},{components:t})):a.createElement(m,i({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5871:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=t(7462),r=(t(7294),t(3905));const o={id:"alternate-bootstrapping-methods",title:"Legacy: Alternate Bootstrapping Methods",type:"explainer"},i="Legacy: Alternate Bootstrapping Methods",p={unversionedId:"concepts/alternate-bootstrapping-methods",id:"concepts/alternate-bootstrapping-methods",title:"Legacy: Alternate Bootstrapping Methods",description:"NOTE: Lerna's legacy package management capabilities are being deprecated in Lerna v7, please see here for full background",source:"@site/docs/concepts/alternate-bootstrapping-methods.md",sourceDirName:"concepts",slug:"/concepts/alternate-bootstrapping-methods",permalink:"/docs/concepts/alternate-bootstrapping-methods",draft:!1,editUrl:"https://github.com/lerna/lerna/tree/main/website/docs/concepts/alternate-bootstrapping-methods.md",tags:[],version:"current",frontMatter:{id:"alternate-bootstrapping-methods",title:"Legacy: Alternate Bootstrapping Methods",type:"explainer"},sidebar:"main",previous:{title:"Distributed Task Execution Guide",permalink:"/docs/concepts/dte-guide"},next:{title:"Legacy: Hoisting",permalink:"/docs/concepts/hoisting"}},s={},l=[{value:"Hoisting",id:"hoisting",level:2},{value:"Linking Different Folders",id:"linking-different-folders",level:2}],c={toc:l};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"legacy-alternate-bootstrapping-methods"},"Legacy: Alternate Bootstrapping Methods"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"NOTE: Lerna's legacy package management capabilities are being deprecated in Lerna v7, ",(0,r.kt)("a",{parentName:"p",href:"../features/legacy-package-management"},"please see here for full background"))),(0,r.kt)("p",null,"There are several ways Lerna can set up your monorepo such that an app (",(0,r.kt)("inlineCode",{parentName:"p"},"remixapp"),") can find libraries in the same repo (",(0,r.kt)("inlineCode",{parentName:"p"},"header")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"footer"),"), and one of them is to make it such that the ",(0,r.kt)("inlineCode",{parentName:"p"},"header")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"footer")," end up in the ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," folder of ",(0,r.kt)("inlineCode",{parentName:"p"},"remixapp")," (or a different folder at the root)--that's what ",(0,r.kt)("inlineCode",{parentName:"p"},"lerna bootstrap")," (without ",(0,r.kt)("inlineCode",{parentName:"p"},"--use-workspaces"),") does."),(0,r.kt)("p",null,"Running ",(0,r.kt)("inlineCode",{parentName:"p"},"lerna bootstrap")," will invoke ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install")," in each of the packages, and will link local package such that the resulting structure will look like this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"lerna bootstrap\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"packages/\n    header/\n        node_modules/\n            react/\n            ...\n        src/\n            ...\n        package.json\n        rollup.config.json\n        jest.config.js\n\n    footer/\n        node_modules/\n            react/\n            ...\n        src/\n            ...\n        package.json\n        rollup.config.json\n        jest.config.js\n\n    remixapp/\n        node_modules/\n            react/\n            header (symlinked to ../../header)\n            footer (symlinked to ../../footer)\n            ...\n        app/\n            ...\n        public/\n        package.json\n        remix.config.js\n\npackage.json\n")),(0,r.kt)("h2",{id:"hoisting"},"Hoisting"),(0,r.kt)("p",null,"By default, Lerna is going to run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install")," in every directory which results in node modules duplication. You can dedupe the packages by passing ",(0,r.kt)("inlineCode",{parentName:"p"},"--hoist"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"lerna bootstrap --hoist\n")),(0,r.kt)("p",null,"the following happens:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"node_modules/\n    react/\n    header (symlinked to ../packages/header)\n    footer (symlinked to ../packages/footer)\n            ...\npackages/\n    header/\n        src/\n            ...\n        package.json\n        rollup.config.json\n        jest.config.js\n\n    footer/\n        src/\n            ...\n        package.json\n        rollup.config.json\n        jest.config.js\n\n    remixapp/\n        app/\n            ...\n        public/\n        package.json\n        remix.config.js\n\npackage.json\n")),(0,r.kt)("p",null,"Read more about ",(0,r.kt)("a",{parentName:"p",href:"../concepts/hoisting"},"hoisting in the corresponding guide"),"."),(0,r.kt)("h2",{id:"linking-different-folders"},"Linking Different Folders"),(0,r.kt)("p",null,"By default, Lerna links the contents of the folder."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"node_modules/\n    header/\n        src/\n        package.json\n        rollup.config.json\n        jest.config.js\n            ...\npackages/\n    header/\n        src/\n            ...\n        package.json\n        rollup.config.json\n        jest.config.js\n")),(0,r.kt)("p",null,"This happens to work if you set the main property to point to the compiler artifact, like the ",(0,r.kt)("inlineCode",{parentName:"p"},"header")," package does."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="packages/header/package.json"',title:'"packages/header/package.json"'},'{\n  "name": "header",\n  "version": "0.1.0",\n  "private": true,\n  "main": "dist/index.js",\n  "scripts": {\n    "build": "rm -rf dist && rollup --config",\n    "test": "jest"\n  }\n}\n')),(0,r.kt)("p",null,"You can also link a subdirectory as follows using ",(0,r.kt)("inlineCode",{parentName:"p"},"lerna bootstrap --contents=dist"),". The name has to apply to all the\npackages."))}d.isMDXComponent=!0}}]);