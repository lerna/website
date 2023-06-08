"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[461],{3905:(e,t,U)=>{U.d(t,{Zo:()=>s,kt:()=>c});var r=U(7294);function n(e,t,U){return t in e?Object.defineProperty(e,t,{value:U,enumerable:!0,configurable:!0,writable:!0}):e[t]=U,e}function o(e,t){var U=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),U.push.apply(U,r)}return U}function i(e){for(var t=1;t<arguments.length;t++){var U=null!=arguments[t]?arguments[t]:{};t%2?o(Object(U),!0).forEach((function(t){n(e,t,U[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(U)):o(Object(U)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(U,t))}))}return e}function a(e,t){if(null==e)return{};var U,r,n=function(e,t){if(null==e)return{};var U,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)U=o[r],t.indexOf(U)>=0||(n[U]=e[U]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)U=o[r],t.indexOf(U)>=0||Object.prototype.propertyIsEnumerable.call(e,U)&&(n[U]=e[U])}return n}var M=r.createContext({}),l=function(e){var t=r.useContext(M),U=t;return e&&(U="function"==typeof e?e(t):i(i({},t),e)),U},s=function(e){var t=l(e.components);return r.createElement(M.Provider,{value:t},e.children)},F={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var U=e.components,n=e.mdxType,o=e.originalType,M=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=l(U),c=n,u=p["".concat(M,".").concat(c)]||p[c]||F[c]||o;return U?r.createElement(u,i(i({ref:t},s),{},{components:U})):r.createElement(u,i({ref:t},s))}));function c(e,t){var U=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=U.length,i=new Array(o);i[0]=p;var a={};for(var M in t)hasOwnProperty.call(t,M)&&(a[M]=t[M]);a.originalType=e,a.mdxType="string"==typeof e?e:n,i[1]=a;for(var l=2;l<o;l++)i[l]=U[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,U)}p.displayName="MDXCreateElement"},8502:(e,t,U)=>{U.r(t),U.d(t,{assets:()=>M,contentTitle:()=>i,default:()=>F,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=U(7462),n=(U(7294),U(3905));const o={id:"editor-integrations",title:"Editor Integrations",type:"recipe"},i="Editor Integrations",a={unversionedId:"features/editor-integrations",id:"features/editor-integrations",title:"Editor Integrations",description:"Nx Console displays the npm scripts for all your projects in the VS Code sidebar and allows you to run them with a single click or open the script definition in your editor.",source:"@site/docs/features/editor-integrations.md",sourceDirName:"features",slug:"/features/editor-integrations",permalink:"/docs/features/editor-integrations",draft:!1,editUrl:"https://github.com/lerna/lerna/tree/main/website/docs/features/editor-integrations.md",tags:[],version:"current",frontMatter:{id:"editor-integrations",title:"Editor Integrations",type:"recipe"},sidebar:"main",previous:{title:"Version and Publish",permalink:"/docs/features/version-and-publish"},next:{title:"Workspace Watching",permalink:"/docs/features/workspace-watching"}},M={},l=[{value:"Download",id:"download",level:2},{value:"VSCode",id:"vscode",level:3},{value:"WebStorm",id:"webstorm",level:3},{value:"Nx Console for VSCode",id:"nx-console-for-vscode",level:2}],s={toc:l};function F(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"editor-integrations"},"Editor Integrations"),(0,n.kt)("p",null,"Nx Console displays the npm scripts for all your projects in the VS Code sidebar and allows you to run them with a single click or open the script definition in your editor."),(0,n.kt)("h2",{id:"download"},"Download"),(0,n.kt)("h3",{id:"vscode"},"VSCode"),(0,n.kt)("p",null,"If you are using ",(0,n.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"VSCode"),", you can install the ",(0,n.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console"},"Nx Console VSCode Plugin")," from Marketplace. The Nx Console VSCode Plugin is ",(0,n.kt)("strong",{parentName:"p"},"built and maintained by the Nx team"),"."),(0,n.kt)("h3",{id:"webstorm"},"WebStorm"),(0,n.kt)("p",null,"If you are using ",(0,n.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/webstorm/"},"WebStorm"),", you can install one of the available plugins:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://plugins.jetbrains.com/plugin/15000-nx-webstorm"},"nx-webstorm")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://plugins.jetbrains.com/plugin/15101-nx-console-idea"},"Nx Console Idea"))),(0,n.kt)("p",null,"These plugins are ",(0,n.kt)("strong",{parentName:"p"},"NOT")," built or maintained by the Nx team. They are maintained by independent community contributors."),(0,n.kt)("h2",{id:"nx-console-for-vscode"},"Nx Console for VSCode"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Nx Console logo",src:U(903).Z,width:"536",height:"97"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console"},"Install from the VSCode Marketplace")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/nrwl/nx-console"},"Contribute on GitHub"))))}F.isMDXComponent=!0},903:(e,t,U)=>{U.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);