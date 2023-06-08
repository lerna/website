"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[210],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8094:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={id:"lerna-and-nx",title:"Lerna and Nx",type:"explainer"},o="Lerna and Nx",i={unversionedId:"lerna-and-nx",id:"lerna-and-nx",title:"Lerna and Nx",description:"Nrwl (the company behind the open source build system Nx) has taken over stewardship of Lerna. Nx is a build system developed by ex-Googlers and utilizes many of the techniques used by internal Google tools. Lerna uses Nx to detect packages in the workspace and dependencies between them. Lerna defers to Nx's powerful task runner to run scripts, allowing you to run them in parallel, cache results, and distribute them across multiple machines, all while ensuring that dependencies between packages are respected.",source:"@site/docs/lerna-and-nx.md",sourceDirName:".",slug:"/lerna-and-nx",permalink:"/docs/lerna-and-nx",draft:!1,editUrl:"https://github.com/lerna/lerna/tree/main/website/docs/lerna-and-nx.md",tags:[],version:"current",frontMatter:{id:"lerna-and-nx",title:"Lerna and Nx",type:"explainer"},sidebar:"main",previous:{title:"Getting Started",permalink:"/docs/getting-started"},next:{title:"Features",permalink:"/docs/features"}},s={},u=[{value:"Lerna",id:"lerna",level:2},{value:"Features",id:"features",level:3},{value:"Cost",id:"cost",level:3},{value:"Set up",id:"set-up",level:3},{value:"Nx",id:"nx",level:2},{value:"Features",id:"features-1",level:3},{value:"Cost",id:"cost-1",level:3},{value:"Set up",id:"set-up-1",level:3},{value:"Nx Cloud",id:"nx-cloud",level:2},{value:"Features",id:"features-2",level:3},{value:"Cost",id:"cost-2",level:3},{value:"Set up",id:"set-up-2",level:3}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lerna-and-nx"},"Lerna and Nx"),(0,r.kt)("p",null,"Nrwl (the company behind the open source build system Nx) has taken over ",(0,r.kt)("a",{parentName:"p",href:"https://dev.to/nrwl/lerna-is-dead-long-live-lerna-3jal"},"stewardship of Lerna"),". ",(0,r.kt)("a",{parentName:"p",href:"https://nx.dev"},"Nx")," is a build system developed by ex-Googlers and utilizes many of the techniques used by internal Google tools. Lerna uses Nx to detect packages in the workspace and dependencies between them. Lerna defers to Nx's powerful task runner to run scripts, allowing you to run them in parallel, cache results, and distribute them across multiple machines, all while ensuring that dependencies between packages are respected."),(0,r.kt)("p",null,"The following is a high level overview of what each tool provides. Lerna can continue to be used by itself, and adding Nx Cloud for free on top can dramatically improve what you're already doing."),(0,r.kt)("h2",{id:"lerna"},"Lerna"),(0,r.kt)("h3",{id:"features"},"Features"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"./features/version-and-publish"},"Version")," - Automatically increment versions of packages, generate changelog information, create Github releases etc."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"./features/version-and-publish"},"Publish")," - Automatically create tags and publish packages to package registries, such as npm")),(0,r.kt)("h3",{id:"cost"},"Cost"),(0,r.kt)("p",null,"Free and open source"),(0,r.kt)("h3",{id:"set-up"},"Set up"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"npm install lerna")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"npx lerna init"))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"nx"},"Nx"),(0,r.kt)("h3",{id:"features-1"},"Features"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"./features/run-tasks"},"Run only tasks affected by a code change")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"./features/run-tasks"},"Run prerequisite tasks first")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"./features/cache-tasks"},"Cache task results locally")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"./features/project-graph"},"Visualize the project graph")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"./features/editor-integrations#nx-console-for-vscode"},"Nx Console")," - Visual Studio Code plugin")),(0,r.kt)("h3",{id:"cost-1"},"Cost"),(0,r.kt)("p",null,"Free and open source"),(0,r.kt)("h3",{id:"set-up-1"},"Set up"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"npx lerna add-caching")),(0,r.kt)("li",{parentName:"ul"},"Continue using Lerna as usual")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Lerna defers to Nx's power task runner behind the scenes to detect task dependencies. Some options for ",(0,r.kt)("inlineCode",{parentName:"p"},"lerna run")," behave differently than in older versions of Lerna. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/lerna6-obsolete-options"},"Using Lerna (Powered by Nx) to Run Tasks")," for more details on what differs from older versions of Lerna.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"nx-cloud"},"Nx Cloud"),(0,r.kt)("h3",{id:"features-2"},"Features"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"./features/cache-tasks#distributed-computation-caching"},"Share cached task results across the organization")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"./features/distribute-tasks"},"Distribute task execution")," efficiently across agent machines")),(0,r.kt)("h3",{id:"cost-2"},"Cost"),(0,r.kt)("p",null,"Free for open source projects"),(0,r.kt)("p",null,"For closed source repositories, the first 500 computation hours per month are free. Most repositories do not exceed this limit. $1 per computation hour after that."),(0,r.kt)("h3",{id:"set-up-2"},"Set up"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"npx nx connect-to-nx-cloud")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nx generate @nrwl/workspace:ci-workflow")," (or set up your CI manually)"),(0,r.kt)("li",{parentName:"ul"},"Continue using Lerna as usual")))}c.isMDXComponent=!0}}]);