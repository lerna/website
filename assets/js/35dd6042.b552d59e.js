"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[734],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},674:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"run-tasks",title:"Run Tasks",type:"explainer"},l="Run Tasks",u={unversionedId:"features/run-tasks",id:"features/run-tasks",title:"Run Tasks",description:"Monorepos can have hundreds or even thousands of projects, so being able to run npm scripts against all (or some) of",source:"@site/docs/features/run-tasks.md",sourceDirName:"features",slug:"/features/run-tasks",permalink:"/docs/features/run-tasks",draft:!1,editUrl:"https://github.com/lerna/lerna/tree/main/website/docs/features/run-tasks.md",tags:[],version:"current",frontMatter:{id:"run-tasks",title:"Run Tasks",type:"explainer"},sidebar:"main",previous:{title:"Bootstrap",permalink:"/docs/features/bootstrap"},next:{title:"Cache Task Results",permalink:"/docs/features/cache-tasks"}},p={},c=[{value:"Definitions",id:"definitions",level:2},{value:"Example Repository",id:"example-repository",level:2},{value:"Run Everything",id:"run-everything",level:2},{value:"Run a Single Task",id:"run-a-single-task",level:2},{value:"Run Tasks Affected by a PR",id:"run-tasks-affected-by-a-pr",level:2},{value:"Control How Tasks Run",id:"control-how-tasks-run",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"run-tasks"},"Run Tasks"),(0,o.kt)("p",null,"Monorepos can have hundreds or even thousands of projects, so being able to run npm scripts against all (or some) of\nthem is a key feature of a tool like Lerna."),(0,o.kt)("h2",{id:"definitions"},"Definitions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Command -")," anything the developer types into the terminal (e.g., ",(0,o.kt)("inlineCode",{parentName:"li"},"lerna run build --scope=header --concurrency=5"),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Target -")," the name of an npm script (e.g., ",(0,o.kt)("inlineCode",{parentName:"li"},"build"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Task -")," an invocation of an npm script (e.g., ",(0,o.kt)("inlineCode",{parentName:"li"},"header:build"),").")),(0,o.kt)("h2",{id:"example-repository"},"Example Repository"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Examples are based on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lerna/getting-started-example"},"this repository"),", so feel free to clone it\nand follow along.")),(0,o.kt)("h2",{id:"run-everything"},"Run Everything"),(0,o.kt)("p",null,"Each project has the ",(0,o.kt)("inlineCode",{parentName:"p"},"test")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," scripts defined."),(0,o.kt)("p",null,"Run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx lerna run build\n")),(0,o.kt)("p",null,"This will build the projects in the right order: ",(0,o.kt)("inlineCode",{parentName:"p"},"footer")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"header")," and then ",(0,o.kt)("inlineCode",{parentName:"p"},"remixapp"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Terminal Output"',title:'"Terminal','Output"':!0},"    \u2714  header:build (501ms)\n    \u2714  footer:build (503ms)\n    \u2714  remixapp:build (670ms)\n\n \u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\n\n >  Lerna (powered by Nx)   Successfully ran target build for 3 projects (1s)\n\n")),(0,o.kt)("p",null,"Note that Lerna doesn't care what each of the build scripts does. The name ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," is also ",(0,o.kt)("strong",{parentName:"p"},"not")," special: it's simply\nthe name of the npm script."),(0,o.kt)("h2",{id:"run-a-single-task"},"Run a Single Task"),(0,o.kt)("p",null,"While developing you rarely run all the builds or all the tests. Instead, you often run things only against the projects\nyou are changing. For instance, you can run the ",(0,o.kt)("inlineCode",{parentName:"p"},"header")," tests like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx lerna run test --scope=header\n")),(0,o.kt)("h2",{id:"run-tasks-affected-by-a-pr"},"Run Tasks Affected by a PR"),(0,o.kt)("p",null,"You can also run a command for all the projects affected in your PR like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx lerna run test --since=origin/main\n")),(0,o.kt)("p",null,"Learn more ",(0,o.kt)("a",{parentName:"p",href:"../api-reference/commands"},"here"),"."),(0,o.kt)("h2",{id:"control-how-tasks-run"},"Control How Tasks Run"),(0,o.kt)("p",null,"For more control over the order tasks are executed, edit the ",(0,o.kt)("a",{parentName:"p",href:"../concepts/task-pipeline-configuration"},"Task Pipeline Configuration"),"."),(0,o.kt)("p",null,"To speed up your task execution, learn how to ",(0,o.kt)("a",{parentName:"p",href:"./cache-tasks"},"Cache Task Results")," and ",(0,o.kt)("a",{parentName:"p",href:"./distribute-tasks"},"Distribute Task Execution")))}m.isMDXComponent=!0}}]);